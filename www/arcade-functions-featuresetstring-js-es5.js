(function () {
  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["arcade-functions-featuresetstring-js"], {
    /***/
    "U+Rd":
    /*!************************************************************************!*\
      !*** ./node_modules/@arcgis/core/arcade/functions/featuresetstring.js ***!
      \************************************************************************/

    /*! exports provided: registerFunctions */

    /***/
    function URd(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "registerFunctions", function () {
        return l;
      });
      /* harmony import */


      var _chunks_languageUtils_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ../../chunks/languageUtils.js */
      "idrm");
      /* harmony import */


      var _Dictionary_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ../Dictionary.js */
      "D5C5");
      /* harmony import */


      var _featureset_support_shared_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ../featureset/support/shared.js */
      "hTzF");
      /* harmony import */


      var _Feature_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ../Feature.js */
      "Xrjs");
      /*
      All material copyright ESRI, All Rights Reserved, unless otherwise specified.
      See https://js.arcgis.com/4.18/esri/copyright.txt for details.
      */


      function f(n) {
        return n && n.domain ? "coded-value" === n.domain.type || "codedValue" === n.domain.type ? _Dictionary_js__WEBPACK_IMPORTED_MODULE_1__["default"].convertObjectToArcadeDictionary({
          type: "codedValue",
          name: n.domain.name,
          dataType: _featureset_support_shared_js__WEBPACK_IMPORTED_MODULE_2__["layerFieldEsriConstants"][n.field.type],
          codedValues: n.domain.codedValues.map(function (n) {
            return {
              name: n.name,
              code: n.code
            };
          })
        }) : _Dictionary_js__WEBPACK_IMPORTED_MODULE_1__["default"].convertObjectToArcadeDictionary({
          type: "range",
          name: n.domain.name,
          dataType: _featureset_support_shared_js__WEBPACK_IMPORTED_MODULE_2__["layerFieldEsriConstants"][n.field.type],
          min: n.domain.min,
          max: n.domain.max
        }) : null;
      }

      function l(s) {
        "async" === s.mode && (s.functions.domain = function (a, i) {
          return s.standardFunctionAsync(a, i, function (a, i, c) {
            if (Object(_chunks_languageUtils_js__WEBPACK_IMPORTED_MODULE_0__["p"])(c, 2, 3), c[0] instanceof _Feature_js__WEBPACK_IMPORTED_MODULE_3__["default"]) {
              return f(c[0].fullDomain(Object(_chunks_languageUtils_js__WEBPACK_IMPORTED_MODULE_0__["e"])(c[1]), void 0 === c[2] ? void 0 : Object(_chunks_languageUtils_js__WEBPACK_IMPORTED_MODULE_0__["c"])(c[2])));
            }

            if (Object(_chunks_languageUtils_js__WEBPACK_IMPORTED_MODULE_0__["z"])(c[0])) return c[0]._ensureLoaded().then(function () {
              return f(Object(_chunks_languageUtils_js__WEBPACK_IMPORTED_MODULE_0__["k"])(Object(_chunks_languageUtils_js__WEBPACK_IMPORTED_MODULE_0__["e"])(c[1]), c[0], null, void 0 === c[2] ? void 0 : Object(_chunks_languageUtils_js__WEBPACK_IMPORTED_MODULE_0__["c"])(c[2])));
            });
            throw new Error("Invalid Parameter");
          });
        }, s.functions.subtypes = function (e, t) {
          return s.standardFunctionAsync(e, t, function (e, t, o) {
            if (Object(_chunks_languageUtils_js__WEBPACK_IMPORTED_MODULE_0__["p"])(o, 1, 1), o[0] instanceof _Feature_js__WEBPACK_IMPORTED_MODULE_3__["default"]) {
              var n = o[0].subtypes();
              return n ? _Dictionary_js__WEBPACK_IMPORTED_MODULE_1__["default"].convertObjectToArcadeDictionary(n) : null;
            }

            if (Object(_chunks_languageUtils_js__WEBPACK_IMPORTED_MODULE_0__["z"])(o[0])) return o[0]._ensureLoaded().then(function () {
              var n = o[0].subtypes();
              return n ? _Dictionary_js__WEBPACK_IMPORTED_MODULE_1__["default"].convertObjectToArcadeDictionary(n) : null;
            });
            throw new Error("Invalid Parameter");
          });
        }, s.functions.domainname = function (i, c) {
          return s.standardFunctionAsync(i, c, function (i, c, u) {
            if (Object(_chunks_languageUtils_js__WEBPACK_IMPORTED_MODULE_0__["p"])(u, 2, 4), u[0] instanceof _Feature_js__WEBPACK_IMPORTED_MODULE_3__["default"]) return u[0].domainValueLookup(Object(_chunks_languageUtils_js__WEBPACK_IMPORTED_MODULE_0__["e"])(u[1]), u[2], void 0 === u[3] ? void 0 : Object(_chunks_languageUtils_js__WEBPACK_IMPORTED_MODULE_0__["c"])(u[3]));
            if (Object(_chunks_languageUtils_js__WEBPACK_IMPORTED_MODULE_0__["z"])(u[0])) return u[0]._ensureLoaded().then(function () {
              var n = Object(_chunks_languageUtils_js__WEBPACK_IMPORTED_MODULE_0__["k"])(Object(_chunks_languageUtils_js__WEBPACK_IMPORTED_MODULE_0__["e"])(u[1]), u[0], null, void 0 === u[3] ? void 0 : Object(_chunks_languageUtils_js__WEBPACK_IMPORTED_MODULE_0__["c"])(u[3]));
              return Object(_chunks_languageUtils_js__WEBPACK_IMPORTED_MODULE_0__["l"])(n, u[2]);
            });
            throw new Error("Invalid Parameter");
          });
        }, s.signatures.push({
          name: "domainname",
          min: "2",
          max: "4"
        }), s.functions.domaincode = function (a, c) {
          return s.standardFunctionAsync(a, c, function (a, c, u) {
            if (Object(_chunks_languageUtils_js__WEBPACK_IMPORTED_MODULE_0__["p"])(u, 2, 4), u[0] instanceof _Feature_js__WEBPACK_IMPORTED_MODULE_3__["default"]) return u[0].domainCodeLookup(Object(_chunks_languageUtils_js__WEBPACK_IMPORTED_MODULE_0__["e"])(u[1]), u[2], void 0 === u[3] ? void 0 : Object(_chunks_languageUtils_js__WEBPACK_IMPORTED_MODULE_0__["c"])(u[3]));
            if (Object(_chunks_languageUtils_js__WEBPACK_IMPORTED_MODULE_0__["z"])(u[0])) return u[0]._ensureLoaded().then(function () {
              var n = Object(_chunks_languageUtils_js__WEBPACK_IMPORTED_MODULE_0__["k"])(Object(_chunks_languageUtils_js__WEBPACK_IMPORTED_MODULE_0__["e"])(u[1]), u[0], null, void 0 === u[3] ? void 0 : Object(_chunks_languageUtils_js__WEBPACK_IMPORTED_MODULE_0__["c"])(u[3]));
              return Object(_chunks_languageUtils_js__WEBPACK_IMPORTED_MODULE_0__["m"])(n, u[2]);
            });
            throw new Error("Invalid Parameter");
          });
        }, s.signatures.push({
          name: "domaincode",
          min: "2",
          max: "4"
        })), s.functions.text = function (e, t) {
          return s.standardFunctionAsync(e, t, function (e, t, o) {
            if (Object(_chunks_languageUtils_js__WEBPACK_IMPORTED_MODULE_0__["p"])(o, 1, 2), !Object(_chunks_languageUtils_js__WEBPACK_IMPORTED_MODULE_0__["z"])(o[0])) return Object(_chunks_languageUtils_js__WEBPACK_IMPORTED_MODULE_0__["t"])(o[0], o[1]);
            {
              var n = Object(_chunks_languageUtils_js__WEBPACK_IMPORTED_MODULE_0__["C"])(o[1], "");
              if ("" === n) return o[0].castToText();
              if ("schema" === n.toLowerCase()) return o[0].convertToText("schema", e.abortSignal);
              if ("featureset" === n.toLowerCase()) return o[0].convertToText("featureset", e.abortSignal);
            }
          });
        }, s.functions.gdbversion = function (e, t) {
          return s.standardFunctionAsync(e, t, function (e, t, o) {
            if (Object(_chunks_languageUtils_js__WEBPACK_IMPORTED_MODULE_0__["p"])(o, 1, 1), o[0] instanceof _Feature_js__WEBPACK_IMPORTED_MODULE_3__["default"]) return o[0].gdbVersion();
            if (Object(_chunks_languageUtils_js__WEBPACK_IMPORTED_MODULE_0__["z"])(o[0])) return o[0].load().then(function (n) {
              return n.gdbVersion;
            });
            throw new Error("Invalid Parameter");
          });
        }, s.functions.schema = function (e, t) {
          return s.standardFunctionAsync(e, t, function (e, t, o) {
            if (Object(_chunks_languageUtils_js__WEBPACK_IMPORTED_MODULE_0__["p"])(o, 1, 1), Object(_chunks_languageUtils_js__WEBPACK_IMPORTED_MODULE_0__["z"])(o[0])) return o[0].load().then(function () {
              return _Dictionary_js__WEBPACK_IMPORTED_MODULE_1__["default"].convertObjectToArcadeDictionary(o[0].schema());
            });

            if (o[0] instanceof _Feature_js__WEBPACK_IMPORTED_MODULE_3__["default"]) {
              var n = o[0].schema();
              return n ? _Dictionary_js__WEBPACK_IMPORTED_MODULE_1__["default"].convertObjectToArcadeDictionary(n) : null;
            }

            throw new Error("Invalid Parameter");
          });
        };
      }
      /***/

    }
  }]);
})();
//# sourceMappingURL=arcade-functions-featuresetstring-js-es5.js.map