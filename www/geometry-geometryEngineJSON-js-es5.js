(function () {
  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["geometry-geometryEngineJSON-js"], {
    /***/
    "AKzY":
    /*!******************************************************************!*\
      !*** ./node_modules/@arcgis/core/geometry/geometryEngineJSON.js ***!
      \******************************************************************/

    /*! exports provided: buffer, clip, contains, convexHull, crosses, cut, densify, difference, disjoint, distance, equals, extendedSpatialReferenceInfo, flipHorizontal, flipVertical, generalize, geodesicArea, geodesicBuffer, geodesicDensify, geodesicLength, intersect, intersects, isSimple, nearestCoordinate, nearestVertex, nearestVertices, offset, overlaps, planarArea, planarLength, relate, rotate, simplify, symmetricDifference, touches, union, within */

    /***/
    function AKzY(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony import */


      var _chunks_geometryEngineBase_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ../chunks/geometryEngineBase.js */
      "9gar");
      /* harmony import */


      var _geometryAdapters_json_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./geometryAdapters/json.js */
      "1kEK");
      /* harmony import */


      var _chunks_geometryEngineJSON_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ../chunks/geometryEngineJSON.js */
      "l5Tg");
      /* harmony reexport (safe) */


      __webpack_require__.d(__webpack_exports__, "buffer", function () {
        return _chunks_geometryEngineJSON_js__WEBPACK_IMPORTED_MODULE_2__["v"];
      });
      /* harmony reexport (safe) */


      __webpack_require__.d(__webpack_exports__, "clip", function () {
        return _chunks_geometryEngineJSON_js__WEBPACK_IMPORTED_MODULE_2__["c"];
      });
      /* harmony reexport (safe) */


      __webpack_require__.d(__webpack_exports__, "contains", function () {
        return _chunks_geometryEngineJSON_js__WEBPACK_IMPORTED_MODULE_2__["b"];
      });
      /* harmony reexport (safe) */


      __webpack_require__.d(__webpack_exports__, "convexHull", function () {
        return _chunks_geometryEngineJSON_js__WEBPACK_IMPORTED_MODULE_2__["l"];
      });
      /* harmony reexport (safe) */


      __webpack_require__.d(__webpack_exports__, "crosses", function () {
        return _chunks_geometryEngineJSON_js__WEBPACK_IMPORTED_MODULE_2__["d"];
      });
      /* harmony reexport (safe) */


      __webpack_require__.d(__webpack_exports__, "cut", function () {
        return _chunks_geometryEngineJSON_js__WEBPACK_IMPORTED_MODULE_2__["a"];
      });
      /* harmony reexport (safe) */


      __webpack_require__.d(__webpack_exports__, "densify", function () {
        return _chunks_geometryEngineJSON_js__WEBPACK_IMPORTED_MODULE_2__["F"];
      });
      /* harmony reexport (safe) */


      __webpack_require__.d(__webpack_exports__, "difference", function () {
        return _chunks_geometryEngineJSON_js__WEBPACK_IMPORTED_MODULE_2__["m"];
      });
      /* harmony reexport (safe) */


      __webpack_require__.d(__webpack_exports__, "disjoint", function () {
        return _chunks_geometryEngineJSON_js__WEBPACK_IMPORTED_MODULE_2__["j"];
      });
      /* harmony reexport (safe) */


      __webpack_require__.d(__webpack_exports__, "distance", function () {
        return _chunks_geometryEngineJSON_js__WEBPACK_IMPORTED_MODULE_2__["f"];
      });
      /* harmony reexport (safe) */


      __webpack_require__.d(__webpack_exports__, "equals", function () {
        return _chunks_geometryEngineJSON_js__WEBPACK_IMPORTED_MODULE_2__["h"];
      });
      /* harmony reexport (safe) */


      __webpack_require__.d(__webpack_exports__, "extendedSpatialReferenceInfo", function () {
        return _chunks_geometryEngineJSON_js__WEBPACK_IMPORTED_MODULE_2__["e"];
      });
      /* harmony reexport (safe) */


      __webpack_require__.d(__webpack_exports__, "flipHorizontal", function () {
        return _chunks_geometryEngineJSON_js__WEBPACK_IMPORTED_MODULE_2__["C"];
      });
      /* harmony reexport (safe) */


      __webpack_require__.d(__webpack_exports__, "flipVertical", function () {
        return _chunks_geometryEngineJSON_js__WEBPACK_IMPORTED_MODULE_2__["D"];
      });
      /* harmony reexport (safe) */


      __webpack_require__.d(__webpack_exports__, "generalize", function () {
        return _chunks_geometryEngineJSON_js__WEBPACK_IMPORTED_MODULE_2__["E"];
      });
      /* harmony reexport (safe) */


      __webpack_require__.d(__webpack_exports__, "geodesicArea", function () {
        return _chunks_geometryEngineJSON_js__WEBPACK_IMPORTED_MODULE_2__["J"];
      });
      /* harmony reexport (safe) */


      __webpack_require__.d(__webpack_exports__, "geodesicBuffer", function () {
        return _chunks_geometryEngineJSON_js__WEBPACK_IMPORTED_MODULE_2__["x"];
      });
      /* harmony reexport (safe) */


      __webpack_require__.d(__webpack_exports__, "geodesicDensify", function () {
        return _chunks_geometryEngineJSON_js__WEBPACK_IMPORTED_MODULE_2__["G"];
      });
      /* harmony reexport (safe) */


      __webpack_require__.d(__webpack_exports__, "geodesicLength", function () {
        return _chunks_geometryEngineJSON_js__WEBPACK_IMPORTED_MODULE_2__["K"];
      });
      /* harmony reexport (safe) */


      __webpack_require__.d(__webpack_exports__, "intersect", function () {
        return _chunks_geometryEngineJSON_js__WEBPACK_IMPORTED_MODULE_2__["p"];
      });
      /* harmony reexport (safe) */


      __webpack_require__.d(__webpack_exports__, "intersects", function () {
        return _chunks_geometryEngineJSON_js__WEBPACK_IMPORTED_MODULE_2__["i"];
      });
      /* harmony reexport (safe) */


      __webpack_require__.d(__webpack_exports__, "isSimple", function () {
        return _chunks_geometryEngineJSON_js__WEBPACK_IMPORTED_MODULE_2__["k"];
      });
      /* harmony reexport (safe) */


      __webpack_require__.d(__webpack_exports__, "nearestCoordinate", function () {
        return _chunks_geometryEngineJSON_js__WEBPACK_IMPORTED_MODULE_2__["y"];
      });
      /* harmony reexport (safe) */


      __webpack_require__.d(__webpack_exports__, "nearestVertex", function () {
        return _chunks_geometryEngineJSON_js__WEBPACK_IMPORTED_MODULE_2__["z"];
      });
      /* harmony reexport (safe) */


      __webpack_require__.d(__webpack_exports__, "nearestVertices", function () {
        return _chunks_geometryEngineJSON_js__WEBPACK_IMPORTED_MODULE_2__["A"];
      });
      /* harmony reexport (safe) */


      __webpack_require__.d(__webpack_exports__, "offset", function () {
        return _chunks_geometryEngineJSON_js__WEBPACK_IMPORTED_MODULE_2__["q"];
      });
      /* harmony reexport (safe) */


      __webpack_require__.d(__webpack_exports__, "overlaps", function () {
        return _chunks_geometryEngineJSON_js__WEBPACK_IMPORTED_MODULE_2__["o"];
      });
      /* harmony reexport (safe) */


      __webpack_require__.d(__webpack_exports__, "planarArea", function () {
        return _chunks_geometryEngineJSON_js__WEBPACK_IMPORTED_MODULE_2__["H"];
      });
      /* harmony reexport (safe) */


      __webpack_require__.d(__webpack_exports__, "planarLength", function () {
        return _chunks_geometryEngineJSON_js__WEBPACK_IMPORTED_MODULE_2__["I"];
      });
      /* harmony reexport (safe) */


      __webpack_require__.d(__webpack_exports__, "relate", function () {
        return _chunks_geometryEngineJSON_js__WEBPACK_IMPORTED_MODULE_2__["r"];
      });
      /* harmony reexport (safe) */


      __webpack_require__.d(__webpack_exports__, "rotate", function () {
        return _chunks_geometryEngineJSON_js__WEBPACK_IMPORTED_MODULE_2__["B"];
      });
      /* harmony reexport (safe) */


      __webpack_require__.d(__webpack_exports__, "simplify", function () {
        return _chunks_geometryEngineJSON_js__WEBPACK_IMPORTED_MODULE_2__["s"];
      });
      /* harmony reexport (safe) */


      __webpack_require__.d(__webpack_exports__, "symmetricDifference", function () {
        return _chunks_geometryEngineJSON_js__WEBPACK_IMPORTED_MODULE_2__["n"];
      });
      /* harmony reexport (safe) */


      __webpack_require__.d(__webpack_exports__, "touches", function () {
        return _chunks_geometryEngineJSON_js__WEBPACK_IMPORTED_MODULE_2__["t"];
      });
      /* harmony reexport (safe) */


      __webpack_require__.d(__webpack_exports__, "union", function () {
        return _chunks_geometryEngineJSON_js__WEBPACK_IMPORTED_MODULE_2__["u"];
      });
      /* harmony reexport (safe) */


      __webpack_require__.d(__webpack_exports__, "within", function () {
        return _chunks_geometryEngineJSON_js__WEBPACK_IMPORTED_MODULE_2__["w"];
      });
      /*
      All material copyright ESRI, All Rights Reserved, unless otherwise specified.
      See https://js.arcgis.com/4.18/esri/copyright.txt for details.
      */

      /***/

    }
  }]);
})();
//# sourceMappingURL=geometry-geometryEngineJSON-js-es5.js.map