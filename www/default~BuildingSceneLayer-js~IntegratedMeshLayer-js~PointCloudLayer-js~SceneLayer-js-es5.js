(function () {
  function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

  function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

  function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

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

  function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

  function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

  function _iterableToArrayLimit(arr, i) { if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr))) return; var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

  function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

  function _createForOfIteratorHelper(o, allowArrayLike) { var it; if (typeof Symbol === "undefined" || o[Symbol.iterator] == null) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e5) { throw _e5; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = o[Symbol.iterator](); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e6) { didErr = true; err = _e6; }, f: function f() { try { if (!normalCompletion && it["return"] != null) it["return"](); } finally { if (didErr) throw err; } } }; }

  function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

  function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

  function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

  function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["default~BuildingSceneLayer-js~IntegratedMeshLayer-js~PointCloudLayer-js~SceneLayer-js"], {
    /***/
    "+bym":
    /*!***************************************************************!*\
      !*** ./node_modules/@arcgis/core/webdoc/support/saveUtils.js ***!
      \***************************************************************/

    /*! exports provided: saveResources */

    /***/
    function bym(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "saveResources", function () {
        return a;
      });
      /* harmony import */


      var _core_Error_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ../../core/Error.js */
      "zlDU");
      /* harmony import */


      var _core_uuid_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ../../core/uuid.js */
      "ju1D");
      /* harmony import */


      var _core_promiseUtils_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ../../core/promiseUtils.js */
      "9MzC");
      /* harmony import */


      var _core_asyncUtils_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ../../core/asyncUtils.js */
      "eSsm");
      /* harmony import */


      var _portal_support_resourceUtils_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ../../portal/support/resourceUtils.js */
      "5qYV");
      /*
      All material copyright ESRI, All Rights Reserved, unless otherwise specified.
      See https://js.arcgis.com/4.18/esri/copyright.txt for details.
      */


      function a(_x, _x2, _x3) {
        return _a.apply(this, arguments);
      }

      function _a() {
        _a = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(s, a, u) {
          var h, i, f, m, _iterator, _step, r, o, t, _a2, _p2, _h, _iterator2, _step2, _r, l, d;

          return regeneratorRuntime.wrap(function _callee$(_context) {
            while (1) {
              switch (_context.prev = _context.next) {
                case 0:
                  if (!(!a || !a.resources)) {
                    _context.next = 2;
                    break;
                  }

                  return _context.abrupt("return");

                case 2:
                  h = a.portalItem === s.portalItem ? new Set(s.paths) : new Set();
                  s.paths.length = 0, s.portalItem = a.portalItem;
                  i = new Set(a.resources.toKeep.map(function (r) {
                    return r.resource.path;
                  })), f = new Set(), m = [];
                  i.forEach(function (r) {
                    h["delete"](r), s.paths.push(r);
                  });
                  _iterator = _createForOfIteratorHelper(a.resources.toUpdate);

                  try {
                    for (_iterator.s(); !(_step = _iterator.n()).done;) {
                      r = _step.value;

                      if (h["delete"](r.resource.path), i.has(r.resource.path) || f.has(r.resource.path)) {
                        o = r.resource, t = r.content, _a2 = r.finish, _p2 = r.error, _h = Object(_portal_support_resourceUtils_js__WEBPACK_IMPORTED_MODULE_4__["getSiblingOfSameTypeI"])(o, Object(_core_uuid_js__WEBPACK_IMPORTED_MODULE_1__["generateUUID"])());
                        s.paths.push(_h.path), m.push(n({
                          resource: _h,
                          content: t,
                          finish: _a2,
                          error: _p2
                        }, u));
                      } else s.paths.push(r.resource.path), m.push(p(r, u)), f.add(r.resource.path);
                    }
                  } catch (err) {
                    _iterator.e(err);
                  } finally {
                    _iterator.f();
                  }

                  _iterator2 = _createForOfIteratorHelper(a.resources.toAdd);

                  try {
                    for (_iterator2.s(); !(_step2 = _iterator2.n()).done;) {
                      _r = _step2.value;
                      m.push(n(_r, u)), s.paths.push(_r.resource.path);
                    }
                  } catch (err) {
                    _iterator2.e(err);
                  } finally {
                    _iterator2.f();
                  }

                  if (!(h.forEach(function (r) {
                    var e = a.portalItem.resourceFromPath(r);
                    m.push(e.portalItem.removeResource(e)["catch"](function () {}));
                  }), 0 === m.length)) {
                    _context.next = 12;
                    break;
                  }

                  return _context.abrupt("return");

                case 12:
                  _context.next = 14;
                  return Object(_core_promiseUtils_js__WEBPACK_IMPORTED_MODULE_2__["eachAlways"])(m);

                case 14:
                  l = _context.sent;
                  Object(_core_promiseUtils_js__WEBPACK_IMPORTED_MODULE_2__["throwIfAborted"])(u);
                  d = l.filter(function (r) {
                    return "error" in r;
                  }).map(function (r) {
                    return r.error;
                  });

                  if (!(d.length > 0)) {
                    _context.next = 19;
                    break;
                  }

                  throw new _core_Error_js__WEBPACK_IMPORTED_MODULE_0__["default"]("save:resources", "Failed to save one or more resources", {
                    errors: d
                  });

                case 19:
                case "end":
                  return _context.stop();
              }
            }
          }, _callee);
        }));
        return _a.apply(this, arguments);
      }

      function n(_x4, _x5) {
        return _n.apply(this, arguments);
      }

      function _n() {
        _n = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee2(r, e) {
          var o;
          return regeneratorRuntime.wrap(function _callee2$(_context2) {
            while (1) {
              switch (_context2.prev = _context2.next) {
                case 0:
                  _context2.next = 2;
                  return Object(_core_asyncUtils_js__WEBPACK_IMPORTED_MODULE_3__["result"])(r.resource.portalItem.addResource(r.resource, r.content, e));

                case 2:
                  o = _context2.sent;

                  if (!(!0 !== o.ok)) {
                    _context2.next = 5;
                    break;
                  }

                  throw r.error && r.error(o.error), o.error;

                case 5:
                  r.finish && r.finish(r.resource);

                case 6:
                case "end":
                  return _context2.stop();
              }
            }
          }, _callee2);
        }));
        return _n.apply(this, arguments);
      }

      function p(_x6, _x7) {
        return _p.apply(this, arguments);
      }
      /***/


      function _p() {
        _p = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee3(r, e) {
          var o;
          return regeneratorRuntime.wrap(function _callee3$(_context3) {
            while (1) {
              switch (_context3.prev = _context3.next) {
                case 0:
                  _context3.next = 2;
                  return Object(_core_asyncUtils_js__WEBPACK_IMPORTED_MODULE_3__["result"])(r.resource.update(r.content, e));

                case 2:
                  o = _context3.sent;

                  if (!(!0 !== o.ok)) {
                    _context3.next = 5;
                    break;
                  }

                  throw r.error(o.error), o.error;

                case 5:
                  r.finish(r.resource);

                case 6:
                case "end":
                  return _context3.stop();
              }
            }
          }, _callee3);
        }));
        return _p.apply(this, arguments);
      }
    },

    /***/
    "5qYV":
    /*!*******************************************************************!*\
      !*** ./node_modules/@arcgis/core/portal/support/resourceUtils.js ***!
      \*******************************************************************/

    /*! exports provided: addOrUpdateResource, contentToBlob, fetchResources, getSiblingOfSameType, getSiblingOfSameTypeI, removeAllResources, removeResource, splitPrefixFileNameAndExtension */

    /***/
    function qYV(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "addOrUpdateResource", function () {
        return c;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "contentToBlob", function () {
        return d;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "fetchResources", function () {
        return u;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "getSiblingOfSameType", function () {
        return h;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "getSiblingOfSameTypeI", function () {
        return f;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "removeAllResources", function () {
        return l;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "removeResource", function () {
        return i;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "splitPrefixFileNameAndExtension", function () {
        return m;
      });
      /* harmony import */


      var _core_maybe_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ../../core/maybe.js */
      "srIe");
      /* harmony import */


      var _core_Error_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ../../core/Error.js */
      "zlDU");
      /* harmony import */


      var _core_urlUtils_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ../../core/urlUtils.js */
      "4EHJ");
      /* harmony import */


      var _request_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ../../request.js */
      "Lqtk");
      /*
      All material copyright ESRI, All Rights Reserved, unless otherwise specified.
      See https://js.arcgis.com/4.18/esri/copyright.txt for details.
      */


      function u(_x8) {
        return _u.apply(this, arguments);
      }

      function _u() {
        _u = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee4(t) {
          var r,
              a,
              s,
              _r$start,
              n,
              _r$num,
              u,
              _r$sortOrder,
              c,
              _r$sortField,
              i,
              l,
              p,
              _args4 = arguments;

          return regeneratorRuntime.wrap(function _callee4$(_context4) {
            while (1) {
              switch (_context4.prev = _context4.next) {
                case 0:
                  r = _args4.length > 1 && _args4[1] !== undefined ? _args4[1] : {};
                  a = _args4.length > 2 ? _args4[2] : undefined;
                  _context4.next = 4;
                  return t.load(a);

                case 4:
                  s = Object(_core_urlUtils_js__WEBPACK_IMPORTED_MODULE_2__["join"])(t.itemUrl, "resources");
                  _r$start = r.start;
                  n = _r$start === void 0 ? 1 : _r$start;
                  _r$num = r.num;
                  u = _r$num === void 0 ? 10 : _r$num;
                  _r$sortOrder = r.sortOrder;
                  c = _r$sortOrder === void 0 ? "asc" : _r$sortOrder;
                  _r$sortField = r.sortField;
                  i = _r$sortField === void 0 ? "created" : _r$sortField;
                  l = {
                    query: {
                      start: n,
                      num: u,
                      sortOrder: c,
                      sortField: i
                    },
                    signal: Object(_core_maybe_js__WEBPACK_IMPORTED_MODULE_0__["get"])(a, "signal")
                  };
                  _context4.next = 16;
                  return t.portal._request(s, l);

                case 16:
                  p = _context4.sent;
                  return _context4.abrupt("return", {
                    total: p.total,
                    nextStart: p.nextStart,
                    resources: p.resources.map(function (_ref3) {
                      var e = _ref3.created,
                          r = _ref3.size,
                          a = _ref3.resource;
                      return {
                        created: new Date(e),
                        size: r,
                        resource: t.resourceFromPath(a)
                      };
                    })
                  });

                case 18:
                case "end":
                  return _context4.stop();
              }
            }
          }, _callee4);
        }));
        return _u.apply(this, arguments);
      }

      function c(_x9, _x10, _x11, _x12) {
        return _c.apply(this, arguments);
      }

      function _c() {
        _c = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee5(r, s, n, u) {
          var c, _p5, _p6, i, l, m, h;

          return regeneratorRuntime.wrap(function _callee5$(_context5) {
            while (1) {
              switch (_context5.prev = _context5.next) {
                case 0:
                  if (r.hasPath()) {
                    _context5.next = 2;
                    break;
                  }

                  throw new _core_Error_js__WEBPACK_IMPORTED_MODULE_1__["default"]("portal-item-resource-".concat(s, ":invalid-path"), "Resource does not have a valid path");

                case 2:
                  _context5.next = 4;
                  return r.portalItem.load(u);

                case 4:
                  c = Object(_core_urlUtils_js__WEBPACK_IMPORTED_MODULE_2__["join"])(r.portalItem.userItemUrl, "add" === s ? "addResources" : "updateResources");
                  _p5 = p(r.path);
                  _p6 = _slicedToArray(_p5, 2);
                  i = _p6[0];
                  l = _p6[1];
                  _context5.next = 11;
                  return d(n);

                case 11:
                  m = _context5.sent;
                  h = new FormData();
                  i && "." !== i && h.append("resourcesPrefix", i);
                  h.append("fileName", l);
                  h.append("file", m, l);
                  h.append("f", "json");
                  Object(_core_maybe_js__WEBPACK_IMPORTED_MODULE_0__["isSome"])(u) && u.access && h.append("access", u.access);
                  _context5.next = 20;
                  return r.portalItem.portal._request(c, {
                    method: "post",
                    body: h,
                    signal: Object(_core_maybe_js__WEBPACK_IMPORTED_MODULE_0__["get"])(u, "signal")
                  });

                case 20:
                  return _context5.abrupt("return", r);

                case 21:
                case "end":
                  return _context5.stop();
              }
            }
          }, _callee5);
        }));
        return _c.apply(this, arguments);
      }

      function i(_x13, _x14, _x15) {
        return _i.apply(this, arguments);
      }

      function _i() {
        _i = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee6(t, r, s) {
          var n;
          return regeneratorRuntime.wrap(function _callee6$(_context6) {
            while (1) {
              switch (_context6.prev = _context6.next) {
                case 0:
                  if (r.hasPath()) {
                    _context6.next = 2;
                    break;
                  }

                  throw new _core_Error_js__WEBPACK_IMPORTED_MODULE_1__["default"]("portal-item-resources-remove:invalid-path", "Resource does not have a valid path");

                case 2:
                  _context6.next = 4;
                  return t.load(s);

                case 4:
                  n = Object(_core_urlUtils_js__WEBPACK_IMPORTED_MODULE_2__["join"])(t.userItemUrl, "removeResources");
                  _context6.next = 7;
                  return t.portal._request(n, {
                    method: "post",
                    query: {
                      resource: r.path
                    },
                    signal: Object(_core_maybe_js__WEBPACK_IMPORTED_MODULE_0__["get"])(s, "signal")
                  });

                case 7:
                  r.portalItem = null;

                case 8:
                case "end":
                  return _context6.stop();
              }
            }
          }, _callee6);
        }));
        return _i.apply(this, arguments);
      }

      function l(_x16, _x17) {
        return _l.apply(this, arguments);
      }

      function _l() {
        _l = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee7(t, r) {
          var a;
          return regeneratorRuntime.wrap(function _callee7$(_context7) {
            while (1) {
              switch (_context7.prev = _context7.next) {
                case 0:
                  _context7.next = 2;
                  return t.load(r);

                case 2:
                  a = Object(_core_urlUtils_js__WEBPACK_IMPORTED_MODULE_2__["join"])(t.userItemUrl, "removeResources");
                  return _context7.abrupt("return", t.portal._request(a, {
                    method: "post",
                    query: {
                      deleteAll: !0
                    },
                    signal: Object(_core_maybe_js__WEBPACK_IMPORTED_MODULE_0__["get"])(r, "signal")
                  }));

                case 4:
                case "end":
                  return _context7.stop();
              }
            }
          }, _callee7);
        }));
        return _l.apply(this, arguments);
      }

      function p(e) {
        var t = e.lastIndexOf("/");
        return -1 === t ? [".", e] : [e.slice(0, t), e.slice(t + 1)];
      }

      function m(e) {
        var _ref = function (e) {
          var t = Object(_core_urlUtils_js__WEBPACK_IMPORTED_MODULE_2__["getPathExtension"])(e);
          if (Object(_core_maybe_js__WEBPACK_IMPORTED_MODULE_0__["isNone"])(t)) return [e, ""];
          return [e.slice(0, e.length - t.length - 1), ".".concat(t)];
        }(e),
            _ref2 = _slicedToArray(_ref, 2),
            t = _ref2[0],
            a = _ref2[1],
            _p3 = p(t),
            _p4 = _slicedToArray(_p3, 2),
            o = _p4[0],
            n = _p4[1];

        return [o, n, a];
      }

      function d(_x18) {
        return _d2.apply(this, arguments);
      }

      function _d2() {
        _d2 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee8(e) {
          return regeneratorRuntime.wrap(function _callee8$(_context8) {
            while (1) {
              switch (_context8.prev = _context8.next) {
                case 0:
                  if (!(e instanceof Blob)) {
                    _context8.next = 2;
                    break;
                  }

                  return _context8.abrupt("return", e);

                case 2:
                  _context8.next = 4;
                  return Object(_request_js__WEBPACK_IMPORTED_MODULE_3__["default"])(e.url, {
                    responseType: "blob"
                  });

                case 4:
                  return _context8.abrupt("return", _context8.sent.data);

                case 5:
                case "end":
                  return _context8.stop();
              }
            }
          }, _callee8);
        }));
        return _d2.apply(this, arguments);
      }

      function h(e, t) {
        if (!e.hasPath()) return null;

        var _m = m(e.path),
            _m2 = _slicedToArray(_m, 3),
            r = _m2[0],
            a = _m2[2];

        return e.portalItem.resourceFromPath(Object(_core_urlUtils_js__WEBPACK_IMPORTED_MODULE_2__["join"])(r, t + a));
      }

      function f(e, t) {
        if (!e.hasPath()) return null;

        var _m3 = m(e.path),
            _m4 = _slicedToArray(_m3, 3),
            r = _m4[0],
            a = _m4[2];

        return e.portalItem.resourceFromPath(Object(_core_urlUtils_js__WEBPACK_IMPORTED_MODULE_2__["join"])(r, t + a));
      }
      /***/

    },

    /***/
    "Jpjp":
    /*!***********************************************************************!*\
      !*** ./node_modules/@arcgis/core/core/multiOriginJSONSupportUtils.js ***!
      \***********************************************************************/

    /*! exports provided: isMultiOriginJSONMixin */

    /***/
    function Jpjp(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "isMultiOriginJSONMixin", function () {
        return i;
      });
      /*
      All material copyright ESRI, All Rights Reserved, unless otherwise specified.
      See https://js.arcgis.com/4.18/esri/copyright.txt for details.
      */


      function i(i) {
        return i && "getAtOrigin" in i && "originOf" in i;
      }
      /***/

    },

    /***/
    "lq5k":
    /*!*****************************************************************!*\
      !*** ./node_modules/@arcgis/core/layers/mixins/SceneService.js ***!
      \*****************************************************************/

    /*! exports provided: SCENE_SERVICE_ITEM_TYPE, SceneService */

    /***/
    function lq5k(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "SCENE_SERVICE_ITEM_TYPE", function () {
        return P;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "SceneService", function () {
        return T;
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


      var _core_accessorSupport_decorators_writer_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! ../../core/accessorSupport/decorators/writer.js */
      "Cduq");
      /* harmony import */


      var _core_Error_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! ../../core/Error.js */
      "zlDU");
      /* harmony import */


      var _core_urlUtils_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
      /*! ../../core/urlUtils.js */
      "4EHJ");
      /* harmony import */


      var _core_uuid_js__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
      /*! ../../core/uuid.js */
      "ju1D");
      /* harmony import */


      var _portal_support_resourceExtension_js__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
      /*! ../../portal/support/resourceExtension.js */
      "9AIY");
      /* harmony import */


      var _core_promiseUtils_js__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
      /*! ../../core/promiseUtils.js */
      "9MzC");
      /* harmony import */


      var _geometry_SpatialReference_js__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(
      /*! ../../geometry/SpatialReference.js */
      "WZb1");
      /* harmony import */


      var _geometry_Extent_js__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(
      /*! ../../geometry/Extent.js */
      "OvF4");
      /* harmony import */


      var _request_js__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(
      /*! ../../request.js */
      "Lqtk");
      /* harmony import */


      var _portal_Portal_js__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(
      /*! ../../portal/Portal.js */
      "AiS/");
      /* harmony import */


      var _portal_PortalItem_js__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(
      /*! ../../portal/PortalItem.js */
      "p+Gi");
      /* harmony import */


      var _core_accessorSupport_originUtils_js__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(
      /*! ../../core/accessorSupport/originUtils.js */
      "yoHx");
      /* harmony import */


      var _support_arcgisLayerUrl_js__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(
      /*! ../support/arcgisLayerUrl.js */
      "VLTf");
      /* harmony import */


      var _geometry_HeightModelInfo_js__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(
      /*! ../../geometry/HeightModelInfo.js */
      "5k2a");
      /* harmony import */


      var _webdoc_support_saveUtils_js__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(
      /*! ../../webdoc/support/saveUtils.js */
      "+bym");
      /* harmony import */


      var _support_commonProperties_js__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(
      /*! ../support/commonProperties.js */
      "IvSi");
      /*
      All material copyright ESRI, All Rights Reserved, unless otherwise specified.
      See https://js.arcgis.com/4.18/esri/copyright.txt for details.
      */


      var O = _core_Logger_js__WEBPACK_IMPORTED_MODULE_3__["default"].getLogger("esri.layers.mixins.SceneService"),
          T = function T(r) {
        var T = /*#__PURE__*/function (_r2) {
          _inherits(T, _r2);

          var _super = _createSuper(T);

          function T() {
            var _this;

            _classCallCheck(this, T);

            _this = _super.apply(this, arguments), _this.spatialReference = null, _this.fullExtent = null, _this.heightModelInfo = null, _this.minScale = 0, _this.maxScale = 0, _this.version = {
              major: Number.NaN,
              minor: Number.NaN,
              versionString: ""
            }, _this.copyright = null, _this.sublayerTitleMode = "item-title", _this.title = null, _this.layerId = null, _this._debouncedSaveOperations = Object(_core_promiseUtils_js__WEBPACK_IMPORTED_MODULE_13__["debounce"])( /*#__PURE__*/function () {
              var _ref4 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee9(e, t, r) {
                return regeneratorRuntime.wrap(function _callee9$(_context9) {
                  while (1) {
                    switch (_context9.prev = _context9.next) {
                      case 0:
                        _context9.t0 = e;
                        _context9.next = _context9.t0 === 0 ? 3 : _context9.t0 === 1 ? 4 : 5;
                        break;

                      case 3:
                        return _context9.abrupt("return", _this._save(t));

                      case 4:
                        return _context9.abrupt("return", _this._saveAs(r, t));

                      case 5:
                      case "end":
                        return _context9.stop();
                    }
                  }
                }, _callee9);
              }));

              return function (_x19, _x20, _x21) {
                return _ref4.apply(this, arguments);
              };
            }());
            return _this;
          }

          _createClass(T, [{
            key: "readSpatialReference",
            value: function readSpatialReference(e, t) {
              return this._readSpatialReference(t);
            }
          }, {
            key: "_readSpatialReference",
            value: function _readSpatialReference(e) {
              if (null != e.spatialReference) return _geometry_SpatialReference_js__WEBPACK_IMPORTED_MODULE_14__["default"].fromJSON(e.spatialReference);
              {
                var t = e.store,
                    _r3 = t.indexCRS || t.geographicCRS,
                    o = _r3 && parseInt(_r3.substring(_r3.lastIndexOf("/") + 1, _r3.length), 10);

                return null != o ? new _geometry_SpatialReference_js__WEBPACK_IMPORTED_MODULE_14__["default"](o) : null;
              }
            }
          }, {
            key: "readFullExtent",
            value: function readFullExtent(e, t) {
              var r = t.store,
                  o = this._readSpatialReference(t);

              return null == o || null == r || null == r.extent || !Array.isArray(r.extent) || r.extent.some(function (e) {
                return e < U;
              }) ? null : new _geometry_Extent_js__WEBPACK_IMPORTED_MODULE_15__["default"]({
                xmin: r.extent[0],
                ymin: r.extent[1],
                xmax: r.extent[2],
                ymax: r.extent[3],
                spatialReference: o
              });
            }
          }, {
            key: "readVersion",
            value: function readVersion(e, t) {
              var r = t.store,
                  o = null != r.version ? r.version.toString() : "",
                  i = {
                major: Number.NaN,
                minor: Number.NaN,
                versionString: o
              },
                  s = o.split(".");
              return s.length >= 2 && (i.major = parseInt(s[0], 10), i.minor = parseInt(s[1], 10)), i;
            }
          }, {
            key: "readTitlePortalItem",
            value: function readTitlePortalItem(e) {
              return "item-title" !== this.sublayerTitleMode ? void 0 : e;
            }
          }, {
            key: "readTitleService",
            value: function readTitleService(e, r) {
              var o = this.portalItem && this.portalItem.title;
              if ("item-title" === this.sublayerTitleMode) return Object(_support_arcgisLayerUrl_js__WEBPACK_IMPORTED_MODULE_20__["titleFromUrlAndName"])(this.url, r.name);
              var i = r.name;

              if (!i && this.url) {
                var _e2 = Object(_support_arcgisLayerUrl_js__WEBPACK_IMPORTED_MODULE_20__["parse"])(this.url);

                Object(_core_maybe_js__WEBPACK_IMPORTED_MODULE_2__["isSome"])(_e2) && (i = _e2.title);
              }

              return "item-title-and-service-name" === this.sublayerTitleMode && o && (i = o + " - " + i), Object(_support_arcgisLayerUrl_js__WEBPACK_IMPORTED_MODULE_20__["cleanTitle"])(i);
            }
          }, {
            key: "url",
            set: function set(e) {
              var t = Object(_support_arcgisLayerUrl_js__WEBPACK_IMPORTED_MODULE_20__["sanitizeUrlWithLayerId"])(this, e, O);
              this._set("url", t.url), null != t.layerId && this._set("layerId", t.layerId);
            }
          }, {
            key: "writeUrl",
            value: function writeUrl(e, t, r, o) {
              Object(_support_arcgisLayerUrl_js__WEBPACK_IMPORTED_MODULE_20__["writeUrlWithLayerId"])(this, e, "layers", t, o);
            }
          }, {
            key: "parsedUrl",
            get: function get() {
              var e = this._get("url");

              if (!e) return null;
              var t = Object(_core_urlUtils_js__WEBPACK_IMPORTED_MODULE_10__["urlToObject"])(e);
              return null != this.layerId && Object(_support_arcgisLayerUrl_js__WEBPACK_IMPORTED_MODULE_20__["isArcGISUrl"])(t.path) && (t.path = "".concat(t.path, "/layers/").concat(this.layerId)), t;
            }
          }, {
            key: "_verifyRootNodeAndUpdateExtent",
            value: function () {
              var _verifyRootNodeAndUpdateExtent2 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee10(e, t) {
                return regeneratorRuntime.wrap(function _callee10$(_context10) {
                  while (1) {
                    switch (_context10.prev = _context10.next) {
                      case 0:
                        if (!e) {
                          _context10.next = 12;
                          break;
                        }

                        _context10.prev = 1;
                        _context10.t0 = this;
                        _context10.t1 = e;
                        _context10.next = 6;
                        return this._fetchRootPage(e, t);

                      case 6:
                        _context10.t2 = _context10.sent;
                        return _context10.abrupt("return", _context10.t0._updateExtentFromRootPage.call(_context10.t0, _context10.t1, _context10.t2));

                      case 10:
                        _context10.prev = 10;
                        _context10.t3 = _context10["catch"](1);

                      case 12:
                        _context10.t4 = this;
                        _context10.next = 15;
                        return this._fetchRootNode(t);

                      case 15:
                        _context10.t5 = _context10.sent;
                        return _context10.abrupt("return", _context10.t4._updateExtentFromRootNode.call(_context10.t4, _context10.t5));

                      case 17:
                      case "end":
                        return _context10.stop();
                    }
                  }
                }, _callee10, this, [[1, 10]]);
              }));

              function _verifyRootNodeAndUpdateExtent(_x22, _x23) {
                return _verifyRootNodeAndUpdateExtent2.apply(this, arguments);
              }

              return _verifyRootNodeAndUpdateExtent;
            }()
          }, {
            key: "_fetchRootPage",
            value: function () {
              var _fetchRootPage2 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee11(e, t) {
                var r, o;
                return regeneratorRuntime.wrap(function _callee11$(_context11) {
                  while (1) {
                    switch (_context11.prev = _context11.next) {
                      case 0:
                        if (e) {
                          _context11.next = 2;
                          break;
                        }

                        return _context11.abrupt("return", Object(_core_promiseUtils_js__WEBPACK_IMPORTED_MODULE_13__["reject"])());

                      case 2:
                        r = Math.floor(e.rootIndex / e.nodesPerPage), o = "".concat(this.parsedUrl.path, "/nodepages/").concat(r);
                        _context11.next = 5;
                        return Object(_request_js__WEBPACK_IMPORTED_MODULE_16__["default"])(o, {
                          responseType: "json",
                          signal: t
                        });

                      case 5:
                        return _context11.abrupt("return", _context11.sent.data);

                      case 6:
                      case "end":
                        return _context11.stop();
                    }
                  }
                }, _callee11, this);
              }));

              function _fetchRootPage(_x24, _x25) {
                return _fetchRootPage2.apply(this, arguments);
              }

              return _fetchRootPage;
            }()
          }, {
            key: "_updateExtentFromRootPage",
            value: function _updateExtentFromRootPage(e, t) {
              if (null == t || null == t.nodes) throw new _core_Error_js__WEBPACK_IMPORTED_MODULE_9__["default"]("sceneservice:invalid-node-page", "Inavlid node page.");
              var r = t.nodes[e.rootIndex % e.nodesPerPage];
              if (null == r || null == r.obb || null == r.obb.center || null == r.obb.halfSize) throw new _core_Error_js__WEBPACK_IMPORTED_MODULE_9__["default"]("sceneservice:invalid-node-page", "Inavlid node page.");
              if (r.obb.center[0] < U) return;
              var o = r.obb.halfSize,
                  i = r.obb.center[2],
                  s = Math.sqrt(o[0] * o[0] + o[1] * o[1] + o[2] * o[2]);
              this.fullExtent.zmin = i - s, this.fullExtent.zmax = i + s;
            }
          }, {
            key: "_updateExtentFromRootNode",
            value: function _updateExtentFromRootNode(e) {
              if (null == e || null == this.fullExtent || this.fullExtent.hasZ) return;
              if (!Array.isArray(e.mbs) || 4 !== e.mbs.length || e.mbs[0] < U) return;
              var t = e.mbs[2],
                  r = e.mbs[3];
              this.fullExtent.zmin = t - r, this.fullExtent.zmax = t + r;
            }
          }, {
            key: "_fetchRootNode",
            value: function () {
              var _fetchRootNode2 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee12(e) {
                var t;
                return regeneratorRuntime.wrap(function _callee12$(_context12) {
                  while (1) {
                    switch (_context12.prev = _context12.next) {
                      case 0:
                        if (this.rootNode) {
                          _context12.next = 2;
                          break;
                        }

                        return _context12.abrupt("return");

                      case 2:
                        t = Object(_core_urlUtils_js__WEBPACK_IMPORTED_MODULE_10__["join"])(this.parsedUrl.path, this.rootNode);
                        _context12.prev = 3;
                        _context12.next = 6;
                        return Object(_request_js__WEBPACK_IMPORTED_MODULE_16__["default"])(t, {
                          query: {
                            f: "json"
                          },
                          responseType: "json",
                          signal: e
                        });

                      case 6:
                        return _context12.abrupt("return", _context12.sent.data);

                      case 9:
                        _context12.prev = 9;
                        _context12.t0 = _context12["catch"](3);
                        throw new _core_Error_js__WEBPACK_IMPORTED_MODULE_9__["default"]("sceneservice:root-node-missing", "Root node missing.", {
                          error: _context12.t0,
                          url: t
                        });

                      case 12:
                      case "end":
                        return _context12.stop();
                    }
                  }
                }, _callee12, this, [[3, 9]]);
              }));

              function _fetchRootNode(_x26) {
                return _fetchRootNode2.apply(this, arguments);
              }

              return _fetchRootNode;
            }()
          }, {
            key: "_fetchService",
            value: function () {
              var _fetchService2 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee13(e) {
                var t;
                return regeneratorRuntime.wrap(function _callee13$(_context13) {
                  while (1) {
                    switch (_context13.prev = _context13.next) {
                      case 0:
                        if (!(null == this.layerId && /SceneServer\/*$/i.test(this.url))) {
                          _context13.next = 5;
                          break;
                        }

                        _context13.next = 3;
                        return this._fetchFirstLayerId(e);

                      case 3:
                        t = _context13.sent;
                        null != t && (this.layerId = t);

                      case 5:
                        return _context13.abrupt("return", this._fetchServiceLayer(e));

                      case 6:
                      case "end":
                        return _context13.stop();
                    }
                  }
                }, _callee13, this);
              }));

              function _fetchService(_x27) {
                return _fetchService2.apply(this, arguments);
              }

              return _fetchService;
            }()
          }, {
            key: "_fetchFirstLayerId",
            value: function () {
              var _fetchFirstLayerId2 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee14(e) {
                var t;
                return regeneratorRuntime.wrap(function _callee14$(_context14) {
                  while (1) {
                    switch (_context14.prev = _context14.next) {
                      case 0:
                        _context14.next = 2;
                        return Object(_request_js__WEBPACK_IMPORTED_MODULE_16__["default"])(this.url, {
                          query: {
                            f: "json"
                          },
                          responseType: "json",
                          signal: e
                        });

                      case 2:
                        t = _context14.sent;

                        if (!(t.data && Array.isArray(t.data.layers) && t.data.layers.length > 0)) {
                          _context14.next = 5;
                          break;
                        }

                        return _context14.abrupt("return", t.data.layers[0].id);

                      case 5:
                      case "end":
                        return _context14.stop();
                    }
                  }
                }, _callee14, this);
              }));

              function _fetchFirstLayerId(_x28) {
                return _fetchFirstLayerId2.apply(this, arguments);
              }

              return _fetchFirstLayerId;
            }()
          }, {
            key: "_fetchServiceLayer",
            value: function () {
              var _fetchServiceLayer2 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee15(e) {
                var t, r;
                return regeneratorRuntime.wrap(function _callee15$(_context15) {
                  while (1) {
                    switch (_context15.prev = _context15.next) {
                      case 0:
                        _context15.next = 2;
                        return Object(_request_js__WEBPACK_IMPORTED_MODULE_16__["default"])(this.parsedUrl.path, {
                          query: {
                            f: "json"
                          },
                          responseType: "json",
                          signal: e
                        });

                      case 2:
                        t = _context15.sent;
                        t.ssl && (this.url = this.url.replace(/^http:/i, "https:"));
                        r = t.data;
                        this.read(r, {
                          origin: "service",
                          url: this.parsedUrl
                        }), this.validateLayer(r);

                      case 6:
                      case "end":
                        return _context15.stop();
                    }
                  }
                }, _callee15, this);
              }));

              function _fetchServiceLayer(_x29) {
                return _fetchServiceLayer2.apply(this, arguments);
              }

              return _fetchServiceLayer;
            }()
          }, {
            key: "_ensureLoadBeforeSave",
            value: function () {
              var _ensureLoadBeforeSave2 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee16() {
                return regeneratorRuntime.wrap(function _callee16$(_context16) {
                  while (1) {
                    switch (_context16.prev = _context16.next) {
                      case 0:
                        _context16.next = 2;
                        return this.load();

                      case 2:
                        _context16.t0 = "beforeSave" in this && "function" == typeof this.beforeSave;

                        if (!_context16.t0) {
                          _context16.next = 6;
                          break;
                        }

                        _context16.next = 6;
                        return this.beforeSave();

                      case 6:
                      case "end":
                        return _context16.stop();
                    }
                  }
                }, _callee16, this);
              }));

              function _ensureLoadBeforeSave() {
                return _ensureLoadBeforeSave2.apply(this, arguments);
              }

              return _ensureLoadBeforeSave;
            }()
          }, {
            key: "validateLayer",
            value: function validateLayer(e) {}
          }, {
            key: "_updateTypeKeywords",
            value: function _updateTypeKeywords(e, t, r) {
              e.typeKeywords || (e.typeKeywords = []);
              var o = t.getTypeKeywords();

              var _iterator3 = _createForOfIteratorHelper(o),
                  _step3;

              try {
                for (_iterator3.s(); !(_step3 = _iterator3.n()).done;) {
                  var _t = _step3.value;
                  e.typeKeywords.push(_t);
                }
              } catch (err) {
                _iterator3.e(err);
              } finally {
                _iterator3.f();
              }

              e.typeKeywords && (e.typeKeywords = e.typeKeywords.filter(function (e, t, r) {
                return r.indexOf(e) === t;
              }), 1 === r && (e.typeKeywords = e.typeKeywords.filter(function (e) {
                return "Hosted Service" !== e;
              })));
            }
          }, {
            key: "_saveAs",
            value: function () {
              var _saveAs2 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee17(e, t) {
                var r, o, i, s, a;
                return regeneratorRuntime.wrap(function _callee17$(_context17) {
                  while (1) {
                    switch (_context17.prev = _context17.next) {
                      case 0:
                        r = _objectSpread(_objectSpread({}, A), t);
                        o = _portal_PortalItem_js__WEBPACK_IMPORTED_MODULE_18__["default"].from(e);
                        _context17.t0 = o;

                        if (_context17.t0) {
                          _context17.next = 7;
                          break;
                        }

                        O.error("_saveAs(): requires a portal item parameter");
                        _context17.next = 7;
                        return Object(_core_promiseUtils_js__WEBPACK_IMPORTED_MODULE_13__["reject"])(new _core_Error_js__WEBPACK_IMPORTED_MODULE_9__["default"]("sceneservice:portal-item-required", "_saveAs() requires a portal item to save to"));

                      case 7:
                        o.id && (o = o.clone(), o.id = null);
                        i = o.portal || _portal_Portal_js__WEBPACK_IMPORTED_MODULE_17__["default"].getDefault();
                        _context17.next = 11;
                        return this._ensureLoadBeforeSave();

                      case 11:
                        o.type = P;
                        o.portal = i;
                        s = {
                          origin: "portal-item",
                          url: null,
                          messages: [],
                          portal: i,
                          portalItem: o,
                          writtenProperties: [],
                          blockedRelativeUrls: [],
                          resources: {
                            toAdd: [],
                            toUpdate: [],
                            toKeep: [],
                            pendingOperations: []
                          }
                        }, a = {
                          layers: [this.write(null, s)]
                        };
                        _context17.next = 16;
                        return Object(_core_promiseUtils_js__WEBPACK_IMPORTED_MODULE_13__["all"])(s.resources.pendingOperations);

                      case 16:
                        _context17.next = 18;
                        return this._validateAgainstJSONSchema(a, s, r);

                      case 18:
                        o.url = this.url;
                        o.title || (o.title = this.title);

                        this._updateTypeKeywords(o, r, 1);

                        _context17.next = 23;
                        return i._signIn();

                      case 23:
                        _context17.next = 25;
                        return i.user.addItem({
                          item: o,
                          folder: r && r.folder,
                          data: a
                        });

                      case 25:
                        _context17.next = 27;
                        return Object(_webdoc_support_saveUtils_js__WEBPACK_IMPORTED_MODULE_22__["saveResources"])(this.resourceReferences, s, null);

                      case 27:
                        this.portalItem = o;
                        Object(_core_accessorSupport_originUtils_js__WEBPACK_IMPORTED_MODULE_19__["updateOrigins"])(s);
                        s.portalItem = o;
                        return _context17.abrupt("return", o);

                      case 31:
                      case "end":
                        return _context17.stop();
                    }
                  }
                }, _callee17, this);
              }));

              function _saveAs(_x30, _x31) {
                return _saveAs2.apply(this, arguments);
              }

              return _saveAs;
            }()
          }, {
            key: "_save",
            value: function () {
              var _save2 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee18(e) {
                var t, r, o;
                return regeneratorRuntime.wrap(function _callee18$(_context18) {
                  while (1) {
                    switch (_context18.prev = _context18.next) {
                      case 0:
                        t = _objectSpread(_objectSpread({}, A), e);
                        _context18.t0 = this.portalItem;

                        if (_context18.t0) {
                          _context18.next = 6;
                          break;
                        }

                        O.error("_save(): requires the .portalItem property to be set");
                        _context18.next = 6;
                        return Object(_core_promiseUtils_js__WEBPACK_IMPORTED_MODULE_13__["reject"])(new _core_Error_js__WEBPACK_IMPORTED_MODULE_9__["default"]("sceneservice:portal-item-not-set", "Portal item to save to has not been set on this SceneService"));

                      case 6:
                        _context18.t1 = this.portalItem.type !== P;

                        if (!_context18.t1) {
                          _context18.next = 11;
                          break;
                        }

                        O.error("_save(): Non-matching portal item type. Got " + this.portalItem.type + ", expected " + P);
                        _context18.next = 11;
                        return Object(_core_promiseUtils_js__WEBPACK_IMPORTED_MODULE_13__["reject"])(new _core_Error_js__WEBPACK_IMPORTED_MODULE_9__["default"]("sceneservice:portal-item-wrong-type", "Portal item needs to have type \"".concat(P, "\"")));

                      case 11:
                        _context18.next = 13;
                        return this._ensureLoadBeforeSave();

                      case 13:
                        r = {
                          origin: "portal-item",
                          url: this.portalItem.itemUrl && Object(_core_urlUtils_js__WEBPACK_IMPORTED_MODULE_10__["urlToObject"])(this.portalItem.itemUrl),
                          messages: [],
                          portal: this.portalItem.portal || _portal_Portal_js__WEBPACK_IMPORTED_MODULE_17__["default"].getDefault(),
                          portalItem: this.portalItem,
                          writtenProperties: [],
                          blockedRelativeUrls: [],
                          resources: {
                            toAdd: [],
                            toUpdate: [],
                            toKeep: [],
                            pendingOperations: []
                          }
                        }, o = {
                          layers: [this.write(null, r)]
                        };
                        _context18.next = 16;
                        return Object(_core_promiseUtils_js__WEBPACK_IMPORTED_MODULE_13__["all"])(r.resources.pendingOperations);

                      case 16:
                        _context18.next = 18;
                        return this._validateAgainstJSONSchema(o, r, t);

                      case 18:
                        this.portalItem.url = this.url;
                        this.portalItem.title || (this.portalItem.title = this.title);

                        this._updateTypeKeywords(this.portalItem, t, 0);

                        _context18.next = 23;
                        return this.portalItem.update({
                          data: o
                        });

                      case 23:
                        _context18.next = 25;
                        return Object(_webdoc_support_saveUtils_js__WEBPACK_IMPORTED_MODULE_22__["saveResources"])(this.resourceReferences, r, null);

                      case 25:
                        Object(_core_accessorSupport_originUtils_js__WEBPACK_IMPORTED_MODULE_19__["updateOrigins"])(r);
                        return _context18.abrupt("return", this.portalItem);

                      case 27:
                      case "end":
                        return _context18.stop();
                    }
                  }
                }, _callee18, this);
              }));

              function _save(_x32) {
                return _save2.apply(this, arguments);
              }

              return _save;
            }()
          }, {
            key: "_validateAgainstJSONSchema",
            value: function () {
              var _validateAgainstJSONSchema2 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee19(e, t, r) {
                var o, _t2, _e3, _e4;

                return regeneratorRuntime.wrap(function _callee19$(_context19) {
                  while (1) {
                    switch (_context19.prev = _context19.next) {
                      case 0:
                        o = t.messages.filter(function (e) {
                          return "error" === e.type;
                        }).map(function (e) {
                          return new _core_Error_js__WEBPACK_IMPORTED_MODULE_9__["default"](e.name, e.message, e.details);
                        });

                        if (!(r && r.validationOptions.ignoreUnsupported && (o = o.filter(function (e) {
                          return "layer:unsupported" !== e.name && "symbol:unsupported" !== e.name && "symbol-layer:unsupported" !== e.name && "property:unsupported" !== e.name && "url:unsupported" !== e.name && "scenemodification:unsupported" !== e.name;
                        })), r.validationOptions.enabled || E)) {
                          _context19.next = 10;
                          break;
                        }

                        _context19.next = 4;
                        return __webpack_require__.e(
                        /*! import() | support-schemaValidator-js */
                        "support-schemaValidator-js").then(__webpack_require__.bind(null,
                        /*! ../support/schemaValidator.js */
                        "p+sB"));

                      case 4:
                        _t2 = _context19.sent.validate(e, r.portalItemLayerType);

                        if (!(_t2.length > 0)) {
                          _context19.next = 10;
                          break;
                        }

                        _e3 = "Layer item did not validate:\n".concat(_t2.join("\n"));

                        if (!(O.error("_validateAgainstJSONSchema(): ".concat(_e3)), "throw" === r.validationOptions.failPolicy)) {
                          _context19.next = 10;
                          break;
                        }

                        _e4 = _t2.map(function (e) {
                          return new _core_Error_js__WEBPACK_IMPORTED_MODULE_9__["default"]("sceneservice:schema-validation", e);
                        }).concat(o);
                        throw new _core_Error_js__WEBPACK_IMPORTED_MODULE_9__["default"]("sceneservice-validate:error", "Failed to save layer item due to schema validation, see `details.errors`.", {
                          combined: _e4
                        });

                      case 10:
                        if (!(o.length > 0)) {
                          _context19.next = 12;
                          break;
                        }

                        throw new _core_Error_js__WEBPACK_IMPORTED_MODULE_9__["default"]("sceneservice:save", "Failed to save SceneService due to unsupported or invalid content. See 'details.errors' for more detailed information", {
                          errors: o
                        });

                      case 12:
                      case "end":
                        return _context19.stop();
                    }
                  }
                }, _callee19);
              }));

              function _validateAgainstJSONSchema(_x33, _x34, _x35) {
                return _validateAgainstJSONSchema2.apply(this, arguments);
              }

              return _validateAgainstJSONSchema;
            }()
          }]);

          return T;
        }(r);

        return Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_5__["property"])({
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
        })], T.prototype, "id", void 0), Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_5__["property"])({
          type: _geometry_SpatialReference_js__WEBPACK_IMPORTED_MODULE_14__["default"]
        })], T.prototype, "spatialReference", void 0), Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_reader_js__WEBPACK_IMPORTED_MODULE_6__["reader"])("spatialReference", ["spatialReference", "store.indexCRS", "store.geographicCRS"])], T.prototype, "readSpatialReference", null), Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_5__["property"])({
          type: _geometry_Extent_js__WEBPACK_IMPORTED_MODULE_15__["default"]
        })], T.prototype, "fullExtent", void 0), Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_reader_js__WEBPACK_IMPORTED_MODULE_6__["reader"])("fullExtent", ["store.extent", "spatialReference", "store.indexCRS", "store.geographicCRS"])], T.prototype, "readFullExtent", null), Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_5__["property"])({
          readOnly: !0,
          type: _geometry_HeightModelInfo_js__WEBPACK_IMPORTED_MODULE_21__["default"]
        })], T.prototype, "heightModelInfo", void 0), Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_5__["property"])({
          type: Number,
          json: {
            name: "layerDefinition.minScale",
            write: !0,
            origins: {
              service: {
                read: {
                  source: "minScale"
                },
                write: !1
              }
            }
          }
        })], T.prototype, "minScale", void 0), Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_5__["property"])({
          type: Number,
          json: {
            name: "layerDefinition.maxScale",
            write: !0,
            origins: {
              service: {
                read: {
                  source: "maxScale"
                },
                write: !1
              }
            }
          }
        })], T.prototype, "maxScale", void 0), Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_5__["property"])({
          readOnly: !0
        })], T.prototype, "version", void 0), Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_reader_js__WEBPACK_IMPORTED_MODULE_6__["reader"])("version", ["store.version"])], T.prototype, "readVersion", null), Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_5__["property"])({
          type: String,
          json: {
            read: {
              source: "copyrightText"
            }
          }
        })], T.prototype, "copyright", void 0), Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_5__["property"])({
          type: String,
          json: {
            read: !1
          }
        })], T.prototype, "sublayerTitleMode", void 0), Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_5__["property"])({
          type: String
        })], T.prototype, "title", void 0), Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_reader_js__WEBPACK_IMPORTED_MODULE_6__["reader"])("portal-item", "title")], T.prototype, "readTitlePortalItem", null), Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_reader_js__WEBPACK_IMPORTED_MODULE_6__["reader"])("service", "title", ["name"])], T.prototype, "readTitleService", null), Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_5__["property"])({
          type: Number,
          json: {
            origins: {
              service: {
                read: {
                  source: "id"
                }
              },
              "portal-item": {
                write: {
                  target: "id",
                  isRequired: !0,
                  ignoreOrigin: !0
                },
                read: !1
              }
            }
          }
        })], T.prototype, "layerId", void 0), Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_5__["property"])(_support_commonProperties_js__WEBPACK_IMPORTED_MODULE_23__["url"])], T.prototype, "url", null), Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_writer_js__WEBPACK_IMPORTED_MODULE_8__["writer"])("url")], T.prototype, "writeUrl", null), Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_5__["property"])({
          dependsOn: ["layerId"]
        })], T.prototype, "parsedUrl", null), Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_5__["property"])({
          readOnly: !0
        })], T.prototype, "store", void 0), Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_5__["property"])({
          type: String,
          readOnly: !0,
          json: {
            read: {
              source: "store.rootNode"
            }
          }
        })], T.prototype, "rootNode", void 0), T = Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_subclass_js__WEBPACK_IMPORTED_MODULE_7__["subclass"])("esri.layers.mixins.SceneService")], T), T;
      },
          U = -1e38,
          E = !1,
          P = "Scene Service",
          A = {
        getTypeKeywords: function getTypeKeywords() {
          return [];
        },
        portalItemLayerType: "unknown",
        validationOptions: {
          enabled: !0,
          ignoreUnsupported: !1,
          failPolicy: "throw"
        }
      };
      /***/

    },

    /***/
    "m0D6":
    /*!********************************************************************!*\
      !*** ./node_modules/@arcgis/core/renderers/support/lengthUtils.js ***!
      \********************************************************************/

    /*! exports provided: meterIn */

    /***/
    function m0D6(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "meterIn", function () {
        return m;
      });
      /* harmony import */


      var _geometry_support_Ellipsoid_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ../../geometry/support/Ellipsoid.js */
      "IlWj");
      /* harmony import */


      var _core_unitUtils_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ../../core/unitUtils.js */
      "gEht");
      /*
      All material copyright ESRI, All Rights Reserved, unless otherwise specified.
      See https://js.arcgis.com/4.18/esri/copyright.txt for details.
      */


      var m = {
        inches: Object(_core_unitUtils_js__WEBPACK_IMPORTED_MODULE_1__["convertUnit"])(1, "meters", "inches"),
        feet: Object(_core_unitUtils_js__WEBPACK_IMPORTED_MODULE_1__["convertUnit"])(1, "meters", "feet"),
        "us-feet": Object(_core_unitUtils_js__WEBPACK_IMPORTED_MODULE_1__["convertUnit"])(1, "meters", "us-feet"),
        yards: Object(_core_unitUtils_js__WEBPACK_IMPORTED_MODULE_1__["convertUnit"])(1, "meters", "yards"),
        miles: Object(_core_unitUtils_js__WEBPACK_IMPORTED_MODULE_1__["convertUnit"])(1, "meters", "miles"),
        "nautical-miles": Object(_core_unitUtils_js__WEBPACK_IMPORTED_MODULE_1__["convertUnit"])(1, "meters", "nautical-miles"),
        millimeters: Object(_core_unitUtils_js__WEBPACK_IMPORTED_MODULE_1__["convertUnit"])(1, "meters", "millimeters"),
        centimeters: Object(_core_unitUtils_js__WEBPACK_IMPORTED_MODULE_1__["convertUnit"])(1, "meters", "centimeters"),
        decimeters: Object(_core_unitUtils_js__WEBPACK_IMPORTED_MODULE_1__["convertUnit"])(1, "meters", "decimeters"),
        meters: Object(_core_unitUtils_js__WEBPACK_IMPORTED_MODULE_1__["convertUnit"])(1, "meters", "meters"),
        kilometers: Object(_core_unitUtils_js__WEBPACK_IMPORTED_MODULE_1__["convertUnit"])(1, "meters", "kilometers"),
        "decimal-degrees": 1 / Object(_core_unitUtils_js__WEBPACK_IMPORTED_MODULE_1__["lengthToDegrees"])(1, "meters", _geometry_support_Ellipsoid_js__WEBPACK_IMPORTED_MODULE_0__["earth"].radius)
      };
      /***/
    },

    /***/
    "yoHx":
    /*!***********************************************************************!*\
      !*** ./node_modules/@arcgis/core/core/accessorSupport/originUtils.js ***!
      \***********************************************************************/

    /*! exports provided: updateOrigins */

    /***/
    function yoHx(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "updateOrigins", function () {
        return r;
      });
      /* harmony import */


      var _multiOriginJSONSupportUtils_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ../multiOriginJSONSupportUtils.js */
      "Jpjp");
      /*
      All material copyright ESRI, All Rights Reserved, unless otherwise specified.
      See https://js.arcgis.com/4.18/esri/copyright.txt for details.
      */


      function r(r) {
        r && r.writtenProperties && r.writtenProperties.forEach(function (r) {
          var t = r.target;
          r.newOrigin && r.oldOrigin !== r.newOrigin && Object(_multiOriginJSONSupportUtils_js__WEBPACK_IMPORTED_MODULE_0__["isMultiOriginJSONMixin"])(t) && t.updateOrigin(r.propName, r.newOrigin);
        });
      }
      /***/

    }
  }]);
})();
//# sourceMappingURL=default~BuildingSceneLayer-js~IntegratedMeshLayer-js~PointCloudLayer-js~SceneLayer-js-es5.js.map