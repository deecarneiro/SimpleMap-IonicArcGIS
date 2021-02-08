(function () {
  function _get(target, property, receiver) { if (typeof Reflect !== "undefined" && Reflect.get) { _get = Reflect.get; } else { _get = function _get(target, property, receiver) { var base = _superPropBase(target, property); if (!base) return; var desc = Object.getOwnPropertyDescriptor(base, property); if (desc.get) { return desc.get.call(receiver); } return desc.value; }; } return _get(target, property, receiver || target); }

  function _superPropBase(object, property) { while (!Object.prototype.hasOwnProperty.call(object, property)) { object = _getPrototypeOf(object); if (object === null) break; } return object; }

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

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["GeoRSSLayer-js"], {
    /***/
    "AP+b":
    /*!*********************************************************!*\
      !*** ./node_modules/@arcgis/core/layers/GeoRSSLayer.js ***!
      \*********************************************************/

    /*! exports provided: default */

    /***/
    function APB(module, __webpack_exports__, __webpack_require__) {
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


      var _config_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ../config.js */
      "EyXx");
      /* harmony import */


      var _core_maybe_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ../core/maybe.js */
      "srIe");
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


      var _core_urlUtils_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! ../core/urlUtils.js */
      "4EHJ");
      /* harmony import */


      var _core_uuid_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
      /*! ../core/uuid.js */
      "ju1D");
      /* harmony import */


      var _portal_support_resourceExtension_js__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
      /*! ../portal/support/resourceExtension.js */
      "9AIY");
      /* harmony import */


      var _core_promiseUtils_js__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
      /*! ../core/promiseUtils.js */
      "9MzC");
      /* harmony import */


      var _symbols_Symbol_js__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
      /*! ../symbols/Symbol.js */
      "DZP5");
      /* harmony import */


      var _symbols_SimpleLineSymbol_js__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(
      /*! ../symbols/SimpleLineSymbol.js */
      "21Ip");
      /* harmony import */


      var _request_js__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(
      /*! ../request.js */
      "Lqtk");
      /* harmony import */


      var _symbols_PictureMarkerSymbol_js__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(
      /*! ../symbols/PictureMarkerSymbol.js */
      "N+cL");
      /* harmony import */


      var _symbols_SimpleFillSymbol_js__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(
      /*! ../symbols/SimpleFillSymbol.js */
      "DXYb");
      /* harmony import */


      var _symbols_SimpleMarkerSymbol_js__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(
      /*! ../symbols/SimpleMarkerSymbol.js */
      "Tcmu");
      /* harmony import */


      var _chunks_symbols_js__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(
      /*! ../chunks/symbols.js */
      "nNR5");
      /* harmony import */


      var _Layer_js__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(
      /*! ./Layer.js */
      "pqNC");
      /* harmony import */


      var _core_MultiOriginJSONSupport_js__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(
      /*! ../core/MultiOriginJSONSupport.js */
      "5pQd");
      /* harmony import */


      var _support_commonProperties_js__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(
      /*! ./support/commonProperties.js */
      "IvSi");
      /* harmony import */


      var _mixins_OperationalLayer_js__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(
      /*! ./mixins/OperationalLayer.js */
      "uRH/");
      /* harmony import */


      var _mixins_BlendLayer_js__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(
      /*! ./mixins/BlendLayer.js */
      "mXvl");
      /* harmony import */


      var _mixins_PortalLayer_js__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(
      /*! ./mixins/PortalLayer.js */
      "DbUH");
      /* harmony import */


      var _mixins_RefreshableLayer_js__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(
      /*! ./mixins/RefreshableLayer.js */
      "jhcG");
      /* harmony import */


      var _mixins_ScaleRangeLayer_js__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(
      /*! ./mixins/ScaleRangeLayer.js */
      "WmKv");
      /*
      All material copyright ESRI, All Rights Reserved, unless otherwise specified.
      See https://js.arcgis.com/4.18/esri/copyright.txt for details.
      */


      var R = ["atom", "xml"],
          C = {
        base: _symbols_Symbol_js__WEBPACK_IMPORTED_MODULE_13__["default"],
        key: "type",
        typeMap: {
          "simple-line": _symbols_SimpleLineSymbol_js__WEBPACK_IMPORTED_MODULE_14__["default"]
        },
        errorContext: "symbol"
      },
          L = {
        base: _symbols_Symbol_js__WEBPACK_IMPORTED_MODULE_13__["default"],
        key: "type",
        typeMap: {
          "picture-marker": _symbols_PictureMarkerSymbol_js__WEBPACK_IMPORTED_MODULE_16__["default"],
          "simple-marker": _symbols_SimpleMarkerSymbol_js__WEBPACK_IMPORTED_MODULE_18__["default"]
        },
        errorContext: "symbol"
      },
          k = {
        base: _symbols_Symbol_js__WEBPACK_IMPORTED_MODULE_13__["default"],
        key: "type",
        typeMap: {
          "simple-fill": _symbols_SimpleFillSymbol_js__WEBPACK_IMPORTED_MODULE_17__["default"]
        },
        errorContext: "symbol"
      };

      var O = /*#__PURE__*/function (_Object) {
        _inherits(O, _Object);

        var _super = _createSuper(O);

        function O() {
          var _this;

          _classCallCheck(this, O);

          for (var _len = arguments.length, e = new Array(_len), _key = 0; _key < _len; _key++) {
            e[_key] = arguments[_key];
          }

          _this = _super.call.apply(_super, [this].concat(e)), _this.description = null, _this.legendEnabled = !0, _this.lineSymbol = null, _this.pointSymbol = null, _this.polygonSymbol = null, _this.operationalLayerType = "GeoRSS", _this.outSpatialReference = null, _this.url = null, _this.type = "geo-rss";
          return _this;
        }

        _createClass(O, [{
          key: "normalizeCtorArgs",
          value: function normalizeCtorArgs(e, o) {
            return "string" == typeof e ? _objectSpread({
              url: e
            }, o) : e;
          }
        }, {
          key: "title",
          get: function get() {
            var e = this._get("title");

            return e && "defaults" !== this.originOf("title") ? e : this.url ? Object(_core_urlUtils_js__WEBPACK_IMPORTED_MODULE_9__["getFilename"])(this.url, R) || "GeoRSS" : e || "";
          },
          set: function set(e) {
            this._set("title", e);
          }
        }, {
          key: "readFeatureCollections",
          value: function readFeatureCollections(e, o) {
            return o.featureCollection.layers.forEach(function (e) {
              var o = e.layerDefinition.drawingInfo.renderer.symbol;
              o && "esriSFS" === o.type && o.outline && -1 !== o.outline.style.indexOf("esriSFS") && (o.outline.style = "esriSLSSolid");
            }), o.featureCollection.layers;
          }
        }, {
          key: "load",
          value: function load(e) {
            var _this2 = this;

            var o = Object(_core_maybe_js__WEBPACK_IMPORTED_MODULE_3__["isSome"])(e) ? e.signal : null;
            return this.addResolvingPromise(this.loadFromPortal({
              supportedTypes: ["Map Service", "Feature Service", "Feature Collection", "Scene Service"]
            }, e).then(function () {
              return _this2._fetchService(o);
            }, function () {
              return _this2._fetchService(o);
            })), Object(_core_promiseUtils_js__WEBPACK_IMPORTED_MODULE_12__["resolve"])(this);
          }
        }, {
          key: "_fetchService",
          value: function () {
            var _fetchService2 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(e) {
              var _yield$Object, r;

              return regeneratorRuntime.wrap(function _callee$(_context) {
                while (1) {
                  switch (_context.prev = _context.next) {
                    case 0:
                      _context.next = 2;
                      return Object(_request_js__WEBPACK_IMPORTED_MODULE_15__["default"])(_config_js__WEBPACK_IMPORTED_MODULE_2__["default"].geoRSSServiceUrl, {
                        query: {
                          url: this.url,
                          refresh: !!this.loaded || void 0,
                          outSR: this.outSpatialReference ? JSON.stringify(this.outSpatialReference.toJSON()) : void 0
                        },
                        signal: e
                      });

                    case 2:
                      _yield$Object = _context.sent;
                      r = _yield$Object.data;
                      this.read(r, {
                        origin: "service"
                      });

                    case 5:
                    case "end":
                      return _context.stop();
                  }
                }
              }, _callee, this);
            }));

            function _fetchService(_x) {
              return _fetchService2.apply(this, arguments);
            }

            return _fetchService;
          }()
        }]);

        return O;
      }(Object(_mixins_BlendLayer_js__WEBPACK_IMPORTED_MODULE_24__["BlendLayer"])(Object(_mixins_RefreshableLayer_js__WEBPACK_IMPORTED_MODULE_26__["RefreshableLayer"])(Object(_mixins_OperationalLayer_js__WEBPACK_IMPORTED_MODULE_23__["OperationalLayer"])(Object(_mixins_PortalLayer_js__WEBPACK_IMPORTED_MODULE_25__["PortalLayer"])(Object(_mixins_ScaleRangeLayer_js__WEBPACK_IMPORTED_MODULE_27__["ScaleRangeLayer"])(Object(_core_MultiOriginJSONSupport_js__WEBPACK_IMPORTED_MODULE_21__["MultiOriginJSONMixin"])(_Layer_js__WEBPACK_IMPORTED_MODULE_20__["default"])))))));

      Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_6__["property"])()], O.prototype, "description", void 0), Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_6__["property"])({
        dependsOn: ["url"],
        json: {
          origins: {
            service: {
              read: {
                source: "name",
                reader: function reader(e) {
                  return e || void 0;
                }
              }
            }
          }
        }
      })], O.prototype, "title", null), Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_6__["property"])()], O.prototype, "featureCollections", void 0), Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_reader_js__WEBPACK_IMPORTED_MODULE_7__["reader"])("service", "featureCollections", ["featureCollection.layers"])], O.prototype, "readFeatureCollections", null), Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_6__["property"])(_support_commonProperties_js__WEBPACK_IMPORTED_MODULE_22__["legendEnabled"])], O.prototype, "legendEnabled", void 0), Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_6__["property"])({
        types: C,
        json: {
          write: !0
        }
      })], O.prototype, "lineSymbol", void 0), Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_6__["property"])({
        type: ["show", "hide"]
      })], O.prototype, "listMode", void 0), Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_6__["property"])({
        types: L,
        json: {
          write: !0
        }
      })], O.prototype, "pointSymbol", void 0), Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_6__["property"])({
        types: k,
        json: {
          write: !0
        }
      })], O.prototype, "polygonSymbol", void 0), Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_6__["property"])({
        type: ["GeoRSS"]
      })], O.prototype, "operationalLayerType", void 0), Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_6__["property"])()], O.prototype, "outSpatialReference", void 0), Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_6__["property"])(_support_commonProperties_js__WEBPACK_IMPORTED_MODULE_22__["url"])], O.prototype, "url", void 0), Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_6__["property"])({
        readOnly: !0,
        json: {
          read: !1
        },
        value: "geo-rss"
      })], O.prototype, "type", void 0), O = Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_subclass_js__WEBPACK_IMPORTED_MODULE_8__["subclass"])("esri.layers.GeoRSSLayer")], O);
      var F = O;
      /* harmony default export */

      __webpack_exports__["default"] = F;
      /***/
    },

    /***/
    "DbUH":
    /*!****************************************************************!*\
      !*** ./node_modules/@arcgis/core/layers/mixins/PortalLayer.js ***!
      \****************************************************************/

    /*! exports provided: PortalLayer */

    /***/
    function DbUH(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "PortalLayer", function () {
        return d;
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


      var _core_accessorSupport_decorators_reader_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ../../core/accessorSupport/decorators/reader.js */
      "r88o");
      /* harmony import */


      var _core_accessorSupport_decorators_subclass_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ../../core/accessorSupport/decorators/subclass.js */
      "04ZG");
      /* harmony import */


      var _core_accessorSupport_decorators_writer_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! ../../core/accessorSupport/decorators/writer.js */
      "Cduq");
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


      var _core_promiseUtils_js__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
      /*! ../../core/promiseUtils.js */
      "9MzC");
      /* harmony import */


      var _portal_Portal_js__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
      /*! ../../portal/Portal.js */
      "AiS/");
      /* harmony import */


      var _portal_PortalItem_js__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(
      /*! ../../portal/PortalItem.js */
      "p+Gi");
      /*
      All material copyright ESRI, All Rights Reserved, unless otherwise specified.
      See https://js.arcgis.com/4.18/esri/copyright.txt for details.
      */


      var n = _core_Logger_js__WEBPACK_IMPORTED_MODULE_2__["default"].getLogger("esri.layers.mixins.PortalLayer"),
          d = function d(r) {
        var d = /*#__PURE__*/function (_r) {
          _inherits(d, _r);

          var _super2 = _createSuper(d);

          function d() {
            var _this3;

            _classCallCheck(this, d);

            _this3 = _super2.apply(this, arguments), _this3.resourceReferences = {
              portalItem: null,
              paths: []
            };
            return _this3;
          }

          _createClass(d, [{
            key: "destroy",
            value: function destroy() {
              var t;
              null == (t = this.portalItem) || t.destroy(), this.portalItem = null;
            }
          }, {
            key: "portalItem",
            set: function set(t) {
              t !== this._get("portalItem") && (this.removeOrigin("portal-item"), this._set("portalItem", t));
            }
          }, {
            key: "readPortalItem",
            value: function readPortalItem(t, r, e) {
              if (r.itemId) return new _portal_PortalItem_js__WEBPACK_IMPORTED_MODULE_14__["default"]({
                id: r.itemId,
                portal: e && e.portal
              });
            }
          }, {
            key: "writePortalItem",
            value: function writePortalItem(t, r) {
              t && t.id && (r.itemId = t.id);
            }
          }, {
            key: "loadFromPortal",
            value: function () {
              var _loadFromPortal = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee2(t, r) {
                var e;
                return regeneratorRuntime.wrap(function _callee2$(_context2) {
                  while (1) {
                    switch (_context2.prev = _context2.next) {
                      case 0:
                        if (!(this.portalItem && this.portalItem.id)) {
                          _context2.next = 14;
                          break;
                        }

                        _context2.prev = 1;
                        _context2.next = 4;
                        return Promise.all(
                        /*! import() | portal-support-layersLoader-js */
                        [__webpack_require__.e("common"), __webpack_require__.e("portal-support-layersLoader-js")]).then(__webpack_require__.bind(null,
                        /*! ../../portal/support/layersLoader.js */
                        "O5Ly"));

                      case 4:
                        e = _context2.sent;
                        Object(_core_promiseUtils_js__WEBPACK_IMPORTED_MODULE_12__["throwIfAborted"])(r);
                        _context2.next = 8;
                        return e.load({
                          instance: this,
                          supportedTypes: t.supportedTypes,
                          validateItem: t.validateItem,
                          supportsData: t.supportsData
                        }, r);

                      case 8:
                        return _context2.abrupt("return", _context2.sent);

                      case 11:
                        _context2.prev = 11;
                        _context2.t0 = _context2["catch"](1);
                        throw n.warn("Failed to load layer (".concat(this.title, ", ").concat(this.id, ") portal item (").concat(this.portalItem.id, ")\n  ").concat(_context2.t0)), _context2.t0;

                      case 14:
                      case "end":
                        return _context2.stop();
                    }
                  }
                }, _callee2, this, [[1, 11]]);
              }));

              function loadFromPortal(_x2, _x3) {
                return _loadFromPortal.apply(this, arguments);
              }

              return loadFromPortal;
            }()
          }, {
            key: "read",
            value: function read(t, r) {
              r && (r.layer = this), _get(_getPrototypeOf(d.prototype), "read", this).call(this, t, r);
            }
          }, {
            key: "write",
            value: function write(t, r) {
              var e = r && r.portal,
                  o = this.portalItem && this.portalItem.id && (this.portalItem.portal || _portal_Portal_js__WEBPACK_IMPORTED_MODULE_13__["default"].getDefault());

              return e && o && !Object(_core_urlUtils_js__WEBPACK_IMPORTED_MODULE_9__["hasSamePortal"])(o.restUrl, e.restUrl) ? (r.messages && r.messages.push(new _core_Error_js__WEBPACK_IMPORTED_MODULE_8__["default"]("layer:cross-portal", "The layer '".concat(this.title, " (").concat(this.id, ")' cannot be persisted because it refers to an item on a different portal than the one being saved to. To save the scene, set the layer.portalItem to null or save the scene to the same portal as the item associated with the layer"), {
                layer: this
              })), null) : _get(_getPrototypeOf(d.prototype), "write", this).call(this, t, _objectSpread(_objectSpread({}, r), {}, {
                layer: this
              }));
            }
          }]);

          return d;
        }(r);

        return Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_4__["property"])({
          type: _portal_PortalItem_js__WEBPACK_IMPORTED_MODULE_14__["default"]
        })], d.prototype, "portalItem", null), Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_reader_js__WEBPACK_IMPORTED_MODULE_5__["reader"])("web-document", "portalItem", ["itemId"])], d.prototype, "readPortalItem", null), Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_writer_js__WEBPACK_IMPORTED_MODULE_7__["writer"])("web-document", "portalItem", {
          itemId: {
            type: String
          }
        })], d.prototype, "writePortalItem", null), Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_4__["property"])()], d.prototype, "resourceReferences", void 0), d = Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_subclass_js__WEBPACK_IMPORTED_MODULE_6__["subclass"])("esri.layers.mixins.PortalLayer")], d), d;
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


      var o = function o(_o2) {
        var t = /*#__PURE__*/function (_o) {
          _inherits(t, _o);

          var _super4 = _createSuper(t);

          function t() {
            var _this5;

            _classCallCheck(this, t);

            _this5 = _super4.apply(this, arguments), _this5.refreshInterval = 0;
            return _this5;
          }

          _createClass(t, [{
            key: "refresh",
            value: function refresh() {
              this.emit("refresh");
            }
          }]);

          return t;
        }(_o2);

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
    "m0D6":
    /*!********************************************************************!*\
      !*** ./node_modules/@arcgis/core/renderers/support/lengthUtils.js ***!
      \********************************************************************/

    /*! exports provided: meterIn */

    /***/
    function m0D6(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "meterIn", function () {
        return m;
      });
      /* harmony import */


      var _geometry_support_Ellipsoid_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ../../geometry/support/Ellipsoid.js */
      "IlWj");
      /* harmony import */


      var _core_unitUtils_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ../../core/unitUtils.js */
      "gEht");
      /*
      All material copyright ESRI, All Rights Reserved, unless otherwise specified.
      See https://js.arcgis.com/4.18/esri/copyright.txt for details.
      */


      var m = {
        inches: Object(_core_unitUtils_js__WEBPACK_IMPORTED_MODULE_1__["convertUnit"])(1, "meters", "inches"),
        feet: Object(_core_unitUtils_js__WEBPACK_IMPORTED_MODULE_1__["convertUnit"])(1, "meters", "feet"),
        "us-feet": Object(_core_unitUtils_js__WEBPACK_IMPORTED_MODULE_1__["convertUnit"])(1, "meters", "us-feet"),
        yards: Object(_core_unitUtils_js__WEBPACK_IMPORTED_MODULE_1__["convertUnit"])(1, "meters", "yards"),
        miles: Object(_core_unitUtils_js__WEBPACK_IMPORTED_MODULE_1__["convertUnit"])(1, "meters", "miles"),
        "nautical-miles": Object(_core_unitUtils_js__WEBPACK_IMPORTED_MODULE_1__["convertUnit"])(1, "meters", "nautical-miles"),
        millimeters: Object(_core_unitUtils_js__WEBPACK_IMPORTED_MODULE_1__["convertUnit"])(1, "meters", "millimeters"),
        centimeters: Object(_core_unitUtils_js__WEBPACK_IMPORTED_MODULE_1__["convertUnit"])(1, "meters", "centimeters"),
        decimeters: Object(_core_unitUtils_js__WEBPACK_IMPORTED_MODULE_1__["convertUnit"])(1, "meters", "decimeters"),
        meters: Object(_core_unitUtils_js__WEBPACK_IMPORTED_MODULE_1__["convertUnit"])(1, "meters", "meters"),
        kilometers: Object(_core_unitUtils_js__WEBPACK_IMPORTED_MODULE_1__["convertUnit"])(1, "meters", "kilometers"),
        "decimal-degrees": 1 / Object(_core_unitUtils_js__WEBPACK_IMPORTED_MODULE_1__["lengthToDegrees"])(1, "meters", _geometry_support_Ellipsoid_js__WEBPACK_IMPORTED_MODULE_0__["earth"].radius)
      };
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


      var t = function t(_t2) {
        var s = /*#__PURE__*/function (_t) {
          _inherits(s, _t);

          var _super5 = _createSuper(s);

          function s() {
            var _this6;

            _classCallCheck(this, s);

            _this6 = _super5.apply(this, arguments), _this6.blendMode = "normal", _this6.effect = null;
            return _this6;
          }

          return s;
        }(_t2);

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

    }
  }]);
})();
//# sourceMappingURL=GeoRSSLayer-js-es5.js.map