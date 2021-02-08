(function () {
  function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

  function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

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

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["layers-StreamLayerView2D-js"], {
    /***/
    "+haL":
    /*!************************************************************************!*\
      !*** ./node_modules/@arcgis/core/views/2d/layers/StreamLayerView2D.js ***!
      \************************************************************************/

    /*! exports provided: default */

    /***/
    function haL(module, __webpack_exports__, __webpack_require__) {
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


      var _core_maybe_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ../../../core/maybe.js */
      "srIe");
      /* harmony import */


      var _core_Logger_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ../../../core/Logger.js */
      "6S2I");
      /* harmony import */


      var _core_accessorSupport_ensureType_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ../../../core/accessorSupport/ensureType.js */
      "zqDF");
      /* harmony import */


      var _core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ../../../core/accessorSupport/decorators/property.js */
      "WbKI");
      /* harmony import */


      var _core_accessorSupport_decorators_subclass_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ../../../core/accessorSupport/decorators/subclass.js */
      "04ZG");
      /* harmony import */


      var _core_Error_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! ../../../core/Error.js */
      "zlDU");
      /* harmony import */


      var _core_urlUtils_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! ../../../core/urlUtils.js */
      "4EHJ");
      /* harmony import */


      var _core_uuid_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! ../../../core/uuid.js */
      "ju1D");
      /* harmony import */


      var _portal_support_resourceExtension_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
      /*! ../../../portal/support/resourceExtension.js */
      "9AIY");
      /* harmony import */


      var _tasks_support_FeatureSet_js__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
      /*! ../../../tasks/support/FeatureSet.js */
      "8prj");
      /* harmony import */


      var _support_util_js__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
      /*! ./support/util.js */
      "RaXU");
      /* harmony import */


      var _FeatureLayerView2D_js__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
      /*! ./FeatureLayerView2D.js */
      "GJxj");
      /*
      All material copyright ESRI, All Rights Reserved, unless otherwise specified.
      See https://js.arcgis.com/4.18/esri/copyright.txt for details.
      */


      function p(e, o) {
        if (Object(_core_maybe_js__WEBPACK_IMPORTED_MODULE_2__["isNone"])(e) && Object(_core_maybe_js__WEBPACK_IMPORTED_MODULE_2__["isNone"])(o)) return null;
        var i = {};
        return Object(_core_maybe_js__WEBPACK_IMPORTED_MODULE_2__["isSome"])(o) && (i.geometry = o.toJSON()), Object(_core_maybe_js__WEBPACK_IMPORTED_MODULE_2__["isSome"])(e) && (i.where = e), i;
      }

      var l = /*#__PURE__*/function (_FeatureLayerView2D_j) {
        _inherits(l, _FeatureLayerView2D_j);

        var _super = _createSuper(l);

        function l() {
          var _this;

          _classCallCheck(this, l);

          _this = _super.apply(this, arguments), _this._enabledDataReceived = !1, _this.errorString = null, _this.connectionStatus = "disconnected";
          return _this;
        }

        _createClass(l, [{
          key: "initialize",
          value: function initialize() {
            var _this2 = this;

            this.handles.add([this.layer.watch("purgeOptions", function () {
              return _this2._update();
            })]);
          }
        }, {
          key: "destroy",
          value: function destroy() {
            this.connectionStatus = "disconnected";
          }
        }, {
          key: "connectionError",
          get: function get() {
            if (this.errorString) return new _core_Error_js__WEBPACK_IMPORTED_MODULE_7__["default"]("stream-controller", this.errorString);
          }
        }, {
          key: "on",
          value: function on(e, t) {
            "data-received" === e && (this._enabledDataReceived = !0, this._proxy.enableEvent("data-received", !0));

            var r = _get(_getPrototypeOf(l.prototype), "on", this).call(this, e, t),
                o = this;

            return {
              remove: function remove() {
                r.remove(), "data-received" === e && (o._proxy.closed || o.hasEventListener("data-received") || o._proxy.enableEvent("data-received", !1));
              }
            };
          }
        }, {
          key: "queryLatestObservations",
          value: function queryLatestObservations(e, t) {
            var _this3 = this;

            if (!(this.layer.timeInfo.endField || this.layer.timeInfo.startField)) throw new _core_Error_js__WEBPACK_IMPORTED_MODULE_7__["default"]("streamlayer-no-timeField", "queryLatestObservation can only be used with services that define a TrackIdField");
            return this._proxy.queryLatestObservations(this._cleanUpQuery(e), t).then(function (e) {
              var t = _tasks_support_FeatureSet_js__WEBPACK_IMPORTED_MODULE_11__["default"].fromJSON(e);

              return t.features.forEach(function (e) {
                e.layer = _this3.layer, e.sourceLayer = _this3.layer;
              }), t;
            });
          }
        }, {
          key: "_createClientOptions",
          value: function _createClientOptions() {
            var _this4 = this;

            return _objectSpread(_objectSpread({}, _get(_getPrototypeOf(l.prototype), "_createClientOptions", this).call(this)), {}, {
              setProperty: function setProperty(e) {
                _this4.set(e.propertyName, e.value);
              }
            });
          }
        }, {
          key: "_createTileRendererHash",
          value: function _createTileRendererHash(e) {
            var t = "".concat(JSON.stringify(this.layer.purgeOptions), ".").concat(JSON.stringify(p(this.layer.definitionExpression, this.layer.geometryDefinition)), ")");
            return _get(_getPrototypeOf(l.prototype), "_createTileRendererHash", this).call(this, e) + t;
          }
        }, {
          key: "_createServiceOptions",
          value: function () {
            var _createServiceOptions2 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
              var e, t, r, o, i, s;
              return regeneratorRuntime.wrap(function _callee$(_context) {
                while (1) {
                  switch (_context.prev = _context.next) {
                    case 0:
                      e = this.layer, t = e.objectIdField, r = e.fields.map(function (e) {
                        return e.toJSON();
                      }), o = Object(_support_util_js__WEBPACK_IMPORTED_MODULE_12__["toJSONGeometryType"])(e.geometryType), i = e.timeInfo && e.timeInfo.toJSON() || null, s = e.spatialReference ? e.spatialReference.toJSON() : null;
                      return _context.abrupt("return", {
                        type: "stream",
                        fields: r,
                        geometryType: o,
                        objectIdField: t,
                        timeInfo: i,
                        source: this.layer.parsedUrl,
                        serviceFilter: p(this.layer.definitionExpression, this.layer.geometryDefinition),
                        purgeOptions: this.layer.purgeOptions.toJSON(),
                        enableDataReceived: this._enabledDataReceived,
                        spatialReference: s,
                        maxReconnectionAttempts: this.layer.maxReconnectionAttempts,
                        maxReconnectionInterval: this.layer.maxReconnectionInterval,
                        updateInterval: this.layer.updateInterval
                      });

                    case 2:
                    case "end":
                      return _context.stop();
                  }
                }
              }, _callee, this);
            }));

            function _createServiceOptions() {
              return _createServiceOptions2.apply(this, arguments);
            }

            return _createServiceOptions;
          }()
        }]);

        return l;
      }(_FeatureLayerView2D_js__WEBPACK_IMPORTED_MODULE_13__["default"]);

      Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_5__["property"])()], l.prototype, "errorString", void 0), Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_5__["property"])({
        dependsOn: ["errorString"],
        readOnly: !0
      })], l.prototype, "connectionError", null), Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_5__["property"])()], l.prototype, "connectionStatus", void 0), l = Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_subclass_js__WEBPACK_IMPORTED_MODULE_6__["subclass"])("esri.views.2d.layers.StreamLayerView2D")], l);
      var d = l;
      /* harmony default export */

      __webpack_exports__["default"] = d;
      /***/
    }
  }]);
})();
//# sourceMappingURL=layers-StreamLayerView2D-js-es5.js.map