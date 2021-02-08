(function () {
  function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }

  function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

  function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && Symbol.iterator in Object(iter)) return Array.from(iter); }

  function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }

  function _createForOfIteratorHelper(o, allowArrayLike) { var it; if (typeof Symbol === "undefined" || o[Symbol.iterator] == null) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e2) { throw _e2; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = o[Symbol.iterator](); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e3) { didErr = true; err = _e3; }, f: function f() { try { if (!normalCompletion && it["return"] != null) it["return"](); } finally { if (didErr) throw err; } } }; }

  function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

  function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

  function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

  function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

  function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

  function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

  function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

  function _get(target, property, receiver) { if (typeof Reflect !== "undefined" && Reflect.get) { _get = Reflect.get; } else { _get = function _get(target, property, receiver) { var base = _superPropBase(target, property); if (!base) return; var desc = Object.getOwnPropertyDescriptor(base, property); if (desc.get) { return desc.get.call(receiver); } return desc.value; }; } return _get(target, property, receiver || target); }

  function _superPropBase(object, property) { while (!Object.prototype.hasOwnProperty.call(object, property)) { object = _getPrototypeOf(object); if (object === null) break; } return object; }

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

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["PointCloudLayer-js"], {
    /***/
    "7dZg":
    /*!****************************************************************************************!*\
      !*** ./node_modules/@arcgis/core/layers/pointCloudFilters/PointCloudBitfieldFilter.js ***!
      \****************************************************************************************/

    /*! exports provided: default */

    /***/
    function dZg(module, __webpack_exports__, __webpack_require__) {
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


      var _PointCloudFilter_js__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
      /*! ./PointCloudFilter.js */
      "gRed");
      /*
      All material copyright ESRI, All Rights Reserved, unless otherwise specified.
      See https://js.arcgis.com/4.18/esri/copyright.txt for details.
      */


      var _p;

      var d = _p = /*#__PURE__*/function (_PointCloudFilter_js_) {
        _inherits(p, _PointCloudFilter_js_);

        var _super = _createSuper(p);

        function p(r) {
          var _this;

          _classCallCheck(this, p);

          _this = _super.call(this, r), _this.requiredClearBits = null, _this.requiredSetBits = null, _this.type = "bitfield";
          return _this;
        }

        _createClass(p, [{
          key: "clone",
          value: function clone() {
            return new _p({
              field: this.field,
              requiredClearBits: Object(_core_lang_js__WEBPACK_IMPORTED_MODULE_2__["clone"])(this.requiredClearBits),
              requiredSetBits: Object(_core_lang_js__WEBPACK_IMPORTED_MODULE_2__["clone"])(this.requiredSetBits)
            });
          }
        }]);

        return p;
      }(_PointCloudFilter_js__WEBPACK_IMPORTED_MODULE_11__["default"]);

      Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_5__["property"])({
        type: [_core_accessorSupport_ensureType_js__WEBPACK_IMPORTED_MODULE_4__["Integer"]],
        json: {
          write: {
            enabled: !0,
            overridePolicy: function overridePolicy() {
              return {
                enabled: !0,
                isRequired: !this.requiredSetBits
              };
            }
          }
        }
      })], d.prototype, "requiredClearBits", void 0), Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_5__["property"])({
        type: [_core_accessorSupport_ensureType_js__WEBPACK_IMPORTED_MODULE_4__["Integer"]],
        json: {
          write: {
            enabled: !0,
            overridePolicy: function overridePolicy() {
              return {
                enabled: !0,
                isRequired: !this.requiredClearBits
              };
            }
          }
        }
      })], d.prototype, "requiredSetBits", void 0), Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_enumeration_js__WEBPACK_IMPORTED_MODULE_6__["enumeration"])({
        pointCloudBitfieldFilter: "bitfield"
      })], d.prototype, "type", void 0), d = _p = Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_subclass_js__WEBPACK_IMPORTED_MODULE_7__["subclass"])("esri.layers.pointCloudFilters.PointCloudBitfieldFilter")], d);
      var u = d;
      /* harmony default export */

      __webpack_exports__["default"] = u;
      /***/
    },

    /***/
    "8i82":
    /*!**************************************************************************************!*\
      !*** ./node_modules/@arcgis/core/layers/pointCloudFilters/PointCloudReturnFilter.js ***!
      \**************************************************************************************/

    /*! exports provided: default */

    /***/
    function i82(module, __webpack_exports__, __webpack_require__) {
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


      var _PointCloudFilter_js__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
      /*! ./PointCloudFilter.js */
      "gRed");
      /*
      All material copyright ESRI, All Rights Reserved, unless otherwise specified.
      See https://js.arcgis.com/4.18/esri/copyright.txt for details.
      */


      var p;

      var u = p = /*#__PURE__*/function (_PointCloudFilter_js_2) {
        _inherits(_class, _PointCloudFilter_js_2);

        var _super2 = _createSuper(_class);

        function _class(r) {
          var _this2;

          _classCallCheck(this, _class);

          _this2 = _super2.call(this, r), _this2.includedReturns = [], _this2.type = "return";
          return _this2;
        }

        _createClass(_class, [{
          key: "clone",
          value: function clone() {
            return new p({
              field: this.field,
              includedReturns: Object(_core_lang_js__WEBPACK_IMPORTED_MODULE_2__["clone"])(this.includedReturns)
            });
          }
        }]);

        return _class;
      }(_PointCloudFilter_js__WEBPACK_IMPORTED_MODULE_11__["default"]);

      Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_5__["property"])({
        type: [["firstOfMany", "last", "lastOfMany", "single"]],
        json: {
          write: {
            enabled: !0,
            isRequired: !0
          }
        }
      })], u.prototype, "includedReturns", void 0), Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_enumeration_js__WEBPACK_IMPORTED_MODULE_6__["enumeration"])({
        pointCloudReturnFilter: "return"
      })], u.prototype, "type", void 0), u = p = Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_subclass_js__WEBPACK_IMPORTED_MODULE_7__["subclass"])("esri.layers.pointCloudFilters.PointCloudReturnFilter")], u);
      var n = u;
      /* harmony default export */

      __webpack_exports__["default"] = n;
      /***/
    },

    /***/
    "9Ruv":
    /*!*********************************************************!*\
      !*** ./node_modules/@arcgis/core/support/popupUtils.js ***!
      \*********************************************************/

    /*! exports provided: createFieldInfos, createFieldsContent, createPopupTemplate */

    /***/
    function Ruv(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "createFieldInfos", function () {
        return F;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "createFieldsContent", function () {
        return f;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "createPopupTemplate", function () {
        return a;
      });
      /* harmony import */


      var _layers_support_fieldUtils_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ../layers/support/fieldUtils.js */
      "wdpY");
      /* harmony import */


      var _popup_content_Content_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ../popup/content/Content.js */
      "p6dn");
      /* harmony import */


      var _popup_content_AttachmentsContent_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ../popup/content/AttachmentsContent.js */
      "Eonp");
      /* harmony import */


      var _popup_content_CustomContent_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ../popup/content/CustomContent.js */
      "ack/");
      /* harmony import */


      var _popup_support_FieldInfoFormat_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ../popup/support/FieldInfoFormat.js */
      "iALD");
      /* harmony import */


      var _popup_FieldInfo_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ../popup/FieldInfo.js */
      "n5EF");
      /* harmony import */


      var _popup_content_FieldsContent_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ../popup/content/FieldsContent.js */
      "GL98");
      /* harmony import */


      var _popup_content_MediaContent_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! ../popup/content/MediaContent.js */
      "PKzc");
      /* harmony import */


      var _popup_content_TextContent_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! ../popup/content/TextContent.js */
      "0OnR");
      /* harmony import */


      var _PopupTemplate_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! ../PopupTemplate.js */
      "SFah");
      /*
      All material copyright ESRI, All Rights Reserved, unless otherwise specified.
      See https://js.arcgis.com/4.18/esri/copyright.txt for details.
      */


      var r = ["oid", "global-id"],
          s = ["oid", "global-id", "guid"];

      function a(_ref, d) {
        var i = _ref.displayField,
            o = _ref.editFieldsInfo,
            r = _ref.fields,
            s = _ref.objectIdField,
            a = _ref.title;
        if (!r) return null;
        var p = F({
          editFieldsInfo: o,
          fields: r,
          objectIdField: s
        }, d);
        if (!p.length) return null;

        var u = function (t) {
          var i = Object(_layers_support_fieldUtils_js__WEBPACK_IMPORTED_MODULE_0__["getDisplayFieldName"])(t),
              o = t.titleBase;
          return i ? "".concat(o, ": {").concat(i.trim(), "}") : o;
        }({
          titleBase: a,
          fields: r,
          displayField: i
        }),
            c = [new _popup_content_FieldsContent_js__WEBPACK_IMPORTED_MODULE_6__["default"](), new _popup_content_AttachmentsContent_js__WEBPACK_IMPORTED_MODULE_2__["default"]()];

        return new _PopupTemplate_js__WEBPACK_IMPORTED_MODULE_9__["default"]({
          title: u,
          content: c,
          fieldInfos: p
        });
      }

      var d = [/^fnode_$/i, /^tnode_$/i, /^lpoly_$/i, /^rpoly_$/i, /^poly_$/i, /^subclass$/i, /^subclass_$/i, /^rings_ok$/i, /^rings_nok$/i, /shape/i, /perimeter/i, /objectid/i, /_i$/i],
          p = function p(e, _ref2) {
        var t = _ref2.editFieldsInfo,
            i = _ref2.objectIdField,
            o = _ref2.visibleFieldNames;
        return o ? o.has(e.name) : !c(e.name, t) && (!i || e.name !== i) && !(r.indexOf(e.type) > -1) && !d.some(function (t) {
          return t.test(e.name);
        });
      };

      function u(e, t) {
        return "oid" === e.type ? -1 : "oid" === t.type ? 1 : w(e) ? -1 : w(t) ? 1 : (e.alias || e.name).toLocaleLowerCase().localeCompare((t.alias || t.name).toLocaleLowerCase());
      }

      function c(e, t) {
        if (!e || !t) return !1;
        var i = t.creationDateField,
            o = t.creatorField,
            n = t.editDateField,
            l = t.editorField;
        return -1 !== [i && i.toLowerCase(), o && o.toLowerCase(), n && n.toLowerCase(), l && l.toLowerCase()].indexOf(e.toLowerCase());
      }

      function m(e, t) {
        return e.editable && -1 === s.indexOf(e.type) && !c(e.name, t);
      }

      function f(e, t) {
        return new _popup_content_FieldsContent_js__WEBPACK_IMPORTED_MODULE_6__["default"]({
          fieldInfos: F(e, t).filter(function (e) {
            return e.visible;
          })
        });
      }

      function F(_ref3, n) {
        var e = _ref3.editFieldsInfo,
            t = _ref3.fields,
            i = _ref3.objectIdField;
        return function (e, t) {
          var i = e;
          return t && (e = e.filter(function (e) {
            return -1 === t.indexOf(e.type);
          })), e === i && (e = e.slice()), e.sort(u), e;
        }(t, (null == n ? void 0 : n.ignoreFieldTypes) || C).map(function (t) {
          return new _popup_FieldInfo_js__WEBPACK_IMPORTED_MODULE_5__["default"]({
            fieldName: t.name,
            isEditable: m(t, e),
            label: t.alias,
            format: b(t),
            visible: p(t, {
              editFieldsInfo: e,
              objectIdField: i,
              visibleFieldNames: null == n ? void 0 : n.visibleFieldNames
            })
          });
        });
      }

      function b(e) {
        switch (e.type) {
          case "small-integer":
          case "integer":
          case "single":
            return new _popup_support_FieldInfoFormat_js__WEBPACK_IMPORTED_MODULE_4__["default"]({
              digitSeparator: !0,
              places: 0
            });

          case "double":
            return new _popup_support_FieldInfoFormat_js__WEBPACK_IMPORTED_MODULE_4__["default"]({
              digitSeparator: !0,
              places: 2
            });

          case "date":
            return new _popup_support_FieldInfoFormat_js__WEBPACK_IMPORTED_MODULE_4__["default"]({
              dateFormat: "long-month-day-year"
            });

          default:
            return null;
        }
      }

      function w(e) {
        if ("name" === (e.name && e.name.toLowerCase())) return !0;
        return "name" === (e.alias && e.alias.toLowerCase()) || void 0;
      }

      var C = ["geometry", "blob", "raster", "guid", "xml"];
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

          var _super3 = _createSuper(d);

          function d() {
            var _this3;

            _classCallCheck(this, d);

            _this3 = _super3.apply(this, arguments), _this3.resourceReferences = {
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
    "L+uT":
    /*!*********************************************************************!*\
      !*** ./node_modules/@arcgis/core/layers/support/fieldProperties.js ***!
      \*********************************************************************/

    /*! exports provided: defineFieldProperties */

    /***/
    function LUT(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "defineFieldProperties", function () {
        return l;
      });
      /* harmony import */


      var _core_Logger_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ../../core/Logger.js */
      "6S2I");
      /* harmony import */


      var _fieldUtils_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./fieldUtils.js */
      "wdpY");
      /* harmony import */


      var _Field_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./Field.js */
      "ofM5");
      /*
      All material copyright ESRI, All Rights Reserved, unless otherwise specified.
      See https://js.arcgis.com/4.18/esri/copyright.txt for details.
      */


      var s = _core_Logger_js__WEBPACK_IMPORTED_MODULE_0__["default"].getLogger("esri.layers.support.fieldProperties");

      function l() {
        return {
          fields: {
            type: [_Field_js__WEBPACK_IMPORTED_MODULE_2__["default"]],
            value: null
          },
          outFields: {
            type: [String],
            dependsOn: ["fields"],
            json: {
              read: !1
            },
            set: function set(e) {
              this._userOutFields = e, this.notifyChange("outFields");
            },
            get: function get() {
              var e = this._userOutFields;
              if (!e || !e.length) return null;
              if (e.includes("*")) return ["*"];
              if (!this.fields) return e;

              var _iterator = _createForOfIteratorHelper(e),
                  _step;

              try {
                for (_iterator.s(); !(_step = _iterator.n()).done;) {
                  var t = _step.value;
                  Object(_fieldUtils_js__WEBPACK_IMPORTED_MODULE_1__["hasField"])(this.fields, t) || s.error("field-attributes-layer:invalid-field", "Invalid field ".concat(t, " found in outFields"), {
                    layer: this,
                    outFields: e
                  });
                }
              } catch (err) {
                _iterator.e(err);
              } finally {
                _iterator.f();
              }

              return Object(_fieldUtils_js__WEBPACK_IMPORTED_MODULE_1__["fixFields"])(this.fields, e);
            }
          }
        };
      }
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


      var p = function (_p3) {
        function p(_x3) {
          return _p3.apply(this, arguments);
        }

        p.toString = function () {
          return _p3.toString();
        };

        return p;
      }(function (p) {
        var c = /*#__PURE__*/function (_p2) {
          _inherits(c, _p2);

          var _super4 = _createSuper(c);

          function c() {
            _classCallCheck(this, c);

            return _super4.apply(this, arguments);
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
        }(p);

        return Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_5__["property"])({
          dependsOn: ["url"]
        })], c.prototype, "title", null), Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_5__["property"])({
          type: String
        })], c.prototype, "url", null), c = Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_subclass_js__WEBPACK_IMPORTED_MODULE_6__["subclass"])("esri.layers.mixins.ArcGISService")], c), c;
      });
      /***/

    },

    /***/
    "RLtZ":
    /*!*************************************************************!*\
      !*** ./node_modules/@arcgis/core/layers/PointCloudLayer.js ***!
      \*************************************************************/

    /*! exports provided: default */

    /***/
    function RLtZ(module, __webpack_exports__, __webpack_require__) {
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


      var _core_object_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ../core/object.js */
      "nR38");
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


      var _core_accessorSupport_decorators_reader_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! ../core/accessorSupport/decorators/reader.js */
      "r88o");
      /* harmony import */


      var _core_accessorSupport_decorators_subclass_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! ../core/accessorSupport/decorators/subclass.js */
      "04ZG");
      /* harmony import */


      var _core_accessorSupport_decorators_writer_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
      /*! ../core/accessorSupport/decorators/writer.js */
      "Cduq");
      /* harmony import */


      var _core_Error_js__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
      /*! ../core/Error.js */
      "zlDU");
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


      var _popup_ExpressionInfo_js__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(
      /*! ../popup/ExpressionInfo.js */
      "Fjfq");
      /* harmony import */


      var _PopupTemplate_js__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(
      /*! ../PopupTemplate.js */
      "SFah");
      /* harmony import */


      var _request_js__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(
      /*! ../request.js */
      "Lqtk");
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


      var _support_Field_js__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(
      /*! ./support/Field.js */
      "ofM5");
      /* harmony import */


      var _support_FieldsIndex_js__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(
      /*! ./support/FieldsIndex.js */
      "gLc9");
      /* harmony import */


      var _mixins_ArcGISService_js__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(
      /*! ./mixins/ArcGISService.js */
      "PVlI");
      /* harmony import */


      var _mixins_PortalLayer_js__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(
      /*! ./mixins/PortalLayer.js */
      "DbUH");
      /* harmony import */


      var _mixins_ScaleRangeLayer_js__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(
      /*! ./mixins/ScaleRangeLayer.js */
      "WmKv");
      /* harmony import */


      var _support_fieldProperties_js__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(
      /*! ./support/fieldProperties.js */
      "L+uT");
      /* harmony import */


      var _support_popupUtils_js__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(
      /*! ../support/popupUtils.js */
      "9Ruv");
      /* harmony import */


      var _mixins_SceneService_js__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(
      /*! ./mixins/SceneService.js */
      "lq5k");
      /* harmony import */


      var _pointCloudFilters_typeUtils_js__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(
      /*! ./pointCloudFilters/typeUtils.js */
      "mKtp");
      /* harmony import */


      var _renderers_support_pointCloud_typeUtils_js__WEBPACK_IMPORTED_MODULE_32__ = __webpack_require__(
      /*! ../renderers/support/pointCloud/typeUtils.js */
      "l8Gk");
      /*
      All material copyright ESRI, All Rights Reserved, unless otherwise specified.
      See https://js.arcgis.com/4.18/esri/copyright.txt for details.
      */


      var O = _core_Logger_js__WEBPACK_IMPORTED_MODULE_5__["default"].getLogger("esri.layers.PointCloudLayer"),
          N = Object(_support_fieldProperties_js__WEBPACK_IMPORTED_MODULE_28__["defineFieldProperties"])();

      var R = /*#__PURE__*/function (_Object) {
        _inherits(R, _Object);

        var _super5 = _createSuper(R);

        function R() {
          var _this4;

          _classCallCheck(this, R);

          for (var _len = arguments.length, e = new Array(_len), _key = 0; _key < _len; _key++) {
            e[_key] = arguments[_key];
          }

          _this4 = _super5.call.apply(_super5, [this].concat(e)), _this4.operationalLayerType = "PointCloudLayer", _this4.popupEnabled = !0, _this4.popupTemplate = null, _this4.opacity = 1, _this4.filters = [], _this4.fields = null, _this4.outFields = null, _this4.path = null, _this4.legendEnabled = !0, _this4.renderer = null, _this4.type = "point-cloud";
          return _this4;
        }

        _createClass(R, [{
          key: "normalizeCtorArgs",
          value: function normalizeCtorArgs(e, r) {
            return "string" == typeof e ? _objectSpread({
              url: e
            }, r) : e;
          }
        }, {
          key: "defaultPopupTemplate",
          get: function get() {
            return this.attributeStorageInfo ? this.createPopupTemplate() : null;
          }
        }, {
          key: "fieldsIndex",
          get: function get() {
            return new _support_FieldsIndex_js__WEBPACK_IMPORTED_MODULE_24__["default"](this.fields);
          }
        }, {
          key: "getFieldDomain",
          value: function getFieldDomain(e) {
            var r = this.fieldsIndex.get(e);
            return r && r.domain ? r.domain : null;
          }
        }, {
          key: "readServiceFields",
          value: function readServiceFields(e, t, o) {
            return Array.isArray(e) ? e.map(function (e) {
              var t = new _support_Field_js__WEBPACK_IMPORTED_MODULE_23__["default"]();
              return "FieldTypeInteger" === e.type && ((e = Object(_core_lang_js__WEBPACK_IMPORTED_MODULE_2__["clone"])(e)).type = "esriFieldTypeInteger"), t.read(e, o), t;
            }) : Array.isArray(t.attributeStorageInfo) ? t.attributeStorageInfo.map(function (e) {
              return new _support_Field_js__WEBPACK_IMPORTED_MODULE_23__["default"]({
                name: e.name,
                type: "ELEVATION" === e.name ? "double" : "integer"
              });
            }) : null;
          }
        }, {
          key: "elevationInfo",
          set: function set(e) {
            this._set("elevationInfo", e), this._validateElevationInfo();
          }
        }, {
          key: "writeRenderer",
          value: function writeRenderer(e, r, o, i) {
            Object(_core_object_js__WEBPACK_IMPORTED_MODULE_3__["setDeepValue"])("layerDefinition.drawingInfo.renderer", e.write(null, i), r);
          }
        }, {
          key: "load",
          value: function load(e) {
            var _this5 = this;

            var r = Object(_core_maybe_js__WEBPACK_IMPORTED_MODULE_4__["isSome"])(e) ? e.signal : null,
                t = this.loadFromPortal({
              supportedTypes: ["Scene Service"]
            }, e).then(function () {
              return _this5._fetchService(r);
            }, function () {
              return _this5._fetchService(r);
            });
            return this.addResolvingPromise(t), Object(_core_promiseUtils_js__WEBPACK_IMPORTED_MODULE_15__["resolve"])(this);
          }
        }, {
          key: "createPopupTemplate",
          value: function createPopupTemplate(e) {
            var r = Object(_support_popupUtils_js__WEBPACK_IMPORTED_MODULE_29__["createPopupTemplate"])(this, e);
            return this.formatPopupTemplateReturnsField(r), this.formatPopupTemplateRGBField(r), r;
          }
        }, {
          key: "formatPopupTemplateReturnsField",
          value: function formatPopupTemplateReturnsField(e) {
            var r = this.fieldsIndex.get("RETURNS");
            if (!r) return;
            var t = e.fieldInfos.find(function (e) {
              return e.fieldName === r.name;
            });
            if (!t) return;
            var o = new _popup_ExpressionInfo_js__WEBPACK_IMPORTED_MODULE_16__["default"]({
              name: "pcl-returns-decoded",
              title: r.alias || r.name,
              expression: "\n        var returnValue = $feature.".concat(r.name, ";\n        return (returnValue % 16) + \" / \" + Floor(returnValue / 16);\n      ")
            });
            e.expressionInfos = [].concat(_toConsumableArray(e.expressionInfos || []), [o]), t.fieldName = "expression/pcl-returns-decoded";
          }
        }, {
          key: "formatPopupTemplateRGBField",
          value: function formatPopupTemplateRGBField(e) {
            var r = this.fieldsIndex.get("RGB");
            if (!r) return;
            var t = e.fieldInfos.find(function (e) {
              return e.fieldName === r.name;
            });
            if (!t) return;
            var o = new _popup_ExpressionInfo_js__WEBPACK_IMPORTED_MODULE_16__["default"]({
              name: "pcl-rgb-decoded",
              title: r.alias || r.name,
              expression: "\n        var rgb = $feature.".concat(r.name, ";\n        var red = Floor(rgb / 65536, 0);\n        var green = Floor((rgb - (red * 65536)) / 256,0);\n        var blue = rgb - (red * 65536) - (green * 256);\n\n        return \"rgb(\" + red + \",\" + green + \",\" + blue + \")\";\n      ")
            });
            e.expressionInfos = [].concat(_toConsumableArray(e.expressionInfos || []), [o]), t.fieldName = "expression/pcl-rgb-decoded";
          }
        }, {
          key: "queryCachedStatistics",
          value: function () {
            var _queryCachedStatistics = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee2(e, r) {
              var t, _iterator2, _step2, _e, _t;

              return regeneratorRuntime.wrap(function _callee2$(_context2) {
                while (1) {
                  switch (_context2.prev = _context2.next) {
                    case 0:
                      _context2.next = 2;
                      return this.load(r);

                    case 2:
                      if (this.attributeStorageInfo) {
                        _context2.next = 4;
                        break;
                      }

                      throw new _core_Error_js__WEBPACK_IMPORTED_MODULE_11__["default"]("scenelayer:no-cached-statistics", "Cached statistics are not available for this layer");

                    case 4:
                      t = this.fieldsIndex.get(e);

                      if (t) {
                        _context2.next = 7;
                        break;
                      }

                      throw new _core_Error_js__WEBPACK_IMPORTED_MODULE_11__["default"]("pointcloudlayer:field-unexisting", "Field '".concat(e, "' does not exist on the layer"));

                    case 7:
                      _iterator2 = _createForOfIteratorHelper(this.attributeStorageInfo);
                      _context2.prev = 8;

                      _iterator2.s();

                    case 10:
                      if ((_step2 = _iterator2.n()).done) {
                        _context2.next = 17;
                        break;
                      }

                      _e = _step2.value;

                      if (!(_e.name === t.name)) {
                        _context2.next = 15;
                        break;
                      }

                      _t = Object(_core_urlUtils_js__WEBPACK_IMPORTED_MODULE_12__["join"])(this.parsedUrl.path, "./statistics/".concat(_e.key));
                      return _context2.abrupt("return", Object(_request_js__WEBPACK_IMPORTED_MODULE_18__["default"])(_t, {
                        query: {
                          f: "json"
                        },
                        responseType: "json",
                        signal: r ? r.signal : null
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
                      throw new _core_Error_js__WEBPACK_IMPORTED_MODULE_11__["default"]("pointcloudlayer:no-cached-statistics", "Cached statistics for this attribute are not available");

                    case 26:
                    case "end":
                      return _context2.stop();
                  }
                }
              }, _callee2, this, [[8, 19, 22, 25]]);
            }));

            function queryCachedStatistics(_x4, _x5) {
              return _queryCachedStatistics.apply(this, arguments);
            }

            return queryCachedStatistics;
          }()
        }, {
          key: "saveAs",
          value: function () {
            var _saveAs = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee3(e, r) {
              var _this6 = this;

              return regeneratorRuntime.wrap(function _callee3$(_context3) {
                while (1) {
                  switch (_context3.prev = _context3.next) {
                    case 0:
                      return _context3.abrupt("return", this._debouncedSaveOperations(1, _objectSpread(_objectSpread({}, r), {}, {
                        getTypeKeywords: function getTypeKeywords() {
                          return _this6._getTypeKeywords();
                        },
                        portalItemLayerType: "point-cloud"
                      }), e));

                    case 1:
                    case "end":
                      return _context3.stop();
                  }
                }
              }, _callee3, this);
            }));

            function saveAs(_x6, _x7) {
              return _saveAs.apply(this, arguments);
            }

            return saveAs;
          }()
        }, {
          key: "save",
          value: function () {
            var _save = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee4() {
              var _this7 = this;

              var e;
              return regeneratorRuntime.wrap(function _callee4$(_context4) {
                while (1) {
                  switch (_context4.prev = _context4.next) {
                    case 0:
                      e = {
                        getTypeKeywords: function getTypeKeywords() {
                          return _this7._getTypeKeywords();
                        },
                        portalItemLayerType: "point-cloud"
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
          key: "validateLayer",
          value: function validateLayer(e) {
            if (e.layerType && "PointCloud" !== e.layerType) throw new _core_Error_js__WEBPACK_IMPORTED_MODULE_11__["default"]("pointcloudlayer:layer-type-not-supported", "PointCloudLayer does not support this layer type", {
              layerType: e.layerType
            });
            if (isNaN(this.version.major) || isNaN(this.version.minor)) throw new _core_Error_js__WEBPACK_IMPORTED_MODULE_11__["default"]("layer:service-version-not-supported", "Service version is not supported.", {
              serviceVersion: this.version.versionString,
              supportedVersions: "1.x-2.x"
            });
            if (this.version.major > 2) throw new _core_Error_js__WEBPACK_IMPORTED_MODULE_11__["default"]("layer:service-version-too-new", "Service version is too new.", {
              serviceVersion: this.version.versionString,
              supportedVersions: "1.x-2.x"
            });
          }
        }, {
          key: "hasCachedStatistics",
          value: function hasCachedStatistics(e) {
            return null != this.attributeStorageInfo && this.attributeStorageInfo.some(function (r) {
              return r.name === e;
            });
          }
        }, {
          key: "_getTypeKeywords",
          value: function _getTypeKeywords() {
            return ["PointCloud"];
          }
        }, {
          key: "_validateElevationInfo",
          value: function _validateElevationInfo() {
            var e = this.elevationInfo;
            e && ("absolute-height" !== e.mode && O.warn(".elevationInfo=", "Point cloud layers only support absolute-height elevation mode"), e.featureExpressionInfo && "0" !== e.featureExpressionInfo.expression && O.warn(".elevationInfo=", "Point cloud layers do not support featureExpressionInfo"));
          }
        }]);

        return R;
      }(Object(_mixins_SceneService_js__WEBPACK_IMPORTED_MODULE_30__["SceneService"])(Object(_mixins_ArcGISService_js__WEBPACK_IMPORTED_MODULE_25__["ArcGISService"])(Object(_mixins_OperationalLayer_js__WEBPACK_IMPORTED_MODULE_22__["OperationalLayer"])(Object(_mixins_PortalLayer_js__WEBPACK_IMPORTED_MODULE_26__["PortalLayer"])(Object(_mixins_ScaleRangeLayer_js__WEBPACK_IMPORTED_MODULE_27__["ScaleRangeLayer"])(Object(_core_MultiOriginJSONSupport_js__WEBPACK_IMPORTED_MODULE_20__["MultiOriginJSONMixin"])(_Layer_js__WEBPACK_IMPORTED_MODULE_19__["default"])))))));

      Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_7__["property"])({
        type: ["PointCloudLayer"]
      })], R.prototype, "operationalLayerType", void 0), Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_7__["property"])(_support_commonProperties_js__WEBPACK_IMPORTED_MODULE_21__["popupEnabled"])], R.prototype, "popupEnabled", void 0), Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_7__["property"])({
        type: _PopupTemplate_js__WEBPACK_IMPORTED_MODULE_17__["default"],
        json: {
          name: "popupInfo",
          write: !0
        }
      })], R.prototype, "popupTemplate", void 0), Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_7__["property"])({
        readOnly: !0,
        json: {
          read: !1
        },
        dependsOn: ["fields", "title", "attributeStorageInfo"]
      })], R.prototype, "defaultPopupTemplate", null), Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_7__["property"])({
        readOnly: !0,
        json: {
          write: !1,
          read: !1,
          origins: {
            "web-document": {
              write: !1,
              read: !1
            }
          }
        }
      })], R.prototype, "opacity", void 0), Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_7__["property"])({
        type: ["show", "hide"]
      })], R.prototype, "listMode", void 0), Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_7__["property"])({
        types: [_pointCloudFilters_typeUtils_js__WEBPACK_IMPORTED_MODULE_31__["types"]],
        json: {
          origins: {
            service: {
              read: {
                source: "filters"
              }
            }
          },
          name: "layerDefinition.filters",
          write: !0
        }
      })], R.prototype, "filters", void 0), Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_7__["property"])({
        type: [_support_Field_js__WEBPACK_IMPORTED_MODULE_23__["default"]]
      })], R.prototype, "fields", void 0), Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_7__["property"])({
        readOnly: !0,
        dependsOn: ["fields"]
      })], R.prototype, "fieldsIndex", null), Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_reader_js__WEBPACK_IMPORTED_MODULE_8__["reader"])("service", "fields", ["fields", "attributeStorageInfo"])], R.prototype, "readServiceFields", null), Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_7__["property"])(N.outFields)], R.prototype, "outFields", void 0), Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_7__["property"])({
        readOnly: !0
      })], R.prototype, "attributeStorageInfo", void 0), Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_7__["property"])(_support_commonProperties_js__WEBPACK_IMPORTED_MODULE_21__["elevationInfo"])], R.prototype, "elevationInfo", null), Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_7__["property"])({
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
      })], R.prototype, "path", void 0), Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_7__["property"])(_support_commonProperties_js__WEBPACK_IMPORTED_MODULE_21__["legendEnabled"])], R.prototype, "legendEnabled", void 0), Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_7__["property"])({
        types: _renderers_support_pointCloud_typeUtils_js__WEBPACK_IMPORTED_MODULE_32__["types"],
        json: {
          origins: {
            service: {
              read: {
                source: "drawingInfo.renderer"
              }
            }
          },
          name: "layerDefinition.drawingInfo.renderer",
          write: {
            target: {
              "layerDefinition.drawingInfo.renderer": {
                types: _renderers_support_pointCloud_typeUtils_js__WEBPACK_IMPORTED_MODULE_32__["types"]
              },
              "layerDefinition.drawingInfo.transparency": {
                type: Number
              }
            }
          }
        }
      })], R.prototype, "renderer", void 0), Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_writer_js__WEBPACK_IMPORTED_MODULE_10__["writer"])("renderer")], R.prototype, "writeRenderer", null), Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_7__["property"])({
        json: {
          read: !1
        },
        readOnly: !0
      })], R.prototype, "type", void 0), R = Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_subclass_js__WEBPACK_IMPORTED_MODULE_9__["subclass"])("esri.layers.PointCloudLayer")], R);
      var _ = R;
      /* harmony default export */

      __webpack_exports__["default"] = _;
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

          var _super6 = _createSuper(t);

          function t() {
            var _this8;

            _classCallCheck(this, t);

            _this8 = _super6.apply(this, arguments), _this8.minScale = 0, _this8.maxScale = 0;
            return _this8;
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
    "auUa":
    /*!*************************************************************************************!*\
      !*** ./node_modules/@arcgis/core/layers/pointCloudFilters/PointCloudValueFilter.js ***!
      \*************************************************************************************/

    /*! exports provided: default */

    /***/
    function auUa(module, __webpack_exports__, __webpack_require__) {
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


      var _PointCloudFilter_js__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
      /*! ./PointCloudFilter.js */
      "gRed");
      /*
      All material copyright ESRI, All Rights Reserved, unless otherwise specified.
      See https://js.arcgis.com/4.18/esri/copyright.txt for details.
      */


      var p;

      var u = p = /*#__PURE__*/function (_PointCloudFilter_js_3) {
        _inherits(_class2, _PointCloudFilter_js_3);

        var _super7 = _createSuper(_class2);

        function _class2(e) {
          var _this9;

          _classCallCheck(this, _class2);

          _this9 = _super7.call(this, e), _this9.mode = "exclude", _this9.type = "value", _this9.values = [];
          return _this9;
        }

        _createClass(_class2, [{
          key: "clone",
          value: function clone() {
            return new p({
              field: this.field,
              mode: this.mode,
              values: Object(_core_lang_js__WEBPACK_IMPORTED_MODULE_2__["clone"])(this.values)
            });
          }
        }]);

        return _class2;
      }(_PointCloudFilter_js__WEBPACK_IMPORTED_MODULE_11__["default"]);

      Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_5__["property"])({
        type: ["exclude", "include"],
        json: {
          write: {
            enabled: !0,
            isRequired: !0
          }
        }
      })], u.prototype, "mode", void 0), Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_enumeration_js__WEBPACK_IMPORTED_MODULE_6__["enumeration"])({
        pointCloudValueFilter: "value"
      })], u.prototype, "type", void 0), Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_5__["property"])({
        type: [Number],
        json: {
          write: {
            enabled: !0,
            isRequired: !0
          }
        }
      })], u.prototype, "values", void 0), u = p = Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_subclass_js__WEBPACK_IMPORTED_MODULE_7__["subclass"])("esri.layers.pointCloudFilters.PointCloudValueFilter")], u);
      var l = u;
      /* harmony default export */

      __webpack_exports__["default"] = l;
      /***/
    },

    /***/
    "gLc9":
    /*!*****************************************************************!*\
      !*** ./node_modules/@arcgis/core/layers/support/FieldsIndex.js ***!
      \*****************************************************************/

    /*! exports provided: default */

    /***/
    function gLc9(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /*
      All material copyright ESRI, All Rights Reserved, unless otherwise specified.
      See https://js.arcgis.com/4.18/esri/copyright.txt for details.
      */


      function t(t) {
        return "date" === t.type || "esriFieldTypeDate" === t.type;
      }

      function e(t) {
        return t.toLowerCase().trim();
      }
      /* harmony default export */


      __webpack_exports__["default"] = /*#__PURE__*/function () {
        function _class3(s) {
          _classCallCheck(this, _class3);

          if (this.fields = s, this._fieldsMap = new Map(), this._dateFieldsSet = new Set(), this.dateFields = [], !s) return;
          var i = [];

          var _iterator3 = _createForOfIteratorHelper(s),
              _step3;

          try {
            for (_iterator3.s(); !(_step3 = _iterator3.n()).done;) {
              var d = _step3.value;

              var _s3 = d && d.name;

              if (_s3) {
                var a = e(_s3);
                this._fieldsMap.set(_s3, d), this._fieldsMap.set(a, d), i.push(a), t(d) && (this.dateFields.push(d), this._dateFieldsSet.add(d));
              }
            }
          } catch (err) {
            _iterator3.e(err);
          } finally {
            _iterator3.f();
          }

          i.sort(), this.uid = i.join(",");
        }

        _createClass(_class3, [{
          key: "destroy",
          value: function destroy() {
            this._fieldsMap.clear();
          }
        }, {
          key: "has",
          value: function has(t) {
            return null != this.get(t);
          }
        }, {
          key: "get",
          value: function get(t) {
            return null != t ? this._fieldsMap.get(t) || this._fieldsMap.get(e(t)) : void 0;
          }
        }, {
          key: "isDateField",
          value: function isDateField(t) {
            return this._dateFieldsSet.has(this.get(t));
          }
        }, {
          key: "normalizeFieldName",
          value: function normalizeFieldName(t) {
            var e = this.get(t);
            if (e) return e.name;
          }
        }]);

        return _class3;
      }();
      /***/

    },

    /***/
    "gRed":
    /*!********************************************************************************!*\
      !*** ./node_modules/@arcgis/core/layers/pointCloudFilters/PointCloudFilter.js ***!
      \********************************************************************************/

    /*! exports provided: default */

    /***/
    function gRed(module, __webpack_exports__, __webpack_require__) {
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


      var t = /*#__PURE__*/function (_core_JSONSupport_js_) {
        _inherits(t, _core_JSONSupport_js_);

        var _super8 = _createSuper(t);

        function t(r) {
          var _this10;

          _classCallCheck(this, t);

          _this10 = _super8.call(this, r), _this10.field = null, _this10.type = null;
          return _this10;
        }

        _createClass(t, [{
          key: "clone",
          value: function clone() {
            return console.warn(".clone() is not implemented for " + this.declaredClass), null;
          }
        }]);

        return t;
      }(_core_JSONSupport_js__WEBPACK_IMPORTED_MODULE_9__["JSONSupport"]);

      Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_4__["property"])({
        type: String,
        json: {
          write: {
            enabled: !0,
            isRequired: !0
          }
        }
      })], t.prototype, "field", void 0), Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_4__["property"])({
        readOnly: !0,
        nonNullable: !0,
        json: {
          read: !1
        }
      })], t.prototype, "type", void 0), t = Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_subclass_js__WEBPACK_IMPORTED_MODULE_5__["subclass"])("esri.layers.pointCloudFilters.PointCloudFilter")], t);
      var p = t;
      /* harmony default export */

      __webpack_exports__["default"] = p;
      /***/
    },

    /***/
    "l8Gk":
    /*!*****************************************************************************!*\
      !*** ./node_modules/@arcgis/core/renderers/support/pointCloud/typeUtils.js ***!
      \*****************************************************************************/

    /*! exports provided: types */

    /***/
    function l8Gk(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "types", function () {
        return i;
      });
      /* harmony import */


      var _PointCloudRenderer_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ../../PointCloudRenderer.js */
      "dzHX");
      /* harmony import */


      var _PointCloudClassBreaksRenderer_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ../../PointCloudClassBreaksRenderer.js */
      "Tg0p");
      /* harmony import */


      var _PointCloudRGBRenderer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ../../PointCloudRGBRenderer.js */
      "pd9S");
      /* harmony import */


      var _PointCloudStretchRenderer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ../../PointCloudStretchRenderer.js */
      "V4u7");
      /* harmony import */


      var _PointCloudUniqueValueRenderer_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ../../PointCloudUniqueValueRenderer.js */
      "ofcG");
      /*
      All material copyright ESRI, All Rights Reserved, unless otherwise specified.
      See https://js.arcgis.com/4.18/esri/copyright.txt for details.
      */


      var i = {
        key: "type",
        base: _PointCloudRenderer_js__WEBPACK_IMPORTED_MODULE_0__["default"],
        typeMap: {
          "point-cloud-class-breaks": _PointCloudClassBreaksRenderer_js__WEBPACK_IMPORTED_MODULE_1__["default"],
          "point-cloud-rgb": _PointCloudRGBRenderer_js__WEBPACK_IMPORTED_MODULE_2__["default"],
          "point-cloud-stretch": _PointCloudStretchRenderer_js__WEBPACK_IMPORTED_MODULE_3__["default"],
          "point-cloud-unique-value": _PointCloudUniqueValueRenderer_js__WEBPACK_IMPORTED_MODULE_4__["default"]
        },
        errorContext: "renderer"
      };
      /***/
    },

    /***/
    "mKtp":
    /*!*************************************************************************!*\
      !*** ./node_modules/@arcgis/core/layers/pointCloudFilters/typeUtils.js ***!
      \*************************************************************************/

    /*! exports provided: types */

    /***/
    function mKtp(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "types", function () {
        return e;
      });
      /* harmony import */


      var _PointCloudFilter_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ./PointCloudFilter.js */
      "gRed");
      /* harmony import */


      var _PointCloudBitfieldFilter_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./PointCloudBitfieldFilter.js */
      "7dZg");
      /* harmony import */


      var _PointCloudReturnFilter_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./PointCloudReturnFilter.js */
      "8i82");
      /* harmony import */


      var _PointCloudValueFilter_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./PointCloudValueFilter.js */
      "auUa");
      /*
      All material copyright ESRI, All Rights Reserved, unless otherwise specified.
      See https://js.arcgis.com/4.18/esri/copyright.txt for details.
      */


      var e = {
        key: "type",
        base: _PointCloudFilter_js__WEBPACK_IMPORTED_MODULE_0__["default"],
        typeMap: {
          value: _PointCloudValueFilter_js__WEBPACK_IMPORTED_MODULE_3__["default"],
          bitfield: _PointCloudBitfieldFilter_js__WEBPACK_IMPORTED_MODULE_1__["default"],
          "return": _PointCloudReturnFilter_js__WEBPACK_IMPORTED_MODULE_2__["default"]
        }
      };
      /***/
    },

    /***/
    "pd9S":
    /*!**********************************************************************!*\
      !*** ./node_modules/@arcgis/core/renderers/PointCloudRGBRenderer.js ***!
      \**********************************************************************/

    /*! exports provided: default */

    /***/
    function pd9S(module, __webpack_exports__, __webpack_require__) {
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


      var _core_accessorSupport_decorators_enumeration_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ../core/accessorSupport/decorators/enumeration.js */
      "RI0u");
      /* harmony import */


      var _core_accessorSupport_decorators_subclass_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! ../core/accessorSupport/decorators/subclass.js */
      "04ZG");
      /* harmony import */


      var _core_urlUtils_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! ../core/urlUtils.js */
      "4EHJ");
      /* harmony import */


      var _core_uuid_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! ../core/uuid.js */
      "ju1D");
      /* harmony import */


      var _portal_support_resourceExtension_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
      /*! ../portal/support/resourceExtension.js */
      "9AIY");
      /* harmony import */


      var _PointCloudRenderer_js__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
      /*! ./PointCloudRenderer.js */
      "dzHX");
      /*
      All material copyright ESRI, All Rights Reserved, unless otherwise specified.
      See https://js.arcgis.com/4.18/esri/copyright.txt for details.
      */


      var i;

      var c = i = /*#__PURE__*/function (_PointCloudRenderer_j) {
        _inherits(_class4, _PointCloudRenderer_j);

        var _super9 = _createSuper(_class4);

        function _class4(r) {
          var _this11;

          _classCallCheck(this, _class4);

          _this11 = _super9.call(this, r), _this11.type = "point-cloud-rgb", _this11.field = null;
          return _this11;
        }

        _createClass(_class4, [{
          key: "clone",
          value: function clone() {
            return new i(_objectSpread(_objectSpread({}, this.cloneProperties()), {}, {
              field: Object(_core_lang_js__WEBPACK_IMPORTED_MODULE_2__["clone"])(this.field)
            }));
          }
        }]);

        return _class4;
      }(_PointCloudRenderer_js__WEBPACK_IMPORTED_MODULE_11__["default"]);

      Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_enumeration_js__WEBPACK_IMPORTED_MODULE_6__["enumeration"])({
        pointCloudRGBRenderer: "point-cloud-rgb"
      })], c.prototype, "type", void 0), Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_5__["property"])({
        type: String,
        json: {
          write: !0
        }
      })], c.prototype, "field", void 0), c = i = Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_subclass_js__WEBPACK_IMPORTED_MODULE_7__["subclass"])("esri.renderers.PointCloudRGBRenderer")], c);
      var n = c;
      /* harmony default export */

      __webpack_exports__["default"] = n;
      /***/
    }
  }]);
})();
//# sourceMappingURL=PointCloudLayer-js-es5.js.map