(function () {
  function _createForOfIteratorHelper(o, allowArrayLike) { var it; if (typeof Symbol === "undefined" || o[Symbol.iterator] == null) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function (_e2) { function e(_x) { return _e2.apply(this, arguments); } e.toString = function () { return _e2.toString(); }; return e; }(function (e) { throw e; }), f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = o[Symbol.iterator](); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function (_e3) { function e(_x2) { return _e3.apply(this, arguments); } e.toString = function () { return _e3.toString(); }; return e; }(function (e) { didErr = true; err = e; }), f: function f() { try { if (!normalCompletion && it["return"] != null) it["return"](); } finally { if (didErr) throw err; } } }; }

  function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }

  function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

  function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && Symbol.iterator in Object(iter)) return Array.from(iter); }

  function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }

  function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

  function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

  function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

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

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["tileRenderers-HeatmapTileRenderer-js"], {
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

        var _super2 = _createSuper(_class);

        function _class(e) {
          var _this2;

          _classCallCheck(this, _class);

          _this2 = _super2.call(this), _this2._tileInfoView = e;
          return _this2;
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
            var _this3 = this;

            var n = t.registerRenderPass({
              name: "stencil",
              brushes: [_brushes_WGLBrushStencil_js__WEBPACK_IMPORTED_MODULE_2__["default"]],
              drawPhase: _enums_js__WEBPACK_IMPORTED_MODULE_0__["WGLDrawPhase"].DEBUG | _enums_js__WEBPACK_IMPORTED_MODULE_0__["WGLDrawPhase"].MAP | _enums_js__WEBPACK_IMPORTED_MODULE_0__["WGLDrawPhase"].HIGHLIGHT,
              target: function target() {
                return _this3.getStencilTarget();
              }
            }),
                i = t.registerRenderPass({
              name: "tileInfo",
              brushes: [_brushes_WGLBrushInfo_js__WEBPACK_IMPORTED_MODULE_1__["default"]],
              drawPhase: _enums_js__WEBPACK_IMPORTED_MODULE_0__["WGLDrawPhase"].DEBUG,
              target: function target() {
                return _this3.children;
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

    },

    /***/
    "gOq9":
    /*!***************************************************************************************************!*\
      !*** ./node_modules/@arcgis/core/views/2d/layers/features/tileRenderers/support/HeatmapSource.js ***!
      \***************************************************************************************************/

    /*! exports provided: HeatmapSource */

    /***/
    function gOq9(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "HeatmapSource", function () {
        return i;
      });
      /* harmony import */


      var _renderers_support_heatmapUtils_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ../../../../../../renderers/support/heatmapUtils.js */
      "AfLA");
      /*
      All material copyright ESRI, All Rights Reserved, unless otherwise specified.
      See https://js.arcgis.com/4.18/esri/copyright.txt for details.
      */


      var i = /*#__PURE__*/function () {
        function i() {
          _classCallCheck(this, i);

          this.gradient = null, this.height = 512, this.width = 512;
        }

        _createClass(i, [{
          key: "render",
          value: function render(_i2) {
            Object(_renderers_support_heatmapUtils_js__WEBPACK_IMPORTED_MODULE_0__["drawHeatmap"])(_i2, 512, this.intensities, this.gradient, this.minPixelIntensity, this.maxPixelIntensity);
          }
        }]);

        return i;
      }();
      /***/

    },

    /***/
    "jncx":
    /*!*************************************************************************************************!*\
      !*** ./node_modules/@arcgis/core/views/2d/layers/features/tileRenderers/HeatmapTileRenderer.js ***!
      \*************************************************************************************************/

    /*! exports provided: default */

    /***/
    function jncx(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony import */


      var _chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ../../../../../chunks/tslib.es6.js */
      "pO5D");
      /* harmony import */


      var _core_has_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ../../../../../core/has.js */
      "wSAH");
      /* harmony import */


      var _core_Logger_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ../../../../../core/Logger.js */
      "6S2I");
      /* harmony import */


      var _core_accessorSupport_ensureType_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ../../../../../core/accessorSupport/ensureType.js */
      "zqDF");
      /* harmony import */


      var _core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ../../../../../core/accessorSupport/decorators/property.js */
      "WbKI");
      /* harmony import */


      var _core_accessorSupport_decorators_subclass_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ../../../../../core/accessorSupport/decorators/subclass.js */
      "04ZG");
      /* harmony import */


      var _core_urlUtils_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ../../../../../core/urlUtils.js */
      "4EHJ");
      /* harmony import */


      var _core_uuid_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! ../../../../../core/uuid.js */
      "ju1D");
      /* harmony import */


      var _portal_support_resourceExtension_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! ../../../../../portal/support/resourceExtension.js */
      "9AIY");
      /* harmony import */


      var _core_promiseUtils_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! ../../../../../core/promiseUtils.js */
      "9MzC");
      /* harmony import */


      var _renderers_support_heatmapUtils_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
      /*! ../../../../../renderers/support/heatmapUtils.js */
      "AfLA");
      /* harmony import */


      var _engine_BitmapTileContainer_js__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
      /*! ../../../engine/BitmapTileContainer.js */
      "6Az7");
      /* harmony import */


      var _BaseTileRenderer_js__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
      /*! ./BaseTileRenderer.js */
      "4xTw");
      /* harmony import */


      var _support_HeatmapSource_js__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
      /*! ./support/HeatmapSource.js */
      "gOq9");
      /*
      All material copyright ESRI, All Rights Reserved, unless otherwise specified.
      See https://js.arcgis.com/4.18/esri/copyright.txt for details.
      */


      var a = /*#__PURE__*/function (_BaseTileRenderer_js_) {
        _inherits(a, _BaseTileRenderer_js_);

        var _super3 = _createSuper(a);

        function a(e) {
          var _this4;

          _classCallCheck(this, a);

          _this4 = _super3.call(this, e), _this4._intensityInfo = {
            minPixelIntensity: 0,
            maxPixelIntensity: 0
          }, _this4.featuresView = {
            attributeView: {
              initialize: function initialize() {},
              requestUpdate: function requestUpdate() {}
            },
            requestRender: function requestRender() {}
          }, _this4._container = new _engine_BitmapTileContainer_js__WEBPACK_IMPORTED_MODULE_11__["BitmapTileContainer"](e.tileInfoView);
          return _this4;
        }

        _createClass(a, [{
          key: "createTile",
          value: function createTile(e) {
            var t = this._container.createTile(e);

            return this.tileInfoView.getTileCoords(t.bitmap, e), t.bitmap.resolution = this.tileInfoView.getTileResolution(e), t;
          }
        }, {
          key: "onConfigUpdate",
          value: function onConfigUpdate() {
            var _this5 = this;

            var e = this.layer.renderer;

            if ("heatmap" === e.type) {
              var t = e.minPixelIntensity,
                  i = e.maxPixelIntensity;
              this._intensityInfo.minPixelIntensity = t, this._intensityInfo.maxPixelIntensity = i, this._gradient = Object(_renderers_support_heatmapUtils_js__WEBPACK_IMPORTED_MODULE_10__["generateGradient"])(e.toJSON()), this.tiles.forEach(function (e) {
                var r = e.bitmap.source;
                r && (r.minPixelIntensity = t, r.maxPixelIntensity = i, r.gradient = _this5._gradient, e.bitmap.invalidateTexture());
              });
            }
          }
        }, {
          key: "hitTest",
          value: function hitTest() {
            return Object(_core_promiseUtils_js__WEBPACK_IMPORTED_MODULE_9__["resolve"])([]);
          }
        }, {
          key: "install",
          value: function install(e) {
            e.addChild(this._container);
          }
        }, {
          key: "uninstall",
          value: function uninstall(e) {
            this._container.removeAllChildren(), e.removeChild(this._container);
          }
        }, {
          key: "disposeTile",
          value: function disposeTile(e) {
            this._container.removeChild(e), e.destroy();
          }
        }, {
          key: "supportsRenderer",
          value: function supportsRenderer(e) {
            return e && "heatmap" === e.type;
          }
        }, {
          key: "onTileData",
          value: function onTileData(e) {
            var t = this.tiles.get(e.tileKey);
            if (!t) return;
            var i = e.intensityInfo,
                _this$_intensityInfo = this._intensityInfo,
                r = _this$_intensityInfo.minPixelIntensity,
                s = _this$_intensityInfo.maxPixelIntensity,
                n = t.bitmap.source || new _support_HeatmapSource_js__WEBPACK_IMPORTED_MODULE_13__["HeatmapSource"]();
            n.intensities = i && i.matrix || null, n.minPixelIntensity = r, n.maxPixelIntensity = s, n.gradient = this._gradient, t.bitmap.source = n, this._container.addChild(t), this.requestUpdate();
          }
        }, {
          key: "onTileError",
          value: function onTileError(e) {
            console.error(e);
          }
        }, {
          key: "lockGPUUploads",
          value: function lockGPUUploads() {}
        }, {
          key: "unlockGPUUploads",
          value: function unlockGPUUploads() {}
        }]);

        return a;
      }(_BaseTileRenderer_js__WEBPACK_IMPORTED_MODULE_12__["default"]);

      a = Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_subclass_js__WEBPACK_IMPORTED_MODULE_5__["subclass"])("esri.views.2d.layers.features.tileRenderers.HeatmapTileRenderer")], a);
      var l = a;
      /* harmony default export */

      __webpack_exports__["default"] = l;
      /***/
    }
  }]);
})();
//# sourceMappingURL=tileRenderers-HeatmapTileRenderer-js-es5.js.map