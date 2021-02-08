(function () {
  function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

  function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

  function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

  function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }

  function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

  function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && Symbol.iterator in Object(iter)) return Array.from(iter); }

  function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }

  function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

  function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  function _createForOfIteratorHelper(o, allowArrayLike) { var it; if (typeof Symbol === "undefined" || o[Symbol.iterator] == null) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e31) { throw _e31; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = o[Symbol.iterator](); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e32) { didErr = true; err = _e32; }, f: function f() { try { if (!normalCompletion && it["return"] != null) it["return"](); } finally { if (didErr) throw err; } } }; }

  function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

  function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

  function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

  function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

  function _iterableToArrayLimit(arr, i) { if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr))) return; var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

  function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

  function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

  function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

  function _possibleConstructorReturn(self, call) { if (call && (typeof call === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

  function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

  function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

  function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["tasks-PrintTask-js"], {
    /***/
    "/k1A":
    /*!**************************************************************!*\
      !*** ./node_modules/@arcgis/core/layers/support/MapImage.js ***!
      \**************************************************************/

    /*! exports provided: default */

    /***/
    function k1A(module, __webpack_exports__, __webpack_require__) {
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


      var _geometry_Extent_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
      /*! ../../geometry/Extent.js */
      "OvF4");
      /*
      All material copyright ESRI, All Rights Reserved, unless otherwise specified.
      See https://js.arcgis.com/4.18/esri/copyright.txt for details.
      */


      var p = /*#__PURE__*/function (_core_JSONSupport_js_) {
        _inherits(p, _core_JSONSupport_js_);

        var _super = _createSuper(p);

        function p() {
          var _this;

          _classCallCheck(this, p);

          _this = _super.apply(this, arguments), _this.extent = null, _this.height = null, _this.href = null, _this.opacity = 1, _this.rotation = 0, _this.scale = null, _this.visible = !0, _this.width = null;
          return _this;
        }

        return p;
      }(_core_JSONSupport_js__WEBPACK_IMPORTED_MODULE_9__["JSONSupport"]);

      Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_4__["property"])({
        type: _geometry_Extent_js__WEBPACK_IMPORTED_MODULE_10__["default"]
      })], p.prototype, "extent", void 0), Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_4__["property"])()], p.prototype, "height", void 0), Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_4__["property"])()], p.prototype, "href", void 0), Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_4__["property"])()], p.prototype, "opacity", void 0), Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_4__["property"])()], p.prototype, "rotation", void 0), Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_4__["property"])()], p.prototype, "scale", void 0), Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_4__["property"])()], p.prototype, "visible", void 0), Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_4__["property"])()], p.prototype, "width", void 0), p = Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_subclass_js__WEBPACK_IMPORTED_MODULE_5__["subclass"])("esri.layer.support.MapImage")], p);
      var i = p;
      /* harmony default export */

      __webpack_exports__["default"] = i;
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
    "3AG9":
    /*!***************************************************************!*\
      !*** ./node_modules/@arcgis/core/tasks/support/RasterData.js ***!
      \***************************************************************/

    /*! exports provided: default */

    /***/
    function AG9(module, __webpack_exports__, __webpack_require__) {
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


      var e = /*#__PURE__*/function (_core_JSONSupport_js_2) {
        _inherits(e, _core_JSONSupport_js_2);

        var _super2 = _createSuper(e);

        function e(r) {
          var _this2;

          _classCallCheck(this, e);

          _this2 = _super2.call(this, r), _this2.format = null, _this2.itemId = null, _this2.url = null;
          return _this2;
        }

        return e;
      }(_core_JSONSupport_js__WEBPACK_IMPORTED_MODULE_9__["JSONSupport"]);

      Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_4__["property"])()], e.prototype, "format", void 0), Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_4__["property"])({
        json: {
          read: {
            source: "itemID"
          },
          write: {
            target: "itemID"
          }
        }
      })], e.prototype, "itemId", void 0), Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_4__["property"])()], e.prototype, "url", void 0), e = Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_subclass_js__WEBPACK_IMPORTED_MODULE_5__["subclass"])("esri/tasks/support/RasterData")], e);
      var p = e;
      /* harmony default export */

      __webpack_exports__["default"] = p;
      /***/
    },

    /***/
    "9XlO":
    /*!******************************************************!*\
      !*** ./node_modules/@arcgis/core/tasks/PrintTask.js ***!
      \******************************************************/

    /*! exports provided: default */

    /***/
    function XlO(module, __webpack_exports__, __webpack_require__) {
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


      var _core_accessorSupport_decorators_subclass_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! ../core/accessorSupport/decorators/subclass.js */
      "04ZG");
      /* harmony import */


      var _core_Error_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! ../core/Error.js */
      "zlDU");
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


      var _geometry_Polygon_js__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
      /*! ../geometry/Polygon.js */
      "Ehki");
      /* harmony import */


      var _core_screenUtils_js__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(
      /*! ../core/screenUtils.js */
      "qRWG");
      /* harmony import */


      var _kernel_js__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(
      /*! ../kernel.js */
      "975N");
      /* harmony import */


      var _request_js__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(
      /*! ../request.js */
      "Lqtk");
      /* harmony import */


      var _renderers_visualVariables_support_visualVariableUtils_js__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(
      /*! ../renderers/visualVariables/support/visualVariableUtils.js */
      "0pea");
      /* harmony import */


      var _support_Query_js__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(
      /*! ./support/Query.js */
      "xk++");
      /* harmony import */


      var _Task_js__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(
      /*! ./Task.js */
      "kglp");
      /* harmony import */


      var _Geoprocessor_js__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(
      /*! ./Geoprocessor.js */
      "LE+W");
      /* harmony import */


      var _support_fileFormat_js__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(
      /*! ./support/fileFormat.js */
      "Pq/a");
      /* harmony import */


      var _support_layoutTemplate_js__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(
      /*! ./support/layoutTemplate.js */
      "Vd7i");
      /* harmony import */


      var _support_printTaskUtils_js__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(
      /*! ./support/printTaskUtils.js */
      "Oxsg");
      /* harmony import */


      var _support_PrintTemplate_js__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(
      /*! ./support/PrintTemplate.js */
      "yvFI");
      /*
      All material copyright ESRI, All Rights Reserved, unless otherwise specified.
      See https://js.arcgis.com/4.18/esri/copyright.txt for details.
      */


      var q = {
        Feet: "ft",
        Kilometers: "km",
        Meters: "m",
        Miles: "mi"
      },
          B = new _core_jsonMap_js__WEBPACK_IMPORTED_MODULE_6__["JSONMap"]({
        esriFeet: "Feet",
        esriKilometers: "Kilometers",
        esriMeters: "Meters",
        esriMiles: "Miles"
      }),
          K = new _core_jsonMap_js__WEBPACK_IMPORTED_MODULE_6__["JSONMap"]({
        esriExecutionTypeSynchronous: "sync",
        esriExecutionTypeAsynchronous: "async"
      }),
          Q = new _support_Query_js__WEBPACK_IMPORTED_MODULE_18__["default"]({
        returnGeometry: !0
      });

      function H(e) {
        return e && (e.path || "image/svg+xml" === e.contentType || e.url && e.url.endsWith(".svg"));
      }

      var X = /*#__PURE__*/function (_Task_js__WEBPACK_IMP) {
        _inherits(X, _Task_js__WEBPACK_IMP);

        var _super3 = _createSuper(X);

        function X() {
          var _this3;

          _classCallCheck(this, X);

          for (var _len = arguments.length, e = new Array(_len), _key = 0; _key < _len; _key++) {
            e[_key] = arguments[_key];
          }

          _this3 = _super3.call.apply(_super3, [this].concat(e)), _this3._ssExtent = null, _this3._legendLayers = [], _this3._legendLayerNameMap = {}, _this3._gpServerUrl = null, _this3._cimVersion = null, _this3._is11xService = !1, _this3._gpMetadata = null, _this3.updateDelay = 1e3;
          return _this3;
        }

        _createClass(X, [{
          key: "_geoprocessor",
          get: function get() {
            return new _Geoprocessor_js__WEBPACK_IMPORTED_MODULE_20__["default"]({
              url: this.url
            });
          }
        }, {
          key: "mode",
          get: function get() {
            return this._gpMetadata && this._gpMetadata.executionType ? K.fromJSON(this._gpMetadata.executionType) : "sync";
          }
        }, {
          key: "execute",
          value: function execute(e, t) {
            var _this4 = this;

            var r = this.url;
            var i = r.lastIndexOf("/GPServer/");
            return i > 0 && (r = r.slice(0, i + 9)), Object(_core_promiseUtils_js__WEBPACK_IMPORTED_MODULE_12__["resolve"])().then(function () {
              return _this4._gpServerUrl === r ? {
                data: _this4._gpMetadata
              } : (_this4._gpServerUrl = r, Object(_request_js__WEBPACK_IMPORTED_MODULE_16__["default"])(r, {
                query: {
                  f: "json"
                }
              }));
            }).then(function (t) {
              return _this4._gpMetadata = t.data, _this4._cimVersion = _this4._gpMetadata.cimVersion, _this4._is11xService = !!_this4._cimVersion, _this4._getGpPrintParams(e);
            }).then(function (e) {
              var r = function r(e) {
                return "sync" === _this4.mode ? e.results && e.results[0] && e.results[0].value : _this4._geoprocessor.getResultData(e.jobId, "Output_File", t).then(function (e) {
                  return e.value;
                });
              };

              return "async" === _this4.mode ? _this4._geoprocessor.submitJob(e, t).then(function (e) {
                return _this4._geoprocessor.waitForJobCompletion(e.jobId, {
                  interval: _this4.updateDelay
                }).then(r);
              }) : _this4._geoprocessor.execute(e, t).then(r);
            });
          }
        }, {
          key: "_createOperationalLayers",
          value: function () {
            var _createOperationalLayers2 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(e, t) {
              var r, i, a, s, _iterator3, _step3, _e14, _t, _a7, _i4;

              return regeneratorRuntime.wrap(function _callee$(_context) {
                while (1) {
                  switch (_context.prev = _context.next) {
                    case 0:
                      r = [], i = {
                        layerView: null,
                        printTemplate: t,
                        view: e
                      };
                      a = 0;
                      t.scalePreserved && (a = t.outScale || e.scale);
                      s = Object(_support_printTaskUtils_js__WEBPACK_IMPORTED_MODULE_23__["getVisibleLayerViews"])(e, a);
                      _iterator3 = _createForOfIteratorHelper(s);
                      _context.prev = 5;

                      _iterator3.s();

                    case 7:
                      if ((_step3 = _iterator3.n()).done) {
                        _context.next = 116;
                        break;
                      }

                      _e14 = _step3.value;
                      _t = _e14.layer;

                      if (!(!_t.loaded || Object(_support_printTaskUtils_js__WEBPACK_IMPORTED_MODULE_23__["isGroupLayer"])(_t))) {
                        _context.next = 12;
                        break;
                      }

                      return _context.abrupt("continue", 114);

                    case 12:
                      _a7 = void 0;
                      i.layerView = _e14;

                      if (!Object(_support_printTaskUtils_js__WEBPACK_IMPORTED_MODULE_23__["isBingMapsLayer"])(_t)) {
                        _context.next = 18;
                        break;
                      }

                      _context.t0 = this._createBingMapsLayerJSON(_t);
                      _context.next = 112;
                      break;

                    case 18:
                      if (!Object(_support_printTaskUtils_js__WEBPACK_IMPORTED_MODULE_23__["isCSVLayer"])(_t)) {
                        _context.next = 24;
                        break;
                      }

                      _context.next = 21;
                      return this._createCSVLayerJSON(_t, i);

                    case 21:
                      _context.t1 = _context.sent;
                      _context.next = 111;
                      break;

                    case 24:
                      if (!Object(_support_printTaskUtils_js__WEBPACK_IMPORTED_MODULE_23__["isFeatureLayer"])(_t)) {
                        _context.next = 30;
                        break;
                      }

                      _context.next = 27;
                      return this._createFeatureLayerJSON(_t, i);

                    case 27:
                      _context.t2 = _context.sent;
                      _context.next = 110;
                      break;

                    case 30:
                      if (!Object(_support_printTaskUtils_js__WEBPACK_IMPORTED_MODULE_23__["isGeoJSONLayer"])(_t)) {
                        _context.next = 36;
                        break;
                      }

                      _context.next = 33;
                      return this._createGeoJSONLayer(_t, i);

                    case 33:
                      _context.t3 = _context.sent;
                      _context.next = 109;
                      break;

                    case 36:
                      if (!Object(_support_printTaskUtils_js__WEBPACK_IMPORTED_MODULE_23__["isGraphicsLayer"])(_t)) {
                        _context.next = 42;
                        break;
                      }

                      _context.next = 39;
                      return this._createGraphicsLayerJSON(_t, i);

                    case 39:
                      _context.t4 = _context.sent;
                      _context.next = 108;
                      break;

                    case 42:
                      if (!Object(_support_printTaskUtils_js__WEBPACK_IMPORTED_MODULE_23__["isImageryLayer"])(_t)) {
                        _context.next = 46;
                        break;
                      }

                      _context.t5 = this._createImageryLayerJSON(_t);
                      _context.next = 107;
                      break;

                    case 46:
                      if (!Object(_support_printTaskUtils_js__WEBPACK_IMPORTED_MODULE_23__["isKMLLayer"])(_t)) {
                        _context.next = 52;
                        break;
                      }

                      _context.next = 49;
                      return this._createKMLLayerJSON(_t, i);

                    case 49:
                      _context.t6 = _context.sent;
                      _context.next = 106;
                      break;

                    case 52:
                      if (!Object(_support_printTaskUtils_js__WEBPACK_IMPORTED_MODULE_23__["isMapImageLayer"])(_t)) {
                        _context.next = 56;
                        break;
                      }

                      _context.t7 = this._createMapImageLayerJSON(_t, i);
                      _context.next = 105;
                      break;

                    case 56:
                      if (!Object(_support_printTaskUtils_js__WEBPACK_IMPORTED_MODULE_23__["isMapNotesLayer"])(_t)) {
                        _context.next = 62;
                        break;
                      }

                      _context.next = 59;
                      return this._createMapNotesLayerJSON(i);

                    case 59:
                      _context.t8 = _context.sent;
                      _context.next = 104;
                      break;

                    case 62:
                      if (!Object(_support_printTaskUtils_js__WEBPACK_IMPORTED_MODULE_23__["isOpenStreetMapLayer"])(_t)) {
                        _context.next = 66;
                        break;
                      }

                      _context.t9 = this._createOpenStreetMapLayerJSON();
                      _context.next = 103;
                      break;

                    case 66:
                      if (!Object(_support_printTaskUtils_js__WEBPACK_IMPORTED_MODULE_23__["isStreamLayer"])(_t)) {
                        _context.next = 72;
                        break;
                      }

                      _context.next = 69;
                      return this._createStreamLayerJSON(_t, i);

                    case 69:
                      _context.t10 = _context.sent;
                      _context.next = 102;
                      break;

                    case 72:
                      if (!Object(_support_printTaskUtils_js__WEBPACK_IMPORTED_MODULE_23__["isTileLayer"])(_t)) {
                        _context.next = 76;
                        break;
                      }

                      _context.t11 = this._createTileLayerJSON(_t);
                      _context.next = 101;
                      break;

                    case 76:
                      if (!Object(_support_printTaskUtils_js__WEBPACK_IMPORTED_MODULE_23__["isVectorTileLayer"])(_t)) {
                        _context.next = 82;
                        break;
                      }

                      _context.next = 79;
                      return this._createVectorTileLayerJSON(_t, i);

                    case 79:
                      _context.t12 = _context.sent;
                      _context.next = 100;
                      break;

                    case 82:
                      if (!Object(_support_printTaskUtils_js__WEBPACK_IMPORTED_MODULE_23__["isWebTileLayer"])(_t)) {
                        _context.next = 86;
                        break;
                      }

                      _context.t13 = this._createWebTileLayerJSON(_t);
                      _context.next = 99;
                      break;

                    case 86:
                      if (!Object(_support_printTaskUtils_js__WEBPACK_IMPORTED_MODULE_23__["isWMSLayer"])(_t)) {
                        _context.next = 90;
                        break;
                      }

                      _context.t14 = this._createWMSLayerJSON(_t);
                      _context.next = 98;
                      break;

                    case 90:
                      if (!Object(_support_printTaskUtils_js__WEBPACK_IMPORTED_MODULE_23__["isWMTSLayer"])(_t)) {
                        _context.next = 94;
                        break;
                      }

                      _context.t15 = this._createWMTSLayerJSON(_t);
                      _context.next = 97;
                      break;

                    case 94:
                      _context.next = 96;
                      return this._createScreenshotJSON(_t, i);

                    case 96:
                      _context.t15 = _context.sent;

                    case 97:
                      _context.t14 = _context.t15;

                    case 98:
                      _context.t13 = _context.t14;

                    case 99:
                      _context.t12 = _context.t13;

                    case 100:
                      _context.t11 = _context.t12;

                    case 101:
                      _context.t10 = _context.t11;

                    case 102:
                      _context.t9 = _context.t10;

                    case 103:
                      _context.t8 = _context.t9;

                    case 104:
                      _context.t7 = _context.t8;

                    case 105:
                      _context.t6 = _context.t7;

                    case 106:
                      _context.t5 = _context.t6;

                    case 107:
                      _context.t4 = _context.t5;

                    case 108:
                      _context.t3 = _context.t4;

                    case 109:
                      _context.t2 = _context.t3;

                    case 110:
                      _context.t1 = _context.t2;

                    case 111:
                      _context.t0 = _context.t1;

                    case 112:
                      _a7 = _context.t0;
                      _a7 && (Array.isArray(_a7) ? r.push.apply(r, _toConsumableArray(_a7)) : (_a7.id = _t.id, _a7.title = this._legendLayerNameMap[_t.id] || _t.title, _a7.opacity = _t.opacity, _a7.minScale = _t.minScale || 0, _a7.maxScale = _t.maxScale || 0, r.push(_a7)));

                    case 114:
                      _context.next = 7;
                      break;

                    case 116:
                      _context.next = 121;
                      break;

                    case 118:
                      _context.prev = 118;
                      _context.t16 = _context["catch"](5);

                      _iterator3.e(_context.t16);

                    case 121:
                      _context.prev = 121;

                      _iterator3.f();

                      return _context.finish(121);

                    case 124:
                      if (!(a && r.forEach(function (e) {
                        e.minScale = 0, e.maxScale = 0;
                      }), e.graphics && e.graphics.length)) {
                        _context.next = 129;
                        break;
                      }

                      _context.next = 127;
                      return this._createFeatureCollectionJSON(null, e.graphics, t);

                    case 127:
                      _i4 = _context.sent;
                      _i4 && r.push(_i4);

                    case 129:
                      return _context.abrupt("return", r);

                    case 130:
                    case "end":
                      return _context.stop();
                  }
                }
              }, _callee, this, [[5, 118, 121, 124]]);
            }));

            function _createOperationalLayers(_x, _x2) {
              return _createOperationalLayers2.apply(this, arguments);
            }

            return _createOperationalLayers;
          }()
        }, {
          key: "_createBingMapsLayerJSON",
          value: function _createBingMapsLayerJSON(e) {
            return {
              culture: e.culture,
              key: e.key,
              type: "BingMaps" + ("aerial" === e.style ? "Aerial" : "hybrid" === e.style ? "Hybrid" : "Road")
            };
          }
        }, {
          key: "_createCSVLayerJSON",
          value: function () {
            var _createCSVLayerJSON2 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee2(e, _ref) {
              var t, r, i, _i5;

              return regeneratorRuntime.wrap(function _callee2$(_context2) {
                while (1) {
                  switch (_context2.prev = _context2.next) {
                    case 0:
                      t = _ref.layerView, r = _ref.printTemplate;

                      if (!(this._legendLayers && this._legendLayers.push({
                        id: e.id
                      }), !this._is11xService)) {
                        _context2.next = 6;
                        break;
                      }

                      _context2.next = 4;
                      return this._getGraphics(t);

                    case 4:
                      _i5 = _context2.sent;
                      return _context2.abrupt("return", this._createFeatureCollectionJSON(e, _i5, r));

                    case 6:
                      return _context2.abrupt("return", (i = {
                        type: "CSV"
                      }, e.write(i, {
                        origin: "web-map"
                      }), delete i.popupInfo, delete i.layerType, i.showLabels = r.showLabels && e.labelsVisible, i));

                    case 7:
                    case "end":
                      return _context2.stop();
                  }
                }
              }, _callee2, this);
            }));

            function _createCSVLayerJSON(_x3, _x4) {
              return _createCSVLayerJSON2.apply(this, arguments);
            }

            return _createCSVLayerJSON;
          }()
        }, {
          key: "_createFeatureCollectionJSON",
          value: function () {
            var _createFeatureCollectionJSON2 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee3(e, t, r) {
              var i, a, s, n, o, l, _t2, u, y, _t3, p, m, d, _e15, _e16, h, f, _i6, _u, _y, _t4, _r4, g, _iterator4, _step4, _e17, _t5;

              return regeneratorRuntime.wrap(function _callee3$(_context3) {
                while (1) {
                  switch (_context3.prev = _context3.next) {
                    case 0:
                      a = Object(_support_printTaskUtils_js__WEBPACK_IMPORTED_MODULE_23__["createPolygonLayer"])(), s = Object(_support_printTaskUtils_js__WEBPACK_IMPORTED_MODULE_23__["createPolylineLayer"])(), n = Object(_support_printTaskUtils_js__WEBPACK_IMPORTED_MODULE_23__["createPointLayer"])(), o = Object(_support_printTaskUtils_js__WEBPACK_IMPORTED_MODULE_23__["createMultipointLayer"])(), l = Object(_support_printTaskUtils_js__WEBPACK_IMPORTED_MODULE_23__["createPointLayer"])();

                      if (l.layerDefinition.name = "textLayer", delete l.layerDefinition.drawingInfo, e) {
                        if ("esri.layers.FeatureLayer" === e.declaredClass || "esri.layers.StreamLayer" === e.declaredClass ? a.layerDefinition.name = s.layerDefinition.name = n.layerDefinition.name = o.layerDefinition.name = this._legendLayerNameMap[e.id] || e.get("arcgisProps.title") || e.title : "esri.layers.GraphicsLayer" === e.declaredClass && (t = e.graphics.items), e.renderer) {
                          _t2 = e.renderer.toJSON();
                          a.layerDefinition.drawingInfo.renderer = _t2, s.layerDefinition.drawingInfo.renderer = _t2, n.layerDefinition.drawingInfo.renderer = _t2, o.layerDefinition.drawingInfo.renderer = _t2;
                        }

                        if (r.showLabels && e.labelsVisible && "function" == typeof e.write) {
                          _t3 = null == (u = e.write({}, {
                            origin: "web-map"
                          }).layerDefinition) || null == (y = u.drawingInfo) ? void 0 : y.labelingInfo;
                          _t3 && (i = !0, a.layerDefinition.drawingInfo.labelingInfo = _t3, s.layerDefinition.drawingInfo.labelingInfo = _t3, n.layerDefinition.drawingInfo.labelingInfo = _t3, o.layerDefinition.drawingInfo.labelingInfo = _t3);
                        }
                      }

                      null != e && e.renderer || i || (delete a.layerDefinition.drawingInfo, delete s.layerDefinition.drawingInfo, delete n.layerDefinition.drawingInfo, delete o.layerDefinition.drawingInfo);
                      m = e && e.fields, d = e && e.renderer;

                      if (!(m && d && "function" == typeof d.collectRequiredFields)) {
                        _context3.next = 9;
                        break;
                      }

                      _e15 = new Set();
                      _context3.next = 8;
                      return d.collectRequiredFields(_e15, m);

                    case 8:
                      p = Array.from(_e15);

                    case 9:
                      if (m) {
                        _e16 = m.map(function (e) {
                          return e.toJSON();
                        });
                        a.layerDefinition.fields = _e16, s.layerDefinition.fields = _e16, n.layerDefinition.fields = _e16, o.layerDefinition.fields = _e16;
                      }

                      h = t && t.length;
                      _i6 = 0;

                    case 12:
                      if (!(_i6 < h)) {
                        _context3.next = 44;
                        break;
                      }

                      _u = t[_i6] || t.getItemAt(_i6);

                      if (!(!1 === _u.visible || !_u.geometry)) {
                        _context3.next = 16;
                        break;
                      }

                      return _context3.abrupt("continue", 41);

                    case 16:
                      if (!(f = _u.toJSON(), f.hasOwnProperty("popupTemplate") && delete f.popupTemplate, f.geometry && f.geometry.z && delete f.geometry.z, f.symbol && f.symbol.outline && "esriCLS" === f.symbol.outline.type && !this._is11xService)) {
                        _context3.next = 18;
                        break;
                      }

                      return _context3.abrupt("continue", 41);

                    case 18:
                      !this._is11xService && f.symbol && f.symbol.outline && f.symbol.outline.color && f.symbol.outline.color[3] && (f.symbol.outline.color[3] = 255);
                      _y = e && e.renderer && ("valueExpression" in e.renderer && e.renderer.valueExpression || "hasVisualVariables" in e.renderer && e.renderer.hasVisualVariables());

                      if (!(!f.symbol && e && e.renderer && _y && !this._is11xService)) {
                        _context3.next = 28;
                        break;
                      }

                      _t4 = e.renderer;
                      _context3.next = 24;
                      return _t4.getSymbolAsync(_u);

                    case 24:
                      _r4 = _context3.sent;

                      if (_r4) {
                        _context3.next = 27;
                        break;
                      }

                      return _context3.abrupt("continue", 41);

                    case 27:
                      f.symbol = _r4.toJSON(), "hasVisualVariables" in _t4 && _t4.hasVisualVariables() && Object(_support_printTaskUtils_js__WEBPACK_IMPORTED_MODULE_23__["applyVisualVariables"])(f.symbol, {
                        renderer: _t4,
                        graphic: _u,
                        symbol: _r4
                      });

                    case 28:
                      _context3.t0 = f.symbol;

                      if (!_context3.t0) {
                        _context3.next = 38;
                        break;
                      }

                      f.symbol.angle || delete f.symbol.angle;

                      if (!H(f.symbol)) {
                        _context3.next = 37;
                        break;
                      }

                      _context3.next = 34;
                      return this._convertSvgToPictureMarkerSymbolJson(f.symbol);

                    case 34:
                      f.symbol = _context3.sent;
                      _context3.next = 38;
                      break;

                    case 37:
                      f.symbol.text && delete f.attributes;

                    case 38:
                      if (!((!r || !r.forceFeatureAttributes) && p && p.length)) {
                        _context3.next = 40;
                        break;
                      }

                      (function () {
                        var e = {};
                        p.forEach(function (t) {
                          f.attributes && f.attributes.hasOwnProperty(t) && (e[t] = f.attributes[t]);
                        }), f.attributes = e;
                      })();

                    case 40:
                      "polygon" === _u.geometry.type ? a.featureSet.features.push(f) : "polyline" === _u.geometry.type ? s.featureSet.features.push(f) : "point" === _u.geometry.type ? f.symbol && f.symbol.text ? l.featureSet.features.push(f) : n.featureSet.features.push(f) : "multipoint" === _u.geometry.type ? o.featureSet.features.push(f) : "extent" === _u.geometry.type && (f.geometry = _geometry_Polygon_js__WEBPACK_IMPORTED_MODULE_13__["default"].fromExtent(_u.geometry).toJSON(), a.featureSet.features.push(f));

                    case 41:
                      _i6++;
                      _context3.next = 12;
                      break;

                    case 44:
                      g = [a, s, o, n, l].filter(function (e) {
                        return e.featureSet.features.length > 0;
                      });
                      _iterator4 = _createForOfIteratorHelper(g);
                      _context3.prev = 46;

                      _iterator4.s();

                    case 48:
                      if ((_step4 = _iterator4.n()).done) {
                        _context3.next = 59;
                        break;
                      }

                      _e17 = _step4.value;
                      _t5 = _e17.featureSet.features.every(function (e) {
                        return e.symbol;
                      });
                      !_t5 || r && r.forceFeatureAttributes || _e17.featureSet.features.forEach(function (e) {
                        delete e.attributes;
                      });
                      _t5 && delete _e17.layerDefinition.drawingInfo;
                      _context3.t1 = _e17.layerDefinition.drawingInfo && _e17.layerDefinition.drawingInfo.renderer;

                      if (!_context3.t1) {
                        _context3.next = 57;
                        break;
                      }

                      _context3.next = 57;
                      return this._convertSvgRenderer(_e17.layerDefinition.drawingInfo.renderer);

                    case 57:
                      _context3.next = 48;
                      break;

                    case 59:
                      _context3.next = 64;
                      break;

                    case 61:
                      _context3.prev = 61;
                      _context3.t2 = _context3["catch"](46);

                      _iterator4.e(_context3.t2);

                    case 64:
                      _context3.prev = 64;

                      _iterator4.f();

                      return _context3.finish(64);

                    case 67:
                      return _context3.abrupt("return", g.length ? {
                        featureCollection: {
                          layers: g
                        },
                        showLabels: i
                      } : null);

                    case 68:
                    case "end":
                      return _context3.stop();
                  }
                }
              }, _callee3, this, [[46, 61, 64, 67]]);
            }));

            function _createFeatureCollectionJSON(_x5, _x6, _x7) {
              return _createFeatureCollectionJSON2.apply(this, arguments);
            }

            return _createFeatureCollectionJSON;
          }()
        }, {
          key: "_createFeatureLayerJSON",
          value: function () {
            var _createFeatureLayerJSON2 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee4(e, t) {
              var r, i, a, s, n, o, l, c, u, _t6, y, p, _e18, _t7, m;

              return regeneratorRuntime.wrap(function _callee4$(_context4) {
                while (1) {
                  switch (_context4.prev = _context4.next) {
                    case 0:
                      this._legendLayers && this._legendLayers.push({
                        id: e.id
                      });
                      s = e.renderer;

                      if (!(e.featureReduction || s && "dot-density" === s.type && (!this._is11xService || parseFloat(this._cimVersion) < 2.6))) {
                        _context4.next = 4;
                        break;
                      }

                      return _context4.abrupt("return", this._createScreenshotJSON(e, t));

                    case 4:
                      n = t.layerView, o = t.printTemplate, l = t.view, c = s && ("valueExpression" in s && s.valueExpression || "hasVisualVariables" in s && s.hasVisualVariables()), u = "feature-layer" !== (null == (r = e.source) ? void 0 : r.type) && "ogc-feature" !== (null == (i = e.source) ? void 0 : i.type);

                      if (!(!this._is11xService && c || e.featureReduction || u || !s || "field" in s && null != s.field && ("string" != typeof s.field || !e.getField(s.field)))) {
                        _context4.next = 14;
                        break;
                      }

                      _context4.next = 8;
                      return this._getGraphics(n);

                    case 8:
                      _t6 = _context4.sent;
                      _context4.next = 11;
                      return this._createFeatureCollectionJSON(e, _t6, o);

                    case 11:
                      a = _context4.sent;
                      _context4.next = 27;
                      break;

                    case 14:
                      a = {
                        id: (m = e.write()).id,
                        title: m.title,
                        opacity: m.opacity,
                        minScale: m.minScale,
                        maxScale: m.maxScale,
                        url: m.url,
                        layerDefinition: m.layerDefinition
                      };
                      a.showLabels = o.showLabels && e.labelsVisible;

                      this._setURLandToken(a, e);

                      _context4.t0 = null != (y = a.layerDefinition) && null != (p = y.drawingInfo) && p.renderer;

                      if (!_context4.t0) {
                        _context4.next = 24;
                        break;
                      }

                      delete a.layerDefinition.minScale;
                      delete a.layerDefinition.maxScale;
                      _context4.next = 23;
                      return this._convertSvgRenderer(a.layerDefinition.drawingInfo.renderer);

                    case 23:
                      _context4.t0 = "visualVariables" in s && s.visualVariables && s.visualVariables[0];

                    case 24:
                      if (!_context4.t0) {
                        _context4.next = 27;
                        break;
                      }

                      _e18 = s.visualVariables[0];

                      if ("size" === _e18.type && _e18.maxSize && "number" != typeof _e18.maxSize && _e18.minSize && "number" != typeof _e18.minSize) {
                        _t7 = Object(_renderers_visualVariables_support_visualVariableUtils_js__WEBPACK_IMPORTED_MODULE_17__["getSizeRangeAtScale"])(_e18, l.scale);
                        a.layerDefinition.drawingInfo.renderer.visualVariables[0].minSize = _t7.minSize, a.layerDefinition.drawingInfo.renderer.visualVariables[0].maxSize = _t7.maxSize;
                      }

                    case 27:
                      return _context4.abrupt("return", a);

                    case 28:
                    case "end":
                      return _context4.stop();
                  }
                }
              }, _callee4, this);
            }));

            function _createFeatureLayerJSON(_x8, _x9) {
              return _createFeatureLayerJSON2.apply(this, arguments);
            }

            return _createFeatureLayerJSON;
          }()
        }, {
          key: "_createGeoJSONLayer",
          value: function () {
            var _createGeoJSONLayer2 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee5(e, _ref2) {
              var t, r, i;
              return regeneratorRuntime.wrap(function _callee5$(_context5) {
                while (1) {
                  switch (_context5.prev = _context5.next) {
                    case 0:
                      t = _ref2.layerView, r = _ref2.printTemplate;
                      this._legendLayers && this._legendLayers.push({
                        id: e.id
                      });
                      _context5.next = 4;
                      return this._getGraphics(t);

                    case 4:
                      i = _context5.sent;
                      return _context5.abrupt("return", this._createFeatureCollectionJSON(e, i, r));

                    case 6:
                    case "end":
                      return _context5.stop();
                  }
                }
              }, _callee5, this);
            }));

            function _createGeoJSONLayer(_x10, _x11) {
              return _createGeoJSONLayer2.apply(this, arguments);
            }

            return _createGeoJSONLayer;
          }()
        }, {
          key: "_createGraphicsLayerJSON",
          value: function () {
            var _createGraphicsLayerJSON2 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee6(e, _ref3) {
              var t;
              return regeneratorRuntime.wrap(function _callee6$(_context6) {
                while (1) {
                  switch (_context6.prev = _context6.next) {
                    case 0:
                      t = _ref3.printTemplate;
                      return _context6.abrupt("return", this._createFeatureCollectionJSON(e, null, t));

                    case 2:
                    case "end":
                      return _context6.stop();
                  }
                }
              }, _callee6, this);
            }));

            function _createGraphicsLayerJSON(_x12, _x13) {
              return _createGraphicsLayerJSON2.apply(this, arguments);
            }

            return _createGraphicsLayerJSON;
          }()
        }, {
          key: "_createImageryLayerJSON",
          value: function _createImageryLayerJSON(e) {
            this._legendLayers && this._legendLayers.push({
              id: e.id
            });
            var t = {
              bandIds: e.bandIds,
              compressionQuality: e.compressionQuality,
              format: e.format,
              interpolation: e.interpolation
            };
            if ((e.mosaicRule || e.definitionExpression) && (t.mosaicRule = e.exportImageServiceParameters.mosaicRule.toJSON()), e.renderingRule || e.renderer) if (this._is11xService) e.renderingRule && (t.renderingRule = e.renderingRule.toJSON()), e.renderer && (t.layerDefinition = t.layerDefinition || {}, t.layerDefinition.drawingInfo = t.layerDefinition.drawingInfo || {}, t.layerDefinition.drawingInfo.renderer = e.renderer.toJSON());else {
              var r = e.exportImageServiceParameters.combineRendererWithRenderingRule();
              r && (t.renderingRule = r.toJSON());
            }
            return this._setURLandToken(t, e), t;
          }
        }, {
          key: "_createKMLLayerJSON",
          value: function () {
            var _createKMLLayerJSON2 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee7(e, t) {
              var r, _t8, i, a, s, n;

              return regeneratorRuntime.wrap(function _callee7$(_context7) {
                while (1) {
                  switch (_context7.prev = _context7.next) {
                    case 0:
                      r = t.printTemplate;

                      if (!this._is11xService) {
                        _context7.next = 4;
                        break;
                      }

                      _t8 = {
                        type: "kml"
                      };
                      return _context7.abrupt("return", (e.write(_t8, {
                        origin: "web-map"
                      }), delete _t8.layerType, _t8.url = Object(_core_urlUtils_js__WEBPACK_IMPORTED_MODULE_9__["normalize"])(e.url), _t8));

                    case 4:
                      i = [], a = t.layerView;
                      a.allVisibleMapImages.forEach(function (t, r) {
                        var a = {
                          id: "".concat(e.id, "_image").concat(r),
                          type: "image",
                          title: e.id,
                          minScale: e.minScale || 0,
                          maxScale: e.maxScale || 0,
                          opacity: e.opacity,
                          extent: t.extent
                        };
                        "data:image/png;base64," === t.href.substr(0, 22) ? a.imageData = t.href.substr(22) : a.url = t.href, i.push(a);
                      });
                      s = [].concat(_toConsumableArray(a.allVisiblePoints.items), _toConsumableArray(a.allVisiblePolylines.items), _toConsumableArray(a.allVisiblePolygons.items));
                      _context7.t0 = _objectSpread;
                      _context7.t1 = {
                        id: e.id
                      };
                      _context7.next = 11;
                      return this._createFeatureCollectionJSON(null, s, r);

                    case 11:
                      _context7.t2 = _context7.sent;
                      n = (0, _context7.t0)(_context7.t1, _context7.t2);
                      return _context7.abrupt("return", (i.push(n), i));

                    case 14:
                    case "end":
                      return _context7.stop();
                  }
                }
              }, _callee7, this);
            }));

            function _createKMLLayerJSON(_x14, _x15) {
              return _createKMLLayerJSON2.apply(this, arguments);
            }

            return _createKMLLayerJSON;
          }()
        }, {
          key: "_createMapImageLayerJSON",
          value: function _createMapImageLayerJSON(e, _ref4) {
            var t = _ref4.view;
            var r;
            var i = {
              id: e.id,
              subLayerIds: []
            };
            var a = [];

            var s = t.scale,
                n = function n(e) {
              var t = 0 === s,
                  r = 0 === e.minScale || s <= e.minScale,
                  o = 0 === e.maxScale || s >= e.maxScale;
              if (e.visible && (t || r && o)) if (e.sublayers) e.sublayers.forEach(n);else {
                var _t9 = e.toExportImageJSON(),
                    _r5 = {
                  id: e.id,
                  name: e.title,
                  layerDefinition: {
                    drawingInfo: _t9.drawingInfo,
                    definitionExpression: _t9.definitionExpression,
                    source: _t9.source
                  }
                };

                a.unshift(_r5), i.subLayerIds.push(e.id);
              }
            };

            return e.sublayers && e.sublayers.forEach(n), a.length && (a = a.map(function (_ref5) {
              var e = _ref5.id,
                  t = _ref5.name,
                  r = _ref5.layerDefinition;
              return {
                id: e,
                name: t,
                layerDefinition: r
              };
            }), r = {
              layers: a,
              visibleLayers: i.subLayerIds
            }, this._setURLandToken(r, e), this._legendLayers.push(i)), r;
          }
        }, {
          key: "_createMapNotesLayerJSON",
          value: function () {
            var _createMapNotesLayerJSON2 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee8(_ref6) {
              var e, t, r, _iterator5, _step5, i, _e19;

              return regeneratorRuntime.wrap(function _callee8$(_context8) {
                while (1) {
                  switch (_context8.prev = _context8.next) {
                    case 0:
                      e = _ref6.layerView, t = _ref6.printTemplate;
                      r = [];
                      _iterator5 = _createForOfIteratorHelper(e.graphicsViews());
                      _context8.prev = 3;

                      _iterator5.s();

                    case 5:
                      if ((_step5 = _iterator5.n()).done) {
                        _context8.next = 13;
                        break;
                      }

                      i = _step5.value;
                      _context8.next = 9;
                      return this._createFeatureCollectionJSON(i, i.graphics, t);

                    case 9:
                      _e19 = _context8.sent;
                      _e19 && r.push.apply(r, _toConsumableArray(_e19.featureCollection.layers));

                    case 11:
                      _context8.next = 5;
                      break;

                    case 13:
                      _context8.next = 18;
                      break;

                    case 15:
                      _context8.prev = 15;
                      _context8.t0 = _context8["catch"](3);

                      _iterator5.e(_context8.t0);

                    case 18:
                      _context8.prev = 18;

                      _iterator5.f();

                      return _context8.finish(18);

                    case 21:
                      return _context8.abrupt("return", {
                        featureCollection: {
                          layers: r
                        }
                      });

                    case 22:
                    case "end":
                      return _context8.stop();
                  }
                }
              }, _callee8, this, [[3, 15, 18, 21]]);
            }));

            function _createMapNotesLayerJSON(_x16) {
              return _createMapNotesLayerJSON2.apply(this, arguments);
            }

            return _createMapNotesLayerJSON;
          }()
        }, {
          key: "_createOpenStreetMapLayerJSON",
          value: function _createOpenStreetMapLayerJSON() {
            return {
              type: "OpenStreetMap"
            };
          }
        }, {
          key: "_createScreenshotJSON",
          value: function () {
            var _createScreenshotJSON2 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee9(e, _ref7) {
              var t, r, i, a, s, n, l, c, _e20, _e21, y, p;

              return regeneratorRuntime.wrap(function _callee9$(_context9) {
                while (1) {
                  switch (_context9.prev = _context9.next) {
                    case 0:
                      t = _ref7.printTemplate, r = _ref7.view;
                      i = {
                        type: "image"
                      }, a = {
                        format: "png",
                        ignoreBackground: !0,
                        layers: [e],
                        rotation: 0
                      }, s = this._ssExtent || r.extent.clone();
                      n = 96, l = !0, c = !0;

                      if (t.exportOptions) {
                        _e20 = t.exportOptions;
                        _e20.dpi > 0 && (n = _e20.dpi), _e20.width > 0 && (l = _e20.width % 2 == r.width % 2), _e20.height > 0 && (c = _e20.height % 2 == r.height % 2);
                      }

                      if ("map-only" === t.layout && t.scalePreserved && (!t.outScale || t.outScale === r.scale) && 96 === n && (!l || !c) && (a.area = {
                        x: 0,
                        y: 0,
                        width: r.width,
                        height: r.height
                      }, l || (a.area.width -= 1), c || (a.area.height -= 1), !this._ssExtent)) {
                        _e21 = r.toMap(Object(_core_screenUtils_js__WEBPACK_IMPORTED_MODULE_14__["createScreenPoint"])(a.area.width, a.area.height));
                        s.ymin = _e21.y, s.xmax = _e21.x, this._ssExtent = s;
                      }

                      i.extent = s.clone()._normalize(!0).toJSON();
                      _context9.next = 8;
                      return r.takeScreenshot(a);

                    case 8:
                      y = _context9.sent;
                      p = Object(_core_urlUtils_js__WEBPACK_IMPORTED_MODULE_9__["dataComponents"])(y.dataUrl);
                      return _context9.abrupt("return", (i.imageData = p.data, i));

                    case 11:
                    case "end":
                      return _context9.stop();
                  }
                }
              }, _callee9, this);
            }));

            function _createScreenshotJSON(_x17, _x18) {
              return _createScreenshotJSON2.apply(this, arguments);
            }

            return _createScreenshotJSON;
          }()
        }, {
          key: "_createStreamLayerJSON",
          value: function () {
            var _createStreamLayerJSON2 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee10(e, _ref8) {
              var t, r, i;
              return regeneratorRuntime.wrap(function _callee10$(_context10) {
                while (1) {
                  switch (_context10.prev = _context10.next) {
                    case 0:
                      t = _ref8.layerView, r = _ref8.printTemplate;
                      this._legendLayers && this._legendLayers.push({
                        id: e.id
                      });
                      _context10.next = 4;
                      return this._getGraphics(t);

                    case 4:
                      i = _context10.sent;
                      return _context10.abrupt("return", this._createFeatureCollectionJSON(e, i, r));

                    case 6:
                    case "end":
                      return _context10.stop();
                  }
                }
              }, _callee10, this);
            }));

            function _createStreamLayerJSON(_x19, _x20) {
              return _createStreamLayerJSON2.apply(this, arguments);
            }

            return _createStreamLayerJSON;
          }()
        }, {
          key: "_createTileLayerJSON",
          value: function _createTileLayerJSON(e) {
            var t = {
              customParameters: e.customParameters
            };
            return this._setURLandToken(t, e), t;
          }
        }, {
          key: "_createVectorTileLayerJSON",
          value: function () {
            var _createVectorTileLayerJSON2 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee11(e, t) {
              var _t10, r, i;

              return regeneratorRuntime.wrap(function _callee11$(_context11) {
                while (1) {
                  switch (_context11.prev = _context11.next) {
                    case 0:
                      if (!(this._is11xService && e.serviceUrl && e.styleUrl)) {
                        _context11.next = 5;
                        break;
                      }

                      _t10 = _kernel_js__WEBPACK_IMPORTED_MODULE_15__["id"] && _kernel_js__WEBPACK_IMPORTED_MODULE_15__["id"].findCredential(e.styleUrl), r = _kernel_js__WEBPACK_IMPORTED_MODULE_15__["id"] && _kernel_js__WEBPACK_IMPORTED_MODULE_15__["id"].findCredential(e.serviceUrl);

                      if (!(!_t10 && !r || "2.1.0" !== this._cimVersion)) {
                        _context11.next = 5;
                        break;
                      }

                      i = {
                        type: "VectorTileLayer"
                      };
                      return _context11.abrupt("return", (i.styleUrl = Object(_core_urlUtils_js__WEBPACK_IMPORTED_MODULE_9__["normalize"])(e.styleUrl), _t10 && (i.token = _t10.token), r && r.token !== i.token && (i.additionalTokens = [{
                        url: e.serviceUrl,
                        token: r.token
                      }]), i));

                    case 5:
                      return _context11.abrupt("return", this._createScreenshotJSON(e, t));

                    case 6:
                    case "end":
                      return _context11.stop();
                  }
                }
              }, _callee11, this);
            }));

            function _createVectorTileLayerJSON(_x21, _x22) {
              return _createVectorTileLayerJSON2.apply(this, arguments);
            }

            return _createVectorTileLayerJSON;
          }()
        }, {
          key: "_createWebTileLayerJSON",
          value: function _createWebTileLayerJSON(e) {
            var t = {
              type: "WebTiledLayer",
              urlTemplate: e.urlTemplate.replace(/\${/g, "{"),
              credits: e.copyright
            };
            return e.subDomains && e.subDomains.length > 0 && (t.subDomains = e.subDomains), t;
          }
        }, {
          key: "_createWMSLayerJSON",
          value: function _createWMSLayerJSON(e) {
            var t;

            var r = [],
                i = function i(e) {
              e.visible && (e.sublayers ? e.sublayers.forEach(i) : e.name && r.unshift(e.name));
            };

            return e.sublayers && e.sublayers.forEach(i), r.length && (t = {
              type: "wms",
              customLayerParameters: e.customLayerParameters,
              customParameters: e.customParameters,
              transparentBackground: e.imageTransparency,
              visibleLayers: r,
              url: Object(_core_urlUtils_js__WEBPACK_IMPORTED_MODULE_9__["normalize"])(e.url),
              version: e.version
            }), t;
          }
        }, {
          key: "_createWMTSLayerJSON",
          value: function _createWMTSLayerJSON(e) {
            var t = e.activeLayer;
            return {
              type: "wmts",
              customLayerParameters: e.customLayerParameters,
              customParameters: e.customParameters,
              format: t.imageFormat,
              layer: t.id,
              style: t.styleId,
              tileMatrixSet: t.tileMatrixSetId,
              url: Object(_core_urlUtils_js__WEBPACK_IMPORTED_MODULE_9__["normalize"])(e.url)
            };
          }
        }, {
          key: "_setURLandToken",
          value: function _setURLandToken(e, t) {
            var r;
            if (!t.url) return;
            e.url = Object(_core_urlUtils_js__WEBPACK_IMPORTED_MODULE_9__["normalize"])(e.url || t.url);
            var i = null == (r = _kernel_js__WEBPACK_IMPORTED_MODULE_15__["id"]) ? void 0 : r.findCredential(t.url);
            i && (e.token = i.token);
          }
        }, {
          key: "_convertSvgToPictureMarkerSymbolJson",
          value: function () {
            var _convertSvgToPictureMarkerSymbolJson2 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee12(e) {
              var t, r, i, a, s, n, o, l, c, u, p, _t11, m, _t12, _s4;

              return regeneratorRuntime.wrap(function _callee12$(_context12) {
                while (1) {
                  switch (_context12.prev = _context12.next) {
                    case 0:
                      this._canvas || (this._canvas = document.createElement("canvas"));
                      t = 1024;
                      this._canvas.width = t, this._canvas.height = t;
                      r = this._canvas.getContext("2d");

                      if (!e.path) {
                        _context12.next = 20;
                        break;
                      }

                      n = new Path2D(e.path);
                      n.closePath(), r.fillStyle = Array.isArray(e.color) ? "rgba(".concat(e.color[0], ",").concat(e.color[1], ",").concat(e.color[2], ",").concat(e.color[3] / 255, ")") : "rgb(0,0,0)", r.fill(n);
                      o = Object(_support_printTaskUtils_js__WEBPACK_IMPORTED_MODULE_23__["getContextBoundingBox"])(r);

                      if (o) {
                        _context12.next = 10;
                        break;
                      }

                      return _context12.abrupt("return", null);

                    case 10:
                      r.clearRect(0, 0, t, t);
                      l = Object(_core_screenUtils_js__WEBPACK_IMPORTED_MODULE_14__["pt2px"])(e.size) / Math.max(o.width, o.height);
                      r.scale(l, l);
                      c = t / l, u = c / 2 - o.width / 2 - o.x, p = c / 2 - o.height / 2 - o.y;

                      if (r.translate(u, p), Array.isArray(e.color) && r.fill(n), null != (s = e.outline) && s.width && Array.isArray(e.outline.color)) {
                        _t11 = e.outline;
                        r.lineWidth = Object(_core_screenUtils_js__WEBPACK_IMPORTED_MODULE_14__["pt2px"])(_t11.width) / l, r.lineJoin = "round", r.strokeStyle = "rgba(".concat(_t11.color[0], ",").concat(_t11.color[1], ",").concat(_t11.color[2], ",").concat(_t11.color[3] / 255, ")"), r.stroke(n), o.width += r.lineWidth, o.height += r.lineWidth;
                      }

                      o.width *= l, o.height *= l;
                      m = r.getImageData(512 - o.width / 2, 512 - o.height / 2, Math.ceil(o.width), Math.ceil(o.height));
                      i = m.width, a = m.height, r.canvas.width = i, r.canvas.height = a, r.putImageData(m, 0, 0);
                      _context12.next = 25;
                      break;

                    case 20:
                      _t12 = "image/svg+xml" === e.contentType ? "data:image/svg+xml;base64," + e.imageData : e.url;
                      _context12.next = 23;
                      return Object(_request_js__WEBPACK_IMPORTED_MODULE_16__["default"])(_t12, {
                        responseType: "image"
                      });

                    case 23:
                      _s4 = _context12.sent.data;
                      i = Object(_core_screenUtils_js__WEBPACK_IMPORTED_MODULE_14__["pt2px"])(e.width), a = Object(_core_screenUtils_js__WEBPACK_IMPORTED_MODULE_14__["pt2px"])(e.height), r.canvas.width = i, r.canvas.height = a, r.drawImage(_s4, 0, 0, r.canvas.width, r.canvas.height);

                    case 25:
                      return _context12.abrupt("return", {
                        type: "esriPMS",
                        imageData: r.canvas.toDataURL("image/png").substr(22),
                        angle: e.angle,
                        contentType: "image/png",
                        height: Object(_core_screenUtils_js__WEBPACK_IMPORTED_MODULE_14__["px2pt"])(a),
                        width: Object(_core_screenUtils_js__WEBPACK_IMPORTED_MODULE_14__["px2pt"])(i),
                        xoffset: e.xoffset,
                        yoffset: e.yoffset
                      });

                    case 26:
                    case "end":
                      return _context12.stop();
                  }
                }
              }, _callee12, this);
            }));

            function _convertSvgToPictureMarkerSymbolJson(_x23) {
              return _convertSvgToPictureMarkerSymbolJson2.apply(this, arguments);
            }

            return _convertSvgToPictureMarkerSymbolJson;
          }()
        }, {
          key: "_convertSvgRenderer",
          value: function () {
            var _convertSvgRenderer2 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee13(e) {
              var t, r, _iterator6, _step6, _e22;

              return regeneratorRuntime.wrap(function _callee13$(_context13) {
                while (1) {
                  switch (_context13.prev = _context13.next) {
                    case 0:
                      t = e.type;

                      if (!("simple" === t && H(e.symbol))) {
                        _context13.next = 7;
                        break;
                      }

                      _context13.next = 4;
                      return this._convertSvgToPictureMarkerSymbolJson(e.symbol);

                    case 4:
                      e.symbol = _context13.sent;
                      _context13.next = 35;
                      break;

                    case 7:
                      if (!("uniqueValue" === t || "classBreaks" === t)) {
                        _context13.next = 35;
                        break;
                      }

                      _context13.t0 = H(e.defaultSymbol);

                      if (!_context13.t0) {
                        _context13.next = 13;
                        break;
                      }

                      _context13.next = 12;
                      return this._convertSvgToPictureMarkerSymbolJson(e.defaultSymbol);

                    case 12:
                      e.defaultSymbol = _context13.sent;

                    case 13:
                      r = e["uniqueValue" === t ? "uniqueValueInfos" : "classBreakInfos"];

                      if (!r) {
                        _context13.next = 35;
                        break;
                      }

                      _iterator6 = _createForOfIteratorHelper(r);
                      _context13.prev = 16;

                      _iterator6.s();

                    case 18:
                      if ((_step6 = _iterator6.n()).done) {
                        _context13.next = 27;
                        break;
                      }

                      _e22 = _step6.value;
                      _context13.t1 = H(_e22.symbol);

                      if (!_context13.t1) {
                        _context13.next = 25;
                        break;
                      }

                      _context13.next = 24;
                      return this._convertSvgToPictureMarkerSymbolJson(_e22.symbol);

                    case 24:
                      _e22.symbol = _context13.sent;

                    case 25:
                      _context13.next = 18;
                      break;

                    case 27:
                      _context13.next = 32;
                      break;

                    case 29:
                      _context13.prev = 29;
                      _context13.t2 = _context13["catch"](16);

                      _iterator6.e(_context13.t2);

                    case 32:
                      _context13.prev = 32;

                      _iterator6.f();

                      return _context13.finish(32);

                    case 35:
                    case "end":
                      return _context13.stop();
                  }
                }
              }, _callee13, this, [[16, 29, 32, 35]]);
            }));

            function _convertSvgRenderer(_x24) {
              return _convertSvgRenderer2.apply(this, arguments);
            }

            return _convertSvgRenderer;
          }()
        }, {
          key: "_getGraphics",
          value: function _getGraphics(e) {
            return e.queryFeatures(Q).then(function (e) {
              return e.features;
            });
          }
        }, {
          key: "_getPrintDefinition",
          value: function () {
            var _getPrintDefinition2 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee14(e, t) {
              var r, i, a, s;
              return regeneratorRuntime.wrap(function _callee14$(_context14) {
                while (1) {
                  switch (_context14.prev = _context14.next) {
                    case 0:
                      r = e.view;
                      i = r.spatialReference;
                      _context14.next = 4;
                      return this._createOperationalLayers(r, t);

                    case 4:
                      _context14.t0 = _context14.sent;
                      a = {
                        operationalLayers: _context14.t0
                      };
                      s = this._ssExtent || e.extent || r.extent;
                      return _context14.abrupt("return", (i && i.isWrappable && (s = s.clone()._normalize(!0), i = s.spatialReference), a.mapOptions = {
                        extent: s && s.toJSON(),
                        spatialReference: i && i.toJSON(),
                        showAttribution: t.attributionVisible
                      }, this._ssExtent = null, r.background && (a.background = r.background.toJSON()), r.rotation && (a.mapOptions.rotation = -r.rotation), t.scalePreserved && (a.mapOptions.scale = t.outScale || r.scale), a));

                    case 8:
                    case "end":
                      return _context14.stop();
                  }
                }
              }, _callee14, this);
            }));

            function _getPrintDefinition(_x25, _x26) {
              return _getPrintDefinition2.apply(this, arguments);
            }

            return _getPrintDefinition;
          }()
        }, {
          key: "_getGpPrintParams",
          value: function () {
            var _getGpPrintParams2 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee15(e) {
              var _this5 = this;

              var r, i, a, n, _e23, t, o, l, _e24, _t13, c, u, _e25, _t14, _r6, _i7, y;

              return regeneratorRuntime.wrap(function _callee15$(_context15) {
                while (1) {
                  switch (_context15.prev = _context15.next) {
                    case 0:
                      r = e.template || new _support_PrintTemplate_js__WEBPACK_IMPORTED_MODULE_24__["default"]();
                      null == r.showLabels && (r.showLabels = !0);
                      i = r.exportOptions;
                      n = Object(_support_layoutTemplate_js__WEBPACK_IMPORTED_MODULE_22__["toJSON"])(r.layout);

                      if (i) {
                        if (a = {
                          dpi: i.dpi
                        }, "map_only" === n.toLowerCase() || "" === n) {
                          _e23 = i.width, t = i.height;
                          a.outputSize = [_e23, t];
                        }
                      }

                      o = r.layoutOptions;

                      if (o) {
                        "Miles" === o.scalebarUnit || "Kilometers" === o.scalebarUnit ? (_e24 = "Kilometers", _t13 = "Miles") : "Meters" !== o.scalebarUnit && "Feet" !== o.scalebarUnit || (_e24 = "Meters", _t13 = "Feet"), l = {
                          titleText: o.titleText,
                          authorText: o.authorText,
                          copyrightText: o.copyrightText,
                          customTextElements: o.customTextElements,
                          scaleBarOptions: {
                            metricUnit: B.toJSON(_e24),
                            metricLabel: q[_e24],
                            nonMetricUnit: B.toJSON(_t13),
                            nonMetricLabel: q[_t13]
                          }
                        };
                      }

                      c = null;
                      o && o.legendLayers && (c = o.legendLayers.map(function (e) {
                        _this5._legendLayerNameMap[e.layerId] = e.title;
                        var t = {
                          id: e.layerId
                        };
                        return e.subLayerIds && (t.subLayerIds = e.subLayerIds), t;
                      }));
                      _context15.next = 11;
                      return this._getPrintDefinition(e, r);

                    case 11:
                      u = _context15.sent;

                      if (u.operationalLayers) {
                        _e25 = new RegExp("[\\u4E00-\\u9FFF\\u0E00-\\u0E7F\\u0900-\\u097F\\u3040-\\u309F\\u30A0-\\u30FF\\u31F0-\\u31FF]"), _t14 = /[\u0600-\u06FF]/, _r6 = function _r6(r) {
                          var i = r.text,
                              a = r.font,
                              s = a && a.family && a.family.toLowerCase();
                          i && a && ("arial" === s || "arial unicode ms" === s) && (a.family = _e25.test(i) ? "Arial Unicode MS" : "Arial", "normal" !== a.style && _t14.test(i) && (a.family = "Arial Unicode MS"));
                        }, _i7 = function _i7() {
                          throw new _core_Error_js__WEBPACK_IMPORTED_MODULE_8__["default"]("print-task:cim-symbol-unsupported", "CIMSymbol is not supported by a print service published from ArcMap");
                        };
                        u.operationalLayers.forEach(function (e) {
                          var t, a, s;
                          null != (t = e.featureCollection) && t.layers ? e.featureCollection.layers.forEach(function (e) {
                            var t, a, s, n;

                            if (null != (t = e.layerDefinition) && null != (a = t.drawingInfo) && null != (s = a.renderer) && s.symbol) {
                              var _t15 = e.layerDefinition.drawingInfo.renderer;
                              "esriTS" === _t15.symbol.type ? _r6(_t15.symbol) : "CIMSymbolReference" !== _t15.symbol.type || _this5._is11xService || _i7();
                            }

                            null != (n = e.featureSet) && n.features && e.featureSet.features.forEach(function (e) {
                              e.symbol && ("esriTS" === e.symbol.type ? _r6(e.symbol) : "CIMSymbolReference" !== e.symbol.type || _this5._is11xService || _i7());
                            });
                          }) : !_this5._is11xService && null != (a = e.layerDefinition) && null != (s = a.drawingInfo) && s.renderer && JSON.stringify(e.layerDefinition.drawingInfo.renderer).includes('"type":"CIMSymbolReference"') && _i7();
                        });
                      }

                      e.outSpatialReference && (u.mapOptions.spatialReference = e.outSpatialReference.toJSON()), Object(_core_lang_js__WEBPACK_IMPORTED_MODULE_2__["mixin"])(u, {
                        exportOptions: a,
                        layoutOptions: l
                      }), Object(_core_lang_js__WEBPACK_IMPORTED_MODULE_2__["mixin"])(u.layoutOptions, {
                        legendOptions: {
                          operationalLayers: null != c ? c : this._legendLayers.slice()
                        }
                      }), this._legendLayers.length = 0;
                      y = {
                        Web_Map_as_JSON: JSON.stringify(u),
                        Format: Object(_support_fileFormat_js__WEBPACK_IMPORTED_MODULE_21__["toJSON"])(r.format),
                        Layout_Template: n
                      };
                      return _context15.abrupt("return", (e.extraParameters && Object(_core_lang_js__WEBPACK_IMPORTED_MODULE_2__["mixin"])(y, e.extraParameters), y));

                    case 16:
                    case "end":
                      return _context15.stop();
                  }
                }
              }, _callee15, this);
            }));

            function _getGpPrintParams(_x27) {
              return _getGpPrintParams2.apply(this, arguments);
            }

            return _getGpPrintParams;
          }()
        }]);

        return X;
      }(_Task_js__WEBPACK_IMPORTED_MODULE_19__["default"]);

      Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_5__["property"])({
        dependsOn: ["url"]
      })], X.prototype, "_geoprocessor", null), Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_5__["property"])()], X.prototype, "_gpMetadata", void 0), Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_5__["property"])({
        dependsOn: ["_gpMetadata"],
        readOnly: !0
      })], X.prototype, "mode", null), Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_5__["property"])()], X.prototype, "updateDelay", void 0), X = Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_subclass_js__WEBPACK_IMPORTED_MODULE_7__["subclass"])("esri.tasks.PrintTask")], X);
      var Y = X;
      /* harmony default export */

      __webpack_exports__["default"] = Y;
      /***/
    },

    /***/
    "CgPg":
    /*!************************************************************!*\
      !*** ./node_modules/@arcgis/core/tasks/support/JobInfo.js ***!
      \************************************************************/

    /*! exports provided: default */

    /***/
    function CgPg(module, __webpack_exports__, __webpack_require__) {
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


      var _GPMessage_js__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
      /*! ./GPMessage.js */
      "DKHk");
      /*
      All material copyright ESRI, All Rights Reserved, unless otherwise specified.
      See https://js.arcgis.com/4.18/esri/copyright.txt for details.
      */


      var p = new _core_jsonMap_js__WEBPACK_IMPORTED_MODULE_5__["JSONMap"]({
        esriJobCancelled: "job-cancelled",
        esriJobCancelling: "job-cancelling",
        esriJobDeleted: "job-deleted",
        esriJobDeleting: "job-deleting",
        esriJobTimedOut: "job-timed-out",
        esriJobExecuting: "job-executing",
        esriJobFailed: "job-failed",
        esriJobNew: "job-new",
        esriJobSubmitted: "job-submitted",
        esriJobSucceeded: "job-succeeded",
        esriJobWaiting: "job-waiting"
      });

      var c = /*#__PURE__*/function (_core_JSONSupport_js_3) {
        _inherits(c, _core_JSONSupport_js_3);

        var _super4 = _createSuper(c);

        function c(o) {
          var _this6;

          _classCallCheck(this, c);

          _this6 = _super4.call(this, o), _this6.jobId = null, _this6.jobStatus = null, _this6.messages = null;
          return _this6;
        }

        return c;
      }(_core_JSONSupport_js__WEBPACK_IMPORTED_MODULE_10__["JSONSupport"]);

      Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_4__["property"])()], c.prototype, "jobId", void 0), Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_4__["property"])({
        json: {
          read: p.read
        }
      })], c.prototype, "jobStatus", void 0), Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_4__["property"])({
        type: [_GPMessage_js__WEBPACK_IMPORTED_MODULE_11__["default"]]
      })], c.prototype, "messages", void 0), c = Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_subclass_js__WEBPACK_IMPORTED_MODULE_6__["subclass"])("esri.tasks.support.JobInfo")], c);
      var b = c;
      /* harmony default export */

      __webpack_exports__["default"] = b;
      /***/
    },

    /***/
    "DKHk":
    /*!**************************************************************!*\
      !*** ./node_modules/@arcgis/core/tasks/support/GPMessage.js ***!
      \**************************************************************/

    /*! exports provided: default */

    /***/
    function DKHk(module, __webpack_exports__, __webpack_require__) {
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
      /*
      All material copyright ESRI, All Rights Reserved, unless otherwise specified.
      See https://js.arcgis.com/4.18/esri/copyright.txt for details.
      */


      var p = new _core_jsonMap_js__WEBPACK_IMPORTED_MODULE_5__["JSONMap"]({
        esriJobMessageTypeInformative: "informative",
        esriJobMessageTypeProcessDefinition: "process-definition",
        esriJobMessageTypeProcessStart: "process-start",
        esriJobMessageTypeProcessStop: "process-stop",
        esriJobMessageTypeWarning: "warning",
        esriJobMessageTypeError: "error",
        esriJobMessageTypeEmpty: "empty",
        esriJobMessageTypeAbort: "abort"
      });

      var i = /*#__PURE__*/function (_core_JSONSupport_js_4) {
        _inherits(i, _core_JSONSupport_js_4);

        var _super5 = _createSuper(i);

        function i(r) {
          var _this7;

          _classCallCheck(this, i);

          _this7 = _super5.call(this, r), _this7.description = null, _this7.type = null;
          return _this7;
        }

        return i;
      }(_core_JSONSupport_js__WEBPACK_IMPORTED_MODULE_10__["JSONSupport"]);

      Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_4__["property"])({
        type: String,
        json: {
          write: !0
        }
      })], i.prototype, "description", void 0), Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_4__["property"])({
        type: String,
        json: {
          read: p.read,
          write: p.write
        }
      })], i.prototype, "type", void 0), i = Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_subclass_js__WEBPACK_IMPORTED_MODULE_6__["subclass"])("esri.tasks.support.GPMessage")], i);
      var a = i;
      /* harmony default export */

      __webpack_exports__["default"] = a;
      /***/
    },

    /***/
    "EdPA":
    /*!*************************************************************!*\
      !*** ./node_modules/@arcgis/core/tasks/support/DataFile.js ***!
      \*************************************************************/

    /*! exports provided: default */

    /***/
    function EdPA(module, __webpack_exports__, __webpack_require__) {
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


      var e = /*#__PURE__*/function (_core_JSONSupport_js_5) {
        _inherits(e, _core_JSONSupport_js_5);

        var _super6 = _createSuper(e);

        function e(r) {
          var _this8;

          _classCallCheck(this, e);

          _this8 = _super6.call(this, r), _this8.itemId = null, _this8.url = null;
          return _this8;
        }

        return e;
      }(_core_JSONSupport_js__WEBPACK_IMPORTED_MODULE_9__["JSONSupport"]);

      Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_4__["property"])({
        type: String,
        json: {
          read: {
            source: "itemID"
          },
          write: {
            target: "itemID"
          }
        }
      })], e.prototype, "itemId", void 0), Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_4__["property"])({
        type: String,
        json: {
          write: !0
        }
      })], e.prototype, "url", void 0), e = Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_subclass_js__WEBPACK_IMPORTED_MODULE_5__["subclass"])("esri.tasks.support.DataFile")], e);
      var p = e;
      /* harmony default export */

      __webpack_exports__["default"] = p;
      /***/
    },

    /***/
    "LE+W":
    /*!*********************************************************!*\
      !*** ./node_modules/@arcgis/core/tasks/Geoprocessor.js ***!
      \*********************************************************/

    /*! exports provided: default */

    /***/
    function LEW(module, __webpack_exports__, __webpack_require__) {
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


      var _core_compilerUtils_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ../core/compilerUtils.js */
      "bJda");
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


      var _core_promiseUtils_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
      /*! ../core/promiseUtils.js */
      "9MzC");
      /* harmony import */


      var _geometry_SpatialReference_js__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
      /*! ../geometry/SpatialReference.js */
      "WZb1");
      /* harmony import */


      var _geometry_Extent_js__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
      /*! ../geometry/Extent.js */
      "OvF4");
      /* harmony import */


      var _request_js__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
      /*! ../request.js */
      "Lqtk");
      /* harmony import */


      var _geometry_support_normalizeUtils_js__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(
      /*! ../geometry/support/normalizeUtils.js */
      "qNUd");
      /* harmony import */


      var _layers_support_Field_js__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(
      /*! ../layers/support/Field.js */
      "ofM5");
      /* harmony import */


      var _support_FeatureSet_js__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(
      /*! ./support/FeatureSet.js */
      "8prj");
      /* harmony import */


      var _Task_js__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(
      /*! ./Task.js */
      "kglp");
      /* harmony import */


      var _support_GPMessage_js__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(
      /*! ./support/GPMessage.js */
      "DKHk");
      /* harmony import */


      var _layers_support_MapImage_js__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(
      /*! ../layers/support/MapImage.js */
      "/k1A");
      /* harmony import */


      var _support_DataFile_js__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(
      /*! ./support/DataFile.js */
      "EdPA");
      /* harmony import */


      var _support_JobInfo_js__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(
      /*! ./support/JobInfo.js */
      "CgPg");
      /* harmony import */


      var _support_LinearUnit_js__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(
      /*! ./support/LinearUnit.js */
      "Ujsq");
      /* harmony import */


      var _support_ParameterValue_js__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(
      /*! ./support/ParameterValue.js */
      "T1yr");
      /* harmony import */


      var _support_RasterData_js__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(
      /*! ./support/RasterData.js */
      "3AG9");
      /*
      All material copyright ESRI, All Rights Reserved, unless otherwise specified.
      See https://js.arcgis.com/4.18/esri/copyright.txt for details.
      */


      var g = /*#__PURE__*/function (_Task_js__WEBPACK_IMP2) {
        _inherits(g, _Task_js__WEBPACK_IMP2);

        var _super7 = _createSuper(g);

        function g(e) {
          var _this9;

          _classCallCheck(this, g);

          _this9 = _super7.call(this, e), _this9._timers = new Map(), _this9.outSpatialReference = null, _this9.processExtent = null, _this9.processSpatialReference = null, _this9.returnFeatureCollection = !1, _this9.returnM = !1, _this9.returnZ = !1;
          return _this9;
        }

        _createClass(g, [{
          key: "destroy",
          value: function destroy() {
            this._timers.forEach(function (e) {
              clearInterval(e);
            });
          }
        }, {
          key: "cancelJob",
          value: function cancelJob(e, t) {
            var r = this.parsedUrl.path,
                s = _objectSpread(_objectSpread(_objectSpread({}, this.requestOptions), t), {}, {
              query: {
                f: "json"
              }
            });

            this._clearTimer(e);

            return Object(_request_js__WEBPACK_IMPORTED_MODULE_13__["default"])("".concat(r, "/jobs/").concat(e, "/cancel"), s).then(function (e) {
              return _support_JobInfo_js__WEBPACK_IMPORTED_MODULE_21__["default"].fromJSON(e.data);
            });
          }
        }, {
          key: "checkJobStatus",
          value: function checkJobStatus(e, t) {
            var r = this.parsedUrl.path,
                s = _objectSpread(_objectSpread(_objectSpread({}, this.requestOptions), t), {}, {
              query: {
                f: "json"
              }
            });

            return Object(_request_js__WEBPACK_IMPORTED_MODULE_13__["default"])("".concat(r, "/jobs/").concat(e), s).then(function (e) {
              return _support_JobInfo_js__WEBPACK_IMPORTED_MODULE_21__["default"].fromJSON(e.data);
            });
          }
        }, {
          key: "execute",
          value: function execute(e, t) {
            var _this10 = this;

            return this._constructRequest("execute", e, t).then(function (e) {
              var t = e.data.results || [],
                  r = e.data.messages || [];
              return {
                results: t.map(_this10._decode),
                messages: r.map(function (e) {
                  return _support_GPMessage_js__WEBPACK_IMPORTED_MODULE_18__["default"].fromJSON(e);
                })
              };
            });
          }
        }, {
          key: "getResultData",
          value: function getResultData(e, t, r) {
            var _this11 = this;

            var s = this.returnFeatureCollection,
                a = this.returnM,
                o = this.returnZ,
                i = this.outSpatialReference,
                u = this.parsedUrl,
                n = u.path,
                c = {
              returnFeatureCollection: s || void 0,
              returnM: a || void 0,
              returnZ: o || void 0,
              outSR: i,
              returnType: "data",
              f: "json"
            },
                p = this._gpEncode(c, null),
                m = _objectSpread(_objectSpread(_objectSpread({}, this.requestOptions), r), {}, {
              query: p
            });

            return Object(_request_js__WEBPACK_IMPORTED_MODULE_13__["default"])("".concat(n, "/jobs/").concat(e, "/results/").concat(t), m).then(function (e) {
              return _this11._decode(e.data);
            });
          }
        }, {
          key: "getResultImage",
          value: function getResultImage(e, t, r, s) {
            var _this12 = this;

            var a = this.parsedUrl.path,
                o = _objectSpread(_objectSpread({}, r.toJSON()), {}, {
              f: "json"
            }),
                i = this._gpEncode(o),
                u = _objectSpread(_objectSpread(_objectSpread({}, this.requestOptions), s), {}, {
              query: i
            });

            return Object(_request_js__WEBPACK_IMPORTED_MODULE_13__["default"])("".concat(a, "/jobs/").concat(e, "/results/").concat(t), u).then(function (e) {
              return _this12._decode(e.data);
            });
          }
        }, {
          key: "getResultMapImageLayer",
          value: function () {
            var _getResultMapImageLayer = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee16(e) {
              var t, r, s;
              return regeneratorRuntime.wrap(function _callee16$(_context16) {
                while (1) {
                  switch (_context16.prev = _context16.next) {
                    case 0:
                      t = this.parsedUrl.path, r = t.indexOf("/GPServer/"), s = "".concat(t.substring(0, r), "/MapServer/jobs/").concat(e);
                      0;
                      _context16.next = 4;
                      return Promise.all(
                      /*! import() | layers-MapImageLayer-js */
                      [__webpack_require__.e("default~BingMapsLayer-js~BuildingSceneLayer-js~CSVLayer-js~ElevationLayer-js~FeatureLayer-js~GeoRSSL~17f7a7e8"), __webpack_require__.e("default~BuildingSceneLayer-js~CSVLayer-js~FeatureLayer-js~ImageryLayer-js~ImageryTileLayer-js~KMLLay~c6eed8bf"), __webpack_require__.e("default~BuildingSceneLayer-js~CSVLayer-js~FeatureLayer-js~ImageryLayer-js~ImageryTileLayer-js~KMLLay~166cc929"), __webpack_require__.e("default~BuildingSceneLayer-js~CSVLayer-js~FeatureLayer-js~ImageryLayer-js~ImageryTileLayer-js~KMLLay~253c3a50"), __webpack_require__.e("default~BuildingSceneLayer-js~CSVLayer-js~FeatureLayer-js~KMLLayer-js~MapImageLayer-js~MapNotesLayer~dc20c115"), __webpack_require__.e("default~BuildingSceneLayer-js~CSVLayer-js~FeatureLayer-js~ImageryLayer-js~MapImageLayer-js~MapNotesL~ca7a17ec"), __webpack_require__.e("default~BuildingSceneLayer-js~CSVLayer-js~FeatureLayer-js~MapImageLayer-js~MapNotesLayer-js~RouteLay~17087e09"), __webpack_require__.e("default~MapImageLayer-js~TileLayer-js~layers-MapImageLayer-js"), __webpack_require__.e("default~MapImageLayer-js~layers-MapImageLayer-js")]).then(__webpack_require__.bind(null,
                      /*! ../layers/MapImageLayer.js */
                      "U/i9"));

                    case 4:
                      _context16.t0 = _context16.sent["default"];
                      _context16.t1 = {
                        url: s
                      };
                      return _context16.abrupt("return", new _context16.t0(_context16.t1));

                    case 7:
                    case "end":
                      return _context16.stop();
                  }
                }
              }, _callee16, this);
            }));

            function getResultMapImageLayer(_x28) {
              return _getResultMapImageLayer.apply(this, arguments);
            }

            return getResultMapImageLayer;
          }()
        }, {
          key: "submitJob",
          value: function submitJob(e, t) {
            return this._constructRequest("submitJob", e, t).then(function (e) {
              return _support_JobInfo_js__WEBPACK_IMPORTED_MODULE_21__["default"].fromJSON(e.data);
            });
          }
        }, {
          key: "waitForJobCompletion",
          value: function waitForJobCompletion(e) {
            var _this13 = this;

            var r = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
            var _r$interval = r.interval,
                s = _r$interval === void 0 ? 1e3 : _r$interval,
                u = r.signal,
                n = r.statusCallback;
            return Object(_core_promiseUtils_js__WEBPACK_IMPORTED_MODULE_10__["create"])(function (r, a) {
              Object(_core_promiseUtils_js__WEBPACK_IMPORTED_MODULE_10__["onAbort"])(u, function () {
                _this13._clearTimer(e), a(Object(_core_promiseUtils_js__WEBPACK_IMPORTED_MODULE_10__["createAbortError"])());
              }), _this13._clearTimer(e);
              var l = setInterval(function () {
                _this13._timers.has(e) || a(Object(_core_promiseUtils_js__WEBPACK_IMPORTED_MODULE_10__["createAbortError"])()), _this13._getJobStatus(e, _this13.requestOptions).then(function (s) {
                  var o = s.jobStatus;

                  switch (o) {
                    case "job-succeeded":
                      _this13._clearTimer(e), r(s);
                      break;

                    case "job-submitted":
                    case "job-executing":
                    case "job-waiting":
                    case "job-new":
                      n && n(s);
                      break;

                    case "job-cancelled":
                    case "job-cancelling":
                    case "job-deleted":
                    case "job-deleting":
                    case "job-timed-out":
                    case "job-failed":
                      _this13._clearTimer(e), a(s);
                      break;

                    default:
                      Object(_core_compilerUtils_js__WEBPACK_IMPORTED_MODULE_2__["neverReached"])(o);
                  }
                });
              }, s);

              _this13._timers.set(e, l);
            });
          }
        }, {
          key: "_clearTimer",
          value: function _clearTimer(e) {
            this._timers.has(e) && (clearInterval(this._timers.get(e)), this._timers["delete"](e));
          }
        }, {
          key: "_constructRequest",
          value: function _constructRequest(e, t, r) {
            var _this14 = this;

            var s = {},
                a = {},
                o = [];
            return this._collectGeometries(t, o, s), Object(_geometry_support_normalizeUtils_js__WEBPACK_IMPORTED_MODULE_14__["normalizeCentralMeridian"])(o).then(function (o) {
              var i = _this14.outSpatialReference,
                  u = _this14.parsedUrl,
                  n = _this14.processExtent,
                  c = _this14.processSpatialReference,
                  p = _this14.returnFeatureCollection,
                  m = _this14.returnM,
                  h = _this14.returnZ,
                  d = u.path;

              for (var _e26 in s) {
                var _t16 = s[_e26];
                a[_e26] = o.slice(_t16[0], _t16[1]);
              }

              var f = i ? i.wkid || i : null,
                  b = c ? c.wkid || c : null,
                  j = "execute" === e ? {
                returnFeatureCollection: p || void 0,
                returnM: m || void 0,
                returnZ: h || void 0
              } : null,
                  S = _objectSpread(_objectSpread(_objectSpread(_objectSpread({}, n ? {
                context: {
                  extent: n,
                  outSR: f,
                  processSR: b
                }
              } : {
                "env:outSR": f,
                "env:processSR": b
              }), t), j), {}, {
                f: "json"
              }),
                  v = _this14._gpEncode(S, null, a),
                  G = _objectSpread(_objectSpread(_objectSpread({}, _this14.requestOptions), r), {}, {
                query: v
              });

              return Object(_request_js__WEBPACK_IMPORTED_MODULE_13__["default"])("".concat(d, "/").concat(e), G);
            });
          }
        }, {
          key: "_collectGeometries",
          value: function _collectGeometries(e, t, r) {
            for (var s in e) {
              var a = e[s];

              if (a && "object" == typeof a && a instanceof _support_FeatureSet_js__WEBPACK_IMPORTED_MODULE_16__["default"]) {
                var _e27 = a.features;
                r[s] = [t.length, t.length + _e27.length], _e27.forEach(function (e) {
                  t.push(e.geometry);
                });
              }
            }
          }
        }, {
          key: "_decode",
          value: function _decode(e) {
            var t = e.dataType,
                r = _support_ParameterValue_js__WEBPACK_IMPORTED_MODULE_23__["default"].fromJSON(e);

            switch (t) {
              case "GPBoolean":
              case "GPDouble":
              case "GPLong":
              case "GPString":
                return r;

              case "GPDate":
                r.value = new Date(r.value);
                break;

              case "GPDataFile":
                r.value = _support_DataFile_js__WEBPACK_IMPORTED_MODULE_20__["default"].fromJSON(r.value);
                break;

              case "GPLinearUnit":
                r.value = _support_LinearUnit_js__WEBPACK_IMPORTED_MODULE_22__["default"].fromJSON(r.value);
                break;

              case "GPFeatureRecordSetLayer":
              case "GPRecordSet":
                {
                  var _t17 = e.value.url;
                  r.value = _t17 ? _support_DataFile_js__WEBPACK_IMPORTED_MODULE_20__["default"].fromJSON(r.value) : _support_FeatureSet_js__WEBPACK_IMPORTED_MODULE_16__["default"].fromJSON(r.value);
                  break;
                }

              case "GPRasterData":
              case "GPRasterDataLayer":
                {
                  var _t18 = e.value.mapImage;
                  r.value = _t18 ? _layers_support_MapImage_js__WEBPACK_IMPORTED_MODULE_19__["default"].fromJSON(_t18) : _support_RasterData_js__WEBPACK_IMPORTED_MODULE_24__["default"].fromJSON(r.value);
                  break;
                }

              case "GPField":
                r.value = _layers_support_Field_js__WEBPACK_IMPORTED_MODULE_15__["default"].fromJSON(r.value);
                break;

              case "GPMultiValue:GPBoolean":
              case "GPMultiValue:GPDouble":
              case "GPMultiValue:GPLong":
              case "GPMultiValue:GPString":
                return r;

              case "GPMultiValue:GPDate":
                {
                  var _e28 = r.value;
                  r.value = _e28.map(function (e) {
                    return new Date(e);
                  });
                  break;
                }

              case "GPMultiValue:GPDataFile":
                r.value = r.value.map(function (e) {
                  return _support_DataFile_js__WEBPACK_IMPORTED_MODULE_20__["default"].fromJSON(e);
                });
                break;

              case "GPMultiValue:GPLinearUnit":
                r.value = r.value.map(function (e) {
                  return _support_LinearUnit_js__WEBPACK_IMPORTED_MODULE_22__["default"].fromJSON(e);
                });
                break;

              case "GPMultiValue:GPFeatureRecordSetLayer":
              case "GPMultiValue:GPRecordSet":
                r.value = r.value.map(function (e) {
                  return _support_FeatureSet_js__WEBPACK_IMPORTED_MODULE_16__["default"].fromJSON(e);
                });
                break;

              case "GPMultiValue:GPRasterData":
              case "GPMultiValue:GPRasterDataLayer":
                r.value = r.value.map(function (e) {
                  return e ? _layers_support_MapImage_js__WEBPACK_IMPORTED_MODULE_19__["default"].fromJSON(e) : _support_RasterData_js__WEBPACK_IMPORTED_MODULE_24__["default"].fromJSON(r.value);
                });
                break;

              case "GPMultiValue:GPField":
                r.value = r.value.map(function (e) {
                  return _layers_support_Field_js__WEBPACK_IMPORTED_MODULE_15__["default"].fromJSON(e);
                });
            }

            return r;
          }
        }, {
          key: "_gpEncode",
          value: function _gpEncode(e, t, r) {
            var _this15 = this;

            for (var _t19 in e) {
              var _r7 = e[_t19];
              Array.isArray(_r7) ? e[_t19] = JSON.stringify(_r7.map(function (e) {
                return _this15._gpEncode({
                  item: e
                }, !0).item;
              }, this)) : _r7 instanceof Date && (e[_t19] = _r7.getTime());
            }

            return this._encode(e, t, r);
          }
        }, {
          key: "_getJobStatus",
          value: function _getJobStatus(e, t) {
            var r = this.parsedUrl.path,
                s = "".concat(r, "/jobs/").concat(e),
                a = _objectSpread(_objectSpread(_objectSpread({}, this.requestOptions), t), {}, {
              query: {
                f: "json"
              }
            });

            return Object(_request_js__WEBPACK_IMPORTED_MODULE_13__["default"])(s, a).then(function (e) {
              return _support_JobInfo_js__WEBPACK_IMPORTED_MODULE_21__["default"].fromJSON(e.data);
            });
          }
        }]);

        return g;
      }(_Task_js__WEBPACK_IMPORTED_MODULE_17__["default"]);

      Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_5__["property"])({
        type: _geometry_SpatialReference_js__WEBPACK_IMPORTED_MODULE_11__["default"]
      })], g.prototype, "outSpatialReference", void 0), Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_5__["property"])({
        type: _geometry_Extent_js__WEBPACK_IMPORTED_MODULE_12__["default"]
      })], g.prototype, "processExtent", void 0), Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_5__["property"])({
        type: _geometry_SpatialReference_js__WEBPACK_IMPORTED_MODULE_11__["default"]
      })], g.prototype, "processSpatialReference", void 0), Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_5__["property"])({
        nonNullable: !0
      })], g.prototype, "returnFeatureCollection", void 0), Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_5__["property"])({
        nonNullable: !0
      })], g.prototype, "returnM", void 0), Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_5__["property"])({
        nonNullable: !0
      })], g.prototype, "returnZ", void 0), g = Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_subclass_js__WEBPACK_IMPORTED_MODULE_6__["subclass"])("esri/tasks/Geoprocessor")], g);
      var P = g;
      /* harmony default export */

      __webpack_exports__["default"] = P;
      /***/
    },

    /***/
    "Oxsg":
    /*!*******************************************************************!*\
      !*** ./node_modules/@arcgis/core/tasks/support/printTaskUtils.js ***!
      \*******************************************************************/

    /*! exports provided: applyVisualVariables, createMultipointLayer, createPointLayer, createPolygonLayer, createPolylineLayer, getContextBoundingBox, getVisibleLayerViews, isBingMapsLayer, isCSVLayer, isFeatureLayer, isGeoJSONLayer, isGraphicsLayer, isGroupLayer, isImageryLayer, isKMLLayer, isMapImageLayer, isMapNotesLayer, isOpenStreetMapLayer, isStreamLayer, isTileLayer, isVectorTileLayer, isWMSLayer, isWMTSLayer, isWebTileLayer */

    /***/
    function Oxsg(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "applyVisualVariables", function () {
        return o;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "createMultipointLayer", function () {
        return a;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "createPointLayer", function () {
        return u;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "createPolygonLayer", function () {
        return l;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "createPolylineLayer", function () {
        return s;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "getContextBoundingBox", function () {
        return y;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "getVisibleLayerViews", function () {
        return f;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "isBingMapsLayer", function () {
        return p;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "isCSVLayer", function () {
        return c;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "isFeatureLayer", function () {
        return m;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "isGeoJSONLayer", function () {
        return g;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "isGraphicsLayer", function () {
        return d;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "isGroupLayer", function () {
        return b;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "isImageryLayer", function () {
        return w;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "isKMLLayer", function () {
        return V;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "isMapImageLayer", function () {
        return T;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "isMapNotesLayer", function () {
        return v;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "isOpenStreetMapLayer", function () {
        return k;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "isStreamLayer", function () {
        return G;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "isTileLayer", function () {
        return S;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "isVectorTileLayer", function () {
        return D;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "isWMSLayer", function () {
        return P;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "isWMTSLayer", function () {
        return I;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "isWebTileLayer", function () {
        return L;
      });
      /* harmony import */


      var _core_screenUtils_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ../../core/screenUtils.js */
      "qRWG");
      /* harmony import */


      var _renderers_visualVariables_support_visualVariableUtils_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ../../renderers/visualVariables/support/visualVariableUtils.js */
      "0pea");
      /*
      All material copyright ESRI, All Rights Reserved, unless otherwise specified.
      See https://js.arcgis.com/4.18/esri/copyright.txt for details.
      */


      function o(o, a) {
        var l = a.graphic,
            u = a.renderer,
            s = a.symbol,
            y = s.type;
        if ("text" === y || "shield-label-symbol" === y || !("visualVariables" in u) || !u.visualVariables) return;
        var f = u.getVisualVariablesForType("size"),
            p = u.getVisualVariablesForType("color"),
            c = u.getVisualVariablesForType("opacity"),
            m = u.getVisualVariablesForType("rotation"),
            g = f && f[0],
            d = p && p[0],
            b = c && c[0],
            h = m && m[0];

        if (g) {
          var t = "simple-marker" === y ? s.style : null,
              n = Object(_renderers_visualVariables_support_visualVariableUtils_js__WEBPACK_IMPORTED_MODULE_1__["getSize"])(g, l, {
            shape: t
          });
          null != n && ("simple-marker" === y ? o.size = Object(_core_screenUtils_js__WEBPACK_IMPORTED_MODULE_0__["px2pt"])(n) : "picture-marker" === y ? (o.width = Object(_core_screenUtils_js__WEBPACK_IMPORTED_MODULE_0__["px2pt"])(n), o.height = Object(_core_screenUtils_js__WEBPACK_IMPORTED_MODULE_0__["px2pt"])(n)) : "simple-line" === y ? o.width = Object(_core_screenUtils_js__WEBPACK_IMPORTED_MODULE_0__["px2pt"])(n) : o.outline && (o.outline.width = Object(_core_screenUtils_js__WEBPACK_IMPORTED_MODULE_0__["px2pt"])(n)));
        }

        if (d) {
          var e = Object(_renderers_visualVariables_support_visualVariableUtils_js__WEBPACK_IMPORTED_MODULE_1__["getColor"])(d, l);
          (e && "simple-marker" === y || "simple-line" === y || "simple-fill" === y) && (o.color = e ? e.toJSON() : void 0);
        }

        if (b) {
          var _e29 = Object(_renderers_visualVariables_support_visualVariableUtils_js__WEBPACK_IMPORTED_MODULE_1__["getOpacity"])(b, l);

          null != _e29 && o.color && (o.color[3] = Math.round(255 * _e29));
        }

        h && (o.angle = -Object(_renderers_visualVariables_support_visualVariableUtils_js__WEBPACK_IMPORTED_MODULE_1__["getRotationAngle"])(u, l));
      }

      function a() {
        return {
          layerDefinition: {
            name: "multipointLayer",
            geometryType: "esriGeometryMultipoint",
            drawingInfo: {
              renderer: null
            }
          },
          featureSet: {
            geometryType: "esriGeometryMultipoint",
            features: []
          }
        };
      }

      function l() {
        return {
          layerDefinition: {
            name: "polygonLayer",
            geometryType: "esriGeometryPolygon",
            drawingInfo: {
              renderer: null
            }
          },
          featureSet: {
            geometryType: "esriGeometryPolygon",
            features: []
          }
        };
      }

      function u() {
        return {
          layerDefinition: {
            name: "pointLayer",
            geometryType: "esriGeometryPoint",
            drawingInfo: {
              renderer: null
            }
          },
          featureSet: {
            geometryType: "esriGeometryPoint",
            features: []
          }
        };
      }

      function s() {
        return {
          layerDefinition: {
            name: "polylineLayer",
            geometryType: "esriGeometryPolyline",
            drawingInfo: {
              renderer: null
            }
          },
          featureSet: {
            geometryType: "esriGeometryPolyline",
            features: []
          }
        };
      }

      function y(e) {
        var r = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 15;
        var t = e.canvas.width,
            n = e.canvas.height,
            i = e.getImageData(0, 0, t, n).data;
        var o, a, l, u, s, y;

        e: for (a = n; a--;) {
          for (o = t; o--;) {
            if (i[4 * (t * a + o) + 3] > r) {
              y = a;
              break e;
            }
          }
        }

        if (!y) return null;

        e: for (o = t; o--;) {
          for (a = y + 1; a--;) {
            if (i[4 * (t * a + o) + 3] > r) {
              s = o;
              break e;
            }
          }
        }

        e: for (o = 0; o <= s; ++o) {
          for (a = y + 1; a--;) {
            if (i[4 * (t * a + o) + 3] > r) {
              l = o;
              break e;
            }
          }
        }

        e: for (a = 0; a <= y; ++a) {
          for (o = l; o <= s; ++o) {
            if (i[4 * (t * a + o) + 3] > r) {
              u = a;
              break e;
            }
          }
        }

        return {
          x: l,
          y: u,
          width: s - l,
          height: y - u
        };
      }

      function f(e, r) {
        var t = e.allLayerViews.items;
        if (r === e.scale) return t.filter(function (e) {
          return !e.suspended;
        });
        var n = new Array();

        var _iterator7 = _createForOfIteratorHelper(t),
            _step7;

        try {
          for (_iterator7.s(); !(_step7 = _iterator7.n()).done;) {
            var _e30 = _step7.value;
            h(_e30.parent) && !n.includes(_e30.parent) || !_e30.visible || r && "isVisibleAtScale" in _e30 && !_e30.isVisibleAtScale(r) || n.push(_e30);
          }
        } catch (err) {
          _iterator7.e(err);
        } finally {
          _iterator7.f();
        }

        return n;
      }

      function p(e) {
        return e && "bing-maps" === e.type;
      }

      function c(e) {
        return e && "csv" === e.type;
      }

      function m(e) {
        return e && "feature" === e.type;
      }

      function g(e) {
        return e && "geojson" === e.type;
      }

      function d(e) {
        return e && "graphics" === e.type;
      }

      function b(e) {
        return e && "group" === e.type;
      }

      function h(e) {
        return e && "esri.views.2d.layers.GroupLayerView2D" === e.declaredClass;
      }

      function w(e) {
        return e && "imagery" === e.type;
      }

      function V(e) {
        return e && "kml" === e.type;
      }

      function T(e) {
        return e && "map-image" === e.type;
      }

      function v(e) {
        return e && "map-notes" === e.type;
      }

      function k(e) {
        return e && "open-street-map" === e.type;
      }

      function G(e) {
        return e && "stream" === e.type;
      }

      function S(e) {
        return e && "tile" === e.type;
      }

      function D(e) {
        return e && "vector-tile" === e.type;
      }

      function L(e) {
        return e && "web-tile" === e.type;
      }

      function P(e) {
        return e && "wms" === e.type;
      }

      function I(e) {
        return e && "wmts" === e.type;
      }
      /***/

    },

    /***/
    "Pq/a":
    /*!***************************************************************!*\
      !*** ./node_modules/@arcgis/core/tasks/support/fileFormat.js ***!
      \***************************************************************/

    /*! exports provided: fromJSON, toJSON */

    /***/
    function PqA(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "fromJSON", function () {
        return n;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "toJSON", function () {
        return g;
      });
      /* harmony import */


      var _core_jsonMap_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ../../core/jsonMap.js */
      "+opI");
      /*
      All material copyright ESRI, All Rights Reserved, unless otherwise specified.
      See https://js.arcgis.com/4.18/esri/copyright.txt for details.
      */


      var p = new _core_jsonMap_js__WEBPACK_IMPORTED_MODULE_0__["JSONMap"]({
        PDF: "pdf",
        PNG32: "png32",
        PNG8: "png8",
        JPG: "jpg",
        GIF: "gif",
        EPS: "eps",
        SVG: "svg",
        SVGZ: "svgz"
      }),
          n = p.fromJSON.bind(p),
          g = p.toJSON.bind(p);
      /***/
    },

    /***/
    "T1yr":
    /*!*******************************************************************!*\
      !*** ./node_modules/@arcgis/core/tasks/support/ParameterValue.js ***!
      \*******************************************************************/

    /*! exports provided: default */

    /***/
    function T1yr(module, __webpack_exports__, __webpack_require__) {
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
      /*
      All material copyright ESRI, All Rights Reserved, unless otherwise specified.
      See https://js.arcgis.com/4.18/esri/copyright.txt for details.
      */


      var u = new _core_jsonMap_js__WEBPACK_IMPORTED_MODULE_5__["JSONMap"]({
        GPBoolean: "boolean",
        GPDataFile: "data-file",
        GPDate: "date",
        GPDouble: "double",
        GPFeatureRecordSetLayer: "feature-record-set-layer",
        GPField: "field",
        GPLinearUnit: "linear-unit",
        GPLong: "long",
        GPRasterData: "raster-data",
        GPRasterDataLayer: "raster-data-layer",
        GPRecordSet: "record-set",
        GPString: "string",
        "GPMultiValue:GPBoolean": "multi-value",
        "GPMultiValue:GPDataFile": "multi-value",
        "GPMultiValue:GPDate": "multi-value",
        "GPMultiValue:GPDouble": "multi-value",
        "GPMultiValue:GPFeatureRecordSetLayer": "multi-value",
        "GPMultiValue:GPField": "multi-value",
        "GPMultiValue:GPLinearUnit": "multi-value",
        "GPMultiValue:GPLong": "multi-value",
        "GPMultiValue:GPRasterData": "multi-value",
        "GPMultiValue:GPRasterDataLayer": "multi-value",
        "GPMultiValue:GPRecordSet": "multi-value",
        "GPMultiValue:GPString": "multi-value"
      });

      var o = /*#__PURE__*/function (_core_JSONSupport_js_6) {
        _inherits(o, _core_JSONSupport_js_6);

        var _super8 = _createSuper(o);

        function o(e) {
          var _this16;

          _classCallCheck(this, o);

          _this16 = _super8.call(this, e), _this16.dataType = null, _this16.value = null;
          return _this16;
        }

        return o;
      }(_core_JSONSupport_js__WEBPACK_IMPORTED_MODULE_10__["JSONSupport"]);

      Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_4__["property"])({
        json: {
          read: u.read,
          write: u.write
        }
      })], o.prototype, "dataType", void 0), Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_4__["property"])()], o.prototype, "value", void 0), o = Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_subclass_js__WEBPACK_IMPORTED_MODULE_6__["subclass"])("esri.tasks.support.ParameterValue")], o);
      var i = o;
      /* harmony default export */

      __webpack_exports__["default"] = i;
      /***/
    },

    /***/
    "Ujsq":
    /*!***************************************************************!*\
      !*** ./node_modules/@arcgis/core/tasks/support/LinearUnit.js ***!
      \***************************************************************/

    /*! exports provided: default */

    /***/
    function Ujsq(module, __webpack_exports__, __webpack_require__) {
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
      /*
      All material copyright ESRI, All Rights Reserved, unless otherwise specified.
      See https://js.arcgis.com/4.18/esri/copyright.txt for details.
      */


      var i = new _core_jsonMap_js__WEBPACK_IMPORTED_MODULE_5__["JSONMap"]({
        esriMeters: "meters",
        esriFeet: "feet",
        esriKilometers: "kilometers",
        esriMiles: "miles",
        esriNauticalMiles: "nautical-miles",
        esriYards: "yards"
      }, {
        ignoreUnknown: !1
      });

      var p = /*#__PURE__*/function (_core_JSONSupport_js_7) {
        _inherits(p, _core_JSONSupport_js_7);

        var _super9 = _createSuper(p);

        function p(r) {
          var _this17;

          _classCallCheck(this, p);

          _this17 = _super9.call(this, r), _this17.distance = 0, _this17.units = null;
          return _this17;
        }

        return p;
      }(_core_JSONSupport_js__WEBPACK_IMPORTED_MODULE_10__["JSONSupport"]);

      Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_4__["property"])({
        json: {
          write: !0
        }
      })], p.prototype, "distance", void 0), Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_4__["property"])({
        json: {
          read: i.read,
          write: i.write
        }
      })], p.prototype, "units", void 0), p = Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_subclass_js__WEBPACK_IMPORTED_MODULE_6__["subclass"])("esri/tasks/support/LinearUnit")], p);
      var c = p;
      /* harmony default export */

      __webpack_exports__["default"] = c;
      /***/
    },

    /***/
    "Vd7i":
    /*!*******************************************************************!*\
      !*** ./node_modules/@arcgis/core/tasks/support/layoutTemplate.js ***!
      \*******************************************************************/

    /*! exports provided: fromJSON, toJSON */

    /***/
    function Vd7i(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "fromJSON", function () {
        return r;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "toJSON", function () {
        return o;
      });
      /* harmony import */


      var _core_jsonMap_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ../../core/jsonMap.js */
      "+opI");
      /*
      All material copyright ESRI, All Rights Reserved, unless otherwise specified.
      See https://js.arcgis.com/4.18/esri/copyright.txt for details.
      */


      var t = new _core_jsonMap_js__WEBPACK_IMPORTED_MODULE_0__["JSONMap"]({
        MAP_ONLY: "map-only",
        "A3 Landscape": "a3-landscape",
        "A3 Portrait": "a3-portrait",
        "A4 Landscape": "a4-landscape",
        "A4 Portrait": "a4-portrait",
        "Letter ANSI A Landscape": "letter-ansi-a-landscape",
        "Letter ANSI A Portrait": "letter-ansi-a-portrait",
        "Tabloid ANSI B Landscape": "tabloid-ansi-b-landscape",
        "Tabloid ANSI B Portrait": "tabloid-ansi-b-portrait"
      }),
          r = t.fromJSON.bind(t),
          o = t.toJSON.bind(t);
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
    },

    /***/
    "yvFI":
    /*!******************************************************************!*\
      !*** ./node_modules/@arcgis/core/tasks/support/PrintTemplate.js ***!
      \******************************************************************/

    /*! exports provided: default */

    /***/
    function yvFI(module, __webpack_exports__, __webpack_require__) {
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


      var _core_deprecate_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ../../core/deprecate.js */
      "4gt3");
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


      var _core_Accessor_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
      /*! ../../core/Accessor.js */
      "/CmD");
      /*
      All material copyright ESRI, All Rights Reserved, unless otherwise specified.
      See https://js.arcgis.com/4.18/esri/copyright.txt for details.
      */


      var i = _core_Logger_js__WEBPACK_IMPORTED_MODULE_2__["default"].getLogger("esri.tasks.support.PrintTemplate");

      function a() {
        Object(_core_deprecate_js__WEBPACK_IMPORTED_MODULE_5__["deprecatedProperty"])(i, "preserveScale", {
          replacement: "scalePreserved",
          version: "4.16"
        });
      }

      var c = /*#__PURE__*/function (_core_Accessor_js__WE) {
        _inherits(c, _core_Accessor_js__WE);

        var _super10 = _createSuper(c);

        function c(e) {
          var _this18;

          _classCallCheck(this, c);

          _this18 = _super10.call(this, e), _this18.attributionVisible = !0, _this18.exportOptions = {
            width: 800,
            height: 1100,
            dpi: 96
          }, _this18.forceFeatureAttributes = !1, _this18.format = "png32", _this18.label = null, _this18.layout = "map-only", _this18.layoutOptions = null, _this18.outScale = 0, _this18.scalePreserved = !0, _this18.showLabels = !0;
          return _this18;
        }

        _createClass(c, [{
          key: "preserveScale",
          get: function get() {
            return a(), this.scalePreserved;
          },
          set: function set(e) {
            a(), this.scalePreserved = e;
          }
        }]);

        return c;
      }(_core_Accessor_js__WEBPACK_IMPORTED_MODULE_10__["default"]);

      Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_4__["property"])()], c.prototype, "attributionVisible", void 0), Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_4__["property"])()], c.prototype, "exportOptions", void 0), Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_4__["property"])()], c.prototype, "forceFeatureAttributes", void 0), Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_4__["property"])()], c.prototype, "format", void 0), Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_4__["property"])()], c.prototype, "label", void 0), Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_4__["property"])()], c.prototype, "layout", void 0), Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_4__["property"])()], c.prototype, "layoutOptions", void 0), Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_4__["property"])()], c.prototype, "outScale", void 0), Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_4__["property"])({
        dependsOn: ["scalePreserved"]
      })], c.prototype, "preserveScale", null), Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_4__["property"])()], c.prototype, "scalePreserved", void 0), Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_4__["property"])()], c.prototype, "showLabels", void 0), c = Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_subclass_js__WEBPACK_IMPORTED_MODULE_6__["subclass"])("esri.tasks.support.PrintTemplate")], c);
      var l = c;
      /* harmony default export */

      __webpack_exports__["default"] = l;
      /***/
    }
  }]);
})();
//# sourceMappingURL=tasks-PrintTask-js-es5.js.map