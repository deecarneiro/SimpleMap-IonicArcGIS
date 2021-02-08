(function () {
  function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

  function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

  function _iterableToArrayLimit(arr, i) { if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr))) return; var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

  function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

  function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }

  function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

  function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && Symbol.iterator in Object(iter)) return Array.from(iter); }

  function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }

  function _createForOfIteratorHelper(o, allowArrayLike) { var it; if (typeof Symbol === "undefined" || o[Symbol.iterator] == null) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e13) { throw _e13; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = o[Symbol.iterator](); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e14) { didErr = true; err = _e14; }, f: function f() { try { if (!normalCompletion && it["return"] != null) it["return"](); } finally { if (didErr) throw err; } } }; }

  function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

  function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

  function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

  function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

  function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

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

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["default~BuildingSceneLayer-js~CSVLayer-js~FeatureLayer-js~ImageryLayer-js~ImageryTileLayer-js~KMLLay~253c3a50"], {
    /***/
    "2gBT":
    /*!********************************************************************!*\
      !*** ./node_modules/@arcgis/core/renderers/UniqueValueRenderer.js ***!
      \********************************************************************/

    /*! exports provided: default */

    /***/
    function gBT(module, __webpack_exports__, __webpack_require__) {
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


      var _core_object_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ../core/object.js */
      "nR38");
      /* harmony import */


      var _core_maybe_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ../core/maybe.js */
      "srIe");
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


      var _core_accessorSupport_decorators_cast_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! ../core/accessorSupport/decorators/cast.js */
      "Gj5k");
      /* harmony import */


      var _core_accessorSupport_decorators_enumeration_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! ../core/accessorSupport/decorators/enumeration.js */
      "RI0u");
      /* harmony import */


      var _core_accessorSupport_decorators_reader_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
      /*! ../core/accessorSupport/decorators/reader.js */
      "r88o");
      /* harmony import */


      var _core_accessorSupport_decorators_subclass_js__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
      /*! ../core/accessorSupport/decorators/subclass.js */
      "04ZG");
      /* harmony import */


      var _core_accessorSupport_decorators_writer_js__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
      /*! ../core/accessorSupport/decorators/writer.js */
      "Cduq");
      /* harmony import */


      var _core_Error_js__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
      /*! ../core/Error.js */
      "zlDU");
      /* harmony import */


      var _core_urlUtils_js__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(
      /*! ../core/urlUtils.js */
      "4EHJ");
      /* harmony import */


      var _core_uuid_js__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(
      /*! ../core/uuid.js */
      "ju1D");
      /* harmony import */


      var _portal_support_resourceExtension_js__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(
      /*! ../portal/support/resourceExtension.js */
      "9AIY");
      /* harmony import */


      var _chunks_persistableUrlUtils_js__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(
      /*! ../chunks/persistableUrlUtils.js */
      "/PL2");
      /* harmony import */


      var _core_promiseUtils_js__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(
      /*! ../core/promiseUtils.js */
      "9MzC");
      /* harmony import */


      var _support_arcadeOnDemand_js__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(
      /*! ../support/arcadeOnDemand.js */
      "gvqN");
      /* harmony import */


      var _layers_support_fieldUtils_js__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(
      /*! ../layers/support/fieldUtils.js */
      "wdpY");
      /* harmony import */


      var _portal_Portal_js__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(
      /*! ../portal/Portal.js */
      "AiS/");
      /* harmony import */


      var _symbols_WebStyleSymbol_js__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(
      /*! ../symbols/WebStyleSymbol.js */
      "3cLA");
      /* harmony import */


      var _chunks_symbols_js__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(
      /*! ../chunks/symbols.js */
      "nNR5");
      /* harmony import */


      var _support_LegendOptions_js__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(
      /*! ./support/LegendOptions.js */
      "1hFN");
      /* harmony import */


      var _Renderer_js__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(
      /*! ./Renderer.js */
      "ZnuT");
      /* harmony import */


      var _mixins_VisualVariablesMixin_js__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(
      /*! ./mixins/VisualVariablesMixin.js */
      "vk02");
      /* harmony import */


      var _support_commonProperties_js__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(
      /*! ./support/commonProperties.js */
      "guTz");
      /* harmony import */


      var _core_accessorSupport_diffUtils_js__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(
      /*! ../core/accessorSupport/diffUtils.js */
      "DxxZ");
      /* harmony import */


      var _support_UniqueValueInfo_js__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(
      /*! ./support/UniqueValueInfo.js */
      "mfMX");
      /* harmony import */


      var _symbols_support_styleUtils_js__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(
      /*! ../symbols/support/styleUtils.js */
      "NDpP");
      /*
      All material copyright ESRI, All Rights Reserved, unless otherwise specified.
      See https://js.arcgis.com/4.18/esri/copyright.txt for details.
      */


      var _M;

      var N = _core_Logger_js__WEBPACK_IMPORTED_MODULE_5__["default"].getLogger("esri.renderers.UniqueValueRenderer"),
          R = Object(_core_accessorSupport_ensureType_js__WEBPACK_IMPORTED_MODULE_6__["ensureType"])(_support_UniqueValueInfo_js__WEBPACK_IMPORTED_MODULE_29__["default"]);

      var P = _M = /*#__PURE__*/function (_Object) {
        _inherits(M, _Object);

        var _super = _createSuper(M);

        function M(e) {
          var _this;

          _classCallCheck(this, M);

          _this = _super.call(this, e), _this._valueInfoMap = {}, _this._isDefaultSymbolDerived = !1, _this.type = "unique-value", _this.backgroundFillSymbol = null, _this.field = null, _this.field2 = null, _this.field3 = null, _this.valueExpression = null, _this.valueExpressionTitle = null, _this.legendOptions = null, _this.defaultLabel = null, _this.fieldDelimiter = null, _this.portal = null, _this.styleOrigin = null, _this.diff = {
            uniqueValueInfos: function uniqueValueInfos(e, t) {
              if (!e && !t) return;
              if (!e || !t) return {
                type: "complete",
                oldValue: e,
                newValue: t
              };
              var i = !1;
              var r = {
                type: "collection",
                added: [],
                removed: [],
                changed: [],
                unchanged: []
              };

              var _loop = function _loop(s) {
                var o = e.find(function (e) {
                  return e.value === t[s].value;
                });
                o ? Object(_core_accessorSupport_diffUtils_js__WEBPACK_IMPORTED_MODULE_28__["diff"])(o, t[s]) ? (r.changed.push({
                  type: "complete",
                  oldValue: o,
                  newValue: t[s]
                }), i = !0) : r.unchanged.push({
                  oldValue: o,
                  newValue: t[s]
                }) : (r.added.push(t[s]), i = !0);
              };

              for (var s = 0; s < t.length; s++) {
                _loop(s);
              }

              var _loop2 = function _loop2(_s) {
                t.find(function (t) {
                  return t.value === e[_s].value;
                }) || (r.removed.push(e[_s]), i = !0);
              };

              for (var _s = 0; _s < e.length; _s++) {
                _loop2(_s);
              }

              return i ? r : void 0;
            }
          }, _this._set("uniqueValueInfos", []);
          return _this;
        }

        _createClass(M, [{
          key: "_cache",
          get: function get() {
            return {
              compiledFunc: null
            };
          }
        }, {
          key: "castField",
          value: function castField(e) {
            return null == e || "function" == typeof e ? e : Object(_core_accessorSupport_ensureType_js__WEBPACK_IMPORTED_MODULE_6__["ensureString"])(e);
          }
        }, {
          key: "writeField",
          value: function writeField(e, t, i, r) {
            "string" == typeof e ? t[i] = e : r && r.messages ? r.messages.push(new _core_Error_js__WEBPACK_IMPORTED_MODULE_13__["default"]("property:unsupported", "UniqueValueRenderer.field set to a function cannot be written to JSON")) : N.error(".field: cannot write field to JSON since it's not a string value");
          }
        }, {
          key: "defaultSymbol",
          set: function set(e) {
            this._isDefaultSymbolDerived = !1, this._set("defaultSymbol", e);
          }
        }, {
          key: "readPortal",
          value: function readPortal(e, t, i) {
            return i.portal || _portal_Portal_js__WEBPACK_IMPORTED_MODULE_21__["default"].getDefault();
          }
        }, {
          key: "readStyleOrigin",
          value: function readStyleOrigin(e, t, i) {
            if (t.styleName) return Object.freeze({
              styleName: t.styleName
            });

            if (t.styleUrl) {
              var _e = Object(_chunks_persistableUrlUtils_js__WEBPACK_IMPORTED_MODULE_17__["f"])(t.styleUrl, i);

              return Object.freeze({
                styleUrl: _e
              });
            }
          }
        }, {
          key: "writeStyleOrigin",
          value: function writeStyleOrigin(e, t, i, r) {
            e.styleName ? t.styleName = e.styleName : e.styleUrl && (t.styleUrl = Object(_chunks_persistableUrlUtils_js__WEBPACK_IMPORTED_MODULE_17__["t"])(e.styleUrl, r));
          }
        }, {
          key: "uniqueValueInfos",
          set: function set(e) {
            this.styleOrigin ? N.error("#uniqueValueInfos=", "Cannot modify unique value infos of a UniqueValueRenderer created from a web style") : (this._set("uniqueValueInfos", e), this._updateValueInfoMap());
          }
        }, {
          key: "addUniqueValueInfo",
          value: function addUniqueValueInfo(e, t) {
            if (this.styleOrigin) return void N.error("#addUniqueValueInfo()", "Cannot modify unique value infos of a UniqueValueRenderer created from a web style");
            var i;
            i = "object" == typeof e ? R(e) : new _support_UniqueValueInfo_js__WEBPACK_IMPORTED_MODULE_29__["default"]({
              value: e,
              symbol: Object(_chunks_symbols_js__WEBPACK_IMPORTED_MODULE_23__["e"])(t)
            }), this.uniqueValueInfos.push(i), this._valueInfoMap[i.value] = i;
          }
        }, {
          key: "removeUniqueValueInfo",
          value: function removeUniqueValueInfo(e) {
            if (this.styleOrigin) N.error("#removeUniqueValueInfo()", "Cannot modify unique value infos of a UniqueValueRenderer created from a web style");else for (var t = 0; t < this.uniqueValueInfos.length; t++) {
              if (this.uniqueValueInfos[t].value === e + "") {
                delete this._valueInfoMap[e], this.uniqueValueInfos.splice(t, 1);
                break;
              }
            }
          }
        }, {
          key: "getUniqueValueInfo",
          value: function () {
            var _getUniqueValueInfo2 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(e, t) {
              var i;
              return regeneratorRuntime.wrap(function _callee$(_context) {
                while (1) {
                  switch (_context.prev = _context.next) {
                    case 0:
                      i = t;
                      _context.t0 = this.valueExpression && (Object(_core_maybe_js__WEBPACK_IMPORTED_MODULE_4__["isNone"])(t) || Object(_core_maybe_js__WEBPACK_IMPORTED_MODULE_4__["isNone"])(t.arcade));

                      if (!_context.t0) {
                        _context.next = 11;
                        break;
                      }

                      _context.t1 = _objectSpread;
                      _context.t2 = _objectSpread({}, i);
                      _context.t3 = {};
                      _context.next = 8;
                      return Object(_support_arcadeOnDemand_js__WEBPACK_IMPORTED_MODULE_19__["loadArcade"])();

                    case 8:
                      _context.t4 = _context.sent;
                      _context.t5 = {
                        arcade: _context.t4
                      };
                      i = (0, _context.t1)(_context.t2, _context.t3, _context.t5);

                    case 11:
                      return _context.abrupt("return", this._getUniqueValueInfo(e, i));

                    case 12:
                    case "end":
                      return _context.stop();
                  }
                }
              }, _callee, this);
            }));

            function getUniqueValueInfo(_x, _x2) {
              return _getUniqueValueInfo2.apply(this, arguments);
            }

            return getUniqueValueInfo;
          }()
        }, {
          key: "getSymbol",
          value: function getSymbol(e, t) {
            if (this.valueExpression && (Object(_core_maybe_js__WEBPACK_IMPORTED_MODULE_4__["isNone"])(t) || Object(_core_maybe_js__WEBPACK_IMPORTED_MODULE_4__["isNone"])(t.arcade))) return void N.error("#getSymbol()", "Please use getSymbolAsync if valueExpression is used");

            var i = this._getUniqueValueInfo(e, t);

            return i && i.symbol || this.defaultSymbol;
          }
        }, {
          key: "getSymbolAsync",
          value: function () {
            var _getSymbolAsync = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee2(e, t) {
              var i, s;
              return regeneratorRuntime.wrap(function _callee2$(_context2) {
                while (1) {
                  switch (_context2.prev = _context2.next) {
                    case 0:
                      i = t;
                      _context2.t0 = this.valueExpression && (Object(_core_maybe_js__WEBPACK_IMPORTED_MODULE_4__["isNone"])(i) || Object(_core_maybe_js__WEBPACK_IMPORTED_MODULE_4__["isNone"])(i.arcade));

                      if (!_context2.t0) {
                        _context2.next = 11;
                        break;
                      }

                      _context2.t1 = _objectSpread;
                      _context2.t2 = _objectSpread({}, i);
                      _context2.t3 = {};
                      _context2.next = 8;
                      return Object(_support_arcadeOnDemand_js__WEBPACK_IMPORTED_MODULE_19__["loadArcade"])();

                    case 8:
                      _context2.t4 = _context2.sent;
                      _context2.t5 = {
                        arcade: _context2.t4
                      };
                      i = (0, _context2.t1)(_context2.t2, _context2.t3, _context2.t5);

                    case 11:
                      s = this._getUniqueValueInfo(e, i);
                      return _context2.abrupt("return", s && s.symbol || this.defaultSymbol);

                    case 13:
                    case "end":
                      return _context2.stop();
                  }
                }
              }, _callee2, this);
            }));

            function getSymbolAsync(_x3, _x4) {
              return _getSymbolAsync.apply(this, arguments);
            }

            return getSymbolAsync;
          }()
        }, {
          key: "getSymbols",
          value: function getSymbols() {
            var e = [];

            var _iterator = _createForOfIteratorHelper(this.uniqueValueInfos),
                _step;

            try {
              for (_iterator.s(); !(_step = _iterator.n()).done;) {
                var t = _step.value;
                t.symbol && e.push(t.symbol);
              }
            } catch (err) {
              _iterator.e(err);
            } finally {
              _iterator.f();
            }

            return this.defaultSymbol && e.push(this.defaultSymbol), e;
          }
        }, {
          key: "getAttributeHash",
          value: function getAttributeHash() {
            return this.visualVariables && this.visualVariables.reduce(function (e, t) {
              return e + t.getAttributeHash();
            }, "");
          }
        }, {
          key: "getMeshHash",
          value: function getMeshHash() {
            return "".concat(JSON.stringify(this.backgroundFillSymbol), ".").concat(JSON.stringify(this.defaultSymbol), ".").concat(this.uniqueValueInfos.reduce(function (e, t) {
              return e + t.getMeshHash();
            }, ""), ".", "".concat(this.field, ".").concat(this.field2, ".").concat(this.field3, ".").concat(this.fieldDelimiter), ".").concat(this.valueExpression);
          }
        }, {
          key: "clone",
          value: function clone() {
            var e = new _M({
              field: this.field,
              field2: this.field2,
              field3: this.field3,
              defaultLabel: this.defaultLabel,
              defaultSymbol: Object(_core_lang_js__WEBPACK_IMPORTED_MODULE_2__["clone"])(this.defaultSymbol),
              valueExpression: this.valueExpression,
              valueExpressionTitle: this.valueExpressionTitle,
              fieldDelimiter: this.fieldDelimiter,
              visualVariables: Object(_core_lang_js__WEBPACK_IMPORTED_MODULE_2__["clone"])(this.visualVariables),
              legendOptions: Object(_core_lang_js__WEBPACK_IMPORTED_MODULE_2__["clone"])(this.legendOptions),
              authoringInfo: this.authoringInfo && this.authoringInfo.clone(),
              backgroundFillSymbol: Object(_core_lang_js__WEBPACK_IMPORTED_MODULE_2__["clone"])(this.backgroundFillSymbol)
            });
            this._isDefaultSymbolDerived && (e._isDefaultSymbolDerived = !0), e._set("portal", this.portal);
            var i = Object(_core_lang_js__WEBPACK_IMPORTED_MODULE_2__["clone"])(this.uniqueValueInfos);
            return this.styleOrigin && (e._set("styleOrigin", Object.freeze(Object(_core_lang_js__WEBPACK_IMPORTED_MODULE_2__["clone"])(this.styleOrigin))), Object.freeze(i)), e._set("uniqueValueInfos", i), e._updateValueInfoMap(), e;
          }
        }, {
          key: "arcadeRequired",
          get: function get() {
            return this.arcadeRequiredForVisualVariables || !!this.valueExpression;
          }
        }, {
          key: "collectRequiredFields",
          value: function () {
            var _collectRequiredFields = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee3(e, t) {
              var i;
              return regeneratorRuntime.wrap(function _callee3$(_context3) {
                while (1) {
                  switch (_context3.prev = _context3.next) {
                    case 0:
                      i = [this.collectVVRequiredFields(e, t), this.collectSymbolFields(e, t)];
                      _context3.next = 3;
                      return Object(_core_promiseUtils_js__WEBPACK_IMPORTED_MODULE_18__["all"])(i);

                    case 3:
                    case "end":
                      return _context3.stop();
                  }
                }
              }, _callee3, this);
            }));

            function collectRequiredFields(_x5, _x6) {
              return _collectRequiredFields.apply(this, arguments);
            }

            return collectRequiredFields;
          }()
        }, {
          key: "collectSymbolFields",
          value: function () {
            var _collectSymbolFields = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee4(e, t) {
              var i;
              return regeneratorRuntime.wrap(function _callee4$(_context4) {
                while (1) {
                  switch (_context4.prev = _context4.next) {
                    case 0:
                      i = [].concat(_toConsumableArray(this.getSymbols().map(function (i) {
                        return i.collectRequiredFields(e, t);
                      })), [Object(_layers_support_fieldUtils_js__WEBPACK_IMPORTED_MODULE_20__["collectArcadeFieldNames"])(e, t, this.valueExpression)]);
                      Object(_layers_support_fieldUtils_js__WEBPACK_IMPORTED_MODULE_20__["collectField"])(e, t, this.field);
                      Object(_layers_support_fieldUtils_js__WEBPACK_IMPORTED_MODULE_20__["collectField"])(e, t, this.field2);
                      Object(_layers_support_fieldUtils_js__WEBPACK_IMPORTED_MODULE_20__["collectField"])(e, t, this.field3);
                      _context4.next = 6;
                      return Object(_core_promiseUtils_js__WEBPACK_IMPORTED_MODULE_18__["all"])(i);

                    case 6:
                    case "end":
                      return _context4.stop();
                  }
                }
              }, _callee4, this);
            }));

            function collectSymbolFields(_x7, _x8) {
              return _collectSymbolFields.apply(this, arguments);
            }

            return collectSymbolFields;
          }()
        }, {
          key: "populateFromStyle",
          value: function populateFromStyle() {
            var _this2 = this;

            return Object(_symbols_support_styleUtils_js__WEBPACK_IMPORTED_MODULE_30__["fetchStyle"])(this.styleOrigin, {
              portal: this.portal
            }).then(function (e) {
              var t = [];
              return _this2._valueInfoMap = {}, e && e.data && Array.isArray(e.data.items) && e.data.items.forEach(function (i) {
                var r = new _symbols_WebStyleSymbol_js__WEBPACK_IMPORTED_MODULE_22__["default"]({
                  styleUrl: e.styleUrl,
                  styleName: e.styleName,
                  portal: _this2.portal,
                  name: i.name
                });
                _this2.defaultSymbol || i.name !== e.data.defaultItem || (_this2.defaultSymbol = r, _this2._isDefaultSymbolDerived = !0);
                var s = new _support_UniqueValueInfo_js__WEBPACK_IMPORTED_MODULE_29__["default"]({
                  value: i.name,
                  symbol: r
                });
                t.push(s), _this2._valueInfoMap[i.name] = s;
              }), _this2._set("uniqueValueInfos", Object.freeze(t)), !_this2.defaultSymbol && _this2.uniqueValueInfos.length && (_this2.defaultSymbol = _this2.uniqueValueInfos[0].symbol, _this2._isDefaultSymbolDerived = !0), _this2;
            });
          }
        }, {
          key: "_updateValueInfoMap",
          value: function _updateValueInfoMap() {
            var _this3 = this;

            this._valueInfoMap = {}, this.uniqueValueInfos.forEach(function (e) {
              return _this3._valueInfoMap[e.value + ""] = e;
            });
          }
        }, {
          key: "_getUniqueValueInfo",
          value: function _getUniqueValueInfo(e, t) {
            return this.valueExpression ? this._getUnqiueValueInfoForExpression(e, t) : this._getUnqiueValueInfoForFields(e);
          }
        }, {
          key: "_getUnqiueValueInfoForExpression",
          value: function _getUnqiueValueInfoForExpression(e, t) {
            var _Object2 = Object(_core_maybe_js__WEBPACK_IMPORTED_MODULE_4__["unwrapOr"])(t, {}),
                i = _Object2.viewingMode,
                r = _Object2.scale,
                l = _Object2.spatialReference,
                n = _Object2.arcade;

            var a = this._cache.compiledFunc;
            var u = Object(_core_maybe_js__WEBPACK_IMPORTED_MODULE_4__["unwrap"])(n).arcadeUtils;

            if (!a) {
              var _e2 = u.createSyntaxTree(this.valueExpression);

              a = u.createFunction(_e2), this._cache.compiledFunc = a;
            }

            var p = u.executeFunction(a, u.createExecContext(e, u.getViewInfo({
              viewingMode: i,
              scale: r,
              spatialReference: l
            })));
            return this._valueInfoMap[p + ""];
          }
        }, {
          key: "_getUnqiueValueInfoForFields",
          value: function _getUnqiueValueInfoForFields(e) {
            var t = this.field,
                i = e.attributes;
            var r;

            if ("function" != typeof t && this.field2) {
              var _e3 = this.field2,
                  s = this.field3,
                  o = [];
              t && o.push(i[t]), _e3 && o.push(i[_e3]), s && o.push(i[s]), r = o.join(this.fieldDelimiter || "");
            } else "function" == typeof t ? r = t(e) : t && (r = i[t]);

            return this._valueInfoMap[r + ""];
          }
        }], [{
          key: "fromPortalStyle",
          value: function fromPortalStyle(e, t) {
            var i = new _M(t && t.properties);
            i._set("styleOrigin", Object.freeze({
              styleName: e
            })), i._set("portal", t && t.portal || _portal_Portal_js__WEBPACK_IMPORTED_MODULE_21__["default"].getDefault());
            var r = i.populateFromStyle();
            return r["catch"](function (t) {
              N.error("#fromPortalStyle('".concat(e, "'[, ...])"), "Failed to create unique value renderer from style name", t);
            }), r;
          }
        }, {
          key: "fromStyleUrl",
          value: function fromStyleUrl(e, t) {
            var i = new _M(t && t.properties);

            i._set("styleOrigin", Object.freeze({
              styleUrl: e
            }));

            var r = i.populateFromStyle();
            return r["catch"](function (t) {
              N.error("#fromStyleUrl('".concat(e, "'[, ...])"), "Failed to create unique value renderer from style URL", t);
            }), r;
          }
        }]);

        return M;
      }(Object(_mixins_VisualVariablesMixin_js__WEBPACK_IMPORTED_MODULE_26__["VisualVariablesMixin"])(_Renderer_js__WEBPACK_IMPORTED_MODULE_25__["default"]));

      Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_7__["property"])({
        readOnly: !0,
        dependsOn: ["valueExpression"]
      })], P.prototype, "_cache", null), Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_enumeration_js__WEBPACK_IMPORTED_MODULE_9__["enumeration"])({
        uniqueValue: "unique-value"
      })], P.prototype, "type", void 0), Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_7__["property"])(_support_commonProperties_js__WEBPACK_IMPORTED_MODULE_27__["rendererBackgroundFillSymbolProperty"])], P.prototype, "backgroundFillSymbol", void 0), Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_7__["property"])({
        json: {
          type: String,
          read: {
            source: "field1"
          },
          write: {
            target: "field1"
          }
        }
      })], P.prototype, "field", void 0), Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_cast_js__WEBPACK_IMPORTED_MODULE_8__["cast"])("field")], P.prototype, "castField", null), Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_writer_js__WEBPACK_IMPORTED_MODULE_12__["writer"])("field")], P.prototype, "writeField", null), Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_7__["property"])({
        type: String,
        json: {
          write: !0
        }
      })], P.prototype, "field2", void 0), Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_7__["property"])({
        type: String,
        json: {
          write: !0
        }
      })], P.prototype, "field3", void 0), Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_7__["property"])({
        type: String,
        json: {
          write: !0
        }
      })], P.prototype, "valueExpression", void 0), Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_7__["property"])({
        type: String,
        json: {
          write: !0
        }
      })], P.prototype, "valueExpressionTitle", void 0), Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_7__["property"])({
        type: _support_LegendOptions_js__WEBPACK_IMPORTED_MODULE_24__["default"],
        json: {
          write: !0
        }
      })], P.prototype, "legendOptions", void 0), Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_7__["property"])({
        type: String,
        json: {
          write: !0
        }
      })], P.prototype, "defaultLabel", void 0), Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_7__["property"])(Object(_core_object_js__WEBPACK_IMPORTED_MODULE_3__["deepMerge"])(_objectSpread({}, _support_commonProperties_js__WEBPACK_IMPORTED_MODULE_27__["rendererSymbolProperty"]), {
        json: {
          write: {
            overridePolicy: function overridePolicy() {
              return {
                enabled: !this._isDefaultSymbolDerived
              };
            }
          },
          origins: {
            "web-scene": {
              write: {
                overridePolicy: function overridePolicy() {
                  return {
                    enabled: !this._isDefaultSymbolDerived
                  };
                }
              }
            }
          }
        }
      }))], P.prototype, "defaultSymbol", null), Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_7__["property"])({
        type: String,
        json: {
          write: !0
        }
      })], P.prototype, "fieldDelimiter", void 0), Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_7__["property"])({
        type: _portal_Portal_js__WEBPACK_IMPORTED_MODULE_21__["default"],
        readOnly: !0
      })], P.prototype, "portal", void 0), Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_reader_js__WEBPACK_IMPORTED_MODULE_10__["reader"])("portal", ["styleName"])], P.prototype, "readPortal", null), Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_7__["property"])({
        readOnly: !0,
        json: {
          write: {
            enabled: !1,
            overridePolicy: function overridePolicy() {
              return {
                enabled: !0
              };
            }
          }
        }
      })], P.prototype, "styleOrigin", void 0), Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_reader_js__WEBPACK_IMPORTED_MODULE_10__["reader"])("styleOrigin", ["styleName", "styleUrl"])], P.prototype, "readStyleOrigin", null), Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_writer_js__WEBPACK_IMPORTED_MODULE_12__["writer"])("styleOrigin", {
        styleName: {
          type: String
        },
        styleUrl: {
          type: String
        }
      })], P.prototype, "writeStyleOrigin", null), Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_7__["property"])({
        type: [_support_UniqueValueInfo_js__WEBPACK_IMPORTED_MODULE_29__["default"]],
        json: {
          write: {
            overridePolicy: function overridePolicy() {
              return this.styleOrigin ? {
                enabled: !1
              } : {
                enabled: !0
              };
            }
          }
        }
      })], P.prototype, "uniqueValueInfos", null), P = _M = Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_subclass_js__WEBPACK_IMPORTED_MODULE_11__["subclass"])("esri.renderers.UniqueValueRenderer")], P);
      var $ = P;
      /* harmony default export */

      __webpack_exports__["default"] = $;
      /***/
    },

    /***/
    "8RtG":
    /*!***********************************************************************!*\
      !*** ./node_modules/@arcgis/core/renderers/support/ClassBreakInfo.js ***!
      \***********************************************************************/

    /*! exports provided: default */

    /***/
    function RtG(module, __webpack_exports__, __webpack_require__) {
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


      var _chunks_symbols_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
      /*! ../../chunks/symbols.js */
      "nNR5");
      /*
      All material copyright ESRI, All Rights Reserved, unless otherwise specified.
      See https://js.arcgis.com/4.18/esri/copyright.txt for details.
      */


      var _a;

      var p = _a = /*#__PURE__*/function (_core_JSONSupport_js_) {
        _inherits(a, _core_JSONSupport_js_);

        var _super2 = _createSuper(a);

        function a(s) {
          var _this4;

          _classCallCheck(this, a);

          _this4 = _super2.call(this, s), _this4.description = null, _this4.label = null, _this4.minValue = null, _this4.maxValue = 0, _this4.symbol = null;
          return _this4;
        }

        _createClass(a, [{
          key: "clone",
          value: function clone() {
            return new _a({
              description: this.description,
              label: this.label,
              minValue: this.minValue,
              maxValue: this.maxValue,
              symbol: this.symbol ? this.symbol.clone() : null
            });
          }
        }, {
          key: "getMeshHash",
          value: function getMeshHash() {
            var s = JSON.stringify(this.symbol);
            return "".concat(this.minValue, ".").concat(this.maxValue, ".").concat(s);
          }
        }]);

        return a;
      }(_core_JSONSupport_js__WEBPACK_IMPORTED_MODULE_9__["JSONSupport"]);

      Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_4__["property"])({
        type: String,
        json: {
          write: !0
        }
      })], p.prototype, "description", void 0), Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_4__["property"])({
        type: String,
        json: {
          write: !0
        }
      })], p.prototype, "label", void 0), Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_4__["property"])({
        type: Number,
        json: {
          read: {
            source: "classMinValue"
          },
          write: {
            target: "classMinValue"
          }
        }
      })], p.prototype, "minValue", void 0), Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_4__["property"])({
        type: Number,
        json: {
          read: {
            source: "classMaxValue"
          },
          write: {
            target: "classMaxValue"
          }
        }
      })], p.prototype, "maxValue", void 0), Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_4__["property"])({
        types: _chunks_symbols_js__WEBPACK_IMPORTED_MODULE_10__["a"],
        json: {
          origins: {
            "web-scene": {
              types: _chunks_symbols_js__WEBPACK_IMPORTED_MODULE_10__["b"],
              write: _chunks_symbols_js__WEBPACK_IMPORTED_MODULE_10__["w"]
            }
          },
          write: _chunks_symbols_js__WEBPACK_IMPORTED_MODULE_10__["w"]
        }
      })], p.prototype, "symbol", void 0), p = _a = Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_subclass_js__WEBPACK_IMPORTED_MODULE_5__["subclass"])("esri.renderers.support.ClassBreakInfo")], p);
      var u = p;
      /* harmony default export */

      __webpack_exports__["default"] = u;
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

        var _iterator2 = _createForOfIteratorHelper(m),
            _step2;

        try {
          for (_iterator2.s(); !(_step2 = _iterator2.n()).done;) {
            var _r = _step2.value;

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
          _iterator2.e(err);
        } finally {
          _iterator2.f();
        }

        return b;
      }

      function p(e, n) {
        if (Object(_maybe_js__WEBPACK_IMPORTED_MODULE_0__["isNone"])(e)) return !1;
        var o = n.split(".");
        var r = e;

        var _iterator3 = _createForOfIteratorHelper(o),
            _step3;

        try {
          for (_iterator3.s(); !(_step3 = _iterator3.n()).done;) {
            var t = _step3.value;
            if ("complete" === r.type) return !0;
            if ("partial" !== r.type) return !1;
            {
              var _e4 = r.diff[t];
              if (!_e4) return !1;
              r = _e4;
            }
          }
        } catch (err) {
          _iterator3.e(err);
        } finally {
          _iterator3.f();
        }

        return !0;
      }

      function a(t, e) {
        var _iterator4 = _createForOfIteratorHelper(e),
            _step4;

        try {
          for (_iterator4.s(); !(_step4 = _iterator4.n()).done;) {
            var n = _step4.value;
            if (p(t, n)) return !0;
          }
        } catch (err) {
          _iterator4.e(err);
        } finally {
          _iterator4.f();
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

              var _iterator5 = _createForOfIteratorHelper(t.added),
                  _step5;

              try {
                for (_iterator5.s(); !(_step5 = _iterator5.n()).done;) {
                  var _e5 = _step5.value;
                  if (!m(_e5)) return !1;
                }
              } catch (err) {
                _iterator5.e(err);
              } finally {
                _iterator5.f();
              }

              var _iterator6 = _createForOfIteratorHelper(t.removed),
                  _step6;

              try {
                for (_iterator6.s(); !(_step6 = _iterator6.n()).done;) {
                  var _e6 = _step6.value;
                  if (!m(_e6)) return !1;
                }
              } catch (err) {
                _iterator6.e(err);
              } finally {
                _iterator6.f();
              }

              var _iterator7 = _createForOfIteratorHelper(t.changed),
                  _step7;

              try {
                for (_iterator7.s(); !(_step7 = _iterator7.n()).done;) {
                  var _e7 = _step7.value;
                  if (!m(_e7)) return !1;
                }
              } catch (err) {
                _iterator7.e(err);
              } finally {
                _iterator7.f();
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
    "EJFl":
    /*!***********************************************************!*\
      !*** ./node_modules/@arcgis/core/support/featureFlags.js ***!
      \***********************************************************/

    /*! exports provided: disableContextNavigation, enableWebStyleForceWOSR, hasEnableFeature */

    /***/
    function EJFl(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "disableContextNavigation", function () {
        return t;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "enableWebStyleForceWOSR", function () {
        return r;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "hasEnableFeature", function () {
        return o;
      });
      /* harmony import */


      var _core_has_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ../core/has.js */
      "wSAH");
      /*
      All material copyright ESRI, All Rights Reserved, unless otherwise specified.
      See https://js.arcgis.com/4.18/esri/copyright.txt for details.
      */


      function o(o) {
        return !!Object(_core_has_js__WEBPACK_IMPORTED_MODULE_0__["default"])("enable-feature:".concat(o));
      }

      var r = function r() {
        return o("force-wosr");
      },
          t = function t() {
        return o("disable-context-navigation");
      };
      /***/

    },

    /***/
    "NDpP":
    /*!*****************************************************************!*\
      !*** ./node_modules/@arcgis/core/symbols/support/styleUtils.js ***!
      \*****************************************************************/

    /*! exports provided: fetchStyle, fetchSymbolFromStyle, resolveWebStyleSymbol, styleNameFromItem */

    /***/
    function NDpP(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "fetchStyle", function () {
        return g;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "fetchSymbolFromStyle", function () {
        return j;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "resolveWebStyleSymbol", function () {
        return w;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "styleNameFromItem", function () {
        return N;
      });
      /* harmony import */


      var _core_Error_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ../../core/Error.js */
      "zlDU");
      /* harmony import */


      var _core_urlUtils_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ../../core/urlUtils.js */
      "4EHJ");
      /* harmony import */


      var _chunks_persistableUrlUtils_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ../../chunks/persistableUrlUtils.js */
      "/PL2");
      /* harmony import */


      var _core_promiseUtils_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ../../core/promiseUtils.js */
      "9MzC");
      /* harmony import */


      var _request_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ../../request.js */
      "Lqtk");
      /* harmony import */


      var _portal_PortalQueryParams_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ../../portal/PortalQueryParams.js */
      "6aRp");
      /* harmony import */


      var _portal_Portal_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ../../portal/Portal.js */
      "AiS/");
      /* harmony import */


      var _StyleOrigin_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! ./StyleOrigin.js */
      "tyRe");
      /* harmony import */


      var _Thumbnail_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! ./Thumbnail.js */
      "UFqC");
      /* harmony import */


      var _chunks_symbols_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! ../../chunks/symbols.js */
      "nNR5");
      /* harmony import */


      var _core_devEnvironmentUtils_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
      /*! ../../core/devEnvironmentUtils.js */
      "SbiP");
      /* harmony import */


      var _support_featureFlags_js__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
      /*! ../../support/featureFlags.js */
      "EJFl");
      /*
      All material copyright ESRI, All Rights Reserved, unless otherwise specified.
      See https://js.arcgis.com/4.18/esri/copyright.txt for details.
      */


      var d = {};

      function h(t, r, o) {
        var s = r.portal || _portal_Portal_js__WEBPACK_IMPORTED_MODULE_6__["default"].getDefault();

        var n;
        var l = "".concat(s.url, " - ").concat(s.user && s.user.username, " - ").concat(t);
        return d[l] || (d[l] = function (t, r, o) {
          return r.load(o).then(function () {
            var e = new _portal_PortalQueryParams_js__WEBPACK_IMPORTED_MODULE_5__["default"]({
              disableExtraQuery: !0,
              query: "owner:".concat($, " AND type:").concat(E, " AND typekeywords:\"").concat(t, "\"")
            });
            return r.queryItems(e, o);
          }).then(function (_ref) {
            var r = _ref.results;
            var s = null;
            var n = t.toLowerCase();

            if (r && Array.isArray(r)) {
              var _iterator8 = _createForOfIteratorHelper(r),
                  _step8;

              try {
                for (_iterator8.s(); !(_step8 = _iterator8.n()).done;) {
                  var e = _step8.value;

                  if (e.typeKeywords.some(function (e) {
                    return e.toLowerCase() === n;
                  }) && e.type === E && e.owner === $) {
                    s = e;
                    break;
                  }
                }
              } catch (err) {
                _iterator8.e(err);
              } finally {
                _iterator8.f();
              }
            }

            if (!s) throw new _core_Error_js__WEBPACK_IMPORTED_MODULE_0__["default"]("symbolstyleutils:style-not-found", "The style '".concat(t, "' could not be found"), {
              styleName: t
            });
            return s.load(o);
          });
        }(t, s, o).then(function (e) {
          return n = e, e.fetchData();
        }).then(function (e) {
          return {
            data: e,
            baseUrl: n.itemUrl,
            styleName: t
          };
        })), d[l];
      }

      function g(t, o, s) {
        return t.styleUrl ? function (e, t) {
          return S(e, t).then(function (t) {
            return {
              data: t.data,
              baseUrl: Object(_core_urlUtils_js__WEBPACK_IMPORTED_MODULE_1__["removeFile"])(e),
              styleUrl: e
            };
          });
        }(t.styleUrl, s) : t.styleName ? h(t.styleName, o, s) : Object(_core_promiseUtils_js__WEBPACK_IMPORTED_MODULE_3__["reject"])(new _core_Error_js__WEBPACK_IMPORTED_MODULE_0__["default"]("symbolstyleutils:style-url-and-name-missing", "Either styleUrl or styleName is required to resolve a style"));
      }

      function w(t, s, l, a) {
        return t.name ? t.styleName && "Esri2DPointSymbolsStyle" === t.styleName ? function (e, t, s) {
          var n = D.replace(/\{SymbolName\}/gi, e.name);
          return S(n, s).then(function (e) {
            var s = U(e.data);
            return Object(_chunks_symbols_js__WEBPACK_IMPORTED_MODULE_9__["f"])(s, {
              portal: t.portal,
              url: Object(_core_urlUtils_js__WEBPACK_IMPORTED_MODULE_1__["urlToObject"])(Object(_core_urlUtils_js__WEBPACK_IMPORTED_MODULE_1__["removeFile"])(n)),
              origin: "portal-item"
            });
          });
        }(t, s, a) : g(t, s, a).then(function (e) {
          return j(e, t.name, s, l, a);
        }) : Object(_core_promiseUtils_js__WEBPACK_IMPORTED_MODULE_3__["reject"])(new _core_Error_js__WEBPACK_IMPORTED_MODULE_0__["default"]("symbolstyleutils:style-symbol-reference-name-missing", "Missing name in style symbol reference"));
      }

      function j(t, l, a, i, d) {
        var h = t.data,
            g = {
          portal: a.portal,
          url: Object(_core_urlUtils_js__WEBPACK_IMPORTED_MODULE_1__["urlToObject"])(t.baseUrl),
          origin: "portal-item"
        },
            w = h.items.find(function (e) {
          return e.name === l;
        });

        if (!w) {
          return Object(_core_promiseUtils_js__WEBPACK_IMPORTED_MODULE_3__["reject"])(new _core_Error_js__WEBPACK_IMPORTED_MODULE_0__["default"]("symbolstyleutils:symbol-name-not-found", "The symbol name '".concat(l, "' could not be found"), {
            symbolName: l
          }));
        }

        var j = Object(_chunks_persistableUrlUtils_js__WEBPACK_IMPORTED_MODULE_2__["f"])(function (e, t) {
          if ("cimRef" === t) return e.cimRef;

          if (e.formatInfos && !Object(_support_featureFlags_js__WEBPACK_IMPORTED_MODULE_11__["enableWebStyleForceWOSR"])()) {
            var _iterator9 = _createForOfIteratorHelper(e.formatInfos),
                _step9;

            try {
              for (_iterator9.s(); !(_step9 = _iterator9.n()).done;) {
                var _t2 = _step9.value;
                if ("gltf" === _t2.type) return _t2.href;
              }
            } catch (err) {
              _iterator9.e(err);
            } finally {
              _iterator9.f();
            }
          }

          return e.webRef;
        }(w, i), g),
            N = w.thumbnail && w.thumbnail.href;
        var $ = w.thumbnail && w.thumbnail.imageData;
        Object(_core_devEnvironmentUtils_js__WEBPACK_IMPORTED_MODULE_10__["isDevEnvironment"])() && (j = Object(_core_devEnvironmentUtils_js__WEBPACK_IMPORTED_MODULE_10__["adjustStaticAGOUrl"])(j), N = Object(_core_devEnvironmentUtils_js__WEBPACK_IMPORTED_MODULE_10__["adjustStaticAGOUrl"])(N));
        var E = {
          portal: a.portal,
          url: Object(_core_urlUtils_js__WEBPACK_IMPORTED_MODULE_1__["urlToObject"])(Object(_core_urlUtils_js__WEBPACK_IMPORTED_MODULE_1__["removeFile"])(j)),
          origin: "portal-item"
        };
        return S(j, d).then(function (e) {
          var r = "cimRef" === i ? U(e.data) : e.data,
              o = Object(_chunks_symbols_js__WEBPACK_IMPORTED_MODULE_9__["f"])(r, E);

          if (o && Object(_chunks_symbols_js__WEBPACK_IMPORTED_MODULE_9__["i"])(o)) {
            if (N) {
              var _e8 = Object(_chunks_persistableUrlUtils_js__WEBPACK_IMPORTED_MODULE_2__["f"])(N, g);

              o.thumbnail = new _Thumbnail_js__WEBPACK_IMPORTED_MODULE_8__["default"]({
                url: _e8
              });
            } else $ && (o.thumbnail = new _Thumbnail_js__WEBPACK_IMPORTED_MODULE_8__["default"]({
              url: "data:image/png;base64,".concat($)
            }));

            t.styleUrl ? o.styleOrigin = new _StyleOrigin_js__WEBPACK_IMPORTED_MODULE_7__["default"]({
              portal: a.portal,
              styleUrl: t.styleUrl,
              name: l
            }) : t.styleName && (o.styleOrigin = new _StyleOrigin_js__WEBPACK_IMPORTED_MODULE_7__["default"]({
              portal: a.portal,
              styleName: t.styleName,
              name: l
            }));
          }

          return o;
        });
      }

      function U(e) {
        return null === e || "CIMSymbolReference" === e.type ? e : {
          type: "CIMSymbolReference",
          symbol: e
        };
      }

      function N(e) {
        var _iterator10 = _createForOfIteratorHelper(e.typeKeywords),
            _step10;

        try {
          for (_iterator10.s(); !(_step10 = _iterator10.n()).done;) {
            var t = _step10.value;
            if (/^Esri.*Style$/.test(t) && "Esri Style" !== t) return t;
          }
        } catch (err) {
          _iterator10.e(err);
        } finally {
          _iterator10.f();
        }
      }

      function S(e, r) {
        var o = _objectSpread({
          responseType: "json",
          query: {
            f: "json"
          }
        }, r);

        return Object(_request_js__WEBPACK_IMPORTED_MODULE_4__["default"])(Object(_core_urlUtils_js__WEBPACK_IMPORTED_MODULE_1__["normalize"])(e), o);
      }

      var $ = "esri_en",
          E = "Style",
          D = "https://cdn.arcgis.com/sharing/rest/content/items/220936cc6ed342c9937abd8f180e7d1e/resources/styles/cim/{SymbolName}.json?f=json";
      /***/
    },

    /***/
    "SbiP":
    /*!***************************************************************!*\
      !*** ./node_modules/@arcgis/core/core/devEnvironmentUtils.js ***!
      \***************************************************************/

    /*! exports provided: adjustStaticAGOUrl, isDevEnvironment, isTelemetryDevEnvironment */

    /***/
    function SbiP(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "adjustStaticAGOUrl", function () {
        return t;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "isDevEnvironment", function () {
        return a;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "isTelemetryDevEnvironment", function () {
        return o;
      });
      /* harmony import */


      var _global_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ./global.js */
      "3r0u");
      /*
      All material copyright ESRI, All Rights Reserved, unless otherwise specified.
      See https://js.arcgis.com/4.18/esri/copyright.txt for details.
      */


      function a(a) {
        return a = a || _global_js__WEBPACK_IMPORTED_MODULE_0__["default"].location.hostname, e.some(function (c) {
          var t;
          return null != (null == (t = a) ? void 0 : t.match(c));
        });
      }

      function t(a, t) {
        return a && (t = t || _global_js__WEBPACK_IMPORTED_MODULE_0__["default"].location.hostname) ? null != t.match(r) || null != t.match(m) ? a.replace("static.arcgis.com", "staticdev.arcgis.com") : null != t.match(n) || null != t.match(s) ? a.replace("static.arcgis.com", "staticqa.arcgis.com") : a : a;
      }

      function o(a) {
        a = a || _global_js__WEBPACK_IMPORTED_MODULE_0__["default"].location.hostname;
        return [/^zrh-.+?\.esri\.com$/].concat(e).some(function (c) {
          var t;
          return null != (null == (t = a) ? void 0 : t.match(c));
        });
      }

      var r = /^devext.arcgis.com$/,
          n = /^qaext.arcgis.com$/,
          m = /^[\w-]*\.mapsdevext.arcgis.com$/,
          s = /^[\w-]*\.mapsqa.arcgis.com$/,
          e = [/^([\w-]*\.)?[\w-]*\.zrh-dev-local.esri.com$/, r, n, /^jsapps.esri.com$/, m, s];
      /***/
    },

    /***/
    "guTz":
    /*!*************************************************************************!*\
      !*** ./node_modules/@arcgis/core/renderers/support/commonProperties.js ***!
      \*************************************************************************/

    /*! exports provided: rendererBackgroundFillSymbolProperty, rendererSymbolProperty */

    /***/
    function guTz(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "rendererBackgroundFillSymbolProperty", function () {
        return l;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "rendererSymbolProperty", function () {
        return r;
      });
      /* harmony import */


      var _symbols_Symbol_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ../../symbols/Symbol.js */
      "DZP5");
      /* harmony import */


      var _symbols_PolygonSymbol3D_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ../../symbols/PolygonSymbol3D.js */
      "NckZ");
      /* harmony import */


      var _chunks_symbols_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ../../chunks/symbols.js */
      "nNR5");
      /*
      All material copyright ESRI, All Rights Reserved, unless otherwise specified.
      See https://js.arcgis.com/4.18/esri/copyright.txt for details.
      */


      var r = {
        types: _chunks_symbols_js__WEBPACK_IMPORTED_MODULE_2__["a"],
        json: {
          write: {
            writer: _chunks_symbols_js__WEBPACK_IMPORTED_MODULE_2__["w"]
          },
          origins: {
            "web-scene": {
              types: _chunks_symbols_js__WEBPACK_IMPORTED_MODULE_2__["b"],
              write: {
                writer: _chunks_symbols_js__WEBPACK_IMPORTED_MODULE_2__["w"]
              }
            }
          }
        }
      },
          l = {
        types: {
          base: _symbols_Symbol_js__WEBPACK_IMPORTED_MODULE_0__["default"],
          key: "type",
          typeMap: {
            "simple-fill": _chunks_symbols_js__WEBPACK_IMPORTED_MODULE_2__["s"].typeMap["simple-fill"],
            "picture-fill": _chunks_symbols_js__WEBPACK_IMPORTED_MODULE_2__["s"].typeMap["picture-fill"],
            "polygon-3d": _chunks_symbols_js__WEBPACK_IMPORTED_MODULE_2__["s"].typeMap["polygon-3d"]
          }
        },
        json: {
          write: {
            writer: _chunks_symbols_js__WEBPACK_IMPORTED_MODULE_2__["w"]
          },
          origins: {
            "web-scene": {
              type: _symbols_PolygonSymbol3D_js__WEBPACK_IMPORTED_MODULE_1__["default"],
              write: {
                writer: _chunks_symbols_js__WEBPACK_IMPORTED_MODULE_2__["w"]
              }
            }
          }
        }
      };
      /***/
    },

    /***/
    "mfMX":
    /*!************************************************************************!*\
      !*** ./node_modules/@arcgis/core/renderers/support/UniqueValueInfo.js ***!
      \************************************************************************/

    /*! exports provided: default */

    /***/
    function mfMX(module, __webpack_exports__, __webpack_require__) {
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


      var _chunks_symbols_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
      /*! ../../chunks/symbols.js */
      "nNR5");
      /*
      All material copyright ESRI, All Rights Reserved, unless otherwise specified.
      See https://js.arcgis.com/4.18/esri/copyright.txt for details.
      */


      var _l;

      var n = _l = /*#__PURE__*/function (_core_JSONSupport_js_2) {
        _inherits(l, _core_JSONSupport_js_2);

        var _super3 = _createSuper(l);

        function l(r) {
          var _this5;

          _classCallCheck(this, l);

          _this5 = _super3.call(this, r), _this5.description = null, _this5.label = null, _this5.symbol = null, _this5.value = null;
          return _this5;
        }

        _createClass(l, [{
          key: "clone",
          value: function clone() {
            return new _l({
              value: this.value,
              description: this.description,
              label: this.label,
              symbol: this.symbol ? this.symbol.clone() : null
            });
          }
        }, {
          key: "getMeshHash",
          value: function getMeshHash() {
            var r = JSON.stringify(this.symbol && this.symbol.toJSON());
            return "".concat(this.value, ".").concat(r);
          }
        }]);

        return l;
      }(_core_JSONSupport_js__WEBPACK_IMPORTED_MODULE_9__["JSONSupport"]);

      Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_4__["property"])({
        type: String,
        json: {
          write: !0
        }
      })], n.prototype, "description", void 0), Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_4__["property"])({
        type: String,
        json: {
          write: !0
        }
      })], n.prototype, "label", void 0), Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_4__["property"])({
        types: _chunks_symbols_js__WEBPACK_IMPORTED_MODULE_10__["a"],
        json: {
          origins: {
            "web-scene": {
              types: _chunks_symbols_js__WEBPACK_IMPORTED_MODULE_10__["b"],
              write: _chunks_symbols_js__WEBPACK_IMPORTED_MODULE_10__["w"]
            }
          },
          write: _chunks_symbols_js__WEBPACK_IMPORTED_MODULE_10__["w"]
        }
      })], n.prototype, "symbol", void 0), Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_4__["property"])({
        type: [String, Number],
        json: {
          type: String,
          write: {
            writer: function writer(r, o) {
              o.value = null == r ? void 0 : r.toString();
            }
          }
        }
      })], n.prototype, "value", void 0), n = _l = Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_subclass_js__WEBPACK_IMPORTED_MODULE_5__["subclass"])("esri.renderers.support.UniqueValueInfo")], n);
      var u = n;
      /* harmony default export */

      __webpack_exports__["default"] = u;
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
        function s(t, e, _s2) {
          _classCallCheck(this, s);

          this._namespace = t, this._storage = e, this._removeFunc = !1, this._hit = 0, this._miss = 0, this._storage.register(this), this._namespace += ":", _s2 && (this._storage.registerRemoveFunc(this._namespace, _s2), this._removeFunc = !0);
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
          value: function put(t, e, _s3) {
            var i = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : 0;

            this._storage.put(this._namespace + t, e, _s3, i);
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
          value: function updateSize(t, e, _s4) {
            this._storage.updateSize(this._namespace + t, e, _s4);
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
          value: function put(t, e, s, _i2) {
            var h = this._db.get(t);

            if (h && (this._size -= h.size, this._db["delete"](t), h.entry !== e && this._notifyRemoved(t, h.entry)), s > this._maxSize) return void this._notifyRemoved(t, e);
            if (void 0 === e) return void console.warn("Refusing to cache undefined entry ");
            if (!s || s < 0) return void console.warn("Refusing to cache entry with invalid size " + s);
            var r = 1 + Math.max(_i2, -3) - -3;
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
            var _i3 = this._db.get(t);

            _i3 && _i3.entry === e && (this._size -= _i3.size, s > this._maxSize ? this._notifyRemoved(t, e) : (_i3.size = s, this._size += s, this._checkSizeLimit()));
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

            this._db.forEach(function (t, _i5) {
              var h = t.lifetime;
              s[h] = (s[h] || 0) + t.size, _this6._users.forAll(function (s) {
                var h = s.namespace;

                if (_i5.startsWith(h)) {
                  var _s5 = e[h] || 0;

                  e[h] = _s5 + t.size;
                }
              });
            });

            var _i4 = {};

            this._users.forAll(function (t) {
              var s = t.namespace;

              if (!isNaN(t.hitRate) && t.hitRate > 0) {
                var _h = e[s] || 0;

                e[s] = _h, _i4[s] = Math.round(100 * t.hitRate) + "%";
              } else _i4[s] = "0%";
            });

            var h = Object.keys(e);
            h.forEach(function (t) {
              return e[t] = e[t] / _this6._size * 100;
            }), h.sort(function (t, s) {
              return e[s] - e[t];
            }), h.forEach(function (s) {
              return t[s] = Math.round(e[s]) + "% / " + _i4[s];
            });

            for (var _e9 = s.length - 1; _e9 >= 0; --_e9) {
              var _i7 = s[_e9];
              _i7 && (t["Priority " + (_e9 + -3 - 1)] = Math.round(_i7 / this.size * 100) + "%");
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
              var _iterator11 = _createForOfIteratorHelper(this._db),
                  _step11;

              try {
                for (_iterator11.s(); !(_step11 = _iterator11.n()).done;) {
                  var _step11$value = _slicedToArray(_step11.value, 2),
                      t = _step11$value[0],
                      _e10 = _step11$value[1];

                  if (this._db["delete"](t), _e10.lives <= 1 ? (this._size -= _e10.size, this._notifyRemoved(t, _e10.entry)) : (--_e10.lives, this._db.set(t, _e10)), this._size <= .9 * this.maxSize) return;
                }
              } catch (err) {
                _iterator11.e(err);
              } finally {
                _iterator11.f();
              }
            }
          }
        }]);

        return i;
      }();
      /***/

    },

    /***/
    "tCO6":
    /*!********************************************************************!*\
      !*** ./node_modules/@arcgis/core/renderers/ClassBreaksRenderer.js ***!
      \********************************************************************/

    /*! exports provided: default */

    /***/
    function tCO6(module, __webpack_exports__, __webpack_require__) {
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


      var _core_Logger_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ../core/Logger.js */
      "6S2I");
      /* harmony import */


      var _core_accessorSupport_ensureType_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ../core/accessorSupport/ensureType.js */
      "zqDF");
      /* harmony import */


      var _core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ../core/accessorSupport/decorators/property.js */
      "WbKI");
      /* harmony import */


      var _core_accessorSupport_decorators_cast_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! ../core/accessorSupport/decorators/cast.js */
      "Gj5k");
      /* harmony import */


      var _core_jsonMap_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! ../core/jsonMap.js */
      "+opI");
      /* harmony import */


      var _core_accessorSupport_decorators_enumeration_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! ../core/accessorSupport/decorators/enumeration.js */
      "RI0u");
      /* harmony import */


      var _core_accessorSupport_decorators_reader_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
      /*! ../core/accessorSupport/decorators/reader.js */
      "r88o");
      /* harmony import */


      var _core_accessorSupport_decorators_subclass_js__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
      /*! ../core/accessorSupport/decorators/subclass.js */
      "04ZG");
      /* harmony import */


      var _core_accessorSupport_decorators_writer_js__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
      /*! ../core/accessorSupport/decorators/writer.js */
      "Cduq");
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


      var _support_arcadeOnDemand_js__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(
      /*! ../support/arcadeOnDemand.js */
      "gvqN");
      /* harmony import */


      var _layers_support_fieldUtils_js__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(
      /*! ../layers/support/fieldUtils.js */
      "wdpY");
      /* harmony import */


      var _chunks_symbols_js__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(
      /*! ../chunks/symbols.js */
      "nNR5");
      /* harmony import */


      var _support_LegendOptions_js__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(
      /*! ./support/LegendOptions.js */
      "1hFN");
      /* harmony import */


      var _Renderer_js__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(
      /*! ./Renderer.js */
      "ZnuT");
      /* harmony import */


      var _mixins_VisualVariablesMixin_js__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(
      /*! ./mixins/VisualVariablesMixin.js */
      "vk02");
      /* harmony import */


      var _support_ClassBreakInfo_js__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(
      /*! ./support/ClassBreakInfo.js */
      "8RtG");
      /* harmony import */


      var _support_commonProperties_js__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(
      /*! ./support/commonProperties.js */
      "guTz");
      /*
      All material copyright ESRI, All Rights Reserved, unless otherwise specified.
      See https://js.arcgis.com/4.18/esri/copyright.txt for details.
      */


      var _V;

      var z = _core_Logger_js__WEBPACK_IMPORTED_MODULE_4__["default"].getLogger("esri.renderers.ClassBreaksRenderer"),
          w = new _core_jsonMap_js__WEBPACK_IMPORTED_MODULE_8__["JSONMap"]({
        esriNormalizeByLog: "log",
        esriNormalizeByPercentOfTotal: "percent-of-total",
        esriNormalizeByField: "field"
      }),
          E = Object(_core_accessorSupport_ensureType_js__WEBPACK_IMPORTED_MODULE_5__["ensureType"])(_support_ClassBreakInfo_js__WEBPACK_IMPORTED_MODULE_23__["default"]);

      var T = _V = /*#__PURE__*/function (_Object3) {
        _inherits(V, _Object3);

        var _super4 = _createSuper(V);

        function V(e) {
          var _this9;

          _classCallCheck(this, V);

          _this9 = _super4.call(this, e), _this9.backgroundFillSymbol = null, _this9.classBreakInfos = null, _this9.defaultLabel = null, _this9.defaultSymbol = null, _this9.field = null, _this9.isMaxInclusive = !0, _this9.legendOptions = null, _this9.normalizationField = null, _this9.normalizationTotal = null, _this9.type = "class-breaks", _this9.valueExpression = null, _this9.valueExpressionTitle = null, _this9._set("classBreakInfos", []);
          return _this9;
        }

        _createClass(V, [{
          key: "_cache",
          get: function get() {
            return {
              compiledFunc: null
            };
          }
        }, {
          key: "readClassBreakInfos",
          value: function readClassBreakInfos(e, s, t) {
            if (!Array.isArray(e)) return;
            var o = s.minValue;
            return e.map(function (e) {
              var s = new _support_ClassBreakInfo_js__WEBPACK_IMPORTED_MODULE_23__["default"]();
              return s.read(e, t), null == s.minValue && (s.minValue = o), null == s.maxValue && (s.maxValue = s.minValue), o = s.maxValue, s;
            });
          }
        }, {
          key: "writeClassBreakInfos",
          value: function writeClassBreakInfos(e, s, t, o) {
            var r = e.map(function (e) {
              return e.write({}, o);
            });
            this._areClassBreaksConsecutive() && r.forEach(function (e) {
              return delete e.classMinValue;
            }), s[t] = r;
          }
        }, {
          key: "castField",
          value: function castField(e) {
            return null == e ? e : "function" == typeof e ? (z.error(".field: field must be a string value"), null) : Object(_core_accessorSupport_ensureType_js__WEBPACK_IMPORTED_MODULE_5__["ensureString"])(e);
          }
        }, {
          key: "minValue",
          get: function get() {
            return this.classBreakInfos && this.classBreakInfos[0] && this.classBreakInfos[0].minValue || 0;
          }
        }, {
          key: "normalizationType",
          get: function get() {
            var e = this._get("normalizationType");

            var s = !!this.normalizationField,
                t = null != this.normalizationTotal;
            return s || t ? (e = (s ? "field" : t && "percent-of-total") || null, s && t && z.warn("warning: both normalizationField and normalizationTotal are set!")) : "field" !== e && "percent-of-total" !== e || (e = null), e;
          },
          set: function set(e) {
            this._set("normalizationType", e);
          }
        }, {
          key: "addClassBreakInfo",
          value: function addClassBreakInfo(e, t, o) {
            var r = null;
            r = "number" == typeof e ? new _support_ClassBreakInfo_js__WEBPACK_IMPORTED_MODULE_23__["default"]({
              minValue: e,
              maxValue: t,
              symbol: Object(_chunks_symbols_js__WEBPACK_IMPORTED_MODULE_19__["e"])(o)
            }) : E(Object(_core_lang_js__WEBPACK_IMPORTED_MODULE_2__["clone"])(e)), this.classBreakInfos.push(r), 1 === this.classBreakInfos.length && this.notifyChange("minValue");
          }
        }, {
          key: "removeClassBreakInfo",
          value: function removeClassBreakInfo(e, s) {
            var t = this.classBreakInfos.length;

            for (var o = 0; o < t; o++) {
              var _t3 = [this.classBreakInfos[o].minValue, this.classBreakInfos[o].maxValue];

              if (_t3[0] === e && _t3[1] === s) {
                this.classBreakInfos.splice(o, 1);
                break;
              }
            }
          }
        }, {
          key: "getBreakIndex",
          value: function getBreakIndex(e, s) {
            return this.valueExpression && (Object(_core_maybe_js__WEBPACK_IMPORTED_MODULE_3__["isNone"])(s) || Object(_core_maybe_js__WEBPACK_IMPORTED_MODULE_3__["isNone"])(s.arcade)) && z.warn(""), this.valueExpression ? this._getBreakIndexForExpression(e, s) : this._getBreakIndexForField(e);
          }
        }, {
          key: "getClassBreakInfo",
          value: function () {
            var _getClassBreakInfo = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee5(e, s) {
              var o, r;
              return regeneratorRuntime.wrap(function _callee5$(_context5) {
                while (1) {
                  switch (_context5.prev = _context5.next) {
                    case 0:
                      o = s;
                      _context5.t0 = this.valueExpression && (Object(_core_maybe_js__WEBPACK_IMPORTED_MODULE_3__["isNone"])(s) || Object(_core_maybe_js__WEBPACK_IMPORTED_MODULE_3__["isNone"])(s.arcade));

                      if (!_context5.t0) {
                        _context5.next = 11;
                        break;
                      }

                      _context5.t1 = _objectSpread;
                      _context5.t2 = _objectSpread({}, o);
                      _context5.t3 = {};
                      _context5.next = 8;
                      return Object(_support_arcadeOnDemand_js__WEBPACK_IMPORTED_MODULE_17__["loadArcade"])();

                    case 8:
                      _context5.t4 = _context5.sent;
                      _context5.t5 = {
                        arcade: _context5.t4
                      };
                      o = (0, _context5.t1)(_context5.t2, _context5.t3, _context5.t5);

                    case 11:
                      r = this.getBreakIndex(e, o);
                      return _context5.abrupt("return", -1 !== r ? this.classBreakInfos[r] : null);

                    case 13:
                    case "end":
                      return _context5.stop();
                  }
                }
              }, _callee5, this);
            }));

            function getClassBreakInfo(_x9, _x10) {
              return _getClassBreakInfo.apply(this, arguments);
            }

            return getClassBreakInfo;
          }()
        }, {
          key: "getSymbol",
          value: function getSymbol(e, s) {
            if (this.valueExpression && (Object(_core_maybe_js__WEBPACK_IMPORTED_MODULE_3__["isNone"])(s) || Object(_core_maybe_js__WEBPACK_IMPORTED_MODULE_3__["isNone"])(s.arcade))) return void z.error("#getSymbol()", "Please use getSymbolAsync if valueExpression is used");
            var o = this.getBreakIndex(e, s);
            return o > -1 ? this.classBreakInfos[o].symbol : this.defaultSymbol;
          }
        }, {
          key: "getSymbolAsync",
          value: function () {
            var _getSymbolAsync2 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee6(e, s) {
              var o, r;
              return regeneratorRuntime.wrap(function _callee6$(_context6) {
                while (1) {
                  switch (_context6.prev = _context6.next) {
                    case 0:
                      o = s;
                      _context6.t0 = this.valueExpression && (Object(_core_maybe_js__WEBPACK_IMPORTED_MODULE_3__["isNone"])(s) || Object(_core_maybe_js__WEBPACK_IMPORTED_MODULE_3__["isNone"])(s.arcade));

                      if (!_context6.t0) {
                        _context6.next = 11;
                        break;
                      }

                      _context6.t1 = _objectSpread;
                      _context6.t2 = _objectSpread({}, o);
                      _context6.t3 = {};
                      _context6.next = 8;
                      return Object(_support_arcadeOnDemand_js__WEBPACK_IMPORTED_MODULE_17__["loadArcade"])();

                    case 8:
                      _context6.t4 = _context6.sent;
                      _context6.t5 = {
                        arcade: _context6.t4
                      };
                      o = (0, _context6.t1)(_context6.t2, _context6.t3, _context6.t5);

                    case 11:
                      r = this.getBreakIndex(e, o);
                      return _context6.abrupt("return", r > -1 ? this.classBreakInfos[r].symbol : this.defaultSymbol);

                    case 13:
                    case "end":
                      return _context6.stop();
                  }
                }
              }, _callee6, this);
            }));

            function getSymbolAsync(_x11, _x12) {
              return _getSymbolAsync2.apply(this, arguments);
            }

            return getSymbolAsync;
          }()
        }, {
          key: "getSymbols",
          value: function getSymbols() {
            var e = [];
            return this.classBreakInfos.forEach(function (s) {
              s.symbol && e.push(s.symbol);
            }), this.defaultSymbol && e.push(this.defaultSymbol), e;
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
            var e = JSON.stringify(this.backgroundFillSymbol),
                s = JSON.stringify(this.defaultSymbol),
                t = "".concat(this.normalizationField, ".").concat(this.normalizationType, ".").concat(this.normalizationTotal);
            return "".concat(e, ".").concat(s, ".").concat(this.classBreakInfos.reduce(function (e, s) {
              return e + s.getMeshHash();
            }, ""), ".").concat(t, ".").concat(this.field, ".").concat(this.valueExpression);
          }
        }, {
          key: "arcadeRequired",
          get: function get() {
            return this.arcadeRequiredForVisualVariables || !!this.valueExpression;
          }
        }, {
          key: "clone",
          value: function clone() {
            return new _V({
              field: this.field,
              backgroundFillSymbol: this.backgroundFillSymbol && this.backgroundFillSymbol.clone(),
              defaultLabel: this.defaultLabel,
              defaultSymbol: this.defaultSymbol && this.defaultSymbol.clone(),
              valueExpression: this.valueExpression,
              valueExpressionTitle: this.valueExpressionTitle,
              classBreakInfos: Object(_core_lang_js__WEBPACK_IMPORTED_MODULE_2__["clone"])(this.classBreakInfos),
              isMaxInclusive: this.isMaxInclusive,
              normalizationField: this.normalizationField,
              normalizationTotal: this.normalizationTotal,
              normalizationType: this.normalizationType,
              visualVariables: Object(_core_lang_js__WEBPACK_IMPORTED_MODULE_2__["clone"])(this.visualVariables),
              legendOptions: Object(_core_lang_js__WEBPACK_IMPORTED_MODULE_2__["clone"])(this.legendOptions),
              authoringInfo: this.authoringInfo && this.authoringInfo.clone()
            });
          }
        }, {
          key: "collectRequiredFields",
          value: function () {
            var _collectRequiredFields2 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee7(e, s) {
              var t;
              return regeneratorRuntime.wrap(function _callee7$(_context7) {
                while (1) {
                  switch (_context7.prev = _context7.next) {
                    case 0:
                      t = [this.collectVVRequiredFields(e, s), this.collectSymbolFields(e, s)];
                      _context7.next = 3;
                      return Object(_core_promiseUtils_js__WEBPACK_IMPORTED_MODULE_16__["all"])(t);

                    case 3:
                    case "end":
                      return _context7.stop();
                  }
                }
              }, _callee7, this);
            }));

            function collectRequiredFields(_x13, _x14) {
              return _collectRequiredFields2.apply(this, arguments);
            }

            return collectRequiredFields;
          }()
        }, {
          key: "collectSymbolFields",
          value: function () {
            var _collectSymbolFields2 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee8(e, s) {
              var t;
              return regeneratorRuntime.wrap(function _callee8$(_context8) {
                while (1) {
                  switch (_context8.prev = _context8.next) {
                    case 0:
                      t = [].concat(_toConsumableArray(this.getSymbols().map(function (t) {
                        return t.collectRequiredFields(e, s);
                      })), [Object(_layers_support_fieldUtils_js__WEBPACK_IMPORTED_MODULE_18__["collectArcadeFieldNames"])(e, s, this.valueExpression)]);
                      Object(_layers_support_fieldUtils_js__WEBPACK_IMPORTED_MODULE_18__["collectField"])(e, s, this.field);
                      Object(_layers_support_fieldUtils_js__WEBPACK_IMPORTED_MODULE_18__["collectField"])(e, s, this.normalizationField);
                      _context8.next = 5;
                      return Object(_core_promiseUtils_js__WEBPACK_IMPORTED_MODULE_16__["all"])(t);

                    case 5:
                    case "end":
                      return _context8.stop();
                  }
                }
              }, _callee8, this);
            }));

            function collectSymbolFields(_x15, _x16) {
              return _collectSymbolFields2.apply(this, arguments);
            }

            return collectSymbolFields;
          }()
        }, {
          key: "_getBreakIndexForExpression",
          value: function _getBreakIndexForExpression(e, s) {
            var _Object4 = Object(_core_maybe_js__WEBPACK_IMPORTED_MODULE_3__["unwrapOr"])(s, {}),
                t = _Object4.viewingMode,
                a = _Object4.scale,
                i = _Object4.spatialReference,
                l = _Object4.arcade;

            var n = this._cache.compiledFunc;
            var u = Object(_core_maybe_js__WEBPACK_IMPORTED_MODULE_3__["unwrap"])(l).arcadeUtils;

            if (!n) {
              var _e11 = u.createSyntaxTree(this.valueExpression);

              n = u.createFunction(_e11), this._cache.compiledFunc = n;
            }

            var c = u.executeFunction(n, u.createExecContext(e, u.getViewInfo({
              viewingMode: t,
              scale: a,
              spatialReference: i
            })));
            return this._getBreakIndexfromInfos(c);
          }
        }, {
          key: "_getBreakIndexForField",
          value: function _getBreakIndexForField(e) {
            var s = this.field,
                t = e.attributes,
                o = this.normalizationType;
            var r = parseFloat(t[s]);

            if (o) {
              var _e12 = this.normalizationTotal,
                  _s6 = parseFloat(t[this.normalizationField]);

              if ("log" === o) r = Math.log(r) * Math.LOG10E;else if ("percent-of-total" !== o || isNaN(_e12)) {
                if ("field" === o && !isNaN(_s6)) {
                  if (isNaN(r) || isNaN(_s6)) return -1;
                  r /= _s6;
                }
              } else r = r / _e12 * 100;
            }

            return this._getBreakIndexfromInfos(r);
          }
        }, {
          key: "_getBreakIndexfromInfos",
          value: function _getBreakIndexfromInfos(e) {
            var s = this.isMaxInclusive;
            if (null != e && "number" == typeof e && !isNaN(e)) for (var t = 0; t < this.classBreakInfos.length; t++) {
              var o = [this.classBreakInfos[t].minValue, this.classBreakInfos[t].maxValue];
              if (o[0] <= e && (s ? e <= o[1] : e < o[1])) return t;
            }
            return -1;
          }
        }, {
          key: "_areClassBreaksConsecutive",
          value: function _areClassBreaksConsecutive() {
            var e = this.classBreakInfos,
                s = e.length;

            for (var t = 1; t < s; t++) {
              if (e[t - 1].maxValue !== e[t].minValue) return !1;
            }

            return !0;
          }
        }]);

        return V;
      }(Object(_mixins_VisualVariablesMixin_js__WEBPACK_IMPORTED_MODULE_22__["VisualVariablesMixin"])(_Renderer_js__WEBPACK_IMPORTED_MODULE_21__["default"]));

      Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_6__["property"])({
        readOnly: !0,
        dependsOn: ["valueExpression"]
      })], T.prototype, "_cache", null), Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_6__["property"])(_support_commonProperties_js__WEBPACK_IMPORTED_MODULE_24__["rendererBackgroundFillSymbolProperty"])], T.prototype, "backgroundFillSymbol", void 0), Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_6__["property"])({
        type: [_support_ClassBreakInfo_js__WEBPACK_IMPORTED_MODULE_23__["default"]]
      })], T.prototype, "classBreakInfos", void 0), Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_reader_js__WEBPACK_IMPORTED_MODULE_10__["reader"])("classBreakInfos")], T.prototype, "readClassBreakInfos", null), Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_writer_js__WEBPACK_IMPORTED_MODULE_12__["writer"])("classBreakInfos")], T.prototype, "writeClassBreakInfos", null), Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_6__["property"])({
        type: String,
        json: {
          write: !0
        }
      })], T.prototype, "defaultLabel", void 0), Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_6__["property"])(_support_commonProperties_js__WEBPACK_IMPORTED_MODULE_24__["rendererSymbolProperty"])], T.prototype, "defaultSymbol", void 0), Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_6__["property"])({
        type: String,
        json: {
          write: !0
        }
      })], T.prototype, "field", void 0), Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_cast_js__WEBPACK_IMPORTED_MODULE_7__["cast"])("field")], T.prototype, "castField", null), Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_6__["property"])({
        type: Boolean
      })], T.prototype, "isMaxInclusive", void 0), Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_6__["property"])({
        type: _support_LegendOptions_js__WEBPACK_IMPORTED_MODULE_20__["default"],
        json: {
          write: !0
        }
      })], T.prototype, "legendOptions", void 0), Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_6__["property"])({
        type: Number,
        readOnly: !0,
        value: null,
        dependsOn: ["classBreakInfos"],
        json: {
          read: !1,
          write: {
            overridePolicy: function overridePolicy() {
              return 0 !== this.classBreakInfos.length && this._areClassBreaksConsecutive() ? {
                enabled: !0
              } : {
                enabled: !1
              };
            }
          }
        }
      })], T.prototype, "minValue", null), Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_6__["property"])({
        type: String,
        json: {
          write: !0
        }
      })], T.prototype, "normalizationField", void 0), Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_6__["property"])({
        type: Number,
        cast: function cast(e) {
          return Object(_core_accessorSupport_ensureType_js__WEBPACK_IMPORTED_MODULE_5__["ensureNumber"])(e);
        },
        json: {
          write: !0
        }
      })], T.prototype, "normalizationTotal", void 0), Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_6__["property"])({
        type: w.apiValues,
        value: null,
        dependsOn: ["normalizationField", "normalizationTotal"],
        json: {
          type: w.jsonValues,
          read: w.read,
          write: w.write
        }
      })], T.prototype, "normalizationType", null), Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_enumeration_js__WEBPACK_IMPORTED_MODULE_9__["enumeration"])({
        classBreaks: "class-breaks"
      })], T.prototype, "type", void 0), Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_6__["property"])({
        type: String,
        json: {
          write: !0
        }
      })], T.prototype, "valueExpression", void 0), Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_6__["property"])({
        type: String,
        json: {
          write: !0
        }
      })], T.prototype, "valueExpressionTitle", void 0), T = _V = Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_subclass_js__WEBPACK_IMPORTED_MODULE_11__["subclass"])("esri.renderers.ClassBreaksRenderer")], T);
      var C = T;
      /* harmony default export */

      __webpack_exports__["default"] = C;
      /***/
    }
  }]);
})();
//# sourceMappingURL=default~BuildingSceneLayer-js~CSVLayer-js~FeatureLayer-js~ImageryLayer-js~ImageryTileLayer-js~KMLLay~253c3a50-es5.js.map