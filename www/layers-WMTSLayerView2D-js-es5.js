(function () {
  function _createForOfIteratorHelper(o, allowArrayLike) { var it; if (typeof Symbol === "undefined" || o[Symbol.iterator] == null) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function (_e2) { function e(_x2) { return _e2.apply(this, arguments); } e.toString = function () { return _e2.toString(); }; return e; }(function (e) { throw e; }), f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = o[Symbol.iterator](); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function (_e3) { function e(_x3) { return _e3.apply(this, arguments); } e.toString = function () { return _e3.toString(); }; return e; }(function (e) { didErr = true; err = e; }), f: function f() { try { if (!normalCompletion && it["return"] != null) it["return"](); } finally { if (didErr) throw err; } } }; }

  function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }

  function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

  function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && Symbol.iterator in Object(iter)) return Array.from(iter); }

  function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }

  function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

  function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

  function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

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

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["layers-WMTSLayerView2D-js"], {
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
    "QHIw":
    /*!**********************************************************************!*\
      !*** ./node_modules/@arcgis/core/views/2d/layers/WMTSLayerView2D.js ***!
      \**********************************************************************/

    /*! exports provided: default */

    /***/
    function QHIw(module, __webpack_exports__, __webpack_require__) {
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


      var _geometry_support_webMercatorUtils_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
      /*! ../../../geometry/support/webMercatorUtils.js */
      "l4ZG");
      /* harmony import */


      var _core_Handles_js__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
      /*! ../../../core/Handles.js */
      "r0DZ");
      /* harmony import */


      var _layers_RefreshableLayerView_js__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
      /*! ../../layers/RefreshableLayerView.js */
      "bHqs");
      /* harmony import */


      var _tiling_TileInfoView_js__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
      /*! ../tiling/TileInfoView.js */
      "AY31");
      /* harmony import */


      var _tiling_TileQueue_js__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(
      /*! ../tiling/TileQueue.js */
      "B81a");
      /* harmony import */


      var _tiling_TileStrategy_js__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(
      /*! ../tiling/TileStrategy.js */
      "0wLv");
      /* harmony import */


      var _layers_LayerView_js__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(
      /*! ../../layers/LayerView.js */
      "NloG");
      /* harmony import */


      var _LayerView2D_js__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(
      /*! ./LayerView2D.js */
      "Vm2Q");
      /* harmony import */


      var _BitmapTileLayerView2D_js__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(
      /*! ./BitmapTileLayerView2D.js */
      "Fkrg");
      /*
      All material copyright ESRI, All Rights Reserved, unless otherwise specified.
      See https://js.arcgis.com/4.18/esri/copyright.txt for details.
      */


      var f = [102113, 102100, 3857, 3785, 900913];

      var d = /*#__PURE__*/function (_Object) {
        _inherits(d, _Object);

        var _super2 = _createSuper(d);

        function d() {
          var _this2;

          _classCallCheck(this, d);

          _this2 = _super2.apply(this, arguments), _this2._handles = new _core_Handles_js__WEBPACK_IMPORTED_MODULE_11__["default"](), _this2._tileStrategy = null, _this2._fetchQueue = null, _this2._tileRequests = new Map(), _this2.layer = null;
          return _this2;
        }

        _createClass(d, [{
          key: "tileMatrixSet",
          get: function get() {
            if (this.layer.activeLayer.tileMatrixSetId) return this.layer.activeLayer.tileMatrixSet;

            var e = this._getTileMatrixSetBySpatialReference(this.layer.activeLayer);

            return e ? (this.layer.activeLayer.tileMatrixSetId = e.id, e) : null;
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
            var _this3 = this;

            var e = this.layer.activeLayer,
                t = this.tileMatrixSet;
            if (!t) return;
            var i = t.tileInfo.spatialReference;
            var s = e.fullExtent && e.fullExtent.clone();
            i.isWebMercator ? s = Object(_geometry_support_webMercatorUtils_js__WEBPACK_IMPORTED_MODULE_10__["geographicToWebMercator"])(s) : i.isWGS84 || (s = t.fullExtent), this._tileInfoView = new _tiling_TileInfoView_js__WEBPACK_IMPORTED_MODULE_13__["default"](t.tileInfo, s), this._fetchQueue = new _tiling_TileQueue_js__WEBPACK_IMPORTED_MODULE_14__["default"]({
              tileInfoView: this._tileInfoView,
              process: function process(e) {
                return _this3.fetchTile(e);
              }
            }), this._tileStrategy = new _tiling_TileStrategy_js__WEBPACK_IMPORTED_MODULE_15__["default"]({
              cachePolicy: "keep",
              acquireTile: function acquireTile(e) {
                return _this3.acquireTile(e);
              },
              releaseTile: function releaseTile(e) {
                return _this3.releaseTile(e);
              },
              tileInfoView: this._tileInfoView
            }), this._handles.add(this.watch(["layer.activeLayer.styleId", "tileMatrixSet"], function () {
              return _this3._refresh();
            })), _get(_getPrototypeOf(d.prototype), "attach", this).call(this);
          }
        }, {
          key: "detach",
          value: function detach() {
            _get(_getPrototypeOf(d.prototype), "detach", this).call(this), this._handles.removeAll(), this._tileStrategy.destroy(), this._fetchQueue.clear(), this._fetchQueue = this._tileStrategy = this._tileInfoView = null;
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
          key: "doRefresh",
          value: function () {
            var _doRefresh = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
              return regeneratorRuntime.wrap(function _callee$(_context) {
                while (1) {
                  switch (_context.prev = _context.next) {
                    case 0:
                      this.updateRequested || this.suspended || this._refresh();

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
            return this._fetchQueue.length > 0;
          }
        }, {
          key: "acquireTile",
          value: function acquireTile(e) {
            var _this$_tileInfoView$g,
                _this$_tileInfoView$g2,
                _this$_tileInfoView$t,
                _this$_tileInfoView$t2,
                _this4 = this;

            var t = this._bitmapView.createTile(e),
                i = t.bitmap;

            (_this$_tileInfoView$g = this._tileInfoView.getTileCoords([0, 0], t.key), _this$_tileInfoView$g2 = _slicedToArray(_this$_tileInfoView$g, 2), i.x = _this$_tileInfoView$g2[0], i.y = _this$_tileInfoView$g2[1], _this$_tileInfoView$g), i.resolution = this._tileInfoView.getTileResolution(t.key), (_this$_tileInfoView$t = this._tileInfoView.tileInfo.size, _this$_tileInfoView$t2 = _slicedToArray(_this$_tileInfoView$t, 2), i.width = _this$_tileInfoView$t2[0], i.height = _this$_tileInfoView$t2[1], _this$_tileInfoView$t), this._tileInfoView.getTileCoords(i, t.key);
            var r = {
              id: e.id,
              fulfilled: !1,
              promise: this._fetchQueue.push(t.key).then(function (e) {
                t.bitmap.source = e, t.once("attach", function () {
                  return _this4.requestUpdate();
                }), _this4._bitmapView.addChild(t);
              })["catch"](function (e) {
                Object(_core_promiseUtils_js__WEBPACK_IMPORTED_MODULE_9__["isAbortError"])(e) || (t.bitmap.source = null, t.once("attach", function () {
                  return _this4.requestUpdate();
                }), _this4._bitmapView.addChild(t));
              })
            };
            return r.promise["finally"](function () {
              return r.fulfilled = !0;
            }), this._tileRequests.set(t, r), this.requestUpdate(), t;
          }
        }, {
          key: "releaseTile",
          value: function releaseTile(e) {
            var t = this._tileRequests.get(e);

            t.fulfilled || this._fetchQueue.abort(t.id), this._tileRequests["delete"](e), this._bitmapView.removeChild(e), e.once("detach", function () {
              return e.destroy();
            }), this.requestUpdate();
          }
        }, {
          key: "fetchTile",
          value: function () {
            var _fetchTile = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee2(e) {
              return regeneratorRuntime.wrap(function _callee2$(_context2) {
                while (1) {
                  switch (_context2.prev = _context2.next) {
                    case 0:
                      return _context2.abrupt("return", this.layer.fetchTile(e.level, e.row, e.col));

                    case 1:
                    case "end":
                      return _context2.stop();
                  }
                }
              }, _callee2, this);
            }));

            function fetchTile(_x) {
              return _fetchTile.apply(this, arguments);
            }

            return fetchTile;
          }()
        }, {
          key: "canResume",
          value: function canResume() {
            var e = _get(_getPrototypeOf(d.prototype), "canResume", this).call(this);

            return e ? null !== this.tileMatrixSet : e;
          }
        }, {
          key: "_refresh",
          value: function _refresh() {
            var _this5 = this;

            this._fetchQueue.reset(), this._tileStrategy.tiles.forEach(function (e) {
              if (!e.bitmap.source) return;
              e.bitmap.source = null;
              var t = {
                id: e.key.id,
                fulfilled: !1,
                promise: _this5._fetchQueue.push(e.key).then(function (t) {
                  e.bitmap.source = t, e.requestRender(), _this5.notifyChange("updating");
                })
              };
              t.promise.then(function () {
                return t.fulfilled = !0;
              }, function () {
                return t.fulfilled = !0;
              }), _this5._tileRequests.set(e, t);
            }), this.notifyChange("updating");
          }
        }, {
          key: "_getTileMatrixSetBySpatialReference",
          value: function _getTileMatrixSetBySpatialReference(e) {
            var t = this.view.spatialReference;
            if (!e.tileMatrixSets) return null;
            var i = e.tileMatrixSets.find(function (e) {
              return e.tileInfo.spatialReference.wkid === t.wkid;
            });
            return !i && t.isWebMercator && (i = e.tileMatrixSets.find(function (e) {
              return f.indexOf(e.tileInfo.spatialReference.wkid) > -1;
            })), i;
          }
        }]);

        return d;
      }(Object(_layers_RefreshableLayerView_js__WEBPACK_IMPORTED_MODULE_12__["RefreshableLayerView"])(Object(_BitmapTileLayerView2D_js__WEBPACK_IMPORTED_MODULE_18__["BitmapTileLayerView2D"])(Object(_LayerView2D_js__WEBPACK_IMPORTED_MODULE_17__["LayerView2DMixin"])(_layers_LayerView_js__WEBPACK_IMPORTED_MODULE_16__["default"]))));

      Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_4__["property"])({
        dependsOn: ["tileMatrixSet"]
      })], d.prototype, "suspended", void 0), Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_4__["property"])({
        readOnly: !0,
        dependsOn: ["view.spatialReference", "layer.activeLayer"]
      })], d.prototype, "tileMatrixSet", null), d = Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_subclass_js__WEBPACK_IMPORTED_MODULE_5__["subclass"])("esri.views.2d.layers.WMTSLayerView2D")], d);
      var m = d;
      /* harmony default export */

      __webpack_exports__["default"] = m;
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

        var _super3 = _createSuper(_class);

        function _class(e) {
          var _this6;

          _classCallCheck(this, _class);

          _this6 = _super3.call(this), _this6._tileInfoView = e;
          return _this6;
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
            var _this7 = this;

            var n = t.registerRenderPass({
              name: "stencil",
              brushes: [_brushes_WGLBrushStencil_js__WEBPACK_IMPORTED_MODULE_2__["default"]],
              drawPhase: _enums_js__WEBPACK_IMPORTED_MODULE_0__["WGLDrawPhase"].DEBUG | _enums_js__WEBPACK_IMPORTED_MODULE_0__["WGLDrawPhase"].MAP | _enums_js__WEBPACK_IMPORTED_MODULE_0__["WGLDrawPhase"].HIGHLIGHT,
              target: function target() {
                return _this7.getStencilTarget();
              }
            }),
                i = t.registerRenderPass({
              name: "tileInfo",
              brushes: [_brushes_WGLBrushInfo_js__WEBPACK_IMPORTED_MODULE_1__["default"]],
              drawPhase: _enums_js__WEBPACK_IMPORTED_MODULE_0__["WGLDrawPhase"].DEBUG,
              target: function target() {
                return _this7.children;
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
//# sourceMappingURL=layers-WMTSLayerView2D-js-es5.js.map