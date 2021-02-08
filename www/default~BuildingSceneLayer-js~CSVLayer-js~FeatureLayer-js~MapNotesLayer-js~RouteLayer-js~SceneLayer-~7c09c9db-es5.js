(function () {
  function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

  function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

  function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

  function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

  function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

  function _get(target, property, receiver) { if (typeof Reflect !== "undefined" && Reflect.get) { _get = Reflect.get; } else { _get = function _get(target, property, receiver) { var base = _superPropBase(target, property); if (!base) return; var desc = Object.getOwnPropertyDescriptor(base, property); if (desc.get) { return desc.get.call(receiver); } return desc.value; }; } return _get(target, property, receiver || target); }

  function _superPropBase(object, property) { while (!Object.prototype.hasOwnProperty.call(object, property)) { object = _getPrototypeOf(object); if (object === null) break; } return object; }

  function _createForOfIteratorHelper(o, allowArrayLike) { var it; if (typeof Symbol === "undefined" || o[Symbol.iterator] == null) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function (_e22) { function e(_x12) { return _e22.apply(this, arguments); } e.toString = function () { return _e22.toString(); }; return e; }(function (e) { throw e; }), f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = o[Symbol.iterator](); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function (_e23) { function e(_x13) { return _e23.apply(this, arguments); } e.toString = function () { return _e23.toString(); }; return e; }(function (e) { didErr = true; err = e; }), f: function f() { try { if (!normalCompletion && it["return"] != null) it["return"](); } finally { if (didErr) throw err; } } }; }

  function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

  function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

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

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["default~BuildingSceneLayer-js~CSVLayer-js~FeatureLayer-js~MapNotesLayer-js~RouteLayer-js~SceneLayer-~7c09c9db"], {
    /***/
    "/b0d":
    /*!*****************************************************************!*\
      !*** ./node_modules/@arcgis/core/form/elements/inputs/Input.js ***!
      \*****************************************************************/

    /*! exports provided: default */

    /***/
    function b0d(module, __webpack_exports__, __webpack_require__) {
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
      /*
      All material copyright ESRI, All Rights Reserved, unless otherwise specified.
      See https://js.arcgis.com/4.18/esri/copyright.txt for details.
      */


      var e = /*#__PURE__*/function (_core_JSONSupport_js_) {
        _inherits(e, _core_JSONSupport_js_);

        var _super = _createSuper(e);

        function e(r) {
          var _this;

          _classCallCheck(this, e);

          _this = _super.call(this, r), _this.type = null;
          return _this;
        }

        return e;
      }(_core_JSONSupport_js__WEBPACK_IMPORTED_MODULE_9__["JSONSupport"]);

      Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_4__["property"])()], e.prototype, "type", void 0), e = Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_subclass_js__WEBPACK_IMPORTED_MODULE_5__["subclass"])("esri.form.elements.inputs.Input")], e);
      var p = e;
      /* harmony default export */

      __webpack_exports__["default"] = p;
      /***/
    },

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

      var i = _p = /*#__PURE__*/function (_core_JSONSupport_js_2) {
        _inherits(p, _core_JSONSupport_js_2);

        var _super2 = _createSuper(p);

        function p() {
          var _this2;

          _classCallCheck(this, p);

          _this2 = _super2.apply(this, arguments), _this2.name = null;
          return _this2;
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
    "1x4M":
    /*!********************************************************!*\
      !*** ./node_modules/@arcgis/core/form/FormTemplate.js ***!
      \********************************************************/

    /*! exports provided: default */

    /***/
    function x4M(module, __webpack_exports__, __webpack_require__) {
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


      var _core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ../core/accessorSupport/decorators/property.js */
      "WbKI");
      /* harmony import */


      var _core_accessorSupport_decorators_cast_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ../core/accessorSupport/decorators/cast.js */
      "Gj5k");
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


      var _core_JSONSupport_js__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
      /*! ../core/JSONSupport.js */
      "ag7Y");
      /* harmony import */


      var _ExpressionInfo_js__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
      /*! ./ExpressionInfo.js */
      "za7T");
      /* harmony import */


      var _support_elements_js__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(
      /*! ./support/elements.js */
      "aqJP");
      /* harmony import */


      var _elements_GroupElement_js__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(
      /*! ./elements/GroupElement.js */
      "uHfw");
      /*
      All material copyright ESRI, All Rights Reserved, unless otherwise specified.
      See https://js.arcgis.com/4.18/esri/copyright.txt for details.
      */


      var _j;

      var d = Object(_support_elements_js__WEBPACK_IMPORTED_MODULE_14__["buildTypeMaps"])(_elements_GroupElement_js__WEBPACK_IMPORTED_MODULE_15__["default"]);

      var E = _j = /*#__PURE__*/function (_core_JSONSupport_js_3) {
        _inherits(j, _core_JSONSupport_js_3);

        var _super3 = _createSuper(j);

        function j(e) {
          var _this3;

          _classCallCheck(this, j);

          _this3 = _super3.call(this, e), _this3.description = null, _this3.elements = null, _this3.expressionInfos = null, _this3.title = null;
          return _this3;
        }

        _createClass(j, [{
          key: "castElements",
          value: function castElements(e) {
            return Object(_support_elements_js__WEBPACK_IMPORTED_MODULE_14__["ensureType"])(e, d);
          }
        }, {
          key: "readElements",
          value: function readElements(e, r) {
            return Object(_support_elements_js__WEBPACK_IMPORTED_MODULE_14__["fromJSON"])(r.formElements, d);
          }
        }, {
          key: "writeElements",
          value: function writeElements(e, r) {
            r.formElements = Object(_support_elements_js__WEBPACK_IMPORTED_MODULE_14__["toJSON"])(e, d);
          }
        }, {
          key: "clone",
          value: function clone() {
            return new _j({
              description: this.description,
              expressionInfos: Object(_core_lang_js__WEBPACK_IMPORTED_MODULE_2__["clone"])(this.expressionInfos),
              elements: Object(_core_lang_js__WEBPACK_IMPORTED_MODULE_2__["clone"])(this.elements),
              title: this.title
            });
          }
        }]);

        return j;
      }(_core_JSONSupport_js__WEBPACK_IMPORTED_MODULE_12__["JSONSupport"]);

      Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_4__["property"])({
        type: String,
        json: {
          write: !0
        }
      })], E.prototype, "description", void 0), Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_4__["property"])({
        json: {
          write: !0
        }
      })], E.prototype, "elements", void 0), Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_cast_js__WEBPACK_IMPORTED_MODULE_5__["cast"])("elements")], E.prototype, "castElements", null), Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_reader_js__WEBPACK_IMPORTED_MODULE_6__["reader"])("elements", ["formElements"])], E.prototype, "readElements", null), Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_writer_js__WEBPACK_IMPORTED_MODULE_8__["writer"])("elements")], E.prototype, "writeElements", null), Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_4__["property"])({
        type: [_ExpressionInfo_js__WEBPACK_IMPORTED_MODULE_13__["default"]],
        json: {
          write: !0
        }
      })], E.prototype, "expressionInfos", void 0), Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_4__["property"])({
        type: String,
        json: {
          write: !0
        }
      })], E.prototype, "title", void 0), E = _j = Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_subclass_js__WEBPACK_IMPORTED_MODULE_7__["subclass"])("esri.form.FormTemplate")], E);
      var y = E;
      /* harmony default export */

      __webpack_exports__["default"] = y;
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


      var t = /*#__PURE__*/function (_core_JSONSupport_js_4) {
        _inherits(t, _core_JSONSupport_js_4);

        var _super4 = _createSuper(t);

        function t() {
          var _this4;

          _classCallCheck(this, t);

          _this4 = _super4.apply(this, arguments), _this4.type = null;
          return _this4;
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


      var _i;

      var e = _i = /*#__PURE__*/function (_core_JSONSupport_js_5) {
        _inherits(i, _core_JSONSupport_js_5);

        var _super5 = _createSuper(i);

        function i() {
          var _this5;

          _classCallCheck(this, i);

          _this5 = _super5.apply(this, arguments), _this5.statisticType = null, _this5.onStatisticField = null, _this5.onStatisticValueExpression = null;
          return _this5;
        }

        _createClass(i, [{
          key: "clone",
          value: function clone() {
            return new _i({
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
      })], e.prototype, "onStatisticValueExpression", void 0), e = _i = Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_subclass_js__WEBPACK_IMPORTED_MODULE_5__["subclass"])("esri.layers.support.OutStatistic")], e);
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
        var _this6 = this;

        return r ? r.map(function (r) {
          var o = new _LabelClass_js__WEBPACK_IMPORTED_MODULE_0__["default"]();

          if (o.read(r, i), o.labelExpression) {
            var e = t.fields || t.layerDefinition && t.layerDefinition.fields || _this6.fields;
            o.labelExpression = o.labelExpression.replace(n, function (n, r) {
              return "[".concat(function (e, n) {
                if (!n) return e;
                var r = e.toLowerCase();

                for (var _e2 = 0; _e2 < n.length; _e2++) {
                  var _t = n[_e2].name;
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
    "ILGv":
    /*!*****************************************************************!*\
      !*** ./node_modules/@arcgis/core/form/elements/FieldElement.js ***!
      \*****************************************************************/

    /*! exports provided: default */

    /***/
    function ILGv(module, __webpack_exports__, __webpack_require__) {
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


      var _layers_support_domains_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! ../../layers/support/domains.js */
      "WXCn");
      /* harmony import */


      var _Element_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
      /*! ./Element.js */
      "qKY0");
      /* harmony import */


      var _support_inputs_js__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
      /*! ./support/inputs.js */
      "ME//");
      /*
      All material copyright ESRI, All Rights Reserved, unless otherwise specified.
      See https://js.arcgis.com/4.18/esri/copyright.txt for details.
      */


      var _n;

      var l = _n = /*#__PURE__*/function (_Element_js__WEBPACK_) {
        _inherits(n, _Element_js__WEBPACK_);

        var _super6 = _createSuper(n);

        function n(e) {
          var _this7;

          _classCallCheck(this, n);

          _this7 = _super6.call(this, e), _this7.domain = null, _this7.editable = !0, _this7.fieldName = null, _this7.hint = null, _this7.input = null, _this7.requiredExpression = null, _this7.type = "field";
          return _this7;
        }

        _createClass(n, [{
          key: "clone",
          value: function clone() {
            return new _n({
              description: this.description,
              domain: this.domain,
              editable: this.editable,
              fieldName: this.fieldName,
              hint: this.hint,
              input: this.input,
              label: this.label,
              requiredExpression: this.requiredExpression,
              visibilityExpression: this.visibilityExpression
            });
          }
        }]);

        return n;
      }(_Element_js__WEBPACK_IMPORTED_MODULE_10__["Element"]);

      Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_4__["property"])({
        types: _layers_support_domains_js__WEBPACK_IMPORTED_MODULE_9__["types"],
        json: {
          read: {
            reader: _layers_support_domains_js__WEBPACK_IMPORTED_MODULE_9__["fromJSON"]
          },
          write: !0
        }
      })], l.prototype, "domain", void 0), Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_4__["property"])({
        type: Boolean,
        json: {
          "default": !0,
          write: !0
        }
      })], l.prototype, "editable", void 0), Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_4__["property"])({
        type: String,
        json: {
          write: !0
        }
      })], l.prototype, "fieldName", void 0), Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_4__["property"])({
        type: String,
        json: {
          write: !0
        }
      })], l.prototype, "hint", void 0), Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_4__["property"])({
        types: _support_inputs_js__WEBPACK_IMPORTED_MODULE_11__["types"],
        json: {
          read: {
            source: "inputType"
          },
          write: {
            target: "inputType"
          }
        }
      })], l.prototype, "input", void 0), Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_4__["property"])({
        type: String,
        json: {
          write: !0
        }
      })], l.prototype, "requiredExpression", void 0), Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_4__["property"])({
        type: String,
        json: {
          read: !1,
          write: !0
        }
      })], l.prototype, "type", void 0), l = _n = Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_subclass_js__WEBPACK_IMPORTED_MODULE_5__["subclass"])("esri.form.elements.FieldElement")], l);
      var d = l;
      /* harmony default export */

      __webpack_exports__["default"] = d;
      /***/
    },

    /***/
    "L+uT":
    /*!*********************************************************************!*\
      !*** ./node_modules/@arcgis/core/layers/support/fieldProperties.js ***!
      \*********************************************************************/

    /*! exports provided: defineFieldProperties */

    /***/
    function LUT(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "defineFieldProperties", function () {
        return l;
      });
      /* harmony import */


      var _core_Logger_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ../../core/Logger.js */
      "6S2I");
      /* harmony import */


      var _fieldUtils_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./fieldUtils.js */
      "wdpY");
      /* harmony import */


      var _Field_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./Field.js */
      "ofM5");
      /*
      All material copyright ESRI, All Rights Reserved, unless otherwise specified.
      See https://js.arcgis.com/4.18/esri/copyright.txt for details.
      */


      var s = _core_Logger_js__WEBPACK_IMPORTED_MODULE_0__["default"].getLogger("esri.layers.support.fieldProperties");

      function l() {
        return {
          fields: {
            type: [_Field_js__WEBPACK_IMPORTED_MODULE_2__["default"]],
            value: null
          },
          outFields: {
            type: [String],
            dependsOn: ["fields"],
            json: {
              read: !1
            },
            set: function set(e) {
              this._userOutFields = e, this.notifyChange("outFields");
            },
            get: function get() {
              var e = this._userOutFields;
              if (!e || !e.length) return null;
              if (e.includes("*")) return ["*"];
              if (!this.fields) return e;

              var _iterator = _createForOfIteratorHelper(e),
                  _step;

              try {
                for (_iterator.s(); !(_step = _iterator.n()).done;) {
                  var t = _step.value;
                  Object(_fieldUtils_js__WEBPACK_IMPORTED_MODULE_1__["hasField"])(this.fields, t) || s.error("field-attributes-layer:invalid-field", "Invalid field ".concat(t, " found in outFields"), {
                    layer: this,
                    outFields: e
                  });
                }
              } catch (err) {
                _iterator.e(err);
              } finally {
                _iterator.f();
              }

              return Object(_fieldUtils_js__WEBPACK_IMPORTED_MODULE_1__["fixFields"])(this.fields, e);
            }
          }
        };
      }
      /***/

    },

    /***/
    "ME//":
    /*!*******************************************************************!*\
      !*** ./node_modules/@arcgis/core/form/elements/support/inputs.js ***!
      \*******************************************************************/

    /*! exports provided: types */

    /***/
    function ME(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "types", function () {
        return s;
      });
      /* harmony import */


      var _inputs_Input_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ../inputs/Input.js */
      "/b0d");
      /* harmony import */


      var _inputs_BarcodeScannerInput_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ../inputs/BarcodeScannerInput.js */
      "f/7W");
      /* harmony import */


      var _inputs_ComboBoxInput_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ../inputs/ComboBoxInput.js */
      "he6E");
      /* harmony import */


      var _inputs_DateTimePickerInput_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ../inputs/DateTimePickerInput.js */
      "a/eU");
      /* harmony import */


      var _inputs_RadioButtonsInput_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ../inputs/RadioButtonsInput.js */
      "c9br");
      /* harmony import */


      var _inputs_TextAreaInput_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ../inputs/TextAreaInput.js */
      "wO9+");
      /* harmony import */


      var _inputs_TextBoxInput_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ../inputs/TextBoxInput.js */
      "on0I");
      /*
      All material copyright ESRI, All Rights Reserved, unless otherwise specified.
      See https://js.arcgis.com/4.18/esri/copyright.txt for details.
      */


      var s = {
        base: _inputs_Input_js__WEBPACK_IMPORTED_MODULE_0__["default"],
        key: "type",
        typeMap: {
          "barcode-scanner": _inputs_BarcodeScannerInput_js__WEBPACK_IMPORTED_MODULE_1__["default"],
          "combo-box": _inputs_ComboBoxInput_js__WEBPACK_IMPORTED_MODULE_2__["default"],
          "datetime-picker": _inputs_DateTimePickerInput_js__WEBPACK_IMPORTED_MODULE_3__["default"],
          "radio-buttons": _inputs_RadioButtonsInput_js__WEBPACK_IMPORTED_MODULE_4__["default"],
          "text-area": _inputs_TextAreaInput_js__WEBPACK_IMPORTED_MODULE_5__["default"],
          "text-box": _inputs_TextBoxInput_js__WEBPACK_IMPORTED_MODULE_6__["default"]
        }
      };
      /***/
    },

    /***/
    "W9Wu":
    /*!**********************************************************!*\
      !*** ./node_modules/@arcgis/core/layers/FeatureLayer.js ***!
      \**********************************************************/

    /*! exports provided: default */

    /***/
    function W9Wu(module, __webpack_exports__, __webpack_require__) {
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


      var _core_object_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ../core/object.js */
      "nR38");
      /* harmony import */


      var _core_maybe_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ../core/maybe.js */
      "srIe");
      /* harmony import */


      var _core_Logger_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ../core/Logger.js */
      "6S2I");
      /* harmony import */


      var _core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ../core/accessorSupport/decorators/property.js */
      "WbKI");
      /* harmony import */


      var _core_accessorSupport_decorators_cast_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ../core/accessorSupport/decorators/cast.js */
      "Gj5k");
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


      var _core_Collection_js__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(
      /*! ../core/Collection.js */
      "LE9a");
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


      var _core_Handles_js__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(
      /*! ../core/Handles.js */
      "r0DZ");
      /* harmony import */


      var _Layer_js__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(
      /*! ./Layer.js */
      "pqNC");
      /* harmony import */


      var _core_MultiOriginJSONSupport_js__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(
      /*! ../core/MultiOriginJSONSupport.js */
      "5pQd");
      /* harmony import */


      var _support_arcgisLayerUrl_js__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(
      /*! ./support/arcgisLayerUrl.js */
      "VLTf");
      /* harmony import */


      var _geometry_HeightModelInfo_js__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(
      /*! ../geometry/HeightModelInfo.js */
      "5k2a");
      /* harmony import */


      var _support_commonProperties_js__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(
      /*! ./support/commonProperties.js */
      "IvSi");
      /* harmony import */


      var _mixins_OperationalLayer_js__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(
      /*! ./mixins/OperationalLayer.js */
      "uRH/");
      /* harmony import */


      var _renderers_Renderer_js__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(
      /*! ../renderers/Renderer.js */
      "ZnuT");
      /* harmony import */


      var _renderers_ClassBreaksRenderer_js__WEBPACK_IMPORTED_MODULE_32__ = __webpack_require__(
      /*! ../renderers/ClassBreaksRenderer.js */
      "tCO6");
      /* harmony import */


      var _renderers_UniqueValueRenderer_js__WEBPACK_IMPORTED_MODULE_33__ = __webpack_require__(
      /*! ../renderers/UniqueValueRenderer.js */
      "2gBT");
      /* harmony import */


      var _renderers_DictionaryRenderer_js__WEBPACK_IMPORTED_MODULE_34__ = __webpack_require__(
      /*! ../renderers/DictionaryRenderer.js */
      "JhoD");
      /* harmony import */


      var _renderers_DotDensityRenderer_js__WEBPACK_IMPORTED_MODULE_35__ = __webpack_require__(
      /*! ../renderers/DotDensityRenderer.js */
      "tI3Y");
      /* harmony import */


      var _renderers_HeatmapRenderer_js__WEBPACK_IMPORTED_MODULE_36__ = __webpack_require__(
      /*! ../renderers/HeatmapRenderer.js */
      "R4xK");
      /* harmony import */


      var _renderers_SimpleRenderer_js__WEBPACK_IMPORTED_MODULE_37__ = __webpack_require__(
      /*! ../renderers/SimpleRenderer.js */
      "/1dM");
      /* harmony import */


      var _renderers_support_types_js__WEBPACK_IMPORTED_MODULE_38__ = __webpack_require__(
      /*! ../renderers/support/types.js */
      "XNvV");
      /* harmony import */


      var _renderers_support_jsonUtils_js__WEBPACK_IMPORTED_MODULE_39__ = __webpack_require__(
      /*! ../renderers/support/jsonUtils.js */
      "+Xal");
      /* harmony import */


      var _support_FieldsIndex_js__WEBPACK_IMPORTED_MODULE_40__ = __webpack_require__(
      /*! ./support/FieldsIndex.js */
      "gLc9");
      /* harmony import */


      var _form_FormTemplate_js__WEBPACK_IMPORTED_MODULE_41__ = __webpack_require__(
      /*! ../form/FormTemplate.js */
      "1x4M");
      /* harmony import */


      var _tasks_support_FeatureSet_js__WEBPACK_IMPORTED_MODULE_42__ = __webpack_require__(
      /*! ../tasks/support/FeatureSet.js */
      "8prj");
      /* harmony import */


      var _graphics_sources_MemorySource_js__WEBPACK_IMPORTED_MODULE_43__ = __webpack_require__(
      /*! ./graphics/sources/MemorySource.js */
      "kY3H");
      /* harmony import */


      var _mixins_ArcGISService_js__WEBPACK_IMPORTED_MODULE_44__ = __webpack_require__(
      /*! ./mixins/ArcGISService.js */
      "PVlI");
      /* harmony import */


      var _mixins_BlendLayer_js__WEBPACK_IMPORTED_MODULE_45__ = __webpack_require__(
      /*! ./mixins/BlendLayer.js */
      "mXvl");
      /* harmony import */


      var _mixins_CustomParametersMixin_js__WEBPACK_IMPORTED_MODULE_46__ = __webpack_require__(
      /*! ./mixins/CustomParametersMixin.js */
      "iyhF");
      /* harmony import */


      var _mixins_PortalLayer_js__WEBPACK_IMPORTED_MODULE_47__ = __webpack_require__(
      /*! ./mixins/PortalLayer.js */
      "DbUH");
      /* harmony import */


      var _mixins_RefreshableLayer_js__WEBPACK_IMPORTED_MODULE_48__ = __webpack_require__(
      /*! ./mixins/RefreshableLayer.js */
      "jhcG");
      /* harmony import */


      var _mixins_ScaleRangeLayer_js__WEBPACK_IMPORTED_MODULE_49__ = __webpack_require__(
      /*! ./mixins/ScaleRangeLayer.js */
      "WmKv");
      /* harmony import */


      var _support_TimeInfo_js__WEBPACK_IMPORTED_MODULE_50__ = __webpack_require__(
      /*! ./support/TimeInfo.js */
      "+AYZ");
      /* harmony import */


      var _mixins_TemporalLayer_js__WEBPACK_IMPORTED_MODULE_51__ = __webpack_require__(
      /*! ./mixins/TemporalLayer.js */
      "YBpl");
      /* harmony import */


      var _support_FeatureIndex_js__WEBPACK_IMPORTED_MODULE_52__ = __webpack_require__(
      /*! ./support/FeatureIndex.js */
      "eDnu");
      /* harmony import */


      var _support_FeatureReduction_js__WEBPACK_IMPORTED_MODULE_53__ = __webpack_require__(
      /*! ./support/FeatureReduction.js */
      "7MGP");
      /* harmony import */


      var _support_LabelClass_js__WEBPACK_IMPORTED_MODULE_54__ = __webpack_require__(
      /*! ./support/LabelClass.js */
      "wkZP");
      /* harmony import */


      var _support_FeatureReductionCluster_js__WEBPACK_IMPORTED_MODULE_55__ = __webpack_require__(
      /*! ./support/FeatureReductionCluster.js */
      "o9qb");
      /* harmony import */


      var _support_FeatureReductionSelection_js__WEBPACK_IMPORTED_MODULE_56__ = __webpack_require__(
      /*! ./support/FeatureReductionSelection.js */
      "kbDD");
      /* harmony import */


      var _support_featureReductionUtils_js__WEBPACK_IMPORTED_MODULE_57__ = __webpack_require__(
      /*! ./support/featureReductionUtils.js */
      "Bbcg");
      /* harmony import */


      var _support_FeatureTemplate_js__WEBPACK_IMPORTED_MODULE_58__ = __webpack_require__(
      /*! ./support/FeatureTemplate.js */
      "rOQw");
      /* harmony import */


      var _support_FeatureType_js__WEBPACK_IMPORTED_MODULE_59__ = __webpack_require__(
      /*! ./support/FeatureType.js */
      "orEy");
      /* harmony import */


      var _support_fieldProperties_js__WEBPACK_IMPORTED_MODULE_60__ = __webpack_require__(
      /*! ./support/fieldProperties.js */
      "L+uT");
      /* harmony import */


      var _support_labelingInfo_js__WEBPACK_IMPORTED_MODULE_61__ = __webpack_require__(
      /*! ./support/labelingInfo.js */
      "EOvV");
      /* harmony import */


      var _support_Relationship_js__WEBPACK_IMPORTED_MODULE_62__ = __webpack_require__(
      /*! ./support/Relationship.js */
      "uOKz");
      /* harmony import */


      var _chunks_DataLayerSource_js__WEBPACK_IMPORTED_MODULE_63__ = __webpack_require__(
      /*! ../chunks/DataLayerSource.js */
      "s7US");
      /* harmony import */


      var _renderers_support_styleUtils_js__WEBPACK_IMPORTED_MODULE_64__ = __webpack_require__(
      /*! ../renderers/support/styleUtils.js */
      "YOx9");
      /* harmony import */


      var _support_popupUtils_js__WEBPACK_IMPORTED_MODULE_65__ = __webpack_require__(
      /*! ../support/popupUtils.js */
      "9Ruv");
      /* harmony import */


      var _tasks_support_AttachmentQuery_js__WEBPACK_IMPORTED_MODULE_66__ = __webpack_require__(
      /*! ../tasks/support/AttachmentQuery.js */
      "tSEa");
      /* harmony import */


      var _tasks_support_Query_js__WEBPACK_IMPORTED_MODULE_67__ = __webpack_require__(
      /*! ../tasks/support/Query.js */
      "xk++");
      /* harmony import */


      var _tasks_support_RelationshipQuery_js__WEBPACK_IMPORTED_MODULE_68__ = __webpack_require__(
      /*! ../tasks/support/RelationshipQuery.js */
      "n6Nx");
      /*
      All material copyright ESRI, All Rights Reserved, unless otherwise specified.
      See https://js.arcgis.com/4.18/esri/copyright.txt for details.
      */


      var Ee = new _core_jsonMap_js__WEBPACK_IMPORTED_MODULE_7__["JSONMap"]({
        esriGeometryPoint: "point",
        esriGeometryMultipoint: "multipoint",
        esriGeometryPolyline: "polyline",
        esriGeometryPolygon: "polygon",
        esriGeometryMultiPatch: "multipatch"
      }),
          Te = {
        name: "supportsName",
        size: "supportsSize",
        contentType: "supportsContentType",
        keywords: "supportsKeywords",
        exifInfo: "supportsExifInfo"
      },
          Me = "FeatureLayer",
          Re = _core_Logger_js__WEBPACK_IMPORTED_MODULE_4__["default"].getLogger("esri.layers.FeatureLayer");

      function Ce(e) {
        return e && e instanceof _core_Collection_js__WEBPACK_IMPORTED_MODULE_19__["default"];
      }

      function Oe(e, t, r) {
        return !!(e && e.hasOwnProperty(t) ? e[t] : r);
      }

      function Ae(e, t, r) {
        return e && e.hasOwnProperty(t) ? e[t] : r;
      }

      var _e = Object(_support_fieldProperties_js__WEBPACK_IMPORTED_MODULE_60__["defineFieldProperties"])();

      function Le(e, t, r) {
        var i = !(null == r || !r.writeLayerSchema);
        return {
          enabled: i,
          ignoreOrigin: i
        };
      }

      var Pe = /*#__PURE__*/function (_Object) {
        _inherits(Pe, _Object);

        var _super7 = _createSuper(Pe);

        function Pe() {
          var _this8;

          _classCallCheck(this, Pe);

          for (var _len = arguments.length, e = new Array(_len), _key = 0; _key < _len; _key++) {
            e[_key] = arguments[_key];
          }

          _this8 = _super7.call.apply(_super7, [this].concat(e)), _this8._handles = new _core_Handles_js__WEBPACK_IMPORTED_MODULE_24__["default"](), _this8.capabilities = null, _this8.charts = null, _this8.copyright = null, _this8.displayField = null, _this8.definitionExpression = null, _this8.dynamicDataSource = null, _this8.editFieldsInfo = null, _this8.editingEnabled = !0, _this8.editingInfo = null, _this8.elevationInfo = null, _this8.featureReduction = null, _this8.fields = null, _this8.formTemplate = null, _this8.fullExtent = null, _this8.gdbVersion = null, _this8.geometryProperties = null, _this8.geometryType = null, _this8.hasM = void 0, _this8.hasZ = void 0, _this8.heightModelInfo = null, _this8.historicMoment = null, _this8.isTable = !1, _this8.labelsVisible = !0, _this8.labelingInfo = null, _this8.layerId = void 0, _this8.legendEnabled = !0, _this8.minScale = 0, _this8.maxScale = 0, _this8.globalIdField = null, _this8.objectIdField = null, _this8.outFields = null, _this8.path = null, _this8.popupEnabled = !0, _this8.popupTemplate = null, _this8.relationships = null, _this8.sourceJSON = null, _this8.returnM = void 0, _this8.returnZ = void 0, _this8.screenSizePerspectiveEnabled = !0, _this8.serviceDefinitionExpression = null, _this8.spatialReference = _geometry_SpatialReference_js__WEBPACK_IMPORTED_MODULE_17__["default"].WGS84, _this8.templates = null, _this8.timeInfo = null, _this8.title = null, _this8.sublayerTitleMode = "item-title", _this8.trackIdField = null, _this8.type = "feature", _this8.typeIdField = null, _this8.types = null, _this8.indexes = new (_core_Collection_js__WEBPACK_IMPORTED_MODULE_19__["default"].ofType(_support_FeatureIndex_js__WEBPACK_IMPORTED_MODULE_52__["FeatureIndex"]))(), _this8.userIsAdmin = !1, _this8.version = void 0, _this8.visible = !0;
          return _this8;
        }

        _createClass(Pe, [{
          key: "destroy",
          value: function destroy() {
            var e;
            null == (e = this.source) || e.destroy(), this._handles && (this._handles.destroy(), this._handles = null);
          }
        }, {
          key: "normalizeCtorArgs",
          value: function normalizeCtorArgs(e, t) {
            return "string" == typeof e ? _objectSpread({
              url: e
            }, t) : e;
          }
        }, {
          key: "load",
          value: function load(e) {
            var _this9 = this;

            var t = Object(_core_maybe_js__WEBPACK_IMPORTED_MODULE_3__["isSome"])(e) ? e.signal : null;
            if (this.portalItem && this.portalItem.loaded && this.source) return void this.addResolvingPromise(this.createGraphicsSource(t).then(function (e) {
              return _this9._initLayerProperties(e);
            }));
            var i = this.loadFromPortal({
              supportedTypes: ["Feature Service", "Feature Collection"]
            }, e)["catch"](function (e) {
              return e;
            }).then( /*#__PURE__*/_asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
              var _e3;

              return regeneratorRuntime.wrap(function _callee$(_context) {
                while (1) {
                  switch (_context.prev = _context.next) {
                    case 0:
                      if (!(_this9.url && null == _this9.layerId && /FeatureServer|MapServer\/*$/i.test(_this9.url))) {
                        _context.next = 5;
                        break;
                      }

                      _context.next = 3;
                      return _this9._fetchFirstLayerId(t);

                    case 3:
                      _e3 = _context.sent;
                      null != _e3 && (_this9.layerId = _e3);

                    case 5:
                      if (!(!_this9.url && !_this9._hasMemorySource())) {
                        _context.next = 7;
                        break;
                      }

                      throw new _core_Error_js__WEBPACK_IMPORTED_MODULE_12__["default"]("feature-layer:missing-url-or-source", "Feature layer must be created with either a url or a source");

                    case 7:
                      _context.t0 = _this9;
                      _context.next = 10;
                      return _this9.createGraphicsSource(t);

                    case 10:
                      _context.t1 = _context.sent;
                      return _context.abrupt("return", _context.t0._initLayerProperties.call(_context.t0, _context.t1));

                    case 12:
                    case "end":
                      return _context.stop();
                  }
                }
              }, _callee);
            })));
            return this.addResolvingPromise(i), Object(_core_promiseUtils_js__WEBPACK_IMPORTED_MODULE_16__["resolve"])(this);
          }
        }, {
          key: "readCapabilities",
          value: function readCapabilities(e, t) {
            return t = t.layerDefinition || t, {
              attachment: this._readAttachmentCapabilities(t.attachmentProperties),
              data: this._readDataCapabilities(t),
              metadata: this._readMetadataCapabilities(t),
              operations: this._readOperationsCapabilities(t.capabilities || e, t),
              query: this._readQueryCapabilities(t),
              queryRelated: this._readQueryRelatedCapabilities(t),
              editing: this._readEditingCapabilities(t)
            };
          }
        }, {
          key: "createQueryVersion",
          get: function get() {
            return this.definitionExpression, this.dynamicDataSource, this.timeExtent, this.timeOffset, this.geometryType, this.gdbVersion, this.historicMoment, this.returnZ, this.capabilities, this.returnM, (this._get("createQueryVersion") || 0) + 1;
          }
        }, {
          key: "readEditingEnabled",
          value: function readEditingEnabled(e, t) {
            return this._readEditingEnabled(t, !1);
          }
        }, {
          key: "readEditingEnabledFromWebMap",
          value: function readEditingEnabledFromWebMap(e, t, r) {
            return this._readEditingEnabled(t, !0, r);
          }
        }, {
          key: "writeEditingEnabled",
          value: function writeEditingEnabled(e, t) {
            this._writeEditingEnabled(e, t, !1);
          }
        }, {
          key: "writeEditingEnabledToWebMap",
          value: function writeEditingEnabledToWebMap(e, t, r, i) {
            this._writeEditingEnabled(e, t, !0, i);
          }
        }, {
          key: "readEditingInfo",
          value: function readEditingInfo(e, t) {
            var r = t.editingInfo;
            return r ? {
              lastEditDate: null != r.lastEditDate ? new Date(r.lastEditDate) : null
            } : null;
          }
        }, {
          key: "readFeatureReduction",
          value: function readFeatureReduction(e, t) {
            return Object(_support_featureReductionUtils_js__WEBPACK_IMPORTED_MODULE_57__["read"])(e, t);
          }
        }, {
          key: "writeWebSceneFeatureReduction",
          value: function writeWebSceneFeatureReduction(e, t, r, i) {
            Object(_support_featureReductionUtils_js__WEBPACK_IMPORTED_MODULE_57__["writeTarget"])(e, t, "layerDefinition.featureReduction", i);
          }
        }, {
          key: "fieldsIndex",
          get: function get() {
            return new _support_FieldsIndex_js__WEBPACK_IMPORTED_MODULE_40__["default"](this.fields || []);
          }
        }, {
          key: "readIsTable",
          value: function readIsTable(e, t) {
            return "Table" === (t = t && t.layerDefinition || t).type || !t.geometryType;
          }
        }, {
          key: "writeIsTable",
          value: function writeIsTable(e, r, i, o) {
            null != o && o.writeLayerSchema && Object(_core_object_js__WEBPACK_IMPORTED_MODULE_2__["setDeepValue"])(i, e ? "Table" : "Feature Layer", r);
          }
        }, {
          key: "readMinScale",
          value: function readMinScale(e, t) {
            return t.effectiveMinScale || e || 0;
          }
        }, {
          key: "readMaxScale",
          value: function readMaxScale(e, t) {
            return t.effectiveMaxScale || e || 0;
          }
        }, {
          key: "readGlobalIdFieldFromService",
          value: function readGlobalIdFieldFromService(e, t) {
            if ((t = t.layerDefinition || t).globalIdField) return t.globalIdField;

            if (t.fields) {
              var _iterator2 = _createForOfIteratorHelper(t.fields),
                  _step2;

              try {
                for (_iterator2.s(); !(_step2 = _iterator2.n()).done;) {
                  var _e4 = _step2.value;
                  if ("esriFieldTypeGlobalID" === _e4.type) return _e4.name;
                }
              } catch (err) {
                _iterator2.e(err);
              } finally {
                _iterator2.f();
              }
            }
          }
        }, {
          key: "readObjectIdFieldFromService",
          value: function readObjectIdFieldFromService(e, t) {
            if ((t = t.layerDefinition || t).objectIdField) return t.objectIdField;

            if (t.fields) {
              var _iterator3 = _createForOfIteratorHelper(t.fields),
                  _step3;

              try {
                for (_iterator3.s(); !(_step3 = _iterator3.n()).done;) {
                  var _e5 = _step3.value;
                  if ("esriFieldTypeOID" === _e5.type) return _e5.name;
                }
              } catch (err) {
                _iterator3.e(err);
              } finally {
                _iterator3.f();
              }
            }
          }
        }, {
          key: "parsedUrl",
          get: function get() {
            var e = this.url ? Object(_core_urlUtils_js__WEBPACK_IMPORTED_MODULE_13__["urlToObject"])(this.url) : null;
            return null != e && (null != this.dynamicDataSource ? e.path = Object(_core_urlUtils_js__WEBPACK_IMPORTED_MODULE_13__["join"])(e.path, "dynamicLayer") : null != this.layerId && (e.path = Object(_core_urlUtils_js__WEBPACK_IMPORTED_MODULE_13__["join"])(e.path, this.layerId.toString()))), e;
          }
        }, {
          key: "defaultPopupTemplate",
          get: function get() {
            return this.createPopupTemplate();
          }
        }, {
          key: "renderer",
          set: function set(e) {
            Object(_support_fieldUtils_js__WEBPACK_IMPORTED_MODULE_20__["fixRendererFields"])(e, this.fields), this._set("renderer", e);
          }
        }, {
          key: "readRenderer",
          value: function readRenderer(e, t, r) {
            var i = (t = t.layerDefinition || t).drawingInfo && t.drawingInfo.renderer || void 0;

            if (i) {
              var _e6 = Object(_renderers_support_jsonUtils_js__WEBPACK_IMPORTED_MODULE_39__["read"])(i, t, r) || void 0;

              return _e6 || Re.error("Failed to create renderer", {
                rendererDefinition: t.drawingInfo.renderer,
                layer: this,
                context: r
              }), _e6;
            }

            if (t.defaultSymbol) return t.types && t.types.length ? new _renderers_UniqueValueRenderer_js__WEBPACK_IMPORTED_MODULE_33__["default"]({
              defaultSymbol: Qe(t.defaultSymbol, t, r),
              field: t.typeIdField,
              uniqueValueInfos: t.types.map(function (e) {
                return {
                  id: e.id,
                  symbol: Qe(e.symbol, e, r)
                };
              })
            }) : new _renderers_SimpleRenderer_js__WEBPACK_IMPORTED_MODULE_37__["default"]({
              symbol: Qe(t.defaultSymbol, t, r)
            });
          }
        }, {
          key: "source",
          set: function set(e) {
            var t = this._get("source");

            t !== e && (Ce(t) && this._resetMemorySource(t), Ce(e) && this._initMemorySource(e), this._set("source", e));
          }
        }, {
          key: "castSource",
          value: function castSource(e) {
            return e ? Array.isArray(e) || e instanceof _core_Collection_js__WEBPACK_IMPORTED_MODULE_19__["default"] ? new _graphics_sources_MemorySource_js__WEBPACK_IMPORTED_MODULE_43__["default"]({
              layer: this,
              items: e
            }) : e : null;
          }
        }, {
          key: "readSource",
          value: function readSource(e, t) {
            var r = _tasks_support_FeatureSet_js__WEBPACK_IMPORTED_MODULE_42__["default"].fromJSON(t.featureSet);

            return new _graphics_sources_MemorySource_js__WEBPACK_IMPORTED_MODULE_43__["default"]({
              layer: this,
              items: r && r.features || []
            });
          }
        }, {
          key: "readServiceDefinitionExpression",
          value: function readServiceDefinitionExpression(e, t) {
            return t.definitionQuery || t.definitionExpression;
          }
        }, {
          key: "readTemplates",
          value: function readTemplates(e, t) {
            var r = t.editFieldsInfo,
                i = r && r.creatorField,
                o = r && r.editorField;
            return e = e && e.map(function (e) {
              return _support_FeatureTemplate_js__WEBPACK_IMPORTED_MODULE_58__["default"].fromJSON(e);
            }), this._fixTemplates(e, i), this._fixTemplates(e, o), e;
          }
        }, {
          key: "readTitle",
          value: function readTitle(e, t) {
            var i = t.layerDefinition && t.layerDefinition.name || t.name,
                o = t.title || t.layerDefinition && t.layerDefinition.title;

            if (i) {
              var _e7 = this.portalItem && this.portalItem.title;

              if ("item-title" === this.sublayerTitleMode) return this.url ? Object(_support_arcgisLayerUrl_js__WEBPACK_IMPORTED_MODULE_27__["titleFromUrlAndName"])(this.url, i) : i;
              var _t2 = i;

              if (!_t2 && this.url) {
                var _e8 = Object(_support_arcgisLayerUrl_js__WEBPACK_IMPORTED_MODULE_27__["parse"])(this.url);

                Object(_core_maybe_js__WEBPACK_IMPORTED_MODULE_3__["isSome"])(_e8) && (_t2 = _e8.title);
              }

              if (!_t2) return;
              return "item-title-and-service-name" === this.sublayerTitleMode && _e7 && _e7 !== _t2 && (_t2 = _e7 + " - " + _t2), Object(_support_arcgisLayerUrl_js__WEBPACK_IMPORTED_MODULE_27__["cleanTitle"])(_t2);
            }

            if ("item-title" === this.sublayerTitleMode && o) return o;
          }
        }, {
          key: "readTitleFromWebMap",
          value: function readTitleFromWebMap(e, t) {
            return t.title || t.layerDefinition && t.layerDefinition.name;
          }
        }, {
          key: "readTypeIdField",
          value: function readTypeIdField(e, t) {
            var r = (t = t.layerDefinition || t).typeIdField;

            if (r) {
              var _e9 = Object(_support_fieldUtils_js__WEBPACK_IMPORTED_MODULE_20__["getField"])(t.fields, r);

              _e9 && (r = _e9.name);
            }

            return r;
          }
        }, {
          key: "readTypes",
          value: function readTypes(e, t) {
            var _this10 = this;

            e = (t = t.layerDefinition || t).types;
            var r = t.editFieldsInfo,
                i = r && r.creatorField,
                o = r && r.editorField;
            return e && e.map(function (e) {
              return e = _support_FeatureType_js__WEBPACK_IMPORTED_MODULE_59__["default"].fromJSON(e), _this10._fixTemplates(e.templates, i), _this10._fixTemplates(e.templates, o), e;
            });
          }
        }, {
          key: "url",
          set: function set(e) {
            var t = Object(_support_arcgisLayerUrl_js__WEBPACK_IMPORTED_MODULE_27__["sanitizeUrlWithLayerId"])(this, e, Re);
            this._set("url", t.url), null != t.layerId && this._set("layerId", t.layerId);
          }
        }, {
          key: "writeUrl",
          value: function writeUrl(e, t, r, i) {
            Object(_support_arcgisLayerUrl_js__WEBPACK_IMPORTED_MODULE_27__["writeUrlWithLayerId"])(this, e, null, t, i);
          }
        }, {
          key: "readVersion",
          value: function readVersion(e, t) {
            return t.currentVersion ? t.currentVersion : t.hasOwnProperty("capabilities") || t.hasOwnProperty("drawingInfo") || t.hasOwnProperty("hasAttachments") || t.hasOwnProperty("htmlPopupType") || t.hasOwnProperty("relationships") || t.hasOwnProperty("timeInfo") || t.hasOwnProperty("typeIdField") || t.hasOwnProperty("types") ? 10 : 9.3;
          }
        }, {
          key: "readVisible",
          value: function readVisible(e, t) {
            return t.layerDefinition && null != t.layerDefinition.defaultVisibility ? !!t.layerDefinition.defaultVisibility : null != t.visibility ? !!t.visibility : void 0;
          }
        }, {
          key: "addAttachment",
          value: function addAttachment(e, t) {
            var _this11 = this;

            return this.load().then(function () {
              return _this11._checkAttachmentSupport(e);
            }).then(function () {
              if (!("addAttachment" in _this11.source)) throw new _core_Error_js__WEBPACK_IMPORTED_MODULE_12__["default"](Me, "Layer source does not support addAttachment capability");
              return _this11.source.addAttachment(e, t);
            });
          }
        }, {
          key: "updateAttachment",
          value: function updateAttachment(e, t, r) {
            var _this12 = this;

            return this.load().then(function () {
              return _this12._checkAttachmentSupport(e);
            }).then(function () {
              if (!("updateAttachment" in _this12.source)) throw new _core_Error_js__WEBPACK_IMPORTED_MODULE_12__["default"](Me, "Layer source does not support updateAttachment capability");
              return _this12.source.updateAttachment(e, t, r);
            });
          }
        }, {
          key: "applyEdits",
          value: function () {
            var _applyEdits = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee2(e, t) {
              var r;
              return regeneratorRuntime.wrap(function _callee2$(_context2) {
                while (1) {
                  switch (_context2.prev = _context2.next) {
                    case 0:
                      _context2.next = 2;
                      return __webpack_require__.e(
                      /*! import() | graphics-editingSupport-js */
                      "graphics-editingSupport-js").then(__webpack_require__.bind(null,
                      /*! ./graphics/editingSupport.js */
                      "CJn3"));

                    case 2:
                      r = _context2.sent;
                      _context2.next = 5;
                      return this.load();

                    case 5:
                      return _context2.abrupt("return", r.applyEdits(this, this.source, e, t));

                    case 6:
                    case "end":
                      return _context2.stop();
                  }
                }
              }, _callee2, this);
            }));

            function applyEdits(_x, _x2) {
              return _applyEdits.apply(this, arguments);
            }

            return applyEdits;
          }()
        }, {
          key: "on",
          value: function on(e, t) {
            return _get(_getPrototypeOf(Pe.prototype), "on", this).call(this, e, t);
          }
        }, {
          key: "createPopupTemplate",
          value: function createPopupTemplate(e) {
            return Object(_support_popupUtils_js__WEBPACK_IMPORTED_MODULE_65__["createPopupTemplate"])(this, e);
          }
        }, {
          key: "createGraphicsSource",
          value: function () {
            var _createGraphicsSource = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee3(e) {
              var t, r;
              return regeneratorRuntime.wrap(function _callee3$(_context3) {
                while (1) {
                  switch (_context3.prev = _context3.next) {
                    case 0:
                      if (!this._hasMemorySource()) {
                        _context3.next = 2;
                        break;
                      }

                      return _context3.abrupt("return", (this.emit("graphics-source-create", {
                        graphicsSource: this.source
                      }), this.source.load({
                        signal: e
                      })));

                    case 2:
                      _context3.next = 4;
                      return __webpack_require__.e(
                      /*! import() | graphics-sources-FeatureLayerSource-js */
                      "graphics-sources-FeatureLayerSource-js").then(__webpack_require__.bind(null,
                      /*! ./graphics/sources/FeatureLayerSource.js */
                      "DlAm"));

                    case 4:
                      t = _context3.sent;
                      Object(_core_promiseUtils_js__WEBPACK_IMPORTED_MODULE_16__["throwIfAborted"])(e);
                      _context3.next = 8;
                      return new t["default"]({
                        layer: this
                      }).load({
                        signal: e
                      });

                    case 8:
                      r = _context3.sent;
                      return _context3.abrupt("return", (this.emit("graphics-source-create", {
                        graphicsSource: r
                      }), r));

                    case 10:
                    case "end":
                      return _context3.stop();
                  }
                }
              }, _callee3, this);
            }));

            function createGraphicsSource(_x3) {
              return _createGraphicsSource.apply(this, arguments);
            }

            return createGraphicsSource;
          }()
        }, {
          key: "createQuery",
          value: function createQuery() {
            var e = new _tasks_support_Query_js__WEBPACK_IMPORTED_MODULE_67__["default"](),
                t = this.get("capabilities.data");
            e.dynamicDataSource = this.dynamicDataSource, e.gdbVersion = this.gdbVersion, e.historicMoment = this.historicMoment, e.returnGeometry = !0, t && (t.supportsZ && null != this.returnZ && (e.returnZ = this.returnZ), t.supportsM && null != this.returnM && (e.returnM = this.returnM)), e.outFields = ["*"], e.where = this.definitionExpression || "1=1";
            var r = this.timeOffset,
                i = this.timeExtent;
            return e.timeExtent = null != r && null != i ? i.offset(-r.value, r.unit) : i || null, e.multipatchOption = "multipatch" === this.geometryType ? "xyFootprint" : null, e;
          }
        }, {
          key: "deleteAttachments",
          value: function deleteAttachments(e, t) {
            var _this13 = this;

            return this.load().then(function () {
              return _this13._checkAttachmentSupport(e);
            }).then(function () {
              if (!("deleteAttachments" in _this13.source)) throw new _core_Error_js__WEBPACK_IMPORTED_MODULE_12__["default"](Me, "Layer source does not support deleteAttachments capability");
              return _this13.source.deleteAttachments(e, t);
            });
          }
        }, {
          key: "fetchRecomputedExtents",
          value: function fetchRecomputedExtents(e) {
            var _this14 = this;

            return this.load({
              signal: null == e ? void 0 : e.signal
            }).then(function () {
              if (_this14.source.fetchRecomputedExtents) return _this14.source.fetchRecomputedExtents(e);
              throw new _core_Error_js__WEBPACK_IMPORTED_MODULE_12__["default"](Me, "Layer source does not support fetchUpdates capability");
            });
          }
        }, {
          key: "getFeatureType",
          value: function getFeatureType(e) {
            var t = this.typeIdField,
                r = this.types;
            if (!t || !e) return null;
            var i = e.attributes ? e.attributes[t] : void 0;
            if (null == i) return null;
            var o = null;
            return r.some(function (e) {
              var t = e.id;
              return null != t && (t.toString() === i.toString() && (o = e), !!o);
            }), o;
          }
        }, {
          key: "getFieldDomain",
          value: function getFieldDomain(e, t) {
            var r = t && t.feature,
                i = this.getFeatureType(r);

            if (i) {
              var _t3 = i.domains && i.domains[e];

              if (_t3 && "inherited" !== _t3.type) return _t3;
            }

            return this._getLayerDomain(e);
          }
        }, {
          key: "getField",
          value: function getField(e) {
            return this.fieldsIndex.get(e);
          }
        }, {
          key: "queryAttachments",
          value: function queryAttachments(e, t) {
            var _this15 = this;

            return e = _tasks_support_AttachmentQuery_js__WEBPACK_IMPORTED_MODULE_66__["default"].from(e), this.load().then(function () {
              if (!_this15.get("capabilities.data.supportsAttachment")) throw new _core_Error_js__WEBPACK_IMPORTED_MODULE_12__["default"](Me, "this layer doesn't support attachments");
              var _e10 = e,
                  t = _e10.attachmentTypes,
                  r = _e10.objectIds,
                  i = _e10.globalIds,
                  o = _e10.num,
                  s = _e10.size,
                  a = _e10.start,
                  n = _e10.where;

              if (!_this15.get("capabilities.operations.supportsQueryAttachments")) {
                var _p2 = r && r.length > 1,
                    l = t && t.length,
                    u = i && i.length,
                    c = s && s.length;

                if (_p2 || l || u || c || o || a || n) throw new _core_Error_js__WEBPACK_IMPORTED_MODULE_12__["default"](Me, "when 'supportsQueryAttachments' is false, only objectIds of length 1 are supported", e);
              }

              if (!(r && r.length || n)) throw new _core_Error_js__WEBPACK_IMPORTED_MODULE_12__["default"](Me, "'objectIds' or 'where' are required to perform attachment query", e);
              if (!("queryAttachments" in _this15.source)) throw new _core_Error_js__WEBPACK_IMPORTED_MODULE_12__["default"](Me, "Layer source does not support queryAttachments capability", e);
              return _this15.source.queryAttachments(e);
            });
          }
        }, {
          key: "queryFeatures",
          value: function queryFeatures(e, t) {
            var _this16 = this;

            return this.load().then(function () {
              return _this16.source.queryFeatures(_tasks_support_Query_js__WEBPACK_IMPORTED_MODULE_67__["default"].from(e) || _this16.createQuery(), t);
            }).then(function (e) {
              if (e && e.features) {
                var _iterator4 = _createForOfIteratorHelper(e.features),
                    _step4;

                try {
                  for (_iterator4.s(); !(_step4 = _iterator4.n()).done;) {
                    var _t4 = _step4.value;
                    _t4.layer = _t4.sourceLayer = _this16;
                  }
                } catch (err) {
                  _iterator4.e(err);
                } finally {
                  _iterator4.f();
                }
              }

              return e;
            });
          }
        }, {
          key: "queryObjectIds",
          value: function queryObjectIds(e, t) {
            var _this17 = this;

            return this.load().then(function () {
              if (_this17.source.queryObjectIds) return _this17.source.queryObjectIds(_tasks_support_Query_js__WEBPACK_IMPORTED_MODULE_67__["default"].from(e) || _this17.createQuery(), t);
              throw new _core_Error_js__WEBPACK_IMPORTED_MODULE_12__["default"](Me, "Layer source does not support queryObjectIds capability");
            });
          }
        }, {
          key: "queryFeatureCount",
          value: function queryFeatureCount(e, t) {
            var _this18 = this;

            return this.load().then(function () {
              if (_this18.source.queryFeatureCount) return _this18.source.queryFeatureCount(_tasks_support_Query_js__WEBPACK_IMPORTED_MODULE_67__["default"].from(e) || _this18.createQuery(), t);
              throw new _core_Error_js__WEBPACK_IMPORTED_MODULE_12__["default"](Me, "Layer source does not support queryFeatureCount capability");
            });
          }
        }, {
          key: "queryExtent",
          value: function queryExtent(e, t) {
            var _this19 = this;

            return this.load().then(function () {
              if (_this19.source.queryExtent) return _this19.source.queryExtent(_tasks_support_Query_js__WEBPACK_IMPORTED_MODULE_67__["default"].from(e) || _this19.createQuery(), t);
              throw new _core_Error_js__WEBPACK_IMPORTED_MODULE_12__["default"](Me, "Layer source does not support queryExtent capability");
            });
          }
        }, {
          key: "queryRelatedFeatures",
          value: function queryRelatedFeatures(e, t) {
            var _this20 = this;

            return this.load().then(function () {
              if ("queryRelatedFeatures" in _this20.source) return _this20.source.queryRelatedFeatures(_tasks_support_RelationshipQuery_js__WEBPACK_IMPORTED_MODULE_68__["default"].from(e), t);
              throw new _core_Error_js__WEBPACK_IMPORTED_MODULE_12__["default"](Me, "Layer source does not support queryRelatedFeatures capability");
            });
          }
        }, {
          key: "queryRelatedFeaturesCount",
          value: function queryRelatedFeaturesCount(e, t) {
            var _this21 = this;

            return this.load().then(function () {
              if ("queryRelatedFeaturesCount" in _this21.source) return _this21.source.queryRelatedFeaturesCount(_tasks_support_RelationshipQuery_js__WEBPACK_IMPORTED_MODULE_68__["default"].from(e), t);
              throw new _core_Error_js__WEBPACK_IMPORTED_MODULE_12__["default"](Me, "Layer source does not support queryRelatedFeaturesCount capability");
            });
          }
        }, {
          key: "read",
          value: function read(e, t) {
            var r = e.featureCollection;

            if (r) {
              var _e11 = r.layers;
              _e11 && 1 === _e11.length && (_get(_getPrototypeOf(Pe.prototype), "read", this).call(this, _e11[0], t), null != r.showLegend && _get(_getPrototypeOf(Pe.prototype), "read", this).call(this, {
                showLegend: r.showLegend
              }, t));
            }

            _get(_getPrototypeOf(Pe.prototype), "read", this).call(this, e, t), t && "service" === t.origin && this.revert(["objectIdField", "fields", "timeInfo", "spatialReference"], "service");
          }
        }, {
          key: "write",
          value: function write(e, t) {
            var r, i;

            var o = (t = _objectSpread(_objectSpread({}, t), {}, {
              writeLayerSchema: null != (r = null == (i = t) ? void 0 : i.writeLayerSchema) ? r : this._hasMemorySource()
            })).origin,
                s = t.layerContainerType,
                a = t.messages;

            if (this.isTable) {
              if ("web-scene" === o || "web-map" === o && "tables" !== s) return a && a.push(new _core_Error_js__WEBPACK_IMPORTED_MODULE_12__["default"]("layer:unsupported", "Layer (".concat(this.title, ", ").concat(this.id, ") of type '").concat(this.declaredClass, "' using a Table source cannot be written to web scenes and web maps"), {
                layer: this
              })), null;
              if (this._hasMemorySource()) return a && a.push(new _core_Error_js__WEBPACK_IMPORTED_MODULE_12__["default"]("layer:unsupported", "Layer (".concat(this.title, ", ").concat(this.id, ") of type '").concat(this.declaredClass, "' using an in-memory Table source cannot be written to web scenes and web maps"), {
                layer: this
              })), null;
            } else if (this.loaded && "web-map" === o && "tables" === s) return a && a.push(new _core_Error_js__WEBPACK_IMPORTED_MODULE_12__["default"]("layer:unsupported", "Layer (".concat(this.title, ", ").concat(this.id, ") of type '").concat(this.declaredClass, "' using a non-table source cannot be written to tables in web maps"), {
              layer: this
            })), null;

            return _get(_getPrototypeOf(Pe.prototype), "write", this).call(this, e, t);
          }
        }, {
          key: "_readEditingEnabled",
          value: function _readEditingEnabled(e, t, r) {
            var i;
            var o = null == (i = e.layerDefinition) ? void 0 : i.capabilities;
            return o ? this._hasEditingCapability(o) : (o = e.capabilities, !(t && "web-map" === (null == r ? void 0 : r.origin) && !this._hasMemorySource() && o) || this._hasEditingCapability(o));
          }
        }, {
          key: "_hasEditingCapability",
          value: function _hasEditingCapability(e) {
            return e.toLowerCase().split(",").map(function (e) {
              return e.trim();
            }).includes("editing");
          }
        }, {
          key: "_writeEditingEnabled",
          value: function _writeEditingEnabled(e, r, i, o) {
            e || (Object(_core_object_js__WEBPACK_IMPORTED_MODULE_2__["setDeepValue"])("layerDefinition.capabilities", "Query", r), !i || null != o && o.writeLayerSchema || (r.capabilities = "Query"));
          }
        }, {
          key: "_checkAttachmentSupport",
          value: function _checkAttachmentSupport(e) {
            var t = e.attributes,
                r = this.objectIdField;
            return this.get("capabilities.data.supportsAttachment") ? e ? t ? t[r] ? void 0 : Object(_core_promiseUtils_js__WEBPACK_IMPORTED_MODULE_16__["reject"])(new _core_Error_js__WEBPACK_IMPORTED_MODULE_12__["default"](Me, "feature is missing the identifying attribute ".concat(r))) : Object(_core_promiseUtils_js__WEBPACK_IMPORTED_MODULE_16__["reject"])(new _core_Error_js__WEBPACK_IMPORTED_MODULE_12__["default"](Me, "'attributes' are required on a feature to query attachments")) : Object(_core_promiseUtils_js__WEBPACK_IMPORTED_MODULE_16__["reject"])(new _core_Error_js__WEBPACK_IMPORTED_MODULE_12__["default"](Me, "A feature is required to add/delete/update attachments")) : Object(_core_promiseUtils_js__WEBPACK_IMPORTED_MODULE_16__["reject"])(new _core_Error_js__WEBPACK_IMPORTED_MODULE_12__["default"](Me, "this layer doesn't support attachments"));
          }
        }, {
          key: "_getLayerDomain",
          value: function _getLayerDomain(e) {
            var t = this.fieldsIndex.get(e);
            return t ? t.domain : null;
          }
        }, {
          key: "_fetchFirstLayerId",
          value: function _fetchFirstLayerId(e) {
            return Object(_request_js__WEBPACK_IMPORTED_MODULE_22__["default"])(this.url, {
              query: _objectSpread({
                f: "json"
              }, this.customParameters),
              responseType: "json",
              signal: e
            }).then(function (e) {
              var t = e.data;
              if (t) return Array.isArray(t.layers) && t.layers.length > 0 ? t.layers[0].id : Array.isArray(t.tables) && t.tables.length > 0 ? t.tables[0].id : void 0;
            });
          }
        }, {
          key: "_initLayerProperties",
          value: function () {
            var _initLayerProperties2 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee4(e) {
              return regeneratorRuntime.wrap(function _callee4$(_context4) {
                while (1) {
                  switch (_context4.prev = _context4.next) {
                    case 0:
                      return _context4.abrupt("return", (this._set("source", e), e.sourceJSON && (this.sourceJSON = e.sourceJSON, this.read(e.sourceJSON, {
                        origin: "service",
                        url: this.parsedUrl
                      })), this._verifySource(), this._verifyFields(), Object(_support_fieldUtils_js__WEBPACK_IMPORTED_MODULE_20__["fixRendererFields"])(this.renderer, this.fields), Object(_support_fieldUtils_js__WEBPACK_IMPORTED_MODULE_20__["fixTimeInfoFields"])(this.timeInfo, this.fields), Object(_renderers_support_styleUtils_js__WEBPACK_IMPORTED_MODULE_64__["loadStyleRenderer"])(this, {
                        origin: "service"
                      })));

                    case 1:
                    case "end":
                      return _context4.stop();
                  }
                }
              }, _callee4, this);
            }));

            function _initLayerProperties(_x4) {
              return _initLayerProperties2.apply(this, arguments);
            }

            return _initLayerProperties;
          }()
        }, {
          key: "_verifyFields",
          value: function _verifyFields() {
            var e = this.parsedUrl && this.parsedUrl.path || "undefined";
            this.objectIdField || console.log("FeatureLayer: 'objectIdField' property is not defined (url: " + e + ")"), this.isTable || this._hasMemorySource() || -1 !== e.search(/\/FeatureServer\//i) || this.fields && this.fields.some(function (e) {
              return "geometry" === e.type;
            }) || console.log("FeatureLayer: unable to find field of type 'geometry' in the layer 'fields' list. If you are using a map service layer, features will not have geometry (url: " + e + ")");
          }
        }, {
          key: "_fixTemplates",
          value: function _fixTemplates(e, t) {
            e && e.forEach(function (e) {
              var r = e.prototype && e.prototype.attributes;
              r && t && delete r[t];
            });
          }
        }, {
          key: "_verifySource",
          value: function _verifySource() {
            if (this._hasMemorySource()) {
              if (this.url) throw new _core_Error_js__WEBPACK_IMPORTED_MODULE_12__["default"]("feature-layer:mixed-source-and-url", "FeatureLayer cannot be created with both an in-memory source and a url");
            } else if (!this.url) throw new _core_Error_js__WEBPACK_IMPORTED_MODULE_12__["default"]("feature-layer:source-or-url-required", "FeatureLayer requires either a url, a valid portal item or a source");
          }
        }, {
          key: "_initMemorySource",
          value: function _initMemorySource(e) {
            var _this22 = this;

            e.forEach(function (e) {
              e.layer = _this22, e.sourceLayer = _this22;
            }), this._handles.add([e.on("after-add", function (e) {
              e.item.layer = _this22, e.item.sourceLayer = _this22;
            }), e.on("after-remove", function (e) {
              e.item.layer = null, e.item.sourceLayer = null;
            })], "fl-source");
          }
        }, {
          key: "_resetMemorySource",
          value: function _resetMemorySource(e) {
            e.forEach(function (e) {
              e.layer = null, e.sourceLayer = null;
            }), this._handles.remove("fl-source");
          }
        }, {
          key: "_hasMemorySource",
          value: function _hasMemorySource() {
            return !(this.url || !this.source);
          }
        }, {
          key: "_readAttachmentCapabilities",
          value: function _readAttachmentCapabilities(e) {
            var t = {
              supportsName: !1,
              supportsSize: !1,
              supportsContentType: !1,
              supportsKeywords: !1,
              supportsExifInfo: !1
            };
            return e && Array.isArray(e) && e.forEach(function (e) {
              var r = Te[e.name];
              r && (t[r] = !!e.isEnabled);
            }), t;
          }
        }, {
          key: "_readDataCapabilities",
          value: function _readDataCapabilities(e) {
            return {
              isVersioned: Oe(e, "isDataVersioned", !1),
              supportsAttachment: Oe(e, "hasAttachments", !1),
              supportsM: Oe(e, "hasM", !1),
              supportsZ: Oe(e, "hasZ", !1)
            };
          }
        }, {
          key: "_readMetadataCapabilities",
          value: function _readMetadataCapabilities(e) {
            return {
              supportsAdvancedFieldProperties: Oe(e, "supportsFieldDescriptionProperty", !1)
            };
          }
        }, {
          key: "_readOperationsCapabilities",
          value: function _readOperationsCapabilities(e, t) {
            var r = e ? e.toLowerCase().split(",").map(function (e) {
              return e.trim();
            }) : [],
                i = -1 !== r.indexOf("editing");
            var o = i && -1 !== r.indexOf("create"),
                s = i && -1 !== r.indexOf("delete"),
                a = i && -1 !== r.indexOf("update");
            var n = -1 !== r.indexOf("changetracking");
            return i && !(o || s || a) && (o = s = a = !0), {
              supportsCalculate: Oe(t, "supportsCalculate", !1),
              supportsTruncate: Oe(t, "supportsTruncate", !1),
              supportsValidateSql: Oe(t, "supportsValidateSql", !1),
              supportsAdd: o,
              supportsDelete: s,
              supportsEditing: i,
              supportsChangeTracking: n,
              supportsQuery: -1 !== r.indexOf("query"),
              supportsQueryAttachments: Oe(t.advancedQueryCapabilities, "supportsQueryAttachments", !1),
              supportsResizeAttachments: Oe(t, "supportsAttachmentsResizing", !1),
              supportsSync: -1 !== r.indexOf("sync"),
              supportsUpdate: a,
              supportsExceedsLimitStatistics: Oe(t, "supportsExceedsLimitStatistics", !1)
            };
          }
        }, {
          key: "_readQueryCapabilities",
          value: function _readQueryCapabilities(e) {
            var t = e.advancedQueryCapabilities,
                r = e.ownershipBasedAccessControlForFeatures,
                i = e.archivingInfo,
                o = (e.supportedQueryFormats || "").split(",").reduce(function (e, t) {
              var r = t.toLowerCase().trim();
              return r && e.add(r), e;
            }, new Set());
            return {
              supportsStatistics: Oe(t, "supportsStatistics", e.supportsStatistics),
              supportsPercentileStatistics: Oe(t, "supportsPercentileStatistics", !1),
              supportsCentroid: Oe(t, "supportsReturningGeometryCentroid", !1),
              supportsDistance: Oe(t, "supportsQueryWithDistance", !1),
              supportsDistinct: Oe(t, "supportsDistinct", e.supportsAdvancedQueries),
              supportsExtent: Oe(t, "supportsReturningQueryExtent", !1),
              supportsGeometryProperties: Oe(t, "supportsReturningGeometryProperties", !1),
              supportsHavingClause: Oe(t, "supportsHavingClause", !1),
              supportsOrderBy: Oe(t, "supportsOrderBy", e.supportsAdvancedQueries),
              supportsPagination: Oe(t, "supportsPagination", !1),
              supportsQuantization: Oe(e, "supportsCoordinatesQuantization", !1),
              supportsQuantizationEditMode: Oe(e, "supportsQuantizationEditMode", !1),
              supportsQueryGeometry: Oe(e, "supportsReturningQueryGeometry", !1),
              supportsResultType: Oe(t, "supportsQueryWithResultType", !1),
              supportsMaxRecordCountFactor: Oe(t, "supportsMaxRecordCountFactor", !1),
              supportsSqlExpression: Oe(t, "supportsSqlExpression", !1),
              supportsStandardizedQueriesOnly: Oe(e, "useStandardizedQueries", !1),
              supportsQueryByOthers: Oe(r, "allowOthersToQuery", !0),
              supportsHistoricMoment: Oe(i, "supportsQueryWithHistoricMoment", !1),
              supportsFormatPBF: o.has("pbf"),
              supportsDisjointSpatialRelationship: Oe(t, "supportsDisjointSpatialRel", !1),
              supportsCacheHint: Oe(t, "supportsQueryWithCacheHint", !1),
              maxRecordCountFactor: Ae(e, "maxRecordCountFactor", void 0),
              maxRecordCount: Ae(e, "maxRecordCount", void 0),
              standardMaxRecordCount: Ae(e, "standardMaxRecordCount", void 0),
              tileMaxRecordCount: Ae(e, "tileMaxRecordCount", void 0)
            };
          }
        }, {
          key: "_readQueryRelatedCapabilities",
          value: function _readQueryRelatedCapabilities(e) {
            var t = e.advancedQueryCapabilities,
                r = Oe(t, "supportsAdvancedQueryRelated", !1);
            return {
              supportsPagination: Oe(t, "supportsQueryRelatedPagination", !1),
              supportsCount: r,
              supportsOrderBy: r
            };
          }
        }, {
          key: "_readEditingCapabilities",
          value: function _readEditingCapabilities(e) {
            var t = e.ownershipBasedAccessControlForFeatures;
            return {
              supportsGeometryUpdate: Oe(e, "allowGeometryUpdates", !0),
              supportsGlobalId: Oe(e, "supportsApplyEditsWithGlobalIds", !1),
              supportsRollbackOnFailure: Oe(e, "supportsRollbackOnFailureParameter", !1),
              supportsUpdateWithoutM: Oe(e, "allowUpdateWithoutMValues", !1),
              supportsUploadWithItemId: Oe(e, "supportsAttachmentsByUploadId", !1),
              supportsDeleteByAnonymous: Oe(t, "allowAnonymousToDelete", !0),
              supportsDeleteByOthers: Oe(t, "allowOthersToDelete", !0),
              supportsUpdateByAnonymous: Oe(t, "allowAnonymousToUpdate", !0),
              supportsUpdateByOthers: Oe(t, "allowOthersToUpdate", !0)
            };
          }
        }]);

        return Pe;
      }(Object(_mixins_BlendLayer_js__WEBPACK_IMPORTED_MODULE_45__["BlendLayer"])(Object(_mixins_TemporalLayer_js__WEBPACK_IMPORTED_MODULE_51__["TemporalLayer"])(Object(_mixins_ScaleRangeLayer_js__WEBPACK_IMPORTED_MODULE_49__["ScaleRangeLayer"])(Object(_mixins_RefreshableLayer_js__WEBPACK_IMPORTED_MODULE_48__["RefreshableLayer"])(Object(_mixins_ArcGISService_js__WEBPACK_IMPORTED_MODULE_44__["ArcGISService"])(Object(_mixins_OperationalLayer_js__WEBPACK_IMPORTED_MODULE_30__["OperationalLayer"])(Object(_mixins_PortalLayer_js__WEBPACK_IMPORTED_MODULE_47__["PortalLayer"])(Object(_core_MultiOriginJSONSupport_js__WEBPACK_IMPORTED_MODULE_26__["MultiOriginJSONMixin"])(Object(_mixins_CustomParametersMixin_js__WEBPACK_IMPORTED_MODULE_46__["CustomParametersMixin"])(_Layer_js__WEBPACK_IMPORTED_MODULE_25__["default"]))))))))));

      Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_5__["property"])({
        readOnly: !0,
        json: {
          read: !1
        }
      })], Pe.prototype, "capabilities", void 0), Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_reader_js__WEBPACK_IMPORTED_MODULE_8__["reader"])("service", "capabilities", ["advancedQueryCapabilities", "allowGeometryUpdates", "allowUpdateWithoutMValues", "archivingInfo", "capabilities", "hasAttachments", "hasM", "hasZ", "maxRecordCount", "maxRecordCountFactor", "ownershipBasedAccessControlForFeatures", "standardMaxRecordCount", "supportedQueryFormats", "supportsAdvancedQueries", "supportsApplyEditsWithGlobalIds", "supportsAttachmentsByUploadId", "supportsAttachmentsResizing", "supportsCalculate", "supportsCoordinatesQuantization", "supportsExceedsLimitStatistics", "supportsFieldDescriptionProperty", "supportsQuantizationEditMode", "supportsRollbackOnFailureParameter", "supportsStatistics", "supportsTruncate", "supportsValidateSql", "tileMaxRecordCount", "useStandardizedQueries"])], Pe.prototype, "readCapabilities", null), Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_5__["property"])({
        json: {
          origins: {
            "portal-item": {
              write: !0
            },
            "web-map": {
              write: !0
            }
          }
        }
      })], Pe.prototype, "charts", void 0), Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_5__["property"])({
        readOnly: !0,
        dependsOn: ["definitionExpression", "dynamicDataSource", "timeExtent", "timeOffset", "geometryType", "gdbVersion", "historicMoment", "returnZ", "capabilities", "returnM"]
      })], Pe.prototype, "createQueryVersion", null), Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_5__["property"])({
        type: String,
        json: {
          read: {
            source: "layerDefinition.copyrightText"
          },
          origins: {
            service: {
              read: {
                source: "copyrightText"
              }
            }
          }
        }
      })], Pe.prototype, "copyright", void 0), Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_5__["property"])({
        type: String,
        json: {
          read: {
            source: "layerDefinition.displayField"
          },
          origins: {
            service: {
              read: {
                source: "displayField"
              }
            }
          }
        }
      })], Pe.prototype, "displayField", void 0), Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_5__["property"])({
        type: String,
        json: {
          origins: {
            service: {
              read: !1,
              write: !1
            }
          },
          read: {
            source: "layerDefinition.definitionExpression"
          },
          write: {
            target: "layerDefinition.definitionExpression"
          }
        }
      })], Pe.prototype, "definitionExpression", void 0), Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_5__["property"])({
        types: _chunks_symbols_js__WEBPACK_IMPORTED_MODULE_23__["s"],
        readOnly: !0
      })], Pe.prototype, "defaultSymbol", void 0), Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_5__["property"])({
        type: _chunks_DataLayerSource_js__WEBPACK_IMPORTED_MODULE_63__["D"]
      })], Pe.prototype, "dynamicDataSource", void 0), Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_5__["property"])({
        readOnly: !0
      })], Pe.prototype, "editFieldsInfo", void 0), Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_5__["property"])({
        type: Boolean
      })], Pe.prototype, "editingEnabled", void 0), Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_reader_js__WEBPACK_IMPORTED_MODULE_8__["reader"])(["portal-item", "web-scene"], "editingEnabled", ["layerDefinition.capabilities"])], Pe.prototype, "readEditingEnabled", null), Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_reader_js__WEBPACK_IMPORTED_MODULE_8__["reader"])("web-map", "editingEnabled", ["capabilities", "layerDefinition.capabilities"])], Pe.prototype, "readEditingEnabledFromWebMap", null), Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_writer_js__WEBPACK_IMPORTED_MODULE_11__["writer"])(["portal-item", "web-scene"], "editingEnabled", {
        "layerDefinition.capabilities": {
          type: String
        }
      })], Pe.prototype, "writeEditingEnabled", null), Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_writer_js__WEBPACK_IMPORTED_MODULE_11__["writer"])("web-map", "editingEnabled", {
        capabilities: {
          type: String
        },
        "layerDefinition.capabilities": {
          type: String
        }
      })], Pe.prototype, "writeEditingEnabledToWebMap", null), Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_5__["property"])({
        readOnly: !0
      })], Pe.prototype, "editingInfo", void 0), Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_reader_js__WEBPACK_IMPORTED_MODULE_8__["reader"])("editingInfo")], Pe.prototype, "readEditingInfo", null), Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_5__["property"])(_support_commonProperties_js__WEBPACK_IMPORTED_MODULE_29__["elevationInfo"])], Pe.prototype, "elevationInfo", void 0), Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_5__["property"])({
        types: {
          key: "type",
          base: _support_FeatureReduction_js__WEBPACK_IMPORTED_MODULE_53__["default"],
          typeMap: {
            selection: _support_FeatureReductionSelection_js__WEBPACK_IMPORTED_MODULE_56__["default"],
            cluster: _support_FeatureReductionCluster_js__WEBPACK_IMPORTED_MODULE_55__["default"]
          }
        },
        json: {
          write: {
            target: "layerDefinition.featureReduction"
          }
        }
      })], Pe.prototype, "featureReduction", void 0), Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_reader_js__WEBPACK_IMPORTED_MODULE_8__["reader"])("featureReduction", ["layerDefinition.featureReduction"])], Pe.prototype, "readFeatureReduction", null), Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_writer_js__WEBPACK_IMPORTED_MODULE_11__["writer"])("web-scene", "featureReduction", {
        "layerDefinition.featureReduction": {
          types: _support_featureReductionUtils_js__WEBPACK_IMPORTED_MODULE_57__["webSceneFeatureReductionTypes"]
        }
      })], Pe.prototype, "writeWebSceneFeatureReduction", null), Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_5__["property"])(_objectSpread(_objectSpread({}, _e.fields), {}, {
        json: {
          read: {
            source: "layerDefinition.fields"
          },
          origins: {
            service: {
              read: !0
            },
            "web-map": {
              write: {
                target: "layerDefinition.fields",
                overridePolicy: Le
              }
            }
          }
        }
      }))], Pe.prototype, "fields", void 0), Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_5__["property"])({
        readOnly: !0,
        dependsOn: ["fields"]
      })], Pe.prototype, "fieldsIndex", null), Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_5__["property"])({
        type: _form_FormTemplate_js__WEBPACK_IMPORTED_MODULE_41__["default"],
        json: {
          name: "formInfo",
          write: !0,
          origins: {
            "web-scene": {
              read: !1,
              write: !1
            }
          }
        }
      })], Pe.prototype, "formTemplate", void 0), Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_5__["property"])({
        type: _geometry_Extent_js__WEBPACK_IMPORTED_MODULE_18__["default"],
        json: {
          origins: {
            service: {
              read: {
                source: "extent"
              }
            }
          },
          read: {
            source: "layerDefinition.extent"
          }
        }
      })], Pe.prototype, "fullExtent", void 0), Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_5__["property"])()], Pe.prototype, "gdbVersion", void 0), Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_5__["property"])({
        readOnly: !0
      })], Pe.prototype, "geometryProperties", void 0), Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_5__["property"])({
        type: ["point", "polygon", "polyline", "multipoint", "multipatch", "mesh"],
        json: {
          origins: {
            service: {
              read: Ee.read
            },
            "web-map": {
              write: {
                target: "layerDefinition.geometryType",
                overridePolicy: Le,
                writer: function writer(e, r, i) {
                  var o = e ? Ee.toJSON(e) : null;
                  o && Object(_core_object_js__WEBPACK_IMPORTED_MODULE_2__["setDeepValue"])(i, o, r);
                }
              }
            }
          },
          read: {
            source: "layerDefinition.geometryType",
            reader: Ee.read
          }
        }
      })], Pe.prototype, "geometryType", void 0), Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_5__["property"])({
        type: Boolean,
        json: {
          origins: {
            service: {
              read: !0
            }
          },
          read: {
            source: "layerDefinition.hasM"
          }
        }
      })], Pe.prototype, "hasM", void 0), Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_5__["property"])({
        type: Boolean,
        json: {
          origins: {
            service: {
              read: !0
            }
          },
          read: {
            source: "layerDefinition.hasZ"
          }
        }
      })], Pe.prototype, "hasZ", void 0), Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_5__["property"])({
        readOnly: !0,
        type: _geometry_HeightModelInfo_js__WEBPACK_IMPORTED_MODULE_28__["default"]
      })], Pe.prototype, "heightModelInfo", void 0), Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_5__["property"])({
        type: Date
      })], Pe.prototype, "historicMoment", void 0), Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_5__["property"])({
        json: {
          origins: {
            service: {
              read: !1
            },
            "portal-item": {
              read: !1
            }
          }
        }
      })], Pe.prototype, "id", void 0), Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_5__["property"])({
        readOnly: !0,
        json: {
          origins: {
            "web-map": {
              write: {
                target: "layerDefinition.type"
              }
            }
          }
        }
      })], Pe.prototype, "isTable", void 0), Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_reader_js__WEBPACK_IMPORTED_MODULE_8__["reader"])("service", "isTable", ["type", "geometryType"]), Object(_core_accessorSupport_decorators_reader_js__WEBPACK_IMPORTED_MODULE_8__["reader"])("isTable", ["layerDefinition.type", "layerDefinition.geometryType"])], Pe.prototype, "readIsTable", null), Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_writer_js__WEBPACK_IMPORTED_MODULE_11__["writer"])("web-map", "isTable")], Pe.prototype, "writeIsTable", null), Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_5__["property"])(_support_commonProperties_js__WEBPACK_IMPORTED_MODULE_29__["labelsVisible"])], Pe.prototype, "labelsVisible", void 0), Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_5__["property"])({
        type: [_support_LabelClass_js__WEBPACK_IMPORTED_MODULE_54__["default"]],
        json: {
          origins: {
            service: {
              read: {
                source: "drawingInfo.labelingInfo",
                reader: _support_labelingInfo_js__WEBPACK_IMPORTED_MODULE_61__["reader"]
              },
              write: {
                target: "drawingInfo.labelingInfo",
                enabled: !1
              }
            }
          },
          read: {
            source: "layerDefinition.drawingInfo.labelingInfo",
            reader: _support_labelingInfo_js__WEBPACK_IMPORTED_MODULE_61__["reader"]
          },
          write: {
            target: "layerDefinition.drawingInfo.labelingInfo"
          }
        }
      })], Pe.prototype, "labelingInfo", void 0), Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_5__["property"])(_support_commonProperties_js__WEBPACK_IMPORTED_MODULE_29__["opacityDrawingInfo"])], Pe.prototype, "opacity", void 0), Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_5__["property"])({
        type: Number,
        json: {
          origins: {
            service: {
              read: {
                source: "id"
              }
            }
          },
          read: !1
        }
      })], Pe.prototype, "layerId", void 0), Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_5__["property"])(_support_commonProperties_js__WEBPACK_IMPORTED_MODULE_29__["legendEnabled"])], Pe.prototype, "legendEnabled", void 0), Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_5__["property"])({
        type: ["show", "hide"]
      })], Pe.prototype, "listMode", void 0), Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_5__["property"])({
        type: Number,
        json: {
          origins: {
            service: {
              write: {
                enabled: !1
              }
            }
          },
          read: {
            source: "layerDefinition.minScale"
          },
          write: {
            target: "layerDefinition.minScale"
          }
        }
      })], Pe.prototype, "minScale", void 0), Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_reader_js__WEBPACK_IMPORTED_MODULE_8__["reader"])("service", "minScale", ["minScale", "effectiveMinScale"])], Pe.prototype, "readMinScale", null), Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_5__["property"])({
        type: Number,
        json: {
          origins: {
            service: {
              write: {
                enabled: !1
              }
            }
          },
          read: {
            source: "layerDefinition.maxScale"
          },
          write: {
            target: "layerDefinition.maxScale"
          }
        }
      })], Pe.prototype, "maxScale", void 0), Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_reader_js__WEBPACK_IMPORTED_MODULE_8__["reader"])("service", "maxScale", ["maxScale", "effectiveMaxScale"])], Pe.prototype, "readMaxScale", null), Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_5__["property"])({
        type: String
      })], Pe.prototype, "globalIdField", void 0), Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_reader_js__WEBPACK_IMPORTED_MODULE_8__["reader"])("globalIdField", ["layerDefinition.globalIdField", "layerDefinition.fields"]), Object(_core_accessorSupport_decorators_reader_js__WEBPACK_IMPORTED_MODULE_8__["reader"])("service", "globalIdField", ["globalIdField", "fields"])], Pe.prototype, "readGlobalIdFieldFromService", null), Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_5__["property"])({
        type: String,
        json: {
          origins: {
            "web-map": {
              write: {
                target: "layerDefinition.objectIdField",
                overridePolicy: Le
              }
            }
          }
        }
      })], Pe.prototype, "objectIdField", void 0), Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_reader_js__WEBPACK_IMPORTED_MODULE_8__["reader"])("objectIdField", ["layerDefinition.objectIdField", "layerDefinition.fields"]), Object(_core_accessorSupport_decorators_reader_js__WEBPACK_IMPORTED_MODULE_8__["reader"])("service", "objectIdField", ["objectIdField", "fields"])], Pe.prototype, "readObjectIdFieldFromService", null), Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_5__["property"])({
        value: "ArcGISFeatureLayer",
        type: ["ArcGISFeatureLayer"]
      })], Pe.prototype, "operationalLayerType", void 0), Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_5__["property"])(_e.outFields)], Pe.prototype, "outFields", void 0), Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_5__["property"])({
        readOnly: !0,
        dependsOn: ["layerId", "dynamicDataSource"]
      })], Pe.prototype, "parsedUrl", null), Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_5__["property"])({
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
      })], Pe.prototype, "path", void 0), Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_5__["property"])(_support_commonProperties_js__WEBPACK_IMPORTED_MODULE_29__["popupEnabled"])], Pe.prototype, "popupEnabled", void 0), Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_5__["property"])({
        type: _PopupTemplate_js__WEBPACK_IMPORTED_MODULE_21__["default"],
        json: {
          read: {
            source: "popupInfo"
          },
          write: {
            target: "popupInfo"
          }
        }
      })], Pe.prototype, "popupTemplate", void 0), Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_5__["property"])({
        readOnly: !0,
        dependsOn: ["fields", "title"]
      })], Pe.prototype, "defaultPopupTemplate", null), Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_5__["property"])({
        type: [_support_Relationship_js__WEBPACK_IMPORTED_MODULE_62__["default"]],
        readOnly: !0
      })], Pe.prototype, "relationships", void 0), Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_5__["property"])({
        types: _renderers_support_types_js__WEBPACK_IMPORTED_MODULE_38__["rendererTypes"],
        json: {
          origins: {
            service: {
              write: {
                target: "drawingInfo.renderer",
                enabled: !1
              }
            },
            "web-scene": {
              types: _renderers_support_types_js__WEBPACK_IMPORTED_MODULE_38__["webSceneRendererTypes"],
              write: {
                target: "layerDefinition.drawingInfo.renderer",
                writer: _renderers_support_jsonUtils_js__WEBPACK_IMPORTED_MODULE_39__["write"]
              }
            }
          },
          write: {
            target: "layerDefinition.drawingInfo.renderer",
            overridePolicy: function overridePolicy(e, t, r) {
              return {
                ignoreOrigin: null == r ? void 0 : r.writeLayerSchema
              };
            },
            writer: _renderers_support_jsonUtils_js__WEBPACK_IMPORTED_MODULE_39__["write"]
          }
        }
      })], Pe.prototype, "renderer", null), Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_reader_js__WEBPACK_IMPORTED_MODULE_8__["reader"])("service", "renderer", ["drawingInfo.renderer", "defaultSymbol"]), Object(_core_accessorSupport_decorators_reader_js__WEBPACK_IMPORTED_MODULE_8__["reader"])("renderer", ["layerDefinition.drawingInfo.renderer", "layerDefinition.defaultSymbol"])], Pe.prototype, "readRenderer", null), Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_5__["property"])()], Pe.prototype, "sourceJSON", void 0), Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_5__["property"])({
        type: Boolean
      })], Pe.prototype, "returnM", void 0), Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_5__["property"])({
        type: Boolean
      })], Pe.prototype, "returnZ", void 0), Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_5__["property"])(_support_commonProperties_js__WEBPACK_IMPORTED_MODULE_29__["screenSizePerspectiveEnabled"])], Pe.prototype, "screenSizePerspectiveEnabled", void 0), Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_5__["property"])()], Pe.prototype, "source", null), Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_cast_js__WEBPACK_IMPORTED_MODULE_6__["cast"])("source")], Pe.prototype, "castSource", null), Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_reader_js__WEBPACK_IMPORTED_MODULE_8__["reader"])("portal-item", "source", ["featureSet"]), Object(_core_accessorSupport_decorators_reader_js__WEBPACK_IMPORTED_MODULE_8__["reader"])("web-map", "source", ["featureSet"])], Pe.prototype, "readSource", null), Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_5__["property"])({
        readOnly: !0
      })], Pe.prototype, "serviceDefinitionExpression", void 0), Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_reader_js__WEBPACK_IMPORTED_MODULE_8__["reader"])("service", "serviceDefinitionExpression", ["definitionQuery", "definitionExpression"])], Pe.prototype, "readServiceDefinitionExpression", null), Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_5__["property"])({
        type: _geometry_SpatialReference_js__WEBPACK_IMPORTED_MODULE_17__["default"],
        json: {
          origins: {
            service: {
              read: {
                source: "extent.spatialReference"
              }
            }
          },
          read: {
            source: "layerDefinition.extent.spatialReference"
          }
        }
      })], Pe.prototype, "spatialReference", void 0), Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_5__["property"])({
        type: [_support_FeatureTemplate_js__WEBPACK_IMPORTED_MODULE_58__["default"]]
      })], Pe.prototype, "templates", void 0), Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_reader_js__WEBPACK_IMPORTED_MODULE_8__["reader"])("templates", ["editFieldsInfo", "creatorField", "editorField", "templates"])], Pe.prototype, "readTemplates", null), Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_5__["property"])({
        type: _support_TimeInfo_js__WEBPACK_IMPORTED_MODULE_50__["default"]
      })], Pe.prototype, "timeInfo", void 0), Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_5__["property"])()], Pe.prototype, "title", void 0), Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_reader_js__WEBPACK_IMPORTED_MODULE_8__["reader"])("service", "title", ["name"]), Object(_core_accessorSupport_decorators_reader_js__WEBPACK_IMPORTED_MODULE_8__["reader"])("portal-item", "title", ["layerDefinition.title", "layerDefinition.name", "title"])], Pe.prototype, "readTitle", null), Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_reader_js__WEBPACK_IMPORTED_MODULE_8__["reader"])("web-map", "title", ["layerDefinition.name", "title"])], Pe.prototype, "readTitleFromWebMap", null), Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_5__["property"])({
        type: String
      })], Pe.prototype, "sublayerTitleMode", void 0), Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_5__["property"])({
        type: String,
        json: {
          read: {
            source: "timeInfo.trackIdField"
          }
        }
      })], Pe.prototype, "trackIdField", void 0), Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_5__["property"])({
        json: {
          read: !1
        }
      })], Pe.prototype, "type", void 0), Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_5__["property"])({
        type: String
      })], Pe.prototype, "typeIdField", void 0), Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_reader_js__WEBPACK_IMPORTED_MODULE_8__["reader"])("service", "typeIdField"), Object(_core_accessorSupport_decorators_reader_js__WEBPACK_IMPORTED_MODULE_8__["reader"])("typeIdField", ["layerDefinition.typeIdField"])], Pe.prototype, "readTypeIdField", null), Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_5__["property"])({
        type: [_support_FeatureType_js__WEBPACK_IMPORTED_MODULE_59__["default"]]
      })], Pe.prototype, "types", void 0), Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_reader_js__WEBPACK_IMPORTED_MODULE_8__["reader"])("service", "types", ["types"]), Object(_core_accessorSupport_decorators_reader_js__WEBPACK_IMPORTED_MODULE_8__["reader"])("types", ["layerDefinition.types"])], Pe.prototype, "readTypes", null), Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_5__["property"])({
        readOnly: !0,
        json: {
          write: !1
        }
      })], Pe.prototype, "serverGens", void 0), Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_5__["property"])({
        type: _core_Collection_js__WEBPACK_IMPORTED_MODULE_19__["default"].ofType(_support_FeatureIndex_js__WEBPACK_IMPORTED_MODULE_52__["FeatureIndex"]),
        readOnly: !0
      })], Pe.prototype, "indexes", void 0), Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_5__["property"])(_support_commonProperties_js__WEBPACK_IMPORTED_MODULE_29__["url"])], Pe.prototype, "url", null), Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_writer_js__WEBPACK_IMPORTED_MODULE_11__["writer"])("url")], Pe.prototype, "writeUrl", null), Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_5__["property"])({
        readOnly: !0
      })], Pe.prototype, "userIsAdmin", void 0), Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_5__["property"])({
        json: {
          origins: {
            service: {
              read: !0
            }
          },
          read: !1
        }
      })], Pe.prototype, "version", void 0), Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_reader_js__WEBPACK_IMPORTED_MODULE_8__["reader"])("service", "version", ["currentVersion", "capabilities", "drawingInfo", "hasAttachments", "htmlPopupType", "relationships", "timeInfo", "typeIdField", "types"])], Pe.prototype, "readVersion", null), Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_5__["property"])({
        type: Boolean,
        json: {
          origins: {
            "portal-item": {
              write: {
                target: "layerDefinition.defaultVisibility"
              }
            }
          }
        }
      })], Pe.prototype, "visible", void 0), Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_reader_js__WEBPACK_IMPORTED_MODULE_8__["reader"])("portal-item", "visible", ["visibility", "layerDefinition.defaultVisibility"])], Pe.prototype, "readVisible", null), Pe = Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_subclass_js__WEBPACK_IMPORTED_MODULE_10__["subclass"])("esri.layers.FeatureLayer")], Pe);
      var Qe = Object(_core_accessorSupport_extensions_serializableProperty_reader_js__WEBPACK_IMPORTED_MODULE_9__["createTypeReader"])({
        types: _chunks_symbols_js__WEBPACK_IMPORTED_MODULE_23__["a"]
      });
      var qe = Pe;
      /* harmony default export */

      __webpack_exports__["default"] = qe;
      /***/
    },

    /***/
    "XuPK":
    /*!************************************************************************!*\
      !*** ./node_modules/@arcgis/core/form/elements/RelationshipElement.js ***!
      \************************************************************************/

    /*! exports provided: default */

    /***/
    function XuPK(module, __webpack_exports__, __webpack_require__) {
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


      var _popup_support_RelatedRecordsInfoFieldOrder_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
      /*! ../../popup/support/RelatedRecordsInfoFieldOrder.js */
      "ouUy");
      /* harmony import */


      var _Element_js__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
      /*! ./Element.js */
      "qKY0");
      /*
      All material copyright ESRI, All Rights Reserved, unless otherwise specified.
      See https://js.arcgis.com/4.18/esri/copyright.txt for details.
      */


      var p;

      var l = p = /*#__PURE__*/function (_Element_js__WEBPACK_2) {
        _inherits(_class, _Element_js__WEBPACK_2);

        var _super8 = _createSuper(_class);

        function _class(e) {
          var _this23;

          _classCallCheck(this, _class);

          _this23 = _super8.call(this, e), _this23.displayCount = null, _this23.displayType = "list", _this23.editable = !0, _this23.orderByFields = null, _this23.relationshipId = null, _this23.type = "relationship";
          return _this23;
        }

        _createClass(_class, [{
          key: "clone",
          value: function clone() {
            return new p({
              description: this.description,
              displayCount: this.displayCount,
              displayType: this.displayType,
              editable: this.editable,
              label: this.label,
              orderByFields: Object(_core_lang_js__WEBPACK_IMPORTED_MODULE_2__["clone"])(this.orderByFields),
              relationshipId: this.relationshipId,
              visibilityExpression: this.visibilityExpression
            });
          }
        }]);

        return _class;
      }(_Element_js__WEBPACK_IMPORTED_MODULE_11__["Element"]);

      Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_5__["property"])({
        type: Number,
        json: {
          write: !0
        }
      })], l.prototype, "displayCount", void 0), Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_5__["property"])({
        type: ["list"],
        json: {
          write: !0
        }
      })], l.prototype, "displayType", void 0), Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_5__["property"])({
        type: Boolean,
        json: {
          "default": !0,
          write: !0
        }
      })], l.prototype, "editable", void 0), Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_5__["property"])({
        type: [_popup_support_RelatedRecordsInfoFieldOrder_js__WEBPACK_IMPORTED_MODULE_10__["default"]],
        json: {
          write: !0
        }
      })], l.prototype, "orderByFields", void 0), Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_5__["property"])({
        type: Number,
        json: {
          write: !0
        }
      })], l.prototype, "relationshipId", void 0), Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_5__["property"])({
        type: ["relationship"],
        json: {
          read: !1,
          write: !0
        }
      })], l.prototype, "type", void 0), l = p = Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_subclass_js__WEBPACK_IMPORTED_MODULE_6__["subclass"])("esri.form.elements.RelationshipElement")], l);
      var d = l;
      /* harmony default export */

      __webpack_exports__["default"] = d;
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


      function t(_x5, _x6, _x7) {
        return _t5.apply(this, arguments);
      }
      /***/


      function _t5() {
        _t5 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee5(t, i, n) {
          var s, a, r;
          return regeneratorRuntime.wrap(function _callee5$(_context5) {
            while (1) {
              switch (_context5.prev = _context5.next) {
                case 0:
                  s = t && t.getAtOrigin && t.getAtOrigin("renderer", i.origin);

                  if (!(s && "unique-value" === s.type && s.styleOrigin)) {
                    _context5.next = 6;
                    break;
                  }

                  _context5.next = 4;
                  return Object(_core_asyncUtils_js__WEBPACK_IMPORTED_MODULE_2__["result"])(s.populateFromStyle());

                case 4:
                  a = _context5.sent;

                  if (Object(_core_promiseUtils_js__WEBPACK_IMPORTED_MODULE_1__["throwIfAborted"])(n), !1 === a.ok) {
                    r = a.error;
                    i && i.messages && i.messages.push(new _core_Warning_js__WEBPACK_IMPORTED_MODULE_0__["default"]("renderer:style-reference", "Failed to create unique value renderer from style reference: ".concat(r.message), {
                      error: r,
                      context: i
                    })), t.clear("renderer", i.origin);
                  }

                case 6:
                case "end":
                  return _context5.stop();
              }
            }
          }, _callee5);
        }));
        return _t5.apply(this, arguments);
      }
    },

    /***/
    "a/eU":
    /*!*******************************************************************************!*\
      !*** ./node_modules/@arcgis/core/form/elements/inputs/DateTimePickerInput.js ***!
      \*******************************************************************************/

    /*! exports provided: default */

    /***/
    function aEU(module, __webpack_exports__, __webpack_require__) {
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


      var _Input_js__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
      /*! ./Input.js */
      "/b0d");
      /*
      All material copyright ESRI, All Rights Reserved, unless otherwise specified.
      See https://js.arcgis.com/4.18/esri/copyright.txt for details.
      */


      var _s;

      function n(e) {
        return null != e ? new Date(e) : null;
      }

      function m(e) {
        return e ? e.getTime() : null;
      }

      var a = _s = /*#__PURE__*/function (_Input_js__WEBPACK_IM) {
        _inherits(s, _Input_js__WEBPACK_IM);

        var _super9 = _createSuper(s);

        function s(e) {
          var _this24;

          _classCallCheck(this, s);

          _this24 = _super9.call(this, e), _this24.includeTime = !1, _this24.max = null, _this24.min = null, _this24.type = "datetime-picker";
          return _this24;
        }

        _createClass(s, [{
          key: "readMax",
          value: function readMax(e, r) {
            return n(r.max);
          }
        }, {
          key: "writeMax",
          value: function writeMax(e, r) {
            r.max = m(e);
          }
        }, {
          key: "readMin",
          value: function readMin(e, r) {
            return n(r.min);
          }
        }, {
          key: "writeMin",
          value: function writeMin(e, r) {
            r.min = m(e);
          }
        }, {
          key: "clone",
          value: function clone() {
            return new _s({
              includeTime: this.includeTime,
              max: this.max,
              min: this.min,
              type: this.type
            });
          }
        }]);

        return s;
      }(_Input_js__WEBPACK_IMPORTED_MODULE_11__["default"]);

      Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_4__["property"])({
        type: Boolean,
        json: {
          write: !0,
          "default": !1
        }
      })], a.prototype, "includeTime", void 0), Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_4__["property"])({
        type: Date,
        json: {
          type: Number,
          write: !0
        }
      })], a.prototype, "max", void 0), Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_reader_js__WEBPACK_IMPORTED_MODULE_5__["reader"])("max")], a.prototype, "readMax", null), Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_writer_js__WEBPACK_IMPORTED_MODULE_7__["writer"])("max")], a.prototype, "writeMax", null), Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_4__["property"])({
        type: Date,
        json: {
          type: Number,
          write: !0
        }
      })], a.prototype, "min", void 0), Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_reader_js__WEBPACK_IMPORTED_MODULE_5__["reader"])("min")], a.prototype, "readMin", null), Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_writer_js__WEBPACK_IMPORTED_MODULE_7__["writer"])("min")], a.prototype, "writeMin", null), Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_4__["property"])({
        type: ["datetime-picker"],
        json: {
          read: !1,
          write: !0
        }
      })], a.prototype, "type", void 0), a = _s = Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_subclass_js__WEBPACK_IMPORTED_MODULE_6__["subclass"])("esri.form.elements.inputs.DateTimePickerInput")], a);
      var u = a;
      /* harmony default export */

      __webpack_exports__["default"] = u;
      /***/
    },

    /***/
    "aqJP":
    /*!************************************************************!*\
      !*** ./node_modules/@arcgis/core/form/support/elements.js ***!
      \************************************************************/

    /*! exports provided: buildTypeMaps, ensureType, fromJSON, toJSON */

    /***/
    function aqJP(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "buildTypeMaps", function () {
        return n;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ensureType", function () {
        return s;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "fromJSON", function () {
        return i;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "toJSON", function () {
        return u;
      });
      /* harmony import */


      var _core_accessorSupport_ensureType_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ../../core/accessorSupport/ensureType.js */
      "zqDF");
      /* harmony import */


      var _elements_Element_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ../elements/Element.js */
      "qKY0");
      /* harmony import */


      var _elements_AttachmentElement_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ../elements/AttachmentElement.js */
      "ll84");
      /* harmony import */


      var _elements_FieldElement_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ../elements/FieldElement.js */
      "ILGv");
      /* harmony import */


      var _elements_RelationshipElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ../elements/RelationshipElement.js */
      "XuPK");
      /*
      All material copyright ESRI, All Rights Reserved, unless otherwise specified.
      See https://js.arcgis.com/4.18/esri/copyright.txt for details.
      */


      function n(t) {
        return {
          typesWithGroup: {
            base: _elements_Element_js__WEBPACK_IMPORTED_MODULE_1__["Element"],
            key: "type",
            typeMap: {
              attachment: _elements_AttachmentElement_js__WEBPACK_IMPORTED_MODULE_2__["default"],
              field: _elements_FieldElement_js__WEBPACK_IMPORTED_MODULE_3__["default"],
              group: t,
              relationship: _elements_RelationshipElement_js__WEBPACK_IMPORTED_MODULE_4__["default"]
            }
          },
          typesWithoutGroup: {
            base: _elements_Element_js__WEBPACK_IMPORTED_MODULE_1__["Element"],
            key: "type",
            typeMap: {
              attachment: _elements_AttachmentElement_js__WEBPACK_IMPORTED_MODULE_2__["default"],
              field: _elements_FieldElement_js__WEBPACK_IMPORTED_MODULE_3__["default"],
              relationship: _elements_RelationshipElement_js__WEBPACK_IMPORTED_MODULE_4__["default"]
            }
          }
        };
      }

      function i(t, e) {
        var p = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : !0;
        if (!t) return null;
        var r = p ? e.typesWithGroup.typeMap : e.typesWithoutGroup.typeMap;
        return t.filter(function (t) {
          return r[t.type];
        }).map(function (t) {
          return r[t.type].fromJSON(t);
        });
      }

      function u(t, e) {
        var p = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : !0;
        if (!t) return null;
        var r = p ? e.typesWithGroup.typeMap : e.typesWithoutGroup.typeMap;
        return t.filter(function (t) {
          return r[t.type];
        }).map(function (t) {
          return t.toJSON();
        });
      }

      function s(e, p) {
        var r = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : !0;
        return e ? e.map(function (e) {
          return Object(_core_accessorSupport_ensureType_js__WEBPACK_IMPORTED_MODULE_0__["ensureOneOfType"])(r ? p.typesWithGroup : p.typesWithoutGroup, e);
        }) : null;
      }
      /***/

    },

    /***/
    "bu/E":
    /*!*********************************************************************!*\
      !*** ./node_modules/@arcgis/core/form/elements/inputs/TextInput.js ***!
      \*********************************************************************/

    /*! exports provided: default */

    /***/
    function buE(module, __webpack_exports__, __webpack_require__) {
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


      var _Input_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! ./Input.js */
      "/b0d");
      /*
      All material copyright ESRI, All Rights Reserved, unless otherwise specified.
      See https://js.arcgis.com/4.18/esri/copyright.txt for details.
      */


      var s;

      var p = s = /*#__PURE__*/function (_Input_js__WEBPACK_IM2) {
        _inherits(_class2, _Input_js__WEBPACK_IM2);

        var _super10 = _createSuper(_class2);

        function _class2(t) {
          var _this25;

          _classCallCheck(this, _class2);

          _this25 = _super10.call(this, t), _this25.maxLength = null, _this25.minLength = 0, _this25.type = null;
          return _this25;
        }

        _createClass(_class2, [{
          key: "clone",
          value: function clone() {
            return new s({
              maxLength: this.maxLength,
              minLength: this.minLength,
              type: this.type
            });
          }
        }]);

        return _class2;
      }(_Input_js__WEBPACK_IMPORTED_MODULE_9__["default"]);

      Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_4__["property"])({
        type: Number,
        json: {
          write: !0
        }
      })], p.prototype, "maxLength", void 0), Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_4__["property"])({
        type: Number,
        json: {
          "default": 0,
          write: !0
        }
      })], p.prototype, "minLength", void 0), Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_4__["property"])()], p.prototype, "type", void 0), p = s = Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_subclass_js__WEBPACK_IMPORTED_MODULE_5__["subclass"])("esri.form.elements.inputs.support.TextInput")], p);
      var i = p;
      /* harmony default export */

      __webpack_exports__["default"] = i;
      /***/
    },

    /***/
    "c9br":
    /*!*****************************************************************************!*\
      !*** ./node_modules/@arcgis/core/form/elements/inputs/RadioButtonsInput.js ***!
      \*****************************************************************************/

    /*! exports provided: default */

    /***/
    function c9br(module, __webpack_exports__, __webpack_require__) {
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


      var _Input_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! ./Input.js */
      "/b0d");
      /*
      All material copyright ESRI, All Rights Reserved, unless otherwise specified.
      See https://js.arcgis.com/4.18/esri/copyright.txt for details.
      */


      var _e12;

      var p = _e12 = /*#__PURE__*/function (_Input_js__WEBPACK_IM3) {
        _inherits(e, _Input_js__WEBPACK_IM3);

        var _super11 = _createSuper(e);

        function e(r) {
          var _this26;

          _classCallCheck(this, e);

          _this26 = _super11.call(this, r), _this26.type = "radio-buttons";
          return _this26;
        }

        _createClass(e, [{
          key: "clone",
          value: function clone() {
            return new _e12();
          }
        }]);

        return e;
      }(_Input_js__WEBPACK_IMPORTED_MODULE_9__["default"]);

      Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_4__["property"])({
        type: ["radio-buttons"],
        json: {
          read: !1,
          write: !0
        }
      })], p.prototype, "type", void 0), p = _e12 = Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_subclass_js__WEBPACK_IMPORTED_MODULE_5__["subclass"])("esri.form.elements.inputs.RadioButtonsInput")], p);
      var c = p;
      /* harmony default export */

      __webpack_exports__["default"] = c;
      /***/
    },

    /***/
    "eDnu":
    /*!******************************************************************!*\
      !*** ./node_modules/@arcgis/core/layers/support/FeatureIndex.js ***!
      \******************************************************************/

    /*! exports provided: default, FeatureIndex */

    /***/
    function eDnu(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "FeatureIndex", function () {
        return i;
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


      var _t6;

      var i = _t6 = /*#__PURE__*/function (_core_JSONSupport_js_6) {
        _inherits(t, _core_JSONSupport_js_6);

        var _super12 = _createSuper(t);

        function t(o) {
          _classCallCheck(this, t);

          return _super12.call(this, o);
        }

        _createClass(t, [{
          key: "clone",
          value: function clone() {
            var o = this.name,
                r = this.fields,
                s = this.isAscending,
                e = this.isUnique,
                i = this.description;
            return new _t6({
              name: o,
              fields: r,
              isAscending: s,
              isUnique: e,
              description: i
            });
          }
        }]);

        return t;
      }(_core_JSONSupport_js__WEBPACK_IMPORTED_MODULE_9__["JSONSupport"]);

      Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_4__["property"])({
        constructOnly: !0
      })], i.prototype, "name", void 0), Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_4__["property"])({
        constructOnly: !0
      })], i.prototype, "fields", void 0), Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_4__["property"])({
        constructOnly: !0
      })], i.prototype, "isAscending", void 0), Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_4__["property"])({
        constructOnly: !0
      })], i.prototype, "isUnique", void 0), Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_4__["property"])({
        constructOnly: !0
      })], i.prototype, "description", void 0), i = _t6 = Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_subclass_js__WEBPACK_IMPORTED_MODULE_5__["subclass"])("esri.layers.support.FeatureIndex")], i);
      var p = i;
      /* harmony default export */

      __webpack_exports__["default"] = p;
      /***/
    },

    /***/
    "f/7W":
    /*!*******************************************************************************!*\
      !*** ./node_modules/@arcgis/core/form/elements/inputs/BarcodeScannerInput.js ***!
      \*******************************************************************************/

    /*! exports provided: default */

    /***/
    function f7W(module, __webpack_exports__, __webpack_require__) {
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


      var _Input_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! ./Input.js */
      "/b0d");
      /*
      All material copyright ESRI, All Rights Reserved, unless otherwise specified.
      See https://js.arcgis.com/4.18/esri/copyright.txt for details.
      */


      var t;

      var p = t = /*#__PURE__*/function (_Input_js__WEBPACK_IM4) {
        _inherits(_class3, _Input_js__WEBPACK_IM4);

        var _super13 = _createSuper(_class3);

        function _class3(r) {
          var _this27;

          _classCallCheck(this, _class3);

          _this27 = _super13.call(this, r), _this27.type = "barcode-scanner";
          return _this27;
        }

        _createClass(_class3, [{
          key: "clone",
          value: function clone() {
            return new t();
          }
        }]);

        return _class3;
      }(_Input_js__WEBPACK_IMPORTED_MODULE_9__["default"]);

      Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_4__["property"])({
        type: ["barcode-scanner"],
        json: {
          read: !1,
          write: !0
        }
      })], p.prototype, "type", void 0), p = t = Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_subclass_js__WEBPACK_IMPORTED_MODULE_5__["subclass"])("esri.form.elements.inputs.BarcodeScannerInput")], p);
      var c = p;
      /* harmony default export */

      __webpack_exports__["default"] = c;
      /***/
    },

    /***/
    "he6E":
    /*!*************************************************************************!*\
      !*** ./node_modules/@arcgis/core/form/elements/inputs/ComboBoxInput.js ***!
      \*************************************************************************/

    /*! exports provided: default */

    /***/
    function he6E(module, __webpack_exports__, __webpack_require__) {
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


      var _Input_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! ./Input.js */
      "/b0d");
      /*
      All material copyright ESRI, All Rights Reserved, unless otherwise specified.
      See https://js.arcgis.com/4.18/esri/copyright.txt for details.
      */


      var t;

      var p = t = /*#__PURE__*/function (_Input_js__WEBPACK_IM5) {
        _inherits(_class4, _Input_js__WEBPACK_IM5);

        var _super14 = _createSuper(_class4);

        function _class4(o) {
          var _this28;

          _classCallCheck(this, _class4);

          _this28 = _super14.call(this, o), _this28.type = "combo-box";
          return _this28;
        }

        _createClass(_class4, [{
          key: "clone",
          value: function clone() {
            return new t();
          }
        }]);

        return _class4;
      }(_Input_js__WEBPACK_IMPORTED_MODULE_9__["default"]);

      Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_4__["property"])({
        type: ["combo-box"],
        json: {
          read: !1,
          write: !0
        }
      })], p.prototype, "type", void 0), p = t = Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_subclass_js__WEBPACK_IMPORTED_MODULE_5__["subclass"])("esri.form.elements.inputs.ComboBoxInput")], p);
      var c = p;
      /* harmony default export */

      __webpack_exports__["default"] = c;
      /***/
    },

    /***/
    "iyhF":
    /*!**************************************************************************!*\
      !*** ./node_modules/@arcgis/core/layers/mixins/CustomParametersMixin.js ***!
      \**************************************************************************/

    /*! exports provided: CustomParametersMixin */

    /***/
    function iyhF(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "CustomParametersMixin", function () {
        return e;
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


      var e = function (_e14) {
        function e(_x8) {
          return _e14.apply(this, arguments);
        }

        e.toString = function () {
          return _e14.toString();
        };

        return e;
      }(function (e) {
        var t = /*#__PURE__*/function (_e13) {
          _inherits(t, _e13);

          var _super15 = _createSuper(t);

          function t() {
            var _this29;

            _classCallCheck(this, t);

            _this29 = _super15.apply(this, arguments), _this29.customParameters = null;
            return _this29;
          }

          return t;
        }(e);

        return Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_4__["property"])({
          json: {
            write: !0,
            origins: {
              "web-scene": {
                write: !1
              }
            }
          }
        })], t.prototype, "customParameters", void 0), t = Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_subclass_js__WEBPACK_IMPORTED_MODULE_5__["subclass"])("esri.layers.mixins.CustomParametersMixin")], t), t;
      });
      /***/

    },

    /***/
    "kY3H":
    /*!***************************************************************************!*\
      !*** ./node_modules/@arcgis/core/layers/graphics/sources/MemorySource.js ***!
      \***************************************************************************/

    /*! exports provided: default, MemorySource */

    /***/
    function kY3H(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "MemorySource", function () {
        return G;
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


      var _core_maybe_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ../../../core/maybe.js */
      "srIe");
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


      var _core_accessorSupport_decorators_shared_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ../../../core/accessorSupport/decorators/shared.js */
      "y/NR");
      /* harmony import */


      var _core_accessorSupport_decorators_subclass_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! ../../../core/accessorSupport/decorators/subclass.js */
      "04ZG");
      /* harmony import */


      var _core_Error_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! ../../../core/Error.js */
      "zlDU");
      /* harmony import */


      var _core_urlUtils_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! ../../../core/urlUtils.js */
      "4EHJ");
      /* harmony import */


      var _core_uuid_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
      /*! ../../../core/uuid.js */
      "ju1D");
      /* harmony import */


      var _portal_support_resourceExtension_js__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
      /*! ../../../portal/support/resourceExtension.js */
      "9AIY");
      /* harmony import */


      var _core_promiseUtils_js__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
      /*! ../../../core/promiseUtils.js */
      "9MzC");
      /* harmony import */


      var _geometry_Extent_js__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
      /*! ../../../geometry/Extent.js */
      "OvF4");
      /* harmony import */


      var _geometry_Polygon_js__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(
      /*! ../../../geometry/Polygon.js */
      "Ehki");
      /* harmony import */


      var _geometry_support_typeUtils_js__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(
      /*! ../../../geometry/support/typeUtils.js */
      "dOLD");
      /* harmony import */


      var _geometry_js__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(
      /*! ../../../geometry.js */
      "4GrV");
      /* harmony import */


      var _core_Collection_js__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(
      /*! ../../../core/Collection.js */
      "LE9a");
      /* harmony import */


      var _core_Promise_js__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(
      /*! ../../../core/Promise.js */
      "+rMe");
      /* harmony import */


      var _core_Loadable_js__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(
      /*! ../../../core/Loadable.js */
      "bV/r");
      /* harmony import */


      var _Graphic_js__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(
      /*! ../../../Graphic.js */
      "jWBI");
      /* harmony import */


      var _core_workers_workers_js__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(
      /*! ../../../core/workers/workers.js */
      "36Co");
      /* harmony import */


      var _tasks_operations_zscale_js__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(
      /*! ../../../tasks/operations/zscale.js */
      "kUx5");
      /* harmony import */


      var _tasks_operations_queryZScale_js__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(
      /*! ../../../tasks/operations/queryZScale.js */
      "DWQd");
      /* harmony import */


      var _tasks_support_FeatureSet_js__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(
      /*! ../../../tasks/support/FeatureSet.js */
      "8prj");
      /*
      All material copyright ESRI, All Rights Reserved, unless otherwise specified.
      See https://js.arcgis.com/4.18/esri/copyright.txt for details.
      */


      var R = 0;

      var S = _core_Logger_js__WEBPACK_IMPORTED_MODULE_3__["default"].getLogger("esri.layers.graphics.sources.MemorySource");

      var G = /*#__PURE__*/function (_core_Loadable_js__WE) {
        _inherits(G, _core_Loadable_js__WE);

        var _super16 = _createSuper(G);

        function G(e) {
          var _this30;

          _classCallCheck(this, G);

          _this30 = _super16.call(this, e), _this30._idToClientGraphic = null, _this30.type = "memory";
          return _this30;
        }

        _createClass(G, [{
          key: "load",
          value: function load(e) {
            var t = Object(_core_maybe_js__WEBPACK_IMPORTED_MODULE_2__["isSome"])(e) ? e.signal : null;
            return this.addResolvingPromise(this._startWorker(t)), Object(_core_promiseUtils_js__WEBPACK_IMPORTED_MODULE_12__["resolve"])(this);
          }
        }, {
          key: "destroy",
          value: function destroy() {
            var e;
            null == (e = this._connection) || e.close(), this._connection = null;
          }
        }, {
          key: "workerGeometryType",
          get: function get() {
            var e = this.layer && this.layer.geometryType;
            return e ? this._geometryTypeRequiresClientGraphicMapping(e) ? "polygon" : e : null;
          }
        }, {
          key: "applyEdits",
          value: function applyEdits(e) {
            var _this31 = this;

            return this.load().then(function () {
              return _this31._applyEdits(e);
            });
          }
        }, {
          key: "openPorts",
          value: function openPorts() {
            var _this32 = this;

            return this.load().then(function () {
              return _this32._connection.openPorts();
            });
          }
        }, {
          key: "queryFeatures",
          value: function () {
            var _queryFeatures = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee6(e) {
              var t,
                  r,
                  s,
                  o,
                  _iterator5,
                  _step5,
                  _e15,
                  _t7,
                  _r,
                  _args6 = arguments;

              return regeneratorRuntime.wrap(function _callee6$(_context6) {
                while (1) {
                  switch (_context6.prev = _context6.next) {
                    case 0:
                      t = _args6.length > 1 && _args6[1] !== undefined ? _args6[1] : {};
                      _context6.next = 3;
                      return this.load(t);

                    case 3:
                      _context6.next = 5;
                      return this._connection.invoke("queryFeatures", e ? e.toJSON() : null, t);

                    case 5:
                      r = _context6.sent;
                      Object(_tasks_operations_queryZScale_js__WEBPACK_IMPORTED_MODULE_23__["applyFeatureSetZUnitScaling"])(e, this.layer.spatialReference, r);
                      s = _tasks_support_FeatureSet_js__WEBPACK_IMPORTED_MODULE_24__["default"].fromJSON(r);

                      if (this._requiresClientGraphicMapping()) {
                        _context6.next = 10;
                        break;
                      }

                      return _context6.abrupt("return", s);

                    case 10:
                      o = this.layer.objectIdField;
                      _iterator5 = _createForOfIteratorHelper(s.features);

                      try {
                        for (_iterator5.s(); !(_step5 = _iterator5.n()).done;) {
                          _e15 = _step5.value;
                          _t7 = _e15.attributes[o], _r = this._idToClientGraphic.get(_t7);
                          _r && (_e15.geometry = _r.geometry);
                        }
                      } catch (err) {
                        _iterator5.e(err);
                      } finally {
                        _iterator5.f();
                      }

                      return _context6.abrupt("return", (s.geometryType = this.layer.geometryType, s));

                    case 14:
                    case "end":
                      return _context6.stop();
                  }
                }
              }, _callee6, this);
            }));

            function queryFeatures(_x9) {
              return _queryFeatures.apply(this, arguments);
            }

            return queryFeatures;
          }()
        }, {
          key: "queryFeaturesJSON",
          value: function () {
            var _queryFeaturesJSON = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee7(e) {
              var t,
                  r,
                  _args7 = arguments;
              return regeneratorRuntime.wrap(function _callee7$(_context7) {
                while (1) {
                  switch (_context7.prev = _context7.next) {
                    case 0:
                      t = _args7.length > 1 && _args7[1] !== undefined ? _args7[1] : {};

                      if (!this._requiresClientGraphicMapping()) {
                        _context7.next = 3;
                        break;
                      }

                      return _context7.abrupt("return", Object(_core_promiseUtils_js__WEBPACK_IMPORTED_MODULE_12__["reject"])(new _core_Error_js__WEBPACK_IMPORTED_MODULE_8__["default"]("query-features-json:unsupported", "Cannot query in JSON format for client only geometry types (mesh and extent)")));

                    case 3:
                      _context7.next = 5;
                      return this.load(t);

                    case 5:
                      _context7.next = 7;
                      return this._connection.invoke("queryFeatures", e ? e.toJSON() : null, t);

                    case 7:
                      r = _context7.sent;
                      return _context7.abrupt("return", (Object(_tasks_operations_queryZScale_js__WEBPACK_IMPORTED_MODULE_23__["applyFeatureSetZUnitScaling"])(e, this.layer.spatialReference, r), r));

                    case 9:
                    case "end":
                      return _context7.stop();
                  }
                }
              }, _callee7, this);
            }));

            function queryFeaturesJSON(_x10) {
              return _queryFeaturesJSON.apply(this, arguments);
            }

            return queryFeaturesJSON;
          }()
        }, {
          key: "queryFeatureCount",
          value: function queryFeatureCount(e) {
            var _this33 = this;

            var t = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
            return this.load(t).then(function () {
              return _this33._connection.invoke("queryFeatureCount", e ? e.toJSON() : null, t);
            });
          }
        }, {
          key: "queryObjectIds",
          value: function queryObjectIds(e) {
            var _this34 = this;

            var t = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
            return this.load(t).then(function () {
              return _this34._connection.invoke("queryObjectIds", e ? e.toJSON() : null, t);
            });
          }
        }, {
          key: "queryExtent",
          value: function queryExtent(e) {
            var _this35 = this;

            var t = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
            return this.load(t).then(function () {
              return _this35._connection.invoke("queryExtent", e ? e.toJSON() : null, t);
            }).then(function (e) {
              return {
                count: e.count,
                extent: _geometry_Extent_js__WEBPACK_IMPORTED_MODULE_13__["default"].fromJSON(e.extent)
              };
            });
          }
        }, {
          key: "_applyEdits",
          value: function _applyEdits(e) {
            var _this36 = this;

            if (!this._connection) throw new _core_Error_js__WEBPACK_IMPORTED_MODULE_8__["default"]("feature-layer-source:edit-failure", "Memory source not loaded");
            var t = this.layer.objectIdField;
            var r = null;

            var s = [],
                o = [],
                i = function i(e) {
              return "objectId" in e && null != e.objectId ? e.objectId : "attributes" in e && null != e.attributes[t] ? e.attributes[t] : null;
            };

            if (e.addFeatures && (r = this._prepareAddFeatures(e.addFeatures)), e.deleteFeatures) {
              var _iterator6 = _createForOfIteratorHelper(e.deleteFeatures),
                  _step6;

              try {
                for (_iterator6.s(); !(_step6 = _iterator6.n()).done;) {
                  var _t8 = _step6.value;

                  var _e16 = i(_t8);

                  null != _e16 && s.push(_e16);
                }
              } catch (err) {
                _iterator6.e(err);
              } finally {
                _iterator6.f();
              }
            }

            var n = e.updateFeatures && this._idToClientGraphic ? new Map() : null;

            if (e.updateFeatures) {
              var _iterator7 = _createForOfIteratorHelper(e.updateFeatures),
                  _step7;

              try {
                for (_iterator7.s(); !(_step7 = _iterator7.n()).done;) {
                  var _t9 = _step7.value;

                  if (o.push(this._serializeFeature(_t9)), n) {
                    var _e17 = i(_t9);

                    null != _e17 && n.set(_e17, _t9);
                  }
                }
              } catch (err) {
                _iterator7.e(err);
              } finally {
                _iterator7.f();
              }
            }

            return Object(_tasks_operations_zscale_js__WEBPACK_IMPORTED_MODULE_22__["unapplyEditsZUnitScaling"])(r ? r.features : null, o, this.layer.spatialReference), this._connection.invoke("applyEdits", {
              adds: r ? r.features : [],
              updates: o,
              deletes: s
            }).then(function (_ref2) {
              var e = _ref2.fullExtent,
                  t = _ref2.featureEditResults;

              if (_this36.fullExtent = e, r && r.finish(t.uidToObjectId), _this36._idToClientGraphic) {
                if (n) {
                  var _iterator8 = _createForOfIteratorHelper(t.updateResults),
                      _step8;

                  try {
                    for (_iterator8.s(); !(_step8 = _iterator8.n()).done;) {
                      var _e18 = _step8.value;
                      if (!_e18.success) continue;

                      var _t10 = n.get(_e18.objectId);

                      null != _t10 && _this36._addIdToClientGraphic(_t10);
                    }
                  } catch (err) {
                    _iterator8.e(err);
                  } finally {
                    _iterator8.f();
                  }
                }

                var _iterator9 = _createForOfIteratorHelper(t.deleteResults),
                    _step9;

                try {
                  for (_iterator9.s(); !(_step9 = _iterator9.n()).done;) {
                    var _e19 = _step9.value;
                    _e19.success && _this36._idToClientGraphic["delete"](_e19.objectId);
                  }
                } catch (err) {
                  _iterator9.e(err);
                } finally {
                  _iterator9.f();
                }
              }

              return _this36._createEditsResult(t);
            });
          }
        }, {
          key: "_createEditsResult",
          value: function _createEditsResult(e) {
            return {
              addFeatureResults: e.addResults ? e.addResults.map(this._createFeatureEditResult, this) : [],
              updateFeatureResults: e.updateResults ? e.updateResults.map(this._createFeatureEditResult, this) : [],
              deleteFeatureResults: e.deleteResults ? e.deleteResults.map(this._createFeatureEditResult, this) : [],
              addAttachmentResults: [],
              updateAttachmentResults: [],
              deleteAttachmentResults: []
            };
          }
        }, {
          key: "_createFeatureEditResult",
          value: function _createFeatureEditResult(e) {
            var t = !0 === e.success ? null : e.error || {
              code: void 0,
              description: void 0
            };
            return {
              objectId: e.objectId,
              globalId: e.globalId,
              error: t ? new _core_Error_js__WEBPACK_IMPORTED_MODULE_8__["default"]("feature-layer-source:edit-failure", t.description, {
                code: t.code
              }) : null
            };
          }
        }, {
          key: "_prepareAddFeatures",
          value: function _prepareAddFeatures(e) {
            var t = new Map(),
                s = new Array(e.length);
            var o = null;

            for (var _i2 = 0; _i2 < e.length; _i2++) {
              var _n2 = e[_i2],
                  a = this._serializeFeature(_n2);

              !o && Object(_core_maybe_js__WEBPACK_IMPORTED_MODULE_2__["isSome"])(_n2.geometry) && (o = _n2.geometry.type), s[_i2] = a, t.set("".concat(a.uid), _n2);
            }

            var i = this;
            return {
              features: s,
              inferredGeometryType: o,
              finish: function finish(e) {
                var r = i.sourceJSON.objectIdField;

                for (var _s2 in e) {
                  var _o = e[_s2],
                      _n3 = t.get(_s2);

                  _n3 && (_n3.attributes || (_n3.attributes = {}), -1 === _o ? delete _n3.attributes[r] : _n3.attributes[r] = _o, i._addIdToClientGraphic(_n3));
                }
              }
            };
          }
        }, {
          key: "_addIdToClientGraphic",
          value: function _addIdToClientGraphic(e) {
            if (!this._idToClientGraphic) return;
            var t = this.sourceJSON.objectIdField,
                r = e.attributes && e.attributes[t];
            null != r && this._idToClientGraphic.set(r, e);
          }
        }, {
          key: "_requiresClientGraphicMapping",
          value: function _requiresClientGraphicMapping() {
            var e = this.layer.geometryType || this.sourceJSON.geometryType;
            return this._geometryTypeRequiresClientGraphicMapping(e);
          }
        }, {
          key: "_geometryRequiresClientGraphicMapping",
          value: function _geometryRequiresClientGraphicMapping(e) {
            return this._geometryTypeRequiresClientGraphicMapping(e.type);
          }
        }, {
          key: "_geometryTypeRequiresClientGraphicMapping",
          value: function _geometryTypeRequiresClientGraphicMapping(e) {
            return "mesh" === e || "multipatch" === e || "extent" === e;
          }
        }, {
          key: "_serializeFeature",
          value: function _serializeFeature(e) {
            var t = e.attributes,
                r = this._geometryForSerialization(e),
                s = (R++).toString();

            return r ? {
              uid: s,
              geometry: r.toJSON(),
              attributes: t
            } : {
              uid: s,
              attributes: t
            };
          }
        }, {
          key: "_geometryForSerialization",
          value: function _geometryForSerialization(e) {
            var t = e.geometry;
            if (Object(_core_maybe_js__WEBPACK_IMPORTED_MODULE_2__["isNone"])(t)) return null;

            if (this._geometryRequiresClientGraphicMapping(t)) {
              return t.extent ? _geometry_Polygon_js__WEBPACK_IMPORTED_MODULE_14__["default"].fromExtent(t.extent) : null;
            }

            return t;
          }
        }, {
          key: "_startWorker",
          value: function () {
            var _startWorker2 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee8(e) {
              var _this$layer, r, s, o, i, n, a, l, u, c, p, _iterator10, _step10, _e20, d;

              return regeneratorRuntime.wrap(function _callee8$(_context8) {
                while (1) {
                  switch (_context8.prev = _context8.next) {
                    case 0:
                      _context8.next = 2;
                      return Object(_core_workers_workers_js__WEBPACK_IMPORTED_MODULE_21__["open"])("MemorySourceWorker", {
                        strategy: Object(_core_has_js__WEBPACK_IMPORTED_MODULE_1__["default"])("feature-layers-workers") ? "dedicated" : "local",
                        signal: e
                      });

                    case 2:
                      this._connection = _context8.sent;
                      _this$layer = this.layer, r = _this$layer.fields, s = _this$layer.spatialReference, o = _this$layer.objectIdField, i = _this$layer.hasM, n = _this$layer.hasZ, a = _this$layer.timeInfo, l = "defaults" === this.layer.originOf("spatialReference"), u = this._prepareAddFeatures(this.items);
                      this.on("before-changes", function (e) {
                        S.error("Source modifications will not propagate after layer has been loaded. Please use .applyEdits() instead"), e.preventDefault();
                      });
                      c = {
                        features: u.features,
                        fields: r && r.map(function (e) {
                          return e.toJSON();
                        }),
                        geometryType: _geometry_support_typeUtils_js__WEBPACK_IMPORTED_MODULE_15__["typeKebabDictionary"].toJSON(this.workerGeometryType),
                        hasM: i,
                        hasZ: n,
                        objectIdField: o,
                        spatialReference: l ? null : s && s.toJSON(),
                        timeInfo: a ? a.toJSON() : null
                      };
                      _context8.next = 8;
                      return this._connection.invoke("load", c, {
                        signal: e
                      });

                    case 8:
                      p = _context8.sent;
                      _iterator10 = _createForOfIteratorHelper(p.warnings);

                      try {
                        for (_iterator10.s(); !(_step10 = _iterator10.n()).done;) {
                          _e20 = _step10.value;
                          S.warn(_e20.message, {
                            layer: this.layer,
                            warning: _e20
                          });
                        }
                      } catch (err) {
                        _iterator10.e(err);
                      } finally {
                        _iterator10.f();
                      }

                      p.featureErrors.length && S.warn("Encountered ".concat(p.featureErrors.length, " validation errors while loading features"), p.featureErrors);
                      d = p.layerDefinition;
                      this._geometryTypeRequiresClientGraphicMapping(u.inferredGeometryType) && (d.geometryType = _geometry_support_typeUtils_js__WEBPACK_IMPORTED_MODULE_15__["typeKebabDictionary"].toJSON(u.inferredGeometryType)), "mesh" !== d.geometryType && "mesh" !== this.layer.geometryType || (d.hasZ = !0), this.sourceJSON = d, this._requiresClientGraphicMapping() && (this._idToClientGraphic = new Map()), u.finish(p.assignedObjectIds);

                    case 14:
                    case "end":
                      return _context8.stop();
                  }
                }
              }, _callee8, this);
            }));

            function _startWorker(_x11) {
              return _startWorker2.apply(this, arguments);
            }

            return _startWorker;
          }()
        }]);

        return G;
      }(_core_Loadable_js__WEBPACK_IMPORTED_MODULE_19__["default"].LoadableMixin(Object(_core_Promise_js__WEBPACK_IMPORTED_MODULE_18__["EsriPromiseMixin"])(_core_Collection_js__WEBPACK_IMPORTED_MODULE_17__["default"])));

      Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_shared_js__WEBPACK_IMPORTED_MODULE_6__["shared"])({
        Type: _Graphic_js__WEBPACK_IMPORTED_MODULE_20__["default"],
        ensureType: Object(_core_accessorSupport_ensureType_js__WEBPACK_IMPORTED_MODULE_4__["ensureType"])(_Graphic_js__WEBPACK_IMPORTED_MODULE_20__["default"])
      })], G.prototype, "itemType", void 0), Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_5__["property"])()], G.prototype, "type", void 0), Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_5__["property"])({
        constructOnly: !0
      })], G.prototype, "layer", void 0), Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_5__["property"])({
        readOnly: !0,
        dependsOn: ["layer.geometryType"]
      })], G.prototype, "workerGeometryType", null), Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_5__["property"])()], G.prototype, "sourceJSON", void 0), G = Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_subclass_js__WEBPACK_IMPORTED_MODULE_7__["subclass"])("esri.layers.graphics.sources.MemorySource")], G);
      var O = G;
      /* harmony default export */

      __webpack_exports__["default"] = O;
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


      var t;

      var p = t = /*#__PURE__*/function (_FeatureReduction_js_) {
        _inherits(_class5, _FeatureReduction_js_);

        var _super17 = _createSuper(_class5);

        function _class5(r) {
          var _this37;

          _classCallCheck(this, _class5);

          _this37 = _super17.call(this, r), _this37.type = "selection";
          return _this37;
        }

        _createClass(_class5, [{
          key: "clone",
          value: function clone() {
            return new t();
          }
        }]);

        return _class5;
      }(_FeatureReduction_js__WEBPACK_IMPORTED_MODULE_9__["default"]);

      Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_4__["property"])({
        type: ["selection"]
      })], p.prototype, "type", void 0), p = t = Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_subclass_js__WEBPACK_IMPORTED_MODULE_5__["subclass"])("esri.layers.support.FeatureReductionSelection")], p);
      var c = p;
      /* harmony default export */

      __webpack_exports__["default"] = c;
      /***/
    },

    /***/
    "ll84":
    /*!**********************************************************************!*\
      !*** ./node_modules/@arcgis/core/form/elements/AttachmentElement.js ***!
      \**********************************************************************/

    /*! exports provided: default */

    /***/
    function ll84(module, __webpack_exports__, __webpack_require__) {
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


      var _Element_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! ./Element.js */
      "qKY0");
      /* harmony import */


      var _inputs_AttachmentInput_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
      /*! ./inputs/AttachmentInput.js */
      "oc78");
      /*
      All material copyright ESRI, All Rights Reserved, unless otherwise specified.
      See https://js.arcgis.com/4.18/esri/copyright.txt for details.
      */


      var i;

      var p = i = /*#__PURE__*/function (_Element_js__WEBPACK_3) {
        _inherits(_class6, _Element_js__WEBPACK_3);

        var _super18 = _createSuper(_class6);

        function _class6(t) {
          var _this38;

          _classCallCheck(this, _class6);

          _this38 = _super18.call(this, t), _this38.attachmentKeyword = null, _this38.editable = !0, _this38.input = null, _this38.type = "attachment";
          return _this38;
        }

        _createClass(_class6, [{
          key: "clone",
          value: function clone() {
            return new i({
              attachmentKeyword: this.attachmentKeyword,
              description: this.description,
              editable: this.editable,
              input: this.input,
              label: this.label,
              visibilityExpression: this.visibilityExpression
            });
          }
        }]);

        return _class6;
      }(_Element_js__WEBPACK_IMPORTED_MODULE_9__["Element"]);

      Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_4__["property"])({
        type: String,
        json: {
          write: !0
        }
      })], p.prototype, "attachmentKeyword", void 0), Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_4__["property"])({
        type: Boolean,
        json: {
          "default": !0,
          write: !0
        }
      })], p.prototype, "editable", void 0), Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_4__["property"])({
        type: _inputs_AttachmentInput_js__WEBPACK_IMPORTED_MODULE_10__["default"],
        json: {
          read: {
            source: "inputType"
          },
          write: {
            target: "inputType"
          }
        }
      })], p.prototype, "input", void 0), Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_4__["property"])({
        type: ["attachment"],
        json: {
          read: !1,
          write: !0
        }
      })], p.prototype, "type", void 0), p = i = Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_subclass_js__WEBPACK_IMPORTED_MODULE_5__["subclass"])("esri.form.elements.AttachmentElement")], p);
      var n = p;
      /* harmony default export */

      __webpack_exports__["default"] = n;
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

      var m = _c = /*#__PURE__*/function (_core_JSONSupport_js_7) {
        _inherits(c, _core_JSONSupport_js_7);

        var _super19 = _createSuper(c);

        function c(e) {
          var _this39;

          _classCallCheck(this, c);

          _this39 = _super19.call(this, e), _this39.type = "cluster", _this39.clusterRadius = Object(_core_screenUtils_js__WEBPACK_IMPORTED_MODULE_12__["toPt"])("80px"), _this39.clusterMinSize = Object(_core_screenUtils_js__WEBPACK_IMPORTED_MODULE_12__["toPt"])("12px"), _this39.clusterMaxSize = Object(_core_screenUtils_js__WEBPACK_IMPORTED_MODULE_12__["toPt"])("50px"), _this39.popupEnabled = !0, _this39.popupTemplate = null, _this39.labelingInfo = null, _this39.labelsVisible = !0, _this39.fields = null;
          return _this39;
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
    "oc78":
    /*!***************************************************************************!*\
      !*** ./node_modules/@arcgis/core/form/elements/inputs/AttachmentInput.js ***!
      \***************************************************************************/

    /*! exports provided: default */

    /***/
    function oc78(module, __webpack_exports__, __webpack_require__) {
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
      /*
      All material copyright ESRI, All Rights Reserved, unless otherwise specified.
      See https://js.arcgis.com/4.18/esri/copyright.txt for details.
      */


      var s;

      var p = s = /*#__PURE__*/function (_core_JSONSupport_js_8) {
        _inherits(_class7, _core_JSONSupport_js_8);

        var _super20 = _createSuper(_class7);

        function _class7(r) {
          var _this40;

          _classCallCheck(this, _class7);

          _this40 = _super20.call(this, r), _this40.type = null;
          return _this40;
        }

        _createClass(_class7, [{
          key: "clone",
          value: function clone() {
            return new s({
              type: this.type
            });
          }
        }]);

        return _class7;
      }(_core_JSONSupport_js__WEBPACK_IMPORTED_MODULE_9__["JSONSupport"]);

      Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_4__["property"])({
        type: ["attachment", "audio", "document", "image", "signature", "video"],
        json: {
          write: !0
        }
      })], p.prototype, "type", void 0), p = s = Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_subclass_js__WEBPACK_IMPORTED_MODULE_5__["subclass"])("esri.form.elements.inputs.AttachmentInput")], p);
      var c = p;
      /* harmony default export */

      __webpack_exports__["default"] = c;
      /***/
    },

    /***/
    "on0I":
    /*!************************************************************************!*\
      !*** ./node_modules/@arcgis/core/form/elements/inputs/TextBoxInput.js ***!
      \************************************************************************/

    /*! exports provided: default */

    /***/
    function on0I(module, __webpack_exports__, __webpack_require__) {
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


      var _TextInput_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! ./TextInput.js */
      "bu/E");
      /*
      All material copyright ESRI, All Rights Reserved, unless otherwise specified.
      See https://js.arcgis.com/4.18/esri/copyright.txt for details.
      */


      var s = /*#__PURE__*/function (_TextInput_js__WEBPAC) {
        _inherits(s, _TextInput_js__WEBPAC);

        var _super21 = _createSuper(s);

        function s(r) {
          var _this41;

          _classCallCheck(this, s);

          _this41 = _super21.call(this, r), _this41.type = "text-box";
          return _this41;
        }

        return s;
      }(_TextInput_js__WEBPACK_IMPORTED_MODULE_9__["default"]);

      Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_4__["property"])({
        type: ["text-box"],
        json: {
          read: !1,
          write: !0
        }
      })], s.prototype, "type", void 0), s = Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_subclass_js__WEBPACK_IMPORTED_MODULE_5__["subclass"])("esri.form.elements.inputs.TextBoxInput")], s);
      var p = s;
      /* harmony default export */

      __webpack_exports__["default"] = p;
      /***/
    },

    /***/
    "orEy":
    /*!*****************************************************************!*\
      !*** ./node_modules/@arcgis/core/layers/support/FeatureType.js ***!
      \*****************************************************************/

    /*! exports provided: default */

    /***/
    function orEy(module, __webpack_exports__, __webpack_require__) {
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


      var _CodedValueDomain_js__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
      /*! ./CodedValueDomain.js */
      "QQZE");
      /* harmony import */


      var _InheritedDomain_js__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(
      /*! ./InheritedDomain.js */
      "tanU");
      /* harmony import */


      var _RangeDomain_js__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(
      /*! ./RangeDomain.js */
      "3z0I");
      /* harmony import */


      var _domains_js__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(
      /*! ./domains.js */
      "WXCn");
      /* harmony import */


      var _FeatureTemplate_js__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(
      /*! ./FeatureTemplate.js */
      "rOQw");
      /*
      All material copyright ESRI, All Rights Reserved, unless otherwise specified.
      See https://js.arcgis.com/4.18/esri/copyright.txt for details.
      */


      var l = /*#__PURE__*/function (_core_JSONSupport_js_9) {
        _inherits(l, _core_JSONSupport_js_9);

        var _super22 = _createSuper(l);

        function l(o) {
          var _this42;

          _classCallCheck(this, l);

          _this42 = _super22.call(this, o), _this42.id = null, _this42.name = null, _this42.domains = null, _this42.templates = null;
          return _this42;
        }

        _createClass(l, [{
          key: "readDomains",
          value: function readDomains(o) {
            var r = {};

            for (var _e21 in o) {
              if (o.hasOwnProperty(_e21)) {
                var _t11 = o[_e21];

                switch (_t11.type) {
                  case "range":
                    r[_e21] = _RangeDomain_js__WEBPACK_IMPORTED_MODULE_15__["default"].fromJSON(_t11);
                    break;

                  case "codedValue":
                    r[_e21] = _CodedValueDomain_js__WEBPACK_IMPORTED_MODULE_13__["default"].fromJSON(_t11);
                    break;

                  case "inherited":
                    r[_e21] = _InheritedDomain_js__WEBPACK_IMPORTED_MODULE_14__["default"].fromJSON(_t11);
                }
              }
            }

            return r;
          }
        }, {
          key: "writeDomains",
          value: function writeDomains(o, e) {
            var t = {};

            for (var r in o) {
              o.hasOwnProperty(r) && (t[r] = o[r] && o[r].toJSON());
            }

            Object(_core_lang_js__WEBPACK_IMPORTED_MODULE_2__["fixJson"])(t), e.domains = t;
          }
        }, {
          key: "readTemplates",
          value: function readTemplates(o) {
            return o && o.map(function (o) {
              return new _FeatureTemplate_js__WEBPACK_IMPORTED_MODULE_17__["default"](o);
            });
          }
        }, {
          key: "writeTemplates",
          value: function writeTemplates(o, r) {
            r.templates = o && o.map(function (o) {
              return o.toJSON();
            });
          }
        }]);

        return l;
      }(_core_JSONSupport_js__WEBPACK_IMPORTED_MODULE_12__["JSONSupport"]);

      Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_5__["property"])({
        json: {
          write: !0
        }
      })], l.prototype, "id", void 0), Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_5__["property"])({
        json: {
          write: !0
        }
      })], l.prototype, "name", void 0), Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_5__["property"])({
        json: {
          write: !0
        }
      })], l.prototype, "domains", void 0), Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_reader_js__WEBPACK_IMPORTED_MODULE_6__["reader"])("domains")], l.prototype, "readDomains", null), Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_writer_js__WEBPACK_IMPORTED_MODULE_8__["writer"])("domains")], l.prototype, "writeDomains", null), Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_5__["property"])({
        json: {
          write: !0
        }
      })], l.prototype, "templates", void 0), Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_reader_js__WEBPACK_IMPORTED_MODULE_6__["reader"])("templates")], l.prototype, "readTemplates", null), Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_writer_js__WEBPACK_IMPORTED_MODULE_8__["writer"])("templates")], l.prototype, "writeTemplates", null), l = Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_subclass_js__WEBPACK_IMPORTED_MODULE_7__["subclass"])("esri.layers.support.FeatureType")], l);
      var u = l;
      /* harmony default export */

      __webpack_exports__["default"] = u;
      /***/
    },

    /***/
    "qKY0":
    /*!************************************************************!*\
      !*** ./node_modules/@arcgis/core/form/elements/Element.js ***!
      \************************************************************/

    /*! exports provided: Element, ElementMixin */

    /***/
    function qKY0(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "Element", function () {
        return i;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ElementMixin", function () {
        return s;
      });
      /* harmony import */


      var _chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ../../chunks/tslib.es6.js */
      "pO5D");
      /* harmony import */


      var _core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ../../core/accessorSupport/decorators/property.js */
      "WbKI");
      /* harmony import */


      var _core_accessorSupport_decorators_subclass_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ../../core/accessorSupport/decorators/subclass.js */
      "04ZG");
      /* harmony import */


      var _core_JSONSupport_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ../../core/JSONSupport.js */
      "ag7Y");
      /*
      All material copyright ESRI, All Rights Reserved, unless otherwise specified.
      See https://js.arcgis.com/4.18/esri/copyright.txt for details.
      */


      var s = function s(o) {
        var s = /*#__PURE__*/function (_o2) {
          _inherits(s, _o2);

          var _super23 = _createSuper(s);

          function s() {
            var _this43;

            _classCallCheck(this, s);

            _this43 = _super23.apply(this, arguments), _this43.description = null, _this43.label = null, _this43.visibilityExpression = null;
            return _this43;
          }

          return s;
        }(o);

        return Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_1__["property"])({
          type: String,
          json: {
            write: !0
          }
        })], s.prototype, "description", void 0), Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_1__["property"])({
          type: String,
          json: {
            write: !0
          }
        })], s.prototype, "label", void 0), Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_1__["property"])({
          type: String,
          json: {
            write: !0
          }
        })], s.prototype, "visibilityExpression", void 0), s = Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_subclass_js__WEBPACK_IMPORTED_MODULE_2__["subclass"])("esri.form.elements.ElementMixin")], s), s;
      };

      var i = /*#__PURE__*/function (_s3) {
        _inherits(i, _s3);

        var _super24 = _createSuper(i);

        function i(t) {
          var _this44;

          _classCallCheck(this, i);

          _this44 = _super24.call(this, t), _this44.type = null;
          return _this44;
        }

        return i;
      }(s(_core_JSONSupport_js__WEBPACK_IMPORTED_MODULE_3__["JSONSupport"]));

      Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_1__["property"])()], i.prototype, "type", void 0), i = Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_subclass_js__WEBPACK_IMPORTED_MODULE_2__["subclass"])("esri.form.elements.Element")], i);
      /***/
    },

    /***/
    "rOQw":
    /*!*********************************************************************!*\
      !*** ./node_modules/@arcgis/core/layers/support/FeatureTemplate.js ***!
      \*********************************************************************/

    /*! exports provided: default */

    /***/
    function rOQw(module, __webpack_exports__, __webpack_require__) {
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


      var _core_accessorSupport_decorators_subclass_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! ../../core/accessorSupport/decorators/subclass.js */
      "04ZG");
      /* harmony import */


      var _core_accessorSupport_decorators_writer_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! ../../core/accessorSupport/decorators/writer.js */
      "Cduq");
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
      /*
      All material copyright ESRI, All Rights Reserved, unless otherwise specified.
      See https://js.arcgis.com/4.18/esri/copyright.txt for details.
      */


      var a = new _core_jsonMap_js__WEBPACK_IMPORTED_MODULE_6__["JSONMap"]({
        esriFeatureEditToolAutoCompletePolygon: "auto-complete-polygon",
        esriFeatureEditToolCircle: "circle",
        esriFeatureEditToolEllipse: "ellipse",
        esriFeatureEditToolFreehand: "freehand",
        esriFeatureEditToolLine: "line",
        esriFeatureEditToolNone: "none",
        esriFeatureEditToolPoint: "point",
        esriFeatureEditToolPolygon: "polygon",
        esriFeatureEditToolRectangle: "rectangle",
        esriFeatureEditToolArrow: "arrow",
        esriFeatureEditToolTriangle: "triangle",
        esriFeatureEditToolLeftArrow: "left-arrow",
        esriFeatureEditToolRightArrow: "right-arrow",
        esriFeatureEditToolUpArrow: "up-arrow",
        esriFeatureEditToolDownArrow: "down-arrow"
      });

      var n = /*#__PURE__*/function (_core_JSONSupport_js_10) {
        _inherits(n, _core_JSONSupport_js_10);

        var _super25 = _createSuper(n);

        function n(o) {
          var _this45;

          _classCallCheck(this, n);

          _this45 = _super25.call(this, o), _this45.name = null, _this45.description = null, _this45.drawingTool = null, _this45.prototype = null, _this45.thumbnail = null;
          return _this45;
        }

        _createClass(n, [{
          key: "writeDrawingTool",
          value: function writeDrawingTool(o, r) {
            r.drawingTool = a.toJSON(o);
          }
        }, {
          key: "writePrototype",
          value: function writePrototype(o, t) {
            t.prototype = Object(_core_lang_js__WEBPACK_IMPORTED_MODULE_2__["fixJson"])(Object(_core_lang_js__WEBPACK_IMPORTED_MODULE_2__["clone"])(o), !0);
          }
        }, {
          key: "writeThumbnail",
          value: function writeThumbnail(o, t) {
            t.thumbnail = Object(_core_lang_js__WEBPACK_IMPORTED_MODULE_2__["fixJson"])(Object(_core_lang_js__WEBPACK_IMPORTED_MODULE_2__["clone"])(o));
          }
        }]);

        return n;
      }(_core_JSONSupport_js__WEBPACK_IMPORTED_MODULE_12__["JSONSupport"]);

      Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_5__["property"])({
        json: {
          write: !0
        }
      })], n.prototype, "name", void 0), Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_5__["property"])({
        json: {
          write: !0
        }
      })], n.prototype, "description", void 0), Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_5__["property"])({
        json: {
          read: a.read,
          write: a.write
        }
      })], n.prototype, "drawingTool", void 0), Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_writer_js__WEBPACK_IMPORTED_MODULE_8__["writer"])("drawingTool")], n.prototype, "writeDrawingTool", null), Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_5__["property"])({
        json: {
          write: !0
        }
      })], n.prototype, "prototype", void 0), Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_writer_js__WEBPACK_IMPORTED_MODULE_8__["writer"])("prototype")], n.prototype, "writePrototype", null), Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_5__["property"])({
        json: {
          write: !0
        }
      })], n.prototype, "thumbnail", void 0), Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_writer_js__WEBPACK_IMPORTED_MODULE_8__["writer"])("thumbnail")], n.prototype, "writeThumbnail", null), n = Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_subclass_js__WEBPACK_IMPORTED_MODULE_7__["subclass"])("esri.layers.support.FeatureTemplate")], n);
      var u = n;
      /* harmony default export */

      __webpack_exports__["default"] = u;
      /***/
    },

    /***/
    "uHfw":
    /*!*****************************************************************!*\
      !*** ./node_modules/@arcgis/core/form/elements/GroupElement.js ***!
      \*****************************************************************/

    /*! exports provided: default */

    /***/
    function uHfw(module, __webpack_exports__, __webpack_require__) {
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


      var _core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ../../core/accessorSupport/decorators/property.js */
      "WbKI");
      /* harmony import */


      var _core_accessorSupport_decorators_cast_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ../../core/accessorSupport/decorators/cast.js */
      "Gj5k");
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


      var _Element_js__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
      /*! ./Element.js */
      "qKY0");
      /* harmony import */


      var _support_elements_js__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
      /*! ../support/elements.js */
      "aqJP");
      /*
      All material copyright ESRI, All Rights Reserved, unless otherwise specified.
      See https://js.arcgis.com/4.18/esri/copyright.txt for details.
      */


      var _u;

      var d = _u = /*#__PURE__*/function (_Element_js__WEBPACK_4) {
        _inherits(u, _Element_js__WEBPACK_4);

        var _super26 = _createSuper(u);

        function u(e) {
          var _this46;

          _classCallCheck(this, u);

          _this46 = _super26.call(this, e), _this46.elements = null, _this46.initialState = "expanded", _this46.type = "group";
          return _this46;
        }

        _createClass(u, [{
          key: "castElements",
          value: function castElements(e) {
            return Object(_support_elements_js__WEBPACK_IMPORTED_MODULE_13__["ensureType"])(e, j, !1);
          }
        }, {
          key: "readElements",
          value: function readElements(e, t) {
            return Object(_support_elements_js__WEBPACK_IMPORTED_MODULE_13__["fromJSON"])(t.formElements, j, !1);
          }
        }, {
          key: "writeElements",
          value: function writeElements(e, t) {
            t.formElements = Object(_support_elements_js__WEBPACK_IMPORTED_MODULE_13__["toJSON"])(e, j, !1);
          }
        }, {
          key: "clone",
          value: function clone() {
            return new _u({
              description: this.description,
              elements: Object(_core_lang_js__WEBPACK_IMPORTED_MODULE_2__["clone"])(this.elements),
              initialState: this.initialState,
              label: this.label,
              visibilityExpression: this.visibilityExpression
            });
          }
        }]);

        return u;
      }(_Element_js__WEBPACK_IMPORTED_MODULE_12__["Element"]);

      Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_4__["property"])({
        json: {
          write: !0
        }
      })], d.prototype, "elements", void 0), Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_cast_js__WEBPACK_IMPORTED_MODULE_5__["cast"])("elements")], d.prototype, "castElements", null), Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_reader_js__WEBPACK_IMPORTED_MODULE_6__["reader"])("elements", ["formElements"])], d.prototype, "readElements", null), Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_writer_js__WEBPACK_IMPORTED_MODULE_8__["writer"])("elements")], d.prototype, "writeElements", null), Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_4__["property"])({
        type: ["collapsed", "expanded"],
        json: {
          "default": "expanded",
          write: !0
        }
      })], d.prototype, "initialState", void 0), Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_4__["property"])({
        type: String,
        json: {
          read: !1,
          write: !0
        }
      })], d.prototype, "type", void 0), d = _u = Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_subclass_js__WEBPACK_IMPORTED_MODULE_7__["subclass"])("esri.form.elements.GroupElement")], d);
      var j = Object(_support_elements_js__WEBPACK_IMPORTED_MODULE_13__["buildTypeMaps"])(d);
      var f = d;
      /* harmony default export */

      __webpack_exports__["default"] = f;
      /***/
    },

    /***/
    "uOKz":
    /*!******************************************************************!*\
      !*** ./node_modules/@arcgis/core/layers/support/Relationship.js ***!
      \******************************************************************/

    /*! exports provided: default */

    /***/
    function uOKz(module, __webpack_exports__, __webpack_require__) {
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


      var s = new _core_jsonMap_js__WEBPACK_IMPORTED_MODULE_5__["JSONMap"]({
        esriRelCardinalityOneToOne: "one-to-one",
        esriRelCardinalityOneToMany: "one-to-many",
        esriRelCardinalityManyToMany: "many-to-many"
      }),
          n = new _core_jsonMap_js__WEBPACK_IMPORTED_MODULE_5__["JSONMap"]({
        esriRelRoleOrigin: "origin",
        esriRelRoleDestination: "destination"
      });

      var a = /*#__PURE__*/function (_core_JSONSupport_js_11) {
        _inherits(a, _core_JSONSupport_js_11);

        var _super27 = _createSuper(a);

        function a(e) {
          var _this47;

          _classCallCheck(this, a);

          _this47 = _super27.call(this, e), _this47.cardinality = null, _this47.composite = null, _this47.id = null, _this47.keyField = null, _this47.keyFieldInRelationshipTable = null, _this47.name = null, _this47.relatedTableId = null, _this47.relationshipTableId = null, _this47.role = null;
          return _this47;
        }

        return a;
      }(_core_JSONSupport_js__WEBPACK_IMPORTED_MODULE_10__["JSONSupport"]);

      Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_4__["property"])({
        json: {
          read: s.read,
          write: s.write
        }
      })], a.prototype, "cardinality", void 0), Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_4__["property"])({
        json: {
          read: !0,
          write: !0
        }
      })], a.prototype, "composite", void 0), Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_4__["property"])({
        json: {
          read: !0,
          write: !0
        }
      })], a.prototype, "id", void 0), Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_4__["property"])({
        json: {
          read: !0,
          write: !0
        }
      })], a.prototype, "keyField", void 0), Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_4__["property"])({
        json: {
          read: !0,
          write: !0
        }
      })], a.prototype, "keyFieldInRelationshipTable", void 0), Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_4__["property"])({
        json: {
          read: !0,
          write: !0
        }
      })], a.prototype, "name", void 0), Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_4__["property"])({
        json: {
          read: !0,
          write: !0
        }
      })], a.prototype, "relatedTableId", void 0), Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_4__["property"])({
        json: {
          read: !0,
          write: !0
        }
      })], a.prototype, "relationshipTableId", void 0), Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_4__["property"])({
        json: {
          read: n.read,
          write: n.write
        }
      })], a.prototype, "role", void 0), a = Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_subclass_js__WEBPACK_IMPORTED_MODULE_6__["subclass"])("esri.layers.support.Relationship")], a);
      var l = a;
      /* harmony default export */

      __webpack_exports__["default"] = l;
      /***/
    },

    /***/
    "wO9+":
    /*!*************************************************************************!*\
      !*** ./node_modules/@arcgis/core/form/elements/inputs/TextAreaInput.js ***!
      \*************************************************************************/

    /*! exports provided: default */

    /***/
    function wO9(module, __webpack_exports__, __webpack_require__) {
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


      var _TextInput_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! ./TextInput.js */
      "bu/E");
      /*
      All material copyright ESRI, All Rights Reserved, unless otherwise specified.
      See https://js.arcgis.com/4.18/esri/copyright.txt for details.
      */


      var s = /*#__PURE__*/function (_TextInput_js__WEBPAC2) {
        _inherits(s, _TextInput_js__WEBPAC2);

        var _super28 = _createSuper(s);

        function s(r) {
          var _this48;

          _classCallCheck(this, s);

          _this48 = _super28.call(this, r), _this48.type = "text-area";
          return _this48;
        }

        return s;
      }(_TextInput_js__WEBPACK_IMPORTED_MODULE_9__["default"]);

      Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_4__["property"])({
        type: ["text-area"],
        json: {
          read: !1,
          write: !0
        }
      })], s.prototype, "type", void 0), s = Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_subclass_js__WEBPACK_IMPORTED_MODULE_5__["subclass"])("esri.form.elements.inputs.TextAreaInput")], s);
      var p = s;
      /* harmony default export */

      __webpack_exports__["default"] = p;
      /***/
    },

    /***/
    "y/NR":
    /*!*****************************************************************************!*\
      !*** ./node_modules/@arcgis/core/core/accessorSupport/decorators/shared.js ***!
      \*****************************************************************************/

    /*! exports provided: shared */

    /***/
    function yNR(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "shared", function () {
        return n;
      });
      /*
      All material copyright ESRI, All Rights Reserved, unless otherwise specified.
      See https://js.arcgis.com/4.18/esri/copyright.txt for details.
      */


      function n(n) {
        return function (r, t) {
          r[t] = n;
        };
      }
      /***/

    },

    /***/
    "za7T":
    /*!**********************************************************!*\
      !*** ./node_modules/@arcgis/core/form/ExpressionInfo.js ***!
      \**********************************************************/

    /*! exports provided: default */

    /***/
    function za7T(module, __webpack_exports__, __webpack_require__) {
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


      var _core_accessorSupport_decorators_subclass_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ../core/accessorSupport/decorators/subclass.js */
      "04ZG");
      /* harmony import */


      var _core_urlUtils_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ../core/urlUtils.js */
      "4EHJ");
      /* harmony import */


      var _core_uuid_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! ../core/uuid.js */
      "ju1D");
      /* harmony import */


      var _portal_support_resourceExtension_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! ../portal/support/resourceExtension.js */
      "9AIY");
      /* harmony import */


      var _core_JSONSupport_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! ../core/JSONSupport.js */
      "ag7Y");
      /*
      All material copyright ESRI, All Rights Reserved, unless otherwise specified.
      See https://js.arcgis.com/4.18/esri/copyright.txt for details.
      */


      var s;

      var p = s = /*#__PURE__*/function (_core_JSONSupport_js_12) {
        _inherits(_class8, _core_JSONSupport_js_12);

        var _super29 = _createSuper(_class8);

        function _class8(r) {
          var _this49;

          _classCallCheck(this, _class8);

          _this49 = _super29.call(this, r), _this49.expression = null, _this49.name = null, _this49.returnType = "boolean", _this49.title = null;
          return _this49;
        }

        _createClass(_class8, [{
          key: "clone",
          value: function clone() {
            return new s({
              name: this.name,
              title: this.title,
              expression: this.expression,
              returnType: this.returnType
            });
          }
        }]);

        return _class8;
      }(_core_JSONSupport_js__WEBPACK_IMPORTED_MODULE_9__["JSONSupport"]);

      Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_4__["property"])({
        type: String,
        json: {
          write: !0
        }
      })], p.prototype, "expression", void 0), Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_4__["property"])({
        type: String,
        json: {
          write: !0
        }
      })], p.prototype, "name", void 0), Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_4__["property"])({
        type: ["boolean"],
        json: {
          write: !0
        }
      })], p.prototype, "returnType", void 0), Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_4__["property"])({
        type: String,
        json: {
          write: !0
        }
      })], p.prototype, "title", void 0), p = s = Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_subclass_js__WEBPACK_IMPORTED_MODULE_5__["subclass"])("esri.form.ExpressionInfo")], p);
      var i = p;
      /* harmony default export */

      __webpack_exports__["default"] = i;
      /***/
    }
  }]);
})();
//# sourceMappingURL=default~BuildingSceneLayer-js~CSVLayer-js~FeatureLayer-js~MapNotesLayer-js~RouteLayer-js~SceneLayer-~7c09c9db-es5.js.map