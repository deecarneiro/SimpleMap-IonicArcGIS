(function () {
  function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

  function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

  function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

  function _get(target, property, receiver) { if (typeof Reflect !== "undefined" && Reflect.get) { _get = Reflect.get; } else { _get = function _get(target, property, receiver) { var base = _superPropBase(target, property); if (!base) return; var desc = Object.getOwnPropertyDescriptor(base, property); if (desc.get) { return desc.get.call(receiver); } return desc.value; }; } return _get(target, property, receiver || target); }

  function _superPropBase(object, property) { while (!Object.prototype.hasOwnProperty.call(object, property)) { object = _getPrototypeOf(object); if (object === null) break; } return object; }

  function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

  function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

  function _createForOfIteratorHelper(o, allowArrayLike) { var it; if (typeof Symbol === "undefined" || o[Symbol.iterator] == null) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e2) { throw _e2; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = o[Symbol.iterator](); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e3) { didErr = true; err = _e3; }, f: function f() { try { if (!normalCompletion && it["return"] != null) it["return"](); } finally { if (didErr) throw err; } } }; }

  function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

  function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

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

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["BuildingSceneLayer-js"], {
    /***/
    "6BQF":
    /*!*****************************************************************************************!*\
      !*** ./node_modules/@arcgis/core/layers/buildingSublayers/BuildingComponentSublayer.js ***!
      \*****************************************************************************************/

    /*! exports provided: default */

    /***/
    function BQF(module, __webpack_exports__, __webpack_require__) {
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


      var _core_accessorSupport_decorators_enumeration_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! ../../core/accessorSupport/decorators/enumeration.js */
      "RI0u");
      /* harmony import */


      var _core_accessorSupport_decorators_reader_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! ../../core/accessorSupport/decorators/reader.js */
      "r88o");
      /* harmony import */


      var _core_accessorSupport_decorators_subclass_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! ../../core/accessorSupport/decorators/subclass.js */
      "04ZG");
      /* harmony import */


      var _core_Error_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
      /*! ../../core/Error.js */
      "zlDU");
      /* harmony import */


      var _core_urlUtils_js__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
      /*! ../../core/urlUtils.js */
      "4EHJ");
      /* harmony import */


      var _core_uuid_js__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
      /*! ../../core/uuid.js */
      "ju1D");
      /* harmony import */


      var _portal_support_resourceExtension_js__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
      /*! ../../portal/support/resourceExtension.js */
      "9AIY");
      /* harmony import */


      var _core_promiseUtils_js__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(
      /*! ../../core/promiseUtils.js */
      "9MzC");
      /* harmony import */


      var _geometry_SpatialReference_js__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(
      /*! ../../geometry/SpatialReference.js */
      "WZb1");
      /* harmony import */


      var _geometry_Extent_js__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(
      /*! ../../geometry/Extent.js */
      "OvF4");
      /* harmony import */


      var _PopupTemplate_js__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(
      /*! ../../PopupTemplate.js */
      "SFah");
      /* harmony import */


      var _request_js__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(
      /*! ../../request.js */
      "Lqtk");
      /* harmony import */


      var _core_Promise_js__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(
      /*! ../../core/Promise.js */
      "+rMe");
      /* harmony import */


      var _core_Loadable_js__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(
      /*! ../../core/Loadable.js */
      "bV/r");
      /* harmony import */


      var _symbols_support_ElevationInfo_js__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(
      /*! ../../symbols/support/ElevationInfo.js */
      "/RTN");
      /* harmony import */


      var _support_commonProperties_js__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(
      /*! ../support/commonProperties.js */
      "IvSi");
      /* harmony import */


      var _renderers_Renderer_js__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(
      /*! ../../renderers/Renderer.js */
      "ZnuT");
      /* harmony import */


      var _renderers_ClassBreaksRenderer_js__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(
      /*! ../../renderers/ClassBreaksRenderer.js */
      "tCO6");
      /* harmony import */


      var _renderers_UniqueValueRenderer_js__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(
      /*! ../../renderers/UniqueValueRenderer.js */
      "2gBT");
      /* harmony import */


      var _renderers_DictionaryRenderer_js__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(
      /*! ../../renderers/DictionaryRenderer.js */
      "JhoD");
      /* harmony import */


      var _renderers_DotDensityRenderer_js__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(
      /*! ../../renderers/DotDensityRenderer.js */
      "tI3Y");
      /* harmony import */


      var _renderers_HeatmapRenderer_js__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(
      /*! ../../renderers/HeatmapRenderer.js */
      "R4xK");
      /* harmony import */


      var _renderers_SimpleRenderer_js__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(
      /*! ../../renderers/SimpleRenderer.js */
      "/1dM");
      /* harmony import */


      var _renderers_support_types_js__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(
      /*! ../../renderers/support/types.js */
      "XNvV");
      /* harmony import */


      var _renderers_support_jsonUtils_js__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(
      /*! ../../renderers/support/jsonUtils.js */
      "+Xal");
      /* harmony import */


      var _support_FieldsIndex_js__WEBPACK_IMPORTED_MODULE_32__ = __webpack_require__(
      /*! ../support/FieldsIndex.js */
      "gLc9");
      /* harmony import */


      var _support_fieldProperties_js__WEBPACK_IMPORTED_MODULE_33__ = __webpack_require__(
      /*! ../support/fieldProperties.js */
      "L+uT");
      /* harmony import */


      var _support_popupUtils_js__WEBPACK_IMPORTED_MODULE_34__ = __webpack_require__(
      /*! ../../support/popupUtils.js */
      "9Ruv");
      /* harmony import */


      var _tasks_support_Query_js__WEBPACK_IMPORTED_MODULE_35__ = __webpack_require__(
      /*! ../../tasks/support/Query.js */
      "xk++");
      /* harmony import */


      var _FeatureLayer_js__WEBPACK_IMPORTED_MODULE_36__ = __webpack_require__(
      /*! ../FeatureLayer.js */
      "W9Wu");
      /* harmony import */


      var _BuildingSublayer_js__WEBPACK_IMPORTED_MODULE_37__ = __webpack_require__(
      /*! ./BuildingSublayer.js */
      "Lk2K");
      /* harmony import */


      var _support_capabilities_js__WEBPACK_IMPORTED_MODULE_38__ = __webpack_require__(
      /*! ../support/capabilities.js */
      "fqtG");
      /* harmony import */


      var _support_I3SLayerDefinitions_js__WEBPACK_IMPORTED_MODULE_39__ = __webpack_require__(
      /*! ../support/I3SLayerDefinitions.js */
      "XTTP");
      /*
      All material copyright ESRI, All Rights Reserved, unless otherwise specified.
      See https://js.arcgis.com/4.18/esri/copyright.txt for details.
      */


      var D = Object(_support_fieldProperties_js__WEBPACK_IMPORTED_MODULE_33__["defineFieldProperties"])();

      var E = /*#__PURE__*/function (_core_Loadable_js__WE) {
        _inherits(E, _core_Loadable_js__WE);

        var _super = _createSuper(E);

        function E(e) {
          var _this;

          _classCallCheck(this, E);

          _this = _super.call(this, e), _this.type = "building-component", _this.nodePages = null, _this.materialDefinitions = null, _this.textureSetDefinitions = null, _this.geometryDefinitions = null, _this.serviceUpdateTimeStamp = null, _this.fields = null, _this.associatedLayer = null, _this.outFields = null, _this.listMode = "show", _this.renderer = null, _this.definitionExpression = null, _this.popupEnabled = !0, _this.popupTemplate = null, _this.layerType = "3d-object";
          return _this;
        }

        _createClass(E, [{
          key: "parsedUrl",
          get: function get() {
            return this.layer ? {
              path: "".concat(this.layer.parsedUrl.path, "/sublayers/").concat(this.id),
              query: this.layer.parsedUrl.query
            } : null;
          }
        }, {
          key: "fieldsIndex",
          get: function get() {
            return new _support_FieldsIndex_js__WEBPACK_IMPORTED_MODULE_32__["default"](this.fields);
          }
        }, {
          key: "readAssociatedLayer",
          value: function readAssociatedLayer(e, t) {
            var o = this.layer.associatedFeatureServiceItem,
                s = t.associatedLayerID;
            return Object(_core_maybe_js__WEBPACK_IMPORTED_MODULE_2__["isSome"])(o) && "number" == typeof s ? new _FeatureLayer_js__WEBPACK_IMPORTED_MODULE_36__["default"]({
              portalItem: o,
              layerId: s
            }) : null;
          }
        }, {
          key: "objectIdField",
          get: function get() {
            if (null != this.fields) {
              var _iterator = _createForOfIteratorHelper(this.fields),
                  _step;

              try {
                for (_iterator.s(); !(_step = _iterator.n()).done;) {
                  var e = _step.value;
                  if ("oid" === e.type) return e.name;
                }
              } catch (err) {
                _iterator.e(err);
              } finally {
                _iterator.f();
              }
            }

            return null;
          }
        }, {
          key: "displayField",
          get: function get() {
            return Object(_core_maybe_js__WEBPACK_IMPORTED_MODULE_2__["isSome"])(this.associatedLayer) ? this.associatedLayer.displayField : null;
          }
        }, {
          key: "defaultPopupTemplate",
          get: function get() {
            return this.createPopupTemplate();
          }
        }, {
          key: "load",
          value: function load(e) {
            var t = Object(_core_maybe_js__WEBPACK_IMPORTED_MODULE_2__["isSome"])(e) ? e.signal : null;
            return this.addResolvingPromise(this._fetchService(t)), Object(_core_promiseUtils_js__WEBPACK_IMPORTED_MODULE_14__["resolve"])(this);
          }
        }, {
          key: "createPopupTemplate",
          value: function createPopupTemplate(e) {
            return Object(_support_popupUtils_js__WEBPACK_IMPORTED_MODULE_34__["createPopupTemplate"])(this, e);
          }
        }, {
          key: "_fetchService",
          value: function () {
            var _fetchService2 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(e) {
              var r;
              return regeneratorRuntime.wrap(function _callee$(_context) {
                while (1) {
                  switch (_context.prev = _context.next) {
                    case 0:
                      _context.next = 2;
                      return Object(_request_js__WEBPACK_IMPORTED_MODULE_18__["default"])(this.parsedUrl.path, {
                        query: {
                          f: "json"
                        },
                        responseType: "json",
                        signal: e
                      });

                    case 2:
                      r = _context.sent.data;
                      this.read(r, {
                        origin: "service",
                        url: this.parsedUrl
                      });

                    case 4:
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
        }, {
          key: "getField",
          value: function getField(e) {
            return this.fieldsIndex.get(e);
          }
        }, {
          key: "getFieldDomain",
          value: function getFieldDomain(e) {
            var r = this.getField(e);
            return r && r.domain ? r.domain : null;
          }
        }, {
          key: "geometryType",
          get: function get() {
            return "3d-object" === this.layerType ? "mesh" : "point";
          }
        }, {
          key: "profile",
          get: function get() {
            return "3d-object" === this.layerType ? "mesh-pyramids" : "points";
          }
        }, {
          key: "capabilities",
          get: function get() {
            var e = Object(_core_maybe_js__WEBPACK_IMPORTED_MODULE_2__["isSome"])(this.associatedLayer) && this.associatedLayer.capabilities ? this.associatedLayer.capabilities : _support_capabilities_js__WEBPACK_IMPORTED_MODULE_38__["zeroCapabilities"],
                t = e.query,
                _e$data = e.data,
                o = _e$data.supportsZ,
                s = _e$data.supportsM,
                i = _e$data.isVersioned;
            return {
              query: t,
              data: {
                supportsZ: o,
                supportsM: s,
                isVersioned: i
              }
            };
          }
        }, {
          key: "createQuery",
          value: function createQuery() {
            var e = new _tasks_support_Query_js__WEBPACK_IMPORTED_MODULE_35__["default"]();
            return "mesh" !== this.geometryType && (e.returnGeometry = !0, e.returnZ = !0), e.where = this.definitionExpression || "1=1", e.sqlFormat = "standard", e;
          }
        }, {
          key: "queryExtent",
          value: function queryExtent(e, r) {
            var _this2 = this;

            return this._getAssociatedLayerForQuery().then(function (t) {
              return t.queryExtent(e || _this2.createQuery(), r);
            });
          }
        }, {
          key: "queryFeatureCount",
          value: function queryFeatureCount(e, r) {
            var _this3 = this;

            return this._getAssociatedLayerForQuery().then(function (t) {
              return t.queryFeatureCount(e || _this3.createQuery(), r);
            });
          }
        }, {
          key: "queryFeatures",
          value: function queryFeatures(e, r) {
            var _this4 = this;

            return this._getAssociatedLayerForQuery().then(function (t) {
              return t.queryFeatures(e || _this4.createQuery(), r);
            }).then(function (e) {
              if (e && e.features) {
                var _iterator2 = _createForOfIteratorHelper(e.features),
                    _step2;

                try {
                  for (_iterator2.s(); !(_step2 = _iterator2.n()).done;) {
                    var _r = _step2.value;
                    _r.layer = _this4.layer, _r.sourceLayer = _this4;
                  }
                } catch (err) {
                  _iterator2.e(err);
                } finally {
                  _iterator2.f();
                }
              }

              return e;
            });
          }
        }, {
          key: "queryObjectIds",
          value: function queryObjectIds(e, r) {
            var _this5 = this;

            return this._getAssociatedLayerForQuery().then(function (t) {
              return t.queryObjectIds(e || _this5.createQuery(), r);
            });
          }
        }, {
          key: "getFieldUsageInfo",
          value: function getFieldUsageInfo(e) {
            return this.fieldsIndex.has(e) ? {
              supportsLabelingInfo: !1,
              supportsRenderer: !1,
              supportsPopupTemplate: !1,
              supportsLayerQuery: !1
            } : {
              supportsLabelingInfo: !1,
              supportsRenderer: !0,
              supportsPopupTemplate: !0,
              supportsLayerQuery: Object(_core_maybe_js__WEBPACK_IMPORTED_MODULE_2__["isSome"])(this.associatedLayer)
            };
          }
        }, {
          key: "_getAssociatedLayerForQuery",
          value: function _getAssociatedLayerForQuery() {
            var e = this.associatedLayer;
            return Object(_core_maybe_js__WEBPACK_IMPORTED_MODULE_2__["isSome"])(e) && e.loaded ? Object(_core_promiseUtils_js__WEBPACK_IMPORTED_MODULE_14__["resolve"])(e) : this._loadAssociatedLayerForQuery();
          }
        }, {
          key: "_loadAssociatedLayerForQuery",
          value: function () {
            var _loadAssociatedLayerForQuery2 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee2() {
              return regeneratorRuntime.wrap(function _callee2$(_context2) {
                while (1) {
                  switch (_context2.prev = _context2.next) {
                    case 0:
                      _context2.next = 2;
                      return this.load();

                    case 2:
                      if (!Object(_core_maybe_js__WEBPACK_IMPORTED_MODULE_2__["isNone"])(this.associatedLayer)) {
                        _context2.next = 4;
                        break;
                      }

                      throw new _core_Error_js__WEBPACK_IMPORTED_MODULE_10__["default"]("buildingscenelayer:query-not-available", "BuildingSceneLayer component layer queries are not available without an associated feature layer", {
                        layer: this
                      });

                    case 4:
                      _context2.prev = 4;
                      _context2.next = 7;
                      return this.associatedLayer.load();

                    case 7:
                      _context2.next = 12;
                      break;

                    case 9:
                      _context2.prev = 9;
                      _context2.t0 = _context2["catch"](4);
                      throw new _core_Error_js__WEBPACK_IMPORTED_MODULE_10__["default"]("buildingscenelayer:query-not-available", "BuildingSceneLayer associated feature layer could not be loaded", {
                        layer: this,
                        error: _context2.t0
                      });

                    case 12:
                      return _context2.abrupt("return", this.associatedLayer);

                    case 13:
                    case "end":
                      return _context2.stop();
                  }
                }
              }, _callee2, this, [[4, 9]]);
            }));

            function _loadAssociatedLayerForQuery() {
              return _loadAssociatedLayerForQuery2.apply(this, arguments);
            }

            return _loadAssociatedLayerForQuery;
          }()
        }]);

        return E;
      }(_core_Loadable_js__WEBPACK_IMPORTED_MODULE_20__["default"].LoadableMixin(Object(_core_Promise_js__WEBPACK_IMPORTED_MODULE_19__["EsriPromiseMixin"])(_BuildingSublayer_js__WEBPACK_IMPORTED_MODULE_37__["default"])));

      Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_5__["property"])({
        readOnly: !0,
        dependsOn: ["layer", "id"]
      })], E.prototype, "parsedUrl", null), Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_5__["property"])({
        type: _support_I3SLayerDefinitions_js__WEBPACK_IMPORTED_MODULE_39__["I3SNodePageDefinition"],
        readOnly: !0
      })], E.prototype, "nodePages", void 0), Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_5__["property"])({
        type: [_support_I3SLayerDefinitions_js__WEBPACK_IMPORTED_MODULE_39__["I3SMaterialDefinition"]],
        readOnly: !0
      })], E.prototype, "materialDefinitions", void 0), Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_5__["property"])({
        type: [_support_I3SLayerDefinitions_js__WEBPACK_IMPORTED_MODULE_39__["I3STextureSetDefinition"]],
        readOnly: !0
      })], E.prototype, "textureSetDefinitions", void 0), Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_5__["property"])({
        type: [_support_I3SLayerDefinitions_js__WEBPACK_IMPORTED_MODULE_39__["I3SGeometryDefinition"]],
        readOnly: !0
      })], E.prototype, "geometryDefinitions", void 0), Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_5__["property"])({
        readOnly: !0
      })], E.prototype, "serviceUpdateTimeStamp", void 0), Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_5__["property"])({
        readOnly: !0
      })], E.prototype, "store", void 0), Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_5__["property"])({
        type: String,
        readOnly: !0,
        json: {
          read: {
            source: "store.rootNode"
          }
        }
      })], E.prototype, "rootNode", void 0), Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_5__["property"])({
        readOnly: !0
      })], E.prototype, "attributeStorageInfo", void 0), Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_5__["property"])(D.fields)], E.prototype, "fields", void 0), Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_5__["property"])({
        readOnly: !0,
        dependsOn: ["fields"]
      })], E.prototype, "fieldsIndex", null), Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_5__["property"])({
        readOnly: !0,
        type: _FeatureLayer_js__WEBPACK_IMPORTED_MODULE_36__["default"]
      })], E.prototype, "associatedLayer", void 0), Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_reader_js__WEBPACK_IMPORTED_MODULE_8__["reader"])("service", "associatedLayer", ["associatedLayerID"])], E.prototype, "readAssociatedLayer", null), Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_5__["property"])(D.outFields)], E.prototype, "outFields", void 0), Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_5__["property"])({
        type: String,
        dependsOn: ["fields"],
        readOnly: !0
      })], E.prototype, "objectIdField", null), Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_5__["property"])({
        readOnly: !0,
        type: String,
        json: {
          read: !1
        },
        dependsOn: ["associatedLayer.displayField"]
      })], E.prototype, "displayField", null), Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_5__["property"])({
        readOnly: !0,
        type: _geometry_Extent_js__WEBPACK_IMPORTED_MODULE_16__["default"],
        aliasOf: "layer.fullExtent"
      })], E.prototype, "fullExtent", void 0), Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_5__["property"])({
        readOnly: !0,
        type: _geometry_SpatialReference_js__WEBPACK_IMPORTED_MODULE_15__["default"],
        aliasOf: "layer.spatialReference"
      })], E.prototype, "spatialReference", void 0), Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_5__["property"])({
        readOnly: !0,
        aliasOf: "layer.version"
      })], E.prototype, "version", void 0), Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_5__["property"])({
        readOnly: !0,
        type: _symbols_support_ElevationInfo_js__WEBPACK_IMPORTED_MODULE_21__["default"],
        aliasOf: "layer.elevationInfo"
      })], E.prototype, "elevationInfo", void 0), Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_5__["property"])({
        readOnly: !0,
        type: Number,
        aliasOf: "layer.minScale"
      })], E.prototype, "minScale", void 0), Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_5__["property"])({
        readOnly: !0,
        type: Number,
        aliasOf: "layer.maxScale"
      })], E.prototype, "maxScale", void 0), Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_5__["property"])({
        type: ["hide", "show"],
        json: {
          write: !0
        }
      })], E.prototype, "listMode", void 0), Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_5__["property"])({
        types: _renderers_support_types_js__WEBPACK_IMPORTED_MODULE_30__["webSceneRendererTypes"],
        json: {
          origins: {
            service: {
              read: {
                source: "drawingInfo.renderer"
              }
            }
          },
          name: "layerDefinition.drawingInfo.renderer",
          write: !0
        },
        value: null
      })], E.prototype, "renderer", void 0), Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_5__["property"])({
        type: String,
        json: {
          origins: {
            service: {
              read: !1,
              write: !1
            }
          },
          read: {
            source: "layerDefinition.definitionExpression"
          },
          write: {
            target: "layerDefinition.definitionExpression"
          }
        }
      })], E.prototype, "definitionExpression", void 0), Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_5__["property"])(_support_commonProperties_js__WEBPACK_IMPORTED_MODULE_22__["popupEnabled"])], E.prototype, "popupEnabled", void 0), Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_5__["property"])({
        type: _PopupTemplate_js__WEBPACK_IMPORTED_MODULE_17__["default"],
        json: {
          read: {
            source: "popupInfo"
          },
          write: {
            target: "popupInfo"
          }
        }
      })], E.prototype, "popupTemplate", void 0), Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_5__["property"])({
        readOnly: !0,
        type: String,
        json: {
          origins: {
            service: {
              read: {
                source: "store.normalReferenceFrame"
              }
            }
          },
          read: !1
        }
      })], E.prototype, "normalReferenceFrame", void 0), Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_5__["property"])({
        readOnly: !0,
        json: {
          read: !1
        },
        dependsOn: ["fields", "title"]
      })], E.prototype, "defaultPopupTemplate", null), Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_5__["property"])({
        json: {
          write: !1
        }
      }), Object(_core_accessorSupport_decorators_enumeration_js__WEBPACK_IMPORTED_MODULE_7__["enumeration"])(new _core_jsonMap_js__WEBPACK_IMPORTED_MODULE_6__["JSONMap"]({
        "3DObject": "3d-object",
        Point: "point"
      }))], E.prototype, "layerType", void 0), Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_5__["property"])({
        dependsOn: ["layerType"]
      })], E.prototype, "geometryType", null), Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_5__["property"])({
        dependsOn: ["layerType"]
      })], E.prototype, "profile", null), Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_5__["property"])({
        readOnly: !0,
        json: {
          read: !1
        },
        dependsOn: ["associatedLayer.capabilities"]
      })], E.prototype, "capabilities", null), E = Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_subclass_js__WEBPACK_IMPORTED_MODULE_9__["subclass"])("esri.layers.buildingSublayers.BuildingComponentSublayer")], E);
      var Q = E;
      /* harmony default export */

      __webpack_exports__["default"] = Q;
      /***/
    },

    /***/
    "9MMG":
    /*!**************************************************************************************!*\
      !*** ./node_modules/@arcgis/core/layers/support/BuildingFilterAuthoringInfoBlock.js ***!
      \**************************************************************************************/

    /*! exports provided: default */

    /***/
    function MMG(module, __webpack_exports__, __webpack_require__) {
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


      var _BuildingFilterAuthoringInfoType_js__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
      /*! ./BuildingFilterAuthoringInfoType.js */
      "V6mo");
      /*
      All material copyright ESRI, All Rights Reserved, unless otherwise specified.
      See https://js.arcgis.com/4.18/esri/copyright.txt for details.
      */


      var _c;

      var l = _core_Collection_js__WEBPACK_IMPORTED_MODULE_11__["default"].ofType(_BuildingFilterAuthoringInfoType_js__WEBPACK_IMPORTED_MODULE_12__["default"]);

      var m = _c = /*#__PURE__*/function (_core_JSONSupport_js_) {
        _inherits(c, _core_JSONSupport_js_);

        var _super2 = _createSuper(c);

        function c() {
          _classCallCheck(this, c);

          return _super2.apply(this, arguments);
        }

        _createClass(c, [{
          key: "clone",
          value: function clone() {
            return new _c({
              filterTypes: Object(_core_lang_js__WEBPACK_IMPORTED_MODULE_2__["clone"])(this.filterTypes)
            });
          }
        }]);

        return c;
      }(_core_JSONSupport_js__WEBPACK_IMPORTED_MODULE_10__["JSONSupport"]);

      Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_5__["property"])({
        type: l,
        json: {
          write: !0
        }
      })], m.prototype, "filterTypes", void 0), m = _c = Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_subclass_js__WEBPACK_IMPORTED_MODULE_6__["subclass"])("esri.layers.support.BuildingFilterAuthoringInfoBlock")], m);
      var u = m;
      /* harmony default export */

      __webpack_exports__["default"] = u;
      /***/
    },

    /***/
    "BG+7":
    /*!****************************************************************************!*\
      !*** ./node_modules/@arcgis/core/layers/support/BuildingFilterModeXRay.js ***!
      \****************************************************************************/

    /*! exports provided: default */

    /***/
    function BG7(module, __webpack_exports__, __webpack_require__) {
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


      var _BuildingFilterMode_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! ./BuildingFilterMode.js */
      "fbJh");
      /*
      All material copyright ESRI, All Rights Reserved, unless otherwise specified.
      See https://js.arcgis.com/4.18/esri/copyright.txt for details.
      */


      var _t;

      var p = _t = /*#__PURE__*/function (_BuildingFilterMode_j) {
        _inherits(t, _BuildingFilterMode_j);

        var _super3 = _createSuper(t);

        function t() {
          var _this6;

          _classCallCheck(this, t);

          _this6 = _super3.apply(this, arguments), _this6.type = "x-ray";
          return _this6;
        }

        _createClass(t, [{
          key: "clone",
          value: function clone() {
            return new _t();
          }
        }]);

        return t;
      }(_BuildingFilterMode_js__WEBPACK_IMPORTED_MODULE_9__["default"]);

      Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_4__["property"])({
        type: ["x-ray"],
        readOnly: !0,
        json: {
          write: !0
        }
      })], p.prototype, "type", void 0), p = _t = Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_subclass_js__WEBPACK_IMPORTED_MODULE_5__["subclass"])("esri.layers.support.BuildingFilterModeXRay")], p);
      var i = p;
      /* harmony default export */

      __webpack_exports__["default"] = i;
      /***/
    },

    /***/
    "LQ9q":
    /*!*******************************************************************************!*\
      !*** ./node_modules/@arcgis/core/layers/support/BuildingSummaryStatistics.js ***!
      \*******************************************************************************/

    /*! exports provided: default */

    /***/
    function LQ9q(module, __webpack_exports__, __webpack_require__) {
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


      var _core_promiseUtils_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
      /*! ../../core/promiseUtils.js */
      "9MzC");
      /* harmony import */


      var _core_JSONSupport_js__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
      /*! ../../core/JSONSupport.js */
      "ag7Y");
      /* harmony import */


      var _request_js__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
      /*! ../../request.js */
      "Lqtk");
      /* harmony import */


      var _core_Promise_js__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
      /*! ../../core/Promise.js */
      "+rMe");
      /* harmony import */


      var _core_Loadable_js__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(
      /*! ../../core/Loadable.js */
      "bV/r");
      /*
      All material copyright ESRI, All Rights Reserved, unless otherwise specified.
      See https://js.arcgis.com/4.18/esri/copyright.txt for details.
      */


      var n = _core_Logger_js__WEBPACK_IMPORTED_MODULE_3__["default"].getLogger("esri.layers.support.BuildingSummaryStatistics");

      var m = /*#__PURE__*/function (_core_JSONSupport_js_2) {
        _inherits(m, _core_JSONSupport_js_2);

        var _super4 = _createSuper(m);

        function m() {
          var _this7;

          _classCallCheck(this, m);

          _this7 = _super4.apply(this, arguments), _this7.fieldName = null, _this7.modelName = null, _this7.label = null, _this7.min = null, _this7.max = null, _this7.mostFrequentValues = null, _this7.subLayerIds = null;
          return _this7;
        }

        return m;
      }(_core_JSONSupport_js__WEBPACK_IMPORTED_MODULE_11__["JSONSupport"]);

      Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_5__["property"])({
        type: String
      })], m.prototype, "fieldName", void 0), Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_5__["property"])({
        type: String
      })], m.prototype, "modelName", void 0), Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_5__["property"])({
        type: String
      })], m.prototype, "label", void 0), Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_5__["property"])({
        type: Number
      })], m.prototype, "min", void 0), Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_5__["property"])({
        type: Number
      })], m.prototype, "max", void 0), Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_5__["property"])({
        json: {
          read: function read(r) {
            return Array.isArray(r) && (r.every(function (r) {
              return "string" == typeof r;
            }) || r.every(function (r) {
              return "number" == typeof r;
            })) ? r.slice() : null;
          }
        }
      })], m.prototype, "mostFrequentValues", void 0), Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_5__["property"])({
        type: [Number]
      })], m.prototype, "subLayerIds", void 0), m = Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_subclass_js__WEBPACK_IMPORTED_MODULE_6__["subclass"])("esri.layers.support.BuildingFieldStatistics")], m);

      var c = /*#__PURE__*/function (_core_Loadable_js__WE2) {
        _inherits(c, _core_Loadable_js__WE2);

        var _super5 = _createSuper(c);

        function c() {
          var _this8;

          _classCallCheck(this, c);

          _this8 = _super5.apply(this, arguments), _this8.url = null;
          return _this8;
        }

        _createClass(c, [{
          key: "fields",
          get: function get() {
            return this.loaded || "loading" === this.loadStatus ? this._get("fields") : (n.error("building summary statistics are not loaded"), null);
          }
        }, {
          key: "load",
          value: function load(r) {
            var t = Object(_core_maybe_js__WEBPACK_IMPORTED_MODULE_2__["isSome"])(r) ? r.signal : null;
            return this.addResolvingPromise(this._fetchService(t)), Object(_core_promiseUtils_js__WEBPACK_IMPORTED_MODULE_10__["resolve"])(this);
          }
        }, {
          key: "_fetchService",
          value: function () {
            var _fetchService3 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee3(r) {
              var e;
              return regeneratorRuntime.wrap(function _callee3$(_context3) {
                while (1) {
                  switch (_context3.prev = _context3.next) {
                    case 0:
                      _context3.next = 2;
                      return Object(_request_js__WEBPACK_IMPORTED_MODULE_12__["default"])(this.url, {
                        query: {
                          f: "json"
                        },
                        responseType: "json",
                        signal: r
                      });

                    case 2:
                      e = _context3.sent.data;
                      this.read(e, {
                        origin: "service"
                      });

                    case 4:
                    case "end":
                      return _context3.stop();
                  }
                }
              }, _callee3, this);
            }));

            function _fetchService(_x2) {
              return _fetchService3.apply(this, arguments);
            }

            return _fetchService;
          }()
        }]);

        return c;
      }(_core_Loadable_js__WEBPACK_IMPORTED_MODULE_14__["default"].LoadableMixin(Object(_core_Promise_js__WEBPACK_IMPORTED_MODULE_13__["EsriPromiseMixin"])(_core_JSONSupport_js__WEBPACK_IMPORTED_MODULE_11__["JSONSupport"])));

      Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_5__["property"])({
        constructOnly: !0,
        type: String
      })], c.prototype, "url", void 0), Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_5__["property"])({
        readOnly: !0,
        type: [m],
        json: {
          read: {
            source: "summary"
          }
        }
      })], c.prototype, "fields", null), c = Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_subclass_js__WEBPACK_IMPORTED_MODULE_6__["subclass"])("esri.layers.support.BuildingSummaryStatistics")], c);
      var d = c;
      /* harmony default export */

      __webpack_exports__["default"] = d;
      /***/
    },

    /***/
    "Lk2K":
    /*!********************************************************************************!*\
      !*** ./node_modules/@arcgis/core/layers/buildingSublayers/BuildingSublayer.js ***!
      \********************************************************************************/

    /*! exports provided: default */

    /***/
    function Lk2K(module, __webpack_exports__, __webpack_require__) {
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


      var _core_accessorSupport_decorators_reader_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ../../core/accessorSupport/decorators/reader.js */
      "r88o");
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


      var _core_Identifiable_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
      /*! ../../core/Identifiable.js */
      "pdg3");
      /* harmony import */


      var _core_MultiOriginJSONSupport_js__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
      /*! ../../core/MultiOriginJSONSupport.js */
      "5pQd");
      /* harmony import */


      var _support_commonProperties_js__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
      /*! ../support/commonProperties.js */
      "IvSi");
      /*
      All material copyright ESRI, All Rights Reserved, unless otherwise specified.
      See https://js.arcgis.com/4.18/esri/copyright.txt for details.
      */


      var l = /*#__PURE__*/function (_Object) {
        _inherits(l, _Object);

        var _super6 = _createSuper(l);

        function l(r) {
          var _this9;

          _classCallCheck(this, l);

          _this9 = _super6.call(this, r), _this9.title = "", _this9.id = -1, _this9.modelName = null, _this9.isEmpty = null, _this9.visible = !0, _this9.opacity = 1;
          return _this9;
        }

        _createClass(l, [{
          key: "readTitle",
          value: function readTitle(r, o) {
            return "string" == typeof o.alias ? o.alias : "string" == typeof o.name ? o.name : "";
          }
        }, {
          key: "readIdOnlyOnce",
          value: function readIdOnlyOnce(r) {
            return -1 !== this.id ? this.id : "number" == typeof r ? r : void 0;
          }
        }]);

        return l;
      }(Object(_core_Identifiable_js__WEBPACK_IMPORTED_MODULE_10__["IdentifiableMixin"])(_core_MultiOriginJSONSupport_js__WEBPACK_IMPORTED_MODULE_11__["MultiOriginJSONSupport"]));

      Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_4__["property"])({
        type: String,
        json: {
          origins: {
            "web-scene": {
              write: !0
            },
            "portal-item": {
              write: !0
            }
          }
        }
      })], l.prototype, "title", void 0), Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_reader_js__WEBPACK_IMPORTED_MODULE_5__["reader"])("service", "title", ["alias", "name"])], l.prototype, "readTitle", null), Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_4__["property"])()], l.prototype, "layer", void 0), Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_4__["property"])({
        type: _core_accessorSupport_ensureType_js__WEBPACK_IMPORTED_MODULE_3__["Integer"],
        readOnly: !0,
        json: {
          read: !1,
          write: {
            ignoreOrigin: !0
          }
        }
      })], l.prototype, "id", void 0), Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_reader_js__WEBPACK_IMPORTED_MODULE_5__["reader"])("service", "id")], l.prototype, "readIdOnlyOnce", null), Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_4__["property"])(Object(_support_commonProperties_js__WEBPACK_IMPORTED_MODULE_12__["readOnlyService"])(String))], l.prototype, "modelName", void 0), Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_4__["property"])(Object(_support_commonProperties_js__WEBPACK_IMPORTED_MODULE_12__["readOnlyService"])(Boolean))], l.prototype, "isEmpty", void 0), Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_4__["property"])({
        type: Boolean,
        json: {
          name: "visibility",
          write: !0
        }
      })], l.prototype, "visible", void 0), Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_4__["property"])({
        type: Number,
        json: {
          write: !0
        }
      })], l.prototype, "opacity", void 0), l = Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_subclass_js__WEBPACK_IMPORTED_MODULE_6__["subclass"])("esri.layers.buildingSublayers.BuildingSublayer")], l);
      var n = l;
      /* harmony default export */

      __webpack_exports__["default"] = n;
      /***/
    },

    /***/
    "MAqE":
    /*!*****************************************************************************!*\
      !*** ./node_modules/@arcgis/core/layers/support/BuildingFilterModeSolid.js ***!
      \*****************************************************************************/

    /*! exports provided: default */

    /***/
    function MAqE(module, __webpack_exports__, __webpack_require__) {
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


      var _BuildingFilterMode_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! ./BuildingFilterMode.js */
      "fbJh");
      /*
      All material copyright ESRI, All Rights Reserved, unless otherwise specified.
      See https://js.arcgis.com/4.18/esri/copyright.txt for details.
      */


      var t;

      var p = t = /*#__PURE__*/function (_BuildingFilterMode_j2) {
        _inherits(_class, _BuildingFilterMode_j2);

        var _super7 = _createSuper(_class);

        function _class() {
          var _this10;

          _classCallCheck(this, _class);

          _this10 = _super7.apply(this, arguments), _this10.type = "solid";
          return _this10;
        }

        _createClass(_class, [{
          key: "clone",
          value: function clone() {
            return new t();
          }
        }]);

        return _class;
      }(_BuildingFilterMode_js__WEBPACK_IMPORTED_MODULE_9__["default"]);

      Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_4__["property"])({
        type: ["solid"],
        readOnly: !0,
        json: {
          write: !0
        }
      })], p.prototype, "type", void 0), p = t = Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_subclass_js__WEBPACK_IMPORTED_MODULE_5__["subclass"])("esri.layers.support.BuildingFilterModeSolid")], p);
      var i = p;
      /* harmony default export */

      __webpack_exports__["default"] = i;
      /***/
    },

    /***/
    "Qz9p":
    /*!*************************************************************************************!*\
      !*** ./node_modules/@arcgis/core/layers/buildingSublayers/BuildingGroupSublayer.js ***!
      \*************************************************************************************/

    /*! exports provided: default */

    /***/
    function Qz9p(module, __webpack_exports__, __webpack_require__) {
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


      var _core_Warning_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ../../core/Warning.js */
      "ACjl");
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


      var _core_Collection_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
      /*! ../../core/Collection.js */
      "LE9a");
      /* harmony import */


      var _core_loadAll_js__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
      /*! ../../core/loadAll.js */
      "GFPt");
      /* harmony import */


      var _BuildingSublayer_js__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
      /*! ./BuildingSublayer.js */
      "Lk2K");
      /* harmony import */


      var _BuildingComponentSublayer_js__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
      /*! ./BuildingComponentSublayer.js */
      "6BQF");
      /*
      All material copyright ESRI, All Rights Reserved, unless otherwise specified.
      See https://js.arcgis.com/4.18/esri/copyright.txt for details.
      */


      var _p;

      var a = {
        type: _core_Collection_js__WEBPACK_IMPORTED_MODULE_10__["default"],
        readOnly: !0,
        json: {
          origins: {
            service: {
              read: {
                source: "sublayers",
                reader: l
              }
            }
          },
          read: !1
        }
      };

      function l(r, e, s) {
        if (r && Array.isArray(r)) return new _core_Collection_js__WEBPACK_IMPORTED_MODULE_10__["default"](r.map(function (r) {
          var e = function (r) {
            return "group" === r.layerType ? c : _BuildingComponentSublayer_js__WEBPACK_IMPORTED_MODULE_13__["default"];
          }(r);

          if (e) {
            var o = new e();
            return o.read(r, s), o;
          }

          s && s.messages && r && s.messages.push(new _core_Warning_js__WEBPACK_IMPORTED_MODULE_5__["default"]("building-scene-layer:unsupported-sublayer-type", "Building scene sublayer of type '" + (r.type || "unknown") + "' are not supported", {
            definition: r,
            context: s
          }));
        }));
      }

      var c = _p = /*#__PURE__*/function (_BuildingSublayer_js_) {
        _inherits(p, _BuildingSublayer_js_);

        var _super8 = _createSuper(p);

        function p(r) {
          var _this11;

          _classCallCheck(this, p);

          _this11 = _super8.call(this, r), _this11.type = "building-group", _this11.listMode = "show", _this11.sublayers = null;
          return _this11;
        }

        _createClass(p, [{
          key: "loadAll",
          value: function loadAll() {
            var _this12 = this;

            return Object(_core_loadAll_js__WEBPACK_IMPORTED_MODULE_11__["loadAllChildren"])(this, function (r) {
              return _p.forEachSublayer(_this12.sublayers, function (e) {
                "building-group" !== e.type && r(e);
              });
            });
          }
        }]);

        return p;
      }(_BuildingSublayer_js__WEBPACK_IMPORTED_MODULE_12__["default"]);

      Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_4__["property"])({
        type: ["hide", "show", "hide-children"],
        json: {
          write: !0
        }
      })], c.prototype, "listMode", void 0), Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_4__["property"])(a)], c.prototype, "sublayers", void 0), c = _p = Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_subclass_js__WEBPACK_IMPORTED_MODULE_6__["subclass"])("esri.layers.buildingSublayers.BuildingGroupSublayer")], c), function (r) {
        r.sublayersProperty = a, r.readSublayers = l, r.forEachSublayer = function r(e, o) {
          e.forEach(function (e) {
            o(e), "building-group" === e.type && r(e.sublayers, o);
          });
        };
      }(c || (c = {}));
      var y = c;
      /* harmony default export */

      __webpack_exports__["default"] = y;
      /***/
    },

    /***/
    "RuRd":
    /*!*****************************************************************************************!*\
      !*** ./node_modules/@arcgis/core/layers/support/BuildingFilterAuthoringInfoCheckbox.js ***!
      \*****************************************************************************************/

    /*! exports provided: default */

    /***/
    function RuRd(module, __webpack_exports__, __webpack_require__) {
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


      var _core_Collection_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
      /*! ../../core/Collection.js */
      "LE9a");
      /* harmony import */


      var _BuildingFilterAuthoringInfo_js__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
      /*! ./BuildingFilterAuthoringInfo.js */
      "dWXJ");
      /* harmony import */


      var _BuildingFilterAuthoringInfoBlock_js__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
      /*! ./BuildingFilterAuthoringInfoBlock.js */
      "9MMG");
      /*
      All material copyright ESRI, All Rights Reserved, unless otherwise specified.
      See https://js.arcgis.com/4.18/esri/copyright.txt for details.
      */


      var c;

      var l = _core_Collection_js__WEBPACK_IMPORTED_MODULE_10__["default"].ofType(_BuildingFilterAuthoringInfoBlock_js__WEBPACK_IMPORTED_MODULE_12__["default"]);

      var n = c = /*#__PURE__*/function (_BuildingFilterAuthor) {
        _inherits(_class2, _BuildingFilterAuthor);

        var _super9 = _createSuper(_class2);

        function _class2() {
          var _this13;

          _classCallCheck(this, _class2);

          _this13 = _super9.apply(this, arguments), _this13.type = "checkbox";
          return _this13;
        }

        _createClass(_class2, [{
          key: "clone",
          value: function clone() {
            return new c({
              filterBlocks: Object(_core_lang_js__WEBPACK_IMPORTED_MODULE_2__["clone"])(this.filterBlocks)
            });
          }
        }]);

        return _class2;
      }(_BuildingFilterAuthoringInfo_js__WEBPACK_IMPORTED_MODULE_11__["default"]);

      Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_5__["property"])({
        type: ["checkbox"]
      })], n.prototype, "type", void 0), Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_5__["property"])({
        type: l,
        json: {
          write: !0
        }
      })], n.prototype, "filterBlocks", void 0), n = c = Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_subclass_js__WEBPACK_IMPORTED_MODULE_6__["subclass"])("esri.layers.support.BuildingFilterAuthoringInfoCheckbox")], n);
      var u = n;
      /* harmony default export */

      __webpack_exports__["default"] = u;
      /***/
    },

    /***/
    "TWTt":
    /*!****************************************************************!*\
      !*** ./node_modules/@arcgis/core/layers/BuildingSceneLayer.js ***!
      \****************************************************************/

    /*! exports provided: default */

    /***/
    function TWTt(module, __webpack_exports__, __webpack_require__) {
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


      var _portal_support_resourceExtension_js__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
      /*! ../portal/support/resourceExtension.js */
      "9AIY");
      /* harmony import */


      var _core_promiseUtils_js__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
      /*! ../core/promiseUtils.js */
      "9MzC");
      /* harmony import */


      var _geometry_SpatialReference_js__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(
      /*! ../geometry/SpatialReference.js */
      "WZb1");
      /* harmony import */


      var _geometry_Extent_js__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(
      /*! ../geometry/Extent.js */
      "OvF4");
      /* harmony import */


      var _core_Collection_js__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(
      /*! ../core/Collection.js */
      "LE9a");
      /* harmony import */


      var _core_loadAll_js__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(
      /*! ../core/loadAll.js */
      "GFPt");
      /* harmony import */


      var _core_CollectionFlattener_js__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(
      /*! ../core/CollectionFlattener.js */
      "TRCY");
      /* harmony import */


      var _Layer_js__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(
      /*! ./Layer.js */
      "pqNC");
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


      var _mixins_PortalLayer_js__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(
      /*! ./mixins/PortalLayer.js */
      "DbUH");
      /* harmony import */


      var _mixins_ScaleRangeLayer_js__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(
      /*! ./mixins/ScaleRangeLayer.js */
      "WmKv");
      /* harmony import */


      var _buildingSublayers_BuildingComponentSublayer_js__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(
      /*! ./buildingSublayers/BuildingComponentSublayer.js */
      "6BQF");
      /* harmony import */


      var _buildingSublayers_BuildingGroupSublayer_js__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(
      /*! ./buildingSublayers/BuildingGroupSublayer.js */
      "Qz9p");
      /* harmony import */


      var _mixins_SceneService_js__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(
      /*! ./mixins/SceneService.js */
      "lq5k");
      /* harmony import */


      var _support_BuildingFilter_js__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(
      /*! ./support/BuildingFilter.js */
      "drKW");
      /* harmony import */


      var _support_BuildingSummaryStatistics_js__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(
      /*! ./support/BuildingSummaryStatistics.js */
      "LQ9q");
      /* harmony import */


      var _support_FetchAssociatedFeatureLayer_js__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(
      /*! ./support/FetchAssociatedFeatureLayer.js */
      "mYC1");
      /*
      All material copyright ESRI, All Rights Reserved, unless otherwise specified.
      See https://js.arcgis.com/4.18/esri/copyright.txt for details.
      */


      var F = _core_Logger_js__WEBPACK_IMPORTED_MODULE_4__["default"].getLogger("esri.layers.BuildingSceneLayer"),
          B = _core_Collection_js__WEBPACK_IMPORTED_MODULE_16__["default"].ofType(_support_BuildingFilter_js__WEBPACK_IMPORTED_MODULE_29__["default"]),
          _ = Object(_core_lang_js__WEBPACK_IMPORTED_MODULE_2__["clone"])(_buildingSublayers_BuildingGroupSublayer_js__WEBPACK_IMPORTED_MODULE_27__["default"].sublayersProperty);

      _.json.origins["web-scene"] = {
        type: [_buildingSublayers_BuildingComponentSublayer_js__WEBPACK_IMPORTED_MODULE_26__["default"]],
        write: {
          enabled: !0,
          overridePolicy: function overridePolicy() {
            return {
              enabled: !1
            };
          }
        }
      }, _.json.origins["portal-item"] = {
        type: [_buildingSublayers_BuildingComponentSublayer_js__WEBPACK_IMPORTED_MODULE_26__["default"]],
        write: {
          enabled: !0,
          overridePolicy: function overridePolicy() {
            return {
              enabled: !1
            };
          }
        }
      };

      var A = /*#__PURE__*/function (_Object2) {
        _inherits(A, _Object2);

        var _super10 = _createSuper(A);

        function A(e) {
          var _this14;

          _classCallCheck(this, A);

          _this14 = _super10.call(this, e), _this14.operationalLayerType = "BuildingSceneLayer", _this14.allSublayers = new _core_CollectionFlattener_js__WEBPACK_IMPORTED_MODULE_18__["default"]({
            root: _assertThisInitialized(_this14),
            rootCollectionNames: ["sublayers"],
            getChildrenFunction: function getChildrenFunction(e) {
              return "building-group" === e.type ? e.sublayers : null;
            }
          }), _this14.sublayers = null, _this14.sublayerOverrides = null, _this14.filters = new B(), _this14.activeFilterId = null, _this14.summaryStatistics = null, _this14.outFields = null, _this14.type = "building-scene";
          return _this14;
        }

        _createClass(A, [{
          key: "normalizeCtorArgs",
          value: function normalizeCtorArgs(e) {
            return "string" == typeof e ? {
              url: e
            } : e;
          }
        }, {
          key: "destroy",
          value: function destroy() {
            this.allSublayers.destroy();
          }
        }, {
          key: "readSublayers",
          value: function readSublayers(e, r, t) {
            var _this15 = this;

            var s = _buildingSublayers_BuildingGroupSublayer_js__WEBPACK_IMPORTED_MODULE_27__["default"].readSublayers(e, r, t);

            return _buildingSublayers_BuildingGroupSublayer_js__WEBPACK_IMPORTED_MODULE_27__["default"].forEachSublayer(s, function (e) {
              return e.layer = _this15;
            }), this.sublayerOverrides && (this.applySublayerOverrides(s, this.sublayerOverrides), this.sublayerOverrides = null), s;
          }
        }, {
          key: "applySublayerOverrides",
          value: function applySublayerOverrides(e, _ref) {
            var r = _ref.overrides,
                t = _ref.context;

            _buildingSublayers_BuildingGroupSublayer_js__WEBPACK_IMPORTED_MODULE_27__["default"].forEachSublayer(e, function (e) {
              return e.read(r.get(e.id), t);
            });
          }
        }, {
          key: "readSublayerOverrides",
          value: function readSublayerOverrides(e, r) {
            var t = new Map();

            var _iterator3 = _createForOfIteratorHelper(e),
                _step3;

            try {
              for (_iterator3.s(); !(_step3 = _iterator3.n()).done;) {
                var s = _step3.value;
                null != s && "object" == typeof s && "number" == typeof s.id ? t.set(s.id, s) : r.messages.push(new _core_Error_js__WEBPACK_IMPORTED_MODULE_9__["default"]("building-scene-layer:invalid-sublayer-override", "Invalid value for sublayer override. Not an object or no id specified.", {
                  value: s
                }));
              }
            } catch (err) {
              _iterator3.e(err);
            } finally {
              _iterator3.f();
            }

            return {
              overrides: t,
              context: r
            };
          }
        }, {
          key: "writeSublayerOverrides",
          value: function writeSublayerOverrides(e, r, t) {
            var s = [];
            _buildingSublayers_BuildingGroupSublayer_js__WEBPACK_IMPORTED_MODULE_27__["default"].forEachSublayer(this.sublayers, function (e) {
              var r = e.write({}, t);
              Object.keys(r).length > 1 && s.push(r);
            }), s.length > 0 && (r.sublayers = s);
          }
        }, {
          key: "writeUnappliedOverrides",
          value: function writeUnappliedOverrides(e, t) {
            t.sublayers = [], e.overrides.forEach(function (e) {
              t.sublayers.push(Object(_core_lang_js__WEBPACK_IMPORTED_MODULE_2__["clone"])(e));
            });
          }
        }, {
          key: "write",
          value: function write(e, r) {
            return e = _get(_getPrototypeOf(A.prototype), "write", this).call(this, e, r), !r || "web-scene" !== r.origin && "portal-item" !== r.origin || (this.sublayers ? this.writeSublayerOverrides(this.sublayers, e, r) : this.sublayerOverrides && this.writeUnappliedOverrides(this.sublayerOverrides, e)), e;
          }
        }, {
          key: "read",
          value: function read(e, r) {
            if (_get(_getPrototypeOf(A.prototype), "read", this).call(this, e, r), r && ("web-scene" === r.origin || "portal-item" === r.origin) && null != e && Array.isArray(e.sublayers)) {
              var _t2 = this.readSublayerOverrides(e.sublayers, r);

              this.sublayers ? this.applySublayerOverrides(this.sublayers, _t2) : this.sublayerOverrides = _t2;
            }
          }
        }, {
          key: "readSummaryStatistics",
          value: function readSummaryStatistics(e, r) {
            if ("string" == typeof r.statisticsHRef) {
              var _e = Object(_core_urlUtils_js__WEBPACK_IMPORTED_MODULE_10__["join"])(this.parsedUrl.path, r.statisticsHRef);

              return new _support_BuildingSummaryStatistics_js__WEBPACK_IMPORTED_MODULE_30__["default"]({
                url: _e
              });
            }

            return null;
          }
        }, {
          key: "elevationInfo",
          set: function set(e) {
            this._set("elevationInfo", e), this._validateElevationInfo();
          }
        }, {
          key: "load",
          value: function load(e) {
            var _this16 = this;

            var r = Object(_core_maybe_js__WEBPACK_IMPORTED_MODULE_3__["isSome"])(e) ? e.signal : null,
                s = this.loadFromPortal({
              supportedTypes: ["Scene Service"]
            }, e)["catch"](function () {}).then(function () {
              return _this16._fetchService(r);
            }).then(function () {
              return _this16._fetchAssociatedFeatureService(r);
            });
            return this.addResolvingPromise(s), Object(_core_promiseUtils_js__WEBPACK_IMPORTED_MODULE_13__["resolve"])(this);
          }
        }, {
          key: "loadAll",
          value: function loadAll() {
            var _this17 = this;

            return Object(_core_loadAll_js__WEBPACK_IMPORTED_MODULE_17__["loadAll"])(this, function (e) {
              _buildingSublayers_BuildingGroupSublayer_js__WEBPACK_IMPORTED_MODULE_27__["default"].forEachSublayer(_this17.sublayers, function (r) {
                "building-group" !== r.type && e(r);
              }), _this17.summaryStatistics && e(_this17.summaryStatistics);
            });
          }
        }, {
          key: "saveAs",
          value: function () {
            var _saveAs = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee4(e, r) {
              var _this18 = this;

              return regeneratorRuntime.wrap(function _callee4$(_context4) {
                while (1) {
                  switch (_context4.prev = _context4.next) {
                    case 0:
                      return _context4.abrupt("return", this._debouncedSaveOperations(1, _objectSpread(_objectSpread({}, r), {}, {
                        getTypeKeywords: function getTypeKeywords() {
                          return _this18._getTypeKeywords();
                        },
                        portalItemLayerType: "building-scene"
                      }), e));

                    case 1:
                    case "end":
                      return _context4.stop();
                  }
                }
              }, _callee4, this);
            }));

            function saveAs(_x3, _x4) {
              return _saveAs.apply(this, arguments);
            }

            return saveAs;
          }()
        }, {
          key: "save",
          value: function () {
            var _save = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee5() {
              var _this19 = this;

              var e;
              return regeneratorRuntime.wrap(function _callee5$(_context5) {
                while (1) {
                  switch (_context5.prev = _context5.next) {
                    case 0:
                      e = {
                        getTypeKeywords: function getTypeKeywords() {
                          return _this19._getTypeKeywords();
                        },
                        portalItemLayerType: "building-scene"
                      };
                      return _context5.abrupt("return", this._debouncedSaveOperations(0, e));

                    case 2:
                    case "end":
                      return _context5.stop();
                  }
                }
              }, _callee5, this);
            }));

            function save() {
              return _save.apply(this, arguments);
            }

            return save;
          }()
        }, {
          key: "validateLayer",
          value: function validateLayer(e) {
            if (!e.layerType || "Building" !== e.layerType) throw new _core_Error_js__WEBPACK_IMPORTED_MODULE_9__["default"]("buildingscenelayer:layer-type-not-supported", "BuildingSceneLayer does not support this layer type", {
              layerType: e.layerType
            });
          }
        }, {
          key: "_getTypeKeywords",
          value: function _getTypeKeywords() {
            return ["Building"];
          }
        }, {
          key: "_validateElevationInfo",
          value: function _validateElevationInfo() {
            var e = this.elevationInfo;
            e && ("absolute-height" !== e.mode && F.warn(".elevationInfo=", "Building scene layers only support absolute-height elevation mode"), e.featureExpressionInfo && "0" !== e.featureExpressionInfo.expression && F.warn(".elevationInfo=", "Building scene layers do not support featureExpressionInfo"));
          }
        }, {
          key: "_fetchAssociatedFeatureService",
          value: function () {
            var _fetchAssociatedFeatureService2 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee6(e) {
              var r;
              return regeneratorRuntime.wrap(function _callee6$(_context6) {
                while (1) {
                  switch (_context6.prev = _context6.next) {
                    case 0:
                      r = new _support_FetchAssociatedFeatureLayer_js__WEBPACK_IMPORTED_MODULE_31__["FetchAssociatedFeatureLayer"](this.parsedUrl, this.portalItem, e);
                      _context6.prev = 1;
                      _context6.next = 4;
                      return r.fetchPortalItem();

                    case 4:
                      this.associatedFeatureServiceItem = _context6.sent;
                      _context6.next = 10;
                      break;

                    case 7:
                      _context6.prev = 7;
                      _context6.t0 = _context6["catch"](1);
                      F.warn("Associated feature service item could not be loaded", _context6.t0);

                    case 10:
                    case "end":
                      return _context6.stop();
                  }
                }
              }, _callee6, this, [[1, 7]]);
            }));

            function _fetchAssociatedFeatureService(_x5) {
              return _fetchAssociatedFeatureService2.apply(this, arguments);
            }

            return _fetchAssociatedFeatureService;
          }()
        }]);

        return A;
      }(Object(_mixins_SceneService_js__WEBPACK_IMPORTED_MODULE_28__["SceneService"])(Object(_mixins_ArcGISService_js__WEBPACK_IMPORTED_MODULE_23__["ArcGISService"])(Object(_mixins_OperationalLayer_js__WEBPACK_IMPORTED_MODULE_22__["OperationalLayer"])(Object(_mixins_PortalLayer_js__WEBPACK_IMPORTED_MODULE_24__["PortalLayer"])(Object(_mixins_ScaleRangeLayer_js__WEBPACK_IMPORTED_MODULE_25__["ScaleRangeLayer"])(Object(_core_MultiOriginJSONSupport_js__WEBPACK_IMPORTED_MODULE_20__["MultiOriginJSONMixin"])(_Layer_js__WEBPACK_IMPORTED_MODULE_19__["default"])))))));

      Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_6__["property"])({
        type: ["BuildingSceneLayer"]
      })], A.prototype, "operationalLayerType", void 0), Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_6__["property"])({
        readOnly: !0
      })], A.prototype, "allSublayers", void 0), Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_6__["property"])(_)], A.prototype, "sublayers", void 0), Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_reader_js__WEBPACK_IMPORTED_MODULE_7__["reader"])("service", "sublayers")], A.prototype, "readSublayers", null), Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_6__["property"])({
        type: B,
        nonNullable: !0,
        json: {
          write: !0
        }
      })], A.prototype, "filters", void 0), Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_6__["property"])({
        type: String,
        json: {
          write: !0
        }
      })], A.prototype, "activeFilterId", void 0), Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_6__["property"])({
        readOnly: !0,
        type: _support_BuildingSummaryStatistics_js__WEBPACK_IMPORTED_MODULE_30__["default"]
      })], A.prototype, "summaryStatistics", void 0), Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_reader_js__WEBPACK_IMPORTED_MODULE_7__["reader"])("summaryStatistics", ["statisticsHRef"])], A.prototype, "readSummaryStatistics", null), Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_6__["property"])({
        type: [String],
        json: {
          read: !1
        }
      })], A.prototype, "outFields", void 0), Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_6__["property"])(Object(_support_commonProperties_js__WEBPACK_IMPORTED_MODULE_21__["readOnlyService"])(_geometry_Extent_js__WEBPACK_IMPORTED_MODULE_15__["default"]))], A.prototype, "fullExtent", void 0), Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_6__["property"])({
        type: ["show", "hide", "hide-children"]
      })], A.prototype, "listMode", void 0), Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_6__["property"])(Object(_support_commonProperties_js__WEBPACK_IMPORTED_MODULE_21__["readOnlyService"])(_geometry_SpatialReference_js__WEBPACK_IMPORTED_MODULE_14__["default"]))], A.prototype, "spatialReference", void 0), Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_6__["property"])(_support_commonProperties_js__WEBPACK_IMPORTED_MODULE_21__["elevationInfo"])], A.prototype, "elevationInfo", null), Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_6__["property"])({
        json: {
          read: !1
        },
        readOnly: !0
      })], A.prototype, "type", void 0), Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_6__["property"])()], A.prototype, "associatedFeatureServiceItem", void 0), A = Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_subclass_js__WEBPACK_IMPORTED_MODULE_8__["subclass"])("esri.layers.BuildingSceneLayer")], A);
      var P = A;
      /* harmony default export */

      __webpack_exports__["default"] = P;
      /***/
    },

    /***/
    "V6mo":
    /*!*************************************************************************************!*\
      !*** ./node_modules/@arcgis/core/layers/support/BuildingFilterAuthoringInfoType.js ***!
      \*************************************************************************************/

    /*! exports provided: default */

    /***/
    function V6mo(module, __webpack_exports__, __webpack_require__) {
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


      var p;

      var i = p = /*#__PURE__*/function (_core_JSONSupport_js_3) {
        _inherits(_class3, _core_JSONSupport_js_3);

        var _super11 = _createSuper(_class3);

        function _class3() {
          var _this20;

          _classCallCheck(this, _class3);

          _this20 = _super11.apply(this, arguments), _this20.filterType = null, _this20.filterValues = null;
          return _this20;
        }

        _createClass(_class3, [{
          key: "clone",
          value: function clone() {
            return new p({
              filterType: this.filterType,
              filterValues: Object(_core_lang_js__WEBPACK_IMPORTED_MODULE_2__["clone"])(this.filterValues)
            });
          }
        }]);

        return _class3;
      }(_core_JSONSupport_js__WEBPACK_IMPORTED_MODULE_10__["JSONSupport"]);

      Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_5__["property"])({
        type: String,
        json: {
          write: !0
        }
      })], i.prototype, "filterType", void 0), Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_5__["property"])({
        type: [String],
        json: {
          write: !0
        }
      })], i.prototype, "filterValues", void 0), i = p = Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_subclass_js__WEBPACK_IMPORTED_MODULE_6__["subclass"])("esri.layers.support.BuildingFilterAuthoringInfoType")], i);
      var l = i;
      /* harmony default export */

      __webpack_exports__["default"] = l;
      /***/
    },

    /***/
    "bBuK":
    /*!*************************************************************************!*\
      !*** ./node_modules/@arcgis/core/layers/support/BuildingFilterBlock.js ***!
      \*************************************************************************/

    /*! exports provided: default */

    /***/
    function bBuK(module, __webpack_exports__, __webpack_require__) {
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


      var _BuildingFilterMode_js__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
      /*! ./BuildingFilterMode.js */
      "fbJh");
      /* harmony import */


      var _BuildingFilterModeSolid_js__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
      /*! ./BuildingFilterModeSolid.js */
      "MAqE");
      /* harmony import */


      var _BuildingFilterModeWireFrame_js__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
      /*! ./BuildingFilterModeWireFrame.js */
      "n095");
      /* harmony import */


      var _BuildingFilterModeXRay_js__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(
      /*! ./BuildingFilterModeXRay.js */
      "BG+7");
      /*
      All material copyright ESRI, All Rights Reserved, unless otherwise specified.
      See https://js.arcgis.com/4.18/esri/copyright.txt for details.
      */


      var _a;

      var d = {
        nonNullable: !0,
        types: {
          key: "type",
          base: _BuildingFilterMode_js__WEBPACK_IMPORTED_MODULE_11__["default"],
          typeMap: {
            solid: _BuildingFilterModeSolid_js__WEBPACK_IMPORTED_MODULE_12__["default"],
            "wire-frame": _BuildingFilterModeWireFrame_js__WEBPACK_IMPORTED_MODULE_13__["default"],
            "x-ray": _BuildingFilterModeXRay_js__WEBPACK_IMPORTED_MODULE_14__["default"]
          }
        },
        json: {
          read: function read(r) {
            switch (r && r.type) {
              case "solid":
                return _BuildingFilterModeSolid_js__WEBPACK_IMPORTED_MODULE_12__["default"].fromJSON(r);

              case "wireFrame":
                return _BuildingFilterModeWireFrame_js__WEBPACK_IMPORTED_MODULE_13__["default"].fromJSON(r);

              case "x-ray":
                return _BuildingFilterModeXRay_js__WEBPACK_IMPORTED_MODULE_14__["default"].fromJSON(r);

              default:
                return;
            }
          },
          write: {
            enabled: !0,
            isRequired: !0
          }
        }
      };

      var u = _a = /*#__PURE__*/function (_core_JSONSupport_js_4) {
        _inherits(a, _core_JSONSupport_js_4);

        var _super12 = _createSuper(a);

        function a() {
          var _this21;

          _classCallCheck(this, a);

          _this21 = _super12.apply(this, arguments), _this21.filterExpression = null, _this21.filterMode = new _BuildingFilterModeSolid_js__WEBPACK_IMPORTED_MODULE_12__["default"](), _this21.title = "";
          return _this21;
        }

        _createClass(a, [{
          key: "clone",
          value: function clone() {
            return new _a({
              filterExpression: this.filterExpression,
              filterMode: Object(_core_lang_js__WEBPACK_IMPORTED_MODULE_2__["clone"])(this.filterMode),
              title: this.title
            });
          }
        }]);

        return a;
      }(_core_JSONSupport_js__WEBPACK_IMPORTED_MODULE_10__["JSONSupport"]);

      Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_5__["property"])({
        type: String,
        json: {
          write: {
            enabled: !0,
            isRequired: !0
          }
        }
      })], u.prototype, "filterExpression", void 0), Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_5__["property"])(d)], u.prototype, "filterMode", void 0), Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_5__["property"])({
        type: String,
        json: {
          write: {
            enabled: !0,
            isRequired: !0
          }
        }
      })], u.prototype, "title", void 0), u = _a = Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_subclass_js__WEBPACK_IMPORTED_MODULE_6__["subclass"])("esri.layers.support.BuildingFilterBlock")], u);
      var c = u;
      /* harmony default export */

      __webpack_exports__["default"] = c;
      /***/
    },

    /***/
    "dWXJ":
    /*!*********************************************************************************!*\
      !*** ./node_modules/@arcgis/core/layers/support/BuildingFilterAuthoringInfo.js ***!
      \*********************************************************************************/

    /*! exports provided: default */

    /***/
    function dWXJ(module, __webpack_exports__, __webpack_require__) {
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
      /*
      All material copyright ESRI, All Rights Reserved, unless otherwise specified.
      See https://js.arcgis.com/4.18/esri/copyright.txt for details.
      */


      var e = /*#__PURE__*/function (_core_JSONSupport_js_5) {
        _inherits(e, _core_JSONSupport_js_5);

        var _super13 = _createSuper(e);

        function e() {
          var _this22;

          _classCallCheck(this, e);

          _this22 = _super13.apply(this, arguments), _this22.type = null;
          return _this22;
        }

        return e;
      }(_core_JSONSupport_js__WEBPACK_IMPORTED_MODULE_9__["JSONSupport"]);

      Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_4__["property"])({
        type: String,
        readOnly: !0,
        json: {
          write: !0
        }
      })], e.prototype, "type", void 0), e = Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_subclass_js__WEBPACK_IMPORTED_MODULE_5__["subclass"])("esri.layers.support.BuildingFilterAuthoringInfo")], e);
      var p = e;
      /* harmony default export */

      __webpack_exports__["default"] = p;
      /***/
    },

    /***/
    "drKW":
    /*!********************************************************************!*\
      !*** ./node_modules/@arcgis/core/layers/support/BuildingFilter.js ***!
      \********************************************************************/

    /*! exports provided: default */

    /***/
    function drKW(module, __webpack_exports__, __webpack_require__) {
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


      var _BuildingFilterAuthoringInfo_js__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
      /*! ./BuildingFilterAuthoringInfo.js */
      "dWXJ");
      /* harmony import */


      var _BuildingFilterAuthoringInfoCheckbox_js__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
      /*! ./BuildingFilterAuthoringInfoCheckbox.js */
      "RuRd");
      /* harmony import */


      var _BuildingFilterBlock_js__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(
      /*! ./BuildingFilterBlock.js */
      "bBuK");
      /*
      All material copyright ESRI, All Rights Reserved, unless otherwise specified.
      See https://js.arcgis.com/4.18/esri/copyright.txt for details.
      */


      var _u;

      var d = _core_Collection_js__WEBPACK_IMPORTED_MODULE_11__["default"].ofType(_BuildingFilterBlock_js__WEBPACK_IMPORTED_MODULE_14__["default"]);

      var m = _u = /*#__PURE__*/function (_core_JSONSupport_js_6) {
        _inherits(u, _core_JSONSupport_js_6);

        var _super14 = _createSuper(u);

        function u() {
          var _this23;

          _classCallCheck(this, u);

          _this23 = _super14.apply(this, arguments), _this23.description = null, _this23.filterBlocks = null, _this23.id = Object(_core_uuid_js__WEBPACK_IMPORTED_MODULE_8__["generateUUID"])(), _this23.name = null;
          return _this23;
        }

        _createClass(u, [{
          key: "clone",
          value: function clone() {
            return new _u({
              description: this.description,
              filterBlocks: Object(_core_lang_js__WEBPACK_IMPORTED_MODULE_2__["clone"])(this.filterBlocks),
              id: this.id,
              name: this.name,
              filterAuthoringInfo: Object(_core_lang_js__WEBPACK_IMPORTED_MODULE_2__["clone"])(this.filterAuthoringInfo)
            });
          }
        }]);

        return u;
      }(_core_JSONSupport_js__WEBPACK_IMPORTED_MODULE_10__["JSONSupport"]);

      Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_5__["property"])({
        type: String,
        json: {
          write: !0
        }
      })], m.prototype, "description", void 0), Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_5__["property"])({
        type: d,
        json: {
          write: {
            enabled: !0,
            isRequired: !0
          }
        }
      })], m.prototype, "filterBlocks", void 0), Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_5__["property"])({
        types: {
          key: "type",
          base: _BuildingFilterAuthoringInfo_js__WEBPACK_IMPORTED_MODULE_12__["default"],
          typeMap: {
            checkbox: _BuildingFilterAuthoringInfoCheckbox_js__WEBPACK_IMPORTED_MODULE_13__["default"]
          }
        },
        json: {
          read: function read(r) {
            switch (r && r.type) {
              case "checkbox":
                return _BuildingFilterAuthoringInfoCheckbox_js__WEBPACK_IMPORTED_MODULE_13__["default"].fromJSON(r);

              default:
                return null;
            }
          },
          write: !0
        }
      })], m.prototype, "filterAuthoringInfo", void 0), Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_5__["property"])({
        type: String,
        constructOnly: !0,
        json: {
          write: {
            enabled: !0,
            isRequired: !0
          }
        }
      })], m.prototype, "id", void 0), Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_5__["property"])({
        type: String,
        json: {
          write: {
            enabled: !0,
            isRequired: !0
          }
        }
      })], m.prototype, "name", void 0), m = _u = Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_subclass_js__WEBPACK_IMPORTED_MODULE_6__["subclass"])("esri.layers.support.BuildingFilter")], m);
      var a = m;
      /* harmony default export */

      __webpack_exports__["default"] = a;
      /***/
    },

    /***/
    "fbJh":
    /*!************************************************************************!*\
      !*** ./node_modules/@arcgis/core/layers/support/BuildingFilterMode.js ***!
      \************************************************************************/

    /*! exports provided: default */

    /***/
    function fbJh(module, __webpack_exports__, __webpack_require__) {
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
      /*
      All material copyright ESRI, All Rights Reserved, unless otherwise specified.
      See https://js.arcgis.com/4.18/esri/copyright.txt for details.
      */


      var t = /*#__PURE__*/function (_core_JSONSupport_js_7) {
        _inherits(t, _core_JSONSupport_js_7);

        var _super15 = _createSuper(t);

        function t() {
          _classCallCheck(this, t);

          return _super15.apply(this, arguments);
        }

        return t;
      }(_core_JSONSupport_js__WEBPACK_IMPORTED_MODULE_9__["JSONSupport"]);

      Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_4__["property"])({
        readOnly: !0,
        json: {
          read: !1
        }
      })], t.prototype, "type", void 0), t = Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_subclass_js__WEBPACK_IMPORTED_MODULE_5__["subclass"])("esri.layers.support.BuildingFilterMode")], t);
      var p = t;
      /* harmony default export */

      __webpack_exports__["default"] = p;
      /***/
    },

    /***/
    "n095":
    /*!*********************************************************************************!*\
      !*** ./node_modules/@arcgis/core/layers/support/BuildingFilterModeWireFrame.js ***!
      \*********************************************************************************/

    /*! exports provided: default */

    /***/
    function n095(module, __webpack_exports__, __webpack_require__) {
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


      var _core_accessorSupport_decorators_enumeration_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ../../core/accessorSupport/decorators/enumeration.js */
      "RI0u");
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


      var _symbols_edges_utils_js__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
      /*! ../../symbols/edges/utils.js */
      "9quj");
      /* harmony import */


      var _BuildingFilterMode_js__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
      /*! ./BuildingFilterMode.js */
      "fbJh");
      /*
      All material copyright ESRI, All Rights Reserved, unless otherwise specified.
      See https://js.arcgis.com/4.18/esri/copyright.txt for details.
      */


      var c;

      var m = c = /*#__PURE__*/function (_BuildingFilterMode_j3) {
        _inherits(_class4, _BuildingFilterMode_j3);

        var _super16 = _createSuper(_class4);

        function _class4() {
          var _this24;

          _classCallCheck(this, _class4);

          _this24 = _super16.apply(this, arguments), _this24.type = "wire-frame", _this24.edges = null;
          return _this24;
        }

        _createClass(_class4, [{
          key: "clone",
          value: function clone() {
            return new c({
              edges: Object(_core_lang_js__WEBPACK_IMPORTED_MODULE_2__["clone"])(this.edges)
            });
          }
        }]);

        return _class4;
      }(_BuildingFilterMode_js__WEBPACK_IMPORTED_MODULE_12__["default"]);

      Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_enumeration_js__WEBPACK_IMPORTED_MODULE_6__["enumeration"])({
        wireFrame: "wire-frame"
      })], m.prototype, "type", void 0), Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_5__["property"])(_symbols_edges_utils_js__WEBPACK_IMPORTED_MODULE_11__["symbol3dEdgesProperty"])], m.prototype, "edges", void 0), m = c = Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_subclass_js__WEBPACK_IMPORTED_MODULE_7__["subclass"])("esri.layers.support.BuildingFilterModeWireFrame")], m);
      var a = m;
      /* harmony default export */

      __webpack_exports__["default"] = a;
      /***/
    }
  }]);
})();
//# sourceMappingURL=BuildingSceneLayer-js-es5.js.map