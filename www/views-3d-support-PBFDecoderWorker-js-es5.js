(function () {
  function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

  function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

  function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

  function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

  function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

  function _iterableToArrayLimit(arr, i) { if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr))) return; var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

  function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

  function _createForOfIteratorHelper(o, allowArrayLike) { var it; if (typeof Symbol === "undefined" || o[Symbol.iterator] == null) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e5) { throw _e5; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = o[Symbol.iterator](); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e6) { didErr = true; err = _e6; }, f: function f() { try { if (!normalCompletion && it["return"] != null) it["return"](); } finally { if (didErr) throw err; } } }; }

  function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

  function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["views-3d-support-PBFDecoderWorker-js"], {
    /***/
    "8Lmx":
    /*!***************************************************************!*\
      !*** ./node_modules/@arcgis/core/core/byteSizeEstimations.js ***!
      \***************************************************************/

    /*! exports provided: estimateNumberByteSize, estimateStringByteSize */

    /***/
    function Lmx(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "estimateNumberByteSize", function () {
        return t;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "estimateStringByteSize", function () {
        return n;
      });
      /*
      All material copyright ESRI, All Rights Reserved, unless otherwise specified.
      See https://js.arcgis.com/4.18/esri/copyright.txt for details.
      */


      function n(n) {
        return 32 + n.length;
      }

      function t() {
        return 16;
      }
      /***/

    },

    /***/
    "AGtD":
    /*!*******************************************************************************!*\
      !*** ./node_modules/@arcgis/core/tasks/operations/pbfDehydratedFeatureSet.js ***!
      \*******************************************************************************/

    /*! exports provided: DehydratedFeatureSetParserContext */

    /***/
    function AGtD(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "DehydratedFeatureSetParserContext", function () {
        return y;
      });
      /* harmony import */


      var _core_compilerUtils_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ../../core/compilerUtils.js */
      "bJda");
      /* harmony import */


      var _geometry_SpatialReference_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ../../geometry/SpatialReference.js */
      "WZb1");
      /* harmony import */


      var _core_uid_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ../../core/uid.js */
      "8uAX");
      /* harmony import */


      var _layers_support_Field_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ../../layers/support/Field.js */
      "ofM5");
      /* harmony import */


      var _layers_graphics_featureConversionUtils_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ../../layers/graphics/featureConversionUtils.js */
      "ZlUD");
      /* harmony import */


      var _zscale_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ./zscale.js */
      "kUx5");
      /* harmony import */


      var _layers_graphics_dehydratedFeatures_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ../../layers/graphics/dehydratedFeatures.js */
      "GlSV");
      /*
      All material copyright ESRI, All Rights Reserved, unless otherwise specified.
      See https://js.arcgis.com/4.18/esri/copyright.txt for details.
      */


      function u(t, e) {
        return e;
      }

      function l(t, e, r, s) {
        switch (r) {
          case 0:
            return f(t, e + s, 0);

          case 1:
            return "lowerLeft" === t.originPosition ? f(t, e + s, 1) : function (_ref, r, s) {
              var t = _ref.translate,
                  e = _ref.scale;
              return t[s] - r * e[s];
            }(t, e + s, 1);
        }
      }

      function c(t, e, r, s) {
        switch (r) {
          case 2:
            return f(t, e, 2);

          default:
            return l(t, e, r, s);
        }
      }

      function d(t, e, r, s) {
        switch (r) {
          case 2:
            return f(t, e, 3);

          default:
            return l(t, e, r, s);
        }
      }

      function p(t, e, r, s) {
        switch (r) {
          case 3:
            return f(t, e, 3);

          default:
            return c(t, e, r, s);
        }
      }

      function f(_ref2, r, s) {
        var t = _ref2.translate,
            e = _ref2.scale;
        return t[s] + r * e[s];
      }

      var y = /*#__PURE__*/function () {
        function y(t) {
          _classCallCheck(this, y);

          this.options = t, this.geometryTypes = ["point", "multipoint", "polyline", "polygon"], this.previousCoordinate = [0, 0], this.transform = null, this.applyTransform = u, this.lengths = [], this.currentLengthIndex = 0, this.toAddInCurrentPath = 0, this.vertexDimension = 0, this.coordinateBuffer = null, this.coordinateBufferPtr = 0, this.AttributesConstructor = function () {};
        }

        _createClass(y, [{
          key: "createFeatureResult",
          value: function createFeatureResult() {
            return new _layers_graphics_dehydratedFeatures_js__WEBPACK_IMPORTED_MODULE_6__["DehydratedFeatureSetClass"]();
          }
        }, {
          key: "finishFeatureResult",
          value: function finishFeatureResult(t) {
            if (this.options.applyTransform && (t.transform = null), this.AttributesConstructor = function () {}, this.coordinateBuffer = null, this.lengths.length = 0, !t.hasZ) return;
            var e = Object(_zscale_js__WEBPACK_IMPORTED_MODULE_5__["getGeometryZScaler"])(t.geometryType, this.options.sourceSpatialReference, t.spatialReference);

            if (e) {
              var _iterator = _createForOfIteratorHelper(t.features),
                  _step;

              try {
                for (_iterator.s(); !(_step = _iterator.n()).done;) {
                  var r = _step.value;
                  e(r.geometry);
                }
              } catch (err) {
                _iterator.e(err);
              } finally {
                _iterator.f();
              }
            }
          }
        }, {
          key: "createSpatialReference",
          value: function createSpatialReference() {
            return new _geometry_SpatialReference_js__WEBPACK_IMPORTED_MODULE_1__["default"]();
          }
        }, {
          key: "addField",
          value: function addField(t, e) {
            t.fields.push(_layers_support_Field_js__WEBPACK_IMPORTED_MODULE_3__["default"].fromJSON(e));
            var r = t.fields.map(function (t) {
              return t.name;
            });

            this.AttributesConstructor = function () {
              var _iterator2 = _createForOfIteratorHelper(r),
                  _step2;

              try {
                for (_iterator2.s(); !(_step2 = _iterator2.n()).done;) {
                  var _t = _step2.value;
                  this[_t] = null;
                }
              } catch (err) {
                _iterator2.e(err);
              } finally {
                _iterator2.f();
              }
            };
          }
        }, {
          key: "addFeature",
          value: function addFeature(t, e) {
            var r = this.options.maxStringAttributeLength ? this.options.maxStringAttributeLength : 0;
            if (r > 0) for (var _t2 in e.attributes) {
              var s = e.attributes[_t2];
              "string" == typeof s && s.length > r && (e.attributes[_t2] = "");
            }
            t.features.push(e);
          }
        }, {
          key: "addQueryGeometry",
          value: function addQueryGeometry(t, e) {
            var r = e.queryGeometry,
                s = e.queryGeometryType,
                n = Object(_layers_graphics_featureConversionUtils_js__WEBPACK_IMPORTED_MODULE_4__["unquantizeOptimizedGeometry"])(r.clone(), r, !1, !1, this.transform),
                a = Object(_layers_graphics_featureConversionUtils_js__WEBPACK_IMPORTED_MODULE_4__["convertToGeometry"])(n, s, !1, !1);
            var h = null;

            switch (s) {
              case "esriGeometryPoint":
                h = "point";
                break;

              case "esriGeometryPolygon":
                h = "polygon";
                break;

              case "esriGeometryPolyline":
                h = "polyline";
                break;

              case "esriGeometryMultipoint":
                h = "multipoint";
            }

            a.type = h, t.queryGeometryType = s, t.queryGeometry = a;
          }
        }, {
          key: "prepareFeatures",
          value: function prepareFeatures(e) {
            var _this = this;

            switch (this.transform = e.transform, this.options.applyTransform && e.transform && (this.applyTransform = this.deriveApplyTransform(e)), this.vertexDimension = 2, e.hasZ && this.vertexDimension++, e.hasM && this.vertexDimension++, e.geometryType) {
              case "point":
                this.addCoordinate = function (t, e, r) {
                  return _this.addCoordinatePoint(t, e, r);
                }, this.createGeometry = function (t) {
                  return _this.createPointGeometry(t);
                };
                break;

              case "polygon":
                this.addCoordinate = function (t, e, r) {
                  return _this.addCoordinatePolygon(t, e, r);
                }, this.createGeometry = function (t) {
                  return _this.createPolygonGeometry(t);
                };
                break;

              case "polyline":
                this.addCoordinate = function (t, e, r) {
                  return _this.addCoordinatePolyline(t, e, r);
                }, this.createGeometry = function (t) {
                  return _this.createPolylineGeometry(t);
                };
                break;

              case "multipoint":
                this.addCoordinate = function (t, e, r) {
                  return _this.addCoordinateMultipoint(t, e, r);
                }, this.createGeometry = function (t) {
                  return _this.createMultipointGeometry(t);
                };
                break;

              default:
                Object(_core_compilerUtils_js__WEBPACK_IMPORTED_MODULE_0__["neverReached"])(e.geometryType);
            }
          }
        }, {
          key: "createFeature",
          value: function createFeature() {
            return this.lengths.length = 0, this.currentLengthIndex = 0, this.previousCoordinate[0] = 0, this.previousCoordinate[1] = 0, this.coordinateBuffer = null, this.coordinateBufferPtr = 0, new _layers_graphics_dehydratedFeatures_js__WEBPACK_IMPORTED_MODULE_6__["DehydratedFeatureClass"](Object(_core_uid_js__WEBPACK_IMPORTED_MODULE_2__["generateUID"])(), null, new this.AttributesConstructor());
          }
        }, {
          key: "addLength",
          value: function addLength(t, e, r) {
            0 === this.lengths.length && (this.toAddInCurrentPath = e), this.lengths.push(e);
          }
        }, {
          key: "createPointGeometry",
          value: function createPointGeometry(t) {
            var e = {
              type: "point",
              x: 0,
              y: 0,
              spatialReference: t.spatialReference,
              hasZ: !!t.hasZ,
              hasM: !!t.hasM
            };
            return e.hasZ && (e.z = 0), e.hasM && (e.m = 0), e;
          }
        }, {
          key: "addCoordinatePoint",
          value: function addCoordinatePoint(t, e, r) {
            switch (e = this.applyTransform(this.transform, e, r, 0), r) {
              case 0:
                t.x = e;
                break;

              case 1:
                t.y = e;
                break;

              case 2:
                t.hasZ ? t.z = e : t.m = e;
                break;

              case 3:
                t.m = e;
            }
          }
        }, {
          key: "transformPathLikeValue",
          value: function transformPathLikeValue(t, e) {
            var r = 0;
            return e <= 1 && (r = this.previousCoordinate[e], this.previousCoordinate[e] += t), this.applyTransform(this.transform, t, e, r);
          }
        }, {
          key: "addCoordinatePolyline",
          value: function addCoordinatePolyline(t, e, r) {
            this.dehydratedAddPointsCoordinate(t.paths, e, r);
          }
        }, {
          key: "addCoordinatePolygon",
          value: function addCoordinatePolygon(t, e, r) {
            this.dehydratedAddPointsCoordinate(t.rings, e, r);
          }
        }, {
          key: "addCoordinateMultipoint",
          value: function addCoordinateMultipoint(t, e, r) {
            0 === r && t.points.push([]);
            var s = this.transformPathLikeValue(e, r);
            t.points[t.points.length - 1].push(s);
          }
        }, {
          key: "createPolygonGeometry",
          value: function createPolygonGeometry(t) {
            return {
              type: "polygon",
              rings: [[]],
              spatialReference: t.spatialReference,
              hasZ: !!t.hasZ,
              hasM: !!t.hasM
            };
          }
        }, {
          key: "createPolylineGeometry",
          value: function createPolylineGeometry(t) {
            return {
              type: "polyline",
              paths: [[]],
              spatialReference: t.spatialReference,
              hasZ: !!t.hasZ,
              hasM: !!t.hasM
            };
          }
        }, {
          key: "createMultipointGeometry",
          value: function createMultipointGeometry(t) {
            return {
              type: "multipoint",
              points: [],
              spatialReference: t.spatialReference,
              hasZ: !!t.hasZ,
              hasM: !!t.hasM
            };
          }
        }, {
          key: "dehydratedAddPointsCoordinate",
          value: function dehydratedAddPointsCoordinate(t, e, r) {
            if (null === this.coordinateBuffer) {
              var _t3 = this.lengths.reduce(function (t, e) {
                return t + e;
              }, 0);

              this.coordinateBuffer = new Float64Array(_t3 * this.vertexDimension);
            }

            0 === r && 0 == this.toAddInCurrentPath-- && (t.push([]), this.toAddInCurrentPath = this.lengths[++this.currentLengthIndex] - 1, this.previousCoordinate[0] = 0, this.previousCoordinate[1] = 0);
            var s = this.transformPathLikeValue(e, r),
                o = t[t.length - 1];
            0 === r && o.push(new Float64Array(this.coordinateBuffer.buffer, this.coordinateBufferPtr * Float64Array.BYTES_PER_ELEMENT, this.vertexDimension)), this.coordinateBuffer[this.coordinateBufferPtr++] = s;
          }
        }, {
          key: "deriveApplyTransform",
          value: function deriveApplyTransform(t) {
            var e = t.hasZ,
                r = t.hasM;
            return e && r ? p : e ? c : r ? d : l;
          }
        }]);

        return y;
      }();
      /***/

    },

    /***/
    "AIxD":
    /*!*************************************************************************!*\
      !*** ./node_modules/@arcgis/core/geometry/support/quantizationUtils.js ***!
      \*************************************************************************/

    /*! exports provided: equals, getQuantizedBoundsCoordsArray, getQuantizedBoundsCoordsArrayArray, getQuantizedBoundsPaths, getQuantizedBoundsPoints, getQuantizedBoundsRings, quantizeBounds, quantizeExtent, quantizeGeometry, quantizeMultipoint, quantizePaths, quantizePoint, quantizePoints, quantizePolygon, quantizePolyline, quantizeRings, quantizeX, quantizeY, toQuantizationTransform, unquantizeBounds, unquantizeCoordsArray, unquantizeCoordsArrayArray, unquantizeExtent, unquantizeMultipoint, unquantizePaths, unquantizePoint, unquantizePoints, unquantizePolygon, unquantizePolyline, unquantizeRings, unquantizeX, unquantizeY */

    /***/
    function AIxD(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "equals", function () {
        return c;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "getQuantizedBoundsCoordsArray", function () {
        return F;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "getQuantizedBoundsCoordsArrayArray", function () {
        return V;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "getQuantizedBoundsPaths", function () {
        return _;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "getQuantizedBoundsPoints", function () {
        return Y;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "getQuantizedBoundsRings", function () {
        return A;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "quantizeBounds", function () {
        return h;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "quantizeExtent", function () {
        return w;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "quantizeGeometry", function () {
        return d;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "quantizeMultipoint", function () {
        return G;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "quantizePaths", function () {
        return N;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "quantizePoint", function () {
        return L;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "quantizePoints", function () {
        return I;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "quantizePolygon", function () {
        return O;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "quantizePolyline", function () {
        return S;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "quantizeRings", function () {
        return g;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "quantizeX", function () {
        return s;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "quantizeY", function () {
        return f;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "toQuantizationTransform", function () {
        return m;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "unquantizeBounds", function () {
        return M;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "unquantizeCoordsArray", function () {
        return z;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "unquantizeCoordsArrayArray", function () {
        return T;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "unquantizeExtent", function () {
        return j;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "unquantizeMultipoint", function () {
        return U;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "unquantizePaths", function () {
        return P;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "unquantizePoint", function () {
        return k;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "unquantizePoints", function () {
        return E;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "unquantizePolygon", function () {
        return q;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "unquantizePolyline", function () {
        return v;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "unquantizeRings", function () {
        return b;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "unquantizeX", function () {
        return p;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "unquantizeY", function () {
        return y;
      });
      /* harmony import */


      var _jsonUtils_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ./jsonUtils.js */
      "qatw");
      /*
      All material copyright ESRI, All Rights Reserved, unless otherwise specified.
      See https://js.arcgis.com/4.18/esri/copyright.txt for details.
      */


      function i(n) {
        return n && "upperLeft" === n.originPosition;
      }

      var o = function o(n, t, r) {
        return [t, r];
      },
          l = function l(n, t, r) {
        return [t, r, n[2]];
      },
          a = function a(n, t, r) {
        return [t, r, n[2], n[3]];
      };

      function m(n) {
        if (!n) return null;
        return {
          originPosition: "upper-left" === n.originPosition ? "upperLeft" : "lower-left" === n.originPosition ? "lowerLeft" : n.originPosition,
          scale: [n.tolerance, n.tolerance],
          translate: [n.extent.xmin, n.extent.ymax]
        };
      }

      function c(n, t) {
        if (n === t || null == n && null == t) return !0;
        if (null == n || null == t) return !1;
        var r, e, u, o, l, a;
        return i(n) ? (r = n.translate[0], e = n.translate[1], u = n.scale[0]) : (r = n.extent.xmin, e = n.extent.ymax, u = n.tolerance), i(t) ? (o = t.translate[0], l = t.translate[1], a = t.scale[0]) : (o = t.extent.xmin, l = t.extent.ymax, a = t.tolerance), r === o && e === l && u === a;
      }

      function s(_ref3, r) {
        var n = _ref3.scale,
            t = _ref3.translate;
        return Math.round((r - t[0]) / n[0]);
      }

      function f(_ref4, r) {
        var n = _ref4.scale,
            t = _ref4.translate;
        return Math.round((t[1] - r) / n[1]);
      }

      function x(n, t, r) {
        var e = [];
        var u, i, o, l;

        for (var _a = 0; _a < r.length; _a++) {
          var _m = r[_a];
          _a > 0 ? (o = s(n, _m[0]), l = f(n, _m[1]), o === u && l === i || (e.push(t(_m, o - u, l - i)), u = o, i = l)) : (u = s(n, _m[0]), i = f(n, _m[1]), e.push(t(_m, u, i)));
        }

        return e.length > 0 ? e : null;
      }

      function h(n, t, r) {
        return t[0] = s(n, r[0]), t[3] = f(n, r[1]), t[2] = s(n, r[2]), t[1] = f(n, r[3]), t;
      }

      function I(n, t, r, e) {
        return x(n, r ? e ? a : l : e ? l : o, t);
      }

      function g(n, t, r, e) {
        var u = [],
            i = r ? e ? a : l : e ? l : o;

        for (var _r = 0; _r < t.length; _r++) {
          var _e = x(n, i, t[_r]);

          _e && _e.length >= 3 && u.push(_e);
        }

        return u.length ? u : null;
      }

      function N(n, t, r, e) {
        var u = [],
            i = r ? e ? a : l : e ? l : o;

        for (var _r2 = 0; _r2 < t.length; _r2++) {
          var _e2 = x(n, i, t[_r2]);

          _e2 && _e2.length >= 2 && u.push(_e2);
        }

        return u.length ? u : null;
      }

      function p(_ref5, r) {
        var n = _ref5.scale,
            t = _ref5.translate;
        return r * n[0] + t[0];
      }

      function y(_ref6, r) {
        var n = _ref6.scale,
            t = _ref6.translate;
        return t[1] - r * n[1];
      }

      function z(n, t, r) {
        var e = new Array(r.length);
        if (!r.length) return e;

        var _n$scale = _slicedToArray(n.scale, 2),
            u = _n$scale[0],
            i = _n$scale[1];

        var o = p(n, r[0][0]),
            l = y(n, r[0][1]);
        e[0] = t(r[0], o, l);

        for (var _n2 = 1; _n2 < r.length; _n2++) {
          var _a2 = r[_n2];
          o += _a2[0] * u, l -= _a2[1] * i, e[_n2] = t(_a2, o, l);
        }

        return e;
      }

      function T(n, t, r) {
        var e = new Array(r.length);

        for (var u = 0; u < r.length; u++) {
          e[u] = z(n, t, r[u]);
        }

        return e;
      }

      function M(n, t, r) {
        return r ? (t[0] = p(n, r[0]), t[1] = y(n, r[3]), t[2] = p(n, r[2]), t[3] = y(n, r[1]), t) : [p(n, t[0]), y(n, t[3]), p(n, t[2]), y(n, t[1])];
      }

      function E(n, t, r, e) {
        return z(n, r ? e ? a : l : e ? l : o, t);
      }

      function P(n, t, r, e) {
        return T(n, r ? e ? a : l : e ? l : o, t);
      }

      function b(n, t, r, e) {
        return T(n, r ? e ? a : l : e ? l : o, t);
      }

      function F(n, t, r) {
        var _r$ = _slicedToArray(r[0], 2),
            e = _r$[0],
            u = _r$[1],
            i = Math.min(e, t[0]),
            o = Math.min(u, t[1]),
            l = Math.max(e, t[2]),
            a = Math.max(u, t[3]);

        for (var _n3 = 1; _n3 < r.length; _n3++) {
          var _r$_n = _slicedToArray(r[_n3], 2),
              _t4 = _r$_n[0],
              _m2 = _r$_n[1];

          e += _t4, u += _m2, _t4 < 0 && (i = Math.min(i, e)), _t4 > 0 && (l = Math.max(l, e)), _m2 < 0 ? o = Math.min(o, u) : _m2 > 0 && (a = Math.max(a, u));
        }

        return n[0] = i, n[1] = o, n[2] = l, n[3] = a, n;
      }

      function V(n, t) {
        if (!t.length) return null;
        n[0] = n[1] = Number.POSITIVE_INFINITY, n[2] = n[3] = Number.NEGATIVE_INFINITY;

        for (var r = 0; r < t.length; r++) {
          F(n, n, t[r]);
        }

        return n;
      }

      function Y(n) {
        var t = [Number.POSITIVE_INFINITY, Number.POSITIVE_INFINITY, Number.NEGATIVE_INFINITY, Number.NEGATIVE_INFINITY];
        return F(t, t, n);
      }

      function _(n) {
        return V([0, 0, 0, 0], n);
      }

      function A(n) {
        return V([0, 0, 0, 0], n);
      }

      function w(n, t, r, e, u) {
        return t.xmin = s(n, r.xmin), t.ymin = f(n, r.ymin), t.xmax = s(n, r.xmax), t.ymax = f(n, r.ymax), t !== r && (e && (t.zmin = r.zmin, t.zmax = r.zmax), u && (t.mmin = r.mmin, t.mmax = r.mmax)), t;
      }

      function G(n, t, r, e, u) {
        return t.points = I(n, r.points, e, u), t;
      }

      function L(n, t, r, e, u) {
        return t.x = s(n, r.x), t.y = f(n, r.y), t !== r && (e && (t.z = r.z), u && (t.m = r.m)), t;
      }

      function O(n, t, r, e, u) {
        var i = g(n, r.rings, e, u);
        return i ? (t.rings = i, t) : null;
      }

      function S(n, t, r, e, u) {
        var i = N(n, r.paths, e, u);
        return i ? (t.paths = i, t) : null;
      }

      function d(i, o) {
        return i && o ? Object(_jsonUtils_js__WEBPACK_IMPORTED_MODULE_0__["isPoint"])(o) ? L(i, {}, o, !1, !1) : Object(_jsonUtils_js__WEBPACK_IMPORTED_MODULE_0__["isPolyline"])(o) ? S(i, {}, o, !1, !1) : Object(_jsonUtils_js__WEBPACK_IMPORTED_MODULE_0__["isPolygon"])(o) ? O(i, {}, o, !1, !1) : Object(_jsonUtils_js__WEBPACK_IMPORTED_MODULE_0__["isMultipoint"])(o) ? G(i, {}, o, !1, !1) : Object(_jsonUtils_js__WEBPACK_IMPORTED_MODULE_0__["isExtent"])(o) ? w(i, {}, o, !1, !1) : null : null;
      }

      function j(n, t, r, e, u) {
        return t.xmin = p(n, r.xmin), t.ymin = y(n, r.ymin), t.xmax = p(n, r.xmax), t.ymax = y(n, r.ymax), t !== r && (e && (t.zmin = r.zmin, t.zmax = r.zmax), u && (t.mmin = r.mmin, t.mmax = r.mmax)), t;
      }

      function U(n, t, r, e, u) {
        return t.points = E(n, r.points, e, u), t;
      }

      function k(n, t, r, e, u) {
        return t.x = p(n, r.x), t.y = y(n, r.y), t !== r && (e && (t.z = r.z), u && (t.m = r.m)), t;
      }

      function q(n, t, r, e, u) {
        return t.rings = b(n, r.rings, e, u), t;
      }

      function v(n, t, r, e, u) {
        return t.paths = P(n, r.paths, e, u), t;
      }
      /***/

    },

    /***/
    "Ab+v":
    /*!************************************************************************!*\
      !*** ./node_modules/@arcgis/core/views/3d/support/PBFDecoderWorker.js ***!
      \************************************************************************/

    /*! exports provided: default */

    /***/
    function AbV(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony import */


      var _core_promiseUtils_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ../../../core/promiseUtils.js */
      "9MzC");
      /* harmony import */


      var _tasks_operations_pbfQueryUtils_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ../../../tasks/operations/pbfQueryUtils.js */
      "Eo5y");
      /* harmony import */


      var _tasks_operations_pbfDehydratedFeatureSet_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ../../../tasks/operations/pbfDehydratedFeatureSet.js */
      "AGtD");
      /*
      All material copyright ESRI, All Rights Reserved, unless otherwise specified.
      See https://js.arcgis.com/4.18/esri/copyright.txt for details.
      */


      var s = /*#__PURE__*/function () {
        function s() {
          _classCallCheck(this, s);
        }

        _createClass(s, [{
          key: "_parseFeatureQuery",
          value: function _parseFeatureQuery(_s2) {
            var o = Object(_tasks_operations_pbfQueryUtils_js__WEBPACK_IMPORTED_MODULE_1__["parsePBFFeatureQuery"])(_s2.buffer, new _tasks_operations_pbfDehydratedFeatureSet_js__WEBPACK_IMPORTED_MODULE_2__["DehydratedFeatureSetParserContext"](_s2.options)),
                i = _objectSpread(_objectSpread({}, o), {}, {
              spatialReference: o.spatialReference.toJSON(),
              fields: o.fields ? o.fields.map(function (e) {
                return e.toJSON();
              }) : void 0
            });

            return Object(_core_promiseUtils_js__WEBPACK_IMPORTED_MODULE_0__["resolve"])(i);
          }
        }]);

        return s;
      }();

      function o() {
        return new s();
      }
      /* harmony default export */


      __webpack_exports__["default"] = o;
      /***/
    },

    /***/
    "GlSV":
    /*!*************************************************************************!*\
      !*** ./node_modules/@arcgis/core/layers/graphics/dehydratedFeatures.js ***!
      \*************************************************************************/

    /*! exports provided: equals, DehydratedFeatureClass, DehydratedFeatureSetClass, computeAABB, computeAABR, estimateAttributesObjectSize, estimateGeometryObjectSize, estimateSize, expandAABB, expandAABR, fromFeatureSetJSON, fromJSONGeometry, getObjectId, hasGeometry, hasVertices, isDehydratedPoint, isFeatureGeometry, makeDehydratedPoint, numVertices */

    /***/
    function GlSV(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "DehydratedFeatureClass", function () {
        return M;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "DehydratedFeatureSetClass", function () {
        return v;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "computeAABB", function () {
        return P;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "computeAABR", function () {
        return J;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "estimateAttributesObjectSize", function () {
        return R;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "estimateGeometryObjectSize", function () {
        return w;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "estimateSize", function () {
        return S;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "expandAABB", function () {
        return B;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "expandAABR", function () {
        return L;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "fromFeatureSetJSON", function () {
        return F;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "fromJSONGeometry", function () {
        return A;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "getObjectId", function () {
        return U;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "hasGeometry", function () {
        return k;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "hasVertices", function () {
        return O;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "isDehydratedPoint", function () {
        return z;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "isFeatureGeometry", function () {
        return N;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "makeDehydratedPoint", function () {
        return I;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "numVertices", function () {
        return T;
      });
      /* harmony import */


      var _core_has_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ../../core/has.js */
      "wSAH");
      /* harmony import */


      var _core_typedArrayUtil_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ../../core/typedArrayUtil.js */
      "ohva");
      /* harmony import */


      var _core_maybe_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ../../core/maybe.js */
      "srIe");
      /* harmony import */


      var _geometry_SpatialReference_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ../../geometry/SpatialReference.js */
      "WZb1");
      /* harmony import */


      var _geometry_support_typeUtils_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ../../geometry/support/typeUtils.js */
      "dOLD");
      /* harmony import */


      var _core_uid_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ../../core/uid.js */
      "8uAX");
      /* harmony import */


      var _geometry_support_aaBoundingRect_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ../../geometry/support/aaBoundingRect.js */
      "kYAx");
      /* harmony import */


      var _support_Field_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! ../support/Field.js */
      "ofM5");
      /* harmony import */


      var _core_byteSizeEstimations_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! ../../core/byteSizeEstimations.js */
      "8Lmx");
      /* harmony import */


      var _geometry_support_aaBoundingBox_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! ../../geometry/support/aaBoundingBox.js */
      "QmHG");
      /* harmony import */


      var _geometry_support_quantizationUtils_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
      /*! ../../geometry/support/quantizationUtils.js */
      "AIxD");
      /* harmony import */


      var _dehydratedFeatureComparison_js__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
      /*! ./dehydratedFeatureComparison.js */
      "NWPx");
      /* harmony reexport (safe) */


      __webpack_require__.d(__webpack_exports__, "equals", function () {
        return _dehydratedFeatureComparison_js__WEBPACK_IMPORTED_MODULE_11__["equals"];
      });
      /*
      All material copyright ESRI, All Rights Reserved, unless otherwise specified.
      See https://js.arcgis.com/4.18/esri/copyright.txt for details.
      */


      var M = function M(e, t, s) {
        _classCallCheck(this, M);

        this.uid = e, this.geometry = t, this.attributes = s, this.visible = !0, this.objectId = null, this.centroid = null;
      };

      function k(e) {
        return Object(_core_maybe_js__WEBPACK_IMPORTED_MODULE_2__["isSome"])(e.geometry);
      }

      function N(e) {
        return Object(_geometry_support_typeUtils_js__WEBPACK_IMPORTED_MODULE_4__["isFeatureGeometryType"])(e.type);
      }

      var v = function v() {
        _classCallCheck(this, v);

        this.exceededTransferLimit = !1, this.features = [], this.fields = [], this.hasM = !1, this.hasZ = !1, this.geometryType = null, this.objectIdFieldName = null, this.globalIdFieldName = null, this.geometryProperties = null, this.geohashFieldName = null, this.spatialReference = null, this.transform = null;
      };

      function z(e) {
        return "point" === e.type;
      }

      function F(e) {
        var t = _geometry_support_typeUtils_js__WEBPACK_IMPORTED_MODULE_4__["featureGeometryTypeKebabDictionary"].fromJSON(e.geometryType),
            s = _geometry_SpatialReference_js__WEBPACK_IMPORTED_MODULE_3__["default"].fromJSON(e.spatialReference),
            n = e.transform,
            a = e.features.map(function (r) {
          var i = function (e, t, s, r) {
            return {
              uid: Object(_core_uid_js__WEBPACK_IMPORTED_MODULE_5__["generateUID"])(),
              objectId: r && e.attributes ? e.attributes[r] : null,
              attributes: e.attributes,
              geometry: A(e.geometry, t, s),
              visible: !0
            };
          }(r, t, s, e.objectIdFieldName),
              a = i.geometry;

          if (a && n) switch (a.type) {
            case "point":
              i.geometry = Object(_geometry_support_quantizationUtils_js__WEBPACK_IMPORTED_MODULE_10__["unquantizePoint"])(n, a, a, a.hasZ, a.hasM);
              break;

            case "multipoint":
              i.geometry = Object(_geometry_support_quantizationUtils_js__WEBPACK_IMPORTED_MODULE_10__["unquantizeMultipoint"])(n, a, a, a.hasZ, a.hasM);
              break;

            case "polygon":
              i.geometry = Object(_geometry_support_quantizationUtils_js__WEBPACK_IMPORTED_MODULE_10__["unquantizePolygon"])(n, a, a, a.hasZ, a.hasM);
              break;

            case "polyline":
              i.geometry = Object(_geometry_support_quantizationUtils_js__WEBPACK_IMPORTED_MODULE_10__["unquantizePolyline"])(n, a, a, a.hasZ, a.hasM);
          }
          return i;
        });

        return {
          geometryType: t,
          features: a,
          spatialReference: s,
          fields: e.fields ? e.fields.map(function (e) {
            return _support_Field_js__WEBPACK_IMPORTED_MODULE_7__["default"].fromJSON(e);
          }) : null,
          objectIdFieldName: e.objectIdFieldName,
          globalIdFieldName: e.globalIdFieldName,
          geohashFieldName: e.geohashFieldName,
          geometryProperties: e.geometryProperties,
          hasZ: e.hasZ,
          hasM: e.hasM,
          exceededTransferLimit: e.exceededTransferLimit,
          transform: null
        };
      }

      function A(e, t, s) {
        if (!e) return null;

        switch (t) {
          case "point":
            {
              var _t5 = e;
              return {
                x: _t5.x,
                y: _t5.y,
                z: _t5.z,
                m: _t5.m,
                hasZ: null != _t5.z,
                hasM: null != _t5.m,
                type: "point",
                spatialReference: s
              };
            }

          case "polyline":
            {
              var _t6 = e;
              return {
                paths: _t6.paths,
                hasZ: !!_t6.hasZ,
                hasM: !!_t6.hasM,
                type: "polyline",
                spatialReference: s
              };
            }

          case "polygon":
            {
              var _t7 = e;
              return {
                rings: _t7.rings,
                hasZ: !!_t7.hasZ,
                hasM: !!_t7.hasM,
                type: "polygon",
                spatialReference: s
              };
            }

          case "multipoint":
            {
              var _t8 = e;
              return {
                points: _t8.points,
                hasZ: !!_t8.hasZ,
                hasM: !!_t8.hasM,
                type: "multipoint",
                spatialReference: s
              };
            }
        }
      }

      function I(e, t, s, r) {
        return {
          x: e,
          y: t,
          z: s,
          hasZ: null != s,
          hasM: !1,
          spatialReference: r,
          type: "point"
        };
      }

      function R(e) {
        if (!e) return 0;
        var t = 32;

        for (var s in e) {
          if (e.hasOwnProperty(s)) {
            var r = e[s];

            switch (typeof r) {
              case "string":
                t += Object(_core_byteSizeEstimations_js__WEBPACK_IMPORTED_MODULE_8__["estimateStringByteSize"])(r);
                break;

              default:
              case "number":
                t += Object(_core_byteSizeEstimations_js__WEBPACK_IMPORTED_MODULE_8__["estimateNumberByteSize"])();
            }
          }
        }

        return t;
      }

      function w(t) {
        if (Object(_core_maybe_js__WEBPACK_IMPORTED_MODULE_2__["isNone"])(t)) return 0;
        var r = 32;

        switch (t.type) {
          case "point":
            r += 42;
            break;

          case "polyline":
          case "polygon":
            {
              var e = 0;
              var s = 2 + (t.hasZ ? 1 : 0) + (t.hasM ? 1 : 0),
                  n = "polyline" === t.type ? t.paths : t.rings;

              var _iterator3 = _createForOfIteratorHelper(n),
                  _step3;

              try {
                for (_iterator3.s(); !(_step3 = _iterator3.n()).done;) {
                  var _t9 = _step3.value;
                  e += _t9.length;
                }
              } catch (err) {
                _iterator3.e(err);
              } finally {
                _iterator3.f();
              }

              r += 8 * e * s + 64, r += 128 * e, r += 34, r += 32 * (n.length + 1);
              break;
            }

          case "multipoint":
            {
              var _e3 = 2 + (t.hasZ ? 1 : 0) + (t.hasM ? 1 : 0),
                  _s3 = t.points.length;

              r += 8 * _s3 * _e3 + 64, r += 128 * _s3, r += 34, r += 32;
              break;
            }

          case "extent":
            r += 98, t.hasM && (r += 32), t.hasZ && (r += 32);
            break;

          case "mesh":
            r += Object(_core_typedArrayUtil_js__WEBPACK_IMPORTED_MODULE_1__["estimateSize"])(t.vertexAttributes.position), r += Object(_core_typedArrayUtil_js__WEBPACK_IMPORTED_MODULE_1__["estimateSize"])(t.vertexAttributes.normal), r += Object(_core_typedArrayUtil_js__WEBPACK_IMPORTED_MODULE_1__["estimateSize"])(t.vertexAttributes.uv), r += Object(_core_typedArrayUtil_js__WEBPACK_IMPORTED_MODULE_1__["estimateSize"])(t.vertexAttributes.tangent);
        }

        return r;
      }

      function S(e) {
        var t = 32;
        return t += R(e.attributes), t += 3, t += 8 + w(e.geometry), t;
      }

      function T(e) {
        if (Object(_core_maybe_js__WEBPACK_IMPORTED_MODULE_2__["isNone"])(e)) return 0;

        switch (e.type) {
          case "point":
            return 1;

          case "polyline":
            {
              var t = 0;

              var _iterator4 = _createForOfIteratorHelper(e.paths),
                  _step4;

              try {
                for (_iterator4.s(); !(_step4 = _iterator4.n()).done;) {
                  var s = _step4.value;
                  t += s.length;
                }
              } catch (err) {
                _iterator4.e(err);
              } finally {
                _iterator4.f();
              }

              return t;
            }

          case "polygon":
            {
              var _t10 = 0;

              var _iterator5 = _createForOfIteratorHelper(e.rings),
                  _step5;

              try {
                for (_iterator5.s(); !(_step5 = _iterator5.n()).done;) {
                  var _s4 = _step5.value;
                  _t10 += _s4.length;
                }
              } catch (err) {
                _iterator5.e(err);
              } finally {
                _iterator5.f();
              }

              return _t10;
            }

          case "multipoint":
            return e.points.length;

          case "extent":
            return 2;

          case "mesh":
            {
              var _t11 = e.vertexAttributes && e.vertexAttributes.position;

              return _t11 ? _t11.length / 3 : 0;
            }

          default:
            return;
        }
      }

      function O(e) {
        if (!e) return !1;

        switch (e.type) {
          case "extent":
          case "point":
            return !0;

          case "polyline":
            var _iterator6 = _createForOfIteratorHelper(e.paths),
                _step6;

            try {
              for (_iterator6.s(); !(_step6 = _iterator6.n()).done;) {
                var t = _step6.value;
                if (t.length > 0) return !0;
              }
            } catch (err) {
              _iterator6.e(err);
            } finally {
              _iterator6.f();
            }

            return !1;

          case "polygon":
            var _iterator7 = _createForOfIteratorHelper(e.rings),
                _step7;

            try {
              for (_iterator7.s(); !(_step7 = _iterator7.n()).done;) {
                var _t12 = _step7.value;
                if (_t12.length > 0) return !0;
              }
            } catch (err) {
              _iterator7.e(err);
            } finally {
              _iterator7.f();
            }

            return !1;

          case "multipoint":
            return e.points.length > 0;

          case "mesh":
            return e.vertexAttributes && e.vertexAttributes.position && e.vertexAttributes.position.length > 0;

          default:
            return;
        }
      }

      function P(e, t) {
        switch (Object(_geometry_support_aaBoundingBox_js__WEBPACK_IMPORTED_MODULE_9__["empty"])(t), "mesh" === e.type && (e = e.extent), e.type) {
          case "point":
            t[0] = t[3] = e.x, t[1] = t[4] = e.y, e.hasZ && (t[2] = t[5] = e.z);
            break;

          case "polyline":
            for (var s = 0; s < e.paths.length; s++) {
              Object(_geometry_support_aaBoundingBox_js__WEBPACK_IMPORTED_MODULE_9__["expandWithNestedArray"])(t, e.paths[s], e.hasZ);
            }

            break;

          case "polygon":
            for (var _s5 = 0; _s5 < e.rings.length; _s5++) {
              Object(_geometry_support_aaBoundingBox_js__WEBPACK_IMPORTED_MODULE_9__["expandWithNestedArray"])(t, e.rings[_s5], e.hasZ);
            }

            break;

          case "multipoint":
            Object(_geometry_support_aaBoundingBox_js__WEBPACK_IMPORTED_MODULE_9__["expandWithNestedArray"])(t, e.points, e.hasZ);
            break;

          case "extent":
            t[0] = e.xmin, t[1] = e.ymin, t[3] = e.xmax, t[4] = e.ymax, null != e.zmin && (t[2] = e.zmin), null != e.zmax && (t[5] = e.zmax);
        }
      }

      function B(e, t) {
        P(e, q), Object(_geometry_support_aaBoundingBox_js__WEBPACK_IMPORTED_MODULE_9__["expandWithAABB"])(t, q);
      }

      function J(e, t) {
        switch (Object(_geometry_support_aaBoundingRect_js__WEBPACK_IMPORTED_MODULE_6__["empty"])(t), "mesh" === e.type && (e = e.extent), e.type) {
          case "point":
            t[0] = t[2] = e.x, t[1] = t[3] = e.y;
            break;

          case "polyline":
            for (var s = 0; s < e.paths.length; s++) {
              Object(_geometry_support_aaBoundingRect_js__WEBPACK_IMPORTED_MODULE_6__["expandWithNestedArray"])(t, e.paths[s]);
            }

            break;

          case "polygon":
            for (var _s6 = 0; _s6 < e.rings.length; _s6++) {
              Object(_geometry_support_aaBoundingRect_js__WEBPACK_IMPORTED_MODULE_6__["expandWithNestedArray"])(t, e.rings[_s6]);
            }

            break;

          case "multipoint":
            Object(_geometry_support_aaBoundingRect_js__WEBPACK_IMPORTED_MODULE_6__["expandWithNestedArray"])(t, e.points);
            break;

          case "extent":
            t[0] = e.xmin, t[1] = e.ymin, t[2] = e.xmax, t[3] = e.ymax;
        }
      }

      function L(e, t) {
        J(e, C), Object(_geometry_support_aaBoundingRect_js__WEBPACK_IMPORTED_MODULE_6__["expand"])(t, C);
      }

      function U(e, t) {
        return null != e.objectId ? e.objectId : e.attributes && t ? e.attributes[t] : null;
      }

      var q = Object(_geometry_support_aaBoundingBox_js__WEBPACK_IMPORTED_MODULE_9__["create"])(),
          C = Object(_geometry_support_aaBoundingRect_js__WEBPACK_IMPORTED_MODULE_6__["create"])();
      /***/
    },

    /***/
    "NWPx":
    /*!**********************************************************************************!*\
      !*** ./node_modules/@arcgis/core/layers/graphics/dehydratedFeatureComparison.js ***!
      \**********************************************************************************/

    /*! exports provided: equals */

    /***/
    function NWPx(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "equals", function () {
        return i;
      });
      /* harmony import */


      var _core_has_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ../../core/has.js */
      "wSAH");
      /* harmony import */


      var _core_maybe_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ../../core/maybe.js */
      "srIe");
      /*
      All material copyright ESRI, All Rights Reserved, unless otherwise specified.
      See https://js.arcgis.com/4.18/esri/copyright.txt for details.
      */


      function n(e, n) {
        if (e === n) return !0;
        if (null == e || null == n) return !1;
        if (e.length !== n.length) return !1;

        for (var _t13 = 0; _t13 < e.length; _t13++) {
          var _r3 = e[_t13],
              _a3 = n[_t13];
          if (_r3.length !== _a3.length) return !1;

          for (var _e4 = 0; _e4 < _r3.length; _e4++) {
            if (_r3[_e4] !== _a3[_e4]) return !1;
          }
        }

        return !0;
      }

      function t(e, t) {
        if (e === t) return !0;
        if (null == e || null == t) return !1;
        if (e.length !== t.length) return !1;

        for (var _r4 = 0; _r4 < e.length; _r4++) {
          if (!n(e[_r4], t[_r4])) return !1;
        }

        return !0;
      }

      function r(e, n) {
        return e === n || e && n && e.equals(n);
      }

      function a(a, i) {
        if (a === i) return !0;
        if (Object(_core_maybe_js__WEBPACK_IMPORTED_MODULE_1__["isNone"])(a) || Object(_core_maybe_js__WEBPACK_IMPORTED_MODULE_1__["isNone"])(i)) return !1;
        if (a.type !== i.type) return !1;

        switch (a.type) {
          case "point":
            return function (e, n) {
              return !!r(e.spatialReference, n.spatialReference) && e.x === n.x && e.y === n.y && e.z === n.z && e.m === n.m;
            }(a, i);

          case "extent":
            return function (e, n) {
              return e.hasZ === n.hasZ && e.hasM === n.hasM && !!r(e.spatialReference, n.spatialReference) && e.xmin === n.xmin && e.ymin === n.ymin && e.zmin === n.zmin && e.xmax === n.xmax && e.ymax === n.ymax && e.zmax === n.zmax;
            }(a, i);

          case "polyline":
            return function (e, n) {
              return e.hasZ === n.hasZ && e.hasM === n.hasM && !!r(e.spatialReference, n.spatialReference) && t(e.paths, n.paths);
            }(a, i);

          case "polygon":
            return function (e, n) {
              return e.hasZ === n.hasZ && e.hasM === n.hasM && !!r(e.spatialReference, n.spatialReference) && t(e.rings, n.rings);
            }(a, i);

          case "multipoint":
            return function (e, t) {
              return e.hasZ === t.hasZ && e.hasM === t.hasM && !!r(e.spatialReference, t.spatialReference) && n(e.points, t.points);
            }(a, i);

          case "mesh":
            return !1;

          default:
            return;
        }
      }

      function i(e, n) {
        return e === n || null != e && null != n && e.objectId === n.objectId && !!a(e.geometry, n.geometry) && !!function (e, n) {
          if (e === n) return !0;
          if (!e || !n) return !1;
          var t = Object.keys(e),
              r = Object.keys(n);
          if (t.length !== r.length) return !1;

          for (var _i2 = 0, _t14 = t; _i2 < _t14.length; _i2++) {
            var _r5 = _t14[_i2];
            if (e[_r5] !== n[_r5]) return !1;
          }

          return !0;
        }(e.attributes, n.attributes);
      }
      /***/

    },

    /***/
    "QmHG":
    /*!*********************************************************************!*\
      !*** ./node_modules/@arcgis/core/geometry/support/aaBoundingBox.js ***!
      \*********************************************************************/

    /*! exports provided: NEGATIVE_INFINITY, POSITIVE_INFINITY, ZERO, allFinite, center, contains, containsPoint, containsPointWithMargin, create, depth, diameter, empty, equals, expandWithAABB, expandWithBuffer, expandWithNestedArray, expandWithOffset, expandWithRect, expandWithVec3, fromExtent, fromMinMax, fromRect, fromValues, getMax, getMin, height, intersects, intersectsClippingArea, is, isPoint, maximumDimension, offset, scale, set, setMax, setMin, size, toExtent, toRect, width, wrap */

    /***/
    function QmHG(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "NEGATIVE_INFINITY", function () {
        return C;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "POSITIVE_INFINITY", function () {
        return v;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ZERO", function () {
        return D;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "allFinite", function () {
        return s;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "center", function () {
        return g;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "contains", function () {
        return T;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "containsPoint", function () {
        return z;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "containsPointWithMargin", function () {
        return E;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "create", function () {
        return i;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "depth", function () {
        return I;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "diameter", function () {
        return N;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "empty", function () {
        return A;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "equals", function () {
        return S;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "expandWithAABB", function () {
        return o;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "expandWithBuffer", function () {
        return c;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "expandWithNestedArray", function () {
        return x;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "expandWithOffset", function () {
        return M;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "expandWithRect", function () {
        return f;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "expandWithVec3", function () {
        return h;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "fromExtent", function () {
        return u;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "fromMinMax", function () {
        return m;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "fromRect", function () {
        return G;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "fromValues", function () {
        return a;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "getMax", function () {
        return _;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "getMin", function () {
        return Y;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "height", function () {
        return y;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "intersects", function () {
        return b;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "intersectsClippingArea", function () {
        return j;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "is", function () {
        return O;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "isPoint", function () {
        return P;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "maximumDimension", function () {
        return F;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "offset", function () {
        return R;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "scale", function () {
        return V;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "set", function () {
        return w;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "setMax", function () {
        return q;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "setMin", function () {
        return d;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "size", function () {
        return p;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "toExtent", function () {
        return e;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "toRect", function () {
        return B;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "width", function () {
        return l;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "wrap", function () {
        return k;
      });
      /* harmony import */


      var _core_maybe_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ../../core/maybe.js */
      "srIe");
      /* harmony import */


      var _Extent_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ../Extent.js */
      "OvF4");
      /* harmony import */


      var _aaBoundingRect_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./aaBoundingRect.js */
      "kYAx");
      /*
      All material copyright ESRI, All Rights Reserved, unless otherwise specified.
      See https://js.arcgis.com/4.18/esri/copyright.txt for details.
      */


      function i() {
        var n = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : D;
        return [n[0], n[1], n[2], n[3], n[4], n[5]];
      }

      function a(n, t, r, a, u, e) {
        var m = arguments.length > 6 && arguments[6] !== undefined ? arguments[6] : i();
        return m[0] = n, m[1] = t, m[2] = r, m[3] = a, m[4] = u, m[5] = e, m;
      }

      function u(n) {
        var t = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : i();
        return t[0] = n.xmin, t[1] = n.ymin, t[2] = n.zmin, t[3] = n.xmax, t[4] = n.ymax, t[5] = n.zmax, t;
      }

      function e(n, r) {
        var i = isFinite(n[2]) || isFinite(n[5]);
        return new _Extent_js__WEBPACK_IMPORTED_MODULE_1__["default"](i ? {
          xmin: n[0],
          xmax: n[3],
          ymin: n[1],
          ymax: n[4],
          zmin: n[2],
          zmax: n[5],
          spatialReference: r
        } : {
          xmin: n[0],
          xmax: n[3],
          ymin: n[1],
          ymax: n[4],
          spatialReference: r
        });
      }

      function m(n, t) {
        var r = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : i();
        return r[0] = n[0], r[1] = n[1], r[2] = n[2], r[3] = t[0], r[4] = t[1], r[5] = t[2], r;
      }

      function o(n, t) {
        n[0] = Math.min(n[0], t[0]), n[1] = Math.min(n[1], t[1]), n[2] = Math.min(n[2], t[2]), n[3] = Math.max(n[3], t[3]), n[4] = Math.max(n[4], t[4]), n[5] = Math.max(n[5], t[5]);
      }

      function f(n, t) {
        n[0] = Math.min(n[0], t[0]), n[1] = Math.min(n[1], t[1]), n[3] = Math.max(n[3], t[2]), n[4] = Math.max(n[4], t[3]);
      }

      function h(n, t) {
        n[0] = Math.min(n[0], t[0]), n[1] = Math.min(n[1], t[1]), n[2] = Math.min(n[2], t[2]), n[3] = Math.max(n[3], t[0]), n[4] = Math.max(n[4], t[1]), n[5] = Math.max(n[5], t[2]);
      }

      function c(n, t) {
        var r = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 0;
        var i = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : t.length / 3;
        var a = n[0],
            u = n[1],
            e = n[2],
            m = n[3],
            o = n[4],
            f = n[5];

        for (var _n4 = 0; _n4 < i; _n4++) {
          a = Math.min(a, t[r + 3 * _n4]), u = Math.min(u, t[r + 3 * _n4 + 1]), e = Math.min(e, t[r + 3 * _n4 + 2]), m = Math.max(m, t[r + 3 * _n4]), o = Math.max(o, t[r + 3 * _n4 + 1]), f = Math.max(f, t[r + 3 * _n4 + 2]);
        }

        n[0] = a, n[1] = u, n[2] = e, n[3] = m, n[4] = o, n[5] = f;
      }

      function M(n, t, r, i) {
        n[0] = Math.min(n[0], n[0] + t), n[3] = Math.max(n[3], n[3] + t), n[1] = Math.min(n[1], n[1] + r), n[4] = Math.max(n[4], n[4] + r), n[2] = Math.min(n[2], n[2] + i), n[5] = Math.max(n[5], n[5] + i);
      }

      function x(n, t, r) {
        var i = t.length;
        var a = n[0],
            u = n[1],
            e = n[2],
            m = n[3],
            o = n[4],
            f = n[5];
        if (r) for (var _n5 = 0; _n5 < i; _n5++) {
          var _r6 = t[_n5];
          a = Math.min(a, _r6[0]), u = Math.min(u, _r6[1]), e = Math.min(e, _r6[2]), m = Math.max(m, _r6[0]), o = Math.max(o, _r6[1]), f = Math.max(f, _r6[2]);
        } else for (var _n6 = 0; _n6 < i; _n6++) {
          var _r7 = t[_n6];
          a = Math.min(a, _r7[0]), u = Math.min(u, _r7[1]), m = Math.max(m, _r7[0]), o = Math.max(o, _r7[1]);
        }
        n[0] = a, n[1] = u, n[2] = e, n[3] = m, n[4] = o, n[5] = f;
      }

      function s(n) {
        for (var t = 0; t < 6; t++) {
          if (!isFinite(n[t])) return !1;
        }

        return !0;
      }

      function l(n) {
        return n[0] >= n[3] ? 0 : n[3] - n[0];
      }

      function I(n) {
        return n[1] >= n[4] ? 0 : n[4] - n[1];
      }

      function y(n) {
        return n[2] >= n[5] ? 0 : n[5] - n[2];
      }

      function N(n) {
        var t = l(n),
            r = y(n),
            i = I(n);
        return Math.sqrt(t * t + r * r + i * i);
      }

      function g(n) {
        var t = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : [0, 0, 0];
        return t[0] = n[0] + l(n) / 2, t[1] = n[1] + I(n) / 2, t[2] = n[2] + y(n) / 2, t;
      }

      function p(n) {
        var t = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : [0, 0, 0];
        return t[0] = l(n), t[1] = I(n), t[2] = y(n), t;
      }

      function F(n) {
        return Math.max(l(n), y(n), I(n));
      }

      function z(n, t) {
        return t[0] >= n[0] && t[1] >= n[1] && t[2] >= n[2] && t[0] <= n[3] && t[1] <= n[4] && t[2] <= n[5];
      }

      function E(n, t, r) {
        return t[0] >= n[0] - r && t[1] >= n[1] - r && t[2] >= n[2] - r && t[0] <= n[3] + r && t[1] <= n[4] + r && t[2] <= n[5] + r;
      }

      function T(n, t) {
        return t[0] >= n[0] && t[1] >= n[1] && t[2] >= n[2] && t[3] <= n[3] && t[4] <= n[4] && t[5] <= n[5];
      }

      function b(n, t) {
        return Math.max(t[0], n[0]) <= Math.min(t[3], n[3]) && Math.max(t[1], n[1]) <= Math.min(t[4], n[4]) && Math.max(t[2], n[2]) <= Math.min(t[5], n[5]);
      }

      function j(t, r) {
        return !!Object(_core_maybe_js__WEBPACK_IMPORTED_MODULE_0__["isNone"])(r) || b(t, r);
      }

      function R(n, t, r, i) {
        var a = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : n;
        return a[0] = n[0] + t, a[1] = n[1] + r, a[2] = n[2] + i, a[3] = n[3] + t, a[4] = n[4] + r, a[5] = n[5] + i, a;
      }

      function V(n, t) {
        var r = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : n;
        var i = n[0] + l(n) / 2,
            a = n[1] + I(n) / 2,
            u = n[2] + y(n) / 2;
        return r[0] = i + (n[0] - i) * t, r[1] = a + (n[1] - a) * t, r[2] = u + (n[2] - u) * t, r[3] = i + (n[3] - i) * t, r[4] = a + (n[4] - a) * t, r[5] = u + (n[5] - u) * t, r;
      }

      function Y(n, t) {
        return t[0] = n[0], t[1] = n[1], t[2] = n[2], t;
      }

      function _(n, t) {
        return t[0] = n[3], t[1] = n[4], t[2] = n[5], t;
      }

      function d(n, t) {
        var r = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : n;
        return r[0] = t[0], r[1] = t[1], r[2] = t[2], r !== n && (r[3] = n[3], r[4] = n[4], r[5] = n[5]), r;
      }

      function q(n, t) {
        var r = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : n;
        return r[3] = t[0], r[4] = t[1], r[5] = t[2], r !== n && (r[0] = n[0], r[1] = n[1], r[2] = n[2]), n;
      }

      function w(n, t) {
        return n[0] = t[0], n[1] = t[1], n[2] = t[2], n[3] = t[3], n[4] = t[4], n[5] = t[5], n;
      }

      function A(n) {
        return n ? w(n, C) : i(C);
      }

      function B(n, t) {
        return t || (t = Object(_aaBoundingRect_js__WEBPACK_IMPORTED_MODULE_2__["create"])()), t[0] = n[0], t[1] = n[1], t[2] = n[3], t[3] = n[4], t;
      }

      function G(n, t) {
        return n[0] = t[0], n[1] = t[1], n[2] = Number.NEGATIVE_INFINITY, n[3] = t[2], n[4] = t[3], n[5] = Number.POSITIVE_INFINITY, n;
      }

      function O(n) {
        return 6 === n.length;
      }

      function P(n) {
        return 0 === l(n) && 0 === I(n) && 0 === y(n);
      }

      function S(t, r, i) {
        if (Object(_core_maybe_js__WEBPACK_IMPORTED_MODULE_0__["isNone"])(t) || Object(_core_maybe_js__WEBPACK_IMPORTED_MODULE_0__["isNone"])(r)) return t === r;
        if (!O(t) || !O(r)) return !1;

        if (i) {
          for (var n = 0; n < t.length; n++) {
            if (!i(t[n], r[n])) return !1;
          }
        } else for (var _n7 = 0; _n7 < t.length; _n7++) {
          if (t[_n7] !== r[_n7]) return !1;
        }

        return !0;
      }

      function k(n, t, r, i, u, e) {
        return a(n, t, r, i, u, e, H);
      }

      var v = [-1 / 0, -1 / 0, -1 / 0, 1 / 0, 1 / 0, 1 / 0],
          C = [1 / 0, 1 / 0, 1 / 0, -1 / 0, -1 / 0, -1 / 0],
          D = [0, 0, 0, 0, 0, 0],
          H = i();
      /***/
    }
  }]);
})();
//# sourceMappingURL=views-3d-support-PBFDecoderWorker-js-es5.js.map