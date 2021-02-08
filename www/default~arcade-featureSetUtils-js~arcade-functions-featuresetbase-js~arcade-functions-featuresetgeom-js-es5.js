(function () {
  function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

  function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

  function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

  function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

  function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

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

  function _createForOfIteratorHelper(o, allowArrayLike) { var it; if (typeof Symbol === "undefined" || o[Symbol.iterator] == null) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function (_e13) { function e(_x56) { return _e13.apply(this, arguments); } e.toString = function () { return _e13.toString(); }; return e; }(function (e) { throw e; }), f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = o[Symbol.iterator](); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function (_e14) { function e(_x57) { return _e14.apply(this, arguments); } e.toString = function () { return _e14.toString(); }; return e; }(function (e) { didErr = true; err = e; }), f: function f() { try { if (!normalCompletion && it["return"] != null) it["return"](); } finally { if (didErr) throw err; } } }; }

  function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

  function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["default~arcade-featureSetUtils-js~arcade-functions-featuresetbase-js~arcade-functions-featuresetgeom-js"], {
    /***/
    "B8fU":
    /*!*************************************************************************!*\
      !*** ./node_modules/@arcgis/core/arcade/featureset/support/sqlUtils.js ***!
      \*************************************************************************/

    /*! exports provided: combine, convertIntervalToSql, isSingleField, makeDateString, makeToday, predictType, reformulateWithoutField, scanForField, toWhereClause, toWhereClauseFromTree, translateFunctionToDatabaseSpecific */

    /***/
    function B8fU(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "combine", function () {
        return o;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "convertIntervalToSql", function () {
        return w;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "isSingleField", function () {
        return E;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "makeDateString", function () {
        return u;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "makeToday", function () {
        return i;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "predictType", function () {
        return f;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "reformulateWithoutField", function () {
        return s;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "scanForField", function () {
        return h;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "toWhereClause", function () {
        return n;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "toWhereClauseFromTree", function () {
        return a;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "translateFunctionToDatabaseSpecific", function () {
        return l;
      });
      /* harmony import */


      var _chunks_languageUtils_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ../../../chunks/languageUtils.js */
      "idrm");
      /* harmony import */


      var _shared_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./shared.js */
      "hTzF");
      /* harmony import */


      var _core_sql_WhereClause_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ../../../core/sql/WhereClause.js */
      "ZqIb");
      /*
      All material copyright ESRI, All Rights Reserved, unless otherwise specified.
      See https://js.arcgis.com/4.18/esri/copyright.txt for details.
      */


      function n(e, r) {
        return c(e.parseTree, r, e.parameters);
      }

      function a(e, r, t) {
        return c(e, r, t);
      }

      function s(e, n, a, s) {
        return _core_sql_WhereClause_js__WEBPACK_IMPORTED_MODULE_2__["WhereClause"].create(c(e.parseTree, _shared_js__WEBPACK_IMPORTED_MODULE_1__["FeatureServiceDatabaseType"].Standardised, e.parameters, n, a), s);
      }

      function o(e, a) {
        var s = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : "AND";
        return _core_sql_WhereClause_js__WEBPACK_IMPORTED_MODULE_2__["WhereClause"].create("((" + n(e, _shared_js__WEBPACK_IMPORTED_MODULE_1__["FeatureServiceDatabaseType"].Standardised) + ")" + s + "(" + n(a, _shared_js__WEBPACK_IMPORTED_MODULE_1__["FeatureServiceDatabaseType"].Standardised) + "))", e.fieldsIndex);
      }

      function c(e, r, t) {
        var n = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : null;
        var a = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : null;
        var s, o, f, g;

        switch (e.type) {
          case "interval":
            return w(c(e.value, r, t, n, a), e.qualifier, e.op);

          case "case_expression":
            {
              var _s = " CASE ";
              "simple" === e.format && (_s += c(e.operand, r, t, n, a));

              for (var _o = 0; _o < e.clauses.length; _o++) {
                _s += " WHEN " + c(e.clauses[_o].operand, r, t, n, a) + " THEN " + c(e.clauses[_o].value, r, t, n, a);
              }

              return null !== e["else"] && (_s += " ELSE " + c(e["else"], r, t, n, a)), _s += " END ", _s;
            }

          case "param":
            {
              var _n = t[e.value.toLowerCase()];

              if ("string" == typeof _n) {
                return "'" + t[e.value.toLowerCase()].toString().replace(/'/g, "''") + "'";
              }

              if (_n instanceof Date) return u(_n, r);

              if (_n instanceof Array) {
                var _e = [];

                for (var _t = 0; _t < _n.length; _t++) {
                  "string" == typeof _n[_t] ? _e.push("'" + _n[_t].toString().replace(/'/g, "''") + "'") : _n[_t] instanceof Date ? _e.push(u(_n[_t], r)) : _e.push(_n[_t].toString());
                }

                return _e;
              }

              return _n.toString();
            }

          case "expr_list":
            o = [];

            var _iterator = _createForOfIteratorHelper(e.value),
                _step;

            try {
              for (_iterator.s(); !(_step = _iterator.n()).done;) {
                var _s2 = _step.value;
                o.push(c(_s2, r, t, n, a));
              }
            } catch (err) {
              _iterator.e(err);
            } finally {
              _iterator.f();
            }

            return o;

          case "unary_expr":
            return " ( NOT " + c(e.expr, r, t, n, a) + " ) ";

          case "binary_expr":
            switch (e.operator) {
              case "AND":
                return " (" + c(e.left, r, t, n, a) + " AND " + c(e.right, r, t, n, a) + ") ";

              case "OR":
                return " (" + c(e.left, r, t, n, a) + " OR " + c(e.right, r, t, n, a) + ") ";

              case "IS":
                if ("null" !== e.right.type) throw new Error("Unsupported RHS for IS");
                return " (" + c(e.left, r, t, n, a) + " IS NULL )";

              case "ISNOT":
                if ("null" !== e.right.type) throw new Error("Unsupported RHS for IS");
                return " (" + c(e.left, r, t, n, a) + " IS NOT NULL )";

              case "IN":
                return s = [], "expr_list" === e.right.type ? (s = c(e.right, r, t, n, a), " (" + c(e.left, r, t, n, a) + " IN (" + s.join(",") + ")) ") : (g = c(e.right, r, t, n, a), g instanceof Array ? " (" + c(e.left, r, t, n, a) + " IN (" + g.join(",") + ")) " : " (" + c(e.left, r, t, n, a) + " IN (" + g + ")) ");

              case "NOT IN":
                return s = [], "expr_list" === e.right.type ? (s = c(e.right, r, t, n, a), " (" + c(e.left, r, t, n, a) + " NOT IN (" + s.join(",") + ")) ") : (g = c(e.right, r, t, n, a), g instanceof Array ? " (" + c(e.left, r, t, n, a) + " NOT IN (" + g.join(",") + ")) " : " (" + c(e.left, r, t, n, a) + " NOT IN (" + g + ")) ");

              case "BETWEEN":
                return f = c(e.right, r, t, n, a), " (" + c(e.left, r, t, n, a) + " BETWEEN " + f[0] + " AND " + f[1] + " ) ";

              case "NOTBETWEEN":
                return f = c(e.right, r, t, n, a), " (" + c(e.left, r, t, n, a) + " NOT BETWEEN " + f[0] + " AND " + f[1] + " ) ";

              case "LIKE":
                return "" !== e.escape ? " (" + c(e.left, r, t, n, a) + " LIKE " + c(e.right, r, t, n, a) + " ESCAPE '" + e.escape + "') " : " (" + c(e.left, r, t, n, a) + " LIKE " + c(e.right, r, t, n, a) + ") ";

              case "NOT LIKE":
                return "" !== e.escape ? " (" + c(e.left, r, t, n, a) + " NOT LIKE " + c(e.right, r, t, n, a) + " ESCAPE '" + e.escape + "') " : " (" + c(e.left, r, t, n, a) + " NOT LIKE " + c(e.right, r, t, n, a) + ") ";

              case "<>":
              case "<":
              case ">":
              case ">=":
              case "<=":
              case "=":
              case "*":
              case "-":
              case "+":
              case "/":
                return " (" + c(e.left, r, t, n, a) + " " + e.operator + " " + c(e.right, r, t, n, a) + ") ";
            }

            throw new Error("Not Supported Operator " + e.operator);

          case "null":
            return "null";

          case "bool":
            return !0 === e.value ? "1" : "0";

          case "string":
            return "'" + e.value.toString().replace(/'/g, "''") + "'";

          case "timestamp":
          case "date":
            return u(e.value, r);

          case "number":
            return e.value.toString();

          case "current_time":
            return i("date" === e.mode, r);

          case "column_ref":
            return n && n.toLowerCase() === e.column.toLowerCase() ? "(" + a + ")" : e.column;

          case "function":
            {
              var _s3 = c(e.args, r, t, n, a);

              return l(e.name, _s3, r);
            }
        }

        throw new Error("Unsupported sql syntax " + e.type);
      }

      function l(e, t, n) {
        switch (e.toLowerCase().trim()) {
          case "abs":
            if (1 !== t.length) throw new Error("Invalid Parameter for call to ABS");
            return "abs(" + t[0] + ")";

          case "ceiling":
          case "ceil":
            if (1 !== t.length) throw new Error("Invalid Parameter for call to CEILING");

            switch (n) {
              case _shared_js__WEBPACK_IMPORTED_MODULE_1__["FeatureServiceDatabaseType"].Standardised:
              case _shared_js__WEBPACK_IMPORTED_MODULE_1__["FeatureServiceDatabaseType"].StandardisedNoInterval:
              default:
                return "CEILING(" + t[0] + ")";
            }

          case "floor":
            if (1 !== t.length) throw new Error("Invalid Parameter for call to Floor");
            return "FLOOR(" + t[0] + ")";

          case "log":
            if (1 !== t.length) throw new Error("Invalid Parameter for call to LOG");
            return "LOG(" + t[0] + ")";

          case "log10":
            if (1 !== t.length) throw new Error("Invalid Parameter for call to LOG10");
            return "LOG10(" + t[0] + ")";

          case "power":
            if (2 !== t.length) throw new Error("Invalid Parameter for call to POWER");
            return "POWER(" + t[0] + "," + t[1] + ")";

          case "round":
            if (2 === t.length) return "ROUND(" + t[0] + "," + t[1] + ")";
            if (1 === t.length) return "ROUND(" + t[0] + ")";
            throw new Error("Invalid Parameter for call to ROUND");

          case "truncate":
            if (t.length < 1 || t.length > 2) throw new Error("Invalid Parameter for TRUNCATE function");

            switch (n) {
              case _shared_js__WEBPACK_IMPORTED_MODULE_1__["FeatureServiceDatabaseType"].SqlServer:
                return "ROUND(" + t[0] + (1 === t.length ? "0" : "," + t[1]) + ",1)";

              default:
                return "TRUNCATE(" + t[0] + (1 === t.length ? ")" : "," + t[1] + ")");
            }

          case "char_length":
          case "len":
            if (1 !== t.length) throw new Error("Invalid Parameter for CHAR_LENGTH function");

            switch (n) {
              case _shared_js__WEBPACK_IMPORTED_MODULE_1__["FeatureServiceDatabaseType"].SqlServer:
                return "LEN(" + t[0] + ")";

              case _shared_js__WEBPACK_IMPORTED_MODULE_1__["FeatureServiceDatabaseType"].Oracle:
                return "LENGTH(" + t[0] + ")";

              default:
                return "CHAR_LENGTH(" + t[0] + ")";
            }

          case "concat":
            if (t.length < 1) throw new Error("Invalid Parameter for CONCAT function");
            {
              var _e2 = "CONCAT(";

              for (var r = 0; r < t.length; r++) {
                0 !== r && (_e2 += ","), _e2 += t[r];
              }

              return _e2 += ")", _e2;
            }

          case "lower":
          case "lcase":
            if (1 !== t.length) throw new Error("Invalid Parameter for Lower function");
            return "LOWER(" + t[0] + ")";

          case "upper":
          case "ucase":
            if (1 !== t.length) throw new Error("Invalid Parameter for Upper function");
            return "UPPER(" + t[0] + ")";

          case "substring":
            {
              var _e3 = "";

              switch (n) {
                case _shared_js__WEBPACK_IMPORTED_MODULE_1__["FeatureServiceDatabaseType"].Oracle:
                  return _e3 = "SUBSTR(" + t[0] + "," + t[1], 3 === t.length && (_e3 += "," + t[2]), _e3 += ")", _e3;

                case _shared_js__WEBPACK_IMPORTED_MODULE_1__["FeatureServiceDatabaseType"].SqlServer:
                  return _e3 = 3 === t.length ? "SUBSTRING(" + t[0] + "," + t[1] + "," + t[2] + ")" : "SUBSTRING(" + t[0] + ",  " + t[1] + ", LEN(" + t[0] + ") - " + t[1] + ")", _e3;

                default:
                  return _e3 = "SUBSTRING(" + t[0] + " FROM " + t[1], 3 === t.length && (_e3 += " FOR " + t[2]), _e3 += ")", _e3;
              }
            }

          case "extract":
            return "EXTRACT(" + t[0].replace(/\'/g, "") + " FROM " + t[1] + ")";
        }

        throw new Error("Function Not Recognised");
      }

      function u(t, n) {
        var a = _chunks_languageUtils_js__WEBPACK_IMPORTED_MODULE_0__["M"].Moment(t),
            s = 0 === a.minute() && 0 === a.hour() && 0 === a.second() && 0 === a.millisecond();

        switch (n) {
          case _shared_js__WEBPACK_IMPORTED_MODULE_1__["FeatureServiceDatabaseType"].FILEGDB:
          case _shared_js__WEBPACK_IMPORTED_MODULE_1__["FeatureServiceDatabaseType"].Standardised:
          case _shared_js__WEBPACK_IMPORTED_MODULE_1__["FeatureServiceDatabaseType"].StandardisedNoInterval:
            return s ? "date '" + a.format("YYYY-MM-DD") + "'" : "date '" + a.format("YYYY-MM-DD HH:mm:ss") + "'";

          case _shared_js__WEBPACK_IMPORTED_MODULE_1__["FeatureServiceDatabaseType"].Oracle:
            return s ? "TO_DATE('" + a.format("YYYY-MM-DD") + "','YYYY-MM-DD')" : "TO_DATE('" + a.format("YYYY-MM-DD HH:mm:ss") + "','YYYY-MM-DD HH24:MI:SS')";

          case _shared_js__WEBPACK_IMPORTED_MODULE_1__["FeatureServiceDatabaseType"].SqlServer:
            return "'" + a.format(s ? "YYYY-MM-DD" : "YYYY-MM-DD HH:mm:ss") + "'";

          case _shared_js__WEBPACK_IMPORTED_MODULE_1__["FeatureServiceDatabaseType"].PGDB:
            return "#" + a.format(s ? "MM-DD-YYYY" : "MM-DD-YYYY HH:mm:ss") + "#";

          case _shared_js__WEBPACK_IMPORTED_MODULE_1__["FeatureServiceDatabaseType"].Postgres:
            return "TIMESTAMP '" + a.format(s ? "YYYY-MM-DD" : "YYYY-MM-DD HH:mm:ss") + "'";

          default:
            return "date '" + a.format("YYYY-MM-DD HH:mm:ss") + "'";
        }
      }

      function i(e, t) {
        switch (t) {
          case _shared_js__WEBPACK_IMPORTED_MODULE_1__["FeatureServiceDatabaseType"].FILEGDB:
          case _shared_js__WEBPACK_IMPORTED_MODULE_1__["FeatureServiceDatabaseType"].Standardised:
          case _shared_js__WEBPACK_IMPORTED_MODULE_1__["FeatureServiceDatabaseType"].StandardisedNoInterval:
          case _shared_js__WEBPACK_IMPORTED_MODULE_1__["FeatureServiceDatabaseType"].Oracle:
            return e ? "CURRENT_DATE" : "CURRENT_TIMESTAMP";

          case _shared_js__WEBPACK_IMPORTED_MODULE_1__["FeatureServiceDatabaseType"].SqlServer:
            return e ? "CAST(GETDATE() AS DATE)" : "GETDATE()";

          case _shared_js__WEBPACK_IMPORTED_MODULE_1__["FeatureServiceDatabaseType"].PGDB:
          case _shared_js__WEBPACK_IMPORTED_MODULE_1__["FeatureServiceDatabaseType"].Postgres:
          default:
            return e ? "CURRENT_DATE" : "CURRENT_TIMESTAMP";
        }
      }

      function f(e, r) {
        var t = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};
        var n = {},
            a = {},
            s = {
          esriFieldTypeSmallInteger: "integer",
          esriFieldTypeInteger: "integer",
          esriFieldTypeSingle: "double",
          esriFieldTypeDouble: "double",
          esriFieldTypeString: "string",
          esriFieldTypeDate: "date",
          esriFieldTypeOID: "integer",
          oid: "integer",
          "long": "integer",
          "small-integer": "integer",
          integer: "integer",
          single: "double",
          "double": "double",
          date: "date",
          string: "string"
        };

        var _iterator2 = _createForOfIteratorHelper(r),
            _step2;

        try {
          for (_iterator2.s(); !(_step2 = _iterator2.n()).done;) {
            var _e5 = _step2.value;
            var _r2 = s[_e5.type];
            n[_e5.name.toLowerCase()] = void 0 === _r2 ? "" : _r2;
          }
        } catch (err) {
          _iterator2.e(err);
        } finally {
          _iterator2.f();
        }

        for (var _e4 in t) {
          var _r = s[t[_e4]];
          a[_e4.toLowerCase()] = void 0 === _r ? "" : _r;
        }

        switch (g(n, e.parseTree, e.parameters, a)) {
          case "double":
            return "double";

          case "integer":
            return "integer";

          case "double":
            return "double";

          case "date":
            return "date";

          case "string":
            return "string";
        }

        return "";
      }

      function g(e, r, t, n) {
        var a;

        switch (r.type) {
          case "interval":
            return "integer";

          case "case_expression":
            {
              var _a = [];

              if ("simple" === r.format) {
                for (var _s4 = 0; _s4 < r.clauses.length; _s4++) {
                  _a.push(g(e, r.clauses[_s4].value, t, n));
                }

                null !== r["else"] && _a.push(g(e, r["else"], t, n));
              } else {
                for (var _s5 = 0; _s5 < r.clauses.length; _s5++) {
                  _a.push(g(e, r["else"], t, n));
                }

                null !== r["else"] && _a.push(g(e, r["else"], t, n));
              }

              return d(_a);
            }

          case "param":
            {
              var _e6 = n[r.value.toLowerCase()];

              if (void 0 === _e6 && t) {
                var _e7 = t[r.value.toLowerCase()];
                if (void 0 === _e7) return "";
                if (null === _e7) return "";
                if ("string" == typeof _e7 || _e7 instanceof String) return "string";
                if ("boolean" == typeof _e7) return "boolean";
                if (_e7 instanceof Date) return "date";
                if ("number" == typeof _e7) return _e7 % 1 == 0 ? "integer" : "double";
              }

              return void 0 === _e6 ? "" : _e6;
            }

          case "expr_list":
            {
              var _a2 = [];

              var _iterator3 = _createForOfIteratorHelper(r.value),
                  _step3;

              try {
                for (_iterator3.s(); !(_step3 = _iterator3.n()).done;) {
                  var _s6 = _step3.value;

                  _a2.push(g(e, _s6, t, n));
                }
              } catch (err) {
                _iterator3.e(err);
              } finally {
                _iterator3.f();
              }

              return _a2;
            }

          case "unary_expr":
            return "boolean";

          case "binary_expr":
            switch (r.operator) {
              case "AND":
              case "OR":
                return "boolean";

              case "IS":
              case "ISNOT":
                if ("null" !== r.right.type) throw new Error("Unsupported RHS for IS");
                return "boolean";

              case "IN":
              case "NOT IN":
              case "BETWEEN":
              case "NOTBETWEEN":
              case "LIKE":
              case "NOT LIKE":
                return "boolean";

              case "<>":
              case "<":
              case ">":
              case ">=":
              case "<=":
              case "=":
                return "boolean";

              case "*":
              case "-":
              case "+":
              case "/":
                return d([g(e, r.left, t, n), g(e, r.right, t, n)]);

              default:
                throw new Error("Not Supported Operator " + r.operator);
            }

          case "null":
            return "";

          case "bool":
            return "boolean";

          case "string":
            return "string";

          case "number":
            return null === r.value ? "" : r.value % 1 == 0 ? "integer" : "double";

          case "date":
          case "timestamp":
          case "current_time":
            return "date";

          case "column_ref":
            {
              var _t2 = e[r.column.toLowerCase()];
              return void 0 === _t2 ? "" : _t2;
            }

          case "function":
            switch (r.name.toLowerCase()) {
              case "position":
              case "extract":
              case "char_length":
                return "integer";

              case "round":
                return a = g(e, r.args, t, n), a instanceof Array ? a.length > 0 ? a[0] : "" : a;

              case "sign":
                return a = g(e, r.args, t, n), a instanceof Array && (a = d(a)), "integer" === a || "double" === a ? a : "double";

              case "ceiling":
              case "floor":
              case "abs":
                {
                  var _a3 = g(e, r.args, t, n);

                  return _a3 instanceof Array ? d(_a3) : _a3;
                }

              case "area":
              case "length":
              case "log":
              case "log10":
              case "sin":
              case "cos":
              case "tan":
              case "asin":
              case "acos":
              case "atan":
              case "power":
                return "double";

              case "substring":
              case "trim":
              case "concat":
              case "lower":
              case "upper":
                return "string";

              case "truncate":
                return "double";

              case "round":
                return a = g(e, r.args, t, n), a instanceof Array ? a.length > 0 ? a[0] : "" : a;
            }

            return "";
        }

        throw new Error("Unsupported sql syntax " + r.type);
      }

      var p = {
        "boolean": 1,
        string: 2,
        integer: 3,
        "double": 4,
        date: 5
      };

      function d(e) {
        if (e) {
          var r = "";

          var _iterator4 = _createForOfIteratorHelper(e),
              _step4;

          try {
            for (_iterator4.s(); !(_step4 = _iterator4.n()).done;) {
              var t = _step4.value;
              "" !== t && (r = "" === r || p[r] < p[t] ? t : r);
            }
          } catch (err) {
            _iterator4.e(err);
          } finally {
            _iterator4.f();
          }

          return r;
        }

        return "";
      }

      function h(e, r) {
        return m(e.parseTree, r);
      }

      function E(e) {
        return "column_ref" === e.parseTree.type;
      }

      function m(e, r) {
        if (null == e) return !1;

        switch (e.type) {
          case "when_clause":
            return m(e.operand, r) || m(e.value, r);

          case "case_expression":
            var _iterator5 = _createForOfIteratorHelper(e.clauses),
                _step5;

            try {
              for (_iterator5.s(); !(_step5 = _iterator5.n()).done;) {
                var t = _step5.value;
                if (m(t, r)) return !0;
              }
            } catch (err) {
              _iterator5.e(err);
            } finally {
              _iterator5.f();
            }

            return !("simple" !== e.format || !m(e.operand, r)) || !(null === e["else"] || !m(e["else"], r));

          case "param":
            return !1;

          case "expr_list":
            var _iterator6 = _createForOfIteratorHelper(e.value),
                _step6;

            try {
              for (_iterator6.s(); !(_step6 = _iterator6.n()).done;) {
                var _t3 = _step6.value;
                if (m(_t3, r)) return !0;
              }
            } catch (err) {
              _iterator6.e(err);
            } finally {
              _iterator6.f();
            }

            return !1;

          case "unary_expr":
            return m(e.expr, r);

          case "binary_expr":
            return m(e.left, r) || m(e.right, r);

          case "null":
          case "bool":
          case "date":
          case "timestamp":
          case "string":
          case "number":
            return !1;

          case "column_ref":
            return r.toLowerCase() === e.column.toLowerCase();

          case "function":
            return m(e.args, r);
        }

        return !1;
      }

      function T(e) {
        var r = "";
        return r += e.period.toUpperCase(), r;
      }

      function w(e, r, t) {
        var n = "";
        return n = "interval-period" === r.type ? T(r) : T(r.start) + " TO " + T(r.end), "INTERVAL " + t + " " + e + " " + n;
      }
      /***/

    },

    /***/
    "GN9X":
    /*!**********************************************************************!*\
      !*** ./node_modules/@arcgis/core/arcade/featureset/sources/Empty.js ***!
      \**********************************************************************/

    /*! exports provided: default */

    /***/
    function GN9X(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony import */


      var _core_promiseUtils_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ../../../core/promiseUtils.js */
      "9MzC");
      /* harmony import */


      var _support_shared_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ../support/shared.js */
      "hTzF");
      /* harmony import */


      var _support_IdSet_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ../support/IdSet.js */
      "ZPxV");
      /* harmony import */


      var _support_FeatureSet_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ../support/FeatureSet.js */
      "T3Nt");
      /*
      All material copyright ESRI, All Rights Reserved, unless otherwise specified.
      See https://js.arcgis.com/4.18/esri/copyright.txt for details.
      */

      /* harmony default export */


      __webpack_exports__["default"] = /*#__PURE__*/function (_support_FeatureSet_j) {
        _inherits(_class, _support_FeatureSet_j);

        var _super = _createSuper(_class);

        function _class(e) {
          var _this;

          _classCallCheck(this, _class);

          _this = _super.call(this, e), _this.declaredClass = "esri.layers.featureset.sources.Empty", _this._maxProcessing = 1e3, _this._wset = new _support_IdSet_js__WEBPACK_IMPORTED_MODULE_2__["default"]([], [], !1, null), _this._parent = e.parentfeatureset, _this._databaseType = _support_shared_js__WEBPACK_IMPORTED_MODULE_1__["FeatureServiceDatabaseType"].Standardised;
          return _this;
        }

        _createClass(_class, [{
          key: "_getSet",
          value: function _getSet() {
            return Object(_core_promiseUtils_js__WEBPACK_IMPORTED_MODULE_0__["resolve"])(this._wset);
          }
        }, {
          key: "optimisePagingFeatureQueries",
          value: function optimisePagingFeatureQueries() {}
        }, {
          key: "_isInFeatureSet",
          value: function _isInFeatureSet() {
            return _support_shared_js__WEBPACK_IMPORTED_MODULE_1__["IdState"].NotInFeatureSet;
          }
        }, {
          key: "_getFeature",
          value: function _getFeature() {
            return Object(_core_promiseUtils_js__WEBPACK_IMPORTED_MODULE_0__["reject"])(new Error("No Feature Found in EmptySet"));
          }
        }, {
          key: "queryAttachments",
          value: function queryAttachments() {
            return Object(_core_promiseUtils_js__WEBPACK_IMPORTED_MODULE_0__["resolve"])([]);
          }
        }, {
          key: "_getFeatures",
          value: function _getFeatures() {
            return Object(_core_promiseUtils_js__WEBPACK_IMPORTED_MODULE_0__["resolve"])("success");
          }
        }, {
          key: "_featureFromCache",
          value: function _featureFromCache() {
            return null;
          }
        }, {
          key: "_fetchAndRefineFeatures",
          value: function _fetchAndRefineFeatures() {
            return Object(_core_promiseUtils_js__WEBPACK_IMPORTED_MODULE_0__["reject"])(new Error("Fetch and Refine should not be called in this featureset"));
          }
        }, {
          key: "_getFilteredSet",
          value: function _getFilteredSet() {
            return Object(_core_promiseUtils_js__WEBPACK_IMPORTED_MODULE_0__["resolve"])(new _support_IdSet_js__WEBPACK_IMPORTED_MODULE_2__["default"]([], [], !1, null));
          }
        }, {
          key: "_stat",
          value: function _stat(e, t, r, s, u, a, n) {
            return this._manualStat(e, t, a, n);
          }
        }, {
          key: "_canDoAggregates",
          value: function _canDoAggregates() {
            return Object(_core_promiseUtils_js__WEBPACK_IMPORTED_MODULE_0__["resolve"])(!1);
          }
        }]);

        return _class;
      }(_support_FeatureSet_js__WEBPACK_IMPORTED_MODULE_3__["default"]);
      /***/

    },

    /***/
    "H72m":
    /*!**********************************************************************!*\
      !*** ./node_modules/@arcgis/core/arcade/featureset/support/cache.js ***!
      \**********************************************************************/

    /*! exports provided: default */

    /***/
    function H72m(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /*
      All material copyright ESRI, All Rights Reserved, unless otherwise specified.
      See https://js.arcgis.com/4.18/esri/copyright.txt for details.
      */


      var a = /*#__PURE__*/function () {
        function a() {
          _classCallCheck(this, a);

          this._databaseTypeMetaData = {}, this._layerInfo = {};
        }

        _createClass(a, [{
          key: "clearDatabaseType",
          value: function clearDatabaseType(_a4) {
            void 0 === this._databaseTypeMetaData[_a4] && delete this._databaseTypeMetaData[_a4];
          }
        }, {
          key: "getDatabaseType",
          value: function getDatabaseType(_a5) {
            return "MUSTBESET" === _a5 || void 0 === this._databaseTypeMetaData[_a5] ? null : this._databaseTypeMetaData[_a5];
          }
        }, {
          key: "setDatabaseType",
          value: function setDatabaseType(_a6, e) {
            this._databaseTypeMetaData[_a6] = e;
          }
        }, {
          key: "getLayerInfo",
          value: function getLayerInfo(_a7) {
            return void 0 === this._layerInfo[_a7] ? null : this._layerInfo[_a7];
          }
        }, {
          key: "setLayerInfo",
          value: function setLayerInfo(_a8, e) {
            this._layerInfo[_a8] = e;
          }
        }, {
          key: "clearLayerInfo",
          value: function clearLayerInfo(_a9) {
            void 0 !== this._layerInfo[_a9] && delete this._layerInfo[_a9];
          }
        }]);

        return a;
      }();

      a.applicationCache = null;
      /* harmony default export */

      __webpack_exports__["default"] = a;
      /***/
    },

    /***/
    "T3Nt":
    /*!***************************************************************************!*\
      !*** ./node_modules/@arcgis/core/arcade/featureset/support/FeatureSet.js ***!
      \***************************************************************************/

    /*! exports provided: default */

    /***/
    function T3Nt(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony import */


      var _core_promiseUtils_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ../../../core/promiseUtils.js */
      "9MzC");
      /* harmony import */


      var _geometry_SpatialReference_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ../../../geometry/SpatialReference.js */
      "WZb1");
      /* harmony import */


      var _shared_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./shared.js */
      "hTzF");
      /* harmony import */


      var _geometry_geometryEngineAsync_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ../../../geometry/geometryEngineAsync.js */
      "u1HQ");
      /* harmony import */


      var _FeatureSetIterator_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ./FeatureSetIterator.js */
      "xPNU");
      /* harmony import */


      var _IdSet_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ./IdSet.js */
      "ZPxV");
      /* harmony import */


      var _cache_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ./cache.js */
      "H72m");
      /* harmony import */


      var _core_sql_WhereClause_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! ../../../core/sql/WhereClause.js */
      "ZqIb");
      /* harmony import */


      var _stats_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! ./stats.js */
      "sdy9");
      /* harmony import */


      var _layers_support_FieldsIndex_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! ../../../layers/support/FieldsIndex.js */
      "gLc9");
      /*
      All material copyright ESRI, All Rights Reserved, unless otherwise specified.
      See https://js.arcgis.com/4.18/esri/copyright.txt for details.
      */


      var v = /*#__PURE__*/function () {
        function v(e) {
          _classCallCheck(this, v);

          this.recentlyUsedQueries = null, this._idstates = [], this._parent = null, this._wset = null, this._mainSetInUse = null, this._maxProcessing = 200, this._maxQuery = 500, this._totalCount = -1, this._databaseType = _shared_js__WEBPACK_IMPORTED_MODULE_2__["FeatureServiceDatabaseType"].NotEvaluated, this._databaseTypeProbed = null, this.declaredRootClass = "esri.arcade.featureset.support.FeatureSet", this._featureCache = [], this.types = null, this.fields = null, this.geometryType = "", this.objectIdField = "", this.globalIdField = "", this.spatialReference = null, this.hasM = !1, this.hasZ = !1, this._transparent = !1, this.loaded = !1, this._loadPromise = null, this._fieldsIndex = null, e && e.lrucache && (this.recentlyUsedQueries = e.lrucache);
        }

        _createClass(v, [{
          key: "optimisePagingFeatureQueries",
          value: function optimisePagingFeatureQueries(e) {
            this._parent && this._parent.optimisePagingFeatureQueries(e);
          }
        }, {
          key: "_hasMemorySource",
          value: function _hasMemorySource() {
            return !0;
          }
        }, {
          key: "prop",
          value: function prop(e, t) {
            return void 0 === t ? this[e] : (void 0 !== this[e] && (this[e] = t), this);
          }
        }, {
          key: "end",
          value: function end() {
            return null !== this._parent && !0 === this._parent._transparent ? this._parent.end() : this._parent;
          }
        }, {
          key: "_ensureLoaded",
          value: function _ensureLoaded() {
            return this.load();
          }
        }, {
          key: "load",
          value: function load() {
            var _this2 = this;

            return null === this._loadPromise && (this._loadPromise = Object(_core_promiseUtils_js__WEBPACK_IMPORTED_MODULE_0__["create"])(function (e, t) {
              if (!0 === _this2._parent.loaded) return _this2._initialiseFeatureSet(), void e(_this2);

              _this2._parent.load().then(function () {
                try {
                  _this2._initialiseFeatureSet(), e(_this2);
                } catch (e) {
                  t(e);
                }
              }, t);
            })), this._loadPromise;
          }
        }, {
          key: "_initialiseFeatureSet",
          value: function _initialiseFeatureSet() {
            null !== this._parent ? (this.fields = this._parent.fields.slice(0), this.geometryType = this._parent.geometryType, this.objectIdField = this._parent.objectIdField, this.globalIdField = this._parent.globalIdField, this.spatialReference = this._parent.spatialReference, this.hasM = this._parent.hasM, this.hasZ = this._parent.hasZ, this.typeIdField = this._parent.typeIdField, this.types = this._parent.types) : (this.fields = [], this.typeIdField = "", this.objectIdField = "", this.globalIdField = "", this.spatialReference = new _geometry_SpatialReference_js__WEBPACK_IMPORTED_MODULE_1__["default"]({
              wkid: 4326
            }), this.geometryType = _shared_js__WEBPACK_IMPORTED_MODULE_2__["layerGeometryEsriConstants"].point);
          }
        }, {
          key: "getField",
          value: function getField(e, t) {
            var r;
            return (t = t || this.fields) && (e = e.toLowerCase(), t.some(function (t) {
              return t && t.name.toLowerCase() === e && (r = t), !!r;
            })), r;
          }
        }, {
          key: "getFieldsIndex",
          value: function getFieldsIndex() {
            return null === this._fieldsIndex && (this._fieldsIndex = new _layers_support_FieldsIndex_js__WEBPACK_IMPORTED_MODULE_9__["default"](this.fields)), this._fieldsIndex;
          }
        }, {
          key: "_maxProcessingRate",
          value: function _maxProcessingRate() {
            return null !== this._parent ? Math.min(this._maxProcessing, this._parent._maxProcessingRate()) : Math.min(this._maxProcessing, this._maxQueryRate());
          }
        }, {
          key: "_maxQueryRate",
          value: function _maxQueryRate() {
            return null !== this._parent ? Math.max(this._maxQuery, this._parent._maxQueryRate()) : this._maxQuery;
          }
        }, {
          key: "_checkCancelled",
          value: function _checkCancelled(e) {
            if (null !== e && e.aborted) throw new Error("Operation has been cancelled.");
          }
        }, {
          key: "nativeCapabilities",
          value: function nativeCapabilities() {
            return this._parent.nativeCapabilities();
          }
        }, {
          key: "_canDoAggregates",
          value: function _canDoAggregates(e, r, n, s, i) {
            return null === this._parent ? Object(_core_promiseUtils_js__WEBPACK_IMPORTED_MODULE_0__["resolve"])(!1) : this._parent._canDoAggregates(e, r, n, s, i);
          }
        }, {
          key: "_getAggregatePagesDataSourceDefinition",
          value: function _getAggregatePagesDataSourceDefinition(e, t, n, s, i, a, h) {
            return null === this._parent ? Object(_core_promiseUtils_js__WEBPACK_IMPORTED_MODULE_0__["reject"])(new Error("Should never be called")) : this._parent._getAggregatePagesDataSourceDefinition(e, t, n, s, i, a, h);
          }
        }, {
          key: "_getAgregagtePhysicalPage",
          value: function _getAgregagtePhysicalPage(e, t, n) {
            return null === this._parent ? Object(_core_promiseUtils_js__WEBPACK_IMPORTED_MODULE_0__["reject"])(new Error("Should never be called")) : this._parent._getAgregagtePhysicalPage(e, t, n);
          }
        }, {
          key: "databaseType",
          value: function databaseType() {
            var _this3 = this;

            if (this._databaseType === _shared_js__WEBPACK_IMPORTED_MODULE_2__["FeatureServiceDatabaseType"].NotEvaluated) {
              if (null !== _cache_js__WEBPACK_IMPORTED_MODULE_6__["default"].applicationCache) {
                var e = _cache_js__WEBPACK_IMPORTED_MODULE_6__["default"].applicationCache.getDatabaseType(this._cacheableFeatureSetSourceKey());

                if (null !== e) return e;
              }

              if (null !== this._databaseTypeProbed) return this._databaseTypeProbed;
              var t = [{
                thetype: _shared_js__WEBPACK_IMPORTED_MODULE_2__["FeatureServiceDatabaseType"].SqlServer,
                testwhere: "(CAST( '2015-01-01' as DATETIME) = CAST( '2015-01-01' as DATETIME)) AND OBJECTID<0"
              }, {
                thetype: _shared_js__WEBPACK_IMPORTED_MODULE_2__["FeatureServiceDatabaseType"].Oracle,
                testwhere: "(TO_DATE('2003-11-18','YYYY-MM-DD') = TO_DATE('2003-11-18','YYYY-MM-DD')) AND OBJECTID<0"
              }, {
                thetype: _shared_js__WEBPACK_IMPORTED_MODULE_2__["FeatureServiceDatabaseType"].StandardisedNoInterval,
                testwhere: "(date '2015-01-01 10:10:10' = date '2015-01-01 10:10:10') AND OBJECTID<0"
              }];
              var r = Object(_core_promiseUtils_js__WEBPACK_IMPORTED_MODULE_0__["create"])(function (e, r) {
                _this3._getDatabaseTypeImpl(t, 0).then(function (t) {
                  _this3._databaseType = t, e(_this3._databaseType);
                }, function (e) {
                  r(e);
                });
              });
              return null !== _cache_js__WEBPACK_IMPORTED_MODULE_6__["default"].applicationCache && (_cache_js__WEBPACK_IMPORTED_MODULE_6__["default"].applicationCache.setDatabaseType(this._cacheableFeatureSetSourceKey(), r), r = r["catch"](function (e) {
                throw _cache_js__WEBPACK_IMPORTED_MODULE_6__["default"].applicationCache.clearDatabaseType(_this3._cacheableFeatureSetSourceKey()), e;
              })), this._databaseTypeProbed = r, this._databaseTypeProbed;
            }

            return Object(_core_promiseUtils_js__WEBPACK_IMPORTED_MODULE_0__["resolve"])(this._databaseType);
          }
        }, {
          key: "_cacheableFeatureSetSourceKey",
          value: function _cacheableFeatureSetSourceKey() {
            return "MUSTBESET";
          }
        }, {
          key: "_getDatabaseTypeImpl",
          value: function _getDatabaseTypeImpl(e, r) {
            var _this4 = this;

            return r >= e.length ? Object(_core_promiseUtils_js__WEBPACK_IMPORTED_MODULE_0__["resolve"])(_shared_js__WEBPACK_IMPORTED_MODULE_2__["FeatureServiceDatabaseType"].StandardisedNoInterval) : this._runDatabaseProbe(e[r].testwhere).then(function (t) {
              return !0 === t ? e[r].thetype : _this4._getDatabaseTypeImpl(e, r + 1);
            });
          }
        }, {
          key: "_runDatabaseProbe",
          value: function _runDatabaseProbe(e) {
            return null !== this._parent ? this._parent._runDatabaseProbe(e) : Object(_core_promiseUtils_js__WEBPACK_IMPORTED_MODULE_0__["reject"])(new Error("Not Implemented"));
          }
        }, {
          key: "isTable",
          value: function isTable() {
            return this._parent.isTable();
          }
        }, {
          key: "_featureFromCache",
          value: function _featureFromCache(e) {
            if (void 0 !== this._featureCache[e]) return this._featureCache[e];
          }
        }, {
          key: "_isInFeatureSet",
          value: function _isInFeatureSet(e) {
            return _shared_js__WEBPACK_IMPORTED_MODULE_2__["IdState"].Unknown;
          }
        }, {
          key: "_getSet",
          value: function _getSet(e) {
            throw new Error("Not implemented in abstract class");
          }
        }, {
          key: "_getFeature",
          value: function _getFeature(e, n, s) {
            var _this5 = this;

            try {
              return this._checkCancelled(s), void 0 !== this._featureFromCache(n) ? Object(_core_promiseUtils_js__WEBPACK_IMPORTED_MODULE_0__["resolve"])(this._featureFromCache(n)) : this._getFeatures(e, n, this._maxProcessingRate(), s).then(function () {
                return _this5._checkCancelled(s), void 0 !== _this5._featureFromCache(n) ? _this5._featureFromCache(n) : Object(_core_promiseUtils_js__WEBPACK_IMPORTED_MODULE_0__["reject"])(new Error("Feature Not Found"));
              });
            } catch (e) {
              return Object(_core_promiseUtils_js__WEBPACK_IMPORTED_MODULE_0__["reject"])(e);
            }
          }
        }, {
          key: "_getFeatureBatch",
          value: function _getFeatureBatch(e, t) {
            var _this6 = this;

            try {
              this._checkCancelled(t);

              var r = new _IdSet_js__WEBPACK_IMPORTED_MODULE_5__["default"]([], e, !1, null),
                  n = [];
              return this._getFeatures(r, -1, e.length, t).then(function () {
                _this6._checkCancelled(t);

                var _iterator7 = _createForOfIteratorHelper(e),
                    _step7;

                try {
                  for (_iterator7.s(); !(_step7 = _iterator7.n()).done;) {
                    var _t4 = _step7.value;
                    void 0 !== _this6._featureFromCache(_t4) && n.push(_this6._featureFromCache(_t4));
                  }
                } catch (err) {
                  _iterator7.e(err);
                } finally {
                  _iterator7.f();
                }

                return n;
              });
            } catch (e) {
              return Object(_core_promiseUtils_js__WEBPACK_IMPORTED_MODULE_0__["reject"])(e);
            }
          }
        }, {
          key: "_getFeatures",
          value: function _getFeatures(e, r, n, s) {
            return Object(_core_promiseUtils_js__WEBPACK_IMPORTED_MODULE_0__["resolve"])("success");
          }
        }, {
          key: "_getFilteredSet",
          value: function _getFilteredSet(e, t, r, n, s) {
            throw new Error("Not implemented in abstract class");
          }
        }, {
          key: "_refineSetBlock",
          value: function _refineSetBlock(e, n, s) {
            var _this7 = this;

            try {
              if (!0 === this._checkIfNeedToExpandCandidatePage(e, this._maxQueryRate())) return this._expandPagedSet(e, this._maxQueryRate(), 0, 0, s).then(function () {
                return _this7._refineSetBlock(e, n, s);
              });

              this._checkCancelled(s);

              var r = e._candidates.length;

              this._refineKnowns(e, n);

              var i = r - e._candidates.length;
              return 0 === e._candidates.length || i >= n ? Object(_core_promiseUtils_js__WEBPACK_IMPORTED_MODULE_0__["resolve"])(e) : this._refineIfParentKnown(e, n - i, s).then(function () {
                if (_this7._checkCancelled(s), _this7._refineKnowns(e, n - i), i = r - e._candidates.length, i < n && e._candidates.length > 0) {
                  var t = n - i,
                      _r3 = _this7._prepareFetchAndRefineSet(e._candidates);

                  return _this7._fetchAndRefineFeatures(_r3, _r3.length > t ? t : e._candidates.length, s).then(function () {
                    return _this7._checkCancelled(s), _this7._refineKnowns(e, n - i), e;
                  });
                }

                return e;
              });
            } catch (e) {
              return Object(_core_promiseUtils_js__WEBPACK_IMPORTED_MODULE_0__["reject"])(e);
            }
          }
        }, {
          key: "_fetchAndRefineFeatures",
          value: function _fetchAndRefineFeatures(e, t, r) {
            return null;
          }
        }, {
          key: "_prepareFetchAndRefineSet",
          value: function _prepareFetchAndRefineSet(e) {
            var t = [];

            for (var r = 0; r < e.length; r++) {
              this._isPhysicalFeature(e[r]) && t.push(e[r]);
            }

            return t;
          }
        }, {
          key: "_isPhysicalFeature",
          value: function _isPhysicalFeature(e) {
            return null === this._parent || this._parent._isPhysicalFeature(e);
          }
        }, {
          key: "_refineKnowns",
          value: function _refineKnowns(e, t) {
            var r = 0,
                n = null;
            var s = [];
            t = this._maxQueryRate();

            for (var i = 0; i < e._candidates.length && "GETPAGES" !== e._candidates[i]; i++) {
              var a = !1;

              var l = this._candidateIdTransform(e._candidates[i]);

              l !== e._candidates[i] && (a = !0);

              var u = this._isInFeatureSet(l);

              if (u === _shared_js__WEBPACK_IMPORTED_MODULE_2__["IdState"].InFeatureSet) !0 === a ? e._known.indexOf(l) < 0 && (e._known.push(l), r += 1) : (e._known.push(e._candidates[i]), r += 1), null === n ? n = {
                start: i,
                end: i
              } : n.end === i - 1 ? n.end = i : (s.push(n), n = {
                start: i,
                end: i
              });else if (u === _shared_js__WEBPACK_IMPORTED_MODULE_2__["IdState"].NotInFeatureSet) null === n ? n = {
                start: i,
                end: i
              } : n.end === i - 1 ? n.end = i : (s.push(n), n = {
                start: i,
                end: i
              }), r += 1;else if (u === _shared_js__WEBPACK_IMPORTED_MODULE_2__["IdState"].Unknown && (r += 1, !0 === e._ordered)) break;
              if (r >= t) break;
            }

            null !== n && s.push(n);

            for (var _t5 = s.length - 1; _t5 >= 0; _t5--) {
              e._candidates.splice(s[_t5].start, s[_t5].end - s[_t5].start + 1);
            }
          }
        }, {
          key: "_refineIfParentKnown",
          value: function _refineIfParentKnown(e, t, r) {
            var n = new _IdSet_js__WEBPACK_IMPORTED_MODULE_5__["default"]([], [], e._ordered, null);
            return n._candidates = e._candidates.slice(0), this._parent._refineSetBlock(n, t, r);
          }
        }, {
          key: "_candidateIdTransform",
          value: function _candidateIdTransform(e) {
            return this._parent._candidateIdTransform(e);
          }
        }, {
          key: "_checkIfNeedToExpandKnownPage",
          value: function _checkIfNeedToExpandKnownPage(e, t) {
            if (null === e.pagesDefinition) return !1;
            var r = 0;

            for (var n = e._lastFetchedIndex; n < e._known.length; n++) {
              if ("GETPAGES" === e._known[n]) return !0;
              if (void 0 === this._featureCache[e._known[n]] && (r += 1, r >= t)) break;
            }

            return !1;
          }
        }, {
          key: "_checkIfNeedToExpandCandidatePage",
          value: function _checkIfNeedToExpandCandidatePage(e, t) {
            if (null === e.pagesDefinition) return !1;
            var r = 0;

            for (var n = 0; n < e._candidates.length; n++) {
              if ("GETPAGES" === e._candidates[n]) return !0;
              if (r += 1, r >= t) break;
            }

            return !1;
          }
        }, {
          key: "_expandPagedSet",
          value: function _expandPagedSet(e, t, n, s, i) {
            return null === this._parent ? Object(_core_promiseUtils_js__WEBPACK_IMPORTED_MODULE_0__["reject"])(new Error("Parent Paging not implemented")) : this._parent._expandPagedSet(e, t, n, s, i);
          }
        }, {
          key: "_expandPagedSetFeatureSet",
          value: function _expandPagedSetFeatureSet(e, r, n, s, i) {
            var _this8 = this;

            return e._known.length > 0 && "GETPAGES" === e._known[e._known.length - 1] && (s = 1), 0 === s && e._candidates.length > 0 && "GETPAGES" === e._candidates[e._candidates.length - 1] && (s = 2), 0 === s ? Object(_core_promiseUtils_js__WEBPACK_IMPORTED_MODULE_0__["resolve"])("finished") : this._getPage(e, s, i).then(function (t) {
              return n + t < r ? _this8._expandPagedSet(e, r, n + t, 0, i) : "success";
            });
          }
        }, {
          key: "_getPage",
          value: function _getPage(e, r, n) {
            var _this9 = this;

            var s = 1 === r ? e._known : e._candidates;

            if (e.pagesDefinition.internal.set.length > e.pagesDefinition.resultOffset || !0 === e.pagesDefinition.internal.fullyResolved) {
              s.length = s.length - 1;
              var _r4 = 0;

              for (var t = 0; t < e.pagesDefinition.resultRecordCount && !(e.pagesDefinition.resultOffset + t >= e.pagesDefinition.internal.set.length); t++) {
                s[s.length] = e.pagesDefinition.internal.set[e.pagesDefinition.resultOffset + t], _r4++;
              }

              e.pagesDefinition.resultOffset += _r4;

              var _n2 = !1;

              return !0 === e.pagesDefinition.internal.fullyResolved && e.pagesDefinition.internal.set.length <= e.pagesDefinition.resultOffset && (_n2 = !0), !1 === _n2 && s.push("GETPAGES"), Object(_core_promiseUtils_js__WEBPACK_IMPORTED_MODULE_0__["resolve"])(_r4);
            }

            return this._getPhysicalPage(e, r, n).then(function () {
              return _this9._getPage(e, r, n);
            });
          }
        }, {
          key: "_getPhysicalPage",
          value: function _getPhysicalPage(e, t, r) {
            return null;
          }
        }, {
          key: "_clonePageDefinition",
          value: function _clonePageDefinition(e) {
            return null === this._parent ? null : this._parent._clonePageDefinition(e);
          }
        }, {
          key: "_first",
          value: function _first(e) {
            return this.iterator(e).next();
          }
        }, {
          key: "first",
          value: function first(e) {
            return this._first(e);
          }
        }, {
          key: "calculateStatistic",
          value: function calculateStatistic(e, t, r, n) {
            var _this10 = this;

            return this._ensureLoaded().then(function () {
              return _this10._stat(e, t, "", null, null, r, n).then(function (s) {
                return !1 === s.calculated ? _this10._manualStat(e, t, r, n).then(function (e) {
                  return e.result;
                }) : s.result;
              });
            });
          }
        }, {
          key: "_manualStat",
          value: function _manualStat(e, r, n, s) {
            switch (e.toLowerCase()) {
              case "count":
                return Object(_stats_js__WEBPACK_IMPORTED_MODULE_8__["count"])(this, s).then(function (e) {
                  return {
                    calculated: !0,
                    result: e
                  };
                });

              case "distinct":
                return Object(_stats_js__WEBPACK_IMPORTED_MODULE_8__["distinct"])(this, r, n).then(function (e) {
                  return {
                    calculated: !0,
                    result: e
                  };
                });

              case "avg":
              case "mean":
                return Object(_stats_js__WEBPACK_IMPORTED_MODULE_8__["mean"])(this, r, s).then(function (e) {
                  return {
                    calculated: !0,
                    result: e
                  };
                });

              case "stdev":
                return Object(_stats_js__WEBPACK_IMPORTED_MODULE_8__["stdev"])(this, r, s).then(function (e) {
                  return {
                    calculated: !0,
                    result: e
                  };
                });

              case "variance":
                return Object(_stats_js__WEBPACK_IMPORTED_MODULE_8__["variance"])(this, r, s).then(function (e) {
                  return {
                    calculated: !0,
                    result: e
                  };
                });

              case "sum":
                return Object(_stats_js__WEBPACK_IMPORTED_MODULE_8__["sum"])(this, r, s).then(function (e) {
                  return {
                    calculated: !0,
                    result: e
                  };
                });

              case "min":
                return Object(_stats_js__WEBPACK_IMPORTED_MODULE_8__["min"])(this, r, s).then(function (e) {
                  return {
                    calculated: !0,
                    result: e
                  };
                });

              case "max":
                return Object(_stats_js__WEBPACK_IMPORTED_MODULE_8__["max"])(this, r, s).then(function (e) {
                  return {
                    calculated: !0,
                    result: e
                  };
                });

              default:
                return Object(_core_promiseUtils_js__WEBPACK_IMPORTED_MODULE_0__["resolve"])({
                  calculated: !0,
                  result: 0
                });
            }
          }
        }, {
          key: "_stat",
          value: function _stat(e, t, r, n, s, i, a) {
            var _this11 = this;

            return this._parent._stat(e, t, r, n, s, i, a).then(function (h) {
              return !1 === h.calculated ? null === s && "" === r && null === n ? _this11._manualStat(e, t, i, a) : {
                calculated: !1
              } : h;
            });
          }
        }, {
          key: "_unionAllGeomSelf",
          value: function _unionAllGeomSelf(t) {
            var _this12 = this;

            var r = this.iterator(this._defaultTracker(t)),
                n = [];
            return Object(_core_promiseUtils_js__WEBPACK_IMPORTED_MODULE_0__["create"])(function (e, t) {
              _this12._unionShapeInBatches(n, r, e, t);
            });
          }
        }, {
          key: "_unionAllGeom",
          value: function _unionAllGeom(t) {
            var _this13 = this;

            return Object(_core_promiseUtils_js__WEBPACK_IMPORTED_MODULE_0__["create"])(function (e, r) {
              var n = _this13.iterator(_this13._defaultTracker(t));

              _this13._unionShapeInBatches([], n, e, r);
            });
          }
        }, {
          key: "_unionShapeInBatches",
          value: function _unionShapeInBatches(e, t, r, n) {
            var _this14 = this;

            t.next().then(function (s) {
              try {
                null !== s && null !== s.geometry && e.push(s.geometry), e.length > 30 || null === s && e.length > 1 ? Object(_geometry_geometryEngineAsync_js__WEBPACK_IMPORTED_MODULE_3__["union"])(e).then(function (i) {
                  try {
                    null === s ? r(i) : (e = [i], _this14._unionShapeInBatches(e, t, r, n));
                  } catch (e) {
                    n(e);
                  }
                }, n) : null === s ? 1 === e.length ? r(e[0]) : r(null) : _this14._unionShapeInBatches(e, t, r, n);
              } catch (e) {
                n(e);
              }
            }, n);
          }
        }, {
          key: "iterator",
          value: function iterator(e) {
            return new _FeatureSetIterator_js__WEBPACK_IMPORTED_MODULE_4__["default"](this, e);
          }
        }, {
          key: "intersection",
          value: function intersection(e) {
            var t = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : !1;
            return v._featuresetFunctions.intersection.bind(this)(e, t);
          }
        }, {
          key: "difference",
          value: function difference(e) {
            var t = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : !1;
            var r = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : !0;
            return v._featuresetFunctions.difference.bind(this)(e, t, r);
          }
        }, {
          key: "symmetricDifference",
          value: function symmetricDifference(e) {
            var t = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : !1;
            var r = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : !0;
            return v._featuresetFunctions.symmetricDifference.bind(this)(e, t, r);
          }
        }, {
          key: "morphShape",
          value: function morphShape(e, t) {
            var r = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : "unknown";
            var n = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : null;
            return v._featuresetFunctions.morphShape.bind(this)(e, t, r, n);
          }
        }, {
          key: "morphShapeAndAttributes",
          value: function morphShapeAndAttributes(e, t) {
            var r = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : "unknown";
            return v._featuresetFunctions.morphShapeAndAttributes.bind(this)(e, t, r);
          }
        }, {
          key: "union",
          value: function union(e) {
            var t = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : !1;
            return v._featuresetFunctions.union.bind(this)(e, t);
          }
        }, {
          key: "intersects",
          value: function intersects(e) {
            return v._featuresetFunctions.intersects.bind(this)(e);
          }
        }, {
          key: "envelopeIntersects",
          value: function envelopeIntersects(e) {
            return v._featuresetFunctions.envelopeIntersects.bind(this)(e);
          }
        }, {
          key: "contains",
          value: function contains(e) {
            return v._featuresetFunctions.contains.bind(this)(e);
          }
        }, {
          key: "overlaps",
          value: function overlaps(e) {
            return v._featuresetFunctions.overlaps.bind(this)(e);
          }
        }, {
          key: "relate",
          value: function relate(e, t) {
            return v._featuresetFunctions.relate.bind(this)(e, t);
          }
        }, {
          key: "within",
          value: function within(e) {
            return v._featuresetFunctions.within.bind(this)(e);
          }
        }, {
          key: "touches",
          value: function touches(e) {
            return v._featuresetFunctions.touches.bind(this)(e);
          }
        }, {
          key: "top",
          value: function top(e) {
            return v._featuresetFunctions.top.bind(this)(e);
          }
        }, {
          key: "crosses",
          value: function crosses(e) {
            return v._featuresetFunctions.crosses.bind(this)(e);
          }
        }, {
          key: "buffer",
          value: function buffer(e, t, r) {
            var n = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : !0;
            return v._featuresetFunctions.buffer.bind(this)(e, t, r, n);
          }
        }, {
          key: "filter",
          value: function filter(e) {
            var t = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : null;
            return v._featuresetFunctions.filter.bind(this)(e, t);
          }
        }, {
          key: "orderBy",
          value: function orderBy(e) {
            return v._featuresetFunctions.orderBy.bind(this)(e);
          }
        }, {
          key: "dissolve",
          value: function dissolve(e, t) {
            return v._featuresetFunctions.dissolve.bind(this)(e, t);
          }
        }, {
          key: "groupby",
          value: function groupby(e, t) {
            return v._featuresetFunctions.groupby.bind(this)(e, t);
          }
        }, {
          key: "reduce",
          value: function reduce(t) {
            var _this15 = this;

            var r = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : null;
            var n = arguments.length > 2 ? arguments[2] : undefined;
            return Object(_core_promiseUtils_js__WEBPACK_IMPORTED_MODULE_0__["create"])(function (e, s) {
              _this15._reduceImpl(_this15.iterator(_this15._defaultTracker(n)), t, r, 0, e, s, 0);
            });
          }
        }, {
          key: "_reduceImpl",
          value: function _reduceImpl(e, t, r, s, i, a, h) {
            var _this16 = this;

            try {
              if (++h > 1e3) return void setTimeout(function () {
                h = 0, _this16._reduceImpl(e, t, r, s, i, a, h);
              });
              e.next().then(function (l) {
                try {
                  if (null === l) i(r);else {
                    var u = t(r, l, s, _this16);
                    Object(_core_promiseUtils_js__WEBPACK_IMPORTED_MODULE_0__["isPromiseLike"])(u) ? u.then(function (r) {
                      _this16._reduceImpl(e, t, r, s + 1, i, a, h);
                    }, a) : _this16._reduceImpl(e, t, u, s + 1, i, a, h);
                  }
                } catch (e) {
                  a(e);
                }
              }, a);
            } catch (e) {
              a(e);
            }
          }
        }, {
          key: "removeField",
          value: function removeField(e) {
            return v._featuresetFunctions.removeField.bind(this)(e);
          }
        }, {
          key: "addField",
          value: function addField(e, t) {
            var r = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : null;
            return v._featuresetFunctions.addField.bind(this)(e, t, r);
          }
        }, {
          key: "sumArea",
          value: function sumArea(e) {
            var t = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : !1;
            var r = arguments.length > 2 ? arguments[2] : undefined;
            var n = Object(_shared_js__WEBPACK_IMPORTED_MODULE_2__["convertSquareUnitsToCode"])(e);
            return this.reduce(function (e, r) {
              return null === r.geometry ? 0 : t ? Object(_geometry_geometryEngineAsync_js__WEBPACK_IMPORTED_MODULE_3__["geodesicArea"])(r.geometry, n).then(function (t) {
                return e + t;
              }) : Object(_geometry_geometryEngineAsync_js__WEBPACK_IMPORTED_MODULE_3__["planarArea"])(r.geometry, n).then(function (t) {
                return e + t;
              });
            }, 0, r);
          }
        }, {
          key: "sumLength",
          value: function sumLength(e) {
            var t = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : !1;
            var r = arguments.length > 2 ? arguments[2] : undefined;
            var n = Object(_shared_js__WEBPACK_IMPORTED_MODULE_2__["convertLinearUnitsToCode"])(e);
            return this.reduce(function (e, r) {
              return null === r.geometry ? 0 : t ? Object(_geometry_geometryEngineAsync_js__WEBPACK_IMPORTED_MODULE_3__["geodesicLength"])(r.geometry, n).then(function (t) {
                return e + t;
              }) : Object(_geometry_geometryEngineAsync_js__WEBPACK_IMPORTED_MODULE_3__["planarLength"])(r.geometry, n).then(function (t) {
                return e + t;
              });
            }, 0, r);
          }
        }, {
          key: "_substituteVars",
          value: function _substituteVars(e, t) {
            if (null !== t) {
              var r = {};

              for (var _e8 in t) {
                r[_e8.toLowerCase()] = t[_e8];
              }

              e.parameters = r;
            }
          }
        }, {
          key: "distinct",
          value: function distinct(e) {
            var _this17 = this;

            var t = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 1e3;
            var r = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : null;
            var n = arguments.length > 3 ? arguments[3] : undefined;
            return this.load().then(function () {
              var s = _core_sql_WhereClause_js__WEBPACK_IMPORTED_MODULE_7__["WhereClause"].create(e, _this17.getFieldsIndex());

              return _this17._substituteVars(s, r), _this17.calculateStatistic("distinct", s, t, _this17._defaultTracker(n));
            });
          }
        }, {
          key: "min",
          value: function min(e) {
            var _this18 = this;

            var t = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : null;
            var r = arguments.length > 2 ? arguments[2] : undefined;
            return this.load().then(function () {
              var n = _core_sql_WhereClause_js__WEBPACK_IMPORTED_MODULE_7__["WhereClause"].create(e, _this18.getFieldsIndex());

              return _this18._substituteVars(n, t), _this18.calculateStatistic("min", n, -1, _this18._defaultTracker(r));
            });
          }
        }, {
          key: "max",
          value: function max(e) {
            var _this19 = this;

            var t = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : null;
            var r = arguments.length > 2 ? arguments[2] : undefined;
            return this.load().then(function () {
              var n = _core_sql_WhereClause_js__WEBPACK_IMPORTED_MODULE_7__["WhereClause"].create(e, _this19.getFieldsIndex());

              return _this19._substituteVars(n, t), _this19.calculateStatistic("max", n, -1, _this19._defaultTracker(r));
            });
          }
        }, {
          key: "avg",
          value: function avg(e) {
            var _this20 = this;

            var t = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : null;
            var r = arguments.length > 2 ? arguments[2] : undefined;
            return this.load().then(function () {
              var n = _core_sql_WhereClause_js__WEBPACK_IMPORTED_MODULE_7__["WhereClause"].create(e, _this20.getFieldsIndex());

              return _this20._substituteVars(n, t), _this20.calculateStatistic("avg", n, -1, _this20._defaultTracker(r));
            });
          }
        }, {
          key: "sum",
          value: function sum(e) {
            var _this21 = this;

            var t = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : null;
            var r = arguments.length > 2 ? arguments[2] : undefined;
            return this.load().then(function () {
              var n = _core_sql_WhereClause_js__WEBPACK_IMPORTED_MODULE_7__["WhereClause"].create(e, _this21.getFieldsIndex());

              return _this21._substituteVars(n, t), _this21.calculateStatistic("sum", n, -1, _this21._defaultTracker(r));
            });
          }
        }, {
          key: "stdev",
          value: function stdev(e) {
            var _this22 = this;

            var t = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : null;
            var r = arguments.length > 2 ? arguments[2] : undefined;
            return this.load().then(function () {
              var n = _core_sql_WhereClause_js__WEBPACK_IMPORTED_MODULE_7__["WhereClause"].create(e, _this22.getFieldsIndex());

              return _this22._substituteVars(n, t), _this22.calculateStatistic("stdev", n, -1, _this22._defaultTracker(r));
            });
          }
        }, {
          key: "variance",
          value: function variance(e) {
            var _this23 = this;

            var t = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : null;
            var r = arguments.length > 2 ? arguments[2] : undefined;
            return this.load().then(function () {
              var n = _core_sql_WhereClause_js__WEBPACK_IMPORTED_MODULE_7__["WhereClause"].create(e, _this23.getFieldsIndex());

              return _this23._substituteVars(n, t), _this23.calculateStatistic("variance", n, -1, _this23._defaultTracker(r));
            });
          }
        }, {
          key: "count",
          value: function count(e) {
            var _this24 = this;

            return this.load().then(function () {
              return _this24.calculateStatistic("count", _core_sql_WhereClause_js__WEBPACK_IMPORTED_MODULE_7__["WhereClause"].create("1", _this24.getFieldsIndex()), -1, _this24._defaultTracker(e));
            });
          }
        }, {
          key: "_defaultTracker",
          value: function _defaultTracker(e) {
            return e || {
              aborted: !1
            };
          }
        }, {
          key: "forEach",
          value: function forEach(t, r) {
            var _this25 = this;

            return Object(_core_promiseUtils_js__WEBPACK_IMPORTED_MODULE_0__["create"])(function (e, n) {
              _this25._forEachImpl(_this25.iterator(_this25._defaultTracker(r)), t, _this25, e, n, 0);
            });
          }
        }, {
          key: "_forEachImpl",
          value: function _forEachImpl(e, t, r, s, i, a) {
            var _this26 = this;

            try {
              if (++a > 1e3) return void setTimeout(function () {
                a = 0, _this26._forEachImpl(e, t, r, s, i, a);
              }, 0);
              e.next().then(function (h) {
                try {
                  if (null === h) s(r);else {
                    var l = t(h);
                    null == l ? _this26._forEachImpl(e, t, r, s, i, a) : Object(_core_promiseUtils_js__WEBPACK_IMPORTED_MODULE_0__["isPromiseLike"])(l) ? l.then(function () {
                      try {
                        _this26._forEachImpl(e, t, r, s, i, a);
                      } catch (e) {
                        i(e);
                      }
                    }, i) : _this26._forEachImpl(e, t, r, s, i, a);
                  }
                } catch (e) {
                  i(e);
                }
              }, i);
            } catch (e) {
              i(e);
            }
          }
        }, {
          key: "convertToJSON",
          value: function convertToJSON(e) {
            var t = {
              layerDefinition: {
                geometryType: this.geometryType,
                fields: []
              },
              featureSet: {
                features: [],
                geometryType: this.geometryType
              }
            };

            for (var _e9 = 0; _e9 < this.fields.length; _e9++) {
              t.layerDefinition.fields.push(Object(_shared_js__WEBPACK_IMPORTED_MODULE_2__["esriFieldToJson"])(this.fields[_e9]));
            }

            return this.reduce(function (e, r) {
              var n = {
                geometry: r.geometry && r.geometry.toJSON(),
                attributes: {}
              };

              for (var _e10 in r.attributes) {
                n.attributes[_e10] = r.attributes[_e10];
              }

              return t.featureSet.features.push(n), 1;
            }, 0, e).then(function () {
              return t;
            });
          }
        }, {
          key: "castToText",
          value: function castToText() {
            return "object, FeatureSet";
          }
        }, {
          key: "queryAttachments",
          value: function queryAttachments(e, t, r, n) {
            return this._parent.queryAttachments(e, t, r, n);
          }
        }, {
          key: "serviceUrl",
          value: function serviceUrl() {
            return this._parent.serviceUrl();
          }
        }, {
          key: "subtypes",
          value: function subtypes() {
            return this.typeIdField ? {
              subtypeField: this.typeIdField,
              subtypes: this.types ? this.types.map(function (e) {
                return {
                  name: e.name,
                  code: e.id
                };
              }) : []
            } : null;
          }
        }, {
          key: "relationshipMetaData",
          value: function relationshipMetaData() {
            return this._parent.relationshipMetaData();
          }
        }, {
          key: "gdbVersion",
          get: function get() {
            return this._parent ? this._parent.gdbVersion : "";
          }
        }, {
          key: "schema",
          value: function schema() {
            var e = [];

            var _iterator8 = _createForOfIteratorHelper(this.fields),
                _step8;

            try {
              for (_iterator8.s(); !(_step8 = _iterator8.n()).done;) {
                var t = _step8.value;
                e.push(Object(_shared_js__WEBPACK_IMPORTED_MODULE_2__["esriFieldToJson"])(t));
              }
            } catch (err) {
              _iterator8.e(err);
            } finally {
              _iterator8.f();
            }

            return {
              objectIdField: this.objectIdField,
              globalIdField: this.globalIdField,
              geometryType: void 0 === _shared_js__WEBPACK_IMPORTED_MODULE_2__["layerGeometryEsriRestConstants"][this.geometryType] ? "" : _shared_js__WEBPACK_IMPORTED_MODULE_2__["layerGeometryEsriRestConstants"][this.geometryType],
              fields: e
            };
          }
        }, {
          key: "convertToText",
          value: function convertToText(e, r) {
            var _this27 = this;

            return "schema" === e ? this._ensureLoaded().then(function () {
              return JSON.stringify(_this27.schema());
            }) : "featureset" === e ? this._ensureLoaded().then(function () {
              var e = [];
              return _this27.reduce(function (t, r) {
                var n = {
                  geometry: r.geometry ? r.geometry.toJSON() : null,
                  attributes: r.attributes
                };
                return null !== n.geometry && n.geometry.spatialReference && delete n.geometry.spatialReference, e.push(n), 1;
              }, 0, r).then(function () {
                var t = _this27.schema();

                return t.features = e, t.spatialReference = _this27.spatialReference.toJSON(), JSON.stringify(t);
              });
            }) : Object(_core_promiseUtils_js__WEBPACK_IMPORTED_MODULE_0__["resolve"])(this.castToText());
          }
        }, {
          key: "getFeatureByObjectId",
          value: function getFeatureByObjectId(e, t) {
            return this._parent.getFeatureByObjectId(e, t);
          }
        }, {
          key: "getOwningSystemUrl",
          value: function getOwningSystemUrl() {
            return this._parent.getOwningSystemUrl();
          }
        }, {
          key: "getIdentityUser",
          value: function getIdentityUser() {
            return this._parent.getIdentityUser();
          }
        }]);

        return v;
      }();

      v._featuresetFunctions = {};
      /* harmony default export */

      __webpack_exports__["default"] = v;
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

    },

    /***/
    "ZPxV":
    /*!**********************************************************************!*\
      !*** ./node_modules/@arcgis/core/arcade/featureset/support/IdSet.js ***!
      \**********************************************************************/

    /*! exports provided: default */

    /***/
    function ZPxV(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /*
      All material copyright ESRI, All Rights Reserved, unless otherwise specified.
      See https://js.arcgis.com/4.18/esri/copyright.txt for details.
      */

      /* harmony default export */


      __webpack_exports__["default"] = /*#__PURE__*/function () {
        function _class2(t, i, s, e) {
          _classCallCheck(this, _class2);

          this._candidates = null, this._known = null, this._lastFetchedIndex = 0, this._ordered = !1, this.pagesDefinition = null, this._candidates = t, this._known = i, this._ordered = s, this.pagesDefinition = e;
        }

        return _class2;
      }();
      /***/

    },

    /***/
    "gBat":
    /*!******************************************************************************!*\
      !*** ./node_modules/@arcgis/core/arcade/featureset/actions/SpatialFilter.js ***!
      \******************************************************************************/

    /*! exports provided: default */

    /***/
    function gBat(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony import */


      var _core_promiseUtils_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ../../../core/promiseUtils.js */
      "9MzC");
      /* harmony import */


      var _support_shared_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ../support/shared.js */
      "hTzF");
      /* harmony import */


      var _geometry_geometryEngineAsync_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ../../../geometry/geometryEngineAsync.js */
      "u1HQ");
      /* harmony import */


      var _support_IdSet_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ../support/IdSet.js */
      "ZPxV");
      /* harmony import */


      var _support_FeatureSet_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ../support/FeatureSet.js */
      "T3Nt");
      /* harmony import */


      var _sources_Empty_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ../sources/Empty.js */
      "GN9X");
      /*
      All material copyright ESRI, All Rights Reserved, unless otherwise specified.
      See https://js.arcgis.com/4.18/esri/copyright.txt for details.
      */


      var g = /*#__PURE__*/function (_support_FeatureSet_j2) {
        _inherits(g, _support_FeatureSet_j2);

        var _super2 = _createSuper(g);

        function g(e) {
          var _this28;

          _classCallCheck(this, g);

          _this28 = _super2.call(this, e), _this28._relation = "", _this28._relationGeom = null, _this28._relationString = "", _this28.declaredClass = "esri.arcade.featureset.actions.SpatialFilter", _this28._relationString = e.relationString, _this28._parent = e.parentfeatureset, _this28._maxProcessing = 40, _this28._relation = e.relation, _this28._relationGeom = e.relationGeom;
          return _this28;
        }

        _createClass(g, [{
          key: "_getSet",
          value: function _getSet(t) {
            var _this29 = this;

            return null === this._wset ? this._ensureLoaded().then(function () {
              return _this29._parent._getFilteredSet("esriSpatialRelRelation" !== _this29._relation ? _this29._relation : _this29._relation + ":" + _this29._relationString, _this29._relationGeom, null, null, t);
            }).then(function (e) {
              return _this29._checkCancelled(t), _this29._wset = new _support_IdSet_js__WEBPACK_IMPORTED_MODULE_3__["default"](e._candidates.slice(0), e._known.slice(0), e._ordered, _this29._clonePageDefinition(e.pagesDefinition)), _this29._wset;
            }) : Object(_core_promiseUtils_js__WEBPACK_IMPORTED_MODULE_0__["resolve"])(this._wset);
          }
        }, {
          key: "_isInFeatureSet",
          value: function _isInFeatureSet(e) {
            var t = this._parent._isInFeatureSet(e);

            return t === _support_shared_js__WEBPACK_IMPORTED_MODULE_1__["IdState"].NotInFeatureSet ? t : (t = this._idstates[e], void 0 === t ? _support_shared_js__WEBPACK_IMPORTED_MODULE_1__["IdState"].Unknown : t);
          }
        }, {
          key: "_getFeature",
          value: function _getFeature(e, t, r) {
            return this._parent._getFeature(e, t, r);
          }
        }, {
          key: "_getFeatures",
          value: function _getFeatures(e, t, r, i) {
            return this._parent._getFeatures(e, t, r, i);
          }
        }, {
          key: "_featureFromCache",
          value: function _featureFromCache(e) {
            return this._parent._featureFromCache(e);
          }
        }, {
          key: "executeSpatialRelationTest",
          value: function executeSpatialRelationTest(t) {
            if (null === t.geometry) return Object(_core_promiseUtils_js__WEBPACK_IMPORTED_MODULE_0__["resolve"])(!1);

            switch (this._relation) {
              case "esriSpatialRelEnvelopeIntersects":
                {
                  var e = Object(_support_shared_js__WEBPACK_IMPORTED_MODULE_1__["shapeExtent"])(this._relationGeom),
                      r = Object(_support_shared_js__WEBPACK_IMPORTED_MODULE_1__["shapeExtent"])(t.geometry);
                  return Object(_geometry_geometryEngineAsync_js__WEBPACK_IMPORTED_MODULE_2__["intersects"])(e, r);
                }

              case "esriSpatialRelIntersects":
                return Object(_geometry_geometryEngineAsync_js__WEBPACK_IMPORTED_MODULE_2__["intersects"])(this._relationGeom, t.geometry);

              case "esriSpatialRelContains":
                return Object(_geometry_geometryEngineAsync_js__WEBPACK_IMPORTED_MODULE_2__["contains"])(this._relationGeom, t.geometry);

              case "esriSpatialRelOverlaps":
                return Object(_geometry_geometryEngineAsync_js__WEBPACK_IMPORTED_MODULE_2__["overlaps"])(this._relationGeom, t.geometry);

              case "esriSpatialRelWithin":
                return Object(_geometry_geometryEngineAsync_js__WEBPACK_IMPORTED_MODULE_2__["within"])(this._relationGeom, t.geometry);

              case "esriSpatialRelTouches":
                return Object(_geometry_geometryEngineAsync_js__WEBPACK_IMPORTED_MODULE_2__["touches"])(this._relationGeom, t.geometry);

              case "esriSpatialRelCrosses":
                return Object(_geometry_geometryEngineAsync_js__WEBPACK_IMPORTED_MODULE_2__["crosses"])(this._relationGeom, t.geometry);

              case "esriSpatialRelRelation":
                return Object(_geometry_geometryEngineAsync_js__WEBPACK_IMPORTED_MODULE_2__["relate"])(this._relationGeom, t.geometry, this._relationString);
            }
          }
        }, {
          key: "_fetchAndRefineFeatures",
          value: function _fetchAndRefineFeatures(e, r, n) {
            var _this30 = this;

            var a = new _support_IdSet_js__WEBPACK_IMPORTED_MODULE_3__["default"]([], e, !1, null),
                s = Math.min(r, e.length);
            return this._parent._getFeatures(a, -1, s, n).then(function () {
              _this30._checkCancelled(n);

              var r = [];

              for (var t = 0; t < s; t++) {
                var i = _this30._parent._featureFromCache(e[t]);

                r.push(_this30.executeSpatialRelationTest(i));
              }

              return Object(_core_promiseUtils_js__WEBPACK_IMPORTED_MODULE_0__["all"])(r);
            }).then(function (t) {
              for (var _n3 = 0; _n3 < r; _n3++) {
                !0 === t[_n3] ? _this30._idstates[e[_n3]] = _support_shared_js__WEBPACK_IMPORTED_MODULE_1__["IdState"].InFeatureSet : _this30._idstates[e[_n3]] = _support_shared_js__WEBPACK_IMPORTED_MODULE_1__["IdState"].NotInFeatureSet;
              }

              return "success";
            });
          }
        }, {
          key: "_getFilteredSet",
          value: function _getFilteredSet(e, t, r, i, n) {
            var _this31 = this;

            return this._ensureLoaded().then(function () {
              return _this31._parent._getFilteredSet("esriSpatialRelRelation" !== _this31._relation ? _this31._relation : _this31._relation + ":" + _this31._relationString, _this31._relationGeom, r, i, n);
            }).then(function (e) {
              var r;
              return _this31._checkCancelled(n), r = null !== t ? new _support_IdSet_js__WEBPACK_IMPORTED_MODULE_3__["default"](e._candidates.slice(0).concat(e._known.slice(0)), [], e._ordered, _this31._clonePageDefinition(e.pagesDefinition)) : new _support_IdSet_js__WEBPACK_IMPORTED_MODULE_3__["default"](e._candidates.slice(0), e._known.slice(0), e._ordered, _this31._clonePageDefinition(e.pagesDefinition)), r;
            });
          }
        }, {
          key: "_stat",
          value: function _stat(t, r, i, n, a, s, l) {
            var _this32 = this;

            return "" !== i ? Object(_core_promiseUtils_js__WEBPACK_IMPORTED_MODULE_0__["resolve"])({
              calculated: !1
            }) : this._parent._stat(t, r, "esriSpatialRelRelation" !== this._relation ? this._relation : this._relation + ":" + this._relationString, this._relationGeom, a, s, l).then(function (e) {
              return !1 === e.calculated ? null === a && "" === i && null === n ? _this32._manualStat(t, r, s, l) : {
                calculated: !1
              } : e;
            });
          }
        }, {
          key: "_canDoAggregates",
          value: function _canDoAggregates(t, r, i, n, a) {
            return "" !== i || null !== n || null === this._parent ? Object(_core_promiseUtils_js__WEBPACK_IMPORTED_MODULE_0__["resolve"])(!1) : this._parent._canDoAggregates(t, r, "esriSpatialRelRelation" !== this._relation ? this._relation : this._relation + ":" + this._relationString, this._relationGeom, a);
          }
        }, {
          key: "_getAggregatePagesDataSourceDefinition",
          value: function _getAggregatePagesDataSourceDefinition(e, t, i, n, a, s, l) {
            return null === this._parent ? Object(_core_promiseUtils_js__WEBPACK_IMPORTED_MODULE_0__["reject"])(new Error("Should never be called")) : this._parent._getAggregatePagesDataSourceDefinition(e, t, "esriSpatialRelRelation" !== this._relation ? this._relation : this._relation + ":" + this._relationString, this._relationGeom, a, s, l);
          }
        }], [{
          key: "registerAction",
          value: function registerAction() {
            _support_FeatureSet_js__WEBPACK_IMPORTED_MODULE_4__["default"]._featuresetFunctions.intersects = function (e) {
              return null == e ? new _sources_Empty_js__WEBPACK_IMPORTED_MODULE_5__["default"]({
                parentfeatureset: this
              }) : new g({
                parentfeatureset: this,
                relation: "esriSpatialRelIntersects",
                relationGeom: e
              });
            }, _support_FeatureSet_js__WEBPACK_IMPORTED_MODULE_4__["default"]._featuresetFunctions.envelopeIntersects = function (e) {
              return null == e ? new _sources_Empty_js__WEBPACK_IMPORTED_MODULE_5__["default"]({
                parentfeatureset: this
              }) : new g({
                parentfeatureset: this,
                relation: "esriSpatialRelEnvelopeIntersects",
                relationGeom: e
              });
            }, _support_FeatureSet_js__WEBPACK_IMPORTED_MODULE_4__["default"]._featuresetFunctions.contains = function (e) {
              return null == e ? new _sources_Empty_js__WEBPACK_IMPORTED_MODULE_5__["default"]({
                parentfeatureset: this
              }) : new g({
                parentfeatureset: this,
                relation: "esriSpatialRelContains",
                relationGeom: e
              });
            }, _support_FeatureSet_js__WEBPACK_IMPORTED_MODULE_4__["default"]._featuresetFunctions.overlaps = function (e) {
              return null == e ? new _sources_Empty_js__WEBPACK_IMPORTED_MODULE_5__["default"]({
                parentfeatureset: this
              }) : new g({
                parentfeatureset: this,
                relation: "esriSpatialRelOverlaps",
                relationGeom: e
              });
            }, _support_FeatureSet_js__WEBPACK_IMPORTED_MODULE_4__["default"]._featuresetFunctions.within = function (e) {
              return null == e ? new _sources_Empty_js__WEBPACK_IMPORTED_MODULE_5__["default"]({
                parentfeatureset: this
              }) : new g({
                parentfeatureset: this,
                relation: "esriSpatialRelWithin",
                relationGeom: e
              });
            }, _support_FeatureSet_js__WEBPACK_IMPORTED_MODULE_4__["default"]._featuresetFunctions.touches = function (e) {
              return null == e ? new _sources_Empty_js__WEBPACK_IMPORTED_MODULE_5__["default"]({
                parentfeatureset: this
              }) : new g({
                parentfeatureset: this,
                relation: "esriSpatialRelTouches",
                relationGeom: e
              });
            }, _support_FeatureSet_js__WEBPACK_IMPORTED_MODULE_4__["default"]._featuresetFunctions.crosses = function (e) {
              return null == e ? new _sources_Empty_js__WEBPACK_IMPORTED_MODULE_5__["default"]({
                parentfeatureset: this
              }) : new g({
                parentfeatureset: this,
                relation: "esriSpatialRelCrosses",
                relationGeom: e
              });
            }, _support_FeatureSet_js__WEBPACK_IMPORTED_MODULE_4__["default"]._featuresetFunctions.relate = function (e, t) {
              return null == e ? new _sources_Empty_js__WEBPACK_IMPORTED_MODULE_5__["default"]({
                parentfeatureset: this
              }) : new g({
                parentfeatureset: this,
                relation: "esriSpatialRelRelation",
                relationGeom: e,
                relationString: t
              });
            };
          }
        }]);

        return g;
      }(_support_FeatureSet_js__WEBPACK_IMPORTED_MODULE_4__["default"]);
      /* harmony default export */


      __webpack_exports__["default"] = g;
      /***/
    },

    /***/
    "sdy9":
    /*!**********************************************************************!*\
      !*** ./node_modules/@arcgis/core/arcade/featureset/support/stats.js ***!
      \**********************************************************************/

    /*! exports provided: calculateStat, count, decodeStatType, distinct, max, mean, min, stdev, sum, variance */

    /***/
    function sdy9(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "calculateStat", function () {
        return g;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "count", function () {
        return y;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "decodeStatType", function () {
        return f;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "distinct", function () {
        return q;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "max", function () {
        return p;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "mean", function () {
        return v;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "min", function () {
        return m;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "stdev", function () {
        return M;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "sum", function () {
        return x;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "variance", function () {
        return d;
      });
      /* harmony import */


      var _core_promiseUtils_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ../../../core/promiseUtils.js */
      "9MzC");
      /* harmony import */


      var _chunks_languageUtils_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ../../../chunks/languageUtils.js */
      "idrm");
      /* harmony import */


      var _shared_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./shared.js */
      "hTzF");
      /* harmony import */


      var _sqlUtils_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./sqlUtils.js */
      "B8fU");
      /*
      All material copyright ESRI, All Rights Reserved, unless otherwise specified.
      See https://js.arcgis.com/4.18/esri/copyright.txt for details.
      */


      function s(t) {
        var n = 0;

        for (var e = 0; e < t.length; e++) {
          n += t[e];
        }

        return n / t.length;
      }

      function o(t) {
        var n = s(t);
        var e = 0;

        for (var r = 0; r < t.length; r++) {
          e += Math.pow(n - t[r], 2);
        }

        return e / t.length;
      }

      function i(t) {
        var n = s(t);
        var e = 0;

        for (var r = 0; r < t.length; r++) {
          e += Math.pow(n - t[r], 2);
        }

        return e / (t.length - 1);
      }

      function h(t) {
        var n = 0;

        for (var e = 0; e < t.length; e++) {
          n += t[e];
        }

        return n;
      }

      function f(t) {
        switch (t.toLowerCase()) {
          case "distinct":
            return "distinct";

          case "avg":
          case "mean":
            return "avg";

          case "min":
            return "min";

          case "sum":
            return "sum";

          case "max":
            return "max";

          case "stdev":
          case "stddev":
            return "stddev";

          case "var":
          case "variance":
            return "var";

          case "count":
            return "count";
        }

        return "";
      }

      function g(t, n) {
        var e = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 1e3;

        switch (t.toLowerCase()) {
          case "distinct":
            return function (t, n) {
              var e = [],
                  a = {},
                  c = [];

              for (var _s7 = 0; _s7 < t.length; _s7++) {
                if (void 0 !== t[_s7] && null !== t[_s7]) {
                  var _n4 = t[_s7];
                  if (Object(_shared_js__WEBPACK_IMPORTED_MODULE_2__["isNumber"])(_n4) || Object(_shared_js__WEBPACK_IMPORTED_MODULE_2__["isString"])(_n4)) void 0 === a[_n4] && (e.push(_n4), a[_n4] = 1);else {
                    var _t6 = !1;

                    for (var _e11 = 0; _e11 < c.length; _e11++) {
                      !0 === Object(_shared_js__WEBPACK_IMPORTED_MODULE_2__["equalityTest"])(c[_e11], _n4) && (_t6 = !0);
                    }

                    !1 === _t6 && (c.push(_n4), e.push(_n4));
                  }
                }

                if (e.length >= n && -1 !== n) return e;
              }

              return e;
            }(n, e);

          case "avg":
          case "mean":
            return s(n);

          case "min":
            return Math.min.apply(Math, n);

          case "sum":
            return h(n);

          case "max":
            return Math.max.apply(Math, n);

          case "stdev":
          case "stddev":
            return Math.sqrt(o(n));

          case "var":
          case "variance":
            return o(n);

          case "count":
            return n.length;
        }

        return 0;
      }

      function m(t, n, e) {
        return w(t, n, e, !0).then(function (t) {
          return 0 === t.length ? null : Math.min.apply(Math, t);
        });
      }

      function p(t, n, e) {
        return w(t, n, e, !0).then(function (t) {
          return 0 === t.length ? null : Math.max.apply(Math, t);
        });
      }

      function v(t, n, e) {
        var r = "";
        return !1 === Object(_sqlUtils_js__WEBPACK_IMPORTED_MODULE_3__["isSingleField"])(n) && (r = Object(_sqlUtils_js__WEBPACK_IMPORTED_MODULE_3__["predictType"])(n, t.fields, null)), w(t, n, e, !0).then(function (t) {
          if (0 === t.length) return null;
          var n = s(t);
          return null === n ? n : "integer" === r ? (e = +(e = n), isFinite(e) ? e - e % 1 || (e < 0 ? -0 : 0 === e ? e : 0) : e) : n;
          var e;
        });
      }

      function d(t, n, e) {
        return w(t, n, e, !0).then(function (t) {
          return 0 === t.length ? null : i(t);
        });
      }

      function M(t, n, e) {
        return w(t, n, e, !0).then(function (t) {
          return 0 === t.length ? null : Math.sqrt(i(t));
        });
      }

      function x(t, n, e) {
        return w(t, n, e, !0).then(function (t) {
          return 0 === t.length ? null : h(t);
        });
      }

      function y(n, e) {
        try {
          return n.iterator(e).count();
        } catch (n) {
          return Object(_core_promiseUtils_js__WEBPACK_IMPORTED_MODULE_0__["reject"])(n);
        }
      }

      function w(e, r, u) {
        var l = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : !1;

        try {
          var t = e.iterator(u);
          return Object(_core_promiseUtils_js__WEBPACK_IMPORTED_MODULE_0__["create"])(function (n, e) {
            j(t, [], r, l, n, e);
          });
        } catch (n) {
          return Object(_core_promiseUtils_js__WEBPACK_IMPORTED_MODULE_0__["reject"])(n);
        }
      }

      function j(t, n, r, u, l, a) {
        Object(_chunks_languageUtils_js__WEBPACK_IMPORTED_MODULE_1__["Q"])(t.next().then(function (e) {
          try {
            if (null !== e) {
              var c = r.calculateValue(e);
              return null === c ? !1 === u && (n[n.length] = c) : n[n.length] = c, j(t, n, r, u, l, a);
            }

            l(n);
          } catch (t) {
            a(t);
          }
        }, a));
      }

      function q(n, e) {
        var r = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 1e3;
        var u = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : null;
        return function (n, e, r, u) {
          try {
            return U(n.iterator(u), {}, [], e, r);
          } catch (n) {
            return Object(_core_promiseUtils_js__WEBPACK_IMPORTED_MODULE_0__["reject"])(n);
          }
        }(n, e, r, u);
      }

      function U(t, n, e, r, u) {
        return t.next().then(function (l) {
          if (null !== l) {
            var a = r.calculateValue(l);
            return null != a && void 0 === n[a] && (e.push(a), n[a] = 1), e.length >= u && -1 !== u ? e : U(t, n, e, r, u);
          }

          return e;
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
        return _s8.apply(this, arguments);
      }

      function _s8() {
        _s8 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee3(n, t) {
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
        return _s8.apply(this, arguments);
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

    },

    /***/
    "xPNU":
    /*!***********************************************************************************!*\
      !*** ./node_modules/@arcgis/core/arcade/featureset/support/FeatureSetIterator.js ***!
      \***********************************************************************************/

    /*! exports provided: default */

    /***/
    function xPNU(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony import */


      var _core_promiseUtils_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ../../../core/promiseUtils.js */
      "9MzC");
      /*
      All material copyright ESRI, All Rights Reserved, unless otherwise specified.
      See https://js.arcgis.com/4.18/esri/copyright.txt for details.
      */

      /* harmony default export */


      __webpack_exports__["default"] = /*#__PURE__*/function () {
        function _class3(t, e) {
          _classCallCheck(this, _class3);

          this._lastId = -1, this._progress = e, this._parent = t;
        }

        _createClass(_class3, [{
          key: "reset",
          value: function reset() {
            this._lastId = -1;
          }
        }, {
          key: "nextBatch",
          value: function nextBatch(e) {
            var _this33 = this;

            if (null !== this._parent._mainSetInUse) return this._parent._mainSetInUse.then(function (t) {
              return _this33.nextBatch(e);
            }, function (t) {
              return _this33.nextBatch(e);
            });
            var n = {
              returnpromise: null,
              hasset: !1
            },
                s = [];
            return n.returnpromise = Object(_core_promiseUtils_js__WEBPACK_IMPORTED_MODULE_0__["create"])(function (t, a) {
              _this33._parent._getSet(_this33._progress).then(function (h) {
                var _ = h._known.length - 1;

                if ("GETPAGES" === h._known[h._known.length - 1] && (_ -= 1), _this33._lastId + e > _ && h._known.length > 0 && "GETPAGES" === h._known[h._known.length - 1]) _this33._parent._expandPagedSet(h, _this33._parent._maxQueryRate(), 0, 0, _this33._progress).then(function (s) {
                  n.hasset = !0, _this33._parent._mainSetInUse = null, _this33.nextBatch(e).then(t, a);
                }, function (t) {
                  n.hasset = !0, _this33._parent._mainSetInUse = null, a(t);
                });else {
                  if (_ >= _this33._lastId + e || 0 === h._candidates.length) {
                    for (var _t7 = 0; _t7 < e; _t7++) {
                      var _e12 = _t7 + _this33._lastId + 1;

                      if (_e12 >= h._known.length) break;
                      s[_t7] = h._known[_e12];
                    }

                    return _this33._lastId += s.length, 0 === s.length && (n.hasset = !0, _this33._parent._mainSetInUse = null, t([])), void _this33._parent._getFeatureBatch(s, _this33._progress).then(function (e) {
                      n.hasset = !0, _this33._parent._mainSetInUse = null, t(e);
                    }, function (t) {
                      n.hasset = !0, _this33._parent._mainSetInUse = null, a(t);
                    });
                  }

                  _this33._parent._refineSetBlock(h, _this33._parent._maxProcessingRate(), _this33._progress).then(function () {
                    n.hasset = !0, _this33._parent._mainSetInUse = null, _this33.nextBatch(e).then(t, a);
                  }, function (t) {
                    n.hasset = !0, _this33._parent._mainSetInUse = null, a(t);
                  });
                }
              }, function (t) {
                n.hasset = !0, _this33._parent._mainSetInUse = null, a(t);
              });
            }), !1 === n.hasset && (this._parent._mainSetInUse = n.returnpromise, n.hasset = !0), n.returnpromise;
          }
        }, {
          key: "next",
          value: function next() {
            var _this34 = this;

            if (null !== this._parent._mainSetInUse) return this._parent._mainSetInUse.then(function (t) {
              return _this34.next();
            }, function (t) {
              return _this34.next();
            });
            var e = {
              returnpromise: null,
              hasset: !1
            };
            return e.returnpromise = Object(_core_promiseUtils_js__WEBPACK_IMPORTED_MODULE_0__["create"])(function (t, n) {
              _this34._parent._getSet(_this34._progress).then(function (s) {
                _this34._lastId < s._known.length - 1 ? "GETPAGES" === s._known[_this34._lastId + 1] ? _this34._parent._expandPagedSet(s, _this34._parent._maxQueryRate(), 0, 0, _this34._progress).then(function (t) {
                  return e.hasset = !0, _this34._parent._mainSetInUse = null, _this34.next();
                }).then(t, n) : (_this34._lastId += 1, _this34._parent._getFeature(s, s._known[_this34._lastId], _this34._progress).then(function (n) {
                  e.hasset = !0, _this34._parent._mainSetInUse = null, t(n);
                }, function (t) {
                  e.hasset = !0, _this34._parent._mainSetInUse = null, n(t);
                })) : s._candidates.length > 0 ? _this34._parent._refineSetBlock(s, _this34._parent._maxProcessingRate(), _this34._progress).then(function () {
                  e.hasset = !0, _this34._parent._mainSetInUse = null, _this34.next().then(t, n);
                }, function (t) {
                  e.hasset = !0, _this34._parent._mainSetInUse = null, n(t);
                }) : (e.hasset = !0, _this34._parent._mainSetInUse = null, t(null));
              }, function (t) {
                e.hasset = !0, _this34._parent._mainSetInUse = null, n(t);
              });
            }), !1 === e.hasset && (this._parent._mainSetInUse = e.returnpromise, e.hasset = !0), e.returnpromise;
          }
        }, {
          key: "count",
          value: function count() {
            var _this35 = this;

            return -1 !== this._parent._totalCount ? Object(_core_promiseUtils_js__WEBPACK_IMPORTED_MODULE_0__["resolve"])(this._parent._totalCount) : this._parent._getSet(this._progress).then(function (t) {
              return _this35._refineAllSets(t);
            }).then(function (t) {
              return _this35._parent._totalCount = t._known.length, Object(_core_promiseUtils_js__WEBPACK_IMPORTED_MODULE_0__["resolve"])(_this35._parent._totalCount);
            });
          }
        }, {
          key: "_refineAllSets",
          value: function _refineAllSets(t) {
            var _this36 = this;

            return t._known.length > 0 && "GETPAGES" === t._known[t._known.length - 1] ? this._parent._expandPagedSet(t, this._parent._maxQueryRate(), 0, 1, this._progress).then(function (e) {
              return _this36._refineAllSets(t);
            }).then(function (t) {
              return Object(_core_promiseUtils_js__WEBPACK_IMPORTED_MODULE_0__["resolve"])(t);
            }) : t._candidates.length > 0 ? "GETPAGES" === t._known[t._candidates.length - 1] ? this._parent._expandPagedSet(t, this._parent._maxQueryRate(), 0, 2, this._progress).then(function (e) {
              return _this36._refineAllSets(t);
            }).then(function (t) {
              return Object(_core_promiseUtils_js__WEBPACK_IMPORTED_MODULE_0__["resolve"])(t);
            }) : this._parent._refineSetBlock(t, this._parent._maxProcessingRate(), this._progress).then(function (t) {
              return t._candidates.length > 0 ? _this36._refineAllSets(t) : Object(_core_promiseUtils_js__WEBPACK_IMPORTED_MODULE_0__["resolve"])(t);
            }) : Object(_core_promiseUtils_js__WEBPACK_IMPORTED_MODULE_0__["resolve"])(t);
          }
        }]);

        return _class3;
      }();
      /***/

    }
  }]);
})();
//# sourceMappingURL=default~arcade-featureSetUtils-js~arcade-functions-featuresetbase-js~arcade-functions-featuresetgeom-js-es5.js.map