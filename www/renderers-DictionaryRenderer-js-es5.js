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

  function _createForOfIteratorHelper(o, allowArrayLike) { var it; if (typeof Symbol === "undefined" || o[Symbol.iterator] == null) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e7) { throw _e7; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = o[Symbol.iterator](); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e8) { didErr = true; err = _e8; }, f: function f() { try { if (!normalCompletion && it["return"] != null) it["return"](); } finally { if (didErr) throw err; } } }; }

  function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

  function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

  function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

  function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  function _get(target, property, receiver) { if (typeof Reflect !== "undefined" && Reflect.get) { _get = Reflect.get; } else { _get = function _get(target, property, receiver) { var base = _superPropBase(target, property); if (!base) return; var desc = Object.getOwnPropertyDescriptor(base, property); if (desc.get) { return desc.get.call(receiver); } return desc.value; }; } return _get(target, property, receiver || target); }

  function _superPropBase(object, property) { while (!Object.prototype.hasOwnProperty.call(object, property)) { object = _getPrototypeOf(object); if (object === null) break; } return object; }

  function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

  function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

  function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

  function _possibleConstructorReturn(self, call) { if (call && (typeof call === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

  function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

  function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

  function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["renderers-DictionaryRenderer-js"], {
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

      var v = _w = /*#__PURE__*/function (_Object) {
        _inherits(w, _Object);

        var _super = _createSuper(w);

        function w(e) {
          var _this;

          _classCallCheck(this, w);

          _this = _super.call(this, e), _this._ongoingRequests = new Map(), _this._symbolCache = new _core_LRUCache_js__WEBPACK_IMPORTED_MODULE_22__["default"](100), _this.config = null, _this.fieldMap = null, _this.scaleExpression = null, _this.scaleExpressionTitle = null, _this.url = null, _this.type = "dictionary";
          return _this;
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
            var _getSymbolAsync = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(e, s) {
              var _this2 = this;

              var t, i, _iterator, _step, _s, _t, r, o, n, a, l, p, u, _iterator2, _step2, _e, _iterator3, _step3, _s2, _s3, _e2, _t2, _r, _e3, m;

              return regeneratorRuntime.wrap(function _callee$(_context) {
                while (1) {
                  switch (_context.prev = _context.next) {
                    case 0:
                      this._dictionaryPromise || (this._dictionaryPromise = this.fetchResources(s));
                      _context.prev = 1;
                      _context.next = 4;
                      return this._dictionaryPromise;

                    case 4:
                      t = _context.sent;
                      _context.next = 11;
                      break;

                    case 7:
                      _context.prev = 7;
                      _context.t0 = _context["catch"](1);

                      if (!Object(_core_promiseUtils_js__WEBPACK_IMPORTED_MODULE_14__["isAbortError"])(_context.t0)) {
                        _context.next = 11;
                        break;
                      }

                      return _context.abrupt("return", (this._dictionaryPromise = null, null));

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
                        _context.next = 16;
                        break;
                      }

                      return _context.abrupt("return", null);

                    case 16:
                      n = Object(_core_string_js__WEBPACK_IMPORTED_MODULE_4__["numericHash"])(o).toString(), a = this._symbolCache.get(n);

                      if (!a) {
                        _context.next = 19;
                        break;
                      }

                      return _context.abrupt("return", (a["catch"](function () {
                        _this2._symbolCache.pop(n);
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
                      return _context.abrupt("return", (this._symbolCache.put(n, m, 1), m));

                    case 24:
                    case "end":
                      return _context.stop();
                  }
                }
              }, _callee, this, [[1, 7]]);
            }));

            function getSymbolAsync(_x, _x2) {
              return _getSymbolAsync.apply(this, arguments);
            }

            return getSymbolAsync;
          }()
        }, {
          key: "collectRequiredFields",
          value: function () {
            var _collectRequiredFields = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee2(e, s) {
              var t, _s4;

              return regeneratorRuntime.wrap(function _callee2$(_context2) {
                while (1) {
                  switch (_context2.prev = _context2.next) {
                    case 0:
                      _context2.next = 2;
                      return this.collectVVRequiredFields(e, s);

                    case 2:
                      _context2.t0 = this.scaleExpression;

                      if (!_context2.t0) {
                        _context2.next = 6;
                        break;
                      }

                      _context2.next = 6;
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
                      return _context2.stop();
                  }
                }
              }, _callee2, this);
            }));

            function collectRequiredFields(_x3, _x4) {
              return _collectRequiredFields.apply(this, arguments);
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
            var _fetchResources = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee3(e) {
              var _this3 = this;

              var s, r, _yield$Object, _yield$Object2, i, o, n, a, _e4, _s5, _iterator4, _step4, _e5, c, _iterator5, _step5, _loop;

              return regeneratorRuntime.wrap(function _callee3$(_context3) {
                while (1) {
                  switch (_context3.prev = _context3.next) {
                    case 0:
                      if (!this._dictionaryPromise) {
                        _context3.next = 2;
                        break;
                      }

                      return _context3.abrupt("return", this._dictionaryPromise);

                    case 2:
                      if (this.url) {
                        _context3.next = 4;
                        break;
                      }

                      return _context3.abrupt("return", void x.error("no valid URL!"));

                    case 4:
                      s = Object(_core_maybe_js__WEBPACK_IMPORTED_MODULE_3__["isSome"])(e) ? e.abortOptions : null;
                      r = Object(_request_js__WEBPACK_IMPORTED_MODULE_19__["default"])(this.url + "/resources/styles/dictionary-info.json", _objectSpread({
                        responseType: "json",
                        query: {
                          f: "json"
                        }
                      }, s));
                      _context3.next = 8;
                      return Object(_core_promiseUtils_js__WEBPACK_IMPORTED_MODULE_14__["all"])([r, Object(_support_arcadeOnDemand_js__WEBPACK_IMPORTED_MODULE_15__["loadArcade"])()]);

                    case 8:
                      _yield$Object = _context3.sent;
                      _yield$Object2 = _slicedToArray(_yield$Object, 1);
                      i = _yield$Object2[0].data;

                      if (i) {
                        _context3.next = 13;
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
                            var t = _this3.fieldMap[s],
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

                      return _context3.abrupt("return", (this._dictionaryPromise = Object(_support_arcadeOnDemand_js__WEBPACK_IMPORTED_MODULE_15__["createDictionaryExpression"])(o, Object(_core_maybe_js__WEBPACK_IMPORTED_MODULE_3__["isSome"])(e) ? e.spatialReference : null, c, a).then(function (e) {
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
                      return _context3.stop();
                  }
                }
              }, _callee3, this);
            }));

            function fetchResources(_x5) {
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
            var _getSymbolPart2 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee4(e, s) {
              var t, r;
              return regeneratorRuntime.wrap(function _callee4$(_context4) {
                while (1) {
                  switch (_context4.prev = _context4.next) {
                    case 0:
                      if (!this._ongoingRequests.has(e)) {
                        _context4.next = 2;
                        break;
                      }

                      return _context4.abrupt("return", this._ongoingRequests.get(e).then(function (e) {
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

                      _context4.prev = 4;
                      _context4.next = 7;
                      return r;

                    case 7:
                      return _context4.abrupt("return", _context4.sent.data);

                    case 10:
                      _context4.prev = 10;
                      _context4.t0 = _context4["catch"](4);
                      return _context4.abrupt("return", (this._ongoingRequests["delete"](e), Object(_core_promiseUtils_js__WEBPACK_IMPORTED_MODULE_14__["reject"])(_context4.t0)));

                    case 13:
                    case "end":
                      return _context4.stop();
                  }
                }
              }, _callee4, this, [[4, 10]]);
            }));

            function _getSymbolPart(_x6, _x7) {
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
            var _cimPartsToCIMSymbol2 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee5(e, s, t) {
              var r, _s7, i;

              return regeneratorRuntime.wrap(function _callee5$(_context5) {
                while (1) {
                  switch (_context5.prev = _context5.next) {
                    case 0:
                      r = new Array(e.length);

                      for (_s7 = 0; _s7 < e.length; _s7++) {
                        r[_s7] = this._getSymbolPart(e[_s7], t);
                      }

                      _context5.next = 4;
                      return Object(_core_promiseUtils_js__WEBPACK_IMPORTED_MODULE_14__["all"])(r);

                    case 4:
                      i = _context5.sent;
                      return _context5.abrupt("return", new _symbols_CIMSymbol_js__WEBPACK_IMPORTED_MODULE_18__["default"]({
                        data: this._combineSymbolParts(i, s)
                      }));

                    case 6:
                    case "end":
                      return _context5.stop();
                  }
                }
              }, _callee5, this);
            }));

            function _cimPartsToCIMSymbol(_x8, _x9, _x10) {
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
    }
  }]);
})();
//# sourceMappingURL=renderers-DictionaryRenderer-js-es5.js.map