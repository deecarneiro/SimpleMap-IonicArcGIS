(function () {
  function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

  function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

  function _iterableToArrayLimit(arr, i) { if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr))) return; var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

  function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

  function _createForOfIteratorHelper(o, allowArrayLike) { var it; if (typeof Symbol === "undefined" || o[Symbol.iterator] == null) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e8) { throw _e8; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = o[Symbol.iterator](); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e9) { didErr = true; err = _e9; }, f: function f() { try { if (!normalCompletion && it["return"] != null) it["return"](); } finally { if (didErr) throw err; } } }; }

  function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

  function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

  function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

  function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

  function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

  function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

  function _possibleConstructorReturn(self, call) { if (call && (typeof call === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

  function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

  function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

  function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["default~tasks-ClosestFacilityTask-js~tasks-RouteTask-js"], {
    /***/
    "54nt":
    /*!**************************************************************!*\
      !*** ./node_modules/@arcgis/core/tasks/support/NAMessage.js ***!
      \**************************************************************/

    /*! exports provided: default */

    /***/
    function nt(module, __webpack_exports__, __webpack_require__) {
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


      var _core_jsonMap_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ../../core/jsonMap.js */
      "+opI");
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


      var _GPMessage_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
      /*! ./GPMessage.js */
      "DKHk");
      /*
      All material copyright ESRI, All Rights Reserved, unless otherwise specified.
      See https://js.arcgis.com/4.18/esri/copyright.txt for details.
      */


      var p = new _core_jsonMap_js__WEBPACK_IMPORTED_MODULE_5__["JSONMap"]({
        0: "informative",
        1: "process-definition",
        2: "process-start",
        3: "process-stop",
        50: "warning",
        100: "error",
        101: "empty",
        200: "abort"
      });

      var i = /*#__PURE__*/function (_GPMessage_js__WEBPAC) {
        _inherits(i, _GPMessage_js__WEBPAC);

        var _super = _createSuper(i);

        function i(r) {
          var _this;

          _classCallCheck(this, i);

          _this = _super.call(this, r), _this.type = null;
          return _this;
        }

        return i;
      }(_GPMessage_js__WEBPACK_IMPORTED_MODULE_10__["default"]);

      Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_4__["property"])({
        type: String,
        json: {
          read: p.read,
          write: p.write
        }
      })], i.prototype, "type", void 0), i = Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_subclass_js__WEBPACK_IMPORTED_MODULE_6__["subclass"])("esri.tasks.support.NAMessage")], i);
      var c = i;
      /* harmony default export */

      __webpack_exports__["default"] = c;
      /***/
    },

    /***/
    "DKHk":
    /*!**************************************************************!*\
      !*** ./node_modules/@arcgis/core/tasks/support/GPMessage.js ***!
      \**************************************************************/

    /*! exports provided: default */

    /***/
    function DKHk(module, __webpack_exports__, __webpack_require__) {
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


      var _core_jsonMap_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ../../core/jsonMap.js */
      "+opI");
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


      var _core_JSONSupport_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
      /*! ../../core/JSONSupport.js */
      "ag7Y");
      /*
      All material copyright ESRI, All Rights Reserved, unless otherwise specified.
      See https://js.arcgis.com/4.18/esri/copyright.txt for details.
      */


      var p = new _core_jsonMap_js__WEBPACK_IMPORTED_MODULE_5__["JSONMap"]({
        esriJobMessageTypeInformative: "informative",
        esriJobMessageTypeProcessDefinition: "process-definition",
        esriJobMessageTypeProcessStart: "process-start",
        esriJobMessageTypeProcessStop: "process-stop",
        esriJobMessageTypeWarning: "warning",
        esriJobMessageTypeError: "error",
        esriJobMessageTypeEmpty: "empty",
        esriJobMessageTypeAbort: "abort"
      });

      var i = /*#__PURE__*/function (_core_JSONSupport_js_) {
        _inherits(i, _core_JSONSupport_js_);

        var _super2 = _createSuper(i);

        function i(r) {
          var _this2;

          _classCallCheck(this, i);

          _this2 = _super2.call(this, r), _this2.description = null, _this2.type = null;
          return _this2;
        }

        return i;
      }(_core_JSONSupport_js__WEBPACK_IMPORTED_MODULE_10__["JSONSupport"]);

      Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_4__["property"])({
        type: String,
        json: {
          write: !0
        }
      })], i.prototype, "description", void 0), Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_4__["property"])({
        type: String,
        json: {
          read: p.read,
          write: p.write
        }
      })], i.prototype, "type", void 0), i = Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_subclass_js__WEBPACK_IMPORTED_MODULE_6__["subclass"])("esri.tasks.support.GPMessage")], i);
      var a = i;
      /* harmony default export */

      __webpack_exports__["default"] = a;
      /***/
    },

    /***/
    "OvWd":
    /*!************************************************************************!*\
      !*** ./node_modules/@arcgis/core/tasks/mixins/NAServiceDescription.js ***!
      \************************************************************************/

    /*! exports provided: NAServiceDescription, NAServiceDescriptionMixin */

    /***/
    function OvWd(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "NAServiceDescription", function () {
        return c;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "NAServiceDescriptionMixin", function () {
        return n;
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


      var _core_object_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ../../core/object.js */
      "nR38");
      /* harmony import */


      var _core_maybe_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ../../core/maybe.js */
      "srIe");
      /* harmony import */


      var _core_Logger_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ../../core/Logger.js */
      "6S2I");
      /* harmony import */


      var _core_accessorSupport_ensureType_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ../../core/accessorSupport/ensureType.js */
      "zqDF");
      /* harmony import */


      var _core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ../../core/accessorSupport/decorators/property.js */
      "WbKI");
      /* harmony import */


      var _core_accessorSupport_decorators_subclass_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! ../../core/accessorSupport/decorators/subclass.js */
      "04ZG");
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


      var _request_js__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
      /*! ../../request.js */
      "Lqtk");
      /* harmony import */


      var _Task_js__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
      /*! ../Task.js */
      "kglp");
      /*
      All material copyright ESRI, All Rights Reserved, unless otherwise specified.
      See https://js.arcgis.com/4.18/esri/copyright.txt for details.
      */


      var n = function n(l) {
        var n = /*#__PURE__*/function (_l) {
          _inherits(n, _l);

          var _super3 = _createSuper(n);

          function n() {
            _classCallCheck(this, n);

            return _super3.apply(this, arguments);
          }

          _createClass(n, [{
            key: "getServiceDescription",
            value: function () {
              var _getServiceDescription = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
                return regeneratorRuntime.wrap(function _callee$(_context) {
                  while (1) {
                    switch (_context.prev = _context.next) {
                      case 0:
                        return _context.abrupt("return", (this._serviceDescriptionPromise || (this._serviceDescriptionPromise = this._fetchServiceDescription()), this._serviceDescriptionPromise));

                      case 1:
                      case "end":
                        return _context.stop();
                    }
                  }
                }, _callee, this);
              }));

              function getServiceDescription() {
                return _getServiceDescription.apply(this, arguments);
              }

              return getServiceDescription;
            }()
          }, {
            key: "_fetchServiceDescription",
            value: function () {
              var _fetchServiceDescription2 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee4() {
                var e, _yield$Object, t, _e, s, _yield$s, l, _n;

                return regeneratorRuntime.wrap(function _callee4$(_context4) {
                  while (1) {
                    switch (_context4.prev = _context4.next) {
                      case 0:
                        if (!(!this.url || !this.parsedUrl)) {
                          _context4.next = 2;
                          break;
                        }

                        throw new _core_Error_js__WEBPACK_IMPORTED_MODULE_8__["default"]("network-service:missing-url", "Url to Network service is missing");

                      case 2:
                        e = this.url;
                        _context4.next = 5;
                        return Object(_request_js__WEBPACK_IMPORTED_MODULE_12__["default"])(e, {
                          query: {
                            f: "json"
                          }
                        });

                      case 5:
                        _yield$Object = _context4.sent;
                        t = _yield$Object.data;
                        t.supportedTravelModes || (t.supportedTravelModes = []);

                        for (_e = 0; _e < t.supportedTravelModes.length; _e++) {
                          t.supportedTravelModes[_e].id || (t.supportedTravelModes[_e].id = t.supportedTravelModes[_e].itemId);
                        }

                        s = t.currentVersion >= 10.4 ? function () {
                          var _ref = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee2(e) {
                            var _yield$Object2, _yield$Object2$data, r, _t;

                            return regeneratorRuntime.wrap(function _callee2$(_context2) {
                              while (1) {
                                switch (_context2.prev = _context2.next) {
                                  case 0:
                                    _context2.prev = 0;
                                    _context2.next = 3;
                                    return Object(_request_js__WEBPACK_IMPORTED_MODULE_12__["default"])(e + ("/" === e[e.length - 1] ? "" : "/") + "retrieveTravelModes", {
                                      query: {
                                        f: "json"
                                      }
                                    });

                                  case 3:
                                    _yield$Object2 = _context2.sent;
                                    _yield$Object2$data = _yield$Object2.data;
                                    r = _yield$Object2$data.supportedTravelModes;
                                    _t = _yield$Object2$data.defaultTravelMode;
                                    return _context2.abrupt("return", {
                                      supportedTravelModes: r,
                                      defaultTravelMode: _t
                                    });

                                  case 10:
                                    _context2.prev = 10;
                                    _context2.t0 = _context2["catch"](0);
                                    throw new _core_Error_js__WEBPACK_IMPORTED_MODULE_8__["default"]("network-service:retrieveTravelModes", "Could not get to the NAServer's retrieveTravelModes.", {
                                      error: _context2.t0
                                    });

                                  case 13:
                                  case "end":
                                    return _context2.stop();
                                }
                              }
                            }, _callee2, null, [[0, 10]]);
                          }));

                          return function (_x) {
                            return _ref.apply(this, arguments);
                          };
                        }()(e) : function () {
                          var _ref2 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee3(e) {
                            var _yield$Object3, t, _yield$Object4, s, o, l, n, c, u, p, _e2, _iterator, _step, r, _iterator2, _step2, _e3, _r;

                            return regeneratorRuntime.wrap(function _callee3$(_context3) {
                              while (1) {
                                switch (_context3.prev = _context3.next) {
                                  case 0:
                                    _context3.next = 2;
                                    return Object(_request_js__WEBPACK_IMPORTED_MODULE_12__["default"])(e.substring(0, e.indexOf("/rest/") + 6) + "info", {
                                      query: {
                                        f: "json"
                                      }
                                    });

                                  case 2:
                                    _yield$Object3 = _context3.sent;
                                    t = _yield$Object3.data;

                                    if (!(!t || !t.owningSystemUrl)) {
                                      _context3.next = 6;
                                      break;
                                    }

                                    return _context3.abrupt("return", {
                                      supportedTravelModes: [],
                                      defaultTravelMode: null
                                    });

                                  case 6:
                                    e = t.owningSystemUrl;
                                    _context3.next = 9;
                                    return Object(_request_js__WEBPACK_IMPORTED_MODULE_12__["default"])(e + ("/" === e[e.length - 1] ? "" : "/") + "sharing/rest/portals/self", {
                                      query: {
                                        f: "json"
                                      }
                                    });

                                  case 9:
                                    _yield$Object4 = _context3.sent;
                                    s = _yield$Object4.data;
                                    o = Object(_core_object_js__WEBPACK_IMPORTED_MODULE_2__["getDeepValue"])("helperServices.routingUtilities.url", s);

                                    if (o) {
                                      _context3.next = 14;
                                      break;
                                    }

                                    return _context3.abrupt("return", {
                                      supportedTravelModes: [],
                                      defaultTravelMode: null
                                    });

                                  case 14:
                                    l = Object(_core_urlUtils_js__WEBPACK_IMPORTED_MODULE_9__["urlToObject"])(e);
                                    n = /\/solveClosestFacility$/.test(l.path) ? "Route" : /\/solveClosestFacility$/.test(l.path) ? "ClosestFacility" : "ServiceAreas";
                                    _context3.next = 18;
                                    return Object(_request_js__WEBPACK_IMPORTED_MODULE_12__["default"])(o + ("/" === o[o.length - 1] ? "" : "/") + "GetTravelModes/execute", {
                                      query: {
                                        f: "json",
                                        serviceName: n
                                      }
                                    });

                                  case 18:
                                    c = _context3.sent;
                                    u = [];
                                    p = null;

                                    if (c && c.data && c.data.results && c.data.results.length) {
                                      _e2 = c.data.results;
                                      _iterator = _createForOfIteratorHelper(_e2);

                                      try {
                                        for (_iterator.s(); !(_step = _iterator.n()).done;) {
                                          r = _step.value;

                                          if ("supportedTravelModes" === r.paramName) {
                                            if (r.value && r.value.features) {
                                              _iterator2 = _createForOfIteratorHelper(r.value.features);

                                              try {
                                                for (_iterator2.s(); !(_step2 = _iterator2.n()).done;) {
                                                  _e3 = _step2.value.attributes;

                                                  if (_e3) {
                                                    _r = JSON.parse(_e3.TravelMode);
                                                    u.push(_r);
                                                  }
                                                }
                                              } catch (err) {
                                                _iterator2.e(err);
                                              } finally {
                                                _iterator2.f();
                                              }
                                            }
                                          } else "defaultTravelMode" === r.paramName && (p = r.value);
                                        }
                                      } catch (err) {
                                        _iterator.e(err);
                                      } finally {
                                        _iterator.f();
                                      }
                                    }

                                    return _context3.abrupt("return", {
                                      supportedTravelModes: u,
                                      defaultTravelMode: p
                                    });

                                  case 23:
                                  case "end":
                                    return _context3.stop();
                                }
                              }
                            }, _callee3);
                          }));

                          return function (_x2) {
                            return _ref2.apply(this, arguments);
                          };
                        }()(e);
                        _context4.next = 12;
                        return s;

                      case 12:
                        _yield$s = _context4.sent;
                        l = _yield$s.defaultTravelMode;
                        _n = _yield$s.supportedTravelModes;
                        return _context4.abrupt("return", (t.defaultTravelMode = l, t.supportedTravelModes = _n, t));

                      case 16:
                      case "end":
                        return _context4.stop();
                    }
                  }
                }, _callee4, this);
              }));

              function _fetchServiceDescription() {
                return _fetchServiceDescription2.apply(this, arguments);
              }

              return _fetchServiceDescription;
            }()
          }, {
            key: "_isInputGeometryZAware",
            value: function _isInputGeometryZAware(e, r) {
              for (var s = 0; s < r.length; s++) {
                var o = e[r[s]];

                if (o && o.length) {
                  var _iterator3 = _createForOfIteratorHelper(o),
                      _step3;

                  try {
                    for (_iterator3.s(); !(_step3 = _iterator3.n()).done;) {
                      var _e4 = _step3.value;
                      if (Object(_core_maybe_js__WEBPACK_IMPORTED_MODULE_3__["isSome"])(_e4) && _e4.hasZ) return !0;
                    }
                  } catch (err) {
                    _iterator3.e(err);
                  } finally {
                    _iterator3.f();
                  }
                }
              }

              return !1;
            }
          }, {
            key: "_dropZValuesOffInputGeometry",
            value: function _dropZValuesOffInputGeometry(e, r) {
              for (var t = 0; t < r.length; t++) {
                var s = e[r[t]];

                if (s && s.length) {
                  var _iterator4 = _createForOfIteratorHelper(s),
                      _step4;

                  try {
                    for (_iterator4.s(); !(_step4 = _iterator4.n()).done;) {
                      var _e5 = _step4.value;
                      _e5.z = void 0;
                    }
                  } catch (err) {
                    _iterator4.e(err);
                  } finally {
                    _iterator4.f();
                  }
                }
              }

              console.log("The remote Network Analysis service is powered by a network dataset which is not Z-aware.\nZ-coordinates of the input geometry are ignored.");
            }
          }]);

          return n;
        }(l);

        return n = Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_subclass_js__WEBPACK_IMPORTED_MODULE_7__["subclass"])("esri.tasks.mixins.NAServiceDescription")], n), n;
      };

      var c = /*#__PURE__*/function (_n2) {
        _inherits(c, _n2);

        var _super4 = _createSuper(c);

        function c() {
          _classCallCheck(this, c);

          return _super4.apply(this, arguments);
        }

        return c;
      }(n(_Task_js__WEBPACK_IMPORTED_MODULE_13__["default"]));

      c = Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_subclass_js__WEBPACK_IMPORTED_MODULE_7__["subclass"])("esri.tasks.mixins.NAServiceDescription")], c);
      /***/
    },

    /***/
    "eKLr":
    /*!*************************************************************************!*\
      !*** ./node_modules/@arcgis/core/tasks/support/DirectionsFeatureSet.js ***!
      \*************************************************************************/

    /*! exports provided: default */

    /***/
    function eKLr(module, __webpack_exports__, __webpack_require__) {
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


      var _core_accessorSupport_decorators_reader_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ../../core/accessorSupport/decorators/reader.js */
      "r88o");
      /* harmony import */


      var _core_accessorSupport_decorators_subclass_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! ../../core/accessorSupport/decorators/subclass.js */
      "04ZG");
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


      var _geometry_SpatialReference_js__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
      /*! ../../geometry/SpatialReference.js */
      "WZb1");
      /* harmony import */


      var _geometry_Point_js__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
      /*! ../../geometry/Point.js */
      "SuVq");
      /* harmony import */


      var _geometry_Extent_js__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
      /*! ../../geometry/Extent.js */
      "OvF4");
      /* harmony import */


      var _geometry_Polyline_js__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(
      /*! ../../geometry/Polyline.js */
      "UhwK");
      /* harmony import */


      var _geometry_js__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(
      /*! ../../geometry.js */
      "4GrV");
      /* harmony import */


      var _Graphic_js__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(
      /*! ../../Graphic.js */
      "jWBI");
      /* harmony import */


      var _FeatureSet_js__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(
      /*! ./FeatureSet.js */
      "8prj");
      /*
      All material copyright ESRI, All Rights Reserved, unless otherwise specified.
      See https://js.arcgis.com/4.18/esri/copyright.txt for details.
      */


      var u = /*#__PURE__*/function (_FeatureSet_js__WEBPA) {
        _inherits(u, _FeatureSet_js__WEBPA);

        var _super5 = _createSuper(u);

        function u(e) {
          var _this3;

          _classCallCheck(this, u);

          _this3 = _super5.call(this, e), _this3.extent = null, _this3.features = null, _this3.geometryType = "polyline", _this3.routeId = null, _this3.routeName = null, _this3.totalDriveTime = null, _this3.totalLength = null, _this3.totalTime = null;
          return _this3;
        }

        _createClass(u, [{
          key: "readFeatures",
          value: function readFeatures(e, r) {
            var _this4 = this;

            (e || []).forEach(function (e) {
              _this4._decompressFeatureGeometry(e, r.summary.envelope.spatialReference);
            });

            var o = _geometry_SpatialReference_js__WEBPACK_IMPORTED_MODULE_11__["default"].fromJSON(r.spatialReference);

            return e.map(function (e) {
              var r = _Graphic_js__WEBPACK_IMPORTED_MODULE_16__["default"].fromJSON(e),
                  s = e.geometry && e.geometry.spatialReference;

              return r.geometry && !s && (Object(_core_maybe_js__WEBPACK_IMPORTED_MODULE_2__["unwrap"])(r.geometry).spatialReference = o), r.strings = e.strings, r.events = (e.events || []).map(function (t) {
                var r = new _Graphic_js__WEBPACK_IMPORTED_MODULE_16__["default"]({
                  geometry: new _geometry_Point_js__WEBPACK_IMPORTED_MODULE_12__["default"]({
                    x: t.point.x,
                    y: t.point.y,
                    z: t.point.z,
                    hasZ: void 0 !== t.point.z,
                    spatialReference: e.geometry && e.geometry.spatialReference
                  }),
                  attributes: {
                    ETA: t.ETA,
                    arriveTimeUTC: t.arriveTimeUTC
                  }
                });
                return r.strings = t.strings, r;
              }), r;
            });
          }
        }, {
          key: "mergedGeometry",
          get: function get() {
            if (!this.features) return null;
            var e = this.features.map(function (_ref3) {
              var e = _ref3.geometry;
              return Object(_core_maybe_js__WEBPACK_IMPORTED_MODULE_2__["unwrap"])(e);
            }),
                r = this.get("extent.spatialReference");
            return this._mergePolylinesToSinglePath(e, r);
          }
        }, {
          key: "strings",
          get: function get() {
            return this.features.map(function (_ref4) {
              var e = _ref4.strings;
              return e;
            });
          }
        }, {
          key: "_decompressFeatureGeometry",
          value: function _decompressFeatureGeometry(e, t) {
            e.geometry = this._decompressGeometry(e.compressedGeometry, t);
          }
        }, {
          key: "_decompressGeometry",
          value: function _decompressGeometry(e, t) {
            var r = 0,
                o = 0,
                s = 0,
                a = 0;
            var p = [];

            var n,
                i,
                m,
                l,
                _u,
                c,
                y,
                f,
                d = 0,
                g = 0,
                h = 0;

            if (_u = e.match(/((\+|\-)[^\+\-\|]+|\|)/g), _u || (_u = []), 0 === parseInt(_u[d], 32)) {
              d = 2;

              var _e6 = parseInt(_u[d], 32);

              d++, c = parseInt(_u[d], 32), d++, 1 & _e6 && (g = _u.indexOf("|") + 1, y = parseInt(_u[g], 32), g++), 2 & _e6 && (h = _u.indexOf("|", g) + 1, f = parseInt(_u[h], 32), h++);
            } else c = parseInt(_u[d], 32), d++;

            for (; d < _u.length && "|" !== _u[d];) {
              n = parseInt(_u[d], 32) + r, d++, r = n, i = parseInt(_u[d], 32) + o, d++, o = i;
              var _e7 = [n / c, i / c];
              g && (l = parseInt(_u[g], 32) + s, g++, s = l, _e7.push(l / y)), h && (m = parseInt(_u[h], 32) + a, h++, a = m, _e7.push(m / f)), p.push(_e7);
            }

            return {
              paths: [p],
              hasZ: g > 0,
              hasM: h > 0,
              spatialReference: t
            };
          }
        }, {
          key: "_mergePolylinesToSinglePath",
          value: function _mergePolylinesToSinglePath(e, t) {
            var r = [];
            (e || []).forEach(function (e) {
              e.paths.forEach(function (e) {
                r = r.concat(e);
              });
            });
            var o = [];
            var s = [0, 0];
            return r.forEach(function (e) {
              e[0] === s[0] && e[1] === s[1] || (o.push(e), s = e);
            }), new _geometry_Polyline_js__WEBPACK_IMPORTED_MODULE_14__["default"]({
              paths: [o]
            }, t);
          }
        }]);

        return u;
      }(_FeatureSet_js__WEBPACK_IMPORTED_MODULE_17__["default"]);

      Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_5__["property"])({
        type: _geometry_Extent_js__WEBPACK_IMPORTED_MODULE_13__["default"],
        json: {
          read: {
            source: "summary.envelope"
          }
        }
      })], u.prototype, "extent", void 0), Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_5__["property"])()], u.prototype, "features", void 0), Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_reader_js__WEBPACK_IMPORTED_MODULE_6__["reader"])("features")], u.prototype, "readFeatures", null), Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_5__["property"])()], u.prototype, "geometryType", void 0), Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_5__["property"])({
        readOnly: !0,
        dependsOn: ["features", "extent.spatialReference"]
      })], u.prototype, "mergedGeometry", null), Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_5__["property"])()], u.prototype, "routeId", void 0), Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_5__["property"])()], u.prototype, "routeName", void 0), Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_5__["property"])({
        value: null,
        readOnly: !0,
        dependsOn: ["features"]
      })], u.prototype, "strings", null), Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_5__["property"])({
        json: {
          read: {
            source: "summary.totalDriveTime"
          }
        }
      })], u.prototype, "totalDriveTime", void 0), Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_5__["property"])({
        json: {
          read: {
            source: "summary.totalLength"
          }
        }
      })], u.prototype, "totalLength", void 0), Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_5__["property"])({
        json: {
          read: {
            source: "summary.totalTime"
          }
        }
      })], u.prototype, "totalTime", void 0), u = Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_subclass_js__WEBPACK_IMPORTED_MODULE_7__["subclass"])("esri.tasks.support.DirectionsFeatureSet")], u);
      var c = u;
      /* harmony default export */

      __webpack_exports__["default"] = c;
      /***/
    },

    /***/
    "o6Le":
    /*!******************************************************!*\
      !*** ./node_modules/@arcgis/core/core/queryUtils.js ***!
      \******************************************************/

    /*! exports provided: createQueryParamsHelper */

    /***/
    function o6Le(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "createQueryParamsHelper", function () {
        return e;
      });
      /*
      All material copyright ESRI, All Rights Reserved, unless otherwise specified.
      See https://js.arcgis.com/4.18/esri/copyright.txt for details.
      */


      var t = /*#__PURE__*/function () {
        function t() {
          var _t2 = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

          _classCallCheck(this, t);

          this._options = _t2;
        }

        _createClass(t, [{
          key: "toQueryParams",
          value: function toQueryParams(_t3) {
            var _this5 = this;

            if (!_t3) return null;

            var e = _t3.toJSON(),
                o = {};

            return Object.keys(e).forEach(function (_t4) {
              var n = _this5._options[_t4];

              if (n) {
                var r = "boolean" != typeof n && n.name ? n.name : _t4,
                    s = "boolean" != typeof n && n.getter ? n.getter(e) : e[_t4];
                null != s && (o[r] = function (_t5) {
                  if (!Array.isArray(_t5)) return !1;

                  var _t6 = _slicedToArray(_t5, 1),
                      e = _t6[0];

                  return "number" == typeof e || "string" == typeof e;
                }(s) ? s.join(",") : "object" == typeof s ? JSON.stringify(s) : s);
              } else o[_t4] = e[_t4];
            }, this), o;
          }
        }]);

        return t;
      }();

      function e(e) {
        return new t(e);
      }
      /***/

    }
  }]);
})();
//# sourceMappingURL=default~tasks-ClosestFacilityTask-js~tasks-RouteTask-js-es5.js.map