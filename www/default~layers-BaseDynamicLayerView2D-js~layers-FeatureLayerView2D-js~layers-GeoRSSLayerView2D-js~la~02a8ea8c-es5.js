(function () {
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

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["default~layers-BaseDynamicLayerView2D-js~layers-FeatureLayerView2D-js~layers-GeoRSSLayerView2D-js~la~02a8ea8c"], {
    /***/
    "L1EH":
    /*!********************************************************************!*\
      !*** ./node_modules/@arcgis/core/views/layers/support/ClipRect.js ***!
      \********************************************************************/

    /*! exports provided: default */

    /***/
    function L1EH(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony import */


      var _chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ../../../chunks/tslib.es6.js */
      "pO5D");
      /* harmony import */


      var _core_has_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ../../../core/has.js */
      "wSAH");
      /* harmony import */


      var _core_Logger_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ../../../core/Logger.js */
      "6S2I");
      /* harmony import */


      var _core_accessorSupport_ensureType_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ../../../core/accessorSupport/ensureType.js */
      "zqDF");
      /* harmony import */


      var _core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ../../../core/accessorSupport/decorators/property.js */
      "WbKI");
      /* harmony import */


      var _core_accessorSupport_decorators_subclass_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ../../../core/accessorSupport/decorators/subclass.js */
      "04ZG");
      /* harmony import */


      var _core_urlUtils_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ../../../core/urlUtils.js */
      "4EHJ");
      /* harmony import */


      var _core_uuid_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! ../../../core/uuid.js */
      "ju1D");
      /* harmony import */


      var _portal_support_resourceExtension_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! ../../../portal/support/resourceExtension.js */
      "9AIY");
      /* harmony import */


      var _ClipArea_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! ./ClipArea.js */
      "ZuQG");
      /*
      All material copyright ESRI, All Rights Reserved, unless otherwise specified.
      See https://js.arcgis.com/4.18/esri/copyright.txt for details.
      */


      var _s;

      var p = _s = /*#__PURE__*/function (_ClipArea_js__WEBPACK) {
        _inherits(s, _ClipArea_js__WEBPACK);

        var _super = _createSuper(s);

        function s() {
          var _this;

          _classCallCheck(this, s);

          _this = _super.apply(this, arguments), _this.type = "rect", _this.left = null, _this.right = null, _this.top = null, _this.bottom = null;
          return _this;
        }

        _createClass(s, [{
          key: "clone",
          value: function clone() {
            return new _s({
              left: this.left,
              right: this.right,
              top: this.top,
              bottom: this.bottom
            });
          }
        }, {
          key: "version",
          get: function get() {
            return (this._get("version") || 0) + 1;
          }
        }]);

        return s;
      }(_ClipArea_js__WEBPACK_IMPORTED_MODULE_9__["default"]);

      Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_4__["property"])({
        type: [Number, String],
        json: {
          write: !0
        }
      })], p.prototype, "left", void 0), Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_4__["property"])({
        type: [Number, String],
        json: {
          write: !0
        }
      })], p.prototype, "right", void 0), Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_4__["property"])({
        type: [Number, String],
        json: {
          write: !0
        }
      })], p.prototype, "top", void 0), Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_4__["property"])({
        type: [Number, String],
        json: {
          write: !0
        }
      })], p.prototype, "bottom", void 0), Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_4__["property"])({
        readOnly: !0,
        dependsOn: ["left", "right", "top", "bottom"]
      })], p.prototype, "version", null), p = _s = Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_subclass_js__WEBPACK_IMPORTED_MODULE_5__["subclass"])("esri.views.layers.support.ClipRect")], p);
      var i = p;
      /* harmony default export */

      __webpack_exports__["default"] = i;
      /***/
    },

    /***/
    "NloG":
    /*!*************************************************************!*\
      !*** ./node_modules/@arcgis/core/views/layers/LayerView.js ***!
      \*************************************************************/

    /*! exports provided: default */

    /***/
    function NloG(module, __webpack_exports__, __webpack_require__) {
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


      var _core_Accessor_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! ../../core/Accessor.js */
      "/CmD");
      /* harmony import */


      var _core_Evented_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
      /*! ../../core/Evented.js */
      "zm0L");
      /* harmony import */


      var _core_Identifiable_js__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
      /*! ../../core/Identifiable.js */
      "pdg3");
      /* harmony import */


      var _core_Promise_js__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
      /*! ../../core/Promise.js */
      "+rMe");
      /* harmony import */


      var _core_HandleOwner_js__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
      /*! ../../core/HandleOwner.js */
      "kJYu");
      /*
      All material copyright ESRI, All Rights Reserved, unless otherwise specified.
      See https://js.arcgis.com/4.18/esri/copyright.txt for details.
      */


      var d = /*#__PURE__*/function (_Object) {
        _inherits(d, _Object);

        var _super2 = _createSuper(d);

        function d(e) {
          var _this2;

          _classCallCheck(this, d);

          _this2 = _super2.call(this, e), _this2.layer = null, _this2.parent = null;
          return _this2;
        }

        _createClass(d, [{
          key: "initialize",
          value: function initialize() {
            var _this3 = this;

            this.when()["catch"](function (e) {
              if ("layerview:create-error" !== e.name) {
                var r = _this3.layer && _this3.layer.id || "no id",
                    _s2 = _this3.layer && _this3.layer.title || "no title";

                throw _core_Logger_js__WEBPACK_IMPORTED_MODULE_2__["default"].getLogger(_this3.declaredClass).error("#resolve()", "Failed to resolve layer view (layer title: '".concat(_s2, "', id: '").concat(r, "')"), e), e;
              }
            });
          }
        }, {
          key: "fullOpacity",
          get: function get() {
            var e = function e(_e) {
              return null == _e ? 1 : _e;
            };

            return e(this.get("layer.opacity")) * e(this.get("parent.fullOpacity"));
          }
        }, {
          key: "suspended",
          get: function get() {
            return !this.canResume();
          }
        }, {
          key: "suspendInfo",
          get: function get() {
            return this.getSuspendInfo();
          }
        }, {
          key: "legendEnabled",
          get: function get() {
            return !this.suspended && !0 === this.layer.legendEnabled;
          }
        }, {
          key: "updating",
          get: function get() {
            return !!(this.updatingHandles && this.updatingHandles.updating || this.isUpdating());
          }
        }, {
          key: "visible",
          get: function get() {
            return !0 === this.get("layer.visible");
          },
          set: function set(e) {
            void 0 !== e ? this._override("visible", e) : this._clearOverride("visible");
          }
        }, {
          key: "canResume",
          value: function canResume() {
            return !this.get("parent.suspended") && this.get("view.ready") && this.get("layer.loaded") && this.visible || !1;
          }
        }, {
          key: "getSuspendInfo",
          value: function getSuspendInfo() {
            var e = this.parent && this.parent.suspended ? this.parent.suspendInfo : {};
            return this.view && this.view.ready || (e.viewNotReady = !0), this.layer && this.layer.loaded || (e.layerNotLoaded = !0), this.visible || (e.layerInvisible = !0), e;
          }
        }, {
          key: "isUpdating",
          value: function isUpdating() {
            return !1;
          }
        }]);

        return d;
      }(Object(_core_HandleOwner_js__WEBPACK_IMPORTED_MODULE_13__["HandleOwnerMixin"])(Object(_core_Identifiable_js__WEBPACK_IMPORTED_MODULE_11__["IdentifiableMixin"])(Object(_core_Promise_js__WEBPACK_IMPORTED_MODULE_12__["EsriPromiseMixin"])(_core_Evented_js__WEBPACK_IMPORTED_MODULE_10__["default"].EventedMixin(_core_Accessor_js__WEBPACK_IMPORTED_MODULE_9__["default"])))));

      Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_4__["property"])({
        dependsOn: ["layer.opacity", "parent.fullOpacity"]
      })], d.prototype, "fullOpacity", null), Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_4__["property"])()], d.prototype, "layer", void 0), Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_4__["property"])()], d.prototype, "parent", void 0), Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_4__["property"])({
        readOnly: !0,
        dependsOn: ["visible", "layer.loaded", "parent.suspended", "view?.ready"]
      })], d.prototype, "suspended", null), Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_4__["property"])({
        readOnly: !0,
        dependsOn: ["visible", "layer.loaded", "parent.suspended", "view?.ready"]
      })], d.prototype, "suspendInfo", null), Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_4__["property"])({
        readOnly: !0,
        dependsOn: ["suspended", "layer.legendEnabled?"]
      })], d.prototype, "legendEnabled", null), Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_4__["property"])({
        type: Boolean,
        dependsOn: ["updatingHandles.updating"],
        readOnly: !0
      })], d.prototype, "updating", null), Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_4__["property"])({
        dependsOn: ["layer.visible"]
      })], d.prototype, "visible", null), d = Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_subclass_js__WEBPACK_IMPORTED_MODULE_5__["subclass"])("esri.views.layers.LayerView")], d);
      var p = d;
      /* harmony default export */

      __webpack_exports__["default"] = p;
      /***/
    },

    /***/
    "Vm2Q":
    /*!******************************************************************!*\
      !*** ./node_modules/@arcgis/core/views/2d/layers/LayerView2D.js ***!
      \******************************************************************/

    /*! exports provided: LayerView2DMixin */

    /***/
    function Vm2Q(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "LayerView2DMixin", function () {
        return l;
      });
      /* harmony import */


      var _chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ../../../chunks/tslib.es6.js */
      "pO5D");
      /* harmony import */


      var _core_has_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ../../../core/has.js */
      "wSAH");
      /* harmony import */


      var _core_Logger_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ../../../core/Logger.js */
      "6S2I");
      /* harmony import */


      var _core_accessorSupport_ensureType_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ../../../core/accessorSupport/ensureType.js */
      "zqDF");
      /* harmony import */


      var _core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ../../../core/accessorSupport/decorators/property.js */
      "WbKI");
      /* harmony import */


      var _core_accessorSupport_decorators_subclass_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ../../../core/accessorSupport/decorators/subclass.js */
      "04ZG");
      /* harmony import */


      var _core_urlUtils_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ../../../core/urlUtils.js */
      "4EHJ");
      /* harmony import */


      var _core_uuid_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! ../../../core/uuid.js */
      "ju1D");
      /* harmony import */


      var _portal_support_resourceExtension_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! ../../../portal/support/resourceExtension.js */
      "9AIY");
      /* harmony import */


      var _core_Collection_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! ../../../core/Collection.js */
      "LE9a");
      /* harmony import */


      var _core_collectionUtils_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
      /*! ../../../core/collectionUtils.js */
      "fX31");
      /* harmony import */


      var _core_watchUtils_js__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
      /*! ../../../core/watchUtils.js */
      "N5XI");
      /* harmony import */


      var _layers_support_ClipArea_js__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
      /*! ../../layers/support/ClipArea.js */
      "ZuQG");
      /* harmony import */


      var _layers_support_ClipRect_js__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
      /*! ../../layers/support/ClipRect.js */
      "L1EH");
      /* harmony import */


      var _engine_Container_js__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(
      /*! ../engine/Container.js */
      "AMBt");
      /* harmony import */


      var _layers_support_Geometry_js__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(
      /*! ../../layers/support/Geometry.js */
      "mO6X");
      /* harmony import */


      var _layers_support_Path_js__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(
      /*! ../../layers/support/Path.js */
      "za8w");
      /*
      All material copyright ESRI, All Rights Reserved, unless otherwise specified.
      See https://js.arcgis.com/4.18/esri/copyright.txt for details.
      */


      var c = _core_Collection_js__WEBPACK_IMPORTED_MODULE_9__["default"].ofType({
        key: "type",
        base: _layers_support_ClipArea_js__WEBPACK_IMPORTED_MODULE_12__["default"],
        typeMap: {
          rect: _layers_support_ClipRect_js__WEBPACK_IMPORTED_MODULE_13__["default"],
          path: _layers_support_Path_js__WEBPACK_IMPORTED_MODULE_16__["default"],
          geometry: _layers_support_Geometry_js__WEBPACK_IMPORTED_MODULE_15__["default"]
        }
      }),
          l = function l(i) {
        var o = /*#__PURE__*/function (_i) {
          _inherits(o, _i);

          var _super3 = _createSuper(o);

          function o() {
            var _this4;

            _classCallCheck(this, o);

            _this4 = _super3.apply(this, arguments), _this4.clips = new c(), _this4.moving = !1, _this4.attached = !1, _this4.lastUpdateId = -1, _this4.updateRequested = !1;
            return _this4;
          }

          _createClass(o, [{
            key: "initialize",
            value: function initialize() {
              var _this5 = this;

              var e;
              this.container || (this.container = new _engine_Container_js__WEBPACK_IMPORTED_MODULE_14__["Container"]()), this.container.fadeTransitionEnabled = !0, this.container.opacity = 0, this.container.clips = this.clips, this.handles.add([Object(_core_watchUtils_js__WEBPACK_IMPORTED_MODULE_11__["init"])(this, "suspended", function (e) {
                _this5.container && (_this5.container.visible = !e), _this5.view && !e && _this5.updateRequested && _this5.view.requestUpdate();
              }, !0), Object(_core_watchUtils_js__WEBPACK_IMPORTED_MODULE_11__["init"])(this, ["layer.opacity", "container"], function () {
                var e, t;
                _this5.container && (_this5.container.opacity = null != (e = null == (t = _this5.layer) ? void 0 : t.opacity) ? e : 1);
              }, !0), Object(_core_watchUtils_js__WEBPACK_IMPORTED_MODULE_11__["init"])(this, ["layer.blendMode"], function (e) {
                _this5.container && (_this5.container.blendMode = e);
              }, !0), Object(_core_watchUtils_js__WEBPACK_IMPORTED_MODULE_11__["init"])(this, ["layer.effect"], function (e) {
                _this5.container && (_this5.container.effect = e);
              }, !0), this.clips.on("change", function () {
                _this5.container.clips = _this5.clips, _this5.notifyChange("clips");
              })]), null != (e = this.view) && e.whenLayerView ? this.view.whenLayerView(this.layer).then(function (e) {
                e !== _this5 || _this5.attached || _this5.destroyed || (_this5.attach(), _this5.requestUpdate(), _this5.attached = !0);
              }, function () {}) : this.when().then(function () {
                _this5.attached || _this5.destroyed || (_this5.attach(), _this5.requestUpdate(), _this5.attached = !0);
              }, function () {});
            }
          }, {
            key: "destroy",
            value: function destroy() {
              this.attached && (this.detach(), this.attached = !1), this.handles.remove("initialize"), this.updateRequested = !1;
            }
          }, {
            key: "updating",
            get: function get() {
              return !this.attached || !this.suspended && (this.updateRequested || this.isUpdating());
            }
          }, {
            key: "isVisibleAtScale",
            value: function isVisibleAtScale(e) {
              var t = !0;
              var s = this.layer,
                  i = s.minScale,
                  r = s.maxScale;

              if (null != i && null != r) {
                var _s3 = !i,
                    a = !r;

                !_s3 && e <= i && (_s3 = !0), !a && e >= r && (a = !0), t = _s3 && a;
              }

              return t;
            }
          }, {
            key: "requestUpdate",
            value: function requestUpdate() {
              this.updateRequested || (this.updateRequested = !0, this.suspended || this.view.requestUpdate());
            }
          }, {
            key: "processUpdate",
            value: function processUpdate(e) {
              !this.isFulfilled() || this.isResolved() ? (this._set("updateParameters", e), this.updateRequested && !this.suspended && (this.updateRequested = !1, this.update(e))) : this.updateRequested = !1;
            }
          }, {
            key: "isUpdating",
            value: function isUpdating() {
              return !1;
            }
          }, {
            key: "isRendering",
            value: function isRendering() {
              return !1;
            }
          }, {
            key: "canResume",
            value: function canResume() {
              return !!_get(_getPrototypeOf(o.prototype), "canResume", this).call(this) && this.isVisibleAtScale(this.view.scale);
            }
          }]);

          return o;
        }(i);

        return Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_4__["property"])({
          type: c,
          set: function set(e) {
            var t = Object(_core_collectionUtils_js__WEBPACK_IMPORTED_MODULE_10__["referenceSetter"])(e, this._get("clips"), c);

            this._set("clips", t);
          }
        })], o.prototype, "clips", void 0), Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_4__["property"])()], o.prototype, "moving", void 0), Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_4__["property"])()], o.prototype, "attached", void 0), Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_4__["property"])()], o.prototype, "container", void 0), Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_4__["property"])({
          dependsOn: ["view.scale", "layer.minScale", "layer.maxScale"]
        })], o.prototype, "suspended", void 0), Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_4__["property"])({
          readOnly: !0
        })], o.prototype, "updateParameters", void 0), Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_4__["property"])()], o.prototype, "updateRequested", void 0), Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_4__["property"])({
          dependsOn: ["attached", "updateRequested", "suspended"]
        })], o.prototype, "updating", null), Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_4__["property"])()], o.prototype, "view", void 0), o = Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_subclass_js__WEBPACK_IMPORTED_MODULE_5__["subclass"])("esri.views.2d.layers.LayerView2D")], o), o;
      };
      /***/

    },

    /***/
    "ZuQG":
    /*!********************************************************************!*\
      !*** ./node_modules/@arcgis/core/views/layers/support/ClipArea.js ***!
      \********************************************************************/

    /*! exports provided: default */

    /***/
    function ZuQG(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony import */


      var _chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ../../../chunks/tslib.es6.js */
      "pO5D");
      /* harmony import */


      var _core_has_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ../../../core/has.js */
      "wSAH");
      /* harmony import */


      var _core_Logger_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ../../../core/Logger.js */
      "6S2I");
      /* harmony import */


      var _core_accessorSupport_ensureType_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ../../../core/accessorSupport/ensureType.js */
      "zqDF");
      /* harmony import */


      var _core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ../../../core/accessorSupport/decorators/property.js */
      "WbKI");
      /* harmony import */


      var _core_accessorSupport_decorators_subclass_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ../../../core/accessorSupport/decorators/subclass.js */
      "04ZG");
      /* harmony import */


      var _core_urlUtils_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ../../../core/urlUtils.js */
      "4EHJ");
      /* harmony import */


      var _core_uuid_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! ../../../core/uuid.js */
      "ju1D");
      /* harmony import */


      var _portal_support_resourceExtension_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! ../../../portal/support/resourceExtension.js */
      "9AIY");
      /* harmony import */


      var _core_JSONSupport_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! ../../../core/JSONSupport.js */
      "ag7Y");
      /*
      All material copyright ESRI, All Rights Reserved, unless otherwise specified.
      See https://js.arcgis.com/4.18/esri/copyright.txt for details.
      */


      var e = /*#__PURE__*/function (_core_JSONSupport_js_) {
        _inherits(e, _core_JSONSupport_js_);

        var _super4 = _createSuper(e);

        function e() {
          _classCallCheck(this, e);

          return _super4.apply(this, arguments);
        }

        return e;
      }(_core_JSONSupport_js__WEBPACK_IMPORTED_MODULE_9__["JSONSupport"]);

      e = Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_subclass_js__WEBPACK_IMPORTED_MODULE_5__["subclass"])("esri.views.layers.support.ClipArea")], e);
      var p = e;
      /* harmony default export */

      __webpack_exports__["default"] = p;
      /***/
    },

    /***/
    "mO6X":
    /*!********************************************************************!*\
      !*** ./node_modules/@arcgis/core/views/layers/support/Geometry.js ***!
      \********************************************************************/

    /*! exports provided: default */

    /***/
    function mO6X(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony import */


      var _chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ../../../chunks/tslib.es6.js */
      "pO5D");
      /* harmony import */


      var _core_has_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ../../../core/has.js */
      "wSAH");
      /* harmony import */


      var _core_Logger_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ../../../core/Logger.js */
      "6S2I");
      /* harmony import */


      var _core_accessorSupport_ensureType_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ../../../core/accessorSupport/ensureType.js */
      "zqDF");
      /* harmony import */


      var _core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ../../../core/accessorSupport/decorators/property.js */
      "WbKI");
      /* harmony import */


      var _core_accessorSupport_decorators_subclass_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ../../../core/accessorSupport/decorators/subclass.js */
      "04ZG");
      /* harmony import */


      var _core_urlUtils_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ../../../core/urlUtils.js */
      "4EHJ");
      /* harmony import */


      var _core_uuid_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! ../../../core/uuid.js */
      "ju1D");
      /* harmony import */


      var _portal_support_resourceExtension_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! ../../../portal/support/resourceExtension.js */
      "9AIY");
      /* harmony import */


      var _geometry_Geometry_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! ../../../geometry/Geometry.js */
      "N2DF");
      /* harmony import */


      var _geometry_Extent_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
      /*! ../../../geometry/Extent.js */
      "OvF4");
      /* harmony import */


      var _geometry_Polygon_js__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
      /*! ../../../geometry/Polygon.js */
      "Ehki");
      /* harmony import */


      var _geometry_support_jsonUtils_js__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
      /*! ../../../geometry/support/jsonUtils.js */
      "qatw");
      /* harmony import */


      var _geometry_js__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
      /*! ../../../geometry.js */
      "4GrV");
      /* harmony import */


      var _ClipArea_js__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(
      /*! ./ClipArea.js */
      "ZuQG");
      /*
      All material copyright ESRI, All Rights Reserved, unless otherwise specified.
      See https://js.arcgis.com/4.18/esri/copyright.txt for details.
      */


      var _n;

      var y = {
        base: _geometry_Geometry_js__WEBPACK_IMPORTED_MODULE_9__["default"],
        key: "type",
        typeMap: {
          extent: _geometry_Extent_js__WEBPACK_IMPORTED_MODULE_10__["default"],
          polygon: _geometry_Polygon_js__WEBPACK_IMPORTED_MODULE_11__["default"]
        }
      };

      var c = _n = /*#__PURE__*/function (_ClipArea_js__WEBPACK2) {
        _inherits(n, _ClipArea_js__WEBPACK2);

        var _super5 = _createSuper(n);

        function n() {
          var _this6;

          _classCallCheck(this, n);

          _this6 = _super5.apply(this, arguments), _this6.type = "geometry", _this6.geometry = null;
          return _this6;
        }

        _createClass(n, [{
          key: "version",
          get: function get() {
            return (this._get("version") || 0) + 1;
          }
        }, {
          key: "clone",
          value: function clone() {
            return new _n({
              geometry: this.geometry.clone()
            });
          }
        }]);

        return n;
      }(_ClipArea_js__WEBPACK_IMPORTED_MODULE_14__["default"]);

      Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_4__["property"])({
        types: y,
        json: {
          read: _geometry_support_jsonUtils_js__WEBPACK_IMPORTED_MODULE_12__["fromJSON"],
          write: !0
        }
      })], c.prototype, "geometry", void 0), Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_4__["property"])({
        readOnly: !0,
        dependsOn: ["geometry"]
      })], c.prototype, "version", null), c = _n = Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_subclass_js__WEBPACK_IMPORTED_MODULE_5__["subclass"])("esri.views.layers.support.Geometry")], c);
      var l = c;
      /* harmony default export */

      __webpack_exports__["default"] = l;
      /***/
    },

    /***/
    "za8w":
    /*!****************************************************************!*\
      !*** ./node_modules/@arcgis/core/views/layers/support/Path.js ***!
      \****************************************************************/

    /*! exports provided: default */

    /***/
    function za8w(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony import */


      var _chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ../../../chunks/tslib.es6.js */
      "pO5D");
      /* harmony import */


      var _core_has_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ../../../core/has.js */
      "wSAH");
      /* harmony import */


      var _core_Logger_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ../../../core/Logger.js */
      "6S2I");
      /* harmony import */


      var _core_accessorSupport_ensureType_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ../../../core/accessorSupport/ensureType.js */
      "zqDF");
      /* harmony import */


      var _core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ../../../core/accessorSupport/decorators/property.js */
      "WbKI");
      /* harmony import */


      var _core_accessorSupport_decorators_subclass_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ../../../core/accessorSupport/decorators/subclass.js */
      "04ZG");
      /* harmony import */


      var _core_urlUtils_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ../../../core/urlUtils.js */
      "4EHJ");
      /* harmony import */


      var _core_uuid_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! ../../../core/uuid.js */
      "ju1D");
      /* harmony import */


      var _portal_support_resourceExtension_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! ../../../portal/support/resourceExtension.js */
      "9AIY");
      /* harmony import */


      var _ClipArea_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! ./ClipArea.js */
      "ZuQG");
      /*
      All material copyright ESRI, All Rights Reserved, unless otherwise specified.
      See https://js.arcgis.com/4.18/esri/copyright.txt for details.
      */


      var t = /*#__PURE__*/function (_ClipArea_js__WEBPACK3) {
        _inherits(t, _ClipArea_js__WEBPACK3);

        var _super6 = _createSuper(t);

        function t() {
          var _this7;

          _classCallCheck(this, t);

          _this7 = _super6.apply(this, arguments), _this7.type = "path", _this7.path = [];
          return _this7;
        }

        _createClass(t, [{
          key: "version",
          get: function get() {
            return (this._get("version") || 0) + 1;
          }
        }]);

        return t;
      }(_ClipArea_js__WEBPACK_IMPORTED_MODULE_9__["default"]);

      Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_4__["property"])({
        type: [[[Number]]],
        json: {
          write: !0
        }
      })], t.prototype, "path", void 0), Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_4__["property"])({
        readOnly: !0,
        dependsOn: ["path"]
      })], t.prototype, "version", null), t = Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_subclass_js__WEBPACK_IMPORTED_MODULE_5__["subclass"])("esri.views.layers.support.Path")], t);
      var p = t;
      /* harmony default export */

      __webpack_exports__["default"] = p;
      /***/
    }
  }]);
})();
//# sourceMappingURL=default~layers-BaseDynamicLayerView2D-js~layers-FeatureLayerView2D-js~layers-GeoRSSLayerView2D-js~la~02a8ea8c-es5.js.map