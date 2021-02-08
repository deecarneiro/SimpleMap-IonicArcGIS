(function () {
  function _get(target, property, receiver) { if (typeof Reflect !== "undefined" && Reflect.get) { _get = Reflect.get; } else { _get = function _get(target, property, receiver) { var base = _superPropBase(target, property); if (!base) return; var desc = Object.getOwnPropertyDescriptor(base, property); if (desc.get) { return desc.get.call(receiver); } return desc.value; }; } return _get(target, property, receiver || target); }

  function _superPropBase(object, property) { while (!Object.prototype.hasOwnProperty.call(object, property)) { object = _getPrototypeOf(object); if (object === null) break; } return object; }

  function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

  function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

  function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }

  function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

  function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && Symbol.iterator in Object(iter)) return Array.from(iter); }

  function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }

  function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

  function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

  function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

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

  function _createForOfIteratorHelper(o, allowArrayLike) { var it; if (typeof Symbol === "undefined" || o[Symbol.iterator] == null) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e15) { throw _e15; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = o[Symbol.iterator](); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e16) { didErr = true; err = _e16; }, f: function f() { try { if (!normalCompletion && it["return"] != null) it["return"](); } finally { if (didErr) throw err; } } }; }

  function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

  function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

  function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

  function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

  function _iterableToArrayLimit(arr, i) { if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr))) return; var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

  function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["KMLLayer-js"], {
    /***/
    "0pea":
    /*!********************************************************************************************!*\
      !*** ./node_modules/@arcgis/core/renderers/visualVariables/support/visualVariableUtils.js ***!
      \********************************************************************************************/

    /*! exports provided: getAllSizes, getColor, getOpacity, getRotationAngle, getSize, getSizeForValue, getSizeFromNumberOrVariable, getSizeRangeAtScale, getVisualVariableValues, viewScaleRE */

    /***/
    function pea(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "getAllSizes", function () {
        return z;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "getColor", function () {
        return d;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "getOpacity", function () {
        return v;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "getRotationAngle", function () {
        return b;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "getSize", function () {
        return h;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "getSizeForValue", function () {
        return x;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "getSizeFromNumberOrVariable", function () {
        return m;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "getSizeRangeAtScale", function () {
        return w;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "getVisualVariableValues", function () {
        return y;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "viewScaleRE", function () {
        return p;
      });
      /* harmony import */


      var _core_compilerUtils_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ../../../core/compilerUtils.js */
      "bJda");
      /* harmony import */


      var _core_maybe_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ../../../core/maybe.js */
      "srIe");
      /* harmony import */


      var _core_Logger_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ../../../core/Logger.js */
      "6S2I");
      /* harmony import */


      var _Color_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ../../../Color.js */
      "nvBr");
      /* harmony import */


      var _Graphic_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ../../../Graphic.js */
      "jWBI");
      /* harmony import */


      var _support_lengthUtils_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ../../support/lengthUtils.js */
      "m0D6");
      /* harmony import */


      var _sizeVariableUtils_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ./sizeVariableUtils.js */
      "hvLT");
      /*
      All material copyright ESRI, All Rights Reserved, unless otherwise specified.
      See https://js.arcgis.com/4.18/esri/copyright.txt for details.
      */


      var c = _core_Logger_js__WEBPACK_IMPORTED_MODULE_2__["default"].getLogger("esri.renderers.visualVariables.support.visualVariableUtils"),
          u = new _Graphic_js__WEBPACK_IMPORTED_MODULE_4__["default"](),
          f = Math.PI,
          p = /^\s*(return\s+)?\$view\.scale\s*(;)?\s*$/i;

      function d(e, r, i) {
        var n = "visualVariables" in e && e.visualVariables ? e.visualVariables.filter(function (e) {
          return "color" === e.type;
        })[0] : e;
        if (!n) return;
        if ("esri.renderers.visualVariables.ColorVariable" !== n.declaredClass) return void c.warn("The visualVariable should be an instance of esri.renderers.visualVariables.ColorVariable");
        var s = "number" == typeof r,
            o = s ? null : r,
            l = o && o.attributes;
        var u = s ? r : null;
        var f = n.field,
            _n$cache = n.cache,
            p = _n$cache.ipData,
            d = _n$cache.hasExpression;
        var v = n.cache.compiledFunc;

        if (!f && !d) {
          var _e = n.stops;
          return _e && _e[0] && _e[0].color;
        }

        if ("number" != typeof u) if (d) {
          if (!Object(_core_maybe_js__WEBPACK_IMPORTED_MODULE_1__["isSome"])(i) || !Object(_core_maybe_js__WEBPACK_IMPORTED_MODULE_1__["isSome"])(i.arcade)) return void c.error("Use of arcade expressions requires an arcade context");

          var _e2 = {
            viewingMode: i.viewingMode,
            scale: i.scale,
            spatialReference: i.spatialReference
          },
              _r = i.arcade.arcadeUtils,
              t = _r.getViewInfo(_e2),
              _s = _r.createExecContext(o, t);

          if (!v) {
            var _e3 = _r.createSyntaxTree(n.valueExpression);

            v = _r.createFunction(_e3), n.cache.compiledFunc = v;
          }

          u = _r.executeFunction(v, _s);
        } else l && (u = l[f]);
        var b = n.normalizationField,
            h = l ? parseFloat(l[b]) : void 0;

        if (null != u && (!b || s || !isNaN(h) && 0 !== h)) {
          isNaN(h) || s || (u /= h);

          var _e4 = g(u, p);

          if (_e4) {
            var _r2 = _e4[0],
                _s2 = _e4[1],
                _o = _r2 === _s2 ? n.stops[_r2].color : _Color_js__WEBPACK_IMPORTED_MODULE_3__["default"].blendColors(n.stops[_r2].color, n.stops[_s2].color, _e4[2], Object(_core_maybe_js__WEBPACK_IMPORTED_MODULE_1__["isSome"])(i) ? i.color : void 0);

            return new _Color_js__WEBPACK_IMPORTED_MODULE_3__["default"](_o);
          }
        }
      }

      function v(e, a, i) {
        var t = "visualVariables" in e && e.visualVariables ? e.visualVariables.filter(function (e) {
          return "opacity" === e.type;
        })[0] : e;
        if (!t) return;
        if ("esri.renderers.visualVariables.OpacityVariable" !== t.declaredClass) return void c.warn("The visualVariable should be an instance of esri.renderers.visualVariables.OpacityVariable");
        var n = "number" == typeof a,
            s = n ? null : a,
            o = s && s.attributes;
        var l = n ? a : null;
        var u = t.field,
            _t$cache = t.cache,
            f = _t$cache.ipData,
            p = _t$cache.hasExpression;
        var d = t.cache.compiledFunc;

        if (!u && !p) {
          var _e5 = t.stops;
          return _e5 && _e5[0] && _e5[0].opacity;
        }

        if ("number" != typeof l) if (p) {
          if (Object(_core_maybe_js__WEBPACK_IMPORTED_MODULE_1__["isNone"])(i) || Object(_core_maybe_js__WEBPACK_IMPORTED_MODULE_1__["isNone"])(i.arcade)) return void c.error("Use of arcade expressions requires an arcade context");

          var _e6 = {
            viewingMode: i.viewingMode,
            scale: i.scale,
            spatialReference: i.spatialReference
          },
              _a = i.arcade.arcadeUtils,
              _n = _a.getViewInfo(_e6),
              _o2 = _a.createExecContext(s, _n);

          if (!d) {
            var _e7 = _a.createSyntaxTree(t.valueExpression);

            d = _a.createFunction(_e7), t.cache.compiledFunc = d;
          }

          l = _a.executeFunction(d, _o2);
        } else o && (l = o[u]);
        var v = t.normalizationField,
            b = o ? parseFloat(o[v]) : void 0;

        if (null != l && (!v || n || !isNaN(b) && 0 !== b)) {
          isNaN(b) || n || (l /= b);

          var _e8 = g(l, f);

          if (_e8) {
            var _a2 = _e8[0],
                r = _e8[1];
            if (_a2 === r) return t.stops[_a2].opacity;
            {
              var _i = t.stops[_a2].opacity;
              return _i + (t.stops[r].opacity - _i) * _e8[2];
            }
          }
        }
      }

      function b(e, a, i) {
        var t = "visualVariables" in e && e.visualVariables ? e.visualVariables.filter(function (e) {
          return "rotation" === e.type;
        })[0] : e;
        if (!t) return;
        if ("esri.renderers.visualVariables.RotationVariable" !== t.declaredClass) return void c.warn("The visualVariable should be an instance of esri.renderers.visualVariables.RotationVariable");
        var n = t.axis || "heading",
            s = "heading" === n && "arithmetic" === t.rotationType ? 90 : 0,
            o = "heading" === n && "arithmetic" === t.rotationType ? -1 : 1,
            l = "number" == typeof a ? null : a,
            u = l && l.attributes,
            f = t.field,
            p = t.cache.hasExpression;
        var d = t.cache.compiledFunc,
            v = 0;
        if (!f && !p) return v;

        if (p) {
          if (Object(_core_maybe_js__WEBPACK_IMPORTED_MODULE_1__["isNone"])(i) || Object(_core_maybe_js__WEBPACK_IMPORTED_MODULE_1__["isNone"])(i.arcade)) return void c.error("Use of arcade expressions requires an arcade context");

          var _e9 = {
            viewingMode: i.viewingMode,
            scale: i.scale,
            spatialReference: i.spatialReference
          },
              _a3 = i.arcade.arcadeUtils,
              _n2 = _a3.getViewInfo(_e9),
              _s3 = _a3.createExecContext(l, _n2);

          if (!d) {
            var _e10 = _a3.createSyntaxTree(t.valueExpression);

            d = _a3.createFunction(_e10), t.cache.compiledFunc = d;
          }

          v = _a3.executeFunction(d, _s3);
        } else u && (v = u[f] || 0);

        return v = "number" != typeof v || isNaN(v) ? null : s + o * v, v;
      }

      function h(e, i, t) {
        var n = "visualVariables" in e && e.visualVariables ? e.visualVariables.filter(function (e) {
          return "size" === e.type;
        })[0] : e;
        if (!n) return;
        if ("esri.renderers.visualVariables.SizeVariable" !== n.declaredClass) return void c.warn("The visualVariable should be an instance of esri.renderers.visualVariables.SizeVariable");
        var s = x(function (e, i, t) {
          var n = "number" == typeof i,
              s = n ? null : i,
              o = s && s.attributes;
          var u = n ? i : null;
          var f = e.cache.isScaleDriven;
          var p = e.cache.compiledFunc;

          if (f) {
            var r = Object(_core_maybe_js__WEBPACK_IMPORTED_MODULE_1__["isSome"])(t) ? t.scale : void 0,
                _i2 = Object(_core_maybe_js__WEBPACK_IMPORTED_MODULE_1__["isSome"])(t) ? t.view : void 0;

            u = null == r || "3d" === _i2 ? function (e) {
              var a = null,
                  r = null;
              var i = e.stops;
              return i ? (a = i[0].value, r = i[i.length - 1].value) : (a = e.minDataValue || 0, r = e.maxDataValue || 0), (a + r) / 2;
            }(e) : r;
          } else if (!n) switch (e.inputValueType) {
            case "expression":
              {
                if (Object(_core_maybe_js__WEBPACK_IMPORTED_MODULE_1__["isNone"])(t) || Object(_core_maybe_js__WEBPACK_IMPORTED_MODULE_1__["isNone"])(t.arcade)) return void c.error("Use of arcade expressions requires an arcade context");

                var a = {
                  viewingMode: t.viewingMode,
                  scale: t.scale,
                  spatialReference: t.spatialReference
                },
                    _i3 = t.arcade.arcadeUtils,
                    _n3 = _i3.getViewInfo(a),
                    _o3 = _i3.createExecContext(s, _n3);

                if (!p) {
                  var _a4 = _i3.createSyntaxTree(e.valueExpression);

                  p = _i3.createFunction(_a4), e.cache.compiledFunc = p;
                }

                u = _i3.executeFunction(p, _o3);
                break;
              }

            case "field":
              o && (u = o[e.field]);
              break;

            case "unknown":
              u = null;
          }

          if (!Object(_sizeVariableUtils_js__WEBPACK_IMPORTED_MODULE_6__["isValidNumber"])(u)) return null;
          if (n || !e.normalizationField) return u;
          var d = o ? parseFloat(o[e.normalizationField]) : null;
          return Object(_sizeVariableUtils_js__WEBPACK_IMPORTED_MODULE_6__["isValidNumber"])(d) && 0 !== d ? u / d : null;
        }(n, i, t), n, i, t, n.cache.ipData);
        return null == s || isNaN(s) ? 0 : s;
      }

      function m(e, a, r) {
        return null == e ? null : Object(_sizeVariableUtils_js__WEBPACK_IMPORTED_MODULE_6__["isSizeVariable"])(e) ? h(e, a, r) : Object(_sizeVariableUtils_js__WEBPACK_IMPORTED_MODULE_6__["isValidNumber"])(e) ? e : null;
      }

      function V(e, a, r) {
        return Object(_sizeVariableUtils_js__WEBPACK_IMPORTED_MODULE_6__["isValidNumber"])(r) && e > r ? r : Object(_sizeVariableUtils_js__WEBPACK_IMPORTED_MODULE_6__["isValidNumber"])(a) && e < a ? a : e;
      }

      function x(e, r, i, t, n) {
        switch (r.transformationType) {
          case "additive":
            return function (e, a, r, i) {
              return e + (m(a.minSize, r, i) || a.minDataValue);
            }(e, r, i, t);

          case "constant":
            return function (e, a, r) {
              var i = e.stops;
              var t = i && i.length && i[0].size;
              return null == t && (t = e.minSize), m(t, a, r);
            }(r, i, t);

          case "clamped-linear":
            return function (e, r, i, t) {
              var n = (e - r.minDataValue) / (r.maxDataValue - r.minDataValue),
                  s = m(r.minSize, i, t),
                  o = m(r.maxSize, i, t),
                  l = Object(_core_maybe_js__WEBPACK_IMPORTED_MODULE_1__["isSome"])(t) ? t.shape : void 0;
              if (e <= r.minDataValue) return s;
              if (e >= r.maxDataValue) return o;

              if ("area" === r.scaleBy && l) {
                var _e11 = "circle" === l,
                    a = _e11 ? f * Math.pow(s / 2, 2) : s * s,
                    _r3 = a + n * ((_e11 ? f * Math.pow(o / 2, 2) : o * o) - a);

                return _e11 ? 2 * Math.sqrt(_r3 / f) : Math.sqrt(_r3);
              }

              return s + n * (o - s);
            }(e, r, i, t);

          case "proportional":
            return function (e, r, i, t) {
              var n = Object(_core_maybe_js__WEBPACK_IMPORTED_MODULE_1__["isSome"])(t) ? t.shape : void 0,
                  s = e / r.minDataValue,
                  o = m(r.minSize, i, t),
                  l = m(r.maxSize, i, t);
              var c = null;
              return c = "circle" === n ? 2 * Math.sqrt(s * Math.pow(o / 2, 2)) : "square" === n || "diamond" === n || "image" === n ? Math.sqrt(s * Math.pow(o, 2)) : s * o, V(c, o, l);
            }(e, r, i, t);

          case "stops":
            return function (e, a, r, i, t) {
              var _g = g(e, t),
                  _g2 = _slicedToArray(_g, 3),
                  n = _g2[0],
                  s = _g2[1],
                  o = _g2[2];

              if (n === s) return m(a.stops[n].size, r, i);
              {
                var _e12 = m(a.stops[n].size, r, i);

                return _e12 + (m(a.stops[s].size, r, i) - _e12) * o;
              }
            }(e, r, i, t, n);

          case "real-world-size":
            return function (e, r, i, t) {
              var n = (Object(_core_maybe_js__WEBPACK_IMPORTED_MODULE_1__["isSome"])(t) && t.resolution ? t.resolution : 1) * _support_lengthUtils_js__WEBPACK_IMPORTED_MODULE_5__["meterIn"][r.valueUnit],
                  o = m(r.minSize, i, t),
                  l = m(r.maxSize, i, t),
                  c = r.valueRepresentation;
              var u = null;
              return u = "area" === c ? 2 * Math.sqrt(e / f) / n : "radius" === c || "distance" === c ? 2 * e / n : e / n, V(u, o, l);
            }(e, r, i, t);

          case "identity":
            return e;

          case "unknown":
            return null;
        }
      }

      function w(e, a, r) {
        var i = e.cache.isScaleDriven;
        if (!(i && "3d" === r || a)) return null;
        var t = {
          scale: a,
          view: r
        };
        var n = m(e.minSize, u, t),
            s = m(e.maxSize, u, t);

        if (null != n || null != s) {
          if (n > s) {
            var _e13 = s;
            s = n, n = _e13;
          }

          return {
            minSize: n,
            maxSize: s
          };
        }
      }

      function y(e, a, r) {
        if (!e.visualVariables) return;
        var i = [],
            t = [],
            n = [],
            s = [],
            o = [];

        var _iterator = _createForOfIteratorHelper(e.visualVariables),
            _step;

        try {
          for (_iterator.s(); !(_step = _iterator.n()).done;) {
            var _a5 = _step.value;

            switch (_a5.type) {
              case "color":
                t.push(_a5);
                break;

              case "opacity":
                n.push(_a5);
                break;

              case "rotation":
                o.push(_a5);
                break;

              case "size":
                s.push(_a5);
            }
          }
        } catch (err) {
          _iterator.e(err);
        } finally {
          _iterator.f();
        }

        return t.forEach(function (e) {
          var t = d(e, a, r);
          i.push({
            variable: e,
            value: t
          });
        }), n.forEach(function (e) {
          var t = v(e, a, r);
          i.push({
            variable: e,
            value: t
          });
        }), o.forEach(function (e) {
          var t = b(e, a, r);
          i.push({
            variable: e,
            value: t
          });
        }), s.forEach(function (e) {
          var t = h(e, a, r);
          i.push({
            variable: e,
            value: t
          });
        }), i.filter(function (e) {
          return null != e.value;
        });
      }

      function g(e, a) {
        if (!a) return;
        var r = 0,
            i = a.length - 1;
        return a.some(function (a, t) {
          return e < a ? (i = t, !0) : (r = t, !1);
        }), [r, i, (e - a[r]) / (a[i] - a[r])];
      }

      function z(a, r, i) {
        var t = ["proportional", "proportional", "proportional"];

        var _iterator2 = _createForOfIteratorHelper(a),
            _step2;

        try {
          for (_iterator2.s(); !(_step2 = _iterator2.n()).done;) {
            var n = _step2.value;

            var _a6 = n.useSymbolValue ? "symbol-value" : h(n, r, i);

            switch (n.axis) {
              case "width":
                t[0] = _a6;
                break;

              case "depth":
                t[1] = _a6;
                break;

              case "height":
                t[2] = _a6;
                break;

              case "width-and-depth":
                t[0] = _a6, t[1] = _a6;
                break;

              case "all":
              case void 0:
              case null:
                t[0] = _a6, t[1] = _a6, t[2] = _a6;
                break;

              default:
                Object(_core_compilerUtils_js__WEBPACK_IMPORTED_MODULE_0__["neverReached"])(n.axis);
            }
          }
        } catch (err) {
          _iterator2.e(err);
        } finally {
          _iterator2.f();
        }

        return t;
      }
      /***/

    },

    /***/
    "5eZs":
    /*!*****************************************************************!*\
      !*** ./node_modules/@arcgis/core/layers/support/KMLSublayer.js ***!
      \*****************************************************************/

    /*! exports provided: default */

    /***/
    function eZs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony import */


      var _chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ../../chunks/tslib.es6.js */
      "pO5D");
      /* harmony import */


      var _core_has_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ../../core/has.js */
      "wSAH");
      /* harmony import */


      var _core_maybe_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ../../core/maybe.js */
      "srIe");
      /* harmony import */


      var _core_Logger_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ../../core/Logger.js */
      "6S2I");
      /* harmony import */


      var _core_accessorSupport_ensureType_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ../../core/accessorSupport/ensureType.js */
      "zqDF");
      /* harmony import */


      var _core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ../../core/accessorSupport/decorators/property.js */
      "WbKI");
      /* harmony import */


      var _core_accessorSupport_decorators_cast_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ../../core/accessorSupport/decorators/cast.js */
      "Gj5k");
      /* harmony import */


      var _core_accessorSupport_decorators_reader_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! ../../core/accessorSupport/decorators/reader.js */
      "r88o");
      /* harmony import */


      var _core_accessorSupport_decorators_subclass_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! ../../core/accessorSupport/decorators/subclass.js */
      "04ZG");
      /* harmony import */


      var _core_urlUtils_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! ../../core/urlUtils.js */
      "4EHJ");
      /* harmony import */


      var _core_uuid_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
      /*! ../../core/uuid.js */
      "ju1D");
      /* harmony import */


      var _portal_support_resourceExtension_js__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
      /*! ../../portal/support/resourceExtension.js */
      "9AIY");
      /* harmony import */


      var _core_promiseUtils_js__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
      /*! ../../core/promiseUtils.js */
      "9MzC");
      /* harmony import */


      var _core_JSONSupport_js__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
      /*! ../../core/JSONSupport.js */
      "ag7Y");
      /* harmony import */


      var _geometry_Extent_js__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(
      /*! ../../geometry/Extent.js */
      "OvF4");
      /* harmony import */


      var _geometry_js__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(
      /*! ../../geometry.js */
      "4GrV");
      /* harmony import */


      var _core_Evented_js__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(
      /*! ../../core/Evented.js */
      "zm0L");
      /* harmony import */


      var _core_Collection_js__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(
      /*! ../../core/Collection.js */
      "LE9a");
      /* harmony import */


      var _core_Loadable_js__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(
      /*! ../../core/Loadable.js */
      "bV/r");
      /* harmony import */


      var _core_watchUtils_js__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(
      /*! ../../core/watchUtils.js */
      "N5XI");
      /* harmony import */


      var _kmlUtils_js__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(
      /*! ./kmlUtils.js */
      "BGvB");
      /*
      All material copyright ESRI, All Rights Reserved, unless otherwise specified.
      See https://js.arcgis.com/4.18/esri/copyright.txt for details.
      */


      var _j;

      var S = _j = /*#__PURE__*/function (_core_Evented_js__WEB) {
        _inherits(j, _core_Evented_js__WEB);

        var _super = _createSuper(j);

        function j() {
          var _this;

          _classCallCheck(this, j);

          _this = _super.apply(this, arguments), _this._sublayersHandles = null, _this.description = null, _this.id = null, _this.networkLink = null, _this.title = null, _this.sourceJSON = null, _this.fullExtent = null;
          return _this;
        }

        _createClass(j, [{
          key: "initialize",
          value: function initialize() {
            var _this2 = this;

            Object(_core_watchUtils_js__WEBPACK_IMPORTED_MODULE_19__["whenOnce"])(this, "networkLink").then(function () {
              return Object(_core_watchUtils_js__WEBPACK_IMPORTED_MODULE_19__["whenTrueOnce"])(_this2, "visible");
            }).then(function () {
              return _this2.load();
            });
          }
        }, {
          key: "load",
          value: function load(e) {
            var _this3 = this;

            if (!this.networkLink) return;

            var s = Object(_core_maybe_js__WEBPACK_IMPORTED_MODULE_2__["isSome"])(e) ? e.signal : null,
                o = this._fetchService(this._get("networkLink").href, s).then(function (e) {
              var r = Object(_kmlUtils_js__WEBPACK_IMPORTED_MODULE_20__["computeExtent"])(e.sublayers);
              _this3.fullExtent = _geometry_Extent_js__WEBPACK_IMPORTED_MODULE_14__["default"].fromJSON(r), _this3.sourceJSON = e;
              var s = Object(_core_accessorSupport_ensureType_js__WEBPACK_IMPORTED_MODULE_4__["ensureType"])(_core_Collection_js__WEBPACK_IMPORTED_MODULE_17__["default"].ofType(_j), Object(_kmlUtils_js__WEBPACK_IMPORTED_MODULE_20__["sublayersFromJSON"])(_j, e));
              _this3.sublayers ? _this3.sublayers.addMany(s) : _this3.sublayers = s, _this3.layer.emit("sublayer-update"), _this3.layer && _this3.layer.notifyChange("visibleSublayers");
            });

            return this.addResolvingPromise(o), Object(_core_promiseUtils_js__WEBPACK_IMPORTED_MODULE_12__["resolve"])(this);
          }
        }, {
          key: "sublayers",
          set: function set(e) {
            var _this4 = this;

            var r = this._get("sublayers");

            r && (r.forEach(function (e) {
              e.parent = null, e.layer = null;
            }), this._sublayersHandles.forEach(function (e) {
              return e.remove();
            }), this._sublayersHandles = null), e && (e.forEach(function (e) {
              e.parent = _this4, e.layer = _this4.layer;
            }), this._sublayersHandles = [e.on("after-add", function (_ref) {
              var e = _ref.item;
              e.parent = _this4, e.layer = _this4.layer;
            }), e.on("after-remove", function (_ref2) {
              var e = _ref2.item;
              e.parent = null, e.layer = null;
            })]), this._set("sublayers", e);
          }
        }, {
          key: "castSublayers",
          value: function castSublayers(e) {
            return Object(_core_accessorSupport_ensureType_js__WEBPACK_IMPORTED_MODULE_4__["ensureType"])(_core_Collection_js__WEBPACK_IMPORTED_MODULE_17__["default"].ofType(_j), e);
          }
        }, {
          key: "visible",
          get: function get() {
            return this._get("visible");
          },
          set: function set(e) {
            this._get("visible") !== e && (this._set("visible", e), this.layer && this.layer.notifyChange("visibleSublayers"));
          }
        }, {
          key: "readVisible",
          value: function readVisible(e, r) {
            return !!r.visibility;
          }
        }, {
          key: "layer",
          set: function set(e) {
            this._set("layer", e), this.sublayers && this.sublayers.forEach(function (r) {
              return r.layer = e;
            });
          }
        }, {
          key: "_fetchService",
          value: function _fetchService(e, r) {
            return Object(_kmlUtils_js__WEBPACK_IMPORTED_MODULE_20__["fetchService"])(e, this.layer.outSpatialReference, this.layer.refreshInterval, r).then(function (e) {
              return Object(_kmlUtils_js__WEBPACK_IMPORTED_MODULE_20__["parseKML"])(e.data);
            });
          }
        }]);

        return j;
      }(_core_Evented_js__WEBPACK_IMPORTED_MODULE_16__["default"].EventedMixin(Object(_core_JSONSupport_js__WEBPACK_IMPORTED_MODULE_13__["JSONSupportMixin"])(_core_Loadable_js__WEBPACK_IMPORTED_MODULE_18__["default"])));

      Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_5__["property"])()], S.prototype, "description", void 0), Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_5__["property"])()], S.prototype, "id", void 0), Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_5__["property"])({
        readOnly: !0,
        value: null
      })], S.prototype, "networkLink", void 0), Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_5__["property"])({
        json: {
          write: {
            allowNull: !0
          }
        }
      })], S.prototype, "parent", void 0), Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_5__["property"])({
        value: null,
        json: {
          write: {
            allowNull: !0
          }
        }
      })], S.prototype, "sublayers", null), Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_cast_js__WEBPACK_IMPORTED_MODULE_6__["cast"])("sublayers")], S.prototype, "castSublayers", null), Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_5__["property"])({
        value: null,
        json: {
          read: {
            source: "name"
          }
        }
      })], S.prototype, "title", void 0), Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_5__["property"])({
        value: !0
      })], S.prototype, "visible", null), Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_reader_js__WEBPACK_IMPORTED_MODULE_7__["reader"])("visible", ["visibility"])], S.prototype, "readVisible", null), Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_5__["property"])()], S.prototype, "sourceJSON", void 0), Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_5__["property"])({
        value: null
      })], S.prototype, "layer", null), Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_5__["property"])({
        type: _geometry_Extent_js__WEBPACK_IMPORTED_MODULE_14__["default"]
      })], S.prototype, "fullExtent", void 0), S = _j = Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_subclass_js__WEBPACK_IMPORTED_MODULE_8__["subclass"])("esri.layers.support.KMLSublayer")], S);
      var _ = S;
      /* harmony default export */

      __webpack_exports__["default"] = _;
      /***/
    },

    /***/
    "9fxc":
    /*!******************************************************!*\
      !*** ./node_modules/@arcgis/core/layers/KMLLayer.js ***!
      \******************************************************/

    /*! exports provided: default */

    /***/
    function fxc(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony import */


      var _chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ../chunks/tslib.es6.js */
      "pO5D");
      /* harmony import */


      var _core_has_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ../core/has.js */
      "wSAH");
      /* harmony import */


      var _core_maybe_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ../core/maybe.js */
      "srIe");
      /* harmony import */


      var _core_Logger_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ../core/Logger.js */
      "6S2I");
      /* harmony import */


      var _core_accessorSupport_ensureType_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ../core/accessorSupport/ensureType.js */
      "zqDF");
      /* harmony import */


      var _core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ../core/accessorSupport/decorators/property.js */
      "WbKI");
      /* harmony import */


      var _core_accessorSupport_decorators_reader_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ../core/accessorSupport/decorators/reader.js */
      "r88o");
      /* harmony import */


      var _core_accessorSupport_decorators_subclass_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! ../core/accessorSupport/decorators/subclass.js */
      "04ZG");
      /* harmony import */


      var _core_accessorSupport_decorators_writer_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! ../core/accessorSupport/decorators/writer.js */
      "Cduq");
      /* harmony import */


      var _core_urlUtils_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! ../core/urlUtils.js */
      "4EHJ");
      /* harmony import */


      var _core_uuid_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
      /*! ../core/uuid.js */
      "ju1D");
      /* harmony import */


      var _portal_support_resourceExtension_js__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
      /*! ../portal/support/resourceExtension.js */
      "9AIY");
      /* harmony import */


      var _core_promiseUtils_js__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
      /*! ../core/promiseUtils.js */
      "9MzC");
      /* harmony import */


      var _geometry_SpatialReference_js__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
      /*! ../geometry/SpatialReference.js */
      "WZb1");
      /* harmony import */


      var _geometry_Extent_js__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(
      /*! ../geometry/Extent.js */
      "OvF4");
      /* harmony import */


      var _geometry_js__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(
      /*! ../geometry.js */
      "4GrV");
      /* harmony import */


      var _core_Collection_js__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(
      /*! ../core/Collection.js */
      "LE9a");
      /* harmony import */


      var _core_CollectionFlattener_js__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(
      /*! ../core/CollectionFlattener.js */
      "TRCY");
      /* harmony import */


      var _Layer_js__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(
      /*! ./Layer.js */
      "pqNC");
      /* harmony import */


      var _core_MultiOriginJSONSupport_js__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(
      /*! ../core/MultiOriginJSONSupport.js */
      "5pQd");
      /* harmony import */


      var _support_commonProperties_js__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(
      /*! ./support/commonProperties.js */
      "IvSi");
      /* harmony import */


      var _mixins_OperationalLayer_js__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(
      /*! ./mixins/OperationalLayer.js */
      "uRH/");
      /* harmony import */


      var _mixins_BlendLayer_js__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(
      /*! ./mixins/BlendLayer.js */
      "mXvl");
      /* harmony import */


      var _mixins_PortalLayer_js__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(
      /*! ./mixins/PortalLayer.js */
      "DbUH");
      /* harmony import */


      var _mixins_RefreshableLayer_js__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(
      /*! ./mixins/RefreshableLayer.js */
      "jhcG");
      /* harmony import */


      var _mixins_ScaleRangeLayer_js__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(
      /*! ./mixins/ScaleRangeLayer.js */
      "WmKv");
      /* harmony import */


      var _support_kmlUtils_js__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(
      /*! ./support/kmlUtils.js */
      "BGvB");
      /* harmony import */


      var _support_KMLSublayer_js__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(
      /*! ./support/KMLSublayer.js */
      "5eZs");
      /*
      All material copyright ESRI, All Rights Reserved, unless otherwise specified.
      See https://js.arcgis.com/4.18/esri/copyright.txt for details.
      */


      var E = ["kml", "xml"];

      var w = /*#__PURE__*/function (_Object) {
        _inherits(w, _Object);

        var _super2 = _createSuper(w);

        function w() {
          var _this5;

          _classCallCheck(this, w);

          for (var _len = arguments.length, e = new Array(_len), _key = 0; _key < _len; _key++) {
            e[_key] = arguments[_key];
          }

          _this5 = _super2.call.apply(_super2, [this].concat(e)), _this5._visibleFolders = [], _this5.allSublayers = new _core_CollectionFlattener_js__WEBPACK_IMPORTED_MODULE_17__["default"]({
            root: _assertThisInitialized(_this5),
            rootCollectionNames: ["sublayers"],
            getChildrenFunction: function getChildrenFunction(e) {
              return e.sublayers;
            }
          }), _this5.outSpatialReference = _geometry_SpatialReference_js__WEBPACK_IMPORTED_MODULE_13__["default"].WGS84, _this5.path = null, _this5.legendEnabled = !1, _this5.operationalLayerType = "KML", _this5.sublayers = null, _this5.type = "kml", _this5.url = null;
          return _this5;
        }

        _createClass(w, [{
          key: "initialize",
          value: function initialize() {
            var _this6 = this;

            this.watch("sublayers", function (e, r) {
              r && r.forEach(function (e) {
                e.parent = null, e.layer = null;
              }), e && e.forEach(function (e) {
                e.parent = _this6, e.layer = _this6;
              });
            }, !0), this.on("sublayer-update", function () {
              return _this6.notifyChange("fullExtent");
            });
          }
        }, {
          key: "normalizeCtorArgs",
          value: function normalizeCtorArgs(e, r) {
            return "string" == typeof e ? _objectSpread({
              url: e
            }, r) : e;
          }
        }, {
          key: "readSublayersFromItemOrWebMap",
          value: function readSublayersFromItemOrWebMap(e, r) {
            this._visibleFolders = r.visibleFolders;
          }
        }, {
          key: "readSublayers",
          value: function readSublayers(e, r, t) {
            return Object(_support_kmlUtils_js__WEBPACK_IMPORTED_MODULE_26__["sublayersFromJSON"])(_support_KMLSublayer_js__WEBPACK_IMPORTED_MODULE_27__["default"], r, t, this._visibleFolders);
          }
        }, {
          key: "writeSublayers",
          value: function writeSublayers(e, r) {
            var t = [],
                o = e.toArray();

            for (; o.length;) {
              var _e14 = o[0];
              _e14.networkLink || (_e14.visible && t.push(_e14.id), _e14.sublayers && o.push.apply(o, _toConsumableArray(_e14.sublayers.toArray()))), o.shift();
            }

            r.visibleFolders = t;
          }
        }, {
          key: "title",
          get: function get() {
            var e = this._get("title");

            return e && "defaults" !== this.originOf("title") ? e : this.url ? Object(_core_urlUtils_js__WEBPACK_IMPORTED_MODULE_9__["getFilename"])(this.url, E) || "KML" : e || "";
          },
          set: function set(e) {
            this._set("title", e);
          }
        }, {
          key: "visibleSublayers",
          get: function get() {
            var e = this.sublayers,
                r = [],
                t = function t(e) {
              e.visible && (r.push(e), e.sublayers && e.sublayers.forEach(t));
            };

            return e && e.forEach(t), r;
          }
        }, {
          key: "fullExtent",
          get: function get() {
            return this._recomputeFullExtent();
          }
        }, {
          key: "load",
          value: function load(e) {
            var _this7 = this;

            var t = Object(_core_maybe_js__WEBPACK_IMPORTED_MODULE_2__["isSome"])(e) ? e.signal : null;
            return this.addResolvingPromise(this.loadFromPortal({
              supportedTypes: ["KML"]
            }, e).then(function () {
              return _this7._fetchService(t);
            })), Object(_core_promiseUtils_js__WEBPACK_IMPORTED_MODULE_12__["resolve"])(this);
          }
        }, {
          key: "_fetchService",
          value: function () {
            var _fetchService2 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(e) {
              var _this8 = this;

              var r, t;
              return regeneratorRuntime.wrap(function _callee$(_context) {
                while (1) {
                  switch (_context.prev = _context.next) {
                    case 0:
                      _context.next = 2;
                      return Object(_core_promiseUtils_js__WEBPACK_IMPORTED_MODULE_12__["resolve"])().then(function () {
                        return _this8.resourceInfo ? {
                          ssl: !1,
                          data: _this8.resourceInfo
                        } : Object(_support_kmlUtils_js__WEBPACK_IMPORTED_MODULE_26__["fetchService"])(_this8.url, _this8.outSpatialReference, _this8.refreshInterval, e);
                      });

                    case 2:
                      r = _context.sent;
                      t = Object(_support_kmlUtils_js__WEBPACK_IMPORTED_MODULE_26__["parseKML"])(r.data);
                      t && this.read(t, {
                        origin: "service"
                      });

                    case 5:
                    case "end":
                      return _context.stop();
                  }
                }
              }, _callee, this);
            }));

            function _fetchService(_x) {
              return _fetchService2.apply(this, arguments);
            }

            return _fetchService;
          }()
        }, {
          key: "_recomputeFullExtent",
          value: function _recomputeFullExtent() {
            var e = null;
            this.extent && (e = this.extent.clone());

            var r = function r(t) {
              if (t.sublayers) {
                var _iterator3 = _createForOfIteratorHelper(t.sublayers.items),
                    _step3;

                try {
                  for (_iterator3.s(); !(_step3 = _iterator3.n()).done;) {
                    var o = _step3.value;
                    r(o), o.visible && o.fullExtent && (e ? e.union(o.fullExtent) : e = o.fullExtent.clone());
                  }
                } catch (err) {
                  _iterator3.e(err);
                } finally {
                  _iterator3.f();
                }
              }
            };

            return r(this), e;
          }
        }]);

        return w;
      }(Object(_mixins_BlendLayer_js__WEBPACK_IMPORTED_MODULE_22__["BlendLayer"])(Object(_mixins_RefreshableLayer_js__WEBPACK_IMPORTED_MODULE_24__["RefreshableLayer"])(Object(_mixins_ScaleRangeLayer_js__WEBPACK_IMPORTED_MODULE_25__["ScaleRangeLayer"])(Object(_mixins_OperationalLayer_js__WEBPACK_IMPORTED_MODULE_21__["OperationalLayer"])(Object(_mixins_PortalLayer_js__WEBPACK_IMPORTED_MODULE_23__["PortalLayer"])(Object(_core_MultiOriginJSONSupport_js__WEBPACK_IMPORTED_MODULE_19__["MultiOriginJSONMixin"])(_Layer_js__WEBPACK_IMPORTED_MODULE_18__["default"])))))));

      Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_5__["property"])({
        readOnly: !0
      })], w.prototype, "allSublayers", void 0), Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_5__["property"])({
        type: _geometry_SpatialReference_js__WEBPACK_IMPORTED_MODULE_13__["default"]
      })], w.prototype, "outSpatialReference", void 0), Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_5__["property"])({
        type: String,
        json: {
          origins: {
            "web-scene": {
              read: !0,
              write: !0
            }
          },
          read: !1
        }
      })], w.prototype, "path", void 0), Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_5__["property"])({
        readOnly: !0,
        json: {
          read: !1,
          write: !1
        }
      })], w.prototype, "legendEnabled", void 0), Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_5__["property"])({
        type: ["show", "hide", "hide-children"]
      })], w.prototype, "listMode", void 0), Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_5__["property"])({
        type: ["KML"]
      })], w.prototype, "operationalLayerType", void 0), Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_5__["property"])({
        type: _core_Collection_js__WEBPACK_IMPORTED_MODULE_16__["default"].ofType(_support_KMLSublayer_js__WEBPACK_IMPORTED_MODULE_27__["default"]),
        json: {
          write: {
            ignoreOrigin: !0
          }
        }
      })], w.prototype, "sublayers", void 0), Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_reader_js__WEBPACK_IMPORTED_MODULE_6__["reader"])(["web-map", "portal-item"], "sublayers", ["visibleFolders"])], w.prototype, "readSublayersFromItemOrWebMap", null), Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_reader_js__WEBPACK_IMPORTED_MODULE_6__["reader"])("service", "sublayers", ["sublayers"])], w.prototype, "readSublayers", null), Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_writer_js__WEBPACK_IMPORTED_MODULE_8__["writer"])("sublayers")], w.prototype, "writeSublayers", null), Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_5__["property"])({
        readOnly: !0,
        json: {
          read: !1
        }
      })], w.prototype, "type", void 0), Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_5__["property"])({
        json: {
          origins: {
            "web-map": {
              read: {
                source: "title"
              }
            }
          },
          write: {
            ignoreOrigin: !0
          }
        },
        dependsOn: ["url", "parsedUrl"]
      })], w.prototype, "title", null), Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_5__["property"])(_support_commonProperties_js__WEBPACK_IMPORTED_MODULE_20__["url"])], w.prototype, "url", void 0), Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_5__["property"])({
        readOnly: !0,
        dependsOn: ["sublayers"]
      })], w.prototype, "visibleSublayers", null), Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_5__["property"])({
        type: _geometry_Extent_js__WEBPACK_IMPORTED_MODULE_14__["default"]
      })], w.prototype, "extent", void 0), Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_5__["property"])({
        dependsOn: ["extent"]
      })], w.prototype, "fullExtent", null), w = Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_subclass_js__WEBPACK_IMPORTED_MODULE_7__["subclass"])("esri.layers.KMLLayer")], w);
      var O = w;
      /* harmony default export */

      __webpack_exports__["default"] = O;
      /***/
    },

    /***/
    "DbUH":
    /*!****************************************************************!*\
      !*** ./node_modules/@arcgis/core/layers/mixins/PortalLayer.js ***!
      \****************************************************************/

    /*! exports provided: PortalLayer */

    /***/
    function DbUH(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "PortalLayer", function () {
        return d;
      });
      /* harmony import */


      var _chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ../../chunks/tslib.es6.js */
      "pO5D");
      /* harmony import */


      var _core_has_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ../../core/has.js */
      "wSAH");
      /* harmony import */


      var _core_Logger_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ../../core/Logger.js */
      "6S2I");
      /* harmony import */


      var _core_accessorSupport_ensureType_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ../../core/accessorSupport/ensureType.js */
      "zqDF");
      /* harmony import */


      var _core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ../../core/accessorSupport/decorators/property.js */
      "WbKI");
      /* harmony import */


      var _core_accessorSupport_decorators_reader_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ../../core/accessorSupport/decorators/reader.js */
      "r88o");
      /* harmony import */


      var _core_accessorSupport_decorators_subclass_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ../../core/accessorSupport/decorators/subclass.js */
      "04ZG");
      /* harmony import */


      var _core_accessorSupport_decorators_writer_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! ../../core/accessorSupport/decorators/writer.js */
      "Cduq");
      /* harmony import */


      var _core_Error_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! ../../core/Error.js */
      "zlDU");
      /* harmony import */


      var _core_urlUtils_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! ../../core/urlUtils.js */
      "4EHJ");
      /* harmony import */


      var _core_uuid_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
      /*! ../../core/uuid.js */
      "ju1D");
      /* harmony import */


      var _portal_support_resourceExtension_js__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
      /*! ../../portal/support/resourceExtension.js */
      "9AIY");
      /* harmony import */


      var _core_promiseUtils_js__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
      /*! ../../core/promiseUtils.js */
      "9MzC");
      /* harmony import */


      var _portal_Portal_js__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
      /*! ../../portal/Portal.js */
      "AiS/");
      /* harmony import */


      var _portal_PortalItem_js__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(
      /*! ../../portal/PortalItem.js */
      "p+Gi");
      /*
      All material copyright ESRI, All Rights Reserved, unless otherwise specified.
      See https://js.arcgis.com/4.18/esri/copyright.txt for details.
      */


      var n = _core_Logger_js__WEBPACK_IMPORTED_MODULE_2__["default"].getLogger("esri.layers.mixins.PortalLayer"),
          d = function d(r) {
        var d = /*#__PURE__*/function (_r4) {
          _inherits(d, _r4);

          var _super3 = _createSuper(d);

          function d() {
            var _this9;

            _classCallCheck(this, d);

            _this9 = _super3.apply(this, arguments), _this9.resourceReferences = {
              portalItem: null,
              paths: []
            };
            return _this9;
          }

          _createClass(d, [{
            key: "destroy",
            value: function destroy() {
              var t;
              null == (t = this.portalItem) || t.destroy(), this.portalItem = null;
            }
          }, {
            key: "portalItem",
            set: function set(t) {
              t !== this._get("portalItem") && (this.removeOrigin("portal-item"), this._set("portalItem", t));
            }
          }, {
            key: "readPortalItem",
            value: function readPortalItem(t, r, e) {
              if (r.itemId) return new _portal_PortalItem_js__WEBPACK_IMPORTED_MODULE_14__["default"]({
                id: r.itemId,
                portal: e && e.portal
              });
            }
          }, {
            key: "writePortalItem",
            value: function writePortalItem(t, r) {
              t && t.id && (r.itemId = t.id);
            }
          }, {
            key: "loadFromPortal",
            value: function () {
              var _loadFromPortal = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee2(t, r) {
                var e;
                return regeneratorRuntime.wrap(function _callee2$(_context2) {
                  while (1) {
                    switch (_context2.prev = _context2.next) {
                      case 0:
                        if (!(this.portalItem && this.portalItem.id)) {
                          _context2.next = 14;
                          break;
                        }

                        _context2.prev = 1;
                        _context2.next = 4;
                        return Promise.all(
                        /*! import() | portal-support-layersLoader-js */
                        [__webpack_require__.e("common"), __webpack_require__.e("portal-support-layersLoader-js")]).then(__webpack_require__.bind(null,
                        /*! ../../portal/support/layersLoader.js */
                        "O5Ly"));

                      case 4:
                        e = _context2.sent;
                        Object(_core_promiseUtils_js__WEBPACK_IMPORTED_MODULE_12__["throwIfAborted"])(r);
                        _context2.next = 8;
                        return e.load({
                          instance: this,
                          supportedTypes: t.supportedTypes,
                          validateItem: t.validateItem,
                          supportsData: t.supportsData
                        }, r);

                      case 8:
                        return _context2.abrupt("return", _context2.sent);

                      case 11:
                        _context2.prev = 11;
                        _context2.t0 = _context2["catch"](1);
                        throw n.warn("Failed to load layer (".concat(this.title, ", ").concat(this.id, ") portal item (").concat(this.portalItem.id, ")\n  ").concat(_context2.t0)), _context2.t0;

                      case 14:
                      case "end":
                        return _context2.stop();
                    }
                  }
                }, _callee2, this, [[1, 11]]);
              }));

              function loadFromPortal(_x2, _x3) {
                return _loadFromPortal.apply(this, arguments);
              }

              return loadFromPortal;
            }()
          }, {
            key: "read",
            value: function read(t, r) {
              r && (r.layer = this), _get(_getPrototypeOf(d.prototype), "read", this).call(this, t, r);
            }
          }, {
            key: "write",
            value: function write(t, r) {
              var e = r && r.portal,
                  o = this.portalItem && this.portalItem.id && (this.portalItem.portal || _portal_Portal_js__WEBPACK_IMPORTED_MODULE_13__["default"].getDefault());

              return e && o && !Object(_core_urlUtils_js__WEBPACK_IMPORTED_MODULE_9__["hasSamePortal"])(o.restUrl, e.restUrl) ? (r.messages && r.messages.push(new _core_Error_js__WEBPACK_IMPORTED_MODULE_8__["default"]("layer:cross-portal", "The layer '".concat(this.title, " (").concat(this.id, ")' cannot be persisted because it refers to an item on a different portal than the one being saved to. To save the scene, set the layer.portalItem to null or save the scene to the same portal as the item associated with the layer"), {
                layer: this
              })), null) : _get(_getPrototypeOf(d.prototype), "write", this).call(this, t, _objectSpread(_objectSpread({}, r), {}, {
                layer: this
              }));
            }
          }]);

          return d;
        }(r);

        return Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_4__["property"])({
          type: _portal_PortalItem_js__WEBPACK_IMPORTED_MODULE_14__["default"]
        })], d.prototype, "portalItem", null), Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_reader_js__WEBPACK_IMPORTED_MODULE_5__["reader"])("web-document", "portalItem", ["itemId"])], d.prototype, "readPortalItem", null), Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_writer_js__WEBPACK_IMPORTED_MODULE_7__["writer"])("web-document", "portalItem", {
          itemId: {
            type: String
          }
        })], d.prototype, "writePortalItem", null), Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_4__["property"])()], d.prototype, "resourceReferences", void 0), d = Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_subclass_js__WEBPACK_IMPORTED_MODULE_6__["subclass"])("esri.layers.mixins.PortalLayer")], d), d;
      };
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

        for (var _n4 = 0; _n4 < i; _n4++) {
          a = Math.min(a, t[r + 3 * _n4]), u = Math.min(u, t[r + 3 * _n4 + 1]), e = Math.min(e, t[r + 3 * _n4 + 2]), m = Math.max(m, t[r + 3 * _n4]), o = Math.max(o, t[r + 3 * _n4 + 1]), f = Math.max(f, t[r + 3 * _n4 + 2]);
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
        if (r) for (var _n5 = 0; _n5 < i; _n5++) {
          var _r5 = t[_n5];
          a = Math.min(a, _r5[0]), u = Math.min(u, _r5[1]), e = Math.min(e, _r5[2]), m = Math.max(m, _r5[0]), o = Math.max(o, _r5[1]), f = Math.max(f, _r5[2]);
        } else for (var _n6 = 0; _n6 < i; _n6++) {
          var _r6 = t[_n6];
          a = Math.min(a, _r6[0]), u = Math.min(u, _r6[1]), m = Math.max(m, _r6[0]), o = Math.max(o, _r6[1]);
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
        } else for (var _n7 = 0; _n7 < t.length; _n7++) {
          if (t[_n7] !== r[_n7]) return !1;
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
    "WmKv":
    /*!********************************************************************!*\
      !*** ./node_modules/@arcgis/core/layers/mixins/ScaleRangeLayer.js ***!
      \********************************************************************/

    /*! exports provided: ScaleRangeLayer */

    /***/
    function WmKv(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ScaleRangeLayer", function () {
        return s;
      });
      /* harmony import */


      var _chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ../../chunks/tslib.es6.js */
      "pO5D");
      /* harmony import */


      var _core_has_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ../../core/has.js */
      "wSAH");
      /* harmony import */


      var _core_Logger_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ../../core/Logger.js */
      "6S2I");
      /* harmony import */


      var _core_accessorSupport_ensureType_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ../../core/accessorSupport/ensureType.js */
      "zqDF");
      /* harmony import */


      var _core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ../../core/accessorSupport/decorators/property.js */
      "WbKI");
      /* harmony import */


      var _core_accessorSupport_decorators_subclass_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ../../core/accessorSupport/decorators/subclass.js */
      "04ZG");
      /* harmony import */


      var _core_urlUtils_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ../../core/urlUtils.js */
      "4EHJ");
      /* harmony import */


      var _core_uuid_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! ../../core/uuid.js */
      "ju1D");
      /* harmony import */


      var _portal_support_resourceExtension_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! ../../portal/support/resourceExtension.js */
      "9AIY");
      /*
      All material copyright ESRI, All Rights Reserved, unless otherwise specified.
      See https://js.arcgis.com/4.18/esri/copyright.txt for details.
      */


      var s = function s(_s5) {
        var t = /*#__PURE__*/function (_s4) {
          _inherits(t, _s4);

          var _super4 = _createSuper(t);

          function t() {
            var _this10;

            _classCallCheck(this, t);

            _this10 = _super4.apply(this, arguments), _this10.minScale = 0, _this10.maxScale = 0;
            return _this10;
          }

          _createClass(t, [{
            key: "scaleRangeId",
            get: function get() {
              return "".concat(this.minScale, ",").concat(this.maxScale);
            }
          }]);

          return t;
        }(_s5);

        return Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_4__["property"])({
          type: Number,
          nonNullable: !0,
          json: {
            write: !0
          }
        })], t.prototype, "minScale", void 0), Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_4__["property"])({
          type: Number,
          nonNullable: !0,
          json: {
            write: !0
          }
        })], t.prototype, "maxScale", void 0), Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_4__["property"])({
          readOnly: !0,
          dependsOn: ["minScale", "maxScale"]
        })], t.prototype, "scaleRangeId", null), t = Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_subclass_js__WEBPACK_IMPORTED_MODULE_5__["subclass"])("esri.layers.mixins.ScaleRangeLayer")], t), t;
      };
      /***/

    },

    /***/
    "hvLT":
    /*!******************************************************************************************!*\
      !*** ./node_modules/@arcgis/core/renderers/visualVariables/support/sizeVariableUtils.js ***!
      \******************************************************************************************/

    /*! exports provided: getInputValueType, getTransformationType, isSizeVariable, isValidNumber */

    /***/
    function hvLT(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "getInputValueType", function () {
        return i;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "getTransformationType", function () {
        return l;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "isSizeVariable", function () {
        return n;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "isValidNumber", function () {
        return e;
      });
      /*
      All material copyright ESRI, All Rights Reserved, unless otherwise specified.
      See https://js.arcgis.com/4.18/esri/copyright.txt for details.
      */


      function n(n) {
        return n && "esri.renderers.visualVariables.SizeVariable" === n.declaredClass;
      }

      function e(n) {
        return null != n && !isNaN(n) && isFinite(n);
      }

      function i(n) {
        return n.valueExpression ? "expression" : n.field && "string" == typeof n.field ? "field" : "unknown";
      }

      function l(n, e) {
        var l = e || i(n),
            a = n.valueUnit || "unknown";
        return "unknown" === l ? "constant" : n.stops ? "stops" : null != n.minSize && null != n.maxSize && null != n.minDataValue && null != n.maxDataValue ? "clamped-linear" : "unknown" === a ? null != n.minSize && null != n.minDataValue ? n.minSize && n.minDataValue ? "proportional" : "additive" : "identity" : "real-world-size";
      }
      /***/

    },

    /***/
    "jhcG":
    /*!*********************************************************************!*\
      !*** ./node_modules/@arcgis/core/layers/mixins/RefreshableLayer.js ***!
      \*********************************************************************/

    /*! exports provided: RefreshableLayer */

    /***/
    function jhcG(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "RefreshableLayer", function () {
        return o;
      });
      /* harmony import */


      var _chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ../../chunks/tslib.es6.js */
      "pO5D");
      /* harmony import */


      var _core_has_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ../../core/has.js */
      "wSAH");
      /* harmony import */


      var _core_Logger_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ../../core/Logger.js */
      "6S2I");
      /* harmony import */


      var _core_accessorSupport_ensureType_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ../../core/accessorSupport/ensureType.js */
      "zqDF");
      /* harmony import */


      var _core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ../../core/accessorSupport/decorators/property.js */
      "WbKI");
      /* harmony import */


      var _core_accessorSupport_decorators_subclass_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ../../core/accessorSupport/decorators/subclass.js */
      "04ZG");
      /* harmony import */


      var _core_urlUtils_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ../../core/urlUtils.js */
      "4EHJ");
      /* harmony import */


      var _core_uuid_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! ../../core/uuid.js */
      "ju1D");
      /* harmony import */


      var _portal_support_resourceExtension_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! ../../portal/support/resourceExtension.js */
      "9AIY");
      /*
      All material copyright ESRI, All Rights Reserved, unless otherwise specified.
      See https://js.arcgis.com/4.18/esri/copyright.txt for details.
      */


      var o = function o(_o5) {
        var t = /*#__PURE__*/function (_o4) {
          _inherits(t, _o4);

          var _super5 = _createSuper(t);

          function t() {
            var _this11;

            _classCallCheck(this, t);

            _this11 = _super5.apply(this, arguments), _this11.refreshInterval = 0;
            return _this11;
          }

          _createClass(t, [{
            key: "refresh",
            value: function refresh() {
              this.emit("refresh");
            }
          }]);

          return t;
        }(_o5);

        return Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_4__["property"])({
          type: Number,
          cast: function cast(r) {
            return r >= .1 ? r : r <= 0 ? 0 : .1;
          },
          json: {
            write: !0,
            origins: {
              "web-document": {
                write: !0
              }
            }
          }
        })], t.prototype, "refreshInterval", void 0), t = Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_subclass_js__WEBPACK_IMPORTED_MODULE_5__["subclass"])("esri.layers.mixins.RefreshableLayer")], t), t;
      };
      /***/

    },

    /***/
    "m0D6":
    /*!********************************************************************!*\
      !*** ./node_modules/@arcgis/core/renderers/support/lengthUtils.js ***!
      \********************************************************************/

    /*! exports provided: meterIn */

    /***/
    function m0D6(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "meterIn", function () {
        return m;
      });
      /* harmony import */


      var _geometry_support_Ellipsoid_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ../../geometry/support/Ellipsoid.js */
      "IlWj");
      /* harmony import */


      var _core_unitUtils_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ../../core/unitUtils.js */
      "gEht");
      /*
      All material copyright ESRI, All Rights Reserved, unless otherwise specified.
      See https://js.arcgis.com/4.18/esri/copyright.txt for details.
      */


      var m = {
        inches: Object(_core_unitUtils_js__WEBPACK_IMPORTED_MODULE_1__["convertUnit"])(1, "meters", "inches"),
        feet: Object(_core_unitUtils_js__WEBPACK_IMPORTED_MODULE_1__["convertUnit"])(1, "meters", "feet"),
        "us-feet": Object(_core_unitUtils_js__WEBPACK_IMPORTED_MODULE_1__["convertUnit"])(1, "meters", "us-feet"),
        yards: Object(_core_unitUtils_js__WEBPACK_IMPORTED_MODULE_1__["convertUnit"])(1, "meters", "yards"),
        miles: Object(_core_unitUtils_js__WEBPACK_IMPORTED_MODULE_1__["convertUnit"])(1, "meters", "miles"),
        "nautical-miles": Object(_core_unitUtils_js__WEBPACK_IMPORTED_MODULE_1__["convertUnit"])(1, "meters", "nautical-miles"),
        millimeters: Object(_core_unitUtils_js__WEBPACK_IMPORTED_MODULE_1__["convertUnit"])(1, "meters", "millimeters"),
        centimeters: Object(_core_unitUtils_js__WEBPACK_IMPORTED_MODULE_1__["convertUnit"])(1, "meters", "centimeters"),
        decimeters: Object(_core_unitUtils_js__WEBPACK_IMPORTED_MODULE_1__["convertUnit"])(1, "meters", "decimeters"),
        meters: Object(_core_unitUtils_js__WEBPACK_IMPORTED_MODULE_1__["convertUnit"])(1, "meters", "meters"),
        kilometers: Object(_core_unitUtils_js__WEBPACK_IMPORTED_MODULE_1__["convertUnit"])(1, "meters", "kilometers"),
        "decimal-degrees": 1 / Object(_core_unitUtils_js__WEBPACK_IMPORTED_MODULE_1__["lengthToDegrees"])(1, "meters", _geometry_support_Ellipsoid_js__WEBPACK_IMPORTED_MODULE_0__["earth"].radius)
      };
      /***/
    },

    /***/
    "mXvl":
    /*!***************************************************************!*\
      !*** ./node_modules/@arcgis/core/layers/mixins/BlendLayer.js ***!
      \***************************************************************/

    /*! exports provided: BlendLayer */

    /***/
    function mXvl(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "BlendLayer", function () {
        return t;
      });
      /* harmony import */


      var _chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ../../chunks/tslib.es6.js */
      "pO5D");
      /* harmony import */


      var _core_has_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ../../core/has.js */
      "wSAH");
      /* harmony import */


      var _core_Logger_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ../../core/Logger.js */
      "6S2I");
      /* harmony import */


      var _core_accessorSupport_ensureType_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ../../core/accessorSupport/ensureType.js */
      "zqDF");
      /* harmony import */


      var _core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ../../core/accessorSupport/decorators/property.js */
      "WbKI");
      /* harmony import */


      var _core_accessorSupport_decorators_subclass_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ../../core/accessorSupport/decorators/subclass.js */
      "04ZG");
      /* harmony import */


      var _core_urlUtils_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ../../core/urlUtils.js */
      "4EHJ");
      /* harmony import */


      var _core_uuid_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! ../../core/uuid.js */
      "ju1D");
      /* harmony import */


      var _portal_support_resourceExtension_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! ../../portal/support/resourceExtension.js */
      "9AIY");
      /*
      All material copyright ESRI, All Rights Reserved, unless otherwise specified.
      See https://js.arcgis.com/4.18/esri/copyright.txt for details.
      */


      var t = function t(_t2) {
        var s = /*#__PURE__*/function (_t) {
          _inherits(s, _t);

          var _super6 = _createSuper(s);

          function s() {
            var _this12;

            _classCallCheck(this, s);

            _this12 = _super6.apply(this, arguments), _this12.blendMode = "normal", _this12.effect = null;
            return _this12;
          }

          return s;
        }(_t2);

        return Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_4__["property"])({
          type: ["average", "color-burn", "color-dodge", "color", "darken", "destination-atop", "destination-in", "destination-out", "destination-over", "difference", "exclusion", "hard-light", "hue", "invert", "lighten", "lighter", "luminosity", "minus", "multiply", "normal", "overlay", "plus", "reflect", "saturation", "screen", "soft-light", "source-atop", "source-in", "source-out", "vivid-light", "xor"],
          nonNullable: !0,
          json: {
            read: !1,
            write: !1,
            origins: {
              "web-map": {
                "default": "normal",
                read: !0,
                write: !0
              }
            }
          }
        })], s.prototype, "blendMode", void 0), Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_4__["property"])()], s.prototype, "effect", void 0), s = Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_subclass_js__WEBPACK_IMPORTED_MODULE_5__["subclass"])("esri.layers.mixins.BlendLayer")], s), s;
      };
      /***/

    }
  }]);
})();
//# sourceMappingURL=KMLLayer-js-es5.js.map