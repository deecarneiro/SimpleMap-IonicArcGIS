(function () {
  function _createForOfIteratorHelper(o, allowArrayLike) { var it; if (typeof Symbol === "undefined" || o[Symbol.iterator] == null) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function (_e6) { function e(_x9) { return _e6.apply(this, arguments); } e.toString = function () { return _e6.toString(); }; return e; }(function (e) { throw e; }), f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = o[Symbol.iterator](); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function (_e7) { function e(_x10) { return _e7.apply(this, arguments); } e.toString = function () { return _e7.toString(); }; return e; }(function (e) { didErr = true; err = e; }), f: function f() { try { if (!normalCompletion && it["return"] != null) it["return"](); } finally { if (didErr) throw err; } } }; }

  function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

  function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

  function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

  function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }

  function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

  function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && Symbol.iterator in Object(iter)) return Array.from(iter); }

  function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }

  function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

  function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

  function _get(target, property, receiver) { if (typeof Reflect !== "undefined" && Reflect.get) { _get = Reflect.get; } else { _get = function _get(target, property, receiver) { var base = _superPropBase(target, property); if (!base) return; var desc = Object.getOwnPropertyDescriptor(base, property); if (desc.get) { return desc.get.call(receiver); } return desc.value; }; } return _get(target, property, receiver || target); }

  function _superPropBase(object, property) { while (!Object.prototype.hasOwnProperty.call(object, property)) { object = _getPrototypeOf(object); if (object === null) break; } return object; }

  function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

  function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

  function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

  function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

  function _iterableToArrayLimit(arr, i) { if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr))) return; var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

  function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

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

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["layers-TileLayerView2D-js"], {
    /***/
    "5LEI":
    /*!*******************************************************************************!*\
      !*** ./node_modules/@arcgis/core/views/2d/engine/webgl/TiledDisplayObject.js ***!
      \*******************************************************************************/

    /*! exports provided: TiledDisplayObject */

    /***/
    function LEI(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "TiledDisplayObject", function () {
        return r;
      });
      /* harmony import */


      var _core_has_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ../../../../core/has.js */
      "wSAH");
      /* harmony import */


      var _chunks_mat3_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ../../../../chunks/mat3.js */
      "HJJS");
      /* harmony import */


      var _tiling_TileKey_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ../../tiling/TileKey.js */
      "rlSK");
      /* harmony import */


      var _chunks_mat3f32_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ../../../../chunks/mat3f32.js */
      "jHF5");
      /* harmony import */


      var _DisplayObject_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ../DisplayObject.js */
      "fEsP");
      /*
      All material copyright ESRI, All Rights Reserved, unless otherwise specified.
      See https://js.arcgis.com/4.18/esri/copyright.txt for details.
      */


      var r = /*#__PURE__*/function (_DisplayObject_js__WE) {
        _inherits(r, _DisplayObject_js__WE);

        var _super = _createSuper(r);

        function r(s, t, e) {
          var _this;

          var _r = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : e;

          _classCallCheck(this, r);

          _this = _super.call(this), _this.triangleCountReportedInDebug = 0, _this.transforms = {
            dvs: Object(_chunks_mat3f32_js__WEBPACK_IMPORTED_MODULE_3__["c"])(),
            tileMat3: Object(_chunks_mat3f32_js__WEBPACK_IMPORTED_MODULE_3__["c"])()
          }, _this.triangleCount = 0, _this.key = new _tiling_TileKey_js__WEBPACK_IMPORTED_MODULE_2__["default"](s), _this.bounds = t, _this.size = e, _this.coordRange = _r;
          return _this;
        }

        _createClass(r, [{
          key: "destroy",
          value: function destroy() {
            this.texture && (this.texture.dispose(), this.texture = null);
          }
        }, {
          key: "coords",
          get: function get() {
            return this._coords;
          }
        }, {
          key: "bounds",
          get: function get() {
            return this._bounds;
          },
          set: function set(s) {
            this._coords = [s[0], s[3]], this._bounds = s;
          }
        }, {
          key: "setTransform",
          value: function setTransform(o, i) {
            var e = i / (o.resolution * o.pixelRatio),
                _r2 = this.transforms.tileMat3,
                _o$toScreenNoRotation = o.toScreenNoRotation([0, 0], this.coords),
                _o$toScreenNoRotation2 = _slicedToArray(_o$toScreenNoRotation, 2),
                n = _o$toScreenNoRotation2[0],
                h = _o$toScreenNoRotation2[1],
                a = this.size[0] / this.coordRange[0] * e,
                d = this.size[1] / this.coordRange[1] * e;

            Object(_chunks_mat3_js__WEBPACK_IMPORTED_MODULE_1__["s"])(_r2, a, 0, 0, 0, d, 0, n, h, 1), Object(_chunks_mat3_js__WEBPACK_IMPORTED_MODULE_1__["m"])(this.transforms.dvs, o.displayViewMat3, _r2);
          }
        }]);

        return r;
      }(_DisplayObject_js__WEBPACK_IMPORTED_MODULE_4__["DisplayObject"]);
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
    "ArQ+":
    /*!**********************************************************************!*\
      !*** ./node_modules/@arcgis/core/views/2d/layers/TileLayerView2D.js ***!
      \**********************************************************************/

    /*! exports provided: default */

    /***/
    function ArQ(module, __webpack_exports__, __webpack_require__) {
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


      var _layers_RefreshableLayerView_js__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
      /*! ../../layers/RefreshableLayerView.js */
      "bHqs");
      /* harmony import */


      var _tiling_TileKey_js__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
      /*! ../tiling/TileKey.js */
      "rlSK");
      /* harmony import */


      var _tiling_TileInfoView_js__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(
      /*! ../tiling/TileInfoView.js */
      "AY31");
      /* harmony import */


      var _tiling_TileQueue_js__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(
      /*! ../tiling/TileQueue.js */
      "B81a");
      /* harmony import */


      var _tiling_TileStrategy_js__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(
      /*! ../tiling/TileStrategy.js */
      "0wLv");
      /* harmony import */


      var _layers_LayerView_js__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(
      /*! ../../layers/LayerView.js */
      "NloG");
      /* harmony import */


      var _support_drapedUtils_js__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(
      /*! ../../support/drapedUtils.js */
      "6UvW");
      /* harmony import */


      var _layers_TileLayerView_js__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(
      /*! ../../layers/TileLayerView.js */
      "K+Ap");
      /* harmony import */


      var _LayerView2D_js__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(
      /*! ./LayerView2D.js */
      "Vm2Q");
      /* harmony import */


      var _BitmapTileLayerView2D_js__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(
      /*! ./BitmapTileLayerView2D.js */
      "Fkrg");
      /*
      All material copyright ESRI, All Rights Reserved, unless otherwise specified.
      See https://js.arcgis.com/4.18/esri/copyright.txt for details.
      */


      var w = _core_Logger_js__WEBPACK_IMPORTED_MODULE_3__["default"].getLogger("esri.views.2d.layers.TileLayerView2D"),
          _ = [0, 0];

      var I = /*#__PURE__*/function (_Object) {
        _inherits(I, _Object);

        var _super2 = _createSuper(I);

        function I() {
          var _this2;

          _classCallCheck(this, I);

          _this2 = _super2.apply(this, arguments), _this2._tileStrategy = null, _this2._fetchQueue = null, _this2.layer = null;
          return _this2;
        }

        _createClass(I, [{
          key: "initialize",
          value: function initialize() {
            var _this3 = this;

            var e = this.layer.tileInfo,
                t = e && e.spatialReference;
            var i;
            t || (i = new _core_Error_js__WEBPACK_IMPORTED_MODULE_7__["default"]("layerview:tiling-information-missing", "The layer doesn't provide tiling information", {
              layer: this.layer
            })), t.equals(this.view.spatialReference) || (i = new _core_Error_js__WEBPACK_IMPORTED_MODULE_7__["default"]("layerview:spatial-reference-incompatible", "The spatial reference of this layer does not meet the requirements of the view", {
              layer: this.layer
            })), this.watch("resampling", function () {
              _this3.refresh();
            }), i && this.addResolvingPromise(Object(_core_promiseUtils_js__WEBPACK_IMPORTED_MODULE_11__["reject"])(i));
          }
        }, {
          key: "resampling",
          get: function get() {
            return !("resampling" in this.layer) || !1 !== this.layer.resampling;
          }
        }, {
          key: "hitTest",
          value: function hitTest() {
            return null;
          }
        }, {
          key: "update",
          value: function update(e) {
            this._fetchQueue.pause(), this._fetchQueue.state = e.state, this._tileStrategy.update(e), this._fetchQueue.resume(), this.notifyChange("updating");
          }
        }, {
          key: "attach",
          value: function attach() {
            var _this4 = this;

            var e = "tileServers" in this.layer ? this.layer.tileServers : null;
            this._tileInfoView = new _tiling_TileInfoView_js__WEBPACK_IMPORTED_MODULE_14__["default"](this.layer.tileInfo, this.layer.fullExtent), this._fetchQueue = new _tiling_TileQueue_js__WEBPACK_IMPORTED_MODULE_15__["default"]({
              tileInfoView: this._tileInfoView,
              concurrency: e && 10 * e.length || 10,
              process: function process(e, t) {
                return _this4.fetchTile(e, t);
              }
            }), this._tileStrategy = new _tiling_TileStrategy_js__WEBPACK_IMPORTED_MODULE_16__["default"]({
              cachePolicy: "keep",
              resampling: this.resampling,
              acquireTile: function acquireTile(e) {
                return _this4.acquireTile(e);
              },
              releaseTile: function releaseTile(e) {
                return _this4.releaseTile(e);
              },
              tileInfoView: this._tileInfoView
            }), this.requestUpdate(), this.container.requestRender(), _get(_getPrototypeOf(I.prototype), "attach", this).call(this);
          }
        }, {
          key: "detach",
          value: function detach() {
            _get(_getPrototypeOf(I.prototype), "detach", this).call(this), this._tileStrategy.destroy(), this._fetchQueue.clear(), this.container.removeAllChildren(), this._fetchQueue = this._tileStrategy = this._tileInfoView = null;
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
          key: "createFetchPopupFeaturesQueryGeometry",
          value: function createFetchPopupFeaturesQueryGeometry(e, t) {
            return Object(_support_drapedUtils_js__WEBPACK_IMPORTED_MODULE_18__["createQueryGeometry"])(e, t, this.view);
          }
        }, {
          key: "doRefresh",
          value: function () {
            var _doRefresh = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
              var _this5 = this;

              return regeneratorRuntime.wrap(function _callee$(_context) {
                while (1) {
                  switch (_context.prev = _context.next) {
                    case 0:
                      this.updateRequested || this.suspended || (this._fetchQueue.reset(), this._tileStrategy.tiles.forEach(function (e) {
                        return _this5._enqueueTileFetch(e);
                      }), this.notifyChange("updating"));

                    case 1:
                    case "end":
                      return _context.stop();
                  }
                }
              }, _callee, this);
            }));

            function doRefresh() {
              return _doRefresh.apply(this, arguments);
            }

            return doRefresh;
          }()
        }, {
          key: "isUpdating",
          value: function isUpdating() {
            var e;
            return (null == (e = this._fetchQueue) ? void 0 : e.length) > 0;
          }
        }, {
          key: "acquireTile",
          value: function acquireTile(e) {
            var _this$_tileInfoView$g, _this$_tileInfoView$g2, _this$_tileInfoView$t, _this$_tileInfoView$t2;

            var t = this._bitmapView.createTile(e),
                i = t.bitmap;

            return (_this$_tileInfoView$g = this._tileInfoView.getTileCoords(_, t.key), _this$_tileInfoView$g2 = _slicedToArray(_this$_tileInfoView$g, 2), i.x = _this$_tileInfoView$g2[0], i.y = _this$_tileInfoView$g2[1], _this$_tileInfoView$g), i.resolution = this._tileInfoView.getTileResolution(t.key), (_this$_tileInfoView$t = this._tileInfoView.tileInfo.size, _this$_tileInfoView$t2 = _slicedToArray(_this$_tileInfoView$t, 2), i.width = _this$_tileInfoView$t2[0], i.height = _this$_tileInfoView$t2[1], _this$_tileInfoView$t), this._enqueueTileFetch(t), this._bitmapView.addChild(t), this.requestUpdate(), t;
          }
        }, {
          key: "releaseTile",
          value: function releaseTile(e) {
            this._fetchQueue.abort(e.key.id), this._bitmapView.removeChild(e), e.once("detach", function () {
              return e.destroy();
            }), this.requestUpdate();
          }
        }, {
          key: "fetchTile",
          value: function () {
            var _fetchTile = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee2(e, i) {
              var r, s, a, l, h, c, u;
              return regeneratorRuntime.wrap(function _callee2$(_context2) {
                while (1) {
                  switch (_context2.prev = _context2.next) {
                    case 0:
                      r = "tilemapCache" in this.layer ? this.layer.tilemapCache : null, s = !Object(_core_maybe_js__WEBPACK_IMPORTED_MODULE_2__["isNone"])(i) && i.signal;

                      if (r) {
                        _context2.next = 13;
                        break;
                      }

                      _context2.prev = 2;
                      _context2.next = 5;
                      return this._fetchImage(e, s);

                    case 5:
                      return _context2.abrupt("return", _context2.sent);

                    case 8:
                      _context2.prev = 8;
                      _context2.t0 = _context2["catch"](2);

                      if (!(!Object(_core_promiseUtils_js__WEBPACK_IMPORTED_MODULE_11__["isAbortError"])(_context2.t0) && !this.resampling)) {
                        _context2.next = 12;
                        break;
                      }

                      return _context2.abrupt("return", this._createBlankImage());

                    case 12:
                      throw _context2.t0;

                    case 13:
                      a = new _tiling_TileKey_js__WEBPACK_IMPORTED_MODULE_13__["default"](0, 0, 0, 0);
                      _context2.prev = 14;
                      _context2.next = 17;
                      return r.fetchAvailabilityUpsample(e.level, e.row, e.col, a, {
                        signal: s
                      });

                    case 17:
                      if (!(a.level !== e.level && !this.resampling)) {
                        _context2.next = 19;
                        break;
                      }

                      return _context2.abrupt("return", this._createBlankImage());

                    case 19:
                      _context2.next = 21;
                      return this._fetchImage(a, s);

                    case 21:
                      l = _context2.sent;
                      _context2.next = 31;
                      break;

                    case 24:
                      _context2.prev = 24;
                      _context2.t1 = _context2["catch"](14);

                      if (!Object(_core_promiseUtils_js__WEBPACK_IMPORTED_MODULE_11__["isAbortError"])(_context2.t1)) {
                        _context2.next = 28;
                        break;
                      }

                      throw _context2.t1;

                    case 28:
                      _context2.next = 30;
                      return this._fetchImage(e, s);

                    case 30:
                      l = _context2.sent;

                    case 31:
                      h = a.level, c = a.row, u = a.col;
                      return _context2.abrupt("return", this.resampling && h !== e.level ? this._resampleImage(l, h, c, u, e.level, e.row, e.col) : l);

                    case 33:
                    case "end":
                      return _context2.stop();
                  }
                }
              }, _callee2, this, [[2, 8], [14, 24]]);
            }));

            function fetchTile(_x, _x2) {
              return _fetchTile.apply(this, arguments);
            }

            return fetchTile;
          }()
        }, {
          key: "_enqueueTileFetch",
          value: function () {
            var _enqueueTileFetch2 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee3(e) {
              var _this6 = this;

              var t;
              return regeneratorRuntime.wrap(function _callee3$(_context3) {
                while (1) {
                  switch (_context3.prev = _context3.next) {
                    case 0:
                      if (this._fetchQueue.has(e.key.id)) {
                        _context3.next = 12;
                        break;
                      }

                      _context3.prev = 1;
                      _context3.next = 4;
                      return this._fetchQueue.push(e.key);

                    case 4:
                      t = _context3.sent;
                      e.bitmap.source = t, e.bitmap.width = this._tileInfoView.tileInfo.size[0], e.bitmap.height = this._tileInfoView.tileInfo.size[1], e.once("attach", function () {
                        return _this6.requestUpdate();
                      });
                      _context3.next = 11;
                      break;

                    case 8:
                      _context3.prev = 8;
                      _context3.t0 = _context3["catch"](1);
                      Object(_core_promiseUtils_js__WEBPACK_IMPORTED_MODULE_11__["isAbortError"])(_context3.t0) || w.error(_context3.t0);

                    case 11:
                      this.requestUpdate();

                    case 12:
                    case "end":
                      return _context3.stop();
                  }
                }
              }, _callee3, this, [[1, 8]]);
            }));

            function _enqueueTileFetch(_x3) {
              return _enqueueTileFetch2.apply(this, arguments);
            }

            return _enqueueTileFetch;
          }()
        }, {
          key: "_fetchImage",
          value: function () {
            var _fetchImage2 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee4(e, t) {
              return regeneratorRuntime.wrap(function _callee4$(_context4) {
                while (1) {
                  switch (_context4.prev = _context4.next) {
                    case 0:
                      return _context4.abrupt("return", this.layer.fetchTile(e.level, e.row, e.col, {
                        timestamp: this.refreshTimestamp,
                        signal: t
                      }));

                    case 1:
                    case "end":
                      return _context4.stop();
                  }
                }
              }, _callee4, this);
            }));

            function _fetchImage(_x4, _x5) {
              return _fetchImage2.apply(this, arguments);
            }

            return _fetchImage;
          }()
        }, {
          key: "_resampleImage",
          value: function _resampleImage(e, t, i, r, s, a, l) {
            var o = this._tileInfoView.tileInfo.size,
                h = this._tileInfoView.getTileResolution(t),
                n = this._tileInfoView.getTileResolution(s);

            var c = this._tileInfoView.getLODInfoAt(s);

            var u = c.getXForColumn(l),
                p = c.getYForRow(a);
            c = this._tileInfoView.getLODInfoAt(t);

            var m = c.getXForColumn(r),
                f = c.getYForRow(i),
                g = Math.round((u - m) / h),
                y = Math.round(-(p - f) / h),
                d = Math.round(o[0] * (n / h)),
                w = Math.round(o[1] * (n / h)),
                _ = this._createBlankImage();

            return _.getContext("2d").drawImage(e, g, y, d, w, 0, 0, o[0], o[1]), _;
          }
        }, {
          key: "_createBlankImage",
          value: function _createBlankImage() {
            var _e2, _e3;

            var e = this._tileInfoView.tileInfo.size,
                t = document.createElement("canvas");
            return (_e2 = e, _e3 = _slicedToArray(_e2, 2), t.width = _e3[0], t.height = _e3[1], _e2), t;
          }
        }]);

        return I;
      }(Object(_layers_TileLayerView_js__WEBPACK_IMPORTED_MODULE_19__["TileLayerView"])(Object(_layers_RefreshableLayerView_js__WEBPACK_IMPORTED_MODULE_12__["RefreshableLayerView"])(Object(_BitmapTileLayerView2D_js__WEBPACK_IMPORTED_MODULE_21__["BitmapTileLayerView2D"])(Object(_LayerView2D_js__WEBPACK_IMPORTED_MODULE_20__["LayerView2DMixin"])(_layers_LayerView_js__WEBPACK_IMPORTED_MODULE_17__["default"])))));

      Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_5__["property"])({
        dependsOn: ["layer.resampling?"]
      })], I.prototype, "resampling", null), I = Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_subclass_js__WEBPACK_IMPORTED_MODULE_6__["subclass"])("esri.views.2d.layers.TileLayerView2D")], I);
      var T = I;
      /* harmony default export */

      __webpack_exports__["default"] = T;
      /***/
    },

    /***/
    "K+Ap":
    /*!*****************************************************************!*\
      !*** ./node_modules/@arcgis/core/views/layers/TileLayerView.js ***!
      \*****************************************************************/

    /*! exports provided: TileLayerView */

    /***/
    function KAp(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "TileLayerView", function () {
        return c;
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


      var _renderers_support_clickToleranceUtils_js__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
      /*! ../../renderers/support/clickToleranceUtils.js */
      "U282");
      /*
      All material copyright ESRI, All Rights Reserved, unless otherwise specified.
      See https://js.arcgis.com/4.18/esri/copyright.txt for details.
      */


      var c = function c(_c2) {
        var l = /*#__PURE__*/function (_c) {
          _inherits(l, _c);

          var _super3 = _createSuper(l);

          function l() {
            _classCallCheck(this, l);

            return _super3.apply(this, arguments);
          }

          _createClass(l, [{
            key: "fetchPopupFeatures",
            value: function () {
              var _fetchPopupFeatures = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee6(e, t) {
                var _this7 = this;

                var o, c, _l;

                return regeneratorRuntime.wrap(function _callee6$(_context6) {
                  while (1) {
                    switch (_context6.prev = _context6.next) {
                      case 0:
                        o = this.layer;

                        if (e) {
                          _context6.next = 3;
                          break;
                        }

                        return _context6.abrupt("return", Object(_core_promiseUtils_js__WEBPACK_IMPORTED_MODULE_11__["reject"])(new _core_Error_js__WEBPACK_IMPORTED_MODULE_7__["default"]("tilelayerview:fetchPopupFeatures", "Nothing to fetch without area", {
                          layer: o
                        })));

                      case 3:
                        if (!("tile" !== o.type)) {
                          _context6.next = 5;
                          break;
                        }

                        return _context6.abrupt("return", Object(_core_promiseUtils_js__WEBPACK_IMPORTED_MODULE_11__["reject"])(new _core_Error_js__WEBPACK_IMPORTED_MODULE_7__["default"]("tilelayerview:fetchPopupFeatures", "Layer type should be 'tile'", {
                          type: o.type
                        })));

                      case 5:
                        c = this.get("view.scale"), _l = o.allSublayers.toArray().filter(function (e) {
                          var r = 0 === e.minScale || c <= e.minScale,
                              t = 0 === e.maxScale || c >= e.maxScale;
                          return e.popupTemplate && e.popupEnabled && e.visible && r && t;
                        });
                        return _context6.abrupt("return", Object(_core_promiseUtils_js__WEBPACK_IMPORTED_MODULE_11__["eachAlways"])(_l.map( /*#__PURE__*/function () {
                          var _ref = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee5(o) {
                            var s, p, a;
                            return regeneratorRuntime.wrap(function _callee5$(_context5) {
                              while (1) {
                                switch (_context5.prev = _context5.next) {
                                  case 0:
                                    s = o.createQuery(), p = Object(_core_maybe_js__WEBPACK_IMPORTED_MODULE_2__["isSome"])(t) ? t.event : null, a = Object(_renderers_support_clickToleranceUtils_js__WEBPACK_IMPORTED_MODULE_12__["calculateTolerance"])({
                                      renderer: o.renderer,
                                      event: p
                                    });
                                    s.geometry = _this7.createFetchPopupFeaturesQueryGeometry(e, a);
                                    _context5.next = 4;
                                    return o.popupTemplate.getRequiredFields();

                                  case 4:
                                    s.outFields = _context5.sent;
                                    _context5.next = 7;
                                    return o.queryFeatures(s);

                                  case 7:
                                    return _context5.abrupt("return", _context5.sent.features);

                                  case 8:
                                  case "end":
                                    return _context5.stop();
                                }
                              }
                            }, _callee5);
                          }));

                          return function (_x8) {
                            return _ref.apply(this, arguments);
                          };
                        }())).then(function (e) {
                          var _ref2;

                          return (_ref2 = []).concat.apply(_ref2, _toConsumableArray(e.map(function (e) {
                            return e.value;
                          }).filter(Boolean)));
                        }));

                      case 7:
                      case "end":
                        return _context6.stop();
                    }
                  }
                }, _callee6, this);
              }));

              function fetchPopupFeatures(_x6, _x7) {
                return _fetchPopupFeatures.apply(this, arguments);
              }

              return fetchPopupFeatures;
            }()
          }]);

          return l;
        }(_c2);

        return Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_5__["property"])()], l.prototype, "layer", void 0), l = Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_subclass_js__WEBPACK_IMPORTED_MODULE_6__["subclass"])("esri.layers.mixins.TileLayerView")], l), l;
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
          var _e4 = o;
          return r.uniqueValueInfos.forEach(function (n) {
            _e4 = t(_e4, n.symbol);
          }), _e4;
        }

        if ("class-breaks" === r.type) {
          var _e5 = o;
          return r.classBreakInfos.forEach(function (n) {
            _e5 = t(_e5, n.symbol);
          }), _e5;
        }

        return r.type, o;
      }
      /***/

    },

    /***/
    "ZyIX":
    /*!**************************************************************************!*\
      !*** ./node_modules/@arcgis/core/views/2d/engine/webgl/TileContainer.js ***!
      \**************************************************************************/

    /*! exports provided: default, sortByLevel */

    /***/
    function ZyIX(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "sortByLevel", function () {
        return n;
      });
      /* harmony import */


      var _enums_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ./enums.js */
      "yE7X");
      /* harmony import */


      var _brushes_WGLBrushInfo_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./brushes/WGLBrushInfo.js */
      "b3VY");
      /* harmony import */


      var _brushes_WGLBrushStencil_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./brushes/WGLBrushStencil.js */
      "7F7D");
      /* harmony import */


      var _WGLContainer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./WGLContainer.js */
      "mgI5");
      /*
      All material copyright ESRI, All Rights Reserved, unless otherwise specified.
      See https://js.arcgis.com/4.18/esri/copyright.txt for details.
      */


      var n = function n(e, r) {
        return e.key.level - r.key.level != 0 ? e.key.level - r.key.level : e.key.row - r.key.row != 0 ? e.key.row - r.key.row : e.key.col - r.key.col;
      };
      /* harmony default export */


      __webpack_exports__["default"] = /*#__PURE__*/function (_WGLContainer_js__WEB) {
        _inherits(_class, _WGLContainer_js__WEB);

        var _super4 = _createSuper(_class);

        function _class(e) {
          var _this8;

          _classCallCheck(this, _class);

          _this8 = _super4.call(this), _this8._tileInfoView = e;
          return _this8;
        }

        _createClass(_class, [{
          key: "renderChildren",
          value: function renderChildren(e) {
            this.sortChildren(n), this.setStencilReference(), _get(_getPrototypeOf(_class.prototype), "renderChildren", this).call(this, e);
          }
        }, {
          key: "createRenderParams",
          value: function createRenderParams(e) {
            var r = e.state;
            return _objectSpread(_objectSpread({}, _get(_getPrototypeOf(_class.prototype), "createRenderParams", this).call(this, e)), {}, {
              requiredLevel: this._tileInfoView.getClosestInfoForScale(r.scale).level,
              displayLevel: this._tileInfoView.tileInfo.scaleToZoom(r.scale)
            });
          }
        }, {
          key: "prepareRenderPasses",
          value: function prepareRenderPasses(t) {
            var _this9 = this;

            var n = t.registerRenderPass({
              name: "stencil",
              brushes: [_brushes_WGLBrushStencil_js__WEBPACK_IMPORTED_MODULE_2__["default"]],
              drawPhase: _enums_js__WEBPACK_IMPORTED_MODULE_0__["WGLDrawPhase"].DEBUG | _enums_js__WEBPACK_IMPORTED_MODULE_0__["WGLDrawPhase"].MAP | _enums_js__WEBPACK_IMPORTED_MODULE_0__["WGLDrawPhase"].HIGHLIGHT,
              target: function target() {
                return _this9.getStencilTarget();
              }
            }),
                i = t.registerRenderPass({
              name: "tileInfo",
              brushes: [_brushes_WGLBrushInfo_js__WEBPACK_IMPORTED_MODULE_1__["default"]],
              drawPhase: _enums_js__WEBPACK_IMPORTED_MODULE_0__["WGLDrawPhase"].DEBUG,
              target: function target() {
                return _this9.children;
              },
              has: "esri-tiles-debug"
            });
            return [].concat(_toConsumableArray(_get(_getPrototypeOf(_class.prototype), "prepareRenderPasses", this).call(this, t)), [n, i]);
          }
        }, {
          key: "getStencilTarget",
          value: function getStencilTarget() {
            return this.children;
          }
        }, {
          key: "updateTransforms",
          value: function updateTransforms(e) {
            var _iterator = _createForOfIteratorHelper(this.children),
                _step;

            try {
              for (_iterator.s(); !(_step = _iterator.n()).done;) {
                var r = _step.value;

                var s = this._tileInfoView.getTileResolution(r.key);

                r.setTransform(e, s);
              }
            } catch (err) {
              _iterator.e(err);
            } finally {
              _iterator.f();
            }
          }
        }, {
          key: "setStencilReference",
          value: function setStencilReference() {
            var e = 1;

            var _iterator2 = _createForOfIteratorHelper(this.children),
                _step2;

            try {
              for (_iterator2.s(); !(_step2 = _iterator2.n()).done;) {
                var r = _step2.value;
                r.stencilRef = e++;
              }
            } catch (err) {
              _iterator2.e(err);
            } finally {
              _iterator2.f();
            }
          }
        }]);

        return _class;
      }(_WGLContainer_js__WEBPACK_IMPORTED_MODULE_3__["default"]);
      /***/

    }
  }]);
})();
//# sourceMappingURL=layers-TileLayerView2D-js-es5.js.map