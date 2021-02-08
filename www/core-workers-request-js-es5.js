(function () {
  function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

  function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

  function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["core-workers-request-js"], {
    /***/
    "ZsKd":
    /*!***********************************************************!*\
      !*** ./node_modules/@arcgis/core/core/workers/request.js ***!
      \***********************************************************/

    /*! exports provided: execute */

    /***/
    function ZsKd(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "execute", function () {
        return s;
      });
      /* harmony import */


      var _global_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ../global.js */
      "3r0u");
      /* harmony import */


      var _Error_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ../Error.js */
      "zlDU");
      /*
      All material copyright ESRI, All Rights Reserved, unless otherwise specified.
      See https://js.arcgis.com/4.18/esri/copyright.txt for details.
      */


      var t;

      function s(s) {
        var o = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
        var n = o.responseType;
        n ? "json" !== n && "text" !== n && "blob" !== n && "array-buffer" !== n && (n = "text") : n = "json";
        var a = o && o.signal;
        return delete o.signal, _global_js__WEBPACK_IMPORTED_MODULE_0__["default"].invokeStaticMessage("request", {
          url: s,
          options: o
        }, {
          signal: a
        }).then(function (e) {
          var a = e.data;
          var l, i, u, c;

          if (a && !("json" !== n && "text" !== n && "blob" !== n || (l = new Blob([a]), "json" !== n && "text" !== n || (t || (t = new FileReaderSync()), i = t.readAsText(l), "json" !== n)))) {
            try {
              u = JSON.parse(i || null);
            } catch (e) {
              var _t = _objectSpread(_objectSpread({}, e), {}, {
                url: s,
                requestOptions: o
              });

              throw new _Error_js__WEBPACK_IMPORTED_MODULE_1__["default"]("request:server", e.message, _t);
            }

            if (u.error) {
              var _e = _objectSpread(_objectSpread({}, u.error), {}, {
                url: s,
                requestOptions: o
              });

              throw new _Error_js__WEBPACK_IMPORTED_MODULE_1__["default"]("request:server", u.error.message, _e);
            }
          }

          switch (n) {
            case "json":
              c = u;
              break;

            case "text":
              c = i;
              break;

            case "blob":
              c = l;
              break;

            default:
              c = a;
          }

          return {
            data: c,
            requestOptions: o,
            ssl: e.ssl,
            url: s
          };
        });
      }
      /***/

    }
  }]);
})();
//# sourceMappingURL=core-workers-request-js-es5.js.map