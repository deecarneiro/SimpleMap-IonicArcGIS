(function () {
  function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

  function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

  function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

  function _createForOfIteratorHelper(o, allowArrayLike) { var it; if (typeof Symbol === "undefined" || o[Symbol.iterator] == null) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = o[Symbol.iterator](); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it["return"] != null) it["return"](); } finally { if (didErr) throw err; } } }; }

  function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

  function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

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

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["processors-HeatmapProcessor-js"], {
    /***/
    "Mx58":
    /*!*******************************************************************************************!*\
      !*** ./node_modules/@arcgis/core/views/2d/layers/features/processors/HeatmapProcessor.js ***!
      \*******************************************************************************************/

    /*! exports provided: default */

    /***/
    function Mx58(module, __webpack_exports__, __webpack_require__) {
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


      var _core_maybe_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ../../../../../core/maybe.js */
      "srIe");
      /* harmony import */


      var _core_Logger_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ../../../../../core/Logger.js */
      "6S2I");
      /* harmony import */


      var _core_accessorSupport_ensureType_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ../../../../../core/accessorSupport/ensureType.js */
      "zqDF");
      /* harmony import */


      var _core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ../../../../../core/accessorSupport/decorators/property.js */
      "WbKI");
      /* harmony import */


      var _core_accessorSupport_decorators_subclass_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ../../../../../core/accessorSupport/decorators/subclass.js */
      "04ZG");
      /* harmony import */


      var _core_urlUtils_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! ../../../../../core/urlUtils.js */
      "4EHJ");
      /* harmony import */


      var _core_uuid_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! ../../../../../core/uuid.js */
      "ju1D");
      /* harmony import */


      var _portal_support_resourceExtension_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! ../../../../../portal/support/resourceExtension.js */
      "9AIY");
      /* harmony import */


      var _core_accessorSupport_diffUtils_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
      /*! ../../../../../core/accessorSupport/diffUtils.js */
      "DxxZ");
      /* harmony import */


      var _renderers_support_heatmapUtils_js__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
      /*! ../../../../../renderers/support/heatmapUtils.js */
      "AfLA");
      /* harmony import */


      var _BaseProcessor_js__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
      /*! ./BaseProcessor.js */
      "ukaK");
      /*
      All material copyright ESRI, All Rights Reserved, unless otherwise specified.
      See https://js.arcgis.com/4.18/esri/copyright.txt for details.
      */


      var a = /*#__PURE__*/function (_BaseProcessor_js__WE) {
        _inherits(a, _BaseProcessor_js__WE);

        var _super = _createSuper(a);

        function a() {
          var _this;

          _classCallCheck(this, a);

          _this = _super.apply(this, arguments), _this.type = "heatmap", _this._tileKeyToFeatureSets = new Map();
          return _this;
        }

        _createClass(a, [{
          key: "initialize",
          value: function initialize() {
            this.handles.add([this.tileStore.on("update", this.onTileUpdate.bind(this))]);
          }
        }, {
          key: "update",
          value: function () {
            var _update = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(e, t) {
              var r;
              return regeneratorRuntime.wrap(function _callee$(_context) {
                while (1) {
                  switch (_context.prev = _context.next) {
                    case 0:
                      r = t.schema.processors[0];

                      if (!("heatmap" !== r.type)) {
                        _context.next = 3;
                        break;
                      }

                      return _context.abrupt("return");

                    case 3:
                      Object(_core_accessorSupport_diffUtils_js__WEBPACK_IMPORTED_MODULE_10__["diff"])(this._schema, r) && (e.mesh = !0, this._schema = r);

                    case 4:
                    case "end":
                      return _context.stop();
                  }
                }
              }, _callee, this);
            }));

            function update(_x, _x2) {
              return _update.apply(this, arguments);
            }

            return update;
          }()
        }, {
          key: "onTileUpdate",
          value: function onTileUpdate(e) {
            var _iterator = _createForOfIteratorHelper(e.removed),
                _step;

            try {
              for (_iterator.s(); !(_step = _iterator.n()).done;) {
                var t = _step.value;

                this._tileKeyToFeatureSets["delete"](t.key.id);
              }
            } catch (err) {
              _iterator.e(err);
            } finally {
              _iterator.f();
            }
          }
        }, {
          key: "onTileData",
          value: function () {
            var _onTileData = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee2(e, r, s) {
              var i, _a, p, c, n, d;

              return regeneratorRuntime.wrap(function _callee2$(_context2) {
                while (1) {
                  switch (_context2.prev = _context2.next) {
                    case 0:
                      this._tileKeyToFeatureSets.has(e.key.id) && "replace" !== r.type || this._tileKeyToFeatureSets.set(e.key.id, new Map());
                      i = this._tileKeyToFeatureSets.get(e.key.id);
                      Object(_core_maybe_js__WEBPACK_IMPORTED_MODULE_2__["isSome"])(r.addOrUpdate) && i.set(r.addOrUpdate.instance, r);
                      _a = r.end;

                      if (!(i.forEach(function (e) {
                        return _a = _a || e.end;
                      }), !_a)) {
                        _context2.next = 6;
                        break;
                      }

                      return _context2.abrupt("return");

                    case 6:
                      p = [];
                      i.forEach(function (e) {
                        Object(_core_maybe_js__WEBPACK_IMPORTED_MODULE_2__["isSome"])(e.addOrUpdate) && p.push(e.addOrUpdate);
                      });
                      c = Object(_renderers_support_heatmapUtils_js__WEBPACK_IMPORTED_MODULE_11__["calculateHeatmapIntensityInfoReaders"])(p, this._schema.mesh, 512, 512), n = {
                        tileKey: e.key.id,
                        intensityInfo: c
                      }, d = [c.matrix];
                      return _context2.abrupt("return", this.remoteClient.invoke("tileRenderer.onTileData", n, _objectSpread(_objectSpread({}, s), {}, {
                        transferList: d
                      })));

                    case 10:
                    case "end":
                      return _context2.stop();
                  }
                }
              }, _callee2, this);
            }));

            function onTileData(_x3, _x4, _x5) {
              return _onTileData.apply(this, arguments);
            }

            return onTileData;
          }()
        }, {
          key: "onTileError",
          value: function onTileError(e, t, r) {
            return this.remoteClient.invoke("tileRenderer.onTileError", {
              tileKey: e.id,
              error: t
            }, r);
          }
        }]);

        return a;
      }(_BaseProcessor_js__WEBPACK_IMPORTED_MODULE_12__["default"]);

      a = Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_subclass_js__WEBPACK_IMPORTED_MODULE_6__["subclass"])("esri.views.2d.layers.features.processors.HeatmapProcessor")], a);
      var p = a;
      /* harmony default export */

      __webpack_exports__["default"] = p;
      /***/
    }
  }]);
})();
//# sourceMappingURL=processors-HeatmapProcessor-js-es5.js.map