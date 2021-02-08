(function () {
  function _get(target, property, receiver) { if (typeof Reflect !== "undefined" && Reflect.get) { _get = Reflect.get; } else { _get = function _get(target, property, receiver) { var base = _superPropBase(target, property); if (!base) return; var desc = Object.getOwnPropertyDescriptor(base, property); if (desc.get) { return desc.get.call(receiver); } return desc.value; }; } return _get(target, property, receiver || target); }

  function _superPropBase(object, property) { while (!Object.prototype.hasOwnProperty.call(object, property)) { object = _getPrototypeOf(object); if (object === null) break; } return object; }

  function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

  function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

  function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

  function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

  function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

  function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

  function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

  function _iterableToArrayLimit(arr, i) { if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr))) return; var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

  function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

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

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["ImageryTileLayer-js"], {
    /***/
    "2CDY":
    /*!**************************************************************************************!*\
      !*** ./node_modules/@arcgis/core/layers/support/rasterDatasets/ImageServerRaster.js ***!
      \**************************************************************************************/

    /*! exports provided: default */

    /***/
    function CDY(module, __webpack_exports__, __webpack_require__) {
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


      var _core_maybe_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ../../../core/maybe.js */
      "srIe");
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


      var _core_accessorSupport_decorators_subclass_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ../../../core/accessorSupport/decorators/subclass.js */
      "04ZG");
      /* harmony import */


      var _core_Error_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! ../../../core/Error.js */
      "zlDU");
      /* harmony import */


      var _core_urlUtils_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! ../../../core/urlUtils.js */
      "4EHJ");
      /* harmony import */


      var _core_uuid_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! ../../../core/uuid.js */
      "ju1D");
      /* harmony import */


      var _portal_support_resourceExtension_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
      /*! ../../../portal/support/resourceExtension.js */
      "9AIY");
      /* harmony import */


      var _core_promiseUtils_js__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
      /*! ../../../core/promiseUtils.js */
      "9MzC");
      /* harmony import */


      var _geometry_SpatialReference_js__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
      /*! ../../../geometry/SpatialReference.js */
      "WZb1");
      /* harmony import */


      var _geometry_Point_js__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
      /*! ../../../geometry/Point.js */
      "SuVq");
      /* harmony import */


      var _geometry_Extent_js__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(
      /*! ../../../geometry/Extent.js */
      "OvF4");
      /* harmony import */


      var _geometry_js__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(
      /*! ../../../geometry.js */
      "4GrV");
      /* harmony import */


      var _tasks_support_FeatureSet_js__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(
      /*! ../../../tasks/support/FeatureSet.js */
      "8prj");
      /* harmony import */


      var _TileInfo_js__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(
      /*! ../TileInfo.js */
      "3/ME");
      /* harmony import */


      var _serviceTileInfoProperty_js__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(
      /*! ../serviceTileInfoProperty.js */
      "q2iW");
      /* harmony import */


      var _TilemapCache_js__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(
      /*! ../TilemapCache.js */
      "llFo");
      /* harmony import */


      var _RasterInfo_js__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(
      /*! ../RasterInfo.js */
      "pPNP");
      /* harmony import */


      var _rasterFunctions_pixelUtils_js__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(
      /*! ../rasterFunctions/pixelUtils.js */
      "ne7T");
      /* harmony import */


      var _RasterStorageInfo_js__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(
      /*! ../RasterStorageInfo.js */
      "U9Ns");
      /* harmony import */


      var _BaseRaster_js__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(
      /*! ./BaseRaster.js */
      "HKGE");
      /*
      All material copyright ESRI, All Rights Reserved, unless otherwise specified.
      See https://js.arcgis.com/4.18/esri/copyright.txt for details.
      */


      var g = /*#__PURE__*/function (_BaseRaster_js__WEBPA) {
        _inherits(g, _BaseRaster_js__WEBPA);

        var _super = _createSuper(g);

        function g() {
          var _this;

          _classCallCheck(this, g);

          _this = _super.apply(this, arguments), _this._levelOffset = 0, _this._slices = null, _this._tilemapCache = null, _this.datasetFormat = "RasterTileServer";
          return _this;
        }

        _createClass(g, [{
          key: "open",
          value: function () {
            var _open = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(e) {
              var i, s, l, o, n, _e, t, _i, _s, a, r, _o, m, h, p, _e$size, f, d, x, _g4, _v, w, _e2, _e3;

              return regeneratorRuntime.wrap(function _callee$(_context) {
                while (1) {
                  switch (_context.prev = _context.next) {
                    case 0:
                      _context.next = 2;
                      return this.init();

                    case 2:
                      i = e && e.signal;

                      if (!this.sourceJSON) {
                        _context.next = 7;
                        break;
                      }

                      _context.t0 = {
                        data: this.sourceJSON
                      };
                      _context.next = 10;
                      break;

                    case 7:
                      _context.next = 9;
                      return this.request(this.url, {
                        query: {
                          f: "json"
                        },
                        signal: i
                      });

                    case 9:
                      _context.t0 = _context.sent;

                    case 10:
                      s = _context.t0;
                      s.ssl && (this.url = this.url.replace(/^http:/i, "https:"));
                      l = s.data;
                      this.sourceJSON = l;
                      o = ["jpg", "jpeg", "png", "png8", "png24", "png32", "mixed"];

                      if (!(this.tileType = l.cacheType, null == this.tileType && (o.indexOf(l.tileInfo.format.toLowerCase()) > -1 ? this.tileType = "Map" : "lerc" === l.tileInfo.format.toLowerCase() ? this.tileType = "Elevation" : this.tileType = "Raster"), !l)) {
                        _context.next = 17;
                        break;
                      }

                      throw new _core_Error_js__WEBPACK_IMPORTED_MODULE_7__["default"]("imageserverraster:open", "cannot initialize tiled image service, missing service info");

                    case 17:
                      if (l.tileInfo) {
                        _context.next = 19;
                        break;
                      }

                      throw new _core_Error_js__WEBPACK_IMPORTED_MODULE_7__["default"]("imageserverraster:open", "use ImageryLayer to open non-tiled image services");

                    case 19:
                      this.datasetName = l.name.slice(l.name.indexOf("/") + 1);
                      _context.next = 22;
                      return this._fetchRasterInfo({
                        signal: i
                      });

                    case 22:
                      n = _context.sent;

                      if (Object(_core_maybe_js__WEBPACK_IMPORTED_MODULE_2__["isSome"])(n)) {
                        _context.next = 25;
                        break;
                      }

                      throw new _core_Error_js__WEBPACK_IMPORTED_MODULE_7__["default"]("image-server-raster:open", "cannot initialize image service");

                    case 25:
                      _e = "Map" === this.tileType ? Object(_serviceTileInfoProperty_js__WEBPACK_IMPORTED_MODULE_18__["readServiceTileInfo"])(l.tileInfo, l) : _TileInfo_js__WEBPACK_IMPORTED_MODULE_17__["default"].fromJSON(l.tileInfo), t = n.extent, _i = n.pixelSize, _s = .5 / n.width * _i.x;
                      _o = _e.lodAt(Math.max.apply(null, _e.lods.map(function (e) {
                        return e.level;
                      })));
                      "Map" !== this.tileType && 0 !== l.maxScale && ("Raster" === this.tileType ? (a = _e.lods.filter(function (e) {
                        return e.resolution === _i.x;
                      })[0], a || (a = _e.lods[_e.lods.length - 1])) : (a = _e.lods.filter(function (e) {
                        return Math.abs(e.scale - l.maxScale) < _s;
                      })[0], a || (a = _e.lods.filter(function (e) {
                        return e.scale > l.maxScale;
                      }).sort(function (e, t) {
                        return e.scale > t.scale ? 1 : -1;
                      })[0])), _i.x = _i.y = a.resolution, n.width = Math.ceil((t.xmax - t.xmin) / _i.x - .1), n.height = Math.ceil((t.ymax - t.ymin) / _i.y - .1)), a || (a = _o);
                      m = _e.lodAt(Math.min.apply(null, _e.lods.map(function (e) {
                        return e.level;
                      })));
                      "Map" === this.tileType ? this._levelOffset = _e.lods[0].level : 0 !== l.minScale && "Elevation" === this.tileType && (r = _e.lods.filter(function (e) {
                        return Math.abs(e.scale - l.minScale) < _s;
                      })[0], this._levelOffset = r.level - m.level), r || (r = m);
                      h = Math.max(_i.x, _i.y);
                      (Math.abs(_i.x - _i.y) > _s || !_e.lods.some(function (e) {
                        return Math.abs(e.resolution - h) < _s;
                      })) && (_i.x = _i.y = a.resolution, n.width = Math.ceil((t.xmax - t.xmin) / _i.x - .1), n.height = Math.ceil((t.ymax - t.ymin) / _i.y - .1));
                      p = a.level - r.level, _e$size = _slicedToArray(_e.size, 2), f = _e$size[0], d = _e$size[1], x = _e.origin;
                      _g4 = _i.x, _v = _i.y;
                      w = [{
                        minCol: Math.floor((t.xmin - x.x + .1 * _g4) / f / _g4),
                        maxCol: Math.floor((t.xmax - x.x - .1 * _g4) / f / _g4),
                        minRow: Math.floor((x.y - t.ymax + .1 * _v) / d / _v),
                        maxRow: Math.floor((x.y - t.ymin - .1 * _v) / d / _v)
                      }];
                      if (p > 0) for (_e2 = 0; _e2 < p; _e2++) {
                        _g4 *= 2, _v *= 2, w.push({
                          minCol: Math.floor((t.xmin - x.x + .1 * _g4) / f / _g4),
                          maxCol: Math.floor((t.xmax - x.x - .1 * _g4) / f / _g4),
                          minRow: Math.floor((x.y - t.ymax + .1 * _v) / d / _g4),
                          maxRow: Math.floor((x.y - t.ymin - .1 * _v) / d / _g4)
                        });
                      }
                      n.storageInfo = new _RasterStorageInfo_js__WEBPACK_IMPORTED_MODULE_22__["default"]({
                        blockWidth: _e.size[0],
                        blockHeight: _e.size[1],
                        pyramidBlockWidth: _e.size[0],
                        pyramidBlockHeight: _e.size[1],
                        compression: _e.format,
                        origin: _e.origin,
                        firstPyramidLevel: 1,
                        maximumPyramidLevel: p,
                        tileInfo: _e,
                        blockBoundary: w
                      }), this._set("rasterInfo", n);

                      if (l.capabilities.toLowerCase().indexOf("tilemap") > -1) {
                        _e3 = {
                          tileInfo: n.storageInfo.tileInfo,
                          parsedUrl: Object(_core_urlUtils_js__WEBPACK_IMPORTED_MODULE_8__["urlToObject"])(this.url),
                          url: this.url,
                          tileServers: [],
                          type: "tile"
                        };
                        this._tilemapCache = new _TilemapCache_js__WEBPACK_IMPORTED_MODULE_19__["TilemapCache"]({
                          layer: _e3
                        });
                      }

                    case 38:
                    case "end":
                      return _context.stop();
                  }
                }
              }, _callee, this);
            }));

            function open(_x) {
              return _open.apply(this, arguments);
            }

            return open;
          }()
        }, {
          key: "fetchRawTile",
          value: function () {
            var _fetchRawTile = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee2(e, t, i) {
              var s,
                  _this$rasterInfo,
                  a,
                  r,
                  l,
                  o,
                  n,
                  m,
                  _yield$this$request,
                  h,
                  c,
                  u,
                  p,
                  f,
                  y,
                  x,
                  _g2,
                  v,
                  w,
                  j,
                  S,
                  b,
                  M,
                  I,
                  _args2 = arguments;

              return regeneratorRuntime.wrap(function _callee2$(_context2) {
                while (1) {
                  switch (_context2.prev = _context2.next) {
                    case 0:
                      s = _args2.length > 3 && _args2[3] !== undefined ? _args2[3] : {};
                      _this$rasterInfo = this.rasterInfo;
                      a = _this$rasterInfo.storageInfo;
                      r = _this$rasterInfo.extent;
                      l = _this$rasterInfo.pixelSize;
                      o = a.maximumPyramidLevel - e + this._levelOffset;
                      n = "".concat(this.url, "/tile/").concat(o, "/").concat(t, "/").concat(i);
                      m = this._slices ? {
                        sliceId: s.sliceId || 0
                      } : null;
                      _context2.next = 10;
                      return this.request(n, {
                        query: m,
                        responseType: "array-buffer",
                        signal: s.signal
                      });

                    case 10:
                      _yield$this$request = _context2.sent;
                      h = _yield$this$request.data;

                      if (h) {
                        _context2.next = 14;
                        break;
                      }

                      return _context2.abrupt("return", null);

                    case 14:
                      _context2.next = 16;
                      return this.decodePixelBlock(h, {
                        width: a.tileInfo.size[0],
                        height: a.tileInfo.size[1],
                        planes: null,
                        pixelType: null,
                        isPoint: "Elevation" === this.tileType
                      });

                    case 16:
                      c = _context2.sent;
                      u = a.blockBoundary[e];

                      if (!("jpg" !== a.compression || i > u.minCol && i < u.maxCol && t > u.minRow && t < u.maxRow)) {
                        _context2.next = 20;
                        break;
                      }

                      return _context2.abrupt("return", c);

                    case 20:
                      p = a.origin, f = a.blockWidth, y = a.blockHeight, x = Math.pow(2, e), _g2 = Math.round((r.xmin - p.x) / (l.x * x)) % f, v = Math.round((r.xmax - p.x) / (l.x * x)) % f, w = Math.round((p.y - r.ymax) / (l.x * x)) % y, j = Math.round((p.y - r.ymin) / (l.x * x)) % y, S = i === u.minCol ? _g2 : 0, b = t === u.minRow ? w : 0, M = i === u.maxCol ? v : f, I = t === u.maxRow ? j : y;
                      return _context2.abrupt("return", (Object(_rasterFunctions_pixelUtils_js__WEBPACK_IMPORTED_MODULE_21__["setValidBoundary"])(c, {
                        x: S,
                        y: b
                      }, {
                        width: M - S,
                        height: I - b
                      }), c));

                    case 22:
                    case "end":
                      return _context2.stop();
                  }
                }
              }, _callee2, this);
            }));

            function fetchRawTile(_x2, _x3, _x4) {
              return _fetchRawTile.apply(this, arguments);
            }

            return fetchRawTile;
          }()
        }, {
          key: "getSliceIndex",
          value: function getSliceIndex(e) {
            if (null == e || !e.length || !this._slices) return null;
            var t = e;

            for (var _e4 = 0; _e4 < this._slices.length; _e4++) {
              var i = this._slices[_e4].multidimensionalDefinition;
              if (i.length === t.length && !i.some(function (e) {
                var i = t.filter(function (t) {
                  return e.variableName === t.variableName && t.dimensionName === e.dimensionName;
                })[0];
                if (!i) return !0;
                return (Array.isArray(e.values[0]) ? e.values[0][0] : e.values[0]) !== (Array.isArray(i.values[0]) ? i.values[0][0] : i.values[0]);
              })) return _e4;
            }

            return null;
          }
        }, {
          key: "fetchVariableStatisticsHistograms",
          value: function () {
            var _fetchVariableStatisticsHistograms = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee3(e, t) {
              var i, s, a;
              return regeneratorRuntime.wrap(function _callee3$(_context3) {
                while (1) {
                  switch (_context3.prev = _context3.next) {
                    case 0:
                      i = this.request(this.url + "/statistics", {
                        query: {
                          variable: e,
                          f: "json"
                        },
                        signal: t
                      }).then(function (e) {
                        var t;
                        return null == (t = e.data) ? void 0 : t.statistics;
                      });
                      s = this.request(this.url + "/histograms", {
                        query: {
                          variable: e,
                          f: "json"
                        },
                        signal: t
                      }).then(function (e) {
                        var t;
                        return null == (t = e.data) ? void 0 : t.histograms;
                      });
                      _context3.next = 4;
                      return Object(_core_promiseUtils_js__WEBPACK_IMPORTED_MODULE_11__["all"])([i, s]);

                    case 4:
                      a = _context3.sent;
                      return _context3.abrupt("return", (a[0] && a[0].forEach(function (e) {
                        e.avg = e.mean, e.stddev = e.standardDeviation;
                      }), {
                        statistics: a[0] || null,
                        histograms: a[1] || null
                      }));

                    case 6:
                    case "end":
                      return _context3.stop();
                  }
                }
              }, _callee3, this);
            }));

            function fetchVariableStatisticsHistograms(_x5, _x6) {
              return _fetchVariableStatisticsHistograms.apply(this, arguments);
            }

            return fetchVariableStatisticsHistograms;
          }()
        }, {
          key: "computeBestPyramidLevelForLocation",
          value: function () {
            var _computeBestPyramidLevelForLocation = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee4(e) {
              var t,
                  i,
                  s,
                  a,
                  r,
                  l,
                  _args4 = arguments;
              return regeneratorRuntime.wrap(function _callee4$(_context4) {
                while (1) {
                  switch (_context4.prev = _context4.next) {
                    case 0:
                      t = _args4.length > 1 && _args4[1] !== undefined ? _args4[1] : {};

                      if (this._tilemapCache) {
                        _context4.next = 3;
                        break;
                      }

                      return _context4.abrupt("return", 0);

                    case 3:
                      i = this.identifyPixelLocation(e, 0, t.datumTransformation);

                      if (!(null === i)) {
                        _context4.next = 6;
                        break;
                      }

                      return _context4.abrupt("return", null);

                    case 6:
                      s = 0;
                      a = this.rasterInfo.storageInfo.maximumPyramidLevel;
                      r = a - s + this._levelOffset;
                      l = i.srcLocation;

                    case 10:
                      if (!(r >= 0)) {
                        _context4.next = 25;
                        break;
                      }

                      _context4.prev = 11;
                      _context4.next = 14;
                      return this._tilemapCache.fetchAvailability(r, i.row, i.col, t);

                    case 14:
                      _context4.t0 = _context4.sent;

                      if (!("available" === _context4.t0)) {
                        _context4.next = 17;
                        break;
                      }

                      return _context4.abrupt("break", 25);

                    case 17:
                      _context4.next = 21;
                      break;

                    case 19:
                      _context4.prev = 19;
                      _context4.t1 = _context4["catch"](11);

                    case 21:
                      if (!(r--, s++, i = this.identifyPixelLocation(l, s, t.datumTransformation), null === i)) {
                        _context4.next = 23;
                        break;
                      }

                      return _context4.abrupt("return", null);

                    case 23:
                      _context4.next = 10;
                      break;

                    case 25:
                      return _context4.abrupt("return", -1 === r || null == i ? null : s);

                    case 26:
                    case "end":
                      return _context4.stop();
                  }
                }
              }, _callee4, this, [[11, 19]]);
            }));

            function computeBestPyramidLevelForLocation(_x7) {
              return _computeBestPyramidLevelForLocation.apply(this, arguments);
            }

            return computeBestPyramidLevelForLocation;
          }()
        }, {
          key: "_fetchRasterInfo",
          value: function () {
            var _fetchRasterInfo2 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee5(e) {
              var _this2 = this;

              var t, i, s, a, r, c, u, p, d, y, x, _g3;

              return regeneratorRuntime.wrap(function _callee5$(_context5) {
                while (1) {
                  switch (_context5.prev = _context5.next) {
                    case 0:
                      t = this.sourceJSON, i = Math.ceil((t.extent.xmax - t.extent.xmin) / t.pixelSizeX - .1), s = Math.ceil((t.extent.ymax - t.extent.ymin) / t.pixelSizeY - .1), a = _geometry_SpatialReference_js__WEBPACK_IMPORTED_MODULE_12__["default"].fromJSON(t.spatialReference || t.extent.spatialReference);

                      if (!("Map" === this.tileType)) {
                        _context5.next = 3;
                        break;
                      }

                      return _context5.abrupt("return", new _RasterInfo_js__WEBPACK_IMPORTED_MODULE_20__["default"]({
                        width: i,
                        height: s,
                        bandCount: 3,
                        extent: _geometry_Extent_js__WEBPACK_IMPORTED_MODULE_14__["default"].fromJSON(t.extent),
                        spatialReference: a,
                        pixelSize: new _geometry_Point_js__WEBPACK_IMPORTED_MODULE_13__["default"]({
                          x: t.pixelSizeX,
                          y: t.pixelSizeY,
                          spatialReference: a
                        }),
                        pixelType: "u8",
                        statistics: null,
                        keyProperties: {
                          DataType: "processed"
                        }
                      }));

                    case 3:
                      r = e.slice, c = e.signal, u = !!t.hasRasterAttributeTable && this.request(this.url + "/rasterAttributeTable", {
                        query: {
                          slice: r,
                          f: "json"
                        },
                        signal: c
                      }).then(function (e) {
                        return _tasks_support_FeatureSet_js__WEBPACK_IMPORTED_MODULE_16__["default"].fromJSON(e.data);
                      })["catch"](function () {
                        return null;
                      }), p = !!t.hasColormap && this.request(this.url + "/colormap", {
                        query: {
                          slice: r,
                          f: "json"
                        },
                        signal: c
                      }).then(function (e) {
                        var t;
                        return null == (t = e.data) ? void 0 : t.colormap;
                      }), d = !!t.hasHistograms && this.request(this.url + "/histograms", {
                        query: {
                          slice: r,
                          f: "json"
                        },
                        signal: c
                      }).then(function (e) {
                        var t;
                        return null == (t = e.data) ? void 0 : t.histograms;
                      }), y = this.request(this.url + "/keyProperties", {
                        query: {
                          f: "json"
                        },
                        signal: c
                      }).then(function (e) {
                        return e.data;
                      })["catch"](function () {}), x = !!t.hasMultidimensions && this._fetchMultidimensionalInfo(), _g3 = !!t.hasMultidimensions && this.request(this.url + "/slices", {
                        query: {
                          f: "json"
                        },
                        signal: c
                      }).then(function (e) {
                        return e.data && e.data.slices;
                      })["catch"](function () {});
                      return _context5.abrupt("return", Object(_core_promiseUtils_js__WEBPACK_IMPORTED_MODULE_11__["all"])([u, p, d, y, x, _g3]).then(function (e) {
                        var r = null;

                        if (t.minValues && t.minValues.length === t.bandCount) {
                          r = [];

                          for (var _e5 = 0; _e5 < t.minValues.length; _e5++) {
                            r.push({
                              min: t.minValues[_e5],
                              max: t.maxValues[_e5],
                              avg: t.meanValues[_e5],
                              stddev: t.stdvValues[_e5]
                            });
                          }
                        }

                        return _this2._slices = e[5] || null, new _RasterInfo_js__WEBPACK_IMPORTED_MODULE_20__["default"]({
                          width: i,
                          height: s,
                          bandCount: t.bandCount,
                          extent: _geometry_Extent_js__WEBPACK_IMPORTED_MODULE_14__["default"].fromJSON(t.extent),
                          spatialReference: a,
                          pixelSize: new _geometry_Point_js__WEBPACK_IMPORTED_MODULE_13__["default"]({
                            x: t.pixelSizeX,
                            y: t.pixelSizeY,
                            spatialReference: a
                          }),
                          pixelType: t.pixelType.toLowerCase(),
                          statistics: r,
                          attributeTable: e[0] || null,
                          colormap: e[1] || null,
                          histograms: e[2] || null,
                          keyProperties: e[3] || {},
                          multidimensionalInfo: e[4] || null
                        });
                      }));

                    case 5:
                    case "end":
                      return _context5.stop();
                  }
                }
              }, _callee5, this);
            }));

            function _fetchRasterInfo(_x8) {
              return _fetchRasterInfo2.apply(this, arguments);
            }

            return _fetchRasterInfo;
          }()
        }, {
          key: "_fetchMultidimensionalInfo",
          value: function () {
            var _fetchMultidimensionalInfo2 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee6(e) {
              var t, i;
              return regeneratorRuntime.wrap(function _callee6$(_context6) {
                while (1) {
                  switch (_context6.prev = _context6.next) {
                    case 0:
                      _context6.next = 2;
                      return this.request(this.url + "/multidimensionalInfo", {
                        query: {
                          f: "json"
                        },
                        signal: e
                      }).then(function (e) {
                        var t;
                        return null == (t = e.data) ? void 0 : t.multidimensionalInfo;
                      });

                    case 2:
                      i = _context6.sent;
                      return _context6.abrupt("return", (null != (t = i.variables) && t.length && i.variables.forEach(function (e) {
                        var t;
                        null != (t = e.statistics) && t.length && e.statistics.forEach(function (e) {
                          e.avg = e.mean, e.stddev = e.standardDeviation;
                        });
                      }), i));

                    case 4:
                    case "end":
                      return _context6.stop();
                  }
                }
              }, _callee6, this);
            }));

            function _fetchMultidimensionalInfo(_x9) {
              return _fetchMultidimensionalInfo2.apply(this, arguments);
            }

            return _fetchMultidimensionalInfo;
          }()
        }]);

        return g;
      }(_BaseRaster_js__WEBPACK_IMPORTED_MODULE_23__["default"]);

      Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_5__["property"])({
        type: String,
        json: {
          write: !0
        }
      })], g.prototype, "datasetFormat", void 0), Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_5__["property"])()], g.prototype, "tileType", void 0), g = Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_subclass_js__WEBPACK_IMPORTED_MODULE_6__["subclass"])("esri.layers.support.rasterDatasets.ImageServerRaster")], g);
      var v = g;
      /* harmony default export */

      __webpack_exports__["default"] = v;
      /***/
    },

    /***/
    "6Xnn":
    /*!******************************************************************************!*\
      !*** ./node_modules/@arcgis/core/layers/support/rasterDatasets/MRFRaster.js ***!
      \******************************************************************************/

    /*! exports provided: default */

    /***/
    function Xnn(module, __webpack_exports__, __webpack_require__) {
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


      var _core_maybe_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ../../../core/maybe.js */
      "srIe");
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


      var _core_accessorSupport_decorators_subclass_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ../../../core/accessorSupport/decorators/subclass.js */
      "04ZG");
      /* harmony import */


      var _core_Error_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! ../../../core/Error.js */
      "zlDU");
      /* harmony import */


      var _core_urlUtils_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! ../../../core/urlUtils.js */
      "4EHJ");
      /* harmony import */


      var _core_uuid_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! ../../../core/uuid.js */
      "ju1D");
      /* harmony import */


      var _portal_support_resourceExtension_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
      /*! ../../../portal/support/resourceExtension.js */
      "9AIY");
      /* harmony import */


      var _core_promiseUtils_js__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
      /*! ../../../core/promiseUtils.js */
      "9MzC");
      /* harmony import */


      var _geometry_SpatialReference_js__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
      /*! ../../../geometry/SpatialReference.js */
      "WZb1");
      /* harmony import */


      var _geometry_Point_js__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
      /*! ../../../geometry/Point.js */
      "SuVq");
      /* harmony import */


      var _geometry_Extent_js__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(
      /*! ../../../geometry/Extent.js */
      "OvF4");
      /* harmony import */


      var _geometry_js__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(
      /*! ../../../geometry.js */
      "4GrV");
      /* harmony import */


      var _PixelBlock_js__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(
      /*! ../PixelBlock.js */
      "Piei");
      /* harmony import */


      var _RasterInfo_js__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(
      /*! ../RasterInfo.js */
      "pPNP");
      /* harmony import */


      var _rasterFormats_utils_js__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(
      /*! ../rasterFormats/utils.js */
      "5VpP");
      /* harmony import */


      var _rasterFunctions_pixelUtils_js__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(
      /*! ../rasterFunctions/pixelUtils.js */
      "ne7T");
      /* harmony import */


      var _RasterStorageInfo_js__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(
      /*! ../RasterStorageInfo.js */
      "U9Ns");
      /* harmony import */


      var _BaseRaster_js__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(
      /*! ./BaseRaster.js */
      "HKGE");
      /* harmony import */


      var _xmlUtilities_js__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(
      /*! ./xmlUtilities.js */
      "UjpV");
      /* harmony import */


      var _pamParser_js__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(
      /*! ./pamParser.js */
      "VO3a");
      /*
      All material copyright ESRI, All Rights Reserved, unless otherwise specified.
      See https://js.arcgis.com/4.18/esri/copyright.txt for details.
      */


      var w = new Map();
      w.set("Int8", "s8"), w.set("UInt8", "u8"), w.set("Int16", "s16"), w.set("UInt16", "u16"), w.set("Int32", "s32"), w.set("UInt32", "u32"), w.set("Float32", "f32"), w.set("Float64", "f32"), w.set("Double64", "f32");
      var I = new Map();
      I.set("lerc", ".lrc"), I.set("none", ".til"), I.set("deflate", ".pzp"), I.set("jpeg", ".jzp");

      var b = /*#__PURE__*/function (_BaseRaster_js__WEBPA2) {
        _inherits(b, _BaseRaster_js__WEBPA2);

        var _super2 = _createSuper(b);

        function b() {
          var _this3;

          _classCallCheck(this, b);

          _this3 = _super2.apply(this, arguments), _this3._files = null, _this3._storageIndex = null, _this3.datasetFormat = "MRF";
          return _this3;
        }

        _createClass(b, [{
          key: "open",
          value: function () {
            var _open2 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee7(t) {
              var s, o, i, _this$_parseHeader, a, n, e, l, p, c, f, m, u, _this$rasterInfo$stor, g, d, y, x, _this$rasterInfo2, w, I, _b, M, j;

              return regeneratorRuntime.wrap(function _callee7$(_context7) {
                while (1) {
                  switch (_context7.prev = _context7.next) {
                    case 0:
                      _context7.next = 2;
                      return this.init();

                    case 2:
                      this.datasetName = this.url.slice(this.url.lastIndexOf("/") + 1);
                      o = t ? Object(_core_maybe_js__WEBPACK_IMPORTED_MODULE_2__["unwrap"])(t.signal) : null;
                      _context7.next = 6;
                      return this.request(this.url, {
                        responseType: "xml",
                        signal: o
                      });

                    case 6:
                      i = _context7.sent;
                      _this$_parseHeader = this._parseHeader(i.data);
                      a = _this$_parseHeader.rasterInfo;
                      n = _this$_parseHeader.files;

                      if (!(-1 === (null == (s = this.ioConfig.skipExtensions) ? void 0 : s.indexOf("aux.xml")))) {
                        _context7.next = 15;
                        break;
                      }

                      _context7.next = 13;
                      return this._fetchAuxiliaryData(t);

                    case 13:
                      e = _context7.sent;
                      if (null != e) a.statistics = null != (l = e.statistics) ? l : a.statistics, a.histograms = e.histograms, e.histograms && !Object(_core_maybe_js__WEBPACK_IMPORTED_MODULE_2__["isSome"])(a.statistics) && (a.statistics = Object(_rasterFunctions_pixelUtils_js__WEBPACK_IMPORTED_MODULE_19__["estimateStatisticsFromHistograms"])(e.histograms));

                    case 15:
                      this._set("rasterInfo", a), this._files = n;
                      _context7.next = 18;
                      return this.request(n.index, {
                        responseType: "array-buffer",
                        signal: o
                      });

                    case 18:
                      p = _context7.sent;
                      this._storageIndex = this._parseIndex(p.data);
                      m = 0, u = -1;
                      _this$rasterInfo$stor = this.rasterInfo.storageInfo, g = _this$rasterInfo$stor.blockWidth, d = _this$rasterInfo$stor.blockHeight, y = _this$rasterInfo$stor.compression, x = this.rasterInfo.storageInfo.pyramidScalingFactor, _this$rasterInfo2 = this.rasterInfo, w = _this$rasterInfo2.width, I = _this$rasterInfo2.height, _b = _this$rasterInfo2.bandCount, M = [], j = "none" === y ? 1 : _b;

                      for (; m < this._storageIndex.length;) {
                        u++, c = Math.ceil(w / g / Math.pow(x, u)), f = Math.ceil(I / d / Math.pow(x, u)), m += c * f * j * 4, M.push({
                          maxRow: f,
                          maxCol: c,
                          minCol: 0,
                          minRow: 0
                        });
                      }

                      this.rasterInfo.storageInfo.blockBoundary = M, u > 0 && (this.rasterInfo.storageInfo.firstPyramidLevel = 1, this.rasterInfo.storageInfo.maximumPyramidLevel = u), this.updateTileInfo();

                    case 24:
                    case "end":
                      return _context7.stop();
                  }
                }
              }, _callee7, this);
            }));

            function open(_x10) {
              return _open2.apply(this, arguments);
            }

            return open;
          }()
        }, {
          key: "fetchRawTile",
          value: function () {
            var _fetchRawTile2 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee8(t, e, r) {
              var s,
                  _this$rasterInfo$stor2,
                  o,
                  i,
                  n,
                  l,
                  p,
                  _this$rasterInfo3,
                  f,
                  m,
                  _this$_getTileLocatio,
                  h,
                  u,
                  g,
                  _t,
                  d,
                  y,
                  x,
                  w,
                  I,
                  _b2,
                  M,
                  j,
                  A,
                  R,
                  _,
                  F,
                  _t2,
                  _args8 = arguments;

              return regeneratorRuntime.wrap(function _callee8$(_context8) {
                while (1) {
                  switch (_context8.prev = _context8.next) {
                    case 0:
                      s = _args8.length > 3 && _args8[3] !== undefined ? _args8[3] : {};
                      _this$rasterInfo$stor2 = this.rasterInfo.storageInfo, o = _this$rasterInfo$stor2.blockWidth, i = _this$rasterInfo$stor2.blockHeight, n = _this$rasterInfo$stor2.blockBoundary, l = _this$rasterInfo$stor2.compression, p = n[t];

                      if (!(!p || p.maxRow < e || p.maxCol < r || p.minRow > e || p.minCol > r)) {
                        _context8.next = 4;
                        break;
                      }

                      return _context8.abrupt("return", null);

                    case 4:
                      _this$rasterInfo3 = this.rasterInfo, f = _this$rasterInfo3.bandCount, m = _this$rasterInfo3.pixelType, _this$_getTileLocatio = this._getTileLocation(t, e, r), h = _this$_getTileLocatio.ranges, u = _this$_getTileLocatio.actualTileWidth, g = _this$_getTileLocatio.actualTileHeight;

                      if (!(!h || 0 === h.length)) {
                        _context8.next = 7;
                        break;
                      }

                      return _context8.abrupt("return", null);

                    case 7:
                      if (!(0 === h[0].from && 0 === h[0].to)) {
                        _context8.next = 10;
                        break;
                      }

                      _t = new Uint8Array(o * i);
                      return _context8.abrupt("return", new _PixelBlock_js__WEBPACK_IMPORTED_MODULE_16__["default"]({
                        width: o,
                        height: i,
                        pixels: null,
                        mask: _t,
                        validPixelCount: 0
                      }));

                    case 10:
                      d = this.ioConfig.bandIds, y = "none" === l ? 1 : f, x = [];
                      w = 0;

                      for (w = 0; w < y; w++) {
                        (!d || d.indexOf[w] > -1) && x.push(this.request(this._files.data, {
                          range: {
                            from: h[w].from,
                            to: h[w].to
                          },
                          responseType: "array-buffer",
                          signal: s.signal
                        }));
                      }

                      _context8.next = 15;
                      return Object(_core_promiseUtils_js__WEBPACK_IMPORTED_MODULE_11__["all"])(x);

                    case 15:
                      I = _context8.sent;
                      _b2 = I.map(function (t) {
                        return t.data.byteLength;
                      }).reduce(function (t, e) {
                        return t + e;
                      });
                      M = new Uint8Array(_b2);
                      j = 0;

                      for (w = 0; w < y; w++) {
                        M.set(new Uint8Array(I[w].data), j), j += I[w].data.byteLength;
                      }

                      A = "lerc" === this.rasterInfo.storageInfo.compression ? "lerc" : "bip";
                      _context8.next = 23;
                      return this.decodePixelBlock(M.buffer, {
                        width: o,
                        height: i,
                        format: A,
                        pixelType: m
                      });

                    case 23:
                      R = _context8.sent;
                      _ = 0, F = 0;

                      if (u !== o || g !== i) {
                        _t2 = R.mask;
                        if (_t2) for (w = 0; w < i; w++) {
                          if (F = w * o, w < g) for (_ = u; _ < o; _++) {
                            _t2[F + _] = 0;
                          } else for (_ = 0; _ < o; _++) {
                            _t2[F + _] = 0;
                          }
                        } else for (_t2 = new Uint8Array(o * i), R.mask = _t2, w = 0; w < g; w++) {
                          for (F = w * o, _ = 0; _ < u; _++) {
                            _t2[F + _] = 1;
                          }
                        }
                      }

                      return _context8.abrupt("return", R);

                    case 27:
                    case "end":
                      return _context8.stop();
                  }
                }
              }, _callee8, this);
            }));

            function fetchRawTile(_x11, _x12, _x13) {
              return _fetchRawTile2.apply(this, arguments);
            }

            return fetchRawTile;
          }()
        }, {
          key: "_parseIndex",
          value: function _parseIndex(t) {
            if (t.byteLength % 16 > 0) throw "invalid array buffer must be multiples of 16";
            var e, r, s, o, i, a;

            if (_rasterFormats_utils_js__WEBPACK_IMPORTED_MODULE_18__["isPlatformLittleEndian"]) {
              for (r = new Uint8Array(t), o = new ArrayBuffer(t.byteLength), s = new Uint8Array(o), i = 0; i < t.byteLength / 4; i++) {
                for (a = 0; a < 4; a++) {
                  s[4 * i + a] = r[4 * i + 3 - a];
                }
              }

              e = new Uint32Array(o);
            } else e = new Uint32Array(t);

            return e;
          }
        }, {
          key: "_getTileLocation",
          value: function _getTileLocation(t, e, r) {
            var _this$rasterInfo$stor3 = this.rasterInfo.storageInfo,
                s = _this$rasterInfo$stor3.blockWidth,
                o = _this$rasterInfo$stor3.blockHeight,
                i = _this$rasterInfo$stor3.pyramidScalingFactor,
                a = _this$rasterInfo$stor3.compression,
                _this$rasterInfo4 = this.rasterInfo,
                n = _this$rasterInfo4.width,
                l = _this$rasterInfo4.height,
                p = _this$rasterInfo4.bandCount,
                c = "none" === a ? 1 : p;
            var f,
                m,
                h,
                u = 0,
                g = 0;

            for (h = 0; h < t; h++) {
              g = Math.pow(i, h), f = Math.ceil(n / s / g), m = Math.ceil(l / o / g), u += f * m;
            }

            g = Math.pow(i, t), f = Math.ceil(n / s / g), m = Math.ceil(l / o / g), u += e * f + r, u *= 4 * c;

            var d = this._storageIndex.subarray(u, u + 4 * c);

            var y = 0,
                x = 0;
            var w = [];

            for (var _t3 = 0; _t3 < c; _t3++) {
              y = d[4 * _t3 + 0] * Math.pow(2, 32) + d[4 * _t3 + 1], x = y + d[4 * _t3 + 2] * Math.pow(2, 32) + d[4 * _t3 + 3], w.push({
                from: y,
                to: x
              });
            }

            return {
              ranges: w,
              actualTileWidth: r < f - 1 ? s : Math.ceil(n / g) - s * (f - 1),
              actualTileHeight: e < m - 1 ? o : Math.ceil(l / g) - o * (m - 1)
            };
          }
        }, {
          key: "_parseHeader",
          value: function _parseHeader(t) {
            var e = Object(_xmlUtilities_js__WEBPACK_IMPORTED_MODULE_22__["getElement"])(t, "MRF_META/Raster");
            if (!e) throw new _core_Error_js__WEBPACK_IMPORTED_MODULE_7__["default"]("mrf:open", "not a valid MRF format");
            var r = Object(_xmlUtilities_js__WEBPACK_IMPORTED_MODULE_22__["getElement"])(e, "Size"),
                s = parseInt(r.getAttribute("x"), 10),
                o = parseInt(r.getAttribute("y"), 10),
                a = parseInt(r.getAttribute("c"), 10),
                c = (Object(_xmlUtilities_js__WEBPACK_IMPORTED_MODULE_22__["getElementValue"])(e, "Compression") || "none").toLowerCase();
            if (!c || -1 === ["none", "lerc"].indexOf(c)) throw new _core_Error_js__WEBPACK_IMPORTED_MODULE_7__["default"]("mrf:open", "currently does not support compression " + c);
            var m = Object(_xmlUtilities_js__WEBPACK_IMPORTED_MODULE_22__["getElementValue"])(e, "DataType") || "UInt8",
                h = w.get(m);
            if (null == h) throw new _core_Error_js__WEBPACK_IMPORTED_MODULE_7__["default"]("mrf:open", "currently does not support pixel type " + m);

            var g = Object(_xmlUtilities_js__WEBPACK_IMPORTED_MODULE_22__["getElement"])(e, "PageSize"),
                x = parseInt(g.getAttribute("x"), 10),
                _b3 = parseInt(g.getAttribute("y"), 10),
                M = Object(_xmlUtilities_js__WEBPACK_IMPORTED_MODULE_22__["getElement"])(e, "DataValues");

            var j, A;
            M && (A = M.getAttribute("NoData"), null != A && (j = A.trim().split(" ").map(function (t) {
              return parseFloat(t);
            })));
            if (Object(_xmlUtilities_js__WEBPACK_IMPORTED_MODULE_22__["getElement"])(t, "MRF_META/CachedSource")) throw new _core_Error_js__WEBPACK_IMPORTED_MODULE_7__["default"]("mrf:open", "currently does not support MRF referencing other data files");

            var R = Object(_xmlUtilities_js__WEBPACK_IMPORTED_MODULE_22__["getElement"])(t, "MRF_META/GeoTags"),
                _ = Object(_xmlUtilities_js__WEBPACK_IMPORTED_MODULE_22__["getElement"])(R, "BoundingBox");

            if (null == _) throw new _core_Error_js__WEBPACK_IMPORTED_MODULE_7__["default"]("mrf:open", "missing node MRF_META/GeoTags/BoundingBox");
            var F = parseFloat(_.getAttribute("minx")),
                T = parseFloat(_.getAttribute("miny")),
                k = parseFloat(_.getAttribute("maxx")),
                C = parseFloat(_.getAttribute("maxy")),
                U = Object(_xmlUtilities_js__WEBPACK_IMPORTED_MODULE_22__["getElementValue"])(R, "Projection"),
                S = Object(_xmlUtilities_js__WEBPACK_IMPORTED_MODULE_22__["getElementValue"])(t, "datafile"),
                v = Object(_xmlUtilities_js__WEBPACK_IMPORTED_MODULE_22__["getElementValue"])(t, "IndexFile");
            var L;
            "LOCAL_CS[]" !== U && (L = new _geometry_SpatialReference_js__WEBPACK_IMPORTED_MODULE_12__["default"]({
              wkt: U
            }));
            var B = new _geometry_Extent_js__WEBPACK_IMPORTED_MODULE_14__["default"](F, T, k, C);
            B.spatialReference = L;
            var E = Object(_xmlUtilities_js__WEBPACK_IMPORTED_MODULE_22__["getElement"])(t, "MRF_META/Rsets"),
                H = parseInt(E && E.getAttribute("scale") || "2", 10),
                P = new _RasterStorageInfo_js__WEBPACK_IMPORTED_MODULE_20__["default"]({
              origin: new _geometry_Point_js__WEBPACK_IMPORTED_MODULE_13__["default"]({
                x: B.xmin,
                y: B.ymax,
                spatialReference: L
              }),
              blockWidth: x,
              blockHeight: _b3,
              pyramidBlockWidth: x,
              pyramidBlockHeight: _b3,
              compression: c,
              pyramidScalingFactor: H
            }),
                D = new _geometry_Point_js__WEBPACK_IMPORTED_MODULE_13__["default"]({
              x: (k - F) / s,
              y: (C - T) / o,
              spatialReference: L
            });
            return {
              rasterInfo: new _RasterInfo_js__WEBPACK_IMPORTED_MODULE_17__["default"]({
                width: s,
                height: o,
                extent: B,
                spatialReference: L,
                bandCount: a,
                pixelType: h,
                pixelSize: D,
                noDataValue: j,
                storageInfo: P
              }),
              files: {
                mrf: this.url,
                index: v || this.url.replace(".mrf", ".idx"),
                data: S || this.url.replace(".mrf", I.get(c))
              }
            };
          }
        }, {
          key: "_fetchAuxiliaryData",
          value: function () {
            var _fetchAuxiliaryData2 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee9(t) {
              var _yield$this$request2, e;

              return regeneratorRuntime.wrap(function _callee9$(_context9) {
                while (1) {
                  switch (_context9.prev = _context9.next) {
                    case 0:
                      _context9.prev = 0;
                      _context9.next = 3;
                      return this.request(this.url + ".aux.xml", {
                        responseType: "xml",
                        signal: null == t ? void 0 : t.signal
                      });

                    case 3:
                      _yield$this$request2 = _context9.sent;
                      e = _yield$this$request2.data;
                      return _context9.abrupt("return", Object(_pamParser_js__WEBPACK_IMPORTED_MODULE_23__["parsePAMInfo"])(e));

                    case 8:
                      _context9.prev = 8;
                      _context9.t0 = _context9["catch"](0);
                      return _context9.abrupt("return", null);

                    case 11:
                    case "end":
                      return _context9.stop();
                  }
                }
              }, _callee9, this, [[0, 8]]);
            }));

            function _fetchAuxiliaryData(_x14) {
              return _fetchAuxiliaryData2.apply(this, arguments);
            }

            return _fetchAuxiliaryData;
          }()
        }]);

        return b;
      }(_BaseRaster_js__WEBPACK_IMPORTED_MODULE_21__["default"]);

      Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_5__["property"])()], b.prototype, "_files", void 0), Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_5__["property"])()], b.prototype, "_storageIndex", void 0), Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_5__["property"])({
        type: String,
        json: {
          write: !0
        }
      })], b.prototype, "datasetFormat", void 0), b = Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_subclass_js__WEBPACK_IMPORTED_MODULE_6__["subclass"])("esri.layers.support.rasterIO.MRFRaster")], b);
      var M = b;
      /* harmony default export */

      __webpack_exports__["default"] = M;
      /***/
    },

    /***/
    "HKGE":
    /*!*******************************************************************************!*\
      !*** ./node_modules/@arcgis/core/layers/support/rasterDatasets/BaseRaster.js ***!
      \*******************************************************************************/

    /*! exports provided: default */

    /***/
    function HKGE(module, __webpack_exports__, __webpack_require__) {
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


      var _core_maybe_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ../../../core/maybe.js */
      "srIe");
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


      var _core_accessorSupport_decorators_subclass_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ../../../core/accessorSupport/decorators/subclass.js */
      "04ZG");
      /* harmony import */


      var _core_Error_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! ../../../core/Error.js */
      "zlDU");
      /* harmony import */


      var _core_urlUtils_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! ../../../core/urlUtils.js */
      "4EHJ");
      /* harmony import */


      var _core_uuid_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! ../../../core/uuid.js */
      "ju1D");
      /* harmony import */


      var _portal_support_resourceExtension_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
      /*! ../../../portal/support/resourceExtension.js */
      "9AIY");
      /* harmony import */


      var _core_promiseUtils_js__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
      /*! ../../../core/promiseUtils.js */
      "9MzC");
      /* harmony import */


      var _core_JSONSupport_js__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
      /*! ../../../core/JSONSupport.js */
      "ag7Y");
      /* harmony import */


      var _geometry_Point_js__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
      /*! ../../../geometry/Point.js */
      "SuVq");
      /* harmony import */


      var _geometry_Extent_js__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(
      /*! ../../../geometry/Extent.js */
      "OvF4");
      /* harmony import */


      var _geometry_js__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(
      /*! ../../../geometry.js */
      "4GrV");
      /* harmony import */


      var _request_js__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(
      /*! ../../../request.js */
      "Lqtk");
      /* harmony import */


      var _core_Promise_js__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(
      /*! ../../../core/Promise.js */
      "+rMe");
      /* harmony import */


      var _arcgisLayerUrl_js__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(
      /*! ../arcgisLayerUrl.js */
      "VLTf");
      /* harmony import */


      var _commonProperties_js__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(
      /*! ../commonProperties.js */
      "IvSi");
      /* harmony import */


      var _TileInfo_js__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(
      /*! ../TileInfo.js */
      "3/ME");
      /* harmony import */


      var _rasterFormats_RasterCodec_js__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(
      /*! ../rasterFormats/RasterCodec.js */
      "FFFX");
      /* harmony import */


      var _rasterFunctions_pixelUtils_js__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(
      /*! ../rasterFunctions/pixelUtils.js */
      "ne7T");
      /* harmony import */


      var _RasterStorageInfo_js__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(
      /*! ../RasterStorageInfo.js */
      "U9Ns");
      /* harmony import */


      var _rasterFunctions_rasterProjectionHelper_js__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(
      /*! ../rasterFunctions/rasterProjectionHelper.js */
      "tODX");
      /* harmony import */


      var _RawBlockCache_js__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(
      /*! ./RawBlockCache.js */
      "IYxN");
      /*
      All material copyright ESRI, All Rights Reserved, unless otherwise specified.
      See https://js.arcgis.com/4.18/esri/copyright.txt for details.
      */


      var H = /*#__PURE__*/function (_Object) {
        _inherits(H, _Object);

        var _super3 = _createSuper(H);

        function H() {
          var _this4;

          _classCallCheck(this, H);

          _this4 = _super3.apply(this, arguments), _this4.rasterJobHandler = null, _this4.datasetName = null, _this4.datasetFormat = null, _this4.rasterInfo = null, _this4.ioConfig = {
            sampling: "closest"
          };
          return _this4;
        }

        _createClass(H, [{
          key: "init",
          value: function () {
            var _init = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee10() {
              var e;
              return regeneratorRuntime.wrap(function _callee10$(_context10) {
                while (1) {
                  switch (_context10.prev = _context10.next) {
                    case 0:
                      e = Object(_rasterFunctions_rasterProjectionHelper_js__WEBPACK_IMPORTED_MODULE_24__["load"])();
                      this.addResolvingPromise(e);
                      _context10.next = 4;
                      return this.when();

                    case 4:
                    case "end":
                      return _context10.stop();
                  }
                }
              }, _callee10, this);
            }));

            function init() {
              return _init.apply(this, arguments);
            }

            return init;
          }()
        }, {
          key: "normalizeCtorArgs",
          value: function normalizeCtorArgs(e) {
            return e && e.ioConfig && (e = _objectSpread(_objectSpread({}, e), {}, {
              ioConfig: _objectSpread({
                resolution: null,
                bandIds: null,
                sampling: "closest",
                tileInfo: _TileInfo_js__WEBPACK_IMPORTED_MODULE_20__["default"].create()
              }, e.ioConfig)
            })), e;
          }
        }, {
          key: "url",
          set: function set(e) {
            this._set("url", Object(_arcgisLayerUrl_js__WEBPACK_IMPORTED_MODULE_18__["sanitizeUrl"])(e, _core_Logger_js__WEBPACK_IMPORTED_MODULE_3__["default"].getLogger(this.declaredClass)));
          }
        }, {
          key: "open",
          value: function () {
            var _open3 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee11(e) {
              return regeneratorRuntime.wrap(function _callee11$(_context11) {
                while (1) {
                  switch (_context11.prev = _context11.next) {
                    case 0:
                      throw new _core_Error_js__WEBPACK_IMPORTED_MODULE_7__["default"]("BaseRaster:open-not-implemented", "open() is not implemented");

                    case 1:
                    case "end":
                      return _context11.stop();
                  }
                }
              }, _callee11);
            }));

            function open(_x15) {
              return _open3.apply(this, arguments);
            }

            return open;
          }()
        }, {
          key: "fetchTile",
          value: function () {
            var _fetchTile = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee12(e, r, o) {
              var i,
                  n,
                  _i2,
                  s,
                  a,
                  l,
                  c,
                  _args12 = arguments;

              return regeneratorRuntime.wrap(function _callee12$(_context12) {
                while (1) {
                  switch (_context12.prev = _context12.next) {
                    case 0:
                      i = _args12.length > 3 && _args12[3] !== undefined ? _args12[3] : {};
                      _i2 = i, s = _i2.tileInfo, a = s.lodAt(e), l = new _geometry_Point_js__WEBPACK_IMPORTED_MODULE_13__["default"]({
                        x: a.resolution,
                        y: a.resolution,
                        spatialReference: s.spatialReference
                      }), c = this.getTileExtent(l, r, o, s);
                      return _context12.abrupt("return", (null != (n = i.multidimensionalDefinition) && n.length && Object(_core_maybe_js__WEBPACK_IMPORTED_MODULE_2__["isSome"])(this.rasterInfo.multidimensionalInfo) && null == i.sliceId && (i = _objectSpread(_objectSpread({}, i), {}, {
                        sliceId: this.getSliceIndex(i.multidimensionalDefinition) || 0
                      })), this.fetchPixels(c, s.size[0], s.size[1], i)));

                    case 3:
                    case "end":
                      return _context12.stop();
                  }
                }
              }, _callee12, this);
            }));

            function fetchTile(_x16, _x17, _x18) {
              return _fetchTile.apply(this, arguments);
            }

            return fetchTile;
          }()
        }, {
          key: "identify",
          value: function () {
            var _identify = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee13(e) {
              var r,
                  _this$rasterInfo5,
                  o,
                  i,
                  n,
                  s,
                  a,
                  l,
                  c,
                  u,
                  m,
                  f,
                  h,
                  d,
                  p,
                  x,
                  y,
                  _args13 = arguments;

              return regeneratorRuntime.wrap(function _callee13$(_context13) {
                while (1) {
                  switch (_context13.prev = _context13.next) {
                    case 0:
                      r = _args13.length > 1 && _args13[1] !== undefined ? _args13[1] : {};
                      _this$rasterInfo5 = this.rasterInfo, o = _this$rasterInfo5.spatialReference, i = _this$rasterInfo5.extent, n = r.datumTransformation, s = Object(_rasterFunctions_rasterProjectionHelper_js__WEBPACK_IMPORTED_MODULE_24__["projectPoint"])(e, o, n);

                      if (i.intersects(s)) {
                        _context13.next = 4;
                        break;
                      }

                      return _context13.abrupt("return", {
                        location: s,
                        value: null
                      });

                    case 4:
                      a = 0;

                      if (!r.srcResolution) {
                        _context13.next = 9;
                        break;
                      }

                      a = Object(_rasterFunctions_rasterProjectionHelper_js__WEBPACK_IMPORTED_MODULE_24__["snapPyramid"])(r.srcResolution, this.rasterInfo, this.ioConfig.sampling).pyramidLevel;
                      _context13.next = 14;
                      break;

                    case 9:
                      _context13.next = 11;
                      return this.computeBestPyramidLevelForLocation(e, r);

                    case 11:
                      a = _context13.sent;

                      if (!(null == a)) {
                        _context13.next = 14;
                        break;
                      }

                      return _context13.abrupt("return", {
                        location: s,
                        value: null
                      });

                    case 14:
                      l = this.identifyPixelLocation(s, a, null);

                      if (!(null === l)) {
                        _context13.next = 17;
                        break;
                      }

                      return _context13.abrupt("return", {
                        location: s,
                        value: null
                      });

                    case 17:
                      c = l.row, u = l.col, m = l.rowOffset, f = l.colOffset, h = Object(_RawBlockCache_js__WEBPACK_IMPORTED_MODULE_25__["getRasterId"])(this.url, r.sliceId), d = "".concat(a, "/").concat(c, "/").concat(u);
                      p = Object(_RawBlockCache_js__WEBPACK_IMPORTED_MODULE_25__["getBlock"])(h, null, d);
                      Object(_core_maybe_js__WEBPACK_IMPORTED_MODULE_2__["isSome"])(p) || (p = this.fetchRawTile(a, c, u, r), Object(_RawBlockCache_js__WEBPACK_IMPORTED_MODULE_25__["putBlock"])(h, null, d, p));
                      _context13.next = 22;
                      return p;

                    case 22:
                      x = _context13.sent;

                      if (x && x.pixels && x.pixels.length > 0) {
                        _context13.next = 25;
                        break;
                      }

                      return _context13.abrupt("return", {
                        location: s,
                        value: null
                      });

                    case 25:
                      y = m * this.rasterInfo.storageInfo.blockHeight + f;
                      return _context13.abrupt("return", {
                        location: s,
                        value: !x.mask || x.mask[y] ? x.pixels.map(function (e) {
                          return e[y];
                        }) : null,
                        pyramidLevel: a
                      });

                    case 27:
                    case "end":
                      return _context13.stop();
                  }
                }
              }, _callee13, this);
            }));

            function identify(_x19) {
              return _identify.apply(this, arguments);
            }

            return identify;
          }()
        }, {
          key: "fetchPixels",
          value: function () {
            var _fetchPixels = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee14(e, t, o) {
              var i,
                  n,
                  s,
                  a,
                  l,
                  c,
                  u,
                  _Object2,
                  m,
                  f,
                  d,
                  p,
                  x,
                  y,
                  g,
                  w,
                  I,
                  v,
                  k,
                  b,
                  T,
                  F,
                  S,
                  L,
                  D,
                  _H,
                  z,
                  _e6,
                  _args14 = arguments;

              return regeneratorRuntime.wrap(function _callee14$(_context14) {
                while (1) {
                  switch (_context14.prev = _context14.next) {
                    case 0:
                      i = _args14.length > 3 && _args14[3] !== undefined ? _args14[3] : {};
                      n = e.clone().normalize();
                      e = n[0];
                      s = this.rasterInfo.spatialReference, a = !e.spatialReference.equals(s), l = i.datumTransformation, c = new _geometry_Point_js__WEBPACK_IMPORTED_MODULE_13__["default"]({
                        x: (e.xmax - e.xmin) / t,
                        y: (e.ymax - e.ymin) / o,
                        spatialReference: e.spatialReference
                      }), u = i.srcResolution || (a ? Object(_rasterFunctions_rasterProjectionHelper_js__WEBPACK_IMPORTED_MODULE_24__["projectResolution"])(c, s, e, l) : c);

                      if (u) {
                        _context14.next = 6;
                        break;
                      }

                      return _context14.abrupt("return", null);

                    case 6:
                      _Object2 = Object(_rasterFunctions_rasterProjectionHelper_js__WEBPACK_IMPORTED_MODULE_24__["snapPyramid"])(u, this.rasterInfo, this.ioConfig.sampling), m = _Object2.pyramidLevel, f = _Object2.pyramidResolution, d = _Object2.excessiveReading;

                      if (!d) {
                        _context14.next = 9;
                        break;
                      }

                      return _context14.abrupt("return", null);

                    case 9:
                      p = this.rasterInfo.storageInfo;
                      x = a ? Object(_rasterFunctions_rasterProjectionHelper_js__WEBPACK_IMPORTED_MODULE_24__["projectExtent"])(e, s, l) : e;
                      y = Object(_core_maybe_js__WEBPACK_IMPORTED_MODULE_2__["unwrap"])(this.rasterInfo.transform);

                      if (!(y && (x = y.inverseTransform(x)), null == x)) {
                        _context14.next = 14;
                        break;
                      }

                      return _context14.abrupt("return", null);

                    case 14:
                      g = {
                        x: Math.floor((x.xmin - p.origin.x) / f.x + .1),
                        y: Math.floor((p.origin.y - x.ymax) / f.y + .1)
                      }, w = Math.ceil((x.xmax - x.xmin) / f.x - .1), I = Math.ceil((x.ymax - x.ymin) / f.y - .1);

                      if (!(w / t > 8 || I / o > 8)) {
                        _context14.next = 17;
                        break;
                      }

                      return _context14.abrupt("return", null);

                    case 17:
                      _context14.next = 19;
                      return this.fetchRawPixels(m, g, {
                        width: w,
                        height: I
                      }, i);

                    case 19:
                      v = _context14.sent;

                      if (v) {
                        _context14.next = 22;
                        break;
                      }

                      return _context14.abrupt("return", null);

                    case 22:
                      k = m > 0 ? p.pyramidBlockWidth : p.blockWidth, b = m > 0 ? p.pyramidBlockHeight : p.blockHeight;

                      if (!(!a && 1 === v.pixelBlocks.length && k === t && b === o && u.x === c.x && u.y === c.y)) {
                        _context14.next = 25;
                        break;
                      }

                      return _context14.abrupt("return", {
                        extent: e,
                        srcExtent: x,
                        pixelBlock: v.pixelBlocks[0],
                        transformGrid: null
                      });

                    case 25:
                      T = Object(_rasterFunctions_rasterProjectionHelper_js__WEBPACK_IMPORTED_MODULE_24__["getProjectionOffsetGrid"])(e, v.extent, c, l, y);
                      S = !i.requestRawData, L = {
                        rows: T.spacing[0],
                        cols: T.spacing[1]
                      }, D = v.pixelBlocks, _H = v.mosaicSize, z = v.isPartiallyFilled;

                      if (!this.rasterJobHandler) {
                        _context14.next = 33;
                        break;
                      }

                      _context14.next = 30;
                      return this.rasterJobHandler.mosaicAndTransform({
                        srcPixelBlocks: D,
                        srcMosaicSize: _H,
                        destDimension: S ? {
                          width: t,
                          height: o
                        } : null,
                        coefs: S ? T.coefficients : null,
                        sampleSpacing: S ? L : null,
                        interpolation: i.interpolation
                      }, i);

                    case 30:
                      F = _context14.sent;
                      _context14.next = 35;
                      break;

                    case 33:
                      _e6 = Object(_rasterFunctions_pixelUtils_js__WEBPACK_IMPORTED_MODULE_22__["mosaic"])(D, _H);
                      F = S ? Object(_rasterFunctions_pixelUtils_js__WEBPACK_IMPORTED_MODULE_22__["approximateTransform"])(_e6, {
                        width: t,
                        height: o
                      }, T.coefficients, L, i.interpolation) : _e6;

                    case 35:
                      return _context14.abrupt("return", {
                        srcExtent: x,
                        pixelBlock: F,
                        transformGrid: T,
                        extent: e,
                        isPartiallyFilled: z
                      });

                    case 36:
                    case "end":
                      return _context14.stop();
                  }
                }
              }, _callee14, this);
            }));

            function fetchPixels(_x20, _x21, _x22) {
              return _fetchPixels.apply(this, arguments);
            }

            return fetchPixels;
          }()
        }, {
          key: "fetchRawPixels",
          value: function () {
            var _fetchRawPixels = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee15(e, t, r, o) {
              var _this$rasterInfo$stor4, i, n, s, c, u, m, f, h, p, x, y, g, w, I, M, R, v, k, b, C, _t4, _r, j, B, _this$rasterInfo6, P, T, F, S;

              return regeneratorRuntime.wrap(function _callee15$(_context15) {
                while (1) {
                  switch (_context15.prev = _context15.next) {
                    case 0:
                      _this$rasterInfo$stor4 = this.rasterInfo.storageInfo, i = _this$rasterInfo$stor4.origin, n = _this$rasterInfo$stor4.blockBoundary, s = e > 0 ? this.rasterInfo.storageInfo.pyramidBlockWidth : this.rasterInfo.storageInfo.blockWidth, c = e > 0 ? this.rasterInfo.storageInfo.pyramidBlockHeight : this.rasterInfo.storageInfo.blockHeight;
                      u = t.x, m = t.y, f = r.width, h = r.height;
                      o.buffer && (u -= o.buffer.cols, m -= o.buffer.rows, f += 2 * o.buffer.cols, h += 2 * o.buffer.rows);
                      p = Math.floor(u / s), x = Math.floor(m / c), y = Math.floor((u + f - 1) / s), g = Math.floor((m + h - 1) / c), w = n[e];

                      if (w) {
                        _context15.next = 6;
                        break;
                      }

                      return _context15.abrupt("return", null);

                    case 6:
                      I = w.minRow, M = w.minCol, R = w.maxCol, v = w.maxRow;

                      if (!(g < I || y < M || x > v || p > R)) {
                        _context15.next = 9;
                        break;
                      }

                      return _context15.abrupt("return", null);

                    case 9:
                      k = [];
                      C = !1;

                      for (_t4 = x; _t4 <= g; _t4++) {
                        for (_r = p; _r <= y; _r++) {
                          _t4 >= I && _r >= M && v >= _t4 && R >= _r ? (b = this._fetchRawTile(e, _t4, _r, o), this.ioConfig.allowPartialFill && (b = Object(_core_promiseUtils_js__WEBPACK_IMPORTED_MODULE_11__["create"])(function (e) {
                            b.then(function (t) {
                              return e(t);
                            })["catch"](function () {
                              C = !0, e(null);
                            });
                          })), k.push(b)) : k.push(null);
                        }
                      }

                      if (!(0 === k.length)) {
                        _context15.next = 14;
                        break;
                      }

                      return _context15.abrupt("return", null);

                    case 14:
                      _context15.next = 16;
                      return Object(_core_promiseUtils_js__WEBPACK_IMPORTED_MODULE_11__["all"])(k);

                    case 16:
                      j = _context15.sent;
                      B = {
                        height: (g - x + 1) * s,
                        width: (y - p + 1) * c
                      };
                      _this$rasterInfo6 = this.rasterInfo;
                      P = _this$rasterInfo6.nativePixelSize;
                      T = _this$rasterInfo6.spatialReference;
                      F = P.x * Math.pow(2, e);
                      S = P.y * Math.pow(2, e);
                      return _context15.abrupt("return", {
                        extent: new _geometry_Extent_js__WEBPACK_IMPORTED_MODULE_14__["default"]({
                          xmin: i.x + p * s * F,
                          xmax: i.x + (y + 1) * s * F,
                          ymin: i.y - (g + 1) * c * S,
                          ymax: i.y - x * c * S,
                          spatialReference: T
                        }),
                        pixelBlocks: j,
                        mosaicSize: B,
                        isPartiallyFilled: C
                      });

                    case 24:
                    case "end":
                      return _context15.stop();
                  }
                }
              }, _callee15, this);
            }));

            function fetchRawPixels(_x23, _x24, _x25, _x26) {
              return _fetchRawPixels.apply(this, arguments);
            }

            return fetchRawPixels;
          }()
        }, {
          key: "fetchRawTile",
          value: function () {
            var _fetchRawTile3 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee16(e, t, r, o) {
              return regeneratorRuntime.wrap(function _callee16$(_context16) {
                while (1) {
                  switch (_context16.prev = _context16.next) {
                    case 0:
                      throw new _core_Error_js__WEBPACK_IMPORTED_MODULE_7__["default"]("BaseRaster:read-not-implemented", "fetchRawTile() is not implemented");

                    case 1:
                    case "end":
                      return _context16.stop();
                  }
                }
              }, _callee16);
            }));

            function fetchRawTile(_x27, _x28, _x29, _x30) {
              return _fetchRawTile3.apply(this, arguments);
            }

            return fetchRawTile;
          }()
        }, {
          key: "computeExtent",
          value: function computeExtent(e) {
            return Object(_rasterFunctions_rasterProjectionHelper_js__WEBPACK_IMPORTED_MODULE_24__["projectExtent"])(this.rasterInfo.extent, e);
          }
        }, {
          key: "decodePixelBlock",
          value: function decodePixelBlock(e, t) {
            return !this.rasterJobHandler || t.useCanvas ? Object(_rasterFormats_RasterCodec_js__WEBPACK_IMPORTED_MODULE_21__["decode"])(e, t) : this.rasterJobHandler.decode({
              data: e,
              options: t
            });
          }
        }, {
          key: "request",
          value: function () {
            var _request = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee17(e, t, r) {
              var o, i, n, s, a, l, c;
              return regeneratorRuntime.wrap(function _callee17$(_context17) {
                while (1) {
                  switch (_context17.prev = _context17.next) {
                    case 0:
                      n = this.ioConfig.customFetchParameters, s = t.range, a = t.query, l = t.headers;
                      r = null != (o = null != (i = r) ? i : t.retryCount) ? o : this.ioConfig.retryCount;
                      c = s ? {
                        Range: "bytes=".concat(s.from, "-").concat(s.to)
                      } : null;
                      _context17.prev = 3;
                      _context17.next = 6;
                      return Object(_request_js__WEBPACK_IMPORTED_MODULE_16__["default"])(e, _objectSpread(_objectSpread({}, t), {}, {
                        query: _objectSpread(_objectSpread({}, a), n),
                        headers: _objectSpread(_objectSpread({}, l), c)
                      }));

                    case 6:
                      return _context17.abrupt("return", _context17.sent);

                    case 9:
                      _context17.prev = 9;
                      _context17.t0 = _context17["catch"](3);

                      if (!(r > 0)) {
                        _context17.next = 13;
                        break;
                      }

                      return _context17.abrupt("return", (r--, this.request(e, t, r)));

                    case 13:
                      throw _context17.t0;

                    case 14:
                    case "end":
                      return _context17.stop();
                  }
                }
              }, _callee17, this, [[3, 9]]);
            }));

            function request(_x31, _x32, _x33) {
              return _request.apply(this, arguments);
            }

            return request;
          }()
        }, {
          key: "getSliceIndex",
          value: function getSliceIndex(e) {
            var _this5 = this;

            var r = this.rasterInfo.multidimensionalInfo;
            if (!Object(_core_maybe_js__WEBPACK_IMPORTED_MODULE_2__["isSome"])(r) || null == e || !e.length) return null;
            var o = 0;
            var i = e[0].variableName;

            var _loop = function _loop(t) {
              var n = r.variables[t],
                  s = n.dimensions;

              if (n.name !== i) {
                o += s.map(function (e) {
                  return _this5._getDimensionValuesCount(e);
                }).reduce(function (e, t) {
                  return e + t;
                });
                return "break";
              }

              var a = s.map(function (e) {
                return _this5._getDimensionValuesCount(e);
              }),
                  l = s.length;

              var _loop2 = function _loop2(_t5) {
                var r = e.filter(function (e) {
                  return e.dimensionName === s[_t5].name;
                })[0];
                if (null == r) return {
                  v: {
                    v: null
                  }
                };

                var i = Array.isArray(r.values[0]) ? r.values[0][0] : r.values[0],
                    n = _this5._getIndexFromDimensions(i, s[_t5]);

                if (-1 === n) return {
                  v: {
                    v: null
                  }
                };
                a.shift(), o += _t5 === l - 1 ? n : n * a.reduce(function (e, t) {
                  return e + t;
                });
              };

              for (var _t5 = 0; _t5 < l; _t5++) {
                var _ret2 = _loop2(_t5);

                if (typeof _ret2 === "object") return _ret2.v;
              }
            };

            for (var t = 0; t < r.variables.length; t++) {
              var _ret = _loop(t);

              if (_ret === "break") break;
              if (typeof _ret === "object") return _ret.v;
            }

            return o;
          }
        }, {
          key: "updateTileInfo",
          value: function updateTileInfo() {
            var _this$rasterInfo7 = this.rasterInfo,
                e = _this$rasterInfo7.storageInfo,
                t = _this$rasterInfo7.spatialReference,
                r = _this$rasterInfo7.extent,
                o = _this$rasterInfo7.pixelSize;

            if (!e.tileInfo) {
              var i = [],
                  n = e.maximumPyramidLevel || 0;
              var s = Math.max(o.x, o.y),
                  a = 1 / .0254 * 96 * s;

              for (var _e7 = 0; _e7 <= n; _e7++) {
                i.push({
                  level: n - _e7,
                  resolution: s,
                  scale: a
                }), s *= 2, a *= 2;
              }

              var l = new _geometry_Point_js__WEBPACK_IMPORTED_MODULE_13__["default"]({
                x: r.xmin,
                y: r.ymax,
                spatialReference: t
              });
              e.tileInfo = new _TileInfo_js__WEBPACK_IMPORTED_MODULE_20__["default"]({
                origin: l,
                size: [e.blockWidth, e.blockHeight],
                spatialReference: t,
                lods: i
              }), e.isVirtualTileInfo = !0;
            }
          }
        }, {
          key: "createRemoteDatasetStorageInfo",
          value: function createRemoteDatasetStorageInfo(e) {
            var t = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 512;
            var r = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 512;
            var o = arguments.length > 3 ? arguments[3] : undefined;
            var i = e.width,
                n = e.height,
                s = e.nativeExtent,
                a = e.pixelSize,
                l = e.spatialReference,
                c = new _geometry_Point_js__WEBPACK_IMPORTED_MODULE_13__["default"]({
              x: s.xmin,
              y: s.ymax,
              spatialReference: l
            });
            null == o && (o = Math.max(0, Math.round(Math.log(Math.max(i, n)) / Math.LN2 - 8)));

            var u = this._computeBlockBoundary(s, a, o, 512, 512);

            e.storageInfo = new _RasterStorageInfo_js__WEBPACK_IMPORTED_MODULE_23__["default"]({
              blockWidth: t,
              blockHeight: r,
              pyramidBlockWidth: t,
              pyramidBlockHeight: r,
              origin: c,
              firstPyramidLevel: 1,
              maximumPyramidLevel: o,
              blockBoundary: u
            });
          }
        }, {
          key: "computeBestPyramidLevelForLocation",
          value: function () {
            var _computeBestPyramidLevelForLocation2 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee18(e) {
              var t,
                  _args18 = arguments;
              return regeneratorRuntime.wrap(function _callee18$(_context18) {
                while (1) {
                  switch (_context18.prev = _context18.next) {
                    case 0:
                      t = _args18.length > 1 && _args18[1] !== undefined ? _args18[1] : {};
                      return _context18.abrupt("return", 0);

                    case 2:
                    case "end":
                      return _context18.stop();
                  }
                }
              }, _callee18);
            }));

            function computeBestPyramidLevelForLocation(_x34) {
              return _computeBestPyramidLevelForLocation2.apply(this, arguments);
            }

            return computeBestPyramidLevelForLocation;
          }()
        }, {
          key: "identifyPixelLocation",
          value: function identifyPixelLocation(e, t, r) {
            var _this$rasterInfo8 = this.rasterInfo,
                o = _this$rasterInfo8.spatialReference,
                i = _this$rasterInfo8.pixelSize,
                n = _this$rasterInfo8.extent,
                _this$rasterInfo$stor5 = this.rasterInfo.storageInfo,
                s = _this$rasterInfo$stor5.blockWidth,
                a = _this$rasterInfo$stor5.blockHeight,
                l = _this$rasterInfo$stor5.maximumPyramidLevel,
                c = _this$rasterInfo$stor5.pyramidScalingFactor,
                u = _this$rasterInfo$stor5.origin,
                m = Object(_rasterFunctions_rasterProjectionHelper_js__WEBPACK_IMPORTED_MODULE_24__["projectPoint"])(e, o, r);
            if (!n.intersects(m)) return null;
            if (t < 0 || t > l) return null;
            var f = Math.pow(c, t),
                h = f * i.x,
                d = f * i.y,
                p = (u.y - m.y) / d / a,
                x = (m.x - u.x) / h / s,
                y = Math.min(a - 1, Math.floor((p - Math.floor(p)) * a)),
                g = Math.min(s - 1, Math.floor((x - Math.floor(x)) * s));
            return {
              pyramidLevel: t,
              row: Math.floor(p),
              col: Math.floor(x),
              rowOffset: y,
              colOffset: g,
              srcLocation: m
            };
          }
        }, {
          key: "getTileExtent",
          value: function getTileExtent(e, t, r, o) {
            var i = o.origin,
                n = o.spatialReference,
                s = o.size[0],
                a = o.size[1],
                l = i.x + r * s * e.x,
                c = l + s * e.x,
                u = i.y - t * a * e.y,
                m = u - a * e.y;
            return new _geometry_Extent_js__WEBPACK_IMPORTED_MODULE_14__["default"]({
              xmin: l,
              xmax: c,
              ymin: m,
              ymax: u,
              spatialReference: n
            });
          }
        }, {
          key: "_computeBlockBoundary",
          value: function _computeBlockBoundary(e, t, r, o, i) {
            var n = t.x,
                s = t.y;
            var a = e.xmin,
                l = e.ymax,
                c = [{
              minCol: Math.floor((e.xmin - a + .1 * n) / o / n),
              maxCol: Math.floor((e.xmax - a - .1 * n) / o / n),
              minRow: Math.floor((l - e.ymax + .1 * s) / i / s),
              maxRow: Math.floor((l - e.ymin - .1 * s) / i / s)
            }];
            if (r > 0) for (var _t6 = 0; _t6 < r; _t6++) {
              n *= 2, s *= 2, c.push({
                minCol: Math.floor((e.xmin - a + .1 * n) / o / n),
                maxCol: Math.floor((e.xmax - a - .1 * n) / o / n),
                minRow: Math.floor((l - e.ymax + .1 * s) / i / n),
                maxRow: Math.floor((l - e.ymin - .1 * s) / i / n)
              });
            }
            return c;
          }
        }, {
          key: "_fetchRawTile",
          value: function _fetchRawTile(e, r, o, i) {
            var n = this.rasterInfo.storageInfo.blockBoundary[e];
            if (!n) return Object(_core_promiseUtils_js__WEBPACK_IMPORTED_MODULE_11__["resolve"])(null);
            var s = n.minRow,
                a = n.minCol,
                l = n.maxCol,
                f = n.maxRow;
            if (r < s || o < a || r > f || o > l) return Object(_core_promiseUtils_js__WEBPACK_IMPORTED_MODULE_11__["resolve"])(null);
            var h = Object(_RawBlockCache_js__WEBPACK_IMPORTED_MODULE_25__["getRasterId"])(this.url, i.sliceId),
                d = "".concat(e, "/").concat(r, "/").concat(o);
            var p = Object(_RawBlockCache_js__WEBPACK_IMPORTED_MODULE_25__["getBlock"])(h, i.registryId, d);

            if (!Object(_core_maybe_js__WEBPACK_IMPORTED_MODULE_2__["isSome"])(p)) {
              var t = Object(_core_promiseUtils_js__WEBPACK_IMPORTED_MODULE_11__["createAbortController"])();
              p = this.fetchRawTile(e, r, o, _objectSpread(_objectSpread({}, i), {}, {
                signal: t.signal
              })), Object(_RawBlockCache_js__WEBPACK_IMPORTED_MODULE_25__["putBlock"])(h, i.registryId, d, p, t), p["catch"](function () {
                Object(_RawBlockCache_js__WEBPACK_IMPORTED_MODULE_25__["deleteBlock"])(h, i.registryId, d);
              });
            }

            return i.signal && Object(_core_promiseUtils_js__WEBPACK_IMPORTED_MODULE_11__["onAbort"])(i, function () {
              Object(_RawBlockCache_js__WEBPACK_IMPORTED_MODULE_25__["decreaseRefCount"])(h, i.registryId, d);
            }), p;
          }
        }, {
          key: "_getIndexFromDimensions",
          value: function _getIndexFromDimensions(e, t) {
            var r = t.extent,
                o = t.interval,
                i = t.unit,
                n = t.values;
            if (null != n && n.length) return Array.isArray(n[0]) ? n.findIndex(function (t) {
              return t[0] <= e && t[1] >= e;
            }) : n.indexOf(e);
            if (e > r[1]) return -1;
            var s = r[0];
            var a = -1;

            if ("ISO8601" === i) {
              var l;

              switch ((null == (l = t.intervalUnit) ? void 0 : l.toLowerCase()) || "seconds") {
                case "seconds":
                  a = Math.round((e - s) / 1e3 / o);
                  break;

                case "minutes":
                  a = Math.round((e - s) / 6e4 / o);
                  break;

                case "hours":
                  a = Math.round((e - s) / 36e5 / o);
                  break;

                case "days":
                  a = Math.round((e - s) / 864e5 / o);
                  break;

                case "years":
                  a = Math.round((new Date(e).getUTCFullYear() - new Date(s).getUTCFullYear()) / o);
                  break;

                case "decades":
                  a = Math.round((new Date(e).getUTCFullYear() - new Date(s).getUTCFullYear()) / 10 / o);
              }

              return a;
            }

            return Math.round((e - s) / o);
          }
        }, {
          key: "_getDimensionValuesCount",
          value: function _getDimensionValuesCount(e) {
            var t = e.extent,
                r = e.interval,
                o = e.unit,
                i = e.values;
            var n = (null == i ? void 0 : i.length) || 0;
            if (n) return n;
            var s = t[0];

            if (0 === n && "ISO8601" === o) {
              var a;

              switch ((null == (a = e.intervalUnit) ? void 0 : a.toLowerCase()) || "seconds") {
                case "seconds":
                  n = Math.round((t[1] - t[0]) / 1e3 / r);
                  break;

                case "minutes":
                  n = Math.round((t[1] - t[0]) / 6e4 / r);
                  break;

                case "hours":
                  n = Math.round((t[1] - t[0]) / 36e5 / r);
                  break;

                case "days":
                  n = Math.round((t[1] - t[0]) / 864e5 / r);
                  break;

                case "years":
                  n = Math.round((new Date(t[1]).getUTCFullYear() - new Date(s).getUTCFullYear()) / r);
                  break;

                case "decades":
                  n = Math.round((new Date(t[1]).getUTCFullYear() - new Date(s).getUTCFullYear()) / 10 / r);
              }

              return n;
            }

            return Math.round((t[1] - t[0]) / r);
          }
        }]);

        return H;
      }(Object(_core_Promise_js__WEBPACK_IMPORTED_MODULE_17__["EsriPromiseMixin"])(_core_JSONSupport_js__WEBPACK_IMPORTED_MODULE_12__["JSONSupport"]));

      Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_5__["property"])(_commonProperties_js__WEBPACK_IMPORTED_MODULE_19__["url"])], H.prototype, "url", null), Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_5__["property"])({
        type: String,
        json: {
          write: !0
        }
      })], H.prototype, "datasetName", void 0), Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_5__["property"])({
        type: String,
        json: {
          write: !0
        }
      })], H.prototype, "datasetFormat", void 0), Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_5__["property"])()], H.prototype, "rasterInfo", void 0), Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_5__["property"])()], H.prototype, "ioConfig", void 0), Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_5__["property"])()], H.prototype, "sourceJSON", void 0), H = Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_subclass_js__WEBPACK_IMPORTED_MODULE_6__["subclass"])("esri.layers.support.rasterDatasets.BaseRaster")], H);
      var z = H;
      /* harmony default export */

      __webpack_exports__["default"] = z;
      /***/
    },

    /***/
    "IdsY":
    /*!***********************************************************************************!*\
      !*** ./node_modules/@arcgis/core/layers/support/rasterDatasets/ImageAuxRaster.js ***!
      \***********************************************************************************/

    /*! exports provided: default */

    /***/
    function IdsY(module, __webpack_exports__, __webpack_require__) {
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


      var _core_maybe_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ../../../core/maybe.js */
      "srIe");
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


      var _core_accessorSupport_decorators_subclass_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ../../../core/accessorSupport/decorators/subclass.js */
      "04ZG");
      /* harmony import */


      var _core_Error_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! ../../../core/Error.js */
      "zlDU");
      /* harmony import */


      var _core_urlUtils_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! ../../../core/urlUtils.js */
      "4EHJ");
      /* harmony import */


      var _core_uuid_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! ../../../core/uuid.js */
      "ju1D");
      /* harmony import */


      var _portal_support_resourceExtension_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
      /*! ../../../portal/support/resourceExtension.js */
      "9AIY");
      /* harmony import */


      var _core_promiseUtils_js__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
      /*! ../../../core/promiseUtils.js */
      "9MzC");
      /* harmony import */


      var _geometry_SpatialReference_js__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
      /*! ../../../geometry/SpatialReference.js */
      "WZb1");
      /* harmony import */


      var _geometry_Extent_js__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
      /*! ../../../geometry/Extent.js */
      "OvF4");
      /* harmony import */


      var _geometry_js__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(
      /*! ../../../geometry.js */
      "4GrV");
      /* harmony import */


      var _rasterFormats_RasterCodec_js__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(
      /*! ../rasterFormats/RasterCodec.js */
      "FFFX");
      /* harmony import */


      var _rasterFunctions_pixelUtils_js__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(
      /*! ../rasterFunctions/pixelUtils.js */
      "ne7T");
      /* harmony import */


      var _BaseRaster_js__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(
      /*! ./BaseRaster.js */
      "HKGE");
      /* harmony import */


      var _InMemoryRaster_js__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(
      /*! ./InMemoryRaster.js */
      "qLN/");
      /* harmony import */


      var _rasterTransforms_PolynomialTransform_js__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(
      /*! ../rasterTransforms/PolynomialTransform.js */
      "f7EE");
      /* harmony import */


      var _pamParser_js__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(
      /*! ./pamParser.js */
      "VO3a");
      /*
      All material copyright ESRI, All Rights Reserved, unless otherwise specified.
      See https://js.arcgis.com/4.18/esri/copyright.txt for details.
      */


      var d = /*#__PURE__*/function (_BaseRaster_js__WEBPA3) {
        _inherits(d, _BaseRaster_js__WEBPA3);

        var _super4 = _createSuper(d);

        function d() {
          _classCallCheck(this, d);

          return _super4.apply(this, arguments);
        }

        _createClass(d, [{
          key: "open",
          value: function () {
            var _open4 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee19(t) {
              var r, _yield$this$_fetchAux, e, s, o, a, i, m, c, u, h, _d2, _t7, x;

              return regeneratorRuntime.wrap(function _callee19$(_context19) {
                while (1) {
                  switch (_context19.prev = _context19.next) {
                    case 0:
                      _context19.next = 2;
                      return this.init();

                    case 2:
                      _context19.next = 4;
                      return this._fetchData(t);

                    case 4:
                      r = _context19.sent;
                      _context19.next = 7;
                      return this._fetchAuxiliaryData(t);

                    case 7:
                      _yield$this$_fetchAux = _context19.sent;
                      e = _yield$this$_fetchAux.spatialReference;
                      s = _yield$this$_fetchAux.statistics;
                      o = _yield$this$_fetchAux.histograms;
                      a = _yield$this$_fetchAux.transform;
                      i = !e;
                      i && (e = new _geometry_SpatialReference_js__WEBPACK_IMPORTED_MODULE_12__["default"]({
                        wkid: 3857
                      })), null != o && o.length && null == s && (s = Object(_rasterFunctions_pixelUtils_js__WEBPACK_IMPORTED_MODULE_16__["estimateStatisticsFromHistograms"])(o));
                      m = r.width, c = r.height;
                      u = new _geometry_Extent_js__WEBPACK_IMPORTED_MODULE_13__["default"]({
                        xmin: -.5,
                        ymin: .5 - c,
                        xmax: m - .5,
                        ymax: .5,
                        spatialReference: e
                      });
                      h = a ? a.forwardTransform(u) : u;
                      _d2 = !0;

                      if (a) {
                        _t7 = a.forwardCoefficients;
                        _d2 = _t7 && 0 === _t7[1] && 0 === _t7[2], _d2 && (a = null, u = h);
                      }

                      x = new _InMemoryRaster_js__WEBPACK_IMPORTED_MODULE_18__["default"]({
                        data: {
                          extent: h,
                          nativeExtent: u,
                          transform: a,
                          pixelBlock: r,
                          statistics: s,
                          histograms: o,
                          keyProperties: {
                            DateType: "Processed"
                          },
                          isPseudoSpatialReference: i
                        }
                      });
                      _context19.next = 22;
                      return x.open();

                    case 22:
                      this._set("rasterInfo", x.rasterInfo);

                      this._inMemoryRaster = x;

                    case 24:
                    case "end":
                      return _context19.stop();
                  }
                }
              }, _callee19, this);
            }));

            function open(_x35) {
              return _open4.apply(this, arguments);
            }

            return open;
          }()
        }, {
          key: "fetchRawTile",
          value: function fetchRawTile(t, r, e) {
            var s = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : {};
            return this._inMemoryRaster.fetchRawTile(t, r, e, s);
          }
        }, {
          key: "_fetchData",
          value: function () {
            var _fetchData2 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee20(t) {
              var _yield$this$request3, r, e;

              return regeneratorRuntime.wrap(function _callee20$(_context20) {
                while (1) {
                  switch (_context20.prev = _context20.next) {
                    case 0:
                      _context20.next = 2;
                      return this.request(this.url, {
                        responseType: "array-buffer",
                        signal: null == t ? void 0 : t.signal
                      });

                    case 2:
                      _yield$this$request3 = _context20.sent;
                      r = _yield$this$request3.data;
                      e = Object(_rasterFormats_RasterCodec_js__WEBPACK_IMPORTED_MODULE_15__["getFormat"])(r).toUpperCase();

                      if (!("JPG" !== e && "PNG" !== e && "GIF" !== e && "BMP" !== e)) {
                        _context20.next = 7;
                        break;
                      }

                      throw new _core_Error_js__WEBPACK_IMPORTED_MODULE_7__["default"]("image-aux-raster:open", "the data is not a supported format");

                    case 7:
                      this._set("datasetFormat", e);

                      _context20.next = 10;
                      return this.decodePixelBlock(r, {
                        format: "jpg",
                        width: 1,
                        height: 1,
                        useCanvas: !0
                      });

                    case 10:
                      return _context20.abrupt("return", _context20.sent);

                    case 11:
                    case "end":
                      return _context20.stop();
                  }
                }
              }, _callee20, this);
            }));

            function _fetchData(_x36) {
              return _fetchData2.apply(this, arguments);
            }

            return _fetchData;
          }()
        }, {
          key: "_fetchAuxiliaryData",
          value: function () {
            var _fetchAuxiliaryData3 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee21(t) {
              var e, s, o, n, l, m, p, c, f, _d3, _t8;

              return regeneratorRuntime.wrap(function _callee21$(_context21) {
                while (1) {
                  switch (_context21.prev = _context21.next) {
                    case 0:
                      o = Object(_core_maybe_js__WEBPACK_IMPORTED_MODULE_2__["unwrap"])(null == t ? void 0 : t.signal);
                      n = null != (e = this.ioConfig.skipExtensions) ? e : [];
                      l = n.indexOf("aux.xml") > -1 ? null : this.request(this.url + ".aux.xml", {
                        responseType: "xml",
                        signal: o
                      });
                      m = this.datasetFormat;
                      p = "JPG" === m ? "jgw" : "PNG" === m ? "pgw" : "BMP" === m ? "bpw" : null;
                      c = n.indexOf(p) > -1 ? null : this.request(this.url.slice(0, this.url.lastIndexOf(".")) + "." + p, {
                        responseType: "text",
                        signal: o
                      });
                      _context21.next = 8;
                      return Object(_core_promiseUtils_js__WEBPACK_IMPORTED_MODULE_11__["eachAlways"])([l, c]);

                    case 8:
                      f = _context21.sent;

                      if (!(null != o && o.aborted)) {
                        _context21.next = 11;
                        break;
                      }

                      throw Object(_core_promiseUtils_js__WEBPACK_IMPORTED_MODULE_11__["createAbortError"])();

                    case 11:
                      _d3 = Object(_pamParser_js__WEBPACK_IMPORTED_MODULE_20__["parsePAMInfo"])(null == (s = f[0].value) ? void 0 : s.data);

                      if (!_d3.transform) {
                        _t8 = f[1].value ? f[1].value.data.split("\n").slice(0, 6).map(function (t) {
                          return Number(t);
                        }) : null;
                        _d3.transform = 6 === (null == _t8 ? void 0 : _t8.length) ? new _rasterTransforms_PolynomialTransform_js__WEBPACK_IMPORTED_MODULE_19__["default"]({
                          forwardCoefficients: [_t8[4], _t8[5], _t8[0], -_t8[1], _t8[2], -_t8[3]]
                        }) : null;
                      }

                      return _context21.abrupt("return", _d3);

                    case 14:
                    case "end":
                      return _context21.stop();
                  }
                }
              }, _callee21, this);
            }));

            function _fetchAuxiliaryData(_x37) {
              return _fetchAuxiliaryData3.apply(this, arguments);
            }

            return _fetchAuxiliaryData;
          }()
        }]);

        return d;
      }(_BaseRaster_js__WEBPACK_IMPORTED_MODULE_17__["default"]);

      Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_5__["property"])({
        type: String,
        json: {
          write: !0
        }
      })], d.prototype, "datasetFormat", void 0), d = Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_subclass_js__WEBPACK_IMPORTED_MODULE_6__["subclass"])("esri.layers.support.rasterDatasets.ImageAuxRaster")], d);
      var x = d;
      /* harmony default export */

      __webpack_exports__["default"] = x;
      /***/
    },

    /***/
    "Iy2z":
    /*!**********************************************************************************!*\
      !*** ./node_modules/@arcgis/core/layers/support/rasterDatasets/RasterFactory.js ***!
      \**********************************************************************************/

    /*! exports provided: default */

    /***/
    function Iy2z(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony import */


      var _core_Error_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ../../../core/Error.js */
      "zlDU");
      /* harmony import */


      var _CloudRaster_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./CloudRaster.js */
      "i40u");
      /* harmony import */


      var _ImageAuxRaster_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./ImageAuxRaster.js */
      "IdsY");
      /* harmony import */


      var _ImageServerRaster_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./ImageServerRaster.js */
      "2CDY");
      /* harmony import */


      var _MRFRaster_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ./MRFRaster.js */
      "6Xnn");
      /* harmony import */


      var _TIFFRaster_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ./TIFFRaster.js */
      "pLC1");
      /*
      All material copyright ESRI, All Rights Reserved, unless otherwise specified.
      See https://js.arcgis.com/4.18/esri/copyright.txt for details.
      */


      var c = new Map();
      c.set("CRF", {
        desc: "Cloud Raster Format",
        constructor: _CloudRaster_js__WEBPACK_IMPORTED_MODULE_1__["default"]
      }), c.set("MRF", {
        desc: "Meta Raster Format",
        constructor: _MRFRaster_js__WEBPACK_IMPORTED_MODULE_4__["default"]
      }), c.set("TIFF", {
        desc: "GeoTIFF",
        constructor: _TIFFRaster_js__WEBPACK_IMPORTED_MODULE_5__["default"]
      }), c.set("RasterTileServer", {
        desc: "Raster Tile Server",
        constructor: _ImageServerRaster_js__WEBPACK_IMPORTED_MODULE_3__["default"]
      }), c.set("JPG", {
        desc: "JPG Raster Format",
        constructor: _ImageAuxRaster_js__WEBPACK_IMPORTED_MODULE_2__["default"]
      }), c.set("PNG", {
        desc: "PNG Raster Format",
        constructor: _ImageAuxRaster_js__WEBPACK_IMPORTED_MODULE_2__["default"]
      }), c.set("GIF", {
        desc: "GIF Raster Format",
        constructor: _ImageAuxRaster_js__WEBPACK_IMPORTED_MODULE_2__["default"]
      }), c.set("BMP", {
        desc: "BMP Raster Format",
        constructor: _ImageAuxRaster_js__WEBPACK_IMPORTED_MODULE_2__["default"]
      });
      /* harmony default export */

      __webpack_exports__["default"] = /*#__PURE__*/function () {
        function _class() {
          _classCallCheck(this, _class);
        }

        _createClass(_class, null, [{
          key: "supportedFormats",
          get: function get() {
            var t = new Set();
            return c.forEach(function (r, e) {
              return t.add(e);
            }), t;
          }
        }, {
          key: "open",
          value: function () {
            var _open5 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee22(r) {
              var e, s, o, a, n, i, u, l, m, F;
              return regeneratorRuntime.wrap(function _callee22$(_context22) {
                while (1) {
                  switch (_context22.prev = _context22.next) {
                    case 0:
                      e = r.url, s = r.ioConfig, o = r.sourceJSON;
                      a = r.datasetFormat;
                      null == a && e.lastIndexOf(".") && (a = e.slice(e.lastIndexOf(".") + 1).toUpperCase()), "OVR" === a || "TIF" === a ? a = "TIFF" : "JPG" !== a && "JPEG" !== a && "JFIF" !== a || (a = "JPG"), e.toLowerCase().indexOf("/imageserver") > -1 && -1 === e.toLowerCase().indexOf("/wcsserver") && (a = "RasterTileServer");
                      n = {
                        url: e,
                        sourceJSON: o,
                        datasetFormat: a,
                        ioConfig: s || {
                          bandIds: null,
                          sampling: null
                        }
                      };

                      if (!this.supportedFormats.has(a)) {
                        _context22.next = 10;
                        break;
                      }

                      i = c.get(a).constructor;
                      u = new i(n);
                      _context22.next = 9;
                      return u.open({
                        signal: r.signal
                      });

                    case 9:
                      return _context22.abrupt("return", u);

                    case 10:
                      if (!a) {
                        _context22.next = 12;
                        break;
                      }

                      throw new _core_Error_js__WEBPACK_IMPORTED_MODULE_0__["default"]("rasterfactory:open", "not a supported format " + a);

                    case 12:
                      l = Array.from(c.keys());
                      m = 0;

                      F = function F() {
                        return a = l[m++], a ? (i = c.get(a).constructor, u = new i(n), u.open({
                          signal: r.signal
                        }).then(function () {
                          return u;
                        })["catch"](function () {
                          return F();
                        })) : null;
                      };

                      return _context22.abrupt("return", F());

                    case 16:
                    case "end":
                      return _context22.stop();
                  }
                }
              }, _callee22, this);
            }));

            function open(_x38) {
              return _open5.apply(this, arguments);
            }

            return open;
          }()
        }, {
          key: "register",
          value: function register(t, r, e) {
            c.has(t.toUpperCase()) || c.set(t.toUpperCase(), {
              desc: r,
              constructor: e
            });
          }
        }]);

        return _class;
      }();
      /***/

    },

    /***/
    "Rjnn":
    /*!******************************************************************************!*\
      !*** ./node_modules/@arcgis/core/layers/support/rasterDatasets/DBFParser.js ***!
      \******************************************************************************/

    /*! exports provided: default */

    /***/
    function Rjnn(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony import */


      var _byteStreamUtils_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ./byteStreamUtils.js */
      "dCrW");
      /*
      All material copyright ESRI, All Rights Reserved, unless otherwise specified.
      See https://js.arcgis.com/4.18/esri/copyright.txt for details.
      */

      /* harmony default export */


      __webpack_exports__["default"] = /*#__PURE__*/function () {
        function _class2() {
          _classCallCheck(this, _class2);
        }

        _createClass(_class2, null, [{
          key: "supportedVersions",
          get: function get() {
            return [5];
          }
        }, {
          key: "parse",
          value: function parse(t) {
            var r = new DataView(t),
                n = 3 & r.getUint8(0);
            if (3 !== n) return {
              header: {
                version: n
              },
              recordSet: null
            };
            var i = r.getUint32(4, !0),
                s = r.getUint16(8, !0),
                a = r.getUint16(10, !0),
                o = {
              version: n,
              recordCount: i,
              headerByteCount: s,
              recordByteCount: a
            };
            var l = 32;
            var p = [],
                g = [];
            var u;

            if (3 === n) {
              for (; 13 !== r.getUint8(l);) {
                u = String.fromCharCode(r.getUint8(l + 11)).trim(), p.push({
                  name: Object(_byteStreamUtils_js__WEBPACK_IMPORTED_MODULE_0__["bytesToUTF8"])(new Uint8Array(t, l, 11)),
                  type: u,
                  typeName: ["String", "Date", "Double", "Boolean", "String", "Integer"][["C", "D", "F", "L", "M", "N"].indexOf(u)],
                  length: r.getUint8(l + 16)
                }), l += 32;
              }

              if (l += 1, p.length > 0) {
                var _loop3 = function _loop3() {
                  var n = [];
                  32 === r.getUint8(l) ? (l += 1, p.forEach(function (r) {
                    if ("C" === r.type) n.push(Object(_byteStreamUtils_js__WEBPACK_IMPORTED_MODULE_0__["bytesToUTF8"])(new Uint8Array(t, l, r.length)).trim());else if ("N" === r.type) n.push(parseInt(String.fromCharCode.apply(null, new Uint8Array(t, l, r.length)).trim(), 10));else if ("F" === r.type) n.push(parseFloat(String.fromCharCode.apply(null, new Uint8Array(t, l, r.length)).trim()));else if ("D" === r.type) {
                      var e = String.fromCharCode.apply(null, new Uint8Array(t, l, r.length)).trim();
                      n.push(new Date(parseInt(e.substring(0, 4), 10), parseInt(e.substring(4, 6), 10) - 1, parseInt(e.substring(6, 8), 10)));
                    }
                    l += r.length;
                  }), g.push(n)) : l += a;
                };

                for (; g.length < i && t.byteLength - l > a;) {
                  _loop3();
                }
              }
            }

            var d = function (e) {
              var t = e.fields,
                  r = e.records,
                  n = t.some(function (e) {
                return "oid" === e.name.toLowerCase();
              }) ? "OBJECTID" : "OID",
                  i = [{
                name: n,
                type: "esriFieldTypeOID",
                alias: "OID"
              }].concat(t.map(function (e) {
                return {
                  name: e.name,
                  type: "esriFieldType" + e.typeName,
                  alias: e.name
                };
              })),
                  s = i.map(function (e) {
                return e.name;
              }),
                  a = [];
              var o = 0,
                  l = 0;
              return r.forEach(function (e) {
                var t = {};

                for (t[n] = o++, l = 1; l < s.length; l++) {
                  t[s[l]] = e[l - 1];
                }

                a.push({
                  attributes: t
                });
              }), {
                displayFieldName: "",
                fields: i,
                features: a
              };
            }({
              fields: p,
              records: g
            });

            return {
              header: o,
              fields: p,
              records: g,
              recordSet: d
            };
          }
        }]);

        return _class2;
      }();
      /***/

    },

    /***/
    "U9Ns":
    /*!***********************************************************************!*\
      !*** ./node_modules/@arcgis/core/layers/support/RasterStorageInfo.js ***!
      \***********************************************************************/

    /*! exports provided: default */

    /***/
    function U9Ns(module, __webpack_exports__, __webpack_require__) {
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
      /*
      All material copyright ESRI, All Rights Reserved, unless otherwise specified.
      See https://js.arcgis.com/4.18/esri/copyright.txt for details.
      */


      var s = /*#__PURE__*/function (_core_JSONSupport_js_) {
        _inherits(s, _core_JSONSupport_js_);

        var _super5 = _createSuper(s);

        function s() {
          var _this6;

          _classCallCheck(this, s);

          _this6 = _super5.apply(this, arguments), _this6.blockWidth = void 0, _this6.blockHeight = void 0, _this6.compression = null, _this6.origin = null, _this6.firstPyramidLevel = null, _this6.maximumPyramidLevel = null, _this6.pyramidScalingFactor = 2, _this6.pyramidBlockWidth = null, _this6.pyramidBlockHeight = null, _this6.isVirtualTileInfo = !1, _this6.tileInfo = null, _this6.blockBoundary = null;
          return _this6;
        }

        return s;
      }(_core_JSONSupport_js__WEBPACK_IMPORTED_MODULE_9__["JSONSupport"]);

      Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_4__["property"])({
        type: Number,
        json: {
          write: !0
        }
      })], s.prototype, "blockWidth", void 0), Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_4__["property"])({
        type: Number,
        json: {
          write: !0
        }
      })], s.prototype, "blockHeight", void 0), Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_4__["property"])({
        type: String,
        json: {
          write: !0
        }
      })], s.prototype, "compression", void 0), Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_4__["property"])({
        type: _geometry_Point_js__WEBPACK_IMPORTED_MODULE_10__["default"],
        json: {
          write: !0
        }
      })], s.prototype, "origin", void 0), Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_4__["property"])({
        type: Number,
        json: {
          write: !0
        }
      })], s.prototype, "firstPyramidLevel", void 0), Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_4__["property"])({
        type: Number,
        json: {
          write: !0
        }
      })], s.prototype, "maximumPyramidLevel", void 0), Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_4__["property"])()], s.prototype, "pyramidScalingFactor", void 0), Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_4__["property"])({
        type: Number,
        json: {
          write: !0
        }
      })], s.prototype, "pyramidBlockWidth", void 0), Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_4__["property"])({
        type: Number,
        json: {
          write: !0
        }
      })], s.prototype, "pyramidBlockHeight", void 0), Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_4__["property"])({
        type: Boolean,
        json: {
          write: !0
        }
      })], s.prototype, "isVirtualTileInfo", void 0), Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_4__["property"])({
        json: {
          write: !0
        }
      })], s.prototype, "tileInfo", void 0), Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_4__["property"])()], s.prototype, "blockBoundary", void 0), s = Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_subclass_js__WEBPACK_IMPORTED_MODULE_5__["subclass"])("esri.layers.support.RasterStorageInfo")], s);
      var p = s;
      /* harmony default export */

      __webpack_exports__["default"] = p;
      /***/
    },

    /***/
    "UjpV":
    /*!*********************************************************************************!*\
      !*** ./node_modules/@arcgis/core/layers/support/rasterDatasets/xmlUtilities.js ***!
      \*********************************************************************************/

    /*! exports provided: getElement, getElementNumericValue, getElementNumericValues, getElementValue, getElementValues, getElements, getNodeNameIgnoreNS, getSpaceDelimitedNumericValues, isSameTagIgnoreNS */

    /***/
    function UjpV(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "getElement", function () {
        return e;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "getElementNumericValue", function () {
        return o;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "getElementNumericValues", function () {
        return u;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "getElementValue", function () {
        return t;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "getElementValues", function () {
        return l;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "getElements", function () {
        return n;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "getNodeNameIgnoreNS", function () {
        return f;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "getSpaceDelimitedNumericValues", function () {
        return r;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "isSameTagIgnoreNS", function () {
        return i;
      });
      /*
      All material copyright ESRI, All Rights Reserved, unless otherwise specified.
      See https://js.arcgis.com/4.18/esri/copyright.txt for details.
      */


      function n(e, t) {
        if (!e || !t) return [];
        var l = t;
        t.indexOf("/") > -1 ? (l = t.slice(0, t.indexOf("/")), t = t.slice(t.indexOf("/") + 1)) : t = "";
        var r = [];

        if (t) {
          var _u = n(e, l);

          for (var _e8 = 0; _e8 < _u.length; _e8++) {
            n(_u[_e8], t).forEach(function (n) {
              return r.push(n);
            });
          }

          return r;
        }

        var u = e.getElementsByTagNameNS("*", l);
        if (!u || 0 === u.length) return [];

        for (var _n2 = 0; _n2 < u.length; _n2++) {
          r.push(u[_n2] || u.item[_n2]);
        }

        return r;
      }

      function e(t, l) {
        if (!t || !l) return null;
        var r = l;
        l.indexOf("/") > -1 ? (r = l.slice(0, l.indexOf("/")), l = l.slice(l.indexOf("/") + 1)) : l = "";
        var u = n(t, r);
        return u.length > 0 ? l ? e(u[0], l) : u[0] : null;
      }

      function t(n) {
        var t = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : null;
        var l = t ? e(n, t) : n;
        var r;
        return l ? (r = l.textContent || l.nodeValue, r ? r.trim() : null) : null;
      }

      function l(e, t) {
        var l = n(e, t),
            r = [];
        var u;

        for (var _n3 = 0; _n3 < l.length; _n3++) {
          u = l[_n3].textContent || l[_n3].nodeValue, u && (u = u.trim(), "" !== u && r.push(u));
        }

        return r;
      }

      function r(n) {
        var e = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : null;
        return t(n, e).split(" ").map(function (n) {
          return Number(n);
        });
      }

      function u(n, e) {
        return l(n, e).map(function (n) {
          return Number(n);
        });
      }

      function o(n, e) {
        var l = t(n, e);
        return Number(l);
      }

      function i(n, e) {
        var t;
        var l = null == n || null == (t = n.nodeName) ? void 0 : t.toLowerCase(),
            r = e.toLowerCase();
        return l.slice(l.lastIndexOf(":") + 1) === r;
      }

      function f(n) {
        return n.nodeName.slice(n.nodeName.lastIndexOf(":") + 1);
      }
      /***/

    },

    /***/
    "VO3a":
    /*!******************************************************************************!*\
      !*** ./node_modules/@arcgis/core/layers/support/rasterDatasets/pamParser.js ***!
      \******************************************************************************/

    /*! exports provided: parsePAMInfo */

    /***/
    function VO3a(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "parsePAMInfo", function () {
        return f;
      });
      /* harmony import */


      var _geometry_SpatialReference_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ../../../geometry/SpatialReference.js */
      "WZb1");
      /* harmony import */


      var _geometry_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ../../../geometry.js */
      "4GrV");
      /* harmony import */


      var _xmlUtilities_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./xmlUtilities.js */
      "UjpV");
      /* harmony import */


      var _rasterTransforms_PolynomialTransform_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ../rasterTransforms/PolynomialTransform.js */
      "f7EE");
      /*
      All material copyright ESRI, All Rights Reserved, unless otherwise specified.
      See https://js.arcgis.com/4.18/esri/copyright.txt for details.
      */


      function i(e, t) {
        if (!e || !t) return null;
        var n = [];

        for (var _a = 0; _a < e.length; _a++) {
          n.push(e[_a]), n.push(t[_a]);
        }

        return n;
      }

      function u(t) {
        if (!t) return null;
        var n = Number(t);
        if (!isNaN(n) && 0 !== n) return new _geometry_SpatialReference_js__WEBPACK_IMPORTED_MODULE_0__["default"]({
          wkid: n
        });
        var a = t.replace(/\]/g, "[").replace(/\"/g, "").split("[").map(function (e) {
          return e.trim();
        }).filter(function (e) {
          return "" !== e;
        }),
            r = a[a.length - 1].split(",");
        return "EPSG" !== r[0] || (n = Number(r[1]), isNaN(n) || 0 === n) ? new _geometry_SpatialReference_js__WEBPACK_IMPORTED_MODULE_0__["default"]({
          wkt: t
        }) : new _geometry_SpatialReference_js__WEBPACK_IMPORTED_MODULE_0__["default"]({
          wkid: n
        });
      }

      function f(e) {
        var f;
        if ("pamdataset" !== (null == e || null == (f = e.documentElement.tagName) ? void 0 : f.toLowerCase())) return {};
        var c = {
          spatialReference: null,
          transform: null,
          metadata: {},
          rasterBands: [],
          statistics: null,
          histograms: null
        };
        e.documentElement.childNodes.forEach(function (e) {
          if (1 === e.nodeType) if (Object(_xmlUtilities_js__WEBPACK_IMPORTED_MODULE_2__["isSameTagIgnoreNS"])(e, "SRS")) {
            if (!c.spatialReference) {
              var t = Object(_xmlUtilities_js__WEBPACK_IMPORTED_MODULE_2__["getElementValue"])(e);
              c.spatialReference = u(t);
            }
          } else if (Object(_xmlUtilities_js__WEBPACK_IMPORTED_MODULE_2__["isSameTagIgnoreNS"])(e, "Metadata")) {
            if ("xml:ESRI" === e.getAttribute("domain")) {
              var _ref = function (e) {
                var t;
                var a = Object(_xmlUtilities_js__WEBPACK_IMPORTED_MODULE_2__["getElement"])(e, "GeodataXform"),
                    f = u(Object(_xmlUtilities_js__WEBPACK_IMPORTED_MODULE_2__["getElementNumericValue"])(a, "SpatialReference/WKID") || Object(_xmlUtilities_js__WEBPACK_IMPORTED_MODULE_2__["getElementValue"])(a, "SpatialReference/WKT"));
                if ("typens:PolynomialXform" !== a.getAttribute("xsi:type")) return {
                  spatialReference: f,
                  transform: null
                };
                var c = null != (t = Object(_xmlUtilities_js__WEBPACK_IMPORTED_MODULE_2__["getElementNumericValue"])(a, "PolynomialOrder")) ? t : 1,
                    m = Object(_xmlUtilities_js__WEBPACK_IMPORTED_MODULE_2__["getElementNumericValues"])(a, "CoeffX/Double"),
                    d = Object(_xmlUtilities_js__WEBPACK_IMPORTED_MODULE_2__["getElementNumericValues"])(a, "CoeffY/Double"),
                    p = Object(_xmlUtilities_js__WEBPACK_IMPORTED_MODULE_2__["getElementNumericValues"])(a, "InverseCoeffX/Double"),
                    I = Object(_xmlUtilities_js__WEBPACK_IMPORTED_MODULE_2__["getElementNumericValues"])(a, "InverseCoeffY/Double"),
                    S = i(m, d),
                    g = i(p, I);
                return {
                  spatialReference: f,
                  transform: new _rasterTransforms_PolynomialTransform_js__WEBPACK_IMPORTED_MODULE_3__["default"]({
                    polynomialOrder: c,
                    forwardCoefficients: S,
                    inverseCoefficients: g
                  })
                };
              }(e),
                  _t9 = _ref.spatialReference,
                  _a2 = _ref.transform;

              c.transform = _a2, c.spatialReference || (c.spatialReference = _t9);
            } else {
              Object(_xmlUtilities_js__WEBPACK_IMPORTED_MODULE_2__["getElements"])(e, "MDI").forEach(function (e) {
                return c.metadata[e.getAttribute("key")] = Object(_xmlUtilities_js__WEBPACK_IMPORTED_MODULE_2__["getElementValue"])(e);
              });
            }
          } else if (Object(_xmlUtilities_js__WEBPACK_IMPORTED_MODULE_2__["isSameTagIgnoreNS"])(e, "PAMRasterBand")) {
            var _t10 = function (e) {
              var t;
              var l = Object(_xmlUtilities_js__WEBPACK_IMPORTED_MODULE_2__["getElementNumericValue"])(e, "NoDataValue"),
                  o = Object(_xmlUtilities_js__WEBPACK_IMPORTED_MODULE_2__["getElement"])(e, "Histograms/HistItem"),
                  i = Object(_xmlUtilities_js__WEBPACK_IMPORTED_MODULE_2__["getElementNumericValue"])(o, "HistMin"),
                  u = Object(_xmlUtilities_js__WEBPACK_IMPORTED_MODULE_2__["getElementNumericValue"])(o, "HistMax"),
                  f = Object(_xmlUtilities_js__WEBPACK_IMPORTED_MODULE_2__["getElementNumericValue"])(o, "BucketCount"),
                  c = null == (t = Object(_xmlUtilities_js__WEBPACK_IMPORTED_MODULE_2__["getElementValue"])(o, "HistCounts")) ? void 0 : t.split("|").map(function (e) {
                return Number(e);
              });
              var m, d, p, I;
              Object(_xmlUtilities_js__WEBPACK_IMPORTED_MODULE_2__["getElements"])(e, "Metadata/MDI").forEach(function (e) {
                var t;
                var n = Number(null != (t = e.textContent) ? t : e.nodeValue);

                switch (e.getAttribute("key").toUpperCase()) {
                  case "STATISTICS_MINIMUM":
                    m = n;
                    break;

                  case "STATISTICS_MAXIMUM":
                    d = n;
                    break;

                  case "STATISTICS_MEAN":
                    p = n;
                    break;

                  case "STATISTICS_STDDEV":
                    I = n;
                }
              });
              var S = Object(_xmlUtilities_js__WEBPACK_IMPORTED_MODULE_2__["getElementNumericValue"])(e, "Metadata/SourceBandIndex");
              return {
                noDataValue: l,
                histogram: null != c && c.length && null != m && null != d ? {
                  min: i,
                  max: u,
                  size: f || c.length,
                  counts: c
                } : null,
                sourceBandIndex: S,
                statistics: null != m && null != d ? {
                  min: m,
                  max: d,
                  avg: p,
                  stddev: I
                } : null
              };
            }(e);

            null != _t10.sourceBandIndex && null == c.rasterBands[_t10.sourceBandIndex] ? c.rasterBands[_t10.sourceBandIndex] = _t10 : c.rasterBands.push(_t10);
          }
        });
        var m = c.rasterBands;

        if (m) {
          var _e9 = !!m[0].statistics;

          c.statistics = _e9 ? m.map(function (e) {
            return e.statistics;
          }) : null;
          var t = !!m[0].histogram;
          c.histograms = t ? m.map(function (e) {
            return e.histogram;
          }) : null;
        }

        return c;
      }
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


      var s = function s(_s3) {
        var t = /*#__PURE__*/function (_s2) {
          _inherits(t, _s2);

          var _super6 = _createSuper(t);

          function t() {
            var _this7;

            _classCallCheck(this, t);

            _this7 = _super6.apply(this, arguments), _this7.minScale = 0, _this7.maxScale = 0;
            return _this7;
          }

          _createClass(t, [{
            key: "scaleRangeId",
            get: function get() {
              return "".concat(this.minScale, ",").concat(this.maxScale);
            }
          }]);

          return t;
        }(_s3);

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
    "eXaU":
    /*!*********************************************************************!*\
      !*** ./node_modules/@arcgis/core/layers/mixins/ImageryTileMixin.js ***!
      \*********************************************************************/

    /*! exports provided: ImageryTileMixin */

    /***/
    function eXaU(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ImageryTileMixin", function () {
        return J;
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


      var _core_accessorSupport_decorators_aliasOf_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ../../core/accessorSupport/decorators/aliasOf.js */
      "Stxv");
      /* harmony import */


      var _core_accessorSupport_decorators_subclass_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! ../../core/accessorSupport/decorators/subclass.js */
      "04ZG");
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


      var _geometry_support_spatialReferenceUtils_js__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
      /*! ../../geometry/support/spatialReferenceUtils.js */
      "f4Nx");
      /* harmony import */


      var _geometry_SpatialReference_js__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
      /*! ../../geometry/SpatialReference.js */
      "WZb1");
      /* harmony import */


      var _geometry_Extent_js__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
      /*! ../../geometry/Extent.js */
      "OvF4");
      /* harmony import */


      var _geometry_js__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(
      /*! ../../geometry.js */
      "4GrV");
      /* harmony import */


      var _request_js__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(
      /*! ../../request.js */
      "Lqtk");
      /* harmony import */


      var _support_arcgisLayerUrl_js__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(
      /*! ../support/arcgisLayerUrl.js */
      "VLTf");
      /* harmony import */


      var _support_commonProperties_js__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(
      /*! ../support/commonProperties.js */
      "IvSi");
      /* harmony import */


      var _rasterRenderers_js__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(
      /*! ../../rasterRenderers.js */
      "ukD5");
      /* harmony import */


      var _support_TileInfo_js__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(
      /*! ../support/TileInfo.js */
      "3/ME");
      /* harmony import */


      var _support_DimensionalDefinition_js__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(
      /*! ../support/DimensionalDefinition.js */
      "tidM");
      /* harmony import */


      var _support_RasterJobHandler_js__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(
      /*! ../support/RasterJobHandler.js */
      "2mvb");
      /* harmony import */


      var _renderers_support_rasterRendererHelper_js__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(
      /*! ../../renderers/support/rasterRendererHelper.js */
      "HM2S");
      /* harmony import */


      var _renderers_support_RasterSymbolizer_js__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(
      /*! ../../renderers/support/RasterSymbolizer.js */
      "ciAr");
      /*
      All material copyright ESRI, All Rights Reserved, unless otherwise specified.
      See https://js.arcgis.com/4.18/esri/copyright.txt for details.
      */


      var I = _core_Logger_js__WEBPACK_IMPORTED_MODULE_3__["default"].getLogger("esri.layers.mixins.ImageryTileMixin"),
          J = function J(r) {
        var J = /*#__PURE__*/function (_r2) {
          _inherits(J, _r2);

          var _super7 = _createSuper(J);

          function J() {
            var _this8;

            _classCallCheck(this, J);

            _this8 = _super7.apply(this, arguments), _this8._rasterJobHandler = {
              instance: null,
              refCount: 0,
              connectionPromise: null
            }, _this8.bandIds = null, _this8.copyright = null, _this8.fullExtent = null, _this8.interpolation = "nearest", _this8.raster = null, _this8.rasterInfo = null, _this8.sourceJSON = null, _this8.spatialReference = null, _this8.tileInfo = null, _this8.symbolizer = null;
            return _this8;
          }

          _createClass(J, [{
            key: "multidimensionalDefinition",
            set: function set(e) {
              this.raster && (this._sliceId = this.raster.getSliceIndex(e)), this._set("multidimensionalDefinition", e);
            }
          }, {
            key: "url",
            set: function set(e) {
              this._set("url", Object(_support_arcgisLayerUrl_js__WEBPACK_IMPORTED_MODULE_16__["sanitizeUrl"])(e, I));
            }
          }, {
            key: "renderer",
            set: function set(e) {
              this._set("renderer", e), this.updateRenderer();
            }
          }, {
            key: "updateRenderer",
            value: function () {
              var _updateRenderer = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee23() {
                var e;
                return regeneratorRuntime.wrap(function _callee23$(_context23) {
                  while (1) {
                    switch (_context23.prev = _context23.next) {
                      case 0:
                        if (this.loaded) {
                          _context23.next = 2;
                          break;
                        }

                        return _context23.abrupt("return");

                      case 2:
                        if (!(JSON.stringify(this._cachedRendererJson) === JSON.stringify(this.renderer))) {
                          _context23.next = 4;
                          break;
                        }

                        return _context23.abrupt("return");

                      case 4:
                        e = this._rasterJobHandler.instance;
                        _context23.t0 = e;

                        if (!_context23.t0) {
                          _context23.next = 12;
                          break;
                        }

                        this.symbolizer.rendererJSON = this.renderer.toJSON();
                        this.symbolizer.bind();
                        _context23.next = 11;
                        return e.updateSymbolizer(this.symbolizer);

                      case 11:
                        this._cachedRendererJson = this.renderer.toJSON();

                      case 12:
                      case "end":
                        return _context23.stop();
                    }
                  }
                }, _callee23, this);
              }));

              function updateRenderer() {
                return _updateRenderer.apply(this, arguments);
              }

              return updateRenderer;
            }()
          }, {
            key: "applyRenderer",
            value: function () {
              var _applyRenderer = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee24(e, t) {
                var r, i, s, n;
                return regeneratorRuntime.wrap(function _callee24$(_context24) {
                  while (1) {
                    switch (_context24.prev = _context24.next) {
                      case 0:
                        r = e && e.pixelBlock;

                        if (r && r.pixels && r.pixels.length > 0) {
                          _context24.next = 3;
                          break;
                        }

                        return _context24.abrupt("return", null);

                      case 3:
                        this.updateRenderer();
                        s = this._rasterJobHandler.instance, n = this.bandIds;

                        if (!s) {
                          _context24.next = 11;
                          break;
                        }

                        _context24.next = 8;
                        return s.symbolize(_objectSpread(_objectSpread({}, e), {}, {
                          simpleStretchParams: t,
                          bandIds: n
                        }));

                      case 8:
                        _context24.t0 = _context24.sent;
                        _context24.next = 12;
                        break;

                      case 11:
                        _context24.t0 = this.symbolizer.symbolize(_objectSpread(_objectSpread({}, e), {}, {
                          simpleStretchParams: t,
                          bandIds: n
                        }));

                      case 12:
                        i = _context24.t0;
                        return _context24.abrupt("return", i);

                      case 14:
                      case "end":
                        return _context24.stop();
                    }
                  }
                }, _callee24, this);
              }));

              function applyRenderer(_x39, _x40) {
                return _applyRenderer.apply(this, arguments);
              }

              return applyRenderer;
            }()
          }, {
            key: "getTileUrl",
            value: function getTileUrl(e, t, r) {
              return "RasterTileServer" === this.raster.datasetFormat ? "".concat(this.url, "/tile/").concat(e, "/").concat(t, "/").concat(r) : "";
            }
          }, {
            key: "getCompatibleTileInfo",
            value: function getCompatibleTileInfo(e, t) {
              if (!this.loaded) return null;
              var r = Object(_geometry_support_spatialReferenceUtils_js__WEBPACK_IMPORTED_MODULE_11__["getInfo"])(e);
              return _support_TileInfo_js__WEBPACK_IMPORTED_MODULE_19__["default"].create({
                size: 256,
                spatialReference: e,
                origin: r ? {
                  x: r.origin[0],
                  y: r.origin[1]
                } : {
                  x: t.xmin,
                  y: t.ymax
                }
              });
            }
          }, {
            key: "getCompatibleFullExtent",
            value: function getCompatibleFullExtent(e) {
              return this.loaded ? (this._compatibleFullExtent && this._compatibleFullExtent.spatialReference.equals(e) || (this._compatibleFullExtent = this.raster.computeExtent(e)), this._compatibleFullExtent) : null;
            }
          }, {
            key: "fetchTile",
            value: function () {
              var _fetchTile2 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee25(e, t, r) {
                var i,
                    s,
                    _e10,
                    _args25 = arguments;

                return regeneratorRuntime.wrap(function _callee25$(_context25) {
                  while (1) {
                    switch (_context25.prev = _context25.next) {
                      case 0:
                        i = _args25.length > 3 && _args25[3] !== undefined ? _args25[3] : {};

                        if (!i.requestAsImageElement) {
                          _context25.next = 4;
                          break;
                        }

                        s = this.getTileUrl(e, t, r);
                        return _context25.abrupt("return", Object(_request_js__WEBPACK_IMPORTED_MODULE_15__["default"])(s, {
                          responseType: "image",
                          query: {
                            sliceId: this._sliceId,
                            _ts: i.timestamp
                          },
                          signal: i.signal
                        }).then(function (e) {
                          return e.data;
                        }));

                      case 4:
                        _context25.next = 6;
                        return this._initJobHandler();

                      case 6:
                        if (!this.multidimensionalDefinition) {
                          _context25.next = 9;
                          break;
                        }

                        _e10 = this._sliceId;
                        i = _objectSpread({
                          multidimensionalDefinition: this.multidimensionalDefinition,
                          sliceId: _e10
                        }, i);

                      case 9:
                        return _context25.abrupt("return", ("raster-shaded-relief" === this.renderer.type && (i = _objectSpread({
                          buffer: {
                            cols: 1,
                            rows: 1
                          }
                        }, i)), this.raster.fetchTile(e, t, r, i)));

                      case 10:
                      case "end":
                        return _context25.stop();
                    }
                  }
                }, _callee25, this);
              }));

              function fetchTile(_x41, _x42, _x43) {
                return _fetchTile2.apply(this, arguments);
              }

              return fetchTile;
            }()
          }, {
            key: "fetchPixels",
            value: function () {
              var _fetchPixels2 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee26(e, t, r, i) {
                var _e11;

                return regeneratorRuntime.wrap(function _callee26$(_context26) {
                  while (1) {
                    switch (_context26.prev = _context26.next) {
                      case 0:
                        _context26.next = 2;
                        return this._initJobHandler();

                      case 2:
                        if (!this.multidimensionalDefinition) {
                          _context26.next = 5;
                          break;
                        }

                        _e11 = this._sliceId;
                        i = _objectSpread({
                          multidimensionalDefinition: this.multidimensionalDefinition,
                          sliceId: _e11
                        }, i);

                      case 5:
                        return _context26.abrupt("return", this.raster.fetchPixels(e, t, r, i));

                      case 6:
                      case "end":
                        return _context26.stop();
                    }
                  }
                }, _callee26, this);
              }));

              function fetchPixels(_x44, _x45, _x46, _x47) {
                return _fetchPixels2.apply(this, arguments);
              }

              return fetchPixels;
            }()
          }, {
            key: "identify",
            value: function identify(e) {
              var t = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
              return this.multidimensionalDefinition && !t.multidimensionalDefinition && (t = _objectSpread(_objectSpread({}, t), {}, {
                multidimensionalDefinition: this.multidimensionalDefinition
              })), this.raster.identify(e, t);
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
            key: "_configDefaultSettings",
            value: function _configDefaultSettings() {
              this._configDefaultInterpolation(), this._configDefaultSlice(), this._configDefaultRenderer();
            }
          }, {
            key: "_initJobHandler",
            value: function _initJobHandler() {
              var _this9 = this;

              if (null != this._rasterJobHandler.connectionPromise) return this._rasterJobHandler.connectionPromise;
              var e = new _support_RasterJobHandler_js__WEBPACK_IMPORTED_MODULE_21__["default"]();
              return this._rasterJobHandler.connectionPromise = e.initialize().then(function () {
                _this9._rasterJobHandler.instance = e, _this9.raster.rasterJobHandler = e, _this9.renderer && _this9.updateRenderer();
              })["catch"](function () {
                return null;
              }), this._rasterJobHandler.connectionPromise;
            }
          }, {
            key: "_shutdownJobHandler",
            value: function _shutdownJobHandler() {
              this._rasterJobHandler.instance && this._rasterJobHandler.instance.destroy(), this._rasterJobHandler.instance = null, this._rasterJobHandler.connectionPromise = null, this._rasterJobHandler.refCount = 0, this.raster.rasterJobHandler = null;
            }
          }, {
            key: "_configDefaultInterpolation",
            value: function _configDefaultInterpolation() {
              if (null == this.interpolation) {
                var e;
                var t = Object(_renderers_support_rasterRendererHelper_js__WEBPACK_IMPORTED_MODULE_22__["getDefaultInterpolation"])(this.rasterInfo, this.raster.tileType, null == (e = this.sourceJSON) ? void 0 : e.defaultResamplingMethod);

                this._set("interpolation", t);
              }
            }
          }, {
            key: "_configDefaultSlice",
            value: function _configDefaultSlice() {
              var e = this.raster.rasterInfo.multidimensionalInfo;

              if (Object(_core_maybe_js__WEBPACK_IMPORTED_MODULE_2__["isSome"])(e)) {
                if (!this.multidimensionalDefinition) {
                  var t = e.variables[0],
                      _r3 = [];
                  t.dimensions.forEach(function (e) {
                    _r3.push(new _support_DimensionalDefinition_js__WEBPACK_IMPORTED_MODULE_20__["default"]({
                      variableName: t.name,
                      dimensionName: e.name,
                      values: e.hasRegularIntervals ? e.extent[0] : e.values[0],
                      isSlice: !0
                    }));
                  }), this.multidimensionalDefinition = _r3;
                }

                this._sliceId = this.raster.getSliceIndex(this.multidimensionalDefinition);
              }
            }
          }, {
            key: "_configDefaultRenderer",
            value: function _configDefaultRenderer() {
              var e = this.raster.rasterInfo;
              var t;
              (this.bandIds || (this.bandIds = Object(_renderers_support_rasterRendererHelper_js__WEBPACK_IMPORTED_MODULE_22__["getDefaultBandCombination"])(e)), this.renderer) || (this.renderer = Object(_renderers_support_rasterRendererHelper_js__WEBPACK_IMPORTED_MODULE_22__["createDefaultRenderer"])(e, {
                bandIds: this.bandIds,
                variableName: null == (t = this.multidimensionalDefinition) ? void 0 : t[0].variableName
              }));
              this.symbolizer ? (this.symbolizer.rendererJSON = this.renderer.toJSON(), this.symbolizer.rasterInfo = e) : this.symbolizer = new _renderers_support_RasterSymbolizer_js__WEBPACK_IMPORTED_MODULE_23__["default"]({
                rendererJSON: this.renderer.toJSON(),
                rasterInfo: e
              }), this.symbolizer.bind() || I.warn("imagery-tile-mixin", "The given renderer is not supported by the layer.");
            }
          }]);

          return J;
        }(r);

        return Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_5__["property"])()], J.prototype, "_cachedRendererJson", void 0), Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_5__["property"])()], J.prototype, "_sliceId", void 0), Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_5__["property"])()], J.prototype, "_compatibleFullExtent", void 0), Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_5__["property"])()], J.prototype, "_rasterJobHandler", void 0), Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_5__["property"])()], J.prototype, "bandIds", void 0), Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_5__["property"])()], J.prototype, "copyright", void 0), Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_5__["property"])({
          type: _geometry_Extent_js__WEBPACK_IMPORTED_MODULE_13__["default"]
        }), Object(_core_accessorSupport_decorators_aliasOf_js__WEBPACK_IMPORTED_MODULE_6__["aliasOf"])("rasterInfo.extent")], J.prototype, "fullExtent", void 0), Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_5__["property"])()], J.prototype, "interpolation", void 0), Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_5__["property"])({
          type: [_support_DimensionalDefinition_js__WEBPACK_IMPORTED_MODULE_20__["default"]]
        })], J.prototype, "multidimensionalDefinition", null), Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_5__["property"])()], J.prototype, "raster", void 0), Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_5__["property"])({
          readOnly: !0
        }), Object(_core_accessorSupport_decorators_aliasOf_js__WEBPACK_IMPORTED_MODULE_6__["aliasOf"])("raster.rasterInfo")], J.prototype, "rasterInfo", void 0), Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_5__["property"])()], J.prototype, "sourceJSON", void 0), Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_5__["property"])({
          type: _geometry_SpatialReference_js__WEBPACK_IMPORTED_MODULE_12__["default"]
        }), Object(_core_accessorSupport_decorators_aliasOf_js__WEBPACK_IMPORTED_MODULE_6__["aliasOf"])("rasterInfo.spatialReference")], J.prototype, "spatialReference", void 0), Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_5__["property"])({
          type: _support_TileInfo_js__WEBPACK_IMPORTED_MODULE_19__["default"],
          dependsOn: ["rasterInfo"]
        }), Object(_core_accessorSupport_decorators_aliasOf_js__WEBPACK_IMPORTED_MODULE_6__["aliasOf"])("rasterInfo.storageInfo.tileInfo")], J.prototype, "tileInfo", void 0), Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_5__["property"])(_support_commonProperties_js__WEBPACK_IMPORTED_MODULE_17__["url"])], J.prototype, "url", null), Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_5__["property"])({
          types: _rasterRenderers_js__WEBPACK_IMPORTED_MODULE_18__["rasterRendererTypes"]
        })], J.prototype, "renderer", null), Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_5__["property"])()], J.prototype, "symbolizer", void 0), J = Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_subclass_js__WEBPACK_IMPORTED_MODULE_7__["subclass"])("esri.layers.ImageryTileMixin")], J), J;
      };
      /***/

    },

    /***/
    "f7EE":
    /*!******************************************************************************************!*\
      !*** ./node_modules/@arcgis/core/layers/support/rasterTransforms/PolynomialTransform.js ***!
      \******************************************************************************************/

    /*! exports provided: default */

    /***/
    function f7EE(module, __webpack_exports__, __webpack_require__) {
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


      var _geometry_Point_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
      /*! ../../../geometry/Point.js */
      "SuVq");
      /* harmony import */


      var _geometry_Extent_js__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
      /*! ../../../geometry/Extent.js */
      "OvF4");
      /* harmony import */


      var _geometry_js__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
      /*! ../../../geometry.js */
      "4GrV");
      /*
      All material copyright ESRI, All Rights Reserved, unless otherwise specified.
      See https://js.arcgis.com/4.18/esri/copyright.txt for details.
      */


      function n(e, r, t) {
        var o = r.x,
            s = r.y;

        if (t < 2) {
          return {
            x: e[0] + o * e[2] + s * e[4],
            y: e[1] + o * e[3] + s * e[5]
          };
        }

        if (2 === t) {
          var _r4 = o * o,
              _t11 = s * s,
              _i3 = o * s;

          return {
            x: e[0] + o * e[2] + s * e[4] + _r4 * e[6] + _i3 * e[8] + _t11 * e[10],
            y: e[1] + o * e[3] + s * e[5] + _r4 * e[7] + _i3 * e[9] + _t11 * e[11]
          };
        }

        var i = o * o,
            n = s * s,
            p = o * s,
            a = i * o,
            f = i * s,
            c = o * n,
            l = s * n;
        return {
          x: e[0] + o * e[2] + s * e[4] + i * e[6] + p * e[8] + n * e[10] + a * e[12] + f * e[14] + c * e[16] + l * e[18],
          y: e[1] + o * e[3] + s * e[5] + i * e[7] + p * e[9] + n * e[11] + a * e[13] + f * e[15] + c * e[17] + l * e[19]
        };
      }

      function p(e, r, t) {
        var o = r.xmin,
            s = r.ymin,
            p = r.xmax,
            a = r.ymax,
            f = r.spatialReference;
        var c = [];
        if (t < 2) c.push({
          x: o,
          y: a
        }), c.push({
          x: p,
          y: a
        }), c.push({
          x: o,
          y: s
        }), c.push({
          x: p,
          y: s
        });else {
          var _e12 = 10;

          for (var _r5 = 0; _r5 < _e12; _r5++) {
            c.push({
              x: o,
              y: s + (a - s) * _r5 / (_e12 - 1)
            }), c.push({
              x: p,
              y: s + (a - s) * _r5 / (_e12 - 1)
            });
          }

          _e12 = 8;

          for (var _r6 = 1; _r6 <= _e12; _r6++) {
            c.push({
              x: o + (p - o) * _r6 / _e12,
              y: s
            }), c.push({
              x: o + (p - o) * _r6 / _e12,
              y: a
            });
          }
        }
        c = c.map(function (r) {
          return n(e, r, t);
        });
        var l = c.map(function (e) {
          return e.x;
        }),
            m = c.map(function (e) {
          return e.y;
        });
        return new _geometry_Extent_js__WEBPACK_IMPORTED_MODULE_11__["default"]({
          xmin: Math.min.apply(null, l),
          xmax: Math.max.apply(null, l),
          ymin: Math.min.apply(null, m),
          ymax: Math.max.apply(null, m),
          spatialReference: f
        });
      }

      var a = /*#__PURE__*/function (_core_JSONSupport_js_2) {
        _inherits(a, _core_JSONSupport_js_2);

        var _super8 = _createSuper(a);

        function a() {
          var _this10;

          _classCallCheck(this, a);

          _this10 = _super8.apply(this, arguments), _this10.polynomialOrder = 1;
          return _this10;
        }

        _createClass(a, [{
          key: "inverseCoefficients",
          get: function get() {
            var e = this._get("inverseCoefficients");

            var r = this._get("forwardCoefficients");

            return !e && r && this.polynomialOrder < 2 && (e = function (e) {
              var _e13 = _slicedToArray(e, 6),
                  r = _e13[0],
                  t = _e13[1],
                  o = _e13[2],
                  s = _e13[3],
                  i = _e13[4],
                  n = _e13[5],
                  p = o * n - i * s,
                  a = i * s - o * n;

              return [(i * t - r * n) / p, (o * t - r * s) / a, n / p, s / a, -i / p, -o / a];
            }(r)), e;
          },
          set: function set(e) {
            this._set("inverseCoefficients", e);
          }
        }, {
          key: "forwardTransform",
          value: function forwardTransform(e) {
            if ("point" === e.type) {
              var r = n(this.forwardCoefficients, e, this.polynomialOrder);
              return new _geometry_Point_js__WEBPACK_IMPORTED_MODULE_10__["default"]({
                x: r.x,
                y: r.y,
                spatialReference: e.spatialReference
              });
            }

            return p(this.forwardCoefficients, e, this.polynomialOrder);
          }
        }, {
          key: "inverseTransform",
          value: function inverseTransform(e) {
            if ("point" === e.type) {
              var r = n(this.inverseCoefficients, e, this.polynomialOrder);
              return new _geometry_Point_js__WEBPACK_IMPORTED_MODULE_10__["default"]({
                x: r.x,
                y: r.y,
                spatialReference: e.spatialReference
              });
            }

            return p(this.inverseCoefficients, e, this.polynomialOrder);
          }
        }]);

        return a;
      }(_core_JSONSupport_js__WEBPACK_IMPORTED_MODULE_9__["JSONSupport"]);

      Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_4__["property"])({
        json: {
          write: !0
        }
      })], a.prototype, "polynomialOrder", void 0), Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_4__["property"])({
        json: {
          write: !0
        }
      })], a.prototype, "forwardCoefficients", void 0), Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_4__["property"])({
        dependsOn: ["forwardCoefficients"],
        json: {
          write: !0
        }
      })], a.prototype, "inverseCoefficients", null), a = Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_subclass_js__WEBPACK_IMPORTED_MODULE_5__["subclass"])("esri.layers.support.rasterTransforms.PolynomialTransform")], a);
      var f = a;
      /* harmony default export */

      __webpack_exports__["default"] = f;
      /***/
    },

    /***/
    "i40u":
    /*!********************************************************************************!*\
      !*** ./node_modules/@arcgis/core/layers/support/rasterDatasets/CloudRaster.js ***!
      \********************************************************************************/

    /*! exports provided: default */

    /***/
    function i40u(module, __webpack_exports__, __webpack_require__) {
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


      var _core_maybe_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ../../../core/maybe.js */
      "srIe");
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


      var _core_accessorSupport_decorators_subclass_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ../../../core/accessorSupport/decorators/subclass.js */
      "04ZG");
      /* harmony import */


      var _core_Error_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! ../../../core/Error.js */
      "zlDU");
      /* harmony import */


      var _core_urlUtils_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! ../../../core/urlUtils.js */
      "4EHJ");
      /* harmony import */


      var _core_uuid_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! ../../../core/uuid.js */
      "ju1D");
      /* harmony import */


      var _portal_support_resourceExtension_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
      /*! ../../../portal/support/resourceExtension.js */
      "9AIY");
      /* harmony import */


      var _core_promiseUtils_js__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
      /*! ../../../core/promiseUtils.js */
      "9MzC");
      /* harmony import */


      var _geometry_SpatialReference_js__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
      /*! ../../../geometry/SpatialReference.js */
      "WZb1");
      /* harmony import */


      var _geometry_Point_js__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
      /*! ../../../geometry/Point.js */
      "SuVq");
      /* harmony import */


      var _geometry_Extent_js__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(
      /*! ../../../geometry/Extent.js */
      "OvF4");
      /* harmony import */


      var _geometry_js__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(
      /*! ../../../geometry.js */
      "4GrV");
      /* harmony import */


      var _tasks_support_FeatureSet_js__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(
      /*! ../../../tasks/support/FeatureSet.js */
      "8prj");
      /* harmony import */


      var _TileInfo_js__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(
      /*! ../TileInfo.js */
      "3/ME");
      /* harmony import */


      var _RasterInfo_js__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(
      /*! ../RasterInfo.js */
      "pPNP");
      /* harmony import */


      var _RasterStorageInfo_js__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(
      /*! ../RasterStorageInfo.js */
      "U9Ns");
      /* harmony import */


      var _BaseRaster_js__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(
      /*! ./BaseRaster.js */
      "HKGE");
      /* harmony import */


      var _DBFParser_js__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(
      /*! ./DBFParser.js */
      "Rjnn");
      /*
      All material copyright ESRI, All Rights Reserved, unless otherwise specified.
      See https://js.arcgis.com/4.18/esri/copyright.txt for details.
      */


      var h = new Map();
      h.set("int16", "esriFieldTypeSmallInteger"), h.set("int32", "esriFieldTypeInteger"), h.set("int64", "esriFieldTypeInteger"), h.set("float32", "esriFieldTypeSingle"), h.set("float64", "esriFieldTypeDouble"), h.set("text", "esriFieldTypeString");

      var g = /*#__PURE__*/function (_BaseRaster_js__WEBPA4) {
        _inherits(g, _BaseRaster_js__WEBPA4);

        var _super9 = _createSuper(g);

        function g() {
          var _this11;

          _classCallCheck(this, g);

          _this11 = _super9.apply(this, arguments), _this11.storageInfo = null, _this11.datasetFormat = "CRF";
          return _this11;
        }

        _createClass(g, [{
          key: "open",
          value: function () {
            var _open6 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee27(e) {
              var _yield$this$request4, t, _this$_parseHeader2, r, o, _e14;

              return regeneratorRuntime.wrap(function _callee27$(_context27) {
                while (1) {
                  switch (_context27.prev = _context27.next) {
                    case 0:
                      _context27.next = 2;
                      return this.init();

                    case 2:
                      _context27.next = 4;
                      return this.request(this.url + "/conf.json", {
                        signal: null == e ? void 0 : e.signal
                      });

                    case 4:
                      _yield$this$request4 = _context27.sent;
                      t = _yield$this$request4.data;

                      if (this._validateHeader(t)) {
                        _context27.next = 8;
                        break;
                      }

                      throw new _core_Error_js__WEBPACK_IMPORTED_MODULE_7__["default"]("cloudraster:open", "Invalid or unsupported conf.json.");

                    case 8:
                      this.datasetName = this.url.slice(this.url.lastIndexOf("/") + 1);
                      _this$_parseHeader2 = this._parseHeader(t), r = _this$_parseHeader2.storageInfo, o = _this$_parseHeader2.rasterInfo;

                      if (!("thematic" === o.dataType)) {
                        _context27.next = 15;
                        break;
                      }

                      _context27.next = 13;
                      return this._fetchAuxiliaryInformation();

                    case 13:
                      _e14 = _context27.sent;
                      o.attributeTable = _e14;

                    case 15:
                      this._set("storageInfo", r), this._set("rasterInfo", o), this.ioConfig.retryCount = this.ioConfig.retryCount || 0;

                    case 16:
                    case "end":
                      return _context27.stop();
                  }
                }
              }, _callee27, this);
            }));

            function open(_x48) {
              return _open6.apply(this, arguments);
            }

            return open;
          }()
        }, {
          key: "fetchRawTile",
          value: function () {
            var _fetchRawTile4 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee28(e, t, r) {
              var o,
                  i,
                  s,
                  a,
                  n,
                  l,
                  f,
                  m,
                  _args28 = arguments;
              return regeneratorRuntime.wrap(function _callee28$(_context28) {
                while (1) {
                  switch (_context28.prev = _context28.next) {
                    case 0:
                      o = _args28.length > 3 && _args28[3] !== undefined ? _args28[3] : {};
                      i = this.rasterInfo.storageInfo.maximumPyramidLevel - e;

                      if (!(i < 0)) {
                        _context28.next = 4;
                        break;
                      }

                      return _context28.abrupt("return", null);

                    case 4:
                      s = this._buildCacheFilePath(i, t, r, o.multidimensionalDefinition);
                      a = this._getIndexRecordFromBundle(t, r);
                      _context28.next = 8;
                      return this.request(s, {
                        range: {
                          from: 0,
                          to: this.storageInfo.headerSize - 1
                        },
                        responseType: "array-buffer",
                        signal: o.signal
                      });

                    case 8:
                      n = _context28.sent;

                      if (n) {
                        _context28.next = 11;
                        break;
                      }

                      return _context28.abrupt("return", null);

                    case 11:
                      l = new Uint8Array(n.data), f = this._getTileEndAndContentType(l, a);

                      if (!(0 === f.recordSize)) {
                        _context28.next = 14;
                        break;
                      }

                      return _context28.abrupt("return", null);

                    case 14:
                      _context28.next = 16;
                      return this.request(s, {
                        range: {
                          from: f.position,
                          to: f.position + f.recordSize
                        },
                        responseType: "array-buffer",
                        signal: o.signal
                      });

                    case 16:
                      m = _context28.sent;
                      return _context28.abrupt("return", m ? this.decodePixelBlock(m.data, {
                        width: this.rasterInfo.storageInfo.tileInfo.size[0],
                        height: this.rasterInfo.storageInfo.tileInfo.size[1],
                        planes: null,
                        pixelType: null
                      }) : null);

                    case 18:
                    case "end":
                      return _context28.stop();
                  }
                }
              }, _callee28, this);
            }));

            function fetchRawTile(_x49, _x50, _x51) {
              return _fetchRawTile4.apply(this, arguments);
            }

            return fetchRawTile;
          }()
        }, {
          key: "_validateHeader",
          value: function _validateHeader(e) {
            return e && "RasterInfo" === e.type && !["origin", "extent", "geodataXform", "LODInfos", "blockWidth", "blockHeight", "bandCount", "pixelType", "pixelSizeX", "pixelSizeY", "format", "packetSize"].some(function (t) {
              return !e[t];
            });
          }
        }, {
          key: "_parseHeader",
          value: function _parseHeader(e) {
            var t;

            var r = ["u1", "u2", "u4", "u8", "s8", "u16", "s16", "u32", "s32", "f32", "f64"][e.pixelType],
                o = e.bandCount,
                i = e.histograms,
                s = e.colormap,
                f = e.blockWidth,
                u = e.blockHeight,
                d = e.firstPyramidLevel,
                h = e.maximumPyramidLevel,
                _g5 = e.statistics && e.statistics.map(function (e) {
              return {
                min: e.min,
                max: e.max,
                avg: e.mean,
                stddev: e.standardDeviation,
                median: e.median,
                mode: e.mode
              };
            }),
                y = new _geometry_SpatialReference_js__WEBPACK_IMPORTED_MODULE_12__["default"](e.extent.spatialReference || e.geodataXform.spatialReference),
                x = new _geometry_Extent_js__WEBPACK_IMPORTED_MODULE_14__["default"]({
              xmin: e.extent.xmin,
              ymin: e.extent.ymin,
              xmax: e.extent.xmax,
              ymax: e.extent.ymax,
              spatialReference: y
            }),
                I = new _geometry_Point_js__WEBPACK_IMPORTED_MODULE_13__["default"]({
              x: e.pixelSizeX,
              y: e.pixelSizeY,
              spatialReference: y
            }),
                S = null != (t = e.properties) ? t : {},
                v = e.format.toLowerCase().replace("cache/", ""),
                b = new _geometry_Point_js__WEBPACK_IMPORTED_MODULE_13__["default"](e.origin.x, e.origin.y, y);

            var w, j, T, z;
            if (s && s.colors) for (w = [], j = 0; j < s.colors.length; j++) {
              T = s.colors[j], z = s.values ? s.values[j] : j, w.push([z, 255 & T, T << 16 >>> 24, T << 8 >>> 24, T >>> 24]);
            }
            var R = e.LODInfos,
                k = [];

            for (j = 0; j < R.levels.length; j++) {
              k.push({
                level: R.levels[j],
                resolution: R.resolutions[j],
                scale: 96 / .0254 * R.resolutions[j]
              });
            }

            var _ = new _TileInfo_js__WEBPACK_IMPORTED_MODULE_17__["default"]({
              dpi: 96,
              lods: k,
              format: v,
              origin: b,
              size: [f, u],
              spatialReference: y
            }),
                C = {
              recordSize: 8,
              packetSize: e.packetSize,
              headerSize: e.packetSize * e.packetSize * 8 + 64
            },
                F = Math.round((x.xmax - x.xmin) / I.x),
                H = Math.round((x.ymax - x.ymin) / I.y),
                P = [{
              maxCol: Math.ceil(F / f) - 1,
              maxRow: Math.ceil(H / u) - 1,
              minCol: 0,
              minRow: 0
            }];

            var L = 2;
            if (h > 0) for (j = 0; j < h; j++) {
              P.push({
                maxCol: Math.ceil(F / L / f) - 1,
                maxRow: Math.ceil(H / L / u) - 1,
                minCol: 0,
                minRow: 0
              }), L *= 2;
            }
            var D = e.mdInfo;
            return {
              storageInfo: C,
              rasterInfo: new _RasterInfo_js__WEBPACK_IMPORTED_MODULE_18__["default"]({
                width: F,
                height: H,
                pixelType: r,
                bandCount: o,
                extent: x,
                spatialReference: y,
                pixelSize: I,
                keyProperties: S,
                statistics: _g5,
                histograms: i,
                multidimensionalInfo: D,
                colormap: w,
                storageInfo: new _RasterStorageInfo_js__WEBPACK_IMPORTED_MODULE_19__["default"]({
                  blockWidth: f,
                  blockHeight: u,
                  pyramidBlockWidth: f,
                  pyramidBlockHeight: u,
                  origin: b,
                  tileInfo: _,
                  firstPyramidLevel: d,
                  maximumPyramidLevel: h,
                  blockBoundary: P
                })
              })
            };
          }
        }, {
          key: "_fetchAuxiliaryInformation",
          value: function () {
            var _fetchAuxiliaryInformation2 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee29(e) {
              var t, r, o, i, _e15, _t12, _r7;

              return regeneratorRuntime.wrap(function _callee29$(_context29) {
                while (1) {
                  switch (_context29.prev = _context29.next) {
                    case 0:
                      t = this.request(this.url + "/conf.vat.json", {
                        signal: e
                      }).then(function (e) {
                        return e.data;
                      })["catch"](function () {
                        return null;
                      });
                      r = this.request(this.url + "/conf.vat.dbf", {
                        responseType: "array-buffer",
                        signal: e
                      }).then(function (e) {
                        return e.data;
                      })["catch"](function () {
                        return null;
                      });
                      _context29.next = 4;
                      return Object(_core_promiseUtils_js__WEBPACK_IMPORTED_MODULE_11__["all"])([t, r]);

                    case 4:
                      o = _context29.sent;

                      if (o[0]) {
                        _e15 = o[0].fields;
                        _t12 = o[0].values;

                        if (_e15 && _t12) {
                          _e15 = _e15.map(function (e) {
                            return {
                              type: "OID" === e.name ? "esriFieldTypeOID" : h.get(e.type),
                              name: e.name,
                              alias: e.alias || e.name
                            };
                          });
                          _r7 = _t12.map(function (e) {
                            return {
                              attributes: e
                            };
                          });
                          _e15 && _t12 && (i = {
                            fields: _e15,
                            features: _r7
                          });
                        }
                      }

                      if (!i && o[1]) {
                        i = _DBFParser_js__WEBPACK_IMPORTED_MODULE_21__["default"].parse(o[1]).recordSet;
                      }

                      return _context29.abrupt("return", _tasks_support_FeatureSet_js__WEBPACK_IMPORTED_MODULE_16__["default"].fromJSON(i));

                    case 8:
                    case "end":
                      return _context29.stop();
                  }
                }
              }, _callee29, this);
            }));

            function _fetchAuxiliaryInformation(_x52) {
              return _fetchAuxiliaryInformation2.apply(this, arguments);
            }

            return _fetchAuxiliaryInformation;
          }()
        }, {
          key: "_buildCacheFilePath",
          value: function _buildCacheFilePath(e, r, o, i) {
            var s = this.storageInfo.packetSize,
                a = Math.floor(r / s) * s,
                n = Math.floor(o / s) * s,
                l = "R" + this._toHexString4(a) + "C" + this._toHexString4(n);

            var f = "L";
            f += e >= 10 ? e.toString() : "0" + e.toString();
            var m = this.rasterInfo.multidimensionalInfo,
                p = null == i ? void 0 : i[0];
            if (!Object(_core_maybe_js__WEBPACK_IMPORTED_MODULE_2__["isSome"])(m) || !p) return "".concat(this.url, "/_alllayers/").concat(f, "/").concat(l, ".bundle");
            var c = m.variables.filter(function (e) {
              return e.name === p.variableName;
            })[0].dimensions[0].values.indexOf(p.values[0]).toString(16);
            var u = 4 - c.length;

            for (var _e16 = 0; _e16 < u; _e16++) {
              c = "0" + c;
            }

            return c = "S" + c, "".concat(this.url, "/_alllayers/").concat(p.variableName, "/").concat(c, "/").concat(f, "/").concat(l, ".bundle");
          }
        }, {
          key: "_getIndexRecordFromBundle",
          value: function _getIndexRecordFromBundle(e, t) {
            var r = this.storageInfo.packetSize,
                o = r * (e % r) + t % r;
            if (o < 0) throw "Invalid level / row / col";
            return 20 + o * this.storageInfo.recordSize + 44;
          }
        }, {
          key: "_getTileEndAndContentType",
          value: function _getTileEndAndContentType(e, t) {
            var r = e.subarray(t, t + 8);
            var o,
                i = 0;

            for (o = 0; o < 5; o++) {
              i |= (255 & r[o]) << 8 * o;
            }

            var s = 0xffffffffff & i;

            for (i = 0, o = 5; o < 8; o++) {
              i |= (255 & r[o]) << 8 * (o - 5);
            }

            return {
              position: s,
              recordSize: 0xffffffffff & i
            };
          }
        }, {
          key: "_toHexString4",
          value: function _toHexString4(e) {
            var t = e.toString(16);

            if (4 !== t.length) {
              var _e17 = 4 - t.length;

              for (; _e17-- > 0;) {
                t = "0" + t;
              }
            }

            return t;
          }
        }]);

        return g;
      }(_BaseRaster_js__WEBPACK_IMPORTED_MODULE_20__["default"]);

      Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_5__["property"])({
        readOnly: !0
      })], g.prototype, "storageInfo", void 0), Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_5__["property"])({
        type: String,
        json: {
          write: !0
        }
      })], g.prototype, "datasetFormat", void 0), g = Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_subclass_js__WEBPACK_IMPORTED_MODULE_6__["subclass"])("esri.layers.support.rasterDatasets.CloudRaster")], g);
      var y = g;
      /* harmony default export */

      __webpack_exports__["default"] = y;
      /***/
    },

    /***/
    "jhcG":
    /*!*********************************************************************!*\
      !*** ./node_modules/@arcgis/core/layers/mixins/RefreshableLayer.js ***!
      \*********************************************************************/

    /*! exports provided: RefreshableLayer */

    /***/
    function jhcG(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "RefreshableLayer", function () {
        return o;
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


      var o = function o(_o3) {
        var t = /*#__PURE__*/function (_o2) {
          _inherits(t, _o2);

          var _super10 = _createSuper(t);

          function t() {
            var _this12;

            _classCallCheck(this, t);

            _this12 = _super10.apply(this, arguments), _this12.refreshInterval = 0;
            return _this12;
          }

          _createClass(t, [{
            key: "refresh",
            value: function refresh() {
              this.emit("refresh");
            }
          }]);

          return t;
        }(_o3);

        return Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_4__["property"])({
          type: Number,
          cast: function cast(r) {
            return r >= .1 ? r : r <= 0 ? 0 : .1;
          },
          json: {
            write: !0,
            origins: {
              "web-document": {
                write: !0
              }
            }
          }
        })], t.prototype, "refreshInterval", void 0), t = Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_subclass_js__WEBPACK_IMPORTED_MODULE_5__["subclass"])("esri.layers.mixins.RefreshableLayer")], t), t;
      };
      /***/

    },

    /***/
    "mRf7":
    /*!**************************************************************!*\
      !*** ./node_modules/@arcgis/core/layers/ImageryTileLayer.js ***!
      \**************************************************************/

    /*! exports provided: default */

    /***/
    function mRf7(module, __webpack_exports__, __webpack_require__) {
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


      var _core_jsonMap_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ../core/jsonMap.js */
      "+opI");
      /* harmony import */


      var _core_accessorSupport_decorators_enumeration_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! ../core/accessorSupport/decorators/enumeration.js */
      "RI0u");
      /* harmony import */


      var _core_accessorSupport_decorators_reader_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! ../core/accessorSupport/decorators/reader.js */
      "r88o");
      /* harmony import */


      var _core_accessorSupport_decorators_subclass_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! ../core/accessorSupport/decorators/subclass.js */
      "04ZG");
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


      var _PopupTemplate_js__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(
      /*! ../PopupTemplate.js */
      "SFah");
      /* harmony import */


      var _Layer_js__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(
      /*! ./Layer.js */
      "pqNC");
      /* harmony import */


      var _core_MultiOriginJSONSupport_js__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(
      /*! ../core/MultiOriginJSONSupport.js */
      "5pQd");
      /* harmony import */


      var _support_commonProperties_js__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(
      /*! ./support/commonProperties.js */
      "IvSi");
      /* harmony import */


      var _mixins_OperationalLayer_js__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(
      /*! ./mixins/OperationalLayer.js */
      "uRH/");
      /* harmony import */


      var _rasterRenderers_js__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(
      /*! ../rasterRenderers.js */
      "ukD5");
      /* harmony import */


      var _support_Field_js__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(
      /*! ./support/Field.js */
      "ofM5");
      /* harmony import */


      var _mixins_BlendLayer_js__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(
      /*! ./mixins/BlendLayer.js */
      "mXvl");
      /* harmony import */


      var _mixins_PortalLayer_js__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(
      /*! ./mixins/PortalLayer.js */
      "DbUH");
      /* harmony import */


      var _mixins_RefreshableLayer_js__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(
      /*! ./mixins/RefreshableLayer.js */
      "jhcG");
      /* harmony import */


      var _mixins_ScaleRangeLayer_js__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(
      /*! ./mixins/ScaleRangeLayer.js */
      "WmKv");
      /* harmony import */


      var _support_popupUtils_js__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(
      /*! ../support/popupUtils.js */
      "9Ruv");
      /* harmony import */


      var _mixins_ImageryTileMixin_js__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(
      /*! ./mixins/ImageryTileMixin.js */
      "eXaU");
      /* harmony import */


      var _support_rasterDatasets_RasterFactory_js__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(
      /*! ./support/rasterDatasets/RasterFactory.js */
      "Iy2z");
      /*
      All material copyright ESRI, All Rights Reserved, unless otherwise specified.
      See https://js.arcgis.com/4.18/esri/copyright.txt for details.
      */


      var I = Object(_core_jsonMap_js__WEBPACK_IMPORTED_MODULE_6__["strict"])()({
        RSP_NearestNeighbor: "nearest",
        RSP_BilinearInterpolation: "bilinear",
        RSP_CubicConvolution: "cubic",
        RSP_Majority: "majority"
      });

      function O() {
        return {
          enabled: !this.loaded || "RasterTileServer" === this.raster.datasetFormat && "Raster" === this.raster.tileType
        };
      }

      var x = /*#__PURE__*/function (_Object3) {
        _inherits(x, _Object3);

        var _super11 = _createSuper(x);

        function x() {
          var _this13;

          _classCallCheck(this, x);

          for (var _len = arguments.length, e = new Array(_len), _key = 0; _key < _len; _key++) {
            e[_key] = arguments[_key];
          }

          _this13 = _super11.call.apply(_super11, [this].concat(e)), _this13.bandIds = null, _this13.interpolation = null, _this13.legendEnabled = !0, _this13.isReference = null, _this13.listMode = "show", _this13.sourceJSON = null, _this13.version = null, _this13.title = null, _this13.type = "imagery-tile", _this13.operationalLayerType = "ArcGISTiledImageServiceLayer", _this13.popupEnabled = !0, _this13.popupTemplate = null;
          return _this13;
        }

        _createClass(x, [{
          key: "normalizeCtorArgs",
          value: function normalizeCtorArgs(e, r) {
            return "string" == typeof e ? _objectSpread({
              url: e
            }, r) : e;
          }
        }, {
          key: "load",
          value: function load(e) {
            var _this14 = this;

            var t = Object(_core_maybe_js__WEBPACK_IMPORTED_MODULE_2__["isSome"])(e) ? e.signal : null;
            return this.addResolvingPromise(this.loadFromPortal({
              supportedTypes: ["Image Service"]
            }, e).then(function () {
              return _this14._openRaster(t);
            }, function () {
              return _this14._openRaster(t);
            })), Object(_core_promiseUtils_js__WEBPACK_IMPORTED_MODULE_14__["resolve"])(this);
          }
        }, {
          key: "defaultPopupTemplate",
          get: function get() {
            return this.createPopupTemplate();
          }
        }, {
          key: "fields",
          get: function get() {
            var e, r;
            var t = [new _support_Field_js__WEBPACK_IMPORTED_MODULE_21__["default"]({
              name: "Raster.ServicePixelValue",
              alias: "Pixel Value",
              domain: null,
              editable: !1,
              length: 50,
              type: "string"
            })];
            var o = null == (e = this.rasterInfo) || null == (r = e.attributeTable) ? void 0 : r.fields;

            if (o) {
              var _e18 = o.filter(function (e) {
                return "oid" !== e.type && "value" !== e.name.toLowerCase();
              }).map(function (e) {
                var r = e.clone();
                return r.name = "Raster." + e.name, r;
              });

              t = t.concat(_e18);
            }

            return t;
          }
        }, {
          key: "renderer",
          set: function set(e) {
            this._set("renderer", e), this.updateRenderer();
          }
        }, {
          key: "readRenderer",
          value: function readRenderer(e, r, t) {
            var o = r && r.layerDefinition && r.layerDefinition.drawingInfo && r.layerDefinition.drawingInfo.renderer,
                i = Object(_rasterRenderers_js__WEBPACK_IMPORTED_MODULE_20__["read"])(o, t) || void 0;
            if (null != i) return i;
          }
        }, {
          key: "createPopupTemplate",
          value: function createPopupTemplate(e) {
            return Object(_support_popupUtils_js__WEBPACK_IMPORTED_MODULE_26__["createPopupTemplate"])(this, e);
          }
        }, {
          key: "write",
          value: function write(e, r) {
            var t = this.raster;
            if (this.loaded ? "RasterTileServer" === t.datasetFormat && ("Raster" === t.tileType || "Map" === t.tileType) : this.url && /\/ImageServer(\/|\/?$)/i.test(this.url)) return _get(_getPrototypeOf(x.prototype), "write", this).call(this, e, r);

            if (r && r.messages) {
              var _e19 = "".concat(r.origin, "/").concat(r.layerContainerType || "operational-layers");

              r.messages.push(new _core_Error_js__WEBPACK_IMPORTED_MODULE_10__["default"]("layer:unsupported", "Layers (".concat(this.title, ", ").concat(this.id, ") of type '").concat(this.declaredClass, "' are not supported in the context of '").concat(_e19, "'"), {
                layer: this
              }));
            }

            return null;
          }
        }, {
          key: "_openRaster",
          value: function () {
            var _openRaster2 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee30(e) {
              var r;
              return regeneratorRuntime.wrap(function _callee30$(_context30) {
                while (1) {
                  switch (_context30.prev = _context30.next) {
                    case 0:
                      if (!this.raster) {
                        _context30.next = 8;
                        break;
                      }

                      _context30.t0 = this.raster.rasterInfo;

                      if (_context30.t0) {
                        _context30.next = 5;
                        break;
                      }

                      _context30.next = 5;
                      return this.raster.open();

                    case 5:
                      this.url = this.raster.url;
                      _context30.next = 11;
                      break;

                    case 8:
                      _context30.next = 10;
                      return _support_rasterDatasets_RasterFactory_js__WEBPACK_IMPORTED_MODULE_28__["default"].open({
                        url: this.url,
                        sourceJSON: this.sourceJSON,
                        ioConfig: this.ioConfig,
                        signal: e
                      });

                    case 10:
                      this.raster = _context30.sent;

                    case 11:
                      r = this.raster.rasterInfo;

                      if (r) {
                        _context30.next = 14;
                        break;
                      }

                      throw new _core_Error_js__WEBPACK_IMPORTED_MODULE_10__["default"]("imagery-tile-layer:load", "cannot load resources on " + this.url);

                    case 14:
                      this.sourceJSON = this.sourceJSON || this.raster.sourceJSON, null != this.sourceJSON && (this._set("version", this.sourceJSON.currentVersion), this._set("copyright", this.sourceJSON.copyrightText)), null == this.title && (this.title = this.raster.datasetName), "Map" === this.raster.tileType && (this.popupEnabled = !1), this._configDefaultSettings();

                    case 15:
                    case "end":
                      return _context30.stop();
                  }
                }
              }, _callee30, this);
            }));

            function _openRaster(_x53) {
              return _openRaster2.apply(this, arguments);
            }

            return _openRaster;
          }()
        }]);

        return x;
      }(Object(_mixins_BlendLayer_js__WEBPACK_IMPORTED_MODULE_22__["BlendLayer"])(Object(_mixins_ScaleRangeLayer_js__WEBPACK_IMPORTED_MODULE_25__["ScaleRangeLayer"])(Object(_mixins_RefreshableLayer_js__WEBPACK_IMPORTED_MODULE_24__["RefreshableLayer"])(Object(_mixins_OperationalLayer_js__WEBPACK_IMPORTED_MODULE_19__["OperationalLayer"])(Object(_mixins_PortalLayer_js__WEBPACK_IMPORTED_MODULE_23__["PortalLayer"])(Object(_mixins_ImageryTileMixin_js__WEBPACK_IMPORTED_MODULE_27__["ImageryTileMixin"])(Object(_core_MultiOriginJSONSupport_js__WEBPACK_IMPORTED_MODULE_17__["MultiOriginJSONMixin"])(_Layer_js__WEBPACK_IMPORTED_MODULE_16__["default"]))))))));

      Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_5__["property"])()], x.prototype, "ioConfig", void 0), Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_5__["property"])({
        type: [_core_accessorSupport_ensureType_js__WEBPACK_IMPORTED_MODULE_4__["Integer"]],
        json: {
          write: {
            overridePolicy: O
          }
        }
      })], x.prototype, "bandIds", void 0), Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_5__["property"])({
        json: {
          write: {
            overridePolicy: O
          }
        }
      }), Object(_core_accessorSupport_decorators_enumeration_js__WEBPACK_IMPORTED_MODULE_7__["enumeration"])(I)], x.prototype, "interpolation", void 0), Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_5__["property"])({
        json: {
          write: !0
        }
      })], x.prototype, "multidimensionalDefinition", void 0), Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_5__["property"])(_support_commonProperties_js__WEBPACK_IMPORTED_MODULE_18__["legendEnabled"])], x.prototype, "legendEnabled", void 0), Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_5__["property"])({
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
      })], x.prototype, "isReference", void 0), Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_5__["property"])({
        type: ["show", "hide"]
      })], x.prototype, "listMode", void 0), Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_5__["property"])()], x.prototype, "sourceJSON", void 0), Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_5__["property"])({
        readOnly: !0
      })], x.prototype, "version", void 0), Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_5__["property"])()], x.prototype, "title", void 0), Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_5__["property"])({
        readOnly: !0,
        json: {
          read: !1
        }
      })], x.prototype, "type", void 0), Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_5__["property"])({
        type: ["ArcGISTiledImageServiceLayer"]
      })], x.prototype, "operationalLayerType", void 0), Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_5__["property"])({
        type: Boolean,
        value: !0,
        json: {
          read: {
            source: "disablePopup",
            reader: function reader(e, r) {
              return !r.disablePopup;
            }
          },
          write: {
            target: "disablePopup",
            overridePolicy: O,
            writer: function writer(e, r, t) {
              r[t] = !e;
            }
          }
        }
      })], x.prototype, "popupEnabled", void 0), Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_5__["property"])({
        type: _PopupTemplate_js__WEBPACK_IMPORTED_MODULE_15__["default"],
        json: {
          read: {
            source: "popupInfo"
          },
          write: {
            target: "popupInfo",
            overridePolicy: O
          }
        }
      })], x.prototype, "popupTemplate", void 0), Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_5__["property"])({
        readOnly: !0,
        dependsOn: ["title"]
      })], x.prototype, "defaultPopupTemplate", null), Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_5__["property"])({
        readOnly: !0,
        type: [_support_Field_js__WEBPACK_IMPORTED_MODULE_21__["default"]],
        dependsOn: ["rasterInfo"]
      })], x.prototype, "fields", null), Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_5__["property"])({
        types: _rasterRenderers_js__WEBPACK_IMPORTED_MODULE_20__["rasterRendererTypes"],
        json: {
          name: "layerDefinition.drawingInfo.renderer",
          write: {
            overridePolicy: O
          },
          origins: {
            "web-scene": {
              types: _rasterRenderers_js__WEBPACK_IMPORTED_MODULE_20__["websceneRasterRendererTypes"],
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
      })], x.prototype, "renderer", null), Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_reader_js__WEBPACK_IMPORTED_MODULE_8__["reader"])("renderer")], x.prototype, "readRenderer", null), x = Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_subclass_js__WEBPACK_IMPORTED_MODULE_9__["subclass"])("esri.layers.ImageryTileLayer")], x);
      var L = x;
      /* harmony default export */

      __webpack_exports__["default"] = L;
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


      var t = function t(_t14) {
        var s = /*#__PURE__*/function (_t13) {
          _inherits(s, _t13);

          var _super12 = _createSuper(s);

          function s() {
            var _this15;

            _classCallCheck(this, s);

            _this15 = _super12.apply(this, arguments), _this15.blendMode = "normal", _this15.effect = null;
            return _this15;
          }

          return s;
        }(_t14);

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
    "pLC1":
    /*!*******************************************************************************!*\
      !*** ./node_modules/@arcgis/core/layers/support/rasterDatasets/TIFFRaster.js ***!
      \*******************************************************************************/

    /*! exports provided: default */

    /***/
    function pLC1(module, __webpack_exports__, __webpack_require__) {
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


      var _core_maybe_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ../../../core/maybe.js */
      "srIe");
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


      var _core_accessorSupport_decorators_subclass_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ../../../core/accessorSupport/decorators/subclass.js */
      "04ZG");
      /* harmony import */


      var _core_Error_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! ../../../core/Error.js */
      "zlDU");
      /* harmony import */


      var _core_urlUtils_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! ../../../core/urlUtils.js */
      "4EHJ");
      /* harmony import */


      var _core_uuid_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! ../../../core/uuid.js */
      "ju1D");
      /* harmony import */


      var _portal_support_resourceExtension_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
      /*! ../../../portal/support/resourceExtension.js */
      "9AIY");
      /* harmony import */


      var _geometry_Point_js__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
      /*! ../../../geometry/Point.js */
      "SuVq");
      /* harmony import */


      var _geometry_Extent_js__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
      /*! ../../../geometry/Extent.js */
      "OvF4");
      /* harmony import */


      var _geometry_js__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
      /*! ../../../geometry.js */
      "4GrV");
      /* harmony import */


      var _RasterInfo_js__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(
      /*! ../RasterInfo.js */
      "pPNP");
      /* harmony import */


      var _rasterFormats_TiffTags_js__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(
      /*! ../rasterFormats/TiffTags.js */
      "D/0F");
      /* harmony import */


      var _rasterFormats_TiffDecoder_js__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(
      /*! ../rasterFormats/TiffDecoder.js */
      "bT0G");
      /* harmony import */


      var _rasterFunctions_pixelUtils_js__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(
      /*! ../rasterFunctions/pixelUtils.js */
      "ne7T");
      /* harmony import */


      var _RasterStorageInfo_js__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(
      /*! ../RasterStorageInfo.js */
      "U9Ns");
      /* harmony import */


      var _BaseRaster_js__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(
      /*! ./BaseRaster.js */
      "HKGE");
      /* harmony import */


      var _pamParser_js__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(
      /*! ./pamParser.js */
      "VO3a");
      /*
      All material copyright ESRI, All Rights Reserved, unless otherwise specified.
      See https://js.arcgis.com/4.18/esri/copyright.txt for details.
      */


      var I = function I(t, e) {
        var r = t.get(e);
        return r && r.values;
      },
          T = function T(t, e) {
        var r = t.get(e);
        return r && r.values[0];
      };

      var x = /*#__PURE__*/function (_BaseRaster_js__WEBPA5) {
        _inherits(x, _BaseRaster_js__WEBPA5);

        var _super13 = _createSuper(x);

        function x() {
          var _this16;

          _classCallCheck(this, x);

          _this16 = _super13.apply(this, arguments), _this16._files = null, _this16._headerInfo = null, _this16._bufferSize = 1048576, _this16.datasetFormat = "TIFF";
          return _this16;
        }

        _createClass(x, [{
          key: "open",
          value: function () {
            var _open7 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee31(t) {
              var i, s, _yield$this$request5, l, _Object4, h, m, y, g, I, T, _x54, w, F, E, S, b, _, v, j, B, k, D, L, R, O, z, H, G, P, e, q;

              return regeneratorRuntime.wrap(function _callee31$(_context31) {
                while (1) {
                  switch (_context31.prev = _context31.next) {
                    case 0:
                      _context31.next = 2;
                      return this.init();

                    case 2:
                      s = t ? Object(_core_maybe_js__WEBPACK_IMPORTED_MODULE_2__["unwrap"])(t.signal) : null;
                      _context31.next = 5;
                      return this.request(this.url, {
                        range: {
                          from: 0,
                          to: this._bufferSize
                        },
                        responseType: "array-buffer",
                        signal: s
                      });

                    case 5:
                      _yield$this$request5 = _context31.sent;
                      l = _yield$this$request5.data;

                      if (l) {
                        _context31.next = 9;
                        break;
                      }

                      throw new _core_Error_js__WEBPACK_IMPORTED_MODULE_7__["default"]("tiffraster:open", "failed to open url " + this.url);

                    case 9:
                      this.datasetName = this.url.slice(this.url.lastIndexOf("/") + 1);
                      _Object4 = Object(_rasterFormats_TiffDecoder_js__WEBPACK_IMPORTED_MODULE_16__["parseSignature"])(l), h = _Object4.littleEndian, m = _Object4.firstIFD, y = _Object4.isBigTiff, g = [];
                      _context31.next = 13;
                      return this.readIFDs(g, l, h, m, 0, y ? 8 : 4, s);

                    case 13:
                      I = Object(_rasterFormats_TiffDecoder_js__WEBPACK_IMPORTED_MODULE_16__["getImageInfo"])(g), T = I.width, _x54 = I.height, w = I.tileWidth, F = I.tileHeight, E = I.planes, S = I.pixelType, b = I.compression, _ = I.firstPyramidLevel, v = I.maximumPyramidLevel, j = I.pyramidBlockWidth, B = I.pyramidBlockHeight, k = I.tileBoundary, D = I.metadata, L = _geometry_Extent_js__WEBPACK_IMPORTED_MODULE_12__["default"].fromJSON(I.extent), R = L.spatialReference, O = new _geometry_Point_js__WEBPACK_IMPORTED_MODULE_11__["default"](L ? {
                        x: L.xmin,
                        y: L.ymax,
                        spatialReference: R
                      } : {
                        x: 0,
                        y: 0
                      }), z = new _RasterStorageInfo_js__WEBPACK_IMPORTED_MODULE_18__["default"]({
                        blockWidth: w,
                        blockHeight: F,
                        pyramidBlockWidth: j,
                        pyramidBlockHeight: B,
                        compression: b,
                        origin: O,
                        firstPyramidLevel: _,
                        maximumPyramidLevel: v,
                        blockBoundary: k
                      }), H = new _geometry_Point_js__WEBPACK_IMPORTED_MODULE_11__["default"]({
                        x: (L.xmax - L.xmin) / T,
                        y: (L.ymax - L.ymin) / _x54,
                        spatialReference: R
                      }), G = D ? {
                        BandProperties: D.bandProperties,
                        DataType: D.dataType
                      } : {}, P = new _RasterInfo_js__WEBPACK_IMPORTED_MODULE_14__["default"]({
                        width: T,
                        height: _x54,
                        bandCount: E,
                        pixelType: S,
                        compression: b,
                        pixelSize: H,
                        storageInfo: z,
                        spatialReference: R,
                        keyProperties: G,
                        extent: L,
                        statistics: D ? D.statistics : null
                      });

                      if (!(-1 === (null == (i = this.ioConfig.skipExtensions) ? void 0 : i.indexOf("aux.xml")))) {
                        _context31.next = 19;
                        break;
                      }

                      _context31.next = 17;
                      return this._fetchAuxiliaryData(t);

                    case 17:
                      e = _context31.sent;
                      if (null != e) P.statistics = null != (q = e.statistics) ? q : P.statistics, P.histograms = e.histograms, e.histograms && !Object(_core_maybe_js__WEBPACK_IMPORTED_MODULE_2__["isSome"])(P.statistics) && (P.statistics = Object(_rasterFunctions_pixelUtils_js__WEBPACK_IMPORTED_MODULE_17__["estimateStatisticsFromHistograms"])(e.histograms));

                    case 19:
                      if (!(this._set("rasterInfo", P), this._headerInfo = _objectSpread({
                        littleEndian: h,
                        isBigTiff: y,
                        ifds: g
                      }, I), !this._headerInfo.isSupported)) {
                        _context31.next = 21;
                        break;
                      }

                      throw new _core_Error_js__WEBPACK_IMPORTED_MODULE_7__["default"]("tiffraster:open", "this tiff is not supported: " + this._headerInfo.message);

                    case 21:
                      this.updateTileInfo();

                    case 22:
                    case "end":
                      return _context31.stop();
                  }
                }
              }, _callee31, this);
            }));

            function open(_x56) {
              return _open7.apply(this, arguments);
            }

            return open;
          }()
        }, {
          key: "fetchRawTile",
          value: function () {
            var _fetchRawTile5 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee32(t, e, r) {
              var i,
                  s,
                  a,
                  o,
                  n,
                  f,
                  l,
                  u,
                  p,
                  h,
                  _yield$this$request6,
                  m,
                  c,
                  d,
                  y,
                  g,
                  _t15,
                  _args32 = arguments;

              return regeneratorRuntime.wrap(function _callee32$(_context32) {
                while (1) {
                  switch (_context32.prev = _context32.next) {
                    case 0:
                      i = _args32.length > 3 && _args32[3] !== undefined ? _args32[3] : {};

                      if (!(!this._headerInfo && this._headerInfo.isSupported)) {
                        _context32.next = 3;
                        break;
                      }

                      return _context32.abrupt("return", null);

                    case 3:
                      s = this.rasterInfo.storageInfo.blockBoundary, a = t > 0 ? this.rasterInfo.storageInfo.pyramidBlockWidth : this.rasterInfo.storageInfo.blockWidth, o = t > 0 ? this.rasterInfo.storageInfo.pyramidBlockHeight : this.rasterInfo.storageInfo.blockHeight, n = s[t];

                      if (!(!n || n.maxRow < e || n.maxCol < r || n.minRow > e || n.minCol > r)) {
                        _context32.next = 6;
                        break;
                      }

                      return _context32.abrupt("return", null);

                    case 6:
                      f = this.getTileLocation(t, e, r);

                      if (f) {
                        _context32.next = 9;
                        break;
                      }

                      return _context32.abrupt("return", null);

                    case 9:
                      l = f.range;
                      u = f.actualTileWidth;
                      p = f.actualTileHeight;
                      h = f.ifd;
                      _context32.next = 15;
                      return this.request(this.url, {
                        range: l,
                        responseType: "array-buffer",
                        signal: i.signal
                      });

                    case 15:
                      _yield$this$request6 = _context32.sent;
                      m = _yield$this$request6.data;
                      _context32.next = 19;
                      return this.decodePixelBlock(m, {
                        format: "tiff",
                        customOptions: {
                          headerInfo: this._headerInfo,
                          ifd: h,
                          offset: 0,
                          size: 0
                        },
                        width: a,
                        height: o,
                        planes: null,
                        pixelType: null
                      });

                    case 19:
                      c = _context32.sent;

                      if (u !== a || p !== o) {
                        _t15 = c.mask;
                        if (_t15) for (d = 0; d < o; d++) {
                          if (g = d * a, d < p) for (y = u; y < a; y++) {
                            _t15[g + y] = 0;
                          } else for (y = 0; y < a; y++) {
                            _t15[g + y] = 0;
                          }
                        } else for (_t15 = new Uint8Array(a * o), c.mask = _t15, d = 0; d < p; d++) {
                          for (g = d * a, y = 0; y < u; y++) {
                            _t15[g + y] = 1;
                          }
                        }
                      }

                      return _context32.abrupt("return", c);

                    case 22:
                    case "end":
                      return _context32.stop();
                  }
                }
              }, _callee32, this);
            }));

            function fetchRawTile(_x57, _x58, _x59) {
              return _fetchRawTile5.apply(this, arguments);
            }

            return fetchRawTile;
          }()
        }, {
          key: "readIFDs",
          value: function () {
            var _readIFDs = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee33(t, e, r, i, s) {
              var a,
                  o,
                  n,
                  _args33 = arguments;
              return regeneratorRuntime.wrap(function _callee33$(_context33) {
                while (1) {
                  switch (_context33.prev = _context33.next) {
                    case 0:
                      a = _args33.length > 5 && _args33[5] !== undefined ? _args33[5] : 4;
                      o = _args33.length > 6 ? _args33[6] : undefined;

                      if (i) {
                        _context33.next = 4;
                        break;
                      }

                      return _context33.abrupt("return", null);

                    case 4:
                      if (!(i >= e.byteLength || i < 0)) {
                        _context33.next = 10;
                        break;
                      }

                      _context33.next = 7;
                      return this.request(this.url, {
                        range: {
                          from: i + s,
                          to: i + s + this._bufferSize
                        },
                        responseType: "array-buffer",
                        signal: o
                      });

                    case 7:
                      e = _context33.sent.data;
                      s = i + s;
                      i = 0;

                    case 10:
                      _context33.next = 12;
                      return this.readIFD(e, r, i, s, _rasterFormats_TiffTags_js__WEBPACK_IMPORTED_MODULE_15__["default"].TIFF_TAGS, a, o);

                    case 12:
                      n = _context33.sent;

                      if (!(t.push(n.ifd), !n.nextIFD)) {
                        _context33.next = 15;
                        break;
                      }

                      return _context33.abrupt("return", null);

                    case 15:
                      _context33.next = 17;
                      return this.readIFDs(t, e, r, n.nextIFD - s, s, a, o);

                    case 17:
                    case "end":
                      return _context33.stop();
                  }
                }
              }, _callee33, this);
            }));

            function readIFDs(_x60, _x61, _x62, _x63, _x64) {
              return _readIFDs.apply(this, arguments);
            }

            return readIFDs;
          }()
        }, {
          key: "readIFD",
          value: function () {
            var _readIFD = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee34(t, e, r, i) {
              var s,
                  a,
                  o,
                  n,
                  _r8,
                  _s4,
                  _a3,
                  _yield$this$request7,
                  _s5,
                  _r9,
                  _s6,
                  _a4,
                  _n4,
                  _r10,
                  _args34 = arguments;

              return regeneratorRuntime.wrap(function _callee34$(_context34) {
                while (1) {
                  switch (_context34.prev = _context34.next) {
                    case 0:
                      s = _args34.length > 4 && _args34[4] !== undefined ? _args34[4] : _rasterFormats_TiffTags_js__WEBPACK_IMPORTED_MODULE_15__["default"].TIFF_TAGS;
                      a = _args34.length > 5 && _args34[5] !== undefined ? _args34[5] : 4;
                      o = _args34.length > 6 ? _args34[6] : undefined;

                      if (t) {
                        _context34.next = 5;
                        break;
                      }

                      return _context34.abrupt("return", null);

                    case 5:
                      n = Object(_rasterFormats_TiffDecoder_js__WEBPACK_IMPORTED_MODULE_16__["parseIFD"])(t, e, r, i, s, a);

                      if (!n.success) {
                        _context34.next = 25;
                        break;
                      }

                      _r8 = [];

                      if (!(n.ifd.forEach(function (t) {
                        t.values || _r8.push(t);
                      }), _r8.length > 0)) {
                        _context34.next = 16;
                        break;
                      }

                      _s4 = _r8.map(function (t) {
                        return t.offlineOffsetSize;
                      }), _a3 = Math.min.apply(null, _s4.map(function (t) {
                        return t[0];
                      }));

                      if (!(Math.min.apply(null, _s4.map(function (t) {
                        return t[0] + t[1];
                      })) - _a3 <= this._bufferSize)) {
                        _context34.next = 16;
                        break;
                      }

                      _context34.next = 13;
                      return this.request(this.url, {
                        range: {
                          from: _a3,
                          to: _a3 + this._bufferSize
                        },
                        responseType: "array-buffer",
                        signal: o
                      });

                    case 13:
                      _yield$this$request7 = _context34.sent;
                      _s5 = _yield$this$request7.data;
                      t = _s5, i = _a3, _r8.forEach(function (r) {
                        return Object(_rasterFormats_TiffDecoder_js__WEBPACK_IMPORTED_MODULE_16__["parseFieldValues"])(t, e, r, i);
                      });

                    case 16:
                      if (!n.ifd.has("GEOKEYDIRECTORY")) {
                        _context34.next = 24;
                        break;
                      }

                      _r9 = n.ifd.get("GEOKEYDIRECTORY"), _s6 = _r9.values;

                      if (!(_s6 && _s6.length > 4)) {
                        _context34.next = 24;
                        break;
                      }

                      _a4 = _s6[0] + "." + _s6[1] + "." + _s6[2];
                      _context34.next = 22;
                      return this.readIFD(t, e, _r9.valueOffset + 6 - i, i, _rasterFormats_TiffTags_js__WEBPACK_IMPORTED_MODULE_15__["default"].GEO_KEYS, 2, o);

                    case 22:
                      _n4 = _context34.sent;
                      _r9.data = _n4.ifd, _r9.data && _r9.data.set("GEOTIFFVersion", {
                        id: 0,
                        type: 2,
                        valueCount: 1,
                        valueOffset: null,
                        values: [_a4]
                      });

                    case 24:
                      return _context34.abrupt("return", n);

                    case 25:
                      if (!(n.requiredBufferSize && n.requiredBufferSize !== t.byteLength)) {
                        _context34.next = 30;
                        break;
                      }

                      _context34.next = 28;
                      return this.request(this.url, {
                        range: {
                          from: i,
                          to: i + n.requiredBufferSize + 4
                        },
                        responseType: "array-buffer",
                        signal: o
                      });

                    case 28:
                      _r10 = _context34.sent;
                      return _context34.abrupt("return", (t = _r10.data).byteLength < n.requiredBufferSize ? null : this.readIFD(t, e, 0, i, _rasterFormats_TiffTags_js__WEBPACK_IMPORTED_MODULE_15__["default"].TIFF_TAGS, 4, o));

                    case 30:
                    case "end":
                      return _context34.stop();
                  }
                }
              }, _callee34, this);
            }));

            function readIFD(_x65, _x66, _x67, _x68) {
              return _readIFD.apply(this, arguments);
            }

            return readIFD;
          }()
        }, {
          key: "getTileLocation",
          value: function getTileLocation(t, e, r) {
            var _this$rasterInfo$stor6 = this.rasterInfo.storageInfo,
                i = _this$rasterInfo$stor6.firstPyramidLevel,
                s = _this$rasterInfo$stor6.blockBoundary,
                a = 0 === t ? 0 : t - (i - 1),
                o = this._headerInfo.ifds[a];
            if (!o) return null;
            var n = I(o, "TILEOFFSETS");
            if (void 0 === n) return null;
            var f = I(o, "TILEBYTECOUNTS"),
                _s$a = s[a],
                l = _s$a.minRow,
                u = _s$a.minCol,
                p = _s$a.maxRow,
                h = _s$a.maxCol;
            if (e > p || r > h || e < l || r < u) return null;
            var m = T(o, "IMAGEWIDTH"),
                c = T(o, "IMAGELENGTH"),
                d = T(o, "TILEWIDTH"),
                y = T(o, "TILELENGTH"),
                g = e * (h + 1) + r,
                _x55 = n[g],
                w = f[g];
            if (null == _x55 || null == w) return null;
            return {
              range: {
                from: _x55,
                to: _x55 + w - 1
              },
              ifd: o,
              actualTileWidth: r === h ? m % d : d,
              actualTileHeight: e === p ? c % y : y
            };
          }
        }, {
          key: "_fetchAuxiliaryData",
          value: function () {
            var _fetchAuxiliaryData4 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee35(t) {
              var _yield$this$request8, e;

              return regeneratorRuntime.wrap(function _callee35$(_context35) {
                while (1) {
                  switch (_context35.prev = _context35.next) {
                    case 0:
                      _context35.prev = 0;
                      _context35.next = 3;
                      return this.request(this.url + ".aux.xml", {
                        responseType: "xml",
                        signal: null == t ? void 0 : t.signal
                      });

                    case 3:
                      _yield$this$request8 = _context35.sent;
                      e = _yield$this$request8.data;
                      return _context35.abrupt("return", Object(_pamParser_js__WEBPACK_IMPORTED_MODULE_20__["parsePAMInfo"])(e));

                    case 8:
                      _context35.prev = 8;
                      _context35.t0 = _context35["catch"](0);
                      return _context35.abrupt("return", null);

                    case 11:
                    case "end":
                      return _context35.stop();
                  }
                }
              }, _callee35, this, [[0, 8]]);
            }));

            function _fetchAuxiliaryData(_x69) {
              return _fetchAuxiliaryData4.apply(this, arguments);
            }

            return _fetchAuxiliaryData;
          }()
        }]);

        return x;
      }(_BaseRaster_js__WEBPACK_IMPORTED_MODULE_19__["default"]);

      Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_5__["property"])()], x.prototype, "_files", void 0), Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_5__["property"])()], x.prototype, "_headerInfo", void 0), Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_5__["property"])()], x.prototype, "_bufferSize", void 0), Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_5__["property"])({
        type: String,
        json: {
          write: !0
        }
      })], x.prototype, "datasetFormat", void 0), x = Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_subclass_js__WEBPACK_IMPORTED_MODULE_6__["subclass"])("esri.layers.support.rasterDatasets.TIFFRaster")], x);
      var w = x;
      /* harmony default export */

      __webpack_exports__["default"] = w;
      /***/
    },

    /***/
    "qLN/":
    /*!***********************************************************************************!*\
      !*** ./node_modules/@arcgis/core/layers/support/rasterDatasets/InMemoryRaster.js ***!
      \***********************************************************************************/

    /*! exports provided: default */

    /***/
    function qLN(module, __webpack_exports__, __webpack_require__) {
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


      var _core_maybe_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ../../../core/maybe.js */
      "srIe");
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


      var _core_accessorSupport_decorators_subclass_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ../../../core/accessorSupport/decorators/subclass.js */
      "04ZG");
      /* harmony import */


      var _core_Error_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! ../../../core/Error.js */
      "zlDU");
      /* harmony import */


      var _core_urlUtils_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! ../../../core/urlUtils.js */
      "4EHJ");
      /* harmony import */


      var _core_uuid_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! ../../../core/uuid.js */
      "ju1D");
      /* harmony import */


      var _portal_support_resourceExtension_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
      /*! ../../../portal/support/resourceExtension.js */
      "9AIY");
      /* harmony import */


      var _core_promiseUtils_js__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
      /*! ../../../core/promiseUtils.js */
      "9MzC");
      /* harmony import */


      var _geometry_SpatialReference_js__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
      /*! ../../../geometry/SpatialReference.js */
      "WZb1");
      /* harmony import */


      var _geometry_Extent_js__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
      /*! ../../../geometry/Extent.js */
      "OvF4");
      /* harmony import */


      var _geometry_js__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(
      /*! ../../../geometry.js */
      "4GrV");
      /* harmony import */


      var _RasterInfo_js__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(
      /*! ../RasterInfo.js */
      "pPNP");
      /* harmony import */


      var _rasterFunctions_pixelUtils_js__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(
      /*! ../rasterFunctions/pixelUtils.js */
      "ne7T");
      /* harmony import */


      var _BaseRaster_js__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(
      /*! ./BaseRaster.js */
      "HKGE");
      /*
      All material copyright ESRI, All Rights Reserved, unless otherwise specified.
      See https://js.arcgis.com/4.18/esri/copyright.txt for details.
      */


      var u = /*#__PURE__*/function (_BaseRaster_js__WEBPA6) {
        _inherits(u, _BaseRaster_js__WEBPA6);

        var _super14 = _createSuper(u);

        function u() {
          var _this17;

          _classCallCheck(this, u);

          _this17 = _super14.apply(this, arguments), _this17.datasetFormat = "MEMORY";
          return _this17;
        }

        _createClass(u, [{
          key: "open",
          value: function () {
            var _open8 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee36(t) {
              var e, _this$data, s, r, i, o, a, p, c, h, _u2, d, f, y, x, g;

              return regeneratorRuntime.wrap(function _callee36$(_context36) {
                while (1) {
                  switch (_context36.prev = _context36.next) {
                    case 0:
                      _context36.next = 2;
                      return this.init();

                    case 2:
                      _this$data = this.data, s = _this$data.pixelBlock, r = _this$data.statistics, i = _this$data.histograms, o = _this$data.name, a = _this$data.keyProperties, p = _this$data.nativeExtent, c = _this$data.transform, h = s.width, _u2 = s.height, d = s.pixelType, f = this.data.extent || new _geometry_Extent_js__WEBPACK_IMPORTED_MODULE_13__["default"]({
                        xmin: -.5,
                        ymin: .5,
                        xmax: h - .5,
                        ymax: _u2 - .5,
                        spatialReference: new _geometry_SpatialReference_js__WEBPACK_IMPORTED_MODULE_12__["default"]({
                          wkid: 3857
                        })
                      }), y = null != (e = this.data.isPseudoSpatialReference) ? e : !this.data.extent, x = {
                        x: f.width / h,
                        y: f.height / _u2
                      }, g = new _RasterInfo_js__WEBPACK_IMPORTED_MODULE_15__["default"]({
                        width: h,
                        height: _u2,
                        pixelType: d,
                        extent: f,
                        nativeExtent: p,
                        transform: c,
                        pixelSize: x,
                        spatialReference: f.spatialReference,
                        bandCount: 3,
                        keyProperties: a || {},
                        statistics: r,
                        isPseudoSpatialReference: y,
                        histograms: i
                      });
                      this.createRemoteDatasetStorageInfo(g, 512, 512);

                      this._set("rasterInfo", g);

                      this.updateTileInfo();
                      _context36.next = 8;
                      return this._buildInMemoryRaster(s, {
                        width: 512,
                        height: 512
                      }, t);

                    case 8:
                      this.datasetName = o;
                      this.url = "/InMemory/" + o;

                    case 10:
                    case "end":
                      return _context36.stop();
                  }
                }
              }, _callee36, this);
            }));

            function open(_x70) {
              return _open8.apply(this, arguments);
            }

            return open;
          }()
        }, {
          key: "fetchRawTile",
          value: function fetchRawTile(t, e, s) {
            var r = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : {};

            var i = this._pixelBlockTiles.get("".concat(t, "/").concat(e, "/").concat(s));

            return Object(_core_promiseUtils_js__WEBPACK_IMPORTED_MODULE_11__["resolve"])(i);
          }
        }, {
          key: "_buildInMemoryRaster",
          value: function () {
            var _buildInMemoryRaster2 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee37(t, s, r) {
              var m, n, l, h, _u3, d, f, y;

              return regeneratorRuntime.wrap(function _callee37$(_context37) {
                while (1) {
                  switch (_context37.prev = _context37.next) {
                    case 0:
                      m = this.rasterInfo.storageInfo.maximumPyramidLevel;
                      n = this.rasterJobHandler ? this.rasterJobHandler.split({
                        pixelBlock: t,
                        tileSize: s,
                        maximumPyramidLevel: m
                      }, r) : Object(_core_promiseUtils_js__WEBPACK_IMPORTED_MODULE_11__["resolve"])(Object(_rasterFunctions_pixelUtils_js__WEBPACK_IMPORTED_MODULE_16__["split"])(t, s, m));
                      l = Object(_core_maybe_js__WEBPACK_IMPORTED_MODULE_2__["isSome"])(this.rasterInfo.statistics);
                      h = Object(_core_maybe_js__WEBPACK_IMPORTED_MODULE_2__["isSome"])(this.rasterInfo.histograms);
                      _u3 = l && h ? Object(_core_promiseUtils_js__WEBPACK_IMPORTED_MODULE_11__["resolve"])({
                        statistics: null,
                        histograms: null
                      }) : this.rasterJobHandler ? this.rasterJobHandler.estimateStatisticsHistograms({
                        pixelBlock: t
                      }, r) : Object(_core_promiseUtils_js__WEBPACK_IMPORTED_MODULE_11__["resolve"])(Object(_rasterFunctions_pixelUtils_js__WEBPACK_IMPORTED_MODULE_16__["estimateStatisticsHistograms"])(t));
                      _context37.next = 7;
                      return Object(_core_promiseUtils_js__WEBPACK_IMPORTED_MODULE_11__["eachAlways"])([n, _u3]);

                    case 7:
                      d = _context37.sent;

                      if (!(!d[0].value && d[1].value)) {
                        _context37.next = 10;
                        break;
                      }

                      throw new _core_Error_js__WEBPACK_IMPORTED_MODULE_7__["default"]("inmemory-raster:open", "failed to build in memory raster");

                    case 10:
                      (this._pixelBlockTiles = d[0].value, l) || (this.rasterInfo.statistics = null == (f = d[1].value) ? void 0 : f.statistics);
                      h && (this.rasterInfo.histograms = null == (y = d[1].value) ? void 0 : y.histograms);

                    case 12:
                    case "end":
                      return _context37.stop();
                  }
                }
              }, _callee37, this);
            }));

            function _buildInMemoryRaster(_x71, _x72, _x73) {
              return _buildInMemoryRaster2.apply(this, arguments);
            }

            return _buildInMemoryRaster;
          }()
        }]);

        return u;
      }(_BaseRaster_js__WEBPACK_IMPORTED_MODULE_17__["default"]);

      Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_5__["property"])({
        type: String,
        json: {
          write: !0
        }
      })], u.prototype, "datasetFormat", void 0), Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_5__["property"])()], u.prototype, "data", void 0), u = Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_subclass_js__WEBPACK_IMPORTED_MODULE_6__["subclass"])("esri.layers.support.rasterDatasets.InMemoryRaster")], u);
      var d = u;
      /* harmony default export */

      __webpack_exports__["default"] = d;
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
        function _class3(e, r) {
          _classCallCheck(this, _class3);

          this._storage = new _MemCache_js__WEBPACK_IMPORTED_MODULE_0__["MemCacheStorage"](), this._storage.maxSize = e, r && this._storage.registerRemoveFunc("", r);
        }

        _createClass(_class3, [{
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

        return _class3;
      }();
      /***/

    }
  }]);
})();
//# sourceMappingURL=ImageryTileLayer-js-es5.js.map