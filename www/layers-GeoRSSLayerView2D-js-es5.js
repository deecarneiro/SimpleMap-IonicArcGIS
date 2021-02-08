(function () {
  function _createForOfIteratorHelper(o, allowArrayLike) { var it; if (typeof Symbol === "undefined" || o[Symbol.iterator] == null) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = o[Symbol.iterator](); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it["return"] != null) it["return"](); } finally { if (didErr) throw err; } } }; }

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

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["layers-GeoRSSLayerView2D-js"], {
    /***/
    "Uxk/":
    /*!************************************************************************!*\
      !*** ./node_modules/@arcgis/core/views/2d/layers/GeoRSSLayerView2D.js ***!
      \************************************************************************/

    /*! exports provided: default */

    /***/
    function Uxk(module, __webpack_exports__, __webpack_require__) {
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


      var _core_promiseUtils_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! ../../../core/promiseUtils.js */
      "9MzC");
      /* harmony import */


      var _core_Collection_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
      /*! ../../../core/Collection.js */
      "LE9a");
      /* harmony import */


      var _PopupTemplate_js__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
      /*! ../../../PopupTemplate.js */
      "SFah");
      /* harmony import */


      var _Graphic_js__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
      /*! ../../../Graphic.js */
      "jWBI");
      /* harmony import */


      var _core_watchUtils_js__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
      /*! ../../../core/watchUtils.js */
      "N5XI");
      /* harmony import */


      var _renderers_SimpleRenderer_js__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(
      /*! ../../../renderers/SimpleRenderer.js */
      "/1dM");
      /* harmony import */


      var _renderers_support_jsonUtils_js__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(
      /*! ../../../renderers/support/jsonUtils.js */
      "+Xal");
      /* harmony import */


      var _tasks_support_FeatureSet_js__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(
      /*! ../../../tasks/support/FeatureSet.js */
      "8prj");
      /* harmony import */


      var _layers_LayerView_js__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(
      /*! ../../layers/LayerView.js */
      "NloG");
      /* harmony import */


      var _graphics_GraphicsView2D_js__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(
      /*! ./graphics/GraphicsView2D.js */
      "Vh9r");
      /* harmony import */


      var _LayerView2D_js__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(
      /*! ./LayerView2D.js */
      "Vm2Q");
      /*
      All material copyright ESRI, All Rights Reserved, unless otherwise specified.
      See https://js.arcgis.com/4.18/esri/copyright.txt for details.
      */


      var g = /*#__PURE__*/function (_Object) {
        _inherits(g, _Object);

        var _super = _createSuper(g);

        function g() {
          var _this;

          _classCallCheck(this, g);

          _this = _super.apply(this, arguments), _this._graphicsViewMap = {}, _this._popupTemplates = new Map(), _this.graphicsViews = [];
          return _this;
        }

        _createClass(g, [{
          key: "hitTest",
          value: function hitTest(e, r) {
            var _this2 = this;

            if (this.suspended || !this.graphicsViews.length) return Object(_core_promiseUtils_js__WEBPACK_IMPORTED_MODULE_9__["resolve"])();
            var i = this.graphicsViews.reverse().map(function (s) {
              return s.hitTest(e, r);
            });
            return Object(_core_promiseUtils_js__WEBPACK_IMPORTED_MODULE_9__["all"])(i).then(function (e) {
              return e.filter(function (e, r) {
                return e && (e.popupTemplate = _this2._popupTemplates.get(_this2.graphicsViews[r]), e.layer = _this2.layer, e.sourceLayer = _this2.layer), !!e;
              })[0] || null;
            });
          }
        }, {
          key: "update",
          value: function update(e) {
            if (this.graphicsViews) {
              var _iterator = _createForOfIteratorHelper(this.graphicsViews),
                  _step;

              try {
                for (_iterator.s(); !(_step = _iterator.n()).done;) {
                  var r = _step.value;
                  r.processUpdate(e);
                }
              } catch (err) {
                _iterator.e(err);
              } finally {
                _iterator.f();
              }
            }
          }
        }, {
          key: "attach",
          value: function attach() {
            var _this3 = this;

            this.layer.featureCollections.forEach(function (e) {
              var r = _tasks_support_FeatureSet_js__WEBPACK_IMPORTED_MODULE_16__["default"].fromJSON(e.featureSet),
                  s = new (_core_Collection_js__WEBPACK_IMPORTED_MODULE_10__["default"].ofType(_Graphic_js__WEBPACK_IMPORTED_MODULE_12__["default"]))(r.features);

              var o;
              if (_this3._graphicsViewMap[r.geometryType]) o = _this3._graphicsViewMap[r.geometryType], o.graphics.addMany(s);else {
                var i = e.layerDefinition.drawingInfo,
                    p = e.popupInfo ? _PopupTemplate_js__WEBPACK_IMPORTED_MODULE_11__["default"].fromJSON(e.popupInfo) : null,
                    a = Object(_renderers_support_jsonUtils_js__WEBPACK_IMPORTED_MODULE_15__["fromJSON"])(i.renderer);
                o = new _graphics_GraphicsView2D_js__WEBPACK_IMPORTED_MODULE_18__["default"]({
                  requestUpdateCallback: function requestUpdateCallback() {
                    return _this3.requestUpdate();
                  },
                  view: _this3.view,
                  graphics: s,
                  renderer: a
                }), _this3._graphicsViewMap[r.geometryType] = o, _this3._popupTemplates.set(o, p), "polygon" !== r.geometryType || _this3.layer.polygonSymbol ? "polyline" !== r.geometryType || _this3.layer.lineSymbol ? "point" !== r.geometryType || _this3.layer.pointSymbol || (_this3.layer.pointSymbol = a.symbol) : _this3.layer.lineSymbol = a.symbol : _this3.layer.polygonSymbol = a.symbol, _this3.graphicsViews.push(o), _this3.container.addChild(o.container);
              }
            }), this.handles.add([Object(_core_watchUtils_js__WEBPACK_IMPORTED_MODULE_13__["init"])(this.layer, "polygonSymbol", function (e) {
              _this3._graphicsViewMap.polygon.renderer = new _renderers_SimpleRenderer_js__WEBPACK_IMPORTED_MODULE_14__["default"]({
                symbol: e
              });
            }), Object(_core_watchUtils_js__WEBPACK_IMPORTED_MODULE_13__["init"])(this.layer, "lineSymbol", function (e) {
              _this3._graphicsViewMap.polyline.renderer = new _renderers_SimpleRenderer_js__WEBPACK_IMPORTED_MODULE_14__["default"]({
                symbol: e
              });
            }), Object(_core_watchUtils_js__WEBPACK_IMPORTED_MODULE_13__["init"])(this.layer, "pointSymbol", function (e) {
              _this3._graphicsViewMap.point.renderer = new _renderers_SimpleRenderer_js__WEBPACK_IMPORTED_MODULE_14__["default"]({
                symbol: e
              });
            })]);
          }
        }, {
          key: "detach",
          value: function detach() {
            this.container.removeAllChildren();

            var _iterator2 = _createForOfIteratorHelper(this.graphicsViews),
                _step2;

            try {
              for (_iterator2.s(); !(_step2 = _iterator2.n()).done;) {
                var e = _step2.value;
                e.destroy(), e.view = null, e.renderer = null;
              }
            } catch (err) {
              _iterator2.e(err);
            } finally {
              _iterator2.f();
            }

            this.graphicsViews.length = 0;
          }
        }, {
          key: "moveStart",
          value: function moveStart() {}
        }, {
          key: "moveEnd",
          value: function moveEnd() {}
        }, {
          key: "viewChange",
          value: function viewChange() {
            var _iterator3 = _createForOfIteratorHelper(this.graphicsViews),
                _step3;

            try {
              for (_iterator3.s(); !(_step3 = _iterator3.n()).done;) {
                var e = _step3.value;
                e.viewChange();
              }
            } catch (err) {
              _iterator3.e(err);
            } finally {
              _iterator3.f();
            }
          }
        }]);

        return g;
      }(Object(_LayerView2D_js__WEBPACK_IMPORTED_MODULE_19__["LayerView2DMixin"])(_layers_LayerView_js__WEBPACK_IMPORTED_MODULE_17__["default"]));

      g = Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_subclass_js__WEBPACK_IMPORTED_MODULE_5__["subclass"])("esri.views.2d.layers.GeoRSSLayerView2D")], g);
      var u = g;
      /* harmony default export */

      __webpack_exports__["default"] = u;
      /***/
    }
  }]);
})();
//# sourceMappingURL=layers-GeoRSSLayerView2D-js-es5.js.map