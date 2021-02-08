(function () {
  function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

  function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

  function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

  function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

  function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

  function _possibleConstructorReturn(self, call) { if (call && (typeof call === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

  function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

  function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

  function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

  function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

  function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

  function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  function _createForOfIteratorHelper(o, allowArrayLike) { var it; if (typeof Symbol === "undefined" || o[Symbol.iterator] == null) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e39) { throw _e39; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = o[Symbol.iterator](); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e40) { didErr = true; err = _e40; }, f: function f() { try { if (!normalCompletion && it["return"] != null) it["return"](); } finally { if (didErr) throw err; } } }; }

  function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

  function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

  function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

  function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

  function _iterableToArrayLimit(arr, i) { if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr))) return; var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

  function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["default~ImageryLayer-js~ImageryTileLayer-js"], {
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
    "1/KW":
    /*!*****************************************************!*\
      !*** ./node_modules/@arcgis/core/core/ItemCache.js ***!
      \*****************************************************/

    /*! exports provided: default */

    /***/
    function KW(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony import */


      var _MemCache_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ./MemCache.js */
      "rvq7");
      /*
      All material copyright ESRI, All Rights Reserved, unless otherwise specified.
      See https://js.arcgis.com/4.18/esri/copyright.txt for details.
      */

      /* harmony default export */


      __webpack_exports__["default"] = /*#__PURE__*/function () {
        function _class(e, r) {
          _classCallCheck(this, _class);

          this._storage = new _MemCache_js__WEBPACK_IMPORTED_MODULE_0__["MemCacheStorage"](), this._storage.maxSize = e, r && this._storage.registerRemoveFunc("", r);
        }

        _createClass(_class, [{
          key: "put",
          value: function put(t, e) {
            this._storage.put(t, e, 1, 1);
          }
        }, {
          key: "pop",
          value: function pop(t) {
            return this._storage.pop(t);
          }
        }, {
          key: "get",
          value: function get(t) {
            return this._storage.get(t);
          }
        }, {
          key: "clear",
          value: function clear() {
            this._storage.clearAll();
          }
        }, {
          key: "destroy",
          value: function destroy() {
            this._storage.clearAll();
          }
        }]);

        return _class;
      }();
      /***/

    },

    /***/
    "1EXT":
    /*!*********************************************************************!*\
      !*** ./node_modules/@arcgis/core/symbols/support/cimSymbolUtils.js ***!
      \*********************************************************************/

    /*! exports provided: applyCIMSymbolColor, applyCIMSymbolRotation, getCIMSymbolColor, getCIMSymbolRotation, getCIMSymbolSize, scaleCIMMarker, scaleCIMSymbolTo */

    /***/
    function EXT(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "applyCIMSymbolColor", function () {
        return k;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "applyCIMSymbolRotation", function () {
        return p;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "getCIMSymbolColor", function () {
        return M;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "getCIMSymbolRotation", function () {
        return I;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "getCIMSymbolSize", function () {
        return n;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "scaleCIMMarker", function () {
        return f;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "scaleCIMSymbolTo", function () {
        return i;
      });
      /* harmony import */


      var _Color_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ../../Color.js */
      "nvBr");
      /* harmony import */


      var _cim_utils_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ../cim/utils.js */
      "NrhG");
      /*
      All material copyright ESRI, All Rights Reserved, unless otherwise specified.
      See https://js.arcgis.com/4.18/esri/copyright.txt for details.
      */


      function n(e) {
        var c = Object(_cim_utils_js__WEBPACK_IMPORTED_MODULE_1__["toCIMSymbolJSON"])(e);
        if ("CIMTextSymbol" === c.type) return c.height;
        var s = 0;

        if (c.symbolLayers) {
          var _iterator3 = _createForOfIteratorHelper(c.symbolLayers),
              _step3;

          try {
            for (_iterator3.s(); !(_step3 = _iterator3.n()).done;) {
              var _e14 = _step3.value;
              Object(_cim_utils_js__WEBPACK_IMPORTED_MODULE_1__["isCIMMarker"])(_e14) && _e14.size > s ? s = _e14.size : Object(_cim_utils_js__WEBPACK_IMPORTED_MODULE_1__["isCIMStroke"])(_e14) && _e14.width > s ? s = _e14.width : Object(_cim_utils_js__WEBPACK_IMPORTED_MODULE_1__["isCIMFill"])(_e14);
            }
          } catch (err) {
            _iterator3.e(err);
          } finally {
            _iterator3.f();
          }
        }

        return s;
      }

      function i(e, o, r) {
        var a = Object(_cim_utils_js__WEBPACK_IMPORTED_MODULE_1__["toCIMSymbolJSON"])(e),
            c = n(e);
        if (0 === c) return void function (e, t) {
          if ("CIMTextSymbol" === e.type) return void (e.height = t);

          if (e.symbolLayers) {
            var _iterator4 = _createForOfIteratorHelper(e.symbolLayers),
                _step4;

            try {
              for (_iterator4.s(); !(_step4 = _iterator4.n()).done;) {
                var _o4 = _step4.value;

                switch (_o4.type) {
                  case "CIMPictureMarker":
                  case "CIMVectorMarker":
                    _o4.size = t;
                    break;

                  case "CIMPictureStroke":
                  case "CIMSolidStroke":
                    _o4.width = t;
                }
              }
            } catch (err) {
              _iterator4.e(err);
            } finally {
              _iterator4.f();
            }
          }
        }(a, o);
        l(a, o / c, !1, r);
      }

      function l(e, t, o, r) {
        if ("CIMTextSymbol" !== e.type) {
          if (o && e.effects) {
            var _iterator5 = _createForOfIteratorHelper(e.effects),
                _step5;

            try {
              for (_iterator5.s(); !(_step5 = _iterator5.n()).done;) {
                var _o5 = _step5.value;
                m(_o5, t);
              }
            } catch (err) {
              _iterator5.e(err);
            } finally {
              _iterator5.f();
            }
          }

          if (e.symbolLayers) {
            var _iterator6 = _createForOfIteratorHelper(e.symbolLayers),
                _step6;

            try {
              for (_iterator6.s(); !(_step6 = _iterator6.n()).done;) {
                var _o6 = _step6.value;

                switch (_o6.type) {
                  case "CIMPictureMarker":
                  case "CIMVectorMarker":
                    f(_o6, t, r);
                    break;

                  case "CIMPictureStroke":
                  case "CIMSolidStroke":
                    null != r && r.preserveOutlineWidth || (_o6.width *= t);
                    break;

                  case "CIMPictureFill":
                    _o6.height *= t, _o6.offsetX *= t, _o6.offsetY *= t;
                    break;

                  case "CIMHatchFill":
                    l(_o6.lineSymbol, t, !0, _objectSpread(_objectSpread({}, r), {}, {
                      preserveOutlineWidth: !1
                    })), _o6.offsetX *= t, _o6.offsetY *= t, _o6.separation *= t;
                }
              }
            } catch (err) {
              _iterator6.e(err);
            } finally {
              _iterator6.f();
            }
          }
        } else e.height *= t;
      }

      function f(e, t, o) {
        if (e.markerPlacement && function (e, t) {
          Object(_cim_utils_js__WEBPACK_IMPORTED_MODULE_1__["isCIMMarkerStrokePlacement"])(e) && (e.offset *= t);

          switch (e.type) {
            case "CIMMarkerPlacementAlongLineRandomSize":
            case "CIMMarkerPlacementAlongLineSameSize":
              if (e.customEndingOffset *= t, e.offsetAlongLine *= t, e.placementTemplate && e.placementTemplate.length) {
                var _o7 = e.placementTemplate.map(function (e) {
                  return e * t;
                });

                e.placementTemplate = _o7;
              }

              break;

            case "CIMMarkerPlacementAlongLineVariableSize":
              if (e.maxRandomOffset *= t, e.placementTemplate && e.placementTemplate.length) {
                var _o8 = e.placementTemplate.map(function (e) {
                  return e * t;
                });

                e.placementTemplate = _o8;
              }

              break;

            case "CIMMarkerPlacementOnLine":
              e.startPointOffset *= t;
              break;

            case "CIMMarkerPlacementAtExtremities":
              e.offsetAlongLine *= t;
              break;

            case "CIMMarkerPlacementAtMeasuredUnits":
            case "CIMMarkerPlacementOnVertices":
              break;

            case "CIMMarkerPlacementAtRatioPositions":
              e.beginPosition *= t, e.endPosition *= t;
              break;

            case "CIMMarkerPlacementPolygonCenter":
              e.offsetX *= t, e.offsetY *= t;
              break;

            case "CIMMarkerPlacementInsidePolygon":
              e.offsetX *= t, e.offsetY *= t, e.stepX *= t, e.stepY *= t;
          }
        }(e.markerPlacement, t), e.offsetX *= t, e.offsetY *= t, e.anchorPoint && "Absolute" === e.anchorPointUnits && (e.anchorPoint = {
          x: e.anchorPoint.x * t,
          y: e.anchorPoint.y * t
        }), e.size *= t, "CIMVectorMarker" === e.type && e.markerGraphics) {
          var _iterator7 = _createForOfIteratorHelper(e.markerGraphics),
              _step7;

          try {
            for (_iterator7.s(); !(_step7 = _iterator7.n()).done;) {
              var r = _step7.value;
              e.scaleSymbolsProportionally || l(r.symbol, t, !0, o);
            }
          } catch (err) {
            _iterator7.e(err);
          } finally {
            _iterator7.f();
          }
        }
      }

      function m(e, t) {
        switch (e.type) {
          case "CIMGeometricEffectArrow":
          case "CIMGeometricEffectDonut":
            e.width *= t;
            break;

          case "CIMGeometricEffectBuffer":
            e.size *= t;
            break;

          case "CIMGeometricEffectCut":
            e.beginCut *= t, e.endCut *= t, e.middleCut *= t;
            break;

          case "CIMGeometricEffectDashes":
            if (e.customEndingOffset *= t, e.offsetAlongLine *= t, e.dashTemplate && e.dashTemplate.length) {
              var o = e.dashTemplate.map(function (e) {
                return e * t;
              });
              e.dashTemplate = o;
            }

            break;

          case "CIMGeometricEffectExtension":
          case "CIMGeometricEffectJog":
          case "CIMGeometricEffectRadial":
            e.length *= t;
            break;

          case "CIMGeometricEffectMove":
            e.offsetX *= t, e.offsetY *= t;
            break;

          case "CIMGeometricEffectOffset":
          case "CIMGeometricEffectOffsetTangent":
            e.offset *= t;
            break;

          case "CIMGeometricEffectRegularPolygon":
            e.radius *= t;
            break;

          case "CIMGeometricEffectTaperedPolygon":
            e.fromWidth *= t, e.length *= t, e.toWidth *= t;
            break;

          case "CIMGeometricEffectWave":
            e.amplitude *= t, e.period *= t;
        }
      }

      function M(o) {
        var r = [];
        return y(Object(_cim_utils_js__WEBPACK_IMPORTED_MODULE_1__["toCIMSymbolJSON"])(o), r), r.length ? new _Color_js__WEBPACK_IMPORTED_MODULE_0__["default"](Object(_cim_utils_js__WEBPACK_IMPORTED_MODULE_1__["fromCIMColor"])(r[0])) : null;
      }

      function y(e, t) {
        var a;
        a = "CIMTextSymbol" === e.type ? e.symbol : e;
        var s = "CIMPolygonSymbol" === e.type;

        if (a.symbolLayers) {
          var _iterator8 = _createForOfIteratorHelper(a.symbolLayers),
              _step8;

          try {
            for (_iterator8.s(); !(_step8 = _iterator8.n()).done;) {
              var _e15 = _step8.value;
              if (!(_e15.colorLocked || s && (Object(_cim_utils_js__WEBPACK_IMPORTED_MODULE_1__["isCIMStroke"])(_e15) || Object(_cim_utils_js__WEBPACK_IMPORTED_MODULE_1__["isCIMMarker"])(_e15) && _e15.markerPlacement && Object(_cim_utils_js__WEBPACK_IMPORTED_MODULE_1__["isCIMMarkerStrokePlacement"])(_e15.markerPlacement)))) switch (_e15.type) {
                case "CIMPictureMarker":
                case "CIMPictureStroke":
                case "CIMPictureFill":
                  break;

                case "CIMVectorMarker":
                  _e15.markerGraphics.forEach(function (e) {
                    y(e.symbol, t);
                  });

                  break;

                case "CIMSolidStroke":
                case "CIMSolidFill":
                  C(t, _e15.color);
                  break;

                case "CIMHatchFill":
                  y(_e15.lineSymbol, t);
              }
            }
          } catch (err) {
            _iterator8.e(err);
          } finally {
            _iterator8.f();
          }
        }
      }

      function C(e, t) {
        var _iterator9 = _createForOfIteratorHelper(e),
            _step9;

        try {
          for (_iterator9.s(); !(_step9 = _iterator9.n()).done;) {
            var o = _step9.value;
            if (o.join(".") === t.join(".")) return;
          }
        } catch (err) {
          _iterator9.e(err);
        } finally {
          _iterator9.f();
        }

        e.push(t);
      }

      function k(o, r) {
        r instanceof _Color_js__WEBPACK_IMPORTED_MODULE_0__["default"] || (r = new _Color_js__WEBPACK_IMPORTED_MODULE_0__["default"](r));
        b(Object(_cim_utils_js__WEBPACK_IMPORTED_MODULE_1__["toCIMSymbolJSON"])(o), r);
      }

      function b(e, t) {
        var a;
        a = "CIMTextSymbol" === e.type ? e.symbol : e;
        var s = "CIMPolygonSymbol" === e.type;

        if (a.symbolLayers) {
          var _iterator10 = _createForOfIteratorHelper(a.symbolLayers),
              _step10;

          try {
            for (_iterator10.s(); !(_step10 = _iterator10.n()).done;) {
              var _e16 = _step10.value;
              if (_e16.colorLocked) continue;
              if (s && (Object(_cim_utils_js__WEBPACK_IMPORTED_MODULE_1__["isCIMStroke"])(_e16) || Object(_cim_utils_js__WEBPACK_IMPORTED_MODULE_1__["isCIMMarker"])(_e16) && _e16.markerPlacement && Object(_cim_utils_js__WEBPACK_IMPORTED_MODULE_1__["isCIMMarkerStrokePlacement"])(_e16.markerPlacement))) continue;

              var _a7 = t.toArray(0);

              switch (_e16.type) {
                case "CIMPictureMarker":
                case "CIMPictureStroke":
                case "CIMPictureFill":
                  break;

                case "CIMVectorMarker":
                  _e16.markerGraphics.forEach(function (e) {
                    b(e.symbol, t);
                  });

                  break;

                case "CIMSolidStroke":
                case "CIMSolidFill":
                  _e16.color = _a7;
                  break;

                case "CIMHatchFill":
                  b(_e16.lineSymbol, t);
              }
            }
          } catch (err) {
            _iterator10.e(err);
          } finally {
            _iterator10.f();
          }
        }
      }

      function I(e) {
        var o = Object(_cim_utils_js__WEBPACK_IMPORTED_MODULE_1__["toCIMSymbolJSON"])(e);
        return ("CIMTextSymbol" === o.type || "CIMPointSymbol" === o.type) && o.angle || 0;
      }

      function p(e, r) {
        var a = Object(_cim_utils_js__WEBPACK_IMPORTED_MODULE_1__["toCIMSymbolJSON"])(e);

        if ("CIMTextSymbol" !== a.type) {
          if ("CIMPointSymbol" === a.type && a.symbolLayers) {
            var _e17 = r - (a.angle || 0);

            var _iterator11 = _createForOfIteratorHelper(a.symbolLayers),
                _step11;

            try {
              for (_iterator11.s(); !(_step11 = _iterator11.n()).done;) {
                var t = _step11.value;

                if (Object(_cim_utils_js__WEBPACK_IMPORTED_MODULE_1__["isCIMMarker"])(t)) {
                  var o = t.rotation || 0;
                  t.rotateClockwise ? o -= _e17 : o += _e17, t.rotation = o;
                }

                a.angle = r;
              }
            } catch (err) {
              _iterator11.e(err);
            } finally {
              _iterator11.f();
            }
          }
        } else a.angle = r;
      }
      /***/

    },

    /***/
    "2CuI":
    /*!*****************************************************************************!*\
      !*** ./node_modules/@arcgis/core/tasks/support/ClassificationDefinition.js ***!
      \*****************************************************************************/

    /*! exports provided: default */

    /***/
    function CuI(module, __webpack_exports__, __webpack_require__) {
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


      var _core_jsonMap_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ../../core/jsonMap.js */
      "+opI");
      /* harmony import */


      var _core_accessorSupport_decorators_subclass_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ../../core/accessorSupport/decorators/subclass.js */
      "04ZG");
      /* harmony import */


      var _core_urlUtils_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! ../../core/urlUtils.js */
      "4EHJ");
      /* harmony import */


      var _core_uuid_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! ../../core/uuid.js */
      "ju1D");
      /* harmony import */


      var _portal_support_resourceExtension_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! ../../portal/support/resourceExtension.js */
      "9AIY");
      /* harmony import */


      var _core_JSONSupport_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
      /*! ../../core/JSONSupport.js */
      "ag7Y");
      /* harmony import */


      var _symbols_Symbol_js__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
      /*! ../../symbols/Symbol.js */
      "DZP5");
      /* harmony import */


      var _colorRamps_js__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
      /*! ./colorRamps.js */
      "SE0f");
      /*
      All material copyright ESRI, All Rights Reserved, unless otherwise specified.
      See https://js.arcgis.com/4.18/esri/copyright.txt for details.
      */


      var c = new _core_jsonMap_js__WEBPACK_IMPORTED_MODULE_5__["JSONMap"]({
        classBreaksDef: "class-breaks-definition",
        uniqueValueDef: "unique-value-definition"
      });

      var m = /*#__PURE__*/function (_core_JSONSupport_js_) {
        _inherits(m, _core_JSONSupport_js_);

        var _super = _createSuper(m);

        function m() {
          var _this;

          _classCallCheck(this, m);

          _this = _super.apply(this, arguments), _this.baseSymbol = null, _this.colorRamp = null, _this.type = null;
          return _this;
        }

        return m;
      }(_core_JSONSupport_js__WEBPACK_IMPORTED_MODULE_10__["JSONSupport"]);

      Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_4__["property"])({
        type: _symbols_Symbol_js__WEBPACK_IMPORTED_MODULE_11__["default"],
        json: {
          write: !0
        }
      })], m.prototype, "baseSymbol", void 0), Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_4__["property"])({
        types: _colorRamps_js__WEBPACK_IMPORTED_MODULE_12__["types"],
        json: {
          read: {
            reader: _colorRamps_js__WEBPACK_IMPORTED_MODULE_12__["fromJSON"]
          },
          write: !0
        }
      })], m.prototype, "colorRamp", void 0), Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_4__["property"])({
        json: {
          read: c.read,
          write: c.write
        }
      })], m.prototype, "type", void 0), m = Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_subclass_js__WEBPACK_IMPORTED_MODULE_6__["subclass"])("esri.tasks.support.ClassificationDefinition")], m);
      var l = m;
      /* harmony default export */

      __webpack_exports__["default"] = l;
      /***/
    },

    /***/
    "2mvb":
    /*!**********************************************************************!*\
      !*** ./node_modules/@arcgis/core/layers/support/RasterJobHandler.js ***!
      \**********************************************************************/

    /*! exports provided: default */

    /***/
    function mvb(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony import */


      var _core_Error_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ../../core/Error.js */
      "zlDU");
      /* harmony import */


      var _core_promiseUtils_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ../../core/promiseUtils.js */
      "9MzC");
      /* harmony import */


      var _PixelBlock_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./PixelBlock.js */
      "Piei");
      /* harmony import */


      var _core_workers_workers_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ../../core/workers/workers.js */
      "36Co");
      /*
      All material copyright ESRI, All Rights Reserved, unless otherwise specified.
      See https://js.arcgis.com/4.18/esri/copyright.txt for details.
      */

      /* harmony default export */


      __webpack_exports__["default"] = /*#__PURE__*/function () {
        function _class2() {
          _classCallCheck(this, _class2);

          this._workerThread = null, this._destroyed = !1;
        }

        _createClass(_class2, [{
          key: "initialize",
          value: function () {
            var _initialize = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
              var r;
              return regeneratorRuntime.wrap(function _callee$(_context) {
                while (1) {
                  switch (_context.prev = _context.next) {
                    case 0:
                      _context.next = 2;
                      return Object(_core_workers_workers_js__WEBPACK_IMPORTED_MODULE_3__["open"])("RasterWorker");

                    case 2:
                      r = _context.sent;
                      this._destroyed ? r.close() : this._workerThread = r;

                    case 4:
                    case "end":
                      return _context.stop();
                  }
                }
              }, _callee, this);
            }));

            function initialize() {
              return _initialize.apply(this, arguments);
            }

            return initialize;
          }()
        }, {
          key: "destroy",
          value: function destroy() {
            this._destroyed = !0, this._workerThread && (this._workerThread.close(), this._workerThread = null);
          }
        }, {
          key: "decode",
          value: function () {
            var _decode = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee2(e, o) {
              var n;
              return regeneratorRuntime.wrap(function _callee2$(_context2) {
                while (1) {
                  switch (_context2.prev = _context2.next) {
                    case 0:
                      if (this._workerThread) {
                        _context2.next = 2;
                        break;
                      }

                      throw new _core_Error_js__WEBPACK_IMPORTED_MODULE_0__["default"]("raster-jobhandler:no-connection", "no available worker connection");

                    case 2:
                      _context2.next = 4;
                      return this._workerThread.invoke("decode", e, o);

                    case 4:
                      n = _context2.sent;
                      return _context2.abrupt("return", n ? new _PixelBlock_js__WEBPACK_IMPORTED_MODULE_2__["default"](n) : null);

                    case 6:
                    case "end":
                      return _context2.stop();
                  }
                }
              }, _callee2, this);
            }));

            function decode(_x, _x2) {
              return _decode.apply(this, arguments);
            }

            return decode;
          }()
        }, {
          key: "symbolize",
          value: function () {
            var _symbolize = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee3(e, o) {
              var n, i;
              return regeneratorRuntime.wrap(function _callee3$(_context3) {
                while (1) {
                  switch (_context3.prev = _context3.next) {
                    case 0:
                      if (this._workerThread) {
                        _context3.next = 2;
                        break;
                      }

                      throw new _core_Error_js__WEBPACK_IMPORTED_MODULE_0__["default"]("raster-jobhandler:no-connection", "no available worker connection");

                    case 2:
                      n = {
                        extent: e.extent && e.extent.toJSON(),
                        pixelBlock: e.pixelBlock.toJSON(),
                        simpleStretchParams: e.simpleStretchParams,
                        bandIds: e.bandIds
                      };
                      _context3.next = 5;
                      return this._workerThread.invoke("symbolize", n, o);

                    case 5:
                      i = _context3.sent;
                      return _context3.abrupt("return", i ? new _PixelBlock_js__WEBPACK_IMPORTED_MODULE_2__["default"](i) : null);

                    case 7:
                    case "end":
                      return _context3.stop();
                  }
                }
              }, _callee3, this);
            }));

            function symbolize(_x3, _x4) {
              return _symbolize.apply(this, arguments);
            }

            return symbolize;
          }()
        }, {
          key: "updateSymbolizer",
          value: function () {
            var _updateSymbolizer = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee4(o, t) {
              var n, i;
              return regeneratorRuntime.wrap(function _callee4$(_context4) {
                while (1) {
                  switch (_context4.prev = _context4.next) {
                    case 0:
                      if (this._workerThread) {
                        _context4.next = 2;
                        break;
                      }

                      throw new _core_Error_js__WEBPACK_IMPORTED_MODULE_0__["default"]("raster-jobhandler:no-connection", "no available worker connection");

                    case 2:
                      i = null == o || null == (n = o.rendererJSON) ? void 0 : n.histograms;
                      _context4.next = 5;
                      return Object(_core_promiseUtils_js__WEBPACK_IMPORTED_MODULE_1__["all"])(this._workerThread.broadcast("updateSymbolizer", {
                        symbolizerJSON: o.toJSON(),
                        histograms: i
                      }, t));

                    case 5:
                    case "end":
                      return _context4.stop();
                  }
                }
              }, _callee4, this);
            }));

            function updateSymbolizer(_x5, _x6) {
              return _updateSymbolizer.apply(this, arguments);
            }

            return updateSymbolizer;
          }()
        }, {
          key: "stretch",
          value: function () {
            var _stretch = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee5(e, o) {
              var n, i;
              return regeneratorRuntime.wrap(function _callee5$(_context5) {
                while (1) {
                  switch (_context5.prev = _context5.next) {
                    case 0:
                      if (this._workerThread) {
                        _context5.next = 2;
                        break;
                      }

                      throw new _core_Error_js__WEBPACK_IMPORTED_MODULE_0__["default"]("raster-jobhandler:no-connection", "no available worker connection");

                    case 2:
                      if (!(null == e || !e.pixelBlock)) {
                        _context5.next = 4;
                        break;
                      }

                      return _context5.abrupt("return", null);

                    case 4:
                      n = {
                        srcPixelBlock: e.pixelBlock.toJSON(),
                        stretchParams: e.stretchParams
                      };
                      _context5.next = 7;
                      return this._workerThread.invoke("stretch", n, o);

                    case 7:
                      i = _context5.sent;
                      return _context5.abrupt("return", i ? new _PixelBlock_js__WEBPACK_IMPORTED_MODULE_2__["default"](i) : null);

                    case 9:
                    case "end":
                      return _context5.stop();
                  }
                }
              }, _callee5, this);
            }));

            function stretch(_x7, _x8) {
              return _stretch.apply(this, arguments);
            }

            return stretch;
          }()
        }, {
          key: "split",
          value: function () {
            var _split = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee6(e, n) {
              var i, a;
              return regeneratorRuntime.wrap(function _callee6$(_context6) {
                while (1) {
                  switch (_context6.prev = _context6.next) {
                    case 0:
                      if (this._workerThread) {
                        _context6.next = 2;
                        break;
                      }

                      throw new _core_Error_js__WEBPACK_IMPORTED_MODULE_0__["default"]("raster-jobhandler:no-connection", "no available worker connection");

                    case 2:
                      if (!(null == e || !e.pixelBlock)) {
                        _context6.next = 4;
                        break;
                      }

                      return _context6.abrupt("return", null);

                    case 4:
                      i = {
                        srcPixelBlock: e.pixelBlock.toJSON(),
                        tileSize: e.tileSize,
                        maximumPyramidLevel: e.maximumPyramidLevel
                      };
                      _context6.next = 7;
                      return this._workerThread.invoke("split", i, n);

                    case 7:
                      a = _context6.sent;
                      return _context6.abrupt("return", (a && a.forEach(function (r, e) {
                        a.set(e, r ? _PixelBlock_js__WEBPACK_IMPORTED_MODULE_2__["default"].fromJSON(r) : null);
                      }), Object(_core_promiseUtils_js__WEBPACK_IMPORTED_MODULE_1__["resolve"])(a)));

                    case 9:
                    case "end":
                      return _context6.stop();
                  }
                }
              }, _callee6, this);
            }));

            function split(_x9, _x10) {
              return _split.apply(this, arguments);
            }

            return split;
          }()
        }, {
          key: "estimateStatisticsHistograms",
          value: function () {
            var _estimateStatisticsHistograms = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee7(e, t) {
              var n, i;
              return regeneratorRuntime.wrap(function _callee7$(_context7) {
                while (1) {
                  switch (_context7.prev = _context7.next) {
                    case 0:
                      if (this._workerThread) {
                        _context7.next = 2;
                        break;
                      }

                      throw new _core_Error_js__WEBPACK_IMPORTED_MODULE_0__["default"]("raster-jobhandler:no-connection", "no available worker connection");

                    case 2:
                      if (!(null == e || !e.pixelBlock)) {
                        _context7.next = 4;
                        break;
                      }

                      return _context7.abrupt("return", null);

                    case 4:
                      n = {
                        srcPixelBlock: e.pixelBlock.toJSON()
                      };
                      _context7.next = 7;
                      return this._workerThread.invoke("estimateStatisticsHistograms", n, t);

                    case 7:
                      i = _context7.sent;
                      return _context7.abrupt("return", Object(_core_promiseUtils_js__WEBPACK_IMPORTED_MODULE_1__["resolve"])(i));

                    case 9:
                    case "end":
                      return _context7.stop();
                  }
                }
              }, _callee7, this);
            }));

            function estimateStatisticsHistograms(_x11, _x12) {
              return _estimateStatisticsHistograms.apply(this, arguments);
            }

            return estimateStatisticsHistograms;
          }()
        }, {
          key: "mosaicAndTransform",
          value: function () {
            var _mosaicAndTransform = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee8(e, o) {
              var n, i, a;
              return regeneratorRuntime.wrap(function _callee8$(_context8) {
                while (1) {
                  switch (_context8.prev = _context8.next) {
                    case 0:
                      if (this._workerThread) {
                        _context8.next = 2;
                        break;
                      }

                      throw new _core_Error_js__WEBPACK_IMPORTED_MODULE_0__["default"]("raster-jobhandler:no-connection", "no available worker connection");

                    case 2:
                      if (!(null == e || null == (n = e.srcPixelBlocks) || !n.length)) {
                        _context8.next = 4;
                        break;
                      }

                      return _context8.abrupt("return", null);

                    case 4:
                      i = _objectSpread(_objectSpread({}, e), {}, {
                        srcPixelBlocks: e.srcPixelBlocks.map(function (r) {
                          return r ? r.toJSON() : null;
                        })
                      });
                      _context8.next = 7;
                      return this._workerThread.invoke("mosaicAndTransform", i, o);

                    case 7:
                      a = _context8.sent;
                      return _context8.abrupt("return", a ? new _PixelBlock_js__WEBPACK_IMPORTED_MODULE_2__["default"](a) : null);

                    case 9:
                    case "end":
                      return _context8.stop();
                  }
                }
              }, _callee8, this);
            }));

            function mosaicAndTransform(_x13, _x14) {
              return _mosaicAndTransform.apply(this, arguments);
            }

            return mosaicAndTransform;
          }()
        }]);

        return _class2;
      }();
      /***/

    },

    /***/
    "9Ruv":
    /*!*********************************************************!*\
      !*** ./node_modules/@arcgis/core/support/popupUtils.js ***!
      \*********************************************************/

    /*! exports provided: createFieldInfos, createFieldsContent, createPopupTemplate */

    /***/
    function Ruv(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "createFieldInfos", function () {
        return F;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "createFieldsContent", function () {
        return f;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "createPopupTemplate", function () {
        return a;
      });
      /* harmony import */


      var _layers_support_fieldUtils_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ../layers/support/fieldUtils.js */
      "wdpY");
      /* harmony import */


      var _popup_content_Content_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ../popup/content/Content.js */
      "p6dn");
      /* harmony import */


      var _popup_content_AttachmentsContent_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ../popup/content/AttachmentsContent.js */
      "Eonp");
      /* harmony import */


      var _popup_content_CustomContent_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ../popup/content/CustomContent.js */
      "ack/");
      /* harmony import */


      var _popup_support_FieldInfoFormat_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ../popup/support/FieldInfoFormat.js */
      "iALD");
      /* harmony import */


      var _popup_FieldInfo_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ../popup/FieldInfo.js */
      "n5EF");
      /* harmony import */


      var _popup_content_FieldsContent_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ../popup/content/FieldsContent.js */
      "GL98");
      /* harmony import */


      var _popup_content_MediaContent_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! ../popup/content/MediaContent.js */
      "PKzc");
      /* harmony import */


      var _popup_content_TextContent_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! ../popup/content/TextContent.js */
      "0OnR");
      /* harmony import */


      var _PopupTemplate_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! ../PopupTemplate.js */
      "SFah");
      /*
      All material copyright ESRI, All Rights Reserved, unless otherwise specified.
      See https://js.arcgis.com/4.18/esri/copyright.txt for details.
      */


      var r = ["oid", "global-id"],
          s = ["oid", "global-id", "guid"];

      function a(_ref, d) {
        var i = _ref.displayField,
            o = _ref.editFieldsInfo,
            r = _ref.fields,
            s = _ref.objectIdField,
            a = _ref.title;
        if (!r) return null;
        var p = F({
          editFieldsInfo: o,
          fields: r,
          objectIdField: s
        }, d);
        if (!p.length) return null;

        var u = function (t) {
          var i = Object(_layers_support_fieldUtils_js__WEBPACK_IMPORTED_MODULE_0__["getDisplayFieldName"])(t),
              o = t.titleBase;
          return i ? "".concat(o, ": {").concat(i.trim(), "}") : o;
        }({
          titleBase: a,
          fields: r,
          displayField: i
        }),
            c = [new _popup_content_FieldsContent_js__WEBPACK_IMPORTED_MODULE_6__["default"](), new _popup_content_AttachmentsContent_js__WEBPACK_IMPORTED_MODULE_2__["default"]()];

        return new _PopupTemplate_js__WEBPACK_IMPORTED_MODULE_9__["default"]({
          title: u,
          content: c,
          fieldInfos: p
        });
      }

      var d = [/^fnode_$/i, /^tnode_$/i, /^lpoly_$/i, /^rpoly_$/i, /^poly_$/i, /^subclass$/i, /^subclass_$/i, /^rings_ok$/i, /^rings_nok$/i, /shape/i, /perimeter/i, /objectid/i, /_i$/i],
          p = function p(e, _ref2) {
        var t = _ref2.editFieldsInfo,
            i = _ref2.objectIdField,
            o = _ref2.visibleFieldNames;
        return o ? o.has(e.name) : !c(e.name, t) && (!i || e.name !== i) && !(r.indexOf(e.type) > -1) && !d.some(function (t) {
          return t.test(e.name);
        });
      };

      function u(e, t) {
        return "oid" === e.type ? -1 : "oid" === t.type ? 1 : w(e) ? -1 : w(t) ? 1 : (e.alias || e.name).toLocaleLowerCase().localeCompare((t.alias || t.name).toLocaleLowerCase());
      }

      function c(e, t) {
        if (!e || !t) return !1;
        var i = t.creationDateField,
            o = t.creatorField,
            n = t.editDateField,
            l = t.editorField;
        return -1 !== [i && i.toLowerCase(), o && o.toLowerCase(), n && n.toLowerCase(), l && l.toLowerCase()].indexOf(e.toLowerCase());
      }

      function m(e, t) {
        return e.editable && -1 === s.indexOf(e.type) && !c(e.name, t);
      }

      function f(e, t) {
        return new _popup_content_FieldsContent_js__WEBPACK_IMPORTED_MODULE_6__["default"]({
          fieldInfos: F(e, t).filter(function (e) {
            return e.visible;
          })
        });
      }

      function F(_ref3, n) {
        var e = _ref3.editFieldsInfo,
            t = _ref3.fields,
            i = _ref3.objectIdField;
        return function (e, t) {
          var i = e;
          return t && (e = e.filter(function (e) {
            return -1 === t.indexOf(e.type);
          })), e === i && (e = e.slice()), e.sort(u), e;
        }(t, (null == n ? void 0 : n.ignoreFieldTypes) || C).map(function (t) {
          return new _popup_FieldInfo_js__WEBPACK_IMPORTED_MODULE_5__["default"]({
            fieldName: t.name,
            isEditable: m(t, e),
            label: t.alias,
            format: b(t),
            visible: p(t, {
              editFieldsInfo: e,
              objectIdField: i,
              visibleFieldNames: null == n ? void 0 : n.visibleFieldNames
            })
          });
        });
      }

      function b(e) {
        switch (e.type) {
          case "small-integer":
          case "integer":
          case "single":
            return new _popup_support_FieldInfoFormat_js__WEBPACK_IMPORTED_MODULE_4__["default"]({
              digitSeparator: !0,
              places: 0
            });

          case "double":
            return new _popup_support_FieldInfoFormat_js__WEBPACK_IMPORTED_MODULE_4__["default"]({
              digitSeparator: !0,
              places: 2
            });

          case "date":
            return new _popup_support_FieldInfoFormat_js__WEBPACK_IMPORTED_MODULE_4__["default"]({
              dateFormat: "long-month-day-year"
            });

          default:
            return null;
        }
      }

      function w(e) {
        if ("name" === (e.name && e.name.toLowerCase())) return !0;
        return "name" === (e.alias && e.alias.toLowerCase()) || void 0;
      }

      var C = ["geometry", "blob", "raster", "guid", "xml"];
      /***/
    },

    /***/
    "CLyZ":
    /*!********************************************************************!*\
      !*** ./node_modules/@arcgis/core/renderers/VectorFieldRenderer.js ***!
      \********************************************************************/

    /*! exports provided: default */

    /***/
    function CLyZ(module, __webpack_exports__, __webpack_require__) {
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


      var _core_lang_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ../core/lang.js */
      "f/qv");
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


      var _core_jsonMap_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ../core/jsonMap.js */
      "+opI");
      /* harmony import */


      var _core_accessorSupport_decorators_enumeration_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! ../core/accessorSupport/decorators/enumeration.js */
      "RI0u");
      /* harmony import */


      var _core_accessorSupport_decorators_reader_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! ../core/accessorSupport/decorators/reader.js */
      "r88o");
      /* harmony import */


      var _core_accessorSupport_decorators_subclass_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! ../core/accessorSupport/decorators/subclass.js */
      "04ZG");
      /* harmony import */


      var _core_urlUtils_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
      /*! ../core/urlUtils.js */
      "4EHJ");
      /* harmony import */


      var _core_uuid_js__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
      /*! ../core/uuid.js */
      "ju1D");
      /* harmony import */


      var _portal_support_resourceExtension_js__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
      /*! ../portal/support/resourceExtension.js */
      "9AIY");
      /* harmony import */


      var _core_JSONSupport_js__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
      /*! ../core/JSONSupport.js */
      "ag7Y");
      /* harmony import */


      var _geometry_Point_js__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(
      /*! ../geometry/Point.js */
      "SuVq");
      /* harmony import */


      var _geometry_js__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(
      /*! ../geometry.js */
      "4GrV");
      /* harmony import */


      var _Color_js__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(
      /*! ../Color.js */
      "nvBr");
      /* harmony import */


      var _symbols_SimpleLineSymbol_js__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(
      /*! ../symbols/SimpleLineSymbol.js */
      "21Ip");
      /* harmony import */


      var _symbols_PictureMarkerSymbol_js__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(
      /*! ../symbols/PictureMarkerSymbol.js */
      "N+cL");
      /* harmony import */


      var _symbols_SimpleMarkerSymbol_js__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(
      /*! ../symbols/SimpleMarkerSymbol.js */
      "Tcmu");
      /* harmony import */


      var _chunks_symbols_js__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(
      /*! ../chunks/symbols.js */
      "nNR5");
      /* harmony import */


      var _Graphic_js__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(
      /*! ../Graphic.js */
      "jWBI");
      /* harmony import */


      var _visualVariables_RotationVariable_js__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(
      /*! ./visualVariables/RotationVariable.js */
      "TzeZ");
      /* harmony import */


      var _visualVariables_support_visualVariableUtils_js__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(
      /*! ./visualVariables/support/visualVariableUtils.js */
      "0pea");
      /* harmony import */


      var _visualVariables_SizeVariable_js__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(
      /*! ./visualVariables/SizeVariable.js */
      "w/y1");
      /* harmony import */


      var _mixins_VisualVariablesMixin_js__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(
      /*! ./mixins/VisualVariablesMixin.js */
      "vk02");
      /* harmony import */


      var _support_ClassBreakInfo_js__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(
      /*! ./support/ClassBreakInfo.js */
      "8RtG");
      /* harmony import */


      var _ClassBreaksRenderer_js__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(
      /*! ./ClassBreaksRenderer.js */
      "tCO6");
      /* harmony import */


      var _geometry_support_normalizeUtils_js__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(
      /*! ../geometry/support/normalizeUtils.js */
      "qNUd");
      /* harmony import */


      var _layers_support_rasterFunctions_vectorFieldUtils_js__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(
      /*! ../layers/support/rasterFunctions/vectorFieldUtils.js */
      "Gdt4");
      /* harmony import */


      var _symbols_support_utils_js__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(
      /*! ../symbols/support/utils.js */
      "rI4C");
      /*
      All material copyright ESRI, All Rights Reserved, unless otherwise specified.
      See https://js.arcgis.com/4.18/esri/copyright.txt for details.
      */


      var _H;

      var S = new Set(["esriMetersPerSecond", "esriKilometersPerHour", "esriKnots", "esriFeetPerSecond", "esriMilesPerHour"]),
          B = new _core_jsonMap_js__WEBPACK_IMPORTED_MODULE_6__["JSONMap"]({
        esriMetersPerSecond: "meter-per-second",
        esriKilometersPerHour: "kilometer-per-hour",
        esriKnots: "knots",
        esriFeetPerSecond: "feet-per-second",
        esriMilesPerHour: "mile-per-hour"
      }),
          Z = new _core_jsonMap_js__WEBPACK_IMPORTED_MODULE_6__["JSONMap"]({
        beaufort_ft: "beaufort-ft",
        beaufort_km: "beaufort-km",
        beaufort_kn: "beaufort-kn",
        beaufort_m: "beaufort-m",
        beaufort_mi: "beaufort-mi",
        classified_arrow: "classified-arrow",
        ocean_current_kn: "ocean-current-kn",
        ocean_current_m: "ocean-current-m",
        simple_scalar: "simple-scalar",
        single_arrow: "single-arrow",
        wind_speed: "wind-barb"
      }),
          z = new _core_jsonMap_js__WEBPACK_IMPORTED_MODULE_6__["JSONMap"]({
        flow_from: "flow-from",
        flow_to: "flow-to"
      });

      var b = _H = /*#__PURE__*/function (_Object) {
        _inherits(H, _Object);

        var _super2 = _createSuper(H);

        function H(e) {
          var _this2;

          _classCallCheck(this, H);

          _this2 = _super2.call(this, e), _this2.attributeField = "Magnitude", _this2.flowRepresentation = "flow-from", _this2.rotationType = "arithmetic", _this2.style = "single-arrow", _this2.symbolTileSize = 50, _this2.type = "vector-field";
          return _this2;
        }

        _createClass(H, [{
          key: "readInputUnit",
          value: function readInputUnit(e, M) {
            return S.has(e) ? B.fromJSON(e) : null;
          }
        }, {
          key: "readOutputUnit",
          value: function readOutputUnit(e, M) {
            return S.has(e) ? B.fromJSON(e) : null;
          }
        }, {
          key: "styleRenderer",
          get: function get() {
            var e = this.style,
                M = this.attributeField,
                i = this._createStyleRenderer(e);

            return i.field = M, i;
          }
        }, {
          key: "sizeVariables",
          get: function get() {
            var e = [];

            if (this.visualVariables) {
              var _iterator12 = _createForOfIteratorHelper(this.visualVariables),
                  _step12;

              try {
                for (_iterator12.s(); !(_step12 = _iterator12.n()).done;) {
                  var M = _step12.value;
                  "size" === M.type && e.push(M);
                }
              } catch (err) {
                _iterator12.e(err);
              } finally {
                _iterator12.f();
              }
            }

            if (0 === e.length) {
              var _M = new _visualVariables_SizeVariable_js__WEBPACK_IMPORTED_MODULE_24__["default"]({
                minSize: .2 * this.symbolTileSize,
                maxSize: .8 * this.symbolTileSize
              });

              this.visualVariables ? this.visualVariables.push(_M) : this._set("visualVariables", [_M]), e.push(_M);
            }

            return e;
          }
        }, {
          key: "rotationVariables",
          get: function get() {
            var e = [];

            if (this.visualVariables) {
              var _iterator13 = _createForOfIteratorHelper(this.visualVariables),
                  _step13;

              try {
                for (_iterator13.s(); !(_step13 = _iterator13.n()).done;) {
                  var M = _step13.value;
                  "rotation" === M.type && e.push(M);
                }
              } catch (err) {
                _iterator13.e(err);
              } finally {
                _iterator13.f();
              }
            }

            if (0 === e.length) {
              var _M2 = new _visualVariables_RotationVariable_js__WEBPACK_IMPORTED_MODULE_22__["default"]({
                field: "Direction",
                rotationType: this.rotationType
              });

              this.visualVariables ? this.visualVariables.push(_M2) : this._set("visualVariables", [_M2]), e.push(_M2);
            }

            return e;
          }
        }, {
          key: "clone",
          value: function clone() {
            return new _H({
              attributeField: this.attributeField,
              flowRepresentation: this.flowRepresentation,
              rotationType: this.rotationType,
              style: this.style,
              visualVariables: Object(_core_lang_js__WEBPACK_IMPORTED_MODULE_2__["clone"])(this.visualVariables),
              inputUnit: this.inputUnit,
              outputUnit: this.outputUnit
            });
          }
        }, {
          key: "getGraphicsFromPixelData",
          value: function () {
            var _getGraphicsFromPixelData = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee9(e) {
              var M,
                  i,
                  a,
                  t,
                  I,
                  r,
                  g,
                  s,
                  A,
                  d,
                  _e18,
                  _M3,
                  _e19,
                  _M4,
                  _a8,
                  _args9 = arguments;

              return regeneratorRuntime.wrap(function _callee9$(_context9) {
                while (1) {
                  switch (_context9.prev = _context9.next) {
                    case 0:
                      M = _args9.length > 1 && _args9[1] !== undefined ? _args9[1] : !1;
                      i = [], a = Object(_layers_support_rasterFunctions_vectorFieldUtils_js__WEBPACK_IMPORTED_MODULE_29__["getUnitConversionFactor"])(this.inputUnit, this.outputUnit), t = M ? Object(_layers_support_rasterFunctions_vectorFieldUtils_js__WEBPACK_IMPORTED_MODULE_29__["convertVectorFieldData"])(e.pixelBlock, "vector-uv", this.rotationType, a) : Object(_layers_support_rasterFunctions_vectorFieldUtils_js__WEBPACK_IMPORTED_MODULE_29__["convertVectorFieldUnit"])(e.pixelBlock, "vector-magdir", a), I = e.extent, r = t.mask && t.mask.length > 0;
                      s = 0;
                      A = (I.xmax - I.xmin) / t.width, d = (I.ymax - I.ymin) / t.height;
                      _e18 = 0;

                    case 5:
                      if (!(_e18 < t.height)) {
                        _context9.next = 22;
                        break;
                      }

                      _M3 = 0;

                    case 7:
                      if (!(_M3 < t.width)) {
                        _context9.next = 19;
                        break;
                      }

                      if (!(g = [I.xmin + _M3 * A + A / 2, I.ymax - _e18 * d - d / 2], (!r || t.mask[s]) && g && 2 === g.length)) {
                        _context9.next = 16;
                        break;
                      }

                      _e19 = {
                        Magnitude: t.pixels[0][s],
                        Direction: t.pixels[1][s]
                      };
                      _M4 = new _geometry_Point_js__WEBPACK_IMPORTED_MODULE_14__["default"]({
                        x: g[0],
                        y: g[1],
                        spatialReference: I.spatialReference
                      });
                      _context9.next = 13;
                      return Object(_geometry_support_normalizeUtils_js__WEBPACK_IMPORTED_MODULE_28__["normalizeCentralMeridian"])(_M4);

                    case 13:
                      _M4 = _context9.sent[0];
                      _a8 = new _Graphic_js__WEBPACK_IMPORTED_MODULE_21__["default"]({
                        geometry: {
                          type: "point",
                          x: _M4.x,
                          y: _M4.y,
                          spatialReference: I.spatialReference
                        },
                        attributes: _e19
                      });
                      _a8.symbol = this._getVisualVariablesAppliedSymbol(_a8), i.push(_a8);

                    case 16:
                      _M3++, s++;
                      _context9.next = 7;
                      break;

                    case 19:
                      _e18++;
                      _context9.next = 5;
                      break;

                    case 22:
                      return _context9.abrupt("return", i);

                    case 23:
                    case "end":
                      return _context9.stop();
                  }
                }
              }, _callee9, this);
            }));

            function getGraphicsFromPixelData(_x15) {
              return _getGraphicsFromPixelData.apply(this, arguments);
            }

            return getGraphicsFromPixelData;
          }()
        }, {
          key: "getSymbol",
          value: function getSymbol(e, M) {}
        }, {
          key: "getSymbolAsync",
          value: function () {
            var _getSymbolAsync = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee10(e, M) {
              return regeneratorRuntime.wrap(function _callee10$(_context10) {
                while (1) {
                  switch (_context10.prev = _context10.next) {
                    case 0:
                    case "end":
                      return _context10.stop();
                  }
                }
              }, _callee10);
            }));

            function getSymbolAsync(_x16, _x17) {
              return _getSymbolAsync.apply(this, arguments);
            }

            return getSymbolAsync;
          }()
        }, {
          key: "getSymbols",
          value: function getSymbols() {
            return [];
          }
        }, {
          key: "getClassBreakInfos",
          value: function getClassBreakInfos() {
            var e;
            return null == (e = this.styleRenderer) ? void 0 : e.classBreakInfos;
          }
        }, {
          key: "getDefaultSymbol",
          value: function getDefaultSymbol() {
            var e;
            return null == (e = this.styleRenderer) ? void 0 : e.defaultSymbol;
          }
        }, {
          key: "_getDefaultSymbol",
          value: function _getDefaultSymbol(e) {
            return new _symbols_SimpleMarkerSymbol_js__WEBPACK_IMPORTED_MODULE_19__["default"]({
              path: "M14,32 14,18 9,23 16,3 22,23 17,18 17,32 z",
              outline: new _symbols_SimpleLineSymbol_js__WEBPACK_IMPORTED_MODULE_17__["default"]({
                width: 0
              }),
              size: 20,
              color: e || new _Color_js__WEBPACK_IMPORTED_MODULE_16__["default"]([0, 92, 230])
            });
          }
        }, {
          key: "_getVisualVariablesAppliedSymbol",
          value: function _getVisualVariablesAppliedSymbol(e) {
            if (!e) return;
            var M = this.styleRenderer && this.styleRenderer.getSymbol(e);
            M = M.clone();
            var i = this.sizeVariables,
                a = this.rotationVariables;

            if (i && i.length && this.sizeVariables.forEach(function (i) {
              return Object(_symbols_support_utils_js__WEBPACK_IMPORTED_MODULE_30__["applySizesToSymbol"])(M, Object(_visualVariables_support_visualVariableUtils_js__WEBPACK_IMPORTED_MODULE_23__["getAllSizes"])([i], e));
            }), a && a.length) {
              var _i4 = e.attributes.Direction;
              e.attributes.Direction = "flow-from" === this.flowRepresentation ? _i4 : _i4 + 180, this.rotationVariables.forEach(function (i) {
                return Object(_symbols_support_utils_js__WEBPACK_IMPORTED_MODULE_30__["applyRotationToSymbol"])(M, Object(_visualVariables_support_visualVariableUtils_js__WEBPACK_IMPORTED_MODULE_23__["getRotationAngle"])(i, e), i.axis);
              });
            }

            return M;
          }
        }, {
          key: "_createStyleRenderer",
          value: function _createStyleRenderer(e) {
            var M = {
              defaultSymbol: this._getDefaultSymbol(),
              classBreakInfos: []
            };

            switch (e) {
              case "single-arrow":
                M = this._createSingleArrowRenderer();
                break;

              case "beaufort-kn":
                M = this._createBeaufortKnotsRenderer();
                break;

              case "beaufort-m":
                M = this._createBeaufortMeterRenderer();
                break;

              case "beaufort-ft":
                M = this._createBeaufortFeetRenderer();
                break;

              case "beaufort-mi":
                M = this._createBeaufortMilesRenderer();
                break;

              case "beaufort-km":
                M = this._createBeaufortKilometersRenderer();
                break;

              case "ocean-current-m":
                M = this._createCurrentMeterRenderer();
                break;

              case "ocean-current-kn":
                M = this._createCurrentKnotsRenderer();
                break;

              case "simple-scalar":
                M = this._createSimpleScalarRenderer();
                break;

              case "wind-barb":
                M = this._createWindBarbsRenderer();
                break;

              case "classified-arrow":
                M = this._createClassifiedArrowRenderer();
            }

            return new _ClassBreaksRenderer_js__WEBPACK_IMPORTED_MODULE_27__["default"](M);
          }
        }, {
          key: "_createSingleArrowRenderer",
          value: function _createSingleArrowRenderer() {
            return {
              defaultSymbol: this._getDefaultSymbol()
            };
          }
        }, {
          key: "_createBeaufortKnotsRenderer",
          value: function _createBeaufortKnotsRenderer() {
            return {
              defaultSymbol: this._getDefaultSymbol(new _Color_js__WEBPACK_IMPORTED_MODULE_16__["default"]([214, 47, 39])),
              classBreakInfos: this._getClassBreaks([0, 1, 3, 6, 10, 16, 21, 27, 33, 40, 47, 55, 63], [[40, 146, 199], [89, 162, 186], [129, 179, 171], [160, 194, 155], [191, 212, 138], [218, 230, 119], [250, 250, 100], [252, 213, 83], [252, 179, 102], [250, 141, 52], [247, 110, 42], [240, 71, 29]])
            };
          }
        }, {
          key: "_createBeaufortMeterRenderer",
          value: function _createBeaufortMeterRenderer() {
            return {
              defaultSymbol: this._getDefaultSymbol(new _Color_js__WEBPACK_IMPORTED_MODULE_16__["default"]([214, 47, 39])),
              classBreakInfos: this._getClassBreaks([0, .2, 1.8, 3.3, 5.4, 8.5, 11, 14.1, 17.2, 20.8, 24.4, 28.6, 32.7], [[69, 117, 181], [101, 137, 184], [132, 158, 186], [162, 180, 189], [192, 204, 190], [222, 227, 191], [255, 255, 191], [255, 220, 161], [250, 185, 132], [245, 152, 105], [237, 117, 81], [232, 21, 21]])
            };
          }
        }, {
          key: "_createBeaufortFeetRenderer",
          value: function _createBeaufortFeetRenderer() {
            var e = this._getDefaultSymbol(new _Color_js__WEBPACK_IMPORTED_MODULE_16__["default"]([214, 47, 39]));

            var M = [0, .2, 1.8, 3.3, 5.4, 8.5, 11, 14.1, 17.2, 20.8, 24.4, 28.6, 32.7];
            M = M.map(function (e) {
              return 3.28084 * e;
            });
            return {
              defaultSymbol: e,
              classBreakInfos: this._getClassBreaks(M, [[69, 117, 181], [101, 137, 184], [132, 158, 186], [162, 180, 189], [192, 204, 190], [222, 227, 191], [255, 255, 191], [255, 220, 161], [250, 185, 132], [245, 152, 105], [237, 117, 81], [232, 21, 21]])
            };
          }
        }, {
          key: "_createBeaufortMilesRenderer",
          value: function _createBeaufortMilesRenderer() {
            var e = this._getDefaultSymbol(new _Color_js__WEBPACK_IMPORTED_MODULE_16__["default"]([214, 47, 39]));

            var M = [0, .2, 1.8, 3.3, 5.4, 8.5, 11, 14.1, 17.2, 20.8, 24.4, 28.6, 32.7];
            M = M.map(function (e) {
              return 2.23694 * e;
            });
            return {
              defaultSymbol: e,
              classBreakInfos: this._getClassBreaks(M, [[69, 117, 181], [101, 137, 184], [132, 158, 186], [162, 180, 189], [192, 204, 190], [222, 227, 191], [255, 255, 191], [255, 220, 161], [250, 185, 132], [245, 152, 105], [237, 117, 81], [232, 21, 21]])
            };
          }
        }, {
          key: "_createBeaufortKilometersRenderer",
          value: function _createBeaufortKilometersRenderer() {
            var e = this._getDefaultSymbol(new _Color_js__WEBPACK_IMPORTED_MODULE_16__["default"]([214, 47, 39]));

            var M = [0, .2, 1.8, 3.3, 5.4, 8.5, 11, 14.1, 17.2, 20.8, 24.4, 28.6, 32.7];
            M = M.map(function (e) {
              return 3.6 * e;
            });
            return {
              defaultSymbol: e,
              classBreakInfos: this._getClassBreaks(M, [[69, 117, 181], [101, 137, 184], [132, 158, 186], [162, 180, 189], [192, 204, 190], [222, 227, 191], [255, 255, 191], [255, 220, 161], [250, 185, 132], [245, 152, 105], [237, 117, 81], [232, 21, 21]])
            };
          }
        }, {
          key: "_createCurrentMeterRenderer",
          value: function _createCurrentMeterRenderer() {
            return {
              defaultSymbol: this._getDefaultSymbol(new _Color_js__WEBPACK_IMPORTED_MODULE_16__["default"]([177, 177, 177])),
              classBreakInfos: this._getClassBreaks([0, .5, 1, 1.5, 2], [[78, 26, 153], [179, 27, 26], [202, 128, 26], [177, 177, 177]])
            };
          }
        }, {
          key: "_createCurrentKnotsRenderer",
          value: function _createCurrentKnotsRenderer() {
            return {
              defaultSymbol: this._getDefaultSymbol(new _Color_js__WEBPACK_IMPORTED_MODULE_16__["default"]([177, 177, 177])),
              classBreakInfos: this._getClassBreaks([0, .25, .5, 1, 1.5, 2, 2.5, 3, 3.5, 4], [[0, 0, 0], [0, 37, 100], [78, 26, 153], [151, 0, 100], [179, 27, 26], [177, 78, 26], [202, 128, 26], [177, 179, 52], [177, 177, 177]])
            };
          }
        }, {
          key: "_createClassifiedArrowRenderer",
          value: function _createClassifiedArrowRenderer() {
            var e;

            var M = this._getDefaultSymbol(new _Color_js__WEBPACK_IMPORTED_MODULE_16__["default"]([56, 168, 0]));

            var i = [0, 1e-6, 3.5, 7, 10.5, 14];

            if (null != (e = this.sizeVariables) && e.length) {
              var _e20 = this.sizeVariables[0].minDataValue,
                  _M5 = this.sizeVariables[0].maxDataValue;

              if (_e20 && _M5) {
                var a = (_M5 - _e20) / 5;
                i = Array.from(Array(6).keys()).map(function (M) {
                  return _e20 + a * M;
                });
              }
            }

            return {
              defaultSymbol: M,
              classBreakInfos: this._getClassBreaks(i, [[56, 168, 0], [139, 309, 0], [255, 255, 0], [255, 128, 0], [255, 0, 0]])
            };
          }
        }, {
          key: "_createSimpleScalarRenderer",
          value: function _createSimpleScalarRenderer() {
            return {
              defaultSymbol: _symbols_PictureMarkerSymbol_js__WEBPACK_IMPORTED_MODULE_18__["default"].fromJSON({
                imageData: "iVBORw0KGgoAAAANSUhEUgAAACsAAAArCAQAAABLVLlLAAAABGdBTUEAAYagMeiWXwAAAAJiS0dEAACqjSMyAAAACXBIWXMAAABIAAAASABGyWs+AAAC3ElEQVRIx9XXvW4cVRQH8N982btpsIREJECyiCXsxX4DKh6AliqGKCBBE2SlwlHgAbBD/AKmyEYUeQ1KahPZSZQvBCkQLTHZ7KGY8Xodz4w3a1NwbzVzz/znfJ//zbStVC5q3icKak9GAs2QIdDx3PtW/S011NW3p+M5Eomh11ipTIKe6+4LQzHaQ+G+63pIZNJJQXMpljwTwj1brpgx5w1zZlyx5Z4QnllEIm2xeeSUHBf0hV0bejo1Uh09G3aFvgXk7cCJFBc9EdaRVuHJJaOdKyTV2TVhYLMduNR0Q9gxL5GaaTDw8GzejrDRBpxWoGsySRW0dttKuattwNkIlFw2YXgzOdYq4Ox49PlM+JrKd5OusjTWhBuVxUfMX/KXXZ3WEmkuqa67wspR4BTbwtKr/5u4fFgStse/T7EifFPnnYl9zPq4vmUOPrRndgoHjDti1gOPqlyXoifcRNGQzUd31lDyfHmob1Gp35vSr+P6vilcQ5Egtyd8YF/ySg9NhPM+9M/IOaHwp5+PSZayXTvCogEUwlatC3J8LLwYtcWB8EuDXQVuCkV5/B4eNHb7wGBs87LBDS+xjdVSn09wq1G8dFM+9tSUhIGneLvUdniKxKpTYljCpu3j7rVWlHj/P23v4NPGUEyeCQnexe9lJjzEQqMjJs+EzNAX6B98dBZVRmroJx95x/A/6gln18EyfCUsl+qdXb/tjvfbw+mwforpUOBz4XLVoBwAn3aWnfeH246NyBXhrq7TTN5lNSP9RkU+puUJm3W2Tsdq0nZWM07srk7MwQrZSRysjjGWBLRJNsNbfj2JMR4AbxpU1XLAb9Mxfpsq5EjMuuiR8L0JiHOOBX3hiUvOmavN0nMueSzcceFk0BK4pMqLo7vDD1Z0qrtDx7Itt4Xwm9UqbMmk8S0Dtuzb2pvOU99Z1nLTOfleNmvfZfP2pYZmPfajwosKdDBNpacNpVGGsWX9CyDI8Xq/Sj6QAAAAJXRFWHRkYXRlOmNyZWF0ZQAyMDE0LTExLTEwVDAzOjE3OjU4LTA1OjAwF+tHyQAAACV0RVh0ZGF0ZTptb2RpZnkAMjAxNC0xMS0xMFQwMzoxNzo1OC0wNTowMGa2/3UAAAAASUVORK5CYII=",
                height: 20,
                width: 20,
                type: "esriPMS",
                angle: 0
              })
            };
          }
        }, {
          key: "_createWindBarbsRenderer",
          value: function _createWindBarbsRenderer() {
            var e = Array.from(Array(31).keys()).map(function (e) {
              return 5 * e;
            }),
                M = [{
              range: "0-5",
              path: "M20 20 M5 20 A15 15 0 1 0 35 20 A15 15 0 1 0 5 20 M20 20 M10 20 A10 10 0 1 0 30 20 A10 10 0 1 0 10 20",
              imageData: "PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIGhlaWdodD0iMzJweCIgd2lkdGg9IjMycHgiIHZpZXdCb3g9IjkgMCAyNiA0MSI+CiAgPHBhdGggZD0iTTIwIDIwIE01IDIwIEExNSAxNSAwIDEgMCAzNSAyMCBBMTUgMTUgMCAxIDAgNSAyMCBNMjAgMjAgTTEwIDIwIEExMCAxMCAwIDEgMCAzMCAyMCBBMTAgMTAgMCAxIDAgMTAgMjAiIHN0eWxlPSJzdHJva2U6cmdiKDAsMCwwKTtzdHJva2Utd2lkdGg6MS41Ii8+CiA8L3N2Zz4="
            }, {
              range: "5-10",
              path: "M25 0 L25 40 M25 35 L17.5 37.5",
              imageData: "PHN2ZyB3aWR0aD0iMjAiIGhlaWdodD0iMjAiIHZpZXdCb3g9IjE1IDIwIDIwIDIwIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgogIDxwYXRoIGQ9Ik0yNSAwIEwyNSA0MCBNMjUgMzUgTDE3LjUgMzcuNSIgc3R5bGU9InN0cm9rZTpyZ2IoMCwwLDApO3N0cm9rZS13aWR0aDoxLjUiLz4KIDwvc3ZnPg=="
            }, {
              range: "10-15",
              path: "M25 0 L25 40 L10 45 L25 40",
              imageData: "PHN2ZyB3aWR0aD0iMjAiIGhlaWdodD0iMjAiIHZpZXdCb3g9IjkgMCAyNyA0NiIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KICA8cGF0aCBkPSJNMjUgMCBMMjUgNDAgTDEwIDQ1IEwyNSA0MCIgc3R5bGU9InN0cm9rZTpyZ2IoMCwwLDApO3N0cm9rZS13aWR0aDoxLjUiLz4KIDwvc3ZnPg=="
            }, {
              range: "15-20",
              path: "M25 0 L25 40 L10 45 L25 40 M25 35 L17.5 37.5",
              imageData: "PHN2ZyB3aWR0aD0iMjAiIGhlaWdodD0iMjAiIHZpZXdCb3g9IjEyIDAgMTUgNDUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CiAgPHBhdGggZD0iTTI1IDAgTDI1IDQwIEwxMCA0NSBMMjUgNDAgTTI1IDM1IEwxNy41IDM3LjUiIHN0eWxlPSJzdHJva2U6cmdiKDAsMCwwKTtzdHJva2Utd2lkdGg6MS41Ii8+CiA8L3N2Zz4="
            }, {
              range: "20-25",
              path: "M25 0 L25 40 L10 45 L25 40 M25 35 L10 40",
              imageData: "PHN2ZyB3aWR0aD0iMjAiIGhlaWdodD0iMjAiIHZpZXdCb3g9IjkgMCAyNiA0NiIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KICA8cGF0aCBkPSJNMjUgMCBMMjUgNDAgTDEwIDQ1IEwyNSA0MCBNMjUgMzUgTDEwIDQwIiBzdHlsZT0ic3Ryb2tlOnJnYigwLDAsMCk7c3Ryb2tlLXdpZHRoOjEuNSIvPgogPC9zdmc+"
            }, {
              range: "25-30",
              path: "M25 0 L25 40 L10 45 L25 40 M25 35 L10 40 L25 35 M25 30 L17.5 32.5",
              imageData: "PHN2ZyB3aWR0aD0iMjAiIGhlaWdodD0iMjAiIHZpZXdCb3g9IjkgMCAyNiA0NiIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KICA8cGF0aCBkPSJNMjUgMCBMMjUgNDAgTDEwIDQ1IEwyNSA0MCBNMjUgMzUgTDEwIDQwIEwyNSAzNSBNMjUgMzAgTDE3LjUgMzIuNSIgc3R5bGU9InN0cm9rZTpyZ2IoMCwwLDApO3N0cm9rZS13aWR0aDoxLjUiLz4KIDwvc3ZnPg=="
            }, {
              range: "30-35",
              path: "M25 0 L25 40 L10 45 L25 40 M25 35 L10 40 L25 35 M25 30 L10 35",
              imageData: "PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMHB4IiBoZWlnaHQ9IjIwcHgiIHZpZXdCb3g9IjkgMCAyNiA0NiI+CiAgPHBhdGggZD0iTTI1IDAgTDI1IDQwIEwxMCA0NSBMMjUgNDAgTTI1IDM1IEwxMCA0MCBMMjUgMzUgTTI1IDMwIEwxMCAzNSIgc3R5bGU9InN0cm9rZTpyZ2IoMCwwLDApO3N0cm9rZS13aWR0aDoxLjUiLz4KIDwvc3ZnPg=="
            }, {
              range: "35-40",
              path: "M25 0 L25 40 L10 45 L25 40 M25 35 L10 40 L25 35 M25 30 L10 35 L25 30 M25 25 L17.5 27.5",
              imageData: "PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMHB4IiBoZWlnaHQ9IjIwcHgiIHZpZXdCb3g9IjkgMCAyNiA0NiI+CiAgPHBhdGggZD0iTTI1IDAgTDI1IDQwIEwxMCA0NSBMMjUgNDAgTTI1IDM1IEwxMCA0MCBMMjUgMzUgTTI1IDMwIEwxMCAzNSBMMjUgMzAgTTI1IDI1IEwxNy41IDI3LjUiIHN0eWxlPSJzdHJva2U6cmdiKDAsMCwwKTtzdHJva2Utd2lkdGg6MS41Ii8+CiA8L3N2Zz4="
            }, {
              range: "40-45",
              path: "M25 0 L25 40 L10 45 L25 40 M25 35 L10 40 L25 35 M25 30 L10 35 L25 30 M25 25 L10 30",
              imageData: "PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMHB4IiBoZWlnaHQ9IjIwcHgiIHZpZXdCb3g9IjkgMCAyNiA0NiI+CiAgPHBhdGggZD0iTTI1IDAgTDI1IDQwIEwxMCA0NSBMMjUgNDAgTTI1IDM1IEwxMCA0MCBMMjUgMzUgTTI1IDMwIEwxMCAzNSBMMjUgMzAgTTI1IDI1IEwxMCAzMCIgc3R5bGU9InN0cm9rZTpyZ2IoMCwwLDApO3N0cm9rZS13aWR0aDoxLjUiLz4KIDwvc3ZnPg=="
            }, {
              range: "45-50",
              path: "M25 0 L25 40 L10 45 L25 40 M25 35 L10 40 L25 35 M25 30 L10 35 L25 30 M25 25 L10 30 L25 25 M25 20 L17.5 22.5",
              imageData: "PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMHB4IiBoZWlnaHQ9IjIwcHgiIHZpZXdCb3g9IjkgMCAyNiA0NiI+CiAgPHBhdGggZD0iTTI1IDAgTDI1IDQwIEwxMCA0NSBMMjUgNDAgTTI1IDM1IEwxMCA0MCBMMjUgMzUgTTI1IDMwIEwxMCAzNSBMMjUgMzAgTTI1IDI1IEwxMCAzMCBMMjUgMjUgTTI1IDIwIEwxNy41IDIyLjUiIHN0eWxlPSJzdHJva2U6cmdiKDAsMCwwKTtzdHJva2Utd2lkdGg6MS41Ii8+CiA8L3N2Zz4="
            }, {
              range: "50-55",
              path: "M25 0 L25 40 L10 40 L25 35",
              imageData: "PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMHB4IiBoZWlnaHQ9IjIwcHgiIHZpZXdCb3g9IjkgMCAyNiA0MSI+CiAgPHBhdGggZD0iTTI1IDAgTDI1IDQwIEwxMCA0MCBMMjUgMzUiIHN0eWxlPSJzdHJva2U6cmdiKDAsMCwwKTtzdHJva2Utd2lkdGg6MS41Ii8+CiA8L3N2Zz4="
            }, {
              range: "55-60",
              path: "M25 0 L25 40 L10 40 L25 35 M25 30 L17.5 32.5",
              imageData: "PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMHB4IiBoZWlnaHQ9IjIwcHgiIHZpZXdCb3g9IjkgMCAyNiA0MSI+CiAgPHBhdGggZD0iTTI1IDAgTDI1IDQwIEwxMCA0MCBMMjUgMzUgTTI1IDMwIEwxNy41IDMyLjUiIHN0eWxlPSJzdHJva2U6cmdiKDAsMCwwKTtzdHJva2Utd2lkdGg6MS41Ii8+CiA8L3N2Zz4="
            }, {
              range: "60-65",
              path: "M25 0 L25 40 L10 40 L25 35 M25 30 L10 35",
              imageData: "PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIzMnB4IiBoZWlnaHQ9IjMycHgiIHZpZXdCb3g9IjkgMCAyNiA0MSI+CiAgPHBhdGggZD0iTTI1IDAgTDI1IDQwIEwxMCA0MCBMMjUgMzUgTTI1IDMwIEwxMCAzNSIgc3R5bGU9InN0cm9rZTpyZ2IoMCwwLDApO3N0cm9rZS13aWR0aDoxLjUiLz4KIDwvc3ZnPg=="
            }, {
              range: "65-70",
              path: "M25 0 L25 40 L10 40 L25 35 M25 30 L10 35 L25 30 M25 25 L17.5 27.5",
              imageData: "PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIzMnB4IiBoZWlnaHQ9IjMycHgiIHZpZXdCb3g9IjkgMCAyNiA0MSI+CiAgPHBhdGggZD0iTTI1IDAgTDI1IDQwIEwxMCA0MCBMMjUgMzUgTTI1IDMwIEwxMCAzNSBMMjUgMzAgTTI1IDI1IEwxNy41IDI3LjUiIHN0eWxlPSJzdHJva2U6cmdiKDAsMCwwKTtzdHJva2Utd2lkdGg6MS41Ii8+CiA8L3N2Zz4="
            }, {
              range: "70-75",
              path: "M25 0 L25 40 L10 40 L25 35 M25 30 L10 35 L25 30 M25 25 L10 30",
              imageData: "PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIzMnB4IiBoZWlnaHQ9IjMycHgiIHZpZXdCb3g9IjkgMCAyNiA0MSI+CiAgPHBhdGggZD0iTTI1IDAgTDI1IDQwIEwxMCA0MCBMMjUgMzUgTTI1IDMwIEwxMCAzNSBMMjUgMzAgTTI1IDI1IEwxMCAzMCIgc3R5bGU9InN0cm9rZTpyZ2IoMCwwLDApO3N0cm9rZS13aWR0aDoxLjUiLz4KIDwvc3ZnPg=="
            }, {
              range: "75-80",
              path: "M25 0 L25 40 L10 40 L25 35 M25 30 L10 35 L25 30 M25 25 L10 30 L25 25 M25 20 L17.5 22.5",
              imageData: "PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIzMnB4IiBoZWlnaHQ9IjMycHgiIHZpZXdCb3g9IjkgMCAyNiA0MSI+CiAgPHBhdGggZD0iTTI1IDAgTDI1IDQwIEwxMCA0MCBMMjUgMzUgTTI1IDMwIEwxMCAzNSBMMjUgMzAgTTI1IDI1IEwxMCAzMCBMMjUgMjUgTTI1IDIwIEwxNy41IDIyLjUiIHN0eWxlPSJzdHJva2U6cmdiKDAsMCwwKTtzdHJva2Utd2lkdGg6MS41Ii8+CiA8L3N2Zz4="
            }, {
              range: "80-85",
              path: "M25 0 L25 40 L10 40 L25 35 M25 30 L10 35 L25 30 M25 25 L10 30 L25 25 M25 20 L10 25",
              imageData: "PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIzMnB4IiBoZWlnaHQ9IjMycHgiIHZpZXdCb3g9IjkgMCAyNiA0MSI+CiAgPHBhdGggZD0iTTI1IDAgTDI1IDQwIEwxMCA0MCBMMjUgMzUgTTI1IDMwIEwxMCAzNSBMMjUgMzAgTTI1IDI1IEwxMCAzMCBMMjUgMjUgTTI1IDIwIEwxMCAyNSIgc3R5bGU9InN0cm9rZTpyZ2IoMCwwLDApO3N0cm9rZS13aWR0aDoxLjUiLz4KIDwvc3ZnPg=="
            }, {
              range: "85-90",
              path: "M25 0 L25 40 L10 40 L25 35 M25 30 L10 35 L25 30 M25 25 L10 30 L25 25 M25 20 L10 25 L25 20 M25 15 L17.5 17.5",
              imageData: "PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIzMnB4IiBoZWlnaHQ9IjMycHgiIHZpZXdCb3g9IjkgMCAyNiA0MSI+CiAgPHBhdGggZD0iTTI1IDAgTDI1IDQwIEwxMCA0MCBMMjUgMzUgTTI1IDMwIEwxMCAzNSBMMjUgMzAgTTI1IDI1IEwxMCAzMCBMMjUgMjUgTTI1IDIwIEwxMCAyNSBMMjUgMjAgTTI1IDE1IEwxNy41IDE3LjUiIHN0eWxlPSJzdHJva2U6cmdiKDAsMCwwKTtzdHJva2Utd2lkdGg6MS41Ii8+CiA8L3N2Zz4="
            }, {
              range: "90-95",
              path: "M25 0 L25 40 L10 40 L25 35 M25 30 L10 35 L25 30 M25 25 L10 30 L25 25 M25 20 L10 25 L25 20 M25 15 L10 20",
              imageData: "PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIzMnB4IiBoZWlnaHQ9IjMycHgiIHZpZXdCb3g9IjkgMCAyNiA0MSI+CiAgPHBhdGggZD0iTTI1IDAgTDI1IDQwIEwxMCA0MCBMMjUgMzUgTTI1IDMwIEwxMCAzNSBMMjUgMzAgTTI1IDI1IEwxMCAzMCBMMjUgMjUgTTI1IDIwIEwxMCAyNSBMMjUgMjAgTTI1IDE1IEwxMCAyMCIgc3R5bGU9InN0cm9rZTpyZ2IoMCwwLDApO3N0cm9rZS13aWR0aDoxLjUiLz4KIDwvc3ZnPg=="
            }, {
              range: "95-100",
              path: "M25 0 L25 40 L10 40 L25 35 M25 30 L10 35 L25 30 M25 25 L10 30 L25 25 M25 20 L10 25 L25 20 M25 15 L10 20 L25 15 M25 10 L17.5 12.5",
              imageData: "PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIzMnB4IiBoZWlnaHQ9IjMycHgiIHZpZXdCb3g9IjkgMCAyNiA0MSI+CiAgPHBhdGggZD0iTTI1IDAgTDI1IDQwIEwxMCA0MCBMMjUgMzUgTTI1IDMwIEwxMCAzNSBMMjUgMzAgTTI1IDI1IEwxMCAzMCBMMjUgMjUgTTI1IDIwIEwxMCAyNSBMMjUgMjAgTTI1IDE1IEwxMCAyMCBMMjUgMTUgTTI1IDEwIEwxNy41IDEyLjUiIHN0eWxlPSJzdHJva2U6cmdiKDAsMCwwKTtzdHJva2Utd2lkdGg6MS41Ii8+CiA8L3N2Zz4="
            }, {
              range: "100-105",
              path: "M25 0 L25 40 L10 40 L25 35 L10 35 L25 30",
              imageData: "PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIzMnB4IiBoZWlnaHQ9IjMycHgiIHZpZXdCb3g9IjkgMCAyNiA0MSI+CiAgPHBhdGggZD0iTTI1IDAgTDI1IDQwIEwxMCA0MCBMMjUgMzUgTDEwIDM1IEwyNSAzMCIgc3R5bGU9InN0cm9rZTpyZ2IoMCwwLDApO3N0cm9rZS13aWR0aDoxLjUiLz4KIDwvc3ZnPg=="
            }, {
              range: "105-110",
              path: "M25 0 L25 40 L10 40 L25 35 L10 35 L25 30 M25 25 L17.5 27.5",
              imageData: "PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIGhlaWdodD0iMzJweCIgd2lkdGg9IjMycHgiIHZpZXdCb3g9IjkgMCAyNiA0MSI+CiAgPHBhdGggZD0iTTI1IDAgTDI1IDQwIEwxMCA0MCBMMjUgMzUgTDEwIDM1IEwyNSAzMCBNMjUgMjUgTDE3LjUgMjcuNSIgc3R5bGU9InN0cm9rZTpyZ2IoMCwwLDApO3N0cm9rZS13aWR0aDoxLjUiLz4KIDwvc3ZnPg=="
            }, {
              range: "110-115",
              path: "M25 0 L25 40 L10 40 L25 35 L10 35 L25 30 M25 25 L10 30",
              imageData: "PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIGhlaWdodD0iMzJweCIgd2lkdGg9IjMycHgiIHZpZXdCb3g9IjkgMCAyNiA0MSI+CiAgPHBhdGggZD0iTTI1IDAgTDI1IDQwIEwxMCA0MCBMMjUgMzUgTDEwIDM1IEwyNSAzMCBNMjUgMjUgTDEwIDMwIiBzdHlsZT0ic3Ryb2tlOnJnYigwLDAsMCk7c3Ryb2tlLXdpZHRoOjEuNSIvPgogPC9zdmc+"
            }, {
              range: "115-120",
              path: "M25 0 L25 40 L10 40 L25 35 L10 35 L25 30 M25 25 L10 30 M25 25 M25 20 L17.5 22.5",
              imageData: "PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIGhlaWdodD0iMzJweCIgd2lkdGg9IjMycHgiIHZpZXdCb3g9IjkgMCAyNiA0MSI+CiAgPHBhdGggZD0iTTI1IDAgTDI1IDQwIEwxMCA0MCBMMjUgMzUgTDEwIDM1IEwyNSAzMCBNMjUgMjUgTDEwIDMwIE0yNSAyNSBNMjUgMjAgTDE3LjUgMjIuNSIgc3R5bGU9InN0cm9rZTpyZ2IoMCwwLDApO3N0cm9rZS13aWR0aDoxLjUiLz4KIDwvc3ZnPg=="
            }, {
              range: "120-125",
              path: "M25 0 L25 40 L10 40 L25 35 L10 35 L25 30 M25 25 L10 30 M25 25 M25 20 L10 25",
              imageData: "PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIGhlaWdodD0iMzJweCIgd2lkdGg9IjMycHgiIHZpZXdCb3g9IjkgMCAyNiA0MSI+CiAgPHBhdGggZD0iTTI1IDAgTDI1IDQwIEwxMCA0MCBMMjUgMzUgTDEwIDM1IEwyNSAzMCBNMjUgMjUgTDEwIDMwIE0yNSAyNSBNMjUgMjAgTDEwIDI1IiBzdHlsZT0ic3Ryb2tlOnJnYigwLDAsMCk7c3Ryb2tlLXdpZHRoOjEuNSIvPgogPC9zdmc+"
            }, {
              range: "125-130",
              path: "M25 0 L25 40 L10 40 L25 35 L10 35 L25 30 M25 25 L10 30 M25 25 M25 20 L10 25 M25 20 M25 15 L17.5 17.5",
              imageData: "PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIGhlaWdodD0iMzJweCIgd2lkdGg9IjMycHgiIHZpZXdCb3g9IjkgMCAyNiA0MSI+CiAgPHBhdGggZD0iTTI1IDAgTDI1IDQwIEwxMCA0MCBMMjUgMzUgTDEwIDM1IEwyNSAzMCBNMjUgMjUgTDEwIDMwIE0yNSAyNSBNMjUgMjAgTDEwIDI1IE0yNSAyMCBNMjUgMTUgTDE3LjUgMTcuNSIgc3R5bGU9InN0cm9rZTpyZ2IoMCwwLDApO3N0cm9rZS13aWR0aDoxLjUiLz4KIDwvc3ZnPg=="
            }, {
              range: "130-135",
              path: "M25 0 L25 40 L10 40 L25 35 L10 35 L25 30 M25 25 L10 30 M25 25 M25 20 L10 25 M25 20 M25 15 L10 20",
              imageData: "PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIGhlaWdodD0iMzJweCIgd2lkdGg9IjMycHgiIHZpZXdCb3g9IjkgMCAyNiA0MSI+CiAgPHBhdGggZD0iTTI1IDAgTDI1IDQwIEwxMCA0MCBMMjUgMzUgTDEwIDM1IEwyNSAzMCBNMjUgMjUgTDEwIDMwIE0yNSAyNSBNMjUgMjAgTDEwIDI1IE0yNSAyMCBNMjUgMTUgTDEwIDIwIiBzdHlsZT0ic3Ryb2tlOnJnYigwLDAsMCk7c3Ryb2tlLXdpZHRoOjEuNSIvPgogPC9zdmc+"
            }, {
              range: "135-140",
              path: "M25 0 L25 40 L10 40 L25 35 L10 35 L25 30 M25 25 L10 30 M25 25 M25 20 L10 25 M25 20 M25 15 L10 20 M25 15 M25 10 L17.5 12.5",
              imageData: "PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIGhlaWdodD0iMzJweCIgd2lkdGg9IjMycHgiIHZpZXdCb3g9IjkgMCAyNiA0MSI+CiAgPHBhdGggZD0iTTI1IDAgTDI1IDQwIEwxMCA0MCBMMjUgMzUgTDEwIDM1IEwyNSAzMCBNMjUgMjUgTDEwIDMwIE0yNSAyNSBNMjUgMjAgTDEwIDI1IE0yNSAyMCBNMjUgMTUgTDEwIDIwIE0yNSAxNSBNMjUgMTAgTDE3LjUgMTIuNSIgc3R5bGU9InN0cm9rZTpyZ2IoMCwwLDApO3N0cm9rZS13aWR0aDoxLjUiLz4KIDwvc3ZnPg=="
            }, {
              range: "140-145",
              path: "M25 0 L25 40 L10 40 L25 35 L10 35 L25 30 M25 25 L10 30 M25 25 M25 20 L10 25 M25 20 M25 15 L10 20 M25 15 M25 10 L17.5 12.5",
              imageData: "PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIGhlaWdodD0iMzJweCIgd2lkdGg9IjMycHgiIHZpZXdCb3g9IjkgMCAyNiA0MSI+CiAgPHBhdGggZD0iTTI1IDAgTDI1IDQwIEwxMCA0MCBMMjUgMzUgTDEwIDM1IEwyNSAzMCBNMjUgMjUgTDEwIDMwIE0yNSAyNSBNMjUgMjAgTDEwIDI1IE0yNSAyMCBNMjUgMTUgTDEwIDIwIE0yNSAxNSBNMjUgMTAgTDEwIDE1IiBzdHlsZT0ic3Ryb2tlOnJnYigwLDAsMCk7c3Ryb2tlLXdpZHRoOjEuNSIvPgogPC9zdmc+"
            }, {
              range: "145-150",
              path: "M25 0 L25 40 L10 40 L25 35 L10 35 L25 30 M25 25 L10 30 M25 25 M25 20 L10 25 M25 20 M25 15 L10 20 M25 15 M25 10 L17.5 12.5",
              imageData: "PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIGhlaWdodD0iMzJweCIgd2lkdGg9IjMycHgiIHZpZXdCb3g9IjkgMCAyNiA0MSI+CiAgPHBhdGggZD0iTTI1IDAgTDI1IDQwIEwxMCA0MCBMMjUgMzUgTDEwIDM1IEwyNSAzMCBNMjUgMjUgTDEwIDMwIE0yNSAyNSBNMjUgMjAgTDEwIDI1IE0yNSAyMCBNMjUgMTUgTDEwIDIwIE0yNSAxNSBNMjUgMTAgTDEwIDE1IE0yNSAxMCBNMjUgNSBMMTcuNSA3LjUiIHN0eWxlPSJzdHJva2U6cmdiKDAsMCwwKTtzdHJva2Utd2lkdGg6MS41Ii8+CiA8L3N2Zz4="
            }],
                i = _symbols_PictureMarkerSymbol_js__WEBPACK_IMPORTED_MODULE_18__["default"].fromJSON({
              imageData: "iVBORw0KGgoAAAANSUhEUgAAACgAAAApCAQAAADtq6NDAAAABGdBTUEAALGPC/xhBQAAAAFzUkdCAK7OHOkAAAAgY0hSTQAAeiYAAICEAAD6AAAAgOgAAHUwAADqYAAAOpgAABdwnLpRPAAAAAJiS0dEAP+Hj8y/AAAACXBIWXMAAA7DAAAOwwHHb6hkAAAEY0lEQVRIx5XXWWxWRRQH8N+d+31tUdGAVjGglYJABFEBY91jfDAg7piYaFTccA++uMQEFRcSXlATtxiXqMQt4G4iisYl0ai4sIQYtVFZ1KIFKdTS0l4f7vRCS5fPebozc+bM/2z/Mzcx0AgSiUxXnKfIdMn875FIhX53U2n/B/s+kKM4UINTjTBZImixxnrv+9a2iL6zEoUBXcoudrWj/OtHm3wt02lfU9Qao9OnHvIhgmww84MEl1qnxfNmGrqHxAizLdPpC6chGcAxKGGcL+30gOERf1BSpUqVslQSV8d5ReZFe8VQ9avufJn31cWwlJV7iafKStGOE/1qvfH9qUxxu8ydUdmuSKbGO8YUdT2inKLG69pM70tliktl5qIkCAJGmusDG7Vqsc0WjZa4UBlBiA5YZIcjYzB7qDtH5kaUJFLs7RGZTZ42W4PRRmtwvbdt1+wGiaS4drEtDttdZYIDNVuAclR3vA3+dI3qHqmVSy7U6Tv1MScCPvPR7nIpFlsdCy3FdTLPGhK92e2CUITjMJ9ocwKxnsZqc3O3JwMma3d6UVLnyVxB4aXemZqvPqLdpJhW3KVVbY4yYImPo6M5Urv50fj+0z/FG9YaEiENs8UtMfXUaTeTePNHlhXfA1UU+2lyD1Il3Gtt9+adfpNG7dNlpg2U/T3KYLZ2dUWFdTgp3/rQ4sK973qnInV5TIf40x3dhvrJPBiqyWUo4wAtLqhQYS71qK+QKOFRywmGK/kpikzV6WMKhh58vGWs4TIJNjiEYLIuP8Tt4/zmLyqk+AyrJSbF+Qq1DgqRUPMxyl+9q3IQhX/rMCJ6tEunriDs1oSyQZKlr9AkhT2ZIARbJfaJS1vtVbHB+Rgi0RK/y1q1BWsEEyLoz40xtGKcARPVWB1BTPO7f4LNtpkUl1aoMbViLyZo0GRjPD3BxnxjqXeLYlvhqYrzMMG3HoyJXa3JjfnGlbYYFlP7Jh3qKsKY4hQ7TY0nG+xwRL61n63mxHtqNHosigyMLmClNwvuecFnOZB88nNBDzNkzhxEZaKMBVoKapggMzvHHXBEpNSSFAvtcFRsVn0bW8LlMmcXs+c0Kne3gRR32+zg4uXwjC6zit6Wt4a8LXVfcp/MtQXHn2ynGbuCmb8GvvFeJLEE82ReU9/n6+dkq2x3buG9Wn94smcgAw631RPR7BTH+kbmHReZoEpOdEe7zWqZl40s0JWs9Hmv7hjBHqPDwsjGKVJnWWqjbdZp1KhJi0aPmxYZsIRhlttgeF+Jlke41QcOQKoqilSb6HJzSvNG3G/UoWnxwsmt+sVaYwd63dRbqdnMyCPVeyRPvpYgdavM22oGKoMUVRbJfOWMwidJ8Zzb1UvmWK/VVUXzHaTjjrVYh1897HT7xxYEVUaa5SWb/WO+YUWa9SrwvigzM8YlzlYv2GSdVCYxxlBtVnnFq5olwp5/BEk/OLsf5LUmG2+inRJdVvjZ97ZH9/zP34ug1O91pf4p+D+JYBpvrKxfbwAAACV0RVh0ZGF0ZTpjcmVhdGUAMjAxNC0xMS0xMFQwMzoxMjowOS0wNTowMB9ViV0AAAAldEVYdGRhdGU6bW9kaWZ5ADIwMTQtMTEtMTBUMDM6MTI6MDktMDU6MDBuCDHhAAAAAElFTkSuQmCC",
              height: 20,
              width: 20,
              type: "esriPMS",
              angle: 0
            }),
                a = e.map(function (a, t) {
              var I;
              if (t !== e.length - 1) if (0 === t) I = {
                minValue: a,
                maxValue: e[t + 1],
                symbol: i
              };else {
                var _i5 = _symbols_PictureMarkerSymbol_js__WEBPACK_IMPORTED_MODULE_18__["default"].fromJSON({
                  type: "esriPMS",
                  imageData: M[t].imageData,
                  contentType: "image/svg+xml",
                  height: 32,
                  width: 32,
                  angle: 0
                });

                I = {
                  minValue: a,
                  maxValue: e[t + 1],
                  symbol: _i5
                };
              }
              return new _support_ClassBreakInfo_js__WEBPACK_IMPORTED_MODULE_26__["default"](I);
            });

            return {
              defaultSymbol: i,
              classBreakInfos: a
            };
          }
        }, {
          key: "_getClassBreaks",
          value: function _getClassBreaks(e, M) {
            var _this3 = this;

            return M.map(function (M, i) {
              return new _support_ClassBreakInfo_js__WEBPACK_IMPORTED_MODULE_26__["default"]({
                minValue: e[i],
                maxValue: e[i + 1],
                symbol: _this3._getDefaultSymbol(new _Color_js__WEBPACK_IMPORTED_MODULE_16__["default"](M))
              });
            });
          }
        }]);

        return H;
      }(Object(_mixins_VisualVariablesMixin_js__WEBPACK_IMPORTED_MODULE_25__["VisualVariablesMixin"])(_core_JSONSupport_js__WEBPACK_IMPORTED_MODULE_13__["JSONSupport"]));

      Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_5__["property"])({
        type: String,
        json: {
          write: !0
        }
      })], b.prototype, "attributeField", void 0), Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_5__["property"])({
        type: z.apiValues,
        json: {
          type: z.jsonValues,
          read: {
            reader: z.read
          },
          write: {
            writer: z.write
          }
        }
      })], b.prototype, "flowRepresentation", void 0), Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_5__["property"])({
        type: ["geographic", "arithmetic"],
        json: {
          write: !0
        }
      })], b.prototype, "rotationType", void 0), Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_5__["property"])({
        type: Z.apiValues,
        json: {
          type: Z.jsonValues,
          read: {
            reader: Z.read
          },
          write: {
            writer: Z.write
          }
        }
      })], b.prototype, "style", void 0), Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_5__["property"])({
        json: {
          write: !0
        }
      })], b.prototype, "symbolTileSize", void 0), Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_5__["property"])({
        type: B.apiValues,
        json: {
          type: B.jsonValues,
          write: {
            writer: B.write
          }
        }
      })], b.prototype, "inputUnit", void 0), Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_reader_js__WEBPACK_IMPORTED_MODULE_8__["reader"])("inputUnit")], b.prototype, "readInputUnit", null), Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_5__["property"])({
        type: B.apiValues,
        json: {
          type: B.jsonValues,
          read: {
            reader: B.read
          },
          write: {
            writer: B.write
          }
        }
      })], b.prototype, "outputUnit", void 0), Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_reader_js__WEBPACK_IMPORTED_MODULE_8__["reader"])("outputUnit")], b.prototype, "readOutputUnit", null), Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_enumeration_js__WEBPACK_IMPORTED_MODULE_7__["enumeration"])({
        vectorField: "vector-field"
      })], b.prototype, "type", void 0), Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_5__["property"])({
        type: _ClassBreaksRenderer_js__WEBPACK_IMPORTED_MODULE_27__["default"],
        dependsOn: ["style", "attributeField"]
      })], b.prototype, "styleRenderer", null), Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_5__["property"])({
        type: _visualVariables_SizeVariable_js__WEBPACK_IMPORTED_MODULE_24__["default"],
        dependsOn: ["visualVariables", "symbolTileSize"]
      })], b.prototype, "sizeVariables", null), Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_5__["property"])({
        type: _visualVariables_RotationVariable_js__WEBPACK_IMPORTED_MODULE_22__["default"],
        dependsOn: ["visualVariables", "rotationType"]
      })], b.prototype, "rotationVariables", null), b = _H = Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_subclass_js__WEBPACK_IMPORTED_MODULE_9__["subclass"])("esri.renderers.VectorFieldRenderer")], b);
      var h = b;
      /* harmony default export */

      __webpack_exports__["default"] = h;
      /***/
    },

    /***/
    "Gdt4":
    /*!**************************************************************************************!*\
      !*** ./node_modules/@arcgis/core/layers/support/rasterFunctions/vectorFieldUtils.js ***!
      \**************************************************************************************/

    /*! exports provided: convertVectorFieldData, convertVectorFieldUnit, getUnitConversionFactor, isValidPixelBlock */

    /***/
    function Gdt4(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "convertVectorFieldData", function () {
        return p;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "convertVectorFieldUnit", function () {
        return a;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "getUnitConversionFactor", function () {
        return n;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "isValidPixelBlock", function () {
        return r;
      });
      /* harmony import */


      var _PixelBlock_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ../PixelBlock.js */
      "Piei");
      /*
      All material copyright ESRI, All Rights Reserved, unless otherwise specified.
      See https://js.arcgis.com/4.18/esri/copyright.txt for details.
      */


      var t = 180 / Math.PI,
          r = function r(e) {
        return e && "esri.layers.support.PixelBlock" === e.declaredClass && e.pixels && e.pixels.length > 0;
      },
          i = new Map();

      function n(e, t) {
        return i.get(t) / i.get(e) || 1;
      }

      function o(e) {
        return (450 - e) % 360;
      }

      function s(e) {
        var r = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : "geographic";

        var _e21 = _slicedToArray(e, 2),
            i = _e21[0],
            n = _e21[1],
            s = Math.sqrt(i * i + n * n);

        var l = Math.atan2(n, i) * t;
        return l = (360 + l) % 360, "geographic" === r && (l = o(l)), [s, l];
      }

      function l(e) {
        var r = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : "geographic";
        var i = e[1];
        "geographic" === r && (i = o(i)), i %= 360;
        var n = e[0];
        return [n * Math.cos(i / t), n * Math.sin(i / t)];
      }

      function p(t, i) {
        var n = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : "geographic";
        var o = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : 1;
        if (!r(t)) return t;

        var p = t.pixels,
            a = t.width,
            c = t.height,
            h = a * c,
            u = p[0],
            g = p[1],
            f = _PixelBlock_js__WEBPACK_IMPORTED_MODULE_0__["default"].createEmptyBand(t.pixelType, h),
            d = _PixelBlock_js__WEBPACK_IMPORTED_MODULE_0__["default"].createEmptyBand(t.pixelType, h);

        var x = 0;

        for (var e = 0; e < c; e++) {
          for (var _e22 = 0; _e22 < a; _e22++) {
            var _s4, _s5, _l, _l2;

            "vector-uv" === i ? ((_s4 = s([u[x], g[x]], n), _s5 = _slicedToArray(_s4, 2), f[x] = _s5[0], d[x] = _s5[1], _s4), f[x] *= o) : ((_l = l([u[x], g[x]], n), _l2 = _slicedToArray(_l, 2), f[x] = _l2[0], d[x] = _l2[1], _l), f[x] *= o, d[x] *= o), x++;
          }
        }

        var m = new _PixelBlock_js__WEBPACK_IMPORTED_MODULE_0__["default"]({
          pixelType: t.pixelType,
          width: t.width,
          height: t.height,
          mask: t.mask,
          validPixelCount: t.validPixelCount,
          maskIsAlpha: t.maskIsAlpha,
          pixels: [f, d]
        });
        return m.updateStatistics(), m;
      }

      function a(e, t) {
        var i = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 1;
        if (1 === i || !r(e)) return e;
        var n = e.clone(),
            o = n.pixels,
            s = n.width,
            l = n.height,
            p = o[0],
            a = o[1];
        var c = 0;

        for (var _e23 = 0; _e23 < l; _e23++) {
          for (var _e24 = 0; _e24 < s; _e24++) {
            "vector-uv" === t ? (p[c] *= i, a[c] *= i) : p[c] *= i, c++;
          }
        }

        return n.updateStatistics(), n;
      }

      i.set("meter-per-second", 1), i.set("kilometer-per-hour", .277778), i.set("knots", .514444), i.set("feet-per-second", .3048), i.set("mile-per-hour", .44704);
      /***/
    },

    /***/
    "HM2S":
    /*!*****************************************************************************!*\
      !*** ./node_modules/@arcgis/core/renderers/support/rasterRendererHelper.js ***!
      \*****************************************************************************/

    /*! exports provided: createClassBreaksRenderer, createColormapRenderer, createDefaultRenderer, createShadedReliefRenderer, createStretchRenderer, createUVRenderer, getClassField, getDefaultBandCombination, getDefaultInterpolation, getSupportedRendererTypes, getWellKnownBandIndexes, isClassBreaksSupported, isColormapRendererSupported, isShadedReliefRendererSupported, isUVRendererSupported, isVectorFieldRendererSupported */

    /***/
    function HM2S(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "createClassBreaksRenderer", function () {
        return q;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "createColormapRenderer", function () {
        return B;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "createDefaultRenderer", function () {
        return y;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "createShadedReliefRenderer", function () {
        return I;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "createStretchRenderer", function () {
        return j;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "createUVRenderer", function () {
        return k;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "getClassField", function () {
        return L;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "getDefaultBandCombination", function () {
        return T;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "getDefaultInterpolation", function () {
        return x;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "getSupportedRendererTypes", function () {
        return w;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "getWellKnownBandIndexes", function () {
        return M;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "isClassBreaksSupported", function () {
        return N;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "isColormapRendererSupported", function () {
        return V;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "isShadedReliefRendererSupported", function () {
        return E;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "isUVRendererSupported", function () {
        return S;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "isVectorFieldRendererSupported", function () {
        return P;
      });
      /* harmony import */


      var _core_maybe_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ../../core/maybe.js */
      "srIe");
      /* harmony import */


      var _Color_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ../../Color.js */
      "nvBr");
      /* harmony import */


      var _core_unitUtils_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ../../core/unitUtils.js */
      "gEht");
      /* harmony import */


      var _tasks_support_MultipartColorRamp_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ../../tasks/support/MultipartColorRamp.js */
      "n9Od");
      /* harmony import */


      var _ClassBreakInfo_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ./ClassBreakInfo.js */
      "8RtG");
      /* harmony import */


      var _ClassBreaksRenderer_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ../ClassBreaksRenderer.js */
      "tCO6");
      /* harmony import */


      var _colorRampUtils_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ./colorRampUtils.js */
      "fG4V");
      /* harmony import */


      var _RasterColormapRenderer_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! ../RasterColormapRenderer.js */
      "MWLC");
      /* harmony import */


      var _RasterShadedReliefRenderer_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! ../RasterShadedReliefRenderer.js */
      "aPP3");
      /* harmony import */


      var _RasterStretchRenderer_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! ../RasterStretchRenderer.js */
      "bvrg");
      /* harmony import */


      var _UniqueValueInfo_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
      /*! ./UniqueValueInfo.js */
      "mfMX");
      /* harmony import */


      var _UniqueValueRenderer_js__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
      /*! ../UniqueValueRenderer.js */
      "2gBT");
      /* harmony import */


      var _VectorFieldRenderer_js__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
      /*! ../VectorFieldRenderer.js */
      "CLyZ");
      /* harmony import */


      var _rasterRenderers_js__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
      /*! ../../rasterRenderers.js */
      "ukD5");
      /* harmony import */


      var _layers_support_RasterInfo_js__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(
      /*! ../../layers/support/RasterInfo.js */
      "pPNP");
      /* harmony import */


      var _tasks_support_ClassBreaksDefinition_js__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(
      /*! ../../tasks/support/ClassBreaksDefinition.js */
      "T694");
      /* harmony import */


      var _tasks_support_generateRendererUtils_js__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(
      /*! ../../tasks/support/generateRendererUtils.js */
      "V3vy");
      /*
      All material copyright ESRI, All Rights Reserved, unless otherwise specified.
      See https://js.arcgis.com/4.18/esri/copyright.txt for details.
      */


      var v = _tasks_support_MultipartColorRamp_js__WEBPACK_IMPORTED_MODULE_3__["default"].fromJSON({
        type: "multipart",
        colorRamps: [{
          fromColor: [0, 0, 255],
          toColor: [0, 255, 255]
        }, {
          fromColor: [0, 255, 255],
          toColor: [255, 255, 0]
        }, {
          fromColor: [255, 255, 0],
          toColor: [255, 0, 0]
        }]
      }),
          C = _tasks_support_MultipartColorRamp_js__WEBPACK_IMPORTED_MODULE_3__["default"].fromJSON(_colorRampUtils_js__WEBPACK_IMPORTED_MODULE_6__["PREDEFINED_JSON_COLOR_RAMPS"][0]);

      function y(t, n) {
        var r = t.attributeTable,
            o = t.colormap,
            a = t.dataType;
        if ("vector-uv" === a || "vector-magdir" === a) return new _VectorFieldRenderer_js__WEBPACK_IMPORTED_MODULE_12__["default"]();

        if (Object(_core_maybe_js__WEBPACK_IMPORTED_MODULE_0__["isSome"])(o)) {
          var _n4 = B(t);

          if (Object(_core_maybe_js__WEBPACK_IMPORTED_MODULE_0__["isSome"])(_n4)) return _n4;
        }

        if (Object(_core_maybe_js__WEBPACK_IMPORTED_MODULE_0__["isSome"])(r)) {
          var _n5 = k(t);

          if (Object(_core_maybe_js__WEBPACK_IMPORTED_MODULE_0__["isSome"])(_n5)) return _n5;
        }

        return j(t, n);
      }

      function w(e) {
        var t = ["raster-stretch"];
        return V(e) && t.push("raster-colormap"), S(e) && t.push("unique-value"), N(e) && t.push("class-breaks"), E(e) && t.push("raster-shaded-relief"), P(e) && t.push("vector-field"), t;
      }

      function x(e, t, n) {
        var r = ["nearest", "bilinear", "cubic", "majority"].find(function (e) {
          return e === (null == n ? void 0 : n.toLowerCase());
        });
        if ("Map" === t) return null != r ? r : "bilinear";
        return "thematic" === e.dataType || e.attributeTable || e.colormap ? "nearest" === r || "majority" === r ? r : "nearest" : null != r ? r : "bilinear";
      }

      function j(n, r) {
        var o, a, l, i;
        n = R(n, null == r ? void 0 : r.variableName);
        var _n6 = n,
            s = _n6.bandCount;

        var _ref4 = r || {},
            u = _ref4.bandIds,
            c = _ref4.stretchType;

        null != (o = u) && o.some(function (e) {
          return e >= s;
        }) && (u = null);
        var f = Object(_core_maybe_js__WEBPACK_IMPORTED_MODULE_0__["unwrap"])(n.statistics),
            d = Object(_core_maybe_js__WEBPACK_IMPORTED_MODULE_0__["unwrap"])(n.histograms);
        var p;
        s > 1 ? (u = null != (p = u) && p.length ? u : T(n), f = null == f ? null : u.map(function (e) {
          return f[e];
        }), d = null == d ? null : u.map(function (e) {
          return d[e];
        })) : u = [0];
        null == c && (c = function (t) {
          var n = "percent-clip";
          var r = t.pixelType,
              o = t.dataType,
              a = t.histograms,
              l = t.statistics;
          "u8" !== r || "processed" !== o && Object(_core_maybe_js__WEBPACK_IMPORTED_MODULE_0__["isSome"])(a) && Object(_core_maybe_js__WEBPACK_IMPORTED_MODULE_0__["isSome"])(l) ? "u8" === r || "elevation" === o || "scientific" === o ? n = "min-max" : Object(_core_maybe_js__WEBPACK_IMPORTED_MODULE_0__["isSome"])(a) ? n = "percent-clip" : Object(_core_maybe_js__WEBPACK_IMPORTED_MODULE_0__["isSome"])(l) && (n = "min-max", n = "min-max") : n = "none";
          return n;
        }(n));
        var h = !1;

        switch (c) {
          case "none":
            h = !1;
            break;

          case "percent-clip":
            h = !(null != (a = d) && a.length);
            break;

          default:
            h = !(null != (l = f) && l.length);
        }

        var b = 1 === (null == (i = u) ? void 0 : i.length) && "scientific" === n.dataType ? v : null,
            g = new _RasterStretchRenderer_js__WEBPACK_IMPORTED_MODULE_9__["default"]({
          stretchType: c,
          dynamicRangeAdjustment: h,
          colorRamp: b,
          outputMin: 0,
          outputMax: 255,
          gamma: 1 === u.length ? [1] : [1, 1, 1],
          useGamma: !1
        });
        return "percent-clip" === c ? g.maxPercent = g.minPercent = .25 : "standard-deviation" === c && (g.numberOfStandardDeviations = 2), h || ("percent-clip" === c ? g.histograms = d : "min-max" !== c && "standard-deviation" !== c || (g.statistics = f)), g;
      }

      function R(n, r) {
        if (null == r) return n;
        var o = Object(_core_maybe_js__WEBPACK_IMPORTED_MODULE_0__["unwrap"])(n.statistics),
            a = Object(_core_maybe_js__WEBPACK_IMPORTED_MODULE_0__["unwrap"])(n.histograms);
        var l = n.multidimensionalInfo;

        if (r && Object(_core_maybe_js__WEBPACK_IMPORTED_MODULE_0__["isSome"])(l)) {
          var _l$variables$find = l.variables.find(function (e) {
            return e.name === r;
          }),
              e = _l$variables$find.statistics,
              t = _l$variables$find.histograms;

          null != e && e.length && (o = e), null != t && t.length && (a = t);
        }

        return _layers_support_RasterInfo_js__WEBPACK_IMPORTED_MODULE_14__["default"].fromJSON(_objectSpread(_objectSpread({}, n.toJSON()), {}, {
          statistics: o,
          histograms: a
        }));
      }

      function T(e) {
        var t = e.bandCount;
        if (1 === t) return null;
        if (2 === t) return [0];
        var n = e.keyProperties && e.keyProperties.BandProperties;
        var r;

        if (n && n.length === t) {
          var _M6 = M(n),
              _e25 = _M6.red,
              _t = _M6.green,
              o = _M6.blue,
              a = _M6.nir;

          null != _e25 && null != _t && null != o ? r = [_e25, _t, o] : null != a && null != _e25 && null != _t && (r = [a, _e25, _t]);
        }

        return !r && t >= 3 && (r = [0, 1, 2]), r;
      }

      function M(e) {
        var t = {};

        for (var r = 0; r < e.length; r++) {
          var n;
          var o = e[r],
              a = null == (n = o.BandName) ? void 0 : n.toLowerCase();
          if ("red" === a) t.red = r;else if ("green" === a) t.green = r;else if ("blue" === a) t.blue = r;else if ("nearinfrared" === a || "nearinfrared_1" === a || "nir" === a) t.nir = r;else if (o.WavelengthMax && o.WavelengthMin) {
            var _e26 = o.WavelengthMin,
                _n7 = o.WavelengthMax;
            null == t.blue && _e26 >= 410 && _e26 <= 480 && _n7 >= 480 && _n7 <= 540 ? t.blue = r : null == t.green && _e26 >= 490 && _e26 <= 560 && _n7 >= 560 && _n7 <= 610 ? t.green = r : null == t.red && _e26 >= 595 && _e26 <= 670 && _n7 >= 660 && _n7 <= 730 ? t.red = r : null == t.nir && _e26 >= 700 && _e26 <= 860 && _n7 >= 800 && _n7 <= 950 && (t.nir = r);
          }
        }

        return t;
      }

      function k(e, t) {
        if (!S(e, t)) return null;
        var r = e.attributeTable,
            o = L(r, t),
            a = O(r, "red"),
            l = O(r, "green"),
            i = O(r, "blue"),
            u = [],
            c = new Set(),
            m = !!(a && l && i);

        if (r.features.forEach(function (e) {
          var t = e.attributes[o.name];
          c.has(e.attributes[o.name]) || null == t || (c.add(t), u.push(new _UniqueValueInfo_js__WEBPACK_IMPORTED_MODULE_10__["default"]({
            value: e.attributes[o.name],
            label: e.attributes[o.name],
            symbol: {
              type: "simple-fill",
              style: "solid",
              outline: null,
              color: new _Color_js__WEBPACK_IMPORTED_MODULE_1__["default"](m ? [e.attributes[a.name], e.attributes[l.name], e.attributes[i.name], 1] : [0, 0, 0, 0])
            }
          })));
        }), !m) {
          var _e27 = Object(_colorRampUtils_js__WEBPACK_IMPORTED_MODULE_6__["convertColorRampToColormap"])(C, u.length);

          u.forEach(function (t, r) {
            return t.symbol.color = new _Color_js__WEBPACK_IMPORTED_MODULE_1__["default"](_e27[r].slice(1, 4));
          });
        }

        return new _UniqueValueRenderer_js__WEBPACK_IMPORTED_MODULE_11__["default"]({
          field: o.name,
          uniqueValueInfos: u
        });
      }

      function L(e, t) {
        var n = e.fields.find(function (e) {
          return "string" === e.type && (t === e.name.toLowerCase() || e.name.toLowerCase().indexOf("class") > -1);
        });
        return n || (n = e.fields.find(function (e) {
          return "string" === e.type;
        }), n || (n = O(e, "value"))), n;
      }

      function O(e, t) {
        return e.fields.find(function (e) {
          return e.name.toLowerCase() === t;
        });
      }

      function S(t, n) {
        var r = t.attributeTable,
            o = t.bandCount;
        if (!Object(_core_maybe_js__WEBPACK_IMPORTED_MODULE_0__["isSome"])(r) || o > 1) return !1;

        if (n) {
          if (null == r.fields.find(function (e) {
            return e.name.toLowerCase() === n.toLowerCase();
          })) return !1;
        }

        return !0;
      }

      function V(t) {
        var n = t.bandCount,
            r = t.colormap;
        return Object(_core_maybe_js__WEBPACK_IMPORTED_MODULE_0__["isSome"])(r) && r.length && 1 === n;
      }

      function B(n) {
        if (!V(n)) return null;
        var r;
        var o = n.attributeTable,
            a = n.colormap;

        if (Object(_core_maybe_js__WEBPACK_IMPORTED_MODULE_0__["isSome"])(o)) {
          var e = O(o, "value"),
              t = L(o);
          "string" === t.type && (r = {}, o.features.forEach(function (n) {
            var o = n.attributes;
            r[o[e.name]] = t ? o[t.name] : o[e.name];
          }));
        }

        return _RasterColormapRenderer_js__WEBPACK_IMPORTED_MODULE_7__["default"].createFromColormap(Object(_core_maybe_js__WEBPACK_IMPORTED_MODULE_0__["unwrap"])(a), r);
      }

      function E(e) {
        return "elevation" === e.dataType;
      }

      function I(e, t) {
        var n;
        if (!E(e)) return null;
        var o = e.extent,
            a = o.width * Object(_core_unitUtils_js__WEBPACK_IMPORTED_MODULE_2__["getMetersPerUnitForSR"])(o.spatialReference);
        return t = null != (n = t) ? n : "multi-directional", new _RasterShadedReliefRenderer_js__WEBPACK_IMPORTED_MODULE_8__["default"]({
          hillshadeType: t,
          scalingType: a > 5e6 ? "adjusted" : "none"
        });
      }

      function N(t) {
        var n = t.attributeTable,
            r = t.bandCount;
        return 1 === r && (Object(_core_maybe_js__WEBPACK_IMPORTED_MODULE_0__["isSome"])(n) || Object(_core_maybe_js__WEBPACK_IMPORTED_MODULE_0__["isSome"])(t.histograms));
      }

      function q(t, n) {
        t = R(t, null == n ? void 0 : n.variableName);
        var _t2 = t,
            r = _t2.attributeTable;
        if (!N(t)) return null;
        var o = Object(_core_maybe_js__WEBPACK_IMPORTED_MODULE_0__["isSome"])(t.histograms) ? t.histograms[0] : null,
            i = (null == n ? void 0 : n.numClasses) || 4;
        var u = (null == n ? void 0 : n.field) || "value";
        var c = [];

        if (Object(_core_maybe_js__WEBPACK_IMPORTED_MODULE_0__["isSome"])(r)) {
          var e = r.fields.find(function (e) {
            return "count" === e.name.toLowerCase();
          }),
              _t3 = r.fields.find(function (e) {
            return e.name.toLowerCase() === u.toLowerCase();
          });

          u = _t3.name;
          var _n8 = r.features.length;
          var _o9 = 0;
          r.features.forEach(function (t) {
            return _o9 += t.attributes[e.name] / _n8;
          }), r.features.forEach(function (r) {
            var a = r.attributes[_t3.name],
                l = r.attributes[e.name];

            if (l > 0) {
              var _e28 = Math.max(1, Math.round(l / _n8 / _o9 * 1e3));

              for (var _t4 = 0; _t4 < _e28; _t4++) {
                c.push(a);
              }
            }
          });
        } else {
          var _t5 = t,
              _e29 = _t5.pixelType,
              _n9 = (o.max - o.min) / o.size,
              _r4 = _e29.indexOf("s") > -1 || _e29.indexOf("u") > -1,
              a = _r4 && 1 === _n9 ? Math.floor(o.min + .5) : o.min,
              l = _r4 && 1 === _n9 ? Math.floor(o.max - .5) : o.max,
              _i6 = o.size;

          var s = 0;
          o.counts.forEach(function (e) {
            return s += e / _i6;
          }), o.counts.forEach(function (e, t) {
            if (e > 0) {
              var _r5 = Math.max(1, Math.round(e / _i6 / s * 1e3)),
                  _u = 0 === t ? a : t === _i6 - 1 ? l : o.min + _n9 * (t + .5);

              for (var _e30 = 0; _e30 < _r5; _e30++) {
                c.push(_u);
              }
            }
          });
        }

        var m = (null == n ? void 0 : n.classificationMethod) || "equal-interval",
            f = Object(_tasks_support_generateRendererUtils_js__WEBPACK_IMPORTED_MODULE_16__["createGenerateRendererClassBreaks"])({
          values: c,
          normalizationTotal: null,
          definition: new _tasks_support_ClassBreaksDefinition_js__WEBPACK_IMPORTED_MODULE_15__["default"]({
            classificationMethod: m,
            breakCount: i
          })
        });
        var d = null == n ? void 0 : n.colors;

        if (!d) {
          var _e31 = (null == n ? void 0 : n.colorRamp) || v,
              _t6 = Object(_colorRampUtils_js__WEBPACK_IMPORTED_MODULE_6__["convertColorRampToColormap"])(_e31, i, !0);

          d = _t6.map(function (e) {
            return e.slice(1);
          });
        }

        var p = f.classBreaks.map(function (e, t) {
          return new _ClassBreakInfo_js__WEBPACK_IMPORTED_MODULE_4__["default"]({
            minValue: e.minValue,
            maxValue: e.maxValue,
            label: e.label,
            symbol: {
              type: "simple-fill",
              color: d[t]
            }
          });
        });
        return new _ClassBreaksRenderer_js__WEBPACK_IMPORTED_MODULE_5__["default"]({
          field: u,
          classBreakInfos: p
        });
      }

      function P(e) {
        var t = e.dataType;
        return "vector-uv" === t || "vector-magdir" === t;
      }
      /***/

    },

    /***/
    "MWLC":
    /*!***********************************************************************!*\
      !*** ./node_modules/@arcgis/core/renderers/RasterColormapRenderer.js ***!
      \***********************************************************************/

    /*! exports provided: default */

    /***/
    function MWLC(module, __webpack_exports__, __webpack_require__) {
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


      var _core_Logger_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ../core/Logger.js */
      "6S2I");
      /* harmony import */


      var _core_accessorSupport_ensureType_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ../core/accessorSupport/ensureType.js */
      "zqDF");
      /* harmony import */


      var _core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ../core/accessorSupport/decorators/property.js */
      "WbKI");
      /* harmony import */


      var _core_accessorSupport_decorators_enumeration_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ../core/accessorSupport/decorators/enumeration.js */
      "RI0u");
      /* harmony import */


      var _core_accessorSupport_decorators_subclass_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ../core/accessorSupport/decorators/subclass.js */
      "04ZG");
      /* harmony import */


      var _core_urlUtils_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! ../core/urlUtils.js */
      "4EHJ");
      /* harmony import */


      var _core_uuid_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! ../core/uuid.js */
      "ju1D");
      /* harmony import */


      var _portal_support_resourceExtension_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! ../portal/support/resourceExtension.js */
      "9AIY");
      /* harmony import */


      var _core_JSONSupport_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
      /*! ../core/JSONSupport.js */
      "ag7Y");
      /* harmony import */


      var _support_ColormapInfo_js__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
      /*! ./support/ColormapInfo.js */
      "r6nO");
      /* harmony import */


      var _support_colorRampUtils_js__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
      /*! ./support/colorRampUtils.js */
      "fG4V");
      /*
      All material copyright ESRI, All Rights Reserved, unless otherwise specified.
      See https://js.arcgis.com/4.18/esri/copyright.txt for details.
      */


      var _a9;

      var l = _a9 = /*#__PURE__*/function (_core_JSONSupport_js_2) {
        _inherits(a, _core_JSONSupport_js_2);

        var _super3 = _createSuper(a);

        function a(o) {
          var _this4;

          _classCallCheck(this, a);

          _this4 = _super3.call(this, o), _this4.colormapInfos = null, _this4.type = "raster-colormap";
          return _this4;
        }

        _createClass(a, [{
          key: "clone",
          value: function clone() {
            return new _a9({
              colormapInfos: this.colormapInfos.map(function (o) {
                return o.toJSON();
              })
            });
          }
        }, {
          key: "extractColormap",
          value: function extractColormap() {
            return this.colormapInfos.map(function (o) {
              return [o.value, o.color.r, o.color.g, o.color.b, o.color.a > 1 ? o.color.a : 255 * o.color.a & 255];
            }).sort(function (o, r) {
              return o[0] - r[0];
            });
          }
        }], [{
          key: "createFromColormap",
          value: function createFromColormap(o, r) {
            if (!o) return null;

            function t(o) {
              return r ? r[o] || "" : String(o[0]);
            }

            var e = 5 === o[0].length,
                s = o.sort(function (o) {
              return o[0][0] - o[1][0];
            }),
                c = e ? s.map(function (o) {
              return _support_ColormapInfo_js__WEBPACK_IMPORTED_MODULE_11__["default"].fromJSON({
                value: o[0],
                color: o.slice(1, 5),
                label: t(o[0])
              });
            }) : s.map(function (o) {
              return _support_ColormapInfo_js__WEBPACK_IMPORTED_MODULE_11__["default"].fromJSON({
                value: o[0],
                color: o.slice(1, 4).concat([255]),
                label: t(o[0])
              });
            });
            return new _a9({
              colormapInfos: c
            });
          }
        }, {
          key: "createFromColorramp",
          value: function createFromColorramp(o) {
            var r = Object(_support_colorRampUtils_js__WEBPACK_IMPORTED_MODULE_12__["convertColorRampToColormap"])(o, 256);
            return _a9.createFromColormap(r);
          }
        }]);

        return a;
      }(_core_JSONSupport_js__WEBPACK_IMPORTED_MODULE_10__["JSONSupport"]);

      Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_4__["property"])({
        type: [_support_ColormapInfo_js__WEBPACK_IMPORTED_MODULE_11__["default"]],
        json: {
          write: !0
        }
      })], l.prototype, "colormapInfos", void 0), Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_enumeration_js__WEBPACK_IMPORTED_MODULE_5__["enumeration"])({
        rasterColormap: "raster-colormap"
      })], l.prototype, "type", void 0), l = _a9 = Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_subclass_js__WEBPACK_IMPORTED_MODULE_6__["subclass"])("esri.renderers.RasterColormapRenderer")], l);
      var m = l;
      /* harmony default export */

      __webpack_exports__["default"] = m;
      /***/
    },

    /***/
    "NrhG":
    /*!********************************************************!*\
      !*** ./node_modules/@arcgis/core/symbols/cim/utils.js ***!
      \********************************************************/

    /*! exports provided: _adjustTextCase, colorToArray, createLabelOverrideFunction, evaluateValueOrFunction, fromCIMColor, isCIMFill, isCIMMarker, isCIMMarkerStrokePlacement, isCIMStroke, resampleHermite, toCIMSymbolJSON */

    /***/
    function NrhG(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "_adjustTextCase", function () {
        return n;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "colorToArray", function () {
        return e;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "createLabelOverrideFunction", function () {
        return r;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "evaluateValueOrFunction", function () {
        return t;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "fromCIMColor", function () {
        return i;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "isCIMFill", function () {
        return u;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "isCIMMarker", function () {
        return o;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "isCIMMarkerStrokePlacement", function () {
        return M;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "isCIMStroke", function () {
        return c;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "resampleHermite", function () {
        return a;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "toCIMSymbolJSON", function () {
        return l;
      });
      /*
      All material copyright ESRI, All Rights Reserved, unless otherwise specified.
      See https://js.arcgis.com/4.18/esri/copyright.txt for details.
      */


      function t(t, e, r, n) {
        return function (t) {
          return "function" == typeof t;
        }(t) ? t(e, r, n) : t;
      }

      function e(t) {
        return [t.r, t.g, t.b, t.a];
      }

      function r(t, e, r) {
        var a = function a(t) {
          var e = t.length;

          for (; e--;) {
            if (-1 === " /-,\n".indexOf(t.charAt(e))) return !1;
          }

          return !0;
        },
            i = [];

        var l = 0,
            o = -1;

        do {
          if (o = e.indexOf("[", l), o >= l) {
            if (o > l) {
              var _t7 = e.substr(l, o - l);

              i.push([_t7, null, a(_t7)]);
            }

            if (l = o + 1, o = e.indexOf("]", l), o >= l) {
              if (o > l) {
                var _r6 = t[e.substr(l, o - l)];
                _r6 && i.push([null, _r6, !1]);
              }

              l = o + 1;
            }
          }
        } while (-1 !== o);

        if (l < e.length - 1) {
          var _t8 = e.substr(l);

          i.push([_t8, null, a(_t8)]);
        }

        return function (t) {
          var e = "",
              a = null;

          var _iterator14 = _createForOfIteratorHelper(i),
              _step14;

          try {
            for (_iterator14.s(); !(_step14 = _iterator14.n()).done;) {
              var _r7 = _step14.value;

              var _r8 = _slicedToArray(_r7, 3),
                  _n10 = _r8[0],
                  _i7 = _r8[1],
                  _l3 = _r8[2];

              if (_n10) _l3 ? a = _n10 : (a && (e += a, a = null), e += _n10);else {
                var _r9 = t.attributes[_i7];
                _r9 && (a && (e += a, a = null), e += _r9);
              }
            }
          } catch (err) {
            _iterator14.e(err);
          } finally {
            _iterator14.f();
          }

          return n(e, r);
        };
      }

      function n(t, e) {
        switch ("string" != typeof t && (t = String(t)), e) {
          case "LowerCase":
            return t.toLowerCase();

          case "Allcaps":
            return t.toUpperCase();

          default:
            return t;
        }
      }

      function a(t, e, r, n, a, i) {
        var l = arguments.length > 6 && arguments[6] !== undefined ? arguments[6] : !0;
        var o = e / a,
            c = r / i,
            u = Math.ceil(o / 2),
            M = Math.ceil(c / 2);

        for (var _r10 = 0; _r10 < i; _r10++) {
          for (var s = 0; s < a; s++) {
            var f = 4 * (s + (l ? i - _r10 - 1 : _r10) * a);
            var p = 0,
                C = 0,
                y = 0,
                I = 0,
                h = 0,
                k = 0,
                d = 0;
            var P = (_r10 + .5) * c;

            for (var _n11 = Math.floor(_r10 * c); _n11 < (_r10 + 1) * c; _n11++) {
              var _r11 = Math.abs(P - (_n11 + .5)) / M,
                  _a10 = (s + .5) * o,
                  _i8 = _r11 * _r11;

              for (var _r12 = Math.floor(s * o); _r12 < (s + 1) * o; _r12++) {
                var _l4 = Math.abs(_a10 - (_r12 + .5)) / u;

                var _o10 = Math.sqrt(_i8 + _l4 * _l4);

                _o10 >= -1 && _o10 <= 1 && (p = 2 * _o10 * _o10 * _o10 - 3 * _o10 * _o10 + 1, p > 0 && (_l4 = 4 * (_r12 + _n11 * e), d += p * t[_l4 + 3], y += p, t[_l4 + 3] < 255 && (p = p * t[_l4 + 3] / 250), I += p * t[_l4], h += p * t[_l4 + 1], k += p * t[_l4 + 2], C += p));
              }
            }

            n[f] = I / C, n[f + 1] = h / C, n[f + 2] = k / C, n[f + 3] = d / y;
          }
        }
      }

      function i(t) {
        return t ? {
          r: t[0],
          g: t[1],
          b: t[2],
          a: t[3] / 255
        } : {
          r: 0,
          g: 0,
          b: 0,
          a: 0
        };
      }

      function l(t) {
        var e;
        return null == (e = t.data) ? void 0 : e.symbol;
      }

      function o(t) {
        return "CIMVectorMarker" === t.type || "CIMPictureMarker" === t.type || "CIMBarChartMarker" === t.type || "CIMCharacterMarker" === t.type || "CIMPieChartMarker" === t.type || "CIMStackedBarChartMarker" === t.type;
      }

      function c(t) {
        return "CIMGradientStroke" === t.type || "CIMPictureStroke" === t.type || "CIMSolidStroke" === t.type;
      }

      function u(t) {
        return "CIMGradientFill" === t.type || "CIMHatchFill" === t.type || "CIMPictureFill" === t.type || "CIMSolidFill" === t.type || "CIMWaterFill" === t.type;
      }

      function M(t) {
        return "CIMMarkerPlacementAlongLineRandomSize" === t.type || "CIMMarkerPlacementAlongLineSameSize" === t.type || "CIMMarkerPlacementAlongLineVariableSize" === t.type || "CIMMarkerPlacementAtExtremities" === t.type || "CIMMarkerPlacementAtMeasuredUnits" === t.type || "CIMMarkerPlacementAtRatioPositions" === t.type || "CIMMarkerPlacementOnLine" === t.type || "CIMMarkerPlacementOnVertices" === t.type;
      }
      /***/

    },

    /***/
    "T694":
    /*!**************************************************************************!*\
      !*** ./node_modules/@arcgis/core/tasks/support/ClassBreaksDefinition.js ***!
      \**************************************************************************/

    /*! exports provided: default */

    /***/
    function T694(module, __webpack_exports__, __webpack_require__) {
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


      var _core_jsonMap_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ../../core/jsonMap.js */
      "+opI");
      /* harmony import */


      var _core_accessorSupport_decorators_subclass_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ../../core/accessorSupport/decorators/subclass.js */
      "04ZG");
      /* harmony import */


      var _core_urlUtils_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! ../../core/urlUtils.js */
      "4EHJ");
      /* harmony import */


      var _core_uuid_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! ../../core/uuid.js */
      "ju1D");
      /* harmony import */


      var _portal_support_resourceExtension_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! ../../portal/support/resourceExtension.js */
      "9AIY");
      /* harmony import */


      var _ClassificationDefinition_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
      /*! ./ClassificationDefinition.js */
      "2CuI");
      /*
      All material copyright ESRI, All Rights Reserved, unless otherwise specified.
      See https://js.arcgis.com/4.18/esri/copyright.txt for details.
      */


      var s = new _core_jsonMap_js__WEBPACK_IMPORTED_MODULE_5__["JSONMap"]({
        esriClassifyEqualInterval: "equal-interval",
        esriClassifyManual: "manual",
        esriClassifyNaturalBreaks: "natural-breaks",
        esriClassifyQuantile: "quantile",
        esriClassifyStandardDeviation: "standard-deviation"
      }),
          a = new _core_jsonMap_js__WEBPACK_IMPORTED_MODULE_5__["JSONMap"]({
        esriNormalizeByLog: "log",
        esriNormalizeByPercentOfTotal: "percent-of-total",
        esriNormalizeByField: "field"
      });

      var n = /*#__PURE__*/function (_ClassificationDefini) {
        _inherits(n, _ClassificationDefini);

        var _super4 = _createSuper(n);

        function n() {
          var _this5;

          _classCallCheck(this, n);

          _this5 = _super4.apply(this, arguments), _this5.breakCount = null, _this5.classificationField = null, _this5.classificationMethod = null, _this5.normalizationField = null, _this5.normalizationType = null, _this5.type = "class-breaks-definition";
          return _this5;
        }

        _createClass(n, [{
          key: "standardDeviationInterval",
          set: function set(i) {
            "standard-deviation" === this.classificationMethod && this._set("standardDeviationInterval", i);
          }
        }]);

        return n;
      }(_ClassificationDefinition_js__WEBPACK_IMPORTED_MODULE_10__["default"]);

      Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_4__["property"])({
        json: {
          write: !0
        }
      })], n.prototype, "breakCount", void 0), Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_4__["property"])({
        json: {
          write: !0
        }
      })], n.prototype, "classificationField", void 0), Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_4__["property"])({
        type: String,
        json: {
          read: s.read,
          write: s.write
        }
      })], n.prototype, "classificationMethod", void 0), Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_4__["property"])({
        json: {
          write: !0
        }
      })], n.prototype, "normalizationField", void 0), Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_4__["property"])({
        json: {
          read: a.read,
          write: a.write
        }
      })], n.prototype, "normalizationType", void 0), Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_4__["property"])({
        value: null,
        json: {
          write: !0
        }
      })], n.prototype, "standardDeviationInterval", null), Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_4__["property"])()], n.prototype, "type", void 0), n = Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_subclass_js__WEBPACK_IMPORTED_MODULE_6__["subclass"])("esri.tasks.support.ClassBreaksDefinition")], n);
      var l = n;
      /* harmony default export */

      __webpack_exports__["default"] = l;
      /***/
    },

    /***/
    "V3vy":
    /*!**************************************************************************!*\
      !*** ./node_modules/@arcgis/core/tasks/support/generateRendererUtils.js ***!
      \**************************************************************************/

    /*! exports provided: createGenerateRendererClassBreaks, createGenerateRendererUniqueValues */

    /***/
    function V3vy(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "createGenerateRendererClassBreaks", function () {
        return l;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "createGenerateRendererUniqueValues", function () {
        return t;
      });
      /*
      All material copyright ESRI, All Rights Reserved, unless otherwise specified.
      See https://js.arcgis.com/4.18/esri/copyright.txt for details.
      */


      function e(e, t) {
        return Number(e.toFixed(t));
      }

      function t(e) {
        var t = a(e),
            l = [],
            n = t.uniqueValues.length;

        for (var _e32 = 0; _e32 < n; _e32++) {
          var _n12 = t.uniqueValues[_e32],
              _a11 = t.valueFrequency[_e32],
              _u2 = _n12.toString();

          l.push({
            value: _n12,
            count: _a11,
            label: _u2
          });
        }

        return {
          uniqueValues: l
        };
      }

      function l(t) {
        var l = t.normalizationTotal;
        return {
          classBreaks: function (t) {
            var l = t.definition,
                s = l.classificationMethod,
                r = l.breakCount,
                i = l.normalizationType,
                c = [];
            var f = t.values;
            if (0 === f.length) return [];
            f = f.sort(function (e, t) {
              return e - t;
            });
            var h = f[0],
                m = f[f.length - 1];
            if ("equal-interval" === s) {
              if (f.length >= r) {
                var _t9 = (m - h) / r;

                var _l5 = h;

                for (var _a12 = 1; _a12 < r; _a12++) {
                  var _u3 = e(h + _a12 * _t9, 6);

                  c.push({
                    minValue: _l5,
                    maxValue: _u3,
                    label: n(_l5, _u3, i)
                  }), _l5 = _u3;
                }

                c.push({
                  minValue: _l5,
                  maxValue: m,
                  label: n(_l5, m, i)
                });
              } else f.forEach(function (e) {
                c.push({
                  minValue: e,
                  maxValue: e,
                  label: n(e, e, i)
                });
              });
            } else if ("natural-breaks" === s) {
              var _t10 = a(f),
                  _l6 = function (e, t, l) {
                var n = e.length,
                    a = [];
                l > n && (l = n);

                for (var _e33 = 0; _e33 < l; _e33++) {
                  a.push(Math.round(_e33 * n / l - 1));
                }

                a.push(n - 1);
                var s = u(a, e, t, l);
                (function (e, t, l, n, a, u) {
                  var s = 0,
                      r = 0,
                      i = 0,
                      c = 0,
                      f = !0;

                  for (var _h = 0; _h < 2 && f; _h++) {
                    0 === _h && (f = !1);

                    for (var _h2 = 0; _h2 < u - 1; _h2++) {
                      for (; l[_h2 + 1] + 1 !== l[_h2 + 2];) {
                        l[_h2 + 1] = l[_h2 + 1] + 1;

                        var _u4 = o(_h2, l, n, a);

                        i = _u4.sbMean, s = _u4.sbSdcm;

                        var _m = o(_h2 + 1, l, n, a);

                        if (c = _m.sbMean, r = _m.sbSdcm, !(s + r < t[_h2] + t[_h2 + 1])) {
                          l[_h2 + 1] = l[_h2 + 1] - 1;
                          break;
                        }

                        t[_h2] = s, t[_h2 + 1] = r, e[_h2] = i, e[_h2 + 1] = c, f = !0;
                      }
                    }

                    for (var _h3 = u - 1; _h3 > 0; _h3--) {
                      for (; l[_h3] !== l[_h3 - 1] + 1;) {
                        l[_h3] = l[_h3] - 1;

                        var _u5 = o(_h3 - 1, l, n, a);

                        i = _u5.sbMean, s = _u5.sbSdcm;

                        var _m2 = o(_h3, l, n, a);

                        if (c = _m2.sbMean, r = _m2.sbSdcm, !(s + r < t[_h3 - 1] + t[_h3])) {
                          l[_h3] = l[_h3] + 1;
                          break;
                        }

                        t[_h3 - 1] = s, t[_h3] = r, e[_h3 - 1] = i, e[_h3] = c, f = !0;
                      }
                    }
                  }

                  return f;
                })(s.mean, s.sdcm, a, e, t, l) && (s = u(a, e, t, l));
                return a;
              }(_t10.uniqueValues, _t10.valueFrequency, r);

              var _s6 = h;

              for (var _a13 = 1; _a13 < r; _a13++) {
                if (_t10.uniqueValues.length > _a13) {
                  var _u6 = e(_t10.uniqueValues[_l6[_a13]], 6);

                  c.push({
                    minValue: _s6,
                    maxValue: _u6,
                    label: n(_s6, _u6, i)
                  }), _s6 = _u6;
                }
              }

              c.push({
                minValue: _s6,
                maxValue: m,
                label: n(_s6, m, i)
              });
            } else if ("quantile" === s) {
              if (f.length >= r && h !== m) {
                var _e34 = h,
                    _t11 = Math.ceil(f.length / r),
                    _l7 = 0;

                for (var _a14 = 1; _a14 < r; _a14++) {
                  var _u7 = _t11 + _l7 - 1;

                  _u7 > f.length && (_u7 = f.length - 1), _u7 < 0 && (_u7 = 0), c.push({
                    minValue: _e34,
                    maxValue: f[_u7],
                    label: n(_e34, f[_u7], i)
                  }), _e34 = f[_u7], _l7 += _t11, _t11 = Math.ceil((f.length - _l7) / (r - _a14));
                }

                c.push({
                  minValue: _e34,
                  maxValue: m,
                  label: n(_e34, m, i)
                });
              } else {
                var _e35 = -1;

                for (var _t12 = 0; _t12 < f.length; _t12++) {
                  var _l8 = f[_t12];
                  _l8 !== _e35 && (_e35 = _l8, c.push({
                    minValue: _e35,
                    maxValue: _l8,
                    label: n(_e35, _l8, i)
                  }), _e35 = _l8);
                }
              }
            } else if ("standard-deviation" === s) {
              var _t13 = function (e) {
                var t = 0;

                for (var _l10 = 0; _l10 < e.length; _l10++) {
                  t += e[_l10];
                }

                return t /= e.length, t;
              }(f),
                  _l9 = function (e, t) {
                var l = 0;

                for (var _n13 = 0; _n13 < e.length; _n13++) {
                  var _a15 = e[_n13];
                  l += (_a15 - t) * (_a15 - t);
                }

                l /= e.length;
                return Math.sqrt(l);
              }(f, _t13);

              if (0 === _l9) c.push({
                minValue: f[0],
                maxValue: f[0],
                label: n(f[0], f[0], i)
              });else {
                var _a16 = function (e, t, l, n, a) {
                  var u = Math.max(n - e, t - n);
                  var o = u / a / l;
                  o = o >= 1 ? 1 : o >= .5 ? .5 : .25;
                  return o;
                }(h, m, r, _t13, _l9) * _l9;

                var _u8 = 0,
                    _o11 = h;

                for (var _l11 = r; _l11 >= 1; _l11--) {
                  var _s8 = e(_t13 - (_l11 - .5) * _a16, 6);

                  c.push({
                    minValue: _o11,
                    maxValue: _s8,
                    label: n(_o11, _s8, i)
                  }), _o11 = _s8, _u8++;
                }

                var _s7 = e(_t13 + .5 * _a16, 6);

                c.push({
                  minValue: _o11,
                  maxValue: _s7,
                  label: n(_o11, _s7, i)
                }), _o11 = _s7, _u8++;

                for (var _l12 = 1; _l12 <= r; _l12++) {
                  _s7 = _u8 === 2 * r ? m : e(_t13 + (_l12 + .5) * _a16, 6), c.push({
                    minValue: _o11,
                    maxValue: _s7,
                    label: n(_o11, _s7, i)
                  }), _o11 = _s7, _u8++;
                }
              }
            }
            return c;
          }(t),
          normalizationTotal: l
        };
      }

      function n(e, t, l) {
        var n = null;
        return n = e === t ? l && "percent-of-total" === l ? e + "%" : e.toString() : l && "percent-of-total" === l ? e + "% - " + t + "%" : e + " - " + t, n;
      }

      function a(e) {
        var t = [],
            l = [];
        var n = Number.MIN_VALUE,
            a = 1,
            u = -1;

        for (var _o12 = 0; _o12 < e.length; _o12++) {
          var s = e[_o12];
          s === n ? (a++, l[u] = a) : null !== s && (t.push(s), n = s, a = 1, l.push(a), u++);
        }

        return {
          uniqueValues: t,
          valueFrequency: l
        };
      }

      function u(e, t, l, n) {
        var a = [],
            u = [],
            s = [],
            r = 0;
        var i = [],
            c = [];

        for (var _a17 = 0; _a17 < n; _a17++) {
          var _n14 = o(_a17, e, t, l);

          i.push(_n14.sbMean), c.push(_n14.sbSdcm), r += c[_a17];
        }

        var f,
            h = r,
            m = !0;

        for (; m || r < h;) {
          m = !1, a = [];

          for (var _t14 = 0; _t14 < n; _t14++) {
            a.push(e[_t14]);
          }

          for (var _l13 = 0; _l13 < n; _l13++) {
            for (var _a18 = e[_l13] + 1; _a18 <= e[_l13 + 1]; _a18++) {
              if (f = t[_a18], _l13 > 0 && _a18 !== e[_l13 + 1] && Math.abs(f - i[_l13]) > Math.abs(f - i[_l13 - 1])) e[_l13] = _a18;else if (_l13 < n - 1 && e[_l13] !== _a18 - 1 && Math.abs(f - i[_l13]) > Math.abs(f - i[_l13 + 1])) {
                e[_l13 + 1] = _a18 - 1;
                break;
              }
            }
          }

          h = r, r = 0, u = [], s = [];

          for (var _a19 = 0; _a19 < n; _a19++) {
            u.push(i[_a19]), s.push(c[_a19]);

            var _n15 = o(_a19, e, t, l);

            i[_a19] = _n15.sbMean, c[_a19] = _n15.sbSdcm, r += c[_a19];
          }
        }

        if (r > h) {
          for (var _t15 = 0; _t15 < n; _t15++) {
            e[_t15] = a[_t15], i[_t15] = u[_t15], c[_t15] = s[_t15];
          }

          r = h;
        }

        return {
          mean: i,
          sdcm: c
        };
      }

      function o(e, t, l, n) {
        var a = 0,
            u = 0;

        for (var _o13 = t[e] + 1; _o13 <= t[e + 1]; _o13++) {
          var _e36 = n[_o13];
          a += l[_o13] * _e36, u += _e36;
        }

        u <= 0 && console.log("Exception in Natural Breaks calculation");
        var o = a / u;
        var s = 0;

        for (var _a20 = t[e] + 1; _a20 <= t[e + 1]; _a20++) {
          s += n[_a20] * Math.pow(l[_a20] - o, 2);
        }

        return {
          sbMean: o,
          sbSdcm: s
        };
      }
      /***/

    },

    /***/
    "ZVeJ":
    /*!*****************************************************************************!*\
      !*** ./node_modules/@arcgis/core/renderers/support/stretchRendererUtils.js ***!
      \*****************************************************************************/

    /*! exports provided: stretchTypeFunctionEnum, stretchTypeJSONDict */

    /***/
    function ZVeJ(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "stretchTypeFunctionEnum", function () {
        return a;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "stretchTypeJSONDict", function () {
        return n;
      });
      /* harmony import */


      var _core_jsonMap_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ../../core/jsonMap.js */
      "+opI");
      /*
      All material copyright ESRI, All Rights Reserved, unless otherwise specified.
      See https://js.arcgis.com/4.18/esri/copyright.txt for details.
      */


      var n = new _core_jsonMap_js__WEBPACK_IMPORTED_MODULE_0__["JSONMap"]({
        none: "none",
        standardDeviation: "standard-deviation",
        histogramEqualization: "histogram-equalization",
        minMax: "min-max",
        percentClip: "percent-clip",
        sigmoid: "sigmoid"
      }),
          a = {
        0: "none",
        3: "standardDeviation",
        4: "histogramEqualization",
        5: "minMax",
        6: "percentClip",
        9: "sigmoid"
      };
      /***/
    },

    /***/
    "aPP3":
    /*!***************************************************************************!*\
      !*** ./node_modules/@arcgis/core/renderers/RasterShadedReliefRenderer.js ***!
      \***************************************************************************/

    /*! exports provided: default */

    /***/
    function aPP3(module, __webpack_exports__, __webpack_require__) {
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


      var _core_lang_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ../core/lang.js */
      "f/qv");
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


      var _core_accessorSupport_decorators_enumeration_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ../core/accessorSupport/decorators/enumeration.js */
      "RI0u");
      /* harmony import */


      var _core_accessorSupport_decorators_reader_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! ../core/accessorSupport/decorators/reader.js */
      "r88o");
      /* harmony import */


      var _core_accessorSupport_decorators_subclass_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! ../core/accessorSupport/decorators/subclass.js */
      "04ZG");
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


      var _core_JSONSupport_js__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
      /*! ../core/JSONSupport.js */
      "ag7Y");
      /* harmony import */


      var _tasks_support_colorRamps_js__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
      /*! ../tasks/support/colorRamps.js */
      "SE0f");
      /*
      All material copyright ESRI, All Rights Reserved, unless otherwise specified.
      See https://js.arcgis.com/4.18/esri/copyright.txt for details.
      */


      var _c;

      var d = _c = /*#__PURE__*/function (_core_JSONSupport_js_3) {
        _inherits(c, _core_JSONSupport_js_3);

        var _super5 = _createSuper(c);

        function c(e) {
          var _this6;

          _classCallCheck(this, c);

          _this6 = _super5.call(this, e), _this6.altitude = 45, _this6.azimuth = 315, _this6.colorRamp = null, _this6.hillshadeType = "multi-directional", _this6.pixelSizePower = .664, _this6.pixelSizeFactor = .024, _this6.scalingType = "none", _this6.type = "raster-shaded-relief", _this6.zFactor = 1;
          return _this6;
        }

        _createClass(c, [{
          key: "readColorRamp",
          value: function readColorRamp(e) {
            return Object(_tasks_support_colorRamps_js__WEBPACK_IMPORTED_MODULE_13__["fromJSON"])(e);
          }
        }, {
          key: "clone",
          value: function clone() {
            return new _c({
              hillshadeType: this.hillshadeType,
              altitude: this.altitude,
              azimuth: this.azimuth,
              zFactor: this.zFactor,
              scalingType: this.scalingType,
              pixelSizeFactor: this.pixelSizeFactor,
              pixelSizePower: this.pixelSizePower,
              colorRamp: Object(_core_lang_js__WEBPACK_IMPORTED_MODULE_2__["clone"])(this.colorRamp)
            });
          }
        }]);

        return c;
      }(_core_JSONSupport_js__WEBPACK_IMPORTED_MODULE_12__["JSONSupport"]);

      Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_5__["property"])({
        type: Number,
        json: {
          write: !0
        }
      })], d.prototype, "altitude", void 0), Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_5__["property"])({
        type: Number,
        json: {
          write: !0
        }
      })], d.prototype, "azimuth", void 0), Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_5__["property"])({
        types: _tasks_support_colorRamps_js__WEBPACK_IMPORTED_MODULE_13__["types"],
        json: {
          write: !0
        }
      })], d.prototype, "colorRamp", void 0), Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_reader_js__WEBPACK_IMPORTED_MODULE_7__["reader"])("colorRamp")], d.prototype, "readColorRamp", null), Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_5__["property"])({
        type: ["traditional", "multi-directional"],
        json: {
          write: !0
        }
      })], d.prototype, "hillshadeType", void 0), Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_5__["property"])({
        type: Number,
        json: {
          write: !0
        }
      })], d.prototype, "pixelSizePower", void 0), Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_5__["property"])({
        type: Number,
        json: {
          write: !0
        }
      })], d.prototype, "pixelSizeFactor", void 0), Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_5__["property"])({
        type: ["none", "adjusted"],
        json: {
          write: !0
        }
      })], d.prototype, "scalingType", void 0), Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_enumeration_js__WEBPACK_IMPORTED_MODULE_6__["enumeration"])({
        rasterShadedRelief: "raster-shaded-relief"
      })], d.prototype, "type", void 0), Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_5__["property"])({
        type: Number,
        json: {
          write: !0
        }
      })], d.prototype, "zFactor", void 0), d = _c = Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_subclass_js__WEBPACK_IMPORTED_MODULE_8__["subclass"])("esri.renderers.RasterShadedReliefRenderer")], d);
      var m = d;
      /* harmony default export */

      __webpack_exports__["default"] = m;
      /***/
    },

    /***/
    "bvrg":
    /*!**********************************************************************!*\
      !*** ./node_modules/@arcgis/core/renderers/RasterStretchRenderer.js ***!
      \**********************************************************************/

    /*! exports provided: default */

    /***/
    function bvrg(module, __webpack_exports__, __webpack_require__) {
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


      var _core_lang_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ../core/lang.js */
      "f/qv");
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


      var _core_accessorSupport_decorators_enumeration_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ../core/accessorSupport/decorators/enumeration.js */
      "RI0u");
      /* harmony import */


      var _core_accessorSupport_decorators_reader_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! ../core/accessorSupport/decorators/reader.js */
      "r88o");
      /* harmony import */


      var _core_accessorSupport_decorators_subclass_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! ../core/accessorSupport/decorators/subclass.js */
      "04ZG");
      /* harmony import */


      var _core_accessorSupport_decorators_writer_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! ../core/accessorSupport/decorators/writer.js */
      "Cduq");
      /* harmony import */


      var _core_urlUtils_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
      /*! ../core/urlUtils.js */
      "4EHJ");
      /* harmony import */


      var _core_uuid_js__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
      /*! ../core/uuid.js */
      "ju1D");
      /* harmony import */


      var _portal_support_resourceExtension_js__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
      /*! ../portal/support/resourceExtension.js */
      "9AIY");
      /* harmony import */


      var _core_JSONSupport_js__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
      /*! ../core/JSONSupport.js */
      "ag7Y");
      /* harmony import */


      var _tasks_support_colorRamps_js__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(
      /*! ../tasks/support/colorRamps.js */
      "SE0f");
      /* harmony import */


      var _support_stretchRendererUtils_js__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(
      /*! ./support/stretchRendererUtils.js */
      "ZVeJ");
      /*
      All material copyright ESRI, All Rights Reserved, unless otherwise specified.
      See https://js.arcgis.com/4.18/esri/copyright.txt for details.
      */


      var _h4;

      var l = _h4 = /*#__PURE__*/function (_core_JSONSupport_js_4) {
        _inherits(h, _core_JSONSupport_js_4);

        var _super6 = _createSuper(h);

        function h(t) {
          var _this7;

          _classCallCheck(this, h);

          _this7 = _super6.call(this, t), _this7.colorRamp = null, _this7.computeGamma = !1, _this7.dynamicRangeAdjustment = !1, _this7.gamma = [], _this7.maxPercent = null, _this7.minPercent = null, _this7.numberOfStandardDeviations = null, _this7.outputMax = null, _this7.outputMin = null, _this7.sigmoidStrengthLevel = null, _this7.statistics = [], _this7.histograms = null, _this7.useGamma = !1, _this7.stretchType = "none", _this7.type = "raster-stretch";
          return _this7;
        }

        _createClass(h, [{
          key: "readColorRamp",
          value: function readColorRamp(t) {
            if (t) return Object(_tasks_support_colorRamps_js__WEBPACK_IMPORTED_MODULE_14__["fromJSON"])(t);
          }
        }, {
          key: "writeStatistics",
          value: function writeStatistics(t, e, r) {
            var o;
            null != (o = t) && o.length && (Array.isArray(t[0]) || (t = t.map(function (t) {
              return [t.min, t.max, t.avg, t.stddev];
            })), e[r] = t);
          }
        }, {
          key: "readStretchType",
          value: function readStretchType(t, e) {
            var r = e.stretchType;
            return "number" == typeof r && (r = _support_stretchRendererUtils_js__WEBPACK_IMPORTED_MODULE_15__["stretchTypeFunctionEnum"][r]), _support_stretchRendererUtils_js__WEBPACK_IMPORTED_MODULE_15__["stretchTypeJSONDict"].read(r);
          }
        }, {
          key: "clone",
          value: function clone() {
            return new _h4({
              stretchType: this.stretchType,
              outputMin: this.outputMin,
              outputMax: this.outputMax,
              useGamma: this.useGamma,
              computeGamma: this.computeGamma,
              statistics: Object(_core_lang_js__WEBPACK_IMPORTED_MODULE_2__["clone"])(this.statistics),
              gamma: Object(_core_lang_js__WEBPACK_IMPORTED_MODULE_2__["clone"])(this.gamma),
              sigmoidStrengthLevel: this.sigmoidStrengthLevel,
              numberOfStandardDeviations: this.numberOfStandardDeviations,
              minPercent: this.minPercent,
              maxPercent: this.maxPercent,
              colorRamp: Object(_core_lang_js__WEBPACK_IMPORTED_MODULE_2__["clone"])(this.colorRamp),
              histograms: Object(_core_lang_js__WEBPACK_IMPORTED_MODULE_2__["clone"])(this.histograms),
              dynamicRangeAdjustment: this.dynamicRangeAdjustment
            });
          }
        }]);

        return h;
      }(_core_JSONSupport_js__WEBPACK_IMPORTED_MODULE_13__["JSONSupport"]);

      Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_5__["property"])({
        types: _tasks_support_colorRamps_js__WEBPACK_IMPORTED_MODULE_14__["types"],
        json: {
          write: !0
        }
      })], l.prototype, "colorRamp", void 0), Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_reader_js__WEBPACK_IMPORTED_MODULE_7__["reader"])("colorRamp")], l.prototype, "readColorRamp", null), Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_5__["property"])({
        type: Boolean,
        json: {
          write: !0
        }
      })], l.prototype, "computeGamma", void 0), Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_5__["property"])({
        type: Boolean,
        json: {
          write: {
            target: "dra"
          },
          read: {
            source: "dra"
          }
        }
      })], l.prototype, "dynamicRangeAdjustment", void 0), Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_5__["property"])({
        type: [Number],
        json: {
          write: !0
        }
      })], l.prototype, "gamma", void 0), Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_5__["property"])({
        type: Number,
        json: {
          write: !0
        }
      })], l.prototype, "maxPercent", void 0), Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_5__["property"])({
        type: Number,
        json: {
          write: !0
        }
      })], l.prototype, "minPercent", void 0), Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_5__["property"])({
        type: _core_accessorSupport_ensureType_js__WEBPACK_IMPORTED_MODULE_4__["Integer"],
        json: {
          write: !0
        }
      })], l.prototype, "numberOfStandardDeviations", void 0), Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_5__["property"])({
        type: Number,
        json: {
          read: {
            source: "max"
          },
          write: {
            target: "max"
          }
        }
      })], l.prototype, "outputMax", void 0), Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_5__["property"])({
        type: Number,
        json: {
          read: {
            source: "min"
          },
          write: {
            target: "min"
          }
        }
      })], l.prototype, "outputMin", void 0), Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_5__["property"])({
        type: Number,
        json: {
          write: !0
        }
      })], l.prototype, "sigmoidStrengthLevel", void 0), Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_5__["property"])({
        json: {
          type: [[Number]],
          write: !0
        }
      })], l.prototype, "statistics", void 0), Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_5__["property"])()], l.prototype, "histograms", void 0), Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_writer_js__WEBPACK_IMPORTED_MODULE_9__["writer"])("statistics")], l.prototype, "writeStatistics", null), Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_5__["property"])({
        type: Boolean,
        json: {
          write: !0
        }
      })], l.prototype, "useGamma", void 0), Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_5__["property"])({
        type: _support_stretchRendererUtils_js__WEBPACK_IMPORTED_MODULE_15__["stretchTypeJSONDict"].apiValues,
        json: {
          type: _support_stretchRendererUtils_js__WEBPACK_IMPORTED_MODULE_15__["stretchTypeJSONDict"].jsonValues,
          write: _support_stretchRendererUtils_js__WEBPACK_IMPORTED_MODULE_15__["stretchTypeJSONDict"].write
        }
      })], l.prototype, "stretchType", void 0), Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_reader_js__WEBPACK_IMPORTED_MODULE_7__["reader"])("stretchType", ["stretchType"])], l.prototype, "readStretchType", null), Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_enumeration_js__WEBPACK_IMPORTED_MODULE_6__["enumeration"])({
        rasterStretch: "raster-stretch"
      })], l.prototype, "type", void 0), l = _h4 = Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_subclass_js__WEBPACK_IMPORTED_MODULE_8__["subclass"])("esri.renderers.RasterStretchRenderer")], l);
      var y = l;
      /* harmony default export */

      __webpack_exports__["default"] = y;
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
    "r6nO":
    /*!*********************************************************************!*\
      !*** ./node_modules/@arcgis/core/renderers/support/ColormapInfo.js ***!
      \*********************************************************************/

    /*! exports provided: default */

    /***/
    function r6nO(module, __webpack_exports__, __webpack_require__) {
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
      /* harmony import */


      var _core_JSONSupport_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! ../../core/JSONSupport.js */
      "ag7Y");
      /* harmony import */


      var _Color_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
      /*! ../../Color.js */
      "nvBr");
      /*
      All material copyright ESRI, All Rights Reserved, unless otherwise specified.
      See https://js.arcgis.com/4.18/esri/copyright.txt for details.
      */


      var i = /*#__PURE__*/function (_core_JSONSupport_js_5) {
        _inherits(i, _core_JSONSupport_js_5);

        var _super7 = _createSuper(i);

        function i() {
          var _this8;

          _classCallCheck(this, i);

          _this8 = _super7.apply(this, arguments), _this8.value = null, _this8.label = null, _this8.color = null;
          return _this8;
        }

        return i;
      }(_core_JSONSupport_js__WEBPACK_IMPORTED_MODULE_9__["JSONSupport"]);

      Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_4__["property"])({
        type: Number,
        json: {
          write: !0
        }
      })], i.prototype, "value", void 0), Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_4__["property"])({
        type: String,
        json: {
          write: !0
        }
      })], i.prototype, "label", void 0), Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_4__["property"])({
        type: _Color_js__WEBPACK_IMPORTED_MODULE_10__["default"],
        json: {
          type: [_core_accessorSupport_ensureType_js__WEBPACK_IMPORTED_MODULE_3__["Integer"]],
          write: !0
        }
      })], i.prototype, "color", void 0), i = Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_subclass_js__WEBPACK_IMPORTED_MODULE_5__["subclass"])("esri.renderers.support.ColormapInfo")], i);
      var c = i;
      /* harmony default export */

      __webpack_exports__["default"] = c;
      /***/
    },

    /***/
    "rI4C":
    /*!************************************************************!*\
      !*** ./node_modules/@arcgis/core/symbols/support/utils.js ***!
      \************************************************************/

    /*! exports provided: applyColorToSymbol, applyOpacityToColor, applyRotationToSymbol, applySizesToSymbol, getIconHref, getSymbolOutlineSize, isVolumetricSymbol */

    /***/
    function rI4C(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "applyColorToSymbol", function () {
        return d;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "applyOpacityToColor", function () {
        return w;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "applyRotationToSymbol", function () {
        return v;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "applySizesToSymbol", function () {
        return z;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "getIconHref", function () {
        return b;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "getSymbolOutlineSize", function () {
        return p;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "isVolumetricSymbol", function () {
        return h;
      });
      /* harmony import */


      var _core_has_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ../../core/has.js */
      "wSAH");
      /* harmony import */


      var _core_maybe_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ../../core/maybe.js */
      "srIe");
      /* harmony import */


      var _Color_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ../../Color.js */
      "nvBr");
      /* harmony import */


      var _core_screenUtils_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ../../core/screenUtils.js */
      "qRWG");
      /* harmony import */


      var _Symbol3DMaterial_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ./Symbol3DMaterial.js */
      "o685");
      /* harmony import */


      var _chunks_symbols_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ../../chunks/symbols.js */
      "nNR5");
      /* harmony import */


      var _core_asyncUtils_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ../../core/asyncUtils.js */
      "eSsm");
      /* harmony import */


      var _chunks_vec3f64_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! ../../chunks/vec3f64.js */
      "Cy1f");
      /* harmony import */


      var _gfxUtils_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! ./gfxUtils.js */
      "zdBc");
      /*
      All material copyright ESRI, All Rights Reserved, unless otherwise specified.
      See https://js.arcgis.com/4.18/esri/copyright.txt for details.
      */


      var m = /\/resource\/(.*?)\.svg$/,
          y = new _Color_js__WEBPACK_IMPORTED_MODULE_2__["default"]("white");

      function p(e) {
        if (!e) return 0;

        if (Object(_chunks_symbols_js__WEBPACK_IMPORTED_MODULE_5__["i"])(e)) {
          var _r13 = function (e) {
            var t = e.symbolLayers && e.symbolLayers.length;
            if (!t) return;
            var r = e.symbolLayers.getItemAt(t - 1);
            return "outline" in r ? Object(_core_maybe_js__WEBPACK_IMPORTED_MODULE_1__["get"])(r, "outline", "size") : void 0;
          }(e);

          return Object(_core_maybe_js__WEBPACK_IMPORTED_MODULE_1__["isSome"])(_r13) ? _r13 : 0;
        }

        var r = Object(_gfxUtils_js__WEBPACK_IMPORTED_MODULE_8__["getStroke"])(e);
        return r && Object(_core_screenUtils_js__WEBPACK_IMPORTED_MODULE_3__["px2pt"])(r.width) || 0;
      }

      function h(e) {
        if (!e || !e.symbolLayers) return !1;

        switch (e.type) {
          case "point-3d":
            return e.symbolLayers.some(function (e) {
              return "object" === e.type;
            });

          case "line-3d":
            return e.symbolLayers.some(function (e) {
              return "path" === e.type;
            });

          case "polygon-3d":
            return e.symbolLayers.some(function (e) {
              return "object" === e.type || "extrude" === e.type;
            });

          default:
            return !1;
        }
      }

      function b(t, o) {
        var r = o.resource.href;
        return !Object(_core_has_js__WEBPACK_IMPORTED_MODULE_0__["default"])("esri-canvas-svg-support") && t.styleOrigin && m.test(r) ? r.replace(m, "/resource/png/$1.png") : r;
      }

      function w(e, t) {
        if (null == t) return e;
        var o = e.toRgba();
        return o[3] = o[3] * t, new _Color_js__WEBPACK_IMPORTED_MODULE_2__["default"](o);
      }

      function d(e, o, i) {
        e && (o || null != i) && (o && (o = new _Color_js__WEBPACK_IMPORTED_MODULE_2__["default"](o)), Object(_chunks_symbols_js__WEBPACK_IMPORTED_MODULE_5__["i"])(e) ? function (e, o, n) {
          var i = e.symbolLayers;
          if (!i) return;

          var c = function c(e) {
            var r = Object(_core_maybe_js__WEBPACK_IMPORTED_MODULE_1__["isSome"])(e) ? e : null;
            return w(o = o || r || null != n && y, n);
          };

          i.forEach(function (e) {
            if ("object" !== e.type || null == e.resource.href || o) if ("water" === e.type) e.color = c(e.color);else {
              var _o14 = Object(_core_maybe_js__WEBPACK_IMPORTED_MODULE_1__["isSome"])(e.material) ? e.material.color : null,
                  _i9 = c(_o14);

              Object(_core_maybe_js__WEBPACK_IMPORTED_MODULE_1__["isNone"])(e.material) ? e.material = new _Symbol3DMaterial_js__WEBPACK_IMPORTED_MODULE_4__["default"]({
                color: _i9
              }) : e.material.color = _i9, null != n && "outline" in e && Object(_core_maybe_js__WEBPACK_IMPORTED_MODULE_1__["isSome"])(e.outline) && Object(_core_maybe_js__WEBPACK_IMPORTED_MODULE_1__["isSome"])(e.outline.color) && (e.outline.color = w(e.outline.color, n));
            }
          });
        }(e, o, i) : Object(_chunks_symbols_js__WEBPACK_IMPORTED_MODULE_5__["c"])(e) && function (e, t, o) {
          (t = t || e.color) && (e.color = w(t, o)), null != o && "outline" in e && e.outline && e.outline.color && (e.outline.color = w(e.outline.color, o));
        }(e, o, i));
      }

      function g(_x18, _x19) {
        return _g3.apply(this, arguments);
      }

      function _g3() {
        _g3 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee15(e, o) {
          var r;
          return regeneratorRuntime.wrap(function _callee15$(_context15) {
            while (1) {
              switch (_context15.prev = _context15.next) {
                case 0:
                  r = e.symbolLayers;
                  _context15.t0 = r;

                  if (!_context15.t0) {
                    _context15.next = 5;
                    break;
                  }

                  _context15.next = 5;
                  return Object(_core_asyncUtils_js__WEBPACK_IMPORTED_MODULE_6__["forEach"])(r, /*#__PURE__*/function () {
                    var _ref5 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee14(e) {
                      return regeneratorRuntime.wrap(function _callee14$(_context14) {
                        while (1) {
                          switch (_context14.prev = _context14.next) {
                            case 0:
                              return _context14.abrupt("return", function () {
                                var _ref6 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee13(e, o) {
                                  return regeneratorRuntime.wrap(function _callee13$(_context13) {
                                    while (1) {
                                      switch (_context13.prev = _context13.next) {
                                        case 0:
                                          _context13.t0 = e.type;
                                          _context13.next = _context13.t0 === "extrude" ? 3 : _context13.t0 === "icon" ? 5 : _context13.t0 === "line" ? 5 : _context13.t0 === "text" ? 5 : _context13.t0 === "path" ? 7 : _context13.t0 === "object" ? 9 : 11;
                                          break;

                                        case 3:
                                          !function (e, t) {
                                            e.size = "number" == typeof t[2] ? t[2] : 0;
                                          }(e, o);
                                          return _context13.abrupt("break", 11);

                                        case 5:
                                          !function (e, o) {
                                            var r = j(o);
                                            Object(_core_maybe_js__WEBPACK_IMPORTED_MODULE_1__["isSome"])(r) && (e.size = r);
                                          }(e, o);
                                          return _context13.abrupt("break", 11);

                                        case 7:
                                          !function (e, t) {
                                            var o = k(t, _chunks_vec3f64_js__WEBPACK_IMPORTED_MODULE_7__["O"], [e.width, void 0, e.height]);
                                            e.width = L(t[0], e.width, 1, o), e.height = L(t[2], e.height, 1, o);
                                          }(e, o);
                                          return _context13.abrupt("break", 11);

                                        case 9:
                                          _context13.next = 11;
                                          return function () {
                                            var _ref7 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee12(e, t) {
                                              var _yield, o, r, n;

                                              return regeneratorRuntime.wrap(function _callee12$(_context12) {
                                                while (1) {
                                                  switch (_context12.prev = _context12.next) {
                                                    case 0:
                                                      _context12.next = 2;
                                                      return function () {
                                                        var _ref8 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee11(e) {
                                                          var t, o, r, n, i, s, c, _e37, _e38;

                                                          return regeneratorRuntime.wrap(function _callee11$(_context11) {
                                                            while (1) {
                                                              switch (_context11.prev = _context11.next) {
                                                                case 0:
                                                                  _context11.next = 2;
                                                                  return __webpack_require__.e(
                                                                  /*! import() | symbolLayerUtils-js */
                                                                  "symbolLayerUtils-js").then(__webpack_require__.bind(null,
                                                                  /*! ./symbolLayerUtils.js */
                                                                  "AF15"));

                                                                case 2:
                                                                  t = _context11.sent;
                                                                  _context11.next = 5;
                                                                  return t.computeObjectLayerResourceSize(e, 10);

                                                                case 5:
                                                                  o = _context11.sent;
                                                                  r = e.width;
                                                                  n = e.height;
                                                                  i = e.depth;
                                                                  s = [r, i, n];
                                                                  c = 1;
                                                                  _e37 = 0;

                                                                case 12:
                                                                  if (!(_e37 < 3)) {
                                                                    _context11.next = 19;
                                                                    break;
                                                                  }

                                                                  if (!(null != s[_e37])) {
                                                                    _context11.next = 16;
                                                                    break;
                                                                  }

                                                                  c = s[_e37] / o[_e37];
                                                                  return _context11.abrupt("break", 19);

                                                                case 16:
                                                                  _e37++;
                                                                  _context11.next = 12;
                                                                  break;

                                                                case 19:
                                                                  for (_e38 = 0; _e38 < 3; _e38++) {
                                                                    null == s[_e38] && (s[_e38] = o[_e38] * c);
                                                                  }

                                                                  return _context11.abrupt("return", {
                                                                    resourceSize: o,
                                                                    symbolSize: s
                                                                  });

                                                                case 21:
                                                                case "end":
                                                                  return _context11.stop();
                                                              }
                                                            }
                                                          }, _callee11);
                                                        }));

                                                        return function (_x27) {
                                                          return _ref8.apply(this, arguments);
                                                        };
                                                      }()(e);

                                                    case 2:
                                                      _yield = _context12.sent;
                                                      o = _yield.resourceSize;
                                                      r = _yield.symbolSize;
                                                      n = k(t, o, r);
                                                      e.width = L(t[0], r[0], o[0], n), e.depth = L(t[1], r[1], o[1], n), e.height = L(t[2], r[2], o[2], n);

                                                    case 7:
                                                    case "end":
                                                      return _context12.stop();
                                                  }
                                                }
                                              }, _callee12);
                                            }));

                                            return function (_x25, _x26) {
                                              return _ref7.apply(this, arguments);
                                            };
                                          }()(e, o);

                                        case 11:
                                        case "end":
                                          return _context13.stop();
                                      }
                                    }
                                  }, _callee13);
                                }));

                                return function (_x23, _x24) {
                                  return _ref6.apply(this, arguments);
                                };
                              }()(e, o));

                            case 1:
                            case "end":
                              return _context14.stop();
                          }
                        }
                      }, _callee14);
                    }));

                    return function (_x22) {
                      return _ref5.apply(this, arguments);
                    };
                  }());

                case 5:
                case "end":
                  return _context15.stop();
              }
            }
          }, _callee15);
        }));
        return _g3.apply(this, arguments);
      }

      function j(e) {
        var _iterator15 = _createForOfIteratorHelper(e),
            _step15;

        try {
          for (_iterator15.s(); !(_step15 = _iterator15.n()).done;) {
            var t = _step15.value;
            if ("number" == typeof t) return t;
          }
        } catch (err) {
          _iterator15.e(err);
        } finally {
          _iterator15.f();
        }

        return null;
      }

      function k(e, t, o) {
        for (var r = 0; r < 3; r++) {
          var n = e[r];

          switch (n) {
            case "symbol-value":
              return null != o[r] ? o[r] / t[r] : 1;

            case "proportional":
              break;

            default:
              if (n && t[r]) return n / t[r];
          }
        }

        return 1;
      }

      function L(e, t, o, r) {
        switch (e) {
          case "proportional":
            return o * r;

          case "symbol-value":
            return null != t ? t : o;

          default:
            return e;
        }
      }

      function z(_x20, _x21) {
        return _z.apply(this, arguments);
      }

      function _z() {
        _z = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee16(e, t) {
          return regeneratorRuntime.wrap(function _callee16$(_context16) {
            while (1) {
              switch (_context16.prev = _context16.next) {
                case 0:
                  if (!(e && t)) {
                    _context16.next = 2;
                    break;
                  }

                  return _context16.abrupt("return", Object(_chunks_symbols_js__WEBPACK_IMPORTED_MODULE_5__["i"])(e) ? g(e, t) : void (Object(_chunks_symbols_js__WEBPACK_IMPORTED_MODULE_5__["c"])(e) && function (e, t) {
                    var o = j(t);
                    if (!Object(_core_maybe_js__WEBPACK_IMPORTED_MODULE_1__["isNone"])(o)) switch (e.type) {
                      case "simple-marker":
                        e.size = o;
                        break;

                      case "picture-marker":
                        {
                          var _t16 = e.width / e.height;

                          _t16 > 1 ? (e.width = o, e.height = o * _t16) : (e.width = o * _t16, e.height = o);
                          break;
                        }

                      case "simple-line":
                        e.width = o;
                        break;

                      case "text":
                        e.font.size = o;
                    }
                  }(e, t)));

                case 2:
                case "end":
                  return _context16.stop();
              }
            }
          }, _callee16);
        }));
        return _z.apply(this, arguments);
      }

      function v(e, t, o) {
        if (e && null != t) if (Object(_chunks_symbols_js__WEBPACK_IMPORTED_MODULE_5__["i"])(e)) {
          var r = e.symbolLayers;
          r && r.forEach(function (e) {
            if (e && "object" === e.type) switch (o) {
              case "tilt":
                e.tilt = t;
                break;

              case "roll":
                e.roll = t;
                break;

              default:
                e.heading = t;
            }
          });
        } else Object(_chunks_symbols_js__WEBPACK_IMPORTED_MODULE_5__["c"])(e) && ("simple-marker" !== e.type && "picture-marker" !== e.type && "text" !== e.type || (e.angle = t));
      }
      /***/

    },

    /***/
    "tidM":
    /*!***************************************************************************!*\
      !*** ./node_modules/@arcgis/core/layers/support/DimensionalDefinition.js ***!
      \***************************************************************************/

    /*! exports provided: default */

    /***/
    function tidM(module, __webpack_exports__, __webpack_require__) {
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


      var _core_lang_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ../../core/lang.js */
      "f/qv");
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


      var _core_accessorSupport_decorators_subclass_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ../../core/accessorSupport/decorators/subclass.js */
      "04ZG");
      /* harmony import */


      var _core_urlUtils_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! ../../core/urlUtils.js */
      "4EHJ");
      /* harmony import */


      var _core_uuid_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! ../../core/uuid.js */
      "ju1D");
      /* harmony import */


      var _portal_support_resourceExtension_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! ../../portal/support/resourceExtension.js */
      "9AIY");
      /* harmony import */


      var _core_JSONSupport_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
      /*! ../../core/JSONSupport.js */
      "ag7Y");
      /*
      All material copyright ESRI, All Rights Reserved, unless otherwise specified.
      See https://js.arcgis.com/4.18/esri/copyright.txt for details.
      */


      var a;

      var p = a = /*#__PURE__*/function (_core_JSONSupport_js_6) {
        _inherits(_class3, _core_JSONSupport_js_6);

        var _super8 = _createSuper(_class3);

        function _class3(e) {
          var _this9;

          _classCallCheck(this, _class3);

          _this9 = _super8.call(this, e), _this9.variableName = null, _this9.dimensionName = null, _this9.values = [], _this9.isSlice = !1;
          return _this9;
        }

        _createClass(_class3, [{
          key: "clone",
          value: function clone() {
            return new a({
              variableName: this.variableName,
              dimensionName: this.dimensionName,
              values: Object(_core_lang_js__WEBPACK_IMPORTED_MODULE_2__["clone"])(this.values),
              isSlice: this.isSlice
            });
          }
        }]);

        return _class3;
      }(_core_JSONSupport_js__WEBPACK_IMPORTED_MODULE_10__["JSONSupport"]);

      Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_5__["property"])({
        type: String,
        json: {
          write: !0
        }
      })], p.prototype, "variableName", void 0), Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_5__["property"])({
        type: String,
        json: {
          write: !0
        }
      })], p.prototype, "dimensionName", void 0), Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_5__["property"])({
        type: _core_accessorSupport_ensureType_js__WEBPACK_IMPORTED_MODULE_4__["types"].array(_core_accessorSupport_ensureType_js__WEBPACK_IMPORTED_MODULE_4__["types"].oneOf([_core_accessorSupport_ensureType_js__WEBPACK_IMPORTED_MODULE_4__["types"]["native"](Number), _core_accessorSupport_ensureType_js__WEBPACK_IMPORTED_MODULE_4__["types"].array(_core_accessorSupport_ensureType_js__WEBPACK_IMPORTED_MODULE_4__["types"]["native"](Number))])),
        json: {
          write: !0
        }
      })], p.prototype, "values", void 0), Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_5__["property"])({
        type: Boolean,
        json: {
          write: !0
        }
      })], p.prototype, "isSlice", void 0), p = a = Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_subclass_js__WEBPACK_IMPORTED_MODULE_6__["subclass"])("esri.layers.support.DimensionalDefinition")], p);
      var n = p;
      /* harmony default export */

      __webpack_exports__["default"] = n;
      /***/
    },

    /***/
    "ukD5":
    /*!******************************************************!*\
      !*** ./node_modules/@arcgis/core/rasterRenderers.js ***!
      \******************************************************/

    /*! exports provided: ClassBreaksRenderer, RasterColormapRenderer, RasterShadedReliefRenderer, RasterStretchRenderer, UniqueValueRenderer, VectorFieldRenderer, fromJSON, rasterRendererTypes, read, websceneRasterRendererTypes */

    /***/
    function ukD5(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "fromJSON", function () {
        return f;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "rasterRendererTypes", function () {
        return o;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "read", function () {
        return u;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "websceneRasterRendererTypes", function () {
        return l;
      });
      /* harmony import */


      var _core_Warning_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ./core/Warning.js */
      "ACjl");
      /* harmony import */


      var _renderers_ClassBreaksRenderer_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./renderers/ClassBreaksRenderer.js */
      "tCO6");
      /* harmony reexport (safe) */


      __webpack_require__.d(__webpack_exports__, "ClassBreaksRenderer", function () {
        return _renderers_ClassBreaksRenderer_js__WEBPACK_IMPORTED_MODULE_1__["default"];
      });
      /* harmony import */


      var _renderers_RasterColormapRenderer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./renderers/RasterColormapRenderer.js */
      "MWLC");
      /* harmony reexport (safe) */


      __webpack_require__.d(__webpack_exports__, "RasterColormapRenderer", function () {
        return _renderers_RasterColormapRenderer_js__WEBPACK_IMPORTED_MODULE_2__["default"];
      });
      /* harmony import */


      var _renderers_RasterShadedReliefRenderer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./renderers/RasterShadedReliefRenderer.js */
      "aPP3");
      /* harmony reexport (safe) */


      __webpack_require__.d(__webpack_exports__, "RasterShadedReliefRenderer", function () {
        return _renderers_RasterShadedReliefRenderer_js__WEBPACK_IMPORTED_MODULE_3__["default"];
      });
      /* harmony import */


      var _renderers_RasterStretchRenderer_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ./renderers/RasterStretchRenderer.js */
      "bvrg");
      /* harmony reexport (safe) */


      __webpack_require__.d(__webpack_exports__, "RasterStretchRenderer", function () {
        return _renderers_RasterStretchRenderer_js__WEBPACK_IMPORTED_MODULE_4__["default"];
      });
      /* harmony import */


      var _renderers_UniqueValueRenderer_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ./renderers/UniqueValueRenderer.js */
      "2gBT");
      /* harmony reexport (safe) */


      __webpack_require__.d(__webpack_exports__, "UniqueValueRenderer", function () {
        return _renderers_UniqueValueRenderer_js__WEBPACK_IMPORTED_MODULE_5__["default"];
      });
      /* harmony import */


      var _renderers_VectorFieldRenderer_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ./renderers/VectorFieldRenderer.js */
      "CLyZ");
      /* harmony reexport (safe) */


      __webpack_require__.d(__webpack_exports__, "VectorFieldRenderer", function () {
        return _renderers_VectorFieldRenderer_js__WEBPACK_IMPORTED_MODULE_6__["default"];
      });
      /*
      All material copyright ESRI, All Rights Reserved, unless otherwise specified.
      See https://js.arcgis.com/4.18/esri/copyright.txt for details.
      */


      var o = {
        key: "type",
        base: null,
        typeMap: {
          "unique-value": _renderers_UniqueValueRenderer_js__WEBPACK_IMPORTED_MODULE_5__["default"],
          "class-breaks": _renderers_ClassBreaksRenderer_js__WEBPACK_IMPORTED_MODULE_1__["default"],
          "raster-colormap": _renderers_RasterColormapRenderer_js__WEBPACK_IMPORTED_MODULE_2__["default"],
          "raster-stretch": _renderers_RasterStretchRenderer_js__WEBPACK_IMPORTED_MODULE_4__["default"],
          "vector-field": _renderers_VectorFieldRenderer_js__WEBPACK_IMPORTED_MODULE_6__["default"],
          "raster-shaded-relief": _renderers_RasterShadedReliefRenderer_js__WEBPACK_IMPORTED_MODULE_3__["default"]
        }
      },
          l = _objectSpread(_objectSpread({}, o), {}, {
        typeMap: _objectSpread({}, o.typeMap)
      });

      delete l.typeMap["vector-field"];
      var p = {
        uniqueValue: _renderers_UniqueValueRenderer_js__WEBPACK_IMPORTED_MODULE_5__["default"],
        classBreaks: _renderers_ClassBreaksRenderer_js__WEBPACK_IMPORTED_MODULE_1__["default"],
        rasterStretch: _renderers_RasterStretchRenderer_js__WEBPACK_IMPORTED_MODULE_4__["default"],
        rasterColormap: _renderers_RasterColormapRenderer_js__WEBPACK_IMPORTED_MODULE_2__["default"],
        vectorField: _renderers_VectorFieldRenderer_js__WEBPACK_IMPORTED_MODULE_6__["default"],
        rasterShadedRelief: _renderers_RasterShadedReliefRenderer_js__WEBPACK_IMPORTED_MODULE_3__["default"]
      };

      function u(r, s) {
        if (!r) return null;

        var t = function (e) {
          return e && p[e.type] || null;
        }(r);

        if (t) {
          var e = new t();
          return e.read(r, s), e;
        }

        return s && s.messages && r && s.messages.push(new _core_Warning_js__WEBPACK_IMPORTED_MODULE_0__["default"]("renderer:unsupported", "Renderers of type '" + (r.type || "unknown") + "' are not supported", {
          definition: r,
          context: s
        })), null;
      }

      function f(e, r) {
        return u(e, r);
      }
      /***/

    },

    /***/
    "zdBc":
    /*!***************************************************************!*\
      !*** ./node_modules/@arcgis/core/symbols/support/gfxUtils.js ***!
      \***************************************************************/

    /*! exports provided: defaultThematicColor, getFill, getPatternUrlWithColor, getSVGAlign, getSVGBaseline, getSVGBaselineShift, getStroke */

    /***/
    function zdBc(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "defaultThematicColor", function () {
        return b;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "getFill", function () {
        return d;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "getPatternUrlWithColor", function () {
        return h;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "getSVGAlign", function () {
        return p;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "getSVGBaseline", function () {
        return u;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "getSVGBaselineShift", function () {
        return f;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "getStroke", function () {
        return g;
      });
      /* harmony import */


      var _core_promiseUtils_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ../../core/promiseUtils.js */
      "9MzC");
      /* harmony import */


      var _Color_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ../../Color.js */
      "nvBr");
      /* harmony import */


      var _core_screenUtils_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ../../core/screenUtils.js */
      "qRWG");
      /* harmony import */


      var _request_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ../../request.js */
      "Lqtk");
      /* harmony import */


      var _assets_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ../../assets.js */
      "ss0y");
      /* harmony import */


      var _core_ItemCache_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ../../core/ItemCache.js */
      "1/KW");
      /* harmony import */


      var _cimSymbolUtils_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ./cimSymbolUtils.js */
      "1EXT");
      /*
      All material copyright ESRI, All Rights Reserved, unless otherwise specified.
      See https://js.arcgis.com/4.18/esri/copyright.txt for details.
      */


      var l = Object(_assets_js__WEBPACK_IMPORTED_MODULE_4__["getAssetUrl"])("esri/symbols/patterns/"),
          c = {
        left: "start",
        center: "middle",
        right: "end",
        justify: "start"
      },
          a = {
        top: "text-before-edge",
        middle: "central",
        baseline: "alphabetic",
        bottom: "text-after-edge"
      },
          m = new _core_ItemCache_js__WEBPACK_IMPORTED_MODULE_5__["default"](1e3);

      function p(t) {
        var e = t.horizontalAlignment;
        return e = e && c[e.toLowerCase()] || "middle", e;
      }

      function u(t) {
        var e = t.verticalAlignment;
        return e && a[e.toLowerCase()] || "alphabetic";
      }

      function f(t) {
        return "bottom" === t.verticalAlignment ? "super" : null;
      }

      function d(t) {
        var e = t.style;
        var o = null;
        if (t) switch (t.type) {
          case "simple-marker":
            "cross" !== e && "x" !== e && (o = t.color);
            break;

          case "simple-fill":
            "solid" === e ? o = t.color : "none" !== e && (o = {
              type: "pattern",
              x: 0,
              y: 0,
              src: l + e + ".png",
              width: 5,
              height: 5
            });
            break;

          case "picture-fill":
            o = {
              type: "pattern",
              src: t.url,
              width: Object(_core_screenUtils_js__WEBPACK_IMPORTED_MODULE_2__["pt2px"])(t.width) * t.xscale,
              height: Object(_core_screenUtils_js__WEBPACK_IMPORTED_MODULE_2__["pt2px"])(t.height) * t.yscale,
              x: Object(_core_screenUtils_js__WEBPACK_IMPORTED_MODULE_2__["pt2px"])(t.xoffset),
              y: Object(_core_screenUtils_js__WEBPACK_IMPORTED_MODULE_2__["pt2px"])(t.yoffset)
            };
            break;

          case "text":
            o = t.color;
            break;

          case "cim":
            o = Object(_cimSymbolUtils_js__WEBPACK_IMPORTED_MODULE_6__["getCIMSymbolColor"])(t);
        }
        return o;
      }

      function h(e, r) {
        var i = e + "-" + r;
        return void 0 !== m.get(i) ? Object(_core_promiseUtils_js__WEBPACK_IMPORTED_MODULE_0__["resolve"])(m.get(i)) : Object(_request_js__WEBPACK_IMPORTED_MODULE_3__["default"])(e, {
          responseType: "image"
        }).then(function (t) {
          var e = t.data,
              o = e.naturalWidth,
              n = e.naturalHeight,
              s = document.createElement("canvas");
          s.width = o, s.height = n;
          var l = s.getContext("2d");
          l.fillStyle = r, l.fillRect(0, 0, o, n), l.globalCompositeOperation = "destination-in", l.drawImage(e, 0, 0);
          var c = s.toDataURL();
          return m.put(i, c), c;
        });
      }

      function g(t) {
        if (!t) return null;
        var e;

        switch (t.type) {
          case "simple-fill":
          case "picture-fill":
          case "simple-marker":
            e = g(t.outline);
            break;

          case "simple-line":
            {
              var o = Object(_core_screenUtils_js__WEBPACK_IMPORTED_MODULE_2__["pt2px"])(t.width);
              "none" !== t.style && 0 !== o && (e = {
                color: t.color,
                style: y(t.style),
                width: o,
                cap: t.cap,
                join: "miter" === t.join ? Object(_core_screenUtils_js__WEBPACK_IMPORTED_MODULE_2__["pt2px"])(t.miterLimit) : t.join
              });
              break;
            }

          default:
            e = null;
        }

        return e;
      }

      var y = function () {
        var t = {};
        return function (e) {
          if (t[e]) return t[e];
          var r = e.replace(/-/g, "");
          return t[e] = r, r;
        };
      }(),
          b = new _Color_js__WEBPACK_IMPORTED_MODULE_1__["default"]([128, 128, 128]);
      /***/

    }
  }]);
})();
//# sourceMappingURL=default~ImageryLayer-js~ImageryTileLayer-js-es5.js.map