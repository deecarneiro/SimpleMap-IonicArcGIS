(function () {
  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

  function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

  function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

  function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

  function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["views-3d-webgl-engine-lib-edgeRendering-EdgeProcessingWorker-js"], {
    /***/
    "/OIm":
    /*!**********************************************************************!*\
      !*** ./node_modules/@arcgis/core/views/3d/support/meshProcessing.js ***!
      \**********************************************************************/

    /*! exports provided: computeNeighbors */

    /***/
    function OIm(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "computeNeighbors", function () {
        return t;
      });
      /*
      All material copyright ESRI, All Rights Reserved, unless otherwise specified.
      See https://js.arcgis.com/4.18/esri/copyright.txt for details.
      */


      function t(t, n) {
        var o = t.length / 3,
            r = new Uint32Array(n + 1),
            e = new Uint32Array(n + 1),
            c = function c(t, n) {
          t < n ? r[t + 1]++ : e[n + 1]++;
        };

        for (var _n = 0; _n < o; _n++) {
          var _o = t[3 * _n],
              _r = t[3 * _n + 1],
              _e = t[3 * _n + 2];
          c(_o, _r), c(_r, _e), c(_e, _o);
        }

        var s = 0,
            f = 0;

        for (var _t = 0; _t < n; _t++) {
          var _n2 = r[_t + 1],
              _o2 = e[_t + 1];
          r[_t + 1] = s, e[_t + 1] = f, s += _n2, f += _o2;
        }

        var l = new Uint32Array(6 * o),
            i = r[n],
            a = function a(t, n, o) {
          if (t < n) {
            var _e2 = r[t + 1]++;

            l[2 * _e2] = n, l[2 * _e2 + 1] = o;
          } else {
            var _r2 = e[n + 1]++;

            l[2 * i + 2 * _r2] = t, l[2 * i + 2 * _r2 + 1] = o;
          }
        };

        for (var _n3 = 0; _n3 < o; _n3++) {
          var _o3 = t[3 * _n3],
              _r3 = t[3 * _n3 + 1],
              _e3 = t[3 * _n3 + 2];
          a(_o3, _r3, _n3), a(_r3, _e3, _n3), a(_e3, _o3, _n3);
        }

        var w = function w(t, n) {
          var o = 2 * t,
              r = n - t;

          for (var _t2 = 1; _t2 < r; _t2++) {
            var _n4 = l[o + 2 * _t2],
                _r4 = l[o + 2 * _t2 + 1];

            var _e4 = _t2 - 1;

            for (; _e4 >= 0 && l[o + 2 * _e4] > _n4; _e4--) {
              l[o + 2 * _e4 + 2] = l[o + 2 * _e4], l[o + 2 * _e4 + 3] = l[o + 2 * _e4 + 1];
            }

            l[o + 2 * _e4 + 2] = _n4, l[o + 2 * _e4 + 3] = _r4;
          }
        };

        for (var _t3 = 0; _t3 < n; _t3++) {
          w(r[_t3], r[_t3 + 1]), w(i + e[_t3], i + e[_t3 + 1]);
        }

        var y = new Int32Array(3 * o),
            A = function A(n, o) {
          return n === t[3 * o] ? 0 : n === t[3 * o + 1] ? 1 : n === t[3 * o + 2] ? 2 : -1;
        },
            U = function U(t, n) {
          var o = A(t, n);
          y[3 * n + o] = -1;
        },
            u = function u(t, n, o, r) {
          var e = A(t, n);
          y[3 * n + e] = r;
          var c = A(o, r);
          y[3 * r + c] = n;
        };

        for (var _t4 = 0; _t4 < n; _t4++) {
          var _n5 = r[_t4];
          var _o4 = r[_t4 + 1];
          var _c = e[_t4];
          var _s = e[_t4 + 1];

          for (; _n5 < _o4 && _c < _s;) {
            var _o5 = l[2 * _n5],
                _r5 = l[2 * i + 2 * _c];
            _o5 === _r5 ? (u(_t4, l[2 * _n5 + 1], _r5, l[2 * i + 2 * _c + 1]), _n5++, _c++) : _o5 < _r5 ? (U(_t4, l[2 * _n5 + 1]), _n5++) : (U(_r5, l[2 * i + 2 * _c + 1]), _c++);
          }

          for (; _n5 < _o4;) {
            U(_t4, l[2 * _n5 + 1]), _n5++;
          }

          for (; _c < _s;) {
            U(l[2 * i + 2 * _c], l[2 * i + 2 * _c + 1]), _c++;
          }
        }

        return y;
      }
      /***/

    },

    /***/
    "ABOp":
    /*!************************************************************************************************!*\
      !*** ./node_modules/@arcgis/core/views/3d/webgl-engine/lib/edgeRendering/edgePreprocessing.js ***!
      \************************************************************************************************/

    /*! exports provided: extractEdges */

    /***/
    function ABOp(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "extractEdges", function () {
        return p;
      });
      /* harmony import */


      var _core_typedArrayUtil_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ../../../../../core/typedArrayUtil.js */
      "ohva");
      /* harmony import */


      var _core_arrayUtils_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ../../../../../core/arrayUtils.js */
      "tQ+6");
      /* harmony import */


      var _core_mathUtils_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ../../../../../core/mathUtils.js */
      "OKTS");
      /* harmony import */


      var _chunks_vec3f64_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ../../../../../chunks/vec3f64.js */
      "Cy1f");
      /* harmony import */


      var _chunks_vec3_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ../../../../../chunks/vec3.js */
      "5DEt");
      /* harmony import */


      var _support_mathUtils_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ../../../support/mathUtils.js */
      "aAs6");
      /*
      All material copyright ESRI, All Rights Reserved, unless otherwise specified.
      See https://js.arcgis.com/4.18/esri/copyright.txt for details.
      */


      function p(n, r, m) {
        var p = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : w;

        var y = n.vertices.position,
            I = n.vertices.componentIndex,
            V = Object(_core_mathUtils_js__WEBPACK_IMPORTED_MODULE_2__["deg2rad"])(p.anglePlanar),
            j = Object(_core_mathUtils_js__WEBPACK_IMPORTED_MODULE_2__["deg2rad"])(p.angleSignificantEdge),
            N = Math.cos(j),
            x = Math.cos(V),
            F = A.edge,
            U = F.position0,
            k = F.position1,
            E = F.faceNormal0,
            D = F.faceNormal1,
            M = function (e) {
          var t = e.faces.length / 3,
              o = e.vertices.position,
              n = e.faces,
              r = v.v0,
              s = v.v1,
              c = v.v2,
              a = new Float32Array(3 * t);

          for (var _e5 = 0; _e5 < t; _e5++) {
            var _t5 = n[3 * _e5 + 0],
                i = n[3 * _e5 + 1],
                _m = n[3 * _e5 + 2];
            o.getVec(_t5, r), o.getVec(i, s), o.getVec(_m, c), Object(_chunks_vec3_js__WEBPACK_IMPORTED_MODULE_4__["f"])(s, s, r), Object(_chunks_vec3_js__WEBPACK_IMPORTED_MODULE_4__["f"])(c, c, r), Object(_chunks_vec3_js__WEBPACK_IMPORTED_MODULE_4__["c"])(r, s, c), Object(_chunks_vec3_js__WEBPACK_IMPORTED_MODULE_4__["n"])(r, r), a[3 * _e5 + 0] = r[0], a[3 * _e5 + 1] = r[1], a[3 * _e5 + 2] = r[2];
          }

          return a;
        }(n),
            P = function (e) {
          var t = e.faces.length / 3,
              o = e.faces,
              n = e.neighbors;
          var r = 0;

          for (var _e6 = 0; _e6 < t; _e6++) {
            var _t6 = n[3 * _e6 + 0],
                _s2 = n[3 * _e6 + 1],
                _c2 = n[3 * _e6 + 2],
                a = o[3 * _e6 + 0],
                i = o[3 * _e6 + 1],
                l = o[3 * _e6 + 2];
            r += -1 === _t6 || a < i ? 1 : 0, r += -1 === _s2 || i < l ? 1 : 0, r += -1 === _c2 || l < a ? 1 : 0;
          }

          var s = new Int32Array(4 * r);
          var c = 0;

          for (var _e7 = 0; _e7 < t; _e7++) {
            var _t7 = n[3 * _e7 + 0],
                _r6 = n[3 * _e7 + 1],
                _a = n[3 * _e7 + 2],
                _i = o[3 * _e7 + 0],
                _l = o[3 * _e7 + 1],
                g = o[3 * _e7 + 2];
            (-1 === _t7 || _i < _l) && (s[c++] = _i, s[c++] = _l, s[c++] = _e7, s[c++] = _t7), (-1 === _r6 || _l < g) && (s[c++] = _l, s[c++] = g, s[c++] = _e7, s[c++] = _r6), (-1 === _a || g < _i) && (s[c++] = g, s[c++] = _i, s[c++] = _e7, s[c++] = _a);
          }

          return s;
        }(n),
            S = P.length / 4,
            b = r.allocate(S);

        var L = 0;
        var q = S,
            z = m.allocate(q);
        var B = 0,
            C = 0,
            G = 0;
        var H = Object(_core_arrayUtils_js__WEBPACK_IMPORTED_MODULE_1__["range"])(0, S),
            J = new Float32Array(S);
        Object(_core_typedArrayUtil_js__WEBPACK_IMPORTED_MODULE_0__["forEach"])(J, function (e, t, o) {
          y.getVec(P[4 * t + 0], U), y.getVec(P[4 * t + 1], k), o[t] = Object(_chunks_vec3_js__WEBPACK_IMPORTED_MODULE_4__["k"])(U, k);
        }), H.sort(function (e, t) {
          return J[t] - J[e];
        });
        var K = new Array(),
            O = new Array();

        for (var e = 0; e < S; e++) {
          var t = H[e],
              o = J[t],
              _n6 = P[4 * t + 0],
              s = P[4 * t + 1],
              l = P[4 * t + 2],
              g = P[4 * t + 3],
              f = -1 === g;
          if (y.getVec(_n6, U), y.getVec(s, k), f) Object(_chunks_vec3_js__WEBPACK_IMPORTED_MODULE_4__["s"])(E, M[3 * l + 0], M[3 * l + 1], M[3 * l + 2]), Object(_chunks_vec3_js__WEBPACK_IMPORTED_MODULE_4__["g"])(D, E), F.componentIndex = I.get(_n6), F.cosAngle = Object(_chunks_vec3_js__WEBPACK_IMPORTED_MODULE_4__["d"])(E, D);else {
            if (Object(_chunks_vec3_js__WEBPACK_IMPORTED_MODULE_4__["s"])(E, M[3 * l + 0], M[3 * l + 1], M[3 * l + 2]), Object(_chunks_vec3_js__WEBPACK_IMPORTED_MODULE_4__["s"])(D, M[3 * g + 0], M[3 * g + 1], M[3 * g + 2]), F.componentIndex = I.get(_n6), F.cosAngle = Object(_chunks_vec3_js__WEBPACK_IMPORTED_MODULE_4__["d"])(E, D), h(F, x)) continue;
            F.cosAngle < -.9999 && Object(_chunks_vec3_js__WEBPACK_IMPORTED_MODULE_4__["g"])(D, E);
          }
          C += o, G++, f || u(F, N) ? (r.write(b, L++, F), K.push(o)) : d(F, V) && (m.write(z, B++, F), O.push(o));
        }

        var Q = new Float32Array(K.reverse()),
            R = new Float32Array(O.reverse());
        return {
          regular: {
            instancesData: r.trim(b, L),
            lodInfo: {
              lengths: Q
            }
          },
          silhouette: {
            instancesData: m.trim(z, B),
            lodInfo: {
              lengths: R
            }
          },
          averageEdgeLength: C / G
        };
      }

      function u(e, t) {
        return e.cosAngle < t;
      }

      function h(e, t) {
        return e.cosAngle > t;
      }

      function d(e, t) {
        var o = Object(_core_mathUtils_js__WEBPACK_IMPORTED_MODULE_2__["acosClamped"])(e.cosAngle),
            r = A.fwd,
            s = A.ortho;
        Object(_support_mathUtils_js__WEBPACK_IMPORTED_MODULE_5__["directionFromTo"])(r, e.position1, e.position0);
        return o * (Object(_chunks_vec3_js__WEBPACK_IMPORTED_MODULE_4__["d"])(Object(_chunks_vec3_js__WEBPACK_IMPORTED_MODULE_4__["c"])(s, e.faceNormal0, e.faceNormal1), r) > 0 ? -1 : 1) > t;
      }

      var A = {
        edge: {
          position0: Object(_chunks_vec3f64_js__WEBPACK_IMPORTED_MODULE_3__["c"])(),
          position1: Object(_chunks_vec3f64_js__WEBPACK_IMPORTED_MODULE_3__["c"])(),
          faceNormal0: Object(_chunks_vec3f64_js__WEBPACK_IMPORTED_MODULE_3__["c"])(),
          faceNormal1: Object(_chunks_vec3f64_js__WEBPACK_IMPORTED_MODULE_3__["c"])(),
          componentIndex: 0,
          cosAngle: 0
        },
        ortho: Object(_chunks_vec3f64_js__WEBPACK_IMPORTED_MODULE_3__["c"])(),
        fwd: Object(_chunks_vec3f64_js__WEBPACK_IMPORTED_MODULE_3__["c"])()
      },
          v = {
        v0: Object(_chunks_vec3f64_js__WEBPACK_IMPORTED_MODULE_3__["c"])(),
        v1: Object(_chunks_vec3f64_js__WEBPACK_IMPORTED_MODULE_3__["c"])(),
        v2: Object(_chunks_vec3f64_js__WEBPACK_IMPORTED_MODULE_3__["c"])()
      },
          w = {
        anglePlanar: 4,
        angleSignificantEdge: 35
      };
      /***/
    },

    /***/
    "BICm":
    /*!***************************************************************************!*\
      !*** ./node_modules/@arcgis/core/views/3d/support/buffer/workerHelper.js ***!
      \***************************************************************************/

    /*! exports provided: packInterleavedBuffer, packLayout, unpackInterleavedBuffer, unpackLayout */

    /***/
    function BICm(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "packInterleavedBuffer", function () {
        return z;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "packLayout", function () {
        return F;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "unpackInterleavedBuffer", function () {
        return D;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "unpackLayout", function () {
        return G;
      });
      /* harmony import */


      var _BufferView_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ./BufferView.js */
      "VeZB");
      /* harmony import */


      var _InterleavedLayout_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./InterleavedLayout.js */
      "/ADo");
      /*
      All material copyright ESRI, All Rights Reserved, unless otherwise specified.
      See https://js.arcgis.com/4.18/esri/copyright.txt for details.
      */


      function z(e, t) {
        return t.push(e.buffer), {
          buffer: e.buffer,
          layout: F(e.layout)
        };
      }

      function D(e) {
        return G(e.layout).createView(e.buffer);
      }

      function F(e) {
        var t = new Array();
        return e.fields.forEach(function (e, r) {
          var n = _objectSpread(_objectSpread({}, e), {}, {
            constructor: J(e.constructor)
          });

          t.push([r, n]);
        }), {
          stride: e.stride,
          fields: t,
          fieldNames: e.fieldNames
        };
      }

      function G(e) {
        var t = Object(_InterleavedLayout_js__WEBPACK_IMPORTED_MODULE_1__["newLayout"])();
        return t.stride = e.stride, t.fieldNames = e.fieldNames, e.fields.forEach(function (e) {
          return t.fields.set(e[0], _objectSpread(_objectSpread({}, e[1]), {}, {
            constructor: (r = e[1].constructor, K.get(r))
          }));
          var r;
        }), t;
      }

      var H = [_BufferView_js__WEBPACK_IMPORTED_MODULE_0__["BufferViewFloat"], _BufferView_js__WEBPACK_IMPORTED_MODULE_0__["BufferViewVec2f"], _BufferView_js__WEBPACK_IMPORTED_MODULE_0__["BufferViewVec3f"], _BufferView_js__WEBPACK_IMPORTED_MODULE_0__["BufferViewVec4f"], _BufferView_js__WEBPACK_IMPORTED_MODULE_0__["BufferViewMat3f"], _BufferView_js__WEBPACK_IMPORTED_MODULE_0__["BufferViewMat4f"], _BufferView_js__WEBPACK_IMPORTED_MODULE_0__["BufferViewFloat64"], _BufferView_js__WEBPACK_IMPORTED_MODULE_0__["BufferViewVec2f64"], _BufferView_js__WEBPACK_IMPORTED_MODULE_0__["BufferViewVec3f64"], _BufferView_js__WEBPACK_IMPORTED_MODULE_0__["BufferViewVec4f64"], _BufferView_js__WEBPACK_IMPORTED_MODULE_0__["BufferViewMat3f64"], _BufferView_js__WEBPACK_IMPORTED_MODULE_0__["BufferViewMat4f64"], _BufferView_js__WEBPACK_IMPORTED_MODULE_0__["BufferViewUint8"], _BufferView_js__WEBPACK_IMPORTED_MODULE_0__["BufferViewVec2u8"], _BufferView_js__WEBPACK_IMPORTED_MODULE_0__["BufferViewVec3u8"], _BufferView_js__WEBPACK_IMPORTED_MODULE_0__["BufferViewVec4u8"], _BufferView_js__WEBPACK_IMPORTED_MODULE_0__["BufferViewUint16"], _BufferView_js__WEBPACK_IMPORTED_MODULE_0__["BufferViewVec2u16"], _BufferView_js__WEBPACK_IMPORTED_MODULE_0__["BufferViewVec3u16"], _BufferView_js__WEBPACK_IMPORTED_MODULE_0__["BufferViewVec4u16"], _BufferView_js__WEBPACK_IMPORTED_MODULE_0__["BufferViewUint32"], _BufferView_js__WEBPACK_IMPORTED_MODULE_0__["BufferViewVec2u32"], _BufferView_js__WEBPACK_IMPORTED_MODULE_0__["BufferViewVec3u32"], _BufferView_js__WEBPACK_IMPORTED_MODULE_0__["BufferViewVec4u32"], _BufferView_js__WEBPACK_IMPORTED_MODULE_0__["BufferViewInt8"], _BufferView_js__WEBPACK_IMPORTED_MODULE_0__["BufferViewVec2i8"], _BufferView_js__WEBPACK_IMPORTED_MODULE_0__["BufferViewVec3i8"], _BufferView_js__WEBPACK_IMPORTED_MODULE_0__["BufferViewVec4i8"], _BufferView_js__WEBPACK_IMPORTED_MODULE_0__["BufferViewInt16"], _BufferView_js__WEBPACK_IMPORTED_MODULE_0__["BufferViewVec2i16"], _BufferView_js__WEBPACK_IMPORTED_MODULE_0__["BufferViewVec3i16"], _BufferView_js__WEBPACK_IMPORTED_MODULE_0__["BufferViewVec4i16"], _BufferView_js__WEBPACK_IMPORTED_MODULE_0__["BufferViewInt32"], _BufferView_js__WEBPACK_IMPORTED_MODULE_0__["BufferViewVec2i32"], _BufferView_js__WEBPACK_IMPORTED_MODULE_0__["BufferViewVec3i32"], _BufferView_js__WEBPACK_IMPORTED_MODULE_0__["BufferViewVec4i32"]];

      function J(e) {
        return "".concat(e.ElementType, "_").concat(e.ElementCount);
      }

      var K = new Map();
      H.forEach(function (e) {
        return K.set(J(e), e);
      });
      /***/
    },

    /***/
    "DJ1h":
    /*!********************************************************************************************!*\
      !*** ./node_modules/@arcgis/core/views/3d/webgl-engine/lib/edgeRendering/bufferLayouts.js ***!
      \********************************************************************************************/

    /*! exports provided: CommonInstancesLayout, EdgeInputBufferLayout, EdgeShaderAttributeLocations, RegularEdgeInstancesLayout, SilhouetteEdgeInstancesLayout, VertexLayout, glVertexLayout */

    /***/
    function DJ1h(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "CommonInstancesLayout", function () {
        return a;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "EdgeInputBufferLayout", function () {
        return e;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "EdgeShaderAttributeLocations", function () {
        return d;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "RegularEdgeInstancesLayout", function () {
        return r;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "SilhouetteEdgeInstancesLayout", function () {
        return s;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "VertexLayout", function () {
        return i;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "glVertexLayout", function () {
        return t;
      });
      /* harmony import */


      var _support_buffer_glUtil_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ../../../support/buffer/glUtil.js */
      "Lrt+");
      /* harmony import */


      var _support_buffer_InterleavedLayout_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ../../../support/buffer/InterleavedLayout.js */
      "/ADo");
      /*
      All material copyright ESRI, All Rights Reserved, unless otherwise specified.
      See https://js.arcgis.com/4.18/esri/copyright.txt for details.
      */


      var e = Object(_support_buffer_InterleavedLayout_js__WEBPACK_IMPORTED_MODULE_1__["newLayout"])().vec3f("position").u16("componentIndex").u16("_padding"),
          i = Object(_support_buffer_InterleavedLayout_js__WEBPACK_IMPORTED_MODULE_1__["newLayout"])().vec2u8("sideness"),
          t = Object(_support_buffer_glUtil_js__WEBPACK_IMPORTED_MODULE_0__["glLayout"])(i),
          a = Object(_support_buffer_InterleavedLayout_js__WEBPACK_IMPORTED_MODULE_1__["newLayout"])().vec3f("position0").vec3f("position1").u16("componentIndex").u8("variantOffset", {
        glNormalized: !0
      }).u8("variantStroke").u8("variantExtension", {
        glNormalized: !0
      }).u8("_padding", {
        glPadding: !0
      }).u16("_padding2", {
        glPadding: !0
      }),
          r = a.clone().vec3f("normal"),
          s = a.clone().vec3f("normalA").vec3f("normalB"),
          d = {
        position0: 0,
        position1: 1,
        componentIndex: 2,
        variantOffset: 4,
        variantStroke: 5,
        variantExtension: 6,
        normal: 7,
        normalA: 7,
        normalB: 8,
        sideness: 9
      };
      /***/
    },

    /***/
    "InNl":
    /*!***************************************************************************************************!*\
      !*** ./node_modules/@arcgis/core/views/3d/webgl-engine/lib/edgeRendering/EdgeProcessingWorker.js ***!
      \***************************************************************************************************/

    /*! exports provided: work, wrappedWork */

    /***/
    function InNl(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "work", function () {
        return u;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "wrappedWork", function () {
        return a;
      });
      /* harmony import */


      var _geometry_support_meshUtils_deduplicate_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ../../../../../geometry/support/meshUtils/deduplicate.js */
      "jEtK");
      /* harmony import */


      var _bufferLayouts_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./bufferLayouts.js */
      "DJ1h");
      /* harmony import */


      var _edgeBufferWriters_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./edgeBufferWriters.js */
      "fgxy");
      /* harmony import */


      var _support_buffer_workerHelper_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ../../../support/buffer/workerHelper.js */
      "BICm");
      /* harmony import */


      var _support_meshProcessing_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ../../../support/meshProcessing.js */
      "/OIm");
      /* harmony import */


      var _edgePreprocessing_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ./edgePreprocessing.js */
      "ABOp");
      /*
      All material copyright ESRI, All Rights Reserved, unless otherwise specified.
      See https://js.arcgis.com/4.18/esri/copyright.txt for details.
      */


      function a(_x) {
        return _a2.apply(this, arguments);
      }

      function _a2() {
        _a2 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(e) {
          var t, n, s;
          return regeneratorRuntime.wrap(function _callee$(_context) {
            while (1) {
              switch (_context.prev = _context.next) {
                case 0:
                  t = function (e) {
                    return {
                      data: _bufferLayouts_js__WEBPACK_IMPORTED_MODULE_1__["EdgeInputBufferLayout"].createView(e.dataBuffer),
                      originalIndices: "Uint32Array" === e.originalIndicesType ? new Uint32Array(e.originalIndicesBuffer) : "Uint16Array" === e.originalIndicesType ? new Uint16Array(e.originalIndicesBuffer) : void 0,
                      writerSettings: e.writerSettings,
                      skipDeduplicate: e.skipDeduplicate
                    };
                  }(e), n = u(t), s = [t.data.buffer];
                  return _context.abrupt("return", {
                    result: function (e, r) {
                      r.push(e.regular.lodInfo.lengths.buffer), r.push(e.silhouette.lodInfo.lengths.buffer);
                      return {
                        regular: {
                          instancesData: Object(_support_buffer_workerHelper_js__WEBPACK_IMPORTED_MODULE_3__["packInterleavedBuffer"])(e.regular.instancesData, r),
                          lodInfo: {
                            lengths: e.regular.lodInfo.lengths.buffer
                          }
                        },
                        silhouette: {
                          instancesData: Object(_support_buffer_workerHelper_js__WEBPACK_IMPORTED_MODULE_3__["packInterleavedBuffer"])(e.silhouette.instancesData, r),
                          lodInfo: {
                            lengths: e.silhouette.lodInfo.lengths.buffer
                          }
                        },
                        averageEdgeLength: e.averageEdgeLength
                      };
                    }(n, s),
                    transferList: s
                  });

                case 2:
                case "end":
                  return _context.stop();
              }
            }
          }, _callee);
        }));
        return _a2.apply(this, arguments);
      }

      function u(t) {
        var n = function (t, n, i) {
          if (n && i) {
            return {
              faces: i,
              neighbors: Object(_support_meshProcessing_js__WEBPACK_IMPORTED_MODULE_4__["computeNeighbors"])(i, t.count),
              vertices: t
            };
          }

          {
            var _n7 = Object(_geometry_support_meshUtils_deduplicate_js__WEBPACK_IMPORTED_MODULE_0__["deduplicate"])(t.buffer, t.stride / 4, {
              originalIndices: i
            }),
                o = Object(_support_meshProcessing_js__WEBPACK_IMPORTED_MODULE_4__["computeNeighbors"])(_n7.indices, _n7.uniqueCount);

            return {
              faces: _n7.indices,
              neighbors: o,
              vertices: _bufferLayouts_js__WEBPACK_IMPORTED_MODULE_1__["EdgeInputBufferLayout"].createView(_n7.buffer)
            };
          }
        }(t.data, t.skipDeduplicate, t.originalIndices);

        return f.updateSettings(t.writerSettings), c.updateSettings(t.writerSettings), Object(_edgePreprocessing_js__WEBPACK_IMPORTED_MODULE_5__["extractEdges"])(n, f, c);
      }

      var f = new _edgeBufferWriters_js__WEBPACK_IMPORTED_MODULE_2__["RegularEdgeBufferWriter"](),
          c = new _edgeBufferWriters_js__WEBPACK_IMPORTED_MODULE_2__["SilhouetteEdgeBufferWriter"]();
      /***/
    },

    /***/
    "Lrt+":
    /*!*********************************************************************!*\
      !*** ./node_modules/@arcgis/core/views/3d/support/buffer/glUtil.js ***!
      \*********************************************************************/

    /*! exports provided: glLayout */

    /***/
    function Lrt(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "glLayout", function () {
        return o;
      });
      /*
      All material copyright ESRI, All Rights Reserved, unless otherwise specified.
      See https://js.arcgis.com/4.18/esri/copyright.txt for details.
      */


      var t = {
        divisor: 0
      };

      function o(o) {
        var n = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
        n = _objectSpread(_objectSpread({}, t), n);
        var r = o.stride;
        return o.fieldNames.filter(function (t) {
          var e = o.fields.get(t).optional;
          return !(e && e.glPadding);
        }).map(function (t) {
          var i = o.fields.get(t),
              s = i.constructor.ElementCount,
              u = function (t) {
            var o = e[t];
            if (o) return o;
            throw new Error("BufferType not supported in WebGL");
          }(i.constructor.ElementType),
              f = i.offset,
              c = !(!i.optional || !i.optional.glNormalized);

          return {
            name: t,
            stride: r,
            count: s,
            type: u,
            offset: f,
            normalized: c,
            divisor: n.divisor
          };
        });
      }

      var e = {
        u8: 5121,
        u16: 5123,
        u32: 5125,
        i8: 5120,
        i16: 5122,
        i32: 5124,
        f32: 5126
      };
      /***/
    },

    /***/
    "fgxy":
    /*!************************************************************************************************!*\
      !*** ./node_modules/@arcgis/core/views/3d/webgl-engine/lib/edgeRendering/edgeBufferWriters.js ***!
      \************************************************************************************************/

    /*! exports provided: CommonBufferWriter, RegularEdgeBufferWriter, SilhouetteEdgeBufferWriter */

    /***/
    function fgxy(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "CommonBufferWriter", function () {
        return a;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "RegularEdgeBufferWriter", function () {
        return f;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "SilhouetteEdgeBufferWriter", function () {
        return l;
      });
      /* harmony import */


      var _core_RandomLCG_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ../../../../../core/RandomLCG.js */
      "iA3P");
      /* harmony import */


      var _chunks_vec3f64_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ../../../../../chunks/vec3f64.js */
      "Cy1f");
      /* harmony import */


      var _chunks_vec3_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ../../../../../chunks/vec3.js */
      "5DEt");
      /* harmony import */


      var _support_buffer_glUtil_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ../../../support/buffer/glUtil.js */
      "Lrt+");
      /* harmony import */


      var _bufferLayouts_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ./bufferLayouts.js */
      "DJ1h");
      /*
      All material copyright ESRI, All Rights Reserved, unless otherwise specified.
      See https://js.arcgis.com/4.18/esri/copyright.txt for details.
      */


      var a = /*#__PURE__*/function () {
        function a() {
          _classCallCheck(this, a);
        }

        _createClass(a, [{
          key: "updateSettings",
          value: function updateSettings(t) {
            this.settings = t;
          }
        }, {
          key: "write",
          value: function write(t, o, e) {
            var r = function (t) {
              var o = c;
              o[0] = t.position0[0], o[1] = t.position0[1], o[2] = t.position0[2], o[3] = t.position1[0], o[4] = t.position1[1], o[5] = t.position1[2], u[0] = 5381;

              for (var _t8 = 0; _t8 < m.length; _t8++) {
                u[0] = 31 * u[0] + m[_t8];
              }

              return u[0];
            }(e);

            p.seed = r;

            var n = p.getIntRange(0, 255),
                i = p.getIntRange(0, this.settings.variants - 1),
                s = p.getFloat(),
                _a3 = 255 * (.5 * function (t, o) {
              var e = t < 0 ? -1 : 1;
              return Math.pow(Math.abs(t), o) * e;
            }(-(1 - Math.min(s / .7, 1)) + Math.max(0, s - .7) / (1 - .7), 1.2) + .5);

            t.position0.setVec(o, e.position0), t.position1.setVec(o, e.position1), t.componentIndex.set(o, e.componentIndex), t.variantOffset.set(o, n), t.variantStroke.set(o, i), t.variantExtension.set(o, _a3);
          }
        }, {
          key: "trim",
          value: function trim(t, o) {
            return t.slice(0, o);
          }
        }]);

        return a;
      }();

      var c = new Float32Array(6),
          m = new Uint32Array(c.buffer),
          u = new Uint32Array(1);
      var p = new _core_RandomLCG_js__WEBPACK_IMPORTED_MODULE_0__["default"]();

      var f = /*#__PURE__*/function () {
        function f() {
          _classCallCheck(this, f);

          this.commonWriter = new a();
        }

        _createClass(f, [{
          key: "updateSettings",
          value: function updateSettings(t) {
            this.commonWriter.updateSettings(t);
          }
        }, {
          key: "allocate",
          value: function allocate(t) {
            return _bufferLayouts_js__WEBPACK_IMPORTED_MODULE_4__["RegularEdgeInstancesLayout"].createBuffer(t);
          }
        }, {
          key: "write",
          value: function write(t, o, n) {
            this.commonWriter.write(t, o, n), Object(_chunks_vec3_js__WEBPACK_IMPORTED_MODULE_2__["b"])(h, n.faceNormal0, n.faceNormal1), Object(_chunks_vec3_js__WEBPACK_IMPORTED_MODULE_2__["n"])(h, h), t.normal.setVec(o, h);
          }
        }, {
          key: "trim",
          value: function trim(t, o) {
            return this.commonWriter.trim(t, o);
          }
        }]);

        return f;
      }();

      f.Layout = _bufferLayouts_js__WEBPACK_IMPORTED_MODULE_4__["RegularEdgeInstancesLayout"], f.glLayout = Object(_support_buffer_glUtil_js__WEBPACK_IMPORTED_MODULE_3__["glLayout"])(_bufferLayouts_js__WEBPACK_IMPORTED_MODULE_4__["RegularEdgeInstancesLayout"], {
        divisor: 1
      });

      var l = /*#__PURE__*/function () {
        function l() {
          _classCallCheck(this, l);

          this.commonWriter = new a();
        }

        _createClass(l, [{
          key: "updateSettings",
          value: function updateSettings(t) {
            this.commonWriter.updateSettings(t);
          }
        }, {
          key: "allocate",
          value: function allocate(t) {
            return _bufferLayouts_js__WEBPACK_IMPORTED_MODULE_4__["SilhouetteEdgeInstancesLayout"].createBuffer(t);
          }
        }, {
          key: "write",
          value: function write(t, o, e) {
            this.commonWriter.write(t, o, e), t.normalA.setVec(o, e.faceNormal0), t.normalB.setVec(o, e.faceNormal1);
          }
        }, {
          key: "trim",
          value: function trim(t, o) {
            return this.commonWriter.trim(t, o);
          }
        }]);

        return l;
      }();

      l.Layout = _bufferLayouts_js__WEBPACK_IMPORTED_MODULE_4__["SilhouetteEdgeInstancesLayout"], l.glLayout = Object(_support_buffer_glUtil_js__WEBPACK_IMPORTED_MODULE_3__["glLayout"])(_bufferLayouts_js__WEBPACK_IMPORTED_MODULE_4__["SilhouetteEdgeInstancesLayout"], {
        divisor: 1
      });
      var h = Object(_chunks_vec3f64_js__WEBPACK_IMPORTED_MODULE_1__["c"])();
      /***/
    },

    /***/
    "jEtK":
    /*!*****************************************************************************!*\
      !*** ./node_modules/@arcgis/core/geometry/support/meshUtils/deduplicate.js ***!
      \*****************************************************************************/

    /*! exports provided: default, deduplicate */

    /***/
    function jEtK(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "deduplicate", function () {
        return n;
      });
      /* harmony import */


      var _core_mathUtils_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ../../../core/mathUtils.js */
      "OKTS");
      /*
      All material copyright ESRI, All Rights Reserved, unless otherwise specified.
      See https://js.arcgis.com/4.18/esri/copyright.txt for details.
      */


      function n(n, f, i) {
        var u = n.byteLength / (4 * f),
            c = new Uint32Array(n, 0, u * f);
        var s = new Uint32Array(u);
        var a = i && i.minReduction || 0,
            h = i && i.originalIndices || null,
            g = i && i.componentOffsets || null;
        var y = 0;
        if (g) for (var t = 0; t < g.length - 1; t++) {
          var _n8 = g[t + 1] - g[t];

          _n8 > y && (y = _n8);
        } else y = u;
        var U = Math.floor(1.1 * y) + 1;
        (null == o || o.length < 2 * U) && (o = new Uint32Array(Object(_core_mathUtils_js__WEBPACK_IMPORTED_MODULE_0__["nextHighestPowerOfTwo"])(2 * U)));

        for (var _t9 = 0; _t9 < 2 * U; _t9++) {
          o[_t9] = 0;
        }

        var w = 0;
        var A = !!g && !!h,
            m = A ? h.length : u,
            b = A ? new Uint32Array(h.length) : null,
            d = 1.96;
        var p = 0 !== a ? Math.ceil(4 * d * d / (a * a) * a * (1 - a)) : m,
            M = 1,
            q = g ? g[1] : m;

        for (var _t10 = 0; _t10 < m; _t10++) {
          if (_t10 === p) {
            var _n10 = 1 - w / _t10;

            if (_n10 + d * Math.sqrt(_n10 * (1 - _n10) / _t10) < a) return null;
            p *= 2;
          }

          if (_t10 === q) {
            for (var _t11 = 0; _t11 < 2 * U; _t11++) {
              o[_t11] = 0;
            }

            if (h) for (var _t12 = g[M - 1]; _t12 < g[M]; _t12++) {
              b[_t12] = s[h[_t12]];
            }
            q = g[++M];
          }

          var _n9 = A ? h[_t10] : _t10,
              _r7 = _n9 * f,
              _i2 = l(c, _r7, f);

          var _u = _i2 % U,
              _y = w;

          for (; 0 !== o[2 * _u + 1];) {
            if (o[2 * _u] === _i2) {
              var _t13 = o[2 * _u + 1] - 1;

              if (e(c, _r7, _t13 * f, f)) {
                _y = s[_t13];
                break;
              }
            }

            _u++, _u >= U && (_u -= U);
          }

          _y === w && (o[2 * _u] = _i2, o[2 * _u + 1] = _n9 + 1, w++), s[_n9] = _y;
        }

        if (0 !== a && 1 - w / u < a) return null;

        if (A) {
          for (var _t14 = g[M - 1]; _t14 < b.length; _t14++) {
            b[_t14] = s[h[_t14]];
          }

          s = b;
        }

        var x = new Uint32Array(f * w);
        w = 0;

        for (var _t15 = 0; _t15 < m; _t15++) {
          if (s[_t15] === w) {
            r(c, (A ? h[_t15] : _t15) * f, x, w * f, f), w++;
          }
        }

        if (h && !A) {
          var _t16 = new Uint32Array(h.length);

          for (var _n11 = 0; _n11 < _t16.length; _n11++) {
            _t16[_n11] = s[h[_n11]];
          }

          s = _t16;
        }

        return {
          buffer: x.buffer,
          indices: s,
          uniqueCount: w
        };
      }

      function e(t, n, e, r) {
        for (var _l2 = 0; _l2 < r; _l2++) {
          if (t[n + _l2] !== t[e + _l2]) return !1;
        }

        return !0;
      }

      function r(t, n, e, r, l) {
        for (var _o6 = 0; _o6 < l; _o6++) {
          e[r + _o6] = t[n + _o6];
        }
      }

      function l(t, n, e) {
        var r = 0;

        for (var _l3 = 0; _l3 < e; _l3++) {
          r = t[n + _l3] + r | 0, r = r + (r << 11) + (r >>> 2) | 0;
        }

        return r >>> 0;
      }

      var o = null;
      /* harmony default export */

      __webpack_exports__["default"] = n;
      /***/
    }
  }]);
})();
//# sourceMappingURL=views-3d-webgl-engine-lib-edgeRendering-EdgeProcessingWorker-js-es5.js.map