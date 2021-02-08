(function () {
  function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

  function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["portal-support-geometryServiceUtils-js"], {
    /***/
    "4ugL":
    /*!**************************************************************************!*\
      !*** ./node_modules/@arcgis/core/portal/support/geometryServiceUtils.js ***!
      \**************************************************************************/

    /*! exports provided: create, projectGeometry */

    /***/
    function ugL(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "create", function () {
        return i;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "projectGeometry", function () {
        return n;
      });
      /* harmony import */


      var _config_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ../../config.js */
      "EyXx");
      /* harmony import */


      var _core_Error_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ../../core/Error.js */
      "zlDU");
      /* harmony import */


      var _Portal_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ../Portal.js */
      "AiS/");
      /* harmony import */


      var _tasks_support_ProjectParameters_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ../../tasks/support/ProjectParameters.js */
      "ACSY");
      /*
      All material copyright ESRI, All Rights Reserved, unless otherwise specified.
      See https://js.arcgis.com/4.18/esri/copyright.txt for details.
      */


      function i() {
        return _i.apply(this, arguments);
      }

      function _i() {
        _i = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
          var o,
              i,
              n,
              _args = arguments;
          return regeneratorRuntime.wrap(function _callee$(_context) {
            while (1) {
              switch (_context.prev = _context.next) {
                case 0:
                  o = _args.length > 0 && _args[0] !== undefined ? _args[0] : null;
                  i = _args.length > 1 ? _args[1] : undefined;

                  if (!_config_js__WEBPACK_IMPORTED_MODULE_0__["default"].geometryServiceUrl) {
                    _context.next = 9;
                    break;
                  }

                  0;
                  _context.next = 6;
                  return Promise.all(
                  /*! import() | tasks-GeometryService-js */
                  [__webpack_require__.e("common"), __webpack_require__.e("tasks-GeometryService-js")]).then(__webpack_require__.bind(null,
                  /*! ../../tasks/GeometryService.js */
                  "1E6V"));

                case 6:
                  _context.t0 = _context.sent["default"];
                  _context.t1 = {
                    url: _config_js__WEBPACK_IMPORTED_MODULE_0__["default"].geometryServiceUrl
                  };
                  return _context.abrupt("return", new _context.t0(_context.t1));

                case 9:
                  if (o) {
                    _context.next = 11;
                    break;
                  }

                  throw new _core_Error_js__WEBPACK_IMPORTED_MODULE_1__["default"]("internal:geometry-service-url-not-configured");

                case 11:
                  n = "portal" in o ? o.portal || _Portal_js__WEBPACK_IMPORTED_MODULE_2__["default"].getDefault() : o;
                  _context.next = 14;
                  return n.load({
                    signal: i
                  });

                case 14:
                  if (!(n.helperServices && n.helperServices.geometry && n.helperServices.geometry.url)) {
                    _context.next = 21;
                    break;
                  }

                  0;
                  _context.next = 18;
                  return Promise.all(
                  /*! import() | tasks-GeometryService-js */
                  [__webpack_require__.e("common"), __webpack_require__.e("tasks-GeometryService-js")]).then(__webpack_require__.bind(null,
                  /*! ../../tasks/GeometryService.js */
                  "1E6V"));

                case 18:
                  _context.t2 = _context.sent["default"];
                  _context.t3 = {
                    url: n.helperServices.geometry.url
                  };
                  return _context.abrupt("return", new _context.t2(_context.t3));

                case 21:
                  throw new _core_Error_js__WEBPACK_IMPORTED_MODULE_1__["default"]("internal:geometry-service-url-not-configured");

                case 22:
                case "end":
                  return _context.stop();
              }
            }
          }, _callee);
        }));
        return _i.apply(this, arguments);
      }

      function n(_x, _x2) {
        return _n.apply(this, arguments);
      }
      /***/


      function _n() {
        _n = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee2(e, t) {
          var n,
              a,
              l,
              s,
              c,
              _args2 = arguments;
          return regeneratorRuntime.wrap(function _callee2$(_context2) {
            while (1) {
              switch (_context2.prev = _context2.next) {
                case 0:
                  n = _args2.length > 2 && _args2[2] !== undefined ? _args2[2] : null;
                  a = _args2.length > 3 ? _args2[3] : undefined;
                  _context2.next = 4;
                  return i(n, a);

                case 4:
                  l = _context2.sent;
                  s = new _tasks_support_ProjectParameters_js__WEBPACK_IMPORTED_MODULE_3__["default"]();
                  s.geometries = [e], s.outSpatialReference = t;
                  _context2.next = 9;
                  return l.project(s, {
                    signal: a
                  });

                case 9:
                  c = _context2.sent;

                  if (!(c && Array.isArray(c) && 1 === c.length)) {
                    _context2.next = 12;
                    break;
                  }

                  return _context2.abrupt("return", c[0]);

                case 12:
                  throw new _core_Error_js__WEBPACK_IMPORTED_MODULE_1__["default"]("internal:geometry-service-projection-failed");

                case 13:
                case "end":
                  return _context2.stop();
              }
            }
          }, _callee2);
        }));
        return _n.apply(this, arguments);
      }
    }
  }]);
})();
//# sourceMappingURL=portal-support-geometryServiceUtils-js-es5.js.map