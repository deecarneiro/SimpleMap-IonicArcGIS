(function () {
  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["geometry-geometryEngine-js"], {
    /***/
    "6lH3":
    /*!**************************************************************!*\
      !*** ./node_modules/@arcgis/core/geometry/geometryEngine.js ***!
      \**************************************************************/

    /*! exports provided: buffer, clip, contains, convexHull, crosses, cut, densify, difference, disjoint, distance, equals, extendedSpatialReferenceInfo, flipHorizontal, flipVertical, generalize, geodesicArea, geodesicBuffer, geodesicDensify, geodesicLength, intersect, intersects, isSimple, nearestCoordinate, nearestVertex, nearestVertices, offset, overlaps, planarArea, planarLength, relate, rotate, simplify, symmetricDifference, touches, union, within */

    /***/
    function lH3(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "buffer", function () {
        return v;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "clip", function () {
        return u;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "contains", function () {
        return o;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "convexHull", function () {
        return E;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "crosses", function () {
        return c;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "cut", function () {
        return i;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "densify", function () {
        return H;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "difference", function () {
        return h;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "disjoint", function () {
        return g;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "distance", function () {
        return f;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "equals", function () {
        return l;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "extendedSpatialReferenceInfo", function () {
        return t;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "flipHorizontal", function () {
        return z;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "flipVertical", function () {
        return B;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "generalize", function () {
        return D;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "geodesicArea", function () {
        return q;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "geodesicBuffer", function () {
        return S;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "geodesicDensify", function () {
        return L;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "geodesicLength", function () {
        return C;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "intersect", function () {
        return y;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "intersects", function () {
        return a;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "isSimple", function () {
        return x;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "nearestCoordinate", function () {
        return j;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "nearestVertex", function () {
        return J;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "nearestVertices", function () {
        return N;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "offset", function () {
        return I;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "overlaps", function () {
        return m;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "planarArea", function () {
        return b;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "planarLength", function () {
        return k;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "relate", function () {
        return d;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "rotate", function () {
        return V;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "simplify", function () {
        return w;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "symmetricDifference", function () {
        return A;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "touches", function () {
        return s;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "union", function () {
        return R;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "within", function () {
        return p;
      });
      /* harmony import */


      var _chunks_geometryEngineBase_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ../chunks/geometryEngineBase.js */
      "9gar");
      /* harmony import */


      var _geometryAdapters_hydrated_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./geometryAdapters/hydrated.js */
      "dZC4");
      /*
      All material copyright ESRI, All Rights Reserved, unless otherwise specified.
      See https://js.arcgis.com/4.18/esri/copyright.txt for details.
      */


      function r(n) {
        return Array.isArray(n) ? n[0].spatialReference : n && n.spatialReference;
      }

      function t(e) {
        return _chunks_geometryEngineBase_js__WEBPACK_IMPORTED_MODULE_0__["a"].extendedSpatialReferenceInfo(e);
      }

      function u(t, u) {
        return _chunks_geometryEngineBase_js__WEBPACK_IMPORTED_MODULE_0__["a"].clip(_geometryAdapters_hydrated_js__WEBPACK_IMPORTED_MODULE_1__["hydratedAdapter"], r(t), t, u);
      }

      function i(t, u) {
        return _chunks_geometryEngineBase_js__WEBPACK_IMPORTED_MODULE_0__["a"].cut(_geometryAdapters_hydrated_js__WEBPACK_IMPORTED_MODULE_1__["hydratedAdapter"], r(t), t, u);
      }

      function o(t, u) {
        return _chunks_geometryEngineBase_js__WEBPACK_IMPORTED_MODULE_0__["a"].contains(_geometryAdapters_hydrated_js__WEBPACK_IMPORTED_MODULE_1__["hydratedAdapter"], r(t), t, u);
      }

      function c(t, u) {
        return _chunks_geometryEngineBase_js__WEBPACK_IMPORTED_MODULE_0__["a"].crosses(_geometryAdapters_hydrated_js__WEBPACK_IMPORTED_MODULE_1__["hydratedAdapter"], r(t), t, u);
      }

      function f(t, u, i) {
        return _chunks_geometryEngineBase_js__WEBPACK_IMPORTED_MODULE_0__["a"].distance(_geometryAdapters_hydrated_js__WEBPACK_IMPORTED_MODULE_1__["hydratedAdapter"], r(t), t, u, i);
      }

      function l(t, u) {
        return _chunks_geometryEngineBase_js__WEBPACK_IMPORTED_MODULE_0__["a"].equals(_geometryAdapters_hydrated_js__WEBPACK_IMPORTED_MODULE_1__["hydratedAdapter"], r(t), t, u);
      }

      function a(t, u) {
        return _chunks_geometryEngineBase_js__WEBPACK_IMPORTED_MODULE_0__["a"].intersects(_geometryAdapters_hydrated_js__WEBPACK_IMPORTED_MODULE_1__["hydratedAdapter"], r(t), t, u);
      }

      function s(t, u) {
        return _chunks_geometryEngineBase_js__WEBPACK_IMPORTED_MODULE_0__["a"].touches(_geometryAdapters_hydrated_js__WEBPACK_IMPORTED_MODULE_1__["hydratedAdapter"], r(t), t, u);
      }

      function p(t, u) {
        return _chunks_geometryEngineBase_js__WEBPACK_IMPORTED_MODULE_0__["a"].within(_geometryAdapters_hydrated_js__WEBPACK_IMPORTED_MODULE_1__["hydratedAdapter"], r(t), t, u);
      }

      function g(t, u) {
        return _chunks_geometryEngineBase_js__WEBPACK_IMPORTED_MODULE_0__["a"].disjoint(_geometryAdapters_hydrated_js__WEBPACK_IMPORTED_MODULE_1__["hydratedAdapter"], r(t), t, u);
      }

      function m(t, u) {
        return _chunks_geometryEngineBase_js__WEBPACK_IMPORTED_MODULE_0__["a"].overlaps(_geometryAdapters_hydrated_js__WEBPACK_IMPORTED_MODULE_1__["hydratedAdapter"], r(t), t, u);
      }

      function d(t, u, i) {
        return _chunks_geometryEngineBase_js__WEBPACK_IMPORTED_MODULE_0__["a"].relate(_geometryAdapters_hydrated_js__WEBPACK_IMPORTED_MODULE_1__["hydratedAdapter"], r(t), t, u, i);
      }

      function x(t) {
        return _chunks_geometryEngineBase_js__WEBPACK_IMPORTED_MODULE_0__["a"].isSimple(_geometryAdapters_hydrated_js__WEBPACK_IMPORTED_MODULE_1__["hydratedAdapter"], r(t), t);
      }

      function w(t) {
        return _chunks_geometryEngineBase_js__WEBPACK_IMPORTED_MODULE_0__["a"].simplify(_geometryAdapters_hydrated_js__WEBPACK_IMPORTED_MODULE_1__["hydratedAdapter"], r(t), t);
      }

      function E(t) {
        var u = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : !1;
        return _chunks_geometryEngineBase_js__WEBPACK_IMPORTED_MODULE_0__["a"].convexHull(_geometryAdapters_hydrated_js__WEBPACK_IMPORTED_MODULE_1__["hydratedAdapter"], r(t), t, u);
      }

      function h(t, u) {
        return _chunks_geometryEngineBase_js__WEBPACK_IMPORTED_MODULE_0__["a"].difference(_geometryAdapters_hydrated_js__WEBPACK_IMPORTED_MODULE_1__["hydratedAdapter"], r(t), t, u);
      }

      function A(t, u) {
        return _chunks_geometryEngineBase_js__WEBPACK_IMPORTED_MODULE_0__["a"].symmetricDifference(_geometryAdapters_hydrated_js__WEBPACK_IMPORTED_MODULE_1__["hydratedAdapter"], r(t), t, u);
      }

      function y(t, u) {
        return _chunks_geometryEngineBase_js__WEBPACK_IMPORTED_MODULE_0__["a"].intersect(_geometryAdapters_hydrated_js__WEBPACK_IMPORTED_MODULE_1__["hydratedAdapter"], r(t), t, u);
      }

      function R(t) {
        var u = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : null;
        return _chunks_geometryEngineBase_js__WEBPACK_IMPORTED_MODULE_0__["a"].union(_geometryAdapters_hydrated_js__WEBPACK_IMPORTED_MODULE_1__["hydratedAdapter"], r(t), t, u);
      }

      function I(t, u, i, o, c, f) {
        return _chunks_geometryEngineBase_js__WEBPACK_IMPORTED_MODULE_0__["a"].offset(_geometryAdapters_hydrated_js__WEBPACK_IMPORTED_MODULE_1__["hydratedAdapter"], r(t), t, u, i, o, c, f);
      }

      function v(t, u, i) {
        var o = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : !1;
        return _chunks_geometryEngineBase_js__WEBPACK_IMPORTED_MODULE_0__["a"].buffer(_geometryAdapters_hydrated_js__WEBPACK_IMPORTED_MODULE_1__["hydratedAdapter"], r(t), t, u, i, o);
      }

      function S(t, u, i, o, c, f) {
        return _chunks_geometryEngineBase_js__WEBPACK_IMPORTED_MODULE_0__["a"].geodesicBuffer(_geometryAdapters_hydrated_js__WEBPACK_IMPORTED_MODULE_1__["hydratedAdapter"], r(t), t, u, i, o, c, f);
      }

      function j(t, u) {
        var i = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : !0;
        return _chunks_geometryEngineBase_js__WEBPACK_IMPORTED_MODULE_0__["a"].nearestCoordinate(_geometryAdapters_hydrated_js__WEBPACK_IMPORTED_MODULE_1__["hydratedAdapter"], r(t), t, u, i);
      }

      function J(t, u) {
        return _chunks_geometryEngineBase_js__WEBPACK_IMPORTED_MODULE_0__["a"].nearestVertex(_geometryAdapters_hydrated_js__WEBPACK_IMPORTED_MODULE_1__["hydratedAdapter"], r(t), t, u);
      }

      function N(t, u, i, o) {
        return _chunks_geometryEngineBase_js__WEBPACK_IMPORTED_MODULE_0__["a"].nearestVertices(_geometryAdapters_hydrated_js__WEBPACK_IMPORTED_MODULE_1__["hydratedAdapter"], r(t), t, u, i, o);
      }

      function O(n) {
        return "xmin" in n ? "center" in n ? n.center : null : "x" in n ? n : "extent" in n ? n.extent.center : null;
      }

      function V(e, r, t) {
        var u;
        if (null == e) throw new Error("Illegal Argument Exception");
        var i = e.spatialReference;
        if (null == (t = null != (u = t) ? u : O(e))) throw new Error("Illegal Argument Exception");
        var o = e.constructor.fromJSON(_chunks_geometryEngineBase_js__WEBPACK_IMPORTED_MODULE_0__["a"].rotate(e, r, t));
        return o.spatialReference = i, o;
      }

      function z(e, r) {
        var t;
        if (null == e) throw new Error("Illegal Argument Exception");
        var u = e.spatialReference;
        if (null == (r = null != (t = r) ? t : O(e))) throw new Error("Illegal Argument Exception");
        var i = e.constructor.fromJSON(_chunks_geometryEngineBase_js__WEBPACK_IMPORTED_MODULE_0__["a"].flipHorizontal(e, r));
        return i.spatialReference = u, i;
      }

      function B(e, r) {
        var t;
        if (null == e) throw new Error("Illegal Argument Exception");
        var u = e.spatialReference;
        if (null == (r = null != (t = r) ? t : O(e))) throw new Error("Illegal Argument Exception");
        var i = e.constructor.fromJSON(_chunks_geometryEngineBase_js__WEBPACK_IMPORTED_MODULE_0__["a"].flipVertical(e, r));
        return i.spatialReference = u, i;
      }

      function D(t, u, i, o) {
        return _chunks_geometryEngineBase_js__WEBPACK_IMPORTED_MODULE_0__["a"].generalize(_geometryAdapters_hydrated_js__WEBPACK_IMPORTED_MODULE_1__["hydratedAdapter"], r(t), t, u, i, o);
      }

      function H(t, u, i) {
        return _chunks_geometryEngineBase_js__WEBPACK_IMPORTED_MODULE_0__["a"].densify(_geometryAdapters_hydrated_js__WEBPACK_IMPORTED_MODULE_1__["hydratedAdapter"], r(t), t, u, i);
      }

      function L(t, u, i) {
        var o = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : 0;
        return _chunks_geometryEngineBase_js__WEBPACK_IMPORTED_MODULE_0__["a"].geodesicDensify(_geometryAdapters_hydrated_js__WEBPACK_IMPORTED_MODULE_1__["hydratedAdapter"], r(t), t, u, i, o);
      }

      function b(t, u) {
        return _chunks_geometryEngineBase_js__WEBPACK_IMPORTED_MODULE_0__["a"].planarArea(_geometryAdapters_hydrated_js__WEBPACK_IMPORTED_MODULE_1__["hydratedAdapter"], r(t), t, u);
      }

      function k(t, u) {
        return _chunks_geometryEngineBase_js__WEBPACK_IMPORTED_MODULE_0__["a"].planarLength(_geometryAdapters_hydrated_js__WEBPACK_IMPORTED_MODULE_1__["hydratedAdapter"], r(t), t, u);
      }

      function q(t, u, i) {
        return _chunks_geometryEngineBase_js__WEBPACK_IMPORTED_MODULE_0__["a"].geodesicArea(_geometryAdapters_hydrated_js__WEBPACK_IMPORTED_MODULE_1__["hydratedAdapter"], r(t), t, u, i);
      }

      function C(t, u, i) {
        return _chunks_geometryEngineBase_js__WEBPACK_IMPORTED_MODULE_0__["a"].geodesicLength(_geometryAdapters_hydrated_js__WEBPACK_IMPORTED_MODULE_1__["hydratedAdapter"], r(t), t, u, i);
      }
      /***/

    },

    /***/
    "X2wA":
    /*!**************************************************************!*\
      !*** ./node_modules/@arcgis/core/chunks/_commonjsHelpers.js ***!
      \**************************************************************/

    /*! exports provided: a, b, c, g */

    /***/
    function X2wA(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "a", function () {
        return e;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "b", function () {
        return r;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "c", function () {
        return o;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "g", function () {
        return n;
      });
      /*
      All material copyright ESRI, All Rights Reserved, unless otherwise specified.
      See https://js.arcgis.com/4.18/esri/copyright.txt for details.
      */


      var e = "undefined" != typeof globalThis ? globalThis : "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self ? self : {};

      function n(e) {
        return e && e.__esModule && Object.prototype.hasOwnProperty.call(e, "default") ? e["default"] : e;
      }

      function o(e, n, o) {
        return e(o = {
          path: n,
          exports: {},
          require: function require(e, n) {
            return r(null == n && o.path);
          }
        }, o.exports), o.exports;
      }

      function r() {
        throw new Error("Dynamic requires are not currently supported by @rollup/plugin-commonjs");
      }
      /***/

    }
  }]);
})();
//# sourceMappingURL=geometry-geometryEngine-js-es5.js.map