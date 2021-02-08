(function () {
  function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }

  function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

  function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && Symbol.iterator in Object(iter)) return Array.from(iter); }

  function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }

  function _createForOfIteratorHelper(o, allowArrayLike) { var it; if (typeof Symbol === "undefined" || o[Symbol.iterator] == null) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e3) { throw _e3; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = o[Symbol.iterator](); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e4) { didErr = true; err = _e4; }, f: function f() { try { if (!normalCompletion && it["return"] != null) it["return"](); } finally { if (didErr) throw err; } } }; }

  function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

  function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

  function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

  function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

  function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

  function _get(target, property, receiver) { if (typeof Reflect !== "undefined" && Reflect.get) { _get = Reflect.get; } else { _get = function _get(target, property, receiver) { var base = _superPropBase(target, property); if (!base) return; var desc = Object.getOwnPropertyDescriptor(base, property); if (desc.get) { return desc.get.call(receiver); } return desc.value; }; } return _get(target, property, receiver || target); }

  function _superPropBase(object, property) { while (!Object.prototype.hasOwnProperty.call(object, property)) { object = _getPrototypeOf(object); if (object === null) break; } return object; }

  function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

  function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

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

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["layers-MapImageLayerView2D-js"], {
    /***/
    "/3C5":
    /*!****************************************************************************!*\
      !*** ./node_modules/@arcgis/core/symbols/support/FeatureExpressionInfo.js ***!
      \****************************************************************************/

    /*! exports provided: default */

    /***/
    function C5(module, __webpack_exports__, __webpack_require__) {
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


      var _layers_support_fieldUtils_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
      /*! ../../layers/support/fieldUtils.js */
      "wdpY");
      /*
      All material copyright ESRI, All Rights Reserved, unless otherwise specified.
      See https://js.arcgis.com/4.18/esri/copyright.txt for details.
      */


      var _p;

      var i = _p = /*#__PURE__*/function (_core_JSONSupport_js_) {
        _inherits(p, _core_JSONSupport_js_);

        var _super = _createSuper(p);

        function p() {
          _classCallCheck(this, p);

          return _super.apply(this, arguments);
        }

        _createClass(p, [{
          key: "collectRequiredFields",
          value: function () {
            var _collectRequiredFields = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(r, o) {
              return regeneratorRuntime.wrap(function _callee$(_context) {
                while (1) {
                  switch (_context.prev = _context.next) {
                    case 0:
                      return _context.abrupt("return", Object(_layers_support_fieldUtils_js__WEBPACK_IMPORTED_MODULE_10__["collectArcadeFieldNames"])(r, o, this.expression));

                    case 1:
                    case "end":
                      return _context.stop();
                  }
                }
              }, _callee, this);
            }));

            function collectRequiredFields(_x, _x2) {
              return _collectRequiredFields.apply(this, arguments);
            }

            return collectRequiredFields;
          }()
        }, {
          key: "clone",
          value: function clone() {
            return new _p({
              expression: this.expression,
              title: this.title
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
      })], i.prototype, "expression", void 0), Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_4__["property"])({
        type: String,
        json: {
          write: !0
        }
      })], i.prototype, "title", void 0), i = _p = Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_subclass_js__WEBPACK_IMPORTED_MODULE_5__["subclass"])("esri.layers.support.FeatureExpressionInfo")], i);
      var c = i;
      /* harmony default export */

      __webpack_exports__["default"] = c;
      /***/
    },

    /***/
    "/RTN":
    /*!********************************************************************!*\
      !*** ./node_modules/@arcgis/core/symbols/support/ElevationInfo.js ***!
      \********************************************************************/

    /*! exports provided: default */

    /***/
    function RTN(module, __webpack_exports__, __webpack_require__) {
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
      /* harmony import */


      var _FeatureExpressionInfo_js__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(
      /*! ./FeatureExpressionInfo.js */
      "/3C5");
      /* harmony import */


      var _unitConversionUtils_js__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(
      /*! ./unitConversionUtils.js */
      "gHbr");
      /*
      All material copyright ESRI, All Rights Reserved, unless otherwise specified.
      See https://js.arcgis.com/4.18/esri/copyright.txt for details.
      */


      var _l;

      var m = Object(_core_jsonMap_js__WEBPACK_IMPORTED_MODULE_6__["strict"])()({
        onTheGround: "on-the-ground",
        relativeToGround: "relative-to-ground",
        relativeToScene: "relative-to-scene",
        absoluteHeight: "absolute-height"
      }),
          d = new _core_jsonMap_js__WEBPACK_IMPORTED_MODULE_6__["JSONMap"]({
        foot: "feet",
        kilometer: "kilometers",
        meter: "meters",
        mile: "miles",
        "us-foot": "us-feet",
        yard: "yards"
      });

      var c = _l = /*#__PURE__*/function (_core_JSONSupport_js_2) {
        _inherits(l, _core_JSONSupport_js_2);

        var _super2 = _createSuper(l);

        function l() {
          var _this;

          _classCallCheck(this, l);

          _this = _super2.apply(this, arguments), _this.offset = null;
          return _this;
        }

        _createClass(l, [{
          key: "readFeatureExpressionInfo",
          value: function readFeatureExpressionInfo(e, r) {
            return null != e ? e : r.featureExpression && 0 === r.featureExpression.value ? {
              expression: "0"
            } : void 0;
          }
        }, {
          key: "writeFeatureExpressionInfo",
          value: function writeFeatureExpressionInfo(e, r, o, t) {
            r[o] = e.write(null, t), "0" === e.expression && (r.featureExpression = {
              value: 0
            });
          }
        }, {
          key: "mode",
          get: function get() {
            return this._isOverridden("mode") ? this._get("mode") : Object(_core_maybe_js__WEBPACK_IMPORTED_MODULE_2__["isSome"])(this.offset) || this.featureExpressionInfo ? "relative-to-ground" : "on-the-ground";
          },
          set: function set(e) {
            this._override("mode", e);
          }
        }, {
          key: "unit",
          set: function set(e) {
            this._set("unit", e);
          }
        }, {
          key: "write",
          value: function write(e, r) {
            return this.offset || this.mode || this.featureExpressionInfo || this.unit ? _get(_getPrototypeOf(l.prototype), "write", this).call(this, e, r) : null;
          }
        }, {
          key: "clone",
          value: function clone() {
            return new _l({
              mode: this.mode,
              offset: this.offset,
              featureExpressionInfo: this.featureExpressionInfo ? this.featureExpressionInfo.clone() : void 0,
              unit: this.unit
            });
          }
        }]);

        return l;
      }(_core_JSONSupport_js__WEBPACK_IMPORTED_MODULE_13__["JSONSupport"]);

      Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_5__["property"])({
        type: _FeatureExpressionInfo_js__WEBPACK_IMPORTED_MODULE_14__["default"],
        json: {
          write: !0
        }
      })], c.prototype, "featureExpressionInfo", void 0), Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_reader_js__WEBPACK_IMPORTED_MODULE_7__["reader"])("featureExpressionInfo", ["featureExpressionInfo", "featureExpression"])], c.prototype, "readFeatureExpressionInfo", null), Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_writer_js__WEBPACK_IMPORTED_MODULE_9__["writer"])("featureExpressionInfo", {
        featureExpressionInfo: {
          type: _FeatureExpressionInfo_js__WEBPACK_IMPORTED_MODULE_14__["default"]
        },
        "featureExpression.value": {
          type: [0]
        }
      })], c.prototype, "writeFeatureExpressionInfo", null), Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_5__["property"])({
        type: m.apiValues,
        dependsOn: ["offset", "featureExpressionInfo"],
        nonNullable: !0,
        json: {
          type: m.jsonValues,
          read: m.read,
          write: {
            writer: m.write,
            isRequired: !0
          }
        }
      })], c.prototype, "mode", null), Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_5__["property"])({
        type: Number,
        json: {
          write: !0
        }
      })], c.prototype, "offset", void 0), Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_5__["property"])({
        type: _unitConversionUtils_js__WEBPACK_IMPORTED_MODULE_15__["supportedUnits"],
        json: {
          type: String,
          read: d.read,
          write: d.write
        }
      })], c.prototype, "unit", null), c = _l = Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_subclass_js__WEBPACK_IMPORTED_MODULE_8__["subclass"])("esri.layers.support.ElevationInfo")], c);
      var x = c;
      /* harmony default export */

      __webpack_exports__["default"] = x;
      /***/
    },

    /***/
    "6BjF":
    /*!**************************************************************************!*\
      !*** ./node_modules/@arcgis/core/views/2d/layers/MapImageLayerView2D.js ***!
      \**************************************************************************/

    /*! exports provided: default */

    /***/
    function BjF(module, __webpack_exports__, __webpack_require__) {
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


      var _core_promiseUtils_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! ../../../core/promiseUtils.js */
      "9MzC");
      /* harmony import */


      var _core_watchUtils_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
      /*! ../../../core/watchUtils.js */
      "N5XI");
      /* harmony import */


      var _layers_RefreshableLayerView_js__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
      /*! ../../layers/RefreshableLayerView.js */
      "bHqs");
      /* harmony import */


      var _layers_support_ExportImageParameters_js__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
      /*! ../../../layers/support/ExportImageParameters.js */
      "cM4j");
      /* harmony import */


      var _layers_LayerView_js__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
      /*! ../../layers/LayerView.js */
      "NloG");
      /* harmony import */


      var _support_drapedUtils_js__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(
      /*! ../../support/drapedUtils.js */
      "6UvW");
      /* harmony import */


      var _layers_MapImageLayerView_js__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(
      /*! ../../layers/MapImageLayerView.js */
      "U3zk");
      /* harmony import */


      var _engine_BitmapContainer_js__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(
      /*! ../engine/BitmapContainer.js */
      "LTnl");
      /* harmony import */


      var _LayerView2D_js__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(
      /*! ./LayerView2D.js */
      "Vm2Q");
      /* harmony import */


      var _support_ExportStrategy_js__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(
      /*! ./support/ExportStrategy.js */
      "vbiG");
      /*
      All material copyright ESRI, All Rights Reserved, unless otherwise specified.
      See https://js.arcgis.com/4.18/esri/copyright.txt for details.
      */


      var c = _core_Logger_js__WEBPACK_IMPORTED_MODULE_2__["default"].getLogger("esri.views.2d.layers.MapImageLayerView2D");

      var l = /*#__PURE__*/function (_Object) {
        _inherits(l, _Object);

        var _super3 = _createSuper(l);

        function l() {
          var _this2;

          _classCallCheck(this, l);

          _this2 = _super3.apply(this, arguments), _this2._exportImageVersion = -1;
          return _this2;
        }

        _createClass(l, [{
          key: "hitTest",
          value: function hitTest() {
            return null;
          }
        }, {
          key: "update",
          value: function update(e) {
            this.strategy.update(e)["catch"](function (e) {
              Object(_core_promiseUtils_js__WEBPACK_IMPORTED_MODULE_9__["isAbortError"])(e) || c.error(e);
            });
          }
        }, {
          key: "attach",
          value: function attach() {
            var _this3 = this;

            var _this$layer = this.layer,
                e = _this$layer.imageMaxWidth,
                t = _this$layer.imageMaxHeight,
                r = _this$layer.version,
                i = r >= 10.3,
                s = r >= 10;
            this._bitmapContainer = new _engine_BitmapContainer_js__WEBPACK_IMPORTED_MODULE_16__["BitmapContainer"](), this.container.addChild(this._bitmapContainer), this.strategy = new _support_ExportStrategy_js__WEBPACK_IMPORTED_MODULE_18__["default"]({
              container: this._bitmapContainer,
              fetchSource: this.fetchImage.bind(this),
              requestUpdate: this.requestUpdate.bind(this),
              imageMaxWidth: e,
              imageMaxHeight: t,
              imageRotationSupported: i,
              imageNormalizationSupported: s,
              hidpi: !0
            }), this.imageParameters = new _layers_support_ExportImageParameters_js__WEBPACK_IMPORTED_MODULE_12__["ExportImageParameters"]({
              view: this.view,
              layer: this.layer
            }), this.handles.add(Object(_core_watchUtils_js__WEBPACK_IMPORTED_MODULE_10__["init"])(this.imageParameters, "version", function (e) {
              _this3._exportImageVersion !== e && (_this3._exportImageVersion = e, _this3.requestUpdate());
            }), "mapimagelayerview-update");
          }
        }, {
          key: "detach",
          value: function detach() {
            this.strategy.destroy(), this.handles.remove("mapimagelayerview-update"), this.imageParameters.destroy(), this.imageParameters = null, this._exportImageVersion = -1, this.container.removeChild(this._bitmapContainer), this._bitmapContainer.removeAllChildren();
          }
        }, {
          key: "moveStart",
          value: function moveStart() {}
        }, {
          key: "viewChange",
          value: function viewChange() {}
        }, {
          key: "moveEnd",
          value: function moveEnd() {
            this.requestUpdate();
          }
        }, {
          key: "createFetchPopupFeaturesQueryGeometry",
          value: function createFetchPopupFeaturesQueryGeometry(e, t) {
            return Object(_support_drapedUtils_js__WEBPACK_IMPORTED_MODULE_14__["createQueryGeometry"])(e, t, this.view);
          }
        }, {
          key: "doRefresh",
          value: function () {
            var _doRefresh = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee2() {
              return regeneratorRuntime.wrap(function _callee2$(_context2) {
                while (1) {
                  switch (_context2.prev = _context2.next) {
                    case 0:
                      this.requestUpdate();

                    case 1:
                    case "end":
                      return _context2.stop();
                  }
                }
              }, _callee2, this);
            }));

            function doRefresh() {
              return _doRefresh.apply(this, arguments);
            }

            return doRefresh;
          }()
        }, {
          key: "isUpdating",
          value: function isUpdating() {
            return this.strategy.updating || this.updateRequested;
          }
        }, {
          key: "fetchImage",
          value: function fetchImage(e, t, r, i) {
            return this.layer.fetchImage(e, t, r, _objectSpread({
              timeExtent: this.imageParameters.timeExtent,
              timestamp: this.refreshTimestamp
            }, i));
          }
        }]);

        return l;
      }(Object(_layers_MapImageLayerView_js__WEBPACK_IMPORTED_MODULE_15__["MapImageLayerView"])(Object(_layers_RefreshableLayerView_js__WEBPACK_IMPORTED_MODULE_11__["RefreshableLayerView"])(Object(_LayerView2D_js__WEBPACK_IMPORTED_MODULE_17__["LayerView2DMixin"])(_layers_LayerView_js__WEBPACK_IMPORTED_MODULE_13__["default"]))));

      Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_4__["property"])()], l.prototype, "strategy", void 0), Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_4__["property"])({
        dependsOn: ["strategy.updating"]
      })], l.prototype, "updating", void 0), l = Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_subclass_js__WEBPACK_IMPORTED_MODULE_5__["subclass"])("esri.views.2d.layers.MapImageLayerView2D")], l);
      var y = l;
      /* harmony default export */

      __webpack_exports__["default"] = y;
      /***/
    },

    /***/
    "6UvW":
    /*!****************************************************************!*\
      !*** ./node_modules/@arcgis/core/views/support/drapedUtils.js ***!
      \****************************************************************/

    /*! exports provided: createQueryGeometry, intersectsDrapedGeometry */

    /***/
    function UvW(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "createQueryGeometry", function () {
        return a;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "intersectsDrapedGeometry", function () {
        return o;
      });
      /* harmony import */


      var _core_maybe_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ../../core/maybe.js */
      "srIe");
      /* harmony import */


      var _geometry_Extent_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ../../geometry/Extent.js */
      "OvF4");
      /* harmony import */


      var _geometry_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ../../geometry.js */
      "4GrV");
      /* harmony import */


      var _core_unitUtils_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ../../core/unitUtils.js */
      "gEht");
      /* harmony import */


      var _renderers_support_clickToleranceUtils_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ../../renderers/support/clickToleranceUtils.js */
      "U282");
      /*
      All material copyright ESRI, All Rights Reserved, unless otherwise specified.
      See https://js.arcgis.com/4.18/esri/copyright.txt for details.
      */


      function a(t, i, a) {
        var o = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : new _geometry_Extent_js__WEBPACK_IMPORTED_MODULE_1__["default"]();
        var s;
        if ("2d" === a.type) s = i * a.resolution;else if ("3d" === a.type) {
          var r = a.overlayPixelSizeInMapUnits(t),
              _o = a.basemapSpatialReference;
          s = Object(_core_maybe_js__WEBPACK_IMPORTED_MODULE_0__["isSome"])(_o) && !_o.equals(a.spatialReference) ? Object(_core_unitUtils_js__WEBPACK_IMPORTED_MODULE_3__["getMetersPerUnitForSR"])(_o) / Object(_core_unitUtils_js__WEBPACK_IMPORTED_MODULE_3__["getMetersPerUnitForSR"])(a.spatialReference) : i * r;
        }
        var m = t.x - s,
            p = t.y - s,
            c = t.x + s,
            l = t.y + s,
            f = a.spatialReference;
        return o.xmin = Math.min(m, c), o.ymin = Math.min(p, l), o.xmax = Math.max(m, c), o.ymax = Math.max(p, l), o.spatialReference = f, o;
      }

      function o(e, r, n) {
        var o = n.toMap(e);
        if (Object(_core_maybe_js__WEBPACK_IMPORTED_MODULE_0__["isNone"])(o)) return !1;
        return a(o, Object(_renderers_support_clickToleranceUtils_js__WEBPACK_IMPORTED_MODULE_4__["calculateTolerance"])(), n, s).intersects(r);
      }

      var s = new _geometry_Extent_js__WEBPACK_IMPORTED_MODULE_1__["default"]();
      /***/
    },

    /***/
    "Ilhi":
    /*!*******************************************************************!*\
      !*** ./node_modules/@arcgis/core/layers/support/sublayerUtils.js ***!
      \*******************************************************************/

    /*! exports provided: isExportDynamic, isSublayerOverhaul, shouldWriteSublayerStructure */

    /***/
    function Ilhi(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "isExportDynamic", function () {
        return n;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "isSublayerOverhaul", function () {
        return i;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "shouldWriteSublayerStructure", function () {
        return e;
      });
      /*
      All material copyright ESRI, All Rights Reserved, unless otherwise specified.
      See https://js.arcgis.com/4.18/esri/copyright.txt for details.
      */


      function e(e, n, i) {
        if (n.flatten(function (_ref) {
          var e = _ref.sublayers;
          return e;
        }).length !== e.length) return !0;
        return !!e.some(function (e) {
          return e.originIdOf("minScale") > i || e.originIdOf("maxScale") > i || e.originIdOf("renderer") > i || e.originIdOf("labelingInfo") > i || e.originIdOf("opacity") > i || e.originIdOf("labelsVisible") > i || e.originIdOf("source") > i;
        }) || !r(e, n);
      }

      function n(e, n, i) {
        return !!e.some(function (e) {
          var n = e.source;
          return !(!n || "map-layer" === n.type && n.mapLayerId === e.id && (!n.gdbVersion || n.gdbVersion === i.gdbVersion)) || e.originIdOf("renderer") > 2 || e.originIdOf("labelingInfo") > 2 || e.originIdOf("opacity") > 2 || e.originIdOf("labelsVisible") > 2;
        }) || !r(e, n);
      }

      function r(e, n) {
        if (!e || !e.length) return !0;
        var r = n.slice().reverse().flatten(function (_ref2) {
          var e = _ref2.sublayers;
          return e && e.toArray().reverse();
        }).map(function (e) {
          return e.id;
        }).toArray();
        if (e.length > r.length) return !1;
        var i = 0;
        var o = r.length;

        var _iterator = _createForOfIteratorHelper(e),
            _step;

        try {
          for (_iterator.s(); !(_step = _iterator.n()).done;) {
            var _n = _step.value.id;

            for (; i < o && r[i] !== _n;) {
              i++;
            }

            if (i >= o) return !1;
          }
        } catch (err) {
          _iterator.e(err);
        } finally {
          _iterator.f();
        }

        return !0;
      }

      function i(e) {
        return !!e && e.some(function (e) {
          return null != e.minScale || e.layerDefinition && null != e.layerDefinition.minScale;
        });
      }
      /***/

    },

    /***/
    "IvSi":
    /*!**********************************************************************!*\
      !*** ./node_modules/@arcgis/core/layers/support/commonProperties.js ***!
      \**********************************************************************/

    /*! exports provided: combinedViewLayerTimeExtentProperty, elevationInfo, labelsVisible, legendEnabled, opacity, opacityDrawingInfo, popupEnabled, readOnlyService, screenSizePerspectiveEnabled, url */

    /***/
    function IvSi(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "combinedViewLayerTimeExtentProperty", function () {
        return m;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "elevationInfo", function () {
        return d;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "labelsVisible", function () {
        return l;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "legendEnabled", function () {
        return c;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "opacity", function () {
        return u;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "opacityDrawingInfo", function () {
        return y;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "popupEnabled", function () {
        return a;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "readOnlyService", function () {
        return f;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "screenSizePerspectiveEnabled", function () {
        return s;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "url", function () {
        return p;
      });
      /* harmony import */


      var _core_accessorSupport_utils_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ../../core/accessorSupport/utils.js */
      "TDcG");
      /* harmony import */


      var _chunks_persistableUrlUtils_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ../../chunks/persistableUrlUtils.js */
      "/PL2");
      /* harmony import */


      var _core_accessorSupport_write_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ../../core/accessorSupport/write.js */
      "xHih");
      /* harmony import */


      var _webdoc_support_opacityUtils_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ../../webdoc/support/opacityUtils.js */
      "Qr4e");
      /* harmony import */


      var _TimeExtent_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ../../TimeExtent.js */
      "ZYtI");
      /* harmony import */


      var _symbols_support_ElevationInfo_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ../../symbols/support/ElevationInfo.js */
      "/RTN");
      /*
      All material copyright ESRI, All Rights Reserved, unless otherwise specified.
      See https://js.arcgis.com/4.18/esri/copyright.txt for details.
      */


      var s = {
        type: Boolean,
        value: !0,
        json: {
          origins: {
            "web-scene": {
              read: {
                source: ["id", "url", "layerType"],
                reader: function reader(i, r) {
                  if (null != r.screenSizePerspective || "defaults" !== this.originOf("screenSizePerspectiveEnabled")) return r.screenSizePerspective;
                  Object(_core_accessorSupport_utils_js__WEBPACK_IMPORTED_MODULE_0__["getProperties"])(this).store.set("screenSizePerspectiveEnabled", !1, 0);
                }
              },
              write: {
                ignoreOrigin: !0,
                target: "screenSizePerspective",
                writer: function writer(e, i, n, t) {
                  ("defaults" === this.originOf("screenSizePerspectiveEnabled") && e || Object(_core_accessorSupport_write_js__WEBPACK_IMPORTED_MODULE_2__["willPropertyWrite"])(this, "screenSizePerspectiveEnabled", {}, t)) && (i[n] = e);
                }
              }
            }
          }
        }
      },
          a = {
        type: Boolean,
        value: !0,
        json: {
          name: "disablePopup",
          read: {
            reader: function reader(e, i) {
              return !i.disablePopup;
            }
          },
          write: {
            enabled: !0,
            writer: function writer(e, i, r) {
              i[r] = !e;
            }
          }
        }
      },
          l = {
        type: Boolean,
        value: !0,
        json: {
          name: "showLabels",
          write: !0
        }
      },
          p = {
        type: String,
        json: {
          origins: {
            "portal-item": {
              write: !1
            }
          },
          write: {
            isRequired: !0,
            ignoreOrigin: !0,
            writer: _chunks_persistableUrlUtils_js__WEBPACK_IMPORTED_MODULE_1__["w"]
          }
        }
      },
          c = {
        type: Boolean,
        value: !0,
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
      },
          d = {
        value: null,
        type: _symbols_support_ElevationInfo_js__WEBPACK_IMPORTED_MODULE_5__["default"],
        json: {
          origins: {
            service: {
              name: "elevationInfo",
              write: !0
            }
          },
          name: "layerDefinition.elevationInfo",
          write: !0
        }
      };

      function f(e) {
        return {
          type: e,
          readOnly: !0,
          json: {
            origins: {
              service: {
                read: !0
              }
            },
            read: !1
          }
        };
      }

      var u = {
        type: Number,
        json: {
          origins: {
            "web-document": {
              "default": 1,
              write: !0,
              read: !0
            },
            "portal-item": {
              write: !0
            }
          }
        }
      },
          y = _objectSpread(_objectSpread({}, u), {}, {
        json: _objectSpread(_objectSpread({}, u.json), {}, {
          origins: {
            "web-document": _objectSpread(_objectSpread({}, u.json.origins["web-document"]), {}, {
              write: {
                enabled: !0,
                target: {
                  opacity: {
                    type: Number
                  },
                  "layerDefinition.drawingInfo.transparency": {
                    type: Number
                  }
                }
              }
            })
          },
          read: {
            source: ["layerDefinition.drawingInfo.transparency", "drawingInfo.transparency"],
            reader: function reader(e, i, r) {
              return r && "service" !== r.origin || !i.drawingInfo || void 0 === i.drawingInfo.transparency ? i.layerDefinition && i.layerDefinition.drawingInfo && void 0 !== i.layerDefinition.drawingInfo.transparency ? Object(_webdoc_support_opacityUtils_js__WEBPACK_IMPORTED_MODULE_3__["transparencyToOpacity"])(i.layerDefinition.drawingInfo.transparency) : void 0 : Object(_webdoc_support_opacityUtils_js__WEBPACK_IMPORTED_MODULE_3__["transparencyToOpacity"])(i.drawingInfo.transparency);
            }
          }
        })
      }),
          m = {
        type: _TimeExtent_js__WEBPACK_IMPORTED_MODULE_4__["default"],
        dependsOn: ["view.timeExtent", "layer.timeExtent", "layer.timeInfo", "layer.timeOffset", "layer.timeOffset.value", "layer.timeOffset.unit", "layer.useViewTime"],
        readOnly: !0,
        get: function get() {
          var e, i;
          if (null == (e = this.layer) || !e.timeInfo) return null;
          var r = null == (i = this.view) ? void 0 : i.timeExtent,
              n = this.layer.timeExtent,
              t = this.layer.useViewTime ? r && n ? r.intersection(n) : r || n : n;
          if (!t || t.isEmpty) return t;

          var o = this.layer.timeOffset,
              s = o ? t.offset(-o.value, o.unit) : t,
              a = this._get("timeExtent");

          return s.equals(a) ? a : s;
        }
      };
      /***/

    },

    /***/
    "U282":
    /*!****************************************************************************!*\
      !*** ./node_modules/@arcgis/core/renderers/support/clickToleranceUtils.js ***!
      \****************************************************************************/

    /*! exports provided: calculateTolerance */

    /***/
    function U282(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "calculateTolerance", function () {
        return n;
      });
      /*
      All material copyright ESRI, All Rights Reserved, unless otherwise specified.
      See https://js.arcgis.com/4.18/esri/copyright.txt for details.
      */


      function t(t, e) {
        return e ? "xoffset" in e && e.xoffset ? Math.max(t, Math.abs(e.xoffset)) : "yoffset" in e && e.yoffset ? Math.max(t, Math.abs(e.yoffset || 0)) : t : t;
      }

      function e(t, e) {
        return "number" == typeof t ? t : t && t.stops && t.stops.length ? function (t) {
          var e = 0,
              n = 0;

          for (var r = 0; r < t.length; r++) {
            var s = t[r].size;
            "number" == typeof s && (e += s, n++);
          }

          return e / n;
        }(t.stops) : e;
      }

      function n(n) {
        var r = n && n.renderer,
            s = "touch" === (n && n.event && n.event.pointerType) ? 9 : 6;
        if (!r) return s;
        var o = "visualVariables" in r ? function (t, n) {
          if (!n) return t;
          var r = n.filter(function (t) {
            return "size" === t.type;
          }).map(function (n) {
            var r = n.maxSize,
                s = n.minSize;
            return (e(r, t) + e(s, t)) / 2;
          });
          var s = 0;
          var o = r.length;
          if (0 === o) return t;

          for (var _t = 0; _t < o; _t++) {
            s += r[_t];
          }

          var f = Math.floor(s / o);
          return Math.max(f, t);
        }(s, r.visualVariables) : s;
        if ("simple" === r.type) return t(o, r.symbol);

        if ("unique-value" === r.type) {
          var _e = o;
          return r.uniqueValueInfos.forEach(function (n) {
            _e = t(_e, n.symbol);
          }), _e;
        }

        if ("class-breaks" === r.type) {
          var _e2 = o;
          return r.classBreakInfos.forEach(function (n) {
            _e2 = t(_e2, n.symbol);
          }), _e2;
        }

        return r.type, o;
      }
      /***/

    },

    /***/
    "U3zk":
    /*!*********************************************************************!*\
      !*** ./node_modules/@arcgis/core/views/layers/MapImageLayerView.js ***!
      \*********************************************************************/

    /*! exports provided: MapImageLayerView */

    /***/
    function U3zk(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "MapImageLayerView", function () {
        return n;
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


      var _core_promiseUtils_js__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
      /*! ../../core/promiseUtils.js */
      "9MzC");
      /* harmony import */


      var _support_arcadeOnDemand_js__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
      /*! ../../support/arcadeOnDemand.js */
      "gvqN");
      /* harmony import */


      var _renderers_support_clickToleranceUtils_js__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
      /*! ../../renderers/support/clickToleranceUtils.js */
      "U282");
      /* harmony import */


      var _support_popupUtils_js__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(
      /*! ./support/popupUtils.js */
      "rXMu");
      /*
      All material copyright ESRI, All Rights Reserved, unless otherwise specified.
      See https://js.arcgis.com/4.18/esri/copyright.txt for details.
      */


      var n = function n(_n3) {
        var d = /*#__PURE__*/function (_n2) {
          _inherits(d, _n2);

          var _super4 = _createSuper(d);

          function d() {
            _classCallCheck(this, d);

            return _super4.apply(this, arguments);
          }

          _createClass(d, [{
            key: "fetchPopupFeatures",
            value: function () {
              var _fetchPopupFeatures = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee5(e, t) {
                var _this4 = this;

                var s, u, n, _d, y, f;

                return regeneratorRuntime.wrap(function _callee5$(_context5) {
                  while (1) {
                    switch (_context5.prev = _context5.next) {
                      case 0:
                        s = this.layer;

                        if (e) {
                          _context5.next = 3;
                          break;
                        }

                        return _context5.abrupt("return", Object(_core_promiseUtils_js__WEBPACK_IMPORTED_MODULE_11__["reject"])(new _core_Error_js__WEBPACK_IMPORTED_MODULE_7__["default"]("mapimagelayerview:fetchPopupFeatures", "Nothing to fetch without area", {
                          layer: s
                        })));

                      case 3:
                        u = this.get("view.scale"), n = [], _d = /*#__PURE__*/function () {
                          var _ref3 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee3(e) {
                            var s, o, _s;

                            return regeneratorRuntime.wrap(function _callee3$(_context3) {
                              while (1) {
                                switch (_context3.prev = _context3.next) {
                                  case 0:
                                    s = 0 === e.minScale || u <= e.minScale, o = 0 === e.maxScale || u >= e.maxScale;
                                    if (e.visible && s && o) if (e.sublayers) e.sublayers.forEach(_d);else if (e.popupEnabled) {
                                      _s = Object(_support_popupUtils_js__WEBPACK_IMPORTED_MODULE_14__["getFetchPopupTemplate"])(e, _objectSpread(_objectSpread({}, t), {}, {
                                        defaultPopupTemplateEnabled: !1
                                      }));
                                      Object(_core_maybe_js__WEBPACK_IMPORTED_MODULE_2__["isSome"])(_s) && n.push({
                                        sublayer: e,
                                        popupTemplate: _s
                                      });
                                    }

                                  case 2:
                                  case "end":
                                    return _context3.stop();
                                }
                              }
                            }, _callee3);
                          }));

                          return function _d(_x5) {
                            return _ref3.apply(this, arguments);
                          };
                        }(), y = s.sublayers.toArray().map(_d);
                        _context5.next = 6;
                        return Object(_core_promiseUtils_js__WEBPACK_IMPORTED_MODULE_11__["all"])(y);

                      case 6:
                        f = n.map( /*#__PURE__*/function () {
                          var _ref5 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee4(_ref4) {
                            var s, o, a, p, i, u, m;
                            return regeneratorRuntime.wrap(function _callee4$(_context4) {
                              while (1) {
                                switch (_context4.prev = _context4.next) {
                                  case 0:
                                    s = _ref4.sublayer, o = _ref4.popupTemplate;
                                    _context4.next = 3;
                                    return s.load()["catch"](function () {});

                                  case 3:
                                    a = s.createQuery(), p = Object(_core_maybe_js__WEBPACK_IMPORTED_MODULE_2__["isSome"])(t) ? t.event : null, i = Object(_renderers_support_clickToleranceUtils_js__WEBPACK_IMPORTED_MODULE_13__["calculateTolerance"])({
                                      renderer: s.renderer,
                                      event: p
                                    }), u = _this4.createFetchPopupFeaturesQueryGeometry(e, i);
                                    a.geometry = u;
                                    _context4.next = 7;
                                    return Object(_support_popupUtils_js__WEBPACK_IMPORTED_MODULE_14__["getRequiredFields"])(s, o);

                                  case 7:
                                    a.outFields = _context4.sent;
                                    _context4.next = 10;
                                    return _this4._loadArcadeModules(o);

                                  case 10:
                                    m = _context4.sent;
                                    m && m.arcadeUtils.hasGeometryOperations(o) || (a.maxAllowableOffset = u.width / i);
                                    _context4.next = 14;
                                    return s.queryFeatures(a);

                                  case 14:
                                    return _context4.abrupt("return", _context4.sent.features);

                                  case 15:
                                  case "end":
                                    return _context4.stop();
                                }
                              }
                            }, _callee4);
                          }));

                          return function (_x6) {
                            return _ref5.apply(this, arguments);
                          };
                        }());
                        _context5.next = 9;
                        return Object(_core_promiseUtils_js__WEBPACK_IMPORTED_MODULE_11__["eachAlways"])(f);

                      case 9:
                        return _context5.abrupt("return", _context5.sent.reduce(function (e, r) {
                          return r.value ? [].concat(_toConsumableArray(e), _toConsumableArray(r.value)) : e;
                        }, []).filter(function (e) {
                          return null != e;
                        }));

                      case 10:
                      case "end":
                        return _context5.stop();
                    }
                  }
                }, _callee5, this);
              }));

              function fetchPopupFeatures(_x3, _x4) {
                return _fetchPopupFeatures.apply(this, arguments);
              }

              return fetchPopupFeatures;
            }()
          }, {
            key: "canResume",
            value: function canResume() {
              var e, r;
              return !!_get(_getPrototypeOf(d.prototype), "canResume", this).call(this) && (null == (e = this.imageParameters) || null == (r = e.timeExtent) || !r.isEmpty);
            }
          }, {
            key: "_loadArcadeModules",
            value: function _loadArcadeModules(e) {
              if (e.get("expressionInfos.length")) return Object(_support_arcadeOnDemand_js__WEBPACK_IMPORTED_MODULE_12__["loadArcade"])();
            }
          }]);

          return d;
        }(_n3);

        return Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_5__["property"])()], d.prototype, "imageParameters", void 0), Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_5__["property"])()], d.prototype, "layer", void 0), Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_5__["property"])({
          dependsOn: ["imageParameters.timeExtent"]
        })], d.prototype, "suspended", void 0), d = Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_subclass_js__WEBPACK_IMPORTED_MODULE_6__["subclass"])("esri.views.layers.MapImageLayerView")], d), d;
      };
      /***/

    },

    /***/
    "cM4j":
    /*!***************************************************************************!*\
      !*** ./node_modules/@arcgis/core/layers/support/ExportImageParameters.js ***!
      \***************************************************************************/

    /*! exports provided: ExportImageParameters */

    /***/
    function cM4j(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ExportImageParameters", function () {
        return y;
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


      var _core_Accessor_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! ../../core/Accessor.js */
      "/CmD");
      /* harmony import */


      var _commonProperties_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
      /*! ./commonProperties.js */
      "IvSi");
      /* harmony import */


      var _core_HandleOwner_js__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
      /*! ../../core/HandleOwner.js */
      "kJYu");
      /* harmony import */


      var _sublayerUtils_js__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
      /*! ./sublayerUtils.js */
      "Ilhi");
      /* harmony import */


      var _views_View_js__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
      /*! ../../views/View.js */
      "U19y");
      /*
      All material copyright ESRI, All Rights Reserved, unless otherwise specified.
      See https://js.arcgis.com/4.18/esri/copyright.txt for details.
      */


      var o = {
        visible: "visibleSublayers",
        definitionExpression: "layerDefs",
        labelingInfo: "hasDynamicLayers",
        labelsVisible: "hasDynamicLayers",
        opacity: "hasDynamicLayers",
        minScale: "visibleSublayers",
        maxScale: "visibleSublayers",
        renderer: "hasDynamicLayers",
        source: "hasDynamicLayers"
      };

      var y = /*#__PURE__*/function (_Object2) {
        _inherits(y, _Object2);

        var _super5 = _createSuper(y);

        function y() {
          var _this5;

          _classCallCheck(this, y);

          _this5 = _super5.apply(this, arguments), _this5._scale = null, _this5.view = null;
          return _this5;
        }

        _createClass(y, [{
          key: "destroy",
          value: function destroy() {
            this.layer = this.view = null;
          }
        }, {
          key: "dynamicLayers",
          get: function get() {
            if (!this.hasDynamicLayers) return null;
            var e = this.visibleSublayers.map(function (e) {
              return e.toExportImageJSON();
            });
            return e.length ? JSON.stringify(e) : null;
          }
        }, {
          key: "hasDynamicLayers",
          get: function get() {
            return this.layer && Object(_sublayerUtils_js__WEBPACK_IMPORTED_MODULE_12__["isExportDynamic"])(this.visibleSublayers, this.layer.serviceSublayers, this.layer);
          }
        }, {
          key: "layer",
          set: function set(e) {
            var _this6 = this;

            this._get("layer") !== e && (this._set("layer", e), this.handles.remove("layer"), e && this.handles.add([e.allSublayers.on("change", function () {
              return _this6.notifyChange("visibleSublayers");
            }), e.on("sublayer-update", function (e) {
              return _this6.notifyChange(o[e.propertyName]);
            })], "layer"));
          }
        }, {
          key: "layers",
          get: function get() {
            var e = this.visibleSublayers;
            return e ? e.length ? "show:" + e.map(function (e) {
              return e.id;
            }).join(",") : "show:-1" : null;
          }
        }, {
          key: "layerDefs",
          get: function get() {
            var e = this.visibleSublayers.filter(function (e) {
              return null != e.definitionExpression;
            });
            return e.length ? JSON.stringify(e.reduce(function (e, s) {
              return e[s.id] = s.definitionExpression, e;
            }, {})) : null;
          }
        }, {
          key: "scale",
          get: function get() {
            return null != this._scale ? this._scale : this.view && this.view.scale || 0;
          },
          set: function set(e) {
            this.view || (this._scale = e, this.notifyChange("scale"));
          }
        }, {
          key: "version",
          get: function get() {
            var e = this;
            e.layers, e.layerDefs, e.dynamicLayers, e.timeExtent;
            var s = e.layer;
            return s && (s.dpi, s.imageFormat, s.imageTransparency, s.gdbVersion), (this._get("version") || 0) + 1;
          },
          set: function set(e) {
            this._set("version", e);
          }
        }, {
          key: "visibleSublayers",
          get: function get() {
            var _this7 = this;

            var e = [];
            if (!this.layer) return e;

            var s = this.layer.sublayers,
                r = function r(s) {
              var i = _this7.scale,
                  a = 0 === i,
                  t = 0 === s.minScale || i <= s.minScale,
                  l = 0 === s.maxScale || i >= s.maxScale;
              s.visible && (a || t && l) && (s.sublayers ? s.sublayers.forEach(r) : e.unshift(s));
            };

            s && s.forEach(r);

            var i = this._get("visibleSublayers");

            return !i || i.length !== e.length || i.some(function (s, r) {
              return e[r] !== s;
            }) ? e : i;
          }
        }, {
          key: "toJSON",
          value: function toJSON() {
            var e = this.layer;
            var s = {
              dpi: e.dpi,
              format: e.imageFormat,
              transparent: e.imageTransparency,
              gdbVersion: e.gdbVersion || null
            };
            return this.hasDynamicLayers && this.dynamicLayers ? s.dynamicLayers = this.dynamicLayers : s = _objectSpread(_objectSpread({}, s), {}, {
              layers: this.layers,
              layerDefs: this.layerDefs
            }), s;
          }
        }]);

        return y;
      }(Object(_core_HandleOwner_js__WEBPACK_IMPORTED_MODULE_11__["HandleOwnerMixin"])(_core_Accessor_js__WEBPACK_IMPORTED_MODULE_9__["default"]));

      Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_4__["property"])({
        readOnly: !0,
        dependsOn: ["hasDynamicLayers", "visibleSublayers"]
      })], y.prototype, "dynamicLayers", null), Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_4__["property"])({
        readOnly: !0,
        dependsOn: ["visibleSublayers", "layer.serviceSublayers", "layer.capabilities"]
      })], y.prototype, "hasDynamicLayers", null), Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_4__["property"])()], y.prototype, "layer", null), Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_4__["property"])({
        readOnly: !0,
        dependsOn: ["visibleSublayers"]
      })], y.prototype, "layers", null), Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_4__["property"])({
        readOnly: !0,
        dependsOn: ["visibleSublayers"]
      })], y.prototype, "layerDefs", null), Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_4__["property"])({
        type: Number,
        dependsOn: ["view.scale"]
      })], y.prototype, "scale", null), Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_4__["property"])(_commonProperties_js__WEBPACK_IMPORTED_MODULE_10__["combinedViewLayerTimeExtentProperty"])], y.prototype, "timeExtent", void 0), Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_4__["property"])({
        dependsOn: ["layers", "layerDefs", "dynamicLayers", "layer.dpi", "layer.imageFormat", "layer.imageTransparency", "layer.gdbVersion", "timeExtent"]
      })], y.prototype, "version", null), Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_4__["property"])({
        type: _views_View_js__WEBPACK_IMPORTED_MODULE_13__["default"]
      })], y.prototype, "view", void 0), Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_4__["property"])({
        readOnly: !0,
        dependsOn: ["layer.sublayers", "scale"]
      })], y.prototype, "visibleSublayers", null), y = Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_subclass_js__WEBPACK_IMPORTED_MODULE_5__["subclass"])("esri.layers.mixins.ExportImageParameters")], y);
      /***/
    },

    /***/
    "gHbr":
    /*!**************************************************************************!*\
      !*** ./node_modules/@arcgis/core/symbols/support/unitConversionUtils.js ***!
      \**************************************************************************/

    /*! exports provided: getMetersPerUnit, supportedUnits, supportsUnit */

    /***/
    function gHbr(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "getMetersPerUnit", function () {
        return r;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "supportedUnits", function () {
        return e;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "supportsUnit", function () {
        return n;
      });
      /* harmony import */


      var _renderers_support_lengthUtils_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ../../renderers/support/lengthUtils.js */
      "m0D6");
      /*
      All material copyright ESRI, All Rights Reserved, unless otherwise specified.
      See https://js.arcgis.com/4.18/esri/copyright.txt for details.
      */


      function n(n) {
        return null != _renderers_support_lengthUtils_js__WEBPACK_IMPORTED_MODULE_0__["meterIn"][n];
      }

      function r(n) {
        return 1 / (_renderers_support_lengthUtils_js__WEBPACK_IMPORTED_MODULE_0__["meterIn"][n] || 1);
      }

      var e = function () {
        var n = Object.keys(_renderers_support_lengthUtils_js__WEBPACK_IMPORTED_MODULE_0__["meterIn"]);
        return n.sort(), n;
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
    "rXMu":
    /*!**********************************************************************!*\
      !*** ./node_modules/@arcgis/core/views/layers/support/popupUtils.js ***!
      \**********************************************************************/

    /*! exports provided: getFetchPopupTemplate, getRequiredFields */

    /***/
    function rXMu(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "getFetchPopupTemplate", function () {
        return d;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "getRequiredFields", function () {
        return i;
      });
      /* harmony import */


      var _core_maybe_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ../../../core/maybe.js */
      "srIe");
      /* harmony import */


      var _layers_support_fieldUtils_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ../../../layers/support/fieldUtils.js */
      "wdpY");
      /*
      All material copyright ESRI, All Rights Reserved, unless otherwise specified.
      See https://js.arcgis.com/4.18/esri/copyright.txt for details.
      */


      function i(_x7) {
        return _i.apply(this, arguments);
      }

      function _i() {
        _i = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee6(i) {
          var d,
              o,
              s,
              u,
              a,
              n,
              f,
              r,
              m,
              _args6 = arguments;
          return regeneratorRuntime.wrap(function _callee6$(_context6) {
            while (1) {
              switch (_context6.prev = _context6.next) {
                case 0:
                  d = _args6.length > 1 && _args6[1] !== undefined ? _args6[1] : i.popupTemplate;

                  if (Object(_core_maybe_js__WEBPACK_IMPORTED_MODULE_0__["isSome"])(d)) {
                    _context6.next = 3;
                    break;
                  }

                  return _context6.abrupt("return", []);

                case 3:
                  _context6.next = 5;
                  return d.getRequiredFields(i.fields);

                case 5:
                  o = _context6.sent;
                  s = d.lastEditInfoEnabled;
                  u = i.objectIdField;
                  a = i.typeIdField;
                  n = i.globalIdField;
                  f = i.relationships;

                  if (!o.includes("*")) {
                    _context6.next = 13;
                    break;
                  }

                  return _context6.abrupt("return", ["*"]);

                case 13:
                  if (!s) {
                    _context6.next = 19;
                    break;
                  }

                  _context6.next = 16;
                  return Object(_layers_support_fieldUtils_js__WEBPACK_IMPORTED_MODULE_1__["getFeatureEditFields"])(i);

                case 16:
                  _context6.t0 = _context6.sent;
                  _context6.next = 20;
                  break;

                case 19:
                  _context6.t0 = [];

                case 20:
                  r = _context6.t0;
                  m = Object(_layers_support_fieldUtils_js__WEBPACK_IMPORTED_MODULE_1__["fixFields"])(i.fields, [].concat(_toConsumableArray(o), _toConsumableArray(r)));
                  return _context6.abrupt("return", (a && m.push(a), m && u && Object(_layers_support_fieldUtils_js__WEBPACK_IMPORTED_MODULE_1__["hasField"])(i.fields, u) && -1 === m.indexOf(u) && m.push(u), m && n && Object(_layers_support_fieldUtils_js__WEBPACK_IMPORTED_MODULE_1__["hasField"])(i.fields, n) && -1 === m.indexOf(n) && m.push(n), f && f.forEach(function (e) {
                    var p = e.keyField;
                    m && p && Object(_layers_support_fieldUtils_js__WEBPACK_IMPORTED_MODULE_1__["hasField"])(i.fields, p) && -1 === m.indexOf(p) && m.push(p);
                  }), m));

                case 23:
                case "end":
                  return _context6.stop();
              }
            }
          }, _callee6);
        }));
        return _i.apply(this, arguments);
      }

      function d(p, l) {
        return p.popupTemplate ? p.popupTemplate : Object(_core_maybe_js__WEBPACK_IMPORTED_MODULE_0__["isSome"])(l) && l.defaultPopupTemplateEnabled && Object(_core_maybe_js__WEBPACK_IMPORTED_MODULE_0__["isSome"])(p.defaultPopupTemplate) ? p.defaultPopupTemplate : null;
      }
      /***/

    }
  }]);
})();
//# sourceMappingURL=layers-MapImageLayerView2D-js-es5.js.map