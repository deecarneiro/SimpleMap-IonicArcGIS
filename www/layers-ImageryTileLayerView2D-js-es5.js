(function () {
  function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

  function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

  function _createForOfIteratorHelper(o, allowArrayLike) { var it; if (typeof Symbol === "undefined" || o[Symbol.iterator] == null) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function (_e9) { function e(_x9) { return _e9.apply(this, arguments); } e.toString = function () { return _e9.toString(); }; return e; }(function (e) { throw e; }), f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = o[Symbol.iterator](); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function (_e10) { function e(_x10) { return _e10.apply(this, arguments); } e.toString = function () { return _e10.toString(); }; return e; }(function (e) { didErr = true; err = e; }), f: function f() { try { if (!normalCompletion && it["return"] != null) it["return"](); } finally { if (didErr) throw err; } } }; }

  function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

  function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

  function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

  function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }

  function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

  function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && Symbol.iterator in Object(iter)) return Array.from(iter); }

  function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }

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

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["layers-ImageryTileLayerView2D-js"], {
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
    "Jl6v":
    /*!*****************************************************************!*\
      !*** ./node_modules/@arcgis/core/views/2d/engine/RasterTile.js ***!
      \*****************************************************************/

    /*! exports provided: RasterTile */

    /***/
    function Jl6v(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "RasterTile", function () {
        return e;
      });
      /* harmony import */


      var _webgl_TiledDisplayObject_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ./webgl/TiledDisplayObject.js */
      "5LEI");
      /* harmony import */


      var _RasterBitmap_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./RasterBitmap.js */
      "N8mD");
      /*
      All material copyright ESRI, All Rights Reserved, unless otherwise specified.
      See https://js.arcgis.com/4.18/esri/copyright.txt for details.
      */


      var e = /*#__PURE__*/function (_webgl_TiledDisplayOb) {
        _inherits(e, _webgl_TiledDisplayOb);

        var _super2 = _createSuper(e);

        function e(t, _e2, i) {
          var _this2;

          var a = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : null;

          _classCallCheck(this, e);

          _this2 = _super2.call(this, t, _e2, i), _this2.bitmap = new _RasterBitmap_js__WEBPACK_IMPORTED_MODULE_1__["RasterBitmap"](a, null, null), _this2.bitmap.coordScale = i, _this2.bitmap.once("isReady", function () {
            return _this2.ready();
          });
          return _this2;
        }

        _createClass(e, [{
          key: "stencilRef",
          get: function get() {
            return this.bitmap.stencilRef;
          },
          set: function set(t) {
            this.bitmap.stencilRef = t;
          }
        }, {
          key: "getMemoryUsage",
          value: function getMemoryUsage() {
            return this.bitmap.getMemoryUsage();
          }
        }, {
          key: "setTransform",
          value: function setTransform(t, s) {
            _get(_getPrototypeOf(e.prototype), "setTransform", this).call(this, t, s), this.bitmap.transforms.dvs = this.transforms.dvs;
          }
        }, {
          key: "release",
          value: function release() {
            return this.destroy(), this.bitmap = null, this.stage = null, !0;
          }
        }, {
          key: "onAttach",
          value: function onAttach() {
            this.bitmap.stage = this.stage;
          }
        }, {
          key: "onDetach",
          value: function onDetach() {
            this.bitmap.stage = null;
          }
        }]);

        return e;
      }(_webgl_TiledDisplayObject_js__WEBPACK_IMPORTED_MODULE_0__["TiledDisplayObject"]);
      /***/

    },

    /***/
    "N8mD":
    /*!*******************************************************************!*\
      !*** ./node_modules/@arcgis/core/views/2d/engine/RasterBitmap.js ***!
      \*******************************************************************/

    /*! exports provided: RasterBitmap */

    /***/
    function N8mD(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "RasterBitmap", function () {
        return p;
      });
      /* harmony import */


      var _core_maybe_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ../../../core/maybe.js */
      "srIe");
      /* harmony import */


      var _chunks_mat3_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ../../../chunks/mat3.js */
      "HJJS");
      /* harmony import */


      var _layers_support_rasterFunctions_pixelUtils_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ../../../layers/support/rasterFunctions/pixelUtils.js */
      "ne7T");
      /* harmony import */


      var _chunks_mat3f32_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ../../../chunks/mat3f32.js */
      "jHF5");
      /* harmony import */


      var _chunks_vec2f32_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ../../../chunks/vec2f32.js */
      "c46T");
      /* harmony import */


      var _DisplayObject_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ./DisplayObject.js */
      "fEsP");
      /* harmony import */


      var _webgl_rasterUtils_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ../../webgl/rasterUtils.js */
      "vrr1");
      /*
      All material copyright ESRI, All Rights Reserved, unless otherwise specified.
      See https://js.arcgis.com/4.18/esri/copyright.txt for details.
      */


      var _ = {
        bandCount: 3,
        outMin: 0,
        outMax: 1,
        minCutOff: [0, 0, 0],
        maxCutOff: [255, 255, 255],
        factor: [1 / 255, 1 / 255, 1 / 255],
        useGamma: !1,
        gamma: [1, 1, 1],
        gammaCorrection: [1, 1, 1],
        colormap: null,
        colormapOffset: null,
        type: "stretch"
      };

      var p = /*#__PURE__*/function (_DisplayObject_js__WE2) {
        _inherits(p, _DisplayObject_js__WE2);

        var _super3 = _createSuper(p);

        function p() {
          var _this3;

          var t = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : null;
          var e = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : null;
          var s = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : null;

          _classCallCheck(this, p);

          _this3 = _super3.call(this), _this3._textureInvalidated = !0, _this3._memoryUsed = null, _this3._supportsBilinear = !0, _this3.stencilRef = 0, _this3.coordScale = [1, 1], _this3._symbolizerParameters = null, _this3.height = null, _this3.isRendereredSource = !1, _this3.pixelRatio = 1, _this3.resolution = 0, _this3.rotation = 0, _this3._source = null, _this3.rawPixelData = null, _this3._suspended = !1, _this3._bandIds = null, _this3._interpolation = null, _this3._transformGrid = null, _this3.width = null, _this3.x = 0, _this3.y = 0, _this3.transforms = {
            dvs: Object(_chunks_mat3f32_js__WEBPACK_IMPORTED_MODULE_3__["c"])()
          }, _this3.source = t, _this3.transformGrid = e, _this3.interpolation = s;
          return _this3;
        }

        _createClass(p, [{
          key: "symbolizerParameters",
          get: function get() {
            return this._symbolizerParameters || _;
          },
          set: function set(t) {
            this._symbolizerParameters = t;
          }
        }, {
          key: "source",
          get: function get() {
            return this._source;
          },
          set: function set(t) {
            this._source = t, this._rasterTexture && (this._rasterTexture.dispose(), this._rasterTexture = null, this._rasterTextureBandIds = null, this._memoryUsed = null);
          }
        }, {
          key: "suspended",
          get: function get() {
            return this._suspended;
          },
          set: function set(t) {
            this._suspended && !t && this.stage && (this.ready(), this.requestRender()), this._suspended = t;
          }
        }, {
          key: "bandIds",
          get: function get() {
            return this._bandIds;
          },
          set: function set(t) {
            this._bandIds = t, this.invalidateTexture();
          }
        }, {
          key: "interpolation",
          get: function get() {
            return this._interpolation;
          },
          set: function set(t) {
            this._interpolation = t, this._rasterTexture && this._rasterTexture.setSamplingMode(!this._supportsBilinear || "bilinear" !== t && "cubic" !== t ? 9728 : 9729);
          }
        }, {
          key: "transformGrid",
          get: function get() {
            return this._transformGrid;
          },
          set: function set(t) {
            this._transformGrid = t, this._transformGridTexture && (this._transformGridTexture.dispose(), this._transformGridTexture = null, this._memoryUsed = null);
          }
        }, {
          key: "invalidateTexture",
          value: function invalidateTexture() {
            this._textureInvalidated || (this._textureInvalidated = !0, this.requestRender());
          }
        }, {
          key: "setTransform",
          value: function setTransform(t) {
            var o = Object(_chunks_mat3_js__WEBPACK_IMPORTED_MODULE_1__["i"])(this.transforms.dvs),
                _t$toScreenNoRotation = t.toScreenNoRotation([0, 0], this.x, this.y),
                _t$toScreenNoRotation2 = _slicedToArray(_t$toScreenNoRotation, 2),
                u = _t$toScreenNoRotation2[0],
                h = _t$toScreenNoRotation2[1],
                l = this.resolution / this.pixelRatio / t.resolution,
                d = l * this.width,
                m = l * this.height,
                _ = Math.PI * this.rotation / 180;

            Object(_chunks_mat3_js__WEBPACK_IMPORTED_MODULE_1__["a"])(o, o, Object(_chunks_vec2f32_js__WEBPACK_IMPORTED_MODULE_4__["f"])(u, h)), Object(_chunks_mat3_js__WEBPACK_IMPORTED_MODULE_1__["a"])(o, o, Object(_chunks_vec2f32_js__WEBPACK_IMPORTED_MODULE_4__["f"])(d / 2, m / 2)), Object(_chunks_mat3_js__WEBPACK_IMPORTED_MODULE_1__["r"])(o, o, -_), Object(_chunks_mat3_js__WEBPACK_IMPORTED_MODULE_1__["a"])(o, o, Object(_chunks_vec2f32_js__WEBPACK_IMPORTED_MODULE_4__["f"])(-d / 2, -m / 2)), Object(_chunks_mat3_js__WEBPACK_IMPORTED_MODULE_1__["j"])(o, o, Object(_chunks_vec2f32_js__WEBPACK_IMPORTED_MODULE_4__["f"])(d, m)), Object(_chunks_mat3_js__WEBPACK_IMPORTED_MODULE_1__["m"])(this.transforms.dvs, t.displayViewMat3, o);
          }
        }, {
          key: "getTextures",
          value: function getTextures() {
            if (!this._rasterTexture) return null;
            var t = [],
                e = [];
            return this._transformGridTexture && (e.push(this._transformGridTexture), t.push("u_transformGrid")), this._rasterTexture && (e.push(this._rasterTexture), t.push("u_image")), this._colormapTexture && (e.push(this._colormapTexture), t.push("u_colormap")), {
              names: t,
              textures: e
            };
          }
        }, {
          key: "getMemoryUsage",
          value: function getMemoryUsage() {
            if (Object(_core_maybe_js__WEBPACK_IMPORTED_MODULE_0__["isNone"])(this._memoryUsed)) {
              var t = this.getTextures();
              if (null == t) return 0;
              this._memoryUsed = t.textures.map(function (t) {
                return t.descriptor.width * t.descriptor.height * 4;
              }).reduce(function (t, e) {
                return t + e;
              });
            }

            return this._memoryUsed;
          }
        }, {
          key: "onAttach",
          value: function onAttach() {
            this.invalidateTexture();
          }
        }, {
          key: "onDetach",
          value: function onDetach() {
            this.invalidateTexture();
          }
        }, {
          key: "updateTexture",
          value: function updateTexture(_ref) {
            var t = _ref.context;
            var e, s, r;
            if (!this.stage) return null == (e = this._rasterTexture) || e.dispose(), null == (s = this._transformGridTexture) || s.dispose(), null == (r = this._colormapTexture) || r.dispose(), this._rasterTexture = null, this._rasterTextureBandIds = null, this._transformGridTexture = null, void (this._colormapTexture = null);
            if (!this._textureInvalidated) return;
            this._textureInvalidated = !1;
            var i = this.source,
                a = i && i.pixels && i.pixels.length > 0;
            this._createOrDestroyRasterTexture(t), this._rasterTexture && (a ? (this._updateColormapTexture(t), this.transformGrid && !this._transformGridTexture && (this._transformGridTexture = Object(_webgl_rasterUtils_js__WEBPACK_IMPORTED_MODULE_6__["createTransformTexture"])(t, this.transformGrid))) : this._rasterTexture.setData(null)), this.suspended || (this.ready(), this.requestRender());
          }
        }, {
          key: "_createOrDestroyRasterTexture",
          value: function _createOrDestroyRasterTexture(t) {
            var e, s;
            var r = this.source ? Object(_layers_support_rasterFunctions_pixelUtils_js__WEBPACK_IMPORTED_MODULE_2__["extractBands"])(this.source, this.bandIds) : null;
            if (!(r && r.pixels && r.pixels.length > 0)) return void (this._rasterTexture && (this._rasterTexture.dispose(), this._rasterTextureBandIds = null, this._rasterTexture = null));
            var i = null == this._rasterTextureBandIds && null == this.bandIds || this._rasterTextureBandIds && this.bandIds && this._rasterTextureBandIds.join("") === this.bandIds.join("");

            if (this._rasterTexture) {
              if (i) return;
              this._rasterTexture.dispose(), this._rasterTextureBandIds = null, this._rasterTexture = null;
            }

            var a = this.interpolation || "nearest",
                u = this.isRendereredSource || !(null != (e = t.capabilities.textureFloat) && e.textureFloat);
            this._rasterTexture = Object(_webgl_rasterUtils_js__WEBPACK_IMPORTED_MODULE_6__["createRasterTexture"])(t, r, a, u), this._supportsBilinear = null == (s = t.capabilities.textureFloat) ? void 0 : s.textureFloatLinear, this._rasterTextureBandIds = this.bandIds;
          }
        }, {
          key: "_updateColormapTexture",
          value: function _updateColormapTexture(t) {
            var e = this._colormap,
                s = this.symbolizerParameters.colormap;
            return s ? e ? s.length !== e.length || s.some(function (t, s) {
              return t !== e[s];
            }) ? (this._colormapTexture && (this._colormapTexture.dispose(), this._colormapTexture = null), this._colormapTexture = Object(_webgl_rasterUtils_js__WEBPACK_IMPORTED_MODULE_6__["createColormapTexture"])(t, s), void (this._colormap = s)) : void 0 : (this._colormapTexture = Object(_webgl_rasterUtils_js__WEBPACK_IMPORTED_MODULE_6__["createColormapTexture"])(t, s), void (this._colormap = s)) : (this._colormapTexture && (this._colormapTexture.dispose(), this._colormapTexture = null), void (this._colormap = null));
          }
        }]);

        return p;
      }(_DisplayObject_js__WEBPACK_IMPORTED_MODULE_5__["DisplayObject"]);
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
          var _e3 = o;
          return r.uniqueValueInfos.forEach(function (n) {
            _e3 = t(_e3, n.symbol);
          }), _e3;
        }

        if ("class-breaks" === r.type) {
          var _e4 = o;
          return r.classBreakInfos.forEach(function (n) {
            _e4 = t(_e4, n.symbol);
          }), _e4;
        }

        return r.type, o;
      }
      /***/

    },

    /***/
    "Witc":
    /*!**************************************************************************!*\
      !*** ./node_modules/@arcgis/core/views/2d/engine/RasterTileContainer.js ***!
      \**************************************************************************/

    /*! exports provided: RasterTileContainer */

    /***/
    function Witc(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "RasterTileContainer", function () {
        return o;
      });
      /* harmony import */


      var _geometry_support_aaBoundingRect_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ../../../geometry/support/aaBoundingRect.js */
      "kYAx");
      /* harmony import */


      var _webgl_enums_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./webgl/enums.js */
      "yE7X");
      /* harmony import */


      var _brushes_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./brushes.js */
      "Oxob");
      /* harmony import */


      var _webgl_TileContainer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./webgl/TileContainer.js */
      "ZyIX");
      /* harmony import */


      var _RasterTile_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ./RasterTile.js */
      "Jl6v");
      /*
      All material copyright ESRI, All Rights Reserved, unless otherwise specified.
      See https://js.arcgis.com/4.18/esri/copyright.txt for details.
      */


      var o = /*#__PURE__*/function (_webgl_TileContainer_) {
        _inherits(o, _webgl_TileContainer_);

        var _super4 = _createSuper(o);

        function o() {
          _classCallCheck(this, o);

          return _super4.apply(this, arguments);
        }

        _createClass(o, [{
          key: "createTile",
          value: function createTile(r) {
            var s = this._tileInfoView.getTileBounds(Object(_geometry_support_aaBoundingRect_js__WEBPACK_IMPORTED_MODULE_0__["create"])(), r);

            return new _RasterTile_js__WEBPACK_IMPORTED_MODULE_4__["RasterTile"](r, s, this._tileInfoView.tileInfo.size);
          }
        }, {
          key: "destroyTile",
          value: function destroyTile() {}
        }, {
          key: "prepareRenderPasses",
          value: function prepareRenderPasses(e) {
            var _this4 = this;

            var t = e.registerRenderPass({
              name: "bitmap (tile)",
              brushes: [_brushes_js__WEBPACK_IMPORTED_MODULE_2__["brushes"].raster],
              target: function target() {
                return _this4.children.map(function (e) {
                  return e.bitmap;
                });
              },
              drawPhase: _webgl_enums_js__WEBPACK_IMPORTED_MODULE_1__["WGLDrawPhase"].MAP
            });
            return [].concat(_toConsumableArray(_get(_getPrototypeOf(o.prototype), "prepareRenderPasses", this).call(this, e)), [t]);
          }
        }, {
          key: "doRender",
          value: function doRender(e) {
            this.visible && e.drawPhase === _webgl_enums_js__WEBPACK_IMPORTED_MODULE_1__["WGLDrawPhase"].MAP && _get(_getPrototypeOf(o.prototype), "doRender", this).call(this, e);
          }
        }]);

        return o;
      }(_webgl_TileContainer_js__WEBPACK_IMPORTED_MODULE_3__["default"]);
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

        var _super5 = _createSuper(_class);

        function _class(e) {
          var _this5;

          _classCallCheck(this, _class);

          _this5 = _super5.call(this), _this5._tileInfoView = e;
          return _this5;
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
            var _this6 = this;

            var n = t.registerRenderPass({
              name: "stencil",
              brushes: [_brushes_WGLBrushStencil_js__WEBPACK_IMPORTED_MODULE_2__["default"]],
              drawPhase: _enums_js__WEBPACK_IMPORTED_MODULE_0__["WGLDrawPhase"].DEBUG | _enums_js__WEBPACK_IMPORTED_MODULE_0__["WGLDrawPhase"].MAP | _enums_js__WEBPACK_IMPORTED_MODULE_0__["WGLDrawPhase"].HIGHLIGHT,
              target: function target() {
                return _this6.getStencilTarget();
              }
            }),
                i = t.registerRenderPass({
              name: "tileInfo",
              brushes: [_brushes_WGLBrushInfo_js__WEBPACK_IMPORTED_MODULE_1__["default"]],
              drawPhase: _enums_js__WEBPACK_IMPORTED_MODULE_0__["WGLDrawPhase"].DEBUG,
              target: function target() {
                return _this6.children;
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
    "cthj":
    /*!************************************************************************!*\
      !*** ./node_modules/@arcgis/core/views/layers/ImageryTileLayerView.js ***!
      \************************************************************************/

    /*! exports provided: ImageryTileLayerView */

    /***/
    function cthj(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ImageryTileLayerView", function () {
        return u;
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


      var _Graphic_js__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
      /*! ../../Graphic.js */
      "jWBI");
      /* harmony import */


      var _layers_support_rasterFunctions_rasterProjectionHelper_js__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
      /*! ../../layers/support/rasterFunctions/rasterProjectionHelper.js */
      "tODX");
      /* harmony import */


      var _support_popupUtils_js__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(
      /*! ./support/popupUtils.js */
      "rXMu");
      /*
      All material copyright ESRI, All Rights Reserved, unless otherwise specified.
      See https://js.arcgis.com/4.18/esri/copyright.txt for details.
      */


      var u = function u(_u2) {
        var m = /*#__PURE__*/function (_u) {
          _inherits(m, _u);

          var _super6 = _createSuper(m);

          function m() {
            var _this7;

            _classCallCheck(this, m);

            _this7 = _super6.apply(this, arguments), _this7._rasterFieldPrefix = "Raster.", _this7.layer = null, _this7.view = null, _this7.fullExtent = null, _this7.tileInfo = null, _this7.datumTransformation = null;
            return _this7;
          }

          _createClass(m, [{
            key: "hasTilingEffects",
            get: function get() {
              return this.layer.renderer && "dynamicRangeAdjustment" in this.layer.renderer && this.layer.renderer.dynamicRangeAdjustment;
            }
          }, {
            key: "fetchPopupFeatures",
            value: function () {
              var _fetchPopupFeatures = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(e, r) {
                var i, n, l, u, _yield$i$identify, _m, f, c, _e5, t, _r3, o, _r4, _e6, _r5, _i2, s;

                return regeneratorRuntime.wrap(function _callee$(_context) {
                  while (1) {
                    switch (_context.prev = _context.next) {
                      case 0:
                        i = this.layer;

                        if (e) {
                          _context.next = 3;
                          break;
                        }

                        return _context.abrupt("return", Object(_core_promiseUtils_js__WEBPACK_IMPORTED_MODULE_11__["reject"])(new _core_Error_js__WEBPACK_IMPORTED_MODULE_7__["default"]("imageryTileLayerView:fetchPopupFeatures", "Nothing to fetch without area", {
                          layer: i
                        })));

                      case 3:
                        n = i.popupEnabled, l = Object(_support_popupUtils_js__WEBPACK_IMPORTED_MODULE_14__["getFetchPopupTemplate"])(i, r);

                        if (!(!n || !Object(_core_maybe_js__WEBPACK_IMPORTED_MODULE_2__["isSome"])(l))) {
                          _context.next = 6;
                          break;
                        }

                        throw new _core_Error_js__WEBPACK_IMPORTED_MODULE_7__["default"]("imageryTileLayerView:fetchPopupFeatures", "Missing required popupTemplate or popupEnabled", {
                          popupEnabled: n,
                          popupTemplate: l
                        });

                      case 6:
                        u = [];
                        _context.next = 9;
                        return i.identify(e);

                      case 9:
                        _yield$i$identify = _context.sent;
                        _m = _yield$i$identify.value;

                        if (_m) {
                          _e5 = _m.join(", "), t = {
                            ObjectId: 0
                          }, _r3 = "Raster.ServicePixelValue";
                          t[_r3] = this._formatAttributeValue(_e5, _r3);
                          o = null == (f = i.rasterInfo) || null == (c = f.attributeTable) ? void 0 : c.features;

                          if (o && o.length > 0) {
                            _r4 = o.filter(function (t) {
                              var r = t.attributes.value || t.attributes.Value || t.attributes.VALUE;
                              return String(r) === _e5;
                            });

                            if (_r4.length > 0) {
                              _e6 = _r4[0];
                              if (_e6) for (_r5 in _e6.attributes) {
                                if (_e6.attributes.hasOwnProperty(_r5)) {
                                  _i2 = this._rasterFieldPrefix + _r5;
                                  t[_i2] = this._formatAttributeValue(_e6.attributes[_r5], _i2);
                                }
                              }
                            }
                          }

                          s = new _Graphic_js__WEBPACK_IMPORTED_MODULE_12__["default"](this.fullExtent.clone(), null, t);
                          s.layer = i, s.sourceLayer = s.layer, u.push(s);
                        }

                        return _context.abrupt("return", u);

                      case 13:
                      case "end":
                        return _context.stop();
                    }
                  }
                }, _callee, this);
              }));

              function fetchPopupFeatures(_x, _x2) {
                return _fetchPopupFeatures.apply(this, arguments);
              }

              return fetchPopupFeatures;
            }()
          }, {
            key: "updateFullExtent",
            value: function updateFullExtent() {
              var e = this.layer.tileInfo;
              var t;
              e && e.spatialReference || (t = new _core_Error_js__WEBPACK_IMPORTED_MODULE_7__["default"]("layerview:tiling-information-missing", "The layer doesn't provide tiling information", {
                layer: this.layer
              }));
              var r = Object(_layers_support_rasterFunctions_rasterProjectionHelper_js__WEBPACK_IMPORTED_MODULE_13__["projectExtent"])(this.layer.fullExtent, this.view.spatialReference, this.datumTransformation);
              return null == r && (t = new _core_Error_js__WEBPACK_IMPORTED_MODULE_7__["default"]("layerview:projection-not-supported", "The layer extent cannot be projected to the view's spatial reference", {
                layer: this.layer
              })), this._set("fullExtent", r), t ? Object(_core_promiseUtils_js__WEBPACK_IMPORTED_MODULE_11__["reject"])(t) : Object(_core_promiseUtils_js__WEBPACK_IMPORTED_MODULE_11__["resolve"])();
            }
          }, {
            key: "_formatAttributeValue",
            value: function _formatAttributeValue(e, t) {
              if ("string" == typeof e) {
                var r = this.layer.popupTemplate && this.layer.popupTemplate.fieldInfos,
                    i = this._getFieldInfo(r, t),
                    o = i && i.format;

                if (o) {
                  var _t2, _r6;

                  return e.trim().indexOf(",") > -1 ? (_t2 = ",", _r6 = _t2 + " ", this._formatDelimitedString(e, _t2, _r6, o)) : e.trim().indexOf(" ") > -1 ? (_t2 = _r6 = " ", this._formatDelimitedString(e, _t2, _r6, o)) : this._formatNumberFromString(e, o);
                }
              }

              return e;
            }
          }, {
            key: "_getFieldInfo",
            value: function _getFieldInfo(e, t) {
              if (!e || !e.length || !t) return;
              var r = t.toLowerCase();
              var i;
              return e.some(function (e) {
                return !(!e.fieldName || e.fieldName.toLowerCase() !== r && e.fieldName.toLowerCase() !== r.replace(/ /g, "_")) && (i = e, !0);
              }), i;
            }
          }, {
            key: "_formatDelimitedString",
            value: function _formatDelimitedString(e, t, r, i) {
              var _this8 = this;

              return e && t && r && i ? e.trim().split(t).map(function (e) {
                return _this8._formatNumberFromString(e, i);
              }).join(r) : e;
            }
          }, {
            key: "_formatNumberFromString",
            value: function _formatNumberFromString(e, t) {
              if (!e || !t) return e;
              var r = Number(e);
              return isNaN(r) ? e : t.format(r);
            }
          }]);

          return m;
        }(_u2);

        return Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_5__["property"])()], m.prototype, "layer", void 0), Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_5__["property"])()], m.prototype, "view", void 0), Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_5__["property"])()], m.prototype, "fullExtent", void 0), Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_5__["property"])()], m.prototype, "tileInfo", void 0), Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_5__["property"])({
          readOnly: !0,
          dependsOn: ["layer.renderer"]
        })], m.prototype, "hasTilingEffects", null), m = Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_subclass_js__WEBPACK_IMPORTED_MODULE_6__["subclass"])("esri.views.layers.ImageryTileLayerView")], m), m;
      };
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


      function i(_x3) {
        return _i3.apply(this, arguments);
      }

      function _i3() {
        _i3 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee2(i) {
          var d,
              o,
              s,
              u,
              a,
              n,
              f,
              r,
              m,
              _args2 = arguments;
          return regeneratorRuntime.wrap(function _callee2$(_context2) {
            while (1) {
              switch (_context2.prev = _context2.next) {
                case 0:
                  d = _args2.length > 1 && _args2[1] !== undefined ? _args2[1] : i.popupTemplate;

                  if (Object(_core_maybe_js__WEBPACK_IMPORTED_MODULE_0__["isSome"])(d)) {
                    _context2.next = 3;
                    break;
                  }

                  return _context2.abrupt("return", []);

                case 3:
                  _context2.next = 5;
                  return d.getRequiredFields(i.fields);

                case 5:
                  o = _context2.sent;
                  s = d.lastEditInfoEnabled;
                  u = i.objectIdField;
                  a = i.typeIdField;
                  n = i.globalIdField;
                  f = i.relationships;

                  if (!o.includes("*")) {
                    _context2.next = 13;
                    break;
                  }

                  return _context2.abrupt("return", ["*"]);

                case 13:
                  if (!s) {
                    _context2.next = 19;
                    break;
                  }

                  _context2.next = 16;
                  return Object(_layers_support_fieldUtils_js__WEBPACK_IMPORTED_MODULE_1__["getFeatureEditFields"])(i);

                case 16:
                  _context2.t0 = _context2.sent;
                  _context2.next = 20;
                  break;

                case 19:
                  _context2.t0 = [];

                case 20:
                  r = _context2.t0;
                  m = Object(_layers_support_fieldUtils_js__WEBPACK_IMPORTED_MODULE_1__["fixFields"])(i.fields, [].concat(_toConsumableArray(o), _toConsumableArray(r)));
                  return _context2.abrupt("return", (a && m.push(a), m && u && Object(_layers_support_fieldUtils_js__WEBPACK_IMPORTED_MODULE_1__["hasField"])(i.fields, u) && -1 === m.indexOf(u) && m.push(u), m && n && Object(_layers_support_fieldUtils_js__WEBPACK_IMPORTED_MODULE_1__["hasField"])(i.fields, n) && -1 === m.indexOf(n) && m.push(n), f && f.forEach(function (e) {
                    var p = e.keyField;
                    m && p && Object(_layers_support_fieldUtils_js__WEBPACK_IMPORTED_MODULE_1__["hasField"])(i.fields, p) && -1 === m.indexOf(p) && m.push(p);
                  }), m));

                case 23:
                case "end":
                  return _context2.stop();
              }
            }
          }, _callee2);
        }));
        return _i3.apply(this, arguments);
      }

      function d(p, l) {
        return p.popupTemplate ? p.popupTemplate : Object(_core_maybe_js__WEBPACK_IMPORTED_MODULE_0__["isSome"])(l) && l.defaultPopupTemplateEnabled && Object(_core_maybe_js__WEBPACK_IMPORTED_MODULE_0__["isSome"])(p.defaultPopupTemplate) ? p.defaultPopupTemplate : null;
      }
      /***/

    },

    /***/
    "rrwe":
    /*!*****************************************************************************!*\
      !*** ./node_modules/@arcgis/core/views/2d/layers/ImageryTileLayerView2D.js ***!
      \*****************************************************************************/

    /*! exports provided: default */

    /***/
    function rrwe(module, __webpack_exports__, __webpack_require__) {
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


      var _core_urlUtils_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! ../../../core/urlUtils.js */
      "4EHJ");
      /* harmony import */


      var _core_uuid_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! ../../../core/uuid.js */
      "ju1D");
      /* harmony import */


      var _portal_support_resourceExtension_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! ../../../portal/support/resourceExtension.js */
      "9AIY");
      /* harmony import */


      var _core_promiseUtils_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
      /*! ../../../core/promiseUtils.js */
      "9MzC");
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


      var _core_screenUtils_js__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(
      /*! ../../../core/screenUtils.js */
      "qRWG");
      /* harmony import */


      var _Graphic_js__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(
      /*! ../../../Graphic.js */
      "jWBI");
      /* harmony import */


      var _core_watchUtils_js__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(
      /*! ../../../core/watchUtils.js */
      "N5XI");
      /* harmony import */


      var _layers_support_PixelBlock_js__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(
      /*! ../../../layers/support/PixelBlock.js */
      "Piei");
      /* harmony import */


      var _layers_support_TileInfo_js__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(
      /*! ../../../layers/support/TileInfo.js */
      "3/ME");
      /* harmony import */


      var _layers_support_rasterFunctions_pixelUtils_js__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(
      /*! ../../../layers/support/rasterFunctions/pixelUtils.js */
      "ne7T");
      /* harmony import */


      var _layers_support_rasterFunctions_rasterProjectionHelper_js__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(
      /*! ../../../layers/support/rasterFunctions/rasterProjectionHelper.js */
      "tODX");
      /* harmony import */


      var _layers_support_rasterDatasets_RawBlockCache_js__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(
      /*! ../../../layers/support/rasterDatasets/RawBlockCache.js */
      "IYxN");
      /* harmony import */


      var _layers_RefreshableLayerView_js__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(
      /*! ../../layers/RefreshableLayerView.js */
      "bHqs");
      /* harmony import */


      var _webgl_capabilities_js__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(
      /*! ../../webgl/capabilities.js */
      "sq/B");
      /* harmony import */


      var _tiling_TileInfoView_js__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(
      /*! ../tiling/TileInfoView.js */
      "AY31");
      /* harmony import */


      var _tiling_TileQueue_js__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(
      /*! ../tiling/TileQueue.js */
      "B81a");
      /* harmony import */


      var _tiling_TileStrategy_js__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(
      /*! ../tiling/TileStrategy.js */
      "0wLv");
      /* harmony import */


      var _layers_LayerView_js__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(
      /*! ../../layers/LayerView.js */
      "NloG");
      /* harmony import */


      var _support_drapedUtils_js__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(
      /*! ../../support/drapedUtils.js */
      "6UvW");
      /* harmony import */


      var _layers_ImageryTileLayerView_js__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(
      /*! ../../layers/ImageryTileLayerView.js */
      "cthj");
      /* harmony import */


      var _engine_RasterTileContainer_js__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(
      /*! ../engine/RasterTileContainer.js */
      "Witc");
      /* harmony import */


      var _LayerView2D_js__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(
      /*! ./LayerView2D.js */
      "Vm2Q");
      /*
      All material copyright ESRI, All Rights Reserved, unless otherwise specified.
      See https://js.arcgis.com/4.18/esri/copyright.txt for details.
      */


      var L = _core_Logger_js__WEBPACK_IMPORTED_MODULE_3__["default"].getLogger("esri.views.2d.layers.ImageryTileLayerView2D"),
          q = [0, 0];

      var D = /*#__PURE__*/function (_Object) {
        _inherits(D, _Object);

        var _super7 = _createSuper(D);

        function D() {
          var _this9;

          _classCallCheck(this, D);

          _this9 = _super7.apply(this, arguments), _this9._tileStrategy = null, _this9._tileInfoView = null, _this9._fetchQueue = null, _this9._blockCacheRegistryUrl = null, _this9._blockCacheRegistryId = null, _this9._bitmapView = null, _this9._emptyTilePixelBlock = null, _this9._srcResolutions = null, _this9._previousLOD = null, _this9._needBlockCacheUpdate = !1, _this9._globalSymbolizerParams = null, _this9._symbolizerParams = null, _this9._abortController = null, _this9._globalUpdateRequested = !1, _this9.useWebGLForProcessing = !0, _this9.datumTransformation = null, _this9._redrawDebounced = Object(_core_promiseUtils_js__WEBPACK_IMPORTED_MODULE_10__["debounce"])(function (e) {
            return _this9._redrawImage(e);
          }, 2e3);
          return _this9;
        }

        _createClass(D, [{
          key: "initialize",
          value: function initialize() {
            var e = this.updateFullExtent();
            this.addResolvingPromise(e);
          }
        }, {
          key: "useProgressiveUpdate",
          get: function get() {
            return null == this._get("useProgressiveUpdate") || this._get("useProgressiveUpdate");
          },
          set: function set(e) {
            var _this10 = this;

            this._tileStrategy && this.useProgressiveUpdate !== e && (this._tileStrategy.destroy(), this._bitmapView.removeAllChildren(), this._tileStrategy = new _tiling_TileStrategy_js__WEBPACK_IMPORTED_MODULE_26__["default"]({
              cachePolicy: e ? "keep" : "purge",
              resampling: !1,
              acquireTile: function acquireTile(e) {
                return _this10.acquireTile(e);
              },
              releaseTile: function releaseTile(e) {
                return _this10.releaseTile(e);
              },
              cacheSize: e ? 40 : 0,
              tileInfoView: this._tileInfoView
            }), this._set("useProgressiveUpdate", e), this.requestUpdate());
          }
        }, {
          key: "hitTest",
          value: function hitTest(e, t) {
            if (this.suspended) return Object(_core_promiseUtils_js__WEBPACK_IMPORTED_MODULE_10__["resolve"])(null);
            var i = this.view.toMap(Object(_core_screenUtils_js__WEBPACK_IMPORTED_MODULE_14__["createScreenPoint"])(e, t));
            return Object(_core_promiseUtils_js__WEBPACK_IMPORTED_MODULE_10__["resolve"])(new _Graphic_js__WEBPACK_IMPORTED_MODULE_15__["default"]({
              attributes: {},
              geometry: i
            }));
          }
        }, {
          key: "update",
          value: function update(e) {
            this._fetchQueue.pause(), this._fetchQueue.state = e.state, this._tileStrategy.update(e), this._fetchQueue.resume();

            var _e$state = e.state,
                t = _e$state.extent,
                i = _e$state.resolution,
                s = _e$state.scale,
                r = this._tileInfoView.getClosestInfoForScale(s);

            if (this.layer.raster) {
              var a;

              if (!this.useProgressiveUpdate || this._needBlockCacheUpdate) {
                var _e7 = this._srcResolutions[r.level],
                    _s2 = t.toJSON ? t : _geometry_Extent_js__WEBPACK_IMPORTED_MODULE_12__["default"].fromJSON(t);

                Object(_layers_support_rasterDatasets_RawBlockCache_js__WEBPACK_IMPORTED_MODULE_21__["update"])(this._blockCacheRegistryUrl, this._blockCacheRegistryId, _s2, i, _e7, this.layer.raster.ioConfig.sampling);
              }

              this._needBlockCacheUpdate = !1, (null == (a = this._previousLOD) ? void 0 : a.level) !== r.level && (this._previousLOD = r, null != this._symbolizerParams && this._updateSymbolizerParams());
            }

            this.notifyChange("updating");
          }
        }, {
          key: "attach",
          value: function attach() {
            var _this11 = this;

            this.layer.increaseRasterJobHandlerUsage(), Object(_webgl_capabilities_js__WEBPACK_IMPORTED_MODULE_23__["default"])().supportsTextureFloat || (this.useWebGLForProcessing = !1), this.layer.raster && (this.layer.raster.ioConfig.allowPartialFill = !0), this._initializeTileInfo(), this._tileInfoView = new _tiling_TileInfoView_js__WEBPACK_IMPORTED_MODULE_24__["default"](this.tileInfo, this.fullExtent), this._fetchQueue = new _tiling_TileQueue_js__WEBPACK_IMPORTED_MODULE_25__["default"]({
              tileInfoView: this._tileInfoView,
              concurrency: 10,
              process: function process(e, t) {
                return _this11.fetchTile(e, t);
              }
            }), this._tileStrategy = new _tiling_TileStrategy_js__WEBPACK_IMPORTED_MODULE_26__["default"]({
              cachePolicy: this.useProgressiveUpdate ? "keep" : "purge",
              resampling: !1,
              acquireTile: function acquireTile(e) {
                return _this11.acquireTile(e);
              },
              releaseTile: function releaseTile(e) {
                return _this11.releaseTile(e);
              },
              cacheSize: this.useProgressiveUpdate ? 40 : 0,
              tileInfoView: this._tileInfoView
            }), this._bitmapView = new _engine_RasterTileContainer_js__WEBPACK_IMPORTED_MODULE_30__["RasterTileContainer"](this._tileInfoView), this.container.addChild(this._bitmapView), this.handles.add([Object(_core_watchUtils_js__WEBPACK_IMPORTED_MODULE_16__["watch"])(this, ["layer.bandIds", "layer.renderer"], function () {
              return _this11._redrawDebounced()["catch"](function (e) {
                Object(_core_promiseUtils_js__WEBPACK_IMPORTED_MODULE_10__["isAbortError"])(e) || L.error(e);
              });
            }), Object(_core_watchUtils_js__WEBPACK_IMPORTED_MODULE_16__["watch"])(this, ["layer.interpolation"], function (e, t) {
              "majority" !== e && "majority" !== t || !_this11._canUseMajorityInterpolationOnDataSource() ? _this11._redrawDebounced()["catch"](function (e) {
                Object(_core_promiseUtils_js__WEBPACK_IMPORTED_MODULE_10__["isAbortError"])(e) || L.error(e);
              }) : _this11.refreshDebounced();
            }), Object(_core_watchUtils_js__WEBPACK_IMPORTED_MODULE_16__["watch"])(this, ["layer.multidimensionalDefinition"], this.refreshDebounced)], "attach"), this._updateBlockCacheRegistry();
          }
        }, {
          key: "detach",
          value: function detach() {
            this.handles.remove("attach"), this.layer.decreaseRasterJobHandlerUsage(), this._tileStrategy.destroy(), this._fetchQueue.clear(), this.container.removeAllChildren(), this._fetchQueue = this._tileStrategy = this._tileInfoView = null, Object(_layers_support_rasterDatasets_RawBlockCache_js__WEBPACK_IMPORTED_MODULE_21__["unregister"])(this._blockCacheRegistryUrl, this._blockCacheRegistryId);
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
            var _this12 = this;

            !this.hasTilingEffects && this.useProgressiveUpdate || (this._abortController && this._abortController.abort(), this._abortController = Object(_core_promiseUtils_js__WEBPACK_IMPORTED_MODULE_10__["createAbortController"])(), 0 === this._fetchQueue.length && this._redrawImage(this._abortController.signal).then(function () {
              _this12._globalUpdateRequested = !1, _this12.requestUpdate();
            })), this.requestUpdate();
          }
        }, {
          key: "createFetchPopupFeaturesQueryGeometry",
          value: function createFetchPopupFeaturesQueryGeometry(e, t) {
            return Object(_support_drapedUtils_js__WEBPACK_IMPORTED_MODULE_28__["createQueryGeometry"])(e, t, this.view);
          }
        }, {
          key: "doRefresh",
          value: function () {
            var _doRefresh = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee3() {
              var _this13 = this;

              return regeneratorRuntime.wrap(function _callee3$(_context3) {
                while (1) {
                  switch (_context3.prev = _context3.next) {
                    case 0:
                      this.updateRequested || this.suspended || (this._updateSymbolizerParams(), this._updateBlockCacheRegistry(), this._fetchQueue.reset(), this._tileStrategy.tiles.forEach(function (e) {
                        return _this13._enqueueTileFetch(e);
                      }), this.notifyChange("updating"));

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
            return this._fetchQueue.length > 0 || this._globalUpdateRequested;
          }
        }, {
          key: "acquireTile",
          value: function acquireTile(e) {
            var _this$_tileInfoView$g, _this$_tileInfoView$g2, _this$_tileInfoView$t, _this$_tileInfoView$t2;

            var t = this._bitmapView.createTile(e),
                i = t.bitmap;

            return (_this$_tileInfoView$g = this._tileInfoView.getTileCoords(q, t.key), _this$_tileInfoView$g2 = _slicedToArray(_this$_tileInfoView$g, 2), i.x = _this$_tileInfoView$g2[0], i.y = _this$_tileInfoView$g2[1], _this$_tileInfoView$g), i.resolution = this._tileInfoView.getTileResolution(t.key), (_this$_tileInfoView$t = this._tileInfoView.tileInfo.size, _this$_tileInfoView$t2 = _slicedToArray(_this$_tileInfoView$t, 2), i.width = _this$_tileInfoView$t2[0], i.height = _this$_tileInfoView$t2[1], _this$_tileInfoView$t), this._enqueueTileFetch(t), this.requestUpdate(), this._needBlockCacheUpdate = !0, this._globalUpdateRequested = this.hasTilingEffects || !this.useProgressiveUpdate, t;
          }
        }, {
          key: "releaseTile",
          value: function releaseTile(e) {
            var _this14 = this;

            this._fetchQueue.abort(e.key.id), this._bitmapView.removeChild(e), e.once("detach", function () {
              e.destroy(), _this14.requestUpdate();
            }), this.requestUpdate();
          }
        }, {
          key: "fetchTile",
          value: function fetchTile(e, s) {
            var r = !Object(_core_maybe_js__WEBPACK_IMPORTED_MODULE_2__["isNone"])(s) && s.signal,
                a = this._canUseWebGLForProcessing(),
                l = {
              tileInfo: this.tileInfo,
              signal: Object(_core_maybe_js__WEBPACK_IMPORTED_MODULE_2__["unwrap"])(r),
              registryId: this._blockCacheRegistryId,
              requestRawData: a,
              srcResolution: this._srcResolutions[e.level],
              datumTransformation: this.datumTransformation,
              interpolation: a ? "nearest" : this.layer.interpolation
            };

            return this.layer.fetchTile(e.level, e.row, e.col, l);
          }
        }, {
          key: "_canUseWebGLForProcessing",
          value: function _canUseWebGLForProcessing() {
            return this.useWebGLForProcessing && this.layer.symbolizer.canRenderInWebGL && !("majority" === this.layer.interpolation && this._canUseMajorityInterpolationOnDataSource());
          }
        }, {
          key: "_initializeTileInfo",
          value: function _initializeTileInfo() {
            var e = this.view.spatialReference,
                t = new _geometry_Point_js__WEBPACK_IMPORTED_MODULE_11__["default"]({
              x: this.fullExtent.xmin,
              y: this.fullExtent.ymax,
              spatialReference: e
            }),
                _Object2 = Object(_layers_support_rasterFunctions_rasterProjectionHelper_js__WEBPACK_IMPORTED_MODULE_20__["computeProjectedScales"])(this.layer.rasterInfo, e),
                i = _Object2.scales,
                s = _Object2.srcResolutions,
                r = _layers_support_TileInfo_js__WEBPACK_IMPORTED_MODULE_18__["default"].create({
              spatialReference: e,
              size: 512,
              scales: i
            });

            (0 === r.origin.x || r.origin.x > t.x) && (r.origin = t), this._set("tileInfo", r), this._srcResolutions = null != s ? s : [];
          }
        }, {
          key: "_enqueueTileFetch",
          value: function () {
            var _enqueueTileFetch2 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee4(e, t) {
              var _this15 = this;

              var _t3, i, s, r, _i4, _s3, _t4;

              return regeneratorRuntime.wrap(function _callee4$(_context4) {
                while (1) {
                  switch (_context4.prev = _context4.next) {
                    case 0:
                      if (this._fetchQueue.has(e.key.id)) {
                        _context4.next = 41;
                        break;
                      }

                      _context4.prev = 1;
                      _context4.next = 4;
                      return this._fetchQueue.push(e.key);

                    case 4:
                      _t3 = _context4.sent;
                      i = this.layer.bandIds;
                      s = !this.useProgressiveUpdate || this.hasTilingEffects && !this._globalSymbolizerParams;

                      if (!(this._globalUpdateRequested && !this.moving && 0 === this._fetchQueue.length)) {
                        _context4.next = 18;
                        break;
                      }

                      s = !1;
                      _context4.prev = 9;
                      _context4.next = 12;
                      return this._redrawImage(this._abortController && this._abortController.signal);

                    case 12:
                      _context4.next = 17;
                      break;

                    case 14:
                      _context4.prev = 14;
                      _context4.t0 = _context4["catch"](9);
                      Object(_core_promiseUtils_js__WEBPACK_IMPORTED_MODULE_10__["isAbortError"])(_context4.t0) && L.error(_context4.t0);

                    case 17:
                      this._globalUpdateRequested = !1;

                    case 18:
                      r = this._canUseWebGLForProcessing();

                      if (!(r && !this.hasTilingEffects && null == this._symbolizerParams && this._updateSymbolizerParams(), _t3 && _t3.pixelBlock)) {
                        _context4.next = 32;
                        break;
                      }

                      if (!r) {
                        _context4.next = 24;
                        break;
                      }

                      e.bitmap.source = _t3.pixelBlock, e.bitmap.isRendereredSource = !1;
                      _context4.next = 29;
                      break;

                    case 24:
                      _i4 = {
                        extent: _t3.extent,
                        pixelBlock: _t3.pixelBlock
                      };
                      _context4.next = 27;
                      return this.layer.applyRenderer(_i4, this.hasTilingEffects && this._globalSymbolizerParams && "stretch" === this._globalSymbolizerParams.type ? this._globalSymbolizerParams : null);

                    case 27:
                      _s3 = _context4.sent;
                      e.bitmap.rawPixelData = _i4, e.bitmap.source = _s3, e.bitmap.isRendereredSource = !0;

                    case 29:
                      e.bitmap.symbolizerParameters = r ? this._globalSymbolizerParams || this._symbolizerParams : null, !e.bitmap.transformGrid && r ? e.bitmap.transformGrid = _t3.transformGrid : e.bitmap.transformGrid = null;
                      _context4.next = 34;
                      break;

                    case 32:
                      _t4 = this._createEmptyTilePixelBlock();
                      e.bitmap.source = _t4, e.bitmap.symbolizerParameters = r ? this._symbolizerParams : null, e.bitmap.transformGrid = null;

                    case 34:
                      e.bitmap.bandIds = i, e.bitmap.width = this._tileInfoView.tileInfo.size[0], e.bitmap.height = this._tileInfoView.tileInfo.size[1], e.bitmap.interpolation = this._getLayerInterpolation(), e.bitmap.suspended = s, e.bitmap.invalidateTexture(), e.once("attach", function () {
                        return _this15.requestUpdate();
                      }), this._bitmapView.addChild(e);
                      _context4.next = 40;
                      break;

                    case 37:
                      _context4.prev = 37;
                      _context4.t1 = _context4["catch"](1);
                      Object(_core_promiseUtils_js__WEBPACK_IMPORTED_MODULE_10__["isAbortError"])(_context4.t1) || L.error(_context4.t1);

                    case 40:
                      this.requestUpdate();

                    case 41:
                    case "end":
                      return _context4.stop();
                  }
                }
              }, _callee4, this, [[1, 37], [9, 14]]);
            }));

            function _enqueueTileFetch(_x4, _x5) {
              return _enqueueTileFetch2.apply(this, arguments);
            }

            return _enqueueTileFetch;
          }()
        }, {
          key: "_redrawImage",
          value: function () {
            var _redrawImage2 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee6(e) {
              var _this16 = this;

              var t, i;
              return regeneratorRuntime.wrap(function _callee6$(_context6) {
                while (1) {
                  switch (_context6.prev = _context6.next) {
                    case 0:
                      this.layer.updateRenderer();

                      if (!this.hasTilingEffects) {
                        _context6.next = 6;
                        break;
                      }

                      _context6.next = 4;
                      return this._updateGlobalSymbolizerParams(e);

                    case 4:
                      _context6.next = 7;
                      break;

                    case 6:
                      this._updateSymbolizerParams(), this._globalSymbolizerParams = null;

                    case 7:
                      t = this.layer.bandIds, i = this._bitmapView.children.map( /*#__PURE__*/function () {
                        var _ref2 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee5(e) {
                          var i;
                          return regeneratorRuntime.wrap(function _callee5$(_context5) {
                            while (1) {
                              switch (_context5.prev = _context5.next) {
                                case 0:
                                  i = _this16._canUseWebGLForProcessing();

                                  if (!i) {
                                    _context5.next = 5;
                                    break;
                                  }

                                  e.bitmap.isRendereredSource = !1;
                                  _context5.next = 9;
                                  break;

                                case 5:
                                  _context5.next = 7;
                                  return _this16.layer.applyRenderer(e.bitmap.rawPixelData, _this16.hasTilingEffects && _this16._globalSymbolizerParams && "stretch" === _this16._globalSymbolizerParams.type ? _this16._globalSymbolizerParams : null);

                                case 7:
                                  e.bitmap.source = _context5.sent;
                                  e.bitmap.isRendereredSource = !0;

                                case 9:
                                  e.bitmap.symbolizerParameters = i ? _this16._globalSymbolizerParams || _this16._symbolizerParams : null;
                                  e.bitmap.bandIds = t;
                                  e.bitmap.interpolation = _this16._getLayerInterpolation();
                                  e.bitmap.suspended = !1;

                                case 13:
                                case "end":
                                  return _context5.stop();
                              }
                            }
                          }, _callee5);
                        }));

                        return function (_x7) {
                          return _ref2.apply(this, arguments);
                        };
                      }());
                      _context6.next = 10;
                      return Object(_core_promiseUtils_js__WEBPACK_IMPORTED_MODULE_10__["eachAlways"])(i);

                    case 10:
                      this.container.requestRender();

                    case 11:
                    case "end":
                      return _context6.stop();
                  }
                }
              }, _callee6, this);
            }));

            function _redrawImage(_x6) {
              return _redrawImage2.apply(this, arguments);
            }

            return _redrawImage;
          }()
        }, {
          key: "_createEmptyTilePixelBlock",
          value: function _createEmptyTilePixelBlock() {
            if (!this._emptyTilePixelBlock) {
              var _e8 = this._tileInfoView.tileInfo.size[0],
                  t = this._tileInfoView.tileInfo.size[1];
              this._emptyTilePixelBlock = new _layers_support_PixelBlock_js__WEBPACK_IMPORTED_MODULE_17__["default"]({
                width: _e8,
                height: t,
                pixels: [new Uint8Array(_e8 * t)],
                mask: new Uint8Array(_e8 * t),
                pixelType: "u8"
              });
            }

            return this._emptyTilePixelBlock;
          }
        }, {
          key: "_updateGlobalSymbolizerParams",
          value: function () {
            var _updateGlobalSymbolizerParams2 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee7(e) {
              var t, i, s;
              return regeneratorRuntime.wrap(function _callee7$(_context7) {
                while (1) {
                  switch (_context7.prev = _context7.next) {
                    case 0:
                      t = {
                        srcResolution: this._srcResolutions[this._previousLOD.level],
                        registryId: this._blockCacheRegistryId,
                        signal: e
                      };
                      _context7.next = 3;
                      return this.layer.fetchPixels(this.view.extent, this.view.width, this.view.height, t);

                    case 3:
                      i = _context7.sent;

                      if (!(!i || !i.pixelBlock)) {
                        _context7.next = 6;
                        break;
                      }

                      return _context7.abrupt("return");

                    case 6:
                      s = this.layer.symbolizer.generateWebGLParameters({
                        pixelBlock: Object(_layers_support_rasterFunctions_pixelUtils_js__WEBPACK_IMPORTED_MODULE_19__["extractBands"])(i.pixelBlock, this.layer.bandIds),
                        isGCS: this.view.spatialReference.isGeographic,
                        resolution: {
                          x: this._previousLOD.resolution,
                          y: this._previousLOD.resolution
                        },
                        bandIds: this.layer.bandIds
                      });
                      !this._canUseWebGLForProcessing() && s && "stretch" === s.type && this.layer.renderer && "raster-stretch" === this.layer.renderer.type && (s.factor = s.factor.map(function (e) {
                        return 255 * e;
                      }), s.outMin = Math.round(255 * s.outMin), s.outMax = Math.round(255 * s.outMax)), this._globalSymbolizerParams = s;

                    case 8:
                    case "end":
                      return _context7.stop();
                  }
                }
              }, _callee7, this);
            }));

            function _updateGlobalSymbolizerParams(_x8) {
              return _updateGlobalSymbolizerParams2.apply(this, arguments);
            }

            return _updateGlobalSymbolizerParams;
          }()
        }, {
          key: "_updateSymbolizerParams",
          value: function _updateSymbolizerParams() {
            this._symbolizerParams = this.layer.symbolizer.generateWebGLParameters({
              pixelBlock: null,
              isGCS: this.view.spatialReference.isGeographic,
              resolution: {
                x: this._previousLOD.resolution,
                y: this._previousLOD.resolution
              },
              bandIds: this.layer.bandIds
            });
          }
        }, {
          key: "_updateBlockCacheRegistry",
          value: function _updateBlockCacheRegistry() {
            var _this$layer = this.layer,
                e = _this$layer.url,
                t = _this$layer.rasterInfo,
                i = _this$layer.multidimensionalDefinition,
                s = _this$layer.raster,
                r = null != t && t.multidimensionalInfo ? s.getSliceIndex(i) : null,
                a = Object(_layers_support_rasterDatasets_RawBlockCache_js__WEBPACK_IMPORTED_MODULE_21__["getRasterId"])(e, r);
            a !== this._blockCacheRegistryUrl && (null == this._blockCacheRegistryUrl && Object(_layers_support_rasterDatasets_RawBlockCache_js__WEBPACK_IMPORTED_MODULE_21__["unregister"])(this._blockCacheRegistryUrl, this._blockCacheRegistryId), this._blockCacheRegistryId = Object(_layers_support_rasterDatasets_RawBlockCache_js__WEBPACK_IMPORTED_MODULE_21__["register"])(a, this.layer.raster.rasterInfo), this._blockCacheRegistryUrl = a);
          }
        }, {
          key: "_canUseMajorityInterpolationOnDataSource",
          value: function _canUseMajorityInterpolationOnDataSource() {
            var _this$layer$rasterInf = this.layer.rasterInfo,
                e = _this$layer$rasterInf.bandCount,
                t = _this$layer$rasterInf.attributeTable,
                i = _this$layer$rasterInf.colormap,
                s = _this$layer$rasterInf.pixelType;
            return 1 === e && (null != t || null != i || "u8" === s || "s8" === s);
          }
        }, {
          key: "_getLayerInterpolation",
          value: function _getLayerInterpolation() {
            var e = this.layer.renderer.type;
            return "raster-colormap" === e || "unique-value" === e || "class-breaks" === e ? "nearest" : this.layer.interpolation;
          }
        }]);

        return D;
      }(Object(_layers_ImageryTileLayerView_js__WEBPACK_IMPORTED_MODULE_29__["ImageryTileLayerView"])(Object(_layers_RefreshableLayerView_js__WEBPACK_IMPORTED_MODULE_22__["RefreshableLayerView"])(Object(_LayerView2D_js__WEBPACK_IMPORTED_MODULE_31__["LayerView2DMixin"])(_layers_LayerView_js__WEBPACK_IMPORTED_MODULE_27__["default"]))));

      Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_5__["property"])()], D.prototype, "useProgressiveUpdate", null), D = Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_subclass_js__WEBPACK_IMPORTED_MODULE_6__["subclass"])("esri.views.2d.layers.ImageryTileLayerView2D")], D);
      var G = D;
      /* harmony default export */

      __webpack_exports__["default"] = G;
      /***/
    }
  }]);
})();
//# sourceMappingURL=layers-ImageryTileLayerView2D-js-es5.js.map