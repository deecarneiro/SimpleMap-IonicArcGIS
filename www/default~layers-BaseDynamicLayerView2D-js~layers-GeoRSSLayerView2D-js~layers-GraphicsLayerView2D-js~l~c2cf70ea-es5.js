(function () {
  function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

  function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

  function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  function _createForOfIteratorHelper(o, allowArrayLike) { var it; if (typeof Symbol === "undefined" || o[Symbol.iterator] == null) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e11) { throw _e11; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = o[Symbol.iterator](); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e12) { didErr = true; err = _e12; }, f: function f() { try { if (!normalCompletion && it["return"] != null) it["return"](); } finally { if (didErr) throw err; } } }; }

  function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

  function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["default~layers-BaseDynamicLayerView2D-js~layers-GeoRSSLayerView2D-js~layers-GraphicsLayerView2D-js~l~c2cf70ea"], {
    /***/
    "0bwe":
    /*!*******************************************************************!*\
      !*** ./node_modules/@arcgis/core/views/webgl/ShaderTranspiler.js ***!
      \*******************************************************************/

    /*! exports provided: transpileShader */

    /***/
    function bwe(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "transpileShader", function () {
        return h;
      });
      /* harmony import */


      var _reservedWordsGLSL3_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ./reservedWordsGLSL3.js */
      "g9fX");
      /* harmony import */


      var _chunks_builtins_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ../../chunks/builtins.js */
      "n4uK");
      /*
      All material copyright ESRI, All Rights Reserved, unless otherwise specified.
      See https://js.arcgis.com/4.18/esri/copyright.txt for details.
      */


      var n = ["block-comment", "line-comment", "preprocessor", "operator", "integer", "float", "ident", "builtin", "keyword", "whitespace", "eof", "integer"];

      function o() {
        var t,
            o,
            i,
            s = 0,
            c = 0,
            d = 999,
            f = [],
            p = [],
            u = 1,
            l = 0,
            h = 0,
            y = !1,
            g = !1,
            w = "";
        return function (e) {
          return p = [], null !== e ? function (e) {
            var a;
            s = 0, i = (w += e).length;

            for (; t = w[s], s < i;) {
              switch (a = s, d) {
                case 0:
                  s = x();
                  break;

                case 1:
                  s = _();
                  break;

                case 2:
                  s = v();
                  break;

                case 3:
                  s = j();
                  break;

                case 4:
                  s = L();
                  break;

                case 11:
                  s = O();
                  break;

                case 5:
                  s = D();
                  break;

                case 9999:
                  s = G();
                  break;

                case 9:
                  s = b();
                  break;

                case 999:
                  s = k();
              }

              if (a !== s) switch (w[a]) {
                case "\n":
                  l = 0, ++u;
                  break;

                default:
                  ++l;
              }
            }

            return c += s, w = w.slice(s), p;
          }(e.replace ? e.replace(/\r\n/g, "\n") : e) : function (t) {
            f.length && m(f.join(""));
            return d = 10, m("(eof)"), p;
          }();
        };

        function m(t) {
          t.length && p.push({
            type: n[d],
            data: t,
            position: h,
            line: u,
            column: l
          });
        }

        function k() {
          return f = f.length ? [] : f, "/" === o && "*" === t ? (h = c + s - 1, d = 0, o = t, s + 1) : "/" === o && "/" === t ? (h = c + s - 1, d = 1, o = t, s + 1) : "#" === t ? (d = 2, h = c + s, s) : /\s/.test(t) ? (d = 9, h = c + s, s) : (y = /\d/.test(t), g = /[^\w_]/.test(t), h = c + s, d = y ? 4 : g ? 3 : 9999, s);
        }

        function b() {
          return /[^\s]/g.test(t) ? (m(f.join("")), d = 999, s) : (f.push(t), o = t, s + 1);
        }

        function v() {
          return "\r" !== t && "\n" !== t || "\\" === o ? (f.push(t), o = t, s + 1) : (m(f.join("")), d = 999, s);
        }

        function _() {
          return v();
        }

        function x() {
          return "/" === t && "*" === o ? (f.push(t), m(f.join("")), d = 999, s + 1) : (f.push(t), o = t, s + 1);
        }

        function j() {
          if ("." === o && /\d/.test(t)) return d = 5, s;
          if ("/" === o && "*" === t) return d = 0, s;
          if ("/" === o && "/" === t) return d = 1, s;

          if ("." === t && f.length) {
            for (; E(f);) {
              ;
            }

            return d = 5, s;
          }

          if (";" === t || ")" === t || "(" === t) {
            if (f.length) for (; E(f);) {
              ;
            }
            return m(t), d = 999, s + 1;
          }

          var e = 2 === f.length && "=" !== t;

          if (/[\w_\d\s]/.test(t) || e) {
            for (; E(f);) {
              ;
            }

            return d = 999, s;
          }

          return f.push(t), o = t, s + 1;
        }

        function E(t) {
          for (var a, r, n = 0;;) {
            if (a = _chunks_builtins_js__WEBPACK_IMPORTED_MODULE_1__["o"].indexOf(t.slice(0, t.length + n).join("")), r = _chunks_builtins_js__WEBPACK_IMPORTED_MODULE_1__["o"][a], -1 === a) {
              if (n-- + t.length > 0) continue;
              r = t.slice(0, 1).join("");
            }

            return m(r), h += r.length, (f = f.slice(r.length)).length;
          }
        }

        function O() {
          return /[^a-fA-F0-9]/.test(t) ? (m(f.join("")), d = 999, s) : (f.push(t), o = t, s + 1);
        }

        function L() {
          return "." === t || /[eE]/.test(t) ? (f.push(t), d = 5, o = t, s + 1) : "x" === t && 1 === f.length && "0" === f[0] ? (d = 11, f.push(t), o = t, s + 1) : /[^\d]/.test(t) ? (m(f.join("")), d = 999, s) : (f.push(t), o = t, s + 1);
        }

        function D() {
          return "f" === t && (f.push(t), o = t, s += 1), /[eE]/.test(t) || "-" === t && /[eE]/.test(o) ? (f.push(t), o = t, s + 1) : /[^\d]/.test(t) ? (m(f.join("")), d = 999, s) : (f.push(t), o = t, s + 1);
        }

        function G() {
          if (/[^\d\w_]/.test(t)) {
            var e = f.join("");
            return d = _chunks_builtins_js__WEBPACK_IMPORTED_MODULE_1__["l"].indexOf(e) > -1 ? 8 : _chunks_builtins_js__WEBPACK_IMPORTED_MODULE_1__["b"].indexOf(e) > -1 ? 7 : 6, m(f.join("")), d = 999, s;
          }

          return f.push(t), o = t, s + 1;
        }
      }

      function i(t) {
        return e = t, a = o(), [].concat(a(e)).concat(a(null));
        var e, a;
      }

      var s = ["GL_OES_standard_derivatives", "GL_EXT_frag_depth", "GL_EXT_draw_buffers", "GL_EXT_shader_texture_lod"];

      function c(t, e) {
        for (var a = e - 1; a >= 0; a--) {
          var _e = t[a];

          if ("whitespace" !== _e.type && "block-comment" !== _e.type) {
            if ("keyword" !== _e.type) break;
            if ("attribute" === _e.data || "in" === _e.data) return !0;
          }
        }

        return !1;
      }

      function d(t, e, a, r) {
        r = r || a;

        var _iterator = _createForOfIteratorHelper(t),
            _step;

        try {
          for (_iterator.s(); !(_step = _iterator.n()).done;) {
            var _n = _step.value;

            if ("ident" === _n.type && _n.data === a) {
              r in e ? e[r]++ : e[r] = 0;
              return d(t, e, r + "_" + e[r], r);
            }
          }
        } catch (err) {
          _iterator.e(err);
        } finally {
          _iterator.f();
        }

        return a;
      }

      function f(t, e) {
        var a = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : "afterVersion";

        function r(t, e) {
          for (var _a = e; _a < t.length; _a++) {
            var _e2 = t[_a];
            if ("operator" === _e2.type && ";" === _e2.data) return _a;
          }

          return null;
        }

        var n = {
          data: "\n",
          type: "whitespace"
        },
            o = function o(e) {
          return e < t.length && /[^\r\n]$/.test(t[e].data);
        };

        var i = function (t) {
          var e = -1,
              n = 0,
              o = -1;

          for (var _i = 0; _i < t.length; _i++) {
            var _s = t[_i];

            if ("preprocessor" === _s.type && (_s.data.match(/\#(if|ifdef|ifndef)\s+.+/) ? ++n : _s.data.match(/\#endif\s*.*/) && --n), "afterVersion" !== a && "afterPrecision" !== a || "preprocessor" === _s.type && /^#version/.test(_s.data) && (o = Math.max(o, _i)), "afterPrecision" === a && "keyword" === _s.type && "precision" === _s.data) {
              var _e3 = r(t, _i);

              if (null === _e3) throw new Error("precision statement not followed by any semicolons!");
              o = Math.max(o, _e3);
            }

            e < o && 0 === n && (e = _i);
          }

          return e + 1;
        }(t);

        o(i - 1) && t.splice(i++, 0, n);

        var _iterator2 = _createForOfIteratorHelper(e),
            _step2;

        try {
          for (_iterator2.s(); !(_step2 = _iterator2.n()).done;) {
            var _a2 = _step2.value;
            t.splice(i++, 0, _a2);
          }
        } catch (err) {
          _iterator2.e(err);
        } finally {
          _iterator2.f();
        }

        o(i - 1) && o(i) && t.splice(i, 0, n);
      }

      function p(t, e, a) {
        var r = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : "lowp";
        f(t, [{
          type: "keyword",
          data: "out"
        }, {
          type: "whitespace",
          data: " "
        }, {
          type: "keyword",
          data: r
        }, {
          type: "whitespace",
          data: " "
        }, {
          type: "keyword",
          data: a
        }, {
          type: "whitespace",
          data: " "
        }, {
          type: "ident",
          data: e
        }, {
          type: "operator",
          data: ";"
        }], "afterPrecision");
      }

      function u(t, e, a, r) {
        var n = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : "lowp";
        f(t, [{
          type: "keyword",
          data: "layout"
        }, {
          type: "operator",
          data: "("
        }, {
          type: "keyword",
          data: "location"
        }, {
          type: "whitespace",
          data: " "
        }, {
          type: "operator",
          data: "="
        }, {
          type: "whitespace",
          data: " "
        }, {
          type: "integer",
          data: r.toString()
        }, {
          type: "operator",
          data: ")"
        }, {
          type: "whitespace",
          data: " "
        }, {
          type: "keyword",
          data: "out"
        }, {
          type: "whitespace",
          data: " "
        }, {
          type: "keyword",
          data: n
        }, {
          type: "whitespace",
          data: " "
        }, {
          type: "keyword",
          data: a
        }, {
          type: "whitespace",
          data: " "
        }, {
          type: "ident",
          data: e
        }, {
          type: "operator",
          data: ";"
        }], "afterPrecision");
      }

      function l(t, e) {
        var a,
            r,
            n = -1;

        for (var _o = e; _o < t.length; _o++) {
          var _e4 = t[_o];

          if ("operator" === _e4.type && ("[" === _e4.data && (a = _o), "]" === _e4.data)) {
            r = _o;
            break;
          }

          "integer" === _e4.type && (n = parseInt(_e4.data, 10));
        }

        return a && r && t.splice(a, r - a + 1), n;
      }

      function h(e, a) {
        var r = i(e);
        if ("300 es" === function (t) {
          var e = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : "100";
          var a = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : "300 es";
          var r = /^\s*\#version\s+([0-9]+(\s+[a-zA-Z]+)?)\s*/;

          var _iterator3 = _createForOfIteratorHelper(t),
              _step3;

          try {
            for (_iterator3.s(); !(_step3 = _iterator3.n()).done;) {
              var _n2 = _step3.value;

              if ("preprocessor" === _n2.type) {
                var _t = r.exec(_n2.data);

                if (_t) {
                  var _r = _t[1].replace(/\s\s+/g, " ");

                  if (_r === a) return _r;
                  if (_r === e) return _n2.data = "#version " + a, e;
                  throw new Error("unknown glsl version: " + _r);
                }
              }
            }
          } catch (err) {
            _iterator3.e(err);
          } finally {
            _iterator3.f();
          }

          return t.splice(0, 0, {
            type: "preprocessor",
            data: "#version " + a
          }, {
            type: "whitespace",
            data: "\n"
          }), null;
        }(r, "100", "300 es")) throw new Error("shader is already glsl 300 es");
        var n = null,
            o = null;
        var f = {},
            h = {};

        for (var _e5 = 0; _e5 < r.length; ++_e5) {
          var _i2 = r[_e5];

          switch (_i2.type) {
            case "keyword":
              "vertex" === a && "attribute" === _i2.data ? _i2.data = "in" : "varying" === _i2.data && (_i2.data = "vertex" === a ? "out" : "in");
              break;

            case "builtin":
              if (/^texture(2D|Cube)(Proj)?(Lod|Grad)?(EXT)?$/.test(_i2.data.trim()) && (_i2.data = _i2.data.replace(/(2D|Cube|EXT)/g, "")), "fragment" === a && "gl_FragColor" === _i2.data && (n || (n = d(r, f, "fragColor"), p(r, n, "vec4")), _i2.data = n), "fragment" === a && "gl_FragData" === _i2.data) {
                var t = l(r, _e5 + 1),
                    _a3 = d(r, f, "fragData");

                u(r, _a3, "vec4", t, "mediump"), _i2.data = _a3;
              } else "fragment" === a && "gl_FragDepthEXT" === _i2.data && (o || (o = d(r, f, "gl_FragDepth")), _i2.data = o);

              break;

            case "ident":
              if (_reservedWordsGLSL3_js__WEBPACK_IMPORTED_MODULE_0__["default"].indexOf(_i2.data) >= 0) {
                if ("vertex" === a && c(r, _e5)) throw new Error("attribute in vertex shader uses a name that is a reserved word in glsl 300 es");
                _i2.data in h || (h[_i2.data] = d(r, f, _i2.data)), _i2.data = h[_i2.data];
              }

          }
        }

        for (var _t2 = r.length - 1; _t2 >= 0; --_t2) {
          var _e6 = r[_t2];

          if ("preprocessor" === _e6.type) {
            var _a4 = _e6.data.match(/\#extension\s+(.*)\:/);

            if (_a4 && _a4[1] && s.indexOf(_a4[1].trim()) >= 0) {
              var _e7 = r[_t2 + 1];
              r.splice(_t2, _e7 && "whitespace" === _e7.type ? 2 : 1);
            }

            var _n3 = _e6.data.match(/\#ifdef\s+(.*)/);

            _n3 && _n3[1] && s.indexOf(_n3[1].trim()) >= 0 && (_e6.data = "#if 1");

            var _o2 = _e6.data.match(/\#ifndef\s+(.*)/);

            _o2 && _o2[1] && s.indexOf(_o2[1].trim()) >= 0 && (_e6.data = "#if 0");
          }
        }

        return function (t) {
          return t.map(function (t) {
            return "eof" !== t.type ? t.data : "";
          }).join("");
        }(r);
      }
      /***/

    },

    /***/
    "D6bk":
    /*!********************************************************************!*\
      !*** ./node_modules/@arcgis/core/views/webgl/VertexArrayObject.js ***!
      \********************************************************************/

    /*! exports provided: default */

    /***/
    function D6bk(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony import */


      var _Util_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ./Util.js */
      "hTmG");
      /*
      All material copyright ESRI, All Rights Reserved, unless otherwise specified.
      See https://js.arcgis.com/4.18/esri/copyright.txt for details.
      */


      var e = 0;
      /* harmony default export */

      __webpack_exports__["default"] = /*#__PURE__*/function () {
        function _class(t, i, s, n, r) {
          _classCallCheck(this, _class);

          this._context = t, this._locations = i, this._layout = s, this._buffers = n, this._indexBuffer = r, this._glName = null, this.id = e++, this._initialized = !1, t.instanceCounter.increment(2, this);
        }

        _createClass(_class, [{
          key: "glName",
          get: function get() {
            return this._glName;
          }
        }, {
          key: "vertexBuffers",
          get: function get() {
            return this._buffers;
          }
        }, {
          key: "indexBuffer",
          get: function get() {
            return this._indexBuffer;
          }
        }, {
          key: "size",
          get: function get() {
            var _this = this;

            return Object.keys(this._buffers).reduce(function (t, i) {
              return t + _this._buffers[i].size;
            }, this._indexBuffer ? this._indexBuffer.size : 0);
          }
        }, {
          key: "layout",
          get: function get() {
            return this._layout;
          }
        }, {
          key: "locations",
          get: function get() {
            return this._locations;
          }
        }, {
          key: "dispose",
          value: function dispose() {
            var t = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : !0;
            if (!this._context) return;
            var i = this._context.capabilities.vao;
            i && this._glName && (i.deleteVertexArray(this._glName), this._glName = null);

            if (this._context.getBoundVAO() === this && this._context.bindVAO(null), t) {
              for (var _t3 in this._buffers) {
                this._buffers[_t3].dispose(), delete this._buffers[_t3];
              }

              this._indexBuffer && (this._indexBuffer.dispose(), this._indexBuffer = null);
            }

            this._context.instanceCounter.decrement(2, this), this._context = null;
          }
        }, {
          key: "initialize",
          value: function initialize() {
            if (this._initialized) return;
            var t = this._context.capabilities.vao;

            if (t) {
              var i = t.createVertexArray();
              t.bindVertexArray(i), this._bindLayout(), t.bindVertexArray(null), this._glName = i;
            }

            this._initialized = !0;
          }
        }, {
          key: "bind",
          value: function bind() {
            this.initialize();
            var t = this._context.capabilities.vao;
            t ? t.bindVertexArray(this.glName) : (this._context.bindVAO(null), this._bindLayout());
          }
        }, {
          key: "_bindLayout",
          value: function _bindLayout() {
            var i = this._buffers,
                e = !!this._context.capabilities.vao,
                s = this._layout,
                n = this._indexBuffer;
            i || console.error("Vertex buffer dictionary is empty!");
            var r = this._context.gl;

            for (var _e8 in i) {
              var _n4 = i[_e8];
              _n4 || console.error("Vertex buffer is uninitialized!");
              var _r2 = s[_e8];
              _r2 || console.error("Vertex element descriptor is empty!"), Object(_Util_js__WEBPACK_IMPORTED_MODULE_0__["bindVertexBufferLayout"])(this._context, this._locations, _n4, _r2);
            }

            n && (e ? r.bindBuffer(r.ELEMENT_ARRAY_BUFFER, n.glName) : this._context.bindBuffer(n));
          }
        }, {
          key: "unbind",
          value: function unbind() {
            this.initialize();
            var t = this._context.capabilities.vao;
            t ? t.bindVertexArray(null) : this._unbindLayout();
          }
        }, {
          key: "_unbindLayout",
          value: function _unbindLayout() {
            var t = this._buffers,
                e = this._layout;
            t || console.error("Vertex buffer dictionary is empty!");

            for (var _s2 in t) {
              var n = t[_s2];
              n || console.error("Vertex buffer is uninitialized!");
              var r = e[_s2];
              Object(_Util_js__WEBPACK_IMPORTED_MODULE_0__["unbindVertexBufferLayout"])(this._context, this._locations, n, r);
            }

            var s = this._indexBuffer;
            s && this._context.unbindBuffer(s.bufferType);
          }
        }]);

        return _class;
      }();
      /***/

    },

    /***/
    "fOQB":
    /*!***************************************************************!*\
      !*** ./node_modules/@arcgis/core/views/webgl/BufferObject.js ***!
      \***************************************************************/

    /*! exports provided: default */

    /***/
    function fOQB(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony import */


      var _core_typedArrayUtil_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ../../core/typedArrayUtil.js */
      "ohva");
      /*
      All material copyright ESRI, All Rights Reserved, unless otherwise specified.
      See https://js.arcgis.com/4.18/esri/copyright.txt for details.
      */


      var i = /*#__PURE__*/function () {
        function i(e, t, _i3, n, r) {
          _classCallCheck(this, i);

          this._context = null, this._glName = null, this._bufferType = void 0, this._usage = 35044, this._size = -1, this._indexType = void 0, this.id = s++, e.instanceCounter.increment(1, this), this._context = e, this._bufferType = t, this._usage = _i3, this._glName = this._context.gl.createBuffer(), n && this.setData(n, r);
        }

        _createClass(i, [{
          key: "glName",
          get: function get() {
            return this._glName;
          }
        }, {
          key: "size",
          get: function get() {
            return this._size;
          }
        }, {
          key: "usage",
          get: function get() {
            return this._usage;
          }
        }, {
          key: "bufferType",
          get: function get() {
            return this._bufferType;
          }
        }, {
          key: "indexType",
          get: function get() {
            return this._indexType;
          }
        }, {
          key: "byteSize",
          get: function get() {
            return 34962 === this._bufferType ? this._size : 5125 === this._indexType ? 4 * this._size : 2 * this._size;
          }
        }, {
          key: "dispose",
          value: function dispose() {
            if (this._context) {
              if (this._glName) {
                this._context.gl.deleteBuffer(this._glName), this._glName = null;
              }

              this._context.instanceCounter.decrement(1, this), this._context = null;
            }
          }
        }, {
          key: "setData",
          value: function setData(_i4, s) {
            if (!_i4) return;

            if ("number" == typeof _i4) {
              if (_i4 < 0 && console.error("Buffer size cannot be negative!"), 34963 === this._bufferType && s) switch (this._indexType = s, this._size = _i4, s) {
                case 5123:
                  _i4 *= 2;
                  break;

                case 5125:
                  _i4 *= 4;
              }
            } else {
              var _s3 = _i4.byteLength;
              Object(_core_typedArrayUtil_js__WEBPACK_IMPORTED_MODULE_0__["isUint16Array"])(_i4) && (_s3 /= 2, this._indexType = 5123), Object(_core_typedArrayUtil_js__WEBPACK_IMPORTED_MODULE_0__["isUint32Array"])(_i4) && (_s3 /= 4, this._indexType = 5125), this._size = _s3;
            }

            var n = this._context.getBoundVAO();

            this._context.bindVAO(null), this._context.bindBuffer(this);
            this._context.gl.bufferData(this._bufferType, _i4, this._usage), this._context.bindVAO(n);
          }
        }, {
          key: "setSubData",
          value: function setSubData(_i5) {
            var s = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;
            var n = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 0;
            var r = arguments.length > 3 ? arguments[3] : undefined;
            if (!_i5) return;
            (s < 0 || s >= this._size) && console.error("offset is out of range!");
            var h = s,
                o = n,
                u = r,
                f = _i5.byteLength;
            Object(_core_typedArrayUtil_js__WEBPACK_IMPORTED_MODULE_0__["isUint16Array"])(_i5) && (f /= 2, h *= 2, o *= 2, u *= 2), Object(_core_typedArrayUtil_js__WEBPACK_IMPORTED_MODULE_0__["isUint32Array"])(_i5) && (f /= 4, h *= 4, o *= 4, u *= 4), void 0 === r && (r = f - 1), n >= r && console.error("end must be bigger than start!"), s + n - r > this._size && console.error("An attempt to write beyond the end of the buffer!");

            var _ = this._context.getBoundVAO();

            this._context.bindVAO(null), this._context.bindBuffer(this);
            var a = this._context.gl,
                c = ArrayBuffer.isView(_i5) ? _i5.buffer : _i5;
            a.bufferSubData(this._bufferType, h, c.slice(o, u)), this._context.bindVAO(_);
          }
        }], [{
          key: "createIndex",
          value: function createIndex(e, t, s, n) {
            return new i(e, 34963, t, s, n);
          }
        }, {
          key: "createVertex",
          value: function createVertex(e, t, s) {
            return new i(e, 34962, t, s);
          }
        }]);

        return i;
      }();

      var s = 0;
      /* harmony default export */

      __webpack_exports__["default"] = i;
      /***/
    },

    /***/
    "g9fX":
    /*!*********************************************************************!*\
      !*** ./node_modules/@arcgis/core/views/webgl/reservedWordsGLSL3.js ***!
      \*********************************************************************/

    /*! exports provided: default */

    /***/
    function g9fX(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /*
      All material copyright ESRI, All Rights Reserved, unless otherwise specified.
      See https://js.arcgis.com/4.18/esri/copyright.txt for details.
      */

      /* harmony default export */


      __webpack_exports__["default"] = ["layout", "centroid", "smooth", "case", "mat2x2", "mat2x3", "mat2x4", "mat3x2", "mat3x3", "mat3x4", "mat4x2", "mat4x3", "mat4x4", "uint", "uvec2", "uvec3", "uvec4", "samplerCubeShadow", "sampler2DArray", "sampler2DArrayShadow", "isampler2D", "isampler3D", "isamplerCube", "isampler2DArray", "usampler2D", "usampler3D", "usamplerCube", "usampler2DArray", "coherent", "restrict", "readonly", "writeonly", "resource", "atomic_uint", "noperspective", "patch", "sample", "subroutine", "common", "partition", "active", "filter", "image1D", "image2D", "image3D", "imageCube", "iimage1D", "iimage2D", "iimage3D", "iimageCube", "uimage1D", "uimage2D", "uimage3D", "uimageCube", "image1DArray", "image2DArray", "iimage1DArray", "iimage2DArray", "uimage1DArray", "uimage2DArray", "image1DShadow", "image2DShadow", "image1DArrayShadow", "image2DArrayShadow", "imageBuffer", "iimageBuffer", "uimageBuffer", "sampler1DArray", "sampler1DArrayShadow", "isampler1D", "isampler1DArray", "usampler1D", "usampler1DArray", "isampler2DRect", "usampler2DRect", "samplerBuffer", "isamplerBuffer", "usamplerBuffer", "sampler2DMS", "isampler2DMS", "usampler2DMS", "sampler2DMSArray", "isampler2DMSArray", "usampler2DMSArray", "trunc", "round", "roundEven", "isnan", "isinf", "floatBitsToInt", "floatBitsToUint", "intBitsToFloat", "uintBitsToFloat", "packSnorm2x16", "unpackSnorm2x16", "packUnorm2x16", "unpackUnorm2x16", "packHalf2x16", "unpackHalf2x16", "outerProduct", "transpose", "determinant", "inverse", "texture", "textureSize", "textureProj", "textureLod", "textureOffset", "texelFetch", "texelFetchOffset", "textureProjOffset", "textureLodOffset", "textureProjLod", "textureProjLodOffset", "textureGrad", "textureGradOffset", "textureProjGrad", "textureProjGradOffset"];
      /***/
    },

    /***/
    "hTmG":
    /*!*******************************************************!*\
      !*** ./node_modules/@arcgis/core/views/webgl/Util.js ***!
      \*******************************************************/

    /*! exports provided: addDescriptor, bindVertexBufferLayout, copyFramebufferToTexture, findAttribute, getBytesPerElement, getBytesPerElementFormat, getGpuMemoryUsage, getStride, getTypedArrayConstructor, hasAttribute, setBaseInstanceOffset, unbindVertexBufferLayout, vertexCount */

    /***/
    function hTmG(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "addDescriptor", function () {
        return o;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "bindVertexBufferLayout", function () {
        return f;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "copyFramebufferToTexture", function () {
        return c;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "findAttribute", function () {
        return a;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "getBytesPerElement", function () {
        return n;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "getBytesPerElementFormat", function () {
        return l;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "getGpuMemoryUsage", function () {
        return b;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "getStride", function () {
        return t;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "getTypedArrayConstructor", function () {
        return i;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "hasAttribute", function () {
        return s;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "setBaseInstanceOffset", function () {
        return u;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "unbindVertexBufferLayout", function () {
        return d;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "vertexCount", function () {
        return r;
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


      function r(e, r) {
        return e.vertexBuffers[r].size / t(e.layout[r]);
      }

      function t(e) {
        return e[0].stride;
      }

      function n(e) {
        switch (e) {
          case 5126:
          case 5124:
          case 5125:
            return 4;

          case 5122:
          case 5123:
            return 2;

          case 5120:
          case 5121:
            return 1;

          default:
            throw new Error("Unknown data type");
        }
      }

      function i(e) {
        switch (e) {
          case 5120:
            return Int8Array;

          case 5126:
            return Float32Array;

          case 5124:
            return Int32Array;

          case 5122:
            return Int16Array;

          case 5121:
            return Uint8Array;

          case 5125:
            return Uint32Array;

          case 5123:
            return Uint16Array;

          default:
            throw new Error("Unknown data type");
        }
      }

      function o(e, r, t, i, o, s) {
        var a = n(i);

        if (e.length > 0) {
          var _n5 = e[0].stride,
              _c = _n5 + a * t;

          e.forEach(function (e) {
            return e.stride = _c;
          }), e.push({
            name: r,
            count: t,
            type: i,
            offset: _n5,
            stride: _c,
            normalized: o,
            divisor: s
          });
        } else e.push({
          name: r,
          count: t,
          type: i,
          offset: 0,
          stride: a * t,
          normalized: o,
          divisor: s
        });
      }

      function s(e, r) {
        for (var _t4 = 0; _t4 < e.length; _t4++) {
          if (e[_t4].name === r) return !0;
        }

        return !1;
      }

      function a(e, r) {
        for (var _t5 = 0; _t5 < e.length; _t5++) {
          if (e[_t5].name === r) return e[_t5];
        }

        return null;
      }

      function c(e, r, t, n) {
        var i = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : 0;
        var o = e.getBoundFramebufferObject(),
            s = e.getBoundTexture(0);
        e.bindFramebuffer(r), e.bindTexture(t, 0), e.gl.copyTexImage2D(e.gl.TEXTURE_2D, i, t.descriptor.pixelFormat, n[0], n[1], n[2], n[3], 0), e.gl.flush(), e.bindFramebuffer(o), e.bindTexture(s, 0);
      }

      function u(e, r) {
        var t = {};

        for (var _n6 in e) {
          t[_n6] = e[_n6].map(function (e) {
            return e.divisor ? _objectSpread(_objectSpread({}, e), {}, {
              baseInstance: r
            }) : e;
          });
        }

        return t;
      }

      function f(e, r, t, n, i) {
        var o = e.gl,
            s = e.capabilities.instancing;
        e.bindBuffer(t);

        var _iterator4 = _createForOfIteratorHelper(n),
            _step4;

        try {
          for (_iterator4.s(); !(_step4 = _iterator4.n()).done;) {
            var _e9 = _step4.value;

            var _t6 = r[_e9.name],
                _n7 = (i || (0 + _e9.baseInstance ? _e9.baseInstance : 0)) * _e9.stride;

            if (void 0 === _t6 && console.error("There is no location for vertex attribute '".concat(_e9.name, "' defined.")), _e9.baseInstance && !_e9.divisor && console.error("Vertex attribute '".concat(_e9.name, "' uses baseInstanceOffset without divisor.")), _e9.count <= 4) o.vertexAttribPointer(_t6, _e9.count, _e9.type, _e9.normalized, _e9.stride, _e9.offset + _n7), o.enableVertexAttribArray(_t6), _e9.divisor && _e9.divisor > 0 && s && s.vertexAttribDivisor(_t6, _e9.divisor);else if (9 === _e9.count) for (var _r3 = 0; _r3 < 3; _r3++) {
              o.vertexAttribPointer(_t6 + _r3, 3, _e9.type, _e9.normalized, _e9.stride, _e9.offset + 12 * _r3 + _n7), o.enableVertexAttribArray(_t6 + _r3), _e9.divisor && _e9.divisor > 0 && s && s.vertexAttribDivisor(_t6 + _r3, _e9.divisor);
            } else if (16 === _e9.count) for (var _r4 = 0; _r4 < 4; _r4++) {
              o.vertexAttribPointer(_t6 + _r4, 4, _e9.type, _e9.normalized, _e9.stride, _e9.offset + 16 * _r4 + _n7), o.enableVertexAttribArray(_t6 + _r4), _e9.divisor && _e9.divisor > 0 && s && s.vertexAttribDivisor(_t6 + _r4, _e9.divisor);
            } else console.error("Unsupported vertex attribute element count: " + _e9.count);
          }
        } catch (err) {
          _iterator4.e(err);
        } finally {
          _iterator4.f();
        }
      }

      function d(e, r, t, n) {
        var i = e.gl,
            o = e.capabilities.instancing;
        e.bindBuffer(t);

        var _iterator5 = _createForOfIteratorHelper(n),
            _step5;

        try {
          for (_iterator5.s(); !(_step5 = _iterator5.n()).done;) {
            var _e10 = _step5.value;
            var _t7 = r[_e10.name];
            if (_e10.count <= 4) i.disableVertexAttribArray(_t7), _e10.divisor && _e10.divisor > 0 && o && o.vertexAttribDivisor(_t7, 0);else if (9 === _e10.count) for (var _r5 = 0; _r5 < 3; _r5++) {
              i.disableVertexAttribArray(_t7 + _r5), _e10.divisor && _e10.divisor > 0 && o && o.vertexAttribDivisor(_t7 + _r5, 0);
            } else if (16 === _e10.count) for (var _r6 = 0; _r6 < 4; _r6++) {
              i.disableVertexAttribArray(_t7 + _r6), _e10.divisor && _e10.divisor > 0 && o && o.vertexAttribDivisor(_t7 + _r6, 0);
            } else console.error("Unsupported vertex attribute element count: " + _e10.count);
          }
        } catch (err) {
          _iterator5.e(err);
        } finally {
          _iterator5.f();
        }

        e.unbindBuffer(34962);
      }

      function l(e) {
        switch (e) {
          case 6406:
          case 6409:
            return 1;

          case 6410:
            return 2;

          case 6407:
            return 3;

          case 6408:
          case 34041:
            return 4;

          case 33325:
            return 2;

          case 33326:
          case 35898:
          case 33327:
            return 4;

          case 33328:
          case 34842:
            return 8;

          case 34836:
            return 16;

          case 33189:
            return 2;

          case 34041:
            return 4;

          case 32854:
            return 2;

          case 36168:
            return 1;
        }

        return 0;
      }

      function b(r) {
        if (Object(_core_maybe_js__WEBPACK_IMPORTED_MODULE_1__["isNone"])(r)) return 0;
        if ("colorAttachment" in r) return r.glName ? b(r.colorAttachment) + b(r.depthStencilAttachment) : 0;
        if ("descriptor" in r) return r.glName ? b(r.descriptor) : 0;
        var t = r.internalFormat || "pixelFormat" in r && r.pixelFormat;
        if (!t) return 0;
        var n = "hasMipmap" in r && r.hasMipmap ? 1.3 : 1,
            i = r.width * r.height;
        return l(t) * i * n;
      }
      /***/

    },

    /***/
    "jjdI":
    /*!**********************************************************!*\
      !*** ./node_modules/@arcgis/core/views/webgl/Program.js ***!
      \**********************************************************/

    /*! exports provided: default */

    /***/
    function jjdI(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony import */


      var _core_has_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ../../core/has.js */
      "wSAH");
      /* harmony import */


      var _core_maybe_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ../../core/maybe.js */
      "srIe");
      /* harmony import */


      var _ShaderTranspiler_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./ShaderTranspiler.js */
      "0bwe");
      /*
      All material copyright ESRI, All Rights Reserved, unless otherwise specified.
      See https://js.arcgis.com/4.18/esri/copyright.txt for details.
      */


      var o = /*#__PURE__*/function () {
        function o(t, i, _o3, n) {
          var e = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : {};

          _classCallCheck(this, o);

          if (this._context = null, this._glName = null, this._locations = {}, this.id = r++, this._initialized = !1, this._vShader = null, this._fShader = null, this._defines = {}, this._nameToUniformLocation = {}, this._nameToAttribLocation = {}, this._nameToUniform1 = {}, this._nameToUniform1v = {}, this._nameToUniform2 = {}, this._nameToUniform3 = {}, this._nameToUniform4 = {}, this._nameToUniformMatrix3 = {}, this._nameToUniformMatrix4 = {}, t || console.error("RenderingContext isn't initialized!"), 0 === i.length && console.error("Shaders source should not be empty!"), t.instanceCounter.increment(3, this), this._context = t, this._vertexShaderSource = i, this._fragmentShaderSource = _o3, Array.isArray(e)) {
            var _iterator6 = _createForOfIteratorHelper(e),
                _step6;

            try {
              for (_iterator6.s(); !(_step6 = _iterator6.n()).done;) {
                var _t8 = _step6.value;
                this._defines[_t8] = "1";
              }
            } catch (err) {
              _iterator6.e(err);
            } finally {
              _iterator6.f();
            }
          } else this._defines = e;

          this._locations = n;
        }

        _createClass(o, [{
          key: "glName",
          get: function get() {
            return this._glName;
          }
        }, {
          key: "locations",
          get: function get() {
            return this._locations;
          }
        }, {
          key: "getDefine",
          value: function getDefine(t) {
            return this._defines[t];
          }
        }, {
          key: "dispose",
          value: function dispose() {
            if (!this._context) return;
            var t = this._context.gl;

            if (this._vShader) {
              var i = this._vShader;
              t.deleteShader(i), this._vShader = null;
            }

            if (this._fShader) {
              var _i6 = this._fShader;
              t.deleteShader(_i6), this._fShader = null;
            }

            this._glName && (t.deleteProgram(this._glName), this._glName = null), this._context.instanceCounter.decrement(3, this), this._context = null;
          }
        }, {
          key: "initialize",
          value: function initialize() {
            if (this._initialized) return;
            this._vShader = this._loadShader(35633), this._fShader = this._loadShader(35632), this._vShader && this._fShader || console.error("Error loading shaders!");
            var t = this._context.gl,
                i = t.createProgram();
            t.attachShader(i, this._vShader), t.attachShader(i, this._fShader);

            for (var _o13 in this._locations) {
              var _n8 = this._locations[_o13];
              t.bindAttribLocation(i, _n8, _o13);
            }

            t.linkProgram(i), this._glName = i, this._initialized = !0;
          }
        }, {
          key: "getUniformLocation",
          value: function getUniformLocation(t) {
            return this.initialize(), void 0 === this._nameToUniformLocation[t] && (this._nameToUniformLocation[t] = this._context.gl.getUniformLocation(this._glName, t)), this._nameToUniformLocation[t];
          }
        }, {
          key: "hasUniform",
          value: function hasUniform(t) {
            return null !== this.getUniformLocation(t);
          }
        }, {
          key: "getAttribLocation",
          value: function getAttribLocation(t) {
            return this.initialize(), void 0 === this._nameToAttribLocation[t] && (this._nameToAttribLocation[t] = this._context.gl.getAttribLocation(this._glName, t)), this._nameToAttribLocation[t];
          }
        }, {
          key: "setUniform1i",
          value: function setUniform1i(t, i) {
            var _o5 = this._nameToUniform1[t];

            if (void 0 === _o5 || i !== _o5) {
              this._context.bindProgram(this);

              this._context.gl.uniform1i(this.getUniformLocation(t), i), this._nameToUniform1[t] = i;
            }
          }
        }, {
          key: "setUniform1iv",
          value: function setUniform1iv(t, i) {
            var r = this._nameToUniform1v[t];

            if (n(r, i)) {
              this._context.bindProgram(this);

              this._context.gl.uniform1iv(this.getUniformLocation(t), i), void 0 === r ? this._nameToUniform1v[t] = o._arrayCopy(i) : o._arrayAssign(i, r);
            }
          }
        }, {
          key: "setUniform2iv",
          value: function setUniform2iv(t, i) {
            var r = this._nameToUniform2[t];

            if (n(r, i)) {
              this._context.bindProgram(this);

              this._context.gl.uniform2iv(this.getUniformLocation(t), i), void 0 === r ? this._nameToUniform2[t] = o._arrayCopy(i) : o._arrayAssign(i, r);
            }
          }
        }, {
          key: "setUniform3iv",
          value: function setUniform3iv(t, i) {
            var r = this._nameToUniform3[t];

            if (n(r, i)) {
              this._context.bindProgram(this);

              this._context.gl.uniform3iv(this.getUniformLocation(t), i), void 0 === r ? this._nameToUniform3[t] = o._arrayCopy(i) : o._arrayAssign(i, r);
            }
          }
        }, {
          key: "setUniform4iv",
          value: function setUniform4iv(t, i) {
            var r = this._nameToUniform4[t];

            if (n(r, i)) {
              this._context.bindProgram(this);

              this._context.gl.uniform4iv(this.getUniformLocation(t), i), void 0 === r ? this._nameToUniform4[t] = o._arrayCopy(i) : o._arrayAssign(i, r);
            }
          }
        }, {
          key: "setUniform1f",
          value: function setUniform1f(t, i) {
            var _o6 = this._nameToUniform1[t];

            if (void 0 === _o6 || i !== _o6) {
              this._context.bindProgram(this);

              this._context.gl.uniform1f(this.getUniformLocation(t), i), this._nameToUniform1[t] = i;
            }
          }
        }, {
          key: "setUniform1fv",
          value: function setUniform1fv(t, i) {
            var r = this._nameToUniform1v[t];

            if (n(r, i)) {
              this._context.bindProgram(this);

              this._context.gl.uniform1fv(this.getUniformLocation(t), i), void 0 === r ? this._nameToUniform1v[t] = o._arrayCopy(i) : o._arrayAssign(i, r);
            }
          }
        }, {
          key: "setUniform2f",
          value: function setUniform2f(t, i, _o7) {
            var n = this._nameToUniform2[t];

            if (void 0 === n || i !== n[0] || _o7 !== n[1]) {
              this._context.bindProgram(this);

              this._context.gl.uniform2f(this.getUniformLocation(t), i, _o7), void 0 === n ? this._nameToUniform2[t] = [i, _o7] : (n[0] = i, n[1] = _o7);
            }
          }
        }, {
          key: "setUniform2fv",
          value: function setUniform2fv(t, i) {
            var r = this._nameToUniform2[t];

            if (n(r, i)) {
              this._context.bindProgram(this);

              this._context.gl.uniform2fv(this.getUniformLocation(t), i), void 0 === r ? this._nameToUniform2[t] = o._arrayCopy(i) : o._arrayAssign(i, r);
            }
          }
        }, {
          key: "setUniform3f",
          value: function setUniform3f(t, i, _o8, n) {
            var r = this._nameToUniform3[t];

            if (void 0 === r || i !== r[0] || _o8 !== r[1] || n !== r[2]) {
              this._context.bindProgram(this);

              this._context.gl.uniform3f(this.getUniformLocation(t), i, _o8, n), void 0 === r ? this._nameToUniform3[t] = [i, _o8, n] : (r[0] = i, r[1] = _o8, r[2] = n);
            }
          }
        }, {
          key: "setUniform3fv",
          value: function setUniform3fv(t, i) {
            var r = this._nameToUniform3[t];

            if (n(r, i)) {
              this._context.bindProgram(this);

              this._context.gl.uniform3fv(this.getUniformLocation(t), i), void 0 === r ? this._nameToUniform3[t] = o._arrayCopy(i) : o._arrayAssign(i, r);
            }
          }
        }, {
          key: "setUniform4f",
          value: function setUniform4f(t, i, _o9, n, r) {
            var e = this._nameToUniform4[t];

            if (void 0 === e || i !== e[0] || _o9 !== e[1] || n !== e[2] || r !== e[3]) {
              this._context.bindProgram(this);

              this._context.gl.uniform4f(this.getUniformLocation(t), i, _o9, n, r), void 0 === e ? this._nameToUniform4[t] = [i, _o9, n, r] : (e[0] = i, e[1] = _o9, e[2] = n, e[3] = r);
            }
          }
        }, {
          key: "setUniform4fv",
          value: function setUniform4fv(t, i) {
            var r = this._nameToUniform4[t];

            if (n(r, i)) {
              this._context.bindProgram(this);

              this._context.gl.uniform4fv(this.getUniformLocation(t), i), void 0 === r ? this._nameToUniform4[t] = o._arrayCopy(i) : o._arrayAssign(i, r);
            }
          }
        }, {
          key: "setUniformMatrix3fv",
          value: function setUniformMatrix3fv(i, r) {
            var e = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : !1;
            var s = this._nameToUniformMatrix3[i];

            if (function (i, o) {
              if (Object(_core_maybe_js__WEBPACK_IMPORTED_MODULE_1__["isNone"])(i)) return !0;
              if (9 !== i.length) return n(i, o);
              return 9 !== i.length || i[0] !== o[0] || i[1] !== o[1] || i[2] !== o[2] || i[3] !== o[3] || i[4] !== o[4] || i[5] !== o[5] || i[6] !== o[6] || i[7] !== o[7] || i[8] !== o[8];
            }(s, r)) {
              this._context.bindProgram(this);

              this._context.gl.uniformMatrix3fv(this.getUniformLocation(i), e, r), void 0 === s ? this._nameToUniformMatrix3[i] = o._arrayCopy(r) : o._arrayAssign(r, s);
            }
          }
        }, {
          key: "setUniformMatrix4fv",
          value: function setUniformMatrix4fv(i, r) {
            var e = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : !1;
            var s = this._nameToUniformMatrix4[i];

            if (function (i, o) {
              if (Object(_core_maybe_js__WEBPACK_IMPORTED_MODULE_1__["isNone"])(i)) return !0;
              if (16 !== i.length) return n(i, o);
              return 16 !== i.length || i[0] !== o[0] || i[1] !== o[1] || i[2] !== o[2] || i[3] !== o[3] || i[4] !== o[4] || i[5] !== o[5] || i[6] !== o[6] || i[7] !== o[7] || i[8] !== o[8] || i[9] !== o[9] || i[10] !== o[10] || i[11] !== o[11] || i[12] !== o[12] || i[13] !== o[13] || i[14] !== o[14] || i[15] !== o[15];
            }(s, r)) {
              this._context.bindProgram(this);

              this._context.gl.uniformMatrix4fv(this.getUniformLocation(i), e, r), void 0 === s ? this._nameToUniformMatrix4[i] = o._arrayCopy(r) : o._arrayAssign(r, s);
            }
          }
        }, {
          key: "assertCompatibleVertexAttributeLocations",
          value: function assertCompatibleVertexAttributeLocations(t) {
            var i = t.locations === this.locations;
            return i || console.error("VertexAttributeLocations are incompatible"), i;
          }
        }, {
          key: "_addLineNumbers",
          value: function _addLineNumbers(t) {
            var i = 2;
            return t.replace(/\n/g, function () {
              return "\n" + o._padToThree(i++) + ":";
            });
          }
        }, {
          key: "_loadShader",
          value: function _loadShader(t) {
            var _o10 = 35633 === t;

            var n = _o10 ? this._vertexShaderSource : this._fragmentShaderSource,
                r = "";

            for (var _t9 in this._defines) {
              r += "#define ".concat(_t9, " ").concat(this._defines[_t9], "\n");
            }

            n = r + n, "webgl2" === this._context.contextVersion && (n = Object(_ShaderTranspiler_js__WEBPACK_IMPORTED_MODULE_2__["transpileShader"])(n, _o10 ? "vertex" : "fragment"));
            var e = this._context.gl,
                s = e.createShader(t);
            return e.shaderSource(s, n), e.compileShader(s), s;
          }
        }], [{
          key: "_padToThree",
          value: function _padToThree(t) {
            var i = t.toString();
            return t < 1e3 && (i = ("  " + t).slice(-3)), i;
          }
        }, {
          key: "_arrayCopy",
          value: function _arrayCopy(t) {
            var i = [];

            for (var _o14 = 0; _o14 < t.length; ++_o14) {
              i.push(t[_o14]);
            }

            return i;
          }
        }, {
          key: "_arrayAssign",
          value: function _arrayAssign(t, i) {
            for (var _o15 = 0; _o15 < t.length; ++_o15) {
              i[_o15] = t[_o15];
            }
          }
        }]);

        return o;
      }();

      function n(i, o) {
        if (Object(_core_maybe_js__WEBPACK_IMPORTED_MODULE_1__["isNone"])(i) || i.length !== o.length) return !0;

        for (var t = 0; t < i.length; ++t) {
          if (i[t] !== o[t]) return !0;
        }

        return !1;
      }

      var r = 0;
      /* harmony default export */

      __webpack_exports__["default"] = o;
      /***/
    }
  }]);
})();
//# sourceMappingURL=default~layers-BaseDynamicLayerView2D-js~layers-GeoRSSLayerView2D-js~layers-GraphicsLayerView2D-js~l~c2cf70ea-es5.js.map