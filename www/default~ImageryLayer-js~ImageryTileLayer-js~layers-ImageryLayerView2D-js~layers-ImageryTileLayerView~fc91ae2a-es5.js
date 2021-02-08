(function () {
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

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["default~ImageryLayer-js~ImageryTileLayer-js~layers-ImageryLayerView2D-js~layers-ImageryTileLayerView~fc91ae2a"], {
    /***/
    "Piei":
    /*!****************************************************************!*\
      !*** ./node_modules/@arcgis/core/layers/support/PixelBlock.js ***!
      \****************************************************************/

    /*! exports provided: default */

    /***/
    function Piei(module, __webpack_exports__, __webpack_require__) {
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


      var _core_lang_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ../../core/lang.js */
      "f/qv");
      /* harmony import */


      var _core_maybe_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ../../core/maybe.js */
      "srIe");
      /* harmony import */


      var _core_Logger_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ../../core/Logger.js */
      "6S2I");
      /* harmony import */


      var _core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ../../core/accessorSupport/decorators/property.js */
      "WbKI");
      /* harmony import */


      var _core_accessorSupport_decorators_cast_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ../../core/accessorSupport/decorators/cast.js */
      "Gj5k");
      /* harmony import */


      var _core_accessorSupport_decorators_subclass_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! ../../core/accessorSupport/decorators/subclass.js */
      "04ZG");
      /* harmony import */


      var _core_Error_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! ../../core/Error.js */
      "zlDU");
      /* harmony import */


      var _core_urlUtils_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! ../../core/urlUtils.js */
      "4EHJ");
      /* harmony import */


      var _core_uuid_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
      /*! ../../core/uuid.js */
      "ju1D");
      /* harmony import */


      var _portal_support_resourceExtension_js__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
      /*! ../../portal/support/resourceExtension.js */
      "9AIY");
      /* harmony import */


      var _core_JSONSupport_js__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
      /*! ../../core/JSONSupport.js */
      "ag7Y");
      /*
      All material copyright ESRI, All Rights Reserved, unless otherwise specified.
      See https://js.arcgis.com/4.18/esri/copyright.txt for details.
      */


      var _n;

      var p = _core_Logger_js__WEBPACK_IMPORTED_MODULE_4__["default"].getLogger("esri.layers.support.PixelBlock");

      var c = _n = /*#__PURE__*/function (_core_JSONSupport_js_) {
        _inherits(n, _core_JSONSupport_js_);

        var _super = _createSuper(n);

        function n(t) {
          var _this;

          _classCallCheck(this, n);

          _this = _super.call(this, t), _this.width = null, _this.height = null, _this.pixelType = "f32", _this.validPixelCount = null, _this.mask = null, _this.maskIsAlpha = !1, _this.pixels = null, _this.statistics = null;
          return _this;
        }

        _createClass(n, [{
          key: "castPixelType",
          value: function castPixelType(t) {
            if (!t) return "f32";
            var e = t.toLowerCase();
            return ["u1", "u2", "u4"].indexOf(e) > -1 ? e = "u8" : -1 === ["unknown", "u8", "s8", "u16", "s16", "u32", "s32", "f32", "f64"].indexOf(e) && (e = "f32"), e;
          }
        }, {
          key: "getPlaneCount",
          value: function getPlaneCount() {
            return this.pixels && this.pixels.length;
          }
        }, {
          key: "addData",
          value: function addData(t) {
            if (!t.pixels || t.pixels.length !== this.width * this.height) throw new _core_Error_js__WEBPACK_IMPORTED_MODULE_8__["default"]("pixelblock:invalid-or-missing-pixels", "add data requires valid pixels array that has same length defined by pixel block width * height");
            this.pixels || (this.pixels = []), this.statistics || (this.statistics = []), this.pixels.push(t.pixels), this.statistics.push(t.statistics || {
              minValue: null,
              maxValue: null
            });
          }
        }, {
          key: "getAsRGBA",
          value: function getAsRGBA() {
            var t = new ArrayBuffer(this.width * this.height * 4);

            switch (this.pixelType) {
              case "s8":
              case "s16":
              case "u16":
              case "s32":
              case "u32":
              case "f32":
              case "f64":
                this._fillFromNon8Bit(t);

                break;

              default:
                this._fillFrom8Bit(t);

            }

            return new Uint8ClampedArray(t);
          }
        }, {
          key: "getAsRGBAFloat",
          value: function getAsRGBAFloat() {
            var t = new Float32Array(this.width * this.height * 4);
            return this._fillFrom32Bit(t), t;
          }
        }, {
          key: "updateStatistics",
          value: function updateStatistics() {
            var _this2 = this;

            this.statistics = this.pixels.map(function (t) {
              return _this2._calculateBandStatistics(t, _this2.mask);
            });
            var t = this.mask;
            var e = 0;
            if (t) for (var s = 0; s < t.length; s++) {
              t[s] && e++;
            } else e = this.width * this.height;
            this.validPixelCount = e;
          }
        }, {
          key: "clamp",
          value: function clamp(t) {
            if (!t || "f64" === t || "f32" === t) return;
            var e;

            switch (t) {
              case "u8":
                e = [0, 255];
                break;

              case "u16":
                e = [0, 65535];
                break;

              case "u32":
                e = [0, 4294967295];
                break;

              case "s8":
                e = [-128, 127];
                break;

              case "s16":
                e = [-32768, 32767];
                break;

              case "s32":
                e = [-2147483648, 2147483647];
                break;

              default:
                e = [-34e38, 34e38];
            }

            var _e = e,
                _e2 = _slicedToArray(_e, 2),
                s = _e2[0],
                i = _e2[1],
                r = this.pixels,
                l = this.width * this.height,
                a = r.length;

            var o, h, p;
            var c = [];

            for (var _e3 = 0; _e3 < a; _e3++) {
              p = _n.createEmptyBand(t, l), o = r[_e3];

              for (var _t = 0; _t < l; _t++) {
                h = o[_t], p[_t] = h > i ? i : h < s ? s : h;
              }

              c.push(p);
            }

            this.pixels = c, this.pixelType = t;
          }
        }, {
          key: "extractBands",
          value: function extractBands(t) {
            var _this3 = this;

            if (Object(_core_maybe_js__WEBPACK_IMPORTED_MODULE_3__["isNone"])(t) || 0 === t.length || null == this.pixels || 0 === this.pixels.length) return this;
            var e = this.pixels.length,
                i = t.some(function (t) {
              return t >= _this3.pixels.length;
            }),
                r = e === t.length && !t.some(function (t, e) {
              return t !== e;
            });
            return i || r ? this : new _n({
              pixelType: this.pixelType,
              width: this.width,
              height: this.height,
              mask: this.mask,
              validPixelCount: this.validPixelCount,
              maskIsAlpha: this.maskIsAlpha,
              pixels: t.map(function (t) {
                return _this3.pixels[t];
              }),
              statistics: this.statistics && t.map(function (t) {
                return _this3.statistics[t];
              })
            });
          }
        }, {
          key: "clone",
          value: function clone() {
            var t = new _n({
              width: this.width,
              height: this.height,
              pixelType: this.pixelType,
              maskIsAlpha: this.maskIsAlpha,
              validPixelCount: this.validPixelCount
            });
            var s;
            this.mask && (this.mask instanceof Uint8Array ? t.mask = new Uint8Array(this.mask) : t.mask = this.mask.slice(0));

            var i = _n.getPixelArrayConstructor(this.pixelType);

            if (this.pixels && this.pixels.length > 0) {
              t.pixels = [];
              var e = this.pixels[0].slice;

              for (s = 0; s < this.pixels.length; s++) {
                t.pixels[s] = e ? this.pixels[s].slice(0, this.pixels[s].length) : new i(this.pixels[s]);
              }
            }

            if (this.statistics) for (t.statistics = [], s = 0; s < this.statistics.length; s++) {
              t.statistics[s] = Object(_core_lang_js__WEBPACK_IMPORTED_MODULE_2__["clone"])(this.statistics[s]);
            }
            return t;
          }
        }, {
          key: "_fillFrom8Bit",
          value: function _fillFrom8Bit(t) {
            var e = this.mask,
                s = this.maskIsAlpha,
                i = this.pixels;
            if (!t || !i || !i.length) return void p.error("getAsRGBA()", "Unable to convert to RGBA. The input pixel block is empty.");
            var r, l, a, o;
            r = l = a = i[0], i.length >= 3 ? (l = i[1], a = i[2]) : 2 === i.length && (l = i[1]);

            var h = new Uint32Array(t),
                _n2 = this.width * this.height;

            if (r.length === _n2) {
              if (e && e.length === _n2) {
                if (s) for (o = 0; o < _n2; o++) {
                  e[o] && (h[o] = e[o] << 24 | a[o] << 16 | l[o] << 8 | r[o]);
                } else for (o = 0; o < _n2; o++) {
                  e[o] && (h[o] = 255 << 24 | a[o] << 16 | l[o] << 8 | r[o]);
                }
              } else for (o = 0; o < _n2; o++) {
                h[o] = 255 << 24 | a[o] << 16 | l[o] << 8 | r[o];
              }
            } else p.error("getAsRGBA()", "Unable to convert to RGBA. The pixelblock is invalid.");
          }
        }, {
          key: "_fillFromNon8Bit",
          value: function _fillFromNon8Bit(t) {
            var e = this.pixels,
                s = this.mask,
                i = this.statistics;
            if (!t || !e || !e.length) return void p.error("getAsRGBA()", "Unable to convert to RGBA. The input pixel block is empty.");
            var r = this.pixelType;
            var l = 1,
                a = 0,
                o = 1;
            if (i && i.length > 0) a = i.map(function (t) {
              return t.minValue;
            }).reduce(function (t, e) {
              return Math.min(t, e);
            }), o = i.map(function (t) {
              return t.maxValue - t.minValue;
            }).reduce(function (t, e) {
              return Math.max(t, e);
            }), l = 255 / o;else {
              var _t2 = 255;
              "s8" === r ? (a = -128, _t2 = 127) : "u16" === r ? _t2 = 65535 : "s16" === r ? (a = -32768, _t2 = 32767) : "u32" === r ? _t2 = 4294967295 : "s32" === r ? (a = -2147483648, _t2 = 2147483647) : "f32" === r ? (a = -34e38, _t2 = 34e38) : "f64" === r && (a = -Number.MAX_VALUE, _t2 = Number.MAX_VALUE), l = 255 / (_t2 - a);
            }

            var h = new Uint32Array(t),
                _n3 = this.width * this.height;

            var c, u, m, x, f;
            if (c = u = m = e[0], c.length !== _n3) return p.error("getAsRGBA()", "Unable to convert to RGBA. The pixelblock is invalid.");
            if (e.length >= 2) {
              if (u = e[1], e.length >= 3 && (m = e[2]), s && s.length === _n3) for (x = 0; x < _n3; x++) {
                s[x] && (h[x] = 255 << 24 | (m[x] - a) * l << 16 | (u[x] - a) * l << 8 | (c[x] - a) * l);
              } else for (x = 0; x < _n3; x++) {
                h[x] = 255 << 24 | (m[x] - a) * l << 16 | (u[x] - a) * l << 8 | (c[x] - a) * l;
              }
            } else if (s && s.length === _n3) for (x = 0; x < _n3; x++) {
              f = (c[x] - a) * l, s[x] && (h[x] = 255 << 24 | f << 16 | f << 8 | f);
            } else for (x = 0; x < _n3; x++) {
              f = (c[x] - a) * l, h[x] = 255 << 24 | f << 16 | f << 8 | f;
            }
          }
        }, {
          key: "_fillFrom32Bit",
          value: function _fillFrom32Bit(t) {
            var e = this.pixels,
                s = this.mask;
            if (!t || !e || !e.length) return p.error("getAsRGBAFloat()", "Unable to convert to RGBA. The input pixel block is empty.");
            var i, r, l, a;
            i = r = l = e[0], e.length >= 3 ? (r = e[1], l = e[2]) : 2 === e.length && (r = e[1]);
            var o = this.width * this.height;
            if (i.length !== o) return p.error("getAsRGBAFloat()", "Unable to convert to RGBA. The pixelblock is invalid.");
            var h = 0;
            if (s && s.length === o) for (a = 0; a < o; a++) {
              t[h++] = i[a], t[h++] = r[a], t[h++] = l[a], t[h++] = 1 & s[a];
            } else for (a = 0; a < o; a++) {
              t[h++] = i[a], t[h++] = r[a], t[h++] = l[a], t[h++] = 1;
            }
          }
        }, {
          key: "_calculateBandStatistics",
          value: function _calculateBandStatistics(t, e) {
            var s = 1 / 0,
                i = -1 / 0;
            var r = t.length;
            var l,
                a = 0;
            if (e) for (l = 0; l < r; l++) {
              e[l] && (a = t[l], s = a < s ? a : s, i = a > i ? a : i);
            } else for (l = 0; l < r; l++) {
              a = t[l], s = a < s ? a : s, i = a > i ? a : i;
            }
            return {
              minValue: s,
              maxValue: i
            };
          }
        }], [{
          key: "createEmptyBand",
          value: function createEmptyBand(t, e) {
            return new (_n.getPixelArrayConstructor(t))(e);
          }
        }, {
          key: "getPixelArrayConstructor",
          value: function getPixelArrayConstructor(t) {
            var e;

            switch (t) {
              case "u1":
              case "u2":
              case "u4":
              case "u8":
                e = Uint8Array;
                break;

              case "u16":
                e = Uint16Array;
                break;

              case "u32":
                e = Uint32Array;
                break;

              case "s8":
                e = Int8Array;
                break;

              case "s16":
                e = Int16Array;
                break;

              case "s32":
                e = Int32Array;
                break;

              case "u32":
                e = Uint32Array;
                break;

              case "f32":
                e = Float32Array;
                break;

              case "f64":
                e = Float64Array;
                break;

              case "c64":
              case "c128":
              case "unknown":
                e = Float32Array;
            }

            return e;
          }
        }]);

        return n;
      }(_core_JSONSupport_js__WEBPACK_IMPORTED_MODULE_12__["JSONSupport"]);

      Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_5__["property"])({
        json: {
          write: !0
        }
      })], c.prototype, "width", void 0), Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_5__["property"])({
        json: {
          write: !0
        }
      })], c.prototype, "height", void 0), Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_5__["property"])({
        json: {
          write: !0
        }
      })], c.prototype, "pixelType", void 0), Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_cast_js__WEBPACK_IMPORTED_MODULE_6__["cast"])("pixelType")], c.prototype, "castPixelType", null), Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_5__["property"])({
        json: {
          write: !0
        }
      })], c.prototype, "validPixelCount", void 0), Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_5__["property"])({
        json: {
          write: !0
        }
      })], c.prototype, "mask", void 0), Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_5__["property"])({
        json: {
          write: !0
        }
      })], c.prototype, "maskIsAlpha", void 0), Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_5__["property"])({
        json: {
          write: !0
        }
      })], c.prototype, "pixels", void 0), Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_5__["property"])({
        json: {
          write: !0
        }
      })], c.prototype, "statistics", void 0), c = _n = Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_subclass_js__WEBPACK_IMPORTED_MODULE_7__["subclass"])("esri.layers.support.PixelBlock")], c);
      var u = c;
      /* harmony default export */

      __webpack_exports__["default"] = u;
      /***/
    },

    /***/
    "ne7T":
    /*!********************************************************************************!*\
      !*** ./node_modules/@arcgis/core/layers/support/rasterFunctions/pixelUtils.js ***!
      \********************************************************************************/

    /*! exports provided: approximateTransform, clip, colorize, createColormapLUT, createContrastBrightnessLUT, createStretchLUT, estimateStatisticsFromHistograms, estimateStatisticsHistograms, extractBands, getClipBounds, lookupPixels, mosaic, mosaicPixelData, remapColor, resampleByMajority, setValidBoundary, split, stretch */

    /***/
    function ne7T(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "approximateTransform", function () {
        return U;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "clip", function () {
        return M;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "colorize", function () {
        return l;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "createColormapLUT", function () {
        return i;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "createContrastBrightnessLUT", function () {
        return s;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "createStretchLUT", function () {
        return a;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "estimateStatisticsFromHistograms", function () {
        return r;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "estimateStatisticsHistograms", function () {
        return o;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "extractBands", function () {
        return n;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "getClipBounds", function () {
        return x;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "lookupPixels", function () {
        return f;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "mosaic", function () {
        return c;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "mosaicPixelData", function () {
        return p;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "remapColor", function () {
        return u;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "resampleByMajority", function () {
        return d;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "setValidBoundary", function () {
        return m;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "split", function () {
        return A;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "stretch", function () {
        return h;
      });
      /* harmony import */


      var _PixelBlock_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ../PixelBlock.js */
      "Piei");
      /*
      All material copyright ESRI, All Rights Reserved, unless otherwise specified.
      See https://js.arcgis.com/4.18/esri/copyright.txt for details.
      */


      var e = function e(t) {
        return t && "esri.layers.support.PixelBlock" === t.declaredClass && t.pixels && t.pixels.length > 0;
      };

      function n(n, i) {
        if (!i || !e(n)) return n;
        var l = n.pixels.length;
        return i && i.some(function (t) {
          return t >= l;
        }) || 1 === l && 1 === i.length && 0 === i[0] ? n : l !== i.length || i.some(function (t, e) {
          return t !== e;
        }) ? new _PixelBlock_js__WEBPACK_IMPORTED_MODULE_0__["default"]({
          pixelType: n.pixelType,
          width: n.width,
          height: n.height,
          mask: n.mask,
          validPixelCount: n.validPixelCount,
          maskIsAlpha: n.maskIsAlpha,
          pixels: i.map(function (t) {
            return n.pixels[t];
          }),
          statistics: n.statistics && i.map(function (t) {
            return n.statistics[t];
          })
        }) : n;
      }

      function i(t) {
        if (!t) return;
        var e = t.colormap;
        if (!e || 0 === e.length) return;
        var n = e.sort(function (t, e) {
          return t[0] - e[0];
        });
        var i = 0;
        n[0][0] < 0 && (i = n[0][0]);
        var l = Math.max(256, n[n.length - 1][0] - i + 1),
            o = new Uint8Array(4 * l),
            r = [];
        var a,
            s = 0,
            h = 0;
        var f = 5 === n[0].length;
        if (l > 65536) return n.forEach(function (t) {
          r[t[0] - i] = f ? t.slice(1) : t.slice(1).concat([255]);
        }), {
          indexed2DColormap: r,
          offset: i,
          alphaSpecified: f
        };
        if (t.fillUnspecified) for (a = n[h], s = a[0] - i; s < l; s++) {
          o[4 * s] = a[1], o[4 * s + 1] = a[2], o[4 * s + 2] = a[3], o[4 * s + 3] = f ? a[4] : 255, s === a[0] - i && (a = h === n.length - 1 ? a : n[++h]);
        } else for (s = 0; s < n.length; s++) {
          a = n[s], h = 4 * (a[0] - i), o[h] = a[1], o[h + 1] = a[2], o[h + 2] = a[3], o[h + 3] = f ? a[4] : 255;
        }
        return {
          indexedColormap: o,
          offset: i,
          alphaSpecified: f
        };
      }

      function l(t, n) {
        if (!e(t)) return t;
        if (!n && (n.indexedColormap || n.indexed2DColormap)) return t;
        var i = t.clone(),
            l = i.pixels;
        var o = i.mask;
        var r = i.width * i.height;
        if (1 !== l.length) return t;
        var a = n.indexedColormap,
            s = n.indexed2DColormap,
            h = n.offset,
            f = n.alphaSpecified,
            u = a.length - 1;
        var x = 0;
        var p = l[0],
            c = new Uint8Array(p.length),
            m = new Uint8Array(p.length),
            d = new Uint8Array(p.length);
        var w,
            y = 0;
        if (a) {
          if (o) for (x = 0; x < r; x++) {
            o[x] && (y = 4 * (p[x] - h), y < h || y > u ? o[x] = 0 : (c[x] = a[y], m[x] = a[y + 1], d[x] = a[y + 2], o[x] = a[y + 3]));
          } else {
            for (o = new Uint8Array(r), x = 0; x < r; x++) {
              y = 4 * (p[x] - h), y < h || y > u ? o[x] = 0 : (c[x] = a[y], m[x] = a[y + 1], d[x] = a[y + 2], o[x] = a[y + 3]);
            }

            i.mask = o;
          }
        } else if (o) for (x = 0; x < r; x++) {
          o[x] && (w = s[p[x]], c[x] = w[0], m[x] = w[1], d[x] = w[2], o[x] = w[3]);
        } else {
          for (o = new Uint8Array(r), x = 0; x < r; x++) {
            w = s[p[x]], c[x] = w[0], m[x] = w[1], d[x] = w[2], o[x] = w[3];
          }

          i.mask = o;
        }
        return i.pixels = [c, m, d], i.statistics = null, i.pixelType = "u8", i.maskIsAlpha = f, i;
      }

      function o(t) {
        if (!e(t)) return null;
        t.statistics || t.updateStatistics();
        var n = t.pixels,
            i = t.mask,
            l = t.pixelType,
            o = t.statistics,
            r = t.width * t.height,
            a = n.length;
        var s, h, f, u, x;
        var p = [],
            c = [];
        var m, d, w, y, g, M, k, A, U, C;
        var T = 256;

        for (u = 0; u < a; u++) {
          if (m = new Uint32Array(T), w = n[u], "u8" === l) {
            if (s = -.5, h = 255.5, i) for (x = 0; x < r; x++) {
              i[x] && m[w[x]]++;
            } else for (x = 0; x < r; x++) {
              m[w[x]]++;
            }
          } else {
            if (s = o[u].minValue, h = o[u].maxValue, f = (h - s) / T, d = new Uint32Array(257), i) for (x = 0; x < r; x++) {
              i[x] && d[Math.floor((w[x] - s) / f)]++;
            } else for (x = 0; x < r; x++) {
              d[Math.floor((w[x] - s) / f)]++;
            }

            for (x = 0; x < 255; x++) {
              m[x] = d[x];
            }

            m[255] = d[255] + d[256];
          }

          for (p.push({
            min: s,
            max: h,
            size: T,
            counts: m
          }), y = 0, g = 0, A = 0, x = 0; x < T; x++) {
            y += m[x], g += x * m[x];
          }

          for (U = g / y, x = 0; x < T; x++) {
            A += m[x] * Math.pow(x - U, 2);
          }

          C = Math.sqrt(A / (y - 1)), f = (h - s) / T, M = (U + .5) * f + s, k = C * f, c.push({
            min: s,
            max: h,
            avg: M,
            stddev: k
          });
        }

        return {
          statistics: c,
          histograms: p
        };
      }

      function r(t) {
        var e = [];

        for (var _n4 = 0; _n4 < t.length; _n4++) {
          var _t$_n = t[_n4],
              _i2 = _t$_n.min,
              _l = _t$_n.max,
              _o = _t$_n.size,
              _r = _t$_n.counts;
          var _a = 0,
              _s2 = 0;

          for (var _t3 = 0; _t3 < _o; _t3++) {
            _a += _r[_t3], _s2 += _t3 * _r[_t3];
          }

          var _h = _s2 / _a;

          var _f = 0;

          for (var _t4 = 0; _t4 < _o; _t4++) {
            _f += _r[_t4] * Math.pow(_t4 - _h, 2);
          }

          var _u = (_l - _i2) / _o,
              _x = (_h + .5) * _u + _i2,
              _p = Math.sqrt(_f / (_a - 1)) * _u;

          e.push({
            min: _i2,
            max: _l,
            avg: _x,
            stddev: _p
          });
        }

        return e;
      }

      function a(t) {
        var e = t.minCutOff,
            n = t.maxCutOff,
            i = t.gamma,
            l = t.pixelType,
            o = t.outMin || 0,
            r = t.outMax || 255;
        if (-1 === ["u8", "u16", "s8", "s16"].indexOf(l)) return null;
        var a = e.length;
        var h,
            f,
            u = 0;
        "s8" === l ? u = -127 : "s16" === l && (u = -32767);
        var x = 256;
        ["u16", "s16"].indexOf(l) > -1 && (x = 65536);
        var p = [],
            c = [],
            m = r - o;

        for (h = 0; h < a; h++) {
          c[h] = n[h] - e[h], p[h] = m / (n[h] - e[h]);
        }

        var d = i && i.length >= a,
            w = [];
        if (d) for (h = 0; h < a; h++) {
          i[h] > 1 ? i[h] > 2 ? w[h] = 6.5 + Math.pow(i[h] - 2, 2.5) : w[h] = 6.5 + 100 * Math.pow(2 - i[h], 4) : w[h] = 1;
        }
        var y;
        var g = [];
        var M, k, A;
        if (d) for (h = 0; h < a; h++) {
          for (A = [], f = 0; f < x; f++) {
            M = f + u, y = (M - e[h]) / c[h], k = 1, i[h] > 1 && (k -= Math.pow(1 / m, y * w[h])), M < n[h] && M > e[h] ? A[f] = Math.floor(k * m * Math.pow(y, 1 / i[h])) + o : M >= n[h] ? A[f] = r : A[f] = o;
          }

          g[h] = A;
        } else for (h = 0; h < a; h++) {
          for (A = [], f = 0; f < x; f++) {
            M = f + u, M <= e[h] ? A[f] = o : M >= n[h] ? A[f] = r : A[f] = Math.floor((M - e[h]) / c[h] * m) + o;
          }

          g[h] = A;
        }

        if (null != t.contrastOffset) {
          var _e4 = s(t.contrastOffset, t.brightnessOffset);

          for (h = 0; h < a; h++) {
            for (A = g[h], f = 0; f < x; f++) {
              A[f] = _e4[A[f]];
            }
          }
        }

        return {
          lut: g,
          offset: u
        };
      }

      function s(t, e) {
        var n = Math.min(Math.max(t, -100), 100),
            i = Math.min(Math.max(e, -100), 100),
            l = 255;
        var o, r;
        var a = new Uint8Array(256);

        for (o = 0; o < 256; o++) {
          n > 0 && n < 100 ? r = (200 * o - 25500 + 510 * i) / (2 * (100 - n)) + 128 : n <= 0 && n > -100 ? r = (200 * o - 25500 + 510 * i) * (100 + n) / 2e4 + 128 : 100 === n ? (r = 200 * o - 25500 + 256 * (100 - n) + 510 * i, r = r > 0 ? l : 0) : -100 === n && (r = 128), a[o] = r > l ? l : r < 0 ? 0 : r;
        }

        return a;
      }

      function h(t, n) {
        if (!e(t)) return null;
        var i = t.clone(),
            l = i.pixels,
            o = i.mask,
            r = n.minCutOff,
            a = n.maxCutOff,
            s = n.gamma,
            h = n.outMin || 0,
            f = n.outMax || 255,
            u = i.width * i.height,
            x = l.length;
        var p, c, m, d, w;
        var y = f - h,
            g = [],
            M = [];

        for (p = 0; p < x; p++) {
          M[p] = a[p] - r[p], g[p] = y / (a[p] - r[p]);
        }

        var k = s && s.length >= x,
            A = [];
        if (k) for (p = 0; p < x; p++) {
          s[p] > 1 ? s[p] > 2 ? A[p] = 6.5 + Math.pow(s[p] - 2, 2.5) : A[p] = 6.5 + 100 * Math.pow(2 - s[p], 4) : A[p] = 1;
        }
        if (k) {
          if (null != o) {
            for (c = 0; c < u; c++) {
              if (o[c]) for (p = 0; p < x; p++) {
                m = l[p][c], w = (m - r[p]) / M[p], d = 1, s[p] > 1 && (d -= Math.pow(1 / y, w * A[p])), m < a[p] && m > r[p] ? l[p][c] = Math.floor(d * y * Math.pow(w, 1 / s[p])) + h : m >= a[p] ? l[p][c] = f : l[p][c] = h;
              }
            }
          } else for (c = 0; c < u; c++) {
            for (p = 0; p < x; p++) {
              m = l[p][c], w = (m - r[p]) / M[p], d = 1, s[p] > 1 && (d -= Math.pow(1 / y, w * A[p])), m < a[p] && m > r[p] ? l[p][c] = Math.floor(d * y * Math.pow(w, 1 / s[p])) + h : m >= a[p] ? l[p][c] = f : l[p][c] = h;
            }
          }
        } else if (null != o) {
          for (c = 0; c < u; c++) {
            if (o[c]) for (p = 0; p < x; p++) {
              m = l[p][c], m < a[p] && m > r[p] ? l[p][c] = Math.floor((m - r[p]) / M[p] * y) + h : m >= a[p] ? l[p][c] = f : l[p][c] = h;
            }
          }
        } else for (c = 0; c < u; c++) {
          for (p = 0; p < x; p++) {
            m = l[p][c], m < a[p] && m > r[p] ? l[p][c] = Math.floor((m - r[p]) / M[p] * y) + h : m >= a[p] ? l[p][c] = f : l[p][c] = h;
          }
        }
        return i.pixelType = "u8", i.updateStatistics(), i;
      }

      function f(n, i) {
        if (!e(n)) return null;
        var l = n.pixels,
            o = n.mask,
            r = n.width * n.height,
            a = l.length;
        var s = i.lut;
        var h = i.offset;
        var f, u;
        s && 1 === s[0].length && (s = l.map(function () {
          return s;
        }));
        var x = [];
        var p, c, m;
        if (h) {
          if (null == o) for (f = 0; f < a; f++) {
            for (p = l[f], c = s[f], m = new Uint8Array(r), u = 0; u < r; u++) {
              m[u] = c[p[u] - h];
            }

            x.push(m);
          } else for (f = 0; f < a; f++) {
            for (p = l[f], c = s[f], m = new Uint8Array(r), u = 0; u < r; u++) {
              o[u] && (m[u] = c[p[u] - h]);
            }

            x.push(m);
          }
        } else if (null == o) for (f = 0; f < a; f++) {
          for (p = l[f], c = s[f], m = new Uint8Array(r), u = 0; u < r; u++) {
            m[u] = c[p[u]];
          }

          x.push(m);
        } else for (f = 0; f < a; f++) {
          for (p = l[f], c = s[f], m = new Uint8Array(r), u = 0; u < r; u++) {
            o[u] && (m[u] = c[p[u]]);
          }

          x.push(m);
        }
        var d = new _PixelBlock_js__WEBPACK_IMPORTED_MODULE_0__["default"]({
          width: n.width,
          height: n.height,
          pixels: x,
          mask: o,
          pixelType: "u8"
        });
        return d.updateStatistics(), d;
      }

      function u(t, n) {
        if (!e(t)) return null;
        var i = t.clone(),
            l = i.pixels,
            o = i.width * i.height,
            r = n.length,
            a = Math.floor(r / 2),
            s = n[Math.floor(a)],
            h = l[0];
        var f,
            u,
            x,
            p,
            c,
            m,
            d = !1;
        var w = new Uint8Array(o),
            y = new Uint8Array(o),
            g = new Uint8Array(o);
        var M = i.mask;
        var k = 4 === n[0].mappedColor.length;

        for (M || (M = new Uint8Array(o), M.fill(k ? 255 : 1), i.mask = M), c = 0; c < o; c++) {
          if (M[c]) {
            for (f = h[c], d = !1, m = a, u = s, x = 0, p = r - 1; p - x > 1;) {
              if (f === u.value) {
                d = !0;
                break;
              }

              f > u.value ? x = m : p = m, m = Math.floor((x + p) / 2), u = n[Math.floor(m)];
            }

            d || (f === n[x].value ? (u = n[x], d = !0) : f === n[p].value ? (u = n[p], d = !0) : f < n[x].value ? (d = !1, u = null) : f > n[x].value && (f < n[p].value ? (u = n[x], d = !0) : p === r - 1 ? (d = !1, u = null) : (u = n[p], d = !0))), d ? (w[c] = u.mappedColor[0], y[c] = u.mappedColor[1], g[c] = u.mappedColor[2], M[c] = u.mappedColor[3]) : w[c] = y[c] = g[c] = M[c] = 0;
          }
        }

        return i.pixels = [w, y, g], i.mask = M, i.pixelType = "u8", i.maskIsAlpha = k, i;
      }

      function x(t, e, n, i, l, o, r, a) {
        return {
          xmin: l <= n * t ? 0 : l < n * t + t ? l - n * t : t,
          ymin: o <= i * e ? 0 : o < i * e + e ? o - i * e : e,
          xmax: l + r <= n * t ? 0 : l + r < n * t + t ? l + r - n * t : t,
          ymax: o + a <= i * e ? 0 : o + a < i * e + e ? o + a - i * e : e
        };
      }

      function p(t, e) {
        if (!t || 0 === t.length) return null;
        var n = t.filter(function (t) {
          return t.pixelBlock;
        })[0];
        if (!n) return null;
        var i = (n.extent.xmax - n.extent.xmin) / n.pixelBlock.width,
            l = (n.extent.ymax - n.extent.ymin) / n.pixelBlock.height,
            o = .01 * Math.min(i, l),
            r = t.sort(function (t, e) {
          return Math.abs(t.extent.ymax - e.extent.ymax) > o ? e.extent.ymax - t.extent.ymax : Math.abs(t.extent.xmin - e.extent.xmin) > o ? t.extent.xmin - e.extent.xmin : 0;
        }),
            a = Math.min.apply(null, r.map(function (t) {
          return t.extent.xmin;
        })),
            s = Math.min.apply(null, r.map(function (t) {
          return t.extent.ymin;
        })),
            h = Math.max.apply(null, r.map(function (t) {
          return t.extent.xmax;
        })),
            f = Math.max.apply(null, r.map(function (t) {
          return t.extent.ymax;
        })),
            u = {
          x: Math.round((e.xmin - a) / i),
          y: Math.round((f - e.ymax) / l)
        },
            x = {
          width: Math.round((h - a) / i),
          height: Math.round((f - s) / l)
        },
            p = {
          width: Math.round((e.xmax - e.xmin) / i),
          height: Math.round((e.ymax - e.ymin) / l)
        };
        if (Math.round(x.width / n.pixelBlock.width) * Math.round(x.height / n.pixelBlock.height) !== r.length || u.x < 0 || u.y < 0 || x.width < p.width || x.height < p.height) return null;
        return {
          extent: e,
          pixelBlock: c(r.map(function (t) {
            return t.pixelBlock;
          }), x, u, p)
        };
      }

      function c(n, i, l, o) {
        var r = n.filter(function (t) {
          return e(t);
        })[0];
        if (null == r) return null;

        var a = o ? o.width : i.width,
            s = o ? o.height : i.height,
            h = r.width,
            f = r.height,
            u = i.width / h,
            p = i.height / f,
            c = l ? l.x : 0,
            m = l ? l.y : 0,
            d = r.pixelType,
            w = _PixelBlock_js__WEBPACK_IMPORTED_MODULE_0__["default"].getPixelArrayConstructor(d),
            y = r.pixels.length,
            g = [];

        var M, k, A, U, C, T, v, B, S, O, P;

        for (T = 0; T < y; T++) {
          for (k = new w(a * s), v = 0; v < p; v++) {
            for (B = 0; B < u; B++) {
              if (A = n[v * u + B], A) for (M = A.pixels[T], P = x(h, f, B, v, c, m, a, s), S = P.ymin; S < P.ymax; S++) {
                for (U = (v * f + S - m) * a + (B * h - c), C = S * h, O = P.xmin; O < P.xmax; O++) {
                  k[U + O] = M[C + O];
                }
              }
            }
          }

          g.push(k);
        }

        var b, I;
        if (n.some(function (t) {
          return null == t || t.mask && t.mask.length > 0;
        })) for (b = new Uint8Array(a * s), v = 0; v < p; v++) {
          for (B = 0; B < u; B++) {
            if (A = n[v * u + B], I = A ? A.mask : null, P = x(h, f, B, v, c, m, a, s), I) for (S = P.ymin; S < P.ymax; S++) {
              for (U = (v * f + S - m) * a + (B * h - c), C = S * h, O = P.xmin; O < P.xmax; O++) {
                b[U + O] = I[C + O];
              }
            } else if (A) for (S = P.ymin; S < P.ymax; S++) {
              for (U = (v * f + S - m) * a + (B * h - c), C = S * h, O = P.xmin; O < P.xmax; O++) {
                b[U + O] = 1;
              }
            } else for (S = P.ymin; S < P.ymax; S++) {
              for (U = (v * f + S - m) * a + (B * h - c), C = S * h, O = P.xmin; O < P.xmax; O++) {
                b[U + O] = 0;
              }
            }
          }
        }
        var j = new _PixelBlock_js__WEBPACK_IMPORTED_MODULE_0__["default"]({
          width: a,
          height: s,
          pixels: g,
          pixelType: d,
          mask: b
        });
        return j.updateStatistics(), j;
      }

      function m(t, n, i) {
        if (!e(t)) return null;
        var l = t.width,
            o = t.height,
            r = n.x,
            a = n.y,
            s = i.width + r,
            h = i.height + a;
        if (r < 0 || a < 0 || s > l || h > o) return t;
        if (0 === r && 0 === a && s === l && h === o) return t;
        t.mask || (t.mask = new Uint8Array(l * o));
        var f = t.mask;

        for (var _t5 = 0; _t5 < o; _t5++) {
          var _e5 = _t5 * l;

          for (var _n5 = 0; _n5 < l; _n5++) {
            f[_e5 + _n5] = _t5 < a || _t5 >= h || _n5 < r || _n5 >= s ? 0 : 1;
          }
        }

        return t.updateStatistics(), t;
      }

      function d(t) {
        if (!e(t)) return null;
        var n = t.clone(),
            i = t.width,
            l = t.height,
            o = t.pixels,
            r = t.mask,
            a = o[0],
            s = n.pixels[0];

        for (var _t6 = 2; _t6 < l - 1; _t6++) {
          var _e6 = new Map();

          for (var _n7 = _t6 - 2; _n7 < _t6 + 2; _n7++) {
            for (var _t7 = 0; _t7 < 4; _t7++) {
              var _l2 = _n7 * i + _t7;

              g(_e6, a[_l2], r ? r[_l2] : 1);
            }
          }

          s[_t6 * i] = w(_e6), s[_t6 * i + 1] = s[_t6 * i + 2] = s[_t6 * i];
          var _n6 = 3;

          for (; _n6 < i - 1; _n6++) {
            var _l3 = (_t6 - 2) * i + _n6 + 1;

            g(_e6, a[_l3], r ? r[_l3] : 1), _l3 = (_t6 - 1) * i + _n6 + 1, g(_e6, a[_l3], r ? r[_l3] : 1), _l3 = _t6 * i + _n6 + 1, g(_e6, a[_l3], r ? r[_l3] : 1), _l3 = (_t6 + 1) * i + _n6 + 1, g(_e6, a[_l3], r ? r[_l3] : 1), _l3 = (_t6 - 2) * i + _n6 - 3, y(_e6, a[_l3], r ? r[_l3] : 1), _l3 = (_t6 - 1) * i + _n6 - 3, y(_e6, a[_l3], r ? r[_l3] : 1), _l3 = _t6 * i + _n6 - 3, y(_e6, a[_l3], r ? r[_l3] : 1), _l3 = (_t6 + 1) * i + _n6 - 3, y(_e6, a[_l3], r ? r[_l3] : 1), s[_t6 * i + _n6] = w(_e6);
          }

          s[_t6 * i + _n6 + 1] = s[_t6 * i + _n6];
        }

        for (var _t8 = 0; _t8 < i; _t8++) {
          s[_t8] = s[i + _t8] = s[2 * i + _t8], s[(l - 1) * i + _t8] = s[(l - 2) * i + _t8];
        }

        return n.updateStatistics(), n;
      }

      function w(t) {
        if (0 === t.size) return 0;
        var e = 0,
            n = -1,
            i = 0;
        var l = t.keys();
        var o = l.next();

        for (; !o.done;) {
          i = t.get(o.value), i > e && (n = o.value, e = i), o = l.next();
        }

        return n;
      }

      function y(t, e, n) {
        if (0 === n) return;
        var i = t.get(e);
        1 === i ? t["delete"](e) : t.set(e, i - 1);
      }

      function g(t, e, n) {
        0 !== n && t.set(e, t.has(e) ? t.get(e) + 1 : 1);
      }

      function M(n, i, l) {
        var o = i.x,
            r = i.y;
        var a = l.width,
            s = l.height;
        if (0 === o && 0 === r && s === n.height && a === n.width) return n;
        var h = n.width,
            f = n.height,
            u = Math.max(0, r),
            x = Math.max(0, o),
            p = Math.min(o + a, h),
            c = Math.min(r + s, f);
        if (p < 0 || c < 0 || !e(n)) return null;
        o = Math.max(0, -o), r = Math.max(0, -r);
        var m = n.pixels,
            d = n.mask,
            w = a * s,
            y = m.length,
            g = [];

        for (var _e7 = 0; _e7 < y; _e7++) {
          var _i3 = m[_e7],
              _l4 = _PixelBlock_js__WEBPACK_IMPORTED_MODULE_0__["default"].createEmptyBand(n.pixelType, w);

          for (var t = u; t < c; t++) {
            var _e8 = t * h;

            var _n8 = (t + r - u) * a + o;

            for (var _t9 = x; _t9 < p; _t9++) {
              _l4[_n8++] = _i3[_e8 + _t9];
            }
          }

          g.push(_l4);
        }

        var M = new Uint8Array(w);

        for (var _t10 = u; _t10 < c; _t10++) {
          var _e9 = _t10 * h;

          var _n9 = (_t10 + r - u) * a + o;

          for (var _t11 = x; _t11 < p; _t11++) {
            M[_n9++] = d ? d[_e9 + _t11] : 1;
          }
        }

        var k = new _PixelBlock_js__WEBPACK_IMPORTED_MODULE_0__["default"]({
          width: l.width,
          height: l.height,
          pixelType: n.pixelType,
          pixels: g,
          mask: M
        });
        return k.updateStatistics(), k;
      }

      function k(n) {
        var i = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : !0;
        if (!e(n)) return null;
        var l = n.pixels,
            o = n.width,
            r = n.height,
            a = n.mask,
            s = n.pixelType,
            h = [],
            f = Math.round(o / 2),
            u = Math.round(r / 2),
            x = r - 1,
            p = o - 1;

        for (var _e10 = 0; _e10 < l.length; _e10++) {
          var _n10 = l[_e10],
              _a2 = _PixelBlock_js__WEBPACK_IMPORTED_MODULE_0__["default"].createEmptyBand(s, f * u);

          var _c = 0;

          for (var t = 0; t < r; t += 2) {
            for (var _e11 = 0; _e11 < o; _e11 += 2) {
              var _l5 = _n10[t * o + _e11];

              if (i) {
                var _i4 = _e11 === p ? _l5 : _n10[t * o + _e11 + 1],
                    _r2 = t === x ? _l5 : _n10[t * o + _e11 + o],
                    _s3 = _e11 === p ? _r2 : t === x ? _i4 : _n10[t * o + _e11 + o + 1];

                _a2[_c++] = (_l5 + _i4 + _r2 + _s3) / 4;
              } else _a2[_c++] = _l5;
            }
          }

          h.push(_a2);
        }

        var c = null;

        if (a) {
          c = new Uint8Array(f * u);
          var _t12 = 0;

          for (var _e12 = 0; _e12 < r; _e12 += 2) {
            for (var _n11 = 0; _n11 < o; _n11 += 2) {
              var _l6 = a[_e12 * o + _n11];

              if (i) {
                var _i5 = _n11 === p ? _l6 : a[_e12 * o + _n11 + 1],
                    _r3 = _e12 === x ? _l6 : a[_e12 * o + _n11 + o],
                    _s4 = _n11 === p ? _r3 : _e12 === x ? _i5 : a[_e12 * o + _n11 + o + 1];

                c[_t12++] = _l6 * _i5 * _r3 * _s4 ? 1 : 0;
              } else c[_t12++] = _l6;
            }
          }
        }

        return new _PixelBlock_js__WEBPACK_IMPORTED_MODULE_0__["default"]({
          width: f,
          height: u,
          pixelType: s,
          pixels: h,
          mask: c
        });
      }

      function A(t, n, i) {
        if (!e(t)) return null;
        var l = n.width,
            o = n.height;
        var r = t.width,
            a = t.height;
        var s = new Map(),
            h = {
          x: 0,
          y: 0
        },
            f = null == i ? 1 : 1 + i;
        var u = t;

        for (var _t13 = 0; _t13 < f; _t13++) {
          var _e13 = Math.ceil(r / l),
              _i6 = Math.ceil(a / o);

          for (var _r4 = 0; _r4 < _i6; _r4++) {
            h.y = _r4 * o;

            for (var _i7 = 0; _i7 < _e13; _i7++) {
              h.x = _i7 * l;

              var _e14 = M(u, h, n);

              s.set("".concat(_t13, "/").concat(_r4, "/").concat(_i7), _e14);
            }
          }

          _t13 < f - 1 && (u = k(u)), r = Math.round(r / 2), a = Math.round(a / 2);
        }

        return s;
      }

      function U(n, i, l, o) {
        var r = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : "nearest";
        if (!e(n)) return null;
        "majority" === r && (n = d(n));

        var _n12 = n,
            a = _n12.pixels,
            s = _n12.mask,
            h = _n12.pixelType,
            f = n.width,
            u = n.height,
            x = _PixelBlock_js__WEBPACK_IMPORTED_MODULE_0__["default"].getPixelArrayConstructor(h),
            p = a.length,
            c = i.width,
            m = i.height,
            w = o.cols,
            y = o.rows,
            g = Math.ceil(c / w),
            M = Math.ceil(m / y);

        var k,
            A,
            U,
            C,
            T,
            v,
            B,
            S = !1;

        for (var t = 0; t < l.length; t += 3) {
          -1 === l[t] && -1 === l[t + 1] && -1 === l[t + 2] && (S = !0);
        }

        var O = new Float32Array(c * m),
            P = new Float32Array(c * m);
        var b,
            I,
            j = 0;
        var z = "majority" === r ? 0 : .5;

        for (var _t14 = 0; _t14 < M; _t14++) {
          for (var _e15 = 0; _e15 < g; _e15++) {
            k = 12 * (_t14 * g + _e15), A = l[k], U = l[k + 1], C = l[k + 2], T = l[k + 3], v = l[k + 4], B = l[k + 5];

            for (var _n13 = 0; _n13 < y; _n13++) {
              j = (_t14 * y + _n13) * c + _e15 * w, I = (_n13 + .5) / y;

              for (var _t15 = 0; _t15 < _n13; _t15++) {
                b = (_t15 + .5) / w, O[j + _t15] = Math.round((A * b + U * I + C) * f - z), P[j + _t15] = Math.round((T * b + v * I + B) * u - z);
              }
            }

            k += 6, A = l[k], U = l[k + 1], C = l[k + 2], T = l[k + 3], v = l[k + 4], B = l[k + 5];

            for (var _n14 = 0; _n14 < y; _n14++) {
              j = (_t14 * y + _n14) * c + _e15 * w, I = (_n14 + .5) / y;

              for (var _t16 = _n14; _t16 < w; _t16++) {
                b = (_t16 + .5) / w, O[j + _t16] = Math.round((A * b + U * I + C) * f - z), P[j + _t16] = Math.round((T * b + v * I + B) * u - z);
              }
            }
          }
        }

        var D = function D(t, e) {
          for (var _n15 = 0; _n15 < m; _n15++) {
            k = _n15 * c;

            for (var _n16 = 0; _n16 < c; _n16++) {
              O[k] < 0 || P[k] < 0 ? t[k] = 0 : t[k] = e[O[k] + P[k] * f], k++;
            }
          }
        },
            E = [];

        var $;

        for (var _t17 = 0; _t17 < p; _t17++) {
          $ = new x(c * m), D($, a[_t17]), E.push($);
        }

        var q = new _PixelBlock_js__WEBPACK_IMPORTED_MODULE_0__["default"]({
          width: c,
          height: m,
          pixelType: h,
          pixels: E
        });
        if (s) q.mask = new Uint8Array(c * m), D(q.mask, s);else if (S) {
          q.mask = new Uint8Array(c * m);

          for (var _t18 = 0; _t18 < c * m; _t18++) {
            q.mask[_t18] = O[_t18] < 0 || P[_t18] < 0 ? 0 : 1;
          }
        }
        return q.updateStatistics(), q;
      }
      /***/

    }
  }]);
})();
//# sourceMappingURL=default~ImageryLayer-js~ImageryTileLayer-js~layers-ImageryLayerView2D-js~layers-ImageryTileLayerView~fc91ae2a-es5.js.map