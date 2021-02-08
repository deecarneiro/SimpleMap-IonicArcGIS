(function () {
  function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }

  function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

  function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && Symbol.iterator in Object(iter)) return Array.from(iter); }

  function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }

  function _createForOfIteratorHelper(o, allowArrayLike) { var it; if (typeof Symbol === "undefined" || o[Symbol.iterator] == null) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e16) { throw _e16; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = o[Symbol.iterator](); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e17) { didErr = true; err = _e17; }, f: function f() { try { if (!normalCompletion && it["return"] != null) it["return"](); } finally { if (didErr) throw err; } } }; }

  function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

  function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

  function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

  function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

  function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

  function _possibleConstructorReturn(self, call) { if (call && (typeof call === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

  function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

  function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

  function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["default~VectorTileLayer-js~layers-VectorTileLayerView2D-js~views-2d-engine-vectorTiles-WorkerTileHandler-js"], {
    /***/
    "74kn":
    /*!****************************************************************************************!*\
      !*** ./node_modules/@arcgis/core/views/2d/engine/vectorTiles/style/StyleDefinition.js ***!
      \****************************************************************************************/

    /*! exports provided: StyleDefinition */

    /***/
    function kn(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "StyleDefinition", function () {
        return e;
      });
      /*
      All material copyright ESRI, All Rights Reserved, unless otherwise specified.
      See https://js.arcgis.com/4.18/esri/copyright.txt for details.
      */


      var e = function e() {
        _classCallCheck(this, e);
      };

      e.backgroundLayoutDefinition = {
        visibility: {
          type: "enum",
          values: ["visible", "none"],
          "default": "visible"
        }
      }, e.fillLayoutDefinition = {
        visibility: {
          type: "enum",
          values: ["visible", "none"],
          "default": "visible"
        }
      }, e.lineLayoutDefinition = {
        visibility: {
          type: "enum",
          values: ["visible", "none"],
          "default": "visible"
        },
        "line-cap": {
          type: "enum",
          values: ["butt", "round", "square"],
          "default": "butt"
        },
        "line-join": {
          type: "enum",
          values: ["bevel", "round", "miter"],
          "default": "miter"
        },
        "line-miter-limit": {
          type: "number",
          "default": 2
        },
        "line-round-limit": {
          type: "number",
          "default": 1.05
        }
      }, e.symbolLayoutDefinition = {
        visibility: {
          type: "enum",
          values: ["visible", "none"],
          "default": "visible"
        },
        "symbol-avoid-edges": {
          type: "boolean",
          "default": !1
        },
        "symbol-placement": {
          type: "enum",
          values: ["point", "line", "line-center"],
          "default": "point"
        },
        "symbol-sort-key": {
          type: "number",
          "default": -1
        },
        "symbol-spacing": {
          type: "number",
          minimum: 1,
          "default": 250
        },
        "icon-allow-overlap": {
          type: "boolean",
          "default": !1
        },
        "icon-anchor": {
          type: "enum",
          values: ["center", "left", "right", "top", "bottom", "top-left", "top-right", "bottom-left", "bottom-right"],
          "default": "center"
        },
        "icon-ignore-placement": {
          type: "boolean",
          "default": !1
        },
        "icon-image": {
          type: "string"
        },
        "icon-keep-upright": {
          type: "boolean",
          "default": !1
        },
        "icon-offset": {
          type: "array",
          value: "number",
          length: 2,
          "default": [0, 0]
        },
        "icon-optional": {
          type: "boolean",
          "default": !1
        },
        "icon-padding": {
          type: "number",
          minimum: 0,
          "default": 2
        },
        "icon-rotate": {
          type: "number",
          "default": 0
        },
        "icon-rotation-alignment": {
          type: "enum",
          values: ["map", "viewport", "auto"],
          "default": "auto"
        },
        "icon-size": {
          type: "number",
          minimum: 0,
          "default": 1
        },
        "text-allow-overlap": {
          type: "boolean",
          "default": !1
        },
        "text-anchor": {
          type: "enum",
          values: ["center", "left", "right", "top", "bottom", "top-left", "top-right", "bottom-left", "bottom-right"],
          "default": "center"
        },
        "text-field": {
          type: "string"
        },
        "text-font": {
          type: "array",
          value: "string",
          "default": ["Open Sans Regular", "Arial Unicode MS Regular"]
        },
        "text-ignore-placement": {
          type: "boolean",
          "default": !1
        },
        "text-justify": {
          type: "enum",
          values: ["auto", "left", "center", "right"],
          "default": "center"
        },
        "text-keep-upright": {
          type: "boolean",
          "default": !0
        },
        "text-letter-spacing": {
          type: "number",
          "default": 0
        },
        "text-line-height": {
          type: "number",
          "default": 1.2
        },
        "text-max-angle": {
          type: "number",
          minimum: 0,
          "default": 45
        },
        "text-max-width": {
          type: "number",
          minimum: 0,
          "default": 10
        },
        "text-offset": {
          type: "array",
          value: "number",
          length: 2,
          "default": [0, 0]
        },
        "text-optional": {
          type: "boolean",
          "default": !1
        },
        "text-padding": {
          type: "number",
          minimum: 0,
          "default": 2
        },
        "text-rotate": {
          type: "number",
          "default": 0
        },
        "text-rotation-alignment": {
          type: "enum",
          values: ["map", "viewport", "auto"],
          "default": "auto"
        },
        "text-size": {
          type: "number",
          minimum: 0,
          "default": 16
        },
        "text-transform": {
          type: "enum",
          values: ["none", "uppercase", "lowercase"],
          "default": "none"
        },
        "text-writing-mode": {
          type: "array",
          value: "enum",
          values: ["horizontal", "vertical"],
          "default": ["horizontal"]
        }
      }, e.circleLayoutDefinition = {
        visibility: {
          type: "enum",
          values: ["visible", "none"],
          "default": "visible"
        }
      }, e.backgroundPaintDefinition = {
        "background-color": {
          type: "color",
          "default": [0, 0, 0, 1]
        },
        "background-opacity": {
          type: "number",
          minimum: 0,
          maximum: 1,
          "default": 1
        },
        "background-pattern": {
          type: "string"
        }
      }, e.fillPaintDefinition = {
        "fill-antialias": {
          type: "boolean",
          "default": !0
        },
        "fill-color": {
          type: "color",
          "default": [0, 0, 0, 1]
        },
        "fill-opacity": {
          type: "number",
          minimum: 0,
          maximum: 1,
          "default": 1
        },
        "fill-outline-color": {
          type: "color",
          "default": [0, 0, 0, 0]
        },
        "fill-pattern": {
          type: "string"
        },
        "fill-translate": {
          type: "array",
          value: "number",
          length: 2,
          "default": [0, 0]
        },
        "fill-translate-anchor": {
          type: "enum",
          values: ["map", "viewport"],
          "default": "map"
        }
      }, e.linePaintDefinition = {
        "line-blur": {
          type: "number",
          minimum: 0,
          "default": 0
        },
        "line-color": {
          type: "color",
          "default": [0, 0, 0, 1]
        },
        "line-dasharray": {
          type: "array",
          value: "number",
          "default": []
        },
        "line-gap-width": {
          type: "number",
          minimum: 0,
          "default": 0
        },
        "line-offset": {
          type: "number",
          "default": 0
        },
        "line-opacity": {
          type: "number",
          minimum: 0,
          maximum: 1,
          "default": 1
        },
        "line-pattern": {
          type: "string"
        },
        "line-translate": {
          type: "array",
          value: "number",
          length: 2,
          "default": [0, 0]
        },
        "line-translate-anchor": {
          type: "enum",
          values: ["map", "viewport"],
          "default": "map"
        },
        "line-width": {
          type: "number",
          minimum: 0,
          "default": 1
        }
      }, e.symbolPaintDefinition = {
        "icon-color": {
          type: "color",
          "default": [0, 0, 0, 1]
        },
        "icon-halo-blur": {
          type: "number",
          minimum: 0,
          "default": 0
        },
        "icon-halo-color": {
          type: "color",
          "default": [0, 0, 0, 0]
        },
        "icon-halo-width": {
          type: "number",
          minimum: 0,
          "default": 0
        },
        "icon-opacity": {
          type: "number",
          minimum: 0,
          maximum: 1,
          "default": 1
        },
        "icon-translate": {
          type: "array",
          value: "number",
          length: 2,
          "default": [0, 0]
        },
        "icon-translate-anchor": {
          type: "enum",
          values: ["map", "viewport"],
          "default": "map"
        },
        "text-color": {
          type: "color",
          "default": [0, 0, 0, 1]
        },
        "text-halo-blur": {
          type: "number",
          minimum: 0,
          "default": 0
        },
        "text-halo-color": {
          type: "color",
          "default": [0, 0, 0, 0]
        },
        "text-halo-width": {
          type: "number",
          minimum: 0,
          "default": 0
        },
        "text-opacity": {
          type: "number",
          minimum: 0,
          maximum: 1,
          "default": 1
        },
        "text-translate": {
          type: "array",
          value: "number",
          length: 2,
          "default": [0, 0]
        },
        "text-translate-anchor": {
          type: "enum",
          values: ["map", "viewport"],
          "default": "map"
        }
      }, e.rasterPaintDefinition = {
        "raster-opacity": {
          type: "number",
          minimum: 0,
          maximum: 1,
          "default": 1
        },
        "raster-hue-rotate": {
          type: "number",
          "default": 0
        },
        "raster-brightness-min": {
          type: "number",
          minimum: 0,
          maximum: 1,
          "default": 0
        },
        "raster-brightness-max": {
          type: "number",
          minimum: 0,
          maximum: 1,
          "default": 1
        },
        "raster-saturation": {
          type: "number",
          minimum: -1,
          maximum: 1,
          "default": 0
        },
        "raster-contrast": {
          type: "number",
          minimum: -1,
          maximum: 1,
          "default": 0
        },
        "raster-fade-duration": {
          type: "number",
          minimum: 0,
          "default": 300
        }
      }, e.circlePaintDefinition = {
        "circle-blur": {
          type: "number",
          minimum: 0,
          "default": 0
        },
        "circle-color": {
          type: "color",
          "default": [0, 0, 0, 1]
        },
        "circle-opacity": {
          type: "number",
          minimum: 0,
          maximum: 1,
          "default": 1
        },
        "circle-radius": {
          type: "number",
          minimum: 0,
          "default": 5
        },
        "circle-stroke-color": {
          type: "color",
          "default": [0, 0, 0, 1]
        },
        "circle-stroke-opacity": {
          type: "number",
          minimum: 0,
          maximum: 1,
          "default": 1
        },
        "circle-stroke-width": {
          type: "number",
          minimum: 0,
          "default": 0
        },
        "circle-translate": {
          type: "array",
          value: "number",
          length: 2,
          "default": [0, 0]
        },
        "circle-translate-anchor": {
          type: "enum",
          values: ["map", "viewport"],
          "default": "map"
        }
      };
      /***/
    },

    /***/
    "Ip4x":
    /*!***********************************************************************************!*\
      !*** ./node_modules/@arcgis/core/views/2d/engine/vectorTiles/style/StyleLayer.js ***!
      \***********************************************************************************/

    /*! exports provided: BackgroundStyleLayer, CircleStyleLayer, FillStyleLayer, IconLayout, LineStyleLayer, StyleLayer, SymbolStyleLayer, TextLayout */

    /***/
    function Ip4x(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "BackgroundStyleLayer", function () {
        return o;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "CircleStyleLayer", function () {
        return l;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "FillStyleLayer", function () {
        return s;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "IconLayout", function () {
        return D;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "LineStyleLayer", function () {
        return r;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "StyleLayer", function () {
        return n;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "SymbolStyleLayer", function () {
        return h;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "TextLayout", function () {
        return u;
      });
      /* harmony import */


      var _Filter_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ./Filter.js */
      "ZJ8A");
      /* harmony import */


      var _StyleDefinition_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./StyleDefinition.js */
      "74kn");
      /* harmony import */


      var _StyleProperty_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./StyleProperty.js */
      "O1zq");
      /* harmony import */


      var _webgl_definitions_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ../../webgl/definitions.js */
      "jIHu");
      /*
      All material copyright ESRI, All Rights Reserved, unless otherwise specified.
      See https://js.arcgis.com/4.18/esri/copyright.txt for details.
      */


      var n = /*#__PURE__*/function () {
        function n(t, e, a, _n) {
          _classCallCheck(this, n);

          switch (this.type = t, this.typeName = e.type, this.id = e.id, this.source = e.source, this.sourceLayer = e["source-layer"], this.minzoom = e.minzoom, this.maxzoom = e.maxzoom, this.filter = e.filter, this.layout = e.layout, this.paint = e.paint, this.z = a, this.uid = _n, t) {
            case 0:
              this._layoutDefinition = _StyleDefinition_js__WEBPACK_IMPORTED_MODULE_1__["StyleDefinition"].backgroundLayoutDefinition, this._paintDefinition = _StyleDefinition_js__WEBPACK_IMPORTED_MODULE_1__["StyleDefinition"].backgroundPaintDefinition;
              break;

            case 1:
              this._layoutDefinition = _StyleDefinition_js__WEBPACK_IMPORTED_MODULE_1__["StyleDefinition"].fillLayoutDefinition, this._paintDefinition = _StyleDefinition_js__WEBPACK_IMPORTED_MODULE_1__["StyleDefinition"].fillPaintDefinition;
              break;

            case 2:
              this._layoutDefinition = _StyleDefinition_js__WEBPACK_IMPORTED_MODULE_1__["StyleDefinition"].lineLayoutDefinition, this._paintDefinition = _StyleDefinition_js__WEBPACK_IMPORTED_MODULE_1__["StyleDefinition"].linePaintDefinition;
              break;

            case 3:
              this._layoutDefinition = _StyleDefinition_js__WEBPACK_IMPORTED_MODULE_1__["StyleDefinition"].symbolLayoutDefinition, this._paintDefinition = _StyleDefinition_js__WEBPACK_IMPORTED_MODULE_1__["StyleDefinition"].symbolPaintDefinition;
              break;

            case 4:
              this._layoutDefinition = _StyleDefinition_js__WEBPACK_IMPORTED_MODULE_1__["StyleDefinition"].circleLayoutDefinition, this._paintDefinition = _StyleDefinition_js__WEBPACK_IMPORTED_MODULE_1__["StyleDefinition"].circlePaintDefinition;
          }

          this._layoutProperties = this._parseLayout(this.layout), this._paintProperties = this._parsePaint(this.paint);
        }

        _createClass(n, [{
          key: "getFeatureFilter",
          value: function getFeatureFilter() {
            return void 0 !== this._featureFilter ? this._featureFilter : this._featureFilter = _Filter_js__WEBPACK_IMPORTED_MODULE_0__["default"].createFilter(this.filter);
          }
        }, {
          key: "getLayoutProperty",
          value: function getLayoutProperty(t) {
            return this._layoutProperties[t];
          }
        }, {
          key: "getPaintProperty",
          value: function getPaintProperty(t) {
            return this._paintProperties[t];
          }
        }, {
          key: "getLayoutValue",
          value: function getLayoutValue(t, i, e) {
            var a;
            var _n2 = this._layoutProperties[t];
            _n2 && (a = _n2.getValue(i, e));
            var o = this._layoutDefinition[t];
            return void 0 === a && (a = o["default"]), "enum" === o.type ? a = o.values.indexOf(a) : "array" === o.type && "enum" === o.value && (a = a.map(function (t) {
              return o.values.indexOf(t);
            })), a;
          }
        }, {
          key: "getPaintValue",
          value: function getPaintValue(t, i, e) {
            var a;
            var _n3 = this._paintProperties[t];
            _n3 && (a = _n3.getValue(i, e));
            var o = this._paintDefinition[t];
            return void 0 === a && (a = o["default"]), "enum" === o.type && (a = o.values.indexOf(a)), a;
          }
        }, {
          key: "isPainterDataDriven",
          value: function isPainterDataDriven() {
            var t = this._paintProperties;
            if (t) for (var i in t) {
              if (t[i].isDataDriven) return !0;
            }
            return !1;
          }
        }, {
          key: "_parseLayout",
          value: function _parseLayout(t) {
            var i = {};

            for (var a in t) {
              var _n6 = this._layoutDefinition[a];
              _n6 && (i[a] = new _StyleProperty_js__WEBPACK_IMPORTED_MODULE_2__["default"](_n6, t[a]));
            }

            return i;
          }
        }, {
          key: "_parsePaint",
          value: function _parsePaint(t) {
            var i = {};

            for (var a in t) {
              var _n7 = this._paintDefinition[a];
              _n7 && (i[a] = new _StyleProperty_js__WEBPACK_IMPORTED_MODULE_2__["default"](_n7, t[a]));
            }

            return i;
          }
        }]);

        return n;
      }();

      var o = /*#__PURE__*/function (_n8) {
        _inherits(o, _n8);

        var _super = _createSuper(o);

        function o(t, i, e, a) {
          _classCallCheck(this, o);

          return _super.call(this, t, i, e, a);
        }

        return o;
      }(n);

      var s = /*#__PURE__*/function (_n9) {
        _inherits(s, _n9);

        var _super2 = _createSuper(s);

        function s(t, i, e, a) {
          var _this;

          _classCallCheck(this, s);

          _this = _super2.call(this, t, i, e, a);

          var n = _this.getPaintProperty("fill-color");

          _this.hasDataDrivenColor = !!n && n.isDataDriven;

          var o = _this.getPaintProperty("fill-opacity");

          _this.hasDataDrivenOpacity = !!o && o.isDataDriven, _this.hasDataDrivenFill = _this.hasDataDrivenColor || _this.hasDataDrivenOpacity;

          var _s = _this.getPaintProperty("fill-outline-color");

          _this.outlineUsesFillColor = !_s, _this.hasDataDrivenOutlineColor = !!_s && _s.isDataDriven, _this.hasDataDrivenOutline = (_s ? _this.hasDataDrivenOutlineColor : _this.hasDataDrivenColor) || _this.hasDataDrivenOpacity;
          return _this;
        }

        return s;
      }(n);

      var r = /*#__PURE__*/function (_n10) {
        _inherits(r, _n10);

        var _super3 = _createSuper(r);

        function r(t, e, n, o) {
          var _this2;

          _classCallCheck(this, r);

          _this2 = _super3.call(this, t, e, n, o);

          var s = _this2.getPaintProperty("line-color");

          _this2.hasDataDrivenColor = !!s && s.isDataDriven;

          var _r = _this2.getPaintProperty("line-opacity");

          _this2.hasDataDrivenOpacity = !!_r && _r.isDataDriven;

          var h = _this2.getPaintProperty("line-width");

          _this2.hasDataDrivenWidth = !!h && h.isDataDriven, _this2.hasDataDrivenLine = _this2.hasDataDrivenColor || _this2.hasDataDrivenOpacity || _this2.hasDataDrivenWidth;
          var l = e.paint["line-width"];
          l || (l = _StyleDefinition_js__WEBPACK_IMPORTED_MODULE_1__["StyleDefinition"].linePaintDefinition["line-width"]["default"]), _this2.isThinLine = !_this2.hasDataDrivenWidth && "number" == typeof l && l < _webgl_definitions_js__WEBPACK_IMPORTED_MODULE_3__["THIN_LINE_THRESHOLD"];
          return _this2;
        }

        return r;
      }(n);

      var h = /*#__PURE__*/function (_n11) {
        _inherits(h, _n11);

        var _super4 = _createSuper(h);

        function h(t, i, e, a) {
          var _this3;

          _classCallCheck(this, h);

          _this3 = _super4.call(this, t, i, e, a);

          var n = _this3.getPaintProperty("icon-color");

          _this3.hasDataDrivenIconColor = !!n && n.isDataDriven;

          var o = _this3.getPaintProperty("icon-opacity");

          _this3.hasDataDrivenIconOpacity = !!o && o.isDataDriven;

          var s = _this3.getLayoutProperty("icon-size");

          _this3.hasDataDrivenIconSize = !!s && s.isDataDriven, _this3.hasDataDrivenIcon = _this3.hasDataDrivenIconColor || _this3.hasDataDrivenIconOpacity || _this3.hasDataDrivenIconSize;

          var r = _this3.getPaintProperty("text-color");

          _this3.hasDataDrivenTextColor = !!r && r.isDataDriven;

          var _h = _this3.getPaintProperty("text-opacity");

          _this3.hasDataDrivenTextOpacity = !!_h && _h.isDataDriven;

          var l = _this3.getLayoutProperty("text-size");

          _this3.hasDataDrivenTextSize = !!l && l.isDataDriven, _this3.hasDataDrivenText = _this3.hasDataDrivenTextColor || _this3.hasDataDrivenTextOpacity || _this3.hasDataDrivenTextSize;
          return _this3;
        }

        return h;
      }(n);

      var l = /*#__PURE__*/function (_n12) {
        _inherits(l, _n12);

        var _super5 = _createSuper(l);

        function l(t, i, e, a) {
          var _this4;

          _classCallCheck(this, l);

          _this4 = _super5.call(this, t, i, e, a);

          var n = _this4.getPaintProperty("circle-radius");

          _this4.hasDataDrivenRadius = !!n && n.isDataDriven;

          var o = _this4.getPaintProperty("circle-color");

          _this4.hasDataDrivenColor = !!o && o.isDataDriven;

          var s = _this4.getPaintProperty("circle-opacity");

          _this4.hasDataDrivenOpacity = !!s && s.isDataDriven;

          var r = _this4.getPaintProperty("circle-stroke-width");

          _this4.hasDataDrivenStrokeWidth = !!r && r.isDataDriven;

          var h = _this4.getPaintProperty("circle-stroke-color");

          _this4.hasDataDrivenStrokeColor = !!h && h.isDataDriven;

          var _l = _this4.getPaintProperty("circle-stroke-opacity");

          _this4.hasDataDrivenStrokeOpacity = !!_l && _l.isDataDriven;

          var D = _this4.getPaintProperty("circle-blur");

          _this4.hasDataDrivenBlur = !!D && D.isDataDriven;
          return _this4;
        }

        return l;
      }(n);

      var D = function D(t, i, e, a) {
        _classCallCheck(this, D);

        this.allowOverlap = t.getLayoutValue("icon-allow-overlap", i, a), this.anchor = t.getLayoutValue("icon-anchor", i, a), this.ignorePlacement = t.getLayoutValue("icon-ignore-placement", i, a), this.keepUpright = t.getLayoutValue("icon-keep-upright", i, a), this.offset = t.getLayoutValue("icon-offset", i, a), this.optional = t.getLayoutValue("icon-optional", i, a), this.padding = t.getLayoutValue("icon-padding", i, a), this.rotate = t.getLayoutValue("icon-rotate", i, a), this.rotationAlignment = t.getLayoutValue("icon-rotation-alignment", i, a), this.size = t.getLayoutValue("icon-size", i, a), 2 === this.rotationAlignment && (this.rotationAlignment = e ? 0 : 1);
      };

      var u = function u(t, i, e, a) {
        _classCallCheck(this, u);

        this.allowOverlap = t.getLayoutValue("text-allow-overlap", i, a), this.anchor = t.getLayoutValue("text-anchor", i, a), this.fontArray = t.getLayoutValue("text-font", i, a), this.ignorePlacement = t.getLayoutValue("text-ignore-placement", i, a), this.justify = t.getLayoutValue("text-justify", i, a), this.keepUpright = t.getLayoutValue("text-keep-upright", i, a), this.letterSpacing = t.getLayoutValue("text-letter-spacing", i, a), this.lineHeight = t.getLayoutValue("text-line-height", i, a), this.maxAngle = t.getLayoutValue("text-max-angle", i, a), this.maxWidth = t.getLayoutValue("text-max-width", i, a), this.offset = t.getLayoutValue("text-offset", i, a), this.optional = t.getLayoutValue("text-optional", i, a), this.padding = t.getLayoutValue("text-padding", i, a), this.rotate = t.getLayoutValue("text-rotate", i, a), this.rotationAlignment = t.getLayoutValue("text-rotation-alignment", i, a), this.size = t.getLayoutValue("text-size", i, a), this.transform = t.getLayoutValue("text-transform", i, a), this.writingMode = t.getLayoutValue("text-writing-mode", i, a), 2 === this.rotationAlignment && (this.rotationAlignment = e ? 0 : 1);
      };
      /***/

    },

    /***/
    "O1zq":
    /*!**************************************************************************************!*\
      !*** ./node_modules/@arcgis/core/views/2d/engine/vectorTiles/style/StyleProperty.js ***!
      \**************************************************************************************/

    /*! exports provided: default */

    /***/
    function O1zq(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony import */


      var _Color_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ../../../../../Color.js */
      "nvBr");
      /* harmony import */


      var _chunks_expression_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ../../../../../chunks/expression.js */
      "p+i1");
      /* harmony import */


      var _GeometryUtils_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ../GeometryUtils.js */
      "OxmL");
      /*
      All material copyright ESRI, All Rights Reserved, unless otherwise specified.
      See https://js.arcgis.com/4.18/esri/copyright.txt for details.
      */


      var a = /*#__PURE__*/function () {
        function a(t, i) {
          _classCallCheck(this, a);

          var l;

          switch (this.isDataDriven = !1, t.type) {
            case "number":
              l = !0;
              break;

            case "color":
              l = !0, i = a._parseColor(i);
              break;

            case "array":
              l = "number" === t.value;
              break;

            default:
              l = !1;
          }

          if (null == i && (i = t["default"]), Array.isArray(i) && i.length > 0 && _chunks_expression_js__WEBPACK_IMPORTED_MODULE_1__["o"][i[0]]) {
            try {
              var e = Object(_chunks_expression_js__WEBPACK_IMPORTED_MODULE_1__["c"])(i);
              this.getValue = this._buildExpression(e, t), this.isDataDriven = !0;
            } catch (e) {
              console.log(e.message), this.getValue = this._buildSimple(t["default"]);
            }

            return;
          }

          l && "interval" === i.type && (l = !1);
          var s = i && i.stops && i.stops.length > 0;

          if (s) {
            var _iterator = _createForOfIteratorHelper(i.stops),
                _step;

            try {
              for (_iterator.s(); !(_step = _iterator.n()).done;) {
                var _e = _step.value;
                _e[1] = this._validate(_e[1], t);
              }
            } catch (err) {
              _iterator.e(err);
            } finally {
              _iterator.f();
            }
          }

          if (this.isDataDriven = !!i && !!i.property, this.isDataDriven) {
            if (void 0 !== i["default"] && (i["default"] = this._validate(i["default"], t)), s) switch (i.type) {
              case "identity":
                this.getValue = this._buildIdentity(i, t);
                break;

              case "categorical":
                this.getValue = this._buildCategorical(i, t);
                break;

              default:
                this.getValue = l ? this._buildInterpolate(i, t) : this._buildInterval(i, t);
            } else this.getValue = this._buildIdentity(i, t);
          } else s ? this.getValue = l ? this._buildZoomInterpolate(i) : this._buildZoomInterval(i) : (i = this._validate(i, t), this.getValue = this._buildSimple(i));
        }

        _createClass(a, [{
          key: "_validate",
          value: function _validate(t, e) {
            if ("number" === e.type) {
              if (t < e.minimum) return e.minimum;
              if (t > e.maximum) return e.maximum;
            }

            return t;
          }
        }, {
          key: "_buildSimple",
          value: function _buildSimple(t) {
            return function () {
              return t;
            };
          }
        }, {
          key: "_buildExpression",
          value: function _buildExpression(t, e) {
            var _this5 = this;

            return function (r, i) {
              try {
                var _l2 = t.evaluate(i, r);

                return "color" === e.type && (_l2 = a._parseColor(_l2)), void 0 === _l2 ? e["default"] : _this5._validate(_l2, e);
              } catch (t) {
                return console.log(t.message), e["default"];
              }
            };
          }
        }, {
          key: "_buildIdentity",
          value: function _buildIdentity(t, e) {
            var _this6 = this;

            return function (r, i) {
              var l;
              return i && (l = i.values[t.property], "color" === e.type && (l = a._parseColor(l))), void 0 === l && (l = t["default"]), void 0 !== l ? _this6._validate(l, e) : e["default"];
            };
          }
        }, {
          key: "_buildCategorical",
          value: function _buildCategorical(t, e) {
            var _this7 = this;

            return function (r, i) {
              var _a;

              return i && (_a = i.values[t.property]), _a = _this7._categorical(_a, t.stops), void 0 !== _a ? _a : void 0 !== t["default"] ? t["default"] : e["default"];
            };
          }
        }, {
          key: "_buildInterval",
          value: function _buildInterval(t, e) {
            var _this8 = this;

            return function (r, i) {
              var _a2;

              return i && (_a2 = i.values[t.property]), "number" == typeof _a2 ? _this8._interval(_a2, t.stops) : void 0 !== t["default"] ? t["default"] : e["default"];
            };
          }
        }, {
          key: "_buildInterpolate",
          value: function _buildInterpolate(t, e) {
            var _this9 = this;

            return function (r, i) {
              var _a3;

              return i && (_a3 = i.values[t.property]), "number" == typeof _a3 ? _this9._interpolate(_a3, t.stops, t.base || 1) : void 0 !== t["default"] ? t["default"] : e["default"];
            };
          }
        }, {
          key: "_buildZoomInterpolate",
          value: function _buildZoomInterpolate(t) {
            var _this10 = this;

            return function (e) {
              return _this10._interpolate(e, t.stops, t.base || 1);
            };
          }
        }, {
          key: "_buildZoomInterval",
          value: function _buildZoomInterval(t) {
            var _this11 = this;

            return function (e) {
              return _this11._interval(e, t.stops);
            };
          }
        }, {
          key: "_categorical",
          value: function _categorical(t, e) {
            var r = e.length;

            for (var i = 0; i < r; i++) {
              if (e[i][0] === t) return e[i][1];
            }
          }
        }, {
          key: "_interval",
          value: function _interval(t, e) {
            var r = e.length;
            var i = 0;

            for (var _a7 = 0; _a7 < r && e[_a7][0] <= t; _a7++) {
              i = _a7;
            }

            return e[i][1];
          }
        }, {
          key: "_interpolate",
          value: function _interpolate(t, e, r) {
            var _a5, l;

            var s = e.length;

            for (var _r2 = 0; _r2 < s; _r2++) {
              var i = e[_r2];

              if (!(i[0] <= t)) {
                l = i;
                break;
              }

              _a5 = i;
            }

            if (_a5 && l) {
              var _e2 = l[0] - _a5[0],
                  _s2 = t - _a5[0],
                  o = 1 === r ? _s2 / _e2 : (Math.pow(r, _s2) - 1) / (Math.pow(r, _e2) - 1);

              if (Array.isArray(_a5[1])) {
                var _t = _a5[1],
                    _e3 = l[1],
                    _r3 = [];

                for (var _a8 = 0; _a8 < _t.length; _a8++) {
                  _r3.push(Object(_GeometryUtils_js__WEBPACK_IMPORTED_MODULE_2__["interpolate"])(_t[_a8], _e3[_a8], o));
                }

                return _r3;
              }

              return Object(_GeometryUtils_js__WEBPACK_IMPORTED_MODULE_2__["interpolate"])(_a5[1], l[1], o);
            }

            return _a5 ? _a5[1] : l ? l[1] : void 0;
          }
        }], [{
          key: "_isEmpty",
          value: function _isEmpty(t) {
            for (var e in t) {
              if (t.hasOwnProperty(e)) return !1;
            }

            return !0;
          }
        }, {
          key: "_parseColor",
          value: function _parseColor(e) {
            if (Array.isArray(e)) return e;

            if ("string" == typeof e) {
              var r = new _Color_js__WEBPACK_IMPORTED_MODULE_0__["default"](e);
              return this._isEmpty(r) ? void 0 : _Color_js__WEBPACK_IMPORTED_MODULE_0__["default"].toUnitRGBA(r);
            }

            return e && e["default"] && (e["default"] = a._parseColor(e["default"])), e && e.stops && (e.stops = e.stops.map(function (t) {
              return [t[0], a._parseColor(t[1])];
            })), e;
          }
        }]);

        return a;
      }();
      /* harmony default export */


      __webpack_exports__["default"] = a;
      /***/
    },

    /***/
    "OxmL":
    /*!********************************************************************************!*\
      !*** ./node_modules/@arcgis/core/views/2d/engine/vectorTiles/GeometryUtils.js ***!
      \********************************************************************************/

    /*! exports provided: C_256_TO_RAD, C_2PI, C_DEG_TO_256, C_DEG_TO_RAD, C_INFINITY, C_PI, C_PI_BY_2, C_RAD_TO_256, C_SQRT2, C_SQRT2_INV, between, degToByte, interpolate, log2, positiveMod, radToByte, sqr */

    /***/
    function OxmL(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "C_256_TO_RAD", function () {
        return e;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "C_2PI", function () {
        return r;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "C_DEG_TO_256", function () {
        return c;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "C_DEG_TO_RAD", function () {
        return f;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "C_INFINITY", function () {
        return n;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "C_PI", function () {
        return t;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "C_PI_BY_2", function () {
        return u;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "C_RAD_TO_256", function () {
        return o;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "C_SQRT2", function () {
        return i;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "C_SQRT2_INV", function () {
        return I;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "between", function () {
        return g;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "degToByte", function () {
        return M;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "interpolate", function () {
        return b;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "log2", function () {
        return P;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "positiveMod", function () {
        return a;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "radToByte", function () {
        return h;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "sqr", function () {
        return T;
      });
      /*
      All material copyright ESRI, All Rights Reserved, unless otherwise specified.
      See https://js.arcgis.com/4.18/esri/copyright.txt for details.
      */


      var n = Number.POSITIVE_INFINITY,
          t = Math.PI,
          r = 2 * t,
          u = t / 2,
          o = 128 / t,
          e = t / 128,
          c = 256 / 360,
          f = t / 180,
          i = 1.414213562,
          I = 1 / 1.414213562,
          N = 1 / Math.LN2;

      function a(n, t) {
        return (n %= t) >= 0 ? n : n + t;
      }

      function h(n) {
        return a(n * o, 256);
      }

      function M(n) {
        return a(.7111111111111111 * n, 256);
      }

      function P(n) {
        return Math.log(n) * N;
      }

      function T(n) {
        return n * n;
      }

      function b(n, t, r) {
        return n * (1 - r) + t * r;
      }

      function g(n, t, r) {
        return n >= t && n <= r || n >= r && n <= t;
      }
      /***/

    },

    /***/
    "ZJ8A":
    /*!*******************************************************************************!*\
      !*** ./node_modules/@arcgis/core/views/2d/engine/vectorTiles/style/Filter.js ***!
      \*******************************************************************************/

    /*! exports provided: default */

    /***/
    function ZJ8A(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony import */


      var _chunks_expression_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ../../../../../chunks/expression.js */
      "p+i1");
      /*
      All material copyright ESRI, All Rights Reserved, unless otherwise specified.
      See https://js.arcgis.com/4.18/esri/copyright.txt for details.
      */


      var r = /*#__PURE__*/function () {
        function r(e) {
          _classCallCheck(this, r);

          this._expression = e;
        }

        _createClass(r, [{
          key: "filter",
          value: function filter(e, _r4) {
            if (!this._expression) return !0;

            try {
              return this._expression.evaluate(e, _r4);
            } catch (e) {
              return console.log(e.message), !0;
            }
          }
        }], [{
          key: "createFilter",
          value: function createFilter(t) {
            if (!t) return null;
            this.isLegacyFilter(t) && (t = this.convertLegacyFilter(t));

            try {
              var n = Object(_chunks_expression_js__WEBPACK_IMPORTED_MODULE_0__["c"])(t);
              return new r(n);
            } catch (e) {
              return console.log(e.message), null;
            }
          }
        }, {
          key: "isLegacyFilter",
          value: function isLegacyFilter(e) {
            if (!Array.isArray(e)) return !0;
            if (0 === e.length) return !0;

            switch (e[0]) {
              case "==":
              case "!=":
              case ">":
              case "<":
              case ">=":
              case "<=":
                return 3 === e.length && "string" == typeof e[1] && !Array.isArray(e[2]);

              case "in":
                return e.length >= 3 && "string" == typeof e[1] && !Array.isArray(e[2]);

              case "!in":
                return !0;

              case "any":
              case "all":
                for (var _r9 = 1; _r9 < e.length; _r9++) {
                  if (!this.isLegacyFilter(e[1])) return !1;
                }

                return !0;

              case "none":
                return !0;

              case "has":
                return 2 === e.length && ("$id" === e[1] || "$type" === e[1]);

              case "!has":
                return !0;

              default:
                return !1;
            }
          }
        }, {
          key: "convertLegacyFilter",
          value: function convertLegacyFilter(e) {
            if (!Array.isArray(e) || 0 === e.length) return !0;
            var t = e[0];
            if (1 === e.length) return "any" !== t;

            switch (t) {
              case "==":
                return r.convertComparison("==", e[1], e[2]);

              case "!=":
                return r.negate(r.convertComparison("==", e[1], e[2]));

              case ">":
              case "<":
              case ">=":
              case "<=":
                return r.convertComparison(t, e[1], e[2]);

              case "in":
                return r.convertIn(e[1], e.slice(2));

              case "!in":
                return r.negate(r.convertIn(e[1], e.slice(2)));

              case "any":
              case "all":
              case "none":
                return r.convertCombining(t, e.slice(1));

              case "has":
                return r.convertHas(e[1]);

              case "!has":
                return r.negate(r.convertHas(e[1]));

              default:
                throw new Error("Unexpected legacy filter.");
            }
          }
        }, {
          key: "convertComparison",
          value: function convertComparison(e, _r6, t) {
            switch (_r6) {
              case "$type":
                return [e, ["geometry-type"], t];

              case "$id":
                return [e, ["id"], t];

              default:
                return [e, ["get", _r6], t];
            }
          }
        }, {
          key: "convertIn",
          value: function convertIn(e, _r7) {
            switch (e) {
              case "$type":
                return ["in", ["geometry-type"], ["literal", _r7]];

              case "$id":
                return ["in", ["id"], ["literal", _r7]];

              default:
                return ["in", ["get", e], ["literal", _r7]];
            }
          }
        }, {
          key: "convertHas",
          value: function convertHas(e) {
            switch (e) {
              case "$type":
                return !0;

              case "$id":
                return ["has-id"];

              default:
                return ["has", e];
            }
          }
        }, {
          key: "convertCombining",
          value: function convertCombining(e, _r8) {
            return [e].concat(_r8.map(this.convertLegacyFilter));
          }
        }, {
          key: "negate",
          value: function negate(e) {
            return ["!", e];
          }
        }]);

        return r;
      }();
      /* harmony default export */


      __webpack_exports__["default"] = r;
      /***/
    },

    /***/
    "kB7V":
    /*!****************************************************************************************!*\
      !*** ./node_modules/@arcgis/core/views/2d/engine/vectorTiles/style/StyleRepository.js ***!
      \****************************************************************************************/

    /*! exports provided: default */

    /***/
    function kB7V(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony import */


      var _core_has_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ../../../../../core/has.js */
      "wSAH");
      /* harmony import */


      var _StyleLayer_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./StyleLayer.js */
      "Ip4x");
      /*
      All material copyright ESRI, All Rights Reserved, unless otherwise specified.
      See https://js.arcgis.com/4.18/esri/copyright.txt for details.
      */


      var a = /*#__PURE__*/function () {
        function a(e, t) {
          var _this12 = this;

          _classCallCheck(this, a);

          if (this.backgroundBucketIds = [], this._uidToLayer = new Map(), this._layerByName = {}, this._runningId = 0, e.layers || (e.layers = []), this.version = parseFloat(e.version), this.sprite = t ? t.spriteUrl : e.sprite, this.glyphs = t ? t.glyphsUrl : e.glyphs, this.layers = e.layers.map(function (e, t, r) {
            return _this12._create(e, t, r);
          }), this.layers) {
            var _e4;

            for (var _t2 = 0; _t2 < this.layers.length; _t2++) {
              _e4 = this.layers[_t2], this._layerByName[_e4.id.toLowerCase()] = _e4, this._uidToLayer.set(_e4.uid, _e4), 0 === _e4.type && this.backgroundBucketIds.push(_e4.id);
            }
          }

          this._identifyRefLayers();
        }

        _createClass(a, [{
          key: "isPainterDataDriven",
          value: function isPainterDataDriven(e) {
            var t = this._layerByName[e.toLowerCase()];

            return !!t && t.isPainterDataDriven();
          }
        }, {
          key: "getStyleLayerId",
          value: function getStyleLayerId(e) {
            return e >= this.layers.length ? null : this.layers[e].id;
          }
        }, {
          key: "getStyleLayerByUID",
          value: function getStyleLayerByUID(e) {
            var t = this._uidToLayer.get(e);

            return null != t ? t : null;
          }
        }, {
          key: "getStyleLayerIndex",
          value: function getStyleLayerIndex(e) {
            var t = this._layerByName[e.toLowerCase()];

            return t ? this.layers.indexOf(t) : -1;
          }
        }, {
          key: "setStyleLayer",
          value: function setStyleLayer(e, t) {
            if (!e || !e.id) return;
            t && t >= this.layers.length && (t = this.layers.length - 1);
            var r,
                i = !0;

            var s = this._layerByName[e.id.toLowerCase()];

            if (s) {
              var o = this.layers.indexOf(s);
              t || (t = o), t === o ? (i = !1, r = a._recreateLayer(e, s), this.layers[t] = r) : (this.layers.splice(o, 1), r = this._create(e, t, this.layers), this.layers.splice(t, 0, r));
            } else r = this._create(e, t, this.layers), !t || t >= this.layers.length ? this.layers.push(r) : this.layers.splice(t, 0, r);

            this._layerByName[e.id.toLowerCase()] = r, this._uidToLayer.set(r.uid, r), i && this._recomputeZValues(), this._identifyRefLayers();
          }
        }, {
          key: "getStyleLayer",
          value: function getStyleLayer(e) {
            var t = this._layerByName[e.toLowerCase()];

            return t ? {
              type: t.typeName,
              id: t.id,
              source: t.source,
              "source-layer": t.sourceLayer,
              minzoom: t.minzoom,
              maxzoom: t.maxzoom,
              filter: t.filter,
              layout: t.layout,
              paint: t.paint
            } : null;
          }
        }, {
          key: "deleteStyleLayer",
          value: function deleteStyleLayer(e) {
            var t = this._layerByName[e.toLowerCase()];

            if (t) {
              delete this._layerByName[e.toLowerCase()], this._uidToLayer["delete"](t.uid);
              var r = this.layers.indexOf(t);
              this.layers.splice(r, 1), this._recomputeZValues(), this._identifyRefLayers();
            }
          }
        }, {
          key: "getLayerById",
          value: function getLayerById(e) {
            return this._layerByName[e.toLowerCase()];
          }
        }, {
          key: "getLayoutProperties",
          value: function getLayoutProperties(e) {
            var t = this._layerByName[e.toLowerCase()];

            return t ? t.layout : null;
          }
        }, {
          key: "getPaintProperties",
          value: function getPaintProperties(e) {
            var t = this._layerByName[e.toLowerCase()];

            return t ? t.paint : null;
          }
        }, {
          key: "setPaintProperties",
          value: function setPaintProperties(e, t) {
            var r = this._layerByName[e.toLowerCase()];

            if (!r) return "";

            var i = {
              type: r.typeName,
              id: r.id,
              source: r.source,
              "source-layer": r.sourceLayer,
              minzoom: r.minzoom,
              maxzoom: r.maxzoom,
              filter: r.filter,
              layout: r.layout,
              paint: t
            },
                s = a._recreateLayer(i, r),
                o = this.layers.indexOf(r);

            return this.layers[o] = s, this._layerByName[r.id.toLowerCase()] = s, this._uidToLayer.set(r.uid, s), r.id;
          }
        }, {
          key: "setLayoutProperties",
          value: function setLayoutProperties(e, t) {
            var r = this._layerByName[e.toLowerCase()];

            if (!r) return "";

            var i = {
              type: r.typeName,
              id: r.id,
              source: r.source,
              "source-layer": r.sourceLayer,
              minzoom: r.minzoom,
              maxzoom: r.maxzoom,
              filter: r.filter,
              layout: t,
              paint: r.paint
            },
                s = a._recreateLayer(i, r),
                o = this.layers.indexOf(r);

            return this.layers[o] = s, this._layerByName[r.id.toLowerCase()] = s, this._uidToLayer.set(r.uid, s), r.id;
          }
        }, {
          key: "setStyleLayerVisibility",
          value: function setStyleLayerVisibility(e, t) {
            var r = this._layerByName[e.toLowerCase()];

            if (!r) return;
            var i = r.layout || {};
            i.visibility = t;

            var s = {
              type: r.typeName,
              id: r.id,
              source: r.source,
              "source-layer": r.sourceLayer,
              minzoom: r.minzoom,
              maxzoom: r.maxzoom,
              filter: r.filter,
              layout: i,
              paint: r.paint
            },
                o = a._recreateLayer(s, r),
                y = this.layers.indexOf(r);

            this.layers[y] = o, this._layerByName[r.id.toLowerCase()] = o, this._uidToLayer.set(r.uid, o);
          }
        }, {
          key: "getStyleLayerVisibility",
          value: function getStyleLayerVisibility(e) {
            var t;

            var r = this._layerByName[e.toLowerCase()];

            if (!r) return "none";
            var i = r.layout;
            return null != (t = null == i ? void 0 : i.visibility) ? t : "visible";
          }
        }, {
          key: "_recomputeZValues",
          value: function _recomputeZValues() {
            var e = this.layers,
                t = 1 / (e.length + 1);

            for (var r = 0; r < e.length; r++) {
              e[r].z = 1 - (1 + r) * t;
            }
          }
        }, {
          key: "_identifyRefLayers",
          value: function _identifyRefLayers() {
            var e = [],
                t = [];
            var r = 0;

            var _iterator2 = _createForOfIteratorHelper(this.layers),
                _step2;

            try {
              for (_iterator2.s(); !(_step2 = _iterator2.n()).done;) {
                var i = _step2.value;

                if (1 === i.type) {
                  var _t3 = i;
                  var s = i.source + "|" + i.sourceLayer;
                  s += "|" + JSON.stringify(i.layout && i.layout.visibility), s += "|" + JSON.stringify(i.minzoom), s += "|" + JSON.stringify(i.maxzoom), s += "|" + JSON.stringify(i.filter), (_t3.hasDataDrivenFill || _t3.hasDataDrivenOutline) && (s += "|" + JSON.stringify(r)), e.push({
                    key: s,
                    layer: i
                  });
                }

                if (2 === i.type) {
                  var _e5 = i;

                  var _s3 = i.source + "|" + i.sourceLayer;

                  _s3 += "|" + JSON.stringify(i.layout && i.layout.visibility), _s3 += "|" + JSON.stringify(i.minzoom), _s3 += "|" + JSON.stringify(i.maxzoom), _s3 += "|" + JSON.stringify(i.filter), _s3 += "|" + JSON.stringify(i.layout && i.layout["line-cap"]), _s3 += "|" + JSON.stringify(i.layout && i.layout["line-join"]), _e5.hasDataDrivenLine && (_s3 += "|" + JSON.stringify(r)), t.push({
                    key: _s3,
                    layer: i
                  });
                }

                ++r;
              }
            } catch (err) {
              _iterator2.e(err);
            } finally {
              _iterator2.f();
            }

            this._assignRefLayers(e), this._assignRefLayers(t);
          }
        }, {
          key: "_assignRefLayers",
          value: function _assignRefLayers(e) {
            var t, r;
            e.sort(function (e, t) {
              return e.key < t.key ? -1 : e.key > t.key ? 1 : 0;
            });
            var i = e.length;

            for (var s = 0; s < i; s++) {
              var _a12 = e[s];
              if (_a12.key === t) _a12.layer.refLayerId = r;else if (t = _a12.key, r = _a12.layer.id, 1 === _a12.layer.type && !_a12.layer.getPaintProperty("fill-outline-color")) for (var o = s + 1; o < i; o++) {
                var _i = e[o];
                if (_i.key !== t) break;

                if (_i.layer.getPaintProperty("fill-outline-color")) {
                  e[s] = _i, e[o] = _a12, r = _i.layer.id;
                  break;
                }
              }
            }
          }
        }, {
          key: "_create",
          value: function _create(_a10, o, y) {
            var l = 1 - (1 + o) * (1 / (y.length + 1)),
                n = this._runningId++;

            switch (_a10.type) {
              case "background":
                return new _StyleLayer_js__WEBPACK_IMPORTED_MODULE_1__["BackgroundStyleLayer"](0, _a10, l, n);

              case "fill":
                return new _StyleLayer_js__WEBPACK_IMPORTED_MODULE_1__["FillStyleLayer"](1, _a10, l, n);

              case "line":
                return new _StyleLayer_js__WEBPACK_IMPORTED_MODULE_1__["LineStyleLayer"](2, _a10, l, n);

              case "symbol":
                return new _StyleLayer_js__WEBPACK_IMPORTED_MODULE_1__["SymbolStyleLayer"](3, _a10, l, n);

              case "raster":
                throw new Error("Unsupported vector tile raster layer");

              case "circle":
                return new _StyleLayer_js__WEBPACK_IMPORTED_MODULE_1__["CircleStyleLayer"](4, _a10, l, n);
            }

            throw new Error("Unknown vector tile layer");
          }
        }], [{
          key: "_recreateLayer",
          value: function _recreateLayer(_a11, o) {
            switch (_a11.type) {
              case "background":
                return new _StyleLayer_js__WEBPACK_IMPORTED_MODULE_1__["BackgroundStyleLayer"](0, _a11, o.z, o.uid);

              case "fill":
                return new _StyleLayer_js__WEBPACK_IMPORTED_MODULE_1__["FillStyleLayer"](1, _a11, o.z, o.uid);

              case "line":
                return new _StyleLayer_js__WEBPACK_IMPORTED_MODULE_1__["LineStyleLayer"](2, _a11, o.z, o.uid);

              case "symbol":
                return new _StyleLayer_js__WEBPACK_IMPORTED_MODULE_1__["SymbolStyleLayer"](3, _a11, o.z, o.uid);

              case "raster":
                throw new Error("Unsupported vector tile raster layer");

              case "circle":
                return new _StyleLayer_js__WEBPACK_IMPORTED_MODULE_1__["CircleStyleLayer"](4, _a11, o.z, o.uid);
            }
          }
        }]);

        return a;
      }();
      /* harmony default export */


      __webpack_exports__["default"] = a;
      /***/
    },

    /***/
    "p+i1":
    /*!********************************************************!*\
      !*** ./node_modules/@arcgis/core/chunks/expression.js ***!
      \********************************************************/

    /*! exports provided: A, B, C, D, E, F, G, H, I, J, K, L, M, N, O, P, Q, R, S, T, U, V, W, X, Y, Z, a, b, c, d, e, f, g, h, i, j, k, l, m, n, o, p, q, r, s, t, u, v, w, x, y, z */

    /***/
    function pI1(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "A", function () {
        return b;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "B", function () {
        return ot;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "C", function () {
        return x;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "D", function () {
        return X;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "E", function () {
        return h;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "F", function () {
        return it;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "G", function () {
        return w;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "H", function () {
        return F;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "I", function () {
        return S;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "J", function () {
        return ct;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "K", function () {
        return ht;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "L", function () {
        return f;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "M", function () {
        return M;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "N", function () {
        return p;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "O", function () {
        return lt;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "P", function () {
        return Z;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "Q", function () {
        return ft;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "R", function () {
        return i;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "S", function () {
        return P;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "T", function () {
        return u;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "U", function () {
        return mt;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "V", function () {
        return ut;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "W", function () {
        return vt;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "X", function () {
        return bt;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "Y", function () {
        return dt;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "Z", function () {
        return yt;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "a", function () {
        return l;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "b", function () {
        return g;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "c", function () {
        return Et;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "d", function () {
        return m;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "e", function () {
        return v;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "f", function () {
        return d;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "g", function () {
        return y;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "h", function () {
        return E;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "i", function () {
        return U;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "j", function () {
        return B;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "k", function () {
        return G;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "l", function () {
        return J;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "m", function () {
        return D;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "n", function () {
        return H;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "o", function () {
        return xt;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "p", function () {
        return K;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "q", function () {
        return V;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "r", function () {
        return W;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "s", function () {
        return Y;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "t", function () {
        return _;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "u", function () {
        return tt;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "v", function () {
        return et;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "w", function () {
        return rt;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "x", function () {
        return at;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "y", function () {
        return st;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "z", function () {
        return nt;
      });
      /* harmony import */


      var _Color_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ../Color.js */
      "nvBr");
      /* harmony import */


      var _views_2d_engine_vectorTiles_expression_data_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ../views/2d/engine/vectorTiles/expression/data.js */
      "q9bE");
      /* harmony import */


      var _views_2d_unitBezier_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ../views/2d/unitBezier.js */
      "BVSY");
      /* harmony import */


      var _views_2d_engine_vectorTiles_GeometryUtils_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ../views/2d/engine/vectorTiles/GeometryUtils.js */
      "OxmL");
      /*
      All material copyright ESRI, All Rights Reserved, unless otherwise specified.
      See https://js.arcgis.com/4.18/esri/copyright.txt for details.
      */


      var i = /*#__PURE__*/function () {
        function i(t) {
          _classCallCheck(this, i);

          this.args = t;
        }

        _createClass(i, [{
          key: "evaluate",
          value: function evaluate(t, e) {
            var r = this.args[1].evaluate(t, e),
                a = this.args[2].evaluate(t, e),
                s = this.args[3].evaluate(t, e);
            return "rgb(".concat(Math.round(r), ",").concat(Math.round(a), ",").concat(Math.round(s), ")");
          }
        }], [{
          key: "parse",
          value: function parse(t) {
            if (4 !== t.length) throw new Error('"rgb" expects 3 arguments.');
            var e = t.slice(1).map(function (t) {
              return Et(t);
            });
            return new i(e);
          }
        }]);

        return i;
      }();

      var l = /*#__PURE__*/function () {
        function l(t) {
          _classCallCheck(this, l);

          this.args = t;
        }

        _createClass(l, [{
          key: "evaluate",
          value: function evaluate(t, e) {
            var r = this.args[1].evaluate(t, e),
                a = this.args[2].evaluate(t, e),
                s = this.args[3].evaluate(t, e),
                n = this.args[4].evaluate(t, e);
            return "rgb(".concat(Math.round(r), ",").concat(Math.round(a), ",").concat(Math.round(s), ",").concat(n, ")");
          }
        }], [{
          key: "parse",
          value: function parse(t) {
            if (5 !== t.length) throw new Error('"rgba" expects 4 arguments.');
            var e = t.slice(1).map(function (t) {
              return Et(t);
            });
            return new i(e);
          }
        }]);

        return l;
      }();

      var u = /*#__PURE__*/function () {
        function u(t) {
          _classCallCheck(this, u);

          this.color = t;
        }

        _createClass(u, [{
          key: "evaluate",
          value: function evaluate(e, r) {
            return new _Color_js__WEBPACK_IMPORTED_MODULE_0__["default"](this.color.evaluate(e, r)).toRgba();
          }
        }], [{
          key: "parse",
          value: function parse(t) {
            if (2 !== t.length) throw new Error('"to-rgba" expects 1 argument.');
            var e = Et(t[1]);
            return new u(e);
          }
        }]);

        return u;
      }();

      var c = /*#__PURE__*/function () {
        function c(t, e, r) {
          _classCallCheck(this, c);

          this.lhs = t, this.rhs = e, this.compare = r;
        }

        _createClass(c, [{
          key: "evaluate",
          value: function evaluate(t, e) {
            return this.compare(this.lhs.evaluate(t, e), this.rhs.evaluate(t, e));
          }
        }], [{
          key: "parse",
          value: function parse(t, e) {
            if (3 !== t.length && 4 !== t.length) throw new Error("\"".concat(t[0], "\" expects 2 or 3 arguments"));
            if (4 === t.length) throw new Error("\"".concat(t[0], "\" collator not supported"));
            return new c(Et(t[1]), Et(t[2]), e);
          }
        }]);

        return c;
      }();

      var h = /*#__PURE__*/function (_c) {
        _inherits(h, _c);

        var _super6 = _createSuper(h);

        function h() {
          _classCallCheck(this, h);

          return _super6.apply(this, arguments);
        }

        _createClass(h, null, [{
          key: "parse",
          value: function parse(t) {
            return c.parse(t, function (t, e) {
              return t === e;
            });
          }
        }]);

        return h;
      }(c);

      var p = /*#__PURE__*/function (_c2) {
        _inherits(p, _c2);

        var _super7 = _createSuper(p);

        function p() {
          _classCallCheck(this, p);

          return _super7.apply(this, arguments);
        }

        _createClass(p, null, [{
          key: "parse",
          value: function parse(t) {
            return c.parse(t, function (t, e) {
              return t !== e;
            });
          }
        }]);

        return p;
      }(c);

      var f = /*#__PURE__*/function (_c3) {
        _inherits(f, _c3);

        var _super8 = _createSuper(f);

        function f() {
          _classCallCheck(this, f);

          return _super8.apply(this, arguments);
        }

        _createClass(f, null, [{
          key: "parse",
          value: function parse(t) {
            return c.parse(t, function (t, e) {
              return t < e;
            });
          }
        }]);

        return f;
      }(c);

      var g = /*#__PURE__*/function (_c4) {
        _inherits(g, _c4);

        var _super9 = _createSuper(g);

        function g() {
          _classCallCheck(this, g);

          return _super9.apply(this, arguments);
        }

        _createClass(g, null, [{
          key: "parse",
          value: function parse(t) {
            return c.parse(t, function (t, e) {
              return t <= e;
            });
          }
        }]);

        return g;
      }(c);

      var w = /*#__PURE__*/function (_c5) {
        _inherits(w, _c5);

        var _super10 = _createSuper(w);

        function w() {
          _classCallCheck(this, w);

          return _super10.apply(this, arguments);
        }

        _createClass(w, null, [{
          key: "parse",
          value: function parse(t) {
            return c.parse(t, function (t, e) {
              return t > e;
            });
          }
        }]);

        return w;
      }(c);

      var m = /*#__PURE__*/function (_c6) {
        _inherits(m, _c6);

        var _super11 = _createSuper(m);

        function m() {
          _classCallCheck(this, m);

          return _super11.apply(this, arguments);
        }

        _createClass(m, null, [{
          key: "parse",
          value: function parse(t) {
            return c.parse(t, function (t, e) {
              return t >= e;
            });
          }
        }]);

        return m;
      }(c);

      var v = /*#__PURE__*/function () {
        function v(t) {
          _classCallCheck(this, v);

          this.arg = t;
        }

        _createClass(v, [{
          key: "evaluate",
          value: function evaluate(t, e) {
            return !this.arg.evaluate(t, e);
          }
        }], [{
          key: "parse",
          value: function parse(t) {
            if (2 !== t.length) throw new Error('"!" expects 1 argument');
            return new v(Et(t[1]));
          }
        }]);

        return v;
      }();

      var b = /*#__PURE__*/function () {
        function b(t) {
          _classCallCheck(this, b);

          this.args = t;
        }

        _createClass(b, [{
          key: "evaluate",
          value: function evaluate(t, e) {
            var _iterator3 = _createForOfIteratorHelper(this.args),
                _step3;

            try {
              for (_iterator3.s(); !(_step3 = _iterator3.n()).done;) {
                var r = _step3.value;
                if (!r.evaluate(t, e)) return !1;
              }
            } catch (err) {
              _iterator3.e(err);
            } finally {
              _iterator3.f();
            }

            return !0;
          }
        }], [{
          key: "parse",
          value: function parse(t) {
            var e = [];

            for (var r = 1; r < t.length; r++) {
              e.push(Et(t[r]));
            }

            return new b(e);
          }
        }]);

        return b;
      }();

      var d = /*#__PURE__*/function () {
        function d(t) {
          _classCallCheck(this, d);

          this.args = t;
        }

        _createClass(d, [{
          key: "evaluate",
          value: function evaluate(t, e) {
            var _iterator4 = _createForOfIteratorHelper(this.args),
                _step4;

            try {
              for (_iterator4.s(); !(_step4 = _iterator4.n()).done;) {
                var r = _step4.value;
                if (r.evaluate(t, e)) return !0;
              }
            } catch (err) {
              _iterator4.e(err);
            } finally {
              _iterator4.f();
            }

            return !1;
          }
        }], [{
          key: "parse",
          value: function parse(t) {
            var e = [];

            for (var r = 1; r < t.length; r++) {
              e.push(Et(t[r]));
            }

            return new d(e);
          }
        }]);

        return d;
      }();

      var y = /*#__PURE__*/function () {
        function y(t) {
          _classCallCheck(this, y);

          this.args = t;
        }

        _createClass(y, [{
          key: "evaluate",
          value: function evaluate(t, e) {
            var _iterator5 = _createForOfIteratorHelper(this.args),
                _step5;

            try {
              for (_iterator5.s(); !(_step5 = _iterator5.n()).done;) {
                var r = _step5.value;
                if (r.evaluate(t, e)) return !1;
              }
            } catch (err) {
              _iterator5.e(err);
            } finally {
              _iterator5.f();
            }

            return !0;
          }
        }], [{
          key: "parse",
          value: function parse(t) {
            var e = [];

            for (var r = 1; r < t.length; r++) {
              e.push(Et(t[r]));
            }

            return new y(e);
          }
        }]);

        return y;
      }();

      var x = /*#__PURE__*/function () {
        function x(t, e) {
          _classCallCheck(this, x);

          this.args = t, this.fallback = e;
        }

        _createClass(x, [{
          key: "evaluate",
          value: function evaluate(t, e) {
            var _iterator6 = _createForOfIteratorHelper(this.args),
                _step6;

            try {
              for (_iterator6.s(); !(_step6 = _iterator6.n()).done;) {
                var r = _step6.value;
                if (r.condition.evaluate(t, e)) return r.output.evaluate(t, e);
              }
            } catch (err) {
              _iterator6.e(err);
            } finally {
              _iterator6.f();
            }

            return this.fallback.evaluate(t, e);
          }
        }], [{
          key: "parse",
          value: function parse(t) {
            if (t.length < 4) throw new Error('"case" expects at least 3 arguments');
            if (t.length % 2 == 1) throw new Error('"case" expects an odd number of arguments');
            var e = [];

            for (var r = 1; r < t.length - 1; r += 2) {
              e.push({
                condition: Et(t[r]),
                output: Et(t[r + 1])
              });
            }

            return new x(e, Et(t[t.length - 1]));
          }
        }]);

        return x;
      }();

      var E = /*#__PURE__*/function () {
        function E(t) {
          _classCallCheck(this, E);

          this.args = t;
        }

        _createClass(E, [{
          key: "evaluate",
          value: function evaluate(t, e) {
            var _iterator7 = _createForOfIteratorHelper(this.args),
                _step7;

            try {
              for (_iterator7.s(); !(_step7 = _iterator7.n()).done;) {
                var r = _step7.value;
                var a = r.evaluate(t, e);
                if (null !== a) return a;
              }
            } catch (err) {
              _iterator7.e(err);
            } finally {
              _iterator7.f();
            }

            return null;
          }
        }], [{
          key: "parse",
          value: function parse(t) {
            if (t.length < 2) throw new Error('"coalesce" expects at least 1 argument');
            var e = [];

            for (var r = 1; r < t.length; r++) {
              e.push(Et(t[r]));
            }

            return new E(e);
          }
        }]);

        return E;
      }();

      var M = /*#__PURE__*/function () {
        function M(t, e, r, a) {
          _classCallCheck(this, M);

          this.input = t, this.labels = e, this.outputs = r, this.fallback = a;
        }

        _createClass(M, [{
          key: "evaluate",
          value: function evaluate(t, e) {
            var r = this.input.evaluate(t, e);
            return (this.outputs[this.labels[r]] || this.fallback).evaluate(t, e);
          }
        }], [{
          key: "parse",
          value: function parse(t) {
            if (t.length < 3) throw new Error('"match" expects at least 3 arguments');
            if (t.length % 2 == 0) throw new Error('"case" expects an even number of arguments');
            var e = Et(t[1]),
                r = [],
                a = {};
            var s;

            for (var _e6 = 2; _e6 < t.length - 1; _e6 += 2) {
              var n = t[_e6];
              Array.isArray(n) || (n = [n]);

              var _iterator8 = _createForOfIteratorHelper(n),
                  _step8;

              try {
                for (_iterator8.s(); !(_step8 = _iterator8.n()).done;) {
                  var _t4 = _step8.value;

                  var _e7 = typeof _t4;

                  if ("string" !== _e7 && "number" !== _e7) throw new Error('"match" requires string or number literal as labels');

                  if (s) {
                    if (_e7 !== s) throw new Error('"match" requires labels to have the same type');
                  } else s = _e7;

                  a[_t4] = r.length;
                }
              } catch (err) {
                _iterator8.e(err);
              } finally {
                _iterator8.f();
              }

              r.push(Et(t[_e6 + 1]));
            }

            return new M(e, a, r, Et(t[t.length - 1]));
          }
        }]);

        return M;
      }();

      var k = 4 / 29,
          $ = 6 / 29,
          A = 3 * $ * $,
          j = Math.PI / 180,
          q = 180 / Math.PI;

      function N(t) {
        return t > .008856451679035631 ? Math.pow(t, 1 / 3) : t / A + k;
      }

      function I(t) {
        return t > $ ? t * t * t : A * (t - k);
      }

      function T(t) {
        return 255 * (t <= .0031308 ? 12.92 * t : 1.055 * Math.pow(t, 1 / 2.4) - .055);
      }

      function R(t) {
        return (t /= 255) <= .04045 ? t / 12.92 : Math.pow((t + .055) / 1.055, 2.4);
      }

      function z(t) {
        var e = R(t.r),
            r = R(t.g),
            a = R(t.b),
            s = N((.4124564 * e + .3575761 * r + .1804375 * a) / .95047),
            n = N((.2126729 * e + .7151522 * r + .072175 * a) / 1);
        return {
          l: 116 * n - 16,
          a: 500 * (s - n),
          b: 200 * (n - N((.0193339 * e + .119192 * r + .9503041 * a) / 1.08883)),
          alpha: t.a
        };
      }

      function C(e) {
        var r = (e.l + 16) / 116,
            a = isNaN(e.a) ? r : r + e.a / 500,
            s = isNaN(e.b) ? r : r - e.b / 200;
        return r = 1 * I(r), a = .95047 * I(a), s = 1.08883 * I(s), new _Color_js__WEBPACK_IMPORTED_MODULE_0__["default"]([T(3.2404542 * a - 1.5371385 * r - .4985314 * s), T(-.969266 * a + 1.8760108 * r + .041556 * s), T(.0556434 * a - .2040259 * r + 1.0572252 * s), e.alpha]);
      }

      function L(t) {
        var _z = z(t),
            e = _z.l,
            r = _z.a,
            a = _z.b,
            s = Math.atan2(a, r) * q;

        return {
          h: s < 0 ? s + 360 : s,
          c: Math.sqrt(r * r + a * a),
          l: e,
          alpha: t.a
        };
      }

      function O(t, e, r) {
        var a = e - t;
        return t + r * (a > 180 || a < -180 ? a - 360 * Math.round(a / 360) : a);
      }

      var S = /*#__PURE__*/function () {
        function S(t, e, r, a) {
          _classCallCheck(this, S);

          this.operator = t, this.input = e, this.stops = r, this.interpolation = a;
        }

        _createClass(S, [{
          key: "evaluate",
          value: function evaluate(t, e) {
            var r = this.stops;
            if (1 === r.length) return r[0][1].evaluate(t, e);
            var a = this.input.evaluate(t, e);
            if (a <= r[0][0]) return r[0][1].evaluate(t, e);
            if (a >= r[r.length - 1][0]) return r[r.length - 1][1].evaluate(t, e);
            var s = 0;

            for (; ++s < r.length && !(a < r[s][0]);) {
              ;
            }

            var n = r[s - 1][0],
                i = r[s][0],
                l = S.interpolationRatio(this.interpolation, a, n, i),
                u = r[s - 1][1].evaluate(t, e),
                c = r[s][1].evaluate(t, e);
            return "interpolate" === this.operator ? Array.isArray(u) ? u.map(function (t, e) {
              return Object(_views_2d_engine_vectorTiles_GeometryUtils_js__WEBPACK_IMPORTED_MODULE_3__["interpolate"])(t, c[e], l);
            }) : Object(_views_2d_engine_vectorTiles_GeometryUtils_js__WEBPACK_IMPORTED_MODULE_3__["interpolate"])(u, c, l) : "interpolate-hcl" === this.operator ? function (t) {
              var e = t.h * j,
                  r = t.c;
              return C({
                l: t.l,
                a: Math.cos(e) * r,
                b: Math.sin(e) * r,
                alpha: t.alpha
              });
            }(function (t, e, r) {
              return {
                h: O(t.h, e.h, r),
                c: Object(_views_2d_engine_vectorTiles_GeometryUtils_js__WEBPACK_IMPORTED_MODULE_3__["interpolate"])(t.c, e.c, r),
                l: Object(_views_2d_engine_vectorTiles_GeometryUtils_js__WEBPACK_IMPORTED_MODULE_3__["interpolate"])(t.l, e.l, r),
                alpha: Object(_views_2d_engine_vectorTiles_GeometryUtils_js__WEBPACK_IMPORTED_MODULE_3__["interpolate"])(t.alpha, e.alpha, r)
              };
            }(L(u), L(c), l)) : C(function (t, e, r) {
              return {
                l: Object(_views_2d_engine_vectorTiles_GeometryUtils_js__WEBPACK_IMPORTED_MODULE_3__["interpolate"])(t.l, e.l, r),
                a: Object(_views_2d_engine_vectorTiles_GeometryUtils_js__WEBPACK_IMPORTED_MODULE_3__["interpolate"])(t.a, e.a, r),
                b: Object(_views_2d_engine_vectorTiles_GeometryUtils_js__WEBPACK_IMPORTED_MODULE_3__["interpolate"])(t.b, e.b, r),
                alpha: Object(_views_2d_engine_vectorTiles_GeometryUtils_js__WEBPACK_IMPORTED_MODULE_3__["interpolate"])(t.alpha, e.alpha, r)
              };
            }(z(u), z(c), l));
          }
        }], [{
          key: "parse",
          value: function parse(t) {
            if (t.length < 5) throw new Error("\"".concat(t[0], "\" expects at least 4 arguments."));
            var e = t[1];
            if (!Array.isArray(e) || 0 === e.length) throw new Error("\"".concat(t[0], "\" expects an interpolation type expression."));

            switch (e[0]) {
              case "linear":
                break;

              case "exponential":
                if ("number" != typeof e[1]) throw new Error("\"".concat(t[0], "\" expects a numeric base for exponential interpolation."));
                break;

              case "cubic-bezier":
                if (5 !== e.length) throw new Error("Cubic bezier interpolation requires four numeric arguments with values between 0 and 1.");

                for (var _t5 = 1; _t5 < 5; _t5++) {
                  var _r10 = e[_t5];
                  if ("number" != typeof _r10 || _r10 < 0 || _r10 > 1) throw new Error("Cubic bezier interpolation requires four numeric arguments with values between 0 and 1.");
                }

                break;

              default:
                throw new Error("\"".concat(t[0], "\" unknown interpolation type \"").concat(e[0], "\"."));
            }

            if (t.length % 2 != 1) throw new Error("\"".concat(t[0], "\" expects an even number of arguments."));
            var r = Et(t[2]),
                a = [];

            for (var _e8 = 3; _e8 < t.length; _e8 += 2) {
              var _r11 = t[_e8];
              if ("number" != typeof _r11) throw new Error("\"".concat(t[0], "\" requires stop inputs as literal numbers."));
              if (a.length && a[a.length - 1][0] >= _r11) throw new Error("\"".concat(t[0], "\" requires strictly ascending stop inputs."));
              a.push([_r11, Et(t[_e8 + 1])]);
            }

            return new S(t[0], r, a, e);
          }
        }, {
          key: "interpolationRatio",
          value: function interpolationRatio(t, e, r, a) {
            var s = 0;
            if ("exponential" === t[0]) s = S.exponentialInterpolationRatio(e, t[1], r, a);else if ("linear" === t[0]) s = S.exponentialInterpolationRatio(e, 1, r, a);else if ("cubic-bezier" === t[0]) {
              s = Object(_views_2d_unitBezier_js__WEBPACK_IMPORTED_MODULE_2__["unitBezier"])(t[1], t[2], t[3], t[4])(S.exponentialInterpolationRatio(e, 1, r, a), 1e-5);
            }
            return s;
          }
        }, {
          key: "exponentialInterpolationRatio",
          value: function exponentialInterpolationRatio(t, e, r, a) {
            var s = a - r;
            if (0 === s) return 0;
            var n = t - r;
            return 1 === e ? n / s : (Math.pow(e, n) - 1) / (Math.pow(e, s) - 1);
          }
        }]);

        return S;
      }();

      var P = /*#__PURE__*/function () {
        function P(t, e) {
          _classCallCheck(this, P);

          this.input = t, this.stops = e;
        }

        _createClass(P, [{
          key: "evaluate",
          value: function evaluate(t, e) {
            var r = this.stops;
            if (1 === r.length) return r[0][1].evaluate(t, e);
            var a = this.input.evaluate(t, e);
            var s = 0;

            for (; ++s < r.length && !(a < r[s][0]);) {
              ;
            }

            return this.stops[s - 1][1].evaluate(t, e);
          }
        }], [{
          key: "parse",
          value: function parse(t) {
            if (t.length < 5) throw new Error('"step" expects at least 4 arguments.');
            if (t.length % 2 != 1) throw new Error('"step" expects an even number of arguments.');
            var e = Et(t[1]),
                r = [];
            r.push([-1 / 0, Et(t[2])]);

            for (var _e9 = 3; _e9 < t.length; _e9 += 2) {
              var a = t[_e9];
              if ("number" != typeof a) throw new Error('"step" requires stop inputs as literal numbers.');
              if (r.length && r[r.length - 1][0] >= a) throw new Error('"step" requires strictly ascending stop inputs.');
              r.push([a, Et(t[_e9 + 1])]);
            }

            return new P(e, r);
          }
        }]);

        return P;
      }();

      var U = /*#__PURE__*/function () {
        function U(t, e) {
          _classCallCheck(this, U);

          this.index = t, this.array = e;
        }

        _createClass(U, [{
          key: "evaluate",
          value: function evaluate(t, e) {
            var r = this.index.evaluate(t, e),
                a = this.array.evaluate(t, e);
            if (r < 0 || r >= a.length) throw new Error('"at" index out of bounds.');
            if (r !== Math.floor(r)) throw new Error('"at" index must be an integer.');
            return a[r];
          }
        }], [{
          key: "parse",
          value: function parse(t) {
            if (3 !== t.length) throw new Error('"at" expects 2 arguments.');
            var e = Et(t[1]),
                r = Et(t[2]);
            return new U(e, r);
          }
        }]);

        return U;
      }();

      var B = /*#__PURE__*/function () {
        function B(t, e) {
          _classCallCheck(this, B);

          this.key = t, this.obj = e;
        }

        _createClass(B, [{
          key: "evaluate",
          value: function evaluate(t, e) {
            var r = this.key.evaluate(t, e);

            if (this.obj) {
              return this.obj.evaluate(t, e)[r];
            }

            return t.values[r];
          }
        }], [{
          key: "parse",
          value: function parse(t) {
            var e, r;

            switch (t.length) {
              case 2:
                return e = Et(t[1]), new B(e);

              case 3:
                return e = Et(t[1]), r = Et(t[2]), new B(e, r);

              default:
                throw new Error('"get" expects 1 or 2 arguments');
            }
          }
        }]);

        return B;
      }();

      var F = /*#__PURE__*/function () {
        function F(t, e) {
          _classCallCheck(this, F);

          this.key = t, this.obj = e;
        }

        _createClass(F, [{
          key: "evaluate",
          value: function evaluate(t, e) {
            var r = this.key.evaluate(t, e);

            if (this.obj) {
              return r in this.obj.evaluate(t, e);
            }

            return void 0 !== t.values[r];
          }
        }], [{
          key: "parse",
          value: function parse(t) {
            var e, r;

            switch (t.length) {
              case 2:
                return e = Et(t[1]), new F(e);

              case 3:
                return e = Et(t[1]), r = Et(t[2]), new F(e, r);

              default:
                throw new Error('"has" expects 1 or 2 arguments');
            }
          }
        }]);

        return F;
      }();

      var G = /*#__PURE__*/function () {
        function G(t, e) {
          _classCallCheck(this, G);

          this.key = t, this.vals = e;
        }

        _createClass(G, [{
          key: "evaluate",
          value: function evaluate(t, e) {
            var r = this.key.evaluate(t, e);
            return -1 !== this.vals.evaluate(t, e).indexOf(r);
          }
        }], [{
          key: "parse",
          value: function parse(t) {
            if (3 !== t.length) throw new Error('"in" expects 2 arguments');
            return new G(Et(t[1]), Et(t[2]));
          }
        }]);

        return G;
      }();

      var J = /*#__PURE__*/function () {
        function J(t, e, r) {
          _classCallCheck(this, J);

          this.item = t, this.array = e, this.from = r;
        }

        _createClass(J, [{
          key: "evaluate",
          value: function evaluate(t, e) {
            var r = this.item.evaluate(t, e),
                a = this.array.evaluate(t, e);

            if (this.from) {
              var s = this.from.evaluate(t, e);
              if (s !== Math.floor(s)) throw new Error('"index-of" index must be an integer.');
              return a.indexOf(r, s);
            }

            return a.indexOf(r);
          }
        }], [{
          key: "parse",
          value: function parse(t) {
            if (t.length < 3 || t.length > 4) throw new Error('"index-of" expects 3 or 4 arguments.');
            var e = Et(t[1]),
                r = Et(t[2]);

            if (4 === t.length) {
              var a = Et(t[3]);
              return new J(e, r, a);
            }

            return new J(e, r);
          }
        }]);

        return J;
      }();

      var D = /*#__PURE__*/function () {
        function D(t) {
          _classCallCheck(this, D);

          this.arg = t;
        }

        _createClass(D, [{
          key: "evaluate",
          value: function evaluate(t, e) {
            var r = this.arg.evaluate(t, e);
            if ("string" == typeof r) return r.length;
            if (Array.isArray(r)) return r.length;
            throw new Error('"length" expects string or array.');
          }
        }], [{
          key: "parse",
          value: function parse(t) {
            if (2 !== t.length) throw new Error('"length" expects 2 arguments.');
            var e = Et(t[1]);
            return new D(e);
          }
        }]);

        return D;
      }();

      var H = /*#__PURE__*/function () {
        function H(t, e, r) {
          _classCallCheck(this, H);

          this.array = t, this.from = e, this.to = r;
        }

        _createClass(H, [{
          key: "evaluate",
          value: function evaluate(t, e) {
            var r = this.array.evaluate(t, e),
                a = this.from.evaluate(t, e);
            if (a < 0 || a >= r.length) throw new Error('"slice" index out of bounds.');
            if (a !== Math.floor(a)) throw new Error('"slice" index must be an integer.');

            if (this.to) {
              var s = this.to.evaluate(t, e);
              if (s < 0 || s >= r.length) throw new Error('"slice" index out of bounds.');
              if (s !== Math.floor(s)) throw new Error('"slice" index must be an integer.');
              return r.slice(a, s);
            }

            return r.slice(a);
          }
        }], [{
          key: "parse",
          value: function parse(t) {
            if (t.length < 3 || t.length > 4) throw new Error('"slice" expects 2 or 3 arguments.');
            var e = Et(t[1]),
                r = Et(t[2]);

            if (4 === t.length) {
              var a = Et(t[3]);
              return new H(e, r, a);
            }

            return new H(e, r);
          }
        }]);

        return H;
      }();

      var K = /*#__PURE__*/function () {
        function K() {
          _classCallCheck(this, K);
        }

        _createClass(K, [{
          key: "evaluate",
          value: function evaluate(t, e) {
            return void 0 !== t.id;
          }
        }], [{
          key: "parse",
          value: function parse(t) {
            if (1 !== t.length) throw new Error('"has-id" expects no arguments');
            return new K();
          }
        }]);

        return K;
      }();

      var Q = /*#__PURE__*/function () {
        function Q(t, e) {
          _classCallCheck(this, Q);

          this.args = t, this.calculate = e;
        }

        _createClass(Q, [{
          key: "evaluate",
          value: function evaluate(t, e) {
            var r;
            return this.args && (r = this.args.map(function (r) {
              return r.evaluate(t, e);
            })), this.calculate(r);
          }
        }], [{
          key: "parse",
          value: function parse(t, e) {
            var r = t.slice(1).map(function (t) {
              return Et(t);
            });
            return new Q(r, e);
          }
        }]);

        return Q;
      }();

      var V = /*#__PURE__*/function (_Q) {
        _inherits(V, _Q);

        var _super12 = _createSuper(V);

        function V() {
          _classCallCheck(this, V);

          return _super12.apply(this, arguments);
        }

        _createClass(V, null, [{
          key: "parse",
          value: function parse(t) {
            switch (t.length) {
              case 2:
                return Q.parse(t, function (t) {
                  return -t[0];
                });

              case 3:
                return Q.parse(t, function (t) {
                  return t[0] - t[1];
                });

              default:
                throw new Error('"-" expects 1 or 2 arguments');
            }
          }
        }]);

        return V;
      }(Q);

      var W = /*#__PURE__*/function (_Q2) {
        _inherits(W, _Q2);

        var _super13 = _createSuper(W);

        function W() {
          _classCallCheck(this, W);

          return _super13.apply(this, arguments);
        }

        _createClass(W, null, [{
          key: "parse",
          value: function parse(t) {
            return Q.parse(t, function (t) {
              var e = 1;

              var _iterator9 = _createForOfIteratorHelper(t),
                  _step9;

              try {
                for (_iterator9.s(); !(_step9 = _iterator9.n()).done;) {
                  var r = _step9.value;
                  e *= r;
                }
              } catch (err) {
                _iterator9.e(err);
              } finally {
                _iterator9.f();
              }

              return e;
            });
          }
        }]);

        return W;
      }(Q);

      var X = /*#__PURE__*/function (_Q3) {
        _inherits(X, _Q3);

        var _super14 = _createSuper(X);

        function X() {
          _classCallCheck(this, X);

          return _super14.apply(this, arguments);
        }

        _createClass(X, null, [{
          key: "parse",
          value: function parse(t) {
            if (3 === t.length) return Q.parse(t, function (t) {
              return t[0] / t[1];
            });
            throw new Error('"/" expects 2 arguments');
          }
        }]);

        return X;
      }(Q);

      var Y = /*#__PURE__*/function (_Q4) {
        _inherits(Y, _Q4);

        var _super15 = _createSuper(Y);

        function Y() {
          _classCallCheck(this, Y);

          return _super15.apply(this, arguments);
        }

        _createClass(Y, null, [{
          key: "parse",
          value: function parse(t) {
            if (3 === t.length) return Q.parse(t, function (t) {
              return t[0] % t[1];
            });
            throw new Error('"%" expects 2 arguments');
          }
        }]);

        return Y;
      }(Q);

      var Z = /*#__PURE__*/function (_Q5) {
        _inherits(Z, _Q5);

        var _super16 = _createSuper(Z);

        function Z() {
          _classCallCheck(this, Z);

          return _super16.apply(this, arguments);
        }

        _createClass(Z, null, [{
          key: "parse",
          value: function parse(t) {
            if (3 === t.length) return Q.parse(t, function (t) {
              return Math.pow(t[0], t[1]);
            });
            throw new Error('"^" expects 1 or 2 arguments');
          }
        }]);

        return Z;
      }(Q);

      var _ = /*#__PURE__*/function (_Q6) {
        _inherits(_, _Q6);

        var _super17 = _createSuper(_);

        function _() {
          _classCallCheck(this, _);

          return _super17.apply(this, arguments);
        }

        _createClass(_, null, [{
          key: "parse",
          value: function parse(t) {
            return Q.parse(t, function (t) {
              var e = 0;

              var _iterator10 = _createForOfIteratorHelper(t),
                  _step10;

              try {
                for (_iterator10.s(); !(_step10 = _iterator10.n()).done;) {
                  var r = _step10.value;
                  e += r;
                }
              } catch (err) {
                _iterator10.e(err);
              } finally {
                _iterator10.f();
              }

              return e;
            });
          }
        }]);

        return _;
      }(Q);

      var tt = /*#__PURE__*/function () {
        function tt(t, e) {
          _classCallCheck(this, tt);

          this.args = t, this.calculate = e;
        }

        _createClass(tt, [{
          key: "evaluate",
          value: function evaluate(t, e) {
            var r;
            return this.args && (r = this.args.map(function (r) {
              return r.evaluate(t, e);
            })), this.calculate(r);
          }
        }], [{
          key: "parse",
          value: function parse(t) {
            var e = t.slice(1).map(function (t) {
              return Et(t);
            });
            return new tt(e, tt.ops[t[0]]);
          }
        }]);

        return tt;
      }();

      tt.ops = {
        abs: function abs(t) {
          return Math.abs(t[0]);
        },
        acos: function acos(t) {
          return Math.acos(t[0]);
        },
        asin: function asin(t) {
          return Math.asin(t[0]);
        },
        atan: function atan(t) {
          return Math.atan(t[0]);
        },
        ceil: function ceil(t) {
          return Math.ceil(t[0]);
        },
        cos: function cos(t) {
          return Math.cos(t[0]);
        },
        e: function e() {
          return Math.E;
        },
        floor: function floor(t) {
          return Math.floor(t[0]);
        },
        ln: function ln(t) {
          return Math.log(t[0]);
        },
        ln2: function ln2() {
          return Math.LN2;
        },
        log10: function log10(t) {
          return Math.log(t[0]) / Math.LN10;
        },
        log2: function log2(t) {
          return Math.log(t[0]) / Math.LN2;
        },
        max: function max(t) {
          return Math.max.apply(Math, _toConsumableArray(t));
        },
        min: function min(t) {
          return Math.min.apply(Math, _toConsumableArray(t));
        },
        pi: function pi() {
          return Math.PI;
        },
        round: function round(t) {
          return Math.round(t[0]);
        },
        sin: function sin(t) {
          return Math.sin(t[0]);
        },
        sqrt: function sqrt(t) {
          return Math.sqrt(t[0]);
        },
        tan: function tan(t) {
          return Math.tan(t[0]);
        }
      };

      var et = /*#__PURE__*/function () {
        function et(t) {
          _classCallCheck(this, et);

          this.args = t;
        }

        _createClass(et, [{
          key: "evaluate",
          value: function evaluate(t, e) {
            return this.args.map(function (r) {
              return r.evaluate(t, e);
            }).join("");
          }
        }], [{
          key: "parse",
          value: function parse(t) {
            return new et(t.slice(1).map(function (t) {
              return Et(t);
            }));
          }
        }]);

        return et;
      }();

      var rt = /*#__PURE__*/function () {
        function rt(t, e) {
          _classCallCheck(this, rt);

          this.arg = t, this.calculate = e;
        }

        _createClass(rt, [{
          key: "evaluate",
          value: function evaluate(t, e) {
            return this.calculate(this.arg.evaluate(t, e));
          }
        }], [{
          key: "parse",
          value: function parse(t) {
            if (2 !== t.length) throw new Error("".concat(t[0], " expects 1 argument."));
            var e = Et(t[1]);
            return new rt(e, rt.ops[t[0]]);
          }
        }]);

        return rt;
      }();

      rt.ops = {
        downcase: function downcase(t) {
          return t.toLowerCase();
        },
        upcase: function upcase(t) {
          return t.toUpperCase();
        }
      };
      var at = {
        kind: "null"
      },
          st = {
        kind: "number"
      },
          nt = {
        kind: "string"
      },
          ot = {
        kind: "boolean"
      },
          it = {
        kind: "color"
      },
          lt = {
        kind: "object"
      },
          ut = {
        kind: "value"
      },
          ct = {
        kind: "error"
      };

      function ht(t, e) {
        return {
          kind: "array",
          itemType: t,
          n: e
        };
      }

      var pt = [at, st, nt, ot, it, lt, ht(ut)];

      function ft(t) {
        if ("array" === t.kind) {
          var e = ft(t.itemType);
          return "number" == typeof t.n ? "array<".concat(e, ", ").concat(t.n, ">") : "value" === t.itemType.kind ? "array" : "array<".concat(e, ">");
        }

        return t.kind;
      }

      function gt(e) {
        if (null === e) return at;
        if ("string" == typeof e) return nt;
        if ("boolean" == typeof e) return ot;
        if ("number" == typeof e) return st;
        if (e instanceof _Color_js__WEBPACK_IMPORTED_MODULE_0__["default"]) return it;

        if (Array.isArray(e)) {
          var t;

          var _iterator11 = _createForOfIteratorHelper(e),
              _step11;

          try {
            for (_iterator11.s(); !(_step11 = _iterator11.n()).done;) {
              var r = _step11.value;

              var _e10 = gt(r);

              if (t) {
                if (t === _e10) continue;
                t = ut;
                break;
              }

              t = _e10;
            }
          } catch (err) {
            _iterator11.e(err);
          } finally {
            _iterator11.f();
          }

          return ht(t || ut, e.length);
        }

        return lt;
      }

      function wt(t, e) {
        if ("error" === t.kind) return null;

        if ("array" === e.kind) {
          if ("array" === t.kind && (0 === t.n && "value" === t.itemType.kind || !wt(t.itemType, e.itemType)) && ("number" != typeof e.n || e.n === t.n)) return null;
        } else {
          if (e.kind === t.kind) return null;

          if ("value" === e.kind) {
            var _iterator12 = _createForOfIteratorHelper(pt),
                _step12;

            try {
              for (_iterator12.s(); !(_step12 = _iterator12.n()).done;) {
                var _e11 = _step12.value;
                if (!wt(_e11, t)) return null;
              }
            } catch (err) {
              _iterator12.e(err);
            } finally {
              _iterator12.f();
            }
          }
        }

        return "Expected ".concat(ft(e), " but found ").concat(ft(t), " instead.");
      }

      function mt(e) {
        var r = typeof e;
        return null === e ? "" : "string" === r || "number" === r || "boolean" === r ? String(e) : e instanceof _Color_js__WEBPACK_IMPORTED_MODULE_0__["default"] ? e.toString() : JSON.stringify(e);
      }

      var vt = /*#__PURE__*/function () {
        function vt(t, e) {
          _classCallCheck(this, vt);

          this.type = t, this.args = e;
        }

        _createClass(vt, [{
          key: "evaluate",
          value: function evaluate(t, e) {
            var _iterator13 = _createForOfIteratorHelper(this.args),
                _step13;

            try {
              for (_iterator13.s(); !(_step13 = _iterator13.n()).done;) {
                var r = _step13.value;
                var a = r.evaluate(t, e);
                if (!wt(gt(a), this.type)) return a;
              }
            } catch (err) {
              _iterator13.e(err);
            } finally {
              _iterator13.f();
            }

            return null;
          }
        }], [{
          key: "parse",
          value: function parse(t) {
            var e = t[0];
            if (t.length < 2) throw new Error("".concat(e, " expects at least one argument."));
            var r,
                a = 1;

            if ("array" === e) {
              if (t.length > 2) {
                switch (t[1]) {
                  case "string":
                    r = nt;
                    break;

                  case "number":
                    r = st;
                    break;

                  case "boolean":
                    r = ot;
                    break;

                  default:
                    throw new Error('"array" type argument must be string, number or boolean');
                }

                a++;
              } else r = ut;

              var _e12;

              if (t.length > 3) {
                if (_e12 = t[2], null !== _e12 && ("number" != typeof _e12 || _e12 < 0 || _e12 !== Math.floor(_e12))) throw new Error('"array" length argument must be a positive integer literal');
                a++;
              }

              r = ht(r, _e12);
            } else switch (e) {
              case "string":
                r = nt;
                break;

              case "number":
                r = st;
                break;

              case "boolean":
                r = ot;
                break;

              case "object":
                r = lt;
            }

            var s = [];

            for (; a < t.length; a++) {
              var _e13 = Et(t[a]);

              s.push(_e13);
            }

            return new vt(r, s);
          }
        }]);

        return vt;
      }();

      var bt = /*#__PURE__*/function () {
        function bt(t, e) {
          _classCallCheck(this, bt);

          this.type = t, this.args = e;
        }

        _createClass(bt, [{
          key: "evaluate",
          value: function evaluate(e, r) {
            if (this.type === ot) return Boolean(this.args[0].evaluate(e, r));
            if (this.type === nt) return mt(this.args[0].evaluate(e, r));

            if (this.type === st) {
              var _iterator14 = _createForOfIteratorHelper(this.args),
                  _step14;

              try {
                for (_iterator14.s(); !(_step14 = _iterator14.n()).done;) {
                  var t = _step14.value;
                  var a = t.evaluate(e, r);
                  if (null === a) return 0;
                  var s = Number(a);
                  if (!isNaN(s)) return s;
                }
              } catch (err) {
                _iterator14.e(err);
              } finally {
                _iterator14.f();
              }

              return null;
            }

            if (this.type === it) {
              var _iterator15 = _createForOfIteratorHelper(this.args),
                  _step15;

              try {
                for (_iterator15.s(); !(_step15 = _iterator15.n()).done;) {
                  var _a13 = _step15.value;

                  var _s4 = _a13.evaluate(e, r);

                  if (_s4 instanceof _Color_js__WEBPACK_IMPORTED_MODULE_0__["default"]) return _s4;
                  if ("string" == typeof _s4) return _Color_js__WEBPACK_IMPORTED_MODULE_0__["default"].fromString(_s4);
                  if (Array.isArray(_s4) && (3 === _s4.length || 4 === _s4.length)) return _Color_js__WEBPACK_IMPORTED_MODULE_0__["default"].fromArray(_s4);
                }
              } catch (err) {
                _iterator15.e(err);
              } finally {
                _iterator15.f();
              }

              return null;
            }
          }
        }], [{
          key: "parse",
          value: function parse(t) {
            var e = t[0];

            if ("to-boolean" === e || "to-string" === e) {
              if (2 !== t.length) throw new Error("".concat(e, " expects one argument."));
            } else if (t.length < 2) throw new Error("".concat(e, " expects at least one argument."));

            var r = bt.types[e],
                a = [];

            for (var _e14 = 1; _e14 < t.length; _e14++) {
              var _r12 = Et(t[_e14]);

              a.push(_r12);
            }

            return new bt(r, a);
          }
        }]);

        return bt;
      }();

      bt.types = {
        "to-boolean": ot,
        "to-color": it,
        "to-number": st,
        "to-string": nt
      };

      var dt = /*#__PURE__*/function () {
        function dt(t) {
          _classCallCheck(this, dt);

          this.val = t;
        }

        _createClass(dt, [{
          key: "evaluate",
          value: function evaluate(t, e) {
            return this.val;
          }
        }], [{
          key: "parse",
          value: function parse(t) {
            if (2 !== t.length) throw new Error('"literal" expects 1 argument');
            return new dt(t[1]);
          }
        }]);

        return dt;
      }();

      var yt = /*#__PURE__*/function () {
        function yt(t) {
          _classCallCheck(this, yt);

          this.arg = t;
        }

        _createClass(yt, [{
          key: "evaluate",
          value: function evaluate(t, e) {
            return ft(gt(this.arg.evaluate(t, e)));
          }
        }], [{
          key: "parse",
          value: function parse(t) {
            if (2 !== t.length) throw new Error('"typeof" expects 1 argument');
            return new yt(Et(t[1]));
          }
        }]);

        return yt;
      }();

      var xt = {
        array: vt,
        "boolean": vt,
        collator: null,
        format: null,
        literal: dt,
        image: null,
        number: vt,
        "number-format": null,
        object: vt,
        string: vt,
        "to-boolean": bt,
        "to-color": bt,
        "to-number": bt,
        "to-string": bt,
        "typeof": yt,
        accumulated: null,
        "feature-state": null,
        "geometry-type": _views_2d_engine_vectorTiles_expression_data_js__WEBPACK_IMPORTED_MODULE_1__["GeomType"],
        id: _views_2d_engine_vectorTiles_expression_data_js__WEBPACK_IMPORTED_MODULE_1__["ID"],
        "line-progress": null,
        properties: _views_2d_engine_vectorTiles_expression_data_js__WEBPACK_IMPORTED_MODULE_1__["Properties"],
        at: U,
        get: B,
        has: F,
        "in": G,
        "index-of": J,
        length: D,
        slice: H,
        "!": v,
        "!=": p,
        "<": f,
        "<=": g,
        "==": h,
        ">": w,
        ">=": m,
        all: b,
        any: d,
        "case": x,
        coalesce: E,
        match: M,
        within: null,
        interpolate: S,
        "interpolate-hcl": S,
        "interpolate-lab": S,
        step: P,
        "let": null,
        "var": null,
        concat: et,
        downcase: rt,
        "is-supported-script": null,
        "resolved-locale": null,
        upcase: rt,
        rgb: i,
        rgba: l,
        "to-rgba": u,
        "-": V,
        "*": W,
        "/": X,
        "%": Y,
        "^": Z,
        "+": _,
        abs: tt,
        acos: tt,
        asin: tt,
        atan: tt,
        ceil: tt,
        cos: tt,
        e: tt,
        floor: tt,
        ln: tt,
        ln2: tt,
        log10: tt,
        log2: tt,
        max: tt,
        min: tt,
        pi: tt,
        round: tt,
        sin: tt,
        sqrt: tt,
        tan: tt,
        zoom: _views_2d_engine_vectorTiles_expression_data_js__WEBPACK_IMPORTED_MODULE_1__["Zoom"],
        "heatmap-density": null,
        "has-id": K,
        none: y
      };

      function Et(t) {
        if (null !== t && "string" != typeof t && "boolean" != typeof t && "number" != typeof t || (t = ["literal", t]), !Array.isArray(t) || 0 === t.length) throw new Error("Expression must be a non empty array");
        var e = t[0];
        if ("string" != typeof e) throw new Error("First element of expression must be a string");
        var r = xt[e];
        if (void 0 === r) throw new Error("Invalid expression operator \"".concat(e, "\""));
        if (!r) throw new Error("Unimplemented expression operator \"".concat(e, "\""));
        return r.parse(t);
      }
      /***/

    },

    /***/
    "q9bE":
    /*!**********************************************************************************!*\
      !*** ./node_modules/@arcgis/core/views/2d/engine/vectorTiles/expression/data.js ***!
      \**********************************************************************************/

    /*! exports provided: GeomType, ID, Properties, Zoom */

    /***/
    function q9bE(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "GeomType", function () {
        return r;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ID", function () {
        return e;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "Properties", function () {
        return t;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "Zoom", function () {
        return n;
      });
      /*
      All material copyright ESRI, All Rights Reserved, unless otherwise specified.
      See https://js.arcgis.com/4.18/esri/copyright.txt for details.
      */


      var e = /*#__PURE__*/function () {
        function e() {
          _classCallCheck(this, e);
        }

        _createClass(e, [{
          key: "evaluate",
          value: function evaluate(_e15, r) {
            return _e15.id;
          }
        }], [{
          key: "parse",
          value: function parse(r) {
            if (r.length > 1) throw new Error('"id" does not expect arguments');
            return new e();
          }
        }]);

        return e;
      }();

      var r = /*#__PURE__*/function () {
        function r() {
          _classCallCheck(this, r);
        }

        _createClass(r, [{
          key: "evaluate",
          value: function evaluate(e, _r13) {
            switch (e.type) {
              case 0:
                return "Unknown";

              case 1:
                return "Point";

              case 2:
                return "LineString";

              case 3:
                return "Polygon";
            }
          }
        }], [{
          key: "parse",
          value: function parse(e) {
            if (e.length > 1) throw new Error('"geometry-type" does not expect arguments');
            return new r();
          }
        }]);

        return r;
      }();

      var t = /*#__PURE__*/function () {
        function t() {
          _classCallCheck(this, t);
        }

        _createClass(t, [{
          key: "evaluate",
          value: function evaluate(e, r) {
            return e.values;
          }
        }], [{
          key: "parse",
          value: function parse(e) {
            if (e.length > 1) throw new Error('"properties" does not expect arguments');
            return new t();
          }
        }]);

        return t;
      }();

      var n = /*#__PURE__*/function () {
        function n() {
          _classCallCheck(this, n);
        }

        _createClass(n, [{
          key: "evaluate",
          value: function evaluate(e, r) {
            return r;
          }
        }], [{
          key: "parse",
          value: function parse(e) {
            if (e.length > 1) throw new Error('"zoom" does not expect arguments');
            return new n();
          }
        }]);

        return n;
      }();
      /***/

    }
  }]);
})();
//# sourceMappingURL=default~VectorTileLayer-js~layers-VectorTileLayerView2D-js~views-2d-engine-vectorTiles-WorkerTileHandler-js-es5.js.map