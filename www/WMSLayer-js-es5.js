(function () {
  function _createForOfIteratorHelper(o, allowArrayLike) { var it; if (typeof Symbol === "undefined" || o[Symbol.iterator] == null) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e6) { throw _e6; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = o[Symbol.iterator](); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e7) { didErr = true; err = _e7; }, f: function f() { try { if (!normalCompletion && it["return"] != null) it["return"](); } finally { if (didErr) throw err; } } }; }

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

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["WMSLayer-js"], {
    /***/
    "SaAm":
    /*!******************************************************************!*\
      !*** ./node_modules/@arcgis/core/geometry/support/scaleUtils.js ***!
      \******************************************************************/

    /*! exports provided: getExtentForScale, getResolutionForScale, getScale, getScaleForResolution */

    /***/
    function SaAm(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "getExtentForScale", function () {
        return o;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "getResolutionForScale", function () {
        return r;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "getScale", function () {
        return e;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "getScaleForResolution", function () {
        return i;
      });
      /* harmony import */


      var _core_unitUtils_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ../../core/unitUtils.js */
      "gEht");
      /*
      All material copyright ESRI, All Rights Reserved, unless otherwise specified.
      See https://js.arcgis.com/4.18/esri/copyright.txt for details.
      */


      function e(e, r) {
        var i = r || e.extent,
            o = e.width,
            c = Object(_core_unitUtils_js__WEBPACK_IMPORTED_MODULE_0__["getMetersPerUnitForSR"])(i && i.spatialReference);
        return i && o ? i.width / o * c * _core_unitUtils_js__WEBPACK_IMPORTED_MODULE_0__["inchesPerMeter"] * 96 : 0;
      }

      function r(e, r) {
        return e / (Object(_core_unitUtils_js__WEBPACK_IMPORTED_MODULE_0__["getMetersPerUnitForSR"])(r) * _core_unitUtils_js__WEBPACK_IMPORTED_MODULE_0__["inchesPerMeter"] * 96);
      }

      function i(e, r) {
        return e * (Object(_core_unitUtils_js__WEBPACK_IMPORTED_MODULE_0__["getMetersPerUnitForSR"])(r) * _core_unitUtils_js__WEBPACK_IMPORTED_MODULE_0__["inchesPerMeter"] * 96);
      }

      function o(t, n) {
        var e = t.extent,
            i = t.width,
            o = r(n, e.spatialReference);
        return e.clone().expand(o * i / e.width);
      }
      /***/

    },

    /***/
    "UHiS":
    /*!*****************************************************************!*\
      !*** ./node_modules/@arcgis/core/layers/support/WMSSublayer.js ***!
      \*****************************************************************/

    /*! exports provided: default */

    /***/
    function UHiS(module, __webpack_exports__, __webpack_require__) {
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


      var _core_accessorSupport_decorators_cast_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ../../core/accessorSupport/decorators/cast.js */
      "Gj5k");
      /* harmony import */


      var _core_accessorSupport_decorators_reader_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ../../core/accessorSupport/decorators/reader.js */
      "r88o");
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


      var _geometry_Extent_js__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
      /*! ../../geometry/Extent.js */
      "OvF4");
      /* harmony import */


      var _core_Collection_js__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
      /*! ../../core/Collection.js */
      "LE9a");
      /* harmony import */


      var _core_Handles_js__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
      /*! ../../core/Handles.js */
      "r0DZ");
      /* harmony import */


      var _core_MultiOriginJSONSupport_js__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(
      /*! ../../core/MultiOriginJSONSupport.js */
      "5pQd");
      /*
      All material copyright ESRI, All Rights Reserved, unless otherwise specified.
      See https://js.arcgis.com/4.18/esri/copyright.txt for details.
      */


      var _u;

      var y = 0,
          d = _u = /*#__PURE__*/function (_core_MultiOriginJSON) {
        _inherits(u, _core_MultiOriginJSON);

        var _super = _createSuper(u);

        function u(e) {
          var _this;

          _classCallCheck(this, u);

          _this = _super.call(this, e), _this._sublayersHandles = new _core_Handles_js__WEBPACK_IMPORTED_MODULE_13__["default"](), _this.dimensions = null, _this.fullExtents = null, _this.featureInfoFormat = null, _this.featureInfoUrl = null, _this.legendUrl = null, _this.legendEnabled = !0, _this.maxScale = 0, _this.minScale = 0, _this.popupEnabled = !1, _this.queryable = !1, _this.spatialReferences = null;
          return _this;
        }

        _createClass(u, [{
          key: "description",
          get: function get() {
            return this._get("description");
          },
          set: function set(e) {
            this._set("description", e);
          }
        }, {
          key: "fullExtent",
          get: function get() {
            return this._get("fullExtent");
          },
          set: function set(e) {
            this._set("fullExtent", e);
          }
        }, {
          key: "readExtent",
          value: function readExtent(e, t) {
            return (e = t.extent) ? _geometry_Extent_js__WEBPACK_IMPORTED_MODULE_11__["default"].fromJSON(e) : null;
          }
        }, {
          key: "id",
          get: function get() {
            var e = this._get("id");

            return null == e ? y++ : e;
          },
          set: function set(e) {
            this._set("id", e);
          }
        }, {
          key: "readLegendUrl",
          value: function readLegendUrl(e, t) {
            return t ? t.legendUrl || t.legendURL : null;
          }
        }, {
          key: "layer",
          set: function set(e) {
            this._set("layer", e), this.sublayers && this.sublayers.forEach(function (t) {
              return t.layer = e;
            });
          }
        }, {
          key: "name",
          get: function get() {
            return this._get("name");
          },
          set: function set(e) {
            this._set("name", e);
          }
        }, {
          key: "sublayers",
          set: function set(e) {
            var _this2 = this;

            var t = this._get("sublayers");

            t && (t.forEach(function (e) {
              e.layer = null;
            }), this._sublayersHandles.removeAll(), this._sublayersHandles = null), e && (e.forEach(function (e) {
              e.parent = _this2, e.layer = _this2.layer;
            }), this._sublayersHandles.add([e.on("after-add", function (_ref) {
              var e = _ref.item;
              e.parent = _this2, e.layer = _this2.layer;
            }), e.on("after-remove", function (_ref2) {
              var e = _ref2.item;
              e.parent = null, e.layer = null;
            })])), this._set("sublayers", e);
          }
        }, {
          key: "castSublayers",
          value: function castSublayers(e) {
            return Object(_core_accessorSupport_ensureType_js__WEBPACK_IMPORTED_MODULE_3__["ensureType"])(_core_Collection_js__WEBPACK_IMPORTED_MODULE_12__["default"].ofType(_u), e);
          }
        }, {
          key: "title",
          get: function get() {
            return this._get("title");
          },
          set: function set(e) {
            this._set("title", e);
          }
        }, {
          key: "visible",
          get: function get() {
            return this._get("visible");
          },
          set: function set(e) {
            this._setAndNotifyLayer("visible", e);
          }
        }, {
          key: "clone",
          value: function clone() {
            var e = new _u();
            return this.hasOwnProperty("description") && (e.description = this.description), this.hasOwnProperty("fullExtent") && (e.fullExtent = this.fullExtent.clone()), this.hasOwnProperty("fullExtents") && (e.fullExtents = this.fullExtents.map(function (e) {
              return e.clone();
            })), this.hasOwnProperty("featureInfoFormat") && (e.featureInfoFormat = this.featureInfoFormat), this.hasOwnProperty("featureInfoUrl") && (e.featureInfoUrl = this.featureInfoUrl), this.hasOwnProperty("legendUrl") && (e.legendUrl = this.legendUrl), this.hasOwnProperty("legendEnabled") && (e.legendEnabled = this.legendEnabled), this.hasOwnProperty("layer") && (e.layer = this.layer), this.hasOwnProperty("name") && (e.name = this.name), this.hasOwnProperty("parent") && (e.parent = this.parent), this.hasOwnProperty("queryable") && (e.queryable = this.queryable), this.hasOwnProperty("sublayers") && (e.sublayers = this.sublayers && this.sublayers.map(function (e) {
              return e.clone();
            })), this.hasOwnProperty("spatialReferences") && (e.spatialReferences = this.spatialReferences.map(function (e) {
              return e;
            })), this.hasOwnProperty("visible") && (e.visible = this.visible), this.hasOwnProperty("title") && (e.title = this.title), e;
          }
        }, {
          key: "_setAndNotifyLayer",
          value: function _setAndNotifyLayer(e, t) {
            var r = this.layer;
            this._get(e) !== t && (this._set(e, t), r && r.emit("wms-sublayer-update", {
              propertyName: e,
              id: this.id
            }));
          }
        }]);

        return u;
      }(_core_MultiOriginJSONSupport_js__WEBPACK_IMPORTED_MODULE_14__["MultiOriginJSONSupport"]);

      Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_4__["property"])()], d.prototype, "description", null), Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_4__["property"])({
        readOnly: !0
      })], d.prototype, "dimensions", void 0), Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_4__["property"])({
        value: null
      })], d.prototype, "fullExtent", null), Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_reader_js__WEBPACK_IMPORTED_MODULE_6__["reader"])("fullExtent", ["extent"])], d.prototype, "readExtent", null), Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_4__["property"])()], d.prototype, "fullExtents", void 0), Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_4__["property"])()], d.prototype, "featureInfoFormat", void 0), Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_4__["property"])()], d.prototype, "featureInfoUrl", void 0), Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_4__["property"])({
        type: Number,
        json: {
          write: {
            enabled: !1,
            overridePolicy: function overridePolicy() {
              return {
                ignoreOrigin: !0,
                enabled: !0
              };
            }
          }
        }
      })], d.prototype, "id", null), Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_4__["property"])({
        type: String,
        json: {
          origins: {
            "web-document": {
              read: {
                source: ["legendUrl", "legendURL"]
              },
              write: {
                target: "legendUrl",
                ignoreOrigin: !0
              }
            }
          },
          read: {
            source: "legendURL"
          },
          write: {
            ignoreOrigin: !0
          }
        }
      })], d.prototype, "legendUrl", void 0), Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_reader_js__WEBPACK_IMPORTED_MODULE_6__["reader"])(["web-document"], "legendUrl")], d.prototype, "readLegendUrl", null), Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_4__["property"])({
        value: !0,
        type: Boolean,
        json: {
          read: {
            source: "showLegend"
          },
          write: {
            target: "showLegend"
          },
          origins: {
            "web-map": {
              read: !1,
              write: !1
            },
            "web-scene": {
              read: !1,
              write: !1
            }
          }
        }
      })], d.prototype, "legendEnabled", void 0), Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_4__["property"])({
        value: null
      })], d.prototype, "layer", null), Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_4__["property"])()], d.prototype, "maxScale", void 0), Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_4__["property"])()], d.prototype, "minScale", void 0), Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_4__["property"])({
        type: String,
        value: null,
        json: {
          read: {
            source: "name"
          },
          write: {
            ignoreOrigin: !0
          }
        }
      })], d.prototype, "name", null), Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_4__["property"])()], d.prototype, "parent", void 0), Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_4__["property"])({
        type: Boolean,
        json: {
          read: {
            source: "showPopup"
          },
          write: {
            ignoreOrigin: !0,
            target: "showPopup"
          }
        }
      })], d.prototype, "popupEnabled", void 0), Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_4__["property"])({
        type: Boolean,
        json: {
          write: {
            ignoreOrigin: !0
          }
        }
      })], d.prototype, "queryable", void 0), Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_4__["property"])()], d.prototype, "sublayers", null), Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_cast_js__WEBPACK_IMPORTED_MODULE_5__["cast"])("sublayers")], d.prototype, "castSublayers", null), Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_4__["property"])({
        type: [Number],
        json: {
          read: {
            source: "spatialReferences"
          }
        }
      })], d.prototype, "spatialReferences", void 0), Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_4__["property"])({
        type: String,
        value: null,
        json: {
          write: {
            ignoreOrigin: !0
          }
        }
      })], d.prototype, "title", null), Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_4__["property"])({
        type: Boolean,
        value: !0,
        json: {
          read: {
            source: "defaultVisibility"
          }
        }
      })], d.prototype, "visible", null), d = _u = Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_subclass_js__WEBPACK_IMPORTED_MODULE_7__["subclass"])("esri.layers.support.WMSSublayer")], d);
      var h = d;
      /* harmony default export */

      __webpack_exports__["default"] = h;
      /***/
    },

    /***/
    "h2Da":
    /*!******************************************************!*\
      !*** ./node_modules/@arcgis/core/layers/WMSLayer.js ***!
      \******************************************************/

    /*! exports provided: default */

    /***/
    function h2Da(module, __webpack_exports__, __webpack_require__) {
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


      var _config_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ../config.js */
      "EyXx");
      /* harmony import */


      var _core_maybe_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ../core/maybe.js */
      "srIe");
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


      var _core_jsonMap_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! ../core/jsonMap.js */
      "+opI");
      /* harmony import */


      var _core_accessorSupport_decorators_reader_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! ../core/accessorSupport/decorators/reader.js */
      "r88o");
      /* harmony import */


      var _core_accessorSupport_decorators_subclass_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
      /*! ../core/accessorSupport/decorators/subclass.js */
      "04ZG");
      /* harmony import */


      var _core_accessorSupport_decorators_writer_js__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
      /*! ../core/accessorSupport/decorators/writer.js */
      "Cduq");
      /* harmony import */


      var _core_urlUtils_js__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
      /*! ../core/urlUtils.js */
      "4EHJ");
      /* harmony import */


      var _core_uuid_js__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
      /*! ../core/uuid.js */
      "ju1D");
      /* harmony import */


      var _portal_support_resourceExtension_js__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(
      /*! ../portal/support/resourceExtension.js */
      "9AIY");
      /* harmony import */


      var _core_promiseUtils_js__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(
      /*! ../core/promiseUtils.js */
      "9MzC");
      /* harmony import */


      var _core_accessorSupport_write_js__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(
      /*! ../core/accessorSupport/write.js */
      "xHih");
      /* harmony import */


      var _geometry_support_spatialReferenceUtils_js__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(
      /*! ../geometry/support/spatialReferenceUtils.js */
      "f4Nx");
      /* harmony import */


      var _geometry_SpatialReference_js__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(
      /*! ../geometry/SpatialReference.js */
      "WZb1");
      /* harmony import */


      var _geometry_Extent_js__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(
      /*! ../geometry/Extent.js */
      "OvF4");
      /* harmony import */


      var _core_Collection_js__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(
      /*! ../core/Collection.js */
      "LE9a");
      /* harmony import */


      var _PopupTemplate_js__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(
      /*! ../PopupTemplate.js */
      "SFah");
      /* harmony import */


      var _request_js__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(
      /*! ../request.js */
      "Lqtk");
      /* harmony import */


      var _Graphic_js__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(
      /*! ../Graphic.js */
      "jWBI");
      /* harmony import */


      var _core_Handles_js__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(
      /*! ../core/Handles.js */
      "r0DZ");
      /* harmony import */


      var _core_CollectionFlattener_js__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(
      /*! ../core/CollectionFlattener.js */
      "TRCY");
      /* harmony import */


      var _Layer_js__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(
      /*! ./Layer.js */
      "pqNC");
      /* harmony import */


      var _core_MultiOriginJSONSupport_js__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(
      /*! ../core/MultiOriginJSONSupport.js */
      "5pQd");
      /* harmony import */


      var _support_arcgisLayerUrl_js__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(
      /*! ./support/arcgisLayerUrl.js */
      "VLTf");
      /* harmony import */


      var _support_commonProperties_js__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(
      /*! ./support/commonProperties.js */
      "IvSi");
      /* harmony import */


      var _mixins_OperationalLayer_js__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(
      /*! ./mixins/OperationalLayer.js */
      "uRH/");
      /* harmony import */


      var _mixins_BlendLayer_js__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(
      /*! ./mixins/BlendLayer.js */
      "mXvl");
      /* harmony import */


      var _mixins_PortalLayer_js__WEBPACK_IMPORTED_MODULE_32__ = __webpack_require__(
      /*! ./mixins/PortalLayer.js */
      "DbUH");
      /* harmony import */


      var _mixins_RefreshableLayer_js__WEBPACK_IMPORTED_MODULE_33__ = __webpack_require__(
      /*! ./mixins/RefreshableLayer.js */
      "jhcG");
      /* harmony import */


      var _mixins_ScaleRangeLayer_js__WEBPACK_IMPORTED_MODULE_34__ = __webpack_require__(
      /*! ./mixins/ScaleRangeLayer.js */
      "WmKv");
      /* harmony import */


      var _mixins_TemporalLayer_js__WEBPACK_IMPORTED_MODULE_35__ = __webpack_require__(
      /*! ./mixins/TemporalLayer.js */
      "YBpl");
      /* harmony import */


      var _geometry_support_scaleUtils_js__WEBPACK_IMPORTED_MODULE_36__ = __webpack_require__(
      /*! ../geometry/support/scaleUtils.js */
      "SaAm");
      /* harmony import */


      var _support_wmsUtils_js__WEBPACK_IMPORTED_MODULE_37__ = __webpack_require__(
      /*! ./support/wmsUtils.js */
      "qE7Y");
      /* harmony import */


      var _support_ExportWMSImageParameters_js__WEBPACK_IMPORTED_MODULE_38__ = __webpack_require__(
      /*! ./support/ExportWMSImageParameters.js */
      "uAeW");
      /* harmony import */


      var _support_WMSSublayer_js__WEBPACK_IMPORTED_MODULE_39__ = __webpack_require__(
      /*! ./support/WMSSublayer.js */
      "UHiS");
      /*
      All material copyright ESRI, All Rights Reserved, unless otherwise specified.
      See https://js.arcgis.com/4.18/esri/copyright.txt for details.
      */


      var N = new _core_jsonMap_js__WEBPACK_IMPORTED_MODULE_8__["JSONMap"]({
        bmp: "image/bmp",
        gif: "image/gif",
        jpg: "image/jpeg",
        png: "image/png",
        svg: "image/svg+xml"
      }, {
        ignoreUnknown: !1
      });

      var B = /*#__PURE__*/function (_Object) {
        _inherits(B, _Object);

        var _super2 = _createSuper(B);

        function B() {
          var _this3;

          _classCallCheck(this, B);

          for (var _len = arguments.length, e = new Array(_len), _key = 0; _key < _len; _key++) {
            e[_key] = arguments[_key];
          }

          _this3 = _super2.call.apply(_super2, [this].concat(e)), _this3._sublayersHandles = new _core_Handles_js__WEBPACK_IMPORTED_MODULE_24__["default"](), _this3.allSublayers = new _core_CollectionFlattener_js__WEBPACK_IMPORTED_MODULE_25__["default"]({
            root: _assertThisInitialized(_this3),
            rootCollectionNames: ["sublayers"],
            getChildrenFunction: function getChildrenFunction(e) {
              return e.sublayers;
            }
          }), _this3.customParameters = null, _this3.customLayerParameters = null, _this3.copyright = null, _this3.description = null, _this3.dimensions = null, _this3.fullExtent = null, _this3.fullExtents = null, _this3.featureInfoFormat = null, _this3.featureInfoUrl = null, _this3.imageFormat = null, _this3.imageMaxHeight = 2048, _this3.imageMaxWidth = 2048, _this3.imageTransparency = !0, _this3.legendEnabled = !0, _this3.mapUrl = null, _this3.isReference = null, _this3.operationalLayerType = "WMS", _this3.spatialReference = null, _this3.spatialReferences = null, _this3.sublayers = null, _this3.type = "wms", _this3.url = null, _this3.version = null, _this3.watch("sublayers", function (e, r) {
            r && (r.forEach(function (e) {
              e.layer = null;
            }), _this3._sublayersHandles.removeAll(), _this3._sublayersHandles = null), e && (e.forEach(function (e) {
              e.parent = _assertThisInitialized(_this3), e.layer = _assertThisInitialized(_this3);
            }), _this3._sublayersHandles || (_this3._sublayersHandles = new _core_Handles_js__WEBPACK_IMPORTED_MODULE_24__["default"]()), _this3._sublayersHandles.add([e.on("after-add", function (_ref3) {
              var e = _ref3.item;
              e.parent = _assertThisInitialized(_this3), e.layer = _assertThisInitialized(_this3);
            }), e.on("after-remove", function (_ref4) {
              var e = _ref4.item;
              e.parent = null, e.layer = null;
            })]));
          }, !0);
          return _this3;
        }

        _createClass(B, [{
          key: "normalizeCtorArgs",
          value: function normalizeCtorArgs(e, r) {
            return "string" == typeof e ? _objectSpread({
              url: e
            }, r) : e;
          }
        }, {
          key: "destroy",
          value: function destroy() {
            var e;
            null == (e = this._exportWMSImageParameters) || e.destroy();
          }
        }, {
          key: "load",
          value: function load(e) {
            var _this4 = this;

            var r = Object(_core_maybe_js__WEBPACK_IMPORTED_MODULE_4__["isSome"])(e) ? e.signal : null;
            return this.addResolvingPromise(this.loadFromPortal({
              supportedTypes: ["WMS"]
            }, e).then(function () {
              return _this4._fetchService(r);
            }, function () {
              return _this4._fetchService(r);
            })), Object(_core_promiseUtils_js__WEBPACK_IMPORTED_MODULE_15__["resolve"])(this);
          }
        }, {
          key: "readFullExtentFromItemOrMap",
          value: function readFullExtentFromItemOrMap(e, r) {
            var t = r.extent;
            return new _geometry_Extent_js__WEBPACK_IMPORTED_MODULE_19__["default"]({
              xmin: t[0][0],
              ymin: t[0][1],
              xmax: t[1][0],
              ymax: t[1][1]
            });
          }
        }, {
          key: "writeFullExtent",
          value: function writeFullExtent(e, r) {
            r.extent = [[e.xmin, e.ymin], [e.xmax, e.ymax]];
          }
        }, {
          key: "readImageFormat",
          value: function readImageFormat(e, r) {
            var t = r.supportedImageFormatTypes;
            return t && t.indexOf("image/png") > -1 ? "image/png" : t && t[0];
          }
        }, {
          key: "readSpatialReferenceFromItemOrDocument",
          value: function readSpatialReferenceFromItemOrDocument(e, r) {
            return new _geometry_SpatialReference_js__WEBPACK_IMPORTED_MODULE_18__["default"](r.spatialReferences[0]);
          }
        }, {
          key: "writeSpatialReferences",
          value: function writeSpatialReferences(e, r) {
            var t = this.spatialReference && this.spatialReference.wkid;
            e && t ? (r.spatialReferences = e.filter(function (e) {
              return e !== t;
            }), r.spatialReferences.unshift(t)) : r.spatialReferences = e;
          }
        }, {
          key: "readSublayersFromItemOrMap",
          value: function readSublayersFromItemOrMap(e, r, t) {
            return k(r.layers, t, r.visibleLayers);
          }
        }, {
          key: "readSublayers",
          value: function readSublayers(e, r, t) {
            return k(r.layers, t);
          }
        }, {
          key: "writeSublayers",
          value: function writeSublayers(e, r, t, s) {
            r.layers = [];
            var o = new Map(),
                i = e.flatten(function (_ref5) {
              var e = _ref5.sublayers;
              return e && e.toArray();
            }).toArray();
            i.forEach(function (e) {
              "number" == typeof e.parent.id && (o.has(e.parent.id) ? o.get(e.parent.id).push(e.id) : o.set(e.parent.id, [e.id]));
            }), i.forEach(function (e) {
              var t = _objectSpread({
                sublayer: e
              }, s),
                  i = e.write({
                parentLayerId: "number" == typeof e.parent.id ? e.parent.id : -1
              }, t);

              if (o.has(e.id) && (i.sublayerIds = o.get(e.id)), !e.sublayers && e.name) {
                var _s = e.write({}, t);

                delete _s.id, r.layers.push(_s);
              }
            }), r.visibleLayers = i.filter(function (e) {
              return e.visible && !e.sublayers;
            }).map(function (e) {
              return e.name;
            });
          }
        }, {
          key: "createExportImageParameters",
          value: function createExportImageParameters(e, r, t, s) {
            var o;
            var i = s && s.pixelRatio || 1,
                a = Object(_geometry_support_scaleUtils_js__WEBPACK_IMPORTED_MODULE_36__["getScale"])({
              extent: e,
              width: r
            }) * i;
            null == (o = this._exportWMSImageParameters) || o.destroy(), this._exportWMSImageParameters = new _support_ExportWMSImageParameters_js__WEBPACK_IMPORTED_MODULE_38__["default"]({
              layer: this,
              extent: e,
              scale: a
            });
            return this._exportWMSImageParameters.toJSON();
          }
        }, {
          key: "fetchImage",
          value: function () {
            var _fetchImage = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(e, r, t, s) {
              var o, i, a, n, _e, l, p, m, u;

              return regeneratorRuntime.wrap(function _callee$(_context) {
                while (1) {
                  switch (_context.prev = _context.next) {
                    case 0:
                      a = this.mapUrl, n = this.createExportImageParameters(e, r, t, s);

                      if (n.layers) {
                        _context.next = 4;
                        break;
                      }

                      _e = document.createElement("canvas");
                      return _context.abrupt("return", (_e.width = r, _e.height = t, _e));

                    case 4:
                      l = null == s || null == (o = s.timeExtent) ? void 0 : o.start, p = null == s || null == (i = s.timeExtent) ? void 0 : i.end, m = l && p ? l.getTime() === p.getTime() ? Object(_support_wmsUtils_js__WEBPACK_IMPORTED_MODULE_37__["toISOString"])(l) : "".concat(Object(_support_wmsUtils_js__WEBPACK_IMPORTED_MODULE_37__["toISOString"])(l), "/").concat(Object(_support_wmsUtils_js__WEBPACK_IMPORTED_MODULE_37__["toISOString"])(p)) : void 0, u = {
                        responseType: "image",
                        query: this._mixCustomParameters(_objectSpread(_objectSpread({
                          width: r,
                          height: t
                        }, n), {}, {
                          time: m
                        })),
                        signal: null == s ? void 0 : s.signal
                      };
                      return _context.abrupt("return", (null != s && s.timestamp && (u.query = _objectSpread({
                        _ts: s.timestamp
                      }, u.query)), Object(_request_js__WEBPACK_IMPORTED_MODULE_22__["default"])(a, u).then(function (e) {
                        return e.data;
                      })));

                    case 6:
                    case "end":
                      return _context.stop();
                  }
                }
              }, _callee, this);
            }));

            function fetchImage(_x, _x2, _x3, _x4) {
              return _fetchImage.apply(this, arguments);
            }

            return fetchImage;
          }()
        }, {
          key: "fetchFeatureInfo",
          value: function fetchFeatureInfo(e, r, t, s, o) {
            var _this5 = this;

            var i = Object(_support_wmsUtils_js__WEBPACK_IMPORTED_MODULE_37__["getPopupLayers"])(this._exportWMSImageParameters.visibleSublayers);
            if (!this.featureInfoUrl || !i) return null;

            var a = "1.3.0" === this.version ? {
              I: s,
              J: o
            } : {
              x: s,
              y: o
            },
                n = _objectSpread({
              query_layers: i,
              request: "GetFeatureInfo",
              info_format: this.featureInfoFormat,
              feature_count: 25,
              width: r,
              height: t
            }, a);

            var l = _objectSpread(_objectSpread({}, this.createExportImageParameters(e, r, t)), n);

            return l = this._mixCustomParameters(l), Object(_request_js__WEBPACK_IMPORTED_MODULE_22__["default"])(this.featureInfoUrl, {
              query: l,
              responseType: "text"
            }).then(function (e) {
              var r = _this5.featureInfoUrl;
              r += -1 === r.indexOf("?") ? "?" : "";

              for (var _e2 in l) {
                r += "?" === r.substring(r.length - 1, r.length) ? "" : "&", r += _e2 + "=" + l[_e2];
              }

              var t = document.createElement("iframe");
              return t.src = r, t.frameBorder = "0", t.marginHeight = "0", t.marginWidth = "0", t.innerHTML = e.data, t.style.width = "100%", new _Graphic_js__WEBPACK_IMPORTED_MODULE_23__["default"]({
                sourceLayer: _this5,
                popupTemplate: new _PopupTemplate_js__WEBPACK_IMPORTED_MODULE_21__["default"]({
                  title: _this5.title,
                  content: t
                })
              });
            });
          }
        }, {
          key: "findSublayerById",
          value: function findSublayerById(e) {
            return this.allSublayers.find(function (r) {
              return r.id === e;
            });
          }
        }, {
          key: "findSublayerByName",
          value: function findSublayerByName(e) {
            return this.allSublayers.find(function (r) {
              return r.name === e;
            });
          }
        }, {
          key: "supportsSpatialReference",
          value: function supportsSpatialReference(e) {
            return Object(_support_arcgisLayerUrl_js__WEBPACK_IMPORTED_MODULE_28__["isWmsServer"])(this.url) || this.spatialReferences.some(function (r) {
              var t = 900913 === r ? _geometry_SpatialReference_js__WEBPACK_IMPORTED_MODULE_18__["default"].WebMercator : new _geometry_SpatialReference_js__WEBPACK_IMPORTED_MODULE_18__["default"]({
                wkid: r
              });
              return Object(_geometry_support_spatialReferenceUtils_js__WEBPACK_IMPORTED_MODULE_17__["equals"])(t, e);
            });
          }
        }, {
          key: "_fetchService",
          value: function () {
            var _fetchService2 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee2(e) {
              var r, _e3;

              return regeneratorRuntime.wrap(function _callee2$(_context2) {
                while (1) {
                  switch (_context2.prev = _context2.next) {
                    case 0:
                      if (this.resourceInfo) {
                        _context2.next = 6;
                        break;
                      }

                      this.parsedUrl.query && this.parsedUrl.query.service && (this.parsedUrl.query.SERVICE = this.parsedUrl.query.service, delete this.parsedUrl.query.service), this.parsedUrl.query && this.parsedUrl.query.request && (this.parsedUrl.query.REQUEST = this.parsedUrl.query.request, delete this.parsedUrl.query.request);
                      _context2.next = 4;
                      return Object(_request_js__WEBPACK_IMPORTED_MODULE_22__["default"])(this.parsedUrl.path, {
                        query: _objectSpread(_objectSpread({
                          SERVICE: "WMS",
                          REQUEST: "GetCapabilities"
                        }, this.parsedUrl.query), this.customParameters),
                        responseType: "xml",
                        signal: e
                      });

                    case 4:
                      r = _context2.sent;
                      this.resourceInfo = Object(_support_wmsUtils_js__WEBPACK_IMPORTED_MODULE_37__["parseCapabilities"])(r.data);

                    case 6:
                      if (this.parsedUrl) {
                        _e3 = new _core_urlUtils_js__WEBPACK_IMPORTED_MODULE_12__["Url"](this.parsedUrl.path);
                        "https" !== _e3.scheme || _e3.port && "443" !== _e3.port || -1 !== _config_js__WEBPACK_IMPORTED_MODULE_3__["default"].request.httpsDomains.indexOf(_e3.host) || _config_js__WEBPACK_IMPORTED_MODULE_3__["default"].request.httpsDomains.push(_e3.host);
                      }

                      this.read(this.resourceInfo, {
                        origin: "service"
                      });

                    case 8:
                    case "end":
                      return _context2.stop();
                  }
                }
              }, _callee2, this);
            }));

            function _fetchService(_x5) {
              return _fetchService2.apply(this, arguments);
            }

            return _fetchService;
          }()
        }, {
          key: "_mixCustomParameters",
          value: function _mixCustomParameters(e) {
            if (!this.customLayerParameters && !this.customParameters) return e;

            var r = _objectSpread(_objectSpread({}, this.customParameters), this.customLayerParameters);

            for (var t in r) {
              e[t.toLowerCase()] = r[t];
            }

            return e;
          }
        }]);

        return B;
      }(Object(_mixins_BlendLayer_js__WEBPACK_IMPORTED_MODULE_31__["BlendLayer"])(Object(_mixins_TemporalLayer_js__WEBPACK_IMPORTED_MODULE_35__["TemporalLayer"])(Object(_mixins_RefreshableLayer_js__WEBPACK_IMPORTED_MODULE_33__["RefreshableLayer"])(Object(_mixins_ScaleRangeLayer_js__WEBPACK_IMPORTED_MODULE_34__["ScaleRangeLayer"])(Object(_mixins_OperationalLayer_js__WEBPACK_IMPORTED_MODULE_30__["OperationalLayer"])(Object(_mixins_PortalLayer_js__WEBPACK_IMPORTED_MODULE_32__["PortalLayer"])(Object(_core_MultiOriginJSONSupport_js__WEBPACK_IMPORTED_MODULE_27__["MultiOriginJSONMixin"])(_Layer_js__WEBPACK_IMPORTED_MODULE_26__["default"]))))))));

      function k(e, t, s) {
        var o = new Map();
        e.every(function (e) {
          return null == e.id;
        }) && (e = Object(_core_lang_js__WEBPACK_IMPORTED_MODULE_2__["clone"])(e)).forEach(function (e, r) {
          return e.id = r;
        });

        var _iterator = _createForOfIteratorHelper(e),
            _step;

        try {
          for (_iterator.s(); !(_step = _iterator.n()).done;) {
            var r = _step.value;

            var _e4 = new _support_WMSSublayer_js__WEBPACK_IMPORTED_MODULE_39__["default"]();

            _e4.read(r, t), -1 === (null == s ? void 0 : s.indexOf(_e4.name)) && (_e4.visible = !1), o.set(_e4.id, _e4);
          }
        } catch (err) {
          _iterator.e(err);
        } finally {
          _iterator.f();
        }

        var i = [];

        var _iterator2 = _createForOfIteratorHelper(e),
            _step2;

        try {
          for (_iterator2.s(); !(_step2 = _iterator2.n()).done;) {
            var _r = _step2.value;

            var _e5 = o.get(_r.id);

            if (null != _r.parentLayerId && _r.parentLayerId >= 0) {
              var _t = o.get(_r.parentLayerId);

              _t.sublayers || (_t.sublayers = new _core_Collection_js__WEBPACK_IMPORTED_MODULE_20__["default"]()), _t.sublayers.unshift(_e5);
            } else i.unshift(_e5);
          }
        } catch (err) {
          _iterator2.e(err);
        } finally {
          _iterator2.f();
        }

        return i;
      }

      Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_7__["property"])({
        readOnly: !0
      })], B.prototype, "allSublayers", void 0), Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_7__["property"])({
        json: {
          type: Object,
          write: !0
        }
      })], B.prototype, "customParameters", void 0), Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_7__["property"])({
        json: {
          type: Object,
          write: !0
        }
      })], B.prototype, "customLayerParameters", void 0), Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_7__["property"])({
        type: String,
        json: {
          write: !0
        }
      })], B.prototype, "copyright", void 0), Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_7__["property"])()], B.prototype, "description", void 0), Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_7__["property"])({
        readOnly: !0
      })], B.prototype, "dimensions", void 0), Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_7__["property"])({
        json: {
          type: [[Number]],
          read: {
            source: "extent"
          },
          write: {
            target: "extent"
          },
          origins: {
            service: {
              read: {
                source: "extent"
              }
            }
          }
        }
      })], B.prototype, "fullExtent", void 0), Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_reader_js__WEBPACK_IMPORTED_MODULE_9__["reader"])(["web-document", "portal-item"], "fullExtent", ["extent"])], B.prototype, "readFullExtentFromItemOrMap", null), Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_writer_js__WEBPACK_IMPORTED_MODULE_11__["writer"])(["web-document", "portal-item"], "fullExtent", {
        extent: {
          type: [[Number]]
        }
      })], B.prototype, "writeFullExtent", null), Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_7__["property"])()], B.prototype, "fullExtents", void 0), Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_7__["property"])({
        type: String,
        json: {
          write: {
            ignoreOrigin: !0
          }
        }
      })], B.prototype, "featureInfoFormat", void 0), Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_7__["property"])({
        type: String,
        json: {
          write: {
            ignoreOrigin: !0
          }
        }
      })], B.prototype, "featureInfoUrl", void 0), Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_7__["property"])({
        type: String,
        json: {
          origins: {
            "web-document": {
              "default": "image/png",
              type: N.jsonValues,
              read: {
                reader: N.read,
                source: "format"
              },
              write: {
                writer: N.write,
                target: "format"
              }
            }
          }
        }
      })], B.prototype, "imageFormat", void 0), Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_reader_js__WEBPACK_IMPORTED_MODULE_9__["reader"])("imageFormat", ["supportedImageFormatTypes"])], B.prototype, "readImageFormat", null), Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_7__["property"])({
        type: Number,
        json: {
          read: {
            source: "maxHeight"
          },
          write: {
            target: "maxHeight"
          }
        }
      })], B.prototype, "imageMaxHeight", void 0), Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_7__["property"])({
        type: Number,
        json: {
          read: {
            source: "maxWidth"
          },
          write: {
            target: "maxWidth"
          }
        }
      })], B.prototype, "imageMaxWidth", void 0), Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_7__["property"])()], B.prototype, "imageTransparency", void 0), Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_7__["property"])(_support_commonProperties_js__WEBPACK_IMPORTED_MODULE_29__["legendEnabled"])], B.prototype, "legendEnabled", void 0), Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_7__["property"])({
        type: ["show", "hide", "hide-children"]
      })], B.prototype, "listMode", void 0), Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_7__["property"])({
        type: String,
        json: {
          write: {
            ignoreOrigin: !0
          }
        }
      })], B.prototype, "mapUrl", void 0), Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_7__["property"])({
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
      })], B.prototype, "isReference", void 0), Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_7__["property"])({
        type: ["WMS"]
      })], B.prototype, "operationalLayerType", void 0), Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_7__["property"])({
        type: _geometry_SpatialReference_js__WEBPACK_IMPORTED_MODULE_18__["default"],
        json: {
          origins: {
            service: {
              read: {
                source: "extent.spatialReference"
              }
            }
          },
          write: !1
        }
      })], B.prototype, "spatialReference", void 0), Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_reader_js__WEBPACK_IMPORTED_MODULE_9__["reader"])(["web-document", "portal-item"], "spatialReference", ["spatialReferences"])], B.prototype, "readSpatialReferenceFromItemOrDocument", null), Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_7__["property"])({
        type: [_core_accessorSupport_ensureType_js__WEBPACK_IMPORTED_MODULE_6__["Integer"]],
        json: {
          read: {
            source: "spatialReferences"
          },
          write: {
            ignoreOrigin: !0
          }
        }
      })], B.prototype, "spatialReferences", void 0), Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_writer_js__WEBPACK_IMPORTED_MODULE_11__["writer"])(["web-document", "portal-item"], "spatialReferences")], B.prototype, "writeSpatialReferences", null), Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_7__["property"])({
        type: _core_Collection_js__WEBPACK_IMPORTED_MODULE_20__["default"].ofType(_support_WMSSublayer_js__WEBPACK_IMPORTED_MODULE_39__["default"]),
        json: {
          write: {
            target: "layers",
            overridePolicy: function overridePolicy(e, r, t) {
              if (function (e, r) {
                return e.some(function (e) {
                  for (var _t2 in e) {
                    if (Object(_core_accessorSupport_write_js__WEBPACK_IMPORTED_MODULE_16__["willPropertyWrite"])(e, _t2, null, r)) return !0;
                  }

                  return !1;
                });
              }(this.allSublayers, t)) return {
                ignoreOrigin: !0
              };
            }
          }
        }
      })], B.prototype, "sublayers", void 0), Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_reader_js__WEBPACK_IMPORTED_MODULE_9__["reader"])(["web-document", "portal-item"], "sublayers", ["layers", "visibleLayers"])], B.prototype, "readSublayersFromItemOrMap", null), Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_reader_js__WEBPACK_IMPORTED_MODULE_9__["reader"])("service", "sublayers", ["layers"])], B.prototype, "readSublayers", null), Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_writer_js__WEBPACK_IMPORTED_MODULE_11__["writer"])("sublayers", {
        layers: {
          type: [_support_WMSSublayer_js__WEBPACK_IMPORTED_MODULE_39__["default"]]
        },
        visibleLayers: {
          type: [String]
        }
      })], B.prototype, "writeSublayers", null), Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_7__["property"])({
        json: {
          read: !1
        },
        readOnly: !0,
        value: "wms"
      })], B.prototype, "type", void 0), Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_7__["property"])(_support_commonProperties_js__WEBPACK_IMPORTED_MODULE_29__["url"])], B.prototype, "url", void 0), Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_7__["property"])({
        type: String,
        json: {
          write: {
            ignoreOrigin: !0
          }
        }
      })], B.prototype, "version", void 0), B = Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_subclass_js__WEBPACK_IMPORTED_MODULE_10__["subclass"])("esri.layers.WMSLayer")], B);
      var A = B;
      /* harmony default export */

      __webpack_exports__["default"] = A;
      /***/
    }
  }]);
})();
//# sourceMappingURL=WMSLayer-js-es5.js.map