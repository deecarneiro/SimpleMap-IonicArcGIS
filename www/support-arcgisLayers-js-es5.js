(function () {
  function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

  function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

  function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

  function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

  function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["support-arcgisLayers-js"], {
    /***/
    "TPT3":
    /*!******************************************************************!*\
      !*** ./node_modules/@arcgis/core/layers/support/arcgisLayers.js ***!
      \******************************************************************/

    /*! exports provided: fromUrl */

    /***/
    function TPT3(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "fromUrl", function () {
        return s;
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


      var _request_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ../../request.js */
      "Lqtk");
      /* harmony import */


      var _arcgisLayerUrl_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./arcgisLayerUrl.js */
      "VLTf");
      /* harmony import */


      var _lazyLayerLoader_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ./lazyLayerLoader.js */
      "oLSx");
      /*
      All material copyright ESRI, All Rights Reserved, unless otherwise specified.
      See https://js.arcgis.com/4.18/esri/copyright.txt for details.
      */


      function s(_x) {
        return _s.apply(this, arguments);
      }

      function _s() {
        _s = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee6(t) {
          var s, y, c;
          return regeneratorRuntime.wrap(function _callee6$(_context6) {
            while (1) {
              switch (_context6.prev = _context6.next) {
                case 0:
                  _context6.next = 2;
                  return function () {
                    var _ref = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee5(r) {
                      var t, s, o, y, c, d, f, I, b, e, p, v;
                      return regeneratorRuntime.wrap(function _callee5$(_context5) {
                        while (1) {
                          switch (_context5.prev = _context5.next) {
                            case 0:
                              t = Object(_arcgisLayerUrl_js__WEBPACK_IMPORTED_MODULE_3__["parse"])(r);

                              if (!Object(_core_maybe_js__WEBPACK_IMPORTED_MODULE_0__["isNone"])(t)) {
                                _context5.next = 3;
                                break;
                              }

                              throw new _core_Error_js__WEBPACK_IMPORTED_MODULE_1__["default"]("arcgis-layers:url-mismatch", "The url '${url}' is not a valid arcgis resource", {
                                url: r
                              });

                            case 3:
                              s = t.serverType, o = t.sublayer;
                              c = {
                                FeatureServer: "FeatureLayer",
                                StreamServer: "StreamLayer",
                                VectorTileServer: "VectorTileLayer"
                              };
                              _context5.t0 = s;
                              _context5.next = _context5.t0 === "MapServer" ? 8 : _context5.t0 === "ImageServer" ? 10 : _context5.t0 === "SceneServer" ? 12 : 14;
                              break;

                            case 8:
                              y = null != o ? "FeatureLayer" : function () {
                                var _ref2 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(e) {
                                  return regeneratorRuntime.wrap(function _callee$(_context) {
                                    while (1) {
                                      switch (_context.prev = _context.next) {
                                        case 0:
                                          _context.next = 2;
                                          return i(e);

                                        case 2:
                                          return _context.abrupt("return", _context.sent.tileInfo);

                                        case 3:
                                        case "end":
                                          return _context.stop();
                                      }
                                    }
                                  }, _callee);
                                }));

                                return function (_x4) {
                                  return _ref2.apply(this, arguments);
                                };
                              }()(r).then(function (e) {
                                return e ? "TileLayer" : "MapImageLayer";
                              });
                              return _context5.abrupt("break", 15);

                            case 10:
                              y = i(r).then(function (e) {
                                var r = e.tileInfo && e.tileInfo.format;
                                return e.tileInfo ? !r || "LERC" !== r.toUpperCase() || e.cacheType && "elevation" !== e.cacheType.toLowerCase() ? "ImageryTileLayer" : "ElevationLayer" : "ImageryLayer";
                              });
                              return _context5.abrupt("break", 15);

                            case 12:
                              y = i(t.url.path).then(function (e) {
                                var r = {
                                  Point: "SceneLayer",
                                  "3DObject": "SceneLayer",
                                  IntegratedMesh: "IntegratedMeshLayer",
                                  PointCloud: "PointCloudLayer",
                                  Building: "BuildingSceneLayer"
                                };

                                if (e && Array.isArray(e.layers) && e.layers.length > 0) {
                                  var a = e.layers[0].layerType;
                                  if (null != r[a]) return r[a];
                                }

                                return "SceneLayer";
                              });
                              return _context5.abrupt("break", 15);

                            case 14:
                              y = c[s];

                            case 15:
                              d = {
                                FeatureLayer: !0,
                                SceneLayer: !0
                              };
                              f = "FeatureServer" === s;
                              I = {
                                parsedUrl: t,
                                Constructor: null,
                                layerOrTableId: f ? o : null,
                                sublayerIds: null,
                                tableIds: null
                              };
                              _context5.next = 20;
                              return y;

                            case 20:
                              b = _context5.sent;

                              if (!(d[b] && null == o)) {
                                _context5.next = 27;
                                break;
                              }

                              _context5.next = 24;
                              return function () {
                                var _ref3 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee3(e, r) {
                                  var a, t, l, n, _r, s, o;

                                  return regeneratorRuntime.wrap(function _callee3$(_context3) {
                                    while (1) {
                                      switch (_context3.prev = _context3.next) {
                                        case 0:
                                          n = !1;

                                          if (!("FeatureServer" === r)) {
                                            _context3.next = 8;
                                            break;
                                          }

                                          _context3.next = 4;
                                          return function () {
                                            var _ref4 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee2(e) {
                                              var r, a, t, l, n;
                                              return regeneratorRuntime.wrap(function _callee2$(_context2) {
                                                while (1) {
                                                  switch (_context2.prev = _context2.next) {
                                                    case 0:
                                                      _context2.next = 2;
                                                      return i(e);

                                                    case 2:
                                                      t = _context2.sent;
                                                      t = t || {}, t.layers = (null == (r = t.layers) ? void 0 : r.filter(u)) || [];
                                                      l = {
                                                        serviceJSON: t
                                                      };

                                                      if (!(t.currentVersion < 10.5)) {
                                                        _context2.next = 7;
                                                        break;
                                                      }

                                                      return _context2.abrupt("return", l);

                                                    case 7:
                                                      _context2.next = 9;
                                                      return i(e + "/layers");

                                                    case 9:
                                                      n = _context2.sent;
                                                      return _context2.abrupt("return", (l.layersJSON = {
                                                        layers: (null == n || null == (a = n.layers) ? void 0 : a.filter(u)) || [],
                                                        tables: (null == n ? void 0 : n.tables) || []
                                                      }, l));

                                                    case 11:
                                                    case "end":
                                                      return _context2.stop();
                                                  }
                                                }
                                              }, _callee2);
                                            }));

                                            return function (_x7) {
                                              return _ref4.apply(this, arguments);
                                            };
                                          }()(e);

                                        case 4:
                                          _r = _context3.sent;
                                          n = !!_r.layersJSON, l = _r.layersJSON || _r.serviceJSON;
                                          _context3.next = 11;
                                          break;

                                        case 8:
                                          _context3.next = 10;
                                          return i(e);

                                        case 10:
                                          l = _context3.sent;

                                        case 11:
                                          s = null == (a = l) ? void 0 : a.layers, o = null == (t = l) ? void 0 : t.tables;
                                          return _context3.abrupt("return", {
                                            layerIds: (null == s ? void 0 : s.map(function (e) {
                                              return e.id;
                                            }).reverse()) || [],
                                            tableIds: (null == o ? void 0 : o.map(function (e) {
                                              return e.id;
                                            }).reverse()) || [],
                                            layerInfos: n ? s : [],
                                            tableInfos: n ? o : []
                                          });

                                        case 13:
                                        case "end":
                                          return _context3.stop();
                                      }
                                    }
                                  }, _callee3);
                                }));

                                return function (_x5, _x6) {
                                  return _ref3.apply(this, arguments);
                                };
                              }()(r, s);

                            case 24:
                              e = _context5.sent;
                              f && (I.sublayerInfos = e.layerInfos, I.tableInfos = e.tableInfos);
                              if (1 !== e.layerIds.length + e.tableIds.length) I.sublayerIds = e.layerIds, I.tableIds = e.tableIds;else if (f) {
                                I.layerOrTableId = null != (p = e.layerIds[0]) ? p : e.tableIds[0], I.sourceJSON = null != (v = e.layerInfos[0]) ? v : e.tableInfos[0];
                              }

                            case 27:
                              _context5.next = 29;
                              return function () {
                                var _ref5 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee4(e) {
                                  return regeneratorRuntime.wrap(function _callee4$(_context4) {
                                    while (1) {
                                      switch (_context4.prev = _context4.next) {
                                        case 0:
                                          return _context4.abrupt("return", (0, _lazyLayerLoader_js__WEBPACK_IMPORTED_MODULE_4__["layerLookupMap"][e])());

                                        case 1:
                                        case "end":
                                          return _context4.stop();
                                      }
                                    }
                                  }, _callee4);
                                }));

                                return function (_x8) {
                                  return _ref5.apply(this, arguments);
                                };
                              }()(b);

                            case 29:
                              I.Constructor = _context5.sent;
                              return _context5.abrupt("return", I);

                            case 31:
                            case "end":
                              return _context5.stop();
                          }
                        }
                      }, _callee5);
                    }));

                    return function (_x3) {
                      return _ref.apply(this, arguments);
                    };
                  }()(t.url);

                case 2:
                  s = _context6.sent;
                  y = _objectSpread(_objectSpread({}, t.properties), {}, {
                    url: t.url
                  });

                  if (s.sublayerIds) {
                    _context6.next = 6;
                    break;
                  }

                  return _context6.abrupt("return", (null != s.layerOrTableId && (y.layerId = s.layerOrTableId, y.sourceJSON = s.sourceJSON), new s.Constructor(y)));

                case 6:
                  0;
                  _context6.next = 9;
                  return Promise.all(
                  /*! import() | GroupLayer-js */
                  [__webpack_require__.e("default~BingMapsLayer-js~BuildingSceneLayer-js~CSVLayer-js~ElevationLayer-js~FeatureLayer-js~GeoRSSL~17f7a7e8"), __webpack_require__.e("GroupLayer-js")]).then(__webpack_require__.bind(null,
                  /*! ../GroupLayer.js */
                  "VPx4"));

                case 9:
                  _context6.t0 = _context6.sent["default"];
                  _context6.t1 = {
                    title: s.parsedUrl.title
                  };
                  c = new _context6.t0(_context6.t1);
                  return _context6.abrupt("return", (function (e, a, t) {
                    function l(e, l) {
                      var n = _objectSpread(_objectSpread({}, t), {}, {
                        layerId: e,
                        sublayerTitleMode: "service-name"
                      });

                      return Object(_core_maybe_js__WEBPACK_IMPORTED_MODULE_0__["isSome"])(l) && (n.sourceJSON = l), new a.Constructor(n);
                    }

                    a.sublayerIds.forEach(function (r) {
                      var t = l(r, o(a.sublayerInfos, r));
                      e.add(t);
                    }), a.tableIds.forEach(function (r) {
                      var t = l(r, o(a.tableInfos, r));
                      e.tables.add(t);
                    });
                  }(c, s, y), c));

                case 13:
                case "end":
                  return _context6.stop();
              }
            }
          }, _callee6);
        }));
        return _s.apply(this, arguments);
      }

      function o(e, r) {
        return e ? e.find(function (e) {
          return e.id === r;
        }) : null;
      }

      function u(e) {
        return !e.type || "Feature Layer" === e.type;
      }

      function i(_x2) {
        return _i.apply(this, arguments);
      }
      /***/


      function _i() {
        _i = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee7(e) {
          return regeneratorRuntime.wrap(function _callee7$(_context7) {
            while (1) {
              switch (_context7.prev = _context7.next) {
                case 0:
                  _context7.next = 2;
                  return Object(_request_js__WEBPACK_IMPORTED_MODULE_2__["default"])(e, {
                    responseType: "json",
                    query: {
                      f: "json"
                    }
                  });

                case 2:
                  return _context7.abrupt("return", _context7.sent.data);

                case 3:
                case "end":
                  return _context7.stop();
              }
            }
          }, _callee7);
        }));
        return _i.apply(this, arguments);
      }
    }
  }]);
})();
//# sourceMappingURL=support-arcgisLayers-js-es5.js.map