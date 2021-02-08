(function () {
  function _createForOfIteratorHelper(o, allowArrayLike) { var it; if (typeof Symbol === "undefined" || o[Symbol.iterator] == null) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e2) { throw _e2; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = o[Symbol.iterator](); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e3) { didErr = true; err = _e3; }, f: function f() { try { if (!normalCompletion && it["return"] != null) it["return"](); } finally { if (didErr) throw err; } } }; }

  function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

  function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

  function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

  function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["layers-support-layersCreator-js"], {
    /***/
    "5Q/x":
    /*!*******************************************************************!*\
      !*** ./node_modules/@arcgis/core/layers/support/layersCreator.js ***!
      \*******************************************************************/

    /*! exports provided: populateOperationalLayers */

    /***/
    function QX(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "populateOperationalLayers", function () {
        return n;
      });
      /* harmony import */


      var _core_has_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ../../core/has.js */
      "wSAH");
      /* harmony import */


      var _core_promiseUtils_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ../../core/promiseUtils.js */
      "9MzC");
      /* harmony import */


      var _core_Collection_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ../../core/Collection.js */
      "LE9a");
      /* harmony import */


      var _portal_PortalItem_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ../../portal/PortalItem.js */
      "p+Gi");
      /* harmony import */


      var _renderers_support_styleUtils_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ../../renderers/support/styleUtils.js */
      "YOx9");
      /* harmony import */


      var _lazyLayerLoader_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ./lazyLayerLoader.js */
      "oLSx");
      /* harmony import */


      var _portal_support_featureCollectionUtils_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ../../portal/support/featureCollectionUtils.js */
      "IEjF");
      /* harmony import */


      var _portal_support_portalLayers_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! ../../portal/support/portalLayers.js */
      "XJLX");
      /*
      All material copyright ESRI, All Rights Reserved, unless otherwise specified.
      See https://js.arcgis.com/4.18/esri/copyright.txt for details.
      */


      function n(_x, _x2, _x3) {
        return _n.apply(this, arguments);
      }

      function _n() {
        _n = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(r, a, t) {
          var y, _iterator, _step, e, _r, i, _iterator2, _step2, _e;

          return regeneratorRuntime.wrap(function _callee$(_context) {
            while (1) {
              switch (_context.prev = _context.next) {
                case 0:
                  if (a) {
                    _context.next = 2;
                    break;
                  }

                  return _context.abrupt("return");

                case 2:
                  y = [];
                  _iterator = _createForOfIteratorHelper(a);

                  try {
                    for (_iterator.s(); !(_step = _iterator.n()).done;) {
                      e = _step.value;
                      _r = I(e, t);
                      "GroupLayer" === e.layerType ? y.push(m(_r, e, t)) : y.push(_r);
                    }
                  } catch (err) {
                    _iterator.e(err);
                  } finally {
                    _iterator.f();
                  }

                  _context.next = 7;
                  return Object(_core_promiseUtils_js__WEBPACK_IMPORTED_MODULE_1__["eachAlways"])(y);

                case 7:
                  i = _context.sent;
                  _iterator2 = _createForOfIteratorHelper(i);

                  try {
                    for (_iterator2.s(); !(_step2 = _iterator2.n()).done;) {
                      _e = _step2.value;
                      !_e.value || t.filter && !t.filter(_e.value) || r.add(_e.value);
                    }
                  } catch (err) {
                    _iterator2.e(err);
                  } finally {
                    _iterator2.f();
                  }

                case 10:
                case "end":
                  return _context.stop();
              }
            }
          }, _callee);
        }));
        return _n.apply(this, arguments);
      }

      var l = {
        ArcGISFeatureLayer: "FeatureLayer",
        ArcGISImageServiceLayer: "ImageryLayer",
        ArcGISMapServiceLayer: "MapImageLayer",
        PointCloudLayer: "PointCloudLayer",
        ArcGISSceneServiceLayer: "SceneLayer",
        IntegratedMeshLayer: "IntegratedMeshLayer",
        BuildingSceneLayer: "BuildingSceneLayer",
        ArcGISTiledElevationServiceLayer: "ElevationLayer",
        ArcGISTiledImageServiceLayer: "ImageryTileLayer",
        ArcGISTiledMapServiceLayer: "TileLayer",
        GroupLayer: "GroupLayer",
        WebTiledLayer: "WebTileLayer",
        CSV: "CSVLayer",
        VectorTileLayer: "VectorTileLayer",
        WMS: "WMSLayer",
        DefaultTileLayer: "TileLayer",
        KML: "KMLLayer",
        RasterDataLayer: "UnsupportedLayer"
      },
          c = {
        ArcGISTiledElevationServiceLayer: "ElevationLayer",
        DefaultTileLayer: "ElevationLayer",
        RasterDataElevationLayer: "UnsupportedLayer"
      },
          s = {
        ArcGISTiledMapServiceLayer: "TileLayer",
        ArcGISTiledImageServiceLayer: "ImageryTileLayer",
        OpenStreetMap: "OpenStreetMapLayer",
        WebTiledLayer: "WebTileLayer",
        VectorTileLayer: "VectorTileLayer",
        ArcGISImageServiceLayer: "UnsupportedLayer",
        WMS: "UnsupportedLayer",
        ArcGISMapServiceLayer: "UnsupportedLayer",
        DefaultTileLayer: "TileLayer"
      },
          p = {
        ArcGISFeatureLayer: "FeatureLayer",
        ArcGISImageServiceLayer: "ImageryLayer",
        ArcGISImageServiceVectorLayer: "ImageryLayer",
        ArcGISMapServiceLayer: "MapImageLayer",
        ArcGISStreamLayer: "StreamLayer",
        ArcGISTiledImageServiceLayer: "ImageryTileLayer",
        ArcGISTiledMapServiceLayer: "TileLayer",
        VectorTileLayer: "VectorTileLayer",
        GroupLayer: "GroupLayer",
        WebTiledLayer: "WebTileLayer",
        CSV: "CSVLayer",
        GeoRSS: "GeoRSSLayer",
        KML: "KMLLayer",
        WFS: "UnsupportedLayer",
        SubtypeGroupLayer: "UnsupportedLayer",
        WMS: "WMSLayer",
        BingMapsAerial: "BingMapsLayer",
        BingMapsRoad: "BingMapsLayer",
        BingMapsHybrid: "BingMapsLayer",
        DefaultTileLayer: "TileLayer"
      },
          S = {
        ArcGISFeatureLayer: "FeatureLayer"
      },
          u = {
        ArcGISImageServiceLayer: "ImageryLayer",
        ArcGISImageServiceVectorLayer: "ImageryLayer",
        ArcGISMapServiceLayer: "MapImageLayer",
        ArcGISTiledImageServiceLayer: "ImageryTileLayer",
        ArcGISTiledMapServiceLayer: "TileLayer",
        OpenStreetMap: "OpenStreetMapLayer",
        VectorTileLayer: "VectorTileLayer",
        WebTiledLayer: "WebTileLayer",
        BingMapsAerial: "BingMapsLayer",
        BingMapsRoad: "BingMapsLayer",
        BingMapsHybrid: "BingMapsLayer",
        WMS: "WMSLayer",
        DefaultTileLayer: "TileLayer"
      };

      function I(_x4, _x5) {
        return _I.apply(this, arguments);
      }

      function _I() {
        _I = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee5(e, r) {
          return regeneratorRuntime.wrap(function _callee5$(_context5) {
            while (1) {
              switch (_context5.prev = _context5.next) {
                case 0:
                  _context5.t0 = function () {
                    var _ref = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee3(e, r, a) {
                      var i;
                      return regeneratorRuntime.wrap(function _callee3$(_context3) {
                        while (1) {
                          switch (_context3.prev = _context3.next) {
                            case 0:
                              i = new e();
                              i.read(r, a.context);
                              _context3.t0 = "group" === i.type && d(r);

                              if (!_context3.t0) {
                                _context3.next = 6;
                                break;
                              }

                              _context3.next = 6;
                              return function () {
                                var _ref2 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee2(e, r, a) {
                                  var t, i, L, o, n;
                                  return regeneratorRuntime.wrap(function _callee2$(_context2) {
                                    while (1) {
                                      switch (_context2.prev = _context2.next) {
                                        case 0:
                                          t = _lazyLayerLoader_js__WEBPACK_IMPORTED_MODULE_5__["layerLookupMap"].FeatureLayer;
                                          _context2.next = 3;
                                          return t();

                                        case 3:
                                          i = _context2.sent;
                                          L = r.featureCollection;
                                          o = L.showLegend;
                                          n = L.layers.map(function (e) {
                                            var r = new i();
                                            return r.read(e, a), null != o && r.read({
                                              showLegend: o
                                            }, a), r;
                                          });
                                          e.layers.addMany(n);

                                        case 8:
                                        case "end":
                                          return _context2.stop();
                                      }
                                    }
                                  }, _callee2);
                                }));

                                return function (_x12, _x13, _x14) {
                                  return _ref2.apply(this, arguments);
                                };
                              }()(i, r, a.context);

                            case 6:
                              _context3.next = 8;
                              return Object(_renderers_support_styleUtils_js__WEBPACK_IMPORTED_MODULE_4__["loadStyleRenderer"])(i, a.context);

                            case 8:
                              return _context3.abrupt("return", i);

                            case 9:
                            case "end":
                              return _context3.stop();
                          }
                        }
                      }, _callee3);
                    }));

                    return function (_x9, _x10, _x11) {
                      return _ref.apply(this, arguments);
                    };
                  }();

                  _context5.next = 3;
                  return function () {
                    var _ref3 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee4(e, r) {
                      var t, n, I, m, g, f, _r2, _t;

                      return regeneratorRuntime.wrap(function _callee4$(_context4) {
                        while (1) {
                          switch (_context4.prev = _context4.next) {
                            case 0:
                              t = r.context, n = function (e) {
                                var r;

                                switch (e.origin) {
                                  case "web-scene":
                                    switch (e.layerContainerType) {
                                      case "basemap":
                                        r = s;
                                        break;

                                      case "ground":
                                        r = c;
                                        break;

                                      default:
                                        r = l;
                                    }

                                    break;

                                  default:
                                    switch (e.layerContainerType) {
                                      case "basemap":
                                        r = u;
                                        break;

                                      case "tables":
                                        r = S;
                                        break;

                                      default:
                                        r = p;
                                    }

                                }

                                return r;
                              }(t);
                              I = e.layerType || e.type;
                              !I && r && r.defaultLayerType && (I = r.defaultLayerType);
                              m = n[I];
                              g = m ? _lazyLayerLoader_js__WEBPACK_IMPORTED_MODULE_5__["layerLookupMap"][m] : _lazyLayerLoader_js__WEBPACK_IMPORTED_MODULE_5__["layerLookupMap"].UnknownLayer;
                              f = t && t.portal;

                              if (!T(e)) {
                                _context4.next = 20;
                                break;
                              }

                              if (!e.itemId) {
                                _context4.next = 18;
                                break;
                              }

                              _r2 = new _portal_PortalItem_js__WEBPACK_IMPORTED_MODULE_3__["default"]({
                                id: e.itemId,
                                portal: f
                              });
                              _context4.next = 11;
                              return _r2.load();

                            case 11:
                              _context4.next = 13;
                              return Object(_portal_support_portalLayers_js__WEBPACK_IMPORTED_MODULE_7__["selectLayerClassPath"])(_r2);

                            case 13:
                              _context4.t0 = _context4.sent.className;

                              if (_context4.t0) {
                                _context4.next = 16;
                                break;
                              }

                              _context4.t0 = "UnknownLayer";

                            case 16:
                              _t = _context4.t0;
                              g = _lazyLayerLoader_js__WEBPACK_IMPORTED_MODULE_5__["layerLookupMap"][_t];

                            case 18:
                              _context4.next = 35;
                              break;

                            case 20:
                              _context4.t1 = "ArcGISFeatureLayer" === I;

                              if (!_context4.t1) {
                                _context4.next = 35;
                                break;
                              }

                              _context4.next = 24;
                              return Object(_portal_support_featureCollectionUtils_js__WEBPACK_IMPORTED_MODULE_6__["isMapNotesLayer"])(e, f);

                            case 24:
                              if (!_context4.sent) {
                                _context4.next = 28;
                                break;
                              }

                              g = _lazyLayerLoader_js__WEBPACK_IMPORTED_MODULE_5__["layerLookupMap"].MapNotesLayer;
                              _context4.next = 35;
                              break;

                            case 28:
                              _context4.next = 30;
                              return Object(_portal_support_featureCollectionUtils_js__WEBPACK_IMPORTED_MODULE_6__["isRouteLayer"])(e, f);

                            case 30:
                              if (!_context4.sent) {
                                _context4.next = 34;
                                break;
                              }

                              g = _lazyLayerLoader_js__WEBPACK_IMPORTED_MODULE_5__["layerLookupMap"].RouteLayer;
                              _context4.next = 35;
                              break;

                            case 34:
                              d(e) && (g = _lazyLayerLoader_js__WEBPACK_IMPORTED_MODULE_5__["layerLookupMap"].GroupLayer);

                            case 35:
                              e.wmtsInfo && e.wmtsInfo.url && e.wmtsInfo.layerIdentifier && (g = _lazyLayerLoader_js__WEBPACK_IMPORTED_MODULE_5__["layerLookupMap"].WMTSLayer);
                              return _context4.abrupt("return", g());

                            case 37:
                            case "end":
                              return _context4.stop();
                          }
                        }
                      }, _callee4);
                    }));

                    return function (_x15, _x16) {
                      return _ref3.apply(this, arguments);
                    };
                  }()(e, r);

                case 3:
                  _context5.t1 = _context5.sent;
                  _context5.t2 = e;
                  _context5.t3 = r;
                  return _context5.abrupt("return", (0, _context5.t0)(_context5.t1, _context5.t2, _context5.t3));

                case 7:
                case "end":
                  return _context5.stop();
              }
            }
          }, _callee5);
        }));
        return _I.apply(this, arguments);
      }

      function d(e) {
        if ("ArcGISFeatureLayer" !== e.layerType || T(e)) return !1;
        var r = e.featureCollection;
        return !!(r && r.layers && r.layers.length > 1);
      }

      function T(e) {
        return "Feature Collection" === e.type;
      }

      function m(_x6, _x7, _x8) {
        return _m.apply(this, arguments);
      }
      /***/


      function _m() {
        _m = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee6(e, a, t) {
          var y, i, L;
          return regeneratorRuntime.wrap(function _callee6$(_context6) {
            while (1) {
              switch (_context6.prev = _context6.next) {
                case 0:
                  y = new _core_Collection_js__WEBPACK_IMPORTED_MODULE_2__["default"]();
                  i = n(y, Array.isArray(a.layers) ? a.layers : [], t);
                  _context6.next = 4;
                  return e;

                case 4:
                  L = _context6.sent;
                  _context6.next = 7;
                  return i;

                case 7:
                  if (!("group" === L.type)) {
                    _context6.next = 9;
                    break;
                  }

                  return _context6.abrupt("return", (L.layers.addMany(y), L));

                case 9:
                case "end":
                  return _context6.stop();
              }
            }
          }, _callee6);
        }));
        return _m.apply(this, arguments);
      }
    },

    /***/
    "IEjF":
    /*!****************************************************************************!*\
      !*** ./node_modules/@arcgis/core/portal/support/featureCollectionUtils.js ***!
      \****************************************************************************/

    /*! exports provided: isMapNotesLayer, isRouteLayer */

    /***/
    function IEjF(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "isMapNotesLayer", function () {
        return r;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "isRouteLayer", function () {
        return o;
      });
      /* harmony import */


      var _PortalItem_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ../PortalItem.js */
      "p+Gi");
      /* harmony import */


      var _portalItemUtils_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./portalItemUtils.js */
      "Dfpg");
      /*
      All material copyright ESRI, All Rights Reserved, unless otherwise specified.
      See https://js.arcgis.com/4.18/esri/copyright.txt for details.
      */


      function r(e, t) {
        return n(e, t, "notes", "Map Notes");
      }

      function o(e, t) {
        return n(e, t, "route", "Route Layer");
      }

      function n(_x17, _x18, _x19, _x20) {
        return _n2.apply(this, arguments);
      }
      /***/


      function _n2() {
        _n2 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee7(r, o, n, i) {
          var _n3;

          return regeneratorRuntime.wrap(function _callee7$(_context7) {
            while (1) {
              switch (_context7.prev = _context7.next) {
                case 0:
                  if (!(!r.layerType || "ArcGISFeatureLayer" !== r.layerType)) {
                    _context7.next = 2;
                    break;
                  }

                  return _context7.abrupt("return", !1);

                case 2:
                  if (!r.url) {
                    _context7.next = 4;
                    break;
                  }

                  return _context7.abrupt("return", !1);

                case 4:
                  if (!(r.featureCollectionType && r.featureCollectionType === n)) {
                    _context7.next = 6;
                    break;
                  }

                  return _context7.abrupt("return", !0);

                case 6:
                  if (!r.itemId) {
                    _context7.next = 11;
                    break;
                  }

                  _n3 = new _PortalItem_js__WEBPACK_IMPORTED_MODULE_0__["default"]({
                    id: r.itemId,
                    portal: o
                  });
                  _context7.next = 10;
                  return _n3.load();

                case 10:
                  return _context7.abrupt("return", "Feature Collection" === _n3.type && Object(_portalItemUtils_js__WEBPACK_IMPORTED_MODULE_1__["hasTypeKeyword"])(_n3, i));

                case 11:
                  return _context7.abrupt("return", !1);

                case 12:
                case "end":
                  return _context7.stop();
              }
            }
          }, _callee7);
        }));
        return _n2.apply(this, arguments);
      }
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


      function t(_x21, _x22, _x23) {
        return _t2.apply(this, arguments);
      }
      /***/


      function _t2() {
        _t2 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee8(t, i, n) {
          var s, a, r;
          return regeneratorRuntime.wrap(function _callee8$(_context8) {
            while (1) {
              switch (_context8.prev = _context8.next) {
                case 0:
                  s = t && t.getAtOrigin && t.getAtOrigin("renderer", i.origin);

                  if (!(s && "unique-value" === s.type && s.styleOrigin)) {
                    _context8.next = 6;
                    break;
                  }

                  _context8.next = 4;
                  return Object(_core_asyncUtils_js__WEBPACK_IMPORTED_MODULE_2__["result"])(s.populateFromStyle());

                case 4:
                  a = _context8.sent;

                  if (Object(_core_promiseUtils_js__WEBPACK_IMPORTED_MODULE_1__["throwIfAborted"])(n), !1 === a.ok) {
                    r = a.error;
                    i && i.messages && i.messages.push(new _core_Warning_js__WEBPACK_IMPORTED_MODULE_0__["default"]("renderer:style-reference", "Failed to create unique value renderer from style reference: ".concat(r.message), {
                      error: r,
                      context: i
                    })), t.clear("renderer", i.origin);
                  }

                case 6:
                case "end":
                  return _context8.stop();
              }
            }
          }, _callee8);
        }));
        return _t2.apply(this, arguments);
      }
    }
  }]);
})();
//# sourceMappingURL=layers-support-layersCreator-js-es5.js.map