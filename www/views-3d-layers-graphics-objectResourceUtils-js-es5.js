(function () {
  var _templateObject, _templateObject2, _templateObject3, _templateObject4, _templateObject5, _templateObject6, _templateObject7, _templateObject8, _templateObject9, _templateObject10, _templateObject11, _templateObject12, _templateObject13, _templateObject14, _templateObject15, _templateObject16, _templateObject17, _templateObject18, _templateObject19, _templateObject20, _templateObject21, _templateObject22, _templateObject23, _templateObject24, _templateObject25, _templateObject26, _templateObject27, _templateObject28, _templateObject29, _templateObject30, _templateObject31, _templateObject32, _templateObject33, _templateObject34, _templateObject35, _templateObject36, _templateObject37, _templateObject38, _templateObject39, _templateObject40, _templateObject41, _templateObject42, _templateObject43, _templateObject44, _templateObject45, _templateObject46, _templateObject47, _templateObject48, _templateObject49, _templateObject50, _templateObject51, _templateObject52, _templateObject53, _templateObject54, _templateObject55, _templateObject56, _templateObject57, _templateObject58, _templateObject59, _templateObject60, _templateObject61, _templateObject62, _templateObject63, _templateObject64, _templateObject65, _templateObject66, _templateObject67, _templateObject68, _templateObject69, _templateObject70, _templateObject71, _templateObject72, _templateObject73, _templateObject74, _templateObject75, _templateObject76, _templateObject77, _templateObject78, _templateObject79, _templateObject80, _templateObject81, _templateObject82, _templateObject83, _templateObject84, _templateObject85, _templateObject86, _templateObject87, _templateObject88, _templateObject89, _templateObject90, _templateObject91, _templateObject92, _templateObject93, _templateObject94, _templateObject95, _templateObject96, _templateObject97, _templateObject98, _templateObject99, _templateObject100, _templateObject101, _templateObject102, _templateObject103, _templateObject104, _templateObject105, _templateObject106, _templateObject107, _templateObject108, _templateObject109, _templateObject110, _templateObject111, _templateObject112, _templateObject113, _templateObject114, _templateObject115, _templateObject116, _templateObject117, _templateObject118, _templateObject119, _templateObject120, _templateObject121, _templateObject122, _templateObject123, _templateObject124, _templateObject125, _templateObject126, _templateObject127, _templateObject128, _templateObject129, _templateObject130, _templateObject131, _templateObject132, _templateObject133, _templateObject134, _templateObject135, _templateObject136, _templateObject137, _templateObject138, _templateObject139, _templateObject140, _templateObject141, _templateObject142, _templateObject143, _templateObject144, _templateObject145, _templateObject146, _templateObject147, _templateObject148, _templateObject149, _templateObject150, _templateObject151, _templateObject152, _templateObject153, _templateObject154, _templateObject155, _templateObject156, _templateObject157, _templateObject158, _templateObject159, _templateObject160, _templateObject161, _templateObject162, _templateObject163, _templateObject164, _templateObject165, _templateObject166, _templateObject167, _templateObject168, _templateObject169, _templateObject170, _templateObject171, _templateObject172, _templateObject173, _templateObject174, _templateObject175, _templateObject176;

  function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

  function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

  function _iterableToArrayLimit(arr, i) { if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr))) return; var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

  function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

  function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }

  function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

  function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && Symbol.iterator in Object(iter)) return Array.from(iter); }

  function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }

  function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

  function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

  function _createForOfIteratorHelper(o, allowArrayLike) { var it; if (typeof Symbol === "undefined" || o[Symbol.iterator] == null) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e76) { throw _e76; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = o[Symbol.iterator](); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e77) { didErr = true; err = _e77; }, f: function f() { try { if (!normalCompletion && it["return"] != null) it["return"](); } finally { if (didErr) throw err; } } }; }

  function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

  function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

  function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

  function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

  function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

  function _get(target, property, receiver) { if (typeof Reflect !== "undefined" && Reflect.get) { _get = Reflect.get; } else { _get = function _get(target, property, receiver) { var base = _superPropBase(target, property); if (!base) return; var desc = Object.getOwnPropertyDescriptor(base, property); if (desc.get) { return desc.get.call(receiver); } return desc.value; }; } return _get(target, property, receiver || target); }

  function _superPropBase(object, property) { while (!Object.prototype.hasOwnProperty.call(object, property)) { object = _getPrototypeOf(object); if (object === null) break; } return object; }

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

  function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["views-3d-layers-graphics-objectResourceUtils-js"], {
    /***/
    "+JUG":
    /*!****************************************************!*\
      !*** ./node_modules/@arcgis/core/chunks/sphere.js ***!
      \****************************************************/

    /*! exports provided: a, b, c, d, e, f, g, h, i, j, k, l, m, n, o, p, q, s, w */

    /***/
    function JUG(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "a", function () {
        return P;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "b", function () {
        return z;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "c", function () {
        return _;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "d", function () {
        return L;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "e", function () {
        return U;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "f", function () {
        return R;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "g", function () {
        return T;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "h", function () {
        return C;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "i", function () {
        return E;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "j", function () {
        return V;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "k", function () {
        return B;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "l", function () {
        return F;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "m", function () {
        return G;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "n", function () {
        return I;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "o", function () {
        return J;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "p", function () {
        return D;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "q", function () {
        return K;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "s", function () {
        return Y;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "w", function () {
        return q;
      });
      /* harmony import */


      var _core_has_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ../core/has.js */
      "wSAH");
      /* harmony import */


      var _core_maybe_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ../core/maybe.js */
      "srIe");
      /* harmony import */


      var _core_Logger_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ../core/Logger.js */
      "6S2I");
      /* harmony import */


      var _core_mathUtils_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ../core/mathUtils.js */
      "OKTS");
      /* harmony import */


      var _vec3f64_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ./vec3f64.js */
      "Cy1f");
      /* harmony import */


      var _vec3_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ./vec3.js */
      "5DEt");
      /* harmony import */


      var _views_3d_support_mathUtils_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ../views/3d/support/mathUtils.js */
      "aAs6");
      /* harmony import */


      var _mat4_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! ./mat4.js */
      "15Hh");
      /* harmony import */


      var _core_ObjectStack_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! ../core/ObjectStack.js */
      "IRkY");
      /* harmony import */


      var _views_3d_support_stack_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! ../views/3d/support/stack.js */
      "8JEK");
      /* harmony import */


      var _vector_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
      /*! ./vector.js */
      "IEcw");
      /* harmony import */


      var _ray_js__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
      /*! ./ray.js */
      "QFRQ");
      /*
      All material copyright ESRI, All Rights Reserved, unless otherwise specified.
      See https://js.arcgis.com/4.18/esri/copyright.txt for details.
      */


      var O = _core_Logger_js__WEBPACK_IMPORTED_MODULE_2__["default"].getLogger("esri.views.3d.support.geometryUtils.sphere");

      function _(t) {
        return t ? {
          radius: t.radius,
          center: Object(_vec3f64_js__WEBPACK_IMPORTED_MODULE_4__["b"])(t.center)
        } : {
          radius: 1,
          center: Object(_vec3f64_js__WEBPACK_IMPORTED_MODULE_4__["c"])()
        };
      }

      function q(t, r) {
        var e = N.get();
        return e.radius = t, e.center = r || W, e;
      }

      function P(t) {
        var r = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : _();
        return R(t.radius, t.center, r);
      }

      function R(t, r) {
        var e = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : _();
        return Object(_vec3_js__WEBPACK_IMPORTED_MODULE_5__["g"])(e.center, r), e.radius = t, e;
      }

      function U(t, r, e) {
        return t !== e && Object(_vec3_js__WEBPACK_IMPORTED_MODULE_5__["g"])(e.center, t.center), e.radius = t.radius + r, e;
      }

      function z(t, r, e) {
        return O.error("sphere.setExtent is not yet supported"), t === e ? e : P(t, e);
      }

      function E(r, e, s) {
        if (Object(_core_maybe_js__WEBPACK_IMPORTED_MODULE_1__["isNone"])(e)) return !1;
        var n = Object(_vec3_js__WEBPACK_IMPORTED_MODULE_5__["f"])(_views_3d_support_stack_js__WEBPACK_IMPORTED_MODULE_9__["sv3d"].get(), e.origin, r.center),
            i = Object(_vec3_js__WEBPACK_IMPORTED_MODULE_5__["d"])(e.direction, e.direction),
            f = 2 * Object(_vec3_js__WEBPACK_IMPORTED_MODULE_5__["d"])(e.direction, n),
            d = f * f - 4 * i * (Object(_vec3_js__WEBPACK_IMPORTED_MODULE_5__["d"])(n, n) - r.radius * r.radius);
        if (d < 0) return !1;
        var m = Math.sqrt(d);
        var g = (-f - m) / (2 * i);
        var p = (-f + m) / (2 * i);
        return (g < 0 || p < g && p > 0) && (g = p), !(g < 0) && (s && Object(_vec3_js__WEBPACK_IMPORTED_MODULE_5__["b"])(s, e.origin, Object(_vec3_js__WEBPACK_IMPORTED_MODULE_5__["a"])(_views_3d_support_stack_js__WEBPACK_IMPORTED_MODULE_9__["sv3d"].get(), e.direction, g)), !0);
      }

      function L(t, r, e, s) {
        return E(t, Object(_ray_js__WEBPACK_IMPORTED_MODULE_11__["g"])(r, e, Q), s);
      }

      function T(t, r) {
        return E(t, r, null);
      }

      function C(t, r, e) {
        if (E(t, r, e)) return e;
        var s = V(t, r, _views_3d_support_stack_js__WEBPACK_IMPORTED_MODULE_9__["sv3d"].get());
        return Object(_vec3_js__WEBPACK_IMPORTED_MODULE_5__["b"])(e, r.origin, Object(_vec3_js__WEBPACK_IMPORTED_MODULE_5__["a"])(_views_3d_support_stack_js__WEBPACK_IMPORTED_MODULE_9__["sv3d"].get(), r.direction, Object(_vec3_js__WEBPACK_IMPORTED_MODULE_5__["k"])(r.origin, s) / Object(_vec3_js__WEBPACK_IMPORTED_MODULE_5__["l"])(r.direction))), e;
      }

      function V(t, r, e) {
        var s = _views_3d_support_stack_js__WEBPACK_IMPORTED_MODULE_9__["sv3d"].get(),
            n = _views_3d_support_stack_js__WEBPACK_IMPORTED_MODULE_9__["sm4d"].get();

        Object(_vec3_js__WEBPACK_IMPORTED_MODULE_5__["c"])(s, r.origin, r.direction), Object(_vec3_js__WEBPACK_IMPORTED_MODULE_5__["c"])(e, s, r.origin), Object(_vec3_js__WEBPACK_IMPORTED_MODULE_5__["a"])(e, e, 1 / Object(_vec3_js__WEBPACK_IMPORTED_MODULE_5__["l"])(e) * t.radius);
        var i = G(t, r.origin),
            o = Object(_vector_js__WEBPACK_IMPORTED_MODULE_10__["a"])(r.origin, e);
        return Object(_mat4_js__WEBPACK_IMPORTED_MODULE_7__["i"])(n), Object(_mat4_js__WEBPACK_IMPORTED_MODULE_7__["r"])(n, n, o + i, s), Object(_vec3_js__WEBPACK_IMPORTED_MODULE_5__["i"])(e, e, n), e;
      }

      function B(t, r, e) {
        return E(t, r, e) ? e : (Object(_ray_js__WEBPACK_IMPORTED_MODULE_11__["h"])(r, t.center, e), D(t, e, e));
      }

      function D(t, r, e) {
        var s = Object(_vec3_js__WEBPACK_IMPORTED_MODULE_5__["f"])(_views_3d_support_stack_js__WEBPACK_IMPORTED_MODULE_9__["sv3d"].get(), r, t.center),
            n = Object(_vec3_js__WEBPACK_IMPORTED_MODULE_5__["a"])(_views_3d_support_stack_js__WEBPACK_IMPORTED_MODULE_9__["sv3d"].get(), s, t.radius / Object(_vec3_js__WEBPACK_IMPORTED_MODULE_5__["l"])(s));
        return Object(_vec3_js__WEBPACK_IMPORTED_MODULE_5__["b"])(e, n, t.center);
      }

      function F(t, r) {
        var e = Object(_vec3_js__WEBPACK_IMPORTED_MODULE_5__["f"])(_views_3d_support_stack_js__WEBPACK_IMPORTED_MODULE_9__["sv3d"].get(), r, t.center),
            s = Object(_vec3_js__WEBPACK_IMPORTED_MODULE_5__["o"])(e),
            n = t.radius * t.radius;
        return Math.sqrt(Math.abs(s - n));
      }

      function G(t, r) {
        var s = Object(_vec3_js__WEBPACK_IMPORTED_MODULE_5__["f"])(_views_3d_support_stack_js__WEBPACK_IMPORTED_MODULE_9__["sv3d"].get(), r, t.center),
            n = Object(_vec3_js__WEBPACK_IMPORTED_MODULE_5__["l"])(s),
            i = t.radius + Math.abs(t.radius - n);
        return Object(_core_mathUtils_js__WEBPACK_IMPORTED_MODULE_3__["acosClamped"])(t.radius / i);
      }

      var H = Object(_vec3f64_js__WEBPACK_IMPORTED_MODULE_4__["c"])();

      function I(t, r, e, s) {
        var n = Object(_vec3_js__WEBPACK_IMPORTED_MODULE_5__["f"])(H, r, t.center);

        switch (e) {
          case 0:
            {
              var _t = Object(_views_3d_support_mathUtils_js__WEBPACK_IMPORTED_MODULE_6__["cartesianToSpherical"])(n, H)[2];
              return Object(_vec3_js__WEBPACK_IMPORTED_MODULE_5__["s"])(s, -Math.sin(_t), Math.cos(_t), 0);
            }

          case 1:
            {
              var _t2 = Object(_views_3d_support_mathUtils_js__WEBPACK_IMPORTED_MODULE_6__["cartesianToSpherical"])(n, H),
                  _r = _t2[1],
                  _e = _t2[2],
                  i = Math.sin(_r);

              return Object(_vec3_js__WEBPACK_IMPORTED_MODULE_5__["s"])(s, -i * Math.cos(_e), -i * Math.sin(_e), Math.cos(_r));
            }

          case 2:
            return Object(_vec3_js__WEBPACK_IMPORTED_MODULE_5__["n"])(s, n);

          default:
            return;
        }
      }

      function J(t, r) {
        var e = Object(_vec3_js__WEBPACK_IMPORTED_MODULE_5__["f"])(X, r, t.center);
        return Object(_vec3_js__WEBPACK_IMPORTED_MODULE_5__["l"])(e) - t.radius;
      }

      function K(t, r, e, s) {
        var n = J(t, r),
            i = I(t, r, 2, X),
            o = Object(_vec3_js__WEBPACK_IMPORTED_MODULE_5__["a"])(X, i, e - n);
        return Object(_vec3_js__WEBPACK_IMPORTED_MODULE_5__["b"])(s, r, o), s;
      }

      var N = new _core_ObjectStack_js__WEBPACK_IMPORTED_MODULE_8__["ObjectStack"](function () {
        return {
          center: null,
          radius: 0
        };
      }),
          Q = Object(_ray_js__WEBPACK_IMPORTED_MODULE_11__["c"])(),
          W = Object(_vec3f64_js__WEBPACK_IMPORTED_MODULE_4__["c"])(),
          X = Object(_vec3f64_js__WEBPACK_IMPORTED_MODULE_4__["c"])();
      Object.freeze(W);
      var Y = Object.freeze({
        __proto__: null,
        create: _,
        wrap: q,
        copy: P,
        fromValues: R,
        elevate: U,
        setExtent: z,
        intersectRay: E,
        intersectScreen: L,
        intersectsRay: T,
        intersectRayClosestSilhouette: C,
        closestPointOnSilhouette: V,
        closestPoint: B,
        projectPoint: D,
        distanceToSilhouette: F,
        angleToSilhouette: G,
        axisAt: I,
        altitudeAt: J,
        setAltitudeAt: K
      });
      /***/
    },

    /***/
    "+h6m":
    /*!************************************************************************************************!*\
      !*** ./node_modules/@arcgis/core/views/3d/webgl-engine/lib/DefaultVertexAttributeLocations.js ***!
      \************************************************************************************************/

    /*! exports provided: Default3D */

    /***/
    function h6m(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "Default3D", function () {
        return o;
      });
      /*
      All material copyright ESRI, All Rights Reserved, unless otherwise specified.
      See https://js.arcgis.com/4.18/esri/copyright.txt for details.
      */


      var o = {
        position: 0,
        normal: 1,
        uv0: 2,
        color: 3,
        size: 4,
        tangent: 4,
        uvMapSpace: 4,
        auxpos1: 5,
        symbolColor: 5,
        auxpos2: 6,
        featureAttribute: 6,
        instanceFeatureAttribute: 6,
        instanceColor: 7,
        bound1: 5,
        bound2: 6,
        bound3: 7,
        model: 8,
        modelNormal: 12,
        modelOriginHi: 11,
        modelOriginLo: 15
      };
      /***/
    },

    /***/
    "0BfS":
    /*!**********************************************************************************************************!*\
      !*** ./node_modules/@arcgis/core/views/3d/webgl-engine/core/shaderLibrary/shading/ReadShadowMap.glsl.js ***!
      \**********************************************************************************************************/

    /*! exports provided: ReadShadowMap */

    /***/
    function BfS(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ReadShadowMap", function () {
        return i;
      });
      /* harmony import */


      var _shaderModules_interfaces_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ../../shaderModules/interfaces.js */
      "OIYib");
      /* harmony import */


      var _util_RgbaFloatEncoding_glsl_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ../util/RgbaFloatEncoding.glsl.js */
      "UBvB");
      /*
      All material copyright ESRI, All Rights Reserved, unless otherwise specified.
      See https://js.arcgis.com/4.18/esri/copyright.txt for details.
      */


      function i(i) {
        i.fragment.include(_util_RgbaFloatEncoding_glsl_js__WEBPACK_IMPORTED_MODULE_1__["RgbaFloatEncoding"]), i.fragment.uniforms.add("depthTex", "sampler2D"), i.fragment.uniforms.add("shadowMapNum", "int"), i.fragment.uniforms.add("shadowMapDistance", "vec4"), i.fragment.uniforms.add("shadowMapMatrix", "mat4", 4), i.fragment.uniforms.add("depthHalfPixelSz", "float"), i.fragment.code.add(_shaderModules_interfaces_js__WEBPACK_IMPORTED_MODULE_0__["glsl"](_templateObject || (_templateObject = _taggedTemplateLiteral(["\n    float readShadowMap(const in vec3 _vpos, float _linearDepth) {\n      float halfPixelSize = depthHalfPixelSz;\n      vec4 distance = shadowMapDistance;\n      float depth = _linearDepth;\n\n      //choose correct cascade\n      int i = depth < distance[1] ? 0 : depth < distance[2] ? 1 : depth < distance[3] ? 2 : 3;\n\n      if (i >= shadowMapNum) { return 0.0; }\n\n      mat4 mat = i == 0 ? shadowMapMatrix[0] : i == 1 ? shadowMapMatrix[1] : i == 2 ? shadowMapMatrix[2] : shadowMapMatrix[3];\n\n      vec4 lv = mat * vec4(_vpos, 1.0);\n      lv.xy /= lv.w;\n\n      // vertex completely outside? -> no shadow\n      vec3 lvpos = 0.5 * lv.xyz + vec3(0.5);\n      if (lvpos.z >= 1.0) { return 0.0; }\n      if (lvpos.x < 0.0 || lvpos.x > 1.0 || lvpos.y < 0.0 || lvpos.y > 1.0) { return 0.0; }\n\n      // calc coord in cascade texture\n      vec2 uv = vec2(float(i - 2 * (i / 2)) * 0.5, float(i / 2) * 0.5) + 0.5 * lvpos.xy;\n\n      float texSize = 0.5 / halfPixelSize;\n\n      // filter, offset by half pixels\n      vec2 st = fract((vec2(halfPixelSize) + uv) * texSize);\n\n      float s00 = rgba2float(texture2D(depthTex, uv + vec2(-halfPixelSize, -halfPixelSize))) < lvpos.z ? 1.0 : 0.0;\n      float s10 = rgba2float(texture2D(depthTex, uv + vec2(halfPixelSize, -halfPixelSize))) < lvpos.z ? 1.0 : 0.0;\n      float s11 = rgba2float(texture2D(depthTex, uv + vec2(halfPixelSize, halfPixelSize))) < lvpos.z ? 1.0 : 0.0;\n      float s01 = rgba2float(texture2D(depthTex, uv + vec2(-halfPixelSize, halfPixelSize))) < lvpos.z ? 1.0 : 0.0;\n\n      return mix(mix(s00, s10, st.x), mix(s01, s11, st.x), st.y);\n    }\n  "]))));
      }

      !function (e) {
        e.bindUniforms = function (e, a, i) {
          a.shadowMappingEnabled && (a.shadowMap.bind(e, i), a.shadowMap.bindView(e, a.origin));
        }, e.bindViewCustomOrigin = function (e, a, i) {
          a.shadowMappingEnabled && a.shadowMap.bindView(e, i);
        }, e.bindView = function (e, a) {
          a.shadowMappingEnabled && a.shadowMap.bindView(e, a.origin);
        };
      }(i || (i = {}));
      /***/
    },

    /***/
    "0Kx6":
    /*!*********************************************************************!*\
      !*** ./node_modules/@arcgis/core/views/3d/support/geometryUtils.js ***!
      \*********************************************************************/

    /*! exports provided: axisAngle, boundedPlane, clipRay, frustum, lineSegment, plane, ray, sphere, triangle, vector */

    /***/
    function Kx6(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "axisAngle", function () {
        return d;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "boundedPlane", function () {
        return e;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "clipRay", function () {
        return k;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "frustum", function () {
        return g;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "lineSegment", function () {
        return h;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "plane", function () {
        return u;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ray", function () {
        return j;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "sphere", function () {
        return l;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "triangle", function () {
        return f;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "vector", function () {
        return b;
      });
      /* harmony import */


      var _chunks_vector_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ../../../chunks/vector.js */
      "IEcw");
      /* harmony import */


      var _chunks_axisAngle_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ../../../chunks/axisAngle.js */
      "f/MA");
      /* harmony import */


      var _chunks_lineSegment_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ../../../chunks/lineSegment.js */
      "jZU2");
      /* harmony import */


      var _chunks_plane_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ../../../chunks/plane.js */
      "cKtl");
      /* harmony import */


      var _chunks_ray_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ../../../chunks/ray.js */
      "QFRQ");
      /* harmony import */


      var _chunks_boundedPlane_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ../../../chunks/boundedPlane.js */
      "DZ/s");
      /* harmony import */


      var _chunks_clipRay_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ../../../chunks/clipRay.js */
      "Gbm8");
      /* harmony import */


      var _chunks_frustum_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! ../../../chunks/frustum.js */
      "NILb");
      /* harmony import */


      var _chunks_sphere_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! ../../../chunks/sphere.js */
      "+JUG");
      /* harmony import */


      var _chunks_triangle_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! ../../../chunks/triangle.js */
      "oSUa");
      /*
      All material copyright ESRI, All Rights Reserved, unless otherwise specified.
      See https://js.arcgis.com/4.18/esri/copyright.txt for details.
      */


      var u = _chunks_plane_js__WEBPACK_IMPORTED_MODULE_3__["g"],
          e = _chunks_boundedPlane_js__WEBPACK_IMPORTED_MODULE_5__["b"],
          f = _chunks_triangle_js__WEBPACK_IMPORTED_MODULE_9__["t"],
          h = _chunks_lineSegment_js__WEBPACK_IMPORTED_MODULE_2__["l"],
          j = _chunks_ray_js__WEBPACK_IMPORTED_MODULE_4__["r"],
          k = _chunks_clipRay_js__WEBPACK_IMPORTED_MODULE_6__["c"],
          l = _chunks_sphere_js__WEBPACK_IMPORTED_MODULE_8__["s"],
          g = _chunks_frustum_js__WEBPACK_IMPORTED_MODULE_7__["f"],
          b = _chunks_vector_js__WEBPACK_IMPORTED_MODULE_0__["v"],
          d = _chunks_axisAngle_js__WEBPACK_IMPORTED_MODULE_1__["a"];
      /***/
    },

    /***/
    "0nJL":
    /*!******************************************************************************************!*\
      !*** ./node_modules/@arcgis/core/views/3d/webgl-engine/core/shaderLibrary/Slice.glsl.js ***!
      \******************************************************************************************/

    /*! exports provided: Slice */

    /***/
    function nJL(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "Slice", function () {
        return l;
      });
      /* harmony import */


      var _core_maybe_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ../../../../../core/maybe.js */
      "srIe");
      /* harmony import */


      var _chunks_vec3f64_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ../../../../../chunks/vec3f64.js */
      "Cy1f");
      /* harmony import */


      var _chunks_vec3_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ../../../../../chunks/vec3.js */
      "5DEt");
      /* harmony import */


      var _shaderModules_interfaces_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ../shaderModules/interfaces.js */
      "OIYib");
      /*
      All material copyright ESRI, All Rights Reserved, unless otherwise specified.
      See https://js.arcgis.com/4.18/esri/copyright.txt for details.
      */


      function l(e, s) {
        if (s.slicePlaneEnabled) {
          e.extensions.add("GL_OES_standard_derivatives"), s.sliceEnabledForVertexPrograms && (e.vertex.uniforms.add("slicePlaneOrigin", "vec3"), e.vertex.uniforms.add("slicePlaneBasis1", "vec3"), e.vertex.uniforms.add("slicePlaneBasis2", "vec3")), e.fragment.uniforms.add("slicePlaneOrigin", "vec3"), e.fragment.uniforms.add("slicePlaneBasis1", "vec3"), e.fragment.uniforms.add("slicePlaneBasis2", "vec3");

          var i = _shaderModules_interfaces_js__WEBPACK_IMPORTED_MODULE_3__["glsl"](_templateObject2 || (_templateObject2 = _taggedTemplateLiteral(["\n      struct SliceFactors {\n        float front;\n        float side0;\n        float side1;\n        float side2;\n        float side3;\n      };\n\n      SliceFactors calculateSliceFactors(vec3 pos) {\n        vec3 rel = pos - slicePlaneOrigin;\n\n        vec3 slicePlaneNormal = -cross(slicePlaneBasis1, slicePlaneBasis2);\n        float slicePlaneW = -dot(slicePlaneNormal, slicePlaneOrigin);\n\n        float basis1Len2 = dot(slicePlaneBasis1, slicePlaneBasis1);\n        float basis2Len2 = dot(slicePlaneBasis2, slicePlaneBasis2);\n\n        float basis1Dot = dot(slicePlaneBasis1, rel);\n        float basis2Dot = dot(slicePlaneBasis2, rel);\n\n        return SliceFactors(\n          dot(slicePlaneNormal, pos) + slicePlaneW,\n          -basis1Dot - basis1Len2,\n          basis1Dot - basis1Len2,\n          -basis2Dot - basis2Len2,\n          basis2Dot - basis2Len2\n        );\n      }\n\n      bool sliceByFactors(SliceFactors factors) {\n        return factors.front < 0.0\n          && factors.side0 < 0.0\n          && factors.side1 < 0.0\n          && factors.side2 < 0.0\n          && factors.side3 < 0.0;\n      }\n\n      bool sliceEnabled() {\n        // a slicePlaneBasis1 vector of zero length is used to disable slicing in the shader during draped rendering.\n        return dot(slicePlaneBasis1, slicePlaneBasis1) != 0.0;\n      }\n\n      bool sliceByPlane(vec3 pos) {\n        return sliceEnabled() && sliceByFactors(calculateSliceFactors(pos));\n      }\n\n      #define rejectBySlice(_pos_) sliceByPlane(_pos_)\n      #define discardBySlice(_pos_) { if (sliceByPlane(_pos_)) discard; }\n    "]))),
              a = _shaderModules_interfaces_js__WEBPACK_IMPORTED_MODULE_3__["glsl"](_templateObject3 || (_templateObject3 = _taggedTemplateLiteral(["\n      vec4 applySliceHighlight(vec4 color, vec3 pos) {\n        SliceFactors factors = calculateSliceFactors(pos);\n\n        if (sliceByFactors(factors)) {\n          return color;\n        }\n\n        const float HIGHLIGHT_WIDTH = 1.0;\n        const vec4 HIGHLIGHT_COLOR = vec4(0.0, 0.0, 0.0, 0.3);\n\n        factors.front /= (2.0 * HIGHLIGHT_WIDTH) * fwidth(factors.front);\n        factors.side0 /= (2.0 * HIGHLIGHT_WIDTH) * fwidth(factors.side0);\n        factors.side1 /= (2.0 * HIGHLIGHT_WIDTH) * fwidth(factors.side1);\n        factors.side2 /= (2.0 * HIGHLIGHT_WIDTH) * fwidth(factors.side2);\n        factors.side3 /= (2.0 * HIGHLIGHT_WIDTH) * fwidth(factors.side3);\n\n        float highlightFactor = (1.0 - step(0.5, factors.front))\n          * (1.0 - step(0.5, factors.side0))\n          * (1.0 - step(0.5, factors.side1))\n          * (1.0 - step(0.5, factors.side2))\n          * (1.0 - step(0.5, factors.side3));\n\n        return mix(color, vec4(HIGHLIGHT_COLOR.rgb, color.a), highlightFactor * HIGHLIGHT_COLOR.a);\n      }\n    "]))),
              _l = s.sliceHighlightDisabled ? _shaderModules_interfaces_js__WEBPACK_IMPORTED_MODULE_3__["glsl"](_templateObject4 || (_templateObject4 = _taggedTemplateLiteral(["#define highlightSlice(_color_, _pos_) (_color_)"]))) : _shaderModules_interfaces_js__WEBPACK_IMPORTED_MODULE_3__["glsl"](_templateObject5 || (_templateObject5 = _taggedTemplateLiteral(["\n        ", "\n        #define highlightSlice(_color_, _pos_) (sliceEnabled() ? applySliceHighlight(_color_, _pos_) : (_color_))\n      "])), a);

          s.sliceEnabledForVertexPrograms && e.vertex.code.add(i), e.fragment.code.add(i), e.fragment.code.add(_l);
        } else {
          var _i = _shaderModules_interfaces_js__WEBPACK_IMPORTED_MODULE_3__["glsl"](_templateObject6 || (_templateObject6 = _taggedTemplateLiteral(["\n      #define rejectBySlice(_pos_) false\n      #define discardBySlice(_pos_) {}\n      #define highlightSlice(_color_, _pos_) (_color_)\n    "])));

          s.sliceEnabledForVertexPrograms && e.vertex.code.add(_i), e.fragment.code.add(_i);
        }
      }

      !function (i) {
        i.bindUniformsWithOrigin = function (e, s, a) {
          i.bindUniforms(e, s, a.slicePlane, a.origin);
        }, i.bindUniforms = function (i, o, l, r) {
          o.slicePlaneEnabled && (Object(_core_maybe_js__WEBPACK_IMPORTED_MODULE_0__["isSome"])(l) ? (r ? (Object(_chunks_vec3_js__WEBPACK_IMPORTED_MODULE_2__["f"])(c, l.origin, r), i.setUniform3fv("slicePlaneOrigin", c)) : i.setUniform3fv("slicePlaneOrigin", l.origin), i.setUniform3fv("slicePlaneBasis1", l.basis1), i.setUniform3fv("slicePlaneBasis2", l.basis2)) : (i.setUniform3fv("slicePlaneBasis1", _chunks_vec3f64_js__WEBPACK_IMPORTED_MODULE_1__["Z"]), i.setUniform3fv("slicePlaneBasis2", _chunks_vec3f64_js__WEBPACK_IMPORTED_MODULE_1__["Z"]), i.setUniform3fv("slicePlaneOrigin", _chunks_vec3f64_js__WEBPACK_IMPORTED_MODULE_1__["Z"])));
        };
      }(l || (l = {}));
      var c = Object(_chunks_vec3f64_js__WEBPACK_IMPORTED_MODULE_1__["c"])();
      /***/
    },

    /***/
    "1/dN":
    /*!***************************************************************************!*\
      !*** ./node_modules/@arcgis/core/views/3d/webgl-engine/lib/GLMaterial.js ***!
      \***************************************************************************/

    /*! exports provided: default */

    /***/
    function dN(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony import */


      var _AutoDisposable_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ./AutoDisposable.js */
      "cKKt");
      /*
      All material copyright ESRI, All Rights Reserved, unless otherwise specified.
      See https://js.arcgis.com/4.18/esri/copyright.txt for details.
      */

      /* harmony default export */


      __webpack_exports__["default"] = /*#__PURE__*/function (_AutoDisposable_js__W) {
        _inherits(_class, _AutoDisposable_js__W);

        var _super = _createSuper(_class);

        function _class(e) {
          var _this;

          _classCallCheck(this, _class);

          _this = _super.call(this), _this.material = e.material, _this.techniqueRep = e.techniqueRep, _this.output = e.output;
          return _this;
        }

        _createClass(_class, [{
          key: "getTechnique",
          value: function getTechnique() {
            return this.technique;
          }
        }, {
          key: "getPipelineState",
          value: function getPipelineState(e, t) {
            return this.getTechnique().pipeline;
          }
        }, {
          key: "ensureResources",
          value: function ensureResources(e) {
            return 2;
          }
        }, {
          key: "ensureParameters",
          value: function ensureParameters(e) {}
        }]);

        return _class;
      }(_AutoDisposable_js__WEBPACK_IMPORTED_MODULE_0__["AutoDisposable"]);
      /***/

    },

    /***/
    "1PqF":
    /*!*****************************************************************************!*\
      !*** ./node_modules/@arcgis/core/views/3d/webgl-engine/lib/GeometryData.js ***!
      \*****************************************************************************/

    /*! exports provided: GeometryData */

    /***/
    function PqF(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "GeometryData", function () {
        return n;
      });
      /* harmony import */


      var _geometryDataUtils_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ./geometryDataUtils.js */
      "EDiM");
      /* harmony import */


      var _Util_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./Util.js */
      "EVMh");
      /*
      All material copyright ESRI, All Rights Reserved, unless otherwise specified.
      See https://js.arcgis.com/4.18/esri/copyright.txt for details.
      */


      var n = /*#__PURE__*/function () {
        function n(t) {
          var i = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : n.DefaultIndices;
          var e = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : "triangle";

          _classCallCheck(this, n);

          this.initialize(t, i, e);
        }

        _createClass(n, [{
          key: "id",
          get: function get() {
            return this._id;
          }
        }, {
          key: "vertexAttributes",
          get: function get() {
            return this._vertexAttributes;
          }
        }, {
          key: "indices",
          get: function get() {
            return this._indices;
          }
        }, {
          key: "indexCount",
          get: function get() {
            var t = Object(_Util_js__WEBPACK_IMPORTED_MODULE_1__["getFirstObjectValue"])(this._indices);
            return null == t ? 0 : t.length;
          }
        }, {
          key: "primitiveType",
          get: function get() {
            return this._primitiveType;
          }
        }, {
          key: "getVertexAttr",
          value: function getVertexAttr() {
            return this.vertexAttributes;
          }
        }, {
          key: "initialize",
          value: function initialize(s) {
            var r = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : n.DefaultIndices;
            var c = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : "triangle";
            var d = {};

            for (var t in s) {
              var _s$t = s[t],
                  i = _s$t.data,
                  e = _s$t.size;
              d[t] = {
                data: i,
                size: e,
                offsetIdx: 0,
                strideIdx: e
              };
            }

            if (r === n.DefaultIndices) {
              var _i2 = function (t) {
                var i = Object(_Util_js__WEBPACK_IMPORTED_MODULE_1__["getFirstObjectValue"])(t);
                if (null == i) return 0;
                return i.data.length / i.size;
              }(d),
                  _s = Object(_geometryDataUtils_js__WEBPACK_IMPORTED_MODULE_0__["generateDefaultIndexArray"])(_i2);

              r = {};

              for (var _t3 in d) {
                r[_t3] = _s;
              }
            }

            this._id = Object(_geometryDataUtils_js__WEBPACK_IMPORTED_MODULE_0__["getNewId"])(), this._vertexAttributes = d, this._indices = r, this._primitiveType = c;
          }
        }, {
          key: "toRenderData",
          value: function toRenderData() {
            return {
              id: this._id.toString(),
              indices: this._indices,
              vertexAttr: this._vertexAttributes
            };
          }
        }, {
          key: "getIndices",
          value: function getIndices(t) {
            return this._indices[t];
          }
        }, {
          key: "getAttribute",
          value: function getAttribute(t) {
            return this._vertexAttributes[t];
          }
        }, {
          key: "estimateGpuMemoryUsage",
          value: function estimateGpuMemoryUsage() {
            var t = 0;

            if (this._indices[_Util_js__WEBPACK_IMPORTED_MODULE_1__["VertexAttrConstants"].POSITION]) {
              var i = 3;
              t += this._indices[_Util_js__WEBPACK_IMPORTED_MODULE_1__["VertexAttrConstants"].POSITION].length * i * 4;
            }

            if (this._indices[_Util_js__WEBPACK_IMPORTED_MODULE_1__["VertexAttrConstants"].NORMAL]) {
              var _i3 = 3;
              t += this._indices[_Util_js__WEBPACK_IMPORTED_MODULE_1__["VertexAttrConstants"].NORMAL].length * _i3 * 4;
            }

            if (this._indices[_Util_js__WEBPACK_IMPORTED_MODULE_1__["VertexAttrConstants"].UV0]) {
              var _i4 = 2;
              t += this._indices[_Util_js__WEBPACK_IMPORTED_MODULE_1__["VertexAttrConstants"].UV0].length * _i4 * 4;
            }

            if (this._indices[_Util_js__WEBPACK_IMPORTED_MODULE_1__["VertexAttrConstants"].COLOR]) {
              var _i5 = 1;
              t += this._indices[_Util_js__WEBPACK_IMPORTED_MODULE_1__["VertexAttrConstants"].COLOR].length * _i5 * 4;
            }

            return t;
          }
        }]);

        return n;
      }();

      n.DefaultIndices = {};
      /***/
    },

    /***/
    "1TnO":
    /*!************************************************************************************************************************!*\
      !*** ./node_modules/@arcgis/core/views/3d/webgl-engine/core/shaderLibrary/attributes/InstancedDoublePrecision.glsl.js ***!
      \************************************************************************************************************************/

    /*! exports provided: InstancedDoublePrecision */

    /***/
    function TnO(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "InstancedDoublePrecision", function () {
        return n;
      });
      /* harmony import */


      var _chunks_vec3f64_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ../../../../../../chunks/vec3f64.js */
      "Cy1f");
      /* harmony import */


      var _shaderModules_interfaces_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ../../shaderModules/interfaces.js */
      "OIYib");
      /* harmony import */


      var _lib_doublePrecisionUtils_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ../../../lib/doublePrecisionUtils.js */
      "mmTy");
      /* harmony import */


      var _util_DoublePrecision_glsl_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ../util/DoublePrecision.glsl.js */
      "aiF/");
      /*
      All material copyright ESRI, All Rights Reserved, unless otherwise specified.
      See https://js.arcgis.com/4.18/esri/copyright.txt for details.
      */


      function n(e, r) {
        r.instanced && r.instancedDoublePrecision && (e.attributes.add("modelOriginHi", "vec3"), e.attributes.add("modelOriginLo", "vec3"), e.attributes.add("model", "mat3"), e.attributes.add("modelNormal", "mat3")), r.instancedDoublePrecision && (e.vertex.include(_util_DoublePrecision_glsl_js__WEBPACK_IMPORTED_MODULE_3__["DoublePrecision"], r), e.vertex.uniforms.add("viewOriginHi", "vec3"), e.vertex.uniforms.add("viewOriginLo", "vec3"));
        var n = [_shaderModules_interfaces_js__WEBPACK_IMPORTED_MODULE_1__["glsl"](_templateObject7 || (_templateObject7 = _taggedTemplateLiteral(["\n    vec3 calculateVPos() {\n      ", "\n    }\n    "])), r.instancedDoublePrecision ? "return model * localPosition().xyz;" : "return localPosition().xyz;"), _shaderModules_interfaces_js__WEBPACK_IMPORTED_MODULE_1__["glsl"](_templateObject8 || (_templateObject8 = _taggedTemplateLiteral(["\n    vec3 subtractOrigin(vec3 _pos) {\n      ", "\n    }\n    "])), r.instancedDoublePrecision ? _shaderModules_interfaces_js__WEBPACK_IMPORTED_MODULE_1__["glsl"](_templateObject9 || (_templateObject9 = _taggedTemplateLiteral(["\n          vec3 originDelta = dpAdd(viewOriginHi, viewOriginLo, -modelOriginHi, -modelOriginLo);\n          return _pos - originDelta;"]))) : "return vpos;"), _shaderModules_interfaces_js__WEBPACK_IMPORTED_MODULE_1__["glsl"](_templateObject10 || (_templateObject10 = _taggedTemplateLiteral(["\n    vec3 dpNormal(vec4 _normal) {\n      ", "\n    }\n    "])), r.instancedDoublePrecision ? "return normalize(modelNormal * _normal.xyz);" : "return normalize(_normal.xyz);"), _shaderModules_interfaces_js__WEBPACK_IMPORTED_MODULE_1__["glsl"](_templateObject11 || (_templateObject11 = _taggedTemplateLiteral(["\n    vec3 dpNormalView(vec4 _normal) {\n      ", "\n    }\n    "])), r.instancedDoublePrecision ? "return normalize((viewNormal * vec4(modelNormal * _normal.xyz, 1.0)).xyz);" : "return normalize((viewNormal * _normal).xyz);"), r.vertexTangets ? _shaderModules_interfaces_js__WEBPACK_IMPORTED_MODULE_1__["glsl"](_templateObject12 || (_templateObject12 = _taggedTemplateLiteral(["\n    vec4 dpTransformVertexTangent(vec4 _tangent) {\n      ", "\n\n    }\n    "])), r.instancedDoublePrecision ? "return vec4(modelNormal * _tangent.xyz, _tangent.w);" : "return _tangent;") : _shaderModules_interfaces_js__WEBPACK_IMPORTED_MODULE_1__["glsl"](_templateObject13 || (_templateObject13 = _taggedTemplateLiteral([""])))];
        e.vertex.code.add(n[0]), e.vertex.code.add(n[1]), e.vertex.code.add(n[2]), 2 === r.output && e.vertex.code.add(n[3]), e.vertex.code.add(n[4]);
      }

      !function (e) {
        e.Uniforms = /*#__PURE__*/function () {
          function _class2() {
            _classCallCheck(this, _class2);
          }

          return _class2;
        }(), e.bindCustomOrigin = function (e, i) {
          Object(_lib_doublePrecisionUtils_js__WEBPACK_IMPORTED_MODULE_2__["encodeDoubleArraySplit"])(i, t, a, 3), e.setUniform3fv("viewOriginHi", t), e.setUniform3fv("viewOriginLo", a);
        };
      }(n || (n = {}));
      var t = Object(_chunks_vec3f64_js__WEBPACK_IMPORTED_MODULE_0__["c"])(),
          a = Object(_chunks_vec3f64_js__WEBPACK_IMPORTED_MODULE_0__["c"])();
      /***/
    },

    /***/
    "1W42":
    /*!*******************************************************************************************************!*\
      !*** ./node_modules/@arcgis/core/views/3d/webgl-engine/core/shaderLibrary/util/HeaderComment.glsl.js ***!
      \*******************************************************************************************************/

    /*! exports provided: HeaderComment */

    /***/
    function W42(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "HeaderComment", function () {
        return u;
      });
      /* harmony import */


      var _core_has_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ../../../../../../core/has.js */
      "wSAH");
      /* harmony import */


      var _shaderModules_interfaces_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ../../shaderModules/interfaces.js */
      "OIYib");
      /*
      All material copyright ESRI, All Rights Reserved, unless otherwise specified.
      See https://js.arcgis.com/4.18/esri/copyright.txt for details.
      */


      function u(u, e) {
        _shaderModules_interfaces_js__WEBPACK_IMPORTED_MODULE_1__["glsl"](_templateObject14 || (_templateObject14 = _taggedTemplateLiteral(["\n  /*\n  *  ", "\n  *  ", "\n  */\n  "])), e.name, 0 === e.output ? "RenderOutput: Color" : 1 === e.output ? "RenderOutput: Depth" : 3 === e.output ? "RenderOutput: Shadow" : 2 === e.output ? "RenderOutput: Normal" : 4 === e.output ? "RenderOutput: Highlight" : "");
      }
      /***/

    },

    /***/
    "1ff1":
    /*!*************************************************************************!*\
      !*** ./node_modules/@arcgis/core/views/3d/webgl-engine/lib/glUtil3D.js ***!
      \*************************************************************************/

    /*! exports provided: createColorTexture, createEmptyDepthTexture, createEmptyTexture, createQuadVAO */

    /***/
    function ff1(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "createColorTexture", function () {
        return m;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "createEmptyDepthTexture", function () {
        return f;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "createEmptyTexture", function () {
        return l;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "createQuadVAO", function () {
        return i;
      });
      /* harmony import */


      var _DefaultVertexAttributeLocations_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ./DefaultVertexAttributeLocations.js */
      "+h6m");
      /* harmony import */


      var _webgl_BufferObject_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ../../../webgl/BufferObject.js */
      "fOQB");
      /* harmony import */


      var _webgl_Texture_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ../../../webgl/Texture.js */
      "of9L");
      /* harmony import */


      var _webgl_VertexArrayObject_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ../../../webgl/VertexArrayObject.js */
      "D6bk");
      /* harmony import */


      var _DefaultVertexBufferLayouts_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ./DefaultVertexBufferLayouts.js */
      "fDPZ");
      /*
      All material copyright ESRI, All Rights Reserved, unless otherwise specified.
      See https://js.arcgis.com/4.18/esri/copyright.txt for details.
      */


      function i(r) {
        var i = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : _DefaultVertexBufferLayouts_js__WEBPACK_IMPORTED_MODULE_4__["Pos2"];
        var l = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : _DefaultVertexAttributeLocations_js__WEBPACK_IMPORTED_MODULE_0__["Default3D"];
        var m = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : -1;
        var f = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : 1;
        var u = null;

        switch (i) {
          case _DefaultVertexBufferLayouts_js__WEBPACK_IMPORTED_MODULE_4__["Pos2Tex"]:
            u = new Float32Array([m, m, 0, 0, f, m, 1, 0, m, f, 0, 1, f, f, 1, 1]);
            break;

          case _DefaultVertexBufferLayouts_js__WEBPACK_IMPORTED_MODULE_4__["Pos2"]:
          default:
            u = new Float32Array([m, m, f, m, m, f, f, f]);
        }

        return new _webgl_VertexArrayObject_js__WEBPACK_IMPORTED_MODULE_3__["default"](r, l, {
          geometry: i
        }, {
          geometry: _webgl_BufferObject_js__WEBPACK_IMPORTED_MODULE_1__["default"].createVertex(r, 35044, u)
        });
      }

      function l(e) {
        var t = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 4;
        return new _webgl_Texture_js__WEBPACK_IMPORTED_MODULE_2__["default"](e, {
          target: 3553,
          pixelFormat: 6408,
          dataType: 5121,
          samplingMode: 9728,
          width: t,
          height: t
        });
      }

      function m(e, t) {
        var a = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 4;
        var o = new Uint8Array(a * a * 4);

        for (var _e2 = 0; _e2 < o.length; _e2 += 4) {
          o[_e2 + 0] = 255 * t[0], o[_e2 + 1] = 255 * t[1], o[_e2 + 2] = 255 * t[2], o[_e2 + 3] = 255 * t[3];
        }

        return new _webgl_Texture_js__WEBPACK_IMPORTED_MODULE_2__["default"](e, {
          target: 3553,
          pixelFormat: 6408,
          dataType: 5121,
          samplingMode: 9728,
          width: a,
          height: a
        }, o);
      }

      function f(e) {
        return new _webgl_Texture_js__WEBPACK_IMPORTED_MODULE_2__["default"](e, {
          target: 3553,
          pixelFormat: 6408,
          dataType: 5121,
          samplingMode: 9728,
          width: 1,
          height: 1
        }, new Uint8Array([255, 255, 255, 255]));
      }
      /***/

    },

    /***/
    "262w":
    /*!**************************************************************************************!*\
      !*** ./node_modules/@arcgis/core/views/3d/webgl-engine/materials/DefaultMaterial.js ***!
      \**************************************************************************************/

    /*! exports provided: COLOR_GAMMA, DefaultMaterial */

    /***/
    function w(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "COLOR_GAMMA", function () {
        return O;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "DefaultMaterial", function () {
        return y;
      });
      /* harmony import */


      var _chunks_vec3f64_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ../../../../chunks/vec3f64.js */
      "Cy1f");
      /* harmony import */


      var _chunks_vec3_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ../../../../chunks/vec3.js */
      "5DEt");
      /* harmony import */


      var _chunks_mat3f64_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ../../../../chunks/mat3f64.js */
      "2uVf");
      /* harmony import */


      var _support_buffer_InterleavedLayout_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ../../support/buffer/InterleavedLayout.js */
      "/ADo");
      /* harmony import */


      var _lib_intersectorUtils_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ../lib/intersectorUtils.js */
      "qXiY");
      /* harmony import */


      var _lib_GLMaterialTexture_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ../lib/GLMaterialTexture.js */
      "aK8v");
      /* harmony import */


      var _internal_MaterialUtil_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ./internal/MaterialUtil.js */
      "fFEv");
      /* harmony import */


      var _lib_Material_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! ../lib/Material.js */
      "NbNv");
      /* harmony import */


      var _internal_bufferWriterUtils_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! ./internal/bufferWriterUtils.js */
      "WVfK");
      /* harmony import */


      var _core_shaderLibrary_util_AlphaDiscard_glsl_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! ../core/shaderLibrary/util/AlphaDiscard.glsl.js */
      "69UF");
      /* harmony import */


      var _lib_OrderIndependentTransparency_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
      /*! ../lib/OrderIndependentTransparency.js */
      "dDjh");
      /* harmony import */


      var _shaders_DefaultMaterialTechnique_js__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
      /*! ../shaders/DefaultMaterialTechnique.js */
      "4csu");
      /* harmony import */


      var _shaders_RealisticTreeTechnique_js__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
      /*! ../shaders/RealisticTreeTechnique.js */
      "b5HO");
      /*
      All material copyright ESRI, All Rights Reserved, unless otherwise specified.
      See https://js.arcgis.com/4.18/esri/copyright.txt for details.
      */


      var y = /*#__PURE__*/function (_lib_Material_js__WEB) {
        _inherits(y, _lib_Material_js__WEB);

        var _super2 = _createSuper(y);

        function y(e, t) {
          var _this2;

          _classCallCheck(this, y);

          _this2 = _super2.call(this, t, e, M), _this2.supportsEdges = !0, _this2.techniqueConfig = new _shaders_DefaultMaterialTechnique_js__WEBPACK_IMPORTED_MODULE_11__["DefaultMaterialTechniqueConfiguration"](), _this2.vertexBufferLayout = y.getVertexBufferLayout(_this2.params), _this2.instanceBufferLayout = e.instanced ? y.getInstanceBufferLayout(_this2.params) : null;
          return _this2;
        }

        _createClass(y, [{
          key: "isVisibleInPass",
          value: function isVisibleInPass(e) {
            return 4 !== e || this.params.castShadows;
          }
        }, {
          key: "isVisible",
          value: function isVisible() {
            var e = this.params;
            if (!_get(_getPrototypeOf(y.prototype), "isVisible", this).call(this) || 0 === e.layerOpacity) return !1;
            var t = e.instanced,
                i = e.vertexColors,
                s = e.symbolColors,
                a = !!t && t.indexOf("color") > -1,
                r = e.vvColorEnabled,
                n = "replace" === e.colorMixMode,
                o = e.opacity > 0,
                l = e.externalColor && e.externalColor[3] > 0;
            return i && (a || r || s) ? !!n || o : i ? n ? l : o : a || r || s ? !!n || o : n ? l : o;
          }
        }, {
          key: "getTechniqueConfig",
          value: function getTechniqueConfig(e, t) {
            return this.techniqueConfig.output = e, this.techniqueConfig.hasNormalTexture = !!this.params.normalTextureId, this.techniqueConfig.hasColorTexture = !!this.params.textureId, this.techniqueConfig.vertexTangents = this.params.vertexTangents, this.techniqueConfig.instanced = !!this.params.instanced, this.techniqueConfig.instancedDoublePrecision = this.params.instancedDoublePrecision, this.techniqueConfig.vvSize = this.params.vvSizeEnabled, this.techniqueConfig.verticalOffset = null !== this.params.verticalOffset, this.techniqueConfig.screenSizePerspective = null !== this.params.screenSizePerspective, this.techniqueConfig.slicePlaneEnabled = this.params.slicePlaneEnabled, this.techniqueConfig.sliceHighlightDisabled = this.params.sliceHighlightDisabled, this.techniqueConfig.alphaDiscardMode = this.params.textureAlphaMode, this.techniqueConfig.normalsTypeDerivate = "screenDerivative" === this.params.normals, this.techniqueConfig.transparent = this.params.transparent, this.techniqueConfig.writeDepth = this.params.writeDepth, this.techniqueConfig.sceneHasOcludees = this.params.sceneHasOcludees, this.techniqueConfig.cullFace = null != this.params.cullFace ? this.params.cullFace : 0, 0 !== e && 7 !== e || (this.techniqueConfig.vertexColors = this.params.vertexColors, this.techniqueConfig.symbolColors = this.params.symbolColors, this.params.treeRendering ? this.techniqueConfig.doubleSidedMode = 2 : this.techniqueConfig.doubleSidedMode = this.params.doubleSided && "normal" === this.params.doubleSidedType ? 1 : this.params.doubleSided && "winding-order" === this.params.doubleSidedType ? 2 : 0, this.techniqueConfig.instancedColor = !!this.params.instanced && this.params.instanced.indexOf("color") > -1, this.techniqueConfig.receiveShadows = this.params.receiveShadows && this.params.shadowMappingEnabled, this.techniqueConfig.receiveAmbientOcclusion = this.params.receiveSSAO, this.techniqueConfig.vvColor = this.params.vvColorEnabled, this.techniqueConfig.textureAlphaPremultiplied = !!this.params.textureAlphaPremultiplied, this.techniqueConfig.usePBR = this.params.usePBR, this.techniqueConfig.hasMetalnessAndRoughnessTexture = !!this.params.metallicRoughnessTextureId, this.techniqueConfig.hasEmissionTexture = !!this.params.emissiveTextureId, this.techniqueConfig.hasOcclusionTexture = !!this.params.occlusionTextureId, this.techniqueConfig.offsetBackfaces = !(!this.params.transparent || !this.params.offsetTransparentBackfaces), this.techniqueConfig.isSchematic = this.params.usePBR && this.params.isSchematic, this.techniqueConfig.transparencyPassType = t ? t.transparencyPassType : 3, this.techniqueConfig.enableOffset = !t || t.camera.relativeElevation < _lib_OrderIndependentTransparency_js__WEBPACK_IMPORTED_MODULE_10__["OITPolygonOffsetLimit"]), this.techniqueConfig;
          }
        }, {
          key: "intersect",
          value: function intersect(e, t, c, h, d, v, g) {
            if (null !== this.params.verticalOffset) {
              var _e3 = h.camera;
              Object(_chunks_vec3_js__WEBPACK_IMPORTED_MODULE_1__["s"])(A, c[12], c[13], c[14]);
              var _t4 = null;

              switch (h.viewingMode) {
                case 1:
                  _t4 = Object(_chunks_vec3_js__WEBPACK_IMPORTED_MODULE_1__["n"])(L, A);
                  break;

                case 2:
                  _t4 = Object(_chunks_vec3_js__WEBPACK_IMPORTED_MODULE_1__["g"])(L, E);
              }

              var p = 0;

              if (null !== this.params.verticalOffset) {
                var i = Object(_chunks_vec3_js__WEBPACK_IMPORTED_MODULE_1__["f"])(D, A, _e3.eye),
                    s = Object(_chunks_vec3_js__WEBPACK_IMPORTED_MODULE_1__["l"])(i),
                    a = Object(_chunks_vec3_js__WEBPACK_IMPORTED_MODULE_1__["a"])(i, i, 1 / s);
                var u = null;
                this.params.screenSizePerspective && (u = Object(_chunks_vec3_js__WEBPACK_IMPORTED_MODULE_1__["d"])(_t4, a)), p += Object(_internal_MaterialUtil_js__WEBPACK_IMPORTED_MODULE_6__["verticalOffsetAtDistance"])(_e3, s, this.params.verticalOffset, u, this.params.screenSizePerspective);
              }

              Object(_chunks_vec3_js__WEBPACK_IMPORTED_MODULE_1__["a"])(_t4, _t4, p), Object(_chunks_vec3_js__WEBPACK_IMPORTED_MODULE_1__["t"])(R, _t4, h.transform.inverseRotation), d = Object(_chunks_vec3_js__WEBPACK_IMPORTED_MODULE_1__["f"])(B, d, R), v = Object(_chunks_vec3_js__WEBPACK_IMPORTED_MODULE_1__["f"])(I, v, R);
            }

            Object(_internal_MaterialUtil_js__WEBPACK_IMPORTED_MODULE_6__["intersectTriangleGeometry"])(e, t, h, d, v, Object(_lib_intersectorUtils_js__WEBPACK_IMPORTED_MODULE_4__["getVerticalOffsetObject3D"])(h.verticalOffset), g);
          }
        }, {
          key: "getGLMaterial",
          value: function getGLMaterial(e) {
            if (0 === e.output || 7 === e.output || 1 === e.output || 2 === e.output || 3 === e.output || 4 === e.output) return new P(e);
          }
        }, {
          key: "createBufferWriter",
          value: function createBufferWriter() {
            return new w(this.vertexBufferLayout, this.instanceBufferLayout);
          }
        }], [{
          key: "getVertexBufferLayout",
          value: function getVertexBufferLayout(e) {
            var t = e.textureId || e.normalTextureId || e.metallicRoughnessTextureId || e.emissiveTextureId || e.occlusionTextureId,
                i = Object(_support_buffer_InterleavedLayout_js__WEBPACK_IMPORTED_MODULE_3__["newLayout"])().vec3f("position").vec3f("normal");
            return e.vertexTangents && i.vec4f("tangent"), t && i.vec2f("uv0"), e.vertexColors && i.vec4u8("color"), e.symbolColors && i.vec4u8("symbolColor"), i;
          }
        }, {
          key: "getInstanceBufferLayout",
          value: function getInstanceBufferLayout(e) {
            var t = Object(_support_buffer_InterleavedLayout_js__WEBPACK_IMPORTED_MODULE_3__["newLayout"])();
            return t = e.instancedDoublePrecision ? t.vec3f("modelOriginHi").vec3f("modelOriginLo").mat3f("model").mat3f("modelNormal") : t.mat4f("model").mat4f("modelNormal"), e.instanced && e.instanced.indexOf("color") > -1 && (t = t.vec4f("instanceColor")), e.instanced && e.instanced.indexOf("featureAttribute") > -1 && (t = t.vec4f("instanceFeatureAttribute")), t;
          }
        }]);

        return y;
      }(_lib_Material_js__WEBPACK_IMPORTED_MODULE_7__["Material"]);

      var P = /*#__PURE__*/function (_lib_GLMaterialTextur) {
        _inherits(P, _lib_GLMaterialTextur);

        var _super3 = _createSuper(P);

        function P(e) {
          var _this3;

          _classCallCheck(this, P);

          var t = e.material;
          _this3 = _super3.call(this, _objectSpread(_objectSpread({}, e), t.params)), _this3.updateParameters();
          return _this3;
        }

        _createClass(P, [{
          key: "updateParameters",
          value: function updateParameters(e) {
            var t = this.material.params;
            this.updateTexture(t.textureId), this.technique = t.treeRendering ? this.techniqueRep.acquireAndReleaseExisting(_shaders_RealisticTreeTechnique_js__WEBPACK_IMPORTED_MODULE_12__["RealisticTreeTechnique"], this.material.getTechniqueConfig(this.output, e), this.technique) : this.techniqueRep.acquireAndReleaseExisting(_shaders_DefaultMaterialTechnique_js__WEBPACK_IMPORTED_MODULE_11__["DefaultMaterialTechnique"], this.material.getTechniqueConfig(this.output, e), this.technique);
          }
        }, {
          key: "selectPipelines",
          value: function selectPipelines() {}
        }, {
          key: "_updateShadowState",
          value: function _updateShadowState(e) {
            e.shadowMappingEnabled !== this.material.params.shadowMappingEnabled && this.material.setParameterValues({
              shadowMappingEnabled: e.shadowMappingEnabled
            });
          }
        }, {
          key: "_updateOccludeeState",
          value: function _updateOccludeeState(e) {
            e.hasOccludees !== this.material.params.sceneHasOcludees && this.material.setParameterValues({
              sceneHasOcludees: e.hasOccludees
            });
          }
        }, {
          key: "ensureParameters",
          value: function ensureParameters(e) {
            0 !== this.output && 7 !== this.output || (this._updateShadowState(e), this._updateOccludeeState(e)), this.updateParameters(e);
          }
        }, {
          key: "bind",
          value: function bind(e, t) {
            e.bindProgram(this.technique.program), this.technique.bindPass(e, this.material.params, t), this.bindTexture(e, this.technique.program);
          }
        }, {
          key: "beginSlot",
          value: function beginSlot(e) {
            return e === (this.material.params.transparent ? this.material.params.writeDepth ? 5 : 8 : 3);
          }
        }, {
          key: "getPipelineState",
          value: function getPipelineState(e, t) {
            return this.technique.getPipelineState(t);
          }
        }]);

        return P;
      }(_lib_GLMaterialTexture_js__WEBPACK_IMPORTED_MODULE_5__["default"]);

      var O = 2.1,
          M = _objectSpread({
        textureId: void 0,
        initTextureTransparent: !1,
        isSchematic: !1,
        usePBR: !1,
        normalTextureId: void 0,
        vertexTangents: !1,
        occlusionTextureId: void 0,
        emissiveTextureId: void 0,
        metallicRoughnessTextureId: void 0,
        emissiveFactor: [0, 0, 0],
        mrrFactors: [0, 1, .5],
        ambient: [.2, .2, .2],
        diffuse: [.8, .8, .8],
        externalColor: [1, 1, 1, 1],
        colorMixMode: "multiply",
        opacity: 1,
        layerOpacity: 1,
        vertexColors: !1,
        symbolColors: !1,
        doubleSided: !1,
        doubleSidedType: "normal",
        cullFace: void 0,
        instanced: void 0,
        instancedDoublePrecision: !1,
        normals: "default",
        receiveSSAO: !0,
        receiveShadows: !0,
        castShadows: !0,
        shadowMappingEnabled: !1,
        verticalOffset: null,
        screenSizePerspective: null,
        slicePlaneEnabled: !1,
        sliceHighlightDisabled: !1,
        offsetTransparentBackfaces: !1,
        vvSizeEnabled: !1,
        vvSizeMinSize: [1, 1, 1],
        vvSizeMaxSize: [100, 100, 100],
        vvSizeOffset: [0, 0, 0],
        vvSizeFactor: [1, 1, 1],
        vvSizeValue: [1, 1, 1],
        vvColorEnabled: !1,
        vvColorValues: [0, 0, 0, 0, 0, 0, 0, 0],
        vvColorColors: [1, 0, 0, 0, 1, 0, 0, 0, 1, 0, 0, 0, 1, 0, 0, 0, 1, 0, 0, 0, 1, 0, 0, 0, 1, 0, 0, 0, 1, 0, 0, 0],
        vvSymbolAnchor: [0, 0, 0],
        vvSymbolRotationMatrix: Object(_chunks_mat3f64_js__WEBPACK_IMPORTED_MODULE_2__["a"])(),
        transparent: !1,
        writeDepth: !0,
        textureAlphaMode: 0,
        textureAlphaCutoff: _core_shaderLibrary_util_AlphaDiscard_glsl_js__WEBPACK_IMPORTED_MODULE_9__["defaultMaskAlphaCutoff"],
        textureAlphaPremultiplied: !1,
        sceneHasOcludees: !1
      }, _lib_Material_js__WEBPACK_IMPORTED_MODULE_7__["materialParametersDefaults"]);

      var w = /*#__PURE__*/function () {
        function w(e, t) {
          _classCallCheck(this, w);

          this.vertexBufferLayout = e, this.instanceBufferLayout = t;
        }

        _createClass(w, [{
          key: "allocate",
          value: function allocate(e) {
            return this.vertexBufferLayout.createBuffer(e);
          }
        }, {
          key: "elementCount",
          value: function elementCount(e) {
            return e.indices.position.length;
          }
        }, {
          key: "write",
          value: function write(e, t, i, s) {
            Object(_internal_bufferWriterUtils_js__WEBPACK_IMPORTED_MODULE_8__["writeDefaultAttributes"])(t, this.vertexBufferLayout, e.transformation, e.invTranspTransformation, i, s);
          }
        }]);

        return w;
      }();

      var B = Object(_chunks_vec3f64_js__WEBPACK_IMPORTED_MODULE_0__["c"])(),
          I = Object(_chunks_vec3f64_js__WEBPACK_IMPORTED_MODULE_0__["c"])(),
          E = Object(_chunks_vec3f64_js__WEBPACK_IMPORTED_MODULE_0__["f"])(0, 0, 1),
          L = Object(_chunks_vec3f64_js__WEBPACK_IMPORTED_MODULE_0__["c"])(),
          R = Object(_chunks_vec3f64_js__WEBPACK_IMPORTED_MODULE_0__["c"])(),
          A = Object(_chunks_vec3f64_js__WEBPACK_IMPORTED_MODULE_0__["c"])(),
          D = Object(_chunks_vec3f64_js__WEBPACK_IMPORTED_MODULE_0__["c"])();
      /***/
    },

    /***/
    "2hxh":
    /*!*******************************************************************************************!*\
      !*** ./node_modules/@arcgis/core/views/3d/webgl-engine/lib/screenSizePerspectiveUtils.js ***!
      \*******************************************************************************************/

    /*! exports provided: applyPrecomputedScaleFactor, applyScaleFactor, applyScaleFactorVec2, getLabelSettings, getSettings, precomputeScaleFactor, scale */

    /***/
    function hxh(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "applyPrecomputedScaleFactor", function () {
        return u;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "applyScaleFactor", function () {
        return s;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "applyScaleFactorVec2", function () {
        return c;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "getLabelSettings", function () {
        return r;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "getSettings", function () {
        return i;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "precomputeScaleFactor", function () {
        return o;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "scale", function () {
        return d;
      });
      /* harmony import */


      var _core_mathUtils_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ../../../../core/mathUtils.js */
      "OKTS");
      /*
      All material copyright ESRI, All Rights Reserved, unless otherwise specified.
      See https://js.arcgis.com/4.18/esri/copyright.txt for details.
      */


      function i(e, t) {
        return new f(e, m, t);
      }

      function r(e, t) {
        var a = m.curvatureDependent,
            i = m.scaleStart,
            r = m.scaleFallOffRange;
        return new f(e, {
          curvatureDependent: {
            min: {
              curvature: a.min.curvature,
              tiltAngle: a.min.tiltAngle,
              scaleFallOffFactor: p.curvatureDependent.min.scaleFallOffFactor
            },
            max: {
              curvature: a.max.curvature,
              tiltAngle: a.max.tiltAngle,
              scaleFallOffFactor: p.curvatureDependent.max.scaleFallOffFactor
            }
          },
          scaleStart: i,
          scaleFallOffRange: r,
          minPixelSize: p.minPixelSize
        }, t);
      }

      function n(e, t, a) {
        var i = a.parameters,
            r = a.paddingPixelsOverride;
        return h.scale = Math.min(i.divisor / (t - i.offset), 1), h.factor = function (e) {
          return Math.abs(e * e * e);
        }(e), h.minPixelSize = i.minPixelSize, h.paddingPixels = r, h;
      }

      function l(e, t) {
        return 0 === e ? t.minPixelSize : t.minPixelSize * (1 + 2 * t.paddingPixels / e);
      }

      function s(t, a) {
        return Math.max(Object(_core_mathUtils_js__WEBPACK_IMPORTED_MODULE_0__["lerp"])(t * a.scale, t, a.factor), l(t, a));
      }

      function c(t, a) {
        var i = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : [0, 0];
        var r = Math.min(Math.max(a.scale, l(t[1], a) / t[1]), 1);
        return i[0] = Object(_core_mathUtils_js__WEBPACK_IMPORTED_MODULE_0__["lerp"])(t[0] * r, t[0], a.factor), i[1] = Object(_core_mathUtils_js__WEBPACK_IMPORTED_MODULE_0__["lerp"])(t[1] * r, t[1], a.factor), i;
      }

      function o(e, t, a, i) {
        i.scale = function (e, t, a) {
          var i = n(e, t, a);
          return i.minPixelSize = 0, i.paddingPixels = 0, s(1, i);
        }(e, t, a), i.factor = 0, i.minPixelSize = a.parameters.minPixelSize, i.paddingPixels = a.paddingPixelsOverride;
      }

      function u(e, t) {
        var a = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : [0, 0];
        var i = Math.min(Math.max(t.scale, l(e[1], t) / e[1]), 1);
        return a[0] = e[0] * i, a[1] = e[1] * i, a;
      }

      function d(e, t, a, i) {
        return s(e, n(t, a, i));
      }

      var f = /*#__PURE__*/function () {
        function f(e, t, a) {
          var i = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : {
            camera: {
              distance: 0,
              fovY: 0
            },
            divisor: 0,
            offset: 0,
            minPixelSize: 0,
            paddingPixels: 0
          };
          var r = arguments.length > 4 ? arguments[4] : undefined;

          _classCallCheck(this, f);

          this.viewingMode = e, this.description = t, this.ellipsoidRadius = a, this.parameters = i, this._paddingPixelsOverride = r, 2 === this.viewingMode ? (this.coverageCompensation = this.surfaceCoverageCompensationLocal, this.calculateCurvatureDependentParameters = this.calculateCurvatureDependentParametersLocal) : (this.coverageCompensation = this.surfaceCoverageCompensationGlobal, this.calculateCurvatureDependentParameters = this.calculateCurvatureDependentParametersGlobal);
        }

        _createClass(f, [{
          key: "paddingPixelsOverride",
          get: function get() {
            return this._paddingPixelsOverride || this.parameters.paddingPixels;
          }
        }, {
          key: "update",
          value: function update(e) {
            return (!this.parameters || this.parameters.camera.fovY !== e.fovY || this.parameters.camera.distance !== e.distance) && (this.calculateParameters(e, this.ellipsoidRadius, this.parameters), !0);
          }
        }, {
          key: "overridePadding",
          value: function overridePadding(e) {
            return e !== this.paddingPixelsOverride ? new f(this.viewingMode, this.description, this.ellipsoidRadius, this.parameters, e) : this;
          }
        }, {
          key: "calculateParameters",
          value: function calculateParameters(e, t, a) {
            var _this$description = this.description,
                i = _this$description.scaleStart,
                r = _this$description.scaleFallOffRange,
                n = _this$description.minPixelSize,
                l = e.fovY,
                s = e.distance,
                c = this.calculateCurvatureDependentParameters(e, t),
                o = this.coverageCompensation(e, t, c),
                u = c.tiltAngle,
                d = c.scaleFallOffFactor,
                _f = Math.sin(u) * s,
                m = .5 * Math.PI - u - l * (.5 - i * o),
                p = _f / Math.cos(m),
                h = m + l * r * o,
                v = (p - d * (_f / Math.cos(h))) / (1 - d);

            return a.camera.fovY = e.fovY, a.camera.distance = e.distance, a.offset = v, a.divisor = p - v, a.minPixelSize = n, a;
          }
        }, {
          key: "calculateCurvatureDependentParametersLocal",
          value: function calculateCurvatureDependentParametersLocal(e, t) {
            var a = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : v;
            return a.tiltAngle = this.description.curvatureDependent.min.tiltAngle, a.scaleFallOffFactor = this.description.curvatureDependent.min.scaleFallOffFactor, a;
          }
        }, {
          key: "calculateCurvatureDependentParametersGlobal",
          value: function calculateCurvatureDependentParametersGlobal(t, i) {
            var r = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : v;
            var n = this.description.curvatureDependent,
                l = 1 + t.distance / i,
                s = Math.sqrt(l * l - 1),
                _ref = [n.min.curvature, n.max.curvature],
                c = _ref[0],
                o = _ref[1],
                u = Object(_core_mathUtils_js__WEBPACK_IMPORTED_MODULE_0__["clamp"])((s - c) / (o - c), 0, 1),
                _ref2 = [n.min, n.max],
                d = _ref2[0],
                _f2 = _ref2[1];
            return r.tiltAngle = Object(_core_mathUtils_js__WEBPACK_IMPORTED_MODULE_0__["lerp"])(d.tiltAngle, _f2.tiltAngle, u), r.scaleFallOffFactor = Object(_core_mathUtils_js__WEBPACK_IMPORTED_MODULE_0__["lerp"])(d.scaleFallOffFactor, _f2.scaleFallOffFactor, u), r;
          }
        }, {
          key: "surfaceCoverageCompensationLocal",
          value: function surfaceCoverageCompensationLocal(e, t, a) {
            return (e.fovY - a.tiltAngle) / e.fovY;
          }
        }, {
          key: "surfaceCoverageCompensationGlobal",
          value: function surfaceCoverageCompensationGlobal(e, t, a) {
            var i = t * t,
                r = a.tiltAngle + .5 * Math.PI,
                n = e.fovY,
                l = e.distance,
                s = l * l + i - 2 * Math.cos(r) * l * t,
                c = Math.sqrt(s),
                o = Math.sqrt(s - i);
            return (Math.acos(o / c) - Math.asin(t / (c / Math.sin(r))) + .5 * n) / n;
          }
        }]);

        return f;
      }();

      var m = {
        curvatureDependent: {
          min: {
            curvature: Object(_core_mathUtils_js__WEBPACK_IMPORTED_MODULE_0__["deg2rad"])(10),
            tiltAngle: Object(_core_mathUtils_js__WEBPACK_IMPORTED_MODULE_0__["deg2rad"])(12),
            scaleFallOffFactor: .5
          },
          max: {
            curvature: Object(_core_mathUtils_js__WEBPACK_IMPORTED_MODULE_0__["deg2rad"])(70),
            tiltAngle: Object(_core_mathUtils_js__WEBPACK_IMPORTED_MODULE_0__["deg2rad"])(40),
            scaleFallOffFactor: .8
          }
        },
        scaleStart: .3,
        scaleFallOffRange: .65,
        minPixelSize: 0
      },
          p = {
        curvatureDependent: {
          min: {
            scaleFallOffFactor: .7
          },
          max: {
            scaleFallOffFactor: .95
          }
        },
        minPixelSize: 14
      };
      var h = {
        scale: 0,
        factor: 0,
        minPixelSize: 0,
        paddingPixels: 0
      },
          v = {
        tiltAngle: 0,
        scaleFallOffFactor: 0
      };
      /***/
    },

    /***/
    "2jVe":
    /*!**************************************************************************************************************!*\
      !*** ./node_modules/@arcgis/core/views/3d/webgl-engine/core/shaderTechnique/ShaderTechniqueConfiguration.js ***!
      \**************************************************************************************************************/

    /*! exports provided: ShaderTechniqueConfiguration, parameter */

    /***/
    function jVe(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ShaderTechniqueConfiguration", function () {
        return e;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "parameter", function () {
        return r;
      });
      /* harmony import */


      var _core_mathUtils_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ../../../../../core/mathUtils.js */
      "OKTS");
      /*
      All material copyright ESRI, All Rights Reserved, unless otherwise specified.
      See https://js.arcgis.com/4.18/esri/copyright.txt for details.
      */


      var e = /*#__PURE__*/function () {
        function e() {
          _classCallCheck(this, e);

          this._key = "", this._keyDirty = !1, this._parameterBits = this._parameterBits.map(function () {
            return 0;
          });
        }

        _createClass(e, [{
          key: "key",
          get: function get() {
            return this._keyDirty && (this._keyDirty = !1, this._key = String.fromCharCode.apply(String, this._parameterBits)), this._key;
          }
        }, {
          key: "snapshot",
          value: function snapshot() {
            var t = this._parameterNames,
                _e4 = {
              key: this.key
            };

            var _iterator = _createForOfIteratorHelper(t),
                _step;

            try {
              for (_iterator.s(); !(_step = _iterator.n()).done;) {
                var _r2 = _step.value;
                _e4[_r2] = this[_r2];
              }
            } catch (err) {
              _iterator.e(err);
            } finally {
              _iterator.f();
            }

            return _e4;
          }
        }]);

        return e;
      }();

      function r() {
        var e = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
        return function (r, s) {
          var a, i;
          r._parameterNames = null != (a = r._parameterNames) ? a : [], r._parameterNames.push(s);
          var o = r._parameterNames.length - 1,
              h = e.count || 2,
              n = Math.ceil(Object(_core_mathUtils_js__WEBPACK_IMPORTED_MODULE_0__["log2"])(h)),
              m = null != (i = r._parameterBits) ? i : [0];
          var p = 0;

          for (; m[p] + n > 16;) {
            p++, p >= m.length && m.push(0);
          }

          r._parameterBits = m;
          var _ = m[p],
              y = (1 << n) - 1 << _;
          m[p] += n, Object.defineProperty(r, s, {
            get: function get() {
              return this[o];
            },
            set: function set(t) {
              if (this[o] !== t && (this[o] = t, this._keyDirty = !0, this._parameterBits[p] = this._parameterBits[p] & ~y | +t << _ & y, "number" != typeof t && "boolean" != typeof t)) throw "Configuration values must be booleans or numbers!";
            }
          });
        };
      }
      /***/

    },

    /***/
    "2mxK":
    /*!**************************************************************************!*\
      !*** ./node_modules/@arcgis/core/views/3d/support/buffer/math/common.js ***!
      \**************************************************************************/

    /*! exports provided: logger */

    /***/
    function mxK(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "logger", function () {
        return e;
      });
      /* harmony import */


      var _core_Logger_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ../../../../../core/Logger.js */
      "6S2I");
      /*
      All material copyright ESRI, All Rights Reserved, unless otherwise specified.
      See https://js.arcgis.com/4.18/esri/copyright.txt for details.
      */


      var e = _core_Logger_js__WEBPACK_IMPORTED_MODULE_0__["default"].getLogger("esri.views.3d.support.buffer.math");
      /***/

    },

    /***/
    "368d":
    /*!**************************************************************************************************************************!*\
      !*** ./node_modules/@arcgis/core/views/3d/webgl-engine/core/shaderLibrary/attributes/TextureCoordinateAttribute.glsl.js ***!
      \**************************************************************************************************************************/

    /*! exports provided: TextureCoordinateAttribute */

    /***/
    function d(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "TextureCoordinateAttribute", function () {
        return t;
      });
      /* harmony import */


      var _shaderModules_interfaces_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ../../shaderModules/interfaces.js */
      "OIYib");
      /*
      All material copyright ESRI, All Rights Reserved, unless otherwise specified.
      See https://js.arcgis.com/4.18/esri/copyright.txt for details.
      */


      function t(t, d) {
        1 === d.attributeTextureCoordinates && (t.attributes.add("uv0", "vec2"), t.varyings.add("vuv0", "vec2"), t.vertex.code.add(_shaderModules_interfaces_js__WEBPACK_IMPORTED_MODULE_0__["glsl"](_templateObject15 || (_templateObject15 = _taggedTemplateLiteral(["\n      void forwardTextureCoordinates() {\n        vuv0 = uv0;\n      }\n    "]))))), 2 === d.attributeTextureCoordinates && (t.attributes.add("uv0", "vec2"), t.varyings.add("vuv0", "vec2"), t.attributes.add("uvRegion", "vec4"), t.varyings.add("vuvRegion", "vec4"), t.vertex.code.add(_shaderModules_interfaces_js__WEBPACK_IMPORTED_MODULE_0__["glsl"](_templateObject16 || (_templateObject16 = _taggedTemplateLiteral(["\n      void forwardTextureCoordinates() {\n        vuv0 = uv0;\n        vuvRegion = uvRegion;\n      }\n    "]))))), 0 === d.attributeTextureCoordinates && t.vertex.code.add(_shaderModules_interfaces_js__WEBPACK_IMPORTED_MODULE_0__["glsl"](_templateObject17 || (_templateObject17 = _taggedTemplateLiteral(["\n      void forwardTextureCoordinates() {}\n    "]))));
      }
      /***/

    },

    /***/
    "3Fbu":
    /*!***************************************************!*\
      !*** ./node_modules/@arcgis/core/chunks/vec22.js ***!
      \***************************************************/

    /*! exports provided: c, n, v */

    /***/
    function Fbu(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "c", function () {
        return f;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "n", function () {
        return n;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "v", function () {
        return d;
      });
      /* harmony import */


      var _views_3d_support_buffer_types_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ../views/3d/support/buffer/types.js */
      "grla");
      /*
      All material copyright ESRI, All Rights Reserved, unless otherwise specified.
      See https://js.arcgis.com/4.18/esri/copyright.txt for details.
      */


      function f(e, t, r) {
        var f = e.typedBuffer,
            n = e.typedBufferStride,
            d = t.typedBuffer,
            o = t.typedBufferStride,
            s = r ? r.count : t.count;
        var u = (r && r.dstIndex ? r.dstIndex : 0) * n,
            p = (r && r.srcIndex ? r.srcIndex : 0) * o;

        for (var _e5 = 0; _e5 < s; ++_e5) {
          f[u] = d[p], f[u + 1] = d[p + 1], u += n, p += o;
        }
      }

      function n(n, d, o) {
        var s = n.typedBuffer,
            u = n.typedBufferStride,
            p = d.typedBuffer,
            c = d.typedBufferStride,
            l = o ? o.count : d.count;
        var y = (o && o.dstIndex ? o.dstIndex : 0) * u,
            i = (o && o.srcIndex ? o.srcIndex : 0) * c;

        if (Object(_views_3d_support_buffer_types_js__WEBPACK_IMPORTED_MODULE_0__["isInteger"])(d.elementType)) {
          var e = Object(_views_3d_support_buffer_types_js__WEBPACK_IMPORTED_MODULE_0__["maximumValue"])(d.elementType);
          if (Object(_views_3d_support_buffer_types_js__WEBPACK_IMPORTED_MODULE_0__["isSigned"])(d.elementType)) for (var t = 0; t < l; ++t) {
            s[y] = Math.max(p[i] / e, -1), s[y + 1] = Math.max(p[i + 1] / e, -1), y += u, i += c;
          } else for (var _t5 = 0; _t5 < l; ++_t5) {
            s[y] = p[i] / e, s[y + 1] = p[i + 1] / e, y += u, i += c;
          }
        } else f(n, d, o);

        return n;
      }

      var d = Object.freeze({
        __proto__: null,
        copy: f,
        normalizeIntegerBuffer: n
      });
      /***/
    },

    /***/
    "3O/s":
    /*!*******************************************************!*\
      !*** ./node_modules/@arcgis/core/core/VectorStack.js ***!
      \*******************************************************/

    /*! exports provided: VectorStack */

    /***/
    function OS(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "VectorStack", function () {
        return c;
      });
      /* harmony import */


      var _maybe_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ./maybe.js */
      "srIe");
      /* harmony import */


      var _nextTick_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./nextTick.js */
      "KrcW");
      /* harmony import */


      var _chunks_vec3f64_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ../chunks/vec3f64.js */
      "Cy1f");
      /* harmony import */


      var _chunks_mat3f64_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ../chunks/mat3f64.js */
      "2uVf");
      /* harmony import */


      var _chunks_mat4f64_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ../chunks/mat4f64.js */
      "r+FG");
      /* harmony import */


      var _chunks_quatf64_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ../chunks/quatf64.js */
      "sTkM");
      /* harmony import */


      var _chunks_vec2f64_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ../chunks/vec2f64.js */
      "AvGH");
      /* harmony import */


      var _chunks_vec4f64_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! ../chunks/vec4f64.js */
      "D8Ta");
      /*
      All material copyright ESRI, All Rights Reserved, unless otherwise specified.
      See https://js.arcgis.com/4.18/esri/copyright.txt for details.
      */


      var c = /*#__PURE__*/function () {
        function c(t, s, i) {
          var _this4 = this;

          _classCallCheck(this, c);

          this.itemByteSize = t, this.itemCreate = s, this.buffers = [], this.items = [], this.itemsPerBuffer = 0, this.itemsPtr = 0, this.itemsPerBuffer = Math.ceil(i / this.itemByteSize), this.tickHandle = _nextTick_js__WEBPACK_IMPORTED_MODULE_1__["default"].before(function () {
            return _this4.reset();
          });
        }

        _createClass(c, [{
          key: "destroy",
          value: function destroy() {
            this.tickHandle && (this.tickHandle.remove(), this.tickHandle = Object(_maybe_js__WEBPACK_IMPORTED_MODULE_0__["nullifyNonnullableForDispose"])(this.tickHandle)), this.itemsPtr = 0, this.items = Object(_maybe_js__WEBPACK_IMPORTED_MODULE_0__["nullifyNonnullableForDispose"])(this.items), this.buffers = Object(_maybe_js__WEBPACK_IMPORTED_MODULE_0__["nullifyNonnullableForDispose"])(this.buffers);
          }
        }, {
          key: "get",
          value: function get() {
            0 === this.itemsPtr && Object(_nextTick_js__WEBPACK_IMPORTED_MODULE_1__["default"])(function () {});
            var t = Math.floor(this.itemsPtr / this.itemsPerBuffer);

            for (; this.buffers.length <= t;) {
              var _t6 = new ArrayBuffer(this.itemsPerBuffer * this.itemByteSize);

              for (var e = 0; e < this.itemsPerBuffer; ++e) {
                this.items.push(this.itemCreate(_t6, e * this.itemByteSize));
              }

              this.buffers.push(_t6);
            }

            return this.items[this.itemsPtr++];
          }
        }, {
          key: "reset",
          value: function reset() {
            var t = 2 * (Math.floor(this.itemsPtr / this.itemsPerBuffer) + 1);

            for (; this.buffers.length > t;) {
              this.buffers.pop(), this.items.length = this.buffers.length * this.itemsPerBuffer;
            }

            this.itemsPtr = 0;
          }
        }, {
          key: "test",
          get: function get() {
            return {
              size: this.buffers.length * this.itemsPerBuffer * this.itemByteSize
            };
          }
        }], [{
          key: "createVec2f64",
          value: function createVec2f64() {
            var t = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : a;
            return new c(16, _chunks_vec2f64_js__WEBPACK_IMPORTED_MODULE_6__["c"], t);
          }
        }, {
          key: "createVec3f64",
          value: function createVec3f64() {
            var t = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : a;
            return new c(24, _chunks_vec3f64_js__WEBPACK_IMPORTED_MODULE_2__["a"], t);
          }
        }, {
          key: "createVec4f64",
          value: function createVec4f64() {
            var t = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : a;
            return new c(32, _chunks_vec4f64_js__WEBPACK_IMPORTED_MODULE_7__["c"], t);
          }
        }, {
          key: "createMat3f64",
          value: function createMat3f64() {
            var t = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : a;
            return new c(72, _chunks_mat3f64_js__WEBPACK_IMPORTED_MODULE_3__["c"], t);
          }
        }, {
          key: "createMat4f64",
          value: function createMat4f64() {
            var t = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : a;
            return new c(128, _chunks_mat4f64_js__WEBPACK_IMPORTED_MODULE_4__["c"], t);
          }
        }, {
          key: "createQuatf64",
          value: function createQuatf64() {
            var t = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : a;
            return new c(32, _chunks_quatf64_js__WEBPACK_IMPORTED_MODULE_5__["c"], t);
          }
        }]);

        return c;
      }();

      var a = 4096;
      /***/
    },

    /***/
    "3RTz":
    /*!********************************************************************************!*\
      !*** ./node_modules/@arcgis/core/views/3d/glTF/internal/BinaryStreamReader.js ***!
      \********************************************************************************/

    /*! exports provided: BinaryStreamReader */

    /***/
    function RTz(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "BinaryStreamReader", function () {
        return t;
      });
      /*
      All material copyright ESRI, All Rights Reserved, unless otherwise specified.
      See https://js.arcgis.com/4.18/esri/copyright.txt for details.
      */


      var t = /*#__PURE__*/function () {
        function t(_t7) {
          _classCallCheck(this, t);

          this.data = _t7, this.offset4 = 0, this.dataUint32 = new Uint32Array(this.data, 0, Math.floor(this.data.byteLength / 4));
        }

        _createClass(t, [{
          key: "readUint32",
          value: function readUint32() {
            var _t8 = this.offset4;
            return this.offset4 += 1, this.dataUint32[_t8];
          }
        }, {
          key: "readUint8Array",
          value: function readUint8Array(_t9) {
            var s = 4 * this.offset4;
            return this.offset4 += _t9 / 4, new Uint8Array(this.data, s, _t9);
          }
        }, {
          key: "remainingBytes",
          value: function remainingBytes() {
            return this.data.byteLength - 4 * this.offset4;
          }
        }]);

        return t;
      }();
      /***/

    },

    /***/
    "3qN5":
    /*!*****************************************************************************************************************!*\
      !*** ./node_modules/@arcgis/core/views/3d/webgl-engine/core/shaderLibrary/shading/EvaluateMainLighting.glsl.js ***!
      \*****************************************************************************************************************/

    /*! exports provided: EvaluateMainLighting */

    /***/
    function qN5(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "EvaluateMainLighting", function () {
        return t;
      });
      /* harmony import */


      var _shaderModules_interfaces_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ../../shaderModules/interfaces.js */
      "OIYib");
      /*
      All material copyright ESRI, All Rights Reserved, unless otherwise specified.
      See https://js.arcgis.com/4.18/esri/copyright.txt for details.
      */


      function t(t) {
        var n = t.fragment;
        n.uniforms.add("lightingMainDirection", "vec3"), n.uniforms.add("lightingMainIntensity", "vec3"), n.uniforms.add("lightingFixedFactor", "float"), n.code.add(_shaderModules_interfaces_js__WEBPACK_IMPORTED_MODULE_0__["glsl"](_templateObject18 || (_templateObject18 = _taggedTemplateLiteral(["\n    vec3 evaluateMainLighting(vec3 normal_global, float shadowing) {\n      float dotVal = clamp(-dot(normal_global, lightingMainDirection), 0.0, 1.0);\n\n      // move lighting towards (1.0, 1.0, 1.0) if requested\n      dotVal = mix(dotVal, 1.0, lightingFixedFactor);\n\n      return lightingMainIntensity * ((1.0 - shadowing) * dotVal);\n    }\n  "]))));
      }
      /***/

    },

    /***/
    "4csu":
    /*!*********************************************************************************************!*\
      !*** ./node_modules/@arcgis/core/views/3d/webgl-engine/shaders/DefaultMaterialTechnique.js ***!
      \*********************************************************************************************/

    /*! exports provided: DefaultMaterialTechnique, DefaultMaterialTechniqueConfiguration */

    /***/
    function csu(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "DefaultMaterialTechnique", function () {
        return A;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "DefaultMaterialTechniqueConfiguration", function () {
        return E;
      });
      /* harmony import */


      var _chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ../../../../chunks/tslib.es6.js */
      "pO5D");
      /* harmony import */


      var _chunks_vec3f64_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ../../../../chunks/vec3f64.js */
      "Cy1f");
      /* harmony import */


      var _core_shaderTechnique_ReloadableShaderModule_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ../core/shaderTechnique/ReloadableShaderModule.js */
      "w6Td");
      /* harmony import */


      var _core_shaderTechnique_ShaderTechnique_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ../core/shaderTechnique/ShaderTechnique.js */
      "ypgp");
      /* harmony import */


      var _core_shaderTechnique_ShaderTechniqueConfiguration_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ../core/shaderTechnique/ShaderTechniqueConfiguration.js */
      "2jVe");
      /* harmony import */


      var _lib_DefaultVertexAttributeLocations_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ../lib/DefaultVertexAttributeLocations.js */
      "+h6m");
      /* harmony import */


      var _webgl_Program_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ../../../webgl/Program.js */
      "jjdI");
      /* harmony import */


      var _webgl_renderState_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! ../../../webgl/renderState.js */
      "GJyJ");
      /* harmony import */


      var _core_shaderLibrary_util_View_glsl_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! ../core/shaderLibrary/util/View.glsl.js */
      "jpeq");
      /* harmony import */


      var _materials_internal_MaterialUtil_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! ../materials/internal/MaterialUtil.js */
      "fFEv");
      /* harmony import */


      var _core_shaderLibrary_Slice_glsl_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
      /*! ../core/shaderLibrary/Slice.glsl.js */
      "0nJL");
      /* harmony import */


      var _core_shaderLibrary_output_OutputHighlight_glsl_js__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
      /*! ../core/shaderLibrary/output/OutputHighlight.glsl.js */
      "agdK");
      /* harmony import */


      var _core_shaderLibrary_shading_VisualVariables_glsl_js__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
      /*! ../core/shaderLibrary/shading/VisualVariables.glsl.js */
      "viRi");
      /* harmony import */


      var _core_shaderLibrary_attributes_VerticalOffset_glsl_js__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
      /*! ../core/shaderLibrary/attributes/VerticalOffset.glsl.js */
      "F7CJ");
      /* harmony import */


      var _lib_OrderIndependentTransparency_js__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(
      /*! ../lib/OrderIndependentTransparency.js */
      "dDjh");
      /* harmony import */


      var _lib_StencilUtils_js__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(
      /*! ../lib/StencilUtils.js */
      "h7dw");
      /* harmony import */


      var _core_shaderLibrary_shading_ReadShadowMap_glsl_js__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(
      /*! ../core/shaderLibrary/shading/ReadShadowMap.glsl.js */
      "0BfS");
      /* harmony import */


      var _core_shaderLibrary_util_DoublePrecision_glsl_js__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(
      /*! ../core/shaderLibrary/util/DoublePrecision.glsl.js */
      "aiF/");
      /* harmony import */


      var _core_shaderLibrary_attributes_InstancedDoublePrecision_glsl_js__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(
      /*! ../core/shaderLibrary/attributes/InstancedDoublePrecision.glsl.js */
      "1TnO");
      /* harmony import */


      var _core_shaderLibrary_shading_PhysicallyBasedRenderingParameters_glsl_js__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(
      /*! ../core/shaderLibrary/shading/PhysicallyBasedRenderingParameters.glsl.js */
      "p9cc");
      /* harmony import */


      var _chunks_DefaultMaterial_glsl_js__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(
      /*! ../../../../chunks/DefaultMaterial.glsl.js */
      "AxBq");
      /*
      All material copyright ESRI, All Rights Reserved, unless otherwise specified.
      See https://js.arcgis.com/4.18/esri/copyright.txt for details.
      */


      var A = /*#__PURE__*/function (_core_shaderTechnique) {
        _inherits(A, _core_shaderTechnique);

        var _super4 = _createSuper(A);

        function A() {
          _classCallCheck(this, A);

          return _super4.apply(this, arguments);
        }

        _createClass(A, [{
          key: "initializeProgram",
          value: function initializeProgram(e) {
            var t = A.shader.get(),
                i = this.configuration,
                r = t.build({
              OITEnabled: 0 === i.transparencyPassType,
              output: i.output,
              viewingMode: e.viewingMode,
              receiveShadows: i.receiveShadows,
              slicePlaneEnabled: i.slicePlaneEnabled,
              sliceHighlightDisabled: i.sliceHighlightDisabled,
              sliceEnabledForVertexPrograms: !1,
              symbolColor: i.symbolColors,
              vvSize: i.vvSize,
              vvColor: i.vvColor,
              vvInstancingEnabled: !0,
              instanced: i.instanced,
              instancedColor: i.instancedColor,
              instancedDoublePrecision: i.instancedDoublePrecision,
              useOldSceneLightInterface: !1,
              pbrMode: i.usePBR ? i.isSchematic ? 2 : 1 : 0,
              hasMetalnessAndRoughnessTexture: i.hasMetalnessAndRoughnessTexture,
              hasEmissionTexture: i.hasEmissionTexture,
              hasOcclusionTexture: i.hasOcclusionTexture,
              hasNormalTexture: i.hasNormalTexture,
              hasColorTexture: i.hasColorTexture,
              receiveAmbientOcclusion: i.receiveAmbientOcclusion,
              useCustomDTRExponentForWater: !1,
              normalType: i.normalsTypeDerivate ? 3 : 0,
              doubleSidedMode: i.doubleSidedMode,
              vertexTangets: i.vertexTangents,
              attributeTextureCoordinates: i.hasMetalnessAndRoughnessTexture || i.hasEmissionTexture || i.hasOcclusionTexture || i.hasNormalTexture || i.hasColorTexture ? 1 : 0,
              textureAlphaPremultiplied: i.textureAlphaPremultiplied,
              attributeColor: i.vertexColors,
              screenSizePerspectiveEnabled: i.screenSizePerspective,
              verticalOffsetEnabled: i.verticalOffset,
              offsetBackfaces: i.offsetBackfaces,
              doublePrecisionRequiresObfuscation: Object(_core_shaderLibrary_util_DoublePrecision_glsl_js__WEBPACK_IMPORTED_MODULE_17__["doublePrecisionRequiresObfuscation"])(e.rctx),
              alphaDiscardMode: i.alphaDiscardMode,
              supportsTextureAtlas: !1
            });
            return new _webgl_Program_js__WEBPACK_IMPORTED_MODULE_6__["default"](e.rctx, r.generateSource("vertex"), r.generateSource("fragment"), _lib_DefaultVertexAttributeLocations_js__WEBPACK_IMPORTED_MODULE_5__["Default3D"]);
          }
        }, {
          key: "bindPass",
          value: function bindPass(e, t, i) {
            _core_shaderLibrary_util_View_glsl_js__WEBPACK_IMPORTED_MODULE_8__["View"].bindProjectionMatrix(this.program, i.camera.projectionMatrix);

            var r = this.configuration.output;
            7 === r && (this.program.setUniform1f("opacity", t.opacity), this.program.setUniform1f("layerOpacity", t.layerOpacity), this.program.setUniform4fv("externalColor", t.externalColor), this.program.setUniform1i("colorMixMode", _materials_internal_MaterialUtil_js__WEBPACK_IMPORTED_MODULE_9__["colorMixModes"][t.colorMixMode])), 0 === r ? (i.lighting.setUniforms(this.program, !1), this.program.setUniform3fv("ambient", t.ambient), this.program.setUniform3fv("diffuse", t.diffuse), this.program.setUniform4fv("externalColor", t.externalColor), this.program.setUniform1i("colorMixMode", _materials_internal_MaterialUtil_js__WEBPACK_IMPORTED_MODULE_9__["colorMixModes"][t.colorMixMode]), this.program.setUniform1f("opacity", t.opacity), this.program.setUniform1f("layerOpacity", t.layerOpacity), this.configuration.usePBR && _core_shaderLibrary_shading_PhysicallyBasedRenderingParameters_glsl_js__WEBPACK_IMPORTED_MODULE_19__["PhysicallyBasedRenderingParameters"].bindUniforms(this.program, t, this.configuration.isSchematic)) : 1 === r || 3 === r ? this.program.setUniform2fv("nearFar", i.camera.nearFar) : 4 === r && _core_shaderLibrary_output_OutputHighlight_glsl_js__WEBPACK_IMPORTED_MODULE_11__["OutputHighlight"].bindOutputHighlight(e, this.program, i), _core_shaderLibrary_shading_VisualVariables_glsl_js__WEBPACK_IMPORTED_MODULE_12__["VisualVariables"].bindUniformsForSymbols(this.program, t), _core_shaderLibrary_attributes_VerticalOffset_glsl_js__WEBPACK_IMPORTED_MODULE_13__["VerticalOffset"].bindUniforms(this.program, t, i), Object(_materials_internal_MaterialUtil_js__WEBPACK_IMPORTED_MODULE_9__["bindScreenSizePerspective"])(t.screenSizePerspective, this.program, "screenSizePerspectiveAlignment"), 2 !== t.textureAlphaMode && 3 !== t.textureAlphaMode || this.program.setUniform1f("textureAlphaCutoff", t.textureAlphaCutoff);
          }
        }, {
          key: "bindDraw",
          value: function bindDraw(e) {
            var i = this.configuration.instancedDoublePrecision ? Object(_chunks_vec3f64_js__WEBPACK_IMPORTED_MODULE_1__["f"])(e.camera.viewInverseTransposeMatrix[3], e.camera.viewInverseTransposeMatrix[7], e.camera.viewInverseTransposeMatrix[11]) : e.origin;
            _core_shaderLibrary_util_View_glsl_js__WEBPACK_IMPORTED_MODULE_8__["View"].bindViewCustomOrigin(this.program, i, e.camera.viewMatrix), (0 === this.configuration.output || 7 === this.configuration.output || 1 === this.configuration.output && this.configuration.screenSizePerspective || 2 === this.configuration.output && this.configuration.screenSizePerspective || 4 === this.configuration.output && this.configuration.screenSizePerspective) && _core_shaderLibrary_util_View_glsl_js__WEBPACK_IMPORTED_MODULE_8__["View"].bindCamPosition(this.program, i, e.camera.viewInverseTransposeMatrix), 2 === this.configuration.output && this.program.setUniformMatrix4fv("viewNormal", e.camera.viewInverseTransposeMatrix), this.configuration.instancedDoublePrecision && _core_shaderLibrary_attributes_InstancedDoublePrecision_glsl_js__WEBPACK_IMPORTED_MODULE_18__["InstancedDoublePrecision"].bindCustomOrigin(this.program, i), _core_shaderLibrary_Slice_glsl_js__WEBPACK_IMPORTED_MODULE_10__["Slice"].bindUniforms(this.program, this.configuration, e.slicePlane, i), 0 === this.configuration.output && _core_shaderLibrary_shading_ReadShadowMap_glsl_js__WEBPACK_IMPORTED_MODULE_16__["ReadShadowMap"].bindViewCustomOrigin(this.program, e, i);
          }
        }, {
          key: "setPipeline",
          value: function setPipeline(e, t) {
            var i = this.configuration,
                r = 3 === e,
                o = 2 === e;
            return Object(_webgl_renderState_js__WEBPACK_IMPORTED_MODULE_7__["makePipelineState"])({
              blending: 0 !== i.output && 7 !== i.output || !i.transparent ? null : r ? _lib_OrderIndependentTransparency_js__WEBPACK_IMPORTED_MODULE_14__["blendingDefault"] : Object(_lib_OrderIndependentTransparency_js__WEBPACK_IMPORTED_MODULE_14__["OITBlending"])(e),
              culling: U(i),
              depthTest: {
                func: Object(_lib_OrderIndependentTransparency_js__WEBPACK_IMPORTED_MODULE_14__["OITDepthTest"])(e)
              },
              depthWrite: r || o ? i.writeDepth && _webgl_renderState_js__WEBPACK_IMPORTED_MODULE_7__["defaultDepthWriteParams"] : null,
              colorWrite: _webgl_renderState_js__WEBPACK_IMPORTED_MODULE_7__["defaultColorWriteParams"],
              stencilWrite: i.sceneHasOcludees ? _lib_StencilUtils_js__WEBPACK_IMPORTED_MODULE_15__["stencilWriteMaskOn"] : null,
              stencilTest: i.sceneHasOcludees ? t ? _lib_StencilUtils_js__WEBPACK_IMPORTED_MODULE_15__["stencilToolMaskBaseParams"] : _lib_StencilUtils_js__WEBPACK_IMPORTED_MODULE_15__["stencilBaseAllZerosParams"] : null,
              polygonOffset: r || o ? null : Object(_lib_OrderIndependentTransparency_js__WEBPACK_IMPORTED_MODULE_14__["getOITPolygonOffset"])(i.enableOffset)
            });
          }
        }, {
          key: "initializePipeline",
          value: function initializePipeline() {
            return this._occludeePipelineState = this.setPipeline(this.configuration.transparencyPassType, !0), this.setPipeline(this.configuration.transparencyPassType, !1);
          }
        }, {
          key: "getPipelineState",
          value: function getPipelineState(e) {
            return e ? this._occludeePipelineState : this.pipeline;
          }
        }]);

        return A;
      }(_core_shaderTechnique_ShaderTechnique_js__WEBPACK_IMPORTED_MODULE_3__["ShaderTechnique"]);

      A.shader = new _core_shaderTechnique_ReloadableShaderModule_js__WEBPACK_IMPORTED_MODULE_2__["ReloadableShaderModule"](_chunks_DefaultMaterial_glsl_js__WEBPACK_IMPORTED_MODULE_20__["D"], function () {
        return __webpack_require__.e(
        /*! import() | DefaultMaterial-glsl-js */
        "DefaultMaterial-glsl-js").then(__webpack_require__.bind(null,
        /*! ./DefaultMaterial.glsl.js */
        "SjXz"));
      });

      var U = function U(e) {
        return function (e) {
          return e.cullFace ? 0 !== e.cullFace : !e.slicePlaneEnabled && !e.transparent && !e.doubleSidedMode;
        }(e) && {
          face: 1 === e.cullFace ? 1028 : 1029,
          mode: 2305
        };
      };

      var E = /*#__PURE__*/function (_core_shaderTechnique2) {
        _inherits(E, _core_shaderTechnique2);

        var _super5 = _createSuper(E);

        function E() {
          var _this5;

          _classCallCheck(this, E);

          _this5 = _super5.apply(this, arguments), _this5.output = 0, _this5.alphaDiscardMode = 1, _this5.doubleSidedMode = 0, _this5.isSchematic = !1, _this5.vertexColors = !1, _this5.offsetBackfaces = !1, _this5.symbolColors = !1, _this5.vvSize = !1, _this5.vvColor = !1, _this5.verticalOffset = !1, _this5.receiveShadows = !1, _this5.slicePlaneEnabled = !1, _this5.sliceHighlightDisabled = !1, _this5.receiveAmbientOcclusion = !1, _this5.screenSizePerspective = !1, _this5.textureAlphaPremultiplied = !1, _this5.hasColorTexture = !1, _this5.usePBR = !1, _this5.hasMetalnessAndRoughnessTexture = !1, _this5.hasEmissionTexture = !1, _this5.hasOcclusionTexture = !1, _this5.hasNormalTexture = !1, _this5.instanced = !1, _this5.instancedColor = !1, _this5.instancedDoublePrecision = !1, _this5.vertexTangents = !1, _this5.normalsTypeDerivate = !1, _this5.writeDepth = !0, _this5.sceneHasOcludees = !1, _this5.transparent = !1, _this5.enableOffset = !0, _this5.cullFace = 0, _this5.transparencyPassType = 3;
          return _this5;
        }

        return E;
      }(_core_shaderTechnique_ShaderTechniqueConfiguration_js__WEBPACK_IMPORTED_MODULE_4__["ShaderTechniqueConfiguration"]);

      Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_shaderTechnique_ShaderTechniqueConfiguration_js__WEBPACK_IMPORTED_MODULE_4__["parameter"])({
        count: 8
      })], E.prototype, "output", void 0), Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_shaderTechnique_ShaderTechniqueConfiguration_js__WEBPACK_IMPORTED_MODULE_4__["parameter"])({
        count: 4
      })], E.prototype, "alphaDiscardMode", void 0), Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_shaderTechnique_ShaderTechniqueConfiguration_js__WEBPACK_IMPORTED_MODULE_4__["parameter"])({
        count: 3
      })], E.prototype, "doubleSidedMode", void 0), Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_shaderTechnique_ShaderTechniqueConfiguration_js__WEBPACK_IMPORTED_MODULE_4__["parameter"])()], E.prototype, "isSchematic", void 0), Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_shaderTechnique_ShaderTechniqueConfiguration_js__WEBPACK_IMPORTED_MODULE_4__["parameter"])()], E.prototype, "vertexColors", void 0), Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_shaderTechnique_ShaderTechniqueConfiguration_js__WEBPACK_IMPORTED_MODULE_4__["parameter"])()], E.prototype, "offsetBackfaces", void 0), Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_shaderTechnique_ShaderTechniqueConfiguration_js__WEBPACK_IMPORTED_MODULE_4__["parameter"])()], E.prototype, "symbolColors", void 0), Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_shaderTechnique_ShaderTechniqueConfiguration_js__WEBPACK_IMPORTED_MODULE_4__["parameter"])()], E.prototype, "vvSize", void 0), Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_shaderTechnique_ShaderTechniqueConfiguration_js__WEBPACK_IMPORTED_MODULE_4__["parameter"])()], E.prototype, "vvColor", void 0), Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_shaderTechnique_ShaderTechniqueConfiguration_js__WEBPACK_IMPORTED_MODULE_4__["parameter"])()], E.prototype, "verticalOffset", void 0), Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_shaderTechnique_ShaderTechniqueConfiguration_js__WEBPACK_IMPORTED_MODULE_4__["parameter"])()], E.prototype, "receiveShadows", void 0), Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_shaderTechnique_ShaderTechniqueConfiguration_js__WEBPACK_IMPORTED_MODULE_4__["parameter"])()], E.prototype, "slicePlaneEnabled", void 0), Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_shaderTechnique_ShaderTechniqueConfiguration_js__WEBPACK_IMPORTED_MODULE_4__["parameter"])()], E.prototype, "sliceHighlightDisabled", void 0), Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_shaderTechnique_ShaderTechniqueConfiguration_js__WEBPACK_IMPORTED_MODULE_4__["parameter"])()], E.prototype, "receiveAmbientOcclusion", void 0), Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_shaderTechnique_ShaderTechniqueConfiguration_js__WEBPACK_IMPORTED_MODULE_4__["parameter"])()], E.prototype, "screenSizePerspective", void 0), Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_shaderTechnique_ShaderTechniqueConfiguration_js__WEBPACK_IMPORTED_MODULE_4__["parameter"])()], E.prototype, "textureAlphaPremultiplied", void 0), Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_shaderTechnique_ShaderTechniqueConfiguration_js__WEBPACK_IMPORTED_MODULE_4__["parameter"])()], E.prototype, "hasColorTexture", void 0), Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_shaderTechnique_ShaderTechniqueConfiguration_js__WEBPACK_IMPORTED_MODULE_4__["parameter"])()], E.prototype, "usePBR", void 0), Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_shaderTechnique_ShaderTechniqueConfiguration_js__WEBPACK_IMPORTED_MODULE_4__["parameter"])()], E.prototype, "hasMetalnessAndRoughnessTexture", void 0), Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_shaderTechnique_ShaderTechniqueConfiguration_js__WEBPACK_IMPORTED_MODULE_4__["parameter"])()], E.prototype, "hasEmissionTexture", void 0), Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_shaderTechnique_ShaderTechniqueConfiguration_js__WEBPACK_IMPORTED_MODULE_4__["parameter"])()], E.prototype, "hasOcclusionTexture", void 0), Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_shaderTechnique_ShaderTechniqueConfiguration_js__WEBPACK_IMPORTED_MODULE_4__["parameter"])()], E.prototype, "hasNormalTexture", void 0), Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_shaderTechnique_ShaderTechniqueConfiguration_js__WEBPACK_IMPORTED_MODULE_4__["parameter"])()], E.prototype, "instanced", void 0), Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_shaderTechnique_ShaderTechniqueConfiguration_js__WEBPACK_IMPORTED_MODULE_4__["parameter"])()], E.prototype, "instancedColor", void 0), Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_shaderTechnique_ShaderTechniqueConfiguration_js__WEBPACK_IMPORTED_MODULE_4__["parameter"])()], E.prototype, "instancedDoublePrecision", void 0), Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_shaderTechnique_ShaderTechniqueConfiguration_js__WEBPACK_IMPORTED_MODULE_4__["parameter"])()], E.prototype, "vertexTangents", void 0), Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_shaderTechnique_ShaderTechniqueConfiguration_js__WEBPACK_IMPORTED_MODULE_4__["parameter"])()], E.prototype, "normalsTypeDerivate", void 0), Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_shaderTechnique_ShaderTechniqueConfiguration_js__WEBPACK_IMPORTED_MODULE_4__["parameter"])()], E.prototype, "writeDepth", void 0), Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_shaderTechnique_ShaderTechniqueConfiguration_js__WEBPACK_IMPORTED_MODULE_4__["parameter"])()], E.prototype, "sceneHasOcludees", void 0), Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_shaderTechnique_ShaderTechniqueConfiguration_js__WEBPACK_IMPORTED_MODULE_4__["parameter"])()], E.prototype, "transparent", void 0), Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_shaderTechnique_ShaderTechniqueConfiguration_js__WEBPACK_IMPORTED_MODULE_4__["parameter"])()], E.prototype, "enableOffset", void 0), Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_shaderTechnique_ShaderTechniqueConfiguration_js__WEBPACK_IMPORTED_MODULE_4__["parameter"])({
        count: 3
      })], E.prototype, "cullFace", void 0), Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_shaderTechnique_ShaderTechniqueConfiguration_js__WEBPACK_IMPORTED_MODULE_4__["parameter"])({
        count: 4
      })], E.prototype, "transparencyPassType", void 0);
      /***/
    },

    /***/
    "5MHk":
    /*!***************************************************!*\
      !*** ./node_modules/@arcgis/core/chunks/vec42.js ***!
      \***************************************************/

    /*! exports provided: a, b, s, t, v */

    /***/
    function MHk(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "a", function () {
        return o;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "b", function () {
        return t;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "s", function () {
        return f;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "t", function () {
        return r;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "v", function () {
        return n;
      });
      /* harmony import */


      var _views_3d_support_buffer_math_common_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ../views/3d/support/buffer/math/common.js */
      "2mxK");
      /*
      All material copyright ESRI, All Rights Reserved, unless otherwise specified.
      See https://js.arcgis.com/4.18/esri/copyright.txt for details.
      */


      function t(t, r, f) {
        if (t.count !== r.count) return void _views_3d_support_buffer_math_common_js__WEBPACK_IMPORTED_MODULE_0__["logger"].error("source and destination buffers need to have the same number of elements");
        var o = t.count,
            n = f[0],
            u = f[1],
            d = f[2],
            s = f[3],
            c = f[4],
            i = f[5],
            a = f[6],
            p = f[7],
            y = f[8],
            B = f[9],
            m = f[10],
            h = f[11],
            l = f[12],
            S = f[13],
            b = f[14],
            v = f[15],
            M = t.typedBuffer,
            _ = t.typedBufferStride,
            j = r.typedBuffer,
            g = r.typedBufferStride;

        for (var e = 0; e < o; e++) {
          var _t10 = e * _,
              _r3 = e * g,
              _f3 = j[_r3],
              _o = j[_r3 + 1],
              w = j[_r3 + 2],
              x = j[_r3 + 3];

          M[_t10] = n * _f3 + c * _o + y * w + l * x, M[_t10 + 1] = u * _f3 + i * _o + B * w + S * x, M[_t10 + 2] = d * _f3 + a * _o + m * w + b * x, M[_t10 + 3] = s * _f3 + p * _o + h * w + v * x;
        }
      }

      function r(t, r, f) {
        if (t.count !== r.count) return void _views_3d_support_buffer_math_common_js__WEBPACK_IMPORTED_MODULE_0__["logger"].error("source and destination buffers need to have the same number of elements");
        var o = t.count,
            n = f[0],
            u = f[1],
            d = f[2],
            s = f[3],
            c = f[4],
            i = f[5],
            a = f[6],
            p = f[7],
            y = f[8],
            B = t.typedBuffer,
            m = t.typedBufferStride,
            h = r.typedBuffer,
            l = r.typedBufferStride;

        for (var e = 0; e < o; e++) {
          var _t11 = e * m,
              _r4 = e * l,
              _f4 = h[_r4],
              _o2 = h[_r4 + 1],
              S = h[_r4 + 2],
              b = h[_r4 + 3];

          B[_t11] = n * _f4 + s * _o2 + a * S, B[_t11 + 1] = u * _f4 + c * _o2 + p * S, B[_t11 + 2] = d * _f4 + i * _o2 + y * S, B[_t11 + 3] = b;
        }
      }

      function f(e, t, r) {
        var f = Math.min(e.count, t.count),
            o = e.typedBuffer,
            n = e.typedBufferStride,
            u = t.typedBuffer,
            d = t.typedBufferStride;

        for (var _e6 = 0; _e6 < f; _e6++) {
          var _t12 = _e6 * n,
              _f5 = _e6 * d;

          o[_t12] = r * u[_f5], o[_t12 + 1] = r * u[_f5 + 1], o[_t12 + 2] = r * u[_f5 + 2], o[_t12 + 3] = r * u[_f5 + 3];
        }
      }

      function o(e, t, r) {
        var f = Math.min(e.count, t.count),
            o = e.typedBuffer,
            n = e.typedBufferStride,
            u = t.typedBuffer,
            d = t.typedBufferStride;

        for (var _e7 = 0; _e7 < f; _e7++) {
          var _t13 = _e7 * n,
              _f6 = _e7 * d;

          o[_t13] = u[_f6] >> r, o[_t13 + 1] = u[_f6 + 1] >> r, o[_t13 + 2] = u[_f6 + 2] >> r, o[_t13 + 3] = u[_f6 + 3] >> r;
        }
      }

      var n = Object.freeze({
        __proto__: null,
        transformMat4: t,
        transformMat3: r,
        scale: f,
        shiftRight: o
      });
      /***/
    },

    /***/
    "69UF":
    /*!******************************************************************************************************!*\
      !*** ./node_modules/@arcgis/core/views/3d/webgl-engine/core/shaderLibrary/util/AlphaDiscard.glsl.js ***!
      \******************************************************************************************************/

    /*! exports provided: DiscardOrAdjustAlpha, defaultMaskAlphaCutoff, symbolAlphaCutoff */

    /***/
    function UF(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "DiscardOrAdjustAlpha", function () {
        return r;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "defaultMaskAlphaCutoff", function () {
        return d;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "symbolAlphaCutoff", function () {
        return o;
      });
      /* harmony import */


      var _shaderModules_interfaces_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ../../shaderModules/interfaces.js */
      "OIYib");
      /*
      All material copyright ESRI, All Rights Reserved, unless otherwise specified.
      See https://js.arcgis.com/4.18/esri/copyright.txt for details.
      */


      var d = .1,
          o = .001;

      function r(d, o) {
        var r = d.fragment;

        switch (o.alphaDiscardMode) {
          case 0:
            r.code.add(_shaderModules_interfaces_js__WEBPACK_IMPORTED_MODULE_0__["glsl"](_templateObject19 || (_templateObject19 = _taggedTemplateLiteral(["\n        #define discardOrAdjustAlpha(color) { if (color.a < ", ") { discard; } }\n      "])), _shaderModules_interfaces_js__WEBPACK_IMPORTED_MODULE_0__["glsl"]["float"](.001)));
            break;

          case 1:
            r.code.add(_shaderModules_interfaces_js__WEBPACK_IMPORTED_MODULE_0__["glsl"](_templateObject20 || (_templateObject20 = _taggedTemplateLiteral(["\n        void discardOrAdjustAlpha(inout vec4 color) {\n          color.a = 1.0;\n        }\n      "]))));
            break;

          case 2:
            r.uniforms.add("textureAlphaCutoff", "float"), r.code.add(_shaderModules_interfaces_js__WEBPACK_IMPORTED_MODULE_0__["glsl"](_templateObject21 || (_templateObject21 = _taggedTemplateLiteral(["\n        #define discardOrAdjustAlpha(color) { if (color.a < textureAlphaCutoff) { discard; } else { color.a = 1.0; } }\n      "]))));
            break;

          case 3:
            d.fragment.uniforms.add("textureAlphaCutoff", "float"), d.fragment.code.add(_shaderModules_interfaces_js__WEBPACK_IMPORTED_MODULE_0__["glsl"](_templateObject22 || (_templateObject22 = _taggedTemplateLiteral(["\n        #define discardOrAdjustAlpha(color) { if (color.a < textureAlphaCutoff) { discard; } }\n      "]))));
        }
      }
      /***/

    },

    /***/
    "6kvK":
    /*!******************************************************************************************************************!*\
      !*** ./node_modules/@arcgis/core/views/3d/webgl-engine/core/shaderLibrary/shading/EvaluateSceneLighting.glsl.js ***!
      \******************************************************************************************************************/

    /*! exports provided: EvaluateSceneLighting */

    /***/
    function kvK(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "EvaluateSceneLighting", function () {
        return r;
      });
      /* harmony import */


      var _shaderModules_interfaces_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ../../shaderModules/interfaces.js */
      "OIYib");
      /* harmony import */


      var _PiUtils_glsl_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./PiUtils.glsl.js */
      "xRv2");
      /* harmony import */


      var _ReadShadowMap_glsl_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./ReadShadowMap.glsl.js */
      "0BfS");
      /* harmony import */


      var _PhysicallyBasedRendering_glsl_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./PhysicallyBasedRendering.glsl.js */
      "XV/G");
      /* harmony import */


      var _EvaluateAmbientOcclusion_glsl_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ./EvaluateAmbientOcclusion.glsl.js */
      "cIib");
      /* harmony import */


      var _EvaluateAmbientLighting_glsl_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ./EvaluateAmbientLighting.glsl.js */
      "KQYO");
      /* harmony import */


      var _EvaluateMainLighting_glsl_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ./EvaluateMainLighting.glsl.js */
      "3qN5");
      /*
      All material copyright ESRI, All Rights Reserved, unless otherwise specified.
      See https://js.arcgis.com/4.18/esri/copyright.txt for details.
      */


      function r(r, c) {
        var d = r.fragment;
        r.include(_EvaluateMainLighting_glsl_js__WEBPACK_IMPORTED_MODULE_6__["EvaluateMainLighting"]), r.include(_EvaluateAmbientOcclusion_glsl_js__WEBPACK_IMPORTED_MODULE_4__["EvaluateAmbientOcclusion"], c), 0 !== c.pbrMode && r.include(_PhysicallyBasedRendering_glsl_js__WEBPACK_IMPORTED_MODULE_3__["PhysicallyBasedRendering"], c), r.include(_EvaluateAmbientLighting_glsl_js__WEBPACK_IMPORTED_MODULE_5__["EvaluateAmbientLighting"], c), c.receiveShadows && r.include(_ReadShadowMap_glsl_js__WEBPACK_IMPORTED_MODULE_2__["ReadShadowMap"], c), d.uniforms.add("lightingGlobalFactor", "float"), d.uniforms.add("ambientBoostFactor", "float"), r.include(_PiUtils_glsl_js__WEBPACK_IMPORTED_MODULE_1__["PiUtils"]), d.code.add(_shaderModules_interfaces_js__WEBPACK_IMPORTED_MODULE_0__["glsl"](_templateObject23 || (_templateObject23 = _taggedTemplateLiteral(["\n    const float GAMMA_SRGB = 2.1;\n    const float INV_GAMMA_SRGB = 0.4761904;\n    ", "\n  "])), 0 === c.pbrMode ? "" : "const vec3 GROUND_REFLECTANCE = vec3(0.2);")), c.useOldSceneLightInterface ? d.code.add(_shaderModules_interfaces_js__WEBPACK_IMPORTED_MODULE_0__["glsl"](_templateObject24 || (_templateObject24 = _taggedTemplateLiteral(["\n    vec3 evaluateSceneLightingExt(vec3 normal, vec3 albedo, float shadow, float ssao, vec3 additionalLight) {\n      // evaluate the main light\n      #if defined(TREE_RENDERING)\n        // Special case for tree rendering:\n        // We shift the Lambert lobe to the back, allowing it to reach part of the hemisphere\n        // facing away from the light. The idea is to get an effect where light is transmitted\n        // through the tree.\n        float minDot = -0.5;\n        float dotRange = 1.0 - minDot;\n        float dotNormalization = 0.66; // guessed & hand tweaked value, for an exact value we could precompute an integral over the sphere\n\n        float dotVal = dotNormalization * (clamp(-dot(normal, lightingMainDirection), 1.0 - dotRange, 1.0) - minDot) * (1.0 / dotRange);\n      #else\n        float dotVal = clamp(-dot(normal, lightingMainDirection), 0.0, 1.0);\n      #endif\n\n      // move lighting towards (1.0, 1.0, 1.0) if requested\n      dotVal = mix(dotVal, 1.0, lightingFixedFactor);\n\n      vec3 mainLight = (1.0 - shadow) * lightingMainIntensity * dotVal;\n      vec3 ambientLight = calculateAmbientIrradiance(normal, ssao);\n\n      // inverse gamma correction on the albedo color\n      vec3 albedoGammaC = pow(albedo, vec3(GAMMA_SRGB));\n\n      // physically correct BRDF normalizes by PI\n      vec3 totalLight = mainLight + ambientLight + additionalLight;\n      totalLight = min(totalLight, vec3(PI));\n      vec3 outColor = vec3((albedoGammaC / PI) * (totalLight));\n\n      // apply gamma correction to the computed color\n      outColor = pow(outColor, vec3(INV_GAMMA_SRGB));\n\n      return outColor;\n    }\n  "])))) : (1 === c.viewingMode ? d.code.add(_shaderModules_interfaces_js__WEBPACK_IMPORTED_MODULE_0__["glsl"](_templateObject25 || (_templateObject25 = _taggedTemplateLiteral(["\n      float _oldHeuristicLighting(vec3 vPosWorld) {\n        vec3 shadingNormalWorld = normalize(vPosWorld);\n        float vndl = -dot(shadingNormalWorld, lightingMainDirection);\n\n        return smoothstep(0.0, 1.0, clamp(vndl * 2.5, 0.0, 1.0));\n      }\n    "])))) : d.code.add(_shaderModules_interfaces_js__WEBPACK_IMPORTED_MODULE_0__["glsl"](_templateObject26 || (_templateObject26 = _taggedTemplateLiteral(["\n      float _oldHeuristicLighting(vec3 vPosWorld) {\n        float vndl = -dot(vec3(0.0, 0.0, 1.0), lightingMainDirection);\n        return smoothstep(0.0, 1.0, clamp(vndl * 2.5, 0.0, 1.0));\n      }\n    "])))), d.code.add(_shaderModules_interfaces_js__WEBPACK_IMPORTED_MODULE_0__["glsl"](_templateObject27 || (_templateObject27 = _taggedTemplateLiteral(["\n      vec3 evaluateAdditionalLighting(float ambientOcclusion, vec3 vPosWorld) {\n        float additionalAmbientScale = _oldHeuristicLighting(vPosWorld);\n        return (1.0 - ambientOcclusion) * additionalAmbientScale * ambientBoostFactor * lightingGlobalFactor * lightingMainIntensity;\n      }\n    "])))), 0 === c.pbrMode || 4 === c.pbrMode ? d.code.add(_shaderModules_interfaces_js__WEBPACK_IMPORTED_MODULE_0__["glsl"](_templateObject28 || (_templateObject28 = _taggedTemplateLiteral(["\n      vec3 evaluateSceneLighting(vec3 normalWorld, vec3 baseColor, float mainLightShadow, float ambientOcclusion, vec3 additionalLight)\n      {\n        vec3 mainLighting = evaluateMainLighting(normalWorld, mainLightShadow);\n        vec3 ambientLighting = calculateAmbientIrradiance(normalWorld, ambientOcclusion);\n        // inverse gamma correction on the base color\n        vec3 baseColorLinear = pow(baseColor, vec3(GAMMA_SRGB));\n\n        // physically correct BRDF normalizes by PI\n        vec3 totalLight = mainLighting + ambientLighting + additionalLight;\n        totalLight = min(totalLight, vec3(PI));\n        vec3 outColor = vec3((baseColorLinear / PI) * totalLight);\n\n        // apply gamma correction to the computed color\n        outColor = pow(outColor, vec3(INV_GAMMA_SRGB));\n\n        return outColor;\n      }\n      "])))) : 1 !== c.pbrMode && 2 !== c.pbrMode || (d.code.add(_shaderModules_interfaces_js__WEBPACK_IMPORTED_MODULE_0__["glsl"](_templateObject29 || (_templateObject29 = _taggedTemplateLiteral(["\n      const float fillLightIntensity = 0.25;\n      const float horizonLightDiffusion = 0.4;\n      const float additionalAmbientIrradianceFactor = 0.02;\n\n      vec3 evaluateSceneLightingPBR(vec3 normal, vec3 albedo, float shadow, float ssao, vec3 additionalLight, vec3 viewDir, vec3 normalGround, vec3 mrr, vec3 _emission, float additionalAmbientIrradiance)\n      {\n        // Calculate half vector between view and light direction\n        vec3 viewDirection = -viewDir;\n        vec3 mainLightDirection = -lightingMainDirection;\n        vec3 h = normalize(viewDirection + mainLightDirection);\n\n        PBRShadingInfo inputs;\n        inputs.NdotL = clamp(dot(normal, mainLightDirection), 0.001, 1.0);\n        inputs.NdotV = clamp(abs(dot(normal, viewDirection)), 0.001, 1.0);\n        inputs.NdotH = clamp(dot(normal, h), 0.0, 1.0);\n        inputs.VdotH = clamp(dot(viewDirection, h), 0.0, 1.0);\n        inputs.NdotNG = clamp(dot(normal, normalGround), -1.0, 1.0);\n        vec3 reflectedView = normalize(reflect(viewDirection, normal));\n        inputs.RdotNG = clamp(dot(reflectedView, normalGround), -1.0, 1.0);\n\n        inputs.albedoLinear = pow(albedo, vec3(GAMMA_SRGB));\n        inputs.ssao = ssao;\n\n        inputs.metalness = mrr[0];\n        inputs.roughness = clamp(mrr[1] * mrr[1], 0.001, 0.99);\n      "])))), d.code.add(_shaderModules_interfaces_js__WEBPACK_IMPORTED_MODULE_0__["glsl"](_templateObject30 || (_templateObject30 = _taggedTemplateLiteral(["\n        inputs.f0 = (0.16 * mrr[2] * mrr[2]) * (1.0 - inputs.metalness) + inputs.albedoLinear * inputs.metalness;\n        inputs.f90 = vec3(clamp(dot(inputs.f0, vec3(50.0 * 0.33)), 0.0, 1.0)); // more accurate then using  f90 = 1.0\n        inputs.diffuseColor = inputs.albedoLinear * (vec3(1.0) - inputs.f0) * (1.0 - inputs.metalness);\n      "])))), d.code.add(_shaderModules_interfaces_js__WEBPACK_IMPORTED_MODULE_0__["glsl"](_templateObject31 || (_templateObject31 = _taggedTemplateLiteral(["\n        vec3 ambientDir = vec3(5.0 * normalGround[1] - normalGround[0] * normalGround[2], - 5.0 * normalGround[0] - normalGround[2] * normalGround[1], normalGround[1] * normalGround[1] + normalGround[0] * normalGround[0]);\n        ambientDir = ambientDir != vec3(0.0)? normalize(ambientDir) : normalize(vec3(5.0, -1.0, 0.0));\n\n        inputs.NdotAmbDir = abs(dot(normal, ambientDir));\n\n        // Calculate the irradiance components: sun, fill lights and the sky.\n        vec3 mainLightIrradianceComponent  = inputs.NdotL * (1.0 - shadow) * lightingMainIntensity;\n        vec3 fillLightsIrradianceComponent = inputs.NdotAmbDir * lightingMainIntensity * fillLightIntensity;\n        // calculateAmbientIrradiance for localView and additionalLight for gloabalView\n        vec3 ambientLightIrradianceComponent = calculateAmbientIrradiance(normal, ssao) + additionalLight;\n\n        // Assemble the overall irradiance of the sky that illuminates the surface\n        inputs.skyIrradianceToSurface    = ambientLightIrradianceComponent + mainLightIrradianceComponent + fillLightsIrradianceComponent ;\n        // Assemble the overall irradiance of the ground that illuminates the surface. for this we use the simple model that changes only the sky irradiance by the groundReflectance\n        inputs.groundIrradianceToSurface = GROUND_REFLECTANCE * ambientLightIrradianceComponent + mainLightIrradianceComponent + fillLightsIrradianceComponent ;\n      "])))), d.code.add(_shaderModules_interfaces_js__WEBPACK_IMPORTED_MODULE_0__["glsl"](_templateObject32 || (_templateObject32 = _taggedTemplateLiteral(["\n        vec3 horizonRingDir = inputs.RdotNG * normalGround - reflectedView;\n        vec3 horizonRingH = normalize(viewDirection + horizonRingDir);\n        inputs.NdotH_Horizon = dot(normal, horizonRingH);\n\n        vec3 mainLightRadianceComponent  = normalDistribution(inputs.NdotH, inputs.roughness) * lightingMainIntensity * (1.0 - shadow);\n        vec3 horizonLightRadianceComponent = normalDistribution(inputs.NdotH_Horizon, min(inputs.roughness + horizonLightDiffusion, 1.0)) * lightingMainIntensity * fillLightIntensity;\n        vec3 ambientLightRadianceComponent = calculateAmbientRadiance(ssao) + additionalLight; // calculateAmbientRadiance for localView and additionalLight for gloabalView\n\n        // Assemble the overall radiance of the sky that illuminates the surface\n        inputs.skyRadianceToSurface    =  ambientLightRadianceComponent + mainLightRadianceComponent + horizonLightRadianceComponent;\n        // Assemble the overall radiance of the ground that illuminates the surface. for this we use the simple model that changes only the sky radince by the groundReflectance\n        inputs.groundRadianceToSurface = GROUND_REFLECTANCE * (ambientLightRadianceComponent + horizonLightRadianceComponent) + mainLightRadianceComponent;\n\n        // Calculate average ambient radiance - this is used int the gamut mapping part to deduce the black level that is soft compressed\n        inputs.averageAmbientRadiance = ambientLightIrradianceComponent[1] * (1.0 + GROUND_REFLECTANCE[1]);\n        "])))), d.code.add(_shaderModules_interfaces_js__WEBPACK_IMPORTED_MODULE_0__["glsl"](_templateObject33 || (_templateObject33 = _taggedTemplateLiteral(["\n        vec3 reflectedColorComponent = evaluateEnvironmentIllumination(inputs);\n        vec3 additionalMaterialReflectanceComponent = inputs.albedoLinear * additionalAmbientIrradiance;\n        vec3 emissionComponent = pow(_emission, vec3(GAMMA_SRGB));\n        vec3 outColorLinear = reflectedColorComponent + additionalMaterialReflectanceComponent + emissionComponent;\n        ", "\n        return outColor;\n      }\n    "])), 2 === c.pbrMode ? _shaderModules_interfaces_js__WEBPACK_IMPORTED_MODULE_0__["glsl"](_templateObject34 || (_templateObject34 = _taggedTemplateLiteral(["vec3 outColor = pow(max(vec3(0.0), outColorLinear - 0.005 * inputs.averageAmbientRadiance), vec3(INV_GAMMA_SRGB));"]))) : _shaderModules_interfaces_js__WEBPACK_IMPORTED_MODULE_0__["glsl"](_templateObject35 || (_templateObject35 = _taggedTemplateLiteral(["vec3 outColor = pow(blackLevelSoftCompression(outColorLinear, inputs), vec3(INV_GAMMA_SRGB));"])))))));
      }
      /***/

    },

    /***/
    "8JEK":
    /*!*************************************************************!*\
      !*** ./node_modules/@arcgis/core/views/3d/support/stack.js ***!
      \*************************************************************/

    /*! exports provided: sm3d, sm4d, sq4d, sv2d, sv3d, sv4d */

    /***/
    function JEK(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "sm3d", function () {
        return a;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "sm4d", function () {
        return f;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "sq4d", function () {
        return o;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "sv2d", function () {
        return t;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "sv3d", function () {
        return c;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "sv4d", function () {
        return r;
      });
      /* harmony import */


      var _core_VectorStack_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ../../../core/VectorStack.js */
      "3O/s");
      /*
      All material copyright ESRI, All Rights Reserved, unless otherwise specified.
      See https://js.arcgis.com/4.18/esri/copyright.txt for details.
      */


      var t = _core_VectorStack_js__WEBPACK_IMPORTED_MODULE_0__["VectorStack"].createVec2f64(),
          c = _core_VectorStack_js__WEBPACK_IMPORTED_MODULE_0__["VectorStack"].createVec3f64(),
          r = _core_VectorStack_js__WEBPACK_IMPORTED_MODULE_0__["VectorStack"].createVec4f64(),
          a = _core_VectorStack_js__WEBPACK_IMPORTED_MODULE_0__["VectorStack"].createMat3f64(),
          f = _core_VectorStack_js__WEBPACK_IMPORTED_MODULE_0__["VectorStack"].createMat4f64(),
          o = _core_VectorStack_js__WEBPACK_IMPORTED_MODULE_0__["VectorStack"].createQuatf64();
      /***/

    },

    /***/
    "Ango":
    /*!*************************************************************************!*\
      !*** ./node_modules/@arcgis/core/views/3d/webgl-engine/lib/Geometry.js ***!
      \*************************************************************************/

    /*! exports provided: default */

    /***/
    function Ango(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony import */


      var _core_maybe_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ../../../../core/maybe.js */
      "srIe");
      /* harmony import */


      var _geometryDataUtils_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./geometryDataUtils.js */
      "EDiM");
      /* harmony import */


      var _Util_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./Util.js */
      "EVMh");
      /* harmony import */


      var _IdGen_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./IdGen.js */
      "VHS5");
      /* harmony import */


      var _BoundingInfo_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ./BoundingInfo.js */
      "thYK");
      /*
      All material copyright ESRI, All Rights Reserved, unless otherwise specified.
      See https://js.arcgis.com/4.18/esri/copyright.txt for details.
      */


      var u = /*#__PURE__*/function () {
        function u(t, n) {
          _classCallCheck(this, u);

          this._boundingInfo = null, this._id = u.__idGen.gen(n), this._data = t;
        }

        _createClass(u, [{
          key: "id",
          get: function get() {
            return this._id;
          }
        }, {
          key: "data",
          get: function get() {
            return this._data;
          }
        }, {
          key: "getIndices",
          value: function getIndices(t) {
            return this.data.getIndices(t);
          }
        }, {
          key: "indexCount",
          get: function get() {
            return this.data.indexCount;
          }
        }, {
          key: "getAttribute",
          value: function getAttribute(t) {
            return this.data.getAttribute(t);
          }
        }, {
          key: "vertexCount",
          get: function get() {
            return this.data.indexCount;
          }
        }, {
          key: "faceCount",
          get: function get() {
            return this.data.indexCount / 3;
          }
        }, {
          key: "boundingInfo",
          get: function get() {
            return Object(_core_maybe_js__WEBPACK_IMPORTED_MODULE_0__["isNone"])(this._boundingInfo) && (this._boundingInfo = this._calculateBoundingInfo()), this._boundingInfo;
          }
        }, {
          key: "computeAttachmentOrigin",
          value: function computeAttachmentOrigin(t) {
            return "triangle" === this.data.primitiveType ? this.computeAttachmentOriginTriangles(t) : this.computeAttachmentOriginPoints(t);
          }
        }, {
          key: "computeAttachmentOriginTriangles",
          value: function computeAttachmentOriginTriangles(t) {
            var i = this.getIndices(_Util_js__WEBPACK_IMPORTED_MODULE_2__["VertexAttrConstants"].POSITION),
                e = this.getAttribute(_Util_js__WEBPACK_IMPORTED_MODULE_2__["VertexAttrConstants"].POSITION);
            return Object(_geometryDataUtils_js__WEBPACK_IMPORTED_MODULE_1__["computeAttachmentOriginTriangles"])(e, i, t);
          }
        }, {
          key: "computeAttachmentOriginPoints",
          value: function computeAttachmentOriginPoints(t) {
            var n = this.getIndices(_Util_js__WEBPACK_IMPORTED_MODULE_2__["VertexAttrConstants"].POSITION),
                e = this.getAttribute(_Util_js__WEBPACK_IMPORTED_MODULE_2__["VertexAttrConstants"].POSITION);
            return Object(_geometryDataUtils_js__WEBPACK_IMPORTED_MODULE_1__["computeAttachmentOriginPoints"])(e, n, t);
          }
        }, {
          key: "invalidateBoundingInfo",
          value: function invalidateBoundingInfo() {
            this._boundingInfo = null;
          }
        }, {
          key: "_calculateBoundingInfo",
          value: function _calculateBoundingInfo() {
            var t = this.data.getIndices(_Util_js__WEBPACK_IMPORTED_MODULE_2__["VertexAttrConstants"].POSITION);
            var n = this.data.getAttribute(_Util_js__WEBPACK_IMPORTED_MODULE_2__["VertexAttrConstants"].POSITION),
                i = "triangle" === this.data.primitiveType ? 3 : 1;

            if (0 === t.length) {
              t = new Uint32Array(i);

              for (var _n = 0; _n < i; ++_n) {
                t[_n] = _n;
              }
            }

            var s = t.length;
            Object(_Util_js__WEBPACK_IMPORTED_MODULE_2__["assert"])(s % i == 0, "Indexing error: " + s.toFixed(0) + " not divisible by " + i.toFixed(0));

            var _u = Object(_geometryDataUtils_js__WEBPACK_IMPORTED_MODULE_1__["generateDefaultIndexArray"])(s / i);

            return new _BoundingInfo_js__WEBPACK_IMPORTED_MODULE_4__["default"](_u, i, t, n);
          }
        }]);

        return u;
      }();

      u.__idGen = new _IdGen_js__WEBPACK_IMPORTED_MODULE_3__["IdGen"]();
      /* harmony default export */

      __webpack_exports__["default"] = u;
      /***/
    },

    /***/
    "AxBq":
    /*!******************************************************************!*\
      !*** ./node_modules/@arcgis/core/chunks/DefaultMaterial.glsl.js ***!
      \******************************************************************/

    /*! exports provided: D, b */

    /***/
    function AxBq(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "D", function () {
        return _;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "b", function () {
        return P;
      });
      /* harmony import */


      var _views_3d_webgl_engine_core_shaderModules_interfaces_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ../views/3d/webgl-engine/core/shaderModules/interfaces.js */
      "OIYib");
      /* harmony import */


      var _views_3d_webgl_engine_core_shaderLibrary_Transform_glsl_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ../views/3d/webgl-engine/core/shaderLibrary/Transform.glsl.js */
      "Tbkp");
      /* harmony import */


      var _views_3d_webgl_engine_core_shaderModules_ShaderBuilder_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ../views/3d/webgl-engine/core/shaderModules/ShaderBuilder.js */
      "aQrP");
      /* harmony import */


      var _views_3d_webgl_engine_core_shaderLibrary_Slice_glsl_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ../views/3d/webgl-engine/core/shaderLibrary/Slice.glsl.js */
      "0nJL");
      /* harmony import */


      var _views_3d_webgl_engine_core_shaderLibrary_shading_VisualVariables_glsl_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ../views/3d/webgl-engine/core/shaderLibrary/shading/VisualVariables.glsl.js */
      "viRi");
      /* harmony import */


      var _views_3d_webgl_engine_core_shaderLibrary_util_AlphaDiscard_glsl_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ../views/3d/webgl-engine/core/shaderLibrary/util/AlphaDiscard.glsl.js */
      "69UF");
      /* harmony import */


      var _views_3d_webgl_engine_core_shaderLibrary_attributes_VerticalOffset_glsl_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ../views/3d/webgl-engine/core/shaderLibrary/attributes/VerticalOffset.glsl.js */
      "F7CJ");
      /* harmony import */


      var _views_3d_webgl_engine_core_shaderLibrary_attributes_VertexColor_glsl_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! ../views/3d/webgl-engine/core/shaderLibrary/attributes/VertexColor.glsl.js */
      "bVvB");
      /* harmony import */


      var _views_3d_webgl_engine_core_shaderLibrary_shading_ReadShadowMap_glsl_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! ../views/3d/webgl-engine/core/shaderLibrary/shading/ReadShadowMap.glsl.js */
      "0BfS");
      /* harmony import */


      var _views_3d_webgl_engine_core_shaderLibrary_ForwardLinearDepth_glsl_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! ../views/3d/webgl-engine/core/shaderLibrary/ForwardLinearDepth.glsl.js */
      "vXUg");
      /* harmony import */


      var _views_3d_webgl_engine_core_shaderLibrary_shading_PhysicallyBasedRendering_glsl_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
      /*! ../views/3d/webgl-engine/core/shaderLibrary/shading/PhysicallyBasedRendering.glsl.js */
      "XV/G");
      /* harmony import */


      var _views_3d_webgl_engine_core_shaderLibrary_attributes_InstancedDoublePrecision_glsl_js__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
      /*! ../views/3d/webgl-engine/core/shaderLibrary/attributes/InstancedDoublePrecision.glsl.js */
      "1TnO");
      /* harmony import */


      var _views_3d_webgl_engine_core_shaderLibrary_attributes_TextureCoordinateAttribute_glsl_js__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
      /*! ../views/3d/webgl-engine/core/shaderLibrary/attributes/TextureCoordinateAttribute.glsl.js */
      "368d");
      /* harmony import */


      var _views_3d_webgl_engine_core_shaderLibrary_shading_PhysicallyBasedRenderingParameters_glsl_js__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
      /*! ../views/3d/webgl-engine/core/shaderLibrary/shading/PhysicallyBasedRenderingParameters.glsl.js */
      "p9cc");
      /* harmony import */


      var _views_3d_webgl_engine_core_shaderLibrary_Offset_glsl_js__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(
      /*! ../views/3d/webgl-engine/core/shaderLibrary/Offset.glsl.js */
      "F8o4");
      /* harmony import */


      var _views_3d_webgl_engine_core_shaderLibrary_attributes_NormalAttribute_glsl_js__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(
      /*! ../views/3d/webgl-engine/core/shaderLibrary/attributes/NormalAttribute.glsl.js */
      "wzLF");
      /* harmony import */


      var _views_3d_webgl_engine_core_shaderLibrary_attributes_PositionAttribute_glsl_js__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(
      /*! ../views/3d/webgl-engine/core/shaderLibrary/attributes/PositionAttribute.glsl.js */
      "sJp1");
      /* harmony import */


      var _views_3d_webgl_engine_core_shaderLibrary_attributes_SymbolColor_glsl_js__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(
      /*! ../views/3d/webgl-engine/core/shaderLibrary/attributes/SymbolColor.glsl.js */
      "bLIi");
      /* harmony import */


      var _views_3d_webgl_engine_core_shaderLibrary_attributes_VertexNormal_glsl_js__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(
      /*! ../views/3d/webgl-engine/core/shaderLibrary/attributes/VertexNormal.glsl.js */
      "fRF2");
      /* harmony import */


      var _views_3d_webgl_engine_core_shaderLibrary_default_DefaultMaterialAuxiliaryPasses_glsl_js__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(
      /*! ../views/3d/webgl-engine/core/shaderLibrary/default/DefaultMaterialAuxiliaryPasses.glsl.js */
      "fiGu");
      /* harmony import */


      var _views_3d_webgl_engine_core_shaderLibrary_shading_ComputeNormalTexture_glsl_js__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(
      /*! ../views/3d/webgl-engine/core/shaderLibrary/shading/ComputeNormalTexture.glsl.js */
      "DXpj");
      /* harmony import */


      var _views_3d_webgl_engine_core_shaderLibrary_shading_EvaluateAmbientOcclusion_glsl_js__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(
      /*! ../views/3d/webgl-engine/core/shaderLibrary/shading/EvaluateAmbientOcclusion.glsl.js */
      "cIib");
      /* harmony import */


      var _views_3d_webgl_engine_core_shaderLibrary_shading_EvaluateSceneLighting_glsl_js__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(
      /*! ../views/3d/webgl-engine/core/shaderLibrary/shading/EvaluateSceneLighting.glsl.js */
      "6kvK");
      /* harmony import */


      var _views_3d_webgl_engine_core_shaderLibrary_shading_Normals_glsl_js__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(
      /*! ../views/3d/webgl-engine/core/shaderLibrary/shading/Normals.glsl.js */
      "qrV2");
      /* harmony import */


      var _views_3d_webgl_engine_core_shaderLibrary_util_HeaderComment_glsl_js__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(
      /*! ../views/3d/webgl-engine/core/shaderLibrary/util/HeaderComment.glsl.js */
      "1W42");
      /* harmony import */


      var _views_3d_webgl_engine_core_shaderLibrary_util_MixExternalColor_glsl_js__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(
      /*! ../views/3d/webgl-engine/core/shaderLibrary/util/MixExternalColor.glsl.js */
      "NiZE");
      /*
      All material copyright ESRI, All Rights Reserved, unless otherwise specified.
      See https://js.arcgis.com/4.18/esri/copyright.txt for details.
      */


      function P(P) {
        var _ = new _views_3d_webgl_engine_core_shaderModules_ShaderBuilder_js__WEBPACK_IMPORTED_MODULE_2__["ShaderBuilder"](),
            E = _.vertex.code,
            S = _.fragment.code;

        return _.include(_views_3d_webgl_engine_core_shaderLibrary_util_HeaderComment_glsl_js__WEBPACK_IMPORTED_MODULE_24__["HeaderComment"], {
          name: "Default Material Shader",
          output: P.output
        }), _.vertex.uniforms.add("proj", "mat4").add("view", "mat4").add("camPos", "vec3").add("localOrigin", "vec3"), _.include(_views_3d_webgl_engine_core_shaderLibrary_attributes_PositionAttribute_glsl_js__WEBPACK_IMPORTED_MODULE_16__["PositionAttribute"]), _.varyings.add("vpos", "vec3"), _.include(_views_3d_webgl_engine_core_shaderLibrary_shading_VisualVariables_glsl_js__WEBPACK_IMPORTED_MODULE_4__["VisualVariables"], P), _.include(_views_3d_webgl_engine_core_shaderLibrary_attributes_InstancedDoublePrecision_glsl_js__WEBPACK_IMPORTED_MODULE_11__["InstancedDoublePrecision"], P), _.include(_views_3d_webgl_engine_core_shaderLibrary_attributes_VerticalOffset_glsl_js__WEBPACK_IMPORTED_MODULE_6__["VerticalOffset"], P), 0 !== P.output && 7 !== P.output || (_.include(_views_3d_webgl_engine_core_shaderLibrary_attributes_NormalAttribute_glsl_js__WEBPACK_IMPORTED_MODULE_15__["NormalAttribute"], P), _.include(_views_3d_webgl_engine_core_shaderLibrary_Transform_glsl_js__WEBPACK_IMPORTED_MODULE_1__["Transform"], {
          linearDepth: !1
        }), 0 === P.normalType && P.offsetBackfaces && _.include(_views_3d_webgl_engine_core_shaderLibrary_Offset_glsl_js__WEBPACK_IMPORTED_MODULE_14__["Offset"]), _.include(_views_3d_webgl_engine_core_shaderLibrary_shading_ComputeNormalTexture_glsl_js__WEBPACK_IMPORTED_MODULE_20__["ComputeNormalTexture"], P), _.include(_views_3d_webgl_engine_core_shaderLibrary_attributes_VertexNormal_glsl_js__WEBPACK_IMPORTED_MODULE_18__["VertexNormal"], P), P.instancedColor && _.attributes.add("instanceColor", "vec4"), _.varyings.add("localvpos", "vec3"), _.include(_views_3d_webgl_engine_core_shaderLibrary_attributes_TextureCoordinateAttribute_glsl_js__WEBPACK_IMPORTED_MODULE_12__["TextureCoordinateAttribute"], P), _.include(_views_3d_webgl_engine_core_shaderLibrary_ForwardLinearDepth_glsl_js__WEBPACK_IMPORTED_MODULE_9__["ForwardLinearDepth"], P), _.include(_views_3d_webgl_engine_core_shaderLibrary_attributes_SymbolColor_glsl_js__WEBPACK_IMPORTED_MODULE_17__["SymbolColor"], P), _.include(_views_3d_webgl_engine_core_shaderLibrary_attributes_VertexColor_glsl_js__WEBPACK_IMPORTED_MODULE_7__["VertexColor"], P), _.vertex.uniforms.add("externalColor", "vec4"), _.varyings.add("vcolorExt", "vec4"), E.add(_views_3d_webgl_engine_core_shaderModules_interfaces_js__WEBPACK_IMPORTED_MODULE_0__["glsl"](_templateObject36 || (_templateObject36 = _taggedTemplateLiteral(["\n      void main(void) {\n        forwardNormalizedVertexColor();\n        vcolorExt = externalColor;\n        ", "\n        vcolorExt *= vvColor();\n        vcolorExt *= getSymbolColor();\n        forwardColorMixMode();\n\n        if (vcolorExt.a < ", ") {\n          gl_Position = vec4(1e38, 1e38, 1e38, 1.0);\n        }\n        else {\n          vpos = calculateVPos();\n          localvpos = vpos - view[3].xyz;\n          vpos = subtractOrigin(vpos);\n          ", "\n          vpos = addVerticalOffset(vpos, localOrigin);\n          ", "\n          gl_Position = transformPosition(proj, view, vpos);\n          ", "\n        }\n        forwardLinearDepth();\n        forwardTextureCoordinates();\n      }\n    "])), P.instancedColor ? "vcolorExt *= instanceColor;" : "", _views_3d_webgl_engine_core_shaderModules_interfaces_js__WEBPACK_IMPORTED_MODULE_0__["glsl"]["float"](_views_3d_webgl_engine_core_shaderLibrary_util_AlphaDiscard_glsl_js__WEBPACK_IMPORTED_MODULE_5__["symbolAlphaCutoff"]), 0 === P.normalType ? _views_3d_webgl_engine_core_shaderModules_interfaces_js__WEBPACK_IMPORTED_MODULE_0__["glsl"](_templateObject37 || (_templateObject37 = _taggedTemplateLiteral(["\n          vNormalWorld = dpNormal(vvLocalNormal(normalModel()));"]))) : "", P.vertexTangets ? "vTangent = dpTransformVertexTangent(tangent);" : "", 0 === P.normalType && P.offsetBackfaces ? "gl_Position = offsetBackfacingClipPosition(gl_Position, vpos, vNormalWorld, camPos);" : ""))), 7 === P.output && (_.include(_views_3d_webgl_engine_core_shaderLibrary_Slice_glsl_js__WEBPACK_IMPORTED_MODULE_3__["Slice"], P), _.include(_views_3d_webgl_engine_core_shaderLibrary_util_AlphaDiscard_glsl_js__WEBPACK_IMPORTED_MODULE_5__["DiscardOrAdjustAlpha"], P), _.fragment.uniforms.add("camPos", "vec3").add("localOrigin", "vec3").add("opacity", "float").add("layerOpacity", "float"), P.hasColorTexture && _.fragment.uniforms.add("tex", "sampler2D"), _.fragment.include(_views_3d_webgl_engine_core_shaderLibrary_util_MixExternalColor_glsl_js__WEBPACK_IMPORTED_MODULE_25__["MixExternalColor"]), S.add(_views_3d_webgl_engine_core_shaderModules_interfaces_js__WEBPACK_IMPORTED_MODULE_0__["glsl"](_templateObject38 || (_templateObject38 = _taggedTemplateLiteral(["\n      void main() {\n        discardBySlice(vpos);\n        ", "\n        ", "\n        gl_FragColor = vec4(opacity_);\n      }\n    "])), P.hasColorTexture ? _views_3d_webgl_engine_core_shaderModules_interfaces_js__WEBPACK_IMPORTED_MODULE_0__["glsl"](_templateObject39 || (_templateObject39 = _taggedTemplateLiteral(["\n        vec4 texColor = texture2D(tex, vuv0);\n        ", "\n        discardOrAdjustAlpha(texColor);"])), P.textureAlphaPremultiplied ? "texColor.rgb /= texColor.a;" : "") : _views_3d_webgl_engine_core_shaderModules_interfaces_js__WEBPACK_IMPORTED_MODULE_0__["glsl"](_templateObject40 || (_templateObject40 = _taggedTemplateLiteral(["vec4 texColor = vec4(1.0);"]))), P.attributeColor ? _views_3d_webgl_engine_core_shaderModules_interfaces_js__WEBPACK_IMPORTED_MODULE_0__["glsl"](_templateObject41 || (_templateObject41 = _taggedTemplateLiteral(["\n        float opacity_ = layerOpacity * mixExternalOpacity(vColor.a * opacity, texColor.a, vcolorExt.a, int(colorMixMode));"]))) : _views_3d_webgl_engine_core_shaderModules_interfaces_js__WEBPACK_IMPORTED_MODULE_0__["glsl"](_templateObject42 || (_templateObject42 = _taggedTemplateLiteral(["\n        float opacity_ = layerOpacity * mixExternalOpacity(opacity, texColor.a, vcolorExt.a, int(colorMixMode));\n        "])))))), 0 === P.output && (_.include(_views_3d_webgl_engine_core_shaderLibrary_Slice_glsl_js__WEBPACK_IMPORTED_MODULE_3__["Slice"], P), _.include(_views_3d_webgl_engine_core_shaderLibrary_shading_EvaluateSceneLighting_glsl_js__WEBPACK_IMPORTED_MODULE_22__["EvaluateSceneLighting"], P), _.include(_views_3d_webgl_engine_core_shaderLibrary_shading_EvaluateAmbientOcclusion_glsl_js__WEBPACK_IMPORTED_MODULE_21__["EvaluateAmbientOcclusion"], P), _.include(_views_3d_webgl_engine_core_shaderLibrary_util_AlphaDiscard_glsl_js__WEBPACK_IMPORTED_MODULE_5__["DiscardOrAdjustAlpha"], P), P.receiveShadows && _.include(_views_3d_webgl_engine_core_shaderLibrary_shading_ReadShadowMap_glsl_js__WEBPACK_IMPORTED_MODULE_8__["ReadShadowMap"], P), _.fragment.uniforms.add("camPos", "vec3").add("localOrigin", "vec3").add("ambient", "vec3").add("diffuse", "vec3").add("opacity", "float").add("layerOpacity", "float"), P.hasColorTexture && _.fragment.uniforms.add("tex", "sampler2D"), _.include(_views_3d_webgl_engine_core_shaderLibrary_shading_PhysicallyBasedRenderingParameters_glsl_js__WEBPACK_IMPORTED_MODULE_13__["PhysicallyBasedRenderingParameters"], P), _.include(_views_3d_webgl_engine_core_shaderLibrary_shading_PhysicallyBasedRendering_glsl_js__WEBPACK_IMPORTED_MODULE_10__["PhysicallyBasedRendering"], P), _.fragment.include(_views_3d_webgl_engine_core_shaderLibrary_util_MixExternalColor_glsl_js__WEBPACK_IMPORTED_MODULE_25__["MixExternalColor"]), _.include(_views_3d_webgl_engine_core_shaderLibrary_shading_Normals_glsl_js__WEBPACK_IMPORTED_MODULE_23__["Normals"], P), S.add(_views_3d_webgl_engine_core_shaderModules_interfaces_js__WEBPACK_IMPORTED_MODULE_0__["glsl"](_templateObject43 || (_templateObject43 = _taggedTemplateLiteral(["\n      void main() {\n        discardBySlice(vpos);\n        ", "\n        shadingParams.viewDirection = normalize(vpos - camPos);\n        ", "\n        ", "\n        float ssao = evaluateAmbientOcclusionInverse();\n        ssao *= getBakedOcclusion();\n\n        float additionalAmbientScale = _oldHeuristicLighting(vpos + localOrigin);\n        vec3 additionalLight = ssao * lightingMainIntensity * additionalAmbientScale * ambientBoostFactor * lightingGlobalFactor;\n        ", "\n        vec3 matColor = max(ambient, diffuse);\n        ", "\n        ", "\n        ", "\n        ", "\n        gl_FragColor = highlightSlice(vec4(shadedColor, opacity_), vpos);\n        ", "\n      }\n    "])), P.hasColorTexture ? _views_3d_webgl_engine_core_shaderModules_interfaces_js__WEBPACK_IMPORTED_MODULE_0__["glsl"](_templateObject44 || (_templateObject44 = _taggedTemplateLiteral(["\n        vec4 texColor = texture2D(tex, vuv0);\n        ", "\n        discardOrAdjustAlpha(texColor);"])), P.textureAlphaPremultiplied ? "texColor.rgb /= texColor.a;" : "") : _views_3d_webgl_engine_core_shaderModules_interfaces_js__WEBPACK_IMPORTED_MODULE_0__["glsl"](_templateObject45 || (_templateObject45 = _taggedTemplateLiteral(["vec4 texColor = vec4(1.0);"]))), 3 === P.normalType ? _views_3d_webgl_engine_core_shaderModules_interfaces_js__WEBPACK_IMPORTED_MODULE_0__["glsl"](_templateObject46 || (_templateObject46 = _taggedTemplateLiteral(["\n        vec3 normal = screenDerivativeNormal(localvpos);"]))) : _views_3d_webgl_engine_core_shaderModules_interfaces_js__WEBPACK_IMPORTED_MODULE_0__["glsl"](_templateObject47 || (_templateObject47 = _taggedTemplateLiteral(["\n        shadingParams.normalView = vNormalWorld;\n        vec3 normal = shadingNormal(shadingParams);"]))), 1 === P.pbrMode ? "applyPBRFactors();" : "", P.receiveShadows ? "float shadow = readShadowMap(vpos, linearDepth);" : 1 === P.viewingMode ? "float shadow = lightingGlobalFactor * (1.0 - additionalAmbientScale);" : "float shadow = 0.0;", P.attributeColor ? _views_3d_webgl_engine_core_shaderModules_interfaces_js__WEBPACK_IMPORTED_MODULE_0__["glsl"](_templateObject48 || (_templateObject48 = _taggedTemplateLiteral(["\n        vec3 albedo_ = mixExternalColor(vColor.rgb * matColor, texColor.rgb, vcolorExt.rgb, int(colorMixMode));\n        float opacity_ = layerOpacity * mixExternalOpacity(vColor.a * opacity, texColor.a, vcolorExt.a, int(colorMixMode));"]))) : _views_3d_webgl_engine_core_shaderModules_interfaces_js__WEBPACK_IMPORTED_MODULE_0__["glsl"](_templateObject49 || (_templateObject49 = _taggedTemplateLiteral(["\n        vec3 albedo_ = mixExternalColor(matColor, texColor.rgb, vcolorExt.rgb, int(colorMixMode));\n        float opacity_ = layerOpacity * mixExternalOpacity(opacity, texColor.a, vcolorExt.a, int(colorMixMode));\n        "]))), P.hasNormalTexture ? _views_3d_webgl_engine_core_shaderModules_interfaces_js__WEBPACK_IMPORTED_MODULE_0__["glsl"](_templateObject50 || (_templateObject50 = _taggedTemplateLiteral(["\n              mat3 tangentSpace = ", "\n              vec3 shadedNormal = computeTextureNormal(tangentSpace, vuv0);"])), P.vertexTangets ? "computeTangentSpace(normal);" : "computeTangentSpace(normal, vpos, vuv0);") : "vec3 shadedNormal = normal;", 1 === P.pbrMode || 2 === P.pbrMode ? 1 === P.viewingMode ? _views_3d_webgl_engine_core_shaderModules_interfaces_js__WEBPACK_IMPORTED_MODULE_0__["glsl"](_templateObject51 || (_templateObject51 = _taggedTemplateLiteral(["vec3 normalGround = normalize(vpos + localOrigin);"]))) : _views_3d_webgl_engine_core_shaderModules_interfaces_js__WEBPACK_IMPORTED_MODULE_0__["glsl"](_templateObject52 || (_templateObject52 = _taggedTemplateLiteral(["vec3 normalGround = vec3(0.0, 0.0, 1.0);"]))) : _views_3d_webgl_engine_core_shaderModules_interfaces_js__WEBPACK_IMPORTED_MODULE_0__["glsl"](_templateObject53 || (_templateObject53 = _taggedTemplateLiteral([""]))), 1 === P.pbrMode || 2 === P.pbrMode ? _views_3d_webgl_engine_core_shaderModules_interfaces_js__WEBPACK_IMPORTED_MODULE_0__["glsl"](_templateObject54 || (_templateObject54 = _taggedTemplateLiteral(["\n            float additionalAmbientIrradiance = additionalAmbientIrradianceFactor * lightingMainIntensity[2];\n            vec3 shadedColor = evaluateSceneLightingPBR(shadedNormal, albedo_, shadow, 1.0 - ssao, additionalLight, shadingParams.viewDirection, normalGround, mrr, emission, additionalAmbientIrradiance);"]))) : "vec3 shadedColor = evaluateSceneLighting(shadedNormal, albedo_, shadow, 1.0 - ssao, additionalLight);", P.OITEnabled ? "gl_FragColor = premultiplyAlpha(gl_FragColor);" : ""))), _.include(_views_3d_webgl_engine_core_shaderLibrary_default_DefaultMaterialAuxiliaryPasses_glsl_js__WEBPACK_IMPORTED_MODULE_19__["DefaultMaterialAuxiliaryPasses"], P), _;
      }

      var _ = Object.freeze({
        __proto__: null,
        build: P
      });
      /***/

    },

    /***/
    "CHx4":
    /*!************************************************************************!*\
      !*** ./node_modules/@arcgis/core/views/3d/glTF/internal/indexUtils.js ***!
      \************************************************************************/

    /*! exports provided: linearIndexArray, triangleFanToTriangles, triangleStripToTriangles, trianglesToTriangles */

    /***/
    function CHx4(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "linearIndexArray", function () {
        return r;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "triangleFanToTriangles", function () {
        return i;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "triangleStripToTriangles", function () {
        return f;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "trianglesToTriangles", function () {
        return o;
      });
      /* harmony import */


      var _core_typedArrayUtil_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ../../../../core/typedArrayUtil.js */
      "ohva");
      /* harmony import */


      var _webgl_engine_lib_geometryDataUtils_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ../../webgl-engine/lib/geometryDataUtils.js */
      "EDiM");
      /*
      All material copyright ESRI, All Rights Reserved, unless otherwise specified.
      See https://js.arcgis.com/4.18/esri/copyright.txt for details.
      */


      function r(t) {
        return Object(_webgl_engine_lib_geometryDataUtils_js__WEBPACK_IMPORTED_MODULE_1__["generateDefaultIndexArray"])(t);
      }

      function o(n) {
        return "number" == typeof n ? r(n) : Object(_core_typedArrayUtil_js__WEBPACK_IMPORTED_MODULE_0__["isUint16Array"])(n) || Object(_core_typedArrayUtil_js__WEBPACK_IMPORTED_MODULE_0__["isUint8Array"])(n) ? new Uint32Array(n) : n;
      }

      function f(t) {
        var e = "number" == typeof t ? t : t.length;
        if (e < 3) return new Uint32Array(0);
        var n = e - 2,
            r = new Uint32Array(3 * n);

        if ("number" == typeof t) {
          var _t14 = 0;

          for (var _e8 = 0; _e8 < n; _e8 += 1) {
            _e8 % 2 == 0 ? (r[_t14++] = _e8, r[_t14++] = _e8 + 1, r[_t14++] = _e8 + 2) : (r[_t14++] = _e8 + 1, r[_t14++] = _e8, r[_t14++] = _e8 + 2);
          }
        } else {
          var _e9 = 0;

          for (var _o3 = 0; _o3 < n; _o3 += 1) {
            if (_o3 % 2 == 0) {
              var _n2 = t[_o3],
                  _f7 = t[_o3 + 1],
                  _i6 = t[_o3 + 2];
              r[_e9++] = _n2, r[_e9++] = _f7, r[_e9++] = _i6;
            } else {
              var _n3 = t[_o3 + 1],
                  _f8 = t[_o3],
                  _i7 = t[_o3 + 2];
              r[_e9++] = _n3, r[_e9++] = _f8, r[_e9++] = _i7;
            }
          }
        }

        return r;
      }

      function i(t) {
        var e = "number" == typeof t ? t : t.length;
        if (e < 3) return new Uint32Array(0);
        var n = e - 2,
            r = new Uint32Array(3 * n);

        if ("number" == typeof t) {
          var _t15 = 0;

          for (var _e10 = 0; _e10 < n; ++_e10) {
            r[_t15++] = 0, r[_t15++] = _e10 + 1, r[_t15++] = _e10 + 2;
          }

          return r;
        }

        {
          var _e11 = t[0];
          var _o4 = t[1],
              _f9 = 0;

          for (var _i8 = 0; _i8 < n; ++_i8) {
            var _n4 = t[_i8 + 2];
            r[_f9++] = _e11, r[_f9++] = _o4, r[_f9++] = _n4, _o4 = _n4;
          }

          return r;
        }
      }
      /***/

    },

    /***/
    "D8Ta":
    /*!*****************************************************!*\
      !*** ./node_modules/@arcgis/core/chunks/vec4f64.js ***!
      \*****************************************************/

    /*! exports provided: O, U, Z, a, b, c, d, e, f, g, h, i, j, k, o, u, v, z */

    /***/
    function D8Ta(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "O", function () {
        return l;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "U", function () {
        return N;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "Z", function () {
        return _;
      });
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
        return u;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "d", function () {
        return t;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "e", function () {
        return c;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "f", function () {
        return e;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "g", function () {
        return i;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "h", function () {
        return f;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "i", function () {
        return U;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "j", function () {
        return I;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "k", function () {
        return O;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "o", function () {
        return o;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "u", function () {
        return s;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "v", function () {
        return T;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "z", function () {
        return a;
      });
      /*
      All material copyright ESRI, All Rights Reserved, unless otherwise specified.
      See https://js.arcgis.com/4.18/esri/copyright.txt for details.
      */


      function n() {
        return [0, 0, 0, 0];
      }

      function t(n) {
        return [n[0], n[1], n[2], n[3]];
      }

      function r(n, t, r, e) {
        return [n, t, r, e];
      }

      function e(n) {
        var t = [0, 0, 0, 0],
            r = Math.min(4, n.length);

        for (var _e12 = 0; _e12 < r; ++_e12) {
          t[_e12] = n[_e12];
        }

        return t;
      }

      function u(n, t) {
        return new Float64Array(n, t, 4);
      }

      function a() {
        return [0, 0, 0, 0];
      }

      function o() {
        return r(1, 1, 1, 1);
      }

      function s() {
        return r(1, 0, 0, 0);
      }

      function c() {
        return r(0, 1, 0, 0);
      }

      function i() {
        return r(0, 0, 1, 0);
      }

      function f() {
        return r(0, 0, 0, 1);
      }

      var _ = [0, 0, 0, 0],
          l = o(),
          N = s(),
          U = c(),
          I = i(),
          O = f();
      var T = Object.freeze({
        __proto__: null,
        create: n,
        clone: t,
        fromValues: r,
        fromArray: e,
        createView: u,
        zeros: a,
        ones: o,
        unitX: s,
        unitY: c,
        unitZ: i,
        unitW: f,
        ZEROS: _,
        ONES: l,
        UNIT_X: N,
        UNIT_Y: U,
        UNIT_Z: I,
        UNIT_W: O
      });
      /***/
    },

    /***/
    "DXpj":
    /*!*****************************************************************************************************************!*\
      !*** ./node_modules/@arcgis/core/views/3d/webgl-engine/core/shaderLibrary/shading/ComputeNormalTexture.glsl.js ***!
      \*****************************************************************************************************************/

    /*! exports provided: ComputeNormalTexture */

    /***/
    function DXpj(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ComputeNormalTexture", function () {
        return n;
      });
      /* harmony import */


      var _shaderModules_interfaces_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ../../shaderModules/interfaces.js */
      "OIYib");
      /* harmony import */


      var _attributes_VertexTextureCoordinates_glsl_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ../attributes/VertexTextureCoordinates.glsl.js */
      "fLTx");
      /*
      All material copyright ESRI, All Rights Reserved, unless otherwise specified.
      See https://js.arcgis.com/4.18/esri/copyright.txt for details.
      */


      function n(n, a) {
        var o = n.fragment;
        o.uniforms.add("normalTexture", "sampler2D"), o.uniforms.add("normalTextureSize", "vec2"), a.vertexTangets ? (n.attributes.add("tangent", "vec4"), n.varyings.add("vTangent", "vec4"), 2 === a.doubleSidedMode ? o.code.add(_shaderModules_interfaces_js__WEBPACK_IMPORTED_MODULE_0__["glsl"](_templateObject55 || (_templateObject55 = _taggedTemplateLiteral(["\n      mat3 computeTangentSpace(vec3 normal) {\n        float tangentHeadedness = gl_FrontFacing ? vTangent.w : -vTangent.w;\n        vec3 tangent = normalize(gl_FrontFacing ? vTangent.xyz : -vTangent.xyz);\n        vec3 bitangent = cross(normal, tangent) * tangentHeadedness;\n        return mat3(tangent, bitangent, normal);\n      }\n    "])))) : o.code.add(_shaderModules_interfaces_js__WEBPACK_IMPORTED_MODULE_0__["glsl"](_templateObject56 || (_templateObject56 = _taggedTemplateLiteral(["\n      mat3 computeTangentSpace(vec3 normal) {\n        float tangentHeadedness = vTangent.w;\n        vec3 tangent = normalize(vTangent.xyz);\n        vec3 bitangent = cross(normal, tangent) * tangentHeadedness;\n        return mat3(tangent, bitangent, normal);\n      }\n    "]))))) : (n.extensions.add("GL_OES_standard_derivatives"), o.code.add(_shaderModules_interfaces_js__WEBPACK_IMPORTED_MODULE_0__["glsl"](_templateObject57 || (_templateObject57 = _taggedTemplateLiteral(["\n    mat3 computeTangentSpace(vec3 normal, vec3 pos, vec2 st) {\n\n      vec3 Q1 = dFdx(pos);\n      vec3 Q2 = dFdy(pos);\n\n      vec2 stx = dFdx(st);\n      vec2 sty = dFdy(st);\n\n      float det = stx.t * sty.s - sty.t * stx.s;\n\n      vec3 T = stx.t * Q2 - sty.t * Q1; // compute tangent\n      T = T - normal * dot(normal, T); // orthogonalize tangent\n      T *= inversesqrt(max(dot(T,T), 1.e-10)); // \"soft\" normalize - goes to 0 when T goes to 0\n      vec3 B = sign(det) * cross(normal, T); // assume normal is normalized, B has the same lenght as B\n      return mat3(T, B, normal); // T and B go to 0 when the tangent space is not well defined by the uv coordinates\n    }\n  "]))))), 0 !== a.attributeTextureCoordinates && (n.include(_attributes_VertexTextureCoordinates_glsl_js__WEBPACK_IMPORTED_MODULE_1__["VertexTextureCoordinates"], a), o.code.add(_shaderModules_interfaces_js__WEBPACK_IMPORTED_MODULE_0__["glsl"](_templateObject58 || (_templateObject58 = _taggedTemplateLiteral(["\n    vec3 computeTextureNormal(mat3 tangentSpace, vec2 uv) {\n      vtc.uv = uv;\n      ", "\n      vec3 rawNormal = textureLookup(normalTexture, vtc).rgb * 2.0 - 1.0;\n      return tangentSpace * rawNormal;\n    }\n  "])), a.supportsTextureAtlas ? "vtc.size = normalTextureSize;" : "")));
      }
      /***/

    },

    /***/
    "DZ/s":
    /*!**********************************************************!*\
      !*** ./node_modules/@arcgis/core/chunks/boundedPlane.js ***!
      \**********************************************************/

    /*! exports provided: B, U, a, b, c, d, e, f, g, h, i, j, k, l, m, n, o, p, q, r, s, t, u, v, w, x, y, z */

    /***/
    function DZS(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "B", function () {
        return R;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "U", function () {
        return js;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "a", function () {
        return gs;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "b", function () {
        return Ss;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "c", function () {
        return z;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "d", function () {
        return D;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "e", function () {
        return rs;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "f", function () {
        return H;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "g", function () {
        return K;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "h", function () {
        return W;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "i", function () {
        return X;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "j", function () {
        return Z;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "k", function () {
        return $;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "l", function () {
        return ss;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "m", function () {
        return ns;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "n", function () {
        return ts;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "o", function () {
        return as;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "p", function () {
        return is;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "q", function () {
        return os;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "r", function () {
        return es;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "s", function () {
        return Q;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "t", function () {
        return cs;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "u", function () {
        return J;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "v", function () {
        return us;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "w", function () {
        return G;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "x", function () {
        return bs;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "y", function () {
        return fs;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "z", function () {
        return ls;
      });
      /* harmony import */


      var _core_has_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ../core/has.js */
      "wSAH");
      /* harmony import */


      var _core_Logger_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ../core/Logger.js */
      "6S2I");
      /* harmony import */


      var _core_mathUtils_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ../core/mathUtils.js */
      "OKTS");
      /* harmony import */


      var _vec3f64_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./vec3f64.js */
      "Cy1f");
      /* harmony import */


      var _vec3_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ./vec3.js */
      "5DEt");
      /* harmony import */


      var _views_3d_support_mathUtils_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ../views/3d/support/mathUtils.js */
      "aAs6");
      /* harmony import */


      var _mat4_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ./mat4.js */
      "15Hh");
      /* harmony import */


      var _core_ObjectStack_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! ../core/ObjectStack.js */
      "IRkY");
      /* harmony import */


      var _mat4f64_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! ./mat4f64.js */
      "r+FG");
      /* harmony import */


      var _views_3d_support_stack_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! ../views/3d/support/stack.js */
      "8JEK");
      /* harmony import */


      var _vector_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
      /*! ./vector.js */
      "IEcw");
      /* harmony import */


      var _lineSegment_js__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
      /*! ./lineSegment.js */
      "jZU2");
      /* harmony import */


      var _plane_js__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
      /*! ./plane.js */
      "cKtl");
      /* harmony import */


      var _ray_js__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
      /*! ./ray.js */
      "QFRQ");
      /*
      All material copyright ESRI, All Rights Reserved, unless otherwise specified.
      See https://js.arcgis.com/4.18/esri/copyright.txt for details.
      */


      var L = _core_Logger_js__WEBPACK_IMPORTED_MODULE_1__["default"].getLogger("esri.views.3d.support.geometryUtils.boundedPlane");

      var R = function R() {
        _classCallCheck(this, R);

        this.plane = Object(_plane_js__WEBPACK_IMPORTED_MODULE_12__["c"])(), this.origin = Object(_vec3f64_js__WEBPACK_IMPORTED_MODULE_3__["c"])(), this.basis1 = Object(_vec3f64_js__WEBPACK_IMPORTED_MODULE_3__["c"])(), this.basis2 = Object(_vec3f64_js__WEBPACK_IMPORTED_MODULE_3__["c"])();
      };

      function z() {
        var s = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : js;
        return {
          plane: Object(_plane_js__WEBPACK_IMPORTED_MODULE_12__["c"])(s.plane),
          origin: Object(_vec3f64_js__WEBPACK_IMPORTED_MODULE_3__["b"])(s.origin),
          basis1: Object(_vec3f64_js__WEBPACK_IMPORTED_MODULE_3__["b"])(s.basis1),
          basis2: Object(_vec3f64_js__WEBPACK_IMPORTED_MODULE_3__["b"])(s.basis2)
        };
      }

      function G(s, i, n) {
        var t = Ps.get();
        return t.origin = s, t.basis1 = i, t.basis2 = n, t.plane = Object(_plane_js__WEBPACK_IMPORTED_MODULE_12__["w"])(0, 0, 0, 0), J(t), t;
      }

      function D(s) {
        var i = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : z();
        return H(s.origin, s.basis1, s.basis2, i);
      }

      function H(s, i, n) {
        var t = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : z();
        return Object(_vec3_js__WEBPACK_IMPORTED_MODULE_4__["g"])(t.origin, s), Object(_vec3_js__WEBPACK_IMPORTED_MODULE_4__["g"])(t.basis1, i), Object(_vec3_js__WEBPACK_IMPORTED_MODULE_4__["g"])(t.basis2, n), J(t), function (s, i) {
          Math.abs(Object(_vec3_js__WEBPACK_IMPORTED_MODULE_4__["d"])(s.basis1, s.basis2) / (Object(_vec3_js__WEBPACK_IMPORTED_MODULE_4__["l"])(s.basis1) * Object(_vec3_js__WEBPACK_IMPORTED_MODULE_4__["l"])(s.basis2))) > 1e-6 && L.warn(i, "Provided basis vectors are not perpendicular");
          Math.abs(Object(_vec3_js__WEBPACK_IMPORTED_MODULE_4__["d"])(s.basis1, ls(s))) > 1e-6 && L.warn(i, "Basis vectors and plane normal are not perpendicular");
          Math.abs(-Object(_vec3_js__WEBPACK_IMPORTED_MODULE_4__["d"])(ls(s), s.origin) - s.plane[3]) > 1e-6 && L.warn(i, "Plane offset is not consistent with plane origin");
        }(t, "fromValues()"), t;
      }

      function J(s) {
        Object(_plane_js__WEBPACK_IMPORTED_MODULE_12__["f"])(s.basis2, s.basis1, s.origin, s.plane);
      }

      function K(s, i, n) {
        s !== n && D(s, n);
        var t = Object(_vec3_js__WEBPACK_IMPORTED_MODULE_4__["a"])(_views_3d_support_stack_js__WEBPACK_IMPORTED_MODULE_9__["sv3d"].get(), ls(s), i);
        return Object(_vec3_js__WEBPACK_IMPORTED_MODULE_4__["b"])(n.origin, n.origin, t), n.plane[3] -= i, n;
      }

      function Q(s, i, n) {
        return W(i, n), K(n, cs(s, s.origin), n), n;
      }

      function W(s) {
        var i = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : z();
        var n = (s[2] - s[0]) / 2,
            t = (s[3] - s[1]) / 2;
        return Object(_vec3_js__WEBPACK_IMPORTED_MODULE_4__["s"])(i.origin, s[0] + n, s[1] + t, 0), Object(_vec3_js__WEBPACK_IMPORTED_MODULE_4__["s"])(i.basis1, n, 0, 0), Object(_vec3_js__WEBPACK_IMPORTED_MODULE_4__["s"])(i.basis2, 0, t, 0), Object(_plane_js__WEBPACK_IMPORTED_MODULE_12__["a"])(0, 0, 1, 0, i.plane), i;
      }

      function X(s, i, n) {
        return !!Object(_plane_js__WEBPACK_IMPORTED_MODULE_12__["i"])(s.plane, i, n) && ps(s, n);
      }

      function Z(s, i, n) {
        if (X(s, i, n)) return n;
        var t = $(s, i, _views_3d_support_stack_js__WEBPACK_IMPORTED_MODULE_9__["sv3d"].get());
        return Object(_vec3_js__WEBPACK_IMPORTED_MODULE_4__["b"])(n, i.origin, Object(_vec3_js__WEBPACK_IMPORTED_MODULE_4__["a"])(_views_3d_support_stack_js__WEBPACK_IMPORTED_MODULE_9__["sv3d"].get(), i.direction, Object(_vec3_js__WEBPACK_IMPORTED_MODULE_4__["k"])(i.origin, t) / Object(_vec3_js__WEBPACK_IMPORTED_MODULE_4__["l"])(i.direction))), n;
      }

      function $(s, n, t) {
        var a = Is.get();
        hs(s, n, a, Is.get());
        var r = Number.POSITIVE_INFINITY;

        var _iterator2 = _createForOfIteratorHelper(Ns),
            _step2;

        try {
          for (_iterator2.s(); !(_step2 = _iterator2.n()).done;) {
            var e = _step2.value;

            var c = ds(s, e, vs.get()),
                u = _views_3d_support_stack_js__WEBPACK_IMPORTED_MODULE_9__["sv3d"].get();

            if (Object(_plane_js__WEBPACK_IMPORTED_MODULE_12__["b"])(a, c, u)) {
              var _s2 = Object(_views_3d_support_mathUtils_js__WEBPACK_IMPORTED_MODULE_5__["directionFromTo"])(_views_3d_support_stack_js__WEBPACK_IMPORTED_MODULE_9__["sv3d"].get(), n.origin, u),
                  _a = Math.abs(Object(_core_mathUtils_js__WEBPACK_IMPORTED_MODULE_2__["acosClamped"])(Object(_vec3_js__WEBPACK_IMPORTED_MODULE_4__["d"])(n.direction, _s2)));

              _a < r && (r = _a, Object(_vec3_js__WEBPACK_IMPORTED_MODULE_4__["g"])(t, u));
            }
          }
        } catch (err) {
          _iterator2.e(err);
        } finally {
          _iterator2.f();
        }

        return r === Number.POSITIVE_INFINITY ? ss(s, n, t) : t;
      }

      function ss(s, i, n) {
        if (X(s, i, n)) return n;
        var t = Is.get(),
            a = Is.get();
        hs(s, i, t, a);
        var r = Number.POSITIVE_INFINITY;

        var _iterator3 = _createForOfIteratorHelper(Ns),
            _step3;

        try {
          for (_iterator3.s(); !(_step3 = _iterator3.n()).done;) {
            var e = _step3.value;

            var c = ds(s, e, vs.get()),
                u = _views_3d_support_stack_js__WEBPACK_IMPORTED_MODULE_9__["sv3d"].get();

            if (Object(_plane_js__WEBPACK_IMPORTED_MODULE_12__["d"])(t, c, u)) {
              var _s3 = Object(_ray_js__WEBPACK_IMPORTED_MODULE_13__["d"])(i, u);

              if (!Object(_plane_js__WEBPACK_IMPORTED_MODULE_12__["e"])(a, u)) continue;
              _s3 < r && (r = _s3, Object(_vec3_js__WEBPACK_IMPORTED_MODULE_4__["g"])(n, u));
            }
          }
        } catch (err) {
          _iterator3.e(err);
        } finally {
          _iterator3.f();
        }

        return ts(s, i.origin) < r && is(s, i.origin, n), n;
      }

      function is(s, i, n) {
        var t = Object(_plane_js__WEBPACK_IMPORTED_MODULE_12__["p"])(s.plane, i, _views_3d_support_stack_js__WEBPACK_IMPORTED_MODULE_9__["sv3d"].get()),
            a = Object(_lineSegment_js__WEBPACK_IMPORTED_MODULE_11__["p"])(ms(s, s.basis1), t, -1, 1, _views_3d_support_stack_js__WEBPACK_IMPORTED_MODULE_9__["sv3d"].get()),
            o = Object(_lineSegment_js__WEBPACK_IMPORTED_MODULE_11__["p"])(ms(s, s.basis2), t, -1, 1, _views_3d_support_stack_js__WEBPACK_IMPORTED_MODULE_9__["sv3d"].get());
        return Object(_vec3_js__WEBPACK_IMPORTED_MODULE_4__["f"])(n, Object(_vec3_js__WEBPACK_IMPORTED_MODULE_4__["b"])(_views_3d_support_stack_js__WEBPACK_IMPORTED_MODULE_9__["sv3d"].get(), a, o), s.origin), n;
      }

      function ns(s, i, n) {
        var t = s.origin,
            a = s.basis1,
            o = s.basis2,
            r = Object(_vec3_js__WEBPACK_IMPORTED_MODULE_4__["f"])(_views_3d_support_stack_js__WEBPACK_IMPORTED_MODULE_9__["sv3d"].get(), i, t),
            e = Object(_vector_js__WEBPACK_IMPORTED_MODULE_10__["p"])(a, r),
            u = Object(_vector_js__WEBPACK_IMPORTED_MODULE_10__["p"])(o, r),
            g = Object(_vector_js__WEBPACK_IMPORTED_MODULE_10__["p"])(ls(s), r);
        return Object(_vec3_js__WEBPACK_IMPORTED_MODULE_4__["s"])(n, e, u, g);
      }

      function ts(s, i) {
        var n = ns(s, i, _views_3d_support_stack_js__WEBPACK_IMPORTED_MODULE_9__["sv3d"].get()),
            t = s.basis1,
            a = s.basis2,
            o = Object(_vec3_js__WEBPACK_IMPORTED_MODULE_4__["l"])(t),
            r = Object(_vec3_js__WEBPACK_IMPORTED_MODULE_4__["l"])(a),
            e = Math.max(Math.abs(n[0]) - o, 0),
            c = Math.max(Math.abs(n[1]) - r, 0),
            u = n[2];
        return e * e + c * c + u * u;
      }

      function as(s, i) {
        return Math.sqrt(ts(s, i));
      }

      function os(s, i) {
        var n = Number.NEGATIVE_INFINITY;

        var _iterator4 = _createForOfIteratorHelper(Ns),
            _step4;

        try {
          for (_iterator4.s(); !(_step4 = _iterator4.n()).done;) {
            var t = _step4.value;
            var a = ds(s, t, vs.get()),
                o = Object(_lineSegment_js__WEBPACK_IMPORTED_MODULE_11__["d"])(a, i);
            o > n && (n = o);
          }
        } catch (err) {
          _iterator4.e(err);
        } finally {
          _iterator4.f();
        }

        return Math.sqrt(n);
      }

      function rs(s, i) {
        return Object(_plane_js__WEBPACK_IMPORTED_MODULE_12__["e"])(s.plane, i) && ps(s, i);
      }

      function es(s, i, n, t) {
        return function (s, i, n) {
          switch (i) {
            case 0:
              Object(_vec3_js__WEBPACK_IMPORTED_MODULE_4__["g"])(n, s.basis1), Object(_vec3_js__WEBPACK_IMPORTED_MODULE_4__["n"])(n, n);
              break;

            case 1:
              Object(_vec3_js__WEBPACK_IMPORTED_MODULE_4__["g"])(n, s.basis2), Object(_vec3_js__WEBPACK_IMPORTED_MODULE_4__["n"])(n, n);
              break;

            case 2:
              Object(_vec3_js__WEBPACK_IMPORTED_MODULE_4__["g"])(n, ls(s));
          }

          return n;
        }(s, n, t);
      }

      function cs(s, i) {
        var n = -s.plane[3];
        return Object(_vector_js__WEBPACK_IMPORTED_MODULE_10__["p"])(ls(s), i) - n;
      }

      function us(s, i, n, t) {
        var a = cs(s, i),
            o = Object(_vec3_js__WEBPACK_IMPORTED_MODULE_4__["a"])(ws, ls(s), n - a);
        return Object(_vec3_js__WEBPACK_IMPORTED_MODULE_4__["b"])(t, i, o), t;
      }

      function gs(s, i) {
        return Object(_vec3_js__WEBPACK_IMPORTED_MODULE_4__["m"])(s.basis1, i.basis1) && Object(_vec3_js__WEBPACK_IMPORTED_MODULE_4__["m"])(s.basis2, i.basis2) && Object(_vec3_js__WEBPACK_IMPORTED_MODULE_4__["m"])(s.origin, i.origin);
      }

      function bs(s, i, n) {
        return s !== n && D(s, n), Object(_mat4_js__WEBPACK_IMPORTED_MODULE_6__["a"])(Ms, i), Object(_mat4_js__WEBPACK_IMPORTED_MODULE_6__["b"])(Ms, Ms), Object(_vec3_js__WEBPACK_IMPORTED_MODULE_4__["i"])(n.basis1, s.basis1, Ms), Object(_vec3_js__WEBPACK_IMPORTED_MODULE_4__["i"])(n.basis2, s.basis2, Ms), Object(_vec3_js__WEBPACK_IMPORTED_MODULE_4__["i"])(Object(_plane_js__WEBPACK_IMPORTED_MODULE_12__["n"])(n.plane), Object(_plane_js__WEBPACK_IMPORTED_MODULE_12__["n"])(s.plane), Ms), Object(_vec3_js__WEBPACK_IMPORTED_MODULE_4__["i"])(n.origin, s.origin, i), Object(_plane_js__WEBPACK_IMPORTED_MODULE_12__["s"])(n.plane, n.origin, n.plane), n;
      }

      function fs(s, i, n, t) {
        return s !== t && D(s, t), Object(_mat4_js__WEBPACK_IMPORTED_MODULE_6__["r"])(Ts, Object(_mat4_js__WEBPACK_IMPORTED_MODULE_6__["i"])(Ts), i, n), Object(_vec3_js__WEBPACK_IMPORTED_MODULE_4__["i"])(t.basis1, s.basis1, Ts), Object(_vec3_js__WEBPACK_IMPORTED_MODULE_4__["i"])(t.basis2, s.basis2, Ts), J(t), t;
      }

      function ls(s) {
        return Object(_plane_js__WEBPACK_IMPORTED_MODULE_12__["n"])(s.plane);
      }

      function ps(s, i) {
        var n = Object(_vec3_js__WEBPACK_IMPORTED_MODULE_4__["f"])(_views_3d_support_stack_js__WEBPACK_IMPORTED_MODULE_9__["sv3d"].get(), i, s.origin),
            t = Object(_vec3_js__WEBPACK_IMPORTED_MODULE_4__["o"])(s.basis1),
            a = Object(_vec3_js__WEBPACK_IMPORTED_MODULE_4__["o"])(s.basis2),
            o = Object(_vec3_js__WEBPACK_IMPORTED_MODULE_4__["d"])(s.basis1, n),
            r = Object(_vec3_js__WEBPACK_IMPORTED_MODULE_4__["d"])(s.basis2, n);
        return -o - t < 0 && o - t < 0 && -r - a < 0 && r - a < 0;
      }

      function ms(s, i) {
        var n = vs.get();
        return Object(_vec3_js__WEBPACK_IMPORTED_MODULE_4__["g"])(n.origin, s.origin), Object(_vec3_js__WEBPACK_IMPORTED_MODULE_4__["g"])(n.vector, i), n;
      }

      function ds(s, i, n) {
        var t = s.basis1,
            a = s.basis2,
            o = s.origin,
            c = Object(_vec3_js__WEBPACK_IMPORTED_MODULE_4__["a"])(_views_3d_support_stack_js__WEBPACK_IMPORTED_MODULE_9__["sv3d"].get(), t, i.origin[0]),
            u = Object(_vec3_js__WEBPACK_IMPORTED_MODULE_4__["a"])(_views_3d_support_stack_js__WEBPACK_IMPORTED_MODULE_9__["sv3d"].get(), a, i.origin[1]);
        Object(_vec3_js__WEBPACK_IMPORTED_MODULE_4__["b"])(n.origin, c, u), Object(_vec3_js__WEBPACK_IMPORTED_MODULE_4__["b"])(n.origin, n.origin, o);
        var g = Object(_vec3_js__WEBPACK_IMPORTED_MODULE_4__["a"])(_views_3d_support_stack_js__WEBPACK_IMPORTED_MODULE_9__["sv3d"].get(), t, i.direction[0]),
            b = Object(_vec3_js__WEBPACK_IMPORTED_MODULE_4__["a"])(_views_3d_support_stack_js__WEBPACK_IMPORTED_MODULE_9__["sv3d"].get(), a, i.direction[1]);
        return Object(_vec3_js__WEBPACK_IMPORTED_MODULE_4__["a"])(n.vector, Object(_vec3_js__WEBPACK_IMPORTED_MODULE_4__["b"])(g, g, b), 2), n;
      }

      function hs(s, i, n, t) {
        var a = ls(s);
        Object(_plane_js__WEBPACK_IMPORTED_MODULE_12__["f"])(a, i.direction, i.origin, n), Object(_plane_js__WEBPACK_IMPORTED_MODULE_12__["f"])(Object(_plane_js__WEBPACK_IMPORTED_MODULE_12__["n"])(n), a, i.origin, t);
      }

      var js = {
        plane: Object(_plane_js__WEBPACK_IMPORTED_MODULE_12__["c"])(),
        origin: Object(_vec3f64_js__WEBPACK_IMPORTED_MODULE_3__["f"])(0, 0, 0),
        basis1: Object(_vec3f64_js__WEBPACK_IMPORTED_MODULE_3__["f"])(1, 0, 0),
        basis2: Object(_vec3f64_js__WEBPACK_IMPORTED_MODULE_3__["f"])(0, 1, 0)
      },
          Is = new _core_ObjectStack_js__WEBPACK_IMPORTED_MODULE_7__["ObjectStack"](_plane_js__WEBPACK_IMPORTED_MODULE_12__["c"]),
          vs = new _core_ObjectStack_js__WEBPACK_IMPORTED_MODULE_7__["ObjectStack"](_lineSegment_js__WEBPACK_IMPORTED_MODULE_11__["c"]),
          ws = Object(_vec3f64_js__WEBPACK_IMPORTED_MODULE_3__["c"])(),
          Ps = new _core_ObjectStack_js__WEBPACK_IMPORTED_MODULE_7__["ObjectStack"](function () {
        return {
          origin: null,
          basis1: null,
          basis2: null,
          plane: null
        };
      }),
          Ns = [{
        origin: [-1, -1],
        direction: [1, 0]
      }, {
        origin: [1, -1],
        direction: [0, 1]
      }, {
        origin: [1, 1],
        direction: [-1, 0]
      }, {
        origin: [-1, 1],
        direction: [0, -1]
      }],
          Ms = Object(_mat4f64_js__WEBPACK_IMPORTED_MODULE_8__["a"])(),
          Ts = Object(_mat4f64_js__WEBPACK_IMPORTED_MODULE_8__["a"])();
      var Ss = Object.freeze({
        __proto__: null,
        BoundedPlaneClass: R,
        create: z,
        wrap: G,
        copy: D,
        fromValues: H,
        updateUnboundedPlane: J,
        elevate: K,
        setExtent: Q,
        fromAABoundingRect: W,
        intersectRay: X,
        intersectRayClosestSilhouette: Z,
        closestPointOnSilhouette: $,
        closestPoint: ss,
        projectPoint: is,
        projectPointLocal: ns,
        distance2: ts,
        distance: as,
        distanceToSilhouette: os,
        extrusionContainsPoint: rs,
        axisAt: es,
        altitudeAt: cs,
        setAltitudeAt: us,
        equals: gs,
        transform: bs,
        rotate: fs,
        normal: ls,
        UP: js
      });
      /***/
    },

    /***/
    "EDiM":
    /*!**********************************************************************************!*\
      !*** ./node_modules/@arcgis/core/views/3d/webgl-engine/lib/geometryDataUtils.js ***!
      \**********************************************************************************/

    /*! exports provided: computeAttachmentOriginLines, computeAttachmentOriginPoints, computeAttachmentOriginTriangles, generateDefaultIndexArray, getNewId */

    /***/
    function EDiM(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "computeAttachmentOriginLines", function () {
        return d;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "computeAttachmentOriginPoints", function () {
        return l;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "computeAttachmentOriginTriangles", function () {
        return a;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "generateDefaultIndexArray", function () {
        return u;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "getNewId", function () {
        return x;
      });
      /* harmony import */


      var _chunks_vec3f64_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ../../../../chunks/vec3f64.js */
      "Cy1f");
      /* harmony import */


      var _chunks_vec3_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ../../../../chunks/vec3.js */
      "5DEt");
      /* harmony import */


      var _chunks_triangle_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ../../../../chunks/triangle.js */
      "oSUa");
      /*
      All material copyright ESRI, All Rights Reserved, unless otherwise specified.
      See https://js.arcgis.com/4.18/esri/copyright.txt for details.
      */


      var f = 1,
          c = null;
      var i = new Uint32Array([0]);

      function u(t) {
        if (1 === t) return i;

        if (t > f || null == c) {
          for (; t > f;) {
            f *= 2;
          }

          c = new Uint32Array(f);

          for (var _t16 = 0; _t16 < f; _t16++) {
            c[_t16] = _t16;
          }
        }

        return new Uint32Array(c.buffer, 0, t);
      }

      function a(t, o, f) {
        if (!t) return !1;
        var c = t.strideIdx,
            i = t.offsetIdx,
            u = t.data;
        Object(_chunks_vec3_js__WEBPACK_IMPORTED_MODULE_1__["s"])(f, 0, 0, 0), Object(_chunks_vec3_js__WEBPACK_IMPORTED_MODULE_1__["s"])(p, 0, 0, 0);
        var a = 0,
            l = 0;

        for (var _t17 = 0; _t17 < o.length - 2; _t17 += 3) {
          var _d = o[_t17 + 0] * c + i,
              _h = o[_t17 + 1] * c + i,
              _x = o[_t17 + 2] * c + i;

          Object(_chunks_vec3_js__WEBPACK_IMPORTED_MODULE_1__["s"])(m, u[_d + 0], u[_d + 1], u[_d + 2]), Object(_chunks_vec3_js__WEBPACK_IMPORTED_MODULE_1__["s"])(I, u[_h + 0], u[_h + 1], u[_h + 2]), Object(_chunks_vec3_js__WEBPACK_IMPORTED_MODULE_1__["s"])(g, u[_x + 0], u[_x + 1], u[_x + 2]);
          var w = Object(_chunks_triangle_js__WEBPACK_IMPORTED_MODULE_2__["a"])(m, I, g);
          w ? (Object(_chunks_vec3_js__WEBPACK_IMPORTED_MODULE_1__["b"])(m, m, I), Object(_chunks_vec3_js__WEBPACK_IMPORTED_MODULE_1__["b"])(m, m, g), Object(_chunks_vec3_js__WEBPACK_IMPORTED_MODULE_1__["a"])(m, m, 1 / 3 * w), Object(_chunks_vec3_js__WEBPACK_IMPORTED_MODULE_1__["b"])(f, f, m), a += w) : (Object(_chunks_vec3_js__WEBPACK_IMPORTED_MODULE_1__["b"])(p, p, m), Object(_chunks_vec3_js__WEBPACK_IMPORTED_MODULE_1__["b"])(p, p, I), Object(_chunks_vec3_js__WEBPACK_IMPORTED_MODULE_1__["b"])(p, p, g), l += 3);
        }

        return (0 !== l || 0 !== a) && (0 !== a ? (Object(_chunks_vec3_js__WEBPACK_IMPORTED_MODULE_1__["a"])(f, f, 1 / a), !0) : 0 !== l && (Object(_chunks_vec3_js__WEBPACK_IMPORTED_MODULE_1__["a"])(f, p, 1 / l), !0));
      }

      function l(t, r, o) {
        if (!t || !r) return !1;
        var s = t.strideIdx,
            f = t.offsetIdx,
            c = t.data;
        Object(_chunks_vec3_js__WEBPACK_IMPORTED_MODULE_1__["s"])(o, 0, 0, 0);
        var i = -1,
            u = 0;

        for (var _t18 = 0; _t18 < r.length; _t18++) {
          var n = r[_t18] * s + f;
          i !== n && (o[0] += c[n + 0], o[1] += c[n + 1], o[2] += c[n + 2], u++), i = n;
        }

        return u > 1 && Object(_chunks_vec3_js__WEBPACK_IMPORTED_MODULE_1__["a"])(o, o, 1 / u), u > 0;
      }

      function d(t, s, f, c) {
        if (!t) return !1;
        var i = t.strideIdx,
            u = t.offsetIdx,
            a = t.data;
        Object(_chunks_vec3_js__WEBPACK_IMPORTED_MODULE_1__["s"])(c, 0, 0, 0), Object(_chunks_vec3_js__WEBPACK_IMPORTED_MODULE_1__["s"])(p, 0, 0, 0);
        var l = 0,
            d = 0;
        var h = s ? s.length - 1 : a.length / i - 1,
            x = h + (f ? 2 : 0);

        for (var _t19 = 0; _t19 < x; _t19 += 2) {
          var n = _t19 < h ? _t19 : h,
              _f10 = _t19 < h ? _t19 + 1 : 0,
              _x2 = (s ? s[n] : n) * i + u,
              _g = (s ? s[_f10] : _f10) * i + u;

          m[0] = a[_x2 + 0], m[1] = a[_x2 + 1], m[2] = a[_x2 + 2], I[0] = a[_g + 0], I[1] = a[_g + 1], I[2] = a[_g + 2], Object(_chunks_vec3_js__WEBPACK_IMPORTED_MODULE_1__["a"])(m, Object(_chunks_vec3_js__WEBPACK_IMPORTED_MODULE_1__["b"])(m, m, I), .5);
          var w = Object(_chunks_vec3_js__WEBPACK_IMPORTED_MODULE_1__["w"])(m, I);
          w > 0 ? (Object(_chunks_vec3_js__WEBPACK_IMPORTED_MODULE_1__["b"])(c, c, Object(_chunks_vec3_js__WEBPACK_IMPORTED_MODULE_1__["a"])(m, m, w)), l += w) : (Object(_chunks_vec3_js__WEBPACK_IMPORTED_MODULE_1__["b"])(p, p, m), d++);
        }

        return 0 !== l ? (Object(_chunks_vec3_js__WEBPACK_IMPORTED_MODULE_1__["a"])(c, c, 1 / l), !0) : 0 !== d && (Object(_chunks_vec3_js__WEBPACK_IMPORTED_MODULE_1__["a"])(c, p, 1 / d), !0);
      }

      var h = 0;

      function x() {
        return h++;
      }

      var m = Object(_chunks_vec3f64_js__WEBPACK_IMPORTED_MODULE_0__["c"])(),
          I = Object(_chunks_vec3f64_js__WEBPACK_IMPORTED_MODULE_0__["c"])(),
          g = Object(_chunks_vec3f64_js__WEBPACK_IMPORTED_MODULE_0__["c"])(),
          p = Object(_chunks_vec3f64_js__WEBPACK_IMPORTED_MODULE_0__["c"])();
      /***/
    },

    /***/
    "EVMh":
    /*!*********************************************************************!*\
      !*** ./node_modules/@arcgis/core/views/3d/webgl-engine/lib/Util.js ***!
      \*********************************************************************/

    /*! exports provided: AssertException, VertexAttrConstants, assert, createTranslationMatrix, dec2hex, encodeInt16, encodeNormal, fallbackIfUndefined, fovd2fovx, fovd2fovy, fovx2fovd, fovx2fovy, fovy2fovd, fovy2fovx, getFirstObjectKey, getFirstObjectValue, getMatrixTranslation, hex2rgb, inverseProjectionInfo, isTranslationMatrix, logWithBase, objectEmpty, packFloatRGBA, project, rayBoxTest, rayRay2D, rayTriangle3D, rgb2hex, setMatrixTranslation, setMatrixTranslation3, unpackFloatRGBA, verify */

    /***/
    function EVMh(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "AssertException", function () {
        return e;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "VertexAttrConstants", function () {
        return i;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "assert", function () {
        return f;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "createTranslationMatrix", function () {
        return w;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "dec2hex", function () {
        return g;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "encodeInt16", function () {
        return M;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "encodeNormal", function () {
        return l;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "fallbackIfUndefined", function () {
        return m;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "fovd2fovx", function () {
        return q;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "fovd2fovy", function () {
        return y;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "fovx2fovd", function () {
        return T;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "fovx2fovy", function () {
        return C;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "fovy2fovd", function () {
        return V;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "fovy2fovx", function () {
        return I;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "getFirstObjectKey", function () {
        return A;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "getFirstObjectValue", function () {
        return E;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "getMatrixTranslation", function () {
        return P;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "hex2rgb", function () {
        return p;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "inverseProjectionInfo", function () {
        return z;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "isTranslationMatrix", function () {
        return x;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "logWithBase", function () {
        return U;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "objectEmpty", function () {
        return N;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "packFloatRGBA", function () {
        return B;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "project", function () {
        return k;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "rayBoxTest", function () {
        return d;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "rayRay2D", function () {
        return v;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "rayTriangle3D", function () {
        return S;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "rgb2hex", function () {
        return O;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "setMatrixTranslation", function () {
        return b;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "setMatrixTranslation3", function () {
        return j;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "unpackFloatRGBA", function () {
        return L;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "verify", function () {
        return h;
      });
      /* harmony import */


      var _core_mathUtils_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ../../../../core/mathUtils.js */
      "OKTS");
      /* harmony import */


      var _chunks_vec3f64_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ../../../../chunks/vec3f64.js */
      "Cy1f");
      /* harmony import */


      var _chunks_mat4_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ../../../../chunks/mat4.js */
      "15Hh");
      /* harmony import */


      var _chunks_vec2f64_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ../../../../chunks/vec2f64.js */
      "AvGH");
      /* harmony import */


      var _chunks_vec4f64_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ../../../../chunks/vec4f64.js */
      "D8Ta");
      /* harmony import */


      var _chunks_vec2_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ../../../../chunks/vec2.js */
      "M0lq");
      /* harmony import */


      var _chunks_vec4_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ../../../../chunks/vec4.js */
      "dXfX");
      /*
      All material copyright ESRI, All Rights Reserved, unless otherwise specified.
      See https://js.arcgis.com/4.18/esri/copyright.txt for details.
      */


      var s = Object(_chunks_vec4f64_js__WEBPACK_IMPORTED_MODULE_4__["a"])();

      var e = /*#__PURE__*/function () {
        function e(t) {
          _classCallCheck(this, e);

          this.message = t;
        }

        _createClass(e, [{
          key: "toString",
          value: function toString() {
            return "AssertException: ".concat(this.message);
          }
        }]);

        return e;
      }();

      var i = {
        POSITION: "position",
        NORMAL: "normal",
        UV0: "uv0",
        UVMAPSPACE: "uvMapSpace",
        MEANVERTEXPOSITION: "meanVertexPosition",
        AUXPOS1: "auxpos1",
        AUXPOS2: "auxpos2",
        BOUND1: "bound1",
        BOUND2: "bound2",
        BOUND3: "bound3",
        COLOR: "color",
        SYMBOLCOLOR: "symbolColor",
        SIZE: "size",
        TANGENT: "tangent"
      };

      function f(t, n) {
        if (!t) {
          n = n || "assert";

          var _t20 = new Error(n);

          throw _t20.stack && console.log(_t20.stack), new e(n);
        }
      }

      function h(t, n) {
        t || (n = n || "", console.warn("Verify failed: " + n + "\n" + new Error("verify").stack));
      }

      function M(n) {
        return Object(_core_mathUtils_js__WEBPACK_IMPORTED_MODULE_0__["clamp"])(Math.round(32767 * n), -32767, 32767);
      }

      function l(t, n) {
        var r = Math.abs(t[0]),
            o = Math.abs(t[1]),
            a = 1 / (r + o + Math.abs(t[2])),
            u = r * a,
            c = o * a,
            s = Math.min(t[2] * a, 0);
        n[0] = (t[0] < 0 ? -1 : 1) * (u - s), n[1] = (t[1] < 0 ? -1 : 1) * (c - s);
      }

      function m(t, n) {
        return void 0 === t ? n : t;
      }

      function p(t) {
        return [((t = Math.floor(t)) >> 16 & 255) / 255, (t >> 8 & 255) / 255, (255 & t) / 255];
      }

      function O(n) {
        return "0x" + ((Object(_core_mathUtils_js__WEBPACK_IMPORTED_MODULE_0__["clamp"])(Math.round(255 * n[0]), 0, 255) << 16) + (Object(_core_mathUtils_js__WEBPACK_IMPORTED_MODULE_0__["clamp"])(Math.round(255 * n[1]), 0, 255) << 8) + Object(_core_mathUtils_js__WEBPACK_IMPORTED_MODULE_0__["clamp"])(Math.round(255 * n[2]), 0, 255)).toString(16);
      }

      function g(t) {
        var n = t.toString(16);
        return "00000000".substr(0, 8 - n.length) + n;
      }

      function S(t, r, o, a, u, c, s, e) {
        var i = arguments.length > 8 && arguments[8] !== undefined ? arguments[8] : Object(_chunks_vec3f64_js__WEBPACK_IMPORTED_MODULE_1__["c"])();
        var f = 1e-5,
            h = a[s] - o[c],
            M = a[s + 1] - o[c + 1],
            l = a[s + 2] - o[c + 2],
            m = u[e] - o[c],
            p = u[e + 1] - o[c + 1],
            O = u[e + 2] - o[c + 2],
            g = r[1] * O - p * r[2],
            S = r[2] * m - O * r[0],
            d = r[0] * p - m * r[1],
            v = h * g + M * S + l * d;
        if (v > -f && v < f) return !1;
        var k = 1 / v,
            A = t[0] - o[c],
            E = t[1] - o[c + 1],
            N = t[2] - o[c + 2];
        if (i[1] = k * (A * g + E * S + N * d), i[1] < 0 || i[1] > 1) return !1;
        var U = E * l - M * N,
            b = N * h - l * A,
            j = A * M - h * E;
        return i[2] = k * (r[0] * U + r[1] * b + r[2] * j), !(i[2] < 0 || i[1] + i[2] > 1) && (i[0] = k * (m * U + p * b + O * j), !0);
      }

      function d(t, n, r, o) {
        var a,
            u = (r[0] - t[0]) / n[0],
            c = (o[0] - t[0]) / n[0];
        u > c && (a = u, u = c, c = a);
        var s = (r[1] - t[1]) / n[1],
            e = (o[1] - t[1]) / n[1];
        if (s > e && (a = s, s = e, e = a), u > e || s > c) return !1;
        s > u && (u = s), e < c && (c = e);
        var i = (r[2] - t[2]) / n[2],
            f = (o[2] - t[2]) / n[2];
        return i > f && (a = i, i = f, f = a), !(u > f || i > c) && (f < c && (c = f), !(c < 0));
      }

      function v(t, n, r, a, u) {
        var c = arguments.length > 5 && arguments[5] !== undefined ? arguments[5] : Object(_chunks_vec2f64_js__WEBPACK_IMPORTED_MODULE_3__["a"])();
        var s = (a[u] - r[u]) * (n[0] - t[0]) - (a[0] - r[0]) * (n[u] - t[u]),
            e = (a[0] - r[0]) * (t[u] - r[u]) - (a[u] - r[u]) * (t[0] - r[0]);
        if (0 === s) return !1;
        var i = e / s;
        return c[0] = t[0] + i * (n[0] - t[0]), c[1] = t[u] + i * (n[u] - t[u]), !0;
      }

      function k(t, n, r, o, a) {
        a || (a = t), s[0] = t[0], s[1] = t[1], s[2] = t[2], s[3] = 1, Object(_chunks_vec4_js__WEBPACK_IMPORTED_MODULE_6__["t"])(s, s, n), a.length > 2 && (a[2] = -s[2]), Object(_chunks_vec4_js__WEBPACK_IMPORTED_MODULE_6__["t"])(s, s, r), f(0 !== s[3]), a[0] = s[0] / s[3], a[1] = s[1] / s[3], a[2] = s[2] / s[3], a[0] = (.5 * a[0] + .5) * o[2] + o[0], a[1] = (.5 * a[1] + .5) * o[3] + o[1];
      }

      function A(t) {
        for (var n in t) {
          return n;
        }
      }

      function E(t) {
        return t[A(t)];
      }

      function N(t) {
        for (var n in t) {
          return !1;
        }

        return !0;
      }

      function U(t, n) {
        return Math.log(t) / Math.log(n);
      }

      function b(t, n) {
        t[12] = n[0], t[13] = n[1], t[14] = n[2];
      }

      function j(t, n, r, o) {
        t[12] = n, t[13] = r, t[14] = o;
      }

      function P(t) {
        var r = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : Object(_chunks_vec3f64_js__WEBPACK_IMPORTED_MODULE_1__["c"])();
        return r[0] = t[12], r[1] = t[13], r[2] = t[14], r;
      }

      function w(t, n) {
        return b(t = Object(_chunks_mat4_js__WEBPACK_IMPORTED_MODULE_2__["i"])(t), n), t;
      }

      function x(t) {
        return 1 === t[0] && 0 === t[1] && 0 === t[2] && 0 === t[3] && 0 === t[4] && 1 === t[5] && 0 === t[6] && 0 === t[7] && 0 === t[8] && 0 === t[9] && 1 === t[10] && 0 === t[11] && 1 === t[15];
      }

      function C(t, n, r) {
        return 2 * Math.atan(r * Math.tan(.5 * t) / n);
      }

      function I(t, n, r) {
        return 2 * Math.atan(n * Math.tan(.5 * t) / r);
      }

      function T(t, n, r) {
        return 2 * Math.atan(Math.sqrt(n * n + r * r) * Math.tan(.5 * t) / n);
      }

      function V(t, n, r) {
        return 2 * Math.atan(Math.sqrt(n * n + r * r) * Math.tan(.5 * t) / r);
      }

      function q(t, n, r) {
        return 2 * Math.atan(n * Math.tan(.5 * t) / Math.sqrt(n * n + r * r));
      }

      function y(t, n, r) {
        return 2 * Math.atan(r * Math.tan(.5 * t) / Math.sqrt(n * n + r * r));
      }

      function B(n, r) {
        var o = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 0;
        var a = Object(_core_mathUtils_js__WEBPACK_IMPORTED_MODULE_0__["clamp"])(n, 0, X);

        for (var t = 0; t < 4; t++) {
          r[o + t] = Math.floor(256 * ((u = a * R[t]) - Math.floor(u)));
        }

        var u;
      }

      function L(t) {
        var n = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;
        var r = 0;

        for (var o = 0; o < 4; o++) {
          r += t[n + o] * D[o];
        }

        return r;
      }

      var R = [1, 256, 65536, 16777216],
          D = [1 / 256, 1 / 65536, 1 / 16777216, 1 / 4294967296],
          X = L(new Uint8ClampedArray([255, 255, 255, 255]));

      function z(t, n, r, o, a) {
        var c = t;
        0 === t[11] ? (o[0] = 2 / (n * c[0]), o[1] = 2 / (r * c[5]), o[2] = (1 + c[12]) / c[0], o[3] = (1 + c[13]) / c[5], Object(_chunks_vec2_js__WEBPACK_IMPORTED_MODULE_5__["s"])(a, 0, 1)) : (o[0] = -2 / (n * c[0]), o[1] = -2 / (r * c[5]), o[2] = (1 - c[8]) / c[0], o[3] = (1 - c[9]) / c[5], Object(_chunks_vec2_js__WEBPACK_IMPORTED_MODULE_5__["s"])(a, 1, 0));
      }
      /***/

    },

    /***/
    "F7CJ":
    /*!**************************************************************************************************************!*\
      !*** ./node_modules/@arcgis/core/views/3d/webgl-engine/core/shaderLibrary/attributes/VerticalOffset.glsl.js ***!
      \**************************************************************************************************************/

    /*! exports provided: VerticalOffset, calculateVerticalOffsetFactors */

    /***/
    function F7CJ(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "VerticalOffset", function () {
        return t;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "calculateVerticalOffsetFactors", function () {
        return l;
      });
      /* harmony import */


      var _shaderModules_interfaces_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ../../shaderModules/interfaces.js */
      "OIYib");
      /* harmony import */


      var _util_ScreenSizePerspective_glsl_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ../util/ScreenSizePerspective.glsl.js */
      "L5gG");
      /*
      All material copyright ESRI, All Rights Reserved, unless otherwise specified.
      See https://js.arcgis.com/4.18/esri/copyright.txt for details.
      */


      function t(t, l) {
        var c = t.vertex.code;
        l.verticalOffsetEnabled ? (t.vertex.uniforms.add("verticalOffset", "vec4"), l.screenSizePerspectiveEnabled && (t.include(_util_ScreenSizePerspective_glsl_js__WEBPACK_IMPORTED_MODULE_1__["ScreenSizePerspective"]), t.vertex.uniforms.add("screenSizePerspectiveAlignment", "vec4")), c.add(_shaderModules_interfaces_js__WEBPACK_IMPORTED_MODULE_0__["glsl"](_templateObject59 || (_templateObject59 = _taggedTemplateLiteral(["\n    vec3 calculateVerticalOffset(vec3 worldPos, vec3 localOrigin) {\n      float viewDistance = length((view * vec4(worldPos, 1.0)).xyz);\n      ", "\n      ", "\n      // Screen sized offset in world space, used for example for line callouts\n      float worldOffset = clamp(verticalOffsetScreenHeight * verticalOffset.y * viewDistance, verticalOffset.z, verticalOffset.w);\n      return worldNormal * worldOffset;\n    }\n\n    vec3 addVerticalOffset(vec3 worldPos, vec3 localOrigin) {\n      return worldPos + calculateVerticalOffset(worldPos, localOrigin);\n    }\n    "])), 1 === l.viewingMode ? _shaderModules_interfaces_js__WEBPACK_IMPORTED_MODULE_0__["glsl"](_templateObject60 || (_templateObject60 = _taggedTemplateLiteral(["vec3 worldNormal = normalize(worldPos + localOrigin);"]))) : _shaderModules_interfaces_js__WEBPACK_IMPORTED_MODULE_0__["glsl"](_templateObject61 || (_templateObject61 = _taggedTemplateLiteral(["vec3 worldNormal = vec3(0.0, 0.0, 1.0);"]))), l.screenSizePerspectiveEnabled ? _shaderModules_interfaces_js__WEBPACK_IMPORTED_MODULE_0__["glsl"](_templateObject62 || (_templateObject62 = _taggedTemplateLiteral(["\n          float cosAngle = dot(worldNormal, normalize(worldPos - camPos));\n          float verticalOffsetScreenHeight = screenSizePerspectiveScaleFloat(verticalOffset.x, abs(cosAngle), viewDistance, screenSizePerspectiveAlignment);"]))) : _shaderModules_interfaces_js__WEBPACK_IMPORTED_MODULE_0__["glsl"](_templateObject63 || (_templateObject63 = _taggedTemplateLiteral(["\n          float verticalOffsetScreenHeight = verticalOffset.x;"])))))) : c.add(_shaderModules_interfaces_js__WEBPACK_IMPORTED_MODULE_0__["glsl"](_templateObject64 || (_templateObject64 = _taggedTemplateLiteral(["\n    vec3 addVerticalOffset(vec3 worldPos, vec3 localOrigin) { return worldPos; }\n    "]))));
      }

      function l(e, r, t) {
        var l = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : c;
        return l.screenLength = e.screenLength, l.perDistance = Math.tan(.5 * r) / (.5 * t), l.minWorldLength = e.minWorldLength, l.maxWorldLength = e.maxWorldLength, l;
      }

      !function (e) {
        e.bindUniforms = function (e, r, t) {
          if (!r.verticalOffset) return;
          var c = l(r.verticalOffset, t.camera.fovY, t.camera.fullViewport[3]),
              i = t.camera.pixelRatio || 1;
          e.setUniform4f("verticalOffset", c.screenLength * i, c.perDistance, c.minWorldLength, c.maxWorldLength);
        };
      }(t || (t = {}));
      var c = {
        screenLength: 0,
        perDistance: 0,
        minWorldLength: 0,
        maxWorldLength: 0
      };
      /***/
    },

    /***/
    "F8o4":
    /*!*******************************************************************************************!*\
      !*** ./node_modules/@arcgis/core/views/3d/webgl-engine/core/shaderLibrary/Offset.glsl.js ***!
      \*******************************************************************************************/

    /*! exports provided: Offset */

    /***/
    function F8o4(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "Offset", function () {
        return e;
      });
      /* harmony import */


      var _shaderModules_interfaces_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ../shaderModules/interfaces.js */
      "OIYib");
      /*
      All material copyright ESRI, All Rights Reserved, unless otherwise specified.
      See https://js.arcgis.com/4.18/esri/copyright.txt for details.
      */


      function e(e) {
        e.vertex.code.add(_shaderModules_interfaces_js__WEBPACK_IMPORTED_MODULE_0__["glsl"](_templateObject65 || (_templateObject65 = _taggedTemplateLiteral(["\n    vec4 offsetBackfacingClipPosition(vec4 posClip, vec3 posWorld, vec3 normalWorld, vec3 camPosWorld) {\n      vec3 camToVert = posWorld - camPosWorld;\n\n      bool isBackface = dot(camToVert, normalWorld) > 0.0;\n      if (isBackface) {\n        posClip.z += 0.0000003 * posClip.w;\n      }\n      return posClip;\n    }\n  "]))));
      }
      /***/

    },

    /***/
    "Gbm8":
    /*!*****************************************************!*\
      !*** ./node_modules/@arcgis/core/chunks/clipRay.js ***!
      \*****************************************************/

    /*! exports provided: a, b, c, d, e, f, g, h, i, j, w */

    /***/
    function Gbm8(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "a", function () {
        return b;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "b", function () {
        return u;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "c", function () {
        return d;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "d", function () {
        return l;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "e", function () {
        return m;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "f", function () {
        return g;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "g", function () {
        return j;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "h", function () {
        return y;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "i", function () {
        return p;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "j", function () {
        return A;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "w", function () {
        return f;
      });
      /* harmony import */


      var _vec3_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ./vec3.js */
      "5DEt");
      /* harmony import */


      var _core_ObjectStack_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ../core/ObjectStack.js */
      "IRkY");
      /* harmony import */


      var _views_3d_support_stack_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ../views/3d/support/stack.js */
      "8JEK");
      /* harmony import */


      var _ray_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./ray.js */
      "QFRQ");
      /*
      All material copyright ESRI, All Rights Reserved, unless otherwise specified.
      See https://js.arcgis.com/4.18/esri/copyright.txt for details.
      */


      function u(r) {
        return r ? {
          ray: Object(_ray_js__WEBPACK_IMPORTED_MODULE_3__["c"])(r.ray),
          c0: r.c0,
          c1: r.c1
        } : {
          ray: Object(_ray_js__WEBPACK_IMPORTED_MODULE_3__["c"])(),
          c0: 0,
          c1: Number.MAX_VALUE
        };
      }

      function f(r, t, c) {
        var n = _.get();

        return n.ray = r, n.c0 = t, n.c1 = c, n;
      }

      function m(r) {
        var t = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : u();
        return y(r.ray, r.c0, r.c1, t);
      }

      function y(r, t, c) {
        var n = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : u();
        return Object(_ray_js__WEBPACK_IMPORTED_MODULE_3__["b"])(r, n.ray), n.c0 = t, n.c1 = c, n;
      }

      function g(r) {
        var t = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : u();
        return Object(_ray_js__WEBPACK_IMPORTED_MODULE_3__["b"])(r, t.ray), t.c0 = 0, t.c1 = Number.MAX_VALUE, t;
      }

      function p(t) {
        var c = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : u();
        return b(t, Object(_vec3_js__WEBPACK_IMPORTED_MODULE_0__["n"])(_views_3d_support_stack_js__WEBPACK_IMPORTED_MODULE_2__["sv3d"].get(), t.vector), c);
      }

      function b(r, c) {
        var n = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : u();
        var e = Object(_vec3_js__WEBPACK_IMPORTED_MODULE_0__["l"])(r.vector);
        return Object(_ray_js__WEBPACK_IMPORTED_MODULE_3__["e"])(r.origin, c, n.ray), n.c0 = 0, n.c1 = e, n;
      }

      function j(r, t) {
        return A(r, r.c0, t);
      }

      function l(r, t) {
        return A(r, r.c1, t);
      }

      function A(r, t, e) {
        return Object(_vec3_js__WEBPACK_IMPORTED_MODULE_0__["b"])(e, r.ray.origin, Object(_vec3_js__WEBPACK_IMPORTED_MODULE_0__["a"])(e, r.ray.direction, t));
      }

      var _ = new _core_ObjectStack_js__WEBPACK_IMPORTED_MODULE_1__["ObjectStack"](function () {
        return {
          c0: 0,
          c1: 0,
          ray: null
        };
      });

      var d = Object.freeze({
        __proto__: null,
        create: u,
        wrap: f,
        copy: m,
        fromValues: y,
        fromRay: g,
        fromLineSegment: p,
        fromLineSegmentAndDirection: b,
        getStart: j,
        getEnd: l,
        getAt: A
      });
      /***/
    },

    /***/
    "Gze9":
    /*!**********************************************************************!*\
      !*** ./node_modules/@arcgis/core/views/3d/glTF/internal/Resource.js ***!
      \**********************************************************************/

    /*! exports provided: Resource */

    /***/
    function Gze9(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "Resource", function () {
        return k;
      });
      /* harmony import */


      var _core_compilerUtils_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ../../../../core/compilerUtils.js */
      "bJda");
      /* harmony import */


      var _core_urlUtils_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ../../../../core/urlUtils.js */
      "4EHJ");
      /* harmony import */


      var _core_promiseUtils_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ../../../../core/promiseUtils.js */
      "9MzC");
      /* harmony import */


      var _core_Version_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ../../../../core/Version.js */
      "VJrH");
      /* harmony import */


      var _chunks_mat4_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ../../../../chunks/mat4.js */
      "15Hh");
      /* harmony import */


      var _chunks_mat4f64_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ../../../../chunks/mat4f64.js */
      "r+FG");
      /* harmony import */


      var _chunks_quatf64_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ../../../../chunks/quatf64.js */
      "sTkM");
      /* harmony import */


      var _support_buffer_BufferView_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! ../../support/buffer/BufferView.js */
      "VeZB");
      /* harmony import */


      var _chunks_quat_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! ../../../../chunks/quat.js */
      "BPBZ");
      /* harmony import */


      var _BinaryStreamReader_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! ./BinaryStreamReader.js */
      "3RTz");
      /* harmony import */


      var _fillDefaults_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
      /*! ./fillDefaults.js */
      "cqrX");
      /* harmony import */


      var _pathUtils_js__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
      /*! ./pathUtils.js */
      "aBUN");
      /* harmony import */


      var _chunks_scalar_js__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
      /*! ../../../../chunks/scalar.js */
      "fPvx");
      /*
      All material copyright ESRI, All Rights Reserved, unless otherwise specified.
      See https://js.arcgis.com/4.18/esri/copyright.txt for details.
      */


      var M = 1179937895,
          G = 1313821514,
          F = 5130562;

      var k = /*#__PURE__*/function () {
        function k(e, t, r, n, o) {
          _classCallCheck(this, k);

          this.context = e, this.errorContext = t, this.uri = r, this.json = n, this.glbBuffer = o, this.bufferCache = new Map(), this.textureCache = new Map(), this.materialCache = new Map(), this.nodeParentMap = new Map(), this.nodeTransformCache = new Map(), this.baseUri = Object(_pathUtils_js__WEBPACK_IMPORTED_MODULE_11__["splitURI"])(this.uri).dirPart, this.checkVersionSupported(), this.checkRequiredExtensionsSupported(), t.errorUnsupportedIf(null == n.scenes, "Scenes must be defined."), t.errorUnsupportedIf(null == n.meshes, "Meshes must be defined"), t.errorUnsupportedIf(null == n.nodes, "Nodes must be defined."), this.computeNodeParents();
        }

        _createClass(k, [{
          key: "getBuffer",
          value: function () {
            var _getBuffer = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(e, t) {
              var r, n, o, s;
              return regeneratorRuntime.wrap(function _callee$(_context) {
                while (1) {
                  switch (_context.prev = _context.next) {
                    case 0:
                      r = this.json.buffers[e], n = this.errorContext;

                      if (!(null == r.uri)) {
                        _context.next = 3;
                        break;
                      }

                      return _context.abrupt("return", (n.assert(null != this.glbBuffer, "GLB buffer not present"), this.glbBuffer));

                    case 3:
                      o = this.bufferCache.get(e);

                      if (o) {
                        _context.next = 9;
                        break;
                      }

                      _context.next = 7;
                      return this.context.loadBinary(this.resolveUri(r.uri), t);

                    case 7:
                      s = _context.sent;
                      o = new Uint8Array(s), this.bufferCache.set(e, o), n.assert(o.byteLength === r.byteLength, "Buffer byte lengths should match.");

                    case 9:
                      return _context.abrupt("return", o);

                    case 10:
                    case "end":
                      return _context.stop();
                  }
                }
              }, _callee, this);
            }));

            function getBuffer(_x3, _x4) {
              return _getBuffer.apply(this, arguments);
            }

            return getBuffer;
          }()
        }, {
          key: "getAccessor",
          value: function () {
            var _getAccessor = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee2(e, t) {
              var r, n, o, s, a, i, u, c;
              return regeneratorRuntime.wrap(function _callee2$(_context2) {
                while (1) {
                  switch (_context2.prev = _context2.next) {
                    case 0:
                      r = this.json.accessors[e], n = this.errorContext;
                      n.errorUnsupportedIf(null == r.bufferView, "Some accessor does not specify a bufferView."), n.errorUnsupportedIf(r.type in ["MAT2", "MAT3", "MAT4"], "AttributeType ".concat(r.type, " is not supported"));
                      o = this.json.bufferViews[r.bufferView];
                      _context2.next = 5;
                      return this.getBuffer(o.buffer, t);

                    case 5:
                      s = _context2.sent;
                      a = X[r.type];
                      i = q[r.componentType];
                      u = a * i;
                      c = o.byteStride || u;
                      return _context2.abrupt("return", {
                        raw: s.buffer,
                        byteStride: c,
                        byteOffset: s.byteOffset + (o.byteOffset || 0) + (r.byteOffset || 0),
                        entryCount: r.count,
                        isDenselyPacked: c === u,
                        componentCount: a,
                        componentByteSize: i,
                        componentType: r.componentType,
                        min: r.min,
                        max: r.max,
                        normalized: !!r.normalized
                      });

                    case 11:
                    case "end":
                      return _context2.stop();
                  }
                }
              }, _callee2, this);
            }));

            function getAccessor(_x5, _x6) {
              return _getAccessor.apply(this, arguments);
            }

            return getAccessor;
          }()
        }, {
          key: "getIndexData",
          value: function () {
            var _getIndexData = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee3(e, t) {
              var r;
              return regeneratorRuntime.wrap(function _callee3$(_context3) {
                while (1) {
                  switch (_context3.prev = _context3.next) {
                    case 0:
                      if (!(null == e.indices)) {
                        _context3.next = 2;
                        break;
                      }

                      return _context3.abrupt("return", null);

                    case 2:
                      _context3.next = 4;
                      return this.getAccessor(e.indices, t);

                    case 4:
                      r = _context3.sent;

                      if (!r.isDenselyPacked) {
                        _context3.next = 14;
                        break;
                      }

                      _context3.t0 = r.componentType;
                      _context3.next = _context3.t0 === 5121 ? 9 : _context3.t0 === 5123 ? 10 : _context3.t0 === 5125 ? 11 : 12;
                      break;

                    case 9:
                      return _context3.abrupt("return", new Uint8Array(r.raw, r.byteOffset, r.entryCount));

                    case 10:
                      return _context3.abrupt("return", new Uint16Array(r.raw, r.byteOffset, r.entryCount));

                    case 11:
                      return _context3.abrupt("return", new Uint32Array(r.raw, r.byteOffset, r.entryCount));

                    case 12:
                      _context3.next = 20;
                      break;

                    case 14:
                      _context3.t1 = r.componentType;
                      _context3.next = _context3.t1 === 5121 ? 17 : _context3.t1 === 5123 ? 18 : _context3.t1 === 5125 ? 19 : 20;
                      break;

                    case 17:
                      return _context3.abrupt("return", Object(_chunks_scalar_js__WEBPACK_IMPORTED_MODULE_12__["m"])(this.wrapAccessor(_support_buffer_BufferView_js__WEBPACK_IMPORTED_MODULE_7__["BufferViewUint8"], r)));

                    case 18:
                      return _context3.abrupt("return", Object(_chunks_scalar_js__WEBPACK_IMPORTED_MODULE_12__["m"])(this.wrapAccessor(_support_buffer_BufferView_js__WEBPACK_IMPORTED_MODULE_7__["BufferViewUint16"], r)));

                    case 19:
                      return _context3.abrupt("return", Object(_chunks_scalar_js__WEBPACK_IMPORTED_MODULE_12__["m"])(this.wrapAccessor(_support_buffer_BufferView_js__WEBPACK_IMPORTED_MODULE_7__["BufferViewUint32"], r)));

                    case 20:
                    case "end":
                      return _context3.stop();
                  }
                }
              }, _callee3, this);
            }));

            function getIndexData(_x7, _x8) {
              return _getIndexData.apply(this, arguments);
            }

            return getIndexData;
          }()
        }, {
          key: "getPositionData",
          value: function () {
            var _getPositionData = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee4(e, t) {
              var r, n;
              return regeneratorRuntime.wrap(function _callee4$(_context4) {
                while (1) {
                  switch (_context4.prev = _context4.next) {
                    case 0:
                      r = this.errorContext;
                      r.errorUnsupportedIf(null == e.attributes.POSITION, "No POSITION vertex data found.");
                      _context4.next = 4;
                      return this.getAccessor(e.attributes.POSITION, t);

                    case 4:
                      n = _context4.sent;
                      return _context4.abrupt("return", (r.errorUnsupportedIf(5126 !== n.componentType, "Expected type FLOAT for POSITION vertex attribute, but found " + z[n.componentType]), r.errorUnsupportedIf(3 !== n.componentCount, "POSITION vertex attribute must have 3 components, but found " + n.componentCount.toFixed()), this.wrapAccessor(_support_buffer_BufferView_js__WEBPACK_IMPORTED_MODULE_7__["BufferViewVec3f"], n)));

                    case 6:
                    case "end":
                      return _context4.stop();
                  }
                }
              }, _callee4, this);
            }));

            function getPositionData(_x9, _x10) {
              return _getPositionData.apply(this, arguments);
            }

            return getPositionData;
          }()
        }, {
          key: "getNormalData",
          value: function () {
            var _getNormalData = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee5(e, t) {
              var r, n;
              return regeneratorRuntime.wrap(function _callee5$(_context5) {
                while (1) {
                  switch (_context5.prev = _context5.next) {
                    case 0:
                      r = this.errorContext;
                      r.assert(null != e.attributes.NORMAL, "No NORMAL vertex data found.");
                      _context5.next = 4;
                      return this.getAccessor(e.attributes.NORMAL, t);

                    case 4:
                      n = _context5.sent;
                      return _context5.abrupt("return", (r.errorUnsupportedIf(5126 !== n.componentType, "Expected type FLOAT for NORMAL vertex attribute, but found " + z[n.componentType]), r.errorUnsupportedIf(3 !== n.componentCount, "NORMAL vertex attribute must have 3 components, but found " + n.componentCount.toFixed()), this.wrapAccessor(_support_buffer_BufferView_js__WEBPACK_IMPORTED_MODULE_7__["BufferViewVec3f"], n)));

                    case 6:
                    case "end":
                      return _context5.stop();
                  }
                }
              }, _callee5, this);
            }));

            function getNormalData(_x11, _x12) {
              return _getNormalData.apply(this, arguments);
            }

            return getNormalData;
          }()
        }, {
          key: "getTangentData",
          value: function () {
            var _getTangentData = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee6(e, t) {
              var r, n;
              return regeneratorRuntime.wrap(function _callee6$(_context6) {
                while (1) {
                  switch (_context6.prev = _context6.next) {
                    case 0:
                      r = this.errorContext;
                      r.assert(null != e.attributes.TANGENT, "No TANGENT vertex data found.");
                      _context6.next = 4;
                      return this.getAccessor(e.attributes.TANGENT, t);

                    case 4:
                      n = _context6.sent;
                      return _context6.abrupt("return", (r.errorUnsupportedIf(5126 !== n.componentType, "Expected type FLOAT for TANGENT vertex attribute, but found " + z[n.componentType]), r.errorUnsupportedIf(4 !== n.componentCount, "TANGENT vertex attribute must have 4 components, but found " + n.componentCount.toFixed()), new _support_buffer_BufferView_js__WEBPACK_IMPORTED_MODULE_7__["BufferViewVec4f"](n.raw, n.byteOffset, n.byteStride, n.byteOffset + n.byteStride * n.entryCount)));

                    case 6:
                    case "end":
                      return _context6.stop();
                  }
                }
              }, _callee6, this);
            }));

            function getTangentData(_x13, _x14) {
              return _getTangentData.apply(this, arguments);
            }

            return getTangentData;
          }()
        }, {
          key: "getTextureCoordinates",
          value: function () {
            var _getTextureCoordinates = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee7(t, r) {
              var n, o;
              return regeneratorRuntime.wrap(function _callee7$(_context7) {
                while (1) {
                  switch (_context7.prev = _context7.next) {
                    case 0:
                      n = this.errorContext;
                      n.assert(null != t.attributes.TEXCOORD_0, "No TEXCOORD_0 vertex data found.");
                      _context7.next = 4;
                      return this.getAccessor(t.attributes.TEXCOORD_0, r);

                    case 4:
                      o = _context7.sent;
                      return _context7.abrupt("return", (n.errorUnsupportedIf(2 !== o.componentCount, "TEXCOORD_0 vertex attribute must have 2 components, but found " + o.componentCount.toFixed()), 5126 === o.componentType ? this.wrapAccessor(_support_buffer_BufferView_js__WEBPACK_IMPORTED_MODULE_7__["BufferViewVec2f"], o) : (n.errorUnsupportedIf(!o.normalized, "Integer component types are only supported for a normalized accessor for TEXCOORD_0."), function (t) {
                        switch (t.componentType) {
                          case 5120:
                            return new _support_buffer_BufferView_js__WEBPACK_IMPORTED_MODULE_7__["BufferViewVec2i8"](t.raw, t.byteOffset, t.byteStride, t.byteOffset + t.byteStride * t.entryCount);

                          case 5121:
                            return new _support_buffer_BufferView_js__WEBPACK_IMPORTED_MODULE_7__["BufferViewVec2u8"](t.raw, t.byteOffset, t.byteStride, t.byteOffset + t.byteStride * t.entryCount);

                          case 5122:
                            return new _support_buffer_BufferView_js__WEBPACK_IMPORTED_MODULE_7__["BufferViewVec2i16"](t.raw, t.byteOffset, t.byteStride, t.byteOffset + t.byteStride * t.entryCount);

                          case 5123:
                            return new _support_buffer_BufferView_js__WEBPACK_IMPORTED_MODULE_7__["BufferViewVec2u16"](t.raw, t.byteOffset, t.byteStride, t.byteOffset + t.byteStride * t.entryCount);

                          case 5125:
                            return new _support_buffer_BufferView_js__WEBPACK_IMPORTED_MODULE_7__["BufferViewVec2u32"](t.raw, t.byteOffset, t.byteStride, t.byteOffset + t.byteStride * t.entryCount);

                          case 5126:
                            return new _support_buffer_BufferView_js__WEBPACK_IMPORTED_MODULE_7__["BufferViewVec2f"](t.raw, t.byteOffset, t.byteStride, t.byteOffset + t.byteStride * t.entryCount);

                          default:
                            return void Object(_core_compilerUtils_js__WEBPACK_IMPORTED_MODULE_0__["neverReached"])(t.componentType);
                        }
                      }(o))));

                    case 6:
                    case "end":
                      return _context7.stop();
                  }
                }
              }, _callee7, this);
            }));

            function getTextureCoordinates(_x15, _x16) {
              return _getTextureCoordinates.apply(this, arguments);
            }

            return getTextureCoordinates;
          }()
        }, {
          key: "getVertexColors",
          value: function () {
            var _getVertexColors = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee8(e, t) {
              var r, n;
              return regeneratorRuntime.wrap(function _callee8$(_context8) {
                while (1) {
                  switch (_context8.prev = _context8.next) {
                    case 0:
                      r = this.errorContext;
                      r.assert(null != e.attributes.COLOR_0, "No COLOR_0 vertex data found.");
                      _context8.next = 4;
                      return this.getAccessor(e.attributes.COLOR_0, t);

                    case 4:
                      n = _context8.sent;

                      if (!(r.errorUnsupportedIf(4 !== n.componentCount && 3 !== n.componentCount, "COLOR_0 attribute must have 3 or 4 components, but found " + n.componentCount.toFixed()), 4 === n.componentCount)) {
                        _context8.next = 14;
                        break;
                      }

                      if (!(5126 === n.componentType)) {
                        _context8.next = 8;
                        break;
                      }

                      return _context8.abrupt("return", this.wrapAccessor(_support_buffer_BufferView_js__WEBPACK_IMPORTED_MODULE_7__["BufferViewVec4f"], n));

                    case 8:
                      if (!(5121 === n.componentType)) {
                        _context8.next = 10;
                        break;
                      }

                      return _context8.abrupt("return", this.wrapAccessor(_support_buffer_BufferView_js__WEBPACK_IMPORTED_MODULE_7__["BufferViewVec4u8"], n));

                    case 10:
                      if (!(5123 === n.componentType)) {
                        _context8.next = 12;
                        break;
                      }

                      return _context8.abrupt("return", this.wrapAccessor(_support_buffer_BufferView_js__WEBPACK_IMPORTED_MODULE_7__["BufferViewVec4u16"], n));

                    case 12:
                      _context8.next = 21;
                      break;

                    case 14:
                      if (!(3 === n.componentCount)) {
                        _context8.next = 21;
                        break;
                      }

                      if (!(5126 === n.componentType)) {
                        _context8.next = 17;
                        break;
                      }

                      return _context8.abrupt("return", this.wrapAccessor(_support_buffer_BufferView_js__WEBPACK_IMPORTED_MODULE_7__["BufferViewVec3f"], n));

                    case 17:
                      if (!(5121 === n.componentType)) {
                        _context8.next = 19;
                        break;
                      }

                      return _context8.abrupt("return", this.wrapAccessor(_support_buffer_BufferView_js__WEBPACK_IMPORTED_MODULE_7__["BufferViewVec3u8"], n));

                    case 19:
                      if (!(5123 === n.componentType)) {
                        _context8.next = 21;
                        break;
                      }

                      return _context8.abrupt("return", this.wrapAccessor(_support_buffer_BufferView_js__WEBPACK_IMPORTED_MODULE_7__["BufferViewVec3u16"], n));

                    case 21:
                      r.errorUnsupported("Unsupported component type for COLOR_0 attribute: " + z[n.componentType]);

                    case 22:
                    case "end":
                      return _context8.stop();
                  }
                }
              }, _callee8, this);
            }));

            function getVertexColors(_x17, _x18) {
              return _getVertexColors.apply(this, arguments);
            }

            return getVertexColors;
          }()
        }, {
          key: "hasPositions",
          value: function hasPositions(e) {
            return void 0 !== e.attributes.POSITION;
          }
        }, {
          key: "hasNormals",
          value: function hasNormals(e) {
            return void 0 !== e.attributes.NORMAL;
          }
        }, {
          key: "hasVertexColors",
          value: function hasVertexColors(e) {
            return void 0 !== e.attributes.COLOR_0;
          }
        }, {
          key: "hasTextureCoordinates",
          value: function hasTextureCoordinates(e) {
            return void 0 !== e.attributes.TEXCOORD_0;
          }
        }, {
          key: "hasTangents",
          value: function hasTangents(e) {
            return void 0 !== e.attributes.TANGENT;
          }
        }, {
          key: "getMaterial",
          value: function () {
            var _getMaterial = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee9(e, t) {
              var r, n, o, s, a, i, u, c, p, d, f;
              return regeneratorRuntime.wrap(function _callee9$(_context9) {
                while (1) {
                  switch (_context9.prev = _context9.next) {
                    case 0:
                      r = this.errorContext;
                      n = this.materialCache.get(e.material);

                      if (n) {
                        _context9.next = 48;
                        break;
                      }

                      o = null != e.material ? Object(_fillDefaults_js__WEBPACK_IMPORTED_MODULE_10__["material"])(this.json.materials[e.material]) : Object(_fillDefaults_js__WEBPACK_IMPORTED_MODULE_10__["material"])(), s = o.pbrMetallicRoughness, a = this.hasVertexColors(e);
                      _context9.t0 = s.baseColorTexture;

                      if (!_context9.t0) {
                        _context9.next = 10;
                        break;
                      }

                      r.errorUnsupportedIf(0 !== (s.baseColorTexture.texCoord || 0), "Only TEXCOORD with index 0 is supported.");
                      _context9.next = 9;
                      return this.getTexture(s.baseColorTexture.index, t);

                    case 9:
                      i = _context9.sent;

                    case 10:
                      _context9.t1 = o.normalTexture;

                      if (!_context9.t1) {
                        _context9.next = 19;
                        break;
                      }

                      if (!(0 !== (o.normalTexture.texCoord || 0))) {
                        _context9.next = 16;
                        break;
                      }

                      r.warnUnsupported("Only TEXCOORD with index 0 is supported for the normal map texture.");
                      _context9.next = 19;
                      break;

                    case 16:
                      _context9.next = 18;
                      return this.getTexture(o.normalTexture.index, t);

                    case 18:
                      u = _context9.sent;

                    case 19:
                      _context9.t2 = o.occlusionTexture;

                      if (!_context9.t2) {
                        _context9.next = 28;
                        break;
                      }

                      if (!(0 !== (o.occlusionTexture.texCoord || 0))) {
                        _context9.next = 25;
                        break;
                      }

                      r.warnUnsupported("Only TEXCOORD with index 0 is supported for the occlusion texture.");
                      _context9.next = 28;
                      break;

                    case 25:
                      _context9.next = 27;
                      return this.getTexture(o.occlusionTexture.index, t);

                    case 27:
                      c = _context9.sent;

                    case 28:
                      _context9.t3 = o.emissiveTexture;

                      if (!_context9.t3) {
                        _context9.next = 37;
                        break;
                      }

                      if (!(0 !== (o.emissiveTexture.texCoord || 0))) {
                        _context9.next = 34;
                        break;
                      }

                      r.warnUnsupported("Only TEXCOORD with index 0 is supported for the emissive texture.");
                      _context9.next = 37;
                      break;

                    case 34:
                      _context9.next = 36;
                      return this.getTexture(o.emissiveTexture.index, t);

                    case 36:
                      p = _context9.sent;

                    case 37:
                      _context9.t4 = s.metallicRoughnessTexture;

                      if (!_context9.t4) {
                        _context9.next = 46;
                        break;
                      }

                      if (!(0 !== (s.metallicRoughnessTexture.texCoord || 0))) {
                        _context9.next = 43;
                        break;
                      }

                      r.warnUnsupported("Only TEXCOORD with index 0 is supported for the metallicRoughness texture.");
                      _context9.next = 46;
                      break;

                    case 43:
                      _context9.next = 45;
                      return this.getTexture(s.metallicRoughnessTexture.index, t);

                    case 45:
                      d = _context9.sent;

                    case 46:
                      f = null != e.material ? e.material : -1;
                      n = {
                        alphaMode: o.alphaMode,
                        alphaCutoff: o.alphaCutoff,
                        color: s.baseColorFactor,
                        doubleSided: !!o.doubleSided,
                        colorTexture: i,
                        normalTexture: u,
                        name: o.name,
                        id: f,
                        occlusionTexture: c,
                        emissiveTexture: p,
                        emissiveFactor: o.emissiveFactor,
                        metallicFactor: s.metallicFactor,
                        roughnessFactor: s.roughnessFactor,
                        metallicRoughnessTexture: d,
                        vertexColors: a,
                        ESRI_externalColorMixMode: o.extras.ESRI_externalColorMixMode
                      };

                    case 48:
                      return _context9.abrupt("return", n);

                    case 49:
                    case "end":
                      return _context9.stop();
                  }
                }
              }, _callee9, this);
            }));

            function getMaterial(_x19, _x20) {
              return _getMaterial.apply(this, arguments);
            }

            return getMaterial;
          }()
        }, {
          key: "getTexture",
          value: function () {
            var _getTexture = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee11(e, t) {
              var r, n, o, a, i, _n5, _e13, _o5;

              return regeneratorRuntime.wrap(function _callee11$(_context11) {
                while (1) {
                  switch (_context11.prev = _context11.next) {
                    case 0:
                      r = this.errorContext, n = this.json.textures[e], o = Object(_fillDefaults_js__WEBPACK_IMPORTED_MODULE_10__["textureSampler"])(null != n.sampler ? this.json.samplers[n.sampler] : {});
                      r.errorUnsupportedIf(null == n.source, "Source is expected to be defined for a texture.");
                      a = this.json.images[n.source];
                      i = this.textureCache.get(e);

                      if (i) {
                        _context11.next = 21;
                        break;
                      }

                      if (!a.uri) {
                        _context11.next = 11;
                        break;
                      }

                      _context11.next = 8;
                      return this.context.loadImage(this.resolveUri(a.uri), t);

                    case 8:
                      _n5 = _context11.sent;
                      _context11.next = 20;
                      break;

                    case 11:
                      r.errorUnsupportedIf(null == a.bufferView, "Image bufferView must be defined."), r.errorUnsupportedIf(null == a.mimeType, "Image mimeType must be defined.");
                      _e13 = this.json.bufferViews[a.bufferView];
                      _context11.next = 15;
                      return this.getBuffer(_e13.buffer, t);

                    case 15:
                      _o5 = _context11.sent;
                      r.errorUnsupportedIf(null != _e13.byteStride, "byteStride not supported for image buffer");
                      _context11.next = 19;
                      return function () {
                        var _ref3 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee10(e, t) {
                          return regeneratorRuntime.wrap(function _callee10$(_context10) {
                            while (1) {
                              switch (_context10.prev = _context10.next) {
                                case 0:
                                  return _context10.abrupt("return", Object(_core_promiseUtils_js__WEBPACK_IMPORTED_MODULE_2__["create"])(function (r, n) {
                                    var o = new Blob([e], {
                                      type: t
                                    }),
                                        s = URL.createObjectURL(o),
                                        a = new Image();
                                    a.addEventListener("load", function () {
                                      URL.revokeObjectURL(s), "decode" in a ? a.decode().then(function () {
                                        return r(a);
                                      }, function () {
                                        return r(a);
                                      }) : r(a);
                                    }), a.addEventListener("error", function (e) {
                                      URL.revokeObjectURL(s), n(e);
                                    }), a.src = s;
                                  }));

                                case 1:
                                case "end":
                                  return _context10.stop();
                              }
                            }
                          }, _callee10);
                        }));

                        return function (_x23, _x24) {
                          return _ref3.apply(this, arguments);
                        };
                      }()(new Uint8Array(_o5.buffer, _o5.byteOffset + (_e13.byteOffset || 0), _e13.byteLength), a.mimeType);

                    case 19:
                      _n5 = _context11.sent;

                    case 20:
                      i = {
                        data: _n5,
                        wrapS: o.wrapS,
                        wrapT: o.wrapT,
                        minFilter: o.minFilter,
                        name: a.name,
                        id: e
                      }, this.textureCache.set(e, i);

                    case 21:
                      return _context11.abrupt("return", i);

                    case 22:
                    case "end":
                      return _context11.stop();
                  }
                }
              }, _callee11, this);
            }));

            function getTexture(_x21, _x22) {
              return _getTexture.apply(this, arguments);
            }

            return getTexture;
          }()
        }, {
          key: "getNodeTransform",
          value: function getNodeTransform(e) {
            if (void 0 === e) return V;
            var t = this.nodeTransformCache.get(e);

            if (!t) {
              var r = this.getNodeTransform(this.getNodeParent(e)),
                  n = this.json.nodes[e];
              n.matrix ? t = Object(_chunks_mat4_js__WEBPACK_IMPORTED_MODULE_4__["m"])(Object(_chunks_mat4f64_js__WEBPACK_IMPORTED_MODULE_5__["a"])(), r, n.matrix) : n.translation || n.rotation || n.scale ? (t = Object(_chunks_mat4f64_js__WEBPACK_IMPORTED_MODULE_5__["b"])(r), n.translation && Object(_chunks_mat4_js__WEBPACK_IMPORTED_MODULE_4__["t"])(t, t, n.translation), n.rotation && (_[3] = Object(_chunks_quat_js__WEBPACK_IMPORTED_MODULE_8__["g"])(_, n.rotation), Object(_chunks_mat4_js__WEBPACK_IMPORTED_MODULE_4__["r"])(t, t, _[3], _)), n.scale && Object(_chunks_mat4_js__WEBPACK_IMPORTED_MODULE_4__["s"])(t, t, n.scale)) : t = r, this.nodeTransformCache.set(e, t);
            }

            return t;
          }
        }, {
          key: "wrapAccessor",
          value: function wrapAccessor(e, t) {
            return new e(t.raw, t.byteOffset, t.byteStride, t.byteOffset + t.byteStride * (t.entryCount - 1) + t.componentByteSize * t.componentCount);
          }
        }, {
          key: "resolveUri",
          value: function resolveUri(e) {
            return Object(_core_urlUtils_js__WEBPACK_IMPORTED_MODULE_1__["makeAbsolute"])(e, this.baseUri);
          }
        }, {
          key: "getNodeParent",
          value: function getNodeParent(e) {
            return this.nodeParentMap.get(e);
          }
        }, {
          key: "checkVersionSupported",
          value: function checkVersionSupported() {
            var e = _core_Version_js__WEBPACK_IMPORTED_MODULE_3__["Version"].parse(this.json.asset.version, "glTF");

            P.validate(e);
          }
        }, {
          key: "checkRequiredExtensionsSupported",
          value: function checkRequiredExtensionsSupported() {
            var e = this.json,
                t = this.errorContext;
            e.extensionsRequired && 0 !== e.extensionsRequired.length && t.errorUnsupported("gltf loader was not able to load unsupported feature. Required extensions: " + e.extensionsRequired.join(", "));
          }
        }, {
          key: "computeNodeParents",
          value: function computeNodeParents() {
            var _this6 = this;

            this.json.nodes.forEach(function (e, t) {
              e.children && e.children.forEach(function (e) {
                _this6.nodeParentMap.set(e, t);
              });
            });
          }
        }], [{
          key: "load",
          value: function () {
            var _load = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee12(e, o, s, a) {
              var t, r, _a2, _t21, i, u;

              return regeneratorRuntime.wrap(function _callee12$(_context12) {
                while (1) {
                  switch (_context12.prev = _context12.next) {
                    case 0:
                      if (!Object(_core_urlUtils_js__WEBPACK_IMPORTED_MODULE_1__["isDataProtocol"])(s)) {
                        _context12.next = 13;
                        break;
                      }

                      t = Object(_core_urlUtils_js__WEBPACK_IMPORTED_MODULE_1__["dataComponents"])(s);

                      if (!("model/gltf-binary" !== t.mediaType)) {
                        _context12.next = 10;
                        break;
                      }

                      _context12.prev = 3;
                      r = JSON.parse(t.isBase64 ? atob(t.data) : t.data);
                      return _context12.abrupt("return", new k(e, o, s, r));

                    case 8:
                      _context12.prev = 8;
                      _context12.t0 = _context12["catch"](3);

                    case 10:
                      _a2 = Object(_core_urlUtils_js__WEBPACK_IMPORTED_MODULE_1__["dataToArrayBuffer"])(s);

                      if (!k.isGLBData(_a2)) {
                        _context12.next = 13;
                        break;
                      }

                      return _context12.abrupt("return", this.fromGLBData(e, o, s, _a2));

                    case 13:
                      if (!s.endsWith(".gltf")) {
                        _context12.next = 18;
                        break;
                      }

                      _context12.next = 16;
                      return e.loadJSON(s, a);

                    case 16:
                      _t21 = _context12.sent;
                      return _context12.abrupt("return", new k(e, o, s, _t21));

                    case 18:
                      _context12.next = 20;
                      return e.loadBinary(s, a);

                    case 20:
                      i = _context12.sent;

                      if (!k.isGLBData(i)) {
                        _context12.next = 23;
                        break;
                      }

                      return _context12.abrupt("return", this.fromGLBData(e, o, s, i));

                    case 23:
                      _context12.next = 25;
                      return e.loadJSON(s, a);

                    case 25:
                      u = _context12.sent;
                      return _context12.abrupt("return", new k(e, o, s, u));

                    case 27:
                    case "end":
                      return _context12.stop();
                  }
                }
              }, _callee12, this, [[3, 8]]);
            }));

            function load(_x25, _x26, _x27, _x28) {
              return _load.apply(this, arguments);
            }

            return load;
          }()
        }, {
          key: "isGLBData",
          value: function isGLBData(e) {
            var t = new _BinaryStreamReader_js__WEBPACK_IMPORTED_MODULE_9__["BinaryStreamReader"](e);
            return t.remainingBytes() >= 4 && t.readUint32() === M;
          }
        }, {
          key: "fromGLBData",
          value: function () {
            var _fromGLBData = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee13(e, t, r, n) {
              var o;
              return regeneratorRuntime.wrap(function _callee13$(_context13) {
                while (1) {
                  switch (_context13.prev = _context13.next) {
                    case 0:
                      _context13.next = 2;
                      return k.parseGLBData(t, n);

                    case 2:
                      o = _context13.sent;
                      return _context13.abrupt("return", new k(e, t, r, o.json, o.binaryData));

                    case 4:
                    case "end":
                      return _context13.stop();
                  }
                }
              }, _callee13);
            }));

            function fromGLBData(_x29, _x30, _x31, _x32) {
              return _fromGLBData.apply(this, arguments);
            }

            return fromGLBData;
          }()
        }, {
          key: "parseGLBData",
          value: function () {
            var _parseGLBData = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee14(e, t) {
              var r, n, o, s, a, i, u, _t22, _n6;

              return regeneratorRuntime.wrap(function _callee14$(_context14) {
                while (1) {
                  switch (_context14.prev = _context14.next) {
                    case 0:
                      r = new _BinaryStreamReader_js__WEBPACK_IMPORTED_MODULE_9__["BinaryStreamReader"](t);
                      e.assert(r.remainingBytes() >= 12, "GLB binary data is insufficiently large.");
                      n = r.readUint32(), o = r.readUint32(), s = r.readUint32();
                      e.assert(n === M, "Magic first 4 bytes do not fit to expected GLB value."), e.assert(t.byteLength >= s, "GLB binary data is smaller than header specifies."), e.errorUnsupportedIf(2 !== o, "An unsupported GLB container version was detected. Only version 2 is supported.");
                      u = 0;

                    case 5:
                      if (!(r.remainingBytes() >= 8)) {
                        _context14.next = 19;
                        break;
                      }

                      _t22 = r.readUint32(), _n6 = r.readUint32();

                      if (!(0 === u)) {
                        _context14.next = 15;
                        break;
                      }

                      e.assert(_n6 === G, "First GLB chunk must be JSON.");
                      e.assert(_t22 >= 0, "No JSON data found.");
                      _context14.next = 12;
                      return J(r.readUint8Array(_t22));

                    case 12:
                      a = _context14.sent;
                      _context14.next = 16;
                      break;

                    case 15:
                      1 === u ? (e.errorUnsupportedIf(_n6 !== F, "Second GLB chunk expected to be BIN."), i = r.readUint8Array(_t22)) : e.warnUnsupported("More than 2 GLB chunks detected. Skipping.");

                    case 16:
                      u += 1;

                    case 17:
                      _context14.next = 5;
                      break;

                    case 19:
                      return _context14.abrupt("return", (a || e.error("No GLB JSON chunk detected."), {
                        json: a,
                        binaryData: i
                      }));

                    case 20:
                    case "end":
                      return _context14.stop();
                  }
                }
              }, _callee14);
            }));

            function parseGLBData(_x33, _x34) {
              return _parseGLBData.apply(this, arguments);
            }

            return parseGLBData;
          }()
        }]);

        return k;
      }();

      var P = new _core_Version_js__WEBPACK_IMPORTED_MODULE_3__["Version"](2, 0, "glTF"),
          V = Object(_chunks_mat4_js__WEBPACK_IMPORTED_MODULE_4__["k"])(Object(_chunks_mat4f64_js__WEBPACK_IMPORTED_MODULE_5__["a"])(), Math.PI / 2),
          _ = Object(_chunks_quatf64_js__WEBPACK_IMPORTED_MODULE_6__["a"])(),
          X = {
        SCALAR: 1,
        VEC2: 2,
        VEC3: 3,
        VEC4: 4
      },
          q = {
        5120: 1,
        5121: 1,
        5122: 2,
        5123: 2,
        5126: 4,
        5125: 4
      };

      function J(_x35) {
        return _J.apply(this, arguments);
      }

      function _J() {
        _J = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee15(e) {
          return regeneratorRuntime.wrap(function _callee15$(_context15) {
            while (1) {
              switch (_context15.prev = _context15.next) {
                case 0:
                  return _context15.abrupt("return", Object(_core_promiseUtils_js__WEBPACK_IMPORTED_MODULE_2__["create"])(function (t, r) {
                    var n = new Blob([e]),
                        o = new FileReader();
                    o.onload = function () {
                      var e = o.result;
                      t(JSON.parse(e));
                    }, o.onerror = function (e) {
                      r(e);
                    }, o.readAsText(n);
                  }));

                case 1:
                case "end":
                  return _context15.stop();
              }
            }
          }, _callee15);
        }));
        return _J.apply(this, arguments);
      }

      var z = {
        5120: "BYTE",
        5121: "UNSIGNED_BYTE",
        5122: "SHORT",
        5123: "UNSIGNED_SHORT",
        5125: "UNSIGNED_INT",
        5126: "FLOAT"
      };
      /***/
    },

    /***/
    "HCB5":
    /*!***************************************************!*\
      !*** ./node_modules/@arcgis/core/chunks/vec43.js ***!
      \***************************************************/

    /*! exports provided: c, f, v */

    /***/
    function HCB5(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "c", function () {
        return e;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "f", function () {
        return t;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "v", function () {
        return d;
      });
      /*
      All material copyright ESRI, All Rights Reserved, unless otherwise specified.
      See https://js.arcgis.com/4.18/esri/copyright.txt for details.
      */


      function e(e, t, d) {
        var f = e.typedBuffer,
            n = e.typedBufferStride,
            r = t.typedBuffer,
            o = t.typedBufferStride,
            c = d ? d.count : t.count;
        var u = (d && d.dstIndex ? d.dstIndex : 0) * n,
            s = (d && d.srcIndex ? d.srcIndex : 0) * o;

        for (var _e14 = 0; _e14 < c; ++_e14) {
          f[u] = r[s], f[u + 1] = r[s + 1], f[u + 2] = r[s + 2], f[u + 3] = r[s + 3], u += n, s += o;
        }
      }

      function t(e, t, d, f, n, r) {
        var o = e.typedBuffer,
            c = e.typedBufferStride,
            u = r ? r.count : e.count;
        var s = (r && r.dstIndex ? r.dstIndex : 0) * c;

        for (var _e15 = 0; _e15 < u; ++_e15) {
          o[s] = t, o[s + 1] = d, o[s + 2] = f, o[s + 3] = n, s += c;
        }
      }

      var d = Object.freeze({
        __proto__: null,
        copy: e,
        fill: t
      });
      /***/
    },

    /***/
    "Hizz":
    /*!************************************************************************!*\
      !*** ./node_modules/@arcgis/core/views/3d/webgl-engine/lib/Texture.js ***!
      \************************************************************************/

    /*! exports provided: default */

    /***/
    function Hizz(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony import */


      var _core_compilerUtils_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ../../../../core/compilerUtils.js */
      "bJda");
      /* harmony import */


      var _core_typedArrayUtil_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ../../../../core/typedArrayUtil.js */
      "ohva");
      /* harmony import */


      var _core_maybe_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ../../../../core/maybe.js */
      "srIe");
      /* harmony import */


      var _core_Error_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ../../../../core/Error.js */
      "zlDU");
      /* harmony import */


      var _core_urlUtils_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ../../../../core/urlUtils.js */
      "4EHJ");
      /* harmony import */


      var _core_promiseUtils_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ../../../../core/promiseUtils.js */
      "9MzC");
      /* harmony import */


      var _core_Evented_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ../../../../core/Evented.js */
      "zm0L");
      /* harmony import */


      var _core_mathUtils_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! ../../../../core/mathUtils.js */
      "OKTS");
      /* harmony import */


      var _support_requestUtils_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! ../../../../support/requestUtils.js */
      "Ioo4");
      /* harmony import */


      var _support_requestImageUtils_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! ../../../../support/requestImageUtils.js */
      "LbAs");
      /* harmony import */


      var _Util_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
      /*! ./Util.js */
      "EVMh");
      /* harmony import */


      var _webgl_Texture_js__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
      /*! ../../../webgl/Texture.js */
      "of9L");
      /* harmony import */


      var _webgl_Util_js__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
      /*! ../../../webgl/Util.js */
      "hTmG");
      /* harmony import */


      var _glUtil3D_js__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
      /*! ./glUtil3D.js */
      "1ff1");
      /* harmony import */


      var _IdGen_js__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(
      /*! ./IdGen.js */
      "VHS5");
      /* harmony import */


      var _webgl_FramebufferObject_js__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(
      /*! ../../../webgl/FramebufferObject.js */
      "0meK");
      /* harmony import */


      var _webgl_capabilities_isWebGL2Context_js__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(
      /*! ../../../webgl/capabilities/isWebGL2Context.js */
      "xRQN");
      /* harmony import */


      var _DDSUtil_js__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(
      /*! ./DDSUtil.js */
      "ekr9");
      /*
      All material copyright ESRI, All Rights Reserved, unless otherwise specified.
      See https://js.arcgis.com/4.18/esri/copyright.txt for details.
      */


      var E = /*#__PURE__*/function () {
        function E(e, t, r) {
          _classCallCheck(this, E);

          this.data = e, this.glTexture = null, this.powerOfTwoStretchInfo = null, this.loadingPromise = null, this.loadingController = null, this.events = new _core_Evented_js__WEBPACK_IMPORTED_MODULE_6__["default"](), this.data = e, this.id = E.idGen.gen(t), this.params = r || {}, this.params.mipmap = !1 !== this.params.mipmap, this.params.noUnpackFlip = this.params.noUnpackFlip || !1, this.params.preMultiplyAlpha = this.params.preMultiplyAlpha || !1, this.params.wrap = this.params.wrap || {
            s: 10497,
            t: 10497
          }, this.params.powerOfTwoResizeMode = this.params.powerOfTwoResizeMode || 1, this.estimatedTexMemRequired = E.estimateTexMemRequired(this.data, this.params), this.startPreload();
        }

        _createClass(E, [{
          key: "startPreload",
          value: function startPreload() {
            var e = this.data;
            Object(_core_maybe_js__WEBPACK_IMPORTED_MODULE_2__["isNone"])(e) || (e instanceof HTMLVideoElement ? this.startPreloadVideoElement(e) : e instanceof HTMLImageElement && this.startPreloadImageElement(e));
          }
        }, {
          key: "startPreloadVideoElement",
          value: function startPreloadVideoElement(e) {
            Object(_core_urlUtils_js__WEBPACK_IMPORTED_MODULE_4__["isBlobProtocol"])(e.src) || "auto" === e.preload && e.crossOrigin || (e.preload = "auto", e.crossOrigin = "anonymous", e.src = e.src);
          }
        }, {
          key: "startPreloadImageElement",
          value: function startPreloadImageElement(e) {
            Object(_core_urlUtils_js__WEBPACK_IMPORTED_MODULE_4__["isDataProtocol"])(e.src) || Object(_core_urlUtils_js__WEBPACK_IMPORTED_MODULE_4__["isBlobProtocol"])(e.src) || e.crossOrigin || (e.crossOrigin = "anonymous", e.src = e.src);
          }
        }, {
          key: "dispose",
          value: function dispose() {
            this.data = void 0;
          }
        }, {
          key: "width",
          get: function get() {
            return this.params.width;
          }
        }, {
          key: "height",
          get: function get() {
            return this.params.height;
          }
        }, {
          key: "createDescriptor",
          value: function createDescriptor(e) {
            var t = this.params.mipmap && !this.params.disableAnisotropy;
            return {
              target: 3553,
              pixelFormat: 6408,
              dataType: 5121,
              wrapMode: this.params.wrap,
              flipped: !this.params.noUnpackFlip,
              samplingMode: this.params.mipmap ? 9987 : 9729,
              hasMipmap: this.params.mipmap,
              preMultiplyAlpha: this.params.preMultiplyAlpha,
              maxAnisotropy: t ? e.parameters.maxMaxAnisotropy : void 0
            };
          }
        }, {
          key: "load",
          value: function load(e, a) {
            if (Object(_core_maybe_js__WEBPACK_IMPORTED_MODULE_2__["isSome"])(this.glTexture)) return this.glTexture;
            if (Object(_core_maybe_js__WEBPACK_IMPORTED_MODULE_2__["isSome"])(this.loadingPromise)) return this.loadingPromise;
            var o = this.data;
            return Object(_core_maybe_js__WEBPACK_IMPORTED_MODULE_2__["isNone"])(o) ? (this.glTexture = new _webgl_Texture_js__WEBPACK_IMPORTED_MODULE_11__["default"](e, this.createDescriptor(e), null), e.bindTexture(this.glTexture, 0), this.glTexture) : "string" == typeof o ? this.loadFromURL(e, a, o) : o instanceof Image ? this.loadFromImageElement(e, a, o) : o instanceof HTMLVideoElement ? this.loadFromVideoElement(e, a, o) : o instanceof ImageData || o instanceof HTMLCanvasElement ? this.loadFromImage(e, o, a) : (Object(_core_typedArrayUtil_js__WEBPACK_IMPORTED_MODULE_1__["isArrayBuffer"])(o) || Object(_core_typedArrayUtil_js__WEBPACK_IMPORTED_MODULE_1__["isUint8Array"])(o)) && this.params.encoding === E.DDS_ENCODING ? this.loadFromDDSData(e, o) : Object(_core_typedArrayUtil_js__WEBPACK_IMPORTED_MODULE_1__["isUint8Array"])(o) ? this.loadFromPixelData(e, o) : Object(_core_typedArrayUtil_js__WEBPACK_IMPORTED_MODULE_1__["isArrayBuffer"])(o) ? this.loadFromPixelData(e, new Uint8Array(o)) : null;
          }
        }, {
          key: "requiresFrameUpdates",
          get: function get() {
            return this.data instanceof HTMLVideoElement;
          }
        }, {
          key: "frameUpdate",
          value: function frameUpdate(e, t, r) {
            if (!(this.data instanceof HTMLVideoElement) || Object(_core_maybe_js__WEBPACK_IMPORTED_MODULE_2__["isNone"])(this.glTexture)) return r;
            if (this.data.readyState < 2 || r === this.data.currentTime) return r;

            if (Object(_core_maybe_js__WEBPACK_IMPORTED_MODULE_2__["isSome"])(this.powerOfTwoStretchInfo)) {
              var _this$powerOfTwoStret = this.powerOfTwoStretchInfo,
                  _r5 = _this$powerOfTwoStret.framebuffer,
                  i = _this$powerOfTwoStret.vao,
                  s = _this$powerOfTwoStret.sourceTexture;
              s.setData(this.data), this.drawStretchedTexture(e, t, _r5, i, s, this.glTexture);
            } else {
              var _this$data = this.data,
                  _e16 = _this$data.width,
                  _t23 = _this$data.height,
                  _this$glTexture$descr = this.glTexture.descriptor,
                  _r6 = _this$glTexture$descr.width,
                  _i9 = _this$glTexture$descr.height;
              _e16 !== _r6 || _t23 !== _i9 ? this.glTexture.updateData(0, 0, 0, Math.min(_e16, _r6), Math.min(_t23, _i9), this.data) : this.glTexture.setData(this.data);
            }

            return this.glTexture.descriptor.hasMipmap && this.glTexture.generateMipmap(), this.data.currentTime;
          }
        }, {
          key: "loadFromDDSData",
          value: function loadFromDDSData(e, t) {
            return this.glTexture = Object(_DDSUtil_js__WEBPACK_IMPORTED_MODULE_17__["createDDSTexture"])(e, this.createDescriptor(e), t, this.params.mipmap), e.bindTexture(this.glTexture, 0), this.glTexture;
          }
        }, {
          key: "loadFromPixelData",
          value: function loadFromPixelData(e, t) {
            Object(_Util_js__WEBPACK_IMPORTED_MODULE_10__["assert"])(this.params.width > 0 && this.params.height > 0);
            var r = this.createDescriptor(e);
            return r.pixelFormat = 1 === this.params.components ? 6409 : 3 === this.params.components ? 6407 : 6408, r.width = this.params.width, r.height = this.params.height, this.glTexture = new _webgl_Texture_js__WEBPACK_IMPORTED_MODULE_11__["default"](e, r, t), e.bindTexture(this.glTexture, 0), this.glTexture;
          }
        }, {
          key: "loadAsync",
          value: function () {
            var _loadAsync = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee16(e) {
              var _this7 = this;

              var t, r, i;
              return regeneratorRuntime.wrap(function _callee16$(_context16) {
                while (1) {
                  switch (_context16.prev = _context16.next) {
                    case 0:
                      t = Object(_core_promiseUtils_js__WEBPACK_IMPORTED_MODULE_5__["createAbortController"])();
                      this.loadingController = t;
                      r = e(t.signal);
                      this.loadingPromise = r;

                      i = function i() {
                        _this7.loadingController === t && (_this7.loadingController = null), _this7.loadingPromise === r && (_this7.loadingPromise = null);
                      };

                      return _context16.abrupt("return", (r.then(i, i), r));

                    case 6:
                    case "end":
                      return _context16.stop();
                  }
                }
              }, _callee16, this);
            }));

            function loadAsync(_x36) {
              return _loadAsync.apply(this, arguments);
            }

            return loadAsync;
          }()
        }, {
          key: "loadFromURL",
          value: function loadFromURL(e, t, r) {
            var _this8 = this;

            return this.loadAsync( /*#__PURE__*/function () {
              var _ref4 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee17(i) {
                var s;
                return regeneratorRuntime.wrap(function _callee17$(_context17) {
                  while (1) {
                    switch (_context17.prev = _context17.next) {
                      case 0:
                        _context17.next = 2;
                        return Object(_support_requestImageUtils_js__WEBPACK_IMPORTED_MODULE_9__["requestImage"])(r, {
                          signal: i
                        });

                      case 2:
                        s = _context17.sent;
                        return _context17.abrupt("return", _this8.loadFromImage(e, s, t));

                      case 4:
                      case "end":
                        return _context17.stop();
                    }
                  }
                }, _callee17);
              }));

              return function (_x37) {
                return _ref4.apply(this, arguments);
              };
            }());
          }
        }, {
          key: "loadFromImageElement",
          value: function loadFromImageElement(e, t, r) {
            var _this9 = this;

            return r.complete ? this.loadFromImage(e, r, t) : this.loadAsync( /*#__PURE__*/function () {
              var _ref5 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee18(i) {
                var s;
                return regeneratorRuntime.wrap(function _callee18$(_context18) {
                  while (1) {
                    switch (_context18.prev = _context18.next) {
                      case 0:
                        _context18.next = 2;
                        return Object(_support_requestUtils_js__WEBPACK_IMPORTED_MODULE_8__["loadImageAsync"])(r, r.src, !1, i);

                      case 2:
                        s = _context18.sent;
                        return _context18.abrupt("return", _this9.loadFromImage(e, s, t));

                      case 4:
                      case "end":
                        return _context18.stop();
                    }
                  }
                }, _callee18);
              }));

              return function (_x38) {
                return _ref5.apply(this, arguments);
              };
            }());
          }
        }, {
          key: "loadFromVideoElement",
          value: function loadFromVideoElement(e, t, r) {
            return r.readyState >= 2 ? this.loadFromImage(e, r, t) : this.loadFromVideoElementAsync(e, t, r);
          }
        }, {
          key: "loadFromVideoElementAsync",
          value: function loadFromVideoElementAsync(e, t, r) {
            var _this10 = this;

            return this.loadAsync(function (i) {
              return Object(_core_promiseUtils_js__WEBPACK_IMPORTED_MODULE_5__["create"])(function (o, n) {
                var h = function h() {
                  r.removeEventListener("loadeddata", l), r.removeEventListener("error", d), Object(_core_maybe_js__WEBPACK_IMPORTED_MODULE_2__["isSome"])(u) && u.remove();
                },
                    l = function l() {
                  r.readyState >= 2 && (h(), o(_this10.loadFromImage(e, r, t)));
                },
                    d = function d(e) {
                  h(), n(e || new _core_Error_js__WEBPACK_IMPORTED_MODULE_3__["default"]("Failed to load video"));
                };

                r.addEventListener("loadeddata", l), r.addEventListener("error", d);
                var u = Object(_core_promiseUtils_js__WEBPACK_IMPORTED_MODULE_5__["onAbort"])(i, function () {
                  return d(Object(_core_promiseUtils_js__WEBPACK_IMPORTED_MODULE_5__["createAbortError"])());
                });
              });
            });
          }
        }, {
          key: "loadFromImage",
          value: function loadFromImage(e, t, r) {
            var i = E.getDataDimensions(t);
            this.params.width = i.width, this.params.height = i.height;
            var s = this.createDescriptor(e);
            return s.pixelFormat = 3 === this.params.components ? 6407 : 6408, !this.requiresPowerOfTwo(e, s) || Object(_core_mathUtils_js__WEBPACK_IMPORTED_MODULE_7__["isPowerOfTwo"])(i.width) && Object(_core_mathUtils_js__WEBPACK_IMPORTED_MODULE_7__["isPowerOfTwo"])(i.height) ? (s.width = i.width, s.height = i.height, this.glTexture = new _webgl_Texture_js__WEBPACK_IMPORTED_MODULE_11__["default"](e, s, t), e.bindTexture(this.glTexture, 0), this.glTexture) : (this.glTexture = this.makePowerOfTwoTexture(e, t, i, s, r), e.bindTexture(this.glTexture, 0), this.glTexture);
          }
        }, {
          key: "requiresPowerOfTwo",
          value: function requiresPowerOfTwo(e, t) {
            var r = 33071,
                i = "number" == typeof t.wrapMode ? t.wrapMode === r : t.wrapMode.s === r && t.wrapMode.t === r;
            return !Object(_webgl_capabilities_isWebGL2Context_js__WEBPACK_IMPORTED_MODULE_16__["default"])(e.gl) && (t.hasMipmap || !i);
          }
        }, {
          key: "makePowerOfTwoTexture",
          value: function makePowerOfTwoTexture(t, r, i, s, a) {
            var o = i.width,
                n = i.height,
                h = Object(_core_mathUtils_js__WEBPACK_IMPORTED_MODULE_7__["nextHighestPowerOfTwo"])(o),
                l = Object(_core_mathUtils_js__WEBPACK_IMPORTED_MODULE_7__["nextHighestPowerOfTwo"])(n);
            var m;

            switch (s.width = h, s.height = l, this.params.powerOfTwoResizeMode) {
              case 2:
                s.textureCoordinateScaleFactor = [o / h, n / l], m = new _webgl_Texture_js__WEBPACK_IMPORTED_MODULE_11__["default"](t, s), m.updateData(0, 0, 0, o, n, r);
                break;

              case 1:
              case null:
              case void 0:
                m = this.stretchToPowerOfTwo(t, r, s, a);
                break;

              default:
                Object(_core_compilerUtils_js__WEBPACK_IMPORTED_MODULE_0__["neverReached"])(this.params.powerOfTwoResizeMode);
            }

            return s.hasMipmap && m.generateMipmap(), m;
          }
        }, {
          key: "stretchToPowerOfTwo",
          value: function stretchToPowerOfTwo(e, t, r, i) {
            var s = new _webgl_Texture_js__WEBPACK_IMPORTED_MODULE_11__["default"](e, r),
                a = new _webgl_FramebufferObject_js__WEBPACK_IMPORTED_MODULE_15__["default"](e, {
              colorTarget: 0,
              depthStencilTarget: 0
            }, s),
                o = new _webgl_Texture_js__WEBPACK_IMPORTED_MODULE_11__["default"](e, {
              target: 3553,
              pixelFormat: r.pixelFormat,
              dataType: 5121,
              wrapMode: 33071,
              samplingMode: 9729,
              flipped: !!r.flipped,
              maxAnisotropy: 8,
              preMultiplyAlpha: r.preMultiplyAlpha
            }, t),
                n = Object(_glUtil3D_js__WEBPACK_IMPORTED_MODULE_13__["createQuadVAO"])(e);
            return this.drawStretchedTexture(e, i, a, n, o, s), this.requiresFrameUpdates ? this.powerOfTwoStretchInfo = {
              vao: n,
              sourceTexture: o,
              framebuffer: a
            } : (n.dispose(!0), o.dispose(), a.detachColorTexture(), e.bindFramebuffer(null), a.dispose()), s;
          }
        }, {
          key: "drawStretchedTexture",
          value: function drawStretchedTexture(e, t, r, i, s, a) {
            e.bindFramebuffer(r);
            var o = e.getViewport();
            e.setViewport(0, 0, a.descriptor.width, a.descriptor.height);
            var n = t.program;
            e.bindProgram(n), n.setUniform4f("color", 1, 1, 1, 1), n.setUniform1i("tex", 0), e.bindTexture(s, 0), e.bindVAO(i), e.setPipelineState(t.pipeline), e.drawArrays(5, 0, Object(_webgl_Util_js__WEBPACK_IMPORTED_MODULE_12__["vertexCount"])(i, "geometry")), e.bindFramebuffer(null), e.setViewport(o.x, o.y, o.width, o.height);
          }
        }, {
          key: "unload",
          value: function unload() {
            if (Object(_core_maybe_js__WEBPACK_IMPORTED_MODULE_2__["isSome"])(this.powerOfTwoStretchInfo)) {
              var _this$powerOfTwoStret2 = this.powerOfTwoStretchInfo,
                  e = _this$powerOfTwoStret2.framebuffer,
                  _t24 = _this$powerOfTwoStret2.vao,
                  _r7 = _this$powerOfTwoStret2.sourceTexture;
              _t24.dispose(!0), _r7.dispose(), e.dispose(), this.glTexture = null, this.powerOfTwoStretchInfo = null;
            }

            if (Object(_core_maybe_js__WEBPACK_IMPORTED_MODULE_2__["isSome"])(this.glTexture) && (this.glTexture.dispose(), this.glTexture = null), Object(_core_maybe_js__WEBPACK_IMPORTED_MODULE_2__["isSome"])(this.loadingController)) {
              var _e17 = this.loadingController;
              this.loadingController = null, this.loadingPromise = null, _e17.abort();
            }

            this.events.emit("unloaded");
          }
        }], [{
          key: "getDataDimensions",
          value: function getDataDimensions(e) {
            return e instanceof HTMLVideoElement ? {
              width: e.videoWidth,
              height: e.videoHeight
            } : e;
          }
        }, {
          key: "estimateTexMemRequired",
          value: function estimateTexMemRequired(e, s) {
            if (Object(_core_maybe_js__WEBPACK_IMPORTED_MODULE_2__["isNone"])(e)) return 0;
            if (Object(_core_typedArrayUtil_js__WEBPACK_IMPORTED_MODULE_1__["isArrayBuffer"])(e) || Object(_core_typedArrayUtil_js__WEBPACK_IMPORTED_MODULE_1__["isUint8Array"])(e)) return e.byteLength;

            var _ref6 = e instanceof Image || e instanceof ImageData || e instanceof HTMLCanvasElement || e instanceof HTMLVideoElement ? E.getDataDimensions(e) : s,
                a = _ref6.width,
                o = _ref6.height;

            return (s.mipmap ? 4 / 3 : 1) * a * o * (s.components || 4) || 0;
          }
        }]);

        return E;
      }();

      E.idGen = new _IdGen_js__WEBPACK_IMPORTED_MODULE_14__["IdGen"](), E.DDS_ENCODING = "image/vnd-ms.dds";
      /* harmony default export */

      __webpack_exports__["default"] = E;
      /***/
    },

    /***/
    "IEcw":
    /*!****************************************************!*\
      !*** ./node_modules/@arcgis/core/chunks/vector.js ***!
      \****************************************************/

    /*! exports provided: a, b, c, p, v */

    /***/
    function IEcw(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "a", function () {
        return u;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "b", function () {
        return f;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "c", function () {
        return c;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "p", function () {
        return i;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "v", function () {
        return j;
      });
      /* harmony import */


      var _core_mathUtils_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ../core/mathUtils.js */
      "OKTS");
      /* harmony import */


      var _vec3f64_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./vec3f64.js */
      "Cy1f");
      /* harmony import */


      var _vec3_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./vec3.js */
      "5DEt");
      /*
      All material copyright ESRI, All Rights Reserved, unless otherwise specified.
      See https://js.arcgis.com/4.18/esri/copyright.txt for details.
      */


      function c(t, n, r) {
        var a = Object(_vec3_js__WEBPACK_IMPORTED_MODULE_2__["d"])(t, n) / Object(_vec3_js__WEBPACK_IMPORTED_MODULE_2__["d"])(t, t);
        return Object(_vec3_js__WEBPACK_IMPORTED_MODULE_2__["a"])(r, t, a);
      }

      function i(t, n) {
        return Object(_vec3_js__WEBPACK_IMPORTED_MODULE_2__["d"])(t, n) / Object(_vec3_js__WEBPACK_IMPORTED_MODULE_2__["l"])(t);
      }

      function u(n, s) {
        var a = Object(_vec3_js__WEBPACK_IMPORTED_MODULE_2__["d"])(n, s) / (Object(_vec3_js__WEBPACK_IMPORTED_MODULE_2__["l"])(n) * Object(_vec3_js__WEBPACK_IMPORTED_MODULE_2__["l"])(s));
        return -Object(_core_mathUtils_js__WEBPACK_IMPORTED_MODULE_0__["acosClamped"])(a);
      }

      function f(n, r, s) {
        Object(_vec3_js__WEBPACK_IMPORTED_MODULE_2__["n"])(p, n), Object(_vec3_js__WEBPACK_IMPORTED_MODULE_2__["n"])(m, r);
        var c = Object(_vec3_js__WEBPACK_IMPORTED_MODULE_2__["d"])(p, m),
            i = Object(_core_mathUtils_js__WEBPACK_IMPORTED_MODULE_0__["acosClamped"])(c),
            u = Object(_vec3_js__WEBPACK_IMPORTED_MODULE_2__["c"])(p, p, m);
        return Object(_vec3_js__WEBPACK_IMPORTED_MODULE_2__["d"])(u, s) < 0 ? 2 * Math.PI - i : i;
      }

      var p = Object(_vec3f64_js__WEBPACK_IMPORTED_MODULE_1__["c"])(),
          m = Object(_vec3f64_js__WEBPACK_IMPORTED_MODULE_1__["c"])();
      var j = Object.freeze({
        __proto__: null,
        projectPoint: c,
        projectPointSignedLength: i,
        angle: u,
        angleAroundAxis: f
      });
      /***/
    },

    /***/
    "IRkY":
    /*!*******************************************************!*\
      !*** ./node_modules/@arcgis/core/core/ObjectStack.js ***!
      \*******************************************************/

    /*! exports provided: default, ObjectStack */

    /***/
    function IRkY(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ObjectStack", function () {
        return s;
      });
      /* harmony import */


      var _maybe_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ./maybe.js */
      "srIe");
      /* harmony import */


      var _nextTick_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./nextTick.js */
      "KrcW");
      /*
      All material copyright ESRI, All Rights Reserved, unless otherwise specified.
      See https://js.arcgis.com/4.18/esri/copyright.txt for details.
      */


      var s = /*#__PURE__*/function () {
        function s(t) {
          var _this11 = this;

          _classCallCheck(this, s);

          this.allocator = t, this.items = [], this.itemsPtr = 0, this.tickHandle = _nextTick_js__WEBPACK_IMPORTED_MODULE_1__["default"].before(function () {
            return _this11.reset();
          }), this.grow();
        }

        _createClass(s, [{
          key: "destroy",
          value: function destroy() {
            this.tickHandle && (this.tickHandle.remove(), this.tickHandle = Object(_maybe_js__WEBPACK_IMPORTED_MODULE_0__["nullifyNonnullableForDispose"])(this.tickHandle)), this.items = Object(_maybe_js__WEBPACK_IMPORTED_MODULE_0__["nullifyNonnullableForDispose"])(this.items);
          }
        }, {
          key: "get",
          value: function get() {
            return 0 === this.itemsPtr && Object(_nextTick_js__WEBPACK_IMPORTED_MODULE_1__["default"])(function () {}), this.itemsPtr === this.items.length && this.grow(), this.items[this.itemsPtr++];
          }
        }, {
          key: "reset",
          value: function reset() {
            var t = Math.min(3 * Math.max(8, this.itemsPtr), this.itemsPtr + 3 * e);
            this.items.length = Math.min(t, this.items.length), this.itemsPtr = 0;
          }
        }, {
          key: "grow",
          value: function grow() {
            for (var _t25 = 0; _t25 < Math.max(8, Math.min(this.items.length, e)); _t25++) {
              this.items.push(this.allocator());
            }
          }
        }]);

        return s;
      }();

      var e = 1024;
      /* harmony default export */

      __webpack_exports__["default"] = s;
      /***/
    },

    /***/
    "IvV4":
    /*!**************************************************************************!*\
      !*** ./node_modules/@arcgis/core/views/3d/layers/graphics/wosrLoader.js ***!
      \**************************************************************************/

    /*! exports provided: createTextureResources, load, processLoadResult */

    /***/
    function IvV4(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "createTextureResources", function () {
        return M;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "load", function () {
        return h;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "processLoadResult", function () {
        return A;
      });
      /* harmony import */


      var _core_lang_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ../../../../core/lang.js */
      "f/qv");
      /* harmony import */


      var _core_maybe_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ../../../../core/maybe.js */
      "srIe");
      /* harmony import */


      var _core_Logger_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ../../../../core/Logger.js */
      "6S2I");
      /* harmony import */


      var _core_Error_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ../../../../core/Error.js */
      "zlDU");
      /* harmony import */


      var _core_promiseUtils_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ../../../../core/promiseUtils.js */
      "9MzC");
      /* harmony import */


      var _request_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ../../../../request.js */
      "Lqtk");
      /* harmony import */


      var _core_asyncUtils_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ../../../../core/asyncUtils.js */
      "eSsm");
      /* harmony import */


      var _chunks_vec3f64_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! ../../../../chunks/vec3f64.js */
      "Cy1f");
      /* harmony import */


      var _core_Version_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! ../../../../core/Version.js */
      "VJrH");
      /* harmony import */


      var _geometry_support_aaBoundingBox_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! ../../../../geometry/support/aaBoundingBox.js */
      "QmHG");
      /* harmony import */


      var _support_requestImageUtils_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
      /*! ../../../../support/requestImageUtils.js */
      "LbAs");
      /* harmony import */


      var _webgl_engine_lib_GeometryData_js__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
      /*! ../../webgl-engine/lib/GeometryData.js */
      "1PqF");
      /* harmony import */


      var _webgl_engine_lib_Geometry_js__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
      /*! ../../webgl-engine/lib/Geometry.js */
      "Ango");
      /* harmony import */


      var _webgl_engine_materials_DefaultMaterial_js__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
      /*! ../../webgl-engine/materials/DefaultMaterial.js */
      "262w");
      /* harmony import */


      var _webgl_engine_lib_Texture_js__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(
      /*! ../../webgl-engine/lib/Texture.js */
      "Hizz");
      /*
      All material copyright ESRI, All Rights Reserved, unless otherwise specified.
      See https://js.arcgis.com/4.18/esri/copyright.txt for details.
      */


      var b = _core_Logger_js__WEBPACK_IMPORTED_MODULE_2__["default"].getLogger("esri.views.3d.layers.graphics.objectResourceUtils");

      function h(_x39, _x40) {
        return _h2.apply(this, arguments);
      }

      function _h2() {
        _h2 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee21(e, n) {
          var a;
          return regeneratorRuntime.wrap(function _callee21$(_context21) {
            while (1) {
              switch (_context21.prev = _context21.next) {
                case 0:
                  _context21.next = 2;
                  return function () {
                    var _ref7 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee20(e, n) {
                      var a, o;
                      return regeneratorRuntime.wrap(function _callee20$(_context20) {
                        while (1) {
                          switch (_context20.prev = _context20.next) {
                            case 0:
                              a = Object(_core_maybe_js__WEBPACK_IMPORTED_MODULE_1__["isSome"])(n) && n.streamDataRequester;

                              if (!a) {
                                _context20.next = 3;
                                break;
                              }

                              return _context20.abrupt("return", function () {
                                var _ref8 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee19(e, t, r) {
                                  var n;
                                  return regeneratorRuntime.wrap(function _callee19$(_context19) {
                                    while (1) {
                                      switch (_context19.prev = _context19.next) {
                                        case 0:
                                          _context19.next = 2;
                                          return Object(_core_asyncUtils_js__WEBPACK_IMPORTED_MODULE_6__["result"])(t.request(e, "json", r));

                                        case 2:
                                          n = _context19.sent;

                                          if (!(!0 === n.ok)) {
                                            _context19.next = 5;
                                            break;
                                          }

                                          return _context19.abrupt("return", n.value);

                                        case 5:
                                          return _context19.abrupt("return", (Object(_core_promiseUtils_js__WEBPACK_IMPORTED_MODULE_4__["throwIfAbortError"])(n.error), void v(n.error.details.url)));

                                        case 6:
                                        case "end":
                                          return _context19.stop();
                                      }
                                    }
                                  }, _callee19);
                                }));

                                return function (_x45, _x46, _x47) {
                                  return _ref8.apply(this, arguments);
                                };
                              }()(e, a, n));

                            case 3:
                              _context20.next = 5;
                              return Object(_core_asyncUtils_js__WEBPACK_IMPORTED_MODULE_6__["result"])(Object(_request_js__WEBPACK_IMPORTED_MODULE_5__["default"])(e, Object(_core_maybe_js__WEBPACK_IMPORTED_MODULE_1__["unwrap"])(n)));

                            case 5:
                              o = _context20.sent;

                              if (!(!0 === o.ok)) {
                                _context20.next = 8;
                                break;
                              }

                              return _context20.abrupt("return", o.value.data);

                            case 8:
                              return _context20.abrupt("return", (Object(_core_promiseUtils_js__WEBPACK_IMPORTED_MODULE_4__["throwIfAbortError"])(o.error), void v(o.error)));

                            case 9:
                            case "end":
                              return _context20.stop();
                          }
                        }
                      }, _callee20);
                    }));

                    return function (_x43, _x44) {
                      return _ref7.apply(this, arguments);
                    };
                  }()(e, n);

                case 2:
                  a = _context21.sent;
                  _context21.t0 = a;
                  _context21.next = 6;
                  return M(a.textureDefinitions, n);

                case 6:
                  _context21.t1 = _context21.sent;
                  return _context21.abrupt("return", {
                    resource: _context21.t0,
                    textures: _context21.t1
                  });

                case 8:
                case "end":
                  return _context21.stop();
              }
            }
          }, _callee21);
        }));
        return _h2.apply(this, arguments);
      }

      function v(e) {
        throw new _core_Error_js__WEBPACK_IMPORTED_MODULE_3__["default"]("", "Request for object resource failed: ".concat(e));
      }

      function j(e) {
        var t = e.params,
            r = t.topology;
        var n = !0;

        switch (t.vertexAttributes || (b.warn("Geometry must specify vertex attributes"), n = !1), t.topology) {
          case "PerAttributeArray":
            break;

          case "Indexed":
          case null:
          case void 0:
            {
              var _e18 = t.faces;

              if (_e18) {
                if (t.vertexAttributes) for (var _r8 in t.vertexAttributes) {
                  var _t26 = _e18[_r8];
                  _t26 && _t26.values ? (null != _t26.valueType && "UInt32" !== _t26.valueType && (b.warn("Unsupported indexed geometry indices type '".concat(_t26.valueType, "', only UInt32 is currently supported")), n = !1), null != _t26.valuesPerElement && 1 !== _t26.valuesPerElement && (b.warn("Unsupported indexed geometry values per element '".concat(_t26.valuesPerElement, "', only 1 is currently supported")), n = !1)) : (b.warn("Indexed geometry does not specify face indices for '".concat(_r8, "' attribute")), n = !1);
                }
              } else b.warn("Indexed geometries must specify faces"), n = !1;

              break;
            }

          default:
            b.warn("Unsupported topology '".concat(r, "'")), n = !1;
        }

        e.params.material || (b.warn("Geometry requires material"), n = !1);
        var a = e.params.vertexAttributes;

        for (var _e19 in a) {
          a[_e19].values || (b.warn("Geometries with externally defined attributes are not yet supported"), n = !1);
        }

        return n;
      }

      function A(r, n) {
        var a = [],
            s = [],
            o = [],
            i = [],
            u = r.resource,
            l = _core_Version_js__WEBPACK_IMPORTED_MODULE_8__["Version"].parse(u.version || "1.0", "wosr");

        P.validate(l);
        var m = u.model.name,
            f = u.model.geometries,
            d = u.materialDefinitions,
            b = r.textures;
        var h = 0;
        var v = new Map();

        for (var _r9 = 0; _r9 < f.length; _r9++) {
          var _u2 = f[_r9];
          if (!j(_u2)) continue;

          var _l2 = T(_u2),
              p = _u2.params.vertexAttributes,
              _A = {};

          for (var e in p) {
            var _t27 = p[e],
                _r10 = _t27.values;
            _A[e] = {
              data: _r10,
              size: _t27.valuesPerElement
            };
          }

          var _U = {};

          if ("PerAttributeArray" === _u2.params.topology) {
            var _e20 = k(_A.position.data.length / _A.position.size);

            for (var _t28 in _A) {
              _U[_t28] = _e20;
            }
          } else {
            var _e21 = _u2.params.faces;

            for (var _t29 in _e21) {
              _U[_t29] = new Uint32Array(_e21[_t29].values);
            }
          }

          var _M = b && b[_l2.texture];

          if (_M && !v.has(_l2.texture)) {
            var _e22 = _M.image,
                _t30 = _M.params,
                _r11 = new _webgl_engine_lib_Texture_js__WEBPACK_IMPORTED_MODULE_14__["default"](_e22, m, _t30);

            i.push(_r11), v.set(_l2.texture, _r11);
          }

          var _P = v.get(_l2.texture),
              B = _P ? _P.id : void 0;

          var E = o[_l2.material] ? o[_l2.material][_l2.texture] : null;

          if (!E) {
            var _r12 = d[_l2.material.substring(_l2.material.lastIndexOf("/") + 1)].params;

            1 === _r12.transparency && (_r12.transparency = 0);

            var _a3 = _M && _M.alphaChannelUsage,
                _s4 = _r12.transparency > 0 || "transparency" === _a3 || "maskAndTransparency" === _a3,
                _i10 = {
              ambient: Object(_chunks_vec3f64_js__WEBPACK_IMPORTED_MODULE_7__["d"])(_r12.diffuse),
              diffuse: Object(_chunks_vec3f64_js__WEBPACK_IMPORTED_MODULE_7__["d"])(_r12.diffuse),
              opacity: 1 - (_r12.transparency || 0),
              transparent: _s4,
              textureAlphaMode: _M ? I(_M.alphaChannelUsage) : void 0,
              textureAlphaCutoff: .33,
              textureId: B,
              initTextureTransparent: !0,
              doubleSided: !0,
              cullFace: 0,
              colorMixMode: _r12.externalColorMixMode || "tint",
              textureAlphaPremultiplied: !0
            };

            Object(_core_maybe_js__WEBPACK_IMPORTED_MODULE_1__["isSome"])(n) && n.materialParamsMixin && Object(_core_lang_js__WEBPACK_IMPORTED_MODULE_0__["mixin"])(_i10, n.materialParamsMixin), E = new _webgl_engine_materials_DefaultMaterial_js__WEBPACK_IMPORTED_MODULE_13__["DefaultMaterial"](_i10, m), o[_l2.material] || (o[_l2.material] = {}), o[_l2.material][_l2.texture] = E;
          }

          s.push(E);
          var q = new _webgl_engine_lib_Geometry_js__WEBPACK_IMPORTED_MODULE_12__["default"](new _webgl_engine_lib_GeometryData_js__WEBPACK_IMPORTED_MODULE_11__["GeometryData"](_A, _U), m);
          h += _U.position ? _U.position.length : 0, a.push(q);
        }

        return {
          name: m,
          stageResources: {
            textures: i,
            materials: s,
            geometries: a
          },
          pivotOffset: u.model.pivotOffset,
          boundingBox: U(a),
          numberOfVertices: h,
          lodThreshold: null
        };
      }

      function U(e) {
        var t = Object(_geometry_support_aaBoundingBox_js__WEBPACK_IMPORTED_MODULE_9__["empty"])();
        return e.forEach(function (e) {
          var r = e.boundingInfo;
          Object(_geometry_support_aaBoundingBox_js__WEBPACK_IMPORTED_MODULE_9__["expandWithVec3"])(t, r.getBBMin()), Object(_geometry_support_aaBoundingBox_js__WEBPACK_IMPORTED_MODULE_9__["expandWithVec3"])(t, r.getBBMax());
        }), t;
      }

      function M(_x41, _x42) {
        return _M2.apply(this, arguments);
      }

      function _M2() {
        _M2 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee22(e, r) {
          var n, _loop, _a4, _ret, a, s, _iterator5, _step5, _e23;

          return regeneratorRuntime.wrap(function _callee22$(_context22) {
            while (1) {
              switch (_context22.prev = _context22.next) {
                case 0:
                  n = [];

                  _loop = function _loop(_a4) {
                    var s = e[_a4],
                        i = s.images[0].data;

                    if (!i) {
                      b.warn("Externally referenced texture data is not yet supported");
                      return "continue";
                    }

                    var u = s.encoding + ";base64," + i,
                        l = "/textureDefinitions/" + _a4,
                        c = {
                      noUnpackFlip: !0,
                      wrap: {
                        s: 10497,
                        t: 10497
                      },
                      preMultiplyAlpha: !0
                    },
                        p = Object(_core_maybe_js__WEBPACK_IMPORTED_MODULE_1__["isSome"])(r) && r.disableTextures ? Object(_core_promiseUtils_js__WEBPACK_IMPORTED_MODULE_4__["resolve"])(null) : Object(_support_requestImageUtils_js__WEBPACK_IMPORTED_MODULE_10__["requestImage"])(u, r);
                    n.push(p.then(function (e) {
                      return {
                        refId: l,
                        image: e,
                        params: c,
                        alphaChannelUsage: "rgba" === s.channels ? s.alphaChannelUsage || "transparency" : "none"
                      };
                    }));
                  };

                  _context22.t0 = regeneratorRuntime.keys(e);

                case 3:
                  if ((_context22.t1 = _context22.t0()).done) {
                    _context22.next = 10;
                    break;
                  }

                  _a4 = _context22.t1.value;
                  _ret = _loop(_a4);

                  if (!(_ret === "continue")) {
                    _context22.next = 8;
                    break;
                  }

                  return _context22.abrupt("continue", 3);

                case 8:
                  _context22.next = 3;
                  break;

                case 10:
                  _context22.next = 12;
                  return Object(_core_promiseUtils_js__WEBPACK_IMPORTED_MODULE_4__["all"])(n);

                case 12:
                  a = _context22.sent;
                  s = {};
                  _iterator5 = _createForOfIteratorHelper(a);

                  try {
                    for (_iterator5.s(); !(_step5 = _iterator5.n()).done;) {
                      _e23 = _step5.value;
                      s[_e23.refId] = _e23;
                    }
                  } catch (err) {
                    _iterator5.e(err);
                  } finally {
                    _iterator5.f();
                  }

                  return _context22.abrupt("return", s);

                case 17:
                case "end":
                  return _context22.stop();
              }
            }
          }, _callee22);
        }));
        return _M2.apply(this, arguments);
      }

      function I(e) {
        switch (e) {
          case "mask":
            return 2;

          case "maskAndTransparency":
            return 3;

          case "none":
            return 1;

          case "transparency":
          default:
            return 0;
        }
      }

      function T(e) {
        var t = e.params;
        return {
          id: 1,
          material: t.material,
          texture: t.texture,
          region: t.texture
        };
      }

      function k(e) {
        var t = new Uint32Array(e);

        for (var _r13 = 0; _r13 < e; _r13++) {
          t[_r13] = _r13;
        }

        return t;
      }

      var P = new _core_Version_js__WEBPACK_IMPORTED_MODULE_8__["Version"](1, 2, "wosr");
      /***/
    },

    /***/
    "J1lp":
    /*!***************************************************************************************************************!*\
      !*** ./node_modules/@arcgis/core/views/3d/webgl-engine/core/shaderLibrary/shading/AnalyticalSkyModel.glsl.js ***!
      \***************************************************************************************************************/

    /*! exports provided: AnalyticalSkyModel */

    /***/
    function J1lp(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "AnalyticalSkyModel", function () {
        return t;
      });
      /* harmony import */


      var _shaderModules_interfaces_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ../../shaderModules/interfaces.js */
      "OIYib");
      /*
      All material copyright ESRI, All Rights Reserved, unless otherwise specified.
      See https://js.arcgis.com/4.18/esri/copyright.txt for details.
      */


      function t(t) {
        var a = t.fragment.code;
        a.add(_shaderModules_interfaces_js__WEBPACK_IMPORTED_MODULE_0__["glsl"](_templateObject66 || (_templateObject66 = _taggedTemplateLiteral(["\n    vec3 evaluateDiffuseIlluminationHemisphere(vec3 ambientGround, vec3 ambientSky, float NdotNG)\n    {\n      return ((1.0 - NdotNG) * ambientGround + (1.0 + NdotNG) * ambientSky) * 0.5;\n    }\n    "])))), a.add(_shaderModules_interfaces_js__WEBPACK_IMPORTED_MODULE_0__["glsl"](_templateObject67 || (_templateObject67 = _taggedTemplateLiteral(["\n    float integratedRadiance(float cosTheta2, float roughness)\n    {\n      return (cosTheta2 - 1.0) / (cosTheta2 * (1.0 - roughness * roughness) - 1.0);\n    }\n    "])))), a.add(_shaderModules_interfaces_js__WEBPACK_IMPORTED_MODULE_0__["glsl"](_templateObject68 || (_templateObject68 = _taggedTemplateLiteral(["\n    vec3 evaluateSpecularIlluminationHemisphere(vec3 ambientGround, vec3 ambientSky, float RdotNG, float roughness)\n    {\n      float cosTheta2 = 1.0 - RdotNG * RdotNG;\n      float intRadTheta = integratedRadiance(cosTheta2, roughness);\n\n      // Calculate the integrated directional radiance of the ground and the sky\n      float ground = RdotNG < 0.0 ? 1.0 - intRadTheta : 1.0 + intRadTheta;\n      float sky = 2.0 - ground;\n      return (ground * ambientGround + sky * ambientSky) * 0.5;\n    }\n    "]))));
      }
      /***/

    },

    /***/
    "K2Cv":
    /*!**************************************************************************!*\
      !*** ./node_modules/@arcgis/core/views/3d/glTF/DefaultLoadingContext.js ***!
      \**************************************************************************/

    /*! exports provided: DefaultLoadingContext */

    /***/
    function K2Cv(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "DefaultLoadingContext", function () {
        return n;
      });
      /* harmony import */


      var _core_maybe_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ../../../core/maybe.js */
      "srIe");
      /* harmony import */


      var _core_Error_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ../../../core/Error.js */
      "zlDU");
      /* harmony import */


      var _core_urlUtils_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ../../../core/urlUtils.js */
      "4EHJ");
      /* harmony import */


      var _core_promiseUtils_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ../../../core/promiseUtils.js */
      "9MzC");
      /* harmony import */


      var _request_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ../../../request.js */
      "Lqtk");
      /* harmony import */


      var _core_asyncUtils_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ../../../core/asyncUtils.js */
      "eSsm");
      /*
      All material copyright ESRI, All Rights Reserved, unless otherwise specified.
      See https://js.arcgis.com/4.18/esri/copyright.txt for details.
      */


      var n = /*#__PURE__*/function () {
        function n(r) {
          _classCallCheck(this, n);

          this.streamDataRequester = r;
        }

        _createClass(n, [{
          key: "loadJSON",
          value: function () {
            var _loadJSON = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee23(r, e) {
              return regeneratorRuntime.wrap(function _callee23$(_context23) {
                while (1) {
                  switch (_context23.prev = _context23.next) {
                    case 0:
                      return _context23.abrupt("return", this.load("json", r, e));

                    case 1:
                    case "end":
                      return _context23.stop();
                  }
                }
              }, _callee23, this);
            }));

            function loadJSON(_x48, _x49) {
              return _loadJSON.apply(this, arguments);
            }

            return loadJSON;
          }()
        }, {
          key: "loadBinary",
          value: function () {
            var _loadBinary = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee24(r, e) {
              return regeneratorRuntime.wrap(function _callee24$(_context24) {
                while (1) {
                  switch (_context24.prev = _context24.next) {
                    case 0:
                      return _context24.abrupt("return", Object(_core_urlUtils_js__WEBPACK_IMPORTED_MODULE_2__["isDataProtocol"])(r) ? (Object(_core_promiseUtils_js__WEBPACK_IMPORTED_MODULE_3__["throwIfAborted"])(e), Object(_core_urlUtils_js__WEBPACK_IMPORTED_MODULE_2__["dataToArrayBuffer"])(r)) : this.load("binary", r, e));

                    case 1:
                    case "end":
                      return _context24.stop();
                  }
                }
              }, _callee24, this);
            }));

            function loadBinary(_x50, _x51) {
              return _loadBinary.apply(this, arguments);
            }

            return loadBinary;
          }()
        }, {
          key: "loadImage",
          value: function () {
            var _loadImage = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee25(r, e) {
              return regeneratorRuntime.wrap(function _callee25$(_context25) {
                while (1) {
                  switch (_context25.prev = _context25.next) {
                    case 0:
                      return _context25.abrupt("return", this.load("image", r, e));

                    case 1:
                    case "end":
                      return _context25.stop();
                  }
                }
              }, _callee25, this);
            }));

            function loadImage(_x52, _x53) {
              return _loadImage.apply(this, arguments);
            }

            return loadImage;
          }()
        }, {
          key: "load",
          value: function () {
            var _load2 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee26(o, s, t) {
              var _n7;

              return regeneratorRuntime.wrap(function _callee26$(_context26) {
                while (1) {
                  switch (_context26.prev = _context26.next) {
                    case 0:
                      if (!Object(_core_maybe_js__WEBPACK_IMPORTED_MODULE_0__["isNone"])(this.streamDataRequester)) {
                        _context26.next = 4;
                        break;
                      }

                      _context26.next = 3;
                      return Object(_request_js__WEBPACK_IMPORTED_MODULE_4__["default"])(s, {
                        responseType: c[o]
                      });

                    case 3:
                      return _context26.abrupt("return", _context26.sent.data);

                    case 4:
                      _context26.next = 6;
                      return Object(_core_asyncUtils_js__WEBPACK_IMPORTED_MODULE_5__["result"])(this.streamDataRequester.request(s, o, t));

                    case 6:
                      _n7 = _context26.sent;

                      if (!(!0 === _n7.ok)) {
                        _context26.next = 9;
                        break;
                      }

                      return _context26.abrupt("return", _n7.value);

                    case 9:
                      throw Object(_core_promiseUtils_js__WEBPACK_IMPORTED_MODULE_3__["throwIfAbortError"])(_n7.error), new _core_Error_js__WEBPACK_IMPORTED_MODULE_1__["default"]("", "Request for resource failed: ".concat(_n7.error));

                    case 10:
                    case "end":
                      return _context26.stop();
                  }
                }
              }, _callee26, this);
            }));

            function load(_x54, _x55, _x56) {
              return _load2.apply(this, arguments);
            }

            return load;
          }()
        }]);

        return n;
      }();

      var c = {
        image: "image",
        binary: "array-buffer",
        json: "json"
      };
      /***/
    },

    /***/
    "KQYO":
    /*!********************************************************************************************************************!*\
      !*** ./node_modules/@arcgis/core/views/3d/webgl-engine/core/shaderLibrary/shading/EvaluateAmbientLighting.glsl.js ***!
      \********************************************************************************************************************/

    /*! exports provided: EvaluateAmbientLighting */

    /***/
    function KQYO(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "EvaluateAmbientLighting", function () {
        return n;
      });
      /* harmony import */


      var _shaderModules_interfaces_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ../../shaderModules/interfaces.js */
      "OIYib");
      /*
      All material copyright ESRI, All Rights Reserved, unless otherwise specified.
      See https://js.arcgis.com/4.18/esri/copyright.txt for details.
      */


      function n(n, t) {
        var e = n.fragment,
            a = void 0 !== t.lightingSphericalHarmonicsOrder ? t.lightingSphericalHarmonicsOrder : 2;
        0 === a ? (e.uniforms.add("lightingAmbientSH0", "vec3"), e.code.add(_shaderModules_interfaces_js__WEBPACK_IMPORTED_MODULE_0__["glsl"](_templateObject69 || (_templateObject69 = _taggedTemplateLiteral(["\n      vec3 calculateAmbientIrradiance(vec3 normal, float ambientOcclusion) {\n        vec3 ambientLight = 0.282095 * lightingAmbientSH0;\n        return ambientLight * (1.0 - ambientOcclusion);\n      }\n    "]))))) : 1 === a ? (e.uniforms.add("lightingAmbientSH_R", "vec4"), e.uniforms.add("lightingAmbientSH_G", "vec4"), e.uniforms.add("lightingAmbientSH_B", "vec4"), e.code.add(_shaderModules_interfaces_js__WEBPACK_IMPORTED_MODULE_0__["glsl"](_templateObject70 || (_templateObject70 = _taggedTemplateLiteral(["\n      vec3 calculateAmbientIrradiance(vec3 normal, float ambientOcclusion) {\n        vec4 sh0 = vec4(\n          0.282095,\n          0.488603 * normal.x,\n          0.488603 * normal.z,\n          0.488603 * normal.y\n        );\n        vec3 ambientLight = vec3(\n          dot(lightingAmbientSH_R, sh0),\n          dot(lightingAmbientSH_G, sh0),\n          dot(lightingAmbientSH_B, sh0)\n        );\n        return ambientLight * (1.0 - ambientOcclusion);\n      }\n    "]))))) : 2 === a && (e.uniforms.add("lightingAmbientSH0", "vec3"), e.uniforms.add("lightingAmbientSH_R1", "vec4"), e.uniforms.add("lightingAmbientSH_G1", "vec4"), e.uniforms.add("lightingAmbientSH_B1", "vec4"), e.uniforms.add("lightingAmbientSH_R2", "vec4"), e.uniforms.add("lightingAmbientSH_G2", "vec4"), e.uniforms.add("lightingAmbientSH_B2", "vec4"), e.code.add(_shaderModules_interfaces_js__WEBPACK_IMPORTED_MODULE_0__["glsl"](_templateObject71 || (_templateObject71 = _taggedTemplateLiteral(["\n      vec3 calculateAmbientIrradiance(vec3 normal, float ambientOcclusion) {\n        vec3 ambientLight = 0.282095 * lightingAmbientSH0;\n\n        vec4 sh1 = vec4(\n          0.488603 * normal.x,\n          0.488603 * normal.z,\n          0.488603 * normal.y,\n          1.092548 * normal.x * normal.y\n        );\n        vec4 sh2 = vec4(\n          1.092548 * normal.y * normal.z,\n          0.315392 * (3.0 * normal.z * normal.z - 1.0),\n          1.092548 * normal.x * normal.z,\n          0.546274 * (normal.x * normal.x - normal.y * normal.y)\n        );\n        ambientLight += vec3(\n          dot(lightingAmbientSH_R1, sh1),\n          dot(lightingAmbientSH_G1, sh1),\n          dot(lightingAmbientSH_B1, sh1)\n        );\n        ambientLight += vec3(\n          dot(lightingAmbientSH_R2, sh2),\n          dot(lightingAmbientSH_G2, sh2),\n          dot(lightingAmbientSH_B2, sh2)\n        );\n        return ambientLight * (1.0 - ambientOcclusion);\n      }\n    "])))), 1 !== t.pbrMode && 2 !== t.pbrMode || e.code.add(_shaderModules_interfaces_js__WEBPACK_IMPORTED_MODULE_0__["glsl"](_templateObject72 || (_templateObject72 = _taggedTemplateLiteral(["\n        const vec3 skyTransmittance = vec3(0.9, 0.9, 1.0);\n\n        vec3 calculateAmbientRadiance(float ambientOcclusion)\n        {\n          vec3 ambientLight = 1.2 * (0.282095 * lightingAmbientSH0) - 0.2;\n          return ambientLight *= (1.0 - ambientOcclusion) * skyTransmittance;\n        }\n      "])))));
      }
      /***/

    },

    /***/
    "L5gG":
    /*!***************************************************************************************************************!*\
      !*** ./node_modules/@arcgis/core/views/3d/webgl-engine/core/shaderLibrary/util/ScreenSizePerspective.glsl.js ***!
      \***************************************************************************************************************/

    /*! exports provided: ScreenSizePerspective */

    /***/
    function L5gG(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ScreenSizePerspective", function () {
        return a;
      });
      /* harmony import */


      var _shaderModules_interfaces_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ../../shaderModules/interfaces.js */
      "OIYib");
      /* harmony import */


      var _materials_internal_MaterialUtil_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ../../../materials/internal/MaterialUtil.js */
      "fFEv");
      /*
      All material copyright ESRI, All Rights Reserved, unless otherwise specified.
      See https://js.arcgis.com/4.18/esri/copyright.txt for details.
      */


      function a(r) {
        r.vertex.code.add(_shaderModules_interfaces_js__WEBPACK_IMPORTED_MODULE_0__["glsl"](_templateObject73 || (_templateObject73 = _taggedTemplateLiteral(["\n    float screenSizePerspectiveMinSize(float size, vec4 factor) {\n      float nonZeroSize = 1.0 - step(size, 0.0);\n\n      return (\n        factor.z * (\n          1.0 +\n          // Multiply by nzs ensures if size is 0, then we ignore proportionally scaled padding\n          nonZeroSize *\n          2.0 * factor.w / (\n            size + (1.0 - nonZeroSize) // Adding 1 - nzs ensures we divide either by size, or by 1\n          )\n        )\n      );\n    }\n  "])))), r.vertex.code.add(_shaderModules_interfaces_js__WEBPACK_IMPORTED_MODULE_0__["glsl"](_templateObject74 || (_templateObject74 = _taggedTemplateLiteral(["\n    float screenSizePerspectiveViewAngleDependentFactor(float absCosAngle) {\n      return absCosAngle * absCosAngle * absCosAngle;\n    }\n  "])))), r.vertex.code.add(_shaderModules_interfaces_js__WEBPACK_IMPORTED_MODULE_0__["glsl"](_templateObject75 || (_templateObject75 = _taggedTemplateLiteral(["\n    vec4 screenSizePerspectiveScaleFactor(float absCosAngle, float distanceToCamera, vec4 params) {\n      return vec4(\n        min(params.x / (distanceToCamera - params.y), 1.0),\n        screenSizePerspectiveViewAngleDependentFactor(absCosAngle),\n        params.z,\n        params.w\n      );\n    }\n  "])))), r.vertex.code.add(_shaderModules_interfaces_js__WEBPACK_IMPORTED_MODULE_0__["glsl"](_templateObject76 || (_templateObject76 = _taggedTemplateLiteral(["\n    float applyScreenSizePerspectiveScaleFactorFloat(float size, vec4 factor) {\n      return max(mix(size * factor.x, size, factor.y), screenSizePerspectiveMinSize(size, factor));\n    }\n  "])))), r.vertex.code.add(_shaderModules_interfaces_js__WEBPACK_IMPORTED_MODULE_0__["glsl"](_templateObject77 || (_templateObject77 = _taggedTemplateLiteral(["\n    float screenSizePerspectiveScaleFloat(float size, float absCosAngle, float distanceToCamera, vec4 params) {\n      return applyScreenSizePerspectiveScaleFactorFloat(\n        size,\n        screenSizePerspectiveScaleFactor(absCosAngle, distanceToCamera, params)\n      );\n    }\n  "])))), r.vertex.code.add(_shaderModules_interfaces_js__WEBPACK_IMPORTED_MODULE_0__["glsl"](_templateObject78 || (_templateObject78 = _taggedTemplateLiteral(["\n    vec2 applyScreenSizePerspectiveScaleFactorVec2(vec2 size, vec4 factor) {\n      return mix(size * clamp(factor.x, screenSizePerspectiveMinSize(size.y, factor) / size.y, 1.0), size, factor.y);\n    }\n  "])))), r.vertex.code.add(_shaderModules_interfaces_js__WEBPACK_IMPORTED_MODULE_0__["glsl"](_templateObject79 || (_templateObject79 = _taggedTemplateLiteral(["\n    vec2 screenSizePerspectiveScaleVec2(vec2 size, float absCosAngle, float distanceToCamera, vec4 params) {\n      return applyScreenSizePerspectiveScaleFactorVec2(size, screenSizePerspectiveScaleFactor(absCosAngle, distanceToCamera, params));\n    }\n  "]))));
      }

      !function (e) {
        e.bindUniforms = function (e, a) {
          if (a.screenSizePerspective) {
            Object(_materials_internal_MaterialUtil_js__WEBPACK_IMPORTED_MODULE_1__["bindScreenSizePerspective"])(a.screenSizePerspective, e, "screenSizePerspective");
            var s = a.screenSizePerspectiveAlignment || a.screenSizePerspective;
            Object(_materials_internal_MaterialUtil_js__WEBPACK_IMPORTED_MODULE_1__["bindScreenSizePerspective"])(s, e, "screenSizePerspectiveAlignment");
          }
        };
      }(a || (a = {}));
      /***/
    },

    /***/
    "NILb":
    /*!*****************************************************!*\
      !*** ./node_modules/@arcgis/core/chunks/frustum.js ***!
      \*****************************************************/

    /*! exports provided: a, b, c, d, e, f, g, h, i, j, k, p, r */

    /***/
    function NILb(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "a", function () {
        return S;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "b", function () {
        return A;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "c", function () {
        return d;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "d", function () {
        return O;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "e", function () {
        return q;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "f", function () {
        return V;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "g", function () {
        return P;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "h", function () {
        return R;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "i", function () {
        return x;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "j", function () {
        return B;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "k", function () {
        return z;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "p", function () {
        return I;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "r", function () {
        return w;
      });
      /* harmony import */


      var _vec3f64_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ./vec3f64.js */
      "Cy1f");
      /* harmony import */


      var _vec3_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./vec3.js */
      "5DEt");
      /* harmony import */


      var _mat4_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./mat4.js */
      "15Hh");
      /* harmony import */


      var _core_ObjectStack_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ../core/ObjectStack.js */
      "IRkY");
      /* harmony import */


      var _vec4f64_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ./vec4f64.js */
      "D8Ta");
      /* harmony import */


      var _vec4_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ./vec4.js */
      "dXfX");
      /* harmony import */


      var _views_3d_support_stack_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ../views/3d/support/stack.js */
      "8JEK");
      /* harmony import */


      var _plane_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! ./plane.js */
      "cKtl");
      /* harmony import */


      var _clipRay_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! ./clipRay.js */
      "Gbm8");
      /*
      All material copyright ESRI, All Rights Reserved, unless otherwise specified.
      See https://js.arcgis.com/4.18/esri/copyright.txt for details.
      */


      function d(s) {
        if (s) {
          var _r14 = s.planes,
              e = s.points;
          return {
            planes: [Object(_plane_js__WEBPACK_IMPORTED_MODULE_7__["c"])(_r14[0]), Object(_plane_js__WEBPACK_IMPORTED_MODULE_7__["c"])(_r14[1]), Object(_plane_js__WEBPACK_IMPORTED_MODULE_7__["c"])(_r14[2]), Object(_plane_js__WEBPACK_IMPORTED_MODULE_7__["c"])(_r14[3]), Object(_plane_js__WEBPACK_IMPORTED_MODULE_7__["c"])(_r14[4]), Object(_plane_js__WEBPACK_IMPORTED_MODULE_7__["c"])(_r14[5])],
            points: [Object(_vec3f64_js__WEBPACK_IMPORTED_MODULE_0__["b"])(e[0]), Object(_vec3f64_js__WEBPACK_IMPORTED_MODULE_0__["b"])(e[1]), Object(_vec3f64_js__WEBPACK_IMPORTED_MODULE_0__["b"])(e[2]), Object(_vec3f64_js__WEBPACK_IMPORTED_MODULE_0__["b"])(e[3]), Object(_vec3f64_js__WEBPACK_IMPORTED_MODULE_0__["b"])(e[4]), Object(_vec3f64_js__WEBPACK_IMPORTED_MODULE_0__["b"])(e[5]), Object(_vec3f64_js__WEBPACK_IMPORTED_MODULE_0__["b"])(e[6]), Object(_vec3f64_js__WEBPACK_IMPORTED_MODULE_0__["b"])(e[7])]
          };
        }

        return {
          planes: [Object(_plane_js__WEBPACK_IMPORTED_MODULE_7__["c"])(), Object(_plane_js__WEBPACK_IMPORTED_MODULE_7__["c"])(), Object(_plane_js__WEBPACK_IMPORTED_MODULE_7__["c"])(), Object(_plane_js__WEBPACK_IMPORTED_MODULE_7__["c"])(), Object(_plane_js__WEBPACK_IMPORTED_MODULE_7__["c"])(), Object(_plane_js__WEBPACK_IMPORTED_MODULE_7__["c"])()],
          points: [Object(_vec3f64_js__WEBPACK_IMPORTED_MODULE_0__["c"])(), Object(_vec3f64_js__WEBPACK_IMPORTED_MODULE_0__["c"])(), Object(_vec3f64_js__WEBPACK_IMPORTED_MODULE_0__["c"])(), Object(_vec3f64_js__WEBPACK_IMPORTED_MODULE_0__["c"])(), Object(_vec3f64_js__WEBPACK_IMPORTED_MODULE_0__["c"])(), Object(_vec3f64_js__WEBPACK_IMPORTED_MODULE_0__["c"])(), Object(_vec3f64_js__WEBPACK_IMPORTED_MODULE_0__["c"])(), Object(_vec3f64_js__WEBPACK_IMPORTED_MODULE_0__["c"])()]
        };
      }

      function P(t) {
        var r = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : d();
        return R(t.planes, t.points, r);
      }

      function R(t, r) {
        var e = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : d();

        for (var _r15 = 0; _r15 < 6; _r15++) {
          Object(_plane_js__WEBPACK_IMPORTED_MODULE_7__["h"])(t[_r15], e.planes[_r15]);
        }

        for (var _t31 = 0; _t31 < 8; _t31++) {
          Object(_vec3_js__WEBPACK_IMPORTED_MODULE_1__["g"])(e.points[_t31], r[_t31]);
        }

        return e;
      }

      function S(t, r) {
        var s = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : d();
        var a = s.points,
            i = Object(_mat4_js__WEBPACK_IMPORTED_MODULE_2__["m"])(_views_3d_support_stack_js__WEBPACK_IMPORTED_MODULE_6__["sm4d"].get(), r, t);
        Object(_mat4_js__WEBPACK_IMPORTED_MODULE_2__["a"])(i, i);

        for (var _t32 = 0; _t32 < 8; ++_t32) {
          var _r16 = Object(_vec4_js__WEBPACK_IMPORTED_MODULE_5__["t"])(_views_3d_support_stack_js__WEBPACK_IMPORTED_MODULE_6__["sv4d"].get(), L[_t32], i);

          Object(_vec3_js__WEBPACK_IMPORTED_MODULE_1__["s"])(a[_t32], _r16[0] / _r16[3], _r16[1] / _r16[3], _r16[2] / _r16[3]);
        }

        return w(s), s;
      }

      function w(t) {
        var r = t.planes,
            s = t.points;
        Object(_plane_js__WEBPACK_IMPORTED_MODULE_7__["j"])(s[4], s[0], s[3], r[0]), Object(_plane_js__WEBPACK_IMPORTED_MODULE_7__["j"])(s[1], s[5], s[6], r[1]), Object(_plane_js__WEBPACK_IMPORTED_MODULE_7__["j"])(s[4], s[5], s[1], r[2]), Object(_plane_js__WEBPACK_IMPORTED_MODULE_7__["j"])(s[3], s[2], s[6], r[3]), Object(_plane_js__WEBPACK_IMPORTED_MODULE_7__["j"])(s[0], s[1], s[2], r[4]), Object(_plane_js__WEBPACK_IMPORTED_MODULE_7__["j"])(s[5], s[4], s[7], r[5]);
      }

      function x(t, r) {
        for (var s = 0; s < 6; s++) {
          if (Object(_plane_js__WEBPACK_IMPORTED_MODULE_7__["k"])(t[s], r)) return !1;
        }

        return !0;
      }

      function A(t, r) {
        return C(t, Object(_clipRay_js__WEBPACK_IMPORTED_MODULE_8__["f"])(r, M.get()));
      }

      function B(t, r) {
        for (var s = 0; s < 6; s++) {
          var e = t[s];
          if (!Object(_plane_js__WEBPACK_IMPORTED_MODULE_7__["l"])(e, r)) return !1;
        }

        return !0;
      }

      function O(t, r, s) {
        return C(t, Object(_clipRay_js__WEBPACK_IMPORTED_MODULE_8__["a"])(r, s, M.get()));
      }

      function q(t, r) {
        for (var s = 0; s < 6; s++) {
          if (Object(_plane_js__WEBPACK_IMPORTED_MODULE_7__["m"])(t[s], r) > 0) return !1;
        }

        return !0;
      }

      function z(t, r) {
        for (var s = 0; s < 6; s++) {
          if (Object(_plane_js__WEBPACK_IMPORTED_MODULE_7__["o"])(t[s], r)) return !1;
        }

        return !0;
      }

      function C(t, r) {
        for (var s = 0; s < 6; s++) {
          if (!Object(_plane_js__WEBPACK_IMPORTED_MODULE_7__["q"])(t[s], r)) return !1;
        }

        return !0;
      }

      var I = {
        bottom: [5, 1, 0, 4],
        near: [0, 1, 2, 3],
        far: [5, 4, 7, 6],
        right: [1, 5, 6, 2],
        left: [4, 0, 3, 7],
        top: [7, 3, 2, 6]
      },
          L = [Object(_vec4f64_js__WEBPACK_IMPORTED_MODULE_4__["b"])(-1, -1, -1, 1), Object(_vec4f64_js__WEBPACK_IMPORTED_MODULE_4__["b"])(1, -1, -1, 1), Object(_vec4f64_js__WEBPACK_IMPORTED_MODULE_4__["b"])(1, 1, -1, 1), Object(_vec4f64_js__WEBPACK_IMPORTED_MODULE_4__["b"])(-1, 1, -1, 1), Object(_vec4f64_js__WEBPACK_IMPORTED_MODULE_4__["b"])(-1, -1, 1, 1), Object(_vec4f64_js__WEBPACK_IMPORTED_MODULE_4__["b"])(1, -1, 1, 1), Object(_vec4f64_js__WEBPACK_IMPORTED_MODULE_4__["b"])(1, 1, 1, 1), Object(_vec4f64_js__WEBPACK_IMPORTED_MODULE_4__["b"])(-1, 1, 1, 1)],
          M = new _core_ObjectStack_js__WEBPACK_IMPORTED_MODULE_3__["ObjectStack"](_clipRay_js__WEBPACK_IMPORTED_MODULE_8__["b"]);
      var V = Object.freeze({
        __proto__: null,
        create: d,
        copy: P,
        fromValues: R,
        fromMatrix: S,
        recomputePlanes: w,
        intersectsSphere: x,
        intersectsRay: A,
        intersectClipRay: B,
        intersectsLineSegment: O,
        intersectsPoint: q,
        intersectsAABB: z,
        planePointIndices: I
      });
      /***/
    },

    /***/
    "NbNv":
    /*!*************************************************************************!*\
      !*** ./node_modules/@arcgis/core/views/3d/webgl-engine/lib/Material.js ***!
      \*************************************************************************/

    /*! exports provided: Material, materialParametersDefaults, materialPredicate */

    /***/
    function NbNv(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "Material", function () {
        return a;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "materialParametersDefaults", function () {
        return d;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "materialPredicate", function () {
        return n;
      });
      /* harmony import */


      var _core_maybe_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ../../../../core/maybe.js */
      "srIe");
      /* harmony import */


      var _DefaultVertexAttributeLocations_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./DefaultVertexAttributeLocations.js */
      "+h6m");
      /* harmony import */


      var _IdGen_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./IdGen.js */
      "VHS5");
      /* harmony import */


      var _materials_internal_MaterialUtil_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ../materials/internal/MaterialUtil.js */
      "fFEv");
      /*
      All material copyright ESRI, All Rights Reserved, unless otherwise specified.
      See https://js.arcgis.com/4.18/esri/copyright.txt for details.
      */


      var a = /*#__PURE__*/function () {
        function a(e, t, s) {
          _classCallCheck(this, a);

          this.supportsEdges = !1, this._visible = !0, this._renderPriority = 0, this._insertOrder = 0, this._vertexAttributeLocations = _DefaultVertexAttributeLocations_js__WEBPACK_IMPORTED_MODULE_1__["Default3D"], this.id = a._idGen.gen(e), this._params = Object(_materials_internal_MaterialUtil_js__WEBPACK_IMPORTED_MODULE_3__["copyParameters"])(t, s), this.validateParameterValues(this._params);
        }

        _createClass(a, [{
          key: "dispose",
          value: function dispose() {}
        }, {
          key: "params",
          get: function get() {
            return this._params;
          }
        }, {
          key: "update",
          value: function update() {
            return !1;
          }
        }, {
          key: "setParameterValues",
          value: function setParameterValues(e) {
            Object(_materials_internal_MaterialUtil_js__WEBPACK_IMPORTED_MODULE_3__["updateParameters"])(this._params, e) && (this.validateParameterValues(this._params), this.parametersChanged());
          }
        }, {
          key: "validateParameterValues",
          value: function validateParameterValues() {}
        }, {
          key: "visible",
          get: function get() {
            return this._visible;
          },
          set: function set(e) {
            e !== this._visible && (this._visible = e, this.parametersChanged());
          }
        }, {
          key: "isVisibleInPass",
          value: function isVisibleInPass(e) {
            return !0;
          }
        }, {
          key: "renderOccluded",
          get: function get() {
            return this.params.renderOccluded;
          }
        }, {
          key: "renderPriority",
          get: function get() {
            return this._renderPriority;
          },
          set: function set(e) {
            e !== this._renderPriority && (this._renderPriority = e, this.parametersChanged());
          }
        }, {
          key: "insertOrder",
          get: function get() {
            return this._insertOrder;
          },
          set: function set(e) {
            e !== this._insertOrder && (this._insertOrder = e, this.parametersChanged());
          }
        }, {
          key: "vertexAttributeLocations",
          get: function get() {
            return this._vertexAttributeLocations;
          }
        }, {
          key: "isVisible",
          value: function isVisible() {
            return this._visible;
          }
        }, {
          key: "parametersChanged",
          value: function parametersChanged() {
            Object(_core_maybe_js__WEBPACK_IMPORTED_MODULE_0__["isSome"])(this.materialRepository) && this.materialRepository.materialChanged(this);
          }
        }]);

        return a;
      }();

      function n(e, r) {
        return e.isVisible() && e.isVisibleInPass(r.pass) && 0 != (e.renderOccluded & r.renderOccludedMask);
      }

      a._idGen = new _IdGen_js__WEBPACK_IMPORTED_MODULE_2__["IdGen"]();
      var d = {
        renderOccluded: 1
      };
      /***/
    },

    /***/
    "NiZE":
    /*!**********************************************************************************************************!*\
      !*** ./node_modules/@arcgis/core/views/3d/webgl-engine/core/shaderLibrary/util/MixExternalColor.glsl.js ***!
      \**********************************************************************************************************/

    /*! exports provided: MixExternalColor */

    /***/
    function NiZE(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "MixExternalColor", function () {
        return i;
      });
      /* harmony import */


      var _shaderModules_interfaces_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ../../shaderModules/interfaces.js */
      "OIYib");
      /* harmony import */


      var _ColorConversion_glsl_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./ColorConversion.glsl.js */
      "Q3fD");
      /*
      All material copyright ESRI, All Rights Reserved, unless otherwise specified.
      See https://js.arcgis.com/4.18/esri/copyright.txt for details.
      */


      function i(i) {
        i.include(_ColorConversion_glsl_js__WEBPACK_IMPORTED_MODULE_1__["ColorConversion"]), i.code.add(_shaderModules_interfaces_js__WEBPACK_IMPORTED_MODULE_0__["glsl"](_templateObject80 || (_templateObject80 = _taggedTemplateLiteral(["\n    vec3 mixExternalColor(vec3 internalColor, vec3 textureColor, vec3 externalColor, int mode) {\n      // workaround for artifacts in OSX using Intel Iris Pro\n      // see: https://devtopia.esri.com/WebGIS/arcgis-js-api/issues/10475\n      vec3 internalMixed = internalColor * textureColor;\n      vec3 allMixed = internalMixed * externalColor;\n\n      if (mode == ", ") {\n        return allMixed;\n      }\n      else if (mode == ", ") {\n        return internalMixed;\n      }\n      else if (mode == ", ") {\n        return externalColor;\n      }\n      else {\n        // tint (or something invalid)\n        float vIn = rgb2v(internalMixed);\n        vec3 hsvTint = rgb2hsv(externalColor);\n        vec3 hsvOut = vec3(hsvTint.x, hsvTint.y, vIn * hsvTint.z);\n        return hsv2rgb(hsvOut);\n      }\n    }\n\n    float mixExternalOpacity(float internalOpacity, float textureOpacity, float externalOpacity, int mode) {\n      // workaround for artifacts in OSX using Intel Iris Pro\n      // see: https://devtopia.esri.com/WebGIS/arcgis-js-api/issues/10475\n      float internalMixed = internalOpacity * textureOpacity;\n      float allMixed = internalMixed * externalOpacity;\n\n      if (mode == ", ") {\n        return internalMixed;\n      }\n      else if (mode == ", ") {\n        return externalOpacity;\n      }\n      else {\n        // multiply or tint (or something invalid)\n        return allMixed;\n      }\n    }\n  "])), _shaderModules_interfaces_js__WEBPACK_IMPORTED_MODULE_0__["glsl"]["int"](1), _shaderModules_interfaces_js__WEBPACK_IMPORTED_MODULE_0__["glsl"]["int"](2), _shaderModules_interfaces_js__WEBPACK_IMPORTED_MODULE_0__["glsl"]["int"](3), _shaderModules_interfaces_js__WEBPACK_IMPORTED_MODULE_0__["glsl"]["int"](2), _shaderModules_interfaces_js__WEBPACK_IMPORTED_MODULE_0__["glsl"]["int"](3)));
      }
      /***/

    },

    /***/
    "OIYib":
    /*!******************************************************************************************!*\
      !*** ./node_modules/@arcgis/core/views/3d/webgl-engine/core/shaderModules/interfaces.js ***!
      \******************************************************************************************/

    /*! exports provided: glsl */

    /***/
    function OIYib(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "glsl", function () {
        return t;
      });
      /*
      All material copyright ESRI, All Rights Reserved, unless otherwise specified.
      See https://js.arcgis.com/4.18/esri/copyright.txt for details.
      */


      function t(t) {
        var o = "";

        for (var _r17 = 0; _r17 < (arguments.length <= 1 ? 0 : arguments.length - 1); _r17++) {
          o += t[_r17] + (_r17 + 1 < 1 || arguments.length <= _r17 + 1 ? undefined : arguments[_r17 + 1]);
        }

        return o += t[t.length - 1], o;
      }

      !function (t) {
        t["int"] = function (t) {
          return Math.round(t).toString();
        }, t["float"] = function (t) {
          return t.toPrecision(8);
        };
      }(t || (t = {}));
      /***/
    },

    /***/
    "PDsV":
    /*!***********************************************************!*\
      !*** ./node_modules/@arcgis/core/views/3d/glTF/loader.js ***!
      \***********************************************************/

    /*! exports provided: load */

    /***/
    function PDsV(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "load", function () {
        return u;
      });
      /* harmony import */


      var _core_maybe_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ../../../core/maybe.js */
      "srIe");
      /* harmony import */


      var _core_promiseUtils_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ../../../core/promiseUtils.js */
      "9MzC");
      /* harmony import */


      var _chunks_mat4f64_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ../../../chunks/mat4f64.js */
      "r+FG");
      /* harmony import */


      var _DefaultErrorContext_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./DefaultErrorContext.js */
      "QgcX");
      /* harmony import */


      var _LoaderResult_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ./LoaderResult.js */
      "exm0");
      /* harmony import */


      var _internal_Resource_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ./internal/Resource.js */
      "Gze9");
      /*
      All material copyright ESRI, All Rights Reserved, unless otherwise specified.
      See https://js.arcgis.com/4.18/esri/copyright.txt for details.
      */


      var l = 0;

      function u(_x57, _x58) {
        return _u3.apply(this, arguments);
      }

      function _u3() {
        _u3 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee30(s, a) {
          var i,
              u,
              p,
              f,
              T,
              _args30 = arguments;
          return regeneratorRuntime.wrap(function _callee30$(_context30) {
            while (1) {
              switch (_context30.prev = _context30.next) {
                case 0:
                  i = _args30.length > 2 && _args30[2] !== undefined ? _args30[2] : {};
                  _context30.next = 3;
                  return _internal_Resource_js__WEBPACK_IMPORTED_MODULE_5__["Resource"].load(s, x, a, i);

                case 3:
                  u = _context30.sent;
                  p = "gltf_" + l++;
                  f = {
                    lods: [],
                    materials: new Map(),
                    textures: new Map(),
                    meta: c(u)
                  };
                  T = !(!u.json.asset.extras || "symbolResource" !== u.json.asset.extras.ESRI_type);
                  _context30.next = 9;
                  return function () {
                    var _ref9 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee28(e, t) {
                      var r, s, a, _iterator6, _step6, _e24, _t33, _s5, _e25, i, _i11;

                      return regeneratorRuntime.wrap(function _callee28$(_context28) {
                        while (1) {
                          switch (_context28.prev = _context28.next) {
                            case 0:
                              _i11 = function _i13() {
                                _i11 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee27(o, s) {
                                  var a, n, _e26, _iterator7, _step7, _o8, _iterator8, _step8, _e27;

                                  return regeneratorRuntime.wrap(function _callee27$(_context27) {
                                    while (1) {
                                      switch (_context27.prev = _context27.next) {
                                        case 0:
                                          a = r.nodes[o], n = e.getNodeTransform(o);

                                          if (!(x.warnUnsupportedIf(null != a.weights, "Morph targets are not supported."), null != a.mesh)) {
                                            _context27.next = 20;
                                            break;
                                          }

                                          _e26 = r.meshes[a.mesh];
                                          _iterator7 = _createForOfIteratorHelper(_e26.primitives);
                                          _context27.prev = 4;

                                          _iterator7.s();

                                        case 6:
                                          if ((_step7 = _iterator7.n()).done) {
                                            _context27.next = 12;
                                            break;
                                          }

                                          _o8 = _step7.value;
                                          _context27.next = 10;
                                          return t(_o8, n, s, _e26.name);

                                        case 10:
                                          _context27.next = 6;
                                          break;

                                        case 12:
                                          _context27.next = 17;
                                          break;

                                        case 14:
                                          _context27.prev = 14;
                                          _context27.t0 = _context27["catch"](4);

                                          _iterator7.e(_context27.t0);

                                        case 17:
                                          _context27.prev = 17;

                                          _iterator7.f();

                                          return _context27.finish(17);

                                        case 20:
                                          _iterator8 = _createForOfIteratorHelper(a.children || []);
                                          _context27.prev = 21;

                                          _iterator8.s();

                                        case 23:
                                          if ((_step8 = _iterator8.n()).done) {
                                            _context27.next = 29;
                                            break;
                                          }

                                          _e27 = _step8.value;
                                          _context27.next = 27;
                                          return i(_e27, s);

                                        case 27:
                                          _context27.next = 23;
                                          break;

                                        case 29:
                                          _context27.next = 34;
                                          break;

                                        case 31:
                                          _context27.prev = 31;
                                          _context27.t1 = _context27["catch"](21);

                                          _iterator8.e(_context27.t1);

                                        case 34:
                                          _context27.prev = 34;

                                          _iterator8.f();

                                          return _context27.finish(34);

                                        case 37:
                                        case "end":
                                          return _context27.stop();
                                      }
                                    }
                                  }, _callee27, null, [[4, 14, 17, 20], [21, 31, 34, 37]]);
                                }));
                                return _i11.apply(this, arguments);
                              };

                              i = function _i12(_x61, _x62) {
                                return _i11.apply(this, arguments);
                              };

                              r = e.json, s = r.scenes[r.scene || 0].nodes, a = s.length > 1;
                              _iterator6 = _createForOfIteratorHelper(s);
                              _context28.prev = 4;

                              _iterator6.s();

                            case 6:
                              if ((_step6 = _iterator6.n()).done) {
                                _context28.next = 14;
                                break;
                              }

                              _e24 = _step6.value;
                              _t33 = r.nodes[_e24], _s5 = [i(_e24, 0)];

                              if (m(_t33) && !a) {
                                _e25 = _t33.extensions.MSFT_lod.ids;

                                _s5.push.apply(_s5, _toConsumableArray(_e25.map(function (e, t) {
                                  return i(e, t + 1);
                                })));
                              }

                              _context28.next = 12;
                              return Object(_core_promiseUtils_js__WEBPACK_IMPORTED_MODULE_1__["all"])(_s5);

                            case 12:
                              _context28.next = 6;
                              break;

                            case 14:
                              _context28.next = 19;
                              break;

                            case 16:
                              _context28.prev = 16;
                              _context28.t0 = _context28["catch"](4);

                              _iterator6.e(_context28.t0);

                            case 19:
                              _context28.prev = 19;

                              _iterator6.f();

                              return _context28.finish(19);

                            case 22:
                            case "end":
                              return _context28.stop();
                          }
                        }
                      }, _callee28, null, [[4, 16, 19, 22]]);
                    }));

                    return function (_x59, _x60) {
                      return _ref9.apply(this, arguments);
                    };
                  }()(u, /*#__PURE__*/function () {
                    var _ref10 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee29(o, s, a, n) {
                      var l, c, m, T, w;
                      return regeneratorRuntime.wrap(function _callee29$(_context29) {
                        while (1) {
                          switch (_context29.prev = _context29.next) {
                            case 0:
                              l = void 0 !== o.mode ? o.mode : 4, c = function (e) {
                                switch (e) {
                                  case 4:
                                  case 5:
                                  case 6:
                                    return e;

                                  default:
                                    return null;
                                }
                              }(l);

                              if (!Object(_core_maybe_js__WEBPACK_IMPORTED_MODULE_0__["isNone"])(c)) {
                                _context29.next = 3;
                                break;
                              }

                              return _context29.abrupt("return", void x.warnUnsupported("Unsupported primitive mode (" + h[l] + "). Skipping primitive."));

                            case 3:
                              if (u.hasPositions(o)) {
                                _context29.next = 5;
                                break;
                              }

                              return _context29.abrupt("return", void x.warn("Skipping primitive without POSITION vertex attribute."));

                            case 5:
                              _context29.next = 7;
                              return u.getMaterial(o, i);

                            case 7:
                              m = _context29.sent;
                              _context29.t0 = Object(_chunks_mat4f64_js__WEBPACK_IMPORTED_MODULE_2__["b"])(s);
                              _context29.next = 11;
                              return u.getPositionData(o, i);

                            case 11:
                              _context29.t1 = _context29.sent;
                              _context29.t2 = {
                                position: _context29.t1,
                                normal: null,
                                texCoord0: null,
                                color: null,
                                tangent: null
                              };
                              _context29.next = 15;
                              return u.getIndexData(o, i);

                            case 15:
                              _context29.t3 = _context29.sent;
                              _context29.t4 = c;
                              _context29.t5 = d(f, m, p);
                              T = {
                                transform: _context29.t0,
                                attributes: _context29.t2,
                                indices: _context29.t3,
                                primitiveType: _context29.t4,
                                material: _context29.t5
                              };
                              _context29.t6 = u.hasNormals(o);

                              if (!_context29.t6) {
                                _context29.next = 24;
                                break;
                              }

                              _context29.next = 23;
                              return u.getNormalData(o, i);

                            case 23:
                              T.attributes.normal = _context29.sent;

                            case 24:
                              _context29.t7 = u.hasTangents(o);

                              if (!_context29.t7) {
                                _context29.next = 29;
                                break;
                              }

                              _context29.next = 28;
                              return u.getTangentData(o, i);

                            case 28:
                              T.attributes.tangent = _context29.sent;

                            case 29:
                              _context29.t8 = u.hasTextureCoordinates(o);

                              if (!_context29.t8) {
                                _context29.next = 34;
                                break;
                              }

                              _context29.next = 33;
                              return u.getTextureCoordinates(o, i);

                            case 33:
                              T.attributes.texCoord0 = _context29.sent;

                            case 34:
                              _context29.t9 = u.hasVertexColors(o);

                              if (!_context29.t9) {
                                _context29.next = 39;
                                break;
                              }

                              _context29.next = 38;
                              return u.getVertexColors(o, i);

                            case 38:
                              T.attributes.color = _context29.sent;

                            case 39:
                              w = null;
                              Object(_core_maybe_js__WEBPACK_IMPORTED_MODULE_0__["isSome"])(f.meta) && Object(_core_maybe_js__WEBPACK_IMPORTED_MODULE_0__["isSome"])(f.meta.ESRI_lod) && "screenSpaceRadius" === f.meta.ESRI_lod.metric && (w = f.meta.ESRI_lod.thresholds[a]), f.lods[a] = f.lods[a] || {
                                parts: [],
                                name: n,
                                lodThreshold: w
                              }, f.lods[a].parts.push(T);

                            case 41:
                            case "end":
                              return _context29.stop();
                          }
                        }
                      }, _callee29);
                    }));

                    return function (_x63, _x64, _x65, _x66) {
                      return _ref10.apply(this, arguments);
                    };
                  }());

                case 9:
                  return _context30.abrupt("return", {
                    model: f,
                    meta: {
                      isEsriSymbolResource: T,
                      uri: u.uri
                    },
                    customMeta: {}
                  });

                case 10:
                case "end":
                  return _context30.stop();
              }
            }
          }, _callee30);
        }));
        return _u3.apply(this, arguments);
      }

      function c(t) {
        var o = t.json;
        var r = null;
        return o.nodes.forEach(function (t) {
          var o = t.extras;
          Object(_core_maybe_js__WEBPACK_IMPORTED_MODULE_0__["isSome"])(o) && (o.ESRI_proxyEllipsoid || o.ESRI_lod) && (r = o);
        }), r;
      }

      function m(e) {
        return e.extensions && e.extensions.MSFT_lod && Array.isArray(e.extensions.MSFT_lod.ids);
      }

      function d(e, t, o) {
        var r = function r(t) {
          var r = "".concat(o, "_tex_").concat(t && t.id).concat(t && t.name ? "_" + t.name : "");

          if (t && !e.textures.has(r)) {
            var _o6 = Object(_LoaderResult_js__WEBPACK_IMPORTED_MODULE_4__["makeTextureSource"])(t.data, {
              wrap: {
                s: p(t.wrapS),
                t: p(t.wrapT)
              },
              mipmap: f.some(function (e) {
                return e === t.minFilter;
              }),
              noUnpackFlip: !0
            });

            e.textures.set(r, _o6);
          }

          return r;
        },
            s = "".concat(o, "_mat_").concat(t.id, "_").concat(t.name);

        if (!e.materials.has(s)) {
          var _o7 = Object(_LoaderResult_js__WEBPACK_IMPORTED_MODULE_4__["makeMaterialParameters"])({
            color: [t.color[0], t.color[1], t.color[2]],
            opacity: t.color[3],
            alphaMode: t.alphaMode,
            alphaCutoff: t.alphaCutoff,
            doubleSided: t.doubleSided,
            colorMixMode: t.ESRI_externalColorMixMode,
            textureColor: t.colorTexture ? r(t.colorTexture) : void 0,
            textureNormal: t.normalTexture ? r(t.normalTexture) : void 0,
            textureOcclusion: t.occlusionTexture ? r(t.occlusionTexture) : void 0,
            textureEmissive: t.emissiveTexture ? r(t.emissiveTexture) : void 0,
            textureMetallicRoughness: t.metallicRoughnessTexture ? r(t.metallicRoughnessTexture) : void 0,
            emissiveFactor: [t.emissiveFactor[0], t.emissiveFactor[1], t.emissiveFactor[2]],
            metallicFactor: t.metallicFactor,
            roughnessFactor: t.roughnessFactor
          });

          e.materials.set(s, _o7);
        }

        return s;
      }

      function p(e) {
        if (33071 === e || 33648 === e || 10497 === e) return e;
        x.error("Unexpected TextureSampler WrapMode: ".concat(e));
      }

      var x = new _DefaultErrorContext_js__WEBPACK_IMPORTED_MODULE_3__["DefaultErrorContext"](),
          f = [9987, 9985],
          h = ["POINTS", "LINES", "LINE_LOOP", "LINE_STRIP", "TRIANGLES", "TRIANGLE_STRIP", "TRIANGLE_FAN"];
      /***/
    },

    /***/
    "Q3fD":
    /*!*********************************************************************************************************!*\
      !*** ./node_modules/@arcgis/core/views/3d/webgl-engine/core/shaderLibrary/util/ColorConversion.glsl.js ***!
      \*********************************************************************************************************/

    /*! exports provided: ColorConversion */

    /***/
    function Q3fD(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ColorConversion", function () {
        return c;
      });
      /* harmony import */


      var _shaderModules_interfaces_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ../../shaderModules/interfaces.js */
      "OIYib");
      /*
      All material copyright ESRI, All Rights Reserved, unless otherwise specified.
      See https://js.arcgis.com/4.18/esri/copyright.txt for details.
      */


      function c(c) {
        c.code.add(_shaderModules_interfaces_js__WEBPACK_IMPORTED_MODULE_0__["glsl"](_templateObject81 || (_templateObject81 = _taggedTemplateLiteral(["\n    vec4 premultiplyAlpha(vec4 v) {\n      return vec4(v.rgb * v.a, v.a);\n    }\n\n    // Note: the min in the last line has been added to fix an instability in chrome.\n    // See https://devtopia.esri.com/WebGIS/arcgis-js-api/issues/23911\n    // With proper floating point handling, the value could never be >1.\n    vec3 rgb2hsv(vec3 c) {\n      vec4 K = vec4(0.0, -1.0 / 3.0, 2.0 / 3.0, -1.0);\n      vec4 p = c.g < c.b ? vec4(c.bg, K.wz) : vec4(c.gb, K.xy);\n      vec4 q = c.r < p.x ? vec4(p.xyw, c.r) : vec4(c.r, p.yzx);\n\n      float d = q.x - min(q.w, q.y);\n      float e = 1.0e-10;\n      return vec3(abs(q.z + (q.w - q.y) / (6.0 * d + e)), min(d / (q.x + e), 1.0), q.x);\n    }\n\n    vec3 hsv2rgb(vec3 c) {\n      vec4 K = vec4(1.0, 2.0 / 3.0, 1.0 / 3.0, 3.0);\n      vec3 p = abs(fract(c.xxx + K.xyz) * 6.0 - K.www);\n      return c.z * mix(K.xxx, clamp(p - K.xxx, 0.0, 1.0), c.y);\n    }\n\n    float rgb2v(vec3 c) {\n      return max(c.x, max(c.y, c.z));\n    }\n  "]))));
      }
      /***/

    },

    /***/
    "QFRQ":
    /*!*************************************************!*\
      !*** ./node_modules/@arcgis/core/chunks/ray.js ***!
      \*************************************************/

    /*! exports provided: a, b, c, d, e, f, g, h, i, j, k, l, r, w */

    /***/
    function QFRQ(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "a", function () {
        return v;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "b", function () {
        return R;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "c", function () {
        return l;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "d", function () {
        return k;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "e", function () {
        return S;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "f", function () {
        return _;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "g", function () {
        return w;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "h", function () {
        return h;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "i", function () {
        return b;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "j", function () {
        return y;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "k", function () {
        return F;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "l", function () {
        return A;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "r", function () {
        return O;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "w", function () {
        return j;
      });
      /* harmony import */


      var _core_maybe_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ../core/maybe.js */
      "srIe");
      /* harmony import */


      var _core_screenUtils_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ../core/screenUtils.js */
      "qRWG");
      /* harmony import */


      var _vec3f64_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./vec3f64.js */
      "Cy1f");
      /* harmony import */


      var _vec3_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./vec3.js */
      "5DEt");
      /* harmony import */


      var _core_ObjectStack_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ../core/ObjectStack.js */
      "IRkY");
      /* harmony import */


      var _vec2_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ./vec2.js */
      "M0lq");
      /* harmony import */


      var _views_3d_support_stack_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ../views/3d/support/stack.js */
      "8JEK");
      /*
      All material copyright ESRI, All Rights Reserved, unless otherwise specified.
      See https://js.arcgis.com/4.18/esri/copyright.txt for details.
      */


      function l(r) {
        return r ? {
          origin: Object(_vec3f64_js__WEBPACK_IMPORTED_MODULE_2__["b"])(r.origin),
          direction: Object(_vec3f64_js__WEBPACK_IMPORTED_MODULE_2__["b"])(r.direction)
        } : {
          origin: Object(_vec3f64_js__WEBPACK_IMPORTED_MODULE_2__["c"])(),
          direction: Object(_vec3f64_js__WEBPACK_IMPORTED_MODULE_2__["c"])()
        };
      }

      function j(r, n) {
        var e = E.get();
        return e.origin = r, e.direction = n, e;
      }

      function R(r) {
        var n = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : l();
        return S(r.origin, r.direction, n);
      }

      function b(r, n) {
        var e = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : l();
        return Object(_vec3_js__WEBPACK_IMPORTED_MODULE_3__["g"])(e.origin, r), Object(_vec3_js__WEBPACK_IMPORTED_MODULE_3__["f"])(e.direction, n, r), e;
      }

      function S(r, n) {
        var e = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : l();
        return Object(_vec3_js__WEBPACK_IMPORTED_MODULE_3__["g"])(e.origin, r), Object(_vec3_js__WEBPACK_IMPORTED_MODULE_3__["g"])(e.direction, n), e;
      }

      function v(r, e) {
        var o = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : l();
        return y(r, r.screenToRender(e, Object(_core_screenUtils_js__WEBPACK_IMPORTED_MODULE_1__["castRenderScreenPointArray3"])(_views_3d_support_stack_js__WEBPACK_IMPORTED_MODULE_6__["sv3d"].get())), o);
      }

      function y(e, o) {
        var t = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : l();
        var c = Object(_core_screenUtils_js__WEBPACK_IMPORTED_MODULE_1__["castRenderScreenPointArray3"])(Object(_vec2_js__WEBPACK_IMPORTED_MODULE_5__["c"])(_views_3d_support_stack_js__WEBPACK_IMPORTED_MODULE_6__["sv3d"].get(), o));
        if (c[2] = 0, !e.unprojectFromRenderScreen(c, t.origin)) return null;
        var s = Object(_core_screenUtils_js__WEBPACK_IMPORTED_MODULE_1__["castRenderScreenPointArray3"])(Object(_vec2_js__WEBPACK_IMPORTED_MODULE_5__["c"])(_views_3d_support_stack_js__WEBPACK_IMPORTED_MODULE_6__["sv3d"].get(), o));
        s[2] = 1;
        var a = e.unprojectFromRenderScreen(s, _views_3d_support_stack_js__WEBPACK_IMPORTED_MODULE_6__["sv3d"].get());
        return Object(_core_maybe_js__WEBPACK_IMPORTED_MODULE_0__["isNone"])(a) ? null : (Object(_vec3_js__WEBPACK_IMPORTED_MODULE_3__["f"])(t.direction, a, t.origin), t);
      }

      function w(r, e) {
        var o = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : l();
        return _(r, r.screenToRender(e, Object(_core_screenUtils_js__WEBPACK_IMPORTED_MODULE_1__["castRenderScreenPointArray3"])(_views_3d_support_stack_js__WEBPACK_IMPORTED_MODULE_6__["sv3d"].get())), o);
      }

      function _(n, e) {
        var o = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : l();
        Object(_vec3_js__WEBPACK_IMPORTED_MODULE_3__["g"])(o.origin, n.eye);
        var s = Object(_vec3_js__WEBPACK_IMPORTED_MODULE_3__["s"])(_views_3d_support_stack_js__WEBPACK_IMPORTED_MODULE_6__["sv3d"].get(), e[0], e[1], 1),
            a = n.unprojectFromRenderScreen(s, _views_3d_support_stack_js__WEBPACK_IMPORTED_MODULE_6__["sv3d"].get());
        return Object(_core_maybe_js__WEBPACK_IMPORTED_MODULE_0__["isNone"])(a) ? null : (Object(_vec3_js__WEBPACK_IMPORTED_MODULE_3__["f"])(o.direction, a, o.origin), o);
      }

      function k(r, n) {
        var e = Object(_vec3_js__WEBPACK_IMPORTED_MODULE_3__["c"])(_views_3d_support_stack_js__WEBPACK_IMPORTED_MODULE_6__["sv3d"].get(), Object(_vec3_js__WEBPACK_IMPORTED_MODULE_3__["n"])(_views_3d_support_stack_js__WEBPACK_IMPORTED_MODULE_6__["sv3d"].get(), r.direction), Object(_vec3_js__WEBPACK_IMPORTED_MODULE_3__["f"])(_views_3d_support_stack_js__WEBPACK_IMPORTED_MODULE_6__["sv3d"].get(), n, r.origin));
        return Object(_vec3_js__WEBPACK_IMPORTED_MODULE_3__["d"])(e, e);
      }

      function F(r, n) {
        return Math.sqrt(k(r, n));
      }

      function h(r, n, e) {
        var o = Object(_vec3_js__WEBPACK_IMPORTED_MODULE_3__["d"])(r.direction, Object(_vec3_js__WEBPACK_IMPORTED_MODULE_3__["f"])(e, n, r.origin));
        return Object(_vec3_js__WEBPACK_IMPORTED_MODULE_3__["b"])(e, r.origin, Object(_vec3_js__WEBPACK_IMPORTED_MODULE_3__["a"])(e, r.direction, o)), e;
      }

      function A() {
        return {
          origin: null,
          direction: null
        };
      }

      var E = new _core_ObjectStack_js__WEBPACK_IMPORTED_MODULE_4__["ObjectStack"](A);
      var O = Object.freeze({
        __proto__: null,
        create: l,
        wrap: j,
        copy: R,
        fromPoints: b,
        fromValues: S,
        fromScreen: v,
        fromRender: y,
        fromScreenAtEye: w,
        fromRenderAtEye: _,
        distance2: k,
        distance: F,
        closestPoint: h,
        createWrapper: A
      });
      /***/
    },

    /***/
    "QgcX":
    /*!************************************************************************!*\
      !*** ./node_modules/@arcgis/core/views/3d/glTF/DefaultErrorContext.js ***!
      \************************************************************************/

    /*! exports provided: DefaultErrorContext */

    /***/
    function QgcX(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "DefaultErrorContext", function () {
        return t;
      });
      /* harmony import */


      var _core_Logger_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ../../../core/Logger.js */
      "6S2I");
      /* harmony import */


      var _core_Error_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ../../../core/Error.js */
      "zlDU");
      /*
      All material copyright ESRI, All Rights Reserved, unless otherwise specified.
      See https://js.arcgis.com/4.18/esri/copyright.txt for details.
      */


      var o = _core_Logger_js__WEBPACK_IMPORTED_MODULE_0__["default"].getLogger("esri.views.3d.glTF");

      var t = /*#__PURE__*/function () {
        function t() {
          _classCallCheck(this, t);
        }

        _createClass(t, [{
          key: "error",
          value: function error(r) {
            throw new _core_Error_js__WEBPACK_IMPORTED_MODULE_1__["default"]("gltf-loader-error", r);
          }
        }, {
          key: "errorUnsupported",
          value: function errorUnsupported(r) {
            throw new _core_Error_js__WEBPACK_IMPORTED_MODULE_1__["default"]("gltf-loader-unsupported-feature", r);
          }
        }, {
          key: "errorUnsupportedIf",
          value: function errorUnsupportedIf(r, e) {
            r && this.errorUnsupported(e);
          }
        }, {
          key: "assert",
          value: function assert(r, e) {
            r || this.error(e);
          }
        }, {
          key: "warn",
          value: function warn(r) {
            o.warn(r);
          }
        }, {
          key: "warnUnsupported",
          value: function warnUnsupported(r) {
            this.warn("[Unsupported Feature] " + r);
          }
        }, {
          key: "warnUnsupportedIf",
          value: function warnUnsupportedIf(r, e) {
            r && this.warnUnsupported(e);
          }
        }]);

        return t;
      }();
      /***/

    },

    /***/
    "SMQs":
    /*!********************************************************************!*\
      !*** ./node_modules/@arcgis/core/views/3d/support/buffer/utils.js ***!
      \********************************************************************/

    /*! exports provided: mat3, mat4, scalar, vec2, vec3, vec4, createBuffer */

    /***/
    function SMQs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "createBuffer", function () {
        return r;
      });
      /* harmony import */


      var _types_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ./types.js */
      "grla");
      /* harmony import */


      var _chunks_mat32_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ../../../../chunks/mat32.js */
      "wMH/");
      /* harmony reexport (safe) */


      __webpack_require__.d(__webpack_exports__, "mat3", function () {
        return _chunks_mat32_js__WEBPACK_IMPORTED_MODULE_1__["m"];
      });
      /* harmony import */


      var _chunks_mat42_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ../../../../chunks/mat42.js */
      "g84+");
      /* harmony reexport (safe) */


      __webpack_require__.d(__webpack_exports__, "mat4", function () {
        return _chunks_mat42_js__WEBPACK_IMPORTED_MODULE_2__["m"];
      });
      /* harmony import */


      var _chunks_scalar_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ../../../../chunks/scalar.js */
      "fPvx");
      /* harmony reexport (safe) */


      __webpack_require__.d(__webpack_exports__, "scalar", function () {
        return _chunks_scalar_js__WEBPACK_IMPORTED_MODULE_3__["s"];
      });
      /* harmony import */


      var _chunks_vec22_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ../../../../chunks/vec22.js */
      "3Fbu");
      /* harmony reexport (safe) */


      __webpack_require__.d(__webpack_exports__, "vec2", function () {
        return _chunks_vec22_js__WEBPACK_IMPORTED_MODULE_4__["v"];
      });
      /* harmony import */


      var _chunks_vec33_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ../../../../chunks/vec33.js */
      "TJZZ");
      /* harmony reexport (safe) */


      __webpack_require__.d(__webpack_exports__, "vec3", function () {
        return _chunks_vec33_js__WEBPACK_IMPORTED_MODULE_5__["v"];
      });
      /* harmony import */


      var _chunks_vec43_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ../../../../chunks/vec43.js */
      "HCB5");
      /* harmony reexport (safe) */


      __webpack_require__.d(__webpack_exports__, "vec4", function () {
        return _chunks_vec43_js__WEBPACK_IMPORTED_MODULE_6__["v"];
      });
      /*
      All material copyright ESRI, All Rights Reserved, unless otherwise specified.
      See https://js.arcgis.com/4.18/esri/copyright.txt for details.
      */


      function r(s, r) {
        return new s(new ArrayBuffer(r * s.ElementCount * Object(_types_js__WEBPACK_IMPORTED_MODULE_0__["elementTypeSize"])(s.ElementType)));
      }
      /***/

    },

    /***/
    "TJZZ":
    /*!***************************************************!*\
      !*** ./node_modules/@arcgis/core/chunks/vec33.js ***!
      \***************************************************/

    /*! exports provided: c, v */

    /***/
    function TJZZ(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "c", function () {
        return e;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "v", function () {
        return t;
      });
      /*
      All material copyright ESRI, All Rights Reserved, unless otherwise specified.
      See https://js.arcgis.com/4.18/esri/copyright.txt for details.
      */


      function e(e, t, r) {
        var d = e.typedBuffer,
            f = e.typedBufferStride,
            n = t.typedBuffer,
            c = t.typedBufferStride,
            o = r ? r.count : t.count;
        var u = (r && r.dstIndex ? r.dstIndex : 0) * f,
            p = (r && r.srcIndex ? r.srcIndex : 0) * c;

        for (var _e28 = 0; _e28 < o; ++_e28) {
          d[u] = n[p], d[u + 1] = n[p + 1], d[u + 2] = n[p + 2], u += f, p += c;
        }
      }

      var t = Object.freeze({
        __proto__: null,
        copy: e
      });
      /***/
    },

    /***/
    "Tbkp":
    /*!**********************************************************************************************!*\
      !*** ./node_modules/@arcgis/core/views/3d/webgl-engine/core/shaderLibrary/Transform.glsl.js ***!
      \**********************************************************************************************/

    /*! exports provided: Transform */

    /***/
    function Tbkp(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "Transform", function () {
        return r;
      });
      /* harmony import */


      var _shaderModules_interfaces_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ../shaderModules/interfaces.js */
      "OIYib");
      /*
      All material copyright ESRI, All Rights Reserved, unless otherwise specified.
      See https://js.arcgis.com/4.18/esri/copyright.txt for details.
      */


      function r(r, o) {
        o.linearDepth ? r.vertex.code.add(_shaderModules_interfaces_js__WEBPACK_IMPORTED_MODULE_0__["glsl"](_templateObject82 || (_templateObject82 = _taggedTemplateLiteral(["\n    vec4 transformPositionWithDepth(mat4 proj, mat4 view, vec3 pos, vec2 nearFar, out float depth) {\n      vec4 eye = view * vec4(pos, 1.0);\n      depth = (-eye.z - nearFar[0]) / (nearFar[1] - nearFar[0]) ;\n      return proj * eye;\n    }\n    "])))) : r.vertex.code.add(_shaderModules_interfaces_js__WEBPACK_IMPORTED_MODULE_0__["glsl"](_templateObject83 || (_templateObject83 = _taggedTemplateLiteral(["\n    vec4 transformPosition(mat4 proj, mat4 view, vec3 pos) {\n      // Make sure the order of operations is the same as in transformPositionWithDepth.\n      return proj * (view * vec4(pos, 1.0));\n    }\n    "]))));
      }
      /***/

    },

    /***/
    "UBvB":
    /*!***********************************************************************************************************!*\
      !*** ./node_modules/@arcgis/core/views/3d/webgl-engine/core/shaderLibrary/util/RgbaFloatEncoding.glsl.js ***!
      \***********************************************************************************************************/

    /*! exports provided: RgbaFloatEncoding */

    /***/
    function UBvB(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "RgbaFloatEncoding", function () {
        return e;
      });
      /* harmony import */


      var _shaderModules_interfaces_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ../../shaderModules/interfaces.js */
      "OIYib");
      /*
      All material copyright ESRI, All Rights Reserved, unless otherwise specified.
      See https://js.arcgis.com/4.18/esri/copyright.txt for details.
      */


      function e(e) {
        e.code.add(_shaderModules_interfaces_js__WEBPACK_IMPORTED_MODULE_0__["glsl"](_templateObject84 || (_templateObject84 = _taggedTemplateLiteral(["\n    // This is the maximum float value representable as 32bit fixed point,\n    // it is rgba2float(vec4(1)) inlined.\n    const float MAX_RGBA_FLOAT =\n      255.0 / 256.0 +\n      255.0 / 256.0 / 256.0 +\n      255.0 / 256.0 / 256.0 / 256.0 +\n      255.0 / 256.0 / 256.0 / 256.0 / 256.0;\n\n    // Factors to convert to fixed point, i.e. factors (256^0, 256^1, 256^2, 256^3)\n    const vec4 FIXED_POINT_FACTORS = vec4(1.0, 256.0, 256.0 * 256.0, 256.0 * 256.0 * 256.0);\n\n    vec4 float2rgba(const float value) {\n      // Make sure value is in the domain we can represent\n      float valueInValidDomain = clamp(value, 0.0, MAX_RGBA_FLOAT);\n\n      // Decompose value in 32bit fixed point parts represented as\n      // uint8 rgba components. Decomposition uses the fractional part after multiplying\n      // by a power of 256 (this removes the bits that are represented in the previous\n      // component) and then converts the fractional part to 8bits.\n      vec4 fixedPointU8 = floor(fract(valueInValidDomain * FIXED_POINT_FACTORS) * 256.0);\n\n      // Convert uint8 values (from 0 to 255) to floating point representation for\n      // the shader\n      const float toU8AsFloat = 1.0 / 255.0;\n\n      return fixedPointU8 * toU8AsFloat;\n    }\n\n    // Factors to convert rgba back to float\n    const vec4 RGBA_2_FLOAT_FACTORS = vec4(\n      255.0 / (256.0),\n      255.0 / (256.0 * 256.0),\n      255.0 / (256.0 * 256.0 * 256.0),\n      255.0 / (256.0 * 256.0 * 256.0 * 256.0)\n    );\n\n    float rgba2float(vec4 rgba) {\n      // Convert components from 0->1 back to 0->255 and then\n      // add the components together with their corresponding\n      // fixed point factors, i.e. (256^1, 256^2, 256^3, 256^4)\n      return dot(rgba, RGBA_2_FLOAT_FACTORS);\n    }\n  "]))));
      }
      /***/

    },

    /***/
    "UhFW":
    /*!************************************************************************************************************!*\
      !*** ./node_modules/@arcgis/core/views/3d/webgl-engine/core/shaderLibrary/util/TextureAtlasLookup.glsl.js ***!
      \************************************************************************************************************/

    /*! exports provided: TextureAtlasLookup */

    /***/
    function UhFW(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "TextureAtlasLookup", function () {
        return t;
      });
      /* harmony import */


      var _shaderModules_interfaces_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ../../shaderModules/interfaces.js */
      "OIYib");
      /*
      All material copyright ESRI, All Rights Reserved, unless otherwise specified.
      See https://js.arcgis.com/4.18/esri/copyright.txt for details.
      */


      function t(t) {
        t.extensions.add("GL_EXT_shader_texture_lod"), t.extensions.add("GL_OES_standard_derivatives"), t.fragment.code.add(_shaderModules_interfaces_js__WEBPACK_IMPORTED_MODULE_0__["glsl"](_templateObject85 || (_templateObject85 = _taggedTemplateLiteral(["\n    #ifndef GL_EXT_shader_texture_lod\n      float calcMipMapLevel(const vec2 ddx, const vec2 ddy) {\n        float deltaMaxSqr = max(dot(ddx, ddx), dot(ddy, ddy));\n        return max(0.0, 0.5 * log2(deltaMaxSqr));\n      }\n    #endif\n\n    vec4 textureAtlasLookup(sampler2D texture, vec2 textureSize, vec2 textureCoordinates, vec4 atlasRegion) {\n      //[umin, vmin, umax, vmax]\n      vec2 atlasScale = atlasRegion.zw - atlasRegion.xy;\n      vec2 uvAtlas = fract(textureCoordinates) * atlasScale + atlasRegion.xy;\n\n      // calculate derivative of continuous texture coordinate\n      // to avoid mipmapping artifacts caused by manual wrapping in shader\n      vec2 dUVdx = dFdx(textureCoordinates) * atlasScale;\n      vec2 dUVdy = dFdy(textureCoordinates) * atlasScale;\n\n      #ifdef GL_EXT_shader_texture_lod\n        return texture2DGradEXT(texture, uvAtlas, dUVdx, dUVdy);\n      #else\n        // use bias to compensate for difference in automatic vs desired mipmap level\n        vec2 dUVdxAuto = dFdx(uvAtlas);\n        vec2 dUVdyAuto = dFdy(uvAtlas);\n        float mipMapLevel = calcMipMapLevel(dUVdx * textureSize, dUVdy * textureSize);\n        float autoMipMapLevel = calcMipMapLevel(dUVdxAuto * textureSize, dUVdyAuto * textureSize);\n\n        return texture2D(texture, uvAtlas, mipMapLevel - autoMipMapLevel);\n      #endif\n    }\n  "]))));
      }
      /***/

    },

    /***/
    "VHS5":
    /*!**********************************************************************!*\
      !*** ./node_modules/@arcgis/core/views/3d/webgl-engine/lib/IdGen.js ***!
      \**********************************************************************/

    /*! exports provided: IdGen */

    /***/
    function VHS5(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "IdGen", function () {
        return t;
      });
      /*
      All material copyright ESRI, All Rights Reserved, unless otherwise specified.
      See https://js.arcgis.com/4.18/esri/copyright.txt for details.
      */


      var t = /*#__PURE__*/function () {
        function t() {
          _classCallCheck(this, t);

          this._count = 0;
        }

        _createClass(t, [{
          key: "gen",
          value: function gen(_t34) {
            return null == _t34 && (_t34 = "a"), _t34 + "_" + this._count++;
          }
        }]);

        return t;
      }();
      /***/

    },

    /***/
    "VJrH":
    /*!***************************************************!*\
      !*** ./node_modules/@arcgis/core/core/Version.js ***!
      \***************************************************/

    /*! exports provided: Version */

    /***/
    function VJrH(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "Version", function () {
        return r;
      });
      /* harmony import */


      var _Error_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ./Error.js */
      "zlDU");
      /*
      All material copyright ESRI, All Rights Reserved, unless otherwise specified.
      See https://js.arcgis.com/4.18/esri/copyright.txt for details.
      */


      var r = /*#__PURE__*/function () {
        function r(t, _r18) {
          var o = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : "";

          _classCallCheck(this, r);

          this.major = t, this.minor = _r18, this._context = o;
        }

        _createClass(r, [{
          key: "lessThan",
          value: function lessThan(t, _r19) {
            return this.major < t || t === this.major && this.minor < _r19;
          }
        }, {
          key: "since",
          value: function since(t, _r20) {
            return !this.lessThan(t, _r20);
          }
        }, {
          key: "validate",
          value: function validate(_r21) {
            if (this.major !== _r21.major) {
              var o = this._context && this._context + ":",
                  s = this._context && this._context + " ";
              throw new _Error_js__WEBPACK_IMPORTED_MODULE_0__["default"](o + "unsupported-version", "Required major ".concat(s, "version is '").concat(this.major, "', but got '${version.major}.${version.minor}'"), {
                version: _r21
              });
            }
          }
        }, {
          key: "clone",
          value: function clone() {
            return new r(this.major, this.minor, this._context);
          }
        }], [{
          key: "parse",
          value: function parse(o) {
            var s = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : "";

            var _o$split = o.split("."),
                _o$split2 = _slicedToArray(_o$split, 2),
                e = _o$split2[0],
                i = _o$split2[1],
                n = /^\s*\d+\s*$/;

            if (!e || !e.match || !e.match(n)) {
              throw new _Error_js__WEBPACK_IMPORTED_MODULE_0__["default"]((s && s + ":") + "invalid-version", "Expected major version to be a number, but got '${version}'", {
                version: o
              });
            }

            if (!i || !i.match || !i.match(n)) {
              throw new _Error_js__WEBPACK_IMPORTED_MODULE_0__["default"]((s && s + ":") + "invalid-version", "Expected minor version to be a number, but got '${version}'", {
                version: o
              });
            }

            var a = parseInt(e, 10),
                h = parseInt(i, 10);
            return new r(a, h, s);
          }
        }]);

        return r;
      }();
      /***/

    },

    /***/
    "WHaQ":
    /*!*************************************************************************************************************************!*\
      !*** ./node_modules/@arcgis/core/views/3d/webgl-engine/collections/Component/Material/shader/DecodeSymbolColor.glsl.js ***!
      \*************************************************************************************************************************/

    /*! exports provided: DecodeSymbolColor */

    /***/
    function WHaQ(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "DecodeSymbolColor", function () {
        return l;
      });
      /* harmony import */


      var _core_shaderModules_interfaces_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ../../../../core/shaderModules/interfaces.js */
      "OIYib");
      /*
      All material copyright ESRI, All Rights Reserved, unless otherwise specified.
      See https://js.arcgis.com/4.18/esri/copyright.txt for details.
      */


      function l(l) {
        l.vertex.code.add(_core_shaderModules_interfaces_js__WEBPACK_IMPORTED_MODULE_0__["glsl"](_templateObject86 || (_templateObject86 = _taggedTemplateLiteral(["\n    vec4 decodeSymbolColor(vec4 symbolColor, out int colorMixMode) {\n      float symbolAlpha = 0.0;\n\n      const float maxTint = 85.0;\n      const float maxReplace = 170.0;\n      const float scaleAlpha = 3.0;\n\n      if (symbolColor.a > maxReplace) {\n        colorMixMode = ", ";\n        symbolAlpha = scaleAlpha * (symbolColor.a - maxReplace);\n      } else if (symbolColor.a > maxTint) {\n        colorMixMode = ", ";\n        symbolAlpha = scaleAlpha * (symbolColor.a - maxTint);\n      } else if (symbolColor.a > 0.0) {\n        colorMixMode = ", ";\n        symbolAlpha = scaleAlpha * symbolColor.a;\n      } else {\n        colorMixMode = ", ";\n        symbolAlpha = 0.0;\n      }\n\n      return vec4(symbolColor.r, symbolColor.g, symbolColor.b, symbolAlpha);\n    }\n  "])), _core_shaderModules_interfaces_js__WEBPACK_IMPORTED_MODULE_0__["glsl"]["int"](1), _core_shaderModules_interfaces_js__WEBPACK_IMPORTED_MODULE_0__["glsl"]["int"](3), _core_shaderModules_interfaces_js__WEBPACK_IMPORTED_MODULE_0__["glsl"]["int"](4), _core_shaderModules_interfaces_js__WEBPACK_IMPORTED_MODULE_0__["glsl"]["int"](1)));
      }
      /***/

    },

    /***/
    "WVfK":
    /*!*************************************************************************************************!*\
      !*** ./node_modules/@arcgis/core/views/3d/webgl-engine/materials/internal/bufferWriterUtils.js ***!
      \*************************************************************************************************/

    /*! exports provided: writeBufferMat3f, writeBufferMat4f, writeBufferVec2, writeBufferVec3, writeBufferVec4, writeColor, writeDefaultAttributes, writeMultipliedColor, writeNormal, writePosition */

    /***/
    function WVfK(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "writeBufferMat3f", function () {
        return c;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "writeBufferMat4f", function () {
        return a;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "writeBufferVec2", function () {
        return l;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "writeBufferVec3", function () {
        return r;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "writeBufferVec4", function () {
        return i;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "writeColor", function () {
        return p;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "writeDefaultAttributes", function () {
        return g;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "writeMultipliedColor", function () {
        return B;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "writeNormal", function () {
        return u;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "writePosition", function () {
        return d;
      });
      /* harmony import */


      var _support_buffer_BufferView_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ../../../support/buffer/BufferView.js */
      "VeZB");
      /* harmony import */


      var _lib_Util_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ../../lib/Util.js */
      "EVMh");
      /*
      All material copyright ESRI, All Rights Reserved, unless otherwise specified.
      See https://js.arcgis.com/4.18/esri/copyright.txt for details.
      */


      function l(e, t, f, o, s) {
        var n = f.typedBuffer,
            l = f.typedBufferStride,
            r = e.length;
        if (o *= l, null == s || 1 === s) for (var _f11 = 0; _f11 < r; ++_f11) {
          var _s6 = 2 * e[_f11];

          n[o] = t[_s6], n[o + 1] = t[_s6 + 1], o += l;
        } else for (var _f12 = 0; _f12 < r; ++_f12) {
          var _r22 = 2 * e[_f12];

          for (var _e29 = 0; _e29 < s; ++_e29) {
            n[o] = t[_r22], n[o + 1] = t[_r22 + 1], o += l;
          }
        }
      }

      function r(e, t, f, o, s) {
        var n = f.typedBuffer,
            l = f.typedBufferStride,
            r = e.length;
        if (o *= l, null == s || 1 === s) for (var _f13 = 0; _f13 < r; ++_f13) {
          var _s7 = 3 * e[_f13];

          n[o] = t[_s7], n[o + 1] = t[_s7 + 1], n[o + 2] = t[_s7 + 2], o += l;
        } else for (var _f14 = 0; _f14 < r; ++_f14) {
          var _r23 = 3 * e[_f14];

          for (var _e30 = 0; _e30 < s; ++_e30) {
            n[o] = t[_r23], n[o + 1] = t[_r23 + 1], n[o + 2] = t[_r23 + 2], o += l;
          }
        }
      }

      function i(e, t, f, o, s) {
        var n = f.typedBuffer,
            l = f.typedBufferStride,
            r = e.length;
        if (o *= l, null == s || 1 === s) for (var _f15 = 0; _f15 < r; ++_f15) {
          var _s8 = 4 * e[_f15];

          n[o] = t[_s8], n[o + 1] = t[_s8 + 1], n[o + 2] = t[_s8 + 2], n[o + 3] = t[_s8 + 3], o += l;
        } else for (var _f16 = 0; _f16 < r; ++_f16) {
          var _r24 = 4 * e[_f16];

          for (var _e31 = 0; _e31 < s; ++_e31) {
            n[o] = t[_r24], n[o + 1] = t[_r24 + 1], n[o + 2] = t[_r24 + 2], n[o + 3] = t[_r24 + 3], o += l;
          }
        }
      }

      function c(e, t, f, o) {
        var s = f.typedBuffer,
            n = f.typedBufferStride,
            l = e.length;
        o *= n;

        for (var _f17 = 0; _f17 < l; ++_f17) {
          var _l3 = 9 * e[_f17];

          for (var _e32 = 0; _e32 < 9; ++_e32) {
            s[o + _e32] = t[_l3 + _e32];
          }

          o += n;
        }
      }

      function a(e, t, f, o) {
        var s = f.typedBuffer,
            n = f.typedBufferStride,
            l = e.length;
        o *= n;

        for (var _f18 = 0; _f18 < l; ++_f18) {
          var _l4 = 16 * e[_f18];

          for (var _e33 = 0; _e33 < 16; ++_e33) {
            s[o + _e33] = t[_l4 + _e33];
          }

          o += n;
        }
      }

      function d(e, t, f, o, s, n) {
        if (f) {
          var _l5 = f,
              _r25 = o.typedBuffer,
              _i14 = o.typedBufferStride,
              _c = e.length;
          if (s *= _i14, null == n || 1 === n) for (var _f19 = 0; _f19 < _c; ++_f19) {
            var _o9 = 3 * e[_f19],
                _n8 = t[_o9],
                _c2 = t[_o9 + 1],
                _a5 = t[_o9 + 2];

            _r25[s] = _l5[0] * _n8 + _l5[4] * _c2 + _l5[8] * _a5 + _l5[12], _r25[s + 1] = _l5[1] * _n8 + _l5[5] * _c2 + _l5[9] * _a5 + _l5[13], _r25[s + 2] = _l5[2] * _n8 + _l5[6] * _c2 + _l5[10] * _a5 + _l5[14], s += _i14;
          } else for (var _f20 = 0; _f20 < _c; ++_f20) {
            var _o10 = 3 * e[_f20],
                _c3 = t[_o10],
                _a6 = t[_o10 + 1],
                _d2 = t[_o10 + 2],
                _u4 = _l5[0] * _c3 + _l5[4] * _a6 + _l5[8] * _d2 + _l5[12],
                _p = _l5[1] * _c3 + _l5[5] * _a6 + _l5[9] * _d2 + _l5[13],
                _B = _l5[2] * _c3 + _l5[6] * _a6 + _l5[10] * _d2 + _l5[14];

            for (var _e34 = 0; _e34 < n; ++_e34) {
              _r25[s] = _u4, _r25[s + 1] = _p, _r25[s + 2] = _B, s += _i14;
            }
          }
        } else r(e, t, o, s, n);
      }

      function u(e, t, f, o, s, n) {
        if (f) {
          var _l6 = f,
              _r26 = o.typedBuffer,
              _i15 = o.typedBufferStride,
              _c4 = e.length,
              _a7 = _l6[0],
              _d3 = _l6[1],
              _u5 = _l6[2],
              _p2 = _l6[4],
              _B2 = _l6[5],
              _g2 = _l6[6],
              y = _l6[8],
              h = _l6[9],
              b = _l6[10],
              z = Math.abs(1 - _a7 * _a7 + _p2 * _p2 + y * y) > 1e-5 || Math.abs(1 - _d3 * _d3 + _B2 * _B2 + h * h) > 1e-5 || Math.abs(1 - _u5 * _u5 + _g2 * _g2 + b * b) > 1e-5;
          if (s *= _i15, null == n || 1 === n) for (var _f21 = 0; _f21 < _c4; ++_f21) {
            var _o11 = 3 * e[_f21],
                _n9 = t[_o11],
                _l7 = t[_o11 + 1],
                _c5 = t[_o11 + 2];

            var O = _a7 * _n9 + _p2 * _l7 + y * _c5,
                S = _d3 * _n9 + _B2 * _l7 + h * _c5,
                N = _u5 * _n9 + _g2 * _l7 + b * _c5;

            if (z) {
              var _e35 = O * O + S * S + N * N;

              if (_e35 < .999999 && _e35 > 1e-6) {
                var _t35 = Math.sqrt(_e35);

                O /= _t35, S /= _t35, N /= _t35;
              }
            }

            _r26[s + 0] = O, _r26[s + 1] = S, _r26[s + 2] = N, s += _i15;
          } else for (var _f22 = 0; _f22 < _c4; ++_f22) {
            var _o12 = 3 * e[_f22],
                _l8 = t[_o12],
                _c6 = t[_o12 + 1],
                _O = t[_o12 + 2];

            var _S = _a7 * _l8 + _p2 * _c6 + y * _O,
                _N = _d3 * _l8 + _B2 * _c6 + h * _O,
                k = _u5 * _l8 + _g2 * _c6 + b * _O;

            if (z) {
              var _e36 = _S * _S + _N * _N + k * k;

              if (_e36 < .999999 && _e36 > 1e-6) {
                var _t36 = Math.sqrt(_e36);

                _S /= _t36, _N /= _t36, k /= _t36;
              }
            }

            for (var _e37 = 0; _e37 < n; ++_e37) {
              _r26[s + 0] = _S, _r26[s + 1] = _N, _r26[s + 2] = k, s += _i15;
            }
          }
        } else r(e, t, o, s, n);
      }

      function p(e, t, f, o, s, n) {
        var l = o.typedBuffer,
            r = o.typedBufferStride,
            i = e.length;

        if (s *= r, null == n || 1 === n) {
          if (4 === f) for (var _f23 = 0; _f23 < i; ++_f23) {
            var _o13 = 4 * e[_f23];

            l[s] = t[_o13], l[s + 1] = t[_o13 + 1], l[s + 2] = t[_o13 + 2], l[s + 3] = t[_o13 + 3], s += r;
          } else if (3 === f) for (var _f24 = 0; _f24 < i; ++_f24) {
            var _o14 = 3 * e[_f24];

            l[s] = t[_o14], l[s + 1] = t[_o14 + 1], l[s + 2] = t[_o14 + 2], l[s + 3] = 255, s += r;
          }
        } else if (4 === f) for (var _f25 = 0; _f25 < i; ++_f25) {
          var _o15 = 4 * e[_f25];

          for (var _e38 = 0; _e38 < n; ++_e38) {
            l[s] = t[_o15], l[s + 1] = t[_o15 + 1], l[s + 2] = t[_o15 + 2], l[s + 3] = t[_o15 + 3], s += r;
          }
        } else if (3 === f) for (var _f26 = 0; _f26 < i; ++_f26) {
          var _o16 = 3 * e[_f26];

          for (var _e39 = 0; _e39 < n; ++_e39) {
            l[s] = t[_o16], l[s + 1] = t[_o16 + 1], l[s + 2] = t[_o16 + 2], l[s + 3] = 255, s += r;
          }
        }
      }

      function B(e, t, f, o, s, n, l) {
        var r = s.typedBuffer,
            i = s.typedBufferStride,
            c = e.length;

        if (n *= i, null == l || 1 === l) {
          if (4 === f) for (var _f27 = 0; _f27 < c; ++_f27) {
            var _s9 = 4 * e[_f27];

            r[n] = t[_s9] * o[0], r[n + 1] = t[_s9 + 1] * o[1], r[n + 2] = t[_s9 + 2] * o[2], r[n + 3] = t[_s9 + 3] * o[3], n += i;
          } else if (3 === f) {
            var _f28 = 255 * o[3];

            for (var _s10 = 0; _s10 < c; ++_s10) {
              var _l9 = 3 * e[_s10];

              r[n] = t[_l9] * o[0], r[n + 1] = t[_l9 + 1] * o[1], r[n + 2] = t[_l9 + 2] * o[2], r[n + 3] = _f28, n += i;
            }
          }
        } else if (4 === f) for (var _f29 = 0; _f29 < c; ++_f29) {
          var _s11 = 4 * e[_f29];

          for (var _e40 = 0; _e40 < l; ++_e40) {
            r[n] = t[_s11] * o[0], r[n + 1] = t[_s11 + 1] * o[1], r[n + 2] = t[_s11 + 2] * o[2], r[n + 3] = t[_s11 + 3] * o[3], n += i;
          }
        } else if (3 === f) {
          var _f30 = 255 * o[3];

          for (var _s12 = 0; _s12 < c; ++_s12) {
            var _c7 = 3 * e[_s12];

            for (var _e41 = 0; _e41 < l; ++_e41) {
              r[n] = t[_c7] * o[0], r[n + 1] = t[_c7 + 1] * o[1], r[n + 2] = t[_c7 + 2] * o[2], r[n + 3] = _f30, n += i;
            }
          }
        }
      }

      function g(r, c, a, B, g, y) {
        var _iterator9 = _createForOfIteratorHelper(c.fieldNames),
            _step9;

        try {
          for (_iterator9.s(); !(_step9 = _iterator9.n()).done;) {
            var h = _step9.value;
            var _c8 = r.vertexAttr[h],
                b = r.indices[h];
            if (_c8 && b) switch (h) {
              case _lib_Util_js__WEBPACK_IMPORTED_MODULE_1__["VertexAttrConstants"].POSITION:
                {
                  Object(_lib_Util_js__WEBPACK_IMPORTED_MODULE_1__["assert"])(3 === _c8.size);
                  var e = g.getField(h, _support_buffer_BufferView_js__WEBPACK_IMPORTED_MODULE_0__["BufferViewVec3f"]);
                  e && d(b, _c8.data, a, e, y);
                  break;
                }

              case _lib_Util_js__WEBPACK_IMPORTED_MODULE_1__["VertexAttrConstants"].NORMAL:
                {
                  Object(_lib_Util_js__WEBPACK_IMPORTED_MODULE_1__["assert"])(3 === _c8.size);

                  var _e42 = g.getField(h, _support_buffer_BufferView_js__WEBPACK_IMPORTED_MODULE_0__["BufferViewVec3f"]);

                  _e42 && u(b, _c8.data, B, _e42, y);
                  break;
                }

              case _lib_Util_js__WEBPACK_IMPORTED_MODULE_1__["VertexAttrConstants"].UV0:
                {
                  Object(_lib_Util_js__WEBPACK_IMPORTED_MODULE_1__["assert"])(2 === _c8.size);

                  var _e43 = g.getField(h, _support_buffer_BufferView_js__WEBPACK_IMPORTED_MODULE_0__["BufferViewVec2f"]);

                  _e43 && l(b, _c8.data, _e43, y);
                  break;
                }

              case _lib_Util_js__WEBPACK_IMPORTED_MODULE_1__["VertexAttrConstants"].UVMAPSPACE:
                {
                  Object(_lib_Util_js__WEBPACK_IMPORTED_MODULE_1__["assert"])(4 === _c8.size);

                  var _t37 = g.getField(h, _support_buffer_BufferView_js__WEBPACK_IMPORTED_MODULE_0__["BufferViewVec4f"]);

                  _t37 && i(b, _c8.data, _t37, y);
                  break;
                }

              case _lib_Util_js__WEBPACK_IMPORTED_MODULE_1__["VertexAttrConstants"].MEANVERTEXPOSITION:
                {
                  Object(_lib_Util_js__WEBPACK_IMPORTED_MODULE_1__["assert"])(3 === _c8.size);

                  var _e44 = g.getField(h, _support_buffer_BufferView_js__WEBPACK_IMPORTED_MODULE_0__["BufferViewVec3f"]);

                  _e44 && d(b, _c8.data, a, _e44, y);
                  break;
                }

              case _lib_Util_js__WEBPACK_IMPORTED_MODULE_1__["VertexAttrConstants"].BOUND1:
              case _lib_Util_js__WEBPACK_IMPORTED_MODULE_1__["VertexAttrConstants"].BOUND2:
              case _lib_Util_js__WEBPACK_IMPORTED_MODULE_1__["VertexAttrConstants"].BOUND3:
                {
                  Object(_lib_Util_js__WEBPACK_IMPORTED_MODULE_1__["assert"])(3 === _c8.size);

                  var _e45 = g.getField(h, _support_buffer_BufferView_js__WEBPACK_IMPORTED_MODULE_0__["BufferViewVec3f"]);

                  _e45 && d(b, _c8.data, a, _e45, y);
                  break;
                }

              case _lib_Util_js__WEBPACK_IMPORTED_MODULE_1__["VertexAttrConstants"].COLOR:
                {
                  Object(_lib_Util_js__WEBPACK_IMPORTED_MODULE_1__["assert"])(3 === _c8.size || 4 === _c8.size);

                  var _e46 = g.getField(h, _support_buffer_BufferView_js__WEBPACK_IMPORTED_MODULE_0__["BufferViewVec4u8"]);

                  _e46 && p(b, _c8.data, _c8.size, _e46, y);
                  break;
                }

              case _lib_Util_js__WEBPACK_IMPORTED_MODULE_1__["VertexAttrConstants"].SYMBOLCOLOR:
                {
                  Object(_lib_Util_js__WEBPACK_IMPORTED_MODULE_1__["assert"])(3 === _c8.size || 4 === _c8.size);

                  var _e47 = g.getField(h, _support_buffer_BufferView_js__WEBPACK_IMPORTED_MODULE_0__["BufferViewVec4u8"]);

                  _e47 && p(b, _c8.data, _c8.size, _e47, y);
                  break;
                }

              case _lib_Util_js__WEBPACK_IMPORTED_MODULE_1__["VertexAttrConstants"].TANGENT:
                {
                  Object(_lib_Util_js__WEBPACK_IMPORTED_MODULE_1__["assert"])(4 === _c8.size);

                  var _t38 = g.getField(h, _support_buffer_BufferView_js__WEBPACK_IMPORTED_MODULE_0__["BufferViewVec4f"]);

                  _t38 && i(b, _c8.data, _t38, y);
                  break;
                }
            }
          }
        } catch (err) {
          _iterator9.e(err);
        } finally {
          _iterator9.f();
        }
      }
      /***/

    },

    /***/
    "WiJz":
    /*!*************************************************************************!*\
      !*** ./node_modules/@arcgis/core/views/3d/webgl-engine/lib/Object3D.js ***!
      \*************************************************************************/

    /*! exports provided: default */

    /***/
    function WiJz(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony import */


      var _core_maybe_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ../../../../core/maybe.js */
      "srIe");
      /* harmony import */


      var _chunks_vec3f64_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ../../../../chunks/vec3f64.js */
      "Cy1f");
      /* harmony import */


      var _chunks_vec3_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ../../../../chunks/vec3.js */
      "5DEt");
      /* harmony import */


      var _support_mathUtils_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ../../support/mathUtils.js */
      "aAs6");
      /* harmony import */


      var _chunks_mat4_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ../../../../chunks/mat4.js */
      "15Hh");
      /* harmony import */


      var _chunks_mat4f64_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ../../../../chunks/mat4f64.js */
      "r+FG");
      /* harmony import */


      var _Util_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ./Util.js */
      "EVMh");
      /* harmony import */


      var _IdGen_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! ./IdGen.js */
      "VHS5");
      /* harmony import */


      var _GeometryRecord_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! ./GeometryRecord.js */
      "aX5l");
      /* harmony import */


      var _Object3DStateSet_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! ./Object3DStateSet.js */
      "yZ6n");
      /* harmony import */


      var _materials_renderers_utils_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
      /*! ../materials/renderers/utils.js */
      "tiP8");
      /*
      All material copyright ESRI, All Rights Reserved, unless otherwise specified.
      See https://js.arcgis.com/4.18/esri/copyright.txt for details.
      */


      var M = /*#__PURE__*/function () {
        function M() {
          var e = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

          _classCallCheck(this, M);

          this._objectTransformation = Object(_chunks_mat4f64_js__WEBPACK_IMPORTED_MODULE_5__["a"])(), this._bvObjectSpace = new S(), this._bvWorldSpace = new S(), this._bvDirty = !0, this._hasVolatileTransformation = !1, this._visible = !0, this.id = M._idGen.gen(e.idHint), this.castShadow = null == e.castShadow || e.castShadow, this.metadata = e.metadata, this.metadata && this.metadata.isElevationSource && (this.metadata.lastValidElevationBB = new R()), this.objectTransformation = Object(_chunks_mat4f64_js__WEBPACK_IMPORTED_MODULE_5__["a"])(), this._initializeGeometryRecords(e.geometries, e.materials, e.transformations, e.origins);
        }

        _createClass(M, [{
          key: "geometryRecords",
          get: function get() {
            return this._geometryRecords;
          }
        }, {
          key: "geometries",
          get: function get() {
            return this._geometries;
          }
        }, {
          key: "objectTransformation",
          get: function get() {
            return this._objectTransformation;
          },
          set: function set(e) {
            Object(_chunks_mat4_js__WEBPACK_IMPORTED_MODULE_4__["c"])(this._objectTransformation, e), this._invalidateBoundingVolume(), this._notifyDirty("objTransformation");
          }
        }, {
          key: "dispose",
          value: function dispose() {
            var _iterator10 = _createForOfIteratorHelper(this._geometryRecords),
                _step10;

            try {
              for (_iterator10.s(); !(_step10 = _iterator10.n()).done;) {
                var e = _step10.value;

                _GeometryRecord_js__WEBPACK_IMPORTED_MODULE_8__["default"].pool.release(e);
              }
            } catch (err) {
              _iterator10.e(err);
            } finally {
              _iterator10.f();
            }

            this._geometryRecords = null, this._geometries = null;
          }
        }, {
          key: "_initializeGeometryRecords",
          value: function _initializeGeometryRecords(e, t, i, s) {
            if (!Array.isArray(e)) return this._geometryRecords = [], void (this._geometries = []);
            Object(_Util_js__WEBPACK_IMPORTED_MODULE_6__["assert"])(t.length === e.length, "Object3D: materials don't match geometries"), Object(_Util_js__WEBPACK_IMPORTED_MODULE_6__["assert"])(i.length === e.length, "Object3D: transformations don't match geometries"), this._geometryRecords = new Array(e.length), this._geometries = e.slice();

            for (var _r27 = 0; _r27 < e.length; _r27++) {
              var o = {
                highlights: null,
                occludees: null,
                visible: !0
              };
              this._geometryRecords[_r27] = _GeometryRecord_js__WEBPACK_IMPORTED_MODULE_8__["default"].pool.acquire(e[_r27], t[_r27], Object(_chunks_mat4f64_js__WEBPACK_IMPORTED_MODULE_5__["b"])(i[_r27]), o, s && s[_r27]);
            }

            this._hasVolatileTransformation = !1;
          }
        }, {
          key: "parentLayer",
          get: function get() {
            return this._parentLayer;
          },
          set: function set(e) {
            Object(_Util_js__WEBPACK_IMPORTED_MODULE_6__["assert"])(null == this._parentLayer || null == e, "Object3D can only be added to a single Layer"), this._parentLayer = e;
          }
        }, {
          key: "getNumGeometryRecords",
          value: function getNumGeometryRecords() {
            return this._geometryRecords.length;
          }
        }, {
          key: "getGeometryRecord",
          value: function getGeometryRecord(e) {
            return Object(_Util_js__WEBPACK_IMPORTED_MODULE_6__["assert"])(e >= 0 && e < this._geometryRecords.length, "Object3d.getGeometryDataByIndex: index out of range"), this._geometryRecords[e];
          }
        }, {
          key: "addGeometry",
          value: function addGeometry(e, t, i, s, r, o) {
            i = i || _chunks_mat4f64_js__WEBPACK_IMPORTED_MODULE_5__["I"], this._geometries.push(e);

            var a = _GeometryRecord_js__WEBPACK_IMPORTED_MODULE_8__["default"].pool.acquire(e, t, i, s || {
              highlights: null,
              occludees: null,
              visible: !0
            }, r, o);

            return this._geometryRecords.push(a), this._hasVolatileTransformation = this._geometryRecords.some(function (e) {
              return !!e.shaderTransformation;
            }), this._notifyDirty("objGeometryAdded", a), this._invalidateBoundingVolume(), a;
          }
        }, {
          key: "removeGeometry",
          value: function removeGeometry(e) {
            var t = this._geometryRecords.splice(e, 1)[0];

            return _GeometryRecord_js__WEBPACK_IMPORTED_MODULE_8__["default"].pool.release(t), this._hasVolatileTransformation = this._geometryRecords.some(function (e) {
              return !!e.shaderTransformation;
            }), this._geometries.splice(e, 1), this._notifyDirty("objGeometryRemoved", t), this._invalidateBoundingVolume(), t;
          }
        }, {
          key: "removeAllGeometries",
          value: function removeAllGeometries() {
            for (; this.getNumGeometryRecords() > 0;) {
              this.removeGeometry(0);
            }
          }
        }, {
          key: "geometryVertexAttrsUpdated",
          value: function geometryVertexAttrsUpdated(e) {
            this._notifyDirty("vertexAttrsUpdated", this._geometryRecords[e]), this._invalidateBoundingVolume();
          }
        }, {
          key: "isVisible",
          get: function get() {
            return this._visible;
          }
        }, {
          key: "setVisible",
          value: function setVisible(e) {
            this._visible = e;

            var _iterator11 = _createForOfIteratorHelper(this._geometryRecords),
                _step11;

            try {
              for (_iterator11.s(); !(_step11 = _iterator11.n()).done;) {
                var _e48 = _step11.value;
                _e48.instanceParameters.visible = this._visible;
              }
            } catch (err) {
              _iterator11.e(err);
            } finally {
              _iterator11.f();
            }

            this._notifyDirty("visibilityChanged");
          }
        }, {
          key: "maskOccludee",
          value: function maskOccludee() {
            var e = Object(_Object3DStateSet_js__WEBPACK_IMPORTED_MODULE_9__["generateObject3DStateId"])(1);

            var _iterator12 = _createForOfIteratorHelper(this._geometryRecords),
                _step12;

            try {
              for (_iterator12.s(); !(_step12 = _iterator12.n()).done;) {
                var _t39 = _step12.value;
                _t39.instanceParameters.occludees = Object(_materials_renderers_utils_js__WEBPACK_IMPORTED_MODULE_10__["addObject3DStateID"])(_t39.instanceParameters.occludees, e);
              }
            } catch (err) {
              _iterator12.e(err);
            } finally {
              _iterator12.f();
            }

            return this._notifyDirty("occlusionChanged"), e;
          }
        }, {
          key: "removeOcclude",
          value: function removeOcclude(e) {
            var _iterator13 = _createForOfIteratorHelper(this._geometryRecords),
                _step13;

            try {
              for (_iterator13.s(); !(_step13 = _iterator13.n()).done;) {
                var _t40 = _step13.value;
                _t40.instanceParameters.occludees = Object(_materials_renderers_utils_js__WEBPACK_IMPORTED_MODULE_10__["removeObject3DStateID"])(_t40.instanceParameters.occludees, e);
              }
            } catch (err) {
              _iterator13.e(err);
            } finally {
              _iterator13.f();
            }

            this._notifyDirty("occlusionChanged");
          }
        }, {
          key: "highlight",
          value: function highlight() {
            var e = Object(_Object3DStateSet_js__WEBPACK_IMPORTED_MODULE_9__["generateObject3DStateId"])(0);

            var _iterator14 = _createForOfIteratorHelper(this._geometryRecords),
                _step14;

            try {
              for (_iterator14.s(); !(_step14 = _iterator14.n()).done;) {
                var _t41 = _step14.value;
                _t41.instanceParameters.highlights = Object(_materials_renderers_utils_js__WEBPACK_IMPORTED_MODULE_10__["addObject3DStateID"])(_t41.instanceParameters.highlights, e);
              }
            } catch (err) {
              _iterator14.e(err);
            } finally {
              _iterator14.f();
            }

            return this._notifyDirty("highlightChanged"), e;
          }
        }, {
          key: "removeHighlight",
          value: function removeHighlight(e) {
            var _iterator15 = _createForOfIteratorHelper(this._geometryRecords),
                _step15;

            try {
              for (_iterator15.s(); !(_step15 = _iterator15.n()).done;) {
                var _t42 = _step15.value;
                _t42.instanceParameters.highlights = Object(_materials_renderers_utils_js__WEBPACK_IMPORTED_MODULE_10__["removeObject3DStateID"])(_t42.instanceParameters.highlights, e);
              }
            } catch (err) {
              _iterator15.e(err);
            } finally {
              _iterator15.f();
            }

            this._notifyDirty("highlightChanged");
          }
        }, {
          key: "getCombinedStaticTransformation",
          value: function getCombinedStaticTransformation(t, i) {
            return Object(_chunks_mat4_js__WEBPACK_IMPORTED_MODULE_4__["m"])(Object(_core_maybe_js__WEBPACK_IMPORTED_MODULE_0__["unwrapOr"])(i, Object(_chunks_mat4f64_js__WEBPACK_IMPORTED_MODULE_5__["a"])()), this.objectTransformation, t.getStaticTransformation());
          }
        }, {
          key: "getCombinedShaderTransformation",
          value: function getCombinedShaderTransformation(e, t) {
            return t = t || Object(_chunks_mat4f64_js__WEBPACK_IMPORTED_MODULE_5__["a"])(), Object(_chunks_mat4_js__WEBPACK_IMPORTED_MODULE_4__["m"])(t, this.objectTransformation, e.getShaderTransformation()), t;
          }
        }, {
          key: "hasVolativeTransformation",
          value: function hasVolativeTransformation() {
            return this._hasVolatileTransformation;
          }
        }, {
          key: "getBBMin",
          value: function getBBMin(e) {
            return this._validateBoundingVolume(), e ? this._bvObjectSpace.bbMin : this._bvWorldSpace.bbMin;
          }
        }, {
          key: "getBBMax",
          value: function getBBMax(e) {
            return this._validateBoundingVolume(), e ? this._bvObjectSpace.bbMax : this._bvWorldSpace.bbMax;
          }
        }, {
          key: "getCenter",
          value: function getCenter(e) {
            return this._validateBoundingVolume(), e ? this._bvObjectSpace.center : this._bvWorldSpace.center;
          }
        }, {
          key: "getBSRadius",
          value: function getBSRadius(e) {
            return this._validateBoundingVolume(), e ? this._bvObjectSpace.bsRadius : this._bvWorldSpace.bsRadius;
          }
        }, {
          key: "_validateBoundingVolume",
          value: function _validateBoundingVolume() {
            if (!this._bvDirty && !this._hasVolatileTransformation) return;
            this._bvObjectSpace.init(), this._bvWorldSpace.init();

            for (var _e49 = 0; _e49 < this._geometryRecords.length; ++_e49) {
              var _t43 = this._geometries[_e49],
                  _i16 = this._geometryRecords[_e49],
                  s = _t43.boundingInfo;
              this._calculateTransformedBoundingVolume(s, this._bvObjectSpace, _i16.getShaderTransformation()), this._calculateTransformedBoundingVolume(s, this._bvWorldSpace, this.getCombinedShaderTransformation(_i16));
            }

            Object(_chunks_vec3_js__WEBPACK_IMPORTED_MODULE_2__["e"])(this._bvObjectSpace.center, this._bvObjectSpace.bbMin, this._bvObjectSpace.bbMax, .5), Object(_chunks_vec3_js__WEBPACK_IMPORTED_MODULE_2__["e"])(this._bvWorldSpace.center, this._bvWorldSpace.bbMin, this._bvWorldSpace.bbMax, .5);
            var e = Object(_chunks_vec3f64_js__WEBPACK_IMPORTED_MODULE_1__["c"])(),
                t = Object(_chunks_vec3f64_js__WEBPACK_IMPORTED_MODULE_1__["c"])(),
                i = Object(_support_mathUtils_js__WEBPACK_IMPORTED_MODULE_3__["maxScale"])(this.objectTransformation);

            for (var _s13 = 0; _s13 < this._geometryRecords.length; ++_s13) {
              var _r28 = this._geometries[_s13],
                  _n10 = this._geometryRecords[_s13].getShaderTransformation(),
                  h = Object(_support_mathUtils_js__WEBPACK_IMPORTED_MODULE_3__["maxScale"])(_n10),
                  m = _r28.boundingInfo;

              Object(_chunks_vec3_js__WEBPACK_IMPORTED_MODULE_2__["i"])(e, m.getCenter(), _n10);
              var b = Object(_chunks_vec3_js__WEBPACK_IMPORTED_MODULE_2__["k"])(e, this._bvObjectSpace.center),
                  d = m.getBSRadius() * h;
              this._bvObjectSpace.bsRadius = Math.max(this._bvObjectSpace.bsRadius, b + d), Object(_chunks_vec3_js__WEBPACK_IMPORTED_MODULE_2__["i"])(t, e, this.objectTransformation);

              var l = Object(_chunks_vec3_js__WEBPACK_IMPORTED_MODULE_2__["k"])(t, this._bvWorldSpace.center),
                  _ = d * i;

              this._bvWorldSpace.bsRadius = Math.max(this._bvWorldSpace.bsRadius, l + _);
            }

            this._bvDirty = !1;
          }
        }, {
          key: "_calculateTransformedBoundingVolume",
          value: function _calculateTransformedBoundingVolume(e, i, s) {
            var r = e.getBBMin(),
                a = e.getBBMax(),
                h = Object(_chunks_vec3f64_js__WEBPACK_IMPORTED_MODULE_1__["b"])(r),
                c = Object(_chunks_vec3f64_js__WEBPACK_IMPORTED_MODULE_1__["b"])(a);
            Object(_chunks_vec3_js__WEBPACK_IMPORTED_MODULE_2__["i"])(h, h, s), Object(_chunks_vec3_js__WEBPACK_IMPORTED_MODULE_2__["i"])(c, c, s);

            for (var _e50 = 0; _e50 < 3; ++_e50) {
              i.bbMin[_e50] = Math.min(i.bbMin[_e50], h[_e50], c[_e50]), i.bbMax[_e50] = Math.max(i.bbMax[_e50], h[_e50], c[_e50]);
            }

            for (var _e51 = 0; _e51 < 3; ++_e51) {
              Object(_chunks_vec3_js__WEBPACK_IMPORTED_MODULE_2__["g"])(h, r), Object(_chunks_vec3_js__WEBPACK_IMPORTED_MODULE_2__["g"])(c, a), h[_e51] = a[_e51], c[_e51] = r[_e51], Object(_chunks_vec3_js__WEBPACK_IMPORTED_MODULE_2__["i"])(h, h, s), Object(_chunks_vec3_js__WEBPACK_IMPORTED_MODULE_2__["i"])(c, c, s);

              for (var _e52 = 0; _e52 < 3; ++_e52) {
                i.bbMin[_e52] = Math.min(i.bbMin[_e52], h[_e52], c[_e52]), i.bbMax[_e52] = Math.max(i.bbMax[_e52], h[_e52], c[_e52]);
              }
            }
          }
        }, {
          key: "_invalidateBoundingVolume",
          value: function _invalidateBoundingVolume() {
            this._bvDirty = !0, this._parentLayer && this._parentLayer.notifyObjectBBChanged(this, {
              center: this._bvWorldSpace.center,
              radius: this._bvWorldSpace.bsRadius
            });
          }
        }, {
          key: "_notifyDirty",
          value: function _notifyDirty(e, t, i, s) {
            if (this._parentLayer) {
              i = i || 1;

              var _r29 = s || this;

              this._parentLayer.notifyDirty(e, t, i, _r29);
            }
          }
        }, {
          key: "test",
          get: function get() {
            var e = this;
            return {
              hasGeometry: function hasGeometry(t) {
                return e._geometries.indexOf(t) > -1;
              },
              getGeometryIndex: function getGeometryIndex(t) {
                return e._geometries.indexOf(t);
              }
            };
          }
        }]);

        return M;
      }();

      M._idGen = new _IdGen_js__WEBPACK_IMPORTED_MODULE_7__["IdGen"]();

      var R = /*#__PURE__*/function () {
        function R() {
          _classCallCheck(this, R);

          this.bbMin = Object(_chunks_vec3f64_js__WEBPACK_IMPORTED_MODULE_1__["f"])(Number.MAX_VALUE, Number.MAX_VALUE, Number.MAX_VALUE), this.bbMax = Object(_chunks_vec3f64_js__WEBPACK_IMPORTED_MODULE_1__["f"])(-Number.MAX_VALUE, -Number.MAX_VALUE, -Number.MAX_VALUE);
        }

        _createClass(R, [{
          key: "isEmpty",
          value: function isEmpty() {
            return this.bbMax[0] < this.bbMin[0] && this.bbMax[1] < this.bbMin[1] && this.bbMax[2] < this.bbMin[2];
          }
        }]);

        return R;
      }();

      var S = /*#__PURE__*/function (_R) {
        _inherits(S, _R);

        var _super6 = _createSuper(S);

        function S() {
          var _this12;

          _classCallCheck(this, S);

          _this12 = _super6.call(this), _this12.center = Object(_chunks_vec3f64_js__WEBPACK_IMPORTED_MODULE_1__["c"])(), _this12.bsRadius = 0;
          return _this12;
        }

        _createClass(S, [{
          key: "init",
          value: function init() {
            Object(_chunks_vec3_js__WEBPACK_IMPORTED_MODULE_2__["s"])(this.bbMin, Number.MAX_VALUE, Number.MAX_VALUE, Number.MAX_VALUE), Object(_chunks_vec3_js__WEBPACK_IMPORTED_MODULE_2__["s"])(this.bbMax, -Number.MAX_VALUE, -Number.MAX_VALUE, -Number.MAX_VALUE), Object(_chunks_vec3_js__WEBPACK_IMPORTED_MODULE_2__["s"])(this.center, 0, 0, 0), this.bsRadius = 0;
          }
        }, {
          key: "getCenter",
          value: function getCenter() {
            return this.center;
          }
        }, {
          key: "getBSRadius",
          value: function getBSRadius() {
            return this.bsRadius;
          }
        }]);

        return S;
      }(R);
      /* harmony default export */


      __webpack_exports__["default"] = M;
      /***/
    },

    /***/
    "XV/G":
    /*!*********************************************************************************************************************!*\
      !*** ./node_modules/@arcgis/core/views/3d/webgl-engine/core/shaderLibrary/shading/PhysicallyBasedRendering.glsl.js ***!
      \*********************************************************************************************************************/

    /*! exports provided: PhysicallyBasedRendering */

    /***/
    function XVG(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "PhysicallyBasedRendering", function () {
        return n;
      });
      /* harmony import */


      var _shaderModules_interfaces_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ../../shaderModules/interfaces.js */
      "OIYib");
      /* harmony import */


      var _PiUtils_glsl_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./PiUtils.glsl.js */
      "xRv2");
      /* harmony import */


      var _AnalyticalSkyModel_glsl_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./AnalyticalSkyModel.glsl.js */
      "J1lp");
      /*
      All material copyright ESRI, All Rights Reserved, unless otherwise specified.
      See https://js.arcgis.com/4.18/esri/copyright.txt for details.
      */


      function n(n, a) {
        var r = n.fragment.code;
        n.include(_PiUtils_glsl_js__WEBPACK_IMPORTED_MODULE_1__["PiUtils"]), 3 === a.pbrMode || 4 === a.pbrMode ? (r.add(_shaderModules_interfaces_js__WEBPACK_IMPORTED_MODULE_0__["glsl"](_templateObject87 || (_templateObject87 = _taggedTemplateLiteral(["\n    struct PBRShadingWater\n    {\n        float NdotL;   // cos angle between normal and light direction\n        float NdotV;   // cos angle between normal and view direction\n        float NdotH;   // cos angle between normal and half vector\n        float VdotH;   // cos angle between view direction and half vector\n        float LdotH;   // cos angle between light direction and half vector\n        float VdotN;   // cos angle between view direction and normal vector\n    };\n\n    float dtrExponent = ", ";\n    "])), a.useCustomDTRExponentForWater ? "2.2" : "2.0")), r.add(_shaderModules_interfaces_js__WEBPACK_IMPORTED_MODULE_0__["glsl"](_templateObject88 || (_templateObject88 = _taggedTemplateLiteral(["\n    vec3 fresnelReflection(float angle, vec3 f0, float f90) {\n      return f0 + (f90 - f0) * pow(1.0 - angle, 5.0);\n    }\n    "])))), r.add(_shaderModules_interfaces_js__WEBPACK_IMPORTED_MODULE_0__["glsl"](_templateObject89 || (_templateObject89 = _taggedTemplateLiteral(["\n    float normalDistributionWater(float NdotH, float roughness)\n    {\n      float r2 = roughness * roughness;\n      float NdotH2 = NdotH * NdotH;\n      float denom = pow((NdotH2 * (r2 - 1.0) + 1.0), dtrExponent) * PI;\n      return r2 / denom;\n    }\n    "])))), r.add(_shaderModules_interfaces_js__WEBPACK_IMPORTED_MODULE_0__["glsl"](_templateObject90 || (_templateObject90 = _taggedTemplateLiteral(["\n    float geometricOcclusionKelemen(float LoH)\n    {\n        return 0.25 / (LoH * LoH);\n    }\n    "])))), r.add(_shaderModules_interfaces_js__WEBPACK_IMPORTED_MODULE_0__["glsl"](_templateObject91 || (_templateObject91 = _taggedTemplateLiteral(["\n    vec3 brdfSpecularWater(in PBRShadingWater props, float roughness, vec3 F0, float F0Max)\n    {\n      vec3  F = fresnelReflection(props.VdotH, F0, F0Max);\n      float dSun = normalDistributionWater(props.NdotH, roughness);\n      float V = geometricOcclusionKelemen(props.LdotH);\n\n      float diffusionSunHaze = mix(roughness + 0.045, roughness + 0.385, 1.0 - props.VdotH);\n      float strengthSunHaze  = 1.2;\n      float dSunHaze = normalDistributionWater(props.NdotH, diffusionSunHaze)*strengthSunHaze;\n\n      return ((dSun + dSunHaze) * V) * F;\n    }\n\n    vec3 tonemapACES(const vec3 x) {\n      return (x * (2.51 * x + 0.03)) / (x * (2.43 * x + 0.59) + 0.14);\n    }\n    "]))))) : 1 !== a.pbrMode && 2 !== a.pbrMode || (n.include(_AnalyticalSkyModel_glsl_js__WEBPACK_IMPORTED_MODULE_2__["AnalyticalSkyModel"]), r.add(_shaderModules_interfaces_js__WEBPACK_IMPORTED_MODULE_0__["glsl"](_templateObject92 || (_templateObject92 = _taggedTemplateLiteral(["\n    struct PBRShadingInfo\n    {\n        float NdotL;                  // cos angle between normal and light direction\n        float NdotV;                  // cos angle between normal and view direction\n        float NdotH;                  // cos angle between normal and half vector\n        float VdotH;                  // cos angle between view direction and half vector\n        float LdotH;                  // cos angle between view light direction and half vector\n        float NdotNG;                 // cos angle between normal and normal of the ground\n        float RdotNG;                 // cos angle between view direction reflected of the normal and normal of the ground\n        float NdotAmbDir;             // cos angle between view direction and the fill light in ambient illumination\n        float NdotH_Horizon;          // cos angle between normal and half vector defined with horizon illumination\n        vec3 skyRadianceToSurface;         // integrated radiance of the sky based on the surface roughness (used for specular reflection)\n        vec3 groundRadianceToSurface;      // integrated radiance of the ground based on the surface roughness (used for specular reflection)\n        vec3 skyIrradianceToSurface;       // irradiance of the sky (used for diffuse reflection)\n        vec3 groundIrradianceToSurface;    // irradiance of the ground (used for diffuse reflection)\n\n        float averageAmbientRadiance;      // average ambient radiance used to deduce black level in gamut mapping\n        float ssao;                   // ssao coefficient\n        vec3 albedoLinear;            // linear color of the albedo\n        vec3 f0;                      // fresnel value at normal incident light\n        vec3 f90;                     // fresnel value at 90o of incident light\n\n        vec3 diffuseColor;            // diffuse color of the material used in environment illumination\n        float metalness;              // metalness of the material\n        float roughness;              // roughness of the material\n    };\n    "])))), r.add(_shaderModules_interfaces_js__WEBPACK_IMPORTED_MODULE_0__["glsl"](_templateObject93 || (_templateObject93 = _taggedTemplateLiteral(["\n    float normalDistribution(float NdotH, float roughness)\n    {\n        float a = NdotH * roughness;\n        float b = roughness / (1.0 - NdotH * NdotH + a * a);\n        return b * b * INV_PI;\n    }\n    "])))), r.add(_shaderModules_interfaces_js__WEBPACK_IMPORTED_MODULE_0__["glsl"](_templateObject94 || (_templateObject94 = _taggedTemplateLiteral(["\n    const vec4 c0 = vec4(-1.0, -0.0275, -0.572,  0.022);\n    const vec4 c1 = vec4( 1.0,  0.0425,  1.040, -0.040);\n    const vec2 c2 = vec2(-1.04, 1.04);\n\n    vec2 prefilteredDFGAnalytical(float roughness, float NdotV) {\n        vec4 r = roughness * c0 + c1;\n        float a004 = min(r.x * r.x, exp2(-9.28 * NdotV)) * r.x + r.y;\n        return c2 * a004 + r.zw;\n    }\n    "])))), r.add(_shaderModules_interfaces_js__WEBPACK_IMPORTED_MODULE_0__["glsl"](_templateObject95 || (_templateObject95 = _taggedTemplateLiteral(["\n    vec3 evaluateEnvironmentIllumination(PBRShadingInfo inputs) {\n      vec3 indirectDiffuse = evaluateDiffuseIlluminationHemisphere(inputs.groundIrradianceToSurface, inputs.skyIrradianceToSurface, inputs.NdotNG);\n      vec3 indirectSpecular = evaluateSpecularIlluminationHemisphere(inputs.groundRadianceToSurface, inputs.skyRadianceToSurface, inputs.RdotNG, inputs.roughness);\n\n      // From diffuse illumination calculate reflected color\n      vec3 diffuseComponent = inputs.diffuseColor * indirectDiffuse * INV_PI;\n\n      // From specular illumination calculate reflected color\n      vec2 dfg = prefilteredDFGAnalytical(inputs.roughness, inputs.NdotV);\n      vec3 specularColor = inputs.f0 * dfg.x + inputs.f90 * dfg.y;\n      vec3 specularComponent = specularColor * indirectSpecular;\n\n      return (diffuseComponent + specularComponent);\n    }\n    "])))), r.add(_shaderModules_interfaces_js__WEBPACK_IMPORTED_MODULE_0__["glsl"](_templateObject96 || (_templateObject96 = _taggedTemplateLiteral(["\n    float gamutMapChanel(float x, vec2 p){\n      return (x < p.x) ? mix(0.0, p.y, x/p.x) : mix(p.y, 1.0, (x - p.x) / (1.0 - p.x) );\n    }"])))), r.add(_shaderModules_interfaces_js__WEBPACK_IMPORTED_MODULE_0__["glsl"](_templateObject97 || (_templateObject97 = _taggedTemplateLiteral(["\n    vec3 blackLevelSoftCompression(vec3 inColor, PBRShadingInfo inputs){\n      vec3 outColor;\n      vec2 p = vec2(0.02 * (inputs.averageAmbientRadiance), 0.0075 * (inputs.averageAmbientRadiance));\n      outColor.x = gamutMapChanel(inColor.x, p) ;\n      outColor.y = gamutMapChanel(inColor.y, p) ;\n      outColor.z = gamutMapChanel(inColor.z, p) ;\n      return outColor;\n    }\n    "])))));
      }
      /***/

    },

    /***/
    "ZS5L":
    /*!******************************************************************************************************!*\
      !*** ./node_modules/@arcgis/core/views/3d/webgl-engine/core/shaderLibrary/util/DecodeNormal.glsl.js ***!
      \******************************************************************************************************/

    /*! exports provided: DecodeNormal */

    /***/
    function ZS5L(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "DecodeNormal", function () {
        return o;
      });
      /* harmony import */


      var _shaderModules_interfaces_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ../../shaderModules/interfaces.js */
      "OIYib");
      /*
      All material copyright ESRI, All Rights Reserved, unless otherwise specified.
      See https://js.arcgis.com/4.18/esri/copyright.txt for details.
      */


      function o(o) {
        var d = _shaderModules_interfaces_js__WEBPACK_IMPORTED_MODULE_0__["glsl"](_templateObject98 || (_templateObject98 = _taggedTemplateLiteral(["\n    vec3 decodeNormal(vec2 f) {\n      float z = 1.0 - abs(f.x) - abs(f.y);\n      return vec3(f + sign(f) * min(z, 0.0), z);\n    }\n  "])));

        o.fragment.code.add(d), o.vertex.code.add(d);
      }
      /***/

    },

    /***/
    "ZotJ":
    /*!***************************************************!*\
      !*** ./node_modules/@arcgis/core/chunks/vec32.js ***!
      \***************************************************/

    /*! exports provided: a, b, s, t, v */

    /***/
    function ZotJ(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "a", function () {
        return r;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "b", function () {
        return o;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "s", function () {
        return f;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "t", function () {
        return t;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "v", function () {
        return n;
      });
      /* harmony import */


      var _views_3d_support_buffer_math_common_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ../views/3d/support/buffer/math/common.js */
      "2mxK");
      /*
      All material copyright ESRI, All Rights Reserved, unless otherwise specified.
      See https://js.arcgis.com/4.18/esri/copyright.txt for details.
      */


      function t(t, r, f) {
        if (t.count !== r.count) return void _views_3d_support_buffer_math_common_js__WEBPACK_IMPORTED_MODULE_0__["logger"].error("source and destination buffers need to have the same number of elements");
        var o = t.count,
            n = f[0],
            u = f[1],
            d = f[2],
            s = f[4],
            c = f[5],
            i = f[6],
            a = f[8],
            p = f[9],
            y = f[10],
            B = f[12],
            m = f[13],
            h = f[14],
            l = t.typedBuffer,
            S = t.typedBufferStride,
            b = r.typedBuffer,
            v = r.typedBufferStride;

        for (var e = 0; e < o; e++) {
          var _t44 = e * S,
              _r30 = e * v,
              _f31 = b[_r30],
              _o17 = b[_r30 + 1],
              M = b[_r30 + 2];

          l[_t44] = n * _f31 + s * _o17 + a * M + B, l[_t44 + 1] = u * _f31 + c * _o17 + p * M + m, l[_t44 + 2] = d * _f31 + i * _o17 + y * M + h;
        }
      }

      function r(t, r, f) {
        if (t.count !== r.count) return void _views_3d_support_buffer_math_common_js__WEBPACK_IMPORTED_MODULE_0__["logger"].error("source and destination buffers need to have the same number of elements");
        var o = t.count,
            n = f[0],
            u = f[1],
            d = f[2],
            s = f[3],
            c = f[4],
            i = f[5],
            a = f[6],
            p = f[7],
            y = f[8],
            B = t.typedBuffer,
            m = t.typedBufferStride,
            h = r.typedBuffer,
            l = r.typedBufferStride;

        for (var e = 0; e < o; e++) {
          var _t45 = e * m,
              _r31 = e * l,
              _f32 = h[_r31],
              _o18 = h[_r31 + 1],
              S = h[_r31 + 2];

          B[_t45] = n * _f32 + s * _o18 + a * S, B[_t45 + 1] = u * _f32 + c * _o18 + p * S, B[_t45 + 2] = d * _f32 + i * _o18 + y * S;
        }
      }

      function f(e, t, r) {
        var f = Math.min(e.count, t.count),
            o = e.typedBuffer,
            n = e.typedBufferStride,
            u = t.typedBuffer,
            d = t.typedBufferStride;

        for (var _e53 = 0; _e53 < f; _e53++) {
          var _t46 = _e53 * n,
              _f33 = _e53 * d;

          o[_t46] = r * u[_f33], o[_t46 + 1] = r * u[_f33 + 1], o[_t46 + 2] = r * u[_f33 + 2];
        }
      }

      function o(e, t, r) {
        var f = Math.min(e.count, t.count),
            o = e.typedBuffer,
            n = e.typedBufferStride,
            u = t.typedBuffer,
            d = t.typedBufferStride;

        for (var _e54 = 0; _e54 < f; _e54++) {
          var _t47 = _e54 * n,
              _f34 = _e54 * d;

          o[_t47] = u[_f34] >> r, o[_t47 + 1] = u[_f34 + 1] >> r, o[_t47 + 2] = u[_f34 + 2] >> r;
        }
      }

      var n = Object.freeze({
        __proto__: null,
        transformMat4: t,
        transformMat3: r,
        scale: f,
        shiftRight: o
      });
      /***/
    },

    /***/
    "aBUN":
    /*!***********************************************************************!*\
      !*** ./node_modules/@arcgis/core/views/3d/glTF/internal/pathUtils.js ***!
      \***********************************************************************/

    /*! exports provided: splitURI */

    /***/
    function aBUN(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "splitURI", function () {
        return r;
      });
      /*
      All material copyright ESRI, All Rights Reserved, unless otherwise specified.
      See https://js.arcgis.com/4.18/esri/copyright.txt for details.
      */


      function r(r) {
        var e, t;
        return r.replace(/^(.*\/)?([^/]*)$/, function (r, a, i) {
          return e = a || "", t = i || "", "";
        }), {
          dirPart: e,
          filePart: t
        };
      }
      /***/

    },

    /***/
    "aK8v":
    /*!**********************************************************************************!*\
      !*** ./node_modules/@arcgis/core/views/3d/webgl-engine/lib/GLMaterialTexture.js ***!
      \**********************************************************************************/

    /*! exports provided: default */

    /***/
    function aK8v(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony import */


      var _core_maybe_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ../../../../core/maybe.js */
      "srIe");
      /* harmony import */


      var _DefaultTextureUnits_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./DefaultTextureUnits.js */
      "jdNP");
      /* harmony import */


      var _GLMaterial_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./GLMaterial.js */
      "1/dN");
      /*
      All material copyright ESRI, All Rights Reserved, unless otherwise specified.
      See https://js.arcgis.com/4.18/esri/copyright.txt for details.
      */

      /* harmony default export */


      __webpack_exports__["default"] = /*#__PURE__*/function (_GLMaterial_js__WEBPA) {
        _inherits(_class3, _GLMaterial_js__WEBPA);

        var _super7 = _createSuper(_class3);

        function _class3(e) {
          var _this13;

          _classCallCheck(this, _class3);

          _this13 = _super7.call(this, e), _this13._textureIDs = new Set(), _this13._textureRepository = e.textureRep, _this13._textureId = e.textureId, _this13._initTransparent = !!e.initTextureTransparent, _this13._texture = _this13._acquireIfNotUndefined(_this13._textureId), _this13._textureNormal = _this13._acquireIfNotUndefined(e.normalTextureId), _this13._textureEmissive = _this13._acquireIfNotUndefined(e.emissiveTextureId), _this13._textureOcclusion = _this13._acquireIfNotUndefined(e.occlusionTextureId), _this13._textureMetallicRoughness = _this13._acquireIfNotUndefined(e.metallicRoughnessTextureId);
          return _this13;
        }

        _createClass(_class3, [{
          key: "dispose",
          value: function dispose() {
            var _this14 = this;

            this._textureIDs.forEach(function (e) {
              return _this14._textureRepository.release(e);
            }), this._textureIDs.clear();
          }
        }, {
          key: "updateTexture",
          value: function updateTexture(e) {
            e !== this._textureId && (this._releaseIfNotUndefined(this._textureId), this._textureId = e, this._texture = this._acquireIfNotUndefined(this._textureId));
          }
        }, {
          key: "bindTexture",
          value: function bindTexture(t, r) {
            Object(_core_maybe_js__WEBPACK_IMPORTED_MODULE_0__["isSome"])(this._texture) && (r.setUniform1i("tex", _DefaultTextureUnits_js__WEBPACK_IMPORTED_MODULE_1__["DefaultTextureUnits"].DIFFUSE), t.bindTexture(this._texture.glTexture, _DefaultTextureUnits_js__WEBPACK_IMPORTED_MODULE_1__["DefaultTextureUnits"].DIFFUSE)), Object(_core_maybe_js__WEBPACK_IMPORTED_MODULE_0__["isSome"])(this._textureNormal) && (r.setUniform1i("normalTexture", _DefaultTextureUnits_js__WEBPACK_IMPORTED_MODULE_1__["DefaultTextureUnits"].NORMAL), t.bindTexture(this._textureNormal.glTexture, _DefaultTextureUnits_js__WEBPACK_IMPORTED_MODULE_1__["DefaultTextureUnits"].NORMAL)), Object(_core_maybe_js__WEBPACK_IMPORTED_MODULE_0__["isSome"])(this._textureEmissive) && (r.setUniform1i("texEmission", _DefaultTextureUnits_js__WEBPACK_IMPORTED_MODULE_1__["DefaultTextureUnits"].EMISSION), t.bindTexture(this._textureEmissive.glTexture, _DefaultTextureUnits_js__WEBPACK_IMPORTED_MODULE_1__["DefaultTextureUnits"].EMISSION)), Object(_core_maybe_js__WEBPACK_IMPORTED_MODULE_0__["isSome"])(this._textureOcclusion) && (r.setUniform1i("texOcclusion", _DefaultTextureUnits_js__WEBPACK_IMPORTED_MODULE_1__["DefaultTextureUnits"].OCCLUSION), t.bindTexture(this._textureOcclusion.glTexture, _DefaultTextureUnits_js__WEBPACK_IMPORTED_MODULE_1__["DefaultTextureUnits"].OCCLUSION)), Object(_core_maybe_js__WEBPACK_IMPORTED_MODULE_0__["isSome"])(this._textureMetallicRoughness) && (r.setUniform1i("texMetallicRoughness", _DefaultTextureUnits_js__WEBPACK_IMPORTED_MODULE_1__["DefaultTextureUnits"].METALLIC_ROUGHNESS), t.bindTexture(this._textureMetallicRoughness.glTexture, _DefaultTextureUnits_js__WEBPACK_IMPORTED_MODULE_1__["DefaultTextureUnits"].METALLIC_ROUGHNESS));
          }
        }, {
          key: "bindTextureScale",
          value: function bindTextureScale(t, i) {
            var r = Object(_core_maybe_js__WEBPACK_IMPORTED_MODULE_0__["isSome"])(this._texture) && this._texture.glTexture;

            r && r.descriptor.textureCoordinateScaleFactor ? i.setUniform2fv("textureCoordinateScaleFactor", r.descriptor.textureCoordinateScaleFactor) : i.setUniform2f("textureCoordinateScaleFactor", 1, 1);
          }
        }, {
          key: "_acquireIfNotUndefined",
          value: function _acquireIfNotUndefined(e) {
            if (!Object(_core_maybe_js__WEBPACK_IMPORTED_MODULE_0__["isNone"])(e)) return this._textureIDs.add(e), this._textureRepository.acquire(e, this._initTransparent);
          }
        }, {
          key: "_releaseIfNotUndefined",
          value: function _releaseIfNotUndefined(e) {
            void 0 !== e && (this._textureIDs["delete"](e), this._textureRepository.release(e));
          }
        }]);

        return _class3;
      }(_GLMaterial_js__WEBPACK_IMPORTED_MODULE_2__["default"]);
      /***/

    },

    /***/
    "aQrP":
    /*!*********************************************************************************************!*\
      !*** ./node_modules/@arcgis/core/views/3d/webgl-engine/core/shaderModules/ShaderBuilder.js ***!
      \*********************************************************************************************/

    /*! exports provided: Code, Includes, ShaderBuilder, Stage */

    /***/
    function aQrP(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "Code", function () {
        return i;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "Includes", function () {
        return s;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ShaderBuilder", function () {
        return r;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "Stage", function () {
        return o;
      });
      /* harmony import */


      var _core_Logger_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ../../../../../core/Logger.js */
      "6S2I");
      /*
      All material copyright ESRI, All Rights Reserved, unless otherwise specified.
      See https://js.arcgis.com/4.18/esri/copyright.txt for details.
      */


      var t = _core_Logger_js__WEBPACK_IMPORTED_MODULE_0__["default"].getLogger("esri.views.3d.webgl-engine.core.shaderModules.shaderBuilder");

      var s = /*#__PURE__*/function () {
        function s() {
          _classCallCheck(this, s);

          this.includedModules = new Map();
        }

        _createClass(s, [{
          key: "include",
          value: function include(e, _s14) {
            this.includedModules.has(e) ? this.includedModules.get(e) !== _s14 && t.error("Trying to include shader module multiple times with different sets of options.") : (this.includedModules.set(e, _s14), e(this.builder, _s14));
          }
        }]);

        return s;
      }();

      var r = /*#__PURE__*/function (_s15) {
        _inherits(r, _s15);

        var _super8 = _createSuper(r);

        function r() {
          var _this15;

          _classCallCheck(this, r);

          _this15 = _super8.apply(this, arguments), _this15.vertex = new o(), _this15.fragment = new o(), _this15.attributes = new a(), _this15.varyings = new c(), _this15.extensions = new u(), _this15.defines = new d();
          return _this15;
        }

        _createClass(r, [{
          key: "builder",
          get: function get() {
            return this;
          }
        }, {
          key: "generateSource",
          value: function generateSource(e) {
            var t = this.extensions.generateSource(e),
                s = this.attributes.generateSource(e),
                _r32 = this.varyings.generateSource(),
                n = "vertex" === e ? this.vertex : this.fragment,
                i = n.uniforms.generateSource(),
                o = n.code.generateSource(),
                a = "vertex" === e ? l : h,
                c = this.defines.generateSource().concat(n.defines.generateSource());

            return "\n".concat(t.join("\n"), "\n\n").concat(c.join("\n"), "\n\n").concat(a, "\n\n").concat(i.join("\n"), "\n\n").concat(s.join("\n"), "\n\n").concat(_r32.join("\n"), "\n\n").concat(o.join("\n"));
          }
        }]);

        return r;
      }(s);

      var n = /*#__PURE__*/function () {
        function n() {
          _classCallCheck(this, n);

          this._entries = new Array(), this._set = new Set();
        }

        _createClass(n, [{
          key: "add",
          value: function add(e, t, s) {
            var r = "".concat(e, "_").concat(t, "_").concat(s);
            return this._set.has(r) || (this._entries.push([e, t, s]), this._set.add(r)), this;
          }
        }, {
          key: "generateSource",
          value: function generateSource() {
            return this._entries.map(function (e) {
              return "uniform ".concat(e[1], " ").concat(e[0]).concat((t = e[2], t ? "[".concat(t, "]") : ""), ";");
              var t;
            });
          }
        }]);

        return n;
      }();

      var i = /*#__PURE__*/function () {
        function i() {
          _classCallCheck(this, i);

          this._entries = new Array();
        }

        _createClass(i, [{
          key: "add",
          value: function add(e) {
            this._entries.push(e);
          }
        }, {
          key: "generateSource",
          value: function generateSource() {
            return this._entries;
          }
        }]);

        return i;
      }();

      var o = /*#__PURE__*/function (_s16) {
        _inherits(o, _s16);

        var _super9 = _createSuper(o);

        function o() {
          var _this16;

          _classCallCheck(this, o);

          _this16 = _super9.apply(this, arguments), _this16.uniforms = new n(), _this16.code = new i(), _this16.defines = new d();
          return _this16;
        }

        _createClass(o, [{
          key: "builder",
          get: function get() {
            return this;
          }
        }]);

        return o;
      }(s);

      var a = /*#__PURE__*/function () {
        function a() {
          _classCallCheck(this, a);

          this._entries = new Array();
        }

        _createClass(a, [{
          key: "add",
          value: function add(e, t) {
            this._entries.push([e, t]);
          }
        }, {
          key: "generateSource",
          value: function generateSource(e) {
            return "fragment" === e ? [] : this._entries.map(function (e) {
              return "attribute ".concat(e[1], " ").concat(e[0], ";");
            });
          }
        }]);

        return a;
      }();

      var c = /*#__PURE__*/function () {
        function c() {
          _classCallCheck(this, c);

          this._entries = new Array();
        }

        _createClass(c, [{
          key: "add",
          value: function add(e, t) {
            this._entries.push([e, t]);
          }
        }, {
          key: "generateSource",
          value: function generateSource() {
            return this._entries.map(function (e) {
              return "varying ".concat(e[1], " ").concat(e[0], ";");
            });
          }
        }]);

        return c;
      }();

      var u = /*#__PURE__*/function () {
        function u() {
          _classCallCheck(this, u);

          this._entries = new Set();
        }

        _createClass(u, [{
          key: "add",
          value: function add(e) {
            this._entries.add(e);
          }
        }, {
          key: "generateSource",
          value: function generateSource(e) {
            var t = "vertex" === e ? u.ALLOWLIST_VERTEX : u.ALLOWLIST_FRAGMENT;
            return Array.from(this._entries).filter(function (e) {
              return t.includes(e);
            }).map(function (e) {
              return "#extension ".concat(e, " : enable");
            });
          }
        }]);

        return u;
      }();

      u.ALLOWLIST_FRAGMENT = ["GL_EXT_shader_texture_lod", "GL_OES_standard_derivatives"], u.ALLOWLIST_VERTEX = [];

      var d = /*#__PURE__*/function () {
        function d() {
          _classCallCheck(this, d);

          this._entries = new Map();
        }

        _createClass(d, [{
          key: "addInt",
          value: function addInt(e, t) {
            var s = t % 1 == 0 ? t.toFixed(0) : t.toString();

            this._entries.set(e, s);
          }
        }, {
          key: "addFloat",
          value: function addFloat(e, t) {
            var s = t % 1 == 0 ? t.toFixed(1) : t.toString();

            this._entries.set(e, s);
          }
        }, {
          key: "generateSource",
          value: function generateSource() {
            return Array.from(this._entries, function (_ref11) {
              var _ref12 = _slicedToArray(_ref11, 2),
                  e = _ref12[0],
                  t = _ref12[1];

              return "#define ".concat(e, " ").concat(t);
            });
          }
        }]);

        return d;
      }();

      var h = "#ifdef GL_FRAGMENT_PRECISION_HIGH\n  precision highp float;\n  precision highp sampler2D;\n#else\n  precision mediump float;\n  precision mediump sampler2D;\n#endif",
          l = "precision highp float;\nprecision highp sampler2D;";
      /***/
    },

    /***/
    "aX5l":
    /*!*******************************************************************************!*\
      !*** ./node_modules/@arcgis/core/views/3d/webgl-engine/lib/GeometryRecord.js ***!
      \*******************************************************************************/

    /*! exports provided: default */

    /***/
    function aX5l(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony import */


      var _core_ObjectPool_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ../../../../core/ObjectPool.js */
      "7Nfj");
      /* harmony import */


      var _chunks_vec3_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ../../../../chunks/vec3.js */
      "5DEt");
      /* harmony import */


      var _IdGen_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./IdGen.js */
      "VHS5");
      /*
      All material copyright ESRI, All Rights Reserved, unless otherwise specified.
      See https://js.arcgis.com/4.18/esri/copyright.txt for details.
      */


      var a = /*#__PURE__*/function () {
        function a() {
          _classCallCheck(this, a);
        }

        _createClass(a, [{
          key: "acquire",
          value: function acquire(t, i, r, e, n, o) {
            this.id = a._idGen.gen(t && t.id), this.geometry = t, this.material = i, this.transformation = r, this.instanceParameters = e, this.origin = n, this.shaderTransformation = o;
          }
        }, {
          key: "getStaticTransformation",
          value: function getStaticTransformation() {
            return this.transformation;
          }
        }, {
          key: "getShaderTransformation",
          value: function getShaderTransformation() {
            return this.shaderTransformation ? this.shaderTransformation(this.transformation) : this.transformation;
          }
        }, {
          key: "computeAttachmentOrigin",
          value: function computeAttachmentOrigin(t) {
            return !!(this.material.computeAttachmentOrigin ? this.material.computeAttachmentOrigin(this.geometry, t) : this.geometry.computeAttachmentOrigin(t)) && (Object(_chunks_vec3_js__WEBPACK_IMPORTED_MODULE_1__["i"])(t, t, this.getStaticTransformation()), !0);
          }
        }]);

        return a;
      }();

      a._idGen = new _IdGen_js__WEBPACK_IMPORTED_MODULE_2__["IdGen"](), a.pool = new _core_ObjectPool_js__WEBPACK_IMPORTED_MODULE_0__["default"](a);
      /* harmony default export */

      __webpack_exports__["default"] = a;
      /***/
    },

    /***/
    "agdK":
    /*!***********************************************************************************************************!*\
      !*** ./node_modules/@arcgis/core/views/3d/webgl-engine/core/shaderLibrary/output/OutputHighlight.glsl.js ***!
      \***********************************************************************************************************/

    /*! exports provided: OutputHighlight */

    /***/
    function agdK(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "OutputHighlight", function () {
        return i;
      });
      /* harmony import */


      var _shaderModules_interfaces_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ../../shaderModules/interfaces.js */
      "OIYib");
      /*
      All material copyright ESRI, All Rights Reserved, unless otherwise specified.
      See https://js.arcgis.com/4.18/esri/copyright.txt for details.
      */


      function i(i) {
        i.fragment.uniforms.add("depthTex", "sampler2D"), i.fragment.uniforms.add("highlightViewportPixelSz", "vec4"), i.fragment.code.add(_shaderModules_interfaces_js__WEBPACK_IMPORTED_MODULE_0__["glsl"](_templateObject99 || (_templateObject99 = _taggedTemplateLiteral(["\n    void outputHighlight() {\n      vec4 fragCoord = gl_FragCoord;\n\n      float sceneDepth = texture2D(depthTex, (fragCoord.xy - highlightViewportPixelSz.xy) * highlightViewportPixelSz.zw).r;\n      if (fragCoord.z > sceneDepth + 5e-7) {\n        gl_FragColor = vec4(1.0, 1.0, 0.0, 1.0);\n      }\n      else {\n        gl_FragColor = vec4(1.0, 0.0, 1.0, 1.0);\n      }\n    }\n  "]))));
      }

      !function (e) {
        e.bindOutputHighlight = function (e, i, t) {
          e.bindTexture(t.highlightDepthTexture, 5), i.setUniform1i("depthTex", 5), i.setUniform4f("highlightViewportPixelSz", 0, 0, t.inverseViewport[0], t.inverseViewport[1]);
        };
      }(i || (i = {}));
      /***/
    },

    /***/
    "aiF/":
    /*!*********************************************************************************************************!*\
      !*** ./node_modules/@arcgis/core/views/3d/webgl-engine/core/shaderLibrary/util/DoublePrecision.glsl.js ***!
      \*********************************************************************************************************/

    /*! exports provided: DoublePrecision, doublePrecisionRequiresObfuscation */

    /***/
    function aiF(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "DoublePrecision", function () {
        return o;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "doublePrecisionRequiresObfuscation", function () {
        return r;
      });
      /* harmony import */


      var _core_has_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ../../../../../../core/has.js */
      "wSAH");
      /* harmony import */


      var _shaderModules_interfaces_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ../../shaderModules/interfaces.js */
      "OIYib");
      /* harmony import */


      var _lib_WebGLDriverTest_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ../../../lib/WebGLDriverTest.js */
      "mY8Z");
      /*
      All material copyright ESRI, All Rights Reserved, unless otherwise specified.
      See https://js.arcgis.com/4.18/esri/copyright.txt for details.
      */


      function o(_ref13, i) {
        var e = _ref13.code;
        i.doublePrecisionRequiresObfuscation ? e.add(_shaderModules_interfaces_js__WEBPACK_IMPORTED_MODULE_1__["glsl"](_templateObject100 || (_templateObject100 = _taggedTemplateLiteral(["\n      vec3 dpPlusFrc(vec3 a, vec3 b) {\n        return mix(a, a + b, vec3(notEqual(b, vec3(0))));\n      }\n\n      vec3 dpMinusFrc(vec3 a, vec3 b) {\n        return mix(vec3(0), a - b, vec3(notEqual(a, b)));\n      }\n\n      // based on https://www.thasler.com/blog/blog/glsl-part2-emu\n      vec3 dpAdd(vec3 hiA, vec3 loA, vec3 hiB, vec3 loB) {\n        vec3 t1 = dpPlusFrc(hiA, hiB);\n        vec3 e = dpMinusFrc(t1, hiA);\n        vec3 t2 = dpMinusFrc(hiB, e) + dpMinusFrc(hiA, dpMinusFrc(t1, e)) + loA + loB;\n        return t1 + t2;\n      }\n    "])))) : e.add(_shaderModules_interfaces_js__WEBPACK_IMPORTED_MODULE_1__["glsl"](_templateObject101 || (_templateObject101 = _taggedTemplateLiteral(["\n      vec3 dpAdd(vec3 hiA, vec3 loA, vec3 hiB, vec3 loB) {\n        vec3 t1 = hiA + hiB;\n        vec3 e = t1 - hiA;\n        vec3 t2 = ((hiB - e) + (hiA - (t1 - e))) + loA + loB;\n        return t1 + t2;\n      }\n    "]))));
      }

      function r(c) {
        return !!Object(_core_has_js__WEBPACK_IMPORTED_MODULE_0__["default"])("force-double-precision-obfuscation") || Object(_lib_WebGLDriverTest_js__WEBPACK_IMPORTED_MODULE_2__["testWebGLDriver"])(c).doublePrecisionRequiresObfuscation;
      }
      /***/

    },

    /***/
    "b5HO":
    /*!*******************************************************************************************!*\
      !*** ./node_modules/@arcgis/core/views/3d/webgl-engine/shaders/RealisticTreeTechnique.js ***!
      \*******************************************************************************************/

    /*! exports provided: RealisticTreeTechnique */

    /***/
    function b5HO(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "RealisticTreeTechnique", function () {
        return a;
      });
      /* harmony import */


      var _core_shaderTechnique_ReloadableShaderModule_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ../core/shaderTechnique/ReloadableShaderModule.js */
      "w6Td");
      /* harmony import */


      var _lib_DefaultVertexAttributeLocations_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ../lib/DefaultVertexAttributeLocations.js */
      "+h6m");
      /* harmony import */


      var _webgl_Program_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ../../../webgl/Program.js */
      "jjdI");
      /* harmony import */


      var _core_shaderLibrary_util_DoublePrecision_glsl_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ../core/shaderLibrary/util/DoublePrecision.glsl.js */
      "aiF/");
      /* harmony import */


      var _DefaultMaterialTechnique_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ./DefaultMaterialTechnique.js */
      "4csu");
      /* harmony import */


      var _chunks_RealisticTree_glsl_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ../../../../chunks/RealisticTree.glsl.js */
      "sKsC");
      /*
      All material copyright ESRI, All Rights Reserved, unless otherwise specified.
      See https://js.arcgis.com/4.18/esri/copyright.txt for details.
      */


      var a = /*#__PURE__*/function (_DefaultMaterialTechn) {
        _inherits(a, _DefaultMaterialTechn);

        var _super10 = _createSuper(a);

        function a() {
          _classCallCheck(this, a);

          return _super10.apply(this, arguments);
        }

        _createClass(a, [{
          key: "initializeProgram",
          value: function initializeProgram(e) {
            var i = a.shader.get(),
                o = this.configuration,
                l = i.build({
              OITEnabled: 0 === o.transparencyPassType,
              output: o.output,
              viewingMode: e.viewingMode,
              receiveShadows: o.receiveShadows,
              slicePlaneEnabled: o.slicePlaneEnabled,
              sliceHighlightDisabled: o.sliceHighlightDisabled,
              sliceEnabledForVertexPrograms: !1,
              symbolColor: o.symbolColors,
              vvSize: o.vvSize,
              vvColor: o.vvColor,
              vvInstancingEnabled: !0,
              instanced: o.instanced,
              instancedColor: o.instancedColor,
              instancedDoublePrecision: o.instancedDoublePrecision,
              useOldSceneLightInterface: !1,
              pbrMode: o.usePBR ? 1 : 0,
              hasMetalnessAndRoughnessTexture: !1,
              hasEmissionTexture: !1,
              hasOcclusionTexture: !1,
              hasNormalTexture: !1,
              hasColorTexture: o.hasColorTexture,
              receiveAmbientOcclusion: o.receiveAmbientOcclusion,
              useCustomDTRExponentForWater: !1,
              normalType: 0,
              doubleSidedMode: 2,
              vertexTangets: !1,
              attributeTextureCoordinates: o.hasColorTexture ? 1 : 0,
              textureAlphaPremultiplied: o.textureAlphaPremultiplied,
              attributeColor: o.vertexColors,
              screenSizePerspectiveEnabled: o.screenSizePerspective,
              verticalOffsetEnabled: o.verticalOffset,
              offsetBackfaces: o.offsetBackfaces,
              doublePrecisionRequiresObfuscation: Object(_core_shaderLibrary_util_DoublePrecision_glsl_js__WEBPACK_IMPORTED_MODULE_3__["doublePrecisionRequiresObfuscation"])(e.rctx),
              alphaDiscardMode: o.alphaDiscardMode,
              supportsTextureAtlas: !1
            });
            return new _webgl_Program_js__WEBPACK_IMPORTED_MODULE_2__["default"](e.rctx, l.generateSource("vertex"), l.generateSource("fragment"), _lib_DefaultVertexAttributeLocations_js__WEBPACK_IMPORTED_MODULE_1__["Default3D"]);
          }
        }]);

        return a;
      }(_DefaultMaterialTechnique_js__WEBPACK_IMPORTED_MODULE_4__["DefaultMaterialTechnique"]);

      a.shader = new _core_shaderTechnique_ReloadableShaderModule_js__WEBPACK_IMPORTED_MODULE_0__["ReloadableShaderModule"](_chunks_RealisticTree_glsl_js__WEBPACK_IMPORTED_MODULE_5__["R"], function () {
        return __webpack_require__.e(
        /*! import() | core-shaderLibrary-default-RealisticTree-glsl-js */
        "core-shaderLibrary-default-RealisticTree-glsl-js").then(__webpack_require__.bind(null,
        /*! ../core/shaderLibrary/default/RealisticTree.glsl.js */
        "FmK6"));
      });
      /***/
    },

    /***/
    "bLIi":
    /*!***********************************************************************************************************!*\
      !*** ./node_modules/@arcgis/core/views/3d/webgl-engine/core/shaderLibrary/attributes/SymbolColor.glsl.js ***!
      \***********************************************************************************************************/

    /*! exports provided: SymbolColor */

    /***/
    function bLIi(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "SymbolColor", function () {
        return r;
      });
      /* harmony import */


      var _shaderModules_interfaces_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ../../shaderModules/interfaces.js */
      "OIYib");
      /* harmony import */


      var _collections_Component_Material_shader_DecodeSymbolColor_glsl_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ../../../collections/Component/Material/shader/DecodeSymbolColor.glsl.js */
      "WHaQ");
      /*
      All material copyright ESRI, All Rights Reserved, unless otherwise specified.
      See https://js.arcgis.com/4.18/esri/copyright.txt for details.
      */


      function r(r, l) {
        l.symbolColor ? (r.include(_collections_Component_Material_shader_DecodeSymbolColor_glsl_js__WEBPACK_IMPORTED_MODULE_1__["DecodeSymbolColor"]), r.attributes.add("symbolColor", "vec4"), r.varyings.add("colorMixMode", "mediump float")) : r.fragment.uniforms.add("colorMixMode", "int"), l.symbolColor ? r.vertex.code.add(_shaderModules_interfaces_js__WEBPACK_IMPORTED_MODULE_0__["glsl"](_templateObject102 || (_templateObject102 = _taggedTemplateLiteral(["\n    int symbolColorMixMode;\n\n    vec4 getSymbolColor() {\n      return decodeSymbolColor(symbolColor, symbolColorMixMode) * 0.003921568627451;\n    }\n\n    void forwardColorMixMode() {\n      colorMixMode = float(symbolColorMixMode) + 0.5;\n    }\n  "])))) : r.vertex.code.add(_shaderModules_interfaces_js__WEBPACK_IMPORTED_MODULE_0__["glsl"](_templateObject103 || (_templateObject103 = _taggedTemplateLiteral(["\n    vec4 getSymbolColor() { return vec4(1.0); }\n    void forwardColorMixMode() {}\n    "]))));
      }
      /***/

    },

    /***/
    "bVvB":
    /*!***********************************************************************************************************!*\
      !*** ./node_modules/@arcgis/core/views/3d/webgl-engine/core/shaderLibrary/attributes/VertexColor.glsl.js ***!
      \***********************************************************************************************************/

    /*! exports provided: VertexColor */

    /***/
    function bVvB(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "VertexColor", function () {
        return r;
      });
      /* harmony import */


      var _shaderModules_interfaces_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ../../shaderModules/interfaces.js */
      "OIYib");
      /*
      All material copyright ESRI, All Rights Reserved, unless otherwise specified.
      See https://js.arcgis.com/4.18/esri/copyright.txt for details.
      */


      function r(r, e) {
        e.attributeColor ? (r.attributes.add("color", "vec4"), r.varyings.add("vColor", "vec4"), r.vertex.code.add(_shaderModules_interfaces_js__WEBPACK_IMPORTED_MODULE_0__["glsl"](_templateObject104 || (_templateObject104 = _taggedTemplateLiteral(["\n      void forwardVertexColor() { vColor = color; }\n    "])))), r.vertex.code.add(_shaderModules_interfaces_js__WEBPACK_IMPORTED_MODULE_0__["glsl"](_templateObject105 || (_templateObject105 = _taggedTemplateLiteral(["\n      void forwardNormalizedVertexColor() { vColor = color * 0.003921568627451; }\n    "]))))) : r.vertex.code.add(_shaderModules_interfaces_js__WEBPACK_IMPORTED_MODULE_0__["glsl"](_templateObject106 || (_templateObject106 = _taggedTemplateLiteral(["\n      void forwardVertexColor() {}\n      void forwardNormalizedVertexColor() {}\n    "]))));
      }
      /***/

    },

    /***/
    "cIib":
    /*!*********************************************************************************************************************!*\
      !*** ./node_modules/@arcgis/core/views/3d/webgl-engine/core/shaderLibrary/shading/EvaluateAmbientOcclusion.glsl.js ***!
      \*********************************************************************************************************************/

    /*! exports provided: EvaluateAmbientOcclusion */

    /***/
    function cIib(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "EvaluateAmbientOcclusion", function () {
        return o;
      });
      /* harmony import */


      var _shaderModules_interfaces_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ../../shaderModules/interfaces.js */
      "OIYib");
      /*
      All material copyright ESRI, All Rights Reserved, unless otherwise specified.
      See https://js.arcgis.com/4.18/esri/copyright.txt for details.
      */


      function o(o, t) {
        var r = o.fragment;
        t.receiveAmbientOcclusion ? (r.uniforms.add("ssaoTex", "sampler2D"), r.uniforms.add("viewportPixelSz", "vec4"), r.code.add(_shaderModules_interfaces_js__WEBPACK_IMPORTED_MODULE_0__["glsl"](_templateObject107 || (_templateObject107 = _taggedTemplateLiteral(["\n      float evaluateAmbientOcclusion() {\n        return 1.0 - texture2D(ssaoTex, (gl_FragCoord.xy - viewportPixelSz.xy) * viewportPixelSz.zw).a;\n      }\n\n      float evaluateAmbientOcclusionInverse() {\n        float ssao = texture2D(ssaoTex, (gl_FragCoord.xy - viewportPixelSz.xy) * viewportPixelSz.zw).a;\n        return viewportPixelSz.z < 0.0 ? 1.0 : ssao;\n      }\n    "]))))) : r.code.add(_shaderModules_interfaces_js__WEBPACK_IMPORTED_MODULE_0__["glsl"](_templateObject108 || (_templateObject108 = _taggedTemplateLiteral(["\n      float evaluateAmbientOcclusion() { return 0.0; } // no occlusion\n      float evaluateAmbientOcclusionInverse() { return 1.0; }\n    "]))));
      }
      /***/

    },

    /***/
    "cKKt":
    /*!*******************************************************************************!*\
      !*** ./node_modules/@arcgis/core/views/3d/webgl-engine/lib/AutoDisposable.js ***!
      \*******************************************************************************/

    /*! exports provided: AutoDisposable, AutoDisposableMixin, autoDispose */

    /***/
    function cKKt(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "AutoDisposable", function () {
        return e;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "AutoDisposableMixin", function () {
        return s;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "autoDispose", function () {
        return i;
      });
      /*
      All material copyright ESRI, All Rights Reserved, unless otherwise specified.
      See https://js.arcgis.com/4.18/esri/copyright.txt for details.
      */


      var s = function s(_s18) {
        return /*#__PURE__*/function (_s17) {
          _inherits(_class4, _s17);

          var _super11 = _createSuper(_class4);

          function _class4() {
            var _this17;

            _classCallCheck(this, _class4);

            _this17 = _super11.apply(this, arguments), _this17._isDisposed = !1;
            return _this17;
          }

          _createClass(_class4, [{
            key: "dispose",
            value: function dispose() {
              var _iterator16 = _createForOfIteratorHelper(null != (s = this._managedDisposables) ? s : []),
                  _step16;

              try {
                for (_iterator16.s(); !(_step16 = _iterator16.n()).done;) {
                  var _e55 = _step16.value;
                  var s;
                  var _i17 = this[_e55];
                  this[_e55] = null, _i17 && "function" == typeof _i17.dispose && _i17.dispose();
                }
              } catch (err) {
                _iterator16.e(err);
              } finally {
                _iterator16.f();
              }

              this._isDisposed = !0;
            }
          }, {
            key: "isDisposed",
            get: function get() {
              return this._isDisposed;
            }
          }]);

          return _class4;
        }(_s18);
      };

      var e = /*#__PURE__*/function (_s19) {
        _inherits(e, _s19);

        var _super12 = _createSuper(e);

        function e() {
          _classCallCheck(this, e);

          return _super12.apply(this, arguments);
        }

        return e;
      }(s( /*#__PURE__*/function () {
        function _class5() {
          _classCallCheck(this, _class5);
        }

        return _class5;
      }()));

      function i() {
        return function (s, e) {
          var i, o;
          s.hasOwnProperty("_managedDisposables") || (s._managedDisposables = null != (i = null == (o = s._managedDisposables) ? void 0 : o.slice()) ? i : []);

          s._managedDisposables.unshift(e);
        };
      }
      /***/

    },

    /***/
    "cKtl":
    /*!***************************************************!*\
      !*** ./node_modules/@arcgis/core/chunks/plane.js ***!
      \***************************************************/

    /*! exports provided: A, B, U, a, b, c, d, e, f, g, h, i, j, k, l, m, n, o, p, q, r, s, t, u, v, w, x, y, z */

    /***/
    function cKtl(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "A", function () {
        return E;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "B", function () {
        return G;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "U", function () {
        return Q;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "a", function () {
        return y;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "b", function () {
        return B;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "c", function () {
        return l;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "d", function () {
        return U;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "e", function () {
        return z;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "f", function () {
        return _;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "g", function () {
        return T;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "h", function () {
        return d;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "i", function () {
        return w;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "j", function () {
        return j;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "k", function () {
        return k;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "l", function () {
        return D;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "m", function () {
        return H;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "n", function () {
        return K;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "o", function () {
        return N;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "p", function () {
        return R;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "q", function () {
        return C;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "r", function () {
        return L;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "s", function () {
        return F;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "t", function () {
        return b;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "u", function () {
        return h;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "v", function () {
        return P;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "w", function () {
        return p;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "x", function () {
        return M;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "y", function () {
        return I;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "z", function () {
        return q;
      });
      /* harmony import */


      var _core_maybe_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ../core/maybe.js */
      "srIe");
      /* harmony import */


      var _core_mathUtils_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ../core/mathUtils.js */
      "OKTS");
      /* harmony import */


      var _vec3f64_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./vec3f64.js */
      "Cy1f");
      /* harmony import */


      var _vec3_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./vec3.js */
      "5DEt");
      /* harmony import */


      var _views_3d_support_stack_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ../views/3d/support/stack.js */
      "8JEK");
      /*
      All material copyright ESRI, All Rights Reserved, unless otherwise specified.
      See https://js.arcgis.com/4.18/esri/copyright.txt for details.
      */


      function l() {
        var n = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : Q;
        return [n[0], n[1], n[2], n[3]];
      }

      function p(n, t, r, e) {
        return y(n, t, r, e, _views_3d_support_stack_js__WEBPACK_IMPORTED_MODULE_4__["sv4d"].get());
      }

      function d(n) {
        var t = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : l();
        return y(n[0], n[1], n[2], n[3], t);
      }

      function y(n, t, r, e) {
        var o = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : l();
        return o[0] = n, o[1] = t, o[2] = r, o[3] = e, o;
      }

      function h(n, t) {
        var r = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : l();
        return Object(_vec3_js__WEBPACK_IMPORTED_MODULE_3__["g"])(r, n), r[3] = t, r;
      }

      function P(n, t) {
        var r = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : l();
        Object(_vec3_js__WEBPACK_IMPORTED_MODULE_3__["g"])(r, t);
        var s = Object(_vec3_js__WEBPACK_IMPORTED_MODULE_3__["d"])(t, t);
        return Math.abs(s - 1) > 1e-5 && s > 1e-12 && Object(_vec3_js__WEBPACK_IMPORTED_MODULE_3__["a"])(r, r, 1 / Math.sqrt(s)), F(r, n, r), r;
      }

      function j(n, t, r) {
        var e = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : l();
        return _(Object(_vec3_js__WEBPACK_IMPORTED_MODULE_3__["f"])(_views_3d_support_stack_js__WEBPACK_IMPORTED_MODULE_4__["sv3d"].get(), n, t), Object(_vec3_js__WEBPACK_IMPORTED_MODULE_3__["f"])(_views_3d_support_stack_js__WEBPACK_IMPORTED_MODULE_4__["sv3d"].get(), r, t), n, e);
      }

      function M(n, t) {
        return b(n, t, 0, 1, 2);
      }

      function b(n, t, r, e, i) {
        if (n.count < 3) return !1;
        n.getVec(r, A);
        var a = e,
            f = !1;

        for (; a < n.count - 1 && !f;) {
          n.getVec(a, V), a++, f = !Object(_vec3_js__WEBPACK_IMPORTED_MODULE_3__["m"])(A, V);
        }

        if (!f) return !1;

        for (a = Math.max(a, i), f = !1; a < n.count && !f;) {
          n.getVec(a, O), a++, Object(_vec3_js__WEBPACK_IMPORTED_MODULE_3__["f"])(S, A, V), Object(_vec3_js__WEBPACK_IMPORTED_MODULE_3__["n"])(S, S), Object(_vec3_js__WEBPACK_IMPORTED_MODULE_3__["f"])(x, V, O), Object(_vec3_js__WEBPACK_IMPORTED_MODULE_3__["n"])(x, x), f = !Object(_vec3_js__WEBPACK_IMPORTED_MODULE_3__["m"])(A, O) && !Object(_vec3_js__WEBPACK_IMPORTED_MODULE_3__["m"])(V, O) && Math.abs(Object(_vec3_js__WEBPACK_IMPORTED_MODULE_3__["d"])(S, x)) < v;
        }

        return f ? (j(A, V, O, t), !0) : (0 !== r || 1 !== e || 2 !== i) && b(n, t, 0, 1, 2);
      }

      var v = .99619469809,
          A = Object(_vec3f64_js__WEBPACK_IMPORTED_MODULE_2__["c"])(),
          V = Object(_vec3f64_js__WEBPACK_IMPORTED_MODULE_2__["c"])(),
          O = Object(_vec3f64_js__WEBPACK_IMPORTED_MODULE_2__["c"])(),
          S = Object(_vec3f64_js__WEBPACK_IMPORTED_MODULE_2__["c"])(),
          x = Object(_vec3f64_js__WEBPACK_IMPORTED_MODULE_2__["c"])();

      function F(n, t, r) {
        return n !== r && d(n, r), r[3] = -Object(_vec3_js__WEBPACK_IMPORTED_MODULE_3__["d"])(r, t), r;
      }

      function I(n, t) {
        return t[0] = -n[0], t[1] = -n[1], t[2] = -n[2], t[3] = -n[3], t;
      }

      function _(n, t, r) {
        var e = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : l();
        return P(r, Object(_vec3_js__WEBPACK_IMPORTED_MODULE_3__["c"])(_views_3d_support_stack_js__WEBPACK_IMPORTED_MODULE_4__["sv3d"].get(), t, n), e);
      }

      function w(t, r, e) {
        return !!Object(_core_maybe_js__WEBPACK_IMPORTED_MODULE_0__["isSome"])(r) && J(t, r.origin, r.direction, !0, !1, e);
      }

      function B(n, t, r) {
        return J(n, t.origin, t.vector, !1, !1, r);
      }

      function U(n, t, r) {
        return J(n, t.origin, t.vector, !1, !0, r);
      }

      function k(n, t) {
        var r = t.center,
            e = t.radius;
        return H(n, r) - e >= 0;
      }

      function q(n, t) {
        var r = t.center,
            e = t.radius;
        return H(n, r) + e < 0;
      }

      function z(n, t) {
        return H(n, t) >= 0;
      }

      function L(n, t) {
        return H(n, t) < 0;
      }

      function N(n, t) {
        var r = t[0],
            e = t[1],
            o = t[2],
            i = t[3],
            s = t[4],
            c = t[5];
        return n[0] * (n[0] > 0 ? r : i) + n[1] * (n[1] > 0 ? e : s) + n[2] * (n[2] > 0 ? o : c) + n[3] >= 0;
      }

      function C(n, t) {
        var r = Object(_vec3_js__WEBPACK_IMPORTED_MODULE_3__["d"])(n, t.ray.direction),
            e = -H(n, t.ray.origin);
        if (e < 0 && r >= 0) return !1;
        if (r > -1e-6 && r < 1e-6) return e > 0;
        if ((e < 0 || r < 0) && !(e < 0 && r < 0)) return !0;
        var i = e / r;
        return r > 0 ? i < t.c1 && (t.c1 = i) : i > t.c0 && (t.c0 = i), t.c0 <= t.c1;
      }

      function D(n, t) {
        var r = Object(_vec3_js__WEBPACK_IMPORTED_MODULE_3__["d"])(n, t.ray.direction),
            e = -H(n, t.ray.origin);
        if (r > -1e-6 && r < 1e-6) return e > 0;
        var i = e / r;
        return r > 0 ? i < t.c1 && (t.c1 = i) : i > t.c0 && (t.c0 = i), t.c0 <= t.c1;
      }

      function R(n, t, r) {
        var e = Object(_vec3_js__WEBPACK_IMPORTED_MODULE_3__["a"])(_views_3d_support_stack_js__WEBPACK_IMPORTED_MODULE_4__["sv3d"].get(), n, -n[3]),
            o = E(n, Object(_vec3_js__WEBPACK_IMPORTED_MODULE_3__["f"])(_views_3d_support_stack_js__WEBPACK_IMPORTED_MODULE_4__["sv3d"].get(), t, e), _views_3d_support_stack_js__WEBPACK_IMPORTED_MODULE_4__["sv3d"].get());
        return Object(_vec3_js__WEBPACK_IMPORTED_MODULE_3__["b"])(r, o, e), r;
      }

      function E(n, t, r) {
        var e = Object(_vec3_js__WEBPACK_IMPORTED_MODULE_3__["a"])(_views_3d_support_stack_js__WEBPACK_IMPORTED_MODULE_4__["sv3d"].get(), n, Object(_vec3_js__WEBPACK_IMPORTED_MODULE_3__["d"])(n, t));
        return Object(_vec3_js__WEBPACK_IMPORTED_MODULE_3__["f"])(r, t, e), r;
      }

      function G(n, t) {
        return Math.abs(H(n, t));
      }

      function H(n, t) {
        return Object(_vec3_js__WEBPACK_IMPORTED_MODULE_3__["d"])(n, t) + n[3];
      }

      function J(n, r, e, s, c, u) {
        var a = Object(_vec3_js__WEBPACK_IMPORTED_MODULE_3__["d"])(n, e);
        if (0 === a) return !1;
        var m = -(Object(_vec3_js__WEBPACK_IMPORTED_MODULE_3__["d"])(n, r) + n[3]) / a;
        return c && (m = s ? Math.max(0, m) : Object(_core_mathUtils_js__WEBPACK_IMPORTED_MODULE_1__["clamp"])(m, 0, 1)), !(m < 0 || !s && m > 1) && (Object(_vec3_js__WEBPACK_IMPORTED_MODULE_3__["b"])(u, r, Object(_vec3_js__WEBPACK_IMPORTED_MODULE_3__["a"])(u, e, m)), !0);
      }

      function K(n) {
        return n;
      }

      var Q = [0, 0, 1, 0];
      var T = Object.freeze({
        __proto__: null,
        create: l,
        wrap: p,
        copy: d,
        fromValues: y,
        fromNormalAndOffset: h,
        fromPositionAndNormal: P,
        fromPoints: j,
        fromManyPoints: M,
        fromManyPointsSampleAt: b,
        setOffsetFromPoint: F,
        negate: I,
        fromVectorsAndPoint: _,
        intersectRay: w,
        intersectLineSegment: B,
        intersectLineSegmentClamp: U,
        isSphereFullyInside: k,
        isSphereFullyOutside: q,
        isPointInside: z,
        isPointOutside: L,
        isAABBFullyInside: N,
        clip: C,
        clipInfinite: D,
        projectPoint: R,
        projectVector: E,
        distance: G,
        signedDistance: H,
        normal: K,
        UP: Q
      });
      /***/
    },

    /***/
    "cqrX":
    /*!**************************************************************************!*\
      !*** ./node_modules/@arcgis/core/views/3d/glTF/internal/fillDefaults.js ***!
      \**************************************************************************/

    /*! exports provided: material, textureSampler */

    /***/
    function cqrX(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "material", function () {
        return a;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "textureSampler", function () {
        return i;
      });
      /* harmony import */


      var _core_compilerUtils_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ../../../../core/compilerUtils.js */
      "bJda");
      /*
      All material copyright ESRI, All Rights Reserved, unless otherwise specified.
      See https://js.arcgis.com/4.18/esri/copyright.txt for details.
      */


      var o = {
        baseColorFactor: [1, 1, 1, 1],
        metallicFactor: 1,
        roughnessFactor: 1
      },
          r = {
        pbrMetallicRoughness: o,
        emissiveFactor: [0, 0, 0],
        alphaMode: "OPAQUE",
        alphaCutoff: .5,
        doubleSided: !1
      },
          t = {
        ESRI_externalColorMixMode: "tint"
      },
          a = function a() {
        var a = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

        var l = _objectSpread(_objectSpread({}, o), a.pbrMetallicRoughness),
            i = function (o) {
          switch (o.ESRI_externalColorMixMode) {
            case "multiply":
            case "tint":
            case "ignore":
            case "replace":
              break;

            default:
              Object(_core_compilerUtils_js__WEBPACK_IMPORTED_MODULE_0__["neverReached"])(o.ESRI_externalColorMixMode), o.ESRI_externalColorMixMode = "tint";
          }

          return o;
        }(_objectSpread(_objectSpread({}, t), a.extras));

        return _objectSpread(_objectSpread(_objectSpread({}, r), a), {}, {
          pbrMetallicRoughness: l,
          extras: i
        });
      };

      var l = {
        magFilter: 9729,
        minFilter: 9987,
        wrapS: 10497,
        wrapT: 10497
      },
          i = function i(e) {
        return _objectSpread(_objectSpread({}, l), e);
      };
      /***/

    },

    /***/
    "dDjh":
    /*!*********************************************************************************************!*\
      !*** ./node_modules/@arcgis/core/views/3d/webgl-engine/lib/OrderIndependentTransparency.js ***!
      \*********************************************************************************************/

    /*! exports provided: OITBlending, OITDepthTest, OITDepthWrite, OITPolygonOffset, OITPolygonOffsetLimit, blendingAlpha, blendingColor, blendingDefault, getOITPolygonOffset */

    /***/
    function dDjh(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "OITBlending", function () {
        return c;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "OITDepthTest", function () {
        return a;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "OITDepthWrite", function () {
        return l;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "OITPolygonOffset", function () {
        return i;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "OITPolygonOffsetLimit", function () {
        return f;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "blendingAlpha", function () {
        return o;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "blendingColor", function () {
        return e;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "blendingDefault", function () {
        return u;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "getOITPolygonOffset", function () {
        return s;
      });
      /* harmony import */


      var _webgl_renderState_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ../../../webgl/renderState.js */
      "GJyJ");
      /*
      All material copyright ESRI, All Rights Reserved, unless otherwise specified.
      See https://js.arcgis.com/4.18/esri/copyright.txt for details.
      */


      var u = Object(_webgl_renderState_js__WEBPACK_IMPORTED_MODULE_0__["separateBlendingParams"])(770, 1, 771, 771),
          e = Object(_webgl_renderState_js__WEBPACK_IMPORTED_MODULE_0__["simpleBlendingParams"])(1, 1),
          o = Object(_webgl_renderState_js__WEBPACK_IMPORTED_MODULE_0__["simpleBlendingParams"])(0, 771);

      function c(n) {
        return 2 === n ? null : 1 === n ? o : e;
      }

      function l(n) {
        return 2 === n ? _webgl_renderState_js__WEBPACK_IMPORTED_MODULE_0__["defaultDepthWriteParams"] : null;
      }

      var f = 5e5,
          i = {
        factor: -1,
        units: -2
      };

      function s(n) {
        return n ? i : null;
      }

      function a(n) {
        return 3 === n || 2 === n ? 513 : 515;
      }
      /***/

    },

    /***/
    "ekr9":
    /*!************************************************************************!*\
      !*** ./node_modules/@arcgis/core/views/3d/webgl-engine/lib/DDSUtil.js ***!
      \************************************************************************/

    /*! exports provided: createDDSTexture, createDDSTextureData */

    /***/
    function ekr9(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "createDDSTexture", function () {
        return l;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "createDDSTextureData", function () {
        return u;
      });
      /* harmony import */


      var _core_Logger_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ../../../../core/Logger.js */
      "6S2I");
      /* harmony import */


      var _core_mathUtils_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ../../../../core/mathUtils.js */
      "OKTS");
      /* harmony import */


      var _webgl_Texture_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ../../../webgl/Texture.js */
      "of9L");
      /*
      All material copyright ESRI, All Rights Reserved, unless otherwise specified.
      See https://js.arcgis.com/4.18/esri/copyright.txt for details.
      */


      var n = _core_Logger_js__WEBPACK_IMPORTED_MODULE_0__["default"].getLogger("esri.views.3d.webgl-engine.lib.DDSUtil");

      function o(e) {
        return e.charCodeAt(0) + (e.charCodeAt(1) << 8) + (e.charCodeAt(2) << 16) + (e.charCodeAt(3) << 24);
      }

      var a = o("DXT1"),
          i = o("DXT3"),
          s = o("DXT5");

      function l(e, t, n, o) {
        var _u6 = u(n, o),
            a = _u6.textureData,
            i = _u6.internalFormat,
            s = _u6.width,
            l = _u6.height;

        t.samplingMode = a.levels.length > 1 ? 9987 : 9729, t.hasMipmap = a.levels.length > 1, t.internalFormat = i, t.width = s, t.height = l;
        var c = new _webgl_Texture_js__WEBPACK_IMPORTED_MODULE_2__["default"](e, t, a);
        return e.bindTexture(c, 0), c;
      }

      function u(e, r) {
        var o = new Int32Array(e, 0, 31);
        if (542327876 !== o[0]) return n.error("Invalid magic number in DDS header"), null;
        if (!(4 & o[20])) return n.error("Unsupported format, must contain a FourCC code"), null;
        var l = o[21];
        var u, c;

        switch (l) {
          case a:
            u = 8, c = 33776;
            break;

          case i:
            u = 16, c = 33778;
            break;

          case s:
            u = 16, c = 33779;
            break;

          default:
            return n.error("Unsupported FourCC code:", (m = l, String.fromCharCode(255 & m, m >> 8 & 255, m >> 16 & 255, m >> 24 & 255))), null;
        }

        var m;
        var h = 1,
            d = o[4],
            p = o[3];
        0 == (3 & d) && 0 == (3 & p) || (n.warn("Rounding up compressed texture size to nearest multiple of 4."), d = d + 3 & -4, p = p + 3 & -4);
        var g = d,
            f = p;
        var w, x;
        131072 & o[2] && !1 !== r && (h = Math.max(1, o[7])), 1 === h || Object(_core_mathUtils_js__WEBPACK_IMPORTED_MODULE_1__["isPowerOfTwo"])(d) && Object(_core_mathUtils_js__WEBPACK_IMPORTED_MODULE_1__["isPowerOfTwo"])(p) || (n.warn("Ignoring mipmaps of non power of two sized compressed texture."), h = 1);
        var C = o[1] + 4;
        var D = [];

        for (var _t48 = 0; _t48 < h; ++_t48) {
          x = (d + 3 >> 2) * (p + 3 >> 2) * u, w = new Uint8Array(e, C, x), D.push(w), C += x, d = Math.max(1, d >> 1), p = Math.max(1, p >> 1);
        }

        return {
          textureData: {
            type: "compressed",
            levels: D
          },
          internalFormat: c,
          width: g,
          height: f
        };
      }
      /***/

    },

    /***/
    "exm0":
    /*!*****************************************************************!*\
      !*** ./node_modules/@arcgis/core/views/3d/glTF/LoaderResult.js ***!
      \*****************************************************************/

    /*! exports provided: makeMaterialParameters, makeTextureSource */

    /***/
    function exm0(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "makeMaterialParameters", function () {
        return e;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "makeTextureSource", function () {
        return t;
      });
      /*
      All material copyright ESRI, All Rights Reserved, unless otherwise specified.
      See https://js.arcgis.com/4.18/esri/copyright.txt for details.
      */


      function e() {
        var e = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
        return _objectSpread({
          color: [1, 1, 1],
          opacity: 1,
          alphaMode: "OPAQUE",
          alphaCutoff: .5,
          doubleSided: !1,
          castShadows: !0,
          receiveShadows: !0,
          receiveAmbientOcclustion: !0,
          textureColor: null,
          textureNormal: null,
          textureOcclusion: null,
          textureEmissive: null,
          textureMetallicRoughness: null,
          emissiveFactor: [0, 0, 0],
          metallicFactor: 1,
          roughnessFactor: 1,
          colorMixMode: "multiply"
        }, e);
      }

      function t(e) {
        var t = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
        return {
          data: e,
          parameters: _objectSpread({
            wrap: _objectSpread({
              s: 10497,
              t: 10497
            }, t.wrap),
            noUnpackFlip: !0,
            mipmap: !1
          }, t)
        };
      }
      /***/

    },

    /***/
    "f/MA":
    /*!*******************************************************!*\
      !*** ./node_modules/@arcgis/core/chunks/axisAngle.js ***!
      \*******************************************************/

    /*! exports provided: U, a, b, c, d, e, f, g, h, w */

    /***/
    function fMA(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "U", function () {
        return g;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "a", function () {
        return l;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "b", function () {
        return u;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "c", function () {
        return e;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "d", function () {
        return c;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "e", function () {
        return i;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "f", function () {
        return f;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "g", function () {
        return p;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "h", function () {
        return m;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "w", function () {
        return a;
      });
      /* harmony import */


      var _vec3_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ./vec3.js */
      "5DEt");
      /* harmony import */


      var _views_3d_support_stack_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ../views/3d/support/stack.js */
      "8JEK");
      /* harmony import */


      var _vector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./vector.js */
      "IEcw");
      /*
      All material copyright ESRI, All Rights Reserved, unless otherwise specified.
      See https://js.arcgis.com/4.18/esri/copyright.txt for details.
      */


      function e() {
        var r = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : g;
        return [r[0], r[1], r[2], r[3]];
      }

      function a(r, n, t, o) {
        return f(r, n, t, o, _views_3d_support_stack_js__WEBPACK_IMPORTED_MODULE_1__["sv4d"].get());
      }

      function u(r, n) {
        return f(r[0], r[1], r[2], n, _views_3d_support_stack_js__WEBPACK_IMPORTED_MODULE_1__["sv4d"].get());
      }

      function c(r) {
        var n = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : e();
        return f(r[0], r[1], r[2], r[3], n);
      }

      function f(r, n, t, s) {
        var o = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : e();
        return o[0] = r, o[1] = n, o[2] = t, o[3] = s, o;
      }

      function i(n, t) {
        var s = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : e();
        return Object(_vec3_js__WEBPACK_IMPORTED_MODULE_0__["g"])(s, n), s[3] = t, s;
      }

      function p(r, s) {
        var a = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : e();
        return Object(_vec3_js__WEBPACK_IMPORTED_MODULE_0__["c"])(a, r, s), Object(_vec3_js__WEBPACK_IMPORTED_MODULE_0__["n"])(a, a), a[3] = Object(_vector_js__WEBPACK_IMPORTED_MODULE_2__["a"])(r, s), a;
      }

      function m(r) {
        return r;
      }

      var g = [0, 0, 1, 0];
      var l = Object.freeze({
        __proto__: null,
        create: e,
        wrap: a,
        wrapAxisAngle: u,
        copy: c,
        fromValues: f,
        fromAxisAndAngle: i,
        fromPoints: p,
        axis: m,
        UP: g
      });
      /***/
    },

    /***/
    "fDPZ":
    /*!*******************************************************************************************!*\
      !*** ./node_modules/@arcgis/core/views/3d/webgl-engine/lib/DefaultVertexBufferLayouts.js ***!
      \*******************************************************************************************/

    /*! exports provided: Pos2, Pos2Tex, Pos3, Pos3Col, Pos3NormalTex, Pos3Tex */

    /***/
    function fDPZ(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "Pos2", function () {
        return i;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "Pos2Tex", function () {
        return s;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "Pos3", function () {
        return e;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "Pos3Col", function () {
        return n;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "Pos3NormalTex", function () {
        return o;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "Pos3Tex", function () {
        return t;
      });
      /*
      All material copyright ESRI, All Rights Reserved, unless otherwise specified.
      See https://js.arcgis.com/4.18/esri/copyright.txt for details.
      */


      var e = [{
        name: "position",
        count: 3,
        type: 5126,
        offset: 0,
        stride: 12,
        normalized: !1
      }],
          t = [{
        name: "position",
        count: 3,
        type: 5126,
        offset: 0,
        stride: 20,
        normalized: !1
      }, {
        name: "uv0",
        count: 2,
        type: 5126,
        offset: 12,
        stride: 20,
        normalized: !1
      }],
          o = [{
        name: "position",
        count: 3,
        type: 5126,
        offset: 0,
        stride: 32,
        normalized: !1
      }, {
        name: "normal",
        count: 3,
        type: 5126,
        offset: 12,
        stride: 32,
        normalized: !1
      }, {
        name: "uv0",
        count: 2,
        type: 5126,
        offset: 24,
        stride: 32,
        normalized: !1
      }],
          n = [{
        name: "position",
        count: 3,
        type: 5126,
        offset: 0,
        stride: 16,
        normalized: !1
      }, {
        name: "color",
        count: 4,
        type: 5121,
        offset: 12,
        stride: 16,
        normalized: !1
      }],
          i = [{
        name: "position",
        count: 2,
        type: 5126,
        offset: 0,
        stride: 8,
        normalized: !1
      }],
          s = [{
        name: "position",
        count: 2,
        type: 5126,
        offset: 0,
        stride: 16,
        normalized: !1
      }, {
        name: "uv0",
        count: 2,
        type: 5126,
        offset: 8,
        stride: 16,
        normalized: !1
      }];
      /***/
    },

    /***/
    "fFEv":
    /*!********************************************************************************************!*\
      !*** ./node_modules/@arcgis/core/views/3d/webgl-engine/materials/internal/MaterialUtil.js ***!
      \********************************************************************************************/

    /*! exports provided: bindScreenSizePerspective, colorMixModes, computeInvDir, computeNormal, copyParameters, intersectAabbInvDir, intersectAabbInvDirBefore, intersectDrapedRenderLineGeometry, intersectTriangleGeometry, intersectTriangles, updateParameters, verticalOffsetAtDistance */

    /***/
    function fFEv(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "bindScreenSizePerspective", function () {
        return B;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "colorMixModes", function () {
        return N;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "computeInvDir", function () {
        return j;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "computeNormal", function () {
        return A;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "copyParameters", function () {
        return S;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "intersectAabbInvDir", function () {
        return P;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "intersectAabbInvDirBefore", function () {
        return V;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "intersectDrapedRenderLineGeometry", function () {
        return U;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "intersectTriangleGeometry", function () {
        return g;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "intersectTriangles", function () {
        return y;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "updateParameters", function () {
        return L;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "verticalOffsetAtDistance", function () {
        return O;
      });
      /* harmony import */


      var _core_maybe_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ../../../../../core/maybe.js */
      "srIe");
      /* harmony import */


      var _core_mathUtils_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ../../../../../core/mathUtils.js */
      "OKTS");
      /* harmony import */


      var _chunks_vec3f64_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ../../../../../chunks/vec3f64.js */
      "Cy1f");
      /* harmony import */


      var _chunks_vec3_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ../../../../../chunks/vec3.js */
      "5DEt");
      /* harmony import */


      var _geometry_support_aaBoundingBox_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ../../../../../geometry/support/aaBoundingBox.js */
      "QmHG");
      /* harmony import */


      var _lib_Util_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ../../lib/Util.js */
      "EVMh");
      /* harmony import */


      var _renderers_utils_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ../renderers/utils.js */
      "tiP8");
      /* harmony import */


      var _lib_screenSizePerspectiveUtils_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! ../../lib/screenSizePerspectiveUtils.js */
      "2hxh");
      /*
      All material copyright ESRI, All Rights Reserved, unless otherwise specified.
      See https://js.arcgis.com/4.18/esri/copyright.txt for details.
      */


      var d = Object(_geometry_support_aaBoundingBox_js__WEBPACK_IMPORTED_MODULE_4__["create"])(),
          h = _lib_Util_js__WEBPACK_IMPORTED_MODULE_5__["VertexAttrConstants"];

      function g(t, n, e, o, i, r, s) {
        var c = Object(_renderers_utils_js__WEBPACK_IMPORTED_MODULE_6__["isInstanceHidden"])(n),
            f = e.tolerance;
        if (!c) if (t.boundingInfo) Object(_lib_Util_js__WEBPACK_IMPORTED_MODULE_5__["assert"])("triangle" === t.data.primitiveType), M(t.boundingInfo, o, i, f, r, s);else {
          var _n11 = t.getIndices(h.POSITION),
              _e56 = t.getAttribute(h.POSITION);

          y(o, i, 0, _n11.length / 3, _n11, _e56, void 0, r, s);
        }
      }

      var x = Object(_chunks_vec3f64_js__WEBPACK_IMPORTED_MODULE_2__["c"])();

      function M(n, e, o, i, r, s) {
        var c = j(e, o, x);

        if (Object(_geometry_support_aaBoundingBox_js__WEBPACK_IMPORTED_MODULE_4__["setMin"])(d, n.getBBMin()), Object(_geometry_support_aaBoundingBox_js__WEBPACK_IMPORTED_MODULE_4__["setMax"])(d, n.getBBMax()), Object(_core_maybe_js__WEBPACK_IMPORTED_MODULE_0__["isSome"])(r) && r.applyToAabb(d), P(d, e, c, i)) {
          var _t49 = n.getPrimitiveIndices(),
              _c9 = n.getIndices(),
              f = n.getPosition(),
              a = _t49 ? _t49.length : _c9.length / 3;

          if (a > W) {
            var _t50 = n.getChildren();

            if (void 0 !== _t50) {
              for (var _n12 = 0; _n12 < 8; ++_n12) {
                void 0 !== _t50[_n12] && M(_t50[_n12], e, o, i, r, s);
              }

              return;
            }
          }

          y(e, o, 0, a, _c9, f, _t49, r, s);
        }
      }

      var I = Math.pow(2, -52),
          b = Object(_chunks_vec3f64_js__WEBPACK_IMPORTED_MODULE_2__["c"])();

      function y(n, e, o, i, r, s, c, f, a) {
        if (c) return function (n, e, o, i, r, s, c, f, a) {
          var l = s.data,
              u = s.offsetIdx,
              m = s.strideIdx,
              p = n[0],
              d = n[1],
              h = n[2],
              g = e[0],
              x = e[1],
              M = e[2],
              y = g - p,
              v = x - d,
              T = M - h;

          for (var _n13 = o; _n13 < i; ++_n13) {
            var _f$applyToVertex, _f$applyToVertex2, _f$applyToVertex3, _f$applyToVertex4, _f$applyToVertex5, _f$applyToVertex6;

            var _e57 = c[_n13];

            var _o19 = 3 * _e57,
                _i18 = u + m * r[_o19++],
                _s20 = l[_i18++],
                _g3 = l[_i18++],
                _x67 = l[_i18];

            _i18 = u + m * r[_o19++];
            var _M3 = l[_i18++],
                _j = l[_i18++],
                _P2 = l[_i18];
            _i18 = u + m * r[_o19];
            var _V = l[_i18++],
                _O2 = l[_i18++],
                _B3 = l[_i18];
            Object(_core_maybe_js__WEBPACK_IMPORTED_MODULE_0__["isSome"])(f) && ((_f$applyToVertex = f.applyToVertex(_s20, _g3, _x67, _n13), _f$applyToVertex2 = _slicedToArray(_f$applyToVertex, 3), _s20 = _f$applyToVertex2[0], _g3 = _f$applyToVertex2[1], _x67 = _f$applyToVertex2[2], _f$applyToVertex), (_f$applyToVertex3 = f.applyToVertex(_M3, _j, _P2, _n13), _f$applyToVertex4 = _slicedToArray(_f$applyToVertex3, 3), _M3 = _f$applyToVertex4[0], _j = _f$applyToVertex4[1], _P2 = _f$applyToVertex4[2], _f$applyToVertex3), (_f$applyToVertex5 = f.applyToVertex(_V, _O2, _B3, _n13), _f$applyToVertex6 = _slicedToArray(_f$applyToVertex5, 3), _V = _f$applyToVertex6[0], _O2 = _f$applyToVertex6[1], _B3 = _f$applyToVertex6[2], _f$applyToVertex5));

            var _S2 = _M3 - _s20,
                _L = _j - _g3,
                _U2 = _P2 - _x67,
                _E = _V - _s20,
                _N2 = _O2 - _g3,
                _W = _B3 - _x67,
                k = v * _W - _N2 * T,
                z = T * _E - _W * y,
                C = y * _N2 - _E * v,
                R = _S2 * k + _L * z + _U2 * C;

            if (Math.abs(R) <= I) continue;
            var H = p - _s20,
                X = d - _g3,
                Y = h - _x67,
                Z = H * k + X * z + Y * C;

            if (R > 0) {
              if (Z < 0 || Z > R) continue;
            } else if (Z > 0 || Z < R) continue;

            var _ = X * _U2 - _L * Y,
                q = Y * _S2 - _U2 * H,
                w = H * _L - _S2 * X,
                D = y * _ + v * q + T * w;

            if (R > 0) {
              if (D < 0 || Z + D > R) continue;
            } else if (D > 0 || Z + D < R) continue;

            var F = (_E * _ + _N2 * q + _W * w) / R;

            if (F >= 0) {
              a(F, A(_S2, _L, _U2, _E, _N2, _W, b), _e57);
            }
          }
        }(n, e, o, i, r, s, c, f, a);
        var l = s.data,
            u = s.offsetIdx,
            m = s.strideIdx,
            p = n[0],
            d = n[1],
            h = n[2],
            g = e[0] - p,
            x = e[1] - d,
            M = e[2] - h;

        for (var _n14 = o, _e58 = 3 * o; _n14 < i; ++_n14) {
          var _f$applyToVertex7, _f$applyToVertex8, _f$applyToVertex9, _f$applyToVertex10, _f$applyToVertex11, _f$applyToVertex12;

          var _o20 = u + m * r[_e58++],
              _i19 = l[_o20++],
              _s21 = l[_o20++],
              _c10 = l[_o20];

          _o20 = u + m * r[_e58++];
          var _y = l[_o20++],
              _v = l[_o20++],
              _T = l[_o20];
          _o20 = u + m * r[_e58++];
          var _j2 = l[_o20++],
              _P3 = l[_o20++],
              _V2 = l[_o20];
          Object(_core_maybe_js__WEBPACK_IMPORTED_MODULE_0__["isSome"])(f) && ((_f$applyToVertex7 = f.applyToVertex(_i19, _s21, _c10, _n14), _f$applyToVertex8 = _slicedToArray(_f$applyToVertex7, 3), _i19 = _f$applyToVertex8[0], _s21 = _f$applyToVertex8[1], _c10 = _f$applyToVertex8[2], _f$applyToVertex7), (_f$applyToVertex9 = f.applyToVertex(_y, _v, _T, _n14), _f$applyToVertex10 = _slicedToArray(_f$applyToVertex9, 3), _y = _f$applyToVertex10[0], _v = _f$applyToVertex10[1], _T = _f$applyToVertex10[2], _f$applyToVertex9), (_f$applyToVertex11 = f.applyToVertex(_j2, _P3, _V2, _n14), _f$applyToVertex12 = _slicedToArray(_f$applyToVertex11, 3), _j2 = _f$applyToVertex12[0], _P3 = _f$applyToVertex12[1], _V2 = _f$applyToVertex12[2], _f$applyToVertex11));

          var _O3 = _y - _i19,
              _B4 = _v - _s21,
              _S3 = _T - _c10,
              _L2 = _j2 - _i19,
              _U3 = _P3 - _s21,
              _E2 = _V2 - _c10,
              _N3 = x * _E2 - _U3 * M,
              _W2 = M * _L2 - _E2 * g,
              k = g * _U3 - _L2 * x,
              z = _O3 * _N3 + _B4 * _W2 + _S3 * k;

          if (Math.abs(z) <= I) continue;
          var C = p - _i19,
              R = d - _s21,
              H = h - _c10,
              X = C * _N3 + R * _W2 + H * k;

          if (z > 0) {
            if (X < 0 || X > z) continue;
          } else if (X > 0 || X < z) continue;

          var Y = R * _S3 - _B4 * H,
              Z = H * _O3 - _S3 * C,
              _ = C * _B4 - _O3 * R,
              q = g * Y + x * Z + M * _;

          if (z > 0) {
            if (q < 0 || X + q > z) continue;
          } else if (q > 0 || X + q < z) continue;

          var w = (_L2 * Y + _U3 * Z + _E2 * _) / z;

          if (w >= 0) {
            a(w, A(_O3, _B4, _S3, _L2, _U3, _E2, b), _n14);
          }
        }
      }

      var v = Object(_chunks_vec3f64_js__WEBPACK_IMPORTED_MODULE_2__["c"])(),
          T = Object(_chunks_vec3f64_js__WEBPACK_IMPORTED_MODULE_2__["c"])();

      function A(t, n, e, o, c, f, a) {
        return Object(_chunks_vec3_js__WEBPACK_IMPORTED_MODULE_3__["s"])(v, t, n, e), Object(_chunks_vec3_js__WEBPACK_IMPORTED_MODULE_3__["s"])(T, o, c, f), Object(_chunks_vec3_js__WEBPACK_IMPORTED_MODULE_3__["c"])(a, v, T), Object(_chunks_vec3_js__WEBPACK_IMPORTED_MODULE_3__["n"])(a, a), a;
      }

      function j(t, n, e) {
        return Object(_chunks_vec3_js__WEBPACK_IMPORTED_MODULE_3__["s"])(e, 1 / (n[0] - t[0]), 1 / (n[1] - t[1]), 1 / (n[2] - t[2]));
      }

      function P(t, n, e, o) {
        return V(t, n, e, o, 1 / 0);
      }

      function V(t, n, e, o, i) {
        var r = (t[0] - o - n[0]) * e[0],
            s = (t[3] + o - n[0]) * e[0];
        var c = Math.min(r, s),
            f = Math.max(r, s);
        var a = (t[1] - o - n[1]) * e[1],
            l = (t[4] + o - n[1]) * e[1];
        if (f = Math.min(f, Math.max(a, l)), f < 0) return !1;
        if (c = Math.max(c, Math.min(a, l)), c > f) return !1;
        var u = (t[2] - o - n[2]) * e[2],
            m = (t[5] + o - n[2]) * e[2];
        return f = Math.min(f, Math.max(u, m)), !(f < 0) && (c = Math.max(c, Math.min(u, m)), !(c > f) && c < i);
      }

      function O(t, e, o, i, r) {
        var s = (o.screenLength || 0) * t.pixelRatio;
        r && (s = Object(_lib_screenSizePerspectiveUtils_js__WEBPACK_IMPORTED_MODULE_7__["scale"])(s, i, e, r));
        var c = s * Math.tan(.5 * t.fovY) / (.5 * t.fullHeight);
        return Object(_core_mathUtils_js__WEBPACK_IMPORTED_MODULE_1__["glClamp"])(c * e, o.minWorldLength || 0, null != o.maxWorldLength ? o.maxWorldLength : 1 / 0);
      }

      function B(t, n, e) {
        if (!t) return;
        var o = t.parameters,
            i = t.paddingPixelsOverride;
        n.setUniform4f(e, o.divisor, o.offset, o.minPixelSize, i);
      }

      function S(t, n) {
        var e = n ? S(n) : {};

        for (var _n15 in t) {
          var o = t[_n15];
          o && o.forEach && (o = E(o)), null == o && _n15 in e || (e[_n15] = o);
        }

        return e;
      }

      function L(t, n) {
        var e = !1;

        for (var o in n) {
          var _i20 = n[o];
          void 0 !== _i20 && (e = !0, Array.isArray(_i20) ? t[o] = _i20.slice() : t[o] = _i20);
        }

        return e;
      }

      function U(t, n, o, i, r) {
        if (!n.options.selectionMode) return;
        var s = t.getAttribute(h.POSITION).data,
            c = t.getAttribute(h.SIZE),
            f = c && c.data[0],
            a = o[0],
            l = o[1],
            u = ((f + i) / 2 + 4) * t.screenToWorldRatio;
        var m = Number.MAX_VALUE;

        for (var _t51 = 0; _t51 < s.length - 5; _t51 += 3) {
          var _n16 = s[_t51],
              _o21 = s[_t51 + 1],
              _i21 = a - _n16,
              _r33 = l - _o21,
              _c11 = s[_t51 + 3] - _n16,
              _f35 = s[_t51 + 4] - _o21,
              _u7 = Object(_core_mathUtils_js__WEBPACK_IMPORTED_MODULE_1__["clamp"])((_c11 * _i21 + _f35 * _r33) / (_c11 * _c11 + _f35 * _f35), 0, 1),
              p = _c11 * _u7 - _i21,
              _d4 = _f35 * _u7 - _r33,
              _h3 = p * p + _d4 * _d4;

          _h3 < m && (m = _h3);
        }

        m < u * u && r();
      }

      function E(t) {
        var n = [];
        return t.forEach(function (t) {
          return n.push(t);
        }), n;
      }

      var N = {
        multiply: 1,
        ignore: 2,
        replace: 3,
        tint: 4
      },
          W = 1e3;
      /***/
    },

    /***/
    "fLTx":
    /*!************************************************************************************************************************!*\
      !*** ./node_modules/@arcgis/core/views/3d/webgl-engine/core/shaderLibrary/attributes/VertexTextureCoordinates.glsl.js ***!
      \************************************************************************************************************************/

    /*! exports provided: VertexTextureCoordinates */

    /***/
    function fLTx(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "VertexTextureCoordinates", function () {
        return u;
      });
      /* harmony import */


      var _shaderModules_interfaces_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ../../shaderModules/interfaces.js */
      "OIYib");
      /* harmony import */


      var _TextureCoordinateAttribute_glsl_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./TextureCoordinateAttribute.glsl.js */
      "368d");
      /* harmony import */


      var _util_TextureAtlasLookup_glsl_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ../util/TextureAtlasLookup.glsl.js */
      "UhFW");
      /*
      All material copyright ESRI, All Rights Reserved, unless otherwise specified.
      See https://js.arcgis.com/4.18/esri/copyright.txt for details.
      */


      function u(u, a) {
        u.include(_TextureCoordinateAttribute_glsl_js__WEBPACK_IMPORTED_MODULE_1__["TextureCoordinateAttribute"], a), u.fragment.code.add(_shaderModules_interfaces_js__WEBPACK_IMPORTED_MODULE_0__["glsl"](_templateObject109 || (_templateObject109 = _taggedTemplateLiteral(["\n  struct TextureLookupParameter {\n    vec2 uv;\n    ", "\n  } vtc;\n  "])), a.supportsTextureAtlas ? "vec2 size;" : "")), 1 === a.attributeTextureCoordinates && u.fragment.code.add(_shaderModules_interfaces_js__WEBPACK_IMPORTED_MODULE_0__["glsl"](_templateObject110 || (_templateObject110 = _taggedTemplateLiteral(["\n      vec4 textureLookup(sampler2D tex, TextureLookupParameter params) {\n        return texture2D(tex, params.uv);\n      }\n    "])))), 2 === a.attributeTextureCoordinates && (u.include(_util_TextureAtlasLookup_glsl_js__WEBPACK_IMPORTED_MODULE_2__["TextureAtlasLookup"]), u.fragment.code.add(_shaderModules_interfaces_js__WEBPACK_IMPORTED_MODULE_0__["glsl"](_templateObject111 || (_templateObject111 = _taggedTemplateLiteral(["\n    vec4 textureLookup(sampler2D tex, TextureLookupParameter params) {\n        return textureAtlasLookup(tex, params.size, params.uv, vuvRegion);\n      }\n    "])))));
      }
      /***/

    },

    /***/
    "fPvx":
    /*!****************************************************!*\
      !*** ./node_modules/@arcgis/core/chunks/scalar.js ***!
      \****************************************************/

    /*! exports provided: c, m, s */

    /***/
    function fPvx(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "c", function () {
        return e;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "m", function () {
        return t;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "s", function () {
        return r;
      });
      /*
      All material copyright ESRI, All Rights Reserved, unless otherwise specified.
      See https://js.arcgis.com/4.18/esri/copyright.txt for details.
      */


      function e(e, t, r) {
        var n = e.typedBuffer,
            o = e.typedBufferStride,
            c = t.typedBuffer,
            d = t.typedBufferStride,
            f = r ? r.count : t.count;
        var s = (r && r.dstIndex ? r.dstIndex : 0) * o,
            u = (r && r.srcIndex ? r.srcIndex : 0) * d;

        for (var _e59 = 0; _e59 < f; ++_e59) {
          n[s] = c[u], s += o, u += d;
        }
      }

      function t(e, t) {
        var r = e.count;
        t || (t = new e.TypedArrayConstructor(r));

        for (var _n17 = 0; _n17 < r; _n17++) {
          t[_n17] = e.get(_n17);
        }

        return t;
      }

      var r = Object.freeze({
        __proto__: null,
        copy: e,
        makeDense: t
      });
      /***/
    },

    /***/
    "fRF2":
    /*!************************************************************************************************************!*\
      !*** ./node_modules/@arcgis/core/views/3d/webgl-engine/core/shaderLibrary/attributes/VertexNormal.glsl.js ***!
      \************************************************************************************************************/

    /*! exports provided: VertexNormal */

    /***/
    function fRF2(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "VertexNormal", function () {
        return l;
      });
      /* harmony import */


      var _shaderModules_interfaces_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ../../shaderModules/interfaces.js */
      "OIYib");
      /* harmony import */


      var _NormalAttribute_glsl_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./NormalAttribute.glsl.js */
      "wzLF");
      /* harmony import */


      var _VertexPosition_glsl_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./VertexPosition.glsl.js */
      "vEBI");
      /*
      All material copyright ESRI, All Rights Reserved, unless otherwise specified.
      See https://js.arcgis.com/4.18/esri/copyright.txt for details.
      */


      function l(l, e) {
        0 === e.normalType || 1 === e.normalType ? (l.include(_NormalAttribute_glsl_js__WEBPACK_IMPORTED_MODULE_1__["NormalAttribute"], e), l.varyings.add("vNormalWorld", "vec3"), l.varyings.add("vNormalView", "vec3"), l.vertex.uniforms.add("uTransformNormal_GlobalFromModel", "mat3"), l.vertex.uniforms.add("uTransformNormal_ViewFromGlobal", "mat3"), l.vertex.code.add(_shaderModules_interfaces_js__WEBPACK_IMPORTED_MODULE_0__["glsl"](_templateObject112 || (_templateObject112 = _taggedTemplateLiteral(["\n      void forwardNormal() {\n        vNormalWorld = uTransformNormal_GlobalFromModel * normalModel();\n        vNormalView = uTransformNormal_ViewFromGlobal * vNormalWorld;\n      }\n    "]))))) : 2 === e.normalType ? (l.include(_VertexPosition_glsl_js__WEBPACK_IMPORTED_MODULE_2__["VertexPosition"], e), l.varyings.add("vNormalWorld", "vec3"), l.vertex.code.add(_shaderModules_interfaces_js__WEBPACK_IMPORTED_MODULE_0__["glsl"](_templateObject113 || (_templateObject113 = _taggedTemplateLiteral(["\n    void forwardNormal() {\n      vNormalWorld = ", "\n    }\n    "])), 1 === e.viewingMode ? _shaderModules_interfaces_js__WEBPACK_IMPORTED_MODULE_0__["glsl"](_templateObject114 || (_templateObject114 = _taggedTemplateLiteral(["normalize(vPositionWorldCameraRelative);"]))) : _shaderModules_interfaces_js__WEBPACK_IMPORTED_MODULE_0__["glsl"](_templateObject115 || (_templateObject115 = _taggedTemplateLiteral(["vec3(0.0, 0.0, 1.0);"])))))) : l.vertex.code.add(_shaderModules_interfaces_js__WEBPACK_IMPORTED_MODULE_0__["glsl"](_templateObject116 || (_templateObject116 = _taggedTemplateLiteral(["\n      void forwardNormal() {}\n    "]))));
      }

      !function (o) {
        o.bindUniforms = function (o, r) {
          o.setUniformMatrix4fv("viewNormal", r);
        };
      }(l || (l = {}));
      /***/
    },

    /***/
    "fiGu":
    /*!***************************************************************************************************************************!*\
      !*** ./node_modules/@arcgis/core/views/3d/webgl-engine/core/shaderLibrary/default/DefaultMaterialAuxiliaryPasses.glsl.js ***!
      \***************************************************************************************************************************/

    /*! exports provided: DefaultMaterialAuxiliaryPasses */

    /***/
    function fiGu(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "DefaultMaterialAuxiliaryPasses", function () {
        return u;
      });
      /* harmony import */


      var _shaderModules_interfaces_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ../../shaderModules/interfaces.js */
      "OIYib");
      /* harmony import */


      var _Transform_glsl_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ../Transform.glsl.js */
      "Tbkp");
      /* harmony import */


      var _Slice_glsl_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ../Slice.glsl.js */
      "0nJL");
      /* harmony import */


      var _output_OutputHighlight_glsl_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ../output/OutputHighlight.glsl.js */
      "agdK");
      /* harmony import */


      var _shading_VisualVariables_glsl_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ../shading/VisualVariables.glsl.js */
      "viRi");
      /* harmony import */


      var _util_AlphaDiscard_glsl_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ../util/AlphaDiscard.glsl.js */
      "69UF");
      /* harmony import */


      var _output_OutputDepth_glsl_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ../output/OutputDepth.glsl.js */
      "wtEh");
      /* harmony import */


      var _attributes_TextureCoordinateAttribute_glsl_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! ../attributes/TextureCoordinateAttribute.glsl.js */
      "368d");
      /* harmony import */


      var _attributes_NormalAttribute_glsl_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! ../attributes/NormalAttribute.glsl.js */
      "wzLF");
      /* harmony import */


      var _attributes_VertexNormal_glsl_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! ../attributes/VertexNormal.glsl.js */
      "fRF2");
      /*
      All material copyright ESRI, All Rights Reserved, unless otherwise specified.
      See https://js.arcgis.com/4.18/esri/copyright.txt for details.
      */


      function u(u, p) {
        var v = u.vertex.code,
            c = u.fragment.code;
        1 !== p.output && 3 !== p.output || (u.include(_Transform_glsl_js__WEBPACK_IMPORTED_MODULE_1__["Transform"], {
          linearDepth: !0
        }), u.include(_attributes_TextureCoordinateAttribute_glsl_js__WEBPACK_IMPORTED_MODULE_7__["TextureCoordinateAttribute"], p), u.include(_shading_VisualVariables_glsl_js__WEBPACK_IMPORTED_MODULE_4__["VisualVariables"], p), u.include(_output_OutputDepth_glsl_js__WEBPACK_IMPORTED_MODULE_6__["OutputDepth"], p), u.include(_Slice_glsl_js__WEBPACK_IMPORTED_MODULE_2__["Slice"], p), u.vertex.uniforms.add("nearFar", "vec2"), u.varyings.add("depth", "float"), p.hasColorTexture && u.fragment.uniforms.add("tex", "sampler2D"), v.add(_shaderModules_interfaces_js__WEBPACK_IMPORTED_MODULE_0__["glsl"](_templateObject117 || (_templateObject117 = _taggedTemplateLiteral(["\n      void main(void) {\n        vpos = calculateVPos();\n        vpos = subtractOrigin(vpos);\n        vpos = addVerticalOffset(vpos, localOrigin);\n        gl_Position = transformPositionWithDepth(proj, view, vpos, nearFar, depth);\n        forwardTextureCoordinates();\n      }\n    "])))), u.include(_util_AlphaDiscard_glsl_js__WEBPACK_IMPORTED_MODULE_5__["DiscardOrAdjustAlpha"], p), c.add(_shaderModules_interfaces_js__WEBPACK_IMPORTED_MODULE_0__["glsl"](_templateObject118 || (_templateObject118 = _taggedTemplateLiteral(["\n      void main(void) {\n        discardBySlice(vpos);\n        ", "\n        outputDepth(depth);\n      }\n    "])), p.hasColorTexture ? _shaderModules_interfaces_js__WEBPACK_IMPORTED_MODULE_0__["glsl"](_templateObject119 || (_templateObject119 = _taggedTemplateLiteral(["\n        vec4 texColor = texture2D(tex, vuv0);\n        discardOrAdjustAlpha(texColor);"]))) : ""))), 2 === p.output && (u.include(_Transform_glsl_js__WEBPACK_IMPORTED_MODULE_1__["Transform"], {
          linearDepth: !1
        }), u.include(_attributes_NormalAttribute_glsl_js__WEBPACK_IMPORTED_MODULE_8__["NormalAttribute"], p), u.include(_attributes_VertexNormal_glsl_js__WEBPACK_IMPORTED_MODULE_9__["VertexNormal"], p), u.include(_attributes_TextureCoordinateAttribute_glsl_js__WEBPACK_IMPORTED_MODULE_7__["TextureCoordinateAttribute"], p), u.include(_shading_VisualVariables_glsl_js__WEBPACK_IMPORTED_MODULE_4__["VisualVariables"], p), p.hasColorTexture && u.fragment.uniforms.add("tex", "sampler2D"), u.vertex.uniforms.add("viewNormal", "mat4"), u.varyings.add("vPositionView", "vec3"), v.add(_shaderModules_interfaces_js__WEBPACK_IMPORTED_MODULE_0__["glsl"](_templateObject120 || (_templateObject120 = _taggedTemplateLiteral(["\n      void main(void) {\n        vpos = calculateVPos();\n        vpos = subtractOrigin(vpos);\n        ", "\n        vpos = addVerticalOffset(vpos, localOrigin);\n        gl_Position = transformPosition(proj, view, vpos);\n        forwardTextureCoordinates();\n      }\n    "])), 0 === p.normalType ? _shaderModules_interfaces_js__WEBPACK_IMPORTED_MODULE_0__["glsl"](_templateObject121 || (_templateObject121 = _taggedTemplateLiteral(["\n        vNormalWorld = dpNormalView(vvLocalNormal(normalModel()));"]))) : "")), u.include(_Slice_glsl_js__WEBPACK_IMPORTED_MODULE_2__["Slice"], p), u.include(_util_AlphaDiscard_glsl_js__WEBPACK_IMPORTED_MODULE_5__["DiscardOrAdjustAlpha"], p), c.add(_shaderModules_interfaces_js__WEBPACK_IMPORTED_MODULE_0__["glsl"](_templateObject122 || (_templateObject122 = _taggedTemplateLiteral(["\n      void main() {\n        discardBySlice(vpos);\n        ", "\n\n        ", "\n        gl_FragColor = vec4(vec3(0.5) + 0.5 * normal, 1.0);\n      }\n    "])), p.hasColorTexture ? _shaderModules_interfaces_js__WEBPACK_IMPORTED_MODULE_0__["glsl"](_templateObject123 || (_templateObject123 = _taggedTemplateLiteral(["\n        vec4 texColor = texture2D(tex, vuv0);\n        discardOrAdjustAlpha(texColor);"]))) : "", 3 === p.normalType ? _shaderModules_interfaces_js__WEBPACK_IMPORTED_MODULE_0__["glsl"](_templateObject124 || (_templateObject124 = _taggedTemplateLiteral(["\n            vec3 normal = screenDerivativeNormal(vPositionView);"]))) : _shaderModules_interfaces_js__WEBPACK_IMPORTED_MODULE_0__["glsl"](_templateObject125 || (_templateObject125 = _taggedTemplateLiteral(["\n            vec3 normal = normalize(vNormalWorld);\n            if (gl_FrontFacing == false) normal = -normal;"])))))), 4 === p.output && (u.include(_Transform_glsl_js__WEBPACK_IMPORTED_MODULE_1__["Transform"], {
          linearDepth: !1
        }), u.include(_attributes_TextureCoordinateAttribute_glsl_js__WEBPACK_IMPORTED_MODULE_7__["TextureCoordinateAttribute"], p), u.include(_shading_VisualVariables_glsl_js__WEBPACK_IMPORTED_MODULE_4__["VisualVariables"], p), p.hasColorTexture && u.fragment.uniforms.add("tex", "sampler2D"), v.add(_shaderModules_interfaces_js__WEBPACK_IMPORTED_MODULE_0__["glsl"](_templateObject126 || (_templateObject126 = _taggedTemplateLiteral(["\n      void main(void) {\n        vpos = calculateVPos();\n        vpos = subtractOrigin(vpos);\n        vpos = addVerticalOffset(vpos, localOrigin);\n        gl_Position = transformPosition(proj, view, vpos);\n        forwardTextureCoordinates();\n      }\n    "])))), u.include(_Slice_glsl_js__WEBPACK_IMPORTED_MODULE_2__["Slice"], p), u.include(_util_AlphaDiscard_glsl_js__WEBPACK_IMPORTED_MODULE_5__["DiscardOrAdjustAlpha"], p), u.include(_output_OutputHighlight_glsl_js__WEBPACK_IMPORTED_MODULE_3__["OutputHighlight"]), c.add(_shaderModules_interfaces_js__WEBPACK_IMPORTED_MODULE_0__["glsl"](_templateObject127 || (_templateObject127 = _taggedTemplateLiteral(["\n      void main() {\n        discardBySlice(vpos);\n        ", "\n        outputHighlight();\n      }\n    "])), p.hasColorTexture ? _shaderModules_interfaces_js__WEBPACK_IMPORTED_MODULE_0__["glsl"](_templateObject128 || (_templateObject128 = _taggedTemplateLiteral(["\n        vec4 texColor = texture2D(tex, vuv0);\n        discardOrAdjustAlpha(texColor);"]))) : "")));
      }
      /***/

    },

    /***/
    "g84+":
    /*!***************************************************!*\
      !*** ./node_modules/@arcgis/core/chunks/mat42.js ***!
      \***************************************************/

    /*! exports provided: c, m */

    /***/
    function g84(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "c", function () {
        return e;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "m", function () {
        return t;
      });
      /*
      All material copyright ESRI, All Rights Reserved, unless otherwise specified.
      See https://js.arcgis.com/4.18/esri/copyright.txt for details.
      */


      function e(e, t, r) {
        var d = e.typedBuffer,
            f = e.typedBufferStride,
            n = t.typedBuffer,
            o = t.typedBufferStride,
            c = r ? r.count : t.count;
        var u = (r && r.dstIndex ? r.dstIndex : 0) * f,
            p = (r && r.srcIndex ? r.srcIndex : 0) * o;

        for (var _e60 = 0; _e60 < c; ++_e60) {
          for (var _e61 = 0; _e61 < 16; ++_e61) {
            d[u + _e61] = n[p + _e61];
          }

          u += f, p += o;
        }
      }

      var t = Object.freeze({
        __proto__: null,
        copy: e
      });
      /***/
    },

    /***/
    "h7dw":
    /*!*****************************************************************************!*\
      !*** ./node_modules/@arcgis/core/views/3d/webgl-engine/lib/StencilUtils.js ***!
      \*****************************************************************************/

    /*! exports provided: depthCompareAlways, depthCompareLess, renderWhenBitIsNotSet, replaceBitWhenDepthTestPasses, stencilBaseAllZerosParams, stencilToolMaskBaseParams, stencilToolMaskOccluderParams, stencilToolTransparentOccluderParams, stencilWriteMaskOff, stencilWriteMaskOn */

    /***/
    function h7dw(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "depthCompareAlways", function () {
        return n;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "depthCompareLess", function () {
        return a;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "renderWhenBitIsNotSet", function () {
        return s;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "replaceBitWhenDepthTestPasses", function () {
        return o;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "stencilBaseAllZerosParams", function () {
        return c;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "stencilToolMaskBaseParams", function () {
        return t;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "stencilToolMaskOccluderParams", function () {
        return u;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "stencilToolTransparentOccluderParams", function () {
        return e;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "stencilWriteMaskOff", function () {
        return i;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "stencilWriteMaskOn", function () {
        return f;
      });
      /*
      All material copyright ESRI, All Rights Reserved, unless otherwise specified.
      See https://js.arcgis.com/4.18/esri/copyright.txt for details.
      */


      var a = {
        func: 513
      },
          n = {
        func: 519
      },
          f = {
        mask: 255
      },
          i = {
        mask: 0
      },
          s = function s(a) {
        return {
          "function": {
            func: 517,
            ref: a,
            mask: a
          },
          operation: {
            fail: 7680,
            zFail: 7680,
            zPass: 7680
          }
        };
      },
          o = function o(a) {
        return {
          "function": {
            func: 519,
            ref: a,
            mask: a
          },
          operation: {
            fail: 7680,
            zFail: 7680,
            zPass: 7681
          }
        };
      },
          c = {
        "function": {
          func: 519,
          ref: 2,
          mask: 2
        },
        operation: {
          fail: 7680,
          zFail: 7680,
          zPass: 0
        }
      },
          t = {
        "function": {
          func: 519,
          ref: 2,
          mask: 2
        },
        operation: {
          fail: 7680,
          zFail: 7680,
          zPass: 7681
        }
      },
          u = {
        "function": {
          func: 514,
          ref: 2,
          mask: 2
        },
        operation: {
          fail: 7680,
          zFail: 7680,
          zPass: 7680
        }
      },
          e = {
        "function": {
          func: 517,
          ref: 2,
          mask: 2
        },
        operation: {
          fail: 7680,
          zFail: 7680,
          zPass: 7680
        }
      };
      /***/

    },

    /***/
    "jZU2":
    /*!*********************************************************!*\
      !*** ./node_modules/@arcgis/core/chunks/lineSegment.js ***!
      \*********************************************************/

    /*! exports provided: a, b, c, d, e, f, g, h, i, j, k, l, p, w */

    /***/
    function jZU2(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "a", function () {
        return l;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "b", function () {
        return b;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "c", function () {
        return p;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "d", function () {
        return h;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "e", function () {
        return d;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "f", function () {
        return m;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "g", function () {
        return j;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "h", function () {
        return M;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "i", function () {
        return B;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "j", function () {
        return w;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "k", function () {
        return P;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "l", function () {
        return y;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "p", function () {
        return A;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "w", function () {
        return v;
      });
      /* harmony import */


      var _core_mathUtils_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ../core/mathUtils.js */
      "OKTS");
      /* harmony import */


      var _vec3f64_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./vec3f64.js */
      "Cy1f");
      /* harmony import */


      var _vec3_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./vec3.js */
      "5DEt");
      /* harmony import */


      var _core_ObjectStack_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ../core/ObjectStack.js */
      "IRkY");
      /* harmony import */


      var _views_3d_support_stack_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ../views/3d/support/stack.js */
      "8JEK");
      /*
      All material copyright ESRI, All Rights Reserved, unless otherwise specified.
      See https://js.arcgis.com/4.18/esri/copyright.txt for details.
      */


      function p(t) {
        return t ? {
          origin: Object(_vec3f64_js__WEBPACK_IMPORTED_MODULE_1__["b"])(t.origin),
          vector: Object(_vec3f64_js__WEBPACK_IMPORTED_MODULE_1__["b"])(t.vector)
        } : {
          origin: Object(_vec3f64_js__WEBPACK_IMPORTED_MODULE_1__["c"])(),
          vector: Object(_vec3f64_js__WEBPACK_IMPORTED_MODULE_1__["c"])()
        };
      }

      function v(t, r) {
        var n = S.get();
        return n.origin = t, n.vector = r, n;
      }

      function l(t) {
        var r = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : p();
        return m(t.origin, t.vector, r);
      }

      function m(t, r) {
        var n = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : p();
        return Object(_vec3_js__WEBPACK_IMPORTED_MODULE_2__["g"])(n.origin, t), Object(_vec3_js__WEBPACK_IMPORTED_MODULE_2__["g"])(n.vector, r), n;
      }

      function b(t, r) {
        var n = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : p();
        return Object(_vec3_js__WEBPACK_IMPORTED_MODULE_2__["g"])(n.origin, t), Object(_vec3_js__WEBPACK_IMPORTED_MODULE_2__["f"])(n.vector, r, t), n;
      }

      function h(r, n) {
        var e = Object(_vec3_js__WEBPACK_IMPORTED_MODULE_2__["f"])(_views_3d_support_stack_js__WEBPACK_IMPORTED_MODULE_4__["sv3d"].get(), n, r.origin),
            s = Object(_vec3_js__WEBPACK_IMPORTED_MODULE_2__["d"])(r.vector, e),
            a = Object(_vec3_js__WEBPACK_IMPORTED_MODULE_2__["d"])(r.vector, r.vector),
            u = Object(_core_mathUtils_js__WEBPACK_IMPORTED_MODULE_0__["clamp"])(s / a, 0, 1),
            g = Object(_vec3_js__WEBPACK_IMPORTED_MODULE_2__["f"])(_views_3d_support_stack_js__WEBPACK_IMPORTED_MODULE_4__["sv3d"].get(), Object(_vec3_js__WEBPACK_IMPORTED_MODULE_2__["a"])(_views_3d_support_stack_js__WEBPACK_IMPORTED_MODULE_4__["sv3d"].get(), r.vector, u), e);
        return Object(_vec3_js__WEBPACK_IMPORTED_MODULE_2__["d"])(g, g);
      }

      function d(t, r) {
        return Math.sqrt(h(t, r));
      }

      function j(t, r, n) {
        return A(t, r, 0, 1, n);
      }

      function M(t, r, n) {
        return Object(_vec3_js__WEBPACK_IMPORTED_MODULE_2__["b"])(n, t.origin, Object(_vec3_js__WEBPACK_IMPORTED_MODULE_2__["a"])(n, t.vector, r));
      }

      function A(r, n, e, u, g) {
        var p = r.vector,
            v = r.origin,
            l = Object(_vec3_js__WEBPACK_IMPORTED_MODULE_2__["f"])(_views_3d_support_stack_js__WEBPACK_IMPORTED_MODULE_4__["sv3d"].get(), n, v),
            m = Object(_vec3_js__WEBPACK_IMPORTED_MODULE_2__["l"])(p),
            b = Object(_vec3_js__WEBPACK_IMPORTED_MODULE_2__["d"])(p, l) / m;
        return Object(_vec3_js__WEBPACK_IMPORTED_MODULE_2__["a"])(g, p, Object(_core_mathUtils_js__WEBPACK_IMPORTED_MODULE_0__["clamp"])(b, e, u)), Object(_vec3_js__WEBPACK_IMPORTED_MODULE_2__["b"])(g, g, r.origin);
      }

      function B(t, r) {
        if (_(t, v(r.origin, r.direction), !1, k)) {
          var _r34 = k.tA,
              _n18 = k.pB,
              e = k.distance2;
          if (_r34 >= 0 && _r34 <= 1) return e;
          if (_r34 < 0) return Object(_vec3_js__WEBPACK_IMPORTED_MODULE_2__["h"])(t.origin, _n18);
          if (_r34 > 1) return Object(_vec3_js__WEBPACK_IMPORTED_MODULE_2__["h"])(Object(_vec3_js__WEBPACK_IMPORTED_MODULE_2__["b"])(_views_3d_support_stack_js__WEBPACK_IMPORTED_MODULE_4__["sv3d"].get(), t.origin, t.vector), _n18);
        }

        return null;
      }

      function w(t, r, n) {
        return !!_(t, r, !0, k) && (Object(_vec3_js__WEBPACK_IMPORTED_MODULE_2__["g"])(n, k.pA), !0);
      }

      function P(t, r) {
        return _(t, r, !0, k) ? k.distance2 : null;
      }

      function _(r, n, e, o) {
        var i = 1e-6,
            c = r.origin,
            a = Object(_vec3_js__WEBPACK_IMPORTED_MODULE_2__["b"])(_views_3d_support_stack_js__WEBPACK_IMPORTED_MODULE_4__["sv3d"].get(), c, r.vector),
            g = n.origin,
            p = Object(_vec3_js__WEBPACK_IMPORTED_MODULE_2__["b"])(_views_3d_support_stack_js__WEBPACK_IMPORTED_MODULE_4__["sv3d"].get(), g, n.vector),
            v = _views_3d_support_stack_js__WEBPACK_IMPORTED_MODULE_4__["sv3d"].get(),
            l = _views_3d_support_stack_js__WEBPACK_IMPORTED_MODULE_4__["sv3d"].get();

        if (v[0] = c[0] - g[0], v[1] = c[1] - g[1], v[2] = c[2] - g[2], l[0] = p[0] - g[0], l[1] = p[1] - g[1], l[2] = p[2] - g[2], Math.abs(l[0]) < i && Math.abs(l[1]) < i && Math.abs(l[2]) < i) return !1;

        var m = _views_3d_support_stack_js__WEBPACK_IMPORTED_MODULE_4__["sv3d"].get();

        if (m[0] = a[0] - c[0], m[1] = a[1] - c[1], m[2] = a[2] - c[2], Math.abs(m[0]) < i && Math.abs(m[1]) < i && Math.abs(m[2]) < i) return !1;
        var b = v[0] * l[0] + v[1] * l[1] + v[2] * l[2],
            h = l[0] * m[0] + l[1] * m[1] + l[2] * m[2],
            d = v[0] * m[0] + v[1] * m[1] + v[2] * m[2],
            j = l[0] * l[0] + l[1] * l[1] + l[2] * l[2],
            M = (m[0] * m[0] + m[1] * m[1] + m[2] * m[2]) * j - h * h;
        if (Math.abs(M) < i) return !1;
        var A = (b * h - d * j) / M,
            B = (b + h * A) / j;
        e && (A = Object(_core_mathUtils_js__WEBPACK_IMPORTED_MODULE_0__["clamp"])(A, 0, 1), B = Object(_core_mathUtils_js__WEBPACK_IMPORTED_MODULE_0__["clamp"])(B, 0, 1));

        var w = _views_3d_support_stack_js__WEBPACK_IMPORTED_MODULE_4__["sv3d"].get(),
            P = _views_3d_support_stack_js__WEBPACK_IMPORTED_MODULE_4__["sv3d"].get();

        return w[0] = c[0] + A * m[0], w[1] = c[1] + A * m[1], w[2] = c[2] + A * m[2], P[0] = g[0] + B * l[0], P[1] = g[1] + B * l[1], P[2] = g[2] + B * l[2], o.tA = A, o.tB = B, o.pA = w, o.pB = P, o.distance2 = Object(_vec3_js__WEBPACK_IMPORTED_MODULE_2__["h"])(w, P), !0;
      }

      var k = {
        tA: 0,
        tB: 0,
        pA: Object(_vec3f64_js__WEBPACK_IMPORTED_MODULE_1__["c"])(),
        pB: Object(_vec3f64_js__WEBPACK_IMPORTED_MODULE_1__["c"])(),
        distance2: 0
      },
          S = new _core_ObjectStack_js__WEBPACK_IMPORTED_MODULE_3__["ObjectStack"](function () {
        return {
          origin: null,
          vector: null
        };
      });
      var y = Object.freeze({
        __proto__: null,
        create: p,
        wrap: v,
        copy: l,
        fromValues: m,
        fromPoints: b,
        distance2: h,
        distance: d,
        projectPoint: j,
        pointAt: M,
        projectPointClamp: A,
        closestRayDistance2: B,
        closestLineSegmentPoint: w,
        closestLineSegmentDistance2: P
      });
      /***/
    },

    /***/
    "jdNP":
    /*!************************************************************************************!*\
      !*** ./node_modules/@arcgis/core/views/3d/webgl-engine/lib/DefaultTextureUnits.js ***!
      \************************************************************************************/

    /*! exports provided: DefaultTextureUnits */

    /***/
    function jdNP(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "DefaultTextureUnits", function () {
        return S;
      });
      /*
      All material copyright ESRI, All Rights Reserved, unless otherwise specified.
      See https://js.arcgis.com/4.18/esri/copyright.txt for details.
      */


      var S = {
        DIFFUSE: 0,
        NORMAL: 1,
        EMISSION: 2,
        OCCLUSION: 3,
        METALLIC_ROUGHNESS: 4,
        SSAO: 6,
        SHADOW_MAP: 7
      };
      /***/
    },

    /***/
    "jpeq":
    /*!**********************************************************************************************!*\
      !*** ./node_modules/@arcgis/core/views/3d/webgl-engine/core/shaderLibrary/util/View.glsl.js ***!
      \**********************************************************************************************/

    /*! exports provided: View */

    /***/
    function jpeq(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "View", function () {
        return o;
      });
      /* harmony import */


      var _chunks_mat4_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ../../../../../../chunks/mat4.js */
      "15Hh");
      /* harmony import */


      var _chunks_mat4f32_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ../../../../../../chunks/mat4f32.js */
      "lwwL");
      /*
      All material copyright ESRI, All Rights Reserved, unless otherwise specified.
      See https://js.arcgis.com/4.18/esri/copyright.txt for details.
      */


      var o;
      !function (n) {
        function o(n, o, t) {
          Object(_chunks_mat4_js__WEBPACK_IMPORTED_MODULE_0__["t"])(r, t, o), n.setUniform3fv("localOrigin", o), n.setUniformMatrix4fv("view", r);
        }

        n.bindCamPosition = function (i, n, o) {
          i.setUniform3f("camPos", o[3] - n[0], o[7] - n[1], o[11] - n[2]);
        }, n.bindProjectionMatrix = function (i, n) {
          i.setUniformMatrix4fv("proj", n);
        }, n.bindNearFar = function (i, n) {
          i.setUniform2fv("nearFar", n);
        }, n.bindViewCustomOrigin = o, n.bindView = function (i, n) {
          o(i, n.origin, n.camera.viewMatrix);
        }, n.bindViewport = function (i, n) {
          i.setUniform4fv("viewport", n.camera.fullViewport);
        };
      }(o || (o = {}));
      var r = Object(_chunks_mat4f32_js__WEBPACK_IMPORTED_MODULE_1__["c"])();
      /***/
    },

    /***/
    "lKY1":
    /*!***********************************************************************************!*\
      !*** ./node_modules/@arcgis/core/views/3d/layers/graphics/objectResourceUtils.js ***!
      \***********************************************************************************/

    /*! exports provided: fetch, gltfToEngineResources, parseUrl */

    /***/
    function lKY1(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "fetch", function () {
        return q;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "gltfToEngineResources", function () {
        return Q;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "parseUrl", function () {
        return K;
      });
      /* harmony import */


      var _core_maybe_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ../../../../core/maybe.js */
      "srIe");
      /* harmony import */


      var _chunks_vec3f64_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ../../../../chunks/vec3f64.js */
      "Cy1f");
      /* harmony import */


      var _chunks_vec3_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ../../../../chunks/vec3.js */
      "5DEt");
      /* harmony import */


      var _chunks_mat4_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ../../../../chunks/mat4.js */
      "15Hh");
      /* harmony import */


      var _core_devEnvironmentUtils_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ../../../../core/devEnvironmentUtils.js */
      "SbiP");
      /* harmony import */


      var _chunks_mat3f64_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ../../../../chunks/mat3f64.js */
      "2uVf");
      /* harmony import */


      var _chunks_mat4f64_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ../../../../chunks/mat4f64.js */
      "r+FG");
      /* harmony import */


      var _chunks_mat3_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! ../../../../chunks/mat3.js */
      "HJJS");
      /* harmony import */


      var _support_buffer_BufferView_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! ../../support/buffer/BufferView.js */
      "VeZB");
      /* harmony import */


      var _chunks_vec32_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! ../../../../chunks/vec32.js */
      "ZotJ");
      /* harmony import */


      var _geometry_support_aaBoundingBox_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
      /*! ../../../../geometry/support/aaBoundingBox.js */
      "QmHG");
      /* harmony import */


      var _webgl_engine_lib_GeometryData_js__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
      /*! ../../webgl-engine/lib/GeometryData.js */
      "1PqF");
      /* harmony import */


      var _webgl_engine_lib_Geometry_js__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
      /*! ../../webgl-engine/lib/Geometry.js */
      "Ango");
      /* harmony import */


      var _webgl_engine_materials_DefaultMaterial_js__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
      /*! ../../webgl-engine/materials/DefaultMaterial.js */
      "262w");
      /* harmony import */


      var _webgl_engine_lib_Texture_js__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(
      /*! ../../webgl-engine/lib/Texture.js */
      "Hizz");
      /* harmony import */


      var _glTF_DefaultLoadingContext_js__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(
      /*! ../../glTF/DefaultLoadingContext.js */
      "K2Cv");
      /* harmony import */


      var _chunks_vec22_js__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(
      /*! ../../../../chunks/vec22.js */
      "3Fbu");
      /* harmony import */


      var _chunks_vec33_js__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(
      /*! ../../../../chunks/vec33.js */
      "TJZZ");
      /* harmony import */


      var _chunks_vec43_js__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(
      /*! ../../../../chunks/vec43.js */
      "HCB5");
      /* harmony import */


      var _support_buffer_utils_js__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(
      /*! ../../support/buffer/utils.js */
      "SMQs");
      /* harmony import */


      var _glTF_loader_js__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(
      /*! ../../glTF/loader.js */
      "PDsV");
      /* harmony import */


      var _glTF_internal_indexUtils_js__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(
      /*! ../../glTF/internal/indexUtils.js */
      "CHx4");
      /* harmony import */


      var _wosrLoader_js__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(
      /*! ./wosrLoader.js */
      "IvV4");
      /* harmony import */


      var _chunks_vec42_js__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(
      /*! ../../../../chunks/vec42.js */
      "5MHk");
      /*
      All material copyright ESRI, All Rights Reserved, unless otherwise specified.
      See https://js.arcgis.com/4.18/esri/copyright.txt for details.
      */


      function q(_x68, _x69) {
        return _q.apply(this, arguments);
      }

      function _q() {
        _q = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee31(d, p) {
          var g, e, _t58, h, v, M, w, _e72, _t59, R;

          return regeneratorRuntime.wrap(function _callee31$(_context31) {
            while (1) {
              switch (_context31.prev = _context31.next) {
                case 0:
                  g = K(Object(_core_devEnvironmentUtils_js__WEBPACK_IMPORTED_MODULE_4__["adjustStaticAGOUrl"])(d));

                  if (!("wosr" === g.fileType)) {
                    _context31.next = 7;
                    break;
                  }

                  _context31.next = 4;
                  return p.cache ? p.cache.loadWOSR(g.url, p) : Object(_wosrLoader_js__WEBPACK_IMPORTED_MODULE_22__["load"])(g.url, p);

                case 4:
                  e = _context31.sent;
                  _t58 = Object(_wosrLoader_js__WEBPACK_IMPORTED_MODULE_22__["processLoadResult"])(e, p);
                  return _context31.abrupt("return", {
                    lods: [_t58],
                    referenceBoundingBox: _t58.boundingBox,
                    isEsriSymbolResource: !1,
                    isWosr: !0,
                    remove: e.remove
                  });

                case 7:
                  _context31.next = 9;
                  return p.cache ? p.cache.loadGLTF(g.url, p) : Object(_glTF_loader_js__WEBPACK_IMPORTED_MODULE_20__["load"])(new _glTF_DefaultLoadingContext_js__WEBPACK_IMPORTED_MODULE_15__["DefaultLoadingContext"](p.streamDataRequester), g.url, p);

                case 9:
                  h = _context31.sent;
                  v = Object(_core_maybe_js__WEBPACK_IMPORTED_MODULE_0__["get"])(h.model.meta, "ESRI_proxyEllipsoid");
                  h.meta.isEsriSymbolResource && Object(_core_maybe_js__WEBPACK_IMPORTED_MODULE_0__["isSome"])(v) && -1 !== h.meta.uri.indexOf("/RealisticTrees/") && function (e, t) {
                    for (var m = 0; m < e.model.lods.length; ++m) {
                      var _d6 = e.model.lods[m];
                      e.customMeta.esriTreeRendering = !0;

                      var _iterator17 = _createForOfIteratorHelper(_d6.parts),
                          _step17;

                      try {
                        for (_iterator17.s(); !(_step17 = _iterator17.n()).done;) {
                          var _p3 = _step17.value;
                          var _d7 = _p3.attributes.normal;
                          if (Object(_core_maybe_js__WEBPACK_IMPORTED_MODULE_0__["isNone"])(_d7)) return;

                          var _g4 = _p3.attributes.position,
                              _h4 = _g4.count,
                              _v2 = Object(_chunks_vec3f64_js__WEBPACK_IMPORTED_MODULE_1__["c"])(),
                              _M4 = Object(_chunks_vec3f64_js__WEBPACK_IMPORTED_MODULE_1__["c"])(),
                              _w = Object(_chunks_vec3f64_js__WEBPACK_IMPORTED_MODULE_1__["c"])(),
                              _R2 = Object(_support_buffer_utils_js__WEBPACK_IMPORTED_MODULE_19__["createBuffer"])(_support_buffer_BufferView_js__WEBPACK_IMPORTED_MODULE_8__["BufferViewVec4u8"], _h4),
                              y = Object(_support_buffer_utils_js__WEBPACK_IMPORTED_MODULE_19__["createBuffer"])(_support_buffer_BufferView_js__WEBPACK_IMPORTED_MODULE_8__["BufferViewVec3f"], _h4),
                              B = Object(_chunks_mat4_js__WEBPACK_IMPORTED_MODULE_3__["a"])(Object(_chunks_mat4f64_js__WEBPACK_IMPORTED_MODULE_6__["a"])(), _p3.transform);

                          for (var _r35 = 0; _r35 < _h4; _r35++) {
                            _g4.getVec(_r35, _M4), _d7.getVec(_r35, _v2), Object(_chunks_vec3_js__WEBPACK_IMPORTED_MODULE_2__["i"])(_M4, _M4, _p3.transform), Object(_chunks_vec3_js__WEBPACK_IMPORTED_MODULE_2__["f"])(_w, _M4, t.center), Object(_chunks_vec3_js__WEBPACK_IMPORTED_MODULE_2__["C"])(_w, _w, t.radius);
                            var o = _w[2],
                                c = Object(_chunks_vec3_js__WEBPACK_IMPORTED_MODULE_2__["l"])(_w),
                                f = Math.min(.45 + .55 * c * c, 1);
                            Object(_chunks_vec3_js__WEBPACK_IMPORTED_MODULE_2__["C"])(_w, _w, t.radius), Object(_chunks_vec3_js__WEBPACK_IMPORTED_MODULE_2__["i"])(_w, _w, B), Object(_chunks_vec3_js__WEBPACK_IMPORTED_MODULE_2__["n"])(_w, _w), m + 1 !== e.model.lods.length && e.model.lods.length > 1 && Object(_chunks_vec3_js__WEBPACK_IMPORTED_MODULE_2__["e"])(_w, _w, _v2, o > -1 ? .2 : Math.min(-4 * o - 3.8, 1)), y.setVec(_r35, _w), _R2.set(_r35, 0, 255 * f), _R2.set(_r35, 1, 255 * f), _R2.set(_r35, 2, 255 * f), _R2.set(_r35, 3, 255);
                          }

                          _p3.attributes.normal = y, _p3.attributes.color = _R2;
                        }
                      } catch (err) {
                        _iterator17.e(err);
                      } finally {
                        _iterator17.f();
                      }
                    }
                  }(h, v);
                  M = h.meta.isEsriSymbolResource ? {
                    usePBR: p.usePBR,
                    isSchematic: !1,
                    treeRendering: h.customMeta.esriTreeRendering,
                    mrrFactors: [0, 1, .2]
                  } : {
                    usePBR: !0,
                    isSchematic: !1,
                    mrrFactors: [0, 1, .5]
                  }, w = _objectSpread(_objectSpread({}, p.materialParamsMixin), {}, {
                    treeRendering: h.customMeta.esriTreeRendering
                  });

                  if (!(null != g.specifiedLodIndex)) {
                    _context31.next = 18;
                    break;
                  }

                  _e72 = Q(h, M, w, g.specifiedLodIndex);
                  _t59 = _e72[0].boundingBox;

                  if (0 !== g.specifiedLodIndex) {
                    _t59 = Q(h, M, w, 0)[0].boundingBox;
                  }

                  return _context31.abrupt("return", {
                    lods: _e72,
                    referenceBoundingBox: _t59,
                    isEsriSymbolResource: h.meta.isEsriSymbolResource,
                    isWosr: !1,
                    remove: h.remove
                  });

                case 18:
                  R = Q(h, M, w);
                  return _context31.abrupt("return", {
                    lods: R,
                    referenceBoundingBox: R[0].boundingBox,
                    isEsriSymbolResource: h.meta.isEsriSymbolResource,
                    isWosr: !1,
                    remove: h.remove
                  });

                case 20:
                case "end":
                  return _context31.stop();
              }
            }
          }, _callee31);
        }));
        return _q.apply(this, arguments);
      }

      function K(e) {
        var t = e.match(/(.*\.(gltf|glb))(\?lod=([0-9]+))?$/);
        if (t) return {
          fileType: "gltf",
          url: t[1],
          specifiedLodIndex: null != t[4] ? Number(t[4]) : null
        };
        return e.match(/(.*\.(json|json\.gz))$/) ? {
          fileType: "wosr",
          url: e,
          specifiedLodIndex: null
        } : {
          fileType: "unknown",
          url: e,
          specifiedLodIndex: null
        };
      }

      function Q(e, r, o, s) {
        var i = e.model,
            a = Object(_chunks_mat3f64_js__WEBPACK_IMPORTED_MODULE_5__["a"])(),
            n = new Array(),
            u = new Map(),
            l = new Map();
        return i.lods.forEach(function (e, c) {
          if (void 0 !== s && c !== s) return;
          var m = 0;
          var d = {
            name: e.name,
            stageResources: {
              textures: new Array(),
              materials: new Array(),
              geometries: new Array()
            },
            lodThreshold: Object(_core_maybe_js__WEBPACK_IMPORTED_MODULE_0__["isSome"])(e.lodThreshold) ? e.lodThreshold : null,
            pivotOffset: [0, 0, 0],
            numberOfVertices: 0,
            boundingBox: Object(_geometry_support_aaBoundingBox_js__WEBPACK_IMPORTED_MODULE_10__["empty"])()
          };
          n.push(d), e.parts.forEach(function (s) {
            var n = s.material + (s.attributes.normal ? "_normal" : "") + (s.attributes.color ? "_color" : "") + (s.attributes.texCoord0 ? "_texCoord0" : "") + (s.attributes.tangent ? "_tangent" : ""),
                c = i.materials.get(s.material),
                f = Object(_core_maybe_js__WEBPACK_IMPORTED_MODULE_0__["isSome"])(s.attributes.texCoord0),
                j = Object(_core_maybe_js__WEBPACK_IMPORTED_MODULE_0__["isSome"])(s.attributes.normal);

            if (!u.has(n)) {
              if (f) {
                if (Object(_core_maybe_js__WEBPACK_IMPORTED_MODULE_0__["isSome"])(c.textureColor) && !l.has(c.textureColor)) {
                  var _e63 = i.textures.get(c.textureColor),
                      _t52 = _objectSpread(_objectSpread({}, _e63.parameters), {}, {
                    preMultiplyAlpha: !0
                  });

                  l.set(c.textureColor, new _webgl_engine_lib_Texture_js__WEBPACK_IMPORTED_MODULE_14__["default"](_e63.data, c.textureColor, _t52));
                }

                if (Object(_core_maybe_js__WEBPACK_IMPORTED_MODULE_0__["isSome"])(c.textureNormal) && !l.has(c.textureNormal)) {
                  var _e64 = i.textures.get(c.textureNormal),
                      _t53 = _objectSpread(_objectSpread({}, _e64.parameters), {}, {
                    preMultiplyAlpha: !0
                  });

                  l.set(c.textureNormal, new _webgl_engine_lib_Texture_js__WEBPACK_IMPORTED_MODULE_14__["default"](_e64.data, c.textureNormal, _t53));
                }

                if (Object(_core_maybe_js__WEBPACK_IMPORTED_MODULE_0__["isSome"])(c.textureOcclusion) && !l.has(c.textureOcclusion)) {
                  var _e65 = i.textures.get(c.textureOcclusion),
                      _t54 = _objectSpread(_objectSpread({}, _e65.parameters), {}, {
                    preMultiplyAlpha: !0
                  });

                  l.set(c.textureOcclusion, new _webgl_engine_lib_Texture_js__WEBPACK_IMPORTED_MODULE_14__["default"](_e65.data, c.textureOcclusion, _t54));
                }

                if (Object(_core_maybe_js__WEBPACK_IMPORTED_MODULE_0__["isSome"])(c.textureEmissive) && !l.has(c.textureEmissive)) {
                  var _e66 = i.textures.get(c.textureEmissive),
                      _t55 = _objectSpread(_objectSpread({}, _e66.parameters), {}, {
                    preMultiplyAlpha: !0
                  });

                  l.set(c.textureEmissive, new _webgl_engine_lib_Texture_js__WEBPACK_IMPORTED_MODULE_14__["default"](_e66.data, c.textureEmissive, _t55));
                }

                if (Object(_core_maybe_js__WEBPACK_IMPORTED_MODULE_0__["isSome"])(c.textureMetallicRoughness) && !l.has(c.textureMetallicRoughness)) {
                  var _e67 = i.textures.get(c.textureMetallicRoughness),
                      _t56 = _objectSpread(_objectSpread({}, _e67.parameters), {}, {
                    preMultiplyAlpha: !0
                  });

                  l.set(c.textureMetallicRoughness, new _webgl_engine_lib_Texture_js__WEBPACK_IMPORTED_MODULE_14__["default"](_e67.data, c.textureMetallicRoughness, _t56));
                }
              }

              var _e62 = Math.pow(c.color[0], 1 / _webgl_engine_materials_DefaultMaterial_js__WEBPACK_IMPORTED_MODULE_13__["COLOR_GAMMA"]),
                  _a8 = Math.pow(c.color[1], 1 / _webgl_engine_materials_DefaultMaterial_js__WEBPACK_IMPORTED_MODULE_13__["COLOR_GAMMA"]),
                  _m = Math.pow(c.color[2], 1 / _webgl_engine_materials_DefaultMaterial_js__WEBPACK_IMPORTED_MODULE_13__["COLOR_GAMMA"]),
                  _d5 = Math.pow(c.emissiveFactor[0], 1 / _webgl_engine_materials_DefaultMaterial_js__WEBPACK_IMPORTED_MODULE_13__["COLOR_GAMMA"]),
                  p = Math.pow(c.emissiveFactor[1], 1 / _webgl_engine_materials_DefaultMaterial_js__WEBPACK_IMPORTED_MODULE_13__["COLOR_GAMMA"]),
                  x = Math.pow(c.emissiveFactor[2], 1 / _webgl_engine_materials_DefaultMaterial_js__WEBPACK_IMPORTED_MODULE_13__["COLOR_GAMMA"]);

              u.set(n, new _webgl_engine_materials_DefaultMaterial_js__WEBPACK_IMPORTED_MODULE_13__["DefaultMaterial"](_objectSpread(_objectSpread({}, r), {}, {
                transparent: "BLEND" === c.alphaMode,
                textureAlphaMode: H(c.alphaMode),
                textureAlphaCutoff: c.alphaCutoff,
                diffuse: [_e62, _a8, _m],
                ambient: [_e62, _a8, _m],
                opacity: c.opacity,
                doubleSided: c.doubleSided,
                doubleSidedType: "winding-order",
                cullFace: c.doubleSided ? 0 : 2,
                vertexColors: !!s.attributes.color,
                vertexTangents: !!s.attributes.tangent,
                normals: j ? "default" : "screenDerivative",
                castShadows: !0,
                receiveSSAO: !0,
                textureId: Object(_core_maybe_js__WEBPACK_IMPORTED_MODULE_0__["isSome"])(c.textureColor) && f ? l.get(c.textureColor).id : void 0,
                colorMixMode: c.colorMixMode,
                normalTextureId: Object(_core_maybe_js__WEBPACK_IMPORTED_MODULE_0__["isSome"])(c.textureNormal) && f ? l.get(c.textureNormal).id : void 0,
                textureAlphaPremultiplied: !0,
                occlusionTextureId: Object(_core_maybe_js__WEBPACK_IMPORTED_MODULE_0__["isSome"])(c.textureOcclusion) && f ? l.get(c.textureOcclusion).id : void 0,
                emissiveTextureId: Object(_core_maybe_js__WEBPACK_IMPORTED_MODULE_0__["isSome"])(c.textureEmissive) && f ? l.get(c.textureEmissive).id : void 0,
                metallicRoughnessTextureId: Object(_core_maybe_js__WEBPACK_IMPORTED_MODULE_0__["isSome"])(c.textureMetallicRoughness) && f ? l.get(c.textureMetallicRoughness).id : void 0,
                emissiveFactor: [_d5, p, x],
                mrrFactors: [c.metallicFactor, c.roughnessFactor, r.mrrFactors[2]],
                isSchematic: !1
              }, o), n));
            }

            var F = function (e, t) {
              switch (t) {
                case 4:
                  return Object(_glTF_internal_indexUtils_js__WEBPACK_IMPORTED_MODULE_21__["trianglesToTriangles"])(e);

                case 5:
                  return Object(_glTF_internal_indexUtils_js__WEBPACK_IMPORTED_MODULE_21__["triangleStripToTriangles"])(e);

                case 6:
                  return Object(_glTF_internal_indexUtils_js__WEBPACK_IMPORTED_MODULE_21__["triangleFanToTriangles"])(e);
              }
            }(s.indices || s.attributes.position.count, s.primitiveType),
                _ = {},
                W = {},
                $ = s.attributes.position.count,
                q = Object(_support_buffer_utils_js__WEBPACK_IMPORTED_MODULE_19__["createBuffer"])(_support_buffer_BufferView_js__WEBPACK_IMPORTED_MODULE_8__["BufferViewVec3f"], $);

            if (Object(_chunks_vec32_js__WEBPACK_IMPORTED_MODULE_9__["t"])(q, s.attributes.position, s.transform), W.position = {
              data: q.typedBuffer,
              size: q.elementCount
            }, _.position = F, Object(_core_maybe_js__WEBPACK_IMPORTED_MODULE_0__["isSome"])(s.attributes.normal)) {
              var _e68 = Object(_support_buffer_utils_js__WEBPACK_IMPORTED_MODULE_19__["createBuffer"])(_support_buffer_BufferView_js__WEBPACK_IMPORTED_MODULE_8__["BufferViewVec3f"], $);

              Object(_chunks_mat3_js__WEBPACK_IMPORTED_MODULE_7__["n"])(a, s.transform), Object(_chunks_vec32_js__WEBPACK_IMPORTED_MODULE_9__["a"])(_e68, s.attributes.normal, a), W.normal = {
                data: _e68.typedBuffer,
                size: _e68.elementCount
              }, _.normal = F;
            }

            if (Object(_core_maybe_js__WEBPACK_IMPORTED_MODULE_0__["isSome"])(s.attributes.tangent)) {
              var _e69 = Object(_support_buffer_utils_js__WEBPACK_IMPORTED_MODULE_19__["createBuffer"])(_support_buffer_BufferView_js__WEBPACK_IMPORTED_MODULE_8__["BufferViewVec4f"], $);

              Object(_chunks_mat3_js__WEBPACK_IMPORTED_MODULE_7__["n"])(a, s.transform), Object(_chunks_vec42_js__WEBPACK_IMPORTED_MODULE_23__["t"])(_e69, s.attributes.tangent, a), W.tangent = {
                data: _e69.typedBuffer,
                size: _e69.elementCount
              }, _.tangent = F;
            }

            if (Object(_core_maybe_js__WEBPACK_IMPORTED_MODULE_0__["isSome"])(s.attributes.texCoord0)) {
              var _e70 = Object(_support_buffer_utils_js__WEBPACK_IMPORTED_MODULE_19__["createBuffer"])(_support_buffer_BufferView_js__WEBPACK_IMPORTED_MODULE_8__["BufferViewVec2f"], $);

              Object(_chunks_vec22_js__WEBPACK_IMPORTED_MODULE_16__["n"])(_e70, s.attributes.texCoord0), W.uv0 = {
                data: _e70.typedBuffer,
                size: _e70.elementCount
              }, _.uv0 = F;
            }

            if (Object(_core_maybe_js__WEBPACK_IMPORTED_MODULE_0__["isSome"])(s.attributes.color)) {
              var _e71 = Object(_support_buffer_utils_js__WEBPACK_IMPORTED_MODULE_19__["createBuffer"])(_support_buffer_BufferView_js__WEBPACK_IMPORTED_MODULE_8__["BufferViewVec4u8"], $);

              if (4 === s.attributes.color.elementCount) s.attributes.color instanceof _support_buffer_BufferView_js__WEBPACK_IMPORTED_MODULE_8__["BufferViewVec4f"] ? Object(_chunks_vec42_js__WEBPACK_IMPORTED_MODULE_23__["s"])(_e71, s.attributes.color, 255) : s.attributes.color instanceof _support_buffer_BufferView_js__WEBPACK_IMPORTED_MODULE_8__["BufferViewVec4u8"] ? Object(_chunks_vec43_js__WEBPACK_IMPORTED_MODULE_18__["c"])(_e71, s.attributes.color) : s.attributes.color instanceof _support_buffer_BufferView_js__WEBPACK_IMPORTED_MODULE_8__["BufferViewVec4u16"] && Object(_chunks_vec42_js__WEBPACK_IMPORTED_MODULE_23__["s"])(_e71, s.attributes.color, 1 / 256);else {
                Object(_chunks_vec43_js__WEBPACK_IMPORTED_MODULE_18__["f"])(_e71, 255, 255, 255, 255);

                var _t57 = new _support_buffer_BufferView_js__WEBPACK_IMPORTED_MODULE_8__["BufferViewVec3u8"](_e71.buffer, 0, 4);

                s.attributes.color instanceof _support_buffer_BufferView_js__WEBPACK_IMPORTED_MODULE_8__["BufferViewVec3f"] ? Object(_chunks_vec32_js__WEBPACK_IMPORTED_MODULE_9__["s"])(_t57, s.attributes.color, 255) : s.attributes.color instanceof _support_buffer_BufferView_js__WEBPACK_IMPORTED_MODULE_8__["BufferViewVec3u8"] ? Object(_chunks_vec33_js__WEBPACK_IMPORTED_MODULE_17__["c"])(_t57, s.attributes.color) : s.attributes.color instanceof _support_buffer_BufferView_js__WEBPACK_IMPORTED_MODULE_8__["BufferViewVec3u16"] && Object(_chunks_vec32_js__WEBPACK_IMPORTED_MODULE_9__["s"])(_t57, s.attributes.color, 1 / 256);
              }
              W.color = {
                data: _e71.typedBuffer,
                size: _e71.elementCount
              }, _.color = F;
            }

            var K = new _webgl_engine_lib_Geometry_js__WEBPACK_IMPORTED_MODULE_12__["default"](new _webgl_engine_lib_GeometryData_js__WEBPACK_IMPORTED_MODULE_11__["GeometryData"](W, _), "gltf_".concat(e.name, "_").concat(m++));
            d.stageResources.geometries.push(K), d.stageResources.materials.push(u.get(n)), f && (Object(_core_maybe_js__WEBPACK_IMPORTED_MODULE_0__["isSome"])(c.textureColor) && d.stageResources.textures.push(l.get(c.textureColor)), Object(_core_maybe_js__WEBPACK_IMPORTED_MODULE_0__["isSome"])(c.textureNormal) && d.stageResources.textures.push(l.get(c.textureNormal)), Object(_core_maybe_js__WEBPACK_IMPORTED_MODULE_0__["isSome"])(c.textureOcclusion) && d.stageResources.textures.push(l.get(c.textureOcclusion)), Object(_core_maybe_js__WEBPACK_IMPORTED_MODULE_0__["isSome"])(c.textureEmissive) && d.stageResources.textures.push(l.get(c.textureEmissive)), Object(_core_maybe_js__WEBPACK_IMPORTED_MODULE_0__["isSome"])(c.textureMetallicRoughness) && d.stageResources.textures.push(l.get(c.textureMetallicRoughness))), d.numberOfVertices += $;
            var Q = K.boundingInfo;
            Object(_geometry_support_aaBoundingBox_js__WEBPACK_IMPORTED_MODULE_10__["expandWithVec3"])(d.boundingBox, Q.getBBMin()), Object(_geometry_support_aaBoundingBox_js__WEBPACK_IMPORTED_MODULE_10__["expandWithVec3"])(d.boundingBox, Q.getBBMax());
          });
        }), n;
      }

      function H(e) {
        switch (e) {
          case "BLEND":
            return 0;

          case "MASK":
            return 2;

          case "OPAQUE":
            return 1;

          default:
            return 0;
        }
      }
      /***/

    },

    /***/
    "lwwL":
    /*!*****************************************************!*\
      !*** ./node_modules/@arcgis/core/chunks/mat4f32.js ***!
      \*****************************************************/

    /*! exports provided: I, a, b, c, f, m */

    /***/
    function lwwL(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "I", function () {
        return a;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "a", function () {
        return n;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "b", function () {
        return e;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "c", function () {
        return r;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "f", function () {
        return t;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "m", function () {
        return o;
      });
      /*
      All material copyright ESRI, All Rights Reserved, unless otherwise specified.
      See https://js.arcgis.com/4.18/esri/copyright.txt for details.
      */


      function r() {
        var r = new Float32Array(16);
        return r[0] = 1, r[5] = 1, r[10] = 1, r[15] = 1, r;
      }

      function n(r) {
        var n = new Float32Array(16);
        return n[0] = r[0], n[1] = r[1], n[2] = r[2], n[3] = r[3], n[4] = r[4], n[5] = r[5], n[6] = r[6], n[7] = r[7], n[8] = r[8], n[9] = r[9], n[10] = r[10], n[11] = r[11], n[12] = r[12], n[13] = r[13], n[14] = r[14], n[15] = r[15], n;
      }

      function t(r, n, t, e, a, o, c, s, u, l, f, i, w, y, A, F) {
        var _ = new Float32Array(16);

        return _[0] = r, _[1] = n, _[2] = t, _[3] = e, _[4] = a, _[5] = o, _[6] = c, _[7] = s, _[8] = u, _[9] = l, _[10] = f, _[11] = i, _[12] = w, _[13] = y, _[14] = A, _[15] = F, _;
      }

      function e(r, n) {
        return new Float32Array(r, n, 16);
      }

      var a = r();
      var o = Object.freeze({
        __proto__: null,
        create: r,
        clone: n,
        fromValues: t,
        createView: e,
        IDENTITY: a
      });
      /***/
    },

    /***/
    "mY8Z":
    /*!********************************************************************************!*\
      !*** ./node_modules/@arcgis/core/views/3d/webgl-engine/lib/WebGLDriverTest.js ***!
      \********************************************************************************/

    /*! exports provided: clearTestWebGLDriver, testWebGLDriver */

    /***/
    function mY8Z(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "clearTestWebGLDriver", function () {
        return v;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "testWebGLDriver", function () {
        return f;
      });
      /* harmony import */


      var _core_maybe_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ../../../../core/maybe.js */
      "srIe");
      /* harmony import */


      var _core_mathUtils_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ../../../../core/mathUtils.js */
      "OKTS");
      /* harmony import */


      var _chunks_vec3f64_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ../../../../chunks/vec3f64.js */
      "Cy1f");
      /* harmony import */


      var _webgl_Program_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ../../../webgl/Program.js */
      "jjdI");
      /* harmony import */


      var _Util_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ./Util.js */
      "EVMh");
      /* harmony import */


      var _webgl_BufferObject_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ../../../webgl/BufferObject.js */
      "fOQB");
      /* harmony import */


      var _webgl_VertexArrayObject_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ../../../webgl/VertexArrayObject.js */
      "D6bk");
      /* harmony import */


      var _doublePrecisionUtils_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! ./doublePrecisionUtils.js */
      "mmTy");
      /* harmony import */


      var _webgl_FramebufferObject_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! ../../../webgl/FramebufferObject.js */
      "0meK");
      /* harmony import */


      var _webgl_RenderingContext_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! ../../../webgl/RenderingContext.js */
      "bfJE");
      /*
      All material copyright ESRI, All Rights Reserved, unless otherwise specified.
      See https://js.arcgis.com/4.18/esri/copyright.txt for details.
      */


      var l = /*#__PURE__*/function () {
        function l(e) {
          _classCallCheck(this, l);

          this.context = e, this._doublePrecisionRequiresObfuscation = null;
        }

        _createClass(l, [{
          key: "doublePrecisionRequiresObfuscation",
          get: function get() {
            if (Object(_core_maybe_js__WEBPACK_IMPORTED_MODULE_0__["isNone"])(this._doublePrecisionRequiresObfuscation)) {
              var e = p(this.context, !1),
                  _n19 = p(this.context, !0);

              this._doublePrecisionRequiresObfuscation = 0 !== e && (0 === _n19 || e / _n19 > 5);
            }

            return this._doublePrecisionRequiresObfuscation;
          }
        }]);

        return l;
      }();

      var u = null;

      function f(n) {
        return (Object(_core_maybe_js__WEBPACK_IMPORTED_MODULE_0__["isNone"])(u) || u.context !== n) && (u = new l(n)), u;
      }

      function v(e) {
        Object(_core_maybe_js__WEBPACK_IMPORTED_MODULE_0__["isSome"])(u) && u.context === e && (u = null);
      }

      function p(e, n) {
        var l = new _webgl_FramebufferObject_js__WEBPACK_IMPORTED_MODULE_8__["default"](e, {
          colorTarget: 0,
          depthStencilTarget: 0
        }, {
          target: 3553,
          wrapMode: 33071,
          pixelFormat: 6408,
          dataType: 5121,
          samplingMode: 9728,
          width: 1,
          height: 1
        });

        var u = _webgl_BufferObject_js__WEBPACK_IMPORTED_MODULE_5__["default"].createVertex(e, 35044, new Uint16Array([0, 0, 1, 0, 0, 1, 1, 1])),
            f = new _webgl_VertexArrayObject_js__WEBPACK_IMPORTED_MODULE_6__["default"](e, {
          a_pos: 0
        }, {
          geometry: [{
            name: "a_pos",
            count: 2,
            type: 5123,
            offset: 0,
            stride: 4,
            normalized: !1
          }]
        }, {
          geometry: u
        }),
            v = Object(_chunks_vec3f64_js__WEBPACK_IMPORTED_MODULE_2__["f"])(5633261.287538229, 2626832.878767164, 1434988.0495278358),
            p = Object(_chunks_vec3f64_js__WEBPACK_IMPORTED_MODULE_2__["f"])(5633271.46742708, 2626873.6381334523, 1434963.231608387),
            d = function (t, i) {
          var r = new _webgl_Program_js__WEBPACK_IMPORTED_MODULE_3__["default"](e, "\n\n  precision highp float;\n\n  attribute vec2 a_pos;\n\n  uniform vec3 u_highA;\n  uniform vec3 u_lowA;\n  uniform vec3 u_highB;\n  uniform vec3 u_lowB;\n\n  varying vec4 v_color;\n\n  ".concat(n ? "#define DOUBLE_PRECISION_REQUIRES_OBFUSCATION" : "", "\n\n  #ifdef DOUBLE_PRECISION_REQUIRES_OBFUSCATION\n\n  vec3 dpPlusFrc(vec3 a, vec3 b) {\n    return mix(a, a + b, vec3(notEqual(b, vec3(0))));\n  }\n\n  vec3 dpMinusFrc(vec3 a, vec3 b) {\n    return mix(vec3(0), a - b, vec3(notEqual(a, b)));\n  }\n\n  vec3 dpAdd(vec3 hiA, vec3 loA, vec3 hiB, vec3 loB) {\n    vec3 t1 = dpPlusFrc(hiA, hiB);\n    vec3 e = dpMinusFrc(t1, hiA);\n    vec3 t2 = dpMinusFrc(hiB, e) + dpMinusFrc(hiA, dpMinusFrc(t1, e)) + loA + loB;\n    return t1 + t2;\n  }\n\n  #else\n\n  vec3 dpAdd(vec3 hiA, vec3 loA, vec3 hiB, vec3 loB) {\n    vec3 t1 = hiA + hiB;\n    vec3 e = t1 - hiA;\n    vec3 t2 = ((hiB - e) + (hiA - (t1 - e))) + loA + loB;\n    return t1 + t2;\n  }\n\n  #endif\n\n  const float MAX_RGBA_FLOAT =\n    255.0 / 256.0 +\n    255.0 / 256.0 / 256.0 +\n    255.0 / 256.0 / 256.0 / 256.0 +\n    255.0 / 256.0 / 256.0 / 256.0 / 256.0;\n\n  const vec4 FIXED_POINT_FACTORS = vec4(1.0, 256.0, 256.0 * 256.0, 256.0 * 256.0 * 256.0);\n\n  vec4 float2rgba(const float value) {\n    // Make sure value is in the domain we can represent\n    float valueInValidDomain = clamp(value, 0.0, MAX_RGBA_FLOAT);\n\n    // Decompose value in 32bit fixed point parts represented as\n    // uint8 rgba components. Decomposition uses the fractional part after multiplying\n    // by a power of 256 (this removes the bits that are represented in the previous\n    // component) and then converts the fractional part to 8bits.\n    vec4 fixedPointU8 = floor(fract(valueInValidDomain * FIXED_POINT_FACTORS) * 256.0);\n\n    // Convert uint8 values (from 0 to 255) to floating point representation for\n    // the shader\n    const float toU8AsFloat = 1.0 / 255.0;\n\n    return fixedPointU8 * toU8AsFloat;\n  }\n\n  void main() {\n    vec3 val = dpAdd(u_highA, u_lowA, -u_highB, -u_lowB);\n\n    v_color = float2rgba(val.z / 25.0);\n\n    gl_Position = vec4(a_pos * 2.0 - 1.0, 0.0, 1.0);\n  }\n  "), "\n  precision highp float;\n\n  varying vec4 v_color;\n\n  void main() {\n    gl_FragColor = v_color;\n  }\n  ", {
            a_pos: 0
          }),
              s = new Float32Array(6);
          Object(_doublePrecisionUtils_js__WEBPACK_IMPORTED_MODULE_7__["encodeDoubleArray"])(t, s, 3);
          var a = new Float32Array(6);
          return Object(_doublePrecisionUtils_js__WEBPACK_IMPORTED_MODULE_7__["encodeDoubleArray"])(i, a, 3), e.bindProgram(r), r.setUniform3f("u_highA", s[0], s[2], s[4]), r.setUniform3f("u_lowA", s[1], s[3], s[5]), r.setUniform3f("u_highB", a[0], a[2], a[4]), r.setUniform3f("u_lowB", a[1], a[3], a[5]), r;
        }(v, p),
            h = e.getBoundFramebufferObject(),
            _e$getViewport = e.getViewport(),
            m = _e$getViewport.x,
            b = _e$getViewport.y,
            _ = _e$getViewport.width,
            A = _e$getViewport.height;

        e.bindFramebuffer(l), e.setViewport(0, 0, 1, 1), e.bindVAO(f), e.drawArrays(5, 0, 4);
        var g = new Uint8Array(4);
        l.readPixels(0, 0, 1, 1, 6408, 5121, g), d.dispose(), f.dispose(!1), u.dispose(), l.dispose(), e.setViewport(m, b, _, A), e.bindFramebuffer(h);
        var w = (v[2] - p[2]) / 25,
            F = Object(_Util_js__WEBPACK_IMPORTED_MODULE_4__["unpackFloatRGBA"])(g);
        return Math.abs(w - F);
      }
      /***/

    },

    /***/
    "mmTy":
    /*!*************************************************************************************!*\
      !*** ./node_modules/@arcgis/core/views/3d/webgl-engine/lib/doublePrecisionUtils.js ***!
      \*************************************************************************************/

    /*! exports provided: decodeDoubleArray, encodeDouble, encodeDoubleArray, encodeDoubleArraySplit */

    /***/
    function mmTy(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "decodeDoubleArray", function () {
        return t;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "encodeDouble", function () {
        return n;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "encodeDoubleArray", function () {
        return o;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "encodeDoubleArraySplit", function () {
        return r;
      });
      /*
      All material copyright ESRI, All Rights Reserved, unless otherwise specified.
      See https://js.arcgis.com/4.18/esri/copyright.txt for details.
      */


      function n(n, o) {
        e[0] = n, e[1] = n - e[0], o[0] = e[0], o[1] = e[1];
      }

      function o(n, o, t) {
        for (var _r36 = 0; _r36 < t; ++_r36) {
          o[2 * _r36] = n[_r36], o[2 * _r36 + 1] = n[_r36] - o[2 * _r36];
        }
      }

      function t(n, o, t) {
        for (var _r37 = 0; _r37 < t; ++_r37) {
          o[_r37] = n[2 * _r37] + n[2 * _r37 + 1];
        }
      }

      function r(n, t, r, c) {
        for (var l = 0; l < c; ++l) {
          f[0] = n[l], o(f, e, 1), t[l] = e[0], r[l] = e[1];
        }
      }

      var f = new Float64Array(1),
          e = new Float32Array(2);
      /***/
    },

    /***/
    "oSUa":
    /*!******************************************************!*\
      !*** ./node_modules/@arcgis/core/chunks/triangle.js ***!
      \******************************************************/

    /*! exports provided: a, b, c, d, e, f, g, i, t, w */

    /***/
    function oSUa(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "a", function () {
        return y;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "b", function () {
        return b;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "c", function () {
        return d;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "d", function () {
        return w;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "e", function () {
        return h;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "f", function () {
        return v;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "g", function () {
        return k;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "i", function () {
        return _;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "t", function () {
        return q;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "w", function () {
        return j;
      });
      /* harmony import */


      var _vec3f64_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ./vec3f64.js */
      "Cy1f");
      /* harmony import */


      var _vec3_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./vec3.js */
      "5DEt");
      /* harmony import */


      var _core_ObjectStack_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ../core/ObjectStack.js */
      "IRkY");
      /* harmony import */


      var _vec2_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./vec2.js */
      "M0lq");
      /* harmony import */


      var _views_3d_support_stack_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ../views/3d/support/stack.js */
      "8JEK");
      /* harmony import */


      var _lineSegment_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ./lineSegment.js */
      "jZU2");
      /*
      All material copyright ESRI, All Rights Reserved, unless otherwise specified.
      See https://js.arcgis.com/4.18/esri/copyright.txt for details.
      */


      function d(e) {
        return e ? {
          p0: Object(_vec3f64_js__WEBPACK_IMPORTED_MODULE_0__["b"])(e.p0),
          p1: Object(_vec3f64_js__WEBPACK_IMPORTED_MODULE_0__["b"])(e.p1),
          p2: Object(_vec3f64_js__WEBPACK_IMPORTED_MODULE_0__["b"])(e.p2)
        } : {
          p0: Object(_vec3f64_js__WEBPACK_IMPORTED_MODULE_0__["c"])(),
          p1: Object(_vec3f64_js__WEBPACK_IMPORTED_MODULE_0__["c"])(),
          p2: Object(_vec3f64_js__WEBPACK_IMPORTED_MODULE_0__["c"])()
        };
      }

      function j(t, n, e) {
        var r = O.get();
        return r.p0 = t, r.p1 = n, r.p2 = e, r;
      }

      function b(t) {
        var n = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : d();
        return v(t.p0, t.p1, t.p2, n);
      }

      function v(t, n, r) {
        var s = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : d();
        return Object(_vec3_js__WEBPACK_IMPORTED_MODULE_1__["g"])(s.p0, t), Object(_vec3_js__WEBPACK_IMPORTED_MODULE_1__["g"])(s.p1, n), Object(_vec3_js__WEBPACK_IMPORTED_MODULE_1__["g"])(s.p2, r), s;
      }

      function w(t, n) {
        var e = t.p0,
            a = t.p1,
            o = t.p2,
            c = Object(_vec3_js__WEBPACK_IMPORTED_MODULE_1__["f"])(_views_3d_support_stack_js__WEBPACK_IMPORTED_MODULE_4__["sv3d"].get(), a, e),
            i = Object(_vec3_js__WEBPACK_IMPORTED_MODULE_1__["f"])(_views_3d_support_stack_js__WEBPACK_IMPORTED_MODULE_4__["sv3d"].get(), o, a),
            u = Object(_vec3_js__WEBPACK_IMPORTED_MODULE_1__["f"])(_views_3d_support_stack_js__WEBPACK_IMPORTED_MODULE_4__["sv3d"].get(), e, o),
            l = Object(_vec3_js__WEBPACK_IMPORTED_MODULE_1__["f"])(_views_3d_support_stack_js__WEBPACK_IMPORTED_MODULE_4__["sv3d"].get(), n, e),
            d = Object(_vec3_js__WEBPACK_IMPORTED_MODULE_1__["f"])(_views_3d_support_stack_js__WEBPACK_IMPORTED_MODULE_4__["sv3d"].get(), n, a),
            j = Object(_vec3_js__WEBPACK_IMPORTED_MODULE_1__["f"])(_views_3d_support_stack_js__WEBPACK_IMPORTED_MODULE_4__["sv3d"].get(), n, o),
            b = Object(_vec3_js__WEBPACK_IMPORTED_MODULE_1__["c"])(c, c, u),
            v = Object(_vec3_js__WEBPACK_IMPORTED_MODULE_1__["d"])(Object(_vec3_js__WEBPACK_IMPORTED_MODULE_1__["c"])(_views_3d_support_stack_js__WEBPACK_IMPORTED_MODULE_4__["sv3d"].get(), c, b), l),
            w = Object(_vec3_js__WEBPACK_IMPORTED_MODULE_1__["d"])(Object(_vec3_js__WEBPACK_IMPORTED_MODULE_1__["c"])(_views_3d_support_stack_js__WEBPACK_IMPORTED_MODULE_4__["sv3d"].get(), i, b), d),
            _ = Object(_vec3_js__WEBPACK_IMPORTED_MODULE_1__["d"])(Object(_vec3_js__WEBPACK_IMPORTED_MODULE_1__["c"])(_views_3d_support_stack_js__WEBPACK_IMPORTED_MODULE_4__["sv3d"].get(), u, b), j);

        if (v > 0 && w > 0 && _ > 0) {
          var _t60 = Object(_vec3_js__WEBPACK_IMPORTED_MODULE_1__["d"])(b, l);

          return _t60 * _t60 / Object(_vec3_js__WEBPACK_IMPORTED_MODULE_1__["d"])(b, b);
        }

        var h = Object(_lineSegment_js__WEBPACK_IMPORTED_MODULE_5__["d"])(Object(_lineSegment_js__WEBPACK_IMPORTED_MODULE_5__["f"])(e, c, M.get()), n),
            k = Object(_lineSegment_js__WEBPACK_IMPORTED_MODULE_5__["d"])(Object(_lineSegment_js__WEBPACK_IMPORTED_MODULE_5__["f"])(a, i, M.get()), n),
            y = Object(_lineSegment_js__WEBPACK_IMPORTED_MODULE_5__["d"])(Object(_lineSegment_js__WEBPACK_IMPORTED_MODULE_5__["f"])(o, u, M.get()), n);
        return Math.min(h, k, y);
      }

      function _(t, n, e) {
        var r = 1e-5,
            s = n.direction,
            p = n.origin,
            c = t.p0,
            i = t.p1,
            u = t.p2,
            f = i[0] - c[0],
            g = i[1] - c[1],
            m = i[2] - c[2],
            l = u[0] - c[0],
            d = u[1] - c[1],
            j = u[2] - c[2],
            b = s[1] * j - d * s[2],
            v = s[2] * l - j * s[0],
            w = s[0] * d - l * s[1],
            _ = f * b + g * v + m * w;

        if (_ > -r && _ < r) return !1;
        var h = 1 / _,
            k = p[0] - c[0],
            y = p[1] - c[1],
            M = p[2] - c[2],
            O = h * (k * b + y * v + M * w);
        if (O < 0 || O > 1) return !1;
        var P = y * m - g * M,
            S = M * f - m * k,
            q = k * g - f * y,
            x = h * (s[0] * P + s[1] * S + s[2] * q);
        if (x < 0 || O + x > 1) return !1;

        if (e) {
          Object(_vec3_js__WEBPACK_IMPORTED_MODULE_1__["a"])(e, s, h * (l * P + d * S + j * q)), Object(_vec3_js__WEBPACK_IMPORTED_MODULE_1__["b"])(e, p, e);
        }

        return !0;
      }

      function h(t, n, e) {
        var r = Object(_vec2_js__WEBPACK_IMPORTED_MODULE_3__["i"])(t, n),
            s = Object(_vec2_js__WEBPACK_IMPORTED_MODULE_3__["i"])(n, e),
            p = Object(_vec2_js__WEBPACK_IMPORTED_MODULE_3__["i"])(e, t),
            a = (r + s + p) / 2,
            o = a * (a - r) * (a - s) * (a - p);
        return o <= 0 ? 0 : Math.sqrt(o);
      }

      function k(t) {
        return h(t.p0, t.p1, t.p2);
      }

      function y(t, n, e) {
        return Object(_vec3_js__WEBPACK_IMPORTED_MODULE_1__["f"])(P, n, t), Object(_vec3_js__WEBPACK_IMPORTED_MODULE_1__["f"])(S, e, t), Object(_vec3_js__WEBPACK_IMPORTED_MODULE_1__["l"])(Object(_vec3_js__WEBPACK_IMPORTED_MODULE_1__["c"])(P, P, S)) / 2;
      }

      var M = new _core_ObjectStack_js__WEBPACK_IMPORTED_MODULE_2__["ObjectStack"](_lineSegment_js__WEBPACK_IMPORTED_MODULE_5__["c"]),
          O = new _core_ObjectStack_js__WEBPACK_IMPORTED_MODULE_2__["ObjectStack"](function () {
        return {
          p0: null,
          p1: null,
          p2: null
        };
      }),
          P = Object(_vec3f64_js__WEBPACK_IMPORTED_MODULE_0__["c"])(),
          S = Object(_vec3f64_js__WEBPACK_IMPORTED_MODULE_0__["c"])();
      var q = Object.freeze({
        __proto__: null,
        create: d,
        wrap: j,
        copy: b,
        fromValues: v,
        distance2: w,
        intersectRay: _,
        areaPoints2d: h,
        area2d: k,
        areaPoints3d: y
      });
      /***/
    },

    /***/
    "p9cc":
    /*!*******************************************************************************************************************************!*\
      !*** ./node_modules/@arcgis/core/views/3d/webgl-engine/core/shaderLibrary/shading/PhysicallyBasedRenderingParameters.glsl.js ***!
      \*******************************************************************************************************************************/

    /*! exports provided: PBRSchematicMRRValues, PhysicallyBasedRenderingParameters */

    /***/
    function p9cc(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "PBRSchematicMRRValues", function () {
        return t;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "PhysicallyBasedRenderingParameters", function () {
        return r;
      });
      /* harmony import */


      var _shaderModules_interfaces_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ../../shaderModules/interfaces.js */
      "OIYib");
      /* harmony import */


      var _chunks_vec3f32_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ../../../../../../chunks/vec3f32.js */
      "R/jG");
      /* harmony import */


      var _attributes_VertexTextureCoordinates_glsl_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ../attributes/VertexTextureCoordinates.glsl.js */
      "fLTx");
      /*
      All material copyright ESRI, All Rights Reserved, unless otherwise specified.
      See https://js.arcgis.com/4.18/esri/copyright.txt for details.
      */


      var t = Object(_chunks_vec3f32_js__WEBPACK_IMPORTED_MODULE_1__["f"])(0, .6, .2);

      function r(s, t) {
        var r = s.fragment,
            a = t.hasMetalnessAndRoughnessTexture || t.hasEmissionTexture || t.hasOcclusionTexture;
        1 === t.pbrMode && a && s.include(_attributes_VertexTextureCoordinates_glsl_js__WEBPACK_IMPORTED_MODULE_2__["VertexTextureCoordinates"], t), 2 !== t.pbrMode ? (0 === t.pbrMode && r.code.add(_shaderModules_interfaces_js__WEBPACK_IMPORTED_MODULE_0__["glsl"](_templateObject129 || (_templateObject129 = _taggedTemplateLiteral(["\n      float getBakedOcclusion() { return 1.0; }\n  "])))), 1 === t.pbrMode && (r.uniforms.add("emissionFactor", "vec3"), r.uniforms.add("mrrFactors", "vec3"), r.code.add(_shaderModules_interfaces_js__WEBPACK_IMPORTED_MODULE_0__["glsl"](_templateObject130 || (_templateObject130 = _taggedTemplateLiteral(["\n      vec3 mrr;\n      vec3 emission;\n      float occlusion;\n    "])))), t.hasMetalnessAndRoughnessTexture && (r.uniforms.add("texMetallicRoughness", "sampler2D"), t.supportsTextureAtlas && r.uniforms.add("texMetallicRoughnessSize", "vec2"), r.code.add(_shaderModules_interfaces_js__WEBPACK_IMPORTED_MODULE_0__["glsl"](_templateObject131 || (_templateObject131 = _taggedTemplateLiteral(["\n      void applyMetallnessAndRoughness(TextureLookupParameter params) {\n        vec3 metallicRoughness = textureLookup(texMetallicRoughness, params).rgb;\n\n        mrr[0] *= metallicRoughness.b;\n        mrr[1] *= metallicRoughness.g;\n      }"]))))), t.hasEmissionTexture && (r.uniforms.add("texEmission", "sampler2D"), t.supportsTextureAtlas && r.uniforms.add("texEmissionSize", "vec2"), r.code.add(_shaderModules_interfaces_js__WEBPACK_IMPORTED_MODULE_0__["glsl"](_templateObject132 || (_templateObject132 = _taggedTemplateLiteral(["\n      void applyEmission(TextureLookupParameter params) {\n        emission *= textureLookup(texEmission, params).rgb;\n      }"]))))), t.hasOcclusionTexture ? (r.uniforms.add("texOcclusion", "sampler2D"), t.supportsTextureAtlas && r.uniforms.add("texOcclusionSize", "vec2"), r.code.add(_shaderModules_interfaces_js__WEBPACK_IMPORTED_MODULE_0__["glsl"](_templateObject133 || (_templateObject133 = _taggedTemplateLiteral(["\n      void applyOcclusion(TextureLookupParameter params) {\n        occlusion *= textureLookup(texOcclusion, params).r;\n      }\n\n      float getBakedOcclusion() {\n        return occlusion;\n      }\n      "]))))) : r.code.add(_shaderModules_interfaces_js__WEBPACK_IMPORTED_MODULE_0__["glsl"](_templateObject134 || (_templateObject134 = _taggedTemplateLiteral(["\n      float getBakedOcclusion() { return 1.0; }\n      "])))), r.code.add(_shaderModules_interfaces_js__WEBPACK_IMPORTED_MODULE_0__["glsl"](_templateObject135 || (_templateObject135 = _taggedTemplateLiteral(["\n    void applyPBRFactors() {\n      mrr = mrrFactors;\n      emission = emissionFactor;\n      occlusion = 1.0;\n      ", "\n      ", "\n      ", "\n      ", "\n    }\n  "])), a ? "vtc.uv = vuv0;" : "", t.hasMetalnessAndRoughnessTexture ? t.supportsTextureAtlas ? "vtc.size = texMetallicRoughnessSize; applyMetallnessAndRoughness(vtc);" : "applyMetallnessAndRoughness(vtc);" : "", t.hasEmissionTexture ? t.supportsTextureAtlas ? "vtc.size = texEmissionSize; applyEmission(vtc);" : "applyEmission(vtc);" : "", t.hasOcclusionTexture ? t.supportsTextureAtlas ? "vtc.size = texOcclusionSize; applyOcclusion(vtc);" : "applyOcclusion(vtc);" : "")))) : r.code.add(_shaderModules_interfaces_js__WEBPACK_IMPORTED_MODULE_0__["glsl"](_templateObject136 || (_templateObject136 = _taggedTemplateLiteral(["\n      const vec3 mrr = vec3(0.0, 0.6, 0.2);\n      const vec3 emission = vec3(0.0);\n      float occlusion = 1.0;\n\n      void applyPBRFactors() {}\n\n      float getBakedOcclusion() { return 1.0; }\n    "]))));
      }

      !function (e) {
        e.bindUniforms = function (e, s) {
          var o = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : !1;
          o || (e.setUniform3fv("mrrFactors", s.mrrFactors), e.setUniform3fv("emissionFactor", s.emissiveFactor));
        };
      }(r || (r = {}));
      /***/
    },

    /***/
    "qXiY":
    /*!*********************************************************************************!*\
      !*** ./node_modules/@arcgis/core/views/3d/webgl-engine/lib/intersectorUtils.js ***!
      \*********************************************************************************/

    /*! exports provided: I3SVerticalOffsetGlobalViewingMode, IntersectorOptions, IntersectorResult, IntersectorResults, IntersectorTransform, Object3DVerticalOffsetGlobalViewingMode, TERRAIN_ID, TerrainVerticalOffsetGlobalViewingMode, getVerticalOffsetI3S, getVerticalOffsetObject3D, getVerticalOffsetTerrain, sliceFilterPredicate */

    /***/
    function qXiY(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "I3SVerticalOffsetGlobalViewingMode", function () {
        return P;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "IntersectorOptions", function () {
        return V;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "IntersectorResult", function () {
        return G;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "IntersectorResults", function () {
        return k;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "IntersectorTransform", function () {
        return j;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "Object3DVerticalOffsetGlobalViewingMode", function () {
        return N;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "TERRAIN_ID", function () {
        return J;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "TerrainVerticalOffsetGlobalViewingMode", function () {
        return F;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "getVerticalOffsetI3S", function () {
        return C;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "getVerticalOffsetObject3D", function () {
        return B;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "getVerticalOffsetTerrain", function () {
        return H;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "sliceFilterPredicate", function () {
        return q;
      });
      /* harmony import */


      var _core_maybe_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ../../../../core/maybe.js */
      "srIe");
      /* harmony import */


      var _chunks_vec3f64_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ../../../../chunks/vec3f64.js */
      "Cy1f");
      /* harmony import */


      var _chunks_vec3_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ../../../../chunks/vec3.js */
      "5DEt");
      /* harmony import */


      var _chunks_mat4_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ../../../../chunks/mat4.js */
      "15Hh");
      /* harmony import */


      var _chunks_mat3f64_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ../../../../chunks/mat3f64.js */
      "2uVf");
      /* harmony import */


      var _chunks_mat4f64_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ../../../../chunks/mat4f64.js */
      "r+FG");
      /* harmony import */


      var _chunks_quatf64_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ../../../../chunks/quatf64.js */
      "sTkM");
      /* harmony import */


      var _chunks_vec4f64_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! ../../../../chunks/vec4f64.js */
      "D8Ta");
      /* harmony import */


      var _chunks_mat3_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! ../../../../chunks/mat3.js */
      "HJJS");
      /* harmony import */


      var _chunks_vec4_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! ../../../../chunks/vec4.js */
      "dXfX");
      /* harmony import */


      var _chunks_quat_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
      /*! ../../../../chunks/quat.js */
      "BPBZ");
      /* harmony import */


      var _chunks_vec3f32_js__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
      /*! ../../../../chunks/vec3f32.js */
      "R/jG");
      /* harmony import */


      var _chunks_boundedPlane_js__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
      /*! ../../../../chunks/boundedPlane.js */
      "DZ/s");
      /* harmony import */


      var _chunks_sphere_js__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
      /*! ../../../../chunks/sphere.js */
      "+JUG");
      /* harmony import */


      var _support_geometryUtils_js__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(
      /*! ../../support/geometryUtils.js */
      "0Kx6");
      /* harmony import */


      var _Object3D_js__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(
      /*! ./Object3D.js */
      "WiJz");
      /*
      All material copyright ESRI, All Rights Reserved, unless otherwise specified.
      See https://js.arcgis.com/4.18/esri/copyright.txt for details.
      */


      function q(t) {
        return function (s, r, e) {
          return Object(_chunks_vec3_js__WEBPACK_IMPORTED_MODULE_2__["e"])(K, s, r, e), !Object(_chunks_boundedPlane_js__WEBPACK_IMPORTED_MODULE_12__["e"])(t, K);
        };
      }

      var V = function V() {
        _classCallCheck(this, V);

        this.verticalOffset = 0, this.selectionMode = !1, this.hud = !0, this.selectOpaqueTerrainOnly = !0, this.invisibleTerrain = !1, this.backfacesTerrain = !0, this.isFiltered = !1, this.store = 2;
      };

      var j = /*#__PURE__*/function () {
        function j() {
          _classCallCheck(this, j);

          this._transform = Object(_chunks_mat4f64_js__WEBPACK_IMPORTED_MODULE_5__["a"])(), this._transformInverse = new w({
            value: this._transform
          }, _chunks_mat4_js__WEBPACK_IMPORTED_MODULE_3__["a"], _chunks_mat4f64_js__WEBPACK_IMPORTED_MODULE_5__["a"]), this._transformInverseTranspose = new w(this._transformInverse, _chunks_mat4_js__WEBPACK_IMPORTED_MODULE_3__["b"], _chunks_mat4f64_js__WEBPACK_IMPORTED_MODULE_5__["a"]), this._transformTranspose = new w({
            value: this._transform
          }, _chunks_mat4_js__WEBPACK_IMPORTED_MODULE_3__["b"], _chunks_mat4f64_js__WEBPACK_IMPORTED_MODULE_5__["a"]), this._transformInverseRotation = new w({
            value: this._transform
          }, _chunks_mat3_js__WEBPACK_IMPORTED_MODULE_8__["b"], _chunks_mat3f64_js__WEBPACK_IMPORTED_MODULE_4__["a"]);
        }

        _createClass(j, [{
          key: "invalidateLazyTransforms",
          value: function invalidateLazyTransforms() {
            this._transformInverse.invalidate(), this._transformInverseTranspose.invalidate(), this._transformTranspose.invalidate(), this._transformInverseRotation.invalidate();
          }
        }, {
          key: "transform",
          get: function get() {
            return this._transform;
          }
        }, {
          key: "inverse",
          get: function get() {
            return this._transformInverse.value;
          }
        }, {
          key: "inverseTranspose",
          get: function get() {
            return this._transformInverseTranspose.value;
          }
        }, {
          key: "inverseRotation",
          get: function get() {
            return this._transformInverseRotation.value;
          }
        }, {
          key: "transpose",
          get: function get() {
            return this._transformTranspose.value;
          }
        }, {
          key: "setTransformMatrix",
          value: function setTransformMatrix(t) {
            Object(_chunks_mat4_js__WEBPACK_IMPORTED_MODULE_3__["c"])(this._transform, t);
          }
        }, {
          key: "multiplyTransform",
          value: function multiplyTransform(t) {
            Object(_chunks_mat4_js__WEBPACK_IMPORTED_MODULE_3__["m"])(this._transform, this._transform, t);
          }
        }, {
          key: "set",
          value: function set(t) {
            Object(_chunks_mat4_js__WEBPACK_IMPORTED_MODULE_3__["c"])(this._transform, t), this.invalidateLazyTransforms();
          }
        }, {
          key: "setAndInvalidateLazyTransforms",
          value: function setAndInvalidateLazyTransforms(t, s) {
            this.setTransformMatrix(t), this.multiplyTransform(s), this.invalidateLazyTransforms();
          }
        }]);

        return j;
      }();

      var w = /*#__PURE__*/function () {
        function w(t, s, r) {
          _classCallCheck(this, w);

          this.original = t, this.update = s, this.dirty = !0, this.transform = r();
        }

        _createClass(w, [{
          key: "invalidate",
          value: function invalidate() {
            this.dirty = !0;
          }
        }, {
          key: "value",
          get: function get() {
            return this.dirty && (this.update(this.transform, this.original.value), this.dirty = !1), this.transform;
          }
        }]);

        return w;
      }();

      var k = /*#__PURE__*/function () {
        function k() {
          _classCallCheck(this, k);

          this.min = new G(), this.max = new G(), this.hud = new G(), this.ground = new G();
        }

        _createClass(k, [{
          key: "init",
          value: function init(t) {
            this.min.init(t), this.max.init(t), this.hud.init(t), this.ground.init(t), this.all = [];
          }
        }]);

        return k;
      }();

      var G = /*#__PURE__*/function () {
        function G(t) {
          _classCallCheck(this, G);

          this.normal = Object(_chunks_vec3f64_js__WEBPACK_IMPORTED_MODULE_1__["c"])(), this.transformation = Object(_chunks_mat4f64_js__WEBPACK_IMPORTED_MODULE_5__["a"])(), this._ray = _support_geometryUtils_js__WEBPACK_IMPORTED_MODULE_14__["ray"].create(), this.init(t);
        }

        _createClass(G, [{
          key: "ray",
          get: function get() {
            return this._ray;
          }
        }, {
          key: "hasIntersectionPoint",
          get: function get() {
            return null != this.dist;
          }
        }, {
          key: "distanceInRenderSpace",
          get: function get() {
            if (null != this.dist) return Object(_chunks_vec3_js__WEBPACK_IMPORTED_MODULE_2__["a"])(Q, this.ray.direction, this.dist), Object(_chunks_vec3_js__WEBPACK_IMPORTED_MODULE_2__["l"])(Q);
          }
        }, {
          key: "getIntersectionPoint",
          value: function getIntersectionPoint(t) {
            return !!this.hasIntersectionPoint && (Object(_chunks_vec3_js__WEBPACK_IMPORTED_MODULE_2__["a"])(Q, this.ray.direction, this.dist), Object(_chunks_vec3_js__WEBPACK_IMPORTED_MODULE_2__["b"])(t, this.ray.origin, Q), !0);
          }
        }, {
          key: "getTransformedNormal",
          value: function getTransformedNormal(t) {
            return Object(_chunks_vec3_js__WEBPACK_IMPORTED_MODULE_2__["g"])(W, this.normal), W[3] = 0, Object(_chunks_vec4_js__WEBPACK_IMPORTED_MODULE_9__["t"])(W, W, this.transformation), Object(_chunks_vec3_js__WEBPACK_IMPORTED_MODULE_2__["g"])(t, W), Object(_chunks_vec3_js__WEBPACK_IMPORTED_MODULE_2__["n"])(t, t), t;
          }
        }, {
          key: "init",
          value: function init(t) {
            this.dist = void 0, this.target = void 0, this.name = void 0, this.drapedLayerOrder = void 0, this.drapedLayerGraphicOrder = void 0, this.center = null, this.geometryId = null, this.triangleNr = null, this.intersector = "Stage", t ? _support_geometryUtils_js__WEBPACK_IMPORTED_MODULE_14__["ray"].copy(t, this._ray) : this._ray = _support_geometryUtils_js__WEBPACK_IMPORTED_MODULE_14__["ray"].create();
          }
        }, {
          key: "set",
          value: function set(t, s, r, e, a, n, h, o, l, f) {
            t instanceof _Object3D_js__WEBPACK_IMPORTED_MODULE_15__["default"] && (t = {
              type: "stage",
              obj: t
            }), this.dist = r, Object(_chunks_vec3_js__WEBPACK_IMPORTED_MODULE_2__["g"])(this.normal, e), Object(_chunks_mat4_js__WEBPACK_IMPORTED_MODULE_3__["c"])(this.transformation, a), this.target = t, this.name = s, this.drapedLayerOrder = n, this.center = h ? Object(_chunks_vec3f64_js__WEBPACK_IMPORTED_MODULE_1__["b"])(h) : null, this.geometryId = o, this.triangleNr = l, this.drapedLayerGraphicOrder = f;
          }
        }, {
          key: "copyFrom",
          value: function copyFrom(t) {
            _support_geometryUtils_js__WEBPACK_IMPORTED_MODULE_14__["ray"].copy(t._ray, this._ray), this.dist = t.dist, this.target = t.target, this.name = t.name, this.drapedLayerOrder = t.drapedLayerOrder, this.center = t.center ? Object(_chunks_vec3f64_js__WEBPACK_IMPORTED_MODULE_1__["b"])(t.center) : null, this.geometryId = t.geometryId, this.triangleNr = t.triangleNr, this.intersector = t.intersector, this.drapedLayerGraphicOrder = t.drapedLayerGraphicOrder, Object(_chunks_vec3_js__WEBPACK_IMPORTED_MODULE_2__["g"])(this.normal, t.normal), Object(_chunks_mat4_js__WEBPACK_IMPORTED_MODULE_3__["c"])(this.transformation, t.transformation);
          }
        }, {
          key: "toOwner",
          value: function toOwner(t) {
            if (!this.target) return null;

            switch (this.target.type) {
              case "stage":
                return U(this.target.obj.metadata, t);

              case "external":
                switch (this.intersector) {
                  case "PointRenderer":
                    return function (t, s) {
                      var r = t.metadata.layerUid;
                      return null != r ? s.map.findLayerByUid(r) : null;
                    }(this.target, t);

                  case "I3S":
                  case "IM":
                  case "LodRenderer":
                  case "OverlayRenderer":
                    return U(this.target.metadata, t);

                  case "TerrainRenderer":
                    return t.map && t.map.ground;
                }

            }

            return null;
          }
        }, {
          key: "toGraphic",
          value: function toGraphic(t) {
            if (!this.target) return null;

            switch (this.target.type) {
              case "stage":
                return R(this.target.obj.metadata, t);

              case "external":
                switch (this.intersector) {
                  case "PointRenderer":
                    return this.target.metadata.createGraphic();

                  case "I3S":
                  case "IM":
                  case "LodRenderer":
                  case "OverlayRenderer":
                    return R(this.target.metadata, t);
                }

            }

            return null;
          }
        }]);

        return G;
      }();

      function U(r, e) {
        return Object(_core_maybe_js__WEBPACK_IMPORTED_MODULE_0__["isNone"])(r) || null == r.layerUid ? null : Object(_core_maybe_js__WEBPACK_IMPORTED_MODULE_0__["isSome"])(e.graphicsView) && r.layerUid === e.graphicsView.mockLayerId ? e.graphics : e.map.findLayerByUid(r.layerUid);
      }

      function R(e, i) {
        if (Object(_core_maybe_js__WEBPACK_IMPORTED_MODULE_0__["isNone"])(e)) return null;
        var a = U(e, i);
        if (Object(_core_maybe_js__WEBPACK_IMPORTED_MODULE_0__["isNone"])(a)) return null;
        if (a === i.graphics) return Object(_core_maybe_js__WEBPACK_IMPORTED_MODULE_0__["isSome"])(i.graphicsView) ? Object(_core_maybe_js__WEBPACK_IMPORTED_MODULE_0__["unwrap"])(i.graphicsView.getGraphicFromGraphicUid(e.graphicUid)) : null;
        var n = i.allLayerViews.find(function (t) {
          return t.layer === a;
        });
        return n ? function (t, s) {
          if (!t || t.suspended) return null;
          if ("getGraphicFromIntersectorMetadata" in t && s) return t.getGraphicFromIntersectorMetadata(s);
          if ("getGraphicFromGraphicUid" in t && null != s.graphicUid) return t.getGraphicFromGraphicUid(s.graphicUid);
          return null;
        }(n, e) : null;
      }

      var F = /*#__PURE__*/function () {
        function F() {
          var t = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 0;

          _classCallCheck(this, F);

          this.offset = t, this.tmpVertex = Object(_chunks_vec3f64_js__WEBPACK_IMPORTED_MODULE_1__["c"])();
        }

        _createClass(F, [{
          key: "applyToVertex",
          value: function applyToVertex(t, s, r) {
            var e = t + this.localOrigin[0],
                i = s + this.localOrigin[1],
                a = r + this.localOrigin[2],
                n = this.offset / Math.sqrt(e * e + i * i + a * a);
            return this.tmpVertex[0] = t + e * n, this.tmpVertex[1] = s + i * n, this.tmpVertex[2] = r + a * n, this.tmpVertex;
          }
        }, {
          key: "applyToAabb",
          value: function applyToAabb(t) {
            var s = t[0] + this.localOrigin[0],
                r = t[1] + this.localOrigin[1],
                e = t[2] + this.localOrigin[2],
                i = t[3] + this.localOrigin[0],
                a = t[4] + this.localOrigin[1],
                n = t[5] + this.localOrigin[2],
                h = this.offset / Math.sqrt(s * s + r * r + e * e);
            t[0] += s * h, t[1] += r * h, t[2] += e * h;
            var o = this.offset / Math.sqrt(i * i + a * a + n * n);
            return t[3] += i * o, t[4] += a * o, t[5] += n * o, t;
          }
        }]);

        return F;
      }();

      var P = /*#__PURE__*/function () {
        function P() {
          var t = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 0;

          _classCallCheck(this, P);

          this.offset = t, this.componentLocalOriginLength = 0, this.tmpVertex = Object(_chunks_vec3f64_js__WEBPACK_IMPORTED_MODULE_1__["c"])(), this.mbs = Object(_chunks_vec4f64_js__WEBPACK_IMPORTED_MODULE_7__["a"])(), this.obb = {
            center: Object(_chunks_vec3f64_js__WEBPACK_IMPORTED_MODULE_1__["c"])(),
            halfSize: Object(_chunks_vec3f32_js__WEBPACK_IMPORTED_MODULE_11__["c"])(),
            quaternion: null
          };
        }

        _createClass(P, [{
          key: "localOrigin",
          set: function set(t) {
            this.componentLocalOriginLength = Math.sqrt(t[0] * t[0] + t[1] * t[1] + t[2] * t[2]);
          }
        }, {
          key: "applyToVertex",
          value: function applyToVertex(t, s, r) {
            var e = t,
                i = s,
                a = r + this.componentLocalOriginLength,
                n = this.offset / Math.sqrt(e * e + i * i + a * a);
            return this.tmpVertex[0] = t + e * n, this.tmpVertex[1] = s + i * n, this.tmpVertex[2] = r + a * n, this.tmpVertex;
          }
        }, {
          key: "applyToAabb",
          value: function applyToAabb(t) {
            var s = t[0],
                r = t[1],
                e = t[2] + this.componentLocalOriginLength,
                i = t[3],
                a = t[4],
                n = t[5] + this.componentLocalOriginLength,
                h = this.offset / Math.sqrt(s * s + r * r + e * e);
            t[0] += s * h, t[1] += r * h, t[2] += e * h;
            var o = this.offset / Math.sqrt(i * i + a * a + n * n);
            return t[3] += i * o, t[4] += a * o, t[5] += n * o, t;
          }
        }, {
          key: "applyToMbs",
          value: function applyToMbs(t) {
            var s = Math.sqrt(t[0] * t[0] + t[1] * t[1] + t[2] * t[2]),
                r = this.offset / s;
            return this.mbs[0] = t[0] + t[0] * r, this.mbs[1] = t[1] + t[1] * r, this.mbs[2] = t[2] + t[2] * r, this.mbs[3] = t[3] + t[3] * this.offset / s, this.mbs;
          }
        }, {
          key: "applyToObb",
          value: function applyToObb(t) {
            var s = t.center,
                r = this.offset / Math.sqrt(s[0] * s[0] + s[1] * s[1] + s[2] * s[2]);
            this.obb.center[0] = s[0] + s[0] * r, this.obb.center[1] = s[1] + s[1] * r, this.obb.center[2] = s[2] + s[2] * r, Object(_chunks_vec3_js__WEBPACK_IMPORTED_MODULE_2__["q"])(this.obb.halfSize, t.halfSize, t.quaternion), Object(_chunks_vec3_js__WEBPACK_IMPORTED_MODULE_2__["b"])(this.obb.halfSize, this.obb.halfSize, t.center);
            var e = this.offset / Math.sqrt(this.obb.halfSize[0] * this.obb.halfSize[0] + this.obb.halfSize[1] * this.obb.halfSize[1] + this.obb.halfSize[2] * this.obb.halfSize[2]);
            return this.obb.halfSize[0] += this.obb.halfSize[0] * e, this.obb.halfSize[1] += this.obb.halfSize[1] * e, this.obb.halfSize[2] += this.obb.halfSize[2] * e, Object(_chunks_vec3_js__WEBPACK_IMPORTED_MODULE_2__["f"])(this.obb.halfSize, this.obb.halfSize, t.center), Object(_chunks_quat_js__WEBPACK_IMPORTED_MODULE_10__["c"])(X, t.quaternion), Object(_chunks_vec3_js__WEBPACK_IMPORTED_MODULE_2__["q"])(this.obb.halfSize, this.obb.halfSize, X), this.obb.halfSize[0] *= this.obb.halfSize[0] < 0 ? -1 : 1, this.obb.halfSize[1] *= this.obb.halfSize[1] < 0 ? -1 : 1, this.obb.halfSize[2] *= this.obb.halfSize[2] < 0 ? -1 : 1, this.obb.quaternion = t.quaternion, this.obb;
          }
        }]);

        return P;
      }();

      var N = /*#__PURE__*/function () {
        function N() {
          var t = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 0;

          _classCallCheck(this, N);

          this.offset = t, this.sphere = Object(_chunks_sphere_js__WEBPACK_IMPORTED_MODULE_13__["c"])(), this.tmpVertex = Object(_chunks_vec3f64_js__WEBPACK_IMPORTED_MODULE_1__["c"])();
        }

        _createClass(N, [{
          key: "applyToVertex",
          value: function applyToVertex(t, s, r) {
            var e = this.objectTransform.transform;
            var i = e[0] * t + e[4] * s + e[8] * r + e[12],
                a = e[1] * t + e[5] * s + e[9] * r + e[13],
                n = e[2] * t + e[6] * s + e[10] * r + e[14];
            var h = this.offset / Math.sqrt(i * i + a * a + n * n);
            i += i * h, a += a * h, n += n * h;
            var o = this.objectTransform.inverse;
            return this.tmpVertex[0] = o[0] * i + o[4] * a + o[8] * n + o[12], this.tmpVertex[1] = o[1] * i + o[5] * a + o[9] * n + o[13], this.tmpVertex[2] = o[2] * i + o[6] * a + o[10] * n + o[14], this.tmpVertex;
          }
        }, {
          key: "applyToMinMax",
          value: function applyToMinMax(t, s) {
            var r = this.offset / Math.sqrt(t[0] * t[0] + t[1] * t[1] + t[2] * t[2]);
            t[0] += t[0] * r, t[1] += t[1] * r, t[2] += t[2] * r;
            var e = this.offset / Math.sqrt(s[0] * s[0] + s[1] * s[1] + s[2] * s[2]);
            s[0] += s[0] * e, s[1] += s[1] * e, s[2] += s[2] * e;
          }
        }, {
          key: "applyToAabb",
          value: function applyToAabb(t) {
            var s = this.offset / Math.sqrt(t[0] * t[0] + t[1] * t[1] + t[2] * t[2]);
            t[0] += t[0] * s, t[1] += t[1] * s, t[2] += t[2] * s;
            var r = this.offset / Math.sqrt(t[3] * t[3] + t[4] * t[4] + t[5] * t[5]);
            return t[3] += t[3] * r, t[4] += t[4] * r, t[5] += t[5] * r, t;
          }
        }, {
          key: "applyToBoundingSphere",
          value: function applyToBoundingSphere(t, s) {
            var r = Math.sqrt(s[0] * s[0] + s[1] * s[1] + s[2] * s[2]),
                e = this.offset / r;
            return this.sphere.center[0] = s[0] + s[0] * e, this.sphere.center[1] = s[1] + s[1] * e, this.sphere.center[2] = s[2] + s[2] * e, this.sphere.radius = t + t * this.offset / r, this.sphere;
          }
        }]);

        return N;
      }();

      var A = new N();

      function B(t) {
        return Object(_core_maybe_js__WEBPACK_IMPORTED_MODULE_0__["isSome"])(t) ? (A.offset = t, A) : null;
      }

      var D = new P();

      function C(t) {
        return Object(_core_maybe_js__WEBPACK_IMPORTED_MODULE_0__["isSome"])(t) ? (D.offset = t, D) : null;
      }

      var E = new F();

      function H(t) {
        return Object(_core_maybe_js__WEBPACK_IMPORTED_MODULE_0__["isSome"])(t) ? (E.offset = t, E) : null;
      }

      var J = "terrain",
          K = Object(_chunks_vec3f64_js__WEBPACK_IMPORTED_MODULE_1__["c"])(),
          Q = Object(_chunks_vec3f64_js__WEBPACK_IMPORTED_MODULE_1__["c"])(),
          W = Object(_chunks_vec4f64_js__WEBPACK_IMPORTED_MODULE_7__["a"])(),
          X = Object(_chunks_quatf64_js__WEBPACK_IMPORTED_MODULE_6__["a"])();
      /***/
    },

    /***/
    "qrV2":
    /*!****************************************************************************************************!*\
      !*** ./node_modules/@arcgis/core/views/3d/webgl-engine/core/shaderLibrary/shading/Normals.glsl.js ***!
      \****************************************************************************************************/

    /*! exports provided: Normals */

    /***/
    function qrV2(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "Normals", function () {
        return r;
      });
      /* harmony import */


      var _shaderModules_interfaces_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ../../shaderModules/interfaces.js */
      "OIYib");
      /*
      All material copyright ESRI, All Rights Reserved, unless otherwise specified.
      See https://js.arcgis.com/4.18/esri/copyright.txt for details.
      */


      function r(r, e) {
        var m = r.fragment;
        m.code.add(_shaderModules_interfaces_js__WEBPACK_IMPORTED_MODULE_0__["glsl"](_templateObject137 || (_templateObject137 = _taggedTemplateLiteral(["\n    struct ShadingNormalParameters {\n      vec3 normalView;\n      vec3 viewDirection;\n    } shadingParams;\n    "])))), 1 === e.doubleSidedMode ? m.code.add(_shaderModules_interfaces_js__WEBPACK_IMPORTED_MODULE_0__["glsl"](_templateObject138 || (_templateObject138 = _taggedTemplateLiteral(["\n      vec3 shadingNormal(ShadingNormalParameters params) {\n        return dot(params.normalView, params.viewDirection) > 0.0 ? normalize(-params.normalView) : normalize(params.normalView);\n      }\n    "])))) : 2 === e.doubleSidedMode ? m.code.add(_shaderModules_interfaces_js__WEBPACK_IMPORTED_MODULE_0__["glsl"](_templateObject139 || (_templateObject139 = _taggedTemplateLiteral(["\n      vec3 shadingNormal(ShadingNormalParameters params) {\n        return gl_FrontFacing ? normalize(params.normalView) : normalize(-params.normalView);\n      }\n    "])))) : m.code.add(_shaderModules_interfaces_js__WEBPACK_IMPORTED_MODULE_0__["glsl"](_templateObject140 || (_templateObject140 = _taggedTemplateLiteral(["\n      vec3 shadingNormal(ShadingNormalParameters params) {\n        return normalize(params.normalView);\n      }\n    "]))));
      }
      /***/

    },

    /***/
    "r+FG":
    /*!*****************************************************!*\
      !*** ./node_modules/@arcgis/core/chunks/mat4f64.js ***!
      \*****************************************************/

    /*! exports provided: I, a, b, c, f, m */

    /***/
    function rFG(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "I", function () {
        return a;
      });
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
        return t;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "f", function () {
        return n;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "m", function () {
        return o;
      });
      /*
      All material copyright ESRI, All Rights Reserved, unless otherwise specified.
      See https://js.arcgis.com/4.18/esri/copyright.txt for details.
      */


      function e() {
        return [1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1];
      }

      function r(e) {
        return [e[0], e[1], e[2], e[3], e[4], e[5], e[6], e[7], e[8], e[9], e[10], e[11], e[12], e[13], e[14], e[15]];
      }

      function n(e, r, n, t, a, o, c, u, s, f, i, l, _, I, b, m) {
        return [e, r, n, t, a, o, c, u, s, f, i, l, _, I, b, m];
      }

      function t(e, r) {
        return new Float64Array(e, r, 16);
      }

      var a = [1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1];
      var o = Object.freeze({
        __proto__: null,
        create: e,
        clone: r,
        fromValues: n,
        createView: t,
        IDENTITY: a
      });
      /***/
    },

    /***/
    "sJp1":
    /*!*****************************************************************************************************************!*\
      !*** ./node_modules/@arcgis/core/views/3d/webgl-engine/core/shaderLibrary/attributes/PositionAttribute.glsl.js ***!
      \*****************************************************************************************************************/

    /*! exports provided: PositionAttribute */

    /***/
    function sJp1(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "PositionAttribute", function () {
        return o;
      });
      /* harmony import */


      var _shaderModules_interfaces_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ../../shaderModules/interfaces.js */
      "OIYib");
      /*
      All material copyright ESRI, All Rights Reserved, unless otherwise specified.
      See https://js.arcgis.com/4.18/esri/copyright.txt for details.
      */


      function o(o) {
        o.attributes.add("position", "vec3"), o.vertex.code.add(_shaderModules_interfaces_js__WEBPACK_IMPORTED_MODULE_0__["glsl"](_templateObject141 || (_templateObject141 = _taggedTemplateLiteral(["\n    vec3 positionModel() { return position; }\n  "]))));
      }
      /***/

    },

    /***/
    "sKsC":
    /*!****************************************************************!*\
      !*** ./node_modules/@arcgis/core/chunks/RealisticTree.glsl.js ***!
      \****************************************************************/

    /*! exports provided: R, b */

    /***/
    function sKsC(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "R", function () {
        return M;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "b", function () {
        return L;
      });
      /* harmony import */


      var _views_3d_webgl_engine_core_shaderModules_interfaces_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ../views/3d/webgl-engine/core/shaderModules/interfaces.js */
      "OIYib");
      /* harmony import */


      var _views_3d_webgl_engine_core_shaderLibrary_Transform_glsl_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ../views/3d/webgl-engine/core/shaderLibrary/Transform.glsl.js */
      "Tbkp");
      /* harmony import */


      var _views_3d_webgl_engine_core_shaderModules_ShaderBuilder_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ../views/3d/webgl-engine/core/shaderModules/ShaderBuilder.js */
      "aQrP");
      /* harmony import */


      var _views_3d_webgl_engine_core_shaderLibrary_Slice_glsl_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ../views/3d/webgl-engine/core/shaderLibrary/Slice.glsl.js */
      "0nJL");
      /* harmony import */


      var _views_3d_webgl_engine_core_shaderLibrary_shading_VisualVariables_glsl_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ../views/3d/webgl-engine/core/shaderLibrary/shading/VisualVariables.glsl.js */
      "viRi");
      /* harmony import */


      var _views_3d_webgl_engine_core_shaderLibrary_util_AlphaDiscard_glsl_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ../views/3d/webgl-engine/core/shaderLibrary/util/AlphaDiscard.glsl.js */
      "69UF");
      /* harmony import */


      var _views_3d_webgl_engine_core_shaderLibrary_attributes_VerticalOffset_glsl_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ../views/3d/webgl-engine/core/shaderLibrary/attributes/VerticalOffset.glsl.js */
      "F7CJ");
      /* harmony import */


      var _views_3d_webgl_engine_core_shaderLibrary_attributes_VertexColor_glsl_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! ../views/3d/webgl-engine/core/shaderLibrary/attributes/VertexColor.glsl.js */
      "bVvB");
      /* harmony import */


      var _views_3d_webgl_engine_core_shaderLibrary_shading_ReadShadowMap_glsl_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! ../views/3d/webgl-engine/core/shaderLibrary/shading/ReadShadowMap.glsl.js */
      "0BfS");
      /* harmony import */


      var _views_3d_webgl_engine_core_shaderLibrary_ForwardLinearDepth_glsl_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! ../views/3d/webgl-engine/core/shaderLibrary/ForwardLinearDepth.glsl.js */
      "vXUg");
      /* harmony import */


      var _views_3d_webgl_engine_core_shaderLibrary_shading_PhysicallyBasedRendering_glsl_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
      /*! ../views/3d/webgl-engine/core/shaderLibrary/shading/PhysicallyBasedRendering.glsl.js */
      "XV/G");
      /* harmony import */


      var _views_3d_webgl_engine_core_shaderLibrary_attributes_InstancedDoublePrecision_glsl_js__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
      /*! ../views/3d/webgl-engine/core/shaderLibrary/attributes/InstancedDoublePrecision.glsl.js */
      "1TnO");
      /* harmony import */


      var _views_3d_webgl_engine_core_shaderLibrary_attributes_TextureCoordinateAttribute_glsl_js__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
      /*! ../views/3d/webgl-engine/core/shaderLibrary/attributes/TextureCoordinateAttribute.glsl.js */
      "368d");
      /* harmony import */


      var _views_3d_webgl_engine_core_shaderLibrary_shading_PhysicallyBasedRenderingParameters_glsl_js__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
      /*! ../views/3d/webgl-engine/core/shaderLibrary/shading/PhysicallyBasedRenderingParameters.glsl.js */
      "p9cc");
      /* harmony import */


      var _views_3d_webgl_engine_core_shaderLibrary_Offset_glsl_js__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(
      /*! ../views/3d/webgl-engine/core/shaderLibrary/Offset.glsl.js */
      "F8o4");
      /* harmony import */


      var _views_3d_webgl_engine_core_shaderLibrary_attributes_NormalAttribute_glsl_js__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(
      /*! ../views/3d/webgl-engine/core/shaderLibrary/attributes/NormalAttribute.glsl.js */
      "wzLF");
      /* harmony import */


      var _views_3d_webgl_engine_core_shaderLibrary_attributes_PositionAttribute_glsl_js__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(
      /*! ../views/3d/webgl-engine/core/shaderLibrary/attributes/PositionAttribute.glsl.js */
      "sJp1");
      /* harmony import */


      var _views_3d_webgl_engine_core_shaderLibrary_attributes_SymbolColor_glsl_js__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(
      /*! ../views/3d/webgl-engine/core/shaderLibrary/attributes/SymbolColor.glsl.js */
      "bLIi");
      /* harmony import */


      var _views_3d_webgl_engine_core_shaderLibrary_default_DefaultMaterialAuxiliaryPasses_glsl_js__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(
      /*! ../views/3d/webgl-engine/core/shaderLibrary/default/DefaultMaterialAuxiliaryPasses.glsl.js */
      "fiGu");
      /* harmony import */


      var _views_3d_webgl_engine_core_shaderLibrary_shading_EvaluateAmbientOcclusion_glsl_js__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(
      /*! ../views/3d/webgl-engine/core/shaderLibrary/shading/EvaluateAmbientOcclusion.glsl.js */
      "cIib");
      /* harmony import */


      var _views_3d_webgl_engine_core_shaderLibrary_shading_EvaluateSceneLighting_glsl_js__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(
      /*! ../views/3d/webgl-engine/core/shaderLibrary/shading/EvaluateSceneLighting.glsl.js */
      "6kvK");
      /* harmony import */


      var _views_3d_webgl_engine_core_shaderLibrary_util_MixExternalColor_glsl_js__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(
      /*! ../views/3d/webgl-engine/core/shaderLibrary/util/MixExternalColor.glsl.js */
      "NiZE");
      /*
      All material copyright ESRI, All Rights Reserved, unless otherwise specified.
      See https://js.arcgis.com/4.18/esri/copyright.txt for details.
      */


      function L(L) {
        var M = new _views_3d_webgl_engine_core_shaderModules_ShaderBuilder_js__WEBPACK_IMPORTED_MODULE_2__["ShaderBuilder"](),
            j = M.vertex.code,
            O = M.fragment.code;
        return M.vertex.uniforms.add("proj", "mat4").add("view", "mat4").add("camPos", "vec3").add("localOrigin", "vec3"), M.include(_views_3d_webgl_engine_core_shaderLibrary_attributes_PositionAttribute_glsl_js__WEBPACK_IMPORTED_MODULE_16__["PositionAttribute"]), M.varyings.add("vpos", "vec3"), M.include(_views_3d_webgl_engine_core_shaderLibrary_shading_VisualVariables_glsl_js__WEBPACK_IMPORTED_MODULE_4__["VisualVariables"], L), M.include(_views_3d_webgl_engine_core_shaderLibrary_attributes_InstancedDoublePrecision_glsl_js__WEBPACK_IMPORTED_MODULE_11__["InstancedDoublePrecision"], L), M.include(_views_3d_webgl_engine_core_shaderLibrary_attributes_VerticalOffset_glsl_js__WEBPACK_IMPORTED_MODULE_6__["VerticalOffset"], L), 0 !== L.output && 7 !== L.output || (M.include(_views_3d_webgl_engine_core_shaderLibrary_attributes_NormalAttribute_glsl_js__WEBPACK_IMPORTED_MODULE_15__["NormalAttribute"], L), M.include(_views_3d_webgl_engine_core_shaderLibrary_Transform_glsl_js__WEBPACK_IMPORTED_MODULE_1__["Transform"], {
          linearDepth: !1
        }), L.offsetBackfaces && M.include(_views_3d_webgl_engine_core_shaderLibrary_Offset_glsl_js__WEBPACK_IMPORTED_MODULE_14__["Offset"]), L.instancedColor && M.attributes.add("instanceColor", "vec4"), M.varyings.add("vNormalWorld", "vec3"), M.varyings.add("localvpos", "vec3"), M.include(_views_3d_webgl_engine_core_shaderLibrary_attributes_TextureCoordinateAttribute_glsl_js__WEBPACK_IMPORTED_MODULE_12__["TextureCoordinateAttribute"], L), M.include(_views_3d_webgl_engine_core_shaderLibrary_ForwardLinearDepth_glsl_js__WEBPACK_IMPORTED_MODULE_9__["ForwardLinearDepth"], L), M.include(_views_3d_webgl_engine_core_shaderLibrary_attributes_SymbolColor_glsl_js__WEBPACK_IMPORTED_MODULE_17__["SymbolColor"], L), M.include(_views_3d_webgl_engine_core_shaderLibrary_attributes_VertexColor_glsl_js__WEBPACK_IMPORTED_MODULE_7__["VertexColor"], L), M.vertex.uniforms.add("externalColor", "vec4"), M.varyings.add("vcolorExt", "vec4"), j.add(_views_3d_webgl_engine_core_shaderModules_interfaces_js__WEBPACK_IMPORTED_MODULE_0__["glsl"](_templateObject142 || (_templateObject142 = _taggedTemplateLiteral(["\n        void main(void) {\n          forwardNormalizedVertexColor();\n          vcolorExt = externalColor;\n          ", "\n          vcolorExt *= vvColor();\n          vcolorExt *= getSymbolColor();\n          forwardColorMixMode();\n\n          if (vcolorExt.a < ", ") {\n            gl_Position = vec4(1e38, 1e38, 1e38, 1.0);\n          }\n          else {\n            vpos = calculateVPos();\n            localvpos = vpos - view[3].xyz;\n            vpos = subtractOrigin(vpos);\n            vNormalWorld = dpNormal(vvLocalNormal(normalModel()));\n            vpos = addVerticalOffset(vpos, localOrigin);\n            gl_Position = transformPosition(proj, view, vpos);\n            ", "\n          }\n          forwardLinearDepth();\n          forwardTextureCoordinates();\n        }\n      "])), L.instancedColor ? "vcolorExt *= instanceColor;" : "", _views_3d_webgl_engine_core_shaderModules_interfaces_js__WEBPACK_IMPORTED_MODULE_0__["glsl"]["float"](_views_3d_webgl_engine_core_shaderLibrary_util_AlphaDiscard_glsl_js__WEBPACK_IMPORTED_MODULE_5__["symbolAlphaCutoff"]), L.offsetBackfaces ? "gl_Position = offsetBackfacingClipPosition(gl_Position, vpos, vNormalWorld, camPos);" : ""))), 7 === L.output && (M.include(_views_3d_webgl_engine_core_shaderLibrary_Slice_glsl_js__WEBPACK_IMPORTED_MODULE_3__["Slice"], L), M.include(_views_3d_webgl_engine_core_shaderLibrary_util_AlphaDiscard_glsl_js__WEBPACK_IMPORTED_MODULE_5__["DiscardOrAdjustAlpha"], L), M.fragment.uniforms.add("camPos", "vec3").add("localOrigin", "vec3").add("opacity", "float").add("layerOpacity", "float"), M.fragment.uniforms.add("view", "mat4"), L.hasColorTexture && M.fragment.uniforms.add("tex", "sampler2D"), M.fragment.include(_views_3d_webgl_engine_core_shaderLibrary_util_MixExternalColor_glsl_js__WEBPACK_IMPORTED_MODULE_21__["MixExternalColor"]), O.add(_views_3d_webgl_engine_core_shaderModules_interfaces_js__WEBPACK_IMPORTED_MODULE_0__["glsl"](_templateObject143 || (_templateObject143 = _taggedTemplateLiteral(["\n      void main() {\n        discardBySlice(vpos);\n        ", "\n        ", "\n\n        gl_FragColor = vec4(opacity_);\n      }\n    "])), L.hasColorTexture ? _views_3d_webgl_engine_core_shaderModules_interfaces_js__WEBPACK_IMPORTED_MODULE_0__["glsl"](_templateObject144 || (_templateObject144 = _taggedTemplateLiteral(["\n        vec4 texColor = texture2D(tex, vuv0);\n        ", "\n        discardOrAdjustAlpha(texColor);"])), L.textureAlphaPremultiplied ? "texColor.rgb /= texColor.a;" : "") : _views_3d_webgl_engine_core_shaderModules_interfaces_js__WEBPACK_IMPORTED_MODULE_0__["glsl"](_templateObject145 || (_templateObject145 = _taggedTemplateLiteral(["vec4 texColor = vec4(1.0);"]))), L.attributeColor ? _views_3d_webgl_engine_core_shaderModules_interfaces_js__WEBPACK_IMPORTED_MODULE_0__["glsl"](_templateObject146 || (_templateObject146 = _taggedTemplateLiteral(["\n        float opacity_ = layerOpacity * mixExternalOpacity(vColor.a * opacity, texColor.a, vcolorExt.a, int(colorMixMode));"]))) : _views_3d_webgl_engine_core_shaderModules_interfaces_js__WEBPACK_IMPORTED_MODULE_0__["glsl"](_templateObject147 || (_templateObject147 = _taggedTemplateLiteral(["\n        float opacity_ = layerOpacity * mixExternalOpacity(opacity, texColor.a, vcolorExt.a, int(colorMixMode));\n        "])))))), 0 === L.output && (M.include(_views_3d_webgl_engine_core_shaderLibrary_Slice_glsl_js__WEBPACK_IMPORTED_MODULE_3__["Slice"], L), M.include(_views_3d_webgl_engine_core_shaderLibrary_shading_EvaluateSceneLighting_glsl_js__WEBPACK_IMPORTED_MODULE_20__["EvaluateSceneLighting"], L), M.include(_views_3d_webgl_engine_core_shaderLibrary_shading_EvaluateAmbientOcclusion_glsl_js__WEBPACK_IMPORTED_MODULE_19__["EvaluateAmbientOcclusion"], L), M.include(_views_3d_webgl_engine_core_shaderLibrary_util_AlphaDiscard_glsl_js__WEBPACK_IMPORTED_MODULE_5__["DiscardOrAdjustAlpha"], L), L.receiveShadows && M.include(_views_3d_webgl_engine_core_shaderLibrary_shading_ReadShadowMap_glsl_js__WEBPACK_IMPORTED_MODULE_8__["ReadShadowMap"], L), M.fragment.uniforms.add("camPos", "vec3").add("localOrigin", "vec3").add("ambient", "vec3").add("diffuse", "vec3").add("opacity", "float").add("layerOpacity", "float"), M.fragment.uniforms.add("view", "mat4"), L.hasColorTexture && M.fragment.uniforms.add("tex", "sampler2D"), M.include(_views_3d_webgl_engine_core_shaderLibrary_shading_PhysicallyBasedRenderingParameters_glsl_js__WEBPACK_IMPORTED_MODULE_13__["PhysicallyBasedRenderingParameters"], L), M.include(_views_3d_webgl_engine_core_shaderLibrary_shading_PhysicallyBasedRendering_glsl_js__WEBPACK_IMPORTED_MODULE_10__["PhysicallyBasedRendering"], L), M.fragment.include(_views_3d_webgl_engine_core_shaderLibrary_util_MixExternalColor_glsl_js__WEBPACK_IMPORTED_MODULE_21__["MixExternalColor"]), O.add(_views_3d_webgl_engine_core_shaderModules_interfaces_js__WEBPACK_IMPORTED_MODULE_0__["glsl"](_templateObject148 || (_templateObject148 = _taggedTemplateLiteral(["\n      void main() {\n        discardBySlice(vpos);\n        ", "\n        vec3 viewDirection = normalize(vpos - camPos);\n        ", "\n        float ssao = evaluateAmbientOcclusionInverse();\n        ssao *= getBakedOcclusion();\n\n        float additionalAmbientScale = _oldHeuristicLighting(vpos + localOrigin);\n        vec3 additionalLight = ssao * lightingMainIntensity * additionalAmbientScale * ambientBoostFactor * lightingGlobalFactor;\n        ", "\n        vec3 matColor = max(ambient, diffuse);\n        ", "\n        ", "\n        ", "\n        ", "\n        gl_FragColor = highlightSlice(vec4(shadedColor, opacity_), vpos);\n        ", "\n      }\n    "])), L.hasColorTexture ? _views_3d_webgl_engine_core_shaderModules_interfaces_js__WEBPACK_IMPORTED_MODULE_0__["glsl"](_templateObject149 || (_templateObject149 = _taggedTemplateLiteral(["\n        vec4 texColor = texture2D(tex, vuv0);\n        ", "\n        discardOrAdjustAlpha(texColor);"])), L.textureAlphaPremultiplied ? "texColor.rgb /= texColor.a;" : "") : _views_3d_webgl_engine_core_shaderModules_interfaces_js__WEBPACK_IMPORTED_MODULE_0__["glsl"](_templateObject150 || (_templateObject150 = _taggedTemplateLiteral(["vec4 texColor = vec4(1.0);"]))), 1 === L.pbrMode ? "applyPBRFactors();" : "", L.receiveShadows ? "float shadow = readShadowMap(vpos, linearDepth);" : 1 === L.viewingMode ? "float shadow = lightingGlobalFactor * (1.0 - additionalAmbientScale);" : "float shadow = 0.0;", L.attributeColor ? _views_3d_webgl_engine_core_shaderModules_interfaces_js__WEBPACK_IMPORTED_MODULE_0__["glsl"](_templateObject151 || (_templateObject151 = _taggedTemplateLiteral(["\n        vec3 albedo_ = mixExternalColor(vColor.rgb * matColor, texColor.rgb, vcolorExt.rgb, int(colorMixMode));\n        float opacity_ = layerOpacity * mixExternalOpacity(vColor.a * opacity, texColor.a, vcolorExt.a, int(colorMixMode));"]))) : _views_3d_webgl_engine_core_shaderModules_interfaces_js__WEBPACK_IMPORTED_MODULE_0__["glsl"](_templateObject152 || (_templateObject152 = _taggedTemplateLiteral(["\n        vec3 albedo_ = mixExternalColor(matColor, texColor.rgb, vcolorExt.rgb, int(colorMixMode));\n        float opacity_ = layerOpacity * mixExternalOpacity(opacity, texColor.a, vcolorExt.a, int(colorMixMode));\n        "]))), _views_3d_webgl_engine_core_shaderModules_interfaces_js__WEBPACK_IMPORTED_MODULE_0__["glsl"](_templateObject153 || (_templateObject153 = _taggedTemplateLiteral(["\n        vec3 shadedNormal = normalize(vNormalWorld);\n        albedo_ *= 1.2;\n        vec3 viewForward = - vec3(view[0][2], view[1][2], view[2][2]);\n        float alignmentLightView = clamp(dot(-viewForward, lightingMainDirection), 0.0, 1.0);\n        float transmittance = 1.0 - clamp(dot(-viewForward, shadedNormal), 0.0, 1.0);\n        float treeRadialFalloff = vColor.r;\n        float backLightFactor = 0.5 * treeRadialFalloff * alignmentLightView * transmittance * (1.0 - shadow);\n        additionalLight += backLightFactor * lightingMainIntensity;"]))), 1 === L.pbrMode || 2 === L.pbrMode ? 1 === L.viewingMode ? _views_3d_webgl_engine_core_shaderModules_interfaces_js__WEBPACK_IMPORTED_MODULE_0__["glsl"](_templateObject154 || (_templateObject154 = _taggedTemplateLiteral(["vec3 normalGround = normalize(vpos + localOrigin);"]))) : _views_3d_webgl_engine_core_shaderModules_interfaces_js__WEBPACK_IMPORTED_MODULE_0__["glsl"](_templateObject155 || (_templateObject155 = _taggedTemplateLiteral(["vec3 normalGround = vec3(0.0, 0.0, 1.0);"]))) : _views_3d_webgl_engine_core_shaderModules_interfaces_js__WEBPACK_IMPORTED_MODULE_0__["glsl"](_templateObject156 || (_templateObject156 = _taggedTemplateLiteral([""]))), 1 === L.pbrMode || 2 === L.pbrMode ? _views_3d_webgl_engine_core_shaderModules_interfaces_js__WEBPACK_IMPORTED_MODULE_0__["glsl"](_templateObject157 || (_templateObject157 = _taggedTemplateLiteral(["\n            float additionalAmbientIrradiance = additionalAmbientIrradianceFactor * lightingMainIntensity[2];\n            vec3 shadedColor = evaluateSceneLightingPBR(shadedNormal, albedo_, shadow, 1.0 - ssao, additionalLight, viewDirection, normalGround, mrr, emission, additionalAmbientIrradiance);"]))) : "vec3 shadedColor = evaluateSceneLighting(shadedNormal, albedo_, shadow, 1.0 - ssao, additionalLight);", L.OITEnabled ? "gl_FragColor = premultiplyAlpha(gl_FragColor);" : ""))), M.include(_views_3d_webgl_engine_core_shaderLibrary_default_DefaultMaterialAuxiliaryPasses_glsl_js__WEBPACK_IMPORTED_MODULE_18__["DefaultMaterialAuxiliaryPasses"], L), M;
      }

      var M = Object.freeze({
        __proto__: null,
        build: L
      });
      /***/
    },

    /***/
    "thYK":
    /*!*****************************************************************************!*\
      !*** ./node_modules/@arcgis/core/views/3d/webgl-engine/lib/BoundingInfo.js ***!
      \*****************************************************************************/

    /*! exports provided: default */

    /***/
    function thYK(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony import */


      var _core_PooledArray_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ../../../../core/PooledArray.js */
      "ikTR");
      /* harmony import */


      var _chunks_vec3f64_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ../../../../chunks/vec3f64.js */
      "Cy1f");
      /* harmony import */


      var _chunks_vec3_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ../../../../chunks/vec3.js */
      "5DEt");
      /* harmony import */


      var _Util_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./Util.js */
      "EVMh");
      /*
      All material copyright ESRI, All Rights Reserved, unless otherwise specified.
      See https://js.arcgis.com/4.18/esri/copyright.txt for details.
      */


      var b = /*#__PURE__*/function () {
        function b(i, h, a, o) {
          _classCallCheck(this, b);

          this.primitiveIndices = i, this._numIndexPerPrimitive = h, this.indices = a, this._position = o, this.center = Object(_chunks_vec3f64_js__WEBPACK_IMPORTED_MODULE_1__["c"])(), Object(_Util_js__WEBPACK_IMPORTED_MODULE_3__["assert"])(i.length >= 1), Object(_Util_js__WEBPACK_IMPORTED_MODULE_3__["assert"])(a.length % this._numIndexPerPrimitive == 0), Object(_Util_js__WEBPACK_IMPORTED_MODULE_3__["assert"])(a.length >= i.length * this._numIndexPerPrimitive), Object(_Util_js__WEBPACK_IMPORTED_MODULE_3__["assert"])(3 === this._position.size || 4 === this._position.size);
          var _this$_position = this._position,
              c = _this$_position.data,
              d = _this$_position.offsetIdx,
              m = _this$_position.strideIdx;
          var M = 0;
          var l = i.length;
          var u = d + m * a[this._numIndexPerPrimitive * i[M]];

          for (b.tmpIndices.clear(), b.tmpIndices.push(u), this.bbMin = Object(_chunks_vec3f64_js__WEBPACK_IMPORTED_MODULE_1__["f"])(c[u], c[u + 1], c[u + 2]), this.bbMax = Object(_chunks_vec3f64_js__WEBPACK_IMPORTED_MODULE_1__["b"])(this.bbMin); M < l; ++M) {
            var _t61 = this._numIndexPerPrimitive * i[M];

            for (var _i22 = 0; _i22 < this._numIndexPerPrimitive; ++_i22) {
              u = d + m * a[_t61 + _i22], b.tmpIndices.push(u);
              var s = c[u];
              this.bbMin[0] = Math.min(s, this.bbMin[0]), this.bbMax[0] = Math.max(s, this.bbMax[0]), s = c[u + 1], this.bbMin[1] = Math.min(s, this.bbMin[1]), this.bbMax[1] = Math.max(s, this.bbMax[1]), s = c[u + 2], this.bbMin[2] = Math.min(s, this.bbMin[2]), this.bbMax[2] = Math.max(s, this.bbMax[2]);
            }
          }

          Object(_chunks_vec3_js__WEBPACK_IMPORTED_MODULE_2__["e"])(this.center, this.bbMin, this.bbMax, .5), this.bsRadius = .5 * Math.max(Math.max(this.bbMax[0] - this.bbMin[0], this.bbMax[1] - this.bbMin[1]), this.bbMax[2] - this.bbMin[2]);
          var x = this.bsRadius * this.bsRadius;

          for (M = 0; M < b.tmpIndices.length; ++M) {
            u = b.tmpIndices.data[M];

            var _i23 = c[u] - this.center[0],
                _t62 = c[u + 1] - this.center[1],
                _s22 = c[u + 2] - this.center[2],
                e = _i23 * _i23 + _t62 * _t62 + _s22 * _s22;

            if (e <= x) continue;

            var _n20 = Math.sqrt(e),
                _h5 = .5 * (_n20 - this.bsRadius);

            this.bsRadius = this.bsRadius + _h5, x = this.bsRadius * this.bsRadius;

            var _r38 = _h5 / _n20;

            this.center[0] += _i23 * _r38, this.center[1] += _t62 * _r38, this.center[2] += _s22 * _r38;
          }

          b.tmpIndices.clear();
        }

        _createClass(b, [{
          key: "getCenter",
          value: function getCenter() {
            return this.center;
          }
        }, {
          key: "getBSRadius",
          value: function getBSRadius() {
            return this.bsRadius;
          }
        }, {
          key: "getBBMin",
          value: function getBBMin() {
            return this.bbMin;
          }
        }, {
          key: "getBBMax",
          value: function getBBMax() {
            return this.bbMax;
          }
        }, {
          key: "getPrimitiveIndices",
          value: function getPrimitiveIndices() {
            return this.primitiveIndices;
          }
        }, {
          key: "getIndices",
          value: function getIndices() {
            return this.indices;
          }
        }, {
          key: "getPosition",
          value: function getPosition() {
            return this._position;
          }
        }, {
          key: "getChildren",
          value: function getChildren() {
            if (this._children) return this._children;

            if (Object(_chunks_vec3_js__WEBPACK_IMPORTED_MODULE_2__["h"])(this.bbMin, this.bbMax) > 1) {
              var _i24 = Object(_chunks_vec3_js__WEBPACK_IMPORTED_MODULE_2__["e"])(Object(_chunks_vec3f64_js__WEBPACK_IMPORTED_MODULE_1__["c"])(), this.bbMin, this.bbMax, .5),
                  s = this.primitiveIndices.length,
                  e = new Uint8Array(s),
                  h = new Array(8);

              for (var _i25 = 0; _i25 < 8; ++_i25) {
                h[_i25] = 0;
              }

              var _this$_position2 = this._position,
                  _r39 = _this$_position2.data,
                  _a9 = _this$_position2.offsetIdx,
                  o = _this$_position2.strideIdx;

              for (var _t63 = 0; _t63 < s; ++_t63) {
                var _s23 = 0;

                var _n21 = this._numIndexPerPrimitive * this.primitiveIndices[_t63];

                var _b2 = _a9 + o * this.indices[_n21],
                    _c13 = _r39[_b2],
                    _d9 = _r39[_b2 + 1],
                    _m2 = _r39[_b2 + 2];

                for (var _i26 = 1; _i26 < this._numIndexPerPrimitive; ++_i26) {
                  _b2 = _a9 + o * this.indices[_n21 + _i26];
                  var _t64 = _r39[_b2],
                      _s24 = _r39[_b2 + 1],
                      _e73 = _r39[_b2 + 2];
                  _t64 < _c13 && (_c13 = _t64), _s24 < _d9 && (_d9 = _s24), _e73 < _m2 && (_m2 = _e73);
                }

                _c13 < _i24[0] && (_s23 |= 1), _d9 < _i24[1] && (_s23 |= 2), _m2 < _i24[2] && (_s23 |= 4), e[_t63] = _s23, ++h[_s23];
              }

              var _c12 = 0;

              for (var _i27 = 0; _i27 < 8; ++_i27) {
                h[_i27] > 0 && ++_c12;
              }

              if (_c12 < 2) return;

              var _d8 = new Array(8);

              for (var _i28 = 0; _i28 < 8; ++_i28) {
                _d8[_i28] = h[_i28] > 0 ? new Uint32Array(h[_i28]) : void 0;
              }

              for (var _i29 = 0; _i29 < 8; ++_i29) {
                h[_i29] = 0;
              }

              for (var _i30 = 0; _i30 < s; ++_i30) {
                var _t65 = e[_i30];
                _d8[_t65][h[_t65]++] = this.primitiveIndices[_i30];
              }

              this._children = new Array(8);

              for (var _i31 = 0; _i31 < 8; ++_i31) {
                void 0 !== _d8[_i31] && (this._children[_i31] = new b(_d8[_i31], this._numIndexPerPrimitive, this.indices, this._position));
              }
            }

            return this._children;
          }
        }]);

        return b;
      }();

      !function (t) {
        t.tmpIndices = new _core_PooledArray_js__WEBPACK_IMPORTED_MODULE_0__["default"]({
          deallocator: null
        });
      }(b || (b = {}));
      var a = b;
      /* harmony default export */

      __webpack_exports__["default"] = a;
      /***/
    },

    /***/
    "tiP8":
    /*!**************************************************************************************!*\
      !*** ./node_modules/@arcgis/core/views/3d/webgl-engine/materials/renderers/utils.js ***!
      \**************************************************************************************/

    /*! exports provided: acquireMaterials, addObject3DStateID, calculateTransformRelToOrigin, encodeDoubleVec3, isInstanceHidden, releaseMaterials, removeObject3DStateID */

    /***/
    function tiP8(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "acquireMaterials", function () {
        return m;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "addObject3DStateID", function () {
        return u;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "calculateTransformRelToOrigin", function () {
        return b;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "encodeDoubleVec3", function () {
        return q;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "isInstanceHidden", function () {
        return f;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "releaseMaterials", function () {
        return p;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "removeObject3DStateID", function () {
        return l;
      });
      /* harmony import */


      var _core_maybe_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ../../../../../core/maybe.js */
      "srIe");
      /* harmony import */


      var _chunks_mat4_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ../../../../../chunks/mat4.js */
      "15Hh");
      /* harmony import */


      var _chunks_mat4f64_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ../../../../../chunks/mat4f64.js */
      "r+FG");
      /* harmony import */


      var _lib_Util_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ../../lib/Util.js */
      "EVMh");
      /* harmony import */


      var _lib_doublePrecisionUtils_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ../../lib/doublePrecisionUtils.js */
      "mmTy");
      /*
      All material copyright ESRI, All Rights Reserved, unless otherwise specified.
      See https://js.arcgis.com/4.18/esri/copyright.txt for details.
      */


      function u(t, r) {
        return Object(_core_maybe_js__WEBPACK_IMPORTED_MODULE_0__["isNone"])(t) && (t = []), t.push(r), t;
      }

      function l(t, r) {
        if (Object(_core_maybe_js__WEBPACK_IMPORTED_MODULE_0__["isNone"])(t)) return t;
        var s = t.filter(function (e) {
          return e !== r;
        });
        return 0 === s.length ? null : s;
      }

      function f(e) {
        return !!Object(_core_maybe_js__WEBPACK_IMPORTED_MODULE_0__["isSome"])(e) && !e.visible;
      }

      function m(e, t) {
        var r = new Map();
        return r.set(0, t.acquire(e, 0)), r.set(1, t.acquire(e, 7)), r.set(4, t.acquire(e, 3)), r.set(3, t.acquire(e, 2)), r.set(2, t.acquire(e, 1)), r.set(5, t.acquire(e, 4)), r;
      }

      function p(e, t) {
        t.release(e, 0), t.release(e, 7), t.release(e, 3), t.release(e, 2), t.release(e, 1), t.release(e, 4);
      }

      function b(e, o, c) {
        var u = e.origin.vec3;
        Object(_lib_Util_js__WEBPACK_IMPORTED_MODULE_3__["setMatrixTranslation3"])(h, -u[0], -u[1], -u[2]), Object(_core_maybe_js__WEBPACK_IMPORTED_MODULE_0__["isSome"])(e.transformation) ? Object(_chunks_mat4_js__WEBPACK_IMPORTED_MODULE_1__["m"])(o, h, e.transformation) : Object(_chunks_mat4_js__WEBPACK_IMPORTED_MODULE_1__["c"])(o, h), c && (Object(_chunks_mat4_js__WEBPACK_IMPORTED_MODULE_1__["a"])(c, o), Object(_chunks_mat4_js__WEBPACK_IMPORTED_MODULE_1__["b"])(c, c));
      }

      function q(e, t, r, s, n) {
        g[0] = e.get(t, 0), g[1] = e.get(t, 1), g[2] = e.get(t, 2), Object(_lib_doublePrecisionUtils_js__WEBPACK_IMPORTED_MODULE_4__["encodeDoubleArray"])(g, j, 3), r.set(n, 0, j[0]), s.set(n, 0, j[1]), r.set(n, 1, j[2]), s.set(n, 1, j[3]), r.set(n, 2, j[4]), s.set(n, 2, j[5]);
      }

      var g = new Float64Array(3),
          j = new Float32Array(6),
          h = Object(_chunks_mat4f64_js__WEBPACK_IMPORTED_MODULE_2__["a"])();
      /***/
    },

    /***/
    "vEBI":
    /*!**************************************************************************************************************!*\
      !*** ./node_modules/@arcgis/core/views/3d/webgl-engine/core/shaderLibrary/attributes/VertexPosition.glsl.js ***!
      \**************************************************************************************************************/

    /*! exports provided: VertexPosition */

    /***/
    function vEBI(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "VertexPosition", function () {
        return t;
      });
      /* harmony import */


      var _chunks_vec3f64_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ../../../../../../chunks/vec3f64.js */
      "Cy1f");
      /* harmony import */


      var _chunks_mat3f64_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ../../../../../../chunks/mat3f64.js */
      "2uVf");
      /* harmony import */


      var _chunks_mat4f64_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ../../../../../../chunks/mat4f64.js */
      "r+FG");
      /* harmony import */


      var _shaderModules_interfaces_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ../../shaderModules/interfaces.js */
      "OIYib");
      /* harmony import */


      var _util_DoublePrecision_glsl_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ../util/DoublePrecision.glsl.js */
      "aiF/");
      /* harmony import */


      var _PositionAttribute_glsl_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ./PositionAttribute.glsl.js */
      "sJp1");
      /*
      All material copyright ESRI, All Rights Reserved, unless otherwise specified.
      See https://js.arcgis.com/4.18/esri/copyright.txt for details.
      */


      function t(o, r) {
        o.include(_PositionAttribute_glsl_js__WEBPACK_IMPORTED_MODULE_5__["PositionAttribute"]), o.vertex.include(_util_DoublePrecision_glsl_js__WEBPACK_IMPORTED_MODULE_4__["DoublePrecision"], r), o.varyings.add("vPositionWorldCameraRelative", "vec3"), o.varyings.add("vPosition_view", "vec3"), o.vertex.uniforms.add("uTransform_WorldFromModel_RS", "mat3"), o.vertex.uniforms.add("uTransform_WorldFromModel_TH", "vec3"), o.vertex.uniforms.add("uTransform_WorldFromModel_TL", "vec3"), o.vertex.uniforms.add("uTransform_WorldFromView_TH", "vec3"), o.vertex.uniforms.add("uTransform_WorldFromView_TL", "vec3"), o.vertex.uniforms.add("uTransform_ViewFromCameraRelative_RS", "mat3"), o.vertex.uniforms.add("uTransform_ProjFromView", "mat4"), o.vertex.code.add(_shaderModules_interfaces_js__WEBPACK_IMPORTED_MODULE_3__["glsl"](_templateObject158 || (_templateObject158 = _taggedTemplateLiteral(["\n    // compute position in world space orientation, but relative to the camera position\n    vec3 positionWorldCameraRelative() {\n      vec3 rotatedModelPosition = uTransform_WorldFromModel_RS * positionModel();\n\n      vec3 transform_CameraRelativeFromModel = dpAdd(\n        uTransform_WorldFromModel_TL,\n        uTransform_WorldFromModel_TH,\n        -uTransform_WorldFromView_TL,\n        -uTransform_WorldFromView_TH\n      );\n\n      return transform_CameraRelativeFromModel + rotatedModelPosition;\n    }\n\n    // position in view space, that is relative to the camera position and orientation\n    vec3 position_view() {\n      return uTransform_ViewFromCameraRelative_RS * positionWorldCameraRelative();\n    }\n\n    // compute gl_Position and forward related varyings to fragment shader\n    void forwardPosition() {\n      vPositionWorldCameraRelative = positionWorldCameraRelative();\n      vPosition_view = position_view();\n      gl_Position = uTransform_ProjFromView * vec4(vPosition_view, 1.0);\n    }\n\n    vec3 positionWorld() {\n      return uTransform_WorldFromView_TL + vPositionWorldCameraRelative;\n    }\n  "])))), o.fragment.uniforms.add("uTransform_WorldFromView_TL", "vec3"), o.fragment.code.add(_shaderModules_interfaces_js__WEBPACK_IMPORTED_MODULE_3__["glsl"](_templateObject159 || (_templateObject159 = _taggedTemplateLiteral(["\n    vec3 positionWorld() {\n      return uTransform_WorldFromView_TL + vPositionWorldCameraRelative;\n    }\n  "]))));
      }

      !function (i) {
        i.ModelTransform = /*#__PURE__*/function () {
          function _class6() {
            _classCallCheck(this, _class6);

            this.worldFromModel_RS = Object(_chunks_mat3f64_js__WEBPACK_IMPORTED_MODULE_1__["a"])(), this.worldFromModel_TH = Object(_chunks_vec3f64_js__WEBPACK_IMPORTED_MODULE_0__["c"])(), this.worldFromModel_TL = Object(_chunks_vec3f64_js__WEBPACK_IMPORTED_MODULE_0__["c"])();
          }

          return _class6;
        }();

        i.ViewProjectionTransform = /*#__PURE__*/function () {
          function _class7() {
            _classCallCheck(this, _class7);

            this.worldFromView_TH = Object(_chunks_vec3f64_js__WEBPACK_IMPORTED_MODULE_0__["c"])(), this.worldFromView_TL = Object(_chunks_vec3f64_js__WEBPACK_IMPORTED_MODULE_0__["c"])(), this.viewFromCameraRelative_RS = Object(_chunks_mat3f64_js__WEBPACK_IMPORTED_MODULE_1__["a"])(), this.projFromView = Object(_chunks_mat4f64_js__WEBPACK_IMPORTED_MODULE_2__["a"])();
          }

          return _class7;
        }(), i.bindModelTransform = function (o, r) {
          o.setUniformMatrix3fv("uTransform_WorldFromModel_RS", r.worldFromModel_RS), o.setUniform3fv("uTransform_WorldFromModel_TH", r.worldFromModel_TH), o.setUniform3fv("uTransform_WorldFromModel_TL", r.worldFromModel_TL);
        }, i.bindViewProjTransform = function (o, r) {
          o.setUniform3fv("uTransform_WorldFromView_TH", r.worldFromView_TH), o.setUniform3fv("uTransform_WorldFromView_TL", r.worldFromView_TL), o.setUniformMatrix4fv("uTransform_ProjFromView", r.projFromView), o.setUniformMatrix3fv("uTransform_ViewFromCameraRelative_RS", r.viewFromCameraRelative_RS);
        };
      }(t || (t = {}));
      /***/
    },

    /***/
    "vXUg":
    /*!*******************************************************************************************************!*\
      !*** ./node_modules/@arcgis/core/views/3d/webgl-engine/core/shaderLibrary/ForwardLinearDepth.glsl.js ***!
      \*******************************************************************************************************/

    /*! exports provided: ForwardLinearDepth */

    /***/
    function vXUg(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ForwardLinearDepth", function () {
        return a;
      });
      /* harmony import */


      var _shaderModules_interfaces_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ../shaderModules/interfaces.js */
      "OIYib");
      /*
      All material copyright ESRI, All Rights Reserved, unless otherwise specified.
      See https://js.arcgis.com/4.18/esri/copyright.txt for details.
      */


      function a(a, r) {
        0 === r.output && r.receiveShadows ? (a.varyings.add("linearDepth", "float"), a.vertex.code.add(_shaderModules_interfaces_js__WEBPACK_IMPORTED_MODULE_0__["glsl"](_templateObject160 || (_templateObject160 = _taggedTemplateLiteral(["\n      void forwardLinearDepth() { linearDepth = gl_Position.w; }\n    "]))))) : 1 === r.output || 3 === r.output ? (a.varyings.add("linearDepth", "float"), a.vertex.uniforms.add("uCameraNearFar", "vec2"), a.vertex.code.add(_shaderModules_interfaces_js__WEBPACK_IMPORTED_MODULE_0__["glsl"](_templateObject161 || (_templateObject161 = _taggedTemplateLiteral(["\n      void forwardLinearDepth() {\n        linearDepth = (-position_view().z - uCameraNearFar[0]) / (uCameraNearFar[1] - uCameraNearFar[0]);\n      }\n    "]))))) : a.vertex.code.add(_shaderModules_interfaces_js__WEBPACK_IMPORTED_MODULE_0__["glsl"](_templateObject162 || (_templateObject162 = _taggedTemplateLiteral(["\n      void forwardLinearDepth() {}\n    "]))));
      }
      /***/

    },

    /***/
    "viRi":
    /*!************************************************************************************************************!*\
      !*** ./node_modules/@arcgis/core/views/3d/webgl-engine/core/shaderLibrary/shading/VisualVariables.glsl.js ***!
      \************************************************************************************************************/

    /*! exports provided: VisualVariables */

    /***/
    function viRi(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "VisualVariables", function () {
        return v;
      });
      /* harmony import */


      var _shaderModules_interfaces_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ../../shaderModules/interfaces.js */
      "OIYib");
      /*
      All material copyright ESRI, All Rights Reserved, unless otherwise specified.
      See https://js.arcgis.com/4.18/esri/copyright.txt for details.
      */


      function v(v, o) {
        o.vvInstancingEnabled && (o.vvSize || o.vvColor) && v.attributes.add("instanceFeatureAttribute", "vec4"), o.vvSize ? (v.vertex.uniforms.add("vvSizeMinSize", "vec3"), v.vertex.uniforms.add("vvSizeMaxSize", "vec3"), v.vertex.uniforms.add("vvSizeOffset", "vec3"), v.vertex.uniforms.add("vvSizeFactor", "vec3"), v.vertex.uniforms.add("vvSymbolRotationMatrix", "mat3"), v.vertex.uniforms.add("vvSymbolAnchor", "vec3"), v.vertex.code.add(_shaderModules_interfaces_js__WEBPACK_IMPORTED_MODULE_0__["glsl"](_templateObject163 || (_templateObject163 = _taggedTemplateLiteral(["\n      vec3 vvScale(vec4 _featureAttribute) {\n        return clamp(vvSizeOffset + _featureAttribute.x * vvSizeFactor, vvSizeMinSize, vvSizeMaxSize);\n      }\n\n      vec4 vvTransformPosition(vec3 position, vec4 _featureAttribute) {\n        return vec4(vvSymbolRotationMatrix * ( vvScale(_featureAttribute) * (position + vvSymbolAnchor)), 1.0);\n      }\n    "])))), v.vertex.code.add(_shaderModules_interfaces_js__WEBPACK_IMPORTED_MODULE_0__["glsl"](_templateObject164 || (_templateObject164 = _taggedTemplateLiteral(["\n      const float eps = 1.192092896e-07;\n      vec4 vvTransformNormal(vec3 _normal, vec4 _featureAttribute) {\n        vec3 vvScale = clamp(vvSizeOffset + _featureAttribute.x * vvSizeFactor, vvSizeMinSize + eps, vvSizeMaxSize);\n        return vec4(vvSymbolRotationMatrix * _normal / vvScale, 1.0);\n      }\n\n      ", "\n    "])), o.vvInstancingEnabled ? _shaderModules_interfaces_js__WEBPACK_IMPORTED_MODULE_0__["glsl"](_templateObject165 || (_templateObject165 = _taggedTemplateLiteral(["\n      vec4 vvLocalNormal(vec3 _normal) {\n        return vvTransformNormal(_normal, instanceFeatureAttribute);\n      }\n\n      vec4 localPosition() {\n        return vvTransformPosition(position, instanceFeatureAttribute);\n      }"]))) : ""))) : v.vertex.code.add(_shaderModules_interfaces_js__WEBPACK_IMPORTED_MODULE_0__["glsl"](_templateObject166 || (_templateObject166 = _taggedTemplateLiteral(["\n      vec4 localPosition() { return vec4(position, 1.0); }\n\n      vec4 vvLocalNormal(vec3 _normal) { return vec4(_normal, 1.0); }\n    "])))), o.vvColor ? (v.vertex.defines.addInt("VV_COLOR_N", 8), v.vertex.code.add(_shaderModules_interfaces_js__WEBPACK_IMPORTED_MODULE_0__["glsl"](_templateObject167 || (_templateObject167 = _taggedTemplateLiteral(["\n      uniform float vvColorValues[VV_COLOR_N];\n      uniform vec4 vvColorColors[VV_COLOR_N];\n\n      vec4 vvGetColor(vec4 featureAttribute, float values[VV_COLOR_N], vec4 colors[VV_COLOR_N]) {\n        float value = featureAttribute.y;\n        if (value <= values[0]) {\n          return colors[0];\n        }\n\n        for (int i = 1; i < VV_COLOR_N; ++i) {\n          if (values[i] >= value) {\n            float f = (value - values[i-1]) / (values[i] - values[i-1]);\n            return mix(colors[i-1], colors[i], f);\n          }\n        }\n        return colors[VV_COLOR_N - 1];\n      }\n\n      ", "\n    "])), o.vvInstancingEnabled ? _shaderModules_interfaces_js__WEBPACK_IMPORTED_MODULE_0__["glsl"](_templateObject168 || (_templateObject168 = _taggedTemplateLiteral(["\n      vec4 vvColor() {\n        return vvGetColor(instanceFeatureAttribute, vvColorValues, vvColorColors);\n      }"]))) : ""))) : v.vertex.code.add(_shaderModules_interfaces_js__WEBPACK_IMPORTED_MODULE_0__["glsl"](_templateObject169 || (_templateObject169 = _taggedTemplateLiteral(["\n      vec4 vvColor() { return vec4(1.0); }\n    "]))));
      }

      !function (e) {
        function v(e, v) {
          v.vvSizeEnabled && (e.setUniform3fv("vvSizeMinSize", v.vvSizeMinSize), e.setUniform3fv("vvSizeMaxSize", v.vvSizeMaxSize), e.setUniform3fv("vvSizeOffset", v.vvSizeOffset), e.setUniform3fv("vvSizeFactor", v.vvSizeFactor)), v.vvColorEnabled && (e.setUniform1fv("vvColorValues", v.vvColorValues), e.setUniform4fv("vvColorColors", v.vvColorColors));
        }

        e.bindUniforms = v, e.bindUniformsWithOpacity = function (e, o) {
          v(e, o), o.vvOpacityEnabled && (e.setUniform1fv("vvOpacityValues", o.vvOpacityValues), e.setUniform1fv("vvOpacityOpacities", o.vvOpacityOpacities));
        }, e.bindUniformsForSymbols = function (e, o) {
          v(e, o), o.vvSizeEnabled && (e.setUniform3fv("vvSymbolAnchor", o.vvSymbolAnchor), e.setUniformMatrix3fv("vvSymbolRotationMatrix", o.vvSymbolRotationMatrix));
        };
      }(v || (v = {}));
      /***/
    },

    /***/
    "w6Td":
    /*!********************************************************************************************************!*\
      !*** ./node_modules/@arcgis/core/views/3d/webgl-engine/core/shaderTechnique/ReloadableShaderModule.js ***!
      \********************************************************************************************************/

    /*! exports provided: ReloadableShaderModule */

    /***/
    function w6Td(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ReloadableShaderModule", function () {
        return t;
      });
      /*
      All material copyright ESRI, All Rights Reserved, unless otherwise specified.
      See https://js.arcgis.com/4.18/esri/copyright.txt for details.
      */


      var t = /*#__PURE__*/function () {
        function t(_t66, o) {
          _classCallCheck(this, t);

          this._module = _t66, this._loadModule = o;
        }

        _createClass(t, [{
          key: "get",
          value: function get() {
            return this._module;
          }
        }, {
          key: "reload",
          value: function () {
            var _reload = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee32() {
              return regeneratorRuntime.wrap(function _callee32$(_context32) {
                while (1) {
                  switch (_context32.prev = _context32.next) {
                    case 0:
                      _context32.next = 2;
                      return this._loadModule();

                    case 2:
                      this._module = _context32.sent;
                      return _context32.abrupt("return", this._module);

                    case 4:
                    case "end":
                      return _context32.stop();
                  }
                }
              }, _callee32, this);
            }));

            function reload() {
              return _reload.apply(this, arguments);
            }

            return reload;
          }()
        }]);

        return t;
      }();
      /***/

    },

    /***/
    "wMH/":
    /*!***************************************************!*\
      !*** ./node_modules/@arcgis/core/chunks/mat32.js ***!
      \***************************************************/

    /*! exports provided: c, m */

    /***/
    function wMH(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "c", function () {
        return e;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "m", function () {
        return t;
      });
      /*
      All material copyright ESRI, All Rights Reserved, unless otherwise specified.
      See https://js.arcgis.com/4.18/esri/copyright.txt for details.
      */


      function e(e, t, r) {
        var d = e.typedBuffer,
            f = e.typedBufferStride,
            n = t.typedBuffer,
            o = t.typedBufferStride,
            c = r ? r.count : t.count;
        var u = (r && r.dstIndex ? r.dstIndex : 0) * f,
            p = (r && r.srcIndex ? r.srcIndex : 0) * o;

        for (var _e74 = 0; _e74 < c; ++_e74) {
          for (var _e75 = 0; _e75 < 9; ++_e75) {
            d[u + _e75] = n[p + _e75];
          }

          u += f, p += o;
        }
      }

      var t = Object.freeze({
        __proto__: null,
        copy: e
      });
      /***/
    },

    /***/
    "wtEh":
    /*!*******************************************************************************************************!*\
      !*** ./node_modules/@arcgis/core/views/3d/webgl-engine/core/shaderLibrary/output/OutputDepth.glsl.js ***!
      \*******************************************************************************************************/

    /*! exports provided: OutputDepth */

    /***/
    function wtEh(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "OutputDepth", function () {
        return o;
      });
      /* harmony import */


      var _shaderModules_interfaces_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ../../shaderModules/interfaces.js */
      "OIYib");
      /* harmony import */


      var _util_RgbaFloatEncoding_glsl_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ../util/RgbaFloatEncoding.glsl.js */
      "UBvB");
      /*
      All material copyright ESRI, All Rights Reserved, unless otherwise specified.
      See https://js.arcgis.com/4.18/esri/copyright.txt for details.
      */


      function o(o, e) {
        o.fragment.include(_util_RgbaFloatEncoding_glsl_js__WEBPACK_IMPORTED_MODULE_1__["RgbaFloatEncoding"]), 3 === e.output ? (o.extensions.add("GL_OES_standard_derivatives"), o.fragment.code.add(_shaderModules_interfaces_js__WEBPACK_IMPORTED_MODULE_0__["glsl"](_templateObject170 || (_templateObject170 = _taggedTemplateLiteral(["\n      float _calculateFragDepth(const in float depth) {\n        // calc polygon offset\n        const float SLOPE_SCALE = 2.0;\n        const float BIAS = 2.0 * .000015259;    // 1 / (2^16 - 1)\n        float m = max(abs(dFdx(depth)), abs(dFdy(depth)));\n        float result = depth + SLOPE_SCALE * m + BIAS;\n        return clamp(result, .0, .999999);\n      }\n\n      void outputDepth(float _linearDepth) {\n        gl_FragColor = float2rgba(_calculateFragDepth(_linearDepth));\n      }\n    "]))))) : 1 === e.output && o.fragment.code.add(_shaderModules_interfaces_js__WEBPACK_IMPORTED_MODULE_0__["glsl"](_templateObject171 || (_templateObject171 = _taggedTemplateLiteral(["\n      void outputDepth(float _linearDepth) {\n        gl_FragColor = float2rgba(_linearDepth);\n      }\n    "]))));
      }
      /***/

    },

    /***/
    "wzLF":
    /*!***************************************************************************************************************!*\
      !*** ./node_modules/@arcgis/core/views/3d/webgl-engine/core/shaderLibrary/attributes/NormalAttribute.glsl.js ***!
      \***************************************************************************************************************/

    /*! exports provided: NormalAttribute */

    /***/
    function wzLF(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "NormalAttribute", function () {
        return o;
      });
      /* harmony import */


      var _shaderModules_interfaces_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ../../shaderModules/interfaces.js */
      "OIYib");
      /* harmony import */


      var _util_DecodeNormal_glsl_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ../util/DecodeNormal.glsl.js */
      "ZS5L");
      /*
      All material copyright ESRI, All Rights Reserved, unless otherwise specified.
      See https://js.arcgis.com/4.18/esri/copyright.txt for details.
      */


      function o(o, d) {
        0 === d.normalType && (o.attributes.add("normal", "vec3"), o.vertex.code.add(_shaderModules_interfaces_js__WEBPACK_IMPORTED_MODULE_0__["glsl"](_templateObject172 || (_templateObject172 = _taggedTemplateLiteral(["\n      vec3 normalModel() {\n        return normal;\n      }\n    "]))))), 1 === d.normalType && (o.include(_util_DecodeNormal_glsl_js__WEBPACK_IMPORTED_MODULE_1__["DecodeNormal"]), o.attributes.add("normalCompressed", "vec2"), o.vertex.code.add(_shaderModules_interfaces_js__WEBPACK_IMPORTED_MODULE_0__["glsl"](_templateObject173 || (_templateObject173 = _taggedTemplateLiteral(["\n      vec3 normalModel() {\n        return decodeNormal(normalCompressed);\n      }\n    "]))))), 3 === d.normalType && (o.extensions.add("GL_OES_standard_derivatives"), o.fragment.code.add(_shaderModules_interfaces_js__WEBPACK_IMPORTED_MODULE_0__["glsl"](_templateObject174 || (_templateObject174 = _taggedTemplateLiteral(["\n      vec3 screenDerivativeNormal(vec3 positionView) {\n        return normalize(cross(dFdx(positionView), dFdy(positionView)));\n      }\n    "])))));
      }
      /***/

    },

    /***/
    "xRv2":
    /*!****************************************************************************************************!*\
      !*** ./node_modules/@arcgis/core/views/3d/webgl-engine/core/shaderLibrary/shading/PiUtils.glsl.js ***!
      \****************************************************************************************************/

    /*! exports provided: PiUtils */

    /***/
    function xRv2(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "PiUtils", function () {
        return t;
      });
      /* harmony import */


      var _shaderModules_interfaces_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ../../shaderModules/interfaces.js */
      "OIYib");
      /*
      All material copyright ESRI, All Rights Reserved, unless otherwise specified.
      See https://js.arcgis.com/4.18/esri/copyright.txt for details.
      */


      function t(t) {
        t.vertex.code.add(_shaderModules_interfaces_js__WEBPACK_IMPORTED_MODULE_0__["glsl"](_templateObject175 || (_templateObject175 = _taggedTemplateLiteral(["\n    const float PI = 3.141592653589793;\n  "])))), t.fragment.code.add(_shaderModules_interfaces_js__WEBPACK_IMPORTED_MODULE_0__["glsl"](_templateObject176 || (_templateObject176 = _taggedTemplateLiteral(["\n    const float PI = 3.141592653589793;\n    const float LIGHT_NORMALIZATION = 1.0 / PI;\n    const float INV_PI = 0.3183098861837907;\n    const float HALF_PI = 1.570796326794897;\n    "]))));
      }
      /***/

    },

    /***/
    "yZ6n":
    /*!*********************************************************************************!*\
      !*** ./node_modules/@arcgis/core/views/3d/webgl-engine/lib/Object3DStateSet.js ***!
      \*********************************************************************************/

    /*! exports provided: Object3DStateSet, generateObject3DStateId */

    /***/
    function yZ6n(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "Object3DStateSet", function () {
        return o;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "generateObject3DStateId", function () {
        return s;
      });
      /* harmony import */


      var _IdGen_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ./IdGen.js */
      "VHS5");
      /*
      All material copyright ESRI, All Rights Reserved, unless otherwise specified.
      See https://js.arcgis.com/4.18/esri/copyright.txt for details.
      */


      var t = new _IdGen_js__WEBPACK_IMPORTED_MODULE_0__["IdGen"]();

      function s(e) {
        var s = 0 === e ? "highlight" : "occludee";
        return {
          id: t.gen(s),
          channel: e
        };
      }

      var o = /*#__PURE__*/function () {
        function o() {
          _classCallCheck(this, o);

          this.items = [];
        }

        _createClass(o, [{
          key: "addObject",
          value: function addObject(e, t) {
            this.items.push({
              type: 0,
              objectStateId: t,
              object: e
            });
          }
        }, {
          key: "addRenderGeometry",
          value: function addRenderGeometry(e, t, s) {
            this.items.push({
              type: 1,
              objectStateId: t,
              renderGeometry: e,
              owner: s
            });
          }
        }, {
          key: "addExternal",
          value: function addExternal(e, t) {
            this.items.push({
              type: 2,
              objectStateId: t,
              remove: e
            });
          }
        }, {
          key: "remove",
          value: function remove(e) {
            for (var _t67 = this.items.length - 1; _t67 >= 0; --_t67) {
              var _s25 = this.items[_t67];
              _s25.objectStateId === e && (this._removeObjectStateItem(_s25), this.items.splice(_t67, 1));
            }
          }
        }, {
          key: "removeObject",
          value: function removeObject(e) {
            for (var _t68 = this.items.length - 1; _t68 >= 0; --_t68) {
              var _s26 = this.items[_t68];
              0 === _s26.type && _s26.object === e && (this._removeObjectStateItem(_s26), this.items.splice(_t68, 1));
            }
          }
        }, {
          key: "removeRenderGeometry",
          value: function removeRenderGeometry(e) {
            for (var _t69 = this.items.length - 1; _t69 >= 0; --_t69) {
              var _s27 = this.items[_t69];
              1 === _s27.type && _s27.renderGeometry === e && (this._removeObjectStateItem(_s27), this.items.splice(_t69, 1));
            }
          }
        }, {
          key: "removeAll",
          value: function removeAll() {
            var _this18 = this;

            this.items.forEach(function (e) {
              _this18._removeObjectStateItem(e);
            }), this.items = [];
          }
        }, {
          key: "_removeObjectStateItem",
          value: function _removeObjectStateItem(e) {
            switch (e.type) {
              case 0:
                0 === e.objectStateId.channel ? e.object.removeHighlight(e.objectStateId) : 1 === e.objectStateId.channel && e.object.removeOcclude(e.objectStateId);
                break;

              case 1:
                e.owner.removeRenderGeometryObjectState(e.renderGeometry, e.objectStateId);
                break;

              case 2:
                e.remove(e.objectStateId);
            }
          }
        }]);

        return o;
      }();
      /***/

    },

    /***/
    "ypgp":
    /*!*************************************************************************************************!*\
      !*** ./node_modules/@arcgis/core/views/3d/webgl-engine/core/shaderTechnique/ShaderTechnique.js ***!
      \*************************************************************************************************/

    /*! exports provided: ShaderTechnique */

    /***/
    function ypgp(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ShaderTechnique", function () {
        return i;
      });
      /*
      All material copyright ESRI, All Rights Reserved, unless otherwise specified.
      See https://js.arcgis.com/4.18/esri/copyright.txt for details.
      */


      var i = /*#__PURE__*/function () {
        function i(_i32, r) {
          _classCallCheck(this, i);

          r && (this._config = r.snapshot()), this._program = this.initializeProgram(_i32), _i32.commonUniformStore && (this._commonUniformStore = _i32.commonUniformStore, this._commonUniformStore.subscribeProgram(this._program)), this._pipeline = this.initializePipeline(_i32);
        }

        _createClass(i, [{
          key: "dispose",
          value: function dispose() {
            this._program && (this._commonUniformStore && this._commonUniformStore.unsubscribeProgram(this._program), this._program.dispose(), this._program = null);
          }
        }, {
          key: "reload",
          value: function reload(_i33) {
            this._program && (this._commonUniformStore && this._commonUniformStore.unsubscribeProgram(this._program), this._program.dispose()), this._program = this.initializeProgram(_i33), this._commonUniformStore && this._commonUniformStore.subscribeProgram(this._program);
          }
        }, {
          key: "program",
          get: function get() {
            return this._program;
          }
        }, {
          key: "pipeline",
          get: function get() {
            return this._pipeline;
          }
        }, {
          key: "key",
          get: function get() {
            return this._config.key;
          }
        }, {
          key: "configuration",
          get: function get() {
            return this._config;
          }
        }, {
          key: "bindPass",
          value: function bindPass(_i34, r, o) {}
        }, {
          key: "bindMaterial",
          value: function bindMaterial(_i35, r, o) {}
        }, {
          key: "bindDraw",
          value: function bindDraw(_i36, r, o) {}
        }, {
          key: "bindPipelineState",
          value: function bindPipelineState(_i37) {
            _i37.setPipelineState(this.pipeline);
          }
        }, {
          key: "ensureAttributeLocations",
          value: function ensureAttributeLocations(_i38) {
            this.program.assertCompatibleVertexAttributeLocations(_i38);
          }
        }, {
          key: "primitiveType",
          get: function get() {
            return 4;
          }
        }]);

        return i;
      }();
      /***/

    }
  }]);
})();
//# sourceMappingURL=views-3d-layers-graphics-objectResourceUtils-js-es5.js.map