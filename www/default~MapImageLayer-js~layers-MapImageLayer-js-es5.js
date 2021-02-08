(function () {
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

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["default~MapImageLayer-js~layers-MapImageLayer-js"], {
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
    "U/i9":
    /*!***********************************************************!*\
      !*** ./node_modules/@arcgis/core/layers/MapImageLayer.js ***!
      \***********************************************************/

    /*! exports provided: default */

    /***/
    function UI9(module, __webpack_exports__, __webpack_require__) {
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


      var _core_accessorSupport_decorators_reader_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ../core/accessorSupport/decorators/reader.js */
      "r88o");
      /* harmony import */


      var _core_accessorSupport_decorators_subclass_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! ../core/accessorSupport/decorators/subclass.js */
      "04ZG");
      /* harmony import */


      var _core_accessorSupport_decorators_writer_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! ../core/accessorSupport/decorators/writer.js */
      "Cduq");
      /* harmony import */


      var _core_Error_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! ../core/Error.js */
      "zlDU");
      /* harmony import */


      var _core_urlUtils_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
      /*! ../core/urlUtils.js */
      "4EHJ");
      /* harmony import */


      var _core_uuid_js__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
      /*! ../core/uuid.js */
      "ju1D");
      /* harmony import */


      var _core_accessorSupport_PropertyOrigin_js__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
      /*! ../core/accessorSupport/PropertyOrigin.js */
      "ku/q");
      /* harmony import */


      var _portal_support_resourceExtension_js__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
      /*! ../portal/support/resourceExtension.js */
      "9AIY");
      /* harmony import */


      var _core_promiseUtils_js__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(
      /*! ../core/promiseUtils.js */
      "9MzC");
      /* harmony import */


      var _geometry_Extent_js__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(
      /*! ../geometry/Extent.js */
      "OvF4");
      /* harmony import */


      var _request_js__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(
      /*! ../request.js */
      "Lqtk");
      /* harmony import */


      var _core_loadAll_js__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(
      /*! ../core/loadAll.js */
      "GFPt");
      /* harmony import */


      var _Layer_js__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(
      /*! ./Layer.js */
      "pqNC");
      /* harmony import */


      var _TimeExtent_js__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(
      /*! ../TimeExtent.js */
      "ZYtI");
      /* harmony import */


      var _core_MultiOriginJSONSupport_js__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(
      /*! ../core/MultiOriginJSONSupport.js */
      "5pQd");
      /* harmony import */


      var _support_commonProperties_js__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(
      /*! ./support/commonProperties.js */
      "IvSi");
      /* harmony import */


      var _mixins_OperationalLayer_js__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(
      /*! ./mixins/OperationalLayer.js */
      "uRH/");
      /* harmony import */


      var _mixins_ArcGISService_js__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(
      /*! ./mixins/ArcGISService.js */
      "PVlI");
      /* harmony import */


      var _mixins_BlendLayer_js__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(
      /*! ./mixins/BlendLayer.js */
      "mXvl");
      /* harmony import */


      var _mixins_CustomParametersMixin_js__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(
      /*! ./mixins/CustomParametersMixin.js */
      "iyhF");
      /* harmony import */


      var _mixins_PortalLayer_js__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(
      /*! ./mixins/PortalLayer.js */
      "DbUH");
      /* harmony import */


      var _mixins_RefreshableLayer_js__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(
      /*! ./mixins/RefreshableLayer.js */
      "jhcG");
      /* harmony import */


      var _mixins_ScaleRangeLayer_js__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(
      /*! ./mixins/ScaleRangeLayer.js */
      "WmKv");
      /* harmony import */


      var _mixins_TemporalLayer_js__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(
      /*! ./mixins/TemporalLayer.js */
      "YBpl");
      /* harmony import */


      var _core_HandleOwner_js__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(
      /*! ../core/HandleOwner.js */
      "kJYu");
      /* harmony import */


      var _geometry_support_scaleUtils_js__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(
      /*! ../geometry/support/scaleUtils.js */
      "SaAm");
      /* harmony import */


      var _mixins_ArcGISMapService_js__WEBPACK_IMPORTED_MODULE_32__ = __webpack_require__(
      /*! ./mixins/ArcGISMapService.js */
      "MD9Z");
      /* harmony import */


      var _support_Sublayer_js__WEBPACK_IMPORTED_MODULE_33__ = __webpack_require__(
      /*! ./support/Sublayer.js */
      "6dDx");
      /* harmony import */


      var _support_sublayerUtils_js__WEBPACK_IMPORTED_MODULE_34__ = __webpack_require__(
      /*! ./support/sublayerUtils.js */
      "Ilhi");
      /* harmony import */


      var _mixins_SublayersOwner_js__WEBPACK_IMPORTED_MODULE_35__ = __webpack_require__(
      /*! ./mixins/SublayersOwner.js */
      "1Ana");
      /* harmony import */


      var _support_ExportImageParameters_js__WEBPACK_IMPORTED_MODULE_36__ = __webpack_require__(
      /*! ./support/ExportImageParameters.js */
      "cM4j");
      /*
      All material copyright ESRI, All Rights Reserved, unless otherwise specified.
      See https://js.arcgis.com/4.18/esri/copyright.txt for details.
      */


      var U = /*#__PURE__*/function (_Object) {
        _inherits(U, _Object);

        var _super = _createSuper(U);

        function U() {
          var _this;

          _classCallCheck(this, U);

          for (var _len = arguments.length, e = new Array(_len), _key = 0; _key < _len; _key++) {
            e[_key] = arguments[_key];
          }

          _this = _super.call.apply(_super, [this].concat(e)), _this.alwaysRefetch = !1, _this.dpi = 96, _this.gdbVersion = null, _this.imageFormat = "png24", _this.imageMaxHeight = 2048, _this.imageMaxWidth = 2048, _this.imageTransparency = !0, _this.labelsVisible = !1, _this.isReference = null, _this.operationalLayerType = "ArcGISMapServiceLayer", _this.sourceJSON = null, _this.sublayers = null, _this.type = "map-image", _this.url = null;
          return _this;
        }

        _createClass(U, [{
          key: "normalizeCtorArgs",
          value: function normalizeCtorArgs(e, r) {
            return "string" == typeof e ? _objectSpread({
              url: e
            }, r) : e;
          }
        }, {
          key: "load",
          value: function load(e) {
            var _this2 = this;

            var t = Object(_core_maybe_js__WEBPACK_IMPORTED_MODULE_2__["isSome"])(e) ? e.signal : null;
            return this.addResolvingPromise(this.loadFromPortal({
              supportedTypes: ["Map Service"]
            }, e).then(function () {
              return _this2._fetchService(t);
            }, function () {
              return _this2._fetchService(t);
            })), Object(_core_promiseUtils_js__WEBPACK_IMPORTED_MODULE_14__["resolve"])(this);
          }
        }, {
          key: "readImageFormat",
          value: function readImageFormat(e, r) {
            var t = r.supportedImageFormatTypes;
            return t && t.indexOf("PNG32") > -1 ? "png32" : "png24";
          }
        }, {
          key: "writeSublayers",
          value: function writeSublayers(e, r, t, s) {
            if (!this.loaded || !e) return;
            var o = e.slice().reverse().flatten(function (_ref) {
              var e = _ref.sublayers;
              return e && e.toArray().reverse();
            }).toArray();
            var i = !1;

            if (this.capabilities && this.capabilities.operations.supportsExportMap && this.capabilities.exportMap.supportsDynamicLayers) {
              var _e = Object(_core_accessorSupport_PropertyOrigin_js__WEBPACK_IMPORTED_MODULE_12__["nameToId"])(s.origin);

              if (3 === _e) {
                var _e2 = this.createSublayersForOrigin("service").sublayers;
                i = Object(_support_sublayerUtils_js__WEBPACK_IMPORTED_MODULE_34__["shouldWriteSublayerStructure"])(o, _e2, 2);
              } else if (_e > 3) {
                var _e3 = this.createSublayersForOrigin("portal-item");

                i = Object(_support_sublayerUtils_js__WEBPACK_IMPORTED_MODULE_34__["shouldWriteSublayerStructure"])(o, _e3.sublayers, Object(_core_accessorSupport_PropertyOrigin_js__WEBPACK_IMPORTED_MODULE_12__["nameToId"])(_e3.origin));
              }
            }

            var a = [],
                p = _objectSpread({
              writeSublayerStructure: i
            }, s);

            var n = i;
            o.forEach(function (e) {
              var r = e.write({}, p);
              a.push(r), n = n || "user" === e.originOf("visible");
            });
            a.some(function (e) {
              return Object.keys(e).length > 1;
            }) && (r.layers = a), n && (r.visibleLayers = o.filter(function (e) {
              return e.visible;
            }).map(function (e) {
              return e.id;
            }));
          }
        }, {
          key: "createExportImageParameters",
          value: function createExportImageParameters(e, r, t, s) {
            var o = s && s.pixelRatio || 1;
            e && this.version >= 10 && (e = e.clone().shiftCentralMeridian());
            var i = new _support_ExportImageParameters_js__WEBPACK_IMPORTED_MODULE_36__["ExportImageParameters"]({
              layer: this,
              scale: Object(_geometry_support_scaleUtils_js__WEBPACK_IMPORTED_MODULE_31__["getScale"])({
                extent: e,
                width: r
              }) * o
            }),
                a = i.toJSON();
            i.destroy();
            var p = !s || !s.rotation || this.version < 10.3 ? {} : {
              rotation: -s.rotation
            },
                m = e && e.spatialReference,
                n = m.wkid || JSON.stringify(m.toJSON());
            a.dpi *= o;
            var l = {};

            if (null != s && s.timeExtent) {
              var _s$timeExtent$toJSON = s.timeExtent.toJSON(),
                  _e4 = _s$timeExtent$toJSON.start,
                  _r = _s$timeExtent$toJSON.end;

              l.time = _e4 && _r && _e4 === _r ? "" + _e4 : "".concat(null == _e4 ? "null" : _e4, ",").concat(null == _r ? "null" : _r);
            } else this.timeInfo && !this.timeInfo.hasLiveData && (l.time = "null,null");

            return _objectSpread(_objectSpread(_objectSpread({
              bbox: e && e.xmin + "," + e.ymin + "," + e.xmax + "," + e.ymax,
              bboxSR: n,
              imageSR: n,
              size: r + "," + t
            }, a), p), l);
          }
        }, {
          key: "fetchImage",
          value: function () {
            var _fetchImage = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(e, r, t, s) {
              var o, i, a;
              return regeneratorRuntime.wrap(function _callee$(_context) {
                while (1) {
                  switch (_context.prev = _context.next) {
                    case 0:
                      o = {
                        responseType: "image"
                      };
                      s && s.timestamp && (o.query = _objectSpread(_objectSpread({}, o.query), {}, {
                        _ts: s.timestamp
                      })), s && s.signal && (o.signal = s.signal), this.customParameters && Object.keys(this.customParameters).length && (o.query = _objectSpread(_objectSpread({}, this.customParameters), o.query));
                      i = this.parsedUrl.path + "/export", a = _objectSpread(_objectSpread(_objectSpread({}, this.parsedUrl.query), this.createExportImageParameters(e, r, t, s)), {}, {
                        f: "image",
                        _ts: this.alwaysRefetch ? Date.now() : null
                      });

                      if (!(null != a.dynamicLayers && !this.capabilities.exportMap.supportsDynamicLayers)) {
                        _context.next = 5;
                        break;
                      }

                      return _context.abrupt("return", Object(_core_promiseUtils_js__WEBPACK_IMPORTED_MODULE_14__["reject"])(new _core_Error_js__WEBPACK_IMPORTED_MODULE_9__["default"]("mapimagelayer:dynamiclayer-not-supported", "service ".concat(this.url, " doesn't support dynamic layers, which is required to be able to change the sublayer's order, rendering, labeling or source."), {
                        query: a
                      })));

                    case 5:
                      o.query ? o.query = _objectSpread(_objectSpread({}, a), o.query) : o.query = a;
                      return _context.abrupt("return", Object(_request_js__WEBPACK_IMPORTED_MODULE_16__["default"])(i, o).then(function (e) {
                        return e.data;
                      })["catch"](function (e) {
                        if (Object(_core_promiseUtils_js__WEBPACK_IMPORTED_MODULE_14__["isAbortError"])(e)) throw e;
                        throw new _core_Error_js__WEBPACK_IMPORTED_MODULE_9__["default"]("mapimagelayer:image-fetch-error", "Unable to load image: ".concat(i), {
                          error: e
                        });
                      }));

                    case 7:
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
          key: "fetchRecomputedExtents",
          value: function () {
            var _fetchRecomputedExtents = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee2() {
              var e,
                  r,
                  _yield$Object,
                  t,
                  s,
                  o,
                  i,
                  a,
                  _args2 = arguments;

              return regeneratorRuntime.wrap(function _callee2$(_context2) {
                while (1) {
                  switch (_context2.prev = _context2.next) {
                    case 0:
                      e = _args2.length > 0 && _args2[0] !== undefined ? _args2[0] : {};
                      r = _objectSpread(_objectSpread({}, e), {}, {
                        query: {
                          returnUpdates: !0,
                          f: "json"
                        }
                      });
                      _context2.next = 4;
                      return Object(_request_js__WEBPACK_IMPORTED_MODULE_16__["default"])(this.url, r);

                    case 4:
                      _yield$Object = _context2.sent;
                      t = _yield$Object.data;
                      s = t.extent;
                      o = t.fullExtent;
                      i = t.timeExtent;
                      a = s || o;
                      return _context2.abrupt("return", {
                        fullExtent: a && _geometry_Extent_js__WEBPACK_IMPORTED_MODULE_15__["default"].fromJSON(a),
                        timeExtent: i && _TimeExtent_js__WEBPACK_IMPORTED_MODULE_19__["default"].fromJSON({
                          start: i[0],
                          end: i[1]
                        })
                      });

                    case 11:
                    case "end":
                      return _context2.stop();
                  }
                }
              }, _callee2, this);
            }));

            function fetchRecomputedExtents() {
              return _fetchRecomputedExtents.apply(this, arguments);
            }

            return fetchRecomputedExtents;
          }()
        }, {
          key: "loadAll",
          value: function loadAll() {
            var _this3 = this;

            return Object(_core_loadAll_js__WEBPACK_IMPORTED_MODULE_17__["loadAll"])(this, function (e) {
              e(_this3.allSublayers);
            });
          }
        }, {
          key: "_fetchService",
          value: function () {
            var _fetchService2 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee3(e) {
              var _yield$Object2, r, t;

              return regeneratorRuntime.wrap(function _callee3$(_context3) {
                while (1) {
                  switch (_context3.prev = _context3.next) {
                    case 0:
                      if (!this.sourceJSON) {
                        _context3.next = 2;
                        break;
                      }

                      return _context3.abrupt("return", void this.read(this.sourceJSON, {
                        origin: "service",
                        url: this.parsedUrl
                      }));

                    case 2:
                      _context3.next = 4;
                      return Object(_request_js__WEBPACK_IMPORTED_MODULE_16__["default"])(this.parsedUrl.path, {
                        query: _objectSpread(_objectSpread({
                          f: "json"
                        }, this.parsedUrl.query), this.customParameters),
                        signal: e
                      });

                    case 4:
                      _yield$Object2 = _context3.sent;
                      r = _yield$Object2.data;
                      t = _yield$Object2.ssl;
                      t && (this.url = this.url.replace(/^http:/i, "https:")), this.sourceJSON = r, this.read(r, {
                        origin: "service",
                        url: this.parsedUrl
                      });

                    case 8:
                    case "end":
                      return _context3.stop();
                  }
                }
              }, _callee3, this);
            }));

            function _fetchService(_x5) {
              return _fetchService2.apply(this, arguments);
            }

            return _fetchService;
          }()
        }]);

        return U;
      }(Object(_mixins_BlendLayer_js__WEBPACK_IMPORTED_MODULE_24__["BlendLayer"])(Object(_mixins_TemporalLayer_js__WEBPACK_IMPORTED_MODULE_29__["TemporalLayer"])(Object(_mixins_ScaleRangeLayer_js__WEBPACK_IMPORTED_MODULE_28__["ScaleRangeLayer"])(Object(_mixins_RefreshableLayer_js__WEBPACK_IMPORTED_MODULE_27__["RefreshableLayer"])(Object(_mixins_SublayersOwner_js__WEBPACK_IMPORTED_MODULE_35__["SublayersOwner"])(Object(_mixins_ArcGISMapService_js__WEBPACK_IMPORTED_MODULE_32__["ArcGISMapService"])(Object(_mixins_ArcGISService_js__WEBPACK_IMPORTED_MODULE_23__["ArcGISService"])(Object(_mixins_OperationalLayer_js__WEBPACK_IMPORTED_MODULE_22__["OperationalLayer"])(Object(_mixins_PortalLayer_js__WEBPACK_IMPORTED_MODULE_26__["PortalLayer"])(Object(_core_MultiOriginJSONSupport_js__WEBPACK_IMPORTED_MODULE_20__["MultiOriginJSONMixin"])(Object(_mixins_CustomParametersMixin_js__WEBPACK_IMPORTED_MODULE_25__["CustomParametersMixin"])(Object(_core_HandleOwner_js__WEBPACK_IMPORTED_MODULE_30__["HandleOwnerMixin"])(_Layer_js__WEBPACK_IMPORTED_MODULE_18__["default"])))))))))))));

      Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_5__["property"])()], U.prototype, "alwaysRefetch", void 0), Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_5__["property"])()], U.prototype, "dpi", void 0), Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_5__["property"])()], U.prototype, "gdbVersion", void 0), Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_5__["property"])({
        json: {
          read: !1,
          write: !1
        }
      })], U.prototype, "popupEnabled", void 0), Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_5__["property"])()], U.prototype, "imageFormat", void 0), Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_reader_js__WEBPACK_IMPORTED_MODULE_6__["reader"])("imageFormat", ["supportedImageFormatTypes"])], U.prototype, "readImageFormat", null), Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_5__["property"])({
        json: {
          origins: {
            service: {
              read: {
                source: "maxImageHeight"
              }
            }
          }
        }
      })], U.prototype, "imageMaxHeight", void 0), Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_5__["property"])({
        json: {
          origins: {
            service: {
              read: {
                source: "maxImageWidth"
              }
            }
          }
        }
      })], U.prototype, "imageMaxWidth", void 0), Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_5__["property"])()], U.prototype, "imageTransparency", void 0), Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_5__["property"])({
        json: {
          read: !1,
          write: !1
        }
      })], U.prototype, "labelsVisible", void 0), Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_5__["property"])({
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
      })], U.prototype, "isReference", void 0), Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_5__["property"])({
        type: ["ArcGISMapServiceLayer"]
      })], U.prototype, "operationalLayerType", void 0), Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_5__["property"])()], U.prototype, "sourceJSON", void 0), Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_5__["property"])({
        json: {
          write: {
            ignoreOrigin: !0
          }
        }
      })], U.prototype, "sublayers", void 0), Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_writer_js__WEBPACK_IMPORTED_MODULE_8__["writer"])("sublayers", {
        layers: {
          type: [_support_Sublayer_js__WEBPACK_IMPORTED_MODULE_33__["default"]]
        },
        visibleLayers: {
          type: [_core_accessorSupport_ensureType_js__WEBPACK_IMPORTED_MODULE_4__["Integer"]]
        }
      })], U.prototype, "writeSublayers", null), Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_5__["property"])({
        type: ["show", "hide", "hide-children"]
      })], U.prototype, "listMode", void 0), Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_5__["property"])({
        json: {
          read: !1
        },
        readOnly: !0,
        value: "map-image"
      })], U.prototype, "type", void 0), Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_5__["property"])(_support_commonProperties_js__WEBPACK_IMPORTED_MODULE_21__["url"])], U.prototype, "url", void 0), U = Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_subclass_js__WEBPACK_IMPORTED_MODULE_7__["subclass"])("esri.layers.MapImageLayer")], U);
      var T = U;
      /* harmony default export */

      __webpack_exports__["default"] = T;
      /***/
    },

    /***/
    "cM4j":
    /*!***************************************************************************!*\
      !*** ./node_modules/@arcgis/core/layers/support/ExportImageParameters.js ***!
      \***************************************************************************/

    /*! exports provided: ExportImageParameters */

    /***/
    function cM4j(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ExportImageParameters", function () {
        return y;
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
      /* harmony import */


      var _core_Accessor_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! ../../core/Accessor.js */
      "/CmD");
      /* harmony import */


      var _commonProperties_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
      /*! ./commonProperties.js */
      "IvSi");
      /* harmony import */


      var _core_HandleOwner_js__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
      /*! ../../core/HandleOwner.js */
      "kJYu");
      /* harmony import */


      var _sublayerUtils_js__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
      /*! ./sublayerUtils.js */
      "Ilhi");
      /* harmony import */


      var _views_View_js__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
      /*! ../../views/View.js */
      "U19y");
      /*
      All material copyright ESRI, All Rights Reserved, unless otherwise specified.
      See https://js.arcgis.com/4.18/esri/copyright.txt for details.
      */


      var o = {
        visible: "visibleSublayers",
        definitionExpression: "layerDefs",
        labelingInfo: "hasDynamicLayers",
        labelsVisible: "hasDynamicLayers",
        opacity: "hasDynamicLayers",
        minScale: "visibleSublayers",
        maxScale: "visibleSublayers",
        renderer: "hasDynamicLayers",
        source: "hasDynamicLayers"
      };

      var y = /*#__PURE__*/function (_Object2) {
        _inherits(y, _Object2);

        var _super2 = _createSuper(y);

        function y() {
          var _this4;

          _classCallCheck(this, y);

          _this4 = _super2.apply(this, arguments), _this4._scale = null, _this4.view = null;
          return _this4;
        }

        _createClass(y, [{
          key: "destroy",
          value: function destroy() {
            this.layer = this.view = null;
          }
        }, {
          key: "dynamicLayers",
          get: function get() {
            if (!this.hasDynamicLayers) return null;
            var e = this.visibleSublayers.map(function (e) {
              return e.toExportImageJSON();
            });
            return e.length ? JSON.stringify(e) : null;
          }
        }, {
          key: "hasDynamicLayers",
          get: function get() {
            return this.layer && Object(_sublayerUtils_js__WEBPACK_IMPORTED_MODULE_12__["isExportDynamic"])(this.visibleSublayers, this.layer.serviceSublayers, this.layer);
          }
        }, {
          key: "layer",
          set: function set(e) {
            var _this5 = this;

            this._get("layer") !== e && (this._set("layer", e), this.handles.remove("layer"), e && this.handles.add([e.allSublayers.on("change", function () {
              return _this5.notifyChange("visibleSublayers");
            }), e.on("sublayer-update", function (e) {
              return _this5.notifyChange(o[e.propertyName]);
            })], "layer"));
          }
        }, {
          key: "layers",
          get: function get() {
            var e = this.visibleSublayers;
            return e ? e.length ? "show:" + e.map(function (e) {
              return e.id;
            }).join(",") : "show:-1" : null;
          }
        }, {
          key: "layerDefs",
          get: function get() {
            var e = this.visibleSublayers.filter(function (e) {
              return null != e.definitionExpression;
            });
            return e.length ? JSON.stringify(e.reduce(function (e, s) {
              return e[s.id] = s.definitionExpression, e;
            }, {})) : null;
          }
        }, {
          key: "scale",
          get: function get() {
            return null != this._scale ? this._scale : this.view && this.view.scale || 0;
          },
          set: function set(e) {
            this.view || (this._scale = e, this.notifyChange("scale"));
          }
        }, {
          key: "version",
          get: function get() {
            var e = this;
            e.layers, e.layerDefs, e.dynamicLayers, e.timeExtent;
            var s = e.layer;
            return s && (s.dpi, s.imageFormat, s.imageTransparency, s.gdbVersion), (this._get("version") || 0) + 1;
          },
          set: function set(e) {
            this._set("version", e);
          }
        }, {
          key: "visibleSublayers",
          get: function get() {
            var _this6 = this;

            var e = [];
            if (!this.layer) return e;

            var s = this.layer.sublayers,
                r = function r(s) {
              var i = _this6.scale,
                  a = 0 === i,
                  t = 0 === s.minScale || i <= s.minScale,
                  l = 0 === s.maxScale || i >= s.maxScale;
              s.visible && (a || t && l) && (s.sublayers ? s.sublayers.forEach(r) : e.unshift(s));
            };

            s && s.forEach(r);

            var i = this._get("visibleSublayers");

            return !i || i.length !== e.length || i.some(function (s, r) {
              return e[r] !== s;
            }) ? e : i;
          }
        }, {
          key: "toJSON",
          value: function toJSON() {
            var e = this.layer;
            var s = {
              dpi: e.dpi,
              format: e.imageFormat,
              transparent: e.imageTransparency,
              gdbVersion: e.gdbVersion || null
            };
            return this.hasDynamicLayers && this.dynamicLayers ? s.dynamicLayers = this.dynamicLayers : s = _objectSpread(_objectSpread({}, s), {}, {
              layers: this.layers,
              layerDefs: this.layerDefs
            }), s;
          }
        }]);

        return y;
      }(Object(_core_HandleOwner_js__WEBPACK_IMPORTED_MODULE_11__["HandleOwnerMixin"])(_core_Accessor_js__WEBPACK_IMPORTED_MODULE_9__["default"]));

      Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_4__["property"])({
        readOnly: !0,
        dependsOn: ["hasDynamicLayers", "visibleSublayers"]
      })], y.prototype, "dynamicLayers", null), Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_4__["property"])({
        readOnly: !0,
        dependsOn: ["visibleSublayers", "layer.serviceSublayers", "layer.capabilities"]
      })], y.prototype, "hasDynamicLayers", null), Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_4__["property"])()], y.prototype, "layer", null), Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_4__["property"])({
        readOnly: !0,
        dependsOn: ["visibleSublayers"]
      })], y.prototype, "layers", null), Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_4__["property"])({
        readOnly: !0,
        dependsOn: ["visibleSublayers"]
      })], y.prototype, "layerDefs", null), Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_4__["property"])({
        type: Number,
        dependsOn: ["view.scale"]
      })], y.prototype, "scale", null), Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_4__["property"])(_commonProperties_js__WEBPACK_IMPORTED_MODULE_10__["combinedViewLayerTimeExtentProperty"])], y.prototype, "timeExtent", void 0), Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_4__["property"])({
        dependsOn: ["layers", "layerDefs", "dynamicLayers", "layer.dpi", "layer.imageFormat", "layer.imageTransparency", "layer.gdbVersion", "timeExtent"]
      })], y.prototype, "version", null), Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_4__["property"])({
        type: _views_View_js__WEBPACK_IMPORTED_MODULE_13__["default"]
      })], y.prototype, "view", void 0), Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_4__["property"])({
        readOnly: !0,
        dependsOn: ["layer.sublayers", "scale"]
      })], y.prototype, "visibleSublayers", null), y = Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_subclass_js__WEBPACK_IMPORTED_MODULE_5__["subclass"])("esri.layers.mixins.ExportImageParameters")], y);
      /***/
    }
  }]);
})();
//# sourceMappingURL=default~MapImageLayer-js~layers-MapImageLayer-js-es5.js.map