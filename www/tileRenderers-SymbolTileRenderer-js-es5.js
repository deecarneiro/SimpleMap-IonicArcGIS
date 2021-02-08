(function () {
  function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

  function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

  function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }

  function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

  function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

  function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && Symbol.iterator in Object(iter)) return Array.from(iter); }

  function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }

  function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

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

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["tileRenderers-SymbolTileRenderer-js"], {
    /***/
    "bdHb":
    /*!****************************************************************************************************!*\
      !*** ./node_modules/@arcgis/core/views/2d/layers/features/tileRenderers/support/WGLFeatureView.js ***!
      \****************************************************************************************************/

    /*! exports provided: WGLFeatureView */

    /***/
    function bdHb(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "WGLFeatureView", function () {
        return a;
      });
      /* harmony import */


      var _core_promiseUtils_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ../../../../../../core/promiseUtils.js */
      "9MzC");
      /* harmony import */


      var _engine_webgl_enums_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ../../../../engine/webgl/enums.js */
      "yE7X");
      /* harmony import */


      var _engine_brushes_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ../../../../engine/brushes.js */
      "Oxob");
      /* harmony import */


      var _engine_FeatureContainer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ../../../../engine/FeatureContainer.js */
      "by2V");
      /*
      All material copyright ESRI, All Rights Reserved, unless otherwise specified.
      See https://js.arcgis.com/4.18/esri/copyright.txt for details.
      */


      var a = /*#__PURE__*/function (_engine_FeatureContai) {
        _inherits(a, _engine_FeatureContai);

        var _super = _createSuper(a);

        function a(e, s, t) {
          var _this;

          _classCallCheck(this, a);

          _this = _super.call(this, e), _this._pointToCallbacks = new Map(), _this._layer = t, _this._layerView = s;
          return _this;
        }

        _createClass(a, [{
          key: "renderChildren",
          value: function renderChildren(e) {
            if (this.attributeView.update(), this.hasAnimation) {
              e.painter.effects.integrate.draw(e, e.attributeView);
            }

            _get(_getPrototypeOf(a.prototype), "renderChildren", this).call(this, e);
          }
        }, {
          key: "hitTest",
          value: function hitTest(s, t) {
            var i = [s, t],
                _a = Object(_core_promiseUtils_js__WEBPACK_IMPORTED_MODULE_0__["createResolver"])();

            return this._pointToCallbacks.set(i, _a), this.requestRender(), _a.promise;
          }
        }, {
          key: "doRender",
          value: function doRender(e) {
            var _this$_layer = this._layer,
                s = _this$_layer.minScale,
                t = _this$_layer.maxScale,
                i = e.state.scale;
            i <= (s || 1 / 0) && i >= t && _get(_getPrototypeOf(a.prototype), "doRender", this).call(this, e);
          }
        }, {
          key: "hasAnimation",
          get: function get() {
            return this.hasLabels;
          }
        }, {
          key: "hasLabels",
          get: function get() {
            var e = this._layer.featureReduction,
                s = e && "cluster" === e.type && e.labelsVisible && e.labelingInfo && e.labelingInfo.length;
            return this._layer.labelingInfo && this._layer.labelingInfo.length && this._layer.labelsVisible || !!s;
          }
        }, {
          key: "labelsVisible",
          get: function get() {
            return this._layer.labelsVisible;
          }
        }, {
          key: "prepareRenderPasses",
          value: function prepareRenderPasses(e) {
            var _this2 = this;

            var i = e.registerRenderPass({
              name: "label",
              brushes: [_engine_brushes_js__WEBPACK_IMPORTED_MODULE_2__["brushes"].label],
              target: function target() {
                return _this2.hasLabels ? _this2.children : null;
              },
              drawPhase: _engine_webgl_enums_js__WEBPACK_IMPORTED_MODULE_1__["WGLDrawPhase"].LABEL | _engine_webgl_enums_js__WEBPACK_IMPORTED_MODULE_1__["WGLDrawPhase"].LABEL_ALPHA
            }),
                _a2 = e.registerRenderPass({
              name: "geometry",
              brushes: [_engine_brushes_js__WEBPACK_IMPORTED_MODULE_2__["brushes"].fill, _engine_brushes_js__WEBPACK_IMPORTED_MODULE_2__["brushes"].line, _engine_brushes_js__WEBPACK_IMPORTED_MODULE_2__["brushes"].marker, _engine_brushes_js__WEBPACK_IMPORTED_MODULE_2__["brushes"].text],
              target: function target() {
                return _this2.children;
              },
              enableDefaultDraw: function enableDefaultDraw() {
                return !_this2._layerView.hasEffects;
              },
              effects: [{
                apply: e.effects.outsideEffect,
                enable: function enable() {
                  return _this2._layerView.hasEffects;
                },
                args: function args() {
                  return _this2._layerView.effectLists.excluded;
                }
              }, {
                apply: e.effects.insideEffect,
                enable: function enable() {
                  return _this2._layerView.hasEffects;
                },
                args: function args() {
                  return _this2._layerView.effectLists.included;
                }
              }, {
                apply: e.effects.hittest,
                enable: function enable() {
                  return !!_this2._pointToCallbacks.size;
                },
                args: function args() {
                  return _this2._pointToCallbacks;
                }
              }]
            }),
                r = e.registerRenderPass({
              name: "highlight",
              brushes: [_engine_brushes_js__WEBPACK_IMPORTED_MODULE_2__["brushes"].fill, _engine_brushes_js__WEBPACK_IMPORTED_MODULE_2__["brushes"].line, _engine_brushes_js__WEBPACK_IMPORTED_MODULE_2__["brushes"].marker, _engine_brushes_js__WEBPACK_IMPORTED_MODULE_2__["brushes"].text],
              target: function target() {
                return _this2.children;
              },
              drawPhase: _engine_webgl_enums_js__WEBPACK_IMPORTED_MODULE_1__["WGLDrawPhase"].HIGHLIGHT,
              enableDefaultDraw: function enableDefaultDraw() {
                return !1;
              },
              effects: [{
                apply: e.effects.highlight,
                enable: function enable() {
                  return !!_this2._layerView.hasHighlight();
                }
              }]
            });

            return [].concat(_toConsumableArray(_get(_getPrototypeOf(a.prototype), "prepareRenderPasses", this).call(this, e)), [_a2, r, i]);
          }
        }]);

        return a;
      }(_engine_FeatureContainer_js__WEBPACK_IMPORTED_MODULE_3__["FeatureContainer"]);
      /***/

    },

    /***/
    "wfc5":
    /*!************************************************************************************************!*\
      !*** ./node_modules/@arcgis/core/views/2d/layers/features/tileRenderers/SymbolTileRenderer.js ***!
      \************************************************************************************************/

    /*! exports provided: default */

    /***/
    function wfc5(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony import */


      var _chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ../../../../../chunks/tslib.es6.js */
      "pO5D");
      /* harmony import */


      var _core_has_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ../../../../../core/has.js */
      "wSAH");
      /* harmony import */


      var _core_Logger_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ../../../../../core/Logger.js */
      "6S2I");
      /* harmony import */


      var _core_accessorSupport_ensureType_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ../../../../../core/accessorSupport/ensureType.js */
      "zqDF");
      /* harmony import */


      var _core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ../../../../../core/accessorSupport/decorators/property.js */
      "WbKI");
      /* harmony import */


      var _core_accessorSupport_decorators_subclass_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ../../../../../core/accessorSupport/decorators/subclass.js */
      "04ZG");
      /* harmony import */


      var _core_urlUtils_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ../../../../../core/urlUtils.js */
      "4EHJ");
      /* harmony import */


      var _core_uuid_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! ../../../../../core/uuid.js */
      "ju1D");
      /* harmony import */


      var _portal_support_resourceExtension_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! ../../../../../portal/support/resourceExtension.js */
      "9AIY");
      /* harmony import */


      var _geometry_support_aaBoundingRect_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! ../../../../../geometry/support/aaBoundingRect.js */
      "kYAx");
      /* harmony import */


      var _engine_webgl_WGLTile_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
      /*! ../../../engine/webgl/WGLTile.js */
      "KFVX");
      /* harmony import */


      var _support_rendererUtils_js__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
      /*! ../support/rendererUtils.js */
      "tDOP");
      /* harmony import */


      var _support_visualVariablesUtils_js__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
      /*! ./support/visualVariablesUtils.js */
      "gzK8");
      /* harmony import */


      var _BaseTileRenderer_js__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
      /*! ./BaseTileRenderer.js */
      "4xTw");
      /* harmony import */


      var _support_WGLFeatureView_js__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(
      /*! ./support/WGLFeatureView.js */
      "bdHb");
      /*
      All material copyright ESRI, All Rights Reserved, unless otherwise specified.
      See https://js.arcgis.com/4.18/esri/copyright.txt for details.
      */


      var n = /*#__PURE__*/function (_BaseTileRenderer_js_) {
        _inherits(n, _BaseTileRenderer_js_);

        var _super2 = _createSuper(n);

        function n() {
          _classCallCheck(this, n);

          return _super2.apply(this, arguments);
        }

        _createClass(n, [{
          key: "install",
          value: function install(e) {
            var t = new _support_WGLFeatureView_js__WEBPACK_IMPORTED_MODULE_14__["WGLFeatureView"](this.tileInfoView, this.layerView, this.layer);
            this.featuresView = t, e.addChild(t);
          }
        }, {
          key: "uninstall",
          value: function uninstall(e) {
            e.removeChild(this.featuresView), this.featuresView.destroy();
          }
        }, {
          key: "hitTest",
          value: function hitTest(e, t) {
            return this.featuresView.hitTest(e, t);
          }
        }, {
          key: "supportsRenderer",
          value: function supportsRenderer(e) {
            return null != e && -1 !== ["simple", "class-breaks", "unique-value", "dot-density", "dictionary"].indexOf(e.type);
          }
        }, {
          key: "onConfigUpdate",
          value: function onConfigUpdate(e) {
            var t = null;

            if ("visualVariables" in e) {
              var i = (Object(_support_rendererUtils_js__WEBPACK_IMPORTED_MODULE_11__["simplifyVVRenderer"])(e).visualVariables || []).map(function (e) {
                var t = e.clone();
                return "normalizationField" in e && (t.normalizationField = null), e.valueExpression && "$view.scale" !== e.valueExpression && (t.valueExpression = null, t.field = "nop"), t;
              });
              t = Object(_support_visualVariablesUtils_js__WEBPACK_IMPORTED_MODULE_12__["convertVisualVariables"])(i);
            }

            this.featuresView.setRendererInfo(e, t, this.layerView.effects);
          }
        }, {
          key: "onTileData",
          value: function onTileData(e) {
            var t = this.tiles.get(e.tileKey);
            t && this.featuresView.onTileData(t, e.data), this.layerView.view.labelManager.requestUpdate();
          }
        }, {
          key: "onTileError",
          value: function onTileError(e) {
            var t = this.tiles.get(e.tileKey);
            t && this.featuresView.onTileError(t);
          }
        }, {
          key: "forceAttributeTextureUpload",
          value: function forceAttributeTextureUpload() {
            this.featuresView.attributeView.forceTextureUpload();
          }
        }, {
          key: "lockGPUUploads",
          value: function lockGPUUploads() {
            this.featuresView.attributeView.lockTextureUpload(), this.tiles.forEach(function (e) {
              return e.lockUploads();
            });
          }
        }, {
          key: "unlockGPUUploads",
          value: function unlockGPUUploads() {
            this.featuresView.attributeView.unlockTextureUpload(), this.tiles.forEach(function (e) {
              return e.unlockUploads();
            });
          }
        }, {
          key: "getMaterialItems",
          value: function () {
            var _getMaterialItems = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(e) {
              return regeneratorRuntime.wrap(function _callee$(_context) {
                while (1) {
                  switch (_context.prev = _context.next) {
                    case 0:
                      return _context.abrupt("return", this.featuresView.getMaterialItems(e));

                    case 1:
                    case "end":
                      return _context.stop();
                  }
                }
              }, _callee, this);
            }));

            function getMaterialItems(_x) {
              return _getMaterialItems.apply(this, arguments);
            }

            return getMaterialItems;
          }()
        }, {
          key: "invalidateLabels",
          value: function invalidateLabels() {
            this.featuresView.hasLabels && (this.tiles.forEach(function (e) {
              return e.isDirty = !0;
            }), this.layerView.view.labelManager.requestUpdate());
          }
        }, {
          key: "createTile",
          value: function createTile(e) {
            var t = this.tileInfoView.getTileBounds(Object(_geometry_support_aaBoundingRect_js__WEBPACK_IMPORTED_MODULE_9__["create"])(), e),
                r = new _engine_webgl_WGLTile_js__WEBPACK_IMPORTED_MODULE_10__["WGLTile"](e, t);
            return this.featuresView.hasLabels && this.layerView.view.labelManager.addTile(this.layerView, r), r;
          }
        }, {
          key: "disposeTile",
          value: function disposeTile(e) {
            this.featuresView.removeChild(e), this.featuresView.hasLabels && this.layerView.view.labelManager.removeTile(this.layerView, e.key.id), e.destroy(), this.layerView.view.labelManager.requestUpdate();
          }
        }]);

        return n;
      }(_BaseTileRenderer_js__WEBPACK_IMPORTED_MODULE_13__["default"]);

      n = Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_subclass_js__WEBPACK_IMPORTED_MODULE_5__["subclass"])("esri.views.2d.layers.features.tileRenderers.SymbolTileRenderer")], n);
      var u = n;
      /* harmony default export */

      __webpack_exports__["default"] = u;
      /***/
    }
  }]);
})();
//# sourceMappingURL=tileRenderers-SymbolTileRenderer-js-es5.js.map