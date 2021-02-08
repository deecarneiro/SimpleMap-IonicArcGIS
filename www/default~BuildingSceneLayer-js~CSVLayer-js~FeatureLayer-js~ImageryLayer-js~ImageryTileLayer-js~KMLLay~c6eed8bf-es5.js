(function () {
  function _get(target, property, receiver) { if (typeof Reflect !== "undefined" && Reflect.get) { _get = Reflect.get; } else { _get = function _get(target, property, receiver) { var base = _superPropBase(target, property); if (!base) return; var desc = Object.getOwnPropertyDescriptor(base, property); if (desc.get) { return desc.get.call(receiver); } return desc.value; }; } return _get(target, property, receiver || target); }

  function _superPropBase(object, property) { while (!Object.prototype.hasOwnProperty.call(object, property)) { object = _getPrototypeOf(object); if (object === null) break; } return object; }

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

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["default~BuildingSceneLayer-js~CSVLayer-js~FeatureLayer-js~ImageryLayer-js~ImageryTileLayer-js~KMLLay~c6eed8bf"], {
    /***/
    "1hFN":
    /*!**********************************************************************!*\
      !*** ./node_modules/@arcgis/core/renderers/support/LegendOptions.js ***!
      \**********************************************************************/

    /*! exports provided: default, LegendOptions */

    /***/
    function hFN(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "LegendOptions", function () {
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


      var _s;

      var p = _s = /*#__PURE__*/function (_core_JSONSupport_js_) {
        _inherits(s, _core_JSONSupport_js_);

        var _super = _createSuper(s);

        function s() {
          var _this;

          _classCallCheck(this, s);

          _this = _super.apply(this, arguments), _this.title = null;
          return _this;
        }

        _createClass(s, [{
          key: "clone",
          value: function clone() {
            return new _s({
              title: this.title
            });
          }
        }]);

        return s;
      }(_core_JSONSupport_js__WEBPACK_IMPORTED_MODULE_9__["JSONSupport"]);

      Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_4__["property"])({
        type: String,
        json: {
          write: !0
        }
      })], p.prototype, "title", void 0), p = _s = Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_subclass_js__WEBPACK_IMPORTED_MODULE_5__["subclass"])("esri.renderers.support.LegendOptions")], p);
      var i = p;
      /* harmony default export */

      __webpack_exports__["default"] = i;
      /***/
    },

    /***/
    "W4Nn":
    /*!****************************************************************************************************!*\
      !*** ./node_modules/@arcgis/core/renderers/visualVariables/support/VisualVariableLegendOptions.js ***!
      \****************************************************************************************************/

    /*! exports provided: default */

    /***/
    function W4Nn(module, __webpack_exports__, __webpack_require__) {
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


      var _support_LegendOptions_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! ../../support/LegendOptions.js */
      "1hFN");
      /*
      All material copyright ESRI, All Rights Reserved, unless otherwise specified.
      See https://js.arcgis.com/4.18/esri/copyright.txt for details.
      */


      var _t;

      var p = _t = /*#__PURE__*/function (_support_LegendOption) {
        _inherits(t, _support_LegendOption);

        var _super2 = _createSuper(t);

        function t() {
          var _this2;

          _classCallCheck(this, t);

          _this2 = _super2.apply(this, arguments), _this2.showLegend = null;
          return _this2;
        }

        _createClass(t, [{
          key: "clone",
          value: function clone() {
            return new _t({
              title: this.title,
              showLegend: this.showLegend
            });
          }
        }]);

        return t;
      }(_support_LegendOptions_js__WEBPACK_IMPORTED_MODULE_9__["default"]);

      Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_4__["property"])({
        type: Boolean,
        json: {
          write: !0
        }
      })], p.prototype, "showLegend", void 0), p = _t = Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_subclass_js__WEBPACK_IMPORTED_MODULE_5__["subclass"])("esri.renderers.visualVariables.support.VisualVariableLegendOptions")], p);
      var i = p;
      /* harmony default export */

      __webpack_exports__["default"] = i;
      /***/
    },

    /***/
    "XdUx":
    /*!*******************************************************************************!*\
      !*** ./node_modules/@arcgis/core/renderers/visualVariables/VisualVariable.js ***!
      \*******************************************************************************/

    /*! exports provided: default */

    /***/
    function XdUx(module, __webpack_exports__, __webpack_require__) {
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


      var _core_accessorSupport_decorators_cast_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ../../core/accessorSupport/decorators/cast.js */
      "Gj5k");
      /* harmony import */


      var _core_jsonMap_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ../../core/jsonMap.js */
      "+opI");
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


      var _core_JSONSupport_js__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
      /*! ../../core/JSONSupport.js */
      "ag7Y");
      /* harmony import */


      var _support_VisualVariableLegendOptions_js__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
      /*! ./support/VisualVariableLegendOptions.js */
      "W4Nn");
      /*
      All material copyright ESRI, All Rights Reserved, unless otherwise specified.
      See https://js.arcgis.com/4.18/esri/copyright.txt for details.
      */


      var a = _core_Logger_js__WEBPACK_IMPORTED_MODULE_2__["default"].getLogger("esri.renderers.visualVariables.VisualVariable"),
          u = new _core_jsonMap_js__WEBPACK_IMPORTED_MODULE_6__["JSONMap"]({
        colorInfo: "color",
        transparencyInfo: "opacity",
        rotationInfo: "rotation",
        sizeInfo: "size"
      });

      var c = /*#__PURE__*/function (_core_JSONSupport_js_2) {
        _inherits(c, _core_JSONSupport_js_2);

        var _super3 = _createSuper(c);

        function c(e) {
          var _this3;

          _classCallCheck(this, c);

          _this3 = _super3.call(this, e), _this3.index = null, _this3.type = null, _this3.field = null, _this3.valueExpression = null, _this3.valueExpressionTitle = null, _this3.legendOptions = null;
          return _this3;
        }

        _createClass(c, [{
          key: "castField",
          value: function castField(e) {
            return null == e ? e : "function" == typeof e ? (a.error(".field: field must be a string value"), null) : Object(_core_accessorSupport_ensureType_js__WEBPACK_IMPORTED_MODULE_3__["ensureString"])(e);
          }
        }, {
          key: "arcadeRequired",
          get: function get() {
            return !!this.valueExpression;
          }
        }, {
          key: "clone",
          value: function clone() {}
        }, {
          key: "getAttributeHash",
          value: function getAttributeHash() {
            return "".concat(this.type, "-").concat(this.field, "-").concat(this.valueExpression);
          }
        }]);

        return c;
      }(_core_JSONSupport_js__WEBPACK_IMPORTED_MODULE_11__["JSONSupport"]);

      Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_4__["property"])()], c.prototype, "index", void 0), Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_4__["property"])({
        type: u.apiValues,
        readOnly: !0,
        json: {
          read: u.read,
          write: u.write
        }
      })], c.prototype, "type", void 0), Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_4__["property"])({
        type: String,
        json: {
          write: !0
        }
      })], c.prototype, "field", void 0), Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_cast_js__WEBPACK_IMPORTED_MODULE_5__["cast"])("field")], c.prototype, "castField", null), Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_4__["property"])({
        type: String,
        json: {
          write: !0
        }
      })], c.prototype, "valueExpression", void 0), Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_4__["property"])({
        type: String,
        json: {
          write: !0
        }
      })], c.prototype, "valueExpressionTitle", void 0), Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_4__["property"])({
        readOnly: !0,
        dependsOn: ["valueExpression"]
      })], c.prototype, "arcadeRequired", null), Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_4__["property"])({
        type: _support_VisualVariableLegendOptions_js__WEBPACK_IMPORTED_MODULE_12__["default"],
        json: {
          write: !0
        }
      })], c.prototype, "legendOptions", void 0), c = Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_subclass_js__WEBPACK_IMPORTED_MODULE_7__["subclass"])("esri.renderers.visualVariables.VisualVariable")], c);
      var d = c;
      /* harmony default export */

      __webpack_exports__["default"] = d;
      /***/
    },

    /***/
    "moES":
    /*!*********************************************************************************!*\
      !*** ./node_modules/@arcgis/core/renderers/visualVariables/support/SizeStop.js ***!
      \*********************************************************************************/

    /*! exports provided: default */

    /***/
    function moES(module, __webpack_exports__, __webpack_require__) {
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


      var _core_JSONSupport_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! ../../../core/JSONSupport.js */
      "ag7Y");
      /* harmony import */


      var _core_screenUtils_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
      /*! ../../../core/screenUtils.js */
      "qRWG");
      /*
      All material copyright ESRI, All Rights Reserved, unless otherwise specified.
      See https://js.arcgis.com/4.18/esri/copyright.txt for details.
      */


      var _p;

      var i = _p = /*#__PURE__*/function (_core_JSONSupport_js_3) {
        _inherits(p, _core_JSONSupport_js_3);

        var _super4 = _createSuper(p);

        function p(r) {
          var _this4;

          _classCallCheck(this, p);

          _this4 = _super4.call(this, r), _this4.label = null, _this4.size = null, _this4.value = null;
          return _this4;
        }

        _createClass(p, [{
          key: "clone",
          value: function clone() {
            return new _p({
              label: this.label,
              size: this.size,
              value: this.value
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
      })], i.prototype, "label", void 0), Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_4__["property"])({
        type: Number,
        cast: _core_screenUtils_js__WEBPACK_IMPORTED_MODULE_10__["toPt"],
        json: {
          write: !0
        }
      })], i.prototype, "size", void 0), Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_4__["property"])({
        type: Number,
        json: {
          write: !0
        }
      })], i.prototype, "value", void 0), i = _p = Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_subclass_js__WEBPACK_IMPORTED_MODULE_5__["subclass"])("esri.renderers.visualVariables.support.SizeStop")], i);
      var l = i;
      /* harmony default export */

      __webpack_exports__["default"] = l;
      /***/
    },

    /***/
    "vCke":
    /*!**************************************************************************************************!*\
      !*** ./node_modules/@arcgis/core/renderers/visualVariables/support/SizeVariableLegendOptions.js ***!
      \**************************************************************************************************/

    /*! exports provided: default */

    /***/
    function vCke(module, __webpack_exports__, __webpack_require__) {
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


      var _VisualVariableLegendOptions_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! ./VisualVariableLegendOptions.js */
      "W4Nn");
      /*
      All material copyright ESRI, All Rights Reserved, unless otherwise specified.
      See https://js.arcgis.com/4.18/esri/copyright.txt for details.
      */


      var t;

      var i = t = /*#__PURE__*/function (_VisualVariableLegend) {
        _inherits(_class, _VisualVariableLegend);

        var _super5 = _createSuper(_class);

        function _class() {
          var _this5;

          _classCallCheck(this, _class);

          _this5 = _super5.apply(this, arguments), _this5.customValues = null;
          return _this5;
        }

        _createClass(_class, [{
          key: "clone",
          value: function clone() {
            return new t({
              title: this.title,
              showLegend: this.showLegend,
              customValues: this.customValues && this.customValues.slice(0)
            });
          }
        }]);

        return _class;
      }(_VisualVariableLegendOptions_js__WEBPACK_IMPORTED_MODULE_9__["default"]);

      Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_4__["property"])({
        type: [Number],
        json: {
          write: !0
        }
      })], i.prototype, "customValues", void 0), i = t = Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_subclass_js__WEBPACK_IMPORTED_MODULE_5__["subclass"])("esri.renderers.visualVariables.support.SizeVariableLegendOptions")], i);
      var p = i;
      /* harmony default export */

      __webpack_exports__["default"] = p;
      /***/
    },

    /***/
    "w/y1":
    /*!*****************************************************************************!*\
      !*** ./node_modules/@arcgis/core/renderers/visualVariables/SizeVariable.js ***!
      \*****************************************************************************/

    /*! exports provided: default */

    /***/
    function wY1(module, __webpack_exports__, __webpack_require__) {
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


      var _core_accessorSupport_decorators_reader_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ../../core/accessorSupport/decorators/reader.js */
      "r88o");
      /* harmony import */


      var _core_accessorSupport_decorators_subclass_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! ../../core/accessorSupport/decorators/subclass.js */
      "04ZG");
      /* harmony import */


      var _core_accessorSupport_decorators_writer_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! ../../core/accessorSupport/decorators/writer.js */
      "Cduq");
      /* harmony import */


      var _core_Error_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! ../../core/Error.js */
      "zlDU");
      /* harmony import */


      var _core_urlUtils_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
      /*! ../../core/urlUtils.js */
      "4EHJ");
      /* harmony import */


      var _core_uuid_js__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
      /*! ../../core/uuid.js */
      "ju1D");
      /* harmony import */


      var _portal_support_resourceExtension_js__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
      /*! ../../portal/support/resourceExtension.js */
      "9AIY");
      /* harmony import */


      var _core_screenUtils_js__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
      /*! ../../core/screenUtils.js */
      "qRWG");
      /* harmony import */


      var _VisualVariable_js__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(
      /*! ./VisualVariable.js */
      "XdUx");
      /* harmony import */


      var _support_SizeStop_js__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(
      /*! ./support/SizeStop.js */
      "moES");
      /* harmony import */


      var _support_SizeVariableLegendOptions_js__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(
      /*! ./support/SizeVariableLegendOptions.js */
      "vCke");
      /* harmony import */


      var _support_sizeVariableUtils_js__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(
      /*! ./support/sizeVariableUtils.js */
      "hvLT");
      /* harmony import */


      var _support_visualVariableUtils_js__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(
      /*! ./support/visualVariableUtils.js */
      "0pea");
      /*
      All material copyright ESRI, All Rights Reserved, unless otherwise specified.
      See https://js.arcgis.com/4.18/esri/copyright.txt for details.
      */


      var _S;

      var z = _core_Logger_js__WEBPACK_IMPORTED_MODULE_2__["default"].getLogger("esri.renderers.visualVariables.SizeVariable"),
          v = new _core_jsonMap_js__WEBPACK_IMPORTED_MODULE_5__["JSONMap"]({
        width: "width",
        depth: "depth",
        height: "height",
        widthAndDepth: "width-and-depth",
        all: "all"
      }),
          w = new _core_jsonMap_js__WEBPACK_IMPORTED_MODULE_5__["JSONMap"]({
        unknown: "unknown",
        inch: "inches",
        foot: "feet",
        yard: "yards",
        mile: "miles",
        "nautical-mile": "nautical-miles",
        millimeter: "millimeters",
        centimeter: "centimeters",
        decimeter: "decimeters",
        meter: "meters",
        kilometer: "kilometers",
        "decimal-degree": "decimal-degrees"
      });

      function V(e) {
        if (null != e) return "string" == typeof e || "number" == typeof e ? Object(_core_screenUtils_js__WEBPACK_IMPORTED_MODULE_13__["toPt"])(e) : "size" === e.type ? Object(_support_sizeVariableUtils_js__WEBPACK_IMPORTED_MODULE_17__["isSizeVariable"])(e) ? e : (delete (e = _objectSpread({}, e)).type, new g(e)) : void 0;
      }

      function f(e, t, i) {
        if ("object" != typeof e) return e;
        var s = new g();
        return s.read(e, i), s;
      }

      var g = _S = /*#__PURE__*/function (_VisualVariable_js__W) {
        _inherits(S, _VisualVariable_js__W);

        var _super6 = _createSuper(S);

        function S(e) {
          var _this6;

          _classCallCheck(this, S);

          _this6 = _super6.call(this, e), _this6.axis = null, _this6.legendOptions = null, _this6.normalizationField = null, _this6.scaleBy = null, _this6.target = null, _this6.type = "size", _this6.useSymbolValue = null, _this6.valueExpression = null, _this6.valueRepresentation = null, _this6.valueUnit = null;
          return _this6;
        }

        _createClass(S, [{
          key: "cache",
          get: function get() {
            return {
              ipData: this._interpolateData(),
              hasExpression: !!this.valueExpression,
              compiledFunc: null,
              isScaleDriven: _support_visualVariableUtils_js__WEBPACK_IMPORTED_MODULE_18__["viewScaleRE"].test(this.valueExpression)
            };
          }
        }, {
          key: "expression",
          set: function set(e) {
            z.warn("'expression' is deprecated since version 4.2. Use 'valueExpression' instead. The only supported expression is 'view.scale'."), "view.scale" === e ? (this.valueExpression = "$view.scale", this._set("expression", e)) : this._set("expression", null);
          }
        }, {
          key: "index",
          set: function set(e) {
            Object(_support_sizeVariableUtils_js__WEBPACK_IMPORTED_MODULE_17__["isSizeVariable"])(this.maxSize) && (this.maxSize.index = "visualVariables[".concat(e, "].maxSize")), Object(_support_sizeVariableUtils_js__WEBPACK_IMPORTED_MODULE_17__["isSizeVariable"])(this.minSize) && (this.minSize.index = "visualVariables[".concat(e, "].minSize")), this._set("index", e);
          }
        }, {
          key: "inputValueType",
          get: function get() {
            return Object(_support_sizeVariableUtils_js__WEBPACK_IMPORTED_MODULE_17__["getInputValueType"])(this);
          }
        }, {
          key: "maxDataValue",
          set: function set(e) {
            e && this.stops && (z.warn("cannot set maxDataValue when stops is not null."), e = null), this._set("maxDataValue", e);
          }
        }, {
          key: "maxSize",
          set: function set(e) {
            e && this.stops && (z.warn("cannot set maxSize when stops is not null."), e = null), this._set("maxSize", e);
          }
        }, {
          key: "castMaxSize",
          value: function castMaxSize(e) {
            return V(e);
          }
        }, {
          key: "readMaxSize",
          value: function readMaxSize(e, t, i) {
            return f(e, 0, i);
          }
        }, {
          key: "minDataValue",
          set: function set(e) {
            e && this.stops && (z.warn("cannot set minDataValue when stops is not null."), e = null), this._set("minDataValue", e);
          }
        }, {
          key: "minSize",
          set: function set(e) {
            e && this.stops && (z.warn("cannot set minSize when stops is not null."), e = null), this._set("minSize", e);
          }
        }, {
          key: "castMinSize",
          value: function castMinSize(e) {
            return V(e);
          }
        }, {
          key: "readMinSize",
          value: function readMinSize(e, t, i) {
            return f(e, 0, i);
          }
        }, {
          key: "arcadeRequired",
          get: function get() {
            return !!this.valueExpression || this.minSize && "object" == typeof this.minSize && this.minSize.arcadeRequired || this.maxSize && "object" == typeof this.maxSize && this.maxSize.arcadeRequired;
          }
        }, {
          key: "stops",
          set: function set(e) {
            null == this.minDataValue && null == this.maxDataValue && null == this.minSize && null == this.maxSize ? e && Array.isArray(e) && (e = e.filter(function (e) {
              return !!e;
            })).sort(function (e, t) {
              return e.value - t.value;
            }) : e && (z.warn("cannot set stops when one of minDataValue, maxDataValue, minSize or maxSize is not null."), e = null), this._set("stops", e);
          }
        }, {
          key: "transformationType",
          get: function get() {
            return Object(_support_sizeVariableUtils_js__WEBPACK_IMPORTED_MODULE_17__["getTransformationType"])(this, this.inputValueType);
          }
        }, {
          key: "readValueExpression",
          value: function readValueExpression(e, t) {
            return e || t.expression && "$view.scale";
          }
        }, {
          key: "writeValueExpressionWebScene",
          value: function writeValueExpressionWebScene(e, t, i, s) {
            if ("$view.scale" === e) {
              if (s && s.messages) {
                var _e = this.index,
                    _t2 = "string" == typeof _e ? _e : "visualVariables[".concat(_e, "]");

                s.messages.push(new _core_Error_js__WEBPACK_IMPORTED_MODULE_9__["default"]("property:unsupported", this.type + "VisualVariable.valueExpression = '$view.scale' is not supported in Web Scene. Please remove this property to save the Web Scene.", {
                  instance: this,
                  propertyName: _t2 + ".valueExpression",
                  context: s
                }));
              }
            } else t[i] = e;
          }
        }, {
          key: "readValueUnit",
          value: function readValueUnit(e) {
            return e ? w.read(e) : null;
          }
        }, {
          key: "clone",
          value: function clone() {
            return new _S({
              axis: this.axis,
              field: this.field,
              valueExpression: this.valueExpression,
              valueExpressionTitle: this.valueExpressionTitle,
              maxDataValue: this.maxDataValue,
              maxSize: Object(_support_sizeVariableUtils_js__WEBPACK_IMPORTED_MODULE_17__["isSizeVariable"])(this.maxSize) ? this.maxSize.clone() : this.maxSize,
              minDataValue: this.minDataValue,
              minSize: Object(_support_sizeVariableUtils_js__WEBPACK_IMPORTED_MODULE_17__["isSizeVariable"])(this.minSize) ? this.minSize.clone() : this.minSize,
              normalizationField: this.normalizationField,
              stops: this.stops && this.stops.map(function (e) {
                return e.clone();
              }),
              target: this.target,
              useSymbolValue: this.useSymbolValue,
              valueRepresentation: this.valueRepresentation,
              valueUnit: this.valueUnit,
              legendOptions: this.legendOptions && this.legendOptions.clone()
            });
          }
        }, {
          key: "flipSizes",
          value: function flipSizes() {
            if ("clamped-linear" === this.transformationType) {
              var e = this.minSize,
                  _t3 = this.maxSize;
              return this.minSize = _t3, this.maxSize = e, this;
            }

            if ("stops" === this.transformationType) {
              var _e2 = this.stops,
                  _t4 = _e2.map(function (e) {
                return e.size;
              }).reverse(),
                  i = _e2.length;

              for (var _s2 = 0; _s2 < i; _s2++) {
                _e2[_s2].size = _t4[_s2];
              }

              return this;
            }

            return this;
          }
        }, {
          key: "getAttributeHash",
          value: function getAttributeHash() {
            return "".concat(_get(_getPrototypeOf(S.prototype), "getAttributeHash", this).call(this), "-").concat(this.target, "-").concat(this.normalizationField);
          }
        }, {
          key: "_interpolateData",
          value: function _interpolateData() {
            return this.stops && this.stops.map(function (e) {
              return e.value || 0;
            });
          }
        }]);

        return S;
      }(_VisualVariable_js__WEBPACK_IMPORTED_MODULE_14__["default"]);

      Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_3__["property"])({
        readOnly: !0,
        dependsOn: ["valueExpression", "stops"]
      })], g.prototype, "cache", null), Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_3__["property"])({
        type: v.apiValues,
        json: {
          type: v.jsonValues,
          origins: {
            "web-map": {
              read: !1
            }
          },
          read: v.read,
          write: v.write
        }
      })], g.prototype, "axis", void 0), Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_3__["property"])({
        type: String,
        value: null,
        json: {
          read: !1
        }
      })], g.prototype, "expression", null), Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_3__["property"])()], g.prototype, "index", null), Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_3__["property"])({
        type: String,
        readOnly: !0,
        dependsOn: ["field", "valueExpression"]
      })], g.prototype, "inputValueType", null), Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_3__["property"])({
        type: _support_SizeVariableLegendOptions_js__WEBPACK_IMPORTED_MODULE_16__["default"],
        json: {
          write: !0
        }
      })], g.prototype, "legendOptions", void 0), Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_3__["property"])({
        type: Number,
        value: null,
        json: {
          write: !0
        }
      })], g.prototype, "maxDataValue", null), Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_3__["property"])({
        type: Number,
        value: null,
        json: {
          write: !0
        }
      })], g.prototype, "maxSize", null), Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_cast_js__WEBPACK_IMPORTED_MODULE_4__["cast"])("maxSize")], g.prototype, "castMaxSize", null), Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_reader_js__WEBPACK_IMPORTED_MODULE_6__["reader"])("maxSize")], g.prototype, "readMaxSize", null), Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_3__["property"])({
        type: Number,
        value: null,
        json: {
          write: !0
        }
      })], g.prototype, "minDataValue", null), Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_3__["property"])({
        type: Number,
        value: null,
        json: {
          write: !0
        }
      })], g.prototype, "minSize", null), Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_cast_js__WEBPACK_IMPORTED_MODULE_4__["cast"])("minSize")], g.prototype, "castMinSize", null), Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_reader_js__WEBPACK_IMPORTED_MODULE_6__["reader"])("minSize")], g.prototype, "readMinSize", null), Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_3__["property"])({
        type: String,
        json: {
          write: !0
        }
      })], g.prototype, "normalizationField", void 0), Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_3__["property"])({
        readOnly: !0,
        dependsOn: ["valueExpression", "minSize.arcadeRequired", "maxSize.arcadeRequired"]
      })], g.prototype, "arcadeRequired", null), Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_3__["property"])({
        type: String
      })], g.prototype, "scaleBy", void 0), Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_3__["property"])({
        type: [_support_SizeStop_js__WEBPACK_IMPORTED_MODULE_15__["default"]],
        value: null,
        json: {
          write: !0
        }
      })], g.prototype, "stops", null), Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_3__["property"])({
        type: ["outline"],
        json: {
          write: !0
        }
      })], g.prototype, "target", void 0), Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_3__["property"])({
        type: String,
        readOnly: !0,
        dependsOn: ["minDataValue", "maxDataValue", "minSize", "maxSize", "valueUnit", "inputValueType", "stops"]
      })], g.prototype, "transformationType", null), Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_3__["property"])({
        type: ["size"],
        json: {
          type: ["sizeInfo"]
        }
      })], g.prototype, "type", void 0), Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_3__["property"])({
        type: Boolean,
        json: {
          write: !0,
          origins: {
            "web-map": {
              read: !1
            }
          }
        }
      })], g.prototype, "useSymbolValue", void 0), Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_3__["property"])({
        type: String,
        json: {
          write: !0
        }
      })], g.prototype, "valueExpression", void 0), Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_reader_js__WEBPACK_IMPORTED_MODULE_6__["reader"])("valueExpression", ["valueExpression", "expression"])], g.prototype, "readValueExpression", null), Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_writer_js__WEBPACK_IMPORTED_MODULE_8__["writer"])("web-scene", "valueExpression")], g.prototype, "writeValueExpressionWebScene", null), Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_3__["property"])({
        type: ["radius", "diameter", "area", "width", "distance"],
        json: {
          write: !0
        }
      })], g.prototype, "valueRepresentation", void 0), Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_3__["property"])({
        type: w.apiValues,
        json: {
          write: w.write,
          origins: {
            "web-map": {
              read: !1
            },
            "web-scene": {
              write: !0
            }
          }
        }
      })], g.prototype, "valueUnit", void 0), Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_reader_js__WEBPACK_IMPORTED_MODULE_6__["reader"])("valueUnit")], g.prototype, "readValueUnit", null), g = _S = Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_subclass_js__WEBPACK_IMPORTED_MODULE_7__["subclass"])("esri.renderers.visualVariables.SizeVariable")], g);
      var j = g;
      /* harmony default export */

      __webpack_exports__["default"] = j;
      /***/
    }
  }]);
})();
//# sourceMappingURL=default~BuildingSceneLayer-js~CSVLayer-js~FeatureLayer-js~ImageryLayer-js~ImageryTileLayer-js~KMLLay~c6eed8bf-es5.js.map