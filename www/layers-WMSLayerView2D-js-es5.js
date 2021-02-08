(function () {
  function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

  function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

  function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

  function _get(target, property, receiver) { if (typeof Reflect !== "undefined" && Reflect.get) { _get = Reflect.get; } else { _get = function _get(target, property, receiver) { var base = _superPropBase(target, property); if (!base) return; var desc = Object.getOwnPropertyDescriptor(base, property); if (desc.get) { return desc.get.call(receiver); } return desc.value; }; } return _get(target, property, receiver || target); }

  function _superPropBase(object, property) { while (!Object.prototype.hasOwnProperty.call(object, property)) { object = _getPrototypeOf(object); if (object === null) break; } return object; }

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

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["layers-WMSLayerView2D-js"], {
    /***/
    "/3C5":
    /*!****************************************************************************!*\
      !*** ./node_modules/@arcgis/core/symbols/support/FeatureExpressionInfo.js ***!
      \****************************************************************************/

    /*! exports provided: default */

    /***/
    function C5(module, __webpack_exports__, __webpack_require__) {
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


      var _layers_support_fieldUtils_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
      /*! ../../layers/support/fieldUtils.js */
      "wdpY");
      /*
      All material copyright ESRI, All Rights Reserved, unless otherwise specified.
      See https://js.arcgis.com/4.18/esri/copyright.txt for details.
      */


      var _p;

      var i = _p = /*#__PURE__*/function (_core_JSONSupport_js_) {
        _inherits(p, _core_JSONSupport_js_);

        var _super = _createSuper(p);

        function p() {
          _classCallCheck(this, p);

          return _super.apply(this, arguments);
        }

        _createClass(p, [{
          key: "collectRequiredFields",
          value: function () {
            var _collectRequiredFields = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(r, o) {
              return regeneratorRuntime.wrap(function _callee$(_context) {
                while (1) {
                  switch (_context.prev = _context.next) {
                    case 0:
                      return _context.abrupt("return", Object(_layers_support_fieldUtils_js__WEBPACK_IMPORTED_MODULE_10__["collectArcadeFieldNames"])(r, o, this.expression));

                    case 1:
                    case "end":
                      return _context.stop();
                  }
                }
              }, _callee, this);
            }));

            function collectRequiredFields(_x, _x2) {
              return _collectRequiredFields.apply(this, arguments);
            }

            return collectRequiredFields;
          }()
        }, {
          key: "clone",
          value: function clone() {
            return new _p({
              expression: this.expression,
              title: this.title
            });
          }
        }]);

        return p;
      }(_core_JSONSupport_js__WEBPACK_IMPORTED_MODULE_9__["JSONSupport"]);

      Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_4__["property"])({
        type: String,
        json: {
          write: !0
        }
      })], i.prototype, "expression", void 0), Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_4__["property"])({
        type: String,
        json: {
          write: !0
        }
      })], i.prototype, "title", void 0), i = _p = Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_subclass_js__WEBPACK_IMPORTED_MODULE_5__["subclass"])("esri.layers.support.FeatureExpressionInfo")], i);
      var c = i;
      /* harmony default export */

      __webpack_exports__["default"] = c;
      /***/
    },

    /***/
    "/RTN":
    /*!********************************************************************!*\
      !*** ./node_modules/@arcgis/core/symbols/support/ElevationInfo.js ***!
      \********************************************************************/

    /*! exports provided: default */

    /***/
    function RTN(module, __webpack_exports__, __webpack_require__) {
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


      var _core_jsonMap_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ../../core/jsonMap.js */
      "+opI");
      /* harmony import */


      var _core_accessorSupport_decorators_reader_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! ../../core/accessorSupport/decorators/reader.js */
      "r88o");
      /* harmony import */


      var _core_accessorSupport_decorators_subclass_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! ../../core/accessorSupport/decorators/subclass.js */
      "04ZG");
      /* harmony import */


      var _core_accessorSupport_decorators_writer_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! ../../core/accessorSupport/decorators/writer.js */
      "Cduq");
      /* harmony import */


      var _core_urlUtils_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
      /*! ../../core/urlUtils.js */
      "4EHJ");
      /* harmony import */


      var _core_uuid_js__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
      /*! ../../core/uuid.js */
      "ju1D");
      /* harmony import */


      var _portal_support_resourceExtension_js__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
      /*! ../../portal/support/resourceExtension.js */
      "9AIY");
      /* harmony import */


      var _core_JSONSupport_js__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
      /*! ../../core/JSONSupport.js */
      "ag7Y");
      /* harmony import */


      var _FeatureExpressionInfo_js__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(
      /*! ./FeatureExpressionInfo.js */
      "/3C5");
      /* harmony import */


      var _unitConversionUtils_js__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(
      /*! ./unitConversionUtils.js */
      "gHbr");
      /*
      All material copyright ESRI, All Rights Reserved, unless otherwise specified.
      See https://js.arcgis.com/4.18/esri/copyright.txt for details.
      */


      var _l;

      var m = Object(_core_jsonMap_js__WEBPACK_IMPORTED_MODULE_6__["strict"])()({
        onTheGround: "on-the-ground",
        relativeToGround: "relative-to-ground",
        relativeToScene: "relative-to-scene",
        absoluteHeight: "absolute-height"
      }),
          d = new _core_jsonMap_js__WEBPACK_IMPORTED_MODULE_6__["JSONMap"]({
        foot: "feet",
        kilometer: "kilometers",
        meter: "meters",
        mile: "miles",
        "us-foot": "us-feet",
        yard: "yards"
      });

      var c = _l = /*#__PURE__*/function (_core_JSONSupport_js_2) {
        _inherits(l, _core_JSONSupport_js_2);

        var _super2 = _createSuper(l);

        function l() {
          var _this;

          _classCallCheck(this, l);

          _this = _super2.apply(this, arguments), _this.offset = null;
          return _this;
        }

        _createClass(l, [{
          key: "readFeatureExpressionInfo",
          value: function readFeatureExpressionInfo(e, r) {
            return null != e ? e : r.featureExpression && 0 === r.featureExpression.value ? {
              expression: "0"
            } : void 0;
          }
        }, {
          key: "writeFeatureExpressionInfo",
          value: function writeFeatureExpressionInfo(e, r, o, t) {
            r[o] = e.write(null, t), "0" === e.expression && (r.featureExpression = {
              value: 0
            });
          }
        }, {
          key: "mode",
          get: function get() {
            return this._isOverridden("mode") ? this._get("mode") : Object(_core_maybe_js__WEBPACK_IMPORTED_MODULE_2__["isSome"])(this.offset) || this.featureExpressionInfo ? "relative-to-ground" : "on-the-ground";
          },
          set: function set(e) {
            this._override("mode", e);
          }
        }, {
          key: "unit",
          set: function set(e) {
            this._set("unit", e);
          }
        }, {
          key: "write",
          value: function write(e, r) {
            return this.offset || this.mode || this.featureExpressionInfo || this.unit ? _get(_getPrototypeOf(l.prototype), "write", this).call(this, e, r) : null;
          }
        }, {
          key: "clone",
          value: function clone() {
            return new _l({
              mode: this.mode,
              offset: this.offset,
              featureExpressionInfo: this.featureExpressionInfo ? this.featureExpressionInfo.clone() : void 0,
              unit: this.unit
            });
          }
        }]);

        return l;
      }(_core_JSONSupport_js__WEBPACK_IMPORTED_MODULE_13__["JSONSupport"]);

      Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_5__["property"])({
        type: _FeatureExpressionInfo_js__WEBPACK_IMPORTED_MODULE_14__["default"],
        json: {
          write: !0
        }
      })], c.prototype, "featureExpressionInfo", void 0), Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_reader_js__WEBPACK_IMPORTED_MODULE_7__["reader"])("featureExpressionInfo", ["featureExpressionInfo", "featureExpression"])], c.prototype, "readFeatureExpressionInfo", null), Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_writer_js__WEBPACK_IMPORTED_MODULE_9__["writer"])("featureExpressionInfo", {
        featureExpressionInfo: {
          type: _FeatureExpressionInfo_js__WEBPACK_IMPORTED_MODULE_14__["default"]
        },
        "featureExpression.value": {
          type: [0]
        }
      })], c.prototype, "writeFeatureExpressionInfo", null), Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_5__["property"])({
        type: m.apiValues,
        dependsOn: ["offset", "featureExpressionInfo"],
        nonNullable: !0,
        json: {
          type: m.jsonValues,
          read: m.read,
          write: {
            writer: m.write,
            isRequired: !0
          }
        }
      })], c.prototype, "mode", null), Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_5__["property"])({
        type: Number,
        json: {
          write: !0
        }
      })], c.prototype, "offset", void 0), Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_5__["property"])({
        type: _unitConversionUtils_js__WEBPACK_IMPORTED_MODULE_15__["supportedUnits"],
        json: {
          type: String,
          read: d.read,
          write: d.write
        }
      })], c.prototype, "unit", null), c = _l = Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_subclass_js__WEBPACK_IMPORTED_MODULE_8__["subclass"])("esri.layers.support.ElevationInfo")], c);
      var x = c;
      /* harmony default export */

      __webpack_exports__["default"] = x;
      /***/
    },

    /***/
    "IvSi":
    /*!**********************************************************************!*\
      !*** ./node_modules/@arcgis/core/layers/support/commonProperties.js ***!
      \**********************************************************************/

    /*! exports provided: combinedViewLayerTimeExtentProperty, elevationInfo, labelsVisible, legendEnabled, opacity, opacityDrawingInfo, popupEnabled, readOnlyService, screenSizePerspectiveEnabled, url */

    /***/
    function IvSi(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "combinedViewLayerTimeExtentProperty", function () {
        return m;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "elevationInfo", function () {
        return d;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "labelsVisible", function () {
        return l;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "legendEnabled", function () {
        return c;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "opacity", function () {
        return u;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "opacityDrawingInfo", function () {
        return y;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "popupEnabled", function () {
        return a;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "readOnlyService", function () {
        return f;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "screenSizePerspectiveEnabled", function () {
        return s;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "url", function () {
        return p;
      });
      /* harmony import */


      var _core_accessorSupport_utils_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ../../core/accessorSupport/utils.js */
      "TDcG");
      /* harmony import */


      var _chunks_persistableUrlUtils_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ../../chunks/persistableUrlUtils.js */
      "/PL2");
      /* harmony import */


      var _core_accessorSupport_write_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ../../core/accessorSupport/write.js */
      "xHih");
      /* harmony import */


      var _webdoc_support_opacityUtils_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ../../webdoc/support/opacityUtils.js */
      "Qr4e");
      /* harmony import */


      var _TimeExtent_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ../../TimeExtent.js */
      "ZYtI");
      /* harmony import */


      var _symbols_support_ElevationInfo_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ../../symbols/support/ElevationInfo.js */
      "/RTN");
      /*
      All material copyright ESRI, All Rights Reserved, unless otherwise specified.
      See https://js.arcgis.com/4.18/esri/copyright.txt for details.
      */


      var s = {
        type: Boolean,
        value: !0,
        json: {
          origins: {
            "web-scene": {
              read: {
                source: ["id", "url", "layerType"],
                reader: function reader(i, r) {
                  if (null != r.screenSizePerspective || "defaults" !== this.originOf("screenSizePerspectiveEnabled")) return r.screenSizePerspective;
                  Object(_core_accessorSupport_utils_js__WEBPACK_IMPORTED_MODULE_0__["getProperties"])(this).store.set("screenSizePerspectiveEnabled", !1, 0);
                }
              },
              write: {
                ignoreOrigin: !0,
                target: "screenSizePerspective",
                writer: function writer(e, i, n, t) {
                  ("defaults" === this.originOf("screenSizePerspectiveEnabled") && e || Object(_core_accessorSupport_write_js__WEBPACK_IMPORTED_MODULE_2__["willPropertyWrite"])(this, "screenSizePerspectiveEnabled", {}, t)) && (i[n] = e);
                }
              }
            }
          }
        }
      },
          a = {
        type: Boolean,
        value: !0,
        json: {
          name: "disablePopup",
          read: {
            reader: function reader(e, i) {
              return !i.disablePopup;
            }
          },
          write: {
            enabled: !0,
            writer: function writer(e, i, r) {
              i[r] = !e;
            }
          }
        }
      },
          l = {
        type: Boolean,
        value: !0,
        json: {
          name: "showLabels",
          write: !0
        }
      },
          p = {
        type: String,
        json: {
          origins: {
            "portal-item": {
              write: !1
            }
          },
          write: {
            isRequired: !0,
            ignoreOrigin: !0,
            writer: _chunks_persistableUrlUtils_js__WEBPACK_IMPORTED_MODULE_1__["w"]
          }
        }
      },
          c = {
        type: Boolean,
        value: !0,
        json: {
          origins: {
            service: {
              read: {
                enabled: !1
              }
            }
          },
          name: "showLegend",
          write: !0
        }
      },
          d = {
        value: null,
        type: _symbols_support_ElevationInfo_js__WEBPACK_IMPORTED_MODULE_5__["default"],
        json: {
          origins: {
            service: {
              name: "elevationInfo",
              write: !0
            }
          },
          name: "layerDefinition.elevationInfo",
          write: !0
        }
      };

      function f(e) {
        return {
          type: e,
          readOnly: !0,
          json: {
            origins: {
              service: {
                read: !0
              }
            },
            read: !1
          }
        };
      }

      var u = {
        type: Number,
        json: {
          origins: {
            "web-document": {
              "default": 1,
              write: !0,
              read: !0
            },
            "portal-item": {
              write: !0
            }
          }
        }
      },
          y = _objectSpread(_objectSpread({}, u), {}, {
        json: _objectSpread(_objectSpread({}, u.json), {}, {
          origins: {
            "web-document": _objectSpread(_objectSpread({}, u.json.origins["web-document"]), {}, {
              write: {
                enabled: !0,
                target: {
                  opacity: {
                    type: Number
                  },
                  "layerDefinition.drawingInfo.transparency": {
                    type: Number
                  }
                }
              }
            })
          },
          read: {
            source: ["layerDefinition.drawingInfo.transparency", "drawingInfo.transparency"],
            reader: function reader(e, i, r) {
              return r && "service" !== r.origin || !i.drawingInfo || void 0 === i.drawingInfo.transparency ? i.layerDefinition && i.layerDefinition.drawingInfo && void 0 !== i.layerDefinition.drawingInfo.transparency ? Object(_webdoc_support_opacityUtils_js__WEBPACK_IMPORTED_MODULE_3__["transparencyToOpacity"])(i.layerDefinition.drawingInfo.transparency) : void 0 : Object(_webdoc_support_opacityUtils_js__WEBPACK_IMPORTED_MODULE_3__["transparencyToOpacity"])(i.drawingInfo.transparency);
            }
          }
        })
      }),
          m = {
        type: _TimeExtent_js__WEBPACK_IMPORTED_MODULE_4__["default"],
        dependsOn: ["view.timeExtent", "layer.timeExtent", "layer.timeInfo", "layer.timeOffset", "layer.timeOffset.value", "layer.timeOffset.unit", "layer.useViewTime"],
        readOnly: !0,
        get: function get() {
          var e, i;
          if (null == (e = this.layer) || !e.timeInfo) return null;
          var r = null == (i = this.view) ? void 0 : i.timeExtent,
              n = this.layer.timeExtent,
              t = this.layer.useViewTime ? r && n ? r.intersection(n) : r || n : n;
          if (!t || t.isEmpty) return t;

          var o = this.layer.timeOffset,
              s = o ? t.offset(-o.value, o.unit) : t,
              a = this._get("timeExtent");

          return s.equals(a) ? a : s;
        }
      };
      /***/

    },

    /***/
    "JTUT":
    /*!*********************************************************************!*\
      !*** ./node_modules/@arcgis/core/views/2d/layers/WMSLayerView2D.js ***!
      \*********************************************************************/

    /*! exports provided: default */

    /***/
    function JTUT(module, __webpack_exports__, __webpack_require__) {
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


      var _core_Error_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ../../../core/Error.js */
      "zlDU");
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


      var _geometry_Extent_js__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
      /*! ../../../geometry/Extent.js */
      "OvF4");
      /* harmony import */


      var _layers_RefreshableLayerView_js__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
      /*! ../../layers/RefreshableLayerView.js */
      "bHqs");
      /* harmony import */


      var _layers_support_ExportWMSImageParameters_js__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
      /*! ../../../layers/support/ExportWMSImageParameters.js */
      "uAeW");
      /* harmony import */


      var _layers_LayerView_js__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(
      /*! ../../layers/LayerView.js */
      "NloG");
      /* harmony import */


      var _layers_WMSLayerView_js__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(
      /*! ../../layers/WMSLayerView.js */
      "prZ3");
      /* harmony import */


      var _engine_BitmapContainer_js__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(
      /*! ../engine/BitmapContainer.js */
      "LTnl");
      /* harmony import */


      var _LayerView2D_js__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(
      /*! ./LayerView2D.js */
      "Vm2Q");
      /* harmony import */


      var _support_ExportStrategy_js__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(
      /*! ./support/ExportStrategy.js */
      "vbiG");
      /*
      All material copyright ESRI, All Rights Reserved, unless otherwise specified.
      See https://js.arcgis.com/4.18/esri/copyright.txt for details.
      */


      var y = _core_Logger_js__WEBPACK_IMPORTED_MODULE_2__["default"].getLogger("esri.views.2d.layers.WMSLayerView2D");

      var g = /*#__PURE__*/function (_Object) {
        _inherits(g, _Object);

        var _super3 = _createSuper(g);

        function g() {
          _classCallCheck(this, g);

          return _super3.apply(this, arguments);
        }

        _createClass(g, [{
          key: "initialize",
          value: function initialize() {
            var e = this.layer,
                t = this.view;
            e.supportsSpatialReference(t.spatialReference) || this.addResolvingPromise(Object(_core_promiseUtils_js__WEBPACK_IMPORTED_MODULE_10__["reject"])(new _core_Error_js__WEBPACK_IMPORTED_MODULE_6__["default"]("layerview:spatial-reference-incompatible", "The spatial references supported by this WMS layer are incompatible with the spatial reference of the view", {
              layer: e
            })));
          }
        }, {
          key: "hitTest",
          value: function hitTest() {
            return null;
          }
        }, {
          key: "update",
          value: function update(e) {
            this.strategy.update(e)["catch"](function (e) {
              Object(_core_promiseUtils_js__WEBPACK_IMPORTED_MODULE_10__["isAbortError"])(e) || y.error(e);
            });
          }
        }, {
          key: "attach",
          value: function attach() {
            var _this2 = this;

            var e = this.layer,
                t = this.view,
                r = e.imageMaxHeight,
                i = e.imageMaxWidth;
            this._bitmapContainer = new _engine_BitmapContainer_js__WEBPACK_IMPORTED_MODULE_16__["BitmapContainer"](), this.container.addChild(this._bitmapContainer), this.strategy = new _support_ExportStrategy_js__WEBPACK_IMPORTED_MODULE_18__["default"]({
              container: this._bitmapContainer,
              fetchSource: this.fetchImage.bind(this),
              requestUpdate: this.requestUpdate.bind(this),
              imageMaxHeight: r,
              imageMaxWidth: i,
              imageRotationSupported: !1,
              imageNormalizationSupported: !1,
              hidpi: !1
            }), this._exportWMSImageParameters = new _layers_support_ExportWMSImageParameters_js__WEBPACK_IMPORTED_MODULE_13__["default"]({
              layer: e,
              view: t
            }), this.handles.add(this._exportWMSImageParameters.watch("version", function (e) {
              _this2._exportImageVersion !== e && (_this2._exportImageVersion = e, _this2.requestUpdate());
            }), "wms");
          }
        }, {
          key: "detach",
          value: function detach() {
            this.handles.remove("wms"), this.strategy.destroy(), this._exportWMSImageParameters.layer = null, this._exportWMSImageParameters.destroy(), this._exportWMSImageParameters = null, this.container.removeChild(this._bitmapContainer), this._bitmapContainer.removeAllChildren();
          }
        }, {
          key: "moveStart",
          value: function moveStart() {}
        }, {
          key: "viewChange",
          value: function viewChange() {}
        }, {
          key: "moveEnd",
          value: function moveEnd() {
            this.requestUpdate();
          }
        }, {
          key: "createFetchPopupFeaturesQuery",
          value: function createFetchPopupFeaturesQuery(e) {
            var t = this.view,
                r = this._bitmapContainer,
                i = e.x,
                s = e.y,
                a = t.spatialReference;
            var o = null,
                m = 0,
                n = 0;
            r.children.some(function (e) {
              var t = e.width,
                  r = e.height,
                  h = e.resolution,
                  d = e.x,
                  l = e.y,
                  c = d + h * t,
                  u = l - h * r;
              return i >= d && i <= c && s <= l && s >= u && (o = new _geometry_Extent_js__WEBPACK_IMPORTED_MODULE_11__["default"]({
                xmin: d,
                ymin: u,
                xmax: c,
                ymax: l,
                spatialReference: a
              }), m = t, n = r, !0);
            });
            var h = o.width / m,
                d = Math.round((i - o.xmin) / h),
                l = Math.round((o.ymax - s) / h);
            return {
              extent: o,
              width: m,
              height: n,
              x: d,
              y: l
            };
          }
        }, {
          key: "doRefresh",
          value: function () {
            var _doRefresh = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee2() {
              return regeneratorRuntime.wrap(function _callee2$(_context2) {
                while (1) {
                  switch (_context2.prev = _context2.next) {
                    case 0:
                      this.requestUpdate();

                    case 1:
                    case "end":
                      return _context2.stop();
                  }
                }
              }, _callee2, this);
            }));

            function doRefresh() {
              return _doRefresh.apply(this, arguments);
            }

            return doRefresh;
          }()
        }, {
          key: "isUpdating",
          value: function isUpdating() {
            return this.strategy.updating || this.updateRequested;
          }
        }, {
          key: "fetchImage",
          value: function fetchImage(e, t, r, i) {
            return this.layer.fetchImage(e, t, r, _objectSpread({
              timeExtent: this._exportWMSImageParameters.timeExtent,
              timestamp: this.refreshTimestamp
            }, i));
          }
        }]);

        return g;
      }(Object(_layers_WMSLayerView_js__WEBPACK_IMPORTED_MODULE_15__["WMSLayerView"])(Object(_layers_RefreshableLayerView_js__WEBPACK_IMPORTED_MODULE_12__["RefreshableLayerView"])(Object(_LayerView2D_js__WEBPACK_IMPORTED_MODULE_17__["LayerView2DMixin"])(_layers_LayerView_js__WEBPACK_IMPORTED_MODULE_14__["default"]))));

      Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_4__["property"])()], g.prototype, "strategy", void 0), Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_4__["property"])({
        dependsOn: ["strategy.updating"]
      })], g.prototype, "updating", void 0), g = Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_subclass_js__WEBPACK_IMPORTED_MODULE_5__["subclass"])("esri.views.2d.layers.WMSLayerView2D")], g);
      var f = g;
      /* harmony default export */

      __webpack_exports__["default"] = f;
      /***/
    },

    /***/
    "gHbr":
    /*!**************************************************************************!*\
      !*** ./node_modules/@arcgis/core/symbols/support/unitConversionUtils.js ***!
      \**************************************************************************/

    /*! exports provided: getMetersPerUnit, supportedUnits, supportsUnit */

    /***/
    function gHbr(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "getMetersPerUnit", function () {
        return r;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "supportedUnits", function () {
        return e;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "supportsUnit", function () {
        return n;
      });
      /* harmony import */


      var _renderers_support_lengthUtils_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ../../renderers/support/lengthUtils.js */
      "m0D6");
      /*
      All material copyright ESRI, All Rights Reserved, unless otherwise specified.
      See https://js.arcgis.com/4.18/esri/copyright.txt for details.
      */


      function n(n) {
        return null != _renderers_support_lengthUtils_js__WEBPACK_IMPORTED_MODULE_0__["meterIn"][n];
      }

      function r(n) {
        return 1 / (_renderers_support_lengthUtils_js__WEBPACK_IMPORTED_MODULE_0__["meterIn"][n] || 1);
      }

      var e = function () {
        var n = Object.keys(_renderers_support_lengthUtils_js__WEBPACK_IMPORTED_MODULE_0__["meterIn"]);
        return n.sort(), n;
      }();
      /***/

    },

    /***/
    "prZ3":
    /*!****************************************************************!*\
      !*** ./node_modules/@arcgis/core/views/layers/WMSLayerView.js ***!
      \****************************************************************/

    /*! exports provided: WMSLayerView */

    /***/
    function prZ3(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "WMSLayerView", function () {
        return i;
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


      var _core_Error_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ../../core/Error.js */
      "zlDU");
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


      var _core_promiseUtils_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
      /*! ../../core/promiseUtils.js */
      "9MzC");
      /*
      All material copyright ESRI, All Rights Reserved, unless otherwise specified.
      See https://js.arcgis.com/4.18/esri/copyright.txt for details.
      */


      var i = function i(_i2) {
        var c = /*#__PURE__*/function (_i) {
          _inherits(c, _i);

          var _super4 = _createSuper(c);

          function c() {
            _classCallCheck(this, c);

            return _super4.apply(this, arguments);
          }

          _createClass(c, [{
            key: "fetchPopupFeatures",
            value: function () {
              var _fetchPopupFeatures = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee3(e) {
                var r, t, i, _c, u, a, n, h, m;

                return regeneratorRuntime.wrap(function _callee3$(_context3) {
                  while (1) {
                    switch (_context3.prev = _context3.next) {
                      case 0:
                        r = this.layer;

                        if (e) {
                          _context3.next = 3;
                          break;
                        }

                        return _context3.abrupt("return", Object(_core_promiseUtils_js__WEBPACK_IMPORTED_MODULE_10__["reject"])(new _core_Error_js__WEBPACK_IMPORTED_MODULE_6__["default"]("wmslayerview:fetchPopupFeatures", "Nothing to fetch without area", {
                          layer: r
                        })));

                      case 3:
                        t = r.popupEnabled;

                        if (t) {
                          _context3.next = 6;
                          break;
                        }

                        return _context3.abrupt("return", Object(_core_promiseUtils_js__WEBPACK_IMPORTED_MODULE_10__["reject"])(new _core_Error_js__WEBPACK_IMPORTED_MODULE_6__["default"]("wmslayerview:fetchPopupFeatures", "popupEnabled should be true", {
                          popupEnabled: t
                        })));

                      case 6:
                        i = this.createFetchPopupFeaturesQuery(e), _c = i.extent, u = i.width, a = i.height, n = i.x, h = i.y;

                        if (_c && u && a) {
                          _context3.next = 9;
                          break;
                        }

                        throw new _core_Error_js__WEBPACK_IMPORTED_MODULE_6__["default"]("wmslayerview:fetchPopupFeatures", "WMSLayer does not support fetching features.", {
                          extent: _c,
                          width: u,
                          height: a
                        });

                      case 9:
                        m = r.fetchFeatureInfo(_c, u, a, n, h);
                        return _context3.abrupt("return", m ? m.then(function (e) {
                          return [e];
                        }) : Object(_core_promiseUtils_js__WEBPACK_IMPORTED_MODULE_10__["resolve"])([]));

                      case 11:
                      case "end":
                        return _context3.stop();
                    }
                  }
                }, _callee3, this);
              }));

              function fetchPopupFeatures(_x3) {
                return _fetchPopupFeatures.apply(this, arguments);
              }

              return fetchPopupFeatures;
            }()
          }]);

          return c;
        }(_i2);

        return Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_4__["property"])()], c.prototype, "layer", void 0), c = Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_subclass_js__WEBPACK_IMPORTED_MODULE_5__["subclass"])("esri.layers.mixins.WMSLayerView")], c), c;
      };
      /***/

    }
  }]);
})();
//# sourceMappingURL=layers-WMSLayerView2D-js-es5.js.map