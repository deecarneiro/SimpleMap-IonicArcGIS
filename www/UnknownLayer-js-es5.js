(function () {
  function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }

  function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

  function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && Symbol.iterator in Object(iter)) return Array.from(iter); }

  function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }

  function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

  function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

  function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

  function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

  function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

  function _get(target, property, receiver) { if (typeof Reflect !== "undefined" && Reflect.get) { _get = Reflect.get; } else { _get = function _get(target, property, receiver) { var base = _superPropBase(target, property); if (!base) return; var desc = Object.getOwnPropertyDescriptor(base, property); if (desc.get) { return desc.get.call(receiver); } return desc.value; }; } return _get(target, property, receiver || target); }

  function _superPropBase(object, property) { while (!Object.prototype.hasOwnProperty.call(object, property)) { object = _getPrototypeOf(object); if (object === null) break; } return object; }

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

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["UnknownLayer-js"], {
    /***/
    "5pQd":
    /*!******************************************************************!*\
      !*** ./node_modules/@arcgis/core/core/MultiOriginJSONSupport.js ***!
      \******************************************************************/

    /*! exports provided: MultiOriginJSONMixin, MultiOriginJSONSupport */

    /***/
    function pQd(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "MultiOriginJSONMixin", function () {
        return l;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "MultiOriginJSONSupport", function () {
        return O;
      });
      /* harmony import */


      var _chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ../chunks/tslib.es6.js */
      "pO5D");
      /* harmony import */


      var _accessorSupport_utils_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./accessorSupport/utils.js */
      "TDcG");
      /* harmony import */


      var _accessorSupport_decorators_subclass_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./accessorSupport/decorators/subclass.js */
      "04ZG");
      /* harmony import */


      var _accessorSupport_PropertyOrigin_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./accessorSupport/PropertyOrigin.js */
      "ku/q");
      /* harmony import */


      var _Accessor_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ./Accessor.js */
      "/CmD");
      /* harmony import */


      var _accessorSupport_write_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ./accessorSupport/write.js */
      "xHih");
      /* harmony import */


      var _ReadOnlyMultiOriginJSONSupport_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ./ReadOnlyMultiOriginJSONSupport.js */
      "6xK3");
      /*
      All material copyright ESRI, All Rights Reserved, unless otherwise specified.
      See https://js.arcgis.com/4.18/esri/copyright.txt for details.
      */


      var p = function p(i) {
        var n = /*#__PURE__*/function (_i) {
          _inherits(n, _i);

          var _super = _createSuper(n);

          function n() {
            _classCallCheck(this, n);

            for (var _len = arguments.length, r = new Array(_len), _key = 0; _key < _len; _key++) {
              r[_key] = arguments[_key];
            }

            return _super.call.apply(_super, [this].concat(r));
          }

          _createClass(n, [{
            key: "clear",
            value: function clear(r) {
              var t = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : "user";
              return u(this)["delete"](r, Object(_accessorSupport_PropertyOrigin_js__WEBPACK_IMPORTED_MODULE_3__["nameToId"])(t));
            }
          }, {
            key: "write",
            value: function write() {
              var r = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
              var t = arguments.length > 1 ? arguments[1] : undefined;
              return Object(_accessorSupport_write_js__WEBPACK_IMPORTED_MODULE_5__["write"])(this, r = r || {}, t), r;
            }
          }, {
            key: "setAtOrigin",
            value: function setAtOrigin(r, s, o) {
              Object(_accessorSupport_utils_js__WEBPACK_IMPORTED_MODULE_1__["getProperties"])(this).setAtOrigin(r, s, Object(_accessorSupport_PropertyOrigin_js__WEBPACK_IMPORTED_MODULE_3__["nameToId"])(o));
            }
          }, {
            key: "removeOrigin",
            value: function removeOrigin(r) {
              var t = u(this),
                  s = Object(_accessorSupport_PropertyOrigin_js__WEBPACK_IMPORTED_MODULE_3__["nameToId"])(r),
                  o = t.keys(s);

              var _iterator = _createForOfIteratorHelper(o),
                  _step;

              try {
                for (_iterator.s(); !(_step = _iterator.n()).done;) {
                  var _r = _step.value;
                  t.originOf(_r) === s && t.set(_r, t.get(_r, s), 6);
                }
              } catch (err) {
                _iterator.e(err);
              } finally {
                _iterator.f();
              }
            }
          }, {
            key: "updateOrigin",
            value: function updateOrigin(r, t) {
              var s = u(this),
                  i = Object(_accessorSupport_PropertyOrigin_js__WEBPACK_IMPORTED_MODULE_3__["nameToId"])(t),
                  c = this.get(r);

              for (var _t = i + 1; _t < _accessorSupport_PropertyOrigin_js__WEBPACK_IMPORTED_MODULE_3__["OriginIdNum"]; ++_t) {
                s["delete"](r, _t);
              }

              s.set(r, c, i);
            }
          }, {
            key: "toJSON",
            value: function toJSON(r) {
              return this.write({}, r);
            }
          }]);

          return n;
        }(i);

        return n = Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_accessorSupport_decorators_subclass_js__WEBPACK_IMPORTED_MODULE_2__["subclass"])("esri.core.WriteableMultiOriginJSONSupport")], n), n.prototype.toJSON.isDefaultToJSON = !0, n;
      };

      function u(r) {
        return Object(_accessorSupport_utils_js__WEBPACK_IMPORTED_MODULE_1__["getProperties"])(r).store;
      }

      var l = function l(t) {
        var e = /*#__PURE__*/function (_p) {
          _inherits(e, _p);

          var _super2 = _createSuper(e);

          function e() {
            _classCallCheck(this, e);

            for (var _len2 = arguments.length, r = new Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
              r[_key2] = arguments[_key2];
            }

            return _super2.call.apply(_super2, [this].concat(r));
          }

          return e;
        }(p(Object(_ReadOnlyMultiOriginJSONSupport_js__WEBPACK_IMPORTED_MODULE_6__["ReadOnlyMultiOriginJSONMixin"])(t)));

        return e = Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_accessorSupport_decorators_subclass_js__WEBPACK_IMPORTED_MODULE_2__["subclass"])("esri.core.MultiOriginJSONSupport")], e), e;
      };

      var O = /*#__PURE__*/function (_l) {
        _inherits(O, _l);

        var _super3 = _createSuper(O);

        function O() {
          _classCallCheck(this, O);

          return _super3.apply(this, arguments);
        }

        return O;
      }(l(_Accessor_js__WEBPACK_IMPORTED_MODULE_4__["default"]));

      O = Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_accessorSupport_decorators_subclass_js__WEBPACK_IMPORTED_MODULE_2__["subclass"])("esri.core.MultiOriginJSONSupport")], O);
      /***/
    },

    /***/
    "6xK3":
    /*!**************************************************************************!*\
      !*** ./node_modules/@arcgis/core/core/ReadOnlyMultiOriginJSONSupport.js ***!
      \**************************************************************************/

    /*! exports provided: ReadOnlyMultiOriginJSONMixin, ReadOnlyMultiOriginJSONSupport */

    /***/
    function xK3(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ReadOnlyMultiOriginJSONMixin", function () {
        return a;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ReadOnlyMultiOriginJSONSupport", function () {
        return f;
      });
      /* harmony import */


      var _chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ../chunks/tslib.es6.js */
      "pO5D");
      /* harmony import */


      var _maybe_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./maybe.js */
      "srIe");
      /* harmony import */


      var _accessorSupport_utils_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./accessorSupport/utils.js */
      "TDcG");
      /* harmony import */


      var _accessorSupport_decorators_subclass_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./accessorSupport/decorators/subclass.js */
      "04ZG");
      /* harmony import */


      var _accessorSupport_PropertyOrigin_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ./accessorSupport/PropertyOrigin.js */
      "ku/q");
      /* harmony import */


      var _Accessor_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ./Accessor.js */
      "/CmD");
      /* harmony import */


      var _accessorSupport_read_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ./accessorSupport/read.js */
      "CWQl");
      /* harmony import */


      var _accessorSupport_MultiOriginStore_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! ./accessorSupport/MultiOriginStore.js */
      "SxDd");
      /*
      All material copyright ESRI, All Rights Reserved, unless otherwise specified.
      See https://js.arcgis.com/4.18/esri/copyright.txt for details.
      */


      var a = function a(n) {
        var a = /*#__PURE__*/function (_n) {
          _inherits(a, _n);

          var _super4 = _createSuper(a);

          function a() {
            var _this;

            _classCallCheck(this, a);

            for (var _len3 = arguments.length, r = new Array(_len3), _key3 = 0; _key3 < _len3; _key3++) {
              r[_key3] = arguments[_key3];
            }

            _this = _super4.call.apply(_super4, [this].concat(r));
            var s = Object(_maybe_js__WEBPACK_IMPORTED_MODULE_1__["assumeNonNull"])(Object(_accessorSupport_utils_js__WEBPACK_IMPORTED_MODULE_2__["getProperties"])(_assertThisInitialized(_this))),
                o = s.metadatas,
                i = s.store,
                n = new _accessorSupport_MultiOriginStore_js__WEBPACK_IMPORTED_MODULE_7__["default"]();
            s.store = n, i.keys().forEach(function (r) {
              n.set(r, i.get(r), 0);
            }), Object.keys(o).forEach(function (r) {
              s.internalGet(r) && n.set(r, s.internalGet(r), 0);
            });
            return _this;
          }

          _createClass(a, [{
            key: "read",
            value: function read(r, t) {
              Object(_accessorSupport_read_js__WEBPACK_IMPORTED_MODULE_6__["read"])(this, r, t);
            }
          }, {
            key: "getAtOrigin",
            value: function getAtOrigin(r, t) {
              var e = u(this),
                  s = Object(_accessorSupport_PropertyOrigin_js__WEBPACK_IMPORTED_MODULE_4__["nameToId"])(t);
              if ("string" == typeof r) return e.get(r, s);
              var o = {};
              return r.forEach(function (r) {
                o[r] = e.get(r, s);
              }), o;
            }
          }, {
            key: "originOf",
            value: function originOf(r) {
              return Object(_accessorSupport_PropertyOrigin_js__WEBPACK_IMPORTED_MODULE_4__["idToName"])(this.originIdOf(r));
            }
          }, {
            key: "originIdOf",
            value: function originIdOf(r) {
              return u(this).originOf(r);
            }
          }, {
            key: "revert",
            value: function revert(r, t) {
              var s = u(this),
                  o = Object(_accessorSupport_PropertyOrigin_js__WEBPACK_IMPORTED_MODULE_4__["nameToId"])(t),
                  n = Object(_accessorSupport_utils_js__WEBPACK_IMPORTED_MODULE_2__["getProperties"])(this);
              var c;
              c = "string" == typeof r ? "*" === r ? s.keys(o) : [r] : r, c.forEach(function (r) {
                n.propertyInvalidated(r), s.revert(r, o), n.propertyCommitted(r);
              });
            }
          }]);

          return a;
        }(n);

        return a = Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_accessorSupport_decorators_subclass_js__WEBPACK_IMPORTED_MODULE_3__["subclass"])("esri.core.ReadOnlyMultiOriginJSONSupport")], a), a;
      };

      function u(r) {
        return Object(_accessorSupport_utils_js__WEBPACK_IMPORTED_MODULE_2__["getProperties"])(r).store;
      }

      var f = /*#__PURE__*/function (_a) {
        _inherits(f, _a);

        var _super5 = _createSuper(f);

        function f() {
          _classCallCheck(this, f);

          return _super5.apply(this, arguments);
        }

        return f;
      }(a(_Accessor_js__WEBPACK_IMPORTED_MODULE_5__["default"]));

      f = Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_accessorSupport_decorators_subclass_js__WEBPACK_IMPORTED_MODULE_3__["subclass"])("esri.core.ReadOnlyMultiOriginJSONSupport")], f);
      /***/
    },

    /***/
    "DbUH":
    /*!****************************************************************!*\
      !*** ./node_modules/@arcgis/core/layers/mixins/PortalLayer.js ***!
      \****************************************************************/

    /*! exports provided: PortalLayer */

    /***/
    function DbUH(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "PortalLayer", function () {
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


      var _core_Error_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! ../../core/Error.js */
      "zlDU");
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


      var _core_promiseUtils_js__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
      /*! ../../core/promiseUtils.js */
      "9MzC");
      /* harmony import */


      var _portal_Portal_js__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
      /*! ../../portal/Portal.js */
      "AiS/");
      /* harmony import */


      var _portal_PortalItem_js__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(
      /*! ../../portal/PortalItem.js */
      "p+Gi");
      /*
      All material copyright ESRI, All Rights Reserved, unless otherwise specified.
      See https://js.arcgis.com/4.18/esri/copyright.txt for details.
      */


      var n = _core_Logger_js__WEBPACK_IMPORTED_MODULE_2__["default"].getLogger("esri.layers.mixins.PortalLayer"),
          d = function d(r) {
        var d = /*#__PURE__*/function (_r2) {
          _inherits(d, _r2);

          var _super6 = _createSuper(d);

          function d() {
            var _this2;

            _classCallCheck(this, d);

            _this2 = _super6.apply(this, arguments), _this2.resourceReferences = {
              portalItem: null,
              paths: []
            };
            return _this2;
          }

          _createClass(d, [{
            key: "destroy",
            value: function destroy() {
              var t;
              null == (t = this.portalItem) || t.destroy(), this.portalItem = null;
            }
          }, {
            key: "portalItem",
            set: function set(t) {
              t !== this._get("portalItem") && (this.removeOrigin("portal-item"), this._set("portalItem", t));
            }
          }, {
            key: "readPortalItem",
            value: function readPortalItem(t, r, e) {
              if (r.itemId) return new _portal_PortalItem_js__WEBPACK_IMPORTED_MODULE_14__["default"]({
                id: r.itemId,
                portal: e && e.portal
              });
            }
          }, {
            key: "writePortalItem",
            value: function writePortalItem(t, r) {
              t && t.id && (r.itemId = t.id);
            }
          }, {
            key: "loadFromPortal",
            value: function () {
              var _loadFromPortal = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(t, r) {
                var e;
                return regeneratorRuntime.wrap(function _callee$(_context) {
                  while (1) {
                    switch (_context.prev = _context.next) {
                      case 0:
                        if (!(this.portalItem && this.portalItem.id)) {
                          _context.next = 14;
                          break;
                        }

                        _context.prev = 1;
                        _context.next = 4;
                        return Promise.all(
                        /*! import() | portal-support-layersLoader-js */
                        [__webpack_require__.e("common"), __webpack_require__.e("portal-support-layersLoader-js")]).then(__webpack_require__.bind(null,
                        /*! ../../portal/support/layersLoader.js */
                        "O5Ly"));

                      case 4:
                        e = _context.sent;
                        Object(_core_promiseUtils_js__WEBPACK_IMPORTED_MODULE_12__["throwIfAborted"])(r);
                        _context.next = 8;
                        return e.load({
                          instance: this,
                          supportedTypes: t.supportedTypes,
                          validateItem: t.validateItem,
                          supportsData: t.supportsData
                        }, r);

                      case 8:
                        return _context.abrupt("return", _context.sent);

                      case 11:
                        _context.prev = 11;
                        _context.t0 = _context["catch"](1);
                        throw n.warn("Failed to load layer (".concat(this.title, ", ").concat(this.id, ") portal item (").concat(this.portalItem.id, ")\n  ").concat(_context.t0)), _context.t0;

                      case 14:
                      case "end":
                        return _context.stop();
                    }
                  }
                }, _callee, this, [[1, 11]]);
              }));

              function loadFromPortal(_x, _x2) {
                return _loadFromPortal.apply(this, arguments);
              }

              return loadFromPortal;
            }()
          }, {
            key: "read",
            value: function read(t, r) {
              r && (r.layer = this), _get(_getPrototypeOf(d.prototype), "read", this).call(this, t, r);
            }
          }, {
            key: "write",
            value: function write(t, r) {
              var e = r && r.portal,
                  o = this.portalItem && this.portalItem.id && (this.portalItem.portal || _portal_Portal_js__WEBPACK_IMPORTED_MODULE_13__["default"].getDefault());

              return e && o && !Object(_core_urlUtils_js__WEBPACK_IMPORTED_MODULE_9__["hasSamePortal"])(o.restUrl, e.restUrl) ? (r.messages && r.messages.push(new _core_Error_js__WEBPACK_IMPORTED_MODULE_8__["default"]("layer:cross-portal", "The layer '".concat(this.title, " (").concat(this.id, ")' cannot be persisted because it refers to an item on a different portal than the one being saved to. To save the scene, set the layer.portalItem to null or save the scene to the same portal as the item associated with the layer"), {
                layer: this
              })), null) : _get(_getPrototypeOf(d.prototype), "write", this).call(this, t, _objectSpread(_objectSpread({}, r), {}, {
                layer: this
              }));
            }
          }]);

          return d;
        }(r);

        return Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_4__["property"])({
          type: _portal_PortalItem_js__WEBPACK_IMPORTED_MODULE_14__["default"]
        })], d.prototype, "portalItem", null), Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_reader_js__WEBPACK_IMPORTED_MODULE_5__["reader"])("web-document", "portalItem", ["itemId"])], d.prototype, "readPortalItem", null), Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_writer_js__WEBPACK_IMPORTED_MODULE_7__["writer"])("web-document", "portalItem", {
          itemId: {
            type: String
          }
        })], d.prototype, "writePortalItem", null), Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_4__["property"])()], d.prototype, "resourceReferences", void 0), d = Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_subclass_js__WEBPACK_IMPORTED_MODULE_6__["subclass"])("esri.layers.mixins.PortalLayer")], d), d;
      };
      /***/

    },

    /***/
    "SxDd":
    /*!****************************************************************************!*\
      !*** ./node_modules/@arcgis/core/core/accessorSupport/MultiOriginStore.js ***!
      \****************************************************************************/

    /*! exports provided: default */

    /***/
    function SxDd(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony import */


      var _lang_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ../lang.js */
      "f/qv");
      /* harmony import */


      var _maybe_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ../maybe.js */
      "srIe");
      /* harmony import */


      var _PropertyOrigin_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./PropertyOrigin.js */
      "ku/q");
      /*
      All material copyright ESRI, All Rights Reserved, unless otherwise specified.
      See https://js.arcgis.com/4.18/esri/copyright.txt for details.
      */


      var r = /*#__PURE__*/function () {
        function r() {
          _classCallCheck(this, r);

          this._propertyOriginMap = new Map(), this._originStores = new Array(_PropertyOrigin_js__WEBPACK_IMPORTED_MODULE_2__["OriginIdNum"]), this._values = new Map();
        }

        _createClass(r, [{
          key: "clone",
          value: function clone(s) {
            var _this3 = this;

            var i = new r(),
                o = this._originStores[0];
            o && o.forEach(function (s, e) {
              i.set(e, Object(_lang_js__WEBPACK_IMPORTED_MODULE_0__["clone"])(s), 0);
            });

            var _loop = function _loop(_r7) {
              var e = _this3._originStores[_r7];
              e && e.forEach(function (e, o) {
                s && s.has(o) || i.set(o, Object(_lang_js__WEBPACK_IMPORTED_MODULE_0__["clone"])(e), _r7);
              });
            };

            for (var _r7 = 2; _r7 < _PropertyOrigin_js__WEBPACK_IMPORTED_MODULE_2__["OriginIdNum"]; _r7++) {
              _loop(_r7);
            }

            return i;
          }
        }, {
          key: "get",
          value: function get(t, s) {
            var e = void 0 === s ? this._values : this._originStores[s];
            return e ? e.get(t) : void 0;
          }
        }, {
          key: "keys",
          value: function keys(t) {
            var s = null == t ? this._values : this._originStores[t];
            return s ? _toConsumableArray(s.keys()) : [];
          }
        }, {
          key: "set",
          value: function set(t, e) {
            var _r4 = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 6;

            var i = this._originStores[_r4];

            if (i || (i = new Map(), this._originStores[_r4] = i), i.set(t, e), !this._values.has(t) || Object(_maybe_js__WEBPACK_IMPORTED_MODULE_1__["assumeNonNull"])(this._propertyOriginMap.get(t)) <= _r4) {
              var s = this._values.get(t);

              return this._values.set(t, e), this._propertyOriginMap.set(t, _r4), s !== e;
            }

            return !1;
          }
        }, {
          key: "delete",
          value: function _delete(t) {
            var s = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 6;
            var e = this._originStores[s];
            if (!e) return;

            var _r5 = e.get(t);

            if (e["delete"](t), this._values.has(t) && this._propertyOriginMap.get(t) === s) {
              this._values["delete"](t);

              for (var _e = s - 1; _e >= 0; _e--) {
                var _s = this._originStores[_e];

                if (_s && _s.has(t)) {
                  this._values.set(t, _s.get(t)), this._propertyOriginMap.set(t, _e);
                  break;
                }
              }
            }

            return _r5;
          }
        }, {
          key: "has",
          value: function has(t, s) {
            var e = void 0 === s ? this._values : this._originStores[s];
            return !!e && e.has(t);
          }
        }, {
          key: "revert",
          value: function revert(t, s) {
            for (; s > 0 && !this.has(t, s);) {
              --s;
            }

            var e = this._originStores[s],
                _r6 = e && e.get(t),
                i = this._values.get(t);

            return this._values.set(t, _r6), this._propertyOriginMap.set(t, s), i !== _r6;
          }
        }, {
          key: "originOf",
          value: function originOf(t) {
            return this._propertyOriginMap.get(t) || 0;
          }
        }, {
          key: "forEach",
          value: function forEach(t) {
            this._values.forEach(t);
          }
        }]);

        return r;
      }();
      /* harmony default export */


      __webpack_exports__["default"] = r;
      /***/
    },

    /***/
    "qcqe":
    /*!**********************************************************!*\
      !*** ./node_modules/@arcgis/core/layers/UnknownLayer.js ***!
      \**********************************************************/

    /*! exports provided: default */

    /***/
    function qcqe(module, __webpack_exports__, __webpack_require__) {
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


      var _core_Logger_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ../core/Logger.js */
      "6S2I");
      /* harmony import */


      var _core_accessorSupport_ensureType_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ../core/accessorSupport/ensureType.js */
      "zqDF");
      /* harmony import */


      var _core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ../core/accessorSupport/decorators/property.js */
      "WbKI");
      /* harmony import */


      var _core_accessorSupport_decorators_subclass_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ../core/accessorSupport/decorators/subclass.js */
      "04ZG");
      /* harmony import */


      var _core_Error_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ../core/Error.js */
      "zlDU");
      /* harmony import */


      var _core_urlUtils_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! ../core/urlUtils.js */
      "4EHJ");
      /* harmony import */


      var _core_uuid_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! ../core/uuid.js */
      "ju1D");
      /* harmony import */


      var _portal_support_resourceExtension_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! ../portal/support/resourceExtension.js */
      "9AIY");
      /* harmony import */


      var _core_promiseUtils_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
      /*! ../core/promiseUtils.js */
      "9MzC");
      /* harmony import */


      var _core_scheduling_js__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
      /*! ../core/scheduling.js */
      "WBXD");
      /* harmony import */


      var _Layer_js__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
      /*! ./Layer.js */
      "pqNC");
      /* harmony import */


      var _core_MultiOriginJSONSupport_js__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
      /*! ../core/MultiOriginJSONSupport.js */
      "5pQd");
      /* harmony import */


      var _mixins_PortalLayer_js__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(
      /*! ./mixins/PortalLayer.js */
      "DbUH");
      /*
      All material copyright ESRI, All Rights Reserved, unless otherwise specified.
      See https://js.arcgis.com/4.18/esri/copyright.txt for details.
      */


      var u = /*#__PURE__*/function (_Object) {
        _inherits(u, _Object);

        var _super7 = _createSuper(u);

        function u(r) {
          var _this4;

          _classCallCheck(this, u);

          _this4 = _super7.call(this, r), _this4.resourceInfo = null, _this4.type = "unknown";
          return _this4;
        }

        _createClass(u, [{
          key: "initialize",
          value: function initialize() {
            var _this5 = this;

            this.addResolvingPromise(Object(_core_promiseUtils_js__WEBPACK_IMPORTED_MODULE_10__["create"])(function (r, o) {
              Object(_core_scheduling_js__WEBPACK_IMPORTED_MODULE_11__["schedule"])(function () {
                var r = _this5.resourceInfo && (_this5.resourceInfo.layerType || _this5.resourceInfo.type);
                var e = "Unknown layer type";
                r && (e += " " + r), o(new _core_Error_js__WEBPACK_IMPORTED_MODULE_6__["default"]("layer:unknown-layer-type", e, {
                  layerType: r
                }));
              });
            }));
          }
        }, {
          key: "read",
          value: function read(r, o) {
            _get(_getPrototypeOf(u.prototype), "read", this).call(this, {
              resourceInfo: r
            }, o);
          }
        }, {
          key: "write",
          value: function write() {
            return null;
          }
        }]);

        return u;
      }(Object(_mixins_PortalLayer_js__WEBPACK_IMPORTED_MODULE_14__["PortalLayer"])(Object(_core_MultiOriginJSONSupport_js__WEBPACK_IMPORTED_MODULE_13__["MultiOriginJSONMixin"])(_Layer_js__WEBPACK_IMPORTED_MODULE_12__["default"])));

      Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_4__["property"])({
        readOnly: !0
      })], u.prototype, "resourceInfo", void 0), Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_4__["property"])({
        type: ["show", "hide"]
      })], u.prototype, "listMode", void 0), Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_4__["property"])({
        json: {
          read: !1
        },
        readOnly: !0,
        value: "unknown"
      })], u.prototype, "type", void 0), u = Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_subclass_js__WEBPACK_IMPORTED_MODULE_5__["subclass"])("esri.layers.UnknownLayer")], u);
      var a = u;
      /* harmony default export */

      __webpack_exports__["default"] = a;
      /***/
    }
  }]);
})();
//# sourceMappingURL=UnknownLayer-js-es5.js.map