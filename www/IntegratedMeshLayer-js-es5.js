(function () {
  function _createForOfIteratorHelper(o, allowArrayLike) { var it; if (typeof Symbol === "undefined" || o[Symbol.iterator] == null) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = o[Symbol.iterator](); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it["return"] != null) it["return"](); } finally { if (didErr) throw err; } } }; }

  function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

  function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

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

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["IntegratedMeshLayer-js"], {
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
    "PVlI":
    /*!******************************************************************!*\
      !*** ./node_modules/@arcgis/core/layers/mixins/ArcGISService.js ***!
      \******************************************************************/

    /*! exports provided: ArcGISService */

    /***/
    function PVlI(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ArcGISService", function () {
        return p;
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


      var _support_arcgisLayerUrl_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
      /*! ../support/arcgisLayerUrl.js */
      "VLTf");
      /*
      All material copyright ESRI, All Rights Reserved, unless otherwise specified.
      See https://js.arcgis.com/4.18/esri/copyright.txt for details.
      */


      var p = function p(_p2) {
        var c = /*#__PURE__*/function (_p) {
          _inherits(c, _p);

          var _super2 = _createSuper(c);

          function c() {
            _classCallCheck(this, c);

            return _super2.apply(this, arguments);
          }

          _createClass(c, [{
            key: "title",
            get: function get() {
              if (this._get("title") && "defaults" !== this.originOf("title")) return this._get("title");

              if (this.url) {
                var t = Object(_support_arcgisLayerUrl_js__WEBPACK_IMPORTED_MODULE_10__["parse"])(this.url);
                if (Object(_core_maybe_js__WEBPACK_IMPORTED_MODULE_2__["isSome"])(t) && t.title) return t.title;
              }

              return this._get("title") || "";
            },
            set: function set(t) {
              this._set("title", t);
            }
          }, {
            key: "url",
            set: function set(t) {
              this._set("url", Object(_support_arcgisLayerUrl_js__WEBPACK_IMPORTED_MODULE_10__["sanitizeUrl"])(t, _core_Logger_js__WEBPACK_IMPORTED_MODULE_3__["default"].getLogger(this.declaredClass)));
            }
          }]);

          return c;
        }(_p2);

        return Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_5__["property"])({
          dependsOn: ["url"]
        })], c.prototype, "title", null), Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_5__["property"])({
          type: String
        })], c.prototype, "url", null), c = Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_subclass_js__WEBPACK_IMPORTED_MODULE_6__["subclass"])("esri.layers.mixins.ArcGISService")], c), c;
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
            var _this2;

            _classCallCheck(this, t);

            _this2 = _super3.apply(this, arguments), _this2.minScale = 0, _this2.maxScale = 0;
            return _this2;
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
    "XTTP":
    /*!*************************************************************************!*\
      !*** ./node_modules/@arcgis/core/layers/support/I3SLayerDefinitions.js ***!
      \*************************************************************************/

    /*! exports provided: I3SGeometryAttribute, I3SGeometryBuffer, I3SGeometryCompressedAttributes, I3SGeometryDefinition, I3SMaterialDefinition, I3SMaterialPBRMetallicRoughness, I3SMaterialTexture, I3SNodePageDefinition, I3STextureFormat, I3STextureSetDefinition */

    /***/
    function XTTP(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "I3SGeometryAttribute", function () {
        return y;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "I3SGeometryBuffer", function () {
        return d;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "I3SGeometryCompressedAttributes", function () {
        return c;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "I3SGeometryDefinition", function () {
        return m;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "I3SMaterialDefinition", function () {
        return a;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "I3SMaterialPBRMetallicRoughness", function () {
        return l;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "I3SMaterialTexture", function () {
        return i;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "I3SNodePageDefinition", function () {
        return s;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "I3STextureFormat", function () {
        return n;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "I3STextureSetDefinition", function () {
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


      var _core_accessorSupport_decorators_enumeration_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ../../core/accessorSupport/decorators/enumeration.js */
      "RI0u");
      /* harmony import */


      var _core_accessorSupport_decorators_subclass_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ../../core/accessorSupport/decorators/subclass.js */
      "04ZG");
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


      var _core_JSONSupport_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
      /*! ../../core/JSONSupport.js */
      "ag7Y");
      /*
      All material copyright ESRI, All Rights Reserved, unless otherwise specified.
      See https://js.arcgis.com/4.18/esri/copyright.txt for details.
      */


      var s = /*#__PURE__*/function (_core_JSONSupport_js_) {
        _inherits(s, _core_JSONSupport_js_);

        var _super4 = _createSuper(s);

        function s() {
          var _this3;

          _classCallCheck(this, s);

          _this3 = _super4.apply(this, arguments), _this3.nodesPerPage = null, _this3.rootIndex = 0, _this3.lodSelectionMetricType = null;
          return _this3;
        }

        return s;
      }(_core_JSONSupport_js__WEBPACK_IMPORTED_MODULE_10__["JSONSupport"]);

      Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_4__["property"])({
        type: Number
      })], s.prototype, "nodesPerPage", void 0), Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_4__["property"])({
        type: Number
      })], s.prototype, "rootIndex", void 0), Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_4__["property"])({
        type: String
      })], s.prototype, "lodSelectionMetricType", void 0), s = Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_subclass_js__WEBPACK_IMPORTED_MODULE_6__["subclass"])("esri.layer.support.I3SNodePageDefinition")], s);

      var i = /*#__PURE__*/function (_core_JSONSupport_js_2) {
        _inherits(i, _core_JSONSupport_js_2);

        var _super5 = _createSuper(i);

        function i() {
          var _this4;

          _classCallCheck(this, i);

          _this4 = _super5.apply(this, arguments), _this4.factor = 1;
          return _this4;
        }

        return i;
      }(_core_JSONSupport_js__WEBPACK_IMPORTED_MODULE_10__["JSONSupport"]);

      Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_4__["property"])({
        type: Number,
        json: {
          read: {
            source: "textureSetDefinitionId"
          }
        }
      })], i.prototype, "id", void 0), Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_4__["property"])({
        type: Number
      })], i.prototype, "factor", void 0), i = Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_subclass_js__WEBPACK_IMPORTED_MODULE_6__["subclass"])("esri.layer.support.I3SMaterialTexture")], i);

      var l = /*#__PURE__*/function (_core_JSONSupport_js_3) {
        _inherits(l, _core_JSONSupport_js_3);

        var _super6 = _createSuper(l);

        function l() {
          var _this5;

          _classCallCheck(this, l);

          _this5 = _super6.apply(this, arguments), _this5.baseColorFactor = [1, 1, 1, 1], _this5.baseColorTexture = null, _this5.metallicRoughnessTexture = null, _this5.metallicFactor = 1, _this5.roughnessFactor = 1;
          return _this5;
        }

        return l;
      }(_core_JSONSupport_js__WEBPACK_IMPORTED_MODULE_10__["JSONSupport"]);

      Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_4__["property"])({
        type: [Number]
      })], l.prototype, "baseColorFactor", void 0), Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_4__["property"])({
        type: i
      })], l.prototype, "baseColorTexture", void 0), Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_4__["property"])({
        type: i
      })], l.prototype, "metallicRoughnessTexture", void 0), Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_4__["property"])({
        type: Number
      })], l.prototype, "metallicFactor", void 0), Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_4__["property"])({
        type: Number
      })], l.prototype, "roughnessFactor", void 0), l = Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_subclass_js__WEBPACK_IMPORTED_MODULE_6__["subclass"])("esri.layer.support.I3SMaterialPBRMetallicRoughness")], l);

      var a = /*#__PURE__*/function (_core_JSONSupport_js_4) {
        _inherits(a, _core_JSONSupport_js_4);

        var _super7 = _createSuper(a);

        function a() {
          var _this6;

          _classCallCheck(this, a);

          _this6 = _super7.apply(this, arguments), _this6.alphaMode = "opaque", _this6.alphaCutoff = .25, _this6.doubleSided = !1, _this6.cullFace = "none", _this6.normalTexture = null, _this6.occlusionTexture = null, _this6.emissiveTexture = null, _this6.emissiveFactor = null, _this6.pbrMetallicRoughness = null;
          return _this6;
        }

        return a;
      }(_core_JSONSupport_js__WEBPACK_IMPORTED_MODULE_10__["JSONSupport"]);

      Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_enumeration_js__WEBPACK_IMPORTED_MODULE_5__["enumeration"])({
        opaque: "opaque",
        mask: "mask",
        blend: "blend"
      })], a.prototype, "alphaMode", void 0), Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_4__["property"])({
        type: Number
      })], a.prototype, "alphaCutoff", void 0), Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_4__["property"])({
        type: Boolean
      })], a.prototype, "doubleSided", void 0), Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_enumeration_js__WEBPACK_IMPORTED_MODULE_5__["enumeration"])({
        none: "none",
        back: "back",
        front: "front"
      })], a.prototype, "cullFace", void 0), Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_4__["property"])({
        type: i
      })], a.prototype, "normalTexture", void 0), Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_4__["property"])({
        type: i
      })], a.prototype, "occlusionTexture", void 0), Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_4__["property"])({
        type: i
      })], a.prototype, "emissiveTexture", void 0), Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_4__["property"])({
        type: [Number]
      })], a.prototype, "emissiveFactor", void 0), Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_4__["property"])({
        type: l
      })], a.prototype, "pbrMetallicRoughness", void 0), a = Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_subclass_js__WEBPACK_IMPORTED_MODULE_6__["subclass"])("esri.layer.support.I3SMaterialDefinition")], a);

      var n = /*#__PURE__*/function (_core_JSONSupport_js_5) {
        _inherits(n, _core_JSONSupport_js_5);

        var _super8 = _createSuper(n);

        function n() {
          _classCallCheck(this, n);

          return _super8.apply(this, arguments);
        }

        return n;
      }(_core_JSONSupport_js__WEBPACK_IMPORTED_MODULE_10__["JSONSupport"]);

      Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_4__["property"])({
        type: String,
        json: {
          read: {
            source: ["name", "index"],
            reader: function reader(e, t) {
              return null != e ? e : "".concat(t.index);
            }
          }
        }
      })], n.prototype, "name", void 0), Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_enumeration_js__WEBPACK_IMPORTED_MODULE_5__["enumeration"])({
        jpg: "jpg",
        png: "png",
        dds: "dds",
        "ktx-etc2": "ktx-etc2"
      })], n.prototype, "format", void 0), n = Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_subclass_js__WEBPACK_IMPORTED_MODULE_6__["subclass"])("esri.layer.support.I3STextureFormat")], n);

      var u = /*#__PURE__*/function (_core_JSONSupport_js_6) {
        _inherits(u, _core_JSONSupport_js_6);

        var _super9 = _createSuper(u);

        function u() {
          var _this7;

          _classCallCheck(this, u);

          _this7 = _super9.apply(this, arguments), _this7.atlas = !1;
          return _this7;
        }

        return u;
      }(_core_JSONSupport_js__WEBPACK_IMPORTED_MODULE_10__["JSONSupport"]);

      Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_4__["property"])({
        type: [n]
      })], u.prototype, "formats", void 0), Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_4__["property"])({
        type: Boolean
      })], u.prototype, "atlas", void 0), u = Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_subclass_js__WEBPACK_IMPORTED_MODULE_6__["subclass"])("esri.layer.support.I3STextureSetDefinition")], u);

      var y = /*#__PURE__*/function (_core_JSONSupport_js_7) {
        _inherits(y, _core_JSONSupport_js_7);

        var _super10 = _createSuper(y);

        function y() {
          _classCallCheck(this, y);

          return _super10.apply(this, arguments);
        }

        return y;
      }(_core_JSONSupport_js__WEBPACK_IMPORTED_MODULE_10__["JSONSupport"]);

      Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_enumeration_js__WEBPACK_IMPORTED_MODULE_5__["enumeration"])({
        Float32: "Float32",
        UInt64: "UInt64",
        UInt32: "UInt32",
        UInt16: "UInt16",
        UInt8: "UInt8"
      })], y.prototype, "type", void 0), Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_4__["property"])({
        type: Number
      })], y.prototype, "component", void 0), y = Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_subclass_js__WEBPACK_IMPORTED_MODULE_6__["subclass"])("esri.layer.support.I3SGeometryAttribute")], y);

      var c = /*#__PURE__*/function (_core_JSONSupport_js_8) {
        _inherits(c, _core_JSONSupport_js_8);

        var _super11 = _createSuper(c);

        function c() {
          _classCallCheck(this, c);

          return _super11.apply(this, arguments);
        }

        return c;
      }(_core_JSONSupport_js__WEBPACK_IMPORTED_MODULE_10__["JSONSupport"]);

      Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_enumeration_js__WEBPACK_IMPORTED_MODULE_5__["enumeration"])({
        draco: "draco"
      })], c.prototype, "encoding", void 0), Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_4__["property"])({
        type: [String]
      })], c.prototype, "attributes", void 0), c = Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_subclass_js__WEBPACK_IMPORTED_MODULE_6__["subclass"])("esri.layer.support.I3SGeometryCompressedAttributes")], c);

      var d = /*#__PURE__*/function (_core_JSONSupport_js_9) {
        _inherits(d, _core_JSONSupport_js_9);

        var _super12 = _createSuper(d);

        function d() {
          var _this8;

          _classCallCheck(this, d);

          _this8 = _super12.apply(this, arguments), _this8.offset = 0;
          return _this8;
        }

        return d;
      }(_core_JSONSupport_js__WEBPACK_IMPORTED_MODULE_10__["JSONSupport"]);

      Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_4__["property"])({
        type: Number
      })], d.prototype, "offset", void 0), Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_4__["property"])({
        type: y
      })], d.prototype, "position", void 0), Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_4__["property"])({
        type: y
      })], d.prototype, "normal", void 0), Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_4__["property"])({
        type: y
      })], d.prototype, "uv0", void 0), Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_4__["property"])({
        type: y
      })], d.prototype, "color", void 0), Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_4__["property"])({
        type: y
      })], d.prototype, "uvRegion", void 0), Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_4__["property"])({
        type: y
      })], d.prototype, "featureId", void 0), Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_4__["property"])({
        type: y
      })], d.prototype, "faceRange", void 0), Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_4__["property"])({
        type: c
      })], d.prototype, "compressedAttributes", void 0), d = Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_subclass_js__WEBPACK_IMPORTED_MODULE_6__["subclass"])("esri.layer.support.I3SGeometryBuffer")], d);

      var m = /*#__PURE__*/function (_core_JSONSupport_js_10) {
        _inherits(m, _core_JSONSupport_js_10);

        var _super13 = _createSuper(m);

        function m() {
          _classCallCheck(this, m);

          return _super13.apply(this, arguments);
        }

        return m;
      }(_core_JSONSupport_js__WEBPACK_IMPORTED_MODULE_10__["JSONSupport"]);

      Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_enumeration_js__WEBPACK_IMPORTED_MODULE_5__["enumeration"])({
        triangle: "triangle"
      })], m.prototype, "topology", void 0), Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_4__["property"])()], m.prototype, "geometryBuffers", void 0), m = Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_subclass_js__WEBPACK_IMPORTED_MODULE_6__["subclass"])("esri.layer.support.I3SGeometryDefinition")], m);
      /***/
    },

    /***/
    "Yjsn":
    /*!***********************************************************************!*\
      !*** ./node_modules/@arcgis/core/layers/support/SceneModification.js ***!
      \***********************************************************************/

    /*! exports provided: default */

    /***/
    function Yjsn(module, __webpack_exports__, __webpack_require__) {
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


      var _core_Warning_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ../../core/Warning.js */
      "ACjl");
      /* harmony import */


      var _core_accessorSupport_decorators_subclass_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! ../../core/accessorSupport/decorators/subclass.js */
      "04ZG");
      /* harmony import */


      var _core_accessorSupport_decorators_writer_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! ../../core/accessorSupport/decorators/writer.js */
      "Cduq");
      /* harmony import */


      var _core_accessorSupport_decorators_persistable_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! ../../core/accessorSupport/decorators/persistable.js */
      "xvdR");
      /* harmony import */


      var _core_JSONSupport_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
      /*! ../../core/JSONSupport.js */
      "ag7Y");
      /* harmony import */


      var _geometry_Polygon_js__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
      /*! ../../geometry/Polygon.js */
      "Ehki");
      /* harmony import */


      var _geometry_js__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
      /*! ../../geometry.js */
      "4GrV");
      /* harmony import */


      var _geometry_projection_js__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
      /*! ../../geometry/projection.js */
      "gYg2");
      /*
      All material copyright ESRI, All Rights Reserved, unless otherwise specified.
      See https://js.arcgis.com/4.18/esri/copyright.txt for details.
      */


      var _l;

      var y = _l = /*#__PURE__*/function (_core_JSONSupport_js_11) {
        _inherits(l, _core_JSONSupport_js_11);

        var _super14 = _createSuper(l);

        function l(e) {
          var _this9;

          _classCallCheck(this, l);

          _this9 = _super14.call(this, e), _this9.geometry = null, _this9.type = "clip";
          return _this9;
        }

        _createClass(l, [{
          key: "writeGeometry",
          value: function writeGeometry(e, r, o, s) {
            if (s.layer && s.layer.spatialReference && !s.layer.spatialReference.equals(this.geometry.spatialReference)) {
              if (!Object(_geometry_projection_js__WEBPACK_IMPORTED_MODULE_13__["canProjectWithoutEngine"])(e.spatialReference, s.layer.spatialReference)) return void (s && s.messages && s.messages.push(new _core_Warning_js__WEBPACK_IMPORTED_MODULE_6__["default"]("scenemodification:unsupported", "Scene modifications with incompatible spatial references are not supported", {
                modification: this,
                spatialReference: s.layer.spatialReference,
                context: s
              })));
              var p = new _geometry_Polygon_js__WEBPACK_IMPORTED_MODULE_11__["default"]();
              Object(_geometry_projection_js__WEBPACK_IMPORTED_MODULE_13__["projectPolygon"])(e, p, s.layer.spatialReference), r[o] = p.toJSON(s);
            } else r[o] = e.toJSON(s);

            delete r[o].spatialReference;
          }
        }, {
          key: "clone",
          value: function clone() {
            return new _l({
              geometry: Object(_core_lang_js__WEBPACK_IMPORTED_MODULE_2__["clone"])(this.geometry),
              type: this.type
            });
          }
        }]);

        return l;
      }(_core_JSONSupport_js__WEBPACK_IMPORTED_MODULE_10__["JSONSupport"]);

      Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_5__["property"])({
        type: _geometry_Polygon_js__WEBPACK_IMPORTED_MODULE_11__["default"]
      }), Object(_core_accessorSupport_decorators_persistable_js__WEBPACK_IMPORTED_MODULE_9__["persistable"])()], y.prototype, "geometry", void 0), Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_writer_js__WEBPACK_IMPORTED_MODULE_8__["writer"])(["web-scene", "portal-item"], "geometry")], y.prototype, "writeGeometry", null), Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_5__["property"])({
        type: ["clip", "mask", "replace"],
        nonNullable: !0
      }), Object(_core_accessorSupport_decorators_persistable_js__WEBPACK_IMPORTED_MODULE_9__["persistable"])()], y.prototype, "type", void 0), y = _l = Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_subclass_js__WEBPACK_IMPORTED_MODULE_7__["subclass"])("esri.layers.support.SceneModification")], y);
      var f = y;
      /* harmony default export */

      __webpack_exports__["default"] = f;
      /***/
    },

    /***/
    "wigO":
    /*!************************************************************************!*\
      !*** ./node_modules/@arcgis/core/layers/support/SceneModifications.js ***!
      \************************************************************************/

    /*! exports provided: default */

    /***/
    function wigO(module, __webpack_exports__, __webpack_require__) {
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


      var _core_accessorSupport_decorators_subclass_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ../../core/accessorSupport/decorators/subclass.js */
      "04ZG");
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


      var _core_JSONSupport_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
      /*! ../../core/JSONSupport.js */
      "ag7Y");
      /* harmony import */


      var _core_Collection_js__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
      /*! ../../core/Collection.js */
      "LE9a");
      /* harmony import */


      var _request_js__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
      /*! ../../request.js */
      "Lqtk");
      /* harmony import */


      var _SceneModification_js__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
      /*! ./SceneModification.js */
      "Yjsn");
      /*
      All material copyright ESRI, All Rights Reserved, unless otherwise specified.
      See https://js.arcgis.com/4.18/esri/copyright.txt for details.
      */


      var _m;

      var n = _m = /*#__PURE__*/function (_Object) {
        _inherits(m, _Object);

        var _super15 = _createSuper(m);

        function m(r) {
          var _this10;

          _classCallCheck(this, m);

          _this10 = _super15.call(this, r), _this10.url = null;
          return _this10;
        }

        _createClass(m, [{
          key: "toJSON",
          value: function toJSON(r) {
            return this.toArray().map(function (o) {
              return o.toJSON(r);
            }).filter(function (r) {
              return !!r.geometry;
            });
          }
        }, {
          key: "clone",
          value: function clone() {
            return new _m({
              url: this.url,
              items: this.items.map(function (r) {
                return r.clone();
              })
            });
          }
        }, {
          key: "_readModifications",
          value: function _readModifications(r, o) {
            var _iterator = _createForOfIteratorHelper(r),
                _step;

            try {
              for (_iterator.s(); !(_step = _iterator.n()).done;) {
                var t = _step.value;
                this.add(_SceneModification_js__WEBPACK_IMPORTED_MODULE_13__["default"].fromJSON(t, o));
              }
            } catch (err) {
              _iterator.e(err);
            } finally {
              _iterator.f();
            }
          }
        }], [{
          key: "fromJSON",
          value: function fromJSON(r, o) {
            var t = new _m();
            return t._readModifications(r, o), t;
          }
        }, {
          key: "fromUrl",
          value: function () {
            var _fromUrl = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee2(r, t, e) {
              var i, c, n, u, _iterator2, _step2, _r2;

              return regeneratorRuntime.wrap(function _callee2$(_context2) {
                while (1) {
                  switch (_context2.prev = _context2.next) {
                    case 0:
                      i = {
                        url: Object(_core_urlUtils_js__WEBPACK_IMPORTED_MODULE_7__["urlToObject"])(r),
                        origin: "service"
                      };
                      _context2.next = 3;
                      return Object(_request_js__WEBPACK_IMPORTED_MODULE_12__["default"])(r, {
                        responseType: "json",
                        signal: Object(_core_maybe_js__WEBPACK_IMPORTED_MODULE_2__["get"])(e, "signal")
                      });

                    case 3:
                      c = _context2.sent;
                      n = t.toJSON();
                      u = [];
                      _iterator2 = _createForOfIteratorHelper(c.data);

                      try {
                        for (_iterator2.s(); !(_step2 = _iterator2.n()).done;) {
                          _r2 = _step2.value;
                          u.push(_SceneModification_js__WEBPACK_IMPORTED_MODULE_13__["default"].fromJSON(_objectSpread(_objectSpread({}, _r2), {}, {
                            geometry: _objectSpread(_objectSpread({}, _r2.geometry), {}, {
                              spatialReference: n
                            })
                          }), i));
                        }
                      } catch (err) {
                        _iterator2.e(err);
                      } finally {
                        _iterator2.f();
                      }

                      return _context2.abrupt("return", new _m({
                        url: r,
                        items: u
                      }));

                    case 9:
                    case "end":
                      return _context2.stop();
                  }
                }
              }, _callee2);
            }));

            function fromUrl(_x3, _x4, _x5) {
              return _fromUrl.apply(this, arguments);
            }

            return fromUrl;
          }()
        }]);

        return m;
      }(Object(_core_JSONSupport_js__WEBPACK_IMPORTED_MODULE_10__["JSONSupportMixin"])(_core_Collection_js__WEBPACK_IMPORTED_MODULE_11__["default"].ofType(_SceneModification_js__WEBPACK_IMPORTED_MODULE_13__["default"])));

      Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_5__["property"])({
        type: String
      })], n.prototype, "url", void 0), n = _m = Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_subclass_js__WEBPACK_IMPORTED_MODULE_6__["subclass"])("esri.layers.support.SceneModifications")], n);
      var u = n;
      /* harmony default export */

      __webpack_exports__["default"] = u;
      /***/
    },

    /***/
    "xvdR":
    /*!**********************************************************************************!*\
      !*** ./node_modules/@arcgis/core/core/accessorSupport/decorators/persistable.js ***!
      \**********************************************************************************/

    /*! exports provided: persistable */

    /***/
    function xvdR(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "persistable", function () {
        return g;
      });
      /* harmony import */


      var _maybe_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ../../maybe.js */
      "srIe");
      /* harmony import */


      var _metadata_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ../metadata.js */
      "evjZ");
      /* harmony import */


      var _property_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./property.js */
      "WbKI");
      /* harmony import */


      var _multiOriginJSONSupportUtils_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ../../multiOriginJSONSupportUtils.js */
      "Jpjp");
      /* harmony import */


      var _urlUtils_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ../../urlUtils.js */
      "4EHJ");
      /* harmony import */


      var _uuid_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ../../uuid.js */
      "ju1D");
      /* harmony import */


      var _PropertyOrigin_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ../PropertyOrigin.js */
      "ku/q");
      /* harmony import */


      var _portal_support_resourceExtension_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! ../../../portal/support/resourceExtension.js */
      "9AIY");
      /* harmony import */


      var _chunks_persistableUrlUtils_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! ../../../chunks/persistableUrlUtils.js */
      "/PL2");
      /*
      All material copyright ESRI, All Rights Reserved, unless otherwise specified.
      See https://js.arcgis.com/4.18/esri/copyright.txt for details.
      */


      function g(e) {
        var p = Object(_maybe_js__WEBPACK_IMPORTED_MODULE_0__["isSome"])(e) && e.origins ? e.origins : [void 0];
        return function (c, g) {
          var j = function (e, i, p) {
            if (Object(_maybe_js__WEBPACK_IMPORTED_MODULE_0__["isSome"])(e) && "resource" === e.type) return function (e, i, p) {
              var c = Object(_metadata_js__WEBPACK_IMPORTED_MODULE_1__["getOwnPropertyMetadata"])(i, p);
              return {
                type: String,
                read: function read(t, r, e) {
                  var o = Object(_chunks_persistableUrlUtils_js__WEBPACK_IMPORTED_MODULE_8__["r"])(t, r, e);
                  return c.type === String ? o : "function" == typeof c.type ? new c.type({
                    url: o
                  }) : void 0;
                },
                write: {
                  writer: function writer(o, i, m, d) {
                    if (!d || !d.resources) return "string" == typeof o ? void (i[m] = Object(_chunks_persistableUrlUtils_js__WEBPACK_IMPORTED_MODULE_8__["t"])(o, d)) : void (i[m] = o.write({}, d));

                    var g = function (t) {
                      if (Object(_maybe_js__WEBPACK_IMPORTED_MODULE_0__["isNone"])(t)) return null;
                      if ("string" == typeof t) return t;
                      return t.url;
                    }(o),
                        j = g ? Object(_chunks_persistableUrlUtils_js__WEBPACK_IMPORTED_MODULE_8__["t"])(g, _objectSpread(_objectSpread({}, d), {}, {
                      verifyItemRelativeUrls: d && d.verifyItemRelativeUrls ? {
                        writtenUrls: d.verifyItemRelativeUrls.writtenUrls,
                        rootPath: null
                      } : null
                    })) : null,
                        I = c.type !== String && (!Object(_multiOriginJSONSupportUtils_js__WEBPACK_IMPORTED_MODULE_3__["isMultiOriginJSONMixin"])(this) || d && d.origin && this.originIdOf(p) > Object(_PropertyOrigin_js__WEBPACK_IMPORTED_MODULE_6__["nameToId"])(d.origin));

                    d && d.portalItem && Object(_maybe_js__WEBPACK_IMPORTED_MODULE_0__["isSome"])(j) && !Object(_urlUtils_js__WEBPACK_IMPORTED_MODULE_4__["isAbsolute"])(j) ? I ? function (t, r, e, o, i, n, s, u) {
                      var p = s.portalItem.resourceFromPath(o),
                          c = U(e, o, s),
                          l = Object(_portal_support_resourceExtension_js__WEBPACK_IMPORTED_MODULE_7__["getResourceContentExtension"])(c),
                          m = Object(_urlUtils_js__WEBPACK_IMPORTED_MODULE_4__["getPathExtension"])(p.path);
                      if (l !== m) return void v(t, r, e, o, i, n, s, u);
                      w(t, r, p, c, s.resources.toUpdate), i[n] = o;
                    }(this, p, o, j, i, m, d, e) : function (t, r, e, o) {
                      o.resources.toKeep.push({
                        resource: o.portalItem.resourceFromPath(t)
                      }), r[e] = t;
                    }(j, i, m, d) : d && d.portalItem && (Object(_maybe_js__WEBPACK_IMPORTED_MODULE_0__["isNone"])(j) || Object(_maybe_js__WEBPACK_IMPORTED_MODULE_0__["isSome"])(Object(_chunks_persistableUrlUtils_js__WEBPACK_IMPORTED_MODULE_8__["i"])(j)) || Object(_urlUtils_js__WEBPACK_IMPORTED_MODULE_4__["isBlobProtocol"])(j) || I) ? v(this, p, o, j, i, m, d, e) : i[m] = j;
                  }
                }
              };
            }(e, i, p);

            switch (Object(_maybe_js__WEBPACK_IMPORTED_MODULE_0__["isSome"])(e) && e.type ? e.type : "other") {
              case "other":
                return {
                  read: !0,
                  write: !0
                };

              case "url":
                {
                  var _chunks_persistableUr = _chunks_persistableUrlUtils_js__WEBPACK_IMPORTED_MODULE_8__["p"],
                      t = _chunks_persistableUr.read,
                      r = _chunks_persistableUr.write;
                  return {
                    read: t,
                    write: r
                  };
                }
            }
          }(e, c, g);

          var _iterator3 = _createForOfIteratorHelper(p),
              _step3;

          try {
            for (_iterator3.s(); !(_step3 = _iterator3.n()).done;) {
              var t = _step3.value;
              var r = Object(_property_js__WEBPACK_IMPORTED_MODULE_2__["propertyJSONMeta"])(c, t, g);

              for (var _t in j) {
                r[_t] = j[_t];
              }
            }
          } catch (err) {
            _iterator3.e(err);
          } finally {
            _iterator3.f();
          }
        };
      }

      function v(t, r, o, i, n, s, a, l) {
        var m = Object(_uuid_js__WEBPACK_IMPORTED_MODULE_5__["generateUUID"])(),
            y = U(o, i, a),
            h = Object(_urlUtils_js__WEBPACK_IMPORTED_MODULE_4__["join"])(Object(_maybe_js__WEBPACK_IMPORTED_MODULE_0__["get"])(l, "prefix"), m),
            d = "".concat(h, ".").concat(Object(_portal_support_resourceExtension_js__WEBPACK_IMPORTED_MODULE_7__["getResourceContentExtension"])(y)),
            g = a.portalItem.resourceFromPath(d);
        Object(_urlUtils_js__WEBPACK_IMPORTED_MODULE_4__["isBlobProtocol"])(i) && a.resources.pendingOperations.push(function () {
          var _ref = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee3(t) {
            var r, _yield$r, e;

            return regeneratorRuntime.wrap(function _callee3$(_context3) {
              while (1) {
                switch (_context3.prev = _context3.next) {
                  case 0:
                    _context3.next = 2;
                    return Promise.resolve().then(__webpack_require__.bind(null,
                    /*! ../../../request.js */
                    "Lqtk"));

                  case 2:
                    r = _context3.sent["default"];
                    _context3.next = 5;
                    return r(t, {
                      responseType: "blob"
                    });

                  case 5:
                    _yield$r = _context3.sent;
                    e = _yield$r.data;
                    return _context3.abrupt("return", e);

                  case 8:
                  case "end":
                    return _context3.stop();
                }
              }
            }, _callee3);
          }));

          return function (_x6) {
            return _ref.apply(this, arguments);
          };
        }()(i).then(function (t) {
          g.path = "".concat(h, ".").concat(Object(_portal_support_resourceExtension_js__WEBPACK_IMPORTED_MODULE_7__["getResourceContentExtension"])(t)), n[s] = g.itemRelativeUrl;
        })["catch"](function () {})), w(t, r, g, y, a.resources.toAdd), n[s] = g.itemRelativeUrl;
      }

      function w(t, r, e, o, i) {
        i.push({
          resource: e,
          content: o,
          finish: function finish(e) {
            !function (t, r, e) {
              "string" == typeof t[r] ? t[r] = e.url : t[r].url = e.url;
            }(t, r, e);
          }
        });
      }

      function U(t, r, e) {
        return "string" == typeof t ? {
          url: r
        } : new Blob([JSON.stringify(t.toJSON(e))], {
          type: "application/json"
        });
      }
      /***/

    },

    /***/
    "yvy3":
    /*!*****************************************************************!*\
      !*** ./node_modules/@arcgis/core/layers/IntegratedMeshLayer.js ***!
      \*****************************************************************/

    /*! exports provided: default */

    /***/
    function yvy3(module, __webpack_exports__, __webpack_require__) {
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


      var _core_Error_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! ../core/Error.js */
      "zlDU");
      /* harmony import */


      var _chunks_persistableUrlUtils_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! ../chunks/persistableUrlUtils.js */
      "/PL2");
      /* harmony import */


      var _core_accessorSupport_decorators_persistable_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
      /*! ../core/accessorSupport/decorators/persistable.js */
      "xvdR");
      /* harmony import */


      var _core_Handles_js__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
      /*! ../core/Handles.js */
      "r0DZ");
      /* harmony import */


      var _Layer_js__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
      /*! ./Layer.js */
      "pqNC");
      /* harmony import */


      var _core_MultiOriginJSONSupport_js__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
      /*! ../core/MultiOriginJSONSupport.js */
      "5pQd");
      /* harmony import */


      var _core_watchUtils_js__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(
      /*! ../core/watchUtils.js */
      "N5XI");
      /* harmony import */


      var _support_commonProperties_js__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(
      /*! ./support/commonProperties.js */
      "IvSi");
      /* harmony import */


      var _mixins_OperationalLayer_js__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(
      /*! ./mixins/OperationalLayer.js */
      "uRH/");
      /* harmony import */


      var _mixins_ArcGISService_js__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(
      /*! ./mixins/ArcGISService.js */
      "PVlI");
      /* harmony import */


      var _mixins_PortalLayer_js__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(
      /*! ./mixins/PortalLayer.js */
      "DbUH");
      /* harmony import */


      var _mixins_ScaleRangeLayer_js__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(
      /*! ./mixins/ScaleRangeLayer.js */
      "WmKv");
      /* harmony import */


      var _support_I3SLayerDefinitions_js__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(
      /*! ./support/I3SLayerDefinitions.js */
      "XTTP");
      /* harmony import */


      var _mixins_SceneService_js__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(
      /*! ./mixins/SceneService.js */
      "lq5k");
      /* harmony import */


      var _support_SceneModifications_js__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(
      /*! ./support/SceneModifications.js */
      "wigO");
      /*
      All material copyright ESRI, All Rights Reserved, unless otherwise specified.
      See https://js.arcgis.com/4.18/esri/copyright.txt for details.
      */


      var x = /*#__PURE__*/function (_Object2) {
        _inherits(x, _Object2);

        var _super16 = _createSuper(x);

        function x() {
          var _this11;

          _classCallCheck(this, x);

          for (var _len = arguments.length, e = new Array(_len), _key = 0; _key < _len; _key++) {
            e[_key] = arguments[_key];
          }

          _this11 = _super16.call.apply(_super16, [this].concat(e)), _this11.handles = new _core_Handles_js__WEBPACK_IMPORTED_MODULE_11__["default"](), _this11.geometryType = "mesh", _this11.operationalLayerType = "IntegratedMeshLayer", _this11.type = "integrated-mesh", _this11.nodePages = null, _this11.materialDefinitions = null, _this11.textureSetDefinitions = null, _this11.geometryDefinitions = null, _this11.serviceUpdateTimeStamp = null, _this11.profile = "mesh-pyramids", _this11.modifications = null, _this11._modificationsSource = null, _this11.elevationInfo = null, _this11.path = null;
          return _this11;
        }

        _createClass(x, [{
          key: "destroy",
          value: function destroy() {
            this.handles.destroy();
          }
        }, {
          key: "initialize",
          value: function initialize() {
            var _this12 = this;

            this.handles.add(Object(_core_watchUtils_js__WEBPACK_IMPORTED_MODULE_14__["on"])(this, "modifications", "after-changes", function () {
              return _this12.modifications = _this12.modifications;
            }, null, null, !0));
          }
        }, {
          key: "normalizeCtorArgs",
          value: function normalizeCtorArgs(e, t) {
            return "string" == typeof e ? _objectSpread({
              url: e
            }, t) : e;
          }
        }, {
          key: "readModifications",
          value: function readModifications(e, t, o) {
            this._modificationsSource = {
              url: Object(_chunks_persistableUrlUtils_js__WEBPACK_IMPORTED_MODULE_9__["f"])(e, o),
              context: o
            };
          }
        }, {
          key: "load",
          value: function () {
            var _load = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee4(e) {
              return regeneratorRuntime.wrap(function _callee4$(_context4) {
                while (1) {
                  switch (_context4.prev = _context4.next) {
                    case 0:
                      return _context4.abrupt("return", (this.addResolvingPromise(this._doLoad(e)), this));

                    case 1:
                    case "end":
                      return _context4.stop();
                  }
                }
              }, _callee4, this);
            }));

            function load(_x7) {
              return _load.apply(this, arguments);
            }

            return load;
          }()
        }, {
          key: "_doLoad",
          value: function () {
            var _doLoad2 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee5(e) {
              var r, t;
              return regeneratorRuntime.wrap(function _callee5$(_context5) {
                while (1) {
                  switch (_context5.prev = _context5.next) {
                    case 0:
                      r = Object(_core_maybe_js__WEBPACK_IMPORTED_MODULE_2__["get"])(e, "signal");
                      _context5.prev = 1;
                      _context5.next = 4;
                      return this.loadFromPortal({
                        supportedTypes: ["Scene Service"]
                      }, e);

                    case 4:
                      _context5.next = 8;
                      break;

                    case 6:
                      _context5.prev = 6;
                      _context5.t0 = _context5["catch"](1);

                    case 8:
                      _context5.next = 10;
                      return this._fetchService(r);

                    case 10:
                      if (!Object(_core_maybe_js__WEBPACK_IMPORTED_MODULE_2__["isSome"])(this._modificationsSource)) {
                        _context5.next = 15;
                        break;
                      }

                      _context5.next = 13;
                      return _support_SceneModifications_js__WEBPACK_IMPORTED_MODULE_22__["default"].fromUrl(this._modificationsSource.url, this.spatialReference, e);

                    case 13:
                      t = _context5.sent;
                      this.setAtOrigin("modifications", t, this._modificationsSource.context.origin), this._modificationsSource = null;

                    case 15:
                      _context5.next = 17;
                      return this._verifyRootNodeAndUpdateExtent(this.nodePages, r);

                    case 17:
                    case "end":
                      return _context5.stop();
                  }
                }
              }, _callee5, this, [[1, 6]]);
            }));

            function _doLoad(_x8) {
              return _doLoad2.apply(this, arguments);
            }

            return _doLoad;
          }()
        }, {
          key: "beforeSave",
          value: function beforeSave() {
            if (!Object(_core_maybe_js__WEBPACK_IMPORTED_MODULE_2__["isNone"])(this._modificationsSource)) return this.load().then(function () {}, function () {});
          }
        }, {
          key: "saveAs",
          value: function () {
            var _saveAs = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee6(e, t) {
              var _this13 = this;

              return regeneratorRuntime.wrap(function _callee6$(_context6) {
                while (1) {
                  switch (_context6.prev = _context6.next) {
                    case 0:
                      return _context6.abrupt("return", this._debouncedSaveOperations(1, _objectSpread(_objectSpread({}, t), {}, {
                        getTypeKeywords: function getTypeKeywords() {
                          return _this13._getTypeKeywords();
                        },
                        portalItemLayerType: "integrated-mesh"
                      }), e));

                    case 1:
                    case "end":
                      return _context6.stop();
                  }
                }
              }, _callee6, this);
            }));

            function saveAs(_x9, _x10) {
              return _saveAs.apply(this, arguments);
            }

            return saveAs;
          }()
        }, {
          key: "save",
          value: function () {
            var _save = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee7() {
              var _this14 = this;

              var e;
              return regeneratorRuntime.wrap(function _callee7$(_context7) {
                while (1) {
                  switch (_context7.prev = _context7.next) {
                    case 0:
                      e = {
                        getTypeKeywords: function getTypeKeywords() {
                          return _this14._getTypeKeywords();
                        },
                        portalItemLayerType: "integrated-mesh"
                      };
                      return _context7.abrupt("return", this._debouncedSaveOperations(0, e));

                    case 2:
                    case "end":
                      return _context7.stop();
                  }
                }
              }, _callee7, this);
            }));

            function save() {
              return _save.apply(this, arguments);
            }

            return save;
          }()
        }, {
          key: "validateLayer",
          value: function validateLayer(e) {
            if (e.layerType && "IntegratedMesh" !== e.layerType) throw new _core_Error_js__WEBPACK_IMPORTED_MODULE_8__["default"]("integrated-mesh-layer:layer-type-not-supported", "IntegratedMeshLayer does not support this layer type", {
              layerType: e.layerType
            });
            if (isNaN(this.version.major) || isNaN(this.version.minor)) throw new _core_Error_js__WEBPACK_IMPORTED_MODULE_8__["default"]("layer:service-version-not-supported", "Service version is not supported.", {
              serviceVersion: this.version.versionString,
              supportedVersions: "1.x"
            });
            if (this.version.major > 1) throw new _core_Error_js__WEBPACK_IMPORTED_MODULE_8__["default"]("layer:service-version-too-new", "Service version is too new.", {
              serviceVersion: this.version.versionString,
              supportedVersions: "1.x"
            });
          }
        }, {
          key: "_getTypeKeywords",
          value: function _getTypeKeywords() {
            return ["IntegratedMeshLayer"];
          }
        }]);

        return x;
      }(Object(_mixins_SceneService_js__WEBPACK_IMPORTED_MODULE_21__["SceneService"])(Object(_mixins_ArcGISService_js__WEBPACK_IMPORTED_MODULE_17__["ArcGISService"])(Object(_mixins_OperationalLayer_js__WEBPACK_IMPORTED_MODULE_16__["OperationalLayer"])(Object(_mixins_PortalLayer_js__WEBPACK_IMPORTED_MODULE_18__["PortalLayer"])(Object(_mixins_ScaleRangeLayer_js__WEBPACK_IMPORTED_MODULE_19__["ScaleRangeLayer"])(Object(_core_MultiOriginJSONSupport_js__WEBPACK_IMPORTED_MODULE_13__["MultiOriginJSONMixin"])(_Layer_js__WEBPACK_IMPORTED_MODULE_12__["default"])))))));

      Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_5__["property"])({
        type: String,
        readOnly: !0
      })], x.prototype, "geometryType", void 0), Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_5__["property"])({
        type: ["show", "hide"]
      })], x.prototype, "listMode", void 0), Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_5__["property"])({
        type: ["IntegratedMeshLayer"]
      })], x.prototype, "operationalLayerType", void 0), Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_5__["property"])({
        json: {
          read: !1
        },
        readOnly: !0
      })], x.prototype, "type", void 0), Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_5__["property"])({
        type: _support_I3SLayerDefinitions_js__WEBPACK_IMPORTED_MODULE_20__["I3SNodePageDefinition"],
        readOnly: !0
      })], x.prototype, "nodePages", void 0), Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_5__["property"])({
        type: [_support_I3SLayerDefinitions_js__WEBPACK_IMPORTED_MODULE_20__["I3SMaterialDefinition"]],
        readOnly: !0
      })], x.prototype, "materialDefinitions", void 0), Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_5__["property"])({
        type: [_support_I3SLayerDefinitions_js__WEBPACK_IMPORTED_MODULE_20__["I3STextureSetDefinition"]],
        readOnly: !0
      })], x.prototype, "textureSetDefinitions", void 0), Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_5__["property"])({
        type: [_support_I3SLayerDefinitions_js__WEBPACK_IMPORTED_MODULE_20__["I3SGeometryDefinition"]],
        readOnly: !0
      })], x.prototype, "geometryDefinitions", void 0), Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_5__["property"])({
        readOnly: !0
      })], x.prototype, "serviceUpdateTimeStamp", void 0), Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_5__["property"])({
        type: _support_SceneModifications_js__WEBPACK_IMPORTED_MODULE_22__["default"]
      }), Object(_core_accessorSupport_decorators_persistable_js__WEBPACK_IMPORTED_MODULE_10__["persistable"])({
        origins: ["web-scene", "portal-item"],
        type: "resource",
        prefix: "modifications"
      })], x.prototype, "modifications", void 0), Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_reader_js__WEBPACK_IMPORTED_MODULE_6__["reader"])(["web-scene", "portal-item"], "modifications")], x.prototype, "readModifications", null), Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_5__["property"])(_support_commonProperties_js__WEBPACK_IMPORTED_MODULE_15__["elevationInfo"])], x.prototype, "elevationInfo", void 0), Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_5__["property"])({
        type: String,
        json: {
          origins: {
            "web-scene": {
              read: !0,
              write: !0
            },
            "portal-item": {
              read: !0,
              write: !0
            }
          },
          read: !1
        }
      })], x.prototype, "path", void 0), x = Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_subclass_js__WEBPACK_IMPORTED_MODULE_7__["subclass"])("esri.layers.IntegratedMeshLayer")], x);
      var O = x;
      /* harmony default export */

      __webpack_exports__["default"] = O;
      /***/
    }
  }]);
})();
//# sourceMappingURL=IntegratedMeshLayer-js-es5.js.map