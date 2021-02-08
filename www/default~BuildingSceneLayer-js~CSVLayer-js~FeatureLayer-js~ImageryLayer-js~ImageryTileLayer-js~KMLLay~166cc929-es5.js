(function () {
  function _createForOfIteratorHelper(o, allowArrayLike) { var it; if (typeof Symbol === "undefined" || o[Symbol.iterator] == null) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e2) { throw _e2; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = o[Symbol.iterator](); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e3) { didErr = true; err = _e3; }, f: function f() { try { if (!normalCompletion && it["return"] != null) it["return"](); } finally { if (didErr) throw err; } } }; }

  function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

  function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

  function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }

  function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

  function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

  function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && Symbol.iterator in Object(iter)) return Array.from(iter); }

  function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }

  function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

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

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["default~BuildingSceneLayer-js~CSVLayer-js~FeatureLayer-js~ImageryLayer-js~ImageryTileLayer-js~KMLLay~166cc929"], {
    /***/
    "+EpQ":
    /*!********************************************************************************!*\
      !*** ./node_modules/@arcgis/core/renderers/visualVariables/OpacityVariable.js ***!
      \********************************************************************************/

    /*! exports provided: default */

    /***/
    function EpQ(module, __webpack_exports__, __webpack_require__) {
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


      var _VisualVariable_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! ./VisualVariable.js */
      "XdUx");
      /* harmony import */


      var _support_OpacityStop_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
      /*! ./support/OpacityStop.js */
      "UIrR");
      /*
      All material copyright ESRI, All Rights Reserved, unless otherwise specified.
      See https://js.arcgis.com/4.18/esri/copyright.txt for details.
      */


      var _i;

      var p = _i = /*#__PURE__*/function (_VisualVariable_js__W) {
        _inherits(i, _VisualVariable_js__W);

        var _super = _createSuper(i);

        function i(t) {
          var _this;

          _classCallCheck(this, i);

          _this = _super.call(this, t), _this.type = "opacity", _this.normalizationField = null;
          return _this;
        }

        _createClass(i, [{
          key: "cache",
          get: function get() {
            return {
              ipData: this._interpolateData(),
              hasExpression: !!this.valueExpression,
              compiledFunc: null
            };
          }
        }, {
          key: "stops",
          set: function set(t) {
            t && Array.isArray(t) && (t = t.filter(function (t) {
              return !!t;
            })).sort(function (t, s) {
              return t.value - s.value;
            }), this._set("stops", t);
          }
        }, {
          key: "clone",
          value: function clone() {
            return new _i({
              field: this.field,
              normalizationField: this.normalizationField,
              valueExpression: this.valueExpression,
              valueExpressionTitle: this.valueExpressionTitle,
              stops: this.stops && this.stops.map(function (t) {
                return t.clone();
              }),
              legendOptions: this.legendOptions && this.legendOptions.clone()
            });
          }
        }, {
          key: "getAttributeHash",
          value: function getAttributeHash() {
            return "".concat(_get(_getPrototypeOf(i.prototype), "getAttributeHash", this).call(this), "-").concat(this.normalizationField);
          }
        }, {
          key: "_interpolateData",
          value: function _interpolateData() {
            return this.stops && this.stops.map(function (t) {
              return t.value || 0;
            });
          }
        }]);

        return i;
      }(_VisualVariable_js__WEBPACK_IMPORTED_MODULE_9__["default"]);

      Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_4__["property"])({
        readOnly: !0,
        dependsOn: ["valueExpression", "stops"]
      })], p.prototype, "cache", null), Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_4__["property"])({
        type: ["opacity"],
        json: {
          type: ["transparencyInfo"]
        }
      })], p.prototype, "type", void 0), Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_4__["property"])({
        type: String,
        json: {
          write: !0
        }
      })], p.prototype, "normalizationField", void 0), Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_4__["property"])({
        type: [_support_OpacityStop_js__WEBPACK_IMPORTED_MODULE_10__["default"]],
        json: {
          write: !0
        }
      })], p.prototype, "stops", null), p = _i = Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_subclass_js__WEBPACK_IMPORTED_MODULE_5__["subclass"])("esri.renderers.visualVariables.OpacityVariable")], p);
      var a = p;
      /* harmony default export */

      __webpack_exports__["default"] = a;
      /***/
    },

    /***/
    "7th1":
    /*!************************************************************************************!*\
      !*** ./node_modules/@arcgis/core/renderers/support/AuthoringInfoClassBreakInfo.js ***!
      \************************************************************************************/

    /*! exports provided: default, AuthoringInfoClassBreakInfo */

    /***/
    function th1(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "AuthoringInfoClassBreakInfo", function () {
        return p;
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


      var _t;

      var p = _t = /*#__PURE__*/function (_core_JSONSupport_js_) {
        _inherits(t, _core_JSONSupport_js_);

        var _super2 = _createSuper(t);

        function t(r) {
          var _this2;

          _classCallCheck(this, t);

          _this2 = _super2.call(this, r), _this2.minValue = 0, _this2.maxValue = 0;
          return _this2;
        }

        _createClass(t, [{
          key: "clone",
          value: function clone() {
            return new _t({
              minValue: this.minValue,
              maxValue: this.maxValue
            });
          }
        }]);

        return t;
      }(_core_JSONSupport_js__WEBPACK_IMPORTED_MODULE_9__["JSONSupport"]);

      Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_4__["property"])({
        type: Number,
        json: {
          write: !0
        }
      })], p.prototype, "minValue", void 0), Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_4__["property"])({
        type: Number,
        json: {
          write: !0
        }
      })], p.prototype, "maxValue", void 0), p = _t = Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_subclass_js__WEBPACK_IMPORTED_MODULE_5__["subclass"])("esri.renderer.support.AuthoringInfoClassBreakInfo")], p);
      var i = p;
      /* harmony default export */

      __webpack_exports__["default"] = i;
      /***/
    },

    /***/
    "Gl+1":
    /*!*************************************************************************!*\
      !*** ./node_modules/@arcgis/core/tasks/support/AlgorithmicColorRamp.js ***!
      \*************************************************************************/

    /*! exports provided: default */

    /***/
    function Gl1(module, __webpack_exports__, __webpack_require__) {
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


      var _core_accessorSupport_decorators_enumeration_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ../../core/accessorSupport/decorators/enumeration.js */
      "RI0u");
      /* harmony import */


      var _core_accessorSupport_decorators_subclass_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! ../../core/accessorSupport/decorators/subclass.js */
      "04ZG");
      /* harmony import */


      var _core_urlUtils_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! ../../core/urlUtils.js */
      "4EHJ");
      /* harmony import */


      var _core_uuid_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! ../../core/uuid.js */
      "ju1D");
      /* harmony import */


      var _portal_support_resourceExtension_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
      /*! ../../portal/support/resourceExtension.js */
      "9AIY");
      /* harmony import */


      var _Color_js__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
      /*! ../../Color.js */
      "nvBr");
      /* harmony import */


      var _ColorRamp_js__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
      /*! ./ColorRamp.js */
      "gmIG");
      /*
      All material copyright ESRI, All Rights Reserved, unless otherwise specified.
      See https://js.arcgis.com/4.18/esri/copyright.txt for details.
      */


      var _m;

      var c = _m = /*#__PURE__*/function (_ColorRamp_js__WEBPAC) {
        _inherits(m, _ColorRamp_js__WEBPAC);

        var _super3 = _createSuper(m);

        function m(o) {
          var _this3;

          _classCallCheck(this, m);

          _this3 = _super3.call(this, o), _this3.algorithm = null, _this3.fromColor = null, _this3.toColor = null, _this3.type = "algorithmic";
          return _this3;
        }

        _createClass(m, [{
          key: "clone",
          value: function clone() {
            return new _m({
              fromColor: Object(_core_lang_js__WEBPACK_IMPORTED_MODULE_2__["clone"])(this.fromColor),
              toColor: Object(_core_lang_js__WEBPACK_IMPORTED_MODULE_2__["clone"])(this.toColor),
              algorithm: this.algorithm
            });
          }
        }]);

        return m;
      }(_ColorRamp_js__WEBPACK_IMPORTED_MODULE_12__["default"]);

      Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_enumeration_js__WEBPACK_IMPORTED_MODULE_6__["enumeration"])({
        esriCIELabAlgorithm: "cie-lab",
        esriHSVAlgorithm: "hsv",
        esriLabLChAlgorithm: "lab-lch"
      })], c.prototype, "algorithm", void 0), Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_5__["property"])({
        type: _Color_js__WEBPACK_IMPORTED_MODULE_11__["default"],
        json: {
          type: [_core_accessorSupport_ensureType_js__WEBPACK_IMPORTED_MODULE_4__["Integer"]],
          write: !0
        }
      })], c.prototype, "fromColor", void 0), Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_5__["property"])({
        type: _Color_js__WEBPACK_IMPORTED_MODULE_11__["default"],
        json: {
          type: [_core_accessorSupport_ensureType_js__WEBPACK_IMPORTED_MODULE_4__["Integer"]],
          write: !0
        }
      })], c.prototype, "toColor", void 0), Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_5__["property"])({
        type: ["algorithmic"]
      })], c.prototype, "type", void 0), c = _m = Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_subclass_js__WEBPACK_IMPORTED_MODULE_7__["subclass"])("esri.tasks.support.AlgorithmicColorRamp")], c);
      var a = c;
      /* harmony default export */

      __webpack_exports__["default"] = a;
      /***/
    },

    /***/
    "P2CQ":
    /*!**********************************************************************************!*\
      !*** ./node_modules/@arcgis/core/renderers/visualVariables/support/ColorStop.js ***!
      \**********************************************************************************/

    /*! exports provided: default */

    /***/
    function P2CQ(module, __webpack_exports__, __webpack_require__) {
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


      var _core_accessorSupport_decorators_writer_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ../../../core/accessorSupport/decorators/writer.js */
      "Cduq");
      /* harmony import */


      var _core_urlUtils_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! ../../../core/urlUtils.js */
      "4EHJ");
      /* harmony import */


      var _core_uuid_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! ../../../core/uuid.js */
      "ju1D");
      /* harmony import */


      var _portal_support_resourceExtension_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! ../../../portal/support/resourceExtension.js */
      "9AIY");
      /* harmony import */


      var _core_JSONSupport_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
      /*! ../../../core/JSONSupport.js */
      "ag7Y");
      /* harmony import */


      var _Color_js__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
      /*! ../../../Color.js */
      "nvBr");
      /*
      All material copyright ESRI, All Rights Reserved, unless otherwise specified.
      See https://js.arcgis.com/4.18/esri/copyright.txt for details.
      */


      var i;

      var c = i = /*#__PURE__*/function (_core_JSONSupport_js_2) {
        _inherits(_class, _core_JSONSupport_js_2);

        var _super4 = _createSuper(_class);

        function _class(r) {
          var _this4;

          _classCallCheck(this, _class);

          _this4 = _super4.call(this, r), _this4.color = null, _this4.label = null, _this4.value = null;
          return _this4;
        }

        _createClass(_class, [{
          key: "writeValue",
          value: function writeValue(r, o, e) {
            o[e] = null == r ? 0 : r;
          }
        }, {
          key: "clone",
          value: function clone() {
            return new i({
              color: this.color && this.color.clone(),
              label: this.label,
              value: this.value
            });
          }
        }]);

        return _class;
      }(_core_JSONSupport_js__WEBPACK_IMPORTED_MODULE_10__["JSONSupport"]);

      Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_4__["property"])({
        type: _Color_js__WEBPACK_IMPORTED_MODULE_11__["default"],
        json: {
          type: [_core_accessorSupport_ensureType_js__WEBPACK_IMPORTED_MODULE_3__["Integer"]],
          write: !0
        }
      })], c.prototype, "color", void 0), Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_4__["property"])({
        type: String,
        json: {
          write: !0
        }
      })], c.prototype, "label", void 0), Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_4__["property"])({
        type: Number,
        json: {
          write: {
            allowNull: !0
          }
        }
      })], c.prototype, "value", void 0), Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_writer_js__WEBPACK_IMPORTED_MODULE_6__["writer"])("value")], c.prototype, "writeValue", null), c = i = Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_subclass_js__WEBPACK_IMPORTED_MODULE_5__["subclass"])("esri.renderers.visualVariables.support.ColorStop")], c);
      var u = c;
      /* harmony default export */

      __webpack_exports__["default"] = u;
      /***/
    },

    /***/
    "SE0f":
    /*!***************************************************************!*\
      !*** ./node_modules/@arcgis/core/tasks/support/colorRamps.js ***!
      \***************************************************************/

    /*! exports provided: fromJSON, types */

    /***/
    function SE0f(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "fromJSON", function () {
        return p;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "types", function () {
        return m;
      });
      /* harmony import */


      var _ColorRamp_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ./ColorRamp.js */
      "gmIG");
      /* harmony import */


      var _AlgorithmicColorRamp_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./AlgorithmicColorRamp.js */
      "Gl+1");
      /* harmony import */


      var _MultipartColorRamp_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./MultipartColorRamp.js */
      "n9Od");
      /*
      All material copyright ESRI, All Rights Reserved, unless otherwise specified.
      See https://js.arcgis.com/4.18/esri/copyright.txt for details.
      */


      var m = {
        key: "type",
        base: _ColorRamp_js__WEBPACK_IMPORTED_MODULE_0__["default"],
        typeMap: {
          algorithmic: _AlgorithmicColorRamp_js__WEBPACK_IMPORTED_MODULE_1__["default"],
          multipart: _MultipartColorRamp_js__WEBPACK_IMPORTED_MODULE_2__["default"]
        }
      };

      function p(t) {
        return t && t.type ? "algorithmic" === t.type ? _AlgorithmicColorRamp_js__WEBPACK_IMPORTED_MODULE_1__["default"].fromJSON(t) : "multipart" === t.type ? _MultipartColorRamp_js__WEBPACK_IMPORTED_MODULE_2__["default"].fromJSON(t) : null : null;
      }
      /***/

    },

    /***/
    "TzeZ":
    /*!*********************************************************************************!*\
      !*** ./node_modules/@arcgis/core/renderers/visualVariables/RotationVariable.js ***!
      \*********************************************************************************/

    /*! exports provided: default */

    /***/
    function TzeZ(module, __webpack_exports__, __webpack_require__) {
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


      var _core_accessorSupport_decorators_writer_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ../../core/accessorSupport/decorators/writer.js */
      "Cduq");
      /* harmony import */


      var _core_Error_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! ../../core/Error.js */
      "zlDU");
      /* harmony import */


      var _core_urlUtils_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! ../../core/urlUtils.js */
      "4EHJ");
      /* harmony import */


      var _core_uuid_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! ../../core/uuid.js */
      "ju1D");
      /* harmony import */


      var _portal_support_resourceExtension_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
      /*! ../../portal/support/resourceExtension.js */
      "9AIY");
      /* harmony import */


      var _VisualVariable_js__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
      /*! ./VisualVariable.js */
      "XdUx");
      /*
      All material copyright ESRI, All Rights Reserved, unless otherwise specified.
      See https://js.arcgis.com/4.18/esri/copyright.txt for details.
      */


      var _p;

      var n = _p = /*#__PURE__*/function (_VisualVariable_js__W2) {
        _inherits(p, _VisualVariable_js__W2);

        var _super5 = _createSuper(p);

        function p(e) {
          var _this5;

          _classCallCheck(this, p);

          _this5 = _super5.call(this, e), _this5.axis = null, _this5.type = "rotation", _this5.rotationType = "geographic", _this5.valueExpressionTitle = null;
          return _this5;
        }

        _createClass(p, [{
          key: "cache",
          get: function get() {
            return {
              hasExpression: !!this.valueExpression,
              compiledFunc: null
            };
          }
        }, {
          key: "writeValueExpressionTitleWebScene",
          value: function writeValueExpressionTitleWebScene(e, o, r, t) {
            if (t && t.messages) {
              var _e = "visualVariables[".concat(this.index, "]");

              t.messages.push(new _core_Error_js__WEBPACK_IMPORTED_MODULE_7__["default"]("property:unsupported", this.type + "VisualVariable.valueExpressionTitle is not supported in Web Scene. Please remove this property to save the Web Scene.", {
                instance: this,
                propertyName: _e + ".valueExpressionTitle",
                context: t
              }));
            }
          }
        }, {
          key: "clone",
          value: function clone() {
            return new _p({
              axis: this.axis,
              rotationType: this.rotationType,
              field: this.field,
              valueExpression: this.valueExpression,
              valueExpressionTitle: this.valueExpressionTitle,
              legendOptions: this.legendOptions && this.legendOptions.clone()
            });
          }
        }]);

        return p;
      }(_VisualVariable_js__WEBPACK_IMPORTED_MODULE_11__["default"]);

      Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_4__["property"])({
        readOnly: !0,
        dependsOn: ["valueExpression"]
      })], n.prototype, "cache", null), Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_4__["property"])({
        type: ["heading", "tilt", "roll"],
        json: {
          origins: {
            "web-scene": {
              "default": "heading",
              write: !0
            }
          }
        }
      })], n.prototype, "axis", void 0), Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_4__["property"])({
        type: ["rotation"],
        json: {
          type: ["rotationInfo"]
        }
      })], n.prototype, "type", void 0), Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_4__["property"])({
        type: ["geographic", "arithmetic"],
        json: {
          write: !0,
          origins: {
            "web-document": {
              write: !0,
              "default": "geographic"
            }
          }
        }
      })], n.prototype, "rotationType", void 0), Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_4__["property"])({
        type: String,
        json: {
          write: !0
        }
      })], n.prototype, "valueExpressionTitle", void 0), Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_writer_js__WEBPACK_IMPORTED_MODULE_6__["writer"])("web-scene", "valueExpressionTitle")], n.prototype, "writeValueExpressionTitleWebScene", null), n = _p = Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_subclass_js__WEBPACK_IMPORTED_MODULE_5__["subclass"])("esri.renderers.visualVariables.RotationVariable")], n);
      var a = n;
      /* harmony default export */

      __webpack_exports__["default"] = a;
      /***/
    },

    /***/
    "UIrR":
    /*!************************************************************************************!*\
      !*** ./node_modules/@arcgis/core/renderers/visualVariables/support/OpacityStop.js ***!
      \************************************************************************************/

    /*! exports provided: default */

    /***/
    function UIrR(module, __webpack_exports__, __webpack_require__) {
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


      var _core_accessorSupport_decorators_reader_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ../../../core/accessorSupport/decorators/reader.js */
      "r88o");
      /* harmony import */


      var _core_accessorSupport_decorators_subclass_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ../../../core/accessorSupport/decorators/subclass.js */
      "04ZG");
      /* harmony import */


      var _core_accessorSupport_decorators_writer_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! ../../../core/accessorSupport/decorators/writer.js */
      "Cduq");
      /* harmony import */


      var _core_urlUtils_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! ../../../core/urlUtils.js */
      "4EHJ");
      /* harmony import */


      var _core_uuid_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! ../../../core/uuid.js */
      "ju1D");
      /* harmony import */


      var _portal_support_resourceExtension_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
      /*! ../../../portal/support/resourceExtension.js */
      "9AIY");
      /* harmony import */


      var _core_JSONSupport_js__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
      /*! ../../../core/JSONSupport.js */
      "ag7Y");
      /* harmony import */


      var _webdoc_support_opacityUtils_js__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
      /*! ../../../webdoc/support/opacityUtils.js */
      "Qr4e");
      /*
      All material copyright ESRI, All Rights Reserved, unless otherwise specified.
      See https://js.arcgis.com/4.18/esri/copyright.txt for details.
      */


      var _l;

      var u = _l = /*#__PURE__*/function (_core_JSONSupport_js_3) {
        _inherits(l, _core_JSONSupport_js_3);

        var _super6 = _createSuper(l);

        function l(r) {
          var _this6;

          _classCallCheck(this, l);

          _this6 = _super6.call(this, r), _this6.label = null, _this6.opacity = null, _this6.value = null;
          return _this6;
        }

        _createClass(l, [{
          key: "readOpacity",
          value: function readOpacity(r, o) {
            return Object(_webdoc_support_opacityUtils_js__WEBPACK_IMPORTED_MODULE_12__["transparencyToOpacity"])(o.transparency);
          }
        }, {
          key: "writeOpacity",
          value: function writeOpacity(r, o, t) {
            o[t] = Object(_webdoc_support_opacityUtils_js__WEBPACK_IMPORTED_MODULE_12__["opacityToTransparency"])(r);
          }
        }, {
          key: "clone",
          value: function clone() {
            return new _l({
              label: this.label,
              opacity: this.opacity,
              value: this.value
            });
          }
        }]);

        return l;
      }(_core_JSONSupport_js__WEBPACK_IMPORTED_MODULE_11__["JSONSupport"]);

      Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_4__["property"])({
        type: String,
        json: {
          write: !0
        }
      })], u.prototype, "label", void 0), Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_4__["property"])({
        type: Number,
        json: {
          type: _core_accessorSupport_ensureType_js__WEBPACK_IMPORTED_MODULE_3__["Integer"],
          write: {
            target: "transparency"
          }
        }
      })], u.prototype, "opacity", void 0), Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_reader_js__WEBPACK_IMPORTED_MODULE_5__["reader"])("opacity", ["transparency"])], u.prototype, "readOpacity", null), Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_writer_js__WEBPACK_IMPORTED_MODULE_7__["writer"])("opacity")], u.prototype, "writeOpacity", null), Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_4__["property"])({
        type: Number,
        json: {
          write: !0
        }
      })], u.prototype, "value", void 0), u = _l = Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_subclass_js__WEBPACK_IMPORTED_MODULE_6__["subclass"])("esri.renderers.visualVariables.support.OpacityStop")], u);
      var n = u;
      /* harmony default export */

      __webpack_exports__["default"] = n;
      /***/
    },

    /***/
    "Wc+q":
    /*!************************************************************************************!*\
      !*** ./node_modules/@arcgis/core/renderers/support/AuthoringInfoVisualVariable.js ***!
      \************************************************************************************/

    /*! exports provided: default */

    /***/
    function WcQ(module, __webpack_exports__, __webpack_require__) {
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


      var _core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ../../core/accessorSupport/decorators/property.js */
      "WbKI");
      /* harmony import */


      var _core_accessorSupport_decorators_cast_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ../../core/accessorSupport/decorators/cast.js */
      "Gj5k");
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


      var _n;

      var l = new _core_jsonMap_js__WEBPACK_IMPORTED_MODULE_5__["JSONMap"]({
        percentTotal: "percent-of-total",
        ratio: "ratio",
        percent: "percent"
      }),
          p = new _core_jsonMap_js__WEBPACK_IMPORTED_MODULE_5__["JSONMap"]({
        sizeInfo: "size",
        colorInfo: "color",
        transparencyInfo: "opacity",
        rotationInfo: "rotation"
      }),
          a = {
        key: function key(e) {
          return "number" == typeof e ? "number" : "string";
        },
        typeMap: {
          number: Number,
          string: String
        },
        base: null
      },
          u = ["high-to-low", "above-and-below", "centered-on", "extremes"],
          m = _toConsumableArray(new Set(["high-to-low", "above-and-below", "centered-on", "extremes", "90-10", "above", "below", "high-to-low", "above-and-below", "90-10", "above", "below"])),
          y = ["seconds", "minutes", "hours", "days", "months", "years"];

      var d = _n = /*#__PURE__*/function (_core_JSONSupport_js_4) {
        _inherits(n, _core_JSONSupport_js_4);

        var _super7 = _createSuper(n);

        function n(e) {
          var _this7;

          _classCallCheck(this, n);

          _this7 = _super7.call(this, e), _this7.endTime = null, _this7.field = null, _this7.maxSliderValue = null, _this7.minSliderValue = null, _this7.startTime = null, _this7.type = null, _this7.units = null;
          return _this7;
        }

        _createClass(n, [{
          key: "castEndTime",
          value: function castEndTime(e) {
            return "string" == typeof e || "number" == typeof e ? e : null;
          }
        }, {
          key: "castStartTime",
          value: function castStartTime(e) {
            return "string" == typeof e || "number" == typeof e ? e : null;
          }
        }, {
          key: "style",
          get: function get() {
            return "color" === this.type ? this._get("style") : null;
          },
          set: function set(e) {
            this._set("style", e);
          }
        }, {
          key: "theme",
          get: function get() {
            return "color" === this.type || "size" === this.type ? this._get("theme") || "high-to-low" : null;
          },
          set: function set(e) {
            this._set("theme", e);
          }
        }, {
          key: "clone",
          value: function clone() {
            return new _n({
              endTime: this.endTime,
              field: this.field,
              maxSliderValue: this.maxSliderValue,
              minSliderValue: this.minSliderValue,
              startTime: this.startTime,
              style: this.style,
              theme: this.theme,
              type: this.type,
              units: this.units
            });
          }
        }]);

        return n;
      }(_core_JSONSupport_js__WEBPACK_IMPORTED_MODULE_10__["JSONSupport"]);

      Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_3__["property"])({
        types: a,
        json: {
          write: !0
        }
      })], d.prototype, "endTime", void 0), Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_cast_js__WEBPACK_IMPORTED_MODULE_4__["cast"])("endTime")], d.prototype, "castEndTime", null), Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_3__["property"])({
        type: String,
        json: {
          write: !0
        }
      })], d.prototype, "field", void 0), Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_3__["property"])({
        type: Number,
        json: {
          write: !0
        }
      })], d.prototype, "maxSliderValue", void 0), Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_3__["property"])({
        type: Number,
        json: {
          write: !0
        }
      })], d.prototype, "minSliderValue", void 0), Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_3__["property"])({
        types: a,
        json: {
          write: !0
        }
      })], d.prototype, "startTime", void 0), Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_cast_js__WEBPACK_IMPORTED_MODULE_4__["cast"])("startTime")], d.prototype, "castStartTime", null), Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_3__["property"])({
        type: l.apiValues,
        value: null,
        dependsOn: ["type"],
        json: {
          type: l.jsonValues,
          read: l.read,
          write: l.write
        }
      })], d.prototype, "style", null), Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_3__["property"])({
        type: m,
        value: null,
        dependsOn: ["type"],
        json: {
          type: m,
          origins: {
            "web-scene": {
              type: u,
              write: {
                writer: function writer(e, t) {
                  u.indexOf(e) > -1 && (t.theme = e);
                }
              }
            }
          },
          write: !0
        }
      })], d.prototype, "theme", null), Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_3__["property"])({
        type: p.apiValues,
        json: {
          type: p.jsonValues,
          read: p.read,
          write: p.write
        }
      })], d.prototype, "type", void 0), Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_3__["property"])({
        type: y,
        json: {
          type: y,
          write: !0
        }
      })], d.prototype, "units", void 0), d = _n = Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_subclass_js__WEBPACK_IMPORTED_MODULE_6__["subclass"])("esri.renderers.support.AuthoringInfoVisualVariable")], d);
      var c = d;
      /* harmony default export */

      __webpack_exports__["default"] = c;
      /***/
    },

    /***/
    "Z/Yz":
    /*!******************************************************************************!*\
      !*** ./node_modules/@arcgis/core/renderers/visualVariables/ColorVariable.js ***!
      \******************************************************************************/

    /*! exports provided: default */

    /***/
    function ZYz(module, __webpack_exports__, __webpack_require__) {
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


      var _VisualVariable_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! ./VisualVariable.js */
      "XdUx");
      /* harmony import */


      var _support_ColorStop_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
      /*! ./support/ColorStop.js */
      "P2CQ");
      /*
      All material copyright ESRI, All Rights Reserved, unless otherwise specified.
      See https://js.arcgis.com/4.18/esri/copyright.txt for details.
      */


      var i;

      var p = i = /*#__PURE__*/function (_VisualVariable_js__W3) {
        _inherits(_class2, _VisualVariable_js__W3);

        var _super8 = _createSuper(_class2);

        function _class2(s) {
          var _this8;

          _classCallCheck(this, _class2);

          _this8 = _super8.call(this, s), _this8.type = "color", _this8.normalizationField = null;
          return _this8;
        }

        _createClass(_class2, [{
          key: "cache",
          get: function get() {
            return {
              ipData: this._interpolateData(),
              hasExpression: !!this.valueExpression,
              compiledFunc: null
            };
          }
        }, {
          key: "stops",
          set: function set(s) {
            s && Array.isArray(s) && (s = s.filter(function (s) {
              return !!s;
            })).sort(function (s, t) {
              return s.value - t.value;
            }), this._set("stops", s);
          }
        }, {
          key: "clone",
          value: function clone() {
            return new i({
              field: this.field,
              normalizationField: this.normalizationField,
              valueExpression: this.valueExpression,
              valueExpressionTitle: this.valueExpressionTitle,
              stops: this.stops && this.stops.map(function (s) {
                return s.clone();
              }),
              legendOptions: this.legendOptions && this.legendOptions.clone()
            });
          }
        }, {
          key: "getAttributeHash",
          value: function getAttributeHash() {
            return "".concat(_get(_getPrototypeOf(_class2.prototype), "getAttributeHash", this).call(this), "-").concat(this.normalizationField);
          }
        }, {
          key: "_interpolateData",
          value: function _interpolateData() {
            return this.stops && this.stops.map(function (s) {
              return s.value || 0;
            });
          }
        }]);

        return _class2;
      }(_VisualVariable_js__WEBPACK_IMPORTED_MODULE_9__["default"]);

      Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_4__["property"])({
        readOnly: !0,
        dependsOn: ["valueExpression", "stops"]
      })], p.prototype, "cache", null), Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_4__["property"])({
        type: ["color"],
        json: {
          type: ["colorInfo"]
        }
      })], p.prototype, "type", void 0), Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_4__["property"])({
        type: String,
        json: {
          write: !0
        }
      })], p.prototype, "normalizationField", void 0), Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_4__["property"])({
        type: [_support_ColorStop_js__WEBPACK_IMPORTED_MODULE_10__["default"]],
        json: {
          write: !0
        }
      })], p.prototype, "stops", null), p = i = Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_subclass_js__WEBPACK_IMPORTED_MODULE_5__["subclass"])("esri.renderers.visualVariables.ColorVariable")], p);
      var l = p;
      /* harmony default export */

      __webpack_exports__["default"] = l;
      /***/
    },

    /***/
    "ZnuT":
    /*!*********************************************************!*\
      !*** ./node_modules/@arcgis/core/renderers/Renderer.js ***!
      \*********************************************************/

    /*! exports provided: default */

    /***/
    function ZnuT(module, __webpack_exports__, __webpack_require__) {
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


      var _core_jsonMap_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ../core/jsonMap.js */
      "+opI");
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


      var _support_AuthoringInfo_js__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
      /*! ./support/AuthoringInfo.js */
      "c8tJ");
      /*
      All material copyright ESRI, All Rights Reserved, unless otherwise specified.
      See https://js.arcgis.com/4.18/esri/copyright.txt for details.
      */


      var n = new _core_jsonMap_js__WEBPACK_IMPORTED_MODULE_5__["JSONMap"]({
        simple: "simple",
        uniqueValue: "unique-value",
        classBreaks: "class-breaks",
        heatmap: "heatmap",
        dotDensity: "dot-density",
        dictionary: "dictionary"
      }, {
        ignoreUnknown: !0
      });

      var p = /*#__PURE__*/function (_core_JSONSupport_js_5) {
        _inherits(p, _core_JSONSupport_js_5);

        var _super9 = _createSuper(p);

        function p(r) {
          var _this9;

          _classCallCheck(this, p);

          _this9 = _super9.call(this, r), _this9.authoringInfo = null, _this9.type = null;
          return _this9;
        }

        _createClass(p, [{
          key: "getRequiredFields",
          value: function () {
            var _getRequiredFields = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(r) {
              var e;
              return regeneratorRuntime.wrap(function _callee$(_context) {
                while (1) {
                  switch (_context.prev = _context.next) {
                    case 0:
                      if (this.collectRequiredFields) {
                        _context.next = 2;
                        break;
                      }

                      return _context.abrupt("return", []);

                    case 2:
                      e = new Set();
                      _context.next = 5;
                      return this.collectRequiredFields(e, r);

                    case 5:
                      return _context.abrupt("return", Array.from(e).sort());

                    case 6:
                    case "end":
                      return _context.stop();
                  }
                }
              }, _callee, this);
            }));

            function getRequiredFields(_x) {
              return _getRequiredFields.apply(this, arguments);
            }

            return getRequiredFields;
          }()
        }, {
          key: "getSymbol",
          value: function getSymbol(r, e) {}
        }, {
          key: "getSymbolAsync",
          value: function () {
            var _getSymbolAsync = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee2(r, e) {
              return regeneratorRuntime.wrap(function _callee2$(_context2) {
                while (1) {
                  switch (_context2.prev = _context2.next) {
                    case 0:
                    case "end":
                      return _context2.stop();
                  }
                }
              }, _callee2);
            }));

            function getSymbolAsync(_x2, _x3) {
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
          key: "getAttributeHash",
          value: function getAttributeHash() {
            return JSON.stringify(this);
          }
        }, {
          key: "getMeshHash",
          value: function getMeshHash() {
            return JSON.stringify(this);
          }
        }]);

        return p;
      }(_core_JSONSupport_js__WEBPACK_IMPORTED_MODULE_10__["JSONSupport"]);

      Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_4__["property"])({
        type: _support_AuthoringInfo_js__WEBPACK_IMPORTED_MODULE_11__["default"],
        json: {
          write: !0
        }
      })], p.prototype, "authoringInfo", void 0), Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_4__["property"])({
        type: n.apiValues,
        readOnly: !0,
        json: {
          type: n.jsonValues,
          read: !1,
          write: {
            writer: n.write,
            ignoreOrigin: !0
          }
        }
      })], p.prototype, "type", void 0), p = Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_subclass_js__WEBPACK_IMPORTED_MODULE_6__["subclass"])("esri.renderers.Renderer")], p);
      var a = p;
      /* harmony default export */

      __webpack_exports__["default"] = a;
      /***/
    },

    /***/
    "c8tJ":
    /*!**********************************************************************!*\
      !*** ./node_modules/@arcgis/core/renderers/support/AuthoringInfo.js ***!
      \**********************************************************************/

    /*! exports provided: default */

    /***/
    function c8tJ(module, __webpack_exports__, __webpack_require__) {
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


      var _core_jsonMap_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ../../core/jsonMap.js */
      "+opI");
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


      var _core_JSONSupport_js__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
      /*! ../../core/JSONSupport.js */
      "ag7Y");
      /* harmony import */


      var _AuthoringInfoFieldInfo_js__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
      /*! ./AuthoringInfoFieldInfo.js */
      "yexH");
      /* harmony import */


      var _AuthoringInfoVisualVariable_js__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(
      /*! ./AuthoringInfoVisualVariable.js */
      "Wc+q");
      /* harmony import */


      var _tasks_support_colorRamps_js__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(
      /*! ../../tasks/support/colorRamps.js */
      "SE0f");
      /*
      All material copyright ESRI, All Rights Reserved, unless otherwise specified.
      See https://js.arcgis.com/4.18/esri/copyright.txt for details.
      */


      var _c;

      var h = new _core_jsonMap_js__WEBPACK_IMPORTED_MODULE_6__["JSONMap"]({
        esriClassifyDefinedInterval: "defined-interval",
        esriClassifyEqualInterval: "equal-interval",
        esriClassifyManual: "manual",
        esriClassifyNaturalBreaks: "natural-breaks",
        esriClassifyQuantile: "quantile",
        esriClassifyStandardDeviation: "standard-deviation"
      }),
          y = new _core_jsonMap_js__WEBPACK_IMPORTED_MODULE_6__["JSONMap"]({
        classedSize: "class-breaks-size",
        classedColor: "class-breaks-color",
        univariateColorSize: "univariate-color-size",
        relationship: "relationship",
        predominance: "predominance",
        dotDensity: "dot-density"
      }),
          m = ["inches", "feet", "yards", "miles", "nautical-miles", "millimeters", "centimeters", "decimeters", "meters", "kilometers", "decimal-degrees"];

      var v = _c = /*#__PURE__*/function (_core_JSONSupport_js_6) {
        _inherits(c, _core_JSONSupport_js_6);

        var _super10 = _createSuper(c);

        function c(e) {
          var _this10;

          _classCallCheck(this, c);

          _this10 = _super10.call(this, e), _this10.colorRamp = null, _this10.lengthUnit = null, _this10.maxSliderValue = null, _this10.minSliderValue = null, _this10.visualVariables = null;
          return _this10;
        }

        _createClass(c, [{
          key: "classificationMethod",
          get: function get() {
            var e = this._get("classificationMethod"),
                t = this.type;

            return t && "relationship" !== t ? "class-breaks-size" === t || "class-breaks-color" === t ? e || "manual" : null : e;
          },
          set: function set(e) {
            this._set("classificationMethod", e);
          }
        }, {
          key: "readColorRamp",
          value: function readColorRamp(e) {
            if (e) return Object(_tasks_support_colorRamps_js__WEBPACK_IMPORTED_MODULE_15__["fromJSON"])(e);
          }
        }, {
          key: "fields",
          get: function get() {
            return this.type && "predominance" !== this.type ? null : this._get("fields");
          },
          set: function set(e) {
            this._set("fields", e);
          }
        }, {
          key: "field1",
          get: function get() {
            return this.type && "relationship" !== this.type ? null : this._get("field1");
          },
          set: function set(e) {
            this._set("field1", e);
          }
        }, {
          key: "field2",
          get: function get() {
            return this.type && "relationship" !== this.type ? null : this._get("field2");
          },
          set: function set(e) {
            this._set("field2", e);
          }
        }, {
          key: "focus",
          get: function get() {
            return this.type && "relationship" !== this.type ? null : this._get("focus");
          },
          set: function set(e) {
            this._set("focus", e);
          }
        }, {
          key: "numClasses",
          get: function get() {
            return this.type && "relationship" !== this.type ? null : this._get("numClasses");
          },
          set: function set(e) {
            this._set("numClasses", e);
          }
        }, {
          key: "statistics",
          get: function get() {
            return "univariate-color-size" === this.type && "above-and-below" === this.univariateTheme ? this._get("statistics") : null;
          },
          set: function set(e) {
            this._set("statistics", e);
          }
        }, {
          key: "standardDeviationInterval",
          get: function get() {
            var e = this.type;
            return e && "relationship" !== e && "class-breaks-size" !== e && "class-breaks-color" !== e || this.classificationMethod && "standard-deviation" !== this.classificationMethod ? null : this._get("standardDeviationInterval");
          },
          set: function set(e) {
            this._set("standardDeviationInterval", e);
          }
        }, {
          key: "type",
          get: function get() {
            return this._get("type");
          },
          set: function set(e) {
            var t = e;
            "classed-size" === e ? t = "class-breaks-size" : "classed-color" === e && (t = "class-breaks-color"), this._set("type", t);
          }
        }, {
          key: "univariateSymbolStyle",
          get: function get() {
            return "univariate-color-size" === this.type && "above-and-below" === this.univariateTheme ? this._get("univariateSymbolStyle") : null;
          },
          set: function set(e) {
            this._set("univariateSymbolStyle", e);
          }
        }, {
          key: "univariateTheme",
          get: function get() {
            return "univariate-color-size" === this.type ? this._get("univariateTheme") : null;
          },
          set: function set(e) {
            this._set("univariateTheme", e);
          }
        }, {
          key: "clone",
          value: function clone() {
            return new _c({
              classificationMethod: this.classificationMethod,
              colorRamp: Object(_core_lang_js__WEBPACK_IMPORTED_MODULE_2__["clone"])(this.colorRamp),
              fields: this.fields && this.fields.slice(0),
              field1: Object(_core_lang_js__WEBPACK_IMPORTED_MODULE_2__["clone"])(this.field1),
              field2: Object(_core_lang_js__WEBPACK_IMPORTED_MODULE_2__["clone"])(this.field2),
              focus: this.focus,
              numClasses: this.numClasses,
              maxSliderValue: this.maxSliderValue,
              minSliderValue: this.minSliderValue,
              lengthUnit: this.lengthUnit,
              statistics: this.statistics,
              standardDeviationInterval: this.standardDeviationInterval,
              type: this.type,
              visualVariables: this.visualVariables && this.visualVariables.map(function (e) {
                return e.clone();
              }),
              univariateSymbolStyle: this.univariateSymbolStyle,
              univariateTheme: this.univariateTheme
            });
          }
        }]);

        return c;
      }(_core_JSONSupport_js__WEBPACK_IMPORTED_MODULE_12__["JSONSupport"]);

      Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_5__["property"])({
        type: h.apiValues,
        value: null,
        dependsOn: ["type"],
        json: {
          type: h.jsonValues,
          read: h.read,
          write: h.write,
          origins: {
            "web-document": {
              "default": "manual",
              type: h.jsonValues,
              read: h.read,
              write: h.write
            }
          }
        }
      })], v.prototype, "classificationMethod", null), Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_5__["property"])({
        types: _tasks_support_colorRamps_js__WEBPACK_IMPORTED_MODULE_15__["types"],
        json: {
          write: !0
        }
      })], v.prototype, "colorRamp", void 0), Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_reader_js__WEBPACK_IMPORTED_MODULE_7__["reader"])("colorRamp")], v.prototype, "readColorRamp", null), Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_5__["property"])({
        type: [String],
        value: null,
        dependsOn: ["type"],
        json: {
          write: !0
        }
      })], v.prototype, "fields", null), Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_5__["property"])({
        type: _AuthoringInfoFieldInfo_js__WEBPACK_IMPORTED_MODULE_13__["default"],
        value: null,
        dependsOn: ["type"],
        json: {
          write: !0
        }
      })], v.prototype, "field1", null), Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_5__["property"])({
        type: _AuthoringInfoFieldInfo_js__WEBPACK_IMPORTED_MODULE_13__["default"],
        value: null,
        dependsOn: ["type"],
        json: {
          write: !0
        }
      })], v.prototype, "field2", null), Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_5__["property"])({
        type: ["HH", "HL", "LH", "LL"],
        value: null,
        dependsOn: ["type"],
        json: {
          write: !0
        }
      })], v.prototype, "focus", null), Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_5__["property"])({
        type: Number,
        value: null,
        dependsOn: ["type"],
        json: {
          type: _core_accessorSupport_ensureType_js__WEBPACK_IMPORTED_MODULE_4__["Integer"],
          write: !0
        }
      })], v.prototype, "numClasses", null), Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_5__["property"])({
        type: m,
        json: {
          type: m,
          read: !1,
          write: !1,
          origins: {
            "web-scene": {
              read: !0,
              write: !0
            }
          }
        }
      })], v.prototype, "lengthUnit", void 0), Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_5__["property"])({
        type: Number,
        json: {
          write: !0,
          origins: {
            "web-scene": {
              write: !1,
              read: !1
            }
          }
        }
      })], v.prototype, "maxSliderValue", void 0), Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_5__["property"])({
        type: Number,
        json: {
          write: !0,
          origins: {
            "web-scene": {
              write: !1,
              read: !1
            }
          }
        }
      })], v.prototype, "minSliderValue", void 0), Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_5__["property"])({
        type: Object,
        value: null,
        dependsOn: ["type", "univariateTheme"],
        json: {
          write: !0,
          origins: {
            "web-scene": {
              write: !1,
              read: !1
            }
          }
        }
      })], v.prototype, "statistics", null), Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_5__["property"])({
        type: [.25, .33, .5, 1],
        value: null,
        dependsOn: ["classificationMethod", "type"],
        json: {
          type: [.25, .33, .5, 1],
          write: !0
        }
      })], v.prototype, "standardDeviationInterval", null), Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_5__["property"])({
        type: y.apiValues,
        value: null,
        json: {
          type: y.jsonValues,
          read: y.read,
          write: y.write
        }
      })], v.prototype, "type", null), Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_5__["property"])({
        type: [_AuthoringInfoVisualVariable_js__WEBPACK_IMPORTED_MODULE_14__["default"]],
        json: {
          write: !0
        }
      })], v.prototype, "visualVariables", void 0), Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_5__["property"])({
        type: ["caret", "circle-caret", "arrow", "circle-arrow", "plus-minus", "circle-plus-minus", "square", "circle", "triangle", "happy-sad", "thumb", "custom"],
        value: null,
        dependsOn: ["type", "univariateTheme"],
        json: {
          write: !0,
          origins: {
            "web-scene": {
              write: !1
            }
          }
        }
      })], v.prototype, "univariateSymbolStyle", null), Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_5__["property"])({
        type: ["high-to-low", "above-and-below", "above", "below", "90-10"],
        value: null,
        json: {
          write: !0,
          origins: {
            "web-scene": {
              write: !1
            }
          }
        }
      })], v.prototype, "univariateTheme", null), v = _c = Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_subclass_js__WEBPACK_IMPORTED_MODULE_8__["subclass"])("esri.renderers.support.AuthoringInfo")], v);
      var f = v;
      /* harmony default export */

      __webpack_exports__["default"] = f;
      /***/
    },

    /***/
    "gmIG":
    /*!**************************************************************!*\
      !*** ./node_modules/@arcgis/core/tasks/support/ColorRamp.js ***!
      \**************************************************************/

    /*! exports provided: default */

    /***/
    function gmIG(module, __webpack_exports__, __webpack_require__) {
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


      var e = /*#__PURE__*/function (_core_JSONSupport_js_7) {
        _inherits(e, _core_JSONSupport_js_7);

        var _super11 = _createSuper(e);

        function e(r) {
          var _this11;

          _classCallCheck(this, e);

          _this11 = _super11.call(this, r), _this11.type = null;
          return _this11;
        }

        return e;
      }(_core_JSONSupport_js__WEBPACK_IMPORTED_MODULE_9__["JSONSupport"]);

      Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_4__["property"])({
        readOnly: !0,
        json: {
          read: !1,
          write: !0
        }
      })], e.prototype, "type", void 0), e = Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_subclass_js__WEBPACK_IMPORTED_MODULE_5__["subclass"])("esri.tasks.support.ColorRamp")], e);
      var p = e;
      /* harmony default export */

      __webpack_exports__["default"] = p;
      /***/
    },

    /***/
    "n9Od":
    /*!***********************************************************************!*\
      !*** ./node_modules/@arcgis/core/tasks/support/MultipartColorRamp.js ***!
      \***********************************************************************/

    /*! exports provided: default */

    /***/
    function n9Od(module, __webpack_exports__, __webpack_require__) {
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


      var _ColorRamp_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
      /*! ./ColorRamp.js */
      "gmIG");
      /* harmony import */


      var _AlgorithmicColorRamp_js__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
      /*! ./AlgorithmicColorRamp.js */
      "Gl+1");
      /*
      All material copyright ESRI, All Rights Reserved, unless otherwise specified.
      See https://js.arcgis.com/4.18/esri/copyright.txt for details.
      */


      var c;

      var i = c = /*#__PURE__*/function (_ColorRamp_js__WEBPAC2) {
        _inherits(_class3, _ColorRamp_js__WEBPAC2);

        var _super12 = _createSuper(_class3);

        function _class3(o) {
          var _this12;

          _classCallCheck(this, _class3);

          _this12 = _super12.call(this, o), _this12.colorRamps = null, _this12.type = "multipart";
          return _this12;
        }

        _createClass(_class3, [{
          key: "clone",
          value: function clone() {
            return new c({
              colorRamps: Object(_core_lang_js__WEBPACK_IMPORTED_MODULE_2__["clone"])(this.colorRamps)
            });
          }
        }]);

        return _class3;
      }(_ColorRamp_js__WEBPACK_IMPORTED_MODULE_10__["default"]);

      Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_5__["property"])({
        type: [_AlgorithmicColorRamp_js__WEBPACK_IMPORTED_MODULE_11__["default"]],
        json: {
          write: !0
        }
      })], i.prototype, "colorRamps", void 0), Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_5__["property"])({
        type: ["multipart"]
      })], i.prototype, "type", void 0), i = c = Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_subclass_js__WEBPACK_IMPORTED_MODULE_6__["subclass"])("esri.tasks.support.MultipartColorRamp")], i);
      var m = i;
      /* harmony default export */

      __webpack_exports__["default"] = m;
      /***/
    },

    /***/
    "vk02":
    /*!****************************************************************************!*\
      !*** ./node_modules/@arcgis/core/renderers/mixins/VisualVariablesMixin.js ***!
      \****************************************************************************/

    /*! exports provided: VisualVariablesMixin */

    /***/
    function vk02(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "VisualVariablesMixin", function () {
        return m;
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


      var _core_urlUtils_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! ../../core/urlUtils.js */
      "4EHJ");
      /* harmony import */


      var _core_uuid_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! ../../core/uuid.js */
      "ju1D");
      /* harmony import */


      var _portal_support_resourceExtension_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
      /*! ../../portal/support/resourceExtension.js */
      "9AIY");
      /* harmony import */


      var _layers_support_fieldUtils_js__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
      /*! ../../layers/support/fieldUtils.js */
      "wdpY");
      /* harmony import */


      var _visualVariables_VisualVariable_js__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
      /*! ../visualVariables/VisualVariable.js */
      "XdUx");
      /* harmony import */


      var _visualVariables_ColorVariable_js__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
      /*! ../visualVariables/ColorVariable.js */
      "Z/Yz");
      /* harmony import */


      var _visualVariables_OpacityVariable_js__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(
      /*! ../visualVariables/OpacityVariable.js */
      "+EpQ");
      /* harmony import */


      var _visualVariables_RotationVariable_js__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(
      /*! ../visualVariables/RotationVariable.js */
      "TzeZ");
      /* harmony import */


      var _visualVariables_SizeVariable_js__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(
      /*! ../visualVariables/SizeVariable.js */
      "w/y1");
      /* harmony import */


      var _visualVariables_VisualVariableFactory_js__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(
      /*! ../visualVariables/VisualVariableFactory.js */
      "xwYO");
      /*
      All material copyright ESRI, All Rights Reserved, unless otherwise specified.
      See https://js.arcgis.com/4.18/esri/copyright.txt for details.
      */


      var b = {
        base: _visualVariables_VisualVariable_js__WEBPACK_IMPORTED_MODULE_12__["default"],
        key: "type",
        typeMap: {
          opacity: _visualVariables_OpacityVariable_js__WEBPACK_IMPORTED_MODULE_14__["default"],
          color: _visualVariables_ColorVariable_js__WEBPACK_IMPORTED_MODULE_13__["default"],
          rotation: _visualVariables_RotationVariable_js__WEBPACK_IMPORTED_MODULE_15__["default"],
          size: _visualVariables_SizeVariable_js__WEBPACK_IMPORTED_MODULE_16__["default"]
        }
      },
          m = function m(l) {
        var u = /*#__PURE__*/function (_l2) {
          _inherits(u, _l2);

          var _super13 = _createSuper(u);

          function u() {
            var _this13;

            _classCallCheck(this, u);

            _this13 = _super13.apply(this, arguments), _this13._vvFactory = new _visualVariables_VisualVariableFactory_js__WEBPACK_IMPORTED_MODULE_17__["default"]();
            return _this13;
          }

          _createClass(u, [{
            key: "visualVariables",
            set: function set(r) {
              this._vvFactory.visualVariables = r, this._set("visualVariables", this._vvFactory.visualVariables);
            }
          }, {
            key: "readVisualVariables",
            value: function readVisualVariables(r, a, s) {
              return this._vvFactory.readVariables(r, a, s);
            }
          }, {
            key: "writeVisualVariables",
            value: function writeVisualVariables(r, a, s, i) {
              a[s] = this._vvFactory.writeVariables(r, i);
            }
          }, {
            key: "arcadeRequiredForVisualVariables",
            get: function get() {
              if (!this.visualVariables) return !1;

              var _iterator = _createForOfIteratorHelper(this.visualVariables),
                  _step;

              try {
                for (_iterator.s(); !(_step = _iterator.n()).done;) {
                  var r = _step.value;
                  if (r.arcadeRequired) return !0;
                }
              } catch (err) {
                _iterator.e(err);
              } finally {
                _iterator.f();
              }

              return !1;
            }
          }, {
            key: "hasVisualVariables",
            value: function hasVisualVariables(r, a) {
              return r ? !!this.getVisualVariablesForType(r, a) : !!(this.getVisualVariablesForType("size", a) || this.getVisualVariablesForType("color", a) || this.getVisualVariablesForType("opacity", a) || this.getVisualVariablesForType("rotation", a));
            }
          }, {
            key: "getVisualVariablesForType",
            value: function getVisualVariablesForType(r, a) {
              var s = this.visualVariables;
              if (!s) return;
              var i = s.filter(function (s) {
                return s.type === r && ("string" == typeof a ? s.target === a : !1 !== a || !s.target);
              });
              return i && 0 === i.length ? void 0 : i;
            }
          }, {
            key: "collectVVRequiredFields",
            value: function () {
              var _collectVVRequiredFields = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee3(r, a) {
                var s, _iterator2, _step2, _i2;

                return regeneratorRuntime.wrap(function _callee3$(_context3) {
                  while (1) {
                    switch (_context3.prev = _context3.next) {
                      case 0:
                        s = [];
                        this.visualVariables && (s = s.concat(this.visualVariables));
                        _iterator2 = _createForOfIteratorHelper(s);
                        _context3.prev = 3;

                        _iterator2.s();

                      case 5:
                        if ((_step2 = _iterator2.n()).done) {
                          _context3.next = 17;
                          break;
                        }

                        _i2 = _step2.value;
                        _context3.t0 = _i2;

                        if (!_context3.t0) {
                          _context3.next = 15;
                          break;
                        }

                        _i2.field && Object(_layers_support_fieldUtils_js__WEBPACK_IMPORTED_MODULE_11__["collectField"])(r, a, _i2.field);
                        _i2.normalizationField && Object(_layers_support_fieldUtils_js__WEBPACK_IMPORTED_MODULE_11__["collectField"])(r, a, _i2.normalizationField);
                        _context3.t1 = _i2.valueExpression;

                        if (!_context3.t1) {
                          _context3.next = 15;
                          break;
                        }

                        _context3.next = 15;
                        return Object(_layers_support_fieldUtils_js__WEBPACK_IMPORTED_MODULE_11__["collectArcadeFieldNames"])(r, a, _i2.valueExpression);

                      case 15:
                        _context3.next = 5;
                        break;

                      case 17:
                        _context3.next = 22;
                        break;

                      case 19:
                        _context3.prev = 19;
                        _context3.t2 = _context3["catch"](3);

                        _iterator2.e(_context3.t2);

                      case 22:
                        _context3.prev = 22;

                        _iterator2.f();

                        return _context3.finish(22);

                      case 25:
                      case "end":
                        return _context3.stop();
                    }
                  }
                }, _callee3, this, [[3, 19, 22, 25]]);
              }));

              function collectVVRequiredFields(_x4, _x5) {
                return _collectVVRequiredFields.apply(this, arguments);
              }

              return collectVVRequiredFields;
            }()
          }]);

          return u;
        }(l);

        return Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_4__["property"])({
          types: [b],
          value: null,
          json: {
            write: !0
          }
        })], u.prototype, "visualVariables", null), Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_reader_js__WEBPACK_IMPORTED_MODULE_5__["reader"])("visualVariables", ["visualVariables", "rotationType", "rotationExpression"])], u.prototype, "readVisualVariables", null), Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_writer_js__WEBPACK_IMPORTED_MODULE_7__["writer"])("visualVariables")], u.prototype, "writeVisualVariables", null), u = Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_subclass_js__WEBPACK_IMPORTED_MODULE_6__["subclass"])("esri.renderers.mixins.VisualVariablesMixin")], u), u;
      };
      /***/

    },

    /***/
    "xwYO":
    /*!**************************************************************************************!*\
      !*** ./node_modules/@arcgis/core/renderers/visualVariables/VisualVariableFactory.js ***!
      \**************************************************************************************/

    /*! exports provided: default */

    /***/
    function xwYO(module, __webpack_exports__, __webpack_require__) {
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


      var _core_Warning_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ../../core/Warning.js */
      "ACjl");
      /* harmony import */


      var _core_accessorSupport_decorators_subclass_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! ../../core/accessorSupport/decorators/subclass.js */
      "04ZG");
      /* harmony import */


      var _core_urlUtils_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! ../../core/urlUtils.js */
      "4EHJ");
      /* harmony import */


      var _core_uuid_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! ../../core/uuid.js */
      "ju1D");
      /* harmony import */


      var _portal_support_resourceExtension_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
      /*! ../../portal/support/resourceExtension.js */
      "9AIY");
      /* harmony import */


      var _core_Accessor_js__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
      /*! ../../core/Accessor.js */
      "/CmD");
      /* harmony import */


      var _ColorVariable_js__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
      /*! ./ColorVariable.js */
      "Z/Yz");
      /* harmony import */


      var _OpacityVariable_js__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
      /*! ./OpacityVariable.js */
      "+EpQ");
      /* harmony import */


      var _RotationVariable_js__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(
      /*! ./RotationVariable.js */
      "TzeZ");
      /* harmony import */


      var _SizeVariable_js__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(
      /*! ./SizeVariable.js */
      "w/y1");
      /*
      All material copyright ESRI, All Rights Reserved, unless otherwise specified.
      See https://js.arcgis.com/4.18/esri/copyright.txt for details.
      */


      var u = _core_Logger_js__WEBPACK_IMPORTED_MODULE_2__["default"].getLogger("esri.renderers.visualVariables.VisualVariableFactory"),
          b = {
        color: _ColorVariable_js__WEBPACK_IMPORTED_MODULE_12__["default"],
        size: _SizeVariable_js__WEBPACK_IMPORTED_MODULE_15__["default"],
        opacity: _OpacityVariable_js__WEBPACK_IMPORTED_MODULE_13__["default"],
        rotation: _RotationVariable_js__WEBPACK_IMPORTED_MODULE_14__["default"]
      },
          V = new _core_jsonMap_js__WEBPACK_IMPORTED_MODULE_5__["JSONMap"]({
        colorInfo: "color",
        transparencyInfo: "opacity",
        rotationInfo: "rotation",
        sizeInfo: "size"
      }),
          m = /^\[([^\]]+)\]$/i;

      var h = /*#__PURE__*/function (_core_Accessor_js__WE) {
        _inherits(h, _core_Accessor_js__WE);

        var _super14 = _createSuper(h);

        function h() {
          var _this14;

          _classCallCheck(this, h);

          _this14 = _super14.apply(this, arguments), _this14.colorVariables = null, _this14.opacityVariables = null, _this14.rotationVariables = null, _this14.sizeVariables = null;
          return _this14;
        }

        _createClass(h, [{
          key: "visualVariables",
          set: function set(r) {
            if (this._resetVariables(), (r = r && r.filter(function (r) {
              return !!r;
            })) && r.length) {
              var _iterator3 = _createForOfIteratorHelper(r),
                  _step3;

              try {
                for (_iterator3.s(); !(_step3 = _iterator3.n()).done;) {
                  var _s = _step3.value;

                  switch (_s.type) {
                    case "color":
                      this.colorVariables.push(_s);
                      break;

                    case "opacity":
                      this.opacityVariables.push(_s);
                      break;

                    case "rotation":
                      this.rotationVariables.push(_s);
                      break;

                    case "size":
                      this.sizeVariables.push(_s);
                  }
                }
              } catch (err) {
                _iterator3.e(err);
              } finally {
                _iterator3.f();
              }

              if (this.sizeVariables.length) {
                this.sizeVariables.some(function (r) {
                  return !!r.target;
                }) && r.sort(function (r, s) {
                  var e = null;
                  return e = r.target === s.target ? 0 : r.target ? 1 : -1, e;
                });
              }

              for (var s = 0; s < r.length; s++) {
                r[s].index = s;
              }

              this._set("visualVariables", r);
            } else this._set("visualVariables", r);
          }
        }, {
          key: "readVariables",
          value: function readVariables(r, s, e) {
            var o = s.rotationExpression,
                a = s.rotationType,
                i = o && o.match(m),
                l = i && i[1];
            if (l && (r || (r = []), r.push({
              type: "rotationInfo",
              rotationType: a,
              field: l
            })), r) return r.map(function (r) {
              var s = V.read(r.type),
                  o = b[s];
              o || (u.warn("Unknown variable type: ".concat(s)), e && e.messages && e.messages.push(new _core_Warning_js__WEBPACK_IMPORTED_MODULE_6__["default"]("visual-variable:unsupported", "visualVariable of type '".concat(s, "' is not supported"), {
                definition: r,
                context: e
              })));
              var a = new o();
              return a.read(r, e), a;
            });
          }
        }, {
          key: "writeVariables",
          value: function writeVariables(r, s) {
            var e = [];

            var _iterator4 = _createForOfIteratorHelper(r),
                _step4;

            try {
              for (_iterator4.s(); !(_step4 = _iterator4.n()).done;) {
                var o = _step4.value;

                var _r = o.toJSON(s);

                _r && e.push(_r);
              }
            } catch (err) {
              _iterator4.e(err);
            } finally {
              _iterator4.f();
            }

            return e;
          }
        }, {
          key: "_resetVariables",
          value: function _resetVariables() {
            this.colorVariables = [], this.opacityVariables = [], this.rotationVariables = [], this.sizeVariables = [];
          }
        }]);

        return h;
      }(_core_Accessor_js__WEBPACK_IMPORTED_MODULE_11__["default"]);

      Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_4__["property"])()], h.prototype, "visualVariables", null), h = Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_subclass_js__WEBPACK_IMPORTED_MODULE_7__["subclass"])("esri.renderers.visualVariables.VisualVariableFactory")], h);
      var f = h;
      /* harmony default export */

      __webpack_exports__["default"] = f;
      /***/
    },

    /***/
    "yexH":
    /*!*******************************************************************************!*\
      !*** ./node_modules/@arcgis/core/renderers/support/AuthoringInfoFieldInfo.js ***!
      \*******************************************************************************/

    /*! exports provided: default, AuthoringInfoFieldInfo */

    /***/
    function yexH(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "AuthoringInfoFieldInfo", function () {
        return a;
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


      var _AuthoringInfoClassBreakInfo_js__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
      /*! ./AuthoringInfoClassBreakInfo.js */
      "7th1");
      /*
      All material copyright ESRI, All Rights Reserved, unless otherwise specified.
      See https://js.arcgis.com/4.18/esri/copyright.txt for details.
      */


      var p;

      var a = p = /*#__PURE__*/function (_core_JSONSupport_js_8) {
        _inherits(_class4, _core_JSONSupport_js_8);

        var _super15 = _createSuper(_class4);

        function _class4(o) {
          var _this15;

          _classCallCheck(this, _class4);

          _this15 = _super15.call(this, o), _this15.field = "", _this15.normalizationField = "", _this15.label = "", _this15.classBreakInfos = [];
          return _this15;
        }

        _createClass(_class4, [{
          key: "clone",
          value: function clone() {
            return new p({
              field: this.field,
              normalizationField: this.normalizationField,
              label: this.label,
              classBreakInfos: Object(_core_lang_js__WEBPACK_IMPORTED_MODULE_2__["clone"])(this.classBreakInfos)
            });
          }
        }]);

        return _class4;
      }(_core_JSONSupport_js__WEBPACK_IMPORTED_MODULE_10__["JSONSupport"]);

      Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_5__["property"])({
        type: String,
        json: {
          write: !0
        }
      })], a.prototype, "field", void 0), Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_5__["property"])({
        type: String,
        json: {
          write: !0
        }
      })], a.prototype, "normalizationField", void 0), Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_5__["property"])({
        type: String,
        json: {
          write: !0
        }
      })], a.prototype, "label", void 0), Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_5__["property"])({
        type: [_AuthoringInfoClassBreakInfo_js__WEBPACK_IMPORTED_MODULE_11__["default"]],
        json: {
          write: !0
        }
      })], a.prototype, "classBreakInfos", void 0), a = p = Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_subclass_js__WEBPACK_IMPORTED_MODULE_6__["subclass"])("esri.renderers.support.AuthoringInfoFieldInfo")], a);
      var l = a;
      /* harmony default export */

      __webpack_exports__["default"] = l;
      /***/
    }
  }]);
})();
//# sourceMappingURL=default~BuildingSceneLayer-js~CSVLayer-js~FeatureLayer-js~ImageryLayer-js~ImageryTileLayer-js~KMLLay~166cc929-es5.js.map