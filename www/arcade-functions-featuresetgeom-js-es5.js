(function () {
  function _createForOfIteratorHelper(o, allowArrayLike) { var it; if (typeof Symbol === "undefined" || o[Symbol.iterator] == null) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = o[Symbol.iterator](); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it["return"] != null) it["return"](); } finally { if (didErr) throw err; } } }; }

  function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

  function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["arcade-functions-featuresetgeom-js"], {
    /***/
    "Vr/A":
    /*!**********************************************************************!*\
      !*** ./node_modules/@arcgis/core/arcade/functions/featuresetgeom.js ***!
      \**********************************************************************/

    /*! exports provided: registerFunctions */

    /***/
    function VrA(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "registerFunctions", function () {
        return g;
      });
      /* harmony import */


      var _core_promiseUtils_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ../../core/promiseUtils.js */
      "9MzC");
      /* harmony import */


      var _geometry_Geometry_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ../../geometry/Geometry.js */
      "N2DF");
      /* harmony import */


      var _chunks_languageUtils_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ../../chunks/languageUtils.js */
      "idrm");
      /* harmony import */


      var _kernel_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ../kernel.js */
      "hUmP");
      /* harmony import */


      var _geometry_geometryEngineAsync_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ../../geometry/geometryEngineAsync.js */
      "u1HQ");
      /* harmony import */


      var _featureset_sources_Empty_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ../featureset/sources/Empty.js */
      "GN9X");
      /* harmony import */


      var _featureset_actions_SpatialFilter_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ../featureset/actions/SpatialFilter.js */
      "gBat");
      /*
      All material copyright ESRI, All Rights Reserved, unless otherwise specified.
      See https://js.arcgis.com/4.18/esri/copyright.txt for details.
      */


      function S(e) {
        return e instanceof _geometry_Geometry_js__WEBPACK_IMPORTED_MODULE_1__["default"];
      }

      function h(i, s, d, h, g) {
        return g(i, s, function (i, s, g) {
          if (g.length < 2) return h(new Error("Missing Parameters"));
          if (null === (g = Object(_chunks_languageUtils_js__WEBPACK_IMPORTED_MODULE_2__["J"])(g))[0] && null === g[1]) return Object(_core_promiseUtils_js__WEBPACK_IMPORTED_MODULE_0__["resolve"])(!1);
          if (Object(_chunks_languageUtils_js__WEBPACK_IMPORTED_MODULE_2__["z"])(g[0])) return g[1] instanceof _geometry_Geometry_js__WEBPACK_IMPORTED_MODULE_1__["default"] ? Object(_core_promiseUtils_js__WEBPACK_IMPORTED_MODULE_0__["resolve"])(new _featureset_actions_SpatialFilter_js__WEBPACK_IMPORTED_MODULE_6__["default"]({
            parentfeatureset: g[0],
            relation: d,
            relationGeom: g[1]
          })) : null === g[1] ? Object(_core_promiseUtils_js__WEBPACK_IMPORTED_MODULE_0__["resolve"])(new _featureset_sources_Empty_js__WEBPACK_IMPORTED_MODULE_5__["default"]({
            parentfeatureset: g[0]
          })) : h("Spatial Relation cannot accept this parameter type");

          if (S(g[0])) {
            if (S(g[1])) {
              var e = null;

              switch (d) {
                case "esriSpatialRelEnvelopeIntersects":
                  e = Object(_geometry_geometryEngineAsync_js__WEBPACK_IMPORTED_MODULE_4__["intersects"])(Object(_kernel_js__WEBPACK_IMPORTED_MODULE_3__["shapeExtent"])(g[0]), Object(_kernel_js__WEBPACK_IMPORTED_MODULE_3__["shapeExtent"])(g[1]));
                  break;

                case "esriSpatialRelIntersects":
                  e = Object(_geometry_geometryEngineAsync_js__WEBPACK_IMPORTED_MODULE_4__["intersects"])(g[0], g[1]);
                  break;

                case "esriSpatialRelContains":
                  e = Object(_geometry_geometryEngineAsync_js__WEBPACK_IMPORTED_MODULE_4__["contains"])(g[0], g[1]);
                  break;

                case "esriSpatialRelOverlaps":
                  e = Object(_geometry_geometryEngineAsync_js__WEBPACK_IMPORTED_MODULE_4__["overlaps"])(g[0], g[1]);
                  break;

                case "esriSpatialRelWithin":
                  e = Object(_geometry_geometryEngineAsync_js__WEBPACK_IMPORTED_MODULE_4__["within"])(g[0], g[1]);
                  break;

                case "esriSpatialRelTouches":
                  e = Object(_geometry_geometryEngineAsync_js__WEBPACK_IMPORTED_MODULE_4__["touches"])(g[0], g[1]);
                  break;

                case "esriSpatialRelCrosses":
                  e = Object(_geometry_geometryEngineAsync_js__WEBPACK_IMPORTED_MODULE_4__["crosses"])(g[0], g[1]);
              }

              return null !== e ? e : Object(_core_promiseUtils_js__WEBPACK_IMPORTED_MODULE_0__["reject"])(new Error("Unrecognised Relationship"));
            }

            return Object(_chunks_languageUtils_js__WEBPACK_IMPORTED_MODULE_2__["z"])(g[1]) ? Object(_core_promiseUtils_js__WEBPACK_IMPORTED_MODULE_0__["resolve"])(new _featureset_actions_SpatialFilter_js__WEBPACK_IMPORTED_MODULE_6__["default"]({
              parentfeatureset: g[1],
              relation: d,
              relationGeom: g[0]
            })) : null === g[1] ? Object(_core_promiseUtils_js__WEBPACK_IMPORTED_MODULE_0__["resolve"])(!1) : h("Spatial Relation cannot accept this parameter type");
          }

          return null !== g[0] ? h("Spatial Relation cannot accept this parameter type") : Object(_chunks_languageUtils_js__WEBPACK_IMPORTED_MODULE_2__["z"])(g[1]) ? Object(_core_promiseUtils_js__WEBPACK_IMPORTED_MODULE_0__["resolve"])(new _featureset_sources_Empty_js__WEBPACK_IMPORTED_MODULE_5__["default"]({
            parentfeatureset: g[1]
          })) : g[1] instanceof _geometry_Geometry_js__WEBPACK_IMPORTED_MODULE_1__["default"] || null === g[1] ? Object(_core_promiseUtils_js__WEBPACK_IMPORTED_MODULE_0__["resolve"])(!1) : void 0;
        });
      }

      function g(e) {
        "async" === e.mode && (e.functions.intersects = function (n, t) {
          return h(n, t, "esriSpatialRelIntersects", e.failDefferred, e.standardFunctionAsync);
        }, e.functions.envelopeintersects = function (n, t) {
          return h(n, t, "esriSpatialRelEnvelopeIntersects", e.failDefferred, e.standardFunctionAsync);
        }, e.signatures.push({
          name: "envelopeintersects",
          min: "2",
          max: "2"
        }), e.functions.contains = function (n, t) {
          return h(n, t, "esriSpatialRelContains", e.failDefferred, e.standardFunctionAsync);
        }, e.functions.overlaps = function (n, t) {
          return h(n, t, "esriSpatialRelOverlaps", e.failDefferred, e.standardFunctionAsync);
        }, e.functions.within = function (n, t) {
          return h(n, t, "esriSpatialRelWithin", e.failDefferred, e.standardFunctionAsync);
        }, e.functions.touches = function (n, t) {
          return h(n, t, "esriSpatialRelTouches", e.failDefferred, e.standardFunctionAsync);
        }, e.functions.crosses = function (n, t) {
          return h(n, t, "esriSpatialRelCrosses", e.failDefferred, e.standardFunctionAsync);
        }, e.functions.relate = function (n, l) {
          return e.standardFunctionAsync(n, l, function (e, n, l) {
            if (l = Object(_chunks_languageUtils_js__WEBPACK_IMPORTED_MODULE_2__["J"])(l), Object(_chunks_languageUtils_js__WEBPACK_IMPORTED_MODULE_2__["p"])(l, 3, 3), S(l[0]) && S(l[1])) return Object(_geometry_geometryEngineAsync_js__WEBPACK_IMPORTED_MODULE_4__["relate"])(l[0], l[1], Object(_chunks_languageUtils_js__WEBPACK_IMPORTED_MODULE_2__["e"])(l[2]));
            if (l[0] instanceof _geometry_Geometry_js__WEBPACK_IMPORTED_MODULE_1__["default"] && null === l[1]) return !1;
            if (l[1] instanceof _geometry_Geometry_js__WEBPACK_IMPORTED_MODULE_1__["default"] && null === l[0]) return !1;
            if (Object(_chunks_languageUtils_js__WEBPACK_IMPORTED_MODULE_2__["z"])(l[0]) && null === l[1]) return new _featureset_sources_Empty_js__WEBPACK_IMPORTED_MODULE_5__["default"]({
              parentfeatureset: l[0]
            });
            if (Object(_chunks_languageUtils_js__WEBPACK_IMPORTED_MODULE_2__["z"])(l[1]) && null === l[0]) return new _featureset_sources_Empty_js__WEBPACK_IMPORTED_MODULE_5__["default"]({
              parentfeatureset: l[1]
            });
            if (Object(_chunks_languageUtils_js__WEBPACK_IMPORTED_MODULE_2__["z"])(l[0]) && l[1] instanceof _geometry_Geometry_js__WEBPACK_IMPORTED_MODULE_1__["default"]) return l[0].relate(l[1], Object(_chunks_languageUtils_js__WEBPACK_IMPORTED_MODULE_2__["e"])(l[2]));
            if (Object(_chunks_languageUtils_js__WEBPACK_IMPORTED_MODULE_2__["z"])(l[1]) && l[0] instanceof _geometry_Geometry_js__WEBPACK_IMPORTED_MODULE_1__["default"]) return l[1].relate(l[0], Object(_chunks_languageUtils_js__WEBPACK_IMPORTED_MODULE_2__["e"])(l[2]));
            if (null === l[0] && null === l[1]) return !1;
            throw new Error("Illegal Argument");
          });
        });
      }
      /***/

    },

    /***/
    "gLc9":
    /*!*****************************************************************!*\
      !*** ./node_modules/@arcgis/core/layers/support/FieldsIndex.js ***!
      \*****************************************************************/

    /*! exports provided: default */

    /***/
    function gLc9(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /*
      All material copyright ESRI, All Rights Reserved, unless otherwise specified.
      See https://js.arcgis.com/4.18/esri/copyright.txt for details.
      */


      function t(t) {
        return "date" === t.type || "esriFieldTypeDate" === t.type;
      }

      function e(t) {
        return t.toLowerCase().trim();
      }
      /* harmony default export */


      __webpack_exports__["default"] = /*#__PURE__*/function () {
        function _class(s) {
          _classCallCheck(this, _class);

          if (this.fields = s, this._fieldsMap = new Map(), this._dateFieldsSet = new Set(), this.dateFields = [], !s) return;
          var i = [];

          var _iterator = _createForOfIteratorHelper(s),
              _step;

          try {
            for (_iterator.s(); !(_step = _iterator.n()).done;) {
              var d = _step.value;

              var _s = d && d.name;

              if (_s) {
                var a = e(_s);
                this._fieldsMap.set(_s, d), this._fieldsMap.set(a, d), i.push(a), t(d) && (this.dateFields.push(d), this._dateFieldsSet.add(d));
              }
            }
          } catch (err) {
            _iterator.e(err);
          } finally {
            _iterator.f();
          }

          i.sort(), this.uid = i.join(",");
        }

        _createClass(_class, [{
          key: "destroy",
          value: function destroy() {
            this._fieldsMap.clear();
          }
        }, {
          key: "has",
          value: function has(t) {
            return null != this.get(t);
          }
        }, {
          key: "get",
          value: function get(t) {
            return null != t ? this._fieldsMap.get(t) || this._fieldsMap.get(e(t)) : void 0;
          }
        }, {
          key: "isDateField",
          value: function isDateField(t) {
            return this._dateFieldsSet.has(this.get(t));
          }
        }, {
          key: "normalizeFieldName",
          value: function normalizeFieldName(t) {
            var e = this.get(t);
            if (e) return e.name;
          }
        }]);

        return _class;
      }();
      /***/

    }
  }]);
})();
//# sourceMappingURL=arcade-functions-featuresetgeom-js-es5.js.map