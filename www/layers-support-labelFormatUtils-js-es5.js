(function () {
  function _createForOfIteratorHelper(o, allowArrayLike) { var it; if (typeof Symbol === "undefined" || o[Symbol.iterator] == null) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e4) { throw _e4; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = o[Symbol.iterator](); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e5) { didErr = true; err = _e5; }, f: function f() { try { if (!normalCompletion && it["return"] != null) it["return"](); } finally { if (didErr) throw err; } } }; }

  function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

  function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

  function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

  function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["layers-support-labelFormatUtils-js"], {
    /***/
    "ezna":
    /*!****************************************************************!*\
      !*** ./node_modules/@arcgis/core/layers/support/labelUtils.js ***!
      \****************************************************************/

    /*! exports provided: convertTemplatedStringToArcade, getLabelExpression, getLabelExpressionArcade, getLabelExpressionSingleField, getSingleFieldArcadeExpression, getSingleFieldTemplatedString, sqlToTemplateString, templateStringToSql */

    /***/
    function ezna(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "convertTemplatedStringToArcade", function () {
        return p;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "getLabelExpression", function () {
        return l;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "getLabelExpressionArcade", function () {
        return a;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "getLabelExpressionSingleField", function () {
        return c;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "getSingleFieldArcadeExpression", function () {
        return w;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "getSingleFieldTemplatedString", function () {
        return x;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "sqlToTemplateString", function () {
        return o;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "templateStringToSql", function () {
        return i;
      });
      /* harmony import */


      var _core_string_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ../../core/string.js */
      "s7YA");
      /*
      All material copyright ESRI, All Rights Reserved, unless otherwise specified.
      See https://js.arcgis.com/4.18/esri/copyright.txt for details.
      */


      var n = new RegExp("__begin__", "ig"),
          r = new RegExp("__end__", "ig"),
          s = new RegExp("^__begin__", "i"),
          t = new RegExp("__end__$", "i");

      function o(e) {
        return e.replace(new RegExp("\\[", "g"), "{").replace(new RegExp("\\]", "g"), "}");
      }

      function i(e) {
        return e.replace(new RegExp("\\{", "g"), "[").replace(new RegExp("\\}", "g"), "]");
      }

      function l(e) {
        var n = {
          expression: "",
          type: "none"
        };
        return e.labelExpressionInfo ? e.labelExpressionInfo.value ? (n.expression = e.labelExpressionInfo.value, n.type = "conventional") : e.labelExpressionInfo.expression && (n.expression = e.labelExpressionInfo.expression, n.type = "arcade") : null != e.labelExpression && (n.expression = o(e.labelExpression), n.type = "conventional"), n;
      }

      function a(e) {
        var n = l(e);
        if (!n) return null;

        switch (n.type) {
          case "conventional":
            return p(n.expression);

          case "arcade":
            return n.expression;
        }

        return null;
      }

      function c(e) {
        var n = l(e);
        if (!n) return null;

        switch (n.type) {
          case "conventional":
            return x(n.expression);

          case "arcade":
            return w(n.expression);
        }

        return null;
      }

      function p(o) {
        var i;
        return o ? (i = Object(_core_string_js__WEBPACK_IMPORTED_MODULE_0__["replace"])(o, function (e) {
          return '__begin__$feature["' + e + '"]__end__';
        }), i = s.test(i) ? i.replace(s, "") : '"' + i, i = t.test(i) ? i.replace(t, "") : i + '"', i = i.replace(n, '" + ').replace(r, ' + "')) : i = '""', i;
      }

      var u = /^\s*\{([^}]+)\}\s*$/i;

      function x(e) {
        var n = e.match(u);
        return n && n[1].trim() || null;
      }

      var f = /^\s*(?:(?:\$feature\.(\w+))|(?:\$feature\[(["'])([\w\s]+)(\2)\]));?\s*$/i,
          _ = /^\s*(?:(?:\$feature\.(\w+))|(?:\$feature\[(["'])([\w\s]+)(\2)\]));?\s*(?:DomainName\(\s*\$feature\s*,\s*(["'])(\1|\3)(\5)\s*\));?\s*$/i,
          g = /^\s*(?:DomainName\(\s*\$feature\s*,\s*(["'])([\w\s]+)(\1)\s*\));?\s*$/i;

      function w(e) {
        if (!e) return null;

        var n = f.exec(e) || _.exec(e);

        return n ? n[1] || n[3] : (n = g.exec(e), n ? n[2] : null);
      }
      /***/

    },

    /***/
    "zKxS":
    /*!**********************************************************************!*\
      !*** ./node_modules/@arcgis/core/layers/support/labelFormatUtils.js ***!
      \**********************************************************************/

    /*! exports provided: createLabelFunction, formatField */

    /***/
    function zKxS(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "createLabelFunction", function () {
        return d;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "formatField", function () {
        return y;
      });
      /* harmony import */


      var _core_Logger_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ../../core/Logger.js */
      "6S2I");
      /* harmony import */


      var _core_Error_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ../../core/Error.js */
      "zlDU");
      /* harmony import */


      var _support_arcadeOnDemand_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ../../support/arcadeOnDemand.js */
      "gvqN");
      /* harmony import */


      var _fieldUtils_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./fieldUtils.js */
      "wdpY");
      /* harmony import */


      var _intl_date_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ../../intl/date.js */
      "RlM3");
      /* harmony import */


      var _intl_number_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ../../intl/number.js */
      "IeLS");
      /* harmony import */


      var _FieldsIndex_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ./FieldsIndex.js */
      "gLc9");
      /* harmony import */


      var _labelUtils_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! ./labelUtils.js */
      "ezna");
      /*
      All material copyright ESRI, All Rights Reserved, unless otherwise specified.
      See https://js.arcgis.com/4.18/esri/copyright.txt for details.
      */


      var c = _core_Logger_js__WEBPACK_IMPORTED_MODULE_0__["default"].getLogger("esri.layers.support.labelFormatUtils"),
          f = {
        type: "simple",
        evaluate: function evaluate() {
          return null;
        }
      },
          m = {
        getAttribute: function getAttribute(e, t) {
          return e.field(t);
        }
      };

      function d(_x, _x2, _x3) {
        return _d.apply(this, arguments);
      }

      function _d() {
        _d = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(e, a, o) {
          var i, l, d, g, _e2, _e3, t;

          return regeneratorRuntime.wrap(function _callee$(_context) {
            while (1) {
              switch (_context.prev = _context.next) {
                case 0:
                  if (!(!e || !e.symbol)) {
                    _context.next = 2;
                    break;
                  }

                  return _context.abrupt("return", f);

                case 2:
                  i = e.where;
                  l = Object(_labelUtils_js__WEBPACK_IMPORTED_MODULE_7__["getLabelExpression"])(e);

                  if (!i) {
                    _context.next = 10;
                    break;
                  }

                  _context.next = 7;
                  return Promise.all(
                  /*! import() | core-sql-WhereClause-js */
                  [__webpack_require__.e("default~arcade-featureSetUtils-js~arcade-functions-featuresetbase-js~arcade-functions-featuresetgeom~0707428b"), __webpack_require__.e("core-sql-WhereClause-js")]).then(__webpack_require__.bind(null,
                  /*! ../../core/sql/WhereClause.js */
                  "ZqIb"));

                case 7:
                  _context.t0 = _context.sent;
                  _context.next = 11;
                  break;

                case 10:
                  _context.t0 = null;

                case 11:
                  d = _context.t0;

                  if (!("arcade" === l.type)) {
                    _context.next = 19;
                    break;
                  }

                  _context.next = 15;
                  return Object(_support_arcadeOnDemand_js__WEBPACK_IMPORTED_MODULE_2__["createLabelExpression"])(l.expression, o, a);

                case 15:
                  _e2 = _context.sent;
                  g = {
                    type: "arcade",
                    evaluate: function evaluate(r) {
                      try {
                        var t = _e2.evaluate({
                          $feature: "attributes" in r ? _e2.repurposeFeature(r) : _e2.repurposeAdapter(r)
                        });

                        if (null != t) return t.toString();
                      } catch (e) {
                        c.error(new _core_Error_js__WEBPACK_IMPORTED_MODULE_1__["default"]("bad-arcade-expression", "Encountered an error when evaluating label expression for feature", {
                          feature: r,
                          expression: l
                        }));
                      }

                      return null;
                    },
                    needsHydrationToEvaluate: function needsHydrationToEvaluate() {
                      return null == Object(_labelUtils_js__WEBPACK_IMPORTED_MODULE_7__["getSingleFieldArcadeExpression"])(l.expression);
                    }
                  };
                  _context.next = 20;
                  break;

                case 19:
                  g = {
                    type: "simple",
                    evaluate: function evaluate(e) {
                      return l.expression.replace(/{[^}]*}/g, function (t) {
                        var r = t.slice(1, -1),
                            o = Object(_fieldUtils_js__WEBPACK_IMPORTED_MODULE_3__["getField"])(a, r);
                        if (!o) return t;
                        var i = null;

                        if ("attributes" in e) {
                          e && e.attributes && (i = e.attributes[o.name]);
                        } else i = e.field(o.name);

                        return null == i ? "" : y(i, o);
                      });
                    }
                  };

                case 20:
                  if (!i) {
                    _context.next = 30;
                    break;
                  }

                  _context.prev = 21;
                  _e3 = d.WhereClause.create(i, new _FieldsIndex_js__WEBPACK_IMPORTED_MODULE_6__["default"](a));
                  _context.next = 28;
                  break;

                case 25:
                  _context.prev = 25;
                  _context.t1 = _context["catch"](21);
                  return _context.abrupt("return", f);

                case 28:
                  t = g.evaluate;

                  g.evaluate = function (r) {
                    var a = "attributes" in r ? void 0 : m;
                    return _e3.testFeature(r, a) ? t(r) : null;
                  };

                case 30:
                  return _context.abrupt("return", g);

                case 31:
                case "end":
                  return _context.stop();
              }
            }
          }, _callee, null, [[21, 25]]);
        }));
        return _d.apply(this, arguments);
      }

      function y(e, t) {
        if (null == e) return "";
        var r = t.domain;
        if (r) if ("codedValue" === r.type || "coded-value" === r.type) {
          var _t = e;

          var _iterator = _createForOfIteratorHelper(r.codedValues),
              _step;

          try {
            for (_iterator.s(); !(_step = _iterator.n()).done;) {
              var _e = _step.value;
              if (_e.code === _t) return _e.name;
            }
          } catch (err) {
            _iterator.e(err);
          } finally {
            _iterator.f();
          }
        } else if ("range" === r.type) {
          var _t2 = +e,
              a = "range" in r ? r.range[0] : r.minValue,
              _n = "range" in r ? r.range[1] : r.maxValue;

          if (a <= _t2 && _t2 <= _n) return r.name;
        }
        var n = e;
        return "date" === t.type || "esriFieldTypeDate" === t.type ? n = Object(_intl_date_js__WEBPACK_IMPORTED_MODULE_4__["formatDate"])(n, Object(_intl_date_js__WEBPACK_IMPORTED_MODULE_4__["convertDateFormatToIntlOptions"])("short-date")) : Object(_fieldUtils_js__WEBPACK_IMPORTED_MODULE_3__["isNumericField"])(t) && (n = Object(_intl_number_js__WEBPACK_IMPORTED_MODULE_5__["formatNumber"])(+n)), n || "";
      }
      /***/

    }
  }]);
})();
//# sourceMappingURL=layers-support-labelFormatUtils-js-es5.js.map