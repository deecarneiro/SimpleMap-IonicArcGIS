(function () {
  function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

  function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

  function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

  function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

  function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

  function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

  function _possibleConstructorReturn(self, call) { if (call && (typeof call === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

  function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

  function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

  function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

  function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

  function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

  function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

  function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

  function _iterableToArrayLimit(arr, i) { if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr))) return; var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

  function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

  function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }

  function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

  function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && Symbol.iterator in Object(iter)) return Array.from(iter); }

  function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  function _createForOfIteratorHelper(o, allowArrayLike) { var it; if (typeof Symbol === "undefined" || o[Symbol.iterator] == null) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e98) { throw _e98; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = o[Symbol.iterator](); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e99) { didErr = true; err = _e99; }, f: function f() { try { if (!normalCompletion && it["return"] != null) it["return"](); } finally { if (didErr) throw err; } } }; }

  function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

  function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["arcadeUtils-js"], {
    /***/
    "/kpe":
    /*!**********************************************************!*\
      !*** ./node_modules/@arcgis/core/arcade/lib/messages.js ***!
      \**********************************************************/

    /*! exports provided: Messages */

    /***/
    function kpe(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "Messages", function () {
        return e;
      });
      /*
      All material copyright ESRI, All Rights Reserved, unless otherwise specified.
      See https://js.arcgis.com/4.18/esri/copyright.txt for details.
      */


      var e = {
        BadImportCallArity: "Unexpected token",
        BadGetterArity: "Getter must not have any formal parameters",
        BadSetterArity: "Setter must have exactly one formal parameter",
        BadSetterRestParameter: "Setter function argument must not be a rest parameter",
        ConstructorIsAsync: "Class constructor may not be an async method",
        ConstructorSpecialMethod: "Class constructor may not be an accessor",
        DeclarationMissingInitializer: "Missing initializer in %0 declaration",
        DefaultRestParameter: "Unexpected token =",
        DefaultRestProperty: "Unexpected token =",
        DuplicateBinding: "Duplicate binding %0",
        DuplicateConstructor: "A class may only have one constructor",
        DuplicateProtoProperty: "Duplicate __proto__ fields are not allowed in object literals",
        ForInOfLoopInitializer: "%0 loop variable declaration may not have an initializer",
        GeneratorInLegacyContext: "Generator declarations are not allowed in legacy contexts",
        IllegalBreak: "Illegal break statement",
        IllegalContinue: "Illegal continue statement",
        IllegalExportDeclaration: "Unexpected token",
        IllegalImportDeclaration: "Unexpected token",
        IllegalLanguageModeDirective: "Illegal 'use strict' directive in function with non-simple parameter list",
        IllegalReturn: "Illegal return statement",
        InvalidEscapedReservedWord: "Keyword must not contain escaped characters",
        InvalidHexEscapeSequence: "Invalid hexadecimal escape sequence",
        InvalidLHSInAssignment: "Invalid left-hand side in assignment",
        InvalidLHSInForIn: "Invalid left-hand side in for-in",
        InvalidLHSInForLoop: "Invalid left-hand side in for-loop",
        InvalidModuleSpecifier: "Unexpected token",
        InvalidRegExp: "Invalid regular expression",
        LetInLexicalBinding: "let is disallowed as a lexically bound name",
        MissingFromClause: "Unexpected token",
        MultipleDefaultsInSwitch: "More than one default clause in switch statement",
        NewlineAfterThrow: "Illegal newline after throw",
        NoAsAfterImportNamespace: "Unexpected token",
        NoCatchOrFinally: "Missing catch or finally after try",
        ParameterAfterRestParameter: "Rest parameter must be last formal parameter",
        PropertyAfterRestProperty: "Unexpected token",
        Redeclaration: "%0 '%1' has already been declared",
        StaticPrototype: "Classes may not have static property named prototype",
        StrictCatchVariable: "Catch variable may not be eval or arguments in strict mode",
        StrictDelete: "Delete of an unqualified identifier in strict mode.",
        StrictFunction: "In strict mode code, functions can only be declared at top level or inside a block",
        StrictFunctionName: "Function name may not be eval or arguments in strict mode",
        StrictLHSAssignment: "Assignment to eval or arguments is not allowed in strict mode",
        StrictLHSPostfix: "Postfix increment/decrement may not have eval or arguments operand in strict mode",
        StrictLHSPrefix: "Prefix increment/decrement may not have eval or arguments operand in strict mode",
        StrictModeWith: "Strict mode code may not include a with statement",
        StrictOctalLiteral: "Octal literals are not allowed in strict mode.",
        StrictParamDupe: "Strict mode function may not have duplicate parameter names",
        StrictParamName: "Parameter name eval or arguments is not allowed in strict mode",
        StrictReservedWord: "Use of future reserved word in strict mode",
        StrictVarName: "Variable name may not be eval or arguments in strict mode",
        TemplateOctalLiteral: "Octal literals are not allowed in template strings.",
        UnexpectedEOS: "Unexpected end of input",
        UnexpectedIdentifier: "Unexpected identifier",
        UnexpectedNumber: "Unexpected number",
        UnexpectedReserved: "Unexpected reserved word",
        UnexpectedString: "Unexpected string",
        UnexpectedTemplate: "Unexpected quasi %0",
        UnexpectedToken: "Unexpected token %0",
        UnexpectedTokenIllegal: "Unexpected token ILLEGAL",
        UnknownLabel: "Undefined label '%0'",
        UnterminatedRegExp: "Invalid regular expression: missing /"
      };
      /***/
    },

    /***/
    "2X7Z":
    /*!***************************************************************!*\
      !*** ./node_modules/@arcgis/core/layers/graphics/centroid.js ***!
      \***************************************************************/

    /*! exports provided: getCentroidOptimizedGeometry, lineCentroid */

    /***/
    function X7Z(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "getCentroidOptimizedGeometry", function () {
        return t;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "lineCentroid", function () {
        return r;
      });
      /*
      All material copyright ESRI, All Rights Reserved, unless otherwise specified.
      See https://js.arcgis.com/4.18/esri/copyright.txt for details.
      */


      function n(n, t) {
        return n ? t ? 4 : 3 : t ? 3 : 2;
      }

      function t(t, I, o, u, l) {
        if (!I || !I.lengths.length) return null;
        var N = "upperLeft" === (null == l ? void 0 : l.originPosition) ? -1 : 1;
        t.lengths.length && (t.lengths.length = 0), t.coords.length && (t.coords.length = 0);
        var s = t.coords,
            c = [],
            f = o ? [Number.POSITIVE_INFINITY, Number.NEGATIVE_INFINITY, Number.POSITIVE_INFINITY, Number.NEGATIVE_INFINITY, Number.POSITIVE_INFINITY, Number.NEGATIVE_INFINITY] : [Number.POSITIVE_INFINITY, Number.NEGATIVE_INFINITY, Number.POSITIVE_INFINITY, Number.NEGATIVE_INFINITY],
            i = I.lengths,
            T = I.coords,
            h = n(o, u);
        var g = 0;

        var _iterator = _createForOfIteratorHelper(i),
            _step;

        try {
          for (_iterator.s(); !(_step = _iterator.n()).done;) {
            var _n3 = _step.value;

            var _t = e(f, T, g, _n3, o, u, N);

            _t && c.push(_t), g += _n3 * h;
          }
        } catch (err) {
          _iterator.e(err);
        } finally {
          _iterator.f();
        }

        if (c.sort(function (n, t) {
          var e = N * n[2] - N * t[2];
          return 0 === e && o && (e = n[4] - t[4]), e;
        }), c.length) {
          var _n = 6 * c[0][2];

          s[0] = c[0][0] / _n, s[1] = c[0][1] / _n, o && (_n = 6 * c[0][4], s[2] = 0 !== _n ? c[0][3] / _n : 0), (s[0] < f[0] || s[0] > f[1] || s[1] < f[2] || s[1] > f[3] || o && (s[2] < f[4] || s[2] > f[5])) && (s.length = 0);
        }

        if (!s.length) {
          var _n2 = I.lengths[0] ? r(T, 0, i[0], o, u) : null;

          if (!_n2) return null;
          s[0] = _n2[0], s[1] = _n2[1], o && _n2.length > 2 && (s[2] = _n2[2]);
        }

        return t;
      }

      function e(t, e, r, I, o, u) {
        var l = arguments.length > 6 && arguments[6] !== undefined ? arguments[6] : 1;
        var N = n(o, u);
        var s = r,
            c = r + N,
            f = 0,
            i = 0,
            T = 0,
            h = 0,
            g = 0;

        for (var _n4 = 0, _r = I - 1; _n4 < _r; _n4++, s += N, c += N) {
          var _n5 = e[s],
              _r2 = e[s + 1],
              _I = e[s + 2],
              _u = e[c],
              _l = e[c + 1],
              _N = e[c + 2];

          var _E = _n5 * _l - _u * _r2;

          h += _E, f += (_n5 + _u) * _E, i += (_r2 + _l) * _E, o && (_E = _n5 * _N - _u * _I, T += (_I + _N) * _E, g += _E), _n5 < t[0] && (t[0] = _n5), _n5 > t[1] && (t[1] = _n5), _r2 < t[2] && (t[2] = _r2), _r2 > t[3] && (t[3] = _r2), o && (_I < t[4] && (t[4] = _I), _I > t[5] && (t[5] = _I));
        }

        if (h * l > 0 && (h *= -1), g * l > 0 && (g *= -1), !h) return null;
        var E = [f, i, .5 * h];
        return o && (E[3] = T, E[4] = .5 * g), E;
      }

      function r(t, e, r, N, s) {
        var c = n(N, s);
        var f = e,
            i = e + c,
            T = 0,
            h = 0,
            g = 0,
            E = 0;

        for (var _n6 = 0, _e2 = r - 1; _n6 < _e2; _n6++, f += c, i += c) {
          var _n7 = t[f],
              _e3 = t[f + 1],
              _r3 = t[f + 2],
              _s = t[i],
              _c = t[i + 1],
              b = t[i + 2],
              m = N ? o(_n7, _e3, _r3, _s, _c, b) : I(_n7, _e3, _s, _c);
          if (m) if (T += m, N) {
            var _t2 = l(_n7, _e3, _r3, _s, _c, b);

            h += m * _t2[0], g += m * _t2[1], E += m * _t2[2];
          } else {
            var _t3 = u(_n7, _e3, _s, _c);

            h += m * _t3[0], g += m * _t3[1];
          }
        }

        return T > 0 ? N ? [h / T, g / T, E / T] : [h / T, g / T] : r > 0 ? N ? [t[e], t[e + 1], t[e + 2]] : [t[e], t[e + 1]] : null;
      }

      function I(n, t, e, r) {
        var I = e - n,
            o = r - t;
        return Math.sqrt(I * I + o * o);
      }

      function o(n, t, e, r, I, o) {
        var u = r - n,
            l = I - t,
            N = o - e;
        return Math.sqrt(u * u + l * l + N * N);
      }

      function u(n, t, e, r) {
        return [n + .5 * (e - n), t + .5 * (r - t)];
      }

      function l(n, t, e, r, I, o) {
        return [n + .5 * (r - n), t + .5 * (I - t), e + .5 * (o - e)];
      }
      /***/

    },

    /***/
    "3F7n":
    /*!***********************************************************!*\
      !*** ./node_modules/@arcgis/core/arcade/lib/tokenizer.js ***!
      \***********************************************************/

    /*! exports provided: Tokenizer */

    /***/
    function F7n(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "Tokenizer", function () {
        return r;
      });
      /* harmony import */


      var _error_handler_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ./error-handler.js */
      "Irdf");
      /* harmony import */


      var _scanner_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./scanner.js */
      "eevo");
      /* harmony import */


      var _token_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./token.js */
      "Fany");
      /*
      All material copyright ESRI, All Rights Reserved, unless otherwise specified.
      See https://js.arcgis.com/4.18/esri/copyright.txt for details.
      */


      var n = /*#__PURE__*/function () {
        function n() {
          _classCallCheck(this, n);

          this.values = [], this.curly = this.paren = -1;
        }

        _createClass(n, [{
          key: "beforeFunctionExpression",
          value: function beforeFunctionExpression(e) {
            return ["(", "{", "[", "in", "typeof", "instanceof", "new", "return", "case", "delete", "throw", "void", "=", "+=", "-=", "*=", "**=", "/=", "%=", "<<=", ">>=", ">>>=", "&=", "|=", "^=", ",", "+", "-", "*", "**", "/", "%", "++", "--", "<<", ">>", ">>>", "&", "|", "^", "!", "~", "&&", "||", "?", ":", "===", "==", ">=", "<=", "<", ">", "!=", "!=="].indexOf(e) >= 0;
          }
        }, {
          key: "isRegexStart",
          value: function isRegexStart() {
            var e = this.values[this.values.length - 1];
            var t = null !== e;

            switch (e) {
              case "this":
              case "]":
                t = !1;
                break;

              case ")":
                {
                  var _e4 = this.values[this.paren - 1];
                  t = "if" === _e4 || "while" === _e4 || "for" === _e4 || "with" === _e4;
                  break;
                }

              case "}":
                if (t = !0, "function" === this.values[this.curly - 3]) {
                  var _e5 = this.values[this.curly - 4];
                  t = !!_e5 && !this.beforeFunctionExpression(_e5);
                } else if ("function" === this.values[this.curly - 4]) {
                  var _e6 = this.values[this.curly - 5];
                  t = !_e6 || !this.beforeFunctionExpression(_e6);
                }

            }

            return t;
          }
        }, {
          key: "push",
          value: function push(e) {
            7 === e.type || 4 === e.type ? ("{" === e.value ? this.curly = this.values.length : "(" === e.value && (this.paren = this.values.length), this.values.push(e.value)) : this.values.push(null);
          }
        }]);

        return n;
      }();

      var r = /*#__PURE__*/function () {
        function r(s, _r4) {
          _classCallCheck(this, r);

          this.errorHandler = new _error_handler_js__WEBPACK_IMPORTED_MODULE_0__["ErrorHandler"](), this.errorHandler.tolerant = !!_r4 && "boolean" == typeof _r4.tolerant && _r4.tolerant, this.scanner = new _scanner_js__WEBPACK_IMPORTED_MODULE_1__["Scanner"](s, this.errorHandler), this.scanner.trackComment = !!_r4 && "boolean" == typeof _r4.comment && _r4.comment, this.trackRange = !!_r4 && "boolean" == typeof _r4.range && _r4.range, this.trackLoc = !!_r4 && "boolean" == typeof _r4.loc && _r4.loc, this.buffer = [], this.reader = new n();
        }

        _createClass(r, [{
          key: "errors",
          value: function errors() {
            return this.errorHandler.errors;
          }
        }, {
          key: "getNextToken",
          value: function getNextToken() {
            if (0 === this.buffer.length) {
              var e = this.scanner.scanComments();
              if (this.scanner.trackComment) for (var t = 0; t < e.length; ++t) {
                var s = e[t],
                    _n8 = this.scanner.source.slice(s.slice[0], s.slice[1]),
                    _r6 = {
                  type: s.multiLine ? "BlockComment" : "LineComment",
                  value: _n8
                };

                this.trackRange && (_r6.range = s.range), this.trackLoc && (_r6.loc = s.loc), this.buffer.push(_r6);
              }

              if (!this.scanner.eof()) {
                var _e7;

                this.trackLoc && (_e7 = {
                  start: {
                    line: this.scanner.lineNumber,
                    column: this.scanner.index - this.scanner.lineStart
                  },
                  end: {}
                });

                var _t4;

                if ("/" === this.scanner.source[this.scanner.index] && this.reader.isRegexStart()) {
                  var _e8 = this.scanner.saveState();

                  try {
                    _t4 = this.scanner.scanRegExp();
                  } catch (s) {
                    this.scanner.restoreState(_e8), _t4 = this.scanner.lex();
                  }
                } else _t4 = this.scanner.lex();

                this.reader.push(_t4);
                var _n9 = {
                  type: _token_js__WEBPACK_IMPORTED_MODULE_2__["TokenName"][_t4.type],
                  value: this.scanner.source.slice(_t4.start, _t4.end)
                };

                if (this.trackRange && (_n9.range = [_t4.start, _t4.end]), this.trackLoc && (_e7.end = {
                  line: this.scanner.lineNumber,
                  column: this.scanner.index - this.scanner.lineStart
                }, _n9.loc = _e7), 9 === _t4.type) {
                  var _e9 = _t4.pattern,
                      _s2 = _t4.flags;
                  _n9.regex = {
                    pattern: _e9,
                    flags: _s2
                  };
                }

                this.buffer.push(_n9);
              }
            }

            return this.buffer.shift();
          }
        }]);

        return r;
      }();
      /***/

    },

    /***/
    "3xY4":
    /*!****************************************************************!*\
      !*** ./node_modules/@arcgis/core/arcade/functions/centroid.js ***!
      \****************************************************************/

    /*! exports provided: angle2D, angleBetween2D, angleBetweenRad, angleRad, bearing2D, bearingBetween2D, centroidMultiPoint, centroidPolyline, pathsSelfIntersecting */

    /***/
    function xY4(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "angle2D", function () {
        return i;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "angleBetween2D", function () {
        return x;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "angleBetweenRad", function () {
        return y;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "angleRad", function () {
        return c;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "bearing2D", function () {
        return u;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "bearingBetween2D", function () {
        return m;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "centroidMultiPoint", function () {
        return f;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "centroidPolyline", function () {
        return h;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "pathsSelfIntersecting", function () {
        return g;
      });
      /* harmony import */


      var _geometry_Point_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ../../geometry/Point.js */
      "SuVq");
      /* harmony import */


      var _geometry_support_intersects_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ../../geometry/support/intersects.js */
      "PNY3");
      /*
      All material copyright ESRI, All Rights Reserved, unless otherwise specified.
      See https://js.arcgis.com/4.18/esri/copyright.txt for details.
      */


      function e(t, n, e) {
        var o = {
          x: 0,
          y: 0
        };
        n && (o.z = 0), e && (o.m = 0);
        var h = 0,
            f = t[0];

        for (var _l2 = 0; _l2 < t.length; _l2++) {
          var _c2 = t[_l2];

          if (!1 === a(_c2, f)) {
            var _t5 = s(f, _c2, n),
                _a = r(f, _c2, n, e);

            _a.x *= _t5, _a.y *= _t5, o.x += _a.x, o.y += _a.y, n && (_a.z *= _t5, o.z += _a.z), e && (_a.m *= _t5, o.m += _a.m), h += _t5, f = _c2;
          }
        }

        return h > 0 ? (o.x /= h, o.y /= h, n && (o.z /= h), e && (o.m /= h)) : (o.x = t[0][0], o.y = t[0][1], n && (o.z = t[0][2]), e && n ? o.m = t[0][3] : e && (o.m = t[0][2])), o;
      }

      function r(t, n, e, r) {
        var o = {
          x: (t[0] + n[0]) / 2,
          y: (t[1] + n[1]) / 2
        };
        return e && (o.z = (t[2] + n[2]) / 2), e && r ? o.m = (t[3] + n[3]) / 2 : r && (o.m = (t[2] + n[2]) / 2), o;
      }

      function o(t, n) {
        if (t.length <= 1) return 0;
        var e = 0;

        for (var _r7 = 1; _r7 < t.length; _r7++) {
          e += s(t[_r7 - 1], t[_r7], n);
        }

        return e;
      }

      function s(t, n, e) {
        var r = n[0] - t[0],
            o = n[1] - t[1];

        if (e) {
          var _t6 = n[2] - n[2];

          return Math.sqrt(r * r + o * o + _t6 * _t6);
        }

        return Math.sqrt(r * r + o * o);
      }

      function a(t, n) {
        if (t.length !== n.length) return !1;

        for (var _e10 = 0; _e10 < t.length; _e10++) {
          if (t[_e10] !== n[_e10]) return !1;
        }

        return !0;
      }

      function h(n) {
        var r = {
          x: 0,
          y: 0,
          spatialReference: n.spatialReference.toJSON()
        },
            s = {
          x: 0,
          y: 0,
          spatialReference: n.spatialReference.toJSON()
        };
        var a = 0,
            h = 0;

        for (var t = 0; t < n.paths.length; t++) {
          if (0 === n.paths[t].length) continue;

          var _f = o(n.paths[t], !0 === n.hasZ);

          if (0 === _f) {
            var _o = e(n.paths[t], !0 === n.hasZ, !0 === n.hasM);

            r.x += _o.x, r.y += _o.y, !0 === n.hasZ && (r.z += _o.z), !0 === n.hasM && (r.m += _o.m), ++a;
          } else {
            var _r8 = e(n.paths[t], !0 === n.hasZ, !0 === n.hasM);

            s.x += _r8.x * _f, s.y += _r8.y * _f, !0 === n.hasZ && (s.z += _r8.z * _f), !0 === n.hasM && (s.m += _r8.m * _f), h += _f;
          }
        }

        return h > 0 ? (s.x /= h, s.y /= h, !0 === n.hasZ && (s.z /= h), !0 === n.hasM && (s.m /= h), new _geometry_Point_js__WEBPACK_IMPORTED_MODULE_0__["default"](s)) : a > 0 ? (r.x /= a, r.y /= a, !0 === n.hasZ && (s.z /= a), !0 === n.hasM && (r.m /= a), new _geometry_Point_js__WEBPACK_IMPORTED_MODULE_0__["default"](r)) : null;
      }

      function f(n) {
        if (0 === n.points.length) return null;
        var e = 0,
            r = 0,
            o = 0,
            s = 0;

        for (var t = 0; t < n.points.length; t++) {
          var _a2 = n.getPoint(t);

          !0 === _a2.hasZ && (o += _a2.z), !0 === _a2.hasM && (s += _a2.m), e += _a2.x, r += _a2.y, s += _a2.m;
        }

        var a = {
          x: e / n.points.length,
          y: r / n.points.length,
          spatialReference: null
        };
        return a.spatialReference = n.spatialReference.toJSON(), !0 === n.hasZ && (a.z = o / n.points.length), !0 === n.hasM && (a.m = s / n.points.length), new _geometry_Point_js__WEBPACK_IMPORTED_MODULE_0__["default"](a);
      }

      function l(t, n) {
        var e = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 0;

        for (; t < e;) {
          t += n;
        }

        var r = e + n;

        for (; t >= r;) {
          t -= n;
        }

        return t;
      }

      function c(t, n) {
        return Math.atan2(n.y - t.y, n.x - t.x);
      }

      function i(t, n) {
        return l(c(t, n), 2 * Math.PI) * (180 / Math.PI);
      }

      function u(t, n) {
        return l(Math.PI / 2 - c(t, n), 2 * Math.PI) * (180 / Math.PI);
      }

      function y(t, n, e) {
        var r = {
          x: t.x - n.x,
          y: t.y - n.y
        },
            o = {
          x: e.x - n.x,
          y: e.y - n.y
        };
        return Math.atan2((s = r).x * (a = o).y - a.x * s.y, function (t, n) {
          return t.x * n.x + t.y * n.y;
        }(r, o));
        var s, a;
      }

      function x(t, n, e) {
        return l(y(t, n, e), 2 * Math.PI) * (180 / Math.PI);
      }

      function m(t, n, e) {
        return l(-1 * y(t, n, e), 2 * Math.PI) * (180 / Math.PI);
      }

      var p = [0, 0];

      function g(t) {
        for (var _e11 = 0; _e11 < t.length; _e11++) {
          var _r9 = t[_e11];

          for (var _o3 = 0; _o3 < _r9.length - 1; _o3++) {
            var _s3 = _r9[_o3],
                _a3 = _r9[_o3 + 1];

            for (var _r10 = _e11 + 1; _r10 < t.length; _r10++) {
              for (var _e12 = 0; _e12 < t[_r10].length - 1; _e12++) {
                var _o4 = t[_r10][_e12],
                    _h = t[_r10][_e12 + 1];
                if (Object(_geometry_support_intersects_js__WEBPACK_IMPORTED_MODULE_1__["segmentIntersects"])(_s3, _a3, _o4, _h, p) && !(p[0] === _s3[0] && p[1] === _s3[1] || p[0] === _o4[0] && p[1] === _o4[1] || p[0] === _a3[0] && p[1] === _a3[1] || p[0] === _h[0] && p[1] === _h[1])) return !0;
              }
            }
          }

          var _o2 = _r9.length;
          if (!(_o2 < 3)) for (var _t7 = 0; _t7 <= _o2 - 2; _t7++) {
            var _e13 = _r9[_t7],
                _s4 = _r9[_t7 + 1];

            for (var _a4 = _t7 + 2; _a4 <= _o2 - 2; _a4++) {
              var _t8 = _r9[_a4],
                  _o5 = _r9[_a4 + 1];
              if (Object(_geometry_support_intersects_js__WEBPACK_IMPORTED_MODULE_1__["segmentIntersects"])(_e13, _s4, _t8, _o5, p) && !(p[0] === _e13[0] && p[1] === _e13[1] || p[0] === _t8[0] && p[1] === _t8[1] || p[0] === _s4[0] && p[1] === _s4[1] || p[0] === _o5[0] && p[1] === _o5[1])) return !0;
            }
          }
        }

        return !1;
      }
      /***/

    },

    /***/
    "4PGM":
    /*!****************************************************************!*\
      !*** ./node_modules/@arcgis/core/arcade/functions/geomsync.js ***!
      \****************************************************************/

    /*! exports provided: registerFunctions, setGeometryEngine */

    /***/
    function PGM(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "registerFunctions", function () {
        return k;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "setGeometryEngine", function () {
        return b;
      });
      /* harmony import */


      var _geometry_Geometry_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ../../geometry/Geometry.js */
      "N2DF");
      /* harmony import */


      var _geometry_Point_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ../../geometry/Point.js */
      "SuVq");
      /* harmony import */


      var _geometry_Extent_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ../../geometry/Extent.js */
      "OvF4");
      /* harmony import */


      var _geometry_Multipoint_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ../../geometry/Multipoint.js */
      "V9wi");
      /* harmony import */


      var _geometry_Polygon_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ../../geometry/Polygon.js */
      "Ehki");
      /* harmony import */


      var _geometry_Polyline_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ../../geometry/Polyline.js */
      "UhwK");
      /* harmony import */


      var _geometry_support_jsonUtils_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ../../geometry/support/jsonUtils.js */
      "qatw");
      /* harmony import */


      var _kernel_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! ../../kernel.js */
      "975N");
      /* harmony import */


      var _chunks_languageUtils_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! ../../chunks/languageUtils.js */
      "idrm");
      /* harmony import */


      var _centroid_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! ./centroid.js */
      "3xY4");
      /* harmony import */


      var _kernel_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
      /*! ../kernel.js */
      "hUmP");
      /*
      All material copyright ESRI, All Rights Reserved, unless otherwise specified.
      See https://js.arcgis.com/4.18/esri/copyright.txt for details.
      */


      var L = null;

      function P(n) {
        return 0 === _kernel_js__WEBPACK_IMPORTED_MODULE_7__["version"].indexOf("4.") ? _geometry_Polygon_js__WEBPACK_IMPORTED_MODULE_4__["default"].fromExtent(n) : new _geometry_Polygon_js__WEBPACK_IMPORTED_MODULE_4__["default"]({
          spatialReference: n.spatialReference,
          rings: [[[n.xmin, n.ymin], [n.xmin, n.ymax], [n.xmax, n.ymax], [n.xmax, n.ymin], [n.xmin, n.ymin]]]
        });
      }

      function b(n) {
        L = n;
      }

      function k(u, b) {
        function k(e) {
          if (Object(_chunks_languageUtils_js__WEBPACK_IMPORTED_MODULE_8__["p"])(e, 2, 2), e[0] instanceof _geometry_Geometry_js__WEBPACK_IMPORTED_MODULE_0__["default"] && e[1] instanceof _geometry_Geometry_js__WEBPACK_IMPORTED_MODULE_0__["default"]) ;else if (e[0] instanceof _geometry_Geometry_js__WEBPACK_IMPORTED_MODULE_0__["default"] && null === e[1]) ;else if (e[1] instanceof _geometry_Geometry_js__WEBPACK_IMPORTED_MODULE_0__["default"] && null === e[0]) ;else if (null !== e[0] || null !== e[1]) throw new Error("Illegal Argument");
        }

        u.disjoint = function (n, e) {
          return b(n, e, function (n, e, r) {
            return k(r = Object(_chunks_languageUtils_js__WEBPACK_IMPORTED_MODULE_8__["J"])(r)), null === r[0] || null === r[1] || L.disjoint(r[0], r[1]);
          });
        }, u.intersects = function (n, e) {
          return b(n, e, function (n, e, r) {
            return k(r = Object(_chunks_languageUtils_js__WEBPACK_IMPORTED_MODULE_8__["J"])(r)), null !== r[0] && null !== r[1] && L.intersects(r[0], r[1]);
          });
        }, u.touches = function (n, e) {
          return b(n, e, function (n, e, r) {
            return k(r = Object(_chunks_languageUtils_js__WEBPACK_IMPORTED_MODULE_8__["J"])(r)), null !== r[0] && null !== r[1] && L.touches(r[0], r[1]);
          });
        }, u.crosses = function (n, e) {
          return b(n, e, function (n, e, r) {
            return k(r = Object(_chunks_languageUtils_js__WEBPACK_IMPORTED_MODULE_8__["J"])(r)), null !== r[0] && null !== r[1] && L.crosses(r[0], r[1]);
          });
        }, u.within = function (n, e) {
          return b(n, e, function (n, e, r) {
            return k(r = Object(_chunks_languageUtils_js__WEBPACK_IMPORTED_MODULE_8__["J"])(r)), null !== r[0] && null !== r[1] && L.within(r[0], r[1]);
          });
        }, u.contains = function (n, e) {
          return b(n, e, function (n, e, r) {
            return k(r = Object(_chunks_languageUtils_js__WEBPACK_IMPORTED_MODULE_8__["J"])(r)), null !== r[0] && null !== r[1] && L.contains(r[0], r[1]);
          });
        }, u.overlaps = function (n, e) {
          return b(n, e, function (n, e, r) {
            return k(r = Object(_chunks_languageUtils_js__WEBPACK_IMPORTED_MODULE_8__["J"])(r)), null !== r[0] && null !== r[1] && L.overlaps(r[0], r[1]);
          });
        }, u.equals = function (e, r) {
          return b(e, r, function (e, r, t) {
            return Object(_chunks_languageUtils_js__WEBPACK_IMPORTED_MODULE_8__["p"])(t, 2, 2), t[0] === t[1] || (t[0] instanceof _geometry_Geometry_js__WEBPACK_IMPORTED_MODULE_0__["default"] && t[1] instanceof _geometry_Geometry_js__WEBPACK_IMPORTED_MODULE_0__["default"] ? L.equals(t[0], t[1]) : !(!Object(_chunks_languageUtils_js__WEBPACK_IMPORTED_MODULE_8__["f"])(t[0]) || !Object(_chunks_languageUtils_js__WEBPACK_IMPORTED_MODULE_8__["f"])(t[1])) && t[0].getTime() === t[1].getTime());
          });
        }, u.relate = function (e, r) {
          return b(e, r, function (e, r, t) {
            if (t = Object(_chunks_languageUtils_js__WEBPACK_IMPORTED_MODULE_8__["J"])(t), Object(_chunks_languageUtils_js__WEBPACK_IMPORTED_MODULE_8__["p"])(t, 3, 3), t[0] instanceof _geometry_Geometry_js__WEBPACK_IMPORTED_MODULE_0__["default"] && t[1] instanceof _geometry_Geometry_js__WEBPACK_IMPORTED_MODULE_0__["default"]) return L.relate(t[0], t[1], Object(_chunks_languageUtils_js__WEBPACK_IMPORTED_MODULE_8__["e"])(t[2]));
            if (t[0] instanceof _geometry_Geometry_js__WEBPACK_IMPORTED_MODULE_0__["default"] && null === t[1]) return !1;
            if (t[1] instanceof _geometry_Geometry_js__WEBPACK_IMPORTED_MODULE_0__["default"] && null === t[0]) return !1;
            if (null === t[0] && null === t[1]) return !1;
            throw new Error("Illegal Argument");
          });
        }, u.intersection = function (n, e) {
          return b(n, e, function (n, e, r) {
            return k(r = Object(_chunks_languageUtils_js__WEBPACK_IMPORTED_MODULE_8__["J"])(r)), null === r[0] || null === r[1] ? null : L.intersect(r[0], r[1]);
          });
        }, u.union = function (e, r) {
          return b(e, r, function (r, t, l) {
            var i = [];
            if (0 === (l = Object(_chunks_languageUtils_js__WEBPACK_IMPORTED_MODULE_8__["J"])(l)).length) throw new Error("Function called with wrong number of Parameters");
            if (1 === l.length) {
              if (Object(_chunks_languageUtils_js__WEBPACK_IMPORTED_MODULE_8__["h"])(l[0])) {
                var _e14 = Object(_chunks_languageUtils_js__WEBPACK_IMPORTED_MODULE_8__["J"])(l[0]);

                for (var _r11 = 0; _r11 < _e14.length; _r11++) {
                  if (null !== _e14[_r11]) {
                    if (!(_e14[_r11] instanceof _geometry_Geometry_js__WEBPACK_IMPORTED_MODULE_0__["default"])) throw new Error("Illegal Argument");
                    i.push(_e14[_r11]);
                  }
                }
              } else {
                if (!Object(_chunks_languageUtils_js__WEBPACK_IMPORTED_MODULE_8__["o"])(l[0])) {
                  if (l[0] instanceof _geometry_Geometry_js__WEBPACK_IMPORTED_MODULE_0__["default"]) return Object(_chunks_languageUtils_js__WEBPACK_IMPORTED_MODULE_8__["r"])(Object(_kernel_js__WEBPACK_IMPORTED_MODULE_10__["cloneGeometry"])(l[0]), e.spatialReference);
                  if (null === l[0]) return null;
                  throw new Error("Illegal Argument");
                }

                {
                  var _e15 = Object(_chunks_languageUtils_js__WEBPACK_IMPORTED_MODULE_8__["J"])(l[0].toArray());

                  for (var _r12 = 0; _r12 < _e15.length; _r12++) {
                    if (null !== _e15[_r12]) {
                      if (!(_e15[_r12] instanceof _geometry_Geometry_js__WEBPACK_IMPORTED_MODULE_0__["default"])) throw new Error("Illegal Argument");
                      i.push(_e15[_r12]);
                    }
                  }
                }
              }
            } else for (var _e16 = 0; _e16 < l.length; _e16++) {
              if (null !== l[_e16]) {
                if (!(l[_e16] instanceof _geometry_Geometry_js__WEBPACK_IMPORTED_MODULE_0__["default"])) throw new Error("Illegal Argument");
                i.push(l[_e16]);
              }
            }
            return 0 === i.length ? null : L.union(i);
          });
        }, u.difference = function (n, e) {
          return b(n, e, function (n, e, r) {
            return k(r = Object(_chunks_languageUtils_js__WEBPACK_IMPORTED_MODULE_8__["J"])(r)), null !== r[0] && null === r[1] ? Object(_kernel_js__WEBPACK_IMPORTED_MODULE_10__["cloneGeometry"])(r[0]) : null === r[0] ? null : L.difference(r[0], r[1]);
          });
        }, u.symmetricdifference = function (n, e) {
          return b(n, e, function (n, e, r) {
            return k(r = Object(_chunks_languageUtils_js__WEBPACK_IMPORTED_MODULE_8__["J"])(r)), null === r[0] && null === r[1] ? null : null === r[0] ? Object(_kernel_js__WEBPACK_IMPORTED_MODULE_10__["cloneGeometry"])(r[1]) : null === r[1] ? Object(_kernel_js__WEBPACK_IMPORTED_MODULE_10__["cloneGeometry"])(r[0]) : L.symmetricDifference(r[0], r[1]);
          });
        }, u.clip = function (e, t) {
          return b(e, t, function (e, t, l) {
            if (l = Object(_chunks_languageUtils_js__WEBPACK_IMPORTED_MODULE_8__["J"])(l), Object(_chunks_languageUtils_js__WEBPACK_IMPORTED_MODULE_8__["p"])(l, 2, 2), !(l[1] instanceof _geometry_Extent_js__WEBPACK_IMPORTED_MODULE_2__["default"]) && null !== l[1]) throw new Error("Illegal Argument");
            if (null === l[0]) return null;
            if (!(l[0] instanceof _geometry_Geometry_js__WEBPACK_IMPORTED_MODULE_0__["default"])) throw new Error("Illegal Argument");
            return null === l[1] ? null : L.clip(l[0], l[1]);
          });
        }, u.cut = function (e, r) {
          return b(e, r, function (e, r, t) {
            if (t = Object(_chunks_languageUtils_js__WEBPACK_IMPORTED_MODULE_8__["J"])(t), Object(_chunks_languageUtils_js__WEBPACK_IMPORTED_MODULE_8__["p"])(t, 2, 2), !(t[1] instanceof _geometry_Polyline_js__WEBPACK_IMPORTED_MODULE_5__["default"]) && null !== t[1]) throw new Error("Illegal Argument");
            if (null === t[0]) return [];
            if (!(t[0] instanceof _geometry_Geometry_js__WEBPACK_IMPORTED_MODULE_0__["default"])) throw new Error("Illegal Argument");
            return null === t[1] ? [Object(_kernel_js__WEBPACK_IMPORTED_MODULE_10__["cloneGeometry"])(t[0])] : L.cut(t[0], t[1]);
          });
        }, u.area = function (e, r) {
          return b(e, r, function (r, t, l) {
            if (Object(_chunks_languageUtils_js__WEBPACK_IMPORTED_MODULE_8__["p"])(l, 1, 2), null === (l = Object(_chunks_languageUtils_js__WEBPACK_IMPORTED_MODULE_8__["J"])(l))[0]) return 0;

            if (Object(_chunks_languageUtils_js__WEBPACK_IMPORTED_MODULE_8__["h"])(l[0]) || Object(_chunks_languageUtils_js__WEBPACK_IMPORTED_MODULE_8__["o"])(l[0])) {
              var n = Object(_chunks_languageUtils_js__WEBPACK_IMPORTED_MODULE_8__["L"])(l[0], e.spatialReference);
              return null === n ? 0 : L.planarArea(n, Object(_kernel_js__WEBPACK_IMPORTED_MODULE_10__["convertSquareUnitsToCode"])(Object(_chunks_languageUtils_js__WEBPACK_IMPORTED_MODULE_8__["C"])(l[1], -1)));
            }

            if (!(l[0] instanceof _geometry_Geometry_js__WEBPACK_IMPORTED_MODULE_0__["default"])) throw new Error("Illegal Argument");
            return L.planarArea(l[0], Object(_kernel_js__WEBPACK_IMPORTED_MODULE_10__["convertSquareUnitsToCode"])(Object(_chunks_languageUtils_js__WEBPACK_IMPORTED_MODULE_8__["C"])(l[1], -1)));
          });
        }, u.areageodetic = function (e, r) {
          return b(e, r, function (r, t, l) {
            if (Object(_chunks_languageUtils_js__WEBPACK_IMPORTED_MODULE_8__["p"])(l, 1, 2), null === (l = Object(_chunks_languageUtils_js__WEBPACK_IMPORTED_MODULE_8__["J"])(l))[0]) return 0;

            if (Object(_chunks_languageUtils_js__WEBPACK_IMPORTED_MODULE_8__["h"])(l[0]) || Object(_chunks_languageUtils_js__WEBPACK_IMPORTED_MODULE_8__["o"])(l[0])) {
              var n = Object(_chunks_languageUtils_js__WEBPACK_IMPORTED_MODULE_8__["L"])(l[0], e.spatialReference);
              return null === n ? 0 : L.geodesicArea(n, Object(_kernel_js__WEBPACK_IMPORTED_MODULE_10__["convertSquareUnitsToCode"])(Object(_chunks_languageUtils_js__WEBPACK_IMPORTED_MODULE_8__["C"])(l[1], -1)));
            }

            if (!(l[0] instanceof _geometry_Geometry_js__WEBPACK_IMPORTED_MODULE_0__["default"])) throw new Error("Illegal Argument");
            return L.geodesicArea(l[0], Object(_kernel_js__WEBPACK_IMPORTED_MODULE_10__["convertSquareUnitsToCode"])(Object(_chunks_languageUtils_js__WEBPACK_IMPORTED_MODULE_8__["C"])(l[1], -1)));
          });
        }, u.length = function (e, r) {
          return b(e, r, function (r, t, l) {
            if (Object(_chunks_languageUtils_js__WEBPACK_IMPORTED_MODULE_8__["p"])(l, 1, 2), null === (l = Object(_chunks_languageUtils_js__WEBPACK_IMPORTED_MODULE_8__["J"])(l))[0]) return 0;

            if (Object(_chunks_languageUtils_js__WEBPACK_IMPORTED_MODULE_8__["h"])(l[0]) || Object(_chunks_languageUtils_js__WEBPACK_IMPORTED_MODULE_8__["o"])(l[0])) {
              var n = Object(_chunks_languageUtils_js__WEBPACK_IMPORTED_MODULE_8__["K"])(l[0], e.spatialReference);
              return null === n ? 0 : L.planarLength(n, Object(_kernel_js__WEBPACK_IMPORTED_MODULE_10__["convertLinearUnitsToCode"])(Object(_chunks_languageUtils_js__WEBPACK_IMPORTED_MODULE_8__["C"])(l[1], -1)));
            }

            if (!(l[0] instanceof _geometry_Geometry_js__WEBPACK_IMPORTED_MODULE_0__["default"])) throw new Error("Illegal Argument");
            return L.planarLength(l[0], Object(_kernel_js__WEBPACK_IMPORTED_MODULE_10__["convertLinearUnitsToCode"])(Object(_chunks_languageUtils_js__WEBPACK_IMPORTED_MODULE_8__["C"])(l[1], -1)));
          });
        }, u.lengthgeodetic = function (e, r) {
          return b(e, r, function (r, t, l) {
            if (Object(_chunks_languageUtils_js__WEBPACK_IMPORTED_MODULE_8__["p"])(l, 1, 2), null === (l = Object(_chunks_languageUtils_js__WEBPACK_IMPORTED_MODULE_8__["J"])(l))[0]) return 0;

            if (Object(_chunks_languageUtils_js__WEBPACK_IMPORTED_MODULE_8__["h"])(l[0]) || Object(_chunks_languageUtils_js__WEBPACK_IMPORTED_MODULE_8__["o"])(l[0])) {
              var n = Object(_chunks_languageUtils_js__WEBPACK_IMPORTED_MODULE_8__["K"])(l[0], e.spatialReference);
              return null === n ? 0 : L.geodesicLength(n, Object(_kernel_js__WEBPACK_IMPORTED_MODULE_10__["convertLinearUnitsToCode"])(Object(_chunks_languageUtils_js__WEBPACK_IMPORTED_MODULE_8__["C"])(l[1], -1)));
            }

            if (!(l[0] instanceof _geometry_Geometry_js__WEBPACK_IMPORTED_MODULE_0__["default"])) throw new Error("Illegal Argument");
            return L.geodesicLength(l[0], Object(_kernel_js__WEBPACK_IMPORTED_MODULE_10__["convertLinearUnitsToCode"])(Object(_chunks_languageUtils_js__WEBPACK_IMPORTED_MODULE_8__["C"])(l[1], -1)));
          });
        }, u.distance = function (e, r) {
          return b(e, r, function (r, t, l) {
            l = Object(_chunks_languageUtils_js__WEBPACK_IMPORTED_MODULE_8__["J"])(l), Object(_chunks_languageUtils_js__WEBPACK_IMPORTED_MODULE_8__["p"])(l, 2, 3);
            var i = l[0];
            (Object(_chunks_languageUtils_js__WEBPACK_IMPORTED_MODULE_8__["h"])(l[0]) || Object(_chunks_languageUtils_js__WEBPACK_IMPORTED_MODULE_8__["o"])(l[0])) && (i = Object(_chunks_languageUtils_js__WEBPACK_IMPORTED_MODULE_8__["O"])(l[0], e.spatialReference));
            var o = l[1];
            if ((Object(_chunks_languageUtils_js__WEBPACK_IMPORTED_MODULE_8__["h"])(l[1]) || Object(_chunks_languageUtils_js__WEBPACK_IMPORTED_MODULE_8__["o"])(l[1])) && (o = Object(_chunks_languageUtils_js__WEBPACK_IMPORTED_MODULE_8__["O"])(l[1], e.spatialReference)), !(i instanceof _geometry_Geometry_js__WEBPACK_IMPORTED_MODULE_0__["default"])) throw new Error("Illegal Argument");
            if (!(o instanceof _geometry_Geometry_js__WEBPACK_IMPORTED_MODULE_0__["default"])) throw new Error("Illegal Argument");
            return L.distance(i, o, Object(_kernel_js__WEBPACK_IMPORTED_MODULE_10__["convertLinearUnitsToCode"])(Object(_chunks_languageUtils_js__WEBPACK_IMPORTED_MODULE_8__["C"])(l[2], -1)));
          });
        }, u.distancegeodetic = function (n, r) {
          return b(n, r, function (n, r, t) {
            t = Object(_chunks_languageUtils_js__WEBPACK_IMPORTED_MODULE_8__["J"])(t), Object(_chunks_languageUtils_js__WEBPACK_IMPORTED_MODULE_8__["p"])(t, 2, 3);
            var l = t[0],
                o = t[1];
            if (!(l instanceof _geometry_Point_js__WEBPACK_IMPORTED_MODULE_1__["default"])) throw new Error("Illegal Argument");
            if (!(o instanceof _geometry_Point_js__WEBPACK_IMPORTED_MODULE_1__["default"])) throw new Error("Illegal Argument");
            var u = new _geometry_Polyline_js__WEBPACK_IMPORTED_MODULE_5__["default"]({
              paths: [],
              spatialReference: l.spatialReference
            });
            return u.addPath([l, o]), L.geodesicLength(u, Object(_kernel_js__WEBPACK_IMPORTED_MODULE_10__["convertLinearUnitsToCode"])(Object(_chunks_languageUtils_js__WEBPACK_IMPORTED_MODULE_8__["C"])(t[2], -1)));
          });
        }, u.densify = function (e, t) {
          return b(e, t, function (e, t, o) {
            if (o = Object(_chunks_languageUtils_js__WEBPACK_IMPORTED_MODULE_8__["J"])(o), Object(_chunks_languageUtils_js__WEBPACK_IMPORTED_MODULE_8__["p"])(o, 2, 3), null === o[0]) return null;
            if (!(o[0] instanceof _geometry_Geometry_js__WEBPACK_IMPORTED_MODULE_0__["default"])) throw new Error("Illegal Argument");
            var u = Object(_chunks_languageUtils_js__WEBPACK_IMPORTED_MODULE_8__["c"])(o[1]);
            if (isNaN(u)) throw new Error("Illegal Argument");
            if (u <= 0) throw new Error("Illegal Argument");
            return o[0] instanceof _geometry_Polygon_js__WEBPACK_IMPORTED_MODULE_4__["default"] || o[0] instanceof _geometry_Polyline_js__WEBPACK_IMPORTED_MODULE_5__["default"] ? L.densify(o[0], u, Object(_kernel_js__WEBPACK_IMPORTED_MODULE_10__["convertLinearUnitsToCode"])(Object(_chunks_languageUtils_js__WEBPACK_IMPORTED_MODULE_8__["C"])(o[2], -1))) : o[0] instanceof _geometry_Extent_js__WEBPACK_IMPORTED_MODULE_2__["default"] ? L.densify(P(o[0]), u, Object(_kernel_js__WEBPACK_IMPORTED_MODULE_10__["convertLinearUnitsToCode"])(Object(_chunks_languageUtils_js__WEBPACK_IMPORTED_MODULE_8__["C"])(o[2], -1))) : o[0];
          });
        }, u.densifygeodetic = function (e, t) {
          return b(e, t, function (e, t, o) {
            if (o = Object(_chunks_languageUtils_js__WEBPACK_IMPORTED_MODULE_8__["J"])(o), Object(_chunks_languageUtils_js__WEBPACK_IMPORTED_MODULE_8__["p"])(o, 2, 3), null === o[0]) return null;
            if (!(o[0] instanceof _geometry_Geometry_js__WEBPACK_IMPORTED_MODULE_0__["default"])) throw new Error("Illegal Argument");
            var u = Object(_chunks_languageUtils_js__WEBPACK_IMPORTED_MODULE_8__["c"])(o[1]);
            if (isNaN(u)) throw new Error("Illegal Argument");
            if (u <= 0) throw new Error("Illegal Argument");
            return o[0] instanceof _geometry_Polygon_js__WEBPACK_IMPORTED_MODULE_4__["default"] || o[0] instanceof _geometry_Polyline_js__WEBPACK_IMPORTED_MODULE_5__["default"] ? L.geodesicDensify(o[0], u, Object(_kernel_js__WEBPACK_IMPORTED_MODULE_10__["convertLinearUnitsToCode"])(Object(_chunks_languageUtils_js__WEBPACK_IMPORTED_MODULE_8__["C"])(o[2], -1))) : o[0] instanceof _geometry_Extent_js__WEBPACK_IMPORTED_MODULE_2__["default"] ? L.geodesicDensify(P(o[0]), u, Object(_kernel_js__WEBPACK_IMPORTED_MODULE_10__["convertLinearUnitsToCode"])(Object(_chunks_languageUtils_js__WEBPACK_IMPORTED_MODULE_8__["C"])(o[2], -1))) : o[0];
          });
        }, u.generalize = function (e, r) {
          return b(e, r, function (e, r, t) {
            if (t = Object(_chunks_languageUtils_js__WEBPACK_IMPORTED_MODULE_8__["J"])(t), Object(_chunks_languageUtils_js__WEBPACK_IMPORTED_MODULE_8__["p"])(t, 2, 4), null === t[0]) return null;
            if (!(t[0] instanceof _geometry_Geometry_js__WEBPACK_IMPORTED_MODULE_0__["default"])) throw new Error("Illegal Argument");
            var l = Object(_chunks_languageUtils_js__WEBPACK_IMPORTED_MODULE_8__["c"])(t[1]);
            if (isNaN(l)) throw new Error("Illegal Argument");
            return L.generalize(t[0], l, Object(_chunks_languageUtils_js__WEBPACK_IMPORTED_MODULE_8__["d"])(Object(_chunks_languageUtils_js__WEBPACK_IMPORTED_MODULE_8__["C"])(t[2], !0)), Object(_kernel_js__WEBPACK_IMPORTED_MODULE_10__["convertLinearUnitsToCode"])(Object(_chunks_languageUtils_js__WEBPACK_IMPORTED_MODULE_8__["C"])(t[3], -1)));
          });
        }, u.buffer = function (e, r) {
          return b(e, r, function (e, r, t) {
            if (t = Object(_chunks_languageUtils_js__WEBPACK_IMPORTED_MODULE_8__["J"])(t), Object(_chunks_languageUtils_js__WEBPACK_IMPORTED_MODULE_8__["p"])(t, 2, 3), null === t[0]) return null;
            if (!(t[0] instanceof _geometry_Geometry_js__WEBPACK_IMPORTED_MODULE_0__["default"])) throw new Error("Illegal Argument");
            var l = Object(_chunks_languageUtils_js__WEBPACK_IMPORTED_MODULE_8__["c"])(t[1]);
            if (isNaN(l)) throw new Error("Illegal Argument");
            return 0 === l ? Object(_kernel_js__WEBPACK_IMPORTED_MODULE_10__["cloneGeometry"])(t[0]) : L.buffer(t[0], l, Object(_kernel_js__WEBPACK_IMPORTED_MODULE_10__["convertLinearUnitsToCode"])(Object(_chunks_languageUtils_js__WEBPACK_IMPORTED_MODULE_8__["C"])(t[2], -1)));
          });
        }, u.buffergeodetic = function (e, r) {
          return b(e, r, function (e, r, t) {
            if (t = Object(_chunks_languageUtils_js__WEBPACK_IMPORTED_MODULE_8__["J"])(t), Object(_chunks_languageUtils_js__WEBPACK_IMPORTED_MODULE_8__["p"])(t, 2, 3), null === t[0]) return null;
            if (!(t[0] instanceof _geometry_Geometry_js__WEBPACK_IMPORTED_MODULE_0__["default"])) throw new Error("Illegal Argument");
            var l = Object(_chunks_languageUtils_js__WEBPACK_IMPORTED_MODULE_8__["c"])(t[1]);
            if (isNaN(l)) throw new Error("Illegal Argument");
            return 0 === l ? Object(_kernel_js__WEBPACK_IMPORTED_MODULE_10__["cloneGeometry"])(t[0]) : L.geodesicBuffer(t[0], l, Object(_kernel_js__WEBPACK_IMPORTED_MODULE_10__["convertLinearUnitsToCode"])(Object(_chunks_languageUtils_js__WEBPACK_IMPORTED_MODULE_8__["C"])(t[2], -1)));
          });
        }, u.offset = function (n, e) {
          return b(n, e, function (n, e, r) {
            if (r = Object(_chunks_languageUtils_js__WEBPACK_IMPORTED_MODULE_8__["J"])(r), Object(_chunks_languageUtils_js__WEBPACK_IMPORTED_MODULE_8__["p"])(r, 2, 6), null === r[0]) return null;
            if (!(r[0] instanceof _geometry_Polygon_js__WEBPACK_IMPORTED_MODULE_4__["default"] || r[0] instanceof _geometry_Polyline_js__WEBPACK_IMPORTED_MODULE_5__["default"])) throw new Error("Illegal Argument");
            var t = Object(_chunks_languageUtils_js__WEBPACK_IMPORTED_MODULE_8__["c"])(r[1]);
            if (isNaN(t)) throw new Error("Illegal Argument");
            var o = Object(_chunks_languageUtils_js__WEBPACK_IMPORTED_MODULE_8__["c"])(Object(_chunks_languageUtils_js__WEBPACK_IMPORTED_MODULE_8__["C"])(r[4], 10));
            if (isNaN(o)) throw new Error("Illegal Argument");
            var u = Object(_chunks_languageUtils_js__WEBPACK_IMPORTED_MODULE_8__["c"])(Object(_chunks_languageUtils_js__WEBPACK_IMPORTED_MODULE_8__["C"])(r[5], 0));
            if (isNaN(u)) throw new Error("Illegal Argument");
            return L.offset(r[0], t, Object(_kernel_js__WEBPACK_IMPORTED_MODULE_10__["convertLinearUnitsToCode"])(Object(_chunks_languageUtils_js__WEBPACK_IMPORTED_MODULE_8__["C"])(r[2], -1)), Object(_chunks_languageUtils_js__WEBPACK_IMPORTED_MODULE_8__["e"])(Object(_chunks_languageUtils_js__WEBPACK_IMPORTED_MODULE_8__["C"])(r[3], "round")).toLowerCase(), o, u);
          });
        }, u.rotate = function (t, i) {
          return b(t, i, function (t, i, o) {
            o = Object(_chunks_languageUtils_js__WEBPACK_IMPORTED_MODULE_8__["J"])(o), Object(_chunks_languageUtils_js__WEBPACK_IMPORTED_MODULE_8__["p"])(o, 2, 3);
            var u = o[0];
            if (null === u) return null;
            if (!(u instanceof _geometry_Geometry_js__WEBPACK_IMPORTED_MODULE_0__["default"])) throw new Error("Illegal Argument");
            u instanceof _geometry_Extent_js__WEBPACK_IMPORTED_MODULE_2__["default"] && (u = _geometry_Polygon_js__WEBPACK_IMPORTED_MODULE_4__["default"].fromExtent(u));
            var a = Object(_chunks_languageUtils_js__WEBPACK_IMPORTED_MODULE_8__["c"])(o[1]);
            if (isNaN(a)) throw new Error("Illegal Argument");
            var c = Object(_chunks_languageUtils_js__WEBPACK_IMPORTED_MODULE_8__["C"])(o[2], null);
            if (null === c) return L.rotate(u, a);
            if (c instanceof _geometry_Point_js__WEBPACK_IMPORTED_MODULE_1__["default"]) return L.rotate(u, a, c);
            throw new Error("Illegal Argument");
          });
        }, u.centroid = function (o, u) {
          return b(o, u, function (u, a, c) {
            if (c = Object(_chunks_languageUtils_js__WEBPACK_IMPORTED_MODULE_8__["J"])(c), Object(_chunks_languageUtils_js__WEBPACK_IMPORTED_MODULE_8__["p"])(c, 1, 1), null === c[0]) return null;
            var h = c[0];
            if ((Object(_chunks_languageUtils_js__WEBPACK_IMPORTED_MODULE_8__["h"])(c[0]) || Object(_chunks_languageUtils_js__WEBPACK_IMPORTED_MODULE_8__["o"])(c[0])) && (h = Object(_chunks_languageUtils_js__WEBPACK_IMPORTED_MODULE_8__["O"])(c[0], o.spatialReference)), null === h) return null;
            if (!(h instanceof _geometry_Geometry_js__WEBPACK_IMPORTED_MODULE_0__["default"])) throw new Error("Illegal Argument");
            return h instanceof _geometry_Point_js__WEBPACK_IMPORTED_MODULE_1__["default"] ? Object(_chunks_languageUtils_js__WEBPACK_IMPORTED_MODULE_8__["r"])(Object(_kernel_js__WEBPACK_IMPORTED_MODULE_10__["cloneGeometry"])(c[0]), o.spatialReference) : h instanceof _geometry_Polygon_js__WEBPACK_IMPORTED_MODULE_4__["default"] ? h.centroid : h instanceof _geometry_Polyline_js__WEBPACK_IMPORTED_MODULE_5__["default"] ? Object(_centroid_js__WEBPACK_IMPORTED_MODULE_9__["centroidPolyline"])(h) : h instanceof _geometry_Multipoint_js__WEBPACK_IMPORTED_MODULE_3__["default"] ? Object(_centroid_js__WEBPACK_IMPORTED_MODULE_9__["centroidMultiPoint"])(h) : h instanceof _geometry_Extent_js__WEBPACK_IMPORTED_MODULE_2__["default"] ? h.center : null;
          });
        }, u.multiparttosinglepart = function (u, a) {
          return b(u, a, function (a, c, g) {
            g = Object(_chunks_languageUtils_js__WEBPACK_IMPORTED_MODULE_8__["J"])(g), Object(_chunks_languageUtils_js__WEBPACK_IMPORTED_MODULE_8__["p"])(g, 1, 1);
            var m = [];
            if (null === g[0]) return null;
            if (!(g[0] instanceof _geometry_Geometry_js__WEBPACK_IMPORTED_MODULE_0__["default"])) throw new Error("Illegal Argument");
            if (g[0] instanceof _geometry_Point_js__WEBPACK_IMPORTED_MODULE_1__["default"]) return [Object(_chunks_languageUtils_js__WEBPACK_IMPORTED_MODULE_8__["r"])(Object(_kernel_js__WEBPACK_IMPORTED_MODULE_10__["cloneGeometry"])(g[0]), u.spatialReference)];
            if (g[0] instanceof _geometry_Extent_js__WEBPACK_IMPORTED_MODULE_2__["default"]) return [Object(_chunks_languageUtils_js__WEBPACK_IMPORTED_MODULE_8__["r"])(Object(_kernel_js__WEBPACK_IMPORTED_MODULE_10__["cloneGeometry"])(g[0]), u.spatialReference)];
            var h = L.simplify(g[0]);

            if (h instanceof _geometry_Polygon_js__WEBPACK_IMPORTED_MODULE_4__["default"]) {
              var n = [],
                  e = [];

              for (var r = 0; r < h.rings.length; r++) {
                if (h.isClockwise(h.rings[r])) {
                  var _e17 = Object(_geometry_support_jsonUtils_js__WEBPACK_IMPORTED_MODULE_6__["fromJSON"])({
                    rings: [h.rings[r]],
                    hasZ: !0 === h.hasZ,
                    hasM: !0 === h.hasM,
                    spatialReference: h.spatialReference.toJSON()
                  });

                  n.push(_e17);
                } else e.push({
                  ring: h.rings[r],
                  pt: h.getPoint(r, 0)
                });
              }

              for (var _r13 = 0; _r13 < e.length; _r13++) {
                for (var t = 0; t < n.length; t++) {
                  if (n[t].contains(e[_r13].pt)) {
                    n[t].addRing(e[_r13].ring);
                    break;
                  }
                }
              }

              return n;
            }

            if (h instanceof _geometry_Polyline_js__WEBPACK_IMPORTED_MODULE_5__["default"]) {
              var _n10 = [];

              for (var _e18 = 0; _e18 < h.paths.length; _e18++) {
                var _r14 = Object(_geometry_support_jsonUtils_js__WEBPACK_IMPORTED_MODULE_6__["fromJSON"])({
                  paths: [h.paths[_e18]],
                  hasZ: !0 === h.hasZ,
                  hasM: !0 === h.hasM,
                  spatialReference: h.spatialReference.toJSON()
                });

                _n10.push(_r14);
              }

              return _n10;
            }

            if (g[0] instanceof _geometry_Multipoint_js__WEBPACK_IMPORTED_MODULE_3__["default"]) {
              var _n11 = Object(_chunks_languageUtils_js__WEBPACK_IMPORTED_MODULE_8__["r"])(Object(_kernel_js__WEBPACK_IMPORTED_MODULE_10__["cloneGeometry"])(g[0]), u.spatialReference);

              for (var _e19 = 0; _e19 < _n11.points.length; _e19++) {
                m.push(_n11.getPoint(_e19));
              }

              return m;
            }

            return null;
          });
        }, u.issimple = function (e, r) {
          return b(e, r, function (e, r, t) {
            if (t = Object(_chunks_languageUtils_js__WEBPACK_IMPORTED_MODULE_8__["J"])(t), Object(_chunks_languageUtils_js__WEBPACK_IMPORTED_MODULE_8__["p"])(t, 1, 1), null === t[0]) return !0;
            if (!(t[0] instanceof _geometry_Geometry_js__WEBPACK_IMPORTED_MODULE_0__["default"])) throw new Error("Illegal Argument");
            return L.isSimple(t[0]);
          });
        }, u.simplify = function (e, r) {
          return b(e, r, function (e, r, t) {
            if (t = Object(_chunks_languageUtils_js__WEBPACK_IMPORTED_MODULE_8__["J"])(t), Object(_chunks_languageUtils_js__WEBPACK_IMPORTED_MODULE_8__["p"])(t, 1, 1), null === t[0]) return null;
            if (!(t[0] instanceof _geometry_Geometry_js__WEBPACK_IMPORTED_MODULE_0__["default"])) throw new Error("Illegal Argument");
            return L.simplify(t[0]);
          });
        };
      }
      /***/

    },

    /***/
    "8NDJ":
    /*!****************************************************************************************!*\
      !*** ./node_modules/@arcgis/core/views/2d/layers/features/support/FeatureSetReader.js ***!
      \****************************************************************************************/

    /*! exports provided: FeatureSetReader */

    /***/
    function NDJ(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "FeatureSetReader", function () {
        return n;
      });
      /* harmony import */


      var _geometry_support_jsonUtils_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ../../../../../geometry/support/jsonUtils.js */
      "qatw");
      /* harmony import */


      var _geometry_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ../../../../../geometry.js */
      "4GrV");
      /* harmony import */


      var _layers_graphics_OptimizedGeometry_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ../../../../../layers/graphics/OptimizedGeometry.js */
      "gVKr");
      /* harmony import */


      var _layers_graphics_featureConversionUtils_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ../../../../../layers/graphics/featureConversionUtils.js */
      "ZlUD");
      /* harmony import */


      var _layers_graphics_centroid_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ../../../../../layers/graphics/centroid.js */
      "2X7Z");
      /*
      All material copyright ESRI, All Rights Reserved, unless otherwise specified.
      See https://js.arcgis.com/4.18/esri/copyright.txt for details.
      */


      var s = 0;

      var n = /*#__PURE__*/function () {
        function n(t) {
          _classCallCheck(this, n);

          this.type = "FeatureSetReader", this.seen = !1, this.instance = 0, this._tx = 0, this._ty = 0, this._xmin = -1, this._xmax = 0, this._ymin = 0, this._ymax = 0, this._joined = [], this.instance = t;
        }

        _createClass(n, [{
          key: "_hasFilter",
          get: function get() {
            return -1 !== this._xmin;
          }
        }, {
          key: "getQuantizationTransform",
          value: function getQuantizationTransform() {
            throw new Error("Unable to find transform for featureSet");
          }
        }, {
          key: "getStorage",
          value: function getStorage() {
            return this._storage;
          }
        }, {
          key: "getComputedNumeric",
          value: function getComputedNumeric(t) {
            return this.getComputedNumericAtIndex(0);
          }
        }, {
          key: "setComputedNumeric",
          value: function setComputedNumeric(t, e) {
            return this.setComputedNumericAtIndex(e, 0);
          }
        }, {
          key: "getComputedString",
          value: function getComputedString(t) {
            return this.getComputedStringAtIndex(0);
          }
        }, {
          key: "setComputedString",
          value: function setComputedString(t, e) {
            return this.setComputedStringAtIndex(0, e);
          }
        }, {
          key: "getComputedNumericAtIndex",
          value: function getComputedNumericAtIndex(t) {
            return this._storage.getComputedNumericAtIndex(this.getDisplayId(), t);
          }
        }, {
          key: "setComputedNumericAtIndex",
          value: function setComputedNumericAtIndex(t, e) {
            this._storage.setComputedNumericAtIndex(this.getDisplayId(), t, e);
          }
        }, {
          key: "getComputedStringAtIndex",
          value: function getComputedStringAtIndex(t) {
            return this._storage.getComputedStringAtIndex(this.getDisplayId(), t);
          }
        }, {
          key: "setComputedStringAtIndex",
          value: function setComputedStringAtIndex(t, e) {
            return this._storage.setComputedStringAtIndex(this.getDisplayId(), t, e);
          }
        }, {
          key: "transform",
          value: function transform(t, e) {
            var r = this.copy();
            return r._tx = t, r._ty = e, r;
          }
        }, {
          key: "extent",
          value: function extent(t, e, r, i) {
            var s = this.copy();
            return s._xmin = t, s._xmax = r, s._ymin = e, s._ymax = i, s;
          }
        }, {
          key: "hasFilter",
          value: function hasFilter() {
            return this._hasFilter;
          }
        }, {
          key: "readAttribute",
          value: function readAttribute(t) {
            var e = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : !1;

            var r = this._readAttribute(t, e);

            if (void 0 !== r) return r;

            var _iterator2 = _createForOfIteratorHelper(this._joined),
                _step2;

            try {
              for (_iterator2.s(); !(_step2 = _iterator2.n()).done;) {
                var _r15 = _step2.value;

                _r15.setIndex(this.getIndex());

                var i = _r15._readAttribute(t, e);

                if (void 0 !== i) return i;
              }
            } catch (err) {
              _iterator2.e(err);
            } finally {
              _iterator2.f();
            }
          }
        }, {
          key: "readAttributes",
          value: function readAttributes() {
            return this._readAttributes();
          }
        }, {
          key: "joinAttributes",
          value: function joinAttributes(t) {
            this._joined.push(t);
          }
        }, {
          key: "readArcadeFeature",
          value: function readArcadeFeature() {
            return this;
          }
        }, {
          key: "geometry",
          value: function geometry() {
            var e = this.readHydratedGeometry(),
                i = Object(_layers_graphics_featureConversionUtils_js__WEBPACK_IMPORTED_MODULE_3__["convertToGeometry"])(e, this.geometryType, this.hasZ, this.hasM),
                s = Object(_geometry_support_jsonUtils_js__WEBPACK_IMPORTED_MODULE_0__["fromJSON"])(i);
            return s.spatialReference = this._arcadeSpatialReference, s;
          }
        }, {
          key: "field",
          value: function field(t) {
            return this.readAttribute(t, !0);
          }
        }, {
          key: "hasField",
          value: function hasField(t) {
            return !0;
          }
        }, {
          key: "setField",
          value: function setField(t, e) {}
        }, {
          key: "keys",
          value: function keys() {
            return [];
          }
        }, {
          key: "castToText",
          value: function castToText() {
            return "";
          }
        }, {
          key: "_computeCentroid",
          value: function _computeCentroid() {
            if ("esriGeometryPolygon" !== this.geometryType) return null;
            var t = this.readUnquantizedGeometry();
            if (!t || t.hasIndeterminateRingOrder) return null;
            var r = this.getQuantizationTransform();
            return Object(_layers_graphics_centroid_js__WEBPACK_IMPORTED_MODULE_4__["getCentroidOptimizedGeometry"])(new _layers_graphics_OptimizedGeometry_js__WEBPACK_IMPORTED_MODULE_2__["default"](), t, this.hasM, this.hasZ, r);
          }
        }, {
          key: "copyInto",
          value: function copyInto(t) {
            t.seen = this.seen, t._storage = this._storage, t._arcadeSpatialReference = this._arcadeSpatialReference, t._joined = this._joined, t._tx = this._tx, t._ty = this._ty, t._xmin = this._xmin, t._xmax = this._xmax, t._ymin = this._ymin, t._ymax = this._ymax;
          }
        }], [{
          key: "createInstance",
          value: function createInstance() {
            return s++, s = s > 65535 ? 0 : s, s;
          }
        }]);

        return n;
      }();
      /***/

    },

    /***/
    "ACnk":
    /*!*************************************************************!*\
      !*** ./node_modules/@arcgis/core/arcade/functions/array.js ***!
      \*************************************************************/

    /*! exports provided: registerFunctions */

    /***/
    function ACnk(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "registerFunctions", function () {
        return h;
      });
      /* harmony import */


      var _chunks_languageUtils_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ../../chunks/languageUtils.js */
      "idrm");
      /*
      All material copyright ESRI, All Rights Reserved, unless otherwise specified.
      See https://js.arcgis.com/4.18/esri/copyright.txt for details.
      */


      function h(h, l) {
        h.array = function (o, i) {
          return l(o, i, function (o, i, a) {
            Object(_chunks_languageUtils_js__WEBPACK_IMPORTED_MODULE_0__["p"])(a, 1, 2);
            var f = Object(_chunks_languageUtils_js__WEBPACK_IMPORTED_MODULE_0__["c"])(a[0]);
            if (isNaN(f) || !1 === Object(_chunks_languageUtils_js__WEBPACK_IMPORTED_MODULE_0__["B"])(f)) throw new Error("Invalid Parameter");
            var h = Object(_chunks_languageUtils_js__WEBPACK_IMPORTED_MODULE_0__["C"])(a[1], null),
                l = new Array(f);
            return l.fill(h), l;
          });
        }, h.front = function (n, t) {
          return l(n, t, function (n, t, e) {
            if (Object(_chunks_languageUtils_js__WEBPACK_IMPORTED_MODULE_0__["p"])(e, 1, 1), Object(_chunks_languageUtils_js__WEBPACK_IMPORTED_MODULE_0__["o"])(e[0])) {
              if (e[0].length() <= 0) throw new Error("Array is empty");
              return e[0].get(0);
            }

            if (Object(_chunks_languageUtils_js__WEBPACK_IMPORTED_MODULE_0__["h"])(e[0])) {
              if (e[0].length <= 0) throw new Error("Array is empty");
              return e[0][0];
            }

            throw new Error("Invalid Parameter");
          });
        }, h.back = function (n, t) {
          return l(n, t, function (n, t, e) {
            if (Object(_chunks_languageUtils_js__WEBPACK_IMPORTED_MODULE_0__["p"])(e, 1, 1), Object(_chunks_languageUtils_js__WEBPACK_IMPORTED_MODULE_0__["o"])(e[0])) {
              if (e[0].length() <= 0) throw new Error("Array is empty");
              return e[0].get(e[0].length() - 1);
            }

            if (Object(_chunks_languageUtils_js__WEBPACK_IMPORTED_MODULE_0__["h"])(e[0])) {
              if (e[0].length <= 0) throw new Error("Array is empty");
              return e[0][e[0].length - 1];
            }

            throw new Error("Invalid Parameter");
          });
        }, h.push = function (n, t) {
          return l(n, t, function (n, t, e) {
            if (Object(_chunks_languageUtils_js__WEBPACK_IMPORTED_MODULE_0__["p"])(e, 1, 2), Object(_chunks_languageUtils_js__WEBPACK_IMPORTED_MODULE_0__["h"])(e[0])) return e[0][e[0].length] = e[1], e[0].length;
            throw new Error("Invalid Parameter");
          });
        }, h.pop = function (n, t) {
          return l(n, t, function (n, t, e) {
            if (Object(_chunks_languageUtils_js__WEBPACK_IMPORTED_MODULE_0__["p"])(e, 1, 1), Object(_chunks_languageUtils_js__WEBPACK_IMPORTED_MODULE_0__["h"])(e[0])) {
              if (e[0].length <= 0) throw new Error("Array is empty");
              var r = e[0][e[0].length - 1];
              return e[0].length = e[0].length - 1, r;
            }

            throw new Error("Invalid Parameter");
          });
        }, h.erase = function (e, o) {
          return l(e, o, function (e, o, f) {
            if (Object(_chunks_languageUtils_js__WEBPACK_IMPORTED_MODULE_0__["p"])(f, 2, 2), Object(_chunks_languageUtils_js__WEBPACK_IMPORTED_MODULE_0__["h"])(f[0])) {
              var r = Object(_chunks_languageUtils_js__WEBPACK_IMPORTED_MODULE_0__["c"])(f[1]);
              if (isNaN(r) || !1 === Object(_chunks_languageUtils_js__WEBPACK_IMPORTED_MODULE_0__["B"])(r)) throw new Error("Invalid Parameter");
              var _e20 = f[0];
              if (_e20.length <= 0) throw new Error("Array is empty");
              if (r < 0 && (r = _e20.length + r), r < 0) throw new Error("Element not found");
              if (r >= _e20.length) throw new Error("Index is greater than array");
              return _e20.splice(r, 1), _chunks_languageUtils_js__WEBPACK_IMPORTED_MODULE_0__["v"];
            }

            throw new Error("Invalid Parameter");
          });
        }, h.insert = function (e, o) {
          return l(e, o, function (e, o, f) {
            if (Object(_chunks_languageUtils_js__WEBPACK_IMPORTED_MODULE_0__["p"])(f, 3, 3), Object(_chunks_languageUtils_js__WEBPACK_IMPORTED_MODULE_0__["h"])(f[0])) {
              var r = Object(_chunks_languageUtils_js__WEBPACK_IMPORTED_MODULE_0__["c"])(f[1]);
              if (isNaN(r) || !1 === Object(_chunks_languageUtils_js__WEBPACK_IMPORTED_MODULE_0__["B"])(r)) throw new Error("Invalid Parameter");
              var _e21 = f[2],
                  _o6 = f[0];
              if (r > _o6.length) throw new Error("Index is greater than array");
              if (r < 0 && r < -1 * _o6.length) throw new Error("Index is greater than array");
              return r === _o6.length ? (_o6[r] = _e21, _chunks_languageUtils_js__WEBPACK_IMPORTED_MODULE_0__["v"]) : (_o6.splice(r, 0, _e21), _chunks_languageUtils_js__WEBPACK_IMPORTED_MODULE_0__["v"]);
            }

            throw new Error("Invalid Parameter");
          });
        }, h.resize = function (o, f) {
          return l(o, f, function (o, f, h) {
            if (Object(_chunks_languageUtils_js__WEBPACK_IMPORTED_MODULE_0__["p"])(h, 2, 3), Object(_chunks_languageUtils_js__WEBPACK_IMPORTED_MODULE_0__["h"])(h[0])) {
              var r = Object(_chunks_languageUtils_js__WEBPACK_IMPORTED_MODULE_0__["c"])(h[1]);
              if (isNaN(r) || !1 === Object(_chunks_languageUtils_js__WEBPACK_IMPORTED_MODULE_0__["B"])(r)) throw new Error("Invalid Parameter");
              if (r < 0) throw new Error("Size cannot be negative");

              var _o7 = Object(_chunks_languageUtils_js__WEBPACK_IMPORTED_MODULE_0__["C"])(h[2], null),
                  i = h[0];

              if (i.length >= r) return i.length = r, _chunks_languageUtils_js__WEBPACK_IMPORTED_MODULE_0__["v"];
              var _f2 = i.length;
              i.length = r;

              for (var _r16 = _f2; _r16 < i.length; _r16++) {
                i[_r16] = _o7;
              }

              return _chunks_languageUtils_js__WEBPACK_IMPORTED_MODULE_0__["v"];
            }

            throw new Error("Invalid Parameter");
          });
        }, h.includes = function (n, t) {
          return l(n, t, function (n, t, e) {
            if (Object(_chunks_languageUtils_js__WEBPACK_IMPORTED_MODULE_0__["p"])(e, 2, 2), Object(_chunks_languageUtils_js__WEBPACK_IMPORTED_MODULE_0__["h"])(e[0])) {
              var r = e[1];
              return e[0].findIndex(function (n) {
                return Object(_chunks_languageUtils_js__WEBPACK_IMPORTED_MODULE_0__["n"])(n, r);
              }) > -1;
            }

            if (Object(_chunks_languageUtils_js__WEBPACK_IMPORTED_MODULE_0__["o"])(e[0])) {
              var _r17 = e[1];
              return e[0].toArray().findIndex(function (n) {
                return Object(_chunks_languageUtils_js__WEBPACK_IMPORTED_MODULE_0__["n"])(n, _r17);
              }) > -1;
            }

            throw new Error("Invalid Parameter");
          });
        }, h.slice = function (a, f) {
          return l(a, f, function (a, f, h) {
            if (Object(_chunks_languageUtils_js__WEBPACK_IMPORTED_MODULE_0__["p"])(h, 1, 3), Object(_chunks_languageUtils_js__WEBPACK_IMPORTED_MODULE_0__["h"])(h[0])) {
              var r = Object(_chunks_languageUtils_js__WEBPACK_IMPORTED_MODULE_0__["c"])(Object(_chunks_languageUtils_js__WEBPACK_IMPORTED_MODULE_0__["C"])(h[1], 0)),
                  o = Object(_chunks_languageUtils_js__WEBPACK_IMPORTED_MODULE_0__["c"])(Object(_chunks_languageUtils_js__WEBPACK_IMPORTED_MODULE_0__["C"])(h[2], h[0].length));
              if (isNaN(r) || !1 === Object(_chunks_languageUtils_js__WEBPACK_IMPORTED_MODULE_0__["B"])(r)) throw new Error("Invalid Parameter");
              if (isNaN(o) || !1 === Object(_chunks_languageUtils_js__WEBPACK_IMPORTED_MODULE_0__["B"])(o)) throw new Error("Invalid Parameter");
              return h[0].slice(r, o);
            }

            if (Object(_chunks_languageUtils_js__WEBPACK_IMPORTED_MODULE_0__["o"])(h[0])) {
              var _r18 = h[0],
                  _o8 = Object(_chunks_languageUtils_js__WEBPACK_IMPORTED_MODULE_0__["c"])(Object(_chunks_languageUtils_js__WEBPACK_IMPORTED_MODULE_0__["C"])(h[1], 0)),
                  i = Object(_chunks_languageUtils_js__WEBPACK_IMPORTED_MODULE_0__["c"])(Object(_chunks_languageUtils_js__WEBPACK_IMPORTED_MODULE_0__["C"])(h[2], _r18.length()));

              if (isNaN(_o8) || !1 === Object(_chunks_languageUtils_js__WEBPACK_IMPORTED_MODULE_0__["B"])(_o8)) throw new Error("Invalid Parameter");
              if (isNaN(i) || !1 === Object(_chunks_languageUtils_js__WEBPACK_IMPORTED_MODULE_0__["B"])(i)) throw new Error("Invalid Parameter");
              return _r18.toArray().slice(_o8, i);
            }

            throw new Error("Invalid Parameter");
          });
        }, h.splice = function (r, n) {
          return l(r, n, function (r, n, t) {
            var e = [];

            for (var _r19 = 0; _r19 < t.length; _r19++) {
              Object(_chunks_languageUtils_js__WEBPACK_IMPORTED_MODULE_0__["h"])(t[_r19]) ? e.push.apply(e, _toConsumableArray(t[_r19])) : Object(_chunks_languageUtils_js__WEBPACK_IMPORTED_MODULE_0__["o"])(t[_r19]) ? e.push.apply(e, _toConsumableArray(t[_r19].toArray())) : e.push(t[_r19]);
            }

            return e;
          });
        };
      }
      /***/

    },

    /***/
    "Bb2f":
    /*!***********************************************************!*\
      !*** ./node_modules/@arcgis/core/arcade/arcadeRuntime.js ***!
      \***********************************************************/

    /*! exports provided: executeScript, extend, extractFieldLiterals, findFunctionCalls, functionHelper, referencesFunction, referencesMember, validateScript */

    /***/
    function Bb2f(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "executeScript", function () {
        return Ee;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "extend", function () {
        return me;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "extractFieldLiterals", function () {
        return de;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "findFunctionCalls", function () {
        return ye;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "functionHelper", function () {
        return he;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "referencesFunction", function () {
        return Ie;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "referencesMember", function () {
        return Ne;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "validateScript", function () {
        return ge;
      });
      /* harmony import */


      var _geometry_SpatialReference_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ../geometry/SpatialReference.js */
      "WZb1");
      /* harmony import */


      var _geometry_Geometry_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ../geometry/Geometry.js */
      "N2DF");
      /* harmony import */


      var _geometry_Point_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ../geometry/Point.js */
      "SuVq");
      /* harmony import */


      var _geometry_Extent_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ../geometry/Extent.js */
      "OvF4");
      /* harmony import */


      var _geometry_Multipoint_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ../geometry/Multipoint.js */
      "V9wi");
      /* harmony import */


      var _geometry_Polygon_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ../geometry/Polygon.js */
      "Ehki");
      /* harmony import */


      var _geometry_Polyline_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ../geometry/Polyline.js */
      "UhwK");
      /* harmony import */


      var _FunctionWrapper_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! ./FunctionWrapper.js */
      "pqxT");
      /* harmony import */


      var _ImmutablePointArray_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! ./ImmutablePointArray.js */
      "Q2u5");
      /* harmony import */


      var _ImmutablePathArray_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! ./ImmutablePathArray.js */
      "kJip");
      /* harmony import */


      var _chunks_languageUtils_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
      /*! ../chunks/languageUtils.js */
      "idrm");
      /* harmony import */


      var _Dictionary_js__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
      /*! ./Dictionary.js */
      "D5C5");
      /* harmony import */


      var _ArcadePortal_js__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
      /*! ./ArcadePortal.js */
      "Xfxc");
      /* harmony import */


      var _Attachment_js__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
      /*! ./Attachment.js */
      "db86");
      /* harmony import */


      var _Feature_js__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(
      /*! ./Feature.js */
      "Xrjs");
      /* harmony import */


      var _treeAnalysis_js__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(
      /*! ./treeAnalysis.js */
      "k8am");
      /* harmony import */


      var _functions_array_js__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(
      /*! ./functions/array.js */
      "ACnk");
      /* harmony import */


      var _functions_date_js__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(
      /*! ./functions/date.js */
      "ve0I");
      /* harmony import */


      var _functions_geometry_js__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(
      /*! ./functions/geometry.js */
      "KvhC");
      /* harmony import */


      var _functions_geomsync_js__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(
      /*! ./functions/geomsync.js */
      "4PGM");
      /* harmony import */


      var _functions_maths_js__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(
      /*! ./functions/maths.js */
      "yBFI");
      /* harmony import */


      var _functions_stats_js__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(
      /*! ./functions/stats.js */
      "IqHt");
      /* harmony import */


      var _functions_string_js__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(
      /*! ./functions/string.js */
      "RrDw");
      /*
      All material copyright ESRI, All Rights Reserved, unless otherwise specified.
      See https://js.arcgis.com/4.18/esri/copyright.txt for details.
      */


      function X(e, r) {
        var t = [];

        for (var n = 0; n < r.arguments.length; n++) {
          t.push(Q(e, r.arguments[n]));
        }

        return t;
      }

      function J(e, r, t) {
        try {
          return t(e, r, X(e, r));
        } catch (e) {
          throw e;
        }
      }

      function Q(e, t) {
        try {
          switch (t.type) {
            case "EmptyStatement":
              return _chunks_languageUtils_js__WEBPACK_IMPORTED_MODULE_10__["v"];

            case "VariableDeclarator":
              return function (e, r) {
                var t = null === r.init ? null : Q(e, r.init);
                t === _chunks_languageUtils_js__WEBPACK_IMPORTED_MODULE_10__["v"] && (t = null);
                if ("Identifier" !== r.id.type) throw new Error("Can only assign a regular variable");
                var n = r.id.name.toLowerCase();
                null !== e.localScope ? e.localScope[n] = {
                  value: t,
                  valueset: !0,
                  node: r.init
                } : e.globalScope[n] = {
                  value: t,
                  valueset: !0,
                  node: r.init
                };
                return _chunks_languageUtils_js__WEBPACK_IMPORTED_MODULE_10__["v"];
              }(e, t);

            case "VariableDeclaration":
              return function (e, r) {
                for (var _t9 = 0; _t9 < r.declarations.length; _t9++) {
                  Q(e, r.declarations[_t9]);
                }

                return _chunks_languageUtils_js__WEBPACK_IMPORTED_MODULE_10__["v"];
              }(e, t);

            case "BlockStatement":
              return function (e, r) {
                var t = _chunks_languageUtils_js__WEBPACK_IMPORTED_MODULE_10__["v"];

                for (var n = 0; n < r.body.length; n++) {
                  if (t = Q(e, r.body[n]), t instanceof _chunks_languageUtils_js__WEBPACK_IMPORTED_MODULE_10__["R"] || t === _chunks_languageUtils_js__WEBPACK_IMPORTED_MODULE_10__["x"] || t === _chunks_languageUtils_js__WEBPACK_IMPORTED_MODULE_10__["y"]) return t;
                }

                return t;
              }(e, t);

            case "FunctionDeclaration":
              return function (e, r) {
                var t = r.id.name.toLowerCase();
                return e.globalScope[t] = {
                  valueset: !0,
                  node: null,
                  value: new _FunctionWrapper_js__WEBPACK_IMPORTED_MODULE_7__["default"](r, e)
                }, _chunks_languageUtils_js__WEBPACK_IMPORTED_MODULE_10__["v"];
              }(e, t);

            case "ReturnStatement":
              return function (e, r) {
                if (null === r.argument) return new _chunks_languageUtils_js__WEBPACK_IMPORTED_MODULE_10__["R"](_chunks_languageUtils_js__WEBPACK_IMPORTED_MODULE_10__["v"]);
                var t = Q(e, r.argument);
                return new _chunks_languageUtils_js__WEBPACK_IMPORTED_MODULE_10__["R"](t);
              }(e, t);

            case "IfStatement":
              return function (e, r) {
                if ("AssignmentExpression" === r.test.type || "UpdateExpression" === r.test.type) throw new Error(Object(_treeAnalysis_js__WEBPACK_IMPORTED_MODULE_15__["nodeErrorMessage"])(r.test, "RUNTIME", "CANNOT_USE_ASSIGNMENT_IN_CONDITION"));
                var t = Q(e, r.test);
                if (!0 === t) return Q(e, r.consequent);
                if (!1 === t) return null !== r.alternate ? Q(e, r.alternate) : _chunks_languageUtils_js__WEBPACK_IMPORTED_MODULE_10__["v"];
                throw new Error(Object(_treeAnalysis_js__WEBPACK_IMPORTED_MODULE_15__["nodeErrorMessage"])(r, "RUNTIME", "CANNOT_USE_NONBOOLEAN_IN_CONDITION"));
              }(e, t);

            case "ExpressionStatement":
              return function (e, r) {
                if ("AssignmentExpression" === r.expression.type || "UpdateExpression" === r.expression.type) return Q(e, r.expression);

                if ("CallExpression" === r.expression.type) {
                  var _t10 = Q(e, r.expression);

                  return _t10 === _chunks_languageUtils_js__WEBPACK_IMPORTED_MODULE_10__["v"] ? _chunks_languageUtils_js__WEBPACK_IMPORTED_MODULE_10__["v"] : new _chunks_languageUtils_js__WEBPACK_IMPORTED_MODULE_10__["I"](_t10);
                }

                {
                  var _t11 = Q(e, r.expression);

                  return _t11 === _chunks_languageUtils_js__WEBPACK_IMPORTED_MODULE_10__["v"] ? _chunks_languageUtils_js__WEBPACK_IMPORTED_MODULE_10__["v"] : new _chunks_languageUtils_js__WEBPACK_IMPORTED_MODULE_10__["I"](_t11);
                }
              }(e, t);

            case "AssignmentExpression":
              return function (e, r) {
                var t = Q(e, r.right);
                var n = null,
                    o = "";

                if ("MemberExpression" === r.left.type) {
                  if (n = Q(e, r.left.object), !0 === r.left.computed ? o = Q(e, r.left.property) : "Identifier" === r.left.property.type && (o = r.left.property.name), Object(_chunks_languageUtils_js__WEBPACK_IMPORTED_MODULE_10__["h"])(n)) {
                    if (!Object(_chunks_languageUtils_js__WEBPACK_IMPORTED_MODULE_10__["a"])(o)) throw new Error("Invalid Parameter");
                    if (o < 0 && (o = n.length + o), o < 0 || o > n.length) throw new Error("Assignment outside of array bounds");

                    if (o === n.length) {
                      if ("=" !== r.operator) throw new Error("Invalid Parameter");
                      n[o] = ee(t, r.operator, n[o], r);
                    } else n[o] = ee(t, r.operator, n[o], r);
                  } else if (n instanceof _Dictionary_js__WEBPACK_IMPORTED_MODULE_11__["default"]) {
                    if (!1 === Object(_chunks_languageUtils_js__WEBPACK_IMPORTED_MODULE_10__["b"])(o)) throw new Error("Dictionary accessor must be a string");
                    if (!0 === n.hasField(o)) n.setField(o, ee(t, r.operator, n.field(o), r));else {
                      if ("=" !== r.operator) throw new Error("Invalid Parameter");
                      n.setField(o, ee(t, r.operator, null, r));
                    }
                  } else {
                    if (!(n instanceof _Feature_js__WEBPACK_IMPORTED_MODULE_14__["default"])) throw Object(_chunks_languageUtils_js__WEBPACK_IMPORTED_MODULE_10__["o"])(n) ? new Error("Array is Immutable") : new Error("Invalid Parameter");
                    if (!1 === Object(_chunks_languageUtils_js__WEBPACK_IMPORTED_MODULE_10__["b"])(o)) throw new Error("Feature accessor must be a string");
                    if (!0 === n.hasField(o)) n.setField(o, ee(t, r.operator, n.field(o), r));else {
                      if ("=" !== r.operator) throw new Error("Invalid Parameter");
                      n.setField(o, ee(t, r.operator, null, r));
                    }
                  }

                  return _chunks_languageUtils_js__WEBPACK_IMPORTED_MODULE_10__["v"];
                }

                if (n = r.left.name.toLowerCase(), null !== e.localScope && void 0 !== e.localScope[n]) return e.localScope[n] = {
                  value: ee(t, r.operator, e.localScope[n].value, r),
                  valueset: !0,
                  node: r.right
                }, _chunks_languageUtils_js__WEBPACK_IMPORTED_MODULE_10__["v"];
                if (void 0 !== e.globalScope[n]) return e.globalScope[n] = {
                  value: ee(t, r.operator, e.globalScope[n].value, r),
                  valueset: !0,
                  node: r.right
                }, _chunks_languageUtils_js__WEBPACK_IMPORTED_MODULE_10__["v"];
                throw new Error("Variable not recognised");
              }(e, t);

            case "UpdateExpression":
              return function (e, r) {
                var t,
                    n = null,
                    o = "";

                if ("MemberExpression" === r.argument.type) {
                  if (n = Q(e, r.argument.object), !0 === r.argument.computed ? o = Q(e, r.argument.property) : "Identifier" === r.argument.property.type && (o = r.argument.property.name), Object(_chunks_languageUtils_js__WEBPACK_IMPORTED_MODULE_10__["h"])(n)) {
                    if (!Object(_chunks_languageUtils_js__WEBPACK_IMPORTED_MODULE_10__["a"])(o)) throw new Error("Invalid Parameter");
                    if (o < 0 && (o = n.length + o), o < 0 || o >= n.length) throw new Error("Assignment outside of array bounds");
                    t = Object(_chunks_languageUtils_js__WEBPACK_IMPORTED_MODULE_10__["c"])(n[o]), n[o] = "++" === r.operator ? t + 1 : t - 1;
                  } else if (n instanceof _Dictionary_js__WEBPACK_IMPORTED_MODULE_11__["default"]) {
                    if (!1 === Object(_chunks_languageUtils_js__WEBPACK_IMPORTED_MODULE_10__["b"])(o)) throw new Error("Dictionary accessor must be a string");
                    if (!0 !== n.hasField(o)) throw new Error("Invalid Parameter");
                    t = Object(_chunks_languageUtils_js__WEBPACK_IMPORTED_MODULE_10__["c"])(n.field(o)), n.setField(o, "++" === r.operator ? t + 1 : t - 1);
                  } else {
                    if (!(n instanceof _Feature_js__WEBPACK_IMPORTED_MODULE_14__["default"])) throw Object(_chunks_languageUtils_js__WEBPACK_IMPORTED_MODULE_10__["o"])(n) ? new Error("Array is Immutable") : new Error("Invalid Parameter");
                    if (!1 === Object(_chunks_languageUtils_js__WEBPACK_IMPORTED_MODULE_10__["b"])(o)) throw new Error("Feature accessor must be a string");
                    if (!0 !== n.hasField(o)) throw new Error("Invalid Parameter");
                    t = Object(_chunks_languageUtils_js__WEBPACK_IMPORTED_MODULE_10__["c"])(n.field(o)), n.setField(o, "++" === r.operator ? t + 1 : t - 1);
                  }

                  return !1 === r.prefix ? t : "++" === r.operator ? t + 1 : t - 1;
                }

                if (n = "Identifier" === r.argument.type ? r.argument.name.toLowerCase() : "", !n) throw new Error("Invalid identifier");
                if (null !== e.localScope && void 0 !== e.localScope[n]) return t = Object(_chunks_languageUtils_js__WEBPACK_IMPORTED_MODULE_10__["c"])(e.localScope[n].value), e.localScope[n] = {
                  value: "++" === r.operator ? t + 1 : t - 1,
                  valueset: !0,
                  node: r
                }, !1 === r.prefix ? t : "++" === r.operator ? t + 1 : t - 1;
                if (void 0 !== e.globalScope[n]) return t = Object(_chunks_languageUtils_js__WEBPACK_IMPORTED_MODULE_10__["c"])(e.globalScope[n].value), e.globalScope[n] = {
                  value: "++" === r.operator ? t + 1 : t - 1,
                  valueset: !0,
                  node: r
                }, !1 === r.prefix ? t : "++" === r.operator ? t + 1 : t - 1;
                throw new Error("Variable not recognised");
              }(e, t);

            case "BreakStatement":
              return _chunks_languageUtils_js__WEBPACK_IMPORTED_MODULE_10__["x"];

            case "ContinueStatement":
              return _chunks_languageUtils_js__WEBPACK_IMPORTED_MODULE_10__["y"];

            case "TemplateElement":
              return function (e, r) {
                return r.value ? r.value.cooked : "";
              }(0, t);

            case "TemplateLiteral":
              return function (e, r) {
                var t = "",
                    n = 0;

                var _iterator3 = _createForOfIteratorHelper(r.quasis),
                    _step3;

                try {
                  for (_iterator3.s(); !(_step3 = _iterator3.n()).done;) {
                    var o = _step3.value;

                    if (t += o.value ? o.value.cooked : "", !1 === o.tail) {
                      t += r.expressions[n] ? Object(_chunks_languageUtils_js__WEBPACK_IMPORTED_MODULE_10__["e"])(Q(e, r.expressions[n])) : "", n++;
                    }
                  }
                } catch (err) {
                  _iterator3.e(err);
                } finally {
                  _iterator3.f();
                }

                return t;
              }(e, t);

            case "ForStatement":
              return function (e, r) {
                null !== r.init && Q(e, r.init);
                var t = {
                  testResult: !0,
                  lastAction: _chunks_languageUtils_js__WEBPACK_IMPORTED_MODULE_10__["v"]
                };

                do {
                  $(e, r, t);
                } while (!0 === t.testResult);

                if (t.lastAction instanceof _chunks_languageUtils_js__WEBPACK_IMPORTED_MODULE_10__["R"]) return t.lastAction;
                return _chunks_languageUtils_js__WEBPACK_IMPORTED_MODULE_10__["v"];
              }(e, t);

            case "ForInStatement":
              return function (e, r) {
                var t = Q(e, r.right);
                "VariableDeclaration" === r.left.type && Q(e, r.left);
                var n = null,
                    o = "";

                if ("VariableDeclaration" === r.left.type) {
                  var _e22 = r.left.declarations[0].id;
                  "Identifier" === _e22.type && (o = _e22.name);
                } else "Identifier" === r.left.type && (o = r.left.name);

                if (!o) throw new Error(Object(_treeAnalysis_js__WEBPACK_IMPORTED_MODULE_15__["nodeErrorMessage"])(r, "RUNTIME", "INVALIDVARIABLE"));
                o = o.toLowerCase(), null !== e.localScope && void 0 !== e.localScope[o] && (n = e.localScope[o]);
                null === n && void 0 !== e.globalScope[o] && (n = e.globalScope[o]);
                if (null === n) throw new Error(Object(_treeAnalysis_js__WEBPACK_IMPORTED_MODULE_15__["nodeErrorMessage"])(r, "RUNTIME", "VARIABLENOTDECLARED"));

                if (Object(_chunks_languageUtils_js__WEBPACK_IMPORTED_MODULE_10__["h"])(t) || Object(_chunks_languageUtils_js__WEBPACK_IMPORTED_MODULE_10__["b"])(t)) {
                  var _o9 = t.length;

                  for (var _t12 = 0; _t12 < _o9; _t12++) {
                    n.value = _t12;

                    var _o10 = Q(e, r.body);

                    if (_o10 === _chunks_languageUtils_js__WEBPACK_IMPORTED_MODULE_10__["x"]) break;
                    if (_o10 instanceof _chunks_languageUtils_js__WEBPACK_IMPORTED_MODULE_10__["R"]) return _o10;
                  }

                  return _chunks_languageUtils_js__WEBPACK_IMPORTED_MODULE_10__["v"];
                }

                if (Object(_chunks_languageUtils_js__WEBPACK_IMPORTED_MODULE_10__["o"])(t)) {
                  for (var _o11 = 0; _o11 < t.length(); _o11++) {
                    n.value = _o11;

                    var _t13 = Q(e, r.body);

                    if (_t13 === _chunks_languageUtils_js__WEBPACK_IMPORTED_MODULE_10__["x"]) break;
                    if (_t13 instanceof _chunks_languageUtils_js__WEBPACK_IMPORTED_MODULE_10__["R"]) return _t13;
                  }

                  return _chunks_languageUtils_js__WEBPACK_IMPORTED_MODULE_10__["v"];
                }

                if (!(t instanceof _Dictionary_js__WEBPACK_IMPORTED_MODULE_11__["default"] || t instanceof _Feature_js__WEBPACK_IMPORTED_MODULE_14__["default"])) return _chunks_languageUtils_js__WEBPACK_IMPORTED_MODULE_10__["v"];
                {
                  var _o12 = t.keys();

                  for (var _t14 = 0; _t14 < _o12.length; _t14++) {
                    n.value = _o12[_t14];
                    var a = Q(e, r.body);
                    if (a === _chunks_languageUtils_js__WEBPACK_IMPORTED_MODULE_10__["x"]) break;
                    if (a instanceof _chunks_languageUtils_js__WEBPACK_IMPORTED_MODULE_10__["R"]) return a;
                  }
                }
              }(e, t);

            case "Identifier":
              return ne(e, t);

            case "MemberExpression":
              return function (e, t) {
                try {
                  var n = Q(e, t.object);
                  if (null === n) throw new Error(Object(_treeAnalysis_js__WEBPACK_IMPORTED_MODULE_15__["nodeErrorMessage"])(t, "RUNTIME", "NOTFOUND"));

                  if (!1 === t.computed) {
                    if ("Identifier" === t.property.type) {
                      if (n instanceof _Dictionary_js__WEBPACK_IMPORTED_MODULE_11__["default"] || n instanceof _Feature_js__WEBPACK_IMPORTED_MODULE_14__["default"]) return n.field(t.property.name);
                      if (n instanceof _geometry_Geometry_js__WEBPACK_IMPORTED_MODULE_1__["default"]) return te(n, t.property.name, t);
                    }

                    throw new Error(Object(_treeAnalysis_js__WEBPACK_IMPORTED_MODULE_15__["nodeErrorMessage"])(t, "RUNTIME", "INVALIDTYPE"));
                  }

                  {
                    var o = Q(e, t.property);

                    if (n instanceof _Dictionary_js__WEBPACK_IMPORTED_MODULE_11__["default"] || n instanceof _Feature_js__WEBPACK_IMPORTED_MODULE_14__["default"]) {
                      if (Object(_chunks_languageUtils_js__WEBPACK_IMPORTED_MODULE_10__["b"])(o)) return n.field(o);
                      throw new Error(Object(_treeAnalysis_js__WEBPACK_IMPORTED_MODULE_15__["nodeErrorMessage"])(t, "RUNTIME", "INVALIDTYPE"));
                    }

                    if (n instanceof _geometry_Geometry_js__WEBPACK_IMPORTED_MODULE_1__["default"]) {
                      if (Object(_chunks_languageUtils_js__WEBPACK_IMPORTED_MODULE_10__["b"])(o)) return te(n, o, t);
                      throw new Error(Object(_treeAnalysis_js__WEBPACK_IMPORTED_MODULE_15__["nodeErrorMessage"])(t, "RUNTIME", "INVALIDTYPE"));
                    }

                    if (Object(_chunks_languageUtils_js__WEBPACK_IMPORTED_MODULE_10__["h"])(n)) {
                      if (Object(_chunks_languageUtils_js__WEBPACK_IMPORTED_MODULE_10__["a"])(o) && isFinite(o) && Math.floor(o) === o) {
                        if (o < 0 && (o = n.length + o), o >= n.length || o < 0) throw new Error(Object(_treeAnalysis_js__WEBPACK_IMPORTED_MODULE_15__["nodeErrorMessage"])(t, "RUNTIME", "OUTOFBOUNDS"));
                        return n[o];
                      }

                      throw new Error(Object(_treeAnalysis_js__WEBPACK_IMPORTED_MODULE_15__["nodeErrorMessage"])(t, "RUNTIME", "INVALIDTYPE"));
                    }

                    if (Object(_chunks_languageUtils_js__WEBPACK_IMPORTED_MODULE_10__["b"])(n)) {
                      if (Object(_chunks_languageUtils_js__WEBPACK_IMPORTED_MODULE_10__["a"])(o) && isFinite(o) && Math.floor(o) === o) {
                        if (o < 0 && (o = n.length + o), o >= n.length || o < 0) throw new Error(Object(_treeAnalysis_js__WEBPACK_IMPORTED_MODULE_15__["nodeErrorMessage"])(t, "RUNTIME", "OUTOFBOUNDS"));
                        return n[o];
                      }

                      throw new Error(Object(_treeAnalysis_js__WEBPACK_IMPORTED_MODULE_15__["nodeErrorMessage"])(t, "RUNTIME", "INVALIDTYPE"));
                    }

                    if (Object(_chunks_languageUtils_js__WEBPACK_IMPORTED_MODULE_10__["o"])(n)) {
                      if (Object(_chunks_languageUtils_js__WEBPACK_IMPORTED_MODULE_10__["a"])(o) && isFinite(o) && Math.floor(o) === o) {
                        if (o < 0 && (o = n.length() + o), o >= n.length() || o < 0) throw new Error(Object(_treeAnalysis_js__WEBPACK_IMPORTED_MODULE_15__["nodeErrorMessage"])(t, "RUNTIME", "OUTOFBOUNDS"));
                        return n.get(o);
                      }

                      throw new Error(Object(_treeAnalysis_js__WEBPACK_IMPORTED_MODULE_15__["nodeErrorMessage"])(t, "RUNTIME", "INVALIDTYPE"));
                    }

                    throw new Error(Object(_treeAnalysis_js__WEBPACK_IMPORTED_MODULE_15__["nodeErrorMessage"])(t, "RUNTIME", "INVALIDTYPE"));
                  }
                } catch (e) {
                  throw e;
                }
              }(e, t);

            case "Literal":
              return t.value;

            case "CallExpression":
              return function (e, r) {
                try {
                  if ("Identifier" !== r.callee.type) throw new Error(Object(_treeAnalysis_js__WEBPACK_IMPORTED_MODULE_15__["nodeErrorMessage"])(r, "RUNTIME", "ONLYNODESSUPPORTED"));

                  if (null !== e.localScope && void 0 !== e.localScope[r.callee.name.toLowerCase()]) {
                    var _t15 = e.localScope[r.callee.name.toLowerCase()];
                    if (_t15.value instanceof _chunks_languageUtils_js__WEBPACK_IMPORTED_MODULE_10__["N"]) return _t15.value.fn(e, r);
                    if (_t15.value instanceof _FunctionWrapper_js__WEBPACK_IMPORTED_MODULE_7__["default"]) return ue(e, r, _t15.value.definition);
                    throw new Error(Object(_treeAnalysis_js__WEBPACK_IMPORTED_MODULE_15__["nodeErrorMessage"])(r, "RUNTIME", "NOTAFUNCTION"));
                  }

                  if (void 0 !== e.globalScope[r.callee.name.toLowerCase()]) {
                    var _t16 = e.globalScope[r.callee.name.toLowerCase()];
                    if (_t16.value instanceof _chunks_languageUtils_js__WEBPACK_IMPORTED_MODULE_10__["N"]) return _t16.value.fn(e, r);
                    if (_t16.value instanceof _FunctionWrapper_js__WEBPACK_IMPORTED_MODULE_7__["default"]) return ue(e, r, _t16.value.definition);
                    throw new Error(Object(_treeAnalysis_js__WEBPACK_IMPORTED_MODULE_15__["nodeErrorMessage"])(r, "RUNTIME", "NOTAFUNCTION"));
                  }

                  throw new Error(Object(_treeAnalysis_js__WEBPACK_IMPORTED_MODULE_15__["nodeErrorMessage"])(r, "RUNTIME", "NOTFOUND"));
                } catch (e) {
                  throw e;
                }
              }(e, t);

            case "UnaryExpression":
              return function (e, r) {
                try {
                  var _t17 = Q(e, r.argument);

                  if (Object(_chunks_languageUtils_js__WEBPACK_IMPORTED_MODULE_10__["i"])(_t17)) {
                    if ("!" === r.operator) return !_t17;
                    if ("-" === r.operator) return -1 * Object(_chunks_languageUtils_js__WEBPACK_IMPORTED_MODULE_10__["c"])(_t17);
                    if ("+" === r.operator) return 1 * Object(_chunks_languageUtils_js__WEBPACK_IMPORTED_MODULE_10__["c"])(_t17);
                    if ("~" === r.operator) return ~Object(_chunks_languageUtils_js__WEBPACK_IMPORTED_MODULE_10__["c"])(_t17);
                    throw new Error(Object(_treeAnalysis_js__WEBPACK_IMPORTED_MODULE_15__["nodeErrorMessage"])(r, "RUNTIME", "NOTSUPPORTEDUNARYOPERATOR"));
                  }

                  if ("~" === r.operator) return ~Object(_chunks_languageUtils_js__WEBPACK_IMPORTED_MODULE_10__["c"])(_t17);
                  if ("-" === r.operator) return -1 * Object(_chunks_languageUtils_js__WEBPACK_IMPORTED_MODULE_10__["c"])(_t17);
                  if ("+" === r.operator) return 1 * Object(_chunks_languageUtils_js__WEBPACK_IMPORTED_MODULE_10__["c"])(_t17);
                  throw new Error(Object(_treeAnalysis_js__WEBPACK_IMPORTED_MODULE_15__["nodeErrorMessage"])(r, "RUNTIME", "NOTSUPPORTEDUNARYOPERATOR"));
                } catch (e) {
                  throw e;
                }
              }(e, t);

            case "BinaryExpression":
              return function (e, r) {
                try {
                  var _t18 = [Q(e, r.left), Q(e, r.right)],
                      n = _t18[0],
                      o = _t18[1];

                  switch (r.operator) {
                    case "|":
                    case "<<":
                    case ">>":
                    case ">>>":
                    case "^":
                    case "&":
                      return Object(_chunks_languageUtils_js__WEBPACK_IMPORTED_MODULE_10__["u"])(Object(_chunks_languageUtils_js__WEBPACK_IMPORTED_MODULE_10__["c"])(n), Object(_chunks_languageUtils_js__WEBPACK_IMPORTED_MODULE_10__["c"])(o), r.operator);

                    case "==":
                      return Object(_chunks_languageUtils_js__WEBPACK_IMPORTED_MODULE_10__["n"])(n, o);

                    case "!=":
                      return !Object(_chunks_languageUtils_js__WEBPACK_IMPORTED_MODULE_10__["n"])(n, o);

                    case "<":
                    case ">":
                    case "<=":
                    case ">=":
                      return Object(_chunks_languageUtils_js__WEBPACK_IMPORTED_MODULE_10__["s"])(n, o, r.operator);

                    case "+":
                      return Object(_chunks_languageUtils_js__WEBPACK_IMPORTED_MODULE_10__["b"])(n) || Object(_chunks_languageUtils_js__WEBPACK_IMPORTED_MODULE_10__["b"])(o) ? Object(_chunks_languageUtils_js__WEBPACK_IMPORTED_MODULE_10__["e"])(n) + Object(_chunks_languageUtils_js__WEBPACK_IMPORTED_MODULE_10__["e"])(o) : Object(_chunks_languageUtils_js__WEBPACK_IMPORTED_MODULE_10__["c"])(n) + Object(_chunks_languageUtils_js__WEBPACK_IMPORTED_MODULE_10__["c"])(o);

                    case "-":
                      return Object(_chunks_languageUtils_js__WEBPACK_IMPORTED_MODULE_10__["c"])(n) - Object(_chunks_languageUtils_js__WEBPACK_IMPORTED_MODULE_10__["c"])(o);

                    case "*":
                      return Object(_chunks_languageUtils_js__WEBPACK_IMPORTED_MODULE_10__["c"])(n) * Object(_chunks_languageUtils_js__WEBPACK_IMPORTED_MODULE_10__["c"])(o);

                    case "/":
                      return Object(_chunks_languageUtils_js__WEBPACK_IMPORTED_MODULE_10__["c"])(n) / Object(_chunks_languageUtils_js__WEBPACK_IMPORTED_MODULE_10__["c"])(o);

                    case "%":
                      return Object(_chunks_languageUtils_js__WEBPACK_IMPORTED_MODULE_10__["c"])(n) % Object(_chunks_languageUtils_js__WEBPACK_IMPORTED_MODULE_10__["c"])(o);

                    default:
                      throw new Error(Object(_treeAnalysis_js__WEBPACK_IMPORTED_MODULE_15__["nodeErrorMessage"])(r, "RUNTIME", "OPERATORNOTRECOGNISED"));
                  }
                } catch (e) {
                  throw e;
                }
              }(e, t);

            case "LogicalExpression":
              return function (e, r) {
                try {
                  if ("AssignmentExpression" === r.left.type || "UpdateExpression" === r.left.type) throw new Error(Object(_treeAnalysis_js__WEBPACK_IMPORTED_MODULE_15__["nodeErrorMessage"])(r.left, "RUNTIME", "CANNOT_USE_ASSIGNMENT_IN_CONDITION"));
                  if ("AssignmentExpression" === r.right.type || "UpdateExpression" === r.right.type) throw new Error(Object(_treeAnalysis_js__WEBPACK_IMPORTED_MODULE_15__["nodeErrorMessage"])(r.right, "RUNTIME", "CANNOT_USE_ASSIGNMENT_IN_CONDITION"));

                  var _t19 = Q(e, r.left);

                  if (Object(_chunks_languageUtils_js__WEBPACK_IMPORTED_MODULE_10__["i"])(_t19)) switch (r.operator) {
                    case "||":
                      if (!0 === _t19) return _t19;
                      {
                        var _t20 = Q(e, r.right);

                        if (Object(_chunks_languageUtils_js__WEBPACK_IMPORTED_MODULE_10__["i"])(_t20)) return _t20;
                        throw new Error(Object(_treeAnalysis_js__WEBPACK_IMPORTED_MODULE_15__["nodeErrorMessage"])(r, "RUNTIME", "ONLYORORAND"));
                      }

                    case "&&":
                      if (!1 === _t19) return _t19;
                      {
                        var _t21 = Q(e, r.right);

                        if (Object(_chunks_languageUtils_js__WEBPACK_IMPORTED_MODULE_10__["i"])(_t21)) return _t21;
                        throw new Error(Object(_treeAnalysis_js__WEBPACK_IMPORTED_MODULE_15__["nodeErrorMessage"])(r, "RUNTIME", "ONLYORORAND"));
                      }

                    default:
                      throw new Error(Object(_treeAnalysis_js__WEBPACK_IMPORTED_MODULE_15__["nodeErrorMessage"])(r, "RUNTIME", "ONLYORORAND"));
                  }
                  throw new Error(Object(_treeAnalysis_js__WEBPACK_IMPORTED_MODULE_15__["nodeErrorMessage"])(r, "RUNTIME", "ONLYBOOLEAN"));
                } catch (e) {
                  throw e;
                }
              }(e, t);

            case "ConditionalExpression":
              throw new Error(Object(_treeAnalysis_js__WEBPACK_IMPORTED_MODULE_15__["nodeErrorMessage"])(t, "RUNTIME", "NOTSUPPORTED"));

            case "ArrayExpression":
              return function (e, r) {
                try {
                  var _t22 = [];

                  for (var n = 0; n < r.elements.length; n++) {
                    var o = Q(e, r.elements[n]);
                    if (Object(_chunks_languageUtils_js__WEBPACK_IMPORTED_MODULE_10__["q"])(o)) throw new Error(Object(_treeAnalysis_js__WEBPACK_IMPORTED_MODULE_15__["nodeErrorMessage"])(r, "RUNTIME", "FUNCTIONCONTEXTILLEGAL"));
                    o === _chunks_languageUtils_js__WEBPACK_IMPORTED_MODULE_10__["v"] ? _t22.push(null) : _t22.push(o);
                  }

                  return _t22;
                } catch (e) {
                  throw e;
                }
              }(e, t);

            case "ObjectExpression":
              return function (e, r) {
                var t = {};

                for (var _n12 = 0; _n12 < r.properties.length; _n12++) {
                  var o = Q(e, r.properties[_n12]);
                  if (Object(_chunks_languageUtils_js__WEBPACK_IMPORTED_MODULE_10__["q"])(o.value)) throw new Error("Illegal Argument");
                  if (!1 === Object(_chunks_languageUtils_js__WEBPACK_IMPORTED_MODULE_10__["b"])(o.key)) throw new Error("Illegal Argument");
                  o.value === _chunks_languageUtils_js__WEBPACK_IMPORTED_MODULE_10__["v"] ? t[o.key.toString()] = null : t[o.key.toString()] = o.value;
                }

                var n = new _Dictionary_js__WEBPACK_IMPORTED_MODULE_11__["default"](t);
                return n.immutable = !1, n;
              }(e, t);

            case "Property":
              return function (e, r) {
                return {
                  key: "Identifier" === r.key.type ? r.key.name : Q(e, r.key),
                  value: Q(e, r.value)
                };
              }(e, t);

            default:
              throw new Error(Object(_treeAnalysis_js__WEBPACK_IMPORTED_MODULE_15__["nodeErrorMessage"])(t, "RUNTIME", "UNREOGNISED"));
          }
        } catch (e) {
          throw e;
        }
      }

      function $(e, r, t) {
        if (null !== r.test) {
          if (t.testResult = Q(e, r.test), !1 === t.testResult) return;
          if (!0 !== t.testResult) throw new Error(Object(_treeAnalysis_js__WEBPACK_IMPORTED_MODULE_15__["nodeErrorMessage"])(r, "RUNTIME", "CANNOT_USE_NONBOOLEAN_IN_CONDITION"));
        }

        t.lastAction = Q(e, r.body), t.lastAction !== _chunks_languageUtils_js__WEBPACK_IMPORTED_MODULE_10__["x"] ? t.lastAction instanceof _chunks_languageUtils_js__WEBPACK_IMPORTED_MODULE_10__["R"] ? t.testResult = !1 : null !== r.update && Q(e, r.update) : t.testResult = !1;
      }

      function ee(e, r, t, n) {
        switch (r) {
          case "=":
            return e === _chunks_languageUtils_js__WEBPACK_IMPORTED_MODULE_10__["v"] ? null : e;

          case "/=":
            return Object(_chunks_languageUtils_js__WEBPACK_IMPORTED_MODULE_10__["c"])(t) / Object(_chunks_languageUtils_js__WEBPACK_IMPORTED_MODULE_10__["c"])(e);

          case "*=":
            return Object(_chunks_languageUtils_js__WEBPACK_IMPORTED_MODULE_10__["c"])(t) * Object(_chunks_languageUtils_js__WEBPACK_IMPORTED_MODULE_10__["c"])(e);

          case "-=":
            return Object(_chunks_languageUtils_js__WEBPACK_IMPORTED_MODULE_10__["c"])(t) - Object(_chunks_languageUtils_js__WEBPACK_IMPORTED_MODULE_10__["c"])(e);

          case "+=":
            return Object(_chunks_languageUtils_js__WEBPACK_IMPORTED_MODULE_10__["b"])(t) || Object(_chunks_languageUtils_js__WEBPACK_IMPORTED_MODULE_10__["b"])(e) ? Object(_chunks_languageUtils_js__WEBPACK_IMPORTED_MODULE_10__["e"])(t) + Object(_chunks_languageUtils_js__WEBPACK_IMPORTED_MODULE_10__["e"])(e) : Object(_chunks_languageUtils_js__WEBPACK_IMPORTED_MODULE_10__["c"])(t) + Object(_chunks_languageUtils_js__WEBPACK_IMPORTED_MODULE_10__["c"])(e);

          case "%=":
            return Object(_chunks_languageUtils_js__WEBPACK_IMPORTED_MODULE_10__["c"])(t) % Object(_chunks_languageUtils_js__WEBPACK_IMPORTED_MODULE_10__["c"])(e);

          default:
            throw new Error(Object(_treeAnalysis_js__WEBPACK_IMPORTED_MODULE_15__["nodeErrorMessage"])(n, "RUNTIME", "OPERATORNOTRECOGNISED"));
        }
      }

      var re = 0;

      function te(e, r, t) {
        var n;

        switch (r = r.toLowerCase()) {
          case "hasz":
            {
              var _r20 = e.hasZ;
              return void 0 !== _r20 && _r20;
            }

          case "hasm":
            {
              var _r21 = e.hasM;
              return void 0 !== _r21 && _r21;
            }

          case "spatialreference":
            {
              var _r22 = e.spatialReference._arcadeCacheId;

              if (void 0 === _r22) {
                var _t24 = !0;

                Object.freeze && Object.isFrozen(e.spatialReference) && (_t24 = !1), _t24 && (re++, e.spatialReference._arcadeCacheId = re, _r22 = re);
              }

              var _t23 = new _Dictionary_js__WEBPACK_IMPORTED_MODULE_11__["default"]({
                wkt: e.spatialReference.wkt,
                wkid: e.spatialReference.wkid
              });

              return void 0 !== _r22 && (_t23._arcadeCacheId = "SPREF" + _r22.toString()), _t23;
            }
        }

        switch (e.type) {
          case "extent":
            switch (r) {
              case "xmin":
              case "xmax":
              case "ymin":
              case "ymax":
              case "zmin":
              case "zmax":
              case "mmin":
              case "mmax":
                {
                  var _t25 = e[r];
                  return void 0 !== _t25 ? _t25 : null;
                }

              case "type":
                return "Extent";
            }

            break;

          case "polygon":
            switch (r) {
              case "rings":
                n = e.cache._arcadeCacheId, void 0 === n && (re++, n = re, e.cache._arcadeCacheId = n);
                return new _ImmutablePathArray_js__WEBPACK_IMPORTED_MODULE_9__["default"](e.rings, e.spatialReference, !0 === e.hasZ, !0 === e.hasM, n);

              case "type":
                return "Polygon";
            }

            break;

          case "point":
            switch (r) {
              case "x":
              case "y":
              case "z":
              case "m":
                return void 0 !== e[r] ? e[r] : null;

              case "type":
                return "Point";
            }

            break;

          case "polyline":
            switch (r) {
              case "paths":
                n = e.cache._arcadeCacheId, void 0 === n && (re++, n = re, e.cache._arcadeCacheId = n);
                return new _ImmutablePathArray_js__WEBPACK_IMPORTED_MODULE_9__["default"](e.paths, e.spatialReference, !0 === e.hasZ, !0 === e.hasM, n);

              case "type":
                return "Polyline";
            }

            break;

          case "multipoint":
            switch (r) {
              case "points":
                n = e.cache._arcadeCacheId, void 0 === n && (re++, n = re, e.cache._arcadeCacheId = n);
                return new _ImmutablePointArray_js__WEBPACK_IMPORTED_MODULE_8__["default"](e.points, e.spatialReference, !0 === e.hasZ, !0 === e.hasM, n, 1);

              case "type":
                return "Multipoint";
            }

        }

        throw new Error(Object(_treeAnalysis_js__WEBPACK_IMPORTED_MODULE_15__["nodeErrorMessage"])(t, "RUNTIME", "PROPERTYNOTFOUND"));
      }

      function ne(e, r) {
        var t;

        try {
          var n = r.name.toLowerCase();
          if (null !== e.localScope && void 0 !== e.localScope[n]) return t = e.localScope[n], !0 === t.valueset || (t.value = Q(e, t.node), t.valueset = !0), t.value;
          if (void 0 !== e.globalScope[n]) return t = e.globalScope[n], !0 === t.valueset || (t.value = Q(e, t.node), t.valueset = !0), t.value;
          throw new Error(Object(_treeAnalysis_js__WEBPACK_IMPORTED_MODULE_15__["nodeErrorMessage"])(r, "RUNTIME", "VARIABLENOTFOUND"));
        } catch (e) {
          throw e;
        }
      }

      var oe = {};

      function ae(e) {
        return null == e ? "" : Object(_chunks_languageUtils_js__WEBPACK_IMPORTED_MODULE_10__["h"])(e) || Object(_chunks_languageUtils_js__WEBPACK_IMPORTED_MODULE_10__["o"])(e) ? "Array" : Object(_chunks_languageUtils_js__WEBPACK_IMPORTED_MODULE_10__["f"])(e) ? "Date" : Object(_chunks_languageUtils_js__WEBPACK_IMPORTED_MODULE_10__["b"])(e) ? "String" : Object(_chunks_languageUtils_js__WEBPACK_IMPORTED_MODULE_10__["i"])(e) ? "Boolean" : Object(_chunks_languageUtils_js__WEBPACK_IMPORTED_MODULE_10__["a"])(e) ? "Number" : e instanceof _Attachment_js__WEBPACK_IMPORTED_MODULE_13__["default"] ? "Attachment" : e instanceof _ArcadePortal_js__WEBPACK_IMPORTED_MODULE_12__["default"] ? "Portal" : e instanceof _Dictionary_js__WEBPACK_IMPORTED_MODULE_11__["default"] ? "Dictionary" : e instanceof _Feature_js__WEBPACK_IMPORTED_MODULE_14__["default"] ? "Feature" : e instanceof _geometry_Point_js__WEBPACK_IMPORTED_MODULE_2__["default"] ? "Point" : e instanceof _geometry_Polygon_js__WEBPACK_IMPORTED_MODULE_5__["default"] ? "Polygon" : e instanceof _geometry_Polyline_js__WEBPACK_IMPORTED_MODULE_6__["default"] ? "Polyline" : e instanceof _geometry_Multipoint_js__WEBPACK_IMPORTED_MODULE_4__["default"] ? "Multipoint" : e instanceof _geometry_Extent_js__WEBPACK_IMPORTED_MODULE_3__["default"] ? "Extent" : Object(_chunks_languageUtils_js__WEBPACK_IMPORTED_MODULE_10__["q"])(e) ? "Function" : Object(_chunks_languageUtils_js__WEBPACK_IMPORTED_MODULE_10__["z"])(e) ? "FeatureSet" : Object(_chunks_languageUtils_js__WEBPACK_IMPORTED_MODULE_10__["A"])(e) ? "FeatureSetCollection" : e === _chunks_languageUtils_js__WEBPACK_IMPORTED_MODULE_10__["v"] ? "" : "number" == typeof e && isNaN(e) ? "Number" : "Unrecognised Type";
      }

      function ie(e, r, t, n) {
        try {
          var o = Q(e, r.arguments[t]);
          if (Object(_chunks_languageUtils_js__WEBPACK_IMPORTED_MODULE_10__["n"])(o, n)) return Q(e, r.arguments[t + 1]);
          {
            var _o13 = r.arguments.length - t;

            return 1 === _o13 ? Q(e, r.arguments[t]) : 2 === _o13 ? null : 3 === _o13 ? Q(e, r.arguments[t + 2]) : ie(e, r, t + 2, n);
          }
        } catch (e) {
          throw e;
        }
      }

      function se(e, r, t, n) {
        try {
          if (!0 === n) return Q(e, r.arguments[t + 1]);
          if (3 === r.arguments.length - t) return Q(e, r.arguments[t + 2]);
          {
            var _n13 = Q(e, r.arguments[t + 2]);

            if (!1 === Object(_chunks_languageUtils_js__WEBPACK_IMPORTED_MODULE_10__["i"])(_n13)) throw new Error("WHEN needs boolean test conditions");
            return se(e, r, t + 2, _n13);
          }
        } catch (e) {
          throw e;
        }
      }

      function le(e, r) {
        var t = e.length,
            n = Math.floor(t / 2);
        return 0 === t ? [] : 1 === t ? [e[0]] : function (e, r, t) {
          var n = [];

          for (; e.length > 0 || r.length > 0;) {
            if (e.length > 0 && r.length > 0) {
              var o = t(e[0], r[0]);
              isNaN(o) && (o = 0), o <= 0 ? (n.push(e[0]), e = e.slice(1)) : (n.push(r[0]), r = r.slice(1));
            } else e.length > 0 ? (n.push(e[0]), e = e.slice(1)) : r.length > 0 && (n.push(r[0]), r = r.slice(1));
          }

          return n;
        }(le(e.slice(0, n), r), le(e.slice(n, t), r), r);
      }

      function ce(e, r, t) {
        try {
          var n = e.body;
          if (t.length !== e.params.length) throw new Error("Invalid Parameter calls to function.");

          for (var _n14 = 0; _n14 < t.length; _n14++) {
            r.localScope[e.params[_n14].name.toLowerCase()] = {
              value: t[_n14],
              valueset: !0,
              node: null
            };
          }

          var o = Q(r, n);
          if (o instanceof _chunks_languageUtils_js__WEBPACK_IMPORTED_MODULE_10__["R"]) return o.value;
          if (o === _chunks_languageUtils_js__WEBPACK_IMPORTED_MODULE_10__["x"]) throw new Error("Cannot Break from a Function");
          if (o === _chunks_languageUtils_js__WEBPACK_IMPORTED_MODULE_10__["y"]) throw new Error("Cannot Continue from a Function");
          return o instanceof _chunks_languageUtils_js__WEBPACK_IMPORTED_MODULE_10__["I"] ? o.value : o;
        } catch (e) {
          throw e;
        }
      }

      function ue(e, r, t) {
        return J(e, r, function (r, n, o) {
          var a = {
            spatialReference: e.spatialReference,
            globalScope: e.globalScope,
            depthCounter: e.depthCounter + 1,
            console: e.console,
            lrucache: e.lrucache,
            localScope: {}
          };
          if (a.depthCounter > 64) throw new Error("Exceeded maximum function depth");
          return ce(t, a, o);
        });
      }

      function fe(e) {
        return function () {
          var r = {
            spatialReference: e.context.spatialReference,
            console: e.context.console,
            lrucache: e.context.lrucache,
            localScope: {},
            depthCounter: e.context.depthCounter + 1,
            globalScope: e.context.globalScope
          };
          if (r.depthCounter > 64) throw new Error("Exceeded maximum function depth");
          return ce(e.definition, r, arguments);
        };
      }

      Object(_functions_array_js__WEBPACK_IMPORTED_MODULE_16__["registerFunctions"])(oe, J), Object(_functions_date_js__WEBPACK_IMPORTED_MODULE_17__["registerFunctions"])(oe, J), Object(_functions_string_js__WEBPACK_IMPORTED_MODULE_22__["registerFunctions"])(oe, J), Object(_functions_maths_js__WEBPACK_IMPORTED_MODULE_20__["registerFunctions"])(oe, J), Object(_functions_geometry_js__WEBPACK_IMPORTED_MODULE_18__["registerFunctions"])(oe, J), Object(_functions_stats_js__WEBPACK_IMPORTED_MODULE_21__["registerFunctions"])(oe, J), Object(_functions_geomsync_js__WEBPACK_IMPORTED_MODULE_19__["registerFunctions"])(oe, J), oe["typeof"] = function (e, r) {
        return J(e, r, function (e, r, t) {
          Object(_chunks_languageUtils_js__WEBPACK_IMPORTED_MODULE_10__["p"])(t, 1, 1);
          var n = ae(t[0]);
          if ("Unrecognised Type" === n) throw new Error("Unrecognised Type");
          return n;
        });
      }, oe.iif = function (e, r) {
        try {
          Object(_chunks_languageUtils_js__WEBPACK_IMPORTED_MODULE_10__["p"])(null === r.arguments ? [] : r.arguments, 3, 3);
          var t = Q(e, r.arguments[0]);
          if (!1 === Object(_chunks_languageUtils_js__WEBPACK_IMPORTED_MODULE_10__["i"])(t)) throw new Error("IF Function must have a boolean test condition");
          var n = Q(e, r.arguments[1]),
              o = Q(e, r.arguments[2]);
          return !0 === t ? n : o;
        } catch (e) {
          throw e;
        }
      }, oe.decode = function (e, r) {
        try {
          if (r.arguments.length < 2) throw new Error("Missing Parameters");
          if (2 === r.arguments.length) return Q(e, r.arguments[1]);
          {
            if ((r.arguments.length - 1) % 2 == 0) throw new Error("Must have a default value result.");
            var t = Q(e, r.arguments[0]);
            return ie(e, r, 1, t);
          }
        } catch (e) {
          throw e;
        }
      }, oe.when = function (e, r) {
        try {
          if (r.arguments.length < 3) throw new Error("Missing Parameters");
          if (r.arguments.length % 2 == 0) throw new Error("Must have a default value result.");
          var t = Q(e, r.arguments[0]);
          if (!1 === Object(_chunks_languageUtils_js__WEBPACK_IMPORTED_MODULE_10__["i"])(t)) throw new Error("WHEN needs boolean test conditions");
          return se(e, r, 0, t);
        } catch (e) {
          throw e;
        }
      }, oe.top = function (e, r) {
        return J(e, r, function (e, r, t) {
          if (Object(_chunks_languageUtils_js__WEBPACK_IMPORTED_MODULE_10__["p"])(t, 2, 2), Object(_chunks_languageUtils_js__WEBPACK_IMPORTED_MODULE_10__["h"])(t[0])) return Object(_chunks_languageUtils_js__WEBPACK_IMPORTED_MODULE_10__["c"])(t[1]) >= t[0].length ? t[0].slice(0) : t[0].slice(0, Object(_chunks_languageUtils_js__WEBPACK_IMPORTED_MODULE_10__["c"])(t[1]));
          if (Object(_chunks_languageUtils_js__WEBPACK_IMPORTED_MODULE_10__["o"])(t[0])) return Object(_chunks_languageUtils_js__WEBPACK_IMPORTED_MODULE_10__["c"])(t[1]) >= t[0].length() ? t[0].slice(0) : t[0].slice(0, Object(_chunks_languageUtils_js__WEBPACK_IMPORTED_MODULE_10__["c"])(t[1]));
          throw new Error("Top cannot accept this parameter type");
        });
      }, oe.first = function (e, r) {
        return J(e, r, function (e, r, t) {
          return Object(_chunks_languageUtils_js__WEBPACK_IMPORTED_MODULE_10__["p"])(t, 1, 1), Object(_chunks_languageUtils_js__WEBPACK_IMPORTED_MODULE_10__["h"])(t[0]) ? 0 === t[0].length ? null : t[0][0] : Object(_chunks_languageUtils_js__WEBPACK_IMPORTED_MODULE_10__["o"])(t[0]) ? 0 === t[0].length() ? null : t[0].get(0) : null;
        });
      }, oe.sort = function (e, r) {
        return J(e, r, function (e, r, t) {
          Object(_chunks_languageUtils_js__WEBPACK_IMPORTED_MODULE_10__["p"])(t, 1, 2);
          var n = t[0];
          if (Object(_chunks_languageUtils_js__WEBPACK_IMPORTED_MODULE_10__["o"])(n) && (n = n.toArray()), !1 === Object(_chunks_languageUtils_js__WEBPACK_IMPORTED_MODULE_10__["h"])(n)) throw new Error("Illegal Argument");

          if (t.length > 1) {
            if (!1 === Object(_chunks_languageUtils_js__WEBPACK_IMPORTED_MODULE_10__["q"])(t[1])) throw new Error("Illegal Argument");
            var _e23 = n;

            var _r23 = fe(t[1]);

            return _e23 = le(_e23, function (e, t) {
              return _r23(e, t);
            }), _e23;
          }

          {
            var _e24 = n;
            if (0 === _e24.length) return [];
            var _r24 = {};

            for (var _t27 = 0; _t27 < _e24.length; _t27++) {
              var _n15 = ae(_e24[_t27]);

              "" !== _n15 && (_r24[_n15] = !0);
            }

            if (!0 === _r24.Array || !0 === _r24.Dictionary || !0 === _r24.Feature || !0 === _r24.Point || !0 === _r24.Polygon || !0 === _r24.Polyline || !0 === _r24.Multipoint || !0 === _r24.Extent || !0 === _r24.Function) return _e24.slice(0);
            var _t26 = 0,
                o = "";

            for (var _e25 in _r24) {
              _t26++, o = _e25;
            }

            return _e24 = _t26 > 1 || "String" === o ? le(_e24, function (e, r) {
              if (null == e || e === _chunks_languageUtils_js__WEBPACK_IMPORTED_MODULE_10__["v"]) return null == r || r === _chunks_languageUtils_js__WEBPACK_IMPORTED_MODULE_10__["v"] ? 0 : 1;
              if (null == r || r === _chunks_languageUtils_js__WEBPACK_IMPORTED_MODULE_10__["v"]) return -1;
              var t = Object(_chunks_languageUtils_js__WEBPACK_IMPORTED_MODULE_10__["e"])(e),
                  n = Object(_chunks_languageUtils_js__WEBPACK_IMPORTED_MODULE_10__["e"])(r);
              return t < n ? -1 : t === n ? 0 : 1;
            }) : "Number" === o ? le(_e24, function (e, r) {
              return e - r;
            }) : "Boolean" === o ? le(_e24, function (e, r) {
              return e === r ? 0 : r ? -1 : 1;
            }) : "Date" === o ? le(_e24, function (e, r) {
              return r - e;
            }) : _e24.slice(0), _e24;
          }
        });
      };

      for (var e in oe) {
        oe[e] = {
          value: new _chunks_languageUtils_js__WEBPACK_IMPORTED_MODULE_10__["N"](oe[e]),
          valueset: !0,
          node: null
        };
      }

      var pe = function pe() {};

      (pe.prototype = oe).infinity = {
        value: Number.POSITIVE_INFINITY,
        valueset: !0,
        node: null
      }, pe.prototype.pi = {
        value: Math.PI,
        valueset: !0,
        node: null
      };
      var he = {
        fixSpatialReference: _chunks_languageUtils_js__WEBPACK_IMPORTED_MODULE_10__["r"],
        parseArguments: X,
        standardFunction: J
      };

      function we(e) {
        console.log(e);
      }

      function me(e) {
        var r = {
          mode: "sync",
          compiled: !1,
          functions: {},
          signatures: [],
          standardFunction: J,
          evaluateIdentifier: ne,
          arcadeCustomFunctionHandler: fe
        };

        for (var t = 0; t < e.length; t++) {
          e[t].registerFunctions(r);
        }

        for (var _e26 in r.functions) {
          oe[_e26] = {
            value: new _chunks_languageUtils_js__WEBPACK_IMPORTED_MODULE_10__["N"](r.functions[_e26]),
            valueset: !0,
            node: null
          }, pe.prototype[_e26] = oe[_e26];
        }

        for (var _e27 = 0; _e27 < r.signatures.length; _e27++) {
          Object(_treeAnalysis_js__WEBPACK_IMPORTED_MODULE_15__["addFunctionDeclaration"])(r.signatures[_e27], "async");
        }
      }

      function Ee(r, t) {
        var n = t.spatialReference;
        null == n && (n = new _geometry_SpatialReference_js__WEBPACK_IMPORTED_MODULE_0__["default"]({
          wkid: 102100
        }));
        var o = Q({
          spatialReference: n,
          globalScope: function (e, r) {
            var t = new pe();
            e || (e = {}), r || (r = {});
            var n = new _Dictionary_js__WEBPACK_IMPORTED_MODULE_11__["default"]({
              newline: "\n",
              tab: "\t",
              singlequote: "'",
              doublequote: '"',
              forwardslash: "/",
              backwardslash: "\\"
            });
            n.immutable = !1, t.textformatting = {
              value: n,
              valueset: !0,
              node: null
            };

            for (var _e28 in r) {
              t[_e28] = {
                value: new _chunks_languageUtils_js__WEBPACK_IMPORTED_MODULE_10__["N"](r[_e28]),
                "native": !0,
                valueset: !0,
                node: null
              };
            }

            for (var _r25 in e) {
              e[_r25] && "esri.Graphic" === e[_r25].declaredClass ? t[_r25] = {
                value: _Feature_js__WEBPACK_IMPORTED_MODULE_14__["default"].createFromGraphic(e[_r25]),
                valueset: !0,
                node: null
              } : t[_r25] = {
                value: e[_r25],
                valueset: !0,
                node: null
              };
            }

            return t;
          }(t.vars, t.customfunctions),
          localScope: null,
          console: t.console ? t.console : we,
          lrucache: t.lrucache,
          depthCounter: 1
        }, r.body[0].body);
        if (o instanceof _chunks_languageUtils_js__WEBPACK_IMPORTED_MODULE_10__["R"] && (o = o.value), o instanceof _chunks_languageUtils_js__WEBPACK_IMPORTED_MODULE_10__["I"] && (o = o.value), o === _chunks_languageUtils_js__WEBPACK_IMPORTED_MODULE_10__["v"] && (o = null), o === _chunks_languageUtils_js__WEBPACK_IMPORTED_MODULE_10__["x"]) throw new Error("Cannot return BREAK");
        if (o === _chunks_languageUtils_js__WEBPACK_IMPORTED_MODULE_10__["y"]) throw new Error("Cannot return CONTINUE");
        if (o instanceof _FunctionWrapper_js__WEBPACK_IMPORTED_MODULE_7__["default"]) throw new Error("Cannot return FUNCTION");
        if (o instanceof _chunks_languageUtils_js__WEBPACK_IMPORTED_MODULE_10__["N"]) throw new Error("Cannot return FUNCTION");
        return o;
      }

      function de(e, r) {
        return Object(_treeAnalysis_js__WEBPACK_IMPORTED_MODULE_15__["findFieldLiterals"])(e);
      }

      function ge(e, r) {
        return Object(_treeAnalysis_js__WEBPACK_IMPORTED_MODULE_15__["validateScript"])(e, r, "simple");
      }

      function Ne(e, r) {
        return Object(_treeAnalysis_js__WEBPACK_IMPORTED_MODULE_15__["referencesMember"])(e, r);
      }

      function Ie(e, r) {
        return Object(_treeAnalysis_js__WEBPACK_IMPORTED_MODULE_15__["referencesFunction"])(e, r);
      }

      function ye(e) {
        return Object(_treeAnalysis_js__WEBPACK_IMPORTED_MODULE_15__["findFunctionCalls"])(e);
      }
      /***/

    },

    /***/
    "CE9W":
    /*!**********************************************************!*\
      !*** ./node_modules/@arcgis/core/support/arcadeUtils.js ***!
      \**********************************************************/

    /*! exports provided: Dictionary, arcadeFeature, arcade, convertFeatureLayerToFeatureSet, convertMapToFeatureSetCollection, convertServiceUrlToWorkspace, createExecContext, createFeature, createFunction, createSyntaxTree, dependsOnView, enableFeatureSetOperations, enableGeometryOperations, evalSyntaxTree, executeAsyncFunction, executeFunction, extractFieldNames, getViewInfo, hasGeometryOperations, hasVariable, loadScriptDependencies, updateExecContext */

    /***/
    function CE9W(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "convertFeatureLayerToFeatureSet", function () {
        return k;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "convertMapToFeatureSetCollection", function () {
        return I;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "convertServiceUrlToWorkspace", function () {
        return R;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "createExecContext", function () {
        return h;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "createFeature", function () {
        return b;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "createFunction", function () {
        return w;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "createSyntaxTree", function () {
        return x;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "dependsOnView", function () {
        return z;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "enableFeatureSetOperations", function () {
        return G;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "enableGeometryOperations", function () {
        return V;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "evalSyntaxTree", function () {
        return F;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "executeAsyncFunction", function () {
        return S;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "executeFunction", function () {
        return E;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "extractFieldNames", function () {
        return $;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "getViewInfo", function () {
        return M;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "hasGeometryOperations", function () {
        return U;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "hasVariable", function () {
        return C;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "loadScriptDependencies", function () {
        return D;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "updateExecContext", function () {
        return j;
      });
      /* harmony import */


      var _core_lang_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ../core/lang.js */
      "f/qv");
      /* harmony import */


      var _core_promiseUtils_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ../core/promiseUtils.js */
      "9MzC");
      /* harmony import */


      var _renderers_visualVariables_support_sizeVariableUtils_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ../renderers/visualVariables/support/sizeVariableUtils.js */
      "hvLT");
      /* harmony import */


      var _arcade_Dictionary_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ../arcade/Dictionary.js */
      "D5C5");
      /* harmony reexport (safe) */


      __webpack_require__.d(__webpack_exports__, "Dictionary", function () {
        return _arcade_Dictionary_js__WEBPACK_IMPORTED_MODULE_3__["default"];
      });
      /* harmony import */


      var _arcade_Feature_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ../arcade/Feature.js */
      "Xrjs");
      /* harmony reexport (safe) */


      __webpack_require__.d(__webpack_exports__, "arcadeFeature", function () {
        return _arcade_Feature_js__WEBPACK_IMPORTED_MODULE_4__["default"];
      });
      /* harmony import */


      var _chunks_arcade_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ../chunks/arcade.js */
      "CHxs");
      /* harmony reexport (safe) */


      __webpack_require__.d(__webpack_exports__, "arcade", function () {
        return _chunks_arcade_js__WEBPACK_IMPORTED_MODULE_5__["g"];
      });
      /*
      All material copyright ESRI, All Rights Reserved, unless otherwise specified.
      See https://js.arcgis.com/4.18/esri/copyright.txt for details.
      */


      var y = /^\$feature\./i,
          v = {
        vars: {
          $feature: "any",
          $view: "any"
        },
        spatialReference: null
      };

      function x(e) {
        if (!e) return null;

        try {
          return Object(_chunks_arcade_js__WEBPACK_IMPORTED_MODULE_5__["p"])(e);
        } catch (e) {}

        return null;
      }

      function w(r, n) {
        var t = "string" == typeof r ? x(r) : r;
        if (!t) return null;

        try {
          return n = n || Object(_core_lang_js__WEBPACK_IMPORTED_MODULE_0__["clone"])(v), Object(_chunks_arcade_js__WEBPACK_IMPORTED_MODULE_5__["c"])(t, n);
        } catch (e) {}

        return null;
      }

      function h(e, r) {
        return {
          vars: {
            $feature: null == e ? new _arcade_Feature_js__WEBPACK_IMPORTED_MODULE_4__["default"]() : _arcade_Feature_js__WEBPACK_IMPORTED_MODULE_4__["default"].createFromGraphic(e),
            $view: r && r.view
          },
          spatialReference: r && r.sr
        };
      }

      function b(e, r, n) {
        return _arcade_Feature_js__WEBPACK_IMPORTED_MODULE_4__["default"].createFromGraphicLikeObject(r, e, n);
      }

      function j(e, r) {
        e.vars.$feature = r;
      }

      function F(e, r) {
        var n;

        try {
          n = Object(_chunks_arcade_js__WEBPACK_IMPORTED_MODULE_5__["e"])(e, r);
        } catch (e) {
          n = null;
        }

        return n;
      }

      function E(e, r) {
        var n;

        try {
          n = e ? e(r) : null;
        } catch (e) {
          n = null;
        }

        return n;
      }

      function S(e, n) {
        try {
          return e ? e(n) : Object(_core_promiseUtils_js__WEBPACK_IMPORTED_MODULE_1__["resolve"])(null);
        } catch (e) {
          return Object(_core_promiseUtils_js__WEBPACK_IMPORTED_MODULE_1__["resolve"])(null);
        }
      }

      function $(e) {
        if (!e) return [];
        var r = "string" == typeof e ? x(e) : e;
        if (!r) return [];
        var n = Object(_chunks_arcade_js__WEBPACK_IMPORTED_MODULE_5__["a"])(r),
            t = new Array();
        return n.forEach(function (e) {
          y.test(e) && (e = e.replace(y, ""), t.push(e));
        }), t.sort(), t.filter(function (e, r) {
          return 0 === r || t[r - 1] !== e;
        });
      }

      function z(e) {
        return Object(_chunks_arcade_js__WEBPACK_IMPORTED_MODULE_5__["r"])(e, "$view");
      }

      function C(e, r) {
        return !!e && Object(_chunks_arcade_js__WEBPACK_IMPORTED_MODULE_5__["r"])(e, r);
      }

      function M(e) {
        if (!e || null == e.spatialReference && (null == e.scale || null == e.viewingMode)) return;
        return {
          view: e.viewingMode && null != e.scale ? new _arcade_Dictionary_js__WEBPACK_IMPORTED_MODULE_3__["default"]({
            viewingMode: e.viewingMode,
            scale: e.scale
          }) : null,
          sr: e.spatialReference
        };
      }

      function R(e, r) {
        var n = Object(_chunks_arcade_js__WEBPACK_IMPORTED_MODULE_5__["f"])();
        return n ? n.createFeatureSetCollectionFromService(e, r) : null;
      }

      function k(e, r) {
        if (null === e) return null;
        var n = Object(_chunks_arcade_js__WEBPACK_IMPORTED_MODULE_5__["f"])();
        return n ? n.constructFeatureSet(e, r) : null;
      }

      function I(e) {
        if (null === e || null === e.map) return null;
        var r = Object(_chunks_arcade_js__WEBPACK_IMPORTED_MODULE_5__["f"])();
        return r ? r.createFeatureSetCollectionFromMap(e.map, e.spatialReference) : null;
      }

      function D(e, r) {
        var n = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : [];
        return Object(_chunks_arcade_js__WEBPACK_IMPORTED_MODULE_5__["l"])(e, r, n);
      }

      function V() {
        return Object(_chunks_arcade_js__WEBPACK_IMPORTED_MODULE_5__["b"])();
      }

      function G() {
        return Object(_chunks_arcade_js__WEBPACK_IMPORTED_MODULE_5__["d"])();
      }

      function L(e) {
        var r = x(e);
        return !!r && Object(_chunks_arcade_js__WEBPACK_IMPORTED_MODULE_5__["s"])(r);
      }

      function U(e) {
        if (!e) return !1;
        if ("string" == typeof e) return L(e);
        var r = e;

        if ("simple" === (t = r).type || "class-breaks" === t.type || "unique-value" === t.type || "dot-density" === t.type || "dictionary" === t.type) {
          if ("dot-density" === r.type) {
            var _e30 = r.attributes.some(function (e) {
              return L(e.valueExpression);
            });

            if (_e30) return _e30;
          }

          var _e29 = r.visualVariables,
              _t28 = !!_e29 && _e29.some(function (e) {
            var r = L(e.valueExpression);
            return "size" === e.type && (Object(_renderers_visualVariables_support_sizeVariableUtils_js__WEBPACK_IMPORTED_MODULE_2__["isSizeVariable"])(e.minSize) && (r = r || L(e.minSize.valueExpression)), Object(_renderers_visualVariables_support_sizeVariableUtils_js__WEBPACK_IMPORTED_MODULE_2__["isSizeVariable"])(e.maxSize) && (r = r || L(e.maxSize.valueExpression))), r;
          });

          return !(!("valueExpression" in r) || !L(r.valueExpression)) || _t28;
        }

        var t;

        if ("esri.layers.support.LabelClass" === r.declaredClass) {
          var _e31 = r.labelExpressionInfo && r.labelExpressionInfo.expression;

          return !(!_e31 || !L(_e31)) || !1;
        }

        return "esri.PopupTemplate" === r.declaredClass && !!r.expressionInfos && r.expressionInfos.some(function (e) {
          return L(e.expression);
        });
      }
      /***/

    },

    /***/
    "CHxs":
    /*!****************************************************!*\
      !*** ./node_modules/@arcgis/core/chunks/arcade.js ***!
      \****************************************************/

    /*! exports provided: a, b, c, d, e, f, g, h, i, j, k, l, m, n, o, p, q, r, s, t, u, v, w, x */

    /***/
    function CHxs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "a", function () {
        return C;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "b", function () {
        return R;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "c", function () {
        return F;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "d", function () {
        return H;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "e", function () {
        return M;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "f", function () {
        return V;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "g", function () {
        return Y;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "h", function () {
        return E;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "i", function () {
        return w;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "j", function () {
        return U;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "k", function () {
        return k;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "l", function () {
        return N;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "m", function () {
        return z;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "n", function () {
        return D;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "o", function () {
        return I;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "p", function () {
        return v;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "q", function () {
        return T;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "r", function () {
        return _;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "s", function () {
        return O;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "t", function () {
        return J;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "u", function () {
        return K;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "v", function () {
        return G;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "w", function () {
        return P;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "x", function () {
        return W;
      });
      /* harmony import */


      var _core_has_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ../core/has.js */
      "wSAH");
      /* harmony import */


      var _core_promiseUtils_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ../core/promiseUtils.js */
      "9MzC");
      /* harmony import */


      var _languageUtils_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./languageUtils.js */
      "idrm");
      /* harmony import */


      var _arcade_treeAnalysis_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ../arcade/treeAnalysis.js */
      "k8am");
      /* harmony import */


      var _arcade_arcadeCompiler_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ../arcade/arcadeCompiler.js */
      "ZEcq");
      /* harmony import */


      var _arcade_arcadeRuntime_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ../arcade/arcadeRuntime.js */
      "Bb2f");
      /* harmony import */


      var _arcade_parser_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ../arcade/parser.js */
      "lTJ/");
      /* harmony import */


      var _intl_moment_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! ../intl/moment.js */
      "DJPh");
      /*
      All material copyright ESRI, All Rights Reserved, unless otherwise specified.
      See https://js.arcgis.com/4.18/esri/copyright.txt for details.
      */


      var j = function () {
        if (Object(_core_has_js__WEBPACK_IMPORTED_MODULE_0__["default"])("csp-restrictions")) return !1;

        try {
          return new Function("function* test() {}; return true")();
        } catch (e) {
          return !1;
        }
      }();

      var A = !1,
          x = !1,
          b = null,
          g = [];

      function F(t, r) {
        if (!0 === r.useAsync || !0 === t.isAsync) return function (t, r) {
          if (null === b) throw new Error("Async Arcade must be enabled for this script");

          if (Object(_core_has_js__WEBPACK_IMPORTED_MODULE_0__["default"])("csp-restrictions") || !1 === j) {
            return function (e) {
              return b.executeScript(t, e);
            };
          }

          return Object(_arcade_arcadeCompiler_js__WEBPACK_IMPORTED_MODULE_4__["compileScript"])(t, r, !0);
        }(t, r);

        if (Object(_core_has_js__WEBPACK_IMPORTED_MODULE_0__["default"])("csp-restrictions")) {
          return function (e) {
            return Object(_arcade_arcadeRuntime_js__WEBPACK_IMPORTED_MODULE_5__["executeScript"])(t, e);
          };
        }

        return Object(_arcade_arcadeCompiler_js__WEBPACK_IMPORTED_MODULE_4__["compileScript"])(t, r);
      }

      function E(e) {
        Object(_arcade_arcadeRuntime_js__WEBPACK_IMPORTED_MODULE_5__["extend"])(e), Object(_arcade_arcadeCompiler_js__WEBPACK_IMPORTED_MODULE_4__["extend"])(e, "sync"), null === b ? g.push(e) : (Object(_arcade_arcadeCompiler_js__WEBPACK_IMPORTED_MODULE_4__["extend"])(e, "async"), b.extend(e));
      }

      function v(e) {
        var t = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : [];
        return Object(_arcade_parser_js__WEBPACK_IMPORTED_MODULE_6__["parseScript"])(e, t);
      }

      function G(e, t) {
        var r = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : "";
        return Object(_arcade_parser_js__WEBPACK_IMPORTED_MODULE_6__["validateScript"])(e, t, r);
      }

      function w(e, t, r) {
        var n = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : "";
        return Object(_arcade_parser_js__WEBPACK_IMPORTED_MODULE_6__["scriptCheck"])(e, t, r, n);
      }

      function U(e, t) {
        var r = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : [];
        return M(Object(_arcade_parser_js__WEBPACK_IMPORTED_MODULE_6__["parseScript"])(e, r), t);
      }

      function M(e, t) {
        if (!0 === t.useAsync || !0 === e.isAsync) {
          if (null === b) throw new Error("Async Arcade must be enabled for this script");
          return b.executeScript(e, t);
        }

        return Object(_arcade_arcadeRuntime_js__WEBPACK_IMPORTED_MODULE_5__["executeScript"])(e, t);
      }

      function _(e, t) {
        return Object(_arcade_arcadeRuntime_js__WEBPACK_IMPORTED_MODULE_5__["referencesMember"])(e, t);
      }

      function k(e, t) {
        return Object(_arcade_arcadeRuntime_js__WEBPACK_IMPORTED_MODULE_5__["referencesFunction"])(e, t);
      }

      function C(e) {
        var t = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : !1;
        return Object(_arcade_parser_js__WEBPACK_IMPORTED_MODULE_6__["extractFieldLiterals"])(e);
      }

      function O(e) {
        var t = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : [];
        return void 0 === e.usesGeometry && Object(_arcade_treeAnalysis_js__WEBPACK_IMPORTED_MODULE_3__["findScriptDependencies"])(e, t), !0 === e.usesGeometry;
      }

      var L = null;

      function R() {
        return L || (L = Object(_core_promiseUtils_js__WEBPACK_IMPORTED_MODULE_1__["all"])([Promise.all(
        /*! import() | geometry-geometryEngine-js */
        [__webpack_require__.e("default~chunks-geometryEngineBase-js~geometry-geometryEngine-js~geometry-geometryEngineJSON-js~geome~1472b8fb"), __webpack_require__.e("common"), __webpack_require__.e("geometry-geometryEngine-js")]).then(__webpack_require__.bind(null,
        /*! ../geometry/geometryEngine.js */
        "6lH3")), Promise.resolve().then(__webpack_require__.bind(null,
        /*! ../arcade/functions/geomsync.js */
        "4PGM"))]).then(function (_ref) {
          var _ref2 = _slicedToArray(_ref, 2),
              e = _ref2[0],
              t = _ref2[1];

          return x = !0, t.setGeometryEngine(e), !0;
        }), L);
      }

      var q = null;

      function z() {
        return null !== q || (q = Object(_arcade_arcadeCompiler_js__WEBPACK_IMPORTED_MODULE_4__["enableAsyncSupport"])().then(function () {
          return Promise.all(
          /*! import() | arcade-arcadeAsyncRuntime-js */
          [__webpack_require__.e("default~arcade-arcadeAsyncRuntime-js~functions-geomasync-js"), __webpack_require__.e("arcade-arcadeAsyncRuntime-js")]).then(__webpack_require__.bind(null,
          /*! ../arcade/arcadeAsyncRuntime.js */
          "ME8W"));
        }).then(function (e) {
          b = e;

          var _iterator4 = _createForOfIteratorHelper(g),
              _step4;

          try {
            for (_iterator4.s(); !(_step4 = _iterator4.n()).done;) {
              var _e32 = _step4.value;
              b.extend(_e32), Object(_arcade_arcadeCompiler_js__WEBPACK_IMPORTED_MODULE_4__["extend"])(_e32, "async");
            }
          } catch (err) {
            _iterator4.e(err);
          } finally {
            _iterator4.f();
          }

          return g = null, !0;
        })), q;
      }

      function D() {
        return A;
      }

      function I() {
        return !!b;
      }

      function T() {
        return x;
      }

      var B = null;

      function H() {
        return B || (B = z().then(function () {
          return Object(_core_promiseUtils_js__WEBPACK_IMPORTED_MODULE_1__["all"])([Promise.all(
          /*! import() | arcade-featureSetUtils-js */
          [__webpack_require__.e("default~BingMapsLayer-js~BuildingSceneLayer-js~CSVLayer-js~ElevationLayer-js~FeatureLayer-js~GeoRSSL~17f7a7e8"), __webpack_require__.e("default~BuildingSceneLayer-js~CSVLayer-js~FeatureLayer-js~ImageryLayer-js~ImageryTileLayer-js~KMLLay~c6eed8bf"), __webpack_require__.e("default~BuildingSceneLayer-js~CSVLayer-js~FeatureLayer-js~ImageryLayer-js~ImageryTileLayer-js~KMLLay~166cc929"), __webpack_require__.e("default~BuildingSceneLayer-js~CSVLayer-js~FeatureLayer-js~ImageryLayer-js~ImageryTileLayer-js~KMLLay~253c3a50"), __webpack_require__.e("default~BuildingSceneLayer-js~CSVLayer-js~FeatureLayer-js~KMLLayer-js~MapImageLayer-js~MapNotesLayer~dc20c115"), __webpack_require__.e("default~BuildingSceneLayer-js~CSVLayer-js~FeatureLayer-js~ImageryLayer-js~MapImageLayer-js~MapNotesL~ca7a17ec"), __webpack_require__.e("default~BuildingSceneLayer-js~CSVLayer-js~FeatureLayer-js~MapImageLayer-js~MapNotesLayer-js~RouteLay~17087e09"), __webpack_require__.e("default~arcade-featureSetUtils-js~arcade-functions-featuresetbase-js~layers-FeatureLayerView2D-js~la~310e438a"), __webpack_require__.e("default~arcade-featureSetUtils-js~arcade-functions-featuresetbase-js~arcade-functions-featuresetgeom~0707428b"), __webpack_require__.e("default~BuildingSceneLayer-js~CSVLayer-js~FeatureLayer-js~MapNotesLayer-js~RouteLayer-js~SceneLayer-~7c09c9db"), __webpack_require__.e("default~arcade-featureSetUtils-js~arcade-functions-featuresetbase-js~arcade-functions-featuresetgeom-js"), __webpack_require__.e("default~arcade-featureSetUtils-js~arcade-functions-featuresetbase-js")]).then(__webpack_require__.bind(null,
          /*! ../arcade/featureSetUtils.js */
          "4zW0")), Promise.all(
          /*! import() | arcade-functions-featuresetbase-js */
          [__webpack_require__.e("default~BingMapsLayer-js~BuildingSceneLayer-js~CSVLayer-js~ElevationLayer-js~FeatureLayer-js~GeoRSSL~17f7a7e8"), __webpack_require__.e("default~BuildingSceneLayer-js~CSVLayer-js~FeatureLayer-js~ImageryLayer-js~ImageryTileLayer-js~KMLLay~c6eed8bf"), __webpack_require__.e("default~BuildingSceneLayer-js~CSVLayer-js~FeatureLayer-js~ImageryLayer-js~ImageryTileLayer-js~KMLLay~166cc929"), __webpack_require__.e("default~BuildingSceneLayer-js~CSVLayer-js~FeatureLayer-js~ImageryLayer-js~ImageryTileLayer-js~KMLLay~253c3a50"), __webpack_require__.e("default~BuildingSceneLayer-js~CSVLayer-js~FeatureLayer-js~KMLLayer-js~MapImageLayer-js~MapNotesLayer~dc20c115"), __webpack_require__.e("default~BuildingSceneLayer-js~CSVLayer-js~FeatureLayer-js~ImageryLayer-js~MapImageLayer-js~MapNotesL~ca7a17ec"), __webpack_require__.e("default~BuildingSceneLayer-js~CSVLayer-js~FeatureLayer-js~MapImageLayer-js~MapNotesLayer-js~RouteLay~17087e09"), __webpack_require__.e("default~arcade-featureSetUtils-js~arcade-functions-featuresetbase-js~layers-FeatureLayerView2D-js~la~310e438a"), __webpack_require__.e("default~arcade-featureSetUtils-js~arcade-functions-featuresetbase-js~arcade-functions-featuresetgeom~0707428b"), __webpack_require__.e("default~BuildingSceneLayer-js~CSVLayer-js~FeatureLayer-js~MapNotesLayer-js~RouteLayer-js~SceneLayer-~7c09c9db"), __webpack_require__.e("default~arcade-featureSetUtils-js~arcade-functions-featuresetbase-js~arcade-functions-featuresetgeom-js"), __webpack_require__.e("default~arcade-featureSetUtils-js~arcade-functions-featuresetbase-js"), __webpack_require__.e("arcade-functions-featuresetbase-js")]).then(__webpack_require__.bind(null,
          /*! ../arcade/functions/featuresetbase.js */
          "CBYW")), Promise.all(
          /*! import() | arcade-functions-featuresetgeom-js */
          [__webpack_require__.e("default~arcade-featureSetUtils-js~arcade-functions-featuresetbase-js~arcade-functions-featuresetgeom~0707428b"), __webpack_require__.e("default~arcade-featureSetUtils-js~arcade-functions-featuresetbase-js~arcade-functions-featuresetgeom-js"), __webpack_require__.e("arcade-functions-featuresetgeom-js")]).then(__webpack_require__.bind(null,
          /*! ../arcade/functions/featuresetgeom.js */
          "Vr/A")), Promise.all(
          /*! import() | arcade-functions-featuresetstats-js */
          [__webpack_require__.e("default~arcade-featureSetUtils-js~arcade-functions-featuresetbase-js~arcade-functions-featuresetgeom~0707428b"), __webpack_require__.e("arcade-functions-featuresetstats-js")]).then(__webpack_require__.bind(null,
          /*! ../arcade/functions/featuresetstats.js */
          "CNB1")), __webpack_require__.e(
          /*! import() | arcade-functions-featuresetstring-js */
          "arcade-functions-featuresetstring-js").then(__webpack_require__.bind(null,
          /*! ../arcade/functions/featuresetstring.js */
          "U+Rd"))]).then(function (_ref3) {
            var _ref4 = _slicedToArray(_ref3, 5),
                e = _ref4[0],
                t = _ref4[1],
                r = _ref4[2],
                n = _ref4[3],
                s = _ref4[4];

            return Q = e, b.extend([t, r, n, s]), Object(_arcade_arcadeCompiler_js__WEBPACK_IMPORTED_MODULE_4__["extend"])([t, r, n, s], "async"), A = !0, !0;
          });
        }), B);
      }

      function J(e) {
        var t = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : [];
        return void 0 === e.usesFeatureSet && Object(_arcade_treeAnalysis_js__WEBPACK_IMPORTED_MODULE_3__["findScriptDependencies"])(e, t), !0 === e.usesFeatureSet;
      }

      function K(e) {
        var t = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : [];
        return void 0 === e.isAsync && Object(_arcade_treeAnalysis_js__WEBPACK_IMPORTED_MODULE_3__["findScriptDependencies"])(e, t), !0 === e.isAsync;
      }

      function N(e, n) {
        var s = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : [];
        var i = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : !1;
        return Object(_core_promiseUtils_js__WEBPACK_IMPORTED_MODULE_1__["create"])(function (r, u) {
          var c = "string" == typeof e ? v(e) : e,
              o = [];
          o.push(W()), c && (!1 === T() && (O(c) || i) && o.push(R()), !1 === I() && (!0 === c.isAsync || n) && o.push(z()), !1 === D() && (J(c) || function (e, t) {
            if (t) {
              var _iterator5 = _createForOfIteratorHelper(t),
                  _step5;

              try {
                for (_iterator5.s(); !(_step5 = _iterator5.n()).done;) {
                  var _r26 = _step5.value;
                  if (_(e, _r26)) return !0;
                }
              } catch (err) {
                _iterator5.e(err);
              } finally {
                _iterator5.f();
              }

              return !1;
            }

            return !1;
          }(c, s)) && o.push(H())), o ? Object(_core_promiseUtils_js__WEBPACK_IMPORTED_MODULE_1__["all"])(o).then(function () {
            r(!0);
          }, u) : r(!0);
        });
      }

      function P(e) {
        if (O(e)) return !0;
        var t = Object(_arcade_treeAnalysis_js__WEBPACK_IMPORTED_MODULE_3__["findFunctionCalls"])(e);
        return t.indexOf("geometry") > -1 || t.indexOf("feature") > -1;
      }

      var Q = null;

      function V() {
        return Q;
      }

      function W() {
        return null !== X || (X = Object(_intl_moment_js__WEBPACK_IMPORTED_MODULE_7__["loadMoment"])().then(function (e) {
          return _languageUtils_js__WEBPACK_IMPORTED_MODULE_2__["M"].Moment = e, !0;
        })), X;
      }

      var X = null;
      var Y = Object.freeze({
        __proto__: null,
        compileScript: F,
        extend: E,
        parseScript: v,
        validateScript: G,
        scriptCheck: w,
        parseAndExecuteScript: U,
        executeScript: M,
        referencesMember: _,
        referencesFunction: k,
        extractFieldLiterals: C,
        scriptUsesGeometryEngine: O,
        enableGeometrySupport: R,
        enableAsyncSupport: z,
        isFeatureSetSupportEnabled: D,
        isAsyncEnabled: I,
        isGeometryEnabled: T,
        enableFeatureSetSupport: H,
        scriptUsesFeatureSet: J,
        scriptIsAsync: K,
        loadScriptDependencies: N,
        scriptTouchesGeometry: P,
        featureSetUtils: V,
        load: W
      });
      /***/
    },

    /***/
    "D5C5":
    /*!********************************************************!*\
      !*** ./node_modules/@arcgis/core/arcade/Dictionary.js ***!
      \********************************************************/

    /*! exports provided: default */

    /***/
    function D5C5(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony import */


      var _geometry_Geometry_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ../geometry/Geometry.js */
      "N2DF");
      /* harmony import */


      var _ImmutableArray_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./ImmutableArray.js */
      "qea6");
      /* harmony import */


      var _chunks_languageUtils_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ../chunks/languageUtils.js */
      "idrm");
      /*
      All material copyright ESRI, All Rights Reserved, unless otherwise specified.
      See https://js.arcgis.com/4.18/esri/copyright.txt for details.
      */


      function b(t) {
        var s = null;
        if (null === t) ;else if (Object(_chunks_languageUtils_js__WEBPACK_IMPORTED_MODULE_2__["a"])(t)) s = Object(_chunks_languageUtils_js__WEBPACK_IMPORTED_MODULE_2__["c"])(t);else if (Object(_chunks_languageUtils_js__WEBPACK_IMPORTED_MODULE_2__["i"])(t)) s = Object(_chunks_languageUtils_js__WEBPACK_IMPORTED_MODULE_2__["d"])(t);else if (Object(_chunks_languageUtils_js__WEBPACK_IMPORTED_MODULE_2__["b"])(t)) s = Object(_chunks_languageUtils_js__WEBPACK_IMPORTED_MODULE_2__["e"])(t);else if (Object(_chunks_languageUtils_js__WEBPACK_IMPORTED_MODULE_2__["f"])(t)) s = Object(_chunks_languageUtils_js__WEBPACK_IMPORTED_MODULE_2__["g"])(t);else if (Object(_chunks_languageUtils_js__WEBPACK_IMPORTED_MODULE_2__["h"])(t)) {
          s = [];

          var _iterator6 = _createForOfIteratorHelper(t),
              _step6;

          try {
            for (_iterator6.s(); !(_step6 = _iterator6.n()).done;) {
              var i = _step6.value;
              s.push(b(i));
            }
          } catch (err) {
            _iterator6.e(err);
          } finally {
            _iterator6.f();
          }
        } else {
          if (0 === Object.keys(t).length) return null;

          var _i2 = new h();

          _i2.immutable = !1;

          for (var _i3 = 0, _Object$keys = Object.keys(t); _i3 < _Object$keys.length; _i3++) {
            var _s5 = _Object$keys[_i3];
            var e = t[_s5];
            void 0 !== e && _i2.setField(_s5, b(e));
          }

          _i2.immutable = !0, s = _i2;
        }
        return s;
      }

      var h = /*#__PURE__*/function () {
        function h(t) {
          _classCallCheck(this, h);

          this.declaredClass = "esri.arcade.Dictionary", this.attributes = null, this.plain = !1, this.immutable = !0, this.attributes = t instanceof h ? t.attributes : null == t ? {} : t;
        }

        _createClass(h, [{
          key: "field",
          value: function field(t) {
            var s = t.toLowerCase(),
                i = this.attributes[t];
            if (void 0 !== i) return i;

            for (var _t29 in this.attributes) {
              if (_t29.toLowerCase() === s) return this.attributes[_t29];
            }

            throw new Error("Field not Found : " + t);
          }
        }, {
          key: "setField",
          value: function setField(t, s) {
            if (this.immutable) throw new Error("Dictionary is Immutable");
            var i = t.toLowerCase();

            if (void 0 === this.attributes[t]) {
              for (var _t30 in this.attributes) {
                if (_t30.toLowerCase() === i) return void (this.attributes[_t30] = s);
              }

              this.attributes[t] = s;
            } else this.attributes[t] = s;
          }
        }, {
          key: "hasField",
          value: function hasField(t) {
            var s = t.toLowerCase();
            if (void 0 !== this.attributes[t]) return !0;

            for (var _t31 in this.attributes) {
              if (_t31.toLowerCase() === s) return !0;
            }

            return !1;
          }
        }, {
          key: "keys",
          value: function keys() {
            var t = [];

            for (var s in this.attributes) {
              t.push(s);
            }

            return t = t.sort(), t;
          }
        }, {
          key: "castToText",
          value: function castToText() {
            var n = "";

            for (var a in this.attributes) {
              "" !== n && (n += ",");
              var u = this.attributes[a];
              null == u ? n += JSON.stringify(a) + ":null" : Object(_chunks_languageUtils_js__WEBPACK_IMPORTED_MODULE_2__["i"])(u) || Object(_chunks_languageUtils_js__WEBPACK_IMPORTED_MODULE_2__["a"])(u) || Object(_chunks_languageUtils_js__WEBPACK_IMPORTED_MODULE_2__["b"])(u) ? n += JSON.stringify(a) + ":" + JSON.stringify(u) : u instanceof _geometry_Geometry_js__WEBPACK_IMPORTED_MODULE_0__["default"] || u instanceof _ImmutableArray_js__WEBPACK_IMPORTED_MODULE_1__["default"] || u instanceof Array ? n += JSON.stringify(a) + ":" + Object(_chunks_languageUtils_js__WEBPACK_IMPORTED_MODULE_2__["t"])(u) : u instanceof Date ? n += JSON.stringify(a) + ":" + JSON.stringify(u) : null !== u && "object" == typeof u && void 0 !== u.castToText && (n += JSON.stringify(a) + ":" + u.castToText());
            }

            return "{" + n + "}";
          }
        }], [{
          key: "convertObjectToArcadeDictionary",
          value: function convertObjectToArcadeDictionary(t) {
            var s = new h();
            s.immutable = !1;

            for (var i in t) {
              var e = t[i];
              void 0 !== e && s.setField(i.toString(), b(e));
            }

            return s.immutable = !0, s;
          }
        }]);

        return h;
      }();
      /* harmony default export */


      __webpack_exports__["default"] = h;
      /***/
    },

    /***/
    "DJPh":
    /*!**************************************************!*\
      !*** ./node_modules/@arcgis/core/intl/moment.js ***!
      \**************************************************/

    /*! exports provided: loadMoment */

    /***/
    function DJPh(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "loadMoment", function () {
        return e;
      });
      /* harmony import */


      var _locale_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ./locale.js */
      "IDUf");
      /*
      All material copyright ESRI, All Rights Reserved, unless otherwise specified.
      See https://js.arcgis.com/4.18/esri/copyright.txt for details.
      */


      var m = new Map([["ar", function () {
        return __webpack_require__.e(
        /*! import() | moment-locale-ar-js */
        "moment-moment-js").then(__webpack_require__.t.bind(null,
        /*! moment/locale/ar.js */
        "jnO4", 7));
      }], ["ar-dz", function () {
        return __webpack_require__.e(
        /*! import() | moment-locale-ar-dz-js */
        "moment-moment-js").then(__webpack_require__.t.bind(null,
        /*! moment/locale/ar-dz.js */
        "o1bE", 7));
      }], ["ar-kw", function () {
        return __webpack_require__.e(
        /*! import() | moment-locale-ar-kw-js */
        "moment-moment-js").then(__webpack_require__.t.bind(null,
        /*! moment/locale/ar-kw.js */
        "Qj4J", 7));
      }], ["ar-ly", function () {
        return __webpack_require__.e(
        /*! import() | moment-locale-ar-ly-js */
        "moment-moment-js").then(__webpack_require__.t.bind(null,
        /*! moment/locale/ar-ly.js */
        "HP3h", 7));
      }], ["ar-ma", function () {
        return __webpack_require__.e(
        /*! import() | moment-locale-ar-ma-js */
        "moment-moment-js").then(__webpack_require__.t.bind(null,
        /*! moment/locale/ar-ma.js */
        "CoRJ", 7));
      }], ["ar-sa", function () {
        return __webpack_require__.e(
        /*! import() | moment-locale-ar-sa-js */
        "moment-moment-js").then(__webpack_require__.t.bind(null,
        /*! moment/locale/ar-sa.js */
        "gjCT", 7));
      }], ["ar-tn", function () {
        return __webpack_require__.e(
        /*! import() | moment-locale-ar-tn-js */
        "moment-moment-js").then(__webpack_require__.t.bind(null,
        /*! moment/locale/ar-tn.js */
        "bYM6", 7));
      }], ["bs", function () {
        return __webpack_require__.e(
        /*! import() | moment-locale-bs-js */
        "moment-moment-js").then(__webpack_require__.t.bind(null,
        /*! moment/locale/bs.js */
        "JVSJ", 7));
      }], ["ca", function () {
        return __webpack_require__.e(
        /*! import() | moment-locale-ca-js */
        "moment-moment-js").then(__webpack_require__.t.bind(null,
        /*! moment/locale/ca.js */
        "1xZ4", 7));
      }], ["cs", function () {
        return __webpack_require__.e(
        /*! import() | moment-locale-cs-js */
        "moment-moment-js").then(__webpack_require__.t.bind(null,
        /*! moment/locale/cs.js */
        "PA2r", 7));
      }], ["da", function () {
        return __webpack_require__.e(
        /*! import() | moment-locale-da-js */
        "moment-moment-js").then(__webpack_require__.t.bind(null,
        /*! moment/locale/da.js */
        "DxQv", 7));
      }], ["de", function () {
        return __webpack_require__.e(
        /*! import() | moment-locale-de-js */
        "moment-moment-js").then(__webpack_require__.t.bind(null,
        /*! moment/locale/de.js */
        "tGlX", 7));
      }], ["de-at", function () {
        return __webpack_require__.e(
        /*! import() | moment-locale-de-at-js */
        "moment-moment-js").then(__webpack_require__.t.bind(null,
        /*! moment/locale/de-at.js */
        "s+uk", 7));
      }], ["de-ch", function () {
        return __webpack_require__.e(
        /*! import() | moment-locale-de-ch-js */
        "moment-moment-js").then(__webpack_require__.t.bind(null,
        /*! moment/locale/de-ch.js */
        "u3GI", 7));
      }], ["el", function () {
        return __webpack_require__.e(
        /*! import() | moment-locale-el-js */
        "moment-moment-js").then(__webpack_require__.t.bind(null,
        /*! moment/locale/el.js */
        "jUeY", 7));
      }], ["en-au", function () {
        return __webpack_require__.e(
        /*! import() | moment-locale-en-au-js */
        "moment-moment-js").then(__webpack_require__.t.bind(null,
        /*! moment/locale/en-au.js */
        "Dmvi", 7));
      }], ["en-ca", function () {
        return __webpack_require__.e(
        /*! import() | moment-locale-en-ca-js */
        "moment-moment-js").then(__webpack_require__.t.bind(null,
        /*! moment/locale/en-ca.js */
        "OIYi", 7));
      }], ["en-gb", function () {
        return __webpack_require__.e(
        /*! import() | moment-locale-en-gb-js */
        "moment-moment-js").then(__webpack_require__.t.bind(null,
        /*! moment/locale/en-gb.js */
        "Oaa7", 7));
      }], ["en-ie", function () {
        return __webpack_require__.e(
        /*! import() | moment-locale-en-ie-js */
        "moment-moment-js").then(__webpack_require__.t.bind(null,
        /*! moment/locale/en-ie.js */
        "4dOw", 7));
      }], ["en-il", function () {
        return __webpack_require__.e(
        /*! import() | moment-locale-en-il-js */
        "moment-moment-js").then(__webpack_require__.t.bind(null,
        /*! moment/locale/en-il.js */
        "czMo", 7));
      }], ["en-in", function () {
        return __webpack_require__.e(
        /*! import() | moment-locale-en-in-js */
        "moment-moment-js").then(__webpack_require__.t.bind(null,
        /*! moment/locale/en-in.js */
        "7C5Q", 7));
      }], ["en-nz", function () {
        return __webpack_require__.e(
        /*! import() | moment-locale-en-nz-js */
        "moment-moment-js").then(__webpack_require__.t.bind(null,
        /*! moment/locale/en-nz.js */
        "b1Dy", 7));
      }], ["en-sg", function () {
        return __webpack_require__.e(
        /*! import() | moment-locale-en-sg-js */
        "moment-moment-js").then(__webpack_require__.t.bind(null,
        /*! moment/locale/en-sg.js */
        "t+mt", 7));
      }], ["es", function () {
        return __webpack_require__.e(
        /*! import() | moment-locale-es-js */
        "moment-moment-js").then(__webpack_require__.t.bind(null,
        /*! moment/locale/es.js */
        "iYuL", 7));
      }], ["es-do", function () {
        return __webpack_require__.e(
        /*! import() | moment-locale-es-do-js */
        "moment-moment-js").then(__webpack_require__.t.bind(null,
        /*! moment/locale/es-do.js */
        "CjzT", 7));
      }], ["es-mx", function () {
        return __webpack_require__.e(
        /*! import() | moment-locale-es-mx-js */
        "moment-moment-js").then(__webpack_require__.t.bind(null,
        /*! moment/locale/es-mx.js */
        "tbfe", 7));
      }], ["es-us", function () {
        return __webpack_require__.e(
        /*! import() | moment-locale-es-us-js */
        "moment-moment-js").then(__webpack_require__.t.bind(null,
        /*! moment/locale/es-us.js */
        "Vclq", 7));
      }], ["et", function () {
        return __webpack_require__.e(
        /*! import() | moment-locale-et-js */
        "moment-moment-js").then(__webpack_require__.t.bind(null,
        /*! moment/locale/et.js */
        "7BjC", 7));
      }], ["fi", function () {
        return __webpack_require__.e(
        /*! import() | moment-locale-fi-js */
        "moment-moment-js").then(__webpack_require__.t.bind(null,
        /*! moment/locale/fi.js */
        "gekB", 7));
      }], ["fr", function () {
        return __webpack_require__.e(
        /*! import() | moment-locale-fr-js */
        "moment-moment-js").then(__webpack_require__.t.bind(null,
        /*! moment/locale/fr.js */
        "nyYc", 7));
      }], ["fr-ca", function () {
        return __webpack_require__.e(
        /*! import() | moment-locale-fr-ca-js */
        "moment-moment-js").then(__webpack_require__.t.bind(null,
        /*! moment/locale/fr-ca.js */
        "2fjn", 7));
      }], ["fr-ch", function () {
        return __webpack_require__.e(
        /*! import() | moment-locale-fr-ch-js */
        "moment-moment-js").then(__webpack_require__.t.bind(null,
        /*! moment/locale/fr-ch.js */
        "Dkky", 7));
      }], ["he", function () {
        return __webpack_require__.e(
        /*! import() | moment-locale-he-js */
        "moment-moment-js").then(__webpack_require__.t.bind(null,
        /*! moment/locale/he.js */
        "x6pH", 7));
      }], ["hr", function () {
        return __webpack_require__.e(
        /*! import() | moment-locale-hr-js */
        "moment-moment-js").then(__webpack_require__.t.bind(null,
        /*! moment/locale/hr.js */
        "S6ln", 7));
      }], ["hu", function () {
        return __webpack_require__.e(
        /*! import() | moment-locale-hu-js */
        "moment-moment-js").then(__webpack_require__.t.bind(null,
        /*! moment/locale/hu.js */
        "WxRl", 7));
      }], ["id", function () {
        return __webpack_require__.e(
        /*! import() | moment-locale-id-js */
        "moment-moment-js").then(__webpack_require__.t.bind(null,
        /*! moment/locale/id.js */
        "UDhR", 7));
      }], ["it", function () {
        return __webpack_require__.e(
        /*! import() | moment-locale-it-js */
        "moment-moment-js").then(__webpack_require__.t.bind(null,
        /*! moment/locale/it.js */
        "bpih", 7));
      }], ["it-ch", function () {
        return __webpack_require__.e(
        /*! import() | moment-locale-it-ch-js */
        "moment-moment-js").then(__webpack_require__.t.bind(null,
        /*! moment/locale/it-ch.js */
        "bxKX", 7));
      }], ["ja", function () {
        return __webpack_require__.e(
        /*! import() | moment-locale-ja-js */
        "moment-moment-js").then(__webpack_require__.t.bind(null,
        /*! moment/locale/ja.js */
        "B55N", 7));
      }], ["ko", function () {
        return __webpack_require__.e(
        /*! import() | moment-locale-ko-js */
        "moment-moment-js").then(__webpack_require__.t.bind(null,
        /*! moment/locale/ko.js */
        "Ivi+", 7));
      }], ["lt", function () {
        return __webpack_require__.e(
        /*! import() | moment-locale-lt-js */
        "moment-moment-js").then(__webpack_require__.t.bind(null,
        /*! moment/locale/lt.js */
        "JvlW", 7));
      }], ["lv", function () {
        return __webpack_require__.e(
        /*! import() | moment-locale-lv-js */
        "moment-moment-js").then(__webpack_require__.t.bind(null,
        /*! moment/locale/lv.js */
        "uXwI", 7));
      }], ["nb", function () {
        return __webpack_require__.e(
        /*! import() | moment-locale-nb-js */
        "moment-moment-js").then(__webpack_require__.t.bind(null,
        /*! moment/locale/nb.js */
        "bOMt", 7));
      }], ["nl", function () {
        return __webpack_require__.e(
        /*! import() | moment-locale-nl-js */
        "moment-moment-js").then(__webpack_require__.t.bind(null,
        /*! moment/locale/nl.js */
        "+s0g", 7));
      }], ["nl-be", function () {
        return __webpack_require__.e(
        /*! import() | moment-locale-nl-be-js */
        "moment-moment-js").then(__webpack_require__.t.bind(null,
        /*! moment/locale/nl-be.js */
        "2ykv", 7));
      }], ["pl", function () {
        return __webpack_require__.e(
        /*! import() | moment-locale-pl-js */
        "moment-moment-js").then(__webpack_require__.t.bind(null,
        /*! moment/locale/pl.js */
        "jVdC", 7));
      }], ["pt", function () {
        return __webpack_require__.e(
        /*! import() | moment-locale-pt-js */
        "moment-moment-js").then(__webpack_require__.t.bind(null,
        /*! moment/locale/pt.js */
        "8mBD", 7));
      }], ["pt-br", function () {
        return __webpack_require__.e(
        /*! import() | moment-locale-pt-br-js */
        "moment-moment-js").then(__webpack_require__.t.bind(null,
        /*! moment/locale/pt-br.js */
        "0tRk", 7));
      }], ["ro", function () {
        return __webpack_require__.e(
        /*! import() | moment-locale-ro-js */
        "moment-moment-js").then(__webpack_require__.t.bind(null,
        /*! moment/locale/ro.js */
        "lyxo", 7));
      }], ["ru", function () {
        return __webpack_require__.e(
        /*! import() | moment-locale-ru-js */
        "moment-moment-js").then(__webpack_require__.t.bind(null,
        /*! moment/locale/ru.js */
        "lXzo", 7));
      }], ["sk", function () {
        return __webpack_require__.e(
        /*! import() | moment-locale-sk-js */
        "moment-moment-js").then(__webpack_require__.t.bind(null,
        /*! moment/locale/sk.js */
        "e+ae", 7));
      }], ["sl", function () {
        return __webpack_require__.e(
        /*! import() | moment-locale-sl-js */
        "moment-moment-js").then(__webpack_require__.t.bind(null,
        /*! moment/locale/sl.js */
        "gVVK", 7));
      }], ["sr", function () {
        return __webpack_require__.e(
        /*! import() | moment-locale-sr-js */
        "moment-moment-js").then(__webpack_require__.t.bind(null,
        /*! moment/locale/sr.js */
        "zx6S", 7));
      }], ["sr-cyrl", function () {
        return __webpack_require__.e(
        /*! import() | moment-locale-sr-cyrl-js */
        "moment-moment-js").then(__webpack_require__.t.bind(null,
        /*! moment/locale/sr-cyrl.js */
        "E+lV", 7));
      }], ["sv", function () {
        return __webpack_require__.e(
        /*! import() | moment-locale-sv-js */
        "moment-moment-js").then(__webpack_require__.t.bind(null,
        /*! moment/locale/sv.js */
        "X709", 7));
      }], ["th", function () {
        return __webpack_require__.e(
        /*! import() | moment-locale-th-js */
        "moment-moment-js").then(__webpack_require__.t.bind(null,
        /*! moment/locale/th.js */
        "EOgW", 7));
      }], ["tr", function () {
        return __webpack_require__.e(
        /*! import() | moment-locale-tr-js */
        "moment-moment-js").then(__webpack_require__.t.bind(null,
        /*! moment/locale/tr.js */
        "DoHr", 7));
      }], ["uk", function () {
        return __webpack_require__.e(
        /*! import() | moment-locale-uk-js */
        "moment-moment-js").then(__webpack_require__.t.bind(null,
        /*! moment/locale/uk.js */
        "raLr", 7));
      }], ["vi", function () {
        return __webpack_require__.e(
        /*! import() | moment-locale-vi-js */
        "moment-moment-js").then(__webpack_require__.t.bind(null,
        /*! moment/locale/vi.js */
        "KSF8", 7));
      }], ["zh-cn", function () {
        return __webpack_require__.e(
        /*! import() | moment-locale-zh-cn-js */
        "moment-moment-js").then(__webpack_require__.t.bind(null,
        /*! moment/locale/zh-cn.js */
        "XDpg", 7));
      }], ["zh-hk", function () {
        return __webpack_require__.e(
        /*! import() | moment-locale-zh-hk-js */
        "moment-moment-js").then(__webpack_require__.t.bind(null,
        /*! moment/locale/zh-hk.js */
        "SatO", 7));
      }], ["zh-mo", function () {
        return __webpack_require__.e(
        /*! import() | moment-locale-zh-mo-js */
        "moment-moment-js").then(__webpack_require__.t.bind(null,
        /*! moment/locale/zh-mo.js */
        "OmwH", 7));
      }], ["zh-tw", function () {
        return __webpack_require__.e(
        /*! import() | moment-locale-zh-tw-js */
        "moment-moment-js").then(__webpack_require__.t.bind(null,
        /*! moment/locale/zh-tw.js */
        "kOpN", 7));
      }]]);

      function e() {
        return _e33.apply(this, arguments);
      }
      /***/


      function _e33() {
        _e33 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
          var e,
              t,
              l,
              o,
              _args = arguments;
          return regeneratorRuntime.wrap(function _callee$(_context) {
            while (1) {
              switch (_context.prev = _context.next) {
                case 0:
                  e = _args.length > 0 && _args[0] !== undefined ? _args[0] : Object(_locale_js__WEBPACK_IMPORTED_MODULE_0__["getLocale"])();
                  _context.next = 3;
                  return __webpack_require__.e(
                  /*! import() | moment-moment-js */
                  "moment-moment-js").then(__webpack_require__.t.bind(null,
                  /*! moment/moment.js */
                  "wd/R", 7));

                case 3:
                  t = _context.sent["default"];
                  l = m.has(e);

                  if (!l) {
                    o = e.split("-");
                    o.length > 1 && m.has(o[0]) && (e = o[0], l = !0);
                  }

                  if (!l) {
                    _context.next = 11;
                    break;
                  }

                  _context.next = 9;
                  return m.get(e)();

                case 9:
                  _context.next = 12;
                  break;

                case 11:
                  e = "en";

                case 12:
                  e !== t.locale() && t.locale(e);
                  return _context.abrupt("return", t);

                case 14:
                case "end":
                  return _context.stop();
              }
            }
          }, _callee);
        }));
        return _e33.apply(this, arguments);
      }
    },

    /***/
    "F0hv":
    /*!********************************************************!*\
      !*** ./node_modules/@arcgis/core/arcade/lib/assert.js ***!
      \********************************************************/

    /*! exports provided: assert */

    /***/
    function F0hv(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "assert", function () {
        return r;
      });
      /*
      All material copyright ESRI, All Rights Reserved, unless otherwise specified.
      See https://js.arcgis.com/4.18/esri/copyright.txt for details.
      */


      function r(r, o) {
        if (!r) throw new Error("ASSERT: " + o);
      }
      /***/

    },

    /***/
    "Fany":
    /*!*******************************************************!*\
      !*** ./node_modules/@arcgis/core/arcade/lib/token.js ***!
      \*******************************************************/

    /*! exports provided: TokenName */

    /***/
    function Fany(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "TokenName", function () {
        return e;
      });
      /*
      All material copyright ESRI, All Rights Reserved, unless otherwise specified.
      See https://js.arcgis.com/4.18/esri/copyright.txt for details.
      */


      var e = {
        1: "Boolean",
        2: "<end>",
        3: "Identifier",
        4: "Keyword",
        5: "Null",
        6: "Numeric",
        7: "Punctuator",
        8: "String",
        9: "RegularExpression",
        10: "Template"
      };
      /***/
    },

    /***/
    "IqHt":
    /*!*************************************************************!*\
      !*** ./node_modules/@arcgis/core/arcade/functions/stats.js ***!
      \*************************************************************/

    /*! exports provided: registerFunctions */

    /***/
    function IqHt(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "registerFunctions", function () {
        return o;
      });
      /* harmony import */


      var _chunks_languageUtils_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ../../chunks/languageUtils.js */
      "idrm");
      /* harmony import */


      var _fieldStats_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./fieldStats.js */
      "kqd7");
      /*
      All material copyright ESRI, All Rights Reserved, unless otherwise specified.
      See https://js.arcgis.com/4.18/esri/copyright.txt for details.
      */


      function i(n, r, i, o) {
        if (1 === o.length) {
          if (Object(_chunks_languageUtils_js__WEBPACK_IMPORTED_MODULE_0__["h"])(o[0])) return Object(_fieldStats_js__WEBPACK_IMPORTED_MODULE_1__["calculateStat"])(n, o[0], -1);
          if (Object(_chunks_languageUtils_js__WEBPACK_IMPORTED_MODULE_0__["o"])(o[0])) return Object(_fieldStats_js__WEBPACK_IMPORTED_MODULE_1__["calculateStat"])(n, o[0].toArray(), -1);
        }

        return Object(_fieldStats_js__WEBPACK_IMPORTED_MODULE_1__["calculateStat"])(n, o, -1);
      }

      function o(e, o) {
        e.stdev = function (n, t) {
          return o(n, t, function (n, t, r) {
            return i("stdev", 0, 0, r);
          });
        }, e.variance = function (n, t) {
          return o(n, t, function (n, t, r) {
            return i("variance", 0, 0, r);
          });
        }, e.average = function (n, t) {
          return o(n, t, function (n, t, r) {
            return i("mean", 0, 0, r);
          });
        }, e.mean = function (n, t) {
          return o(n, t, function (n, t, r) {
            return i("mean", 0, 0, r);
          });
        }, e.sum = function (n, t) {
          return o(n, t, function (n, t, r) {
            return i("sum", 0, 0, r);
          });
        }, e.min = function (n, t) {
          return o(n, t, function (n, t, r) {
            return i("min", 0, 0, r);
          });
        }, e.max = function (n, t) {
          return o(n, t, function (n, t, r) {
            return i("max", 0, 0, r);
          });
        }, e.distinct = function (n, t) {
          return o(n, t, function (n, t, r) {
            return i("distinct", 0, 0, r);
          });
        }, e.count = function (e, i) {
          return o(e, i, function (e, i, o) {
            if (Object(_chunks_languageUtils_js__WEBPACK_IMPORTED_MODULE_0__["p"])(o, 1, 1), Object(_chunks_languageUtils_js__WEBPACK_IMPORTED_MODULE_0__["h"])(o[0]) || Object(_chunks_languageUtils_js__WEBPACK_IMPORTED_MODULE_0__["b"])(o[0])) return o[0].length;
            if (Object(_chunks_languageUtils_js__WEBPACK_IMPORTED_MODULE_0__["o"])(o[0])) return o[0].length();
            throw new Error("Invalid Parameters for Count");
          });
        };
      }
      /***/

    },

    /***/
    "Irdf":
    /*!***************************************************************!*\
      !*** ./node_modules/@arcgis/core/arcade/lib/error-handler.js ***!
      \***************************************************************/

    /*! exports provided: ErrorHandler */

    /***/
    function Irdf(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ErrorHandler", function () {
        return r;
      });
      /*
      All material copyright ESRI, All Rights Reserved, unless otherwise specified.
      See https://js.arcgis.com/4.18/esri/copyright.txt for details.
      */


      var r = /*#__PURE__*/function () {
        function r() {
          _classCallCheck(this, r);

          this.errors = [], this.tolerant = !1;
        }

        _createClass(r, [{
          key: "recordError",
          value: function recordError(_r27) {
            this.errors.push(_r27);
          }
        }, {
          key: "tolerate",
          value: function tolerate(_r28) {
            if (!this.tolerant) throw _r28;
            this.recordError(_r28);
          }
        }, {
          key: "constructError",
          value: function constructError(_r29, t) {
            var e = new Error(_r29);

            try {
              throw e;
            } catch (_r30) {
              Object.create && Object.defineProperty && (e = Object.create(_r30), Object.defineProperty(e, "column", {
                value: t
              }));
            }

            return e;
          }
        }, {
          key: "createError",
          value: function createError(_r31, t, e, o) {
            var c = "Line " + t + ": " + o,
                s = this.constructError(c, e);
            return s.index = _r31, s.lineNumber = t, s.description = o, s;
          }
        }, {
          key: "throwError",
          value: function throwError(_r32, t, e, o) {
            throw this.createError(_r32, t, e, o);
          }
        }, {
          key: "tolerateError",
          value: function tolerateError(_r33, t, e, o) {
            var c = this.createError(_r33, t, e, o);
            if (!this.tolerant) throw c;
            this.recordError(c);
          }
        }]);

        return r;
      }();
      /***/

    },

    /***/
    "KvhC":
    /*!****************************************************************!*\
      !*** ./node_modules/@arcgis/core/arcade/functions/geometry.js ***!
      \****************************************************************/

    /*! exports provided: registerFunctions */

    /***/
    function KvhC(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "registerFunctions", function () {
        return D;
      });
      /* harmony import */


      var _geometry_Geometry_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ../../geometry/Geometry.js */
      "N2DF");
      /* harmony import */


      var _geometry_Point_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ../../geometry/Point.js */
      "SuVq");
      /* harmony import */


      var _geometry_Extent_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ../../geometry/Extent.js */
      "OvF4");
      /* harmony import */


      var _geometry_Multipoint_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ../../geometry/Multipoint.js */
      "V9wi");
      /* harmony import */


      var _geometry_support_coordsUtils_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ../../geometry/support/coordsUtils.js */
      "Mu3I");
      /* harmony import */


      var _geometry_Polygon_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ../../geometry/Polygon.js */
      "Ehki");
      /* harmony import */


      var _geometry_Polyline_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ../../geometry/Polyline.js */
      "UhwK");
      /* harmony import */


      var _geometry_support_jsonUtils_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! ../../geometry/support/jsonUtils.js */
      "qatw");
      /* harmony import */


      var _ImmutablePointArray_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! ../ImmutablePointArray.js */
      "Q2u5");
      /* harmony import */


      var _chunks_languageUtils_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! ../../chunks/languageUtils.js */
      "idrm");
      /* harmony import */


      var _Dictionary_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
      /*! ../Dictionary.js */
      "D5C5");
      /* harmony import */


      var _Feature_js__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
      /*! ../Feature.js */
      "Xrjs");
      /* harmony import */


      var _centroid_js__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
      /*! ./centroid.js */
      "3xY4");
      /*
      All material copyright ESRI, All Rights Reserved, unless otherwise specified.
      See https://js.arcgis.com/4.18/esri/copyright.txt for details.
      */


      function D(D, P) {
        D.ringisclockwise = function (e, n) {
          return P(e, n, function (e, n, t) {
            Object(_chunks_languageUtils_js__WEBPACK_IMPORTED_MODULE_9__["p"])(t, 1, 1);
            var o = [],
                a = !1,
                l = !1;
            if (null === t[0]) return !1;

            if (Object(_chunks_languageUtils_js__WEBPACK_IMPORTED_MODULE_9__["h"])(t[0])) {
              var _iterator7 = _createForOfIteratorHelper(t[0]),
                  _step7;

              try {
                for (_iterator7.s(); !(_step7 = _iterator7.n()).done;) {
                  var _e34 = _step7.value;
                  if (!(_e34 instanceof _geometry_Point_js__WEBPACK_IMPORTED_MODULE_1__["default"])) throw new Error("Invalid Argument");
                  o.push(_e34.hasZ ? _e34.hasM ? [_e34.x, _e34.y, _e34.z, _e34.m] : [_e34.x, _e34.y, _e34.z] : [_e34.x, _e34.y]);
                }
              } catch (err) {
                _iterator7.e(err);
              } finally {
                _iterator7.f();
              }

              o.length > 0 && (a = t[0][0].hasZ, l = t[0][0].hasM);
            } else if (t[0] instanceof _ImmutablePointArray_js__WEBPACK_IMPORTED_MODULE_8__["default"]) o = t[0]._elements, o.length > 0 && (a = t[0]._hasZ, l = t[0]._hasM);else {
              if (!Object(_chunks_languageUtils_js__WEBPACK_IMPORTED_MODULE_9__["o"])(t[0])) throw new Error("Invalid Argument");

              var _iterator8 = _createForOfIteratorHelper(t[0].toArray()),
                  _step8;

              try {
                for (_iterator8.s(); !(_step8 = _iterator8.n()).done;) {
                  var _e35 = _step8.value;
                  if (!(_e35 instanceof _geometry_Point_js__WEBPACK_IMPORTED_MODULE_1__["default"])) throw new Error("Invalid Argument");
                  o.push(_e35.hasZ ? _e35.hasM ? [_e35.x, _e35.y, _e35.z, _e35.m] : [_e35.x, _e35.y, _e35.z] : [_e35.x, _e35.y]);
                }
              } catch (err) {
                _iterator8.e(err);
              } finally {
                _iterator8.f();
              }

              o.length > 0 && (a = t[0].get(0).hasZ, l = t[0].get(0).hasM);
            }

            return !(o.length < 3) && Object(_geometry_support_coordsUtils_js__WEBPACK_IMPORTED_MODULE_4__["isClockwise"])(o, l, a);
          });
        }, D.polygon = function (e, r) {
          return P(e, r, function (r, n, t) {
            Object(_chunks_languageUtils_js__WEBPACK_IMPORTED_MODULE_9__["p"])(t, 1, 1);
            var i = null;

            if (t[0] instanceof _Dictionary_js__WEBPACK_IMPORTED_MODULE_10__["default"]) {
              if (i = Object(_chunks_languageUtils_js__WEBPACK_IMPORTED_MODULE_9__["r"])(_Feature_js__WEBPACK_IMPORTED_MODULE_11__["default"].parseGeometryFromDictionary(t[0]), e.spatialReference), i instanceof _geometry_Polygon_js__WEBPACK_IMPORTED_MODULE_5__["default"] == !1) throw new Error("Illegal Parameter");
            } else i = t[0] instanceof _geometry_Polygon_js__WEBPACK_IMPORTED_MODULE_5__["default"] ? Object(_geometry_support_jsonUtils_js__WEBPACK_IMPORTED_MODULE_7__["fromJSON"])(t[0].toJSON()) : Object(_chunks_languageUtils_js__WEBPACK_IMPORTED_MODULE_9__["r"])(new _geometry_Polygon_js__WEBPACK_IMPORTED_MODULE_5__["default"](JSON.parse(t[0])), e.spatialReference);

            if (null !== i && !1 === i.spatialReference.equals(e.spatialReference)) throw new Error("Cannot create Geometry in this SpatialReference. Engine is using a different spatial reference.");
            return Object(_chunks_languageUtils_js__WEBPACK_IMPORTED_MODULE_9__["H"])(i);
          });
        }, D.polyline = function (e, r) {
          return P(e, r, function (r, n, t) {
            Object(_chunks_languageUtils_js__WEBPACK_IMPORTED_MODULE_9__["p"])(t, 1, 1);
            var i = null;

            if (t[0] instanceof _Dictionary_js__WEBPACK_IMPORTED_MODULE_10__["default"]) {
              if (i = Object(_chunks_languageUtils_js__WEBPACK_IMPORTED_MODULE_9__["r"])(_Feature_js__WEBPACK_IMPORTED_MODULE_11__["default"].parseGeometryFromDictionary(t[0]), e.spatialReference), i instanceof _geometry_Polyline_js__WEBPACK_IMPORTED_MODULE_6__["default"] == !1) throw new Error("Illegal Parameter");
            } else i = t[0] instanceof _geometry_Polyline_js__WEBPACK_IMPORTED_MODULE_6__["default"] ? Object(_geometry_support_jsonUtils_js__WEBPACK_IMPORTED_MODULE_7__["fromJSON"])(t[0].toJSON()) : Object(_chunks_languageUtils_js__WEBPACK_IMPORTED_MODULE_9__["r"])(new _geometry_Polyline_js__WEBPACK_IMPORTED_MODULE_6__["default"](JSON.parse(t[0])), e.spatialReference);

            if (null !== i && !1 === i.spatialReference.equals(e.spatialReference)) throw new Error("Cannot create Geometry in this SpatialReference. Engine is using a different spatial reference.");
            return Object(_chunks_languageUtils_js__WEBPACK_IMPORTED_MODULE_9__["H"])(i);
          });
        }, D.point = function (e, n) {
          return P(e, n, function (n, t, i) {
            Object(_chunks_languageUtils_js__WEBPACK_IMPORTED_MODULE_9__["p"])(i, 1, 1);
            var o = null;

            if (i[0] instanceof _Dictionary_js__WEBPACK_IMPORTED_MODULE_10__["default"]) {
              if (o = Object(_chunks_languageUtils_js__WEBPACK_IMPORTED_MODULE_9__["r"])(_Feature_js__WEBPACK_IMPORTED_MODULE_11__["default"].parseGeometryFromDictionary(i[0]), e.spatialReference), o instanceof _geometry_Point_js__WEBPACK_IMPORTED_MODULE_1__["default"] == !1) throw new Error("Illegal Parameter");
            } else o = i[0] instanceof _geometry_Point_js__WEBPACK_IMPORTED_MODULE_1__["default"] ? Object(_geometry_support_jsonUtils_js__WEBPACK_IMPORTED_MODULE_7__["fromJSON"])(i[0].toJSON()) : Object(_chunks_languageUtils_js__WEBPACK_IMPORTED_MODULE_9__["r"])(new _geometry_Point_js__WEBPACK_IMPORTED_MODULE_1__["default"](JSON.parse(i[0])), e.spatialReference);

            if (null !== o && !1 === o.spatialReference.equals(e.spatialReference)) throw new Error("Cannot create Geometry in this SpatialReference. Engine is using a different spatial reference.");
            return Object(_chunks_languageUtils_js__WEBPACK_IMPORTED_MODULE_9__["H"])(o);
          });
        }, D.multipoint = function (e, r) {
          return P(e, r, function (r, n, i) {
            Object(_chunks_languageUtils_js__WEBPACK_IMPORTED_MODULE_9__["p"])(i, 1, 1);
            var o = null;

            if (i[0] instanceof _Dictionary_js__WEBPACK_IMPORTED_MODULE_10__["default"]) {
              if (o = Object(_chunks_languageUtils_js__WEBPACK_IMPORTED_MODULE_9__["r"])(_Feature_js__WEBPACK_IMPORTED_MODULE_11__["default"].parseGeometryFromDictionary(i[0]), e.spatialReference), o instanceof _geometry_Multipoint_js__WEBPACK_IMPORTED_MODULE_3__["default"] == !1) throw new Error("Illegal Parameter");
            } else o = i[0] instanceof _geometry_Multipoint_js__WEBPACK_IMPORTED_MODULE_3__["default"] ? Object(_geometry_support_jsonUtils_js__WEBPACK_IMPORTED_MODULE_7__["fromJSON"])(i[0].toJSON()) : Object(_chunks_languageUtils_js__WEBPACK_IMPORTED_MODULE_9__["r"])(new _geometry_Multipoint_js__WEBPACK_IMPORTED_MODULE_3__["default"](JSON.parse(i[0])), e.spatialReference);

            if (null !== o && !1 === o.spatialReference.equals(e.spatialReference)) throw new Error("Cannot create Geometry in this SpatialReference. Engine is using a different spatial reference.");
            return Object(_chunks_languageUtils_js__WEBPACK_IMPORTED_MODULE_9__["H"])(o);
          });
        }, D.extent = function (e, i) {
          return P(e, i, function (i, s, c) {
            c = Object(_chunks_languageUtils_js__WEBPACK_IMPORTED_MODULE_9__["J"])(c), Object(_chunks_languageUtils_js__WEBPACK_IMPORTED_MODULE_9__["p"])(c, 1, 1);
            var u = null;
            if (c[0] instanceof _Dictionary_js__WEBPACK_IMPORTED_MODULE_10__["default"]) u = Object(_chunks_languageUtils_js__WEBPACK_IMPORTED_MODULE_9__["r"])(_Feature_js__WEBPACK_IMPORTED_MODULE_11__["default"].parseGeometryFromDictionary(c[0]), e.spatialReference);else if (c[0] instanceof _geometry_Point_js__WEBPACK_IMPORTED_MODULE_1__["default"]) {
              var _e36 = {
                xmin: c[0].x,
                ymin: c[0].y,
                xmax: c[0].x,
                ymax: c[0].y,
                spatialReference: c[0].spatialReference.toJSON()
              },
                  r = c[0];
              r.hasZ ? (_e36.zmin = r.z, _e36.zmax = r.z) : r.hasM && (_e36.mmin = r.m, _e36.mmax = r.m), u = Object(_geometry_support_jsonUtils_js__WEBPACK_IMPORTED_MODULE_7__["fromJSON"])(_e36);
            } else u = c[0] instanceof _geometry_Polygon_js__WEBPACK_IMPORTED_MODULE_5__["default"] || c[0] instanceof _geometry_Polyline_js__WEBPACK_IMPORTED_MODULE_6__["default"] || c[0] instanceof _geometry_Multipoint_js__WEBPACK_IMPORTED_MODULE_3__["default"] ? Object(_geometry_support_jsonUtils_js__WEBPACK_IMPORTED_MODULE_7__["fromJSON"])(c[0].extent.toJSON()) : c[0] instanceof _geometry_Extent_js__WEBPACK_IMPORTED_MODULE_2__["default"] ? Object(_geometry_support_jsonUtils_js__WEBPACK_IMPORTED_MODULE_7__["fromJSON"])(c[0].toJSON()) : Object(_chunks_languageUtils_js__WEBPACK_IMPORTED_MODULE_9__["r"])(new _geometry_Extent_js__WEBPACK_IMPORTED_MODULE_2__["default"](JSON.parse(c[0])), e.spatialReference);
            if (null !== u && !1 === u.spatialReference.equals(e.spatialReference)) throw new Error("Cannot create Geometry in this SpatialReference. Engine is using a different spatial reference.");
            return Object(_chunks_languageUtils_js__WEBPACK_IMPORTED_MODULE_9__["H"])(u);
          });
        }, D.geometry = function (e, r) {
          return P(e, r, function (r, n, t) {
            Object(_chunks_languageUtils_js__WEBPACK_IMPORTED_MODULE_9__["p"])(t, 1, 1);
            var i = null;
            if (i = t[0] instanceof _Feature_js__WEBPACK_IMPORTED_MODULE_11__["default"] ? Object(_chunks_languageUtils_js__WEBPACK_IMPORTED_MODULE_9__["r"])(t[0].geometry(), e.spatialReference) : t[0] instanceof _Dictionary_js__WEBPACK_IMPORTED_MODULE_10__["default"] ? Object(_chunks_languageUtils_js__WEBPACK_IMPORTED_MODULE_9__["r"])(_Feature_js__WEBPACK_IMPORTED_MODULE_11__["default"].parseGeometryFromDictionary(t[0]), e.spatialReference) : Object(_chunks_languageUtils_js__WEBPACK_IMPORTED_MODULE_9__["r"])(Object(_geometry_support_jsonUtils_js__WEBPACK_IMPORTED_MODULE_7__["fromJSON"])(JSON.parse(t[0])), e.spatialReference), null !== i && !1 === i.spatialReference.equals(e.spatialReference)) throw new Error("Cannot create Geometry in this SpatialReference. Engine is using a different spatial reference.");
            return Object(_chunks_languageUtils_js__WEBPACK_IMPORTED_MODULE_9__["H"])(i);
          });
        }, D.setgeometry = function (r, n) {
          return P(r, n, function (r, n, t) {
            if (Object(_chunks_languageUtils_js__WEBPACK_IMPORTED_MODULE_9__["p"])(t, 2, 2), !(t[0] instanceof _Feature_js__WEBPACK_IMPORTED_MODULE_11__["default"])) throw new Error("Illegal Argument");
            if (!0 === t[0].immutable) throw new Error("Feature is Immutable");
            if (!(t[1] instanceof _geometry_Geometry_js__WEBPACK_IMPORTED_MODULE_0__["default"] || null === t[1])) throw new Error("Illegal Argument");
            return t[0]._geometry = t[1], _chunks_languageUtils_js__WEBPACK_IMPORTED_MODULE_9__["v"];
          });
        }, D.feature = function (r, n) {
          return P(r, n, function (n, t, i) {
            if (0 === i.length) throw new Error("Missing Parameters");
            var o = null;
            if (1 === i.length) {
              if (Object(_chunks_languageUtils_js__WEBPACK_IMPORTED_MODULE_9__["b"])(i[0])) o = _Feature_js__WEBPACK_IMPORTED_MODULE_11__["default"].fromJson(JSON.parse(i[0]));else if (i[0] instanceof _Feature_js__WEBPACK_IMPORTED_MODULE_11__["default"]) o = _Feature_js__WEBPACK_IMPORTED_MODULE_11__["default"].createFromArcadeFeature(i[0]);else if (i[0] instanceof _geometry_Geometry_js__WEBPACK_IMPORTED_MODULE_0__["default"]) o = _Feature_js__WEBPACK_IMPORTED_MODULE_11__["default"].createFromGraphicLikeObject(i[0], null, null);else {
                if (!(i[0] instanceof _Dictionary_js__WEBPACK_IMPORTED_MODULE_10__["default"])) throw new Error("Illegal Argument");
                {
                  var e = i[0].hasField("geometry") ? i[0].field("geometry") : null,
                      _r34 = i[0].hasField("attributes") ? i[0].field("attributes") : null;

                  null !== e && e instanceof _Dictionary_js__WEBPACK_IMPORTED_MODULE_10__["default"] && (e = _Feature_js__WEBPACK_IMPORTED_MODULE_11__["default"].parseGeometryFromDictionary(e)), null !== _r34 && (_r34 = _Feature_js__WEBPACK_IMPORTED_MODULE_11__["default"].parseAttributesFromDictionary(_r34)), o = _Feature_js__WEBPACK_IMPORTED_MODULE_11__["default"].createFromGraphicLikeObject(e, _r34, null);
                }
              }
            } else if (2 === i.length) {
              var _r35 = null,
                  _n16 = null;
              if (null !== i[0]) if (i[0] instanceof _geometry_Geometry_js__WEBPACK_IMPORTED_MODULE_0__["default"]) _r35 = i[0];else {
                if (!(_r35 instanceof _Dictionary_js__WEBPACK_IMPORTED_MODULE_10__["default"])) throw new Error("Illegal Argument");
                _r35 = _Feature_js__WEBPACK_IMPORTED_MODULE_11__["default"].parseGeometryFromDictionary(i[0]);
              }

              if (null !== i[1]) {
                if (!(i[1] instanceof _Dictionary_js__WEBPACK_IMPORTED_MODULE_10__["default"])) throw new Error("Illegal Argument");
                _n16 = _Feature_js__WEBPACK_IMPORTED_MODULE_11__["default"].parseAttributesFromDictionary(i[1]);
              }

              o = _Feature_js__WEBPACK_IMPORTED_MODULE_11__["default"].createFromGraphicLikeObject(_r35, _n16, null);
            } else {
              var _r36 = null;
              var _n17 = {};
              if (null !== i[0]) if (i[0] instanceof _geometry_Geometry_js__WEBPACK_IMPORTED_MODULE_0__["default"]) _r36 = i[0];else {
                if (!(_r36 instanceof _Dictionary_js__WEBPACK_IMPORTED_MODULE_10__["default"])) throw new Error("Illegal Argument");
                _r36 = _Feature_js__WEBPACK_IMPORTED_MODULE_11__["default"].parseGeometryFromDictionary(i[0]);
              }

              for (var _e37 = 1; _e37 < i.length; _e37 += 2) {
                var _r37 = Object(_chunks_languageUtils_js__WEBPACK_IMPORTED_MODULE_9__["e"])(i[_e37]),
                    _t32 = i[_e37 + 1];

                if (!(null == _t32 || Object(_chunks_languageUtils_js__WEBPACK_IMPORTED_MODULE_9__["b"])(_t32) || isNaN(_t32) || Object(_chunks_languageUtils_js__WEBPACK_IMPORTED_MODULE_9__["f"])(_t32) || Object(_chunks_languageUtils_js__WEBPACK_IMPORTED_MODULE_9__["a"])(_t32) || Object(_chunks_languageUtils_js__WEBPACK_IMPORTED_MODULE_9__["i"])(_t32))) throw new Error("Illegal Argument");
                if (Object(_chunks_languageUtils_js__WEBPACK_IMPORTED_MODULE_9__["q"])(_t32) || !1 === Object(_chunks_languageUtils_js__WEBPACK_IMPORTED_MODULE_9__["j"])(_t32)) throw new Error("Illegal Argument");
                _n17[_r37] = _t32 === _chunks_languageUtils_js__WEBPACK_IMPORTED_MODULE_9__["v"] ? null : _t32;
              }

              o = _Feature_js__WEBPACK_IMPORTED_MODULE_11__["default"].createFromGraphicLikeObject(_r36, _n17, null);
            }
            return o._geometry = Object(_chunks_languageUtils_js__WEBPACK_IMPORTED_MODULE_9__["r"])(o.geometry(), r.spatialReference), o.immutable = !1, o;
          });
        }, D.dictionary = function (e, r) {
          return P(e, r, function (e, r, n) {
            if (0 === n.length) {
              var _e38 = new _Dictionary_js__WEBPACK_IMPORTED_MODULE_10__["default"]();

              return _e38.immutable = !1, _e38;
            }

            if (1 === n.length && Object(_chunks_languageUtils_js__WEBPACK_IMPORTED_MODULE_9__["b"])(n[0])) try {
              var _e39 = JSON.parse(n[0]),
                  _r38 = _Dictionary_js__WEBPACK_IMPORTED_MODULE_10__["default"].convertObjectToArcadeDictionary(_e39);

              return _r38.immutable = !1, _r38;
            } catch (e) {
              throw new Error("Missing Parameters or Illegal Json");
            }
            if (n.length % 2 != 0) throw new Error("Missing Parameters");
            var t = {};

            for (var _e40 = 0; _e40 < n.length; _e40 += 2) {
              var _r39 = Object(_chunks_languageUtils_js__WEBPACK_IMPORTED_MODULE_9__["e"])(n[_e40]),
                  _i4 = n[_e40 + 1];

              if (!(null == _i4 || Object(_chunks_languageUtils_js__WEBPACK_IMPORTED_MODULE_9__["b"])(_i4) || isNaN(_i4) || Object(_chunks_languageUtils_js__WEBPACK_IMPORTED_MODULE_9__["f"])(_i4) || Object(_chunks_languageUtils_js__WEBPACK_IMPORTED_MODULE_9__["a"])(_i4) || Object(_chunks_languageUtils_js__WEBPACK_IMPORTED_MODULE_9__["i"])(_i4) || Object(_chunks_languageUtils_js__WEBPACK_IMPORTED_MODULE_9__["h"])(_i4) || Object(_chunks_languageUtils_js__WEBPACK_IMPORTED_MODULE_9__["o"])(_i4))) throw new Error("Illegal Argument");
              if (Object(_chunks_languageUtils_js__WEBPACK_IMPORTED_MODULE_9__["q"])(_i4)) throw new Error("Illegal Argument");
              t[_r39] = _i4 === _chunks_languageUtils_js__WEBPACK_IMPORTED_MODULE_9__["v"] ? null : _i4;
            }

            var i = new _Dictionary_js__WEBPACK_IMPORTED_MODULE_10__["default"](t);
            return i.immutable = !1, i;
          });
        }, D.haskey = function (e, r) {
          return P(e, r, function (e, r, n) {
            Object(_chunks_languageUtils_js__WEBPACK_IMPORTED_MODULE_9__["p"])(n, 2, 2);
            var t = Object(_chunks_languageUtils_js__WEBPACK_IMPORTED_MODULE_9__["e"])(n[1]);
            if (n[0] instanceof _Feature_js__WEBPACK_IMPORTED_MODULE_11__["default"]) return n[0].hasField(t);
            if (n[0] instanceof _Dictionary_js__WEBPACK_IMPORTED_MODULE_10__["default"]) return n[0].hasField(t);
            throw new Error("Illegal Argument");
          });
        }, D.indexof = function (e, r) {
          return P(e, r, function (e, r, n) {
            Object(_chunks_languageUtils_js__WEBPACK_IMPORTED_MODULE_9__["p"])(n, 2, 2);
            var t = n[1];

            if (Object(_chunks_languageUtils_js__WEBPACK_IMPORTED_MODULE_9__["h"])(n[0])) {
              for (var _e41 = 0; _e41 < n[0].length; _e41++) {
                if (Object(_chunks_languageUtils_js__WEBPACK_IMPORTED_MODULE_9__["n"])(t, n[0][_e41])) return _e41;
              }

              return -1;
            }

            if (Object(_chunks_languageUtils_js__WEBPACK_IMPORTED_MODULE_9__["o"])(n[0])) {
              var _e42 = n[0].length();

              for (var _r40 = 0; _r40 < _e42; _r40++) {
                if (Object(_chunks_languageUtils_js__WEBPACK_IMPORTED_MODULE_9__["n"])(t, n[0].get(_r40))) return _r40;
              }

              return -1;
            }

            throw new Error("Illegal Argument");
          });
        }, D.angle = function (e, n) {
          return P(e, n, function (e, n, t) {
            if (t = Object(_chunks_languageUtils_js__WEBPACK_IMPORTED_MODULE_9__["J"])(t), Object(_chunks_languageUtils_js__WEBPACK_IMPORTED_MODULE_9__["p"])(t, 2, 3), !(t[0] instanceof _geometry_Point_js__WEBPACK_IMPORTED_MODULE_1__["default"])) throw new Error("Illegal Argument");
            if (!(t[1] instanceof _geometry_Point_js__WEBPACK_IMPORTED_MODULE_1__["default"])) throw new Error("Illegal Argument");
            if (t.length > 2 && !(t[2] instanceof _geometry_Point_js__WEBPACK_IMPORTED_MODULE_1__["default"])) throw new Error("Illegal Argument");
            return 2 === t.length ? Object(_centroid_js__WEBPACK_IMPORTED_MODULE_12__["angle2D"])(t[0], t[1]) : Object(_centroid_js__WEBPACK_IMPORTED_MODULE_12__["angleBetween2D"])(t[0], t[1], t[2]);
          });
        }, D.bearing = function (e, n) {
          return P(e, n, function (e, n, t) {
            if (t = Object(_chunks_languageUtils_js__WEBPACK_IMPORTED_MODULE_9__["J"])(t), Object(_chunks_languageUtils_js__WEBPACK_IMPORTED_MODULE_9__["p"])(t, 2, 3), !(t[0] instanceof _geometry_Point_js__WEBPACK_IMPORTED_MODULE_1__["default"])) throw new Error("Illegal Argument");
            if (!(t[1] instanceof _geometry_Point_js__WEBPACK_IMPORTED_MODULE_1__["default"])) throw new Error("Illegal Argument");
            if (t.length > 2 && !(t[2] instanceof _geometry_Point_js__WEBPACK_IMPORTED_MODULE_1__["default"])) throw new Error("Illegal Argument");
            return 2 === t.length ? Object(_centroid_js__WEBPACK_IMPORTED_MODULE_12__["bearing2D"])(t[0], t[1]) : Object(_centroid_js__WEBPACK_IMPORTED_MODULE_12__["bearingBetween2D"])(t[0], t[1], t[2]);
          });
        }, D.isselfintersecting = function (e, r) {
          return P(e, r, function (r, n, i) {
            i = Object(_chunks_languageUtils_js__WEBPACK_IMPORTED_MODULE_9__["J"])(i), Object(_chunks_languageUtils_js__WEBPACK_IMPORTED_MODULE_9__["p"])(i, 1, 1);
            var l = i[0];
            if (l instanceof _geometry_Polygon_js__WEBPACK_IMPORTED_MODULE_5__["default"]) return l.isSelfIntersecting;
            if (l instanceof _geometry_Polyline_js__WEBPACK_IMPORTED_MODULE_6__["default"]) return l = l.paths, Object(_centroid_js__WEBPACK_IMPORTED_MODULE_12__["pathsSelfIntersecting"])(l);

            if (l instanceof _geometry_Multipoint_js__WEBPACK_IMPORTED_MODULE_3__["default"]) {
              var _e43 = l.points;

              for (var _r41 = 0; _r41 < _e43.length; _r41++) {
                for (var _n18 = 0; _n18 < _e43.length; _n18++) {
                  if (_n18 !== _r41) {
                    var t = !0;

                    for (var _i5 = 0; _i5 < _e43[_r41].length; _i5++) {
                      if (_e43[_r41][_i5] !== _e43[_n18][_i5]) {
                        t = !1;
                        break;
                      }
                    }

                    if (!0 === t) return !0;
                  }
                }
              }
            }

            return !(!Object(_chunks_languageUtils_js__WEBPACK_IMPORTED_MODULE_9__["h"])(l) && !Object(_chunks_languageUtils_js__WEBPACK_IMPORTED_MODULE_9__["o"])(l)) && (l = Object(_chunks_languageUtils_js__WEBPACK_IMPORTED_MODULE_9__["K"])(l, e.spatialReference), null !== l && (l = l.paths), Object(_centroid_js__WEBPACK_IMPORTED_MODULE_12__["pathsSelfIntersecting"])(l));
          });
        };
      }
      /***/

    },

    /***/
    "Q2u5":
    /*!*****************************************************************!*\
      !*** ./node_modules/@arcgis/core/arcade/ImmutablePointArray.js ***!
      \*****************************************************************/

    /*! exports provided: default */

    /***/
    function Q2u5(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony import */


      var _geometry_Point_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ../geometry/Point.js */
      "SuVq");
      /* harmony import */


      var _ImmutableArray_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./ImmutableArray.js */
      "qea6");
      /*
      All material copyright ESRI, All Rights Reserved, unless otherwise specified.
      See https://js.arcgis.com/4.18/esri/copyright.txt for details.
      */


      var i = /*#__PURE__*/function (_ImmutableArray_js__W) {
        _inherits(i, _ImmutableArray_js__W);

        var _super = _createSuper(i);

        function i(t, s, _i6, e, h, a) {
          var _this;

          _classCallCheck(this, i);

          _this = _super.call(this, t), _this._lazyPt = [], _this._hasZ = !1, _this._hasM = !1, _this._spRef = s, _this._hasZ = _i6, _this._hasM = e, _this._cacheId = h, _this._partId = a;
          return _this;
        }

        _createClass(i, [{
          key: "get",
          value: function get(s) {
            if (void 0 === this._lazyPt[s]) {
              var _i8 = this._elements[s];
              if (void 0 === _i8) return;
              var e = this._hasZ,
                  h = this._hasM;
              var a = null;
              a = e && !h ? new _geometry_Point_js__WEBPACK_IMPORTED_MODULE_0__["default"](_i8[0], _i8[1], _i8[2], void 0, this._spRef) : h && !e ? new _geometry_Point_js__WEBPACK_IMPORTED_MODULE_0__["default"](_i8[0], _i8[1], void 0, _i8[2], this._spRef) : e && h ? new _geometry_Point_js__WEBPACK_IMPORTED_MODULE_0__["default"](_i8[0], _i8[1], _i8[2], _i8[3], this._spRef) : new _geometry_Point_js__WEBPACK_IMPORTED_MODULE_0__["default"](_i8[0], _i8[1], this._spRef), a.cache._arcadeCacheId = this._cacheId.toString() + "-" + this._partId.toString() + "-" + s.toString(), this._lazyPt[s] = a;
            }

            return this._lazyPt[s];
          }
        }, {
          key: "equalityTest",
          value: function equalityTest(t) {
            return t === this || null !== t && t instanceof i != !1 && t.getUniqueHash() === this.getUniqueHash();
          }
        }, {
          key: "getUniqueHash",
          value: function getUniqueHash() {
            return this._cacheId.toString() + "-" + this._partId.toString();
          }
        }]);

        return i;
      }(_ImmutableArray_js__WEBPACK_IMPORTED_MODULE_1__["default"]);
      /* harmony default export */


      __webpack_exports__["default"] = i;
      /***/
    },

    /***/
    "RrDw":
    /*!**************************************************************!*\
      !*** ./node_modules/@arcgis/core/arcade/functions/string.js ***!
      \**************************************************************/

    /*! exports provided: registerFunctions */

    /***/
    function RrDw(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "registerFunctions", function () {
        return L;
      });
      /* harmony import */


      var _geometry_SpatialReference_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ../../geometry/SpatialReference.js */
      "WZb1");
      /* harmony import */


      var _geometry_Point_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ../../geometry/Point.js */
      "SuVq");
      /* harmony import */


      var _geometry_Extent_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ../../geometry/Extent.js */
      "OvF4");
      /* harmony import */


      var _geometry_Multipoint_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ../../geometry/Multipoint.js */
      "V9wi");
      /* harmony import */


      var _geometry_Polygon_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ../../geometry/Polygon.js */
      "Ehki");
      /* harmony import */


      var _geometry_Polyline_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ../../geometry/Polyline.js */
      "UhwK");
      /* harmony import */


      var _chunks_languageUtils_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ../../chunks/languageUtils.js */
      "idrm");
      /* harmony import */


      var _Dictionary_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! ../Dictionary.js */
      "D5C5");
      /* harmony import */


      var _ArcadePortal_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! ../ArcadePortal.js */
      "Xfxc");
      /* harmony import */


      var _Attachment_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! ../Attachment.js */
      "db86");
      /* harmony import */


      var _featureset_support_shared_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
      /*! ../featureset/support/shared.js */
      "hTzF");
      /* harmony import */


      var _Feature_js__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
      /*! ../Feature.js */
      "Xrjs");
      /* harmony import */


      var _hash_js__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
      /*! ./hash.js */
      "XhLy");
      /*
      All material copyright ESRI, All Rights Reserved, unless otherwise specified.
      See https://js.arcgis.com/4.18/esri/copyright.txt for details.
      */


      function T(t, e) {
        if (t.x === e.x && t.y === e.y) {
          if (t.hasZ) {
            if (t.z !== e.z) return !1;
          } else if (e.hasZ) return !1;

          if (t.hasM) {
            if (t.m !== e.m) return !1;
          } else if (e.hasM) return !1;

          return !0;
        }

        return !1;
      }

      function C(i, u, s) {
        if (null !== i) {
          if (Object(_chunks_languageUtils_js__WEBPACK_IMPORTED_MODULE_6__["h"])(i)) {
            if (u.updateUint8Array([61]), s.map.has(i)) {
              var t = s.map.get(i);
              u.updateIntArray([61237541 ^ t]);
            } else {
              s.map.set(i, s.currentLength++);

              var _iterator9 = _createForOfIteratorHelper(i),
                  _step9;

              try {
                for (_iterator9.s(); !(_step9 = _iterator9.n()).done;) {
                  var _t33 = _step9.value;
                  C(_t33, u, s);
                }
              } catch (err) {
                _iterator9.e(err);
              } finally {
                _iterator9.f();
              }

              s.map["delete"](i), s.currentLength--;
            }

            u.updateUint8Array([199]);
          } else if (Object(_chunks_languageUtils_js__WEBPACK_IMPORTED_MODULE_6__["o"])(i)) {
            if (u.updateUint8Array([61]), s.map.has(i)) {
              var _t34 = s.map.get(i);

              u.updateIntArray([61237541 ^ _t34]);
            } else {
              s.map.set(i, s.currentLength++);

              var _iterator10 = _createForOfIteratorHelper(i.toArray()),
                  _step10;

              try {
                for (_iterator10.s(); !(_step10 = _iterator10.n()).done;) {
                  var _t35 = _step10.value;
                  C(_t35, u, s);
                }
              } catch (err) {
                _iterator10.e(err);
              } finally {
                _iterator10.f();
              }

              s.map["delete"](i), s.currentLength--;
            }

            u.updateUint8Array([199]);
          } else {
            if (Object(_chunks_languageUtils_js__WEBPACK_IMPORTED_MODULE_6__["f"])(i)) return u.updateIntArray([i.getTime()]), void u.updateUint8Array([241]);
            if (Object(_chunks_languageUtils_js__WEBPACK_IMPORTED_MODULE_6__["b"])(i)) return u.updateIntArray([i.length]), u.updateWithString(i), void u.updateUint8Array([41]);
            if (Object(_chunks_languageUtils_js__WEBPACK_IMPORTED_MODULE_6__["i"])(i)) u.updateUint8Array([!0 === i ? 1 : 0, 113]);else {
              if (Object(_chunks_languageUtils_js__WEBPACK_IMPORTED_MODULE_6__["a"])(i)) return u.updateFloatArray([i]), void u.updateUint8Array([173]);
              if (i instanceof _Attachment_js__WEBPACK_IMPORTED_MODULE_9__["default"]) throw new Error("Type not supported in Hash");
              if (i instanceof _ArcadePortal_js__WEBPACK_IMPORTED_MODULE_8__["default"]) throw new Error("Type not supported in Hash");

              if (!(i instanceof _Dictionary_js__WEBPACK_IMPORTED_MODULE_7__["default"])) {
                if (i instanceof _Feature_js__WEBPACK_IMPORTED_MODULE_11__["default"]) throw new Error("Type not supported in Hash");
                if (i instanceof _geometry_Point_js__WEBPACK_IMPORTED_MODULE_1__["default"]) return u.updateIntArray([3833836621]), u.updateIntArray([0]), u.updateFloatArray([i.x]), u.updateIntArray([1]), u.updateFloatArray([i.y]), i.hasZ && (u.updateIntArray([2]), u.updateFloatArray([i.z])), i.hasM && (u.updateIntArray([3]), u.updateFloatArray([i.m])), u.updateIntArray([3765347959]), void C(i.spatialReference.wkid, u, s);

                if (i instanceof _geometry_Polygon_js__WEBPACK_IMPORTED_MODULE_4__["default"]) {
                  u.updateIntArray([1266616829]);

                  for (var _t36 = 0; _t36 < i.rings.length; _t36++) {
                    var e = i.rings[_t36],
                        r = [];
                    var n = null,
                        a = null;

                    for (var o = 0; o < e.length; o++) {
                      var _u2 = i.getPoint(_t36, o);

                      if (0 === o) n = _u2;else if (T(a, _u2)) continue;
                      a = _u2, o === e.length - 1 && T(n, _u2) || r.push(_u2);
                    }

                    u.updateIntArray([1397116793, r.length]);

                    for (var _t37 = 0; _t37 < r.length; _t37++) {
                      var _e44 = r[_t37];
                      u.updateIntArray([3962308117, _t37]), C(_e44, u, s), u.updateIntArray([2716288009]);
                    }

                    u.updateIntArray([2278822459]);
                  }

                  return u.updateIntArray([3878477243]), void C(i.spatialReference.wkid, u, s);
                }

                if (i instanceof _geometry_Polyline_js__WEBPACK_IMPORTED_MODULE_5__["default"]) {
                  u.updateIntArray([4106883559]);

                  for (var _t38 = 0; _t38 < i.paths.length; _t38++) {
                    var _e45 = i.paths[_t38];
                    u.updateIntArray([1397116793, _e45.length]);

                    for (var _r42 = 0; _r42 < _e45.length; _r42++) {
                      u.updateIntArray([3962308117, _r42]), C(i.getPoint(_t38, _r42), u, s), u.updateIntArray([2716288009]);
                    }

                    u.updateIntArray([2278822459]);
                  }

                  return u.updateIntArray([2568784753]), void C(i.spatialReference.wkid, u, s);
                }

                if (i instanceof _geometry_Multipoint_js__WEBPACK_IMPORTED_MODULE_3__["default"]) {
                  u.updateIntArray([588535921, i.points.length]);

                  for (var _t39 = 0; _t39 < i.points.length; _t39++) {
                    var _e46 = i.getPoint(_t39);

                    u.updateIntArray([_t39]), C(_e46, u, s);
                  }

                  return u.updateIntArray([1700171621]), void C(i.spatialReference.wkid, u, s);
                }

                if (i instanceof _geometry_Extent_js__WEBPACK_IMPORTED_MODULE_2__["default"]) return u.updateIntArray([3483648373]), u.updateIntArray([0]), u.updateFloatArray([i.xmax]), u.updateIntArray([1]), u.updateFloatArray([i.xmin]), u.updateIntArray([2]), u.updateFloatArray([i.ymax]), u.updateIntArray([3]), u.updateFloatArray([i.ymin]), i.hasZ && (u.updateIntArray([4]), u.updateFloatArray([i.zmax]), u.updateIntArray([5]), u.updateFloatArray([i.zmin])), i.hasM && (u.updateIntArray([6]), u.updateFloatArray([i.mmax]), u.updateIntArray([7]), u.updateFloatArray([i.mmin])), u.updateIntArray([3622027469]), void C(i.spatialReference.wkid, u, s);
                if (i instanceof _geometry_SpatialReference_js__WEBPACK_IMPORTED_MODULE_0__["default"]) return u.updateIntArray([14]), void 0 !== i.wkid && null !== i.wkid && u.updateIntArray([i.wkid]), void (i.wkt && u.updateWithString(i.wkt));
                if (Object(_chunks_languageUtils_js__WEBPACK_IMPORTED_MODULE_6__["q"])(i)) throw new Error("Type not supported in Hash");
                if (Object(_chunks_languageUtils_js__WEBPACK_IMPORTED_MODULE_6__["z"])(i)) throw new Error("Type not supported in Hash");
                if (Object(_chunks_languageUtils_js__WEBPACK_IMPORTED_MODULE_6__["A"])(i)) throw new Error("Type not supported in Hash");
                if (i === _chunks_languageUtils_js__WEBPACK_IMPORTED_MODULE_6__["v"]) throw new Error("Type not supported in Hash");
                throw new Error("Type not supported in Hash");
              }

              if (u.updateUint8Array([223]), s.map.has(i)) {
                var _t40 = s.map.get(i);

                u.updateIntArray([61237541 ^ _t40]);
              } else {
                s.map.set(i, s.currentLength++);

                var _iterator11 = _createForOfIteratorHelper(i.keys()),
                    _step11;

                try {
                  for (_iterator11.s(); !(_step11 = _iterator11.n()).done;) {
                    var _t41 = _step11.value;
                    u.updateIntArray([_t41.length]), u.updateWithString(_t41), u.updateUint8Array([251]);
                    C(i.field(_t41), u, s), u.updateUint8Array([239]);
                  }
                } catch (err) {
                  _iterator11.e(err);
                } finally {
                  _iterator11.f();
                }

                s.map["delete"](i), s.currentLength--;
              }

              u.updateUint8Array([73]);
            }
          }
        } else u.updateUint8Array([0, 139]);
      }

      function L(t, e) {
        t.portal = function (t, r) {
          return e(t, r, function (t, e, r) {
            return Object(_chunks_languageUtils_js__WEBPACK_IMPORTED_MODULE_6__["p"])(r, 1, 1), new _ArcadePortal_js__WEBPACK_IMPORTED_MODULE_8__["default"](Object(_chunks_languageUtils_js__WEBPACK_IMPORTED_MODULE_6__["e"])(r[0]));
          });
        }, t.trim = function (t, r) {
          return e(t, r, function (t, e, r) {
            return Object(_chunks_languageUtils_js__WEBPACK_IMPORTED_MODULE_6__["p"])(r, 1, 1), Object(_chunks_languageUtils_js__WEBPACK_IMPORTED_MODULE_6__["e"])(r[0]).trim();
          });
        }, t.tohex = function (t, r) {
          return e(t, r, function (t, e, r) {
            Object(_chunks_languageUtils_js__WEBPACK_IMPORTED_MODULE_6__["p"])(r, 1, 1);
            var n = Object(_chunks_languageUtils_js__WEBPACK_IMPORTED_MODULE_6__["c"])(r[0]);
            return isNaN(n) ? n : n.toString(16);
          });
        }, t.upper = function (t, r) {
          return e(t, r, function (t, e, r) {
            return Object(_chunks_languageUtils_js__WEBPACK_IMPORTED_MODULE_6__["p"])(r, 1, 1), Object(_chunks_languageUtils_js__WEBPACK_IMPORTED_MODULE_6__["e"])(r[0]).toUpperCase();
          });
        }, t.proper = function (t, r) {
          return e(t, r, function (t, e, r) {
            Object(_chunks_languageUtils_js__WEBPACK_IMPORTED_MODULE_6__["p"])(r, 1, 2);
            var n = 1;
            2 === r.length && "firstword" === Object(_chunks_languageUtils_js__WEBPACK_IMPORTED_MODULE_6__["e"])(r[1]).toLowerCase() && (n = 2);
            var a = /\s/,
                o = Object(_chunks_languageUtils_js__WEBPACK_IMPORTED_MODULE_6__["e"])(r[0]);
            var s = "",
                f = !0;

            for (var _t42 = 0; _t42 < o.length; _t42++) {
              var _e47 = o[_t42];
              if (a.test(_e47)) 1 === n && (f = !0);else {
                _e47.toUpperCase() !== _e47.toLowerCase() && (f ? (_e47 = _e47.toUpperCase(), f = !1) : _e47 = _e47.toLowerCase());
              }
              s += _e47;
            }

            return s;
          });
        }, t.lower = function (t, r) {
          return e(t, r, function (t, e, r) {
            return Object(_chunks_languageUtils_js__WEBPACK_IMPORTED_MODULE_6__["p"])(r, 1, 1), Object(_chunks_languageUtils_js__WEBPACK_IMPORTED_MODULE_6__["e"])(r[0]).toLowerCase();
          });
        }, t.guid = function (t, r) {
          return e(t, r, function (t, e, r) {
            if (Object(_chunks_languageUtils_js__WEBPACK_IMPORTED_MODULE_6__["p"])(r, 0, 1), r.length > 0) switch (Object(_chunks_languageUtils_js__WEBPACK_IMPORTED_MODULE_6__["e"])(r[0]).toLowerCase()) {
              case "digits":
                return Object(_chunks_languageUtils_js__WEBPACK_IMPORTED_MODULE_6__["F"])().replace("-", "").replace("-", "").replace("-", "").replace("-", "");

              case "digits-hyphen":
                return Object(_chunks_languageUtils_js__WEBPACK_IMPORTED_MODULE_6__["F"])();

              case "digits-hyphen-braces":
                return "{" + Object(_chunks_languageUtils_js__WEBPACK_IMPORTED_MODULE_6__["F"])() + "}";

              case "digits-hyphen-parentheses":
                return "(" + Object(_chunks_languageUtils_js__WEBPACK_IMPORTED_MODULE_6__["F"])() + ")";
            }
            return "{" + Object(_chunks_languageUtils_js__WEBPACK_IMPORTED_MODULE_6__["F"])() + "}";
          });
        }, t.console = function (t, r) {
          return e(t, r, function (e, r, n) {
            return 0 === n.length || (1 === n.length ? t.console(Object(_chunks_languageUtils_js__WEBPACK_IMPORTED_MODULE_6__["e"])(n[0])) : t.console(Object(_chunks_languageUtils_js__WEBPACK_IMPORTED_MODULE_6__["e"])(n))), _chunks_languageUtils_js__WEBPACK_IMPORTED_MODULE_6__["v"];
          });
        }, t.mid = function (t, r) {
          return e(t, r, function (t, e, r) {
            Object(_chunks_languageUtils_js__WEBPACK_IMPORTED_MODULE_6__["p"])(r, 2, 3);
            var n = Object(_chunks_languageUtils_js__WEBPACK_IMPORTED_MODULE_6__["c"])(r[1]);
            if (isNaN(n)) return "";
            if (n < 0 && (n = 0), 2 === r.length) return Object(_chunks_languageUtils_js__WEBPACK_IMPORTED_MODULE_6__["e"])(r[0]).substr(n);
            var a = Object(_chunks_languageUtils_js__WEBPACK_IMPORTED_MODULE_6__["c"])(r[2]);
            return isNaN(a) ? "" : (a < 0 && (a = 0), Object(_chunks_languageUtils_js__WEBPACK_IMPORTED_MODULE_6__["e"])(r[0]).substr(n, a));
          });
        }, t.find = function (t, r) {
          return e(t, r, function (t, e, r) {
            Object(_chunks_languageUtils_js__WEBPACK_IMPORTED_MODULE_6__["p"])(r, 2, 3);
            var n = 0;

            if (r.length > 2) {
              if (n = Object(_chunks_languageUtils_js__WEBPACK_IMPORTED_MODULE_6__["c"])(Object(_chunks_languageUtils_js__WEBPACK_IMPORTED_MODULE_6__["C"])(r[2], 0)), isNaN(n)) return -1;
              n < 0 && (n = 0);
            }

            return Object(_chunks_languageUtils_js__WEBPACK_IMPORTED_MODULE_6__["e"])(r[1]).indexOf(Object(_chunks_languageUtils_js__WEBPACK_IMPORTED_MODULE_6__["e"])(r[0]), n);
          });
        }, t.left = function (t, r) {
          return e(t, r, function (t, e, r) {
            Object(_chunks_languageUtils_js__WEBPACK_IMPORTED_MODULE_6__["p"])(r, 2, 2);
            var n = Object(_chunks_languageUtils_js__WEBPACK_IMPORTED_MODULE_6__["c"])(r[1]);
            return isNaN(n) ? "" : (n < 0 && (n = 0), Object(_chunks_languageUtils_js__WEBPACK_IMPORTED_MODULE_6__["e"])(r[0]).substr(0, n));
          });
        }, t.right = function (t, r) {
          return e(t, r, function (t, e, r) {
            Object(_chunks_languageUtils_js__WEBPACK_IMPORTED_MODULE_6__["p"])(r, 2, 2);
            var n = Object(_chunks_languageUtils_js__WEBPACK_IMPORTED_MODULE_6__["c"])(r[1]);
            return isNaN(n) ? "" : (n < 0 && (n = 0), Object(_chunks_languageUtils_js__WEBPACK_IMPORTED_MODULE_6__["e"])(r[0]).substr(-1 * n, n));
          });
        }, t.split = function (t, r) {
          return e(t, r, function (t, e, r) {
            var n;
            Object(_chunks_languageUtils_js__WEBPACK_IMPORTED_MODULE_6__["p"])(r, 2, 4);
            var a = Object(_chunks_languageUtils_js__WEBPACK_IMPORTED_MODULE_6__["c"])(Object(_chunks_languageUtils_js__WEBPACK_IMPORTED_MODULE_6__["C"])(r[2], -1));
            var o = Object(_chunks_languageUtils_js__WEBPACK_IMPORTED_MODULE_6__["d"])(Object(_chunks_languageUtils_js__WEBPACK_IMPORTED_MODULE_6__["C"])(r[3], !1));
            if (-1 === a || null === a || !0 === o ? n = Object(_chunks_languageUtils_js__WEBPACK_IMPORTED_MODULE_6__["e"])(r[0]).split(Object(_chunks_languageUtils_js__WEBPACK_IMPORTED_MODULE_6__["e"])(r[1])) : (isNaN(a) && (a = -1), a < -1 && (a = -1), n = Object(_chunks_languageUtils_js__WEBPACK_IMPORTED_MODULE_6__["e"])(r[0]).split(Object(_chunks_languageUtils_js__WEBPACK_IMPORTED_MODULE_6__["e"])(r[1]), a)), !1 === o) return n;
            var f = [];

            for (var _t43 = 0; _t43 < n.length && !(-1 !== a && f.length >= a); _t43++) {
              "" !== n[_t43] && void 0 !== n[_t43] && f.push(n[_t43]);
            }

            return f;
          });
        }, t.text = function (t, r) {
          return e(t, r, function (t, e, r) {
            return Object(_chunks_languageUtils_js__WEBPACK_IMPORTED_MODULE_6__["p"])(r, 1, 2), Object(_chunks_languageUtils_js__WEBPACK_IMPORTED_MODULE_6__["t"])(r[0], r[1]);
          });
        }, t.concatenate = function (t, r) {
          return e(t, r, function (t, e, r) {
            var n = [];
            if (r.length < 1) return "";

            if (Object(_chunks_languageUtils_js__WEBPACK_IMPORTED_MODULE_6__["h"])(r[0])) {
              var _t44 = Object(_chunks_languageUtils_js__WEBPACK_IMPORTED_MODULE_6__["C"])(r[2], "");

              for (var _e48 = 0; _e48 < r[0].length; _e48++) {
                n[_e48] = Object(_chunks_languageUtils_js__WEBPACK_IMPORTED_MODULE_6__["t"])(r[0][_e48], _t44);
              }

              return r.length > 1 ? n.join(r[1]) : n.join("");
            }

            if (Object(_chunks_languageUtils_js__WEBPACK_IMPORTED_MODULE_6__["o"])(r[0])) {
              var _t45 = Object(_chunks_languageUtils_js__WEBPACK_IMPORTED_MODULE_6__["C"])(r[2], "");

              for (var _e49 = 0; _e49 < r[0].length(); _e49++) {
                n[_e49] = Object(_chunks_languageUtils_js__WEBPACK_IMPORTED_MODULE_6__["t"])(r[0].get(_e49), _t45);
              }

              return r.length > 1 ? n.join(r[1]) : n.join("");
            }

            for (var _t46 = 0; _t46 < r.length; _t46++) {
              n[_t46] = Object(_chunks_languageUtils_js__WEBPACK_IMPORTED_MODULE_6__["t"])(r[_t46]);
            }

            return n.join("");
          });
        }, t.reverse = function (t, r) {
          return e(t, r, function (t, e, r) {
            if (Object(_chunks_languageUtils_js__WEBPACK_IMPORTED_MODULE_6__["p"])(r, 1, 1), Object(_chunks_languageUtils_js__WEBPACK_IMPORTED_MODULE_6__["h"])(r[0])) {
              var _t47 = r[0].slice(0);

              return _t47.reverse(), _t47;
            }

            if (Object(_chunks_languageUtils_js__WEBPACK_IMPORTED_MODULE_6__["o"])(r[0])) {
              var _t48 = r[0].toArray().slice(0);

              return _t48.reverse(), _t48;
            }

            throw new Error("Invalid Parameter");
          });
        }, t.replace = function (t, r) {
          return e(t, r, function (t, e, r) {
            Object(_chunks_languageUtils_js__WEBPACK_IMPORTED_MODULE_6__["p"])(r, 3, 4);
            var n = Object(_chunks_languageUtils_js__WEBPACK_IMPORTED_MODULE_6__["e"])(r[0]),
                a = Object(_chunks_languageUtils_js__WEBPACK_IMPORTED_MODULE_6__["e"])(r[1]),
                o = Object(_chunks_languageUtils_js__WEBPACK_IMPORTED_MODULE_6__["e"])(r[2]);
            return 4 !== r.length || Object(_chunks_languageUtils_js__WEBPACK_IMPORTED_MODULE_6__["d"])(r[3]) ? Object(_chunks_languageUtils_js__WEBPACK_IMPORTED_MODULE_6__["G"])(n, a, o) : n.replace(a, o);
          });
        }, t.schema = function (t, r) {
          return e(t, r, function (t, e, r) {
            if (r[0] instanceof _Feature_js__WEBPACK_IMPORTED_MODULE_11__["default"]) {
              var _t49 = r[0].schema();

              return _t49 ? _Dictionary_js__WEBPACK_IMPORTED_MODULE_7__["default"].convertObjectToArcadeDictionary(_t49) : null;
            }

            throw new Error("Invalid Parameter");
          });
        }, t.subtypes = function (t, r) {
          return e(t, r, function (t, e, r) {
            if (Object(_chunks_languageUtils_js__WEBPACK_IMPORTED_MODULE_6__["p"])(r, 1, 1), r[0] instanceof _Feature_js__WEBPACK_IMPORTED_MODULE_11__["default"]) {
              var _t50 = r[0].subtypes();

              return _t50 ? _Dictionary_js__WEBPACK_IMPORTED_MODULE_7__["default"].convertObjectToArcadeDictionary(_t50) : null;
            }

            throw new Error("Invalid Parameter");
          });
        }, t.subtypecode = function (t, r) {
          return e(t, r, function (t, e, r) {
            if (Object(_chunks_languageUtils_js__WEBPACK_IMPORTED_MODULE_6__["p"])(r, 1, 1), r[0] instanceof _Feature_js__WEBPACK_IMPORTED_MODULE_11__["default"]) {
              var _t51 = r[0].subtypes();

              if (!_t51) return null;

              if (_t51.subtypeField && r[0].hasField(_t51.subtypeField)) {
                var _e50 = r[0].field(_t51.subtypeField);

                var _iterator12 = _createForOfIteratorHelper(_t51.subtypes),
                    _step12;

                try {
                  for (_iterator12.s(); !(_step12 = _iterator12.n()).done;) {
                    var _r43 = _step12.value;
                    if (_r43.code === _e50) return _r43.code;
                  }
                } catch (err) {
                  _iterator12.e(err);
                } finally {
                  _iterator12.f();
                }

                return null;
              }

              return null;
            }

            throw new Error("Invalid Parameter");
          });
        }, t.subtypename = function (t, r) {
          return e(t, r, function (t, e, r) {
            if (Object(_chunks_languageUtils_js__WEBPACK_IMPORTED_MODULE_6__["p"])(r, 1, 1), r[0] instanceof _Feature_js__WEBPACK_IMPORTED_MODULE_11__["default"]) {
              var _t52 = r[0].subtypes();

              if (!_t52) return "";

              if (_t52.subtypeField && r[0].hasField(_t52.subtypeField)) {
                var _e51 = r[0].field(_t52.subtypeField);

                var _iterator13 = _createForOfIteratorHelper(_t52.subtypes),
                    _step13;

                try {
                  for (_iterator13.s(); !(_step13 = _iterator13.n()).done;) {
                    var _r44 = _step13.value;
                    if (_r44.code === _e51) return _r44.name;
                  }
                } catch (err) {
                  _iterator13.e(err);
                } finally {
                  _iterator13.f();
                }

                return "";
              }

              return "";
            }

            throw new Error("Invalid Parameter");
          });
        }, t.gdbversion = function (t, r) {
          return e(t, r, function (t, e, r) {
            if (Object(_chunks_languageUtils_js__WEBPACK_IMPORTED_MODULE_6__["p"])(r, 1, 1), r[0] instanceof _Feature_js__WEBPACK_IMPORTED_MODULE_11__["default"]) return r[0].gdbVersion();
            throw new Error("Invalid Parameter");
          });
        }, t.domain = function (t, r) {
          return e(t, r, function (t, e, r) {
            if (Object(_chunks_languageUtils_js__WEBPACK_IMPORTED_MODULE_6__["p"])(r, 2, 3), r[0] instanceof _Feature_js__WEBPACK_IMPORTED_MODULE_11__["default"]) {
              var _t53 = r[0].fullDomain(Object(_chunks_languageUtils_js__WEBPACK_IMPORTED_MODULE_6__["e"])(r[1]), void 0 === r[2] ? void 0 : Object(_chunks_languageUtils_js__WEBPACK_IMPORTED_MODULE_6__["c"])(r[2]));

              return _t53 && _t53.domain ? "coded-value" === _t53.domain.type || "codedValue" === _t53.domain.type ? _Dictionary_js__WEBPACK_IMPORTED_MODULE_7__["default"].convertObjectToArcadeDictionary({
                type: "codedValue",
                name: _t53.domain.name,
                dataType: _featureset_support_shared_js__WEBPACK_IMPORTED_MODULE_10__["layerFieldEsriConstants"][_t53.field.type],
                codedValues: _t53.domain.codedValues.map(function (t) {
                  return {
                    name: t.name,
                    code: t.code
                  };
                })
              }) : _Dictionary_js__WEBPACK_IMPORTED_MODULE_7__["default"].convertObjectToArcadeDictionary({
                type: "range",
                name: _t53.domain.name,
                dataType: _featureset_support_shared_js__WEBPACK_IMPORTED_MODULE_10__["layerFieldEsriConstants"][_t53.field.type],
                min: _t53.domain.min,
                max: _t53.domain.max
              }) : null;
            }

            throw new Error("Invalid Parameter");
          });
        }, t.domainname = function (t, r) {
          return e(t, r, function (t, e, r) {
            if (Object(_chunks_languageUtils_js__WEBPACK_IMPORTED_MODULE_6__["p"])(r, 2, 4), r[0] instanceof _Feature_js__WEBPACK_IMPORTED_MODULE_11__["default"]) return r[0].domainValueLookup(Object(_chunks_languageUtils_js__WEBPACK_IMPORTED_MODULE_6__["e"])(r[1]), r[2], void 0 === r[3] ? void 0 : Object(_chunks_languageUtils_js__WEBPACK_IMPORTED_MODULE_6__["c"])(r[3]));
            throw new Error("Invalid Parameter");
          });
        }, t.domaincode = function (t, r) {
          return e(t, r, function (t, e, r) {
            if (Object(_chunks_languageUtils_js__WEBPACK_IMPORTED_MODULE_6__["p"])(r, 2, 4), r[0] instanceof _Feature_js__WEBPACK_IMPORTED_MODULE_11__["default"]) return r[0].domainCodeLookup(Object(_chunks_languageUtils_js__WEBPACK_IMPORTED_MODULE_6__["e"])(r[1]), r[2], void 0 === r[3] ? void 0 : Object(_chunks_languageUtils_js__WEBPACK_IMPORTED_MODULE_6__["c"])(r[3]));
            throw new Error("Invalid Parameter");
          });
        }, t.urlencode = function (t, r) {
          return e(t, r, function (t, e, r) {
            if (Object(_chunks_languageUtils_js__WEBPACK_IMPORTED_MODULE_6__["p"])(r, 1, 1), null === r[0]) return "";

            if (r[0] instanceof _Dictionary_js__WEBPACK_IMPORTED_MODULE_7__["default"]) {
              var _t54 = "";

              var _iterator14 = _createForOfIteratorHelper(r[0].keys()),
                  _step14;

              try {
                for (_iterator14.s(); !(_step14 = _iterator14.n()).done;) {
                  var _e52 = _step14.value;
                  var n = r[0].field(_e52);
                  "" !== _t54 && (_t54 += "&"), _t54 += null === n ? encodeURIComponent(_e52) + "=" : encodeURIComponent(_e52) + "=" + encodeURIComponent(n);
                }
              } catch (err) {
                _iterator14.e(err);
              } finally {
                _iterator14.f();
              }

              return _t54;
            }

            return encodeURIComponent(Object(_chunks_languageUtils_js__WEBPACK_IMPORTED_MODULE_6__["e"])(r[0]));
          });
        }, t.hash = function (t, r) {
          return e(t, r, function (t, e, r) {
            Object(_chunks_languageUtils_js__WEBPACK_IMPORTED_MODULE_6__["p"])(r, 1, 1);
            var n = new _hash_js__WEBPACK_IMPORTED_MODULE_12__["XXH"](0);
            return C(r[0], n, {
              map: new Map(),
              currentLength: 0
            }), n.digest();
          });
        };
      }
      /***/

    },

    /***/
    "Xfxc":
    /*!**********************************************************!*\
      !*** ./node_modules/@arcgis/core/arcade/ArcadePortal.js ***!
      \**********************************************************/

    /*! exports provided: default */

    /***/
    function Xfxc(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony import */


      var _Dictionary_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ./Dictionary.js */
      "D5C5");
      /*
      All material copyright ESRI, All Rights Reserved, unless otherwise specified.
      See https://js.arcgis.com/4.18/esri/copyright.txt for details.
      */

      /* harmony default export */


      __webpack_exports__["default"] = /*#__PURE__*/function (_Dictionary_js__WEBPA) {
        _inherits(_class, _Dictionary_js__WEBPA);

        var _super2 = _createSuper(_class);

        function _class(t) {
          var _this2;

          _classCallCheck(this, _class);

          _this2 = _super2.call(this), _this2.immutable = !1, _this2.setField("url", t), _this2.immutable = !0;
          return _this2;
        }

        return _class;
      }(_Dictionary_js__WEBPACK_IMPORTED_MODULE_0__["default"]);
      /***/

    },

    /***/
    "XhLy":
    /*!************************************************************!*\
      !*** ./node_modules/@arcgis/core/arcade/functions/hash.js ***!
      \************************************************************/

    /*! exports provided: XXH */

    /***/
    function XhLy(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "XXH", function () {
        return s;
      });
      /*
      All material copyright ESRI, All Rights Reserved, unless otherwise specified.
      See https://js.arcgis.com/4.18/esri/copyright.txt for details.
      */


      function t(t) {
        var s = [];

        for (var n = 0, e = t.length; n < e; n++) {
          var _e53 = t.charCodeAt(n);

          _e53 < 128 ? s.push(_e53) : _e53 < 2048 ? s.push(192 | _e53 >> 6, 128 | 63 & _e53) : _e53 < 55296 || _e53 >= 57344 ? s.push(224 | _e53 >> 12, 128 | _e53 >> 6 & 63, 128 | 63 & _e53) : (n++, _e53 = 65536 + ((1023 & _e53) << 10 | 1023 & t.charCodeAt(n)), s.push(240 | _e53 >> 18, 128 | _e53 >> 12 & 63, 128 | _e53 >> 6 & 63, 128 | 63 & _e53));
        }

        return new Uint8Array(s);
      }

      var s = /*#__PURE__*/function () {
        function s(t) {
          _classCallCheck(this, s);

          this.seed = t, this.totallen = 0, this.bufs = [], this.init();
        }

        _createClass(s, [{
          key: "init",
          value: function init() {
            return this.bufs = [], this.totallen = 0, this;
          }
        }, {
          key: "updateFloatArray",
          value: function updateFloatArray(_s6) {
            var n = [];

            var _iterator15 = _createForOfIteratorHelper(_s6),
                _step15;

            try {
              for (_iterator15.s(); !(_step15 = _iterator15.n()).done;) {
                var _t55 = _step15.value;
                isNaN(_t55) ? n.push("NaN") : _t55 === 1 / 0 ? n.push("Infinity") : _t55 === -1 / 0 ? n.push("-Infinity") : 0 === _t55 ? n.push("0") : n.push(_t55.toString(16));
              }
            } catch (err) {
              _iterator15.e(err);
            } finally {
              _iterator15.f();
            }

            this.update(t(n.join("")));
          }
        }, {
          key: "updateIntArray",
          value: function updateIntArray(t) {
            var _s7 = Int32Array.from(t);

            this.update(new Uint8Array(_s7.buffer));
          }
        }, {
          key: "updateUint8Array",
          value: function updateUint8Array(t) {
            this.update(Uint8Array.from(t));
          }
        }, {
          key: "updateWithString",
          value: function updateWithString(_s8) {
            return this.update(t(_s8));
          }
        }, {
          key: "update",
          value: function update(t) {
            return this.bufs.push(t), this.totallen += t.length, this;
          }
        }, {
          key: "digest",
          value: function digest() {
            var t = new Uint8Array(this.totallen);
            var _s9 = 0;

            var _iterator16 = _createForOfIteratorHelper(this.bufs),
                _step16;

            try {
              for (_iterator16.s(); !(_step16 = _iterator16.n()).done;) {
                var n = _step16.value;
                t.set(n, _s9), _s9 += n.length;
              }
            } catch (err) {
              _iterator16.e(err);
            } finally {
              _iterator16.f();
            }

            return this.init(), this.xxHash32(t, this.seed);
          }
        }, {
          key: "xxHash32",
          value: function xxHash32(t) {
            var _s10 = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;

            var n = t;
            var e = _s10 + 374761393 & 4294967295,
                r = 0;

            if (n.length >= 16) {
              var _n19 = [_s10 + 2654435761 + 2246822519 & 4294967295, _s10 + 2246822519 & 4294967295, _s10 + 0 & 4294967295, _s10 - 2654435761 & 4294967295],
                  _h2 = t,
                  i = _h2.length - 16;
              var o = 0;

              for (r = 0; (4294967280 & r) <= i; r += 4) {
                var _t56 = r,
                    _s12 = 2246822519 * (_h2[_t56 + 0] + (_h2[_t56 + 1] << 8)) + (2246822519 * (_h2[_t56 + 2] + (_h2[_t56 + 3] << 8)) << 16);

                var _e54 = _n19[o] + _s12 & 4294967295;

                _e54 = _e54 << 13 | _e54 >>> 19;

                var _i9 = 65535 & _e54,
                    u = _e54 >>> 16;

                _n19[o] = 2654435761 * _i9 + (2654435761 * u << 16) & 4294967295, o = o + 1 & 3;
              }

              e = (_n19[0] << 1 | _n19[0] >>> 31) + (_n19[1] << 7 | _n19[1] >>> 25) + (_n19[2] << 12 | _n19[2] >>> 20) + (_n19[3] << 18 | _n19[3] >>> 14) & 4294967295;
            }

            e = e + t.length & 4294967295;
            var h = t.length - 4;

            for (; r <= h; r += 4) {
              var _t57 = r;
              e = e + (3266489917 * (n[_t57 + 0] + (n[_t57 + 1] << 8)) + (3266489917 * (n[_t57 + 2] + (n[_t57 + 3] << 8)) << 16)) & 4294967295, e = e << 17 | e >>> 15, e = 668265263 * (65535 & e) + (668265263 * (e >>> 16) << 16) & 4294967295;
            }

            for (; r < n.length; ++r) {
              e += 374761393 * n[r], e = e << 11 | e >>> 21, e = 2654435761 * (65535 & e) + (2654435761 * (e >>> 16) << 16) & 4294967295;
            }

            return e ^= e >>> 15, e = (2246822519 * (65535 & e) & 4294967295) + (2246822519 * (e >>> 16) << 16), e ^= e >>> 13, e = (3266489917 * (65535 & e) & 4294967295) + (3266489917 * (e >>> 16) << 16), e ^= e >>> 16, e < 0 ? e + 4294967296 : e;
          }
        }]);

        return s;
      }();
      /***/

    },

    /***/
    "Xrjs":
    /*!*****************************************************!*\
      !*** ./node_modules/@arcgis/core/arcade/Feature.js ***!
      \*****************************************************/

    /*! exports provided: default */

    /***/
    function Xrjs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony import */


      var _core_maybe_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ../core/maybe.js */
      "srIe");
      /* harmony import */


      var _geometry_Geometry_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ../geometry/Geometry.js */
      "N2DF");
      /* harmony import */


      var _geometry_Point_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ../geometry/Point.js */
      "SuVq");
      /* harmony import */


      var _geometry_support_jsonUtils_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ../geometry/support/jsonUtils.js */
      "qatw");
      /* harmony import */


      var _ImmutableArray_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ./ImmutableArray.js */
      "qea6");
      /* harmony import */


      var _chunks_languageUtils_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ../chunks/languageUtils.js */
      "idrm");
      /* harmony import */


      var _Dictionary_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ./Dictionary.js */
      "D5C5");
      /* harmony import */


      var _featureset_support_shared_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! ./featureset/support/shared.js */
      "hTzF");
      /* harmony import */


      var _layers_graphics_featureConversionUtils_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! ../layers/graphics/featureConversionUtils.js */
      "ZlUD");
      /*
      All material copyright ESRI, All Rights Reserved, unless otherwise specified.
      See https://js.arcgis.com/4.18/esri/copyright.txt for details.
      */


      var g = /*#__PURE__*/function () {
        function g() {
          _classCallCheck(this, g);

          this.declaredClass = "esri.arcade.Feature", this._optimizedGeomDefinition = null, this._geometry = null, this.attributes = null, this._layer = null, this._datesfixed = !0, this.immutable = !0, this._datefields = null, this.immutable = !0;
        }

        _createClass(g, [{
          key: "repurposeFromGraphicLikeObject",
          value: function repurposeFromGraphicLikeObject(t, e) {
            var i = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : null;
            null === e && (e = {}), this.attributes = e, this._geometry = t || null, this._layer = i, this._layer ? this._datesfixed = !1 : this._datesfixed = !0;
          }
        }, {
          key: "repurposeFromAdapter",
          value: function repurposeFromAdapter(t) {
            var e = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : null;
            this._adapter = t, this._layer = e;
          }
        }, {
          key: "castToText",
          value: function castToText() {
            if (this._adapter) return this._adapter.castToText();
            var t = "";
            !1 === this._datesfixed && this._fixDates();

            for (var e in this.attributes) {
              "" !== t && (t += ",");
              var r = this.attributes[e];
              null == r ? t += JSON.stringify(e) + ":null" : Object(_chunks_languageUtils_js__WEBPACK_IMPORTED_MODULE_5__["i"])(r) || Object(_chunks_languageUtils_js__WEBPACK_IMPORTED_MODULE_5__["a"])(r) || Object(_chunks_languageUtils_js__WEBPACK_IMPORTED_MODULE_5__["b"])(r) ? t += JSON.stringify(e) + ":" + JSON.stringify(r) : r instanceof _geometry_Geometry_js__WEBPACK_IMPORTED_MODULE_1__["default"] || r instanceof _ImmutableArray_js__WEBPACK_IMPORTED_MODULE_4__["default"] || r instanceof Array ? t += JSON.stringify(e) + ":" + Object(_chunks_languageUtils_js__WEBPACK_IMPORTED_MODULE_5__["t"])(r) : r instanceof Date ? t += JSON.stringify(e) + ":" + JSON.stringify(r) : null !== r && "object" == typeof r && void 0 !== r.castToText && (t += JSON.stringify(e) + ":" + r.castToText());
            }

            return '{"geometry":' + (null === this.geometry() ? "null" : Object(_chunks_languageUtils_js__WEBPACK_IMPORTED_MODULE_5__["t"])(this.geometry())) + ',"attributes":{' + t + "}}";
          }
        }, {
          key: "_fixDates",
          value: function _fixDates() {
            if (null !== this._datefields) return this._datefields.length > 0 && this._fixDateFields(this._datefields), void (this._datesfixed = !0);
            var t = [];

            for (var e = 0; e < this._layer.fields.length; e++) {
              var i = this._layer.fields[e];
              "date" !== i.type && "esriFieldTypeDate" !== i.type || t.push(i.name);
            }

            this._datefields = t, t.length > 0 && this._fixDateFields(t), this._datesfixed = !0;
          }
        }, {
          key: "_fixDateFields",
          value: function _fixDateFields(t) {
            this.attributes = _objectSpread({}, this.attributes);

            for (var e = 0; e < t.length; e++) {
              var i = this.attributes[t[e]];
              if (null === i) ;else if (void 0 === i) {
                for (var r in this.attributes) {
                  if (r.toLowerCase() === t[e].toLowerCase()) {
                    i = this.attributes[r], null !== i && (i instanceof Date || (this.attributes[r] = new Date(i)));
                    break;
                  }
                }
              } else i instanceof Date || (this.attributes[t[e]] = new Date(i));
            }
          }
        }, {
          key: "geometry",
          value: function geometry() {
            return this._adapter ? this._adapter.geometry() : (null === this._geometry || this._geometry instanceof _geometry_Geometry_js__WEBPACK_IMPORTED_MODULE_1__["default"] || (this._optimizedGeomDefinition ? (this._geometry = Object(_core_maybe_js__WEBPACK_IMPORTED_MODULE_0__["unwrap"])(Object(_geometry_support_jsonUtils_js__WEBPACK_IMPORTED_MODULE_3__["fromJSON"])(Object(_layers_graphics_featureConversionUtils_js__WEBPACK_IMPORTED_MODULE_8__["convertToGeometry"])(this._geometry, this._optimizedGeomDefinition.geometryType, this._optimizedGeomDefinition.hasZ, this._optimizedGeomDefinition.hasM))), this._geometry.spatialReference = this._optimizedGeomDefinition.spatialReference) : this._geometry = Object(_core_maybe_js__WEBPACK_IMPORTED_MODULE_0__["unwrap"])(Object(_geometry_support_jsonUtils_js__WEBPACK_IMPORTED_MODULE_3__["fromJSON"])(this._geometry))), this._geometry);
          }
        }, {
          key: "field",
          value: function field(t) {
            if (this._adapter) return this._adapter.field(t);
            !1 === this._datesfixed && this._fixDates();
            var e = this.attributes[t];
            if (void 0 !== e) return e;
            var i = t.toLowerCase();

            for (var _t58 in this.attributes) {
              if (_t58.toLowerCase() === i) return this.attributes[_t58];
            }

            if (this._hasFieldDefinition(i)) return null;
            throw new Error("Field not Found : " + t);
          }
        }, {
          key: "_hasFieldDefinition",
          value: function _hasFieldDefinition(t) {
            if (null === this._layer) return !1;

            for (var e = 0; e < this._layer.fields.length; e++) {
              if (this._layer.fields[e].name.toLowerCase() === t) return !0;
            }

            return !1;
          }
        }, {
          key: "_field",
          value: function _field(t) {
            var e;
            if (this._adapter) return null != (e = this._adapter.field(t)) ? e : null;
            !1 === this._datesfixed && this._fixDates();
            var i = t.toLowerCase(),
                r = this.attributes[t];
            if (void 0 !== r) return r;

            for (var _t59 in this.attributes) {
              if (_t59.toLowerCase() === i) return this.attributes[_t59];
            }

            return null;
          }
        }, {
          key: "setField",
          value: function setField(t, e) {
            if (this.immutable) throw new Error("Feature is Immutable");
            if (!1 === Object(_chunks_languageUtils_js__WEBPACK_IMPORTED_MODULE_5__["j"])(e)) throw new Error("Illegal Value Assignment to Feature");
            if (this._adapter) return void this._adapter.setField(t, e);
            var i = t.toLowerCase();

            if (void 0 === this.attributes[t]) {
              for (var _t60 in this.attributes) {
                if (_t60.toLowerCase() === i) return void (this.attributes[_t60] = e);
              }

              this.attributes[t] = e;
            } else this.attributes[t] = e;
          }
        }, {
          key: "hasField",
          value: function hasField(t) {
            if (this._adapter) return this._adapter.hasField(t);
            var e = t.toLowerCase();
            if (void 0 !== this.attributes[t]) return !0;

            for (var _t61 in this.attributes) {
              if (_t61.toLowerCase() === e) return !0;
            }

            return !!this._hasFieldDefinition(e);
          }
        }, {
          key: "keys",
          value: function keys() {
            if (this._adapter) return this._adapter.keys();
            var t = [];
            var e = {};

            for (var i in this.attributes) {
              t.push(i), e[i.toLowerCase()] = 1;
            }

            if (null !== this._layer) for (var _i10 = 0; _i10 < this._layer.fields.length; _i10++) {
              var r = this._layer.fields[_i10];
              1 !== e[r.name.toLowerCase()] && t.push(r.name);
            }
            return t = t.sort(), t;
          }
        }, {
          key: "fullDomain",
          value: function fullDomain(t, e) {
            if (null === this._layer) return null;
            if (!this._layer.fields) return null;
            return Object(_chunks_languageUtils_js__WEBPACK_IMPORTED_MODULE_5__["k"])(t, this._layer, this, e);
          }
        }, {
          key: "subtypes",
          value: function subtypes() {
            return null === this._layer ? null : this._layer.fields && this._layer.typeIdField ? {
              subtypeField: this._layer.typeIdField,
              subtypes: this._layer.types ? this._layer.types.map(function (t) {
                return {
                  name: t.name,
                  code: t.id
                };
              }) : []
            } : null;
          }
        }, {
          key: "domainValueLookup",
          value: function domainValueLookup(t, e, i) {
            if (null === this._layer) return null;
            if (!this._layer.fields) return null;
            var r = Object(_chunks_languageUtils_js__WEBPACK_IMPORTED_MODULE_5__["k"])(t, this._layer, this, i);
            if (void 0 === e) try {
              e = this.field(t);
            } catch (t) {
              return null;
            }
            return Object(_chunks_languageUtils_js__WEBPACK_IMPORTED_MODULE_5__["l"])(r, e);
          }
        }, {
          key: "gdbVersion",
          value: function gdbVersion() {
            if (null === this._layer) return "";
            var t = this._layer.gdbVersion;
            return void 0 === t ? "" : "" === t && this._layer.capabilities && this._layer.capabilities.isVersioned ? "SDE.DEFAULT" : t;
          }
        }, {
          key: "domainCodeLookup",
          value: function domainCodeLookup(t, e, i) {
            if (null === this._layer) return null;
            if (!this._layer.fields) return null;

            if (void 0 === e) {
              try {
                e = this.field(t);
              } catch (t) {
                return null;
              }

              return e;
            }

            var r = Object(_chunks_languageUtils_js__WEBPACK_IMPORTED_MODULE_5__["k"])(t, this._layer, this, i);
            return Object(_chunks_languageUtils_js__WEBPACK_IMPORTED_MODULE_5__["m"])(r, e);
          }
        }, {
          key: "schema",
          value: function schema() {
            if (null === this._layer) return null;
            if (!this._layer.fields) return null;
            var t = [];

            var _iterator17 = _createForOfIteratorHelper(this._layer.fields),
                _step17;

            try {
              for (_iterator17.s(); !(_step17 = _iterator17.n()).done;) {
                var e = _step17.value;
                t.push(Object(_featureset_support_shared_js__WEBPACK_IMPORTED_MODULE_7__["esriFieldToJson"])(e));
              }
            } catch (err) {
              _iterator17.e(err);
            } finally {
              _iterator17.f();
            }

            return {
              objectIdField: this._layer.objectIdField,
              globalIdField: this._layer.globalIdField,
              geometryType: void 0 === _featureset_support_shared_js__WEBPACK_IMPORTED_MODULE_7__["layerGeometryEsriRestConstants"][this._layer.geometryType] ? "" : _featureset_support_shared_js__WEBPACK_IMPORTED_MODULE_7__["layerGeometryEsriRestConstants"][this._layer.geometryType],
              fields: t
            };
          }
        }], [{
          key: "createFromGraphic",
          value: function createFromGraphic(e) {
            var i = new g();
            return i._geometry = Object(_core_maybe_js__WEBPACK_IMPORTED_MODULE_0__["isSome"])(e.geometry) ? e.geometry : null, void 0 === e.attributes || null === e.attributes ? i.attributes = {} : i.attributes = e.attributes, e._sourceLayer ? (i._layer = e._sourceLayer, i._datesfixed = !1) : e._layer ? (i._layer = e._layer, i._datesfixed = !1) : e.layer ? (i._layer = e.layer, i._datesfixed = !1) : e.sourceLayer && (i._layer = e.sourceLayer, i._datesfixed = !1), i;
          }
        }, {
          key: "createFromArcadeFeature",
          value: function createFromArcadeFeature(t) {
            var e = new g();
            return e._datesfixed = t._datesfixed, e.attributes = t.attributes, e._geometry = t._geometry, e._optimizedGeomDefinition = t._optimizedGeomDefinition, t._layer && (e._layer = t._layer), e;
          }
        }, {
          key: "createFromOptimisedFeature",
          value: function createFromOptimisedFeature(t, e, i) {
            var r = new g();
            return r._geometry = t.geometry ? {
              geometry: t.geometry
            } : null, r._optimizedGeomDefinition = i, r.attributes = t.attributes || {}, r._layer = e, r._datesfixed = !1, r;
          }
        }, {
          key: "createFromArcadeDictionary",
          value: function createFromArcadeDictionary(t) {
            var e = new g();
            return e.attributes = t.field("attributes"), null !== e.attributes && e.attributes instanceof _Dictionary_js__WEBPACK_IMPORTED_MODULE_6__["default"] ? (e.attributes = e.attributes.attributes, null === e.attributes && (e.attributes = {})) : e.attributes = {}, e._geometry = t.field("geometry"), null !== e._geometry && (e._geometry instanceof _Dictionary_js__WEBPACK_IMPORTED_MODULE_6__["default"] ? e._geometry = g.parseGeometryFromDictionary(e._geometry) : e._geometry instanceof _geometry_Geometry_js__WEBPACK_IMPORTED_MODULE_1__["default"] || (e._geometry = null)), e;
          }
        }, {
          key: "createFromGraphicLikeObject",
          value: function createFromGraphicLikeObject(e, i) {
            var r = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : null;
            var s = new g();
            return null === i && (i = {}), s.attributes = i, s._geometry = Object(_core_maybe_js__WEBPACK_IMPORTED_MODULE_0__["isSome"])(e) ? e : null, s._layer = r, s._layer && (s._datesfixed = !1), s._adapter = null, s;
          }
        }, {
          key: "parseGeometryFromDictionary",
          value: function parseGeometryFromDictionary(t) {
            var e = g.convertDictionaryToJson(t, !0);
            return void 0 !== e.hasm && (e.hasM = e.hasm, delete e.hasm), void 0 !== e.hasz && (e.hasZ = e.hasz, delete e.hasz), void 0 !== e.spatialreference && (e.spatialReference = e.spatialreference, delete e.spatialreference), void 0 !== e.rings && (e.rings = this.fixPathArrays(e.rings, !0 === e.hasZ, !0 === e.hasZ)), void 0 !== e.paths && (e.paths = this.fixPathArrays(e.paths, !0 === e.hasZ, !0 === e.hasM)), void 0 !== e.points && (e.points = this.fixPointArrays(e.points, !0 === e.hasZ, !0 === e.hasM)), Object(_geometry_support_jsonUtils_js__WEBPACK_IMPORTED_MODULE_3__["fromJSON"])(e);
          }
        }, {
          key: "fixPathArrays",
          value: function fixPathArrays(t, e, i) {
            var r = [];
            if (t instanceof Array) for (var s = 0; s < t.length; s++) {
              r.push(this.fixPointArrays(t[s], e, i));
            } else if (t instanceof _ImmutableArray_js__WEBPACK_IMPORTED_MODULE_4__["default"]) for (var _s13 = 0; _s13 < t.length(); _s13++) {
              r.push(this.fixPointArrays(t.get(_s13), e, i));
            }
            return r;
          }
        }, {
          key: "fixPointArrays",
          value: function fixPointArrays(t, e, i) {
            var s = [];
            if (t instanceof Array) for (var o = 0; o < t.length; o++) {
              var n = t[o];
              n instanceof _geometry_Point_js__WEBPACK_IMPORTED_MODULE_2__["default"] ? e && i ? s.push([n.x, n.y, n.z, n.m]) : e ? s.push([n.x, n.y, n.z]) : i ? s.push([n.x, n.y, n.m]) : s.push([n.x, n.y]) : n instanceof _ImmutableArray_js__WEBPACK_IMPORTED_MODULE_4__["default"] ? s.push(n.toArray()) : s.push(n);
            } else if (t instanceof _ImmutableArray_js__WEBPACK_IMPORTED_MODULE_4__["default"]) for (var _o14 = 0; _o14 < t.length(); _o14++) {
              var _n20 = t.get(_o14);

              _n20 instanceof _geometry_Point_js__WEBPACK_IMPORTED_MODULE_2__["default"] ? e && i ? s.push([_n20.x, _n20.y, _n20.z, _n20.m]) : e ? s.push([_n20.x, _n20.y, _n20.z]) : i ? s.push([_n20.x, _n20.y, _n20.m]) : s.push([_n20.x, _n20.y]) : _n20 instanceof _ImmutableArray_js__WEBPACK_IMPORTED_MODULE_4__["default"] ? s.push(_n20.toArray()) : s.push(_n20);
            }
            return s;
          }
        }, {
          key: "convertDictionaryToJson",
          value: function convertDictionaryToJson(t) {
            var e = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : !1;
            var i = {};

            for (var r in t.attributes) {
              var s = t.attributes[r];
              s instanceof _Dictionary_js__WEBPACK_IMPORTED_MODULE_6__["default"] && (s = g.convertDictionaryToJson(s)), e ? i[r.toLowerCase()] = s : i[r] = s;
            }

            return i;
          }
        }, {
          key: "parseAttributesFromDictionary",
          value: function parseAttributesFromDictionary(t) {
            var e = {};

            for (var i in t.attributes) {
              var r = t.attributes[i];
              if (!Object(_chunks_languageUtils_js__WEBPACK_IMPORTED_MODULE_5__["j"])(r)) throw new Error("Illegal Argument");
              e[i] = r;
            }

            return e;
          }
        }, {
          key: "fromJson",
          value: function fromJson(t) {
            var e = null;
            null !== t.geometry && void 0 !== t.geometry && (e = Object(_geometry_support_jsonUtils_js__WEBPACK_IMPORTED_MODULE_3__["fromJSON"])(t.geometry));
            var i = {};
            if (null !== t.attributes && void 0 !== t.attributes) for (var _e55 in t.attributes) {
              var r = t.attributes[_e55];
              if (null === r) i[_e55] = r;else {
                if (!(Object(_chunks_languageUtils_js__WEBPACK_IMPORTED_MODULE_5__["b"])(r) || Object(_chunks_languageUtils_js__WEBPACK_IMPORTED_MODULE_5__["a"])(r) || Object(_chunks_languageUtils_js__WEBPACK_IMPORTED_MODULE_5__["i"])(r) || Object(_chunks_languageUtils_js__WEBPACK_IMPORTED_MODULE_5__["f"])(r))) throw new Error("Illegal Argument");
                i[_e55] = r;
              }
            }
            return g.createFromGraphicLikeObject(e, i, null);
          }
        }]);

        return g;
      }();
      /* harmony default export */


      __webpack_exports__["default"] = g;
      /***/
    },

    /***/
    "Xu93":
    /*!***********************************************************!*\
      !*** ./node_modules/@arcgis/core/arcade/lib/character.js ***!
      \***********************************************************/

    /*! exports provided: Character */

    /***/
    function Xu93(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "Character", function () {
        return D;
      });
      /*
      All material copyright ESRI, All Rights Reserved, unless otherwise specified.
      See https://js.arcgis.com/4.18/esri/copyright.txt for details.
      */


      var u = {
        NonAsciiIdentifierStart: /[\xAA\xB5\xBA\xC0-\xD6\xD8-\xF6\xF8-\u02C1\u02C6-\u02D1\u02E0-\u02E4\u02EC\u02EE\u0370-\u0374\u0376\u0377\u037A-\u037D\u037F\u0386\u0388-\u038A\u038C\u038E-\u03A1\u03A3-\u03F5\u03F7-\u0481\u048A-\u052F\u0531-\u0556\u0559\u0560-\u0588\u05D0-\u05EA\u05EF-\u05F2\u0620-\u064A\u066E\u066F\u0671-\u06D3\u06D5\u06E5\u06E6\u06EE\u06EF\u06FA-\u06FC\u06FF\u0710\u0712-\u072F\u074D-\u07A5\u07B1\u07CA-\u07EA\u07F4\u07F5\u07FA\u0800-\u0815\u081A\u0824\u0828\u0840-\u0858\u0860-\u086A\u08A0-\u08B4\u08B6-\u08BD\u0904-\u0939\u093D\u0950\u0958-\u0961\u0971-\u0980\u0985-\u098C\u098F\u0990\u0993-\u09A8\u09AA-\u09B0\u09B2\u09B6-\u09B9\u09BD\u09CE\u09DC\u09DD\u09DF-\u09E1\u09F0\u09F1\u09FC\u0A05-\u0A0A\u0A0F\u0A10\u0A13-\u0A28\u0A2A-\u0A30\u0A32\u0A33\u0A35\u0A36\u0A38\u0A39\u0A59-\u0A5C\u0A5E\u0A72-\u0A74\u0A85-\u0A8D\u0A8F-\u0A91\u0A93-\u0AA8\u0AAA-\u0AB0\u0AB2\u0AB3\u0AB5-\u0AB9\u0ABD\u0AD0\u0AE0\u0AE1\u0AF9\u0B05-\u0B0C\u0B0F\u0B10\u0B13-\u0B28\u0B2A-\u0B30\u0B32\u0B33\u0B35-\u0B39\u0B3D\u0B5C\u0B5D\u0B5F-\u0B61\u0B71\u0B83\u0B85-\u0B8A\u0B8E-\u0B90\u0B92-\u0B95\u0B99\u0B9A\u0B9C\u0B9E\u0B9F\u0BA3\u0BA4\u0BA8-\u0BAA\u0BAE-\u0BB9\u0BD0\u0C05-\u0C0C\u0C0E-\u0C10\u0C12-\u0C28\u0C2A-\u0C39\u0C3D\u0C58-\u0C5A\u0C60\u0C61\u0C80\u0C85-\u0C8C\u0C8E-\u0C90\u0C92-\u0CA8\u0CAA-\u0CB3\u0CB5-\u0CB9\u0CBD\u0CDE\u0CE0\u0CE1\u0CF1\u0CF2\u0D05-\u0D0C\u0D0E-\u0D10\u0D12-\u0D3A\u0D3D\u0D4E\u0D54-\u0D56\u0D5F-\u0D61\u0D7A-\u0D7F\u0D85-\u0D96\u0D9A-\u0DB1\u0DB3-\u0DBB\u0DBD\u0DC0-\u0DC6\u0E01-\u0E30\u0E32\u0E33\u0E40-\u0E46\u0E81\u0E82\u0E84\u0E86-\u0E8A\u0E8C-\u0EA3\u0EA5\u0EA7-\u0EB0\u0EB2\u0EB3\u0EBD\u0EC0-\u0EC4\u0EC6\u0EDC-\u0EDF\u0F00\u0F40-\u0F47\u0F49-\u0F6C\u0F88-\u0F8C\u1000-\u102A\u103F\u1050-\u1055\u105A-\u105D\u1061\u1065\u1066\u106E-\u1070\u1075-\u1081\u108E\u10A0-\u10C5\u10C7\u10CD\u10D0-\u10FA\u10FC-\u1248\u124A-\u124D\u1250-\u1256\u1258\u125A-\u125D\u1260-\u1288\u128A-\u128D\u1290-\u12B0\u12B2-\u12B5\u12B8-\u12BE\u12C0\u12C2-\u12C5\u12C8-\u12D6\u12D8-\u1310\u1312-\u1315\u1318-\u135A\u1380-\u138F\u13A0-\u13F5\u13F8-\u13FD\u1401-\u166C\u166F-\u167F\u1681-\u169A\u16A0-\u16EA\u16EE-\u16F8\u1700-\u170C\u170E-\u1711\u1720-\u1731\u1740-\u1751\u1760-\u176C\u176E-\u1770\u1780-\u17B3\u17D7\u17DC\u1820-\u1878\u1880-\u18A8\u18AA\u18B0-\u18F5\u1900-\u191E\u1950-\u196D\u1970-\u1974\u1980-\u19AB\u19B0-\u19C9\u1A00-\u1A16\u1A20-\u1A54\u1AA7\u1B05-\u1B33\u1B45-\u1B4B\u1B83-\u1BA0\u1BAE\u1BAF\u1BBA-\u1BE5\u1C00-\u1C23\u1C4D-\u1C4F\u1C5A-\u1C7D\u1C80-\u1C88\u1C90-\u1CBA\u1CBD-\u1CBF\u1CE9-\u1CEC\u1CEE-\u1CF3\u1CF5\u1CF6\u1CFA\u1D00-\u1DBF\u1E00-\u1F15\u1F18-\u1F1D\u1F20-\u1F45\u1F48-\u1F4D\u1F50-\u1F57\u1F59\u1F5B\u1F5D\u1F5F-\u1F7D\u1F80-\u1FB4\u1FB6-\u1FBC\u1FBE\u1FC2-\u1FC4\u1FC6-\u1FCC\u1FD0-\u1FD3\u1FD6-\u1FDB\u1FE0-\u1FEC\u1FF2-\u1FF4\u1FF6-\u1FFC\u2071\u207F\u2090-\u209C\u2102\u2107\u210A-\u2113\u2115\u2118-\u211D\u2124\u2126\u2128\u212A-\u2139\u213C-\u213F\u2145-\u2149\u214E\u2160-\u2188\u2C00-\u2C2E\u2C30-\u2C5E\u2C60-\u2CE4\u2CEB-\u2CEE\u2CF2\u2CF3\u2D00-\u2D25\u2D27\u2D2D\u2D30-\u2D67\u2D6F\u2D80-\u2D96\u2DA0-\u2DA6\u2DA8-\u2DAE\u2DB0-\u2DB6\u2DB8-\u2DBE\u2DC0-\u2DC6\u2DC8-\u2DCE\u2DD0-\u2DD6\u2DD8-\u2DDE\u3005-\u3007\u3021-\u3029\u3031-\u3035\u3038-\u303C\u3041-\u3096\u309B-\u309F\u30A1-\u30FA\u30FC-\u30FF\u3105-\u312F\u3131-\u318E\u31A0-\u31BA\u31F0-\u31FF\u3400-\u4DB5\u4E00-\u9FEF\uA000-\uA48C\uA4D0-\uA4FD\uA500-\uA60C\uA610-\uA61F\uA62A\uA62B\uA640-\uA66E\uA67F-\uA69D\uA6A0-\uA6EF\uA717-\uA71F\uA722-\uA788\uA78B-\uA7BF\uA7C2-\uA7C6\uA7F7-\uA801\uA803-\uA805\uA807-\uA80A\uA80C-\uA822\uA840-\uA873\uA882-\uA8B3\uA8F2-\uA8F7\uA8FB\uA8FD\uA8FE\uA90A-\uA925\uA930-\uA946\uA960-\uA97C\uA984-\uA9B2\uA9CF\uA9E0-\uA9E4\uA9E6-\uA9EF\uA9FA-\uA9FE\uAA00-\uAA28\uAA40-\uAA42\uAA44-\uAA4B\uAA60-\uAA76\uAA7A\uAA7E-\uAAAF\uAAB1\uAAB5\uAAB6\uAAB9-\uAABD\uAAC0\uAAC2\uAADB-\uAADD\uAAE0-\uAAEA\uAAF2-\uAAF4\uAB01-\uAB06\uAB09-\uAB0E\uAB11-\uAB16\uAB20-\uAB26\uAB28-\uAB2E\uAB30-\uAB5A\uAB5C-\uAB67\uAB70-\uABE2\uAC00-\uD7A3\uD7B0-\uD7C6\uD7CB-\uD7FB\uF900-\uFA6D\uFA70-\uFAD9\uFB00-\uFB06\uFB13-\uFB17\uFB1D\uFB1F-\uFB28\uFB2A-\uFB36\uFB38-\uFB3C\uFB3E\uFB40\uFB41\uFB43\uFB44\uFB46-\uFBB1\uFBD3-\uFD3D\uFD50-\uFD8F\uFD92-\uFDC7\uFDF0-\uFDFB\uFE70-\uFE74\uFE76-\uFEFC\uFF21-\uFF3A\uFF41-\uFF5A\uFF66-\uFFBE\uFFC2-\uFFC7\uFFCA-\uFFCF\uFFD2-\uFFD7\uFFDA-\uFFDC]|\uD800[\uDC00-\uDC0B\uDC0D-\uDC26\uDC28-\uDC3A\uDC3C\uDC3D\uDC3F-\uDC4D\uDC50-\uDC5D\uDC80-\uDCFA\uDD40-\uDD74\uDE80-\uDE9C\uDEA0-\uDED0\uDF00-\uDF1F\uDF2D-\uDF4A\uDF50-\uDF75\uDF80-\uDF9D\uDFA0-\uDFC3\uDFC8-\uDFCF\uDFD1-\uDFD5]|\uD801[\uDC00-\uDC9D\uDCB0-\uDCD3\uDCD8-\uDCFB\uDD00-\uDD27\uDD30-\uDD63\uDE00-\uDF36\uDF40-\uDF55\uDF60-\uDF67]|\uD802[\uDC00-\uDC05\uDC08\uDC0A-\uDC35\uDC37\uDC38\uDC3C\uDC3F-\uDC55\uDC60-\uDC76\uDC80-\uDC9E\uDCE0-\uDCF2\uDCF4\uDCF5\uDD00-\uDD15\uDD20-\uDD39\uDD80-\uDDB7\uDDBE\uDDBF\uDE00\uDE10-\uDE13\uDE15-\uDE17\uDE19-\uDE35\uDE60-\uDE7C\uDE80-\uDE9C\uDEC0-\uDEC7\uDEC9-\uDEE4\uDF00-\uDF35\uDF40-\uDF55\uDF60-\uDF72\uDF80-\uDF91]|\uD803[\uDC00-\uDC48\uDC80-\uDCB2\uDCC0-\uDCF2\uDD00-\uDD23\uDF00-\uDF1C\uDF27\uDF30-\uDF45\uDFE0-\uDFF6]|\uD804[\uDC03-\uDC37\uDC83-\uDCAF\uDCD0-\uDCE8\uDD03-\uDD26\uDD44\uDD50-\uDD72\uDD76\uDD83-\uDDB2\uDDC1-\uDDC4\uDDDA\uDDDC\uDE00-\uDE11\uDE13-\uDE2B\uDE80-\uDE86\uDE88\uDE8A-\uDE8D\uDE8F-\uDE9D\uDE9F-\uDEA8\uDEB0-\uDEDE\uDF05-\uDF0C\uDF0F\uDF10\uDF13-\uDF28\uDF2A-\uDF30\uDF32\uDF33\uDF35-\uDF39\uDF3D\uDF50\uDF5D-\uDF61]|\uD805[\uDC00-\uDC34\uDC47-\uDC4A\uDC5F\uDC80-\uDCAF\uDCC4\uDCC5\uDCC7\uDD80-\uDDAE\uDDD8-\uDDDB\uDE00-\uDE2F\uDE44\uDE80-\uDEAA\uDEB8\uDF00-\uDF1A]|\uD806[\uDC00-\uDC2B\uDCA0-\uDCDF\uDCFF\uDDA0-\uDDA7\uDDAA-\uDDD0\uDDE1\uDDE3\uDE00\uDE0B-\uDE32\uDE3A\uDE50\uDE5C-\uDE89\uDE9D\uDEC0-\uDEF8]|\uD807[\uDC00-\uDC08\uDC0A-\uDC2E\uDC40\uDC72-\uDC8F\uDD00-\uDD06\uDD08\uDD09\uDD0B-\uDD30\uDD46\uDD60-\uDD65\uDD67\uDD68\uDD6A-\uDD89\uDD98\uDEE0-\uDEF2]|\uD808[\uDC00-\uDF99]|\uD809[\uDC00-\uDC6E\uDC80-\uDD43]|[\uD80C\uD81C-\uD820\uD840-\uD868\uD86A-\uD86C\uD86F-\uD872\uD874-\uD879][\uDC00-\uDFFF]|\uD80D[\uDC00-\uDC2E]|\uD811[\uDC00-\uDE46]|\uD81A[\uDC00-\uDE38\uDE40-\uDE5E\uDED0-\uDEED\uDF00-\uDF2F\uDF40-\uDF43\uDF63-\uDF77\uDF7D-\uDF8F]|\uD81B[\uDE40-\uDE7F\uDF00-\uDF4A\uDF50\uDF93-\uDF9F\uDFE0\uDFE1\uDFE3]|\uD821[\uDC00-\uDFF7]|\uD822[\uDC00-\uDEF2]|\uD82C[\uDC00-\uDD1E\uDD50-\uDD52\uDD64-\uDD67\uDD70-\uDEFB]|\uD82F[\uDC00-\uDC6A\uDC70-\uDC7C\uDC80-\uDC88\uDC90-\uDC99]|\uD835[\uDC00-\uDC54\uDC56-\uDC9C\uDC9E\uDC9F\uDCA2\uDCA5\uDCA6\uDCA9-\uDCAC\uDCAE-\uDCB9\uDCBB\uDCBD-\uDCC3\uDCC5-\uDD05\uDD07-\uDD0A\uDD0D-\uDD14\uDD16-\uDD1C\uDD1E-\uDD39\uDD3B-\uDD3E\uDD40-\uDD44\uDD46\uDD4A-\uDD50\uDD52-\uDEA5\uDEA8-\uDEC0\uDEC2-\uDEDA\uDEDC-\uDEFA\uDEFC-\uDF14\uDF16-\uDF34\uDF36-\uDF4E\uDF50-\uDF6E\uDF70-\uDF88\uDF8A-\uDFA8\uDFAA-\uDFC2\uDFC4-\uDFCB]|\uD838[\uDD00-\uDD2C\uDD37-\uDD3D\uDD4E\uDEC0-\uDEEB]|\uD83A[\uDC00-\uDCC4\uDD00-\uDD43\uDD4B]|\uD83B[\uDE00-\uDE03\uDE05-\uDE1F\uDE21\uDE22\uDE24\uDE27\uDE29-\uDE32\uDE34-\uDE37\uDE39\uDE3B\uDE42\uDE47\uDE49\uDE4B\uDE4D-\uDE4F\uDE51\uDE52\uDE54\uDE57\uDE59\uDE5B\uDE5D\uDE5F\uDE61\uDE62\uDE64\uDE67-\uDE6A\uDE6C-\uDE72\uDE74-\uDE77\uDE79-\uDE7C\uDE7E\uDE80-\uDE89\uDE8B-\uDE9B\uDEA1-\uDEA3\uDEA5-\uDEA9\uDEAB-\uDEBB]|\uD869[\uDC00-\uDED6\uDF00-\uDFFF]|\uD86D[\uDC00-\uDF34\uDF40-\uDFFF]|\uD86E[\uDC00-\uDC1D\uDC20-\uDFFF]|\uD873[\uDC00-\uDEA1\uDEB0-\uDFFF]|\uD87A[\uDC00-\uDFE0]|\uD87E[\uDC00-\uDE1D]/,
        NonAsciiIdentifierPart: /[\xAA\xB5\xB7\xBA\xC0-\xD6\xD8-\xF6\xF8-\u02C1\u02C6-\u02D1\u02E0-\u02E4\u02EC\u02EE\u0300-\u0374\u0376\u0377\u037A-\u037D\u037F\u0386-\u038A\u038C\u038E-\u03A1\u03A3-\u03F5\u03F7-\u0481\u0483-\u0487\u048A-\u052F\u0531-\u0556\u0559\u0560-\u0588\u0591-\u05BD\u05BF\u05C1\u05C2\u05C4\u05C5\u05C7\u05D0-\u05EA\u05EF-\u05F2\u0610-\u061A\u0620-\u0669\u066E-\u06D3\u06D5-\u06DC\u06DF-\u06E8\u06EA-\u06FC\u06FF\u0710-\u074A\u074D-\u07B1\u07C0-\u07F5\u07FA\u07FD\u0800-\u082D\u0840-\u085B\u0860-\u086A\u08A0-\u08B4\u08B6-\u08BD\u08D3-\u08E1\u08E3-\u0963\u0966-\u096F\u0971-\u0983\u0985-\u098C\u098F\u0990\u0993-\u09A8\u09AA-\u09B0\u09B2\u09B6-\u09B9\u09BC-\u09C4\u09C7\u09C8\u09CB-\u09CE\u09D7\u09DC\u09DD\u09DF-\u09E3\u09E6-\u09F1\u09FC\u09FE\u0A01-\u0A03\u0A05-\u0A0A\u0A0F\u0A10\u0A13-\u0A28\u0A2A-\u0A30\u0A32\u0A33\u0A35\u0A36\u0A38\u0A39\u0A3C\u0A3E-\u0A42\u0A47\u0A48\u0A4B-\u0A4D\u0A51\u0A59-\u0A5C\u0A5E\u0A66-\u0A75\u0A81-\u0A83\u0A85-\u0A8D\u0A8F-\u0A91\u0A93-\u0AA8\u0AAA-\u0AB0\u0AB2\u0AB3\u0AB5-\u0AB9\u0ABC-\u0AC5\u0AC7-\u0AC9\u0ACB-\u0ACD\u0AD0\u0AE0-\u0AE3\u0AE6-\u0AEF\u0AF9-\u0AFF\u0B01-\u0B03\u0B05-\u0B0C\u0B0F\u0B10\u0B13-\u0B28\u0B2A-\u0B30\u0B32\u0B33\u0B35-\u0B39\u0B3C-\u0B44\u0B47\u0B48\u0B4B-\u0B4D\u0B56\u0B57\u0B5C\u0B5D\u0B5F-\u0B63\u0B66-\u0B6F\u0B71\u0B82\u0B83\u0B85-\u0B8A\u0B8E-\u0B90\u0B92-\u0B95\u0B99\u0B9A\u0B9C\u0B9E\u0B9F\u0BA3\u0BA4\u0BA8-\u0BAA\u0BAE-\u0BB9\u0BBE-\u0BC2\u0BC6-\u0BC8\u0BCA-\u0BCD\u0BD0\u0BD7\u0BE6-\u0BEF\u0C00-\u0C0C\u0C0E-\u0C10\u0C12-\u0C28\u0C2A-\u0C39\u0C3D-\u0C44\u0C46-\u0C48\u0C4A-\u0C4D\u0C55\u0C56\u0C58-\u0C5A\u0C60-\u0C63\u0C66-\u0C6F\u0C80-\u0C83\u0C85-\u0C8C\u0C8E-\u0C90\u0C92-\u0CA8\u0CAA-\u0CB3\u0CB5-\u0CB9\u0CBC-\u0CC4\u0CC6-\u0CC8\u0CCA-\u0CCD\u0CD5\u0CD6\u0CDE\u0CE0-\u0CE3\u0CE6-\u0CEF\u0CF1\u0CF2\u0D00-\u0D03\u0D05-\u0D0C\u0D0E-\u0D10\u0D12-\u0D44\u0D46-\u0D48\u0D4A-\u0D4E\u0D54-\u0D57\u0D5F-\u0D63\u0D66-\u0D6F\u0D7A-\u0D7F\u0D82\u0D83\u0D85-\u0D96\u0D9A-\u0DB1\u0DB3-\u0DBB\u0DBD\u0DC0-\u0DC6\u0DCA\u0DCF-\u0DD4\u0DD6\u0DD8-\u0DDF\u0DE6-\u0DEF\u0DF2\u0DF3\u0E01-\u0E3A\u0E40-\u0E4E\u0E50-\u0E59\u0E81\u0E82\u0E84\u0E86-\u0E8A\u0E8C-\u0EA3\u0EA5\u0EA7-\u0EBD\u0EC0-\u0EC4\u0EC6\u0EC8-\u0ECD\u0ED0-\u0ED9\u0EDC-\u0EDF\u0F00\u0F18\u0F19\u0F20-\u0F29\u0F35\u0F37\u0F39\u0F3E-\u0F47\u0F49-\u0F6C\u0F71-\u0F84\u0F86-\u0F97\u0F99-\u0FBC\u0FC6\u1000-\u1049\u1050-\u109D\u10A0-\u10C5\u10C7\u10CD\u10D0-\u10FA\u10FC-\u1248\u124A-\u124D\u1250-\u1256\u1258\u125A-\u125D\u1260-\u1288\u128A-\u128D\u1290-\u12B0\u12B2-\u12B5\u12B8-\u12BE\u12C0\u12C2-\u12C5\u12C8-\u12D6\u12D8-\u1310\u1312-\u1315\u1318-\u135A\u135D-\u135F\u1369-\u1371\u1380-\u138F\u13A0-\u13F5\u13F8-\u13FD\u1401-\u166C\u166F-\u167F\u1681-\u169A\u16A0-\u16EA\u16EE-\u16F8\u1700-\u170C\u170E-\u1714\u1720-\u1734\u1740-\u1753\u1760-\u176C\u176E-\u1770\u1772\u1773\u1780-\u17D3\u17D7\u17DC\u17DD\u17E0-\u17E9\u180B-\u180D\u1810-\u1819\u1820-\u1878\u1880-\u18AA\u18B0-\u18F5\u1900-\u191E\u1920-\u192B\u1930-\u193B\u1946-\u196D\u1970-\u1974\u1980-\u19AB\u19B0-\u19C9\u19D0-\u19DA\u1A00-\u1A1B\u1A20-\u1A5E\u1A60-\u1A7C\u1A7F-\u1A89\u1A90-\u1A99\u1AA7\u1AB0-\u1ABD\u1B00-\u1B4B\u1B50-\u1B59\u1B6B-\u1B73\u1B80-\u1BF3\u1C00-\u1C37\u1C40-\u1C49\u1C4D-\u1C7D\u1C80-\u1C88\u1C90-\u1CBA\u1CBD-\u1CBF\u1CD0-\u1CD2\u1CD4-\u1CFA\u1D00-\u1DF9\u1DFB-\u1F15\u1F18-\u1F1D\u1F20-\u1F45\u1F48-\u1F4D\u1F50-\u1F57\u1F59\u1F5B\u1F5D\u1F5F-\u1F7D\u1F80-\u1FB4\u1FB6-\u1FBC\u1FBE\u1FC2-\u1FC4\u1FC6-\u1FCC\u1FD0-\u1FD3\u1FD6-\u1FDB\u1FE0-\u1FEC\u1FF2-\u1FF4\u1FF6-\u1FFC\u200C\u200D\u203F\u2040\u2054\u2071\u207F\u2090-\u209C\u20D0-\u20DC\u20E1\u20E5-\u20F0\u2102\u2107\u210A-\u2113\u2115\u2118-\u211D\u2124\u2126\u2128\u212A-\u2139\u213C-\u213F\u2145-\u2149\u214E\u2160-\u2188\u2C00-\u2C2E\u2C30-\u2C5E\u2C60-\u2CE4\u2CEB-\u2CF3\u2D00-\u2D25\u2D27\u2D2D\u2D30-\u2D67\u2D6F\u2D7F-\u2D96\u2DA0-\u2DA6\u2DA8-\u2DAE\u2DB0-\u2DB6\u2DB8-\u2DBE\u2DC0-\u2DC6\u2DC8-\u2DCE\u2DD0-\u2DD6\u2DD8-\u2DDE\u2DE0-\u2DFF\u3005-\u3007\u3021-\u302F\u3031-\u3035\u3038-\u303C\u3041-\u3096\u3099-\u309F\u30A1-\u30FA\u30FC-\u30FF\u3105-\u312F\u3131-\u318E\u31A0-\u31BA\u31F0-\u31FF\u3400-\u4DB5\u4E00-\u9FEF\uA000-\uA48C\uA4D0-\uA4FD\uA500-\uA60C\uA610-\uA62B\uA640-\uA66F\uA674-\uA67D\uA67F-\uA6F1\uA717-\uA71F\uA722-\uA788\uA78B-\uA7BF\uA7C2-\uA7C6\uA7F7-\uA827\uA840-\uA873\uA880-\uA8C5\uA8D0-\uA8D9\uA8E0-\uA8F7\uA8FB\uA8FD-\uA92D\uA930-\uA953\uA960-\uA97C\uA980-\uA9C0\uA9CF-\uA9D9\uA9E0-\uA9FE\uAA00-\uAA36\uAA40-\uAA4D\uAA50-\uAA59\uAA60-\uAA76\uAA7A-\uAAC2\uAADB-\uAADD\uAAE0-\uAAEF\uAAF2-\uAAF6\uAB01-\uAB06\uAB09-\uAB0E\uAB11-\uAB16\uAB20-\uAB26\uAB28-\uAB2E\uAB30-\uAB5A\uAB5C-\uAB67\uAB70-\uABEA\uABEC\uABED\uABF0-\uABF9\uAC00-\uD7A3\uD7B0-\uD7C6\uD7CB-\uD7FB\uF900-\uFA6D\uFA70-\uFAD9\uFB00-\uFB06\uFB13-\uFB17\uFB1D-\uFB28\uFB2A-\uFB36\uFB38-\uFB3C\uFB3E\uFB40\uFB41\uFB43\uFB44\uFB46-\uFBB1\uFBD3-\uFD3D\uFD50-\uFD8F\uFD92-\uFDC7\uFDF0-\uFDFB\uFE00-\uFE0F\uFE20-\uFE2F\uFE33\uFE34\uFE4D-\uFE4F\uFE70-\uFE74\uFE76-\uFEFC\uFF10-\uFF19\uFF21-\uFF3A\uFF3F\uFF41-\uFF5A\uFF66-\uFFBE\uFFC2-\uFFC7\uFFCA-\uFFCF\uFFD2-\uFFD7\uFFDA-\uFFDC]|\uD800[\uDC00-\uDC0B\uDC0D-\uDC26\uDC28-\uDC3A\uDC3C\uDC3D\uDC3F-\uDC4D\uDC50-\uDC5D\uDC80-\uDCFA\uDD40-\uDD74\uDDFD\uDE80-\uDE9C\uDEA0-\uDED0\uDEE0\uDF00-\uDF1F\uDF2D-\uDF4A\uDF50-\uDF7A\uDF80-\uDF9D\uDFA0-\uDFC3\uDFC8-\uDFCF\uDFD1-\uDFD5]|\uD801[\uDC00-\uDC9D\uDCA0-\uDCA9\uDCB0-\uDCD3\uDCD8-\uDCFB\uDD00-\uDD27\uDD30-\uDD63\uDE00-\uDF36\uDF40-\uDF55\uDF60-\uDF67]|\uD802[\uDC00-\uDC05\uDC08\uDC0A-\uDC35\uDC37\uDC38\uDC3C\uDC3F-\uDC55\uDC60-\uDC76\uDC80-\uDC9E\uDCE0-\uDCF2\uDCF4\uDCF5\uDD00-\uDD15\uDD20-\uDD39\uDD80-\uDDB7\uDDBE\uDDBF\uDE00-\uDE03\uDE05\uDE06\uDE0C-\uDE13\uDE15-\uDE17\uDE19-\uDE35\uDE38-\uDE3A\uDE3F\uDE60-\uDE7C\uDE80-\uDE9C\uDEC0-\uDEC7\uDEC9-\uDEE6\uDF00-\uDF35\uDF40-\uDF55\uDF60-\uDF72\uDF80-\uDF91]|\uD803[\uDC00-\uDC48\uDC80-\uDCB2\uDCC0-\uDCF2\uDD00-\uDD27\uDD30-\uDD39\uDF00-\uDF1C\uDF27\uDF30-\uDF50\uDFE0-\uDFF6]|\uD804[\uDC00-\uDC46\uDC66-\uDC6F\uDC7F-\uDCBA\uDCD0-\uDCE8\uDCF0-\uDCF9\uDD00-\uDD34\uDD36-\uDD3F\uDD44-\uDD46\uDD50-\uDD73\uDD76\uDD80-\uDDC4\uDDC9-\uDDCC\uDDD0-\uDDDA\uDDDC\uDE00-\uDE11\uDE13-\uDE37\uDE3E\uDE80-\uDE86\uDE88\uDE8A-\uDE8D\uDE8F-\uDE9D\uDE9F-\uDEA8\uDEB0-\uDEEA\uDEF0-\uDEF9\uDF00-\uDF03\uDF05-\uDF0C\uDF0F\uDF10\uDF13-\uDF28\uDF2A-\uDF30\uDF32\uDF33\uDF35-\uDF39\uDF3B-\uDF44\uDF47\uDF48\uDF4B-\uDF4D\uDF50\uDF57\uDF5D-\uDF63\uDF66-\uDF6C\uDF70-\uDF74]|\uD805[\uDC00-\uDC4A\uDC50-\uDC59\uDC5E\uDC5F\uDC80-\uDCC5\uDCC7\uDCD0-\uDCD9\uDD80-\uDDB5\uDDB8-\uDDC0\uDDD8-\uDDDD\uDE00-\uDE40\uDE44\uDE50-\uDE59\uDE80-\uDEB8\uDEC0-\uDEC9\uDF00-\uDF1A\uDF1D-\uDF2B\uDF30-\uDF39]|\uD806[\uDC00-\uDC3A\uDCA0-\uDCE9\uDCFF\uDDA0-\uDDA7\uDDAA-\uDDD7\uDDDA-\uDDE1\uDDE3\uDDE4\uDE00-\uDE3E\uDE47\uDE50-\uDE99\uDE9D\uDEC0-\uDEF8]|\uD807[\uDC00-\uDC08\uDC0A-\uDC36\uDC38-\uDC40\uDC50-\uDC59\uDC72-\uDC8F\uDC92-\uDCA7\uDCA9-\uDCB6\uDD00-\uDD06\uDD08\uDD09\uDD0B-\uDD36\uDD3A\uDD3C\uDD3D\uDD3F-\uDD47\uDD50-\uDD59\uDD60-\uDD65\uDD67\uDD68\uDD6A-\uDD8E\uDD90\uDD91\uDD93-\uDD98\uDDA0-\uDDA9\uDEE0-\uDEF6]|\uD808[\uDC00-\uDF99]|\uD809[\uDC00-\uDC6E\uDC80-\uDD43]|[\uD80C\uD81C-\uD820\uD840-\uD868\uD86A-\uD86C\uD86F-\uD872\uD874-\uD879][\uDC00-\uDFFF]|\uD80D[\uDC00-\uDC2E]|\uD811[\uDC00-\uDE46]|\uD81A[\uDC00-\uDE38\uDE40-\uDE5E\uDE60-\uDE69\uDED0-\uDEED\uDEF0-\uDEF4\uDF00-\uDF36\uDF40-\uDF43\uDF50-\uDF59\uDF63-\uDF77\uDF7D-\uDF8F]|\uD81B[\uDE40-\uDE7F\uDF00-\uDF4A\uDF4F-\uDF87\uDF8F-\uDF9F\uDFE0\uDFE1\uDFE3]|\uD821[\uDC00-\uDFF7]|\uD822[\uDC00-\uDEF2]|\uD82C[\uDC00-\uDD1E\uDD50-\uDD52\uDD64-\uDD67\uDD70-\uDEFB]|\uD82F[\uDC00-\uDC6A\uDC70-\uDC7C\uDC80-\uDC88\uDC90-\uDC99\uDC9D\uDC9E]|\uD834[\uDD65-\uDD69\uDD6D-\uDD72\uDD7B-\uDD82\uDD85-\uDD8B\uDDAA-\uDDAD\uDE42-\uDE44]|\uD835[\uDC00-\uDC54\uDC56-\uDC9C\uDC9E\uDC9F\uDCA2\uDCA5\uDCA6\uDCA9-\uDCAC\uDCAE-\uDCB9\uDCBB\uDCBD-\uDCC3\uDCC5-\uDD05\uDD07-\uDD0A\uDD0D-\uDD14\uDD16-\uDD1C\uDD1E-\uDD39\uDD3B-\uDD3E\uDD40-\uDD44\uDD46\uDD4A-\uDD50\uDD52-\uDEA5\uDEA8-\uDEC0\uDEC2-\uDEDA\uDEDC-\uDEFA\uDEFC-\uDF14\uDF16-\uDF34\uDF36-\uDF4E\uDF50-\uDF6E\uDF70-\uDF88\uDF8A-\uDFA8\uDFAA-\uDFC2\uDFC4-\uDFCB\uDFCE-\uDFFF]|\uD836[\uDE00-\uDE36\uDE3B-\uDE6C\uDE75\uDE84\uDE9B-\uDE9F\uDEA1-\uDEAF]|\uD838[\uDC00-\uDC06\uDC08-\uDC18\uDC1B-\uDC21\uDC23\uDC24\uDC26-\uDC2A\uDD00-\uDD2C\uDD30-\uDD3D\uDD40-\uDD49\uDD4E\uDEC0-\uDEF9]|\uD83A[\uDC00-\uDCC4\uDCD0-\uDCD6\uDD00-\uDD4B\uDD50-\uDD59]|\uD83B[\uDE00-\uDE03\uDE05-\uDE1F\uDE21\uDE22\uDE24\uDE27\uDE29-\uDE32\uDE34-\uDE37\uDE39\uDE3B\uDE42\uDE47\uDE49\uDE4B\uDE4D-\uDE4F\uDE51\uDE52\uDE54\uDE57\uDE59\uDE5B\uDE5D\uDE5F\uDE61\uDE62\uDE64\uDE67-\uDE6A\uDE6C-\uDE72\uDE74-\uDE77\uDE79-\uDE7C\uDE7E\uDE80-\uDE89\uDE8B-\uDE9B\uDEA1-\uDEA3\uDEA5-\uDEA9\uDEAB-\uDEBB]|\uD869[\uDC00-\uDED6\uDF00-\uDFFF]|\uD86D[\uDC00-\uDF34\uDF40-\uDFFF]|\uD86E[\uDC00-\uDC1D\uDC20-\uDFFF]|\uD873[\uDC00-\uDEA1\uDEB0-\uDFFF]|\uD87A[\uDC00-\uDFE0]|\uD87E[\uDC00-\uDE1D]|\uDB40[\uDD00-\uDDEF]/
      },
          D = {
        fromCodePoint: function fromCodePoint(u) {
          return u < 65536 ? String.fromCharCode(u) : String.fromCharCode(55296 + (u - 65536 >> 10)) + String.fromCharCode(56320 + (u - 65536 & 1023));
        },
        isWhiteSpace: function isWhiteSpace(u) {
          return 32 === u || 9 === u || 11 === u || 12 === u || 160 === u || u >= 5760 && [5760, 8192, 8193, 8194, 8195, 8196, 8197, 8198, 8199, 8200, 8201, 8202, 8239, 8287, 12288, 65279].indexOf(u) >= 0;
        },
        isLineTerminator: function isLineTerminator(u) {
          return 10 === u || 13 === u || 8232 === u || 8233 === u;
        },
        isIdentifierStart: function isIdentifierStart(F) {
          return 36 === F || 95 === F || F >= 65 && F <= 90 || F >= 97 && F <= 122 || 92 === F || F >= 128 && u.NonAsciiIdentifierStart.test(D.fromCodePoint(F));
        },
        isIdentifierPart: function isIdentifierPart(F) {
          return 36 === F || 95 === F || F >= 65 && F <= 90 || F >= 97 && F <= 122 || F >= 48 && F <= 57 || 92 === F || F >= 128 && u.NonAsciiIdentifierPart.test(D.fromCodePoint(F));
        },
        isDecimalDigit: function isDecimalDigit(u) {
          return u >= 48 && u <= 57;
        },
        isHexDigit: function isHexDigit(u) {
          return u >= 48 && u <= 57 || u >= 65 && u <= 70 || u >= 97 && u <= 102;
        },
        isOctalDigit: function isOctalDigit(u) {
          return u >= 48 && u <= 55;
        }
      };
      /***/
    },

    /***/
    "ZEcq":
    /*!************************************************************!*\
      !*** ./node_modules/@arcgis/core/arcade/arcadeCompiler.js ***!
      \************************************************************/

    /*! exports provided: compileScript, enableAsyncSupport, executeScript, extend, extractFieldLiterals, functionHelper, referencesFunction, referencesMember, validateScript */

    /***/
    function ZEcq(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "compileScript", function () {
        return Ue;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "enableAsyncSupport", function () {
        return Ae;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "executeScript", function () {
        return ve;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "extend", function () {
        return Ne;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "extractFieldLiterals", function () {
        return Me;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "functionHelper", function () {
        return be;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "referencesFunction", function () {
        return xe;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "referencesMember", function () {
        return Oe;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "validateScript", function () {
        return Ie;
      });
      /* harmony import */


      var _core_promiseUtils_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ../core/promiseUtils.js */
      "9MzC");
      /* harmony import */


      var _geometry_SpatialReference_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ../geometry/SpatialReference.js */
      "WZb1");
      /* harmony import */


      var _geometry_Geometry_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ../geometry/Geometry.js */
      "N2DF");
      /* harmony import */


      var _geometry_Point_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ../geometry/Point.js */
      "SuVq");
      /* harmony import */


      var _geometry_Extent_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ../geometry/Extent.js */
      "OvF4");
      /* harmony import */


      var _geometry_Multipoint_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ../geometry/Multipoint.js */
      "V9wi");
      /* harmony import */


      var _geometry_Polygon_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ../geometry/Polygon.js */
      "Ehki");
      /* harmony import */


      var _geometry_Polyline_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! ../geometry/Polyline.js */
      "UhwK");
      /* harmony import */


      var _ImmutablePointArray_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! ./ImmutablePointArray.js */
      "Q2u5");
      /* harmony import */


      var _ImmutablePathArray_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! ./ImmutablePathArray.js */
      "kJip");
      /* harmony import */


      var _chunks_languageUtils_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
      /*! ../chunks/languageUtils.js */
      "idrm");
      /* harmony import */


      var _Dictionary_js__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
      /*! ./Dictionary.js */
      "D5C5");
      /* harmony import */


      var _ArcadePortal_js__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
      /*! ./ArcadePortal.js */
      "Xfxc");
      /* harmony import */


      var _Attachment_js__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
      /*! ./Attachment.js */
      "db86");
      /* harmony import */


      var _Feature_js__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(
      /*! ./Feature.js */
      "Xrjs");
      /* harmony import */


      var _treeAnalysis_js__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(
      /*! ./treeAnalysis.js */
      "k8am");
      /* harmony import */


      var _functions_array_js__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(
      /*! ./functions/array.js */
      "ACnk");
      /* harmony import */


      var _functions_date_js__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(
      /*! ./functions/date.js */
      "ve0I");
      /* harmony import */


      var _functions_geometry_js__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(
      /*! ./functions/geometry.js */
      "KvhC");
      /* harmony import */


      var _functions_geomsync_js__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(
      /*! ./functions/geomsync.js */
      "4PGM");
      /* harmony import */


      var _functions_maths_js__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(
      /*! ./functions/maths.js */
      "yBFI");
      /* harmony import */


      var _functions_stats_js__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(
      /*! ./functions/stats.js */
      "IqHt");
      /* harmony import */


      var _functions_string_js__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(
      /*! ./functions/string.js */
      "RrDw");
      /* harmony import */


      var _views_2d_layers_features_support_FeatureSetReader_js__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(
      /*! ../views/2d/layers/features/support/FeatureSetReader.js */
      "8NDJ");
      /*
      All material copyright ESRI, All Rights Reserved, unless otherwise specified.
      See https://js.arcgis.com/4.18/esri/copyright.txt for details.
      */


      function ne(e, t, n) {
        try {
          return n(e, null, t);
        } catch (e) {
          throw e;
        }
      }

      function re(e) {
        return e instanceof Error ? Object(_core_promiseUtils_js__WEBPACK_IMPORTED_MODULE_0__["reject"])(e) : Object(_core_promiseUtils_js__WEBPACK_IMPORTED_MODULE_0__["reject"])(new Error(e));
      }

      function oe(e, t) {
        try {
          switch (t.type) {
            case "EmptyStatement":
              return "lc.voidOperation";

            case "VariableDeclarator":
              return function (e, t) {
                var n = null === t.init ? null : oe(e, t.init);
                n === _chunks_languageUtils_js__WEBPACK_IMPORTED_MODULE_10__["v"] && (n = null);
                var r = t.id.name.toLowerCase();

                if (null !== e.localScope) {
                  if (void 0 !== e.localScope[r]) return "lscope['" + r + "']=" + n + "; ";
                  if (void 0 !== e.localScope._SymbolsMap[r]) return "lscope['" + e.localScope._SymbolsMap[r] + "']=" + n + "; ";
                  {
                    var _t62 = ge(e);

                    return e.localScope._SymbolsMap[r] = _t62, e.mangleMap[r] = _t62, "lscope['" + _t62 + "']=" + n + "; ";
                  }
                }

                if (void 0 !== e.globalScope[r]) return "gscope['" + r + "']=" + n + "; ";
                if (void 0 !== e.globalScope._SymbolsMap[r]) return "gscope['" + e.globalScope._SymbolsMap[r] + "']=" + n + "; ";
                {
                  var _t63 = ge(e);

                  return e.globalScope._SymbolsMap[r] = _t63, e.mangleMap[r] = _t63, "gscope['" + _t63 + "']=" + n + "; ";
                }
              }(e, t);

            case "VariableDeclaration":
              return function (e, t) {
                var n = [];

                for (var r = 0; r < t.declarations.length; r++) {
                  n.push(oe(e, t.declarations[r]));
                }

                return n.join("\n") + " \n lastStatement=  lc.voidOperation; \n";
              }(e, t);

            case "BlockStatement":
              return le(e, t);

            case "FunctionDeclaration":
              return function (e, t) {
                var n = t.id.name.toLowerCase(),
                    r = {
                  isAsync: e.isAsync,
                  spatialReference: e.spatialReference,
                  console: e.console,
                  lrucache: e.lrucache,
                  services: e.services,
                  symbols: e.symbols,
                  mangleMap: e.mangleMap,
                  localScope: {
                    _SymbolsMap: {}
                  },
                  depthCounter: e.depthCounter + 1,
                  globalScope: e.globalScope
                };
                if (r.depthCounter > 64) throw new Error("Exceeded maximum function depth");
                var o = "new lc.SizzleFunction( lang.functionDepthchecker(function() { var lastStatement = lc.voidOperation; \n   var lscope = runtimeCtx.localStack[runtimeCtx.localStack.length-1];\n";

                for (var _n21 = 0; _n21 < t.params.length; _n21++) {
                  var a = t.params[_n21].name.toLowerCase(),
                      l = ge(e);

                  r.localScope._SymbolsMap[a] = l, r.mangleMap[a] = l, o += "lscope['" + l + "']=arguments[" + _n21.toString() + "];\n";
                }

                !0 === e.isAsync ? (o += "return lang.__awaiter(this, void 0, void 0, function* () {\n", o += le(r, t.body) + "\n return lastStatement; ", o += "});  }", o += ", runtimeCtx))", o += "\n lastStatement = lc.voidOperation; \n") : (o += le(r, t.body) + "\n return lastStatement; }, runtimeCtx))", o += "\n lastStatement = lc.voidOperation; \n");
                if (void 0 !== e.globalScope[n]) return "gscope['" + n + "']=" + o;
                if (void 0 !== e.globalScope._SymbolsMap[n]) return "gscope['" + e.globalScope._SymbolsMap[n] + "']=" + o;
                {
                  var _t64 = ge(e);

                  return e.globalScope._SymbolsMap[n] = _t64, e.mangleMap[n] = _t64, "gscope['" + _t64 + "']=" + o;
                }
              }(e, t);

            case "ReturnStatement":
              return function (e, t) {
                if (null === t.argument) return "return lc.voidOperation";
                return "return " + oe(e, t.argument);
              }(e, t);

            case "IfStatement":
              return function (e, t) {
                if ("AssignmentExpression" === t.test.type || "UpdateExpression" === t.test.type) throw new Error(Object(_treeAnalysis_js__WEBPACK_IMPORTED_MODULE_15__["nodeErrorMessage"])(t.test, "RUNTIME", "CANNOT_USE_ASSIGNMENT_IN_CONDITION"));
                var n = oe(e, t.test),
                    r = ye(e);
                var o = "var " + r + " = " + n + ";\n if (" + r + " === true) {\n" + ae(e, t.consequent) + "\n }\n";
                null !== t.alternate ? o += "else if (" + r + "===false)   { \n" + ae(e, t.alternate) + "}\n" : o += "else if (" + r + "===false) { \n lastStatement = lc.voidOperation;\n }\n";
                return o += "else { lang.error({type: '" + t.type + "'},'RUNTIME','CANNOT_USE_NONBOOLEAN_IN_CONDITION'); \n}\n", o;
              }(e, t);

            case "ExpressionStatement":
              return function (e, t) {
                if ("AssignmentExpression" === t.expression.type) return "lastStatement = lc.voidOperation; " + oe(e, t.expression) + "; \n ";
                if ("CallExpression" === t.expression.type) return "lastStatement = " + oe(e, t.expression) + "; ";
                return "lastStatement = " + oe(e, t.expression) + "; ";
              }(e, t);

            case "AssignmentExpression":
              return function (e, t) {
                var n = oe(e, t.right);
                var r = null,
                    o = "";
                if ("MemberExpression" === t.left.type) return r = oe(e, t.left.object), o = !0 === t.left.computed ? oe(e, t.left.property) : "'" + t.left.property.name + "'", "lang.assignmember(" + r + "," + o + ",'" + t.operator + "'," + n + ")";

                if (r = t.left.name.toLowerCase(), null !== e.localScope) {
                  if (void 0 !== e.localScope[r]) return "lscope['" + r + "']=lang.assign(" + n + ",'" + t.operator + "', lscope['" + r + "'])";
                  if (void 0 !== e.localScope._SymbolsMap[r]) return "lscope['" + e.localScope._SymbolsMap[r] + "']=lang.assign(" + n + ",'" + t.operator + "', lscope['" + e.localScope._SymbolsMap[r] + "'])";
                }

                if (void 0 !== e.globalScope[r]) return "gscope['" + r + "']=lang.assign(" + n + ",'" + t.operator + "', gscope['" + r + "'])";
                if (void 0 !== e.globalScope._SymbolsMap[r]) return "gscope['" + e.globalScope._SymbolsMap[r] + "']=lang.assign(" + n + ",'" + t.operator + "', gscope['" + e.globalScope._SymbolsMap[r] + "'])";
                throw new Error("Variable not recognised");
              }(e, t);

            case "UpdateExpression":
              return function (e, t) {
                var n = null,
                    r = "";
                if ("MemberExpression" === t.argument.type) return n = oe(e, t.argument.object), r = !0 === t.argument.computed ? oe(e, t.argument.property) : "'" + t.argument.property.name + "'", "lang.memberupdate(" + n + "," + r + ",'" + t.operator + "'," + t.prefix + ")";

                if (n = t.argument.name.toLowerCase(), null !== e.localScope) {
                  if (void 0 !== e.localScope[n]) return "lang.update(lscope, '" + n + "','" + t.operator + "'," + t.prefix + ")";
                  if (void 0 !== e.localScope._SymbolsMap[n]) return "lang.update(lscope, '" + e.localScope._SymbolsMap[n] + "','" + t.operator + "'," + t.prefix + ")";
                }

                if (void 0 !== e.globalScope[n]) return "lang.update(gscope, '" + n + "','" + t.operator + "'," + t.prefix + ")";
                if (void 0 !== e.globalScope._SymbolsMap[n]) return "lang.update(gscope, '" + e.globalScope._SymbolsMap[n] + "','" + t.operator + "'," + t.prefix + ")";
                throw new Error("Variable not recognised");
              }(e, t);

            case "BreakStatement":
              return "break";

            case "ContinueStatement":
              return "continue";

            case "TemplateLiteral":
              return function (e, t) {
                try {
                  var n = [];
                  var r = 0;

                  var _iterator18 = _createForOfIteratorHelper(t.quasis),
                      _step18;

                  try {
                    for (_iterator18.s(); !(_step18 = _iterator18.n()).done;) {
                      var o = _step18.value;
                      n.push(o.value ? JSON.stringify(o.value.cooked) : JSON.stringify("")), !1 === o.tail && (n.push(t.expressions[r] ? "lang.castString(lang.aCheck(" + oe(e, t.expressions[r]) + ", 'TemplateLiteral'))" : ""), r++);
                    }
                  } catch (err) {
                    _iterator18.e(err);
                  } finally {
                    _iterator18.f();
                  }

                  return "([" + n.join(",") + "]).join('')";
                } catch (e) {
                  throw e;
                }
              }(e, t);

            case "TemplateElement":
              return JSON.stringify(t.value ? t.value.cooked : "");

            case "ForStatement":
              return function (e, t) {
                var n = "lastStatement = lc.voidOperation; \n";
                null !== t.init && (n += oe(e, t.init) + "; ");
                var r = ye(e),
                    o = ye(e);
                n += "var " + r + " = true; ", n += "\n do { ", null !== t.update && (n += " if (" + r + "===false) {\n " + oe(e, t.update) + "  \n}\n " + r + "=false; \n");
                null !== t.test && (n += "var " + o + " = " + oe(e, t.test) + "; ", n += "if (" + o + "===false) { break; } else if (" + o + "!==true) { lang.error({type: '" + t.type + "'},'RUNTIME','CANNOT_USE_NONBOOLEAN_IN_CONDITION');   }\n");
                n += oe(e, t.body), null !== t.update && (n += "\n " + oe(e, t.update));
                return n += "\n" + r + " = true; \n} while(true);  lastStatement = lc.voidOperation; ", n;
              }(e, t);

            case "ForInStatement":
              return function (e, t) {
                var n = ye(e),
                    r = ye(e),
                    o = ye(e);
                var a = "var " + n + " = " + oe(e, t.right) + ";\n";
                "VariableDeclaration" === t.left.type && (a += oe(e, t.left));
                var l = "VariableDeclaration" === t.left.type ? t.left.declarations[0].id.name : t.left.name;
                l = l.toLowerCase();
                var s = "";
                null !== e.localScope && (void 0 !== e.localScope[l] ? s = "lscope['" + l + "']" : void 0 !== e.localScope._SymbolsMap[l] && (s = "lscope['" + e.localScope._SymbolsMap[l] + "']"));
                "" === s && (void 0 !== e.globalScope[l] ? s = "gscope['" + l + "']" : void 0 !== e.globalScope._SymbolsMap[l] && (s = "gscope['" + e.globalScope._SymbolsMap[l] + "']"));
                a += "if (" + n + "===null) {  lastStatement = lc.voidOperation; }\n ", a += "else if (lc.isArray(" + n + ") || lc.isString(" + n + ")) {", a += "var " + r + "=" + n + ".length; \n", a += "for(var " + o + "=0; " + o + "<" + r + "; " + o + "++) {\n", a += s + "=" + o + ";\n", a += oe(e, t.body), a += "\n}\n", a += " lastStatement = lc.voidOperation; \n", a += " \n}\n", a += "else if (lc.isImmutableArray(" + n + ")) {", a += "var " + r + "=" + n + ".length(); \n", a += "for(var " + o + "=0; " + o + "<" + r + "; " + o + "++) {\n", a += s + "=" + o + ";\n", a += oe(e, t.body), a += "\n}\n", a += " lastStatement = lc.voidOperation; \n", a += " \n}\n", a += "else if (( " + n + " instanceof lang.Dictionary) || ( " + n + " instanceof lang.Feature)) {", a += "var " + r + "=" + n + ".keys(); \n", a += "for(var " + o + "=0; " + o + "<" + r + ".length; " + o + "++) {\n", a += s + "=" + r + "[" + o + "];\n", a += oe(e, t.body), a += "\n}\n", a += " lastStatement = lc.voidOperation; \n", a += " \n}\n", e.isAsync && (a += "else if (lc.isFeatureSet(" + n + ")) {", a += "var " + r + "=" + n + ".iterator(runtimeCtx.abortSignal); \n", a += "for(var " + o + "=lang. graphicToFeature( yield " + r + ".next()," + n + "); " + o + "!=null; " + o + "=lang. graphicToFeature( yield " + r + ".next()," + n + ")) {\n", a += s + "=" + o + ";\n", a += oe(e, t.body), a += "\n}\n", a += " lastStatement = lc.voidOperation; \n", a += " \n}\n");
                return a += "else { lastStatement = lc.voidOperation; } \n", a;
              }(e, t);

            case "Identifier":
              return function (e, t) {
                try {
                  var n = t.name.toLowerCase();

                  if (null !== e.localScope) {
                    if (void 0 !== e.localScope[n]) return "lscope['" + n + "']";
                    if (void 0 !== e.localScope._SymbolsMap[n]) return "lscope['" + e.localScope._SymbolsMap[n] + "']";
                  }

                  if (void 0 !== e.globalScope[n]) return "gscope['" + n + "']";
                  if (void 0 !== e.globalScope._SymbolsMap[n]) return "gscope['" + e.globalScope._SymbolsMap[n] + "']";
                  throw new Error(Object(_treeAnalysis_js__WEBPACK_IMPORTED_MODULE_15__["nodeErrorMessage"])(t, "RUNTIME", "VARIABLENOTFOUND"));
                } catch (e) {
                  throw e;
                }
              }(e, t);

            case "MemberExpression":
              return function (e, t) {
                try {
                  var n;
                  return n = !0 === t.computed ? oe(e, t.property) : "'" + t.property.name + "'", "lang.member(" + oe(e, t.object) + "," + n + ")";
                } catch (e) {
                  throw e;
                }
              }(e, t);

            case "Literal":
              return null === t.value || void 0 === t.value ? "null" : JSON.stringify(t.value);

            case "ThisExpression":
              throw new Error(Object(_treeAnalysis_js__WEBPACK_IMPORTED_MODULE_15__["nodeErrorMessage"])(t, "RUNTIME", "NOTSUPPORTED"));

            case "CallExpression":
              return function (e, t) {
                try {
                  if ("Identifier" !== t.callee.type) throw new Error(Object(_treeAnalysis_js__WEBPACK_IMPORTED_MODULE_15__["nodeErrorMessage"])(t, "RUNTIME", "ONLYNODESSUPPORTED"));
                  var n = t.callee.name.toLowerCase();
                  var r = "";

                  if (null !== e.localScope && (void 0 !== e.localScope[n] ? r = "lscope['" + n + "']" : void 0 !== e.localScope._SymbolsMap[n] && (r = "lscope['" + e.localScope._SymbolsMap[n] + "']")), "" === r && (void 0 !== e.globalScope[n] ? r = "gscope['" + n + "']" : void 0 !== e.globalScope._SymbolsMap[n] && (r = "gscope['" + e.globalScope._SymbolsMap[n] + "']")), "" !== r) {
                    var _n22 = "[";

                    for (var _r45 = 0; _r45 < t.arguments.length; _r45++) {
                      _r45 > 0 && (_n22 += ", "), _n22 += oe(e, t.arguments[_r45]);
                    }

                    return _n22 += "]", e.isAsync ? "(yield lang.callfunc(" + r + "," + _n22 + ",runtimeCtx) )" : "lang.callfunc(" + r + "," + _n22 + ",runtimeCtx)";
                  }

                  throw new Error(Object(_treeAnalysis_js__WEBPACK_IMPORTED_MODULE_15__["nodeErrorMessage"])(t, "RUNTIME", "NOTFOUND"));
                } catch (e) {
                  throw e;
                }
              }(e, t);

            case "UnaryExpression":
              return function (e, t) {
                try {
                  return "lang.unary(" + oe(e, t.argument) + ",'" + t.operator + "')";
                } catch (e) {
                  throw e;
                }
              }(e, t);

            case "BinaryExpression":
              return function (e, t) {
                try {
                  return "lang.binary(" + oe(e, t.left) + "," + oe(e, t.right) + ",'" + t.operator + "')";
                } catch (e) {
                  throw e;
                }
              }(e, t);

            case "LogicalExpression":
              return function (e, t) {
                try {
                  if ("AssignmentExpression" === t.left.type || "UpdateExpression" === t.left.type) throw new Error(Object(_treeAnalysis_js__WEBPACK_IMPORTED_MODULE_15__["nodeErrorMessage"])(t.left, "RUNTIME", "CANNOT_USE_ASSIGNMENT_IN_CONDITION"));
                  if ("AssignmentExpression" === t.right.type || "UpdateExpression" === t.right.type) throw new Error(Object(_treeAnalysis_js__WEBPACK_IMPORTED_MODULE_15__["nodeErrorMessage"])(t.right, "RUNTIME", "CANNOT_USE_ASSIGNMENT_IN_CONDITION"));
                  if ("&&" === t.operator || "||" === t.operator) return "(lang.logicalCheck(" + oe(e, t.left) + ") " + t.operator + " lang.logicalCheck(" + oe(e, t.right) + "))";
                  throw new Error(Object(_treeAnalysis_js__WEBPACK_IMPORTED_MODULE_15__["nodeErrorMessage"])(t, "RUNTIME", "ONLYORORAND"));
                } catch (e) {
                  throw e;
                }
              }(e, t);

            case "ConditionalExpression":
              throw new Error(Object(_treeAnalysis_js__WEBPACK_IMPORTED_MODULE_15__["nodeErrorMessage"])(t, "RUNTIME", "NOTSUPPORTED"));

            case "ArrayExpression":
              return function (e, t) {
                try {
                  var n = [];

                  for (var r = 0; r < t.elements.length; r++) {
                    "Literal" === t.elements[r].type ? n.push(oe(e, t.elements[r])) : n.push("lang.aCheck(" + oe(e, t.elements[r]) + ",'ArrayExpression')");
                  }

                  return "[" + n.join(",") + "]";
                } catch (e) {
                  throw e;
                }
              }(e, t);

            case "ObjectExpression":
              return function (e, t) {
                var n = "lang.dictionary([";

                for (var r = 0; r < t.properties.length; r++) {
                  var o = t.properties[r];
                  r > 0 && (n += ","), n += "lang.strCheck(" + ("Identifier" === o.key.type ? "'" + o.key.name + "'" : oe(e, o.key)) + ",'ObjectExpression'),lang.aCheck(" + oe(e, o.value) + ", 'ObjectExpression')";
                }

                return n += "])", n;
              }(e, t);

            case "Property":
              return function (e, t) {
                throw new Error("Should not get here");
              }();

            case "Array":
              throw new Error(Object(_treeAnalysis_js__WEBPACK_IMPORTED_MODULE_15__["nodeErrorMessage"])(t, "RUNTIME", "NOTSUPPORTED"));

            default:
              throw new Error(Object(_treeAnalysis_js__WEBPACK_IMPORTED_MODULE_15__["nodeErrorMessage"])(t, "RUNTIME", "UNREOGNISED"));
          }
        } catch (e) {
          throw e;
        }
      }

      function ae(e, t) {
        return "BlockStatement" === t.type ? oe(e, t) : "ReturnStatement" === t.type || "BreakStatement" === t.type || "ContinueStatement" === t.type ? oe(e, t) + "; " : "UpdateExpression" === t.type ? "lastStatement = " + oe(e, t) + "; " : "ExpressionStatement" === t.type ? oe(e, t) : "ObjectExpression" === t.type ? "lastStatement = " + oe(e, t) + "; " : oe(e, t) + "; ";
      }

      function le(e, t) {
        var n = "";

        for (var r = 0; r < t.body.length; r++) {
          "ReturnStatement" === t.body[r].type || "BreakStatement" === t.body[r].type || "ContinueStatement" === t.body[r].type ? n += oe(e, t.body[r]) + "; \n" : "UpdateExpression" === t.body[r].type || "ObjectExpression" === t.body[r].type ? n += "lastStatement = " + oe(e, t.body[r]) + "; \n" : n += oe(e, t.body[r]) + " \n";
        }

        return n;
      }

      var se = 0;
      var ie = {};

      function ce(e) {
        return null === e ? "" : Object(_chunks_languageUtils_js__WEBPACK_IMPORTED_MODULE_10__["h"])(e) || Object(_chunks_languageUtils_js__WEBPACK_IMPORTED_MODULE_10__["o"])(e) ? "Array" : Object(_chunks_languageUtils_js__WEBPACK_IMPORTED_MODULE_10__["f"])(e) ? "Date" : Object(_chunks_languageUtils_js__WEBPACK_IMPORTED_MODULE_10__["b"])(e) ? "String" : Object(_chunks_languageUtils_js__WEBPACK_IMPORTED_MODULE_10__["i"])(e) ? "Boolean" : Object(_chunks_languageUtils_js__WEBPACK_IMPORTED_MODULE_10__["a"])(e) ? "Number" : e instanceof _Attachment_js__WEBPACK_IMPORTED_MODULE_13__["default"] ? "Attachment" : e instanceof _ArcadePortal_js__WEBPACK_IMPORTED_MODULE_12__["default"] ? "Portal" : e instanceof _Dictionary_js__WEBPACK_IMPORTED_MODULE_11__["default"] ? "Dictionary" : e instanceof _Feature_js__WEBPACK_IMPORTED_MODULE_14__["default"] ? "Feature" : e instanceof _geometry_Point_js__WEBPACK_IMPORTED_MODULE_3__["default"] ? "Point" : e instanceof _geometry_Polygon_js__WEBPACK_IMPORTED_MODULE_6__["default"] ? "Polygon" : e instanceof _geometry_Polyline_js__WEBPACK_IMPORTED_MODULE_7__["default"] ? "Polyline" : e instanceof _geometry_Multipoint_js__WEBPACK_IMPORTED_MODULE_5__["default"] ? "Multipoint" : e instanceof _geometry_Extent_js__WEBPACK_IMPORTED_MODULE_4__["default"] ? "Extent" : Object(_chunks_languageUtils_js__WEBPACK_IMPORTED_MODULE_10__["q"])(e) ? "Function" : Object(_chunks_languageUtils_js__WEBPACK_IMPORTED_MODULE_10__["z"])(e) ? "FeatureSet" : Object(_chunks_languageUtils_js__WEBPACK_IMPORTED_MODULE_10__["A"])(e) ? "FeatureSetCollection" : e === _chunks_languageUtils_js__WEBPACK_IMPORTED_MODULE_10__["v"] ? "" : "number" == typeof e && isNaN(e) ? "Number" : "Unrecognised Type";
      }

      function ue(e, t, n, r) {
        try {
          var o = t[n];
          if (Object(_chunks_languageUtils_js__WEBPACK_IMPORTED_MODULE_10__["n"])(o, r)) return t[n + 1];
          {
            var _o15 = t.length - n;

            return 1 === _o15 ? t[n] : 2 === _o15 ? null : 3 === _o15 ? t[n + 2] : ue(e, t, n + 2, r);
          }
        } catch (e) {
          throw e;
        }
      }

      function pe(e, t, n, r) {
        try {
          if (!0 === r) return t[n + 1];
          if (3 === t.length - n) return t[n + 2];
          {
            var _r46 = t[n + 2];
            if (!1 === Object(_chunks_languageUtils_js__WEBPACK_IMPORTED_MODULE_10__["i"])(_r46)) throw new Error("WHEN needs boolean test conditions");
            return pe(e, t, n + 2, _r46);
          }
        } catch (e) {
          throw e;
        }
      }

      function fe(e, t) {
        var n = e.length,
            r = Math.floor(n / 2);
        return 0 === n ? [] : 1 === n ? [e[0]] : function (e, t, n) {
          var r = [];

          for (; e.length > 0 || t.length > 0;) {
            if (e.length > 0 && t.length > 0) {
              var o = n(e[0], t[0]);
              isNaN(o) && (o = 0), o <= 0 ? (r.push(e[0]), e = e.slice(1)) : (r.push(t[0]), t = t.slice(1));
            } else e.length > 0 ? (r.push(e[0]), e = e.slice(1)) : t.length > 0 && (r.push(t[0]), t = t.slice(1));
          }

          return r;
        }(fe(e.slice(0, r), t), fe(e.slice(r, n), t), t);
      }

      function me(e, t) {
        try {
          var n = e.length,
              a = Math.floor(n / 2);
          if (0 === n) return Object(_core_promiseUtils_js__WEBPACK_IMPORTED_MODULE_0__["resolve"])([]);
          if (1 === n) return Object(_core_promiseUtils_js__WEBPACK_IMPORTED_MODULE_0__["resolve"])([e[0]]);
          var l = [me(e.slice(0, a), t), me(e.slice(a, n), t)];
          return Object(_core_promiseUtils_js__WEBPACK_IMPORTED_MODULE_0__["all"])(l).then(function (e) {
            return he(e[0], e[1], t, []);
          });
        } catch (e) {
          return Object(_core_promiseUtils_js__WEBPACK_IMPORTED_MODULE_0__["reject"])(e);
        }
      }

      function he(t, n, r, o) {
        return Object(_core_promiseUtils_js__WEBPACK_IMPORTED_MODULE_0__["create"])(function (e, a) {
          var l = o;
          t.length > 0 || n.length > 0 ? t.length > 0 && n.length > 0 ? r(t[0], n[0]).then(function (s) {
            try {
              isNaN(s) && (s = 1), s <= 0 ? (l.push(t[0]), t = t.slice(1)) : (l.push(n[0]), n = n.slice(1)), he(t, n, r, o).then(function (t) {
                e(t);
              }, a);
            } catch (e) {
              a(e);
            }
          }, a) : t.length > 0 ? (l.push(t[0]), he(t = t.slice(1), n, r, o).then(function (t) {
            e(t);
          }, a)) : n.length > 0 && (l.push(n[0]), n = n.slice(1), he(t, n, r, o).then(function (t) {
            e(t);
          }, a)) : e(o);
        });
      }

      function ge(e) {
        return e.symbols.symbolCounter++, "_T" + e.symbols.symbolCounter.toString();
      }

      function ye(e) {
        return e.symbols.symbolCounter++, "_Tvar" + e.symbols.symbolCounter.toString();
      }

      Object(_functions_array_js__WEBPACK_IMPORTED_MODULE_16__["registerFunctions"])(ie, ne), Object(_functions_date_js__WEBPACK_IMPORTED_MODULE_17__["registerFunctions"])(ie, ne), Object(_functions_string_js__WEBPACK_IMPORTED_MODULE_22__["registerFunctions"])(ie, ne), Object(_functions_maths_js__WEBPACK_IMPORTED_MODULE_20__["registerFunctions"])(ie, ne), Object(_functions_geometry_js__WEBPACK_IMPORTED_MODULE_18__["registerFunctions"])(ie, ne), Object(_functions_stats_js__WEBPACK_IMPORTED_MODULE_21__["registerFunctions"])(ie, ne), ie["typeof"] = function (e, t) {
        return ne(e, t, function (e, t, n) {
          Object(_chunks_languageUtils_js__WEBPACK_IMPORTED_MODULE_10__["p"])(n, 1, 1);
          var r = ce(n[0]);
          if ("Unrecognised Type" === r) throw new Error("Unrecognised Type");
          return r;
        });
      }, ie.iif = function (e, t) {
        try {
          return ne(e, t, function (e, t, n) {
            if (Object(_chunks_languageUtils_js__WEBPACK_IMPORTED_MODULE_10__["p"])(n, 3, 3), !1 === Object(_chunks_languageUtils_js__WEBPACK_IMPORTED_MODULE_10__["i"])(n[0])) throw new Error("IF Function must have a boolean test condition");
            return n[0] ? n[1] : n[2];
          });
        } catch (e) {
          throw e;
        }
      }, ie.decode = function (e, t) {
        try {
          return ne(e, t, function (t, n, r) {
            if (r.length < 2) throw new Error("Missing Parameters");
            if (2 === r.length) return r[1];
            {
              if ((r.length - 1) % 2 == 0) throw new Error("Must have a default value result.");
              var _t65 = r[0];
              return ue(e, r, 1, _t65);
            }
          });
        } catch (e) {
          throw e;
        }
      }, ie.when = function (e, t) {
        try {
          return ne(e, t, function (t, n, r) {
            if (r.length < 3) throw new Error("Missing Parameters");
            if (r.length % 2 == 0) throw new Error("Must have a default value result.");
            var o = r[0];
            if (!1 === Object(_chunks_languageUtils_js__WEBPACK_IMPORTED_MODULE_10__["i"])(o)) throw new Error("WHEN needs boolean test conditions");
            return pe(e, r, 0, o);
          });
        } catch (e) {
          throw e;
        }
      }, ie.top = function (e, t) {
        return ne(e, t, function (e, t, n) {
          if (Object(_chunks_languageUtils_js__WEBPACK_IMPORTED_MODULE_10__["p"])(n, 2, 2), Object(_chunks_languageUtils_js__WEBPACK_IMPORTED_MODULE_10__["h"])(n[0])) return Object(_chunks_languageUtils_js__WEBPACK_IMPORTED_MODULE_10__["c"])(n[1]) >= n[0].length ? n[0].slice(0) : n[0].slice(0, Object(_chunks_languageUtils_js__WEBPACK_IMPORTED_MODULE_10__["c"])(n[1]));
          if (Object(_chunks_languageUtils_js__WEBPACK_IMPORTED_MODULE_10__["o"])(n[0])) return Object(_chunks_languageUtils_js__WEBPACK_IMPORTED_MODULE_10__["c"])(n[1]) >= n[0].length() ? n[0].slice(0) : n[0].slice(0, Object(_chunks_languageUtils_js__WEBPACK_IMPORTED_MODULE_10__["c"])(n[1]));
          throw new Error("Top cannot accept this parameter type");
        });
      }, ie.first = function (e, t) {
        return ne(e, t, function (e, t, n) {
          return Object(_chunks_languageUtils_js__WEBPACK_IMPORTED_MODULE_10__["p"])(n, 1, 1), Object(_chunks_languageUtils_js__WEBPACK_IMPORTED_MODULE_10__["h"])(n[0]) ? 0 === n[0].length ? null : n[0][0] : Object(_chunks_languageUtils_js__WEBPACK_IMPORTED_MODULE_10__["o"])(n[0]) ? 0 === n[0].length() ? null : n[0].get(0) : null;
        });
      }, ie.sort = function (e, t) {
        return ne(e, t, function (t, n, r) {
          Object(_chunks_languageUtils_js__WEBPACK_IMPORTED_MODULE_10__["p"])(r, 1, 2);
          var o = r[0];
          if (Object(_chunks_languageUtils_js__WEBPACK_IMPORTED_MODULE_10__["o"])(o) && (o = o.toArray()), !1 === Object(_chunks_languageUtils_js__WEBPACK_IMPORTED_MODULE_10__["h"])(o)) throw new Error("Illegal Argument");

          if (r.length > 1) {
            if (!1 === Object(_chunks_languageUtils_js__WEBPACK_IMPORTED_MODULE_10__["q"])(r[1])) throw new Error("Illegal Argument");
            var _n23 = o;

            var a = function a(e, n) {
              return Ce.callfunc(r[1], [e, n], t);
            };

            return e.isAsync ? me(_n23, a) : (_n23 = fe(_n23, function (e, t) {
              return a(e, t);
            }), _n23);
          }

          {
            var _e56 = o;
            if (0 === _e56.length) return [];
            var _t66 = {};

            for (var _n25 = 0; _n25 < _e56.length; _n25++) {
              var _r48 = ce(_e56[_n25]);

              "" !== _r48 && (_t66[_r48] = !0);
            }

            if (!0 === _t66.Array || !0 === _t66.Dictionary || !0 === _t66.Feature || !0 === _t66.Point || !0 === _t66.Polygon || !0 === _t66.Polyline || !0 === _t66.Multipoint || !0 === _t66.Extent || !0 === _t66.Function) return _e56.slice(0);
            var _n24 = 0,
                _r47 = "";

            for (var _e57 in _t66) {
              _n24++, _r47 = _e57;
            }

            return _e56 = _n24 > 1 || "String" === _r47 ? fe(_e56, function (e, t) {
              if (null == e || e === _chunks_languageUtils_js__WEBPACK_IMPORTED_MODULE_10__["v"]) return null == t || t === _chunks_languageUtils_js__WEBPACK_IMPORTED_MODULE_10__["v"] ? 0 : 1;
              if (null == t || t === _chunks_languageUtils_js__WEBPACK_IMPORTED_MODULE_10__["v"]) return -1;
              var n = Object(_chunks_languageUtils_js__WEBPACK_IMPORTED_MODULE_10__["e"])(e),
                  r = Object(_chunks_languageUtils_js__WEBPACK_IMPORTED_MODULE_10__["e"])(t);
              return n < r ? -1 : n === r ? 0 : 1;
            }) : "Number" === _r47 ? fe(_e56, function (e, t) {
              return e - t;
            }) : "Boolean" === _r47 ? fe(_e56, function (e, t) {
              return e === t ? 0 : t ? -1 : 1;
            }) : "Date" === _r47 ? fe(_e56, function (e, t) {
              return t - e;
            }) : _e56.slice(0), _e56;
          }
        });
      };
      var de = {};

      for (var e in ie) {
        de[e] = new _chunks_languageUtils_js__WEBPACK_IMPORTED_MODULE_10__["N"](ie[e]);
      }

      Object(_functions_geomsync_js__WEBPACK_IMPORTED_MODULE_19__["registerFunctions"])(ie, ne);

      for (var _e58 in ie) {
        ie[_e58] = new _chunks_languageUtils_js__WEBPACK_IMPORTED_MODULE_10__["N"](ie[_e58]);
      }

      var Se = function Se() {};

      Se.prototype = ie;

      var we = function we() {};

      function Ee(e, t, n) {
        var r = {};
        e || (e = {}), n || (n = {}), r._SymbolsMap = {}, r.textformatting = 1, r.infinity = 1, r.pi = 1;

        for (var _e59 in t) {
          r[_e59] = 1;
        }

        for (var _e60 in n) {
          r[_e60] = 1;
        }

        for (var _t67 in e) {
          r[_t67] = 1;
        }

        return r;
      }

      we.prototype = de;
      var be = {
        fixSpatialReference: _chunks_languageUtils_js__WEBPACK_IMPORTED_MODULE_10__["r"],
        parseArguments: function parseArguments(e, t) {
          var n = [];

          for (var r = 0; r < t.arguments.length; r++) {
            n.push(oe(e, t.arguments[r]));
          }

          return n;
        },
        standardFunction: ne
      };

      function Ne(e, t) {
        var n = {
          mode: t,
          compiled: !0,
          functions: {},
          signatures: [],
          failDefferred: re,
          standardFunction: ne,
          standardFunctionAsync: ne,
          evaluateIdentifier: Te
        };

        for (var _t68 = 0; _t68 < e.length; _t68++) {
          e[_t68].registerFunctions(n);
        }

        if ("sync" === t) {
          for (var _e61 in n.functions) {
            ie[_e61] = new _chunks_languageUtils_js__WEBPACK_IMPORTED_MODULE_10__["N"](n.functions[_e61]), Se.prototype[_e61] = ie[_e61];
          }

          for (var _e62 = 0; _e62 < n.signatures.length; _e62++) {
            Object(_treeAnalysis_js__WEBPACK_IMPORTED_MODULE_15__["addFunctionDeclaration"])(n.signatures[_e62], "sync");
          }
        } else {
          for (var _e63 in n.functions) {
            de[_e63] = new _chunks_languageUtils_js__WEBPACK_IMPORTED_MODULE_10__["N"](n.functions[_e63]), we.prototype[_e63] = de[_e63];
          }

          for (var _e64 = 0; _e64 < n.signatures.length; _e64++) {
            Object(_treeAnalysis_js__WEBPACK_IMPORTED_MODULE_15__["addFunctionDeclaration"])(n.signatures[_e64], "async");
          }
        }
      }

      function ve(e, t) {
        return e(t);
      }

      function Me(e, t) {
        return Object(_treeAnalysis_js__WEBPACK_IMPORTED_MODULE_15__["findFieldLiterals"])(e);
      }

      function Ie(e, t) {
        return Object(_treeAnalysis_js__WEBPACK_IMPORTED_MODULE_15__["validateScript"])(e, t, "sync");
      }

      function Oe(e, t) {
        return Object(_treeAnalysis_js__WEBPACK_IMPORTED_MODULE_15__["referencesMember"])(e, t);
      }

      function xe(e, t) {
        return Object(_treeAnalysis_js__WEBPACK_IMPORTED_MODULE_15__["referencesFunction"])(e, t);
      }

      function Te(e, t) {
        var n = t.name;
        if ("_SymbolsMap" === n) throw "Illegal";

        if (e.localStack.length > 0) {
          if ("_t" !== n.substr(0, 2).toLowerCase() && void 0 !== e.localStack[e.localStack.length - 1][n]) return e.localStack[e.localStack.length - 1][n];
          var _t69 = e.mangleMap[n];
          if (void 0 !== _t69 && void 0 !== e.localStack[e.localStack.length - 1][_t69]) return e.localStack[e.localStack.length - 1][_t69];
        }

        if ("_t" !== n.substr(0, 2).toLowerCase() && void 0 !== e.globalScope[n]) return e.globalScope[n];
        if (1 === e.globalScope._SymbolsMap[n]) return e.globalScope[n];
        var r = e.mangleMap[n];
        return void 0 !== r ? e.globalScope[r] : void 0;
      }

      var Re = 0;
      var Ce = {
        error: function error(e, t, n) {
          throw new Error(Object(_treeAnalysis_js__WEBPACK_IMPORTED_MODULE_15__["nodeErrorMessage"])(e, t, n));
        },
        __awaiter: function __awaiter(t, n, r, o) {
          return Object(_core_promiseUtils_js__WEBPACK_IMPORTED_MODULE_0__["create"])(function (e, r) {
            function a(e) {
              try {
                s(o.next(e));
              } catch (e) {
                r(e);
              }
            }

            function l(e) {
              try {
                s(o["throw"](e));
              } catch (e) {
                r(e);
              }
            }

            function s(t) {
              t.done ? e(t.value) : t.value && t.value.then ? t.value.then(a, l) : (Re++, Re % 100 == 0 ? setTimeout(function () {
                Re = 0, a(t.value);
              }, 0) : a(t.value));
            }

            s((o = o.apply(t, n || [])).next());
          });
        },
        functionDepthchecker: function functionDepthchecker(e, n) {
          return function () {
            if (n.depthCounter++, n.localStack.push([]), n.depthCounter > 64) throw new Error("Exceeded maximum function depth");
            var r = e.apply(this, arguments);
            return Object(_core_promiseUtils_js__WEBPACK_IMPORTED_MODULE_0__["isPromiseLike"])(r) ? r.then(function (e) {
              return n.depthCounter--, n.localStack.length = n.localStack.length - 1, e;
            }) : (n.depthCounter--, n.localStack.length = n.localStack.length - 1, r);
          };
        },
        castString: function castString(e) {
          return Object(_chunks_languageUtils_js__WEBPACK_IMPORTED_MODULE_10__["e"])(e);
        },
        aCheck: function aCheck(e, t) {
          if (Object(_chunks_languageUtils_js__WEBPACK_IMPORTED_MODULE_10__["q"])(e)) throw new Error(Object(_treeAnalysis_js__WEBPACK_IMPORTED_MODULE_15__["nodeErrorMessage"])({
            type: t
          }, "RUNTIME", "FUNCTIONCONTEXTILLEGAL"));
          return e === _chunks_languageUtils_js__WEBPACK_IMPORTED_MODULE_10__["v"] ? null : e;
        },
        Dictionary: _Dictionary_js__WEBPACK_IMPORTED_MODULE_11__["default"],
        Feature: _Feature_js__WEBPACK_IMPORTED_MODULE_14__["default"],
        dictionary: function dictionary(e) {
          var t = {};

          for (var _n26 = 0; _n26 < e.length; _n26 += 2) {
            if (Object(_chunks_languageUtils_js__WEBPACK_IMPORTED_MODULE_10__["q"])(e[_n26 + 1])) throw new Error("Illegal Argument");
            if (!1 === Object(_chunks_languageUtils_js__WEBPACK_IMPORTED_MODULE_10__["b"])(e[_n26])) throw new Error("Illegal Argument");
            e[_n26 + 1] === _chunks_languageUtils_js__WEBPACK_IMPORTED_MODULE_10__["v"] ? t[e[_n26].toString()] = null : t[e[_n26].toString()] = e[_n26 + 1];
          }

          var n = new _Dictionary_js__WEBPACK_IMPORTED_MODULE_11__["default"](t);
          return n.immutable = !1, n;
        },
        strCheck: function strCheck(e) {
          if (!1 === Object(_chunks_languageUtils_js__WEBPACK_IMPORTED_MODULE_10__["b"])(e)) throw new Error("Illegal Argument");
          return e;
        },
        unary: function unary(e, t) {
          if (Object(_chunks_languageUtils_js__WEBPACK_IMPORTED_MODULE_10__["i"])(e)) {
            if ("!" === t) return !e;
            if ("-" === t) return -1 * Object(_chunks_languageUtils_js__WEBPACK_IMPORTED_MODULE_10__["c"])(e);
            if ("+" === t) return 1 * Object(_chunks_languageUtils_js__WEBPACK_IMPORTED_MODULE_10__["c"])(e);
            if ("~" === t) return ~Object(_chunks_languageUtils_js__WEBPACK_IMPORTED_MODULE_10__["c"])(e);
            throw new Error(Object(_treeAnalysis_js__WEBPACK_IMPORTED_MODULE_15__["nodeErrorMessage"])({
              type: "UnaryExpression",
              operator: t,
              prefix: null,
              argument: null
            }, "RUNTIME", "NOTSUPPORTEDUNARYOPERATOR"));
          }

          if ("-" === t) return -1 * Object(_chunks_languageUtils_js__WEBPACK_IMPORTED_MODULE_10__["c"])(e);
          if ("+" === t) return 1 * Object(_chunks_languageUtils_js__WEBPACK_IMPORTED_MODULE_10__["c"])(e);
          if ("~" === t) return ~Object(_chunks_languageUtils_js__WEBPACK_IMPORTED_MODULE_10__["c"])(e);
          throw new Error(Object(_treeAnalysis_js__WEBPACK_IMPORTED_MODULE_15__["nodeErrorMessage"])({
            type: "UnaryExpression",
            operator: t,
            prefix: null,
            argument: null
          }, "RUNTIME", "NOTSUPPORTEDUNARYOPERATOR"));
        },
        logicalCheck: function logicalCheck(e) {
          if (!1 === Object(_chunks_languageUtils_js__WEBPACK_IMPORTED_MODULE_10__["i"])(e)) {
            throw new Error(Object(_treeAnalysis_js__WEBPACK_IMPORTED_MODULE_15__["nodeErrorMessage"])({
              type: "LogicalExpression",
              operator: null,
              left: null,
              right: null
            }, "RUNTIME", "ONLYORORAND"));
          }

          return e;
        },
        logical: function logical(e, t, n) {
          if (Object(_chunks_languageUtils_js__WEBPACK_IMPORTED_MODULE_10__["i"])(e) && Object(_chunks_languageUtils_js__WEBPACK_IMPORTED_MODULE_10__["i"])(t)) switch (n) {
            case "||":
              return e || t;

            case "&&":
              return e && t;

            default:
              throw new Error(Object(_treeAnalysis_js__WEBPACK_IMPORTED_MODULE_15__["nodeErrorMessage"])({
                type: "LogicalExpression",
                operator: null,
                left: null,
                right: null
              }, "RUNTIME", "ONLYORORAND"));
          }
          throw new Error(Object(_treeAnalysis_js__WEBPACK_IMPORTED_MODULE_15__["nodeErrorMessage"])({
            type: "LogicalExpression",
            operator: null,
            left: null,
            right: null
          }, "RUNTIME", "ONLYORORAND"));
        },
        binary: function binary(e, t, n) {
          switch (n) {
            case "|":
            case "<<":
            case ">>":
            case ">>>":
            case "^":
            case "&":
              return Object(_chunks_languageUtils_js__WEBPACK_IMPORTED_MODULE_10__["u"])(Object(_chunks_languageUtils_js__WEBPACK_IMPORTED_MODULE_10__["c"])(e), Object(_chunks_languageUtils_js__WEBPACK_IMPORTED_MODULE_10__["c"])(t), n);

            case "==":
            case "=":
              return Object(_chunks_languageUtils_js__WEBPACK_IMPORTED_MODULE_10__["n"])(e, t);

            case "!=":
              return !Object(_chunks_languageUtils_js__WEBPACK_IMPORTED_MODULE_10__["n"])(e, t);

            case "<":
            case ">":
            case "<=":
            case ">=":
              return Object(_chunks_languageUtils_js__WEBPACK_IMPORTED_MODULE_10__["s"])(e, t, n);

            case "+":
              return Object(_chunks_languageUtils_js__WEBPACK_IMPORTED_MODULE_10__["b"])(e) || Object(_chunks_languageUtils_js__WEBPACK_IMPORTED_MODULE_10__["b"])(t) ? Object(_chunks_languageUtils_js__WEBPACK_IMPORTED_MODULE_10__["e"])(e) + Object(_chunks_languageUtils_js__WEBPACK_IMPORTED_MODULE_10__["e"])(t) : Object(_chunks_languageUtils_js__WEBPACK_IMPORTED_MODULE_10__["c"])(e) + Object(_chunks_languageUtils_js__WEBPACK_IMPORTED_MODULE_10__["c"])(t);

            case "-":
              return Object(_chunks_languageUtils_js__WEBPACK_IMPORTED_MODULE_10__["c"])(e) - Object(_chunks_languageUtils_js__WEBPACK_IMPORTED_MODULE_10__["c"])(t);

            case "*":
              return Object(_chunks_languageUtils_js__WEBPACK_IMPORTED_MODULE_10__["c"])(e) * Object(_chunks_languageUtils_js__WEBPACK_IMPORTED_MODULE_10__["c"])(t);

            case "/":
              return Object(_chunks_languageUtils_js__WEBPACK_IMPORTED_MODULE_10__["c"])(e) / Object(_chunks_languageUtils_js__WEBPACK_IMPORTED_MODULE_10__["c"])(t);

            case "%":
              return Object(_chunks_languageUtils_js__WEBPACK_IMPORTED_MODULE_10__["c"])(e) % Object(_chunks_languageUtils_js__WEBPACK_IMPORTED_MODULE_10__["c"])(t);

            default:
              throw new Error(Object(_treeAnalysis_js__WEBPACK_IMPORTED_MODULE_15__["nodeErrorMessage"])({
                type: "BinaryExpression",
                operator: n,
                left: e,
                right: t
              }, "RUNTIME", "OPERATORNOTRECOGNISED"));
          }
        },
        assign: function assign(e, t, n) {
          switch (t) {
            case "=":
              return e === _chunks_languageUtils_js__WEBPACK_IMPORTED_MODULE_10__["v"] ? null : e;

            case "/=":
              return Object(_chunks_languageUtils_js__WEBPACK_IMPORTED_MODULE_10__["c"])(n) / Object(_chunks_languageUtils_js__WEBPACK_IMPORTED_MODULE_10__["c"])(e);

            case "*=":
              return Object(_chunks_languageUtils_js__WEBPACK_IMPORTED_MODULE_10__["c"])(n) * Object(_chunks_languageUtils_js__WEBPACK_IMPORTED_MODULE_10__["c"])(e);

            case "-=":
              return Object(_chunks_languageUtils_js__WEBPACK_IMPORTED_MODULE_10__["c"])(n) - Object(_chunks_languageUtils_js__WEBPACK_IMPORTED_MODULE_10__["c"])(e);

            case "+=":
              return Object(_chunks_languageUtils_js__WEBPACK_IMPORTED_MODULE_10__["b"])(n) || Object(_chunks_languageUtils_js__WEBPACK_IMPORTED_MODULE_10__["b"])(e) ? Object(_chunks_languageUtils_js__WEBPACK_IMPORTED_MODULE_10__["e"])(n) + Object(_chunks_languageUtils_js__WEBPACK_IMPORTED_MODULE_10__["e"])(e) : Object(_chunks_languageUtils_js__WEBPACK_IMPORTED_MODULE_10__["c"])(n) + Object(_chunks_languageUtils_js__WEBPACK_IMPORTED_MODULE_10__["c"])(e);

            case "%=":
              return Object(_chunks_languageUtils_js__WEBPACK_IMPORTED_MODULE_10__["c"])(n) % Object(_chunks_languageUtils_js__WEBPACK_IMPORTED_MODULE_10__["c"])(e);

            default:
              throw new Error(Object(_treeAnalysis_js__WEBPACK_IMPORTED_MODULE_15__["nodeErrorMessage"])({
                type: "AssignmentExpression",
                operator: t,
                left: null,
                right: null
              }, "RUNTIME", "OPERATORNOTRECOGNISED"));
          }
        },
        update: function update(e, t, n, r) {
          var o = Object(_chunks_languageUtils_js__WEBPACK_IMPORTED_MODULE_10__["c"])(e[t]);
          return e[t] = "++" === n ? o + 1 : o - 1, !1 === r ? o : "++" === n ? o + 1 : o - 1;
        },
        graphicToFeature: function graphicToFeature(e, t) {
          return null === e ? null : _Feature_js__WEBPACK_IMPORTED_MODULE_14__["default"].createFromGraphicLikeObject(e.geometry, e.attributes, t);
        },
        memberupdate: function memberupdate(e, t, n, r) {
          var o;

          if (Object(_chunks_languageUtils_js__WEBPACK_IMPORTED_MODULE_10__["h"])(e)) {
            if (!Object(_chunks_languageUtils_js__WEBPACK_IMPORTED_MODULE_10__["a"])(t)) throw new Error("Invalid Parameter");
            if (t < 0 && (t = e.length + t), t < 0 || t >= e.length) throw new Error("Assignment outside of array bounds");
            o = Object(_chunks_languageUtils_js__WEBPACK_IMPORTED_MODULE_10__["c"])(e[t]), e[t] = "++" === n ? o + 1 : o - 1;
          } else if (e instanceof _Dictionary_js__WEBPACK_IMPORTED_MODULE_11__["default"]) {
            if (!1 === Object(_chunks_languageUtils_js__WEBPACK_IMPORTED_MODULE_10__["b"])(t)) throw new Error("Dictionary accessor must be a string");
            if (!0 !== e.hasField(t)) throw new Error("Invalid Parameter");
            o = Object(_chunks_languageUtils_js__WEBPACK_IMPORTED_MODULE_10__["c"])(e.field(t)), e.setField(t, "++" === n ? o + 1 : o - 1);
          } else {
            if (!(e instanceof _Feature_js__WEBPACK_IMPORTED_MODULE_14__["default"])) throw Object(_chunks_languageUtils_js__WEBPACK_IMPORTED_MODULE_10__["o"])(e) ? new Error("Array is Immutable") : new Error("Invalid Parameter");
            if (!1 === Object(_chunks_languageUtils_js__WEBPACK_IMPORTED_MODULE_10__["b"])(t)) throw new Error("Feature accessor must be a string");
            if (!0 !== e.hasField(t)) throw new Error("Invalid Parameter");
            o = Object(_chunks_languageUtils_js__WEBPACK_IMPORTED_MODULE_10__["c"])(e.field(t)), e.setField(t, "++" === n ? o + 1 : o - 1);
          }

          return !1 === r ? o : "++" === n ? o + 1 : o - 1;
        },
        assignmember: function assignmember(e, t, n, r) {
          if (Object(_chunks_languageUtils_js__WEBPACK_IMPORTED_MODULE_10__["h"])(e)) {
            if (!Object(_chunks_languageUtils_js__WEBPACK_IMPORTED_MODULE_10__["a"])(t)) throw new Error("Invalid Parameter");
            if (t < 0 && (t = e.length + t), t < 0 || t > e.length) throw new Error("Assignment outside of array bounds");

            if (t === e.length) {
              if ("=" !== n) throw new Error("Invalid Parameter");
              e[t] = this.assign(r, n, e[t]);
            } else e[t] = this.assign(r, n, e[t]);
          } else if (e instanceof _Dictionary_js__WEBPACK_IMPORTED_MODULE_11__["default"]) {
            if (!1 === Object(_chunks_languageUtils_js__WEBPACK_IMPORTED_MODULE_10__["b"])(t)) throw new Error("Dictionary accessor must be a string");
            if (!0 === e.hasField(t)) e.setField(t, this.assign(r, n, e.field(t)));else {
              if ("=" !== n) throw new Error("Invalid Parameter");
              e.setField(t, this.assign(r, n, null));
            }
          } else {
            if (!(e instanceof _Feature_js__WEBPACK_IMPORTED_MODULE_14__["default"])) throw Object(_chunks_languageUtils_js__WEBPACK_IMPORTED_MODULE_10__["o"])(e) ? new Error("Array is Immutable") : new Error("Invalid Parameter");
            if (!1 === Object(_chunks_languageUtils_js__WEBPACK_IMPORTED_MODULE_10__["b"])(t)) throw new Error("Feature accessor must be a string");
            if (!0 === e.hasField(t)) e.setField(t, this.assign(r, n, e.field(t)));else {
              if ("=" !== n) throw new Error("Invalid Parameter");
              e.setField(t, this.assign(r, n, null));
            }
          }
        },
        member: function member(e, t) {
          if (null === e) {
            throw new Error(Object(_treeAnalysis_js__WEBPACK_IMPORTED_MODULE_15__["nodeErrorMessage"])({
              type: "MemberExpression",
              object: null,
              property: null,
              computed: null
            }, "RUNTIME", "NOTFOUND"));
          }

          if (e instanceof _views_2d_layers_features_support_FeatureSetReader_js__WEBPACK_IMPORTED_MODULE_23__["FeatureSetReader"]) {
            if (Object(_chunks_languageUtils_js__WEBPACK_IMPORTED_MODULE_10__["b"])(t)) return e.field(t);
            throw new Error(Object(_treeAnalysis_js__WEBPACK_IMPORTED_MODULE_15__["nodeErrorMessage"])({
              type: "MemberExpression",
              object: null,
              property: null,
              computed: null
            }, "RUNTIME", "INVALIDTYPE"));
          }

          if (e instanceof _Dictionary_js__WEBPACK_IMPORTED_MODULE_11__["default"] || e instanceof _Feature_js__WEBPACK_IMPORTED_MODULE_14__["default"]) {
            if (Object(_chunks_languageUtils_js__WEBPACK_IMPORTED_MODULE_10__["b"])(t)) return e.field(t);
            throw new Error(Object(_treeAnalysis_js__WEBPACK_IMPORTED_MODULE_15__["nodeErrorMessage"])({
              type: "MemberExpression",
              object: null,
              property: null,
              computed: null
            }, "RUNTIME", "INVALIDTYPE"));
          }

          if (e instanceof _geometry_Geometry_js__WEBPACK_IMPORTED_MODULE_2__["default"]) {
            if (Object(_chunks_languageUtils_js__WEBPACK_IMPORTED_MODULE_10__["b"])(t)) return function (e, t, n) {
              var r;

              switch (t = t.toLowerCase()) {
                case "hasz":
                  {
                    var _t70 = e.hasZ;
                    return void 0 !== _t70 && _t70;
                  }

                case "hasm":
                  {
                    var _t71 = e.hasM;
                    return void 0 !== _t71 && _t71;
                  }

                case "spatialreference":
                  {
                    var _t72 = e.spatialReference._arcadeCacheId;

                    if (void 0 === _t72) {
                      var _n28 = !0;

                      Object.freeze && Object.isFrozen(e.spatialReference) && (_n28 = !1), _n28 && (se++, e.spatialReference._arcadeCacheId = se, _t72 = se);
                    }

                    var _n27 = new _Dictionary_js__WEBPACK_IMPORTED_MODULE_11__["default"]({
                      wkt: e.spatialReference.wkt,
                      wkid: e.spatialReference.wkid
                    });

                    return void 0 !== _t72 && (_n27._arcadeCacheId = "SPREF" + _t72.toString()), _n27;
                  }
              }

              switch (e.type) {
                case "extent":
                  switch (t) {
                    case "xmin":
                    case "xmax":
                    case "ymin":
                    case "ymax":
                    case "zmin":
                    case "zmax":
                    case "mmin":
                    case "mmax":
                      {
                        var _n29 = e[t];
                        return void 0 !== _n29 ? _n29 : null;
                      }

                    case "type":
                      return "Extent";
                  }

                  break;

                case "polygon":
                  switch (t) {
                    case "rings":
                      return r = e.cache._arcadeCacheId, void 0 === r && (se++, r = se, e.cache._arcadeCacheId = r), new _ImmutablePathArray_js__WEBPACK_IMPORTED_MODULE_9__["default"](e.rings, e.spatialReference, !0 === e.hasZ, !0 === e.hasM, r);

                    case "type":
                      return "Polygon";
                  }

                  break;

                case "point":
                  switch (t) {
                    case "x":
                    case "y":
                    case "z":
                    case "m":
                      return void 0 !== e[t] ? e[t] : null;

                    case "type":
                      return "Point";
                  }

                  break;

                case "polyline":
                  switch (t) {
                    case "paths":
                      return r = e.cache._arcadeCacheId, void 0 === r && (se++, r = se, e.cache._arcadeCacheId = r), new _ImmutablePathArray_js__WEBPACK_IMPORTED_MODULE_9__["default"](e.paths, e.spatialReference, !0 === e.hasZ, !0 === e.hasM, r);

                    case "type":
                      return "Polyline";
                  }

                  break;

                case "multipoint":
                  switch (t) {
                    case "points":
                      return r = e.cache._arcadeCacheId, void 0 === r && (se++, r = se, e.cache._arcadeCacheId = r), new _ImmutablePointArray_js__WEBPACK_IMPORTED_MODULE_8__["default"](e.points, e.spatialReference, !0 === e.hasZ, !0 === e.hasM, r, 1);

                    case "type":
                      return "Multipoint";
                  }

              }

              throw new Error(Object(_treeAnalysis_js__WEBPACK_IMPORTED_MODULE_15__["nodeErrorMessage"])(n, "RUNTIME", "PROPERTYNOTFOUND"));
            }(e, t, "MemberExpression");
            throw new Error(Object(_treeAnalysis_js__WEBPACK_IMPORTED_MODULE_15__["nodeErrorMessage"])({
              type: "MemberExpression",
              object: null,
              property: null,
              computed: null
            }, "RUNTIME", "INVALIDTYPE"));
          }

          if (Object(_chunks_languageUtils_js__WEBPACK_IMPORTED_MODULE_10__["h"])(e)) {
            if (Object(_chunks_languageUtils_js__WEBPACK_IMPORTED_MODULE_10__["a"])(t) && isFinite(t) && Math.floor(t) === t) {
              if (t < 0 && (t = e.length + t), t >= e.length || t < 0) {
                throw new Error(Object(_treeAnalysis_js__WEBPACK_IMPORTED_MODULE_15__["nodeErrorMessage"])({
                  type: "MemberExpression",
                  object: null,
                  property: null,
                  computed: null
                }, "RUNTIME", "OUTOFBOUNDS"));
              }

              return e[t];
            }

            throw new Error(Object(_treeAnalysis_js__WEBPACK_IMPORTED_MODULE_15__["nodeErrorMessage"])({
              type: "MemberExpression",
              object: null,
              property: null,
              computed: null
            }, "RUNTIME", "INVALIDTYPE"));
          }

          if (Object(_chunks_languageUtils_js__WEBPACK_IMPORTED_MODULE_10__["b"])(e)) {
            if (Object(_chunks_languageUtils_js__WEBPACK_IMPORTED_MODULE_10__["a"])(t) && isFinite(t) && Math.floor(t) === t) {
              if (t < 0 && (t = e.length + t), t >= e.length || t < 0) {
                throw new Error(Object(_treeAnalysis_js__WEBPACK_IMPORTED_MODULE_15__["nodeErrorMessage"])({
                  type: "MemberExpression",
                  object: null,
                  property: null,
                  computed: null
                }, "RUNTIME", "OUTOFBOUNDS"));
              }

              return e[t];
            }

            throw new Error(Object(_treeAnalysis_js__WEBPACK_IMPORTED_MODULE_15__["nodeErrorMessage"])({
              type: "MemberExpression",
              object: null,
              property: null,
              computed: null
            }, "RUNTIME", "INVALIDTYPE"));
          }

          if (Object(_chunks_languageUtils_js__WEBPACK_IMPORTED_MODULE_10__["o"])(e)) {
            if (Object(_chunks_languageUtils_js__WEBPACK_IMPORTED_MODULE_10__["a"])(t) && isFinite(t) && Math.floor(t) === t) {
              if (t < 0 && (t = e.length() + t), t >= e.length() || t < 0) {
                throw new Error(Object(_treeAnalysis_js__WEBPACK_IMPORTED_MODULE_15__["nodeErrorMessage"])({
                  type: "MemberExpression",
                  object: null,
                  property: null,
                  computed: null
                }, "RUNTIME", "OUTOFBOUNDS"));
              }

              return e.get(t);
            }

            throw new Error(Object(_treeAnalysis_js__WEBPACK_IMPORTED_MODULE_15__["nodeErrorMessage"])({
              type: "MemberExpression",
              object: null,
              property: null,
              computed: null
            }, "RUNTIME", "INVALIDTYPE"));
          }

          throw new Error(Object(_treeAnalysis_js__WEBPACK_IMPORTED_MODULE_15__["nodeErrorMessage"])({
            type: "MemberExpression",
            object: null,
            property: null,
            computed: null
          }, "RUNTIME", "INVALIDTYPE"));
        },
        callfunc: function callfunc(e, t, n) {
          return e instanceof _chunks_languageUtils_js__WEBPACK_IMPORTED_MODULE_10__["N"] ? e.fn(n, t) : e instanceof _chunks_languageUtils_js__WEBPACK_IMPORTED_MODULE_10__["S"] ? e.fn.apply(this, t) : e.apply(this, t);
        }
      };

      function _e(e) {
        console.log(e);
      }

      function Ue(e) {
        var t = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : null;
        var n = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : !1;
        null === t && (t = {
          vars: {},
          customfunctions: {}
        });
        var r = {
          isAsync: n,
          globalScope: Ee(t.vars, n ? de : ie, t.customfunctions),
          localScope: null,
          mangleMap: {},
          console: _e,
          lrucache: t.lrucache,
          services: t.services,
          symbols: {
            symbolCounter: 0
          }
        };
        var o = oe(r, e.body[0].body);
        "" === o && (o = "lc.voidOperation; ");
        var l = "";
        l = n ? "var runtimeCtx=this.prepare(context, true);\n var lc = this.lc;  var lang = this.lang; var gscope=runtimeCtx.globalScope; \nreturn lang.__awaiter(this, void 0, void 0, function* () {\n\n function mainBody() {\n var lastStatement=lc.voidOperation;\n return lang.__awaiter(this, void 0, void 0, function* () {\n" + o + "\n return lastStatement; }); } \n return this.postProcess(yield mainBody()); }); " : "var runtimeCtx=this.prepare(context, false);\n var lc = this.lc;  var lang = this.lang; var gscope=runtimeCtx.globalScope; \n function mainBody() {\n var lastStatement=lc.voidOperation;\n " + o + "\n return lastStatement; } \n return this.postProcess(mainBody()); ";
        var s = {
          lc: _chunks_languageUtils_js__WEBPACK_IMPORTED_MODULE_10__["w"],
          lang: Ce,
          mangles: r.mangleMap,
          postProcess: function postProcess(e) {
            if (e instanceof _chunks_languageUtils_js__WEBPACK_IMPORTED_MODULE_10__["R"] && (e = e.value), e instanceof _chunks_languageUtils_js__WEBPACK_IMPORTED_MODULE_10__["I"] && (e = e.value), e === _chunks_languageUtils_js__WEBPACK_IMPORTED_MODULE_10__["v"] && (e = null), e === _chunks_languageUtils_js__WEBPACK_IMPORTED_MODULE_10__["x"]) throw new Error("Cannot return BREAK");
            if (e === _chunks_languageUtils_js__WEBPACK_IMPORTED_MODULE_10__["y"]) throw new Error("Cannot return CONTINUE");
            if (Object(_chunks_languageUtils_js__WEBPACK_IMPORTED_MODULE_10__["q"])(e)) throw new Error("Cannot return FUNCTION");
            return e;
          },
          prepare: function prepare(e, t) {
            var n = e.spatialReference;
            null == n && (n = new _geometry_SpatialReference_js__WEBPACK_IMPORTED_MODULE_1__["default"]({
              wkid: 102100
            }));

            var r = function (e, t, n) {
              var r = n ? new we() : new Se();
              e || (e = {}), t || (t = {});
              var o = new _Dictionary_js__WEBPACK_IMPORTED_MODULE_11__["default"]({
                newline: "\n",
                tab: "\t",
                singlequote: "'",
                doublequote: '"',
                forwardslash: "/",
                backwardslash: "\\"
              });
              o.immutable = !1, r._SymbolsMap = {
                textformatting: 1,
                infinity: 1,
                pi: 1
              }, r.textformatting = o, r.infinity = Number.POSITIVE_INFINITY, r.pi = Math.PI;

              for (var _e65 in t) {
                r[_e65] = t[_e65], r._SymbolsMap[_e65] = 1;
              }

              for (var _t73 in e) {
                r._SymbolsMap[_t73] = 1, e[_t73] && "esri.Graphic" === e[_t73].declaredClass ? r[_t73] = _Feature_js__WEBPACK_IMPORTED_MODULE_14__["default"].createFromGraphic(e[_t73]) : r[_t73] = e[_t73];
              }

              return r;
            }(e.vars, e.customfunctions, t);

            return {
              localStack: [],
              isAsync: t,
              mangleMap: this.mangles,
              spatialReference: n,
              globalScope: r,
              abortSignal: void 0 === e.abortSignal || null === e.abortSignal ? {
                aborted: !1
              } : e.abortSignal,
              localScope: null,
              services: e.services,
              console: e.console ? e.console : _e,
              lrucache: e.lrucache,
              symbols: {
                symbolCounter: 0
              },
              depthCounter: 1
            };
          }
        };
        return new Function("context", "spatialReference", l).bind(s);
      }

      function Ae() {
        return __webpack_require__.e(
        /*! import() | functions-geomasync-js */
        "default~arcade-arcadeAsyncRuntime-js~functions-geomasync-js").then(__webpack_require__.bind(null,
        /*! ./functions/geomasync.js */
        "NOfn")).then(function (e) {
          return Ne([e], "async"), !0;
        });
      }
      /***/

    },

    /***/
    "db86":
    /*!********************************************************!*\
      !*** ./node_modules/@arcgis/core/arcade/Attachment.js ***!
      \********************************************************/

    /*! exports provided: default */

    /***/
    function db86(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony import */


      var _Dictionary_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ./Dictionary.js */
      "D5C5");
      /*
      All material copyright ESRI, All Rights Reserved, unless otherwise specified.
      See https://js.arcgis.com/4.18/esri/copyright.txt for details.
      */

      /* harmony default export */


      __webpack_exports__["default"] = /*#__PURE__*/function (_Dictionary_js__WEBPA2) {
        _inherits(_class2, _Dictionary_js__WEBPA2);

        var _super3 = _createSuper(_class2);

        function _class2(t, e, i, s, l) {
          var _this3;

          _classCallCheck(this, _class2);

          _this3 = _super3.call(this), _this3.attachmentUrl = l, _this3.immutable = !1, _this3.setField("id", t), _this3.setField("name", e), _this3.setField("contenttype", i), _this3.setField("size", s), _this3.immutable = !0;
          return _this3;
        }

        return _class2;
      }(_Dictionary_js__WEBPACK_IMPORTED_MODULE_0__["default"]);
      /***/

    },

    /***/
    "eevo":
    /*!*********************************************************!*\
      !*** ./node_modules/@arcgis/core/arcade/lib/scanner.js ***!
      \*********************************************************/

    /*! exports provided: Scanner */

    /***/
    function eevo(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "Scanner", function () {
        return r;
      });
      /* harmony import */


      var _assert_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ./assert.js */
      "F0hv");
      /* harmony import */


      var _messages_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./messages.js */
      "/kpe");
      /* harmony import */


      var _character_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./character.js */
      "Xu93");
      /*
      All material copyright ESRI, All Rights Reserved, unless otherwise specified.
      See https://js.arcgis.com/4.18/esri/copyright.txt for details.
      */


      function s(e) {
        return "0123456789abcdef".indexOf(e.toLowerCase());
      }

      function n(e) {
        return "01234567".indexOf(e);
      }

      var r = /*#__PURE__*/function () {
        function r(e, t) {
          _classCallCheck(this, r);

          this.source = e, this.errorHandler = t, this.trackComment = !1, this.isModule = !1, this.length = e.length, this.index = 0, this.lineNumber = e.length > 0 ? 1 : 0, this.lineStart = 0, this.curlyStack = [];
        }

        _createClass(r, [{
          key: "saveState",
          value: function saveState() {
            return {
              index: this.index,
              lineNumber: this.lineNumber,
              lineStart: this.lineStart,
              curlyStack: this.curlyStack.slice()
            };
          }
        }, {
          key: "restoreState",
          value: function restoreState(e) {
            this.index = e.index, this.lineNumber = e.lineNumber, this.lineStart = e.lineStart, this.curlyStack = e.curlyStack;
          }
        }, {
          key: "eof",
          value: function eof() {
            return this.index >= this.length;
          }
        }, {
          key: "throwUnexpectedToken",
          value: function throwUnexpectedToken() {
            var e = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : _messages_js__WEBPACK_IMPORTED_MODULE_1__["Messages"].UnexpectedTokenIllegal;
            return this.errorHandler.throwError(this.index, this.lineNumber, this.index - this.lineStart + 1, e);
          }
        }, {
          key: "tolerateUnexpectedToken",
          value: function tolerateUnexpectedToken() {
            var e = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : _messages_js__WEBPACK_IMPORTED_MODULE_1__["Messages"].UnexpectedTokenIllegal;
            this.errorHandler.tolerateError(this.index, this.lineNumber, this.index - this.lineStart + 1, e);
          }
        }, {
          key: "skipSingleLineComment",
          value: function skipSingleLineComment(e) {
            var t,
                s,
                n = [];

            for (this.trackComment && (n = [], t = this.index - e, s = {
              start: {
                line: this.lineNumber,
                column: this.index - this.lineStart - e
              },
              end: {}
            }); !this.eof();) {
              var _r53 = this.source.charCodeAt(this.index);

              if (++this.index, _character_js__WEBPACK_IMPORTED_MODULE_2__["Character"].isLineTerminator(_r53)) {
                if (this.trackComment) {
                  s.end = {
                    line: this.lineNumber,
                    column: this.index - this.lineStart - 1
                  };
                  var i = {
                    multiLine: !1,
                    slice: [t + e, this.index - 1],
                    range: [t, this.index - 1],
                    loc: s
                  };
                  n.push(i);
                }

                return 13 === _r53 && 10 === this.source.charCodeAt(this.index) && ++this.index, ++this.lineNumber, this.lineStart = this.index, n;
              }
            }

            if (this.trackComment) {
              s.end = {
                line: this.lineNumber,
                column: this.index - this.lineStart
              };
              var _i11 = {
                multiLine: !1,
                slice: [t + e, this.index],
                range: [t, this.index],
                loc: s
              };
              n.push(_i11);
            }

            return n;
          }
        }, {
          key: "skipMultiLineComment",
          value: function skipMultiLineComment() {
            var e,
                t,
                s = [];

            for (this.trackComment && (s = [], e = this.index - 2, t = {
              start: {
                line: this.lineNumber,
                column: this.index - this.lineStart - 2
              },
              end: {}
            }); !this.eof();) {
              var _n30 = this.source.charCodeAt(this.index);

              if (_character_js__WEBPACK_IMPORTED_MODULE_2__["Character"].isLineTerminator(_n30)) 13 === _n30 && 10 === this.source.charCodeAt(this.index + 1) && ++this.index, ++this.lineNumber, ++this.index, this.lineStart = this.index;else if (42 === _n30) {
                if (47 === this.source.charCodeAt(this.index + 1)) {
                  if (this.index += 2, this.trackComment) {
                    t.end = {
                      line: this.lineNumber,
                      column: this.index - this.lineStart
                    };
                    var i = {
                      multiLine: !0,
                      slice: [e + 2, this.index - 2],
                      range: [e, this.index],
                      loc: t
                    };
                    s.push(i);
                  }

                  return s;
                }

                ++this.index;
              } else ++this.index;
            }

            if (this.trackComment) {
              t.end = {
                line: this.lineNumber,
                column: this.index - this.lineStart
              };
              var _i12 = {
                multiLine: !0,
                slice: [e + 2, this.index],
                range: [e, this.index],
                loc: t
              };
              s.push(_i12);
            }

            return this.tolerateUnexpectedToken(), s;
          }
        }, {
          key: "scanComments",
          value: function scanComments() {
            var e;
            this.trackComment && (e = []);
            var t = 0 === this.index;

            for (; !this.eof();) {
              var _s14 = this.source.charCodeAt(this.index);

              if (_character_js__WEBPACK_IMPORTED_MODULE_2__["Character"].isWhiteSpace(_s14)) ++this.index;else if (_character_js__WEBPACK_IMPORTED_MODULE_2__["Character"].isLineTerminator(_s14)) ++this.index, 13 === _s14 && 10 === this.source.charCodeAt(this.index) && ++this.index, ++this.lineNumber, this.lineStart = this.index, t = !0;else if (47 === _s14) {
                if (_s14 = this.source.charCodeAt(this.index + 1), 47 === _s14) {
                  this.index += 2;
                  var i = this.skipSingleLineComment(2);
                  this.trackComment && (e = e.concat(i)), t = !0;
                } else {
                  if (42 !== _s14) break;
                  {
                    this.index += 2;

                    var _t74 = this.skipMultiLineComment();

                    this.trackComment && (e = e.concat(_t74));
                  }
                }
              } else if (t && 45 === _s14) {
                if (45 !== this.source.charCodeAt(this.index + 1) || 62 !== this.source.charCodeAt(this.index + 2)) break;
                {
                  this.index += 3;

                  var _t75 = this.skipSingleLineComment(3);

                  this.trackComment && (e = e.concat(_t75));
                }
              } else {
                if (60 !== _s14 || this.isModule) break;
                if ("!--" !== this.source.slice(this.index + 1, this.index + 4)) break;
                {
                  this.index += 4;

                  var _t76 = this.skipSingleLineComment(4);

                  this.trackComment && (e = e.concat(_t76));
                }
              }
            }

            return e;
          }
        }, {
          key: "isFutureReservedWord",
          value: function isFutureReservedWord(e) {
            return !1;
          }
        }, {
          key: "isStrictModeReservedWord",
          value: function isStrictModeReservedWord(e) {
            return !1;
          }
        }, {
          key: "isRestrictedWord",
          value: function isRestrictedWord(e) {
            return !1;
          }
        }, {
          key: "isKeyword",
          value: function isKeyword(e) {
            switch ((e = e.toLowerCase()).length) {
              case 2:
                return "if" === e || "in" === e;

              case 3:
                return "var" === e || "for" === e;

              case 4:
                return "else" === e;

              case 5:
                return "break" === e;

              case 6:
                return "return" === e;

              case 8:
                return "function" === e || "continue" === e;

              default:
                return !1;
            }
          }
        }, {
          key: "codePointAt",
          value: function codePointAt(e) {
            var t = this.source.charCodeAt(e);

            if (t >= 55296 && t <= 56319) {
              var i = this.source.charCodeAt(e + 1);

              if (i >= 56320 && i <= 57343) {
                t = 1024 * (t - 55296) + i - 56320 + 65536;
              }
            }

            return t;
          }
        }, {
          key: "scanHexEscape",
          value: function scanHexEscape(e) {
            var t = "u" === e ? 4 : 2;
            var n = 0;

            for (var _e66 = 0; _e66 < t; ++_e66) {
              if (this.eof() || !_character_js__WEBPACK_IMPORTED_MODULE_2__["Character"].isHexDigit(this.source.charCodeAt(this.index))) return null;
              n = 16 * n + s(this.source[this.index++]);
            }

            return String.fromCharCode(n);
          }
        }, {
          key: "scanUnicodeCodePointEscape",
          value: function scanUnicodeCodePointEscape() {
            var e = this.source[this.index],
                t = 0;

            for ("}" === e && this.throwUnexpectedToken(); !this.eof() && (e = this.source[this.index++], _character_js__WEBPACK_IMPORTED_MODULE_2__["Character"].isHexDigit(e.charCodeAt(0)));) {
              t = 16 * t + s(e);
            }

            return (t > 1114111 || "}" !== e) && this.throwUnexpectedToken(), _character_js__WEBPACK_IMPORTED_MODULE_2__["Character"].fromCodePoint(t);
          }
        }, {
          key: "getIdentifier",
          value: function getIdentifier() {
            var e = this.index++;

            for (; !this.eof();) {
              var t = this.source.charCodeAt(this.index);
              if (92 === t) return this.index = e, this.getComplexIdentifier();
              if (t >= 55296 && t < 57343) return this.index = e, this.getComplexIdentifier();
              if (!_character_js__WEBPACK_IMPORTED_MODULE_2__["Character"].isIdentifierPart(t)) break;
              ++this.index;
            }

            return this.source.slice(e, this.index);
          }
        }, {
          key: "getComplexIdentifier",
          value: function getComplexIdentifier() {
            var e,
                t = this.codePointAt(this.index),
                s = _character_js__WEBPACK_IMPORTED_MODULE_2__["Character"].fromCodePoint(t);

            for (this.index += s.length, 92 === t && (117 !== this.source.charCodeAt(this.index) && this.throwUnexpectedToken(), ++this.index, "{" === this.source[this.index] ? (++this.index, e = this.scanUnicodeCodePointEscape()) : (e = this.scanHexEscape("u"), null !== e && "\\" !== e && _character_js__WEBPACK_IMPORTED_MODULE_2__["Character"].isIdentifierStart(e.charCodeAt(0)) || this.throwUnexpectedToken()), s = e); !this.eof() && (t = this.codePointAt(this.index), _character_js__WEBPACK_IMPORTED_MODULE_2__["Character"].isIdentifierPart(t));) {
              e = _character_js__WEBPACK_IMPORTED_MODULE_2__["Character"].fromCodePoint(t), s += e, this.index += e.length, 92 === t && (s = s.substr(0, s.length - 1), 117 !== this.source.charCodeAt(this.index) && this.throwUnexpectedToken(), ++this.index, "{" === this.source[this.index] ? (++this.index, e = this.scanUnicodeCodePointEscape()) : (e = this.scanHexEscape("u"), null !== e && "\\" !== e && _character_js__WEBPACK_IMPORTED_MODULE_2__["Character"].isIdentifierPart(e.charCodeAt(0)) || this.throwUnexpectedToken()), s += e);
            }

            return s;
          }
        }, {
          key: "octalToDecimal",
          value: function octalToDecimal(e) {
            var t = "0" !== e,
                s = n(e);
            return !this.eof() && _character_js__WEBPACK_IMPORTED_MODULE_2__["Character"].isOctalDigit(this.source.charCodeAt(this.index)) && (t = !0, s = 8 * s + n(this.source[this.index++]), "0123".indexOf(e) >= 0 && !this.eof() && _character_js__WEBPACK_IMPORTED_MODULE_2__["Character"].isOctalDigit(this.source.charCodeAt(this.index)) && (s = 8 * s + n(this.source[this.index++]))), {
              code: s,
              octal: t
            };
          }
        }, {
          key: "scanIdentifier",
          value: function scanIdentifier() {
            var e;
            var i = this.index,
                s = 92 === this.source.charCodeAt(i) ? this.getComplexIdentifier() : this.getIdentifier();

            if (e = 1 === s.length ? 3 : this.isKeyword(s) ? 4 : "null" === s.toLowerCase() ? 5 : "true" === s.toLowerCase() || "false" === s.toLowerCase() ? 1 : 3, 3 !== e && i + s.length !== this.index) {
              var _e67 = this.index;
              this.index = i, this.tolerateUnexpectedToken(_messages_js__WEBPACK_IMPORTED_MODULE_1__["Messages"].InvalidEscapedReservedWord), this.index = _e67;
            }

            return {
              type: e,
              value: s,
              lineNumber: this.lineNumber,
              lineStart: this.lineStart,
              start: i,
              end: this.index
            };
          }
        }, {
          key: "scanPunctuator",
          value: function scanPunctuator() {
            var e = this.index;
            var t = this.source[this.index];

            switch (t) {
              case "(":
              case "{":
                "{" === t && this.curlyStack.push("{"), ++this.index;
                break;

              case ".":
                ++this.index, "." === this.source[this.index] && "." === this.source[this.index + 1] && (this.index += 2, t = "...");
                break;

              case "}":
                ++this.index, this.curlyStack.pop();
                break;

              case ")":
              case ";":
              case ",":
              case "[":
              case "]":
              case ":":
              case "?":
              case "~":
                ++this.index;
                break;

              default:
                t = this.source.substr(this.index, 4), ">>>=" === t ? this.index += 4 : (t = t.substr(0, 3), "===" === t || "!==" === t || ">>>" === t || "<<=" === t || ">>=" === t || "**=" === t ? this.index += 3 : (t = t.substr(0, 2), "&&" === t || "||" === t || "==" === t || "!=" === t || "+=" === t || "-=" === t || "*=" === t || "/=" === t || "++" === t || "--" === t || "<<" === t || ">>" === t || "&=" === t || "|=" === t || "^=" === t || "%=" === t || "<=" === t || ">=" === t || "=>" === t || "**" === t ? this.index += 2 : (t = this.source[this.index], "<>=!+-*%&|^/".indexOf(t) >= 0 && ++this.index)));
            }

            return this.index === e && this.throwUnexpectedToken(), {
              type: 7,
              value: t,
              lineNumber: this.lineNumber,
              lineStart: this.lineStart,
              start: e,
              end: this.index
            };
          }
        }, {
          key: "scanHexLiteral",
          value: function scanHexLiteral(e) {
            var t = "";

            for (; !this.eof() && _character_js__WEBPACK_IMPORTED_MODULE_2__["Character"].isHexDigit(this.source.charCodeAt(this.index));) {
              t += this.source[this.index++];
            }

            return 0 === t.length && this.throwUnexpectedToken(), _character_js__WEBPACK_IMPORTED_MODULE_2__["Character"].isIdentifierStart(this.source.charCodeAt(this.index)) && this.throwUnexpectedToken(), {
              type: 6,
              value: parseInt("0x" + t, 16),
              lineNumber: this.lineNumber,
              lineStart: this.lineStart,
              start: e,
              end: this.index
            };
          }
        }, {
          key: "scanBinaryLiteral",
          value: function scanBinaryLiteral(e) {
            var t,
                s = "";

            for (; !this.eof() && (t = this.source[this.index], "0" === t || "1" === t);) {
              s += this.source[this.index++];
            }

            return 0 === s.length && this.throwUnexpectedToken(), this.eof() || (t = this.source.charCodeAt(this.index), (_character_js__WEBPACK_IMPORTED_MODULE_2__["Character"].isIdentifierStart(t) || _character_js__WEBPACK_IMPORTED_MODULE_2__["Character"].isDecimalDigit(t)) && this.throwUnexpectedToken()), {
              type: 6,
              value: parseInt(s, 2),
              lineNumber: this.lineNumber,
              lineStart: this.lineStart,
              start: e,
              end: this.index
            };
          }
        }, {
          key: "scanOctalLiteral",
          value: function scanOctalLiteral(e, t) {
            var s = "",
                n = !1;

            for (_character_js__WEBPACK_IMPORTED_MODULE_2__["Character"].isOctalDigit(e.charCodeAt(0)) ? (n = !0, s = "0" + this.source[this.index++]) : ++this.index; !this.eof() && _character_js__WEBPACK_IMPORTED_MODULE_2__["Character"].isOctalDigit(this.source.charCodeAt(this.index));) {
              s += this.source[this.index++];
            }

            return n || 0 !== s.length || this.throwUnexpectedToken(), (_character_js__WEBPACK_IMPORTED_MODULE_2__["Character"].isIdentifierStart(this.source.charCodeAt(this.index)) || _character_js__WEBPACK_IMPORTED_MODULE_2__["Character"].isDecimalDigit(this.source.charCodeAt(this.index))) && this.throwUnexpectedToken(), {
              type: 6,
              value: parseInt(s, 8),
              octal: n,
              lineNumber: this.lineNumber,
              lineStart: this.lineStart,
              start: t,
              end: this.index
            };
          }
        }, {
          key: "scanNumericLiteral",
          value: function scanNumericLiteral() {
            var t = this.index;
            var s = this.source[t];
            Object(_assert_js__WEBPACK_IMPORTED_MODULE_0__["assert"])(_character_js__WEBPACK_IMPORTED_MODULE_2__["Character"].isDecimalDigit(s.charCodeAt(0)) || "." === s, "Numeric literal must start with a decimal digit or a decimal point");
            var n = "";

            if ("." !== s) {
              if (n = this.source[this.index++], s = this.source[this.index], "0" === n) {
                if ("x" === s || "X" === s) return ++this.index, this.scanHexLiteral(t);
                if ("b" === s || "B" === s) return ++this.index, this.scanBinaryLiteral(t);
                if ("o" === s || "O" === s) return this.scanOctalLiteral(s, t);
              }

              for (; _character_js__WEBPACK_IMPORTED_MODULE_2__["Character"].isDecimalDigit(this.source.charCodeAt(this.index));) {
                n += this.source[this.index++];
              }

              s = this.source[this.index];
            }

            if ("." === s) {
              for (n += this.source[this.index++]; _character_js__WEBPACK_IMPORTED_MODULE_2__["Character"].isDecimalDigit(this.source.charCodeAt(this.index));) {
                n += this.source[this.index++];
              }

              s = this.source[this.index];
            }

            if ("e" === s || "E" === s) if (n += this.source[this.index++], s = this.source[this.index], "+" !== s && "-" !== s || (n += this.source[this.index++]), _character_js__WEBPACK_IMPORTED_MODULE_2__["Character"].isDecimalDigit(this.source.charCodeAt(this.index))) for (; _character_js__WEBPACK_IMPORTED_MODULE_2__["Character"].isDecimalDigit(this.source.charCodeAt(this.index));) {
              n += this.source[this.index++];
            } else this.throwUnexpectedToken();
            return _character_js__WEBPACK_IMPORTED_MODULE_2__["Character"].isIdentifierStart(this.source.charCodeAt(this.index)) && this.throwUnexpectedToken(), {
              type: 6,
              value: parseFloat(n),
              lineNumber: this.lineNumber,
              lineStart: this.lineStart,
              start: t,
              end: this.index
            };
          }
        }, {
          key: "scanStringLiteral",
          value: function scanStringLiteral() {
            var s = this.index;
            var n = this.source[s];
            Object(_assert_js__WEBPACK_IMPORTED_MODULE_0__["assert"])("'" === n || '"' === n, "String literal must starts with a quote"), ++this.index;

            var _r50 = !1,
                h = "";

            for (; !this.eof();) {
              var e = this.source[this.index++];

              if (e === n) {
                n = "";
                break;
              }

              if ("\\" === e) {
                if (e = this.source[this.index++], e && _character_js__WEBPACK_IMPORTED_MODULE_2__["Character"].isLineTerminator(e.charCodeAt(0))) ++this.lineNumber, "\r" === e && "\n" === this.source[this.index] && ++this.index, this.lineStart = this.index;else switch (e) {
                  case "u":
                    if ("{" === this.source[this.index]) ++this.index, h += this.scanUnicodeCodePointEscape();else {
                      var t = this.scanHexEscape(e);
                      null === t && this.throwUnexpectedToken(), h += t;
                    }
                    break;

                  case "x":
                    {
                      var i = this.scanHexEscape(e);
                      null === i && this.throwUnexpectedToken(_messages_js__WEBPACK_IMPORTED_MODULE_1__["Messages"].InvalidHexEscapeSequence), h += i;
                      break;
                    }

                  case "n":
                    h += "\n";
                    break;

                  case "r":
                    h += "\r";
                    break;

                  case "t":
                    h += "\t";
                    break;

                  case "b":
                    h += "\b";
                    break;

                  case "f":
                    h += "\f";
                    break;

                  case "v":
                    h += "\v";
                    break;

                  case "8":
                  case "9":
                    h += e, this.tolerateUnexpectedToken();
                    break;

                  default:
                    if (e && _character_js__WEBPACK_IMPORTED_MODULE_2__["Character"].isOctalDigit(e.charCodeAt(0))) {
                      var _t77 = this.octalToDecimal(e);

                      _r50 = _t77.octal || _r50, h += String.fromCharCode(_t77.code);
                    } else h += e;

                }
              } else {
                if (_character_js__WEBPACK_IMPORTED_MODULE_2__["Character"].isLineTerminator(e.charCodeAt(0))) break;
                h += e;
              }
            }

            return "" !== n && (this.index = s, this.throwUnexpectedToken()), {
              type: 8,
              value: h,
              octal: _r50,
              lineNumber: this.lineNumber,
              lineStart: this.lineStart,
              start: s,
              end: this.index
            };
          }
        }, {
          key: "scanTemplate",
          value: function scanTemplate() {
            var e = "",
                s = !1;

            var n = this.index,
                _r51 = "`" === this.source[n];

            var h = !1,
                c = 2;

            for (++this.index; !this.eof();) {
              var _n31 = this.source[this.index++];

              if ("`" === _n31) {
                c = 1, h = !0, s = !0;
                break;
              }

              if ("$" === _n31) {
                if ("{" === this.source[this.index]) {
                  this.curlyStack.push("${"), ++this.index, s = !0;
                  break;
                }

                e += _n31;
              } else if ("\\" === _n31) {
                if (_n31 = this.source[this.index++], _character_js__WEBPACK_IMPORTED_MODULE_2__["Character"].isLineTerminator(_n31.charCodeAt(0))) ++this.lineNumber, "\r" === _n31 && "\n" === this.source[this.index] && ++this.index, this.lineStart = this.index;else switch (_n31) {
                  case "n":
                    e += "\n";
                    break;

                  case "r":
                    e += "\r";
                    break;

                  case "t":
                    e += "\t";
                    break;

                  case "u":
                    if ("{" === this.source[this.index]) ++this.index, e += this.scanUnicodeCodePointEscape();else {
                      var t = this.index,
                          i = this.scanHexEscape(_n31);
                      null !== i ? e += i : (this.index = t, e += _n31);
                    }
                    break;

                  case "x":
                    {
                      var _i13 = this.scanHexEscape(_n31);

                      null === _i13 && this.throwUnexpectedToken(_messages_js__WEBPACK_IMPORTED_MODULE_1__["Messages"].InvalidHexEscapeSequence), e += _i13;
                      break;
                    }

                  case "b":
                    e += "\b";
                    break;

                  case "f":
                    e += "\f";
                    break;

                  case "v":
                    e += "\v";
                    break;

                  default:
                    "0" === _n31 ? (_character_js__WEBPACK_IMPORTED_MODULE_2__["Character"].isDecimalDigit(this.source.charCodeAt(this.index)) && this.throwUnexpectedToken(_messages_js__WEBPACK_IMPORTED_MODULE_1__["Messages"].TemplateOctalLiteral), e += "\0") : _character_js__WEBPACK_IMPORTED_MODULE_2__["Character"].isOctalDigit(_n31.charCodeAt(0)) ? this.throwUnexpectedToken(_messages_js__WEBPACK_IMPORTED_MODULE_1__["Messages"].TemplateOctalLiteral) : e += _n31;
                }
              } else _character_js__WEBPACK_IMPORTED_MODULE_2__["Character"].isLineTerminator(_n31.charCodeAt(0)) ? (++this.lineNumber, "\r" === _n31 && "\n" === this.source[this.index] && ++this.index, this.lineStart = this.index, e += "\n") : e += _n31;
            }

            return s || this.throwUnexpectedToken(), _r51 || this.curlyStack.pop(), {
              type: 10,
              value: this.source.slice(n + 1, this.index - c),
              cooked: e,
              head: _r51,
              tail: h,
              lineNumber: this.lineNumber,
              lineStart: this.lineStart,
              start: n,
              end: this.index
            };
          }
        }, {
          key: "testRegExp",
          value: function testRegExp(e, i) {
            var _this4 = this;

            var s = e;
            i.indexOf("u") >= 0 && (s = s.replace(/\\u\{([0-9a-fA-F]+)\}|\\u([a-fA-F0-9]{4})/g, function (e, i, s) {
              var n = parseInt(i || s, 16);
              return n > 1114111 && _this4.throwUnexpectedToken(_messages_js__WEBPACK_IMPORTED_MODULE_1__["Messages"].InvalidRegExp), n <= 65535 ? String.fromCharCode(n) : "￿";
            }).replace(/[\uD800-\uDBFF][\uDC00-\uDFFF]/g, "￿"));

            try {
              RegExp(s);
            } catch (e) {
              this.throwUnexpectedToken(_messages_js__WEBPACK_IMPORTED_MODULE_1__["Messages"].InvalidRegExp);
            }

            try {
              return new RegExp(e, i);
            } catch (e) {
              return null;
            }
          }
        }, {
          key: "scanRegExpBody",
          value: function scanRegExpBody() {
            var s = this.source[this.index];
            Object(_assert_js__WEBPACK_IMPORTED_MODULE_0__["assert"])("/" === s, "Regular expression literal must start with a slash");

            var n = this.source[this.index++],
                _r52 = !1,
                h = !1;

            for (; !this.eof();) {
              if (s = this.source[this.index++], n += s, "\\" === s) s = this.source[this.index++], _character_js__WEBPACK_IMPORTED_MODULE_2__["Character"].isLineTerminator(s.charCodeAt(0)) && this.throwUnexpectedToken(_messages_js__WEBPACK_IMPORTED_MODULE_1__["Messages"].UnterminatedRegExp), n += s;else if (_character_js__WEBPACK_IMPORTED_MODULE_2__["Character"].isLineTerminator(s.charCodeAt(0))) this.throwUnexpectedToken(_messages_js__WEBPACK_IMPORTED_MODULE_1__["Messages"].UnterminatedRegExp);else if (_r52) "]" === s && (_r52 = !1);else {
                if ("/" === s) {
                  h = !0;
                  break;
                }

                "[" === s && (_r52 = !0);
              }
            }

            return h || this.throwUnexpectedToken(_messages_js__WEBPACK_IMPORTED_MODULE_1__["Messages"].UnterminatedRegExp), n.substr(1, n.length - 2);
          }
        }, {
          key: "scanRegExpFlags",
          value: function scanRegExpFlags() {
            var e = "",
                t = "";

            for (; !this.eof();) {
              var _s15 = this.source[this.index];
              if (!_character_js__WEBPACK_IMPORTED_MODULE_2__["Character"].isIdentifierPart(_s15.charCodeAt(0))) break;
              if (++this.index, "\\" !== _s15 || this.eof()) t += _s15, e += _s15;else if (_s15 = this.source[this.index], "u" === _s15) {
                ++this.index;
                var i = this.index;

                var _s16 = this.scanHexEscape("u");

                if (null !== _s16) for (t += _s16, e += "\\u"; i < this.index; ++i) {
                  e += this.source[i];
                } else this.index = i, t += "u", e += "\\u";
                this.tolerateUnexpectedToken();
              } else e += "\\", this.tolerateUnexpectedToken();
            }

            return t;
          }
        }, {
          key: "scanRegExp",
          value: function scanRegExp() {
            var e = this.index,
                t = this.scanRegExpBody(),
                i = this.scanRegExpFlags();
            return {
              type: 9,
              value: "",
              pattern: t,
              flags: i,
              regex: this.testRegExp(t, i),
              lineNumber: this.lineNumber,
              lineStart: this.lineStart,
              start: e,
              end: this.index
            };
          }
        }, {
          key: "lex",
          value: function lex() {
            if (this.eof()) return {
              type: 2,
              value: "",
              lineNumber: this.lineNumber,
              lineStart: this.lineStart,
              start: this.index,
              end: this.index
            };
            var e = this.source.charCodeAt(this.index);
            return _character_js__WEBPACK_IMPORTED_MODULE_2__["Character"].isIdentifierStart(e) ? this.scanIdentifier() : 40 === e || 41 === e || 59 === e ? this.scanPunctuator() : 39 === e || 34 === e ? this.scanStringLiteral() : 46 === e ? _character_js__WEBPACK_IMPORTED_MODULE_2__["Character"].isDecimalDigit(this.source.charCodeAt(this.index + 1)) ? this.scanNumericLiteral() : this.scanPunctuator() : _character_js__WEBPACK_IMPORTED_MODULE_2__["Character"].isDecimalDigit(e) ? this.scanNumericLiteral() : 96 === e || 125 === e && "${" === this.curlyStack[this.curlyStack.length - 1] ? this.scanTemplate() : e >= 55296 && e < 57343 && _character_js__WEBPACK_IMPORTED_MODULE_2__["Character"].isIdentifierStart(this.codePointAt(this.index)) ? this.scanIdentifier() : this.scanPunctuator();
          }
        }]);

        return r;
      }();
      /***/

    },

    /***/
    "ema0":
    /*!********************************************************!*\
      !*** ./node_modules/@arcgis/core/arcade/lib/parser.js ***!
      \********************************************************/

    /*! exports provided: Parser */

    /***/
    function ema0(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "Parser", function () {
        return O;
      });
      /* harmony import */


      var _syntax_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ./syntax.js */
      "mcjs");
      /* harmony import */


      var _assert_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./assert.js */
      "F0hv");
      /* harmony import */


      var _error_handler_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./error-handler.js */
      "Irdf");
      /* harmony import */


      var _messages_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./messages.js */
      "/kpe");
      /* harmony import */


      var _nodes_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ./nodes.js */
      "p1a8");
      /* harmony import */


      var _scanner_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ./scanner.js */
      "eevo");
      /* harmony import */


      var _token_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ./token.js */
      "Fany");
      /*
      All material copyright ESRI, All Rights Reserved, unless otherwise specified.
      See https://js.arcgis.com/4.18/esri/copyright.txt for details.
      */


      var O = /*#__PURE__*/function () {
        function O(t) {
          var e = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
          var i = arguments.length > 2 ? arguments[2] : undefined;

          _classCallCheck(this, O);

          this.config = {
            range: "boolean" == typeof e.range && e.range,
            loc: "boolean" == typeof e.loc && e.loc,
            source: null,
            tokens: "boolean" == typeof e.tokens && e.tokens,
            comment: "boolean" == typeof e.comment && e.comment,
            tolerant: "boolean" == typeof e.tolerant && e.tolerant
          }, this.config.loc && e.source && null !== e.source && (this.config.source = String(e.source)), this.delegate = i, this.errorHandler = new _error_handler_js__WEBPACK_IMPORTED_MODULE_2__["ErrorHandler"](), this.errorHandler.tolerant = this.config.tolerant, this.scanner = new _scanner_js__WEBPACK_IMPORTED_MODULE_5__["Scanner"](t, this.errorHandler), this.scanner.trackComment = this.config.comment, this.operatorPrecedence = {
            ")": 0,
            ";": 0,
            ",": 0,
            "=": 0,
            "]": 0,
            "||": 1,
            "&&": 2,
            "|": 3,
            "^": 4,
            "&": 5,
            "==": 6,
            "!=": 6,
            "===": 6,
            "!==": 6,
            "<": 7,
            ">": 7,
            "<=": 7,
            ">=": 7,
            "<<": 8,
            ">>": 8,
            ">>>": 8,
            "+": 9,
            "-": 9,
            "*": 11,
            "/": 11,
            "%": 11
          }, this.lookahead = {
            type: 2,
            value: "",
            lineNumber: this.scanner.lineNumber,
            lineStart: 0,
            start: 0,
            end: 0
          }, this.hasLineTerminator = !1, this.context = {
            isModule: !1,
            allowIn: !0,
            allowStrictDirective: !0,
            firstCoverInitializedNameError: null,
            isAssignmentTarget: !1,
            isBindingElement: !1,
            inFunctionBody: !1,
            inIteration: !1,
            inSwitch: !1,
            labelSet: {},
            strict: !1
          }, this.tokens = [], this.startMarker = {
            index: 0,
            line: this.scanner.lineNumber,
            column: 0
          }, this.lastMarker = {
            index: 0,
            line: this.scanner.lineNumber,
            column: 0
          }, this.nextToken(), this.lastMarker = {
            index: this.scanner.index,
            line: this.scanner.lineNumber,
            column: this.scanner.index - this.scanner.lineStart
          };
        }

        _createClass(O, [{
          key: "throwError",
          value: function throwError(t) {
            for (var _len = arguments.length, s = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
              s[_key - 1] = arguments[_key];
            }

            var i = s.slice(),
                n = t.replace(/%(\d)/g, function (t, s) {
              return Object(_assert_js__WEBPACK_IMPORTED_MODULE_1__["assert"])(s < i.length, "Message reference must be in range"), i[s];
            }),
                r = this.lastMarker.index,
                a = this.lastMarker.line,
                o = this.lastMarker.column + 1;
            throw this.errorHandler.createError(r, a, o, n);
          }
        }, {
          key: "tolerateError",
          value: function tolerateError(t) {
            for (var _len2 = arguments.length, s = new Array(_len2 > 1 ? _len2 - 1 : 0), _key2 = 1; _key2 < _len2; _key2++) {
              s[_key2 - 1] = arguments[_key2];
            }

            var i = s.slice(),
                n = t.replace(/%(\d)/g, function (t, s) {
              return Object(_assert_js__WEBPACK_IMPORTED_MODULE_1__["assert"])(s < i.length, "Message reference must be in range"), i[s];
            }),
                r = this.lastMarker.index,
                a = this.scanner.lineNumber,
                o = this.lastMarker.column + 1;
            this.errorHandler.tolerateError(r, a, o, n);
          }
        }, {
          key: "unexpectedTokenError",
          value: function unexpectedTokenError(t, e) {
            var s,
                n = e || _messages_js__WEBPACK_IMPORTED_MODULE_3__["Messages"].UnexpectedToken;

            if (t ? (e || (n = 2 === t.type ? _messages_js__WEBPACK_IMPORTED_MODULE_3__["Messages"].UnexpectedEOS : 3 === t.type ? _messages_js__WEBPACK_IMPORTED_MODULE_3__["Messages"].UnexpectedIdentifier : 6 === t.type ? _messages_js__WEBPACK_IMPORTED_MODULE_3__["Messages"].UnexpectedNumber : 8 === t.type ? _messages_js__WEBPACK_IMPORTED_MODULE_3__["Messages"].UnexpectedString : 10 === t.type ? _messages_js__WEBPACK_IMPORTED_MODULE_3__["Messages"].UnexpectedTemplate : _messages_js__WEBPACK_IMPORTED_MODULE_3__["Messages"].UnexpectedToken, 4 === t.type && (this.scanner.isFutureReservedWord(t.value) ? n = _messages_js__WEBPACK_IMPORTED_MODULE_3__["Messages"].UnexpectedReserved : this.context.strict && this.scanner.isStrictModeReservedWord(t.value) && (n = _messages_js__WEBPACK_IMPORTED_MODULE_3__["Messages"].StrictReservedWord))), s = t.value) : s = "ILLEGAL", n = n.replace("%0", s), t && "number" == typeof t.lineNumber) {
              var _e68 = t.start,
                  _s17 = t.lineNumber,
                  i = this.lastMarker.index - this.lastMarker.column,
                  r = t.start - i + 1;
              return this.errorHandler.createError(_e68, _s17, r, n);
            }

            {
              var _t78 = this.lastMarker.index,
                  _e69 = this.lastMarker.line,
                  _s18 = this.lastMarker.column + 1;

              return this.errorHandler.createError(_t78, _e69, _s18, n);
            }
          }
        }, {
          key: "throwUnexpectedToken",
          value: function throwUnexpectedToken(t, e) {
            throw this.unexpectedTokenError(t, e);
          }
        }, {
          key: "tolerateUnexpectedToken",
          value: function tolerateUnexpectedToken(t, e) {
            this.errorHandler.tolerate(this.unexpectedTokenError(t, e));
          }
        }, {
          key: "collectComments",
          value: function collectComments() {
            if (this.config.comment) {
              var t = this.scanner.scanComments();
              if (t.length > 0 && this.delegate) for (var e = 0; e < t.length; ++e) {
                var s = t[e],
                    i = {
                  type: s.multiLine ? "BlockComment" : "LineComment",
                  value: this.scanner.source.slice(s.slice[0], s.slice[1])
                };
                this.config.range && (i.range = s.range), this.config.loc && (i.loc = s.loc);
                var n = {
                  start: {
                    line: s.loc.start.line,
                    column: s.loc.start.column,
                    offset: s.range[0]
                  },
                  end: {
                    line: s.loc.end.line,
                    column: s.loc.end.column,
                    offset: s.range[1]
                  }
                };
                this.delegate(i, n);
              }
            } else this.scanner.scanComments();
          }
        }, {
          key: "getTokenRaw",
          value: function getTokenRaw(t) {
            return this.scanner.source.slice(t.start, t.end);
          }
        }, {
          key: "convertToken",
          value: function convertToken(t) {
            var e = {
              type: _token_js__WEBPACK_IMPORTED_MODULE_6__["TokenName"][t.type],
              value: this.getTokenRaw(t)
            };

            if (this.config.range && (e.range = [t.start, t.end]), this.config.loc && (e.loc = {
              start: {
                line: this.startMarker.line,
                column: this.startMarker.column
              },
              end: {
                line: this.scanner.lineNumber,
                column: this.scanner.index - this.scanner.lineStart
              }
            }), 9 === t.type) {
              var s = t.pattern,
                  i = t.flags;
              e.regex = {
                pattern: s,
                flags: i
              };
            }

            return e;
          }
        }, {
          key: "nextToken",
          value: function nextToken() {
            var t = this.lookahead;
            this.lastMarker.index = this.scanner.index, this.lastMarker.line = this.scanner.lineNumber, this.lastMarker.column = this.scanner.index - this.scanner.lineStart, this.collectComments(), this.scanner.index !== this.startMarker.index && (this.startMarker.index = this.scanner.index, this.startMarker.line = this.scanner.lineNumber, this.startMarker.column = this.scanner.index - this.scanner.lineStart);
            var e = this.scanner.lex();
            return this.hasLineTerminator = t.lineNumber !== e.lineNumber, e && this.context.strict && 3 === e.type && this.scanner.isStrictModeReservedWord(e.value) && (e.type = 4), this.lookahead = e, this.config.tokens && 2 !== e.type && this.tokens.push(this.convertToken(e)), t;
          }
        }, {
          key: "nextRegexToken",
          value: function nextRegexToken() {
            this.collectComments();
            var t = this.scanner.scanRegExp();
            return this.config.tokens && (this.tokens.pop(), this.tokens.push(this.convertToken(t))), this.lookahead = t, this.nextToken(), t;
          }
        }, {
          key: "createNode",
          value: function createNode() {
            return {
              index: this.startMarker.index,
              line: this.startMarker.line,
              column: this.startMarker.column
            };
          }
        }, {
          key: "startNode",
          value: function startNode(t) {
            var e = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;
            var s = t.start - t.lineStart,
                i = t.lineNumber;
            return s < 0 && (s += e, i--), {
              index: t.start,
              line: i,
              column: s
            };
          }
        }, {
          key: "finalize",
          value: function finalize(t, e) {
            if (this.config.range && (e.range = [t.index, this.lastMarker.index]), this.config.loc && (e.loc = {
              start: {
                line: t.line,
                column: t.column
              },
              end: {
                line: this.lastMarker.line,
                column: this.lastMarker.column
              }
            }, this.config.source && (e.loc.source = this.config.source)), this.delegate) {
              var s = {
                start: {
                  line: t.line,
                  column: t.column,
                  offset: t.index
                },
                end: {
                  line: this.lastMarker.line,
                  column: this.lastMarker.column,
                  offset: this.lastMarker.index
                }
              };
              this.delegate(e, s);
            }

            return e;
          }
        }, {
          key: "expect",
          value: function expect(t) {
            var e = this.nextToken();
            7 === e.type && e.value === t || this.throwUnexpectedToken(e);
          }
        }, {
          key: "expectCommaSeparator",
          value: function expectCommaSeparator() {
            if (this.config.tolerant) {
              var t = this.lookahead;
              7 === t.type && "," === t.value ? this.nextToken() : 7 === t.type && ";" === t.value ? (this.nextToken(), this.tolerateUnexpectedToken(t)) : this.tolerateUnexpectedToken(t, _messages_js__WEBPACK_IMPORTED_MODULE_3__["Messages"].UnexpectedToken);
            } else this.expect(",");
          }
        }, {
          key: "expectKeyword",
          value: function expectKeyword(t) {
            var e = this.nextToken();
            4 === e.type && e.value.toLowerCase() === t.toLowerCase() || this.throwUnexpectedToken(e);
          }
        }, {
          key: "match",
          value: function match(t) {
            return 7 === this.lookahead.type && this.lookahead.value === t;
          }
        }, {
          key: "matchKeyword",
          value: function matchKeyword(t) {
            return 4 === this.lookahead.type && this.lookahead.value.toLowerCase() === t.toLowerCase();
          }
        }, {
          key: "matchContextualKeyword",
          value: function matchContextualKeyword(t) {
            return 3 === this.lookahead.type && this.lookahead.value === t;
          }
        }, {
          key: "matchAssign",
          value: function matchAssign() {
            if (7 !== this.lookahead.type) return !1;
            var t = this.lookahead.value;
            return "=" === t || "*=" === t || "**=" === t || "/=" === t || "%=" === t || "+=" === t || "-=" === t || "<<=" === t || ">>=" === t || ">>>=" === t || "&=" === t || "^=" === t || "|=" === t;
          }
        }, {
          key: "isolateCoverGrammar",
          value: function isolateCoverGrammar(t) {
            var e = this.context.isBindingElement,
                s = this.context.isAssignmentTarget,
                i = this.context.firstCoverInitializedNameError;
            this.context.isBindingElement = !0, this.context.isAssignmentTarget = !0, this.context.firstCoverInitializedNameError = null;
            var n = t.call(this);
            return null !== this.context.firstCoverInitializedNameError && this.throwUnexpectedToken(this.context.firstCoverInitializedNameError), this.context.isBindingElement = e, this.context.isAssignmentTarget = s, this.context.firstCoverInitializedNameError = i, n;
          }
        }, {
          key: "inheritCoverGrammar",
          value: function inheritCoverGrammar(t) {
            var e = this.context.isBindingElement,
                s = this.context.isAssignmentTarget,
                i = this.context.firstCoverInitializedNameError;
            this.context.isBindingElement = !0, this.context.isAssignmentTarget = !0, this.context.firstCoverInitializedNameError = null;
            var n = t.call(this);
            return this.context.isBindingElement = this.context.isBindingElement && e, this.context.isAssignmentTarget = this.context.isAssignmentTarget && s, this.context.firstCoverInitializedNameError = i || this.context.firstCoverInitializedNameError, n;
          }
        }, {
          key: "consumeSemicolon",
          value: function consumeSemicolon() {
            this.match(";") ? this.nextToken() : this.hasLineTerminator || (2 === this.lookahead.type || this.match("}") || this.throwUnexpectedToken(this.lookahead), this.lastMarker.index = this.startMarker.index, this.lastMarker.line = this.startMarker.line, this.lastMarker.column = this.startMarker.column);
          }
        }, {
          key: "parsePrimaryExpression",
          value: function parsePrimaryExpression() {
            var t = this.createNode();
            var e, s, a;

            switch (this.lookahead.type) {
              case 3:
                e = this.finalize(t, new _nodes_js__WEBPACK_IMPORTED_MODULE_4__["Identifier"](this.nextToken().value));
                break;

              case 6:
              case 8:
                this.context.strict && this.lookahead.octal && this.tolerateUnexpectedToken(this.lookahead, _messages_js__WEBPACK_IMPORTED_MODULE_3__["Messages"].StrictOctalLiteral), this.context.isAssignmentTarget = !1, this.context.isBindingElement = !1, s = this.nextToken(), a = this.getTokenRaw(s), e = this.finalize(t, new _nodes_js__WEBPACK_IMPORTED_MODULE_4__["Literal"](s.value, a));
                break;

              case 1:
                this.context.isAssignmentTarget = !1, this.context.isBindingElement = !1, s = this.nextToken(), a = this.getTokenRaw(s), e = this.finalize(t, new _nodes_js__WEBPACK_IMPORTED_MODULE_4__["Literal"]("true" === s.value.toLowerCase(), a));
                break;

              case 5:
                this.context.isAssignmentTarget = !1, this.context.isBindingElement = !1, s = this.nextToken(), a = this.getTokenRaw(s), e = this.finalize(t, new _nodes_js__WEBPACK_IMPORTED_MODULE_4__["Literal"](null, a));
                break;

              case 10:
                e = this.parseTemplateLiteral();
                break;

              case 7:
                switch (this.lookahead.value) {
                  case "(":
                    this.context.isBindingElement = !1, e = this.inheritCoverGrammar(this.parseGroupExpression);
                    break;

                  case "[":
                    e = this.inheritCoverGrammar(this.parseArrayInitializer);
                    break;

                  case "{":
                    e = this.inheritCoverGrammar(this.parseObjectInitializer);
                    break;

                  default:
                    e = this.throwUnexpectedToken(this.nextToken());
                }

                break;

              case 4:
                this.context.isAssignmentTarget = !1, this.context.isBindingElement = !1, e = this.matchKeyword("function") ? this.parseFunctionExpression() : this.throwUnexpectedToken(this.nextToken());
                break;

              default:
                e = this.throwUnexpectedToken(this.nextToken());
            }

            return e;
          }
        }, {
          key: "parseArrayInitializer",
          value: function parseArrayInitializer() {
            var t = this.createNode(),
                e = [];

            for (this.expect("["); !this.match("]");) {
              this.match(",") ? (this.nextToken(), e.push(null)) : (e.push(this.inheritCoverGrammar(this.parseAssignmentExpression)), this.match("]") || this.expect(","));
            }

            return this.expect("]"), this.finalize(t, new _nodes_js__WEBPACK_IMPORTED_MODULE_4__["ArrayExpression"](e));
          }
        }, {
          key: "parsePropertyMethod",
          value: function parsePropertyMethod(t) {
            this.context.isAssignmentTarget = !1, this.context.isBindingElement = !1;
            var e = this.context.strict,
                s = this.context.allowStrictDirective;
            this.context.allowStrictDirective = t.simple;
            var i = this.isolateCoverGrammar(this.parseFunctionSourceElements);
            return this.context.strict && t.firstRestricted && this.tolerateUnexpectedToken(t.firstRestricted, t.message), this.context.strict && t.stricted && this.tolerateUnexpectedToken(t.stricted, t.message), this.context.strict = e, this.context.allowStrictDirective = s, i;
          }
        }, {
          key: "parsePropertyMethodFunction",
          value: function parsePropertyMethodFunction() {
            var t = this.createNode(),
                e = this.parseFormalParameters(),
                s = this.parsePropertyMethod(e);
            return this.finalize(t, new _nodes_js__WEBPACK_IMPORTED_MODULE_4__["FunctionExpression"](null, e.params, s, !1));
          }
        }, {
          key: "parseObjectPropertyKey",
          value: function parseObjectPropertyKey() {
            var t = this.createNode(),
                e = this.nextToken();
            var s;

            switch (e.type) {
              case 8:
              case 6:
                {
                  this.context.strict && e.octal && this.tolerateUnexpectedToken(e, _messages_js__WEBPACK_IMPORTED_MODULE_3__["Messages"].StrictOctalLiteral);
                  var r = this.getTokenRaw(e);
                  s = this.finalize(t, new _nodes_js__WEBPACK_IMPORTED_MODULE_4__["Literal"](e.value, r));
                  break;
                }

              case 3:
              case 1:
              case 5:
              case 4:
                s = this.finalize(t, new _nodes_js__WEBPACK_IMPORTED_MODULE_4__["Identifier"](e.value));
                break;

              case 7:
                "[" === e.value ? (s = this.isolateCoverGrammar(this.parseAssignmentExpression), this.expect("]")) : s = this.throwUnexpectedToken(e);
                break;

              default:
                s = this.throwUnexpectedToken(e);
            }

            return s;
          }
        }, {
          key: "isPropertyKey",
          value: function isPropertyKey(e, s) {
            return e.type === _syntax_js__WEBPACK_IMPORTED_MODULE_0__["Syntax"].Identifier && e.name === s || e.type === _syntax_js__WEBPACK_IMPORTED_MODULE_0__["Syntax"].Literal && e.value === s;
          }
        }, {
          key: "parseObjectProperty",
          value: function parseObjectProperty(t) {
            var e = this.createNode(),
                s = this.lookahead;
            var n,
                a = null,
                o = null,
                l = !1,
                p = !1,
                m = !1,
                d = !1;

            if (3 === s.type) {
              var _t79 = s.value;
              this.nextToken(), l = this.match("["), d = !(this.hasLineTerminator || "async" !== _t79 || this.match(":") || this.match("(") || this.match("*") || this.match(",")), a = d ? this.parseObjectPropertyKey() : this.finalize(e, new _nodes_js__WEBPACK_IMPORTED_MODULE_4__["Identifier"](_t79));
            } else this.match("*") ? this.nextToken() : (l = this.match("["), a = this.parseObjectPropertyKey());

            if (a || this.throwUnexpectedToken(this.lookahead), n = "init", this.match(":") && !d) !l && this.isPropertyKey(a, "__proto__") && (t.value && this.tolerateError(_messages_js__WEBPACK_IMPORTED_MODULE_3__["Messages"].DuplicateProtoProperty), t.value = !0), this.nextToken(), o = this.inheritCoverGrammar(this.parseAssignmentExpression);else if (this.match("(")) o = this.parsePropertyMethodFunction(), p = !0;else if (3 === s.type) {
              var _t80 = this.finalize(e, new _nodes_js__WEBPACK_IMPORTED_MODULE_4__["Identifier"](s.value));

              if (this.match("=")) {
                this.context.firstCoverInitializedNameError = this.lookahead, this.nextToken(), m = !0;

                var _s19 = this.isolateCoverGrammar(this.parseAssignmentExpression);

                o = this.finalize(e, new _nodes_js__WEBPACK_IMPORTED_MODULE_4__["AssignmentPattern"](_t80, _s19));
              } else m = !0, o = _t80;
            } else this.throwUnexpectedToken(this.nextToken());
            return this.finalize(e, new _nodes_js__WEBPACK_IMPORTED_MODULE_4__["Property"]("init", a, l, o, p, m));
          }
        }, {
          key: "parseObjectInitializer",
          value: function parseObjectInitializer() {
            var t = this.createNode();
            this.expect("{");
            var e = [],
                s = {
              value: !1
            };

            for (; !this.match("}");) {
              e.push(this.parseObjectProperty(s)), this.match("}") || this.expectCommaSeparator();
            }

            return this.expect("}"), this.finalize(t, new _nodes_js__WEBPACK_IMPORTED_MODULE_4__["ObjectExpression"](e));
          }
        }, {
          key: "parseTemplateHead",
          value: function parseTemplateHead() {
            Object(_assert_js__WEBPACK_IMPORTED_MODULE_1__["assert"])(this.lookahead.head, "Template literal must start with a template head");
            var t = this.createNode(),
                s = this.nextToken(),
                i = s.value,
                n = s.cooked;
            return this.finalize(t, new _nodes_js__WEBPACK_IMPORTED_MODULE_4__["TemplateElement"]({
              raw: i,
              cooked: n
            }, s.tail));
          }
        }, {
          key: "parseTemplateElement",
          value: function parseTemplateElement() {
            10 !== this.lookahead.type && this.throwUnexpectedToken();
            var t = this.createNode(),
                e = this.nextToken(),
                s = e.value,
                i = e.cooked;
            return this.finalize(t, new _nodes_js__WEBPACK_IMPORTED_MODULE_4__["TemplateElement"]({
              raw: s,
              cooked: i
            }, e.tail));
          }
        }, {
          key: "parseTemplateLiteral",
          value: function parseTemplateLiteral() {
            var t = this.createNode(),
                e = [],
                s = [];
            var i = this.parseTemplateHead();

            for (s.push(i); !i.tail;) {
              e.push(this.parseExpression()), i = this.parseTemplateElement(), s.push(i);
            }

            return this.finalize(t, new _nodes_js__WEBPACK_IMPORTED_MODULE_4__["TemplateLiteral"](s, e));
          }
        }, {
          key: "reinterpretExpressionAsPattern",
          value: function reinterpretExpressionAsPattern(e) {
            switch (e.type) {
              case _syntax_js__WEBPACK_IMPORTED_MODULE_0__["Syntax"].Identifier:
              case _syntax_js__WEBPACK_IMPORTED_MODULE_0__["Syntax"].MemberExpression:
              case _syntax_js__WEBPACK_IMPORTED_MODULE_0__["Syntax"].AssignmentPattern:
                break;

              case _syntax_js__WEBPACK_IMPORTED_MODULE_0__["Syntax"].ArrayExpression:
                e.type = _syntax_js__WEBPACK_IMPORTED_MODULE_0__["Syntax"].ArrayPattern;

                for (var t = 0; t < e.elements.length; t++) {
                  null !== e.elements[t] && this.reinterpretExpressionAsPattern(e.elements[t]);
                }

                break;

              case _syntax_js__WEBPACK_IMPORTED_MODULE_0__["Syntax"].ObjectExpression:
                e.type = _syntax_js__WEBPACK_IMPORTED_MODULE_0__["Syntax"].ObjectPattern;

                for (var _t81 = 0; _t81 < e.properties.length; _t81++) {
                  var s = e.properties[_t81];
                  this.reinterpretExpressionAsPattern(s.value);
                }

                break;

              case _syntax_js__WEBPACK_IMPORTED_MODULE_0__["Syntax"].AssignmentExpression:
                e.type = _syntax_js__WEBPACK_IMPORTED_MODULE_0__["Syntax"].AssignmentPattern, delete e.operator, this.reinterpretExpressionAsPattern(e.left);
            }
          }
        }, {
          key: "parseGroupExpression",
          value: function parseGroupExpression() {
            var e;
            if (this.expect("("), this.match(")")) this.nextToken(), this.match("=>") || this.expect("=>"), e = {
              type: "ArrowParameterPlaceHolder",
              params: [],
              async: !1
            };else {
              var s = this.lookahead;
              var i = !1;

              if (this.context.isBindingElement = !0, e = this.inheritCoverGrammar(this.parseAssignmentExpression), this.match(",")) {
                var t = [];

                for (this.context.isAssignmentTarget = !1, t.push(e); 2 !== this.lookahead.type && this.match(",");) {
                  if (this.nextToken(), this.match(")")) {
                    this.nextToken();

                    for (var _e70 = 0; _e70 < t.length; _e70++) {
                      this.reinterpretExpressionAsPattern(t[_e70]);
                    }

                    i = !0, e = {
                      type: "ArrowParameterPlaceHolder",
                      params: t,
                      async: !1
                    };
                  } else t.push(this.inheritCoverGrammar(this.parseAssignmentExpression));

                  if (i) break;
                }

                i || (e = this.finalize(this.startNode(s), new _nodes_js__WEBPACK_IMPORTED_MODULE_4__["SequenceExpression"](t)));
              }

              if (!i) {
                if (this.expect(")"), this.match("=>") && (e.type === _syntax_js__WEBPACK_IMPORTED_MODULE_0__["Syntax"].Identifier && "yield" === e.name && (i = !0, e = {
                  type: "ArrowParameterPlaceHolder",
                  params: [e],
                  async: !1
                }), !i)) {
                  if (this.context.isBindingElement || this.throwUnexpectedToken(this.lookahead), e.type === _syntax_js__WEBPACK_IMPORTED_MODULE_0__["Syntax"].SequenceExpression) for (var _t82 = 0; _t82 < e.expressions.length; _t82++) {
                    this.reinterpretExpressionAsPattern(e.expressions[_t82]);
                  } else this.reinterpretExpressionAsPattern(e);
                  e = {
                    type: "ArrowParameterPlaceHolder",
                    params: e.type === _syntax_js__WEBPACK_IMPORTED_MODULE_0__["Syntax"].SequenceExpression ? e.expressions : [e],
                    async: !1
                  };
                }

                this.context.isBindingElement = !1;
              }
            }
            return e;
          }
        }, {
          key: "parseArguments",
          value: function parseArguments() {
            this.expect("(");
            var t = [];
            if (!this.match(")")) for (;;) {
              var e = this.isolateCoverGrammar(this.parseAssignmentExpression);
              if (t.push(e), this.match(")")) break;
              if (this.expectCommaSeparator(), this.match(")")) break;
            }
            return this.expect(")"), t;
          }
        }, {
          key: "isIdentifierName",
          value: function isIdentifierName(t) {
            return 3 === t.type || 4 === t.type || 1 === t.type || 5 === t.type;
          }
        }, {
          key: "parseIdentifierName",
          value: function parseIdentifierName() {
            var t = this.createNode(),
                e = this.nextToken();
            return this.isIdentifierName(e) || this.throwUnexpectedToken(e), this.finalize(t, new _nodes_js__WEBPACK_IMPORTED_MODULE_4__["Identifier"](e.value));
          }
        }, {
          key: "parseLeftHandSideExpressionAllowCall",
          value: function parseLeftHandSideExpressionAllowCall() {
            var t = this.lookahead,
                e = this.context.allowIn;
            var s;

            for (this.context.allowIn = !0, s = this.inheritCoverGrammar(this.parsePrimaryExpression);;) {
              if (this.match(".")) {
                this.context.isBindingElement = !1, this.context.isAssignmentTarget = !0, this.expect(".");

                var _e71 = this.parseIdentifierName();

                s = this.finalize(this.startNode(t), new _nodes_js__WEBPACK_IMPORTED_MODULE_4__["StaticMemberExpression"](s, _e71));
              } else if (this.match("(")) {
                this.context.isBindingElement = !1, this.context.isAssignmentTarget = !1;

                var _e72 = this.parseArguments();

                s = this.finalize(this.startNode(t), new _nodes_js__WEBPACK_IMPORTED_MODULE_4__["CallExpression"](s, _e72));
              } else {
                if (!this.match("[")) break;
                {
                  this.context.isBindingElement = !1, this.context.isAssignmentTarget = !0, this.expect("[");

                  var _e73 = this.isolateCoverGrammar(this.parseExpression);

                  this.expect("]"), s = this.finalize(this.startNode(t), new _nodes_js__WEBPACK_IMPORTED_MODULE_4__["ComputedMemberExpression"](s, _e73));
                }
              }
            }

            return this.context.allowIn = e, s;
          }
        }, {
          key: "parseLeftHandSideExpression",
          value: function parseLeftHandSideExpression() {
            Object(_assert_js__WEBPACK_IMPORTED_MODULE_1__["assert"])(this.context.allowIn, "callee of new expression always allow in keyword.");
            var t = this.startNode(this.lookahead);
            var s = this.inheritCoverGrammar(this.parsePrimaryExpression);

            for (;;) {
              if (this.match("[")) {
                this.context.isBindingElement = !1, this.context.isAssignmentTarget = !0, this.expect("[");
                var e = this.isolateCoverGrammar(this.parseExpression);
                this.expect("]"), s = this.finalize(t, new _nodes_js__WEBPACK_IMPORTED_MODULE_4__["ComputedMemberExpression"](s, e));
              } else {
                if (!this.match(".")) break;
                {
                  this.context.isBindingElement = !1, this.context.isAssignmentTarget = !0, this.expect(".");

                  var _e74 = this.parseIdentifierName();

                  s = this.finalize(t, new _nodes_js__WEBPACK_IMPORTED_MODULE_4__["StaticMemberExpression"](s, _e74));
                }
              }
            }

            return s;
          }
        }, {
          key: "parseUpdateExpression",
          value: function parseUpdateExpression() {
            var e;
            var s = this.lookahead;

            if (this.match("++") || this.match("--")) {
              var n = this.startNode(s),
                  r = this.nextToken();
              e = this.inheritCoverGrammar(this.parseUnaryExpression), this.context.strict && e.type === _syntax_js__WEBPACK_IMPORTED_MODULE_0__["Syntax"].Identifier && this.scanner.isRestrictedWord(e.name) && this.tolerateError(_messages_js__WEBPACK_IMPORTED_MODULE_3__["Messages"].StrictLHSPrefix), this.context.isAssignmentTarget || this.tolerateError(_messages_js__WEBPACK_IMPORTED_MODULE_3__["Messages"].InvalidLHSInAssignment);
              var a = !0;
              e = this.finalize(n, new _nodes_js__WEBPACK_IMPORTED_MODULE_4__["UpdateExpression"](r.value, e, a)), this.context.isAssignmentTarget = !1, this.context.isBindingElement = !1;
            } else if (e = this.inheritCoverGrammar(this.parseLeftHandSideExpressionAllowCall), !this.hasLineTerminator && 7 === this.lookahead.type && (this.match("++") || this.match("--"))) {
              this.context.strict && e.type === _syntax_js__WEBPACK_IMPORTED_MODULE_0__["Syntax"].Identifier && this.scanner.isRestrictedWord(e.name) && this.tolerateError(_messages_js__WEBPACK_IMPORTED_MODULE_3__["Messages"].StrictLHSPostfix), this.context.isAssignmentTarget || this.tolerateError(_messages_js__WEBPACK_IMPORTED_MODULE_3__["Messages"].InvalidLHSInAssignment), this.context.isAssignmentTarget = !1, this.context.isBindingElement = !1;

              var _n32 = this.nextToken().value,
                  _r54 = !1;

              e = this.finalize(this.startNode(s), new _nodes_js__WEBPACK_IMPORTED_MODULE_4__["UpdateExpression"](_n32, e, _r54));
            }

            return e;
          }
        }, {
          key: "parseUnaryExpression",
          value: function parseUnaryExpression() {
            var e;

            if (this.match("+") || this.match("-") || this.match("~") || this.match("!") || this.matchKeyword("delete") || this.matchKeyword("void") || this.matchKeyword("typeof")) {
              var s = this.startNode(this.lookahead),
                  n = this.nextToken();
              e = this.inheritCoverGrammar(this.parseUnaryExpression), e = this.finalize(s, new _nodes_js__WEBPACK_IMPORTED_MODULE_4__["UnaryExpression"](n.value, e)), this.context.strict && "delete" === e.operator && e.argument.type === _syntax_js__WEBPACK_IMPORTED_MODULE_0__["Syntax"].Identifier && this.tolerateError(_messages_js__WEBPACK_IMPORTED_MODULE_3__["Messages"].StrictDelete), this.context.isAssignmentTarget = !1, this.context.isBindingElement = !1;
            } else e = this.parseUpdateExpression();

            return e;
          }
        }, {
          key: "parseExponentiationExpression",
          value: function parseExponentiationExpression() {
            var e = this.lookahead;
            var s = this.inheritCoverGrammar(this.parseUnaryExpression);

            if (s.type !== _syntax_js__WEBPACK_IMPORTED_MODULE_0__["Syntax"].UnaryExpression && this.match("**")) {
              this.nextToken(), this.context.isAssignmentTarget = !1, this.context.isBindingElement = !1;
              var t = s,
                  i = this.isolateCoverGrammar(this.parseExponentiationExpression);
              s = this.finalize(this.startNode(e), new _nodes_js__WEBPACK_IMPORTED_MODULE_4__["BinaryExpression"]("**", t, i));
            }

            return s;
          }
        }, {
          key: "binaryPrecedence",
          value: function binaryPrecedence(t) {
            var e = t.value;
            var s;
            return s = 7 === t.type ? this.operatorPrecedence[e] || 0 : 4 === t.type && ("instanceof" === e || this.context.allowIn && "in" === e) ? 7 : 0, s;
          }
        }, {
          key: "parseBinaryExpression",
          value: function parseBinaryExpression() {
            var t = this.lookahead;
            var e = this.inheritCoverGrammar(this.parseExponentiationExpression);
            var s = this.lookahead;
            var i = this.binaryPrecedence(s);

            if (i > 0) {
              this.nextToken(), this.context.isAssignmentTarget = !1, this.context.isBindingElement = !1;
              var n = [t, this.lookahead];
              var r = e,
                  a = this.isolateCoverGrammar(this.parseExponentiationExpression);
              var o = [r, s.value, a],
                  h = [i];

              for (; i = this.binaryPrecedence(this.lookahead), !(i <= 0);) {
                for (; o.length > 2 && i <= h[h.length - 1];) {
                  a = o.pop();

                  var _t83 = o.pop();

                  h.pop(), r = o.pop(), n.pop();

                  var _e75 = n[n.length - 1],
                      _s20 = this.startNode(_e75, _e75.lineStart);

                  o.push(this.finalize(_s20, new _nodes_js__WEBPACK_IMPORTED_MODULE_4__["BinaryExpression"](_t83, r, a)));
                }

                o.push(this.nextToken().value), h.push(i), n.push(this.lookahead), o.push(this.isolateCoverGrammar(this.parseExponentiationExpression));
              }

              var c = o.length - 1;
              e = o[c];
              var l = n.pop();

              for (; c > 1;) {
                var _t84 = n.pop(),
                    _s21 = l && l.lineStart,
                    _i14 = this.startNode(_t84, _s21),
                    _r55 = o[c - 1];

                e = this.finalize(_i14, new _nodes_js__WEBPACK_IMPORTED_MODULE_4__["BinaryExpression"](_r55, o[c - 2], e)), c -= 2, l = _t84;
              }
            }

            return e;
          }
        }, {
          key: "parseConditionalExpression",
          value: function parseConditionalExpression() {
            var t = this.lookahead;
            var e = this.inheritCoverGrammar(this.parseBinaryExpression);

            if (this.match("?")) {
              this.nextToken();
              var s = this.context.allowIn;
              this.context.allowIn = !0;
              var i = this.isolateCoverGrammar(this.parseAssignmentExpression);
              this.context.allowIn = s, this.expect(":");
              var n = this.isolateCoverGrammar(this.parseAssignmentExpression);
              e = this.finalize(this.startNode(t), new _nodes_js__WEBPACK_IMPORTED_MODULE_4__["ConditionalExpression"](e, i, n)), this.context.isAssignmentTarget = !1, this.context.isBindingElement = !1;
            }

            return e;
          }
        }, {
          key: "checkPatternParam",
          value: function checkPatternParam(e, s) {
            switch (s.type) {
              case _syntax_js__WEBPACK_IMPORTED_MODULE_0__["Syntax"].Identifier:
                this.validateParam(e, s, s.name);
                break;

              case _syntax_js__WEBPACK_IMPORTED_MODULE_0__["Syntax"].AssignmentPattern:
                this.checkPatternParam(e, s.left);
                break;

              case _syntax_js__WEBPACK_IMPORTED_MODULE_0__["Syntax"].ArrayPattern:
                for (var t = 0; t < s.elements.length; t++) {
                  null !== s.elements[t] && this.checkPatternParam(e, s.elements[t]);
                }

                break;

              case _syntax_js__WEBPACK_IMPORTED_MODULE_0__["Syntax"].ObjectPattern:
                for (var _t85 = 0; _t85 < s.properties.length; _t85++) {
                  var i = s.properties[_t85];
                  this.checkPatternParam(e, i.value);
                }

            }

            e.simple = e.simple && s instanceof _nodes_js__WEBPACK_IMPORTED_MODULE_4__["Identifier"];
          }
        }, {
          key: "reinterpretAsCoverFormalsList",
          value: function reinterpretAsCoverFormalsList(e) {
            var s = [e],
                n = {
              simple: !0,
              paramSet: {}
            };

            switch (e.type) {
              case _syntax_js__WEBPACK_IMPORTED_MODULE_0__["Syntax"].Identifier:
                break;

              default:
                return null;
            }

            for (var t = 0; t < s.length; ++t) {
              var _e76 = s[t];
              this.checkPatternParam(n, _e76), s[t] = _e76;
            }

            if (n.message === _messages_js__WEBPACK_IMPORTED_MODULE_3__["Messages"].StrictParamDupe) {
              var _t86 = this.context.strict ? n.stricted : n.firstRestricted;

              this.throwUnexpectedToken(_t86, n.message);
            }

            return {
              simple: n.simple,
              params: s,
              stricted: n.stricted,
              firstRestricted: n.firstRestricted,
              message: n.message
            };
          }
        }, {
          key: "parseAssignmentExpression",
          value: function parseAssignmentExpression() {
            var e;
            var s = this.lookahead;
            var n = s;

            if (e = this.parseConditionalExpression(), this.matchAssign()) {
              if (this.context.isAssignmentTarget || this.tolerateError(_messages_js__WEBPACK_IMPORTED_MODULE_3__["Messages"].InvalidLHSInAssignment), this.context.strict && e.type === _syntax_js__WEBPACK_IMPORTED_MODULE_0__["Syntax"].Identifier) {
                var t = e;
                this.scanner.isRestrictedWord(t.name) && this.tolerateUnexpectedToken(n, _messages_js__WEBPACK_IMPORTED_MODULE_3__["Messages"].StrictLHSAssignment), this.scanner.isStrictModeReservedWord(t.name) && this.tolerateUnexpectedToken(n, _messages_js__WEBPACK_IMPORTED_MODULE_3__["Messages"].StrictReservedWord);
              }

              this.match("=") ? this.reinterpretExpressionAsPattern(e) : (this.context.isAssignmentTarget = !1, this.context.isBindingElement = !1), n = this.nextToken();
              var r = n.value,
                  a = this.isolateCoverGrammar(this.parseAssignmentExpression);
              e = this.finalize(this.startNode(s), new _nodes_js__WEBPACK_IMPORTED_MODULE_4__["AssignmentExpression"](r, e, a)), this.context.firstCoverInitializedNameError = null;
            }

            return e;
          }
        }, {
          key: "parseExpression",
          value: function parseExpression() {
            var t = this.lookahead;
            var e = this.isolateCoverGrammar(this.parseAssignmentExpression);

            if (this.match(",")) {
              var s = [];

              for (s.push(e); 2 !== this.lookahead.type && this.match(",");) {
                this.nextToken(), s.push(this.isolateCoverGrammar(this.parseAssignmentExpression));
              }

              e = this.finalize(this.startNode(t), new _nodes_js__WEBPACK_IMPORTED_MODULE_4__["SequenceExpression"](s));
            }

            return e;
          }
        }, {
          key: "parseStatementListItem",
          value: function parseStatementListItem() {
            var t;
            if (this.context.isAssignmentTarget = !0, this.context.isBindingElement = !0, 4 === this.lookahead.type) switch (this.lookahead.value) {
              case "function":
                t = this.parseFunctionDeclaration();
                break;

              default:
                t = this.parseStatement();
            } else t = this.parseStatement();
            return t;
          }
        }, {
          key: "parseBlock",
          value: function parseBlock() {
            var t = this.createNode();
            this.expect("{");
            var e = [];

            for (; !this.match("}");) {
              e.push(this.parseStatementListItem());
            }

            return this.expect("}"), this.finalize(t, new _nodes_js__WEBPACK_IMPORTED_MODULE_4__["BlockStatement"](e));
          }
        }, {
          key: "parseBlockOrObjectInitialiser",
          value: function parseBlockOrObjectInitialiser() {
            var t = this.createNode();

            if (this.expect("{"), 3 === this.lookahead.type || 8 === this.lookahead.type) {
              var _e77 = this.scanner.saveState();

              this.scanner.scanComments();
              var s = this.scanner.lex();

              if (this.scanner.restoreState(_e77), 7 === s.type && ":" === s.value) {
                var _e78 = [],
                    _s22 = {
                  value: !1
                };

                for (; !this.match("}");) {
                  _e78.push(this.parseObjectProperty(_s22)), this.match("}") || this.expectCommaSeparator();
                }

                return this.expect("}"), this.finalize(t, new _nodes_js__WEBPACK_IMPORTED_MODULE_4__["ObjectExpression"](_e78));
              }
            }

            var e = [];

            for (; !this.match("}");) {
              e.push(this.parseStatementListItem());
            }

            return this.expect("}"), this.finalize(t, new _nodes_js__WEBPACK_IMPORTED_MODULE_4__["BlockStatement"](e));
          }
        }, {
          key: "parseLexicalBinding",
          value: function parseLexicalBinding(e, s) {
            var n = this.createNode(),
                r = this.parsePattern([], e);
            this.context.strict && r.type === _syntax_js__WEBPACK_IMPORTED_MODULE_0__["Syntax"].Identifier && this.scanner.isRestrictedWord(r.name) && this.tolerateError(_messages_js__WEBPACK_IMPORTED_MODULE_3__["Messages"].StrictVarName);
            var a = null;
            return (!s.inFor && r.type !== _syntax_js__WEBPACK_IMPORTED_MODULE_0__["Syntax"].Identifier || this.match("=")) && (this.expect("="), a = this.isolateCoverGrammar(this.parseAssignmentExpression)), this.finalize(n, new _nodes_js__WEBPACK_IMPORTED_MODULE_4__["VariableDeclarator"](r, a));
          }
        }, {
          key: "parseBindingList",
          value: function parseBindingList(t, e) {
            var s = [this.parseLexicalBinding(t, e)];

            for (; this.match(",");) {
              this.nextToken(), s.push(this.parseLexicalBinding(t, e));
            }

            return s;
          }
        }, {
          key: "parseArrayPattern",
          value: function parseArrayPattern(t, e) {
            var s = this.createNode();
            this.expect("[");
            var i = [];

            for (; !this.match("]");) {
              this.match(",") ? (this.nextToken(), i.push(null)) : (i.push(this.parsePatternWithDefault(t, e)), this.match("]") || this.expect(","));
            }

            return this.expect("]"), this.finalize(s, new _nodes_js__WEBPACK_IMPORTED_MODULE_4__["ArrayPattern"](i));
          }
        }, {
          key: "parsePropertyPattern",
          value: function parsePropertyPattern(t, e) {
            var s = this.createNode();
            var i = !1,
                n = !1;
            var a, o;

            if (3 === this.lookahead.type) {
              var _i15 = this.lookahead;
              a = this.parseVariableIdentifier();
              var c = this.finalize(s, new _nodes_js__WEBPACK_IMPORTED_MODULE_4__["Identifier"](_i15.value));

              if (this.match("=")) {
                t.push(_i15), n = !0, this.nextToken();

                var _e79 = this.parseAssignmentExpression();

                o = this.finalize(this.startNode(_i15), new _nodes_js__WEBPACK_IMPORTED_MODULE_4__["AssignmentPattern"](c, _e79));
              } else this.match(":") ? (this.expect(":"), o = this.parsePatternWithDefault(t, e)) : (t.push(_i15), n = !0, o = c);
            } else i = this.match("["), a = this.parseObjectPropertyKey(), this.expect(":"), o = this.parsePatternWithDefault(t, e);

            return this.finalize(s, new _nodes_js__WEBPACK_IMPORTED_MODULE_4__["Property"]("init", a, i, o, !1, n));
          }
        }, {
          key: "parseObjectPattern",
          value: function parseObjectPattern(t, e) {
            var s = this.createNode(),
                i = [];

            for (this.expect("{"); !this.match("}");) {
              i.push(this.parsePropertyPattern(t, e)), this.match("}") || this.expect(",");
            }

            return this.expect("}"), this.finalize(s, new _nodes_js__WEBPACK_IMPORTED_MODULE_4__["ObjectPattern"](i));
          }
        }, {
          key: "parsePattern",
          value: function parsePattern(t, e) {
            var s;
            return this.match("[") ? s = this.parseArrayPattern(t, e) : this.match("{") ? s = this.parseObjectPattern(t, e) : (!this.matchKeyword("let") || "const" !== e && "let" !== e || this.tolerateUnexpectedToken(this.lookahead, _messages_js__WEBPACK_IMPORTED_MODULE_3__["Messages"].LetInLexicalBinding), t.push(this.lookahead), s = this.parseVariableIdentifier(e)), s;
          }
        }, {
          key: "parsePatternWithDefault",
          value: function parsePatternWithDefault(t, e) {
            var s = this.lookahead;
            var i = this.parsePattern(t, e);

            if (this.match("=")) {
              this.nextToken();

              var _t87 = this.isolateCoverGrammar(this.parseAssignmentExpression);

              i = this.finalize(this.startNode(s), new _nodes_js__WEBPACK_IMPORTED_MODULE_4__["AssignmentPattern"](i, _t87));
            }

            return i;
          }
        }, {
          key: "parseVariableIdentifier",
          value: function parseVariableIdentifier(t) {
            var e = this.createNode(),
                s = this.nextToken();
            return 3 !== s.type && (this.context.strict && 4 === s.type && this.scanner.isStrictModeReservedWord(s.value) ? this.tolerateUnexpectedToken(s, _messages_js__WEBPACK_IMPORTED_MODULE_3__["Messages"].StrictReservedWord) : (this.context.strict || "let" !== s.value || "var" !== t) && this.throwUnexpectedToken(s)), this.finalize(e, new _nodes_js__WEBPACK_IMPORTED_MODULE_4__["Identifier"](s.value));
          }
        }, {
          key: "parseVariableDeclaration",
          value: function parseVariableDeclaration(e) {
            var s = this.createNode(),
                n = this.parsePattern([], "var");
            this.context.strict && n.type === _syntax_js__WEBPACK_IMPORTED_MODULE_0__["Syntax"].Identifier && this.scanner.isRestrictedWord(n.name) && this.tolerateError(_messages_js__WEBPACK_IMPORTED_MODULE_3__["Messages"].StrictVarName);
            var r = null;
            return this.match("=") ? (this.nextToken(), r = this.isolateCoverGrammar(this.parseAssignmentExpression)) : n.type === _syntax_js__WEBPACK_IMPORTED_MODULE_0__["Syntax"].Identifier || e.inFor || this.expect("="), this.finalize(s, new _nodes_js__WEBPACK_IMPORTED_MODULE_4__["VariableDeclarator"](n, r));
          }
        }, {
          key: "parseVariableDeclarationList",
          value: function parseVariableDeclarationList(t) {
            var e = {
              inFor: t.inFor
            },
                s = [];

            for (s.push(this.parseVariableDeclaration(e)); this.match(",");) {
              this.nextToken(), s.push(this.parseVariableDeclaration(e));
            }

            return s;
          }
        }, {
          key: "parseVariableStatement",
          value: function parseVariableStatement() {
            var t = this.createNode();
            this.expectKeyword("var");
            var e = this.parseVariableDeclarationList({
              inFor: !1
            });
            return this.consumeSemicolon(), this.finalize(t, new _nodes_js__WEBPACK_IMPORTED_MODULE_4__["VariableDeclaration"](e, "var"));
          }
        }, {
          key: "parseEmptyStatement",
          value: function parseEmptyStatement() {
            var t = this.createNode();
            return this.expect(";"), this.finalize(t, new _nodes_js__WEBPACK_IMPORTED_MODULE_4__["EmptyStatement"]());
          }
        }, {
          key: "parseExpressionStatement",
          value: function parseExpressionStatement() {
            var t = this.createNode(),
                e = this.parseExpression();
            return this.consumeSemicolon(), this.finalize(t, new _nodes_js__WEBPACK_IMPORTED_MODULE_4__["ExpressionStatement"](e));
          }
        }, {
          key: "parseIfClause",
          value: function parseIfClause() {
            return this.context.strict && this.matchKeyword("function") && this.tolerateError(_messages_js__WEBPACK_IMPORTED_MODULE_3__["Messages"].StrictFunction), this.parseStatement(!0);
          }
        }, {
          key: "parseIfStatement",
          value: function parseIfStatement() {
            var t = this.createNode();
            var e,
                s = null;
            this.expectKeyword("if"), this.expect("(");
            var i = this.parseExpression();
            return !this.match(")") && this.config.tolerant ? (this.tolerateUnexpectedToken(this.nextToken()), e = this.finalize(this.createNode(), new _nodes_js__WEBPACK_IMPORTED_MODULE_4__["EmptyStatement"]())) : (this.expect(")"), e = this.parseIfClause(), this.matchKeyword("else") && (this.nextToken(), s = this.parseIfClause())), this.finalize(t, new _nodes_js__WEBPACK_IMPORTED_MODULE_4__["IfStatement"](i, e, s));
          }
        }, {
          key: "parseForStatement",
          value: function parseForStatement() {
            var e,
                s,
                n = null,
                r = null,
                a = null;
            var o = this.createNode();
            if (this.expectKeyword("for"), this.expect("("), this.match(";")) this.nextToken();else if (this.matchKeyword("var")) {
              n = this.createNode(), this.nextToken();
              var _r56 = this.context.allowIn;
              this.context.allowIn = !1;

              var _a5 = this.parseVariableDeclarationList({
                inFor: !0
              });

              if (this.context.allowIn = _r56, 1 === _a5.length && this.matchKeyword("in")) {
                var _r57 = _a5[0];
                _r57.init && (_r57.id.type === _syntax_js__WEBPACK_IMPORTED_MODULE_0__["Syntax"].ArrayPattern || _r57.id.type === _syntax_js__WEBPACK_IMPORTED_MODULE_0__["Syntax"].ObjectPattern || this.context.strict) && this.tolerateError(_messages_js__WEBPACK_IMPORTED_MODULE_3__["Messages"].ForInOfLoopInitializer, "for-in"), n = this.finalize(n, new _nodes_js__WEBPACK_IMPORTED_MODULE_4__["VariableDeclaration"](_a5, "var")), this.nextToken(), e = n, s = this.parseExpression(), n = null;
              } else 1 === _a5.length && null === _a5[0].init && this.matchContextualKeyword("of") ? (n = this.finalize(n, new _nodes_js__WEBPACK_IMPORTED_MODULE_4__["VariableDeclaration"](_a5, "var")), this.nextToken(), e = n, s = this.parseAssignmentExpression(), n = null) : (n = this.finalize(n, new _nodes_js__WEBPACK_IMPORTED_MODULE_4__["VariableDeclaration"](_a5, "var")), this.expect(";"));
            } else {
              var _r58 = this.lookahead,
                  _a6 = this.context.isBindingElement,
                  _o16 = this.context.isAssignmentTarget,
                  _h3 = this.context.firstCoverInitializedNameError,
                  c = this.context.allowIn;
              if (this.context.allowIn = !1, n = this.inheritCoverGrammar(this.parseAssignmentExpression), this.context.allowIn = c, this.matchKeyword("in")) this.context.isAssignmentTarget && n.type !== _syntax_js__WEBPACK_IMPORTED_MODULE_0__["Syntax"].AssignmentExpression || this.tolerateError(_messages_js__WEBPACK_IMPORTED_MODULE_3__["Messages"].InvalidLHSInForIn), this.nextToken(), this.reinterpretExpressionAsPattern(n), e = n, s = this.parseExpression(), n = null;else {
                if (this.context.isBindingElement = _a6, this.context.isAssignmentTarget = _o16, this.context.firstCoverInitializedNameError = _h3, this.match(",")) {
                  var t = [n];

                  for (; this.match(",");) {
                    this.nextToken(), t.push(this.isolateCoverGrammar(this.parseAssignmentExpression));
                  }

                  n = this.finalize(this.startNode(_r58), new _nodes_js__WEBPACK_IMPORTED_MODULE_4__["SequenceExpression"](t));
                }

                this.expect(";");
              }
            }
            var h;
            if (void 0 === e && (this.match(";") || (r = this.isolateCoverGrammar(this.parseExpression)), this.expect(";"), this.match(")") || (a = this.isolateCoverGrammar(this.parseExpression))), !this.match(")") && this.config.tolerant) this.tolerateUnexpectedToken(this.nextToken()), h = this.finalize(this.createNode(), new _nodes_js__WEBPACK_IMPORTED_MODULE_4__["EmptyStatement"]());else {
              this.expect(")");
              var _t88 = this.context.inIteration;
              this.context.inIteration = !0, h = this.isolateCoverGrammar(this.parseStatementBlockAllowed), this.context.inIteration = _t88;
            }
            return void 0 === e ? this.finalize(o, new _nodes_js__WEBPACK_IMPORTED_MODULE_4__["ForStatement"](n, r, a, h)) : this.finalize(o, new _nodes_js__WEBPACK_IMPORTED_MODULE_4__["ForInStatement"](e, s, h));
          }
        }, {
          key: "parseContinueStatement",
          value: function parseContinueStatement() {
            var t = this.createNode();
            this.expectKeyword("continue");
            var e = null;

            if (3 === this.lookahead.type && !this.hasLineTerminator) {
              var _t89 = this.parseVariableIdentifier();

              e = _t89;
              var s = "$" + _t89.name;
              Object.prototype.hasOwnProperty.call(this.context.labelSet, s) || this.throwError(_messages_js__WEBPACK_IMPORTED_MODULE_3__["Messages"].UnknownLabel, _t89.name);
            }

            return this.consumeSemicolon(), null !== e || this.context.inIteration || this.throwError(_messages_js__WEBPACK_IMPORTED_MODULE_3__["Messages"].IllegalContinue), this.finalize(t, new _nodes_js__WEBPACK_IMPORTED_MODULE_4__["ContinueStatement"](e));
          }
        }, {
          key: "parseBreakStatement",
          value: function parseBreakStatement() {
            var t = this.createNode();
            this.expectKeyword("break");
            var e = null;

            if (3 === this.lookahead.type && !this.hasLineTerminator) {
              var _t90 = this.parseVariableIdentifier(),
                  s = "$" + _t90.name;

              Object.prototype.hasOwnProperty.call(this.context.labelSet, s) || this.throwError(_messages_js__WEBPACK_IMPORTED_MODULE_3__["Messages"].UnknownLabel, _t90.name), e = _t90;
            }

            return this.consumeSemicolon(), null !== e || this.context.inIteration || this.context.inSwitch || this.throwError(_messages_js__WEBPACK_IMPORTED_MODULE_3__["Messages"].IllegalBreak), this.finalize(t, new _nodes_js__WEBPACK_IMPORTED_MODULE_4__["BreakStatement"](e));
          }
        }, {
          key: "parseReturnStatement",
          value: function parseReturnStatement() {
            this.context.inFunctionBody || this.tolerateError(_messages_js__WEBPACK_IMPORTED_MODULE_3__["Messages"].IllegalReturn);
            var t = this.createNode();
            this.expectKeyword("return");
            var e = !this.match(";") && !this.match("}") && !this.hasLineTerminator && 2 !== this.lookahead.type || 8 === this.lookahead.type || 10 === this.lookahead.type ? this.parseExpression() : null;
            return this.consumeSemicolon(), this.finalize(t, new _nodes_js__WEBPACK_IMPORTED_MODULE_4__["ReturnStatement"](e));
          }
        }, {
          key: "parseLabelledStatement",
          value: function parseLabelledStatement() {
            var t = this.createNode(),
                e = this.parseExpression();
            var s;
            return this.consumeSemicolon(), s = new _nodes_js__WEBPACK_IMPORTED_MODULE_4__["ExpressionStatement"](e), this.finalize(t, s);
          }
        }, {
          key: "parseStatementBlockAllowed",
          value: function parseStatementBlockAllowed() {
            return this.parseStatement(!0);
          }
        }, {
          key: "parseStatement",
          value: function parseStatement() {
            var t = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : !1;
            var e;

            switch (this.lookahead.type) {
              case 1:
              case 5:
              case 6:
              case 8:
              case 10:
              case 9:
                e = this.parseExpressionStatement();
                break;

              case 7:
                {
                  var s = this.lookahead.value;
                  e = "{" === s ? t ? this.parseBlockOrObjectInitialiser() : this.parseObjectInitializer() : "(" === s ? this.parseExpressionStatement() : ";" === s ? this.parseEmptyStatement() : this.parseExpressionStatement();
                  break;
                }

              case 3:
                e = this.parseLabelledStatement();
                break;

              case 4:
                switch (this.lookahead.value.toLowerCase()) {
                  case "break":
                    e = this.parseBreakStatement();
                    break;

                  case "continue":
                    e = this.parseContinueStatement();
                    break;

                  case "for":
                    e = this.parseForStatement();
                    break;

                  case "function":
                    e = this.parseFunctionDeclaration();
                    break;

                  case "if":
                    e = this.parseIfStatement();
                    break;

                  case "return":
                    e = this.parseReturnStatement();
                    break;

                  case "var":
                    e = this.parseVariableStatement();
                    break;

                  default:
                    e = this.parseExpressionStatement();
                }

                break;

              default:
                e = this.throwUnexpectedToken(this.lookahead);
            }

            return e;
          }
        }, {
          key: "parseFunctionSourceElements",
          value: function parseFunctionSourceElements() {
            var t = this.createNode();
            this.expect("{");
            var e = [],
                s = this.context.labelSet,
                i = this.context.inIteration,
                n = this.context.inSwitch,
                r = this.context.inFunctionBody;

            for (this.context.labelSet = {}, this.context.inIteration = !1, this.context.inSwitch = !1, this.context.inFunctionBody = !0; 2 !== this.lookahead.type && !this.match("}");) {
              e.push(this.parseStatementListItem());
            }

            return this.expect("}"), this.context.labelSet = s, this.context.inIteration = i, this.context.inSwitch = n, this.context.inFunctionBody = r, this.finalize(t, new _nodes_js__WEBPACK_IMPORTED_MODULE_4__["BlockStatement"](e));
          }
        }, {
          key: "validateParam",
          value: function validateParam(t, e, s) {
            var n = "$" + s;
            this.context.strict ? (this.scanner.isRestrictedWord(s) && (t.stricted = e, t.message = _messages_js__WEBPACK_IMPORTED_MODULE_3__["Messages"].StrictParamName), Object.prototype.hasOwnProperty.call(t.paramSet, n) && (t.stricted = e, t.message = _messages_js__WEBPACK_IMPORTED_MODULE_3__["Messages"].StrictParamDupe)) : t.firstRestricted || (this.scanner.isRestrictedWord(s) ? (t.firstRestricted = e, t.message = _messages_js__WEBPACK_IMPORTED_MODULE_3__["Messages"].StrictParamName) : this.scanner.isStrictModeReservedWord(s) ? (t.firstRestricted = e, t.message = _messages_js__WEBPACK_IMPORTED_MODULE_3__["Messages"].StrictReservedWord) : Object.prototype.hasOwnProperty.call(t.paramSet, n) && (t.stricted = e, t.message = _messages_js__WEBPACK_IMPORTED_MODULE_3__["Messages"].StrictParamDupe)), "function" == typeof Object.defineProperty ? Object.defineProperty(t.paramSet, n, {
              value: !0,
              enumerable: !0,
              writable: !0,
              configurable: !0
            }) : t.paramSet[n] = !0;
          }
        }, {
          key: "parseFormalParameter",
          value: function parseFormalParameter(t) {
            var e = [],
                s = this.parsePatternWithDefault(e);

            for (var _s23 = 0; _s23 < e.length; _s23++) {
              this.validateParam(t, e[_s23], e[_s23].value);
            }

            t.simple = t.simple && s instanceof _nodes_js__WEBPACK_IMPORTED_MODULE_4__["Identifier"], t.params.push(s);
          }
        }, {
          key: "parseFormalParameters",
          value: function parseFormalParameters(t) {
            var e = {
              simple: !0,
              params: [],
              firstRestricted: t
            };
            if (this.expect("("), !this.match(")")) for (e.paramSet = {}; 2 !== this.lookahead.type && (this.parseFormalParameter(e), !this.match(")")) && (this.expect(","), !this.match(")"));) {
              ;
            }
            return this.expect(")"), {
              simple: e.simple,
              params: e.params,
              stricted: e.stricted,
              firstRestricted: e.firstRestricted,
              message: e.message
            };
          }
        }, {
          key: "parseFunctionDeclaration",
          value: function parseFunctionDeclaration(t) {
            var e = this.createNode();
            var s;
            this.expectKeyword("function");
            var n = null,
                r = null;

            if (!t || !this.match("(")) {
              var _t91 = this.lookahead;
              n = this.parseVariableIdentifier(), this.context.strict ? this.scanner.isRestrictedWord(_t91.value) && this.tolerateUnexpectedToken(_t91, _messages_js__WEBPACK_IMPORTED_MODULE_3__["Messages"].StrictFunctionName) : this.scanner.isRestrictedWord(_t91.value) ? (r = _t91, s = _messages_js__WEBPACK_IMPORTED_MODULE_3__["Messages"].StrictFunctionName) : this.scanner.isStrictModeReservedWord(_t91.value) && (r = _t91, s = _messages_js__WEBPACK_IMPORTED_MODULE_3__["Messages"].StrictReservedWord);
            }

            var a = this.parseFormalParameters(r),
                o = a.params,
                h = a.stricted;
            r = a.firstRestricted, a.message && (s = a.message);
            var c = this.context.strict,
                l = this.context.allowStrictDirective;
            this.context.allowStrictDirective = a.simple;
            var p = this.parseFunctionSourceElements();
            return this.context.strict && r && this.throwUnexpectedToken(r, s), this.context.strict && h && this.tolerateUnexpectedToken(h, s), this.context.strict = c, this.context.allowStrictDirective = l, this.finalize(e, new _nodes_js__WEBPACK_IMPORTED_MODULE_4__["FunctionDeclaration"](n, o, p, !1));
          }
        }, {
          key: "parseFunctionExpression",
          value: function parseFunctionExpression() {
            var t = this.createNode();
            var e;
            this.expectKeyword("function");
            var s,
                n = null;

            if (!this.match("(")) {
              var _t92 = this.lookahead;
              n = this.parseVariableIdentifier(), this.context.strict ? this.scanner.isRestrictedWord(_t92.value) && this.tolerateUnexpectedToken(_t92, _messages_js__WEBPACK_IMPORTED_MODULE_3__["Messages"].StrictFunctionName) : this.scanner.isRestrictedWord(_t92.value) ? (s = _t92, e = _messages_js__WEBPACK_IMPORTED_MODULE_3__["Messages"].StrictFunctionName) : this.scanner.isStrictModeReservedWord(_t92.value) && (s = _t92, e = _messages_js__WEBPACK_IMPORTED_MODULE_3__["Messages"].StrictReservedWord);
            }

            var r = this.parseFormalParameters(s),
                a = r.params,
                h = r.stricted;
            s = r.firstRestricted, r.message && (e = r.message);
            var c = this.context.strict,
                l = this.context.allowStrictDirective;
            this.context.allowStrictDirective = r.simple;
            var p = this.parseFunctionSourceElements();
            return this.context.strict && s && this.throwUnexpectedToken(s, e), this.context.strict && h && this.tolerateUnexpectedToken(h, e), this.context.strict = c, this.context.allowStrictDirective = l, this.finalize(t, new _nodes_js__WEBPACK_IMPORTED_MODULE_4__["FunctionExpression"](n, a, p, !1));
          }
        }, {
          key: "qualifiedPropertyName",
          value: function qualifiedPropertyName(t) {
            switch (t.type) {
              case 3:
              case 8:
              case 1:
              case 5:
              case 6:
              case 4:
                return !0;

              case 7:
                return "[" === t.value;
            }

            return !1;
          }
        }, {
          key: "isStartOfExpression",
          value: function isStartOfExpression() {
            var t = !0;
            var e = this.lookahead.value;

            switch (this.lookahead.type) {
              case 7:
                t = "[" === e || "(" === e || "{" === e || "+" === e || "-" === e || "!" === e || "~" === e || "++" === e || "--" === e || "/" === e || "/=" === e;
                break;

              case 4:
                t = "class" === e || "delete" === e || "function" === e || "let" === e || "new" === e || "super" === e || "this" === e || "typeof" === e || "void" === e || "yield" === e;
            }

            return t;
          }
        }, {
          key: "parseScript",
          value: function parseScript() {
            var t = this.createNode(),
                e = [];

            for (; 2 !== this.lookahead.type;) {
              e.push(this.parseStatementListItem());
            }

            return this.finalize(t, new _nodes_js__WEBPACK_IMPORTED_MODULE_4__["Script"](e));
          }
        }]);

        return O;
      }();
      /***/

    },

    /***/
    "hTzF":
    /*!***********************************************************************!*\
      !*** ./node_modules/@arcgis/core/arcade/featureset/support/shared.js ***!
      \***********************************************************************/

    /*! exports provided: FeatureServiceDatabaseType, IdState, callback, cloneAttributes, cloneField, convertLinearUnitsToCode, convertSquareUnitsToCode, defaultMaxRecords, equalityTest, errback, esriFieldToJson, extractServiceUrl, isArray, isBoolean, isDate, isNumber, isString, layerFieldEsriConstants, layerGeometryEsriConstants, layerGeometryEsriRestConstants, reduceArrayWithPromises, sameGeomType, shapeExtent, stableStringify, toEsriGeometryType */

    /***/
    function hTzF(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "FeatureServiceDatabaseType", function () {
        return o;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "IdState", function () {
        return l;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "callback", function () {
        return P;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "cloneAttributes", function () {
        return d;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "cloneField", function () {
        return s;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "convertLinearUnitsToCode", function () {
        return G;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "convertSquareUnitsToCode", function () {
        return g;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "defaultMaxRecords", function () {
        return S;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "equalityTest", function () {
        return f;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "errback", function () {
        return v;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "esriFieldToJson", function () {
        return y;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "extractServiceUrl", function () {
        return N;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "isArray", function () {
        return a;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "isBoolean", function () {
        return p;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "isDate", function () {
        return m;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "isNumber", function () {
        return c;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "isString", function () {
        return u;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "layerFieldEsriConstants", function () {
        return D;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "layerGeometryEsriConstants", function () {
        return I;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "layerGeometryEsriRestConstants", function () {
        return b;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "reduceArrayWithPromises", function () {
        return O;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "sameGeomType", function () {
        return T;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "shapeExtent", function () {
        return F;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "stableStringify", function () {
        return E;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "toEsriGeometryType", function () {
        return x;
      });
      /* harmony import */


      var _core_promiseUtils_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ../../../core/promiseUtils.js */
      "9MzC");
      /* harmony import */


      var _geometry_Extent_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ../../../geometry/Extent.js */
      "OvF4");
      /* harmony import */


      var _layers_support_Field_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ../../../layers/support/Field.js */
      "ofM5");
      /*
      All material copyright ESRI, All Rights Reserved, unless otherwise specified.
      See https://js.arcgis.com/4.18/esri/copyright.txt for details.
      */


      var o, l;

      function s(e) {
        return _layers_support_Field_js__WEBPACK_IMPORTED_MODULE_2__["default"].fromJSON(e.toJSON());
      }

      function y(e) {
        return e.toJSON();
      }

      function u(e) {
        return "string" == typeof e || e instanceof String;
      }

      function p(e) {
        return "boolean" == typeof e;
      }

      function c(e) {
        return "number" == typeof e;
      }

      function a(e) {
        return e instanceof Array;
      }

      function m(e) {
        return e instanceof Date;
      }

      function f(e, r) {
        return e === r || !(!m(e) || !m(r)) && e.getTime() === r.getTime();
      }

      function d(e) {
        var r = {};

        for (var t in e) {
          r[t] = e[t];
        }

        return r;
      }

      function g(e) {
        if (void 0 === e) return null;
        if ("number" == typeof e) return e;

        switch (e.toLowerCase()) {
          case "meters":
          case "meter":
            return 109404;

          case "miles":
          case "mile":
            return 109413;

          case "kilometers":
          case "kilometer":
          case "km":
            return 109414;
        }

        return null;
      }

      function F(e) {
        if (null === e) return null;

        switch (e.type) {
          case "polygon":
          case "multipoint":
          case "polyline":
            return e.extent;

          case "point":
            return new _geometry_Extent_js__WEBPACK_IMPORTED_MODULE_1__["default"]({
              xmin: e.x,
              ymin: e.y,
              xmax: e.x,
              ymax: e.y,
              spatialReference: e.spatialReference
            });

          case "extent":
            return e;
        }

        return null;
      }

      function G(e) {
        if (void 0 === e) return null;
        if ("number" == typeof e) return e;
        if ("number" == typeof e) return e;

        switch (e.toLowerCase()) {
          case "meters":
          case "meter":
            return 9001;

          case "miles":
          case "mile":
            return 9035;

          case "kilometers":
          case "kilometer":
          case "km":
            return 9036;
        }

        return null;
      }

      function T(e, r) {
        return e === r || "point" === e && "esriGeometryPoint" === r || "polyline" === e && "esriGeometryPolyline" === r || "polygon" === e && "esriGeometryPolygon" === r || "extent" === e && "esriGeometryEnvelope" === r || "multipoint" === e && "esriGeometryMultipoint" === r || "point" === r && "esriGeometryPoint" === e || "polyline" === r && "esriGeometryPolyline" === e || "polygon" === r && "esriGeometryPolygon" === e || "extent" === r && "esriGeometryEnvelope" === e || "multipoint" === r && "esriGeometryMultipoint" === e;
      }

      !function (e) {
        e[e.Standardised = 0] = "Standardised", e[e.StandardisedNoInterval = 1] = "StandardisedNoInterval", e[e.SqlServer = 2] = "SqlServer", e[e.Oracle = 3] = "Oracle", e[e.Postgres = 4] = "Postgres", e[e.PGDB = 5] = "PGDB", e[e.FILEGDB = 6] = "FILEGDB", e[e.NotEvaluated = 7] = "NotEvaluated";
      }(o || (o = {})), function (e) {
        e[e.InFeatureSet = 0] = "InFeatureSet", e[e.NotInFeatureSet = 1] = "NotInFeatureSet", e[e.Unknown = 2] = "Unknown";
      }(l || (l = {}));
      var S = 1e3;

      function v(e) {
        return function (r) {
          e.reject(r);
        };
      }

      function P(e, r) {
        return function () {
          try {
            e.apply(null, arguments);
          } catch (e) {
            r.reject(e);
          }
        };
      }

      var I = {
        point: "point",
        polygon: "polygon",
        polyline: "polyline",
        multipoint: "multipoint",
        extent: "extent",
        esriGeometryPoint: "point",
        esriGeometryPolygon: "polygon",
        esriGeometryPolyline: "polyline",
        esriGeometryMultipoint: "multipoint",
        esriGeometryEnvelope: "extent",
        envelope: "extent"
      };
      var b = {
        point: "esriGeometryPoint",
        polygon: "esriGeometryPolygon",
        polyline: "esriGeometryPolyline",
        multipoint: "esriGeometryMultipoint",
        extent: "esriGeometryEnvelope",
        esriGeometryPoint: "esriGeometryPoint",
        esriGeometryPolygon: "esriGeometryPolygon",
        esriGeometryPolyline: "esriGeometryPolyline",
        esriGeometryMultipoint: "esriGeometryMultipoint",
        esriGeometryEnvelope: "esriGeometryEnvelope",
        envelope: "esriGeometryEnvelope"
      },
          D = {
        "small-integer": "esriFieldTypeSmallInteger",
        integer: "esriFieldTypeInteger",
        "long": "esriFieldTypeLong",
        single: "esriFieldTypeSingle",
        "double": "esriFieldTypeDouble",
        string: "esriFieldTypeString",
        date: "esriFieldTypeDate",
        oid: "esriFieldTypeOID",
        geometry: "esriFieldTypeGeometry",
        blob: "esriFieldTypeBlob",
        raster: "esriFieldTypeRaster",
        guid: "esriFieldTypeGUID",
        "global-id": "esriFieldTypeGlobalID",
        xml: "eesriFieldTypeXML",
        esriFieldTypeSmallInteger: "esriFieldTypeSmallInteger",
        esriFieldTypeInteger: "esriFieldTypeInteger",
        esriFieldTypeLong: "esriFieldTypeLong",
        esriFieldTypeSingle: "esriFieldTypeSingle",
        esriFieldTypeDouble: "esriFieldTypeDouble",
        esriFieldTypeString: "esriFieldTypeString",
        esriFieldTypeDate: "esriFieldTypeDate",
        esriFieldTypeOID: "esriFieldTypeOID",
        esriFieldTypeGeometry: "esriFieldTypeGeometry",
        esriFieldTypeBlob: "esriFieldTypeBlob",
        esriFieldTypeRaster: "esriFieldTypeRaster",
        esriFieldTypeGUID: "esriFieldTypeGUID",
        esriFieldTypeGlobalID: "esriFieldTypeGlobalID",
        esriFieldTypeXML: "eesriFieldTypeXML"
      };

      function x(e) {
        switch (e) {
          case "point":
            return "esriGeometryPoint";

          case "polygon":
            return "esriGeometryPolygon";

          case "multipoint":
            return "esriGeometryMultipoint";

          case "polyline":
            return "esriGeometryPolyline";

          default:
            return "esriGeometryPoint";
        }
      }

      function O(i, n) {
        return Object(_core_promiseUtils_js__WEBPACK_IMPORTED_MODULE_0__["create"])(function (e, o) {
          var l = Object(_core_promiseUtils_js__WEBPACK_IMPORTED_MODULE_0__["resolve"])(!0);
          i.reduce(function (e, r, i, o) {
            return e.then(function (e) {
              try {
                return n(e, r, i, o);
              } catch (e) {
                return Object(_core_promiseUtils_js__WEBPACK_IMPORTED_MODULE_0__["reject"])(e);
              }
            }, function (e) {
              return Object(_core_promiseUtils_js__WEBPACK_IMPORTED_MODULE_0__["reject"])(e);
            });
          }, l).then(e, o);
        });
      }

      function N(e) {
        return void 0 === e ? "" : e = (e = (e = e.replace(/\/featureserver\/[0-9]*/i, "/FeatureServer")).replace(/\/mapserver\/[0-9]*/i, "/MapServer")).split("?")[0];
      }

      function E(e, r) {
        r || (r = {}), "function" == typeof r && (r = {
          cmp: r
        });
        var t = "boolean" == typeof r.cycles && r.cycles,
            i = r.cmp && (n = r.cmp, function (e) {
          return function (r, t) {
            var i = {
              key: r,
              value: e[r]
            },
                o = {
              key: t,
              value: e[t]
            };
            return n(i, o);
          };
        });
        var n;
        var o = [];
        return function e(r) {
          if (r && r.toJSON && "function" == typeof r.toJSON && (r = r.toJSON()), void 0 === r) return;
          if ("number" == typeof r) return isFinite(r) ? "" + r : "null";
          if ("object" != typeof r) return JSON.stringify(r);
          var n, l;

          if (Array.isArray(r)) {
            for (l = "[", n = 0; n < r.length; n++) {
              n && (l += ","), l += e(r[n]) || "null";
            }

            return l + "]";
          }

          if (null === r) return "null";

          if (-1 !== o.indexOf(r)) {
            if (t) return JSON.stringify("__cycle__");
            throw new TypeError("Converting circular structure to JSON");
          }

          var s = o.push(r) - 1,
              y = Object.keys(r).sort(i && i(r));

          for (l = "", n = 0; n < y.length; n++) {
            var _t93 = y[n],
                _i16 = e(r[_t93]);

            _i16 && (l && (l += ","), l += JSON.stringify(_t93) + ":" + _i16);
          }

          return o.splice(s, 1), "{" + l + "}";
        }(e);
      }
      /***/

    },

    /***/
    "hUmP":
    /*!****************************************************!*\
      !*** ./node_modules/@arcgis/core/arcade/kernel.js ***!
      \****************************************************/

    /*! exports provided: cloneGeometry, convertLinearUnitsToCode, convertSquareUnitsToCode, sameGeomType, shapeExtent */

    /***/
    function hUmP(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "cloneGeometry", function () {
        return c;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "convertLinearUnitsToCode", function () {
        return a;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "convertSquareUnitsToCode", function () {
        return r;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "sameGeomType", function () {
        return t;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "shapeExtent", function () {
        return s;
      });
      /* harmony import */


      var _geometry_Extent_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ../geometry/Extent.js */
      "OvF4");
      /*
      All material copyright ESRI, All Rights Reserved, unless otherwise specified.
      See https://js.arcgis.com/4.18/esri/copyright.txt for details.
      */


      function r(e) {
        if (void 0 === e) return null;
        if ("number" == typeof e) return e;

        switch (e.toLowerCase()) {
          case "meters":
          case "meter":
          case "m":
          case "squaremeters":
          case "squaremeter":
          case "square-meter":
          case "square-meters":
            return 109404;

          case "miles":
          case "mile":
          case "squaremile":
          case "squaremiles":
          case "square-miles":
          case "square-mile":
            return 109413;

          case "kilometers":
          case "kilometer":
          case "squarekilometers":
          case "squarekilometer":
          case "square-kilometers":
          case "square-kilometer":
          case "km":
            return 109414;

          case "acres":
          case "acre":
          case "ac":
            return 109402;

          case "hectares":
          case "hectare":
          case "ha":
            return 109401;

          case "yard":
          case "yd":
          case "yards":
          case "square-yards":
          case "square-yard":
          case "squareyards":
          case "squareyard":
            return 109442;

          case "feet":
          case "ft":
          case "foot":
          case "square-feet":
          case "square-foot":
          case "squarefeet":
          case "squarefoot":
            return 109405;
        }

        return null;
      }

      function s(r) {
        if (null === r) return null;

        switch (r.type) {
          case "polygon":
          case "multipoint":
          case "polyline":
            return r.extent;

          case "point":
            return new _geometry_Extent_js__WEBPACK_IMPORTED_MODULE_0__["default"]({
              xmin: r.x,
              ymin: r.y,
              xmax: r.x,
              ymax: r.y,
              spatialReference: r.spatialReference
            });

          case "extent":
            return r;
        }

        return null;
      }

      function a(e) {
        if (void 0 === e) return null;
        if ("number" == typeof e) return e;
        if ("number" == typeof e) return e;

        switch (e.toLowerCase()) {
          case "meters":
          case "meter":
          case "m":
          case "squaremeters":
          case "squaremeter":
          case "square-meter":
          case "square-meters":
            return 9001;

          case "miles":
          case "mile":
          case "squaremile":
          case "squaremiles":
          case "square-miles":
          case "square-mile":
            return 9035;

          case "kilometers":
          case "kilometer":
          case "squarekilometers":
          case "squarekilometer":
          case "square-kilometers":
          case "square-kilometer":
          case "km":
            return 9036;

          case "yard":
          case "yd":
          case "yards":
          case "square-yards":
          case "square-yard":
          case "squareyards":
          case "squareyard":
            return 9096;

          case "feet":
          case "ft":
          case "foot":
          case "square-feet":
          case "square-foot":
          case "squarefeet":
          case "squarefoot":
            return 9002;
        }

        return null;
      }

      function t(e, r) {
        return e === r || "point" === e && "esriGeometryPoint" === r || "polyline" === e && "esriGeometryPolyline" === r || "polygon" === e && "esriGeometryPolygon" === r || "extent" === e && "esriGeometryEnvelope" === r || "multipoint" === e && "esriGeometryMultipoint" === r || "point" === r && "esriGeometryPoint" === e || "polyline" === r && "esriGeometryPolyline" === e || "polygon" === r && "esriGeometryPolygon" === e || "extent" === r && "esriGeometryEnvelope" === e || "multipoint" === r && "esriGeometryMultipoint" === e;
      }

      function c(e) {
        if (null === e) return null;
        var r = e.clone();
        return void 0 !== e.cache._geVersion && (r.cache._geVersion = e.cache._geVersion), r;
      }
      /***/

    },

    /***/
    "hvLT":
    /*!******************************************************************************************!*\
      !*** ./node_modules/@arcgis/core/renderers/visualVariables/support/sizeVariableUtils.js ***!
      \******************************************************************************************/

    /*! exports provided: getInputValueType, getTransformationType, isSizeVariable, isValidNumber */

    /***/
    function hvLT(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "getInputValueType", function () {
        return i;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "getTransformationType", function () {
        return l;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "isSizeVariable", function () {
        return n;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "isValidNumber", function () {
        return e;
      });
      /*
      All material copyright ESRI, All Rights Reserved, unless otherwise specified.
      See https://js.arcgis.com/4.18/esri/copyright.txt for details.
      */


      function n(n) {
        return n && "esri.renderers.visualVariables.SizeVariable" === n.declaredClass;
      }

      function e(n) {
        return null != n && !isNaN(n) && isFinite(n);
      }

      function i(n) {
        return n.valueExpression ? "expression" : n.field && "string" == typeof n.field ? "field" : "unknown";
      }

      function l(n, e) {
        var l = e || i(n),
            a = n.valueUnit || "unknown";
        return "unknown" === l ? "constant" : n.stops ? "stops" : null != n.minSize && null != n.maxSize && null != n.minDataValue && null != n.maxDataValue ? "clamped-linear" : "unknown" === a ? null != n.minSize && null != n.minDataValue ? n.minSize && n.minDataValue ? "proportional" : "additive" : "identity" : "real-world-size";
      }
      /***/

    },

    /***/
    "idrm":
    /*!***********************************************************!*\
      !*** ./node_modules/@arcgis/core/chunks/languageUtils.js ***!
      \***********************************************************/

    /*! exports provided: A, B, C, D, E, F, G, H, I, J, K, L, M, N, O, P, Q, R, S, T, U, V, W, X, Y, Z, _, a, b, c, d, e, f, g, h, i, j, k, l, m, n, o, p, q, r, s, t, u, v, w, x, y, z */

    /***/
    function idrm(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "A", function () {
        return D;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "B", function () {
        return A;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "C", function () {
        return O;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "D", function () {
        return L;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "E", function () {
        return $;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "F", function () {
        return z;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "G", function () {
        return M;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "H", function () {
        return ne;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "I", function () {
        return T;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "J", function () {
        return se;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "K", function () {
        return ce;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "L", function () {
        return fe;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "M", function () {
        return de;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "N", function () {
        return S;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "O", function () {
        return me;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "P", function () {
        return W;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "Q", function () {
        return he;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "R", function () {
        return N;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "S", function () {
        return R;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "T", function () {
        return ge;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "U", function () {
        return h;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "V", function () {
        return d;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "W", function () {
        return y;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "X", function () {
        return x;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "Y", function () {
        return V;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "Z", function () {
        return G;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "_", function () {
        return ue;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "a", function () {
        return w;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "b", function () {
        return F;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "c", function () {
        return X;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "d", function () {
        return ee;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "e", function () {
        return K;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "f", function () {
        return P;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "g", function () {
        return Y;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "h", function () {
        return Z;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "i", function () {
        return I;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "j", function () {
        return C;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "k", function () {
        return oe;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "l", function () {
        return re;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "m", function () {
        return ie;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "n", function () {
        return B;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "o", function () {
        return E;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "p", function () {
        return J;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "q", function () {
        return v;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "r", function () {
        return te;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "s", function () {
        return q;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "t", function () {
        return H;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "u", function () {
        return ye;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "v", function () {
        return b;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "w", function () {
        return xe;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "x", function () {
        return _;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "y", function () {
        return j;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "z", function () {
        return k;
      });
      /* harmony import */


      var _core_maybe_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ../core/maybe.js */
      "srIe");
      /* harmony import */


      var _core_promiseUtils_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ../core/promiseUtils.js */
      "9MzC");
      /* harmony import */


      var _geometry_Geometry_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ../geometry/Geometry.js */
      "N2DF");
      /* harmony import */


      var _geometry_Point_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ../geometry/Point.js */
      "SuVq");
      /* harmony import */


      var _geometry_Extent_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ../geometry/Extent.js */
      "OvF4");
      /* harmony import */


      var _geometry_Multipoint_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ../geometry/Multipoint.js */
      "V9wi");
      /* harmony import */


      var _geometry_support_coordsUtils_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ../geometry/support/coordsUtils.js */
      "Mu3I");
      /* harmony import */


      var _geometry_Polygon_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! ../geometry/Polygon.js */
      "Ehki");
      /* harmony import */


      var _geometry_Polyline_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! ../geometry/Polyline.js */
      "UhwK");
      /* harmony import */


      var _arcade_ImmutableArray_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! ../arcade/ImmutableArray.js */
      "qea6");
      /* harmony import */


      var _arcade_FunctionWrapper_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
      /*! ../arcade/FunctionWrapper.js */
      "pqxT");
      /* harmony import */


      var _arcade_ImmutablePointArray_js__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
      /*! ../arcade/ImmutablePointArray.js */
      "Q2u5");
      /* harmony import */


      var _arcade_ImmutablePathArray_js__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
      /*! ../arcade/ImmutablePathArray.js */
      "kJip");
      /* harmony import */


      var _core_number_js__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
      /*! ../core/number.js */
      "cBWO");
      /*
      All material copyright ESRI, All Rights Reserved, unless otherwise specified.
      See https://js.arcgis.com/4.18/esri/copyright.txt for details.
      */


      var h = function h(e) {
        _classCallCheck(this, h);

        this.value = e;
      };

      var d = function d(e) {
        _classCallCheck(this, d);

        this.value = e;
      };

      var y = function y(e) {
        _classCallCheck(this, y);

        this.fn = e;
      };

      var x = function x(e) {
        _classCallCheck(this, x);

        this.fn = e;
      };

      var S = y,
          T = d,
          N = h,
          R = x,
          b = {
        type: "VOID"
      },
          _ = {
        type: "BREAK"
      },
          j = {
        type: "CONTINUE"
      };

      function M(e, t, n) {
        return "" === t || null == t || t === n || t === n ? e : e = e.split(t).join(n);
      }

      function v(e) {
        return e instanceof y || e instanceof _arcade_FunctionWrapper_js__WEBPACK_IMPORTED_MODULE_10__["default"] || e instanceof x;
      }

      function C(e) {
        return !!F(e) || !!w(e) || !!P(e) || !!I(e) || null === e || e === b || "number" == typeof e;
      }

      function O(e, t) {
        return void 0 === e ? t : e;
      }

      function F(e) {
        return "string" == typeof e || e instanceof String;
      }

      function I(e) {
        return "boolean" == typeof e;
      }

      function w(e) {
        return "number" == typeof e;
      }

      function A(e) {
        return "number" == typeof e && isFinite(e) && Math.floor(e) === e;
      }

      function Z(e) {
        return e instanceof Array;
      }

      function k(e) {
        return !0 === (e && e.declaredRootClass && "esri.arcade.featureset.support.FeatureSet" === e.declaredRootClass);
      }

      function D(e) {
        return !0 === (e && e.declaredRootClass && "esri.arcade.featureSetCollection" === e.declaredRootClass);
      }

      function E(e) {
        return e instanceof _arcade_ImmutableArray_js__WEBPACK_IMPORTED_MODULE_9__["default"];
      }

      function P(e) {
        return e instanceof Date;
      }

      function J(e, t, n) {
        if (e.length < t || e.length > n) throw new Error("Function called with wrong number of Parameters");
      }

      function z() {
        var e = new Date().getTime();
        return "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g, function (t) {
          var n = (e + 16 * Math.random()) % 16 | 0;
          return e = Math.floor(e / 16), ("x" === t ? n : 3 & n | 8).toString(16);
        });
      }

      function V(e, t) {
        return !1 === isNaN(e) ? null == t || "" === t ? e.toString() : (t = M(t, "‰", ""), t = M(t, "¤", ""), Object(_core_number_js__WEBPACK_IMPORTED_MODULE_13__["format"])(e, {
          pattern: t
        })) : e.toString();
      }

      function G(e, t) {
        var n = de.Moment(e);
        return null == t || "" === t ? n.format() : n.format(L(t));
      }

      function L(e) {
        return e.replace(/(LTS)|L|l/g, function (e) {
          return "[" + e + "]";
        });
      }

      function U(e, t, n) {
        switch (n) {
          case ">":
            return e > t;

          case "<":
            return e < t;

          case ">=":
            return e >= t;

          case "<=":
            return e <= t;
        }

        return !1;
      }

      function q(e, t, n) {
        if (null === e) {
          if (null === t || t === b) return U(null, null, n);
          if (w(t)) return U(0, t, n);
          if (F(t)) return U(0, X(t), n);
          if (I(t)) return U(0, X(t), n);
          if (P(t)) return U(0, t.getTime(), n);
        }

        if (e === b) {
          if (null === t || t === b) return U(null, null, n);
          if (w(t)) return U(0, t, n);
          if (F(t)) return U(0, X(t), n);
          if (I(t)) return U(0, X(t), n);
          if (P(t)) return U(0, t.getTime(), n);
        } else if (w(e)) {
          if (w(t)) return U(e, t, n);
          if (I(t)) return U(e, X(t), n);
          if (null === t || t === b) return U(e, 0, n);
          if (F(t)) return U(e, X(t), n);
          if (P(t)) return U(e, t.getTime(), n);
        } else if (F(e)) {
          if (F(t)) return U(K(e), K(t), n);
          if (P(t)) return U(X(e), t.getTime(), n);
          if (w(t)) return U(X(e), t, n);
          if (null === t || t === b) return U(X(e), 0, n);
          if (I(t)) return U(X(e), X(t), n);
        } else if (P(e)) {
          if (P(t)) return U(e, t, n);
          if (null === t || t === b) return U(e.getTime(), 0, n);
          if (w(t)) return U(e.getTime(), t, n);
          if (I(t)) return U(e.getTime(), X(t), n);
          if (F(t)) return U(e.getTime(), X(t), n);
        } else if (I(e)) {
          if (I(t)) return U(e, t, n);
          if (w(t)) return U(X(e), X(t), n);
          if (P(t)) return U(X(e), t.getTime(), n);
          if (null === t || t === b) return U(X(e), 0, n);
          if (F(t)) return U(X(e), X(t), n);
        }

        return !!B(e, t) && ("<=" === n || ">=" === n);
      }

      function B(e, t) {
        if (e === t) return !0;
        if (null === e && t === b || null === t && e === b) return !0;
        if (P(e) && P(t)) return e.getTime() === t.getTime();
        if (e instanceof _arcade_ImmutablePathArray_js__WEBPACK_IMPORTED_MODULE_12__["default"]) return e.equalityTest(t);
        if (e instanceof _arcade_ImmutablePointArray_js__WEBPACK_IMPORTED_MODULE_11__["default"]) return e.equalityTest(t);

        if (e instanceof _geometry_Point_js__WEBPACK_IMPORTED_MODULE_3__["default"] && t instanceof _geometry_Point_js__WEBPACK_IMPORTED_MODULE_3__["default"]) {
          var n, r;
          if (n = e.cache._arcadeCacheId, r = t.cache._arcadeCacheId, null != n) return n === r;
        }

        if (void 0 !== e && void 0 !== t && null !== e && null !== t && "object" == typeof e && "object" == typeof t) {
          if (e._arcadeCacheId === t._arcadeCacheId && void 0 !== e._arcadeCacheId && null !== e._arcadeCacheId) return !0;
          if (e._underlyingGraphic === t._underlyingGraphic && void 0 !== e._underlyingGraphic && null !== e._underlyingGraphic) return !0;
        }

        return !1;
      }

      function K(e, t) {
        if (F(e)) return e;
        if (null === e) return "";
        if (w(e)) return V(e, t);
        if (I(e)) return e.toString();
        if (P(e)) return G(e, t);
        if (e instanceof _geometry_Geometry_js__WEBPACK_IMPORTED_MODULE_2__["default"]) return JSON.stringify(e.toJSON());

        if (Z(e)) {
          var _t94 = [];

          for (var n = 0; n < e.length; n++) {
            _t94[n] = Q(e[n]);
          }

          return "[" + _t94.join(",") + "]";
        }

        if (e instanceof _arcade_ImmutableArray_js__WEBPACK_IMPORTED_MODULE_9__["default"]) {
          var _t95 = [];

          for (var _n33 = 0; _n33 < e.length(); _n33++) {
            _t95[_n33] = Q(e.get(_n33));
          }

          return "[" + _t95.join(",") + "]";
        }

        return null !== e && "object" == typeof e && void 0 !== e.castToText ? e.castToText() : v(e) ? "object, Function" : "";
      }

      function W(e) {
        var t = [];
        if (!1 === Z(e)) return null;

        if (e instanceof _arcade_ImmutableArray_js__WEBPACK_IMPORTED_MODULE_9__["default"]) {
          for (var n = 0; n < e.length(); n++) {
            t[n] = X(e.get(n));
          }

          return t;
        }

        for (var _n34 = 0; _n34 < e.length; _n34++) {
          t[_n34] = X(e[_n34]);
        }

        return t;
      }

      function H(e, t) {
        if (F(e)) return e;
        if (null === e) return "";
        if (w(e)) return V(e, t);
        if (I(e)) return e.toString();
        if (P(e)) return G(e, t);
        if (e instanceof _geometry_Geometry_js__WEBPACK_IMPORTED_MODULE_2__["default"]) return e instanceof _geometry_Extent_js__WEBPACK_IMPORTED_MODULE_4__["default"] ? '{"xmin":' + e.xmin.toString() + ',"ymin":' + e.ymin.toString() + "," + (e.hasZ ? '"zmin":' + e.zmin.toString() + "," : "") + (e.hasM ? '"mmin":' + e.mmin.toString() + "," : "") + '"xmax":' + e.xmax.toString() + ',"ymax":' + e.ymax.toString() + "," + (e.hasZ ? '"zmax":' + e.zmax.toString() + "," : "") + (e.hasM ? '"mmax":' + e.mmax.toString() + "," : "") + '"spatialReference":' + ue(e.spatialReference) + "}" : ue(e.toJSON(), function (e, t) {
          return e.key === t.key ? 0 : "spatialReference" === e.key ? 1 : "spatialReference" === t.key || e.key < t.key ? -1 : e.key > t.key ? 1 : 0;
        });

        if (Z(e)) {
          var _t96 = [];

          for (var n = 0; n < e.length; n++) {
            _t96[n] = Q(e[n]);
          }

          return "[" + _t96.join(",") + "]";
        }

        if (e instanceof _arcade_ImmutableArray_js__WEBPACK_IMPORTED_MODULE_9__["default"]) {
          var _t97 = [];

          for (var _n35 = 0; _n35 < e.length(); _n35++) {
            _t97[_n35] = Q(e.get(_n35));
          }

          return "[" + _t97.join(",") + "]";
        }

        return null !== e && "object" == typeof e && void 0 !== e.castToText ? e.castToText() : v(e) ? "object, Function" : "";
      }

      function Q(e) {
        if (null === e) return "null";
        if (I(e) || w(e) || F(e)) return JSON.stringify(e);
        if (e instanceof _geometry_Geometry_js__WEBPACK_IMPORTED_MODULE_2__["default"]) return H(e);
        if (e instanceof _arcade_ImmutableArray_js__WEBPACK_IMPORTED_MODULE_9__["default"]) return H(e);
        if (e instanceof Array) return H(e);
        if (e instanceof Date) return JSON.stringify(G(e, ""));

        if (null !== e && "object" == typeof e) {
          if (void 0 !== e.castToText) return e.castToText();
        } else if (e === b) return "null";

        return "null";
      }

      function X(e, t) {
        return w(e) ? e : null === e || "" === e ? 0 : P(e) ? NaN : I(e) ? e ? 1 : 0 : Z(e) || "" === e || void 0 === e ? NaN : void 0 !== t && F(e) ? (t = M(t, "‰", ""), t = M(t, "¤", ""), Object(_core_number_js__WEBPACK_IMPORTED_MODULE_13__["parse"])(e, {
          pattern: t
        })) : e === b ? 0 : Number(e);
      }

      function Y(e, t) {
        if (P(e)) return e;

        if (F(e)) {
          var n = de.Moment(e, [null == t || "" === t ? de.Moment.ISO_8601 : t]);
          if (n.isValid()) return n.toDate();
        }

        return null;
      }

      function $(e, t) {
        if (P(e)) return de.Moment(e);

        if (F(e)) {
          var n = de.Moment(e, [null == t || "" === t ? de.Moment.ISO_8601 : t]);
          if (n.isValid()) return n;
        }

        return null;
      }

      function ee(e) {
        return I(e) ? e : F(e) ? "true" === (e = e.toLowerCase()) : !!w(e) && 0 !== e && !isNaN(e);
      }

      function te(t, n) {
        return Object(_core_maybe_js__WEBPACK_IMPORTED_MODULE_0__["isNone"])(t) ? null : (null !== t.spatialReference && void 0 !== t.spatialReference || (t.spatialReference = n), t);
      }

      function ne(e) {
        if (null === e) return null;
        if (e instanceof _geometry_Point_js__WEBPACK_IMPORTED_MODULE_3__["default"]) return "NaN" === e.x || null === e.x || isNaN(e.x) ? null : e;

        if (e instanceof _geometry_Polygon_js__WEBPACK_IMPORTED_MODULE_7__["default"]) {
          if (0 === e.rings.length) return null;

          var _iterator19 = _createForOfIteratorHelper(e.rings),
              _step19;

          try {
            for (_iterator19.s(); !(_step19 = _iterator19.n()).done;) {
              var t = _step19.value;
              if (t.length > 0) return e;
            }
          } catch (err) {
            _iterator19.e(err);
          } finally {
            _iterator19.f();
          }

          return null;
        }

        if (e instanceof _geometry_Polyline_js__WEBPACK_IMPORTED_MODULE_8__["default"]) {
          if (0 === e.paths.length) return null;

          var _iterator20 = _createForOfIteratorHelper(e.paths),
              _step20;

          try {
            for (_iterator20.s(); !(_step20 = _iterator20.n()).done;) {
              var _t98 = _step20.value;
              if (_t98.length > 0) return e;
            }
          } catch (err) {
            _iterator20.e(err);
          } finally {
            _iterator20.f();
          }

          return null;
        }

        return e instanceof _geometry_Multipoint_js__WEBPACK_IMPORTED_MODULE_5__["default"] ? 0 === e.points.length ? null : e : e instanceof _geometry_Extent_js__WEBPACK_IMPORTED_MODULE_4__["default"] ? "NaN" === e.xmin || null === e.xmin || isNaN(e.xmin) ? null : e : null;
      }

      function re(e, t) {
        if (!e) return t;
        if (!e.domain) return t;
        var n = null;
        if ("string" === e.field.type || "esriFieldTypeString" === e.field.type) t = K(t);else {
          if (null == t) return null;
          if ("" === t) return t;
          t = X(t);
        }

        for (var r = 0; r < e.domain.codedValues.length; r++) {
          var i = e.domain.codedValues[r];
          i.code === t && (n = i);
        }

        return null === n ? t : n.name;
      }

      function ie(e, t) {
        if (!e) return t;
        if (!e.domain) return t;
        var n = null;
        t = K(t);

        for (var r = 0; r < e.domain.codedValues.length; r++) {
          var i = e.domain.codedValues[r];
          i.name === t && (n = i);
        }

        return null === n ? t : n.code;
      }

      function oe(e, t) {
        var n = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : null;
        var r = arguments.length > 3 ? arguments[3] : undefined;
        if (!t) return null;
        if (!t.fields) return null;
        var i,
            o,
            a = null;

        for (var _n36 = 0; _n36 < t.fields.length; _n36++) {
          var _r59 = t.fields[_n36];
          _r59.name.toLowerCase() === e.toString().toLowerCase() && (a = _r59);
        }

        if (null === a) throw new Error("Field not found");
        return r || (r = n && t.typeIdField && n._field(t.typeIdField)), null != r && t.types.some(function (e) {
          return e.id === r && (i = e.domains && e.domains[a.name], i && "inherited" === i.type && (i = ae(a.name, t), o = !0), !0);
        }), o || i || (i = ae(e, t)), {
          field: a,
          domain: i
        };
      }

      function ae(e, t) {
        var n;
        return t.fields.some(function (t) {
          return t.name === e && (n = t.domain), !!n;
        }), n;
      }

      function ue(e, t) {
        t || (t = {}), "function" == typeof t && (t = {
          cmp: t
        });
        var n = "boolean" == typeof t.cycles && t.cycles,
            r = t.cmp && (i = t.cmp, function (e) {
          return function (t, n) {
            var r = {
              key: t,
              value: e[t]
            },
                o = {
              key: n,
              value: e[n]
            };
            return i(r, o);
          };
        });
        var i;
        var o = [];
        return function e(t) {
          if (t && t.toJSON && "function" == typeof t.toJSON && (t = t.toJSON()), void 0 === t) return;
          if ("number" == typeof t) return isFinite(t) ? "" + t : "null";
          if ("object" != typeof t) return JSON.stringify(t);
          var i, a;

          if (Array.isArray(t)) {
            for (a = "[", i = 0; i < t.length; i++) {
              i && (a += ","), a += e(t[i]) || "null";
            }

            return a + "]";
          }

          if (null === t) return "null";

          if (-1 !== o.indexOf(t)) {
            if (n) return JSON.stringify("__cycle__");
            throw new TypeError("Converting circular structure to JSON");
          }

          var u = o.push(t) - 1,
              s = Object.keys(t).sort(r && r(t));

          for (a = "", i = 0; i < s.length; i++) {
            var _n37 = s[i],
                _r60 = e(t[_n37]);

            _r60 && (a && (a += ","), a += JSON.stringify(_n37) + ":" + _r60);
          }

          return o.splice(u, 1), "{" + a + "}";
        }(e);
      }

      function se(e) {
        if (null === e) return null;
        var t = [];

        var _iterator21 = _createForOfIteratorHelper(e),
            _step21;

        try {
          for (_iterator21.s(); !(_step21 = _iterator21.n()).done;) {
            var n = _step21.value;
            n && (n.declaredClass && "esri.arcade.Feature" === n.declaredClass || "FeatureSetReader" === n.type) ? t.push(n.geometry()) : t.push(n);
          }
        } catch (err) {
          _iterator21.e(err);
        } finally {
          _iterator21.f();
        }

        return t;
      }

      function le(e, t) {
        if (!(t instanceof _geometry_Point_js__WEBPACK_IMPORTED_MODULE_3__["default"])) throw new Error("Invalid Argument");
        e.push(t.hasZ ? t.hasM ? [t.x, t.y, t.z, t.m] : [t.x, t.y, t.z] : [t.x, t.y]);
      }

      function fe(e, t) {
        if (Z(e) || E(e)) {
          var n = !1,
              r = !1,
              i = [],
              o = t;

          if (Z(e)) {
            var _iterator22 = _createForOfIteratorHelper(e),
                _step22;

            try {
              for (_iterator22.s(); !(_step22 = _iterator22.n()).done;) {
                var _t99 = _step22.value;
                le(i, _t99);
              }
            } catch (err) {
              _iterator22.e(err);
            } finally {
              _iterator22.f();
            }

            i.length > 0 && (o = e[0].spatialReference, n = e[0].hasZ, r = e[0].hasM);
          } else if (e instanceof _arcade_ImmutablePointArray_js__WEBPACK_IMPORTED_MODULE_11__["default"]) i = e._elements, i.length > 0 && (n = e._hasZ, r = e._hasM, o = e.get(0).spatialReference);else {
            if (!E(e)) throw new Error("Invalid Argument");

            var _iterator23 = _createForOfIteratorHelper(e.toArray()),
                _step23;

            try {
              for (_iterator23.s(); !(_step23 = _iterator23.n()).done;) {
                var _t100 = _step23.value;
                le(i, _t100);
              }
            } catch (err) {
              _iterator23.e(err);
            } finally {
              _iterator23.f();
            }

            i.length > 0 && (o = e.get(0).spatialReference, n = !0 === e.get(0).hasZ, r = !0 === e.get(0).hasM);
          }

          if (0 === i.length) return null;
          return !1 === Object(_geometry_support_coordsUtils_js__WEBPACK_IMPORTED_MODULE_6__["isClockwise"])(i, r, n) && (i = i.slice(0).reverse()), new _geometry_Polygon_js__WEBPACK_IMPORTED_MODULE_7__["default"]({
            rings: [i],
            spatialReference: o,
            hasZ: n,
            hasM: r
          });
        }

        return e;
      }

      function ce(e, t) {
        if (Z(e) || E(e)) {
          var n = !1,
              r = !1,
              i = [],
              o = t;

          if (Z(e)) {
            var _iterator24 = _createForOfIteratorHelper(e),
                _step24;

            try {
              for (_iterator24.s(); !(_step24 = _iterator24.n()).done;) {
                var _t101 = _step24.value;
                le(i, _t101);
              }
            } catch (err) {
              _iterator24.e(err);
            } finally {
              _iterator24.f();
            }

            i.length > 0 && (o = e[0].spatialReference, n = !0 === e[0].hasZ, r = !0 === e[0].hasM);
          } else if (e instanceof _arcade_ImmutablePointArray_js__WEBPACK_IMPORTED_MODULE_11__["default"]) i = e._elements, i.length > 0 && (n = e._hasZ, r = e._hasM, o = e.get(0).spatialReference);else if (E(e)) {
            var _iterator25 = _createForOfIteratorHelper(e.toArray()),
                _step25;

            try {
              for (_iterator25.s(); !(_step25 = _iterator25.n()).done;) {
                var _t102 = _step25.value;
                le(i, _t102);
              }
            } catch (err) {
              _iterator25.e(err);
            } finally {
              _iterator25.f();
            }

            i.length > 0 && (o = e.get(0).spatialReference, n = !0 === e.get(0).hasZ, r = !0 === e.get(0).hasM);
          }

          return 0 === i.length ? null : new _geometry_Polyline_js__WEBPACK_IMPORTED_MODULE_8__["default"]({
            paths: [i],
            spatialReference: o,
            hasZ: n,
            hasM: r
          });
        }

        return e;
      }

      function me(e, t) {
        if (Z(e) || E(e)) {
          var n = !1,
              r = !1,
              i = [],
              a = t;

          if (Z(e)) {
            var _iterator26 = _createForOfIteratorHelper(e),
                _step26;

            try {
              for (_iterator26.s(); !(_step26 = _iterator26.n()).done;) {
                var _t103 = _step26.value;
                le(i, _t103);
              }
            } catch (err) {
              _iterator26.e(err);
            } finally {
              _iterator26.f();
            }

            i.length > 0 && (a = e[0].spatialReference, n = !0 === e[0].hasZ, r = !0 === e[0].hasM);
          } else if (e instanceof _arcade_ImmutablePointArray_js__WEBPACK_IMPORTED_MODULE_11__["default"]) i = e._elements, i.length > 0 && (n = e._hasZ, r = e._hasM, a = e.get(0).spatialReference);else if (E(e)) {
            var _iterator27 = _createForOfIteratorHelper(e.toArray()),
                _step27;

            try {
              for (_iterator27.s(); !(_step27 = _iterator27.n()).done;) {
                var _t104 = _step27.value;
                le(i, _t104);
              }
            } catch (err) {
              _iterator27.e(err);
            } finally {
              _iterator27.f();
            }

            i.length > 0 && (a = e.get(0).spatialReference, n = !0 === e.get(0).hasZ, r = !0 === e.get(0).hasM);
          }

          return 0 === i.length ? null : new _geometry_Multipoint_js__WEBPACK_IMPORTED_MODULE_5__["default"]({
            points: i,
            spatialReference: a,
            hasZ: n,
            hasM: r
          });
        }

        return e;
      }

      function ge(e) {
        var t = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : !1;
        var n = [];
        if (null === e) return n;

        if (!0 === Z(e)) {
          for (var r = 0; r < e.length; r++) {
            var i = K(e[r]);
            "" === i && !0 !== t || n.push(i);
          }

          return n;
        }

        if (e instanceof _arcade_ImmutableArray_js__WEBPACK_IMPORTED_MODULE_9__["default"]) {
          for (var _r61 = 0; _r61 < e.length(); _r61++) {
            var _i17 = K(e.get(_r61));

            "" === _i17 && !0 !== t || n.push(_i17);
          }

          return n;
        }

        if (C(e)) {
          var _r62 = K(e);

          return "" === _r62 && !0 !== t || n.push(_r62), n;
        }

        return [];
      }

      var pe = 0;

      function he(e) {
        return pe++, pe % 100 == 0 ? (pe = 0, Object(_core_promiseUtils_js__WEBPACK_IMPORTED_MODULE_1__["create"])(function (t) {
          setTimeout(function () {
            t(e);
          }, 0);
        })) : e;
      }

      var de = {
        Moment: null
      };

      function ye(e, t, n) {
        switch (n) {
          case "&":
            return e & t;

          case "|":
            return e | t;

          case "^":
            return e ^ t;

          case "<<":
            return e << t;

          case ">>":
            return e >> t;

          case ">>>":
            return e >>> t;
        }
      }

      var xe = Object.freeze({
        __proto__: null,
        ReturnResultE: h,
        ImplicitResultE: d,
        NativeFunctionE: y,
        SizzleFunctionE: x,
        NativeFunction: S,
        ImplicitResult: T,
        ReturnResult: N,
        SizzleFunction: R,
        voidOperation: b,
        breakResult: _,
        continueResult: j,
        multiReplace: M,
        isFunctionParameter: v,
        isSimpleType: C,
        defaultUndefined: O,
        isString: F,
        isBoolean: I,
        isNumber: w,
        isInteger: A,
        isArray: Z,
        isFeatureSet: k,
        isFeatureSetCollection: D,
        isImmutableArray: E,
        isDate: P,
        pcCheck: J,
        generateUUID: z,
        formatNumber: V,
        formatDate: G,
        standardiseDateFormat: L,
        greaterThanLessThan: q,
        equalityTest: B,
        toString: K,
        toNumberArray: W,
        toStringExplicit: H,
        toNumber: X,
        toDate: Y,
        toDateM: $,
        toBoolean: ee,
        fixSpatialReference: te,
        fixNullGeometry: ne,
        getDomainValue: re,
        getDomainCode: ie,
        getDomain: oe,
        stableStringify: ue,
        autoCastFeatureToGeometry: se,
        autoCastArrayOfPointsToPolygon: fe,
        autoCastArrayOfPointsToPolyline: ce,
        autoCastArrayOfPointsToMultiPoint: me,
        toStringArray: ge,
        tick: he,
        MomentLibrary: de,
        binaryOperator: ye
      });
      /***/
    },

    /***/
    "k8am":
    /*!**********************************************************!*\
      !*** ./node_modules/@arcgis/core/arcade/treeAnalysis.js ***!
      \**********************************************************/

    /*! exports provided: addFunctionDeclaration, checkFunctionSignature, checkScript, constructGlobalScope, extractAllIssues, extractAllIssuesInFunction, extractFunctionDeclaration, findFieldLiterals, findFunction, findFunctionCalls, findScriptDependencies, functionDecls, makeError, nodeErrorMessage, referencesFunction, referencesMember, scriptUsesFeatureSet, testValidityOfExpression, validateFunction, validateLanguage, validateLanguageNode, validateScript, walk */

    /***/
    function k8am(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "addFunctionDeclaration", function () {
        return a;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "checkFunctionSignature", function () {
        return r;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "checkScript", function () {
        return O;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "constructGlobalScope", function () {
        return y;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "extractAllIssues", function () {
        return b;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "extractAllIssuesInFunction", function () {
        return T;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "extractFunctionDeclaration", function () {
        return d;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "findFieldLiterals", function () {
        return u;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "findFunction", function () {
        return i;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "findFunctionCalls", function () {
        return A;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "findScriptDependencies", function () {
        return g;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "functionDecls", function () {
        return e;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "makeError", function () {
        return E;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "nodeErrorMessage", function () {
        return S;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "referencesFunction", function () {
        return p;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "referencesMember", function () {
        return m;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "scriptUsesFeatureSet", function () {
        return I;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "testValidityOfExpression", function () {
        return c;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "validateFunction", function () {
        return f;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "validateLanguage", function () {
        return x;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "validateLanguageNode", function () {
        return l;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "validateScript", function () {
        return N;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "walk", function () {
        return o;
      });
      /*
      All material copyright ESRI, All Rights Reserved, unless otherwise specified.
      See https://js.arcgis.com/4.18/esri/copyright.txt for details.
      */


      var e = {
        concatenate: {
          min: "0",
          max: "*"
        },
        tohex: {
          min: "1",
          max: "1"
        },
        hash: {
          min: "1",
          max: "1"
        },
        isoweek: {
          min: "1",
          max: "1"
        },
        isoweekday: {
          min: "1",
          max: "1"
        },
        isomonth: {
          min: "1",
          max: "1"
        },
        isoyear: {
          min: "1",
          max: "1"
        },
        resize: {
          min: "2",
          max: "3"
        },
        slice: {
          min: "0",
          max: "*"
        },
        splice: {
          min: "0",
          max: "*"
        },
        push: {
          min: "2",
          max: "2"
        },
        pop: {
          min: "1",
          max: "1"
        },
        includes: {
          min: "2",
          max: "2"
        },
        array: {
          min: "1",
          max: "2"
        },
        front: {
          min: "1",
          max: "1"
        },
        back: {
          min: "1",
          max: "1"
        },
        insert: {
          min: "3",
          max: "3"
        },
        erase: {
          min: "2",
          max: "2"
        },
        split: {
          min: "2",
          max: "4"
        },
        guid: {
          min: "0",
          max: "1"
        },
        today: {
          min: "0",
          max: "0"
        },
        angle: {
          min: "2",
          max: "3"
        },
        bearing: {
          min: "2",
          max: "3"
        },
        urlencode: {
          min: "1",
          max: "1"
        },
        now: {
          min: "0",
          max: "0"
        },
        timestamp: {
          min: "0",
          max: "0"
        },
        day: {
          min: "1",
          max: "1"
        },
        month: {
          min: "1",
          max: "1"
        },
        year: {
          min: "1",
          max: "1"
        },
        hour: {
          min: "1",
          max: "1"
        },
        second: {
          min: "1",
          max: "1"
        },
        millisecond: {
          min: "1",
          max: "1"
        },
        minute: {
          min: "1",
          max: "1"
        },
        weekday: {
          min: "1",
          max: "1"
        },
        toutc: {
          min: "1",
          max: "1"
        },
        tolocal: {
          min: "1",
          max: "1"
        },
        date: {
          min: "0",
          max: "7"
        },
        datediff: {
          min: "2",
          max: "3"
        },
        dateadd: {
          min: "2",
          max: "3"
        },
        trim: {
          min: "1",
          max: "1"
        },
        text: {
          min: "1",
          max: "2"
        },
        left: {
          min: "2",
          max: "2"
        },
        right: {
          min: "2",
          max: "2"
        },
        mid: {
          min: "2",
          max: "3"
        },
        upper: {
          min: "1",
          max: "1"
        },
        proper: {
          min: "1",
          max: "2"
        },
        lower: {
          min: "1",
          max: "1"
        },
        find: {
          min: "2",
          max: "3"
        },
        iif: {
          min: "3",
          max: "3"
        },
        decode: {
          min: "2",
          max: "*"
        },
        when: {
          min: "2",
          max: "*"
        },
        defaultvalue: {
          min: "2",
          max: "2"
        },
        isempty: {
          min: "1",
          max: "1"
        },
        domaincode: {
          min: "2",
          max: "4"
        },
        domainname: {
          min: "2",
          max: "4"
        },
        polygon: {
          min: "1",
          max: "1"
        },
        point: {
          min: "1",
          max: "1"
        },
        polyline: {
          min: "1",
          max: "1"
        },
        extent: {
          min: "1",
          max: "1"
        },
        multipoint: {
          min: "1",
          max: "1"
        },
        ringisclockwise: {
          min: "1",
          max: "1"
        },
        geometry: {
          min: "1",
          max: "1"
        },
        count: {
          min: "0",
          max: "*"
        },
        number: {
          min: "1",
          max: "2"
        },
        acos: {
          min: "1",
          max: "1"
        },
        asin: {
          min: "1",
          max: "1"
        },
        atan: {
          min: "1",
          max: "1"
        },
        atan2: {
          min: "2",
          max: "2"
        },
        ceil: {
          min: "1",
          max: "2"
        },
        floor: {
          min: "1",
          max: "2"
        },
        round: {
          min: "1",
          max: "2"
        },
        cos: {
          min: "1",
          max: "1"
        },
        exp: {
          min: "1",
          max: "1"
        },
        log: {
          min: "1",
          max: "1"
        },
        min: {
          min: "0",
          max: "*"
        },
        constrain: {
          min: "3",
          max: "3"
        },
        console: {
          min: "0",
          max: "*"
        },
        max: {
          min: "0",
          max: "*"
        },
        pow: {
          min: "2",
          max: "2"
        },
        random: {
          min: "0",
          max: "0"
        },
        sqrt: {
          min: "1",
          max: "1"
        },
        sin: {
          min: "1",
          max: "1"
        },
        tan: {
          min: "1",
          max: "1"
        },
        abs: {
          min: "1",
          max: "1"
        },
        isnan: {
          min: "1",
          max: "1"
        },
        stdev: {
          min: "0",
          max: "*"
        },
        average: {
          min: "0",
          max: "*"
        },
        mean: {
          min: "0",
          max: "*"
        },
        sum: {
          min: "0",
          max: "*"
        },
        variance: {
          min: "0",
          max: "*"
        },
        distinct: {
          min: "0",
          max: "*"
        },
        first: {
          min: "1",
          max: "1"
        },
        top: {
          min: "2",
          max: "2"
        },
        "boolean": {
          min: "1",
          max: "1"
        },
        dictionary: {
          min: "0",
          max: "*"
        },
        "typeof": {
          min: "1",
          max: "1"
        },
        reverse: {
          min: "1",
          max: "1"
        },
        replace: {
          min: "3",
          max: "4"
        },
        sort: {
          min: "1",
          max: "2"
        },
        feature: {
          min: "1",
          max: "*"
        },
        haskey: {
          min: "2",
          max: "2"
        },
        indexof: {
          min: "2",
          max: "2"
        },
        disjoint: {
          min: "2",
          max: "2"
        },
        intersects: {
          min: "2",
          max: "2"
        },
        touches: {
          min: "2",
          max: "2"
        },
        crosses: {
          min: "2",
          max: "2"
        },
        within: {
          min: "2",
          max: "2"
        },
        contains: {
          min: "2",
          max: "2"
        },
        overlaps: {
          min: "2",
          max: "2"
        },
        equals: {
          min: "2",
          max: "2"
        },
        relate: {
          min: "3",
          max: "3"
        },
        intersection: {
          min: "2",
          max: "2"
        },
        union: {
          min: "1",
          max: "2"
        },
        difference: {
          min: "2",
          max: "2"
        },
        symmetricdifference: {
          min: "2",
          max: "2"
        },
        clip: {
          min: "2",
          max: "2"
        },
        cut: {
          min: "2",
          max: "2"
        },
        area: {
          min: "1",
          max: "2"
        },
        areageodetic: {
          min: "1",
          max: "2"
        },
        length: {
          min: "1",
          max: "2"
        },
        lengthgeodetic: {
          min: "1",
          max: "2"
        },
        distancegeodetic: {
          min: "2",
          max: "3"
        },
        distance: {
          min: "2",
          max: "3"
        },
        densify: {
          min: "2",
          max: "3"
        },
        densifygeodetic: {
          min: "2",
          max: "3"
        },
        generalize: {
          min: "2",
          max: "4"
        },
        buffer: {
          min: "2",
          max: "3"
        },
        buffergeodetic: {
          min: "2",
          max: "3"
        },
        offset: {
          min: "2",
          max: "6"
        },
        rotate: {
          min: "2",
          max: "3"
        },
        issimple: {
          min: "1",
          max: "1"
        },
        simplify: {
          min: "1",
          max: "1"
        },
        centroid: {
          min: "1",
          max: "1"
        },
        isselfintersecting: {
          min: "1",
          max: "1"
        },
        multiparttosinglepart: {
          min: "1",
          max: "1"
        },
        setgeometry: {
          min: "2",
          max: "2"
        },
        portal: {
          min: "1",
          max: "1"
        },
        getuser: {
          min: "1",
          max: "2"
        },
        subtypes: {
          min: "1",
          max: "1"
        },
        subtypecode: {
          min: "1",
          max: "1"
        },
        subtypename: {
          min: "1",
          max: "1"
        },
        domain: {
          min: "2",
          max: "3"
        },
        schema: {
          min: "1",
          max: "1"
        }
      };

      for (var _t105 in e) {
        e[_t105].fmin = e[_t105].min, e[_t105].fmax = e[_t105].max;
      }

      var t = ["featureset", "getuser", "featuresetbyid", "featuresetbyname", "featuresetbyassociation", "featuresetbyrelationshipname", "featuresetbyurl", "attachments", "featuresetbyportalitem"],
          n = ["disjoint", "intersects", "touches", "crosses", "within", "contains", "overlaps", "equals", "relate", "intersection", "union", "difference", "symmetricdifference", "clip", "cut", "area", "areageodetic", "length", "lengthgeodetic", "distance", "distancegeodetic", "densify", "densifygeodetic", "generalize", "buffer", "buffergeodetic", "offset", "rotate", "issimple", "simplify", "multiparttosinglepart"];

      function a(t, n) {
        var a = e[t.name.toLowerCase()];
        void 0 === a ? e[t.name.toLowerCase()] = "sync" === n ? {
          min: t.min,
          max: t.max
        } : {
          fmin: t.min,
          fmax: t.max
        } : "sync" === n ? (a.min = t.min, a.max = t.max) : (a.fmin = t.min, a.fmax = t.max);
      }

      function r(e, t) {
        return "0" !== e.min && t.length < Number(e.min) || "*" !== e.max && t.length > Number(e.max) ? -2 : 1;
      }

      function i(e, t, n) {
        if (null !== n.localScope && void 0 !== n.localScope[e.toLowerCase()]) {
          var _a7 = n.localScope[e.toLowerCase()];
          if ("FormulaFunction" === _a7.type) return void 0 === _a7.signature && (_a7.signature = {
            min: "0",
            max: "*"
          }), r(_a7.signature, t);
          if ("any" === _a7.type) return void 0 === _a7.signature && (_a7.signature = {
            min: "0",
            max: "*"
          }), r(_a7.signature, t);
        }

        if (void 0 !== n.globalScope[e.toLowerCase()]) {
          var _a8 = n.globalScope[e.toLowerCase()];
          if ("FormulaFunction" === _a8.type) return void 0 === _a8.signature && (_a8.signature = {
            min: "0",
            max: "*"
          }), r(_a8.signature, t);
          if ("any" === _a8.type) return void 0 === _a8.signature && (_a8.signature = {
            min: "0",
            max: "*"
          }), r(_a8.signature, t);
        }

        return -1;
      }

      function s(e, t) {
        if (e) {
          var _iterator28 = _createForOfIteratorHelper(e),
              _step28;

          try {
            for (_iterator28.s(); !(_step28 = _iterator28.n()).done;) {
              var _n38 = _step28.value;
              o(_n38, t);
            }
          } catch (err) {
            _iterator28.e(err);
          } finally {
            _iterator28.f();
          }
        }
      }

      function o(e, t) {
        if (e && !1 !== t(e)) switch (e.type) {
          case "ArrayExpression":
            s(e.elements, t);
            break;

          case "AssignmentExpression":
          case "BinaryExpression":
            o(e.left, t), o(e.right, t);
            break;

          case "BlockStatement":
            s(e.body, t);
            break;

          case "BreakStatement":
            break;

          case "CallExpression":
            o(e.callee, t), s(e.arguments, t);
            break;

          case "ConditionalExpression":
            o(e.test, t), o(e.alternate, t), o(e.consequent, t);
            break;

          case "ContinueStatement":
          case "EmptyStatement":
            break;

          case "ExpressionStatement":
            o(e.expression, t);
            break;

          case "ForInStatement":
            o(e.left, t), o(e.right, t), o(e.body, t);
            break;

          case "ForStatement":
            o(e.init, t), o(e.test, t), o(e.update, t), o(e.body, t);
            break;

          case "FunctionDeclaration":
          case "FunctionDeclaration":
          case "FunctionExpression":
            o(e.id, t), s(e.params, t), o(e.body, t);
            break;

          case "Identifier":
            break;

          case "IfStatement":
            o(e.test, t), o(e.consequent, t), o(e.alternate, t);
            break;

          case "Literal":
            break;

          case "LogicalExpression":
            o(e.left, t), o(e.right, t);
            break;

          case "MemberExpression":
            o(e.object, t), o(e.property, t);
            break;

          case "ObjectExpression":
            s(e.properties, t);
            break;

          case "Program":
            s(e.body, t);
            break;

          case "Property":
            o(e.key, t), o(e.value, t);
            break;

          case "ReturnStatement":
          case "UnaryExpression":
          case "UpdateExpression":
            o(e.argument, t);
            break;

          case "VariableDeclaration":
            s(e.declarations, t);
            break;

          case "VariableDeclarator":
            o(e.id, t), o(e.init, t);
            break;

          case "TemplateLiteral":
            s(e.expressions, t), s(e.quasis, t);
        }
      }

      function l(e) {
        var t = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : !0;
        var n = S(e, "SYNTAX", "UNREOGNISED");

        try {
          switch (e.type) {
            case "VariableDeclarator":
              return null !== e.init && "FunctionExpression" === e.init.type ? S(e, "SYNTAX", "FUNCTIONVARIABLEDECLARATOR") : "Identifier" !== e.id.type ? S(e, "SYNTAX", "VARIABLEMUSTHAVEIDENTIFIER") : null !== e.init ? l(e.init, !1) : "";

            case "VariableDeclaration":
              for (var _a9 = 0; _a9 < e.declarations.length; _a9++) {
                if (n = l(e.declarations[_a9], t), "" !== n) return n;
              }

              return "";

            case "ForInStatement":
              if (n = l(e.left, t), "" !== n) return n;

              if ("VariableDeclaration" === e.left.type) {
                if (e.left.declarations.length > 1) return S(e, "SYNTAX", "ONLY1VAR");
                if (null !== e.left.declarations[0].init) return S(e, "SYNTAX", "CANNOTDECLAREVAL");
              } else if ("Identifier" !== e.left.type) return S(e, "SYNTAX", "LEFTNOTVAR");

              return n = l(e.right, t), "" !== n ? n : (n = l(e.body, t), "" !== n ? n : "");

            case "ForStatement":
              return null !== e.test && (n = l(e.test, t), "" !== n) || null !== e.init && (n = l(e.init, t), "" !== n) || null !== e.update && (n = l(e.update, t), "" !== n) || null !== e.body && (n = l(e.body, t), "" !== n) ? n : "";

            case "ContinueStatement":
            case "EmptyStatement":
            case "BreakStatement":
              return "";

            case "IfStatement":
              return n = l(e.test, t), "" !== n || null !== e.consequent && (n = l(e.consequent, !1), "" !== n) || null !== e.alternate && (n = l(e.alternate, !1), "" !== n) ? n : "";

            case "BlockStatement":
              {
                var _a10 = [];

                for (var _t106 = 0; _t106 < e.body.length; _t106++) {
                  "EmptyStatement" !== e.body[_t106].type && _a10.push(e.body[_t106]);
                }

                e.body = _a10;

                for (var _a11 = 0; _a11 < e.body.length; _a11++) {
                  if (n = l(e.body[_a11], t), "" !== n) return n;
                }

                return "";
              }

            case "FunctionDeclaration":
              return !1 === t ? S(e, "SYNTAX", "GLOBALFUNCTIONSONLY") : "Identifier" !== e.id.type ? S(e, "SYNTAX", "FUNCTIONMUSTHAVEIDENTIFIER") : l(e.body, !1);

            case "ReturnStatement":
              return null !== e.argument ? l(e.argument, t) : "";

            case "UpdateExpression":
              return "Identifier" !== e.argument.type && "MemberExpression" !== e.argument.type ? S(e, "SYNTAX", "ASSIGNMENTTOVARSONLY") : l(e.argument, t);

            case "AssignmentExpression":
              if ("Identifier" !== e.left.type && "MemberExpression" !== e.left.type) return S(e, "SYNTAX", "ASSIGNMENTTOVARSONLY");
              if (n = l(e.left, t), "" !== n) return n;

              switch (e.operator) {
                case "=":
                case "/=":
                case "*=":
                case "%=":
                case "+=":
                case "-=":
                  break;

                default:
                  return S(e, "SYNTAX", "OPERATORNOTRECOGNISED");
              }

              return l(e.right, !1);

            case "ExpressionStatement":
              return "AssignmentExpression" === e.expression.type || e.expression.type, l(e.expression, !1);

            case "Identifier":
              n = "";
              break;

            case "MemberExpression":
              return n = l(e.object, t), "" !== n ? n : !0 === e.computed ? l(e.property, t) : "";

            case "Literal":
            case "TemplateElement":
              return "";

            case "CallExpression":
              if ("Identifier" !== e.callee.type) return S(e, "SYNTAX", "ONLYNODESSUPPORTED");
              n = "";

              for (var _a12 = 0; _a12 < e.arguments.length; _a12++) {
                if (n = l(e.arguments[_a12], t), "" !== n) return n;
              }

              return "";

            case "UnaryExpression":
              n = l(e.argument, t);
              break;

            case "BinaryExpression":
              if (n = l(e.left, t), "" !== n) return n;
              if (n = l(e.right, t), "" !== n) return n;

              switch (e.operator) {
                case "|":
                case "&":
                case ">>":
                case "<<":
                case ">>":
                case ">>>":
                case "^":
                case "==":
                case "!=":
                case "<":
                case "<=":
                case ">":
                case ">=":
                case "+":
                case "-":
                case "*":
                case "/":
                case "%":
                  break;

                default:
                  return S(e, "SYNTAX", "OPERATORNOTRECOGNISED");
              }

              return "";

            case "LogicalExpression":
              if (n = l(e.left, t), "" !== n) return n;
              if (n = l(e.right), "" !== n) return n;

              switch (e.operator) {
                case "&&":
                case "||":
                  break;

                default:
                  return S(e, "SYNTAX", "OPERATORNOTRECOGNISED");
              }

              return "";

            case "ConditionalExpression":
              return S(e, "SYNTAX", "NOTSUPPORTED");

            case "ArrayExpression":
              n = "";

              for (var _a13 = 0; _a13 < e.elements.length; _a13++) {
                if (n = l(e.elements[_a13], t), "" !== n) return n;
              }

              return n;

            case "TemplateLiteral":
              n = "";

              for (var _a14 = 0; _a14 < e.quasis.length; _a14++) {
                if (n = l(e.quasis[_a14], t), "" !== n) return n;
              }

              for (var _a15 = 0; _a15 < e.expressions.length; _a15++) {
                if (n = l(e.expressions[_a15], t), "" !== n) return n;
              }

              return n;

            case "ObjectExpression":
              n = "";

              for (var _a16 = 0; _a16 < e.properties.length; _a16++) {
                if (n = "", null !== e.properties[_a16].key && ("Literal" !== e.properties[_a16].key.type && "Identifier" !== e.properties[_a16].key.type && (n = S(e, "SYNTAX", "OBJECTPROPERTYMUSTBESTRING")), "Literal" === e.properties[_a16].key.type)) {
                  var _t107 = e.properties[_a16].key,
                      _r63 = "value" in _t107 ? _t107.value : null;

                  "string" == typeof _r63 || _r63 instanceof String || (n = S(e, "SYNTAX", "OBJECTPROPERTYMUSTBESTRING"));
                }

                if ("" === n && (n = l(e.properties[_a16], t)), "" !== n) return n;
              }

              return n;

            case "Property":
              return "Literal" !== e.key.type && "Identifier" !== e.key.type ? S(e, "SYNTAX", "ONLYLITERAL") : ("Identifier" !== e.key.type && (n = l(e.key, t), "" !== n) || (n = l(e.value, t)), n);

            default:
              return n;
          }

          return n;
        } catch (e) {
          throw e;
        }
      }

      function c(e, t) {
        var n = S(e, "SYNTAX", "UNREOGNISED"),
            a = null,
            r = "";

        try {
          switch (e.type) {
            case "VariableDeclarator":
              {
                if (null !== e.init && "FunctionExpression" === e.init.type) return S(e, "SYNTAX", "FUNCTIONVARIABLEDECLARATOR");

                var _n39 = null === e.init ? "" : c(e.init, t);

                return "" !== _n39 ? _n39 : ("Identifier" === e.id.type && (null === t.localScope ? t.globalScope[e.id.name.toLowerCase()] = {
                  type: "any"
                } : t.localScope[e.id.name.toLowerCase()] = {
                  type: "any"
                }), "");
              }

            case "FunctionDeclaration":
              return a = d(e.id.name.toLowerCase(), e), r = f(e, t), "" !== r ? r : null !== t.localScope ? S(e, "SYNTAX", "GLOBALFUNCTIONSONLY") : (a.isnative = !1, t.globalScope[e.id.name.toLowerCase()] = {
                type: "FormulaFunction",
                signature: [a]
              }, "");

            case "VariableDeclaration":
              n = "";

              for (var _a17 = 0; _a17 < e.declarations.length; _a17++) {
                if (n = c(e.declarations[_a17], t), "" !== n) return n;
              }

              return n;

            case "IfStatement":
              return n = c(e.test, t), "" !== n ? n : "AssignmentExpression" === e.test.type || "UpdateExpression" === e.test.type ? S(e.test, "SYNTAX", "CANNOT_USE_ASSIGNMENT_IN_CONDITION") : null !== e.consequent && (n = c(e.consequent, t), "" !== n) || null !== e.alternate && (n = c(e.alternate, t), "" !== n) ? n : "";

            case "EmptyStatement":
              return "";

            case "BlockStatement":
              for (var _a18 = 0; _a18 < e.body.length; _a18++) {
                if (n = c(e.body[_a18], t), "" !== n) return n;
              }

              return "";

            case "ReturnStatement":
              return null !== e.argument ? c(e.argument, t) : "";

            case "ForInStatement":
              if ("VariableDeclaration" === e.left.type) {
                if (e.left.declarations.length > 1) return S(e, "SYNTAX", "ONLY1VAR");
                if (null !== e.left.declarations[0].init) return S(e, "SYNTAX", "CANNOTDECLAREVAL");
              } else if ("Identifier" !== e.left.type) return S(e, "SYNTAX", "LEFTNOTVAR");

              return n = c(e.left, t), "" !== n ? n : (n = c(e.right, t), "" !== n ? n : (n = c(e.body, t), "" !== n ? n : ""));

            case "ForStatement":
              return null !== e.init && (n = c(e.init, t), "" !== n) || null !== e.test && (n = c(e.test, t), "" !== n) || null !== e.body && (n = c(e.body, t), "" !== n) || null !== e.update && (n = c(e.update, t), "" !== n) ? n : "";

            case "BreakStatement":
            case "ContinueStatement":
              return "";

            case "UpdateExpression":
              {
                if ("Identifier" !== e.argument.type && "MemberExpression" !== e.argument.type) return S(e, "SYNTAX", "ASSIGNMENTTOVARSONLY");

                var _n40 = !1;

                return "MemberExpression" === e.argument.type ? c(e.argument, t) : (null !== t.localScope && void 0 !== t.localScope[e.argument.name.toLowerCase()] && (_n40 = !0), void 0 !== t.globalScope[e.argument.name.toLowerCase()] && (_n40 = !0), !1 === _n40 ? "Identifier " + e.argument.name + " has not been declared." : "");
              }

            case "AssignmentExpression":
              {
                if ("Identifier" !== e.left.type && "MemberExpression" !== e.left.type) return S(e, "SYNTAX", "ASSIGNMENTTOVARSONLY");

                var _n41 = c(e.right, t);

                if ("" !== _n41) return _n41;

                var _a19 = !1;

                return "MemberExpression" === e.left.type ? (_n41 = c(e.left, t), "" !== _n41 ? _n41 : "") : (null !== t.localScope && void 0 !== t.localScope[e.left.name.toLowerCase()] && (_a19 = !0), void 0 !== t.globalScope[e.left.name.toLowerCase()] && (_a19 = !0), !1 === _a19 ? "Identifier " + e.left.name + " has not been declared." : "");
              }

            case "ExpressionStatement":
              return "AssignmentExpression" === e.expression.type || e.expression.type, c(e.expression, t);

            case "Identifier":
              {
                var _a20 = e.name.toLowerCase();

                if (null !== t.localScope && void 0 !== t.localScope[_a20]) return "";
                n = void 0 !== t.globalScope[_a20] ? "" : S(e, "SYNTAX", "VARIABLENOTFOUND");
                break;
              }

            case "MemberExpression":
              return n = c(e.object, t), "" !== n ? n : !0 === e.computed ? c(e.property, t) : "";

            case "Literal":
            case "TemplateElement":
              return "";

            case "CallExpression":
              {
                if ("Identifier" !== e.callee.type) return S(e, "SYNTAX", "ONLYNODESSUPPORTED");
                n = "";

                for (var _a22 = 0; _a22 < e.arguments.length; _a22++) {
                  if (n = c(e.arguments[_a22], t), "" !== n) return n;
                }

                var _a21 = i(e.callee.name, e.arguments, t);

                -1 === _a21 && (n = S(e, "SYNTAX", "NOTFOUND")), -2 === _a21 && (n = S(e, "SYNTAX", "WRONGSIGNATURE"));
                break;
              }

            case "UnaryExpression":
              n = c(e.argument, t);
              break;

            case "BinaryExpression":
              return n = c(e.left, t), "" !== n ? n : (n = c(e.right, t), "" !== n ? n : "");

            case "LogicalExpression":
              return n = c(e.left, t), "" !== n ? n : "AssignmentExpression" === e.left.type || "UpdateExpression" === e.left.type ? S(e.left, "SYNTAX", "CANNOT_USE_ASSIGNMENT_IN_CONDITION") : (n = c(e.right, t), "" !== n ? n : "AssignmentExpression" === e.right.type || "UpdateExpression" === e.right.type ? S(e.right, "SYNTAX", "CANNOT_USE_ASSIGNMENT_IN_CONDITION") : "");

            case "ConditionalExpression":
              return S(e, "SYNTAX", "NOTSUPPORTED");

            case "ArrayExpression":
              n = "";

              for (var _a23 = 0; _a23 < e.elements.length; _a23++) {
                if (n = c(e.elements[_a23], t), "" !== n) return n;
              }

              return n;

            case "TemplateLiteral":
              n = "";

              for (var _a24 = 0; _a24 < e.quasis.length; _a24++) {
                if (n = c(e.quasis[_a24], t), "" !== n) return n;
              }

              for (var _a25 = 0; _a25 < e.expressions.length; _a25++) {
                if (n = c(e.expressions[_a25], t), "" !== n) return n;
              }

              return n;

            case "ObjectExpression":
              n = "";

              for (var _a26 = 0; _a26 < e.properties.length; _a26++) {
                if (n = "", null !== e.properties[_a26].key && ("Literal" !== e.properties[_a26].key.type && "Identifier" !== e.properties[_a26].key.type && (n = S(e, "SYNTAX", "OBJECTPROPERTYMUSTBESTRING")), "Literal" === e.properties[_a26].key.type)) {
                  var _t108 = e.properties[_a26].key,
                      _r64 = "value" in _t108 ? _t108.value : null;

                  "string" == typeof _r64 || _r64 instanceof String || (n = S(e, "SYNTAX", "OBJECTPROPERTYMUSTBESTRING"));
                }

                if ("" === n && (n = c(e.properties[_a26], t)), "" !== n) return n;
              }

              return n;

            case "Property":
              return "Literal" !== e.key.type && "Identifier" !== e.key.type ? S(e, "SYNTAX", "ONLYLITERAL") : ("Identifier" !== e.key.type && (n = c(e.key, t), "" !== n) || (n = c(e.value, t)), n);

            case "Program":
            case "FunctionExpression":
            case "NewExpression":
            case "DoWhileStatement":
            case "TemplateElement":
            default:
              return n;
          }

          return n;
        } catch (e) {
          throw e;
        }
      }

      function m(e, t) {
        var n = !1;
        var a = t.toLowerCase();
        return o(e, function (e) {
          return !n && ("Identifier" === e.type && e.name && e.name.toLowerCase() === a && (n = !0), !0);
        }), n;
      }

      function p(e, t) {
        var n = !1;
        var a = t.toLowerCase();
        return o(e, function (e) {
          return !n && ("CallExpression" !== e.type || "Identifier" !== e.callee.type || !e.callee.name || e.callee.name.toLowerCase() !== a || (n = !0, !1));
        }), n;
      }

      function u(e) {
        var t = [];
        return o(e, function (e) {
          return "MemberExpression" !== e.type || "Identifier" !== e.object.type || (!1 === e.computed && e.object && e.object.name && e.property && "Identifier" === e.property.type && e.property.name ? t.push(e.object.name.toLowerCase() + "." + e.property.name.toLowerCase()) : e.object && e.object.name && e.property && "Literal" === e.property.type && "string" == typeof e.property.value && t.push(e.object.name.toLowerCase() + "." + e.property.value.toString().toLowerCase()), !1);
        }), t;
      }

      function d(e, t) {
        var n = [];
        if (void 0 !== t.params && null !== t.params) for (var _e80 = 0; _e80 < t.params.length; _e80++) {
          n.push("any");
        }
        return {
          name: e,
          "return": "any",
          params: n
        };
      }

      function f(e, t) {
        var n = {
          globalScope: t.globalScope,
          localScope: {}
        };

        for (var _t109 = 0; _t109 < e.params.length; _t109++) {
          var _a27 = e.params[_t109].name;
          n.localScope[_a27.toLowerCase()] = {
            type: "any"
          };
        }

        return c(e.body, n);
      }

      function y(e, t, n, a) {
        var r = {};
        null == e && (e = {}), null == n && (n = {}), r.infinity = {
          type: "any"
        }, r.textformatting = {
          type: "any"
        }, r.pi = {
          type: "any"
        };

        for (var _e81 in t) {
          "sync" === a && void 0 !== t[_e81].min ? r[_e81] = {
            type: "FormulaFunction",
            signature: {
              min: t[_e81].min,
              max: t[_e81].max
            }
          } : "sync" !== a && void 0 !== t[_e81].fmin && (r[_e81] = {
            type: "FormulaFunction",
            signature: {
              min: t[_e81].fmin,
              max: t[_e81].fmax
            }
          });
        }

        for (var _e82 = 0; _e82 < n.length; _e82++) {
          var _t110 = n[_e82];
          r[_t110.name] = {
            type: "FormulaFunction",
            signature: _t110
          };
        }

        for (var _t111 in e) {
          r[_t111] = e[_t111], r[_t111].type = "any";
        }

        return r;
      }

      function N(t, n) {
        var a = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : "async";
        var r = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : e;
        var i = {
          globalScope: y(n.vars, r, n.customFunctions, a),
          localScope: null
        };
        return c(t.body[0].body, i);
      }

      function x(e) {
        return "BlockStatement" !== e.body[0].body.type ? "Invalid formula content." : l(e.body[0].body);
      }

      function S(e, t, n) {
        var a = "";

        switch (t) {
          case "SYNTAX":
            a = "Syntax Error: ";
            break;

          case "RUNTIME":
            a = "Runtime Error: ";
            break;

          default:
            a = "Syntax Error: ";
        }

        try {
          switch (e.type) {
            case "IfStatement":
              switch (n) {
                case "CANNOT_USE_ASSIGNMENT_IN_CONDITION":
                  a += " Assignments not be made in logical tests";
                  break;

                case "CANNOT_USE_NONBOOLEAN_IN_CONDITION":
                  a += " Non Boolean used as Condition";
              }

              break;

            case "UpdateExpression":
            case "AssignmentExpression":
              switch (n) {
                case "CANNOT_USE_ASSIGNMENT_IN_CONDITION":
                  a += " Assignments not be made in logical tests";
                  break;

                case "ASSIGNMENTTOVARSONLY":
                  a += " Assignments can only be made to identifiers";
              }

              break;

            case "ExpressionStatement":
              a += " Assignments can only be made to identifiers";
              break;

            case "FunctionDeclaration":
              switch (n) {
                case "GLOBALFUNCTIONSONLY":
                  a += " Functions cannot be declared as variables";
                  break;

                case "FUNCTIONMUSTHAVEIDENTIFIER":
                  a += " Function Definition must have an identifier";
              }

              break;

            case "VariableDeclaration":
              a += " Only 1 variable can be declared at a time";
              break;

            case "VariableDeclarator":
              switch (n) {
                case "FUNCTIONVARIABLEDECLARATOR":
                  a += " Functions cannot be declared as variables";
                  break;

                case "VARIABLEMUSTHAVEIDENTIFIER":
                  a += " Variable Definition must have an identifier";
              }

              break;

            case "Identifier":
              a += " Identifier Not Found. ", a += e.name;
              break;

            case "ObjectExpression":
              switch (n) {
                case "OBJECTPROPERTYMUSTBESTRING":
                  a += " Property name must be a string";
              }

              break;

            case "ForStatement":
              switch (n) {
                case "CANNOT_USE_NONBOOLEAN_IN_CONDITION":
                  a += " Non Boolean used as Condition";
              }

              break;

            case "ForInStatement":
              switch (n) {
                case "ONLY1VAR":
                  a += " Can only declare 1 var for use with IN";
                  break;

                case "CANNOTDECLAREVAL":
                  a += " Can only declare value for use with IN";
                  break;

                case "LEFTNOVAR":
                  a += "Must provide a variable to iterate with.";
                  break;

                case "VARIABLENOTDECLARED":
                  a += "Variable must be declared before it is used..";
                  break;

                case "CANNOTITERATETHISTYPE":
                  a += "This type cannot be used in an IN loop";
              }

              break;

            case "MemberExpression":
              switch (n) {
                case "PROPERTYNOTFOUND":
                  a += "Cannot find member property. ", a += !1 === e.computed && "Identifier" === e.property.type ? e.property.name : "";
                  break;

                case "OUTOFBOUNDS":
                  a += "Out of Bounds. ", a += !1 === e.computed && "Identifier" === e.property.type ? e.property.name : "";
                  break;

                case "NOTFOUND":
                  a += "Cannot call member method on null. ", a += !1 === e.computed && "Identifier" === e.property.type ? e.property.name : "";
                  break;

                case "INVALIDTYPE":
                  a += "Cannot call member property on object of this type. ", a += !1 === e.computed && "Identifier" === e.property.type ? e.property.name : "";
              }

              break;

            case "Property":
              switch (n) {
                case "ONLYLITERAL":
                  a += "Property names must be literals or identifiers";
              }

              break;

            case "Literal":
              break;

            case "CallExpression":
              switch (n) {
                case "WRONGSIGNATURE":
                  a += "Function signature does not match: ", a += "Identifier" === e.callee.type ? e.callee.name : "";
                  break;

                case "ONLYNODESUPPORTED":
                  a += "Functions must be declared.", a += "Identifier" === e.callee.type ? e.callee.name : "";
                  break;

                case "NOTAFUNCTION":
                  a += "Not a Function: ", a += "Identifier" === e.callee.type ? e.callee.name : "";
                  break;

                case "NOTFOUND":
                  a += "Function Not Found: " + ("Identifier" === e.callee.type ? e.callee.name : "");
              }

              break;

            case "UnaryExpression":
              switch (n) {
                case "NOTSUPPORTEDUNARYOPERATOR":
                  a += "Operator " + e.operator + " not allowed in this context. Only ! can be used with boolean, and - with a number";
                  break;

                case "NOTSUPPORTEDTYPE":
                  a += "Unary operator " + e.operator + " cannot be used with this argument.";
              }

            case "BinaryExpression":
              switch (n) {
                case "OPERATORNOTRECOGNISED":
                  a += "Binary Operator not recognised " + e.operator;
              }

              break;

            case "LogicalExpression":
              switch (n) {
                case "ONLYBOOLEAN":
                  a += "Operator " + e.operator + " cannot be used. Only || or && are allowed values";
                  break;

                case "ONLYORORAND":
                  a += "Logical Expression " + e.operator + " being applied to parameters that are not boolean.";
              }

              break;

            case "ConditionalExpression":
              a += "Conditional statements not supported.";
              break;

            case "ArrayExpression":
              switch (n) {
                case "FUNCTIONCONTEXTILLEGAL":
                  a += " Cannot Put Function inside Array.";
              }

              break;

            default:
              a += "Expression contains unrecognised code structures.";
          }
        } catch (e) {
          throw e;
        }

        return a;
      }

      function E(e, t, n) {
        return {
          line: e.loc.start.line,
          character: e.loc.start.column,
          reason: S(e, t, n)
        };
      }

      function T(e, t, n, a) {
        var r = {
          globalScope: t.globalScope,
          localScope: {}
        };

        for (var _t112 = 0; _t112 < e.params.length; _t112++) {
          var _n42 = e.params[_t112].name;
          r.localScope[_n42.toLowerCase()] = {
            type: "any"
          };
        }

        b(e.body, r, n, a, !1);
      }

      function b(e, t, n, a) {
        var r = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : !0;
        if (null === e) throw new Error("Unnexpexted Expression Syntax");
        var s = null;

        try {
          switch (e.type) {
            case "VariableDeclarator":
              return null !== e.init && "FunctionExpression" === e.init.type ? void a.push(E(e, "SYNTAX", "FUNCTIONVARIABLEDECLARATOR")) : ("Identifier" !== e.id.type ? a.push(E(e, "SYNTAX", "VARIABLEMUSTHAVEIDENTIFIER")) : (null !== t.localScope ? t.localScope[e.id.name.toLowerCase()] : t.globalScope[e.id.name.toLowerCase()], null === t.localScope ? t.globalScope[e.id.name.toLowerCase()] = {
                type: "any"
              } : t.localScope[e.id.name.toLowerCase()] = {
                type: "any"
              }), void (null !== e.init && b(e.init, t, n, a, r)));

            case "FunctionDeclaration":
              return !1 === r && a.push(E(e, "SYNTAX", "GLOBALFUNCTIONSONLY")), "Identifier" !== e.id.type && a.push(E(e, "SYNTAX", "FUNCTIONMUSTHAVEIDENTIFIER")), s = d("", e), T(e, t, n, a), null !== t.localScope && a.push(E(e, "SYNTAX", "GLOBALFUNCTIONSONLY")), s.isnative = !1, void ("Identifier" === e.id.type && (t.globalScope[e.id.name.toLowerCase()] = {
                type: "FormulaFunction",
                signature: [s]
              }));

            case "VariableDeclaration":
              for (var _i18 = 0; _i18 < e.declarations.length; _i18++) {
                b(e.declarations[_i18], t, n, a, r);
              }

              return;

            case "IfStatement":
              return null !== e.test && (b(e.test, t, n, a, r), "AssignmentExpression" !== e.test.type && "UpdateExpression" !== e.test.type || a.push(E(e.test, "SYNTAX", "CANNOT_USE_ASSIGNMENT_IN_CONDITION"))), null !== e.consequent && b(e.consequent, t, n, a, r), void (null !== e.alternate && b(e.alternate, t, n, a, r));

            case "EmptyStatement":
              return;

            case "BlockStatement":
              if (null !== e.body) for (var _i19 = 0; _i19 < e.body.length; _i19++) {
                b(e.body[_i19], t, n, a, r);
              }
              return;

            case "ReturnStatement":
              return void (null !== e.argument && b(e.argument, t, n, a, r));

            case "ForInStatement":
              return "VariableDeclaration" === e.left.type ? (e.left.declarations.length > 1 && a.push(E(e, "SYNTAX", "ONLY1VAR")), null !== e.left.declarations[0].init && a.push(E(e, "SYNTAX", "CANNOTDECLAREVAL"))) : "Identifier" !== e.left.type && a.push(E(e, "SYNTAX", "LEFTNOTVAR")), b(e.left, t, n, a, r), b(e.right, t, n, a, r), void b(e.body, t, n, a, r);

            case "ForStatement":
              return null !== e.init && b(e.init, t, n, a, r), null !== e.test && b(e.test, t, n, a, r), null !== e.body && b(e.body, t, n, a, r), void (null !== e.update && b(e.update, t, n, a, r));

            case "BreakStatement":
            case "ContinueStatement":
              return;

            case "UpdateExpression":
              if ("Identifier" !== e.argument.type && "MemberExpression" !== e.argument.type) a.push(E(e, "SYNTAX", "ASSIGNMENTTOVARSONLY"));else {
                if ("Identifier" === e.argument.type) {
                  var _r65 = !1;

                  !1 === n && (null !== t.localScope && void 0 !== t.localScope[e.argument.name.toLowerCase()] && (_r65 = !0), void 0 !== t.globalScope[e.argument.name.toLowerCase()] && (_r65 = !0), !1 === _r65 && a.push({
                    line: null === e ? 0 : e.loc.start.line,
                    character: null === e ? 0 : e.loc.start.column,
                    reason: "Identifier " + e.argument.name + " has not been declared."
                  }));
                }

                "MemberExpression" === e.argument.type && b(e.argument, t, n, a, r);
              }
              return;

            case "AssignmentExpression":
              {
                switch ("Identifier" !== e.left.type && "MemberExpression" !== e.left.type && a.push(E(e, "SYNTAX", "ASSIGNMENTTOVARSONLY")), e.operator) {
                  case "=":
                  case "/=":
                  case "*=":
                  case "%=":
                  case "+=":
                  case "-=":
                    break;

                  default:
                    a.push(E(e, "SYNTAX", "OPERATORNOTRECOGNISED"));
                }

                b(e.right, t, n, a, r);

                var _i20 = !1;

                return "Identifier" === e.left.type && (null !== t.localScope && void 0 !== t.localScope[e.left.name.toLowerCase()] && (_i20 = !0), void 0 !== t.globalScope[e.left.name.toLowerCase()] && (_i20 = !0), !1 === n && !1 === _i20 && a.push({
                  line: null === e ? 0 : e.loc.start.line,
                  character: null === e ? 0 : e.loc.start.column,
                  reason: "Identifier " + e.left.name + " has not been declared."
                })), void ("MemberExpression" === e.left.type && b(e.left, t, n, a, r));
              }

            case "ExpressionStatement":
              return "AssignmentExpression" === e.expression.type || e.expression.type, void b(e.expression, t, n, a, r);

            case "Identifier":
              {
                var _r66 = e.name.toLowerCase();

                if (null !== t.localScope && void 0 !== t.localScope[_r66]) return;
                if (void 0 !== t.globalScope[_r66]) return;
                !1 === n && a.push(E(e, "SYNTAX", "VARIABLENOTFOUND"));
                break;
              }

            case "MemberExpression":
              return b(e.object, t, n, a, r), void (!0 === e.computed && b(e.property, t, n, a, r));

            case "Literal":
            case "TemplateElement":
              return;

            case "CallExpression":
              "Identifier" !== e.callee.type && a.push(E(e, "SYNTAX", "ONLYNODESSUPPORTED"));

              for (var _i21 = 0; _i21 < e.arguments.length; _i21++) {
                b(e.arguments[_i21], t, n, a, r);
              }

              if ("Identifier" === e.callee.type) {
                var _r67 = i(e.callee.name, e.arguments, t);

                !1 === n && -1 === _r67 && a.push(E(e, "SYNTAX", "NOTFOUND")), -2 === _r67 && a.push(E(e, "SYNTAX", "WRONGSIGNATURE"));
              }

              return;

            case "UnaryExpression":
              return void b(e.argument, t, n, a, r);

            case "BinaryExpression":
              switch (b(e.left, t, n, a, r), b(e.right, t, n, a, r), e.operator) {
                case "==":
                case "!=":
                case "<":
                case "<=":
                case ">":
                case ">=":
                case "+":
                case "-":
                case "*":
                case "/":
                case "%":
                case "&":
                case "|":
                case "^":
                case "<<":
                case ">>":
                case ">>>":
                  break;

                default:
                  a.push(E(e, "SYNTAX", "OPERATORNOTRECOGNISED"));
              }

              return;

            case "LogicalExpression":
              switch (e.operator) {
                case "&&":
                case "||":
                  break;

                default:
                  a.push(E(e, "SYNTAX", "OPERATORNOTRECOGNISED"));
              }

              return b(e.left, t, n, a, r), "AssignmentExpression" !== e.left.type && "UpdateExpression" !== e.left.type || a.push(E(e, "SYNTAX", "CANNOT_USE_ASSIGNMENT_IN_CONDITION")), b(e.right, t, n, a, r), void ("AssignmentExpression" !== e.right.type && "UpdateExpression" !== e.right.type || a.push(E(e, "SYNTAX", "CANNOT_USE_ASSIGNMENT_IN_CONDITION")));

            case "ConditionalExpression":
              a.push(E(e, "SYNTAX", "NOTSUPPORTED"));
              break;

            case "ArrayExpression":
              for (var _i22 = 0; _i22 < e.elements.length; _i22++) {
                b(e.elements[_i22], t, n, a, r);
              }

              return;

            case "TemplateLiteral":
              for (var _i23 = 0; _i23 < e.quasis.length; _i23++) {
                b(e.quasis[_i23], t, n, a, r);
              }

              for (var _i24 = 0; _i24 < e.expressions.length; _i24++) {
                b(e.expressions[_i24], t, n, a, r);
              }

              return;

            case "ObjectExpression":
              for (var _i25 = 0; _i25 < e.properties.length; _i25++) {
                b(e.properties[_i25], t, n, a, r);
              }

              return;

            case "Property":
              return "Literal" !== e.key.type && "Identifier" !== e.key.type && a.push(E(e, "SYNTAX", "ONLYLITERAL")), "Literal" === e.key.type && b(e.key, t, n, a, r), void b(e.value, t, n, a, r);

            default:
              a.push(E(e, "SYNTAX", "UNRECOGNISED"));
          }

          return;
        } catch (t) {
          a.push({
            line: null === e ? 0 : e.loc.start.line,
            character: null === e ? 0 : e.loc.start.column,
            reason: "Unnexpected Syntax"
          });
        }
      }

      function O(t, n, a) {
        var r = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : "async";
        var i = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : e;
        var s = [];
        if ("BlockStatement" !== t.body[0].body.type) return [{
          line: 0,
          character: 0,
          reason: "Invalid Body"
        }];
        null == n && (n = {
          vars: {},
          customFunctions: []
        });
        var o = {
          globalScope: y(n.vars, i, n.customFunctions, r),
          localScope: null
        };

        try {
          b(t.body[0].body, o, a, s);
        } catch (e) {}

        return s;
      }

      function A(e) {
        var t = [];
        return o(e, function (e) {
          return "CallExpression" === e.type && "Identifier" === e.callee.type && t.push(e.callee.name.toLowerCase()), !0;
        }), t;
      }

      function g(e) {
        var a = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : [];
        var r = null;

        if (void 0 === e.usesFeatureSet) {
          null === r && (r = A(e)), e.usesFeatureSet = !1;

          for (var _n43 = 0; _n43 < r.length; _n43++) {
            t.indexOf(r[_n43]) > -1 && (e.usesFeatureSet = !0, e.isAsync = !0);
          }

          if (!1 === e.usesFeatureSet && a && a.length > 0) {
            var _iterator29 = _createForOfIteratorHelper(a),
                _step29;

            try {
              for (_iterator29.s(); !(_step29 = _iterator29.n()).done;) {
                var _t113 = _step29.value;

                if (m(e, _t113)) {
                  e.usesFeatureSet = !0, e.isAsync = !0;
                  break;
                }
              }
            } catch (err) {
              _iterator29.e(err);
            } finally {
              _iterator29.f();
            }
          }
        }

        if (void 0 === e.usesGeometry) {
          e.usesGeometry = !1, null === r && (r = A(e));

          for (var _t114 = 0; _t114 < r.length; _t114++) {
            n.indexOf(r[_t114]) > -1 && (e.usesGeometry = !0);
          }
        }
      }

      function I(e) {
        var n = A(e);

        for (var _e83 = 0; _e83 < n.length; _e83++) {
          if (t.indexOf(n[_e83]) > -1) return !0;
        }

        return !1;
      }
      /***/

    },

    /***/
    "kJip":
    /*!****************************************************************!*\
      !*** ./node_modules/@arcgis/core/arcade/ImmutablePathArray.js ***!
      \****************************************************************/

    /*! exports provided: default */

    /***/
    function kJip(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony import */


      var _ImmutableArray_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ./ImmutableArray.js */
      "qea6");
      /* harmony import */


      var _ImmutablePointArray_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./ImmutablePointArray.js */
      "Q2u5");
      /*
      All material copyright ESRI, All Rights Reserved, unless otherwise specified.
      See https://js.arcgis.com/4.18/esri/copyright.txt for details.
      */


      var h = /*#__PURE__*/function (_ImmutableArray_js__W2) {
        _inherits(h, _ImmutableArray_js__W2);

        var _super4 = _createSuper(h);

        function h(t, s, _h4, i, e) {
          var _this5;

          _classCallCheck(this, h);

          _this5 = _super4.call(this, t), _this5._lazyPath = [], _this5._hasZ = !1, _this5._hasM = !1, _this5._hasZ = _h4, _this5._hasM = i, _this5._spRef = s, _this5._cacheId = e;
          return _this5;
        }

        _createClass(h, [{
          key: "get",
          value: function get(t) {
            if (void 0 === this._lazyPath[t]) {
              var _h6 = this._elements[t];
              if (void 0 === _h6) return;
              this._lazyPath[t] = new _ImmutablePointArray_js__WEBPACK_IMPORTED_MODULE_1__["default"](_h6, this._spRef, this._hasZ, this._hasM, this._cacheId, t);
            }

            return this._lazyPath[t];
          }
        }, {
          key: "equalityTest",
          value: function equalityTest(t) {
            return t === this || null !== t && t instanceof h != !1 && t.getUniqueHash() === this.getUniqueHash();
          }
        }, {
          key: "getUniqueHash",
          value: function getUniqueHash() {
            return this._cacheId.toString();
          }
        }]);

        return h;
      }(_ImmutableArray_js__WEBPACK_IMPORTED_MODULE_0__["default"]);
      /* harmony default export */


      __webpack_exports__["default"] = h;
      /***/
    },

    /***/
    "kqd7":
    /*!******************************************************************!*\
      !*** ./node_modules/@arcgis/core/arcade/functions/fieldStats.js ***!
      \******************************************************************/

    /*! exports provided: calculateStat, decodeStatType */

    /***/
    function kqd7(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "calculateStat", function () {
        return i;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "decodeStatType", function () {
        return u;
      });
      /* harmony import */


      var _chunks_languageUtils_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ../../chunks/languageUtils.js */
      "idrm");
      /*
      All material copyright ESRI, All Rights Reserved, unless otherwise specified.
      See https://js.arcgis.com/4.18/esri/copyright.txt for details.
      */


      function s(e) {
        var t = 0;

        for (var n = 0; n < e.length; n++) {
          t += e[n];
        }

        return t / e.length;
      }

      function c(e) {
        var t = s(e);
        var n = 0;

        for (var r = 0; r < e.length; r++) {
          n += Math.pow(t - e[r], 2);
        }

        return n / e.length;
      }

      function u(e) {
        switch (e.toLowerCase()) {
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

      function i(u, i) {
        var o = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 1e3;

        switch (u.toLowerCase()) {
          case "distinct":
            return function (e, s) {
              var c = [],
                  u = {},
                  i = [];

              for (var _o17 = 0; _o17 < e.length; _o17++) {
                if (void 0 !== e[_o17] && null !== e[_o17] && e[_o17] !== _chunks_languageUtils_js__WEBPACK_IMPORTED_MODULE_0__["v"]) {
                  var t = e[_o17];
                  if (Object(_chunks_languageUtils_js__WEBPACK_IMPORTED_MODULE_0__["a"])(t) || Object(_chunks_languageUtils_js__WEBPACK_IMPORTED_MODULE_0__["b"])(t)) void 0 === u[t] && (c.push(t), u[t] = 1);else {
                    var _e84 = !1;

                    for (var n = 0; n < i.length; n++) {
                      !0 === Object(_chunks_languageUtils_js__WEBPACK_IMPORTED_MODULE_0__["n"])(i[n], t) && (_e84 = !0);
                    }

                    !1 === _e84 && (i.push(t), c.push(t));
                  }
                }

                if (c.length >= s && -1 !== s) return c;
              }

              return c;
            }(i, o);

          case "avg":
          case "mean":
            return s(Object(_chunks_languageUtils_js__WEBPACK_IMPORTED_MODULE_0__["P"])(i));

          case "min":
            return Math.min.apply(Math, Object(_chunks_languageUtils_js__WEBPACK_IMPORTED_MODULE_0__["P"])(i));

          case "sum":
            return function (e) {
              var t = 0;

              for (var n = 0; n < e.length; n++) {
                t += e[n];
              }

              return t;
            }(Object(_chunks_languageUtils_js__WEBPACK_IMPORTED_MODULE_0__["P"])(i));

          case "max":
            return Math.max.apply(Math, Object(_chunks_languageUtils_js__WEBPACK_IMPORTED_MODULE_0__["P"])(i));

          case "stdev":
          case "stddev":
            return Math.sqrt(c(Object(_chunks_languageUtils_js__WEBPACK_IMPORTED_MODULE_0__["P"])(i)));

          case "var":
          case "variance":
            return c(Object(_chunks_languageUtils_js__WEBPACK_IMPORTED_MODULE_0__["P"])(i));

          case "count":
            return i.length;
        }

        return 0;
      }
      /***/

    },

    /***/
    "lTJ/":
    /*!****************************************************!*\
      !*** ./node_modules/@arcgis/core/arcade/parser.js ***!
      \****************************************************/

    /*! exports provided: extractFieldLiterals, parseScript, referencesFunction, referencesMember, scriptCheck, validateScript */

    /***/
    function lTJ(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "extractFieldLiterals", function () {
        return a;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "parseScript", function () {
        return s;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "referencesFunction", function () {
        return h;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "referencesMember", function () {
        return d;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "scriptCheck", function () {
        return u;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "validateScript", function () {
        return f;
      });
      /* harmony import */


      var _treeAnalysis_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ./treeAnalysis.js */
      "k8am");
      /* harmony import */


      var _lib_esprima_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./lib/esprima.js */
      "yggp");
      /*
      All material copyright ESRI, All Rights Reserved, unless otherwise specified.
      See https://js.arcgis.com/4.18/esri/copyright.txt for details.
      */


      function s(r) {
        var o = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : [];
        var t = Object(_lib_esprima_js__WEBPACK_IMPORTED_MODULE_1__["parse"])("function _() { " + r + "\n}");
        if (null === t.body || void 0 === t.body) throw new Error("No formula provided.");
        if (0 === t.body.length) throw new Error("No formula provided.");
        if (0 === t.body.length) throw new Error("No formula provided.");
        if ("BlockStatement" !== t.body[0].body.type) throw new Error("Invalid formula content.");
        var i = Object(_treeAnalysis_js__WEBPACK_IMPORTED_MODULE_0__["validateLanguage"])(t);
        if ("" !== i) throw new Error(i);
        return Object(_treeAnalysis_js__WEBPACK_IMPORTED_MODULE_0__["findScriptDependencies"])(t, o), t;
      }

      function u(n, e, o, t, i) {
        var c = [],
            s = "function _() { \n".length - 1,
            u = "function _() { \n" + n + "\n}";

        try {
          var _n44 = Object(_lib_esprima_js__WEBPACK_IMPORTED_MODULE_1__["parse"])(u, {
            tolerant: !0,
            loc: !0,
            range: !0
          }),
              _a28 = _n44.errors;

          if (_a28.length > 0) for (var _n45 = 0; _n45 < _a28.length; _n45++) {
            c.push({
              line: _a28[_n45].lineNumber - 2,
              character: _a28[_n45].column,
              reason: _a28[_n45].description
            });
          }

          var _f3 = Object(_treeAnalysis_js__WEBPACK_IMPORTED_MODULE_0__["checkScript"])(_n44, e, o, t, i);

          for (var _n46 = 0; _n46 < _f3.length; _n46++) {
            _f3[_n46].line = _f3[_n46].line - 2, _f3[_n46].range && (_f3[_n46].range = [_f3[_n46][0] - s, _f3[_n46][1] - s]), _f3[_n46].loc && (_f3[_n46].loc.start.line = _f3[_n46].loc.start.line - 2, _f3[_n46].loc.end.line = _f3[_n46].loc.end.line - 2), c.push(_f3[_n46]);
          }
        } catch (n) {
          try {
            if ("Unexpected token }" === n.description) {
              var _e85 = u.split("\n").length;
              n.lineNumber === _e85 ? (n.index = u.length - 1, c.push({
                line: n.lineNumber - 4,
                character: n.column,
                reason: "Unexpected end of script"
              })) : (n.index = u.length - 1, c.push({
                line: n.lineNumber - 2,
                character: n.column,
                reason: "Unexpected end of script"
              }));
            } else c.push({
              line: n.lineNumber - 2,
              character: n.column,
              reason: n.description
            });
          } catch (n) {}
        }

        return c;
      }

      function a(n, e) {
        return Object(_treeAnalysis_js__WEBPACK_IMPORTED_MODULE_0__["findFieldLiterals"])(n);
      }

      function f(n, e, r) {
        return Object(_treeAnalysis_js__WEBPACK_IMPORTED_MODULE_0__["validateScript"])(n, e, r);
      }

      function d(n, e) {
        return Object(_treeAnalysis_js__WEBPACK_IMPORTED_MODULE_0__["referencesMember"])(n, e);
      }

      function h(n, e) {
        return Object(_treeAnalysis_js__WEBPACK_IMPORTED_MODULE_0__["referencesFunction"])(n, e);
      }
      /***/

    },

    /***/
    "mcjs":
    /*!********************************************************!*\
      !*** ./node_modules/@arcgis/core/arcade/lib/syntax.js ***!
      \********************************************************/

    /*! exports provided: Syntax */

    /***/
    function mcjs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "Syntax", function () {
        return e;
      });
      /*
      All material copyright ESRI, All Rights Reserved, unless otherwise specified.
      See https://js.arcgis.com/4.18/esri/copyright.txt for details.
      */


      var e = {
        AssignmentExpression: "AssignmentExpression",
        AssignmentPattern: "AssignmentPattern",
        ArrayExpression: "ArrayExpression",
        ArrayPattern: "ArrayPattern",
        BlockStatement: "BlockStatement",
        BinaryExpression: "BinaryExpression",
        BreakStatement: "BreakStatement",
        CallExpression: "CallExpression",
        ConditionalExpression: "ConditionalExpression",
        ContinueStatement: "ContinueStatement",
        EmptyStatement: "EmptyStatement",
        ExpressionStatement: "ExpressionStatement",
        ForStatement: "ForStatement",
        ForInStatement: "ForInStatement",
        FunctionDeclaration: "FunctionDeclaration",
        FunctionExpression: "FunctionExpression",
        Identifier: "Identifier",
        IfStatement: "IfStatement",
        Literal: "Literal",
        LogicalExpression: "LogicalExpression",
        MemberExpression: "MemberExpression",
        MethodDefinition: "MethodDefinition",
        ObjectExpression: "ObjectExpression",
        ObjectPattern: "ObjectPattern",
        Program: "Program",
        Property: "Property",
        ReturnStatement: "ReturnStatement",
        SequenceExpression: "SequenceExpression",
        TemplateElement: "TemplateElement",
        TemplateLiteral: "TemplateLiteral",
        UnaryExpression: "UnaryExpression",
        UpdateExpression: "UpdateExpression",
        VariableDeclaration: "VariableDeclaration",
        VariableDeclarator: "VariableDeclarator",
        WhileStatement: "WhileStatement"
      };
      /***/
    },

    /***/
    "p1a8":
    /*!*******************************************************!*\
      !*** ./node_modules/@arcgis/core/arcade/lib/nodes.js ***!
      \*******************************************************/

    /*! exports provided: ArrayExpression, ArrayPattern, AssignmentExpression, AssignmentPattern, BinaryExpression, BlockStatement, BreakStatement, CallExpression, ComputedMemberExpression, ConditionalExpression, ContinueStatement, EmptyStatement, ExpressionStatement, ForInStatement, ForStatement, FunctionDeclaration, FunctionExpression, Identifier, IfStatement, Literal, MethodDefinition, Module, ObjectExpression, ObjectPattern, Property, ReturnStatement, Script, SequenceExpression, StaticMemberExpression, TemplateElement, TemplateLiteral, UnaryExpression, UpdateExpression, VariableDeclaration, VariableDeclarator */

    /***/
    function p1a8(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ArrayExpression", function () {
        return s;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ArrayPattern", function () {
        return i;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "AssignmentExpression", function () {
        return e;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "AssignmentPattern", function () {
        return r;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "BinaryExpression", function () {
        return o;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "BlockStatement", function () {
        return c;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "BreakStatement", function () {
        return h;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "CallExpression", function () {
        return n;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ComputedMemberExpression", function () {
        return a;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ConditionalExpression", function () {
        return p;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ContinueStatement", function () {
        return l;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "EmptyStatement", function () {
        return u;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ExpressionStatement", function () {
        return y;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ForInStatement", function () {
        return m;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ForStatement", function () {
        return d;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "FunctionDeclaration", function () {
        return x;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "FunctionExpression", function () {
        return b;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "Identifier", function () {
        return E;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "IfStatement", function () {
        return g;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "Literal", function () {
        return f;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "MethodDefinition", function () {
        return S;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "Module", function () {
        return k;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ObjectExpression", function () {
        return P;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ObjectPattern", function () {
        return j;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "Property", function () {
        return q;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ReturnStatement", function () {
        return v;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "Script", function () {
        return A;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "SequenceExpression", function () {
        return D;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "StaticMemberExpression", function () {
        return F;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "TemplateElement", function () {
        return T;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "TemplateLiteral", function () {
        return B;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "UnaryExpression", function () {
        return C;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "UpdateExpression", function () {
        return I;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "VariableDeclaration", function () {
        return L;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "VariableDeclarator", function () {
        return M;
      });
      /* harmony import */


      var _syntax_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ./syntax.js */
      "mcjs");
      /*
      All material copyright ESRI, All Rights Reserved, unless otherwise specified.
      See https://js.arcgis.com/4.18/esri/copyright.txt for details.
      */


      var s = function s(_s24) {
        _classCallCheck(this, s);

        this.type = _syntax_js__WEBPACK_IMPORTED_MODULE_0__["Syntax"].ArrayExpression, this.elements = _s24;
      };

      var i = function i(s) {
        _classCallCheck(this, i);

        this.type = _syntax_js__WEBPACK_IMPORTED_MODULE_0__["Syntax"].ArrayPattern, this.elements = s;
      };

      var e = function e(s, i, _e86) {
        _classCallCheck(this, e);

        this.type = _syntax_js__WEBPACK_IMPORTED_MODULE_0__["Syntax"].AssignmentExpression, this.operator = s, this.left = i, this.right = _e86;
      };

      var r = function r(s, i) {
        _classCallCheck(this, r);

        this.type = _syntax_js__WEBPACK_IMPORTED_MODULE_0__["Syntax"].AssignmentPattern, this.left = s, this.right = i;
      };

      var o = function o(s, i, e) {
        _classCallCheck(this, o);

        var r = "||" === s || "&&" === s;
        this.type = r ? _syntax_js__WEBPACK_IMPORTED_MODULE_0__["Syntax"].LogicalExpression : _syntax_js__WEBPACK_IMPORTED_MODULE_0__["Syntax"].BinaryExpression, this.operator = s, this.left = i, this.right = e;
      };

      var c = function c(s) {
        _classCallCheck(this, c);

        this.type = _syntax_js__WEBPACK_IMPORTED_MODULE_0__["Syntax"].BlockStatement, this.body = s;
      };

      var h = function h(s) {
        _classCallCheck(this, h);

        this.type = _syntax_js__WEBPACK_IMPORTED_MODULE_0__["Syntax"].BreakStatement, this.label = s;
      };

      var n = function n(s, i) {
        _classCallCheck(this, n);

        this.type = _syntax_js__WEBPACK_IMPORTED_MODULE_0__["Syntax"].CallExpression, this.callee = s, this.arguments = i;
      };

      var a = function a(s, i) {
        _classCallCheck(this, a);

        this.type = _syntax_js__WEBPACK_IMPORTED_MODULE_0__["Syntax"].MemberExpression, this.computed = !0, this.object = s, this.property = i;
      };

      var p = function p(s, i, e) {
        _classCallCheck(this, p);

        this.type = _syntax_js__WEBPACK_IMPORTED_MODULE_0__["Syntax"].ConditionalExpression, this.test = s, this.consequent = i, this.alternate = e;
      };

      var l = function l(s) {
        _classCallCheck(this, l);

        this.type = _syntax_js__WEBPACK_IMPORTED_MODULE_0__["Syntax"].ContinueStatement, this.label = s;
      };

      var u = function u() {
        _classCallCheck(this, u);

        this.type = _syntax_js__WEBPACK_IMPORTED_MODULE_0__["Syntax"].EmptyStatement;
      };

      var y = function y(s) {
        _classCallCheck(this, y);

        this.type = _syntax_js__WEBPACK_IMPORTED_MODULE_0__["Syntax"].ExpressionStatement, this.expression = s;
      };

      var m = function m(s, i, e) {
        _classCallCheck(this, m);

        this.type = _syntax_js__WEBPACK_IMPORTED_MODULE_0__["Syntax"].ForInStatement, this.left = s, this.right = i, this.body = e, this.each = !1;
      };

      var d = function d(s, i, e, r) {
        _classCallCheck(this, d);

        this.type = _syntax_js__WEBPACK_IMPORTED_MODULE_0__["Syntax"].ForStatement, this.init = s, this.test = i, this.update = e, this.body = r;
      };

      var x = function x(s, i, e, r) {
        _classCallCheck(this, x);

        this.type = _syntax_js__WEBPACK_IMPORTED_MODULE_0__["Syntax"].FunctionDeclaration, this.id = s, this.params = i, this.body = e, this.generator = r, this.expression = !1, this.async = !1;
      };

      var b = function b(s, i, e, r) {
        _classCallCheck(this, b);

        this.type = _syntax_js__WEBPACK_IMPORTED_MODULE_0__["Syntax"].FunctionExpression, this.id = s, this.params = i, this.body = e, this.generator = r, this.expression = !1, this.async = !1;
      };

      var E = function E(s) {
        _classCallCheck(this, E);

        this.type = _syntax_js__WEBPACK_IMPORTED_MODULE_0__["Syntax"].Identifier, this.name = s;
      };

      var g = function g(s, i, e) {
        _classCallCheck(this, g);

        this.type = _syntax_js__WEBPACK_IMPORTED_MODULE_0__["Syntax"].IfStatement, this.test = s, this.consequent = i, this.alternate = e;
      };

      var f = function f(s, i) {
        _classCallCheck(this, f);

        this.type = _syntax_js__WEBPACK_IMPORTED_MODULE_0__["Syntax"].Literal, this.value = s, this.raw = i;
      };

      var S = function S(s, i, e, r, o) {
        _classCallCheck(this, S);

        this.type = _syntax_js__WEBPACK_IMPORTED_MODULE_0__["Syntax"].MethodDefinition, this.key = s, this.computed = i, this.value = e, this.kind = r, this["static"] = o;
      };

      var k = function k(s) {
        _classCallCheck(this, k);

        this.type = _syntax_js__WEBPACK_IMPORTED_MODULE_0__["Syntax"].Program, this.body = s, this.sourceType = "module";
      };

      var P = function P(s) {
        _classCallCheck(this, P);

        this.type = _syntax_js__WEBPACK_IMPORTED_MODULE_0__["Syntax"].ObjectExpression, this.properties = s;
      };

      var j = function j(s) {
        _classCallCheck(this, j);

        this.type = _syntax_js__WEBPACK_IMPORTED_MODULE_0__["Syntax"].ObjectPattern, this.properties = s;
      };

      var q = function q(s, i, e, r, o, c) {
        _classCallCheck(this, q);

        this.type = _syntax_js__WEBPACK_IMPORTED_MODULE_0__["Syntax"].Property, this.key = i, this.computed = e, this.value = r, this.kind = s, this.method = o, this.shorthand = c;
      };

      var v = function v(s) {
        _classCallCheck(this, v);

        this.type = _syntax_js__WEBPACK_IMPORTED_MODULE_0__["Syntax"].ReturnStatement, this.argument = s;
      };

      var A = function A(s) {
        _classCallCheck(this, A);

        this.type = _syntax_js__WEBPACK_IMPORTED_MODULE_0__["Syntax"].Program, this.body = s, this.sourceType = "script";
      };

      var D = function D(s) {
        _classCallCheck(this, D);

        this.type = _syntax_js__WEBPACK_IMPORTED_MODULE_0__["Syntax"].SequenceExpression, this.expressions = s;
      };

      var F = function F(s, i) {
        _classCallCheck(this, F);

        this.type = _syntax_js__WEBPACK_IMPORTED_MODULE_0__["Syntax"].MemberExpression, this.computed = !1, this.object = s, this.property = i;
      };

      var T = function T(s, i) {
        _classCallCheck(this, T);

        this.type = _syntax_js__WEBPACK_IMPORTED_MODULE_0__["Syntax"].TemplateElement, this.value = s, this.tail = i;
      };

      var B = function B(s, i) {
        _classCallCheck(this, B);

        this.type = _syntax_js__WEBPACK_IMPORTED_MODULE_0__["Syntax"].TemplateLiteral, this.quasis = s, this.expressions = i;
      };

      var C = function C(s, i) {
        _classCallCheck(this, C);

        this.type = _syntax_js__WEBPACK_IMPORTED_MODULE_0__["Syntax"].UnaryExpression, this.operator = s, this.argument = i, this.prefix = !0;
      };

      var I = function I(s, i, e) {
        _classCallCheck(this, I);

        this.type = _syntax_js__WEBPACK_IMPORTED_MODULE_0__["Syntax"].UpdateExpression, this.operator = s, this.argument = i, this.prefix = e;
      };

      var L = function L(s, i) {
        _classCallCheck(this, L);

        this.type = _syntax_js__WEBPACK_IMPORTED_MODULE_0__["Syntax"].VariableDeclaration, this.declarations = s, this.kind = i;
      };

      var M = function M(s, i) {
        _classCallCheck(this, M);

        this.type = _syntax_js__WEBPACK_IMPORTED_MODULE_0__["Syntax"].VariableDeclarator, this.id = s, this.init = i;
      };
      /***/

    },

    /***/
    "pqxT":
    /*!*************************************************************!*\
      !*** ./node_modules/@arcgis/core/arcade/FunctionWrapper.js ***!
      \*************************************************************/

    /*! exports provided: default */

    /***/
    function pqxT(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /*
      All material copyright ESRI, All Rights Reserved, unless otherwise specified.
      See https://js.arcgis.com/4.18/esri/copyright.txt for details.
      */

      /* harmony default export */


      __webpack_exports__["default"] = /*#__PURE__*/function () {
        function _class3(t, i) {
          _classCallCheck(this, _class3);

          this.definition = null, this.context = null, this.definition = t, this.context = i;
        }

        return _class3;
      }();
      /***/

    },

    /***/
    "qea6":
    /*!************************************************************!*\
      !*** ./node_modules/@arcgis/core/arcade/ImmutableArray.js ***!
      \************************************************************/

    /*! exports provided: default */

    /***/
    function qea6(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /*
      All material copyright ESRI, All Rights Reserved, unless otherwise specified.
      See https://js.arcgis.com/4.18/esri/copyright.txt for details.
      */

      /* harmony default export */


      __webpack_exports__["default"] = /*#__PURE__*/function () {
        function _class4() {
          var t = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];

          _classCallCheck(this, _class4);

          this._elements = t;
        }

        _createClass(_class4, [{
          key: "length",
          value: function length() {
            return this._elements.length;
          }
        }, {
          key: "get",
          value: function get(t) {
            return this._elements[t];
          }
        }, {
          key: "toArray",
          value: function toArray() {
            var t = [];

            for (var e = 0; e < this.length(); e++) {
              t.push(this.get(e));
            }

            return t;
          }
        }]);

        return _class4;
      }();
      /***/

    },

    /***/
    "trkH":
    /*!*****************************************************************!*\
      !*** ./node_modules/@arcgis/core/arcade/lib/comment-handler.js ***!
      \*****************************************************************/

    /*! exports provided: CommentHandler */

    /***/
    function trkH(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "CommentHandler", function () {
        return e;
      });
      /* harmony import */


      var _syntax_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ./syntax.js */
      "mcjs");
      /*
      All material copyright ESRI, All Rights Reserved, unless otherwise specified.
      See https://js.arcgis.com/4.18/esri/copyright.txt for details.
      */


      var e = /*#__PURE__*/function () {
        function e() {
          _classCallCheck(this, e);

          this.attach = !1, this.comments = [], this.stack = [], this.leading = [], this.trailing = [];
        }

        _createClass(e, [{
          key: "insertInnerComments",
          value: function insertInnerComments(_e87, n) {
            if (_e87.type === _syntax_js__WEBPACK_IMPORTED_MODULE_0__["Syntax"].BlockStatement && 0 === _e87.body.length) {
              var t = [];

              for (var _e95 = this.leading.length - 1; _e95 >= 0; --_e95) {
                var s = this.leading[_e95];
                n.end.offset >= s.start && (t.unshift(s.comment), this.leading.splice(_e95, 1), this.trailing.splice(_e95, 1));
              }

              t.length && (_e87.innerComments = t);
            }
          }
        }, {
          key: "findTrailingComments",
          value: function findTrailingComments(t) {
            var _e89 = [];

            if (this.trailing.length > 0) {
              for (var _n47 = this.trailing.length - 1; _n47 >= 0; --_n47) {
                var s = this.trailing[_n47];
                s.start >= t.end.offset && _e89.unshift(s.comment);
              }

              return this.trailing.length = 0, _e89;
            }

            var n = this.stack[this.stack.length - 1];

            if (n && n.node.trailingComments) {
              var _s25 = n.node.trailingComments[0];
              _s25 && _s25.range[0] >= t.end.offset && (_e89 = n.node.trailingComments, delete n.node.trailingComments);
            }

            return _e89;
          }
        }, {
          key: "findLeadingComments",
          value: function findLeadingComments(t) {
            var _e90 = [];
            var n;

            for (; this.stack.length > 0;) {
              var _e96 = this.stack[this.stack.length - 1];
              if (!(_e96 && _e96.start >= t.start.offset)) break;
              n = _e96.node, this.stack.pop();
            }

            if (n) {
              for (var s = (n.leadingComments ? n.leadingComments.length : 0) - 1; s >= 0; --s) {
                var i = n.leadingComments[s];
                i.range[1] <= t.start.offset && (_e90.unshift(i), n.leadingComments.splice(s, 1));
              }

              return n.leadingComments && 0 === n.leadingComments.length && delete n.leadingComments, _e90;
            }

            for (var _n48 = this.leading.length - 1; _n48 >= 0; --_n48) {
              var _s26 = this.leading[_n48];
              _s26.start <= t.start.offset && (_e90.unshift(_s26.comment), this.leading.splice(_n48, 1));
            }

            return _e90;
          }
        }, {
          key: "visitNode",
          value: function visitNode(_e92, n) {
            if (_e92.type === _syntax_js__WEBPACK_IMPORTED_MODULE_0__["Syntax"].Program && _e92.body.length > 0) return;
            this.insertInnerComments(_e92, n);
            var s = this.findTrailingComments(n),
                i = this.findLeadingComments(n);
            i.length > 0 && (_e92.leadingComments = i), s.length > 0 && (_e92.trailingComments = s), this.stack.push({
              node: _e92,
              start: n.start.offset
            });
          }
        }, {
          key: "visitComment",
          value: function visitComment(t, _e93) {
            var n = "L" === t.type[0] ? "Line" : "Block",
                s = {
              type: n,
              value: t.value
            };

            if (t.range && (s.range = t.range), t.loc && (s.loc = t.loc), this.comments.push(s), this.attach) {
              var _s27 = {
                comment: {
                  type: n,
                  value: t.value,
                  range: [_e93.start.offset, _e93.end.offset]
                },
                start: _e93.start.offset
              };
              t.loc && (_s27.comment.loc = t.loc), t.type = n, this.leading.push(_s27), this.trailing.push(_s27);
            }
          }
        }, {
          key: "visit",
          value: function visit(t, _e94) {
            "LineComment" === t.type || "BlockComment" === t.type ? this.visitComment(t, _e94) : this.attach && this.visitNode(t, _e94);
          }
        }]);

        return e;
      }();
      /***/

    },

    /***/
    "ve0I":
    /*!************************************************************!*\
      !*** ./node_modules/@arcgis/core/arcade/functions/date.js ***!
      \************************************************************/

    /*! exports provided: registerFunctions */

    /***/
    function ve0I(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "registerFunctions", function () {
        return f;
      });
      /* harmony import */


      var _chunks_languageUtils_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ../../chunks/languageUtils.js */
      "idrm");
      /*
      All material copyright ESRI, All Rights Reserved, unless otherwise specified.
      See https://js.arcgis.com/4.18/esri/copyright.txt for details.
      */


      function a(e) {
        var n = new Date(e.getTime()),
            t = n.getFullYear(),
            u = new Date(0);
        u.setFullYear(t + 1, 0, 4), u.setHours(0, 0, 0, 0);
        var r = i(u),
            s = new Date(0);
        s.setFullYear(t, 0, 4), s.setHours(0, 0, 0, 0);
        var o = i(s);
        return n.getTime() >= r.getTime() ? t + 1 : n.getTime() >= o.getTime() ? t : t - 1;
      }

      function i(e) {
        var n = new Date(e.getTime()),
            t = n.getDay(),
            u = (t < 1 ? 7 : 0) + t - 1;
        return n.setDate(n.getDate() - u), n.setHours(0, 0, 0, 0), n;
      }

      function l(e) {
        return null === e ? e : isNaN(e.getTime()) ? null : e;
      }

      function f(f, d) {
        f.today = function (n, t) {
          return d(n, t, function (n, t, u) {
            Object(_chunks_languageUtils_js__WEBPACK_IMPORTED_MODULE_0__["p"])(u, 0, 0);
            var r = new Date();
            return r.setHours(0, 0, 0, 0), r;
          });
        }, f.now = function (n, t) {
          return d(n, t, function (n, t, u) {
            Object(_chunks_languageUtils_js__WEBPACK_IMPORTED_MODULE_0__["p"])(u, 0, 0);
            return new Date();
          });
        }, f.timestamp = function (n, t) {
          return d(n, t, function (n, t, u) {
            Object(_chunks_languageUtils_js__WEBPACK_IMPORTED_MODULE_0__["p"])(u, 0, 0);
            var r = new Date();
            return r = new Date(r.getUTCFullYear(), r.getUTCMonth(), r.getUTCDate(), r.getUTCHours(), r.getUTCMinutes(), r.getUTCSeconds(), r.getUTCMilliseconds()), r;
          });
        }, f.toutc = function (t, u) {
          return d(t, u, function (t, u, r) {
            Object(_chunks_languageUtils_js__WEBPACK_IMPORTED_MODULE_0__["p"])(r, 1, 1);
            var s = Object(_chunks_languageUtils_js__WEBPACK_IMPORTED_MODULE_0__["g"])(r[0]);
            return null === s ? null : new Date(s.getUTCFullYear(), s.getUTCMonth(), s.getUTCDate(), s.getUTCHours(), s.getUTCMinutes(), s.getUTCSeconds(), s.getUTCMilliseconds());
          });
        }, f.tolocal = function (u, r) {
          return d(u, r, function (u, r, s) {
            Object(_chunks_languageUtils_js__WEBPACK_IMPORTED_MODULE_0__["p"])(s, 1, 1);
            var o = Object(_chunks_languageUtils_js__WEBPACK_IMPORTED_MODULE_0__["g"])(s[0]);
            return null === o ? null : _chunks_languageUtils_js__WEBPACK_IMPORTED_MODULE_0__["M"].Moment.utc([o.getFullYear(), o.getMonth(), o.getDate(), o.getHours(), o.getMinutes(), o.getSeconds(), o.getMilliseconds()]).toDate();
          });
        }, f.day = function (t, u) {
          return d(t, u, function (t, u, r) {
            Object(_chunks_languageUtils_js__WEBPACK_IMPORTED_MODULE_0__["p"])(r, 1, 1);
            var s = Object(_chunks_languageUtils_js__WEBPACK_IMPORTED_MODULE_0__["g"])(r[0]);
            return null === s ? NaN : s.getDate();
          });
        }, f.month = function (t, u) {
          return d(t, u, function (t, u, r) {
            Object(_chunks_languageUtils_js__WEBPACK_IMPORTED_MODULE_0__["p"])(r, 1, 1);
            var s = Object(_chunks_languageUtils_js__WEBPACK_IMPORTED_MODULE_0__["g"])(r[0]);
            return null === s ? NaN : s.getMonth();
          });
        }, f.year = function (t, u) {
          return d(t, u, function (t, u, r) {
            Object(_chunks_languageUtils_js__WEBPACK_IMPORTED_MODULE_0__["p"])(r, 1, 1);
            var s = Object(_chunks_languageUtils_js__WEBPACK_IMPORTED_MODULE_0__["g"])(r[0]);
            return null === s ? NaN : s.getFullYear();
          });
        }, f.hour = function (t, u) {
          return d(t, u, function (t, u, r) {
            Object(_chunks_languageUtils_js__WEBPACK_IMPORTED_MODULE_0__["p"])(r, 1, 1);
            var s = Object(_chunks_languageUtils_js__WEBPACK_IMPORTED_MODULE_0__["g"])(r[0]);
            return null === s ? NaN : s.getHours();
          });
        }, f.second = function (t, u) {
          return d(t, u, function (t, u, r) {
            Object(_chunks_languageUtils_js__WEBPACK_IMPORTED_MODULE_0__["p"])(r, 1, 1);
            var s = Object(_chunks_languageUtils_js__WEBPACK_IMPORTED_MODULE_0__["g"])(r[0]);
            return null === s ? NaN : s.getSeconds();
          });
        }, f.millisecond = function (t, u) {
          return d(t, u, function (t, u, r) {
            Object(_chunks_languageUtils_js__WEBPACK_IMPORTED_MODULE_0__["p"])(r, 1, 1);
            var s = Object(_chunks_languageUtils_js__WEBPACK_IMPORTED_MODULE_0__["g"])(r[0]);
            return null === s ? NaN : s.getMilliseconds();
          });
        }, f.minute = function (t, u) {
          return d(t, u, function (t, u, r) {
            Object(_chunks_languageUtils_js__WEBPACK_IMPORTED_MODULE_0__["p"])(r, 1, 1);
            var s = Object(_chunks_languageUtils_js__WEBPACK_IMPORTED_MODULE_0__["g"])(r[0]);
            return null === s ? NaN : s.getMinutes();
          });
        }, f.weekday = function (t, u) {
          return d(t, u, function (t, u, r) {
            Object(_chunks_languageUtils_js__WEBPACK_IMPORTED_MODULE_0__["p"])(r, 1, 1);
            var s = Object(_chunks_languageUtils_js__WEBPACK_IMPORTED_MODULE_0__["g"])(r[0]);
            return null === s ? NaN : s.getDay();
          });
        }, f.isoweekday = function (t, u) {
          return d(t, u, function (t, u, r) {
            Object(_chunks_languageUtils_js__WEBPACK_IMPORTED_MODULE_0__["p"])(r, 1, 1);
            var s = Object(_chunks_languageUtils_js__WEBPACK_IMPORTED_MODULE_0__["g"])(r[0]);
            if (null === s) return NaN;
            var o = s.getDay();
            return 0 === o && (o = 7), o;
          });
        }, f.isomonth = function (t, u) {
          return d(t, u, function (t, u, r) {
            Object(_chunks_languageUtils_js__WEBPACK_IMPORTED_MODULE_0__["p"])(r, 1, 1);
            var s = Object(_chunks_languageUtils_js__WEBPACK_IMPORTED_MODULE_0__["g"])(r[0]);
            return null === s ? NaN : s.getMonth() + 1;
          });
        }, f.isoweek = function (t, u) {
          return d(t, u, function (t, u, r) {
            Object(_chunks_languageUtils_js__WEBPACK_IMPORTED_MODULE_0__["p"])(r, 1, 1);
            var s = Object(_chunks_languageUtils_js__WEBPACK_IMPORTED_MODULE_0__["g"])(r[0]);
            if (null === s) return NaN;

            var o = i(s).getTime() - function (e) {
              var n = a(e),
                  t = new Date(0);
              return t.setFullYear(n, 0, 4), t.setHours(0, 0, 0, 0), i(t);
            }(s).getTime();

            return Math.round(o / 6048e5) + 1;
          });
        }, f.isoyear = function (t, u) {
          return d(t, u, function (t, u, r) {
            Object(_chunks_languageUtils_js__WEBPACK_IMPORTED_MODULE_0__["p"])(r, 1, 1);
            var s = Object(_chunks_languageUtils_js__WEBPACK_IMPORTED_MODULE_0__["g"])(r[0]);
            return null === s ? NaN : a(s);
          });
        }, f.date = function (c, a) {
          return d(c, a, function (c, a, i) {
            if (Object(_chunks_languageUtils_js__WEBPACK_IMPORTED_MODULE_0__["p"])(i, 0, 7), 3 === i.length) return l(new Date(Object(_chunks_languageUtils_js__WEBPACK_IMPORTED_MODULE_0__["c"])(i[0]), Object(_chunks_languageUtils_js__WEBPACK_IMPORTED_MODULE_0__["c"])(i[1]), Object(_chunks_languageUtils_js__WEBPACK_IMPORTED_MODULE_0__["c"])(i[2]), 0, 0, 0, 0));
            if (4 === i.length) return l(new Date(Object(_chunks_languageUtils_js__WEBPACK_IMPORTED_MODULE_0__["c"])(i[0]), Object(_chunks_languageUtils_js__WEBPACK_IMPORTED_MODULE_0__["c"])(i[1]), Object(_chunks_languageUtils_js__WEBPACK_IMPORTED_MODULE_0__["c"])(i[2]), Object(_chunks_languageUtils_js__WEBPACK_IMPORTED_MODULE_0__["c"])(i[3]), 0, 0, 0));
            if (5 === i.length) return l(new Date(Object(_chunks_languageUtils_js__WEBPACK_IMPORTED_MODULE_0__["c"])(i[0]), Object(_chunks_languageUtils_js__WEBPACK_IMPORTED_MODULE_0__["c"])(i[1]), Object(_chunks_languageUtils_js__WEBPACK_IMPORTED_MODULE_0__["c"])(i[2]), Object(_chunks_languageUtils_js__WEBPACK_IMPORTED_MODULE_0__["c"])(i[3]), Object(_chunks_languageUtils_js__WEBPACK_IMPORTED_MODULE_0__["c"])(i[4]), 0, 0));
            if (6 === i.length) return l(new Date(Object(_chunks_languageUtils_js__WEBPACK_IMPORTED_MODULE_0__["c"])(i[0]), Object(_chunks_languageUtils_js__WEBPACK_IMPORTED_MODULE_0__["c"])(i[1]), Object(_chunks_languageUtils_js__WEBPACK_IMPORTED_MODULE_0__["c"])(i[2]), Object(_chunks_languageUtils_js__WEBPACK_IMPORTED_MODULE_0__["c"])(i[3]), Object(_chunks_languageUtils_js__WEBPACK_IMPORTED_MODULE_0__["c"])(i[4]), Object(_chunks_languageUtils_js__WEBPACK_IMPORTED_MODULE_0__["c"])(i[5]), 0));
            if (7 === i.length) return l(new Date(Object(_chunks_languageUtils_js__WEBPACK_IMPORTED_MODULE_0__["c"])(i[0]), Object(_chunks_languageUtils_js__WEBPACK_IMPORTED_MODULE_0__["c"])(i[1]), Object(_chunks_languageUtils_js__WEBPACK_IMPORTED_MODULE_0__["c"])(i[2]), Object(_chunks_languageUtils_js__WEBPACK_IMPORTED_MODULE_0__["c"])(i[3]), Object(_chunks_languageUtils_js__WEBPACK_IMPORTED_MODULE_0__["c"])(i[4]), Object(_chunks_languageUtils_js__WEBPACK_IMPORTED_MODULE_0__["c"])(i[5]), Object(_chunks_languageUtils_js__WEBPACK_IMPORTED_MODULE_0__["c"])(i[6])));

            if (2 === i.length) {
              var e = Object(_chunks_languageUtils_js__WEBPACK_IMPORTED_MODULE_0__["e"])(i[1]);
              if ("" === e) return null;
              e = Object(_chunks_languageUtils_js__WEBPACK_IMPORTED_MODULE_0__["D"])(e);

              var n = _chunks_languageUtils_js__WEBPACK_IMPORTED_MODULE_0__["M"].Moment(Object(_chunks_languageUtils_js__WEBPACK_IMPORTED_MODULE_0__["e"])(i[0]), e, !0);

              return !0 === n.isValid() ? n.toDate() : null;
            }

            if (1 === i.length) {
              if (Object(_chunks_languageUtils_js__WEBPACK_IMPORTED_MODULE_0__["b"])(i[0])) {
                if ("" === i[0].replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g, "")) return null;
                if (!0 === /^[0-9][0-9][0-9][0-9]$/.test(i[0])) return Object(_chunks_languageUtils_js__WEBPACK_IMPORTED_MODULE_0__["g"])(i[0] + "-01-01");
              }

              var _e97 = Object(_chunks_languageUtils_js__WEBPACK_IMPORTED_MODULE_0__["c"])(i[0]);

              if (!1 === isNaN(_e97)) return l(new Date(_e97));
              return Object(_chunks_languageUtils_js__WEBPACK_IMPORTED_MODULE_0__["g"])(i[0]);
            }

            return 0 === i.length ? new Date() : void 0;
          });
        }, f.datediff = function (n, t) {
          return d(n, t, function (n, t, u) {
            Object(_chunks_languageUtils_js__WEBPACK_IMPORTED_MODULE_0__["p"])(u, 2, 3);
            var s = Object(_chunks_languageUtils_js__WEBPACK_IMPORTED_MODULE_0__["E"])(u[0]),
                o = Object(_chunks_languageUtils_js__WEBPACK_IMPORTED_MODULE_0__["E"])(u[1]);
            if (null === s || null === o) return NaN;

            switch (Object(_chunks_languageUtils_js__WEBPACK_IMPORTED_MODULE_0__["e"])(u[2]).toLowerCase()) {
              case "days":
              case "day":
              case "d":
                return s.diff(o, "days", !0);

              case "months":
              case "month":
                return s.diff(o, "months", !0);

              case "minutes":
              case "minute":
              case "m":
                return "M" === u[2] ? s.diff(o, "months", !0) : s.diff(o, "minutes", !0);

              case "seconds":
              case "second":
              case "s":
                return s.diff(o, "seconds", !0);

              case "milliseconds":
              case "millisecond":
              case "ms":
                return s.diff(o);

              case "hours":
              case "hour":
              case "h":
                return s.diff(o, "hours", !0);

              case "years":
              case "year":
              case "y":
                return s.diff(o, "years", !0);

              default:
                return s.diff(o);
            }
          });
        }, f.dateadd = function (n, t) {
          return d(n, t, function (n, t, s) {
            Object(_chunks_languageUtils_js__WEBPACK_IMPORTED_MODULE_0__["p"])(s, 2, 3);
            var o = Object(_chunks_languageUtils_js__WEBPACK_IMPORTED_MODULE_0__["E"])(s[0]);
            if (null === o) return null;
            var a = "milliseconds";

            switch (Object(_chunks_languageUtils_js__WEBPACK_IMPORTED_MODULE_0__["e"])(s[2]).toLowerCase()) {
              case "days":
              case "day":
              case "d":
                a = "days";
                break;

              case "months":
              case "month":
                a = "months";
                break;

              case "minutes":
              case "minute":
              case "m":
                a = "M" === s[2] ? "months" : "minutes";
                break;

              case "seconds":
              case "second":
              case "s":
                a = "seconds";
                break;

              case "milliseconds":
              case "millisecond":
              case "ms":
                a = "milliseconds";
                break;

              case "hours":
              case "hour":
              case "h":
                a = "hours";
                break;

              case "years":
              case "year":
              case "y":
                a = "years";
            }

            return o.add(Object(_chunks_languageUtils_js__WEBPACK_IMPORTED_MODULE_0__["c"])(s[1]), a), o.toDate();
          });
        };
      }
      /***/

    },

    /***/
    "yBFI":
    /*!*************************************************************!*\
      !*** ./node_modules/@arcgis/core/arcade/functions/maths.js ***!
      \*************************************************************/

    /*! exports provided: registerFunctions */

    /***/
    function yBFI(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "registerFunctions", function () {
        return N;
      });
      /* harmony import */


      var _core_number_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ../../core/number.js */
      "cBWO");
      /* harmony import */


      var _chunks_languageUtils_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ../../chunks/languageUtils.js */
      "idrm");
      /*
      All material copyright ESRI, All Rights Reserved, unless otherwise specified.
      See https://js.arcgis.com/4.18/esri/copyright.txt for details.
      */


      function l(n, t, r) {
        return void 0 === r || 0 == +r ? Math[n](t) : (t = +t, r = +r, isNaN(t) || "number" != typeof r || r % 1 != 0 ? NaN : (t = t.toString().split("e"), +((t = (t = Math[n](+(t[0] + "e" + (t[1] ? +t[1] - r : -r)))).toString().split("e"))[0] + "e" + (t[1] ? +t[1] + r : r))));
      }

      function N(N, h) {
        function m(n, t, r) {
          var u = Object(_chunks_languageUtils_js__WEBPACK_IMPORTED_MODULE_1__["c"])(n);
          return isNaN(u) ? u : isNaN(t) || isNaN(r) || t > r ? NaN : u < t ? t : u > r ? r : u;
        }

        N.number = function (a, c) {
          return h(a, c, function (a, c, s) {
            Object(_chunks_languageUtils_js__WEBPACK_IMPORTED_MODULE_1__["p"])(s, 1, 2);
            var l = s[0];
            if (Object(_chunks_languageUtils_js__WEBPACK_IMPORTED_MODULE_1__["a"])(l)) return l;
            if (null === l) return 0;
            if (Object(_chunks_languageUtils_js__WEBPACK_IMPORTED_MODULE_1__["f"])(l)) return Number(l);
            if (Object(_chunks_languageUtils_js__WEBPACK_IMPORTED_MODULE_1__["i"])(l)) return Number(l);
            if (Object(_chunks_languageUtils_js__WEBPACK_IMPORTED_MODULE_1__["h"])(l)) return NaN;
            if ("" === l) return Number(l);
            if (void 0 === l) return Number(l);

            if (Object(_chunks_languageUtils_js__WEBPACK_IMPORTED_MODULE_1__["b"])(l)) {
              if (void 0 !== s[1]) {
                var t = Object(_chunks_languageUtils_js__WEBPACK_IMPORTED_MODULE_1__["G"])(s[1], "‰", "");
                return t = Object(_chunks_languageUtils_js__WEBPACK_IMPORTED_MODULE_1__["G"])(t, "¤", ""), Object(_core_number_js__WEBPACK_IMPORTED_MODULE_0__["parse"])(l, {
                  pattern: t
                });
              }

              return Number(l.trim());
            }

            return Number(l);
          });
        }, N.abs = function (n, r) {
          return h(n, r, function (n, r, u) {
            return Object(_chunks_languageUtils_js__WEBPACK_IMPORTED_MODULE_1__["p"])(u, 1, 1), Math.abs(Object(_chunks_languageUtils_js__WEBPACK_IMPORTED_MODULE_1__["c"])(u[0]));
          });
        }, N.acos = function (n, r) {
          return h(n, r, function (n, r, u) {
            return Object(_chunks_languageUtils_js__WEBPACK_IMPORTED_MODULE_1__["p"])(u, 1, 1), Math.acos(Object(_chunks_languageUtils_js__WEBPACK_IMPORTED_MODULE_1__["c"])(u[0]));
          });
        }, N.asin = function (n, r) {
          return h(n, r, function (n, r, u) {
            return Object(_chunks_languageUtils_js__WEBPACK_IMPORTED_MODULE_1__["p"])(u, 1, 1), Math.asin(Object(_chunks_languageUtils_js__WEBPACK_IMPORTED_MODULE_1__["c"])(u[0]));
          });
        }, N.atan = function (n, r) {
          return h(n, r, function (n, r, u) {
            return Object(_chunks_languageUtils_js__WEBPACK_IMPORTED_MODULE_1__["p"])(u, 1, 1), Math.atan(Object(_chunks_languageUtils_js__WEBPACK_IMPORTED_MODULE_1__["c"])(u[0]));
          });
        }, N.atan2 = function (n, r) {
          return h(n, r, function (n, r, u) {
            return Object(_chunks_languageUtils_js__WEBPACK_IMPORTED_MODULE_1__["p"])(u, 2, 2), Math.atan2(Object(_chunks_languageUtils_js__WEBPACK_IMPORTED_MODULE_1__["c"])(u[0]), Object(_chunks_languageUtils_js__WEBPACK_IMPORTED_MODULE_1__["c"])(u[1]));
          });
        }, N.ceil = function (n, r) {
          return h(n, r, function (n, r, u) {
            if (Object(_chunks_languageUtils_js__WEBPACK_IMPORTED_MODULE_1__["p"])(u, 1, 2), 2 === u.length) {
              var _n49 = Object(_chunks_languageUtils_js__WEBPACK_IMPORTED_MODULE_1__["c"])(u[1]);

              return isNaN(_n49) && (_n49 = 0), l("ceil", Object(_chunks_languageUtils_js__WEBPACK_IMPORTED_MODULE_1__["c"])(u[0]), -1 * _n49);
            }

            return Math.ceil(Object(_chunks_languageUtils_js__WEBPACK_IMPORTED_MODULE_1__["c"])(u[0]));
          });
        }, N.round = function (n, r) {
          return h(n, r, function (n, r, u) {
            if (Object(_chunks_languageUtils_js__WEBPACK_IMPORTED_MODULE_1__["p"])(u, 1, 2), 2 === u.length) {
              var _n50 = Object(_chunks_languageUtils_js__WEBPACK_IMPORTED_MODULE_1__["c"])(u[1]);

              return isNaN(_n50) && (_n50 = 0), l("round", Object(_chunks_languageUtils_js__WEBPACK_IMPORTED_MODULE_1__["c"])(u[0]), -1 * _n50);
            }

            return Math.round(Object(_chunks_languageUtils_js__WEBPACK_IMPORTED_MODULE_1__["c"])(u[0]));
          });
        }, N.floor = function (n, r) {
          return h(n, r, function (n, r, u) {
            if (Object(_chunks_languageUtils_js__WEBPACK_IMPORTED_MODULE_1__["p"])(u, 1, 2), 2 === u.length) {
              var _n51 = Object(_chunks_languageUtils_js__WEBPACK_IMPORTED_MODULE_1__["c"])(u[1]);

              return isNaN(_n51) && (_n51 = 0), l("floor", Object(_chunks_languageUtils_js__WEBPACK_IMPORTED_MODULE_1__["c"])(u[0]), -1 * _n51);
            }

            return Math.floor(Object(_chunks_languageUtils_js__WEBPACK_IMPORTED_MODULE_1__["c"])(u[0]));
          });
        }, N.cos = function (n, r) {
          return h(n, r, function (n, r, u) {
            return Object(_chunks_languageUtils_js__WEBPACK_IMPORTED_MODULE_1__["p"])(u, 1, 1), Math.cos(Object(_chunks_languageUtils_js__WEBPACK_IMPORTED_MODULE_1__["c"])(u[0]));
          });
        }, N.isnan = function (n, r) {
          return h(n, r, function (n, r, u) {
            return Object(_chunks_languageUtils_js__WEBPACK_IMPORTED_MODULE_1__["p"])(u, 1, 1), "number" == typeof u[0] && isNaN(u[0]);
          });
        }, N.exp = function (n, r) {
          return h(n, r, function (n, r, u) {
            return Object(_chunks_languageUtils_js__WEBPACK_IMPORTED_MODULE_1__["p"])(u, 1, 1), Math.exp(Object(_chunks_languageUtils_js__WEBPACK_IMPORTED_MODULE_1__["c"])(u[0]));
          });
        }, N.log = function (n, r) {
          return h(n, r, function (n, r, u) {
            return Object(_chunks_languageUtils_js__WEBPACK_IMPORTED_MODULE_1__["p"])(u, 1, 1), Math.log(Object(_chunks_languageUtils_js__WEBPACK_IMPORTED_MODULE_1__["c"])(u[0]));
          });
        }, N.pow = function (n, r) {
          return h(n, r, function (n, r, u) {
            return Object(_chunks_languageUtils_js__WEBPACK_IMPORTED_MODULE_1__["p"])(u, 2, 2), Math.pow(Object(_chunks_languageUtils_js__WEBPACK_IMPORTED_MODULE_1__["c"])(u[0]), Object(_chunks_languageUtils_js__WEBPACK_IMPORTED_MODULE_1__["c"])(u[1]));
          });
        }, N.random = function (n, r) {
          return h(n, r, function (n, r, u) {
            return Object(_chunks_languageUtils_js__WEBPACK_IMPORTED_MODULE_1__["p"])(u, 0, 0), Math.random();
          });
        }, N.sin = function (n, r) {
          return h(n, r, function (n, r, u) {
            return Object(_chunks_languageUtils_js__WEBPACK_IMPORTED_MODULE_1__["p"])(u, 1, 1), Math.sin(Object(_chunks_languageUtils_js__WEBPACK_IMPORTED_MODULE_1__["c"])(u[0]));
          });
        }, N.sqrt = function (n, r) {
          return h(n, r, function (n, r, u) {
            return Object(_chunks_languageUtils_js__WEBPACK_IMPORTED_MODULE_1__["p"])(u, 1, 1), Math.sqrt(Object(_chunks_languageUtils_js__WEBPACK_IMPORTED_MODULE_1__["c"])(u[0]));
          });
        }, N.tan = function (n, r) {
          return h(n, r, function (n, r, u) {
            return Object(_chunks_languageUtils_js__WEBPACK_IMPORTED_MODULE_1__["p"])(u, 1, 1), Math.tan(Object(_chunks_languageUtils_js__WEBPACK_IMPORTED_MODULE_1__["c"])(u[0]));
          });
        }, N.defaultvalue = function (n, r) {
          return h(n, r, function (n, r, u) {
            return Object(_chunks_languageUtils_js__WEBPACK_IMPORTED_MODULE_1__["p"])(u, 2, 2), null === u[0] || "" === u[0] || void 0 === u[0] ? u[1] : u[0];
          });
        }, N.isempty = function (n, r) {
          return h(n, r, function (n, r, u) {
            return Object(_chunks_languageUtils_js__WEBPACK_IMPORTED_MODULE_1__["p"])(u, 1, 1), null === u[0] || "" === u[0] || void 0 === u[0];
          });
        }, N["boolean"] = function (n, r) {
          return h(n, r, function (n, r, u) {
            Object(_chunks_languageUtils_js__WEBPACK_IMPORTED_MODULE_1__["p"])(u, 1, 1);
            var e = u[0];
            return Object(_chunks_languageUtils_js__WEBPACK_IMPORTED_MODULE_1__["d"])(e);
          });
        }, N.constrain = function (n, r) {
          return h(n, r, function (n, r, u) {
            Object(_chunks_languageUtils_js__WEBPACK_IMPORTED_MODULE_1__["p"])(u, 3, 3);
            var e = Object(_chunks_languageUtils_js__WEBPACK_IMPORTED_MODULE_1__["c"])(u[1]),
                i = Object(_chunks_languageUtils_js__WEBPACK_IMPORTED_MODULE_1__["c"])(u[2]);

            if (Object(_chunks_languageUtils_js__WEBPACK_IMPORTED_MODULE_1__["h"])(u[0])) {
              var _n52 = [];

              var _iterator30 = _createForOfIteratorHelper(u[0]),
                  _step30;

              try {
                for (_iterator30.s(); !(_step30 = _iterator30.n()).done;) {
                  var t = _step30.value;

                  _n52.push(m(t, e, i));
                }
              } catch (err) {
                _iterator30.e(err);
              } finally {
                _iterator30.f();
              }

              return _n52;
            }

            if (Object(_chunks_languageUtils_js__WEBPACK_IMPORTED_MODULE_1__["o"])(u[0])) {
              var _n53 = [];

              for (var _t115 = 0; _t115 < u[0].length(); _t115++) {
                _n53.push(m(u[0].get(_t115), e, i));
              }

              return _n53;
            }

            return m(u[0], e, i);
          });
        };
      }
      /***/

    },

    /***/
    "yggp":
    /*!*********************************************************!*\
      !*** ./node_modules/@arcgis/core/arcade/lib/esprima.js ***!
      \*********************************************************/

    /*! exports provided: Syntax, parse, parseScript, tokenize, version */

    /***/
    function yggp(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "parse", function () {
        return r;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "parseScript", function () {
        return n;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "tokenize", function () {
        return c;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "version", function () {
        return s;
      });
      /* harmony import */


      var _syntax_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ./syntax.js */
      "mcjs");
      /* harmony reexport (safe) */


      __webpack_require__.d(__webpack_exports__, "Syntax", function () {
        return _syntax_js__WEBPACK_IMPORTED_MODULE_0__["Syntax"];
      });
      /* harmony import */


      var _comment_handler_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./comment-handler.js */
      "trkH");
      /* harmony import */


      var _parser_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./parser.js */
      "ema0");
      /* harmony import */


      var _tokenizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./tokenizer.js */
      "3F7n");
      /*
      All material copyright ESRI, All Rights Reserved, unless otherwise specified.
      See https://js.arcgis.com/4.18/esri/copyright.txt for details.
      */


      function r(o, r, n) {
        var c = null;

        var s = function s(t, e) {
          n && n(t, e), c && c.visit(t, e);
        };

        var m,
            a = "function" == typeof n ? s : null,
            f = !1;

        if (r) {
          f = "boolean" == typeof r.comment && r.comment;
          var e = "boolean" == typeof r.attachComment && r.attachComment;
          (f || e) && (c = new _comment_handler_js__WEBPACK_IMPORTED_MODULE_1__["CommentHandler"](), c.attach = e, r.comment = !0, a = s);
        }

        m = new _parser_js__WEBPACK_IMPORTED_MODULE_2__["Parser"](o, r, a);
        var i = m.parseScript();
        return f && c && (i.comments = c.comments), m.config.tokens && (i.tokens = m.tokens), m.config.tolerant && (i.errors = m.errorHandler.errors), i;
      }

      function n(t, e, o) {
        var n = e || {};
        return n.sourceType = "script", r(t, n, o);
      }

      function c(t, e, r) {
        var n = new _tokenizer_js__WEBPACK_IMPORTED_MODULE_3__["Tokenizer"](t, e),
            c = [];

        try {
          for (;;) {
            var _t116 = n.getNextToken();

            if (!_t116) break;
            r && (_t116 = r(_t116)), c.push(_t116);
          }
        } catch (t) {
          n.errorHandler.tolerate(t);
        }

        return n.errorHandler.tolerant && (c.errors = n.errors()), c;
      }

      var s = "4.0.0-dev";
      /***/
    }
  }]);
})();
//# sourceMappingURL=arcadeUtils-js-es5.js.map