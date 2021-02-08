(function () {
  function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

  function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

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

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["layers-BaseDynamicLayerView2D-js"], {
    /***/
    "uWmW":
    /*!*****************************************************************************!*\
      !*** ./node_modules/@arcgis/core/views/2d/layers/BaseDynamicLayerView2D.js ***!
      \*****************************************************************************/

    /*! exports provided: default */

    /***/
    function uWmW(module, __webpack_exports__, __webpack_require__) {
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


      var _layers_RefreshableLayerView_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
      /*! ../../layers/RefreshableLayerView.js */
      "bHqs");
      /* harmony import */


      var _layers_LayerView_js__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
      /*! ../../layers/LayerView.js */
      "NloG");
      /* harmony import */


      var _engine_BitmapContainer_js__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
      /*! ../engine/BitmapContainer.js */
      "LTnl");
      /* harmony import */


      var _LayerView2D_js__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
      /*! ./LayerView2D.js */
      "Vm2Q");
      /* harmony import */


      var _support_ExportStrategy_js__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(
      /*! ./support/ExportStrategy.js */
      "vbiG");
      /*
      All material copyright ESRI, All Rights Reserved, unless otherwise specified.
      See https://js.arcgis.com/4.18/esri/copyright.txt for details.
      */


      var h = _core_Logger_js__WEBPACK_IMPORTED_MODULE_2__["default"].getLogger("esri.views.2d.layers.BaseDynamicLayerView2D");

      var c = /*#__PURE__*/function (_Object) {
        _inherits(c, _Object);

        var _super = _createSuper(c);

        function c() {
          _classCallCheck(this, c);

          return _super.apply(this, arguments);
        }

        _createClass(c, [{
          key: "hitTest",
          value: function hitTest() {
            return null;
          }
        }, {
          key: "update",
          value: function update(t) {
            this.strategy.update(t)["catch"](function (t) {
              Object(_core_promiseUtils_js__WEBPACK_IMPORTED_MODULE_9__["isAbortError"])(t) || h.error(t);
            }), this.notifyChange("updating");
          }
        }, {
          key: "attach",
          value: function attach() {
            this._bitmapContainer = new _engine_BitmapContainer_js__WEBPACK_IMPORTED_MODULE_12__["BitmapContainer"](), this.container.addChild(this._bitmapContainer), this.strategy = new _support_ExportStrategy_js__WEBPACK_IMPORTED_MODULE_14__["default"]({
              container: this._bitmapContainer,
              fetchSource: this.fetchBitmapData.bind(this),
              requestUpdate: this.requestUpdate.bind(this)
            });
          }
        }, {
          key: "detach",
          value: function detach() {
            this.strategy.destroy(), this.strategy = null, this.container.removeChild(this._bitmapContainer), this._bitmapContainer.removeAllChildren();
          }
        }, {
          key: "moveStart",
          value: function moveStart() {}
        }, {
          key: "viewChange",
          value: function viewChange() {}
        }, {
          key: "moveEnd",
          value: function moveEnd() {
            this.requestUpdate();
          }
        }, {
          key: "fetchBitmapData",
          value: function fetchBitmapData(t, e, r) {
            return this.layer.fetchImage(t, e, r, {
              timestamp: this.refreshTimestamp
            });
          }
        }, {
          key: "doRefresh",
          value: function () {
            var _doRefresh = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
              return regeneratorRuntime.wrap(function _callee$(_context) {
                while (1) {
                  switch (_context.prev = _context.next) {
                    case 0:
                      this.requestUpdate();

                    case 1:
                    case "end":
                      return _context.stop();
                  }
                }
              }, _callee, this);
            }));

            function doRefresh() {
              return _doRefresh.apply(this, arguments);
            }

            return doRefresh;
          }()
        }, {
          key: "isUpdating",
          value: function isUpdating() {
            return this.strategy.updating || this.updateRequested;
          }
        }]);

        return c;
      }(Object(_layers_RefreshableLayerView_js__WEBPACK_IMPORTED_MODULE_10__["RefreshableLayerView"])(Object(_LayerView2D_js__WEBPACK_IMPORTED_MODULE_13__["LayerView2DMixin"])(_layers_LayerView_js__WEBPACK_IMPORTED_MODULE_11__["default"])));

      Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_4__["property"])()], c.prototype, "strategy", void 0), Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_4__["property"])({
        dependsOn: ["strategy.updating"]
      })], c.prototype, "updating", void 0), c = Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_subclass_js__WEBPACK_IMPORTED_MODULE_5__["subclass"])("esri.views.2d.layers.BaseDynamicLayerView2D")], c);
      var d = c;
      /* harmony default export */

      __webpack_exports__["default"] = d;
      /***/
    }
  }]);
})();
//# sourceMappingURL=layers-BaseDynamicLayerView2D-js-es5.js.map