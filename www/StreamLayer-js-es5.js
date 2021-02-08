(function () {
  function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

  function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

  function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

  function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

  function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

  function _createForOfIteratorHelper(o, allowArrayLike) { var it; if (typeof Symbol === "undefined" || o[Symbol.iterator] == null) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e16) { throw _e16; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = o[Symbol.iterator](); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e17) { didErr = true; err = _e17; }, f: function f() { try { if (!normalCompletion && it["return"] != null) it["return"](); } finally { if (didErr) throw err; } } }; }

  function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

  function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

  function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

  function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

  function _iterableToArrayLimit(arr, i) { if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr))) return; var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

  function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

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

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["StreamLayer-js"], {
    /***/
    "0aXd":
    /*!********************************************************************!*\
      !*** ./node_modules/@arcgis/core/layers/support/AggregateField.js ***!
      \********************************************************************/

    /*! exports provided: default */

    /***/
    function aXd(module, __webpack_exports__, __webpack_require__) {
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


      var _OutStatistic_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
      /*! ./OutStatistic.js */
      "AJw4");
      /*
      All material copyright ESRI, All Rights Reserved, unless otherwise specified.
      See https://js.arcgis.com/4.18/esri/copyright.txt for details.
      */


      var _p;

      var i = _p = /*#__PURE__*/function (_core_JSONSupport_js_) {
        _inherits(p, _core_JSONSupport_js_);

        var _super = _createSuper(p);

        function p() {
          var _this;

          _classCallCheck(this, p);

          _this = _super.apply(this, arguments), _this.name = null;
          return _this;
        }

        _createClass(p, [{
          key: "clone",
          value: function clone() {
            return new _p({
              name: this.name,
              outStatistic: this.outStatistic.clone()
            });
          }
        }]);

        return p;
      }(_core_JSONSupport_js__WEBPACK_IMPORTED_MODULE_9__["JSONSupport"]);

      Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_4__["property"])({
        type: String,
        json: {
          write: !0
        }
      })], i.prototype, "name", void 0), Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_4__["property"])({
        type: _OutStatistic_js__WEBPACK_IMPORTED_MODULE_10__["default"],
        json: {
          write: !0
        }
      })], i.prototype, "outStatistic", void 0), i = _p = Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_subclass_js__WEBPACK_IMPORTED_MODULE_5__["subclass"])("esri.layers.support.AggregateField")], i);
      var c = i;
      /* harmony default export */

      __webpack_exports__["default"] = c;
      /***/
    },

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
    "7MGP":
    /*!**********************************************************************!*\
      !*** ./node_modules/@arcgis/core/layers/support/FeatureReduction.js ***!
      \**********************************************************************/

    /*! exports provided: default, FeatureReduction */

    /***/
    function MGP(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "FeatureReduction", function () {
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
      /* harmony import */


      var _core_JSONSupport_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! ../../core/JSONSupport.js */
      "ag7Y");
      /*
      All material copyright ESRI, All Rights Reserved, unless otherwise specified.
      See https://js.arcgis.com/4.18/esri/copyright.txt for details.
      */


      var t = /*#__PURE__*/function (_core_JSONSupport_js_2) {
        _inherits(t, _core_JSONSupport_js_2);

        var _super2 = _createSuper(t);

        function t() {
          var _this2;

          _classCallCheck(this, t);

          _this2 = _super2.apply(this, arguments), _this2.type = null;
          return _this2;
        }

        return t;
      }(_core_JSONSupport_js__WEBPACK_IMPORTED_MODULE_9__["JSONSupport"]);

      Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_4__["property"])({
        type: ["selection", "cluster"],
        readOnly: !0,
        json: {
          read: !1,
          write: !0
        }
      })], t.prototype, "type", void 0), t = Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_subclass_js__WEBPACK_IMPORTED_MODULE_5__["subclass"])("esri.layers.support.FeatureReduction")], t);
      var p = t;
      /* harmony default export */

      __webpack_exports__["default"] = p;
      /***/
    },

    /***/
    "AJw4":
    /*!******************************************************************!*\
      !*** ./node_modules/@arcgis/core/layers/support/OutStatistic.js ***!
      \******************************************************************/

    /*! exports provided: default */

    /***/
    function AJw4(module, __webpack_exports__, __webpack_require__) {
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
      /*
      All material copyright ESRI, All Rights Reserved, unless otherwise specified.
      See https://js.arcgis.com/4.18/esri/copyright.txt for details.
      */


      var _i4;

      var e = _i4 = /*#__PURE__*/function (_core_JSONSupport_js_3) {
        _inherits(i, _core_JSONSupport_js_3);

        var _super3 = _createSuper(i);

        function i() {
          var _this3;

          _classCallCheck(this, i);

          _this3 = _super3.apply(this, arguments), _this3.statisticType = null, _this3.onStatisticField = null, _this3.onStatisticValueExpression = null;
          return _this3;
        }

        _createClass(i, [{
          key: "clone",
          value: function clone() {
            return new _i4({
              statisticType: this.statisticType,
              onStatisticField: this.onStatisticField,
              onStatisticValueExpression: this.onStatisticValueExpression
            });
          }
        }]);

        return i;
      }(_core_JSONSupport_js__WEBPACK_IMPORTED_MODULE_9__["JSONSupport"]);

      Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_4__["property"])({
        type: String,
        json: {
          write: !0
        }
      })], e.prototype, "statisticType", void 0), Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_4__["property"])({
        type: String,
        json: {
          write: !0
        }
      })], e.prototype, "onStatisticField", void 0), Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_4__["property"])({
        type: String,
        json: {
          write: !0
        }
      })], e.prototype, "onStatisticValueExpression", void 0), e = _i4 = Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_subclass_js__WEBPACK_IMPORTED_MODULE_5__["subclass"])("esri.layers.support.OutStatistic")], e);
      var p = e;
      /* harmony default export */

      __webpack_exports__["default"] = p;
      /***/
    },

    /***/
    "Bbcg":
    /*!***************************************************************************!*\
      !*** ./node_modules/@arcgis/core/layers/support/featureReductionUtils.js ***!
      \***************************************************************************/

    /*! exports provided: read, webSceneFeatureReductionTypes, write, writeTarget */

    /***/
    function Bbcg(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "read", function () {
        return u;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "webSceneFeatureReductionTypes", function () {
        return s;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "write", function () {
        return i;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "writeTarget", function () {
        return c;
      });
      /* harmony import */


      var _core_object_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ../../core/object.js */
      "nR38");
      /* harmony import */


      var _core_Error_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ../../core/Error.js */
      "zlDU");
      /* harmony import */


      var _FeatureReduction_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./FeatureReduction.js */
      "7MGP");
      /* harmony import */


      var _FeatureReductionCluster_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./FeatureReductionCluster.js */
      "o9qb");
      /* harmony import */


      var _FeatureReductionSelection_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ./FeatureReductionSelection.js */
      "kbDD");
      /*
      All material copyright ESRI, All Rights Reserved, unless otherwise specified.
      See https://js.arcgis.com/4.18/esri/copyright.txt for details.
      */


      var s = {
        key: "type",
        base: _FeatureReduction_js__WEBPACK_IMPORTED_MODULE_2__["default"],
        typeMap: {
          selection: _FeatureReductionSelection_js__WEBPACK_IMPORTED_MODULE_4__["default"]
        }
      };

      function u(e, t) {
        var r = (t = t.layerDefinition || t).featureReduction;
        if (r) switch (r.type) {
          case "selection":
            return _FeatureReductionSelection_js__WEBPACK_IMPORTED_MODULE_4__["default"].fromJSON(r);

          case "cluster":
            return _FeatureReductionCluster_js__WEBPACK_IMPORTED_MODULE_3__["default"].fromJSON(r);
        }
        return null;
      }

      function c(t, r, o, n) {
        var s = i(t, {}, n);
        s && Object(_core_object_js__WEBPACK_IMPORTED_MODULE_0__["setDeepValue"])(o, s, r);
      }

      function i(e, r, o) {
        return e ? "selection" !== e.type ? (o.messages && o.messages.push(new _core_Error_js__WEBPACK_IMPORTED_MODULE_1__["default"]("featureReduction:unsupported", "FeatureReduction of type '".concat(e.declaredClass, "' are not supported in scenes."), {
          featureReduction: e,
          context: o
        })), null) : e.write(r, o) : null;
      }
      /***/

    },

    /***/
    "EOvV":
    /*!******************************************************************!*\
      !*** ./node_modules/@arcgis/core/layers/support/labelingInfo.js ***!
      \******************************************************************/

    /*! exports provided: reader */

    /***/
    function EOvV(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "reader", function () {
        return r;
      });
      /* harmony import */


      var _LabelClass_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ./LabelClass.js */
      "wkZP");
      /*
      All material copyright ESRI, All Rights Reserved, unless otherwise specified.
      See https://js.arcgis.com/4.18/esri/copyright.txt for details.
      */


      var n = /\[([^\[\]]+)\]/gi;

      function r(r, t, i) {
        var _this4 = this;

        return r ? r.map(function (r) {
          var o = new _LabelClass_js__WEBPACK_IMPORTED_MODULE_0__["default"]();

          if (o.read(r, i), o.labelExpression) {
            var e = t.fields || t.layerDefinition && t.layerDefinition.fields || _this4.fields;
            o.labelExpression = o.labelExpression.replace(n, function (n, r) {
              return "[".concat(function (e, n) {
                if (!n) return e;
                var r = e.toLowerCase();

                for (var _e14 = 0; _e14 < n.length; _e14++) {
                  var _t = n[_e14].name;
                  if (_t.toLowerCase() === r) return _t;
                }

                return e;
              }(r, e), "]");
            });
          }

          return o;
        }) : null;
      }
      /***/

    },

    /***/
    "YOx9":
    /*!*******************************************************************!*\
      !*** ./node_modules/@arcgis/core/renderers/support/styleUtils.js ***!
      \*******************************************************************/

    /*! exports provided: loadStyleRenderer */

    /***/
    function YOx9(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "loadStyleRenderer", function () {
        return t;
      });
      /* harmony import */


      var _core_Warning_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ../../core/Warning.js */
      "ACjl");
      /* harmony import */


      var _core_promiseUtils_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ../../core/promiseUtils.js */
      "9MzC");
      /* harmony import */


      var _core_asyncUtils_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ../../core/asyncUtils.js */
      "eSsm");
      /*
      All material copyright ESRI, All Rights Reserved, unless otherwise specified.
      See https://js.arcgis.com/4.18/esri/copyright.txt for details.
      */


      function t(_x, _x2, _x3) {
        return _t2.apply(this, arguments);
      }
      /***/


      function _t2() {
        _t2 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(t, i, n) {
          var s, a, r;
          return regeneratorRuntime.wrap(function _callee$(_context) {
            while (1) {
              switch (_context.prev = _context.next) {
                case 0:
                  s = t && t.getAtOrigin && t.getAtOrigin("renderer", i.origin);

                  if (!(s && "unique-value" === s.type && s.styleOrigin)) {
                    _context.next = 6;
                    break;
                  }

                  _context.next = 4;
                  return Object(_core_asyncUtils_js__WEBPACK_IMPORTED_MODULE_2__["result"])(s.populateFromStyle());

                case 4:
                  a = _context.sent;

                  if (Object(_core_promiseUtils_js__WEBPACK_IMPORTED_MODULE_1__["throwIfAborted"])(n), !1 === a.ok) {
                    r = a.error;
                    i && i.messages && i.messages.push(new _core_Warning_js__WEBPACK_IMPORTED_MODULE_0__["default"]("renderer:style-reference", "Failed to create unique value renderer from style reference: ".concat(r.message), {
                      error: r,
                      context: i
                    })), t.clear("renderer", i.origin);
                  }

                case 6:
                case "end":
                  return _context.stop();
              }
            }
          }, _callee);
        }));
        return _t2.apply(this, arguments);
      }
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
    "kbDD":
    /*!*******************************************************************************!*\
      !*** ./node_modules/@arcgis/core/layers/support/FeatureReductionSelection.js ***!
      \*******************************************************************************/

    /*! exports provided: default */

    /***/
    function kbDD(module, __webpack_exports__, __webpack_require__) {
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


      var _FeatureReduction_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! ./FeatureReduction.js */
      "7MGP");
      /*
      All material copyright ESRI, All Rights Reserved, unless otherwise specified.
      See https://js.arcgis.com/4.18/esri/copyright.txt for details.
      */


      var _t3;

      var p = _t3 = /*#__PURE__*/function (_FeatureReduction_js_) {
        _inherits(t, _FeatureReduction_js_);

        var _super4 = _createSuper(t);

        function t(r) {
          var _this5;

          _classCallCheck(this, t);

          _this5 = _super4.call(this, r), _this5.type = "selection";
          return _this5;
        }

        _createClass(t, [{
          key: "clone",
          value: function clone() {
            return new _t3();
          }
        }]);

        return t;
      }(_FeatureReduction_js__WEBPACK_IMPORTED_MODULE_9__["default"]);

      Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_4__["property"])({
        type: ["selection"]
      })], p.prototype, "type", void 0), p = _t3 = Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_subclass_js__WEBPACK_IMPORTED_MODULE_5__["subclass"])("esri.layers.support.FeatureReductionSelection")], p);
      var c = p;
      /* harmony default export */

      __webpack_exports__["default"] = c;
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
    "o9qb":
    /*!*****************************************************************************!*\
      !*** ./node_modules/@arcgis/core/layers/support/FeatureReductionCluster.js ***!
      \*****************************************************************************/

    /*! exports provided: default */

    /***/
    function o9qb(module, __webpack_exports__, __webpack_require__) {
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
      /* harmony import */


      var _PopupTemplate_js__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
      /*! ../../PopupTemplate.js */
      "SFah");
      /* harmony import */


      var _core_screenUtils_js__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
      /*! ../../core/screenUtils.js */
      "qRWG");
      /* harmony import */


      var _commonProperties_js__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
      /*! ./commonProperties.js */
      "IvSi");
      /* harmony import */


      var _AggregateField_js__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(
      /*! ./AggregateField.js */
      "0aXd");
      /* harmony import */


      var _LabelClass_js__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(
      /*! ./LabelClass.js */
      "wkZP");
      /*
      All material copyright ESRI, All Rights Reserved, unless otherwise specified.
      See https://js.arcgis.com/4.18/esri/copyright.txt for details.
      */


      var _c;

      var m = _c = /*#__PURE__*/function (_core_JSONSupport_js_4) {
        _inherits(c, _core_JSONSupport_js_4);

        var _super5 = _createSuper(c);

        function c(e) {
          var _this6;

          _classCallCheck(this, c);

          _this6 = _super5.call(this, e), _this6.type = "cluster", _this6.clusterRadius = Object(_core_screenUtils_js__WEBPACK_IMPORTED_MODULE_12__["toPt"])("80px"), _this6.clusterMinSize = Object(_core_screenUtils_js__WEBPACK_IMPORTED_MODULE_12__["toPt"])("12px"), _this6.clusterMaxSize = Object(_core_screenUtils_js__WEBPACK_IMPORTED_MODULE_12__["toPt"])("50px"), _this6.popupEnabled = !0, _this6.popupTemplate = null, _this6.labelingInfo = null, _this6.labelsVisible = !0, _this6.fields = null;
          return _this6;
        }

        _createClass(c, [{
          key: "clone",
          value: function clone() {
            return new _c({
              clusterRadius: this.clusterRadius,
              clusterMinSize: this.clusterMinSize,
              clusterMaxSize: this.clusterMaxSize,
              labelingInfo: Object(_core_lang_js__WEBPACK_IMPORTED_MODULE_2__["clone"])(this.labelingInfo),
              labelsVisible: this.labelsVisible,
              fields: Object(_core_lang_js__WEBPACK_IMPORTED_MODULE_2__["clone"])(this.fields),
              popupEnabled: this.popupEnabled,
              popupTemplate: Object(_core_lang_js__WEBPACK_IMPORTED_MODULE_2__["clone"])(this.popupTemplate)
            });
          }
        }]);

        return c;
      }(_core_JSONSupport_js__WEBPACK_IMPORTED_MODULE_10__["JSONSupport"]);

      Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_5__["property"])({
        type: ["cluster"],
        readOnly: !0,
        json: {
          write: !0
        }
      })], m.prototype, "type", void 0), Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_5__["property"])({
        type: Number,
        cast: function cast(e) {
          return "auto" === e ? e : Object(_core_screenUtils_js__WEBPACK_IMPORTED_MODULE_12__["toPt"])(e);
        },
        json: {
          write: !0
        }
      })], m.prototype, "clusterRadius", void 0), Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_5__["property"])({
        type: Number,
        cast: _core_screenUtils_js__WEBPACK_IMPORTED_MODULE_12__["toPt"],
        json: {
          write: !0
        }
      })], m.prototype, "clusterMinSize", void 0), Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_5__["property"])({
        type: Number,
        cast: _core_screenUtils_js__WEBPACK_IMPORTED_MODULE_12__["toPt"],
        json: {
          write: !0
        }
      })], m.prototype, "clusterMaxSize", void 0), Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_5__["property"])(_commonProperties_js__WEBPACK_IMPORTED_MODULE_13__["popupEnabled"])], m.prototype, "popupEnabled", void 0), Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_5__["property"])({
        type: _PopupTemplate_js__WEBPACK_IMPORTED_MODULE_11__["default"],
        json: {
          read: {
            source: "popupInfo"
          },
          write: {
            target: "popupInfo"
          }
        }
      })], m.prototype, "popupTemplate", void 0), Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_5__["property"])({
        type: [_LabelClass_js__WEBPACK_IMPORTED_MODULE_15__["default"]],
        json: {
          read: {
            source: "drawingInfo.labelingInfo"
          },
          write: {
            target: "drawingInfo.labelingInfo"
          }
        }
      })], m.prototype, "labelingInfo", void 0), Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_5__["property"])(_commonProperties_js__WEBPACK_IMPORTED_MODULE_13__["labelsVisible"])], m.prototype, "labelsVisible", void 0), Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_5__["property"])({
        type: [_AggregateField_js__WEBPACK_IMPORTED_MODULE_14__["default"]],
        json: {
          write: !0
        }
      })], m.prototype, "fields", void 0), m = _c = Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_subclass_js__WEBPACK_IMPORTED_MODULE_6__["subclass"])("esri.layers.support.FeatureReductionCluster")], m);
      var d = m;
      /* harmony default export */

      __webpack_exports__["default"] = d;
      /***/
    },

    /***/
    "u6iX":
    /*!*********************************************************!*\
      !*** ./node_modules/@arcgis/core/layers/StreamLayer.js ***!
      \*********************************************************/

    /*! exports provided: default */

    /***/
    function u6iX(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony import */


      var _chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ../chunks/tslib.es6.js */
      "pO5D");
      /* harmony import */


      var _core_global_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ../core/global.js */
      "3r0u");
      /* harmony import */


      var _core_has_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ../core/has.js */
      "wSAH");
      /* harmony import */


      var _core_maybe_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ../core/maybe.js */
      "srIe");
      /* harmony import */


      var _core_Logger_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ../core/Logger.js */
      "6S2I");
      /* harmony import */


      var _core_accessorSupport_ensureType_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ../core/accessorSupport/ensureType.js */
      "zqDF");
      /* harmony import */


      var _core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ../core/accessorSupport/decorators/property.js */
      "WbKI");
      /* harmony import */


      var _core_jsonMap_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! ../core/jsonMap.js */
      "+opI");
      /* harmony import */


      var _core_accessorSupport_decorators_reader_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! ../core/accessorSupport/decorators/reader.js */
      "r88o");
      /* harmony import */


      var _core_accessorSupport_extensions_serializableProperty_reader_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! ../core/accessorSupport/extensions/serializableProperty/reader.js */
      "C4aV");
      /* harmony import */


      var _core_accessorSupport_decorators_subclass_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
      /*! ../core/accessorSupport/decorators/subclass.js */
      "04ZG");
      /* harmony import */


      var _core_accessorSupport_decorators_writer_js__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
      /*! ../core/accessorSupport/decorators/writer.js */
      "Cduq");
      /* harmony import */


      var _core_Error_js__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
      /*! ../core/Error.js */
      "zlDU");
      /* harmony import */


      var _core_urlUtils_js__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
      /*! ../core/urlUtils.js */
      "4EHJ");
      /* harmony import */


      var _core_uuid_js__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(
      /*! ../core/uuid.js */
      "ju1D");
      /* harmony import */


      var _portal_support_resourceExtension_js__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(
      /*! ../portal/support/resourceExtension.js */
      "9AIY");
      /* harmony import */


      var _core_promiseUtils_js__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(
      /*! ../core/promiseUtils.js */
      "9MzC");
      /* harmony import */


      var _geometry_SpatialReference_js__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(
      /*! ../geometry/SpatialReference.js */
      "WZb1");
      /* harmony import */


      var _geometry_Extent_js__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(
      /*! ../geometry/Extent.js */
      "OvF4");
      /* harmony import */


      var _geometry_js__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(
      /*! ../geometry.js */
      "4GrV");
      /* harmony import */


      var _support_fieldUtils_js__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(
      /*! ./support/fieldUtils.js */
      "wdpY");
      /* harmony import */


      var _PopupTemplate_js__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(
      /*! ../PopupTemplate.js */
      "SFah");
      /* harmony import */


      var _request_js__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(
      /*! ../request.js */
      "Lqtk");
      /* harmony import */


      var _chunks_symbols_js__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(
      /*! ../chunks/symbols.js */
      "nNR5");
      /* harmony import */


      var _Layer_js__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(
      /*! ./Layer.js */
      "pqNC");
      /* harmony import */


      var _core_MultiOriginJSONSupport_js__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(
      /*! ../core/MultiOriginJSONSupport.js */
      "5pQd");
      /* harmony import */


      var _symbols_support_ElevationInfo_js__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(
      /*! ../symbols/support/ElevationInfo.js */
      "/RTN");
      /* harmony import */


      var _support_commonProperties_js__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(
      /*! ./support/commonProperties.js */
      "IvSi");
      /* harmony import */


      var _mixins_OperationalLayer_js__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(
      /*! ./mixins/OperationalLayer.js */
      "uRH/");
      /* harmony import */


      var _renderers_Renderer_js__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(
      /*! ../renderers/Renderer.js */
      "ZnuT");
      /* harmony import */


      var _renderers_ClassBreaksRenderer_js__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(
      /*! ../renderers/ClassBreaksRenderer.js */
      "tCO6");
      /* harmony import */


      var _renderers_UniqueValueRenderer_js__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(
      /*! ../renderers/UniqueValueRenderer.js */
      "2gBT");
      /* harmony import */


      var _renderers_DictionaryRenderer_js__WEBPACK_IMPORTED_MODULE_32__ = __webpack_require__(
      /*! ../renderers/DictionaryRenderer.js */
      "JhoD");
      /* harmony import */


      var _renderers_DotDensityRenderer_js__WEBPACK_IMPORTED_MODULE_33__ = __webpack_require__(
      /*! ../renderers/DotDensityRenderer.js */
      "tI3Y");
      /* harmony import */


      var _renderers_HeatmapRenderer_js__WEBPACK_IMPORTED_MODULE_34__ = __webpack_require__(
      /*! ../renderers/HeatmapRenderer.js */
      "R4xK");
      /* harmony import */


      var _renderers_SimpleRenderer_js__WEBPACK_IMPORTED_MODULE_35__ = __webpack_require__(
      /*! ../renderers/SimpleRenderer.js */
      "/1dM");
      /* harmony import */


      var _renderers_support_types_js__WEBPACK_IMPORTED_MODULE_36__ = __webpack_require__(
      /*! ../renderers/support/types.js */
      "XNvV");
      /* harmony import */


      var _renderers_support_jsonUtils_js__WEBPACK_IMPORTED_MODULE_37__ = __webpack_require__(
      /*! ../renderers/support/jsonUtils.js */
      "+Xal");
      /* harmony import */


      var _support_Field_js__WEBPACK_IMPORTED_MODULE_38__ = __webpack_require__(
      /*! ./support/Field.js */
      "ofM5");
      /* harmony import */


      var _support_FieldsIndex_js__WEBPACK_IMPORTED_MODULE_39__ = __webpack_require__(
      /*! ./support/FieldsIndex.js */
      "gLc9");
      /* harmony import */


      var _mixins_ArcGISService_js__WEBPACK_IMPORTED_MODULE_40__ = __webpack_require__(
      /*! ./mixins/ArcGISService.js */
      "PVlI");
      /* harmony import */


      var _mixins_BlendLayer_js__WEBPACK_IMPORTED_MODULE_41__ = __webpack_require__(
      /*! ./mixins/BlendLayer.js */
      "mXvl");
      /* harmony import */


      var _mixins_PortalLayer_js__WEBPACK_IMPORTED_MODULE_42__ = __webpack_require__(
      /*! ./mixins/PortalLayer.js */
      "DbUH");
      /* harmony import */


      var _mixins_RefreshableLayer_js__WEBPACK_IMPORTED_MODULE_43__ = __webpack_require__(
      /*! ./mixins/RefreshableLayer.js */
      "jhcG");
      /* harmony import */


      var _mixins_ScaleRangeLayer_js__WEBPACK_IMPORTED_MODULE_44__ = __webpack_require__(
      /*! ./mixins/ScaleRangeLayer.js */
      "WmKv");
      /* harmony import */


      var _mixins_TemporalLayer_js__WEBPACK_IMPORTED_MODULE_45__ = __webpack_require__(
      /*! ./mixins/TemporalLayer.js */
      "YBpl");
      /* harmony import */


      var _support_LabelClass_js__WEBPACK_IMPORTED_MODULE_46__ = __webpack_require__(
      /*! ./support/LabelClass.js */
      "wkZP");
      /* harmony import */


      var _support_featureReductionUtils_js__WEBPACK_IMPORTED_MODULE_47__ = __webpack_require__(
      /*! ./support/featureReductionUtils.js */
      "Bbcg");
      /* harmony import */


      var _support_labelingInfo_js__WEBPACK_IMPORTED_MODULE_48__ = __webpack_require__(
      /*! ./support/labelingInfo.js */
      "EOvV");
      /* harmony import */


      var _renderers_support_styleUtils_js__WEBPACK_IMPORTED_MODULE_49__ = __webpack_require__(
      /*! ../renderers/support/styleUtils.js */
      "YOx9");
      /* harmony import */


      var _support_popupUtils_js__WEBPACK_IMPORTED_MODULE_50__ = __webpack_require__(
      /*! ../support/popupUtils.js */
      "9Ruv");
      /* harmony import */


      var _tasks_support_Query_js__WEBPACK_IMPORTED_MODULE_51__ = __webpack_require__(
      /*! ../tasks/support/Query.js */
      "xk++");
      /* harmony import */


      var _support_PurgeOptions_js__WEBPACK_IMPORTED_MODULE_52__ = __webpack_require__(
      /*! ./support/PurgeOptions.js */
      "vHOR");
      /*
      All material copyright ESRI, All Rights Reserved, unless otherwise specified.
      See https://js.arcgis.com/4.18/esri/copyright.txt for details.
      */


      var $ = _core_Logger_js__WEBPACK_IMPORTED_MODULE_4__["default"].getLogger("esri.layers.StreamLayer"),
          ee = new _core_jsonMap_js__WEBPACK_IMPORTED_MODULE_7__["JSONMap"]({
        esriGeometryPoint: "point",
        esriGeometryMultipoint: "multipoint",
        esriGeometryPolyline: "polyline",
        esriGeometryPolygon: "polygon"
      });

      var re = /*#__PURE__*/function (_Object) {
        _inherits(re, _Object);

        var _super6 = _createSuper(re);

        function re() {
          var _this7;

          _classCallCheck(this, re);

          for (var _len = arguments.length, e = new Array(_len), _key = 0; _key < _len; _key++) {
            e[_key] = arguments[_key];
          }

          _this7 = _super6.call.apply(_super6, [this].concat(e)), _this7.copyright = null, _this7.definitionExpression = null, _this7.displayField = null, _this7.elevationInfo = null, _this7.featureReduction = null, _this7.fields = null, _this7.geometryDefinition = null, _this7.geometryType = null, _this7.labelsVisible = !0, _this7.labelingInfo = null, _this7.legendEnabled = !0, _this7.maxReconnectionAttempts = 0, _this7.maxReconnectionInterval = 20, _this7.objectIdField = null, _this7.operationalLayerType = "ArcGISStreamLayer", _this7.popupEnabled = !0, _this7.popupTemplate = null, _this7.purgeOptions = new _support_PurgeOptions_js__WEBPACK_IMPORTED_MODULE_52__["default"](), _this7.screenSizePerspectiveEnabled = !0, _this7.sourceJSON = null, _this7.spatialReference = _geometry_SpatialReference_js__WEBPACK_IMPORTED_MODULE_17__["default"].WGS84, _this7.type = "stream", _this7.url = null, _this7.updateInterval = 300, _this7.webSocketUrl = null;
          return _this7;
        }

        _createClass(re, [{
          key: "normalizeCtorArgs",
          value: function normalizeCtorArgs(e, r) {
            return "string" == typeof e ? _objectSpread({
              url: e
            }, r) : e;
          }
        }, {
          key: "load",
          value: function load(e) {
            var _this8 = this;

            "WebSocket" in _core_global_js__WEBPACK_IMPORTED_MODULE_1__["default"] || Object(_core_promiseUtils_js__WEBPACK_IMPORTED_MODULE_16__["reject"])(new _core_Error_js__WEBPACK_IMPORTED_MODULE_12__["default"]("stream-layer:websocket-unsupported", "WebSocket is not supported in this browser. StreamLayer will not have real-time connection with the stream service."));
            var o = Object(_core_maybe_js__WEBPACK_IMPORTED_MODULE_3__["isSome"])(e) ? e.signal : null;
            return this.addResolvingPromise(this.loadFromPortal({
              supportedTypes: ["Stream Service"]
            }, e)["catch"](function (e) {
              return e;
            }).then(function () {
              return _this8._fetchService(o);
            })), Object(_core_promiseUtils_js__WEBPACK_IMPORTED_MODULE_16__["resolve"])(this);
          }
        }, {
          key: "defaultPopupTemplate",
          get: function get() {
            return this.createPopupTemplate();
          }
        }, {
          key: "readFeatureReduction",
          value: function readFeatureReduction(e, r) {
            return Object(_support_featureReductionUtils_js__WEBPACK_IMPORTED_MODULE_47__["read"])(e, r);
          }
        }, {
          key: "writeWebSceneFeatureReduction",
          value: function writeWebSceneFeatureReduction(e, r, t, o) {
            Object(_support_featureReductionUtils_js__WEBPACK_IMPORTED_MODULE_47__["writeTarget"])(e, r, "layerDefinition.featureReduction", o);
          }
        }, {
          key: "fieldsIndex",
          get: function get() {
            return new _support_FieldsIndex_js__WEBPACK_IMPORTED_MODULE_39__["default"](this.fields);
          }
        }, {
          key: "renderer",
          set: function set(e) {
            Object(_support_fieldUtils_js__WEBPACK_IMPORTED_MODULE_20__["fixRendererFields"])(e, this.fields), this._set("renderer", e);
          }
        }, {
          key: "readRenderer",
          value: function readRenderer(e, r, t) {
            var o = (r = r.layerDefinition || r).drawingInfo && r.drawingInfo.renderer || void 0;

            if (o) {
              var _e15 = Object(_renderers_support_jsonUtils_js__WEBPACK_IMPORTED_MODULE_37__["read"])(o, r, t) || void 0;

              return _e15 || $.error("Failed to create renderer", {
                rendererDefinition: r.drawingInfo.renderer,
                layer: this,
                context: t
              }), _e15;
            }

            if (r.defaultSymbol) return r.types && r.types.length ? new _renderers_UniqueValueRenderer_js__WEBPACK_IMPORTED_MODULE_31__["default"]({
              defaultSymbol: te(r.defaultSymbol, r, t),
              field: r.typeIdField,
              uniqueValueInfos: r.types.map(function (e) {
                return {
                  id: e.id,
                  symbol: te(e.symbol, e, t)
                };
              })
            }) : new _renderers_SimpleRenderer_js__WEBPACK_IMPORTED_MODULE_35__["default"]({
              symbol: te(r.defaultSymbol, r, t)
            });
          }
        }, {
          key: "writeRenderer",
          value: function writeRenderer(e, r, t, o) {
            Object(_renderers_support_jsonUtils_js__WEBPACK_IMPORTED_MODULE_37__["write"])(e, r, t, o);
          }
        }, {
          key: "writeWebSceneRenderer",
          value: function writeWebSceneRenderer(e, r, t, o) {
            Object(_renderers_support_jsonUtils_js__WEBPACK_IMPORTED_MODULE_37__["write"])(e, r, "layerDefinition.drawingInfo.renderer", o);
          }
        }, {
          key: "createPopupTemplate",
          value: function createPopupTemplate(e) {
            return Object(_support_popupUtils_js__WEBPACK_IMPORTED_MODULE_50__["createPopupTemplate"])(this, e);
          }
        }, {
          key: "createQuery",
          value: function createQuery() {
            var e = new _tasks_support_Query_js__WEBPACK_IMPORTED_MODULE_51__["default"]();
            return e.returnGeometry = !0, e.outFields = ["*"], e.where = this.definitionExpression || "1=1", e;
          }
        }, {
          key: "getFieldDomain",
          value: function getFieldDomain(e, r) {
            if (!this.fields) return null;
            var t = null;
            return this.fields.some(function (r) {
              return r.name === e && (t = r.domain), !!t;
            }), t;
          }
        }, {
          key: "getField",
          value: function getField(e) {
            return this.fieldsIndex.get(e);
          }
        }, {
          key: "_fetchService",
          value: function () {
            var _fetchService2 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee2(e) {
              var r, t, _yield$Object, _r4;

              return regeneratorRuntime.wrap(function _callee2$(_context2) {
                while (1) {
                  switch (_context2.prev = _context2.next) {
                    case 0:
                      if (!this.webSocketUrl) {
                        _context2.next = 12;
                        break;
                      }

                      if (!(null == (t = this.timeInfo) || !t.trackIdField)) {
                        _context2.next = 3;
                        break;
                      }

                      throw new _core_Error_js__WEBPACK_IMPORTED_MODULE_12__["default"]("stream-layer:missing-metadata", "The stream layer trackIdField must be specified.");

                    case 3:
                      if (this.objectIdField) {
                        _context2.next = 5;
                        break;
                      }

                      throw new _core_Error_js__WEBPACK_IMPORTED_MODULE_12__["default"]("stream-layer:missing-metadata", "The stream layer objectIdField must be specified.");

                    case 5:
                      if (this.fields) {
                        _context2.next = 7;
                        break;
                      }

                      throw new _core_Error_js__WEBPACK_IMPORTED_MODULE_12__["default"]("stream-layer:missing-metadata", "The stream layer fields must be specified.");

                    case 7:
                      if (this.geometryType) {
                        _context2.next = 9;
                        break;
                      }

                      throw new _core_Error_js__WEBPACK_IMPORTED_MODULE_12__["default"]("stream-layer:missing-metadata", "The stream layer geometryType must be specified.");

                    case 9:
                      this.url = this.webSocketUrl;
                      _context2.next = 18;
                      break;

                    case 12:
                      if (this.sourceJSON) {
                        _context2.next = 18;
                        break;
                      }

                      _context2.next = 15;
                      return Object(_request_js__WEBPACK_IMPORTED_MODULE_22__["default"])(this.parsedUrl.path, {
                        query: _objectSpread({
                          f: "json"
                        }, this.parsedUrl.query),
                        responseType: "json",
                        signal: e
                      });

                    case 15:
                      _yield$Object = _context2.sent;
                      _r4 = _yield$Object.data;
                      this.sourceJSON = _r4;

                    case 18:
                      return _context2.abrupt("return", (this.sourceJSON = _objectSpread(_objectSpread({}, null != (r = this.sourceJSON) ? r : {}), {}, {
                        objectIdField: "__esri_stream_id__"
                      }), this.read(this.sourceJSON, {
                        origin: "service",
                        url: this.parsedUrl
                      }), Object(_support_fieldUtils_js__WEBPACK_IMPORTED_MODULE_20__["fixRendererFields"])(this.renderer, this.fields), Object(_support_fieldUtils_js__WEBPACK_IMPORTED_MODULE_20__["fixTimeInfoFields"])(this.timeInfo, this.fields), Object(_renderers_support_styleUtils_js__WEBPACK_IMPORTED_MODULE_49__["loadStyleRenderer"])(this, {
                        origin: "service"
                      })));

                    case 19:
                    case "end":
                      return _context2.stop();
                  }
                }
              }, _callee2, this);
            }));

            function _fetchService(_x4) {
              return _fetchService2.apply(this, arguments);
            }

            return _fetchService;
          }()
        }]);

        return re;
      }(Object(_mixins_BlendLayer_js__WEBPACK_IMPORTED_MODULE_41__["BlendLayer"])(Object(_mixins_TemporalLayer_js__WEBPACK_IMPORTED_MODULE_45__["TemporalLayer"])(Object(_mixins_ScaleRangeLayer_js__WEBPACK_IMPORTED_MODULE_44__["ScaleRangeLayer"])(Object(_mixins_RefreshableLayer_js__WEBPACK_IMPORTED_MODULE_43__["RefreshableLayer"])(Object(_mixins_ArcGISService_js__WEBPACK_IMPORTED_MODULE_40__["ArcGISService"])(Object(_mixins_OperationalLayer_js__WEBPACK_IMPORTED_MODULE_28__["OperationalLayer"])(Object(_mixins_PortalLayer_js__WEBPACK_IMPORTED_MODULE_42__["PortalLayer"])(Object(_core_MultiOriginJSONSupport_js__WEBPACK_IMPORTED_MODULE_25__["MultiOriginJSONMixin"])(_Layer_js__WEBPACK_IMPORTED_MODULE_24__["default"])))))))));

      Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_6__["property"])({
        type: String
      })], re.prototype, "copyright", void 0), Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_6__["property"])({
        readOnly: !0,
        dependsOn: ["fields", "title"]
      })], re.prototype, "defaultPopupTemplate", null), Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_6__["property"])({
        type: String
      })], re.prototype, "definitionExpression", void 0), Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_6__["property"])({
        type: String
      })], re.prototype, "displayField", void 0), Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_6__["property"])({
        type: _symbols_support_ElevationInfo_js__WEBPACK_IMPORTED_MODULE_26__["default"]
      })], re.prototype, "elevationInfo", void 0), Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_reader_js__WEBPACK_IMPORTED_MODULE_8__["reader"])("featureReduction", ["layerDefinition.featureReduction"])], re.prototype, "readFeatureReduction", null), Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_writer_js__WEBPACK_IMPORTED_MODULE_11__["writer"])("web-scene", "featureReduction", {
        "layerDefinition.featureReduction": {
          types: _support_featureReductionUtils_js__WEBPACK_IMPORTED_MODULE_47__["webSceneFeatureReductionTypes"]
        }
      })], re.prototype, "writeWebSceneFeatureReduction", null), Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_6__["property"])({
        type: [_support_Field_js__WEBPACK_IMPORTED_MODULE_38__["default"]]
      })], re.prototype, "fields", void 0), Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_6__["property"])({
        readOnly: !0,
        dependsOn: ["fields"]
      })], re.prototype, "fieldsIndex", null), Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_6__["property"])({
        type: _geometry_Extent_js__WEBPACK_IMPORTED_MODULE_18__["default"]
      })], re.prototype, "geometryDefinition", void 0), Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_6__["property"])({
        type: ["point", "polygon", "polyline", "multipoint"],
        json: {
          read: {
            reader: ee.read
          }
        }
      })], re.prototype, "geometryType", void 0), Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_6__["property"])(_support_commonProperties_js__WEBPACK_IMPORTED_MODULE_27__["labelsVisible"])], re.prototype, "labelsVisible", void 0), Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_6__["property"])({
        type: [_support_LabelClass_js__WEBPACK_IMPORTED_MODULE_46__["default"]],
        json: {
          read: {
            source: "layerDefinition.drawingInfo.labelingInfo",
            reader: _support_labelingInfo_js__WEBPACK_IMPORTED_MODULE_48__["reader"]
          },
          write: {
            target: "layerDefinition.drawingInfo.labelingInfo"
          }
        }
      })], re.prototype, "labelingInfo", void 0), Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_6__["property"])(_support_commonProperties_js__WEBPACK_IMPORTED_MODULE_27__["legendEnabled"])], re.prototype, "legendEnabled", void 0), Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_6__["property"])({
        type: ["show", "hide"]
      })], re.prototype, "listMode", void 0), Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_6__["property"])({
        type: _core_accessorSupport_ensureType_js__WEBPACK_IMPORTED_MODULE_5__["Integer"]
      })], re.prototype, "maxReconnectionAttempts", void 0), Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_6__["property"])({
        type: _core_accessorSupport_ensureType_js__WEBPACK_IMPORTED_MODULE_5__["Integer"]
      })], re.prototype, "maxReconnectionInterval", void 0), Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_6__["property"])({
        type: String
      })], re.prototype, "objectIdField", void 0), Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_6__["property"])({
        value: "ArcGISStreamLayer",
        type: ["ArcGISStreamLayer"]
      })], re.prototype, "operationalLayerType", void 0), Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_6__["property"])(_support_commonProperties_js__WEBPACK_IMPORTED_MODULE_27__["popupEnabled"])], re.prototype, "popupEnabled", void 0), Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_6__["property"])({
        type: _PopupTemplate_js__WEBPACK_IMPORTED_MODULE_21__["default"],
        json: {
          read: {
            source: "popupInfo"
          },
          write: {
            target: "popupInfo"
          }
        }
      })], re.prototype, "popupTemplate", void 0), Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_6__["property"])({
        type: _support_PurgeOptions_js__WEBPACK_IMPORTED_MODULE_52__["default"]
      })], re.prototype, "purgeOptions", void 0), Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_6__["property"])({
        types: _renderers_support_types_js__WEBPACK_IMPORTED_MODULE_36__["rendererTypes"],
        json: {
          origins: {
            service: {
              write: {
                target: "drawingInfo.renderer",
                enabled: !1
              }
            }
          },
          write: {
            target: "layerDefinition.drawingInfo.renderer"
          }
        }
      })], re.prototype, "renderer", null), Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_reader_js__WEBPACK_IMPORTED_MODULE_8__["reader"])("service", "renderer", ["drawingInfo.renderer", "defaultSymbol"]), Object(_core_accessorSupport_decorators_reader_js__WEBPACK_IMPORTED_MODULE_8__["reader"])("renderer", ["layerDefinition.drawingInfo.renderer", "layerDefinition.defaultSymbol"])], re.prototype, "readRenderer", null), Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_writer_js__WEBPACK_IMPORTED_MODULE_11__["writer"])("renderer")], re.prototype, "writeRenderer", null), Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_writer_js__WEBPACK_IMPORTED_MODULE_11__["writer"])("web-scene", "renderer", {
        "layerDefinition.drawingInfo.renderer": {
          types: _renderers_support_types_js__WEBPACK_IMPORTED_MODULE_36__["webSceneRendererTypes"]
        }
      })], re.prototype, "writeWebSceneRenderer", null), Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_6__["property"])(_support_commonProperties_js__WEBPACK_IMPORTED_MODULE_27__["screenSizePerspectiveEnabled"])], re.prototype, "screenSizePerspectiveEnabled", void 0), Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_6__["property"])({
        type: _geometry_SpatialReference_js__WEBPACK_IMPORTED_MODULE_17__["default"],
        json: {
          origins: {
            service: {
              read: {
                source: "spatialReference"
              }
            }
          }
        }
      })], re.prototype, "spatialReference", void 0), Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_6__["property"])({
        json: {
          read: !1
        }
      })], re.prototype, "type", void 0), Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_6__["property"])(_support_commonProperties_js__WEBPACK_IMPORTED_MODULE_27__["url"])], re.prototype, "url", void 0), Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_6__["property"])({
        type: Number
      })], re.prototype, "updateInterval", void 0), Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_6__["property"])({
        type: String
      })], re.prototype, "webSocketUrl", void 0), re = Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_subclass_js__WEBPACK_IMPORTED_MODULE_10__["subclass"])("esri.layers.StreamLayer")], re);
      var te = Object(_core_accessorSupport_extensions_serializableProperty_reader_js__WEBPACK_IMPORTED_MODULE_9__["createTypeReader"])({
        types: _chunks_symbols_js__WEBPACK_IMPORTED_MODULE_23__["a"]
      });
      var oe = re;
      /* harmony default export */

      __webpack_exports__["default"] = oe;
      /***/
    },

    /***/
    "vHOR":
    /*!******************************************************************!*\
      !*** ./node_modules/@arcgis/core/layers/support/PurgeOptions.js ***!
      \******************************************************************/

    /*! exports provided: default */

    /***/
    function vHOR(module, __webpack_exports__, __webpack_require__) {
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
      /*
      All material copyright ESRI, All Rights Reserved, unless otherwise specified.
      See https://js.arcgis.com/4.18/esri/copyright.txt for details.
      */


      var t;

      var p = t = /*#__PURE__*/function (_core_JSONSupport_js_5) {
        _inherits(_class, _core_JSONSupport_js_5);

        var _super7 = _createSuper(_class);

        function _class() {
          var _this9;

          _classCallCheck(this, _class);

          _this9 = _super7.apply(this, arguments), _this9.age = null, _this9.ageReceived = null, _this9.displayCount = null, _this9.maxObservations = 1;
          return _this9;
        }

        _createClass(_class, [{
          key: "clone",
          value: function clone() {
            return new t({
              age: this.age,
              ageReceived: this.ageReceived,
              displayCount: this.displayCount,
              maxObservations: this.maxObservations
            });
          }
        }]);

        return _class;
      }(_core_JSONSupport_js__WEBPACK_IMPORTED_MODULE_9__["JSONSupport"]);

      Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_4__["property"])({
        type: Number,
        json: {
          write: !0
        }
      })], p.prototype, "age", void 0), Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_4__["property"])({
        type: Number,
        json: {
          write: !0
        }
      })], p.prototype, "ageReceived", void 0), Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_4__["property"])({
        type: Number,
        json: {
          write: !0
        }
      })], p.prototype, "displayCount", void 0), Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_4__["property"])({
        type: Number,
        json: {
          write: !0
        }
      })], p.prototype, "maxObservations", void 0), p = t = Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_subclass_js__WEBPACK_IMPORTED_MODULE_5__["subclass"])("esri.layers.support.PurgeOptions")], p);
      var i = p;
      /* harmony default export */

      __webpack_exports__["default"] = i;
      /***/
    }
  }]);
})();
//# sourceMappingURL=StreamLayer-js-es5.js.map