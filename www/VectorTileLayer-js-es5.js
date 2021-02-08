(function () {
  function _createForOfIteratorHelper(o, allowArrayLike) { var it; if (typeof Symbol === "undefined" || o[Symbol.iterator] == null) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e10) { throw _e10; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = o[Symbol.iterator](); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e11) { didErr = true; err = _e11; }, f: function f() { try { if (!normalCompletion && it["return"] != null) it["return"](); } finally { if (didErr) throw err; } } }; }

  function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

  function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

  function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

  function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

  function _iterableToArrayLimit(arr, i) { if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr))) return; var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

  function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

  function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

  function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

  function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

  function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

  function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

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

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["VectorTileLayer-js"], {
    /***/
    "F5/N":
    /*!****************************************************************!*\
      !*** ./node_modules/@arcgis/core/layers/support/imageUtils.js ***!
      \****************************************************************/

    /*! exports provided: checkWebPSupport */

    /***/
    function F5N(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "checkWebPSupport", function () {
        return A;
      });
      /*
      All material copyright ESRI, All Rights Reserved, unless otherwise specified.
      See https://js.arcgis.com/4.18/esri/copyright.txt for details.
      */


      function A(A) {
        var o = {
          lossy: "UklGRiIAAABXRUJQVlA4IBYAAAAwAQCdASoBAAEADsD+JaQAA3AAAAAA",
          lossless: "UklGRhoAAABXRUJQVlA4TA0AAAAvAAAAEAcQERGIiP4HAA==",
          alpha: "UklGRkoAAABXRUJQVlA4WAoAAAAQAAAAAAAAAAAAQUxQSAwAAAARBxAR/Q9ERP8DAABWUDggGAAAABQBAJ0BKgEAAQAAAP4AAA3AAP7mtQAAAA==",
          animation: "UklGRlIAAABXRUJQVlA4WAoAAAASAAAAAAAAAAAAQU5JTQYAAAD/////AABBTk1GJgAAAAAAAAAAAAAAAAAAAGQAAABWUDhMDQAAAC8AAAAQBxAREYiI/gcA"
        };
        return new Promise(function (l) {
          var Q = new Image();
          Q.onload = function () {
            Q.onload = Q.onerror = null, l(Q.width > 0 && Q.height > 0);
          }, Q.onerror = function () {
            Q.onload = Q.onerror = null, l(!1);
          }, Q.src = "data:image/webp;base64," + o[A];
        });
      }
      /***/

    },

    /***/
    "FzwJ":
    /*!*************************************************************!*\
      !*** ./node_modules/@arcgis/core/layers/VectorTileLayer.js ***!
      \*************************************************************/

    /*! exports provided: default */

    /***/
    function FzwJ(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony import */


      var _chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ../chunks/tslib.es6.js */
      "pO5D");
      /* harmony import */


      var _core_global_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ../core/global.js */
      "3r0u");
      /* harmony import */


      var _core_has_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ../core/has.js */
      "wSAH");
      /* harmony import */


      var _core_lang_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ../core/lang.js */
      "f/qv");
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


      var _core_accessorSupport_decorators_reader_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! ../core/accessorSupport/decorators/reader.js */
      "r88o");
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


      var _geometry_SpatialReference_js__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(
      /*! ../geometry/SpatialReference.js */
      "WZb1");
      /* harmony import */


      var _geometry_Extent_js__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(
      /*! ../geometry/Extent.js */
      "OvF4");
      /* harmony import */


      var _request_js__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(
      /*! ../request.js */
      "Lqtk");
      /* harmony import */


      var _Layer_js__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(
      /*! ./Layer.js */
      "pqNC");
      /* harmony import */


      var _core_MultiOriginJSONSupport_js__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(
      /*! ../core/MultiOriginJSONSupport.js */
      "5pQd");
      /* harmony import */


      var _mixins_OperationalLayer_js__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(
      /*! ./mixins/OperationalLayer.js */
      "uRH/");
      /* harmony import */


      var _mixins_ArcGISService_js__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(
      /*! ./mixins/ArcGISService.js */
      "PVlI");
      /* harmony import */


      var _mixins_BlendLayer_js__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(
      /*! ./mixins/BlendLayer.js */
      "mXvl");
      /* harmony import */


      var _mixins_PortalLayer_js__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(
      /*! ./mixins/PortalLayer.js */
      "DbUH");
      /* harmony import */


      var _mixins_ScaleRangeLayer_js__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(
      /*! ./mixins/ScaleRangeLayer.js */
      "WmKv");
      /* harmony import */


      var _support_TileInfo_js__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(
      /*! ./support/TileInfo.js */
      "3/ME");
      /* harmony import */


      var _support_TilemapCache_js__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(
      /*! ./support/TilemapCache.js */
      "llFo");
      /* harmony import */


      var _mixins_ArcGISCachedService_js__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(
      /*! ./mixins/ArcGISCachedService.js */
      "tIWS");
      /* harmony import */


      var _support_imageUtils_js__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(
      /*! ./support/imageUtils.js */
      "F5/N");
      /* harmony import */


      var _support_SpriteSource_js__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(
      /*! ./support/SpriteSource.js */
      "i7Gb");
      /* harmony import */


      var _support_vectorTileLayerLoader_js__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(
      /*! ./support/vectorTileLayerLoader.js */
      "tR3v");
      /* harmony import */


      var _portal_support_jsonContext_js__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(
      /*! ../portal/support/jsonContext.js */
      "Fewv");
      /* harmony import */


      var _views_2d_engine_vectorTiles_SchemaHelper_js__WEBPACK_IMPORTED_MODULE_32__ = __webpack_require__(
      /*! ../views/2d/engine/vectorTiles/SchemaHelper.js */
      "HLQf");
      /* harmony import */


      var _views_2d_engine_vectorTiles_tileInfoUtils_js__WEBPACK_IMPORTED_MODULE_33__ = __webpack_require__(
      /*! ../views/2d/engine/vectorTiles/tileInfoUtils.js */
      "HZhB");
      /* harmony import */


      var _views_2d_engine_vectorTiles_style_StyleRepository_js__WEBPACK_IMPORTED_MODULE_34__ = __webpack_require__(
      /*! ../views/2d/engine/vectorTiles/style/StyleRepository.js */
      "kB7V");
      /* harmony import */


      var _views_webgl_capabilities_js__WEBPACK_IMPORTED_MODULE_35__ = __webpack_require__(
      /*! ../views/webgl/capabilities.js */
      "sq/B");
      /*
      All material copyright ESRI, All Rights Reserved, unless otherwise specified.
      See https://js.arcgis.com/4.18/esri/copyright.txt for details.
      */


      var A = /*#__PURE__*/function (_Object) {
        _inherits(A, _Object);

        var _super = _createSuper(A);

        function A() {
          var _this;

          _classCallCheck(this, A);

          for (var _len = arguments.length, e = new Array(_len), _key = 0; _key < _len; _key++) {
            e[_key] = arguments[_key];
          }

          _this = _super.call.apply(_super, [this].concat(e)), _this._spriteSourceMap = new Map(), _this.currentStyleInfo = null, _this.style = null, _this.isReference = null, _this.operationalLayerType = "VectorTileLayer", _this.type = "vector-tile", _this.url = null;
          return _this;
        }

        _createClass(A, [{
          key: "normalizeCtorArgs",
          value: function normalizeCtorArgs(e, t) {
            return "string" == typeof e ? _objectSpread({
              url: e
            }, t) : e;
          }
        }, {
          key: "destroy",
          value: function destroy() {
            this._spriteSourceMap.clear();
          }
        }, {
          key: "prefetchResources",
          value: function () {
            var _prefetchResources = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(e) {
              return regeneratorRuntime.wrap(function _callee$(_context) {
                while (1) {
                  switch (_context.prev = _context.next) {
                    case 0:
                      _context.next = 2;
                      return this.loadSpriteSource(_core_global_js__WEBPACK_IMPORTED_MODULE_1__["default"].devicePixelRatio || 1, e);

                    case 2:
                    case "end":
                      return _context.stop();
                  }
                }
              }, _callee, this);
            }));

            function prefetchResources(_x) {
              return _prefetchResources.apply(this, arguments);
            }

            return prefetchResources;
          }()
        }, {
          key: "load",
          value: function load(e) {
            var _this2 = this;

            var t = this.loadFromPortal({
              supportedTypes: ["Vector Tile Service"],
              supportsData: !1
            }, e).then( /*#__PURE__*/_asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee2() {
              var t;
              return regeneratorRuntime.wrap(function _callee2$(_context2) {
                while (1) {
                  switch (_context2.prev = _context2.next) {
                    case 0:
                      if (!(!_this2.portalItem || !_this2.portalItem.id)) {
                        _context2.next = 2;
                        break;
                      }

                      return _context2.abrupt("return");

                    case 2:
                      t = "".concat(_this2.portalItem.itemUrl, "/resources/styles/root.json");
                      _context2.next = 5;
                      return Object(_request_js__WEBPACK_IMPORTED_MODULE_17__["default"])(t, _objectSpread(_objectSpread({}, e), {}, {
                        query: {
                          f: "json"
                        }
                      }));

                    case 5:
                      _context2.t0 = _context2.sent.data;

                      if (!_context2.t0) {
                        _context2.next = 8;
                        break;
                      }

                      _this2.read({
                        url: t
                      }, Object(_portal_support_jsonContext_js__WEBPACK_IMPORTED_MODULE_31__["createForItem"])(_this2.portalItem));

                    case 8:
                    case "end":
                      return _context2.stop();
                  }
                }
              }, _callee2);
            }))).then(function () {
              return _this2._loadStyle(e);
            }, function () {
              return _this2._loadStyle(e);
            });
            return this.addResolvingPromise(t), Object(_core_promiseUtils_js__WEBPACK_IMPORTED_MODULE_14__["resolve"])(this);
          }
        }, {
          key: "attributionDataUrl",
          get: function get() {
            var e = this.currentStyleInfo,
                t = e && e.serviceUrl && Object(_core_urlUtils_js__WEBPACK_IMPORTED_MODULE_11__["urlToObject"])(e.serviceUrl);
            return t ? this._getDefaultAttribution(t.path) : null;
          }
        }, {
          key: "capabilities",
          get: function get() {
            var e = this._getPrimarySource();

            return e ? e.capabilities : {
              operations: {
                supportsExportTiles: !1,
                supportsTileMap: !1
              },
              exportTiles: null
            };
          }
        }, {
          key: "fullExtent",
          get: function get() {
            var e = this._getPrimarySource();

            return e ? e.fullExtent : null;
          }
        }, {
          key: "parsedUrl",
          get: function get() {
            return this.serviceUrl ? Object(_core_urlUtils_js__WEBPACK_IMPORTED_MODULE_11__["urlToObject"])(this.serviceUrl) : null;
          }
        }, {
          key: "serviceUrl",
          get: function get() {
            return this.currentStyleInfo && this.currentStyleInfo.serviceUrl || null;
          }
        }, {
          key: "spatialReference",
          get: function get() {
            return this.tileInfo && this.tileInfo.spatialReference || null;
          }
        }, {
          key: "styleUrl",
          get: function get() {
            return this.currentStyleInfo && this.currentStyleInfo.styleUrl || null;
          }
        }, {
          key: "writeStyleUrl",
          value: function writeStyleUrl(e, t) {
            e && Object(_core_urlUtils_js__WEBPACK_IMPORTED_MODULE_11__["isProtocolRelative"])(e) && (e = "https:".concat(e)), t.styleUrl = e;
          }
        }, {
          key: "tileIndexType",
          get: function get() {
            var e = this._getPrimarySource();

            return e ? e.type : "";
          }
        }, {
          key: "tileIndexUrl",
          get: function get() {
            var e = this._getPrimarySource();

            return e ? e.tileMapURL : "";
          }
        }, {
          key: "tileInfo",
          get: function get() {
            var e;
            var t = [];

            for (var _e in this.sourceNameToSource) {
              t.push(this.sourceNameToSource[_e]);
            }

            var r = (null == (e = this._getPrimarySource()) ? void 0 : e.tileInfo) || new _support_TileInfo_js__WEBPACK_IMPORTED_MODULE_25__["default"]();
            if (t.length > 1) for (var _e2 = 0; _e2 < t.length; _e2++) {
              Object(_views_2d_engine_vectorTiles_tileInfoUtils_js__WEBPACK_IMPORTED_MODULE_33__["areSchemasOverlapping"])(r, t[_e2].tileInfo) && (r = Object(_views_2d_engine_vectorTiles_tileInfoUtils_js__WEBPACK_IMPORTED_MODULE_33__["unionTileInfos"])(r, t[_e2].tileInfo));
            }
            return r;
          }
        }, {
          key: "tilemapCache",
          get: function get() {
            var e = this._getPrimarySource();

            return e && e.capabilities.operations.supportsTileMap ? e.tilemapCache : null;
          }
        }, {
          key: "tileServers",
          get: function get() {
            var e = this._getPrimarySource();

            return e ? e.tileServers : [];
          }
        }, {
          key: "readVersion",
          value: function readVersion(e, t) {
            return t.version ? parseFloat(t.version) : parseFloat(t.currentVersion);
          }
        }, {
          key: "compatibleTileInfo256",
          get: function get() {
            return _views_2d_engine_vectorTiles_SchemaHelper_js__WEBPACK_IMPORTED_MODULE_32__["default"].create256x256CompatibleTileInfo(this.tileInfo);
          }
        }, {
          key: "compatibleTileInfo512",
          get: function get() {
            return _views_2d_engine_vectorTiles_SchemaHelper_js__WEBPACK_IMPORTED_MODULE_32__["default"].create512x512CompatibleTileInfo(this.tileInfo);
          }
        }, {
          key: "loadSpriteSource",
          value: function () {
            var _loadSpriteSource = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee3() {
              var e,
                  t,
                  r,
                  o,
                  _args3 = arguments;
              return regeneratorRuntime.wrap(function _callee3$(_context3) {
                while (1) {
                  switch (_context3.prev = _context3.next) {
                    case 0:
                      e = _args3.length > 0 && _args3[0] !== undefined ? _args3[0] : 1;
                      t = _args3.length > 1 ? _args3[1] : undefined;

                      if (this._spriteSourceMap.has(e)) {
                        _context3.next = 7;
                        break;
                      }

                      r = Object(_views_webgl_capabilities_js__WEBPACK_IMPORTED_MODULE_35__["default"])(), o = new _support_SpriteSource_js__WEBPACK_IMPORTED_MODULE_29__["default"](this.styleRepository.sprite, e, r.maxTextureSize, this.currentStyleInfo.spriteFormat);
                      _context3.next = 6;
                      return o.load(t);

                    case 6:
                      this._spriteSourceMap.set(e, o);

                    case 7:
                      return _context3.abrupt("return", Object(_core_promiseUtils_js__WEBPACK_IMPORTED_MODULE_14__["resolve"])(this._spriteSourceMap.get(e)));

                    case 8:
                    case "end":
                      return _context3.stop();
                  }
                }
              }, _callee3, this);
            }));

            function loadSpriteSource() {
              return _loadSpriteSource.apply(this, arguments);
            }

            return loadSpriteSource;
          }()
        }, {
          key: "loadStyle",
          value: function () {
            var _loadStyle2 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee4(e, t) {
              var _this3 = this;

              var r, o, i;
              return regeneratorRuntime.wrap(function _callee4$(_context4) {
                while (1) {
                  switch (_context4.prev = _context4.next) {
                    case 0:
                      r = e || this.style || this.url;

                      if (!(this._loadingPromise && "string" == typeof r && this.url === r && !Object(_core_promiseUtils_js__WEBPACK_IMPORTED_MODULE_14__["isAborted"])(this._abortController))) {
                        _context4.next = 3;
                        break;
                      }

                      return _context4.abrupt("return", this._loadingPromise);

                    case 3:
                      o = this._abortController;
                      o && o.abort();
                      i = Object(_core_promiseUtils_js__WEBPACK_IMPORTED_MODULE_14__["createAbortController"])();
                      return _context4.abrupt("return", (this._loadingPromise = Object(_core_promiseUtils_js__WEBPACK_IMPORTED_MODULE_14__["create"])(function (e, o) {
                        var s = {
                          signal: i.signal
                        };
                        _this3._spriteSourceMap.clear(), _this3._getSourceAndStyle(r, s).then(e, o), Object(_core_promiseUtils_js__WEBPACK_IMPORTED_MODULE_14__["onAbort"])(t, function () {
                          i.abort();
                        });
                      }), this._abortController = i, this._loadingPromise));

                    case 7:
                    case "end":
                      return _context4.stop();
                  }
                }
              }, _callee4, this);
            }));

            function loadStyle(_x2, _x3) {
              return _loadStyle2.apply(this, arguments);
            }

            return loadStyle;
          }()
        }, {
          key: "getStyleLayerId",
          value: function getStyleLayerId(e) {
            return this.styleRepository.getStyleLayerId(e);
          }
        }, {
          key: "getStyleLayerIndex",
          value: function getStyleLayerIndex(e) {
            return this.styleRepository.getStyleLayerIndex(e);
          }
        }, {
          key: "getPaintProperties",
          value: function getPaintProperties(e) {
            return Object(_core_lang_js__WEBPACK_IMPORTED_MODULE_3__["clone"])(this.styleRepository.getPaintProperties(e));
          }
        }, {
          key: "setPaintProperties",
          value: function setPaintProperties(e, t) {
            var r = this.styleRepository.isPainterDataDriven(e);
            this.styleRepository.setPaintProperties(e, t);
            var o = this.styleRepository.isPainterDataDriven(e);
            this.emit("paint-change", {
              layerName: e,
              paint: t,
              isDataDriven: r || o
            });
          }
        }, {
          key: "getStyleLayer",
          value: function getStyleLayer(e) {
            return Object(_core_lang_js__WEBPACK_IMPORTED_MODULE_3__["clone"])(this.styleRepository.getStyleLayer(e));
          }
        }, {
          key: "setStyleLayer",
          value: function setStyleLayer(e, t) {
            this.styleRepository.setStyleLayer(e, t), this.emit("style-layer-change", {
              layer: e,
              index: t
            });
          }
        }, {
          key: "deleteStyleLayer",
          value: function deleteStyleLayer(e) {
            this.styleRepository.deleteStyleLayer(e), this.emit("delete-style-layer", {
              layerName: e
            });
          }
        }, {
          key: "getLayoutProperties",
          value: function getLayoutProperties(e) {
            return Object(_core_lang_js__WEBPACK_IMPORTED_MODULE_3__["clone"])(this.styleRepository.getLayoutProperties(e));
          }
        }, {
          key: "setLayoutProperties",
          value: function setLayoutProperties(e, t) {
            this.styleRepository.setLayoutProperties(e, t), this.emit("layout-change", {
              layer: e,
              layout: t
            });
          }
        }, {
          key: "setStyleLayerVisibility",
          value: function setStyleLayerVisibility(e, t) {
            this.styleRepository.setStyleLayerVisibility(e, t), this.emit("style-layer-visibility-change", {
              layer: e,
              visibility: t
            });
          }
        }, {
          key: "getStyleLayerVisibility",
          value: function getStyleLayerVisibility(e) {
            return this.styleRepository.getStyleLayerVisibility(e);
          }
        }, {
          key: "getTileUrl",
          value: function getTileUrl(e, t, r) {
            var o = this.tileServers[t % this.tileServers.length];
            return o = o.replace(/\{z\}/gi, e.toString()).replace(/\{y\}/gi, t.toString()).replace(/\{x\}/gi, r.toString()), o;
          }
        }, {
          key: "write",
          value: function write(e, t) {
            return t && t.origin && !this.styleUrl ? (t.messages && t.messages.push(new _core_Error_js__WEBPACK_IMPORTED_MODULE_10__["default"]("vectortilelayer:unsupported", "VectorTileLayer (".concat(this.title, ", ").concat(this.id, ") with style defined by JSON only are not supported"), {
              layer: this
            })), null) : _get(_getPrototypeOf(A.prototype), "write", this).call(this, e, t);
          }
        }, {
          key: "_getSourceAndStyle",
          value: function () {
            var _getSourceAndStyle2 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee5(e, t) {
              var r;
              return regeneratorRuntime.wrap(function _callee5$(_context5) {
                while (1) {
                  switch (_context5.prev = _context5.next) {
                    case 0:
                      if (e) {
                        _context5.next = 2;
                        break;
                      }

                      throw new Error("invalid style!");

                    case 2:
                      _context5.next = 4;
                      return Object(_support_vectorTileLayerLoader_js__WEBPACK_IMPORTED_MODULE_30__["loadMetadata"])(e, t);

                    case 4:
                      r = _context5.sent;

                      if (!("webp" === r.spriteFormat)) {
                        _context5.next = 11;
                        break;
                      }

                      _context5.next = 8;
                      return Object(_support_imageUtils_js__WEBPACK_IMPORTED_MODULE_28__["checkWebPSupport"])("lossy");

                    case 8:
                      _context5.t0 = _context5.sent;

                      if (_context5.t0) {
                        _context5.next = 11;
                        break;
                      }

                      r.spriteFormat = "png";

                    case 11:
                      this._set("currentStyleInfo", _objectSpread({}, r)), "string" == typeof e ? (this.url = e, this.style = null) : (this.url = null, this.style = e), this._set("sourceNameToSource", r.sourceNameToSource), this._set("primarySourceName", r.primarySourceName), this._set("styleRepository", new _views_2d_engine_vectorTiles_style_StyleRepository_js__WEBPACK_IMPORTED_MODULE_34__["default"](r.style, r)), this.read(r.layerDefinition, {
                        origin: "service"
                      }), this.emit("load-style", {});

                    case 12:
                    case "end":
                      return _context5.stop();
                  }
                }
              }, _callee5, this);
            }));

            function _getSourceAndStyle(_x4, _x5) {
              return _getSourceAndStyle2.apply(this, arguments);
            }

            return _getSourceAndStyle;
          }()
        }, {
          key: "_getDefaultAttribution",
          value: function _getDefaultAttribution(e) {
            var t = e.match(/^https?:\/\/(?:basemaps|basemapsbeta|basemapsdev)(?:-api)?\.arcgis\.com(\/[^\/]+)?\/arcgis\/rest\/services\/([^\/]+(\/[^\/]+)*)\/vectortileserver/i),
                r = ["OpenStreetMap_v2", "OpenStreetMap_Daylight_v2", "OpenStreetMap_Export_v2", "OpenStreetMap_FTS_v2", "OpenStreetMap_GCS_v2", "World_Basemap", "World_Basemap_v2", "World_Basemap_Export_v2", "World_Basemap_GCS_v2", "World_Basemap_WGS84", "World_Contours_v2"];
            if (!t) return;
            var o = t[2] && t[2].toLowerCase();
            if (!o) return;
            var i = t[1] || "";

            for (var _i = 0, _r = r; _i < _r.length; _i++) {
              var _e3 = _r[_i];
              if (_e3.toLowerCase().indexOf(o) > -1) return Object(_core_urlUtils_js__WEBPACK_IMPORTED_MODULE_11__["normalize"])("//static.arcgis.com/attribution/Vector".concat(i, "/").concat(_e3));
            }
          }
        }, {
          key: "_getPrimarySource",
          value: function _getPrimarySource() {
            return this.sourceNameToSource && this.primarySourceName in this.sourceNameToSource ? this.sourceNameToSource[this.primarySourceName] : null;
          }
        }, {
          key: "_loadStyle",
          value: function () {
            var _loadStyle3 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee6(e) {
              return regeneratorRuntime.wrap(function _callee6$(_context6) {
                while (1) {
                  switch (_context6.prev = _context6.next) {
                    case 0:
                      return _context6.abrupt("return", this._loadingPromise ? this._loadingPromise : this.loadStyle(null, e));

                    case 1:
                    case "end":
                      return _context6.stop();
                  }
                }
              }, _callee6, this);
            }));

            function _loadStyle(_x6) {
              return _loadStyle3.apply(this, arguments);
            }

            return _loadStyle;
          }()
        }]);

        return A;
      }(Object(_mixins_BlendLayer_js__WEBPACK_IMPORTED_MODULE_22__["BlendLayer"])(Object(_mixins_ScaleRangeLayer_js__WEBPACK_IMPORTED_MODULE_24__["ScaleRangeLayer"])(Object(_mixins_ArcGISCachedService_js__WEBPACK_IMPORTED_MODULE_27__["ArcGISCachedService"])(Object(_mixins_ArcGISService_js__WEBPACK_IMPORTED_MODULE_21__["ArcGISService"])(Object(_mixins_OperationalLayer_js__WEBPACK_IMPORTED_MODULE_20__["OperationalLayer"])(Object(_mixins_PortalLayer_js__WEBPACK_IMPORTED_MODULE_23__["PortalLayer"])(Object(_core_MultiOriginJSONSupport_js__WEBPACK_IMPORTED_MODULE_19__["MultiOriginJSONMixin"])(_Layer_js__WEBPACK_IMPORTED_MODULE_18__["default"]))))))));

      Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_6__["property"])({
        readOnly: !0,
        dependsOn: ["currentStyleInfo"]
      })], A.prototype, "attributionDataUrl", null), Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_6__["property"])({
        type: ["show", "hide"]
      })], A.prototype, "listMode", void 0), Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_6__["property"])({
        readOnly: !0,
        dependsOn: ["sourceNameToSource", "primarySourceName"],
        autoTracked: !1,
        json: {
          read: !1
        }
      })], A.prototype, "capabilities", null), Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_6__["property"])({
        readOnly: !0
      })], A.prototype, "currentStyleInfo", void 0), Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_6__["property"])({
        json: {
          read: !1
        },
        readOnly: !0,
        type: _geometry_Extent_js__WEBPACK_IMPORTED_MODULE_16__["default"],
        dependsOn: ["sourceNameToSource", "primarySourceName"]
      })], A.prototype, "fullExtent", null), Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_6__["property"])()], A.prototype, "style", void 0), Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_6__["property"])({
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
      })], A.prototype, "isReference", void 0), Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_6__["property"])({
        type: ["VectorTileLayer"]
      })], A.prototype, "operationalLayerType", void 0), Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_6__["property"])({
        readOnly: !0,
        dependsOn: ["serviceUrl"]
      })], A.prototype, "parsedUrl", null), Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_6__["property"])({
        readOnly: !0,
        dependsOn: ["currentStyleInfo"]
      })], A.prototype, "serviceUrl", null), Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_6__["property"])({
        type: _geometry_SpatialReference_js__WEBPACK_IMPORTED_MODULE_15__["default"],
        dependsOn: ["tileInfo"],
        readOnly: !0
      })], A.prototype, "spatialReference", null), Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_6__["property"])({
        readOnly: !0
      })], A.prototype, "styleRepository", void 0), Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_6__["property"])({
        readOnly: !0
      })], A.prototype, "sourceNameToSource", void 0), Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_6__["property"])({
        readOnly: !0
      })], A.prototype, "primarySourceName", void 0), Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_6__["property"])({
        type: String,
        readOnly: !0,
        dependsOn: ["currentStyleInfo"],
        json: {
          write: {
            ignoreOrigin: !0
          },
          origins: {
            "web-document": {
              write: {
                ignoreOrigin: !0,
                isRequired: !0
              }
            }
          }
        }
      })], A.prototype, "styleUrl", null), Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_writer_js__WEBPACK_IMPORTED_MODULE_9__["writer"])(["portal-item", "web-document"], "styleUrl")], A.prototype, "writeStyleUrl", null), Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_6__["property"])({
        json: {
          read: !1
        },
        readOnly: !0,
        dependsOn: ["sourceNameToSource", "primarySourceName"]
      })], A.prototype, "tileIndexType", null), Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_6__["property"])({
        json: {
          read: !1
        },
        readOnly: !0,
        dependsOn: ["sourceNameToSource", "primarySourceName"]
      })], A.prototype, "tileIndexUrl", null), Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_6__["property"])({
        json: {
          read: !1,
          origins: {
            service: {
              read: !1
            }
          }
        },
        readOnly: !0,
        type: _support_TileInfo_js__WEBPACK_IMPORTED_MODULE_25__["default"],
        dependsOn: ["sourceNameToSource", "primarySourceName"]
      })], A.prototype, "tileInfo", null), Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_6__["property"])({
        json: {
          read: !1
        },
        readOnly: !0,
        type: _support_TilemapCache_js__WEBPACK_IMPORTED_MODULE_26__["TilemapCache"],
        dependsOn: ["sourceNameToSource", "primarySourceName"]
      })], A.prototype, "tilemapCache", null), Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_6__["property"])({
        json: {
          read: !1
        },
        readOnly: !0,
        dependsOn: ["sourceNameToSource", "primarySourceName"]
      })], A.prototype, "tileServers", null), Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_6__["property"])({
        json: {
          read: !1
        },
        readOnly: !0,
        value: "vector-tile"
      })], A.prototype, "type", void 0), Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_6__["property"])({
        json: {
          origins: {
            "web-document": {
              read: {
                source: "styleUrl"
              }
            },
            "portal-item": {
              read: {
                source: "url"
              }
            }
          },
          write: !1,
          read: !1
        }
      })], A.prototype, "url", void 0), Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_6__["property"])({
        readOnly: !0
      })], A.prototype, "version", void 0), Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_reader_js__WEBPACK_IMPORTED_MODULE_7__["reader"])("version", ["version", "currentVersion"])], A.prototype, "readVersion", null), Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_6__["property"])({
        readOnly: !0,
        dependsOn: ["tileInfo"]
      })], A.prototype, "compatibleTileInfo256", null), Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_6__["property"])({
        readOnly: !0,
        dependsOn: ["tileInfo"]
      })], A.prototype, "compatibleTileInfo512", null), A = Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_subclass_js__WEBPACK_IMPORTED_MODULE_8__["subclass"])("esri.layers.VectorTileLayer")], A);
      var B = A;
      /* harmony default export */

      __webpack_exports__["default"] = B;
      /***/
    },

    /***/
    "HLQf":
    /*!*******************************************************************************!*\
      !*** ./node_modules/@arcgis/core/views/2d/engine/vectorTiles/SchemaHelper.js ***!
      \*******************************************************************************/

    /*! exports provided: default */

    /***/
    function HLQf(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony import */


      var _layers_support_LOD_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ../../../../layers/support/LOD.js */
      "UOZ4");
      /* harmony import */


      var _layers_support_TileInfo_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ../../../../layers/support/TileInfo.js */
      "3/ME");
      /*
      All material copyright ESRI, All Rights Reserved, unless otherwise specified.
      See https://js.arcgis.com/4.18/esri/copyright.txt for details.
      */

      /* harmony default export */


      __webpack_exports__["default"] = /*#__PURE__*/function () {
        function _class(e, i) {
          _classCallCheck(this, _class);

          this.lockedSchemaPixelSize = e, this.isGCS = i;
        }

        _createClass(_class, [{
          key: "getLevelRowColumn",
          value: function getLevelRowColumn(e) {
            return this.isGCS ? [e[0], e[1] >> 1, e[2] >> 1] : 256 === this.lockedSchemaPixelSize && e[0] > 0 ? [e[0] - 1, e[1] >> 1, e[2] >> 1] : e;
          }
        }, {
          key: "adjustLevel",
          value: function adjustLevel(e) {
            return this.isGCS ? e : 256 === this.lockedSchemaPixelSize ? e > 0 ? e - 1 : 0 : e;
          }
        }, {
          key: "getShift",
          value: function getShift(e, i) {
            var t = 0,
                s = 0;
            return (256 === this.lockedSchemaPixelSize || this.isGCS) && (e[2] % 2 && (t = i), e[1] % 2 && (s = i)), [t, s];
          }
        }, {
          key: "getScale",
          value: function getScale(e) {
            if (this.isGCS) {
              if (512 === this.lockedSchemaPixelSize) return 4;
            } else if (256 === this.lockedSchemaPixelSize && 0 === e) return 1;

            return 2;
          }
        }], [{
          key: "create256x256CompatibleTileInfo",
          value: function create256x256CompatibleTileInfo(t) {
            if (!t) return null;
            if (256 === t.size[0] && 256 === t.size[1]) return t;
            var s = t.spatialReference.isGeographic,
                l = [],
                r = t.lods.length;

            for (var i = 0; i < r; i++) {
              var _r2 = t.lods[i],
                  o = s ? _r2.resolution : 2 * _r2.resolution;
              l.push(new _layers_support_LOD_js__WEBPACK_IMPORTED_MODULE_0__["default"]({
                level: _r2.level,
                scale: _r2.scale,
                resolution: o
              }));
            }

            return new _layers_support_TileInfo_js__WEBPACK_IMPORTED_MODULE_1__["default"]({
              size: [256, 256],
              dpi: t.dpi,
              format: t.format,
              compressionQuality: t.compressionQuality,
              origin: t.origin,
              spatialReference: t.spatialReference,
              lods: l
            });
          }
        }, {
          key: "create512x512CompatibleTileInfo",
          value: function create512x512CompatibleTileInfo(t) {
            if (!t) return null;
            if (256 === t.size[0] || 256 === t.size[1]) return null;
            var s = [],
                l = t.lods.length;

            for (var i = 0; i < l; i++) {
              var _l = t.lods[i],
                  r = .5 * _l.resolution;
              s.push(new _layers_support_LOD_js__WEBPACK_IMPORTED_MODULE_0__["default"]({
                level: _l.level,
                scale: _l.scale,
                resolution: r
              }));
            }

            return new _layers_support_TileInfo_js__WEBPACK_IMPORTED_MODULE_1__["default"]({
              size: [512, 512],
              dpi: t.dpi,
              format: t.format,
              compressionQuality: t.compressionQuality,
              origin: t.origin,
              spatialReference: t.spatialReference,
              lods: s
            });
          }
        }]);

        return _class;
      }();
      /***/

    },

    /***/
    "HZhB":
    /*!********************************************************************************!*\
      !*** ./node_modules/@arcgis/core/views/2d/engine/vectorTiles/tileInfoUtils.js ***!
      \********************************************************************************/

    /*! exports provided: areSchemasOverlapping, unionTileInfos */

    /***/
    function HZhB(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "areSchemasOverlapping", function () {
        return l;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "unionTileInfos", function () {
        return s;
      });
      /* harmony import */


      var _layers_support_TileInfo_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ../../../../layers/support/TileInfo.js */
      "3/ME");
      /*
      All material copyright ESRI, All Rights Reserved, unless otherwise specified.
      See https://js.arcgis.com/4.18/esri/copyright.txt for details.
      */


      function l(e, l) {
        if (e === l) return !0;
        if (!e && null != l) return !1;
        if (null != e && !l) return !1;
        if (!e.spatialReference.equals(l.spatialReference) || e.dpi !== l.dpi) return !1;
        var s = e.origin,
            o = l.origin;
        if (Math.abs(s.x - o.x) >= 1e-6 || Math.abs(s.y - o.y) >= 1e-6) return !1;
        var r, n;
        e.lods[0].scale > l.lods[0].scale ? (r = e, n = l) : (n = e, r = l);

        for (var _e4 = r.lods[0].scale; _e4 >= n.lods[n.lods.length - 1].scale - 1e-6; _e4 /= 2) {
          if (Math.abs(_e4 - n.lods[0].scale) < 1e-6) return !0;
        }

        return !1;
      }

      function s(l, s) {
        if (l === s) return l;
        if (!l && null != s) return s;
        if (null != l && !s) return l;
        var o = l.size[0],
            r = l.format,
            n = l.dpi,
            t = {
          x: l.origin.x,
          y: l.origin.y
        },
            i = l.spatialReference.toJSON(),
            a = l.lods[0].scale > s.lods[0].scale ? l.lods[0] : s.lods[0],
            d = l.lods[l.lods.length - 1].scale <= s.lods[s.lods.length - 1].scale ? l.lods[l.lods.length - 1] : s.lods[s.lods.length - 1],
            f = a.scale,
            u = a.resolution,
            c = d.scale,
            p = [];
        var g = f,
            h = u,
            x = 0;

        for (; g > c;) {
          p.push({
            level: x,
            resolution: h,
            scale: g
          }), x++, g /= 2, h /= 2;
        }

        return new _layers_support_TileInfo_js__WEBPACK_IMPORTED_MODULE_0__["default"]({
          size: [o, o],
          dpi: n,
          format: r || "pbf",
          origin: t,
          lods: p,
          spatialReference: i
        });
      }
      /***/

    },

    /***/
    "JNis":
    /*!*****************************************************************************************!*\
      !*** ./node_modules/@arcgis/core/views/2d/engine/vectorTiles/style/VectorTileSource.js ***!
      \*****************************************************************************************/

    /*! exports provided: default */

    /***/
    function JNis(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony import */


      var _core_lang_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ../../../../../core/lang.js */
      "f/qv");
      /* harmony import */


      var _core_urlUtils_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ../../../../../core/urlUtils.js */
      "4EHJ");
      /* harmony import */


      var _core_promiseUtils_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ../../../../../core/promiseUtils.js */
      "9MzC");
      /* harmony import */


      var _geometry_Extent_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ../../../../../geometry/Extent.js */
      "OvF4");
      /* harmony import */


      var _layers_support_serviceTileInfoProperty_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ../../../../../layers/support/serviceTileInfoProperty.js */
      "q2iW");
      /* harmony import */


      var _layers_support_TilemapCache_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ../../../../../layers/support/TilemapCache.js */
      "llFo");
      /* harmony import */


      var _TileIndex_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ../TileIndex.js */
      "JYLa");
      /*
      All material copyright ESRI, All Rights Reserved, unless otherwise specified.
      See https://js.arcgis.com/4.18/esri/copyright.txt for details.
      */

      /* harmony default export */


      __webpack_exports__["default"] = /*#__PURE__*/function () {
        function _class2(s, h, u) {
          _classCallCheck(this, _class2);

          this.tileMapURL = "", this.tilemapCache = null, this.parsedUrl = null, this.tileInfo = null, this.capabilities = null, this.tileIndex = null, this.fullExtent = null, this.name = s, this.sourceUrl = h, h && (this.parsedUrl = Object(_core_urlUtils_js__WEBPACK_IMPORTED_MODULE_1__["urlToObject"])(this.sourceUrl));
          var c = this.parsedUrl.path,
              m = this.parsedUrl.query ? "?" + Object(_core_urlUtils_js__WEBPACK_IMPORTED_MODULE_1__["objectToQuery"])(this.parsedUrl.query) : "",
              f = Object(_core_lang_js__WEBPACK_IMPORTED_MODULE_0__["clone"])(u),
              d = f.tiles;
          h && d.forEach(function (e, t) {
            Object(_core_urlUtils_js__WEBPACK_IMPORTED_MODULE_1__["isAbsolute"])(e) || (d[t] = Object(_core_urlUtils_js__WEBPACK_IMPORTED_MODULE_1__["join"])(c, e) + m);
          }), this.tileServers = d, u.tileMap && (this.tileMapURL = Object(_core_urlUtils_js__WEBPACK_IMPORTED_MODULE_1__["join"])(h, u.tileMap));
          var x = u.capabilities && u.capabilities.split(",").map(function (e) {
            return e.toLowerCase().trim();
          }),
              g = !!u.exportTilesAllowed,
              y = !!x && -1 !== x.indexOf("tilemap"),
              M = g && u.hasOwnProperty("maxExportTilesCount") ? u.maxExportTilesCount : 0;
          this.capabilities = {
            operations: {
              supportsExportTiles: g,
              supportsTileMap: y
            },
            exportTiles: g ? {
              maxExportTilesCount: +M
            } : null
          }, this.tileInfo = Object(_layers_support_serviceTileInfoProperty_js__WEBPACK_IMPORTED_MODULE_4__["readServiceTileInfo"])(f.tileInfo, f, null, {
            ignoreMinMaxLOD: !0
          }), y && (this.type = "vector-tile", this.tilemapCache = new _layers_support_TilemapCache_js__WEBPACK_IMPORTED_MODULE_5__["TilemapCache"]({
            layer: this
          }), this.tilemapCache && (this.tileIndex = new _TileIndex_js__WEBPACK_IMPORTED_MODULE_6__["default"](this.tilemapCache))), this.fullExtent = _geometry_Extent_js__WEBPACK_IMPORTED_MODULE_3__["default"].fromJSON(u.fullExtent);
        }

        _createClass(_class2, [{
          key: "getRefKey",
          value: function getRefKey(e, t) {
            return this.tileIndex ? this.tileIndex.dataKey(e, t) : Object(_core_promiseUtils_js__WEBPACK_IMPORTED_MODULE_2__["resolve"])(e);
          }
        }, {
          key: "getSourceTileUrl",
          value: function getSourceTileUrl(e, t, i) {
            var l = this.tileServers[t % this.tileServers.length];
            return l = l.replace(/\{z\}/gi, e.toString()).replace(/\{y\}/gi, t.toString()).replace(/\{x\}/gi, i.toString()), l;
          }
        }, {
          key: "isCompatibleWith",
          value: function isCompatibleWith(e) {
            var t = this.tileInfo,
                i = e.tileInfo;
            if (!t.spatialReference.equals(i.spatialReference)) return !1;
            if (!t.origin.equals(i.origin)) return !1;
            if (Math.round(t.dpi) !== Math.round(i.dpi)) return !1;
            var l = t.lods,
                r = i.lods,
                s = Math.min(l.length, r.length);

            for (var _e5 = 0; _e5 < s; _e5++) {
              var _t = l[_e5],
                  _i2 = r[_e5];
              if (_t.level !== _i2.level || Math.round(_t.scale) !== Math.round(_i2.scale)) return !1;
            }

            return !0;
          }
        }]);

        return _class2;
      }();
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

          var _super2 = _createSuper(c);

          function c() {
            _classCallCheck(this, c);

            return _super2.apply(this, arguments);
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
    "WmKv":
    /*!********************************************************************!*\
      !*** ./node_modules/@arcgis/core/layers/mixins/ScaleRangeLayer.js ***!
      \********************************************************************/

    /*! exports provided: ScaleRangeLayer */

    /***/
    function WmKv(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ScaleRangeLayer", function () {
        return s;
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


      var s = function s(_s2) {
        var t = /*#__PURE__*/function (_s) {
          _inherits(t, _s);

          var _super3 = _createSuper(t);

          function t() {
            var _this4;

            _classCallCheck(this, t);

            _this4 = _super3.apply(this, arguments), _this4.minScale = 0, _this4.maxScale = 0;
            return _this4;
          }

          _createClass(t, [{
            key: "scaleRangeId",
            get: function get() {
              return "".concat(this.minScale, ",").concat(this.maxScale);
            }
          }]);

          return t;
        }(_s2);

        return Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_4__["property"])({
          type: Number,
          nonNullable: !0,
          json: {
            write: !0
          }
        })], t.prototype, "minScale", void 0), Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_4__["property"])({
          type: Number,
          nonNullable: !0,
          json: {
            write: !0
          }
        })], t.prototype, "maxScale", void 0), Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_4__["property"])({
          readOnly: !0,
          dependsOn: ["minScale", "maxScale"]
        })], t.prototype, "scaleRangeId", null), t = Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_subclass_js__WEBPACK_IMPORTED_MODULE_5__["subclass"])("esri.layers.mixins.ScaleRangeLayer")], t), t;
      };
      /***/

    },

    /***/
    "i7Gb":
    /*!******************************************************************!*\
      !*** ./node_modules/@arcgis/core/layers/support/SpriteSource.js ***!
      \******************************************************************/

    /*! exports provided: default */

    /***/
    function i7Gb(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony import */


      var _core_Logger_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ../../core/Logger.js */
      "6S2I");
      /* harmony import */


      var _core_Error_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ../../core/Error.js */
      "zlDU");
      /* harmony import */


      var _core_urlUtils_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ../../core/urlUtils.js */
      "4EHJ");
      /* harmony import */


      var _core_promiseUtils_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ../../core/promiseUtils.js */
      "9MzC");
      /* harmony import */


      var _request_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ../../request.js */
      "Lqtk");
      /*
      All material copyright ESRI, All Rights Reserved, unless otherwise specified.
      See https://js.arcgis.com/4.18/esri/copyright.txt for details.
      */


      var o = _core_Logger_js__WEBPACK_IMPORTED_MODULE_0__["default"].getLogger("esri.layers.support.SpriteSource");
      /* harmony default export */


      __webpack_exports__["default"] = /*#__PURE__*/function () {
        function _class3(t, e, i, s) {
          _classCallCheck(this, _class3);

          this.baseURL = t, this.devicePixelRatio = e, this.maxTextureSize = i, this._spriteImageFormat = s, this._isRetina = !1, this._spritesData = {}, this.image = null, this.width = null, this.height = null, this.loadStatus = "not-loaded";
        }

        _createClass(_class3, [{
          key: "spriteNames",
          get: function get() {
            var t = [];

            for (var e in this._spritesData) {
              t.push(e);
            }

            return t.sort(), t;
          }
        }, {
          key: "getSpriteInfo",
          value: function getSpriteInfo(t) {
            return this._spritesData[t];
          }
        }, {
          key: "load",
          value: function () {
            var _load = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee7(t) {
              return regeneratorRuntime.wrap(function _callee7$(_context7) {
                while (1) {
                  switch (_context7.prev = _context7.next) {
                    case 0:
                      if (!this.baseURL) {
                        _context7.next = 13;
                        break;
                      }

                      this.loadStatus = "loading";
                      _context7.prev = 2;
                      _context7.next = 5;
                      return this._loadSprites(t);

                    case 5:
                      this.loadStatus = "loaded";
                      _context7.next = 11;
                      break;

                    case 8:
                      _context7.prev = 8;
                      _context7.t0 = _context7["catch"](2);
                      this.loadStatus = "failed";

                    case 11:
                      _context7.next = 14;
                      break;

                    case 13:
                      this.loadStatus = "failed";

                    case 14:
                    case "end":
                      return _context7.stop();
                  }
                }
              }, _callee7, this, [[2, 8]]);
            }));

            function load(_x7) {
              return _load.apply(this, arguments);
            }

            return load;
          }()
        }, {
          key: "_loadSprites",
          value: function _loadSprites(t) {
            var _this5 = this;

            this._isRetina = this.devicePixelRatio > 1.15;
            var l = Object(_core_urlUtils_js__WEBPACK_IMPORTED_MODULE_2__["urlToObject"])(this.baseURL),
                n = l.query ? "?" + Object(_core_urlUtils_js__WEBPACK_IMPORTED_MODULE_2__["objectToQuery"])(l.query) : "",
                d = this._isRetina ? "@2x" : "",
                g = "".concat(l.path).concat(d, ".").concat(this._spriteImageFormat).concat(n),
                m = "".concat(l.path).concat(d, ".json").concat(n);
            return Object(_core_promiseUtils_js__WEBPACK_IMPORTED_MODULE_3__["all"])([Object(_request_js__WEBPACK_IMPORTED_MODULE_4__["default"])(m, t), Object(_request_js__WEBPACK_IMPORTED_MODULE_4__["default"])(g, _objectSpread({
              responseType: "image"
            }, t))]).then(function (_ref2) {
              var _ref3 = _slicedToArray(_ref2, 2),
                  t = _ref3[0],
                  i = _ref3[1];

              var s = Object.keys(t.data);
              if (!s || 0 === s.length || 1 === s.length && "_ssl" === s[0] || !i || !i.data) return _this5._spritesData = _this5.image = null, _this5.width = _this5.height = 0, Object(_core_promiseUtils_js__WEBPACK_IMPORTED_MODULE_3__["resolve"])(null);
              _this5._spritesData = t.data;
              var a = i.data,
                  h = Math.max(_this5.maxTextureSize, 4096);

              if (a.width > h || a.height > h) {
                var _t2 = "Sprite resource for style ".concat(l.path, " is bigger than the maximum allowed of ").concat(h, " pixels}");

                throw o.error(_t2), new _core_Error_js__WEBPACK_IMPORTED_MODULE_1__["default"]("SpriteSource", _t2);
              }

              _this5.width = a.width, _this5.height = a.height;
              var n = document.createElement("canvas"),
                  d = n.getContext("2d");
              n.width = a.width, n.height = a.height, d.drawImage(a, 0, 0, a.width, a.height);
              var g = d.getImageData(0, 0, a.width, a.height),
                  m = new Uint8Array(g.data);
              var p;

              for (var _t3 = 0; _t3 < m.length; _t3 += 4) {
                p = m[_t3 + 3] / 255, m[_t3] = m[_t3] * p, m[_t3 + 1] = m[_t3 + 1] * p, m[_t3 + 2] = m[_t3 + 2] * p;
              }

              _this5.image = m;
            });
          }
        }]);

        return _class3;
      }();
      /***/

    },

    /***/
    "jIHu":
    /*!************************************************************************!*\
      !*** ./node_modules/@arcgis/core/views/2d/engine/webgl/definitions.js ***!
      \************************************************************************/

    /*! exports provided: ANGLE_FACTOR_256, ATTRIBUTE_DATA_ANIMATION, ATTRIBUTE_DATA_DD0, ATTRIBUTE_DATA_DD1, ATTRIBUTE_DATA_FILTER_FLAGS, ATTRIBUTE_DATA_VV, ATTRIBUTE_STORE_TEXTURE_SIZE, AVERAGE_GLYPH_MOSAIC_ITEM, COLLISION_BOX_PADDING, COLLISION_BUCKET_SIZE, COLLISION_EARLY_REJECT_BUCKET_SIZE, COLLISION_MAX_ZOOM_DELTA, COLLISION_PLACEMENT_PADDING, COLLISION_TILE_BOX_SIZE, DEBUG_LABELS, DOT_DENSITY_MAX_FIELDS, EFFECT_FLAG_0, EXTRUDE_SCALE, FILTER_FLAG_0, GLYPH_SIZE, HEURISTIC_GLYPHS_PER_FEATURE, HEURISTIC_GLYPHS_PER_LINE, HIGHLIGHT_FLAG, HITTEST_SEARCH_SIZE, MAGIC_LABEL_LINE_HEIGHT, MAX_FILTERS, MAX_GPU_UPLOADS_PER_FRAME, NAN_MAGIC_NUMBER, PICTURE_FILL_COLOR, RASTER_TILE_SIZE, SPRITE_PADDING, TEXTURE_BINDING_ATTRIBUTE_DATA_0, TEXTURE_BINDING_ATTRIBUTE_DATA_1, TEXTURE_BINDING_ATTRIBUTE_DATA_2, TEXTURE_BINDING_ATTRIBUTE_DATA_3, TEXTURE_BINDING_BITMAP, TEXTURE_BINDING_GLYPH_ATLAS, TEXTURE_BINDING_HIGHLIGHT_0, TEXTURE_BINDING_HIGHLIGHT_1, TEXTURE_BINDING_RENDERER_0, TEXTURE_BINDING_RENDERER_1, TEXTURE_BINDING_SPRITE_ATLAS, TEXT_PLACEMENT_PADDING, THIN_LINE_THRESHOLD, TILE_SIZE, VTL_HIGH_RES_CUTOFF, VTL_TEXTURE_BINDING_UNIT_GLYPHS, VTL_TEXTURE_BINDING_UNIT_SPRITES, WEBGL_MAX_INNER_STOPS, WEBGL_MAX_STOPS */

    /***/
    function jIHu(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ANGLE_FACTOR_256", function () {
        return d;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ATTRIBUTE_DATA_ANIMATION", function () {
        return J;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ATTRIBUTE_DATA_DD0", function () {
        return L;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ATTRIBUTE_DATA_DD1", function () {
        return M;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ATTRIBUTE_DATA_FILTER_FLAGS", function () {
        return I;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ATTRIBUTE_DATA_VV", function () {
        return K;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ATTRIBUTE_STORE_TEXTURE_SIZE", function () {
        return q;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "AVERAGE_GLYPH_MOSAIC_ITEM", function () {
        return k;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "COLLISION_BOX_PADDING", function () {
        return l;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "COLLISION_BUCKET_SIZE", function () {
        return p;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "COLLISION_EARLY_REJECT_BUCKET_SIZE", function () {
        return g;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "COLLISION_MAX_ZOOM_DELTA", function () {
        return f;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "COLLISION_PLACEMENT_PADDING", function () {
        return v;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "COLLISION_TILE_BOX_SIZE", function () {
        return m;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "DEBUG_LABELS", function () {
        return n;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "DOT_DENSITY_MAX_FIELDS", function () {
        return r;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "EFFECT_FLAG_0", function () {
        return Q;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "EXTRUDE_SCALE", function () {
        return h;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "FILTER_FLAG_0", function () {
        return P;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "GLYPH_SIZE", function () {
        return b;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "HEURISTIC_GLYPHS_PER_FEATURE", function () {
        return x;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "HEURISTIC_GLYPHS_PER_LINE", function () {
        return w;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "HIGHLIGHT_FLAG", function () {
        return O;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "HITTEST_SEARCH_SIZE", function () {
        return S;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "MAGIC_LABEL_LINE_HEIGHT", function () {
        return s;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "MAX_FILTERS", function () {
        return N;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "MAX_GPU_UPLOADS_PER_FRAME", function () {
        return W;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "NAN_MAGIC_NUMBER", function () {
        return c;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "PICTURE_FILL_COLOR", function () {
        return i;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "RASTER_TILE_SIZE", function () {
        return a;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "SPRITE_PADDING", function () {
        return X;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "TEXTURE_BINDING_ATTRIBUTE_DATA_0", function () {
        return A;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "TEXTURE_BINDING_ATTRIBUTE_DATA_1", function () {
        return B;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "TEXTURE_BINDING_ATTRIBUTE_DATA_2", function () {
        return C;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "TEXTURE_BINDING_ATTRIBUTE_DATA_3", function () {
        return D;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "TEXTURE_BINDING_BITMAP", function () {
        return z;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "TEXTURE_BINDING_GLYPH_ATLAS", function () {
        return y;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "TEXTURE_BINDING_HIGHLIGHT_0", function () {
        return E;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "TEXTURE_BINDING_HIGHLIGHT_1", function () {
        return F;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "TEXTURE_BINDING_RENDERER_0", function () {
        return G;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "TEXTURE_BINDING_RENDERER_1", function () {
        return H;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "TEXTURE_BINDING_SPRITE_ATLAS", function () {
        return u;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "TEXT_PLACEMENT_PADDING", function () {
        return j;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "THIN_LINE_THRESHOLD", function () {
        return R;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "TILE_SIZE", function () {
        return o;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "VTL_HIGH_RES_CUTOFF", function () {
        return V;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "VTL_TEXTURE_BINDING_UNIT_GLYPHS", function () {
        return U;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "VTL_TEXTURE_BINDING_UNIT_SPRITES", function () {
        return T;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "WEBGL_MAX_INNER_STOPS", function () {
        return e;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "WEBGL_MAX_STOPS", function () {
        return t;
      });
      /*
      All material copyright ESRI, All Rights Reserved, unless otherwise specified.
      See https://js.arcgis.com/4.18/esri/copyright.txt for details.
      */


      var t = 8,
          e = 6,
          c = 1e-30,
          h = 64,
          i = 4294967295,
          o = 512,
          a = 256,
          d = 256 / 360,
          n = !1,
          p = 128,
          r = 8,
          s = 29,
          f = 1,
          g = 16,
          l = 16,
          m = 4,
          v = 8,
          w = 50,
          x = 10,
          b = 24,
          j = 8,
          k = {
        metrics: {
          width: 15,
          height: 17,
          left: 0,
          top: -7,
          advance: 14
        }
      },
          q = 1024,
          u = 0,
          y = 0,
          z = 0,
          A = 1,
          B = 2,
          C = 3,
          D = 4,
          E = 5,
          F = 6,
          G = 5,
          H = 6,
          I = 0,
          J = 1,
          K = 2,
          L = 3,
          M = 3,
          N = 2,
          O = 1,
          P = 2,
          Q = 4,
          R = 2.5,
          S = 6,
          T = 5,
          U = 6,
          V = 1.15,
          W = 2,
          X = 2;
      /***/
    },

    /***/
    "mXvl":
    /*!***************************************************************!*\
      !*** ./node_modules/@arcgis/core/layers/mixins/BlendLayer.js ***!
      \***************************************************************/

    /*! exports provided: BlendLayer */

    /***/
    function mXvl(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "BlendLayer", function () {
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
      /*
      All material copyright ESRI, All Rights Reserved, unless otherwise specified.
      See https://js.arcgis.com/4.18/esri/copyright.txt for details.
      */


      var t = function t(_t5) {
        var s = /*#__PURE__*/function (_t4) {
          _inherits(s, _t4);

          var _super4 = _createSuper(s);

          function s() {
            var _this6;

            _classCallCheck(this, s);

            _this6 = _super4.apply(this, arguments), _this6.blendMode = "normal", _this6.effect = null;
            return _this6;
          }

          return s;
        }(_t5);

        return Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_4__["property"])({
          type: ["average", "color-burn", "color-dodge", "color", "darken", "destination-atop", "destination-in", "destination-out", "destination-over", "difference", "exclusion", "hard-light", "hue", "invert", "lighten", "lighter", "luminosity", "minus", "multiply", "normal", "overlay", "plus", "reflect", "saturation", "screen", "soft-light", "source-atop", "source-in", "source-out", "vivid-light", "xor"],
          nonNullable: !0,
          json: {
            read: !1,
            write: !1,
            origins: {
              "web-map": {
                "default": "normal",
                read: !0,
                write: !0
              }
            }
          }
        })], s.prototype, "blendMode", void 0), Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_4__["property"])()], s.prototype, "effect", void 0), s = Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_subclass_js__WEBPACK_IMPORTED_MODULE_5__["subclass"])("esri.layers.mixins.BlendLayer")], s), s;
      };
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
        function s(t, e, _s3) {
          _classCallCheck(this, s);

          this._namespace = t, this._storage = e, this._removeFunc = !1, this._hit = 0, this._miss = 0, this._storage.register(this), this._namespace += ":", _s3 && (this._storage.registerRemoveFunc(this._namespace, _s3), this._removeFunc = !0);
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
          value: function put(t, e, _s4) {
            var i = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : 0;

            this._storage.put(this._namespace + t, e, _s4, i);
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
          value: function updateSize(t, e, _s5) {
            this._storage.updateSize(this._namespace + t, e, _s5);
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
            var _this7 = this;

            var t = {
              Size: Math.round(this._size / 1048576) + "/" + Math.round(this._maxSize / 1048576) + "MB",
              "Hit rate": Math.round(100 * this._getHitRate()) + "%",
              Entries: this._db.size.toString()
            },
                e = {},
                s = new Array();

            this._db.forEach(function (t, _i6) {
              var h = t.lifetime;
              s[h] = (s[h] || 0) + t.size, _this7._users.forAll(function (s) {
                var h = s.namespace;

                if (_i6.startsWith(h)) {
                  var _s6 = e[h] || 0;

                  e[h] = _s6 + t.size;
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
              return e[t] = e[t] / _this7._size * 100;
            }), h.sort(function (t, s) {
              return e[s] - e[t];
            }), h.forEach(function (s) {
              return t[s] = Math.round(e[s]) + "% / " + _i5[s];
            });

            for (var _e6 = s.length - 1; _e6 >= 0; --_e6) {
              var _i8 = s[_e6];
              _i8 && (t["Priority " + (_e6 + -3 - 1)] = Math.round(_i8 / this.size * 100) + "%");
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
            var _this8 = this;

            this._db.forEach(function (e, s) {
              s.startsWith(t) && (_this8._size -= e.size, _this8._db["delete"](s), _this8._notifyRemoved(s, e.entry));
            });
          }
        }, {
          key: "clearAll",
          value: function clearAll() {
            var _this9 = this;

            this._db.forEach(function (t, e) {
              return _this9._notifyRemoved(e, t.entry);
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
                      _e7 = _step$value[1];

                  if (this._db["delete"](t), _e7.lives <= 1 ? (this._size -= _e7.size, this._notifyRemoved(t, _e7.entry)) : (--_e7.lives, this._db.set(t, _e7)), this._size <= .9 * this.maxSize) return;
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
    "tR3v":
    /*!***************************************************************************!*\
      !*** ./node_modules/@arcgis/core/layers/support/vectorTileLayerLoader.js ***!
      \***************************************************************************/

    /*! exports provided: loadMetadata */

    /***/
    function tR3v(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "loadMetadata", function () {
        return h;
      });
      /* harmony import */


      var _config_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ../../config.js */
      "EyXx");
      /* harmony import */


      var _core_urlUtils_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ../../core/urlUtils.js */
      "4EHJ");
      /* harmony import */


      var _core_promiseUtils_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ../../core/promiseUtils.js */
      "9MzC");
      /* harmony import */


      var _request_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ../../request.js */
      "Lqtk");
      /* harmony import */


      var _views_2d_engine_vectorTiles_style_VectorTileSource_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ../../views/2d/engine/vectorTiles/style/VectorTileSource.js */
      "JNis");
      /*
      All material copyright ESRI, All Rights Reserved, unless otherwise specified.
      See https://js.arcgis.com/4.18/esri/copyright.txt for details.
      */


      var S = _config_js__WEBPACK_IMPORTED_MODULE_0__["default"].defaults && _config_js__WEBPACK_IMPORTED_MODULE_0__["default"].defaults.io.corsEnabledServers;

      function h(_x8, _x9) {
        return _h2.apply(this, arguments);
      }

      function _h2() {
        _h2 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee8(e, t) {
          var s, _ref4, _ref5, o, l, n, i;

          return regeneratorRuntime.wrap(function _callee8$(_context8) {
            while (1) {
              switch (_context8.prev = _context8.next) {
                case 0:
                  s = {
                    source: null,
                    sourceBase: null,
                    sourceUrl: null,
                    validatedSource: null,
                    style: null,
                    styleBase: null,
                    styleUrl: null,
                    sourceNameToSource: {},
                    primarySourceName: "",
                    spriteFormat: "png"
                  }, _ref4 = "string" == typeof e ? [e, null] : [null, e.jsonUrl], _ref5 = _slicedToArray(_ref4, 2), o = _ref5[0], l = _ref5[1], n = o ? Object(_core_urlUtils_js__WEBPACK_IMPORTED_MODULE_1__["urlToObject"])(o) : null;
                  _context8.next = 3;
                  return w(s, "esri", e, l, t);

                case 3:
                  i = {
                    layerDefinition: s.validatedSource,
                    url: o,
                    parsedUrl: n,
                    serviceUrl: s.sourceUrl,
                    style: s.style,
                    styleUrl: s.styleUrl,
                    spriteUrl: s.style.sprite && x(s.styleBase, s.style.sprite),
                    spriteFormat: s.spriteFormat,
                    glyphsUrl: s.style.glyphs && x(s.styleBase, s.style.glyphs),
                    sourceNameToSource: s.sourceNameToSource,
                    primarySourceName: s.primarySourceName
                  };
                  return _context8.abrupt("return", (U(i.spriteUrl), U(i.glyphsUrl), i));

                case 5:
                case "end":
                  return _context8.stop();
              }
            }
          }, _callee8);
        }));
        return _h2.apply(this, arguments);
      }

      function U(e) {
        if (!e) return;
        var r = Object(_core_urlUtils_js__WEBPACK_IMPORTED_MODULE_1__["getOrigin"])(e);
        S && -1 === S.indexOf(r) && S.push(r);
      }

      function x() {
        var r;

        for (var _len2 = arguments.length, e = new Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
          e[_key2] = arguments[_key2];
        }

        for (var t = 0; t < e.length; ++t) {
          if (Object(_core_urlUtils_js__WEBPACK_IMPORTED_MODULE_1__["isProtocolRelative"])(e[t])) {
            if (r) {
              var s = r.split("://")[0];
              r = s + ":" + e[t].trim();
            }
          } else r = Object(_core_urlUtils_js__WEBPACK_IMPORTED_MODULE_1__["isAbsolute"])(e[t]) ? e[t] : Object(_core_urlUtils_js__WEBPACK_IMPORTED_MODULE_1__["join"])(r, e[t]);
        }

        return Object(_core_urlUtils_js__WEBPACK_IMPORTED_MODULE_1__["removeTrailingSlash"])(r);
      }

      function w(_x10, _x11, _x12, _x13, _x14) {
        return _w.apply(this, arguments);
      }

      function _w() {
        _w = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee10(e, t, s, o, l) {
          var n, y, d, _e8, _t6, S;

          return regeneratorRuntime.wrap(function _callee10$(_context10) {
            while (1) {
              switch (_context10.prev = _context10.next) {
                case 0:
                  if (!(Object(_core_promiseUtils_js__WEBPACK_IMPORTED_MODULE_2__["throwIfAborted"])(l), "string" == typeof s)) {
                    _context10.next = 11;
                    break;
                  }

                  _e8 = Object(_core_urlUtils_js__WEBPACK_IMPORTED_MODULE_1__["normalize"])(s);
                  U(_e8);
                  _t6 = Object(_core_urlUtils_js__WEBPACK_IMPORTED_MODULE_1__["urlToObject"])(_e8);
                  _context10.next = 6;
                  return Object(_request_js__WEBPACK_IMPORTED_MODULE_3__["default"])(_t6.path, _objectSpread({
                    query: {
                      f: "json"
                    },
                    responseType: "json"
                  }, l));

                case 6:
                  d = _context10.sent;
                  n = _e8;
                  y = _e8;
                  _context10.next = 12;
                  break;

                case 11:
                  d = {
                    data: s
                  }, n = s.jsonUrl || null, y = o;

                case 12:
                  S = d.data;
                  return _context10.abrupt("return", (d.ssl && (n && (n = n.replace(/^http:/i, "https:")), y && (y = y.replace(/^http:/i, "https:"))), g(S) ? (e.styleUrl = n || null, function () {
                    var _ref6 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee9(e, r, t, s) {
                      var o, l, _t7, _i9, _Object$keys, _t8;

                      return regeneratorRuntime.wrap(function _callee9$(_context9) {
                        while (1) {
                          switch (_context9.prev = _context9.next) {
                            case 0:
                              o = t ? Object(_core_urlUtils_js__WEBPACK_IMPORTED_MODULE_1__["removeFile"])(t) : _core_urlUtils_js__WEBPACK_IMPORTED_MODULE_1__["appBaseUrl"];
                              e.styleBase = o, e.style = r, e.styleUrl && U(e.styleUrl);
                              r["sprite-format"] && "webp" === r["sprite-format"].toLowerCase() && (e.spriteFormat = "webp");
                              l = [];

                              if (!(r.sources && r.sources.esri)) {
                                _context9.next = 12;
                                break;
                              }

                              _t7 = r.sources.esri;

                              if (!_t7.url) {
                                _context9.next = 11;
                                break;
                              }

                              _context9.next = 9;
                              return w(e, "esri", x(o, _t7.url), void 0, s);

                            case 9:
                              _context9.next = 12;
                              break;

                            case 11:
                              l.push(w(e, "esri", _t7, o, s));

                            case 12:
                              for (_i9 = 0, _Object$keys = Object.keys(r.sources); _i9 < _Object$keys.length; _i9++) {
                                _t8 = _Object$keys[_i9];
                                "esri" !== _t8 && "vector" === r.sources[_t8].type && (r.sources[_t8].url ? l.push(w(e, _t8, x(o, r.sources[_t8].url), void 0, s)) : l.push(w(e, _t8, r.sources[_t8], o, s)));
                              }

                              _context9.next = 15;
                              return Object(_core_promiseUtils_js__WEBPACK_IMPORTED_MODULE_2__["all"])(l);

                            case 15:
                            case "end":
                              return _context9.stop();
                          }
                        }
                      }, _callee9);
                    }));

                    return function (_x21, _x22, _x23, _x24) {
                      return _ref6.apply(this, arguments);
                    };
                  }()(e, S, y, l)) : g(S) ? Object(_core_promiseUtils_js__WEBPACK_IMPORTED_MODULE_2__["reject"])("You must specify the URL or the JSON for a service or for a style.") : e.sourceUrl ? v(e, S, y, !1, t, l) : (e.sourceUrl = n || null, v(e, S, y, !0, t, l))));

                case 14:
                case "end":
                  return _context10.stop();
              }
            }
          }, _callee10);
        }));
        return _w.apply(this, arguments);
      }

      function g(e) {
        return !!e.sources;
      }

      function v(_x15, _x16, _x17, _x18, _x19, _x20) {
        return _v.apply(this, arguments);
      }
      /***/


      function _v() {
        _v = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee11(e, r, s, o, l, n) {
          var i, u, c, _r3;

          return regeneratorRuntime.wrap(function _callee11$(_context11) {
            while (1) {
              switch (_context11.prev = _context11.next) {
                case 0:
                  i = s ? Object(_core_urlUtils_js__WEBPACK_IMPORTED_MODULE_1__["removeTrailingSlash"])(s) + "/" : _core_urlUtils_js__WEBPACK_IMPORTED_MODULE_1__["appBaseUrl"], u = function (e, r) {
                    if (e.hasOwnProperty("tileInfo")) return e;
                    var t = {
                      xmin: -20037507.067161843,
                      ymin: -20037507.067161843,
                      xmax: 20037507.067161843,
                      ymax: 20037507.067161843,
                      spatialReference: {
                        wkid: 102100
                      }
                    },
                        s = 512;
                    var o = 78271.51696400007,
                        l = 295828763.7957775;
                    var n = [],
                        i = e.hasOwnProperty("minzoom") ? parseFloat(e.minzoom) : 0,
                        u = e.hasOwnProperty("maxzoom") ? parseFloat(e.maxzoom) : 22;

                    for (var _e9 = 0; _e9 <= u; _e9++) {
                      _e9 >= i && n.push({
                        level: _e9,
                        scale: l,
                        resolution: o
                      }), o /= 2, l /= 2;
                    }

                    var _iterator2 = _createForOfIteratorHelper(e.tiles),
                        _step2;

                    try {
                      for (_iterator2.s(); !(_step2 = _iterator2.n()).done;) {
                        var _t9 = _step2.value;
                        U(x(r, _t9));
                      }
                    } catch (err) {
                      _iterator2.e(err);
                    } finally {
                      _iterator2.f();
                    }

                    return {
                      capabilities: "TilesOnly",
                      initialExtent: t,
                      fullExtent: t,
                      minScale: 0,
                      maxScale: 0,
                      tiles: e.tiles,
                      tileInfo: {
                        rows: s,
                        cols: s,
                        dpi: 96,
                        format: "pbf",
                        origin: {
                          x: -20037508.342787,
                          y: 20037508.342787
                        },
                        lods: n,
                        spatialReference: {
                          wkid: 102100
                        }
                      }
                    };
                  }(r, i), c = new _views_2d_engine_vectorTiles_style_VectorTileSource_js__WEBPACK_IMPORTED_MODULE_4__["default"](l, i, u);

                  if (!(!o && e.primarySourceName in e.sourceNameToSource)) {
                    _context11.next = 6;
                    break;
                  }

                  _r3 = e.sourceNameToSource[e.primarySourceName];

                  if (_r3.isCompatibleWith(c)) {
                    _context11.next = 5;
                    break;
                  }

                  return _context11.abrupt("return", Object(_core_promiseUtils_js__WEBPACK_IMPORTED_MODULE_2__["resolve"])());

                case 5:
                  null != c.fullExtent && (null != _r3.fullExtent ? _r3.fullExtent.union(c.fullExtent) : _r3.fullExtent = c.fullExtent.clone()), _r3.tileInfo.lods.length < c.tileInfo.lods.length && (_r3.tileInfo = c.tileInfo);

                case 6:
                  if (!(o ? (e.sourceBase = i, e.source = r, e.validatedSource = u, e.primarySourceName = l, e.sourceUrl && U(e.sourceUrl)) : U(i), e.sourceNameToSource[l] = c, !e.style)) {
                    _context11.next = 8;
                    break;
                  }

                  return _context11.abrupt("return", null == r.defaultStyles ? Object(_core_promiseUtils_js__WEBPACK_IMPORTED_MODULE_2__["reject"])() : "string" == typeof r.defaultStyles ? w(e, "", x(i, r.defaultStyles, "root.json"), void 0, n) : w(e, "", r.defaultStyles, x(i, "root.json"), n));

                case 8:
                case "end":
                  return _context11.stop();
              }
            }
          }, _callee11);
        }));
        return _v.apply(this, arguments);
      }
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
        function _class4(e, r) {
          _classCallCheck(this, _class4);

          this._storage = new _MemCache_js__WEBPACK_IMPORTED_MODULE_0__["MemCacheStorage"](), this._storage.maxSize = e, r && this._storage.registerRemoveFunc("", r);
        }

        _createClass(_class4, [{
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

        return _class4;
      }();
      /***/

    }
  }]);
})();
//# sourceMappingURL=VectorTileLayer-js-es5.js.map