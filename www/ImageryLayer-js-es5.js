(function () {
  function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

  function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

  function _createForOfIteratorHelper(o, allowArrayLike) { var it; if (typeof Symbol === "undefined" || o[Symbol.iterator] == null) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e16) { throw _e16; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = o[Symbol.iterator](); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e17) { didErr = true; err = _e17; }, f: function f() { try { if (!normalCompletion && it["return"] != null) it["return"](); } finally { if (didErr) throw err; } } }; }

  function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

  function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

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

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["ImageryLayer-js"], {
    /***/
    "+2rw":
    /*!****************************************************************************!*\
      !*** ./node_modules/@arcgis/core/tasks/support/ImageIdentifyParameters.js ***!
      \****************************************************************************/

    /*! exports provided: default */

    /***/
    function rw(module, __webpack_exports__, __webpack_require__) {
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


      var _core_JSONSupport_js__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
      /*! ../../core/JSONSupport.js */
      "ag7Y");
      /* harmony import */


      var _geometry_Point_js__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
      /*! ../../geometry/Point.js */
      "SuVq");
      /* harmony import */


      var _geometry_support_jsonUtils_js__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
      /*! ../../geometry/support/jsonUtils.js */
      "qatw");
      /* harmony import */


      var _TimeExtent_js__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(
      /*! ../../TimeExtent.js */
      "ZYtI");
      /* harmony import */


      var _layers_support_RasterFunction_js__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(
      /*! ../../layers/support/RasterFunction.js */
      "yqVY");
      /* harmony import */


      var _layers_support_MosaicRule_js__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(
      /*! ../../layers/support/MosaicRule.js */
      "M87H");
      /*
      All material copyright ESRI, All Rights Reserved, unless otherwise specified.
      See https://js.arcgis.com/4.18/esri/copyright.txt for details.
      */


      var _a;

      var y = _a = /*#__PURE__*/function (_core_JSONSupport_js_) {
        _inherits(a, _core_JSONSupport_js_);

        var _super = _createSuper(a);

        function a() {
          var _this;

          _classCallCheck(this, a);

          _this = _super.apply(this, arguments), _this.geometry = null, _this.renderingRules = null, _this.pixelSize = null, _this.returnGeometry = !0, _this.returnCatalogItems = !0, _this.returnPixelValues = !0, _this.maxItemCount = null, _this.timeExtent = null, _this.raster = void 0, _this.viewId = void 0;
          return _this;
        }

        _createClass(a, [{
          key: "writeGeometry",
          value: function writeGeometry(e, t, r) {
            null != e && (t.geometryType = Object(_geometry_support_jsonUtils_js__WEBPACK_IMPORTED_MODULE_13__["getJsonType"])(e), t[r] = JSON.stringify(e.toJSON()));
          }
        }, {
          key: "mosaicRule",
          set: function set(e) {
            var t = e;
            t && t.mosaicMethod && (t = _layers_support_MosaicRule_js__WEBPACK_IMPORTED_MODULE_16__["default"].fromJSON(_objectSpread(_objectSpread({}, t.toJSON()), {}, {
              mosaicMethod: t.mosaicMethod,
              mosaicOperation: t.mosaicOperation
            }))), this._set("mosaicRule", t);
          }
        }, {
          key: "writeMosaicRule",
          value: function writeMosaicRule(e, t, r) {
            null != e && (t[r] = JSON.stringify(e.toJSON()));
          }
        }, {
          key: "renderingRule",
          set: function set(e) {
            var t = e;
            t && t.rasterFunction && (t = _layers_support_RasterFunction_js__WEBPACK_IMPORTED_MODULE_15__["default"].fromJSON(_objectSpread(_objectSpread({}, t.toJSON()), {}, {
              rasterFunction: t.rasterFunction,
              rasterFunctionArguments: t.rasterFunctionArguments
            }))), this._set("renderingRule", t);
          }
        }, {
          key: "writeRenderingRule",
          value: function writeRenderingRule(e, t, r) {
            null != e && (t[r] = JSON.stringify(e.toJSON()));
          }
        }, {
          key: "writeRenderingRules",
          value: function writeRenderingRules(e, t, r) {
            null != e && (t[r] = JSON.stringify(e.map(function (e) {
              return e.toJSON();
            })));
          }
        }, {
          key: "writePixelSize",
          value: function writePixelSize(e, t, r) {
            null != e && (t[r] = JSON.stringify(e));
          }
        }, {
          key: "writeTimeExtent",
          value: function writeTimeExtent(e, t, r) {
            if (null != e) {
              var o = e.start ? e.start.getTime() : null,
                  i = e.end ? e.end.getTime() : null;
              t[r] = null != o ? null != i ? "".concat(o, ",").concat(i) : "".concat(o) : null;
            }
          }
        }, {
          key: "clone",
          value: function clone() {
            return new _a(Object(_core_lang_js__WEBPACK_IMPORTED_MODULE_2__["clone"])({
              geometry: this.geometry,
              mosaicRule: this.mosaicRule,
              renderingRule: this.renderingRule,
              pixelSize: this.pixelSize,
              returnGeometry: this.returnGeometry,
              returnCatalogItems: this.returnCatalogItems,
              returnPixelValues: this.returnPixelValues,
              maxItemCount: this.maxItemCount,
              raster: this.raster,
              viewId: this.viewId,
              timeExtent: this.timeExtent
            }));
          }
        }]);

        return a;
      }(_core_JSONSupport_js__WEBPACK_IMPORTED_MODULE_11__["JSONSupport"]);

      Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_5__["property"])({
        json: {
          write: !0
        }
      })], y.prototype, "geometry", void 0), Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_writer_js__WEBPACK_IMPORTED_MODULE_7__["writer"])("geometry")], y.prototype, "writeGeometry", null), Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_5__["property"])({
        type: _layers_support_MosaicRule_js__WEBPACK_IMPORTED_MODULE_16__["default"],
        json: {
          write: !0
        }
      })], y.prototype, "mosaicRule", null), Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_writer_js__WEBPACK_IMPORTED_MODULE_7__["writer"])("mosaicRule")], y.prototype, "writeMosaicRule", null), Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_5__["property"])({
        type: _layers_support_RasterFunction_js__WEBPACK_IMPORTED_MODULE_15__["default"],
        json: {
          write: !0
        }
      })], y.prototype, "renderingRule", null), Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_writer_js__WEBPACK_IMPORTED_MODULE_7__["writer"])("renderingRule")], y.prototype, "writeRenderingRule", null), Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_5__["property"])({
        type: [_layers_support_RasterFunction_js__WEBPACK_IMPORTED_MODULE_15__["default"]],
        json: {
          write: !0
        }
      })], y.prototype, "renderingRules", void 0), Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_writer_js__WEBPACK_IMPORTED_MODULE_7__["writer"])("renderingRules")], y.prototype, "writeRenderingRules", null), Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_5__["property"])({
        type: _geometry_Point_js__WEBPACK_IMPORTED_MODULE_12__["default"],
        json: {
          write: !0
        }
      })], y.prototype, "pixelSize", void 0), Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_writer_js__WEBPACK_IMPORTED_MODULE_7__["writer"])("pixelSize")], y.prototype, "writePixelSize", null), Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_5__["property"])({
        type: Boolean,
        json: {
          write: !0
        }
      })], y.prototype, "returnGeometry", void 0), Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_5__["property"])({
        type: Boolean,
        json: {
          write: !0
        }
      })], y.prototype, "returnCatalogItems", void 0), Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_5__["property"])({
        type: Boolean,
        json: {
          write: !0
        }
      })], y.prototype, "returnPixelValues", void 0), Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_5__["property"])({
        type: Number,
        json: {
          write: !0
        }
      })], y.prototype, "maxItemCount", void 0), Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_5__["property"])({
        type: _TimeExtent_js__WEBPACK_IMPORTED_MODULE_14__["default"],
        json: {
          write: {
            target: "time"
          }
        }
      })], y.prototype, "timeExtent", void 0), Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_writer_js__WEBPACK_IMPORTED_MODULE_7__["writer"])("timeExtent")], y.prototype, "writeTimeExtent", null), Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_5__["property"])({
        json: {
          write: !0
        }
      })], y.prototype, "raster", void 0), Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_5__["property"])({
        json: {
          write: !0
        }
      })], y.prototype, "viewId", void 0), y = _a = Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_subclass_js__WEBPACK_IMPORTED_MODULE_6__["subclass"])("esri.tasks.support.ImageIdentifyParameters")], y);
      var c = y;
      /* harmony default export */

      __webpack_exports__["default"] = c;
      /***/
    },

    /***/
    "/GVf":
    /*!**********************************************************!*\
      !*** ./node_modules/@arcgis/core/layers/ImageryLayer.js ***!
      \**********************************************************/

    /*! exports provided: default */

    /***/
    function GVf(module, __webpack_exports__, __webpack_require__) {
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


      var _core_accessorSupport_decorators_subclass_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ../core/accessorSupport/decorators/subclass.js */
      "04ZG");
      /* harmony import */


      var _core_accessorSupport_decorators_writer_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! ../core/accessorSupport/decorators/writer.js */
      "Cduq");
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


      var _core_promiseUtils_js__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
      /*! ../core/promiseUtils.js */
      "9MzC");
      /* harmony import */


      var _PopupTemplate_js__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
      /*! ../PopupTemplate.js */
      "SFah");
      /* harmony import */


      var _Layer_js__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
      /*! ./Layer.js */
      "pqNC");
      /* harmony import */


      var _core_MultiOriginJSONSupport_js__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(
      /*! ../core/MultiOriginJSONSupport.js */
      "5pQd");
      /* harmony import */


      var _support_commonProperties_js__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(
      /*! ./support/commonProperties.js */
      "IvSi");
      /* harmony import */


      var _mixins_OperationalLayer_js__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(
      /*! ./mixins/OperationalLayer.js */
      "uRH/");
      /* harmony import */


      var _mixins_ArcGISService_js__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(
      /*! ./mixins/ArcGISService.js */
      "PVlI");
      /* harmony import */


      var _mixins_BlendLayer_js__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(
      /*! ./mixins/BlendLayer.js */
      "mXvl");
      /* harmony import */


      var _mixins_PortalLayer_js__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(
      /*! ./mixins/PortalLayer.js */
      "DbUH");
      /* harmony import */


      var _mixins_RefreshableLayer_js__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(
      /*! ./mixins/RefreshableLayer.js */
      "jhcG");
      /* harmony import */


      var _mixins_ScaleRangeLayer_js__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(
      /*! ./mixins/ScaleRangeLayer.js */
      "WmKv");
      /* harmony import */


      var _mixins_TemporalLayer_js__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(
      /*! ./mixins/TemporalLayer.js */
      "YBpl");
      /* harmony import */


      var _support_popupUtils_js__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(
      /*! ../support/popupUtils.js */
      "9Ruv");
      /* harmony import */


      var _mixins_ArcGISImageService_js__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(
      /*! ./mixins/ArcGISImageService.js */
      "3xqP");
      /*
      All material copyright ESRI, All Rights Reserved, unless otherwise specified.
      See https://js.arcgis.com/4.18/esri/copyright.txt for details.
      */


      var j = /*#__PURE__*/function (_Object) {
        _inherits(j, _Object);

        var _super2 = _createSuper(j);

        function j() {
          var _this2;

          _classCallCheck(this, j);

          for (var _len = arguments.length, e = new Array(_len), _key = 0; _key < _len; _key++) {
            e[_key] = arguments[_key];
          }

          _this2 = _super2.call.apply(_super2, [this].concat(e)), _this2.legendEnabled = !0, _this2.isReference = null, _this2.operationalLayerType = "ArcGISImageServiceLayer", _this2.popupEnabled = !0, _this2.popupTemplate = null, _this2.type = "imagery";
          return _this2;
        }

        _createClass(j, [{
          key: "normalizeCtorArgs",
          value: function normalizeCtorArgs(e, r) {
            return "string" == typeof e ? _objectSpread({
              url: e
            }, r) : e;
          }
        }, {
          key: "load",
          value: function load(e) {
            var _this3 = this;

            var t = Object(_core_maybe_js__WEBPACK_IMPORTED_MODULE_2__["isSome"])(e) ? e.signal : null;
            return this.addResolvingPromise(this.loadFromPortal({
              supportedTypes: ["Image Service"]
            }, e).then(function () {
              return _this3._fetchService(t);
            }, function () {
              return _this3._fetchService(t);
            })), Object(_core_promiseUtils_js__WEBPACK_IMPORTED_MODULE_11__["resolve"])(this);
          }
        }, {
          key: "writeOperationalLayerType",
          value: function writeOperationalLayerType(e, r, t) {
            var o;
            var i = "vector-field" === (null == (o = this.renderer) ? void 0 : o.type);
            r[t] = i ? "ArcGISImageServiceVectorLayer" : "ArcGISImageServiceLayer";
          }
        }, {
          key: "defaultPopupTemplate",
          get: function get() {
            return this.createPopupTemplate();
          }
        }, {
          key: "createPopupTemplate",
          value: function createPopupTemplate(e) {
            var r = this.rasterFields,
                t = this.title,
                o = new Set();
            var i = !1,
                p = !1;
            this.capabilities && (i = this.capabilities.operations.supportsQuery && this.fields && this.fields.length > 0, p = i && ("esriImageServiceDataTypeVector-UV" === this.serviceDataType || "esriImageServiceDataTypeVector-MagDir" === this.serviceDataType));
            var s = new Set();
            i && (s.add("raster.itempixelvalue"), p && s.add("raster.magnitude").add("raster.direction"));

            var _iterator = _createForOfIteratorHelper(r),
                _step;

            try {
              for (_iterator.s(); !(_step = _iterator.n()).done;) {
                var _e = _step.value;

                var _r = _e.name.toLowerCase();

                s.has(_r) || _r.indexOf("raster.servicepixelvalue.") > -1 || o.add(_e.name);
              }
            } catch (err) {
              _iterator.e(err);
            } finally {
              _iterator.f();
            }

            return Object(_support_popupUtils_js__WEBPACK_IMPORTED_MODULE_23__["createPopupTemplate"])({
              fields: r,
              title: t
            }, _objectSpread(_objectSpread({}, e), {}, {
              visibleFieldNames: o
            }));
          }
        }, {
          key: "redraw",
          value: function redraw() {
            this.emit("redraw");
          }
        }]);

        return j;
      }(Object(_mixins_BlendLayer_js__WEBPACK_IMPORTED_MODULE_18__["BlendLayer"])(Object(_mixins_TemporalLayer_js__WEBPACK_IMPORTED_MODULE_22__["TemporalLayer"])(Object(_mixins_RefreshableLayer_js__WEBPACK_IMPORTED_MODULE_20__["RefreshableLayer"])(Object(_mixins_ScaleRangeLayer_js__WEBPACK_IMPORTED_MODULE_21__["ScaleRangeLayer"])(Object(_mixins_OperationalLayer_js__WEBPACK_IMPORTED_MODULE_16__["OperationalLayer"])(Object(_mixins_PortalLayer_js__WEBPACK_IMPORTED_MODULE_19__["PortalLayer"])(Object(_mixins_ArcGISImageService_js__WEBPACK_IMPORTED_MODULE_24__["ArcGISImageService"])(Object(_mixins_ArcGISService_js__WEBPACK_IMPORTED_MODULE_17__["ArcGISService"])(Object(_core_MultiOriginJSONSupport_js__WEBPACK_IMPORTED_MODULE_14__["MultiOriginJSONMixin"])(_Layer_js__WEBPACK_IMPORTED_MODULE_13__["default"]))))))))));

      Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_5__["property"])(_support_commonProperties_js__WEBPACK_IMPORTED_MODULE_15__["legendEnabled"])], j.prototype, "legendEnabled", void 0), Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_5__["property"])({
        type: ["show", "hide"]
      })], j.prototype, "listMode", void 0), Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_5__["property"])({
        type: Boolean,
        json: {
          read: !1,
          write: {
            enabled: !0,
            overridePolicy: function overridePolicy() {
              return {
                enabled: !1
              };
            }
          }
        }
      })], j.prototype, "isReference", void 0), Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_5__["property"])({
        type: ["ArcGISImageServiceLayer"],
        json: {
          origins: {
            "web-map": {
              type: ["ArcGISImageServiceLayer", "ArcGISImageServiceVectorLayer"],
              read: !1,
              write: {
                target: "layerType",
                ignoreOrigin: !0
              }
            }
          }
        }
      })], j.prototype, "operationalLayerType", void 0), Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_writer_js__WEBPACK_IMPORTED_MODULE_7__["writer"])("web-map", "operationalLayerType")], j.prototype, "writeOperationalLayerType", null), Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_5__["property"])(_support_commonProperties_js__WEBPACK_IMPORTED_MODULE_15__["popupEnabled"])], j.prototype, "popupEnabled", void 0), Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_5__["property"])({
        type: _PopupTemplate_js__WEBPACK_IMPORTED_MODULE_12__["default"],
        json: {
          read: {
            source: "popupInfo"
          },
          write: {
            target: "popupInfo"
          }
        }
      })], j.prototype, "popupTemplate", void 0), Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_5__["property"])({
        readOnly: !0,
        dependsOn: ["fields", "title"]
      })], j.prototype, "defaultPopupTemplate", null), Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_5__["property"])({
        readOnly: !0,
        json: {
          read: !1
        }
      })], j.prototype, "type", void 0), j = Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_subclass_js__WEBPACK_IMPORTED_MODULE_6__["subclass"])("esri.layers.ImageryLayer")], j);
      var I = j;
      /* harmony default export */

      __webpack_exports__["default"] = I;
      /***/
    },

    /***/
    "32ia":
    /*!********************************************************!*\
      !*** ./node_modules/@arcgis/core/rest/imageService.js ***!
      \********************************************************/

    /*! exports provided: computeHistograms, computeStatisticsHistograms, identify */

    /***/
    function ia(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "computeHistograms", function () {
        return u;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "computeStatisticsHistograms", function () {
        return m;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "identify", function () {
        return c;
      });
      /* harmony import */


      var _core_maybe_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ../core/maybe.js */
      "srIe");
      /* harmony import */


      var _request_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ../request.js */
      "Lqtk");
      /* harmony import */


      var _geometry_support_normalizeUtils_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ../geometry/support/normalizeUtils.js */
      "qNUd");
      /* harmony import */


      var _utils_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./utils.js */
      "u3Ia");
      /* harmony import */


      var _tasks_support_ImageIdentifyResult_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ../tasks/support/ImageIdentifyResult.js */
      "YgyX");
      /*
      All material copyright ESRI, All Rights Reserved, unless otherwise specified.
      See https://js.arcgis.com/4.18/esri/copyright.txt for details.
      */


      function i(_x, _x2, _x3) {
        return _i.apply(this, arguments);
      }

      function _i() {
        _i = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(s, a, i) {
          var m, u, c, f, g, l;
          return regeneratorRuntime.wrap(function _callee$(_context) {
            while (1) {
              switch (_context.prev = _context.next) {
                case 0:
                  m = Object(_utils_js__WEBPACK_IMPORTED_MODULE_3__["parseUrl"])(s);
                  u = a.geometry ? [a.geometry] : [];
                  _context.next = 4;
                  return Object(_geometry_support_normalizeUtils_js__WEBPACK_IMPORTED_MODULE_2__["normalizeCentralMeridian"])(u);

                case 4:
                  c = _context.sent;
                  f = a.toJSON();
                  !function (t) {
                    var s = null == t ? void 0 : t.time;

                    if (s && (null != s.start || null != s.end)) {
                      var o = [];
                      null != s.start && o.push(s.start), null != s.end && -1 === o.indexOf(s.end) && o.push(s.end), t.time = o.join(",");
                    }
                  }(f);
                  g = c && c[0];
                  Object(_core_maybe_js__WEBPACK_IMPORTED_MODULE_0__["isSome"])(g) && (f.geometry = g.toJSON());
                  l = Object(_utils_js__WEBPACK_IMPORTED_MODULE_3__["encode"])(_objectSpread(_objectSpread({}, m.query), {}, {
                    f: "json"
                  }, f));
                  return _context.abrupt("return", Object(_utils_js__WEBPACK_IMPORTED_MODULE_3__["asValidOptions"])(l, i));

                case 11:
                case "end":
                  return _context.stop();
              }
            }
          }, _callee);
        }));
        return _i.apply(this, arguments);
      }

      function m(_x4, _x5, _x6) {
        return _m.apply(this, arguments);
      }

      function _m() {
        _m = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee2(t, o, r) {
          var e, a, _yield$Object, m, u;

          return regeneratorRuntime.wrap(function _callee2$(_context2) {
            while (1) {
              switch (_context2.prev = _context2.next) {
                case 0:
                  _context2.next = 2;
                  return i(t, o, r);

                case 2:
                  e = _context2.sent;
                  a = Object(_utils_js__WEBPACK_IMPORTED_MODULE_3__["parseUrl"])(t);
                  _context2.next = 6;
                  return Object(_request_js__WEBPACK_IMPORTED_MODULE_1__["default"])("".concat(a.path, "/computeStatisticsHistograms"), e);

                case 6:
                  _yield$Object = _context2.sent;
                  m = _yield$Object.data;
                  u = m.statistics;
                  return _context2.abrupt("return", (null != u && u.length && u.forEach(function (t) {
                    t.avg = t.mean, t.stddev = t.standardDeviation;
                  }), {
                    statistics: u,
                    histograms: m.histograms
                  }));

                case 10:
                case "end":
                  return _context2.stop();
              }
            }
          }, _callee2);
        }));
        return _m.apply(this, arguments);
      }

      function u(_x7, _x8, _x9) {
        return _u.apply(this, arguments);
      }

      function _u() {
        _u = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee3(t, o, r) {
          var e, a, _yield$Object2, m;

          return regeneratorRuntime.wrap(function _callee3$(_context3) {
            while (1) {
              switch (_context3.prev = _context3.next) {
                case 0:
                  _context3.next = 2;
                  return i(t, o, r);

                case 2:
                  e = _context3.sent;
                  a = Object(_utils_js__WEBPACK_IMPORTED_MODULE_3__["parseUrl"])(t);
                  _context3.next = 6;
                  return Object(_request_js__WEBPACK_IMPORTED_MODULE_1__["default"])("".concat(a.path, "/computeHistograms"), e);

                case 6:
                  _yield$Object2 = _context3.sent;
                  m = _yield$Object2.data;
                  return _context3.abrupt("return", {
                    histograms: m.histograms
                  });

                case 9:
                case "end":
                  return _context3.stop();
              }
            }
          }, _callee3);
        }));
        return _u.apply(this, arguments);
      }

      function c(_x10, _x11, _x12) {
        return _c.apply(this, arguments);
      }
      /***/


      function _c() {
        _c = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee4(i, m, u) {
          var c, f;
          return regeneratorRuntime.wrap(function _callee4$(_context4) {
            while (1) {
              switch (_context4.prev = _context4.next) {
                case 0:
                  c = Object(_utils_js__WEBPACK_IMPORTED_MODULE_3__["parseUrl"])(i), f = m.geometry ? [m.geometry] : [];
                  return _context4.abrupt("return", Object(_geometry_support_normalizeUtils_js__WEBPACK_IMPORTED_MODULE_2__["normalizeCentralMeridian"])(f).then(function (o) {
                    var n = m.toJSON(),
                        a = o && o[0];
                    Object(_core_maybe_js__WEBPACK_IMPORTED_MODULE_0__["isSome"])(a) && (n.geometry = JSON.stringify(a.toJSON()));
                    var i = Object(_utils_js__WEBPACK_IMPORTED_MODULE_3__["encode"])(_objectSpread(_objectSpread({}, c.query), {}, {
                      f: "json"
                    }, n)),
                        f = Object(_utils_js__WEBPACK_IMPORTED_MODULE_3__["asValidOptions"])(i, u);
                    return Object(_request_js__WEBPACK_IMPORTED_MODULE_1__["default"])(c.path + "/identify", f);
                  }).then(function (t) {
                    return _tasks_support_ImageIdentifyResult_js__WEBPACK_IMPORTED_MODULE_4__["default"].fromJSON(t.data);
                  }));

                case 2:
                case "end":
                  return _context4.stop();
              }
            }
          }, _callee4);
        }));
        return _c.apply(this, arguments);
      }
    },

    /***/
    "3xqP":
    /*!***********************************************************************!*\
      !*** ./node_modules/@arcgis/core/layers/mixins/ArcGISImageService.js ***!
      \***********************************************************************/

    /*! exports provided: ArcGISImageService */

    /***/
    function xqP(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ArcGISImageService", function () {
        return oe;
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


      var _core_maybe_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ../../core/maybe.js */
      "srIe");
      /* harmony import */


      var _core_Logger_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ../../core/Logger.js */
      "6S2I");
      /* harmony import */


      var _core_accessorSupport_ensureType_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ../../core/accessorSupport/ensureType.js */
      "zqDF");
      /* harmony import */


      var _core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ../../core/accessorSupport/decorators/property.js */
      "WbKI");
      /* harmony import */


      var _core_accessorSupport_decorators_aliasOf_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! ../../core/accessorSupport/decorators/aliasOf.js */
      "Stxv");
      /* harmony import */


      var _core_jsonMap_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! ../../core/jsonMap.js */
      "+opI");
      /* harmony import */


      var _core_accessorSupport_decorators_reader_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! ../../core/accessorSupport/decorators/reader.js */
      "r88o");
      /* harmony import */


      var _core_accessorSupport_decorators_subclass_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
      /*! ../../core/accessorSupport/decorators/subclass.js */
      "04ZG");
      /* harmony import */


      var _core_accessorSupport_decorators_writer_js__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
      /*! ../../core/accessorSupport/decorators/writer.js */
      "Cduq");
      /* harmony import */


      var _core_Error_js__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
      /*! ../../core/Error.js */
      "zlDU");
      /* harmony import */


      var _core_urlUtils_js__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
      /*! ../../core/urlUtils.js */
      "4EHJ");
      /* harmony import */


      var _core_uuid_js__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(
      /*! ../../core/uuid.js */
      "ju1D");
      /* harmony import */


      var _portal_support_resourceExtension_js__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(
      /*! ../../portal/support/resourceExtension.js */
      "9AIY");
      /* harmony import */


      var _core_promiseUtils_js__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(
      /*! ../../core/promiseUtils.js */
      "9MzC");
      /* harmony import */


      var _geometry_SpatialReference_js__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(
      /*! ../../geometry/SpatialReference.js */
      "WZb1");
      /* harmony import */


      var _geometry_Point_js__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(
      /*! ../../geometry/Point.js */
      "SuVq");
      /* harmony import */


      var _geometry_Extent_js__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(
      /*! ../../geometry/Extent.js */
      "OvF4");
      /* harmony import */


      var _geometry_Polygon_js__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(
      /*! ../../geometry/Polygon.js */
      "Ehki");
      /* harmony import */


      var _geometry_js__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(
      /*! ../../geometry.js */
      "4GrV");
      /* harmony import */


      var _request_js__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(
      /*! ../../request.js */
      "Lqtk");
      /* harmony import */


      var _Graphic_js__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(
      /*! ../../Graphic.js */
      "jWBI");
      /* harmony import */


      var _support_commonProperties_js__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(
      /*! ../support/commonProperties.js */
      "IvSi");
      /* harmony import */


      var _support_PixelBlock_js__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(
      /*! ../support/PixelBlock.js */
      "Piei");
      /* harmony import */


      var _rasterRenderers_js__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(
      /*! ../../rasterRenderers.js */
      "ukD5");
      /* harmony import */


      var _support_Field_js__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(
      /*! ../support/Field.js */
      "ofM5");
      /* harmony import */


      var _support_FieldsIndex_js__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(
      /*! ../support/FieldsIndex.js */
      "gLc9");
      /* harmony import */


      var _tasks_support_FeatureSet_js__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(
      /*! ../../tasks/support/FeatureSet.js */
      "8prj");
      /* harmony import */


      var _tasks_support_Query_js__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(
      /*! ../../tasks/support/Query.js */
      "xk++");
      /* harmony import */


      var _tasks_QueryTask_js__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(
      /*! ../../tasks/QueryTask.js */
      "/uz8");
      /* harmony import */


      var _support_DimensionalDefinition_js__WEBPACK_IMPORTED_MODULE_32__ = __webpack_require__(
      /*! ../support/DimensionalDefinition.js */
      "tidM");
      /* harmony import */


      var _support_RasterFunction_js__WEBPACK_IMPORTED_MODULE_33__ = __webpack_require__(
      /*! ../support/RasterFunction.js */
      "yqVY");
      /* harmony import */


      var _support_imageryRendererUtils_js__WEBPACK_IMPORTED_MODULE_34__ = __webpack_require__(
      /*! ../support/imageryRendererUtils.js */
      "vai6");
      /* harmony import */


      var _support_MosaicRule_js__WEBPACK_IMPORTED_MODULE_35__ = __webpack_require__(
      /*! ../support/MosaicRule.js */
      "M87H");
      /* harmony import */


      var _support_ExportImageServiceParameters_js__WEBPACK_IMPORTED_MODULE_36__ = __webpack_require__(
      /*! ../support/ExportImageServiceParameters.js */
      "bxwL");
      /* harmony import */


      var _support_RasterInfo_js__WEBPACK_IMPORTED_MODULE_37__ = __webpack_require__(
      /*! ../support/RasterInfo.js */
      "pPNP");
      /* harmony import */


      var _support_RasterJobHandler_js__WEBPACK_IMPORTED_MODULE_38__ = __webpack_require__(
      /*! ../support/RasterJobHandler.js */
      "2mvb");
      /* harmony import */


      var _support_rasterFormats_RasterCodec_js__WEBPACK_IMPORTED_MODULE_39__ = __webpack_require__(
      /*! ../support/rasterFormats/RasterCodec.js */
      "FFFX");
      /* harmony import */


      var _renderers_support_rasterRendererHelper_js__WEBPACK_IMPORTED_MODULE_40__ = __webpack_require__(
      /*! ../../renderers/support/rasterRendererHelper.js */
      "HM2S");
      /* harmony import */


      var _renderers_support_RasterSymbolizer_js__WEBPACK_IMPORTED_MODULE_41__ = __webpack_require__(
      /*! ../../renderers/support/RasterSymbolizer.js */
      "ciAr");
      /* harmony import */


      var _rest_imageService_js__WEBPACK_IMPORTED_MODULE_42__ = __webpack_require__(
      /*! ../../rest/imageService.js */
      "32ia");
      /* harmony import */


      var _tasks_ImageIdentifyTask_js__WEBPACK_IMPORTED_MODULE_43__ = __webpack_require__(
      /*! ../../tasks/ImageIdentifyTask.js */
      "DGqI");
      /* harmony import */


      var _tasks_support_ImageIdentifyParameters_js__WEBPACK_IMPORTED_MODULE_44__ = __webpack_require__(
      /*! ../../tasks/support/ImageIdentifyParameters.js */
      "+2rw");
      /*
      All material copyright ESRI, All Rights Reserved, unless otherwise specified.
      See https://js.arcgis.com/4.18/esri/copyright.txt for details.
      */


      var te = _core_Logger_js__WEBPACK_IMPORTED_MODULE_4__["default"].getLogger("esri.layers.mixins.ArcGISImageService"),
          re = Object(_core_jsonMap_js__WEBPACK_IMPORTED_MODULE_8__["strict"])()({
        RSP_NearestNeighbor: "nearest",
        RSP_BilinearInterpolation: "bilinear",
        RSP_CubicConvolution: "cubic",
        RSP_Majority: "majority"
      }),
          ie = Object(_core_jsonMap_js__WEBPACK_IMPORTED_MODULE_8__["strict"])()({
        esriNoDataMatchAny: "any",
        esriNoDataMatchAll: "all"
      }),
          se = Object(_core_jsonMap_js__WEBPACK_IMPORTED_MODULE_8__["strict"])()({
        U1: "u1",
        U2: "u2",
        U4: "u4",
        U8: "u8",
        S8: "s8",
        U16: "u16",
        S16: "s16",
        U32: "u32",
        S32: "s32",
        F32: "f32",
        F64: "f64",
        C64: "c64",
        C128: "c128",
        UNKNOWN: "unknown"
      }),
          ne = new Set(["png", "png8", "png24", "png32", "jpg", "bmp", "gif", "jpgpng", "lerc", "tiff"]),
          ae = Object(_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_6__["ensureRange"])(_core_accessorSupport_ensureType_js__WEBPACK_IMPORTED_MODULE_5__["ensureNumber"], {
        min: 0,
        max: 255
      });

      var oe = function oe(s) {
        var a = /*#__PURE__*/function (_s) {
          _inherits(a, _s);

          var _super3 = _createSuper(a);

          function a() {
            var _this4;

            _classCallCheck(this, a);

            _this4 = _super3.apply(this, arguments), _this4._functionRasterInfos = {}, _this4._rasterJobHandler = {
              instance: null,
              refCount: 0,
              connectionPromise: null
            }, _this4._symbolizer = null, _this4._defaultServiceMosaicRule = null, _this4.rasterAttributeTableFieldPrefix = "Raster.", _this4.adjustAspectRatio = null, _this4.bandCount = null, _this4.bandIds = void 0, _this4.capabilities = null, _this4.compressionQuality = void 0, _this4.compressionTolerance = .01, _this4.copyright = null, _this4.definitionExpression = null, _this4.exportImageServiceParameters = null, _this4.rasterInfo = null, _this4.fields = null, _this4.fullExtent = null, _this4.hasMultidimensions = !1, _this4.imageMaxHeight = 4100, _this4.imageMaxWidth = 4100, _this4.interpolation = void 0, _this4.minScale = 0, _this4.maxScale = 0, _this4.multidimensionalInfo = null, _this4.noData = null, _this4.noDataInterpretation = void 0, _this4.objectIdField = null, _this4.pixelSizeX = null, _this4.pixelSizeY = null, _this4.pixelFilter = null, _this4.raster = void 0, _this4.viewId = void 0, _this4.renderer = null, _this4.rasterAttributeTable = null, _this4.rasterFunctionInfos = null, _this4.serviceDataType = null, _this4.spatialReference = null, _this4.pixelType = null, _this4.serviceRasterInfo = null, _this4.sourceJSON = null, _this4.url = null, _this4.version = null;
            return _this4;
          }

          _createClass(a, [{
            key: "initialize",
            value: function initialize() {
              this._set("exportImageServiceParameters", new _support_ExportImageServiceParameters_js__WEBPACK_IMPORTED_MODULE_36__["ExportImageServiceParameters"]({
                layer: this
              }));
            }
          }, {
            key: "readDefaultServiceMosaicRule",
            value: function readDefaultServiceMosaicRule(e, t) {
              return _support_MosaicRule_js__WEBPACK_IMPORTED_MODULE_35__["default"].fromJSON(t);
            }
          }, {
            key: "rasterFunctionNamesIndex",
            get: function get() {
              var e = new Map();
              return !this.rasterFunctionInfos || this.rasterFunctionInfos.length < 1 || this.rasterFunctionInfos.forEach(function (t) {
                e.set(t.name.toLowerCase().replace(/ /gi, "_"), t.name);
              }), e;
            }
          }, {
            key: "queryTask",
            get: function get() {
              return new _tasks_QueryTask_js__WEBPACK_IMPORTED_MODULE_31__["default"]({
                url: this.url
              });
            }
          }, {
            key: "readBandIds",
            value: function readBandIds(e, t) {
              if (Array.isArray(e) && e.length > 0 && e.every(function (e) {
                return "number" == typeof e;
              })) return e;
            }
          }, {
            key: "readCapabilities",
            value: function readCapabilities(e, t) {
              return this._readCapabilities(t);
            }
          }, {
            key: "writeCompressionQuality",
            value: function writeCompressionQuality(e, t, r) {
              null != e && "lerc" !== this.format && (t[r] = e);
            }
          }, {
            key: "writeCompressionTolerance",
            value: function writeCompressionTolerance(e, t, r) {
              "lerc" === this.format && null != e && (t[r] = e);
            }
          }, {
            key: "fieldsIndex",
            get: function get() {
              return this.fields ? new _support_FieldsIndex_js__WEBPACK_IMPORTED_MODULE_28__["default"](this.fields) : null;
            }
          }, {
            key: "format",
            set: function set(e) {
              e && ne.has(e.toLowerCase()) && this._set("format", e.toLowerCase());
            }
          }, {
            key: "readFormat",
            value: function readFormat(e, t) {
              return "esriImageServiceDataTypeVector-UV" === t.serviceDataType || "esriImageServiceDataTypeVector-MagDir" === t.serviceDataType || null != this.pixelFilter ? "lerc" : "jpgpng";
            }
          }, {
            key: "readMinScale",
            value: function readMinScale(e, t) {
              return null != t.minLOD && null != t.maxLOD ? e : 0;
            }
          }, {
            key: "readMaxScale",
            value: function readMaxScale(e, t) {
              return null != t.minLOD && null != t.maxLOD ? e : 0;
            }
          }, {
            key: "mosaicRule",
            set: function set(e) {
              var t = e;
              t && t.mosaicMethod && (t = _support_MosaicRule_js__WEBPACK_IMPORTED_MODULE_35__["default"].fromJSON(_objectSpread(_objectSpread({}, t.toJSON()), {}, {
                mosaicMethod: t.mosaicMethod,
                mosaicOperation: t.mosaicOperation
              }))), this._set("mosaicRule", t);
            }
          }, {
            key: "readMosaicRule",
            value: function readMosaicRule(e, t) {
              return _support_MosaicRule_js__WEBPACK_IMPORTED_MODULE_35__["default"].fromJSON(e || t.mosaicRule || t);
            }
          }, {
            key: "writeMosaicRule",
            value: function writeMosaicRule(e, t, r) {
              var i = this.mosaicRule;
              var s = this.definitionExpression;
              i ? s && s !== i.where && (i = i.clone(), i.where = s) : s && (i = new _support_MosaicRule_js__WEBPACK_IMPORTED_MODULE_35__["default"]({
                where: s
              })), this._isValidCustomizedMosaicRule(i) && (t[r] = i.toJSON());
            }
          }, {
            key: "writeNoData",
            value: function writeNoData(e, t, r) {
              null != e && "number" == typeof e && (t[r] = ae(e));
            }
          }, {
            key: "readObjectIdField",
            value: function readObjectIdField(e, t) {
              if (!e) {
                var r = t.fields.filter(function (e) {
                  return "esriFieldTypeOID" === e.type || "oid" === e.type;
                });
                e = r && r[0] && r[0].name;
              }

              return e;
            }
          }, {
            key: "parsedUrl",
            get: function get() {
              return this.url ? Object(_core_urlUtils_js__WEBPACK_IMPORTED_MODULE_13__["urlToObject"])(this.url) : null;
            }
          }, {
            key: "readRenderer",
            value: function readRenderer(e, t, r) {
              var i = t && t.layerDefinition && t.layerDefinition.drawingInfo && t.layerDefinition.drawingInfo.renderer,
                  s = Object(_rasterRenderers_js__WEBPACK_IMPORTED_MODULE_26__["read"])(i, r) || void 0;
              if (null != s) return Object(_support_imageryRendererUtils_js__WEBPACK_IMPORTED_MODULE_34__["isSupportedRendererType"])(s) || te.warn("ArcGISImageService", "Imagery layer doesn't support given renderer type."), s;
            }
          }, {
            key: "rasterFields",
            get: function get() {
              var e = this.rasterAttributeTableFieldPrefix || "Raster.",
                  r = new _support_Field_js__WEBPACK_IMPORTED_MODULE_27__["default"]({
                name: "Raster.ItemPixelValue",
                alias: "Item Pixel Value",
                domain: null,
                editable: !1,
                length: 50,
                type: "string"
              }),
                  i = new _support_Field_js__WEBPACK_IMPORTED_MODULE_27__["default"]({
                name: "Raster.ServicePixelValue",
                alias: "Service Pixel Value",
                domain: null,
                editable: !1,
                length: 50,
                type: "string"
              }),
                  s = new _support_Field_js__WEBPACK_IMPORTED_MODULE_27__["default"]({
                name: "Raster.ServicePixelValue.Raw",
                alias: "Raw Service Pixel Value",
                domain: null,
                editable: !1,
                length: 50,
                type: "string"
              });
              var n = this.fields ? Object(_core_lang_js__WEBPACK_IMPORTED_MODULE_2__["clone"])(this.fields) : [];
              n.push(i), this.capabilities.operations.supportsQuery && this.fields && this.fields.length > 0 && n.push(r), this.version >= 10.4 && this.rasterFunctionInfos && this.rasterFunctionInfos.some(function (e) {
                return "none" === e.name.toLowerCase();
              }) && n.push(s), this.rasterFunctionInfos && this.rasterFunctionInfos.filter(function (e) {
                return "none" !== e.name.toLowerCase();
              }).forEach(function (e) {
                n.push(new _support_Field_js__WEBPACK_IMPORTED_MODULE_27__["default"]({
                  name: "Raster.ServicePixelValue." + e.name,
                  alias: e.name,
                  domain: null,
                  editable: !1,
                  length: 50,
                  type: "string"
                }));
              }), null == this.pixelFilter || "esriImageServiceDataTypeVector-UV" !== this.serviceDataType && "esriImageServiceDataTypeVector-MagDir" !== this.serviceDataType || (n.push(new _support_Field_js__WEBPACK_IMPORTED_MODULE_27__["default"]({
                name: "Raster.Magnitude",
                alias: "Magnitude",
                domain: null,
                editable: !1,
                type: "double"
              })), n.push(new _support_Field_js__WEBPACK_IMPORTED_MODULE_27__["default"]({
                name: "Raster.Direction",
                alias: "Direction",
                domain: null,
                editable: !1,
                type: "double"
              })));

              var _a2 = this.rasterInfo.attributeTable && this.rasterInfo.attributeTable.fields || null;

              if (_a2 && _a2.length > 0) {
                var _r2 = _a2.filter(function (e) {
                  return "esriFieldTypeOID" !== e.type && "value" !== e.name.toLowerCase();
                }).map(function (r) {
                  var i = Object(_core_lang_js__WEBPACK_IMPORTED_MODULE_2__["clone"])(r);
                  return i.name = e + r.name, i;
                });

                n = n.concat(_r2);
              }

              return n;
            }
          }, {
            key: "renderingRule",
            set: function set(e) {
              var t = e;
              t && t.rasterFunction && (t = _support_RasterFunction_js__WEBPACK_IMPORTED_MODULE_33__["default"].fromJSON(_objectSpread(_objectSpread({}, t.toJSON()), {}, {
                rasterFunction: t.rasterFunction,
                rasterFunctionArguments: t.rasterFunctionArguments
              }))), this._set("renderingRule", t);
            }
          }, {
            key: "readRenderingRule",
            value: function readRenderingRule(e, t) {
              var r = t.rasterFunctionInfos;
              return t.renderingRule || r && r.length && "None" !== r[0].name ? _support_RasterFunction_js__WEBPACK_IMPORTED_MODULE_33__["default"].fromJSON(t.renderingRule || {
                rasterFunctionInfos: t.rasterFunctionInfos
              }) : null;
            }
          }, {
            key: "writeRenderingRule",
            value: function writeRenderingRule(e, t, r) {
              this._isRFTJson(e) || (t[r] = e.toJSON());
            }
          }, {
            key: "readSpatialReference",
            value: function readSpatialReference(e, t) {
              var r = e || t.extent.spatialReference;
              return r ? _geometry_SpatialReference_js__WEBPACK_IMPORTED_MODULE_17__["default"].fromJSON(r) : null;
            }
          }, {
            key: "readPixelType",
            value: function readPixelType(e) {
              return se.fromJSON(e) || e;
            }
          }, {
            key: "writePixelType",
            value: function writePixelType(e, t, i) {
              (Object(_core_maybe_js__WEBPACK_IMPORTED_MODULE_3__["isNone"])(this.serviceRasterInfo) || this.pixelType !== this.serviceRasterInfo.pixelType) && (t[i] = se.toJSON(e));
            }
          }, {
            key: "readVersion",
            value: function readVersion(e, t) {
              var r = t.currentVersion;
              return r || (r = t.hasOwnProperty("fields") || t.hasOwnProperty("timeInfo") ? 10 : 9.3), r;
            }
          }, {
            key: "applyFilter",
            value: function applyFilter(e) {
              var t = e;
              return this.pixelFilter && (t = this._clonePixelData(e), this.pixelFilter(t)), t;
            }
          }, {
            key: "applyRenderer",
            value: function () {
              var _applyRenderer = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee5(e, t) {
                var r, i, _s2, n, _a16;

                return regeneratorRuntime.wrap(function _callee5$(_context5) {
                  while (1) {
                    switch (_context5.prev = _context5.next) {
                      case 0:
                        r = e;

                        if (!(!this._isPicture() && this.renderer && this._symbolizer && !this.pixelFilter)) {
                          _context5.next = 17;
                          break;
                        }

                        i = JSON.stringify(this._cachedRendererJson) !== JSON.stringify(this.renderer.toJSON()), _s2 = this._rasterJobHandler.instance, n = this.bandIds;

                        if (!_s2) {
                          _context5.next = 16;
                          break;
                        }

                        _context5.t0 = i;

                        if (!_context5.t0) {
                          _context5.next = 10;
                          break;
                        }

                        this._symbolizer.bind();

                        _context5.next = 9;
                        return _s2.updateSymbolizer(this._symbolizer, t);

                      case 9:
                        this._cachedRendererJson = this.renderer.toJSON();

                      case 10:
                        _context5.next = 12;
                        return _s2.symbolize(_objectSpread({
                          bandIds: n
                        }, e), t);

                      case 12:
                        _a16 = _context5.sent;
                        r = {
                          extent: e.extent,
                          pixelBlock: _a16
                        };
                        _context5.next = 17;
                        break;

                      case 16:
                        r = {
                          extent: e.extent,
                          pixelBlock: this._symbolizer.symbolize(_objectSpread({
                            bandIds: n
                          }, e))
                        };

                      case 17:
                        return _context5.abrupt("return", r);

                      case 18:
                      case "end":
                        return _context5.stop();
                    }
                  }
                }, _callee5, this);
              }));

              function applyRenderer(_x13, _x14) {
                return _applyRenderer.apply(this, arguments);
              }

              return applyRenderer;
            }()
          }, {
            key: "destroy",
            value: function destroy() {
              this._shutdownJobHandler();
            }
          }, {
            key: "increaseRasterJobHandlerUsage",
            value: function increaseRasterJobHandlerUsage() {
              this._rasterJobHandler.refCount++;
            }
          }, {
            key: "decreaseRasterJobHandlerUsage",
            value: function decreaseRasterJobHandlerUsage() {
              this._rasterJobHandler.refCount--, this._rasterJobHandler.refCount <= 0 && this._shutdownJobHandler();
            }
          }, {
            key: "computeHistograms",
            value: function () {
              var _computeHistograms = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee6(e, t) {
                var r, i, s, n;
                return regeneratorRuntime.wrap(function _callee6$(_context6) {
                  while (1) {
                    switch (_context6.prev = _context6.next) {
                      case 0:
                        r = null == t ? void 0 : t.signal;
                        _context6.next = 3;
                        return this._fetchCapabilities(r);

                      case 3:
                        if (this.capabilities.operations.supportsComputeHistograms) {
                          _context6.next = 5;
                          break;
                        }

                        throw new _core_Error_js__WEBPACK_IMPORTED_MODULE_12__["default"]("imagery-layer:compute-histograms", "this operation is not supported on the input image service");

                      case 5:
                        e = e.clone();
                        i = this.raster, s = this.mosaicRule, n = this.renderingRule;
                        return _context6.abrupt("return", (n && null == e.renderingRule && (e.renderingRule = n), s && null == e.mosaicRule && (e.mosaicRule = s), i && null == e.raster && (e.raster = i), Object(_rest_imageService_js__WEBPACK_IMPORTED_MODULE_42__["computeHistograms"])(this.url, e, {
                          signal: r
                        })));

                      case 8:
                      case "end":
                        return _context6.stop();
                    }
                  }
                }, _callee6, this);
              }));

              function computeHistograms(_x15, _x16) {
                return _computeHistograms.apply(this, arguments);
              }

              return computeHistograms;
            }()
          }, {
            key: "computeStatisticsHistograms",
            value: function () {
              var _computeStatisticsHistograms = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee7(e, t) {
                var r, i, s, n;
                return regeneratorRuntime.wrap(function _callee7$(_context7) {
                  while (1) {
                    switch (_context7.prev = _context7.next) {
                      case 0:
                        r = null == t ? void 0 : t.signal;
                        _context7.next = 3;
                        return this._fetchCapabilities(r);

                      case 3:
                        if (this.capabilities.operations.supportsComputeStatisticsHistograms) {
                          _context7.next = 5;
                          break;
                        }

                        throw new _core_Error_js__WEBPACK_IMPORTED_MODULE_12__["default"]("imagery-layer:compute-statistics-histograms", "this operation is not supported on the input image service");

                      case 5:
                        e = e.clone();
                        i = this.raster, s = this.mosaicRule, n = this.renderingRule;
                        return _context7.abrupt("return", (n && null == e.renderingRule && (e.renderingRule = n), s && null == e.mosaicRule && (e.mosaicRule = s), i && null == e.raster && (e.raster = i), Object(_rest_imageService_js__WEBPACK_IMPORTED_MODULE_42__["computeStatisticsHistograms"])(this.url, e, {
                          signal: r
                        })));

                      case 8:
                      case "end":
                        return _context7.stop();
                    }
                  }
                }, _callee7, this);
              }));

              function computeStatisticsHistograms(_x17, _x18) {
                return _computeStatisticsHistograms.apply(this, arguments);
              }

              return computeStatisticsHistograms;
            }()
          }, {
            key: "fetchImage",
            value: function fetchImage(e, t, r) {
              var _this5 = this;

              var i = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : {};
              if (null == e || null == t || null == r) return Object(_core_promiseUtils_js__WEBPACK_IMPORTED_MODULE_16__["reject"])(new _core_Error_js__WEBPACK_IMPORTED_MODULE_12__["default"]("imagery-layer:fetch-image", "Insufficient parameters for requesting an image. A valid extent, width and height values are required."));
              var s = this.renderer || this._symbolizer ? this.generateRasterInfo(this.renderingRule, {
                signal: i.signal
              }) : null;
              return Object(_core_promiseUtils_js__WEBPACK_IMPORTED_MODULE_16__["when"])(s).then(function (s) {
                s && (_this5.rasterInfo = s);
                var n = {
                  imageServiceParameters: _this5.getExportImageServiceParameters(e, t, r, i.timeExtent),
                  imageProps: {
                    extent: e,
                    width: t,
                    height: r,
                    format: _this5.format
                  },
                  requestAsImageElement: i.requestAsImageElement && !_this5.pixelFilter || !1,
                  signal: i.signal
                };
                return _this5._requestArrayBuffer(n);
              });
            }
          }, {
            key: "fetchKeyProperties",
            value: function fetchKeyProperties(e) {
              var t = e && e.renderingRule && e.renderingRule.toJSON();
              return Object(_request_js__WEBPACK_IMPORTED_MODULE_22__["default"])(this.parsedUrl.path + "/keyProperties", {
                query: this._getQueryParams({
                  renderingRule: this.version >= 10.3 && t ? JSON.stringify(t) : null
                })
              }).then(function (e) {
                return e.data;
              });
            }
          }, {
            key: "fetchRasterAttributeTable",
            value: function fetchRasterAttributeTable(e) {
              var t = e && e.renderingRule && e.renderingRule.toJSON();
              return this.version < 10.1 ? Object(_core_promiseUtils_js__WEBPACK_IMPORTED_MODULE_16__["reject"])(new _core_Error_js__WEBPACK_IMPORTED_MODULE_12__["default"]("#fetchRasterAttributeTable()", "Failed to get rasterAttributeTable")) : Object(_request_js__WEBPACK_IMPORTED_MODULE_22__["default"])(this.parsedUrl.path + "/rasterAttributeTable", {
                query: this._getQueryParams({
                  renderingRule: this.version >= 10.3 && t ? JSON.stringify(t) : null
                })
              }).then(function (e) {
                return _tasks_support_FeatureSet_js__WEBPACK_IMPORTED_MODULE_29__["default"].fromJSON(e.data);
              });
            }
          }, {
            key: "getCatalogItemRasterInfo",
            value: function () {
              var _getCatalogItemRasterInfo = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee8(e, t) {
                var r, i, s, n, _a4;

                return regeneratorRuntime.wrap(function _callee8$(_context8) {
                  while (1) {
                    switch (_context8.prev = _context8.next) {
                      case 0:
                        r = Object(_request_js__WEBPACK_IMPORTED_MODULE_22__["default"])(this.parsedUrl.path + "/" + e + "/info", _objectSpread({
                          query: this._getQueryParams()
                        }, t)).then(function (e) {
                          return e.data;
                        });
                        i = Object(_request_js__WEBPACK_IMPORTED_MODULE_22__["default"])(this.parsedUrl.path + "/" + e + "/info/keyProperties", _objectSpread({
                          query: this._getQueryParams()
                        }, t)).then(function (e) {
                          return e.data;
                        })["catch"](function () {});
                        _context8.next = 4;
                        return Object(_core_promiseUtils_js__WEBPACK_IMPORTED_MODULE_16__["all"])([r, i]);

                      case 4:
                        s = _context8.sent;

                        if (s[0]) {
                          _context8.next = 7;
                          break;
                        }

                        return _context8.abrupt("return");

                      case 7:
                        n = _geometry_Extent_js__WEBPACK_IMPORTED_MODULE_19__["default"].fromJSON(s[0].extent), _a4 = s[0].statistics ? s[0].statistics.map(function (e) {
                          return {
                            min: e[0],
                            max: e[1],
                            avg: e[2],
                            stddev: e[3]
                          };
                        }) : null;
                        return _context8.abrupt("return", new _support_RasterInfo_js__WEBPACK_IMPORTED_MODULE_37__["default"]({
                          bandCount: s[0].bandCount,
                          extent: n,
                          spatialReference: n.sr,
                          pixelSize: new _geometry_Point_js__WEBPACK_IMPORTED_MODULE_18__["default"]({
                            x: s[0].pixelSizeX,
                            y: s[0].pixelSizeY,
                            spatialReference: n.sr
                          }),
                          pixelType: s[0].pixelType.toLowerCase(),
                          statistics: _a4,
                          histograms: s[0].histograms,
                          keyProperties: s[1] || {}
                        }));

                      case 9:
                      case "end":
                        return _context8.stop();
                    }
                  }
                }, _callee8, this);
              }));

              function getCatalogItemRasterInfo(_x19, _x20) {
                return _getCatalogItemRasterInfo.apply(this, arguments);
              }

              return getCatalogItemRasterInfo;
            }()
          }, {
            key: "getCatalogItemICSInfo",
            value: function () {
              var _getCatalogItemICSInfo = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee9(e, t) {
                var _yield$Object3, r, i, s, n, _a5, o, l, u, p, c, d, _e2, m, h, f, y, g, v, x, _e3, I, w, O, N, P, F, D, _e4, j, T, J, C;

                return regeneratorRuntime.wrap(function _callee9$(_context9) {
                  while (1) {
                    switch (_context9.prev = _context9.next) {
                      case 0:
                        _context9.next = 2;
                        return Object(_request_js__WEBPACK_IMPORTED_MODULE_22__["default"])(this.parsedUrl.path + "/" + e + "/info/ics", _objectSpread({
                          query: this._getQueryParams()
                        }, t));

                      case 2:
                        _yield$Object3 = _context9.sent;
                        r = _yield$Object3.data;
                        i = r && r.ics;

                        if (i) {
                          _context9.next = 7;
                          break;
                        }

                        return _context9.abrupt("return");

                      case 7:
                        s = null;
                        _context9.prev = 8;
                        _context9.next = 11;
                        return Object(_request_js__WEBPACK_IMPORTED_MODULE_22__["default"])(this.parsedUrl.path + "/" + e + "/info", _objectSpread({
                          query: this._getQueryParams()
                        }, t));

                      case 11:
                        s = _context9.sent.data.extent;
                        _context9.next = 16;
                        break;

                      case 14:
                        _context9.prev = 14;
                        _context9.t0 = _context9["catch"](8);

                      case 16:
                        if (!(!s || !s.spatialReference)) {
                          _context9.next = 18;
                          break;
                        }

                        return _context9.abrupt("return", {
                          ics: i,
                          icsToPixelTransform: null,
                          icsExtent: null,
                          northDirection: null
                        });

                      case 18:
                        n = this.version >= 10.7 ? Object(_request_js__WEBPACK_IMPORTED_MODULE_22__["default"])(this.parsedUrl.path + "/" + e + "/info/icstopixel", _objectSpread({
                          query: this._getQueryParams()
                        }, t)).then(function (e) {
                          return e.data;
                        })["catch"](function () {
                          return {};
                        }) : {}, _a5 = s.spatialReference, o = {
                          geometries: JSON.stringify({
                            geometryType: "esriGeometryEnvelope",
                            geometries: [s]
                          }),
                          inSR: _a5.wkid || JSON.stringify(_a5),
                          outSR: "0:" + e
                        }, l = Object(_request_js__WEBPACK_IMPORTED_MODULE_22__["default"])(this.parsedUrl.path + "/project", _objectSpread({
                          query: this._getQueryParams(o)
                        }, t)).then(function (e) {
                          return e.data;
                        })["catch"](function () {
                          return {};
                        }), u = (s.xmin + s.xmax) / 2, p = (s.ymax - s.ymin) / 6, c = s.ymin + p, d = [];

                        for (_e2 = 0; _e2 < 5; _e2++) {
                          d.push({
                            x: u,
                            y: c + p * _e2
                          });
                        }

                        m = {
                          geometries: JSON.stringify({
                            geometryType: "esriGeometryPoint",
                            geometries: d
                          }),
                          inSR: _a5.wkid || JSON.stringify(_a5),
                          outSR: "0:" + e
                        };
                        h = Object(_request_js__WEBPACK_IMPORTED_MODULE_22__["default"])(this.parsedUrl.path + "/project", _objectSpread({
                          query: this._getQueryParams(m)
                        }, t)).then(function (e) {
                          return e.data;
                        })["catch"](function () {
                          return {};
                        });
                        _context9.next = 24;
                        return Object(_core_promiseUtils_js__WEBPACK_IMPORTED_MODULE_16__["all"])([n, l, h]);

                      case 24:
                        f = _context9.sent;
                        y = f[0].ipxf;

                        if (null == y) {
                          _e3 = null == (g = i.geodataXform) ? void 0 : g.xf_0;
                          "topup" === (null == _e3 || null == (v = _e3.name) ? void 0 : v.toLowerCase()) && 6 === (null == _e3 || null == (x = _e3.coefficients) ? void 0 : x.length) && (y = {
                            affine: {
                              name: "ics [sensor: Frame] to pixel (column, row) transformation",
                              coefficients: _e3.coefficients,
                              cellsizeRatio: 0,
                              type: "GeometricXform"
                            }
                          });
                        }

                        I = _geometry_Extent_js__WEBPACK_IMPORTED_MODULE_19__["default"].fromJSON(f[1] && f[1].geometries && f[1].geometries[0]);
                        I && (I.spatialReference = new _geometry_SpatialReference_js__WEBPACK_IMPORTED_MODULE_17__["default"]({
                          wkid: 0,
                          imageCoordinateSystem: i
                        }));
                        w = f[2].geometries ? f[2].geometries.filter(function (e) {
                          return null != e && null != e.x && null != e.y && "NaN" !== e.x && "NaN" !== e.y;
                        }) : [], O = w.length;

                        if (!(O < 3)) {
                          _context9.next = 32;
                          break;
                        }

                        return _context9.abrupt("return", {
                          ics: i,
                          icsToPixelTransform: y,
                          icsExtent: I,
                          northDirection: null
                        });

                      case 32:
                        N = 0, P = 0, F = 0, D = 0;

                        for (_e4 = 0; _e4 < O; _e4++) {
                          N += w[_e4].x, P += w[_e4].y, F += w[_e4].x * w[_e4].x, D += w[_e4].x * w[_e4].y;
                        }

                        j = (O * D - N * P) / (O * F - N * N);
                        T = 0;
                        J = w[4].x > w[0].x, C = w[4].y > w[0].y;
                        return _context9.abrupt("return", (j === 1 / 0 ? T = C ? 90 : 270 : 0 === j ? T = J ? 0 : 180 : j > 0 ? T = J ? 180 * Math.atan(j) / Math.PI : 180 * Math.atan(j) / Math.PI + 180 : j < 0 && (T = C ? 180 + 180 * Math.atan(j) / Math.PI : 360 + 180 * Math.atan(j) / Math.PI), {
                          ics: i,
                          icsToPixelTransform: y,
                          icsExtent: I,
                          northDirection: T
                        }));

                      case 38:
                      case "end":
                        return _context9.stop();
                    }
                  }
                }, _callee9, this, [[8, 14]]);
              }));

              function getCatalogItemICSInfo(_x21, _x22) {
                return _getCatalogItemICSInfo.apply(this, arguments);
              }

              return getCatalogItemICSInfo;
            }()
          }, {
            key: "generateRasterInfo",
            value: function () {
              var _generateRasterInfo2 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee10(e, t) {
                var r, s;
                return regeneratorRuntime.wrap(function _callee10$(_context10) {
                  while (1) {
                    switch (_context10.prev = _context10.next) {
                      case 0:
                        if (!((!e || "none" === e.functionName.toLowerCase()) && Object(_core_maybe_js__WEBPACK_IMPORTED_MODULE_3__["isSome"])(this.serviceRasterInfo))) {
                          _context10.next = 2;
                          break;
                        }

                        return _context10.abrupt("return", this.serviceRasterInfo);

                      case 2:
                        r = function (e) {
                          if (!e) return null;
                          var t = JSON.stringify(e).match(/"rasterFunction":"(.*?")/gi),
                              r = null == t ? void 0 : t.map(function (e) {
                            return e.replace('"rasterFunction":"', "").replace('"', "");
                          });
                          return r ? r.join("/") : null;
                        }(e);

                        if (!this._functionRasterInfos[r]) {
                          _context10.next = 5;
                          break;
                        }

                        return _context10.abrupt("return", this._functionRasterInfos[r]);

                      case 5:
                        s = this._generateRasterInfo(e, t);
                        this._functionRasterInfos[r] = s;
                        _context10.prev = 7;
                        _context10.next = 10;
                        return s;

                      case 10:
                        return _context10.abrupt("return", _context10.sent);

                      case 13:
                        _context10.prev = 13;
                        _context10.t0 = _context10["catch"](7);
                        return _context10.abrupt("return", (this._functionRasterInfos[r] = null, null));

                      case 16:
                      case "end":
                        return _context10.stop();
                    }
                  }
                }, _callee10, this, [[7, 13]]);
              }));

              function generateRasterInfo(_x23, _x24) {
                return _generateRasterInfo2.apply(this, arguments);
              }

              return generateRasterInfo;
            }()
          }, {
            key: "getExportImageServiceParameters",
            value: function getExportImageServiceParameters(e, t, r, s) {
              var n = (e = e.clone().shiftCentralMeridian()).spatialReference;

              var _a6;

              if (n.imageCoordinateSystem) {
                var _n$imageCoordinateSys = n.imageCoordinateSystem,
                    _e5 = _n$imageCoordinateSys.id,
                    _t = _n$imageCoordinateSys.referenceServiceName;
                _a6 = null != _e5 ? _t ? this.parsedUrl.path.toLowerCase().indexOf("/" + _t.toLowerCase() + "/") > -1 ? "0:" + _e5 : JSON.stringify({
                  icsid: _e5,
                  icsns: _t
                }) : "0:" + _e5 : JSON.stringify({
                  ics: n.imageCoordinateSystem
                });
              } else _a6 = n.wkid || JSON.stringify(n.toJSON());

              Object(_core_maybe_js__WEBPACK_IMPORTED_MODULE_3__["isSome"])(this.serviceRasterInfo) && this.pixelType !== this.serviceRasterInfo.pixelType && (this.exportImageServiceParameters.pixelType = this.pixelType);
              var o = this.exportImageServiceParameters.toJSON(),
                  l = o.bandIds,
                  u = o.noData,
                  p = o.mosaicRule,
                  c = o.renderingRule;
              l instanceof Array && l.length > 0 && (o.bandIds = l.join(",")), u instanceof Array && u.length > 0 && (o.noData = u.join(","));
              var d = this.timeInfo;
              p && p.multidimensionalDefinition && s && d && d.startField && (p.multidimensionalDefinition = p.multidimensionalDefinition.filter(function (e) {
                return e.dimensionName !== d.startField;
              })), o.mosaicRule = p && JSON.stringify(p), o.renderingRule = c && JSON.stringify(c);
              var m = {};

              if (s) {
                var _s$toJSON = s.toJSON(),
                    _e6 = _s$toJSON.start,
                    _t2 = _s$toJSON.end;

                _e6 && _t2 && _e6 === _t2 ? m.time = "" + _e6 : null == _e6 && null == _t2 || (m.time = "".concat(null == _e6 ? "null" : _e6, ",").concat(null == _t2 ? "null" : _t2));
              }

              return _objectSpread(_objectSpread({
                bbox: e.xmin + "," + e.ymin + "," + e.xmax + "," + e.ymax,
                bboxSR: _a6,
                imageSR: _a6,
                size: t + "," + r
              }, o), m);
            }
          }, {
            key: "identify",
            value: function () {
              var _identify = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee11(e, t) {
                var r, i, s;
                return regeneratorRuntime.wrap(function _callee11$(_context11) {
                  while (1) {
                    switch (_context11.prev = _context11.next) {
                      case 0:
                        _context11.next = 2;
                        return this._fetchCapabilities(null == t ? void 0 : t.signal);

                      case 2:
                        if (this.capabilities.operations.supportsIdentify) {
                          _context11.next = 4;
                          break;
                        }

                        throw new _core_Error_js__WEBPACK_IMPORTED_MODULE_12__["default"]("imagery-layer:query-rasters", "query operation is not supported on the input image service");

                      case 4:
                        e = e.clone();
                        r = this.raster, i = this.mosaicRule, s = this.renderingRule;
                        s && null == e.renderingRule && (e.renderingRule = s), i && null == e.mosaicRule && (e.mosaicRule = i), r && null == e.raster && (e.raster = r);
                        return _context11.abrupt("return", new _tasks_ImageIdentifyTask_js__WEBPACK_IMPORTED_MODULE_43__["default"]({
                          url: this.url
                        }).execute(e, t));

                      case 8:
                      case "end":
                        return _context11.stop();
                    }
                  }
                }, _callee11, this);
              }));

              function identify(_x25, _x26) {
                return _identify.apply(this, arguments);
              }

              return identify;
            }()
          }, {
            key: "queryRasters",
            value: function () {
              var _queryRasters = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee12(e, t) {
                return regeneratorRuntime.wrap(function _callee12$(_context12) {
                  while (1) {
                    switch (_context12.prev = _context12.next) {
                      case 0:
                        _context12.next = 2;
                        return this._fetchCapabilities(null == t ? void 0 : t.signal);

                      case 2:
                        if (this.capabilities.operations.supportsQuery) {
                          _context12.next = 4;
                          break;
                        }

                        throw new _core_Error_js__WEBPACK_IMPORTED_MODULE_12__["default"]("imagery-layer:query-rasters", "query operation is not supported on the input image service");

                      case 4:
                        return _context12.abrupt("return", this.queryTask.execute(e, t));

                      case 5:
                      case "end":
                        return _context12.stop();
                    }
                  }
                }, _callee12, this);
              }));

              function queryRasters(_x27, _x28) {
                return _queryRasters.apply(this, arguments);
              }

              return queryRasters;
            }()
          }, {
            key: "queryVisibleRasters",
            value: function queryVisibleRasters(e, t) {
              var _this6 = this;

              if (!e) return Object(_core_promiseUtils_js__WEBPACK_IMPORTED_MODULE_16__["reject"])(new _core_Error_js__WEBPACK_IMPORTED_MODULE_12__["default"]("imagery-layer: query-visible-rasters", "missing query parameter"));

              var _ref = t || {
                pixelSize: null,
                returnDomainValues: !1,
                returnTopmostRaster: !1,
                showNoDataRecords: !1
              },
                  s = _ref.pixelSize,
                  n = _ref.returnDomainValues,
                  _a7 = _ref.returnTopmostRaster,
                  o = _ref.showNoDataRecords;

              var l = !1,
                  u = null,
                  p = null;
              var c = "raster.servicepixelvalue",
                  d = this.rasterFunctionNamesIndex;

              if (Object(_core_maybe_js__WEBPACK_IMPORTED_MODULE_3__["isSome"])(e.outFields) && (l = e.outFields.some(function (e) {
                return -1 === e.toLowerCase().indexOf(c);
              }), this.version >= 10.4)) {
                var _t3 = e.outFields.filter(function (e) {
                  return e.toLowerCase().indexOf(c) > -1 && e.length > c.length;
                }).map(function (e) {
                  var t = e.slice(c.length + 1);
                  return [_this6._updateRenderingRulesFunctionName(t, d), t];
                });

                u = _t3.map(function (e) {
                  return new _support_RasterFunction_js__WEBPACK_IMPORTED_MODULE_33__["default"]({
                    functionName: e[0]
                  });
                }), p = _t3.map(function (e) {
                  return e[1];
                }), 0 === u.length ? this.renderingRule ? (u.push(this.renderingRule), p.push(this.renderingRule.functionName)) : u = null : this.renderingRule && !u.some(function (e) {
                  return e.functionName === _this6.renderingRule.functionName;
                }) && (u.push(this.renderingRule), p.push(this.renderingRule.functionName));
              }

              var m = Object(_core_maybe_js__WEBPACK_IMPORTED_MODULE_3__["isNone"])(e.outSpatialReference) || e.outSpatialReference.equals(this.spatialReference),
                  f = this._getQueryParams({
                geometry: e.geometry,
                timeExtent: e.timeExtent,
                mosaicRule: this.exportImageServiceParameters.mosaicRule,
                renderingRule: this.version < 10.4 ? this.renderingRule : null,
                renderingRules: u,
                pixelSize: s,
                returnCatalogItems: l,
                returnGeometry: m,
                maxItemCount: _a7 ? 1 : null
              });

              delete f.f;
              var g = new _tasks_support_ImageIdentifyParameters_js__WEBPACK_IMPORTED_MODULE_44__["default"](f),
                  R = new _tasks_ImageIdentifyTask_js__WEBPACK_IMPORTED_MODULE_43__["default"]({
                url: this.url
              }),
                  x = this.generateRasterInfo(this.renderingRule);
              return Object(_core_promiseUtils_js__WEBPACK_IMPORTED_MODULE_16__["create"])(function (t) {
                x.then(function () {
                  R.execute(g).then(function (r) {
                    var i = e.outFields;

                    if (l && !m && r.catalogItems && r.catalogItems.features && r.catalogItems.features.length > 0) {
                      var _s3 = _this6.objectIdField || "ObjectId",
                          _a17 = r.catalogItems.features,
                          _l = _a17.map(function (e) {
                        return e.attributes && e.attributes[_s3];
                      }),
                          _u2 = new _tasks_support_Query_js__WEBPACK_IMPORTED_MODULE_30__["default"]({
                        objectIds: _l,
                        returnGeometry: !0,
                        outSpatialReference: e.outSpatialReference,
                        outFields: [_s3]
                      });

                      return _this6.queryRasters(_u2).then(function (l) {
                        l && l.features && l.features.length > 0 && l.features.forEach(function (t) {
                          _a17.forEach(function (r) {
                            r.attributes[_s3] === t.attributes[_s3] && (r.geometry = new _geometry_Polygon_js__WEBPACK_IMPORTED_MODULE_20__["default"](t.geometry), r.geometry.spatialReference = e.outSpatialReference);
                          });
                        }), t(_this6._processVisibleRastersResponse(r, {
                          returnDomainValues: n,
                          templateRRFunctionNames: p,
                          showNoDataRecords: o,
                          templateFields: i
                        }));
                      })["catch"](function () {
                        throw new _core_Error_js__WEBPACK_IMPORTED_MODULE_12__["default"]("imagery-layer:query-visible-rasters", "encountered error when querying visible rasters geometry");
                      });
                    }

                    t(_this6._processVisibleRastersResponse(r, {
                      returnDomainValues: n,
                      templateRRFunctionNames: p,
                      showNoDataRecords: o,
                      templateFields: i
                    }));
                  })["catch"](function () {
                    throw new _core_Error_js__WEBPACK_IMPORTED_MODULE_12__["default"]("imagery-layer:query-visible-rasters", "encountered error when querying visible rasters");
                  });
                });
              });
            }
          }, {
            key: "fetchVariableStatisticsHistograms",
            value: function () {
              var _fetchVariableStatisticsHistograms = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee13(e, t) {
                var r, i, s;
                return regeneratorRuntime.wrap(function _callee13$(_context13) {
                  while (1) {
                    switch (_context13.prev = _context13.next) {
                      case 0:
                        r = Object(_request_js__WEBPACK_IMPORTED_MODULE_22__["default"])(this.parsedUrl.path + "/statistics", {
                          query: this._getQueryParams({
                            variable: e
                          }),
                          signal: t
                        }).then(function (e) {
                          var t;
                          return null == (t = e.data) ? void 0 : t.statistics;
                        });
                        i = Object(_request_js__WEBPACK_IMPORTED_MODULE_22__["default"])(this.parsedUrl.path + "/histograms", {
                          query: this._getQueryParams({
                            variable: e
                          }),
                          signal: t
                        }).then(function (e) {
                          var t;
                          return null == (t = e.data) ? void 0 : t.histograms;
                        });
                        _context13.next = 4;
                        return Object(_core_promiseUtils_js__WEBPACK_IMPORTED_MODULE_16__["all"])([r, i]);

                      case 4:
                        s = _context13.sent;
                        return _context13.abrupt("return", (s[0] && s[0].forEach(function (e) {
                          e.avg = e.mean, e.stddev = e.standardDeviation;
                        }), {
                          statistics: s[0] || null,
                          histograms: s[1] || null
                        }));

                      case 6:
                      case "end":
                        return _context13.stop();
                    }
                  }
                }, _callee13, this);
              }));

              function fetchVariableStatisticsHistograms(_x29, _x30) {
                return _fetchVariableStatisticsHistograms.apply(this, arguments);
              }

              return fetchVariableStatisticsHistograms;
            }()
          }, {
            key: "_fetchService",
            value: function () {
              var _fetchService2 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee14(e) {
                var _this7 = this;

                var t, r, s;
                return regeneratorRuntime.wrap(function _callee14$(_context14) {
                  while (1) {
                    switch (_context14.prev = _context14.next) {
                      case 0:
                        _context14.next = 2;
                        return this._fetchServiceInfo(e);

                      case 2:
                        Object(_core_maybe_js__WEBPACK_IMPORTED_MODULE_3__["isSome"])(this.serviceRasterInfo) && !this.rasterInfo && (this.rasterInfo = this.serviceRasterInfo);
                        t = this.sourceJSON, r = Object(_core_maybe_js__WEBPACK_IMPORTED_MODULE_3__["isSome"])(this.serviceRasterInfo) ? Object(_core_promiseUtils_js__WEBPACK_IMPORTED_MODULE_16__["resolve"])(this.serviceRasterInfo) : this._fetchAuxiliaryRasterInfo({
                          serviceInfo: t,
                          signal: e
                        }).then(function (e) {
                          return _this7._set("serviceRasterInfo", e), e;
                        }), s = this.renderingRule && "none" !== this.renderingRule.functionName.toLowerCase() ? this.generateRasterInfo(this.renderingRule, {
                          signal: e
                        }) : null;
                        return _context14.abrupt("return", Object(_core_promiseUtils_js__WEBPACK_IMPORTED_MODULE_16__["all"])([r, s]).then(function (e) {
                          e[1] ? _this7._set("rasterInfo", e[1]) : _this7._set("rasterInfo", e[0]), _this7.renderer && Object(_renderers_support_rasterRendererHelper_js__WEBPACK_IMPORTED_MODULE_40__["getSupportedRendererTypes"])(_this7.rasterInfo).indexOf(_this7.renderer.type) < 0 && (_this7.renderer = null, te.warn("ArcGISImageService", "Switching to the default renderer. Renderer applied is not valid for this Imagery Layer")), _this7._configDefaultRenderer(), _this7.watch("renderer", function () {
                            return _this7._configDefaultRenderer();
                          }), _this7.watch("renderingRule", function (e) {
                            (_this7.renderer || _this7._symbolizer || _this7.popupEnabled && _this7.popupTemplate) && _this7.generateRasterInfo(e).then(function (e) {
                              e && (_this7.rasterInfo = e);
                            });
                          });

                          var t = Object(_core_maybe_js__WEBPACK_IMPORTED_MODULE_3__["isSome"])(_this7.serviceRasterInfo) && _this7.serviceRasterInfo.multidimensionalInfo;

                          t && _this7._updateMultidimensionalDefinition(t);
                        }));

                      case 5:
                      case "end":
                        return _context14.stop();
                    }
                  }
                }, _callee14, this);
              }));

              function _fetchService(_x31) {
                return _fetchService2.apply(this, arguments);
              }

              return _fetchService;
            }()
          }, {
            key: "_initJobHandler",
            value: function () {
              var _initJobHandler2 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee15() {
                var _this8 = this;

                var e;
                return regeneratorRuntime.wrap(function _callee15$(_context15) {
                  while (1) {
                    switch (_context15.prev = _context15.next) {
                      case 0:
                        if (!(null != this._rasterJobHandler.connectionPromise)) {
                          _context15.next = 2;
                          break;
                        }

                        return _context15.abrupt("return", this._rasterJobHandler.connectionPromise);

                      case 2:
                        e = new _support_RasterJobHandler_js__WEBPACK_IMPORTED_MODULE_38__["default"]();
                        this._rasterJobHandler.connectionPromise = e.initialize().then(function () {
                          _this8._rasterJobHandler.instance = e;
                        }, function () {
                          return null;
                        });
                        _context15.next = 6;
                        return this._rasterJobHandler.connectionPromise;

                      case 6:
                      case "end":
                        return _context15.stop();
                    }
                  }
                }, _callee15, this);
              }));

              function _initJobHandler() {
                return _initJobHandler2.apply(this, arguments);
              }

              return _initJobHandler;
            }()
          }, {
            key: "_shutdownJobHandler",
            value: function _shutdownJobHandler() {
              this._rasterJobHandler.instance && this._rasterJobHandler.instance.destroy(), this._rasterJobHandler.instance = null, this._rasterJobHandler.connectionPromise = null, this._rasterJobHandler.refCount = 0;
            }
          }, {
            key: "_fetchCapabilities",
            value: function () {
              var _fetchCapabilities2 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee16(e) {
                return regeneratorRuntime.wrap(function _callee16$(_context16) {
                  while (1) {
                    switch (_context16.prev = _context16.next) {
                      case 0:
                        _context16.t0 = this.capabilities;

                        if (_context16.t0) {
                          _context16.next = 4;
                          break;
                        }

                        _context16.next = 4;
                        return this._fetchServiceInfo(e);

                      case 4:
                        return _context16.abrupt("return", this.capabilities);

                      case 5:
                      case "end":
                        return _context16.stop();
                    }
                  }
                }, _callee16, this);
              }));

              function _fetchCapabilities(_x32) {
                return _fetchCapabilities2.apply(this, arguments);
              }

              return _fetchCapabilities;
            }()
          }, {
            key: "_fetchServiceInfo",
            value: function () {
              var _fetchServiceInfo2 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee17(e) {
                var t, r, _yield$Object4, _t4, i;

                return regeneratorRuntime.wrap(function _callee17$(_context17) {
                  while (1) {
                    switch (_context17.prev = _context17.next) {
                      case 0:
                        r = this.sourceJSON;

                        if (r) {
                          _context17.next = 8;
                          break;
                        }

                        _context17.next = 4;
                        return Object(_request_js__WEBPACK_IMPORTED_MODULE_22__["default"])(this.parsedUrl.path, {
                          query: this._getQueryParams(),
                          signal: e
                        });

                      case 4:
                        _yield$Object4 = _context17.sent;
                        _t4 = _yield$Object4.data;
                        i = _yield$Object4.ssl;
                        r = _t4, this.sourceJSON = r, i && (this.url = this.url.replace(/^http:/i, "https:"));

                      case 8:
                        if (!((null == (t = r.capabilities) ? void 0 : t.toLowerCase().split(",").map(function (e) {
                          return e.trim();
                        }).indexOf("tilesonly")) > -1)) {
                          _context17.next = 10;
                          break;
                        }

                        throw new _core_Error_js__WEBPACK_IMPORTED_MODULE_12__["default"]("imagery-layer:fetch-service-info", "use ImageryTileLayer to open tiles-only image services");

                      case 10:
                        this.read(r, {
                          origin: "service",
                          url: this.parsedUrl
                        });

                      case 11:
                      case "end":
                        return _context17.stop();
                    }
                  }
                }, _callee17, this);
              }));

              function _fetchServiceInfo(_x33) {
                return _fetchServiceInfo2.apply(this, arguments);
              }

              return _fetchServiceInfo;
            }()
          }, {
            key: "_isPicture",
            value: function _isPicture() {
              return !this.format || this.format.indexOf("jpg") > -1 || this.format.indexOf("png") > -1;
            }
          }, {
            key: "_configDefaultRenderer",
            value: function _configDefaultRenderer() {
              if (!this._isPicture() && !this.pixelFilter) {
                if (!this.bandIds && this.rasterInfo.bandCount >= 3) {
                  var _e7 = Object(_renderers_support_rasterRendererHelper_js__WEBPACK_IMPORTED_MODULE_40__["getDefaultBandCombination"])(this.rasterInfo);

                  !_e7 || 3 === this.rasterInfo.bandCount && 0 === _e7[0] && 1 === _e7[1] && 2 === _e7[2] || (this.bandIds = _e7);
                }

                var e, t;
                if (!this.renderer) this.renderer = Object(_renderers_support_rasterRendererHelper_js__WEBPACK_IMPORTED_MODULE_40__["createDefaultRenderer"])(this.rasterInfo, {
                  bandIds: this.bandIds,
                  variableName: this.renderingRule ? null : null == (e = this.mosaicRule) || null == (t = e.multidimensionalDefinition) ? void 0 : t[0].variableName
                });
                this._symbolizer ? (this._symbolizer.rendererJSON = this.renderer.toJSON(), this._symbolizer.rasterInfo = this.rasterInfo) : this._symbolizer = new _renderers_support_RasterSymbolizer_js__WEBPACK_IMPORTED_MODULE_41__["default"]({
                  rendererJSON: this.renderer.toJSON(),
                  rasterInfo: this.rasterInfo
                }), this._symbolizer.bind() || (this._symbolizer = null);
              }
            }
          }, {
            key: "_clonePixelData",
            value: function _clonePixelData(e) {
              return null == e ? e : {
                extent: e.extent && e.extent.clone(),
                pixelBlock: e.pixelBlock && e.pixelBlock.clone()
              };
            }
          }, {
            key: "_getQueryParams",
            value: function _getQueryParams(e) {
              var t = this.raster,
                  r = this.viewId;
              return _objectSpread({
                raster: t,
                viewId: r,
                f: "json"
              }, e);
            }
          }, {
            key: "_decodePixelBlock",
            value: function _decodePixelBlock(e, t, r) {
              return this._rasterJobHandler.instance ? this._rasterJobHandler.instance.decode({
                data: e,
                options: t
              }) : Object(_support_rasterFormats_RasterCodec_js__WEBPACK_IMPORTED_MODULE_39__["decode"])(e, t, r);
            }
          }, {
            key: "_fetchMultidimensionalInfo",
            value: function () {
              var _fetchMultidimensionalInfo2 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee18(e) {
                var t, r;
                return regeneratorRuntime.wrap(function _callee18$(_context18) {
                  while (1) {
                    switch (_context18.prev = _context18.next) {
                      case 0:
                        _context18.next = 2;
                        return Object(_request_js__WEBPACK_IMPORTED_MODULE_22__["default"])(this.parsedUrl.path + "/multidimensionalInfo", {
                          query: this._getQueryParams(),
                          signal: e
                        }).then(function (e) {
                          var t;
                          return null == (t = e.data) ? void 0 : t.multidimensionalInfo;
                        });

                      case 2:
                        r = _context18.sent;
                        return _context18.abrupt("return", (null != (t = r.variables) && t.length && r.variables.forEach(function (e) {
                          var t;
                          null != (t = e.statistics) && t.length && e.statistics.forEach(function (e) {
                            e.avg = e.mean, e.stddev = e.standardDeviation;
                          });
                        }), r));

                      case 4:
                      case "end":
                        return _context18.stop();
                    }
                  }
                }, _callee18, this);
              }));

              function _fetchMultidimensionalInfo(_x34) {
                return _fetchMultidimensionalInfo2.apply(this, arguments);
              }

              return _fetchMultidimensionalInfo;
            }()
          }, {
            key: "_fetchAuxiliaryRasterInfo",
            value: function _fetchAuxiliaryRasterInfo(e) {
              var t = e && e.serviceInfo;
              if (!t) return Object(_core_promiseUtils_js__WEBPACK_IMPORTED_MODULE_16__["reject"])(new _core_Error_js__WEBPACK_IMPORTED_MODULE_12__["default"]("imagery-layer:fetch-metadata", "valid serviceInfo is required"));

              var r = e.renderingRule ? JSON.stringify(e.renderingRule.toJSON()) : null,
                  i = e.signal,
                  s = !!(t.hasRasterAttributeTable && this.version >= 10.1) && Object(_request_js__WEBPACK_IMPORTED_MODULE_22__["default"])(this.parsedUrl.path + "/rasterAttributeTable", {
                query: this._getQueryParams({
                  renderingRule: this.version >= 10.1 ? r : null
                }),
                signal: i
              }).then(function (e) {
                return _tasks_support_FeatureSet_js__WEBPACK_IMPORTED_MODULE_29__["default"].fromJSON(e.data);
              })["catch"](function () {
                return null;
              }),
                  n = !!(t.hasColormap && this.version >= 10.1) && Object(_request_js__WEBPACK_IMPORTED_MODULE_22__["default"])(this.parsedUrl.path + "/colormap", {
                query: this._getQueryParams({
                  renderingRule: this.version >= 10.6 ? r : null
                }),
                signal: i
              }).then(function (e) {
                var t;
                return null == (t = e.data) ? void 0 : t.colormap;
              }),
                  _a9 = !!(t.hasHistograms && this.version >= 10.1) && Object(_request_js__WEBPACK_IMPORTED_MODULE_22__["default"])(this.parsedUrl.path + "/histograms", {
                query: this._getQueryParams({
                  renderingRule: this.version >= 10.1 ? r : null
                }),
                signal: i
              }).then(function (e) {
                var t;
                return null == (t = e.data) ? void 0 : t.histograms;
              }),
                  o = this.version >= 10.3 && Object(_request_js__WEBPACK_IMPORTED_MODULE_22__["default"])(this.parsedUrl.path + "/keyProperties", {
                query: this._getQueryParams({
                  renderingRule: r
                }),
                signal: i
              }).then(function (e) {
                return e.data;
              })["catch"](function () {}),
                  l = !!(t.hasMultidimensions && this.version >= 10.3) && this._fetchMultidimensionalInfo();

              return Object(_core_promiseUtils_js__WEBPACK_IMPORTED_MODULE_16__["all"])([s, n, _a9, o, l]).then(function (e) {
                var r = null;

                if (t.minValues && t.minValues.length === t.bandCount) {
                  r = [];

                  for (var _e8 = 0; _e8 < t.minValues.length; _e8++) {
                    r.push({
                      min: t.minValues[_e8],
                      max: t.maxValues[_e8],
                      avg: t.meanValues[_e8],
                      stddev: t.stdvValues[_e8]
                    });
                  }
                }

                var i = Math.ceil((t.extent.xmax - t.extent.xmin) / t.pixelSizeX - .1),
                    s = Math.ceil((t.extent.ymax - t.extent.ymin) / t.pixelSizeY - .1),
                    n = _geometry_SpatialReference_js__WEBPACK_IMPORTED_MODULE_17__["default"].fromJSON(t.spatialReference || t.extent.spatialReference);

                return new _support_RasterInfo_js__WEBPACK_IMPORTED_MODULE_37__["default"]({
                  width: i,
                  height: s,
                  bandCount: t.bandCount,
                  extent: _geometry_Extent_js__WEBPACK_IMPORTED_MODULE_19__["default"].fromJSON(t.extent),
                  spatialReference: n,
                  pixelSize: new _geometry_Point_js__WEBPACK_IMPORTED_MODULE_18__["default"]({
                    x: t.pixelSizeX,
                    y: t.pixelSizeY,
                    spatialReference: n
                  }),
                  pixelType: t.pixelType.toLowerCase(),
                  statistics: r,
                  attributeTable: e[0] || null,
                  colormap: e[1] || null,
                  histograms: e[2] || null,
                  keyProperties: e[3] || {},
                  multidimensionalInfo: e[4] || null
                });
              });
            }
          }, {
            key: "_requestArrayBuffer",
            value: function _requestArrayBuffer(e) {
              var _this9 = this;

              var t = e.imageProps,
                  r = e.requestAsImageElement,
                  i = e.signal;
              if (r && !this.pixelFilter && t.format && t.format.indexOf("png") > -1) return Object(_request_js__WEBPACK_IMPORTED_MODULE_22__["default"])(this.parsedUrl.path + "/exportImage", {
                responseType: "image",
                query: this._getQueryParams(_objectSpread({
                  f: "image"
                }, e.imageServiceParameters)),
                signal: i
              }).then(function (e) {
                return {
                  imageElement: e.data,
                  params: t
                };
              });

              var s = this._initJobHandler(),
                  n = Object(_request_js__WEBPACK_IMPORTED_MODULE_22__["default"])(this.parsedUrl.path + "/exportImage", {
                responseType: "array-buffer",
                query: this._getQueryParams(_objectSpread({
                  f: "image"
                }, e.imageServiceParameters)),
                signal: i
              });

              return Object(_core_promiseUtils_js__WEBPACK_IMPORTED_MODULE_16__["all"])([n, s]).then(function (e) {
                var r = e[0].data,
                    s = t.format || "jpgpng";
                var n = s;

                if ("bsq" !== n && "bip" !== n && (n = Object(_support_rasterFormats_RasterCodec_js__WEBPACK_IMPORTED_MODULE_39__["getFormat"])(r)), !n) {
                  throw new _core_Error_js__WEBPACK_IMPORTED_MODULE_12__["default"]("imagery-layer:fetch-image", "unsupported format signature " + String.fromCharCode.apply(null, new Uint8Array(r)));
                }

                var _a10 = "gif" === s || "bmp" === s || s.indexOf("png") > -1 && ("png" === n || "jpg" === n),
                    o = {
                  signal: i
                };

                return _a10 ? Object(_support_rasterFormats_RasterCodec_js__WEBPACK_IMPORTED_MODULE_39__["decode"])(r, _objectSpread({
                  useCanvas: !0
                }, t), o).then(function (e) {
                  return {
                    pixelData: {
                      pixelBlock: e,
                      extent: t.extent
                    },
                    params: t
                  };
                }) : _this9._decodePixelBlock(r, {
                  width: t.width,
                  height: t.height,
                  planes: null,
                  pixelType: null,
                  noDataValue: null,
                  format: s
                }, o).then(function (e) {
                  return {
                    pixelData: {
                      pixelBlock: e,
                      extent: t.extent
                    },
                    params: t
                  };
                });
              });
            }
          }, {
            key: "_generateRasterInfo",
            value: function () {
              var _generateRasterInfo3 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee19(e, t) {
                var _yield$Object5, r;

                return regeneratorRuntime.wrap(function _callee19$(_context19) {
                  while (1) {
                    switch (_context19.prev = _context19.next) {
                      case 0:
                        _context19.next = 2;
                        return Object(_request_js__WEBPACK_IMPORTED_MODULE_22__["default"])(this.parsedUrl.path, _objectSpread({
                          query: this._getQueryParams({
                            renderingRule: e
                          })
                        }, t));

                      case 2:
                        _yield$Object5 = _context19.sent;
                        r = _yield$Object5.data;
                        _context19.next = 6;
                        return this._fetchAuxiliaryRasterInfo(_objectSpread({
                          serviceInfo: r,
                          renderingRule: e
                        }, t));

                      case 6:
                        return _context19.abrupt("return", _context19.sent);

                      case 7:
                      case "end":
                        return _context19.stop();
                    }
                  }
                }, _callee19, this);
              }));

              function _generateRasterInfo(_x35, _x36) {
                return _generateRasterInfo3.apply(this, arguments);
              }

              return _generateRasterInfo;
            }()
          }, {
            key: "_isValidCustomizedMosaicRule",
            value: function _isValidCustomizedMosaicRule(e) {
              return e && JSON.stringify(e.toJSON()) !== JSON.stringify(this._defaultServiceMosaicRule && this._defaultServiceMosaicRule.toJSON());
            }
          }, {
            key: "_updateMultidimensionalDefinition",
            value: function _updateMultidimensionalDefinition(e) {
              if (this._isValidCustomizedMosaicRule(this.mosaicRule)) return;
              var t = e.variables[0].dimensions,
                  r = [];

              for (var _e9 in t) {
                if (t.hasOwnProperty(_e9)) {
                  var i = t[_e9],
                      _s4 = i.extent;
                  var n = !0,
                      _a18 = [_s4[0]];
                  i.hasRanges && !0 === i.hasRanges ? (n = !1, _a18 = [i.values[0]]) : "stdz" === i.name.toLowerCase() && Math.abs(_s4[1]) <= Math.abs(_s4[0]) && (_a18 = [_s4[1]]), r.push(new _support_DimensionalDefinition_js__WEBPACK_IMPORTED_MODULE_32__["default"]({
                    variableName: "",
                    dimensionName: t[_e9].name,
                    isSlice: n,
                    values: _a18
                  }));
                }
              }

              if (r.length > 0) {
                this.mosaicRule = this.mosaicRule || new _support_MosaicRule_js__WEBPACK_IMPORTED_MODULE_35__["default"]();
                var _e10 = this.mosaicRule.multidimensionalDefinition;
                (!_e10 || _e10 && _e10.length <= 0) && (this.mosaicRule.multidimensionalDefinition = r);
              }
            }
          }, {
            key: "_formatAttributeValue",
            value: function _formatAttributeValue(e, t) {
              if ("string" == typeof e) {
                var r = this.popupTemplate && this.popupTemplate.fieldInfos,
                    i = this._getFieldInfo(r, t),
                    _s5 = i && i.format;

                if (_s5) {
                  var _t5, _r3;

                  return e.trim().indexOf(",") > -1 ? (_t5 = ",", _r3 = _t5 + " ", this._formatDelimitedString(e, _t5, _r3, _s5)) : e.trim().indexOf(" ") > -1 ? (_t5 = _r3 = " ", this._formatDelimitedString(e, _t5, _r3, _s5)) : this._formatNumberFromString(e, _s5);
                }
              }

              return e;
            }
          }, {
            key: "_getFieldInfo",
            value: function _getFieldInfo(e, t) {
              if (!e || !e.length || !t) return;
              var r = t.toLowerCase();
              var i;
              return e.some(function (e) {
                return !(!e.fieldName || e.fieldName.toLowerCase() !== r && e.fieldName.toLowerCase() !== r.replace(/ /g, "_")) && (i = e, !0);
              }), i;
            }
          }, {
            key: "_formatDelimitedString",
            value: function _formatDelimitedString(e, t, r, i) {
              var _this10 = this;

              return e && t && r && i ? e.trim().split(t).map(function (e) {
                return _this10._formatNumberFromString(e, i);
              }).join(r) : e;
            }
          }, {
            key: "_formatNumberFromString",
            value: function _formatNumberFromString(e, t) {
              if (!e || !t) return e;
              var r = Number(e);
              return isNaN(r) ? e : t.format(r);
            }
          }, {
            key: "_processVisibleRastersResponse",
            value: function _processVisibleRastersResponse(e, t) {
              t = t || {};
              var r = e.value,
                  _t6 = t,
                  s = _t6.templateRRFunctionNames,
                  n = _t6.showNoDataRecords,
                  _a12 = _t6.returnDomainValues,
                  o = _t6.templateFields,
                  l = e.processedValues;
              var u = e.catalogItems && e.catalogItems.features,
                  p = e.properties && e.properties.Values && e.properties.Values.map(function (e) {
                return e.replace(/ /gi, ", ");
              }) || [];
              var c = this.objectIdField || "ObjectId",
                  d = "string" == typeof r && r.toLowerCase().indexOf("nodata") > -1,
                  m = [];

              if (r && !u && !d) {
                var _e11 = {};
                _e11[c] = 0;
                p = [r], u = [new _Graphic_js__WEBPACK_IMPORTED_MODULE_23__["default"](this.fullExtent, null, _e11)];
              }

              if (!u) return [];
              var h, f, y;

              this._updateResponseFieldNames(u, o);

              for (var _e12 = 0; _e12 < u.length; _e12++) {
                if (h = u[_e12], null != r && !d) {
                  if (f = p[_e12], y = this.renderingRule && l && l.length > 0 && s && s.length > 0 && s.indexOf(this.renderingRule.functionName) > -1 ? l[s.indexOf(this.renderingRule.functionName)] : r, "nodata" === f.toLowerCase() && !n) continue;
                  var _t7 = "Raster.ItemPixelValue",
                      _a19 = "Raster.ServicePixelValue";
                  h.attributes[_t7] = this._formatAttributeValue(f, _t7), h.attributes[_a19] = this._formatAttributeValue(y, _a19), this._updateFeatureWithMagDirValues(h, f);

                  var _o = this.fields && this.fields.length > 0;

                  var _u3 = this.renderingRule && Object(_core_maybe_js__WEBPACK_IMPORTED_MODULE_3__["isSome"])(this.serviceRasterInfo) && this.serviceRasterInfo.attributeTable ? _o ? f : r : y;

                  this.renderingRule || (_u3 = _o ? f : r), this._updateFeatureWithRasterAttributeTableValues(h, _u3);
                }

                if (h.sourceLayer = this, _a12 && this._updateFeatureWithDomainValues(h), s && l && s.length === l.length) for (var _e13 = 0; _e13 < s.length; _e13++) {
                  var _t8 = "Raster.ServicePixelValue." + s[_e13];

                  h.attributes[_t8] = this._formatAttributeValue(l[_e13], _t8);
                }
                m.push(u[_e12]);
              }

              return m;
            }
          }, {
            key: "_updateFeatureWithRasterAttributeTableValues",
            value: function _updateFeatureWithRasterAttributeTableValues(e, t) {
              var _this11 = this;

              var r = this.rasterInfo && this.rasterInfo.attributeTable || Object(_core_maybe_js__WEBPACK_IMPORTED_MODULE_3__["isSome"])(this.serviceRasterInfo) && this.serviceRasterInfo.attributeTable,
                  s = r && r.features;
              if (!s) return;

              var n = r.fields,
                  _a14 = n.map(function (e) {
                return e.name;
              }).filter(function (e) {
                return "value" === e.toLowerCase();
              }),
                  o = _a14 && _a14[0];

              if (!o) return;
              var l = s.filter(function (e) {
                return e.attributes[o] === (null != t ? parseInt(t, 10) : null);
              });
              l && l[0] && n.forEach(function (t) {
                var r = _this11.rasterAttributeTableFieldPrefix + t.name;
                e.attributes[r] = _this11._formatAttributeValue(l[0].attributes[t.name], r);
              });
            }
          }, {
            key: "_updateFeatureWithMagDirValues",
            value: function _updateFeatureWithMagDirValues(e, t) {
              if (!this.pixelFilter || "esriImageServiceDataTypeVector-UV" !== this.serviceDataType && "esriImageServiceDataTypeVector-MagDir" !== this.serviceDataType) return;
              var r = t.replace(" ", ",").split(",").map(function (e) {
                return parseFloat(e);
              }),
                  i = r.map(function (e) {
                return [e];
              }),
                  s = r.map(function (e) {
                return {
                  minValue: e,
                  maxValue: e,
                  noDataValue: null
                };
              }),
                  n = new _support_PixelBlock_js__WEBPACK_IMPORTED_MODULE_25__["default"]({
                height: 1,
                width: 1,
                pixelType: "f32",
                pixels: i,
                statistics: s
              });
              this.pixelFilter({
                pixelBlock: n,
                extent: new _geometry_Extent_js__WEBPACK_IMPORTED_MODULE_19__["default"](0, 0, 0, 0, this.spatialReference)
              }), e.attributes["Raster.Magnitude"] = n.pixels[0][0], e.attributes["Raster.Direction"] = n.pixels[1][0];
            }
          }, {
            key: "_updateFeatureWithDomainValues",
            value: function _updateFeatureWithDomainValues(e) {
              var t = this.fields && this.fields.filter(function (e) {
                return e.domain && "coded-value" === e.domain.type;
              });
              null != t && t.forEach(function (t) {
                var r = e.attributes[t.name];

                if (null != r) {
                  var i = t.domain.codedValues.filter(function (e) {
                    return e.code === r;
                  })[0];
                  i && (e.attributes[t.name] = i.name);
                }
              });
            }
          }, {
            key: "_updateResponseFieldNames",
            value: function _updateResponseFieldNames(e, t) {
              if (!t || t.length < 1) return;
              var r = this.fieldsIndex;
              r && e.forEach(function (e) {
                if (e && e.attributes) {
                  var _iterator2 = _createForOfIteratorHelper(t),
                      _step2;

                  try {
                    for (_iterator2.s(); !(_step2 = _iterator2.n()).done;) {
                      var i = _step2.value;

                      if (r.has(i)) {
                        var _t9 = r.get(i).name;
                        _t9 !== i && (e.attributes[i] = e.attributes[_t9], delete e.attributes[_t9]);
                      }
                    }
                  } catch (err) {
                    _iterator2.e(err);
                  } finally {
                    _iterator2.f();
                  }
                }
              });
            }
          }, {
            key: "_updateRenderingRulesFunctionName",
            value: function _updateRenderingRulesFunctionName(e, t) {
              if (!e || e.length < 1) return;
              if ("Raw" === e) return e.replace("Raw", "None");
              var r = e.toLowerCase().replace(/ /gi, "_");
              return t.has(r) ? t.get(r) : e;
            }
          }, {
            key: "_isRFTJson",
            value: function _isRFTJson(e) {
              return e.name && e.arguments && e["function"] && e.hasOwnProperty("functionType");
            }
          }, {
            key: "_readCapabilities",
            value: function _readCapabilities(e) {
              var t = e.capabilities ? e.capabilities.toLowerCase().split(",").map(function (e) {
                return e.trim();
              }) : ["image", "catalog"],
                  r = e.currentVersion,
                  i = e.advancedQueryCapabilities,
                  s = e.maxRecordCount,
                  n = t.indexOf("image") > -1,
                  _a15 = "esriImageServiceDataTypeElevation" === e.serviceDataType,
                  o = !!(e.spatialReference || e.extent && e.extent.spatialReference);

              return {
                operations: {
                  supportsComputeHistograms: n,
                  supportsExportImage: n,
                  supportsIdentify: n,
                  supportsMeasure: t.indexOf("mensuration") > -1 && o,
                  supportsDownload: t.indexOf("download") > -1,
                  supportsQuery: t.indexOf("catalog") > -1 && e.fields && e.fields.length > 0,
                  supportsGetSamples: r >= 10.2 && n,
                  supportsProject: r >= 10.3 && n,
                  supportsComputeStatisticsHistograms: r >= 10.4 && n,
                  supportsQueryBoundary: r >= 10.6 && n,
                  supportsCalculateVolume: r >= 10.7 && _a15,
                  supportsComputePixelLocation: r >= 10.7 && t.indexOf("catalog") > -1
                },
                query: {
                  supportsStatistics: !(!i || !i.supportsStatistics),
                  supportsOrderBy: !(!i || !i.supportsOrderBy),
                  supportsDistinct: !(!i || !i.supportsDistinct),
                  supportsPagination: !(!i || !i.supportsPagination),
                  supportsStandardizedQueriesOnly: !(!i || !i.useStandardizedQueries),
                  maxRecordCount: s
                }
              };
            }
          }]);

          return a;
        }(s);

        return Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_6__["property"])()], a.prototype, "_functionRasterInfos", void 0), Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_6__["property"])()], a.prototype, "_rasterJobHandler", void 0), Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_6__["property"])()], a.prototype, "_symbolizer", void 0), Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_6__["property"])()], a.prototype, "_defaultServiceMosaicRule", void 0), Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_reader_js__WEBPACK_IMPORTED_MODULE_9__["reader"])("_defaultServiceMosaicRule", ["defaultMosaicMethod"])], a.prototype, "readDefaultServiceMosaicRule", null), Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_6__["property"])()], a.prototype, "_cachedRendererJson", void 0), Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_6__["property"])()], a.prototype, "rasterAttributeTableFieldPrefix", void 0), Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_6__["property"])({
          readOnly: !0,
          dependsOn: ["rasterFunctionInfos"]
        })], a.prototype, "rasterFunctionNamesIndex", null), Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_6__["property"])({
          readOnly: !0,
          dependsOn: ["url"]
        })], a.prototype, "queryTask", null), Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_6__["property"])()], a.prototype, "adjustAspectRatio", void 0), Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_6__["property"])({
          readOnly: !0
        }), Object(_core_accessorSupport_decorators_aliasOf_js__WEBPACK_IMPORTED_MODULE_7__["aliasOf"])("serviceRasterInfo.bandCount")], a.prototype, "bandCount", void 0), Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_6__["property"])({
          type: [_core_accessorSupport_ensureType_js__WEBPACK_IMPORTED_MODULE_5__["Integer"]],
          json: {
            write: !0
          }
        })], a.prototype, "bandIds", void 0), Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_reader_js__WEBPACK_IMPORTED_MODULE_9__["reader"])("bandIds")], a.prototype, "readBandIds", null), Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_6__["property"])({
          readOnly: !0,
          json: {
            read: !1
          }
        })], a.prototype, "capabilities", void 0), Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_reader_js__WEBPACK_IMPORTED_MODULE_9__["reader"])("service", "capabilities", ["capabilities", "currentVersion", "serviceDataType"])], a.prototype, "readCapabilities", null), Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_6__["property"])({
          type: Number
        })], a.prototype, "compressionQuality", void 0), Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_writer_js__WEBPACK_IMPORTED_MODULE_11__["writer"])("compressionQuality")], a.prototype, "writeCompressionQuality", null), Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_6__["property"])({
          type: Number
        })], a.prototype, "compressionTolerance", void 0), Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_writer_js__WEBPACK_IMPORTED_MODULE_11__["writer"])("compressionTolerance")], a.prototype, "writeCompressionTolerance", null), Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_6__["property"])({
          json: {
            read: {
              source: "copyrightText"
            }
          }
        })], a.prototype, "copyright", void 0), Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_6__["property"])({
          type: String,
          json: {
            read: {
              source: "layerDefinition.definitionExpression"
            },
            write: {
              target: "layerDefinition.definitionExpression"
            }
          }
        })], a.prototype, "definitionExpression", void 0), Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_6__["property"])({
          readOnly: !0,
          constructOnly: !0
        })], a.prototype, "exportImageServiceParameters", void 0), Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_6__["property"])()], a.prototype, "rasterInfo", void 0), Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_6__["property"])({
          readOnly: !0,
          type: [_support_Field_js__WEBPACK_IMPORTED_MODULE_27__["default"]]
        })], a.prototype, "fields", void 0), Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_6__["property"])({
          readOnly: !0,
          dependsOn: ["fields"]
        })], a.prototype, "fieldsIndex", null), Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_6__["property"])({
          type: ["png", "png8", "png24", "png32", "jpg", "bmp", "gif", "jpgpng", "lerc", "tiff"],
          json: {
            write: !0
          }
        })], a.prototype, "format", null), Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_reader_js__WEBPACK_IMPORTED_MODULE_9__["reader"])("service", "format", ["serviceDataType"])], a.prototype, "readFormat", null), Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_6__["property"])({
          type: _geometry_Extent_js__WEBPACK_IMPORTED_MODULE_19__["default"]
        })], a.prototype, "fullExtent", void 0), Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_6__["property"])({
          readOnly: !0
        })], a.prototype, "hasMultidimensions", void 0), Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_6__["property"])({
          json: {
            read: {
              source: "maxImageHeight"
            }
          }
        })], a.prototype, "imageMaxHeight", void 0), Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_6__["property"])({
          json: {
            read: {
              source: "maxImageWidth"
            }
          }
        })], a.prototype, "imageMaxWidth", void 0), Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_6__["property"])({
          type: String,
          json: {
            type: re.jsonValues,
            read: re.read,
            write: re.write
          }
        })], a.prototype, "interpolation", void 0), Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_6__["property"])()], a.prototype, "minScale", void 0), Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_reader_js__WEBPACK_IMPORTED_MODULE_9__["reader"])("service", "minScale")], a.prototype, "readMinScale", null), Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_6__["property"])()], a.prototype, "maxScale", void 0), Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_reader_js__WEBPACK_IMPORTED_MODULE_9__["reader"])("service", "maxScale")], a.prototype, "readMaxScale", null), Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_6__["property"])({
          type: _support_MosaicRule_js__WEBPACK_IMPORTED_MODULE_35__["default"]
        })], a.prototype, "mosaicRule", null), Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_reader_js__WEBPACK_IMPORTED_MODULE_9__["reader"])("mosaicRule", ["mosaicRule", "defaultMosaicMethod"])], a.prototype, "readMosaicRule", null), Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_writer_js__WEBPACK_IMPORTED_MODULE_11__["writer"])("mosaicRule")], a.prototype, "writeMosaicRule", null), Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_6__["property"])({
          readOnly: !0
        }), Object(_core_accessorSupport_decorators_aliasOf_js__WEBPACK_IMPORTED_MODULE_7__["aliasOf"])("serviceRasterInfo.multidimensionalInfo")], a.prototype, "multidimensionalInfo", void 0), Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_6__["property"])({
          json: {
            type: _core_accessorSupport_ensureType_js__WEBPACK_IMPORTED_MODULE_5__["Integer"]
          }
        })], a.prototype, "noData", void 0), Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_writer_js__WEBPACK_IMPORTED_MODULE_11__["writer"])("noData")], a.prototype, "writeNoData", null), Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_6__["property"])({
          type: String,
          json: {
            type: ie.jsonValues,
            read: ie.read,
            write: ie.write
          }
        })], a.prototype, "noDataInterpretation", void 0), Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_6__["property"])({
          type: String,
          readOnly: !0,
          json: {
            read: {
              source: ["fields"]
            }
          }
        })], a.prototype, "objectIdField", void 0), Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_reader_js__WEBPACK_IMPORTED_MODULE_9__["reader"])("objectIdField")], a.prototype, "readObjectIdField", null), Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_6__["property"])({
          readOnly: !0,
          dependsOn: ["url"]
        })], a.prototype, "parsedUrl", null), Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_6__["property"])({
          readOnly: !0
        }), Object(_core_accessorSupport_decorators_aliasOf_js__WEBPACK_IMPORTED_MODULE_7__["aliasOf"])("serviceRasterInfo.pixelSize.x")], a.prototype, "pixelSizeX", void 0), Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_6__["property"])({
          readOnly: !0
        }), Object(_core_accessorSupport_decorators_aliasOf_js__WEBPACK_IMPORTED_MODULE_7__["aliasOf"])("serviceRasterInfo.pixelSize.y")], a.prototype, "pixelSizeY", void 0), Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_6__["property"])({
          type: Function
        })], a.prototype, "pixelFilter", void 0), Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_6__["property"])()], a.prototype, "raster", void 0), Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_6__["property"])()], a.prototype, "viewId", void 0), Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_6__["property"])({
          types: _rasterRenderers_js__WEBPACK_IMPORTED_MODULE_26__["rasterRendererTypes"],
          json: {
            name: "layerDefinition.drawingInfo.renderer",
            origins: {
              "web-scene": {
                types: _rasterRenderers_js__WEBPACK_IMPORTED_MODULE_26__["websceneRasterRendererTypes"],
                name: "layerDefinition.drawingInfo.renderer",
                write: {
                  overridePolicy: function overridePolicy(e) {
                    return {
                      enabled: e && "vector-field" !== e.type
                    };
                  }
                }
              }
            }
          }
        })], a.prototype, "renderer", void 0), Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_reader_js__WEBPACK_IMPORTED_MODULE_9__["reader"])("renderer")], a.prototype, "readRenderer", null), Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_6__["property"])(_support_commonProperties_js__WEBPACK_IMPORTED_MODULE_24__["opacityDrawingInfo"])], a.prototype, "opacity", void 0), Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_6__["property"])({
          readOnly: !0
        }), Object(_core_accessorSupport_decorators_aliasOf_js__WEBPACK_IMPORTED_MODULE_7__["aliasOf"])("serviceRasterInfo.attributeTable")], a.prototype, "rasterAttributeTable", void 0), Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_6__["property"])({
          readOnly: !0,
          dependsOn: ["fields", "rasterInfo", "capabilities"]
        })], a.prototype, "rasterFields", null), Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_6__["property"])({
          readOnly: !0
        })], a.prototype, "rasterFunctionInfos", void 0), Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_6__["property"])({
          type: _support_RasterFunction_js__WEBPACK_IMPORTED_MODULE_33__["default"]
        })], a.prototype, "renderingRule", null), Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_reader_js__WEBPACK_IMPORTED_MODULE_9__["reader"])("renderingRule", ["renderingRule", "rasterFunctionInfos"])], a.prototype, "readRenderingRule", null), Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_writer_js__WEBPACK_IMPORTED_MODULE_11__["writer"])("renderingRule")], a.prototype, "writeRenderingRule", null), Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_6__["property"])()], a.prototype, "serviceDataType", void 0), Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_6__["property"])({
          readOnly: !0,
          type: _geometry_SpatialReference_js__WEBPACK_IMPORTED_MODULE_17__["default"]
        })], a.prototype, "spatialReference", void 0), Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_reader_js__WEBPACK_IMPORTED_MODULE_9__["reader"])("spatialReference", ["spatialReference", "extent"])], a.prototype, "readSpatialReference", null), Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_6__["property"])({
          json: {
            type: se.jsonValues
          }
        })], a.prototype, "pixelType", void 0), Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_reader_js__WEBPACK_IMPORTED_MODULE_9__["reader"])("pixelType")], a.prototype, "readPixelType", null), Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_writer_js__WEBPACK_IMPORTED_MODULE_11__["writer"])("pixelType")], a.prototype, "writePixelType", null), Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_6__["property"])({
          constructOnly: !0,
          type: _support_RasterInfo_js__WEBPACK_IMPORTED_MODULE_37__["default"]
        })], a.prototype, "serviceRasterInfo", void 0), Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_6__["property"])()], a.prototype, "sourceJSON", void 0), Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_6__["property"])(_support_commonProperties_js__WEBPACK_IMPORTED_MODULE_24__["url"])], a.prototype, "url", void 0), Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_6__["property"])({
          readOnly: !0
        })], a.prototype, "version", void 0), Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_reader_js__WEBPACK_IMPORTED_MODULE_9__["reader"])("version", ["currentVersion", "fields", "timeInfo"])], a.prototype, "readVersion", null), a = Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_subclass_js__WEBPACK_IMPORTED_MODULE_10__["subclass"])("esri.layers.mixins.ArcGISImageService")], a), a;
      };
      /***/

    },

    /***/
    "DGqI":
    /*!**************************************************************!*\
      !*** ./node_modules/@arcgis/core/tasks/ImageIdentifyTask.js ***!
      \**************************************************************/

    /*! exports provided: default */

    /***/
    function DGqI(module, __webpack_exports__, __webpack_require__) {
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


      var _Task_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! ./Task.js */
      "kglp");
      /* harmony import */


      var _rest_imageService_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
      /*! ../rest/imageService.js */
      "32ia");
      /*
      All material copyright ESRI, All Rights Reserved, unless otherwise specified.
      See https://js.arcgis.com/4.18/esri/copyright.txt for details.
      */


      var t = /*#__PURE__*/function (_Task_js__WEBPACK_IMP) {
        _inherits(t, _Task_js__WEBPACK_IMP);

        var _super4 = _createSuper(t);

        function t() {
          _classCallCheck(this, t);

          return _super4.apply(this, arguments);
        }

        _createClass(t, [{
          key: "execute",
          value: function execute(r, s) {
            return Object(_rest_imageService_js__WEBPACK_IMPORTED_MODULE_10__["identify"])(this.url, r, s);
          }
        }]);

        return t;
      }(_Task_js__WEBPACK_IMPORTED_MODULE_9__["default"]);

      t = Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_subclass_js__WEBPACK_IMPORTED_MODULE_5__["subclass"])("esri.tasks.ImageIdentifyTask")], t);
      var p = t;
      /* harmony default export */

      __webpack_exports__["default"] = p;
      /***/
    },

    /***/
    "M87H":
    /*!****************************************************************!*\
      !*** ./node_modules/@arcgis/core/layers/support/MosaicRule.js ***!
      \****************************************************************/

    /*! exports provided: default */

    /***/
    function M87H(module, __webpack_exports__, __webpack_require__) {
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


      var _core_accessorSupport_decorators_cast_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ../../core/accessorSupport/decorators/cast.js */
      "Gj5k");
      /* harmony import */


      var _core_jsonMap_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! ../../core/jsonMap.js */
      "+opI");
      /* harmony import */


      var _core_accessorSupport_decorators_reader_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! ../../core/accessorSupport/decorators/reader.js */
      "r88o");
      /* harmony import */


      var _core_accessorSupport_decorators_subclass_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! ../../core/accessorSupport/decorators/subclass.js */
      "04ZG");
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


      var _core_JSONSupport_js__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
      /*! ../../core/JSONSupport.js */
      "ag7Y");
      /* harmony import */


      var _geometry_Point_js__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(
      /*! ../../geometry/Point.js */
      "SuVq");
      /* harmony import */


      var _DimensionalDefinition_js__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(
      /*! ./DimensionalDefinition.js */
      "tidM");
      /* harmony import */


      var _RasterFunction_js__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(
      /*! ./RasterFunction.js */
      "yqVY");
      /*
      All material copyright ESRI, All Rights Reserved, unless otherwise specified.
      See https://js.arcgis.com/4.18/esri/copyright.txt for details.
      */


      var _u4;

      var m = Object(_core_jsonMap_js__WEBPACK_IMPORTED_MODULE_7__["strict"])()({
        MT_FIRST: "first",
        MT_LAST: "last",
        MT_MIN: "min",
        MT_MAX: "max",
        MT_MEAN: "mean",
        MT_BLEND: "blend",
        MT_SUM: "sum"
      }),
          h = Object(_core_jsonMap_js__WEBPACK_IMPORTED_MODULE_7__["strict"])()({
        esriMosaicNone: "none",
        esriMosaicCenter: "center",
        esriMosaicNadir: "nadir",
        esriMosaicViewpoint: "viewpoint",
        esriMosaicAttribute: "attribute",
        esriMosaicLockRaster: "lock-raster",
        esriMosaicNorthwest: "northwest",
        esriMosaicSeamline: "seamline"
      });

      var M = _u4 = /*#__PURE__*/function (_core_JSONSupport_js_2) {
        _inherits(u, _core_JSONSupport_js_2);

        var _super5 = _createSuper(u);

        function u(e) {
          var _this12;

          _classCallCheck(this, u);

          _this12 = _super5.call(this, e), _this12.ascending = !0, _this12.itemRenderingRule = null, _this12.lockRasterIds = null, _this12.method = null, _this12.multidimensionalDefinition = null, _this12.objectIds = null, _this12.operation = null, _this12.sortField = null, _this12.sortValue = null, _this12.viewpoint = null, _this12.where = null;
          return _this12;
        }

        _createClass(u, [{
          key: "readAscending",
          value: function readAscending(e, t) {
            return null != t.ascending ? t.ascending : null == t.sortAscending || t.sortAscending;
          }
        }, {
          key: "readMethod",
          value: function readMethod(e, t) {
            return function (e) {
              var t;

              switch (e ? e.toLowerCase().replace("esrimosaic", "") : "") {
                case "byattribute":
                case "attribute":
                  t = "esriMosaicAttribute";
                  break;

                case "lockraster":
                  t = "esriMosaicLockRaster";
                  break;

                case "center":
                  t = "esriMosaicCenter";
                  break;

                case "northwest":
                  t = "esriMosaicNorthwest";
                  break;

                case "nadir":
                  t = "esriMosaicNadir";
                  break;

                case "viewpoint":
                  t = "esriMosaicViewpoint";
                  break;

                case "seamline":
                  t = "esriMosaicSeamline";
                  break;

                case "none":
                default:
                  t = "esriMosaicNone";
              }

              return h.fromJSON(t);
            }(t.mosaicMethod || t.defaultMosaicMethod);
          }
        }, {
          key: "readOperation",
          value: function readOperation(e, t) {
            var o = t.mosaicOperation,
                r = t.mosaicOperator && t.mosaicOperator.toLowerCase(),
                i = o || (r ? m.toJSON(r) : null);
            return m.fromJSON(i) || "first";
          }
        }, {
          key: "castSortValue",
          value: function castSortValue(e) {
            return null == e || "string" == typeof e || "number" == typeof e ? e : "".concat(e);
          }
        }, {
          key: "clone",
          value: function clone() {
            return new _u4({
              ascending: this.ascending,
              itemRenderingRule: Object(_core_lang_js__WEBPACK_IMPORTED_MODULE_2__["clone"])(this.itemRenderingRule),
              lockRasterIds: Object(_core_lang_js__WEBPACK_IMPORTED_MODULE_2__["clone"])(this.lockRasterIds),
              method: this.method,
              multidimensionalDefinition: Object(_core_lang_js__WEBPACK_IMPORTED_MODULE_2__["clone"])(this.multidimensionalDefinition),
              objectIds: Object(_core_lang_js__WEBPACK_IMPORTED_MODULE_2__["clone"])(this.objectIds),
              operation: this.operation,
              sortField: this.sortField,
              sortValue: this.sortValue,
              viewpoint: Object(_core_lang_js__WEBPACK_IMPORTED_MODULE_2__["clone"])(this.viewpoint),
              where: this.where
            });
          }
        }]);

        return u;
      }(_core_JSONSupport_js__WEBPACK_IMPORTED_MODULE_13__["JSONSupport"]);

      Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_5__["property"])({
        type: Boolean,
        json: {
          write: !0
        }
      })], M.prototype, "ascending", void 0), Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_reader_js__WEBPACK_IMPORTED_MODULE_8__["reader"])("ascending", ["ascending", "sortAscending"])], M.prototype, "readAscending", null), Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_5__["property"])({
        type: _RasterFunction_js__WEBPACK_IMPORTED_MODULE_16__["default"],
        json: {
          write: !0
        }
      })], M.prototype, "itemRenderingRule", void 0), Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_5__["property"])({
        type: [_core_accessorSupport_ensureType_js__WEBPACK_IMPORTED_MODULE_4__["Integer"]],
        json: {
          write: {
            overridePolicy: function overridePolicy() {
              return {
                enabled: "lock-raster" === this.method
              };
            }
          }
        }
      })], M.prototype, "lockRasterIds", void 0), Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_5__["property"])({
        type: String,
        json: {
          type: h.jsonValues,
          write: {
            target: "mosaicMethod",
            writer: h.write
          }
        }
      })], M.prototype, "method", void 0), Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_reader_js__WEBPACK_IMPORTED_MODULE_8__["reader"])("method", ["mosaicMethod", "defaultMosaicMethod"])], M.prototype, "readMethod", null), Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_5__["property"])({
        type: [_DimensionalDefinition_js__WEBPACK_IMPORTED_MODULE_15__["default"]],
        json: {
          write: !0
        }
      })], M.prototype, "multidimensionalDefinition", void 0), Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_5__["property"])({
        type: [_core_accessorSupport_ensureType_js__WEBPACK_IMPORTED_MODULE_4__["Integer"]],
        json: {
          name: "fids",
          write: !0
        }
      })], M.prototype, "objectIds", void 0), Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_5__["property"])({
        json: {
          type: m.jsonValues,
          read: {
            reader: m.read
          },
          write: {
            target: "mosaicOperation",
            writer: m.write
          }
        }
      })], M.prototype, "operation", void 0), Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_reader_js__WEBPACK_IMPORTED_MODULE_8__["reader"])("operation", ["mosaicOperation", "mosaicOperator"])], M.prototype, "readOperation", null), Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_5__["property"])({
        type: String,
        json: {
          write: {
            overridePolicy: function overridePolicy() {
              return {
                enabled: "attribute" === this.method
              };
            }
          }
        }
      })], M.prototype, "sortField", void 0), Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_5__["property"])({
        type: [String, Number],
        json: {
          write: {
            allowNull: !0,
            overridePolicy: function overridePolicy() {
              return {
                enabled: "attribute" === this.method,
                allowNull: !0
              };
            }
          }
        }
      })], M.prototype, "sortValue", void 0), Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_cast_js__WEBPACK_IMPORTED_MODULE_6__["cast"])("sortValue")], M.prototype, "castSortValue", null), Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_5__["property"])({
        type: _geometry_Point_js__WEBPACK_IMPORTED_MODULE_14__["default"],
        json: {
          write: !0
        }
      })], M.prototype, "viewpoint", void 0), Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_5__["property"])({
        type: String,
        json: {
          write: !0
        }
      })], M.prototype, "where", void 0), M = _u4 = Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_subclass_js__WEBPACK_IMPORTED_MODULE_9__["subclass"])("esri.layers.support.MosaicRule")], M);
      var w = M;
      /* harmony default export */

      __webpack_exports__["default"] = w;
      /***/
    },

    /***/
    "PVlI":
    /*!******************************************************************!*\
      !*** ./node_modules/@arcgis/core/layers/mixins/ArcGISService.js ***!
      \******************************************************************/

    /*! exports provided: ArcGISService */

    /***/
    function PVlI(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ArcGISService", function () {
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


      var _support_arcgisLayerUrl_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
      /*! ../support/arcgisLayerUrl.js */
      "VLTf");
      /*
      All material copyright ESRI, All Rights Reserved, unless otherwise specified.
      See https://js.arcgis.com/4.18/esri/copyright.txt for details.
      */


      var p = function p(_p2) {
        var c = /*#__PURE__*/function (_p) {
          _inherits(c, _p);

          var _super6 = _createSuper(c);

          function c() {
            _classCallCheck(this, c);

            return _super6.apply(this, arguments);
          }

          _createClass(c, [{
            key: "title",
            get: function get() {
              if (this._get("title") && "defaults" !== this.originOf("title")) return this._get("title");

              if (this.url) {
                var t = Object(_support_arcgisLayerUrl_js__WEBPACK_IMPORTED_MODULE_10__["parse"])(this.url);
                if (Object(_core_maybe_js__WEBPACK_IMPORTED_MODULE_2__["isSome"])(t) && t.title) return t.title;
              }

              return this._get("title") || "";
            },
            set: function set(t) {
              this._set("title", t);
            }
          }, {
            key: "url",
            set: function set(t) {
              this._set("url", Object(_support_arcgisLayerUrl_js__WEBPACK_IMPORTED_MODULE_10__["sanitizeUrl"])(t, _core_Logger_js__WEBPACK_IMPORTED_MODULE_3__["default"].getLogger(this.declaredClass)));
            }
          }]);

          return c;
        }(_p2);

        return Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_5__["property"])({
          dependsOn: ["url"]
        })], c.prototype, "title", null), Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_5__["property"])({
          type: String
        })], c.prototype, "url", null), c = Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_subclass_js__WEBPACK_IMPORTED_MODULE_6__["subclass"])("esri.layers.mixins.ArcGISService")], c), c;
      };
      /***/

    },

    /***/
    "YgyX":
    /*!************************************************************************!*\
      !*** ./node_modules/@arcgis/core/tasks/support/ImageIdentifyResult.js ***!
      \************************************************************************/

    /*! exports provided: default */

    /***/
    function YgyX(module, __webpack_exports__, __webpack_require__) {
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


      var _geometry_Point_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
      /*! ../../geometry/Point.js */
      "SuVq");
      /* harmony import */


      var _FeatureSet_js__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
      /*! ./FeatureSet.js */
      "8prj");
      /*
      All material copyright ESRI, All Rights Reserved, unless otherwise specified.
      See https://js.arcgis.com/4.18/esri/copyright.txt for details.
      */


      var p = /*#__PURE__*/function (_core_JSONSupport_js_3) {
        _inherits(p, _core_JSONSupport_js_3);

        var _super7 = _createSuper(p);

        function p() {
          var _this13;

          _classCallCheck(this, p);

          _this13 = _super7.apply(this, arguments), _this13.catalogItemVisibilities = null, _this13.catalogItems = null, _this13.location = null, _this13.name = null, _this13.objectId = null, _this13.processedValues = null, _this13.properties = null, _this13.value = null;
          return _this13;
        }

        return p;
      }(_core_JSONSupport_js__WEBPACK_IMPORTED_MODULE_9__["JSONSupport"]);

      Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_4__["property"])({
        json: {
          write: !0
        }
      })], p.prototype, "catalogItemVisibilities", void 0), Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_4__["property"])({
        type: _FeatureSet_js__WEBPACK_IMPORTED_MODULE_11__["default"],
        json: {
          write: !0
        }
      })], p.prototype, "catalogItems", void 0), Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_4__["property"])({
        type: _geometry_Point_js__WEBPACK_IMPORTED_MODULE_10__["default"],
        json: {
          write: !0
        }
      })], p.prototype, "location", void 0), Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_4__["property"])({
        json: {
          write: !0
        }
      })], p.prototype, "name", void 0), Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_4__["property"])({
        json: {
          write: !0
        }
      })], p.prototype, "objectId", void 0), Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_4__["property"])({
        json: {
          write: !0
        }
      })], p.prototype, "processedValues", void 0), Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_4__["property"])({
        json: {
          write: !0
        }
      })], p.prototype, "properties", void 0), Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_4__["property"])({
        json: {
          write: !0
        }
      })], p.prototype, "value", void 0), p = Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_subclass_js__WEBPACK_IMPORTED_MODULE_5__["subclass"])("esri.tasks.support.ImageIdentifyResult")], p);
      var l = p;
      /* harmony default export */

      __webpack_exports__["default"] = l;
      /***/
    },

    /***/
    "bxwL":
    /*!**********************************************************************************!*\
      !*** ./node_modules/@arcgis/core/layers/support/ExportImageServiceParameters.js ***!
      \**********************************************************************************/

    /*! exports provided: ExportImageServiceParameters */

    /***/
    function bxwL(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ExportImageServiceParameters", function () {
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


      var _core_accessorSupport_decorators_aliasOf_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ../../core/accessorSupport/decorators/aliasOf.js */
      "Stxv");
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
      /* harmony import */


      var _RasterFunction_js__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
      /*! ./RasterFunction.js */
      "yqVY");
      /* harmony import */


      var _imageryRendererUtils_js__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(
      /*! ./imageryRendererUtils.js */
      "vai6");
      /* harmony import */


      var _MosaicRule_js__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(
      /*! ./MosaicRule.js */
      "M87H");
      /*
      All material copyright ESRI, All Rights Reserved, unless otherwise specified.
      See https://js.arcgis.com/4.18/esri/copyright.txt for details.
      */


      var d = new _core_jsonMap_js__WEBPACK_IMPORTED_MODULE_6__["JSONMap"]({
        RSP_NearestNeighbor: "nearest",
        RSP_BilinearInterpolation: "bilinear",
        RSP_CubicConvolution: "cubic",
        RSP_Majority: "majority"
      }),
          u = new _core_jsonMap_js__WEBPACK_IMPORTED_MODULE_6__["JSONMap"]({
        esriNoDataMatchAny: "any",
        esriNoDataMatchAll: "all"
      });

      var m = /*#__PURE__*/function (_core_JSONSupport_js_4) {
        _inherits(m, _core_JSONSupport_js_4);

        var _super8 = _createSuper(m);

        function m() {
          var _this14;

          _classCallCheck(this, m);

          _this14 = _super8.apply(this, arguments), _this14.layer = null, _this14.adjustAspectRatio = void 0, _this14.bandIds = void 0, _this14.compression = void 0, _this14.compressionQuality = void 0, _this14.compressionTolerance = .01, _this14.format = null, _this14.interpolation = null, _this14.noData = null, _this14.noDataInterpretation = void 0, _this14.pixelType = void 0, _this14.lercVersion = 2;
          return _this14;
        }

        _createClass(m, [{
          key: "writeAdjustAspectRatio",
          value: function writeAdjustAspectRatio(e, r, o) {
            this.layer.version < 10.3 || (r[o] = e);
          }
        }, {
          key: "writeCompressionQuality",
          value: function writeCompressionQuality(e, r, o) {
            this.format && this.format.toLowerCase().indexOf("jpg") > -1 && null != e && (r[o] = e);
          }
        }, {
          key: "writeCompressionTolerance",
          value: function writeCompressionTolerance(e, r, o) {
            "lerc" === this.format && null != e && (r[o] = e);
          }
        }, {
          key: "writeLercVersion",
          value: function writeLercVersion(e, r, o) {
            "lerc" === this.format && this.layer.version >= 10.5 && (r[o] = e);
          }
        }, {
          key: "version",
          get: function get() {
            var e = this.layer;
            return e.bandIds, e.format, e.compressionQuality, e.compressionTolerance, e.interpolation, e.noData, e.noDataInterpretation, e.mosaicRule, e.renderingRule, e.adjustAspectRatio, e.pixelFilter, e.renderer, e.definitionExpression, (this._get("version") || 0) + 1;
          },
          set: function set(e) {
            this._set("version", e);
          }
        }, {
          key: "mosaicRule",
          get: function get() {
            var e = this.layer;
            var r = e.mosaicRule;
            var o = e.definitionExpression;
            return r ? o && o !== r.where && (r = r.clone(), r.where = o) : o && (r = new _MosaicRule_js__WEBPACK_IMPORTED_MODULE_15__["default"]({
              where: o
            })), r;
          }
        }, {
          key: "renderingRule",
          get: function get() {
            var e = this.layer;
            var r = e.renderingRule;
            var o = e.pixelFilter,
                t = !e.format || e.format.indexOf("jpg") > -1 || e.format.indexOf("png") > -1;
            return r = this._addResampleRasterFunction(r), t && !o && (r = this.combineRendererWithRenderingRule()), r;
          }
        }, {
          key: "combineRendererWithRenderingRule",
          value: function combineRendererWithRenderingRule() {
            var e;
            var r = this.layer,
                o = r.rasterInfo,
                t = r.renderingRule,
                i = r.renderer;
            if (!i || !Object(_imageryRendererUtils_js__WEBPACK_IMPORTED_MODULE_14__["isSupportedRendererType"])(i)) return t;
            return Object(_imageryRendererUtils_js__WEBPACK_IMPORTED_MODULE_14__["combineRenderingRules"])(Object(_imageryRendererUtils_js__WEBPACK_IMPORTED_MODULE_14__["convertRendererToRenderingRule"])(i, {
              rasterAttributeTable: o.attributeTable,
              pixelType: o.pixelType,
              dataType: o.dataType,
              bandProperties: null == (e = o.keyProperties) ? void 0 : e.BandProperties,
              convertColorRampToColormap: r.version < 10.6
            }), t);
          }
        }, {
          key: "_addResampleRasterFunction",
          value: function _addResampleRasterFunction(e) {
            var r;
            var o = null;

            if ("vector-field" === (null == (r = this.layer.renderer) ? void 0 : r.type)) {
              var _e14 = {},
                  _r4 = this.layer.renderingRule;

              if (!_r4 || "Resample" !== _r4.functionName) {
                var _r5 = "esriImageServiceDataTypeVector-UV" === this.layer.serviceDataType ? 7 : 10;

                _e14.rasterFunction = "Resample", _e14.rasterFunctionArguments = {
                  ResamplingType: _r5,
                  InputCellSize: {
                    x: this.layer.pixelSizeX,
                    y: this.layer.pixelSizeY
                  }
                };
              }

              o = _RasterFunction_js__WEBPACK_IMPORTED_MODULE_13__["default"].fromJSON(_e14);
            }

            return Object(_imageryRendererUtils_js__WEBPACK_IMPORTED_MODULE_14__["combineRenderingRules"])(o, e);
          }
        }]);

        return m;
      }(_core_JSONSupport_js__WEBPACK_IMPORTED_MODULE_12__["JSONSupport"]);

      Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_4__["property"])()], m.prototype, "layer", void 0), Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_4__["property"])({
        json: {
          write: !0
        }
      })], m.prototype, "adjustAspectRatio", void 0), Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_writer_js__WEBPACK_IMPORTED_MODULE_8__["writer"])("adjustAspectRatio")], m.prototype, "writeAdjustAspectRatio", null), Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_4__["property"])({
        json: {
          write: !0
        }
      }), Object(_core_accessorSupport_decorators_aliasOf_js__WEBPACK_IMPORTED_MODULE_5__["aliasOf"])("layer.bandIds")], m.prototype, "bandIds", void 0), Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_4__["property"])({
        json: {
          write: !0
        }
      })], m.prototype, "compression", void 0), Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_4__["property"])({
        json: {
          write: !0
        }
      }), Object(_core_accessorSupport_decorators_aliasOf_js__WEBPACK_IMPORTED_MODULE_5__["aliasOf"])("layer.compressionQuality")], m.prototype, "compressionQuality", void 0), Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_writer_js__WEBPACK_IMPORTED_MODULE_8__["writer"])("compressionQuality")], m.prototype, "writeCompressionQuality", null), Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_4__["property"])({
        json: {
          write: !0
        }
      }), Object(_core_accessorSupport_decorators_aliasOf_js__WEBPACK_IMPORTED_MODULE_5__["aliasOf"])("layer.compressionTolerance")], m.prototype, "compressionTolerance", void 0), Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_writer_js__WEBPACK_IMPORTED_MODULE_8__["writer"])("compressionTolerance")], m.prototype, "writeCompressionTolerance", null), Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_4__["property"])({
        json: {
          write: !0
        }
      }), Object(_core_accessorSupport_decorators_aliasOf_js__WEBPACK_IMPORTED_MODULE_5__["aliasOf"])("layer.format")], m.prototype, "format", void 0), Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_4__["property"])({
        type: String,
        json: {
          read: {
            reader: d.read
          },
          write: {
            writer: d.write
          }
        }
      }), Object(_core_accessorSupport_decorators_aliasOf_js__WEBPACK_IMPORTED_MODULE_5__["aliasOf"])("layer.interpolation")], m.prototype, "interpolation", void 0), Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_4__["property"])({
        json: {
          write: !0
        }
      }), Object(_core_accessorSupport_decorators_aliasOf_js__WEBPACK_IMPORTED_MODULE_5__["aliasOf"])("layer.noData")], m.prototype, "noData", void 0), Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_4__["property"])({
        type: String,
        json: {
          read: {
            reader: u.read
          },
          write: {
            writer: u.write
          }
        }
      }), Object(_core_accessorSupport_decorators_aliasOf_js__WEBPACK_IMPORTED_MODULE_5__["aliasOf"])("layer.noDataInterpretation")], m.prototype, "noDataInterpretation", void 0), Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_4__["property"])({
        json: {
          write: !0
        }
      })], m.prototype, "pixelType", void 0), Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_4__["property"])({
        json: {
          write: !0
        }
      })], m.prototype, "lercVersion", void 0), Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_writer_js__WEBPACK_IMPORTED_MODULE_8__["writer"])("lercVersion")], m.prototype, "writeLercVersion", null), Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_4__["property"])({
        type: Number,
        dependsOn: ["layer.adjustAspectRatio", "layer.bandIds", "layer.format", "layer.compressionQuality", "layer.compressionTolerance", "layer.definitionExpression", "layer.interpolation", "layer.noData", "layer.noDataInterpretation", "layer.mosaicRule", "layer.renderingRule", "layer.pixelFilter", "layer.renderer", "lercVersion", "pixelType"]
      })], m.prototype, "version", null), Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_4__["property"])({
        dependsOn: ["layer.mosaicRule", "layer.definitionExpression"],
        json: {
          write: !0
        }
      })], m.prototype, "mosaicRule", null), Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_4__["property"])({
        dependsOn: ["layer.renderingRule", "layer.renderer", "layer.rasterInfo", "layer.format"],
        json: {
          write: !0
        }
      })], m.prototype, "renderingRule", null), m = Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_subclass_js__WEBPACK_IMPORTED_MODULE_7__["subclass"])("esri.layers.mixins.ExportImageServiceParameters")], m);
      /***/
    },

    /***/
    "gLc9":
    /*!*****************************************************************!*\
      !*** ./node_modules/@arcgis/core/layers/support/FieldsIndex.js ***!
      \*****************************************************************/

    /*! exports provided: default */

    /***/
    function gLc9(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /*
      All material copyright ESRI, All Rights Reserved, unless otherwise specified.
      See https://js.arcgis.com/4.18/esri/copyright.txt for details.
      */


      function t(t) {
        return "date" === t.type || "esriFieldTypeDate" === t.type;
      }

      function e(t) {
        return t.toLowerCase().trim();
      }
      /* harmony default export */


      __webpack_exports__["default"] = /*#__PURE__*/function () {
        function _class(s) {
          _classCallCheck(this, _class);

          if (this.fields = s, this._fieldsMap = new Map(), this._dateFieldsSet = new Set(), this.dateFields = [], !s) return;
          var i = [];

          var _iterator3 = _createForOfIteratorHelper(s),
              _step3;

          try {
            for (_iterator3.s(); !(_step3 = _iterator3.n()).done;) {
              var d = _step3.value;

              var _s6 = d && d.name;

              if (_s6) {
                var _a20 = e(_s6);

                this._fieldsMap.set(_s6, d), this._fieldsMap.set(_a20, d), i.push(_a20), t(d) && (this.dateFields.push(d), this._dateFieldsSet.add(d));
              }
            }
          } catch (err) {
            _iterator3.e(err);
          } finally {
            _iterator3.f();
          }

          i.sort(), this.uid = i.join(",");
        }

        _createClass(_class, [{
          key: "destroy",
          value: function destroy() {
            this._fieldsMap.clear();
          }
        }, {
          key: "has",
          value: function has(t) {
            return null != this.get(t);
          }
        }, {
          key: "get",
          value: function get(t) {
            return null != t ? this._fieldsMap.get(t) || this._fieldsMap.get(e(t)) : void 0;
          }
        }, {
          key: "isDateField",
          value: function isDateField(t) {
            return this._dateFieldsSet.has(this.get(t));
          }
        }, {
          key: "normalizeFieldName",
          value: function normalizeFieldName(t) {
            var e = this.get(t);
            if (e) return e.name;
          }
        }]);

        return _class;
      }();
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
    "vai6":
    /*!**************************************************************************!*\
      !*** ./node_modules/@arcgis/core/layers/support/imageryRendererUtils.js ***!
      \**************************************************************************/

    /*! exports provided: combineRenderingRules, convertRendererToRenderingRule, isSupportedRendererType, pixelTypeRanges */

    /***/
    function vai6(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "combineRenderingRules", function () {
        return m;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "convertRendererToRenderingRule", function () {
        return c;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "isSupportedRendererType", function () {
        return l;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "pixelTypeRanges", function () {
        return i;
      });
      /* harmony import */


      var _core_lang_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ../../core/lang.js */
      "f/qv");
      /* harmony import */


      var _renderers_visualVariables_SizeVariable_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ../../renderers/visualVariables/SizeVariable.js */
      "w/y1");
      /* harmony import */


      var _renderers_support_colorRampUtils_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ../../renderers/support/colorRampUtils.js */
      "fG4V");
      /* harmony import */


      var _renderers_support_stretchRendererUtils_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ../../renderers/support/stretchRendererUtils.js */
      "ZVeJ");
      /* harmony import */


      var _RasterFunction_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ./RasterFunction.js */
      "yqVY");
      /*
      All material copyright ESRI, All Rights Reserved, unless otherwise specified.
      See https://js.arcgis.com/4.18/esri/copyright.txt for details.
      */


      var i = {
        u1: [0, 1],
        u2: [0, 3],
        u4: [0, 15],
        u8: [0, 255],
        s8: [-128, 127],
        u16: [0, 65535],
        s16: [-32768, 32767],
        u32: [0, 4294967295],
        s32: [-2147483648, 2147483647],
        f32: [-34e38, 34e38],
        f64: [-Number.MAX_VALUE, Number.MAX_VALUE]
      },
          u = {
        simple_scalar: "Simple Scalar",
        wind_barb: "Wind Barb",
        single_arrow: "Single Arrow",
        beaufort_kn: "Beaufort Wind (Knots)",
        beaufort_m: "Beaufort Wind (MetersPerSecond)",
        ocean_current_m: "Ocean Current (MetersPerSecond)",
        ocean_current_kn: "Ocean Current (Knots)"
      },
          s = new Set(["raster-stretch", "unique-value", "class-breaks", "raster-shaded-relief", "vector-field", "raster-colormap"]);

      function l(e) {
        return s.has(e.type);
      }

      function m(t, n) {
        if (!t || !n) return Object(_core_lang_js__WEBPACK_IMPORTED_MODULE_0__["clone"])(t || n);
        var r = Object(_core_lang_js__WEBPACK_IMPORTED_MODULE_0__["clone"])(t);

        if ("none" !== n.functionName.toLowerCase()) {
          p(r.functionArguments).Raster = n;
        }

        return r;
      }

      function c(e, i) {
        switch (i = i || {}, e.type) {
          case "raster-stretch":
            return function (e, t) {
              var i = new _RasterFunction_js__WEBPACK_IMPORTED_MODULE_4__["default"]();
              i.functionName = "Stretch";

              var u = f[_renderers_support_stretchRendererUtils_js__WEBPACK_IMPORTED_MODULE_3__["stretchTypeJSONDict"].toJSON(e.stretchType)],
                  s = "u8",
                  l = function (e) {
                var t = [];
                return e.forEach(function (e) {
                  var n = e;
                  if (Array.isArray(n)) t.push(n);else {
                    if (null == n.min || null == n.max) return;
                    var _e15 = [n.min, n.max, n.avg || 0, n.stddev || 0];
                    t.push(_e15);
                  }
                }), t;
              }(e.statistics),
                  m = {
                StretchType: u,
                Statistics: l,
                DRA: e.dynamicRangeAdjustment,
                UseGamma: e.useGamma,
                Gamma: e.gamma,
                ComputeGamma: e.computeGamma
              };

              null != e.outputMin && (m.Min = e.outputMin);
              null != e.outputMax && (m.Max = e.outputMax);
              u === f.standardDeviation ? (m.NumberOfStandardDeviations = e.numberOfStandardDeviations, i.outputPixelType = s) : u === f.percentClip ? (m.MinPercent = e.minPercent, m.MaxPercent = e.maxPercent, i.outputPixelType = s) : u === f.minMax ? i.outputPixelType = s : u === f.sigmoid && (m.SigmoidStrengthLevel = e.sigmoidStrengthLevel);

              if (i.functionArguments = m, i.variableName = "Raster", e.colorRamp) {
                var _a21 = e.colorRamp,
                    _u5 = new _RasterFunction_js__WEBPACK_IMPORTED_MODULE_4__["default"](),
                    _s7 = Object(_renderers_support_colorRampUtils_js__WEBPACK_IMPORTED_MODULE_2__["getColorRampName"])(_a21);

                return _s7 ? _u5.functionArguments = {
                  colorRamp: _s7
                } : !t.convertColorRampToColormap || "algorithmic" !== _a21.type && "multipart" !== _a21.type ? _u5.functionArguments = {
                  colorRamp: e.colorRamp.toJSON()
                } : _u5.functionArguments = {
                  Colormap: Object(_renderers_support_colorRampUtils_js__WEBPACK_IMPORTED_MODULE_2__["convertColorRampToColormap"])(_a21, 256)
                }, _u5.variableName = "Raster", _u5.functionName = "Colormap", _u5.functionArguments.Raster = i, _u5;
              }

              return i;
            }(e, i);

          case "class-breaks":
            return function (e, t) {
              var n = [],
                  r = [],
                  a = [],
                  i = [],
                  u = 1e-6,
                  s = t.pixelType,
                  l = t.rasterAttributeTable,
                  m = l && l.features,
                  c = g(l);

              if (m && Array.isArray(m) && e.classBreakInfos) {
                e.classBreakInfos.forEach(function (t, n) {
                  var r = t.symbol.color;
                  var a;
                  r.a && m.forEach(function (o) {
                    a = o.attributes[e.field], (a >= t.minValue && a < t.maxValue || n === e.classBreakInfos.length - 1 && a >= t.minValue) && i.push([o.attributes[c], r.r, r.g, r.b]);
                  });
                });

                var _t10 = s ? d(i, s) : i,
                    _n = new _RasterFunction_js__WEBPACK_IMPORTED_MODULE_4__["default"]();

                return _n.functionName = "Colormap", _n.functionArguments = {}, _n.functionArguments.Colormap = _t10, _n.variableName = "Raster", _n;
              }

              e.classBreakInfos.forEach(function (e, t) {
                var o = e.symbol && e.symbol.color;
                o.a ? (0 === t ? n.push(e.minValue, e.maxValue + u) : n.push(e.minValue + u, e.maxValue + u), r.push(t), i.push([t, o.r, o.g, o.b])) : a.push(e.minValue, e.maxValue);
              });
              var p = s ? d(i, s) : i,
                  f = new _RasterFunction_js__WEBPACK_IMPORTED_MODULE_4__["default"]();
              f.functionName = "Remap", f.functionArguments = {
                InputRanges: n,
                OutputValues: r,
                NoDataRanges: a
              }, f.variableName = "Raster";
              var h = new _RasterFunction_js__WEBPACK_IMPORTED_MODULE_4__["default"]();
              return h.functionName = "Colormap", h.functionArguments = {
                Colormap: p,
                Raster: f
              }, h;
            }(e, i);

          case "unique-value":
            return function (e, t) {
              var n = [],
                  r = t.pixelType,
                  a = t.rasterAttributeTable,
                  i = a && a.features,
                  u = g(a);
              var s = !1;
              e.uniqueValueInfos && e.uniqueValueInfos.forEach(function (t) {
                var r = t.symbol.color;
                r.a && (e.field !== u && i ? i && i.forEach(function (a) {
                  String(a.attributes[e.field]) === String(t.value) && n.push([a.attributes[u], r.r, r.g, r.b]);
                }) : isNaN(+t.value) ? s = !0 : n.push([+t.value, r.r, r.g, r.b]));
              });
              if (s) return null;
              var l = r && n.length > 0 ? d(n, r) : n,
                  m = new _RasterFunction_js__WEBPACK_IMPORTED_MODULE_4__["default"]();
              return m.functionName = "Colormap", m.functionArguments = {}, m.functionArguments.Colormap = l, m.variableName = "Raster", m;
            }(e, i);

          case "raster-colormap":
            return function (e, t) {
              var n = e.extractColormap();
              if (!n || 0 === n.length) return;
              var r = t.pixelType,
                  a = r ? d(n, r) : n,
                  i = new _RasterFunction_js__WEBPACK_IMPORTED_MODULE_4__["default"]();
              return i.functionName = "Colormap", i.functionArguments = {}, i.functionArguments.Colormap = a, i;
            }(e, i);

          case "vector-field":
            return function (e, n) {
              var r = new _RasterFunction_js__WEBPACK_IMPORTED_MODULE_4__["default"]();
              r.functionName = "VectorFieldRenderer";
              var a = n.dataType,
                  i = n.bandProperties,
                  s = "vector-uv" === a;
              var l, m;
              i && 2 === i.length && (l = i.map(function (e) {
                return e.BandName.toLowerCase();
              }).indexOf("magnitude"), m = i.map(function (e) {
                return e.BandName.toLowerCase();
              }).indexOf("direction"));
              -1 !== l && null !== l || (l = 0, m = 1);
              var c = "arithmetic" === e.rotationType ? 1 : 2,
                  p = "flow-from" === e.flowRepresentation ? 0 : 1,
                  f = e.visualVariables ? e.visualVariables.filter(function (e) {
                return "Magnitude" === e.field;
              })[0] : new _renderers_visualVariables_SizeVariable_js__WEBPACK_IMPORTED_MODULE_1__["default"](),
                  d = {
                magnitudeBandID: l,
                directionBandID: m,
                isUVComponents: s,
                referenceSystem: c,
                massFlowAngleRepresentation: p,
                symbolTileSize: 50,
                symbolTileSizeUnits: 100,
                calculationMethod: "Vector Average",
                symbologyName: u[e.style.toLowerCase().replace("-", "_")],
                minimumMagnitude: f.minDataValue,
                maximumMagnitude: f.maxDataValue,
                minimumSymbolSize: f.minSize,
                maximumSymbolSize: f.maxSize
              };
              return r.functionArguments = d, r;
            }(e, i);

          case "raster-shaded-relief":
            return function (e, t) {
              if ("elevation" !== t.dataType) return new _RasterFunction_js__WEBPACK_IMPORTED_MODULE_4__["default"]();
              var r = new _RasterFunction_js__WEBPACK_IMPORTED_MODULE_4__["default"]();
              r.functionName = "Hillshade";
              var a = "traditional" === e.hillshadeType ? 0 : 1,
                  i = "none" === e.scalingType ? 1 : 3,
                  u = {
                HillshadeType: a,
                SlopeType: i,
                ZFactor: e.zFactor
              };
              0 === a && (u.Azimuth = e.azimuth, u.Altitude = e.altitude);
              3 === i && (u.PSPower = e.pixelSizePower, u.PSZFactor = e.pixelSizeFactor);
              r.functionArguments = u, r.variableName = "Raster", e.colorRamp && (r.functionName = "ShadedRelief", u.Colormap = Object(_renderers_support_colorRampUtils_js__WEBPACK_IMPORTED_MODULE_2__["convertColorRampToColormap"])(e.colorRamp, 256));
              return r;
            }(e, i);
        }
      }

      function p(e) {
        var t = e.Raster;
        return t && "esri.layers.support.RasterFunction" === t.declaredClass ? p(t.functionArguments) : e;
      }

      var f = {
        none: 0,
        standardDeviation: 3,
        histogramEqualization: 4,
        minMax: 5,
        percentClip: 6,
        sigmoid: 9
      };

      function d(e, t) {
        var n = i[String(t).toLowerCase()];
        return n && e.push([Math.floor(n[0] - 1), 0, 0, 0], [Math.ceil(n[1] + 1), 0, 0, 0]), e;
      }

      function g(e) {
        if (!e) return;
        var t = e.fields,
            n = t && t.find(function (e) {
          return e && e.name && "value" === e.name.toLowerCase();
        });
        return n && n.name;
      }
      /***/

    },

    /***/
    "yqVY":
    /*!********************************************************************!*\
      !*** ./node_modules/@arcgis/core/layers/support/RasterFunction.js ***!
      \********************************************************************/

    /*! exports provided: default */

    /***/
    function yqVY(module, __webpack_exports__, __webpack_require__) {
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


      var _core_accessorSupport_decorators_reader_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! ../../core/accessorSupport/decorators/reader.js */
      "r88o");
      /* harmony import */


      var _core_accessorSupport_decorators_subclass_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! ../../core/accessorSupport/decorators/subclass.js */
      "04ZG");
      /* harmony import */


      var _core_accessorSupport_decorators_writer_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! ../../core/accessorSupport/decorators/writer.js */
      "Cduq");
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


      var _core_JSONSupport_js__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
      /*! ../../core/JSONSupport.js */
      "ag7Y");
      /*
      All material copyright ESRI, All Rights Reserved, unless otherwise specified.
      See https://js.arcgis.com/4.18/esri/copyright.txt for details.
      */


      var _c2;

      var a = new Set(["Raster", "Raster2", "DEM", "FillRaster"]),
          p = new Set(["Rasters"]),
          m = function m(t) {
        return t && t.rasterFunction ? y.fromJSON(t) : t;
      },
          l = function l(t) {
        return t && t instanceof y ? t.toJSON() : t;
      };

      var f;
      !function (t) {
        t[t.MOSAIC = 0] = "MOSAIC", t[t.GROUP = 1] = "GROUP", t[t.ITEM = 2] = "ITEM";
      }(f || (f = {}));

      var y = _c2 = /*#__PURE__*/function (_core_JSONSupport_js_5) {
        _inherits(c, _core_JSONSupport_js_5);

        var _super9 = _createSuper(c);

        function c(t) {
          var _this15;

          _classCallCheck(this, c);

          _this15 = _super9.call(this, t), _this15.functionArguments = null, _this15.functionName = null, _this15.outputPixelType = "unknown", _this15.variableName = null, _this15.description = null, _this15.functionDefinition = null, _this15.thumbnail = null;
          return _this15;
        }

        _createClass(c, [{
          key: "readFunctionArguments",
          value: function readFunctionArguments(t, n) {
            return function (t) {
              if (null == t) return null;
              var n = {};

              for (var _i2 = 0, _Object$keys = Object.keys(t); _i2 < _Object$keys.length; _i2++) {
                var e = _Object$keys[_i2];
                a.has(e) ? n[e] = m(t[e]) : p.has(e) && Array.isArray(t[e]) ? n[e] = t[e].map(m) : n[e] = t[e];
              }

              return n;
            }(n.arguments || n.rasterFunctionArguments);
          }
        }, {
          key: "writeFunctionArguments",
          value: function writeFunctionArguments(t, n, e) {
            var r = {};

            for (var _i3 = 0, _Object$keys2 = Object.keys(t); _i3 < _Object$keys2.length; _i3++) {
              var _n2 = _Object$keys2[_i3];
              a.has(_n2) ? r[_n2] = l(t[_n2]) : p.has(_n2) && Array.isArray(t[_n2]) ? r[_n2] = t[_n2].map(l) : r[_n2] = l(t[_n2]);
            }

            this.functionDefinition ? n.arguments = r : n[e] = r;
          }
        }, {
          key: "readFunctionName",
          value: function readFunctionName(t, n) {
            var e = n.rasterFunctionInfos,
                r = n.name;
            return r || (e && e.length && "None" !== e[0].name ? e[0].name : n.rasterFunction);
          }
        }, {
          key: "writeFunctionName",
          value: function writeFunctionName(t, n, e) {
            this.functionDefinition ? n.name = t : n[e] = t;
          }
        }, {
          key: "readFunctionType",
          value: function readFunctionType(t) {
            return f[t];
          }
        }, {
          key: "writeFunctionType",
          value: function writeFunctionType(t, n, e) {
            n[e] = f[t];
          }
        }, {
          key: "clone",
          value: function clone() {
            return new _c2({
              functionName: this.functionName,
              functionArguments: Object(_core_lang_js__WEBPACK_IMPORTED_MODULE_2__["clone"])(this.functionArguments),
              outputPixelType: this.outputPixelType,
              variableName: this.variableName,
              description: this.description,
              functionType: this.functionType,
              functionDefinition: this.functionDefinition,
              thumbnail: this.thumbnail
            });
          }
        }]);

        return c;
      }(_core_JSONSupport_js__WEBPACK_IMPORTED_MODULE_13__["JSONSupport"]);

      Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_5__["property"])({
        json: {
          type: Object,
          write: {
            target: "rasterFunctionArguments"
          }
        }
      })], y.prototype, "functionArguments", void 0), Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_reader_js__WEBPACK_IMPORTED_MODULE_7__["reader"])("functionArguments", ["rasterFunctionArguments", "arguments"])], y.prototype, "readFunctionArguments", null), Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_writer_js__WEBPACK_IMPORTED_MODULE_9__["writer"])("functionArguments")], y.prototype, "writeFunctionArguments", null), Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_5__["property"])({
        json: {
          type: String,
          write: {
            target: "rasterFunction"
          }
        }
      })], y.prototype, "functionName", void 0), Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_reader_js__WEBPACK_IMPORTED_MODULE_7__["reader"])("functionName", ["rasterFunction", "rasterFunctionInfos", "name"])], y.prototype, "readFunctionName", null), Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_writer_js__WEBPACK_IMPORTED_MODULE_9__["writer"])("functionName")], y.prototype, "writeFunctionName", null), Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_enumeration_js__WEBPACK_IMPORTED_MODULE_6__["enumeration"])({
        C128: "c128",
        C64: "c64",
        F32: "f32",
        F64: "f64",
        S16: "s16",
        S32: "s32",
        S8: "s8",
        U1: "u1",
        U16: "u16",
        U2: "u2",
        U32: "u32",
        U4: "u4",
        U8: "u8",
        UNKNOWN: "unknown"
      }, {
        ignoreUnknown: !1
      }), Object(_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_5__["property"])({
        json: {
          "default": "unknown"
        }
      })], y.prototype, "outputPixelType", void 0), Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_5__["property"])({
        type: String,
        json: {
          read: !0,
          write: !0
        }
      })], y.prototype, "variableName", void 0), Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_5__["property"])({
        type: String,
        json: {
          read: !0,
          write: !0,
          origins: {
            "web-document": {
              read: !1,
              write: !1
            }
          }
        }
      })], y.prototype, "description", void 0), Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_5__["property"])({
        json: {
          origins: {
            "web-document": {
              read: !1,
              write: !1
            }
          }
        }
      })], y.prototype, "functionType", void 0), Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_reader_js__WEBPACK_IMPORTED_MODULE_7__["reader"])("functionType")], y.prototype, "readFunctionType", null), Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_writer_js__WEBPACK_IMPORTED_MODULE_9__["writer"])("functionType")], y.prototype, "writeFunctionType", null), Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_5__["property"])({
        type: Object,
        json: {
          read: {
            source: "function"
          },
          write: {
            target: "function"
          },
          origins: {
            "web-document": {
              read: !1,
              write: !1
            }
          }
        }
      })], y.prototype, "functionDefinition", void 0), Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_5__["property"])({
        type: String,
        json: {
          read: !0,
          write: !0,
          origins: {
            "web-document": {
              read: !1,
              write: !1
            }
          }
        }
      })], y.prototype, "thumbnail", void 0), y = _c2 = Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_subclass_js__WEBPACK_IMPORTED_MODULE_8__["subclass"])("esri.layers.support.RasterFunction")], y);
      var d = y;
      /* harmony default export */

      __webpack_exports__["default"] = d;
      /***/
    }
  }]);
})();
//# sourceMappingURL=ImageryLayer-js-es5.js.map