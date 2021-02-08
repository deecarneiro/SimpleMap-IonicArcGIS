(function () {
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

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["default~BuildingSceneLayer-js~CSVLayer-js~FeatureLayer-js~MapImageLayer-js~MapNotesLayer-js~RouteLay~17087e09"], {
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

          var _super = _createSuper(c);

          function c() {
            _classCallCheck(this, c);

            return _super.apply(this, arguments);
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
    "ezna":
    /*!****************************************************************!*\
      !*** ./node_modules/@arcgis/core/layers/support/labelUtils.js ***!
      \****************************************************************/

    /*! exports provided: convertTemplatedStringToArcade, getLabelExpression, getLabelExpressionArcade, getLabelExpressionSingleField, getSingleFieldArcadeExpression, getSingleFieldTemplatedString, sqlToTemplateString, templateStringToSql */

    /***/
    function ezna(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "convertTemplatedStringToArcade", function () {
        return p;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "getLabelExpression", function () {
        return l;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "getLabelExpressionArcade", function () {
        return a;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "getLabelExpressionSingleField", function () {
        return c;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "getSingleFieldArcadeExpression", function () {
        return w;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "getSingleFieldTemplatedString", function () {
        return x;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "sqlToTemplateString", function () {
        return o;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "templateStringToSql", function () {
        return i;
      });
      /* harmony import */


      var _core_string_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ../../core/string.js */
      "s7YA");
      /*
      All material copyright ESRI, All Rights Reserved, unless otherwise specified.
      See https://js.arcgis.com/4.18/esri/copyright.txt for details.
      */


      var n = new RegExp("__begin__", "ig"),
          r = new RegExp("__end__", "ig"),
          s = new RegExp("^__begin__", "i"),
          t = new RegExp("__end__$", "i");

      function o(e) {
        return e.replace(new RegExp("\\[", "g"), "{").replace(new RegExp("\\]", "g"), "}");
      }

      function i(e) {
        return e.replace(new RegExp("\\{", "g"), "[").replace(new RegExp("\\}", "g"), "]");
      }

      function l(e) {
        var n = {
          expression: "",
          type: "none"
        };
        return e.labelExpressionInfo ? e.labelExpressionInfo.value ? (n.expression = e.labelExpressionInfo.value, n.type = "conventional") : e.labelExpressionInfo.expression && (n.expression = e.labelExpressionInfo.expression, n.type = "arcade") : null != e.labelExpression && (n.expression = o(e.labelExpression), n.type = "conventional"), n;
      }

      function a(e) {
        var n = l(e);
        if (!n) return null;

        switch (n.type) {
          case "conventional":
            return p(n.expression);

          case "arcade":
            return n.expression;
        }

        return null;
      }

      function c(e) {
        var n = l(e);
        if (!n) return null;

        switch (n.type) {
          case "conventional":
            return x(n.expression);

          case "arcade":
            return w(n.expression);
        }

        return null;
      }

      function p(o) {
        var i;
        return o ? (i = Object(_core_string_js__WEBPACK_IMPORTED_MODULE_0__["replace"])(o, function (e) {
          return '__begin__$feature["' + e + '"]__end__';
        }), i = s.test(i) ? i.replace(s, "") : '"' + i, i = t.test(i) ? i.replace(t, "") : i + '"', i = i.replace(n, '" + ').replace(r, ' + "')) : i = '""', i;
      }

      var u = /^\s*\{([^}]+)\}\s*$/i;

      function x(e) {
        var n = e.match(u);
        return n && n[1].trim() || null;
      }

      var f = /^\s*(?:(?:\$feature\.(\w+))|(?:\$feature\[(["'])([\w\s]+)(\2)\]));?\s*$/i,
          _ = /^\s*(?:(?:\$feature\.(\w+))|(?:\$feature\[(["'])([\w\s]+)(\2)\]));?\s*(?:DomainName\(\s*\$feature\s*,\s*(["'])(\1|\3)(\5)\s*\));?\s*$/i,
          g = /^\s*(?:DomainName\(\s*\$feature\s*,\s*(["'])([\w\s]+)(\1)\s*\));?\s*$/i;

      function w(e) {
        if (!e) return null;

        var n = f.exec(e) || _.exec(e);

        return n ? n[1] || n[3] : (n = g.exec(e), n ? n[2] : null);
      }
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
        function _class(s) {
          _classCallCheck(this, _class);

          if (this.fields = s, this._fieldsMap = new Map(), this._dateFieldsSet = new Set(), this.dateFields = [], !s) return;
          var i = [];

          var _iterator = _createForOfIteratorHelper(s),
              _step;

          try {
            for (_iterator.s(); !(_step = _iterator.n()).done;) {
              var d = _step.value;

              var _s = d && d.name;

              if (_s) {
                var a = e(_s);
                this._fieldsMap.set(_s, d), this._fieldsMap.set(a, d), i.push(a), t(d) && (this.dateFields.push(d), this._dateFieldsSet.add(d));
              }
            }
          } catch (err) {
            _iterator.e(err);
          } finally {
            _iterator.f();
          }

          i.sort(), this.uid = i.join(",");
        }

        _createClass(_class, [{
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

        return _class;
      }();
      /***/

    },

    /***/
    "gkbi":
    /*!*******************************************************************!*\
      !*** ./node_modules/@arcgis/core/symbols/support/defaultsJSON.js ***!
      \*******************************************************************/

    /*! exports provided: defaultColor, defaultOutlineColor, defaultPointSymbolJSON, defaultPolygonSymbolJSON, defaultPolylineSymbolJSON, defaultTextSymbolJSON, errorPointSymbolJSON, errorPolygonSymbolJSON, errorPolylineSymbolJSON */

    /***/
    function gkbi(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "defaultColor", function () {
        return e;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "defaultOutlineColor", function () {
        return i;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "defaultPointSymbolJSON", function () {
        return l;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "defaultPolygonSymbolJSON", function () {
        return S;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "defaultPolylineSymbolJSON", function () {
        return o;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "defaultTextSymbolJSON", function () {
        return t;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "errorPointSymbolJSON", function () {
        return r;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "errorPolygonSymbolJSON", function () {
        return y;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "errorPolylineSymbolJSON", function () {
        return s;
      });
      /*
      All material copyright ESRI, All Rights Reserved, unless otherwise specified.
      See https://js.arcgis.com/4.18/esri/copyright.txt for details.
      */


      var e = [252, 146, 31, 255],
          i = [153, 153, 153, 255],
          l = {
        type: "esriSMS",
        style: "esriSMSCircle",
        size: 6,
        color: e,
        outline: {
          type: "esriSLS",
          style: "esriSLSSolid",
          width: .75,
          color: [153, 153, 153, 255]
        }
      },
          o = {
        type: "esriSLS",
        style: "esriSLSSolid",
        width: .75,
        color: e
      },
          S = {
        type: "esriSFS",
        style: "esriSFSSolid",
        color: [252, 146, 31, 196],
        outline: {
          type: "esriSLS",
          style: "esriSLSSolid",
          width: .75,
          color: [255, 255, 255, 191]
        }
      },
          t = {
        type: "esriTS",
        color: [255, 255, 255, 255],
        font: {
          family: "arial-unicode-ms",
          size: 10,
          weight: "bold"
        },
        horizontalAlignment: "center",
        kerning: !0,
        haloColor: [0, 0, 0, 255],
        haloSize: 1,
        rotated: !1,
        text: "",
        xoffset: 0,
        yoffset: 0,
        angle: 0
      },
          r = {
        type: "esriSMS",
        style: "esriSMSCircle",
        color: [0, 0, 0, 255],
        outline: null,
        size: 10.5
      },
          s = {
        type: "esriSLS",
        style: "esriSLSSolid",
        color: [0, 0, 0, 255],
        width: 1.5
      },
          y = {
        type: "esriSFS",
        style: "esriSFSSolid",
        color: [0, 0, 0, 255],
        outline: null
      };
      /***/
    },

    /***/
    "psH3":
    /*!***************************************************************!*\
      !*** ./node_modules/@arcgis/core/symbols/support/defaults.js ***!
      \***************************************************************/

    /*! exports provided: defaultPointSymbol2D, defaultPolygonSymbol2D, defaultPolylineSymbol2D, defaultTextSymbol2D, errorPointSymbol2D, errorPolygonSymbol2D, errorPolylineSymbol2D, getDefaultSymbol2D */

    /***/
    function psH3(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "defaultPointSymbol2D", function () {
        return c;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "defaultPolygonSymbol2D", function () {
        return a;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "defaultPolylineSymbol2D", function () {
        return u;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "defaultTextSymbol2D", function () {
        return y;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "errorPointSymbol2D", function () {
        return N;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "errorPolygonSymbol2D", function () {
        return j;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "errorPolylineSymbol2D", function () {
        return O;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "getDefaultSymbol2D", function () {
        return J;
      });
      /* harmony import */


      var _core_has_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ../../core/has.js */
      "wSAH");
      /* harmony import */


      var _core_maybe_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ../../core/maybe.js */
      "srIe");
      /* harmony import */


      var _SimpleLineSymbol_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ../SimpleLineSymbol.js */
      "21Ip");
      /* harmony import */


      var _SimpleFillSymbol_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ../SimpleFillSymbol.js */
      "DXYb");
      /* harmony import */


      var _SimpleMarkerSymbol_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ../SimpleMarkerSymbol.js */
      "Tcmu");
      /* harmony import */


      var _TextSymbol_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ../TextSymbol.js */
      "Ibpv");
      /* harmony import */


      var _defaultsJSON_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ./defaultsJSON.js */
      "gkbi");
      /*
      All material copyright ESRI, All Rights Reserved, unless otherwise specified.
      See https://js.arcgis.com/4.18/esri/copyright.txt for details.
      */


      var c = _SimpleMarkerSymbol_js__WEBPACK_IMPORTED_MODULE_4__["default"].fromJSON(_defaultsJSON_js__WEBPACK_IMPORTED_MODULE_6__["defaultPointSymbolJSON"]),
          u = _SimpleLineSymbol_js__WEBPACK_IMPORTED_MODULE_2__["default"].fromJSON(_defaultsJSON_js__WEBPACK_IMPORTED_MODULE_6__["defaultPolylineSymbolJSON"]),
          a = _SimpleFillSymbol_js__WEBPACK_IMPORTED_MODULE_3__["default"].fromJSON(_defaultsJSON_js__WEBPACK_IMPORTED_MODULE_6__["defaultPolygonSymbolJSON"]),
          y = _TextSymbol_js__WEBPACK_IMPORTED_MODULE_5__["default"].fromJSON(_defaultsJSON_js__WEBPACK_IMPORTED_MODULE_6__["defaultTextSymbolJSON"]);

      function J(o) {
        if (Object(_core_maybe_js__WEBPACK_IMPORTED_MODULE_1__["isNone"])(o)) return null;

        switch (o.type) {
          case "mesh":
            return null;

          case "point":
          case "multipoint":
            return c;

          case "polyline":
            return u;

          case "polygon":
          case "extent":
            return a;
        }

        return null;
      }

      var N = _SimpleMarkerSymbol_js__WEBPACK_IMPORTED_MODULE_4__["default"].fromJSON(_defaultsJSON_js__WEBPACK_IMPORTED_MODULE_6__["errorPointSymbolJSON"]),
          O = _SimpleLineSymbol_js__WEBPACK_IMPORTED_MODULE_2__["default"].fromJSON(_defaultsJSON_js__WEBPACK_IMPORTED_MODULE_6__["errorPolylineSymbolJSON"]),
          j = _SimpleFillSymbol_js__WEBPACK_IMPORTED_MODULE_3__["default"].fromJSON(_defaultsJSON_js__WEBPACK_IMPORTED_MODULE_6__["errorPolygonSymbolJSON"]);
      /***/

    },

    /***/
    "rgLt":
    /*!*************************************************************************!*\
      !*** ./node_modules/@arcgis/core/layers/support/LabelExpressionInfo.js ***!
      \*************************************************************************/

    /*! exports provided: default */

    /***/
    function rgLt(module, __webpack_exports__, __webpack_require__) {
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


      var _core_accessorSupport_decorators_writer_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! ../../core/accessorSupport/decorators/writer.js */
      "Cduq");
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


      var _core_JSONSupport_js__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
      /*! ../../core/JSONSupport.js */
      "ag7Y");
      /* harmony import */


      var _labelUtils_js__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
      /*! ./labelUtils.js */
      "ezna");
      /*
      All material copyright ESRI, All Rights Reserved, unless otherwise specified.
      See https://js.arcgis.com/4.18/esri/copyright.txt for details.
      */


      var _l;

      var n = _l = /*#__PURE__*/function (_core_JSONSupport_js_) {
        _inherits(l, _core_JSONSupport_js_);

        var _super2 = _createSuper(l);

        function l() {
          var _this;

          _classCallCheck(this, l);

          _this = _super2.apply(this, arguments), _this.expression = null, _this.title = null, _this.value = null;
          return _this;
        }

        _createClass(l, [{
          key: "readExpression",
          value: function readExpression(r, e) {
            return e.value ? Object(_labelUtils_js__WEBPACK_IMPORTED_MODULE_12__["convertTemplatedStringToArcade"])(e.value) : r;
          }
        }, {
          key: "writeExpression",
          value: function writeExpression(r, e, o) {
            null != this.value && (r = Object(_labelUtils_js__WEBPACK_IMPORTED_MODULE_12__["convertTemplatedStringToArcade"])(this.value)), e[o] = r;
          }
        }, {
          key: "clone",
          value: function clone() {
            return new _l({
              expression: this.expression,
              title: this.title,
              value: this.value
            });
          }
        }]);

        return l;
      }(_core_JSONSupport_js__WEBPACK_IMPORTED_MODULE_11__["JSONSupport"]);

      Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_4__["property"])({
        type: String,
        json: {
          write: {
            allowNull: !0
          }
        }
      })], n.prototype, "expression", void 0), Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_4__["property"])({
        type: String,
        json: {
          write: !0,
          origins: {
            "web-scene": {
              write: !1
            }
          }
        }
      })], n.prototype, "title", void 0), Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_4__["property"])({
        json: {
          read: !1,
          write: !1
        }
      })], n.prototype, "value", void 0), Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_reader_js__WEBPACK_IMPORTED_MODULE_5__["reader"])("expression", ["expression", "value"])], n.prototype, "readExpression", null), Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_writer_js__WEBPACK_IMPORTED_MODULE_7__["writer"])("expression")], n.prototype, "writeExpression", null), n = _l = Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_subclass_js__WEBPACK_IMPORTED_MODULE_6__["subclass"])("esri.layers.support.LabelExpressionInfo")], n);
      var u = n;
      /* harmony default export */

      __webpack_exports__["default"] = u;
      /***/
    },

    /***/
    "wkZP":
    /*!****************************************************************!*\
      !*** ./node_modules/@arcgis/core/layers/support/LabelClass.js ***!
      \****************************************************************/

    /*! exports provided: default */

    /***/
    function wkZP(module, __webpack_exports__, __webpack_require__) {
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


      var _chunks_symbols_js__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(
      /*! ../../chunks/symbols.js */
      "nNR5");
      /* harmony import */


      var _labelUtils_js__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(
      /*! ./labelUtils.js */
      "ezna");
      /* harmony import */


      var _LabelExpressionInfo_js__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(
      /*! ./LabelExpressionInfo.js */
      "rgLt");
      /* harmony import */


      var _symbols_support_defaults_js__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(
      /*! ../../symbols/support/defaults.js */
      "psH3");
      /*
      All material copyright ESRI, All Rights Reserved, unless otherwise specified.
      See https://js.arcgis.com/4.18/esri/copyright.txt for details.
      */


      var _w;

      var d = new _core_jsonMap_js__WEBPACK_IMPORTED_MODULE_6__["JSONMap"]({
        esriServerPointLabelPlacementAboveCenter: "above-center",
        esriServerPointLabelPlacementAboveLeft: "above-left",
        esriServerPointLabelPlacementAboveRight: "above-right",
        esriServerPointLabelPlacementBelowCenter: "below-center",
        esriServerPointLabelPlacementBelowLeft: "below-left",
        esriServerPointLabelPlacementBelowRight: "below-right",
        esriServerPointLabelPlacementCenterCenter: "center-center",
        esriServerPointLabelPlacementCenterLeft: "center-left",
        esriServerPointLabelPlacementCenterRight: "center-right",
        esriServerLinePlacementAboveAfter: "above-after",
        esriServerLinePlacementAboveAlong: "above-along",
        esriServerLinePlacementAboveBefore: "above-before",
        esriServerLinePlacementAboveStart: "above-start",
        esriServerLinePlacementAboveEnd: "above-end",
        esriServerLinePlacementBelowAfter: "below-after",
        esriServerLinePlacementBelowAlong: "below-along",
        esriServerLinePlacementBelowBefore: "below-before",
        esriServerLinePlacementBelowStart: "below-start",
        esriServerLinePlacementBelowEnd: "below-end",
        esriServerLinePlacementCenterAfter: "center-after",
        esriServerLinePlacementCenterAlong: "center-along",
        esriServerLinePlacementCenterBefore: "center-before",
        esriServerLinePlacementCenterStart: "center-start",
        esriServerLinePlacementCenterEnd: "center-end",
        esriServerPolygonPlacementAlwaysHorizontal: "always-horizontal"
      }, {
        ignoreUnknown: !0
      });

      function y(e) {
        return !e || "service" !== e.origin && !(e.layer && "map-image" === e.layer.type);
      }

      var x = _w = /*#__PURE__*/function (_core_JSONSupport_js_2) {
        _inherits(w, _core_JSONSupport_js_2);

        var _super3 = _createSuper(w);

        function w(e) {
          var _this2;

          _classCallCheck(this, w);

          _this2 = _super3.call(this, e), _this2.type = "label", _this2.name = null, _this2.deconflictionStrategy = "static", _this2.labelExpression = null, _this2.labelExpressionInfo = null, _this2.labelPlacement = null, _this2.maxScale = 0, _this2.minScale = 0, _this2.symbol = _symbols_support_defaults_js__WEBPACK_IMPORTED_MODULE_17__["defaultTextSymbol2D"], _this2.useCodedValues = void 0, _this2.where = null;
          return _this2;
        }

        _createClass(w, [{
          key: "readLabelExpression",
          value: function readLabelExpression(e, r) {
            var t = r.labelExpressionInfo;
            if (!t || !t.value && !t.expression) return e;
          }
        }, {
          key: "writeLabelExpression",
          value: function writeLabelExpression(e, r, t, o) {
            if (this.labelExpressionInfo && (y(o) || o && "service" === o.origin)) if (null != this.labelExpressionInfo.value) e = Object(_labelUtils_js__WEBPACK_IMPORTED_MODULE_15__["templateStringToSql"])(this.labelExpressionInfo.value);else if (null != this.labelExpressionInfo.expression) {
              var _r = Object(_labelUtils_js__WEBPACK_IMPORTED_MODULE_15__["getSingleFieldArcadeExpression"])(this.labelExpressionInfo.expression);

              _r && (e = "[" + _r + "]");
            }
            null != e && (r[t] = e);
          }
        }, {
          key: "writeLabelExpressionInfo",
          value: function writeLabelExpressionInfo(e, r, t, o) {
            if (null == e && null != this.labelExpression && y(o)) e = new _LabelExpressionInfo_js__WEBPACK_IMPORTED_MODULE_16__["default"]({
              expression: this.getLabelExpressionArcade()
            });else if (!e) return;
            var s = e.toJSON(o);
            s.expression && (r[t] = s);
          }
        }, {
          key: "writeMaxScale",
          value: function writeMaxScale(e, r) {
            (e || this.minScale) && (r.maxScale = e);
          }
        }, {
          key: "writeMinScale",
          value: function writeMinScale(e, r) {
            (e || this.maxScale) && (r.minScale = e);
          }
        }, {
          key: "getLabelExpression",
          value: function getLabelExpression() {
            return Object(_labelUtils_js__WEBPACK_IMPORTED_MODULE_15__["getLabelExpression"])(this);
          }
        }, {
          key: "getLabelExpressionArcade",
          value: function getLabelExpressionArcade() {
            return Object(_labelUtils_js__WEBPACK_IMPORTED_MODULE_15__["getLabelExpressionArcade"])(this);
          }
        }, {
          key: "getLabelExpressionSingleField",
          value: function getLabelExpressionSingleField() {
            return Object(_labelUtils_js__WEBPACK_IMPORTED_MODULE_15__["getLabelExpressionSingleField"])(this);
          }
        }, {
          key: "hash",
          value: function hash() {
            return JSON.stringify(this);
          }
        }, {
          key: "clone",
          value: function clone() {
            return new _w({
              deconflictionStrategy: this.deconflictionStrategy,
              labelExpression: this.labelExpression,
              labelExpressionInfo: Object(_core_lang_js__WEBPACK_IMPORTED_MODULE_2__["clone"])(this.labelExpressionInfo),
              labelPlacement: this.labelPlacement,
              maxScale: this.maxScale,
              minScale: this.minScale,
              name: this.name,
              symbol: Object(_core_lang_js__WEBPACK_IMPORTED_MODULE_2__["clone"])(this.symbol),
              where: this.where,
              useCodedValues: this.useCodedValues
            });
          }
        }], [{
          key: "evaluateWhere",
          value: function evaluateWhere(e, r) {
            var t = function t(e, r, _t) {
              switch (r) {
                case "=":
                  return e == _t;

                case "<>":
                  return e != _t;

                case ">":
                  return e > _t;

                case ">=":
                  return e >= _t;

                case "<":
                  return e < _t;

                case "<=":
                  return e <= _t;
              }

              return !1;
            };

            try {
              if (null == e) return !0;
              var o = e.split(" ");
              if (3 === o.length) return t(r[o[0]], o[1], o[2]);

              if (7 === o.length) {
                var _e = t(r[o[0]], o[1], o[2]),
                    s = o[3],
                    n = t(r[o[4]], o[5], o[6]);

                switch (s) {
                  case "AND":
                    return _e && n;

                  case "OR":
                    return _e || n;
                }
              }

              return !1;
            } catch (r) {
              console.log("Error.: can't parse = " + e);
            }
          }
        }]);

        return w;
      }(_core_JSONSupport_js__WEBPACK_IMPORTED_MODULE_13__["JSONSupport"]);

      Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_5__["property"])({
        type: String,
        json: {
          write: !0
        }
      })], x.prototype, "name", void 0), Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_5__["property"])({
        type: String,
        json: {
          write: !0,
          "default": "static",
          origins: {
            "web-scene": {
              write: !1
            }
          }
        }
      })], x.prototype, "deconflictionStrategy", void 0), Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_5__["property"])({
        type: String,
        json: {
          write: {
            allowNull: !0
          }
        }
      })], x.prototype, "labelExpression", void 0), Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_reader_js__WEBPACK_IMPORTED_MODULE_7__["reader"])("labelExpression")], x.prototype, "readLabelExpression", null), Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_writer_js__WEBPACK_IMPORTED_MODULE_9__["writer"])("labelExpression")], x.prototype, "writeLabelExpression", null), Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_5__["property"])({
        type: _LabelExpressionInfo_js__WEBPACK_IMPORTED_MODULE_16__["default"],
        json: {
          write: {
            overridePolicy: function overridePolicy(e, r, t) {
              return y(t) ? {
                allowNull: !0
              } : {
                enabled: !1
              };
            }
          }
        }
      })], x.prototype, "labelExpressionInfo", void 0), Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_writer_js__WEBPACK_IMPORTED_MODULE_9__["writer"])("labelExpressionInfo")], x.prototype, "writeLabelExpressionInfo", null), Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_5__["property"])({
        type: d.apiValues,
        json: {
          type: d.jsonValues,
          read: d.read,
          write: d.write
        }
      })], x.prototype, "labelPlacement", void 0), Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_5__["property"])({
        type: Number
      })], x.prototype, "maxScale", void 0), Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_writer_js__WEBPACK_IMPORTED_MODULE_9__["writer"])("maxScale")], x.prototype, "writeMaxScale", null), Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_5__["property"])({
        type: Number
      })], x.prototype, "minScale", void 0), Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_writer_js__WEBPACK_IMPORTED_MODULE_9__["writer"])("minScale")], x.prototype, "writeMinScale", null), Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_5__["property"])({
        types: _chunks_symbols_js__WEBPACK_IMPORTED_MODULE_14__["d"],
        json: {
          origins: {
            "web-scene": {
              types: _chunks_symbols_js__WEBPACK_IMPORTED_MODULE_14__["g"],
              write: _chunks_symbols_js__WEBPACK_IMPORTED_MODULE_14__["w"],
              "default": null
            }
          },
          write: _chunks_symbols_js__WEBPACK_IMPORTED_MODULE_14__["w"],
          "default": null
        }
      })], x.prototype, "symbol", void 0), Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_5__["property"])({
        type: Boolean,
        json: {
          write: !0
        }
      })], x.prototype, "useCodedValues", void 0), Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_5__["property"])({
        type: String,
        json: {
          write: !0
        }
      })], x.prototype, "where", void 0), x = _w = Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_subclass_js__WEBPACK_IMPORTED_MODULE_8__["subclass"])("esri.layers.support.LabelClass")], x);
      var g = x;
      /* harmony default export */

      __webpack_exports__["default"] = g;
      /***/
    }
  }]);
})();
//# sourceMappingURL=default~BuildingSceneLayer-js~CSVLayer-js~FeatureLayer-js~MapImageLayer-js~MapNotesLayer-js~RouteLay~17087e09-es5.js.map