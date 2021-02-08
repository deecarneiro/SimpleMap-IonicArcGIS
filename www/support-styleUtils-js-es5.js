(function () {
  function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

  function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

  function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

  function _createForOfIteratorHelper(o, allowArrayLike) { var it; if (typeof Symbol === "undefined" || o[Symbol.iterator] == null) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e2) { throw _e2; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = o[Symbol.iterator](); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e3) { didErr = true; err = _e3; }, f: function f() { try { if (!normalCompletion && it["return"] != null) it["return"](); } finally { if (didErr) throw err; } } }; }

  function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

  function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["support-styleUtils-js"], {
    /***/
    "EJFl":
    /*!***********************************************************!*\
      !*** ./node_modules/@arcgis/core/support/featureFlags.js ***!
      \***********************************************************/

    /*! exports provided: disableContextNavigation, enableWebStyleForceWOSR, hasEnableFeature */

    /***/
    function EJFl(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "disableContextNavigation", function () {
        return t;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "enableWebStyleForceWOSR", function () {
        return r;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "hasEnableFeature", function () {
        return o;
      });
      /* harmony import */


      var _core_has_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ../core/has.js */
      "wSAH");
      /*
      All material copyright ESRI, All Rights Reserved, unless otherwise specified.
      See https://js.arcgis.com/4.18/esri/copyright.txt for details.
      */


      function o(o) {
        return !!Object(_core_has_js__WEBPACK_IMPORTED_MODULE_0__["default"])("enable-feature:".concat(o));
      }

      var r = function r() {
        return o("force-wosr");
      },
          t = function t() {
        return o("disable-context-navigation");
      };
      /***/

    },

    /***/
    "NDpP":
    /*!*****************************************************************!*\
      !*** ./node_modules/@arcgis/core/symbols/support/styleUtils.js ***!
      \*****************************************************************/

    /*! exports provided: fetchStyle, fetchSymbolFromStyle, resolveWebStyleSymbol, styleNameFromItem */

    /***/
    function NDpP(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "fetchStyle", function () {
        return g;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "fetchSymbolFromStyle", function () {
        return j;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "resolveWebStyleSymbol", function () {
        return w;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "styleNameFromItem", function () {
        return N;
      });
      /* harmony import */


      var _core_Error_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ../../core/Error.js */
      "zlDU");
      /* harmony import */


      var _core_urlUtils_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ../../core/urlUtils.js */
      "4EHJ");
      /* harmony import */


      var _chunks_persistableUrlUtils_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ../../chunks/persistableUrlUtils.js */
      "/PL2");
      /* harmony import */


      var _core_promiseUtils_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ../../core/promiseUtils.js */
      "9MzC");
      /* harmony import */


      var _request_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ../../request.js */
      "Lqtk");
      /* harmony import */


      var _portal_PortalQueryParams_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ../../portal/PortalQueryParams.js */
      "6aRp");
      /* harmony import */


      var _portal_Portal_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ../../portal/Portal.js */
      "AiS/");
      /* harmony import */


      var _StyleOrigin_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! ./StyleOrigin.js */
      "tyRe");
      /* harmony import */


      var _Thumbnail_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! ./Thumbnail.js */
      "UFqC");
      /* harmony import */


      var _chunks_symbols_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! ../../chunks/symbols.js */
      "nNR5");
      /* harmony import */


      var _core_devEnvironmentUtils_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
      /*! ../../core/devEnvironmentUtils.js */
      "SbiP");
      /* harmony import */


      var _support_featureFlags_js__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
      /*! ../../support/featureFlags.js */
      "EJFl");
      /*
      All material copyright ESRI, All Rights Reserved, unless otherwise specified.
      See https://js.arcgis.com/4.18/esri/copyright.txt for details.
      */


      var d = {};

      function h(t, r, o) {
        var s = r.portal || _portal_Portal_js__WEBPACK_IMPORTED_MODULE_6__["default"].getDefault();

        var n;
        var l = "".concat(s.url, " - ").concat(s.user && s.user.username, " - ").concat(t);
        return d[l] || (d[l] = function (t, r, o) {
          return r.load(o).then(function () {
            var e = new _portal_PortalQueryParams_js__WEBPACK_IMPORTED_MODULE_5__["default"]({
              disableExtraQuery: !0,
              query: "owner:".concat($, " AND type:").concat(E, " AND typekeywords:\"").concat(t, "\"")
            });
            return r.queryItems(e, o);
          }).then(function (_ref) {
            var r = _ref.results;
            var s = null;
            var n = t.toLowerCase();

            if (r && Array.isArray(r)) {
              var _iterator = _createForOfIteratorHelper(r),
                  _step;

              try {
                for (_iterator.s(); !(_step = _iterator.n()).done;) {
                  var e = _step.value;

                  if (e.typeKeywords.some(function (e) {
                    return e.toLowerCase() === n;
                  }) && e.type === E && e.owner === $) {
                    s = e;
                    break;
                  }
                }
              } catch (err) {
                _iterator.e(err);
              } finally {
                _iterator.f();
              }
            }

            if (!s) throw new _core_Error_js__WEBPACK_IMPORTED_MODULE_0__["default"]("symbolstyleutils:style-not-found", "The style '".concat(t, "' could not be found"), {
              styleName: t
            });
            return s.load(o);
          });
        }(t, s, o).then(function (e) {
          return n = e, e.fetchData();
        }).then(function (e) {
          return {
            data: e,
            baseUrl: n.itemUrl,
            styleName: t
          };
        })), d[l];
      }

      function g(t, o, s) {
        return t.styleUrl ? function (e, t) {
          return S(e, t).then(function (t) {
            return {
              data: t.data,
              baseUrl: Object(_core_urlUtils_js__WEBPACK_IMPORTED_MODULE_1__["removeFile"])(e),
              styleUrl: e
            };
          });
        }(t.styleUrl, s) : t.styleName ? h(t.styleName, o, s) : Object(_core_promiseUtils_js__WEBPACK_IMPORTED_MODULE_3__["reject"])(new _core_Error_js__WEBPACK_IMPORTED_MODULE_0__["default"]("symbolstyleutils:style-url-and-name-missing", "Either styleUrl or styleName is required to resolve a style"));
      }

      function w(t, s, l, a) {
        return t.name ? t.styleName && "Esri2DPointSymbolsStyle" === t.styleName ? function (e, t, s) {
          var n = D.replace(/\{SymbolName\}/gi, e.name);
          return S(n, s).then(function (e) {
            var s = U(e.data);
            return Object(_chunks_symbols_js__WEBPACK_IMPORTED_MODULE_9__["f"])(s, {
              portal: t.portal,
              url: Object(_core_urlUtils_js__WEBPACK_IMPORTED_MODULE_1__["urlToObject"])(Object(_core_urlUtils_js__WEBPACK_IMPORTED_MODULE_1__["removeFile"])(n)),
              origin: "portal-item"
            });
          });
        }(t, s, a) : g(t, s, a).then(function (e) {
          return j(e, t.name, s, l, a);
        }) : Object(_core_promiseUtils_js__WEBPACK_IMPORTED_MODULE_3__["reject"])(new _core_Error_js__WEBPACK_IMPORTED_MODULE_0__["default"]("symbolstyleutils:style-symbol-reference-name-missing", "Missing name in style symbol reference"));
      }

      function j(t, l, a, i, d) {
        var h = t.data,
            g = {
          portal: a.portal,
          url: Object(_core_urlUtils_js__WEBPACK_IMPORTED_MODULE_1__["urlToObject"])(t.baseUrl),
          origin: "portal-item"
        },
            w = h.items.find(function (e) {
          return e.name === l;
        });

        if (!w) {
          return Object(_core_promiseUtils_js__WEBPACK_IMPORTED_MODULE_3__["reject"])(new _core_Error_js__WEBPACK_IMPORTED_MODULE_0__["default"]("symbolstyleutils:symbol-name-not-found", "The symbol name '".concat(l, "' could not be found"), {
            symbolName: l
          }));
        }

        var j = Object(_chunks_persistableUrlUtils_js__WEBPACK_IMPORTED_MODULE_2__["f"])(function (e, t) {
          if ("cimRef" === t) return e.cimRef;

          if (e.formatInfos && !Object(_support_featureFlags_js__WEBPACK_IMPORTED_MODULE_11__["enableWebStyleForceWOSR"])()) {
            var _iterator2 = _createForOfIteratorHelper(e.formatInfos),
                _step2;

            try {
              for (_iterator2.s(); !(_step2 = _iterator2.n()).done;) {
                var _t = _step2.value;
                if ("gltf" === _t.type) return _t.href;
              }
            } catch (err) {
              _iterator2.e(err);
            } finally {
              _iterator2.f();
            }
          }

          return e.webRef;
        }(w, i), g),
            N = w.thumbnail && w.thumbnail.href;
        var $ = w.thumbnail && w.thumbnail.imageData;
        Object(_core_devEnvironmentUtils_js__WEBPACK_IMPORTED_MODULE_10__["isDevEnvironment"])() && (j = Object(_core_devEnvironmentUtils_js__WEBPACK_IMPORTED_MODULE_10__["adjustStaticAGOUrl"])(j), N = Object(_core_devEnvironmentUtils_js__WEBPACK_IMPORTED_MODULE_10__["adjustStaticAGOUrl"])(N));
        var E = {
          portal: a.portal,
          url: Object(_core_urlUtils_js__WEBPACK_IMPORTED_MODULE_1__["urlToObject"])(Object(_core_urlUtils_js__WEBPACK_IMPORTED_MODULE_1__["removeFile"])(j)),
          origin: "portal-item"
        };
        return S(j, d).then(function (e) {
          var r = "cimRef" === i ? U(e.data) : e.data,
              o = Object(_chunks_symbols_js__WEBPACK_IMPORTED_MODULE_9__["f"])(r, E);

          if (o && Object(_chunks_symbols_js__WEBPACK_IMPORTED_MODULE_9__["i"])(o)) {
            if (N) {
              var _e = Object(_chunks_persistableUrlUtils_js__WEBPACK_IMPORTED_MODULE_2__["f"])(N, g);

              o.thumbnail = new _Thumbnail_js__WEBPACK_IMPORTED_MODULE_8__["default"]({
                url: _e
              });
            } else $ && (o.thumbnail = new _Thumbnail_js__WEBPACK_IMPORTED_MODULE_8__["default"]({
              url: "data:image/png;base64,".concat($)
            }));

            t.styleUrl ? o.styleOrigin = new _StyleOrigin_js__WEBPACK_IMPORTED_MODULE_7__["default"]({
              portal: a.portal,
              styleUrl: t.styleUrl,
              name: l
            }) : t.styleName && (o.styleOrigin = new _StyleOrigin_js__WEBPACK_IMPORTED_MODULE_7__["default"]({
              portal: a.portal,
              styleName: t.styleName,
              name: l
            }));
          }

          return o;
        });
      }

      function U(e) {
        return null === e || "CIMSymbolReference" === e.type ? e : {
          type: "CIMSymbolReference",
          symbol: e
        };
      }

      function N(e) {
        var _iterator3 = _createForOfIteratorHelper(e.typeKeywords),
            _step3;

        try {
          for (_iterator3.s(); !(_step3 = _iterator3.n()).done;) {
            var t = _step3.value;
            if (/^Esri.*Style$/.test(t) && "Esri Style" !== t) return t;
          }
        } catch (err) {
          _iterator3.e(err);
        } finally {
          _iterator3.f();
        }
      }

      function S(e, r) {
        var o = _objectSpread({
          responseType: "json",
          query: {
            f: "json"
          }
        }, r);

        return Object(_request_js__WEBPACK_IMPORTED_MODULE_4__["default"])(Object(_core_urlUtils_js__WEBPACK_IMPORTED_MODULE_1__["normalize"])(e), o);
      }

      var $ = "esri_en",
          E = "Style",
          D = "https://cdn.arcgis.com/sharing/rest/content/items/220936cc6ed342c9937abd8f180e7d1e/resources/styles/cim/{SymbolName}.json?f=json";
      /***/
    },

    /***/
    "SbiP":
    /*!***************************************************************!*\
      !*** ./node_modules/@arcgis/core/core/devEnvironmentUtils.js ***!
      \***************************************************************/

    /*! exports provided: adjustStaticAGOUrl, isDevEnvironment, isTelemetryDevEnvironment */

    /***/
    function SbiP(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "adjustStaticAGOUrl", function () {
        return t;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "isDevEnvironment", function () {
        return a;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "isTelemetryDevEnvironment", function () {
        return o;
      });
      /* harmony import */


      var _global_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ./global.js */
      "3r0u");
      /*
      All material copyright ESRI, All Rights Reserved, unless otherwise specified.
      See https://js.arcgis.com/4.18/esri/copyright.txt for details.
      */


      function a(a) {
        return a = a || _global_js__WEBPACK_IMPORTED_MODULE_0__["default"].location.hostname, e.some(function (c) {
          var t;
          return null != (null == (t = a) ? void 0 : t.match(c));
        });
      }

      function t(a, t) {
        return a && (t = t || _global_js__WEBPACK_IMPORTED_MODULE_0__["default"].location.hostname) ? null != t.match(r) || null != t.match(m) ? a.replace("static.arcgis.com", "staticdev.arcgis.com") : null != t.match(n) || null != t.match(s) ? a.replace("static.arcgis.com", "staticqa.arcgis.com") : a : a;
      }

      function o(a) {
        a = a || _global_js__WEBPACK_IMPORTED_MODULE_0__["default"].location.hostname;
        return [/^zrh-.+?\.esri\.com$/].concat(e).some(function (c) {
          var t;
          return null != (null == (t = a) ? void 0 : t.match(c));
        });
      }

      var r = /^devext.arcgis.com$/,
          n = /^qaext.arcgis.com$/,
          m = /^[\w-]*\.mapsdevext.arcgis.com$/,
          s = /^[\w-]*\.mapsqa.arcgis.com$/,
          e = [/^([\w-]*\.)?[\w-]*\.zrh-dev-local.esri.com$/, r, n, /^jsapps.esri.com$/, m, s];
      /***/
    }
  }]);
})();
//# sourceMappingURL=support-styleUtils-js-es5.js.map