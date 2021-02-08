(function () {
  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  function _get(target, property, receiver) { if (typeof Reflect !== "undefined" && Reflect.get) { _get = Reflect.get; } else { _get = function _get(target, property, receiver) { var base = _superPropBase(target, property); if (!base) return; var desc = Object.getOwnPropertyDescriptor(base, property); if (desc.get) { return desc.get.call(receiver); } return desc.value; }; } return _get(target, property, receiver || target); }

  function _superPropBase(object, property) { while (!Object.prototype.hasOwnProperty.call(object, property)) { object = _getPrototypeOf(object); if (object === null) break; } return object; }

  function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

  function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

  function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

  function _possibleConstructorReturn(self, call) { if (call && (typeof call === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

  function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

  function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

  function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

  function _createForOfIteratorHelper(o, allowArrayLike) { var it; if (typeof Symbol === "undefined" || o[Symbol.iterator] == null) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e16) { throw _e16; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = o[Symbol.iterator](); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e17) { didErr = true; err = _e17; }, f: function f() { try { if (!normalCompletion && it["return"] != null) it["return"](); } finally { if (didErr) throw err; } } }; }

  function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

  function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

  function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

  function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

  function _iterableToArrayLimit(arr, i) { if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr))) return; var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

  function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["MapNotesLayer-js"], {
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
    "Wvof":
    /*!***********************************************************!*\
      !*** ./node_modules/@arcgis/core/layers/MapNotesLayer.js ***!
      \***********************************************************/

    /*! exports provided: default */

    /***/
    function Wvof(module, __webpack_exports__, __webpack_require__) {
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


      var _core_accessorSupport_decorators_reader_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ../core/accessorSupport/decorators/reader.js */
      "r88o");
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


      var _geometry_SpatialReference_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
      /*! ../geometry/SpatialReference.js */
      "WZb1");
      /* harmony import */


      var _geometry_Extent_js__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
      /*! ../geometry/Extent.js */
      "OvF4");
      /* harmony import */


      var _geometry_js__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
      /*! ../geometry.js */
      "4GrV");
      /* harmony import */


      var _core_Collection_js__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
      /*! ../core/Collection.js */
      "LE9a");
      /* harmony import */


      var _Layer_js__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(
      /*! ./Layer.js */
      "pqNC");
      /* harmony import */


      var _core_MultiOriginJSONSupport_js__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(
      /*! ../core/MultiOriginJSONSupport.js */
      "5pQd");
      /* harmony import */


      var _mixins_OperationalLayer_js__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(
      /*! ./mixins/OperationalLayer.js */
      "uRH/");
      /* harmony import */


      var _mixins_BlendLayer_js__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(
      /*! ./mixins/BlendLayer.js */
      "mXvl");
      /* harmony import */


      var _mixins_PortalLayer_js__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(
      /*! ./mixins/PortalLayer.js */
      "DbUH");
      /* harmony import */


      var _mixins_ScaleRangeLayer_js__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(
      /*! ./mixins/ScaleRangeLayer.js */
      "WmKv");
      /* harmony import */


      var _FeatureLayer_js__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(
      /*! ./FeatureLayer.js */
      "W9Wu");
      /* harmony import */


      var _support_GraphicsCollection_js__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(
      /*! ../support/GraphicsCollection.js */
      "9iar");
      /*
      All material copyright ESRI, All Rights Reserved, unless otherwise specified.
      See https://js.arcgis.com/4.18/esri/copyright.txt for details.
      */


      var h = /*#__PURE__*/function (_Object) {
        _inherits(h, _Object);

        var _super = _createSuper(h);

        function h(e) {
          var _this;

          _classCallCheck(this, h);

          _this = _super.call(this, e), _this.capabilities = {
            operations: {
              supportsEditing: !0
            }
          }, _this.legendEnabled = !1, _this.lineGraphics = new _support_GraphicsCollection_js__WEBPACK_IMPORTED_MODULE_21__["default"](), _this.opacity = 1, _this.pointGraphics = new _support_GraphicsCollection_js__WEBPACK_IMPORTED_MODULE_21__["default"](), _this.polygonGraphics = new _support_GraphicsCollection_js__WEBPACK_IMPORTED_MODULE_21__["default"](), _this.textGraphics = new _support_GraphicsCollection_js__WEBPACK_IMPORTED_MODULE_21__["default"](), _this.type = "map-notes";
          return _this;
        }

        _createClass(h, [{
          key: "readFullExtent",
          value: function readFullExtent(e, r) {
            if (!r.layers.length) return new _geometry_Extent_js__WEBPACK_IMPORTED_MODULE_11__["default"]({
              xmin: -180,
              ymin: -90,
              xmax: 180,
              ymax: 90,
              spatialReference: _geometry_SpatialReference_js__WEBPACK_IMPORTED_MODULE_10__["default"].WGS84
            });

            var o = _geometry_SpatialReference_js__WEBPACK_IMPORTED_MODULE_10__["default"].fromJSON(r.layers[0].layerDefinition.spatialReference);

            return r.layers.reduce(function (e, r) {
              var o = r.layerDefinition.extent;
              return o ? _geometry_Extent_js__WEBPACK_IMPORTED_MODULE_11__["default"].fromJSON(o).union(e) : e;
            }, new _geometry_Extent_js__WEBPACK_IMPORTED_MODULE_11__["default"]({
              spatialReference: o
            }));
          }
        }, {
          key: "readCapabilities",
          value: function readCapabilities(e, r) {
            return {
              operations: {
                supportsEditing: !r.layers.some(function (e) {
                  return !!e.layerDefinition.drawingInfo;
                })
              }
            };
          }
        }, {
          key: "readFeatureCollections",
          value: function readFeatureCollections(e, r, o) {
            var t = r.layers.map(function (e) {
              var r = new _FeatureLayer_js__WEBPACK_IMPORTED_MODULE_20__["default"]();
              return r.read(e, o), r;
            });
            return new _core_Collection_js__WEBPACK_IMPORTED_MODULE_13__["default"]({
              items: t
            });
          }
        }, {
          key: "readMinScale",
          value: function readMinScale(e, r) {
            var _iterator3 = _createForOfIteratorHelper(r.layers),
                _step3;

            try {
              for (_iterator3.s(); !(_step3 = _iterator3.n()).done;) {
                var _e14 = _step3.value;
                if (null != _e14.layerDefinition.minScale) return _e14.layerDefinition.minScale;
              }
            } catch (err) {
              _iterator3.e(err);
            } finally {
              _iterator3.f();
            }

            return 0;
          }
        }, {
          key: "readMaxScale",
          value: function readMaxScale(e, r) {
            var _iterator4 = _createForOfIteratorHelper(r.layers),
                _step4;

            try {
              for (_iterator4.s(); !(_step4 = _iterator4.n()).done;) {
                var _e15 = _step4.value;
                if (null != _e15.layerDefinition.maxScale) return _e15.layerDefinition.maxScale;
              }
            } catch (err) {
              _iterator4.e(err);
            } finally {
              _iterator4.f();
            }

            return 0;
          }
        }, {
          key: "load",
          value: function load(e) {
            return this.addResolvingPromise(this.loadFromPortal({
              supportedTypes: ["Feature Collection"]
            }, e)), Promise.resolve(this);
          }
        }, {
          key: "read",
          value: function read(e, r) {
            "featureCollection" in e && _get(_getPrototypeOf(h.prototype), "read", this).call(this, e.featureCollection, r), _get(_getPrototypeOf(h.prototype), "read", this).call(this, e, r);
          }
        }]);

        return h;
      }(Object(_mixins_BlendLayer_js__WEBPACK_IMPORTED_MODULE_17__["BlendLayer"])(Object(_mixins_ScaleRangeLayer_js__WEBPACK_IMPORTED_MODULE_19__["ScaleRangeLayer"])(Object(_mixins_OperationalLayer_js__WEBPACK_IMPORTED_MODULE_16__["OperationalLayer"])(Object(_mixins_PortalLayer_js__WEBPACK_IMPORTED_MODULE_18__["PortalLayer"])(Object(_core_MultiOriginJSONSupport_js__WEBPACK_IMPORTED_MODULE_15__["MultiOriginJSONMixin"])(_Layer_js__WEBPACK_IMPORTED_MODULE_14__["default"]))))));

      Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_reader_js__WEBPACK_IMPORTED_MODULE_5__["reader"])(["web-map", "portal-item"], "fullExtent", ["layers"])], h.prototype, "readFullExtent", null), Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_4__["property"])({
        readOnly: !0
      })], h.prototype, "capabilities", void 0), Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_reader_js__WEBPACK_IMPORTED_MODULE_5__["reader"])(["portal-item", "web-map"], "capabilities", ["layers"])], h.prototype, "readCapabilities", null), Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_4__["property"])({
        readOnly: !0
      })], h.prototype, "featureCollections", void 0), Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_reader_js__WEBPACK_IMPORTED_MODULE_5__["reader"])(["web-map", "portal-item"], "featureCollections", ["layers"])], h.prototype, "readFeatureCollections", null), Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_4__["property"])({
        readOnly: !0,
        json: {
          origins: {
            service: {
              read: {
                enabled: !1
              }
            }
          },
          name: "showLegend",
          write: !0
        }
      })], h.prototype, "legendEnabled", void 0), Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_4__["property"])(Object(_support_GraphicsCollection_js__WEBPACK_IMPORTED_MODULE_21__["graphicsCollectionProperty"])("lineGraphics"))], h.prototype, "lineGraphics", void 0), Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_4__["property"])({
        type: ["show", "hide"]
      })], h.prototype, "listMode", void 0), Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_reader_js__WEBPACK_IMPORTED_MODULE_5__["reader"])(["web-map", "portal-item"], "minScale", ["layers"])], h.prototype, "readMinScale", null), Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_reader_js__WEBPACK_IMPORTED_MODULE_5__["reader"])(["web-map", "portal-item"], "maxScale", ["layers"])], h.prototype, "readMaxScale", null), Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_4__["property"])({
        type: Number,
        json: {
          name: "opacity",
          write: !0
        }
      })], h.prototype, "opacity", void 0), Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_4__["property"])(Object(_support_GraphicsCollection_js__WEBPACK_IMPORTED_MODULE_21__["graphicsCollectionProperty"])("pointGraphics"))], h.prototype, "pointGraphics", void 0), Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_4__["property"])(Object(_support_GraphicsCollection_js__WEBPACK_IMPORTED_MODULE_21__["graphicsCollectionProperty"])("polygonGraphics"))], h.prototype, "polygonGraphics", void 0), Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_4__["property"])(Object(_support_GraphicsCollection_js__WEBPACK_IMPORTED_MODULE_21__["graphicsCollectionProperty"])("textGraphics"))], h.prototype, "textGraphics", void 0), Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_4__["property"])({
        readOnly: !0,
        json: {
          read: !1
        }
      })], h.prototype, "type", void 0), h = Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_subclass_js__WEBPACK_IMPORTED_MODULE_6__["subclass"])("esri.layers.MapNotesLayer")], h);
      var j = h;
      /* harmony default export */

      __webpack_exports__["default"] = j;
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
    }
  }]);
})();
//# sourceMappingURL=MapNotesLayer-js-es5.js.map