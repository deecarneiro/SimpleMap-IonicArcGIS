(function () {
  function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

  function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

  function _iterableToArrayLimit(arr, i) { if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr))) return; var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

  function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

  function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }

  function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

  function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && Symbol.iterator in Object(iter)) return Array.from(iter); }

  function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }

  function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

  function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

  function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

  function _createForOfIteratorHelper(o, allowArrayLike) { var it; if (typeof Symbol === "undefined" || o[Symbol.iterator] == null) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e7) { throw _e7; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = o[Symbol.iterator](); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e8) { didErr = true; err = _e8; }, f: function f() { try { if (!normalCompletion && it["return"] != null) it["return"](); } finally { if (didErr) throw err; } } }; }

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

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["layers-ImageryLayerView2D-js"], {
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
    "DxxZ":
    /*!*********************************************************************!*\
      !*** ./node_modules/@arcgis/core/core/accessorSupport/diffUtils.js ***!
      \*********************************************************************/

    /*! exports provided: diff, hasDiff, hasDiffAny, isEmpty */

    /***/
    function DxxZ(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "diff", function () {
        return y;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "hasDiff", function () {
        return p;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "hasDiffAny", function () {
        return a;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "isEmpty", function () {
        return m;
      });
      /* harmony import */


      var _maybe_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ../maybe.js */
      "srIe");
      /* harmony import */


      var _utils_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./utils.js */
      "TDcG");
      /* harmony import */


      var _Accessor_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ../Accessor.js */
      "/CmD");
      /* harmony import */


      var _Collection_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ../Collection.js */
      "LE9a");
      /*
      All material copyright ESRI, All Rights Reserved, unless otherwise specified.
      See https://js.arcgis.com/4.18/esri/copyright.txt for details.
      */


      var f = ["esri.Color", "esri.portal.Portal", "esri.symbols.support.Symbol3DAnchorPosition2D", "esri.symbols.support.Symbol3DAnchorPosition3D"];

      function i(t) {
        return t instanceof _Accessor_js__WEBPACK_IMPORTED_MODULE_2__["default"];
      }

      function c(t) {
        return t instanceof _Collection_js__WEBPACK_IMPORTED_MODULE_3__["default"] ? Object.keys(t.items) : i(t) ? Object(_utils_js__WEBPACK_IMPORTED_MODULE_1__["getProperties"])(t).keys() : t ? Object.keys(t) : [];
      }

      function u(t, e) {
        return t instanceof _Collection_js__WEBPACK_IMPORTED_MODULE_3__["default"] ? t.items[e] : t[e];
      }

      function l(t) {
        return t ? t.declaredClass : null;
      }

      function s(t, n) {
        var o = t.diff;
        if (o && "function" == typeof o) return o(t, n);
        var r = c(t),
            p = c(n);
        if (0 === r.length && 0 === p.length) return;
        if (!r.length || !p.length || function (t, e) {
          return !(!Array.isArray(t) || !Array.isArray(e)) && t.length !== e.length;
        }(t, n)) return {
          type: "complete",
          oldValue: t,
          newValue: n
        };
        var a = p.filter(function (t) {
          return -1 === r.indexOf(t);
        }),
            y = r.filter(function (t) {
          return -1 === p.indexOf(t);
        }),
            m = r.filter(function (e) {
          return p.indexOf(e) > -1 && u(t, e) !== u(n, e);
        }).concat(a, y).sort(),
            d = l(t);
        if (d && f.indexOf(d) > -1 && m.length) return {
          type: "complete",
          oldValue: t,
          newValue: n
        };
        var b;
        var h = i(t) && i(n);

        var _iterator = _createForOfIteratorHelper(m),
            _step;

        try {
          for (_iterator.s(); !(_step = _iterator.n()).done;) {
            var _r = _step.value;

            var _f = u(t, _r),
                _i = u(n, _r);

            var _c = void 0;

            (h || "function" != typeof _f && "function" != typeof _i) && _f !== _i && (null == _f && null == _i || (_c = o && o[_r] && "function" == typeof o[_r] ? o[_r](_f, _i) : "object" == typeof _f && "object" == typeof _i && l(_f) === l(_i) ? s(_f, _i) : {
              type: "complete",
              oldValue: _f,
              newValue: _i
            }, Object(_maybe_js__WEBPACK_IMPORTED_MODULE_0__["isSome"])(_c) && (Object(_maybe_js__WEBPACK_IMPORTED_MODULE_0__["isSome"])(b) ? b.diff[_r] = _c : b = {
              type: "partial",
              diff: _defineProperty({}, _r, _c)
            })));
          }
        } catch (err) {
          _iterator.e(err);
        } finally {
          _iterator.f();
        }

        return b;
      }

      function p(e, n) {
        if (Object(_maybe_js__WEBPACK_IMPORTED_MODULE_0__["isNone"])(e)) return !1;
        var o = n.split(".");
        var r = e;

        var _iterator2 = _createForOfIteratorHelper(o),
            _step2;

        try {
          for (_iterator2.s(); !(_step2 = _iterator2.n()).done;) {
            var t = _step2.value;
            if ("complete" === r.type) return !0;
            if ("partial" !== r.type) return !1;
            {
              var _e = r.diff[t];
              if (!_e) return !1;
              r = _e;
            }
          }
        } catch (err) {
          _iterator2.e(err);
        } finally {
          _iterator2.f();
        }

        return !0;
      }

      function a(t, e) {
        var _iterator3 = _createForOfIteratorHelper(e),
            _step3;

        try {
          for (_iterator3.s(); !(_step3 = _iterator3.n()).done;) {
            var n = _step3.value;
            if (p(t, n)) return !0;
          }
        } catch (err) {
          _iterator3.e(err);
        } finally {
          _iterator3.f();
        }

        return !1;
      }

      function y(t, e) {
        if ("function" != typeof t && "function" != typeof e && (t || e)) return !t || !e || "object" == typeof t && "object" == typeof e && l(t) !== l(e) ? {
          type: "complete",
          oldValue: t,
          newValue: e
        } : s(t, e);
      }

      function m(e) {
        if (Object(_maybe_js__WEBPACK_IMPORTED_MODULE_0__["isNone"])(e)) return !0;

        switch (e.type) {
          case "complete":
            return !1;

          case "collection":
            {
              var t = e;

              var _iterator4 = _createForOfIteratorHelper(t.added),
                  _step4;

              try {
                for (_iterator4.s(); !(_step4 = _iterator4.n()).done;) {
                  var _e2 = _step4.value;
                  if (!m(_e2)) return !1;
                }
              } catch (err) {
                _iterator4.e(err);
              } finally {
                _iterator4.f();
              }

              var _iterator5 = _createForOfIteratorHelper(t.removed),
                  _step5;

              try {
                for (_iterator5.s(); !(_step5 = _iterator5.n()).done;) {
                  var _e3 = _step5.value;
                  if (!m(_e3)) return !1;
                }
              } catch (err) {
                _iterator5.e(err);
              } finally {
                _iterator5.f();
              }

              var _iterator6 = _createForOfIteratorHelper(t.changed),
                  _step6;

              try {
                for (_iterator6.s(); !(_step6 = _iterator6.n()).done;) {
                  var _e4 = _step6.value;
                  if (!m(_e4)) return !1;
                }
              } catch (err) {
                _iterator6.e(err);
              } finally {
                _iterator6.f();
              }

              return !0;
            }

          case "partial":
            for (var _t in e.diff) {
              if (!m(e.diff[_t])) return !1;
            }

            return !0;
        }
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
    "WKti":
    /*!************************************************************************************!*\
      !*** ./node_modules/@arcgis/core/views/2d/layers/imagery/ImageryGraphicsView2D.js ***!
      \************************************************************************************/

    /*! exports provided: default */

    /***/
    function WKti(module, __webpack_exports__, __webpack_require__) {
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


      var _core_accessorSupport_decorators_enumeration_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ../../../../core/accessorSupport/decorators/enumeration.js */
      "RI0u");
      /* harmony import */


      var _core_accessorSupport_decorators_subclass_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ../../../../core/accessorSupport/decorators/subclass.js */
      "04ZG");
      /* harmony import */


      var _core_urlUtils_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! ../../../../core/urlUtils.js */
      "4EHJ");
      /* harmony import */


      var _core_uuid_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! ../../../../core/uuid.js */
      "ju1D");
      /* harmony import */


      var _portal_support_resourceExtension_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! ../../../../portal/support/resourceExtension.js */
      "9AIY");
      /* harmony import */


      var _core_promiseUtils_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
      /*! ../../../../core/promiseUtils.js */
      "9MzC");
      /* harmony import */


      var _geometry_Extent_js__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
      /*! ../../../../geometry/Extent.js */
      "OvF4");
      /* harmony import */


      var _core_screenUtils_js__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
      /*! ../../../../core/screenUtils.js */
      "qRWG");
      /* harmony import */


      var _Graphic_js__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
      /*! ../../../../Graphic.js */
      "jWBI");
      /* harmony import */


      var _support_GraphicsCollection_js__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(
      /*! ../../../../support/GraphicsCollection.js */
      "9iar");
      /* harmony import */


      var _layers_LayerView_js__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(
      /*! ../../../layers/LayerView.js */
      "NloG");
      /* harmony import */


      var _engine_Container_js__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(
      /*! ../../engine/Container.js */
      "AMBt");
      /* harmony import */


      var _graphics_GraphicsView2D_js__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(
      /*! ../graphics/GraphicsView2D.js */
      "Vh9r");
      /* harmony import */


      var _LayerView2D_js__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(
      /*! ../LayerView2D.js */
      "Vm2Q");
      /*
      All material copyright ESRI, All Rights Reserved, unless otherwise specified.
      See https://js.arcgis.com/4.18/esri/copyright.txt for details.
      */


      var y = _core_Logger_js__WEBPACK_IMPORTED_MODULE_2__["default"].getLogger("esri.views.2d.layers.imagery.ImageryGraphicsView2D");

      var w = /*#__PURE__*/function (_Object) {
        _inherits(w, _Object);

        var _super3 = _createSuper(w);

        function w() {
          var _this2;

          _classCallCheck(this, w);

          _this2 = _super3.apply(this, arguments), _this2.container = new _engine_Container_js__WEBPACK_IMPORTED_MODULE_16__["Container"](), _this2._graphicsView = null, _this2.type = "Graphics", _this2._graphics = new _support_GraphicsCollection_js__WEBPACK_IMPORTED_MODULE_14__["default"](), _this2._updateGraphics = Object(_core_promiseUtils_js__WEBPACK_IMPORTED_MODULE_10__["debounce"])( /*#__PURE__*/function () {
            var _ref = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee2(e, t) {
              var i, r, s, a, o, n, c, l, _t2;

              return regeneratorRuntime.wrap(function _callee2$(_context2) {
                while (1) {
                  switch (_context2.prev = _context2.next) {
                    case 0:
                      if (e.stationary) {
                        _context2.next = 2;
                        break;
                      }

                      return _context2.abrupt("return");

                    case 2:
                      i = e.state, r = new _geometry_Extent_js__WEBPACK_IMPORTED_MODULE_11__["default"]({
                        xmin: i.extent.xmin,
                        ymin: i.extent.ymin,
                        xmax: i.extent.xmax,
                        ymax: i.extent.ymax,
                        spatialReference: i.spatialReference
                      }), s = e.state.size[0], a = e.state.size[1], o = {};
                      o.timeExtent = _this2.timeExtent, o.requestAsImageElement = !1, o.signal = t;
                      n = _this2._getVectorFieldExportParams({
                        extent: r,
                        width: s,
                        height: a
                      });
                      _context2.next = 7;
                      return _this2.layer.fetchImage(n.extent, n.width, n.height, o);

                    case 7:
                      c = _context2.sent;
                      l = _this2.layer.renderer;

                      if (!("vector-field" === l.type)) {
                        _context2.next = 17;
                        break;
                      }

                      _this2._pixelData = {
                        extent: n.extent,
                        pixelBlock: c.pixelData.pixelBlock
                      };
                      _context2.next = 13;
                      return l.getGraphicsFromPixelData(c.pixelData, "vector-uv" === _this2.layer.rasterInfo.dataType);

                    case 13:
                      _t2 = _context2.sent;

                      _this2._graphicsView.update(e);

                      _context2.next = 17;
                      return Object(_core_promiseUtils_js__WEBPACK_IMPORTED_MODULE_10__["after"])(0).then(function () {
                        _this2._graphics.set("items", _t2);
                      });

                    case 17:
                    case "end":
                      return _context2.stop();
                  }
                }
              }, _callee2);
            }));

            return function (_x3, _x4) {
              return _ref.apply(this, arguments);
            };
          }());
          return _this2;
        }

        _createClass(w, [{
          key: "updating",
          get: function get() {
            var e;
            return null == (e = this._graphicsView) ? void 0 : e.updating;
          }
        }, {
          key: "update",
          value: function update(e) {
            this._updateGraphics(e)["catch"](function (e) {
              Object(_core_promiseUtils_js__WEBPACK_IMPORTED_MODULE_10__["isAbortError"])(e) || y.error(e);
            });
          }
        }, {
          key: "hitTest",
          value: function hitTest(e, t) {
            if (this.suspended) return Object(_core_promiseUtils_js__WEBPACK_IMPORTED_MODULE_10__["resolve"])(null);
            var i = this.view.toMap(Object(_core_screenUtils_js__WEBPACK_IMPORTED_MODULE_12__["createScreenPoint"])(e, t));
            return Object(_core_promiseUtils_js__WEBPACK_IMPORTED_MODULE_10__["resolve"])(new _Graphic_js__WEBPACK_IMPORTED_MODULE_13__["default"]({
              attributes: {},
              geometry: i,
              layer: this.layer
            }));
          }
        }, {
          key: "attach",
          value: function attach() {
            var _this3 = this;

            this._graphicsView = new _graphics_GraphicsView2D_js__WEBPACK_IMPORTED_MODULE_17__["default"]({
              view: this.view,
              graphics: this._graphics,
              requestUpdateCallback: function requestUpdateCallback() {
                return _this3.requestUpdate();
              }
            });
          }
        }, {
          key: "detach",
          value: function detach() {
            this._graphics.destroy(), this._graphicsView.destroy(), this.container.removeChild(this._graphicsView.container), this._graphicsView = null;
          }
        }, {
          key: "moveStart",
          value: function moveStart() {}
        }, {
          key: "viewChange",
          value: function viewChange() {}
        }, {
          key: "moveEnd",
          value: function moveEnd() {}
        }, {
          key: "install",
          value: function install(e) {
            this.container.addChild(this._graphicsView.container), e.addChild(this.container);
          }
        }, {
          key: "uninstall",
          value: function uninstall(e) {
            this.container.removeChild(this._graphicsView.container), e.removeChild(this.container);
          }
        }, {
          key: "isUpdating",
          value: function isUpdating() {
            return this._graphicsView.updating || this.updateRequested;
          }
        }, {
          key: "getPixelData",
          value: function getPixelData() {
            return this.updating ? null : this._pixelData;
          }
        }, {
          key: "redraw",
          value: function redraw() {}
        }, {
          key: "_getVectorFieldExportParams",
          value: function _getVectorFieldExportParams(e) {
            var t, i;
            var r = e.extent,
                s = e.width,
                a = e.height;
            var o = this.layer,
                n = null == (t = o.fullExtent) ? void 0 : t.xmin,
                p = null == (i = o.fullExtent) ? void 0 : i.ymax;
            var h;
            "vector-field" === o.renderer.type && (h = o.renderer.symbolTileSize), h = Math.max(h || 0, 30), s = Math.ceil(s * (1 / h)), a = Math.ceil(a * (1 / h));
            var c = (r.xmax - r.xmin) / s,
                l = (r.ymax - r.ymin) / a;
            return r.xmin = n + Math.floor((r.xmin - n) / c) * c, r.xmax = n + Math.ceil((r.xmax - n) / c) * c, r.ymin = p + Math.floor((r.ymin - p) / l) * l, r.ymax = p + Math.ceil((r.ymax - p) / l) * l, {
              extent: r,
              width: s,
              height: a
            };
          }
        }]);

        return w;
      }(Object(_LayerView2D_js__WEBPACK_IMPORTED_MODULE_18__["LayerView2DMixin"])(_layers_LayerView_js__WEBPACK_IMPORTED_MODULE_15__["default"]));

      Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_4__["property"])()], w.prototype, "container", void 0), Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_4__["property"])()], w.prototype, "layer", void 0), Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_4__["property"])()], w.prototype, "timeExtent", void 0), Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_4__["property"])({
        dependsOn: ["_graphicsView.updating"]
      })], w.prototype, "updating", null), Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_4__["property"])()], w.prototype, "_graphicsView", void 0), Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_enumeration_js__WEBPACK_IMPORTED_MODULE_5__["enumeration"])({
        graphics: "Graphics"
      })], w.prototype, "type", void 0), w = Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_subclass_js__WEBPACK_IMPORTED_MODULE_6__["subclass"])("esri.views.2d.layers.imagery.ImageryGraphicsView2D")], w);
      var f = w;
      /* harmony default export */

      __webpack_exports__["default"] = f;
      /***/
    },

    /***/
    "f1zk":
    /*!*************************************************************************!*\
      !*** ./node_modules/@arcgis/core/views/2d/layers/ImageryLayerView2D.js ***!
      \*************************************************************************/

    /*! exports provided: default */

    /***/
    function f1zk(module, __webpack_exports__, __webpack_require__) {
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


      var _layers_LayerView_js__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
      /*! ../../layers/LayerView.js */
      "NloG");
      /* harmony import */


      var _layers_ImageryLayerView_js__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
      /*! ../../layers/ImageryLayerView.js */
      "yAIi");
      /* harmony import */


      var _LayerView2D_js__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(
      /*! ./LayerView2D.js */
      "Vm2Q");
      /* harmony import */


      var _imagery_ImageryGraphicsView2D_js__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(
      /*! ./imagery/ImageryGraphicsView2D.js */
      "WKti");
      /* harmony import */


      var _imagery_ImageryView2D_js__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(
      /*! ./imagery/ImageryView2D.js */
      "slNU");
      /*
      All material copyright ESRI, All Rights Reserved, unless otherwise specified.
      See https://js.arcgis.com/4.18/esri/copyright.txt for details.
      */


      var m = /*#__PURE__*/function (_Object2) {
        _inherits(m, _Object2);

        var _super4 = _createSuper(m);

        function m() {
          var _this4;

          _classCallCheck(this, m);

          _this4 = _super4.apply(this, arguments), _this4._exportImageVersion = -1;
          return _this4;
        }

        _createClass(m, [{
          key: "pixelData",
          get: function get() {
            return this.updating ? null : this.subview.getPixelData();
          }
        }, {
          key: "updating",
          get: function get() {
            return !(this.subview && !this.subview.updating);
          }
        }, {
          key: "hitTest",
          value: function hitTest(e, t) {
            return this.suspended || !this.subview ? Object(_core_promiseUtils_js__WEBPACK_IMPORTED_MODULE_9__["resolve"])(null) : this.subview.hitTest(e, t);
          }
        }, {
          key: "update",
          value: function update(e) {
            var t;
            null == (t = this.subview) || t.update(e);
          }
        }, {
          key: "attach",
          value: function attach() {
            var _this5 = this;

            this.layer.increaseRasterJobHandlerUsage(), this._setSubView(), this.handles.add([Object(_core_watchUtils_js__WEBPACK_IMPORTED_MODULE_10__["init"])(this, "layer.exportImageServiceParameters.version", function (e) {
              _this5._exportImageVersion !== e && (_this5._exportImageVersion = e, _this5.requestUpdate());
            }), this.watch("timeExtent", function () {
              _this5.subview.timeExtent = _this5.timeExtent, _this5.requestUpdate();
            }), this.layer.on("redraw", function () {
              return _this5.subview.redraw();
            }), Object(_core_watchUtils_js__WEBPACK_IMPORTED_MODULE_10__["watch"])(this.layer, "renderer", function () {
              return _this5._setSubView();
            })], "imagerylayerview-update");
          }
        }, {
          key: "detach",
          value: function detach() {
            this.layer.decreaseRasterJobHandlerUsage(), this.subview.destroy(), this.handles.remove("imagerylayerview-update"), this._exportImageVersion = -1;
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
          key: "doRefresh",
          value: function () {
            var _doRefresh = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee3() {
              return regeneratorRuntime.wrap(function _callee3$(_context3) {
                while (1) {
                  switch (_context3.prev = _context3.next) {
                    case 0:
                      this.requestUpdate();

                    case 1:
                    case "end":
                      return _context3.stop();
                  }
                }
              }, _callee3, this);
            }));

            function doRefresh() {
              return _doRefresh.apply(this, arguments);
            }

            return doRefresh;
          }()
        }, {
          key: "isUpdating",
          value: function isUpdating() {
            return !this.subview || this.subview.isUpdating();
          }
        }, {
          key: "_setSubView",
          value: function _setSubView() {
            var e;
            var t = "Imagery";
            var s, r;
            ("vector-field" === (null == (e = this.layer.renderer) ? void 0 : e.type) && "lerc" === this.layer.format && (t = "Graphics"), this.subview && this.subview.type === t) || (null == (s = this.subview) || s.uninstall(this.container), null == (r = this.subview) || r.destroy(), this.subview = "Imagery" === t ? new _imagery_ImageryView2D_js__WEBPACK_IMPORTED_MODULE_16__["default"]({
              layer: this.layer,
              view: this.view
            }) : new _imagery_ImageryGraphicsView2D_js__WEBPACK_IMPORTED_MODULE_15__["default"]({
              layer: this.layer,
              view: this.view
            }), this.subview.attach(), this.subview.install(this.container));
            this.requestUpdate();
          }
        }]);

        return m;
      }(Object(_layers_ImageryLayerView_js__WEBPACK_IMPORTED_MODULE_13__["ImageryLayerView"])(Object(_layers_RefreshableLayerView_js__WEBPACK_IMPORTED_MODULE_11__["RefreshableLayerView"])(Object(_LayerView2D_js__WEBPACK_IMPORTED_MODULE_14__["LayerView2DMixin"])(_layers_LayerView_js__WEBPACK_IMPORTED_MODULE_12__["default"]))));

      Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_4__["property"])({
        dependsOn: ["updating"]
      })], m.prototype, "pixelData", null), Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_4__["property"])({
        readOnly: !0,
        dependsOn: ["subview.updating"]
      })], m.prototype, "updating", null), Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_4__["property"])()], m.prototype, "subview", void 0), m = Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_subclass_js__WEBPACK_IMPORTED_MODULE_5__["subclass"])("esri.views.2d.layers.ImageryLayerView2D")], m);
      var d = m;
      /* harmony default export */

      __webpack_exports__["default"] = d;
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


      function i(_x5) {
        return _i2.apply(this, arguments);
      }

      function _i2() {
        _i2 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee4(i) {
          var d,
              o,
              s,
              u,
              a,
              n,
              f,
              r,
              m,
              _args4 = arguments;
          return regeneratorRuntime.wrap(function _callee4$(_context4) {
            while (1) {
              switch (_context4.prev = _context4.next) {
                case 0:
                  d = _args4.length > 1 && _args4[1] !== undefined ? _args4[1] : i.popupTemplate;

                  if (Object(_core_maybe_js__WEBPACK_IMPORTED_MODULE_0__["isSome"])(d)) {
                    _context4.next = 3;
                    break;
                  }

                  return _context4.abrupt("return", []);

                case 3:
                  _context4.next = 5;
                  return d.getRequiredFields(i.fields);

                case 5:
                  o = _context4.sent;
                  s = d.lastEditInfoEnabled;
                  u = i.objectIdField;
                  a = i.typeIdField;
                  n = i.globalIdField;
                  f = i.relationships;

                  if (!o.includes("*")) {
                    _context4.next = 13;
                    break;
                  }

                  return _context4.abrupt("return", ["*"]);

                case 13:
                  if (!s) {
                    _context4.next = 19;
                    break;
                  }

                  _context4.next = 16;
                  return Object(_layers_support_fieldUtils_js__WEBPACK_IMPORTED_MODULE_1__["getFeatureEditFields"])(i);

                case 16:
                  _context4.t0 = _context4.sent;
                  _context4.next = 20;
                  break;

                case 19:
                  _context4.t0 = [];

                case 20:
                  r = _context4.t0;
                  m = Object(_layers_support_fieldUtils_js__WEBPACK_IMPORTED_MODULE_1__["fixFields"])(i.fields, [].concat(_toConsumableArray(o), _toConsumableArray(r)));
                  return _context4.abrupt("return", (a && m.push(a), m && u && Object(_layers_support_fieldUtils_js__WEBPACK_IMPORTED_MODULE_1__["hasField"])(i.fields, u) && -1 === m.indexOf(u) && m.push(u), m && n && Object(_layers_support_fieldUtils_js__WEBPACK_IMPORTED_MODULE_1__["hasField"])(i.fields, n) && -1 === m.indexOf(n) && m.push(n), f && f.forEach(function (e) {
                    var p = e.keyField;
                    m && p && Object(_layers_support_fieldUtils_js__WEBPACK_IMPORTED_MODULE_1__["hasField"])(i.fields, p) && -1 === m.indexOf(p) && m.push(p);
                  }), m));

                case 23:
                case "end":
                  return _context4.stop();
              }
            }
          }, _callee4);
        }));
        return _i2.apply(this, arguments);
      }

      function d(p, l) {
        return p.popupTemplate ? p.popupTemplate : Object(_core_maybe_js__WEBPACK_IMPORTED_MODULE_0__["isSome"])(l) && l.defaultPopupTemplateEnabled && Object(_core_maybe_js__WEBPACK_IMPORTED_MODULE_0__["isSome"])(p.defaultPopupTemplate) ? p.defaultPopupTemplate : null;
      }
      /***/

    },

    /***/
    "rvq7":
    /*!****************************************************!*\
      !*** ./node_modules/@arcgis/core/core/MemCache.js ***!
      \****************************************************/

    /*! exports provided: MIN_PRIORITY, MemCache, MemCacheStorage */

    /***/
    function rvq7(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "MIN_PRIORITY", function () {
        return e;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "MemCache", function () {
        return s;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "MemCacheStorage", function () {
        return i;
      });
      /* harmony import */


      var _PooledArray_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ./PooledArray.js */
      "ikTR");
      /*
      All material copyright ESRI, All Rights Reserved, unless otherwise specified.
      See https://js.arcgis.com/4.18/esri/copyright.txt for details.
      */


      var e = -3;

      var s = /*#__PURE__*/function () {
        function s(t, e, _s) {
          _classCallCheck(this, s);

          this._namespace = t, this._storage = e, this._removeFunc = !1, this._hit = 0, this._miss = 0, this._storage.register(this), this._namespace += ":", _s && (this._storage.registerRemoveFunc(this._namespace, _s), this._removeFunc = !0);
        }

        _createClass(s, [{
          key: "namespace",
          get: function get() {
            return this._namespace.slice(0, -1);
          }
        }, {
          key: "hitRate",
          get: function get() {
            return this._hit / (this._hit + this._miss);
          }
        }, {
          key: "size",
          get: function get() {
            return this._storage.size;
          }
        }, {
          key: "maxSize",
          get: function get() {
            return this._storage.maxSize;
          }
        }, {
          key: "resetHitRate",
          value: function resetHitRate() {
            this._hit = this._miss = 0;
          }
        }, {
          key: "destroy",
          value: function destroy() {
            this._storage.clear(this._namespace), this._removeFunc && this._storage.deregisterRemoveFunc(this._namespace), this._storage.deregister(this);
          }
        }, {
          key: "put",
          value: function put(t, e, _s2) {
            var i = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : 0;

            this._storage.put(this._namespace + t, e, _s2, i);
          }
        }, {
          key: "get",
          value: function get(t) {
            var e = this._storage.get(this._namespace + t);

            return void 0 === e ? ++this._miss : ++this._hit, e;
          }
        }, {
          key: "pop",
          value: function pop(t) {
            var e = this._storage.pop(this._namespace + t);

            return void 0 === e ? ++this._miss : ++this._hit, e;
          }
        }, {
          key: "updateSize",
          value: function updateSize(t, e, _s3) {
            this._storage.updateSize(this._namespace + t, e, _s3);
          }
        }, {
          key: "clear",
          value: function clear() {
            this._storage.clear(this._namespace);
          }
        }, {
          key: "clearAll",
          value: function clearAll() {
            this._storage.clearAll();
          }
        }, {
          key: "getStats",
          value: function getStats() {
            return this._storage.getStats();
          }
        }, {
          key: "resetStats",
          value: function resetStats() {
            this._storage.resetStats();
          }
        }]);

        return s;
      }();

      var i = /*#__PURE__*/function () {
        function i() {
          var e = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 10485760;

          _classCallCheck(this, i);

          this._maxSize = e, this._db = new Map(), this._size = 0, this._hit = 0, this._miss = 0, this._removeFuncs = [], this._users = new _PooledArray_js__WEBPACK_IMPORTED_MODULE_0__["default"]();
        }

        _createClass(i, [{
          key: "register",
          value: function register(t) {
            this._users.push(t);
          }
        }, {
          key: "deregister",
          value: function deregister(t) {
            this._users.removeUnordered(t);
          }
        }, {
          key: "registerRemoveFunc",
          value: function registerRemoveFunc(t, e) {
            this._removeFuncs.push([t, e]);
          }
        }, {
          key: "deregisterRemoveFunc",
          value: function deregisterRemoveFunc(t) {
            this._removeFuncs = this._removeFuncs.filter(function (e) {
              return e[0] !== t;
            });
          }
        }, {
          key: "size",
          get: function get() {
            return this._size;
          }
        }, {
          key: "maxSize",
          get: function get() {
            return this._maxSize;
          },
          set: function set(t) {
            this._maxSize = Math.max(t, 0), this._checkSizeLimit();
          }
        }, {
          key: "put",
          value: function put(t, e, s, _i3) {
            var h = this._db.get(t);

            if (h && (this._size -= h.size, this._db["delete"](t), h.entry !== e && this._notifyRemoved(t, h.entry)), s > this._maxSize) return void this._notifyRemoved(t, e);
            if (void 0 === e) return void console.warn("Refusing to cache undefined entry ");
            if (!s || s < 0) return void console.warn("Refusing to cache entry with invalid size " + s);
            var r = 1 + Math.max(_i3, -3) - -3;
            this._db.set(t, {
              entry: e,
              size: s,
              lifetime: r,
              lives: r
            }), this._size += s, this._checkSizeLimit();
          }
        }, {
          key: "updateSize",
          value: function updateSize(t, e, s) {
            var _i4 = this._db.get(t);

            _i4 && _i4.entry === e && (this._size -= _i4.size, s > this._maxSize ? this._notifyRemoved(t, e) : (_i4.size = s, this._size += s, this._checkSizeLimit()));
          }
        }, {
          key: "pop",
          value: function pop(t) {
            var e = this._db.get(t);

            if (e) return this._size -= e.size, this._db["delete"](t), ++this._hit, e.entry;
            ++this._miss;
          }
        }, {
          key: "get",
          value: function get(t) {
            var e = this._db.get(t);

            if (void 0 !== e) return this._db["delete"](t), e.lives = e.lifetime, this._db.set(t, e), ++this._hit, e.entry;
            ++this._miss;
          }
        }, {
          key: "getStats",
          value: function getStats() {
            var _this6 = this;

            var t = {
              Size: Math.round(this._size / 1048576) + "/" + Math.round(this._maxSize / 1048576) + "MB",
              "Hit rate": Math.round(100 * this._getHitRate()) + "%",
              Entries: this._db.size.toString()
            },
                e = {},
                s = new Array();

            this._db.forEach(function (t, _i6) {
              var h = t.lifetime;
              s[h] = (s[h] || 0) + t.size, _this6._users.forAll(function (s) {
                var h = s.namespace;

                if (_i6.startsWith(h)) {
                  var _s4 = e[h] || 0;

                  e[h] = _s4 + t.size;
                }
              });
            });

            var _i5 = {};

            this._users.forAll(function (t) {
              var s = t.namespace;

              if (!isNaN(t.hitRate) && t.hitRate > 0) {
                var _h = e[s] || 0;

                e[s] = _h, _i5[s] = Math.round(100 * t.hitRate) + "%";
              } else _i5[s] = "0%";
            });

            var h = Object.keys(e);
            h.forEach(function (t) {
              return e[t] = e[t] / _this6._size * 100;
            }), h.sort(function (t, s) {
              return e[s] - e[t];
            }), h.forEach(function (s) {
              return t[s] = Math.round(e[s]) + "% / " + _i5[s];
            });

            for (var _e5 = s.length - 1; _e5 >= 0; --_e5) {
              var _i8 = s[_e5];
              _i8 && (t["Priority " + (_e5 + -3 - 1)] = Math.round(_i8 / this.size * 100) + "%");
            }

            return t;
          }
        }, {
          key: "resetStats",
          value: function resetStats() {
            this._hit = this._miss = 0, this._users.forAll(function (t) {
              return t.resetHitRate();
            });
          }
        }, {
          key: "clear",
          value: function clear(t) {
            var _this7 = this;

            this._db.forEach(function (e, s) {
              s.startsWith(t) && (_this7._size -= e.size, _this7._db["delete"](s), _this7._notifyRemoved(s, e.entry));
            });
          }
        }, {
          key: "clearAll",
          value: function clearAll() {
            var _this8 = this;

            this._db.forEach(function (t, e) {
              return _this8._notifyRemoved(e, t.entry);
            }), this._size = 0, this._db.clear();
          }
        }, {
          key: "_getHitRate",
          value: function _getHitRate() {
            return this._hit / (this._hit + this._miss);
          }
        }, {
          key: "_notifyRemoved",
          value: function _notifyRemoved(t, e) {
            this._removeFuncs.forEach(function (s) {
              t.startsWith(s[0]) && s[1](e);
            });
          }
        }, {
          key: "_checkSizeLimit",
          value: function _checkSizeLimit() {
            if (!(this._size <= this._maxSize)) {
              var _iterator7 = _createForOfIteratorHelper(this._db),
                  _step7;

              try {
                for (_iterator7.s(); !(_step7 = _iterator7.n()).done;) {
                  var _step7$value = _slicedToArray(_step7.value, 2),
                      t = _step7$value[0],
                      _e6 = _step7$value[1];

                  if (this._db["delete"](t), _e6.lives <= 1 ? (this._size -= _e6.size, this._notifyRemoved(t, _e6.entry)) : (--_e6.lives, this._db.set(t, _e6)), this._size <= .9 * this.maxSize) return;
                }
              } catch (err) {
                _iterator7.e(err);
              } finally {
                _iterator7.f();
              }
            }
          }
        }]);

        return i;
      }();
      /***/

    },

    /***/
    "slNU":
    /*!****************************************************************************!*\
      !*** ./node_modules/@arcgis/core/views/2d/layers/imagery/ImageryView2D.js ***!
      \****************************************************************************/

    /*! exports provided: default */

    /***/
    function slNU(module, __webpack_exports__, __webpack_require__) {
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


      var _core_accessorSupport_decorators_enumeration_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ../../../../core/accessorSupport/decorators/enumeration.js */
      "RI0u");
      /* harmony import */


      var _core_accessorSupport_decorators_subclass_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ../../../../core/accessorSupport/decorators/subclass.js */
      "04ZG");
      /* harmony import */


      var _core_urlUtils_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! ../../../../core/urlUtils.js */
      "4EHJ");
      /* harmony import */


      var _core_uuid_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! ../../../../core/uuid.js */
      "ju1D");
      /* harmony import */


      var _portal_support_resourceExtension_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! ../../../../portal/support/resourceExtension.js */
      "9AIY");
      /* harmony import */


      var _core_promiseUtils_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
      /*! ../../../../core/promiseUtils.js */
      "9MzC");
      /* harmony import */


      var _core_screenUtils_js__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
      /*! ../../../../core/screenUtils.js */
      "qRWG");
      /* harmony import */


      var _Graphic_js__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
      /*! ../../../../Graphic.js */
      "jWBI");
      /* harmony import */


      var _layers_support_rasterFunctions_pixelUtils_js__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
      /*! ../../../../layers/support/rasterFunctions/pixelUtils.js */
      "ne7T");
      /* harmony import */


      var _layers_LayerView_js__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(
      /*! ../../../layers/LayerView.js */
      "NloG");
      /* harmony import */


      var _engine_Container_js__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(
      /*! ../../engine/Container.js */
      "AMBt");
      /* harmony import */


      var _engine_ImageryBitmapSource_js__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(
      /*! ../../engine/ImageryBitmapSource.js */
      "iUxC");
      /* harmony import */


      var _engine_BitmapContainer_js__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(
      /*! ../../engine/BitmapContainer.js */
      "LTnl");
      /* harmony import */


      var _LayerView2D_js__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(
      /*! ../LayerView2D.js */
      "Vm2Q");
      /* harmony import */


      var _support_ExportStrategy_js__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(
      /*! ../support/ExportStrategy.js */
      "vbiG");
      /*
      All material copyright ESRI, All Rights Reserved, unless otherwise specified.
      See https://js.arcgis.com/4.18/esri/copyright.txt for details.
      */


      var y = _core_Logger_js__WEBPACK_IMPORTED_MODULE_2__["default"].getLogger("esri.views.2d.layers.imagery.ImageryView2D");

      var x = /*#__PURE__*/function (_Object3) {
        _inherits(x, _Object3);

        var _super5 = _createSuper(x);

        function x() {
          var _this9;

          _classCallCheck(this, x);

          _this9 = _super5.apply(this, arguments), _this9.container = new _engine_Container_js__WEBPACK_IMPORTED_MODULE_15__["Container"](), _this9.type = "Imagery", _this9._bitmapView = null;
          return _this9;
        }

        _createClass(x, [{
          key: "updating",
          get: function get() {
            var e;
            return null == (e = this.strategy) ? void 0 : e.updating;
          }
        }, {
          key: "update",
          value: function update(e) {
            this.strategy.update(e)["catch"](function (e) {
              Object(_core_promiseUtils_js__WEBPACK_IMPORTED_MODULE_10__["isAbortError"])(e) || y.error(e);
            });
          }
        }, {
          key: "detach",
          value: function detach() {
            this.strategy.destroy(), this._bitmapView.removeAllChildren(), this.container.removeAllChildren();
          }
        }, {
          key: "hitTest",
          value: function hitTest(e, t) {
            if (this.suspended) return Object(_core_promiseUtils_js__WEBPACK_IMPORTED_MODULE_10__["resolve"])(null);
            var r = this.view.toMap(Object(_core_screenUtils_js__WEBPACK_IMPORTED_MODULE_11__["createScreenPoint"])(e, t));
            return Object(_core_promiseUtils_js__WEBPACK_IMPORTED_MODULE_10__["resolve"])(new _Graphic_js__WEBPACK_IMPORTED_MODULE_12__["default"]({
              attributes: {},
              geometry: r,
              layer: this.layer
            }));
          }
        }, {
          key: "attach",
          value: function attach() {
            var _this10 = this;

            var e = this.layer.version >= 10,
                t = this.layer.version >= 10.1 ? this.layer.imageMaxHeight : 2048,
                r = this.layer.version >= 10.1 ? this.layer.imageMaxWidth : 2048;
            this._bitmapView = new _engine_BitmapContainer_js__WEBPACK_IMPORTED_MODULE_17__["BitmapContainer"](), this.strategy = new _support_ExportStrategy_js__WEBPACK_IMPORTED_MODULE_19__["default"]({
              container: this._bitmapView,
              imageNormalizationSupported: e,
              imageMaxHeight: t,
              imageMaxWidth: r,
              fetchSource: this._fetchImage.bind(this),
              requestUpdate: function requestUpdate() {
                return _this10.requestUpdate();
              }
            });
          }
        }, {
          key: "moveStart",
          value: function moveStart() {}
        }, {
          key: "viewChange",
          value: function viewChange() {}
        }, {
          key: "moveEnd",
          value: function moveEnd() {}
        }, {
          key: "install",
          value: function install(e) {
            this.container.addChild(this._bitmapView), e.addChild(this.container);
          }
        }, {
          key: "uninstall",
          value: function uninstall(e) {
            this.container.removeChild(this._bitmapView), e.removeChild(this.container);
          }
        }, {
          key: "redraw",
          value: function redraw() {
            var _this11 = this;

            this.strategy.updateExports(function (e) {
              e.source instanceof HTMLImageElement ? e.requestRender() : _this11.layer.applyRenderer({
                pixelBlock: e.source.pixelBlock
              }).then(function (t) {
                var r = e.source;
                r.pixelBlock = t.pixelBlock, r.filter = function (e) {
                  return _this11.layer.applyFilter(e);
                }, _this11.container.requestRender();
              });
            });
          }
        }, {
          key: "isUpdating",
          value: function isUpdating() {
            return this.strategy.updating || this.updateRequested;
          }
        }, {
          key: "getPixelData",
          value: function getPixelData() {
            if (this.updating) return null;
            var e = this.strategy.container.children;
            if (1 === e.length && e[0].source) return {
              extent: e[0].source.extent,
              pixelBlock: e[0].source.originalPixelBlock
            };

            if (e.length > 1) {
              var t = this.view.extent,
                  r = e.map(function (e) {
                return e.source;
              }).filter(function (e) {
                return e.extent && e.extent.intersects(t);
              }).map(function (e) {
                return {
                  extent: e.extent,
                  pixelBlock: e.originalPixelBlock
                };
              }),
                  i = Object(_layers_support_rasterFunctions_pixelUtils_js__WEBPACK_IMPORTED_MODULE_13__["mosaicPixelData"])(r, t);
              return i ? {
                extent: i.extent,
                pixelBlock: i.pixelBlock
              } : null;
            }

            return null;
          }
        }, {
          key: "_fetchImage",
          value: function _fetchImage(e, t, r, i) {
            var _this12 = this;

            return (i = i || {}).timeExtent = this.timeExtent, i.requestAsImageElement = !0, this.layer.fetchImage(e, t, r, i).then(function (e) {
              return e.imageElement ? e.imageElement : _this12.layer.applyRenderer(e.pixelData, {
                signal: i.signal
              }).then(function (t) {
                var r = new _engine_ImageryBitmapSource_js__WEBPACK_IMPORTED_MODULE_16__["default"](t.pixelBlock, t.extent.clone(), e.pixelData.pixelBlock);
                return r.filter = function (e) {
                  return _this12.layer.applyFilter(e);
                }, r;
              });
            });
          }
        }]);

        return x;
      }(Object(_LayerView2D_js__WEBPACK_IMPORTED_MODULE_18__["LayerView2DMixin"])(_layers_LayerView_js__WEBPACK_IMPORTED_MODULE_14__["default"]));

      Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_4__["property"])()], x.prototype, "container", void 0), Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_4__["property"])()], x.prototype, "layer", void 0), Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_4__["property"])()], x.prototype, "strategy", void 0), Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_4__["property"])()], x.prototype, "timeExtent", void 0), Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_4__["property"])({
        dependsOn: ["strategy.updating"]
      })], x.prototype, "updating", null), Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_enumeration_js__WEBPACK_IMPORTED_MODULE_5__["enumeration"])({
        imagery: "Imagery"
      })], x.prototype, "type", void 0), x = Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_subclass_js__WEBPACK_IMPORTED_MODULE_6__["subclass"])("esri.views.2d.layers.imagery.ImageryView2D")], x);
      var f = x;
      /* harmony default export */

      __webpack_exports__["default"] = f;
      /***/
    },

    /***/
    "wk6I":
    /*!****************************************************!*\
      !*** ./node_modules/@arcgis/core/core/LRUCache.js ***!
      \****************************************************/

    /*! exports provided: default */

    /***/
    function wk6I(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony import */


      var _MemCache_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ./MemCache.js */
      "rvq7");
      /*
      All material copyright ESRI, All Rights Reserved, unless otherwise specified.
      See https://js.arcgis.com/4.18/esri/copyright.txt for details.
      */

      /* harmony default export */


      __webpack_exports__["default"] = /*#__PURE__*/function () {
        function _class(e, r) {
          _classCallCheck(this, _class);

          this._storage = new _MemCache_js__WEBPACK_IMPORTED_MODULE_0__["MemCacheStorage"](), this._storage.maxSize = e, r && this._storage.registerRemoveFunc("", r);
        }

        _createClass(_class, [{
          key: "put",
          value: function put(t, e, r) {
            this._storage.put(t, e, r, 1);
          }
        }, {
          key: "pop",
          value: function pop(t) {
            return this._storage.pop(t);
          }
        }, {
          key: "get",
          value: function get(t) {
            return this._storage.get(t);
          }
        }, {
          key: "clear",
          value: function clear() {
            this._storage.clearAll();
          }
        }, {
          key: "destroy",
          value: function destroy() {
            this._storage.clearAll();
          }
        }, {
          key: "maxSize",
          get: function get() {
            return this._storage.maxSize;
          },
          set: function set(t) {
            this._storage.maxSize = t;
          }
        }]);

        return _class;
      }();
      /***/

    },

    /***/
    "yAIi":
    /*!********************************************************************!*\
      !*** ./node_modules/@arcgis/core/views/layers/ImageryLayerView.js ***!
      \********************************************************************/

    /*! exports provided: ImageryLayerView */

    /***/
    function yAIi(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ImageryLayerView", function () {
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


      var _geometry_Point_js__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
      /*! ../../geometry/Point.js */
      "SuVq");
      /* harmony import */


      var _layers_support_commonProperties_js__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
      /*! ../../layers/support/commonProperties.js */
      "IvSi");
      /* harmony import */


      var _tasks_support_Query_js__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(
      /*! ../../tasks/support/Query.js */
      "xk++");
      /* harmony import */


      var _support_popupUtils_js__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(
      /*! ./support/popupUtils.js */
      "rXMu");
      /*
      All material copyright ESRI, All Rights Reserved, unless otherwise specified.
      See https://js.arcgis.com/4.18/esri/copyright.txt for details.
      */


      var m = function m(_m2) {
        var c = /*#__PURE__*/function (_m) {
          _inherits(c, _m);

          var _super6 = _createSuper(c);

          function c() {
            var _this13;

            _classCallCheck(this, c);

            _this13 = _super6.apply(this, arguments), _this13.view = null;
            return _this13;
          }

          _createClass(c, [{
            key: "fetchPopupFeatures",
            value: function () {
              var _fetchPopupFeatures = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee5(e, o) {
                var t, a, m, _c2, l, y, d, _ref2, w, f, h;

                return regeneratorRuntime.wrap(function _callee5$(_context5) {
                  while (1) {
                    switch (_context5.prev = _context5.next) {
                      case 0:
                        t = this.layer;

                        if (e) {
                          _context5.next = 3;
                          break;
                        }

                        return _context5.abrupt("return", Object(_core_promiseUtils_js__WEBPACK_IMPORTED_MODULE_11__["reject"])(new _core_Error_js__WEBPACK_IMPORTED_MODULE_7__["default"]("imagerylayerview:fetchPopupFeatures", "Nothing to fetch without area", {
                          layer: t
                        })));

                      case 3:
                        a = t.popupEnabled, m = Object(_support_popupUtils_js__WEBPACK_IMPORTED_MODULE_15__["getFetchPopupTemplate"])(t, o);

                        if (!(!a || !Object(_core_maybe_js__WEBPACK_IMPORTED_MODULE_2__["isSome"])(m))) {
                          _context5.next = 6;
                          break;
                        }

                        throw new _core_Error_js__WEBPACK_IMPORTED_MODULE_7__["default"]("imagerylayerview:fetchPopupFeatures", "Missing required popupTemplate or popupEnabled", {
                          popupEnabled: a,
                          popupTemplate: m
                        });

                      case 6:
                        _context5.next = 8;
                        return m.getRequiredFields();

                      case 8:
                        _c2 = _context5.sent;
                        l = new _tasks_support_Query_js__WEBPACK_IMPORTED_MODULE_14__["default"]();
                        l.geometry = e, l.outFields = _c2, l.outSpatialReference = e.spatialReference;
                        y = this.view.resolution, d = "2d" === this.view.type ? new _geometry_Point_js__WEBPACK_IMPORTED_MODULE_12__["default"](y, y, this.view.spatialReference) : new _geometry_Point_js__WEBPACK_IMPORTED_MODULE_12__["default"](.5 * y, .5 * y, this.view.spatialReference), _ref2 = m.layerOptions || {
                          returnTopmostRaster: !0,
                          showNoDataRecords: !1
                        }, w = _ref2.returnTopmostRaster, f = _ref2.showNoDataRecords, h = {
                          returnDomainValues: !0,
                          returnTopmostRaster: w,
                          pixelSize: d,
                          showNoDataRecords: f
                        };
                        return _context5.abrupt("return", t.queryVisibleRasters(l, h).then(function (e) {
                          return e;
                        }));

                      case 13:
                      case "end":
                        return _context5.stop();
                    }
                  }
                }, _callee5, this);
              }));

              function fetchPopupFeatures(_x6, _x7) {
                return _fetchPopupFeatures.apply(this, arguments);
              }

              return fetchPopupFeatures;
            }()
          }, {
            key: "canResume",
            value: function canResume() {
              var e;
              return !!_get(_getPrototypeOf(c.prototype), "canResume", this).call(this) && (null == (e = this.timeExtent) || !e.isEmpty);
            }
          }]);

          return c;
        }(_m2);

        return Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_5__["property"])()], c.prototype, "layer", void 0), Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_5__["property"])({
          dependsOn: ["timeExtent"]
        })], c.prototype, "suspended", void 0), Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_5__["property"])(_layers_support_commonProperties_js__WEBPACK_IMPORTED_MODULE_13__["combinedViewLayerTimeExtentProperty"])], c.prototype, "timeExtent", void 0), Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_5__["property"])()], c.prototype, "view", void 0), c = Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_subclass_js__WEBPACK_IMPORTED_MODULE_6__["subclass"])("esri.views.layers.ImageryLayerView")], c), c;
      };
      /***/

    }
  }]);
})();
//# sourceMappingURL=layers-ImageryLayerView2D-js-es5.js.map