(function () {
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

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["BingMapsLayer-js"], {
    /***/
    "5fH+":
    /*!***********************************************************!*\
      !*** ./node_modules/@arcgis/core/layers/BaseTileLayer.js ***!
      \***********************************************************/

    /*! exports provided: default */

    /***/
    function fH(module, __webpack_exports__, __webpack_require__) {
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


      var _core_Logger_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ../core/Logger.js */
      "6S2I");
      /* harmony import */


      var _core_accessorSupport_ensureType_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ../core/accessorSupport/ensureType.js */
      "zqDF");
      /* harmony import */


      var _core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ../core/accessorSupport/decorators/property.js */
      "WbKI");
      /* harmony import */


      var _core_accessorSupport_decorators_subclass_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ../core/accessorSupport/decorators/subclass.js */
      "04ZG");
      /* harmony import */


      var _core_Error_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ../core/Error.js */
      "zlDU");
      /* harmony import */


      var _core_urlUtils_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! ../core/urlUtils.js */
      "4EHJ");
      /* harmony import */


      var _core_uuid_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! ../core/uuid.js */
      "ju1D");
      /* harmony import */


      var _portal_support_resourceExtension_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! ../portal/support/resourceExtension.js */
      "9AIY");
      /* harmony import */


      var _geometry_SpatialReference_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
      /*! ../geometry/SpatialReference.js */
      "WZb1");
      /* harmony import */


      var _geometry_Extent_js__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
      /*! ../geometry/Extent.js */
      "OvF4");
      /* harmony import */


      var _request_js__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
      /*! ../request.js */
      "Lqtk");
      /* harmony import */


      var _Layer_js__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
      /*! ./Layer.js */
      "pqNC");
      /* harmony import */


      var _geometry_support_aaBoundingRect_js__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(
      /*! ../geometry/support/aaBoundingRect.js */
      "kYAx");
      /* harmony import */


      var _mixins_BlendLayer_js__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(
      /*! ./mixins/BlendLayer.js */
      "mXvl");
      /* harmony import */


      var _mixins_RefreshableLayer_js__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(
      /*! ./mixins/RefreshableLayer.js */
      "jhcG");
      /* harmony import */


      var _mixins_ScaleRangeLayer_js__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(
      /*! ./mixins/ScaleRangeLayer.js */
      "WmKv");
      /* harmony import */


      var _support_TileInfo_js__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(
      /*! ./support/TileInfo.js */
      "3/ME");
      /*
      All material copyright ESRI, All Rights Reserved, unless otherwise specified.
      See https://js.arcgis.com/4.18/esri/copyright.txt for details.
      */


      var f = {
        id: "0/0/0",
        level: 0,
        row: 0,
        col: 0,
        extent: null
      };

      var y = /*#__PURE__*/function (_Object) {
        _inherits(y, _Object);

        var _super = _createSuper(y);

        function y() {
          var _this;

          _classCallCheck(this, y);

          _this = _super.apply(this, arguments), _this.tileInfo = _support_TileInfo_js__WEBPACK_IMPORTED_MODULE_18__["default"].create({
            spatialReference: _geometry_SpatialReference_js__WEBPACK_IMPORTED_MODULE_10__["default"].WebMercator,
            size: 256
          }), _this.type = "base-tile", _this.fullExtent = new _geometry_Extent_js__WEBPACK_IMPORTED_MODULE_11__["default"](-20037508.342787, -20037508.34278, 20037508.34278, 20037508.342787, _geometry_SpatialReference_js__WEBPACK_IMPORTED_MODULE_10__["default"].WebMercator), _this.spatialReference = _geometry_SpatialReference_js__WEBPACK_IMPORTED_MODULE_10__["default"].WebMercator;
          return _this;
        }

        _createClass(y, [{
          key: "getTileBounds",
          value: function getTileBounds(e, t, r, o) {
            var s = o || Object(_geometry_support_aaBoundingRect_js__WEBPACK_IMPORTED_MODULE_14__["create"])();
            return f.level = e, f.row = t, f.col = r, f.extent = s, this.tileInfo.updateTileInfo(f), f.extent = null, s;
          }
        }, {
          key: "fetchTile",
          value: function fetchTile(e, t, r) {
            var o = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : {};
            var s = o.signal,
                i = o.timestamp,
                l = this.getTileUrl(e, t, r),
                a = {
              responseType: "image",
              signal: s
            };
            return null != i && (a.query = {
              _ts: o.timestamp
            }), Object(_request_js__WEBPACK_IMPORTED_MODULE_12__["default"])(l, a).then(function (e) {
              return e.data;
            });
          }
        }, {
          key: "getTileUrl",
          value: function getTileUrl() {
            throw new _core_Error_js__WEBPACK_IMPORTED_MODULE_6__["default"]("basetilelayer:gettileurl-not-implemented", "getTileUrl() is not implemented");
          }
        }]);

        return y;
      }(Object(_mixins_BlendLayer_js__WEBPACK_IMPORTED_MODULE_15__["BlendLayer"])(Object(_mixins_ScaleRangeLayer_js__WEBPACK_IMPORTED_MODULE_17__["ScaleRangeLayer"])(Object(_mixins_RefreshableLayer_js__WEBPACK_IMPORTED_MODULE_16__["RefreshableLayer"])(_Layer_js__WEBPACK_IMPORTED_MODULE_13__["default"]))));

      Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_4__["property"])({
        type: _support_TileInfo_js__WEBPACK_IMPORTED_MODULE_18__["default"]
      })], y.prototype, "tileInfo", void 0), Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_4__["property"])({
        type: ["show", "hide"]
      })], y.prototype, "listMode", void 0), Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_4__["property"])({
        readOnly: !0,
        value: "base-tile"
      })], y.prototype, "type", void 0), Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_4__["property"])()], y.prototype, "fullExtent", void 0), Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_4__["property"])()], y.prototype, "spatialReference", void 0), y = Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_subclass_js__WEBPACK_IMPORTED_MODULE_5__["subclass"])("esri.layers.BaseTileLayer")], y);
      var d = y;
      /* harmony default export */

      __webpack_exports__["default"] = d;
      /***/
    },

    /***/
    "CR/Q":
    /*!***********************************************************!*\
      !*** ./node_modules/@arcgis/core/layers/BingMapsLayer.js ***!
      \***********************************************************/

    /*! exports provided: default */

    /***/
    function CRQ(module, __webpack_exports__, __webpack_require__) {
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


      var _core_jsonMap_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ../core/jsonMap.js */
      "+opI");
      /* harmony import */


      var _core_accessorSupport_decorators_subclass_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! ../core/accessorSupport/decorators/subclass.js */
      "04ZG");
      /* harmony import */


      var _core_Error_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! ../core/Error.js */
      "zlDU");
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


      var _geometry_SpatialReference_js__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
      /*! ../geometry/SpatialReference.js */
      "WZb1");
      /* harmony import */


      var _request_js__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(
      /*! ../request.js */
      "Lqtk");
      /* harmony import */


      var _core_MultiOriginJSONSupport_js__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(
      /*! ../core/MultiOriginJSONSupport.js */
      "5pQd");
      /* harmony import */


      var _mixins_OperationalLayer_js__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(
      /*! ./mixins/OperationalLayer.js */
      "uRH/");
      /* harmony import */


      var _mixins_BlendLayer_js__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(
      /*! ./mixins/BlendLayer.js */
      "mXvl");
      /* harmony import */


      var _support_TileInfo_js__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(
      /*! ./support/TileInfo.js */
      "3/ME");
      /* harmony import */


      var _BaseTileLayer_js__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(
      /*! ./BaseTileLayer.js */
      "5fH+");
      /*
      All material copyright ESRI, All Rights Reserved, unless otherwise specified.
      See https://js.arcgis.com/4.18/esri/copyright.txt for details.
      */


      var h = new _core_jsonMap_js__WEBPACK_IMPORTED_MODULE_6__["JSONMap"]({
        BingMapsAerial: "aerial",
        BingMapsRoad: "road",
        BingMapsHybrid: "hybrid"
      });

      var b = /*#__PURE__*/function (_Object2) {
        _inherits(b, _Object2);

        var _super2 = _createSuper(b);

        function b(e) {
          var _this2;

          _classCallCheck(this, b);

          _this2 = _super2.call(this, e), _this2.type = "bing-maps", _this2.tileInfo = new _support_TileInfo_js__WEBPACK_IMPORTED_MODULE_18__["default"]({
            size: [256, 256],
            dpi: 96,
            origin: {
              x: -20037508.342787,
              y: 20037508.342787,
              spatialReference: _geometry_SpatialReference_js__WEBPACK_IMPORTED_MODULE_13__["default"].WebMercator
            },
            spatialReference: _geometry_SpatialReference_js__WEBPACK_IMPORTED_MODULE_13__["default"].WebMercator,
            lods: [{
              level: 1,
              resolution: 78271.5169639999,
              scale: 295828763.795777
            }, {
              level: 2,
              resolution: 39135.7584820001,
              scale: 147914381.897889
            }, {
              level: 3,
              resolution: 19567.8792409999,
              scale: 73957190.948944
            }, {
              level: 4,
              resolution: 9783.93962049996,
              scale: 36978595.474472
            }, {
              level: 5,
              resolution: 4891.96981024998,
              scale: 18489297.737236
            }, {
              level: 6,
              resolution: 2445.98490512499,
              scale: 9244648.868618
            }, {
              level: 7,
              resolution: 1222.99245256249,
              scale: 4622324.434309
            }, {
              level: 8,
              resolution: 611.49622628138,
              scale: 2311162.217155
            }, {
              level: 9,
              resolution: 305.748113140558,
              scale: 1155581.108577
            }, {
              level: 10,
              resolution: 152.874056570411,
              scale: 577790.554289
            }, {
              level: 11,
              resolution: 76.4370282850732,
              scale: 288895.277144
            }, {
              level: 12,
              resolution: 38.2185141425366,
              scale: 144447.638572
            }, {
              level: 13,
              resolution: 19.1092570712683,
              scale: 72223.819286
            }, {
              level: 14,
              resolution: 9.55462853563415,
              scale: 36111.909643
            }, {
              level: 15,
              resolution: 4.77731426794937,
              scale: 18055.954822
            }, {
              level: 16,
              resolution: 2.38865713397468,
              scale: 9027.977411
            }, {
              level: 17,
              resolution: 1.19432856685505,
              scale: 4513.988705
            }, {
              level: 18,
              resolution: .597164283559817,
              scale: 2256.994353
            }, {
              level: 19,
              resolution: .298582141647617,
              scale: 1128.497176
            }, {
              level: 20,
              resolution: .1492910708238085,
              scale: 564.248588
            }]
          }), _this2.key = null, _this2.style = "road", _this2.culture = "en-US", _this2.region = null, _this2.portalUrl = null, _this2.hasAttributionData = !0;
          return _this2;
        }

        _createClass(b, [{
          key: "bingMetadata",
          get: function get() {
            return this._get("bingMetadata");
          },
          set: function set(e) {
            this._set("bingMetadata", e);
          }
        }, {
          key: "copyright",
          get: function get() {
            return Object(_core_maybe_js__WEBPACK_IMPORTED_MODULE_2__["isSome"])(this.bingMetadata) ? this.bingMetadata.copyright : null;
          }
        }, {
          key: "operationalLayerType",
          get: function get() {
            return h.toJSON(this.style);
          }
        }, {
          key: "bingLogo",
          get: function get() {
            return Object(_core_maybe_js__WEBPACK_IMPORTED_MODULE_2__["isSome"])(this.bingMetadata) ? this.bingMetadata.brandLogoUri : null;
          }
        }, {
          key: "load",
          value: function load(e) {
            var _this3 = this;

            return this.key ? this.addResolvingPromise(this._getMetadata()) : this.portalUrl ? this.addResolvingPromise(this._getPortalBingKey().then(function () {
              return _this3._getMetadata();
            })) : this.addResolvingPromise(Object(_core_promiseUtils_js__WEBPACK_IMPORTED_MODULE_12__["reject"])(new _core_Error_js__WEBPACK_IMPORTED_MODULE_8__["default"]("bingmapslayer:load", "Bing layer must have bing key."))), Object(_core_promiseUtils_js__WEBPACK_IMPORTED_MODULE_12__["resolve"])(this);
          }
        }, {
          key: "getTileUrl",
          value: function getTileUrl(e, t, o) {
            if (!this.loaded || Object(_core_maybe_js__WEBPACK_IMPORTED_MODULE_2__["isNone"])(this.bingMetadata)) return null;

            var a = this.bingMetadata.resourceSets[0].resources[0],
                s = a.imageUrlSubdomains[t % a.imageUrlSubdomains.length],
                i = this._getQuadKey(e, t, o);

            return a.imageUrl.replace("{subdomain}", s).replace("{quadkey}", i);
          }
        }, {
          key: "fetchAttributionData",
          value: function () {
            var _fetchAttributionData = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
              var _this4 = this;

              return regeneratorRuntime.wrap(function _callee$(_context) {
                while (1) {
                  switch (_context.prev = _context.next) {
                    case 0:
                      return _context.abrupt("return", this.load().then(function () {
                        if (Object(_core_maybe_js__WEBPACK_IMPORTED_MODULE_2__["isNone"])(_this4.bingMetadata)) return null;
                        return {
                          contributors: _this4.bingMetadata.resourceSets[0].resources[0].imageryProviders.map(function (e) {
                            return {
                              attribution: e.attribution,
                              coverageAreas: e.coverageAreas.map(function (e) {
                                return {
                                  zoomMin: e.zoomMin,
                                  zoomMax: e.zoomMax,
                                  score: 1,
                                  bbox: [e.bbox[0], e.bbox[1], e.bbox[2], e.bbox[3]]
                                };
                              })
                            };
                          })
                        };
                      }));

                    case 1:
                    case "end":
                      return _context.stop();
                  }
                }
              }, _callee, this);
            }));

            function fetchAttributionData() {
              return _fetchAttributionData.apply(this, arguments);
            }

            return fetchAttributionData;
          }()
        }, {
          key: "_getMetadata",
          value: function _getMetadata() {
            var _this5 = this;

            var e = {
              road: "roadOnDemand",
              aerial: "aerial",
              hybrid: "aerialWithLabelsOnDemand"
            }[this.style];
            return Object(_request_js__WEBPACK_IMPORTED_MODULE_14__["default"])("https://dev.virtualearth.net/REST/v1/Imagery/Metadata/".concat(e), {
              responseType: "json",
              query: {
                include: "ImageryProviders",
                uriScheme: "https",
                key: this.key,
                suppressStatus: !0,
                output: "json",
                culture: this.culture,
                userRegion: this.region
              }
            }).then(function (e) {
              var t = e.data;
              if (200 !== t.statusCode) throw new _core_Error_js__WEBPACK_IMPORTED_MODULE_8__["default"]("bingmapslayer:getmetadata", t.statusDescription);
              if (_this5.bingMetadata = t, 0 === _this5.bingMetadata.resourceSets.length) throw new _core_Error_js__WEBPACK_IMPORTED_MODULE_8__["default"]("bingmapslayer:getmetadata", "no bing resourcesets");
              if (0 === _this5.bingMetadata.resourceSets[0].resources.length) throw new _core_Error_js__WEBPACK_IMPORTED_MODULE_8__["default"]("bingmapslayer:getmetadata", "no bing resources");
            })["catch"](function (e) {
              throw new _core_Error_js__WEBPACK_IMPORTED_MODULE_8__["default"]("bingmapslayer:getmetadata", e.message);
            });
          }
        }, {
          key: "_getPortalBingKey",
          value: function _getPortalBingKey() {
            var _this6 = this;

            return Object(_request_js__WEBPACK_IMPORTED_MODULE_14__["default"])(this.portalUrl, {
              responseType: "json",
              authMode: "no-prompt",
              query: {
                f: "json"
              }
            }).then(function (e) {
              if (!e.data.bingKey) throw new _core_Error_js__WEBPACK_IMPORTED_MODULE_8__["default"]("bingmapslayer:getportalbingkey", "The referenced Portal does not contain a valid bing key");
              _this6.key = e.data.bingKey;
            })["catch"](function (e) {
              throw new _core_Error_js__WEBPACK_IMPORTED_MODULE_8__["default"]("bingmapslayer:getportalbingkey", e.message);
            });
          }
        }, {
          key: "_getQuadKey",
          value: function _getQuadKey(e, t, r) {
            var o = "";

            for (var a = e; a > 0; a--) {
              var _e = 0;
              var s = 1 << a - 1;
              0 != (r & s) && (_e += 1), 0 != (t & s) && (_e += 2), o += _e.toString();
            }

            return o;
          }
        }]);

        return b;
      }(Object(_mixins_BlendLayer_js__WEBPACK_IMPORTED_MODULE_17__["BlendLayer"])(Object(_mixins_OperationalLayer_js__WEBPACK_IMPORTED_MODULE_16__["OperationalLayer"])(Object(_core_MultiOriginJSONSupport_js__WEBPACK_IMPORTED_MODULE_15__["MultiOriginJSONMixin"])(_BaseTileLayer_js__WEBPACK_IMPORTED_MODULE_19__["default"]))));

      Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_5__["property"])({
        json: {
          read: !1,
          write: !1
        },
        value: null
      })], b.prototype, "bingMetadata", null), Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_5__["property"])({
        json: {
          read: !1,
          write: !1
        },
        value: "bing-maps",
        readOnly: !0
      })], b.prototype, "type", void 0), Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_5__["property"])({
        type: _support_TileInfo_js__WEBPACK_IMPORTED_MODULE_18__["default"]
      })], b.prototype, "tileInfo", void 0), Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_5__["property"])({
        type: String,
        readOnly: !0,
        dependsOn: ["bingMetadata"],
        json: {
          read: !1,
          write: !1
        }
      })], b.prototype, "copyright", null), Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_5__["property"])({
        type: String,
        json: {
          write: !1,
          read: !1
        }
      })], b.prototype, "key", void 0), Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_5__["property"])({
        type: h.apiValues,
        nonNullable: !0,
        json: {
          read: {
            source: "layerType",
            reader: h.read
          }
        }
      })], b.prototype, "style", void 0), Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_5__["property"])({
        type: ["BingMapsAerial", "BingMapsHybrid", "BingMapsRoad"],
        dependsOn: ["style"]
      })], b.prototype, "operationalLayerType", null), Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_5__["property"])({
        type: String,
        json: {
          write: !1,
          read: !1
        }
      })], b.prototype, "culture", void 0), Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_5__["property"])({
        type: String,
        json: {
          write: !1,
          read: !1
        }
      })], b.prototype, "region", void 0), Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_5__["property"])({
        type: String,
        json: {
          write: !0,
          read: !0
        }
      })], b.prototype, "portalUrl", void 0), Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_5__["property"])({
        type: Boolean,
        json: {
          write: !1,
          read: !1
        }
      })], b.prototype, "hasAttributionData", void 0), Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_5__["property"])({
        type: String,
        readOnly: !0,
        dependsOn: ["bingMetadata"]
      })], b.prototype, "bingLogo", null), b = Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_subclass_js__WEBPACK_IMPORTED_MODULE_7__["subclass"])("esri.layers.BingMapsLayer")], b);
      var v = b;
      /* harmony default export */

      __webpack_exports__["default"] = v;
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
            var _this7;

            _classCallCheck(this, t);

            _this7 = _super3.apply(this, arguments), _this7.minScale = 0, _this7.maxScale = 0;
            return _this7;
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
            var _this8;

            _classCallCheck(this, t);

            _this8 = _super4.apply(this, arguments), _this8.refreshInterval = 0;
            return _this8;
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
            var _this9;

            _classCallCheck(this, s);

            _this9 = _super5.apply(this, arguments), _this9.blendMode = "normal", _this9.effect = null;
            return _this9;
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
//# sourceMappingURL=BingMapsLayer-js-es5.js.map