(function () {
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

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["default~PointCloudLayer-js~views-3d-layers-PointCloudWorker-js"], {
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
    "J5Ut":
    /*!*******************************************************************************************!*\
      !*** ./node_modules/@arcgis/core/renderers/support/pointCloud/PointSizeSplatAlgorithm.js ***!
      \*******************************************************************************************/

    /*! exports provided: default, PointSizeSplatAlgorithm */

    /***/
    function J5Ut(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "PointSizeSplatAlgorithm", function () {
        return c;
      });
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


      var _core_accessorSupport_decorators_enumeration_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ../../../core/accessorSupport/decorators/enumeration.js */
      "RI0u");
      /* harmony import */


      var _core_accessorSupport_decorators_subclass_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ../../../core/accessorSupport/decorators/subclass.js */
      "04ZG");
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


      var _PointSizeAlgorithm_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
      /*! ./PointSizeAlgorithm.js */
      "m4gN");
      /*
      All material copyright ESRI, All Rights Reserved, unless otherwise specified.
      See https://js.arcgis.com/4.18/esri/copyright.txt for details.
      */


      var _p;

      var c = _p = /*#__PURE__*/function (_PointSizeAlgorithm_j) {
        _inherits(p, _PointSizeAlgorithm_j);

        var _super2 = _createSuper(p);

        function p() {
          var _this2;

          _classCallCheck(this, p);

          _this2 = _super2.apply(this, arguments), _this2.type = "splat", _this2.scaleFactor = 1;
          return _this2;
        }

        _createClass(p, [{
          key: "clone",
          value: function clone() {
            return new _p({
              scaleFactor: this.scaleFactor
            });
          }
        }]);

        return p;
      }(_PointSizeAlgorithm_js__WEBPACK_IMPORTED_MODULE_10__["default"]);

      Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_enumeration_js__WEBPACK_IMPORTED_MODULE_5__["enumeration"])({
        pointCloudSplatAlgorithm: "splat"
      })], c.prototype, "type", void 0), Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_4__["property"])({
        type: Number,
        value: 1,
        nonNullable: !0,
        json: {
          write: !0
        }
      })], c.prototype, "scaleFactor", void 0), c = _p = Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_subclass_js__WEBPACK_IMPORTED_MODULE_6__["subclass"])("esri.renderers.support.pointCloud.PointSizeSplatAlgorithm")], c);
      var i = c;
      /* harmony default export */

      __webpack_exports__["default"] = i;
      /***/
    },

    /***/
    "OZJ8":
    /*!***********************************************************************************************!*\
      !*** ./node_modules/@arcgis/core/renderers/support/pointCloud/PointSizeFixedSizeAlgorithm.js ***!
      \***********************************************************************************************/

    /*! exports provided: default, PointSizeFixedSizeAlgorithm */

    /***/
    function OZJ8(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "PointSizeFixedSizeAlgorithm", function () {
        return p;
      });
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


      var _core_accessorSupport_decorators_enumeration_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ../../../core/accessorSupport/decorators/enumeration.js */
      "RI0u");
      /* harmony import */


      var _core_accessorSupport_decorators_subclass_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ../../../core/accessorSupport/decorators/subclass.js */
      "04ZG");
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


      var _PointSizeAlgorithm_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
      /*! ./PointSizeAlgorithm.js */
      "m4gN");
      /*
      All material copyright ESRI, All Rights Reserved, unless otherwise specified.
      See https://js.arcgis.com/4.18/esri/copyright.txt for details.
      */


      var _i;

      var p = _i = /*#__PURE__*/function (_PointSizeAlgorithm_j2) {
        _inherits(i, _PointSizeAlgorithm_j2);

        var _super3 = _createSuper(i);

        function i() {
          var _this3;

          _classCallCheck(this, i);

          _this3 = _super3.apply(this, arguments), _this3.type = "fixed-size", _this3.size = 0, _this3.useRealWorldSymbolSizes = null;
          return _this3;
        }

        _createClass(i, [{
          key: "clone",
          value: function clone() {
            return new _i({
              size: this.size,
              useRealWorldSymbolSizes: this.useRealWorldSymbolSizes
            });
          }
        }]);

        return i;
      }(_PointSizeAlgorithm_js__WEBPACK_IMPORTED_MODULE_10__["default"]);

      Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_enumeration_js__WEBPACK_IMPORTED_MODULE_5__["enumeration"])({
        pointCloudFixedSizeAlgorithm: "fixed-size"
      })], p.prototype, "type", void 0), Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_4__["property"])({
        type: Number,
        nonNullable: !0,
        json: {
          write: !0
        }
      })], p.prototype, "size", void 0), Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_4__["property"])({
        type: Boolean,
        json: {
          write: !0
        }
      })], p.prototype, "useRealWorldSymbolSizes", void 0), p = _i = Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_subclass_js__WEBPACK_IMPORTED_MODULE_6__["subclass"])("esri.renderers.support.pointCloud.PointSizeFixedSizeAlgorithm")], p);
      var l = p;
      /* harmony default export */

      __webpack_exports__["default"] = l;
      /***/
    },

    /***/
    "Q+3W":
    /*!***************************************************************************************!*\
      !*** ./node_modules/@arcgis/core/renderers/support/pointCloud/ColorClassBreakInfo.js ***!
      \***************************************************************************************/

    /*! exports provided: default, ColorClassBreakInfo */

    /***/
    function Q3W(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ColorClassBreakInfo", function () {
        return a;
      });
      /* harmony import */


      var _chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ../../../chunks/tslib.es6.js */
      "pO5D");
      /* harmony import */


      var _core_has_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ../../../core/has.js */
      "wSAH");
      /* harmony import */


      var _core_lang_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ../../../core/lang.js */
      "f/qv");
      /* harmony import */


      var _core_Logger_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ../../../core/Logger.js */
      "6S2I");
      /* harmony import */


      var _core_accessorSupport_ensureType_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ../../../core/accessorSupport/ensureType.js */
      "zqDF");
      /* harmony import */


      var _core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ../../../core/accessorSupport/decorators/property.js */
      "WbKI");
      /* harmony import */


      var _core_accessorSupport_decorators_subclass_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ../../../core/accessorSupport/decorators/subclass.js */
      "04ZG");
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


      var _l;

      var a = _l = /*#__PURE__*/function (_core_JSONSupport_js_2) {
        _inherits(l, _core_JSONSupport_js_2);

        var _super4 = _createSuper(l);

        function l() {
          var _this4;

          _classCallCheck(this, l);

          _this4 = _super4.apply(this, arguments), _this4.description = null, _this4.label = null, _this4.minValue = 0, _this4.maxValue = 0, _this4.color = null;
          return _this4;
        }

        _createClass(l, [{
          key: "clone",
          value: function clone() {
            return new _l({
              description: this.description,
              label: this.label,
              minValue: this.minValue,
              maxValue: this.maxValue,
              color: Object(_core_lang_js__WEBPACK_IMPORTED_MODULE_2__["clone"])(this.color)
            });
          }
        }]);

        return l;
      }(_core_JSONSupport_js__WEBPACK_IMPORTED_MODULE_10__["JSONSupport"]);

      Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_5__["property"])({
        type: String,
        json: {
          write: !0
        }
      })], a.prototype, "description", void 0), Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_5__["property"])({
        type: String,
        json: {
          write: !0
        }
      })], a.prototype, "label", void 0), Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_5__["property"])({
        type: Number,
        json: {
          read: {
            source: "classMinValue"
          },
          write: {
            target: "classMinValue"
          }
        }
      })], a.prototype, "minValue", void 0), Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_5__["property"])({
        type: Number,
        json: {
          read: {
            source: "classMaxValue"
          },
          write: {
            target: "classMaxValue"
          }
        }
      })], a.prototype, "maxValue", void 0), Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_5__["property"])({
        type: _Color_js__WEBPACK_IMPORTED_MODULE_11__["default"],
        json: {
          type: [_core_accessorSupport_ensureType_js__WEBPACK_IMPORTED_MODULE_4__["Integer"]],
          write: !0
        }
      })], a.prototype, "color", void 0), a = _l = Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_subclass_js__WEBPACK_IMPORTED_MODULE_6__["subclass"])("esri.renderers.support.pointCloud.ColorClassBreakInfo")], a);
      var c = a;
      /* harmony default export */

      __webpack_exports__["default"] = c;
      /***/
    },

    /***/
    "Tg0p":
    /*!******************************************************************************!*\
      !*** ./node_modules/@arcgis/core/renderers/PointCloudClassBreaksRenderer.js ***!
      \******************************************************************************/

    /*! exports provided: default */

    /***/
    function Tg0p(module, __webpack_exports__, __webpack_require__) {
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


      var _core_accessorSupport_decorators_subclass_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! ../core/accessorSupport/decorators/subclass.js */
      "04ZG");
      /* harmony import */


      var _core_urlUtils_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! ../core/urlUtils.js */
      "4EHJ");
      /* harmony import */


      var _core_uuid_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! ../core/uuid.js */
      "ju1D");
      /* harmony import */


      var _portal_support_resourceExtension_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
      /*! ../portal/support/resourceExtension.js */
      "9AIY");
      /* harmony import */


      var _PointCloudRenderer_js__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
      /*! ./PointCloudRenderer.js */
      "dzHX");
      /* harmony import */


      var _support_LegendOptions_js__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
      /*! ./support/LegendOptions.js */
      "1hFN");
      /* harmony import */


      var _support_pointCloud_ColorClassBreakInfo_js__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
      /*! ./support/pointCloud/ColorClassBreakInfo.js */
      "Q+3W");
      /*
      All material copyright ESRI, All Rights Reserved, unless otherwise specified.
      See https://js.arcgis.com/4.18/esri/copyright.txt for details.
      */


      var _n;

      var a = _n = /*#__PURE__*/function (_PointCloudRenderer_j) {
        _inherits(n, _PointCloudRenderer_j);

        var _super5 = _createSuper(n);

        function n(o) {
          var _this5;

          _classCallCheck(this, n);

          _this5 = _super5.call(this, o), _this5.type = "point-cloud-class-breaks", _this5.field = null, _this5.legendOptions = null, _this5.fieldTransformType = null, _this5.colorClassBreakInfos = null;
          return _this5;
        }

        _createClass(n, [{
          key: "clone",
          value: function clone() {
            return new _n(_objectSpread(_objectSpread({}, this.cloneProperties()), {}, {
              field: this.field,
              fieldTransformType: this.fieldTransformType,
              colorClassBreakInfos: Object(_core_lang_js__WEBPACK_IMPORTED_MODULE_2__["clone"])(this.colorClassBreakInfos),
              legendOptions: Object(_core_lang_js__WEBPACK_IMPORTED_MODULE_2__["clone"])(this.legendOptions)
            }));
          }
        }]);

        return n;
      }(_PointCloudRenderer_js__WEBPACK_IMPORTED_MODULE_11__["default"]);

      Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_enumeration_js__WEBPACK_IMPORTED_MODULE_6__["enumeration"])({
        pointCloudClassBreaksRenderer: "point-cloud-class-breaks"
      })], a.prototype, "type", void 0), Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_5__["property"])({
        json: {
          write: !0
        },
        type: String
      })], a.prototype, "field", void 0), Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_5__["property"])({
        type: _support_LegendOptions_js__WEBPACK_IMPORTED_MODULE_12__["default"],
        json: {
          write: !0
        }
      })], a.prototype, "legendOptions", void 0), Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_5__["property"])({
        type: _PointCloudRenderer_js__WEBPACK_IMPORTED_MODULE_11__["default"].fieldTransformTypeKebabDict.apiValues,
        json: {
          type: _PointCloudRenderer_js__WEBPACK_IMPORTED_MODULE_11__["default"].fieldTransformTypeKebabDict.jsonValues,
          read: _PointCloudRenderer_js__WEBPACK_IMPORTED_MODULE_11__["default"].fieldTransformTypeKebabDict.read,
          write: _PointCloudRenderer_js__WEBPACK_IMPORTED_MODULE_11__["default"].fieldTransformTypeKebabDict.write
        }
      })], a.prototype, "fieldTransformType", void 0), Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_5__["property"])({
        type: [_support_pointCloud_ColorClassBreakInfo_js__WEBPACK_IMPORTED_MODULE_13__["default"]],
        json: {
          write: !0
        }
      })], a.prototype, "colorClassBreakInfos", void 0), a = _n = Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_subclass_js__WEBPACK_IMPORTED_MODULE_7__["subclass"])("esri.renderers.PointCloudClassBreaksRenderer")], a);
      var c = a;
      /* harmony default export */

      __webpack_exports__["default"] = c;
      /***/
    },

    /***/
    "UBdR":
    /*!****************************************************************************************!*\
      !*** ./node_modules/@arcgis/core/renderers/support/pointCloud/ColorUniqueValueInfo.js ***!
      \****************************************************************************************/

    /*! exports provided: default, ColorUniqueValueInfo */

    /***/
    function UBdR(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ColorUniqueValueInfo", function () {
        return c;
      });
      /* harmony import */


      var _chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ../../../chunks/tslib.es6.js */
      "pO5D");
      /* harmony import */


      var _core_has_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ../../../core/has.js */
      "wSAH");
      /* harmony import */


      var _core_lang_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ../../../core/lang.js */
      "f/qv");
      /* harmony import */


      var _core_Logger_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ../../../core/Logger.js */
      "6S2I");
      /* harmony import */


      var _core_accessorSupport_ensureType_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ../../../core/accessorSupport/ensureType.js */
      "zqDF");
      /* harmony import */


      var _core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ../../../core/accessorSupport/decorators/property.js */
      "WbKI");
      /* harmony import */


      var _core_accessorSupport_decorators_subclass_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ../../../core/accessorSupport/decorators/subclass.js */
      "04ZG");
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


      var l;

      var c = l = /*#__PURE__*/function (_core_JSONSupport_js_3) {
        _inherits(_class, _core_JSONSupport_js_3);

        var _super6 = _createSuper(_class);

        function _class() {
          var _this6;

          _classCallCheck(this, _class);

          _this6 = _super6.apply(this, arguments), _this6.description = null, _this6.label = null, _this6.values = null, _this6.color = null;
          return _this6;
        }

        _createClass(_class, [{
          key: "clone",
          value: function clone() {
            return new l({
              description: this.description,
              label: this.label,
              values: Object(_core_lang_js__WEBPACK_IMPORTED_MODULE_2__["clone"])(this.values),
              color: Object(_core_lang_js__WEBPACK_IMPORTED_MODULE_2__["clone"])(this.color)
            });
          }
        }]);

        return _class;
      }(_core_JSONSupport_js__WEBPACK_IMPORTED_MODULE_10__["JSONSupport"]);

      Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_5__["property"])({
        type: String,
        json: {
          write: !0
        }
      })], c.prototype, "description", void 0), Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_5__["property"])({
        type: String,
        json: {
          write: !0
        }
      })], c.prototype, "label", void 0), Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_5__["property"])({
        type: [String],
        json: {
          write: !0
        }
      })], c.prototype, "values", void 0), Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_5__["property"])({
        type: _Color_js__WEBPACK_IMPORTED_MODULE_11__["default"],
        json: {
          type: [_core_accessorSupport_ensureType_js__WEBPACK_IMPORTED_MODULE_4__["Integer"]],
          write: !0
        }
      })], c.prototype, "color", void 0), c = l = Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_subclass_js__WEBPACK_IMPORTED_MODULE_6__["subclass"])("esri.renderers.support.pointCloud.ColorUniqueValueInfo")], c);
      var n = c;
      /* harmony default export */

      __webpack_exports__["default"] = n;
      /***/
    },

    /***/
    "V4u7":
    /*!**************************************************************************!*\
      !*** ./node_modules/@arcgis/core/renderers/PointCloudStretchRenderer.js ***!
      \**************************************************************************/

    /*! exports provided: default */

    /***/
    function V4u7(module, __webpack_exports__, __webpack_require__) {
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


      var _core_accessorSupport_decorators_subclass_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! ../core/accessorSupport/decorators/subclass.js */
      "04ZG");
      /* harmony import */


      var _core_urlUtils_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! ../core/urlUtils.js */
      "4EHJ");
      /* harmony import */


      var _core_uuid_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! ../core/uuid.js */
      "ju1D");
      /* harmony import */


      var _portal_support_resourceExtension_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
      /*! ../portal/support/resourceExtension.js */
      "9AIY");
      /* harmony import */


      var _PointCloudRenderer_js__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
      /*! ./PointCloudRenderer.js */
      "dzHX");
      /* harmony import */


      var _support_LegendOptions_js__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
      /*! ./support/LegendOptions.js */
      "1hFN");
      /* harmony import */


      var _support_pointCloud_StopInfo_js__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
      /*! ./support/pointCloud/StopInfo.js */
      "pxcj");
      /*
      All material copyright ESRI, All Rights Reserved, unless otherwise specified.
      See https://js.arcgis.com/4.18/esri/copyright.txt for details.
      */


      var l;

      var d = l = /*#__PURE__*/function (_PointCloudRenderer_j2) {
        _inherits(_class2, _PointCloudRenderer_j2);

        var _super7 = _createSuper(_class2);

        function _class2(e) {
          var _this7;

          _classCallCheck(this, _class2);

          _this7 = _super7.call(this, e), _this7.type = "point-cloud-stretch", _this7.field = null, _this7.legendOptions = null, _this7.fieldTransformType = null, _this7.stops = null;
          return _this7;
        }

        _createClass(_class2, [{
          key: "clone",
          value: function clone() {
            return new l(_objectSpread(_objectSpread({}, this.cloneProperties()), {}, {
              field: Object(_core_lang_js__WEBPACK_IMPORTED_MODULE_2__["clone"])(this.field),
              fieldTransformType: Object(_core_lang_js__WEBPACK_IMPORTED_MODULE_2__["clone"])(this.fieldTransformType),
              stops: Object(_core_lang_js__WEBPACK_IMPORTED_MODULE_2__["clone"])(this.stops),
              legendOptions: Object(_core_lang_js__WEBPACK_IMPORTED_MODULE_2__["clone"])(this.legendOptions)
            }));
          }
        }]);

        return _class2;
      }(_PointCloudRenderer_js__WEBPACK_IMPORTED_MODULE_11__["default"]);

      Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_enumeration_js__WEBPACK_IMPORTED_MODULE_6__["enumeration"])({
        pointCloudStretchRenderer: "point-cloud-stretch"
      })], d.prototype, "type", void 0), Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_5__["property"])({
        json: {
          write: !0
        },
        type: String
      })], d.prototype, "field", void 0), Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_5__["property"])({
        type: _support_LegendOptions_js__WEBPACK_IMPORTED_MODULE_12__["default"],
        json: {
          write: !0
        }
      })], d.prototype, "legendOptions", void 0), Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_5__["property"])({
        type: _PointCloudRenderer_js__WEBPACK_IMPORTED_MODULE_11__["default"].fieldTransformTypeKebabDict.apiValues,
        json: {
          type: _PointCloudRenderer_js__WEBPACK_IMPORTED_MODULE_11__["default"].fieldTransformTypeKebabDict.jsonValues,
          read: _PointCloudRenderer_js__WEBPACK_IMPORTED_MODULE_11__["default"].fieldTransformTypeKebabDict.read,
          write: _PointCloudRenderer_js__WEBPACK_IMPORTED_MODULE_11__["default"].fieldTransformTypeKebabDict.write
        }
      })], d.prototype, "fieldTransformType", void 0), Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_5__["property"])({
        type: [_support_pointCloud_StopInfo_js__WEBPACK_IMPORTED_MODULE_13__["default"]],
        json: {
          write: !0
        }
      })], d.prototype, "stops", void 0), d = l = Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_subclass_js__WEBPACK_IMPORTED_MODULE_7__["subclass"])("esri.renderers.PointCloudStretchRenderer")], d);
      var c = d;
      /* harmony default export */

      __webpack_exports__["default"] = c;
      /***/
    },

    /***/
    "XyqA":
    /*!***********************************************************************************!*\
      !*** ./node_modules/@arcgis/core/renderers/support/pointCloud/ColorModulation.js ***!
      \***********************************************************************************/

    /*! exports provided: default, ColorModulation */

    /***/
    function XyqA(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ColorModulation", function () {
        return p;
      });
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
      /*
      All material copyright ESRI, All Rights Reserved, unless otherwise specified.
      See https://js.arcgis.com/4.18/esri/copyright.txt for details.
      */


      var s;

      var p = s = /*#__PURE__*/function (_core_JSONSupport_js_4) {
        _inherits(_class3, _core_JSONSupport_js_4);

        var _super8 = _createSuper(_class3);

        function _class3() {
          var _this8;

          _classCallCheck(this, _class3);

          _this8 = _super8.apply(this, arguments), _this8.field = null, _this8.minValue = 0, _this8.maxValue = 255;
          return _this8;
        }

        _createClass(_class3, [{
          key: "clone",
          value: function clone() {
            return new s({
              field: this.field,
              minValue: this.minValue,
              maxValue: this.maxValue
            });
          }
        }]);

        return _class3;
      }(_core_JSONSupport_js__WEBPACK_IMPORTED_MODULE_9__["JSONSupport"]);

      Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_4__["property"])({
        type: String,
        json: {
          write: !0
        }
      })], p.prototype, "field", void 0), Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_4__["property"])({
        type: Number,
        nonNullable: !0,
        json: {
          write: !0
        }
      })], p.prototype, "minValue", void 0), Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_4__["property"])({
        type: Number,
        nonNullable: !0,
        json: {
          write: !0
        }
      })], p.prototype, "maxValue", void 0), p = s = Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_subclass_js__WEBPACK_IMPORTED_MODULE_5__["subclass"])("esri.renderers.support.pointCloud.ColorModulation")], p);
      var i = p;
      /* harmony default export */

      __webpack_exports__["default"] = i;
      /***/
    },

    /***/
    "dzHX":
    /*!*******************************************************************!*\
      !*** ./node_modules/@arcgis/core/renderers/PointCloudRenderer.js ***!
      \*******************************************************************/

    /*! exports provided: default */

    /***/
    function dzHX(module, __webpack_exports__, __webpack_require__) {
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


      var _core_urlUtils_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! ../core/urlUtils.js */
      "4EHJ");
      /* harmony import */


      var _core_uuid_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! ../core/uuid.js */
      "ju1D");
      /* harmony import */


      var _portal_support_resourceExtension_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
      /*! ../portal/support/resourceExtension.js */
      "9AIY");
      /* harmony import */


      var _core_JSONSupport_js__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
      /*! ../core/JSONSupport.js */
      "ag7Y");
      /* harmony import */


      var _support_pointCloud_ColorModulation_js__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
      /*! ./support/pointCloud/ColorModulation.js */
      "XyqA");
      /* harmony import */


      var _support_pointCloud_pointSizeAlgorithmTypeUtils_js__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
      /*! ./support/pointCloud/pointSizeAlgorithmTypeUtils.js */
      "oYN+");
      /*
      All material copyright ESRI, All Rights Reserved, unless otherwise specified.
      See https://js.arcgis.com/4.18/esri/copyright.txt for details.
      */


      var u = Object(_core_jsonMap_js__WEBPACK_IMPORTED_MODULE_6__["strict"])()({
        pointCloudClassBreaksRenderer: "point-cloud-class-breaks",
        pointCloudRGBRenderer: "point-cloud-rgb",
        pointCloudStretchRenderer: "point-cloud-stretch",
        pointCloudUniqueValueRenderer: "point-cloud-unique-value"
      });

      var c = /*#__PURE__*/function (_core_JSONSupport_js_5) {
        _inherits(c, _core_JSONSupport_js_5);

        var _super9 = _createSuper(c);

        function c(o) {
          var _this9;

          _classCallCheck(this, c);

          _this9 = _super9.call(this, o), _this9.type = void 0, _this9.pointSizeAlgorithm = null, _this9.colorModulation = null, _this9.pointsPerInch = 10;
          return _this9;
        }

        _createClass(c, [{
          key: "clone",
          value: function clone() {
            return console.warn(".clone() is not implemented for " + this.declaredClass), null;
          }
        }, {
          key: "cloneProperties",
          value: function cloneProperties() {
            return {
              pointSizeAlgorithm: Object(_core_lang_js__WEBPACK_IMPORTED_MODULE_2__["clone"])(this.pointSizeAlgorithm),
              colorModulation: Object(_core_lang_js__WEBPACK_IMPORTED_MODULE_2__["clone"])(this.colorModulation),
              pointsPerInch: Object(_core_lang_js__WEBPACK_IMPORTED_MODULE_2__["clone"])(this.pointsPerInch)
            };
          }
        }]);

        return c;
      }(_core_JSONSupport_js__WEBPACK_IMPORTED_MODULE_11__["JSONSupport"]);

      Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_5__["property"])({
        type: u.apiValues,
        readOnly: !0,
        nonNullable: !0,
        json: {
          type: u.jsonValues,
          read: !1,
          write: u.write
        }
      })], c.prototype, "type", void 0), Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_5__["property"])({
        types: _support_pointCloud_pointSizeAlgorithmTypeUtils_js__WEBPACK_IMPORTED_MODULE_13__["pointSizeAlgorithmTypes"],
        json: {
          write: !0
        }
      })], c.prototype, "pointSizeAlgorithm", void 0), Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_5__["property"])({
        type: _support_pointCloud_ColorModulation_js__WEBPACK_IMPORTED_MODULE_12__["default"],
        json: {
          write: !0
        }
      })], c.prototype, "colorModulation", void 0), Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_5__["property"])({
        json: {
          write: !0
        },
        nonNullable: !0,
        type: Number
      })], c.prototype, "pointsPerInch", void 0), c = Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_subclass_js__WEBPACK_IMPORTED_MODULE_7__["subclass"])("esri.renderers.PointCloudRenderer")], c), function (o) {
        o.fieldTransformTypeKebabDict = new _core_jsonMap_js__WEBPACK_IMPORTED_MODULE_6__["JSONMap"]({
          none: "none",
          lowFourBit: "low-four-bit",
          highFourBit: "high-four-bit",
          absoluteValue: "absolute-value",
          moduloTen: "modulo-ten"
        });
      }(c || (c = {}));
      var a = c;
      /* harmony default export */

      __webpack_exports__["default"] = a;
      /***/
    },

    /***/
    "m4gN":
    /*!**************************************************************************************!*\
      !*** ./node_modules/@arcgis/core/renderers/support/pointCloud/PointSizeAlgorithm.js ***!
      \**************************************************************************************/

    /*! exports provided: default, PointSizeAlgorithm, typeKebabDictionary */

    /***/
    function m4gN(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "PointSizeAlgorithm", function () {
        return i;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "typeKebabDictionary", function () {
        return p;
      });
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


      var _core_jsonMap_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ../../../core/jsonMap.js */
      "+opI");
      /* harmony import */


      var _core_accessorSupport_decorators_subclass_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ../../../core/accessorSupport/decorators/subclass.js */
      "04ZG");
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
      /*
      All material copyright ESRI, All Rights Reserved, unless otherwise specified.
      See https://js.arcgis.com/4.18/esri/copyright.txt for details.
      */


      var p = new _core_jsonMap_js__WEBPACK_IMPORTED_MODULE_5__["JSONMap"]({
        pointCloudFixedSizeAlgorithm: "fixed-size",
        pointCloudSplatAlgorithm: "splat"
      });

      var i = /*#__PURE__*/function (_core_JSONSupport_js_6) {
        _inherits(i, _core_JSONSupport_js_6);

        var _super10 = _createSuper(i);

        function i() {
          _classCallCheck(this, i);

          return _super10.apply(this, arguments);
        }

        return i;
      }(_core_JSONSupport_js__WEBPACK_IMPORTED_MODULE_10__["JSONSupport"]);

      Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_4__["property"])({
        type: p.apiValues,
        readOnly: !0,
        nonNullable: !0,
        json: {
          type: p.jsonValues,
          read: !1,
          write: p.write
        }
      })], i.prototype, "type", void 0), i = Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_subclass_js__WEBPACK_IMPORTED_MODULE_6__["subclass"])("esri.renderers.support.pointCloud.PointSizeAlgorithm")], i);
      var c = i;
      /* harmony default export */

      __webpack_exports__["default"] = c;
      /***/
    },

    /***/
    "oYN+":
    /*!***********************************************************************************************!*\
      !*** ./node_modules/@arcgis/core/renderers/support/pointCloud/pointSizeAlgorithmTypeUtils.js ***!
      \***********************************************************************************************/

    /*! exports provided: pointSizeAlgorithmTypes */

    /***/
    function oYN(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "pointSizeAlgorithmTypes", function () {
        return e;
      });
      /* harmony import */


      var _PointSizeAlgorithm_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ./PointSizeAlgorithm.js */
      "m4gN");
      /* harmony import */


      var _PointSizeFixedSizeAlgorithm_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./PointSizeFixedSizeAlgorithm.js */
      "OZJ8");
      /* harmony import */


      var _PointSizeSplatAlgorithm_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./PointSizeSplatAlgorithm.js */
      "J5Ut");
      /*
      All material copyright ESRI, All Rights Reserved, unless otherwise specified.
      See https://js.arcgis.com/4.18/esri/copyright.txt for details.
      */


      var e = {
        key: "type",
        base: _PointSizeAlgorithm_js__WEBPACK_IMPORTED_MODULE_0__["default"],
        typeMap: {
          "fixed-size": _PointSizeFixedSizeAlgorithm_js__WEBPACK_IMPORTED_MODULE_1__["default"],
          splat: _PointSizeSplatAlgorithm_js__WEBPACK_IMPORTED_MODULE_2__["default"]
        }
      };
      /***/
    },

    /***/
    "ofcG":
    /*!******************************************************************************!*\
      !*** ./node_modules/@arcgis/core/renderers/PointCloudUniqueValueRenderer.js ***!
      \******************************************************************************/

    /*! exports provided: default */

    /***/
    function ofcG(module, __webpack_exports__, __webpack_require__) {
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


      var _core_accessorSupport_decorators_subclass_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! ../core/accessorSupport/decorators/subclass.js */
      "04ZG");
      /* harmony import */


      var _core_urlUtils_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! ../core/urlUtils.js */
      "4EHJ");
      /* harmony import */


      var _core_uuid_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! ../core/uuid.js */
      "ju1D");
      /* harmony import */


      var _portal_support_resourceExtension_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
      /*! ../portal/support/resourceExtension.js */
      "9AIY");
      /* harmony import */


      var _PointCloudRenderer_js__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
      /*! ./PointCloudRenderer.js */
      "dzHX");
      /* harmony import */


      var _support_LegendOptions_js__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
      /*! ./support/LegendOptions.js */
      "1hFN");
      /* harmony import */


      var _support_pointCloud_ColorUniqueValueInfo_js__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
      /*! ./support/pointCloud/ColorUniqueValueInfo.js */
      "UBdR");
      /*
      All material copyright ESRI, All Rights Reserved, unless otherwise specified.
      See https://js.arcgis.com/4.18/esri/copyright.txt for details.
      */


      var l;

      var u = l = /*#__PURE__*/function (_PointCloudRenderer_j3) {
        _inherits(_class4, _PointCloudRenderer_j3);

        var _super11 = _createSuper(_class4);

        function _class4(e) {
          var _this10;

          _classCallCheck(this, _class4);

          _this10 = _super11.call(this, e), _this10.type = "point-cloud-unique-value", _this10.field = null, _this10.fieldTransformType = null, _this10.colorUniqueValueInfos = null, _this10.legendOptions = null;
          return _this10;
        }

        _createClass(_class4, [{
          key: "clone",
          value: function clone() {
            return new l(_objectSpread(_objectSpread({}, this.cloneProperties()), {}, {
              field: Object(_core_lang_js__WEBPACK_IMPORTED_MODULE_2__["clone"])(this.field),
              fieldTransformType: Object(_core_lang_js__WEBPACK_IMPORTED_MODULE_2__["clone"])(this.fieldTransformType),
              colorUniqueValueInfos: Object(_core_lang_js__WEBPACK_IMPORTED_MODULE_2__["clone"])(this.colorUniqueValueInfos),
              legendOptions: Object(_core_lang_js__WEBPACK_IMPORTED_MODULE_2__["clone"])(this.legendOptions)
            }));
          }
        }]);

        return _class4;
      }(_PointCloudRenderer_js__WEBPACK_IMPORTED_MODULE_11__["default"]);

      Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_enumeration_js__WEBPACK_IMPORTED_MODULE_6__["enumeration"])({
        pointCloudUniqueValueRenderer: "point-cloud-unique-value"
      })], u.prototype, "type", void 0), Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_5__["property"])({
        json: {
          write: !0
        },
        type: String
      })], u.prototype, "field", void 0), Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_5__["property"])({
        type: _PointCloudRenderer_js__WEBPACK_IMPORTED_MODULE_11__["default"].fieldTransformTypeKebabDict.apiValues,
        json: {
          type: _PointCloudRenderer_js__WEBPACK_IMPORTED_MODULE_11__["default"].fieldTransformTypeKebabDict.jsonValues,
          read: _PointCloudRenderer_js__WEBPACK_IMPORTED_MODULE_11__["default"].fieldTransformTypeKebabDict.read,
          write: _PointCloudRenderer_js__WEBPACK_IMPORTED_MODULE_11__["default"].fieldTransformTypeKebabDict.write
        }
      })], u.prototype, "fieldTransformType", void 0), Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_5__["property"])({
        type: [_support_pointCloud_ColorUniqueValueInfo_js__WEBPACK_IMPORTED_MODULE_13__["default"]],
        json: {
          write: !0
        }
      })], u.prototype, "colorUniqueValueInfos", void 0), Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_5__["property"])({
        type: _support_LegendOptions_js__WEBPACK_IMPORTED_MODULE_12__["default"],
        json: {
          write: !0
        }
      })], u.prototype, "legendOptions", void 0), u = l = Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_subclass_js__WEBPACK_IMPORTED_MODULE_7__["subclass"])("esri.renderers.PointCloudUniqueValueRenderer")], u);
      var a = u;
      /* harmony default export */

      __webpack_exports__["default"] = a;
      /***/
    },

    /***/
    "pxcj":
    /*!****************************************************************************!*\
      !*** ./node_modules/@arcgis/core/renderers/support/pointCloud/StopInfo.js ***!
      \****************************************************************************/

    /*! exports provided: default, StopInfo */

    /***/
    function pxcj(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "StopInfo", function () {
        return c;
      });
      /* harmony import */


      var _chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ../../../chunks/tslib.es6.js */
      "pO5D");
      /* harmony import */


      var _core_has_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ../../../core/has.js */
      "wSAH");
      /* harmony import */


      var _core_lang_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ../../../core/lang.js */
      "f/qv");
      /* harmony import */


      var _core_Logger_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ../../../core/Logger.js */
      "6S2I");
      /* harmony import */


      var _core_accessorSupport_ensureType_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ../../../core/accessorSupport/ensureType.js */
      "zqDF");
      /* harmony import */


      var _core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ../../../core/accessorSupport/decorators/property.js */
      "WbKI");
      /* harmony import */


      var _core_accessorSupport_decorators_subclass_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ../../../core/accessorSupport/decorators/subclass.js */
      "04ZG");
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

      var c = i = /*#__PURE__*/function (_core_JSONSupport_js_7) {
        _inherits(_class5, _core_JSONSupport_js_7);

        var _super12 = _createSuper(_class5);

        function _class5() {
          var _this11;

          _classCallCheck(this, _class5);

          _this11 = _super12.apply(this, arguments), _this11.label = null, _this11.value = 0, _this11.color = null;
          return _this11;
        }

        _createClass(_class5, [{
          key: "clone",
          value: function clone() {
            return new i({
              label: this.label,
              value: this.value,
              color: Object(_core_lang_js__WEBPACK_IMPORTED_MODULE_2__["clone"])(this.color)
            });
          }
        }]);

        return _class5;
      }(_core_JSONSupport_js__WEBPACK_IMPORTED_MODULE_10__["JSONSupport"]);

      Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_5__["property"])({
        type: String,
        json: {
          write: !0
        }
      })], c.prototype, "label", void 0), Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_5__["property"])({
        type: Number,
        nonNullable: !0,
        json: {
          write: !0
        }
      })], c.prototype, "value", void 0), Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_5__["property"])({
        type: _Color_js__WEBPACK_IMPORTED_MODULE_11__["default"],
        json: {
          type: [_core_accessorSupport_ensureType_js__WEBPACK_IMPORTED_MODULE_4__["Integer"]],
          write: !0
        }
      })], c.prototype, "color", void 0), c = i = Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_subclass_js__WEBPACK_IMPORTED_MODULE_6__["subclass"])("esri.renderers.support.pointCloud.StopInfo")], c);
      var u = c;
      /* harmony default export */

      __webpack_exports__["default"] = u;
      /***/
    }
  }]);
})();
//# sourceMappingURL=default~PointCloudLayer-js~views-3d-layers-PointCloudWorker-js-es5.js.map