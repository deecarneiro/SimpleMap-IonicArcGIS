(function () {
  function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

  function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

  function _iterableToArrayLimit(arr, i) { if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr))) return; var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

  function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

  function _createForOfIteratorHelper(o, allowArrayLike) { var it; if (typeof Symbol === "undefined" || o[Symbol.iterator] == null) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e3) { throw _e3; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = o[Symbol.iterator](); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e4) { didErr = true; err = _e4; }, f: function f() { try { if (!normalCompletion && it["return"] != null) it["return"](); } finally { if (didErr) throw err; } } }; }

  function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

  function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

  function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

  function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

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

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["ElevationLayer-js"], {
    /***/
    "03hq":
    /*!*****************************************************************!*\
      !*** ./node_modules/@arcgis/core/layers/support/LercDecoder.js ***!
      \*****************************************************************/

    /*! exports provided: acquireDecoder, releaseDecoder */

    /***/
    function hq(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "acquireDecoder", function () {
        return s;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "releaseDecoder", function () {
        return o;
      });
      /* harmony import */


      var _core_promiseUtils_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ../../core/promiseUtils.js */
      "9MzC");
      /* harmony import */


      var _views_3d_support_WorkerHandle_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ../../views/3d/support/WorkerHandle.js */
      "fdkE");
      /*
      All material copyright ESRI, All Rights Reserved, unless otherwise specified.
      See https://js.arcgis.com/4.18/esri/copyright.txt for details.
      */


      var t = /*#__PURE__*/function (_views_3d_support_Wor) {
        _inherits(t, _views_3d_support_Wor);

        var _super = _createSuper(t);

        function t(e) {
          var _this;

          _classCallCheck(this, t);

          _this = _super.call(this, "LercWorker", "_decode", e, {
            strategy: "dedicated"
          }), _this.scheduler = e;
          return _this;
        }

        _createClass(t, [{
          key: "decode",
          value: function decode(r, _t, n) {
            return r && 0 !== r.byteLength ? this.invoke({
              buffer: r,
              options: _t
            }, n) : Object(_core_promiseUtils_js__WEBPACK_IMPORTED_MODULE_0__["resolve"])(null);
          }
        }, {
          key: "getTransferList",
          value: function getTransferList(e) {
            return [e.buffer];
          }
        }]);

        return t;
      }(_views_3d_support_WorkerHandle_js__WEBPACK_IMPORTED_MODULE_1__["WorkerHandle"]);

      var n = new Map();

      function s(e) {
        var r = n.get(e);
        return r || (r = {
          instance: new t(e),
          ref: 0
        }, n.set(e, r)), ++r.ref, r.instance;
      }

      function o(e) {
        if (null == e) return;
        var r = e.scheduler,
            t = n.get(r);
        t && --t.ref <= 0 && (t.instance.destroy(), n["delete"](r));
      }
      /***/

    },

    /***/
    "8g7C":
    /*!************************************************************!*\
      !*** ./node_modules/@arcgis/core/layers/ElevationLayer.js ***!
      \************************************************************/

    /*! exports provided: default */

    /***/
    function g7C(module, __webpack_exports__, __webpack_require__) {
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


      var _core_accessorSupport_decorators_reader_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ../core/accessorSupport/decorators/reader.js */
      "r88o");
      /* harmony import */


      var _core_accessorSupport_decorators_subclass_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! ../core/accessorSupport/decorators/subclass.js */
      "04ZG");
      /* harmony import */


      var _core_Error_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! ../core/Error.js */
      "zlDU");
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


      var _core_promiseUtils_js__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
      /*! ../core/promiseUtils.js */
      "9MzC");
      /* harmony import */


      var _request_js__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
      /*! ../request.js */
      "Lqtk");
      /* harmony import */


      var _Layer_js__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(
      /*! ./Layer.js */
      "pqNC");
      /* harmony import */


      var _core_MultiOriginJSONSupport_js__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(
      /*! ../core/MultiOriginJSONSupport.js */
      "5pQd");
      /* harmony import */


      var _geometry_HeightModelInfo_js__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(
      /*! ../geometry/HeightModelInfo.js */
      "5k2a");
      /* harmony import */


      var _support_commonProperties_js__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(
      /*! ./support/commonProperties.js */
      "IvSi");
      /* harmony import */


      var _mixins_OperationalLayer_js__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(
      /*! ./mixins/OperationalLayer.js */
      "uRH/");
      /* harmony import */


      var _mixins_ArcGISService_js__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(
      /*! ./mixins/ArcGISService.js */
      "PVlI");
      /* harmony import */


      var _mixins_PortalLayer_js__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(
      /*! ./mixins/PortalLayer.js */
      "DbUH");
      /* harmony import */


      var _mixins_ArcGISCachedService_js__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(
      /*! ./mixins/ArcGISCachedService.js */
      "tIWS");
      /* harmony import */


      var _support_LercDecoder_js__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(
      /*! ./support/LercDecoder.js */
      "03hq");
      /*
      All material copyright ESRI, All Rights Reserved, unless otherwise specified.
      See https://js.arcgis.com/4.18/esri/copyright.txt for details.
      */


      var x = _core_Logger_js__WEBPACK_IMPORTED_MODULE_3__["default"].getLogger("esri.layers.ElevationLayer");

      var T = /*#__PURE__*/function (_Object) {
        _inherits(T, _Object);

        var _super2 = _createSuper(T);

        function T() {
          var _this2;

          _classCallCheck(this, T);

          for (var _len = arguments.length, e = new Array(_len), _key = 0; _key < _len; _key++) {
            e[_key] = arguments[_key];
          }

          _this2 = _super2.call.apply(_super2, [this].concat(e)), _this2.copyright = null, _this2.heightModelInfo = null, _this2.path = null, _this2.opacity = 1, _this2.operationalLayerType = "ArcGISTiledElevationServiceLayer", _this2.sourceJSON = null, _this2.type = "elevation", _this2.url = null, _this2.version = null, _this2._lercDecoder = Object(_support_LercDecoder_js__WEBPACK_IMPORTED_MODULE_22__["acquireDecoder"])();
          return _this2;
        }

        _createClass(T, [{
          key: "normalizeCtorArgs",
          value: function normalizeCtorArgs(e, r) {
            return "string" == typeof e ? _objectSpread({
              url: e
            }, r) : e;
          }
        }, {
          key: "destroy",
          value: function destroy() {
            Object(_support_LercDecoder_js__WEBPACK_IMPORTED_MODULE_22__["releaseDecoder"])(this._lercDecoder), this._lercDecoder = null;
          }
        }, {
          key: "minScale",
          get: function get() {},
          set: function set(e) {
            this.constructed && x.warn("".concat(this.declaredClass, ".minScale support has been removed (since 4.5)"));
          }
        }, {
          key: "maxScale",
          get: function get() {},
          set: function set(e) {
            this.constructed && x.warn("".concat(this.declaredClass, ".maxScale support has been removed (since 4.5)"));
          }
        }, {
          key: "readVersion",
          value: function readVersion(e, r) {
            var t = r.currentVersion;
            return t || (t = 9.3), t;
          }
        }, {
          key: "load",
          value: function load(e) {
            var _this3 = this;

            var t = Object(_core_maybe_js__WEBPACK_IMPORTED_MODULE_2__["isSome"])(e) ? e.signal : null;
            return this.addResolvingPromise(this.loadFromPortal({
              supportedTypes: ["Image Service"],
              supportsData: !1,
              validateItem: function validateItem(e) {
                for (var r = 0; r < e.typeKeywords.length; r++) {
                  if ("elevation 3d layer" === e.typeKeywords[r].toLowerCase()) return !0;
                }

                throw new _core_Error_js__WEBPACK_IMPORTED_MODULE_8__["default"]("portal:invalid-layer-item-type", "Invalid layer item type '${type}', expected '${expectedType}' ", {
                  type: "Image Service",
                  expectedType: "Image Service Elevation 3D Layer"
                });
              }
            }, e).then(function () {
              return _this3._fetchImageService(t);
            }, function () {
              return _this3._fetchImageService(t);
            })), Object(_core_promiseUtils_js__WEBPACK_IMPORTED_MODULE_12__["resolve"])(this);
          }
        }, {
          key: "fetchTile",
          value: function fetchTile(e, t, o, i) {
            var _this4 = this;

            var s = Object(_core_maybe_js__WEBPACK_IMPORTED_MODULE_2__["isSome"])((i = i || {
              signal: null
            }).signal) ? i.signal : i.signal = Object(_core_promiseUtils_js__WEBPACK_IMPORTED_MODULE_12__["createAbortController"])().signal,
                a = {
              responseType: "array-buffer",
              signal: s
            },
                l = {
              noDataValue: i.noDataValue,
              returnFileInfo: !0
            };
            return this.load().then(function () {
              return _this4._fetchTileAvailability(e, t, o, i);
            }).then(function () {
              return Object(_request_js__WEBPACK_IMPORTED_MODULE_13__["default"])(_this4.getTileUrl(e, t, o), a);
            }).then(function (e) {
              return _this4._lercDecoder.decode(e.data, l, s);
            }).then(function (e) {
              return {
                values: e.pixelData,
                width: e.width,
                height: e.height,
                maxZError: e.fileInfo.maxZError,
                noDataValue: e.noDataValue,
                minValue: e.minValue,
                maxValue: e.maxValue
              };
            });
          }
        }, {
          key: "getTileUrl",
          value: function getTileUrl(e, r, t) {
            var o = !this.tilemapCache && this.supportsBlankTile,
                i = Object(_core_urlUtils_js__WEBPACK_IMPORTED_MODULE_9__["objectToQuery"])(_objectSpread(_objectSpread({}, this.parsedUrl.query), {}, {
              blankTile: !o && null
            }));
            return "".concat(this.parsedUrl.path, "/tile/").concat(e, "/").concat(r, "/").concat(t).concat(i ? "?" + i : "");
          }
        }, {
          key: "queryElevation",
          value: function () {
            var _queryElevation = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(e, r) {
              var _yield$__webpack_requ, t;

              return regeneratorRuntime.wrap(function _callee$(_context) {
                while (1) {
                  switch (_context.prev = _context.next) {
                    case 0:
                      _context.next = 2;
                      return __webpack_require__.e(
                      /*! import() | support-ElevationQuery-js */
                      "support-ElevationQuery-js").then(__webpack_require__.bind(null,
                      /*! ./support/ElevationQuery.js */
                      "LfYK"));

                    case 2:
                      _yield$__webpack_requ = _context.sent;
                      t = _yield$__webpack_requ.ElevationQuery;
                      Object(_core_promiseUtils_js__WEBPACK_IMPORTED_MODULE_12__["throwIfAborted"])(r);
                      return _context.abrupt("return", new t().query(this, e, r));

                    case 6:
                    case "end":
                      return _context.stop();
                  }
                }
              }, _callee, this);
            }));

            function queryElevation(_x, _x2) {
              return _queryElevation.apply(this, arguments);
            }

            return queryElevation;
          }()
        }, {
          key: "createElevationSampler",
          value: function () {
            var _createElevationSampler = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee2(e, r) {
              var _yield$__webpack_requ2, t;

              return regeneratorRuntime.wrap(function _callee2$(_context2) {
                while (1) {
                  switch (_context2.prev = _context2.next) {
                    case 0:
                      _context2.next = 2;
                      return __webpack_require__.e(
                      /*! import() | support-ElevationQuery-js */
                      "support-ElevationQuery-js").then(__webpack_require__.bind(null,
                      /*! ./support/ElevationQuery.js */
                      "LfYK"));

                    case 2:
                      _yield$__webpack_requ2 = _context2.sent;
                      t = _yield$__webpack_requ2.ElevationQuery;
                      Object(_core_promiseUtils_js__WEBPACK_IMPORTED_MODULE_12__["throwIfAborted"])(r);
                      return _context2.abrupt("return", new t().createSampler(this, e, r));

                    case 6:
                    case "end":
                      return _context2.stop();
                  }
                }
              }, _callee2, this);
            }));

            function createElevationSampler(_x3, _x4) {
              return _createElevationSampler.apply(this, arguments);
            }

            return createElevationSampler;
          }()
        }, {
          key: "_fetchTileAvailability",
          value: function _fetchTileAvailability(e, r, t, o) {
            return this.tilemapCache ? this.tilemapCache.fetchAvailability(e, r, t, o) : Object(_core_promiseUtils_js__WEBPACK_IMPORTED_MODULE_12__["resolve"])("unknown");
          }
        }, {
          key: "_fetchImageService",
          value: function () {
            var _fetchImageService2 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee3(e) {
              var r, t;
              return regeneratorRuntime.wrap(function _callee3$(_context3) {
                while (1) {
                  switch (_context3.prev = _context3.next) {
                    case 0:
                      if (!this.sourceJSON) {
                        _context3.next = 2;
                        break;
                      }

                      return _context3.abrupt("return", this.sourceJSON);

                    case 2:
                      r = {
                        query: _objectSpread({
                          f: "json"
                        }, this.parsedUrl.query),
                        responseType: "json",
                        signal: e
                      };
                      _context3.next = 5;
                      return Object(_request_js__WEBPACK_IMPORTED_MODULE_13__["default"])(this.parsedUrl.path, r);

                    case 5:
                      t = _context3.sent;
                      t.ssl && (this.url = this.url.replace(/^http:/i, "https:")), this.sourceJSON = t.data, this.read(t.data, {
                        origin: "service",
                        url: this.parsedUrl
                      });

                    case 7:
                    case "end":
                      return _context3.stop();
                  }
                }
              }, _callee3, this);
            }));

            function _fetchImageService(_x5) {
              return _fetchImageService2.apply(this, arguments);
            }

            return _fetchImageService;
          }()
        }]);

        return T;
      }(Object(_mixins_ArcGISCachedService_js__WEBPACK_IMPORTED_MODULE_21__["ArcGISCachedService"])(Object(_mixins_ArcGISService_js__WEBPACK_IMPORTED_MODULE_19__["ArcGISService"])(Object(_mixins_OperationalLayer_js__WEBPACK_IMPORTED_MODULE_18__["OperationalLayer"])(Object(_mixins_PortalLayer_js__WEBPACK_IMPORTED_MODULE_20__["PortalLayer"])(Object(_core_MultiOriginJSONSupport_js__WEBPACK_IMPORTED_MODULE_15__["MultiOriginJSONMixin"])(_Layer_js__WEBPACK_IMPORTED_MODULE_14__["default"]))))));

      Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_5__["property"])({
        json: {
          read: {
            source: "copyrightText"
          }
        }
      })], T.prototype, "copyright", void 0), Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_5__["property"])({
        readOnly: !0,
        type: _geometry_HeightModelInfo_js__WEBPACK_IMPORTED_MODULE_16__["default"]
      })], T.prototype, "heightModelInfo", void 0), Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_5__["property"])({
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
      })], T.prototype, "path", void 0), Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_5__["property"])({
        type: ["show", "hide"]
      })], T.prototype, "listMode", void 0), Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_5__["property"])({
        json: {
          read: !1,
          write: !1,
          origins: {
            service: {
              read: !1,
              write: !1
            },
            "portal-item": {
              read: !1,
              write: !1
            },
            "web-document": {
              read: !1,
              write: !1
            }
          }
        }
      })], T.prototype, "minScale", null), Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_5__["property"])({
        json: {
          read: !1,
          write: !1,
          origins: {
            service: {
              read: !1,
              write: !1
            },
            "portal-item": {
              read: !1,
              write: !1
            },
            "web-document": {
              read: !1,
              write: !1
            }
          }
        }
      })], T.prototype, "maxScale", null), Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_5__["property"])({
        json: {
          read: !1,
          write: !1,
          origins: {
            "web-document": {
              read: !1,
              write: !1
            }
          }
        }
      })], T.prototype, "opacity", void 0), Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_5__["property"])({
        type: ["ArcGISTiledElevationServiceLayer"]
      })], T.prototype, "operationalLayerType", void 0), Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_5__["property"])()], T.prototype, "sourceJSON", void 0), Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_5__["property"])({
        json: {
          read: !1
        },
        value: "elevation",
        readOnly: !0
      })], T.prototype, "type", void 0), Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_5__["property"])(_support_commonProperties_js__WEBPACK_IMPORTED_MODULE_17__["url"])], T.prototype, "url", void 0), Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_5__["property"])()], T.prototype, "version", void 0), Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_reader_js__WEBPACK_IMPORTED_MODULE_6__["reader"])("version", ["currentVersion"])], T.prototype, "readVersion", null), T = Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_subclass_js__WEBPACK_IMPORTED_MODULE_7__["subclass"])("esri.layers.ElevationLayer")], T);
      var I = T;
      /* harmony default export */

      __webpack_exports__["default"] = I;
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

          var _super3 = _createSuper(c);

          function c() {
            _classCallCheck(this, c);

            return _super3.apply(this, arguments);
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
    "fdkE":
    /*!********************************************************************!*\
      !*** ./node_modules/@arcgis/core/views/3d/support/WorkerHandle.js ***!
      \********************************************************************/

    /*! exports provided: WorkerHandle */

    /***/
    function fdkE(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "WorkerHandle", function () {
        return h;
      });
      /* harmony import */


      var _core_Logger_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ../../../core/Logger.js */
      "6S2I");
      /* harmony import */


      var _core_promiseUtils_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ../../../core/promiseUtils.js */
      "9MzC");
      /* harmony import */


      var _core_workers_workers_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ../../../core/workers/workers.js */
      "36Co");
      /*
      All material copyright ESRI, All Rights Reserved, unless otherwise specified.
      See https://js.arcgis.com/4.18/esri/copyright.txt for details.
      */


      var o = _core_Logger_js__WEBPACK_IMPORTED_MODULE_0__["default"].getLogger("esri.views.3d.support.WorkerHandle");

      var h = /*#__PURE__*/function () {
        function h(t, r, e) {
          var _this5 = this;

          var s = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : {};

          _classCallCheck(this, h);

          this._methodName = r, this._promise = Object(_core_workers_workers_js__WEBPACK_IMPORTED_MODULE_2__["open"])(t, _objectSpread(_objectSpread({}, s), {}, {
            scheduler: e
          })).then(function (t) {
            void 0 === _this5._thread ? (_this5._thread = t, _this5._promise = null, s.hasInitialize && _this5.broadcast({}, "initialize")) : t.close();
          }), this._promise["catch"](function (r) {
            return o.error("Failed to initialize ".concat(t, " worker: ").concat(r));
          });
        }

        _createClass(h, [{
          key: "destroy",
          value: function destroy() {
            this._thread && (this._thread.close(), this._thread = null), this._promise = null;
          }
        }, {
          key: "invoke",
          value: function invoke(t, s) {
            var _this6 = this;

            if (this._thread) {
              var r = this.getTransferList(t);
              return this._thread.invoke(this._methodName, t, {
                transferList: r,
                signal: s
              });
            }

            return this._promise ? this._promise.then(function () {
              return Object(_core_promiseUtils_js__WEBPACK_IMPORTED_MODULE_1__["throwIfAborted"])(s), _this6.invoke(t, s);
            }) : Object(_core_promiseUtils_js__WEBPACK_IMPORTED_MODULE_1__["reject"])(null);
          }
        }, {
          key: "broadcast",
          value: function broadcast(t, r) {
            var _this7 = this;

            return this._thread ? Object(_core_promiseUtils_js__WEBPACK_IMPORTED_MODULE_1__["all"])(this._thread.broadcast(r, t)).then(function () {}) : this._promise ? this._promise.then(function () {
              return _this7.broadcast(t, r);
            }) : Object(_core_promiseUtils_js__WEBPACK_IMPORTED_MODULE_1__["reject"])();
          }
        }, {
          key: "promise",
          get: function get() {
            return this._promise;
          }
        }]);

        return h;
      }();
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
          value: function put(t, e, s, _i) {
            var h = this._db.get(t);

            if (h && (this._size -= h.size, this._db["delete"](t), h.entry !== e && this._notifyRemoved(t, h.entry)), s > this._maxSize) return void this._notifyRemoved(t, e);
            if (void 0 === e) return void console.warn("Refusing to cache undefined entry ");
            if (!s || s < 0) return void console.warn("Refusing to cache entry with invalid size " + s);
            var r = 1 + Math.max(_i, -3) - -3;
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
            var _i2 = this._db.get(t);

            _i2 && _i2.entry === e && (this._size -= _i2.size, s > this._maxSize ? this._notifyRemoved(t, e) : (_i2.size = s, this._size += s, this._checkSizeLimit()));
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
            var _this8 = this;

            var t = {
              Size: Math.round(this._size / 1048576) + "/" + Math.round(this._maxSize / 1048576) + "MB",
              "Hit rate": Math.round(100 * this._getHitRate()) + "%",
              Entries: this._db.size.toString()
            },
                e = {},
                s = new Array();

            this._db.forEach(function (t, _i4) {
              var h = t.lifetime;
              s[h] = (s[h] || 0) + t.size, _this8._users.forAll(function (s) {
                var h = s.namespace;

                if (_i4.startsWith(h)) {
                  var _s4 = e[h] || 0;

                  e[h] = _s4 + t.size;
                }
              });
            });

            var _i3 = {};

            this._users.forAll(function (t) {
              var s = t.namespace;

              if (!isNaN(t.hitRate) && t.hitRate > 0) {
                var _h = e[s] || 0;

                e[s] = _h, _i3[s] = Math.round(100 * t.hitRate) + "%";
              } else _i3[s] = "0%";
            });

            var h = Object.keys(e);
            h.forEach(function (t) {
              return e[t] = e[t] / _this8._size * 100;
            }), h.sort(function (t, s) {
              return e[s] - e[t];
            }), h.forEach(function (s) {
              return t[s] = Math.round(e[s]) + "% / " + _i3[s];
            });

            for (var _e = s.length - 1; _e >= 0; --_e) {
              var _i6 = s[_e];
              _i6 && (t["Priority " + (_e + -3 - 1)] = Math.round(_i6 / this.size * 100) + "%");
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
            var _this9 = this;

            this._db.forEach(function (e, s) {
              s.startsWith(t) && (_this9._size -= e.size, _this9._db["delete"](s), _this9._notifyRemoved(s, e.entry));
            });
          }
        }, {
          key: "clearAll",
          value: function clearAll() {
            var _this10 = this;

            this._db.forEach(function (t, e) {
              return _this10._notifyRemoved(e, t.entry);
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
              var _iterator = _createForOfIteratorHelper(this._db),
                  _step;

              try {
                for (_iterator.s(); !(_step = _iterator.n()).done;) {
                  var _step$value = _slicedToArray(_step.value, 2),
                      t = _step$value[0],
                      _e2 = _step$value[1];

                  if (this._db["delete"](t), _e2.lives <= 1 ? (this._size -= _e2.size, this._notifyRemoved(t, _e2.entry)) : (--_e2.lives, this._db.set(t, _e2)), this._size <= .9 * this.maxSize) return;
                }
              } catch (err) {
                _iterator.e(err);
              } finally {
                _iterator.f();
              }
            }
          }
        }]);

        return i;
      }();
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
//# sourceMappingURL=ElevationLayer-js-es5.js.map