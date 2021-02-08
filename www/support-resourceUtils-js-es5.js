(function () {
  function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

  function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

  function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

  function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

  function _iterableToArrayLimit(arr, i) { if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr))) return; var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

  function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

  function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

  function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["support-resourceUtils-js"], {
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


      function u(_x) {
        return _u.apply(this, arguments);
      }

      function _u() {
        _u = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(t) {
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
              _args = arguments;

          return regeneratorRuntime.wrap(function _callee$(_context) {
            while (1) {
              switch (_context.prev = _context.next) {
                case 0:
                  r = _args.length > 1 && _args[1] !== undefined ? _args[1] : {};
                  a = _args.length > 2 ? _args[2] : undefined;
                  _context.next = 4;
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
                  _context.next = 16;
                  return t.portal._request(s, l);

                case 16:
                  p = _context.sent;
                  return _context.abrupt("return", {
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
                  return _context.stop();
              }
            }
          }, _callee);
        }));
        return _u.apply(this, arguments);
      }

      function c(_x2, _x3, _x4, _x5) {
        return _c.apply(this, arguments);
      }

      function _c() {
        _c = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee2(r, s, n, u) {
          var c, _p3, _p4, i, l, m, h;

          return regeneratorRuntime.wrap(function _callee2$(_context2) {
            while (1) {
              switch (_context2.prev = _context2.next) {
                case 0:
                  if (r.hasPath()) {
                    _context2.next = 2;
                    break;
                  }

                  throw new _core_Error_js__WEBPACK_IMPORTED_MODULE_1__["default"]("portal-item-resource-".concat(s, ":invalid-path"), "Resource does not have a valid path");

                case 2:
                  _context2.next = 4;
                  return r.portalItem.load(u);

                case 4:
                  c = Object(_core_urlUtils_js__WEBPACK_IMPORTED_MODULE_2__["join"])(r.portalItem.userItemUrl, "add" === s ? "addResources" : "updateResources");
                  _p3 = p(r.path);
                  _p4 = _slicedToArray(_p3, 2);
                  i = _p4[0];
                  l = _p4[1];
                  _context2.next = 11;
                  return d(n);

                case 11:
                  m = _context2.sent;
                  h = new FormData();
                  i && "." !== i && h.append("resourcesPrefix", i);
                  h.append("fileName", l);
                  h.append("file", m, l);
                  h.append("f", "json");
                  Object(_core_maybe_js__WEBPACK_IMPORTED_MODULE_0__["isSome"])(u) && u.access && h.append("access", u.access);
                  _context2.next = 20;
                  return r.portalItem.portal._request(c, {
                    method: "post",
                    body: h,
                    signal: Object(_core_maybe_js__WEBPACK_IMPORTED_MODULE_0__["get"])(u, "signal")
                  });

                case 20:
                  return _context2.abrupt("return", r);

                case 21:
                case "end":
                  return _context2.stop();
              }
            }
          }, _callee2);
        }));
        return _c.apply(this, arguments);
      }

      function i(_x6, _x7, _x8) {
        return _i.apply(this, arguments);
      }

      function _i() {
        _i = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee3(t, r, s) {
          var n;
          return regeneratorRuntime.wrap(function _callee3$(_context3) {
            while (1) {
              switch (_context3.prev = _context3.next) {
                case 0:
                  if (r.hasPath()) {
                    _context3.next = 2;
                    break;
                  }

                  throw new _core_Error_js__WEBPACK_IMPORTED_MODULE_1__["default"]("portal-item-resources-remove:invalid-path", "Resource does not have a valid path");

                case 2:
                  _context3.next = 4;
                  return t.load(s);

                case 4:
                  n = Object(_core_urlUtils_js__WEBPACK_IMPORTED_MODULE_2__["join"])(t.userItemUrl, "removeResources");
                  _context3.next = 7;
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
                  return _context3.stop();
              }
            }
          }, _callee3);
        }));
        return _i.apply(this, arguments);
      }

      function l(_x9, _x10) {
        return _l.apply(this, arguments);
      }

      function _l() {
        _l = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee4(t, r) {
          var a;
          return regeneratorRuntime.wrap(function _callee4$(_context4) {
            while (1) {
              switch (_context4.prev = _context4.next) {
                case 0:
                  _context4.next = 2;
                  return t.load(r);

                case 2:
                  a = Object(_core_urlUtils_js__WEBPACK_IMPORTED_MODULE_2__["join"])(t.userItemUrl, "removeResources");
                  return _context4.abrupt("return", t.portal._request(a, {
                    method: "post",
                    query: {
                      deleteAll: !0
                    },
                    signal: Object(_core_maybe_js__WEBPACK_IMPORTED_MODULE_0__["get"])(r, "signal")
                  }));

                case 4:
                case "end":
                  return _context4.stop();
              }
            }
          }, _callee4);
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
            _p = p(t),
            _p2 = _slicedToArray(_p, 2),
            o = _p2[0],
            n = _p2[1];

        return [o, n, a];
      }

      function d(_x11) {
        return _d2.apply(this, arguments);
      }

      function _d2() {
        _d2 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee5(e) {
          return regeneratorRuntime.wrap(function _callee5$(_context5) {
            while (1) {
              switch (_context5.prev = _context5.next) {
                case 0:
                  if (!(e instanceof Blob)) {
                    _context5.next = 2;
                    break;
                  }

                  return _context5.abrupt("return", e);

                case 2:
                  _context5.next = 4;
                  return Object(_request_js__WEBPACK_IMPORTED_MODULE_3__["default"])(e.url, {
                    responseType: "blob"
                  });

                case 4:
                  return _context5.abrupt("return", _context5.sent.data);

                case 5:
                case "end":
                  return _context5.stop();
              }
            }
          }, _callee5);
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

    }
  }]);
})();
//# sourceMappingURL=support-resourceUtils-js-es5.js.map