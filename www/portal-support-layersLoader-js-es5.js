(function () {
  function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

  function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["portal-support-layersLoader-js"], {
    /***/
    "O5Ly":
    /*!******************************************************************!*\
      !*** ./node_modules/@arcgis/core/portal/support/layersLoader.js ***!
      \******************************************************************/

    /*! exports provided: load */

    /***/
    function O5Ly(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "load", function () {
        return s;
      });
      /* harmony import */


      var _core_Error_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ../../core/Error.js */
      "zlDU");
      /* harmony import */


      var _core_promiseUtils_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ../../core/promiseUtils.js */
      "9MzC");
      /* harmony import */


      var _request_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ../../request.js */
      "Lqtk");
      /* harmony import */


      var _Portal_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ../Portal.js */
      "AiS/");
      /* harmony import */


      var _renderers_support_styleUtils_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ../../renderers/support/styleUtils.js */
      "YOx9");
      /* harmony import */


      var _jsonContext_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ./jsonContext.js */
      "Fewv");
      /* harmony import */


      var _layers_support_lazyLayerLoader_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ../../layers/support/lazyLayerLoader.js */
      "oLSx");
      /*
      All material copyright ESRI, All Rights Reserved, unless otherwise specified.
      See https://js.arcgis.com/4.18/esri/copyright.txt for details.
      */


      function s(_x, _x2) {
        return _s.apply(this, arguments);
      }

      function _s() {
        _s = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee2(n, s) {
          var u;
          return regeneratorRuntime.wrap(function _callee2$(_context2) {
            while (1) {
              switch (_context2.prev = _context2.next) {
                case 0:
                  u = n.instance.portalItem;

                  if (!(u && u.id)) {
                    _context2.next = 8;
                    break;
                  }

                  _context2.next = 4;
                  return u.load(s);

                case 4:
                  (function (t) {
                    var r = t.instance.portalItem;
                    if (-1 === t.supportedTypes.indexOf(r.type)) throw new _core_Error_js__WEBPACK_IMPORTED_MODULE_0__["default"]("portal:invalid-layer-item-type", "Invalid layer item type '${type}', expected '${expectedType}'", {
                      type: r.type,
                      expectedType: t.supportedTypes.join(", ")
                    });
                  })(n);

                  _context2.t0 = function () {
                    var _ref = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(n, s) {
                      var u, d, y, f, m, h;
                      return regeneratorRuntime.wrap(function _callee$(_context) {
                        while (1) {
                          switch (_context.prev = _context.next) {
                            case 0:
                              u = n.instance, d = u.portalItem, y = d.url, f = d.title, m = Object(_jsonContext_js__WEBPACK_IMPORTED_MODULE_5__["createForItem"])(d);

                              if (!("group" === u.type)) {
                                _context.next = 3;
                                break;
                              }

                              return _context.abrupt("return", (u.read({
                                title: f
                              }, m), function (n, l) {
                                var a;
                                var s = n.portalItem.type;

                                switch (s) {
                                  case "Feature Service":
                                    a = _layers_support_lazyLayerLoader_js__WEBPACK_IMPORTED_MODULE_6__["layerLookupMap"].FeatureLayer;
                                    break;

                                  case "Stream Service":
                                    a = _layers_support_lazyLayerLoader_js__WEBPACK_IMPORTED_MODULE_6__["layerLookupMap"].StreamLayer;
                                    break;

                                  case "Scene Service":
                                    a = _layers_support_lazyLayerLoader_js__WEBPACK_IMPORTED_MODULE_6__["layerLookupMap"].SceneLayer;
                                    break;

                                  case "Feature Collection":
                                    a = _layers_support_lazyLayerLoader_js__WEBPACK_IMPORTED_MODULE_6__["layerLookupMap"].FeatureLayer;
                                    break;

                                  default:
                                    throw new _core_Error_js__WEBPACK_IMPORTED_MODULE_0__["default"]("portal:unsupported-item-type-as-group", "The item type '".concat(s, "' is not supported as a 'GroupLayer'"));
                                }

                                var u;
                                return a().then(function (e) {
                                  return u = e, p(l);
                                }).then(function (e) {
                                  return c(e) > 0 ? i(n, u, e) : function (e, n) {
                                    if (!e.portalItem.url) return Object(_core_promiseUtils_js__WEBPACK_IMPORTED_MODULE_1__["resolve"])();
                                    var l = {
                                      responseType: "json",
                                      query: {
                                        f: "json"
                                      }
                                    };
                                    return Object(_request_js__WEBPACK_IMPORTED_MODULE_2__["default"])(e.portalItem.url, l).then(function (t) {
                                      var r, l;
                                      var a = t.data;

                                      function o(e) {
                                        return {
                                          id: e.id,
                                          name: e.name
                                        };
                                      }

                                      a && i(e, n, {
                                        layers: null == (r = a.layers) ? void 0 : r.map(o),
                                        tables: null == (l = a.tables) ? void 0 : l.map(o)
                                      });
                                    });
                                  }(n, u);
                                });
                              }(u, n)));

                            case 3:
                              y && u.read({
                                url: y
                              }, m);
                              _context.next = 6;
                              return p(n, s);

                            case 6:
                              h = _context.sent;
                              h && u.read(h, m);
                              return _context.abrupt("return", (u.resourceReferences = {
                                portalItem: d,
                                paths: m.readResourcePaths
                              }, u.read({
                                title: f
                              }, m), Object(_renderers_support_styleUtils_js__WEBPACK_IMPORTED_MODULE_4__["loadStyleRenderer"])(u, m)));

                            case 9:
                            case "end":
                              return _context.stop();
                          }
                        }
                      }, _callee);
                    }));

                    return function (_x3, _x4) {
                      return _ref.apply(this, arguments);
                    };
                  }()(n, s);

                  _context2.next = 9;
                  break;

                case 8:
                  _context2.t0 = Object(_core_promiseUtils_js__WEBPACK_IMPORTED_MODULE_1__["resolve"])();

                case 9:
                  return _context2.abrupt("return", _context2.t0);

                case 10:
                case "end":
                  return _context2.stop();
              }
            }
          }, _callee2);
        }));
        return _s.apply(this, arguments);
      }

      function i(e, t, r) {
        var n = r.layers || [];
        var l = r.tables || [];
        "Feature Collection" === e.portalItem.type && (n.forEach(function (e) {
          var t;
          "Table" === (null == e || null == (t = e.layerDefinition) ? void 0 : t.type) && l.push(e);
        }), n = n.filter(function (e) {
          var t;
          return "Table" !== (null == e || null == (t = e.layerDefinition) ? void 0 : t.type);
        })), n.reverse().forEach(function (n) {
          var l = u(e, t, r, n);
          e.add(l);
        }), l.reverse().forEach(function (n) {
          var l = u(e, t, r, n);
          e.tables.add(l);
        });
      }

      function u(e, t, r, l) {
        var a = new t({
          portalItem: e.portalItem.clone(),
          layerId: l.id,
          sublayerTitleMode: "service-name"
        });

        if ("Feature Collection" === e.portalItem.type) {
          var _t = {
            origin: "portal-item",
            portal: e.portalItem.portal || _Portal_js__WEBPACK_IMPORTED_MODULE_3__["default"].getDefault()
          };
          a.read(l, _t);
          var o = r.showLegend;
          null != o && a.read({
            showLegend: o
          }, _t);
        }

        return a;
      }

      function p(e, r) {
        if (!1 === e.supportsData) return Object(_core_promiseUtils_js__WEBPACK_IMPORTED_MODULE_1__["resolve"])();
        var n = e.instance;
        return n.portalItem.fetchData("json", r)["catch"](function () {
          return null;
        }).then(function (e) {
          var t = e;
          var r;

          if (function (e) {
            if ("stream" === e.type) return !1;
            return "layerId" in e;
          }(n)) {
            var l = !0;
            return e && c(t) > 0 && (null == n.layerId && (n.layerId = function (e) {
              var t = e.layers;
              if (t && t.length) return t[0].id;
              var r = e.tables;
              if (r && r.length) return r[0].id;
              return null;
            }(t)), r = function (e, t) {
              var r = e.layers;
              if (r) for (var _e = 0; _e < r.length; _e++) {
                if (r[_e].id === t) return r[_e];
              }
              var n = e.tables;
              if (n) for (var _e2 = 0; _e2 < n.length; _e2++) {
                if (n[_e2].id === t) return n[_e2];
              }
              return null;
            }(t, n.layerId), r && (1 === c(t) && (l = !1), null != e.showLegend && (r.showLegend = e.showLegend))), l && "service-name" !== n.sublayerTitleMode && (n.sublayerTitleMode = "item-title-and-service-name"), r;
          }

          return e;
        });
      }

      function c(e) {
        var t, r, n, l;
        return (null != (t = null == e || null == (r = e.layers) ? void 0 : r.length) ? t : 0) + (null != (n = null == e || null == (l = e.tables) ? void 0 : l.length) ? n : 0);
      }
      /***/

    },

    /***/
    "YOx9":
    /*!*******************************************************************!*\
      !*** ./node_modules/@arcgis/core/renderers/support/styleUtils.js ***!
      \*******************************************************************/

    /*! exports provided: loadStyleRenderer */

    /***/
    function YOx9(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "loadStyleRenderer", function () {
        return t;
      });
      /* harmony import */


      var _core_Warning_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ../../core/Warning.js */
      "ACjl");
      /* harmony import */


      var _core_promiseUtils_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ../../core/promiseUtils.js */
      "9MzC");
      /* harmony import */


      var _core_asyncUtils_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ../../core/asyncUtils.js */
      "eSsm");
      /*
      All material copyright ESRI, All Rights Reserved, unless otherwise specified.
      See https://js.arcgis.com/4.18/esri/copyright.txt for details.
      */


      function t(_x5, _x6, _x7) {
        return _t2.apply(this, arguments);
      }
      /***/


      function _t2() {
        _t2 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee3(t, i, n) {
          var s, _a, r;

          return regeneratorRuntime.wrap(function _callee3$(_context3) {
            while (1) {
              switch (_context3.prev = _context3.next) {
                case 0:
                  s = t && t.getAtOrigin && t.getAtOrigin("renderer", i.origin);

                  if (!(s && "unique-value" === s.type && s.styleOrigin)) {
                    _context3.next = 6;
                    break;
                  }

                  _context3.next = 4;
                  return Object(_core_asyncUtils_js__WEBPACK_IMPORTED_MODULE_2__["result"])(s.populateFromStyle());

                case 4:
                  _a = _context3.sent;

                  if (Object(_core_promiseUtils_js__WEBPACK_IMPORTED_MODULE_1__["throwIfAborted"])(n), !1 === _a.ok) {
                    r = _a.error;
                    i && i.messages && i.messages.push(new _core_Warning_js__WEBPACK_IMPORTED_MODULE_0__["default"]("renderer:style-reference", "Failed to create unique value renderer from style reference: ".concat(r.message), {
                      error: r,
                      context: i
                    })), t.clear("renderer", i.origin);
                  }

                case 6:
                case "end":
                  return _context3.stop();
              }
            }
          }, _callee3);
        }));
        return _t2.apply(this, arguments);
      }
    }
  }]);
})();
//# sourceMappingURL=portal-support-layersLoader-js-es5.js.map