(function () {
  function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

  function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

  function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

  function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

  function _possibleConstructorReturn(self, call) { if (call && (typeof call === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

  function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

  function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

  function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

  function _createForOfIteratorHelper(o, allowArrayLike) { var it; if (typeof Symbol === "undefined" || o[Symbol.iterator] == null) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e14) { throw _e14; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = o[Symbol.iterator](); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e15) { didErr = true; err = _e15; }, f: function f() { try { if (!normalCompletion && it["return"] != null) it["return"](); } finally { if (didErr) throw err; } } }; }

  function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

  function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

  function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

  function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

  function _iterableToArrayLimit(arr, i) { if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr))) return; var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

  function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["default~BuildingSceneLayer-js~SceneLayer-js"], {
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
    "XTTP":
    /*!*************************************************************************!*\
      !*** ./node_modules/@arcgis/core/layers/support/I3SLayerDefinitions.js ***!
      \*************************************************************************/

    /*! exports provided: I3SGeometryAttribute, I3SGeometryBuffer, I3SGeometryCompressedAttributes, I3SGeometryDefinition, I3SMaterialDefinition, I3SMaterialPBRMetallicRoughness, I3SMaterialTexture, I3SNodePageDefinition, I3STextureFormat, I3STextureSetDefinition */

    /***/
    function XTTP(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "I3SGeometryAttribute", function () {
        return y;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "I3SGeometryBuffer", function () {
        return d;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "I3SGeometryCompressedAttributes", function () {
        return c;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "I3SGeometryDefinition", function () {
        return m;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "I3SMaterialDefinition", function () {
        return a;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "I3SMaterialPBRMetallicRoughness", function () {
        return l;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "I3SMaterialTexture", function () {
        return i;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "I3SNodePageDefinition", function () {
        return s;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "I3STextureFormat", function () {
        return n;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "I3STextureSetDefinition", function () {
        return u;
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


      var _core_accessorSupport_decorators_enumeration_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ../../core/accessorSupport/decorators/enumeration.js */
      "RI0u");
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


      var s = /*#__PURE__*/function (_core_JSONSupport_js_) {
        _inherits(s, _core_JSONSupport_js_);

        var _super = _createSuper(s);

        function s() {
          var _this;

          _classCallCheck(this, s);

          _this = _super.apply(this, arguments), _this.nodesPerPage = null, _this.rootIndex = 0, _this.lodSelectionMetricType = null;
          return _this;
        }

        return s;
      }(_core_JSONSupport_js__WEBPACK_IMPORTED_MODULE_10__["JSONSupport"]);

      Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_4__["property"])({
        type: Number
      })], s.prototype, "nodesPerPage", void 0), Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_4__["property"])({
        type: Number
      })], s.prototype, "rootIndex", void 0), Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_4__["property"])({
        type: String
      })], s.prototype, "lodSelectionMetricType", void 0), s = Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_subclass_js__WEBPACK_IMPORTED_MODULE_6__["subclass"])("esri.layer.support.I3SNodePageDefinition")], s);

      var i = /*#__PURE__*/function (_core_JSONSupport_js_2) {
        _inherits(i, _core_JSONSupport_js_2);

        var _super2 = _createSuper(i);

        function i() {
          var _this2;

          _classCallCheck(this, i);

          _this2 = _super2.apply(this, arguments), _this2.factor = 1;
          return _this2;
        }

        return i;
      }(_core_JSONSupport_js__WEBPACK_IMPORTED_MODULE_10__["JSONSupport"]);

      Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_4__["property"])({
        type: Number,
        json: {
          read: {
            source: "textureSetDefinitionId"
          }
        }
      })], i.prototype, "id", void 0), Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_4__["property"])({
        type: Number
      })], i.prototype, "factor", void 0), i = Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_subclass_js__WEBPACK_IMPORTED_MODULE_6__["subclass"])("esri.layer.support.I3SMaterialTexture")], i);

      var l = /*#__PURE__*/function (_core_JSONSupport_js_3) {
        _inherits(l, _core_JSONSupport_js_3);

        var _super3 = _createSuper(l);

        function l() {
          var _this3;

          _classCallCheck(this, l);

          _this3 = _super3.apply(this, arguments), _this3.baseColorFactor = [1, 1, 1, 1], _this3.baseColorTexture = null, _this3.metallicRoughnessTexture = null, _this3.metallicFactor = 1, _this3.roughnessFactor = 1;
          return _this3;
        }

        return l;
      }(_core_JSONSupport_js__WEBPACK_IMPORTED_MODULE_10__["JSONSupport"]);

      Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_4__["property"])({
        type: [Number]
      })], l.prototype, "baseColorFactor", void 0), Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_4__["property"])({
        type: i
      })], l.prototype, "baseColorTexture", void 0), Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_4__["property"])({
        type: i
      })], l.prototype, "metallicRoughnessTexture", void 0), Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_4__["property"])({
        type: Number
      })], l.prototype, "metallicFactor", void 0), Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_4__["property"])({
        type: Number
      })], l.prototype, "roughnessFactor", void 0), l = Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_subclass_js__WEBPACK_IMPORTED_MODULE_6__["subclass"])("esri.layer.support.I3SMaterialPBRMetallicRoughness")], l);

      var a = /*#__PURE__*/function (_core_JSONSupport_js_4) {
        _inherits(a, _core_JSONSupport_js_4);

        var _super4 = _createSuper(a);

        function a() {
          var _this4;

          _classCallCheck(this, a);

          _this4 = _super4.apply(this, arguments), _this4.alphaMode = "opaque", _this4.alphaCutoff = .25, _this4.doubleSided = !1, _this4.cullFace = "none", _this4.normalTexture = null, _this4.occlusionTexture = null, _this4.emissiveTexture = null, _this4.emissiveFactor = null, _this4.pbrMetallicRoughness = null;
          return _this4;
        }

        return a;
      }(_core_JSONSupport_js__WEBPACK_IMPORTED_MODULE_10__["JSONSupport"]);

      Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_enumeration_js__WEBPACK_IMPORTED_MODULE_5__["enumeration"])({
        opaque: "opaque",
        mask: "mask",
        blend: "blend"
      })], a.prototype, "alphaMode", void 0), Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_4__["property"])({
        type: Number
      })], a.prototype, "alphaCutoff", void 0), Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_4__["property"])({
        type: Boolean
      })], a.prototype, "doubleSided", void 0), Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_enumeration_js__WEBPACK_IMPORTED_MODULE_5__["enumeration"])({
        none: "none",
        back: "back",
        front: "front"
      })], a.prototype, "cullFace", void 0), Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_4__["property"])({
        type: i
      })], a.prototype, "normalTexture", void 0), Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_4__["property"])({
        type: i
      })], a.prototype, "occlusionTexture", void 0), Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_4__["property"])({
        type: i
      })], a.prototype, "emissiveTexture", void 0), Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_4__["property"])({
        type: [Number]
      })], a.prototype, "emissiveFactor", void 0), Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_4__["property"])({
        type: l
      })], a.prototype, "pbrMetallicRoughness", void 0), a = Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_subclass_js__WEBPACK_IMPORTED_MODULE_6__["subclass"])("esri.layer.support.I3SMaterialDefinition")], a);

      var n = /*#__PURE__*/function (_core_JSONSupport_js_5) {
        _inherits(n, _core_JSONSupport_js_5);

        var _super5 = _createSuper(n);

        function n() {
          _classCallCheck(this, n);

          return _super5.apply(this, arguments);
        }

        return n;
      }(_core_JSONSupport_js__WEBPACK_IMPORTED_MODULE_10__["JSONSupport"]);

      Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_4__["property"])({
        type: String,
        json: {
          read: {
            source: ["name", "index"],
            reader: function reader(e, t) {
              return null != e ? e : "".concat(t.index);
            }
          }
        }
      })], n.prototype, "name", void 0), Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_enumeration_js__WEBPACK_IMPORTED_MODULE_5__["enumeration"])({
        jpg: "jpg",
        png: "png",
        dds: "dds",
        "ktx-etc2": "ktx-etc2"
      })], n.prototype, "format", void 0), n = Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_subclass_js__WEBPACK_IMPORTED_MODULE_6__["subclass"])("esri.layer.support.I3STextureFormat")], n);

      var u = /*#__PURE__*/function (_core_JSONSupport_js_6) {
        _inherits(u, _core_JSONSupport_js_6);

        var _super6 = _createSuper(u);

        function u() {
          var _this5;

          _classCallCheck(this, u);

          _this5 = _super6.apply(this, arguments), _this5.atlas = !1;
          return _this5;
        }

        return u;
      }(_core_JSONSupport_js__WEBPACK_IMPORTED_MODULE_10__["JSONSupport"]);

      Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_4__["property"])({
        type: [n]
      })], u.prototype, "formats", void 0), Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_4__["property"])({
        type: Boolean
      })], u.prototype, "atlas", void 0), u = Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_subclass_js__WEBPACK_IMPORTED_MODULE_6__["subclass"])("esri.layer.support.I3STextureSetDefinition")], u);

      var y = /*#__PURE__*/function (_core_JSONSupport_js_7) {
        _inherits(y, _core_JSONSupport_js_7);

        var _super7 = _createSuper(y);

        function y() {
          _classCallCheck(this, y);

          return _super7.apply(this, arguments);
        }

        return y;
      }(_core_JSONSupport_js__WEBPACK_IMPORTED_MODULE_10__["JSONSupport"]);

      Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_enumeration_js__WEBPACK_IMPORTED_MODULE_5__["enumeration"])({
        Float32: "Float32",
        UInt64: "UInt64",
        UInt32: "UInt32",
        UInt16: "UInt16",
        UInt8: "UInt8"
      })], y.prototype, "type", void 0), Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_4__["property"])({
        type: Number
      })], y.prototype, "component", void 0), y = Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_subclass_js__WEBPACK_IMPORTED_MODULE_6__["subclass"])("esri.layer.support.I3SGeometryAttribute")], y);

      var c = /*#__PURE__*/function (_core_JSONSupport_js_8) {
        _inherits(c, _core_JSONSupport_js_8);

        var _super8 = _createSuper(c);

        function c() {
          _classCallCheck(this, c);

          return _super8.apply(this, arguments);
        }

        return c;
      }(_core_JSONSupport_js__WEBPACK_IMPORTED_MODULE_10__["JSONSupport"]);

      Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_enumeration_js__WEBPACK_IMPORTED_MODULE_5__["enumeration"])({
        draco: "draco"
      })], c.prototype, "encoding", void 0), Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_4__["property"])({
        type: [String]
      })], c.prototype, "attributes", void 0), c = Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_subclass_js__WEBPACK_IMPORTED_MODULE_6__["subclass"])("esri.layer.support.I3SGeometryCompressedAttributes")], c);

      var d = /*#__PURE__*/function (_core_JSONSupport_js_9) {
        _inherits(d, _core_JSONSupport_js_9);

        var _super9 = _createSuper(d);

        function d() {
          var _this6;

          _classCallCheck(this, d);

          _this6 = _super9.apply(this, arguments), _this6.offset = 0;
          return _this6;
        }

        return d;
      }(_core_JSONSupport_js__WEBPACK_IMPORTED_MODULE_10__["JSONSupport"]);

      Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_4__["property"])({
        type: Number
      })], d.prototype, "offset", void 0), Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_4__["property"])({
        type: y
      })], d.prototype, "position", void 0), Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_4__["property"])({
        type: y
      })], d.prototype, "normal", void 0), Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_4__["property"])({
        type: y
      })], d.prototype, "uv0", void 0), Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_4__["property"])({
        type: y
      })], d.prototype, "color", void 0), Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_4__["property"])({
        type: y
      })], d.prototype, "uvRegion", void 0), Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_4__["property"])({
        type: y
      })], d.prototype, "featureId", void 0), Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_4__["property"])({
        type: y
      })], d.prototype, "faceRange", void 0), Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_4__["property"])({
        type: c
      })], d.prototype, "compressedAttributes", void 0), d = Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_subclass_js__WEBPACK_IMPORTED_MODULE_6__["subclass"])("esri.layer.support.I3SGeometryBuffer")], d);

      var m = /*#__PURE__*/function (_core_JSONSupport_js_10) {
        _inherits(m, _core_JSONSupport_js_10);

        var _super10 = _createSuper(m);

        function m() {
          _classCallCheck(this, m);

          return _super10.apply(this, arguments);
        }

        return m;
      }(_core_JSONSupport_js__WEBPACK_IMPORTED_MODULE_10__["JSONSupport"]);

      Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_enumeration_js__WEBPACK_IMPORTED_MODULE_5__["enumeration"])({
        triangle: "triangle"
      })], m.prototype, "topology", void 0), Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_4__["property"])()], m.prototype, "geometryBuffers", void 0), m = Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_subclass_js__WEBPACK_IMPORTED_MODULE_6__["subclass"])("esri.layer.support.I3SGeometryDefinition")], m);
      /***/
    },

    /***/
    "fqtG":
    /*!******************************************************************!*\
      !*** ./node_modules/@arcgis/core/layers/support/capabilities.js ***!
      \******************************************************************/

    /*! exports provided: zeroCapabilities */

    /***/
    function fqtG(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "zeroCapabilities", function () {
        return s;
      });
      /*
      All material copyright ESRI, All Rights Reserved, unless otherwise specified.
      See https://js.arcgis.com/4.18/esri/copyright.txt for details.
      */


      var s = {
        attachment: {
          supportsContentType: !1,
          supportsExifInfo: !1,
          supportsKeywords: !1,
          supportsName: !1,
          supportsSize: !1
        },
        data: {
          isVersioned: !1,
          supportsAttachment: !1,
          supportsM: !1,
          supportsZ: !1
        },
        editing: {
          supportsDeleteByAnonymous: !1,
          supportsDeleteByOthers: !1,
          supportsGeometryUpdate: !1,
          supportsGlobalId: !1,
          supportsRollbackOnFailure: !1,
          supportsUpdateByAnonymous: !1,
          supportsUpdateByOthers: !1,
          supportsUpdateWithoutM: !1,
          supportsUploadWithItemId: !1
        },
        metadata: {
          supportsAdvancedFieldProperties: !1
        },
        operations: {
          supportsCalculate: !1,
          supportsTruncate: !1,
          supportsValidateSql: !1,
          supportsAdd: !1,
          supportsDelete: !1,
          supportsEditing: !1,
          supportsChangeTracking: !1,
          supportsQuery: !1,
          supportsQueryAttachments: !1,
          supportsResizeAttachments: !1,
          supportsSync: !1,
          supportsUpdate: !1,
          supportsExceedsLimitStatistics: !1
        },
        queryRelated: {
          supportsCount: !1,
          supportsOrderBy: !1,
          supportsPagination: !1
        },
        query: {
          maxRecordCount: 0,
          maxRecordCountFactor: 0,
          standardMaxRecordCount: 0,
          supportsCacheHint: !1,
          supportsCentroid: !1,
          supportsDisjointSpatialRelationship: !1,
          supportsDistance: !1,
          supportsDistinct: !1,
          supportsExtent: !1,
          supportsFormatPBF: !1,
          supportsGeometryProperties: !1,
          supportsHavingClause: !1,
          supportsHistoricMoment: !1,
          supportsMaxRecordCountFactor: !1,
          supportsOrderBy: !1,
          supportsPagination: !1,
          supportsPercentileStatistics: !1,
          supportsQuantization: !1,
          supportsQuantizationEditMode: !1,
          supportsQueryByOthers: !1,
          supportsQueryGeometry: !1,
          supportsResultType: !1,
          supportsSqlExpression: !1,
          supportsStandardizedQueriesOnly: !1,
          supportsStatistics: !1,
          tileMaxRecordCount: 0
        }
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
    "mYC1":
    /*!*********************************************************************************!*\
      !*** ./node_modules/@arcgis/core/layers/support/FetchAssociatedFeatureLayer.js ***!
      \*********************************************************************************/

    /*! exports provided: FetchAssociatedFeatureLayer */

    /***/
    function mYC1(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "FetchAssociatedFeatureLayer", function () {
        return c;
      });
      /* harmony import */


      var _core_maybe_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ../../core/maybe.js */
      "srIe");
      /* harmony import */


      var _core_promiseUtils_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ../../core/promiseUtils.js */
      "9MzC");
      /* harmony import */


      var _kernel_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ../../kernel.js */
      "975N");
      /* harmony import */


      var _request_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ../../request.js */
      "Lqtk");
      /* harmony import */


      var _portal_Portal_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ../../portal/Portal.js */
      "AiS/");
      /* harmony import */


      var _portal_PortalItem_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ../../portal/PortalItem.js */
      "p+Gi");
      /* harmony import */


      var _FeatureLayer_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ../FeatureLayer.js */
      "W9Wu");
      /*
      All material copyright ESRI, All Rights Reserved, unless otherwise specified.
      See https://js.arcgis.com/4.18/esri/copyright.txt for details.
      */


      var c = /*#__PURE__*/function () {
        function c(t, r, e) {
          _classCallCheck(this, c);

          this.parsedUrl = t, this.portalItem = r, this.signal = e, this.rootDocument = null;
          var a = this.parsedUrl.path.match(/^(.*)\/SceneServer\/layers\/([\d]*)\/?$/i);
          a && (this.urlParts = {
            root: a[1],
            layerId: parseInt(a[2], 10)
          });
        }

        _createClass(c, [{
          key: "fetch",
          value: function () {
            var _fetch = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
              var r, e, a;
              return regeneratorRuntime.wrap(function _callee$(_context) {
                while (1) {
                  switch (_context.prev = _context.next) {
                    case 0:
                      if (this.urlParts) {
                        _context.next = 2;
                        break;
                      }

                      return _context.abrupt("return", null);

                    case 2:
                      if (!(null != (r = this.portalItem))) {
                        _context.next = 6;
                        break;
                      }

                      _context.t0 = r;
                      _context.next = 9;
                      break;

                    case 6:
                      _context.next = 8;
                      return this.portalItemFromServiceItemId();

                    case 8:
                      _context.t0 = _context.sent;

                    case 9:
                      e = _context.t0;

                      if (!Object(_core_maybe_js__WEBPACK_IMPORTED_MODULE_0__["isNone"])(e)) {
                        _context.next = 12;
                        break;
                      }

                      return _context.abrupt("return", this.loadFromUrl());

                    case 12:
                      _context.next = 14;
                      return this.findAndLoadRelatedPortalItem(e);

                    case 14:
                      a = _context.sent;
                      return _context.abrupt("return", Object(_core_maybe_js__WEBPACK_IMPORTED_MODULE_0__["isNone"])(a) ? null : this.loadFeatureLayerFromPortalItem(a));

                    case 16:
                    case "end":
                      return _context.stop();
                  }
                }
              }, _callee, this);
            }));

            function fetch() {
              return _fetch.apply(this, arguments);
            }

            return fetch;
          }()
        }, {
          key: "fetchPortalItem",
          value: function () {
            var _fetchPortalItem = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee2() {
              var r, e;
              return regeneratorRuntime.wrap(function _callee2$(_context2) {
                while (1) {
                  switch (_context2.prev = _context2.next) {
                    case 0:
                      if (this.urlParts) {
                        _context2.next = 2;
                        break;
                      }

                      return _context2.abrupt("return", null);

                    case 2:
                      if (!(null != (r = this.portalItem))) {
                        _context2.next = 6;
                        break;
                      }

                      _context2.t0 = r;
                      _context2.next = 9;
                      break;

                    case 6:
                      _context2.next = 8;
                      return this.portalItemFromServiceItemId();

                    case 8:
                      _context2.t0 = _context2.sent;

                    case 9:
                      e = _context2.t0;
                      return _context2.abrupt("return", Object(_core_maybe_js__WEBPACK_IMPORTED_MODULE_0__["isNone"])(e) ? null : this.findAndLoadRelatedPortalItem(e));

                    case 11:
                    case "end":
                      return _context2.stop();
                  }
                }
              }, _callee2, this);
            }));

            function fetchPortalItem() {
              return _fetchPortalItem.apply(this, arguments);
            }

            return fetchPortalItem;
          }()
        }, {
          key: "fetchRootDocument",
          value: function () {
            var _fetchRootDocument = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee3() {
              var e, a, t;
              return regeneratorRuntime.wrap(function _callee3$(_context3) {
                while (1) {
                  switch (_context3.prev = _context3.next) {
                    case 0:
                      if (!Object(_core_maybe_js__WEBPACK_IMPORTED_MODULE_0__["isSome"])(this.rootDocument)) {
                        _context3.next = 2;
                        break;
                      }

                      return _context3.abrupt("return", this.rootDocument);

                    case 2:
                      if (!Object(_core_maybe_js__WEBPACK_IMPORTED_MODULE_0__["isNone"])(this.urlParts)) {
                        _context3.next = 4;
                        break;
                      }

                      return _context3.abrupt("return", (this.rootDocument = {}, {}));

                    case 4:
                      e = {
                        query: {
                          f: "json"
                        },
                        responseType: "json",
                        authMode: "no-prompt",
                        signal: this.signal
                      }, a = "".concat(this.urlParts.root, "/SceneServer");
                      _context3.prev = 5;
                      _context3.next = 8;
                      return Object(_request_js__WEBPACK_IMPORTED_MODULE_3__["default"])(a, e);

                    case 8:
                      t = _context3.sent;
                      this.rootDocument = t.data;
                      _context3.next = 15;
                      break;

                    case 12:
                      _context3.prev = 12;
                      _context3.t0 = _context3["catch"](5);
                      this.rootDocument = {};

                    case 15:
                      return _context3.abrupt("return", this.rootDocument);

                    case 16:
                    case "end":
                      return _context3.stop();
                  }
                }
              }, _callee3, this, [[5, 12]]);
            }));

            function fetchRootDocument() {
              return _fetchRootDocument.apply(this, arguments);
            }

            return fetchRootDocument;
          }()
        }, {
          key: "fetchServiceOwningPortalUrl",
          value: function () {
            var _fetchServiceOwningPortalUrl = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee4() {
              var t, r, a, _t;

              return regeneratorRuntime.wrap(function _callee4$(_context4) {
                while (1) {
                  switch (_context4.prev = _context4.next) {
                    case 0:
                      r = null == (t = _kernel_js__WEBPACK_IMPORTED_MODULE_2__["id"]) ? void 0 : t.findServerInfo(this.parsedUrl.path);

                      if (!(null != r && r.owningSystemUrl)) {
                        _context4.next = 3;
                        break;
                      }

                      return _context4.abrupt("return", r.owningSystemUrl);

                    case 3:
                      a = this.parsedUrl.path.replace(/(.*\/rest)\/.*/i, "$1") + "/info";
                      _context4.prev = 4;
                      _context4.next = 7;
                      return Object(_request_js__WEBPACK_IMPORTED_MODULE_3__["default"])(a, {
                        query: {
                          f: "json"
                        },
                        responseType: "json",
                        signal: this.signal
                      });

                    case 7:
                      _t = _context4.sent.data.owningSystemUrl;

                      if (!_t) {
                        _context4.next = 10;
                        break;
                      }

                      return _context4.abrupt("return", _t);

                    case 10:
                      _context4.next = 15;
                      break;

                    case 12:
                      _context4.prev = 12;
                      _context4.t0 = _context4["catch"](4);
                      Object(_core_promiseUtils_js__WEBPACK_IMPORTED_MODULE_1__["throwIfAbortError"])(_context4.t0);

                    case 15:
                      return _context4.abrupt("return", null);

                    case 16:
                    case "end":
                      return _context4.stop();
                  }
                }
              }, _callee4, this, [[4, 12]]);
            }));

            function fetchServiceOwningPortalUrl() {
              return _fetchServiceOwningPortalUrl.apply(this, arguments);
            }

            return fetchServiceOwningPortalUrl;
          }()
        }, {
          key: "findAndLoadRelatedPortalItem",
          value: function () {
            var _findAndLoadRelatedPortalItem = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee5(t) {
              return regeneratorRuntime.wrap(function _callee5$(_context5) {
                while (1) {
                  switch (_context5.prev = _context5.next) {
                    case 0:
                      _context5.prev = 0;
                      _context5.next = 3;
                      return t.fetchRelatedItems({
                        relationshipType: "Service2Service",
                        direction: "reverse"
                      }, {
                        signal: this.signal
                      });

                    case 3:
                      _context5.t0 = _context5.sent.find(function (t) {
                        return "Feature Service" === t.type;
                      });

                      if (_context5.t0) {
                        _context5.next = 6;
                        break;
                      }

                      _context5.t0 = null;

                    case 6:
                      return _context5.abrupt("return", _context5.t0);

                    case 9:
                      _context5.prev = 9;
                      _context5.t1 = _context5["catch"](0);
                      return _context5.abrupt("return", (Object(_core_promiseUtils_js__WEBPACK_IMPORTED_MODULE_1__["throwIfAbortError"])(_context5.t1), null));

                    case 12:
                    case "end":
                      return _context5.stop();
                  }
                }
              }, _callee5, this, [[0, 9]]);
            }));

            function findAndLoadRelatedPortalItem(_x) {
              return _findAndLoadRelatedPortalItem.apply(this, arguments);
            }

            return findAndLoadRelatedPortalItem;
          }()
        }, {
          key: "loadFeatureLayerFromPortalItem",
          value: function () {
            var _loadFeatureLayerFromPortalItem = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee6(t) {
              var r;
              return regeneratorRuntime.wrap(function _callee6$(_context6) {
                while (1) {
                  switch (_context6.prev = _context6.next) {
                    case 0:
                      _context6.next = 2;
                      return t.load({
                        signal: this.signal
                      });

                    case 2:
                      _context6.next = 4;
                      return this.findMatchingAssociatedSublayerUrl(t.url);

                    case 4:
                      r = _context6.sent;
                      return _context6.abrupt("return", new _FeatureLayer_js__WEBPACK_IMPORTED_MODULE_6__["default"]({
                        url: r,
                        portalItem: t
                      }).load({
                        signal: this.signal
                      }));

                    case 6:
                    case "end":
                      return _context6.stop();
                  }
                }
              }, _callee6, this);
            }));

            function loadFeatureLayerFromPortalItem(_x2) {
              return _loadFeatureLayerFromPortalItem.apply(this, arguments);
            }

            return loadFeatureLayerFromPortalItem;
          }()
        }, {
          key: "loadFromUrl",
          value: function () {
            var _loadFromUrl = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee7() {
              var t;
              return regeneratorRuntime.wrap(function _callee7$(_context7) {
                while (1) {
                  switch (_context7.prev = _context7.next) {
                    case 0:
                      _context7.next = 2;
                      return this.findMatchingAssociatedSublayerUrl("".concat(this.urlParts.root, "/FeatureServer"));

                    case 2:
                      t = _context7.sent;
                      return _context7.abrupt("return", new _FeatureLayer_js__WEBPACK_IMPORTED_MODULE_6__["default"]({
                        url: t
                      }).load({
                        signal: this.signal
                      }));

                    case 4:
                    case "end":
                      return _context7.stop();
                  }
                }
              }, _callee7, this);
            }));

            function loadFromUrl() {
              return _loadFromUrl.apply(this, arguments);
            }

            return loadFromUrl;
          }()
        }, {
          key: "findMatchingAssociatedSublayerUrl",
          value: function () {
            var _findMatchingAssociatedSublayerUrl = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee8(t) {
              var r, e, o, n, i, _yield$Object, _yield$Object2, l, _c, u, h, _t2;

              return regeneratorRuntime.wrap(function _callee8$(_context8) {
                while (1) {
                  switch (_context8.prev = _context8.next) {
                    case 0:
                      r = t.replace(/^(.*FeatureServer)(\/[\d]*\/?)?$/i, "$1");
                      e = {
                        query: {
                          f: "json"
                        },
                        responseType: "json",
                        authMode: "no-prompt",
                        signal: this.signal
                      };
                      o = this.urlParts.layerId;
                      n = this.fetchRootDocument();
                      i = Object(_request_js__WEBPACK_IMPORTED_MODULE_3__["default"])(r, e);
                      _context8.next = 7;
                      return Object(_core_promiseUtils_js__WEBPACK_IMPORTED_MODULE_1__["all"])([i, n]);

                    case 7:
                      _yield$Object = _context8.sent;
                      _yield$Object2 = _slicedToArray(_yield$Object, 2);
                      l = _yield$Object2[0];
                      _c = _yield$Object2[1];
                      u = _c && _c.layers;
                      h = l.data && l.data.layers;

                      if (Array.isArray(h)) {
                        _context8.next = 15;
                        break;
                      }

                      throw new Error("expected layers array");

                    case 15:
                      if (!Array.isArray(u)) {
                        _context8.next = 25;
                        break;
                      }

                      _t2 = 0;

                    case 17:
                      if (!(_t2 < Math.min(u.length, h.length))) {
                        _context8.next = 23;
                        break;
                      }

                      if (!(u[_t2].id === o)) {
                        _context8.next = 20;
                        break;
                      }

                      return _context8.abrupt("return", "".concat(r, "/").concat(h[_t2].id));

                    case 20:
                      _t2++;
                      _context8.next = 17;
                      break;

                    case 23:
                      _context8.next = 27;
                      break;

                    case 25:
                      if (!(o < h.length)) {
                        _context8.next = 27;
                        break;
                      }

                      return _context8.abrupt("return", "".concat(r, "/").concat(h[o].id));

                    case 27:
                      throw new Error("could not find matching associated sublayer");

                    case 28:
                    case "end":
                      return _context8.stop();
                  }
                }
              }, _callee8, this);
            }));

            function findMatchingAssociatedSublayerUrl(_x3) {
              return _findMatchingAssociatedSublayerUrl.apply(this, arguments);
            }

            return findMatchingAssociatedSublayerUrl;
          }()
        }, {
          key: "portalItemFromServiceItemId",
          value: function () {
            var _portalItemFromServiceItemId = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee9() {
              var t, a, o;
              return regeneratorRuntime.wrap(function _callee9$(_context9) {
                while (1) {
                  switch (_context9.prev = _context9.next) {
                    case 0:
                      _context9.next = 2;
                      return this.fetchRootDocument();

                    case 2:
                      t = _context9.sent.serviceItemId;

                      if (t) {
                        _context9.next = 5;
                        break;
                      }

                      return _context9.abrupt("return", null);

                    case 5:
                      a = new _portal_PortalItem_js__WEBPACK_IMPORTED_MODULE_5__["default"]({
                        id: t
                      });
                      _context9.next = 8;
                      return this.fetchServiceOwningPortalUrl();

                    case 8:
                      o = _context9.sent;
                      Object(_core_maybe_js__WEBPACK_IMPORTED_MODULE_0__["isSome"])(o) && (a.portal = new _portal_Portal_js__WEBPACK_IMPORTED_MODULE_4__["default"]({
                        url: o
                      }));
                      _context9.prev = 10;
                      return _context9.abrupt("return", a.load({
                        signal: this.signal
                      }));

                    case 14:
                      _context9.prev = 14;
                      _context9.t0 = _context9["catch"](10);
                      return _context9.abrupt("return", (Object(_core_promiseUtils_js__WEBPACK_IMPORTED_MODULE_1__["throwIfAbortError"])(_context9.t0), null));

                    case 17:
                    case "end":
                      return _context9.stop();
                  }
                }
              }, _callee9, this, [[10, 14]]);
            }));

            function portalItemFromServiceItemId() {
              return _portalItemFromServiceItemId.apply(this, arguments);
            }

            return portalItemFromServiceItemId;
          }()
        }]);

        return c;
      }();
      /***/

    }
  }]);
})();
//# sourceMappingURL=default~BuildingSceneLayer-js~SceneLayer-js-es5.js.map