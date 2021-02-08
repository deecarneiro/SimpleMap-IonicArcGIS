(function () {
  function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }

  function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

  function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && Symbol.iterator in Object(iter)) return Array.from(iter); }

  function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }

  function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

  function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

  function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

  function _createForOfIteratorHelper(o, allowArrayLike) { var it; if (typeof Symbol === "undefined" || o[Symbol.iterator] == null) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e3) { throw _e3; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = o[Symbol.iterator](); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e4) { didErr = true; err = _e4; }, f: function f() { try { if (!normalCompletion && it["return"] != null) it["return"](); } finally { if (didErr) throw err; } } }; }

  function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

  function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

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

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["default~BingMapsLayer-js~BuildingSceneLayer-js~CSVLayer-js~ElevationLayer-js~FeatureLayer-js~GeoRSSL~17f7a7e8"], {
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
    "5pQd":
    /*!******************************************************************!*\
      !*** ./node_modules/@arcgis/core/core/MultiOriginJSONSupport.js ***!
      \******************************************************************/

    /*! exports provided: MultiOriginJSONMixin, MultiOriginJSONSupport */

    /***/
    function pQd(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "MultiOriginJSONMixin", function () {
        return l;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "MultiOriginJSONSupport", function () {
        return O;
      });
      /* harmony import */


      var _chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ../chunks/tslib.es6.js */
      "pO5D");
      /* harmony import */


      var _accessorSupport_utils_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./accessorSupport/utils.js */
      "TDcG");
      /* harmony import */


      var _accessorSupport_decorators_subclass_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./accessorSupport/decorators/subclass.js */
      "04ZG");
      /* harmony import */


      var _accessorSupport_PropertyOrigin_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./accessorSupport/PropertyOrigin.js */
      "ku/q");
      /* harmony import */


      var _Accessor_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ./Accessor.js */
      "/CmD");
      /* harmony import */


      var _accessorSupport_write_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ./accessorSupport/write.js */
      "xHih");
      /* harmony import */


      var _ReadOnlyMultiOriginJSONSupport_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ./ReadOnlyMultiOriginJSONSupport.js */
      "6xK3");
      /*
      All material copyright ESRI, All Rights Reserved, unless otherwise specified.
      See https://js.arcgis.com/4.18/esri/copyright.txt for details.
      */


      var p = function p(i) {
        var n = /*#__PURE__*/function (_i) {
          _inherits(n, _i);

          var _super3 = _createSuper(n);

          function n() {
            _classCallCheck(this, n);

            for (var _len = arguments.length, r = new Array(_len), _key = 0; _key < _len; _key++) {
              r[_key] = arguments[_key];
            }

            return _super3.call.apply(_super3, [this].concat(r));
          }

          _createClass(n, [{
            key: "clear",
            value: function clear(r) {
              var t = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : "user";
              return u(this)["delete"](r, Object(_accessorSupport_PropertyOrigin_js__WEBPACK_IMPORTED_MODULE_3__["nameToId"])(t));
            }
          }, {
            key: "write",
            value: function write() {
              var r = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
              var t = arguments.length > 1 ? arguments[1] : undefined;
              return Object(_accessorSupport_write_js__WEBPACK_IMPORTED_MODULE_5__["write"])(this, r = r || {}, t), r;
            }
          }, {
            key: "setAtOrigin",
            value: function setAtOrigin(r, s, o) {
              Object(_accessorSupport_utils_js__WEBPACK_IMPORTED_MODULE_1__["getProperties"])(this).setAtOrigin(r, s, Object(_accessorSupport_PropertyOrigin_js__WEBPACK_IMPORTED_MODULE_3__["nameToId"])(o));
            }
          }, {
            key: "removeOrigin",
            value: function removeOrigin(r) {
              var t = u(this),
                  s = Object(_accessorSupport_PropertyOrigin_js__WEBPACK_IMPORTED_MODULE_3__["nameToId"])(r),
                  o = t.keys(s);

              var _iterator = _createForOfIteratorHelper(o),
                  _step;

              try {
                for (_iterator.s(); !(_step = _iterator.n()).done;) {
                  var _r = _step.value;
                  t.originOf(_r) === s && t.set(_r, t.get(_r, s), 6);
                }
              } catch (err) {
                _iterator.e(err);
              } finally {
                _iterator.f();
              }
            }
          }, {
            key: "updateOrigin",
            value: function updateOrigin(r, t) {
              var s = u(this),
                  i = Object(_accessorSupport_PropertyOrigin_js__WEBPACK_IMPORTED_MODULE_3__["nameToId"])(t),
                  c = this.get(r);

              for (var _t = i + 1; _t < _accessorSupport_PropertyOrigin_js__WEBPACK_IMPORTED_MODULE_3__["OriginIdNum"]; ++_t) {
                s["delete"](r, _t);
              }

              s.set(r, c, i);
            }
          }, {
            key: "toJSON",
            value: function toJSON(r) {
              return this.write({}, r);
            }
          }]);

          return n;
        }(i);

        return n = Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_accessorSupport_decorators_subclass_js__WEBPACK_IMPORTED_MODULE_2__["subclass"])("esri.core.WriteableMultiOriginJSONSupport")], n), n.prototype.toJSON.isDefaultToJSON = !0, n;
      };

      function u(r) {
        return Object(_accessorSupport_utils_js__WEBPACK_IMPORTED_MODULE_1__["getProperties"])(r).store;
      }

      var l = function l(t) {
        var e = /*#__PURE__*/function (_p2) {
          _inherits(e, _p2);

          var _super4 = _createSuper(e);

          function e() {
            _classCallCheck(this, e);

            for (var _len2 = arguments.length, r = new Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
              r[_key2] = arguments[_key2];
            }

            return _super4.call.apply(_super4, [this].concat(r));
          }

          return e;
        }(p(Object(_ReadOnlyMultiOriginJSONSupport_js__WEBPACK_IMPORTED_MODULE_6__["ReadOnlyMultiOriginJSONMixin"])(t)));

        return e = Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_accessorSupport_decorators_subclass_js__WEBPACK_IMPORTED_MODULE_2__["subclass"])("esri.core.MultiOriginJSONSupport")], e), e;
      };

      var O = /*#__PURE__*/function (_l2) {
        _inherits(O, _l2);

        var _super5 = _createSuper(O);

        function O() {
          _classCallCheck(this, O);

          return _super5.apply(this, arguments);
        }

        return O;
      }(l(_Accessor_js__WEBPACK_IMPORTED_MODULE_4__["default"]));

      O = Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_accessorSupport_decorators_subclass_js__WEBPACK_IMPORTED_MODULE_2__["subclass"])("esri.core.MultiOriginJSONSupport")], O);
      /***/
    },

    /***/
    "6xK3":
    /*!**************************************************************************!*\
      !*** ./node_modules/@arcgis/core/core/ReadOnlyMultiOriginJSONSupport.js ***!
      \**************************************************************************/

    /*! exports provided: ReadOnlyMultiOriginJSONMixin, ReadOnlyMultiOriginJSONSupport */

    /***/
    function xK3(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ReadOnlyMultiOriginJSONMixin", function () {
        return a;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ReadOnlyMultiOriginJSONSupport", function () {
        return f;
      });
      /* harmony import */


      var _chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ../chunks/tslib.es6.js */
      "pO5D");
      /* harmony import */


      var _maybe_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./maybe.js */
      "srIe");
      /* harmony import */


      var _accessorSupport_utils_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./accessorSupport/utils.js */
      "TDcG");
      /* harmony import */


      var _accessorSupport_decorators_subclass_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./accessorSupport/decorators/subclass.js */
      "04ZG");
      /* harmony import */


      var _accessorSupport_PropertyOrigin_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ./accessorSupport/PropertyOrigin.js */
      "ku/q");
      /* harmony import */


      var _Accessor_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ./Accessor.js */
      "/CmD");
      /* harmony import */


      var _accessorSupport_read_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ./accessorSupport/read.js */
      "CWQl");
      /* harmony import */


      var _accessorSupport_MultiOriginStore_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! ./accessorSupport/MultiOriginStore.js */
      "SxDd");
      /*
      All material copyright ESRI, All Rights Reserved, unless otherwise specified.
      See https://js.arcgis.com/4.18/esri/copyright.txt for details.
      */


      var a = function a(n) {
        var a = /*#__PURE__*/function (_n) {
          _inherits(a, _n);

          var _super6 = _createSuper(a);

          function a() {
            var _this2;

            _classCallCheck(this, a);

            for (var _len3 = arguments.length, r = new Array(_len3), _key3 = 0; _key3 < _len3; _key3++) {
              r[_key3] = arguments[_key3];
            }

            _this2 = _super6.call.apply(_super6, [this].concat(r));
            var s = Object(_maybe_js__WEBPACK_IMPORTED_MODULE_1__["assumeNonNull"])(Object(_accessorSupport_utils_js__WEBPACK_IMPORTED_MODULE_2__["getProperties"])(_assertThisInitialized(_this2))),
                o = s.metadatas,
                i = s.store,
                n = new _accessorSupport_MultiOriginStore_js__WEBPACK_IMPORTED_MODULE_7__["default"]();
            s.store = n, i.keys().forEach(function (r) {
              n.set(r, i.get(r), 0);
            }), Object.keys(o).forEach(function (r) {
              s.internalGet(r) && n.set(r, s.internalGet(r), 0);
            });
            return _this2;
          }

          _createClass(a, [{
            key: "read",
            value: function read(r, t) {
              Object(_accessorSupport_read_js__WEBPACK_IMPORTED_MODULE_6__["read"])(this, r, t);
            }
          }, {
            key: "getAtOrigin",
            value: function getAtOrigin(r, t) {
              var e = u(this),
                  s = Object(_accessorSupport_PropertyOrigin_js__WEBPACK_IMPORTED_MODULE_4__["nameToId"])(t);
              if ("string" == typeof r) return e.get(r, s);
              var o = {};
              return r.forEach(function (r) {
                o[r] = e.get(r, s);
              }), o;
            }
          }, {
            key: "originOf",
            value: function originOf(r) {
              return Object(_accessorSupport_PropertyOrigin_js__WEBPACK_IMPORTED_MODULE_4__["idToName"])(this.originIdOf(r));
            }
          }, {
            key: "originIdOf",
            value: function originIdOf(r) {
              return u(this).originOf(r);
            }
          }, {
            key: "revert",
            value: function revert(r, t) {
              var s = u(this),
                  o = Object(_accessorSupport_PropertyOrigin_js__WEBPACK_IMPORTED_MODULE_4__["nameToId"])(t),
                  n = Object(_accessorSupport_utils_js__WEBPACK_IMPORTED_MODULE_2__["getProperties"])(this);
              var c;
              c = "string" == typeof r ? "*" === r ? s.keys(o) : [r] : r, c.forEach(function (r) {
                n.propertyInvalidated(r), s.revert(r, o), n.propertyCommitted(r);
              });
            }
          }]);

          return a;
        }(n);

        return a = Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_accessorSupport_decorators_subclass_js__WEBPACK_IMPORTED_MODULE_3__["subclass"])("esri.core.ReadOnlyMultiOriginJSONSupport")], a), a;
      };

      function u(r) {
        return Object(_accessorSupport_utils_js__WEBPACK_IMPORTED_MODULE_2__["getProperties"])(r).store;
      }

      var f = /*#__PURE__*/function (_a) {
        _inherits(f, _a);

        var _super7 = _createSuper(f);

        function f() {
          _classCallCheck(this, f);

          return _super7.apply(this, arguments);
        }

        return f;
      }(a(_Accessor_js__WEBPACK_IMPORTED_MODULE_5__["default"]));

      f = Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_accessorSupport_decorators_subclass_js__WEBPACK_IMPORTED_MODULE_3__["subclass"])("esri.core.ReadOnlyMultiOriginJSONSupport")], f);
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
    "PB1d":
    /*!**********************************************************************!*\
      !*** ./node_modules/@arcgis/core/layers/mixins/operationalLayers.js ***!
      \**********************************************************************/

    /*! exports provided: supportedTypes */

    /***/
    function PB1d(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "supportedTypes", function () {
        return e;
      });
      /*
      All material copyright ESRI, All Rights Reserved, unless otherwise specified.
      See https://js.arcgis.com/4.18/esri/copyright.txt for details.
      */


      var e = {
        "web-scene/operational-layers": {
          ArcGISFeatureLayer: !0,
          ArcGISImageServiceLayer: !0,
          ArcGISMapServiceLayer: !0,
          ArcGISSceneServiceLayer: !0,
          ArcGISTiledElevationServiceLayer: !0,
          ArcGISTiledImageServiceLayer: !0,
          ArcGISTiledMapServiceLayer: !0,
          BuildingSceneLayer: !0,
          GroupLayer: !0,
          IntegratedMeshLayer: !0,
          PointCloudLayer: !0,
          WebTiledLayer: !0,
          CSV: !0,
          VectorTileLayer: !0,
          WMS: !0,
          KML: !0,
          RasterDataLayer: !0
        },
        "web-scene/basemap": {
          ArcGISTiledImageServiceLayer: !0,
          ArcGISTiledMapServiceLayer: !0,
          WebTiledLayer: !0,
          OpenStreetMap: !0,
          VectorTileLayer: !0,
          ArcGISImageServiceLayer: !0,
          WMS: !0,
          ArcGISMapServiceLayer: !0
        },
        "web-scene/ground": {
          ArcGISTiledElevationServiceLayer: !0,
          RasterDataElevationLayer: !0
        },
        "web-map/operational-layers": {
          ArcGISImageServiceLayer: !0,
          ArcGISImageServiceVectorLayer: !0,
          ArcGISMapServiceLayer: !0,
          ArcGISStreamLayer: !0,
          ArcGISTiledImageServiceLayer: !0,
          ArcGISTiledMapServiceLayer: !0,
          ArcGISFeatureLayer: !0,
          BingMapsAerial: !0,
          BingMapsRoad: !0,
          BingMapsHybrid: !0,
          CSV: !0,
          GeoRSS: !0,
          GroupLayer: !0,
          KML: !0,
          VectorTileLayer: !0,
          WFS: !0,
          SubtypeGroupLayer: !0,
          WMS: !0,
          WebTiledLayer: !0
        },
        "web-map/basemap": {
          ArcGISImageServiceLayer: !0,
          ArcGISImageServiceVectorLayer: !0,
          ArcGISMapServiceLayer: !0,
          ArcGISTiledImageServiceLayer: !0,
          ArcGISTiledMapServiceLayer: !0,
          OpenStreetMap: !0,
          VectorTileLayer: !0,
          WMS: !0,
          WebTiledLayer: !0,
          BingMapsAerial: !0,
          BingMapsRoad: !0,
          BingMapsHybrid: !0
        },
        "web-map/tables": {
          ArcGISFeatureLayer: !0
        },
        "portal-item/operational-layers": {
          ArcGISSceneServiceLayer: !0,
          PointCloudLayer: !0,
          BuildingSceneLayer: !0,
          IntegratedMeshLayer: !0
        }
      };
      /***/
    },

    /***/
    "SxDd":
    /*!****************************************************************************!*\
      !*** ./node_modules/@arcgis/core/core/accessorSupport/MultiOriginStore.js ***!
      \****************************************************************************/

    /*! exports provided: default */

    /***/
    function SxDd(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony import */


      var _lang_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ../lang.js */
      "f/qv");
      /* harmony import */


      var _maybe_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ../maybe.js */
      "srIe");
      /* harmony import */


      var _PropertyOrigin_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./PropertyOrigin.js */
      "ku/q");
      /*
      All material copyright ESRI, All Rights Reserved, unless otherwise specified.
      See https://js.arcgis.com/4.18/esri/copyright.txt for details.
      */


      var r = /*#__PURE__*/function () {
        function r() {
          _classCallCheck(this, r);

          this._propertyOriginMap = new Map(), this._originStores = new Array(_PropertyOrigin_js__WEBPACK_IMPORTED_MODULE_2__["OriginIdNum"]), this._values = new Map();
        }

        _createClass(r, [{
          key: "clone",
          value: function clone(s) {
            var _this3 = this;

            var i = new r(),
                o = this._originStores[0];
            o && o.forEach(function (s, e) {
              i.set(e, Object(_lang_js__WEBPACK_IMPORTED_MODULE_0__["clone"])(s), 0);
            });

            var _loop = function _loop(_r6) {
              var e = _this3._originStores[_r6];
              e && e.forEach(function (e, o) {
                s && s.has(o) || i.set(o, Object(_lang_js__WEBPACK_IMPORTED_MODULE_0__["clone"])(e), _r6);
              });
            };

            for (var _r6 = 2; _r6 < _PropertyOrigin_js__WEBPACK_IMPORTED_MODULE_2__["OriginIdNum"]; _r6++) {
              _loop(_r6);
            }

            return i;
          }
        }, {
          key: "get",
          value: function get(t, s) {
            var e = void 0 === s ? this._values : this._originStores[s];
            return e ? e.get(t) : void 0;
          }
        }, {
          key: "keys",
          value: function keys(t) {
            var s = null == t ? this._values : this._originStores[t];
            return s ? _toConsumableArray(s.keys()) : [];
          }
        }, {
          key: "set",
          value: function set(t, e) {
            var _r3 = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 6;

            var i = this._originStores[_r3];

            if (i || (i = new Map(), this._originStores[_r3] = i), i.set(t, e), !this._values.has(t) || Object(_maybe_js__WEBPACK_IMPORTED_MODULE_1__["assumeNonNull"])(this._propertyOriginMap.get(t)) <= _r3) {
              var s = this._values.get(t);

              return this._values.set(t, e), this._propertyOriginMap.set(t, _r3), s !== e;
            }

            return !1;
          }
        }, {
          key: "delete",
          value: function _delete(t) {
            var s = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 6;
            var e = this._originStores[s];
            if (!e) return;

            var _r4 = e.get(t);

            if (e["delete"](t), this._values.has(t) && this._propertyOriginMap.get(t) === s) {
              this._values["delete"](t);

              for (var _e = s - 1; _e >= 0; _e--) {
                var _s = this._originStores[_e];

                if (_s && _s.has(t)) {
                  this._values.set(t, _s.get(t)), this._propertyOriginMap.set(t, _e);
                  break;
                }
              }
            }

            return _r4;
          }
        }, {
          key: "has",
          value: function has(t, s) {
            var e = void 0 === s ? this._values : this._originStores[s];
            return !!e && e.has(t);
          }
        }, {
          key: "revert",
          value: function revert(t, s) {
            for (; s > 0 && !this.has(t, s);) {
              --s;
            }

            var e = this._originStores[s],
                _r5 = e && e.get(t),
                i = this._values.get(t);

            return this._values.set(t, _r5), this._propertyOriginMap.set(t, s), i !== _r5;
          }
        }, {
          key: "originOf",
          value: function originOf(t) {
            return this._propertyOriginMap.get(t) || 0;
          }
        }, {
          key: "forEach",
          value: function forEach(t) {
            this._values.forEach(t);
          }
        }]);

        return r;
      }();
      /* harmony default export */


      __webpack_exports__["default"] = r;
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
    "uRH/":
    /*!*********************************************************************!*\
      !*** ./node_modules/@arcgis/core/layers/mixins/OperationalLayer.js ***!
      \*********************************************************************/

    /*! exports provided: OperationalLayer, isOperationalLayer */

    /***/
    function uRH(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "OperationalLayer", function () {
        return l;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "isOperationalLayer", function () {
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


      var _core_accessorSupport_read_js__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
      /*! ../../core/accessorSupport/read.js */
      "CWQl");
      /* harmony import */


      var _core_accessorSupport_write_js__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
      /*! ../../core/accessorSupport/write.js */
      "xHih");
      /* harmony import */


      var _operationalLayers_js__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
      /*! ./operationalLayers.js */
      "PB1d");
      /* harmony import */


      var _support_commonProperties_js__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(
      /*! ../support/commonProperties.js */
      "IvSi");
      /*
      All material copyright ESRI, All Rights Reserved, unless otherwise specified.
      See https://js.arcgis.com/4.18/esri/copyright.txt for details.
      */


      var l = function (_l4) {
        function l(_x3) {
          return _l4.apply(this, arguments);
        }

        l.toString = function () {
          return _l4.toString();
        };

        return l;
      }(function (l) {
        var y = /*#__PURE__*/function (_l3) {
          _inherits(y, _l3);

          var _super8 = _createSuper(y);

          function y() {
            var _this4;

            _classCallCheck(this, y);

            _this4 = _super8.apply(this, arguments), _this4.title = null;
            return _this4;
          }

          _createClass(y, [{
            key: "writeListMode",
            value: function writeListMode(e, r, t, i) {
              (i && "ground" === i.layerContainerType || e && Object(_core_accessorSupport_write_js__WEBPACK_IMPORTED_MODULE_12__["willPropertyWrite"])(this, t, {}, i)) && (r[t] = e);
            }
          }, {
            key: "writeOperationalLayerType",
            value: function writeOperationalLayerType(e, r, t, i) {
              !e || i && "tables" === i.layerContainerType || (r.layerType = e);
            }
          }, {
            key: "writeTitle",
            value: function writeTitle(e, r) {
              r.title = e || "Layer";
            }
          }, {
            key: "read",
            value: function read(e, r) {
              var _this5 = this;

              r && (r.layer = this), Object(_core_accessorSupport_read_js__WEBPACK_IMPORTED_MODULE_11__["readLoadable"])(this, e, function (r) {
                return _get(_getPrototypeOf(y.prototype), "read", _this5).call(_this5, e, r);
              }, r);
            }
          }, {
            key: "write",
            value: function write(e, r) {
              if (r && r.origin) {
                var _e2 = "".concat(r.origin, "/").concat(r.layerContainerType || "operational-layers"),
                    _t2 = _operationalLayers_js__WEBPACK_IMPORTED_MODULE_13__["supportedTypes"][_e2];

                var _i2 = _t2 && _t2[this.operationalLayerType];

                if ("ArcGISTiledElevationServiceLayer" === this.operationalLayerType && "web-scene/operational-layers" === _e2 && (_i2 = !1), !_i2) return r.messages && r.messages.push(new _core_Error_js__WEBPACK_IMPORTED_MODULE_7__["default"]("layer:unsupported", "Layers (".concat(this.title, ", ").concat(this.id, ") of type '").concat(this.declaredClass, "' are not supported in the context of '").concat(_e2, "'"), {
                  layer: this
                })), null;
              }

              var t = _get(_getPrototypeOf(y.prototype), "write", this).call(this, e, _objectSpread(_objectSpread({}, r), {}, {
                layer: this
              })),
                  i = !!r && !!r.messages && !!r.messages.filter(function (e) {
                return e instanceof _core_Error_js__WEBPACK_IMPORTED_MODULE_7__["default"] && "web-document-write:property-required" === e.name;
              }).length;

              return !this.url && i ? null : t;
            }
          }, {
            key: "beforeSave",
            value: function beforeSave() {}
          }]);

          return y;
        }(l);

        return Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_4__["property"])({
          type: String,
          json: {
            write: {
              ignoreOrigin: !0
            },
            origins: {
              "web-scene": {
                write: {
                  isRequired: !0,
                  ignoreOrigin: !0
                }
              },
              "portal-item": {
                write: !1
              }
            }
          }
        })], y.prototype, "id", void 0), Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_4__["property"])({
          json: {
            write: {
              ignoreOrigin: !0
            },
            origins: {
              "web-map": {
                read: !1,
                write: !1
              }
            }
          }
        })], y.prototype, "listMode", void 0), Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_writer_js__WEBPACK_IMPORTED_MODULE_6__["writer"])("listMode")], y.prototype, "writeListMode", null), Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_4__["property"])({
          type: String,
          readOnly: !0,
          json: {
            read: !1,
            write: {
              target: "layerType",
              ignoreOrigin: !0
            },
            origins: {
              "portal-item": {
                write: !1
              }
            }
          }
        })], y.prototype, "operationalLayerType", void 0), Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_writer_js__WEBPACK_IMPORTED_MODULE_6__["writer"])("operationalLayerType")], y.prototype, "writeOperationalLayerType", null), Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_4__["property"])(_support_commonProperties_js__WEBPACK_IMPORTED_MODULE_14__["opacity"])], y.prototype, "opacity", void 0), Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_4__["property"])({
          type: String,
          json: {
            write: {
              ignoreOrigin: !0,
              allowNull: !0
            },
            origins: {
              "web-scene": {
                write: {
                  isRequired: !0,
                  ignoreOrigin: !0,
                  allowNull: !0
                }
              },
              "portal-item": {
                write: !1
              }
            }
          },
          value: "Layer"
        })], y.prototype, "title", void 0), Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_writer_js__WEBPACK_IMPORTED_MODULE_6__["writer"])("title")], y.prototype, "writeTitle", null), Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_4__["property"])({
          type: Boolean,
          json: {
            name: "visibility",
            origins: {
              "web-document": {
                name: "visibility",
                "default": !0
              },
              "portal-item": {
                name: "visibility",
                read: {
                  source: ["visible", "visibility"]
                }
              }
            }
          }
        })], y.prototype, "visible", void 0), y = Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_subclass_js__WEBPACK_IMPORTED_MODULE_5__["subclass"])("esri.layers.mixins.OperationalLayer")], y), y;
      });

      function y(e) {
        return "operationalLayerType" in e;
      }
      /***/

    }
  }]);
})();
//# sourceMappingURL=default~BingMapsLayer-js~BuildingSceneLayer-js~CSVLayer-js~ElevationLayer-js~FeatureLayer-js~GeoRSSL~17f7a7e8-es5.js.map