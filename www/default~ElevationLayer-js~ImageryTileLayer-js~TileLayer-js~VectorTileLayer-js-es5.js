(function () {
  function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

  function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

  function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

  function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

  function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  function _get(target, property, receiver) { if (typeof Reflect !== "undefined" && Reflect.get) { _get = Reflect.get; } else { _get = function _get(target, property, receiver) { var base = _superPropBase(target, property); if (!base) return; var desc = Object.getOwnPropertyDescriptor(base, property); if (desc.get) { return desc.get.call(receiver); } return desc.value; }; } return _get(target, property, receiver || target); }

  function _superPropBase(object, property) { while (!Object.prototype.hasOwnProperty.call(object, property)) { object = _getPrototypeOf(object); if (object === null) break; } return object; }

  function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

  function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

  function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

  function _possibleConstructorReturn(self, call) { if (call && (typeof call === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

  function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

  function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

  function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["default~ElevationLayer-js~ImageryTileLayer-js~TileLayer-js~VectorTileLayer-js"], {
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

          var _super = _createSuper(d);

          function d() {
            var _this;

            _classCallCheck(this, d);

            _this = _super.apply(this, arguments), _this.resourceReferences = {
              portalItem: null,
              paths: []
            };
            return _this;
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
              var _loadFromPortal = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(t, r) {
                var e;
                return regeneratorRuntime.wrap(function _callee$(_context) {
                  while (1) {
                    switch (_context.prev = _context.next) {
                      case 0:
                        if (!(this.portalItem && this.portalItem.id)) {
                          _context.next = 14;
                          break;
                        }

                        _context.prev = 1;
                        _context.next = 4;
                        return Promise.all(
                        /*! import() | portal-support-layersLoader-js */
                        [__webpack_require__.e("common"), __webpack_require__.e("portal-support-layersLoader-js")]).then(__webpack_require__.bind(null,
                        /*! ../../portal/support/layersLoader.js */
                        "O5Ly"));

                      case 4:
                        e = _context.sent;
                        Object(_core_promiseUtils_js__WEBPACK_IMPORTED_MODULE_12__["throwIfAborted"])(r);
                        _context.next = 8;
                        return e.load({
                          instance: this,
                          supportedTypes: t.supportedTypes,
                          validateItem: t.validateItem,
                          supportsData: t.supportsData
                        }, r);

                      case 8:
                        return _context.abrupt("return", _context.sent);

                      case 11:
                        _context.prev = 11;
                        _context.t0 = _context["catch"](1);
                        throw n.warn("Failed to load layer (".concat(this.title, ", ").concat(this.id, ") portal item (").concat(this.portalItem.id, ")\n  ").concat(_context.t0)), _context.t0;

                      case 14:
                      case "end":
                        return _context.stop();
                    }
                  }
                }, _callee, this, [[1, 11]]);
              }));

              function loadFromPortal(_x, _x2) {
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
    "HSpW":
    /*!*************************************************************!*\
      !*** ./node_modules/@arcgis/core/layers/support/Tilemap.js ***!
      \*************************************************************/

    /*! exports provided: default, Tilemap, tilemapDefinitionId, tilemapDefinitionUrl */

    /***/
    function HSpW(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "Tilemap", function () {
        return l;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "tilemapDefinitionId", function () {
        return o;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "tilemapDefinitionUrl", function () {
        return n;
      });
      /* harmony import */


      var _core_lang_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ../../core/lang.js */
      "f/qv");
      /* harmony import */


      var _core_Error_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ../../core/Error.js */
      "zlDU");
      /* harmony import */


      var _core_arrayUtils_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ../../core/arrayUtils.js */
      "tQ+6");
      /* harmony import */


      var _request_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ../../request.js */
      "Lqtk");
      /*
      All material copyright ESRI, All Rights Reserved, unless otherwise specified.
      See https://js.arcgis.com/4.18/esri/copyright.txt for details.
      */


      var l = /*#__PURE__*/function () {
        function l() {
          _classCallCheck(this, l);

          this.location = {
            left: 0,
            top: 0,
            width: 0,
            height: 0
          }, this._allAvailability = "unknown", this.byteSize = 40;
        }

        _createClass(l, [{
          key: "getAvailability",
          value: function getAvailability(t, i) {
            if ("unknown" !== this._allAvailability) return this._allAvailability;

            var e = (t - this.location.top) * this.location.width + (i - this.location.left),
                a = e % 8,
                _l = e >> 3,
                o = this._tileAvailabilityBitSet;

            return _l < 0 || _l > o.length ? "unknown" : o[_l] & 1 << a ? "available" : "unavailable";
          }
        }, {
          key: "_updateFromData",
          value: function _updateFromData(t) {
            var i = this.location.width,
                e = this.location.height;

            var a = !0,
                _l2 = !0;

            var o = Math.ceil(i * e / 8),
                n = new Uint8Array(o);
            var r = 0;

            for (var _i = 0; _i < t.length; _i++) {
              var _e = _i % 8;

              t[_i] ? (_l2 = !1, n[r] |= 1 << _e) : a = !1, 7 === _e && ++r;
            }

            _l2 ? this._allAvailability = "unavailable" : a ? this._allAvailability = "available" : (this._allAvailability = "unknown", this._tileAvailabilityBitSet = n, this.byteSize += n.length);
          }
        }], [{
          key: "fromDefinition",
          value: function fromDefinition(t, o) {
            var r = t.service.request || _request_js__WEBPACK_IMPORTED_MODULE_3__["default"],
                s = t.row,
                h = t.col,
                c = t.width,
                m = t.height,
                d = {
              query: {
                f: "json"
              }
            };
            return o = o ? _objectSpread(_objectSpread({}, d), o) : d, r(n(t), o).then(function (t) {
              return t.data;
            })["catch"](function (t) {
              if (t && t.details && 422 === t.details.httpStatus) return {
                location: {
                  top: s,
                  left: h,
                  width: c,
                  height: m
                },
                valid: !0,
                data: Object(_core_arrayUtils_js__WEBPACK_IMPORTED_MODULE_2__["constant"])(c * m, 0)
              };
              throw t;
            }).then(function (t) {
              if (t.location && (t.location.top !== s || t.location.left !== h || t.location.width !== c || t.location.height !== m)) throw new _core_Error_js__WEBPACK_IMPORTED_MODULE_1__["default"]("tilemap:location-mismatch", "Tilemap response for different location than requested", {
                response: t,
                definition: {
                  top: s,
                  left: h,
                  width: c,
                  height: m
                }
              });
              return l.fromJSON(t);
            });
          }
        }, {
          key: "fromJSON",
          value: function fromJSON(i) {
            l.validateJSON(i);
            var e = new l();
            return e.location = Object.freeze(Object(_core_lang_js__WEBPACK_IMPORTED_MODULE_0__["clone"])(i.location)), e._updateFromData(i.data), Object.freeze(e);
          }
        }, {
          key: "validateJSON",
          value: function validateJSON(t) {
            if (!t || !t.location) throw new _core_Error_js__WEBPACK_IMPORTED_MODULE_1__["default"]("tilemap:missing-location", "Location missing from tilemap response");
            if (!1 === t.valid) throw new _core_Error_js__WEBPACK_IMPORTED_MODULE_1__["default"]("tilemap:invalid", "Tilemap response was marked as invalid");
            if (!t.data) throw new _core_Error_js__WEBPACK_IMPORTED_MODULE_1__["default"]("tilemap:missing-data", "Data missing from tilemap response");
            if (!Array.isArray(t.data)) throw new _core_Error_js__WEBPACK_IMPORTED_MODULE_1__["default"]("tilemap:data-mismatch", "Data must be an array of numbers");
            if (t.data.length !== t.location.width * t.location.height) throw new _core_Error_js__WEBPACK_IMPORTED_MODULE_1__["default"]("tilemap:data-mismatch", "Number of data items does not match width/height of tilemap");
          }
        }]);

        return l;
      }();

      function o(t) {
        return "".concat(t.level, "/").concat(t.row, "/").concat(t.col, "/").concat(t.width, "/").concat(t.height);
      }

      function n(t) {
        var i;
        if ("vector-tile" === t.service.type) i = "".concat(t.service.url, "/tilemap/").concat(t.level, "/").concat(t.row, "/").concat(t.col, "/").concat(t.width, "/").concat(t.height);else {
          var _e2 = t.service.tileServers;
          i = "".concat(_e2 && _e2.length ? _e2[t.row % _e2.length] : t.service.url, "/tilemap/").concat(t.level, "/").concat(t.row, "/").concat(t.col, "/").concat(t.width, "/").concat(t.height);
        }
        var e = t.service.query;
        return e && (i = "".concat(i, "?").concat(e)), i;
      }
      /* harmony default export */


      __webpack_exports__["default"] = l;
      /***/
    },

    /***/
    "llFo":
    /*!******************************************************************!*\
      !*** ./node_modules/@arcgis/core/layers/support/TilemapCache.js ***!
      \******************************************************************/

    /*! exports provided: TilemapCache */

    /***/
    function llFo(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "TilemapCache", function () {
        return L;
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


      var _core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ../../core/accessorSupport/decorators/property.js */
      "WbKI");
      /* harmony import */


      var _core_accessorSupport_decorators_cast_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ../../core/accessorSupport/decorators/cast.js */
      "Gj5k");
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


      var _core_PooledArray_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
      /*! ../../core/PooledArray.js */
      "ikTR");
      /* harmony import */


      var _core_promiseUtils_js__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
      /*! ../../core/promiseUtils.js */
      "9MzC");
      /* harmony import */


      var _core_scheduling_js__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
      /*! ../../core/scheduling.js */
      "WBXD");
      /* harmony import */


      var _core_Accessor_js__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
      /*! ../../core/Accessor.js */
      "/CmD");
      /* harmony import */


      var _request_js__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(
      /*! ../../request.js */
      "Lqtk");
      /* harmony import */


      var _core_Handles_js__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(
      /*! ../../core/Handles.js */
      "r0DZ");
      /* harmony import */


      var _core_watchUtils_js__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(
      /*! ../../core/watchUtils.js */
      "N5XI");
      /* harmony import */


      var _core_LRUCache_js__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(
      /*! ../../core/LRUCache.js */
      "wk6I");
      /* harmony import */


      var _Tilemap_js__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(
      /*! ./Tilemap.js */
      "HSpW");
      /*
      All material copyright ESRI, All Rights Reserved, unless otherwise specified.
      See https://js.arcgis.com/4.18/esri/copyright.txt for details.
      */


      var _z;

      var A = _core_Logger_js__WEBPACK_IMPORTED_MODULE_2__["default"].getLogger("esri.layers.support.TilemapCache");

      var L = _z = /*#__PURE__*/function (_core_Accessor_js__WE) {
        _inherits(z, _core_Accessor_js__WE);

        var _super2 = _createSuper(z);

        function z(e) {
          var _this2;

          _classCallCheck(this, z);

          _this2 = _super2.call(this, e), _this2._handles = new _core_Handles_js__WEBPACK_IMPORTED_MODULE_15__["default"](), _this2._pendingTilemapRequests = {}, _this2._availableLevels = {}, _this2.levels = 5, _this2.cacheByteSize = 2097152, _this2.request = _request_js__WEBPACK_IMPORTED_MODULE_14__["default"], _this2._prefetchingEnabled = !0;
          return _this2;
        }

        _createClass(z, [{
          key: "initialize",
          value: function initialize() {
            var _this3 = this;

            this._tilemapCache = new _core_LRUCache_js__WEBPACK_IMPORTED_MODULE_17__["default"](this.cacheByteSize), this._handles.add([this.watch(["layer.parsedUrl", "layer.tileServers?"], function () {
              return _this3._initializeTilemapDefinition();
            }), Object(_core_watchUtils_js__WEBPACK_IMPORTED_MODULE_16__["init"])(this, "layer.tileInfo.lods", function (e) {
              return _this3._initializeAvailableLevels(e);
            }, !0)]), this._initializeTilemapDefinition();
          }
        }, {
          key: "destroy",
          value: function destroy() {
            this._handles && (this._handles.destroy(), this._handles = null);
          }
        }, {
          key: "castLevels",
          value: function castLevels(e) {
            return e <= 2 ? (A.error("Minimum levels for Tilemap is 3, but got ", e), 3) : e;
          }
        }, {
          key: "size",
          get: function get() {
            return 1 << this.levels;
          }
        }, {
          key: "fetchTilemap",
          value: function fetchTilemap(e, t, i, l) {
            var _this4 = this;

            if (!this._availableLevels[e]) return Object(_core_promiseUtils_js__WEBPACK_IMPORTED_MODULE_11__["reject"])(new _core_Error_js__WEBPACK_IMPORTED_MODULE_6__["default"]("tilemap-cache:level-unavailable", "Level ".concat(e, " is unavailable in the service")));

            var r = this._tmpTilemapDefinition,
                a = this._tilemapFromCache(e, t, i, r);

            if (a) return Object(_core_promiseUtils_js__WEBPACK_IMPORTED_MODULE_11__["resolve"])(a);
            var o = l && l.signal;
            return l = _objectSpread(_objectSpread({}, l), {}, {
              signal: null
            }), Object(_core_promiseUtils_js__WEBPACK_IMPORTED_MODULE_11__["create"])(function (e, t) {
              Object(_core_promiseUtils_js__WEBPACK_IMPORTED_MODULE_11__["onAbort"])(o, function () {
                return t(Object(_core_promiseUtils_js__WEBPACK_IMPORTED_MODULE_11__["createAbortError"])());
              });
              var i = Object(_Tilemap_js__WEBPACK_IMPORTED_MODULE_18__["tilemapDefinitionId"])(r);
              var s = _this4._pendingTilemapRequests[i];

              if (!s) {
                s = _Tilemap_js__WEBPACK_IMPORTED_MODULE_18__["Tilemap"].fromDefinition(r, l).then(function (e) {
                  return _this4._tilemapCache.put(i, e, e.byteSize), e;
                });

                var _e3 = function _e3() {
                  return delete _this4._pendingTilemapRequests[i];
                };

                _this4._pendingTilemapRequests[i] = s, s.then(_e3, _e3);
              }

              s.then(e, t);
            });
          }
        }, {
          key: "getAvailability",
          value: function getAvailability(e, t, i) {
            if (!this._availableLevels[e]) return "unavailable";

            var l = this._tilemapFromCache(e, t, i, this._tmpTilemapDefinition);

            return l ? l.getAvailability(t, i) : "unknown";
          }
        }, {
          key: "getAvailabilityUpsample",
          value: function getAvailabilityUpsample(e, t, i, l) {
            l.level = e, l.row = t, l.col = i;
            var r = this.layer.tileInfo;

            for (r.updateTileInfo(l);;) {
              var _e4 = this.getAvailability(l.level, l.row, l.col);

              if ("unavailable" !== _e4) return _e4;
              if (!r.upsampleTile(l)) return "unavailable";
            }
          }
        }, {
          key: "fetchAvailability",
          value: function fetchAvailability(e, t, i, l) {
            return this._availableLevels[e] ? this.fetchTilemap(e, t, i, l)["catch"](function (e) {
              return e;
            }).then(function (l) {
              if (l instanceof _Tilemap_js__WEBPACK_IMPORTED_MODULE_18__["Tilemap"]) {
                var r = l.getAvailability(t, i);
                return "unavailable" === r ? Object(_core_promiseUtils_js__WEBPACK_IMPORTED_MODULE_11__["reject"])(new _core_Error_js__WEBPACK_IMPORTED_MODULE_6__["default"]("tile-map:tile-unavailable", "Tile is not available", {
                  level: e,
                  row: t,
                  col: i
                })) : r;
              }

              if (Object(_core_promiseUtils_js__WEBPACK_IMPORTED_MODULE_11__["isAbortError"])(l)) throw l;
              return "unknown";
            }) : Object(_core_promiseUtils_js__WEBPACK_IMPORTED_MODULE_11__["reject"])(new _core_Error_js__WEBPACK_IMPORTED_MODULE_6__["default"]("tilemap-cache:level-unavailable", "Level ".concat(e, " is unavailable in the service")));
          }
        }, {
          key: "fetchAvailabilityUpsample",
          value: function fetchAvailabilityUpsample(e, t, i, l, r) {
            var _this5 = this;

            l.level = e, l.row = t, l.col = i;
            var s = this.layer.tileInfo;
            s.updateTileInfo(l);
            var a = this.fetchAvailability(e, t, i, r)["catch"](function (e) {
              if (Object(_core_promiseUtils_js__WEBPACK_IMPORTED_MODULE_11__["isAbortError"])(e)) throw e;
              if (s.upsampleTile(l)) return _this5.fetchAvailabilityUpsample(l.level, l.row, l.col, l);
              throw e;
            });
            return this._fetchAvailabilityUpsamplePrefetch(l.id, e, t, i, r, a), a;
          }
        }, {
          key: "_fetchAvailabilityUpsamplePrefetch",
          value: function () {
            var _fetchAvailabilityUpsamplePrefetch2 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee2(e, t, i, l, r, s) {
              var _this6 = this;

              var a, o, n, h, c, p, m, _loop, _e5;

              return regeneratorRuntime.wrap(function _callee2$(_context2) {
                while (1) {
                  switch (_context2.prev = _context2.next) {
                    case 0:
                      if (this._prefetchingEnabled) {
                        _context2.next = 2;
                        break;
                      }

                      return _context2.abrupt("return");

                    case 2:
                      a = "prefetch-".concat(e);

                      if (!this._handles.has(a)) {
                        _context2.next = 5;
                        break;
                      }

                      return _context2.abrupt("return");

                    case 5:
                      o = Object(_core_promiseUtils_js__WEBPACK_IMPORTED_MODULE_11__["createAbortController"])();
                      s.then(function () {
                        return o.abort();
                      }, function () {
                        return o.abort();
                      });
                      n = !1;
                      h = {
                        remove: function remove() {
                          n || (n = !0, o.abort());
                        }
                      };

                      this._handles.add(h, a);

                      _context2.next = 12;
                      return Object(_core_scheduling_js__WEBPACK_IMPORTED_MODULE_12__["waitTicks"])(10, o.signal)["catch"](function () {});

                    case 12:
                      n || (n = !0, this._handles.remove(a));

                      if (!Object(_core_promiseUtils_js__WEBPACK_IMPORTED_MODULE_11__["isAborted"])(o)) {
                        _context2.next = 15;
                        break;
                      }

                      return _context2.abrupt("return");

                    case 15:
                      c = {
                        id: e,
                        level: t,
                        row: i,
                        col: l
                      }, p = _objectSpread(_objectSpread({}, r), {}, {
                        signal: o.signal
                      }), m = this.layer.tileInfo;

                      _loop = function _loop(_e5) {
                        var e = _this6.fetchAvailability(c.level, c.row, c.col, p);

                        _z._prefetches.push(e);

                        var t = function t() {
                          _z._prefetches.removeUnordered(e);
                        };

                        e.then(t, t);
                      };

                      for (_e5 = 0; _z._prefetches.length < _z._maxPrefetch && m.upsampleTile(c); ++_e5) {
                        _loop(_e5);
                      }

                    case 18:
                    case "end":
                      return _context2.stop();
                  }
                }
              }, _callee2, this);
            }));

            function _fetchAvailabilityUpsamplePrefetch(_x3, _x4, _x5, _x6, _x7, _x8) {
              return _fetchAvailabilityUpsamplePrefetch2.apply(this, arguments);
            }

            return _fetchAvailabilityUpsamplePrefetch;
          }()
        }, {
          key: "_initializeTilemapDefinition",
          value: function _initializeTilemapDefinition() {
            if (!this.layer.parsedUrl) return;
            var e = this.layer.parsedUrl,
                t = e.query;
            this._tilemapCache.clear(), this._tmpTilemapDefinition = {
              service: {
                url: e.path,
                query: t ? Object(_core_urlUtils_js__WEBPACK_IMPORTED_MODULE_7__["objectToQuery"])(t) : null,
                tileServers: this.layer.tileServers,
                request: this.request,
                type: this.layer.type
              },
              width: this.size,
              height: this.size,
              level: 0,
              row: 0,
              col: 0
            };
          }
        }, {
          key: "_tilemapFromCache",
          value: function _tilemapFromCache(e, t, i, l) {
            l.level = e, l.row = t - t % this.size, l.col = i - i % this.size;
            var r = Object(_Tilemap_js__WEBPACK_IMPORTED_MODULE_18__["tilemapDefinitionId"])(l);
            return this._tilemapCache.get(r);
          }
        }, {
          key: "_initializeAvailableLevels",
          value: function _initializeAvailableLevels(e) {
            var _this7 = this;

            this._availableLevels = {}, e && e.forEach(function (e) {
              return _this7._availableLevels[e.level] = !0;
            });
          }
        }, {
          key: "test",
          get: function get() {
            var e = this;
            return {
              get prefetchingEnabled() {
                return e._prefetchingEnabled;
              },

              set prefetchingEnabled(t) {
                e._prefetchingEnabled = t;
              },

              hasTilemap: function hasTilemap(t, i, l) {
                return !!e._tilemapFromCache(t, i, l, e._tmpTilemapDefinition);
              }
            };
          }
        }]);

        return z;
      }(_core_Accessor_js__WEBPACK_IMPORTED_MODULE_13__["default"]);

      L._maxPrefetch = 4, L._prefetches = new _core_PooledArray_js__WEBPACK_IMPORTED_MODULE_10__["default"]({
        initialSize: _z._maxPrefetch
      }), Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_3__["property"])({
        constructOnly: !0,
        type: Number
      })], L.prototype, "levels", void 0), Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_cast_js__WEBPACK_IMPORTED_MODULE_4__["cast"])("levels")], L.prototype, "castLevels", null), Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_3__["property"])({
        readOnly: !0,
        dependsOn: ["levels"],
        type: Number
      })], L.prototype, "size", null), Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_3__["property"])({
        constructOnly: !0,
        type: Number
      })], L.prototype, "cacheByteSize", void 0), Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_3__["property"])({
        constructOnly: !0
      })], L.prototype, "layer", void 0), Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_3__["property"])({
        constructOnly: !0
      })], L.prototype, "request", void 0), L = _z = Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_subclass_js__WEBPACK_IMPORTED_MODULE_5__["subclass"])("esri.layers.support.TilemapCache")], L);
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
    "q2iW":
    /*!*****************************************************************************!*\
      !*** ./node_modules/@arcgis/core/layers/support/serviceTileInfoProperty.js ***!
      \*****************************************************************************/

    /*! exports provided: readServiceTileInfo, serviceTileInfoProperty */

    /***/
    function q2iW(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "readServiceTileInfo", function () {
        return n;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "serviceTileInfoProperty", function () {
        return r;
      });
      /* harmony import */


      var _TileInfo_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ./TileInfo.js */
      "3/ME");
      /*
      All material copyright ESRI, All Rights Reserved, unless otherwise specified.
      See https://js.arcgis.com/4.18/esri/copyright.txt for details.
      */


      var r = {
        type: _TileInfo_js__WEBPACK_IMPORTED_MODULE_0__["default"],
        json: {
          origins: {
            service: {
              read: {
                source: ["tileInfo", "minScale", "maxScale", "minLOD", "maxLOD"],
                reader: n
              }
            }
          }
        }
      };

      function n(r, n, l, o) {
        if (!r) return null;
        var i = n.minScale,
            t = n.maxScale,
            m = n.minLOD,
            s = n.maxLOD;
        if (null != m && null != s) return o && o.ignoreMinMaxLOD ? _TileInfo_js__WEBPACK_IMPORTED_MODULE_0__["default"].fromJSON(r) : _TileInfo_js__WEBPACK_IMPORTED_MODULE_0__["default"].fromJSON(_objectSpread(_objectSpread({}, r), {}, {
          lods: r.lods.filter(function (_ref) {
            var e = _ref.level;
            return null != e && e >= m && e <= s;
          })
        }));

        if (0 !== i && 0 !== t) {
          var _n = function _n(e) {
            return Math.round(1e4 * e) / 1e4;
          },
              _l3 = i ? _n(i) : 1 / 0,
              _o = t ? _n(t) : -1 / 0;

          return _TileInfo_js__WEBPACK_IMPORTED_MODULE_0__["default"].fromJSON(_objectSpread(_objectSpread({}, r), {}, {
            lods: r.lods.filter(function (e) {
              var r = _n(e.scale);

              return r <= _l3 && r >= _o;
            })
          }));
        }

        return _TileInfo_js__WEBPACK_IMPORTED_MODULE_0__["default"].fromJSON(r);
      }
      /***/

    }
  }]);
})();
//# sourceMappingURL=default~ElevationLayer-js~ImageryTileLayer-js~TileLayer-js~VectorTileLayer-js-es5.js.map