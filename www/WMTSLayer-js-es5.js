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

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["WMTSLayer-js"], {
    /***/
    "42pd":
    /*!******************************************************************!*\
      !*** ./node_modules/@arcgis/core/layers/support/WMTSSublayer.js ***!
      \******************************************************************/

    /*! exports provided: default */

    /***/
    function pd(module, __webpack_exports__, __webpack_require__) {
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


      var _core_JSONSupport_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
      /*! ../../core/JSONSupport.js */
      "ag7Y");
      /* harmony import */


      var _geometry_Extent_js__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
      /*! ../../geometry/Extent.js */
      "OvF4");
      /* harmony import */


      var _core_Collection_js__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
      /*! ../../core/Collection.js */
      "LE9a");
      /* harmony import */


      var _TileMatrixSet_js__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
      /*! ./TileMatrixSet.js */
      "Ihio");
      /* harmony import */


      var _WMTSStyle_js__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(
      /*! ./WMTSStyle.js */
      "LPK3");
      /*
      All material copyright ESRI, All Rights Reserved, unless otherwise specified.
      See https://js.arcgis.com/4.18/esri/copyright.txt for details.
      */


      var _p;

      var m = _p = /*#__PURE__*/function (_core_JSONSupport_js_) {
        _inherits(p, _core_JSONSupport_js_);

        var _super = _createSuper(p);

        function p(t) {
          var _this;

          _classCallCheck(this, p);

          _this = _super.call(this, t), _this.fullExtent = null, _this.imageFormats = null, _this.id = null, _this.layer = null, _this.styles = null, _this.tileMatrixSetId = null, _this.tileMatrixSets = null;
          return _this;
        }

        _createClass(p, [{
          key: "description",
          get: function get() {
            return this._get("description");
          },
          set: function set(t) {
            this._set("description", t);
          }
        }, {
          key: "readFullExtent",
          value: function readFullExtent(t, e) {
            return (t = e.fullExtent) ? _geometry_Extent_js__WEBPACK_IMPORTED_MODULE_11__["default"].fromJSON(t) : null;
          }
        }, {
          key: "imageFormat",
          get: function get() {
            var t = this._get("imageFormat");

            return t || (t = this.imageFormats && this.imageFormats.length ? this.imageFormats[0] : ""), t;
          },
          set: function set(t) {
            var e = this.imageFormats;
            t && (t.indexOf("image/") > -1 || e && -1 === e.indexOf(t)) && (-1 === t.indexOf("image/") && (t = "image/" + t), e && -1 === e.indexOf(t)) ? console.error("The layer doesn't support the format of " + t) : this._set("imageFormat", t);
          }
        }, {
          key: "styleId",
          get: function get() {
            var t = this._get("styleId");

            return t || (t = this.styles && this.styles.length ? this.styles.getItemAt(0).id : ""), t;
          },
          set: function set(t) {
            this._set("styleId", t);
          }
        }, {
          key: "title",
          get: function get() {
            return this._get("title");
          },
          set: function set(t) {
            this._set("title", t);
          }
        }, {
          key: "tileMatrixSet",
          get: function get() {
            var _this2 = this;

            return this.tileMatrixSets ? this.tileMatrixSets.find(function (t) {
              return t.id === _this2.tileMatrixSetId;
            }) : null;
          }
        }, {
          key: "clone",
          value: function clone() {
            var t = new _p();
            return this.hasOwnProperty("description") && (t.description = this.description), this.hasOwnProperty("imageFormats") && (t.imageFormats = this.imageFormats && this.imageFormats.slice()), this.hasOwnProperty("imageFormat") && (t.imageFormat = this.imageFormat), this.hasOwnProperty("fullExtent") && (t.fullExtent = this.fullExtent && this.fullExtent.clone()), this.hasOwnProperty("id") && (t.id = this.id), this.hasOwnProperty("layer") && (t.layer = this.layer), this.hasOwnProperty("styleId") && (t.styleId = this.styleId), this.hasOwnProperty("styles") && (t.styles = this.styles && this.styles.clone()), this.hasOwnProperty("tileMatrixSetId") && (t.tileMatrixSetId = this.tileMatrixSetId), this.hasOwnProperty("tileMatrixSets") && (t.tileMatrixSets = this.tileMatrixSets.clone()), this.hasOwnProperty("title") && (t.title = this.title), t;
          }
        }]);

        return p;
      }(_core_JSONSupport_js__WEBPACK_IMPORTED_MODULE_10__["JSONSupport"]);

      Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_4__["property"])()], m.prototype, "description", null), Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_4__["property"])()], m.prototype, "fullExtent", void 0), Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_reader_js__WEBPACK_IMPORTED_MODULE_5__["reader"])("fullExtent", ["fullExtent"])], m.prototype, "readFullExtent", null), Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_4__["property"])({
        dependsOn: ["imageFormats"]
      })], m.prototype, "imageFormat", null), Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_4__["property"])({
        json: {
          read: {
            source: "formats"
          }
        }
      })], m.prototype, "imageFormats", void 0), Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_4__["property"])()], m.prototype, "id", void 0), Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_4__["property"])()], m.prototype, "layer", void 0), Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_4__["property"])({
        dependsOn: ["styles"]
      })], m.prototype, "styleId", null), Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_4__["property"])({
        type: _core_Collection_js__WEBPACK_IMPORTED_MODULE_12__["default"].ofType(_WMTSStyle_js__WEBPACK_IMPORTED_MODULE_14__["default"]),
        json: {
          read: {
            source: "styles"
          }
        }
      })], m.prototype, "styles", void 0), Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_4__["property"])({
        value: null,
        json: {
          write: {
            ignoreOrigin: !0
          }
        }
      })], m.prototype, "title", null), Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_4__["property"])()], m.prototype, "tileMatrixSetId", void 0), Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_4__["property"])({
        readOnly: !0,
        dependsOn: ["tileMatrixSetId"]
      })], m.prototype, "tileMatrixSet", null), Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_4__["property"])({
        type: _core_Collection_js__WEBPACK_IMPORTED_MODULE_12__["default"].ofType(_TileMatrixSet_js__WEBPACK_IMPORTED_MODULE_13__["default"]),
        json: {
          read: {
            source: "tileMatrixSets"
          }
        }
      })], m.prototype, "tileMatrixSets", void 0), m = _p = Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_subclass_js__WEBPACK_IMPORTED_MODULE_6__["subclass"])("esri.layers.support.WMTSSublayer")], m);
      var h = m;
      /* harmony default export */

      __webpack_exports__["default"] = h;
      /***/
    },

    /***/
    "Ihio":
    /*!*******************************************************************!*\
      !*** ./node_modules/@arcgis/core/layers/support/TileMatrixSet.js ***!
      \*******************************************************************/

    /*! exports provided: default */

    /***/
    function Ihio(module, __webpack_exports__, __webpack_require__) {
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


      var _geometry_Extent_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
      /*! ../../geometry/Extent.js */
      "OvF4");
      /* harmony import */


      var _TileInfo_js__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
      /*! ./TileInfo.js */
      "3/ME");
      /*
      All material copyright ESRI, All Rights Reserved, unless otherwise specified.
      See https://js.arcgis.com/4.18/esri/copyright.txt for details.
      */


      var p;

      var l = p = /*#__PURE__*/function (_core_JSONSupport_js_2) {
        _inherits(_class, _core_JSONSupport_js_2);

        var _super2 = _createSuper(_class);

        function _class(t) {
          var _this3;

          _classCallCheck(this, _class);

          _this3 = _super2.call(this, t), _this3.fullExtent = null, _this3.id = null, _this3.tileInfo = null;
          return _this3;
        }

        _createClass(_class, [{
          key: "clone",
          value: function clone() {
            var t = new p();
            return this.hasOwnProperty("fullExtent") && (t.fullExtent = this.fullExtent && this.fullExtent.clone()), this.hasOwnProperty("id") && (t.id = this.id), this.hasOwnProperty("tileInfo") && (t.tileInfo = this.tileInfo && this.tileInfo.clone()), t;
          }
        }]);

        return _class;
      }(_core_JSONSupport_js__WEBPACK_IMPORTED_MODULE_9__["JSONSupport"]);

      Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_4__["property"])({
        type: _geometry_Extent_js__WEBPACK_IMPORTED_MODULE_10__["default"],
        json: {
          read: {
            source: "fullExtent"
          }
        }
      })], l.prototype, "fullExtent", void 0), Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_4__["property"])({
        type: String,
        json: {
          read: {
            source: "id"
          }
        }
      })], l.prototype, "id", void 0), Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_4__["property"])({
        type: _TileInfo_js__WEBPACK_IMPORTED_MODULE_11__["default"],
        json: {
          read: {
            source: "tileInfo"
          }
        }
      })], l.prototype, "tileInfo", void 0), l = p = Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_subclass_js__WEBPACK_IMPORTED_MODULE_5__["subclass"])("esri.layer.support.TileMatrixSet")], l);
      var n = l;
      /* harmony default export */

      __webpack_exports__["default"] = n;
      /***/
    },

    /***/
    "LPK3":
    /*!***************************************************************!*\
      !*** ./node_modules/@arcgis/core/layers/support/WMTSStyle.js ***!
      \***************************************************************/

    /*! exports provided: default */

    /***/
    function LPK3(module, __webpack_exports__, __webpack_require__) {
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


      var _t;

      var i = _t = /*#__PURE__*/function (_core_JSONSupport_js_3) {
        _inherits(t, _core_JSONSupport_js_3);

        var _super3 = _createSuper(t);

        function t(r) {
          var _this4;

          _classCallCheck(this, t);

          _this4 = _super3.call(this, r), _this4.id = null, _this4.title = null, _this4.description = null, _this4.legendUrl = null;
          return _this4;
        }

        _createClass(t, [{
          key: "clone",
          value: function clone() {
            var r = new _t();
            return this.hasOwnProperty("description") && (r.description = this.description), this.hasOwnProperty("id") && (r.id = this.id), this.hasOwnProperty("isDefault") && (r.isDefault = this.isDefault), this.hasOwnProperty("keywords") && (r.keywords = this.keywords && this.keywords.slice()), this.hasOwnProperty("legendUrl") && (r.legendUrl = this.legendUrl), this.hasOwnProperty("title") && (r.title = this.title), r;
          }
        }]);

        return t;
      }(_core_JSONSupport_js__WEBPACK_IMPORTED_MODULE_9__["JSONSupport"]);

      Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_4__["property"])({
        json: {
          read: {
            source: "id"
          }
        }
      })], i.prototype, "id", void 0), Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_4__["property"])({
        json: {
          read: {
            source: "title"
          }
        }
      })], i.prototype, "title", void 0), Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_4__["property"])({
        json: {
          read: {
            source: "abstract"
          }
        }
      })], i.prototype, "description", void 0), Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_4__["property"])({
        json: {
          read: {
            source: "legendUrl"
          }
        }
      })], i.prototype, "legendUrl", void 0), Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_4__["property"])({
        json: {
          read: {
            source: "isDefault"
          }
        }
      })], i.prototype, "isDefault", void 0), Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_4__["property"])({
        json: {
          read: {
            source: "keywords"
          }
        }
      })], i.prototype, "keywords", void 0), i = _t = Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_subclass_js__WEBPACK_IMPORTED_MODULE_5__["subclass"])("esri.layer.support.WMTSStyle")], i);
      var p = i;
      /* harmony default export */

      __webpack_exports__["default"] = p;
      /***/
    },

    /***/
    "Oo85":
    /*!***************************************************************!*\
      !*** ./node_modules/@arcgis/core/layers/support/wmtsUtils.js ***!
      \***************************************************************/

    /*! exports provided: getTileUrlFromResourceUrls, getTileUrlTemplateFromResourceUrls, parseCapabilities, parseResourceInfo */

    /***/
    function Oo85(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "getTileUrlFromResourceUrls", function () {
        return g;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "getTileUrlTemplateFromResourceUrls", function () {
        return x;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "parseCapabilities", function () {
        return a;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "parseResourceInfo", function () {
        return p;
      });
      /* harmony import */


      var _core_Error_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ../../core/Error.js */
      "zlDU");
      /* harmony import */


      var _geometry_support_WKIDUnitConversion_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ../../geometry/support/WKIDUnitConversion.js */
      "LIH3");
      /* harmony import */


      var _geometry_SpatialReference_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ../../geometry/SpatialReference.js */
      "WZb1");
      /* harmony import */


      var _geometry_Point_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ../../geometry/Point.js */
      "SuVq");
      /* harmony import */


      var _geometry_Extent_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ../../geometry/Extent.js */
      "OvF4");
      /* harmony import */


      var _geometry_projectionEllipsoid_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ../../geometry/projectionEllipsoid.js */
      "9pTf");
      /* harmony import */


      var _TileInfo_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ./TileInfo.js */
      "3/ME");
      /*
      All material copyright ESRI, All Rights Reserved, unless otherwise specified.
      See https://js.arcgis.com/4.18/esri/copyright.txt for details.
      */


      var s = [[3819, 3819], [3821, 3824], [3889, 3889], [3906, 3906], [4001, 4025], [4027, 4036], [4039, 4047], [4052, 4055], [4074, 4075], [4080, 4081], [4120, 4176], [4178, 4185], [4188, 4216], [4218, 4289], [4291, 4304], [4306, 4319], [4322, 4326], [4463, 4463], [4470, 4470], [4475, 4475], [4483, 4483], [4490, 4490], [4555, 4558], [4600, 4646], [4657, 4765], [4801, 4811], [4813, 4821], [4823, 4824], [4901, 4904], [5013, 5013], [5132, 5132], [5228, 5229], [5233, 5233], [5246, 5246], [5252, 5252], [5264, 5264], [5324, 5340], [5354, 5354], [5360, 5360], [5365, 5365], [5370, 5373], [5381, 5381], [5393, 5393], [5451, 5451], [5464, 5464], [5467, 5467], [5489, 5489], [5524, 5524], [5527, 5527], [5546, 5546], [2044, 2045], [2081, 2083], [2085, 2086], [2093, 2093], [2096, 2098], [2105, 2132], [2169, 2170], [2176, 2180], [2193, 2193], [2200, 2200], [2206, 2212], [2319, 2319], [2320, 2462], [2523, 2549], [2551, 2735], [2738, 2758], [2935, 2941], [2953, 2953], [3006, 3030], [3034, 3035], [3038, 3051], [3058, 3059], [3068, 3068], [3114, 3118], [3126, 3138], [3150, 3151], [3300, 3301], [3328, 3335], [3346, 3346], [3350, 3352], [3366, 3366], [3389, 3390], [3416, 3417], [3833, 3841], [3844, 3850], [3854, 3854], [3873, 3885], [3907, 3910], [4026, 4026], [4037, 4038], [4417, 4417], [4434, 4434], [4491, 4554], [4839, 4839], [5048, 5048], [5105, 5130], [5253, 5259], [5269, 5275], [5343, 5349], [5479, 5482], [5518, 5519], [5520, 5520], [20004, 20032], [20064, 20092], [21413, 21423], [21473, 21483], [21896, 21899], [22171, 22177], [22181, 22187], [22191, 22197], [25884, 25884], [27205, 27232], [27391, 27398], [27492, 27492], [28402, 28432], [28462, 28492], [30161, 30179], [30800, 30800], [31251, 31259], [31275, 31279], [31281, 31290], [31466, 31700]];

      function a(t, l) {
        t = t.replace(/ows:/gi, "");
        var a = new DOMParser().parseFromString(t, "text/xml").documentElement,
            p = new Map(),
            d = new Map(),
            g = c("Contents", a);
        if (!g) throw new _core_Error_js__WEBPACK_IMPORTED_MODULE_0__["default"]("wmtslayer:wmts-capabilities-xml-is-not-valid");
        var x = c("OperationsMetadata", a),
            y = x && x.querySelector("[name='GetTile']"),
            T = y && y.getElementsByTagName("Get"),
            w = T && Array.prototype.slice.call(T),
            M = l && l.url && l.url.indexOf("https") > -1;
        var E,
            S,
            V = l.serviceMode,
            b = l && l.url;
        if (w && w.length && w.some(function (e) {
          var t = c("Constraint", e);
          return !t || f("AllowedValues", "Value", V, t) ? (b = e.attributes[0].nodeValue, !0) : (!t || f("AllowedValues", "Value", "RESTful", t) || f("AllowedValues", "Value", "REST", t) ? S = e.attributes[0].nodeValue : t && !f("AllowedValues", "Value", "KVP", t) || (E = e.attributes[0].nodeValue), !1);
        }), !b) if (S) b = S, V = "RESTful";else if (E) b = E, V = "KVP";else {
          var e = c("ServiceMetadataURL", a);
          b = e && e.getAttribute("xlink:href");
        }
        var A = b.indexOf("1.0.0/");
        -1 === A && "RESTful" === V ? b += "/" : A > -1 && (b = b.substring(0, A)), "KVP" === V && (b += A > -1 ? "" : "?"), M && (b = b.replace(/^http:/i, "https:"));
        return {
          copyright: m("ServiceIdentification>AccessConstraints", a),
          layers: Array.prototype.slice.call(g.getElementsByTagName("Layer")).map(function (e) {
            var t = m("Identifier", e);
            return p.set(t, e), function (e, t, l, a) {
              var p = m("Abstract", t),
                  d = u("Format", t),
                  g = function (e) {
                var t = c("WGS84BoundingBox", e),
                    i = t ? m("LowerCorner", t).split(" ") : ["-180", "-90"],
                    n = t ? m("UpperCorner", t).split(" ") : ["180", "90"];
                return {
                  xmin: parseFloat(i[0]),
                  ymin: parseFloat(i[1]),
                  xmax: parseFloat(n[0]),
                  ymax: parseFloat(n[1]),
                  spatialReference: {
                    wkid: 4326
                  }
                };
              }(t),
                  x = function (e, t) {
                return Array.prototype.slice.call(e.getElementsByTagName("Style")).map(function (e) {
                  var i = c("LegendURL", e),
                      n = c("Keywords", e),
                      r = n && u("Keyword", n);
                  var l = i && i.getAttribute("xlink:href");
                  t && (l = l && l.replace(/^http:/i, "https:"));
                  return {
                    "abstract": m("Abstract", e),
                    id: m("Identifier", e),
                    isDefault: "true" === e.getAttribute("isDefault"),
                    keywords: r,
                    legendUrl: l,
                    title: m("Title", e)
                  };
                });
              }(t, a),
                  y = m("Title", t),
                  T = function (e, t) {
                return u("TileMatrixSet", e).map(function (l) {
                  return function (e, t, l) {
                    var a = u("TileMatrix", f("TileMatrixSetLink", "TileMatrixSet", e, t)),
                        p = f("TileMatrixSet", "Identifier", e, l),
                        d = function (e) {
                      var t = m("SupportedCRS", e);
                      t && (t = t.toLowerCase());
                      var r = parseInt(t.split(":").pop(), 10);
                      900913 !== r && 3857 !== r || (r = 102100);
                      var l = !1;
                      t.indexOf("crs84") > -1 || t.indexOf("crs:84") > -1 ? (r = 4326, l = !0) : t.indexOf("crs83") > -1 || t.indexOf("crs:83") > -1 ? (r = 4269, l = !0) : (t.indexOf("crs27") > -1 || t.indexOf("crs:27") > -1) && (r = 4267, l = !0);
                      var o = new _geometry_SpatialReference_js__WEBPACK_IMPORTED_MODULE_2__["default"]({
                        wkid: r
                      }),
                          a = m("TopLeftCorner", c("TileMatrix", e)).split(" "),
                          p = a[0].split("E").map(function (e) {
                        return Number(e);
                      }),
                          u = a[1].split("E").map(function (e) {
                        return Number(e);
                      });
                      var f,
                          d = p[0],
                          g = u[0];
                      p.length > 1 && (d = p[0] * Math.pow(10, p[1]));
                      u.length > 1 && (g = u[0] * Math.pow(10, u[1]));
                      var x = l && 4326 === r && 90 === d && -180 === g;
                      return s.some(function (e, i) {
                        var a = Number(t.split(":").pop());
                        return a >= e[0] && a <= e[1] || 4326 === r && (!l || x) ? (f = new _geometry_Point_js__WEBPACK_IMPORTED_MODULE_3__["default"](g, d, o), !0) : (i === s.length - 1 && (f = new _geometry_Point_js__WEBPACK_IMPORTED_MODULE_3__["default"](d, g, o)), !1);
                      }), f;
                    }(p),
                        g = d.spatialReference,
                        x = g.wkid,
                        y = c("TileMatrix", p),
                        T = [parseInt(m("TileWidth", y), 10), parseInt(m("TileHeight", y), 10)],
                        w = [];

                    if (a.length) a.forEach(function (t, i) {
                      var n = f("TileMatrix", "Identifier", t, p);
                      w.push(h(n, x, i, e));
                    });else {
                      Array.prototype.slice.call(p.getElementsByTagName("TileMatrix")).forEach(function (t, i) {
                        w.push(h(t, x, i, e));
                      });
                    }

                    var M = function (e, t, i, n) {
                      var l = c("BoundingBox", e);
                      var o, s, a, p, u, f;
                      l && (o = m("LowerCorner", l).split(" "), s = m("UpperCorner", l).split(" "));
                      if (o && o.length > 1 && s && s.length > 1) a = parseFloat(o[0]), u = parseFloat(o[1]), p = parseFloat(s[0]), f = parseFloat(s[1]);else {
                        var r = c("TileMatrix", e),
                            _l = parseFloat(m("MatrixWidth", r)),
                            _o = parseFloat(m("MatrixHeight", r));

                        a = t.x, f = t.y, p = a + _l * i[0] * n.resolution, u = f - _o * i[1] * n.resolution;
                      }
                      return new _geometry_Extent_js__WEBPACK_IMPORTED_MODULE_4__["default"](a, u, p, f, t.spatialReference);
                    }(p, d, T, w[0]);

                    return {
                      id: e,
                      fullExtent: M.toJSON(),
                      tileInfo: new _TileInfo_js__WEBPACK_IMPORTED_MODULE_6__["default"]({
                        dpi: 96,
                        spatialReference: g,
                        size: T,
                        origin: d,
                        lods: w
                      }).toJSON()
                    };
                  }(l, e, t);
                });
              }(t, l);

              return {
                id: e,
                fullExtent: g,
                description: p,
                formats: d,
                styles: x,
                title: y,
                tileMatrixSets: T
              };
            }(t, e, g, M);
          }),
          tileUrl: b,
          serviceMode: V,
          layerMap: p,
          dimensionMap: d
        };
      }

      function p(e) {
        return e.layers.forEach(function (e) {
          e.tileMatrixSets.forEach(function (e) {
            var t = e.tileInfo;
            96 !== t.dpi && (t.lods.forEach(function (i) {
              i.scale = 96 * i.scale / t.dpi, i.resolution = y(t.spatialReference.wkid, 90.71428571428571 * i.scale / 96, e.id);
            }), t.dpi = 96);
          });
        }), e;
      }

      function c(e, t) {
        var i = t.getElementsByTagName(e);
        return i && i.length > 0 ? i[0] : null;
      }

      function u(e, t) {
        return Array.prototype.slice.call(t.getElementsByTagName(e)).map(function (e) {
          return e.textContent;
        });
      }

      function m(e, t) {
        return e.split(">").forEach(function (e) {
          t && (t = c(e, t));
        }), t && t.textContent;
      }

      function f(e, t, i, n) {
        var r;
        return Array.prototype.slice.call(n.childNodes).some(function (n) {
          if (n.nodeName.indexOf(e) > -1) {
            var _e = c(t, n),
                l = _e && _e.textContent;

            if (l === i || i.split(":") && i.split(":")[1] === l) return r = n, !0;
          }

          return !1;
        }), r;
      }

      function d(e, t) {
        var i = [],
            n = e.layerMap.get(t);
        if (!n) return;
        var r = Array.prototype.slice.call(n.getElementsByTagName("ResourceURL")),
            l = n.getElementsByTagName("Dimension");
        var o, s, a, p;
        return l.length && (o = m("Identifier", l[0]), s = u("Default", l[0]) || u("Value", l[0])), l.length > 1 && (a = m("Identifier", l[1]), p = u("Default", l[1]) || u("Value", l[1])), e.dimensionMap.set(t, {
          dimensions: s,
          dimensions2: p
        }), r.forEach(function (e) {
          var t = e.getAttribute("template");

          if ("tile" === e.getAttribute("resourceType")) {
            if (o && s.length) if (t.indexOf("{" + o + "}") > -1) t = t.replace("{" + o + "}", "{dimensionValue}");else {
              var _e2 = t.toLowerCase().indexOf("{" + o.toLowerCase() + "}");

              _e2 > -1 && (t = t.substring(0, _e2) + "{dimensionValue}" + t.substring(_e2 + o.length + 2));
            }
            if (a && p.length) if (t.indexOf("{" + a + "}") > -1) t = t.replace("{" + a + "}", "{dimensionValue2}");else {
              var _e3 = t.toLowerCase().indexOf("{" + a.toLowerCase() + "}");

              _e3 > -1 && (t = t.substring(0, _e3) + "{dimensionValue2}" + t.substring(_e3 + a.length + 2));
            }
            i.push({
              template: t,
              format: e.getAttribute("format"),
              resourceType: "tile"
            });
          }
        }), i;
      }

      function g(e, t, i, n, r, l, o, s) {
        var a = e.dimensionMap,
            p = d(e, t),
            c = a.get(t).dimensions && a.get(t).dimensions[0],
            u = a.get(t).dimensions2 && a.get(t).dimensions2[0];
        var m = "";

        if (p && p.length > 0) {
          var _e4 = null;
          p.some(function (t) {
            return t.format === n && (_e4 = t, !0);
          }), _e4 || (_e4 = p[o % p.length]), m = _e4.template.replace(/\{Style\}/gi, r).replace(/\{TileMatrixSet\}/gi, i).replace(/\{TileMatrix\}/gi, l).replace(/\{TileRow\}/gi, "" + o).replace(/\{TileCol\}/gi, "" + s).replace(/\{dimensionValue\}/gi, c).replace(/\{dimensionValue2\}/gi, u);
        }

        return m;
      }

      function x(e, t, i, n) {
        var r = e.dimensionMap,
            l = d(e, t);
        var o = "";

        if (l && l.length > 0) {
          var _e5 = r.get(t).dimensions && r.get(t).dimensions[0],
              _s = r.get(t).dimensions2 && r.get(t).dimensions2[0];

          o = l[0].template, o.indexOf(".xxx") === o.length - 4 && (o = o.slice(0, o.length - 4)), o = o.replace(/\{Style\}/gi, n), o = o.replace(/\{TileMatrixSet\}/gi, i), o = o.replace(/\{TileMatrix\}/gi, "{level}"), o = o.replace(/\{TileRow\}/gi, "{row}"), o = o.replace(/\{TileCol\}/gi, "{col}"), o = o.replace(/\{dimensionValue\}/gi, _e5), o = o.replace(/\{dimensionValue2\}/gi, _s);
        }

        return o;
      }

      function h(e, t, i, n) {
        var r = m("Identifier", e),
            l = m("ScaleDenominator", e).split("E").map(function (e) {
          return Number(e);
        });
        var o;
        o = l.length > 1 ? l[0] * Math.pow(10, l[1]) : l[0];
        var s = y(t, o, n);
        return o *= 1.058267716535433, {
          level: i,
          levelValue: r,
          scale: o,
          resolution: s
        };
      }

      function y(e, i, n) {
        var r;
        return r = _geometry_support_WKIDUnitConversion_js__WEBPACK_IMPORTED_MODULE_1__["default"].hasOwnProperty(String(e)) ? _geometry_support_WKIDUnitConversion_js__WEBPACK_IMPORTED_MODULE_1__["default"].values[_geometry_support_WKIDUnitConversion_js__WEBPACK_IMPORTED_MODULE_1__["default"][e]] : "default028mm" === n ? 6370997 * Math.PI / 180 : Object(_geometry_projectionEllipsoid_js__WEBPACK_IMPORTED_MODULE_5__["getReferenceEllipsoidFromWKID"])(e).metersPerDegree, 7 * i / 25e3 / r;
      }
      /***/

    },

    /***/
    "sDlQ":
    /*!*******************************************************!*\
      !*** ./node_modules/@arcgis/core/layers/WMTSLayer.js ***!
      \*******************************************************/

    /*! exports provided: default */

    /***/
    function sDlQ(module, __webpack_exports__, __webpack_require__) {
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


      var _core_accessorSupport_decorators_writer_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! ../core/accessorSupport/decorators/writer.js */
      "Cduq");
      /* harmony import */


      var _core_Error_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
      /*! ../core/Error.js */
      "zlDU");
      /* harmony import */


      var _core_urlUtils_js__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
      /*! ../core/urlUtils.js */
      "4EHJ");
      /* harmony import */


      var _core_uuid_js__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
      /*! ../core/uuid.js */
      "ju1D");
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


      var _core_Collection_js__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(
      /*! ../core/Collection.js */
      "LE9a");
      /* harmony import */


      var _request_js__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(
      /*! ../request.js */
      "Lqtk");
      /* harmony import */


      var _core_Handles_js__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(
      /*! ../core/Handles.js */
      "r0DZ");
      /* harmony import */


      var _Layer_js__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(
      /*! ./Layer.js */
      "pqNC");
      /* harmony import */


      var _core_MultiOriginJSONSupport_js__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(
      /*! ../core/MultiOriginJSONSupport.js */
      "5pQd");
      /* harmony import */


      var _mixins_OperationalLayer_js__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(
      /*! ./mixins/OperationalLayer.js */
      "uRH/");
      /* harmony import */


      var _mixins_BlendLayer_js__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(
      /*! ./mixins/BlendLayer.js */
      "mXvl");
      /* harmony import */


      var _mixins_PortalLayer_js__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(
      /*! ./mixins/PortalLayer.js */
      "DbUH");
      /* harmony import */


      var _mixins_RefreshableLayer_js__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(
      /*! ./mixins/RefreshableLayer.js */
      "jhcG");
      /* harmony import */


      var _mixins_ScaleRangeLayer_js__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(
      /*! ./mixins/ScaleRangeLayer.js */
      "WmKv");
      /* harmony import */


      var _support_TileInfo_js__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(
      /*! ./support/TileInfo.js */
      "3/ME");
      /* harmony import */


      var _support_WMTSLayerInfo_js__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(
      /*! ./support/WMTSLayerInfo.js */
      "OYGz");
      /* harmony import */


      var _WebTileLayer_js__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(
      /*! ./WebTileLayer.js */
      "ncPp");
      /* harmony import */


      var _support_WMTSSublayer_js__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(
      /*! ./support/WMTSSublayer.js */
      "42pd");
      /* harmony import */


      var _support_wmtsUtils_js__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(
      /*! ./support/wmtsUtils.js */
      "Oo85");
      /*
      All material copyright ESRI, All Rights Reserved, unless otherwise specified.
      See https://js.arcgis.com/4.18/esri/copyright.txt for details.
      */


      var E = {
        "image/png": ".png",
        "image/png8": ".png",
        "image/png24": ".png",
        "image/png32": ".png",
        "image/jpg": ".jpg",
        "image/jpeg": ".jpeg",
        "image/gif": ".gif",
        "image/bmp": ".bmp",
        "image/tiff": ".tif",
        "image/jpgpng": "",
        "image/jpegpng": "",
        "image/unknown": ""
      },
          _ = new Set(["version", "service", "request", "layer", "style", "format", "tilematrixset", "tilematrix", "tilerow", "tilecol"]);

      var O = /*#__PURE__*/function (_Object) {
        _inherits(O, _Object);

        var _super4 = _createSuper(O);

        function O() {
          var _this5;

          _classCallCheck(this, O);

          for (var _len = arguments.length, e = new Array(_len), _key = 0; _key < _len; _key++) {
            e[_key] = arguments[_key];
          }

          _this5 = _super4.call.apply(_super4, [this].concat(e)), _this5._sublayersHandles = new _core_Handles_js__WEBPACK_IMPORTED_MODULE_18__["default"](), _this5.copyright = "", _this5.customParameters = null, _this5.customLayerParameters = null, _this5.fullExtent = null, _this5.operationalLayerType = "WebTiledLayer", _this5.resourceInfo = null, _this5.serviceMode = "RESTful", _this5.sublayers = null, _this5.type = "wmts", _this5.version = "1.0.0", _this5.watch("activeLayer", function (e, t) {
            t && (t.layer = null), e && (e.layer = _assertThisInitialized(_this5));
          }, !0), _this5.watch("sublayers", function (e, t) {
            t && (t.forEach(function (e) {
              e.layer = null;
            }), _this5._sublayersHandles.removeAll(), _this5._sublayersHandles = null), e && (e.forEach(function (e) {
              e.layer = _assertThisInitialized(_this5);
            }), _this5._sublayersHandles || (_this5._sublayersHandles = new _core_Handles_js__WEBPACK_IMPORTED_MODULE_18__["default"]()), _this5._sublayersHandles.add([e.on("after-add", function (_ref) {
              var e = _ref.item;
              e.layer = _assertThisInitialized(_this5);
            }), e.on("after-remove", function (_ref2) {
              var e = _ref2.item;
              e.layer = null;
            })]));
          }, !0);
          return _this5;
        }

        _createClass(O, [{
          key: "normalizeCtorArgs",
          value: function normalizeCtorArgs(e, t) {
            return "string" == typeof e ? _objectSpread({
              url: e
            }, t) : e;
          }
        }, {
          key: "load",
          value: function load(e) {
            var _this6 = this;

            if ("KVP" === this.serviceMode || "RESTful" === this.serviceMode) return this.addResolvingPromise(this.loadFromPortal({
              supportedTypes: ["WMTS"]
            }, e).then(function () {
              return _this6._fetchService(e);
            })["catch"](function (e) {
              throw new _core_Error_js__WEBPACK_IMPORTED_MODULE_10__["default"]("wmtslayer:unsupported-service-data", "Invalid response from the WMTS service.", {
                error: e
              });
            })), Object(_core_promiseUtils_js__WEBPACK_IMPORTED_MODULE_14__["resolve"])(this);
            console.error("WMTS mode could only be 'KVP' or 'RESTful'");
          }
        }, {
          key: "activeLayer",
          get: function get() {
            return this._get("activeLayer");
          },
          set: function set(e) {
            this._set("activeLayer", e);
          }
        }, {
          key: "readActiveLayerFromService",
          value: function readActiveLayerFromService(e, t, r) {
            var _this7 = this;

            var s;
            return this.activeLayer ? t.layers.some(function (e) {
              return e.id === _this7.activeLayer.id && (s = e, !0);
            }) : (this.activeLayer = new _support_WMTSSublayer_js__WEBPACK_IMPORTED_MODULE_29__["default"](), s = t.layers[0]), this.activeLayer.read(s, r), this.activeLayer;
          }
        }, {
          key: "readActiveLayerFromItemOrWebDoc",
          value: function readActiveLayerFromItemOrWebDoc(e, t) {
            var r = t.templateUrl,
                s = t.wmtsInfo,
                i = r ? this._getLowerCasedUrlParams(r) : null,
                a = s && s.layerIdentifier;
            var o = null;
            var l = s && s.tileMatrixSet;
            l && (Array.isArray(l) ? l.length && (o = l[0]) : o = l);
            var n = i && i.format,
                m = i && i.style;
            return new _support_WMTSSublayer_js__WEBPACK_IMPORTED_MODULE_29__["default"]({
              id: a,
              imageFormat: n,
              styleId: m,
              tileMatrixSetId: o
            });
          }
        }, {
          key: "writeActiveLayer",
          value: function writeActiveLayer(e, t, s, i) {
            var a = this.activeLayer;
            t.templateUrl = this.getUrlTemplate(a.id, a.tileMatrixSetId, a.imageFormat, a.styleId);
            var o = Object(_core_object_js__WEBPACK_IMPORTED_MODULE_3__["getDeepValue"])("tileMatrixSet.tileInfo", a);
            t.tileInfo = o ? o.toJSON(i) : null, t.wmtsInfo = _objectSpread(_objectSpread({}, t.wmtsInfo), {}, {
              layerIdentifier: a.id,
              tileMatrixSet: a.tileMatrixSetId
            });
          }
        }, {
          key: "readCustomParameters",
          value: function readCustomParameters(e, t) {
            var r = t.wmtsInfo;
            return r ? this._mergeParams(r.customParameters, r.url) : null;
          }
        }, {
          key: "fullExtents",
          get: function get() {
            var e = [];
            return this.activeLayer.tileMatrixSets.forEach(function (t) {
              t.fullExtent && e.push(t.fullExtent);
            }), e;
          }
        }, {
          key: "readServiceMode",
          value: function readServiceMode(e, t) {
            return t.templateUrl.indexOf("?") > -1 ? "KVP" : "RESTful";
          }
        }, {
          key: "readSublayersFromService",
          value: function readSublayersFromService(e, t, r) {
            return function (e, t) {
              return e.map(function (e) {
                var r = new _support_WMTSSublayer_js__WEBPACK_IMPORTED_MODULE_29__["default"]();
                return r.read(e, t), r;
              });
            }(t.layers, r);
          }
        }, {
          key: "supportedSpatialReferences",
          get: function get() {
            return this.activeLayer.tileMatrixSets.map(function (e) {
              return e.tileInfo.spatialReference;
            }).toArray();
          }
        }, {
          key: "title",
          get: function get() {
            var e, t;
            return null != (e = null == (t = this.activeLayer) ? void 0 : t.title) ? e : "Layer";
          },
          set: function set(e) {
            e ? this._override("title", e) : this._clearOverride("title");
          }
        }, {
          key: "url",
          get: function get() {
            return this._get("url");
          },
          set: function set(e) {
            e && "/" === e.substr(-1) ? this._set("url", e.slice(0, -1)) : this._set("url", e);
          }
        }, {
          key: "createWebTileLayer",
          value: function createWebTileLayer(e) {
            var t = this.getUrlTemplate(this.activeLayer.id, this.activeLayer.tileMatrixSetId, this.activeLayer.imageFormat, this.activeLayer.styleId),
                r = this._getTileMatrixSetById(e.tileMatrixSetId).tileInfo,
                s = e.fullExtent,
                i = new _support_WMTSLayerInfo_js__WEBPACK_IMPORTED_MODULE_27__["default"]({
              layerIdentifier: e.id,
              tileMatrixSet: e.tileMatrixSetId,
              url: this.url
            });

            return this.customLayerParameters && (i.customLayerParameters = this.customLayerParameters), this.customParameters && (i.customParameters = this.customParameters), new _WebTileLayer_js__WEBPACK_IMPORTED_MODULE_28__["default"]({
              fullExtent: s,
              urlTemplate: t,
              tileInfo: r,
              wmtsInfo: i
            });
          }
        }, {
          key: "fetchTile",
          value: function fetchTile(e, t, r) {
            var s = this.getTileUrl(e, t, r);
            return Object(_request_js__WEBPACK_IMPORTED_MODULE_17__["default"])(s, {
              responseType: "image"
            }).then(function (e) {
              return e.data;
            });
          }
        }, {
          key: "findSublayerById",
          value: function findSublayerById(e) {
            return this.sublayers.find(function (t) {
              return t.id === e;
            });
          }
        }, {
          key: "getTileUrl",
          value: function getTileUrl(e, t, r) {
            var s = this._getTileMatrixSetById(this.activeLayer.tileMatrixSetId).tileInfo.lods[e],
                i = s ? s.levelValue ? s.levelValue : "".concat(s.level) : "".concat(e);

            var a = this.resourceInfo ? "" : Object(_support_wmtsUtils_js__WEBPACK_IMPORTED_MODULE_30__["getTileUrlFromResourceUrls"])({
              dimensionMap: this.dimensionMap,
              layerMap: this.layerMap
            }, this.activeLayer.id, this.activeLayer.tileMatrixSetId, this.activeLayer.imageFormat, this.activeLayer.styleId, i, t, r);

            if (!a) {
              a = this.getUrlTemplate(this.activeLayer.id, this.activeLayer.tileMatrixSetId, this.activeLayer.imageFormat, this.activeLayer.styleId).replace(/\{level\}/gi, i).replace(/\{row\}/gi, "".concat(t)).replace(/\{col\}/gi, "".concat(r));
            }

            return a = this._appendCustomLayerParameters(a), a;
          }
        }, {
          key: "getUrlTemplate",
          value: function getUrlTemplate(e, t, r, s) {
            if (!this.resourceInfo) {
              var _r = Object(_support_wmtsUtils_js__WEBPACK_IMPORTED_MODULE_30__["getTileUrlTemplateFromResourceUrls"])({
                dimensionMap: this.dimensionMap,
                layerMap: this.layerMap
              }, e, t, s);

              if (_r) return _r;
            }

            if ("KVP" === this.serviceMode) return this.url + "?SERVICE=WMTS&VERSION=" + this.version + "&REQUEST=GetTile&LAYER=" + e + "&STYLE=" + s + "&FORMAT=" + r + "&TILEMATRIXSET=" + t + "&TILEMATRIX={level}&TILEROW={row}&TILECOL={col}";

            if ("RESTful" === this.serviceMode) {
              var i = "";
              return E[r.toLowerCase()] && (i = E[r.toLowerCase()]), this.url + e + "/" + s + "/" + t + "/{level}/{row}/{col}" + i;
            }

            return "";
          }
        }, {
          key: "_fetchService",
          value: function () {
            var _fetchService2 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(e) {
              var t, r;
              return regeneratorRuntime.wrap(function _callee$(_context) {
                while (1) {
                  switch (_context.prev = _context.next) {
                    case 0:
                      if (!this.resourceInfo) {
                        _context.next = 4;
                        break;
                      }

                      "KVP" === this.resourceInfo.serviceMode && (this.url += this.url.indexOf("?") > -1 ? "" : "?"), t = {
                        ssl: !1,
                        data: this.resourceInfo
                      };
                      _context.next = 23;
                      break;

                    case 4:
                      _context.prev = 4;
                      _context.next = 7;
                      return this._getCapabilities(this.serviceMode, e);

                    case 7:
                      t = _context.sent;
                      _context.next = 23;
                      break;

                    case 10:
                      _context.prev = 10;
                      _context.t0 = _context["catch"](4);
                      r = "KVP" === this.serviceMode ? "RESTful" : "KVP";
                      _context.prev = 13;
                      _context.next = 16;
                      return this._getCapabilities(r, e);

                    case 16:
                      t = _context.sent;
                      this.serviceMode = r;
                      _context.next = 23;
                      break;

                    case 20:
                      _context.prev = 20;
                      _context.t1 = _context["catch"](13);
                      throw new _core_Error_js__WEBPACK_IMPORTED_MODULE_10__["default"]("wmtslayer:unsupported-service-data", "Services does not support RESTful or KVP service modes.", {
                        error: _context.t1
                      });

                    case 23:
                      this.resourceInfo ? t.data = Object(_support_wmtsUtils_js__WEBPACK_IMPORTED_MODULE_30__["parseResourceInfo"])(t.data) : t.data = Object(_support_wmtsUtils_js__WEBPACK_IMPORTED_MODULE_30__["parseCapabilities"])(t.data, {
                        serviceMode: this.serviceMode,
                        url: this.url
                      }), t.data && this.read(t.data, {
                        origin: "service"
                      });

                    case 24:
                    case "end":
                      return _context.stop();
                  }
                }
              }, _callee, this, [[4, 10], [13, 20]]);
            }));

            function _fetchService(_x) {
              return _fetchService2.apply(this, arguments);
            }

            return _fetchService;
          }()
        }, {
          key: "_getCapabilities",
          value: function () {
            var _getCapabilities2 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee2(e, t) {
              var r;
              return regeneratorRuntime.wrap(function _callee2$(_context2) {
                while (1) {
                  switch (_context2.prev = _context2.next) {
                    case 0:
                      r = this._getCapabilitiesUrl(e);
                      _context2.next = 3;
                      return Object(_request_js__WEBPACK_IMPORTED_MODULE_17__["default"])(r, _objectSpread(_objectSpread({}, t), {}, {
                        responseType: "text"
                      }));

                    case 3:
                      return _context2.abrupt("return", _context2.sent);

                    case 4:
                    case "end":
                      return _context2.stop();
                  }
                }
              }, _callee2, this);
            }));

            function _getCapabilities(_x2, _x3) {
              return _getCapabilities2.apply(this, arguments);
            }

            return _getCapabilities;
          }()
        }, {
          key: "_getTileMatrixSetById",
          value: function _getTileMatrixSetById(e) {
            return this.findSublayerById(this.activeLayer.id).tileMatrixSets.find(function (t) {
              return t.id === e;
            });
          }
        }, {
          key: "_appendCustomParameters",
          value: function _appendCustomParameters(e) {
            if (this.customParameters) for (var _t2 in this.customParameters) {
              e += (-1 === e.indexOf("?") ? "?" : "&") + _t2 + "=" + encodeURIComponent(this.customParameters[_t2]);
            }
            return e;
          }
        }, {
          key: "_appendCustomLayerParameters",
          value: function _appendCustomLayerParameters(e) {
            if (this.customLayerParameters || this.customParameters) {
              var r = _objectSpread(_objectSpread({}, Object(_core_lang_js__WEBPACK_IMPORTED_MODULE_2__["clone"])(this.customParameters || {})), this.customLayerParameters);

              for (var _t3 in r) {
                e += (-1 === e.indexOf("?") ? "?" : "&") + _t3 + "=" + encodeURIComponent(r[_t3]);
              }
            }

            return e;
          }
        }, {
          key: "_getCapabilitiesUrl",
          value: function _getCapabilitiesUrl(e) {
            var t;
            return this.url = this.url.split("?")[0], "KVP" === e ? t = this.url + "?request=GetCapabilities&service=WMTS&version=" + this.version : "RESTful" === e && (t = this.url + "/" + this.version + "/WMTSCapabilities.xml"), t = this._appendCustomParameters(t), t;
          }
        }, {
          key: "_getLowerCasedUrlParams",
          value: function _getLowerCasedUrlParams(e) {
            if (!e) return null;
            var t = Object(_core_urlUtils_js__WEBPACK_IMPORTED_MODULE_11__["urlToObject"])(e).query;
            if (!t) return null;
            var r = {};
            return Object.keys(t).forEach(function (e) {
              r[e.toLowerCase()] = t[e];
            }), r;
          }
        }, {
          key: "_mergeParams",
          value: function _mergeParams(e, r) {
            var s = this._getLowerCasedUrlParams(r);

            if (s) {
              var _r2 = Object.keys(s);

              _r2.length && (e = e ? Object(_core_lang_js__WEBPACK_IMPORTED_MODULE_2__["clone"])(e) : {}, _r2.forEach(function (t) {
                e.hasOwnProperty(t) || _.has(t) || (e[t] = s[t]);
              }));
            }

            return e;
          }
        }]);

        return O;
      }(Object(_mixins_BlendLayer_js__WEBPACK_IMPORTED_MODULE_22__["BlendLayer"])(Object(_mixins_RefreshableLayer_js__WEBPACK_IMPORTED_MODULE_24__["RefreshableLayer"])(Object(_mixins_ScaleRangeLayer_js__WEBPACK_IMPORTED_MODULE_25__["ScaleRangeLayer"])(Object(_mixins_OperationalLayer_js__WEBPACK_IMPORTED_MODULE_21__["OperationalLayer"])(Object(_mixins_PortalLayer_js__WEBPACK_IMPORTED_MODULE_23__["PortalLayer"])(Object(_core_MultiOriginJSONSupport_js__WEBPACK_IMPORTED_MODULE_20__["MultiOriginJSONMixin"])(_Layer_js__WEBPACK_IMPORTED_MODULE_19__["default"])))))));

      Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_6__["property"])()], O.prototype, "dimensionMap", void 0), Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_6__["property"])()], O.prototype, "layerMap", void 0), Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_6__["property"])({
        type: _support_WMTSSublayer_js__WEBPACK_IMPORTED_MODULE_29__["default"],
        dependsOn: ["sublayers"],
        json: {
          origins: {
            "web-document": {
              write: {
                ignoreOrigin: !0
              }
            }
          }
        }
      })], O.prototype, "activeLayer", null), Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_reader_js__WEBPACK_IMPORTED_MODULE_7__["reader"])("service", "activeLayer", ["layers"])], O.prototype, "readActiveLayerFromService", null), Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_reader_js__WEBPACK_IMPORTED_MODULE_7__["reader"])(["web-document", "portal-item"], "activeLayer", ["wmtsInfo"])], O.prototype, "readActiveLayerFromItemOrWebDoc", null), Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_writer_js__WEBPACK_IMPORTED_MODULE_9__["writer"])(["web-document", "portal-item"], "activeLayer", {
        templateUrl: {
          type: String
        },
        tileInfo: {
          type: _support_TileInfo_js__WEBPACK_IMPORTED_MODULE_26__["default"]
        },
        "wmtsInfo.layerIdentifier": {
          type: String
        },
        "wmtsInfo.tileMatrixSet": {
          type: String
        }
      })], O.prototype, "writeActiveLayer", null), Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_6__["property"])({
        type: String,
        value: "",
        json: {
          write: !0
        }
      })], O.prototype, "copyright", void 0), Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_6__["property"])({
        type: ["show", "hide"]
      })], O.prototype, "listMode", void 0), Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_6__["property"])({
        json: {
          origins: {
            "web-document": {
              read: {
                source: ["wmtsInfo.customParameters", "wmtsInfo.url"]
              },
              write: {
                target: "wmtsInfo.customParameters"
              }
            },
            "portal-item": {
              read: {
                source: ["wmtsInfo.customParameters", "wmtsInfo.url"]
              },
              write: {
                target: "wmtsInfo.customParameters"
              }
            }
          }
        }
      })], O.prototype, "customParameters", void 0), Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_reader_js__WEBPACK_IMPORTED_MODULE_7__["reader"])("web-document", "customParameters"), Object(_core_accessorSupport_decorators_reader_js__WEBPACK_IMPORTED_MODULE_7__["reader"])("portal-item", "customParameters")], O.prototype, "readCustomParameters", null), Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_6__["property"])({
        json: {
          origins: {
            "web-document": {
              read: {
                source: "wmtsInfo.customLayerParameters"
              },
              write: {
                target: "wmtsInfo.customLayerParameters"
              }
            },
            "portal-item": {
              read: {
                source: "wmtsInfo.customLayerParameters"
              },
              write: {
                target: "wmtsInfo.customLayerParameters"
              }
            }
          }
        }
      })], O.prototype, "customLayerParameters", void 0), Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_6__["property"])({
        type: _geometry_Extent_js__WEBPACK_IMPORTED_MODULE_15__["default"],
        json: {
          write: {
            ignoreOrigin: !0
          },
          origins: {
            "web-document": {
              read: {
                source: "fullExtent"
              }
            },
            "portal-item": {
              read: {
                source: "fullExtent"
              }
            }
          }
        }
      })], O.prototype, "fullExtent", void 0), Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_6__["property"])({
        readOnly: !0,
        dependsOn: ["activeLayer"]
      })], O.prototype, "fullExtents", null), Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_6__["property"])({
        type: ["WebTiledLayer"]
      })], O.prototype, "operationalLayerType", void 0), Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_6__["property"])()], O.prototype, "resourceInfo", void 0), Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_6__["property"])()], O.prototype, "serviceMode", void 0), Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_reader_js__WEBPACK_IMPORTED_MODULE_7__["reader"])(["portal-item", "web-document"], "serviceMode", ["templateUrl"])], O.prototype, "readServiceMode", null), Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_6__["property"])({
        type: _core_Collection_js__WEBPACK_IMPORTED_MODULE_16__["default"].ofType(_support_WMTSSublayer_js__WEBPACK_IMPORTED_MODULE_29__["default"])
      })], O.prototype, "sublayers", void 0), Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_reader_js__WEBPACK_IMPORTED_MODULE_7__["reader"])("service", "sublayers", ["layers"])], O.prototype, "readSublayersFromService", null), Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_6__["property"])({
        readOnly: !0,
        dependsOn: ["activeLayer"]
      })], O.prototype, "supportedSpatialReferences", null), Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_6__["property"])({
        dependsOn: ["activeLayer"],
        json: {
          read: {
            source: "title"
          }
        }
      })], O.prototype, "title", null), Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_6__["property"])({
        json: {
          read: !1
        },
        readOnly: !0,
        value: "wmts"
      })], O.prototype, "type", void 0), Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_6__["property"])({
        json: {
          origins: {
            service: {
              read: {
                source: "tileUrl"
              }
            },
            "web-document": {
              read: {
                source: "wmtsInfo.url"
              },
              write: {
                target: "wmtsInfo.url"
              }
            },
            "portal-item": {
              read: {
                source: "wmtsInfo.url"
              },
              write: {
                target: "wmtsInfo.url"
              }
            }
          }
        }
      })], O.prototype, "url", null), Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_6__["property"])()], O.prototype, "version", void 0), O = Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_subclass_js__WEBPACK_IMPORTED_MODULE_8__["subclass"])("esri.layers.WMTSLayer")], O);
      var C = O;
      /* harmony default export */

      __webpack_exports__["default"] = C;
      /***/
    }
  }]);
})();
//# sourceMappingURL=WMTSLayer-js-es5.js.map