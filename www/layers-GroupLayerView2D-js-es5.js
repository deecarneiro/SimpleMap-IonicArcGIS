(function () {
  function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

  function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

  function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

  function _createForOfIteratorHelper(o, allowArrayLike) { var it; if (typeof Symbol === "undefined" || o[Symbol.iterator] == null) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e3) { throw _e3; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = o[Symbol.iterator](); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e4) { didErr = true; err = _e4; }, f: function f() { try { if (!normalCompletion && it["return"] != null) it["return"](); } finally { if (didErr) throw err; } } }; }

  function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

  function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

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

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["layers-GroupLayerView2D-js"], {
    /***/
    "2GoO":
    /*!***********************************************************************!*\
      !*** ./node_modules/@arcgis/core/views/2d/layers/GroupLayerView2D.js ***!
      \***********************************************************************/

    /*! exports provided: default */

    /***/
    function GoO(module, __webpack_exports__, __webpack_require__) {
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


      var _layers_GroupLayerView_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! ../../layers/GroupLayerView.js */
      "TTjt");
      /* harmony import */


      var _LayerView2D_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
      /*! ./LayerView2D.js */
      "Vm2Q");
      /* harmony import */


      var _engine_webgl_GroupContainer_js__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
      /*! ../engine/webgl/GroupContainer.js */
      "7zHX");
      /*
      All material copyright ESRI, All Rights Reserved, unless otherwise specified.
      See https://js.arcgis.com/4.18/esri/copyright.txt for details.
      */


      var i = /*#__PURE__*/function (_Object) {
        _inherits(i, _Object);

        var _super = _createSuper(i);

        function i() {
          var _this;

          _classCallCheck(this, i);

          _this = _super.apply(this, arguments), _this.container = new _engine_webgl_GroupContainer_js__WEBPACK_IMPORTED_MODULE_11__["GroupContainer"]();
          return _this;
        }

        _createClass(i, [{
          key: "attach",
          value: function attach() {
            var _this2 = this;

            this._updateStageChildren(), this.handles.add(this.layerViews.on("after-changes", function () {
              return _this2._updateStageChildren();
            }), "grouplayerview2d");
          }
        }, {
          key: "detach",
          value: function detach() {
            this.handles.remove("grouplayerview2d"), this.container.removeAllChildren();
          }
        }, {
          key: "hitTest",
          value: function hitTest(e, r) {
            return null;
          }
        }, {
          key: "update",
          value: function update(e) {}
        }, {
          key: "moveStart",
          value: function moveStart() {}
        }, {
          key: "viewChange",
          value: function viewChange() {}
        }, {
          key: "moveEnd",
          value: function moveEnd() {}
        }, {
          key: "_updateStageChildren",
          value: function _updateStageChildren() {
            var _this3 = this;

            this.container.removeAllChildren(), this.layerViews.forEach(function (e, r) {
              return _this3.container.addChildAt(e.container, r);
            });
          }
        }]);

        return i;
      }(Object(_LayerView2D_js__WEBPACK_IMPORTED_MODULE_10__["LayerView2DMixin"])(_layers_GroupLayerView_js__WEBPACK_IMPORTED_MODULE_9__["default"]));

      i = Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_subclass_js__WEBPACK_IMPORTED_MODULE_5__["subclass"])("esri.views.2d.layers.GroupLayerView2D")], i);
      var a = i;
      /* harmony default export */

      __webpack_exports__["default"] = a;
      /***/
    },

    /***/
    "7zHX":
    /*!***************************************************************************!*\
      !*** ./node_modules/@arcgis/core/views/2d/engine/webgl/GroupContainer.js ***!
      \***************************************************************************/

    /*! exports provided: GroupContainer */

    /***/
    function zHX(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "GroupContainer", function () {
        return r;
      });
      /* harmony import */


      var _core_has_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ../../../../core/has.js */
      "wSAH");
      /* harmony import */


      var _core_mathUtils_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ../../../../core/mathUtils.js */
      "OKTS");
      /* harmony import */


      var _chunks_builtins_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ../../../../chunks/builtins.js */
      "n4uK");
      /* harmony import */


      var _webgl_FramebufferObject_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ../../../webgl/FramebufferObject.js */
      "0meK");
      /* harmony import */


      var _webgl_RenderingContext_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ../../../webgl/RenderingContext.js */
      "bfJE");
      /* harmony import */


      var _WGLContainer_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ./WGLContainer.js */
      "mgI5");
      /*
      All material copyright ESRI, All Rights Reserved, unless otherwise specified.
      See https://js.arcgis.com/4.18/esri/copyright.txt for details.
      */


      var r = /*#__PURE__*/function (_WGLContainer_js__WEB) {
        _inherits(r, _WGLContainer_js__WEB);

        var _super2 = _createSuper(r);

        function r() {
          var _this4;

          _classCallCheck(this, r);

          _this4 = _super2.apply(this, arguments), _this4._lastWidth = 0, _this4._lastHeight = 0;
          return _this4;
        }

        _createClass(r, [{
          key: "dispose",
          value: function dispose() {
            this._renderTarget && (this._renderTarget.dispose(), this._renderTarget = null);
          }
        }, {
          key: "doRender",
          value: function doRender(e) {
            var t = this.createRenderParams(e),
                _r = t.context,
                s = t.painter,
                i = t.profiler;
            this._prevFBO = _r.getBoundFramebufferObject(), i.recordContainerStart(this.name);

            var n = this._getFbo(t),
                o = s.getRenderTarget();

            _r.bindFramebuffer(n), s.setRenderTarget(n), _r.setDepthWriteEnabled(!0), _r.setClearColor(0, 0, 0, 0), _r.setClearDepth(1), _r.clear(_r.gl.COLOR_BUFFER_BIT | _r.gl.DEPTH_BUFFER_BIT), _r.setDepthWriteEnabled(!1);

            var _iterator = _createForOfIteratorHelper(this.children),
                _step;

            try {
              for (_iterator.s(); !(_step = _iterator.n()).done;) {
                var _t = _step.value;

                _t.beforeRender(e);
              }
            } catch (err) {
              _iterator.e(err);
            } finally {
              _iterator.f();
            }

            var _iterator2 = _createForOfIteratorHelper(this.children),
                _step2;

            try {
              for (_iterator2.s(); !(_step2 = _iterator2.n()).done;) {
                var _e = _step2.value;

                _e.processRender(t);
              }
            } catch (err) {
              _iterator2.e(err);
            } finally {
              _iterator2.f();
            }

            var _iterator3 = _createForOfIteratorHelper(this.children),
                _step3;

            try {
              for (_iterator3.s(); !(_step3 = _iterator3.n()).done;) {
                var _t2 = _step3.value;

                _t2.afterRender(e);
              }
            } catch (err) {
              _iterator3.e(err);
            } finally {
              _iterator3.f();
            }

            s.setRenderTarget(o), _r.bindFramebuffer(this._prevFBO), s.beforeRenderLayer(t, this._clippingInfos ? 255 : 0, this.computedOpacity), _r.setStencilTestEnabled(!1), _r.setStencilWriteMask(0), s.blitTexture(_r, n.colorTexture, 9728), s.compositeLayer(t, this.computedOpacity), i.recordContainerEnd();
          }
        }, {
          key: "createRenderParams",
          value: function createRenderParams(e) {
            return _objectSpread(_objectSpread({}, _get(_getPrototypeOf(r.prototype), "createRenderParams", this).call(this, e)), {}, {
              blendMode: this.blendMode,
              effects: this.computedEffects,
              globalOpacity: 1
            });
          }
        }, {
          key: "_getFbo",
          value: function _getFbo(t) {
            var _r2 = t.context,
                s = t.painter,
                _r2$getViewport = _r2.getViewport(),
                i = _r2$getViewport.width,
                n = _r2$getViewport.height;

            if (i !== this._lastWidth || n !== this._lastHeight) if (this._lastWidth = i, this._lastHeight = n, this._renderTarget) this._renderTarget.resize(i, n);else {
              var _t3 = {
                target: 3553,
                pixelFormat: 6408,
                dataType: 5121,
                samplingMode: 9728,
                wrapMode: 33071,
                width: i,
                height: n
              },
                  o = {
                colorTarget: 0,
                depthStencilTarget: 3
              },
                  a = s.getSharedStencilBuffer();
              this._renderTarget = new _webgl_FramebufferObject_js__WEBPACK_IMPORTED_MODULE_3__["default"](_r2, o, _t3, a);
            }
            return this._renderTarget;
          }
        }]);

        return r;
      }(_WGLContainer_js__WEBPACK_IMPORTED_MODULE_5__["default"]);
      /***/

    },

    /***/
    "TTjt":
    /*!******************************************************************!*\
      !*** ./node_modules/@arcgis/core/views/layers/GroupLayerView.js ***!
      \******************************************************************/

    /*! exports provided: default */

    /***/
    function TTjt(module, __webpack_exports__, __webpack_require__) {
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


      var _core_Collection_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! ../../core/Collection.js */
      "LE9a");
      /* harmony import */


      var _core_collectionUtils_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
      /*! ../../core/collectionUtils.js */
      "fX31");
      /* harmony import */


      var _LayerView_js__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
      /*! ./LayerView.js */
      "NloG");
      /*
      All material copyright ESRI, All Rights Reserved, unless otherwise specified.
      See https://js.arcgis.com/4.18/esri/copyright.txt for details.
      */


      var o = /*#__PURE__*/function (_LayerView_js__WEBPAC) {
        _inherits(o, _LayerView_js__WEBPAC);

        var _super3 = _createSuper(o);

        function o(e) {
          var _this5;

          _classCallCheck(this, o);

          _this5 = _super3.call(this, e), _this5.layerViews = new _core_Collection_js__WEBPACK_IMPORTED_MODULE_9__["default"]();
          return _this5;
        }

        _createClass(o, [{
          key: "initialize",
          value: function initialize() {
            var _this6 = this;

            this.handles.add([this.layerViews.on("change", function (e) {
              return _this6._layerViewsChangeHandler(e);
            }), this.layerViews.on("after-changes", function () {
              return _this6._layerViewsAfterChangesHandler();
            }), this.layer.watch("visibilityMode", function () {
              return _this6._visibilityModeHandler();
            }, !0), this.watch("visible", function () {
              return _this6._visibleHandler();
            }, !0)], "grouplayerview"), this._layerViewsChangeHandler({
              target: null,
              added: this.layerViews.toArray(),
              removed: [],
              moved: []
            }), this._layerViewsAfterChangesHandler();
          }
        }, {
          key: "layerViews",
          set: function set(e) {
            this._set("layerViews", Object(_core_collectionUtils_js__WEBPACK_IMPORTED_MODULE_10__["referenceSetter"])(e, this._get("layerViews")));
          }
        }, {
          key: "isUpdating",
          value: function isUpdating() {
            return this.layerViews.some(function (e) {
              return e.updating;
            });
          }
        }, {
          key: "_hasLayerViewVisibleOverrides",
          value: function _hasLayerViewVisibleOverrides() {
            return this.layerViews.some(function (e) {
              return e._isOverridden("visible");
            });
          }
        }, {
          key: "_findLayerViewForLayer",
          value: function _findLayerViewForLayer(e) {
            return e && this.layerViews.find(function (i) {
              return i.layer === e;
            });
          }
        }, {
          key: "_firstVisibleOnLayerOrder",
          value: function _firstVisibleOnLayerOrder() {
            var _this7 = this;

            var e = this.layer.layers.find(function (e) {
              var i = _this7._findLayerViewForLayer(e);

              return i && i.visible;
            });
            return e && this._findLayerViewForLayer(e);
          }
        }, {
          key: "_enforceExclusiveVisibility",
          value: function _enforceExclusiveVisibility(e) {
            this._hasLayerViewVisibleOverrides() && (e || !(e = this._firstVisibleOnLayerOrder()) && this.layerViews.length > 0 && (e = this._findLayerViewForLayer(this.layer.layers.getItemAt(0))), this.layerViews.forEach(function (i) {
              i.visible = i === e;
            }));
          }
        }, {
          key: "_layerViewsChangeHandler",
          value: function _layerViewsChangeHandler(e) {
            var _this8 = this;

            this.handles.remove("grouplayerview:visible"), this.handles.add(this.layerViews.map(function (e) {
              return e.watch("visible", function (i) {
                return _this8._layerViewVisibleHandler(i, e);
              }, !0);
            }).toArray(), "grouplayerview:visible");
            var i = e.added[e.added.length - 1];
            var s = null;
            i && i.visible && (s = i), this._enforceVisibility(s);
          }
        }, {
          key: "_layerViewsAfterChangesHandler",
          value: function _layerViewsAfterChangesHandler() {
            var _this9 = this;

            this.handles.remove("grouplayerview:updating"), this.handles.add(this.layerViews.map(function (e) {
              return e.watch("updating", function () {
                return _this9._updateUpdating();
              }, !0);
            }).toArray(), "grouplayerview:updating"), this._updateUpdating();
          }
        }, {
          key: "_enforceVisibility",
          value: function _enforceVisibility(e) {
            if (this._hasLayerViewVisibleOverrides()) switch (this.layer.visibilityMode) {
              case "inherited":
                {
                  var _e2 = this.visible;
                  this.layerViews.forEach(function (i) {
                    i.visible = _e2;
                  });
                  break;
                }

              case "exclusive":
                this._enforceExclusiveVisibility(e);

            }
          }
        }, {
          key: "_visibilityModeHandler",
          value: function _visibilityModeHandler() {
            this._enforceVisibility();
          }
        }, {
          key: "_layerViewVisibleHandler",
          value: function _layerViewVisibleHandler(e, i) {
            if (this._hasLayerViewVisibleOverrides()) switch (this.layer.visibilityMode) {
              case "inherited":
                e !== this.visible && (i.visible = this.visible);
                break;

              case "exclusive":
                this._enforceExclusiveVisibility(e && i);

            }
          }
        }, {
          key: "_visibleHandler",
          value: function _visibleHandler() {
            var e;
            this._hasLayerViewVisibleOverrides() && "inherited" === (null == (e = this.layer) ? void 0 : e.visibilityMode) && this._enforceVisibility();
          }
        }, {
          key: "_updateUpdating",
          value: function _updateUpdating() {
            this.notifyChange("updating");
          }
        }]);

        return o;
      }(_LayerView_js__WEBPACK_IMPORTED_MODULE_11__["default"]);

      Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_4__["property"])({
        cast: _core_collectionUtils_js__WEBPACK_IMPORTED_MODULE_10__["castForReferenceSetter"]
      })], o.prototype, "layerViews", null), Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_4__["property"])()], o.prototype, "view", void 0), o = Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_subclass_js__WEBPACK_IMPORTED_MODULE_5__["subclass"])("esri.views.layers.GroupLayerView")], o);
      var h = o;
      /* harmony default export */

      __webpack_exports__["default"] = h;
      /***/
    }
  }]);
})();
//# sourceMappingURL=layers-GroupLayerView2D-js-es5.js.map