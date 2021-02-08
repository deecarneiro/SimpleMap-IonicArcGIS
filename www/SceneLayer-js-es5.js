(function () {
  function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

  function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

  function _createForOfIteratorHelper(o, allowArrayLike) { var it; if (typeof Symbol === "undefined" || o[Symbol.iterator] == null) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e2) { throw _e2; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = o[Symbol.iterator](); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e3) { didErr = true; err = _e3; }, f: function f() { try { if (!normalCompletion && it["return"] != null) it["return"](); } finally { if (didErr) throw err; } } }; }

  function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

  function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

  function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

  function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

  function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

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

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["SceneLayer-js"], {
    /***/
    "0yFX":
    /*!********************************************************!*\
      !*** ./node_modules/@arcgis/core/layers/SceneLayer.js ***!
      \********************************************************/

    /*! exports provided: default */

    /***/
    function yFX(module, __webpack_exports__, __webpack_require__) {
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


      var _core_accessorSupport_utils_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ../core/accessorSupport/utils.js */
      "TDcG");
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


      var _support_fieldUtils_js__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(
      /*! ./support/fieldUtils.js */
      "wdpY");
      /* harmony import */


      var _PopupTemplate_js__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(
      /*! ../PopupTemplate.js */
      "SFah");
      /* harmony import */


      var _request_js__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(
      /*! ../request.js */
      "Lqtk");
      /* harmony import */


      var _Layer_js__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(
      /*! ./Layer.js */
      "pqNC");
      /* harmony import */


      var _core_MultiOriginJSONSupport_js__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(
      /*! ../core/MultiOriginJSONSupport.js */
      "5pQd");
      /* harmony import */


      var _core_watchUtils_js__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(
      /*! ../core/watchUtils.js */
      "N5XI");
      /* harmony import */


      var _support_commonProperties_js__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(
      /*! ./support/commonProperties.js */
      "IvSi");
      /* harmony import */


      var _mixins_OperationalLayer_js__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(
      /*! ./mixins/OperationalLayer.js */
      "uRH/");
      /* harmony import */


      var _renderers_Renderer_js__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(
      /*! ../renderers/Renderer.js */
      "ZnuT");
      /* harmony import */


      var _renderers_ClassBreaksRenderer_js__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(
      /*! ../renderers/ClassBreaksRenderer.js */
      "tCO6");
      /* harmony import */


      var _renderers_UniqueValueRenderer_js__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(
      /*! ../renderers/UniqueValueRenderer.js */
      "2gBT");
      /* harmony import */


      var _renderers_DictionaryRenderer_js__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(
      /*! ../renderers/DictionaryRenderer.js */
      "JhoD");
      /* harmony import */


      var _renderers_DotDensityRenderer_js__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(
      /*! ../renderers/DotDensityRenderer.js */
      "tI3Y");
      /* harmony import */


      var _renderers_HeatmapRenderer_js__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(
      /*! ../renderers/HeatmapRenderer.js */
      "R4xK");
      /* harmony import */


      var _renderers_SimpleRenderer_js__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(
      /*! ../renderers/SimpleRenderer.js */
      "/1dM");
      /* harmony import */


      var _renderers_support_types_js__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(
      /*! ../renderers/support/types.js */
      "XNvV");
      /* harmony import */


      var _renderers_support_jsonUtils_js__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(
      /*! ../renderers/support/jsonUtils.js */
      "+Xal");
      /* harmony import */


      var _support_FieldsIndex_js__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(
      /*! ./support/FieldsIndex.js */
      "gLc9");
      /* harmony import */


      var _mixins_ArcGISService_js__WEBPACK_IMPORTED_MODULE_32__ = __webpack_require__(
      /*! ./mixins/ArcGISService.js */
      "PVlI");
      /* harmony import */


      var _mixins_PortalLayer_js__WEBPACK_IMPORTED_MODULE_33__ = __webpack_require__(
      /*! ./mixins/PortalLayer.js */
      "DbUH");
      /* harmony import */


      var _mixins_ScaleRangeLayer_js__WEBPACK_IMPORTED_MODULE_34__ = __webpack_require__(
      /*! ./mixins/ScaleRangeLayer.js */
      "WmKv");
      /* harmony import */


      var _support_FeatureReduction_js__WEBPACK_IMPORTED_MODULE_35__ = __webpack_require__(
      /*! ./support/FeatureReduction.js */
      "7MGP");
      /* harmony import */


      var _support_LabelClass_js__WEBPACK_IMPORTED_MODULE_36__ = __webpack_require__(
      /*! ./support/LabelClass.js */
      "wkZP");
      /* harmony import */


      var _support_FeatureReductionSelection_js__WEBPACK_IMPORTED_MODULE_37__ = __webpack_require__(
      /*! ./support/FeatureReductionSelection.js */
      "kbDD");
      /* harmony import */


      var _support_fieldProperties_js__WEBPACK_IMPORTED_MODULE_38__ = __webpack_require__(
      /*! ./support/fieldProperties.js */
      "L+uT");
      /* harmony import */


      var _support_labelingInfo_js__WEBPACK_IMPORTED_MODULE_39__ = __webpack_require__(
      /*! ./support/labelingInfo.js */
      "EOvV");
      /* harmony import */


      var _renderers_support_styleUtils_js__WEBPACK_IMPORTED_MODULE_40__ = __webpack_require__(
      /*! ../renderers/support/styleUtils.js */
      "YOx9");
      /* harmony import */


      var _support_popupUtils_js__WEBPACK_IMPORTED_MODULE_41__ = __webpack_require__(
      /*! ../support/popupUtils.js */
      "9Ruv");
      /* harmony import */


      var _tasks_support_Query_js__WEBPACK_IMPORTED_MODULE_42__ = __webpack_require__(
      /*! ../tasks/support/Query.js */
      "xk++");
      /* harmony import */


      var _support_capabilities_js__WEBPACK_IMPORTED_MODULE_43__ = __webpack_require__(
      /*! ./support/capabilities.js */
      "fqtG");
      /* harmony import */


      var _support_I3SLayerDefinitions_js__WEBPACK_IMPORTED_MODULE_44__ = __webpack_require__(
      /*! ./support/I3SLayerDefinitions.js */
      "XTTP");
      /* harmony import */


      var _mixins_SceneService_js__WEBPACK_IMPORTED_MODULE_45__ = __webpack_require__(
      /*! ./mixins/SceneService.js */
      "lq5k");
      /* harmony import */


      var _support_FetchAssociatedFeatureLayer_js__WEBPACK_IMPORTED_MODULE_46__ = __webpack_require__(
      /*! ./support/FetchAssociatedFeatureLayer.js */
      "mYC1");
      /* harmony import */


      var _support_RangeInfo_js__WEBPACK_IMPORTED_MODULE_47__ = __webpack_require__(
      /*! ./support/RangeInfo.js */
      "3Z6q");
      /*
      All material copyright ESRI, All Rights Reserved, unless otherwise specified.
      See https://js.arcgis.com/4.18/esri/copyright.txt for details.
      */


      var z = ["3DObject", "Point"],
          Z = _core_Logger_js__WEBPACK_IMPORTED_MODULE_3__["default"].getLogger("esri.layers.SceneLayer"),
          B = Object(_support_fieldProperties_js__WEBPACK_IMPORTED_MODULE_38__["defineFieldProperties"])();

      var J = /*#__PURE__*/function (_Object) {
        _inherits(J, _Object);

        var _super = _createSuper(J);

        function J() {
          var _this;

          _classCallCheck(this, J);

          for (var _len = arguments.length, e = new Array(_len), _key = 0; _key < _len; _key++) {
            e[_key] = arguments[_key];
          }

          _this = _super.call.apply(_super, [this].concat(e)), _this.featureReduction = null, _this.rangeInfos = null, _this.operationalLayerType = "ArcGISSceneServiceLayer", _this.type = "scene", _this.fields = null, _this.outFields = null, _this.nodePages = null, _this.materialDefinitions = null, _this.textureSetDefinitions = null, _this.geometryDefinitions = null, _this.serviceUpdateTimeStamp = null, _this.definitionExpression = null, _this.path = null, _this.labelsVisible = !0, _this.labelingInfo = null, _this.legendEnabled = !0, _this.cachedDrawingInfo = {
            color: !1
          }, _this.editingEnabled = !0, _this.popupEnabled = !0, _this.popupTemplate = null, _this.objectIdField = null, _this.globalIdField = null, _this._fieldUsageInfo = {}, _this.screenSizePerspectiveEnabled = !0;
          return _this;
        }

        _createClass(J, [{
          key: "normalizeCtorArgs",
          value: function normalizeCtorArgs(e, t) {
            return "string" == typeof e ? _objectSpread({
              url: e
            }, t) : e;
          }
        }, {
          key: "getField",
          value: function getField(e) {
            return this.fieldsIndex.get(e);
          }
        }, {
          key: "getFieldDomain",
          value: function getFieldDomain(e) {
            var t = this.getField(e);
            return t && t.domain ? t.domain : null;
          }
        }, {
          key: "fieldsIndex",
          get: function get() {
            return new _support_FieldsIndex_js__WEBPACK_IMPORTED_MODULE_31__["default"](this.fields);
          }
        }, {
          key: "readNodePages",
          value: function readNodePages(e, t, r) {
            return "Point" === t.layerType && (e = t.pointNodePages), null == e || "object" != typeof e ? null : _support_I3SLayerDefinitions_js__WEBPACK_IMPORTED_MODULE_44__["I3SNodePageDefinition"].fromJSON(e, r);
          }
        }, {
          key: "elevationInfo",
          set: function set(e) {
            this._set("elevationInfo", e), this.loaded && this._validateElevationInfo();
          }
        }, {
          key: "geometryType",
          get: function get() {
            return X[this.profile] || "mesh";
          }
        }, {
          key: "renderer",
          set: function set(e) {
            Object(_support_fieldUtils_js__WEBPACK_IMPORTED_MODULE_14__["fixRendererFields"])(e, this.fields), this._set("renderer", e);
          }
        }, {
          key: "readCachedDrawingInfo",
          value: function readCachedDrawingInfo(e) {
            return null != e && "object" == typeof e || (e = {}), null == e.color && (e.color = !1), e;
          }
        }, {
          key: "capabilities",
          get: function get() {
            var e = Object(_core_maybe_js__WEBPACK_IMPORTED_MODULE_2__["isSome"])(this.associatedLayer) && this.associatedLayer.capabilities ? this.associatedLayer.capabilities : _support_capabilities_js__WEBPACK_IMPORTED_MODULE_43__["zeroCapabilities"],
                r = e.query,
                _e$editing = e.editing,
                s = _e$editing.supportsGlobalId,
                o = _e$editing.supportsRollbackOnFailure,
                i = _e$editing.supportsUploadWithItemId,
                _e$data = e.data,
                a = _e$data.supportsZ,
                n = _e$data.supportsM,
                p = _e$data.isVersioned,
                _e$operations = e.operations,
                l = _e$operations.supportsEditing,
                d = _e$operations.supportsUpdate,
                y = e.operations.supportsChangeTracking;
            return {
              query: r,
              editing: {
                supportsGlobalId: s,
                supportsRollbackOnFailure: o,
                supportsGeometryUpdate: !1,
                supportsUploadWithItemId: i
              },
              data: {
                supportsZ: a,
                supportsM: n,
                isVersioned: p
              },
              operations: {
                supportsEditing: l && y,
                supportsAdd: !1,
                supportsDelete: !1,
                supportsUpdate: d && y
              }
            };
          }
        }, {
          key: "defaultPopupTemplate",
          get: function get() {
            return Object(_core_maybe_js__WEBPACK_IMPORTED_MODULE_2__["isSome"])(this.associatedLayer) || this.attributeStorageInfo ? this.createPopupTemplate() : null;
          }
        }, {
          key: "readObjectIdField",
          value: function readObjectIdField(e, t) {
            return !e && t.fields && t.fields.some(function (t) {
              return "esriFieldTypeOID" === t.type && (e = t.name), !!e;
            }), e || void 0;
          }
        }, {
          key: "readGlobalIdField",
          value: function readGlobalIdField(e, t) {
            return !e && t.fields && t.fields.some(function (t) {
              return "esriFieldTypeGlobalID" === t.type && (e = t.name), !!e;
            }), e || void 0;
          }
        }, {
          key: "displayField",
          get: function get() {
            return Object(_core_maybe_js__WEBPACK_IMPORTED_MODULE_2__["isSome"])(this.associatedLayer) ? this.associatedLayer.displayField : null;
          }
        }, {
          key: "readProfile",
          value: function readProfile(e, t) {
            var r = t.store.profile;
            return null != r && H[r] ? H[r] : (Z.error("Unknown or missing profile", {
              profile: r,
              layer: this
            }), "mesh-pyramids");
          }
        }, {
          key: "load",
          value: function load(e) {
            var _this2 = this;

            var r = Object(_core_maybe_js__WEBPACK_IMPORTED_MODULE_2__["isSome"])(e) ? e.signal : null,
                s = this.loadFromPortal({
              supportedTypes: ["Scene Service"]
            }, e).then(function () {
              return _this2._fetchService(r);
            }, function () {
              return _this2._fetchService(r);
            }).then(function () {
              return Object(_core_promiseUtils_js__WEBPACK_IMPORTED_MODULE_13__["all"])([_this2._verifyRootNodeAndUpdateExtent(_this2.nodePages, r), _this2._setAssociatedFeatureLayer(r)]);
            }).then(function () {
              return _this2._validateElevationInfo();
            }).then(function () {
              return _this2._applyAssociatedLayerOverrides();
            }).then(function () {
              return _this2._populateFieldUsageInfo();
            }).then(function () {
              return Object(_renderers_support_styleUtils_js__WEBPACK_IMPORTED_MODULE_40__["loadStyleRenderer"])(_this2, {
                origin: "service"
              }, r);
            }).then(function () {
              return Object(_support_fieldUtils_js__WEBPACK_IMPORTED_MODULE_14__["fixRendererFields"])(_this2.renderer, _this2.fields);
            });
            return this.addResolvingPromise(s), Object(_core_promiseUtils_js__WEBPACK_IMPORTED_MODULE_13__["resolve"])(this);
          }
        }, {
          key: "createQuery",
          value: function createQuery() {
            var e = new _tasks_support_Query_js__WEBPACK_IMPORTED_MODULE_42__["default"]();
            return "mesh" !== this.geometryType && (e.returnGeometry = !0, e.returnZ = !0), e.where = this.definitionExpression || "1=1", e.sqlFormat = "standard", e;
          }
        }, {
          key: "queryExtent",
          value: function queryExtent(e, t) {
            var _this3 = this;

            return this._getAssociatedLayerForQuery().then(function (r) {
              return r.queryExtent(e || _this3.createQuery(), t);
            });
          }
        }, {
          key: "queryFeatureCount",
          value: function queryFeatureCount(e, t) {
            var _this4 = this;

            return this._getAssociatedLayerForQuery().then(function (r) {
              return r.queryFeatureCount(e || _this4.createQuery(), t);
            });
          }
        }, {
          key: "queryFeatures",
          value: function queryFeatures(e, t) {
            var _this5 = this;

            return this._getAssociatedLayerForQuery().then(function (r) {
              return r.queryFeatures(e || _this5.createQuery(), t);
            }).then(function (e) {
              if (e && e.features) {
                var _iterator = _createForOfIteratorHelper(e.features),
                    _step;

                try {
                  for (_iterator.s(); !(_step = _iterator.n()).done;) {
                    var _t = _step.value;
                    _t.layer = _this5, _t.sourceLayer = _this5;
                  }
                } catch (err) {
                  _iterator.e(err);
                } finally {
                  _iterator.f();
                }
              }

              return e;
            });
          }
        }, {
          key: "queryObjectIds",
          value: function queryObjectIds(e, t) {
            var _this6 = this;

            return this._getAssociatedLayerForQuery().then(function (r) {
              return r.queryObjectIds(e || _this6.createQuery(), t);
            });
          }
        }, {
          key: "getFieldUsageInfo",
          value: function getFieldUsageInfo(e) {
            var t = {
              supportsLabelingInfo: !1,
              supportsRenderer: !1,
              supportsPopupTemplate: !1,
              supportsLayerQuery: !1
            };
            return this.loaded ? this._fieldUsageInfo[e] || t : (Z.error("#getFieldUsageInfo()", "Unavailable until layer is loaded"), t);
          }
        }, {
          key: "createPopupTemplate",
          value: function createPopupTemplate(e) {
            return Object(_support_popupUtils_js__WEBPACK_IMPORTED_MODULE_41__["createPopupTemplate"])(this, e);
          }
        }, {
          key: "_getAssociatedLayerForQuery",
          value: function _getAssociatedLayerForQuery() {
            var e = this.associatedLayer;
            return Object(_core_maybe_js__WEBPACK_IMPORTED_MODULE_2__["isSome"])(e) && e.loaded ? Object(_core_promiseUtils_js__WEBPACK_IMPORTED_MODULE_13__["resolve"])(e) : this._loadAssociatedLayerForQuery();
          }
        }, {
          key: "_loadAssociatedLayerForQuery",
          value: function () {
            var _loadAssociatedLayerForQuery2 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
              return regeneratorRuntime.wrap(function _callee$(_context) {
                while (1) {
                  switch (_context.prev = _context.next) {
                    case 0:
                      _context.next = 2;
                      return this.load();

                    case 2:
                      if (!Object(_core_maybe_js__WEBPACK_IMPORTED_MODULE_2__["isNone"])(this.associatedLayer)) {
                        _context.next = 4;
                        break;
                      }

                      throw new _core_Error_js__WEBPACK_IMPORTED_MODULE_9__["default"]("scenelayer:query-not-available", "SceneLayer queries are not available without an associated feature layer", {
                        layer: this
                      });

                    case 4:
                      _context.prev = 4;
                      _context.next = 7;
                      return this.associatedLayer.load();

                    case 7:
                      _context.next = 12;
                      break;

                    case 9:
                      _context.prev = 9;
                      _context.t0 = _context["catch"](4);
                      throw new _core_Error_js__WEBPACK_IMPORTED_MODULE_9__["default"]("scenelayer:query-not-available", "SceneLayer associated feature layer could not be loaded", {
                        layer: this,
                        error: _context.t0
                      });

                    case 12:
                      return _context.abrupt("return", this.associatedLayer);

                    case 13:
                    case "end":
                      return _context.stop();
                  }
                }
              }, _callee, this, [[4, 9]]);
            }));

            function _loadAssociatedLayerForQuery() {
              return _loadAssociatedLayerForQuery2.apply(this, arguments);
            }

            return _loadAssociatedLayerForQuery;
          }()
        }, {
          key: "hasCachedStatistics",
          value: function hasCachedStatistics(e) {
            return null != this.statisticsInfo && this.statisticsInfo.some(function (t) {
              return t.name === e;
            });
          }
        }, {
          key: "queryCachedStatistics",
          value: function () {
            var _queryCachedStatistics = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee2(e, t) {
              var r, _iterator2, _step2, _e, _r;

              return regeneratorRuntime.wrap(function _callee2$(_context2) {
                while (1) {
                  switch (_context2.prev = _context2.next) {
                    case 0:
                      _context2.next = 2;
                      return this.load(t);

                    case 2:
                      if (this.statisticsInfo) {
                        _context2.next = 4;
                        break;
                      }

                      throw new _core_Error_js__WEBPACK_IMPORTED_MODULE_9__["default"]("scenelayer:no-cached-statistics", "Cached statistics are not available for this layer");

                    case 4:
                      r = this.fieldsIndex.get(e);

                      if (r) {
                        _context2.next = 7;
                        break;
                      }

                      throw new _core_Error_js__WEBPACK_IMPORTED_MODULE_9__["default"]("scenelayer:field-unexisting", "Field '".concat(e, "' does not exist on the layer"));

                    case 7:
                      _iterator2 = _createForOfIteratorHelper(this.statisticsInfo);
                      _context2.prev = 8;

                      _iterator2.s();

                    case 10:
                      if ((_step2 = _iterator2.n()).done) {
                        _context2.next = 17;
                        break;
                      }

                      _e = _step2.value;

                      if (!(_e.name === r.name)) {
                        _context2.next = 15;
                        break;
                      }

                      _r = Object(_core_urlUtils_js__WEBPACK_IMPORTED_MODULE_10__["join"])(this.parsedUrl.path, _e.href);
                      return _context2.abrupt("return", Object(_request_js__WEBPACK_IMPORTED_MODULE_16__["default"])(_r, {
                        query: {
                          f: "json"
                        },
                        responseType: "json",
                        signal: t ? t.signal : null
                      }).then(function (e) {
                        return e.data;
                      }));

                    case 15:
                      _context2.next = 10;
                      break;

                    case 17:
                      _context2.next = 22;
                      break;

                    case 19:
                      _context2.prev = 19;
                      _context2.t0 = _context2["catch"](8);

                      _iterator2.e(_context2.t0);

                    case 22:
                      _context2.prev = 22;

                      _iterator2.f();

                      return _context2.finish(22);

                    case 25:
                      throw new _core_Error_js__WEBPACK_IMPORTED_MODULE_9__["default"]("scenelayer:no-cached-statistics", "Cached statistics for this attribute are not available");

                    case 26:
                    case "end":
                      return _context2.stop();
                  }
                }
              }, _callee2, this, [[8, 19, 22, 25]]);
            }));

            function queryCachedStatistics(_x, _x2) {
              return _queryCachedStatistics.apply(this, arguments);
            }

            return queryCachedStatistics;
          }()
        }, {
          key: "saveAs",
          value: function () {
            var _saveAs = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee3(e, t) {
              var _this7 = this;

              return regeneratorRuntime.wrap(function _callee3$(_context3) {
                while (1) {
                  switch (_context3.prev = _context3.next) {
                    case 0:
                      return _context3.abrupt("return", this._debouncedSaveOperations(1, _objectSpread(_objectSpread({}, t), {}, {
                        getTypeKeywords: function getTypeKeywords() {
                          return _this7._getTypeKeywords();
                        },
                        portalItemLayerType: "scene"
                      }), e));

                    case 1:
                    case "end":
                      return _context3.stop();
                  }
                }
              }, _callee3, this);
            }));

            function saveAs(_x3, _x4) {
              return _saveAs.apply(this, arguments);
            }

            return saveAs;
          }()
        }, {
          key: "save",
          value: function () {
            var _save = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee4() {
              var _this8 = this;

              var e;
              return regeneratorRuntime.wrap(function _callee4$(_context4) {
                while (1) {
                  switch (_context4.prev = _context4.next) {
                    case 0:
                      e = {
                        getTypeKeywords: function getTypeKeywords() {
                          return _this8._getTypeKeywords();
                        },
                        portalItemLayerType: "scene"
                      };
                      return _context4.abrupt("return", this._debouncedSaveOperations(0, e));

                    case 2:
                    case "end":
                      return _context4.stop();
                  }
                }
              }, _callee4, this);
            }));

            function save() {
              return _save.apply(this, arguments);
            }

            return save;
          }()
        }, {
          key: "applyEdits",
          value: function () {
            var _applyEdits = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee5(e, t) {
              var s;
              return regeneratorRuntime.wrap(function _callee5$(_context5) {
                while (1) {
                  switch (_context5.prev = _context5.next) {
                    case 0:
                      _context5.next = 2;
                      return __webpack_require__.e(
                      /*! import() | graphics-editingSupport-js */
                      "graphics-editingSupport-js").then(__webpack_require__.bind(null,
                      /*! ./graphics/editingSupport.js */
                      "CJn3"));

                    case 2:
                      s = _context5.sent;
                      _context5.next = 5;
                      return this.load();

                    case 5:
                      if (!Object(_core_maybe_js__WEBPACK_IMPORTED_MODULE_2__["isNone"])(this.associatedLayer)) {
                        _context5.next = 7;
                        break;
                      }

                      throw new _core_Error_js__WEBPACK_IMPORTED_MODULE_9__["default"]("".concat(this.type, "-layer:not-editable"), "Service is not editable");

                    case 7:
                      _context5.next = 9;
                      return this.associatedLayer.load();

                    case 9:
                      return _context5.abrupt("return", s.applyEdits(this, this.associatedLayer.source, e, t));

                    case 10:
                    case "end":
                      return _context5.stop();
                  }
                }
              }, _callee5, this);
            }));

            function applyEdits(_x5, _x6) {
              return _applyEdits.apply(this, arguments);
            }

            return applyEdits;
          }()
        }, {
          key: "on",
          value: function on(e, t) {
            return _get(_getPrototypeOf(J.prototype), "on", this).call(this, e, t);
          }
        }, {
          key: "validateLayer",
          value: function validateLayer(e) {
            if (e.layerType && -1 === z.indexOf(e.layerType)) throw new _core_Error_js__WEBPACK_IMPORTED_MODULE_9__["default"]("scenelayer:layer-type-not-supported", "SceneLayer does not support this layer type", {
              layerType: e.layerType
            });
            if (isNaN(this.version.major) || isNaN(this.version.minor)) throw new _core_Error_js__WEBPACK_IMPORTED_MODULE_9__["default"]("layer:service-version-not-supported", "Service version is not supported.", {
              serviceVersion: this.version.versionString,
              supportedVersions: "1.x"
            });
            if (this.version.major > 1) throw new _core_Error_js__WEBPACK_IMPORTED_MODULE_9__["default"]("layer:service-version-too-new", "Service version is too new.", {
              serviceVersion: this.version.versionString,
              supportedVersions: "1.x"
            });
            !function (e, t) {
              var r = !1,
                  s = !1;
              if (null == e) r = !0, s = !0;else {
                var o = t && t.isGeographic;

                switch (e) {
                  case "east-north-up":
                  case "earth-centered":
                    r = !0, s = o;
                    break;

                  case "vertex-reference-frame":
                    r = !0, s = !o;
                    break;

                  default:
                    r = !1;
                }
              }
              if (!r) throw new _core_Error_js__WEBPACK_IMPORTED_MODULE_9__["default"]("scenelayer:unsupported-normal-reference-frame", "Normal reference frame is invalid.");
              if (!s) throw new _core_Error_js__WEBPACK_IMPORTED_MODULE_9__["default"]("scenelayer:incompatible-normal-reference-frame", "Normal reference frame is incompatible with layer spatial reference.");
            }(this.normalReferenceFrame, this.spatialReference);
          }
        }, {
          key: "_getTypeKeywords",
          value: function _getTypeKeywords() {
            var e = [];
            if ("points" === this.profile) e.push("Point");else {
              if ("mesh-pyramids" !== this.profile) throw new _core_Error_js__WEBPACK_IMPORTED_MODULE_9__["default"]("scenelayer:unknown-profile", "SceneLayer:save() encountered an unknown SceneLayer profile: " + this.profile);
              e.push("3DObject");
            }
            return e;
          }
        }, {
          key: "_populateFieldUsageInfo",
          value: function _populateFieldUsageInfo() {
            var _this9 = this;

            if (this._fieldUsageInfo = {}, this.fields) {
              var _iterator3 = _createForOfIteratorHelper(this.fields),
                  _step3;

              try {
                var _loop = function _loop() {
                  var e = _step3.value;
                  var r = !(!_this9.attributeStorageInfo || !_this9.attributeStorageInfo.some(function (t) {
                    return t.name === e.name;
                  })),
                      s = !!(Object(_core_maybe_js__WEBPACK_IMPORTED_MODULE_2__["isSome"])(_this9.associatedLayer) && _this9.associatedLayer.fields && _this9.associatedLayer.fields.some(function (t) {
                    return t && e.name === t.name;
                  })),
                      o = {
                    supportsLabelingInfo: r,
                    supportsRenderer: r,
                    supportsPopupTemplate: r || s,
                    supportsLayerQuery: s
                  };
                  _this9._fieldUsageInfo[e.name] = o;
                };

                for (_iterator3.s(); !(_step3 = _iterator3.n()).done;) {
                  _loop();
                }
              } catch (err) {
                _iterator3.e(err);
              } finally {
                _iterator3.f();
              }
            }
          }
        }, {
          key: "_applyAssociatedLayerOverrides",
          value: function _applyAssociatedLayerOverrides() {
            this._applyAssociatedLayerFieldsOverrides(), this._applyAssociatedLayerPopupOverrides();
          }
        }, {
          key: "_applyAssociatedLayerFieldsOverrides",
          value: function _applyAssociatedLayerFieldsOverrides() {
            if (Object(_core_maybe_js__WEBPACK_IMPORTED_MODULE_2__["isNone"])(this.associatedLayer) || !this.associatedLayer.fields) return;
            var e = null;

            var _iterator4 = _createForOfIteratorHelper(this.associatedLayer.fields),
                _step4;

            try {
              for (_iterator4.s(); !(_step4 = _iterator4.n()).done;) {
                var t = _step4.value;
                var r = this.getField(t.name);
                r ? (!r.domain && t.domain && (r.domain = t.domain.clone()), r.editable = t.editable, r.nullable = t.nullable) : (e || (e = this.fields ? this.fields.slice() : []), e.push(t.clone()));
              }
            } catch (err) {
              _iterator4.e(err);
            } finally {
              _iterator4.f();
            }

            e && this._set("fields", e);
          }
        }, {
          key: "_applyAssociatedLayerPopupOverrides",
          value: function _applyAssociatedLayerPopupOverrides() {
            if (Object(_core_maybe_js__WEBPACK_IMPORTED_MODULE_2__["isNone"])(this.associatedLayer)) return;
            var e = ["popupTemplate", "popupEnabled"],
                t = Object(_core_accessorSupport_utils_js__WEBPACK_IMPORTED_MODULE_5__["getProperties"])(this);

            for (var r = 0; r < e.length; r++) {
              var s = e[r];
              this._buddyIsMoreImportant(s) && (t.setDefaultOrigin(this.associatedLayer.originOf(s)), t.set(s, this.associatedLayer[s]), t.setDefaultOrigin("user"));
            }
          }
        }, {
          key: "_setAssociatedFeatureLayer",
          value: function () {
            var _setAssociatedFeatureLayer2 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee6(e) {
              var t;
              return regeneratorRuntime.wrap(function _callee6$(_context6) {
                while (1) {
                  switch (_context6.prev = _context6.next) {
                    case 0:
                      if (!(-1 === ["mesh-pyramids", "points"].indexOf(this.profile))) {
                        _context6.next = 2;
                        break;
                      }

                      return _context6.abrupt("return");

                    case 2:
                      t = new _support_FetchAssociatedFeatureLayer_js__WEBPACK_IMPORTED_MODULE_46__["FetchAssociatedFeatureLayer"](this.parsedUrl, this.portalItem, e);
                      _context6.prev = 3;
                      _context6.next = 6;
                      return t.fetch();

                    case 6:
                      this.associatedLayer = _context6.sent;
                      _context6.next = 12;
                      break;

                    case 9:
                      _context6.prev = 9;
                      _context6.t0 = _context6["catch"](3);
                      Object(_core_promiseUtils_js__WEBPACK_IMPORTED_MODULE_13__["isAbortError"])(_context6.t0) || this._logWarningOnPopupEnabled();

                    case 12:
                    case "end":
                      return _context6.stop();
                  }
                }
              }, _callee6, this, [[3, 9]]);
            }));

            function _setAssociatedFeatureLayer(_x7) {
              return _setAssociatedFeatureLayer2.apply(this, arguments);
            }

            return _setAssociatedFeatureLayer;
          }()
        }, {
          key: "_logWarningOnPopupEnabled",
          value: function _logWarningOnPopupEnabled() {
            var _this10 = this;

            Object(_core_watchUtils_js__WEBPACK_IMPORTED_MODULE_19__["whenValidOnce"])(this, ["popupTemplate", "popupEnabled"], function () {
              return _this10.popupEnabled && null != _this10.popupTemplate;
            }).then(function () {
              return function () {
                var e = "this SceneLayer: ".concat(_this10.title);
                null == _this10.attributeStorageInfo ? Z.warn("Associated FeatureLayer could not be loaded and no binary attributes found. Popups will not work on ".concat(e)) : Z.info("Associated FeatureLayer could not be loaded. Falling back to binary attributes for Popups on ".concat(e));
              };
            });
          }
        }, {
          key: "_buddyIsMoreImportant",
          value: function _buddyIsMoreImportant(e) {
            if (Object(_core_maybe_js__WEBPACK_IMPORTED_MODULE_2__["isNone"])(this.associatedLayer)) return !1;
            var t = this.originIdOf(e),
                s = this.associatedLayer.originIdOf(e);
            return null != s && s <= 2 ? null == t || t < 2 : null != s && s <= 3 && (null == t || t < 3);
          }
        }, {
          key: "_validateElevationInfo",
          value: function _validateElevationInfo() {
            var e = this.elevationInfo;
            e && ("mesh-pyramids" === this.profile && "absolute-height" !== e.mode && Z.warn(".elevationInfo=", "Mesh scene layers only support absolute-height elevation mode"), e.featureExpressionInfo && "0" !== e.featureExpressionInfo.expression && Z.warn(".elevationInfo=", "Scene layers do not support featureExpressionInfo"));
          }
        }]);

        return J;
      }(Object(_mixins_SceneService_js__WEBPACK_IMPORTED_MODULE_45__["SceneService"])(Object(_mixins_ArcGISService_js__WEBPACK_IMPORTED_MODULE_32__["ArcGISService"])(Object(_mixins_OperationalLayer_js__WEBPACK_IMPORTED_MODULE_21__["OperationalLayer"])(Object(_mixins_PortalLayer_js__WEBPACK_IMPORTED_MODULE_33__["PortalLayer"])(Object(_mixins_ScaleRangeLayer_js__WEBPACK_IMPORTED_MODULE_34__["ScaleRangeLayer"])(Object(_core_MultiOriginJSONSupport_js__WEBPACK_IMPORTED_MODULE_18__["MultiOriginJSONMixin"])(_Layer_js__WEBPACK_IMPORTED_MODULE_17__["default"])))))));

      Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_6__["property"])({
        types: {
          key: "type",
          base: _support_FeatureReduction_js__WEBPACK_IMPORTED_MODULE_35__["default"],
          typeMap: {
            selection: _support_FeatureReductionSelection_js__WEBPACK_IMPORTED_MODULE_37__["default"]
          }
        },
        json: {
          origins: {
            "web-scene": {
              name: "layerDefinition.featureReduction",
              write: !0
            },
            "portal-item": {
              name: "layerDefinition.featureReduction",
              write: !0
            }
          }
        }
      })], J.prototype, "featureReduction", void 0), Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_6__["property"])({
        type: [_support_RangeInfo_js__WEBPACK_IMPORTED_MODULE_47__["default"]],
        json: {
          read: !1,
          origins: {
            "web-scene": {
              name: "layerDefinition.rangeInfos",
              write: !0
            },
            "portal-item": {
              name: "layerDefinition.rangeInfos",
              write: !0
            }
          }
        }
      })], J.prototype, "rangeInfos", void 0), Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_6__["property"])({
        json: {
          read: !1
        }
      })], J.prototype, "associatedLayer", void 0), Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_6__["property"])({
        type: ["show", "hide"]
      })], J.prototype, "listMode", void 0), Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_6__["property"])({
        type: ["ArcGISSceneServiceLayer"]
      })], J.prototype, "operationalLayerType", void 0), Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_6__["property"])({
        json: {
          read: !1
        },
        readOnly: !0
      })], J.prototype, "type", void 0), Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_6__["property"])(_objectSpread(_objectSpread({}, B.fields), {}, {
        readOnly: !0,
        json: {
          read: !1,
          origins: {
            service: {
              read: !0
            }
          }
        }
      }))], J.prototype, "fields", void 0), Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_6__["property"])({
        readOnly: !0,
        dependsOn: ["fields"]
      })], J.prototype, "fieldsIndex", null), Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_6__["property"])(B.outFields)], J.prototype, "outFields", void 0), Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_6__["property"])({
        type: _support_I3SLayerDefinitions_js__WEBPACK_IMPORTED_MODULE_44__["I3SNodePageDefinition"],
        readOnly: !0,
        json: {
          read: !1
        }
      })], J.prototype, "nodePages", void 0), Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_reader_js__WEBPACK_IMPORTED_MODULE_7__["reader"])("service", "nodePages", ["nodePages", "pointNodePages"])], J.prototype, "readNodePages", null), Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_6__["property"])({
        type: [_support_I3SLayerDefinitions_js__WEBPACK_IMPORTED_MODULE_44__["I3SMaterialDefinition"]],
        readOnly: !0
      })], J.prototype, "materialDefinitions", void 0), Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_6__["property"])({
        type: [_support_I3SLayerDefinitions_js__WEBPACK_IMPORTED_MODULE_44__["I3STextureSetDefinition"]],
        readOnly: !0
      })], J.prototype, "textureSetDefinitions", void 0), Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_6__["property"])({
        type: [_support_I3SLayerDefinitions_js__WEBPACK_IMPORTED_MODULE_44__["I3SGeometryDefinition"]],
        readOnly: !0
      })], J.prototype, "geometryDefinitions", void 0), Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_6__["property"])({
        readOnly: !0
      })], J.prototype, "serviceUpdateTimeStamp", void 0), Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_6__["property"])({
        readOnly: !0
      })], J.prototype, "attributeStorageInfo", void 0), Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_6__["property"])({
        readOnly: !0
      })], J.prototype, "statisticsInfo", void 0), Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_6__["property"])({
        type: String,
        json: {
          origins: {
            service: {
              read: !1,
              write: !1
            }
          },
          name: "layerDefinition.definitionExpression",
          write: !0
        }
      })], J.prototype, "definitionExpression", void 0), Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_6__["property"])({
        type: String,
        json: {
          origins: {
            "web-scene": {
              read: !0,
              write: !0
            }
          },
          read: !1
        }
      })], J.prototype, "path", void 0), Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_6__["property"])(_support_commonProperties_js__WEBPACK_IMPORTED_MODULE_20__["elevationInfo"])], J.prototype, "elevationInfo", null), Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_6__["property"])({
        type: String,
        dependsOn: ["profile"]
      })], J.prototype, "geometryType", null), Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_6__["property"])(_support_commonProperties_js__WEBPACK_IMPORTED_MODULE_20__["labelsVisible"])], J.prototype, "labelsVisible", void 0), Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_6__["property"])({
        type: [_support_LabelClass_js__WEBPACK_IMPORTED_MODULE_36__["default"]],
        json: {
          origins: {
            service: {
              name: "drawingInfo.labelingInfo",
              read: {
                reader: _support_labelingInfo_js__WEBPACK_IMPORTED_MODULE_39__["reader"]
              },
              write: !1
            }
          },
          name: "layerDefinition.drawingInfo.labelingInfo",
          read: {
            reader: _support_labelingInfo_js__WEBPACK_IMPORTED_MODULE_39__["reader"]
          },
          write: !0
        }
      })], J.prototype, "labelingInfo", void 0), Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_6__["property"])(_support_commonProperties_js__WEBPACK_IMPORTED_MODULE_20__["legendEnabled"])], J.prototype, "legendEnabled", void 0), Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_6__["property"])(_support_commonProperties_js__WEBPACK_IMPORTED_MODULE_20__["opacityDrawingInfo"])], J.prototype, "opacity", void 0), Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_6__["property"])({
        types: _renderers_support_types_js__WEBPACK_IMPORTED_MODULE_29__["webSceneRendererTypes"],
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
      })], J.prototype, "renderer", null), Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_6__["property"])({
        json: {
          read: !1
        }
      })], J.prototype, "cachedDrawingInfo", void 0), Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_reader_js__WEBPACK_IMPORTED_MODULE_7__["reader"])("service", "cachedDrawingInfo")], J.prototype, "readCachedDrawingInfo", null), Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_6__["property"])({
        readOnly: !0,
        json: {
          read: !1
        },
        dependsOn: ["associatedLayer.capabilities"]
      })], J.prototype, "capabilities", null), Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_6__["property"])({
        type: Boolean,
        json: {
          read: !1
        }
      })], J.prototype, "editingEnabled", void 0), Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_6__["property"])(_support_commonProperties_js__WEBPACK_IMPORTED_MODULE_20__["popupEnabled"])], J.prototype, "popupEnabled", void 0), Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_6__["property"])({
        type: _PopupTemplate_js__WEBPACK_IMPORTED_MODULE_15__["default"],
        json: {
          name: "popupInfo",
          write: !0
        }
      })], J.prototype, "popupTemplate", void 0), Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_6__["property"])({
        readOnly: !0,
        json: {
          read: !1
        },
        dependsOn: ["fields", "title", "attributeStorageInfo", "associatedLayer"]
      })], J.prototype, "defaultPopupTemplate", null), Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_6__["property"])({
        type: String,
        json: {
          read: !1
        }
      })], J.prototype, "objectIdField", void 0), Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_reader_js__WEBPACK_IMPORTED_MODULE_7__["reader"])("service", "objectIdField", ["objectIdField", "fields"])], J.prototype, "readObjectIdField", null), Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_6__["property"])({
        type: String,
        json: {
          read: !1
        }
      })], J.prototype, "globalIdField", void 0), Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_reader_js__WEBPACK_IMPORTED_MODULE_7__["reader"])("service", "globalIdField", ["globalIdField", "fields"])], J.prototype, "readGlobalIdField", null), Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_6__["property"])({
        readOnly: !0,
        type: String,
        json: {
          read: !1
        },
        dependsOn: ["associatedLayer.displayField"]
      })], J.prototype, "displayField", null), Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_6__["property"])({
        type: String,
        json: {
          read: !1
        }
      })], J.prototype, "profile", void 0), Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_reader_js__WEBPACK_IMPORTED_MODULE_7__["reader"])("service", "profile", ["store.profile"])], J.prototype, "readProfile", null), Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_6__["property"])({
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
      })], J.prototype, "normalReferenceFrame", void 0), Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_6__["property"])(_support_commonProperties_js__WEBPACK_IMPORTED_MODULE_20__["screenSizePerspectiveEnabled"])], J.prototype, "screenSizePerspectiveEnabled", void 0), J = Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_subclass_js__WEBPACK_IMPORTED_MODULE_8__["subclass"])("esri.layers.SceneLayer")], J);
      var H = {
        "mesh-pyramids": "mesh-pyramids",
        meshpyramids: "mesh-pyramids",
        "features-meshes": "mesh-pyramids",
        points: "points",
        "features-points": "points",
        lines: "lines",
        "features-lines": "lines",
        polygons: "polygons",
        "features-polygons": "polygons"
      },
          X = {
        "mesh-pyramids": "mesh",
        points: "point",
        lines: "polyline",
        polygons: "polygon"
      };
      var Y = J;
      /* harmony default export */

      __webpack_exports__["default"] = Y;
      /***/
    },

    /***/
    "3Z6q":
    /*!***************************************************************!*\
      !*** ./node_modules/@arcgis/core/layers/support/RangeInfo.js ***!
      \***************************************************************/

    /*! exports provided: default, RangeInfo */

    /***/
    function Z6q(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "RangeInfo", function () {
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
      /* harmony import */


      var _core_JSONSupport_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! ../../core/JSONSupport.js */
      "ag7Y");
      /*
      All material copyright ESRI, All Rights Reserved, unless otherwise specified.
      See https://js.arcgis.com/4.18/esri/copyright.txt for details.
      */


      var s = /*#__PURE__*/function (_core_JSONSupport_js_) {
        _inherits(s, _core_JSONSupport_js_);

        var _super2 = _createSuper(s);

        function s() {
          var _this11;

          _classCallCheck(this, s);

          _this11 = _super2.apply(this, arguments), _this11.name = null, _this11.field = null, _this11.currentRangeExtent = null, _this11.fullRangeExtent = null, _this11.type = "rangeInfo";
          return _this11;
        }

        return s;
      }(_core_JSONSupport_js__WEBPACK_IMPORTED_MODULE_9__["JSONSupport"]);

      Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_4__["property"])({
        type: String,
        json: {
          read: !0,
          write: !0
        }
      })], s.prototype, "name", void 0), Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_4__["property"])({
        type: String,
        json: {
          read: !0,
          write: !0
        }
      })], s.prototype, "field", void 0), Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_4__["property"])({
        type: [Number],
        json: {
          read: !0,
          write: !0
        }
      })], s.prototype, "currentRangeExtent", void 0), Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_4__["property"])({
        type: [Number],
        json: {
          read: !0,
          write: !0
        }
      })], s.prototype, "fullRangeExtent", void 0), Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_4__["property"])({
        type: ["rangeInfo"],
        readOnly: !0,
        json: {
          read: !1,
          write: !0
        }
      })], s.prototype, "type", void 0), s = Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_subclass_js__WEBPACK_IMPORTED_MODULE_5__["subclass"])("esri.layers.support.RangeInfo")], s);
      var p = s;
      /* harmony default export */

      __webpack_exports__["default"] = p;
      /***/
    }
  }]);
})();
//# sourceMappingURL=SceneLayer-js-es5.js.map