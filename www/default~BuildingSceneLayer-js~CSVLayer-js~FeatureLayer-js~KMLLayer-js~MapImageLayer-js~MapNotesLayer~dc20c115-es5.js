(function () {
  function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }

  function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

  function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && Symbol.iterator in Object(iter)) return Array.from(iter); }

  function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }

  function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

  function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

  function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

  function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

  function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

  function _iterableToArrayLimit(arr, i) { if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr))) return; var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

  function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

  function _createForOfIteratorHelper(o, allowArrayLike) { var it; if (typeof Symbol === "undefined" || o[Symbol.iterator] == null) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function (_e8) { function e(_x21) { return _e8.apply(this, arguments); } e.toString = function () { return _e8.toString(); }; return e; }(function (e) { throw e; }), f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = o[Symbol.iterator](); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function (_e9) { function e(_x22) { return _e9.apply(this, arguments); } e.toString = function () { return _e9.toString(); }; return e; }(function (e) { didErr = true; err = e; }), f: function f() { try { if (!normalCompletion && it["return"] != null) it["return"](); } finally { if (didErr) throw err; } } }; }

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

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["default~BuildingSceneLayer-js~CSVLayer-js~FeatureLayer-js~KMLLayer-js~MapImageLayer-js~MapNotesLayer~dc20c115"], {
    /***/
    "+Xal":
    /*!******************************************************************!*\
      !*** ./node_modules/@arcgis/core/renderers/support/jsonUtils.js ***!
      \******************************************************************/

    /*! exports provided: fromJSON, read, write */

    /***/
    function Xal(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "fromJSON", function () {
        return u;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "read", function () {
        return a;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "write", function () {
        return o;
      });
      /* harmony import */


      var _core_has_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ../../core/has.js */
      "wSAH");
      /* harmony import */


      var _core_object_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ../../core/object.js */
      "nR38");
      /* harmony import */


      var _core_Warning_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ../../core/Warning.js */
      "ACjl");
      /* harmony import */


      var _core_accessorSupport_extensions_serializableProperty_reader_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ../../core/accessorSupport/extensions/serializableProperty/reader.js */
      "C4aV");
      /* harmony import */


      var _core_Error_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ../../core/Error.js */
      "zlDU");
      /* harmony import */


      var _types_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ./types.js */
      "XNvV");
      /*
      All material copyright ESRI, All Rights Reserved, unless otherwise specified.
      See https://js.arcgis.com/4.18/esri/copyright.txt for details.
      */


      function o(r, n, t, o) {
        var u = function (e, r) {
          if (!e) return null;
          if (!function (e, r) {
            if (!r || "web-scene" !== r.origin) return !0;

            switch (e.type) {
              case "simple":
              case "unique-value":
              case "class-breaks":
                return !0;

              case "heatmap":
              case "dictionary":
              case "dot-density":
              default:
                return !1;
            }
          }(e, r)) return r.messages && r.messages.push(new _core_Error_js__WEBPACK_IMPORTED_MODULE_4__["default"]("renderer:unsupported", "Renderer of type '".concat(e.declaredClass, "' are not supported in scenes."), {
            renderer: e,
            context: r
          })), null;
          return e.write({}, r);
        }(r, o);

        u && Object(_core_object_js__WEBPACK_IMPORTED_MODULE_1__["setDeepValue"])(t, u, n);
      }

      function u(e, r) {
        return a(e, null, r);
      }

      var i = Object(_core_accessorSupport_extensions_serializableProperty_reader_js__WEBPACK_IMPORTED_MODULE_3__["createTypeReader"])({
        types: _types_js__WEBPACK_IMPORTED_MODULE_5__["rendererTypes"]
      });

      function a(e, n, s) {
        return e ? e && (e.styleName || e.styleUrl) && "uniqueValue" !== e.type ? (s && s.messages && s.messages.push(new _core_Warning_js__WEBPACK_IMPORTED_MODULE_2__["default"]("renderer:unsupported", "Only UniqueValueRenderer can be referenced from a web style, but found '" + e.type + "'", {
          definition: e,
          context: s
        })), null) : i(e, n, s) : null;
      }
      /***/

    },

    /***/
    "/1dM":
    /*!***************************************************************!*\
      !*** ./node_modules/@arcgis/core/renderers/SimpleRenderer.js ***!
      \***************************************************************/

    /*! exports provided: default */

    /***/
    function dM(module, __webpack_exports__, __webpack_require__) {
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


      var _core_promiseUtils_js__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
      /*! ../core/promiseUtils.js */
      "9MzC");
      /* harmony import */


      var _Renderer_js__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
      /*! ./Renderer.js */
      "ZnuT");
      /* harmony import */


      var _mixins_VisualVariablesMixin_js__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
      /*! ./mixins/VisualVariablesMixin.js */
      "vk02");
      /* harmony import */


      var _support_commonProperties_js__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(
      /*! ./support/commonProperties.js */
      "guTz");
      /*
      All material copyright ESRI, All Rights Reserved, unless otherwise specified.
      See https://js.arcgis.com/4.18/esri/copyright.txt for details.
      */


      var _c;

      var m = _c = /*#__PURE__*/function (_Object) {
        _inherits(c, _Object);

        var _super = _createSuper(c);

        function c(e) {
          var _this;

          _classCallCheck(this, c);

          _this = _super.call(this, e), _this.description = null, _this.label = null, _this.symbol = null, _this.type = "simple";
          return _this;
        }

        _createClass(c, [{
          key: "collectRequiredFields",
          value: function () {
            var _collectRequiredFields = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(e, r) {
              return regeneratorRuntime.wrap(function _callee$(_context) {
                while (1) {
                  switch (_context.prev = _context.next) {
                    case 0:
                      _context.next = 2;
                      return Object(_core_promiseUtils_js__WEBPACK_IMPORTED_MODULE_11__["all"])([this.collectSymbolFields(e, r), this.collectVVRequiredFields(e, r)]);

                    case 2:
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
          key: "collectSymbolFields",
          value: function () {
            var _collectSymbolFields = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee2(e, r) {
              return regeneratorRuntime.wrap(function _callee2$(_context2) {
                while (1) {
                  switch (_context2.prev = _context2.next) {
                    case 0:
                      _context2.next = 2;
                      return Object(_core_promiseUtils_js__WEBPACK_IMPORTED_MODULE_11__["all"])(this.getSymbols().map(function (s) {
                        return s.collectRequiredFields(e, r);
                      }));

                    case 2:
                    case "end":
                      return _context2.stop();
                  }
                }
              }, _callee2, this);
            }));

            function collectSymbolFields(_x3, _x4) {
              return _collectSymbolFields.apply(this, arguments);
            }

            return collectSymbolFields;
          }()
        }, {
          key: "getSymbol",
          value: function getSymbol(e, r) {
            return this.symbol;
          }
        }, {
          key: "getSymbolAsync",
          value: function () {
            var _getSymbolAsync = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee3(e, r) {
              return regeneratorRuntime.wrap(function _callee3$(_context3) {
                while (1) {
                  switch (_context3.prev = _context3.next) {
                    case 0:
                      return _context3.abrupt("return", this.symbol);

                    case 1:
                    case "end":
                      return _context3.stop();
                  }
                }
              }, _callee3, this);
            }));

            function getSymbolAsync(_x5, _x6) {
              return _getSymbolAsync.apply(this, arguments);
            }

            return getSymbolAsync;
          }()
        }, {
          key: "getSymbols",
          value: function getSymbols() {
            return this.symbol ? [this.symbol] : [];
          }
        }, {
          key: "getAttributeHash",
          value: function getAttributeHash() {
            return this.visualVariables && this.visualVariables.reduce(function (e, r) {
              return e + r.getAttributeHash();
            }, "");
          }
        }, {
          key: "getMeshHash",
          value: function getMeshHash() {
            return this.getSymbols().reduce(function (e, r) {
              return e + JSON.stringify(r);
            }, "");
          }
        }, {
          key: "arcadeRequired",
          get: function get() {
            return this.arcadeRequiredForVisualVariables;
          }
        }, {
          key: "clone",
          value: function clone() {
            return new _c({
              description: this.description,
              label: this.label,
              symbol: this.symbol && this.symbol.clone(),
              visualVariables: Object(_core_lang_js__WEBPACK_IMPORTED_MODULE_2__["clone"])(this.visualVariables),
              authoringInfo: this.authoringInfo && this.authoringInfo.clone()
            });
          }
        }]);

        return c;
      }(Object(_mixins_VisualVariablesMixin_js__WEBPACK_IMPORTED_MODULE_13__["VisualVariablesMixin"])(_Renderer_js__WEBPACK_IMPORTED_MODULE_12__["default"]));

      Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_5__["property"])({
        type: String,
        json: {
          write: !0
        }
      })], m.prototype, "description", void 0), Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_5__["property"])({
        type: String,
        json: {
          write: !0
        }
      })], m.prototype, "label", void 0), Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_5__["property"])(_support_commonProperties_js__WEBPACK_IMPORTED_MODULE_14__["rendererSymbolProperty"])], m.prototype, "symbol", void 0), Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_enumeration_js__WEBPACK_IMPORTED_MODULE_6__["enumeration"])({
        simple: "simple"
      })], m.prototype, "type", void 0), m = _c = Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_subclass_js__WEBPACK_IMPORTED_MODULE_7__["subclass"])("esri.renderers.SimpleRenderer")], m);
      var n = m;
      /* harmony default export */

      __webpack_exports__["default"] = n;
      /***/
    },

    /***/
    "2uuY":
    /*!*************************************************************************!*\
      !*** ./node_modules/@arcgis/core/renderers/support/HeatmapColorStop.js ***!
      \*************************************************************************/

    /*! exports provided: default */

    /***/
    function uuY(module, __webpack_exports__, __webpack_require__) {
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


      var _Color_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
      /*! ../../Color.js */
      "nvBr");
      /*
      All material copyright ESRI, All Rights Reserved, unless otherwise specified.
      See https://js.arcgis.com/4.18/esri/copyright.txt for details.
      */


      var _p;

      var i = _p = /*#__PURE__*/function (_core_JSONSupport_js_) {
        _inherits(p, _core_JSONSupport_js_);

        var _super2 = _createSuper(p);

        function p(r) {
          var _this2;

          _classCallCheck(this, p);

          _this2 = _super2.call(this, r), _this2.color = null, _this2.ratio = null;
          return _this2;
        }

        _createClass(p, [{
          key: "clone",
          value: function clone() {
            return new _p({
              color: this.color,
              ratio: this.ratio
            });
          }
        }]);

        return p;
      }(_core_JSONSupport_js__WEBPACK_IMPORTED_MODULE_9__["JSONSupport"]);

      Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_4__["property"])({
        type: _Color_js__WEBPACK_IMPORTED_MODULE_10__["default"],
        json: {
          write: !0
        }
      })], i.prototype, "color", void 0), Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_4__["property"])({
        type: Number,
        json: {
          write: !0
        }
      })], i.prototype, "ratio", void 0), i = _p = Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_subclass_js__WEBPACK_IMPORTED_MODULE_5__["subclass"])("esri.renderers.support.HeatmapColorStop")], i);
      var c = i;
      /* harmony default export */

      __webpack_exports__["default"] = c;
      /***/
    },

    /***/
    "JhoD":
    /*!*******************************************************************!*\
      !*** ./node_modules/@arcgis/core/renderers/DictionaryRenderer.js ***!
      \*******************************************************************/

    /*! exports provided: default */

    /***/
    function JhoD(module, __webpack_exports__, __webpack_require__) {
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


      var _core_maybe_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ../core/maybe.js */
      "srIe");
      /* harmony import */


      var _core_string_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ../core/string.js */
      "s7YA");
      /* harmony import */


      var _core_Logger_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ../core/Logger.js */
      "6S2I");
      /* harmony import */


      var _core_accessorSupport_ensureType_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ../core/accessorSupport/ensureType.js */
      "zqDF");
      /* harmony import */


      var _core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! ../core/accessorSupport/decorators/property.js */
      "WbKI");
      /* harmony import */


      var _core_accessorSupport_decorators_subclass_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! ../core/accessorSupport/decorators/subclass.js */
      "04ZG");
      /* harmony import */


      var _core_accessorSupport_decorators_writer_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! ../core/accessorSupport/decorators/writer.js */
      "Cduq");
      /* harmony import */


      var _core_Error_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
      /*! ../core/Error.js */
      "zlDU");
      /* harmony import */


      var _core_urlUtils_js__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
      /*! ../core/urlUtils.js */
      "4EHJ");
      /* harmony import */


      var _core_uuid_js__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
      /*! ../core/uuid.js */
      "ju1D");
      /* harmony import */


      var _portal_support_resourceExtension_js__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
      /*! ../portal/support/resourceExtension.js */
      "9AIY");
      /* harmony import */


      var _core_promiseUtils_js__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(
      /*! ../core/promiseUtils.js */
      "9MzC");
      /* harmony import */


      var _support_arcadeOnDemand_js__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(
      /*! ../support/arcadeOnDemand.js */
      "gvqN");
      /* harmony import */


      var _layers_support_fieldUtils_js__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(
      /*! ../layers/support/fieldUtils.js */
      "wdpY");
      /* harmony import */


      var _Color_js__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(
      /*! ../Color.js */
      "nvBr");
      /* harmony import */


      var _symbols_CIMSymbol_js__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(
      /*! ../symbols/CIMSymbol.js */
      "TKwc");
      /* harmony import */


      var _request_js__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(
      /*! ../request.js */
      "Lqtk");
      /* harmony import */


      var _Renderer_js__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(
      /*! ./Renderer.js */
      "ZnuT");
      /* harmony import */


      var _mixins_VisualVariablesMixin_js__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(
      /*! ./mixins/VisualVariablesMixin.js */
      "vk02");
      /* harmony import */


      var _core_LRUCache_js__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(
      /*! ../core/LRUCache.js */
      "wk6I");
      /*
      All material copyright ESRI, All Rights Reserved, unless otherwise specified.
      See https://js.arcgis.com/4.18/esri/copyright.txt for details.
      */


      var _w;

      var x = _core_Logger_js__WEBPACK_IMPORTED_MODULE_5__["default"].getLogger("esri.renderers.DictionaryRenderer");

      var v = _w = /*#__PURE__*/function (_Object2) {
        _inherits(w, _Object2);

        var _super3 = _createSuper(w);

        function w(e) {
          var _this3;

          _classCallCheck(this, w);

          _this3 = _super3.call(this, e), _this3._ongoingRequests = new Map(), _this3._symbolCache = new _core_LRUCache_js__WEBPACK_IMPORTED_MODULE_22__["default"](100), _this3.config = null, _this3.fieldMap = null, _this3.scaleExpression = null, _this3.scaleExpressionTitle = null, _this3.url = null, _this3.type = "dictionary";
          return _this3;
        }

        _createClass(w, [{
          key: "writeData",
          value: function writeData(e, s) {
            e && (s.scalingExpressionInfo = {
              expression: e,
              returnType: "number"
            });
          }
        }, {
          key: "writeVisualVariables",
          value: function writeVisualVariables(e, s, t, r) {
            null != r && r.origin || _get(_getPrototypeOf(w.prototype), "writeVisualVariables", this).call(this, e, s, t, r);
          }
        }, {
          key: "clone",
          value: function clone() {
            return new _w({
              config: Object(_core_lang_js__WEBPACK_IMPORTED_MODULE_2__["clone"])(this.config),
              scaleExpression: this.scaleExpression,
              scaleExpressionTitle: this.scaleExpressionTitle,
              fieldMap: Object(_core_lang_js__WEBPACK_IMPORTED_MODULE_2__["clone"])(this.fieldMap),
              url: Object(_core_lang_js__WEBPACK_IMPORTED_MODULE_2__["clone"])(this.url),
              visualVariables: Object(_core_lang_js__WEBPACK_IMPORTED_MODULE_2__["clone"])(this.visualVariables)
            });
          }
        }, {
          key: "getSymbolAsync",
          value: function () {
            var _getSymbolAsync2 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee4(e, s) {
              var _this4 = this;

              var t, i, _iterator, _step, _s, _t, r, o, n, a, l, p, u, _iterator2, _step2, _e, _iterator3, _step3, _s2, _s3, _e2, _t2, _r, _e3, m;

              return regeneratorRuntime.wrap(function _callee4$(_context4) {
                while (1) {
                  switch (_context4.prev = _context4.next) {
                    case 0:
                      this._dictionaryPromise || (this._dictionaryPromise = this.fetchResources(s));
                      _context4.prev = 1;
                      _context4.next = 4;
                      return this._dictionaryPromise;

                    case 4:
                      t = _context4.sent;
                      _context4.next = 11;
                      break;

                    case 7:
                      _context4.prev = 7;
                      _context4.t0 = _context4["catch"](1);

                      if (!Object(_core_promiseUtils_js__WEBPACK_IMPORTED_MODULE_14__["isAbortError"])(_context4.t0)) {
                        _context4.next = 11;
                        break;
                      }

                      return _context4.abrupt("return", (this._dictionaryPromise = null, null));

                    case 11:
                      i = {};

                      if (this.fieldMap) {
                        _iterator = _createForOfIteratorHelper(this._symbolFields);

                        try {
                          for (_iterator.s(); !(_step = _iterator.n()).done;) {
                            _s = _step.value;
                            _t = this.fieldMap[_s];

                            if (_t && null !== e.attributes[_t] && void 0 !== e.attributes[_t]) {
                              r = "" + e.attributes[_t];
                              i[_s] = r;
                            } else i[_s] = "";
                          }
                        } catch (err) {
                          _iterator.e(err);
                        } finally {
                          _iterator.f();
                        }
                      }

                      o = t(i, s);

                      if (!(!o || "string" != typeof o)) {
                        _context4.next = 16;
                        break;
                      }

                      return _context4.abrupt("return", null);

                    case 16:
                      n = Object(_core_string_js__WEBPACK_IMPORTED_MODULE_4__["numericHash"])(o).toString(), a = this._symbolCache.get(n);

                      if (!a) {
                        _context4.next = 19;
                        break;
                      }

                      return _context4.abrupt("return", (a["catch"](function () {
                        _this4._symbolCache.pop(n);
                      }), a));

                    case 19:
                      l = o.split(";"), p = [], u = [];
                      _iterator2 = _createForOfIteratorHelper(l);

                      try {
                        for (_iterator2.s(); !(_step2 = _iterator2.n()).done;) {
                          _e = _step2.value;
                          if (_e && 0 !== _e.length) if (-1 === _e.indexOf("po:")) {
                            if (-1 !== _e.indexOf("|")) {
                              _iterator3 = _createForOfIteratorHelper(_e.split("|"));

                              try {
                                for (_iterator3.s(); !(_step3 = _iterator3.n()).done;) {
                                  _s2 = _step3.value;
                                  this._itemNames.has(_s2) && p.push(_s2);
                                }
                              } catch (err) {
                                _iterator3.e(err);
                              } finally {
                                _iterator3.f();
                              }
                            } else this._itemNames.has(_e) && p.push(_e);
                          } else {
                            _s3 = _e.substr(3).split("|");

                            if (3 === _s3.length) {
                              _e2 = _s3[0], _t2 = _s3[1];
                              _r = _s3[2];
                              if ("DashTemplate" === _t2) _r = _r.split(" ").map(function (e) {
                                return Number(e);
                              });else if ("Color" === _t2) {
                                _e3 = new _Color_js__WEBPACK_IMPORTED_MODULE_17__["default"](_r).toRgba();
                                _r = [_e3[0], _e3[1], _e3[2], 255 * _e3[3]];
                              } else _r = Number(_r);
                              u.push({
                                primitiveName: _e2,
                                propertyName: _t2,
                                value: _r
                              });
                            }
                          }
                        }
                      } catch (err) {
                        _iterator2.e(err);
                      } finally {
                        _iterator2.f();
                      }

                      m = this._cimPartsToCIMSymbol(p, u, s);
                      return _context4.abrupt("return", (this._symbolCache.put(n, m, 1), m));

                    case 24:
                    case "end":
                      return _context4.stop();
                  }
                }
              }, _callee4, this, [[1, 7]]);
            }));

            function getSymbolAsync(_x7, _x8) {
              return _getSymbolAsync2.apply(this, arguments);
            }

            return getSymbolAsync;
          }()
        }, {
          key: "collectRequiredFields",
          value: function () {
            var _collectRequiredFields2 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee5(e, s) {
              var t, _s4;

              return regeneratorRuntime.wrap(function _callee5$(_context5) {
                while (1) {
                  switch (_context5.prev = _context5.next) {
                    case 0:
                      _context5.next = 2;
                      return this.collectVVRequiredFields(e, s);

                    case 2:
                      _context5.t0 = this.scaleExpression;

                      if (!_context5.t0) {
                        _context5.next = 6;
                        break;
                      }

                      _context5.next = 6;
                      return Object(_layers_support_fieldUtils_js__WEBPACK_IMPORTED_MODULE_16__["collectArcadeFieldNames"])(e, s, this.scaleExpression);

                    case 6:
                      t = s.map(function (e) {
                        return e.name;
                      });

                      for (_s4 in this.fieldMap) {
                        t.indexOf(this.fieldMap[_s4]) < 0 || e.add(this.fieldMap[_s4]);
                      }

                    case 8:
                    case "end":
                      return _context5.stop();
                  }
                }
              }, _callee5, this);
            }));

            function collectRequiredFields(_x9, _x10) {
              return _collectRequiredFields2.apply(this, arguments);
            }

            return collectRequiredFields;
          }()
        }, {
          key: "arcadeRequired",
          get: function get() {
            return !0;
          }
        }, {
          key: "fetchResources",
          value: function () {
            var _fetchResources = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee6(e) {
              var _this5 = this;

              var s, r, _yield$Object, _yield$Object2, i, o, n, a, _e4, _s5, _iterator4, _step4, _e5, c, _iterator5, _step5, _loop;

              return regeneratorRuntime.wrap(function _callee6$(_context6) {
                while (1) {
                  switch (_context6.prev = _context6.next) {
                    case 0:
                      if (!this._dictionaryPromise) {
                        _context6.next = 2;
                        break;
                      }

                      return _context6.abrupt("return", this._dictionaryPromise);

                    case 2:
                      if (this.url) {
                        _context6.next = 4;
                        break;
                      }

                      return _context6.abrupt("return", void x.error("no valid URL!"));

                    case 4:
                      s = Object(_core_maybe_js__WEBPACK_IMPORTED_MODULE_3__["isSome"])(e) ? e.abortOptions : null;
                      r = Object(_request_js__WEBPACK_IMPORTED_MODULE_19__["default"])(this.url + "/resources/styles/dictionary-info.json", _objectSpread({
                        responseType: "json",
                        query: {
                          f: "json"
                        }
                      }, s));
                      _context6.next = 8;
                      return Object(_core_promiseUtils_js__WEBPACK_IMPORTED_MODULE_14__["all"])([r, Object(_support_arcadeOnDemand_js__WEBPACK_IMPORTED_MODULE_15__["loadArcade"])()]);

                    case 8:
                      _yield$Object = _context6.sent;
                      _yield$Object2 = _slicedToArray(_yield$Object, 1);
                      i = _yield$Object2[0].data;

                      if (i) {
                        _context6.next = 13;
                        break;
                      }

                      throw this._dictionaryPromise = null, new _core_Error_js__WEBPACK_IMPORTED_MODULE_10__["default"]("esri.renderers.DictionaryRenderer", "Bad dictionary data!");

                    case 13:
                      o = i.expression, n = i.authoringInfo;
                      this._refSymbolUrlTemplate = this.url + "/" + i.cimRefTemplateUrl, this._itemNames = new Set(i.itemsNames), this._symbolFields = n.symbol;
                      a = {};

                      if (this.config) {
                        _e4 = this.config;

                        for (_s5 in _e4) {
                          a[_s5] = _e4[_s5];
                        }
                      }

                      _iterator4 = _createForOfIteratorHelper(n.configuration);

                      try {
                        for (_iterator4.s(); !(_step4 = _iterator4.n()).done;) {
                          _e5 = _step4.value;
                          a.hasOwnProperty(_e5.name) || (a[_e5.name] = _e5.value);
                        }
                      } catch (err) {
                        _iterator4.e(err);
                      } finally {
                        _iterator4.f();
                      }

                      c = [];

                      if (Object(_core_maybe_js__WEBPACK_IMPORTED_MODULE_3__["isSome"])(e) && e.fields && this.fieldMap) {
                        _iterator5 = _createForOfIteratorHelper(this._symbolFields);

                        try {
                          _loop = function _loop() {
                            var s = _step5.value;
                            var t = _this5.fieldMap[s],
                                r = e.fields.filter(function (e) {
                              return e.name === t;
                            });
                            r.length > 0 && c.push(_objectSpread(_objectSpread({}, r[0]), {}, {
                              name: s
                            }));
                          };

                          for (_iterator5.s(); !(_step5 = _iterator5.n()).done;) {
                            _loop();
                          }
                        } catch (err) {
                          _iterator5.e(err);
                        } finally {
                          _iterator5.f();
                        }
                      }

                      return _context6.abrupt("return", (this._dictionaryPromise = Object(_support_arcadeOnDemand_js__WEBPACK_IMPORTED_MODULE_15__["createDictionaryExpression"])(o, Object(_core_maybe_js__WEBPACK_IMPORTED_MODULE_3__["isSome"])(e) ? e.spatialReference : null, c, a).then(function (e) {
                        var s = {
                          scale: 0
                        };
                        return function (r, i) {
                          var o = e.repurposeFeature({
                            geometry: null,
                            attributes: r
                          });
                          return s.scale = Object(_core_maybe_js__WEBPACK_IMPORTED_MODULE_3__["isSome"])(i) ? i.scale : void 0, e.evaluate({
                            $feature: o,
                            $view: s
                          });
                        };
                      })["catch"](function (e) {
                        return x.error("Creating dictinoary expression failed:", e), null;
                      }), this._dictionaryPromise));

                    case 22:
                    case "end":
                      return _context6.stop();
                  }
                }
              }, _callee6, this);
            }));

            function fetchResources(_x11) {
              return _fetchResources.apply(this, arguments);
            }

            return fetchResources;
          }()
        }, {
          key: "getSymbol",
          value: function getSymbol() {
            return null;
          }
        }, {
          key: "getSymbols",
          value: function getSymbols() {
            return [];
          }
        }, {
          key: "getAttributeHash",
          value: function getAttributeHash() {
            return this.visualVariables && this.visualVariables.reduce(function (e, s) {
              return e + s.getAttributeHash();
            }, "");
          }
        }, {
          key: "getMeshHash",
          value: function getMeshHash() {
            return "".concat(this.url, "-").concat(JSON.stringify(this.fieldMap));
          }
        }, {
          key: "getSymbolFields",
          value: function getSymbolFields() {
            return this._symbolFields;
          }
        }, {
          key: "_getSymbolPart",
          value: function () {
            var _getSymbolPart2 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee7(e, s) {
              var t, r;
              return regeneratorRuntime.wrap(function _callee7$(_context7) {
                while (1) {
                  switch (_context7.prev = _context7.next) {
                    case 0:
                      if (!this._ongoingRequests.has(e)) {
                        _context7.next = 2;
                        break;
                      }

                      return _context7.abrupt("return", this._ongoingRequests.get(e).then(function (e) {
                        return e.data;
                      }));

                    case 2:
                      t = this._refSymbolUrlTemplate.replace(/\{itemName\}/gi, e), r = Object(_request_js__WEBPACK_IMPORTED_MODULE_19__["default"])(t, _objectSpread({
                        responseType: "json",
                        query: {
                          f: "json"
                        }
                      }, s));

                      this._ongoingRequests.set(e, r);

                      _context7.prev = 4;
                      _context7.next = 7;
                      return r;

                    case 7:
                      return _context7.abrupt("return", _context7.sent.data);

                    case 10:
                      _context7.prev = 10;
                      _context7.t0 = _context7["catch"](4);
                      return _context7.abrupt("return", (this._ongoingRequests["delete"](e), Object(_core_promiseUtils_js__WEBPACK_IMPORTED_MODULE_14__["reject"])(_context7.t0)));

                    case 13:
                    case "end":
                      return _context7.stop();
                  }
                }
              }, _callee7, this, [[4, 10]]);
            }));

            function _getSymbolPart(_x12, _x13) {
              return _getSymbolPart2.apply(this, arguments);
            }

            return _getSymbolPart;
          }()
        }, {
          key: "_combineSymbolParts",
          value: function _combineSymbolParts(e, s) {
            if (!e || 0 === e.length) return null;
            if (1 === e.length) return {
              type: "CIMSymbolReference",
              symbol: e[0],
              primitiveOverrides: s
            };

            var t = _objectSpread({}, e[0]);

            t.symbolLayers = [];

            var _iterator6 = _createForOfIteratorHelper(e),
                _step6;

            try {
              for (_iterator6.s(); !(_step6 = _iterator6.n()).done;) {
                var _t$symbolLayers;

                var _s6 = _step6.value;
                var _e6 = _s6;

                (_t$symbolLayers = t.symbolLayers).unshift.apply(_t$symbolLayers, _toConsumableArray(_e6.symbolLayers));
              }
            } catch (err) {
              _iterator6.e(err);
            } finally {
              _iterator6.f();
            }

            return {
              type: "CIMSymbolReference",
              symbol: t,
              primitiveOverrides: s
            };
          }
        }, {
          key: "_cimPartsToCIMSymbol",
          value: function () {
            var _cimPartsToCIMSymbol2 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee8(e, s, t) {
              var r, _s7, i;

              return regeneratorRuntime.wrap(function _callee8$(_context8) {
                while (1) {
                  switch (_context8.prev = _context8.next) {
                    case 0:
                      r = new Array(e.length);

                      for (_s7 = 0; _s7 < e.length; _s7++) {
                        r[_s7] = this._getSymbolPart(e[_s7], t);
                      }

                      _context8.next = 4;
                      return Object(_core_promiseUtils_js__WEBPACK_IMPORTED_MODULE_14__["all"])(r);

                    case 4:
                      i = _context8.sent;
                      return _context8.abrupt("return", new _symbols_CIMSymbol_js__WEBPACK_IMPORTED_MODULE_18__["default"]({
                        data: this._combineSymbolParts(i, s)
                      }));

                    case 6:
                    case "end":
                      return _context8.stop();
                  }
                }
              }, _callee8, this);
            }));

            function _cimPartsToCIMSymbol(_x14, _x15, _x16) {
              return _cimPartsToCIMSymbol2.apply(this, arguments);
            }

            return _cimPartsToCIMSymbol;
          }()
        }]);

        return w;
      }(Object(_mixins_VisualVariablesMixin_js__WEBPACK_IMPORTED_MODULE_21__["VisualVariablesMixin"])(_Renderer_js__WEBPACK_IMPORTED_MODULE_20__["default"]));

      Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_7__["property"])({
        type: Object,
        json: {
          read: {
            source: "configuration"
          },
          write: {
            target: "configuration"
          }
        }
      })], v.prototype, "config", void 0), Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_7__["property"])({
        type: Object,
        json: {
          write: !0
        }
      })], v.prototype, "fieldMap", void 0), Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_7__["property"])({
        type: String,
        json: {
          read: {
            source: "scalingExpressionInfo.expression"
          },
          write: !0
        }
      })], v.prototype, "scaleExpression", void 0), Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_writer_js__WEBPACK_IMPORTED_MODULE_9__["writer"])("scaleExpression")], v.prototype, "writeData", null), Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_7__["property"])({
        type: String,
        json: {
          read: {
            source: "scalingExpressionInfo.title"
          },
          write: {
            target: "scalingExpressionInfo.title",
            overridePolicy: function overridePolicy(e) {
              return {
                enabled: !!e && !!this.scaleExpression
              };
            }
          }
        }
      })], v.prototype, "scaleExpressionTitle", void 0), Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_7__["property"])({
        type: String,
        json: {
          write: !0
        }
      })], v.prototype, "url", void 0), Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_writer_js__WEBPACK_IMPORTED_MODULE_9__["writer"])("visualVariables")], v.prototype, "writeVisualVariables", null), v = _w = Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_subclass_js__WEBPACK_IMPORTED_MODULE_8__["subclass"])("esri.renderers.DictionaryRenderer")], v);
      var S = v;
      /* harmony default export */

      __webpack_exports__["default"] = S;
      /***/
    },

    /***/
    "MsUj":
    /*!********************************************************************************!*\
      !*** ./node_modules/@arcgis/core/renderers/support/DotDensityLegendOptions.js ***!
      \********************************************************************************/

    /*! exports provided: default */

    /***/
    function MsUj(module, __webpack_exports__, __webpack_require__) {
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


      var _e7;

      var p = _e7 = /*#__PURE__*/function (_core_JSONSupport_js_2) {
        _inherits(e, _core_JSONSupport_js_2);

        var _super4 = _createSuper(e);

        function e() {
          var _this6;

          _classCallCheck(this, e);

          _this6 = _super4.apply(this, arguments), _this6.unit = null;
          return _this6;
        }

        _createClass(e, [{
          key: "clone",
          value: function clone() {
            return new _e7({
              unit: this.unit
            });
          }
        }]);

        return e;
      }(_core_JSONSupport_js__WEBPACK_IMPORTED_MODULE_9__["JSONSupport"]);

      Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_4__["property"])({
        type: String,
        json: {
          write: !0
        }
      })], p.prototype, "unit", void 0), p = _e7 = Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_subclass_js__WEBPACK_IMPORTED_MODULE_5__["subclass"])("esri.renderers.support.DotDensityLegendOptions")], p);
      var i = p;
      /* harmony default export */

      __webpack_exports__["default"] = i;
      /***/
    },

    /***/
    "R4xK":
    /*!****************************************************************!*\
      !*** ./node_modules/@arcgis/core/renderers/HeatmapRenderer.js ***!
      \****************************************************************/

    /*! exports provided: default */

    /***/
    function R4xK(module, __webpack_exports__, __webpack_require__) {
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


      var _layers_support_fieldUtils_js__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
      /*! ../layers/support/fieldUtils.js */
      "wdpY");
      /* harmony import */


      var _Color_js__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
      /*! ../Color.js */
      "nvBr");
      /* harmony import */


      var _Renderer_js__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
      /*! ./Renderer.js */
      "ZnuT");
      /* harmony import */


      var _support_HeatmapColorStop_js__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(
      /*! ./support/HeatmapColorStop.js */
      "2uuY");
      /*
      All material copyright ESRI, All Rights Reserved, unless otherwise specified.
      See https://js.arcgis.com/4.18/esri/copyright.txt for details.
      */


      var _a;

      var m = _a = /*#__PURE__*/function (_Renderer_js__WEBPACK) {
        _inherits(a, _Renderer_js__WEBPACK);

        var _super5 = _createSuper(a);

        function a(t) {
          var _this7;

          _classCallCheck(this, a);

          _this7 = _super5.call(this, t), _this7.blurRadius = 10, _this7.colorStops = [new _support_HeatmapColorStop_js__WEBPACK_IMPORTED_MODULE_14__["default"]({
            ratio: 0,
            color: new _Color_js__WEBPACK_IMPORTED_MODULE_12__["default"]("rgba(255, 140, 0, 0)")
          }), new _support_HeatmapColorStop_js__WEBPACK_IMPORTED_MODULE_14__["default"]({
            ratio: .75,
            color: new _Color_js__WEBPACK_IMPORTED_MODULE_12__["default"]("rgba(255, 140, 0, 1)")
          }), new _support_HeatmapColorStop_js__WEBPACK_IMPORTED_MODULE_14__["default"]({
            ratio: .9,
            color: new _Color_js__WEBPACK_IMPORTED_MODULE_12__["default"]("rgba(255, 0,   0, 1)")
          })], _this7.field = null, _this7.fieldOffset = 0, _this7.maxPixelIntensity = 100, _this7.minPixelIntensity = 0, _this7.type = "heatmap";
          return _this7;
        }

        _createClass(a, [{
          key: "collectRequiredFields",
          value: function () {
            var _collectRequiredFields3 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee9(t, e) {
              var r;
              return regeneratorRuntime.wrap(function _callee9$(_context9) {
                while (1) {
                  switch (_context9.prev = _context9.next) {
                    case 0:
                      r = this.field;
                      r && "string" == typeof r && Object(_layers_support_fieldUtils_js__WEBPACK_IMPORTED_MODULE_11__["collectField"])(t, e, r);

                    case 2:
                    case "end":
                      return _context9.stop();
                  }
                }
              }, _callee9, this);
            }));

            function collectRequiredFields(_x17, _x18) {
              return _collectRequiredFields3.apply(this, arguments);
            }

            return collectRequiredFields;
          }()
        }, {
          key: "getAttributeHash",
          value: function getAttributeHash() {
            return null;
          }
        }, {
          key: "getMeshHash",
          value: function getMeshHash() {
            return "".concat(JSON.stringify(this.colorStops), ".").concat(this.blurRadius, ".").concat(this.field);
          }
        }, {
          key: "clone",
          value: function clone() {
            return new _a({
              blurRadius: this.blurRadius,
              colorStops: Object(_core_lang_js__WEBPACK_IMPORTED_MODULE_2__["clone"])(this.colorStops),
              field: this.field,
              maxPixelIntensity: this.maxPixelIntensity,
              minPixelIntensity: this.minPixelIntensity
            });
          }
        }]);

        return a;
      }(_Renderer_js__WEBPACK_IMPORTED_MODULE_13__["default"]);

      Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_5__["property"])({
        type: Number,
        json: {
          write: !0
        }
      })], m.prototype, "blurRadius", void 0), Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_5__["property"])({
        type: [_support_HeatmapColorStop_js__WEBPACK_IMPORTED_MODULE_14__["default"]],
        json: {
          write: !0
        }
      })], m.prototype, "colorStops", void 0), Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_5__["property"])({
        type: String,
        json: {
          write: !0
        }
      })], m.prototype, "field", void 0), Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_5__["property"])({
        type: Number,
        json: {
          write: {
            overridePolicy: function overridePolicy(t, e, r) {
              return {
                enabled: null == r
              };
            }
          }
        }
      })], m.prototype, "fieldOffset", void 0), Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_5__["property"])({
        type: Number,
        json: {
          write: !0
        }
      })], m.prototype, "maxPixelIntensity", void 0), Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_5__["property"])({
        type: Number,
        json: {
          write: !0
        }
      })], m.prototype, "minPixelIntensity", void 0), Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_enumeration_js__WEBPACK_IMPORTED_MODULE_6__["enumeration"])({
        heatmap: "heatmap"
      })], m.prototype, "type", void 0), m = _a = Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_subclass_js__WEBPACK_IMPORTED_MODULE_7__["subclass"])("esri.renderers.HeatmapRenderer")], m);
      var c = m;
      /* harmony default export */

      __webpack_exports__["default"] = c;
      /***/
    },

    /***/
    "XNvV":
    /*!**************************************************************!*\
      !*** ./node_modules/@arcgis/core/renderers/support/types.js ***!
      \**************************************************************/

    /*! exports provided: rendererTypes, webSceneRendererTypes */

    /***/
    function XNvV(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "rendererTypes", function () {
        return m;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "webSceneRendererTypes", function () {
        return n;
      });
      /* harmony import */


      var _Renderer_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ../Renderer.js */
      "ZnuT");
      /* harmony import */


      var _ClassBreaksRenderer_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ../ClassBreaksRenderer.js */
      "tCO6");
      /* harmony import */


      var _UniqueValueRenderer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ../UniqueValueRenderer.js */
      "2gBT");
      /* harmony import */


      var _DictionaryRenderer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ../DictionaryRenderer.js */
      "JhoD");
      /* harmony import */


      var _DotDensityRenderer_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ../DotDensityRenderer.js */
      "tI3Y");
      /* harmony import */


      var _HeatmapRenderer_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ../HeatmapRenderer.js */
      "R4xK");
      /* harmony import */


      var _SimpleRenderer_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ../SimpleRenderer.js */
      "/1dM");
      /*
      All material copyright ESRI, All Rights Reserved, unless otherwise specified.
      See https://js.arcgis.com/4.18/esri/copyright.txt for details.
      */


      var m = {
        key: "type",
        base: _Renderer_js__WEBPACK_IMPORTED_MODULE_0__["default"],
        typeMap: {
          heatmap: _HeatmapRenderer_js__WEBPACK_IMPORTED_MODULE_5__["default"],
          simple: _SimpleRenderer_js__WEBPACK_IMPORTED_MODULE_6__["default"],
          "unique-value": _UniqueValueRenderer_js__WEBPACK_IMPORTED_MODULE_2__["default"],
          "class-breaks": _ClassBreaksRenderer_js__WEBPACK_IMPORTED_MODULE_1__["default"],
          "dot-density": _DotDensityRenderer_js__WEBPACK_IMPORTED_MODULE_4__["default"],
          dictionary: _DictionaryRenderer_js__WEBPACK_IMPORTED_MODULE_3__["default"]
        },
        errorContext: "renderer"
      },
          n = {
        key: "type",
        base: _Renderer_js__WEBPACK_IMPORTED_MODULE_0__["default"],
        typeMap: {
          simple: _SimpleRenderer_js__WEBPACK_IMPORTED_MODULE_6__["default"],
          "unique-value": _UniqueValueRenderer_js__WEBPACK_IMPORTED_MODULE_2__["default"],
          "class-breaks": _ClassBreaksRenderer_js__WEBPACK_IMPORTED_MODULE_1__["default"]
        },
        errorContext: "renderer"
      };
      /***/
    },

    /***/
    "XW+/":
    /*!***************************************************************************!*\
      !*** ./node_modules/@arcgis/core/renderers/support/AttributeColorInfo.js ***!
      \***************************************************************************/

    /*! exports provided: default */

    /***/
    function XW(module, __webpack_exports__, __webpack_require__) {
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


      var _Color_js__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
      /*! ../../Color.js */
      "nvBr");
      /*
      All material copyright ESRI, All Rights Reserved, unless otherwise specified.
      See https://js.arcgis.com/4.18/esri/copyright.txt for details.
      */


      var _n2;

      var u = _core_Logger_js__WEBPACK_IMPORTED_MODULE_2__["default"].getLogger("esri.renderers.support.AttributeColorInfo");

      var c = _n2 = /*#__PURE__*/function (_core_JSONSupport_js_3) {
        _inherits(n, _core_JSONSupport_js_3);

        var _super6 = _createSuper(n);

        function n(r) {
          var _this8;

          _classCallCheck(this, n);

          _this8 = _super6.call(this, r), _this8.color = null, _this8.field = null, _this8.label = null, _this8.valueExpression = null, _this8.valueExpressionTitle = null;
          return _this8;
        }

        _createClass(n, [{
          key: "castField",
          value: function castField(r) {
            return null == r ? r : "function" == typeof r ? (u.error(".field: field must be a string value"), null) : Object(_core_accessorSupport_ensureType_js__WEBPACK_IMPORTED_MODULE_3__["ensureString"])(r);
          }
        }, {
          key: "getAttributeHash",
          value: function getAttributeHash() {
            return "".concat(this.field, "-").concat(this.valueExpression);
          }
        }, {
          key: "clone",
          value: function clone() {
            return new _n2({
              color: this.color && this.color.clone(),
              field: this.field,
              label: this.label,
              valueExpression: this.valueExpression,
              valueExpressionTitle: this.valueExpressionTitle
            });
          }
        }]);

        return n;
      }(_core_JSONSupport_js__WEBPACK_IMPORTED_MODULE_10__["JSONSupport"]);

      Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_4__["property"])({
        type: _Color_js__WEBPACK_IMPORTED_MODULE_11__["default"],
        json: {
          type: [Number],
          write: !0
        }
      })], c.prototype, "color", void 0), Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_4__["property"])({
        type: String,
        json: {
          write: !0
        }
      })], c.prototype, "field", void 0), Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_cast_js__WEBPACK_IMPORTED_MODULE_5__["cast"])("field")], c.prototype, "castField", null), Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_4__["property"])({
        type: String,
        json: {
          write: !0
        }
      })], c.prototype, "label", void 0), Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_4__["property"])({
        type: String,
        json: {
          write: !0
        }
      })], c.prototype, "valueExpression", void 0), Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_4__["property"])({
        type: String,
        json: {
          write: !0
        }
      })], c.prototype, "valueExpressionTitle", void 0), c = _n2 = Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_subclass_js__WEBPACK_IMPORTED_MODULE_6__["subclass"])("esri.renderers.support.AttributeColorInfo")], c);
      var a = c;
      /* harmony default export */

      __webpack_exports__["default"] = a;
      /***/
    },

    /***/
    "tI3Y":
    /*!*******************************************************************!*\
      !*** ./node_modules/@arcgis/core/renderers/DotDensityRenderer.js ***!
      \*******************************************************************/

    /*! exports provided: default */

    /***/
    function tI3Y(module, __webpack_exports__, __webpack_require__) {
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


      var _core_accessorSupport_decorators_aliasOf_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ../core/accessorSupport/decorators/aliasOf.js */
      "Stxv");
      /* harmony import */


      var _core_accessorSupport_decorators_enumeration_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! ../core/accessorSupport/decorators/enumeration.js */
      "RI0u");
      /* harmony import */


      var _core_accessorSupport_decorators_subclass_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! ../core/accessorSupport/decorators/subclass.js */
      "04ZG");
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


      var _layers_support_fieldUtils_js__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
      /*! ../layers/support/fieldUtils.js */
      "wdpY");
      /* harmony import */


      var _Color_js__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
      /*! ../Color.js */
      "nvBr");
      /* harmony import */


      var _symbols_SimpleLineSymbol_js__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(
      /*! ../symbols/SimpleLineSymbol.js */
      "21Ip");
      /* harmony import */


      var _symbols_SimpleFillSymbol_js__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(
      /*! ../symbols/SimpleFillSymbol.js */
      "DXYb");
      /* harmony import */


      var _Renderer_js__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(
      /*! ./Renderer.js */
      "ZnuT");
      /* harmony import */


      var _mixins_VisualVariablesMixin_js__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(
      /*! ./mixins/VisualVariablesMixin.js */
      "vk02");
      /* harmony import */


      var _support_AttributeColorInfo_js__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(
      /*! ./support/AttributeColorInfo.js */
      "XW+/");
      /* harmony import */


      var _support_DotDensityLegendOptions_js__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(
      /*! ./support/DotDensityLegendOptions.js */
      "MsUj");
      /*
      All material copyright ESRI, All Rights Reserved, unless otherwise specified.
      See https://js.arcgis.com/4.18/esri/copyright.txt for details.
      */


      var _m;

      var y = _m = /*#__PURE__*/function (_Object3) {
        _inherits(m, _Object3);

        var _super7 = _createSuper(m);

        function m(e) {
          var _this9;

          _classCallCheck(this, m);

          _this9 = _super7.call(this, e), _this9.attributes = null, _this9.backgroundColor = new _Color_js__WEBPACK_IMPORTED_MODULE_13__["default"]([0, 0, 0, 0]), _this9.blendDots = !0, _this9.dotBlendingEnabled = !0, _this9.dotShape = "square", _this9.dotSize = 1, _this9.legendOptions = null, _this9.outline = new _symbols_SimpleLineSymbol_js__WEBPACK_IMPORTED_MODULE_14__["default"](), _this9.dotValue = null, _this9.referenceDotValue = null, _this9.referenceScale = null, _this9.seed = 1, _this9.type = "dot-density";
          return _this9;
        }

        _createClass(m, [{
          key: "calculateDotValue",
          value: function calculateDotValue(e) {
            if (null == this.referenceScale) return this.dotValue;
            var t = e / this.referenceScale * this.dotValue;
            return t < 1 ? 1 : t;
          }
        }, {
          key: "getSymbol",
          value: function getSymbol() {
            return new _symbols_SimpleFillSymbol_js__WEBPACK_IMPORTED_MODULE_15__["default"]({
              outline: this.outline
            });
          }
        }, {
          key: "getSymbolAsync",
          value: function () {
            var _getSymbolAsync3 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee10() {
              return regeneratorRuntime.wrap(function _callee10$(_context10) {
                while (1) {
                  switch (_context10.prev = _context10.next) {
                    case 0:
                      return _context10.abrupt("return", this.getSymbol());

                    case 1:
                    case "end":
                      return _context10.stop();
                  }
                }
              }, _callee10, this);
            }));

            function getSymbolAsync() {
              return _getSymbolAsync3.apply(this, arguments);
            }

            return getSymbolAsync;
          }()
        }, {
          key: "getSymbols",
          value: function getSymbols() {
            return [this.getSymbol()];
          }
        }, {
          key: "getAttributeHash",
          value: function getAttributeHash() {
            return this.attributes && this.attributes.reduce(function (e, t) {
              return e + t.getAttributeHash();
            }, "");
          }
        }, {
          key: "getMeshHash",
          value: function getMeshHash() {
            return JSON.stringify(this.outline);
          }
        }, {
          key: "clone",
          value: function clone() {
            return new _m({
              attributes: Object(_core_lang_js__WEBPACK_IMPORTED_MODULE_2__["clone"])(this.attributes),
              backgroundColor: Object(_core_lang_js__WEBPACK_IMPORTED_MODULE_2__["clone"])(this.backgroundColor),
              dotBlendingEnabled: Object(_core_lang_js__WEBPACK_IMPORTED_MODULE_2__["clone"])(this.dotBlendingEnabled),
              dotShape: Object(_core_lang_js__WEBPACK_IMPORTED_MODULE_2__["clone"])(this.dotShape),
              dotSize: Object(_core_lang_js__WEBPACK_IMPORTED_MODULE_2__["clone"])(this.dotSize),
              dotValue: Object(_core_lang_js__WEBPACK_IMPORTED_MODULE_2__["clone"])(this.dotValue),
              legendOptions: Object(_core_lang_js__WEBPACK_IMPORTED_MODULE_2__["clone"])(this.legendOptions),
              outline: Object(_core_lang_js__WEBPACK_IMPORTED_MODULE_2__["clone"])(this.outline),
              referenceScale: Object(_core_lang_js__WEBPACK_IMPORTED_MODULE_2__["clone"])(this.referenceScale),
              visualVariables: Object(_core_lang_js__WEBPACK_IMPORTED_MODULE_2__["clone"])(this.visualVariables),
              authoringInfo: this.authoringInfo && this.authoringInfo.clone()
            });
          }
        }, {
          key: "getControllerHash",
          value: function getControllerHash() {
            return "".concat(this.attributes.map(function (e) {
              return e.field || e.valueExpression || "";
            }), "-").concat(this.outline && JSON.stringify(this.outline.toJSON()) || "");
          }
        }, {
          key: "collectRequiredFields",
          value: function () {
            var _collectRequiredFields4 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee11(e, t) {
              var _iterator7, _step7, o;

              return regeneratorRuntime.wrap(function _callee11$(_context11) {
                while (1) {
                  switch (_context11.prev = _context11.next) {
                    case 0:
                      _context11.next = 2;
                      return this.collectVVRequiredFields(e, t);

                    case 2:
                      _iterator7 = _createForOfIteratorHelper(this.attributes);
                      _context11.prev = 3;

                      _iterator7.s();

                    case 5:
                      if ((_step7 = _iterator7.n()).done) {
                        _context11.next = 14;
                        break;
                      }

                      o = _step7.value;
                      _context11.t0 = o.valueExpression;

                      if (!_context11.t0) {
                        _context11.next = 11;
                        break;
                      }

                      _context11.next = 11;
                      return Object(_layers_support_fieldUtils_js__WEBPACK_IMPORTED_MODULE_12__["collectArcadeFieldNames"])(e, t, o.valueExpression);

                    case 11:
                      o.field && e.add(o.field);

                    case 12:
                      _context11.next = 5;
                      break;

                    case 14:
                      _context11.next = 19;
                      break;

                    case 16:
                      _context11.prev = 16;
                      _context11.t1 = _context11["catch"](3);

                      _iterator7.e(_context11.t1);

                    case 19:
                      _context11.prev = 19;

                      _iterator7.f();

                      return _context11.finish(19);

                    case 22:
                    case "end":
                      return _context11.stop();
                  }
                }
              }, _callee11, this, [[3, 16, 19, 22]]);
            }));

            function collectRequiredFields(_x19, _x20) {
              return _collectRequiredFields4.apply(this, arguments);
            }

            return collectRequiredFields;
          }()
        }]);

        return m;
      }(Object(_mixins_VisualVariablesMixin_js__WEBPACK_IMPORTED_MODULE_17__["VisualVariablesMixin"])(_Renderer_js__WEBPACK_IMPORTED_MODULE_16__["default"]));

      Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_5__["property"])({
        type: [_support_AttributeColorInfo_js__WEBPACK_IMPORTED_MODULE_18__["default"]],
        json: {
          write: !0
        }
      })], y.prototype, "attributes", void 0), Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_5__["property"])({
        type: _Color_js__WEBPACK_IMPORTED_MODULE_13__["default"],
        json: {
          write: !0
        }
      })], y.prototype, "backgroundColor", void 0), Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_5__["property"])({
        type: Boolean
      }), Object(_core_accessorSupport_decorators_aliasOf_js__WEBPACK_IMPORTED_MODULE_6__["aliasOf"])("dotBlendingEnabled")], y.prototype, "blendDots", void 0), Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_5__["property"])({
        type: Boolean,
        json: {
          write: !0
        }
      })], y.prototype, "dotBlendingEnabled", void 0), Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_5__["property"])({
        type: String,
        json: {
          write: !1
        }
      })], y.prototype, "dotShape", void 0), Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_5__["property"])({
        type: Number,
        json: {
          write: !1
        }
      })], y.prototype, "dotSize", void 0), Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_5__["property"])({
        type: _support_DotDensityLegendOptions_js__WEBPACK_IMPORTED_MODULE_19__["default"],
        json: {
          write: !0
        }
      })], y.prototype, "legendOptions", void 0), Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_5__["property"])({
        type: _symbols_SimpleLineSymbol_js__WEBPACK_IMPORTED_MODULE_14__["default"],
        json: {
          "default": null,
          write: !0
        }
      })], y.prototype, "outline", void 0), Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_5__["property"])({
        type: Number,
        json: {
          write: !0
        }
      })], y.prototype, "dotValue", void 0), Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_5__["property"])({
        type: Number
      }), Object(_core_accessorSupport_decorators_aliasOf_js__WEBPACK_IMPORTED_MODULE_6__["aliasOf"])("dotValue")], y.prototype, "referenceDotValue", void 0), Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_5__["property"])({
        type: Number,
        json: {
          write: !0
        }
      })], y.prototype, "referenceScale", void 0), Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_5__["property"])({
        type: Number,
        json: {
          write: !0
        }
      })], y.prototype, "seed", void 0), Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_enumeration_js__WEBPACK_IMPORTED_MODULE_7__["enumeration"])({
        dotDensity: "dot-density"
      })], y.prototype, "type", void 0), y = _m = Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_subclass_js__WEBPACK_IMPORTED_MODULE_8__["subclass"])("esri.renderers.DotDensityRenderer")], y);
      var b = y;
      /* harmony default export */

      __webpack_exports__["default"] = b;
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

    }
  }]);
})();
//# sourceMappingURL=default~BuildingSceneLayer-js~CSVLayer-js~FeatureLayer-js~KMLLayer-js~MapImageLayer-js~MapNotesLayer~dc20c115-es5.js.map