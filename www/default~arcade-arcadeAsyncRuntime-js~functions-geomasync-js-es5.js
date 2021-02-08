(function () {
  function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

  function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

  function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

  function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

  function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["default~arcade-arcadeAsyncRuntime-js~functions-geomasync-js"], {
    /***/
    "NOfn":
    /*!*****************************************************************!*\
      !*** ./node_modules/@arcgis/core/arcade/functions/geomasync.js ***!
      \*****************************************************************/

    /*! exports provided: registerFunctions */

    /***/
    function NOfn(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "registerFunctions", function () {
        return on;
      });
      /* harmony import */


      var _geometry_Geometry_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ../../geometry/Geometry.js */
      "N2DF");
      /* harmony import */


      var _geometry_Point_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ../../geometry/Point.js */
      "SuVq");
      /* harmony import */


      var _geometry_Extent_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ../../geometry/Extent.js */
      "OvF4");
      /* harmony import */


      var _geometry_Multipoint_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ../../geometry/Multipoint.js */
      "V9wi");
      /* harmony import */


      var _geometry_Polygon_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ../../geometry/Polygon.js */
      "Ehki");
      /* harmony import */


      var _geometry_Polyline_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ../../geometry/Polyline.js */
      "UhwK");
      /* harmony import */


      var _geometry_support_jsonUtils_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ../../geometry/support/jsonUtils.js */
      "qatw");
      /* harmony import */


      var _kernel_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! ../../kernel.js */
      "975N");
      /* harmony import */


      var _chunks_languageUtils_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! ../../chunks/languageUtils.js */
      "idrm");
      /* harmony import */


      var _centroid_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! ./centroid.js */
      "3xY4");
      /* harmony import */


      var _kernel_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
      /*! ../kernel.js */
      "hUmP");
      /* harmony import */


      var _geometry_geometryEngineAsync_js__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
      /*! ../../geometry/geometryEngineAsync.js */
      "u1HQ");
      /*
      All material copyright ESRI, All Rights Reserved, unless otherwise specified.
      See https://js.arcgis.com/4.18/esri/copyright.txt for details.
      */


      function tn(n) {
        return 0 === _kernel_js__WEBPACK_IMPORTED_MODULE_7__["version"].indexOf("4.") ? _geometry_Polygon_js__WEBPACK_IMPORTED_MODULE_4__["default"].fromExtent(n) : new _geometry_Polygon_js__WEBPACK_IMPORTED_MODULE_4__["default"]({
          spatialReference: n.spatialReference,
          rings: [[[n.xmin, n.ymin], [n.xmin, n.ymax], [n.xmax, n.ymax], [n.xmax, n.ymin], [n.xmin, n.ymin]]]
        });
      }

      function en(r) {
        if (Object(_chunks_languageUtils_js__WEBPACK_IMPORTED_MODULE_8__["p"])(r, 2, 2), r[0] instanceof _geometry_Geometry_js__WEBPACK_IMPORTED_MODULE_0__["default"] && r[1] instanceof _geometry_Geometry_js__WEBPACK_IMPORTED_MODULE_0__["default"]) ;else if (r[0] instanceof _geometry_Geometry_js__WEBPACK_IMPORTED_MODULE_0__["default"] && null === r[1]) ;else if (r[1] instanceof _geometry_Geometry_js__WEBPACK_IMPORTED_MODULE_0__["default"] && null === r[0]) ;else if (null !== r[0] || null !== r[1]) throw new Error("Illegal Argument");
      }

      function on(l) {
        "async" === l.mode && (l.functions.disjoint = function (n, r) {
          return l.standardFunctionAsync(n, r, function (n, r, t) {
            return en(t = Object(_chunks_languageUtils_js__WEBPACK_IMPORTED_MODULE_8__["J"])(t)), null === t[0] || null === t[1] || Object(_geometry_geometryEngineAsync_js__WEBPACK_IMPORTED_MODULE_11__["disjoint"])(t[0], t[1]);
          });
        }, l.functions.intersects = function (n, r) {
          return l.standardFunctionAsync(n, r, function (n, r, t) {
            return en(t = Object(_chunks_languageUtils_js__WEBPACK_IMPORTED_MODULE_8__["J"])(t)), null !== t[0] && null !== t[1] && Object(_geometry_geometryEngineAsync_js__WEBPACK_IMPORTED_MODULE_11__["intersects"])(t[0], t[1]);
          });
        }, l.functions.touches = function (n, r) {
          return l.standardFunctionAsync(n, r, function (n, r, t) {
            return en(t = Object(_chunks_languageUtils_js__WEBPACK_IMPORTED_MODULE_8__["J"])(t)), null !== t[0] && null !== t[1] && Object(_geometry_geometryEngineAsync_js__WEBPACK_IMPORTED_MODULE_11__["touches"])(t[0], t[1]);
          });
        }, l.functions.crosses = function (n, r) {
          return l.standardFunctionAsync(n, r, function (n, r, t) {
            return en(t = Object(_chunks_languageUtils_js__WEBPACK_IMPORTED_MODULE_8__["J"])(t)), null !== t[0] && null !== t[1] && Object(_geometry_geometryEngineAsync_js__WEBPACK_IMPORTED_MODULE_11__["crosses"])(t[0], t[1]);
          });
        }, l.functions.within = function (n, r) {
          return l.standardFunctionAsync(n, r, function (n, r, t) {
            return en(t = Object(_chunks_languageUtils_js__WEBPACK_IMPORTED_MODULE_8__["J"])(t)), null !== t[0] && null !== t[1] && Object(_geometry_geometryEngineAsync_js__WEBPACK_IMPORTED_MODULE_11__["within"])(t[0], t[1]);
          });
        }, l.functions.contains = function (n, r) {
          return l.standardFunctionAsync(n, r, function (n, r, t) {
            return en(t = Object(_chunks_languageUtils_js__WEBPACK_IMPORTED_MODULE_8__["J"])(t)), null !== t[0] && null !== t[1] && Object(_geometry_geometryEngineAsync_js__WEBPACK_IMPORTED_MODULE_11__["contains"])(t[0], t[1]);
          });
        }, l.functions.overlaps = function (n, r) {
          return l.standardFunctionAsync(n, r, function (n, r, t) {
            return en(t = Object(_chunks_languageUtils_js__WEBPACK_IMPORTED_MODULE_8__["J"])(t)), null !== t[0] && null !== t[1] && Object(_geometry_geometryEngineAsync_js__WEBPACK_IMPORTED_MODULE_11__["overlaps"])(t[0], t[1]);
          });
        }, l.functions.equals = function (r, t) {
          return l.standardFunctionAsync(r, t, function (r, t, e) {
            return Object(_chunks_languageUtils_js__WEBPACK_IMPORTED_MODULE_8__["p"])(e, 2, 2), e[0] === e[1] || (e[0] instanceof _geometry_Geometry_js__WEBPACK_IMPORTED_MODULE_0__["default"] && e[1] instanceof _geometry_Geometry_js__WEBPACK_IMPORTED_MODULE_0__["default"] ? Object(_geometry_geometryEngineAsync_js__WEBPACK_IMPORTED_MODULE_11__["equals"])(e[0], e[1]) : !(!Object(_chunks_languageUtils_js__WEBPACK_IMPORTED_MODULE_8__["f"])(e[0]) || !Object(_chunks_languageUtils_js__WEBPACK_IMPORTED_MODULE_8__["f"])(e[1])) && e[0].getTime() === e[1].getTime());
          });
        }, l.functions.relate = function (r, t) {
          return l.standardFunctionAsync(r, t, function (r, t, e) {
            if (e = Object(_chunks_languageUtils_js__WEBPACK_IMPORTED_MODULE_8__["J"])(e), Object(_chunks_languageUtils_js__WEBPACK_IMPORTED_MODULE_8__["p"])(e, 3, 3), e[0] instanceof _geometry_Geometry_js__WEBPACK_IMPORTED_MODULE_0__["default"] && e[1] instanceof _geometry_Geometry_js__WEBPACK_IMPORTED_MODULE_0__["default"]) return Object(_geometry_geometryEngineAsync_js__WEBPACK_IMPORTED_MODULE_11__["relate"])(e[0], e[1], Object(_chunks_languageUtils_js__WEBPACK_IMPORTED_MODULE_8__["e"])(e[2]));
            if (e[0] instanceof _geometry_Geometry_js__WEBPACK_IMPORTED_MODULE_0__["default"] && null === e[1]) return !1;
            if (e[1] instanceof _geometry_Geometry_js__WEBPACK_IMPORTED_MODULE_0__["default"] && null === e[0]) return !1;
            if (null === e[0] && null === e[1]) return !1;
            throw new Error("Illegal Argument");
          });
        }, l.functions.intersection = function (n, r) {
          return l.standardFunctionAsync(n, r, function (n, r, t) {
            return en(t = Object(_chunks_languageUtils_js__WEBPACK_IMPORTED_MODULE_8__["J"])(t)), null === t[0] || null === t[1] ? null : Object(_geometry_geometryEngineAsync_js__WEBPACK_IMPORTED_MODULE_11__["intersect"])(t[0], t[1]);
          });
        }, l.functions.union = function (r, t) {
          return l.standardFunctionAsync(r, t, function (t, e, o) {
            var i = [];
            if (0 === (o = Object(_chunks_languageUtils_js__WEBPACK_IMPORTED_MODULE_8__["J"])(o)).length) throw new Error("Function called with wrong number of Parameters");
            if (1 === o.length) {
              if (Object(_chunks_languageUtils_js__WEBPACK_IMPORTED_MODULE_8__["h"])(o[0])) {
                var _r = Object(_chunks_languageUtils_js__WEBPACK_IMPORTED_MODULE_8__["J"])(o[0]);

                for (var _t = 0; _t < _r.length; _t++) {
                  if (null !== _r[_t]) {
                    if (!(_r[_t] instanceof _geometry_Geometry_js__WEBPACK_IMPORTED_MODULE_0__["default"])) throw new Error("Illegal Argument");
                    i.push(_r[_t]);
                  }
                }
              } else {
                if (!Object(_chunks_languageUtils_js__WEBPACK_IMPORTED_MODULE_8__["o"])(o[0])) {
                  if (o[0] instanceof _geometry_Geometry_js__WEBPACK_IMPORTED_MODULE_0__["default"]) return Object(_chunks_languageUtils_js__WEBPACK_IMPORTED_MODULE_8__["r"])(Object(_kernel_js__WEBPACK_IMPORTED_MODULE_10__["cloneGeometry"])(o[0]), r.spatialReference);
                  if (null === o[0]) return null;
                  throw new Error("Illegal Argument");
                }

                {
                  var _r2 = Object(_chunks_languageUtils_js__WEBPACK_IMPORTED_MODULE_8__["J"])(o[0].toArray());

                  for (var _t2 = 0; _t2 < _r2.length; _t2++) {
                    if (null !== _r2[_t2]) {
                      if (!(_r2[_t2] instanceof _geometry_Geometry_js__WEBPACK_IMPORTED_MODULE_0__["default"])) throw new Error("Illegal Argument");
                      i.push(_r2[_t2]);
                    }
                  }
                }
              }
            } else for (var _r3 = 0; _r3 < o.length; _r3++) {
              if (null !== o[_r3]) {
                if (!(o[_r3] instanceof _geometry_Geometry_js__WEBPACK_IMPORTED_MODULE_0__["default"])) throw new Error("Illegal Argument");
                i.push(o[_r3]);
              }
            }
            return 0 === i.length ? null : Object(_geometry_geometryEngineAsync_js__WEBPACK_IMPORTED_MODULE_11__["union"])(i);
          });
        }, l.functions.difference = function (n, r) {
          return l.standardFunctionAsync(n, r, function (n, r, t) {
            return en(t = Object(_chunks_languageUtils_js__WEBPACK_IMPORTED_MODULE_8__["J"])(t)), null !== t[0] && null === t[1] ? Object(_kernel_js__WEBPACK_IMPORTED_MODULE_10__["cloneGeometry"])(t[0]) : null === t[0] ? null : Object(_geometry_geometryEngineAsync_js__WEBPACK_IMPORTED_MODULE_11__["difference"])(t[0], t[1]);
          });
        }, l.functions.symmetricdifference = function (n, r) {
          return l.standardFunctionAsync(n, r, function (n, r, t) {
            return en(t = Object(_chunks_languageUtils_js__WEBPACK_IMPORTED_MODULE_8__["J"])(t)), null === t[0] && null === t[1] ? null : null === t[0] ? Object(_kernel_js__WEBPACK_IMPORTED_MODULE_10__["cloneGeometry"])(t[1]) : null === t[1] ? Object(_kernel_js__WEBPACK_IMPORTED_MODULE_10__["cloneGeometry"])(t[0]) : Object(_geometry_geometryEngineAsync_js__WEBPACK_IMPORTED_MODULE_11__["symmetricDifference"])(t[0], t[1]);
          });
        }, l.functions.clip = function (r, e) {
          return l.standardFunctionAsync(r, e, function (r, e, o) {
            if (o = Object(_chunks_languageUtils_js__WEBPACK_IMPORTED_MODULE_8__["J"])(o), Object(_chunks_languageUtils_js__WEBPACK_IMPORTED_MODULE_8__["p"])(o, 2, 2), !(o[1] instanceof _geometry_Extent_js__WEBPACK_IMPORTED_MODULE_2__["default"]) && null !== o[1]) throw new Error("Illegal Argument");
            if (null === o[0]) return null;
            if (!(o[0] instanceof _geometry_Geometry_js__WEBPACK_IMPORTED_MODULE_0__["default"])) throw new Error("Illegal Argument");
            return null === o[1] ? null : Object(_geometry_geometryEngineAsync_js__WEBPACK_IMPORTED_MODULE_11__["clip"])(o[0], o[1]);
          });
        }, l.functions.cut = function (r, t) {
          return l.standardFunctionAsync(r, t, function (r, t, e) {
            if (e = Object(_chunks_languageUtils_js__WEBPACK_IMPORTED_MODULE_8__["J"])(e), Object(_chunks_languageUtils_js__WEBPACK_IMPORTED_MODULE_8__["p"])(e, 2, 2), !(e[1] instanceof _geometry_Polyline_js__WEBPACK_IMPORTED_MODULE_5__["default"]) && null !== e[1]) throw new Error("Illegal Argument");
            if (null === e[0]) return [];
            if (!(e[0] instanceof _geometry_Geometry_js__WEBPACK_IMPORTED_MODULE_0__["default"])) throw new Error("Illegal Argument");
            return null === e[1] ? [Object(_kernel_js__WEBPACK_IMPORTED_MODULE_10__["cloneGeometry"])(e[0])] : Object(_geometry_geometryEngineAsync_js__WEBPACK_IMPORTED_MODULE_11__["cut"])(e[0], e[1]);
          });
        }, l.functions.area = function (r, t) {
          return l.standardFunctionAsync(r, t, function (t, e, o) {
            if (Object(_chunks_languageUtils_js__WEBPACK_IMPORTED_MODULE_8__["p"])(o, 1, 2), null === (o = Object(_chunks_languageUtils_js__WEBPACK_IMPORTED_MODULE_8__["J"])(o))[0]) return 0;
            if (Object(_chunks_languageUtils_js__WEBPACK_IMPORTED_MODULE_8__["z"])(o[0])) return o[0].sumArea(Object(_kernel_js__WEBPACK_IMPORTED_MODULE_10__["convertSquareUnitsToCode"])(Object(_chunks_languageUtils_js__WEBPACK_IMPORTED_MODULE_8__["C"])(o[1], -1)), !1, r.abortSignal).then(function (n) {
              if (r.abortSignal.aborted) throw new Error("Operation has been cancelled.");
              return n;
            });

            if (Object(_chunks_languageUtils_js__WEBPACK_IMPORTED_MODULE_8__["h"])(o[0]) || Object(_chunks_languageUtils_js__WEBPACK_IMPORTED_MODULE_8__["o"])(o[0])) {
              var n = Object(_chunks_languageUtils_js__WEBPACK_IMPORTED_MODULE_8__["L"])(o[0], r.spatialReference);
              return null === n ? 0 : Object(_geometry_geometryEngineAsync_js__WEBPACK_IMPORTED_MODULE_11__["planarArea"])(n, Object(_kernel_js__WEBPACK_IMPORTED_MODULE_10__["convertSquareUnitsToCode"])(Object(_chunks_languageUtils_js__WEBPACK_IMPORTED_MODULE_8__["C"])(o[1], -1)));
            }

            if (!(o[0] instanceof _geometry_Geometry_js__WEBPACK_IMPORTED_MODULE_0__["default"])) throw new Error("Illegal Argument");
            return Object(_geometry_geometryEngineAsync_js__WEBPACK_IMPORTED_MODULE_11__["planarArea"])(o[0], Object(_kernel_js__WEBPACK_IMPORTED_MODULE_10__["convertSquareUnitsToCode"])(Object(_chunks_languageUtils_js__WEBPACK_IMPORTED_MODULE_8__["C"])(o[1], -1)));
          });
        }, l.functions.areageodetic = function (r, t) {
          return l.standardFunctionAsync(r, t, function (t, e, o) {
            if (Object(_chunks_languageUtils_js__WEBPACK_IMPORTED_MODULE_8__["p"])(o, 1, 2), null === (o = Object(_chunks_languageUtils_js__WEBPACK_IMPORTED_MODULE_8__["J"])(o))[0]) return 0;
            if (Object(_chunks_languageUtils_js__WEBPACK_IMPORTED_MODULE_8__["z"])(o[0])) return o[0].sumArea(Object(_kernel_js__WEBPACK_IMPORTED_MODULE_10__["convertSquareUnitsToCode"])(Object(_chunks_languageUtils_js__WEBPACK_IMPORTED_MODULE_8__["C"])(o[1], -1)), !0, r.abortSignal).then(function (n) {
              if (r.abortSignal.aborted) throw new Error("Operation has been cancelled.");
              return n;
            });

            if (Object(_chunks_languageUtils_js__WEBPACK_IMPORTED_MODULE_8__["h"])(o[0]) || Object(_chunks_languageUtils_js__WEBPACK_IMPORTED_MODULE_8__["o"])(o[0])) {
              var n = Object(_chunks_languageUtils_js__WEBPACK_IMPORTED_MODULE_8__["L"])(o[0], r.spatialReference);
              return null === n ? 0 : Object(_geometry_geometryEngineAsync_js__WEBPACK_IMPORTED_MODULE_11__["geodesicArea"])(n, Object(_kernel_js__WEBPACK_IMPORTED_MODULE_10__["convertSquareUnitsToCode"])(Object(_chunks_languageUtils_js__WEBPACK_IMPORTED_MODULE_8__["C"])(o[1], -1)));
            }

            if (!(o[0] instanceof _geometry_Geometry_js__WEBPACK_IMPORTED_MODULE_0__["default"])) throw new Error("Illegal Argument");
            return Object(_geometry_geometryEngineAsync_js__WEBPACK_IMPORTED_MODULE_11__["geodesicArea"])(o[0], Object(_kernel_js__WEBPACK_IMPORTED_MODULE_10__["convertSquareUnitsToCode"])(Object(_chunks_languageUtils_js__WEBPACK_IMPORTED_MODULE_8__["C"])(o[1], -1)));
          });
        }, l.functions.length = function (r, t) {
          return l.standardFunctionAsync(r, t, function (t, e, o) {
            if (Object(_chunks_languageUtils_js__WEBPACK_IMPORTED_MODULE_8__["p"])(o, 1, 2), null === (o = Object(_chunks_languageUtils_js__WEBPACK_IMPORTED_MODULE_8__["J"])(o))[0]) return 0;
            if (Object(_chunks_languageUtils_js__WEBPACK_IMPORTED_MODULE_8__["z"])(o[0])) return o[0].sumLength(Object(_kernel_js__WEBPACK_IMPORTED_MODULE_10__["convertLinearUnitsToCode"])(Object(_chunks_languageUtils_js__WEBPACK_IMPORTED_MODULE_8__["C"])(o[1], -1)), !1, r.abortSignal).then(function (n) {
              if (r.abortSignal.aborted) throw new Error("Operation has been cancelled.");
              return n;
            });

            if (Object(_chunks_languageUtils_js__WEBPACK_IMPORTED_MODULE_8__["h"])(o[0]) || Object(_chunks_languageUtils_js__WEBPACK_IMPORTED_MODULE_8__["o"])(o[0])) {
              var n = Object(_chunks_languageUtils_js__WEBPACK_IMPORTED_MODULE_8__["K"])(o[0], r.spatialReference);
              return null === n ? 0 : Object(_geometry_geometryEngineAsync_js__WEBPACK_IMPORTED_MODULE_11__["planarLength"])(n, Object(_kernel_js__WEBPACK_IMPORTED_MODULE_10__["convertLinearUnitsToCode"])(Object(_chunks_languageUtils_js__WEBPACK_IMPORTED_MODULE_8__["C"])(o[1], -1)));
            }

            if (!(o[0] instanceof _geometry_Geometry_js__WEBPACK_IMPORTED_MODULE_0__["default"])) throw new Error("Illegal Argument");
            return Object(_geometry_geometryEngineAsync_js__WEBPACK_IMPORTED_MODULE_11__["planarLength"])(o[0], Object(_kernel_js__WEBPACK_IMPORTED_MODULE_10__["convertLinearUnitsToCode"])(Object(_chunks_languageUtils_js__WEBPACK_IMPORTED_MODULE_8__["C"])(o[1], -1)));
          });
        }, l.functions.lengthgeodetic = function (r, t) {
          return l.standardFunctionAsync(r, t, function (t, e, o) {
            if (Object(_chunks_languageUtils_js__WEBPACK_IMPORTED_MODULE_8__["p"])(o, 1, 2), null === (o = Object(_chunks_languageUtils_js__WEBPACK_IMPORTED_MODULE_8__["J"])(o))[0]) return 0;
            if (Object(_chunks_languageUtils_js__WEBPACK_IMPORTED_MODULE_8__["z"])(o[0])) return o[0].sumLength(Object(_kernel_js__WEBPACK_IMPORTED_MODULE_10__["convertLinearUnitsToCode"])(Object(_chunks_languageUtils_js__WEBPACK_IMPORTED_MODULE_8__["C"])(o[1], -1)), !0, r.abortSignal).then(function (n) {
              if (r.abortSignal.aborted) throw new Error("Operation has been cancelled.");
              return n;
            });

            if (Object(_chunks_languageUtils_js__WEBPACK_IMPORTED_MODULE_8__["h"])(o[0]) || Object(_chunks_languageUtils_js__WEBPACK_IMPORTED_MODULE_8__["o"])(o[0])) {
              var n = Object(_chunks_languageUtils_js__WEBPACK_IMPORTED_MODULE_8__["K"])(o[0], r.spatialReference);
              return null === n ? 0 : Object(_geometry_geometryEngineAsync_js__WEBPACK_IMPORTED_MODULE_11__["geodesicLength"])(n, Object(_kernel_js__WEBPACK_IMPORTED_MODULE_10__["convertLinearUnitsToCode"])(Object(_chunks_languageUtils_js__WEBPACK_IMPORTED_MODULE_8__["C"])(o[1], -1)));
            }

            if (!(o[0] instanceof _geometry_Geometry_js__WEBPACK_IMPORTED_MODULE_0__["default"])) throw new Error("Illegal Argument");
            return Object(_geometry_geometryEngineAsync_js__WEBPACK_IMPORTED_MODULE_11__["geodesicLength"])(o[0], Object(_kernel_js__WEBPACK_IMPORTED_MODULE_10__["convertLinearUnitsToCode"])(Object(_chunks_languageUtils_js__WEBPACK_IMPORTED_MODULE_8__["C"])(o[1], -1)));
          });
        }, l.functions.distance = function (r, t) {
          return l.standardFunctionAsync(r, t, function (t, e, o) {
            o = Object(_chunks_languageUtils_js__WEBPACK_IMPORTED_MODULE_8__["J"])(o), Object(_chunks_languageUtils_js__WEBPACK_IMPORTED_MODULE_8__["p"])(o, 2, 3);
            var i = o[0];
            (Object(_chunks_languageUtils_js__WEBPACK_IMPORTED_MODULE_8__["h"])(o[0]) || Object(_chunks_languageUtils_js__WEBPACK_IMPORTED_MODULE_8__["o"])(o[0])) && (i = Object(_chunks_languageUtils_js__WEBPACK_IMPORTED_MODULE_8__["O"])(o[0], r.spatialReference));
            var u = o[1];
            if ((Object(_chunks_languageUtils_js__WEBPACK_IMPORTED_MODULE_8__["h"])(o[1]) || Object(_chunks_languageUtils_js__WEBPACK_IMPORTED_MODULE_8__["o"])(o[1])) && (u = Object(_chunks_languageUtils_js__WEBPACK_IMPORTED_MODULE_8__["O"])(o[1], r.spatialReference)), !(i instanceof _geometry_Geometry_js__WEBPACK_IMPORTED_MODULE_0__["default"])) throw new Error("Illegal Argument");
            if (!(u instanceof _geometry_Geometry_js__WEBPACK_IMPORTED_MODULE_0__["default"])) throw new Error("Illegal Argument");
            return Object(_geometry_geometryEngineAsync_js__WEBPACK_IMPORTED_MODULE_11__["distance"])(i, u, Object(_kernel_js__WEBPACK_IMPORTED_MODULE_10__["convertLinearUnitsToCode"])(Object(_chunks_languageUtils_js__WEBPACK_IMPORTED_MODULE_8__["C"])(o[2], -1)));
          });
        }, l.functions.distancegeodetic = function (n, t) {
          return l.standardFunctionAsync(n, t, function (n, t, e) {
            e = Object(_chunks_languageUtils_js__WEBPACK_IMPORTED_MODULE_8__["J"])(e), Object(_chunks_languageUtils_js__WEBPACK_IMPORTED_MODULE_8__["p"])(e, 2, 3);
            var o = e[0],
                u = e[1];
            if (!(o instanceof _geometry_Point_js__WEBPACK_IMPORTED_MODULE_1__["default"])) throw new Error("Illegal Argument");
            if (!(u instanceof _geometry_Point_js__WEBPACK_IMPORTED_MODULE_1__["default"])) throw new Error("Illegal Argument");
            var l = new _geometry_Polyline_js__WEBPACK_IMPORTED_MODULE_5__["default"]({
              paths: [],
              spatialReference: o.spatialReference
            });
            return l.addPath([o, u]), Object(_geometry_geometryEngineAsync_js__WEBPACK_IMPORTED_MODULE_11__["geodesicLength"])(l, Object(_kernel_js__WEBPACK_IMPORTED_MODULE_10__["convertLinearUnitsToCode"])(Object(_chunks_languageUtils_js__WEBPACK_IMPORTED_MODULE_8__["C"])(e[2], -1)));
          });
        }, l.functions.densify = function (r, e) {
          return l.standardFunctionAsync(r, e, function (r, e, u) {
            if (u = Object(_chunks_languageUtils_js__WEBPACK_IMPORTED_MODULE_8__["J"])(u), Object(_chunks_languageUtils_js__WEBPACK_IMPORTED_MODULE_8__["p"])(u, 2, 3), null === u[0]) return null;
            if (!(u[0] instanceof _geometry_Geometry_js__WEBPACK_IMPORTED_MODULE_0__["default"])) throw new Error("Illegal Argument");
            var l = Object(_chunks_languageUtils_js__WEBPACK_IMPORTED_MODULE_8__["c"])(u[1]);
            if (isNaN(l)) throw new Error("Illegal Argument");
            if (l <= 0) throw new Error("Illegal Argument");
            return u[0] instanceof _geometry_Polygon_js__WEBPACK_IMPORTED_MODULE_4__["default"] || u[0] instanceof _geometry_Polyline_js__WEBPACK_IMPORTED_MODULE_5__["default"] ? Object(_geometry_geometryEngineAsync_js__WEBPACK_IMPORTED_MODULE_11__["densify"])(u[0], l, Object(_kernel_js__WEBPACK_IMPORTED_MODULE_10__["convertLinearUnitsToCode"])(Object(_chunks_languageUtils_js__WEBPACK_IMPORTED_MODULE_8__["C"])(u[2], -1))) : u[0] instanceof _geometry_Extent_js__WEBPACK_IMPORTED_MODULE_2__["default"] ? Object(_geometry_geometryEngineAsync_js__WEBPACK_IMPORTED_MODULE_11__["densify"])(tn(u[0]), l, Object(_kernel_js__WEBPACK_IMPORTED_MODULE_10__["convertLinearUnitsToCode"])(Object(_chunks_languageUtils_js__WEBPACK_IMPORTED_MODULE_8__["C"])(u[2], -1))) : u[0];
          });
        }, l.functions.densifygeodetic = function (r, e) {
          return l.standardFunctionAsync(r, e, function (r, e, u) {
            if (u = Object(_chunks_languageUtils_js__WEBPACK_IMPORTED_MODULE_8__["J"])(u), Object(_chunks_languageUtils_js__WEBPACK_IMPORTED_MODULE_8__["p"])(u, 2, 3), null === u[0]) return null;
            if (!(u[0] instanceof _geometry_Geometry_js__WEBPACK_IMPORTED_MODULE_0__["default"])) throw new Error("Illegal Argument");
            var l = Object(_chunks_languageUtils_js__WEBPACK_IMPORTED_MODULE_8__["c"])(u[1]);
            if (isNaN(l)) throw new Error("Illegal Argument");
            if (l <= 0) throw new Error("Illegal Argument");
            return u[0] instanceof _geometry_Polygon_js__WEBPACK_IMPORTED_MODULE_4__["default"] || u[0] instanceof _geometry_Polyline_js__WEBPACK_IMPORTED_MODULE_5__["default"] ? Object(_geometry_geometryEngineAsync_js__WEBPACK_IMPORTED_MODULE_11__["geodesicDensify"])(u[0], l, Object(_kernel_js__WEBPACK_IMPORTED_MODULE_10__["convertLinearUnitsToCode"])(Object(_chunks_languageUtils_js__WEBPACK_IMPORTED_MODULE_8__["C"])(u[2], -1))) : u[0] instanceof _geometry_Extent_js__WEBPACK_IMPORTED_MODULE_2__["default"] ? Object(_geometry_geometryEngineAsync_js__WEBPACK_IMPORTED_MODULE_11__["geodesicDensify"])(tn(u[0]), l, Object(_kernel_js__WEBPACK_IMPORTED_MODULE_10__["convertLinearUnitsToCode"])(Object(_chunks_languageUtils_js__WEBPACK_IMPORTED_MODULE_8__["C"])(u[2], -1))) : u[0];
          });
        }, l.functions.generalize = function (r, t) {
          return l.standardFunctionAsync(r, t, function (r, t, e) {
            if (e = Object(_chunks_languageUtils_js__WEBPACK_IMPORTED_MODULE_8__["J"])(e), Object(_chunks_languageUtils_js__WEBPACK_IMPORTED_MODULE_8__["p"])(e, 2, 4), null === e[0]) return null;
            if (!(e[0] instanceof _geometry_Geometry_js__WEBPACK_IMPORTED_MODULE_0__["default"])) throw new Error("Illegal Argument");
            var o = Object(_chunks_languageUtils_js__WEBPACK_IMPORTED_MODULE_8__["c"])(e[1]);
            if (isNaN(o)) throw new Error("Illegal Argument");
            return Object(_geometry_geometryEngineAsync_js__WEBPACK_IMPORTED_MODULE_11__["generalize"])(e[0], o, Object(_chunks_languageUtils_js__WEBPACK_IMPORTED_MODULE_8__["d"])(Object(_chunks_languageUtils_js__WEBPACK_IMPORTED_MODULE_8__["C"])(e[2], !0)), Object(_kernel_js__WEBPACK_IMPORTED_MODULE_10__["convertLinearUnitsToCode"])(Object(_chunks_languageUtils_js__WEBPACK_IMPORTED_MODULE_8__["C"])(e[3], -1)));
          });
        }, l.functions.buffer = function (r, t) {
          return l.standardFunctionAsync(r, t, function (r, t, e) {
            if (e = Object(_chunks_languageUtils_js__WEBPACK_IMPORTED_MODULE_8__["J"])(e), Object(_chunks_languageUtils_js__WEBPACK_IMPORTED_MODULE_8__["p"])(e, 2, 3), null === e[0]) return null;
            if (!(e[0] instanceof _geometry_Geometry_js__WEBPACK_IMPORTED_MODULE_0__["default"])) throw new Error("Illegal Argument");
            var o = Object(_chunks_languageUtils_js__WEBPACK_IMPORTED_MODULE_8__["c"])(e[1]);
            if (isNaN(o)) throw new Error("Illegal Argument");
            return 0 === o ? Object(_kernel_js__WEBPACK_IMPORTED_MODULE_10__["cloneGeometry"])(e[0]) : Object(_geometry_geometryEngineAsync_js__WEBPACK_IMPORTED_MODULE_11__["buffer"])(e[0], o, Object(_kernel_js__WEBPACK_IMPORTED_MODULE_10__["convertLinearUnitsToCode"])(Object(_chunks_languageUtils_js__WEBPACK_IMPORTED_MODULE_8__["C"])(e[2], -1)));
          });
        }, l.functions.buffergeodetic = function (r, t) {
          return l.standardFunctionAsync(r, t, function (r, t, e) {
            if (e = Object(_chunks_languageUtils_js__WEBPACK_IMPORTED_MODULE_8__["J"])(e), Object(_chunks_languageUtils_js__WEBPACK_IMPORTED_MODULE_8__["p"])(e, 2, 3), null === e[0]) return null;
            if (!(e[0] instanceof _geometry_Geometry_js__WEBPACK_IMPORTED_MODULE_0__["default"])) throw new Error("Illegal Argument");
            var o = Object(_chunks_languageUtils_js__WEBPACK_IMPORTED_MODULE_8__["c"])(e[1]);
            if (isNaN(o)) throw new Error("Illegal Argument");
            return 0 === o ? Object(_kernel_js__WEBPACK_IMPORTED_MODULE_10__["cloneGeometry"])(e[0]) : Object(_geometry_geometryEngineAsync_js__WEBPACK_IMPORTED_MODULE_11__["geodesicBuffer"])(e[0], o, Object(_kernel_js__WEBPACK_IMPORTED_MODULE_10__["convertLinearUnitsToCode"])(Object(_chunks_languageUtils_js__WEBPACK_IMPORTED_MODULE_8__["C"])(e[2], -1)));
          });
        }, l.functions.offset = function (n, r) {
          return l.standardFunctionAsync(n, r, function (n, r, t) {
            if (t = Object(_chunks_languageUtils_js__WEBPACK_IMPORTED_MODULE_8__["J"])(t), Object(_chunks_languageUtils_js__WEBPACK_IMPORTED_MODULE_8__["p"])(t, 2, 6), null === t[0]) return null;
            if (!(t[0] instanceof _geometry_Polygon_js__WEBPACK_IMPORTED_MODULE_4__["default"] || t[0] instanceof _geometry_Polyline_js__WEBPACK_IMPORTED_MODULE_5__["default"])) throw new Error("Illegal Argument");
            var e = Object(_chunks_languageUtils_js__WEBPACK_IMPORTED_MODULE_8__["c"])(t[1]);
            if (isNaN(e)) throw new Error("Illegal Argument");
            var u = Object(_chunks_languageUtils_js__WEBPACK_IMPORTED_MODULE_8__["c"])(Object(_chunks_languageUtils_js__WEBPACK_IMPORTED_MODULE_8__["C"])(t[4], 10));
            if (isNaN(u)) throw new Error("Illegal Argument");
            var l = Object(_chunks_languageUtils_js__WEBPACK_IMPORTED_MODULE_8__["c"])(Object(_chunks_languageUtils_js__WEBPACK_IMPORTED_MODULE_8__["C"])(t[5], 0));
            if (isNaN(l)) throw new Error("Illegal Argument");
            return Object(_geometry_geometryEngineAsync_js__WEBPACK_IMPORTED_MODULE_11__["offset"])(t[0], e, Object(_kernel_js__WEBPACK_IMPORTED_MODULE_10__["convertLinearUnitsToCode"])(Object(_chunks_languageUtils_js__WEBPACK_IMPORTED_MODULE_8__["C"])(t[2], -1)), Object(_chunks_languageUtils_js__WEBPACK_IMPORTED_MODULE_8__["e"])(Object(_chunks_languageUtils_js__WEBPACK_IMPORTED_MODULE_8__["C"])(t[3], "round")).toLowerCase(), u, l);
          });
        }, l.functions.rotate = function (e, i) {
          return l.standardFunctionAsync(e, i, function (e, i, u) {
            u = Object(_chunks_languageUtils_js__WEBPACK_IMPORTED_MODULE_8__["J"])(u), Object(_chunks_languageUtils_js__WEBPACK_IMPORTED_MODULE_8__["p"])(u, 2, 3);
            var l = u[0];
            if (null === l) return null;
            if (!(l instanceof _geometry_Geometry_js__WEBPACK_IMPORTED_MODULE_0__["default"])) throw new Error("Illegal Argument");
            l instanceof _geometry_Extent_js__WEBPACK_IMPORTED_MODULE_2__["default"] && (l = _geometry_Polygon_js__WEBPACK_IMPORTED_MODULE_4__["default"].fromExtent(l));
            var a = Object(_chunks_languageUtils_js__WEBPACK_IMPORTED_MODULE_8__["c"])(u[1]);
            if (isNaN(a)) throw new Error("Illegal Argument");
            var c = Object(_chunks_languageUtils_js__WEBPACK_IMPORTED_MODULE_8__["C"])(u[2], null);
            if (null === c) return Object(_geometry_geometryEngineAsync_js__WEBPACK_IMPORTED_MODULE_11__["rotate"])(l, a);
            if (c instanceof _geometry_Point_js__WEBPACK_IMPORTED_MODULE_1__["default"]) return Object(_geometry_geometryEngineAsync_js__WEBPACK_IMPORTED_MODULE_11__["rotate"])(l, a, c);
            throw new Error("Illegal Argument");
          });
        }, l.functions.centroid = function (u, a) {
          return l.standardFunctionAsync(u, a, function (l, a, c) {
            if (c = Object(_chunks_languageUtils_js__WEBPACK_IMPORTED_MODULE_8__["J"])(c), Object(_chunks_languageUtils_js__WEBPACK_IMPORTED_MODULE_8__["p"])(c, 1, 1), null === c[0]) return null;
            var d = c[0];
            if ((Object(_chunks_languageUtils_js__WEBPACK_IMPORTED_MODULE_8__["h"])(c[0]) || Object(_chunks_languageUtils_js__WEBPACK_IMPORTED_MODULE_8__["o"])(c[0])) && (d = Object(_chunks_languageUtils_js__WEBPACK_IMPORTED_MODULE_8__["O"])(c[0], u.spatialReference)), null === d) return null;
            if (!(d instanceof _geometry_Geometry_js__WEBPACK_IMPORTED_MODULE_0__["default"])) throw new Error("Illegal Argument");
            return d instanceof _geometry_Point_js__WEBPACK_IMPORTED_MODULE_1__["default"] ? Object(_chunks_languageUtils_js__WEBPACK_IMPORTED_MODULE_8__["r"])(Object(_kernel_js__WEBPACK_IMPORTED_MODULE_10__["cloneGeometry"])(c[0]), u.spatialReference) : d instanceof _geometry_Polygon_js__WEBPACK_IMPORTED_MODULE_4__["default"] ? d.centroid : d instanceof _geometry_Polyline_js__WEBPACK_IMPORTED_MODULE_5__["default"] ? Object(_centroid_js__WEBPACK_IMPORTED_MODULE_9__["centroidPolyline"])(d) : d instanceof _geometry_Multipoint_js__WEBPACK_IMPORTED_MODULE_3__["default"] ? Object(_centroid_js__WEBPACK_IMPORTED_MODULE_9__["centroidMultiPoint"])(d) : d instanceof _geometry_Extent_js__WEBPACK_IMPORTED_MODULE_2__["default"] ? d.center : null;
          });
        }, l.functions.multiparttosinglepart = function (a, c) {
          return l.standardFunctionAsync(a, c, function (l, c, g) {
            g = Object(_chunks_languageUtils_js__WEBPACK_IMPORTED_MODULE_8__["J"])(g), Object(_chunks_languageUtils_js__WEBPACK_IMPORTED_MODULE_8__["p"])(g, 1, 1);
            var m = [];
            if (null === g[0]) return null;
            if (!(g[0] instanceof _geometry_Geometry_js__WEBPACK_IMPORTED_MODULE_0__["default"])) throw new Error("Illegal Argument");
            if (g[0] instanceof _geometry_Point_js__WEBPACK_IMPORTED_MODULE_1__["default"]) return [Object(_chunks_languageUtils_js__WEBPACK_IMPORTED_MODULE_8__["r"])(Object(_kernel_js__WEBPACK_IMPORTED_MODULE_10__["cloneGeometry"])(g[0]), a.spatialReference)];
            if (g[0] instanceof _geometry_Extent_js__WEBPACK_IMPORTED_MODULE_2__["default"]) return [Object(_chunks_languageUtils_js__WEBPACK_IMPORTED_MODULE_8__["r"])(Object(_kernel_js__WEBPACK_IMPORTED_MODULE_10__["cloneGeometry"])(g[0]), a.spatialReference)];
            return Object(_geometry_geometryEngineAsync_js__WEBPACK_IMPORTED_MODULE_11__["simplify"])(g[0]).then(function (n) {
              if (n instanceof _geometry_Polygon_js__WEBPACK_IMPORTED_MODULE_4__["default"]) {
                var r = [],
                    t = [];

                for (var e = 0; e < n.rings.length; e++) {
                  if (n.isClockwise(n.rings[e])) {
                    var _t3 = Object(_geometry_support_jsonUtils_js__WEBPACK_IMPORTED_MODULE_6__["fromJSON"])({
                      rings: [n.rings[e]],
                      hasZ: !0 === n.hasZ,
                      hazM: !0 === n.hasM,
                      spatialReference: n.spatialReference.toJSON()
                    });

                    r.push(_t3);
                  } else t.push({
                    ring: n.rings[e],
                    pt: n.getPoint(e, 0)
                  });
                }

                for (var _n = 0; _n < t.length; _n++) {
                  for (var _e = 0; _e < r.length; _e++) {
                    if (r[_e].contains(t[_n].pt)) {
                      r[_e].addRing(t[_n].ring);

                      break;
                    }
                  }
                }

                return r;
              }

              if (n instanceof _geometry_Polyline_js__WEBPACK_IMPORTED_MODULE_5__["default"]) {
                var _r4 = [];

                for (var _t4 = 0; _t4 < n.paths.length; _t4++) {
                  var _e2 = Object(_geometry_support_jsonUtils_js__WEBPACK_IMPORTED_MODULE_6__["fromJSON"])({
                    paths: [n.paths[_t4]],
                    hasZ: !0 === n.hasZ,
                    hazM: !0 === n.hasM,
                    spatialReference: n.spatialReference.toJSON()
                  });

                  _r4.push(_e2);
                }

                return _r4;
              }

              if (g[0] instanceof _geometry_Multipoint_js__WEBPACK_IMPORTED_MODULE_3__["default"]) {
                var _n2 = Object(_chunks_languageUtils_js__WEBPACK_IMPORTED_MODULE_8__["r"])(Object(_kernel_js__WEBPACK_IMPORTED_MODULE_10__["cloneGeometry"])(g[0]), a.spatialReference);

                for (var _r5 = 0; _r5 < _n2.points.length; _r5++) {
                  m.push(_n2.getPoint(_r5));
                }

                return m;
              }

              return null;
            });
          });
        }, l.functions.issimple = function (r, t) {
          return l.standardFunctionAsync(r, t, function (r, t, e) {
            if (e = Object(_chunks_languageUtils_js__WEBPACK_IMPORTED_MODULE_8__["J"])(e), Object(_chunks_languageUtils_js__WEBPACK_IMPORTED_MODULE_8__["p"])(e, 1, 1), null === e[0]) return !0;
            if (!(e[0] instanceof _geometry_Geometry_js__WEBPACK_IMPORTED_MODULE_0__["default"])) throw new Error("Illegal Argument");
            return Object(_geometry_geometryEngineAsync_js__WEBPACK_IMPORTED_MODULE_11__["isSimple"])(e[0]);
          });
        }, l.functions.simplify = function (r, t) {
          return l.standardFunctionAsync(r, t, function (r, t, e) {
            if (e = Object(_chunks_languageUtils_js__WEBPACK_IMPORTED_MODULE_8__["J"])(e), Object(_chunks_languageUtils_js__WEBPACK_IMPORTED_MODULE_8__["p"])(e, 1, 1), null === e[0]) return null;
            if (!(e[0] instanceof _geometry_Geometry_js__WEBPACK_IMPORTED_MODULE_0__["default"])) throw new Error("Illegal Argument");
            return Object(_geometry_geometryEngineAsync_js__WEBPACK_IMPORTED_MODULE_11__["simplify"])(e[0]);
          });
        });
      }
      /***/

    },

    /***/
    "u1HQ":
    /*!*******************************************************************!*\
      !*** ./node_modules/@arcgis/core/geometry/geometryEngineAsync.js ***!
      \*******************************************************************/

    /*! exports provided: buffer, clip, contains, convexHull, crosses, cut, densify, difference, disjoint, distance, equals, extendedSpatialReferenceInfo, flipHorizontal, flipVertical, generalize, geodesicArea, geodesicBuffer, geodesicDensify, geodesicLength, intersect, intersects, isSimple, nearestCoordinate, nearestVertex, nearestVertices, offset, overlaps, planarArea, planarLength, relate, rotate, simplify, symmetricDifference, touches, union, within */

    /***/
    function u1HQ(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "buffer", function () {
        return k;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "clip", function () {
        return s;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "contains", function () {
        return l;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "convexHull", function () {
        return v;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "crosses", function () {
        return y;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "cut", function () {
        return f;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "densify", function () {
        return C;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "difference", function () {
        return J;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "disjoint", function () {
        return A;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "distance", function () {
        return p;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "equals", function () {
        return w;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "extendedSpatialReferenceInfo", function () {
        return u;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "flipHorizontal", function () {
        return L;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "flipVertical", function () {
        return q;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "generalize", function () {
        return B;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "geodesicArea", function () {
        return W;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "geodesicBuffer", function () {
        return I;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "geodesicDensify", function () {
        return G;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "geodesicLength", function () {
        return F;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "intersect", function () {
        return R;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "intersects", function () {
        return m;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "isSimple", function () {
        return O;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "nearestCoordinate", function () {
        return V;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "nearestVertex", function () {
        return b;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "nearestVertices", function () {
        return z;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "offset", function () {
        return j;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "overlaps", function () {
        return x;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "planarArea", function () {
        return P;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "planarLength", function () {
        return U;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "relate", function () {
        return S;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "rotate", function () {
        return H;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "simplify", function () {
        return h;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "symmetricDifference", function () {
        return N;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "touches", function () {
        return d;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "union", function () {
        return E;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "within", function () {
        return g;
      });
      /* harmony import */


      var _Point_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ./Point.js */
      "SuVq");
      /* harmony import */


      var _support_jsonUtils_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./support/jsonUtils.js */
      "qatw");
      /* harmony import */


      var _geometry_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ../geometry.js */
      "4GrV");
      /* harmony import */


      var _core_workers_workers_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ../core/workers/workers.js */
      "36Co");
      /*
      All material copyright ESRI, All Rights Reserved, unless otherwise specified.
      See https://js.arcgis.com/4.18/esri/copyright.txt for details.
      */


      function e(n) {
        var t;
        return Array.isArray(n) ? null == (t = n[0]) ? void 0 : t.spatialReference : null == n ? void 0 : n.spatialReference;
      }

      function i(n) {
        return n ? Array.isArray(n) ? n.map(i) : n.toJSON ? n.toJSON() : n : n;
      }

      function a(n) {
        return Array.isArray(n) ? n.map(function (n) {
          return Object(_support_jsonUtils_js__WEBPACK_IMPORTED_MODULE_1__["fromJSON"])(n);
        }) : Object(_support_jsonUtils_js__WEBPACK_IMPORTED_MODULE_1__["fromJSON"])(n);
      }

      var o;

      function c(_x, _x2) {
        return _c.apply(this, arguments);
      }

      function _c() {
        _c = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee2(n, t) {
          return regeneratorRuntime.wrap(function _callee2$(_context2) {
            while (1) {
              switch (_context2.prev = _context2.next) {
                case 0:
                  _context2.next = 2;
                  return _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
                    return regeneratorRuntime.wrap(function _callee$(_context) {
                      while (1) {
                        switch (_context.prev = _context.next) {
                          case 0:
                            return _context.abrupt("return", (o || (o = Object(_core_workers_workers_js__WEBPACK_IMPORTED_MODULE_3__["open"])("geometryEngineWorker", {
                              strategy: "distributed"
                            })), o));

                          case 1:
                          case "end":
                            return _context.stop();
                        }
                      }
                    }, _callee);
                  }))();

                case 2:
                  return _context2.abrupt("return", _context2.sent.invoke("executeGEOperation", {
                    operation: n,
                    parameters: i(t)
                  }));

                case 3:
                case "end":
                  return _context2.stop();
              }
            }
          }, _callee2);
        }));
        return _c.apply(this, arguments);
      }

      function u(n) {
        return c("extendedSpatialReferenceInfo", [n]);
      }

      function s(_x3, _x4) {
        return _s.apply(this, arguments);
      }

      function _s() {
        _s = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee3(n, t) {
          return regeneratorRuntime.wrap(function _callee3$(_context3) {
            while (1) {
              switch (_context3.prev = _context3.next) {
                case 0:
                  _context3.t0 = a;
                  _context3.next = 3;
                  return c("clip", [e(n), n, t]);

                case 3:
                  _context3.t1 = _context3.sent;
                  return _context3.abrupt("return", (0, _context3.t0)(_context3.t1));

                case 5:
                case "end":
                  return _context3.stop();
              }
            }
          }, _callee3);
        }));
        return _s.apply(this, arguments);
      }

      function f(_x5, _x6) {
        return _f.apply(this, arguments);
      }

      function _f() {
        _f = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee4(n, t) {
          return regeneratorRuntime.wrap(function _callee4$(_context4) {
            while (1) {
              switch (_context4.prev = _context4.next) {
                case 0:
                  _context4.t0 = a;
                  _context4.next = 3;
                  return c("cut", [e(n), n, t]);

                case 3:
                  _context4.t1 = _context4.sent;
                  return _context4.abrupt("return", (0, _context4.t0)(_context4.t1));

                case 5:
                case "end":
                  return _context4.stop();
              }
            }
          }, _callee4);
        }));
        return _f.apply(this, arguments);
      }

      function l(n, t) {
        return c("contains", [e(n), n, t]);
      }

      function y(n, t) {
        return c("crosses", [e(n), n, t]);
      }

      function p(n, t, r) {
        return c("distance", [e(n), n, t, r]);
      }

      function w(n, t) {
        return c("equals", [e(n), n, t]);
      }

      function m(n, t) {
        return c("intersects", [e(n), n, t]);
      }

      function d(n, t) {
        return c("touches", [e(n), n, t]);
      }

      function g(n, t) {
        return c("within", [e(n), n, t]);
      }

      function A(n, t) {
        return c("disjoint", [e(n), n, t]);
      }

      function x(n, t) {
        return c("overlaps", [e(n), n, t]);
      }

      function S(n, t, r) {
        return c("relate", [e(n), n, t, r]);
      }

      function O(n) {
        return c("isSimple", [e(n), n]);
      }

      function h(_x7) {
        return _h.apply(this, arguments);
      }

      function _h() {
        _h = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee5(n) {
          return regeneratorRuntime.wrap(function _callee5$(_context5) {
            while (1) {
              switch (_context5.prev = _context5.next) {
                case 0:
                  _context5.t0 = a;
                  _context5.next = 3;
                  return c("simplify", [e(n), n]);

                case 3:
                  _context5.t1 = _context5.sent;
                  return _context5.abrupt("return", (0, _context5.t0)(_context5.t1));

                case 5:
                case "end":
                  return _context5.stop();
              }
            }
          }, _callee5);
        }));
        return _h.apply(this, arguments);
      }

      function v(_x8) {
        return _v.apply(this, arguments);
      }

      function _v() {
        _v = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee6(n) {
          var t,
              _args6 = arguments;
          return regeneratorRuntime.wrap(function _callee6$(_context6) {
            while (1) {
              switch (_context6.prev = _context6.next) {
                case 0:
                  t = _args6.length > 1 && _args6[1] !== undefined ? _args6[1] : !1;
                  _context6.t0 = a;
                  _context6.next = 4;
                  return c("convexHull", [e(n), n, t]);

                case 4:
                  _context6.t1 = _context6.sent;
                  return _context6.abrupt("return", (0, _context6.t0)(_context6.t1));

                case 6:
                case "end":
                  return _context6.stop();
              }
            }
          }, _callee6);
        }));
        return _v.apply(this, arguments);
      }

      function J(_x9, _x10) {
        return _J.apply(this, arguments);
      }

      function _J() {
        _J = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee7(n, t) {
          return regeneratorRuntime.wrap(function _callee7$(_context7) {
            while (1) {
              switch (_context7.prev = _context7.next) {
                case 0:
                  _context7.t0 = a;
                  _context7.next = 3;
                  return c("difference", [e(n), n, t]);

                case 3:
                  _context7.t1 = _context7.sent;
                  return _context7.abrupt("return", (0, _context7.t0)(_context7.t1));

                case 5:
                case "end":
                  return _context7.stop();
              }
            }
          }, _callee7);
        }));
        return _J.apply(this, arguments);
      }

      function N(_x11, _x12) {
        return _N.apply(this, arguments);
      }

      function _N() {
        _N = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee8(n, t) {
          return regeneratorRuntime.wrap(function _callee8$(_context8) {
            while (1) {
              switch (_context8.prev = _context8.next) {
                case 0:
                  _context8.t0 = a;
                  _context8.next = 3;
                  return c("symmetricDifference", [e(n), n, t]);

                case 3:
                  _context8.t1 = _context8.sent;
                  return _context8.abrupt("return", (0, _context8.t0)(_context8.t1));

                case 5:
                case "end":
                  return _context8.stop();
              }
            }
          }, _callee8);
        }));
        return _N.apply(this, arguments);
      }

      function R(_x13, _x14) {
        return _R.apply(this, arguments);
      }

      function _R() {
        _R = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee9(n, t) {
          return regeneratorRuntime.wrap(function _callee9$(_context9) {
            while (1) {
              switch (_context9.prev = _context9.next) {
                case 0:
                  _context9.t0 = a;
                  _context9.next = 3;
                  return c("intersect", [e(n), n, t]);

                case 3:
                  _context9.t1 = _context9.sent;
                  return _context9.abrupt("return", (0, _context9.t0)(_context9.t1));

                case 5:
                case "end":
                  return _context9.stop();
              }
            }
          }, _callee9);
        }));
        return _R.apply(this, arguments);
      }

      function E(_x15) {
        return _E.apply(this, arguments);
      }

      function _E() {
        _E = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee10(n) {
          var t,
              r,
              _args10 = arguments;
          return regeneratorRuntime.wrap(function _callee10$(_context10) {
            while (1) {
              switch (_context10.prev = _context10.next) {
                case 0:
                  t = _args10.length > 1 && _args10[1] !== undefined ? _args10[1] : null;

                  r = function (n, t) {
                    var r;
                    return Array.isArray(n) ? r = n : (r = [], r.push(n), null != t && r.push(t)), r;
                  }(n, t);

                  _context10.t0 = a;
                  _context10.next = 5;
                  return c("union", [e(r), r]);

                case 5:
                  _context10.t1 = _context10.sent;
                  return _context10.abrupt("return", (0, _context10.t0)(_context10.t1));

                case 7:
                case "end":
                  return _context10.stop();
              }
            }
          }, _callee10);
        }));
        return _E.apply(this, arguments);
      }

      function j(_x16, _x17, _x18, _x19, _x20, _x21) {
        return _j.apply(this, arguments);
      }

      function _j() {
        _j = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee11(n, t, r, i, o, u) {
          return regeneratorRuntime.wrap(function _callee11$(_context11) {
            while (1) {
              switch (_context11.prev = _context11.next) {
                case 0:
                  _context11.t0 = a;
                  _context11.next = 3;
                  return c("offset", [e(n), n, t, r, i, o, u]);

                case 3:
                  _context11.t1 = _context11.sent;
                  return _context11.abrupt("return", (0, _context11.t0)(_context11.t1));

                case 5:
                case "end":
                  return _context11.stop();
              }
            }
          }, _callee11);
        }));
        return _j.apply(this, arguments);
      }

      function k(_x22, _x23, _x24) {
        return _k.apply(this, arguments);
      }

      function _k() {
        _k = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee12(n, t, r) {
          var i,
              o,
              _args12 = arguments;
          return regeneratorRuntime.wrap(function _callee12$(_context12) {
            while (1) {
              switch (_context12.prev = _context12.next) {
                case 0:
                  i = _args12.length > 3 && _args12[3] !== undefined ? _args12[3] : !1;
                  o = [e(n), n, t, r, i];
                  _context12.t0 = a;
                  _context12.next = 5;
                  return c("buffer", o);

                case 5:
                  _context12.t1 = _context12.sent;
                  return _context12.abrupt("return", (0, _context12.t0)(_context12.t1));

                case 7:
                case "end":
                  return _context12.stop();
              }
            }
          }, _callee12);
        }));
        return _k.apply(this, arguments);
      }

      function I(_x25, _x26, _x27, _x28, _x29, _x30) {
        return _I.apply(this, arguments);
      }

      function _I() {
        _I = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee13(n, t, r, i, o, u) {
          var s;
          return regeneratorRuntime.wrap(function _callee13$(_context13) {
            while (1) {
              switch (_context13.prev = _context13.next) {
                case 0:
                  s = [e(n), n, t, r, i, o, u];
                  _context13.t0 = a;
                  _context13.next = 4;
                  return c("geodesicBuffer", s);

                case 4:
                  _context13.t1 = _context13.sent;
                  return _context13.abrupt("return", (0, _context13.t0)(_context13.t1));

                case 6:
                case "end":
                  return _context13.stop();
              }
            }
          }, _callee13);
        }));
        return _I.apply(this, arguments);
      }

      function V(_x31, _x32) {
        return _V.apply(this, arguments);
      }

      function _V() {
        _V = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee14(t, r) {
          var i,
              a,
              _args14 = arguments;
          return regeneratorRuntime.wrap(function _callee14$(_context14) {
            while (1) {
              switch (_context14.prev = _context14.next) {
                case 0:
                  i = _args14.length > 2 && _args14[2] !== undefined ? _args14[2] : !0;
                  _context14.next = 3;
                  return c("nearestCoordinate", [e(t), t, r, i]);

                case 3:
                  a = _context14.sent;
                  return _context14.abrupt("return", _objectSpread(_objectSpread({}, a), {}, {
                    coordinate: _Point_js__WEBPACK_IMPORTED_MODULE_0__["default"].fromJSON(a.coordinate)
                  }));

                case 5:
                case "end":
                  return _context14.stop();
              }
            }
          }, _callee14);
        }));
        return _V.apply(this, arguments);
      }

      function b(_x33, _x34) {
        return _b.apply(this, arguments);
      }

      function _b() {
        _b = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee15(t, r) {
          var i;
          return regeneratorRuntime.wrap(function _callee15$(_context15) {
            while (1) {
              switch (_context15.prev = _context15.next) {
                case 0:
                  _context15.next = 2;
                  return c("nearestVertex", [e(t), t, r]);

                case 2:
                  i = _context15.sent;
                  return _context15.abrupt("return", _objectSpread(_objectSpread({}, i), {}, {
                    coordinate: _Point_js__WEBPACK_IMPORTED_MODULE_0__["default"].fromJSON(i.coordinate)
                  }));

                case 4:
                case "end":
                  return _context15.stop();
              }
            }
          }, _callee15);
        }));
        return _b.apply(this, arguments);
      }

      function z(_x35, _x36, _x37, _x38) {
        return _z.apply(this, arguments);
      }

      function _z() {
        _z = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee16(t, r, i, a) {
          return regeneratorRuntime.wrap(function _callee16$(_context16) {
            while (1) {
              switch (_context16.prev = _context16.next) {
                case 0:
                  _context16.next = 2;
                  return c("nearestVertices", [e(t), t, r, i, a]);

                case 2:
                  return _context16.abrupt("return", _context16.sent.map(function (t) {
                    return _objectSpread(_objectSpread({}, t), {}, {
                      coordinate: _Point_js__WEBPACK_IMPORTED_MODULE_0__["default"].fromJSON(t.coordinate)
                    });
                  }));

                case 3:
                case "end":
                  return _context16.stop();
              }
            }
          }, _callee16);
        }));
        return _z.apply(this, arguments);
      }

      function D(n) {
        return "xmin" in n ? n.center : "x" in n ? n : n.extent.center;
      }

      function H(_x39, _x40, _x41) {
        return _H.apply(this, arguments);
      }

      function _H() {
        _H = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee17(n, t, r) {
          var e, i, a;
          return regeneratorRuntime.wrap(function _callee17$(_context17) {
            while (1) {
              switch (_context17.prev = _context17.next) {
                case 0:
                  if (!(null == n)) {
                    _context17.next = 2;
                    break;
                  }

                  throw new Error("Illegal Argument Exception");

                case 2:
                  i = n.spatialReference;
                  r = null != (e = r) ? e : D(n);
                  _context17.t0 = n.constructor;
                  _context17.next = 7;
                  return c("rotate", [i, n, t, r]);

                case 7:
                  _context17.t1 = _context17.sent;
                  a = _context17.t0.fromJSON.call(_context17.t0, _context17.t1);
                  return _context17.abrupt("return", (a.spatialReference = i, a));

                case 10:
                case "end":
                  return _context17.stop();
              }
            }
          }, _callee17);
        }));
        return _H.apply(this, arguments);
      }

      function L(_x42, _x43) {
        return _L.apply(this, arguments);
      }

      function _L() {
        _L = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee18(n, t) {
          var r, e, i;
          return regeneratorRuntime.wrap(function _callee18$(_context18) {
            while (1) {
              switch (_context18.prev = _context18.next) {
                case 0:
                  if (!(null == n)) {
                    _context18.next = 2;
                    break;
                  }

                  throw new Error("Illegal Argument Exception");

                case 2:
                  e = n.spatialReference;
                  t = null != (r = t) ? r : D(n);
                  _context18.t0 = n.constructor;
                  _context18.next = 7;
                  return c("flipHorizontal", [e, n, t]);

                case 7:
                  _context18.t1 = _context18.sent;
                  i = _context18.t0.fromJSON.call(_context18.t0, _context18.t1);
                  return _context18.abrupt("return", (i.spatialReference = e, i));

                case 10:
                case "end":
                  return _context18.stop();
              }
            }
          }, _callee18);
        }));
        return _L.apply(this, arguments);
      }

      function q(_x44, _x45) {
        return _q.apply(this, arguments);
      }

      function _q() {
        _q = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee19(n, t) {
          var r, e, i;
          return regeneratorRuntime.wrap(function _callee19$(_context19) {
            while (1) {
              switch (_context19.prev = _context19.next) {
                case 0:
                  if (!(null == n)) {
                    _context19.next = 2;
                    break;
                  }

                  throw new Error("Illegal Argument Exception");

                case 2:
                  e = n.spatialReference;
                  t = null != (r = t) ? r : D(n);
                  _context19.t0 = n.constructor;
                  _context19.next = 7;
                  return c("flipVertical", [e, n, t]);

                case 7:
                  _context19.t1 = _context19.sent;
                  i = _context19.t0.fromJSON.call(_context19.t0, _context19.t1);
                  return _context19.abrupt("return", (i.spatialReference = e, i));

                case 10:
                case "end":
                  return _context19.stop();
              }
            }
          }, _callee19);
        }));
        return _q.apply(this, arguments);
      }

      function B(_x46, _x47, _x48, _x49) {
        return _B.apply(this, arguments);
      }

      function _B() {
        _B = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee20(n, t, r, i) {
          return regeneratorRuntime.wrap(function _callee20$(_context20) {
            while (1) {
              switch (_context20.prev = _context20.next) {
                case 0:
                  _context20.t0 = a;
                  _context20.next = 3;
                  return c("generalize", [e(n), n, t, r, i]);

                case 3:
                  _context20.t1 = _context20.sent;
                  return _context20.abrupt("return", (0, _context20.t0)(_context20.t1));

                case 5:
                case "end":
                  return _context20.stop();
              }
            }
          }, _callee20);
        }));
        return _B.apply(this, arguments);
      }

      function C(_x50, _x51, _x52) {
        return _C.apply(this, arguments);
      }

      function _C() {
        _C = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee21(n, t, r) {
          return regeneratorRuntime.wrap(function _callee21$(_context21) {
            while (1) {
              switch (_context21.prev = _context21.next) {
                case 0:
                  _context21.t0 = a;
                  _context21.next = 3;
                  return c("densify", [e(n), n, t, r]);

                case 3:
                  _context21.t1 = _context21.sent;
                  return _context21.abrupt("return", (0, _context21.t0)(_context21.t1));

                case 5:
                case "end":
                  return _context21.stop();
              }
            }
          }, _callee21);
        }));
        return _C.apply(this, arguments);
      }

      function G(_x53, _x54, _x55) {
        return _G.apply(this, arguments);
      }

      function _G() {
        _G = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee22(n, t, r) {
          var i,
              _args22 = arguments;
          return regeneratorRuntime.wrap(function _callee22$(_context22) {
            while (1) {
              switch (_context22.prev = _context22.next) {
                case 0:
                  i = _args22.length > 3 && _args22[3] !== undefined ? _args22[3] : 0;
                  _context22.t0 = a;
                  _context22.next = 4;
                  return c("geodesicDensify", [e(n), n, t, r, i]);

                case 4:
                  _context22.t1 = _context22.sent;
                  return _context22.abrupt("return", (0, _context22.t0)(_context22.t1));

                case 6:
                case "end":
                  return _context22.stop();
              }
            }
          }, _callee22);
        }));
        return _G.apply(this, arguments);
      }

      function P(n, t) {
        return c("planarArea", [e(n), n, t]);
      }

      function U(n, t) {
        return c("planarLength", [e(n), n, t]);
      }

      function W(n, t, r) {
        return c("geodesicArea", [e(n), n, t, r]);
      }

      function F(n, t, r) {
        return c("geodesicLength", [e(n), n, t, r]);
      }
      /***/

    }
  }]);
})();
//# sourceMappingURL=default~arcade-arcadeAsyncRuntime-js~functions-geomasync-js-es5.js.map