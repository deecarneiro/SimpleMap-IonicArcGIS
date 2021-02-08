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

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["default~WMSLayer-js~layers-WMSLayerView2D-js"], {
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
    "qE7Y":
    /*!**************************************************************!*\
      !*** ./node_modules/@arcgis/core/layers/support/wmsUtils.js ***!
      \**************************************************************/

    /*! exports provided: coordsReversed, fromISODuration, getPopupLayers, isDimensionInterval, isElevationDimension, isGenericDimension, isTimeDimension, parseCapabilities, toISOString */

    /***/
    function qE7Y(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "coordsReversed", function () {
        return o;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "fromISODuration", function () {
        return M;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "getPopupLayers", function () {
        return l;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "isDimensionInterval", function () {
        return y;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "isElevationDimension", function () {
        return A;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "isGenericDimension", function () {
        return E;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "isTimeDimension", function () {
        return S;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "parseCapabilities", function () {
        return s;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "toISOString", function () {
        return w;
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


      var _geometry_SpatialReference_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ../../geometry/SpatialReference.js */
      "WZb1");
      /* harmony import */


      var _geometry_Extent_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ../../geometry/Extent.js */
      "OvF4");
      /*
      All material copyright ESRI, All Rights Reserved, unless otherwise specified.
      See https://js.arcgis.com/4.18/esri/copyright.txt for details.
      */


      var i = [[4001, 4999], [2044, 2045], [2081, 2083], [2085, 2086], [2093, 2093], [2096, 2098], [2105, 2132], [2169, 2170], [2176, 2180], [2193, 2193], [2200, 2200], [2206, 2212], [2319, 2319], [2320, 2462], [2523, 2549], [2551, 2735], [2738, 2758], [2935, 2941], [2953, 2953], [3006, 3030], [3034, 3035], [3058, 3059], [3068, 3068], [3114, 3118], [3126, 3138], [3300, 3301], [3328, 3335], [3346, 3346], [3350, 3352], [3366, 3366], [3416, 3416], [20004, 20032], [20064, 20092], [21413, 21423], [21473, 21483], [21896, 21899], [22171, 22177], [22181, 22187], [22191, 22197], [25884, 25884], [27205, 27232], [27391, 27398], [27492, 27492], [28402, 28432], [28462, 28492], [30161, 30179], [30800, 30800], [31251, 31259], [31275, 31279], [31281, 31290], [31466, 31700]],
          a = {
        84: 4326,
        83: 4269,
        27: 4267
      };

      function s(t) {
        if (!t) return null;
        var n = {
          idCounter: -1
        };

        if ("string" == typeof t) {
          t = new DOMParser().parseFromString(t, "text/xml");
        }

        var i = t.documentElement;

        if ("ServiceExceptionReport" === i.nodeName) {
          var _t = Array.prototype.slice.call(i.childNodes).map(function (e) {
            return e.textContent;
          }).join("\r\n");

          throw new _core_Error_js__WEBPACK_IMPORTED_MODULE_0__["default"]("wmslayer:wms-capabilities-xml-is-not-valid", "The server returned errors when the WMS capabilities were requested.", _t);
        }

        var a = m("Capability", i),
            s = m("Service", i),
            o = m("Request", a);
        if (!a || !s || !o) return null;
        var l = m("Layer", a);
        if (!l) return null;
        var c = "WMS_Capabilities" === i.nodeName || "WMT_MS_Capabilities" === i.nodeName ? i.getAttribute("version") : "1.3.0",
            f = d("Title", s, "") || d("Name", s, ""),
            p = d("AccessConstraints", s, ""),
            N = d("Abstract", s, ""),
            b = parseInt(d("MaxWidth", s, "5000"), 10),
            y = parseInt(d("MaxHeight", s, "5000"), 10),
            A = x(o, "GetMap"),
            E = h(o, "GetMap"),
            I = g(l, c, n);
        var L,
            F = 0;
        if (Array.prototype.slice.call(a.childNodes).forEach(function (e) {
          "Layer" === e.nodeName && (0 === F ? L = e : 1 === F ? (I.name && (I.name = "", I.sublayers.push(g(L, c, n))), I.sublayers.push(g(e, c, n))) : I.sublayers.push(g(e, c, n)), F++);
        }), !I) return null;
        var M, O, w;
        var v = I.fullExtents;

        if (M = I.sublayers, M || (M = []), 0 === M.length && M.push(I), O = I.extent, !O) {
          var e = new _geometry_Extent_js__WEBPACK_IMPORTED_MODULE_3__["default"](M[0].extent);
          I.extent = e.toJSON(), O = I.extent;
        }

        if (w = I.spatialReferences, !w.length && M.length > 0) {
          var _e = function _e(t) {
            var n = [];
            return t.sublayers.forEach(function (t) {
              !n.length && t.spatialReferences.length && (n = t.spatialReferences || _e(t));
            }), n;
          };

          M.forEach(function (t) {
            w.length || (w = t.spatialReferences || _e(t));
          });
        }

        var C = h(o, "GetFeatureInfo");
        var T;

        if (C) {
          var _e2 = x(o, "GetFeatureInfo");

          _e2.indexOf("text/html") > -1 ? T = "text/html" : _e2.indexOf("text/plain") > -1 && (T = "text/plain");
        }

        if (!T) {
          var _e3 = function _e3(t) {
            t && (t.queryable = !1, t.sublayers && t.sublayers.forEach(function (t) {
              _e3(t);
            }));
          };

          _e3(I);
        }

        var R = u(M),
            V = I.minScale || 0,
            _ = I.maxScale || 0,
            U = I.dimensions,
            q = R.reduce(function (e, t) {
          return e.concat(t.dimensions);
        }, []),
            B = U.concat(q).filter(S);

        var D = null;

        if (B.length > 0) {
          var _e4 = Number.POSITIVE_INFINITY,
              _t2 = Number.NEGATIVE_INFINITY;
          B.forEach(function (n) {
            var r = n.extent;
            var i;
            i = r, Array.isArray(i) && i.length > 0 && i[0] instanceof Date ? r.forEach(function (n) {
              _e4 = Math.min(_e4, n.getTime()), _t2 = Math.max(_t2, n.getTime());
            }) : r.forEach(function (n) {
              _e4 = Math.min(_e4, n.min.getTime()), _t2 = Math.max(_t2, n.max.getTime());
            });
          }), D = {
            startTimeField: null,
            endTimeField: null,
            trackIdField: null,
            timeExtent: [_e4, _t2]
          };
        }

        return {
          copyright: p,
          description: N,
          dimensions: U,
          extent: O,
          fullExtents: v,
          featureInfoFormat: T,
          featureInfoUrl: C,
          mapUrl: E,
          maxWidth: b,
          maxHeight: y,
          maxScale: _,
          minScale: V,
          layers: R,
          spatialReferences: w,
          supportedImageFormatTypes: A,
          timeInfo: D,
          title: f,
          version: c
        };
      }

      function o(e) {
        return i.some(function (t) {
          var n = t[0],
              r = t[1];
          return e >= n && e <= r;
        });
      }

      function l(e) {
        return e.length ? e.filter(function (e) {
          return e.popupEnabled && e.name && e.queryable;
        }).map(function (e) {
          return e.name;
        }).join(",") : "";
      }

      function u(e) {
        var t = [];
        return e.forEach(function (e) {
          t.push(e), e.sublayers && e.sublayers.length && (t = t.concat(u(e.sublayers)), delete e.sublayers);
        }), t;
      }

      function c(e, t, n) {
        var r;
        return null != (r = t.getAttribute(e)) ? r : n;
      }

      function m(e, t) {
        for (var n = 0; n < t.childNodes.length; n++) {
          var r = t.childNodes[n];
          if (b(r) && r.nodeName === e) return r;
        }

        return null;
      }

      function f(e, t) {
        var n = [];

        for (var r = 0; r < t.childNodes.length; r++) {
          var _i = t.childNodes[r];
          b(_i) && _i.nodeName === e && n.push(_i);
        }

        return n;
      }

      function d(e, t, n) {
        var r = m(e, t);
        return r ? r.textContent : n;
      }

      function p(e, t, i) {
        if (!e) return null;
        var a = parseFloat(e.getAttribute("minx")),
            s = parseFloat(e.getAttribute("miny")),
            o = parseFloat(e.getAttribute("maxx")),
            l = parseFloat(e.getAttribute("maxy"));
        var u, c, m, f;
        i ? (u = isNaN(s) ? -Number.MAX_VALUE : s, c = isNaN(a) ? -Number.MAX_VALUE : a, m = isNaN(l) ? Number.MAX_VALUE : l, f = isNaN(o) ? Number.MAX_VALUE : o) : (u = isNaN(a) ? -Number.MAX_VALUE : a, c = isNaN(s) ? -Number.MAX_VALUE : s, m = isNaN(o) ? Number.MAX_VALUE : o, f = isNaN(l) ? Number.MAX_VALUE : l);
        var d = new _geometry_SpatialReference_js__WEBPACK_IMPORTED_MODULE_2__["default"]({
          wkid: t
        });
        return new _geometry_Extent_js__WEBPACK_IMPORTED_MODULE_3__["default"]({
          xmin: u,
          ymin: c,
          xmax: m,
          ymax: f,
          spatialReference: d
        });
      }

      function h(e, n) {
        var r = m(n, e);

        if (r) {
          var _e5 = m("DCPType", r);

          if (_e5) {
            var _n = m("HTTP", _e5);

            if (_n) {
              var _e6 = m("Get", _n);

              if (_e6) {
                var _n2 = function (e, t, n, r) {
                  var i = m(e, n);
                  return i ? c(t, i, r) : r;
                }("OnlineResource", "xlink:href", _e6, null);

                if (_n2) return _n2.indexOf("&") === _n2.length - 1 && (_n2 = _n2.substring(0, _n2.length - 1)), function (e, n) {
                  var r = [],
                      i = Object(_core_urlUtils_js__WEBPACK_IMPORTED_MODULE_1__["urlToObject"])(e);

                  for (var _e7 in i.query) {
                    i.query.hasOwnProperty(_e7) && -1 === n.indexOf(_e7.toLowerCase()) && r.push(_e7 + "=" + i.query[_e7]);
                  }

                  return i.path + (r.length ? "?" + r.join("&") : "");
                }(_n2, ["service", "request"]);
              }
            }
          }
        }

        return null;
      }

      function x(e, t) {
        var n = f("Operation", e);

        if (0 === n.length) {
          return f("Format", m(t, e)).map(function (e) {
            return e.textContent;
          });
        }

        var r = [];
        return n.forEach(function (e) {
          if (e.getAttribute("name") === t) {
            f("Format", e).forEach(function (e) {
              r.push(e.textContent);
            });
          }
        }), r;
      }

      function N(e, t, n) {
        var r = m(t, e);
        if (!r) return n;
        var i = r.textContent;
        if (null == i || "" === i) return n;
        var a = Number(i);
        return isNaN(a) ? n : a;
      }

      function g(e, t, i) {
        var s;
        if (!e) return null;
        var l = {
          id: i.idCounter++,
          fullExtents: [],
          parentLayerId: null,
          queryable: "1" === e.getAttribute("queryable"),
          spatialReferences: [],
          sublayers: null
        },
            u = m("LatLonBoundingBox", e),
            h = m("EX_GeographicBoundingBox", e);
        var x = null;
        u && (x = p(u, 4326)), h && (x = new _geometry_Extent_js__WEBPACK_IMPORTED_MODULE_3__["default"](0, 0, 0, 0, new _geometry_SpatialReference_js__WEBPACK_IMPORTED_MODULE_2__["default"]({
          wkid: 4326
        })), x.xmin = parseFloat(d("westBoundLongitude", h, "0")), x.ymin = parseFloat(d("southBoundLatitude", h, "0")), x.xmax = parseFloat(d("eastBoundLongitude", h, "0")), x.ymax = parseFloat(d("northBoundLatitude", h, "0"))), u || h || (x = new _geometry_Extent_js__WEBPACK_IMPORTED_MODULE_3__["default"](-180, -90, 180, 90, new _geometry_SpatialReference_js__WEBPACK_IMPORTED_MODULE_2__["default"]({
          wkid: 4326
        }))), l.minScale = N(e, "MaxScaleDenominator", 0), l.maxScale = N(e, "MinScaleDenominator", 0);
        var b = ["1.0.0", "1.1.0", "1.1.1"].indexOf(t) > -1 ? "SRS" : "CRS";
        return Array.prototype.slice.call(e.childNodes).forEach(function (e) {
          if ("Name" === e.nodeName) l.name = e.textContent || "";else if ("Title" === e.nodeName) l.title = e.textContent || "";else if ("Abstract" === e.nodeName) l.description = e.textContent || "";else if ("BoundingBox" === e.nodeName) {
            var n = e.getAttribute(b);

            if (n && 0 === n.indexOf("EPSG:")) {
              var _r = parseInt(n.substring(5), 10);

              0 === _r || isNaN(_r) || x || (x = "1.3.0" === t ? p(e, _r, o(_r)) : p(e, _r));
            }

            var r = n && n.indexOf(":");

            if (r && r > -1) {
              var _i2 = parseInt(n.substring(r + 1, n.length), 10);

              0 === _i2 || isNaN(_i2) || (_i2 = a[_i2] ? a[_i2] : _i2);

              var _s = "1.3.0" === t ? p(e, _i2, o(_i2)) : p(e, _i2);

              l.fullExtents.push(_s);
            }
          } else if (e.nodeName === b) {
            e.textContent.split(" ").forEach(function (e) {
              0 === (e = e.indexOf(":") > -1 ? parseInt(e.split(":")[1], 10) : parseInt(e, 10)) || isNaN(e) || (a[e] && (e = a[e]), -1 === l.spatialReferences.indexOf(e) && l.spatialReferences.push(e));
            });
          } else if ("Style" !== e.nodeName || l.legendURL) {
            if ("Layer" === e.nodeName) {
              var _n3 = g(e, t, i);

              _n3 && (_n3.parentLayerId = l.id, l.sublayers || (l.sublayers = []), l.sublayers.push(_n3));
            }
          } else {
            var _t3 = m("LegendURL", e);

            if (_t3) {
              var _e8 = m("OnlineResource", _t3);

              _e8 && (l.legendURL = _e8.getAttribute("xlink:href"));
            }
          }
        }), l.extent = null == (s = x) ? void 0 : s.toJSON(), l.dimensions = f("Dimension", e).filter(function (e) {
          return e.getAttribute("name") && e.getAttribute("units") && e.textContent;
        }).map(function (e) {
          var t = e.getAttribute("name"),
              n = e.getAttribute("units"),
              r = e.textContent,
              i = e.getAttribute("unitSymbol"),
              a = e.getAttribute("default"),
              s = "0" !== c("default", e, "0"),
              o = "0" !== c("nearestValue", e, "0"),
              l = "0" !== c("current", e, "0");

          if (/^time$/i.test(t) && /^ISO8601$/i.test(n)) {
            return {
              name: "time",
              units: "ISO8601",
              extent: F(r),
              "default": F(a),
              multipleValues: s,
              nearestValue: o,
              current: l
            };
          }

          if (/^elevation$/i.test(t)) {
            return {
              name: "elevation",
              units: n,
              extent: I(r),
              unitSymbol: i,
              "default": I(a),
              multipleValues: s,
              nearestValue: o
            };
          }

          return {
            name: t,
            units: n,
            extent: L(r),
            unitSymbol: i,
            "default": L(a),
            multipleValues: s,
            nearestValue: o
          };
        }), l;
      }

      function b(e) {
        return e.nodeType === Node.ELEMENT_NODE;
      }

      function y(e) {
        return void 0 !== e.min && void 0 !== e.max;
      }

      function A(e) {
        return "elevation" === e.name;
      }

      function E(e) {
        return "time" !== e.name && "elevation" !== e.name;
      }

      function S(e) {
        return "time" === e.name;
      }

      function I(e) {
        if (!e) return null;
        var t = -1 !== e.indexOf("/"),
            n = e.split(",");
        return t ? n.map(function (e) {
          var t = e.split("/");
          if (t.length < 2) return null;
          return {
            min: parseFloat(t[0]),
            max: parseFloat(t[1]),
            resolution: t.length >= 3 && "0" !== t[2] ? parseFloat(t[2]) : void 0
          };
        }).filter(function (e) {
          return e;
        }) : n.map(function (e) {
          return parseFloat(e);
        });
      }

      function L(e) {
        if (!e) return null;
        var t = -1 !== e.indexOf("/"),
            n = e.split(",");
        return t ? n.map(function (e) {
          var t = e.split("/");
          if (t.length < 2) return null;
          return {
            min: t[0],
            max: t[1],
            resolution: t.length >= 3 && "0" !== t[2] ? t[2] : void 0
          };
        }).filter(function (e) {
          return e;
        }) : n;
      }

      function F(e) {
        if (!e) return null;
        var t = -1 !== e.indexOf("/"),
            n = e.split(",");
        return t ? n.map(function (e) {
          var t = e.split("/");
          if (t.length < 2) return null;
          return {
            min: new Date(t[0]),
            max: new Date(t[1]),
            resolution: t.length >= 3 && "0" !== t[2] ? M(t[2]) : void 0
          };
        }).filter(function (e) {
          return e;
        }) : n.map(function (e) {
          return new Date(e);
        });
      }

      function M(e) {
        var t = e.match(/(?:p(\d+y|\d+(?:.|,)\d+y)?(\d+m|\d+(?:.|,)\d+m)?(\d+d|\d+(?:.|,)\d+d)?)?(?:t(\d+h|\d+(?:.|,)\d+h)?(\d+m|\d+(?:.|,)\d+m)?(\d+s|\d+(?:.|,)\d+s)?)?/i);
        if (!t) return null;
        return {
          years: O(t[1]),
          months: O(t[2]),
          days: O(t[3]),
          hours: O(t[4]),
          minutes: O(t[5]),
          seconds: O(t[6])
        };
      }

      function O(e) {
        if (!e) return 0;
        var t = e.match(/(?:\d+(?:.|,)\d+|\d+)/);
        if (!t) return 0;
        var n = t[0].replace(",", ".");
        return Number(n);
      }

      function w(e) {
        return e.toISOString().replace(/\.[0-9]{3}/, "");
      }
      /***/

    },

    /***/
    "uAeW":
    /*!******************************************************************************!*\
      !*** ./node_modules/@arcgis/core/layers/support/ExportWMSImageParameters.js ***!
      \******************************************************************************/

    /*! exports provided: default */

    /***/
    function uAeW(module, __webpack_exports__, __webpack_require__) {
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


      var _core_accessorSupport_decorators_subclass_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ../../core/accessorSupport/decorators/subclass.js */
      "04ZG");
      /* harmony import */


      var _core_urlUtils_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ../../core/urlUtils.js */
      "4EHJ");
      /* harmony import */


      var _core_uuid_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! ../../core/uuid.js */
      "ju1D");
      /* harmony import */


      var _portal_support_resourceExtension_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! ../../portal/support/resourceExtension.js */
      "9AIY");
      /* harmony import */


      var _core_Accessor_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! ../../core/Accessor.js */
      "/CmD");
      /* harmony import */


      var _core_Handles_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
      /*! ../../core/Handles.js */
      "r0DZ");
      /* harmony import */


      var _commonProperties_js__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
      /*! ./commonProperties.js */
      "IvSi");
      /* harmony import */


      var _wmsUtils_js__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
      /*! ./wmsUtils.js */
      "qE7Y");
      /*
      All material copyright ESRI, All Rights Reserved, unless otherwise specified.
      See https://js.arcgis.com/4.18/esri/copyright.txt for details.
      */


      var o = {
        visible: "visibleSublayers"
      },
          n = [102100, 3857, 102113, 900913],
          p = [3395, 54004];

      var c = /*#__PURE__*/function (_core_Accessor_js__WE) {
        _inherits(c, _core_Accessor_js__WE);

        var _super = _createSuper(c);

        function c() {
          var _this;

          _classCallCheck(this, c);

          _this = _super.apply(this, arguments), _this._layerHandles = new _core_Handles_js__WEBPACK_IMPORTED_MODULE_10__["default"](), _this.extent = null, _this._scale = null, _this.view = null;
          return _this;
        }

        _createClass(c, [{
          key: "layer",
          set: function set(e) {
            var _this2 = this;

            this._get("layer") !== e && (this._set("layer", e), this._layerHandles && (this._layerHandles.removeAll(), this._layerHandles = null), e && (this._layerHandles || (this._layerHandles = new _core_Handles_js__WEBPACK_IMPORTED_MODULE_10__["default"]()), this._layerHandles.add([e.sublayers.on("change", function () {
              return _this2.notifyChange("visibleSublayers");
            }), e.on("wms-sublayer-update", function (e) {
              return _this2.notifyChange(o[e.propertyName]);
            })])));
          }
        }, {
          key: "layers",
          get: function get() {
            var e = this.visibleSublayers;
            return e.filter(function (e) {
              return e.name;
            }).map(function (e) {
              return e.name;
            }).join(",");
          }
        }, {
          key: "scale",
          get: function get() {
            return null != this._scale ? this._scale : this.view && this.view.scale || 0;
          },
          set: function set(e) {
            this.view || (this._scale = e, this.notifyChange("scale"));
          }
        }, {
          key: "version",
          get: function get() {
            return (this._get("version") || 0) + 1;
          }
        }, {
          key: "visibleSublayers",
          get: function get() {
            var e = this.layer,
                s = this.scale,
                t = e.sublayers,
                r = [],
                a = function a(e) {
              var t = e.minScale,
                  l = e.maxScale,
                  i = e.sublayers,
                  o = e.visible;
              o && (0 === s || (0 === t || s <= t) && (0 === l || s >= l)) && (i ? i.forEach(a) : r.unshift(e));
            };

            return null == t || t.forEach(a), r;
          }
        }, {
          key: "wkid",
          get: function get() {
            var e = this.extent,
                s = this.layer,
                t = s.spatialReferences;
            var r = e.spatialReference && e.spatialReference.wkid;
            t && -1 === t.indexOf(r) && e.spatialReference.latestWkid && (r = e.spatialReference.latestWkid);
            var a = n.some(function (e) {
              return e === r;
            });
            if (!t) return r;

            if (a) {
              var _e9 = [];
              t.forEach(function (s) {
                n.indexOf(s) > -1 && _e9.push(s);
              }), _e9.length || t.forEach(function (s) {
                p.indexOf(s) > -1 && _e9.push(s);
              }), r = _e9.length > 0 ? _e9[0] : n[0];
            }

            return r;
          }
        }, {
          key: "toJSON",
          value: function toJSON() {
            var e = this.extent,
                s = this.layer,
                t = this.layers,
                r = s.imageFormat,
                a = s.imageTransparency,
                l = s.spatialReferences,
                o = s.version;
            var n = this.wkid;
            l && -1 === l.indexOf(n) && e.spatialReference.latestWkid && (n = e.spatialReference.latestWkid);
            var p = e.xmin,
                _c = e.ymin,
                y = e.xmax,
                u = e.ymax,
                m = {
              bbox: "1.3.0" === s.version && Object(_wmsUtils_js__WEBPACK_IMPORTED_MODULE_12__["coordsReversed"])(n) ? "".concat(_c, ",").concat(p, ",").concat(u, ",").concat(y) : "".concat(p, ",").concat(_c, ",").concat(y, ",").concat(u),
              format: r,
              request: "GetMap",
              service: "WMS",
              styles: "",
              transparent: a,
              version: o
            };
            return isNaN(n) || ("1.3.0" === o ? m.crs = "EPSG:" + n : m.srs = "EPSG:" + n), _objectSpread(_objectSpread({}, m), {}, {
              layers: t
            });
          }
        }]);

        return c;
      }(_core_Accessor_js__WEBPACK_IMPORTED_MODULE_9__["default"]);

      Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_4__["property"])()], c.prototype, "extent", void 0), Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_4__["property"])()], c.prototype, "layer", null), Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_4__["property"])({
        readOnly: !0,
        dependsOn: ["visibleSublayers"]
      })], c.prototype, "layers", null), Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_4__["property"])({
        type: Number,
        dependsOn: ["view.scale"]
      })], c.prototype, "scale", null), Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_4__["property"])(_commonProperties_js__WEBPACK_IMPORTED_MODULE_11__["combinedViewLayerTimeExtentProperty"])], c.prototype, "timeExtent", void 0), Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_4__["property"])({
        type: Number,
        dependsOn: ["layers", "layer.imageTransparency", "timeExtent"],
        readOnly: !0
      })], c.prototype, "version", null), Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_4__["property"])()], c.prototype, "view", void 0), Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_4__["property"])({
        readOnly: !0,
        dependsOn: ["layer.sublayers", "scale"]
      })], c.prototype, "visibleSublayers", null), Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_4__["property"])({
        dependsOn: [],
        autoTracked: !1
      })], c.prototype, "wkid", null), c = Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_subclass_js__WEBPACK_IMPORTED_MODULE_5__["subclass"])("esri.layers.support.ExportWMSImageParameters")], c);
      var y = c;
      /* harmony default export */

      __webpack_exports__["default"] = y;
      /***/
    }
  }]);
})();
//# sourceMappingURL=default~WMSLayer-js~layers-WMSLayerView2D-js-es5.js.map