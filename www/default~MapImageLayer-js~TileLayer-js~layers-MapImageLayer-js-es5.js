(function () {
  function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

  function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

  function _iterableToArrayLimit(arr, i) { if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr))) return; var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

  function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

  function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

  function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

  function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

  function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

  function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

  function _createForOfIteratorHelper(o, allowArrayLike) { var it; if (typeof Symbol === "undefined" || o[Symbol.iterator] == null) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e12) { throw _e12; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = o[Symbol.iterator](); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e13) { didErr = true; err = _e13; }, f: function f() { try { if (!normalCompletion && it["return"] != null) it["return"](); } finally { if (didErr) throw err; } } }; }

  function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

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

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["default~MapImageLayer-js~TileLayer-js~layers-MapImageLayer-js"], {
    /***/
    "1Ana":
    /*!*******************************************************************!*\
      !*** ./node_modules/@arcgis/core/layers/mixins/SublayersOwner.js ***!
      \*******************************************************************/

    /*! exports provided: SublayersOwner, forEachSublayer */

    /***/
    function Ana(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "SublayersOwner", function () {
        return f;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "forEachSublayer", function () {
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


      var _core_accessorSupport_utils_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ../../core/accessorSupport/utils.js */
      "TDcG");
      /* harmony import */


      var _core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ../../core/accessorSupport/decorators/property.js */
      "WbKI");
      /* harmony import */


      var _core_accessorSupport_decorators_subclass_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ../../core/accessorSupport/decorators/subclass.js */
      "04ZG");
      /* harmony import */


      var _core_Error_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! ../../core/Error.js */
      "zlDU");
      /* harmony import */


      var _core_urlUtils_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! ../../core/urlUtils.js */
      "4EHJ");
      /* harmony import */


      var _core_uuid_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! ../../core/uuid.js */
      "ju1D");
      /* harmony import */


      var _core_accessorSupport_PropertyOrigin_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
      /*! ../../core/accessorSupport/PropertyOrigin.js */
      "ku/q");
      /* harmony import */


      var _portal_support_resourceExtension_js__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
      /*! ../../portal/support/resourceExtension.js */
      "9AIY");
      /* harmony import */


      var _core_Collection_js__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
      /*! ../../core/Collection.js */
      "LE9a");
      /* harmony import */


      var _core_CollectionFlattener_js__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
      /*! ../../core/CollectionFlattener.js */
      "TRCY");
      /* harmony import */


      var _support_Sublayer_js__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(
      /*! ../support/Sublayer.js */
      "6dDx");
      /* harmony import */


      var _support_sublayerUtils_js__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(
      /*! ../support/sublayerUtils.js */
      "Ilhi");
      /*
      All material copyright ESRI, All Rights Reserved, unless otherwise specified.
      See https://js.arcgis.com/4.18/esri/copyright.txt for details.
      */


      var b = _core_Logger_js__WEBPACK_IMPORTED_MODULE_2__["default"].getLogger("esri.layers.TileLayer");

      var p = _core_Collection_js__WEBPACK_IMPORTED_MODULE_12__["default"].ofType(_support_Sublayer_js__WEBPACK_IMPORTED_MODULE_14__["default"]);

      function d(e, r) {
        e && e.forEach(function (e) {
          r(e), e.sublayers && e.sublayers.length && d(e.sublayers, r);
        });
      }

      var f = function f(r) {
        var f = /*#__PURE__*/function (_r) {
          _inherits(f, _r);

          var _super = _createSuper(f);

          function f() {
            var _this;

            _classCallCheck(this, f);

            for (var _len = arguments.length, e = new Array(_len), _key = 0; _key < _len; _key++) {
              e[_key] = arguments[_key];
            }

            _this = _super.call.apply(_super, [this].concat(e)), _this.allSublayers = new _core_CollectionFlattener_js__WEBPACK_IMPORTED_MODULE_13__["default"]({
              root: _assertThisInitialized(_this),
              rootCollectionNames: ["sublayers"],
              getChildrenFunction: function getChildrenFunction(e) {
                return e.sublayers;
              }
            }), _this.sublayersSourceJSON = {
              2: {},
              3: {},
              4: {},
              5: {}
            }, _this.watch("sublayers", function (e, r) {
              return _this._handleSublayersChange(e, r);
            }, !0);
            return _this;
          }

          _createClass(f, [{
            key: "readSublayers",
            value: function readSublayers(e, r) {
              if (!r || !e) return;
              var t = this.sublayersSourceJSON,
                  o = Object(_core_accessorSupport_PropertyOrigin_js__WEBPACK_IMPORTED_MODULE_10__["nameToId"])(r.origin);
              if (o < 2) return;
              if (t[o] = {
                context: r,
                visibleLayers: e.visibleLayers || t[o].visibleLayers,
                layers: e.layers || t[o].layers
              }, o > 2) return;

              this._set("serviceSublayers", this.createSublayersForOrigin("service").sublayers);

              var _this$createSublayers = this.createSublayersForOrigin("web-document"),
                  a = _this$createSublayers.sublayers,
                  l = _this$createSublayers.origin,
                  n = Object(_core_accessorSupport_utils_js__WEBPACK_IMPORTED_MODULE_4__["getProperties"])(this);

              n.setDefaultOrigin(l), this._set("sublayers", new p(a)), n.setDefaultOrigin("user");
            }
          }, {
            key: "findSublayerById",
            value: function findSublayerById(e) {
              return this.allSublayers.find(function (r) {
                return r.id === e;
              });
            }
          }, {
            key: "createServiceSublayers",
            value: function createServiceSublayers() {
              return this.createSublayersForOrigin("service").sublayers;
            }
          }, {
            key: "createSublayersForOrigin",
            value: function createSublayersForOrigin(e) {
              var r = Object(_core_accessorSupport_PropertyOrigin_js__WEBPACK_IMPORTED_MODULE_10__["nameToId"])("web-document" === e ? "web-map" : e);
              var s = 2,
                  t = this.sublayersSourceJSON[2].layers,
                  o = this.sublayersSourceJSON[2].context,
                  a = null;
              var n = [3, 4, 5].filter(function (e) {
                return e <= r;
              });

              var _iterator = _createForOfIteratorHelper(n),
                  _step;

              try {
                for (_iterator.s(); !(_step = _iterator.n()).done;) {
                  var _e3 = _step.value;
                  var _r3 = this.sublayersSourceJSON[_e3];
                  Object(_support_sublayerUtils_js__WEBPACK_IMPORTED_MODULE_15__["isSublayerOverhaul"])(_r3.layers) && (s = _e3, t = _r3.layers, o = _r3.context, _r3.visibleLayers && (a = {
                    visibleLayers: _r3.visibleLayers,
                    context: _r3.context
                  }));
                }
              } catch (err) {
                _iterator.e(err);
              } finally {
                _iterator.f();
              }

              var u = [3, 4, 5].filter(function (e) {
                return e > s && e <= r;
              });
              var b = null;

              var _iterator2 = _createForOfIteratorHelper(u),
                  _step2;

              try {
                for (_iterator2.s(); !(_step2 = _iterator2.n()).done;) {
                  var _e4 = _step2.value;
                  var _this$sublayersSource = this.sublayersSourceJSON[_e4],
                      _r4 = _this$sublayersSource.layers,
                      _s = _this$sublayersSource.visibleLayers,
                      _t = _this$sublayersSource.context;
                  _r4 && (b = {
                    layers: _r4,
                    context: _t
                  }), _s && (a = {
                    visibleLayers: _s,
                    context: _t
                  });
                }
              } catch (err) {
                _iterator2.e(err);
              } finally {
                _iterator2.f();
              }

              var _f = function (e, r) {
                var s = [],
                    t = {};
                return e ? (e.forEach(function (e) {
                  var o = new _support_Sublayer_js__WEBPACK_IMPORTED_MODULE_14__["default"]();

                  if (o.read(e, r), t[o.id] = o, null != e.parentLayerId && -1 !== e.parentLayerId) {
                    var _r2 = t[e.parentLayerId];
                    _r2.sublayers || (_r2.sublayers = []), _r2.sublayers.unshift(o);
                  } else s.unshift(o);
                }), s) : s;
              }(t, o),
                  h = new Map(),
                  m = new Set();

              if (b) {
                var _iterator3 = _createForOfIteratorHelper(b.layers),
                    _step3;

                try {
                  for (_iterator3.s(); !(_step3 = _iterator3.n()).done;) {
                    var _e = _step3.value;
                    h.set(_e.id, _e);
                  }
                } catch (err) {
                  _iterator3.e(err);
                } finally {
                  _iterator3.f();
                }
              }

              if (a) {
                var _iterator4 = _createForOfIteratorHelper(a.visibleLayers),
                    _step4;

                try {
                  for (_iterator4.s(); !(_step4 = _iterator4.n()).done;) {
                    var _e2 = _step4.value;
                    m.add(_e2);
                  }
                } catch (err) {
                  _iterator4.e(err);
                } finally {
                  _iterator4.f();
                }
              }

              return d(_f, function (e) {
                b && e.read(h.get(e.id), b.context), a && e.read({
                  defaultVisibility: m.has(e.id)
                }, a.context);
              }), {
                origin: Object(_core_accessorSupport_PropertyOrigin_js__WEBPACK_IMPORTED_MODULE_10__["idToName"])(s),
                sublayers: new p({
                  items: _f
                })
              };
            }
          }, {
            key: "read",
            value: function read(e, r) {
              _get(_getPrototypeOf(f.prototype), "read", this).call(this, e, r), this.readSublayers(e, r);
            }
          }, {
            key: "_handleSublayersChange",
            value: function _handleSublayersChange(e, r) {
              var _this2 = this;

              r && (r.forEach(function (e) {
                e.parent = null, e.layer = null;
              }), this.handles.remove("sublayers-owner")), e && (e.forEach(function (e) {
                e.parent = _this2, e.layer = _this2;
              }), this.handles.add([e.on("after-add", function (_ref) {
                var e = _ref.item;
                e.parent = _this2, e.layer = _this2;
              }), e.on("after-remove", function (_ref2) {
                var e = _ref2.item;
                e.parent = null, e.layer = null;
              })], "sublayers-owner"), "tile" === this.type && this.handles.add(e.on("before-changes", function (e) {
                b.error(new _core_Error_js__WEBPACK_IMPORTED_MODULE_7__["default"]("tilelayer:sublayers-non-modifiable", "Sublayer can't be added, moved, or removed from the layer's sublayers", {
                  layer: _this2
                })), e.preventDefault();
              }), "sublayers-owner"));
            }
          }]);

          return f;
        }(r);

        return Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_5__["property"])({
          readOnly: !0
        })], f.prototype, "allSublayers", void 0), Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_5__["property"])({
          readOnly: !0,
          type: _core_Collection_js__WEBPACK_IMPORTED_MODULE_12__["default"].ofType(_support_Sublayer_js__WEBPACK_IMPORTED_MODULE_14__["default"])
        })], f.prototype, "serviceSublayers", void 0), Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_5__["property"])({
          value: null,
          type: p,
          json: {
            read: !1,
            write: {
              allowNull: !0,
              ignoreOrigin: !0
            }
          }
        })], f.prototype, "sublayers", void 0), Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_5__["property"])({
          readOnly: !0
        })], f.prototype, "sublayersSourceJSON", void 0), f = Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_subclass_js__WEBPACK_IMPORTED_MODULE_6__["subclass"])("esri.layers.mixins.SublayersOwner")], f), f;
      };
      /***/

    },

    /***/
    "6dDx":
    /*!**************************************************************!*\
      !*** ./node_modules/@arcgis/core/layers/support/Sublayer.js ***!
      \**************************************************************/

    /*! exports provided: default */

    /***/
    function dDx(module, __webpack_exports__, __webpack_require__) {
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


      var _core_accessorSupport_utils_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ../../core/accessorSupport/utils.js */
      "TDcG");
      /* harmony import */


      var _core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ../../core/accessorSupport/decorators/property.js */
      "WbKI");
      /* harmony import */


      var _core_accessorSupport_decorators_cast_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! ../../core/accessorSupport/decorators/cast.js */
      "Gj5k");
      /* harmony import */


      var _core_accessorSupport_decorators_reader_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! ../../core/accessorSupport/decorators/reader.js */
      "r88o");
      /* harmony import */


      var _core_accessorSupport_decorators_subclass_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! ../../core/accessorSupport/decorators/subclass.js */
      "04ZG");
      /* harmony import */


      var _core_accessorSupport_decorators_writer_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
      /*! ../../core/accessorSupport/decorators/writer.js */
      "Cduq");
      /* harmony import */


      var _core_Error_js__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
      /*! ../../core/Error.js */
      "zlDU");
      /* harmony import */


      var _core_urlUtils_js__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
      /*! ../../core/urlUtils.js */
      "4EHJ");
      /* harmony import */


      var _core_uuid_js__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
      /*! ../../core/uuid.js */
      "ju1D");
      /* harmony import */


      var _core_accessorSupport_PropertyOrigin_js__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(
      /*! ../../core/accessorSupport/PropertyOrigin.js */
      "ku/q");
      /* harmony import */


      var _portal_support_resourceExtension_js__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(
      /*! ../../portal/support/resourceExtension.js */
      "9AIY");
      /* harmony import */


      var _core_promiseUtils_js__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(
      /*! ../../core/promiseUtils.js */
      "9MzC");
      /* harmony import */


      var _geometry_Extent_js__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(
      /*! ../../geometry/Extent.js */
      "OvF4");
      /* harmony import */


      var _geometry_js__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(
      /*! ../../geometry.js */
      "4GrV");
      /* harmony import */


      var _core_Collection_js__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(
      /*! ../../core/Collection.js */
      "LE9a");
      /* harmony import */


      var _fieldUtils_js__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(
      /*! ./fieldUtils.js */
      "wdpY");
      /* harmony import */


      var _core_Identifiable_js__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(
      /*! ../../core/Identifiable.js */
      "pdg3");
      /* harmony import */


      var _PopupTemplate_js__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(
      /*! ../../PopupTemplate.js */
      "SFah");
      /* harmony import */


      var _request_js__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(
      /*! ../../request.js */
      "Lqtk");
      /* harmony import */


      var _core_Loadable_js__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(
      /*! ../../core/Loadable.js */
      "bV/r");
      /* harmony import */


      var _chunks_symbols_js__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(
      /*! ../../chunks/symbols.js */
      "nNR5");
      /* harmony import */


      var _core_MultiOriginJSONSupport_js__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(
      /*! ../../core/MultiOriginJSONSupport.js */
      "5pQd");
      /* harmony import */


      var _renderers_Renderer_js__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(
      /*! ../../renderers/Renderer.js */
      "ZnuT");
      /* harmony import */


      var _renderers_ClassBreaksRenderer_js__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(
      /*! ../../renderers/ClassBreaksRenderer.js */
      "tCO6");
      /* harmony import */


      var _renderers_UniqueValueRenderer_js__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(
      /*! ../../renderers/UniqueValueRenderer.js */
      "2gBT");
      /* harmony import */


      var _renderers_DictionaryRenderer_js__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(
      /*! ../../renderers/DictionaryRenderer.js */
      "JhoD");
      /* harmony import */


      var _renderers_DotDensityRenderer_js__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(
      /*! ../../renderers/DotDensityRenderer.js */
      "tI3Y");
      /* harmony import */


      var _renderers_HeatmapRenderer_js__WEBPACK_IMPORTED_MODULE_32__ = __webpack_require__(
      /*! ../../renderers/HeatmapRenderer.js */
      "R4xK");
      /* harmony import */


      var _renderers_SimpleRenderer_js__WEBPACK_IMPORTED_MODULE_33__ = __webpack_require__(
      /*! ../../renderers/SimpleRenderer.js */
      "/1dM");
      /* harmony import */


      var _renderers_support_types_js__WEBPACK_IMPORTED_MODULE_34__ = __webpack_require__(
      /*! ../../renderers/support/types.js */
      "XNvV");
      /* harmony import */


      var _renderers_support_jsonUtils_js__WEBPACK_IMPORTED_MODULE_35__ = __webpack_require__(
      /*! ../../renderers/support/jsonUtils.js */
      "+Xal");
      /* harmony import */


      var _Field_js__WEBPACK_IMPORTED_MODULE_36__ = __webpack_require__(
      /*! ./Field.js */
      "ofM5");
      /* harmony import */


      var _FieldsIndex_js__WEBPACK_IMPORTED_MODULE_37__ = __webpack_require__(
      /*! ./FieldsIndex.js */
      "gLc9");
      /* harmony import */


      var _LabelClass_js__WEBPACK_IMPORTED_MODULE_38__ = __webpack_require__(
      /*! ./LabelClass.js */
      "wkZP");
      /* harmony import */


      var _FeatureType_js__WEBPACK_IMPORTED_MODULE_39__ = __webpack_require__(
      /*! ./FeatureType.js */
      "orEy");
      /* harmony import */


      var _source_MapLayerSource_js__WEBPACK_IMPORTED_MODULE_40__ = __webpack_require__(
      /*! ./source/MapLayerSource.js */
      "WmHL");
      /* harmony import */


      var _chunks_DataLayerSource_js__WEBPACK_IMPORTED_MODULE_41__ = __webpack_require__(
      /*! ../../chunks/DataLayerSource.js */
      "s7US");
      /* harmony import */


      var _support_popupUtils_js__WEBPACK_IMPORTED_MODULE_42__ = __webpack_require__(
      /*! ../../support/popupUtils.js */
      "9Ruv");
      /* harmony import */


      var _tasks_support_Query_js__WEBPACK_IMPORTED_MODULE_43__ = __webpack_require__(
      /*! ../../tasks/support/Query.js */
      "xk++");
      /* harmony import */


      var _core_HandleOwner_js__WEBPACK_IMPORTED_MODULE_44__ = __webpack_require__(
      /*! ../../core/HandleOwner.js */
      "kJYu");
      /*
      All material copyright ESRI, All Rights Reserved, unless otherwise specified.
      See https://js.arcgis.com/4.18/esri/copyright.txt for details.
      */


      var _U;

      function A(e) {
        return e && "esriSMS" === e.type;
      }

      function C(e, r, i) {
        var t;
        return {
          ignoreOrigin: !0,
          enabled: !!i && "map-image" === (null == (t = i.layer) ? void 0 : t.type) && (i.writeSublayerStructure || this.originIdOf(r) >= Object(_core_accessorSupport_PropertyOrigin_js__WEBPACK_IMPORTED_MODULE_14__["nameToId"])(i.origin))
        };
      }

      function q(e, r, i) {
        var t;
        return {
          enabled: !!i && "tile" === (null == (t = i.layer) ? void 0 : t.type) && this._isOverridden(r)
        };
      }

      function $(e, r, i) {
        return {
          ignoreOrigin: !0,
          enabled: i && i.writeSublayerStructure || !1
        };
      }

      function J(e, r, i) {
        return {
          ignoreOrigin: !0,
          enabled: !!i && (i.writeSublayerStructure || this.originIdOf(r) >= Object(_core_accessorSupport_PropertyOrigin_js__WEBPACK_IMPORTED_MODULE_14__["nameToId"])(i.origin))
        };
      }

      var R = _core_Logger_js__WEBPACK_IMPORTED_MODULE_3__["default"].getLogger("esri.layers.support.Sublayer");

      var B = 0;
      var Q = new Set();
      Q.add("layer"), Q.add("parent"), Q.add("loaded"), Q.add("loadStatus"), Q.add("loadError"), Q.add("loadWarnings");

      var G = _U = /*#__PURE__*/function (_Object) {
        _inherits(U, _Object);

        var _super2 = _createSuper(U);

        function U(e) {
          var _this3;

          _classCallCheck(this, U);

          _this3 = _super2.call(this, e), _this3.capabilities = void 0, _this3.fields = null, _this3.fullExtent = null, _this3.globalIdField = null, _this3.legendEnabled = !0, _this3.objectIdField = null, _this3.popupEnabled = !0, _this3.popupTemplate = null, _this3.sourceJSON = null, _this3.title = null, _this3.typeIdField = null, _this3.types = null;
          return _this3;
        }

        _createClass(U, [{
          key: "load",
          value: function () {
            var _load = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee2(e) {
              var _this4 = this;

              return regeneratorRuntime.wrap(function _callee2$(_context2) {
                while (1) {
                  switch (_context2.prev = _context2.next) {
                    case 0:
                      return _context2.abrupt("return", (this.addResolvingPromise(_asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
                        var r, i, t, _r5;

                        return regeneratorRuntime.wrap(function _callee$(_context) {
                          while (1) {
                            switch (_context.prev = _context.next) {
                              case 0:
                                if (!(!_this4.layer && !_this4.url)) {
                                  _context.next = 2;
                                  break;
                                }

                                throw new _core_Error_js__WEBPACK_IMPORTED_MODULE_11__["default"]("sublayer:missing-layer", "Sublayer can't be loaded without being part of a layer", {
                                  sublayer: _this4
                                });

                              case 2:
                                i = null;

                                if (!(!_this4.layer || _this4.originIdOf("url") > 2 || "data-layer" === (null == (r = _this4.source) ? void 0 : r.type))) {
                                  _context.next = 9;
                                  break;
                                }

                                _context.next = 6;
                                return Object(_request_js__WEBPACK_IMPORTED_MODULE_23__["default"])(_this4.url, _objectSpread({
                                  responseType: "json",
                                  query: {
                                    f: "json"
                                  }
                                }, e));

                              case 6:
                                i = _context.sent.data;
                                _context.next = 14;
                                break;

                              case 9:
                                _r5 = _this4.id;
                                "map-layer" === (null == (t = _this4.source) ? void 0 : t.type) && (_r5 = _this4.source.mapLayerId);
                                _context.next = 13;
                                return _this4.layer.fetchSublayerInfo(_r5, e);

                              case 13:
                                i = _context.sent;

                              case 14:
                                i && (_this4.sourceJSON = i, _this4.read({
                                  layerDefinition: i
                                }, {
                                  origin: "service"
                                }));

                              case 15:
                              case "end":
                                return _context.stop();
                            }
                          }
                        }, _callee);
                      }))()), this));

                    case 1:
                    case "end":
                      return _context2.stop();
                  }
                }
              }, _callee2, this);
            }));

            function load(_x) {
              return _load.apply(this, arguments);
            }

            return load;
          }()
        }, {
          key: "readCapabilities",
          value: function readCapabilities(e, r) {
            var i = (e = (r = r.layerDefinition || r).capabilities || e) ? e.toLowerCase().split(",").map(function (e) {
              return e.trim();
            }) : [];
            return {
              exportMap: {
                supportsModification: !!r.canModifyLayer
              },
              operations: {
                supportsQuery: -1 !== i.indexOf("query")
              }
            };
          }
        }, {
          key: "definitionExpression",
          set: function set(e) {
            this._setAndNotifyLayer("definitionExpression", e);
          }
        }, {
          key: "fieldsIndex",
          get: function get() {
            return new _FieldsIndex_js__WEBPACK_IMPORTED_MODULE_37__["default"](this.fields || []);
          }
        }, {
          key: "readGlobalIdFieldFromService",
          value: function readGlobalIdFieldFromService(e, r) {
            if ((r = r.layerDefinition || r).globalIdField) return r.globalIdField;

            if (r.fields) {
              var _iterator5 = _createForOfIteratorHelper(r.fields),
                  _step5;

              try {
                for (_iterator5.s(); !(_step5 = _iterator5.n()).done;) {
                  var _e5 = _step5.value;
                  if ("esriFieldTypeGlobalID" === _e5.type) return _e5.name;
                }
              } catch (err) {
                _iterator5.e(err);
              } finally {
                _iterator5.f();
              }
            }
          }
        }, {
          key: "id",
          get: function get() {
            var e = this._get("id");

            return null == e ? B++ : e;
          },
          set: function set(e) {
            this._get("id") !== e && (!1 !== this.get("layer.capabilities.exportMap.supportsDynamicLayers") ? this._set("id", e) : this._logLockedError("id", "capability not available 'layer.capabilities.exportMap.supportsDynamicLayers'"));
          }
        }, {
          key: "labelingInfo",
          set: function set(e) {
            this._setAndNotifyLayer("labelingInfo", e);
          }
        }, {
          key: "writeLabelingInfo",
          value: function writeLabelingInfo(e, r, i, t) {
            e && e.length && (r.layerDefinition = {
              drawingInfo: {
                labelingInfo: e.map(function (e) {
                  return e.write({}, t);
                })
              }
            });
          }
        }, {
          key: "labelsVisible",
          set: function set(e) {
            this._setAndNotifyLayer("labelsVisible", e);
          }
        }, {
          key: "layer",
          set: function set(e) {
            this._set("layer", e), this.sublayers && this.sublayers.forEach(function (r) {
              return r.layer = e;
            });
          }
        }, {
          key: "listMode",
          set: function set(e) {
            this._set("listMode", e);
          }
        }, {
          key: "minScale",
          set: function set(e) {
            this._setAndNotifyLayer("minScale", e);
          }
        }, {
          key: "readMinScale",
          value: function readMinScale(e, r) {
            return r.minScale || r.layerDefinition && r.layerDefinition.minScale || 0;
          }
        }, {
          key: "maxScale",
          set: function set(e) {
            this._setAndNotifyLayer("maxScale", e);
          }
        }, {
          key: "readMaxScale",
          value: function readMaxScale(e, r) {
            return r.maxScale || r.layerDefinition && r.layerDefinition.maxScale || 0;
          }
        }, {
          key: "readObjectIdFieldFromService",
          value: function readObjectIdFieldFromService(e, r) {
            if ((r = r.layerDefinition || r).objectIdField) return r.objectIdField;

            if (r.fields) {
              var _iterator6 = _createForOfIteratorHelper(r.fields),
                  _step6;

              try {
                for (_iterator6.s(); !(_step6 = _iterator6.n()).done;) {
                  var _e6 = _step6.value;
                  if ("esriFieldTypeOID" === _e6.type) return _e6.name;
                }
              } catch (err) {
                _iterator6.e(err);
              } finally {
                _iterator6.f();
              }
            }
          }
        }, {
          key: "opacity",
          set: function set(e) {
            this._setAndNotifyLayer("opacity", e);
          }
        }, {
          key: "readOpacity",
          value: function readOpacity(e, r) {
            var i = r.layerDefinition;
            return 1 - .01 * (null != i.transparency ? i.transparency : i.drawingInfo.transparency);
          }
        }, {
          key: "writeOpacity",
          value: function writeOpacity(e, r, i, t) {
            r.layerDefinition = {
              drawingInfo: {
                transparency: 100 - 100 * e
              }
            };
          }
        }, {
          key: "writeParent",
          value: function writeParent(e, r) {
            this.parent && this.parent !== this.layer ? r.parentLayerId = Object(_core_accessorSupport_ensureType_js__WEBPACK_IMPORTED_MODULE_4__["ensureInteger"])(this.parent.id) : r.parentLayerId = -1;
          }
        }, {
          key: "defaultPopupTemplate",
          get: function get() {
            return this.createPopupTemplate();
          }
        }, {
          key: "renderer",
          set: function set(e) {
            if (e) {
              var _iterator7 = _createForOfIteratorHelper(e.getSymbols()),
                  _step7;

              try {
                for (_iterator7.s(); !(_step7 = _iterator7.n()).done;) {
                  var r = _step7.value;

                  if (Object(_chunks_symbols_js__WEBPACK_IMPORTED_MODULE_25__["i"])(r)) {
                    R.warn("Sublayer renderer should use 2D symbols");
                    break;
                  }
                }
              } catch (err) {
                _iterator7.e(err);
              } finally {
                _iterator7.f();
              }
            }

            this._setAndNotifyLayer("renderer", e);
          }
        }, {
          key: "source",
          get: function get() {
            return this._get("source") || new _source_MapLayerSource_js__WEBPACK_IMPORTED_MODULE_40__["MapLayerSource"]({
              mapLayerId: this.id
            });
          },
          set: function set(e) {
            this._setAndNotifyLayer("source", e);
          }
        }, {
          key: "sublayers",
          set: function set(e) {
            this._handleSublayersChange(e, this._get("sublayers")), this._set("sublayers", e);
          }
        }, {
          key: "castSublayers",
          value: function castSublayers(e) {
            return Object(_core_accessorSupport_ensureType_js__WEBPACK_IMPORTED_MODULE_4__["ensureType"])(_core_Collection_js__WEBPACK_IMPORTED_MODULE_19__["default"].ofType(_U), e);
          }
        }, {
          key: "writeSublayers",
          value: function writeSublayers(e, r, i) {
            this.get("sublayers.length") && (r[i] = this.sublayers.map(function (e) {
              return e.id;
            }).toArray().reverse());
          }
        }, {
          key: "readTypeIdField",
          value: function readTypeIdField(e, r) {
            var i = (r = r.layerDefinition || r).typeIdField;

            if (i) {
              var _e7 = Object(_fieldUtils_js__WEBPACK_IMPORTED_MODULE_20__["getField"])(r.fields, i);

              if (_e7) return _e7.name;
            }

            return null;
          }
        }, {
          key: "url",
          get: function get() {
            var e, r;
            var i = null != (e = null == (r = this.layer) ? void 0 : r.parsedUrl) ? e : this._lastParsedUrl,
                t = this.source;
            if (!i) return null;
            if (this._lastParsedUrl = i, "map-layer" === (null == t ? void 0 : t.type)) return "".concat(i.path, "/").concat(t.mapLayerId);
            var o = {
              layer: JSON.stringify({
                source: this.source
              })
            };
            return "".concat(i.path, "/dynamicLayer?").concat(Object(_core_urlUtils_js__WEBPACK_IMPORTED_MODULE_12__["objectToQuery"])(o));
          },
          set: function set(e) {
            e ? this._override("url", e) : this._clearOverride("url");
          }
        }, {
          key: "visible",
          set: function set(e) {
            this._setAndNotifyLayer("visible", e);
          }
        }, {
          key: "writeVisible",
          value: function writeVisible(e, r, i, t) {
            r[i] = this.getAtOrigin("defaultVisibility", "service") || e;
          }
        }, {
          key: "clone",
          value: function clone() {
            var _Object2 = Object(_core_accessorSupport_utils_js__WEBPACK_IMPORTED_MODULE_5__["getProperties"])(this),
                e = _Object2.store,
                r = new _U();

            return Object(_core_accessorSupport_utils_js__WEBPACK_IMPORTED_MODULE_5__["getProperties"])(r).store = e.clone(Q), this.url, r._lastParsedUrl = this._lastParsedUrl, r;
          }
        }, {
          key: "createPopupTemplate",
          value: function createPopupTemplate(e) {
            return Object(_support_popupUtils_js__WEBPACK_IMPORTED_MODULE_42__["createPopupTemplate"])(this, e);
          }
        }, {
          key: "createQuery",
          value: function createQuery() {
            return new _tasks_support_Query_js__WEBPACK_IMPORTED_MODULE_43__["default"]({
              returnGeometry: !0,
              where: this.definitionExpression || "1=1"
            });
          }
        }, {
          key: "createFeatureLayer",
          value: function () {
            var _createFeatureLayer = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee3() {
              var e, i, t, o;
              return regeneratorRuntime.wrap(function _callee3$(_context3) {
                while (1) {
                  switch (_context3.prev = _context3.next) {
                    case 0:
                      if (!this.hasOwnProperty("sublayers")) {
                        _context3.next = 2;
                        break;
                      }

                      return _context3.abrupt("return", null);

                    case 2:
                      t = null == (e = this.layer) ? void 0 : e.parsedUrl;
                      0;
                      _context3.next = 6;
                      return Promise.all(
                      /*! import() | FeatureLayer-js */
                      [__webpack_require__.e("default~BingMapsLayer-js~BuildingSceneLayer-js~CSVLayer-js~ElevationLayer-js~FeatureLayer-js~GeoRSSL~17f7a7e8"), __webpack_require__.e("default~BuildingSceneLayer-js~CSVLayer-js~FeatureLayer-js~ImageryLayer-js~ImageryTileLayer-js~KMLLay~c6eed8bf"), __webpack_require__.e("default~BuildingSceneLayer-js~CSVLayer-js~FeatureLayer-js~ImageryLayer-js~ImageryTileLayer-js~KMLLay~166cc929"), __webpack_require__.e("default~BuildingSceneLayer-js~CSVLayer-js~FeatureLayer-js~ImageryLayer-js~ImageryTileLayer-js~KMLLay~253c3a50"), __webpack_require__.e("default~BuildingSceneLayer-js~CSVLayer-js~FeatureLayer-js~KMLLayer-js~MapImageLayer-js~MapNotesLayer~dc20c115"), __webpack_require__.e("default~BuildingSceneLayer-js~CSVLayer-js~FeatureLayer-js~ImageryLayer-js~MapImageLayer-js~MapNotesL~ca7a17ec"), __webpack_require__.e("default~BuildingSceneLayer-js~CSVLayer-js~FeatureLayer-js~MapImageLayer-js~MapNotesLayer-js~RouteLay~17087e09"), __webpack_require__.e("default~BuildingSceneLayer-js~CSVLayer-js~FeatureLayer-js~MapNotesLayer-js~RouteLayer-js~SceneLayer-~7c09c9db"), __webpack_require__.e("FeatureLayer-js")]).then(__webpack_require__.bind(null,
                      /*! ../FeatureLayer.js */
                      "W9Wu"));

                    case 6:
                      _context3.t0 = _context3.sent["default"];
                      _context3.t1 = {
                        url: t.path
                      };
                      o = new _context3.t0(_context3.t1);
                      return _context3.abrupt("return", (t && this.source && ("map-layer" === this.source.type ? o.layerId = this.source.mapLayerId : o.dynamicDataSource = this.source), null != this.layer.refreshInterval && (o.refreshInterval = this.layer.refreshInterval), this.definitionExpression && (o.definitionExpression = this.definitionExpression), this.originIdOf("labelingInfo") > 2 && (o.labelingInfo = Object(_core_lang_js__WEBPACK_IMPORTED_MODULE_2__["clone"])(this.labelingInfo)), this.originIdOf("labelsVisible") > 0 && (o.labelsVisible = this.labelsVisible), this.originIdOf("legendEnabled") > 0 && (o.legendEnabled = this.legendEnabled), this.originIdOf("visible") > 0 && (o.visible = this.visible), this.originIdOf("minScale") > 0 && (o.minScale = this.minScale), this.originIdOf("maxScale") > 0 && (o.maxScale = this.maxScale), this.originIdOf("opacity") > 0 && (o.opacity = this.opacity), this.originIdOf("popupTemplate") > 0 && (o.popupTemplate = Object(_core_lang_js__WEBPACK_IMPORTED_MODULE_2__["clone"])(this.popupTemplate)), this.originIdOf("renderer") > 2 && (o.renderer = Object(_core_lang_js__WEBPACK_IMPORTED_MODULE_2__["clone"])(this.renderer)), "data-layer" === (null == (i = this.source) ? void 0 : i.type) && (o.dynamicDataSource = this.source.clone()), this.originIdOf("title") > 0 && (o.title = this.title), "map-image" === this.layer.type && this.layer.originIdOf("customParameters") > 0 && (o.customParameters = this.layer.customParameters), "tile" === this.layer.type && this.layer.originIdOf("customParameters") > 0 && (o.customParameters = this.layer.customParameters), o));

                    case 10:
                    case "end":
                      return _context3.stop();
                  }
                }
              }, _callee3, this);
            }));

            function createFeatureLayer() {
              return _createFeatureLayer.apply(this, arguments);
            }

            return createFeatureLayer;
          }()
        }, {
          key: "getFeatureType",
          value: function getFeatureType(e) {
            var r = this.typeIdField,
                i = this.types;
            if (!r || !e) return null;
            var t = e.attributes ? e.attributes[r] : void 0;
            if (null == t) return null;
            var o = null;
            return i.some(function (e) {
              var r = e.id;
              return null != r && (r.toString() === t.toString() && (o = e), !!o);
            }), o;
          }
        }, {
          key: "getFieldDomain",
          value: function getFieldDomain(e, r) {
            var i = r && r.feature,
                t = this.getFeatureType(i);

            if (t) {
              var _r6 = t.domains && t.domains[e];

              if (_r6 && "inherited" !== _r6.type) return _r6;
            }

            return this._getLayerDomain(e);
          }
        }, {
          key: "queryFeatures",
          value: function queryFeatures() {
            var _this5 = this;

            var e = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : this.createQuery();
            var r = arguments.length > 1 ? arguments[1] : undefined;
            return this.load().then(function () {
              if (!_this5.get("capabilities.operations.supportsQuery")) throw new _core_Error_js__WEBPACK_IMPORTED_MODULE_11__["default"]("Sublayer.queryFeatures", "this layer doesn't support queries.");
              return Object(_core_promiseUtils_js__WEBPACK_IMPORTED_MODULE_16__["all"])([Promise.resolve().then(__webpack_require__.bind(null,
              /*! ../../tasks/operations/query.js */
              "M0H4")), Promise.resolve().then(__webpack_require__.bind(null,
              /*! ../../tasks/support/FeatureSet.js */
              "8prj"))]);
            }).then(function (_ref4) {
              var _ref5 = _slicedToArray(_ref4, 2),
                  i = _ref5[0].executeQuery,
                  t = _ref5[1]["default"];

              return i(_this5.url, _tasks_support_Query_js__WEBPACK_IMPORTED_MODULE_43__["default"].from(e), _this5.layer ? _this5.layer.spatialReference : null, _objectSpread(_objectSpread({}, r), {}, {
                query: _objectSpread({}, _this5.layer.customParameters)
              })).then(function (e) {
                return t.fromJSON(e.data);
              });
            }).then(function (e) {
              return e && e.features && e.features.forEach(function (e) {
                e.sourceLayer = _this5;
              }), e;
            });
          }
        }, {
          key: "toExportImageJSON",
          value: function toExportImageJSON() {
            var _this6 = this;

            var e;
            var r = {
              id: this.id,
              source: (null == (e = this.source) ? void 0 : e.toJSON()) || {
                mapLayerId: this.id,
                type: "mapLayer"
              }
            };
            this.definitionExpression && (r.definitionExpression = this.definitionExpression);
            var i = ["renderer", "labelingInfo", "opacity", "labelsVisible"].reduce(function (e, r) {
              return e[r] = _this6.originIdOf(r), e;
            }, {});

            if (Object.keys(i).some(function (e) {
              return i[e] > 2;
            })) {
              var _e8 = r.drawingInfo = {};

              i.renderer > 2 && (_e8.renderer = this.renderer ? this.renderer.toJSON() : null), i.labelsVisible > 2 && (_e8.showLabels = this.labelsVisible), this.labelsVisible && i.labelingInfo > 2 && (_e8.labelingInfo = this.labelingInfo ? this.labelingInfo.map(function (e) {
                return e.write({}, {
                  origin: "service"
                });
              }) : null, _e8.showLabels = !0), i.opacity > 2 && (_e8.transparency = 100 - 100 * this.opacity), this._assignDefaultSymbolColors(_e8.renderer);
            }

            return r;
          }
        }, {
          key: "_assignDefaultSymbolColors",
          value: function _assignDefaultSymbolColors(e) {
            this._forEachSimpleMarkerSymbols(e, function (e) {
              e.color || "esriSMSX" !== e.style && "esriSMSCross" !== e.style || (e.outline && e.outline.color ? e.color = e.outline.color : e.color = [0, 0, 0, 0]);
            });
          }
        }, {
          key: "_forEachSimpleMarkerSymbols",
          value: function _forEachSimpleMarkerSymbols(e, r) {
            if (e) {
              var i = "uniqueValueInfos" in e ? e.uniqueValueInfos : "classBreakInfos" in e ? e.classBreakInfos : [];

              var _iterator8 = _createForOfIteratorHelper(i),
                  _step8;

              try {
                for (_iterator8.s(); !(_step8 = _iterator8.n()).done;) {
                  var _e9 = _step8.value;
                  A(_e9.symbol) && r(_e9.symbol);
                }
              } catch (err) {
                _iterator8.e(err);
              } finally {
                _iterator8.f();
              }

              "symbol" in e && A(e.symbol) && r(e.symbol), "defaultSymbol" in e && A(e.defaultSymbol) && r(e.defaultSymbol);
            }
          }
        }, {
          key: "_setAndNotifyLayer",
          value: function _setAndNotifyLayer(e, r) {
            var i = this.layer,
                t = this._get(e);

            var o, s;

            switch (e) {
              case "definitionExpression":
                o = "supportsSublayerDefinitionExpression";

              case "minScale":
              case "maxScale":
              case "visible":
                o = "supportsSublayerVisibility";
                break;

              case "labelingInfo":
              case "labelsVisible":
              case "opacity":
              case "renderer":
              case "source":
                o = "supportsDynamicLayers", s = "supportsModification";
            }

            var a = Object(_core_accessorSupport_utils_js__WEBPACK_IMPORTED_MODULE_5__["getProperties"])(this).getDefaultOrigin();

            if ("service" !== a) {
              if (o && !1 === this.get("layer.capabilities.exportMap.".concat(o))) return void this._logLockedError(e, "capability not available 'layer.capabilities.exportMap.".concat(o, "'"));
              if (s && !1 === this.get("capabilities.exportMap.".concat(s))) return void this._logLockedError(e, "capability not available 'capabilities.exportMap.".concat(s, "'"));
            }

            "source" !== e || "not-loaded" === this.loadStatus ? (this._set(e, r), "service" !== a && t !== r && i && i.emit && i.emit("sublayer-update", {
              propertyName: e,
              target: this
            })) : this._logLockedError(e, "'source' can't be changed after calling sublayer.load()");
          }
        }, {
          key: "_handleSublayersChange",
          value: function _handleSublayersChange(e, r) {
            var _this7 = this;

            r && (r.forEach(function (e) {
              e.parent = null, e.layer = null;
            }), this.handles.removeAll()), e && (e.forEach(function (e) {
              e.parent = _this7, e.layer = _this7.layer;
            }), this.handles.add([e.on("after-add", function (_ref6) {
              var e = _ref6.item;
              e.parent = _this7, e.layer = _this7.layer;
            }), e.on("after-remove", function (_ref7) {
              var e = _ref7.item;
              e.parent = null, e.layer = null;
            }), e.on("before-changes", function (e) {
              var r = _this7.get("layer.capabilities.exportMap.supportsSublayersChanges");

              null == r || r || (R.error(new _core_Error_js__WEBPACK_IMPORTED_MODULE_11__["default"]("sublayer:sublayers-non-modifiable", "Sublayer can't be added, moved, or removed from the layer's sublayers", {
                sublayer: _this7,
                layer: _this7.layer
              })), e.preventDefault());
            })]));
          }
        }, {
          key: "_logLockedError",
          value: function _logLockedError(e, r) {
            R.error(new _core_Error_js__WEBPACK_IMPORTED_MODULE_11__["default"]("sublayer:locked", "Property '".concat(e, "' can't be changed on Sublayer from the layer '").concat(this.layer.id, "'"), {
              reason: r,
              sublayer: this,
              layer: this.layer
            }));
          }
        }, {
          key: "_getLayerDomain",
          value: function _getLayerDomain(e) {
            var r = this.fieldsIndex.get(e);
            return r ? r.domain : null;
          }
        }]);

        return U;
      }(Object(_core_HandleOwner_js__WEBPACK_IMPORTED_MODULE_44__["HandleOwnerMixin"])(Object(_core_MultiOriginJSONSupport_js__WEBPACK_IMPORTED_MODULE_26__["MultiOriginJSONMixin"])(Object(_core_Identifiable_js__WEBPACK_IMPORTED_MODULE_21__["IdentifiableMixin"])(_core_Loadable_js__WEBPACK_IMPORTED_MODULE_24__["default"]))));

      G.test = {
        isMapImageLayerOverridePolicy: function isMapImageLayerOverridePolicy(e) {
          return e === $ || e === C;
        },
        isTileImageLayerOverridePolicy: function isTileImageLayerOverridePolicy(e) {
          return e === q;
        }
      }, Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_6__["property"])({
        readOnly: !0
      })], G.prototype, "capabilities", void 0), Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_reader_js__WEBPACK_IMPORTED_MODULE_8__["reader"])("service", "capabilities", ["layerDefinition.canModifyLayer", "layerDefinition.capabilities"])], G.prototype, "readCapabilities", null), Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_6__["property"])({
        type: String,
        value: null,
        json: {
          read: {
            source: "layerDefinition.definitionExpression"
          },
          write: {
            target: "layerDefinition.definitionExpression",
            overridePolicy: C
          }
        }
      })], G.prototype, "definitionExpression", null), Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_6__["property"])({
        type: [_Field_js__WEBPACK_IMPORTED_MODULE_36__["default"]],
        json: {
          origins: {
            service: {
              read: {
                source: "layerDefinition.fields"
              }
            }
          }
        }
      })], G.prototype, "fields", void 0), Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_6__["property"])({
        readOnly: !0,
        dependsOn: ["fields"]
      })], G.prototype, "fieldsIndex", null), Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_6__["property"])({
        type: _geometry_Extent_js__WEBPACK_IMPORTED_MODULE_17__["default"],
        json: {
          read: {
            source: "layerDefinition.extent"
          }
        }
      })], G.prototype, "fullExtent", void 0), Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_6__["property"])({
        type: String
      })], G.prototype, "globalIdField", void 0), Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_reader_js__WEBPACK_IMPORTED_MODULE_8__["reader"])("service", "globalIdField", ["layerDefinition.globalIdField", "layerDefinition.fields"])], G.prototype, "readGlobalIdFieldFromService", null), Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_6__["property"])({
        type: _core_accessorSupport_ensureType_js__WEBPACK_IMPORTED_MODULE_4__["Integer"],
        json: {
          write: {
            ignoreOrigin: !0
          }
        }
      })], G.prototype, "id", null), Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_6__["property"])({
        value: null,
        type: [_LabelClass_js__WEBPACK_IMPORTED_MODULE_38__["default"]],
        json: {
          read: {
            source: "layerDefinition.drawingInfo.labelingInfo"
          },
          write: {
            target: "layerDefinition.drawingInfo.labelingInfo",
            overridePolicy: $
          }
        }
      })], G.prototype, "labelingInfo", null), Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_writer_js__WEBPACK_IMPORTED_MODULE_10__["writer"])("labelingInfo")], G.prototype, "writeLabelingInfo", null), Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_6__["property"])({
        type: Boolean,
        value: !0,
        json: {
          read: {
            source: "layerDefinition.drawingInfo.showLabels"
          },
          write: {
            target: "layerDefinition.drawingInfo.showLabels",
            overridePolicy: $
          }
        }
      })], G.prototype, "labelsVisible", null), Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_6__["property"])({
        value: null
      })], G.prototype, "layer", null), Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_6__["property"])({
        type: Boolean,
        value: !0,
        json: {
          origins: {
            service: {
              read: {
                enabled: !1
              }
            }
          },
          read: {
            source: "showLegend"
          },
          write: {
            target: "showLegend",
            overridePolicy: J
          }
        }
      })], G.prototype, "legendEnabled", void 0), Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_6__["property"])({
        type: ["show", "hide", "hide-children"],
        value: "show",
        json: {
          read: !1,
          write: !1,
          origins: {
            "web-scene": {
              read: !0,
              write: !0
            }
          }
        }
      })], G.prototype, "listMode", null), Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_6__["property"])({
        type: Number,
        value: 0,
        json: {
          write: {
            overridePolicy: $
          }
        }
      })], G.prototype, "minScale", null), Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_reader_js__WEBPACK_IMPORTED_MODULE_8__["reader"])("minScale", ["minScale", "layerDefinition.minScale"])], G.prototype, "readMinScale", null), Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_6__["property"])({
        type: Number,
        value: 0,
        json: {
          write: {
            overridePolicy: $
          }
        }
      })], G.prototype, "maxScale", null), Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_reader_js__WEBPACK_IMPORTED_MODULE_8__["reader"])("maxScale", ["maxScale", "layerDefinition.maxScale"])], G.prototype, "readMaxScale", null), Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_6__["property"])({
        type: String
      })], G.prototype, "objectIdField", void 0), Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_reader_js__WEBPACK_IMPORTED_MODULE_8__["reader"])("service", "objectIdField", ["layerDefinition.objectIdField", "layerDefinition.fields"])], G.prototype, "readObjectIdFieldFromService", null), Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_6__["property"])({
        type: Number,
        value: 1,
        json: {
          write: {
            target: "layerDefinition.drawingInfo.transparency",
            overridePolicy: $
          }
        }
      })], G.prototype, "opacity", null), Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_reader_js__WEBPACK_IMPORTED_MODULE_8__["reader"])("opacity", ["layerDefinition.drawingInfo.transparency", "layerDefinition.transparency"])], G.prototype, "readOpacity", null), Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_writer_js__WEBPACK_IMPORTED_MODULE_10__["writer"])("opacity")], G.prototype, "writeOpacity", null), Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_6__["property"])({
        json: {
          type: _core_accessorSupport_ensureType_js__WEBPACK_IMPORTED_MODULE_4__["Integer"],
          write: {
            target: "parentLayerId",
            allowNull: !0,
            overridePolicy: $
          }
        }
      })], G.prototype, "parent", void 0), Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_writer_js__WEBPACK_IMPORTED_MODULE_10__["writer"])("parent")], G.prototype, "writeParent", null), Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_6__["property"])({
        type: Boolean,
        value: !0,
        json: {
          read: {
            source: "disablePopup",
            reader: function reader(e, r) {
              return !r.disablePopup;
            }
          },
          write: {
            target: "disablePopup",
            overridePolicy: J,
            writer: function writer(e, r, i) {
              r[i] = !e;
            }
          }
        }
      })], G.prototype, "popupEnabled", void 0), Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_6__["property"])({
        type: _PopupTemplate_js__WEBPACK_IMPORTED_MODULE_22__["default"],
        json: {
          read: {
            source: "popupInfo"
          },
          write: {
            target: "popupInfo",
            overridePolicy: J
          }
        }
      })], G.prototype, "popupTemplate", void 0), Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_6__["property"])({
        readOnly: !0,
        dependsOn: ["fields", "title"]
      })], G.prototype, "defaultPopupTemplate", null), Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_6__["property"])({
        types: _renderers_support_types_js__WEBPACK_IMPORTED_MODULE_34__["rendererTypes"],
        value: null,
        json: {
          name: "layerDefinition.drawingInfo.renderer",
          write: {
            overridePolicy: $
          },
          origins: {
            "web-scene": {
              types: _renderers_support_types_js__WEBPACK_IMPORTED_MODULE_34__["webSceneRendererTypes"],
              name: "layerDefinition.drawingInfo.renderer",
              write: {
                overridePolicy: $
              }
            }
          }
        }
      })], G.prototype, "renderer", null), Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_6__["property"])({
        types: {
          key: "type",
          base: null,
          typeMap: {
            "data-layer": _chunks_DataLayerSource_js__WEBPACK_IMPORTED_MODULE_41__["D"],
            "map-layer": _source_MapLayerSource_js__WEBPACK_IMPORTED_MODULE_40__["MapLayerSource"]
          }
        },
        cast: function cast(e) {
          if (e) {
            if ("mapLayerId" in e) return Object(_core_accessorSupport_ensureType_js__WEBPACK_IMPORTED_MODULE_4__["ensureClass"])(_source_MapLayerSource_js__WEBPACK_IMPORTED_MODULE_40__["MapLayerSource"], e);
            if ("dataSource" in e) return Object(_core_accessorSupport_ensureType_js__WEBPACK_IMPORTED_MODULE_4__["ensureClass"])(_chunks_DataLayerSource_js__WEBPACK_IMPORTED_MODULE_41__["D"], e);
          }

          return e;
        },
        json: {
          name: "layerDefinition.source",
          write: {
            overridePolicy: $
          }
        }
      })], G.prototype, "source", null), Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_6__["property"])()], G.prototype, "sourceJSON", void 0), Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_6__["property"])({
        value: null,
        json: {
          type: [_core_accessorSupport_ensureType_js__WEBPACK_IMPORTED_MODULE_4__["Integer"]],
          write: {
            target: "subLayerIds",
            allowNull: !0,
            overridePolicy: $
          }
        }
      })], G.prototype, "sublayers", null), Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_cast_js__WEBPACK_IMPORTED_MODULE_7__["cast"])("sublayers")], G.prototype, "castSublayers", null), Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_writer_js__WEBPACK_IMPORTED_MODULE_10__["writer"])("sublayers")], G.prototype, "writeSublayers", null), Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_6__["property"])({
        type: String,
        json: {
          read: {
            source: "name"
          },
          write: {
            target: "name",
            allowNull: !0,
            overridePolicy: J
          }
        }
      })], G.prototype, "title", void 0), Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_6__["property"])({
        type: String
      })], G.prototype, "typeIdField", void 0), Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_reader_js__WEBPACK_IMPORTED_MODULE_8__["reader"])("typeIdField", ["layerDefinition.typeIdField"])], G.prototype, "readTypeIdField", null), Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_6__["property"])({
        type: [_FeatureType_js__WEBPACK_IMPORTED_MODULE_39__["default"]],
        json: {
          origins: {
            service: {
              read: {
                source: "layerDefinition.types"
              }
            }
          }
        }
      })], G.prototype, "types", void 0), Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_6__["property"])({
        type: String,
        dependsOn: ["layer", "source"],
        json: {
          read: {
            source: "layerUrl"
          },
          write: {
            target: "layerUrl",
            overridePolicy: q
          }
        }
      })], G.prototype, "url", null), Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_6__["property"])({
        type: Boolean,
        value: !0,
        json: {
          read: {
            source: "defaultVisibility"
          },
          write: {
            target: "defaultVisibility",
            overridePolicy: $
          }
        }
      })], G.prototype, "visible", null), Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_writer_js__WEBPACK_IMPORTED_MODULE_10__["writer"])("visible")], G.prototype, "writeVisible", null), G = _U = Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_subclass_js__WEBPACK_IMPORTED_MODULE_9__["subclass"])("esri.layers.support.Sublayer")], G);
      var H = G;
      /* harmony default export */

      __webpack_exports__["default"] = H;
      /***/
    },

    /***/
    "Ilhi":
    /*!*******************************************************************!*\
      !*** ./node_modules/@arcgis/core/layers/support/sublayerUtils.js ***!
      \*******************************************************************/

    /*! exports provided: isExportDynamic, isSublayerOverhaul, shouldWriteSublayerStructure */

    /***/
    function Ilhi(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "isExportDynamic", function () {
        return n;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "isSublayerOverhaul", function () {
        return i;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "shouldWriteSublayerStructure", function () {
        return e;
      });
      /*
      All material copyright ESRI, All Rights Reserved, unless otherwise specified.
      See https://js.arcgis.com/4.18/esri/copyright.txt for details.
      */


      function e(e, n, i) {
        if (n.flatten(function (_ref8) {
          var e = _ref8.sublayers;
          return e;
        }).length !== e.length) return !0;
        return !!e.some(function (e) {
          return e.originIdOf("minScale") > i || e.originIdOf("maxScale") > i || e.originIdOf("renderer") > i || e.originIdOf("labelingInfo") > i || e.originIdOf("opacity") > i || e.originIdOf("labelsVisible") > i || e.originIdOf("source") > i;
        }) || !r(e, n);
      }

      function n(e, n, i) {
        return !!e.some(function (e) {
          var n = e.source;
          return !(!n || "map-layer" === n.type && n.mapLayerId === e.id && (!n.gdbVersion || n.gdbVersion === i.gdbVersion)) || e.originIdOf("renderer") > 2 || e.originIdOf("labelingInfo") > 2 || e.originIdOf("opacity") > 2 || e.originIdOf("labelsVisible") > 2;
        }) || !r(e, n);
      }

      function r(e, n) {
        if (!e || !e.length) return !0;
        var r = n.slice().reverse().flatten(function (_ref9) {
          var e = _ref9.sublayers;
          return e && e.toArray().reverse();
        }).map(function (e) {
          return e.id;
        }).toArray();
        if (e.length > r.length) return !1;
        var i = 0;
        var o = r.length;

        var _iterator9 = _createForOfIteratorHelper(e),
            _step9;

        try {
          for (_iterator9.s(); !(_step9 = _iterator9.n()).done;) {
            var _n2 = _step9.value.id;

            for (; i < o && r[i] !== _n2;) {
              i++;
            }

            if (i >= o) return !1;
          }
        } catch (err) {
          _iterator9.e(err);
        } finally {
          _iterator9.f();
        }

        return !0;
      }

      function i(e) {
        return !!e && e.some(function (e) {
          return null != e.minScale || e.layerDefinition && null != e.layerDefinition.minScale;
        });
      }
      /***/

    },

    /***/
    "MD9Z":
    /*!*********************************************************************!*\
      !*** ./node_modules/@arcgis/core/layers/mixins/ArcGISMapService.js ***!
      \*********************************************************************/

    /*! exports provided: ArcGISMapService */

    /***/
    function MD9Z(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ArcGISMapService", function () {
        return u;
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


      var _core_promiseUtils_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
      /*! ../../core/promiseUtils.js */
      "9MzC");
      /* harmony import */


      var _geometry_SpatialReference_js__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
      /*! ../../geometry/SpatialReference.js */
      "WZb1");
      /* harmony import */


      var _geometry_Extent_js__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
      /*! ../../geometry/Extent.js */
      "OvF4");
      /* harmony import */


      var _request_js__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
      /*! ../../request.js */
      "Lqtk");
      /* harmony import */


      var _support_commonProperties_js__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(
      /*! ../support/commonProperties.js */
      "IvSi");
      /*
      All material copyright ESRI, All Rights Reserved, unless otherwise specified.
      See https://js.arcgis.com/4.18/esri/copyright.txt for details.
      */


      var u = function u(_u2) {
        var c = /*#__PURE__*/function (_u) {
          _inherits(c, _u);

          var _super3 = _createSuper(c);

          function c() {
            var _this8;

            _classCallCheck(this, c);

            _this8 = _super3.apply(this, arguments), _this8.capabilities = void 0, _this8.copyright = null, _this8.fullExtent = null, _this8.legendEnabled = !0, _this8.spatialReference = null, _this8.version = null;
            return _this8;
          }

          _createClass(c, [{
            key: "readCapabilities",
            value: function readCapabilities(e, r) {
              var s = r.capabilities && r.capabilities.split(",").map(function (e) {
                return e.toLowerCase().trim();
              });
              if (!s) return {
                operations: {
                  supportsQuery: !1,
                  supportsExportMap: !1,
                  supportsExportTiles: !1,
                  supportsTileMap: !1
                },
                exportMap: null,
                exportTiles: null
              };
              var t = this.type,
                  o = -1 !== s.indexOf("query"),
                  i = -1 !== s.indexOf("map"),
                  p = !!r.exportTilesAllowed,
                  a = -1 !== s.indexOf("tilemap"),
                  l = "tile" !== t && !!r.supportsDynamicLayers,
                  n = "tile" !== t && (!r.tileInfo || l),
                  u = "tile" !== t && (!r.tileInfo || l);
              return {
                operations: {
                  supportsQuery: o,
                  supportsExportMap: i,
                  supportsExportTiles: p,
                  supportsTileMap: a
                },
                exportMap: i ? {
                  supportsSublayersChanges: "tile" !== t,
                  supportsDynamicLayers: l,
                  supportsSublayerVisibility: n,
                  supportsSublayerDefinitionExpression: u
                } : null,
                exportTiles: p ? {
                  maxExportTilesCount: +r.maxExportTilesCount
                } : null
              };
            }
          }, {
            key: "readVersion",
            value: function readVersion(e, r) {
              var s = r.currentVersion;
              return s || (s = r.hasOwnProperty("capabilities") || r.hasOwnProperty("tables") ? 10 : r.hasOwnProperty("supportedImageFormatTypes") ? 9.31 : 9.3), s;
            }
          }, {
            key: "fetchSublayerInfo",
            value: function () {
              var _fetchSublayerInfo = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee4(e, r) {
                return regeneratorRuntime.wrap(function _callee4$(_context4) {
                  while (1) {
                    switch (_context4.prev = _context4.next) {
                      case 0:
                        _context4.next = 2;
                        return this.fetchAllLayersAndTables(r);

                      case 2:
                        return _context4.abrupt("return", this._allLayersAndTablesMap.get(e));

                      case 3:
                      case "end":
                        return _context4.stop();
                    }
                  }
                }, _callee4, this);
              }));

              function fetchSublayerInfo(_x2, _x3) {
                return _fetchSublayerInfo.apply(this, arguments);
              }

              return fetchSublayerInfo;
            }()
          }, {
            key: "fetchAllLayersAndTables",
            value: function () {
              var _fetchAllLayersAndTables = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee5(e) {
                var _this9 = this;

                var r;
                return regeneratorRuntime.wrap(function _callee5$(_context5) {
                  while (1) {
                    switch (_context5.prev = _context5.next) {
                      case 0:
                        _context5.next = 2;
                        return this.load(e);

                      case 2:
                        this._allLayersAndTablesPromise || (this._allLayersAndTablesPromise = Object(_request_js__WEBPACK_IMPORTED_MODULE_13__["default"])(Object(_core_urlUtils_js__WEBPACK_IMPORTED_MODULE_7__["urlToObject"])(this.url).path + "/layers", {
                          responseType: "json",
                          query: _objectSpread({
                            f: "json"
                          }, this.customParameters)
                        }).then(function (e) {
                          _this9._allLayersAndTablesMap = new Map();

                          var _iterator10 = _createForOfIteratorHelper(e.data.layers),
                              _step10;

                          try {
                            for (_iterator10.s(); !(_step10 = _iterator10.n()).done;) {
                              var _r7 = _step10.value;

                              _this9._allLayersAndTablesMap.set(_r7.id, _r7);
                            }
                          } catch (err) {
                            _iterator10.e(err);
                          } finally {
                            _iterator10.f();
                          }

                          return {
                            result: e.data
                          };
                        }, function (e) {
                          return {
                            error: e
                          };
                        }));
                        _context5.next = 5;
                        return this._allLayersAndTablesPromise;

                      case 5:
                        r = _context5.sent;

                        if (!(Object(_core_promiseUtils_js__WEBPACK_IMPORTED_MODULE_10__["throwIfAborted"])(e), "result" in r)) {
                          _context5.next = 8;
                          break;
                        }

                        return _context5.abrupt("return", r.result);

                      case 8:
                        throw r.error;

                      case 9:
                      case "end":
                        return _context5.stop();
                    }
                  }
                }, _callee5, this);
              }));

              function fetchAllLayersAndTables(_x4) {
                return _fetchAllLayersAndTables.apply(this, arguments);
              }

              return fetchAllLayersAndTables;
            }()
          }]);

          return c;
        }(_u2);

        return Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_4__["property"])({
          readOnly: !0
        })], c.prototype, "capabilities", void 0), Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_reader_js__WEBPACK_IMPORTED_MODULE_5__["reader"])("service", "capabilities", ["capabilities", "exportTilesAllowed", "maxExportTilesCount", "supportsDynamicLayers", "tileInfo"])], c.prototype, "readCapabilities", null), Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_4__["property"])({
          json: {
            read: {
              source: "copyrightText"
            }
          }
        })], c.prototype, "copyright", void 0), Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_4__["property"])({
          type: _geometry_Extent_js__WEBPACK_IMPORTED_MODULE_12__["default"]
        })], c.prototype, "fullExtent", void 0), Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_4__["property"])({
          json: {
            origins: {
              service: {
                read: !1
              },
              "portal-item": {
                read: !1
              }
            }
          }
        })], c.prototype, "id", void 0), Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_4__["property"])({
          type: Boolean,
          json: {
            origins: {
              service: {
                read: {
                  enabled: !1
                }
              }
            },
            read: {
              source: "showLegend"
            },
            write: {
              target: "showLegend"
            }
          }
        })], c.prototype, "legendEnabled", void 0), Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_4__["property"])(_support_commonProperties_js__WEBPACK_IMPORTED_MODULE_14__["popupEnabled"])], c.prototype, "popupEnabled", void 0), Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_4__["property"])({
          type: _geometry_SpatialReference_js__WEBPACK_IMPORTED_MODULE_11__["default"]
        })], c.prototype, "spatialReference", void 0), Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_4__["property"])()], c.prototype, "version", void 0), Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_reader_js__WEBPACK_IMPORTED_MODULE_5__["reader"])("version", ["currentVersion", "capabilities", "tables", "supportedImageFormatTypes"])], c.prototype, "readVersion", null), c = Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_subclass_js__WEBPACK_IMPORTED_MODULE_6__["subclass"])("esri.layers.mixins.ArcGISMapService")], c), c;
      };
      /***/

    },

    /***/
    "iyhF":
    /*!**************************************************************************!*\
      !*** ./node_modules/@arcgis/core/layers/mixins/CustomParametersMixin.js ***!
      \**************************************************************************/

    /*! exports provided: CustomParametersMixin */

    /***/
    function iyhF(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "CustomParametersMixin", function () {
        return e;
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


      var e = function e(_e11) {
        var t = /*#__PURE__*/function (_e10) {
          _inherits(t, _e10);

          var _super4 = _createSuper(t);

          function t() {
            var _this10;

            _classCallCheck(this, t);

            _this10 = _super4.apply(this, arguments), _this10.customParameters = null;
            return _this10;
          }

          return t;
        }(_e11);

        return Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_4__["property"])({
          json: {
            write: !0,
            origins: {
              "web-scene": {
                write: !1
              }
            }
          }
        })], t.prototype, "customParameters", void 0), t = Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_subclass_js__WEBPACK_IMPORTED_MODULE_5__["subclass"])("esri.layers.mixins.CustomParametersMixin")], t), t;
      };
      /***/

    },

    /***/
    "orEy":
    /*!*****************************************************************!*\
      !*** ./node_modules/@arcgis/core/layers/support/FeatureType.js ***!
      \*****************************************************************/

    /*! exports provided: default */

    /***/
    function orEy(module, __webpack_exports__, __webpack_require__) {
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


      var _core_accessorSupport_decorators_reader_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ../../core/accessorSupport/decorators/reader.js */
      "r88o");
      /* harmony import */


      var _core_accessorSupport_decorators_subclass_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! ../../core/accessorSupport/decorators/subclass.js */
      "04ZG");
      /* harmony import */


      var _core_accessorSupport_decorators_writer_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! ../../core/accessorSupport/decorators/writer.js */
      "Cduq");
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


      var _core_JSONSupport_js__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
      /*! ../../core/JSONSupport.js */
      "ag7Y");
      /* harmony import */


      var _CodedValueDomain_js__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
      /*! ./CodedValueDomain.js */
      "QQZE");
      /* harmony import */


      var _InheritedDomain_js__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(
      /*! ./InheritedDomain.js */
      "tanU");
      /* harmony import */


      var _RangeDomain_js__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(
      /*! ./RangeDomain.js */
      "3z0I");
      /* harmony import */


      var _domains_js__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(
      /*! ./domains.js */
      "WXCn");
      /* harmony import */


      var _FeatureTemplate_js__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(
      /*! ./FeatureTemplate.js */
      "rOQw");
      /*
      All material copyright ESRI, All Rights Reserved, unless otherwise specified.
      See https://js.arcgis.com/4.18/esri/copyright.txt for details.
      */


      var l = /*#__PURE__*/function (_core_JSONSupport_js_) {
        _inherits(l, _core_JSONSupport_js_);

        var _super5 = _createSuper(l);

        function l(o) {
          var _this11;

          _classCallCheck(this, l);

          _this11 = _super5.call(this, o), _this11.id = null, _this11.name = null, _this11.domains = null, _this11.templates = null;
          return _this11;
        }

        _createClass(l, [{
          key: "readDomains",
          value: function readDomains(o) {
            var r = {};

            for (var e in o) {
              if (o.hasOwnProperty(e)) {
                var t = o[e];

                switch (t.type) {
                  case "range":
                    r[e] = _RangeDomain_js__WEBPACK_IMPORTED_MODULE_15__["default"].fromJSON(t);
                    break;

                  case "codedValue":
                    r[e] = _CodedValueDomain_js__WEBPACK_IMPORTED_MODULE_13__["default"].fromJSON(t);
                    break;

                  case "inherited":
                    r[e] = _InheritedDomain_js__WEBPACK_IMPORTED_MODULE_14__["default"].fromJSON(t);
                }
              }
            }

            return r;
          }
        }, {
          key: "writeDomains",
          value: function writeDomains(o, e) {
            var t = {};

            for (var r in o) {
              o.hasOwnProperty(r) && (t[r] = o[r] && o[r].toJSON());
            }

            Object(_core_lang_js__WEBPACK_IMPORTED_MODULE_2__["fixJson"])(t), e.domains = t;
          }
        }, {
          key: "readTemplates",
          value: function readTemplates(o) {
            return o && o.map(function (o) {
              return new _FeatureTemplate_js__WEBPACK_IMPORTED_MODULE_17__["default"](o);
            });
          }
        }, {
          key: "writeTemplates",
          value: function writeTemplates(o, r) {
            r.templates = o && o.map(function (o) {
              return o.toJSON();
            });
          }
        }]);

        return l;
      }(_core_JSONSupport_js__WEBPACK_IMPORTED_MODULE_12__["JSONSupport"]);

      Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_5__["property"])({
        json: {
          write: !0
        }
      })], l.prototype, "id", void 0), Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_5__["property"])({
        json: {
          write: !0
        }
      })], l.prototype, "name", void 0), Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_5__["property"])({
        json: {
          write: !0
        }
      })], l.prototype, "domains", void 0), Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_reader_js__WEBPACK_IMPORTED_MODULE_6__["reader"])("domains")], l.prototype, "readDomains", null), Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_writer_js__WEBPACK_IMPORTED_MODULE_8__["writer"])("domains")], l.prototype, "writeDomains", null), Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_5__["property"])({
        json: {
          write: !0
        }
      })], l.prototype, "templates", void 0), Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_reader_js__WEBPACK_IMPORTED_MODULE_6__["reader"])("templates")], l.prototype, "readTemplates", null), Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_writer_js__WEBPACK_IMPORTED_MODULE_8__["writer"])("templates")], l.prototype, "writeTemplates", null), l = Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_subclass_js__WEBPACK_IMPORTED_MODULE_7__["subclass"])("esri.layers.support.FeatureType")], l);
      var u = l;
      /* harmony default export */

      __webpack_exports__["default"] = u;
      /***/
    },

    /***/
    "rOQw":
    /*!*********************************************************************!*\
      !*** ./node_modules/@arcgis/core/layers/support/FeatureTemplate.js ***!
      \*********************************************************************/

    /*! exports provided: default */

    /***/
    function rOQw(module, __webpack_exports__, __webpack_require__) {
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


      var _core_accessorSupport_decorators_subclass_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! ../../core/accessorSupport/decorators/subclass.js */
      "04ZG");
      /* harmony import */


      var _core_accessorSupport_decorators_writer_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! ../../core/accessorSupport/decorators/writer.js */
      "Cduq");
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


      var _core_JSONSupport_js__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
      /*! ../../core/JSONSupport.js */
      "ag7Y");
      /*
      All material copyright ESRI, All Rights Reserved, unless otherwise specified.
      See https://js.arcgis.com/4.18/esri/copyright.txt for details.
      */


      var a = new _core_jsonMap_js__WEBPACK_IMPORTED_MODULE_6__["JSONMap"]({
        esriFeatureEditToolAutoCompletePolygon: "auto-complete-polygon",
        esriFeatureEditToolCircle: "circle",
        esriFeatureEditToolEllipse: "ellipse",
        esriFeatureEditToolFreehand: "freehand",
        esriFeatureEditToolLine: "line",
        esriFeatureEditToolNone: "none",
        esriFeatureEditToolPoint: "point",
        esriFeatureEditToolPolygon: "polygon",
        esriFeatureEditToolRectangle: "rectangle",
        esriFeatureEditToolArrow: "arrow",
        esriFeatureEditToolTriangle: "triangle",
        esriFeatureEditToolLeftArrow: "left-arrow",
        esriFeatureEditToolRightArrow: "right-arrow",
        esriFeatureEditToolUpArrow: "up-arrow",
        esriFeatureEditToolDownArrow: "down-arrow"
      });

      var n = /*#__PURE__*/function (_core_JSONSupport_js_2) {
        _inherits(n, _core_JSONSupport_js_2);

        var _super6 = _createSuper(n);

        function n(o) {
          var _this12;

          _classCallCheck(this, n);

          _this12 = _super6.call(this, o), _this12.name = null, _this12.description = null, _this12.drawingTool = null, _this12.prototype = null, _this12.thumbnail = null;
          return _this12;
        }

        _createClass(n, [{
          key: "writeDrawingTool",
          value: function writeDrawingTool(o, r) {
            r.drawingTool = a.toJSON(o);
          }
        }, {
          key: "writePrototype",
          value: function writePrototype(o, t) {
            t.prototype = Object(_core_lang_js__WEBPACK_IMPORTED_MODULE_2__["fixJson"])(Object(_core_lang_js__WEBPACK_IMPORTED_MODULE_2__["clone"])(o), !0);
          }
        }, {
          key: "writeThumbnail",
          value: function writeThumbnail(o, t) {
            t.thumbnail = Object(_core_lang_js__WEBPACK_IMPORTED_MODULE_2__["fixJson"])(Object(_core_lang_js__WEBPACK_IMPORTED_MODULE_2__["clone"])(o));
          }
        }]);

        return n;
      }(_core_JSONSupport_js__WEBPACK_IMPORTED_MODULE_12__["JSONSupport"]);

      Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_5__["property"])({
        json: {
          write: !0
        }
      })], n.prototype, "name", void 0), Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_5__["property"])({
        json: {
          write: !0
        }
      })], n.prototype, "description", void 0), Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_5__["property"])({
        json: {
          read: a.read,
          write: a.write
        }
      })], n.prototype, "drawingTool", void 0), Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_writer_js__WEBPACK_IMPORTED_MODULE_8__["writer"])("drawingTool")], n.prototype, "writeDrawingTool", null), Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_5__["property"])({
        json: {
          write: !0
        }
      })], n.prototype, "prototype", void 0), Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_writer_js__WEBPACK_IMPORTED_MODULE_8__["writer"])("prototype")], n.prototype, "writePrototype", null), Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_5__["property"])({
        json: {
          write: !0
        }
      })], n.prototype, "thumbnail", void 0), Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_writer_js__WEBPACK_IMPORTED_MODULE_8__["writer"])("thumbnail")], n.prototype, "writeThumbnail", null), n = Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_subclass_js__WEBPACK_IMPORTED_MODULE_7__["subclass"])("esri.layers.support.FeatureTemplate")], n);
      var u = n;
      /* harmony default export */

      __webpack_exports__["default"] = u;
      /***/
    }
  }]);
})();
//# sourceMappingURL=default~MapImageLayer-js~TileLayer-js~layers-MapImageLayer-js-es5.js.map