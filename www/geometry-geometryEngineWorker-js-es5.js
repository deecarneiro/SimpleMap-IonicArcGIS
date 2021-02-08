(function () {
  function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }

  function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

  function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

  function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && Symbol.iterator in Object(iter)) return Array.from(iter); }

  function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }

  function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["geometry-geometryEngineWorker-js"], {
    /***/
    "1kEK":
    /*!*********************************************************************!*\
      !*** ./node_modules/@arcgis/core/geometry/geometryAdapters/json.js ***!
      \*********************************************************************/

    /*! exports provided: jsonAdapter */

    /***/
    function kEK(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "jsonAdapter", function () {
        return t;
      });
      /*
      All material copyright ESRI, All Rights Reserved, unless otherwise specified.
      See https://js.arcgis.com/4.18/esri/copyright.txt for details.
      */


      var t = {
        convertToGEGeometry: function convertToGEGeometry(t, s) {
          if (null == s) return null;
          return t.convertJSONToGeometry(s);
        },
        exportPoint: function exportPoint(t, i, n) {
          var e = new s(t.getPointX(i), t.getPointY(i), n),
              o = t.hasZ(i),
              h = t.hasM(i);
          o && (e.z = t.getPointZ(i));
          h && (e.m = t.getPointM(i));
          return e;
        },
        exportPolygon: function exportPolygon(t, s, n) {
          return new i(t.exportPaths(s), n, t.hasZ(s), t.hasM(s));
        },
        exportPolyline: function exportPolyline(t, s, i) {
          return new n(t.exportPaths(s), i, t.hasZ(s), t.hasM(s));
        },
        exportMultipoint: function exportMultipoint(t, s, i) {
          return new e(t.exportPoints(s), i, t.hasZ(s), t.hasM(s));
        },
        exportExtent: function exportExtent(t, s, i) {
          var n = t.hasZ(s),
              e = t.hasM(s),
              h = new o(t.getXMin(s), t.getYMin(s), t.getXMax(s), t.getYMax(s), i);

          if (n) {
            var _i = t.getZExtent(s);

            h.zmin = _i.vmin, h.zmax = _i.vmax;
          }

          if (e) {
            var _i2 = t.getMExtent(s);

            h.mmin = _i2.vmin, h.mmax = _i2.vmax;
          }

          return h;
        }
      };

      var s = function s(t, _s, i) {
        _classCallCheck(this, s);

        this.x = t, this.y = _s, this.spatialReference = i, this.z = void 0, this.m = void 0;
      };

      var i = function i(t, s, _i3, n) {
        _classCallCheck(this, i);

        this.rings = t, this.spatialReference = s, this.hasZ = void 0, this.hasM = void 0, _i3 && (this.hasZ = _i3), n && (this.hasM = n);
      };

      var n = function n(t, s, i, _n) {
        _classCallCheck(this, n);

        this.paths = t, this.spatialReference = s, this.hasZ = void 0, this.hasM = void 0, i && (this.hasZ = i), _n && (this.hasM = _n);
      };

      var e = function e(t, s, i, n) {
        _classCallCheck(this, e);

        this.points = t, this.spatialReference = s, this.hasZ = void 0, this.hasM = void 0, i && (this.hasZ = i), n && (this.hasM = n);
      };

      var o = function o(t, s, i, n, e) {
        _classCallCheck(this, o);

        this.xmin = t, this.ymin = s, this.xmax = i, this.ymax = n, this.spatialReference = e, this.zmin = void 0, this.zmax = void 0, this.mmin = void 0, this.mmax = void 0;
      };
      /***/

    },

    /***/
    "D5ze":
    /*!********************************************************************!*\
      !*** ./node_modules/@arcgis/core/geometry/geometryEngineWorker.js ***!
      \********************************************************************/

    /*! exports provided: executeGEOperation */

    /***/
    function D5ze(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "executeGEOperation", function () {
        return e;
      });
      /* harmony import */


      var _chunks_geometryEngineJSON_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ../chunks/geometryEngineJSON.js */
      "l5Tg");
      /*
      All material copyright ESRI, All Rights Reserved, unless otherwise specified.
      See https://js.arcgis.com/4.18/esri/copyright.txt for details.
      */


      function e(e) {
        return (0, _chunks_geometryEngineJSON_js__WEBPACK_IMPORTED_MODULE_0__["g"][e.operation]).apply(void 0, _toConsumableArray(e.parameters));
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
//# sourceMappingURL=geometry-geometryEngineWorker-js-es5.js.map