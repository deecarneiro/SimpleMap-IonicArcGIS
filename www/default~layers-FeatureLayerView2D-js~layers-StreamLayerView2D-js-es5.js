(function () {
  function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }

  function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

  function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && Symbol.iterator in Object(iter)) return Array.from(iter); }

  function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }

  function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

  function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

  function _iterableToArrayLimit(arr, i) { if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr))) return; var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

  function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

  function _createForOfIteratorHelper(o, allowArrayLike) { var it; if (typeof Symbol === "undefined" || o[Symbol.iterator] == null) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e25) { throw _e25; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = o[Symbol.iterator](); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e26) { didErr = true; err = _e26; }, f: function f() { try { if (!normalCompletion && it["return"] != null) it["return"](); } finally { if (didErr) throw err; } } }; }

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

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["default~layers-FeatureLayerView2D-js~layers-StreamLayerView2D-js"], {
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
    "4P1v":
    /*!*************************************************************************!*\
      !*** ./node_modules/@arcgis/core/views/layers/support/FeatureEffect.js ***!
      \*************************************************************************/

    /*! exports provided: default */

    /***/
    function P1v(module, __webpack_exports__, __webpack_require__) {
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


      var _FeatureFilter_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
      /*! ./FeatureFilter.js */
      "M8lB");
      /*
      All material copyright ESRI, All Rights Reserved, unless otherwise specified.
      See https://js.arcgis.com/4.18/esri/copyright.txt for details.
      */


      var _i;

      var c = _i = /*#__PURE__*/function (_core_JSONSupport_js_3) {
        _inherits(i, _core_JSONSupport_js_3);

        var _super3 = _createSuper(i);

        function i() {
          var _this2;

          _classCallCheck(this, i);

          _this2 = _super3.apply(this, arguments), _this2.filter = null, _this2.includedEffect = null, _this2.excludedEffect = null, _this2.excludedLabelsVisible = !1;
          return _this2;
        }

        _createClass(i, [{
          key: "clone",
          value: function clone() {
            return new _i({
              filter: this.filter && this.filter.clone(),
              includedEffect: this.includedEffect,
              excludedEffect: this.excludedEffect,
              excludedLabelsVisible: this.excludedLabelsVisible
            });
          }
        }]);

        return i;
      }(_core_JSONSupport_js__WEBPACK_IMPORTED_MODULE_9__["JSONSupport"]);

      Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_4__["property"])({
        type: _FeatureFilter_js__WEBPACK_IMPORTED_MODULE_10__["default"],
        json: {
          write: !0
        }
      })], c.prototype, "filter", void 0), Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_4__["property"])({
        json: {
          write: !0
        }
      })], c.prototype, "includedEffect", void 0), Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_4__["property"])({
        json: {
          write: !0
        }
      })], c.prototype, "excludedEffect", void 0), Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_4__["property"])({
        type: Boolean,
        json: {
          write: !0
        }
      })], c.prototype, "excludedLabelsVisible", void 0), c = _i = Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_subclass_js__WEBPACK_IMPORTED_MODULE_5__["subclass"])("esri.views.layers.support.FeatureEffect")], c);
      var l = c;
      /* harmony default export */

      __webpack_exports__["default"] = l;
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
    "81oJ":
    /*!********************************************************************************!*\
      !*** ./node_modules/@arcgis/core/views/2d/layers/support/FeatureLayerProxy.js ***!
      \********************************************************************************/

    /*! exports provided: default */

    /***/
    function oJ(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony import */


      var _chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ../../../../chunks/tslib.es6.js */
      "pO5D");
      /* harmony import */


      var _core_has_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ../../../../core/has.js */
      "wSAH");
      /* harmony import */


      var _core_Logger_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ../../../../core/Logger.js */
      "6S2I");
      /* harmony import */


      var _core_accessorSupport_ensureType_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ../../../../core/accessorSupport/ensureType.js */
      "zqDF");
      /* harmony import */


      var _core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ../../../../core/accessorSupport/decorators/property.js */
      "WbKI");
      /* harmony import */


      var _core_accessorSupport_decorators_subclass_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ../../../../core/accessorSupport/decorators/subclass.js */
      "04ZG");
      /* harmony import */


      var _core_urlUtils_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ../../../../core/urlUtils.js */
      "4EHJ");
      /* harmony import */


      var _core_uuid_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! ../../../../core/uuid.js */
      "ju1D");
      /* harmony import */


      var _portal_support_resourceExtension_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! ../../../../portal/support/resourceExtension.js */
      "9AIY");
      /* harmony import */


      var _core_promiseUtils_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! ../../../../core/promiseUtils.js */
      "9MzC");
      /* harmony import */


      var _core_Promise_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
      /*! ../../../../core/Promise.js */
      "+rMe");
      /* harmony import */


      var _core_workers_workers_js__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
      /*! ../../../../core/workers/workers.js */
      "36Co");
      /*
      All material copyright ESRI, All Rights Reserved, unless otherwise specified.
      See https://js.arcgis.com/4.18/esri/copyright.txt for details.
      */


      var l = /*#__PURE__*/function (_core_Promise_js__WEB) {
        _inherits(l, _core_Promise_js__WEB);

        var _super4 = _createSuper(l);

        function l(e) {
          var _this3;

          _classCallCheck(this, l);

          _this3 = _super4.call(this, e), _this3._startupResolver = Object(_core_promiseUtils_js__WEBPACK_IMPORTED_MODULE_9__["createResolver"])(), _this3.isReady = !1;
          return _this3;
        }

        _createClass(l, [{
          key: "initialize",
          value: function initialize() {
            this._controller = Object(_core_promiseUtils_js__WEBPACK_IMPORTED_MODULE_9__["createAbortController"])(), this.addResolvingPromise(this._startWorker(this._controller.signal));
          }
        }, {
          key: "destroy",
          value: function destroy() {
            this._controller.abort(), this._connection && this._connection.close();
          }
        }, {
          key: "tileRenderer",
          set: function set(e) {
            this.client.tileRenderer = e;
          }
        }, {
          key: "closed",
          get: function get() {
            return this._connection.closed;
          }
        }, {
          key: "startup",
          value: function () {
            var _startup = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee2(e, t, r) {
              var s, o, i, n;
              return regeneratorRuntime.wrap(function _callee2$(_context2) {
                while (1) {
                  switch (_context2.prev = _context2.next) {
                    case 0:
                      _context2.next = 2;
                      return this.when();

                    case 2:
                      s = this._controller.signal, o = (i = r.source, Array.isArray(i) ? {
                        transferList: r.source,
                        signal: s
                      } : void 0);
                      n = {
                        service: r,
                        config: t,
                        tileInfo: e.tileInfo.toJSON()
                      };
                      _context2.next = 6;
                      return this._connection.invoke("startup", n, o);

                    case 6:
                      this._startupResolver.resolve();

                      this._set("isReady", !0);

                    case 8:
                    case "end":
                      return _context2.stop();
                  }
                }
              }, _callee2, this);
            }));

            function startup(_x3, _x4, _x5) {
              return _startup.apply(this, arguments);
            }

            return startup;
          }()
        }, {
          key: "updateTiles",
          value: function () {
            var _updateTiles = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee3(e) {
              return regeneratorRuntime.wrap(function _callee3$(_context3) {
                while (1) {
                  switch (_context3.prev = _context3.next) {
                    case 0:
                      _context3.next = 2;
                      return this._startupResolver.promise;

                    case 2:
                      return _context3.abrupt("return", Object(_core_promiseUtils_js__WEBPACK_IMPORTED_MODULE_9__["ignoreAbortErrors"])(this._connection.invoke("updateTiles", e)));

                    case 3:
                    case "end":
                      return _context3.stop();
                  }
                }
              }, _callee3, this);
            }));

            function updateTiles(_x6) {
              return _updateTiles.apply(this, arguments);
            }

            return updateTiles;
          }()
        }, {
          key: "update",
          value: function () {
            var _update = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee4(e, t) {
              var r;
              return regeneratorRuntime.wrap(function _callee4$(_context4) {
                while (1) {
                  switch (_context4.prev = _context4.next) {
                    case 0:
                      r = {
                        config: e,
                        pause: t
                      };
                      _context4.next = 3;
                      return this._startupResolver.promise;

                    case 3:
                      return _context4.abrupt("return", this._connection.invoke("update", r));

                    case 4:
                    case "end":
                      return _context4.stop();
                  }
                }
              }, _callee4, this);
            }));

            function update(_x7, _x8) {
              return _update.apply(this, arguments);
            }

            return update;
          }()
        }, {
          key: "invalidate",
          value: function () {
            var _invalidate = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee5(e) {
              return regeneratorRuntime.wrap(function _callee5$(_context5) {
                while (1) {
                  switch (_context5.prev = _context5.next) {
                    case 0:
                      _context5.next = 2;
                      return this._startupResolver.promise;

                    case 2:
                      return _context5.abrupt("return", this._connection.invoke("invalidate", e));

                    case 3:
                    case "end":
                      return _context5.stop();
                  }
                }
              }, _callee5, this);
            }));

            function invalidate(_x9) {
              return _invalidate.apply(this, arguments);
            }

            return invalidate;
          }()
        }, {
          key: "resume",
          value: function () {
            var _resume = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee6() {
              return regeneratorRuntime.wrap(function _callee6$(_context6) {
                while (1) {
                  switch (_context6.prev = _context6.next) {
                    case 0:
                      _context6.next = 2;
                      return this._startupResolver.promise;

                    case 2:
                      return _context6.abrupt("return", Object(_core_promiseUtils_js__WEBPACK_IMPORTED_MODULE_9__["ignoreAbortErrors"])(this._connection.invoke("controller.resume")));

                    case 3:
                    case "end":
                      return _context6.stop();
                  }
                }
              }, _callee6, this);
            }));

            function resume() {
              return _resume.apply(this, arguments);
            }

            return resume;
          }()
        }, {
          key: "setHighlight",
          value: function () {
            var _setHighlight = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee7(e) {
              return regeneratorRuntime.wrap(function _callee7$(_context7) {
                while (1) {
                  switch (_context7.prev = _context7.next) {
                    case 0:
                      _context7.next = 2;
                      return this._startupResolver.promise;

                    case 2:
                      return _context7.abrupt("return", Object(_core_promiseUtils_js__WEBPACK_IMPORTED_MODULE_9__["ignoreAbortErrors"])(this._connection.invoke("controller.setHighlight", e)));

                    case 3:
                    case "end":
                      return _context7.stop();
                  }
                }
              }, _callee7, this);
            }));

            function setHighlight(_x10) {
              return _setHighlight.apply(this, arguments);
            }

            return setHighlight;
          }()
        }, {
          key: "refresh",
          value: function () {
            var _refresh = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee8() {
              return regeneratorRuntime.wrap(function _callee8$(_context8) {
                while (1) {
                  switch (_context8.prev = _context8.next) {
                    case 0:
                      _context8.next = 2;
                      return this._startupResolver.promise;

                    case 2:
                      return _context8.abrupt("return", Object(_core_promiseUtils_js__WEBPACK_IMPORTED_MODULE_9__["ignoreAbortErrors"])(this._connection.invoke("controller.refresh")));

                    case 3:
                    case "end":
                      return _context8.stop();
                  }
                }
              }, _callee8, this);
            }));

            function refresh() {
              return _refresh.apply(this, arguments);
            }

            return refresh;
          }()
        }, {
          key: "setViewState",
          value: function () {
            var _setViewState = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee9(e) {
              return regeneratorRuntime.wrap(function _callee9$(_context9) {
                while (1) {
                  switch (_context9.prev = _context9.next) {
                    case 0:
                      _context9.next = 2;
                      return this._startupResolver.promise;

                    case 2:
                      return _context9.abrupt("return", Object(_core_promiseUtils_js__WEBPACK_IMPORTED_MODULE_9__["ignoreAbortErrors"])(this._connection.invoke("setViewState", e.toJSON())));

                    case 3:
                    case "end":
                      return _context9.stop();
                  }
                }
              }, _callee9, this);
            }));

            function setViewState(_x11) {
              return _setViewState.apply(this, arguments);
            }

            return setViewState;
          }()
        }, {
          key: "queryFeatures",
          value: function () {
            var _queryFeatures = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee10(e, t) {
              return regeneratorRuntime.wrap(function _callee10$(_context10) {
                while (1) {
                  switch (_context10.prev = _context10.next) {
                    case 0:
                      _context10.next = 2;
                      return this._startupResolver.promise;

                    case 2:
                      return _context10.abrupt("return", this._connection.invoke("controller.queryFeatures", e.toJSON(), t));

                    case 3:
                    case "end":
                      return _context10.stop();
                  }
                }
              }, _callee10, this);
            }));

            function queryFeatures(_x12, _x13) {
              return _queryFeatures.apply(this, arguments);
            }

            return queryFeatures;
          }()
        }, {
          key: "queryObjectIds",
          value: function () {
            var _queryObjectIds = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee11(e, t) {
              return regeneratorRuntime.wrap(function _callee11$(_context11) {
                while (1) {
                  switch (_context11.prev = _context11.next) {
                    case 0:
                      _context11.next = 2;
                      return this._startupResolver.promise;

                    case 2:
                      return _context11.abrupt("return", this._connection.invoke("controller.queryObjectIds", e.toJSON(), t));

                    case 3:
                    case "end":
                      return _context11.stop();
                  }
                }
              }, _callee11, this);
            }));

            function queryObjectIds(_x14, _x15) {
              return _queryObjectIds.apply(this, arguments);
            }

            return queryObjectIds;
          }()
        }, {
          key: "queryFeatureCount",
          value: function () {
            var _queryFeatureCount = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee12(e, t) {
              return regeneratorRuntime.wrap(function _callee12$(_context12) {
                while (1) {
                  switch (_context12.prev = _context12.next) {
                    case 0:
                      _context12.next = 2;
                      return this._startupResolver.promise;

                    case 2:
                      return _context12.abrupt("return", this._connection.invoke("controller.queryFeatureCount", e.toJSON(), t));

                    case 3:
                    case "end":
                      return _context12.stop();
                  }
                }
              }, _callee12, this);
            }));

            function queryFeatureCount(_x16, _x17) {
              return _queryFeatureCount.apply(this, arguments);
            }

            return queryFeatureCount;
          }()
        }, {
          key: "queryExtent",
          value: function () {
            var _queryExtent = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee13(e, t) {
              return regeneratorRuntime.wrap(function _callee13$(_context13) {
                while (1) {
                  switch (_context13.prev = _context13.next) {
                    case 0:
                      return _context13.abrupt("return", this._connection.invoke("controller.queryExtent", e.toJSON(), t));

                    case 1:
                    case "end":
                      return _context13.stop();
                  }
                }
              }, _callee13, this);
            }));

            function queryExtent(_x18, _x19) {
              return _queryExtent.apply(this, arguments);
            }

            return queryExtent;
          }()
        }, {
          key: "queryLatestObservations",
          value: function () {
            var _queryLatestObservations = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee14(e, t) {
              return regeneratorRuntime.wrap(function _callee14$(_context14) {
                while (1) {
                  switch (_context14.prev = _context14.next) {
                    case 0:
                      _context14.next = 2;
                      return this._startupResolver.promise;

                    case 2:
                      return _context14.abrupt("return", this._connection.invoke("controller.queryLatestObservations", e.toJSON(), t));

                    case 3:
                    case "end":
                      return _context14.stop();
                  }
                }
              }, _callee14, this);
            }));

            function queryLatestObservations(_x20, _x21) {
              return _queryLatestObservations.apply(this, arguments);
            }

            return queryLatestObservations;
          }()
        }, {
          key: "queryStatistics",
          value: function () {
            var _queryStatistics = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee15(e) {
              return regeneratorRuntime.wrap(function _callee15$(_context15) {
                while (1) {
                  switch (_context15.prev = _context15.next) {
                    case 0:
                      _context15.next = 2;
                      return this._startupResolver.promise;

                    case 2:
                      return _context15.abrupt("return", this._connection.invoke("controller.queryStatistics", e));

                    case 3:
                    case "end":
                      return _context15.stop();
                  }
                }
              }, _callee15, this);
            }));

            function queryStatistics(_x22) {
              return _queryStatistics.apply(this, arguments);
            }

            return queryStatistics;
          }()
        }, {
          key: "getObjectId",
          value: function () {
            var _getObjectId = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee16(e) {
              return regeneratorRuntime.wrap(function _callee16$(_context16) {
                while (1) {
                  switch (_context16.prev = _context16.next) {
                    case 0:
                      _context16.next = 2;
                      return this._startupResolver.promise;

                    case 2:
                      return _context16.abrupt("return", this._connection.invoke("controller.getObjectId", e));

                    case 3:
                    case "end":
                      return _context16.stop();
                  }
                }
              }, _callee16, this);
            }));

            function getObjectId(_x23) {
              return _getObjectId.apply(this, arguments);
            }

            return getObjectId;
          }()
        }, {
          key: "getDisplayId",
          value: function () {
            var _getDisplayId = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee17(e) {
              return regeneratorRuntime.wrap(function _callee17$(_context17) {
                while (1) {
                  switch (_context17.prev = _context17.next) {
                    case 0:
                      _context17.next = 2;
                      return this._startupResolver.promise;

                    case 2:
                      return _context17.abrupt("return", this._connection.invoke("controller.getDisplayId", e));

                    case 3:
                    case "end":
                      return _context17.stop();
                  }
                }
              }, _callee17, this);
            }));

            function getDisplayId(_x24) {
              return _getDisplayId.apply(this, arguments);
            }

            return getDisplayId;
          }()
        }, {
          key: "getFeature",
          value: function () {
            var _getFeature = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee18(e) {
              return regeneratorRuntime.wrap(function _callee18$(_context18) {
                while (1) {
                  switch (_context18.prev = _context18.next) {
                    case 0:
                      _context18.next = 2;
                      return this._startupResolver.promise;

                    case 2:
                      return _context18.abrupt("return", this._connection.invoke("controller.getFeature", e));

                    case 3:
                    case "end":
                      return _context18.stop();
                  }
                }
              }, _callee18, this);
            }));

            function getFeature(_x25) {
              return _getFeature.apply(this, arguments);
            }

            return getFeature;
          }()
        }, {
          key: "getAggregate",
          value: function () {
            var _getAggregate = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee19(e) {
              return regeneratorRuntime.wrap(function _callee19$(_context19) {
                while (1) {
                  switch (_context19.prev = _context19.next) {
                    case 0:
                      _context19.next = 2;
                      return this._startupResolver.promise;

                    case 2:
                      return _context19.abrupt("return", this._connection.invoke("controller.getAggregate", e));

                    case 3:
                    case "end":
                      return _context19.stop();
                  }
                }
              }, _callee19, this);
            }));

            function getAggregate(_x26) {
              return _getAggregate.apply(this, arguments);
            }

            return getAggregate;
          }()
        }, {
          key: "getAggregateValueRanges",
          value: function () {
            var _getAggregateValueRanges = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee20() {
              return regeneratorRuntime.wrap(function _callee20$(_context20) {
                while (1) {
                  switch (_context20.prev = _context20.next) {
                    case 0:
                      _context20.next = 2;
                      return this._startupResolver.promise;

                    case 2:
                      return _context20.abrupt("return", this._connection.invoke("controller.getAggregateValueRanges"));

                    case 3:
                    case "end":
                      return _context20.stop();
                  }
                }
              }, _callee20, this);
            }));

            function getAggregateValueRanges() {
              return _getAggregateValueRanges.apply(this, arguments);
            }

            return getAggregateValueRanges;
          }()
        }, {
          key: "mapValidDisplayIds",
          value: function () {
            var _mapValidDisplayIds = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee21(e) {
              return regeneratorRuntime.wrap(function _callee21$(_context21) {
                while (1) {
                  switch (_context21.prev = _context21.next) {
                    case 0:
                      _context21.next = 2;
                      return this._startupResolver.promise;

                    case 2:
                      return _context21.abrupt("return", this._connection.invoke("controller.mapValidDisplayIds", e));

                    case 3:
                    case "end":
                      return _context21.stop();
                  }
                }
              }, _callee21, this);
            }));

            function mapValidDisplayIds(_x27) {
              return _mapValidDisplayIds.apply(this, arguments);
            }

            return mapValidDisplayIds;
          }()
        }, {
          key: "onEdits",
          value: function () {
            var _onEdits = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee22(e) {
              var t, r, s;
              return regeneratorRuntime.wrap(function _callee22$(_context22) {
                while (1) {
                  switch (_context22.prev = _context22.next) {
                    case 0:
                      _context22.next = 2;
                      return this._startupResolver.promise;

                    case 2:
                      t = e.addedFeatures, r = e.deletedFeatures, s = e.updatedFeatures;
                      return _context22.abrupt("return", Object(_core_promiseUtils_js__WEBPACK_IMPORTED_MODULE_9__["ignoreAbortErrors"])(this._connection.invoke("controller.onEdits", {
                        addedFeatures: t,
                        deletedFeatures: r,
                        updatedFeatures: s
                      })));

                    case 4:
                    case "end":
                      return _context22.stop();
                  }
                }
              }, _callee22, this);
            }));

            function onEdits(_x28) {
              return _onEdits.apply(this, arguments);
            }

            return onEdits;
          }()
        }, {
          key: "enableEvent",
          value: function () {
            var _enableEvent = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee23(e, t) {
              return regeneratorRuntime.wrap(function _callee23$(_context23) {
                while (1) {
                  switch (_context23.prev = _context23.next) {
                    case 0:
                      _context23.next = 2;
                      return this._startupResolver.promise;

                    case 2:
                      return _context23.abrupt("return", Object(_core_promiseUtils_js__WEBPACK_IMPORTED_MODULE_9__["ignoreAbortErrors"])(this._connection.invoke("controller.enableEvent", {
                        name: e,
                        value: t
                      })));

                    case 3:
                    case "end":
                      return _context23.stop();
                  }
                }
              }, _callee23, this);
            }));

            function enableEvent(_x29, _x30) {
              return _enableEvent.apply(this, arguments);
            }

            return enableEvent;
          }()
        }, {
          key: "_startWorker",
          value: function () {
            var _startWorker2 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee24(e) {
              return regeneratorRuntime.wrap(function _callee24$(_context24) {
                while (1) {
                  switch (_context24.prev = _context24.next) {
                    case 0:
                      _context24.prev = 0;
                      _context24.next = 3;
                      return Object(_core_workers_workers_js__WEBPACK_IMPORTED_MODULE_11__["open"])("Pipeline", {
                        client: this.client,
                        strategy: "dedicated",
                        signal: e
                      });

                    case 3:
                      this._connection = _context24.sent;
                      _context24.next = 9;
                      break;

                    case 6:
                      _context24.prev = 6;
                      _context24.t0 = _context24["catch"](0);
                      Object(_core_promiseUtils_js__WEBPACK_IMPORTED_MODULE_9__["throwIfNotAbortError"])(_context24.t0);

                    case 9:
                    case "end":
                      return _context24.stop();
                  }
                }
              }, _callee24, this, [[0, 6]]);
            }));

            function _startWorker(_x31) {
              return _startWorker2.apply(this, arguments);
            }

            return _startWorker;
          }()
        }]);

        return l;
      }(_core_Promise_js__WEBPACK_IMPORTED_MODULE_10__["EsriPromise"]);

      Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_4__["property"])()], l.prototype, "isReady", void 0), Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_4__["property"])()], l.prototype, "client", void 0), Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_4__["property"])()], l.prototype, "tileRenderer", null), l = Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_subclass_js__WEBPACK_IMPORTED_MODULE_5__["subclass"])("esri.views.2d.layers.support.FeatureLayerProxy")], l);
      var u = l;
      /* harmony default export */

      __webpack_exports__["default"] = u;
      /***/
    },

    /***/
    "GJxj":
    /*!*************************************************************************!*\
      !*** ./node_modules/@arcgis/core/views/2d/layers/FeatureLayerView2D.js ***!
      \*************************************************************************/

    /*! exports provided: default */

    /***/
    function GJxj(module, __webpack_exports__, __webpack_require__) {
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


      var _core_lang_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ../../../core/lang.js */
      "f/qv");
      /* harmony import */


      var _core_maybe_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ../../../core/maybe.js */
      "srIe");
      /* harmony import */


      var _core_Logger_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ../../../core/Logger.js */
      "6S2I");
      /* harmony import */


      var _core_accessorSupport_ensureType_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ../../../core/accessorSupport/ensureType.js */
      "zqDF");
      /* harmony import */


      var _core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ../../../core/accessorSupport/decorators/property.js */
      "WbKI");
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


      var _core_arrayUtils_js__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
      /*! ../../../core/arrayUtils.js */
      "tQ+6");
      /* harmony import */


      var _core_promiseUtils_js__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
      /*! ../../../core/promiseUtils.js */
      "9MzC");
      /* harmony import */


      var _geometry_Extent_js__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(
      /*! ../../../geometry/Extent.js */
      "OvF4");
      /* harmony import */


      var _geometry_js__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(
      /*! ../../../geometry.js */
      "4GrV");
      /* harmony import */


      var _core_Collection_js__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(
      /*! ../../../core/Collection.js */
      "LE9a");
      /* harmony import */


      var _Graphic_js__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(
      /*! ../../../Graphic.js */
      "jWBI");
      /* harmony import */


      var _AggregateGraphic_js__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(
      /*! ../../../AggregateGraphic.js */
      "v2bT");
      /* harmony import */


      var _core_watchUtils_js__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(
      /*! ../../../core/watchUtils.js */
      "N5XI");
      /* harmony import */


      var _tasks_support_FeatureSet_js__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(
      /*! ../../../tasks/support/FeatureSet.js */
      "8prj");
      /* harmony import */


      var _tasks_support_Query_js__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(
      /*! ../../../tasks/support/Query.js */
      "xk++");
      /* harmony import */


      var _layers_RefreshableLayerView_js__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(
      /*! ../../layers/RefreshableLayerView.js */
      "bHqs");
      /* harmony import */


      var _engine_webgl_definitions_js__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(
      /*! ../engine/webgl/definitions.js */
      "jIHu");
      /* harmony import */


      var _webgl_capabilities_js__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(
      /*! ../../webgl/capabilities.js */
      "sq/B");
      /* harmony import */


      var _layers_LayerView_js__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(
      /*! ../../layers/LayerView.js */
      "NloG");
      /* harmony import */


      var _renderers_support_clickToleranceUtils_js__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(
      /*! ../../../renderers/support/clickToleranceUtils.js */
      "U282");
      /* harmony import */


      var _support_drapedUtils_js__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(
      /*! ../../support/drapedUtils.js */
      "6UvW");
      /* harmony import */


      var _support_clusterUtils_js__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(
      /*! ./support/clusterUtils.js */
      "m662");
      /* harmony import */


      var _layers_effects_EffectList_js__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(
      /*! ../../layers/effects/EffectList.js */
      "q0q8");
      /* harmony import */


      var _support_util_js__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(
      /*! ./support/util.js */
      "RaXU");
      /* harmony import */


      var _features_schemaUtils_js__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(
      /*! ./features/schemaUtils.js */
      "owVx");
      /* harmony import */


      var _layers_support_FeatureFilter_js__WEBPACK_IMPORTED_MODULE_32__ = __webpack_require__(
      /*! ../../layers/support/FeatureFilter.js */
      "M8lB");
      /* harmony import */


      var _layers_support_FeatureEffect_js__WEBPACK_IMPORTED_MODULE_33__ = __webpack_require__(
      /*! ../../layers/support/FeatureEffect.js */
      "4P1v");
      /* harmony import */


      var _layers_FeatureLayerView_js__WEBPACK_IMPORTED_MODULE_34__ = __webpack_require__(
      /*! ../../layers/FeatureLayerView.js */
      "zrCg");
      /* harmony import */


      var _LayerView2D_js__WEBPACK_IMPORTED_MODULE_35__ = __webpack_require__(
      /*! ./LayerView2D.js */
      "Vm2Q");
      /* harmony import */


      var _features_tileRenderers_js__WEBPACK_IMPORTED_MODULE_36__ = __webpack_require__(
      /*! ./features/tileRenderers.js */
      "KfVJ");
      /* harmony import */


      var _features_support_pixelBuffering_js__WEBPACK_IMPORTED_MODULE_37__ = __webpack_require__(
      /*! ./features/support/pixelBuffering.js */
      "bzbK");
      /* harmony import */


      var _support_FeatureLayerProxy_js__WEBPACK_IMPORTED_MODULE_38__ = __webpack_require__(
      /*! ./support/FeatureLayerProxy.js */
      "81oJ");
      /* harmony import */


      var _tiling_TileManager_js__WEBPACK_IMPORTED_MODULE_39__ = __webpack_require__(
      /*! ../tiling/TileManager.js */
      "pZs+");
      /*
      All material copyright ESRI, All Rights Reserved, unless otherwise specified.
      See https://js.arcgis.com/4.18/esri/copyright.txt for details.
      */


      var A = _core_Logger_js__WEBPACK_IMPORTED_MODULE_4__["default"].getLogger("esri.views.2d.layers.FeatureLayerView2D");

      var D = /*#__PURE__*/function (_Object) {
        _inherits(D, _Object);

        var _super5 = _createSuper(D);

        function D() {
          var _this4;

          _classCallCheck(this, D);

          _this4 = _super5.apply(this, arguments), _this4._pipelineIsUpdating = !0, _this4._updatingPipelineConfig = !1, _this4._onGoingEdits = 0, _this4._isRefreshing = !1, _this4._viewStateId = -1, _this4._visibilityOverrides = new Set(), _this4._effect = null, _this4._highlightIds = new Map(), _this4._lastPixelBuffer = 0, _this4.filter = null, _this4.effectLists = {
            included: new _layers_effects_EffectList_js__WEBPACK_IMPORTED_MODULE_29__["default"](),
            excluded: new _layers_effects_EffectList_js__WEBPACK_IMPORTED_MODULE_29__["default"]()
          }, _this4.doRefresh = Object(_core_promiseUtils_js__WEBPACK_IMPORTED_MODULE_13__["debounce"])( /*#__PURE__*/_asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee25() {
            return regeneratorRuntime.wrap(function _callee25$(_context25) {
              while (1) {
                switch (_context25.prev = _context25.next) {
                  case 0:
                    _this4._onGoingEdits = 0;
                    _context25.t0 = _this4.isUpdating();

                    if (!_context25.t0) {
                      _context25.next = 5;
                      break;
                    }

                    _context25.next = 5;
                    return Object(_core_watchUtils_js__WEBPACK_IMPORTED_MODULE_19__["whenFalseOnce"])(_assertThisInitialized(_this4), "updating");

                  case 5:
                    _context25.prev = 5;

                    _this4._set("_isRefreshing", !0);

                    _this4._lockGPUUploads();

                    _context25.next = 10;
                    return _this4._proxy.refresh();

                  case 10:
                    _this4._unlockGPUUploads();

                    _this4._set("_isRefreshing", !1);

                    _context25.next = 17;
                    break;

                  case 14:
                    _context25.prev = 14;
                    _context25.t1 = _context25["catch"](5);
                    Object(_core_promiseUtils_js__WEBPACK_IMPORTED_MODULE_13__["isAbortError"])(_context25.t1) || A.error(_context25.t1);

                  case 17:
                  case "end":
                    return _context25.stop();
                }
              }
            }, _callee25, null, [[5, 14]]);
          }))), _this4._doUpdate = Object(_core_promiseUtils_js__WEBPACK_IMPORTED_MODULE_13__["debounce"])( /*#__PURE__*/_asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee26() {
            var _assertThisInitialize, e, t, _this4$_getEffectiveR, i, r, a, n, l, o, h, d, _e, _e2, u;

            return regeneratorRuntime.wrap(function _callee26$(_context26) {
              while (1) {
                switch (_context26.prev = _context26.next) {
                  case 0:
                    if (!(_this4.destroyed || !_this4._hasRequiredSupport(_this4.layer))) {
                      _context26.next = 2;
                      break;
                    }

                    return _context26.abrupt("return");

                  case 2:
                    _this4._set("_updatingPipelineConfig", !0);

                    _context26.next = 5;
                    return Object(_core_watchUtils_js__WEBPACK_IMPORTED_MODULE_19__["whenFalseOnce"])(_assertThisInitialized(_this4), "_isRefreshing");

                  case 5:
                    _assertThisInitialize = _assertThisInitialized(_this4), e = _assertThisInitialize.effect, t = _assertThisInitialize.filter;
                    _context26.next = 8;
                    return _this4._updateRequiredFields();

                  case 8:
                    if (!_this4.destroyed) {
                      _context26.next = 10;
                      break;
                    }

                    return _context26.abrupt("return");

                  case 10:
                    _this4$_getEffectiveR = _this4._getEffectiveRenderer(), i = _this4$_getEffectiveR.renderer;

                    _this4._set("_effectiveRenderer", i);

                    r = "feature" === _this4.layer.type ? _this4.layer.historicMoment : null;
                    a = "feature" === _this4.layer.type ? _this4.layer.gdbVersion : null;
                    n = {
                      renderer: _this4.layer.renderer,
                      spatialReference: _this4.layer.spatialReference,
                      timeExtent: _this4.layer.timeExtent,
                      definitionExpression: _this4.layer.definitionExpression,
                      featureReduction: _this4.layer.featureReduction,
                      fields: _this4.layer.fields,
                      geometryType: _this4.layer.geometryType,
                      historicMoment: r,
                      labelsVisible: _this4.layer.labelsVisible,
                      labelingInfo: _this4.layer.labelingInfo,
                      availableFields: _this4.availableFields,
                      effect: _this4.effect,
                      filter: _this4.filter,
                      gdbVersion: a,
                      pixelBuffer: 0
                    };
                    l = Object(_support_util_js__WEBPACK_IMPORTED_MODULE_30__["toJSONGeometryType"])(_this4.layer.geometryType);
                    _context26.next = 18;
                    return Object(_features_support_pixelBuffering_js__WEBPACK_IMPORTED_MODULE_37__["computePxBuffer"])(i, l, _this4.layer.featureReduction);

                  case 18:
                    o = _context26.sent;
                    h = _this4._createConfiguration(n, t, e);
                    _this4._lastPixelBuffer = 0 === o ? 0 : Math.max(o, _this4._lastPixelBuffer), h.schema.source.pixelBuffer = _this4._lastPixelBuffer;
                    d = _this4._createTileRendererHash(i);

                    if (_this4.destroyed) {
                      _context26.next = 99;
                      break;
                    }

                    if (!(d !== _this4._tileRendererHash)) {
                      _context26.next = 54;
                      break;
                    }

                    _context26.next = 26;
                    return _this4._initTileRenderer(i);

                  case 26:
                    if (!_this4.destroyed) {
                      _context26.next = 28;
                      break;
                    }

                    return _context26.abrupt("return");

                  case 28:
                    _context26.next = 30;
                    return _this4._createServiceOptions();

                  case 30:
                    _e = _context26.sent;

                    if (!_this4.destroyed) {
                      _context26.next = 33;
                      break;
                    }

                    return _context26.abrupt("return");

                  case 33:
                    _this4.effects.forEach(function (e) {
                      return Object(_core_maybe_js__WEBPACK_IMPORTED_MODULE_3__["isSome"])(e) && Object(_core_maybe_js__WEBPACK_IMPORTED_MODULE_3__["isSome"])(e.filter) && e.filter.enable();
                    });

                    _this4.tileRenderer.onConfigUpdate(i);

                    _context26.next = 37;
                    return _this4._proxy.startup(_this4.view.featuresTilingScheme, h, _e);

                  case 37:
                    _context26.next = 39;
                    return _this4._proxy.updateTiles({
                      added: _this4._tileStrategy.tileKeys(),
                      removed: []
                    });

                  case 39:
                    if (!_this4.destroyed) {
                      _context26.next = 41;
                      break;
                    }

                    return _context26.abrupt("return");

                  case 41:
                    _context26.t0 = _this4.hasHighlight();

                    if (!_context26.t0) {
                      _context26.next = 45;
                      break;
                    }

                    _context26.next = 45;
                    return _this4._proxy.setHighlight(Array.from(_this4._highlightIds.keys()));

                  case 45:
                    if (!_this4.destroyed) {
                      _context26.next = 47;
                      break;
                    }

                    return _context26.abrupt("return");

                  case 47:
                    _context26.next = 49;
                    return _this4._onceTilesUpdated();

                  case 49:
                    if (!_this4.destroyed) {
                      _context26.next = 51;
                      break;
                    }

                    return _context26.abrupt("return");

                  case 51:
                    _this4.tileRenderer.onConfigUpdate(i);

                    _context26.next = 98;
                    break;

                  case 54:
                    _context26.next = 56;
                    return _this4._proxy.update(h, !0);

                  case 56:
                    _e2 = _context26.sent;

                    if (!_this4.destroyed) {
                      _context26.next = 59;
                      break;
                    }

                    return _context26.abrupt("return");

                  case 59:
                    if (!_e2.queryFilter) {
                      _context26.next = 74;
                      break;
                    }

                    _this4._lockGPUUploads();

                    _context26.prev = 61;
                    _context26.next = 64;
                    return _this4._proxy.invalidate(_e2);

                  case 64:
                    _context26.next = 69;
                    break;

                  case 66:
                    _context26.prev = 66;
                    _context26.t1 = _context26["catch"](61);
                    Object(_core_promiseUtils_js__WEBPACK_IMPORTED_MODULE_13__["isAbortError"])(_context26.t1) || A.error(_context26.t1);

                  case 69:
                    if (!_this4.destroyed) {
                      _context26.next = 71;
                      break;
                    }

                    return _context26.abrupt("return");

                  case 71:
                    _this4._unlockGPUUploads();

                    _context26.next = 95;
                    break;

                  case 74:
                    _context26.prev = 74;
                    _context26.next = 77;
                    return _this4._proxy.invalidate(_objectSpread(_objectSpread({}, _e2), {}, {
                      mesh: !1
                    }));

                  case 77:
                    _context26.next = 82;
                    break;

                  case 79:
                    _context26.prev = 79;
                    _context26.t2 = _context26["catch"](74);
                    Object(_core_promiseUtils_js__WEBPACK_IMPORTED_MODULE_13__["isAbortError"])(_context26.t2) || A.error(_context26.t2);

                  case 82:
                    if (!_this4.destroyed) {
                      _context26.next = 84;
                      break;
                    }

                    return _context26.abrupt("return");

                  case 84:
                    if (!_e2.mesh) {
                      _context26.next = 95;
                      break;
                    }

                    _this4._lockGPUUploads();

                    _context26.prev = 86;
                    _context26.next = 89;
                    return _this4._proxy.invalidate({
                      mesh: !0,
                      targets: {
                        aggregate: null == (u = _e2.targets) ? void 0 : u.aggregate
                      }
                    });

                  case 89:
                    _context26.next = 94;
                    break;

                  case 91:
                    _context26.prev = 91;
                    _context26.t3 = _context26["catch"](86);
                    Object(_core_promiseUtils_js__WEBPACK_IMPORTED_MODULE_13__["isAbortError"])(_context26.t3) || A.error(_context26.t3);

                  case 94:
                    _this4._unlockGPUUploads();

                  case 95:
                    if (!_this4.destroyed) {
                      _context26.next = 97;
                      break;
                    }

                    return _context26.abrupt("return");

                  case 97:
                    _this4._proxy.resume(), _this4.effects.forEach(function (e) {
                      return Object(_core_maybe_js__WEBPACK_IMPORTED_MODULE_3__["isSome"])(e) && Object(_core_maybe_js__WEBPACK_IMPORTED_MODULE_3__["isSome"])(e.filter) && e.filter.enable();
                    }), _this4.tileRenderer.onConfigUpdate(i), _this4._forceAttributeTextureUpload();

                  case 98:
                    _this4._tileRendererHash = d, _this4.tileRenderer.invalidateLabels(), _this4.requestUpdate();

                  case 99:
                  case "end":
                    return _context26.stop();
                }
              }
            }, _callee26, null, [[61, 66], [74, 79], [86, 91]]);
          }))), _this4._updateHighlight = Object(_core_promiseUtils_js__WEBPACK_IMPORTED_MODULE_13__["debounce"])( /*#__PURE__*/_asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee27() {
            return regeneratorRuntime.wrap(function _callee27$(_context27) {
              while (1) {
                switch (_context27.prev = _context27.next) {
                  case 0:
                    return _context27.abrupt("return", _this4._proxy.setHighlight(Array.from(_this4._highlightIds.keys())));

                  case 1:
                  case "end":
                    return _context27.stop();
                }
              }
            }, _callee27);
          })));
          return _this4;
        }

        _createClass(D, [{
          key: "destroy",
          value: function destroy() {
            var e, t;
            null == (e = this._proxy) || e.destroy(), Object(_core_maybe_js__WEBPACK_IMPORTED_MODULE_3__["andThen"])(this._updateClusterSizeTask, function (e) {
              return e.remove();
            }), null == (t = this.tileRenderer) || t.destroy();
          }
        }, {
          key: "initialize",
          value: function initialize() {
            var _this5 = this;

            this.addResolvingPromise(this._initProxy()), this.handles.add([this.on("valueRangesChanged", function (e) {
              _this5._set("_aggregateValueRanges", e.valueRanges);
            }), Object(_core_watchUtils_js__WEBPACK_IMPORTED_MODULE_19__["init"])(this, "effect", function (e) {
              _this5.effectLists.included.effect = null == e ? void 0 : e.includedEffect;
            }), Object(_core_watchUtils_js__WEBPACK_IMPORTED_MODULE_19__["init"])(this, "effect", function (e) {
              _this5.effectLists.excluded.effect = null == e ? void 0 : e.excludedEffect;
            })]);
          }
        }, {
          key: "_initProxy",
          value: function () {
            var _initProxy2 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee28() {
              var e;
              return regeneratorRuntime.wrap(function _callee28$(_context28) {
                while (1) {
                  switch (_context28.prev = _context28.next) {
                    case 0:
                      if (!("stream" !== this.layer.type && "ogc-feature" !== this.layer.type && this.layer.isTable)) {
                        _context28.next = 2;
                        break;
                      }

                      throw new _core_Error_js__WEBPACK_IMPORTED_MODULE_8__["default"]("featurelayerview:table-not-supported", "table feature layer can't be displayed", {
                        layer: this.layer
                      });

                    case 2:
                      this._proxy && this._proxy.destroy();
                      e = this._createClientOptions();
                      return _context28.abrupt("return", (this._set("_proxy", new _support_FeatureLayerProxy_js__WEBPACK_IMPORTED_MODULE_38__["default"]({
                        client: e
                      })), this._proxy.when()));

                    case 5:
                    case "end":
                      return _context28.stop();
                  }
                }
              }, _callee28, this);
            }));

            function _initProxy() {
              return _initProxy2.apply(this, arguments);
            }

            return _initProxy;
          }()
        }, {
          key: "labelsVisible",
          get: function get() {
            return !this.suspended && this.layer.labelingInfo && this.layer.labelsVisible;
          }
        }, {
          key: "effect",
          get: function get() {
            return Object(_core_maybe_js__WEBPACK_IMPORTED_MODULE_3__["unwrapOr"])(this._effect, null);
          },
          set: function set(e) {
            var t = this._effect;
            Object(_core_maybe_js__WEBPACK_IMPORTED_MODULE_3__["isSome"])(t) && Object(_core_maybe_js__WEBPACK_IMPORTED_MODULE_3__["isSome"])(t.filter) && t.filter.enabled && Object(_core_maybe_js__WEBPACK_IMPORTED_MODULE_3__["isSome"])(e) && Object(_core_maybe_js__WEBPACK_IMPORTED_MODULE_3__["isSome"])(e.filter) && e.filter.enable(), this._effect = e, this.notifyChange("effect");
          }
        }, {
          key: "effects",
          get: function get() {
            return this.effect && [this.effect] || [];
          }
        }, {
          key: "renderingConfigHash",
          get: function get() {
            if (!this.layer) return null;
            var e = this.availableFields,
                t = this.layer,
                i = t.definitionExpression,
                r = t.renderer,
                a = t.labelingInfo,
                n = "feature" === t.type ? t.gdbVersion : void 0,
                l = "feature" === t.type && t.historicMoment ? t.historicMoment.getTime() : void 0,
                o = this.timeExtent,
                h = "stream" === t.type ? "".concat(JSON.stringify(t.geometryDefinition)).concat(t.definitionExpression) : null,
                d = JSON.stringify(this.clips),
                u = t.featureReduction && t.featureReduction.toJSON();
            return JSON.stringify({
              filterHash: Object(_core_maybe_js__WEBPACK_IMPORTED_MODULE_3__["isSome"])(this.filter) && this.filter.toJSON(),
              effectHash: Object(_core_maybe_js__WEBPACK_IMPORTED_MODULE_3__["isSome"])(this.effect) && this.effect.toJSON(),
              streamFilter: h,
              gdbVersion: n,
              definitionExpression: i,
              historicMoment: l,
              availableFields: e,
              renderer: r,
              labelingInfo: t.labelsVisible && a,
              timeExtent: o,
              clipsHash: d,
              featureReduction: u
            });
          }
        }, {
          key: "hasEffects",
          get: function get() {
            return this.effectLists.included.hasEffects || this.effectLists.excluded.hasEffects;
          }
        }, {
          key: "highlight",
          value: function highlight(e) {
            var _this6 = this;

            var t;
            return e instanceof _Graphic_js__WEBPACK_IMPORTED_MODULE_17__["default"] ? t = [e.getObjectId()] : "number" == typeof e ? t = [e] : _core_Collection_js__WEBPACK_IMPORTED_MODULE_16__["default"].isCollection(e) ? t = e.map(function (e) {
              return e && e.getAttribute(_this6.layer.objectIdField);
            }).toArray() : Array.isArray(e) && e.length > 0 && (t = "number" == typeof e[0] ? e : e.map(function (e) {
              return e && e.getAttribute(_this6.layer.objectIdField);
            })), t && t.length ? (t = t.filter(function (e) {
              return null != e;
            }), this._addHighlight(t), {
              remove: function remove() {
                return _this6._removeHighlight(t);
              }
            }) : {
              remove: function remove() {}
            };
          }
        }, {
          key: "hasHighlight",
          value: function hasHighlight() {
            return !!this._highlightIds.size;
          }
        }, {
          key: "hitTest",
          value: function hitTest(e, t) {
            return this._hitTest(e, t);
          }
        }, {
          key: "queryStatistics",
          value: function queryStatistics() {
            return this._proxy.queryStatistics();
          }
        }, {
          key: "queryFeatures",
          value: function queryFeatures(e, t) {
            var _this7 = this;

            return this.queryFeaturesJSON(e, t).then(function (e) {
              var t = _tasks_support_FeatureSet_js__WEBPACK_IMPORTED_MODULE_20__["default"].fromJSON(e);

              return t.features.forEach(function (e) {
                e.layer = _this7.layer, e.sourceLayer = _this7.layer;
              }), t;
            });
          }
        }, {
          key: "queryFeaturesJSON",
          value: function queryFeaturesJSON(e, t) {
            return this._proxy.queryFeatures(this._cleanUpQuery(e), t);
          }
        }, {
          key: "queryObjectIds",
          value: function queryObjectIds(e, t) {
            return this._proxy.queryObjectIds(this._cleanUpQuery(e), t);
          }
        }, {
          key: "queryFeatureCount",
          value: function queryFeatureCount(e, t) {
            return this._proxy.queryFeatureCount(this._cleanUpQuery(e), t);
          }
        }, {
          key: "queryExtent",
          value: function queryExtent(e, t) {
            return this._proxy.queryExtent(this._cleanUpQuery(e), t).then(function (e) {
              return {
                count: e.count,
                extent: _geometry_Extent_js__WEBPACK_IMPORTED_MODULE_14__["default"].fromJSON(e.extent)
              };
            });
          }
        }, {
          key: "setVisibility",
          value: function setVisibility(e, t) {
            t ? this._visibilityOverrides["delete"](e) : this._visibilityOverrides.add(e), this._update();
          }
        }, {
          key: "update",
          value: function update(e) {
            if (!this._tileStrategy || !this.tileRenderer) return;

            var _this$_tileStrategy$u = this._tileStrategy.update(e),
                t = _this$_tileStrategy$u.hasMissingTiles,
                i = _this$_tileStrategy$u.added,
                r = _this$_tileStrategy$u.removed;

            (i.length || r.length) && this._proxy.updateTiles({
              added: i,
              removed: r
            }), t && this.requestUpdate();
            var s = e.state;
            this._viewStateId !== s.id && (this._proxy.setViewState(s), this._viewStateId = s.id), this.notifyChange("updating");
          }
        }, {
          key: "attach",
          value: function attach() {
            var _this8 = this;

            this.view.timeline.record("".concat(this.layer.title, " (FeatureLayer) Attach")), this._tileStrategy = new _tiling_TileManager_js__WEBPACK_IMPORTED_MODULE_39__["TileManager"]({
              acquireTile: function acquireTile(e) {
                return _this8._acquireTile(e);
              },
              releaseTile: function releaseTile(e) {
                return _this8._releaseTile(e);
              },
              tileInfoView: this.view.featuresTilingScheme,
              buffer: 0
            }), this.handles.add(Object(_core_watchUtils_js__WEBPACK_IMPORTED_MODULE_19__["init"])(this, "renderingConfigHash", function () {
              return _this8._update();
            }), "attach"), "stream" !== this.layer.type && this.handles.add(this.layer.on("edits", /*#__PURE__*/function () {
              var _ref4 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee29(e) {
                return regeneratorRuntime.wrap(function _callee29$(_context29) {
                  while (1) {
                    switch (_context29.prev = _context29.next) {
                      case 0:
                        _this8._set("_onGoingEdits", _this8._onGoingEdits + 1);

                        _context29.next = 3;
                        return _this8._proxy.onEdits(e);

                      case 3:
                        _this8._set("_onGoingEdits", Math.max(0, _this8._onGoingEdits - 1));

                      case 4:
                      case "end":
                        return _context29.stop();
                    }
                  }
                }, _callee29);
              }));

              return function (_x32) {
                return _ref4.apply(this, arguments);
              };
            }()), "attach");
          }
        }, {
          key: "detach",
          value: function detach() {
            this.container.removeAllChildren(), this.handles.remove("attach"), this._updatingPipelineConfig = !1, this.tileRenderer && (this.tileRenderer.uninstall(this.container), this.tileRenderer = null), this._tileStrategy && (this._tileStrategy.destroy(), this._tileStrategy = null), this._tileRendererHash = null;
          }
        }, {
          key: "moveStart",
          value: function moveStart() {
            this.requestUpdate();
          }
        }, {
          key: "viewChange",
          value: function viewChange() {
            this.requestUpdate();
          }
        }, {
          key: "moveEnd",
          value: function moveEnd() {
            this.requestUpdate();
          }
        }, {
          key: "fetchPopupFeatures",
          value: function () {
            var _fetchPopupFeatures = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee30(e, t) {
              var _e3, i, r, a;

              return regeneratorRuntime.wrap(function _callee30$(_context30) {
                while (1) {
                  switch (_context30.prev = _context30.next) {
                    case 0:
                      if (!(Object(_core_maybe_js__WEBPACK_IMPORTED_MODULE_3__["isSome"])(t) && t.clientGraphics.length)) {
                        _context30.next = 4;
                        break;
                      }

                      _e3 = t.clientGraphics[0];

                      if (!(_e3 instanceof _AggregateGraphic_js__WEBPACK_IMPORTED_MODULE_18__["default"])) {
                        _context30.next = 4;
                        break;
                      }

                      return _context30.abrupt("return", [_e3]);

                    case 4:
                      i = this.validateFetchPopupFeatures(t);

                      if (!i) {
                        _context30.next = 7;
                        break;
                      }

                      throw i;

                    case 7:
                      if (!(Object(_core_maybe_js__WEBPACK_IMPORTED_MODULE_3__["isSome"])(t) && 0 === t.clientGraphics.length)) {
                        _context30.next = 9;
                        break;
                      }

                      return _context30.abrupt("return", []);

                    case 9:
                      r = this.fetchClientPopupFeatures(t);

                      if (e) {
                        _context30.next = 12;
                        break;
                      }

                      return _context30.abrupt("return", r);

                    case 12:
                      a = this._fetchServicePopupFeatures(e, t);
                      return _context30.abrupt("return", Object(_core_promiseUtils_js__WEBPACK_IMPORTED_MODULE_13__["eachAlwaysValues"])([r, a]).then(_core_arrayUtils_js__WEBPACK_IMPORTED_MODULE_12__["flatten"]));

                    case 14:
                    case "end":
                      return _context30.stop();
                  }
                }
              }, _callee30, this);
            }));

            function fetchPopupFeatures(_x33, _x34) {
              return _fetchPopupFeatures.apply(this, arguments);
            }

            return fetchPopupFeatures;
          }()
        }, {
          key: "_fetchServicePopupFeatures",
          value: function () {
            var _fetchServicePopupFeatures2 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee31(e, t) {
              var i, r, a, n, l, o, h, d, _iterator, _step, _e4;

              return regeneratorRuntime.wrap(function _callee31$(_context31) {
                while (1) {
                  switch (_context31.prev = _context31.next) {
                    case 0:
                      if (!("stream" === this.layer.type)) {
                        _context31.next = 2;
                        break;
                      }

                      return _context31.abrupt("return", []);

                    case 2:
                      _context31.next = 4;
                      return this.createPopupQuery(t);

                    case 4:
                      i = _context31.sent;
                      r = this.layer;
                      a = r.renderer;
                      n = Object(_core_maybe_js__WEBPACK_IMPORTED_MODULE_3__["isSome"])(t) ? t.event : null;
                      l = Object(_renderers_support_clickToleranceUtils_js__WEBPACK_IMPORTED_MODULE_26__["calculateTolerance"])({
                        renderer: a,
                        event: n
                      });
                      i.geometry = this.createFetchPopupFeaturesQueryGeometry(e, l);
                      o = new Set(), h = r.objectIdField, d = Object(_core_maybe_js__WEBPACK_IMPORTED_MODULE_3__["isSome"])(t) ? t.clientGraphics : null;

                      if (d) {
                        _iterator = _createForOfIteratorHelper(d);

                        try {
                          for (_iterator.s(); !(_step = _iterator.n()).done;) {
                            _e4 = _step.value;
                            o.add(_e4.attributes[h]);
                          }
                        } catch (err) {
                          _iterator.e(err);
                        } finally {
                          _iterator.f();
                        }
                      }

                      return _context31.abrupt("return", r.queryFeatures(i).then(function (e) {
                        return e.features.filter(function (e) {
                          return !o.has(e.attributes[h]);
                        });
                      }));

                    case 13:
                    case "end":
                      return _context31.stop();
                  }
                }
              }, _callee31, this);
            }));

            function _fetchServicePopupFeatures(_x35, _x36) {
              return _fetchServicePopupFeatures2.apply(this, arguments);
            }

            return _fetchServicePopupFeatures;
          }()
        }, {
          key: "createFetchPopupFeaturesQueryGeometry",
          value: function createFetchPopupFeaturesQueryGeometry(e, t) {
            return Object(_support_drapedUtils_js__WEBPACK_IMPORTED_MODULE_27__["createQueryGeometry"])(e, t, this.view);
          }
        }, {
          key: "isUpdating",
          value: function isUpdating() {
            return null != this.layer.renderer && (null != this._updatingRequiredFieldsPromise || null == this.tileRenderer || !this._proxy || !this._proxy.isReady || this._pipelineIsUpdating || this._updatingPipelineConfig || this.tileRenderer.updating || this._onGoingEdits > 0);
          }
        }, {
          key: "_createClientOptions",
          value: function _createClientOptions() {
            var _this9 = this;

            return {
              setUpdating: function setUpdating(e) {
                _this9._set("_pipelineIsUpdating", e);
              },
              emitEvent: function emitEvent(e) {
                _this9.emit(e.name, e.event);
              }
            };
          }
        }, {
          key: "_createServiceOptions",
          value: function () {
            var _createServiceOptions2 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee32() {
              var e, i, r, s, a, n, l, o, h, d;
              return regeneratorRuntime.wrap(function _callee32$(_context32) {
                while (1) {
                  switch (_context32.prev = _context32.next) {
                    case 0:
                      e = this.layer;

                      if (!("stream" === e.type)) {
                        _context32.next = 3;
                        break;
                      }

                      return _context32.abrupt("return", null);

                    case 3:
                      i = e.capabilities, r = e.objectIdField, s = e.fields.map(function (e) {
                        return e.toJSON();
                      }), a = e.fullExtent && e.fullExtent.toJSON(), n = Object(_support_util_js__WEBPACK_IMPORTED_MODULE_30__["toJSONGeometryType"])(e.geometryType), l = e.timeInfo && e.timeInfo.toJSON() || null, o = e.spatialReference ? e.spatialReference.toJSON() : null, h = "feature" === e.type ? e.customParameters : null;

                      if (!("ogc-feature" === e.type)) {
                        _context32.next = 8;
                        break;
                      }

                      d = function (e) {
                        var t = e.capabilities,
                            i = e.collectionId,
                            r = e.source.layerDefinition,
                            s = e.url;
                        return {
                          capabilities: t,
                          collectionId: i,
                          url: s,
                          layerDefinition: r
                        };
                      }(e);

                      _context32.next = 15;
                      break;

                    case 8:
                      if (function (e) {
                        return e && "openPorts" in e;
                      }(e.source)) {
                        _context32.next = 12;
                        break;
                      }

                      e.parsedUrl && (d = Object(_core_lang_js__WEBPACK_IMPORTED_MODULE_2__["clone"])(e.parsedUrl), "dynamicDataSource" in e && e.dynamicDataSource && (d.query = {
                        layer: JSON.stringify({
                          source: e.dynamicDataSource
                        })
                      }));
                      _context32.next = 15;
                      break;

                    case 12:
                      _context32.next = 14;
                      return e.source.openPorts();

                    case 14:
                      d = _context32.sent;

                    case 15:
                      return _context32.abrupt("return", {
                        type: "on-demand",
                        maxRecordCount: i.query.maxRecordCount,
                        tileMaxRecordCount: i.query.tileMaxRecordCount,
                        capabilities: i,
                        fields: s,
                        fullExtent: a,
                        geometryType: n,
                        objectIdField: r,
                        source: d,
                        timeInfo: l,
                        spatialReference: o,
                        customParameters: h
                      });

                    case 16:
                    case "end":
                      return _context32.stop();
                  }
                }
              }, _callee32, this);
            }));

            function _createServiceOptions() {
              return _createServiceOptions2.apply(this, arguments);
            }

            return _createServiceOptions;
          }()
        }, {
          key: "_createMemoryServiceOptions",
          value: function () {
            var _createMemoryServiceOptions2 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee33(e) {
              var t;
              return regeneratorRuntime.wrap(function _callee33$(_context33) {
                while (1) {
                  switch (_context33.prev = _context33.next) {
                    case 0:
                      _context33.next = 2;
                      return e.openPorts();

                    case 2:
                      t = _context33.sent;
                      return _context33.abrupt("return", _objectSpread(_objectSpread({}, this._createServiceOptions()), {}, {
                        type: "memory",
                        source: t
                      }));

                    case 4:
                    case "end":
                      return _context33.stop();
                  }
                }
              }, _callee33, this);
            }));

            function _createMemoryServiceOptions(_x37) {
              return _createMemoryServiceOptions2.apply(this, arguments);
            }

            return _createMemoryServiceOptions;
          }()
        }, {
          key: "_cleanUpQuery",
          value: function _cleanUpQuery(e) {
            var t = _tasks_support_Query_js__WEBPACK_IMPORTED_MODULE_21__["default"].from(e) || this.createQuery();
            return t.outSpatialReference || (t.outSpatialReference = this.view.spatialReference), t;
          }
        }, {
          key: "_createUpdateClusterSizeTask",
          value: function _createUpdateClusterSizeTask(e, t) {
            var _this10 = this;

            return this.watch("_aggregateValueRanges", /*#__PURE__*/function () {
              var _ref5 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee34(i) {
                return regeneratorRuntime.wrap(function _callee34$(_context34) {
                  while (1) {
                    switch (_context34.prev = _context34.next) {
                      case 0:
                        _this10._updateClusterEffectiveRendererSizeVariable(e, t, i), _this10._updatingPipelineConfig || _this10.tileRenderer.onConfigUpdate(_this10._effectiveRenderer);

                      case 1:
                      case "end":
                        return _context34.stop();
                    }
                  }
                }, _callee34);
              }));

              return function (_x38) {
                return _ref5.apply(this, arguments);
              };
            }());
          }
        }, {
          key: "_updateClusterEffectiveRendererSizeVariable",
          value: function () {
            var _updateClusterEffectiveRendererSizeVariable2 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee35(e, t, i) {
              var r, s, a;
              return regeneratorRuntime.wrap(function _callee35$(_context35) {
                while (1) {
                  switch (_context35.prev = _context35.next) {
                    case 0:
                      if (e.dynamicClusterSize && "visualVariables" in e && e.visualVariables) {
                        r = Object(_support_clusterUtils_js__WEBPACK_IMPORTED_MODULE_28__["findSizeVV"])(e.visualVariables);

                        if (Object(_core_maybe_js__WEBPACK_IMPORTED_MODULE_3__["isSome"])(r) && "cluster_count" === r.field) {
                          s = e.visualVariables.indexOf(r);
                          e.visualVariables[s] = Object(_support_clusterUtils_js__WEBPACK_IMPORTED_MODULE_28__["createClusterCountSizeVariable"])(t, i);
                          a = e.clone();
                          a.dynamicClusterSize = !0, this._set("_effectiveRenderer", a);
                        }
                      }

                    case 1:
                    case "end":
                      return _context35.stop();
                  }
                }
              }, _callee35, this);
            }));

            function _updateClusterEffectiveRendererSizeVariable(_x39, _x40, _x41) {
              return _updateClusterEffectiveRendererSizeVariable2.apply(this, arguments);
            }

            return _updateClusterEffectiveRendererSizeVariable;
          }()
        }, {
          key: "_getEffectiveRenderer",
          value: function _getEffectiveRenderer() {
            var e = this.layer.renderer,
                t = this.layer.featureReduction;

            if (Object(_core_maybe_js__WEBPACK_IMPORTED_MODULE_3__["isSome"])(this._updateClusterSizeTask) && (this._updateClusterSizeTask.remove(), this._updateClusterSizeTask = null), t && "cluster" === t.type && Object(_support_clusterUtils_js__WEBPACK_IMPORTED_MODULE_28__["isClusterCompatibleRenderer"])(e)) {
              var r = t,
                  s = [],
                  a = Object(_support_clusterUtils_js__WEBPACK_IMPORTED_MODULE_28__["createClusterRenderer"])(s, e, r, this._aggregateValueRanges);
              return Object(_core_maybe_js__WEBPACK_IMPORTED_MODULE_3__["andThen"])(this._updateClusterSizeTask, function (e) {
                return e.remove();
              }), this._updateClusterSizeTask = this._createUpdateClusterSizeTask(a, r), {
                renderer: a,
                aggregateFields: s,
                featureReduction: t
              };
            }

            return {
              renderer: e,
              aggregateFields: [],
              featureReduction: null
            };
          }
        }, {
          key: "_acquireTile",
          value: function _acquireTile(e) {
            var _this11 = this;

            var t = this.tileRenderer.acquireTile(e);
            return t.once("attach", function () {
              _this11.requestUpdate();
            }), t;
          }
        }, {
          key: "_releaseTile",
          value: function _releaseTile(e) {
            this.tileRenderer.releaseTile(e);
          }
        }, {
          key: "_initTileRenderer",
          value: function () {
            var _initTileRenderer2 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee36(e) {
              var t;
              return regeneratorRuntime.wrap(function _callee36$(_context36) {
                while (1) {
                  switch (_context36.prev = _context36.next) {
                    case 0:
                      _context36.next = 2;
                      return Object(_features_tileRenderers_js__WEBPACK_IMPORTED_MODULE_36__["createOrReuseTileRenderer"])(e, {
                        layerView: this,
                        tileInfoView: this.view.featuresTilingScheme,
                        layer: this.layer
                      });

                    case 2:
                      t = _context36.sent;
                      return _context36.abrupt("return", (this.tileRenderer && (this._tileStrategy.clear(), this.tileRenderer.uninstall(this.container), this.tileRenderer.destroy(), this.tileRenderer = null), this.destroyed ? null : (this._proxy.tileRenderer = t, this._set("tileRenderer", t), this.tileRenderer.install(this.container), this.tileRenderer.onConfigUpdate(e), this.requestUpdate(), this.tileRenderer)));

                    case 4:
                    case "end":
                      return _context36.stop();
                  }
                }
              }, _callee36, this);
            }));

            function _initTileRenderer(_x42) {
              return _initTileRenderer2.apply(this, arguments);
            }

            return _initTileRenderer;
          }()
        }, {
          key: "_createTileRendererHash",
          value: function _createTileRendererHash(e) {
            return "".concat("heatmap" === e.type ? "heatmap" : "symbol", ".").concat("dot-density" === e.type);
          }
        }, {
          key: "_createFeatureDataHash",
          value: function _createFeatureDataHash(e, t, i) {
            var r = e.getAttributeHash(),
                a = JSON.stringify(t),
                n = Object(_core_maybe_js__WEBPACK_IMPORTED_MODULE_3__["isSome"])(i) && JSON.stringify(i.filter),
                l = JSON.stringify(this.timeExtent);
            var o = "";
            return this._visibilityOverrides.forEach(function (e) {
              return o += e;
            }), "".concat(r, ".").concat(a, ".").concat(n, ".").concat(l, ".").concat(o);
          }
        }, {
          key: "_injectOverrides",
          value: function _injectOverrides(e) {
            var t = Object(_core_maybe_js__WEBPACK_IMPORTED_MODULE_3__["isSome"])(e) ? e.timeExtent : null,
                i = Object(_core_maybe_js__WEBPACK_IMPORTED_MODULE_3__["isSome"])(this.timeExtent) && Object(_core_maybe_js__WEBPACK_IMPORTED_MODULE_3__["isSome"])(t) ? this.timeExtent.intersection(t) : this.timeExtent || t;
            if (!this._visibilityOverrides.size && !i) return e;
            var r = Object(_core_maybe_js__WEBPACK_IMPORTED_MODULE_3__["isSome"])(e) && e.clone() || new _layers_support_FeatureFilter_js__WEBPACK_IMPORTED_MODULE_32__["default"]();
            return r.hiddenIds = this._visibilityOverrides, r.timeExtent = i, r;
          }
        }, {
          key: "_createConfiguration",
          value: function _createConfiguration(e, t, i) {
            var r = "feature" === this.layer.type && this.layer.historicMoment ? this.layer.historicMoment.getTime() : void 0,
                n = "feature" === this.layer.type ? this.layer.gdbVersion : void 0,
                l = new Array(_engine_webgl_definitions_js__WEBPACK_IMPORTED_MODULE_23__["MAX_FILTERS"]),
                o = this._injectOverrides(t);

            l[0] = Object(_core_maybe_js__WEBPACK_IMPORTED_MODULE_3__["isSome"])(o) ? o.toJSON() : null, l[1] = Object(_core_maybe_js__WEBPACK_IMPORTED_MODULE_3__["isSome"])(i) && i.filter ? i.filter.toJSON() : null;
            var h = Object(_features_schemaUtils_js__WEBPACK_IMPORTED_MODULE_31__["createSchema"])(e);
            if (Object(_core_maybe_js__WEBPACK_IMPORTED_MODULE_3__["isNone"])(h)) return null;
            var d = Object(_webgl_capabilities_js__WEBPACK_IMPORTED_MODULE_24__["default"])();
            return {
              definitionExpression: this.layer.definitionExpression,
              availableFields: this.availableFields,
              gdbVersion: n,
              historicMoment: r,
              devicePixelRatio: window.devicePixelRatio || 1,
              filters: l,
              schema: h,
              supportsTextureFloat: d.supportsTextureFloat,
              maxTextureSize: d.maxTextureSize
            };
          }
        }, {
          key: "_hasRequiredSupport",
          value: function _hasRequiredSupport(e) {
            var t;
            return !("dot-density" === (null == (t = e.renderer) ? void 0 : t.type) && !Object(_webgl_capabilities_js__WEBPACK_IMPORTED_MODULE_24__["default"])().supportsTextureFloat) || (A.error(new _core_Error_js__WEBPACK_IMPORTED_MODULE_8__["default"]("webgl-missing-extension", "Missing WebGL extension OES_Texture_Float which is required for DotDensity")), !1);
          }
        }, {
          key: "_onceTilesUpdated",
          value: function _onceTilesUpdated() {
            return this.requestUpdate(), Object(_core_watchUtils_js__WEBPACK_IMPORTED_MODULE_19__["whenFalseOnce"])(this, "_pipelineIsUpdating", !1);
          }
        }, {
          key: "_lockGPUUploads",
          value: function _lockGPUUploads() {
            this.tileRenderer && this.tileRenderer.lockGPUUploads();
          }
        }, {
          key: "_unlockGPUUploads",
          value: function _unlockGPUUploads() {
            this.tileRenderer && this.tileRenderer.unlockGPUUploads();
          }
        }, {
          key: "_forceAttributeTextureUpload",
          value: function _forceAttributeTextureUpload() {
            this.tileRenderer && this.tileRenderer.forceAttributeTextureUpload();
          }
        }, {
          key: "_update",
          value: function _update() {
            var _this12 = this;

            this.view.timeline.begin("".concat(this.layer.title, " (FeatureLayer) Initial Pipeline Config"));

            var e = this._doUpdate();

            this._updatingPromise = e;

            var t = function t() {
              e === _this12._updatingPromise && _this12._set("_updatingPipelineConfig", !1), _this12.view && _this12.view.timeline.end("".concat(_this12.layer.title, " (FeatureLayer) Initial Pipeline Config"));
            };

            e.then(t)["catch"](function (e) {
              Object(_core_promiseUtils_js__WEBPACK_IMPORTED_MODULE_13__["isAbortError"])(e) || A.error(e), t();
            });
          }
        }, {
          key: "_addHighlight",
          value: function _addHighlight(e) {
            var _iterator2 = _createForOfIteratorHelper(e),
                _step2;

            try {
              for (_iterator2.s(); !(_step2 = _iterator2.n()).done;) {
                var t = _step2.value;

                if (this._highlightIds.has(t)) {
                  var _e5 = this._highlightIds.get(t);

                  this._highlightIds.set(t, _e5 + 1);
                } else this._highlightIds.set(t, 1);
              }
            } catch (err) {
              _iterator2.e(err);
            } finally {
              _iterator2.f();
            }

            this._updateHighlight()["catch"](function (e) {
              Object(_core_promiseUtils_js__WEBPACK_IMPORTED_MODULE_13__["isAbortError"])(e) || A.error(e);
            });
          }
        }, {
          key: "_removeHighlight",
          value: function _removeHighlight(e) {
            var _iterator3 = _createForOfIteratorHelper(e),
                _step3;

            try {
              for (_iterator3.s(); !(_step3 = _iterator3.n()).done;) {
                var t = _step3.value;

                if (this._highlightIds.has(t)) {
                  var _e6 = this._highlightIds.get(t) - 1;

                  0 === _e6 ? this._highlightIds["delete"](t) : this._highlightIds.set(t, _e6);
                }
              }
            } catch (err) {
              _iterator3.e(err);
            } finally {
              _iterator3.f();
            }

            this._updateHighlight()["catch"](function (e) {
              Object(_core_promiseUtils_js__WEBPACK_IMPORTED_MODULE_13__["isAbortError"])(e) || A.error(e);
            });
          }
        }, {
          key: "_createHittestResult",
          value: function _createHittestResult(e) {
            return e.layer = this.layer, e.sourceLayer = this.layer, Object(_core_maybe_js__WEBPACK_IMPORTED_MODULE_3__["isSome"])(e.geometry) && (e.geometry.spatialReference = this.view.spatialReference), e;
          }
        }, {
          key: "_hitTest",
          value: function () {
            var _hitTest2 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee37(e, t) {
              var _this13 = this;

              var r, n, _e7, l, _e8;

              return regeneratorRuntime.wrap(function _callee37$(_context37) {
                while (1) {
                  switch (_context37.prev = _context37.next) {
                    case 0:
                      if (!(this.suspended || !this.tileRenderer)) {
                        _context37.next = 2;
                        break;
                      }

                      return _context37.abrupt("return", null);

                    case 2:
                      _context37.next = 4;
                      return this.tileRenderer.hitTest(e, t);

                    case 4:
                      r = _context37.sent;

                      if (!(0 === r.length)) {
                        _context37.next = 9;
                        break;
                      }

                      _context37.next = 8;
                      return Object(_core_promiseUtils_js__WEBPACK_IMPORTED_MODULE_13__["after"])(1);

                    case 8:
                      return _context37.abrupt("return", null);

                    case 9:
                      n = r[0];

                      if (function (e) {
                        return (2147483648 & e) >>> 31 == 1;
                      }(n)) {
                        _context37.next = 15;
                        break;
                      }

                      _context37.next = 13;
                      return this._proxy.getFeature(n);

                    case 13:
                      _e7 = _context37.sent;
                      return _context37.abrupt("return", Object(_core_maybe_js__WEBPACK_IMPORTED_MODULE_3__["andThen"])(_e7, function (e) {
                        return _this13._createHittestResult(_Graphic_js__WEBPACK_IMPORTED_MODULE_17__["default"].fromJSON(e));
                      }));

                    case 15:
                      _context37.next = 17;
                      return this._proxy.getAggregate(n);

                    case 17:
                      l = _context37.sent;

                      if (!Object(_core_maybe_js__WEBPACK_IMPORTED_MODULE_3__["isNone"])(l)) {
                        _context37.next = 20;
                        break;
                      }

                      return _context37.abrupt("return", null);

                    case 20:
                      if (!Object(_core_maybe_js__WEBPACK_IMPORTED_MODULE_3__["isSome"])(l.referenceId)) {
                        _context37.next = 25;
                        break;
                      }

                      _context37.next = 23;
                      return this._proxy.getFeature(l.referenceId);

                    case 23:
                      _e8 = _context37.sent;
                      return _context37.abrupt("return", Object(_core_maybe_js__WEBPACK_IMPORTED_MODULE_3__["andThen"])(_e8, function (e) {
                        return _this13._createHittestResult(_Graphic_js__WEBPACK_IMPORTED_MODULE_17__["default"].fromJSON(e));
                      }));

                    case 25:
                      return _context37.abrupt("return", this._createHittestResult(_AggregateGraphic_js__WEBPACK_IMPORTED_MODULE_18__["default"].fromJSON(l)));

                    case 26:
                    case "end":
                      return _context37.stop();
                  }
                }
              }, _callee37, this);
            }));

            function _hitTest(_x43, _x44) {
              return _hitTest2.apply(this, arguments);
            }

            return _hitTest;
          }()
        }]);

        return D;
      }(Object(_layers_FeatureLayerView_js__WEBPACK_IMPORTED_MODULE_34__["FeatureLayerView"])(Object(_layers_RefreshableLayerView_js__WEBPACK_IMPORTED_MODULE_22__["RefreshableLayerView"])(Object(_LayerView2D_js__WEBPACK_IMPORTED_MODULE_35__["LayerView2DMixin"])(_layers_LayerView_js__WEBPACK_IMPORTED_MODULE_25__["default"]))));

      Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_6__["property"])()], D.prototype, "_proxy", void 0), Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_6__["property"])()], D.prototype, "_pipelineIsUpdating", void 0), Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_6__["property"])()], D.prototype, "_updatingPipelineConfig", void 0), Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_6__["property"])()], D.prototype, "_effectiveRenderer", void 0), Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_6__["property"])()], D.prototype, "_aggregateValueRanges", void 0), Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_6__["property"])()], D.prototype, "_onGoingEdits", void 0), Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_6__["property"])()], D.prototype, "_isRefreshing", void 0), Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_6__["property"])({
        dependsOn: ["suspended", "layer.labelingInfo", "layer.labelsVisible"]
      })], D.prototype, "labelsVisible", null), Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_6__["property"])({
        type: _layers_support_FeatureFilter_js__WEBPACK_IMPORTED_MODULE_32__["default"]
      })], D.prototype, "filter", void 0), Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_6__["property"])({
        type: _layers_support_FeatureEffect_js__WEBPACK_IMPORTED_MODULE_33__["default"]
      })], D.prototype, "effect", null), Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_6__["property"])({
        readOnly: !0,
        dependsOn: ["effect"]
      })], D.prototype, "effects", null), Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_6__["property"])({
        dependsOn: ["layer.renderer", "layer.outFields", "layer.definitionExpression", "layer.gdbVersion?", "layer.geometryDefinition?", "layer.historicMoment?", "layer.labelingInfo", "layer.labelsVisible", "layer.featureReduction", "filter", "effect", "timeExtent", "clips"]
      })], D.prototype, "renderingConfigHash", null), Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_6__["property"])()], D.prototype, "tileRenderer", void 0), Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_6__["property"])({
        dependsOn: ["layer.renderer", "tileRenderer", "tileRenderer.updating", "_updatingPipelineConfig", "_pipelineIsUpdating", "_updatingRequiredFieldsPromise", "_proxy", "_proxy.isReady?", "_onGoingEdits"]
      })], D.prototype, "updating", void 0), D = Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_subclass_js__WEBPACK_IMPORTED_MODULE_7__["subclass"])("esri.views.2d.layers.FeatureLayerView2D")], D);
      var $ = D;
      /* harmony default export */

      __webpack_exports__["default"] = $;
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
    "KfVJ":
    /*!*****************************************************************************!*\
      !*** ./node_modules/@arcgis/core/views/2d/layers/features/tileRenderers.js ***!
      \*****************************************************************************/

    /*! exports provided: createOrReuseTileRenderer */

    /***/
    function KfVJ(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "createOrReuseTileRenderer", function () {
        return e;
      });
      /*
      All material copyright ESRI, All Rights Reserved, unless otherwise specified.
      See https://js.arcgis.com/4.18/esri/copyright.txt for details.
      */


      function e(_x45, _x46) {
        return _e9.apply(this, arguments);
      }
      /***/


      function _e9() {
        _e9 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee38(e, a) {
          return regeneratorRuntime.wrap(function _callee38$(_context38) {
            while (1) {
              switch (_context38.prev = _context38.next) {
                case 0:
                  if (e) {
                    _context38.next = 2;
                    break;
                  }

                  return _context38.abrupt("return", null);

                case 2:
                  _context38.t0 = e.type;
                  _context38.next = _context38.t0 === "class-breaks" ? 5 : _context38.t0 === "simple" ? 5 : _context38.t0 === "unique-value" ? 5 : _context38.t0 === "dot-density" ? 5 : _context38.t0 === "dictionary" ? 5 : _context38.t0 === "heatmap" ? 10 : 15;
                  break;

                case 5:
                  _context38.next = 7;
                  return Promise.all(
                  /*! import() | tileRenderers-SymbolTileRenderer-js */
                  [__webpack_require__.e("default~layers-BaseDynamicLayerView2D-js~layers-GeoRSSLayerView2D-js~layers-GraphicsLayerView2D-js~l~c2cf70ea"), __webpack_require__.e("default~layers-BaseDynamicLayerView2D-js~layers-GeoRSSLayerView2D-js~layers-GraphicsLayerView2D-js~l~70af773e"), __webpack_require__.e("default~layers-GeoRSSLayerView2D-js~layers-GraphicsLayerView2D-js~layers-ImageryLayerView2D-js~layer~795eafd7"), __webpack_require__.e("default~layers-GeoRSSLayerView2D-js~layers-GraphicsLayerView2D-js~layers-ImageryLayerView2D-js~layer~f46dcc9f"), __webpack_require__.e("common"), __webpack_require__.e("tileRenderers-SymbolTileRenderer-js")]).then(__webpack_require__.bind(null,
                  /*! ./tileRenderers/SymbolTileRenderer.js */
                  "wfc5"));

                case 7:
                  _context38.t1 = _context38.sent["default"];
                  _context38.t2 = a;
                  return _context38.abrupt("return", new _context38.t1(_context38.t2));

                case 10:
                  _context38.next = 12;
                  return Promise.all(
                  /*! import() | tileRenderers-HeatmapTileRenderer-js */
                  [__webpack_require__.e("default~layers-BaseDynamicLayerView2D-js~layers-GeoRSSLayerView2D-js~layers-GraphicsLayerView2D-js~l~c2cf70ea"), __webpack_require__.e("default~layers-BaseDynamicLayerView2D-js~layers-GeoRSSLayerView2D-js~layers-GraphicsLayerView2D-js~l~70af773e"), __webpack_require__.e("common"), __webpack_require__.e("tileRenderers-HeatmapTileRenderer-js")]).then(__webpack_require__.bind(null,
                  /*! ./tileRenderers/HeatmapTileRenderer.js */
                  "jncx"));

                case 12:
                  _context38.t3 = _context38.sent["default"];
                  _context38.t4 = a;
                  return _context38.abrupt("return", new _context38.t3(_context38.t4));

                case 15:
                case "end":
                  return _context38.stop();
              }
            }
          }, _callee38);
        }));
        return _e9.apply(this, arguments);
      }
    },

    /***/
    "M08Z":
    /*!*****************************************************************************!*\
      !*** ./node_modules/@arcgis/core/views/2d/layers/graphics/graphicsUtils.js ***!
      \*****************************************************************************/

    /*! exports provided: getBounds, getCIMMarkerBounds, getMarkerSymbolBounds, getTextSymbolBounds, getTextSymbolSize, graphicGeometryToNumber, isMarkerSymbol, isPointOnPolyline, normalizeCentralMeridian */

    /***/
    function M08Z(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "getBounds", function () {
        return X;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "getCIMMarkerBounds", function () {
        return G;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "getMarkerSymbolBounds", function () {
        return F;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "getTextSymbolBounds", function () {
        return D;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "getTextSymbolSize", function () {
        return V;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "graphicGeometryToNumber", function () {
        return O;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "isMarkerSymbol", function () {
        return z;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "isPointOnPolyline", function () {
        return E;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "normalizeCentralMeridian", function () {
        return K;
      });
      /* harmony import */


      var _core_has_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ../../../../core/has.js */
      "wSAH");
      /* harmony import */


      var _core_maybe_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ../../../../core/maybe.js */
      "srIe");
      /* harmony import */


      var _geometry_support_spatialReferenceUtils_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ../../../../geometry/support/spatialReferenceUtils.js */
      "f4Nx");
      /* harmony import */


      var _geometry_SpatialReference_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ../../../../geometry/SpatialReference.js */
      "WZb1");
      /* harmony import */


      var _geometry_support_intersects_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ../../../../geometry/support/intersects.js */
      "PNY3");
      /* harmony import */


      var _geometry_support_boundsUtils_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ../../../../geometry/support/boundsUtils.js */
      "KLE9");
      /* harmony import */


      var _geometry_support_jsonUtils_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ../../../../geometry/support/jsonUtils.js */
      "qatw");
      /* harmony import */


      var _core_screenUtils_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! ../../../../core/screenUtils.js */
      "qRWG");
      /* harmony import */


      var _geometry_support_aaBoundingRect_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! ../../../../geometry/support/aaBoundingRect.js */
      "kYAx");
      /* harmony import */


      var _geometry_support_normalizeUtils_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! ../../../../geometry/support/normalizeUtils.js */
      "qNUd");
      /* harmony import */


      var _chunks_vec2_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
      /*! ../../../../chunks/vec2.js */
      "M0lq");
      /* harmony import */


      var _chunks_mat2d_js__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
      /*! ../../../../chunks/mat2d.js */
      "opr1");
      /* harmony import */


      var _chunks_mat2df32_js__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
      /*! ../../../../chunks/mat2df32.js */
      "LGNZ");
      /* harmony import */


      var _chunks_vec2f32_js__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
      /*! ../../../../chunks/vec2f32.js */
      "c46T");
      /* harmony import */


      var _engine_webgl_alignmentUtils_js__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(
      /*! ../../engine/webgl/alignmentUtils.js */
      "Mt1D");
      /* harmony import */


      var _engine_webgl_mesh_templates_shapingUtils_js__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(
      /*! ../../engine/webgl/mesh/templates/shapingUtils.js */
      "G0q+");
      /* harmony import */


      var _engine_webgl_util_BidiText_js__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(
      /*! ../../engine/webgl/util/BidiText.js */
      "t7mB");
      /* harmony import */


      var _symbols_cim_CIMSymbolHelper_js__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(
      /*! ../../../../symbols/cim/CIMSymbolHelper.js */
      "eT81");
      /*
      All material copyright ESRI, All Rights Reserved, unless otherwise specified.
      See https://js.arcgis.com/4.18/esri/copyright.txt for details.
      */


      var P = Math.PI / 180,
          W = Object(_chunks_mat2df32_js__WEBPACK_IMPORTED_MODULE_12__["c"])(),
          U = Object(_chunks_vec2f32_js__WEBPACK_IMPORTED_MODULE_13__["c"])(),
          A = Object(_geometry_support_aaBoundingRect_js__WEBPACK_IMPORTED_MODULE_8__["create"])();

      function X(t, n, s, o, a, m, c) {
        if (!o || !s.symbol) return t[0] = t[1] = t[2] = t[3] = 0, n[0] = n[1] = n[2] = n[3] = 0, t;
        var l = o;

        if (!Object(_geometry_support_jsonUtils_js__WEBPACK_IMPORTED_MODULE_6__["isPoint"])(l)) {
          Object(_geometry_support_boundsUtils_js__WEBPACK_IMPORTED_MODULE_5__["getBoundsXY"])(t, l);
          var e = n[0];
          0 === e && (e = Q(s), n[0] = e);
          var r = a * e / 2;
          return t[0] -= r, t[1] -= r, t[2] += r, t[3] += r, t;
        }

        {
          var _i2 = l.x,
              _r = l.y;
          "esriTS" === s.symbol.type && 0 === n[2] && 0 === n[3] && V(n, s.symbol, s.mosaicItem), function (t, n, s, i, r, o, a, m) {
            var c;

            switch (i.type) {
              case "esriSMS":
              case "esriPMS":
                c = F(n, s, i, o, a, 0);
                break;

              case "esriTS":
                c = D(n, s, i, r, o, 0);
                break;

              case "cim":
              case "CIMSymbolReference":
              case "expanded-cim":
                c = G(n, s, i, o, a, 0);
            }

            var l,
                f,
                u = 0;

            for (var _t = 0; _t < c.rings[0].length - 1; _t++) {
              f = c.rings[0][_t], l = (n - f[0]) * (n - f[0]) + (s - f[1]) * (s - f[1]), u = Math.max(u, l);
            }

            u = Math.sqrt(u);
            var h = Object(_geometry_support_normalizeUtils_js__WEBPACK_IMPORTED_MODULE_9__["normalizeMapX"])(n - u, m),
                p = Object(_geometry_support_normalizeUtils_js__WEBPACK_IMPORTED_MODULE_9__["normalizeMapX"])(n + u, m);

            if (h > p) {
              var _t2 = Object(_geometry_support_spatialReferenceUtils_js__WEBPACK_IMPORTED_MODULE_2__["getInfo"])(m);

              if (_t2) {
                var _t2$valid = _slicedToArray(_t2.valid, 2),
                    _e10 = _t2$valid[0],
                    _n = _t2$valid[1];

                h = _e10, p = _n;
              }
            }

            t[0] = h, t[1] = s - u, t[2] = p, t[3] = s + u;
          }(t, _i2, _r, s.symbol, n, a, m, c);
        }
        return t;
      }

      function z(t) {
        return "simple-marker" === t || "picture-marker" === t || "text" === t;
      }

      function O(e) {
        switch (Object(_core_maybe_js__WEBPACK_IMPORTED_MODULE_1__["unwrap"])(e.geometry).type) {
          case "point":
          case "multipoint":
            return 0;

          case "polyline":
            return 1;

          case "polygon":
          case "extent":
            return 2;
        }

        return 0;
      }

      var H = Object(_chunks_vec2f32_js__WEBPACK_IMPORTED_MODULE_13__["c"])(),
          T = Object(_chunks_vec2f32_js__WEBPACK_IMPORTED_MODULE_13__["c"])(),
          q = Object(_chunks_vec2f32_js__WEBPACK_IMPORTED_MODULE_13__["c"])(),
          C = Object(_chunks_vec2f32_js__WEBPACK_IMPORTED_MODULE_13__["c"])(),
          J = Object(_chunks_vec2f32_js__WEBPACK_IMPORTED_MODULE_13__["c"])(),
          N = Object(_chunks_vec2f32_js__WEBPACK_IMPORTED_MODULE_13__["c"])(),
          B = Object(_chunks_vec2f32_js__WEBPACK_IMPORTED_MODULE_13__["c"])();

      function E(t, e, n, s) {
        Object(_chunks_vec2_js__WEBPACK_IMPORTED_MODULE_10__["s"])(q, e, n);
        var i = t.paths;
        var r,
            o,
            a,
            m,
            c,
            l,
            f,
            x,
            g,
            d = 1 / 0;

        for (var _t3 = 0; _t3 < i.length; _t3++) {
          var b = i[_t3];
          if (!(b.length < 2)) for (var _t4 = 1; _t4 < b.length; _t4++) {
            r = b[_t4 - 1][0], a = b[_t4 - 1][1], o = b[_t4][0], m = b[_t4][1], c = Math.min(r, o) - s, l = Math.min(a, m) - s, f = Math.max(r, o) + s, x = Math.max(a, m) + s, e < c || e > f || n < l || n > x || (Object(_chunks_vec2_js__WEBPACK_IMPORTED_MODULE_10__["s"])(H, r, a), Object(_chunks_vec2_js__WEBPACK_IMPORTED_MODULE_10__["s"])(T, o, m), Object(_chunks_vec2_js__WEBPACK_IMPORTED_MODULE_10__["d"])(C, T, H), Object(_chunks_vec2_js__WEBPACK_IMPORTED_MODULE_10__["d"])(J, H, q), Object(_chunks_vec2_js__WEBPACK_IMPORTED_MODULE_10__["a"])(N, C, Object(_chunks_vec2_js__WEBPACK_IMPORTED_MODULE_10__["g"])(C, J) / Object(_chunks_vec2_js__WEBPACK_IMPORTED_MODULE_10__["g"])(C, C)), Object(_chunks_vec2_js__WEBPACK_IMPORTED_MODULE_10__["d"])(B, J, N), g = Object(_chunks_vec2_js__WEBPACK_IMPORTED_MODULE_10__["g"])(B, B), d > g && (d = g));
          }
        }

        return Math.sqrt(d) <= s;
      }

      function F(t, e, n, s, i, r) {
        var o, a;
        var m = Object(_core_screenUtils_js__WEBPACK_IMPORTED_MODULE_7__["pt2px"])(n.xoffset),
            c = Object(_core_screenUtils_js__WEBPACK_IMPORTED_MODULE_7__["pt2px"])(n.yoffset),
            f = P * n.angle,
            x = P * r;

        switch (n.type) {
          case "esriSMS":
            o = a = Object(_core_screenUtils_js__WEBPACK_IMPORTED_MODULE_7__["pt2px"])(n.size);
            break;

          case "esriPMS":
            o = Object(_core_screenUtils_js__WEBPACK_IMPORTED_MODULE_7__["pt2px"])(n.width), a = Object(_core_screenUtils_js__WEBPACK_IMPORTED_MODULE_7__["pt2px"])(n.height);
        }

        i < .04 && (s = .04 * s / i);
        var h = Object(_chunks_mat2d_js__WEBPACK_IMPORTED_MODULE_11__["i"])(W);
        Object(_chunks_mat2d_js__WEBPACK_IMPORTED_MODULE_11__["t"])(h, h, Object(_chunks_vec2_js__WEBPACK_IMPORTED_MODULE_10__["s"])(U, t, e)), Object(_chunks_mat2d_js__WEBPACK_IMPORTED_MODULE_11__["r"])(h, h, x - f), Object(_chunks_mat2d_js__WEBPACK_IMPORTED_MODULE_11__["s"])(h, h, Object(_chunks_vec2_js__WEBPACK_IMPORTED_MODULE_10__["s"])(U, s, -s)), Object(_chunks_mat2d_js__WEBPACK_IMPORTED_MODULE_11__["t"])(h, h, Object(_chunks_vec2_js__WEBPACK_IMPORTED_MODULE_10__["s"])(U, m, -c));
        var p = [0, 0];
        Object(_chunks_vec2_js__WEBPACK_IMPORTED_MODULE_10__["t"])(p, Object(_chunks_vec2_js__WEBPACK_IMPORTED_MODULE_10__["s"])(U, -.5 * o, -.5 * a), h);
        var y = [0, 0];
        Object(_chunks_vec2_js__WEBPACK_IMPORTED_MODULE_10__["t"])(y, Object(_chunks_vec2_js__WEBPACK_IMPORTED_MODULE_10__["s"])(U, -.5 * o, .5 * a), h);
        var j = [0, 0];
        Object(_chunks_vec2_js__WEBPACK_IMPORTED_MODULE_10__["t"])(j, Object(_chunks_vec2_js__WEBPACK_IMPORTED_MODULE_10__["s"])(U, .5 * o, -.5 * a), h);
        var I = [0, 0];
        return Object(_chunks_vec2_js__WEBPACK_IMPORTED_MODULE_10__["t"])(I, Object(_chunks_vec2_js__WEBPACK_IMPORTED_MODULE_10__["s"])(U, .5 * o, .5 * a), h), {
          rings: [[p, j, I, y, p]]
        };
      }

      function G(t, e, n, s, i, r) {
        var o = _symbols_cim_CIMSymbolHelper_js__WEBPACK_IMPORTED_MODULE_17__["CIMSymbolHelper"].getEnvelope(n.data);

        if (!o) return null;
        i < .04 && (s = .04 * s / i);
        var a = Object(_core_screenUtils_js__WEBPACK_IMPORTED_MODULE_7__["pt2px"])(o.width),
            m = Object(_core_screenUtils_js__WEBPACK_IMPORTED_MODULE_7__["pt2px"])(o.height),
            c = Object(_core_screenUtils_js__WEBPACK_IMPORTED_MODULE_7__["pt2px"])(o.x),
            f = Object(_core_screenUtils_js__WEBPACK_IMPORTED_MODULE_7__["pt2px"])(o.y),
            x = 0 * P,
            h = P * r,
            p = Object(_chunks_mat2d_js__WEBPACK_IMPORTED_MODULE_11__["i"])(W);
        Object(_chunks_mat2d_js__WEBPACK_IMPORTED_MODULE_11__["t"])(p, p, Object(_chunks_vec2_js__WEBPACK_IMPORTED_MODULE_10__["s"])(U, t, e)), Object(_chunks_mat2d_js__WEBPACK_IMPORTED_MODULE_11__["r"])(p, p, h - x), Object(_chunks_mat2d_js__WEBPACK_IMPORTED_MODULE_11__["s"])(p, p, Object(_chunks_vec2_js__WEBPACK_IMPORTED_MODULE_10__["s"])(U, s, s));
        var y = [0, 0];
        Object(_chunks_vec2_js__WEBPACK_IMPORTED_MODULE_10__["t"])(y, Object(_chunks_vec2_js__WEBPACK_IMPORTED_MODULE_10__["s"])(U, c, f + m), p);
        var j = [0, 0];
        Object(_chunks_vec2_js__WEBPACK_IMPORTED_MODULE_10__["t"])(j, Object(_chunks_vec2_js__WEBPACK_IMPORTED_MODULE_10__["s"])(U, c, f), p);
        var I = [0, 0];
        Object(_chunks_vec2_js__WEBPACK_IMPORTED_MODULE_10__["t"])(I, Object(_chunks_vec2_js__WEBPACK_IMPORTED_MODULE_10__["s"])(U, c + a, f + m), p);
        var w = [0, 0];
        return Object(_chunks_vec2_js__WEBPACK_IMPORTED_MODULE_10__["t"])(w, Object(_chunks_vec2_js__WEBPACK_IMPORTED_MODULE_10__["s"])(U, c + a, f), p), {
          rings: [[y, I, w, j, y]]
        };
      }

      function D(t, e, n, s, i, r) {
        var o = Object(_core_screenUtils_js__WEBPACK_IMPORTED_MODULE_7__["pt2px"])(n.xoffset),
            a = Object(_core_screenUtils_js__WEBPACK_IMPORTED_MODULE_7__["pt2px"])(n.yoffset),
            m = P * n.angle,
            c = P * r,
            f = Object(_chunks_mat2d_js__WEBPACK_IMPORTED_MODULE_11__["i"])(W);
        Object(_chunks_mat2d_js__WEBPACK_IMPORTED_MODULE_11__["t"])(f, f, Object(_chunks_vec2_js__WEBPACK_IMPORTED_MODULE_10__["s"])(U, t, e)), Object(_chunks_mat2d_js__WEBPACK_IMPORTED_MODULE_11__["r"])(f, f, c), Object(_chunks_mat2d_js__WEBPACK_IMPORTED_MODULE_11__["s"])(f, f, Object(_chunks_vec2_js__WEBPACK_IMPORTED_MODULE_10__["s"])(U, i, -i));
        var x = s[0] + s[2] / 2,
            h = s[1] + s[3] / 2;
        Object(_chunks_mat2d_js__WEBPACK_IMPORTED_MODULE_11__["t"])(f, f, Object(_chunks_vec2_js__WEBPACK_IMPORTED_MODULE_10__["s"])(U, o, -a)), Object(_chunks_mat2d_js__WEBPACK_IMPORTED_MODULE_11__["t"])(f, f, Object(_chunks_vec2_js__WEBPACK_IMPORTED_MODULE_10__["s"])(U, x, h)), Object(_chunks_mat2d_js__WEBPACK_IMPORTED_MODULE_11__["r"])(f, f, m), Object(_chunks_mat2d_js__WEBPACK_IMPORTED_MODULE_11__["t"])(f, f, Object(_chunks_vec2_js__WEBPACK_IMPORTED_MODULE_10__["s"])(U, -x, -h));
        var p = [0, 0];
        Object(_chunks_vec2_js__WEBPACK_IMPORTED_MODULE_10__["t"])(p, Object(_chunks_vec2_js__WEBPACK_IMPORTED_MODULE_10__["s"])(U, s[0], s[1]), f);
        var y = [0, 0];
        Object(_chunks_vec2_js__WEBPACK_IMPORTED_MODULE_10__["t"])(y, Object(_chunks_vec2_js__WEBPACK_IMPORTED_MODULE_10__["s"])(U, s[0], s[1] + s[3]), f);
        var j = [0, 0];
        Object(_chunks_vec2_js__WEBPACK_IMPORTED_MODULE_10__["t"])(j, Object(_chunks_vec2_js__WEBPACK_IMPORTED_MODULE_10__["s"])(U, s[0] + s[2], s[1]), f);
        var I = [0, 0];
        return Object(_chunks_vec2_js__WEBPACK_IMPORTED_MODULE_10__["t"])(I, Object(_chunks_vec2_js__WEBPACK_IMPORTED_MODULE_10__["s"])(U, s[0] + s[2], s[1] + s[3]), f), {
          rings: [[p, j, I, y, p]]
        };
      }

      function K(t) {
        var n,
            l,
            f,
            x,
            u,
            h,
            p,
            y,
            g,
            d = null;
        if (!t) return null;
        if ("mesh" === t.type) return t.toJSON();
        if (n = t.spatialReference, l = Object(_geometry_support_spatialReferenceUtils_js__WEBPACK_IMPORTED_MODULE_2__["getInfo"])(n), !l) return t.toJSON();
        f = n.isWebMercator, h = f ? 102100 : 4326, x = Y[h].maxX, u = Y[h].minX, p = Y[h].plus180Line, y = Y[h].minus180Line;
        var b = t.toJSON();
        if (Object(_geometry_support_jsonUtils_js__WEBPACK_IMPORTED_MODULE_6__["isPoint"])(b)) g = et(b, x, u);else if (Object(_geometry_support_jsonUtils_js__WEBPACK_IMPORTED_MODULE_6__["isMultipoint"])(b)) b.points = b.points.map(function (t) {
          return et(t, x, u);
        }), g = b;else if (Object(_geometry_support_jsonUtils_js__WEBPACK_IMPORTED_MODULE_6__["isExtent"])(b)) g = function (t, e) {
          if (!e) return t;

          var n = function (t, e) {
            var n = [],
                s = t.ymin,
                i = t.ymax,
                r = t.xmax - t.xmin,
                o = t.xmin,
                a = t.xmax;
            var m;

            var _e$valid = _slicedToArray(e.valid, 2),
                c = _e$valid[0],
                l = _e$valid[1];

            m = $(t.xmin, e);
            var f = m.x,
                x = m.frameId;
            m = $(t.xmax, e);
            var u = m.x,
                h = m.frameId,
                p = f === u && r > 0;

            if (r > 2 * l) {
              var _t5 = {
                xmin: o < a ? f : u,
                ymin: s,
                xmax: l,
                ymax: i
              },
                  _e11 = {
                xmin: c,
                ymin: s,
                xmax: o < a ? u : f,
                ymax: i
              },
                  _r2 = {
                xmin: 0,
                ymin: s,
                xmax: l,
                ymax: i
              },
                  _m = {
                xmin: c,
                ymin: s,
                xmax: 0,
                ymax: i
              },
                  _p2 = [],
                  _y = [];
              _(_t5, _r2) && _p2.push(x), _(_t5, _m) && _y.push(x), _(_e11, _r2) && _p2.push(h), _(_e11, _m) && _y.push(h);

              for (var _t6 = x + 1; _t6 < h; _t6++) {
                _p2.push(_t6), _y.push(_t6);
              }

              n.push({
                extent: _t5,
                frameIds: [x]
              }, {
                extent: _e11,
                frameIds: [h]
              }, {
                extent: _r2,
                frameIds: _p2
              }, {
                extent: _m,
                frameIds: _y
              });
            } else f > u || p ? n.push({
              extent: {
                xmin: f,
                ymin: s,
                xmax: l,
                ymax: i
              },
              frameIds: [x]
            }, {
              extent: {
                xmin: c,
                ymin: s,
                xmax: u,
                ymax: i
              },
              frameIds: [h]
            }) : n.push({
              extent: {
                xmin: f,
                ymin: s,
                xmax: u,
                ymax: i
              },
              frameIds: [x]
            });

            return n;
          }(t, e).map(function (t) {
            return t.extent;
          });

          if (n.length < 2) return n[0] || t;
          if (n.length > 2) return t.xmin = e.valid[0], t.xmax = e.valid[1], t;
          return {
            rings: n.map(function (t) {
              return [[t.xmin, t.ymin], [t.xmin, t.ymax], [t.xmax, t.ymax], [t.xmax, t.ymin], [t.xmin, t.ymin]];
            })
          };
        }(b, l);else if (Object(_geometry_support_jsonUtils_js__WEBPACK_IMPORTED_MODULE_6__["isPolygon"])(b) || Object(_geometry_support_jsonUtils_js__WEBPACK_IMPORTED_MODULE_6__["isPolyline"])(b)) {
          var _t7 = A;
          Object(_geometry_support_boundsUtils_js__WEBPACK_IMPORTED_MODULE_5__["getBoundsXY"])(_t7, b);

          var e = {
            xmin: _t7[0],
            ymin: _t7[1],
            xmax: _t7[2],
            ymax: _t7[3]
          },
              _n2 = Z(e.xmin, u) * (2 * x),
              r = 0 === _n2 ? b : function (t, e) {
            var n = function (t) {
              if (Object(_geometry_support_jsonUtils_js__WEBPACK_IMPORTED_MODULE_6__["isPolygon"])(t)) return t.rings;
              return t.paths;
            }(t);

            var _iterator4 = _createForOfIteratorHelper(n),
                _step4;

            try {
              for (_iterator4.s(); !(_step4 = _iterator4.n()).done;) {
                var _t8 = _step4.value;

                var _iterator5 = _createForOfIteratorHelper(_t8),
                    _step5;

                try {
                  for (_iterator5.s(); !(_step5 = _iterator5.n()).done;) {
                    var _n3 = _step5.value;
                    _n3[0] += e;
                  }
                } catch (err) {
                  _iterator5.e(err);
                } finally {
                  _iterator5.f();
                }
              }
            } catch (err) {
              _iterator4.e(err);
            } finally {
              _iterator4.f();
            }

            return t;
          }(b, _n2);

          e.xmin += _n2, e.xmax += _n2, Object(_geometry_support_intersects_js__WEBPACK_IMPORTED_MODULE_4__["extentIntersectsPolyline"])(e, p) && e.xmax !== x || Object(_geometry_support_intersects_js__WEBPACK_IMPORTED_MODULE_4__["extentIntersectsPolyline"])(e, y) && e.xmin !== u ? d = r : g = r;
        } else g = t.clone();

        if (null !== d) {
          return new nt().cut(d, x);
        }

        return g;
      }

      function Q(t) {
        switch (t.symbol.type) {
          case "esriSFS":
          case "esriPFS":
            {
              var e = t.symbol.outline;
              return e ? e.width : 0;
            }

          case "esriSLS":
            return Object(_core_screenUtils_js__WEBPACK_IMPORTED_MODULE_7__["pt2px"])(t.symbol.width);

          case "esriSMS":
            return Object(_core_screenUtils_js__WEBPACK_IMPORTED_MODULE_7__["pt2px"])(t.symbol.size);

          case "esriPMS":
            return Object(_core_screenUtils_js__WEBPACK_IMPORTED_MODULE_7__["pt2px"])(Math.max(t.symbol.width, t.symbol.height));

          case "esriTS":
            {
              var _e12 = [0, 0, 0, 0];
              V(_e12, t.symbol, t.mosaicItem);
              var n = Math.max(Math.abs(_e12[0]), Math.abs(_e12[1]));
              return Math.max(_e12[2], _e12[3]) + n;
            }

          case "expanded-cim":
            {
              var _e13 = _symbols_cim_CIMSymbolHelper_js__WEBPACK_IMPORTED_MODULE_17__["CIMSymbolHelper"].getEnvelope(t.symbol.data);

              return Object(_core_screenUtils_js__WEBPACK_IMPORTED_MODULE_7__["pt2px"])(Math.sqrt(_e13.width * _e13.width + _e13.height * _e13.height));
            }

          case "composite-symbol":
            {
              if (!t.symbol.layers.length) return 0;

              var _e14 = t.symbol.layers.length - 1;

              return Q({
                symbol: t.symbol.layers[_e14],
                mosaicItem: null
              });
            }

          case "label":
          default:
            return 0;
        }
      }

      function V(t, e, n) {
        if (!n || 0 === n.glyphMosaicItems.length) return t;
        var s = Object(_engine_webgl_util_BidiText_js__WEBPACK_IMPORTED_MODULE_16__["bidiText"])(e.text)[1],
            i = n.glyphMosaicItems,
            r = Object(_engine_webgl_mesh_templates_shapingUtils_js__WEBPACK_IMPORTED_MODULE_15__["shapeGlyphs"])(i, s, {
          scale: Object(_core_screenUtils_js__WEBPACK_IMPORTED_MODULE_7__["pt2px"])(e.font.size) / 24,
          angle: e.angle,
          xOffset: e.xoffset,
          yOffset: e.yoffset,
          hAlign: Object(_engine_webgl_alignmentUtils_js__WEBPACK_IMPORTED_MODULE_14__["getXAnchorDirection"])(e.horizontalAlignment || "center"),
          vAlign: Object(_engine_webgl_alignmentUtils_js__WEBPACK_IMPORTED_MODULE_14__["getYAnchorDirection"])(e.verticalAlignment || "baseline"),
          maxLineWidth: Math.max(32, Math.min(e.lineWidth || 512, 512)),
          lineHeight: 30 * Math.max(.25, Math.min(e.lineHeight || 1, 4)),
          decoration: e.font.decoration || "none",
          isCIM: !1
        }).bounds;
        return t[0] = Object(_core_screenUtils_js__WEBPACK_IMPORTED_MODULE_7__["pt2px"])(r.x - r.halfWidth), t[1] = Object(_core_screenUtils_js__WEBPACK_IMPORTED_MODULE_7__["pt2px"])(r.y - r.halfHeight), t[2] = Object(_core_screenUtils_js__WEBPACK_IMPORTED_MODULE_7__["pt2px"])(r.width), t[3] = Object(_core_screenUtils_js__WEBPACK_IMPORTED_MODULE_7__["pt2px"])(r.height), t;
      }

      var Y = {
        102100: {
          maxX: 20037508.342788905,
          minX: -20037508.342788905,
          plus180Line: {
            paths: [[[20037508.342788905, -20037508.342788905], [20037508.342788905, 20037508.342788905]]],
            spatialReference: _geometry_SpatialReference_js__WEBPACK_IMPORTED_MODULE_3__["default"].WebMercator
          },
          minus180Line: {
            paths: [[[-20037508.342788905, -20037508.342788905], [-20037508.342788905, 20037508.342788905]]],
            spatialReference: _geometry_SpatialReference_js__WEBPACK_IMPORTED_MODULE_3__["default"].WebMercator
          }
        },
        4326: {
          maxX: 180,
          minX: -180,
          plus180Line: {
            paths: [[[180, -180], [180, 180]]],
            spatialReference: _geometry_SpatialReference_js__WEBPACK_IMPORTED_MODULE_3__["default"].WGS84
          },
          minus180Line: {
            paths: [[[-180, -180], [-180, 180]]],
            spatialReference: _geometry_SpatialReference_js__WEBPACK_IMPORTED_MODULE_3__["default"].WGS84
          }
        }
      };

      function Z(t, e) {
        return Math.ceil((t - e) / (2 * e));
      }

      function $(t, e) {
        var _e$valid2 = _slicedToArray(e.valid, 2),
            n = _e$valid2[0],
            s = _e$valid2[1],
            i = 2 * s;

        var r,
            o = 0;
        return t > s ? (r = Math.ceil(Math.abs(t - s) / i), t -= r * i, o = r) : t < n && (r = Math.ceil(Math.abs(t - n) / i), t += r * i, o = -r), {
          x: t,
          frameId: o
        };
      }

      function _(t, e) {
        var n = e.xmin,
            s = e.ymin,
            i = e.xmax,
            r = e.ymax;
        return tt(t, n, s) && tt(t, n, r) && tt(t, i, r) && tt(t, i, s);
      }

      function tt(t, e, n) {
        return e >= t.xmin && e <= t.xmax && n >= t.ymin && n <= t.ymax;
      }

      function et(t, e, n) {
        if (Array.isArray(t)) {
          var s = t[0];

          if (s > e) {
            var _n4 = Z(s, e);

            t[0] = s + _n4 * (-2 * e);
          } else if (s < n) {
            var _e15 = Z(s, n);

            t[0] = s + _e15 * (-2 * n);
          }
        } else {
          var _s2 = t.x;

          if (_s2 > e) {
            var _n5 = Z(_s2, e);

            t.x += _n5 * (-2 * e);
          } else if (_s2 < n) {
            var _e16 = Z(_s2, n);

            t.x += _e16 * (-2 * n);
          }
        }

        return t;
      }

      var nt = /*#__PURE__*/function () {
        function nt() {
          _classCallCheck(this, nt);
        }

        _createClass(nt, [{
          key: "cut",
          value: function cut(t, e) {
            var n;
            if (t.rings) this.closed = !0, n = t.rings, this.minPts = 4;else {
              if (!t.paths) return null;
              this.closed = !1, n = t.paths, this.minPts = 2;
            }
            var s = n.length,
                i = -2 * e;

            for (var _t9 = 0; _t9 < s; _t9++) {
              var _e17 = n[_t9];

              if (_e17 && _e17.length >= this.minPts) {
                var _t10 = [];

                var _iterator6 = _createForOfIteratorHelper(_e17),
                    _step6;

                try {
                  for (_iterator6.s(); !(_step6 = _iterator6.n()).done;) {
                    var _n6 = _step6.value;

                    _t10.push([_n6[0] + i, _n6[1]]);
                  }
                } catch (err) {
                  _iterator6.e(err);
                } finally {
                  _iterator6.f();
                }

                n.push(_t10);
              }
            }

            return this.closed ? t.rings = n : t.paths = n, t;
          }
        }]);

        return nt;
      }();
      /***/

    },

    /***/
    "M8lB":
    /*!*************************************************************************!*\
      !*** ./node_modules/@arcgis/core/views/layers/support/FeatureFilter.js ***!
      \*************************************************************************/

    /*! exports provided: default */

    /***/
    function M8lB(module, __webpack_exports__, __webpack_require__) {
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


      var _core_jsonMap_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ../../../core/jsonMap.js */
      "+opI");
      /* harmony import */


      var _core_accessorSupport_decorators_subclass_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! ../../../core/accessorSupport/decorators/subclass.js */
      "04ZG");
      /* harmony import */


      var _core_accessorSupport_decorators_writer_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! ../../../core/accessorSupport/decorators/writer.js */
      "Cduq");
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


      var _core_JSONSupport_js__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
      /*! ../../../core/JSONSupport.js */
      "ag7Y");
      /* harmony import */


      var _geometry_support_jsonUtils_js__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
      /*! ../../../geometry/support/jsonUtils.js */
      "qatw");
      /* harmony import */


      var _geometry_js__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(
      /*! ../../../geometry.js */
      "4GrV");
      /* harmony import */


      var _TimeExtent_js__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(
      /*! ../../../TimeExtent.js */
      "ZYtI");
      /* harmony import */


      var _tasks_support_Query_js__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(
      /*! ../../../tasks/support/Query.js */
      "xk++");
      /*
      All material copyright ESRI, All Rights Reserved, unless otherwise specified.
      See https://js.arcgis.com/4.18/esri/copyright.txt for details.
      */


      var _d2;

      var m = new _core_jsonMap_js__WEBPACK_IMPORTED_MODULE_6__["JSONMap"]({
        esriSpatialRelIntersects: "intersects",
        esriSpatialRelContains: "contains",
        esriSpatialRelCrosses: "crosses",
        esriSpatialRelDisjoint: "disjoint",
        esriSpatialRelEnvelopeIntersects: "envelope-intersects",
        esriSpatialRelIndexIntersects: "index-intersects",
        esriSpatialRelOverlaps: "overlaps",
        esriSpatialRelTouches: "touches",
        esriSpatialRelWithin: "within",
        esriSpatialRelRelation: "relation"
      }),
          u = new _core_jsonMap_js__WEBPACK_IMPORTED_MODULE_6__["JSONMap"]({
        esriSRUnit_Meter: "meters",
        esriSRUnit_Kilometer: "kilometers",
        esriSRUnit_Foot: "feet",
        esriSRUnit_StatuteMile: "miles",
        esriSRUnit_NauticalMile: "nautical-miles",
        esriSRUnit_USNauticalMile: "us-nautical-miles"
      });

      var h = _d2 = /*#__PURE__*/function (_core_JSONSupport_js_4) {
        _inherits(d, _core_JSONSupport_js_4);

        var _super6 = _createSuper(d);

        function d(e) {
          var _this14;

          _classCallCheck(this, d);

          _this14 = _super6.call(this, e), _this14.where = null, _this14.geometry = null, _this14.spatialRelationship = "intersects", _this14.hiddenIds = new Set(), _this14.distance = void 0, _this14.objectIds = null, _this14.units = null, _this14.timeExtent = null, _this14.enabled = !1;
          return _this14;
        }

        _createClass(d, [{
          key: "writeWhere",
          value: function writeWhere(e, t) {
            t.where = e || "1=1";
          }
        }, {
          key: "enable",
          value: function enable() {
            this._set("enabled", !0);
          }
        }, {
          key: "createQuery",
          value: function createQuery() {
            var e = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
            var r = this.where,
                i = this.geometry,
                s = this.spatialRelationship,
                o = this.timeExtent,
                n = this.objectIds,
                a = this.units,
                p = this.distance;
            return new _tasks_support_Query_js__WEBPACK_IMPORTED_MODULE_16__["default"](_objectSpread({
              geometry: Object(_core_lang_js__WEBPACK_IMPORTED_MODULE_2__["clone"])(i),
              objectIds: Object(_core_lang_js__WEBPACK_IMPORTED_MODULE_2__["clone"])(n),
              spatialRelationship: s,
              timeExtent: Object(_core_lang_js__WEBPACK_IMPORTED_MODULE_2__["clone"])(o),
              where: r,
              units: a,
              distance: p
            }, e));
          }
        }, {
          key: "clone",
          value: function clone() {
            var e = this.where,
                r = this.geometry,
                i = this.spatialRelationship,
                s = this.hiddenIds,
                o = this.timeExtent,
                n = this.objectIds,
                a = this.units,
                p = this.distance,
                l = new Set();
            return s.forEach(function (e) {
              return l.add(e);
            }), new _d2({
              geometry: Object(_core_lang_js__WEBPACK_IMPORTED_MODULE_2__["clone"])(r),
              hiddenIds: l,
              objectIds: Object(_core_lang_js__WEBPACK_IMPORTED_MODULE_2__["clone"])(n),
              spatialRelationship: i,
              timeExtent: Object(_core_lang_js__WEBPACK_IMPORTED_MODULE_2__["clone"])(o),
              where: e,
              units: a,
              distance: p
            });
          }
        }]);

        return d;
      }(_core_JSONSupport_js__WEBPACK_IMPORTED_MODULE_12__["JSONSupport"]);

      Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_5__["property"])({
        type: String
      })], h.prototype, "where", void 0), Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_writer_js__WEBPACK_IMPORTED_MODULE_8__["writer"])("where")], h.prototype, "writeWhere", null), Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_5__["property"])({
        types: _geometry_js__WEBPACK_IMPORTED_MODULE_14__["geometryTypes"],
        json: {
          read: _geometry_support_jsonUtils_js__WEBPACK_IMPORTED_MODULE_13__["fromJSON"],
          write: !0
        }
      })], h.prototype, "geometry", void 0), Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_5__["property"])({
        type: String,
        json: {
          read: {
            source: "spatialRel",
            reader: m.read
          },
          write: {
            target: "spatialRel",
            writer: m.write
          }
        }
      })], h.prototype, "spatialRelationship", void 0), Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_5__["property"])({
        json: {
          write: function write(e, t, r) {
            return t[r] = Array.from(e);
          },
          read: function read(e) {
            return new Set(e);
          }
        }
      })], h.prototype, "hiddenIds", void 0), Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_5__["property"])({
        type: Number,
        json: {
          write: {
            overridePolicy: function overridePolicy(e) {
              return {
                enabled: e > 0
              };
            }
          }
        }
      })], h.prototype, "distance", void 0), Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_5__["property"])({
        type: [Number],
        json: {
          write: !0
        }
      })], h.prototype, "objectIds", void 0), Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_5__["property"])({
        type: String,
        json: {
          read: u.read,
          write: {
            writer: u.write,
            overridePolicy: function overridePolicy(e) {
              return {
                enabled: e && this.distance > 0
              };
            }
          }
        }
      })], h.prototype, "units", void 0), Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_5__["property"])({
        type: _TimeExtent_js__WEBPACK_IMPORTED_MODULE_15__["default"],
        json: {
          write: !0
        }
      })], h.prototype, "timeExtent", void 0), Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_5__["property"])({
        readOnly: !0
      })], h.prototype, "enabled", void 0), h = _d2 = Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_subclass_js__WEBPACK_IMPORTED_MODULE_7__["subclass"])("esri.views.layers.support.FeatureFilter")], h);
      var j = h;
      /* harmony default export */

      __webpack_exports__["default"] = j;
      /***/
    },

    /***/
    "NIRN":
    /*!*********************************************************************************!*\
      !*** ./node_modules/@arcgis/core/views/2d/engine/webgl/visualVariablesUtils.js ***!
      \*********************************************************************************/

    /*! exports provided: getTypeOfSizeVisualVariable */

    /***/
    function NIRN(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "getTypeOfSizeVisualVariable", function () {
        return o;
      });
      /* harmony import */


      var _core_Logger_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ../../../../core/Logger.js */
      "6S2I");
      /* harmony import */


      var _core_Error_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ../../../../core/Error.js */
      "zlDU");
      /* harmony import */


      var _enums_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./enums.js */
      "yE7X");
      /* harmony import */


      var _Utils_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./Utils.js */
      "yN2G");
      /*
      All material copyright ESRI, All Rights Reserved, unless otherwise specified.
      See https://js.arcgis.com/4.18/esri/copyright.txt for details.
      */


      var l = _core_Logger_js__WEBPACK_IMPORTED_MODULE_0__["default"].getLogger("esri.views.2d.engine.webgl");

      function o(e) {
        return Object(_Utils_js__WEBPACK_IMPORTED_MODULE_3__["isNumber"])(e.minDataValue) && Object(_Utils_js__WEBPACK_IMPORTED_MODULE_3__["isNumber"])(e.maxDataValue) && null != e.minSize && null != e.maxSize ? _enums_js__WEBPACK_IMPORTED_MODULE_2__["WGLVVFlag"].SIZE_MINMAX_VALUE : (e.expression && "view.scale" === e.expression || e.valueExpression && "$view.scale" === e.valueExpression) && Array.isArray(e.stops) ? _enums_js__WEBPACK_IMPORTED_MODULE_2__["WGLVVFlag"].SIZE_SCALE_STOPS : (null != e.field || e.expression && "view.scale" !== e.expression || e.valueExpression && "$view.scale" !== e.valueExpression) && (Array.isArray(e.stops) || "levels" in e && e.levels) ? _enums_js__WEBPACK_IMPORTED_MODULE_2__["WGLVVFlag"].SIZE_FIELD_STOPS : (null != e.field || e.expression && "view.scale" !== e.expression || e.valueExpression && "$view.scale" !== e.valueExpression) && null != e.valueUnit ? _enums_js__WEBPACK_IMPORTED_MODULE_2__["WGLVVFlag"].SIZE_UNIT_VALUE : (l.error(new _core_Error_js__WEBPACK_IMPORTED_MODULE_1__["default"]("mapview-bad-type", "Found invalid size VisualVariable", e)), _enums_js__WEBPACK_IMPORTED_MODULE_2__["WGLVVFlag"].NONE);
      }
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

          for (var _t11 = 0; _t11 < o; _t11++) {
            s += r[_t11];
          }

          var f = Math.floor(s / o);
          return Math.max(f, t);
        }(s, r.visualVariables) : s;
        if ("simple" === r.type) return t(o, r.symbol);

        if ("unique-value" === r.type) {
          var _e18 = o;
          return r.uniqueValueInfos.forEach(function (n) {
            _e18 = t(_e18, n.symbol);
          }), _e18;
        }

        if ("class-breaks" === r.type) {
          var _e19 = o;
          return r.classBreakInfos.forEach(function (n) {
            _e19 = t(_e19, n.symbol);
          }), _e19;
        }

        return r.type, o;
      }
      /***/

    },

    /***/
    "bzbK":
    /*!**************************************************************************************!*\
      !*** ./node_modules/@arcgis/core/views/2d/layers/features/support/pixelBuffering.js ***!
      \**************************************************************************************/

    /*! exports provided: computePxBuffer */

    /***/
    function bzbK(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "computePxBuffer", function () {
        return a;
      });
      /* harmony import */


      var _core_promiseUtils_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ../../../../../core/promiseUtils.js */
      "9MzC");
      /* harmony import */


      var _core_screenUtils_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ../../../../../core/screenUtils.js */
      "qRWG");
      /* harmony import */


      var _engine_webgl_definitions_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ../../../engine/webgl/definitions.js */
      "jIHu");
      /* harmony import */


      var _symbols_cim_Rect_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ../../../../../symbols/cim/Rect.js */
      "Du6U");
      /* harmony import */


      var _symbols_cim_CIMSymbolHelper_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ../../../../../symbols/cim/CIMSymbolHelper.js */
      "eT81");
      /* harmony import */


      var _graphics_graphicsUtils_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ../../graphics/graphicsUtils.js */
      "M08Z");
      /*
      All material copyright ESRI, All Rights Reserved, unless otherwise specified.
      See https://js.arcgis.com/4.18/esri/copyright.txt for details.
      */


      var o = {
        "simple-marker": 1,
        "picture-marker": 1,
        text: 0,
        "simple-line": 0,
        "simple-fill": 0,
        "picture-fill": 0,
        cim: 1,
        "web-style": 1
      };

      function a(_x47, _x48, _x49) {
        return _a.apply(this, arguments);
      }

      function _a() {
        _a = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee39(r, i, n) {
          var s, o, a, _iterator7, _step7, t, c;

          return regeneratorRuntime.wrap(function _callee39$(_context39) {
            while (1) {
              switch (_context39.prev = _context39.next) {
                case 0:
                  if (!(!r || n && "cluster" === n.type)) {
                    _context39.next = 2;
                    break;
                  }

                  return _context39.abrupt("return", 0);

                case 2:
                  if (!("heatmap" === r.type)) {
                    _context39.next = 4;
                    break;
                  }

                  return _context39.abrupt("return", Math.round(3 * r.blurRadius));

                case 4:
                  if (!("dot-density" === r.type)) {
                    _context39.next = 6;
                    break;
                  }

                  return _context39.abrupt("return", 0);

                case 6:
                  if (!("dictionary" === r.type)) {
                    _context39.next = 8;
                    break;
                  }

                  return _context39.abrupt("return", "esriGeometryPoint" === i || "esriGeometryMultipoint" === i ? 100 : 200);

                case 8:
                  s = r.getSymbols(), o = function (t) {
                    if (!("visualVariables" in t)) return 0;
                    if (!t.hasVisualVariables("size")) return 0;
                    var e = t.getVisualVariablesForType("size");
                    if (!e[0]) return 0;
                    var r = e[0];
                    return "stops" === r.transformationType ? r.stops.map(function (t) {
                      return t.size;
                    }).reduce(h, 0) : "clamped-linear" === r.transformationType ? "number" == typeof r.maxSize ? r.maxSize : r.maxSize.stops.map(function (t) {
                      return t.size;
                    }).reduce(h, 0) : "real-world-size" === r.transformationType ? 30 : void 0;
                  }(r), a = [];
                  _iterator7 = _createForOfIteratorHelper(s);

                  try {
                    for (_iterator7.s(); !(_step7 = _iterator7.n()).done;) {
                      t = _step7.value;
                      a.push(l(t, o));
                    }
                  } catch (err) {
                    _iterator7.e(err);
                  } finally {
                    _iterator7.f();
                  }

                  _context39.next = 13;
                  return Object(_core_promiseUtils_js__WEBPACK_IMPORTED_MODULE_0__["all"])(a);

                case 13:
                  c = _context39.sent;
                  return _context39.abrupt("return", Object(_core_screenUtils_js__WEBPACK_IMPORTED_MODULE_1__["pt2px"])(c.reduce(h, 0)));

                case 15:
                case "end":
                  return _context39.stop();
              }
            }
          }, _callee39);
        }));
        return _a.apply(this, arguments);
      }

      var c = [0, 0, 0, 0];

      function m(t, e) {
        return null == t ? e : t;
      }

      var u = {
        sdf: !0,
        code: 99,
        metrics: _engine_webgl_definitions_js__WEBPACK_IMPORTED_MODULE_2__["AVERAGE_GLYPH_MOSAIC_ITEM"].metrics,
        rect: new _symbols_cim_Rect_js__WEBPACK_IMPORTED_MODULE_3__["default"](0, 0, 24, 24),
        page: 0,
        textureBinding: 2
      };

      function p(_x50, _x51) {
        return _p3.apply(this, arguments);
      }

      function _p3() {
        _p3 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee40(t, e) {
          var r, _r3, _i3, n, _e20, _r4, _i4, _n7, _o2, _r5, _i6, _e21;

          return regeneratorRuntime.wrap(function _callee40$(_context40) {
            while (1) {
              switch (_context40.prev = _context40.next) {
                case 0:
                  if (!("simple-marker" === t.type)) {
                    _context40.next = 3;
                    break;
                  }

                  r = Math.max(m(t.size, 12), e);
                  return _context40.abrupt("return", f(t) + .707 * r);

                case 3:
                  if (!("picture-marker" === t.type)) {
                    _context40.next = 6;
                    break;
                  }

                  _r3 = Math.max(m(t.height, 12), e), _i3 = m(t.width, 12) * (_r3 / m(t.height, 12)) / 2, n = _r3 / 2;
                  return _context40.abrupt("return", f(t) + Math.sqrt(_i3 * _i3 + n * n));

                case 6:
                  if (!("text" === t.type)) {
                    _context40.next = 11;
                    break;
                  }

                  _e20 = function (t) {
                    var e = t.text && t.text.length;
                    if (!e) return {
                      glyphMosaicItems: [u]
                    };
                    var r = [];

                    for (var _i5 = 0; _i5 < e; _i5++) {
                      r.push(_objectSpread(_objectSpread({}, u), {}, {
                        code: t.text.charCodeAt(_i5)
                      }));
                    }

                    return {
                      glyphMosaicItems: r
                    };
                  }(t);

                  Object(_graphics_graphicsUtils_js__WEBPACK_IMPORTED_MODULE_5__["getTextSymbolSize"])(c, t.toJSON(), _e20);
                  _r4 = Math.abs(c[0]), _i4 = Math.abs(c[1]), _n7 = c[2], _o2 = c[3];
                  return _context40.abrupt("return", Math.max(_r4, _i4) + Math.max(_n7, _o2));

                case 11:
                  if (!("simple-line" === t.type)) {
                    _context40.next = 14;
                    break;
                  }

                  _r5 = t, _i6 = Math.max(m(_r5.width, .75), e) / 2;
                  return _context40.abrupt("return", _r5.marker ? Math.max(6 * _r5.width, 2 * e) : _i6);

                case 14:
                  if (!("simple-fill" === t.type || "picture-fill" === t.type)) {
                    _context40.next = 16;
                    break;
                  }

                  return _context40.abrupt("return", Math.max(function (t, e) {
                    return null == t.outline ? e : m(t.outline.width, e);
                  }(t, 0), e) / 2);

                case 16:
                  if (!("cim" === t.type)) {
                    _context40.next = 19;
                    break;
                  }

                  _e21 = _symbols_cim_CIMSymbolHelper_js__WEBPACK_IMPORTED_MODULE_4__["CIMSymbolHelper"].getEnvelope(t.data);
                  return _context40.abrupt("return", _e21 ? Math.sqrt(_e21.width * _e21.width + _e21.height * _e21.height) : 0);

                case 19:
                  if (!("web-style" === t.type)) {
                    _context40.next = 28;
                    break;
                  }

                  _context40.t1 = p;
                  _context40.next = 23;
                  return t.fetchCIMSymbol();

                case 23:
                  _context40.t2 = _context40.sent;
                  _context40.t3 = e;
                  _context40.t0 = (0, _context40.t1)(_context40.t2, _context40.t3);
                  _context40.next = 29;
                  break;

                case 28:
                  _context40.t0 = 0;

                case 29:
                  return _context40.abrupt("return", _context40.t0);

                case 30:
                case "end":
                  return _context40.stop();
              }
            }
          }, _callee40);
        }));
        return _p3.apply(this, arguments);
      }

      function l(_x52, _x53) {
        return _l2.apply(this, arguments);
      }

      function _l2() {
        _l2 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee41(t, e) {
          return regeneratorRuntime.wrap(function _callee41$(_context41) {
            while (1) {
              switch (_context41.prev = _context41.next) {
                case 0:
                  if (!function (t) {
                    return t.type in o;
                  }(t)) {
                    _context41.next = 8;
                    break;
                  }

                  _context41.t1 = Math;
                  _context41.next = 4;
                  return p(t, e);

                case 4:
                  _context41.t2 = _context41.sent;
                  _context41.t0 = _context41.t1.min.call(_context41.t1, _context41.t2, 75);
                  _context41.next = 9;
                  break;

                case 8:
                  _context41.t0 = 0;

                case 9:
                  return _context41.abrupt("return", _context41.t0);

                case 10:
                case "end":
                  return _context41.stop();
              }
            }
          }, _callee41);
        }));
        return _l2.apply(this, arguments);
      }

      function f(t) {
        var e = m(t.xoffset, 0),
            r = m(t.yoffset, 0);
        return Math.sqrt(e * e + r * r);
      }

      function h(t, e) {
        return Math.max(t, e);
      }
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
    "pZs+":
    /*!******************************************************************!*\
      !*** ./node_modules/@arcgis/core/views/2d/tiling/TileManager.js ***!
      \******************************************************************/

    /*! exports provided: TileManager */

    /***/
    function pZs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "TileManager", function () {
        return l;
      });
      /* harmony import */


      var _core_maybe_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ../../../core/maybe.js */
      "srIe");
      /* harmony import */


      var _TileKey_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./TileKey.js */
      "rlSK");
      /* harmony import */


      var _TileCoverage_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./TileCoverage.js */
      "umoc");
      /*
      All material copyright ESRI, All Rights Reserved, unless otherwise specified.
      See https://js.arcgis.com/4.18/esri/copyright.txt for details.
      */


      var l = /*#__PURE__*/function () {
        function l(e) {
          _classCallCheck(this, l);

          this._tiles = new Map(), this.buffer = 0, this.acquireTile = e.acquireTile, this.releaseTile = e.releaseTile, this.tileInfoView = e.tileInfoView, this.buffer = e.buffer;
        }

        _createClass(l, [{
          key: "destroy",
          value: function destroy() {}
        }, {
          key: "clear",
          value: function clear() {
            var _this15 = this;

            this._tiles.forEach(function (e) {
              return _this15._releaseTile(e);
            });
          }
        }, {
          key: "tileKeys",
          value: function tileKeys() {
            var e = [];
            return this._tiles.forEach(function (i, t) {
              return e.push(t);
            }), e;
          }
        }, {
          key: "update",
          value: function update(e) {
            var _this16 = this;

            var _l3 = this.tileInfoView.getTileCoverage(e.state, this.buffer, "closest"),
                s = _l3.spans,
                r = _l3.lodInfo,
                a = r.level,
                d = [],
                o = [],
                h = new Set(),
                n = new Set();

            var _iterator8 = _createForOfIteratorHelper(s),
                _step8;

            try {
              for (_iterator8.s(); !(_step8 = _iterator8.n()).done;) {
                var _step8$value = _step8.value,
                    _e22 = _step8$value.row,
                    t = _step8$value.colFrom,
                    _l9 = _step8$value.colTo;

                for (var _s3 = t; _s3 <= _l9; _s3++) {
                  var _t12 = _TileKey_js__WEBPACK_IMPORTED_MODULE_1__["default"].getId(a, _e22, r.normalizeCol(_s3), r.getWorldForColumn(_s3)),
                      _l10 = this._getOrAcquireTile(d, _t12);

                  h.add(_t12), _l10.isReady ? _l10.visible = !0 : n.add(_l10.key);
                }
              }
            } catch (err) {
              _iterator8.e(err);
            } finally {
              _iterator8.f();
            }

            n.forEach(function (e) {
              return _this16._addPlaceholders(h, e);
            }), this._tiles.forEach(function (e) {
              h.has(e.key.id) || (o.push(e.key.id), _this16._releaseTile(e));
            }), _TileCoverage_js__WEBPACK_IMPORTED_MODULE_2__["default"].pool.release(_l3);
            return {
              hasMissingTiles: n.size > 0,
              added: d,
              removed: o
            };
          }
        }, {
          key: "_getOrAcquireTile",
          value: function _getOrAcquireTile(e, t) {
            if (!this._tiles.has(t)) {
              var _l11 = this.acquireTile(new _TileKey_js__WEBPACK_IMPORTED_MODULE_1__["default"](t));

              e.push(t), this._tiles.set(t, _l11), _l11.visible = !1;
            }

            return this._tiles.get(t);
          }
        }, {
          key: "_getTile",
          value: function _getTile(e) {
            return this._tiles.get(e);
          }
        }, {
          key: "_releaseTile",
          value: function _releaseTile(e) {
            this._tiles["delete"](e.key.id), this.releaseTile(e);
          }
        }, {
          key: "_addPlaceholders",
          value: function _addPlaceholders(e, i) {
            var t = this._addPlaceholderChildren(e, i);

            if (!(Math.abs(1 - t) < 1e-6)) {
              if (!this._addPlaceholderParent(e, i)) {
                this._getTile(i.id).visible = !0;
              }
            }
          }
        }, {
          key: "_addPlaceholderChildren",
          value: function _addPlaceholderChildren(e, i) {
            var _this17 = this;

            var t = 0;
            return this._tiles.forEach(function (_l7) {
              t += _this17._addPlaceholderChild(e, _l7, i);
            }), t;
          }
        }, {
          key: "_addPlaceholderChild",
          value: function _addPlaceholderChild(e, i, t) {
            if (i.key.level <= t.level || !i.hasData || !t.contains(i.key)) return 0;
            i.visible = !0, e.add(i.key.id);
            return 1 / (1 << 2 * (i.key.level - t.level));
          }
        }, {
          key: "_addPlaceholderParent",
          value: function _addPlaceholderParent(i, t) {
            var _l8 = t.getParentKey(),
                s = 0,
                r = null;

            for (; Object(_core_maybe_js__WEBPACK_IMPORTED_MODULE_0__["isSome"])(_l8);) {
              if (i.has(_l8.id)) return !0;

              var e = this._getTile(_l8.id);

              if (null != e && e.isReady) return e.visible = !0, i.add(e.key.id), !0;
              null != e && e.hasData && e.patchCount > s && (s = e.patchCount, r = e), _l8 = _l8.getParentKey();
            }

            return !!r && (r.visible = !0, i.add(r.key.id), !0);
          }
        }]);

        return l;
      }();
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


      function i(_x54) {
        return _i7.apply(this, arguments);
      }

      function _i7() {
        _i7 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee42(i) {
          var d,
              o,
              s,
              u,
              a,
              n,
              f,
              r,
              m,
              _args42 = arguments;
          return regeneratorRuntime.wrap(function _callee42$(_context42) {
            while (1) {
              switch (_context42.prev = _context42.next) {
                case 0:
                  d = _args42.length > 1 && _args42[1] !== undefined ? _args42[1] : i.popupTemplate;

                  if (Object(_core_maybe_js__WEBPACK_IMPORTED_MODULE_0__["isSome"])(d)) {
                    _context42.next = 3;
                    break;
                  }

                  return _context42.abrupt("return", []);

                case 3:
                  _context42.next = 5;
                  return d.getRequiredFields(i.fields);

                case 5:
                  o = _context42.sent;
                  s = d.lastEditInfoEnabled;
                  u = i.objectIdField;
                  a = i.typeIdField;
                  n = i.globalIdField;
                  f = i.relationships;

                  if (!o.includes("*")) {
                    _context42.next = 13;
                    break;
                  }

                  return _context42.abrupt("return", ["*"]);

                case 13:
                  if (!s) {
                    _context42.next = 19;
                    break;
                  }

                  _context42.next = 16;
                  return Object(_layers_support_fieldUtils_js__WEBPACK_IMPORTED_MODULE_1__["getFeatureEditFields"])(i);

                case 16:
                  _context42.t0 = _context42.sent;
                  _context42.next = 20;
                  break;

                case 19:
                  _context42.t0 = [];

                case 20:
                  r = _context42.t0;
                  m = Object(_layers_support_fieldUtils_js__WEBPACK_IMPORTED_MODULE_1__["fixFields"])(i.fields, [].concat(_toConsumableArray(o), _toConsumableArray(r)));
                  return _context42.abrupt("return", (a && m.push(a), m && u && Object(_layers_support_fieldUtils_js__WEBPACK_IMPORTED_MODULE_1__["hasField"])(i.fields, u) && -1 === m.indexOf(u) && m.push(u), m && n && Object(_layers_support_fieldUtils_js__WEBPACK_IMPORTED_MODULE_1__["hasField"])(i.fields, n) && -1 === m.indexOf(n) && m.push(n), f && f.forEach(function (e) {
                    var p = e.keyField;
                    m && p && Object(_layers_support_fieldUtils_js__WEBPACK_IMPORTED_MODULE_1__["hasField"])(i.fields, p) && -1 === m.indexOf(p) && m.push(p);
                  }), m));

                case 23:
                case "end":
                  return _context42.stop();
              }
            }
          }, _callee42);
        }));
        return _i7.apply(this, arguments);
      }

      function d(p, l) {
        return p.popupTemplate ? p.popupTemplate : Object(_core_maybe_js__WEBPACK_IMPORTED_MODULE_0__["isSome"])(l) && l.defaultPopupTemplateEnabled && Object(_core_maybe_js__WEBPACK_IMPORTED_MODULE_0__["isSome"])(p.defaultPopupTemplate) ? p.defaultPopupTemplate : null;
      }
      /***/

    },

    /***/
    "v2bT":
    /*!*******************************************************!*\
      !*** ./node_modules/@arcgis/core/AggregateGraphic.js ***!
      \*******************************************************/

    /*! exports provided: default */

    /***/
    function v2bT(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony import */


      var _chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ./chunks/tslib.es6.js */
      "pO5D");
      /* harmony import */


      var _core_has_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./core/has.js */
      "wSAH");
      /* harmony import */


      var _core_Logger_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./core/Logger.js */
      "6S2I");
      /* harmony import */


      var _core_accessorSupport_ensureType_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./core/accessorSupport/ensureType.js */
      "zqDF");
      /* harmony import */


      var _core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ./core/accessorSupport/decorators/property.js */
      "WbKI");
      /* harmony import */


      var _core_accessorSupport_decorators_subclass_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ./core/accessorSupport/decorators/subclass.js */
      "04ZG");
      /* harmony import */


      var _core_urlUtils_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ./core/urlUtils.js */
      "4EHJ");
      /* harmony import */


      var _core_uuid_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! ./core/uuid.js */
      "ju1D");
      /* harmony import */


      var _portal_support_resourceExtension_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! ./portal/support/resourceExtension.js */
      "9AIY");
      /* harmony import */


      var _Graphic_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! ./Graphic.js */
      "jWBI");
      /*
      All material copyright ESRI, All Rights Reserved, unless otherwise specified.
      See https://js.arcgis.com/4.18/esri/copyright.txt for details.
      */


      var p;

      var s = p = /*#__PURE__*/function (_Graphic_js__WEBPACK_) {
        _inherits(_class, _Graphic_js__WEBPACK_);

        var _super7 = _createSuper(_class);

        function _class() {
          var _this18;

          _classCallCheck(this, _class);

          _this18 = _super7.apply(this, arguments), _this18.isAggregate = !0;
          return _this18;
        }

        _createClass(_class, [{
          key: "getEffectivePopupTemplate",
          value: function getEffectivePopupTemplate() {
            var e = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : !1;
            if (this.popupTemplate) return this.popupTemplate;
            var r = this.sourceLayer && this.sourceLayer.featureReduction;
            return r && "popupTemplate" in r && r.popupEnabled ? r.popupTemplate : null;
          }
        }, {
          key: "getObjectId",
          value: function getObjectId() {
            return this.objectId;
          }
        }, {
          key: "clone",
          value: function clone() {
            return new p(_objectSpread({
              objectId: this.objectId
            }, this.cloneProperties()));
          }
        }]);

        return _class;
      }(_Graphic_js__WEBPACK_IMPORTED_MODULE_9__["default"]);

      Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_4__["property"])({
        type: Boolean
      })], s.prototype, "isAggregate", void 0), Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_4__["property"])({
        type: Number,
        json: {
          read: !0
        }
      })], s.prototype, "objectId", void 0), s = p = Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_subclass_js__WEBPACK_IMPORTED_MODULE_5__["subclass"])("esri.AggregateGraphic")], s);
      var c = s;
      /* harmony default export */

      __webpack_exports__["default"] = c;
      /***/
    },

    /***/
    "zrCg":
    /*!********************************************************************!*\
      !*** ./node_modules/@arcgis/core/views/layers/FeatureLayerView.js ***!
      \********************************************************************/

    /*! exports provided: FeatureLayerView */

    /***/
    function zrCg(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "FeatureLayerView", function () {
        return R;
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


      var _layers_support_fieldUtils_js__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
      /*! ../../layers/support/fieldUtils.js */
      "wdpY");
      /* harmony import */


      var _core_watchUtils_js__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(
      /*! ../../core/watchUtils.js */
      "N5XI");
      /* harmony import */


      var _layers_support_commonProperties_js__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(
      /*! ../../layers/support/commonProperties.js */
      "IvSi");
      /* harmony import */


      var _tasks_support_Query_js__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(
      /*! ../../tasks/support/Query.js */
      "xk++");
      /* harmony import */


      var _support_FeatureFilter_js__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(
      /*! ./support/FeatureFilter.js */
      "M8lB");
      /* harmony import */


      var _support_FeatureEffect_js__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(
      /*! ./support/FeatureEffect.js */
      "4P1v");
      /* harmony import */


      var _support_popupUtils_js__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(
      /*! ./support/popupUtils.js */
      "rXMu");
      /*
      All material copyright ESRI, All Rights Reserved, unless otherwise specified.
      See https://js.arcgis.com/4.18/esri/copyright.txt for details.
      */


      var q = _core_Logger_js__WEBPACK_IMPORTED_MODULE_3__["default"].getLogger("esri.views.layers.FeatureLayerView"),
          R = function R(r) {
        var R = /*#__PURE__*/function (_r6) {
          _inherits(R, _r6);

          var _super8 = _createSuper(R);

          function R() {
            var _this19;

            _classCallCheck(this, R);

            for (var _len = arguments.length, e = new Array(_len), _key = 0; _key < _len; _key++) {
              e[_key] = arguments[_key];
            }

            _this19 = _super8.call.apply(_super8, [this].concat(e)), _this19._updatingRequiredFieldsPromise = null, _this19.effect = null, _this19.filter = null, _this19.timeExtent = null, _this19.layer = null, _this19.requiredFields = [], _this19.view = null;
            return _this19;
          }

          _createClass(R, [{
            key: "initialize",
            value: function initialize() {
              var _this20 = this;

              Object(_core_watchUtils_js__WEBPACK_IMPORTED_MODULE_14__["init"])(this, ["layer.renderer", "layer.labelingInfo", "layer.elevationInfo.featureExpressionInfo", "layer.displayField", "filter", "effect", "layer.timeInfo", "timeExtent"], function () {
                return _this20._handleRequiredFieldsChange();
              }, !0);
            }
          }, {
            key: "availableFields",
            get: function get() {
              var e = this.layer,
                  t = this.layer.fields,
                  r = this.requiredFields;
              return "outFields" in e && e.outFields ? Object(_layers_support_fieldUtils_js__WEBPACK_IMPORTED_MODULE_13__["fixFields"])(t, [].concat(_toConsumableArray(Object(_layers_support_fieldUtils_js__WEBPACK_IMPORTED_MODULE_13__["unpackFieldNames"])(t, e.outFields)), _toConsumableArray(r))) : Object(_layers_support_fieldUtils_js__WEBPACK_IMPORTED_MODULE_13__["fixFields"])(t, r);
            }
          }, {
            key: "maximumNumberOfFeatures",
            get: function get() {
              return 0;
            },
            set: function set(e) {
              q.error("#maximumNumberOfFeatures=", "Setting maximum number of features is not supported");
            }
          }, {
            key: "maximumNumberOfFeaturesExceeded",
            get: function get() {
              return !1;
            }
          }, {
            key: "highlight",
            value: function highlight(e) {
              throw new Error("missing implementation");
            }
          }, {
            key: "createQuery",
            value: function createQuery() {
              var e = {
                outFields: ["*"],
                returnGeometry: !0,
                outSpatialReference: this.view.spatialReference
              },
                  r = Object(_core_maybe_js__WEBPACK_IMPORTED_MODULE_2__["isSome"])(this.filter) ? this.filter.createQuery(e) : new _tasks_support_Query_js__WEBPACK_IMPORTED_MODULE_16__["default"](e);
              return Object(_core_maybe_js__WEBPACK_IMPORTED_MODULE_2__["isSome"])(this.timeExtent) && (r.timeExtent = Object(_core_maybe_js__WEBPACK_IMPORTED_MODULE_2__["isSome"])(r.timeExtent) ? r.timeExtent.intersection(this.timeExtent) : this.timeExtent.clone()), r;
            }
          }, {
            key: "queryFeatures",
            value: function queryFeatures(e, t) {
              throw new Error("missing implementation");
            }
          }, {
            key: "queryObjectIds",
            value: function queryObjectIds(e, t) {
              throw new Error("missing implementation");
            }
          }, {
            key: "queryFeatureCount",
            value: function queryFeatureCount(e, t) {
              throw new Error("missing implementation");
            }
          }, {
            key: "queryExtent",
            value: function queryExtent(e, t) {
              throw new Error("missing implementation");
            }
          }, {
            key: "_loadArcadeModules",
            value: function _loadArcadeModules(e) {
              if (e.get("expressionInfos.length")) return Object(_support_arcadeOnDemand_js__WEBPACK_IMPORTED_MODULE_12__["loadArcade"])();
            }
          }, {
            key: "_handleRequiredFieldsChange",
            value: function _handleRequiredFieldsChange() {
              var _this21 = this;

              var e = this._updateRequiredFields();

              this._set("_updatingRequiredFieldsPromise", e), e.then(function () {
                _this21._updatingRequiredFieldsPromise === e && _this21._set("_updatingRequiredFieldsPromise", null);
              });
            }
          }, {
            key: "_updateRequiredFields",
            value: function () {
              var _updateRequiredFields2 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee43() {
                var e, r, _this$layer, i, s, o, l, n, u, p, _iterator9, _step9, _e23, F;

                return regeneratorRuntime.wrap(function _callee43$(_context43) {
                  while (1) {
                    switch (_context43.prev = _context43.next) {
                      case 0:
                        if (!(!this.layer || !this.view)) {
                          _context43.next = 2;
                          break;
                        }

                        return _context43.abrupt("return");

                      case 2:
                        e = "3d" === this.view.type;
                        r = this.layer;
                        _this$layer = this.layer;
                        i = _this$layer.fields;
                        s = _this$layer.objectIdField;
                        o = _this$layer.renderer;
                        l = _this$layer.displayField;
                        n = r.featureReduction;
                        u = new Set();
                        _context43.next = 13;
                        return Object(_core_promiseUtils_js__WEBPACK_IMPORTED_MODULE_11__["eachAlways"])([o ? o.collectRequiredFields(u, i) : null, Object(_layers_support_fieldUtils_js__WEBPACK_IMPORTED_MODULE_13__["collectLabelingFields"])(u, r), e ? Object(_layers_support_fieldUtils_js__WEBPACK_IMPORTED_MODULE_13__["collectElevationFields"])(u, r) : null, Object(_core_maybe_js__WEBPACK_IMPORTED_MODULE_2__["isSome"])(this.filter) ? Object(_layers_support_fieldUtils_js__WEBPACK_IMPORTED_MODULE_13__["collectFilterFields"])(u, r, this.filter) : null, this.effect ? Object(_layers_support_fieldUtils_js__WEBPACK_IMPORTED_MODULE_13__["collectFilterFields"])(u, r, this.effect.filter) : null, n ? Object(_layers_support_fieldUtils_js__WEBPACK_IMPORTED_MODULE_13__["collectFeatureReductionFields"])(u, r, n) : null]);

                      case 13:
                        p = _context43.sent;
                        r.timeInfo && this.timeExtent && Object(_layers_support_fieldUtils_js__WEBPACK_IMPORTED_MODULE_13__["collectFields"])(u, r.fields, [r.timeInfo.startField, r.timeInfo.endField]);
                        _iterator9 = _createForOfIteratorHelper(p);

                        try {
                          for (_iterator9.s(); !(_step9 = _iterator9.n()).done;) {
                            _e23 = _step9.value;
                            _e23.error && q.error(_e23.error);
                          }
                        } catch (err) {
                          _iterator9.e(err);
                        } finally {
                          _iterator9.f();
                        }

                        Object(_layers_support_fieldUtils_js__WEBPACK_IMPORTED_MODULE_13__["collectField"])(u, i, s), e && l && Object(_layers_support_fieldUtils_js__WEBPACK_IMPORTED_MODULE_13__["collectField"])(u, i, l);
                        F = Array.from(u).sort();

                        this._set("requiredFields", F);

                      case 20:
                      case "end":
                        return _context43.stop();
                    }
                  }
                }, _callee43, this);
              }));

              function _updateRequiredFields() {
                return _updateRequiredFields2.apply(this, arguments);
              }

              return _updateRequiredFields;
            }()
          }, {
            key: "validateFetchPopupFeatures",
            value: function validateFetchPopupFeatures(e) {
              var t = this.layer,
                  r = this.layer.popupEnabled;
              if (!r) return new _core_Error_js__WEBPACK_IMPORTED_MODULE_7__["default"]("featurelayerview:fetchPopupFeatures", "Popups are disabled", {
                layer: t
              });
              return Object(_support_popupUtils_js__WEBPACK_IMPORTED_MODULE_19__["getFetchPopupTemplate"])(this.layer, e) ? void 0 : new _core_Error_js__WEBPACK_IMPORTED_MODULE_7__["default"]("featurelayerview:fetchPopupFeatures", "Layer does not define a popup template", {
                layer: t
              });
            }
          }, {
            key: "fetchClientPopupFeatures",
            value: function () {
              var _fetchClientPopupFeatures = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee44(e) {
                var r, i, s, o, a, n, u, m, d, _iterator10, _step10, _e24;

                return regeneratorRuntime.wrap(function _callee44$(_context44) {
                  while (1) {
                    switch (_context44.prev = _context44.next) {
                      case 0:
                        r = Object(_core_maybe_js__WEBPACK_IMPORTED_MODULE_2__["isSome"])(e) ? e.clientGraphics : null;

                        if (!(!r || 0 === r.length)) {
                          _context44.next = 3;
                          break;
                        }

                        return _context44.abrupt("return", Object(_core_promiseUtils_js__WEBPACK_IMPORTED_MODULE_11__["resolve"])([]));

                      case 3:
                        i = [], s = [], o = this.layer, a = Object(_support_popupUtils_js__WEBPACK_IMPORTED_MODULE_19__["getFetchPopupTemplate"])(o, e);

                        if (Object(_core_maybe_js__WEBPACK_IMPORTED_MODULE_2__["isSome"])(a)) {
                          _context44.next = 6;
                          break;
                        }

                        return _context44.abrupt("return", Object(_core_promiseUtils_js__WEBPACK_IMPORTED_MODULE_11__["resolve"])([]));

                      case 6:
                        _context44.next = 8;
                        return this._loadArcadeModules(a);

                      case 8:
                        n = _context44.sent;
                        u = n && n.arcadeUtils.hasGeometryOperations(a);
                        _context44.next = 12;
                        return this.createPopupQuery(e);

                      case 12:
                        m = _context44.sent;
                        d = Object(_layers_support_fieldUtils_js__WEBPACK_IMPORTED_MODULE_13__["unpackFieldNames"])(o.fields, m.outFields);
                        _iterator10 = _createForOfIteratorHelper(r);

                        try {
                          for (_iterator10.s(); !(_step10 = _iterator10.n()).done;) {
                            _e24 = _step10.value;
                            u || !Object(_layers_support_fieldUtils_js__WEBPACK_IMPORTED_MODULE_13__["featureHasFields"])(d, _e24) ? s.push(_e24) : i.push(_e24);
                          }
                        } catch (err) {
                          _iterator10.e(err);
                        } finally {
                          _iterator10.f();
                        }

                        return _context44.abrupt("return", "stream" === o.type || 0 === s.length ? Object(_core_promiseUtils_js__WEBPACK_IMPORTED_MODULE_11__["resolve"])(i) : (m.objectIds = s.map(function (e) {
                          return e.attributes[o.objectIdField];
                        }), o.queryFeatures(m).then(function (e) {
                          return i.concat(e.features);
                        })["catch"](function () {
                          return s;
                        })));

                      case 17:
                      case "end":
                        return _context44.stop();
                    }
                  }
                }, _callee44, this);
              }));

              function fetchClientPopupFeatures(_x55) {
                return _fetchClientPopupFeatures.apply(this, arguments);
              }

              return fetchClientPopupFeatures;
            }()
          }, {
            key: "createPopupQuery",
            value: function () {
              var _createPopupQuery = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee45(e) {
                var r, i, s, o, a, l;
                return regeneratorRuntime.wrap(function _callee45$(_context45) {
                  while (1) {
                    switch (_context45.prev = _context45.next) {
                      case 0:
                        r = this.layer;
                        i = r.createQuery();
                        s = Object(_support_popupUtils_js__WEBPACK_IMPORTED_MODULE_19__["getFetchPopupTemplate"])(r, e);
                        _context45.t0 = Object(_core_maybe_js__WEBPACK_IMPORTED_MODULE_2__["isSome"])(s);

                        if (!_context45.t0) {
                          _context45.next = 8;
                          break;
                        }

                        _context45.next = 7;
                        return this._loadArcadeModules(s);

                      case 7:
                        _context45.t0 = _context45.sent;

                      case 8:
                        o = _context45.t0;
                        a = Object(_core_maybe_js__WEBPACK_IMPORTED_MODULE_2__["isSome"])(s) && o && o.arcadeUtils.hasGeometryOperations(s);
                        l = !("point" !== r.geometryType && !a);
                        i.returnGeometry = l;
                        i.returnZ = l;
                        i.returnM = l;
                        _context45.next = 16;
                        return Object(_support_popupUtils_js__WEBPACK_IMPORTED_MODULE_19__["getRequiredFields"])(this.layer, s);

                      case 16:
                        i.outFields = _context45.sent;
                        i.outSpatialReference = this.view.spatialReference;
                        return _context45.abrupt("return", i);

                      case 19:
                      case "end":
                        return _context45.stop();
                    }
                  }
                }, _callee45, this);
              }));

              function createPopupQuery(_x56) {
                return _createPopupQuery.apply(this, arguments);
              }

              return createPopupQuery;
            }()
          }, {
            key: "canResume",
            value: function canResume() {
              return !!_get(_getPrototypeOf(R.prototype), "canResume", this).call(this) && (!Object(_core_maybe_js__WEBPACK_IMPORTED_MODULE_2__["isSome"])(this.timeExtent) || !this.timeExtent.isEmpty);
            }
          }]);

          return R;
        }(r);

        return Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_5__["property"])()], R.prototype, "_updatingRequiredFieldsPromise", void 0), Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_5__["property"])({
          readOnly: !0,
          dependsOn: ["layer.outFields?", "requiredFields"]
        })], R.prototype, "availableFields", null), Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_5__["property"])({
          type: _support_FeatureEffect_js__WEBPACK_IMPORTED_MODULE_18__["default"]
        })], R.prototype, "effect", void 0), Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_5__["property"])({
          type: _support_FeatureFilter_js__WEBPACK_IMPORTED_MODULE_17__["default"]
        })], R.prototype, "filter", void 0), Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_5__["property"])(_layers_support_commonProperties_js__WEBPACK_IMPORTED_MODULE_15__["combinedViewLayerTimeExtentProperty"])], R.prototype, "timeExtent", void 0), Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_5__["property"])()], R.prototype, "layer", void 0), Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_5__["property"])({
          type: Number
        })], R.prototype, "maximumNumberOfFeatures", null), Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_5__["property"])({
          readOnly: !0,
          type: Boolean
        })], R.prototype, "maximumNumberOfFeaturesExceeded", null), Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_5__["property"])({
          readOnly: !0
        })], R.prototype, "requiredFields", void 0), Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_5__["property"])({
          dependsOn: ["timeExtent"]
        })], R.prototype, "suspended", void 0), Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_5__["property"])()], R.prototype, "view", void 0), R = Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_subclass_js__WEBPACK_IMPORTED_MODULE_6__["subclass"])("esri.views.layers.FeatureLayerView")], R), R;
      };
      /***/

    }
  }]);
})();
//# sourceMappingURL=default~layers-FeatureLayerView2D-js~layers-StreamLayerView2D-js-es5.js.map