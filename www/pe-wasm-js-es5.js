(function () {
  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pe-wasm-js"], {
    /***/
    4:
    /*!**********************!*\
      !*** path (ignored) ***!
      \**********************/

    /*! no static exports found */

    /***/
    function _(module, exports) {
      /* (ignored) */

      /***/
    },

    /***/
    5:
    /*!********************!*\
      !*** fs (ignored) ***!
      \********************/

    /*! no static exports found */

    /***/
    function _(module, exports) {
      /* (ignored) */

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
    "laFa":
    /*!*****************************************************!*\
      !*** ./node_modules/@arcgis/core/chunks/pe-wasm.js ***!
      \*****************************************************/

    /*! exports provided: p */

    /***/
    function laFa(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "p", function () {
        return n;
      });
      /* harmony import */


      var _commonjsHelpers_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ./_commonjsHelpers.js */
      "X2wA");
      /*
      All material copyright ESRI, All Rights Reserved, unless otherwise specified.
      See https://js.arcgis.com/4.18/esri/copyright.txt for details.
      */


      var e = Object(_commonjsHelpers_js__WEBPACK_IMPORTED_MODULE_0__["c"])(function (t, e) {
        var n, r;
        n = "undefined" != typeof document && document.currentScript ? document.currentScript.src : void 0, "undefined" != typeof __filename && (n = n || __filename), r = function r(t) {
          var e;
          (t = void 0 !== (t = t || {}) ? t : {}).ready = new Promise(function (t, n) {
            e = t;
          });
          var r,
              _ = {};

          for (r in t) {
            t.hasOwnProperty(r) && (_[r] = t[r]);
          }

          var o = "./this.program",
              p = !1,
              i = !1,
              c = !1,
              a = !1;
          p = "object" == typeof window, i = "function" == typeof importScripts, c = "object" == typeof process && "object" == typeof process.versions && "string" == typeof process.versions.node, a = !p && !c && !i;
          var s,
              u,
              P,
              y,
              g = "";

          function f(e) {
            return t.locateFile ? t.locateFile(e, g) : g + e;
          }

          c ? (g = i ? __webpack_require__(
          /*! path */
          4).dirname(g) + "/" : __dirname + "/", s = function s(t, e) {
            return P || (P = __webpack_require__(
            /*! fs */
            5)), y || (y = __webpack_require__(
            /*! path */
            4)), t = y.normalize(t), P.readFileSync(t, e ? null : "utf8");
          }, u = function u(t) {
            var e = s(t, !0);
            return e.buffer || (e = new Uint8Array(e)), S(e.buffer), e;
          }, process.argv.length > 1 && (o = process.argv[1].replace(/\\/g, "/")), process.argv.slice(2), process.on("uncaughtException", function (t) {
            if (!(t instanceof Mr)) throw t;
          }), process.on("unhandledRejection", pt), t.inspect = function () {
            return "[Emscripten Module object]";
          }) : a ? ("undefined" != typeof read && (s = function s(t) {
            return read(t);
          }), u = function u(t) {
            var e;
            return "function" == typeof readbuffer ? new Uint8Array(readbuffer(t)) : (S("object" == typeof (e = read(t, "binary"))), e);
          }, "undefined" != typeof scriptArgs && scriptArgs, "undefined" != typeof print && ("undefined" == typeof console && (console = {}), console.log = print, console.warn = console.error = "undefined" != typeof printErr ? printErr : print)) : (p || i) && (i ? g = self.location.href : document.currentScript && (g = document.currentScript.src), n && (g = n), g = 0 !== g.indexOf("blob:") ? g.substr(0, g.lastIndexOf("/") + 1) : "", s = function s(t) {
            var e = new XMLHttpRequest();
            return e.open("GET", t, !1), e.send(null), e.responseText;
          }, i && (u = function u(t) {
            var e = new XMLHttpRequest();
            return e.open("GET", t, !1), e.responseType = "arraybuffer", e.send(null), new Uint8Array(e.response);
          }));
          var l,
              m,
              d = t.print || console.log.bind(console),
              E = t.printErr || console.warn.bind(console);

          for (r in _) {
            _.hasOwnProperty(r) && (t[r] = _[r]);
          }

          function b(t, e, n) {
            switch ("*" === (e = e || "i8").charAt(e.length - 1) && (e = "i32"), e) {
              case "i1":
              case "i8":
                return I[t >> 0];

              case "i16":
                return L[t >> 1];

              case "i32":
              case "i64":
                return U[t >> 2];

              case "float":
                return w[t >> 2];

              case "double":
                return F[t >> 3];

              default:
                pt("invalid type for getValue: " + e);
            }

            return null;
          }

          _ = null, t.arguments && t.arguments, t.thisProgram && (o = t.thisProgram), t.quit && t.quit, t.wasmBinary && (l = t.wasmBinary), t.noExitRuntime && t.noExitRuntime, "object" != typeof WebAssembly && E("no native wasm support detected");
          var O = new WebAssembly.Table({
            initial: 1125,
            maximum: 1125,
            element: "anyfunc"
          }),
              T = !1;

          function S(t, e) {
            t || pt("Assertion failed: " + e);
          }

          var h = "undefined" != typeof TextDecoder ? new TextDecoder("utf8") : void 0;

          function N(t, e, n) {
            for (var r = e + n, _ = e; t[_] && !(_ >= r);) {
              ++_;
            }

            if (_ - e > 16 && t.subarray && h) return h.decode(t.subarray(e, _));

            for (var o = ""; e < _;) {
              var p = t[e++];

              if (128 & p) {
                var i = 63 & t[e++];

                if (192 != (224 & p)) {
                  var c = 63 & t[e++];
                  if ((p = 224 == (240 & p) ? (15 & p) << 12 | i << 6 | c : (7 & p) << 18 | i << 12 | c << 6 | 63 & t[e++]) < 65536) o += String.fromCharCode(p);else {
                    var a = p - 65536;
                    o += String.fromCharCode(55296 | a >> 10, 56320 | 1023 & a);
                  }
                } else o += String.fromCharCode((31 & p) << 6 | i);
              } else o += String.fromCharCode(p);
            }

            return o;
          }

          function M(t, e) {
            return t ? N(j, t, e) : "";
          }

          function v(t, e, n, r) {
            if (!(r > 0)) return 0;

            for (var _ = n, o = n + r - 1, p = 0; p < t.length; ++p) {
              var i = t.charCodeAt(p);

              if (i >= 55296 && i <= 57343 && (i = 65536 + ((1023 & i) << 10) | 1023 & t.charCodeAt(++p)), i <= 127) {
                if (n >= o) break;
                e[n++] = i;
              } else if (i <= 2047) {
                if (n + 1 >= o) break;
                e[n++] = 192 | i >> 6, e[n++] = 128 | 63 & i;
              } else if (i <= 65535) {
                if (n + 2 >= o) break;
                e[n++] = 224 | i >> 12, e[n++] = 128 | i >> 6 & 63, e[n++] = 128 | 63 & i;
              } else {
                if (n + 3 >= o) break;
                e[n++] = 240 | i >> 18, e[n++] = 128 | i >> 12 & 63, e[n++] = 128 | i >> 6 & 63, e[n++] = 128 | 63 & i;
              }
            }

            return e[n] = 0, n - _;
          }

          function D(t, e, n) {
            return v(t, j, e, n);
          }

          function R(t) {
            for (var e = 0, n = 0; n < t.length; ++n) {
              var r = t.charCodeAt(n);
              r >= 55296 && r <= 57343 && (r = 65536 + ((1023 & r) << 10) | 1023 & t.charCodeAt(++n)), r <= 127 ? ++e : e += r <= 2047 ? 2 : r <= 65535 ? 3 : 4;
            }

            return e;
          }

          function A(t) {
            var e = R(t) + 1,
                n = Tr(e);
            return n && v(t, I, n, e), n;
          }

          function G(t, e, n) {
            for (var r = 0; r < t.length; ++r) {
              I[e++ >> 0] = t.charCodeAt(r);
            }

            n || (I[e >> 0] = 0);
          }

          var C,
              I,
              j,
              L,
              U,
              w,
              F,
              x = 65536;

          function Y(t, e) {
            return t % e > 0 && (t += e - t % e), t;
          }

          function H(e) {
            C = e, t.HEAP8 = I = new Int8Array(e), t.HEAP16 = L = new Int16Array(e), t.HEAP32 = U = new Int32Array(e), t.HEAPU8 = j = new Uint8Array(e), t.HEAPU16 = new Uint16Array(e), t.HEAPU32 = new Uint32Array(e), t.HEAPF32 = w = new Float32Array(e), t.HEAPF64 = F = new Float64Array(e);
          }

          var z = 6705712,
              X = 1462672,
              Z = t.INITIAL_MEMORY || 8388608;

          function B(e) {
            for (; e.length > 0;) {
              var n = e.shift();

              if ("function" != typeof n) {
                var r = n.func;
                "number" == typeof r ? void 0 === n.arg ? t.dynCall_v(r) : t.dynCall_vi(r, n.arg) : r(void 0 === n.arg ? null : n.arg);
              } else n(t);
            }
          }

          (m = t.wasmMemory ? t.wasmMemory : new WebAssembly.Memory({
            initial: Z / x,
            maximum: 2147483648 / x
          })) && (C = m.buffer), Z = C.byteLength, H(C), U[X >> 2] = z;
          var W = [],
              V = [],
              k = [],
              q = [];

          function J() {
            if (t.preRun) for ("function" == typeof t.preRun && (t.preRun = [t.preRun]); t.preRun.length;) {
              tt(t.preRun.shift());
            }
            B(W);
          }

          function K() {
            B(V);
          }

          function $() {
            B(k);
          }

          function Q() {
            if (t.postRun) for ("function" == typeof t.postRun && (t.postRun = [t.postRun]); t.postRun.length;) {
              et(t.postRun.shift());
            }
            B(q);
          }

          function tt(t) {
            W.unshift(t);
          }

          function et(t) {
            q.unshift(t);
          }

          var nt = 0,
              rt = null;

          function _t(e) {
            nt++, t.monitorRunDependencies && t.monitorRunDependencies(nt);
          }

          function ot(e) {
            if (nt--, t.monitorRunDependencies && t.monitorRunDependencies(nt), 0 == nt && rt) {
              var n = rt;
              rt = null, n();
            }
          }

          function pt(e) {
            throw t.onAbort && t.onAbort(e), d(e += ""), E(e), T = !0, e = "abort(" + e + "). Build with -s ASSERTIONS=1 for more info.", new WebAssembly.RuntimeError(e);
          }

          function it(t, e) {
            return String.prototype.startsWith ? t.startsWith(e) : 0 === t.indexOf(e);
          }

          t.preloadedImages = {}, t.preloadedAudios = {};
          var ct = "data:application/octet-stream;base64,";

          function at(t) {
            return it(t, ct);
          }

          var st = "file://";

          function ut(t) {
            return it(t, st);
          }

          var Pt = "pe-wasm.wasm";

          function yt() {
            try {
              if (l) return new Uint8Array(l);
              if (u) return u(Pt);
              throw "both async and sync fetching of the wasm failed";
            } catch (t) {
              pt(t);
            }
          }

          function gt() {
            return l || !p && !i || "function" != typeof fetch || ut(Pt) ? new Promise(function (t, e) {
              t(yt());
            }) : fetch(Pt, {
              credentials: "same-origin"
            }).then(function (t) {
              if (!t.ok) throw "failed to load wasm binary file at '" + Pt + "'";
              return t.arrayBuffer();
            })["catch"](function () {
              return yt();
            });
          }

          function ft() {
            var e = {
              a: kt
            };

            function n(e, n) {
              var r = e.exports;
              t.asm = r, ot();
            }

            function r(t) {
              n(t.instance);
            }

            function _(t) {
              return gt().then(function (t) {
                return WebAssembly.instantiate(t, e);
              }).then(t, function (t) {
                E("failed to asynchronously prepare wasm: " + t), pt(t);
              });
            }

            if (_t(), t.instantiateWasm) try {
              return t.instantiateWasm(e, n);
            } catch (t) {
              return E("Module.instantiateWasm callback failed with error: " + t), !1;
            }
            return function () {
              if (l || "function" != typeof WebAssembly.instantiateStreaming || at(Pt) || ut(Pt) || "function" != typeof fetch) return _(r);
              fetch(Pt, {
                credentials: "same-origin"
              }).then(function (t) {
                return WebAssembly.instantiateStreaming(t, e).then(r, function (t) {
                  return E("wasm streaming compile failed: " + t), E("falling back to ArrayBuffer instantiation"), _(r);
                });
              });
            }(), {};
          }

          at(Pt) || (Pt = f(Pt)), V.push({
            func: function func() {
              qt();
            }
          });
          var lt = {
            mappings: {},
            buffers: [null, [], []],
            printChar: function printChar(t, e) {
              var n = lt.buffers[t];
              0 === e || 10 === e ? ((1 === t ? d : E)(N(n, 0)), n.length = 0) : n.push(e);
            },
            varargs: void 0,
            get: function get() {
              return lt.varargs += 4, U[lt.varargs - 4 >> 2];
            },
            getStr: function getStr(t) {
              return M(t);
            },
            get64: function get64(t, e) {
              return t;
            }
          };

          function mt(t, e, n) {
            return lt.varargs = n, 0;
          }

          function dt(t, e, n) {}

          function Et(t, e, n) {
            return lt.varargs = n, 0;
          }

          function bt(t, e, n) {
            lt.varargs = n;
          }

          function Ot(t) {}

          function Tt(t, e) {}

          function St(t) {}

          function ht() {
            pt();
          }

          function Nt(t, e, n) {
            j.copyWithin(t, e, e + n);
          }

          function Mt() {
            return j.length;
          }

          function vt(t) {
            try {
              return m.grow(t - C.byteLength + 65535 >>> 16), H(m.buffer), 1;
            } catch (t) {}
          }

          function Dt(t) {
            t >>>= 0;
            var e = Mt(),
                n = 2147483648;
            if (t > n) return !1;

            for (var r = 1; r <= 4; r *= 2) {
              var _ = e * (1 + .2 / r);

              if (_ = Math.min(_, t + 100663296), vt(Math.min(n, Y(Math.max(16777216, t, _), 65536)))) return !0;
            }

            return !1;
          }

          var Rt = {};

          function At() {
            return o || "./this.program";
          }

          function Gt() {
            if (!Gt.strings) {
              var t = {
                USER: "web_user",
                LOGNAME: "web_user",
                PATH: "/",
                PWD: "/",
                HOME: "/home/web_user",
                LANG: ("object" == typeof navigator && navigator.languages && navigator.languages[0] || "C").replace("-", "_") + ".UTF-8",
                _: At()
              };

              for (var e in Rt) {
                t[e] = Rt[e];
              }

              var n = [];

              for (var e in t) {
                n.push(e + "=" + t[e]);
              }

              Gt.strings = n;
            }

            return Gt.strings;
          }

          function Ct(t, e) {
            var n = 0;
            return Gt().forEach(function (r, _) {
              var o = e + n;
              U[t + 4 * _ >> 2] = o, G(r, o), n += r.length + 1;
            }), 0;
          }

          function It(t, e) {
            var n = Gt();
            U[t >> 2] = n.length;
            var r = 0;
            return n.forEach(function (t) {
              r += t.length + 1;
            }), U[e >> 2] = r, 0;
          }

          function jt(t) {
            return 0;
          }

          function Lt(t, e, n, r) {
            var _ = lt.getStreamFromFD(t),
                o = lt.doReadv(_, e, n);

            return U[r >> 2] = o, 0;
          }

          function Ut(t, e, n, r, _) {}

          function wt(t, e, n, r) {
            for (var _ = 0, o = 0; o < n; o++) {
              for (var p = U[e + 8 * o >> 2], i = U[e + (8 * o + 4) >> 2], c = 0; c < i; c++) {
                lt.printChar(t, j[p + c]);
              }

              _ += i;
            }

            return U[r >> 2] = _, 0;
          }

          var Ft = 1462688;

          function xt() {
            if (!xt.called) {
              xt.called = !0, U[Nr() >> 2] = 60 * new Date().getTimezoneOffset();
              var t = new Date().getFullYear(),
                  e = new Date(t, 0, 1),
                  n = new Date(t, 6, 1);
              U[hr() >> 2] = Number(e.getTimezoneOffset() != n.getTimezoneOffset());

              var r = i(e),
                  _ = i(n),
                  o = A(r),
                  p = A(_);

              n.getTimezoneOffset() < e.getTimezoneOffset() ? (U[Sr() >> 2] = o, U[Sr() + 4 >> 2] = p) : (U[Sr() >> 2] = p, U[Sr() + 4 >> 2] = o);
            }

            function i(t) {
              var e = t.toTimeString().match(/\(([A-Za-z ]+)\)$/);
              return e ? e[1] : "GMT";
            }
          }

          function Yt(t, e) {
            xt();
            var n = new Date(1e3 * U[t >> 2]);
            U[e >> 2] = n.getSeconds(), U[e + 4 >> 2] = n.getMinutes(), U[e + 8 >> 2] = n.getHours(), U[e + 12 >> 2] = n.getDate(), U[e + 16 >> 2] = n.getMonth(), U[e + 20 >> 2] = n.getFullYear() - 1900, U[e + 24 >> 2] = n.getDay();

            var r = new Date(n.getFullYear(), 0, 1),
                _ = (n.getTime() - r.getTime()) / 864e5 | 0;

            U[e + 28 >> 2] = _, U[e + 36 >> 2] = -60 * n.getTimezoneOffset();
            var o = new Date(n.getFullYear(), 6, 1).getTimezoneOffset(),
                p = r.getTimezoneOffset(),
                i = 0 | (o != p && n.getTimezoneOffset() == Math.min(p, o));
            U[e + 32 >> 2] = i;
            var c = U[Sr() + (i ? 4 : 0) >> 2];
            return U[e + 40 >> 2] = c, e;
          }

          function Ht(t) {
            return Yt(t, Ft);
          }

          function zt() {}

          function Xt() {}

          function Zt() {}

          function Bt(t) {
            var e = Date.now() / 1e3 | 0;
            return t && (U[t >> 2] = e), e;
          }

          function Wt(t, e, n) {
            var r = n > 0 ? n : R(t) + 1,
                _ = new Array(r),
                o = v(t, _, 0, _.length);

            return e && (_.length = o), _;
          }

          D("GMT", 1462736, 4);

          var Vt,
              kt = {
            b: mt,
            f: dt,
            s: Et,
            c: bt,
            p: Ot,
            e: Tt,
            q: St,
            m: ht,
            k: Nt,
            l: Dt,
            n: Ct,
            o: It,
            a: jt,
            r: Lt,
            i: Ut,
            d: wt,
            t: Ht,
            memory: m,
            g: zt,
            j: Xt,
            h: Zt,
            table: O,
            u: Bt
          },
              qt = (ft(), t.___wasm_call_ctors = function () {
            return (qt = t.___wasm_call_ctors = t.asm.v).apply(null, arguments);
          }),
              Jt = (t.___em_js__array_bounds_check_error = function () {
            return (t.___em_js__array_bounds_check_error = t.asm.w).apply(null, arguments);
          }, t._emscripten_bind_PeObject_getCode_0 = function () {
            return (Jt = t._emscripten_bind_PeObject_getCode_0 = t.asm.x).apply(null, arguments);
          }),
              Kt = t._emscripten_bind_PeObject_getName_1 = function () {
            return (Kt = t._emscripten_bind_PeObject_getName_1 = t.asm.y).apply(null, arguments);
          },
              $t = t._emscripten_bind_PeObject_getType_0 = function () {
            return ($t = t._emscripten_bind_PeObject_getType_0 = t.asm.z).apply(null, arguments);
          },
              Qt = t._emscripten_bind_PeCoordsys_getCode_0 = function () {
            return (Qt = t._emscripten_bind_PeCoordsys_getCode_0 = t.asm.A).apply(null, arguments);
          },
              te = t._emscripten_bind_PeCoordsys_getName_1 = function () {
            return (te = t._emscripten_bind_PeCoordsys_getName_1 = t.asm.B).apply(null, arguments);
          },
              ee = t._emscripten_bind_PeCoordsys_getType_0 = function () {
            return (ee = t._emscripten_bind_PeCoordsys_getType_0 = t.asm.C).apply(null, arguments);
          },
              ne = t._emscripten_bind_PeDatum_getSpheroid_0 = function () {
            return (ne = t._emscripten_bind_PeDatum_getSpheroid_0 = t.asm.D).apply(null, arguments);
          },
              re = t._emscripten_bind_PeDatum_getCode_0 = function () {
            return (re = t._emscripten_bind_PeDatum_getCode_0 = t.asm.E).apply(null, arguments);
          },
              _e = t._emscripten_bind_PeDatum_getName_1 = function () {
            return (_e = t._emscripten_bind_PeDatum_getName_1 = t.asm.F).apply(null, arguments);
          },
              oe = t._emscripten_bind_PeDatum_getType_0 = function () {
            return (oe = t._emscripten_bind_PeDatum_getType_0 = t.asm.G).apply(null, arguments);
          },
              pe = t._emscripten_bind_PeVersion_version_string_0 = function () {
            return (pe = t._emscripten_bind_PeVersion_version_string_0 = t.asm.H).apply(null, arguments);
          },
              ie = t._emscripten_bind_PeParameter_getValue_0 = function () {
            return (ie = t._emscripten_bind_PeParameter_getValue_0 = t.asm.I).apply(null, arguments);
          },
              ce = t._emscripten_bind_PeParameter_getCode_0 = function () {
            return (ce = t._emscripten_bind_PeParameter_getCode_0 = t.asm.J).apply(null, arguments);
          },
              ae = t._emscripten_bind_PeParameter_getName_1 = function () {
            return (ae = t._emscripten_bind_PeParameter_getName_1 = t.asm.K).apply(null, arguments);
          },
              se = t._emscripten_bind_PeParameter_getType_0 = function () {
            return (se = t._emscripten_bind_PeParameter_getType_0 = t.asm.L).apply(null, arguments);
          },
              ue = t._emscripten_bind_PeNotationUtm_get_PE_UTM_OPTS_NONE_0 = function () {
            return (ue = t._emscripten_bind_PeNotationUtm_get_PE_UTM_OPTS_NONE_0 = t.asm.M).apply(null, arguments);
          },
              Pe = t._emscripten_bind_PeNotationUtm_get_PE_UTM_OPTS_NS_0 = function () {
            return (Pe = t._emscripten_bind_PeNotationUtm_get_PE_UTM_OPTS_NS_0 = t.asm.N).apply(null, arguments);
          },
              ye = t._emscripten_bind_PeNotationUtm_get_PE_UTM_OPTS_NS_STRICT_0 = function () {
            return (ye = t._emscripten_bind_PeNotationUtm_get_PE_UTM_OPTS_NS_STRICT_0 = t.asm.O).apply(null, arguments);
          },
              ge = t._emscripten_bind_PeNotationUtm_get_PE_UTM_OPTS_ADD_SPACES_0 = function () {
            return (ge = t._emscripten_bind_PeNotationUtm_get_PE_UTM_OPTS_ADD_SPACES_0 = t.asm.P).apply(null, arguments);
          },
              fe = t._emscripten_bind_VoidPtr___destroy___0 = function () {
            return (fe = t._emscripten_bind_VoidPtr___destroy___0 = t.asm.Q).apply(null, arguments);
          },
              le = t._emscripten_bind_PeSpheroid_getAxis_0 = function () {
            return (le = t._emscripten_bind_PeSpheroid_getAxis_0 = t.asm.R).apply(null, arguments);
          },
              me = t._emscripten_bind_PeSpheroid_getFlattening_0 = function () {
            return (me = t._emscripten_bind_PeSpheroid_getFlattening_0 = t.asm.S).apply(null, arguments);
          },
              de = t._emscripten_bind_PeSpheroid_getCode_0 = function () {
            return (de = t._emscripten_bind_PeSpheroid_getCode_0 = t.asm.T).apply(null, arguments);
          },
              Ee = t._emscripten_bind_PeSpheroid_getName_1 = function () {
            return (Ee = t._emscripten_bind_PeSpheroid_getName_1 = t.asm.U).apply(null, arguments);
          },
              be = t._emscripten_bind_PeSpheroid_getType_0 = function () {
            return (be = t._emscripten_bind_PeSpheroid_getType_0 = t.asm.V).apply(null, arguments);
          },
              Oe = t._emscripten_bind_PeGTlistExtendedEntry_getEntries_0 = function () {
            return (Oe = t._emscripten_bind_PeGTlistExtendedEntry_getEntries_0 = t.asm.W).apply(null, arguments);
          },
              Te = t._emscripten_bind_PeGTlistExtendedEntry_getSteps_0 = function () {
            return (Te = t._emscripten_bind_PeGTlistExtendedEntry_getSteps_0 = t.asm.X).apply(null, arguments);
          },
              Se = t._emscripten_bind_PeGTlistExtendedEntry_Delete_1 = function () {
            return (Se = t._emscripten_bind_PeGTlistExtendedEntry_Delete_1 = t.asm.Y).apply(null, arguments);
          },
              he = t._emscripten_bind_PeHorizon_getNump_0 = function () {
            return (he = t._emscripten_bind_PeHorizon_getNump_0 = t.asm.Z).apply(null, arguments);
          },
              Ne = t._emscripten_bind_PeHorizon_getKind_0 = function () {
            return (Ne = t._emscripten_bind_PeHorizon_getKind_0 = t.asm._).apply(null, arguments);
          },
              Me = t._emscripten_bind_PeHorizon_getInclusive_0 = function () {
            return (Me = t._emscripten_bind_PeHorizon_getInclusive_0 = t.asm.$).apply(null, arguments);
          },
              ve = t._emscripten_bind_PeHorizon_getSize_0 = function () {
            return (ve = t._emscripten_bind_PeHorizon_getSize_0 = t.asm.aa).apply(null, arguments);
          },
              De = t._emscripten_bind_PeHorizon_getCoord_0 = function () {
            return (De = t._emscripten_bind_PeHorizon_getCoord_0 = t.asm.ba).apply(null, arguments);
          },
              Re = t._emscripten_bind_PeFactory_initialize_1 = function () {
            return (Re = t._emscripten_bind_PeFactory_initialize_1 = t.asm.ca).apply(null, arguments);
          },
              Ae = t._emscripten_bind_PeFactory_factoryByType_2 = function () {
            return (Ae = t._emscripten_bind_PeFactory_factoryByType_2 = t.asm.da).apply(null, arguments);
          },
              Ge = t._emscripten_bind_PeFactory_fromString_2 = function () {
            return (Ge = t._emscripten_bind_PeFactory_fromString_2 = t.asm.ea).apply(null, arguments);
          },
              Ce = t._emscripten_bind_PeFactory_getCode_1 = function () {
            return (Ce = t._emscripten_bind_PeFactory_getCode_1 = t.asm.fa).apply(null, arguments);
          },
              Ie = t._emscripten_bind_PeGTlistExtended_getGTlist_6 = function () {
            return (Ie = t._emscripten_bind_PeGTlistExtended_getGTlist_6 = t.asm.ga).apply(null, arguments);
          },
              je = t._emscripten_bind_PeGTlistExtended_get_PE_GTLIST_OPTS_COMMON_0 = function () {
            return (je = t._emscripten_bind_PeGTlistExtended_get_PE_GTLIST_OPTS_COMMON_0 = t.asm.ha).apply(null, arguments);
          },
              Le = t._emscripten_bind_PeUnit_getUnitFactor_0 = function () {
            return (Le = t._emscripten_bind_PeUnit_getUnitFactor_0 = t.asm.ia).apply(null, arguments);
          },
              Ue = t._emscripten_bind_PeUnit_getCode_0 = function () {
            return (Ue = t._emscripten_bind_PeUnit_getCode_0 = t.asm.ja).apply(null, arguments);
          },
              we = t._emscripten_bind_PeUnit_getName_1 = function () {
            return (we = t._emscripten_bind_PeUnit_getName_1 = t.asm.ka).apply(null, arguments);
          },
              Fe = t._emscripten_bind_PeUnit_getType_0 = function () {
            return (Fe = t._emscripten_bind_PeUnit_getType_0 = t.asm.la).apply(null, arguments);
          },
              xe = t._emscripten_bind_PeGeogcs_getDatum_0 = function () {
            return (xe = t._emscripten_bind_PeGeogcs_getDatum_0 = t.asm.ma).apply(null, arguments);
          },
              Ye = t._emscripten_bind_PeGeogcs_getPrimem_0 = function () {
            return (Ye = t._emscripten_bind_PeGeogcs_getPrimem_0 = t.asm.na).apply(null, arguments);
          },
              He = t._emscripten_bind_PeGeogcs_getUnit_0 = function () {
            return (He = t._emscripten_bind_PeGeogcs_getUnit_0 = t.asm.oa).apply(null, arguments);
          },
              ze = t._emscripten_bind_PeGeogcs_getCode_0 = function () {
            return (ze = t._emscripten_bind_PeGeogcs_getCode_0 = t.asm.pa).apply(null, arguments);
          },
              Xe = t._emscripten_bind_PeGeogcs_getName_1 = function () {
            return (Xe = t._emscripten_bind_PeGeogcs_getName_1 = t.asm.qa).apply(null, arguments);
          },
              Ze = t._emscripten_bind_PeGeogcs_getType_0 = function () {
            return (Ze = t._emscripten_bind_PeGeogcs_getType_0 = t.asm.ra).apply(null, arguments);
          },
              Be = t._emscripten_bind_PeGCSExtent_PeGCSExtent_6 = function () {
            return (Be = t._emscripten_bind_PeGCSExtent_PeGCSExtent_6 = t.asm.sa).apply(null, arguments);
          },
              We = t._emscripten_bind_PeGCSExtent_getLLon_0 = function () {
            return (We = t._emscripten_bind_PeGCSExtent_getLLon_0 = t.asm.ta).apply(null, arguments);
          },
              Ve = t._emscripten_bind_PeGCSExtent_getSLat_0 = function () {
            return (Ve = t._emscripten_bind_PeGCSExtent_getSLat_0 = t.asm.ua).apply(null, arguments);
          },
              ke = t._emscripten_bind_PeGCSExtent_getRLon_0 = function () {
            return (ke = t._emscripten_bind_PeGCSExtent_getRLon_0 = t.asm.va).apply(null, arguments);
          },
              qe = t._emscripten_bind_PeGCSExtent_getNLat_0 = function () {
            return (qe = t._emscripten_bind_PeGCSExtent_getNLat_0 = t.asm.wa).apply(null, arguments);
          },
              Je = t._emscripten_bind_PeGCSExtent___destroy___0 = function () {
            return (Je = t._emscripten_bind_PeGCSExtent___destroy___0 = t.asm.xa).apply(null, arguments);
          },
              Ke = t._emscripten_bind_PePCSInfo_getCentralMeridian_0 = function () {
            return (Ke = t._emscripten_bind_PePCSInfo_getCentralMeridian_0 = t.asm.ya).apply(null, arguments);
          },
              $e = t._emscripten_bind_PePCSInfo_getDomainMinx_0 = function () {
            return ($e = t._emscripten_bind_PePCSInfo_getDomainMinx_0 = t.asm.za).apply(null, arguments);
          },
              Qe = t._emscripten_bind_PePCSInfo_getDomainMiny_0 = function () {
            return (Qe = t._emscripten_bind_PePCSInfo_getDomainMiny_0 = t.asm.Aa).apply(null, arguments);
          },
              tn = t._emscripten_bind_PePCSInfo_getDomainMaxx_0 = function () {
            return (tn = t._emscripten_bind_PePCSInfo_getDomainMaxx_0 = t.asm.Ba).apply(null, arguments);
          },
              en = t._emscripten_bind_PePCSInfo_getDomainMaxy_0 = function () {
            return (en = t._emscripten_bind_PePCSInfo_getDomainMaxy_0 = t.asm.Ca).apply(null, arguments);
          },
              nn = t._emscripten_bind_PePCSInfo_getNorthPoleLocation_0 = function () {
            return (nn = t._emscripten_bind_PePCSInfo_getNorthPoleLocation_0 = t.asm.Da).apply(null, arguments);
          },
              rn = t._emscripten_bind_PePCSInfo_getNorthPoleGeometry_0 = function () {
            return (rn = t._emscripten_bind_PePCSInfo_getNorthPoleGeometry_0 = t.asm.Ea).apply(null, arguments);
          },
              _n = t._emscripten_bind_PePCSInfo_getSouthPoleLocation_0 = function () {
            return (_n = t._emscripten_bind_PePCSInfo_getSouthPoleLocation_0 = t.asm.Fa).apply(null, arguments);
          },
              on = t._emscripten_bind_PePCSInfo_getSouthPoleGeometry_0 = function () {
            return (on = t._emscripten_bind_PePCSInfo_getSouthPoleGeometry_0 = t.asm.Ga).apply(null, arguments);
          },
              pn = t._emscripten_bind_PePCSInfo_isDensificationNeeded_0 = function () {
            return (pn = t._emscripten_bind_PePCSInfo_isDensificationNeeded_0 = t.asm.Ha).apply(null, arguments);
          },
              cn = t._emscripten_bind_PePCSInfo_isGcsHorizonMultiOverlap_0 = function () {
            return (cn = t._emscripten_bind_PePCSInfo_isGcsHorizonMultiOverlap_0 = t.asm.Ia).apply(null, arguments);
          },
              an = t._emscripten_bind_PePCSInfo_isPannableRectangle_0 = function () {
            return (an = t._emscripten_bind_PePCSInfo_isPannableRectangle_0 = t.asm.Ja).apply(null, arguments);
          },
              sn = t._emscripten_bind_PePCSInfo_generate_2 = function () {
            return (sn = t._emscripten_bind_PePCSInfo_generate_2 = t.asm.Ka).apply(null, arguments);
          },
              un = t._emscripten_bind_PePCSInfo_get_PE_PCSINFO_OPTION_NONE_0 = function () {
            return (un = t._emscripten_bind_PePCSInfo_get_PE_PCSINFO_OPTION_NONE_0 = t.asm.La).apply(null, arguments);
          },
              Pn = t._emscripten_bind_PePCSInfo_get_PE_PCSINFO_OPTION_DOMAIN_0 = function () {
            return (Pn = t._emscripten_bind_PePCSInfo_get_PE_PCSINFO_OPTION_DOMAIN_0 = t.asm.Ma).apply(null, arguments);
          },
              yn = t._emscripten_bind_PePCSInfo_get_PE_POLE_OUTSIDE_BOUNDARY_0 = function () {
            return (yn = t._emscripten_bind_PePCSInfo_get_PE_POLE_OUTSIDE_BOUNDARY_0 = t.asm.Na).apply(null, arguments);
          },
              gn = t._emscripten_bind_PePCSInfo_get_PE_POLE_POINT_0 = function () {
            return (gn = t._emscripten_bind_PePCSInfo_get_PE_POLE_POINT_0 = t.asm.Oa).apply(null, arguments);
          },
              fn = t._emscripten_bind_PeProjcs_getGeogcs_0 = function () {
            return (fn = t._emscripten_bind_PeProjcs_getGeogcs_0 = t.asm.Pa).apply(null, arguments);
          },
              ln = t._emscripten_bind_PeProjcs_getParameters_0 = function () {
            return (ln = t._emscripten_bind_PeProjcs_getParameters_0 = t.asm.Qa).apply(null, arguments);
          },
              mn = t._emscripten_bind_PeProjcs_getUnit_0 = function () {
            return (mn = t._emscripten_bind_PeProjcs_getUnit_0 = t.asm.Ra).apply(null, arguments);
          },
              dn = t._emscripten_bind_PeProjcs_loadConstants_0 = function () {
            return (dn = t._emscripten_bind_PeProjcs_loadConstants_0 = t.asm.Sa).apply(null, arguments);
          },
              En = t._emscripten_bind_PeProjcs_horizonGcsGenerate_0 = function () {
            return (En = t._emscripten_bind_PeProjcs_horizonGcsGenerate_0 = t.asm.Ta).apply(null, arguments);
          },
              bn = t._emscripten_bind_PeProjcs_horizonPcsGenerate_0 = function () {
            return (bn = t._emscripten_bind_PeProjcs_horizonPcsGenerate_0 = t.asm.Ua).apply(null, arguments);
          },
              On = t._emscripten_bind_PeProjcs_getCode_0 = function () {
            return (On = t._emscripten_bind_PeProjcs_getCode_0 = t.asm.Va).apply(null, arguments);
          },
              Tn = t._emscripten_bind_PeProjcs_getName_1 = function () {
            return (Tn = t._emscripten_bind_PeProjcs_getName_1 = t.asm.Wa).apply(null, arguments);
          },
              Sn = t._emscripten_bind_PeProjcs_getType_0 = function () {
            return (Sn = t._emscripten_bind_PeProjcs_getType_0 = t.asm.Xa).apply(null, arguments);
          },
              hn = t._emscripten_bind_PeGTlistExtendedGTs_getDirection_0 = function () {
            return (hn = t._emscripten_bind_PeGTlistExtendedGTs_getDirection_0 = t.asm.Ya).apply(null, arguments);
          },
              Nn = t._emscripten_bind_PeGTlistExtendedGTs_getGeogtran_0 = function () {
            return (Nn = t._emscripten_bind_PeGTlistExtendedGTs_getGeogtran_0 = t.asm.Za).apply(null, arguments);
          },
              Mn = t._emscripten_bind_PePrimem_getLongitude_0 = function () {
            return (Mn = t._emscripten_bind_PePrimem_getLongitude_0 = t.asm._a).apply(null, arguments);
          },
              vn = t._emscripten_bind_PePrimem_getCode_0 = function () {
            return (vn = t._emscripten_bind_PePrimem_getCode_0 = t.asm.$a).apply(null, arguments);
          },
              Dn = t._emscripten_bind_PePrimem_getName_1 = function () {
            return (Dn = t._emscripten_bind_PePrimem_getName_1 = t.asm.ab).apply(null, arguments);
          },
              Rn = t._emscripten_bind_PePrimem_getType_0 = function () {
            return (Rn = t._emscripten_bind_PePrimem_getType_0 = t.asm.bb).apply(null, arguments);
          },
              An = t._emscripten_bind_PeNotationMgrs_get_PE_MGRS_STYLE_NEW_0 = function () {
            return (An = t._emscripten_bind_PeNotationMgrs_get_PE_MGRS_STYLE_NEW_0 = t.asm.cb).apply(null, arguments);
          },
              Gn = t._emscripten_bind_PeNotationMgrs_get_PE_MGRS_STYLE_OLD_0 = function () {
            return (Gn = t._emscripten_bind_PeNotationMgrs_get_PE_MGRS_STYLE_OLD_0 = t.asm.db).apply(null, arguments);
          },
              Cn = t._emscripten_bind_PeNotationMgrs_get_PE_MGRS_STYLE_AUTO_0 = function () {
            return (Cn = t._emscripten_bind_PeNotationMgrs_get_PE_MGRS_STYLE_AUTO_0 = t.asm.eb).apply(null, arguments);
          },
              In = t._emscripten_bind_PeNotationMgrs_get_PE_MGRS_180_ZONE_1_PLUS_0 = function () {
            return (In = t._emscripten_bind_PeNotationMgrs_get_PE_MGRS_180_ZONE_1_PLUS_0 = t.asm.fb).apply(null, arguments);
          },
              jn = t._emscripten_bind_PeNotationMgrs_get_PE_MGRS_ADD_SPACES_0 = function () {
            return (jn = t._emscripten_bind_PeNotationMgrs_get_PE_MGRS_ADD_SPACES_0 = t.asm.gb).apply(null, arguments);
          },
              Ln = t._emscripten_bind_PeGeogtran_isEqual_1 = function () {
            return (Ln = t._emscripten_bind_PeGeogtran_isEqual_1 = t.asm.hb).apply(null, arguments);
          },
              Un = t._emscripten_bind_PeGeogtran_getGeogcs1_0 = function () {
            return (Un = t._emscripten_bind_PeGeogtran_getGeogcs1_0 = t.asm.ib).apply(null, arguments);
          },
              wn = t._emscripten_bind_PeGeogtran_getGeogcs2_0 = function () {
            return (wn = t._emscripten_bind_PeGeogtran_getGeogcs2_0 = t.asm.jb).apply(null, arguments);
          },
              Fn = t._emscripten_bind_PeGeogtran_getParameters_0 = function () {
            return (Fn = t._emscripten_bind_PeGeogtran_getParameters_0 = t.asm.kb).apply(null, arguments);
          },
              xn = t._emscripten_bind_PeGeogtran_loadConstants_0 = function () {
            return (xn = t._emscripten_bind_PeGeogtran_loadConstants_0 = t.asm.lb).apply(null, arguments);
          },
              Yn = t._emscripten_bind_PeGeogtran_getCode_0 = function () {
            return (Yn = t._emscripten_bind_PeGeogtran_getCode_0 = t.asm.mb).apply(null, arguments);
          },
              Hn = t._emscripten_bind_PeGeogtran_getName_1 = function () {
            return (Hn = t._emscripten_bind_PeGeogtran_getName_1 = t.asm.nb).apply(null, arguments);
          },
              zn = t._emscripten_bind_PeGeogtran_getType_0 = function () {
            return (zn = t._emscripten_bind_PeGeogtran_getType_0 = t.asm.ob).apply(null, arguments);
          },
              Xn = t._emscripten_bind_PeDefs_get_PE_BUFFER_MAX_0 = function () {
            return (Xn = t._emscripten_bind_PeDefs_get_PE_BUFFER_MAX_0 = t.asm.pb).apply(null, arguments);
          },
              Zn = t._emscripten_bind_PeDefs_get_PE_NAME_MAX_0 = function () {
            return (Zn = t._emscripten_bind_PeDefs_get_PE_NAME_MAX_0 = t.asm.qb).apply(null, arguments);
          },
              Bn = t._emscripten_bind_PeDefs_get_PE_MGRS_MAX_0 = function () {
            return (Bn = t._emscripten_bind_PeDefs_get_PE_MGRS_MAX_0 = t.asm.rb).apply(null, arguments);
          },
              Wn = t._emscripten_bind_PeDefs_get_PE_USNG_MAX_0 = function () {
            return (Wn = t._emscripten_bind_PeDefs_get_PE_USNG_MAX_0 = t.asm.sb).apply(null, arguments);
          },
              Vn = t._emscripten_bind_PeDefs_get_PE_DD_MAX_0 = function () {
            return (Vn = t._emscripten_bind_PeDefs_get_PE_DD_MAX_0 = t.asm.tb).apply(null, arguments);
          },
              kn = t._emscripten_bind_PeDefs_get_PE_DMS_MAX_0 = function () {
            return (kn = t._emscripten_bind_PeDefs_get_PE_DMS_MAX_0 = t.asm.ub).apply(null, arguments);
          },
              qn = t._emscripten_bind_PeDefs_get_PE_DDM_MAX_0 = function () {
            return (qn = t._emscripten_bind_PeDefs_get_PE_DDM_MAX_0 = t.asm.vb).apply(null, arguments);
          },
              Jn = t._emscripten_bind_PeDefs_get_PE_UTM_MAX_0 = function () {
            return (Jn = t._emscripten_bind_PeDefs_get_PE_UTM_MAX_0 = t.asm.wb).apply(null, arguments);
          },
              Kn = t._emscripten_bind_PeDefs_get_PE_PARM_MAX_0 = function () {
            return (Kn = t._emscripten_bind_PeDefs_get_PE_PARM_MAX_0 = t.asm.xb).apply(null, arguments);
          },
              $n = t._emscripten_bind_PeDefs_get_PE_TYPE_NONE_0 = function () {
            return ($n = t._emscripten_bind_PeDefs_get_PE_TYPE_NONE_0 = t.asm.yb).apply(null, arguments);
          },
              Qn = t._emscripten_bind_PeDefs_get_PE_TYPE_GEOGCS_0 = function () {
            return (Qn = t._emscripten_bind_PeDefs_get_PE_TYPE_GEOGCS_0 = t.asm.zb).apply(null, arguments);
          },
              tr = t._emscripten_bind_PeDefs_get_PE_TYPE_PROJCS_0 = function () {
            return (tr = t._emscripten_bind_PeDefs_get_PE_TYPE_PROJCS_0 = t.asm.Ab).apply(null, arguments);
          },
              er = t._emscripten_bind_PeDefs_get_PE_TYPE_GEOGTRAN_0 = function () {
            return (er = t._emscripten_bind_PeDefs_get_PE_TYPE_GEOGTRAN_0 = t.asm.Bb).apply(null, arguments);
          },
              nr = t._emscripten_bind_PeDefs_get_PE_TYPE_COORDSYS_0 = function () {
            return (nr = t._emscripten_bind_PeDefs_get_PE_TYPE_COORDSYS_0 = t.asm.Cb).apply(null, arguments);
          },
              rr = t._emscripten_bind_PeDefs_get_PE_TYPE_UNIT_0 = function () {
            return (rr = t._emscripten_bind_PeDefs_get_PE_TYPE_UNIT_0 = t.asm.Db).apply(null, arguments);
          },
              _r = t._emscripten_bind_PeDefs_get_PE_STR_OPTS_NONE_0 = function () {
            return (_r = t._emscripten_bind_PeDefs_get_PE_STR_OPTS_NONE_0 = t.asm.Eb).apply(null, arguments);
          },
              or = t._emscripten_bind_PeDefs_get_PE_STR_AUTH_NONE_0 = function () {
            return (or = t._emscripten_bind_PeDefs_get_PE_STR_AUTH_NONE_0 = t.asm.Fb).apply(null, arguments);
          },
              pr = t._emscripten_bind_PeDefs_get_PE_STR_AUTH_TOP_0 = function () {
            return (pr = t._emscripten_bind_PeDefs_get_PE_STR_AUTH_TOP_0 = t.asm.Gb).apply(null, arguments);
          },
              ir = t._emscripten_bind_PeDefs_get_PE_STR_NAME_CANON_0 = function () {
            return (ir = t._emscripten_bind_PeDefs_get_PE_STR_NAME_CANON_0 = t.asm.Hb).apply(null, arguments);
          },
              cr = t._emscripten_bind_PeDefs_get_PE_PARM_X0_0 = function () {
            return (cr = t._emscripten_bind_PeDefs_get_PE_PARM_X0_0 = t.asm.Ib).apply(null, arguments);
          },
              ar = t._emscripten_bind_PeDefs_get_PE_PARM_ND_0 = function () {
            return (ar = t._emscripten_bind_PeDefs_get_PE_PARM_ND_0 = t.asm.Jb).apply(null, arguments);
          },
              sr = t._emscripten_bind_PeDefs_get_PE_TRANSFORM_1_TO_2_0 = function () {
            return (sr = t._emscripten_bind_PeDefs_get_PE_TRANSFORM_1_TO_2_0 = t.asm.Kb).apply(null, arguments);
          },
              ur = t._emscripten_bind_PeDefs_get_PE_TRANSFORM_2_TO_1_0 = function () {
            return (ur = t._emscripten_bind_PeDefs_get_PE_TRANSFORM_2_TO_1_0 = t.asm.Lb).apply(null, arguments);
          },
              Pr = t._emscripten_bind_PeDefs_get_PE_TRANSFORM_P_TO_G_0 = function () {
            return (Pr = t._emscripten_bind_PeDefs_get_PE_TRANSFORM_P_TO_G_0 = t.asm.Mb).apply(null, arguments);
          },
              yr = t._emscripten_bind_PeDefs_get_PE_TRANSFORM_G_TO_P_0 = function () {
            return (yr = t._emscripten_bind_PeDefs_get_PE_TRANSFORM_G_TO_P_0 = t.asm.Nb).apply(null, arguments);
          },
              gr = t._emscripten_bind_PeDefs_get_PE_HORIZON_RECT_0 = function () {
            return (gr = t._emscripten_bind_PeDefs_get_PE_HORIZON_RECT_0 = t.asm.Ob).apply(null, arguments);
          },
              fr = t._emscripten_bind_PeDefs_get_PE_HORIZON_POLY_0 = function () {
            return (fr = t._emscripten_bind_PeDefs_get_PE_HORIZON_POLY_0 = t.asm.Pb).apply(null, arguments);
          },
              lr = t._emscripten_bind_PeDefs_get_PE_HORIZON_LINE_0 = function () {
            return (lr = t._emscripten_bind_PeDefs_get_PE_HORIZON_LINE_0 = t.asm.Qb).apply(null, arguments);
          },
              mr = t._emscripten_bind_PeDefs_get_PE_HORIZON_DELTA_0 = function () {
            return (mr = t._emscripten_bind_PeDefs_get_PE_HORIZON_DELTA_0 = t.asm.Rb).apply(null, arguments);
          },
              dr = t._emscripten_bind_PeInteger_PeInteger_1 = function () {
            return (dr = t._emscripten_bind_PeInteger_PeInteger_1 = t.asm.Sb).apply(null, arguments);
          },
              Er = t._emscripten_bind_PeInteger_get_val_0 = function () {
            return (Er = t._emscripten_bind_PeInteger_get_val_0 = t.asm.Tb).apply(null, arguments);
          },
              br = t._emscripten_bind_PeInteger_set_val_1 = function () {
            return (br = t._emscripten_bind_PeInteger_set_val_1 = t.asm.Ub).apply(null, arguments);
          },
              Or = t._emscripten_bind_PeInteger___destroy___0 = function () {
            return (Or = t._emscripten_bind_PeInteger___destroy___0 = t.asm.Vb).apply(null, arguments);
          },
              Tr = (t._pe_getPeGTlistExtendedEntrySize = function () {
            return (t._pe_getPeGTlistExtendedEntrySize = t.asm.Wb).apply(null, arguments);
          }, t._pe_getPeGTlistExtendedGTsSize = function () {
            return (t._pe_getPeGTlistExtendedGTsSize = t.asm.Xb).apply(null, arguments);
          }, t._pe_getPeHorizonSize = function () {
            return (t._pe_getPeHorizonSize = t.asm.Yb).apply(null, arguments);
          }, t._pe_geog_to_proj = function () {
            return (t._pe_geog_to_proj = t.asm.Zb).apply(null, arguments);
          }, t._pe_geog_to_geog = function () {
            return (t._pe_geog_to_geog = t.asm._b).apply(null, arguments);
          }, t._pe_geog_to_dd = function () {
            return (t._pe_geog_to_dd = t.asm.$b).apply(null, arguments);
          }, t._pe_dd_to_geog = function () {
            return (t._pe_dd_to_geog = t.asm.ac).apply(null, arguments);
          }, t._pe_dms_to_geog = function () {
            return (t._pe_dms_to_geog = t.asm.bc).apply(null, arguments);
          }, t._pe_geog_to_ddm = function () {
            return (t._pe_geog_to_ddm = t.asm.cc).apply(null, arguments);
          }, t._pe_ddm_to_geog = function () {
            return (t._pe_ddm_to_geog = t.asm.dc).apply(null, arguments);
          }, t._pe_geog_to_dms = function () {
            return (t._pe_geog_to_dms = t.asm.ec).apply(null, arguments);
          }, t._pe_geog_to_mgrs_extended = function () {
            return (t._pe_geog_to_mgrs_extended = t.asm.fc).apply(null, arguments);
          }, t._pe_geog_to_usng = function () {
            return (t._pe_geog_to_usng = t.asm.gc).apply(null, arguments);
          }, t._pe_geog_to_utm = function () {
            return (t._pe_geog_to_utm = t.asm.hc).apply(null, arguments);
          }, t._pe_mgrs_to_geog_extended = function () {
            return (t._pe_mgrs_to_geog_extended = t.asm.ic).apply(null, arguments);
          }, t._pe_usng_to_geog = function () {
            return (t._pe_usng_to_geog = t.asm.jc).apply(null, arguments);
          }, t._pe_utm_to_geog = function () {
            return (t._pe_utm_to_geog = t.asm.kc).apply(null, arguments);
          }, t._pe_object_to_string_ext = function () {
            return (t._pe_object_to_string_ext = t.asm.lc).apply(null, arguments);
          }, t._pe_proj_to_geog_center = function () {
            return (t._pe_proj_to_geog_center = t.asm.mc).apply(null, arguments);
          }, t._malloc = function () {
            return (Tr = t._malloc = t.asm.nc).apply(null, arguments);
          }),
              Sr = (t._free = function () {
            return (t._free = t.asm.oc).apply(null, arguments);
          }, t.__get_tzname = function () {
            return (Sr = t.__get_tzname = t.asm.pc).apply(null, arguments);
          }),
              hr = t.__get_daylight = function () {
            return (hr = t.__get_daylight = t.asm.qc).apply(null, arguments);
          },
              Nr = t.__get_timezone = function () {
            return (Nr = t.__get_timezone = t.asm.rc).apply(null, arguments);
          };

          function Mr(t) {
            this.name = "ExitStatus", this.message = "Program terminated with exit(" + t + ")", this.status = t;
          }

          function vr(n) {
            function r() {
              Vt || (Vt = !0, t.calledRun = !0, T || (K(), $(), e(t), t.onRuntimeInitialized && t.onRuntimeInitialized(), Q()));
            }

            nt > 0 || (J(), nt > 0 || (t.setStatus ? (t.setStatus("Running..."), setTimeout(function () {
              setTimeout(function () {
                t.setStatus("");
              }, 1), r();
            }, 1)) : r()));
          }

          if (t.dynCall_v = function () {
            return (t.dynCall_v = t.asm.sc).apply(null, arguments);
          }, t.dynCall_vi = function () {
            return (t.dynCall_vi = t.asm.tc).apply(null, arguments);
          }, t.getValue = b, t.UTF8ToString = M, rt = function t() {
            Vt || vr(), Vt || (rt = t);
          }, t.run = vr, t.preInit) for ("function" == typeof t.preInit && (t.preInit = [t.preInit]); t.preInit.length > 0;) {
            t.preInit.pop()();
          }

          function Dr() {}

          function Rr(t) {
            return (t || Dr).__cache__;
          }

          function Ar(t, e) {
            var n = Rr(e),
                r = n[t];
            return r || ((r = Object.create((e || Dr).prototype)).ptr = t, n[t] = r);
          }

          function Gr(t, e) {
            return Ar(t.ptr, e);
          }

          function Cr(t) {
            if (!t.__destroy__) throw "Error: Cannot destroy object. (Did you create it yourself?)";
            t.__destroy__(), delete Rr(t.__class__)[t.ptr];
          }

          function Ir(t, e) {
            return t.ptr === e.ptr;
          }

          function jr(t) {
            return t.ptr;
          }

          function Lr(t) {
            return t.__class__;
          }

          vr(), Dr.prototype = Object.create(Dr.prototype), Dr.prototype.constructor = Dr, Dr.prototype.__class__ = Dr, Dr.__cache__ = {}, t.WrapperObject = Dr, t.getCache = Rr, t.wrapPointer = Ar, t.castObject = Gr, t.NULL = Ar(0), t.destroy = Cr, t.compare = Ir, t.getPointer = jr, t.getClass = Lr;
          var Ur = {
            buffer: 0,
            size: 0,
            pos: 0,
            temps: [],
            needed: 0,
            prepare: function prepare() {
              if (Ur.needed) {
                for (var e = 0; e < Ur.temps.length; e++) {
                  t._free(Ur.temps[e]);
                }

                Ur.temps.length = 0, t._free(Ur.buffer), Ur.buffer = 0, Ur.size += Ur.needed, Ur.needed = 0;
              }

              Ur.buffer || (Ur.size += 128, Ur.buffer = t._malloc(Ur.size), S(Ur.buffer)), Ur.pos = 0;
            },
            alloc: function alloc(e, n) {
              S(Ur.buffer);
              var r,
                  _ = n.BYTES_PER_ELEMENT,
                  o = e.length * _;
              return o = o + 7 & -8, Ur.pos + o >= Ur.size ? (S(o > 0), Ur.needed += o, r = t._malloc(o), Ur.temps.push(r)) : (r = Ur.buffer + Ur.pos, Ur.pos += o), r;
            },
            copy: function copy(t, e, n) {
              switch (n >>>= 0, e.BYTES_PER_ELEMENT) {
                case 2:
                  n >>>= 1;
                  break;

                case 4:
                  n >>>= 2;
                  break;

                case 8:
                  n >>>= 3;
              }

              for (var r = 0; r < t.length; r++) {
                e[n + r] = t[r];
              }
            }
          };

          function wr(t) {
            if ("string" == typeof t) {
              var e = Wt(t),
                  n = Ur.alloc(e, I);
              return Ur.copy(e, I, n), n;
            }

            return t;
          }

          function Fr(t) {
            if ("object" == typeof t) {
              var e = Ur.alloc(t, I);
              return Ur.copy(t, I, e), e;
            }

            return t;
          }

          function xr(t) {
            if ("object" == typeof t) {
              var e = Ur.alloc(t, L);
              return Ur.copy(t, L, e), e;
            }

            return t;
          }

          function Yr(t) {
            if ("object" == typeof t) {
              var e = Ur.alloc(t, U);
              return Ur.copy(t, U, e), e;
            }

            return t;
          }

          function Hr(t) {
            if ("object" == typeof t) {
              var e = Ur.alloc(t, w);
              return Ur.copy(t, w, e), e;
            }

            return t;
          }

          function zr(t) {
            if ("object" == typeof t) {
              var e = Ur.alloc(t, F);
              return Ur.copy(t, F, e), e;
            }

            return t;
          }

          function Xr() {
            throw "cannot construct a PeObject, no constructor in IDL";
          }

          function Zr() {
            throw "cannot construct a PeCoordsys, no constructor in IDL";
          }

          function Br() {
            throw "cannot construct a PeDatum, no constructor in IDL";
          }

          function Wr() {
            throw "cannot construct a PeVersion, no constructor in IDL";
          }

          function Vr() {
            throw "cannot construct a PeParameter, no constructor in IDL";
          }

          function kr() {
            throw "cannot construct a PeNotationUtm, no constructor in IDL";
          }

          function qr() {
            throw "cannot construct a VoidPtr, no constructor in IDL";
          }

          function Jr() {
            throw "cannot construct a PeSpheroid, no constructor in IDL";
          }

          function Kr() {
            throw "cannot construct a PeGTlistExtendedEntry, no constructor in IDL";
          }

          function $r() {
            throw "cannot construct a PeHorizon, no constructor in IDL";
          }

          function Qr() {
            throw "cannot construct a PeFactory, no constructor in IDL";
          }

          function t_() {
            throw "cannot construct a PeGTlistExtended, no constructor in IDL";
          }

          function e_() {
            throw "cannot construct a PeUnit, no constructor in IDL";
          }

          function n_() {
            throw "cannot construct a PeGeogcs, no constructor in IDL";
          }

          function r_(t, e, n, r, _, o) {
            t && "object" == typeof t && (t = t.ptr), e && "object" == typeof e && (e = e.ptr), n && "object" == typeof n && (n = n.ptr), r && "object" == typeof r && (r = r.ptr), _ && "object" == typeof _ && (_ = _.ptr), o && "object" == typeof o && (o = o.ptr), this.ptr = Be(t, e, n, r, _, o), Rr(r_)[this.ptr] = this;
          }

          function __() {
            throw "cannot construct a PePCSInfo, no constructor in IDL";
          }

          function o_() {
            throw "cannot construct a PeProjcs, no constructor in IDL";
          }

          function p_() {
            throw "cannot construct a PeGTlistExtendedGTs, no constructor in IDL";
          }

          function i_() {
            throw "cannot construct a PePrimem, no constructor in IDL";
          }

          function c_() {
            throw "cannot construct a PeNotationMgrs, no constructor in IDL";
          }

          function a_() {
            throw "cannot construct a PeGeogtran, no constructor in IDL";
          }

          function s_() {
            throw "cannot construct a PeDefs, no constructor in IDL";
          }

          function u_(t) {
            t && "object" == typeof t && (t = t.ptr), this.ptr = dr(t), Rr(u_)[this.ptr] = this;
          }

          return Xr.prototype = Object.create(Dr.prototype), Xr.prototype.constructor = Xr, Xr.prototype.__class__ = Xr, Xr.__cache__ = {}, t.PeObject = Xr, Xr.prototype.getCode = Xr.prototype.getCode = function () {
            var t = this.ptr;
            return Jt(t);
          }, Xr.prototype.getName = Xr.prototype.getName = function (t) {
            var e = this.ptr;
            return Ur.prepare(), "object" == typeof t && (t = Fr(t)), M(Kt(e, t));
          }, Xr.prototype.getType = Xr.prototype.getType = function () {
            var t = this.ptr;
            return $t(t);
          }, Zr.prototype = Object.create(Xr.prototype), Zr.prototype.constructor = Zr, Zr.prototype.__class__ = Zr, Zr.__cache__ = {}, t.PeCoordsys = Zr, Zr.prototype.getCode = Zr.prototype.getCode = function () {
            var t = this.ptr;
            return Qt(t);
          }, Zr.prototype.getName = Zr.prototype.getName = function (t) {
            var e = this.ptr;
            return Ur.prepare(), "object" == typeof t && (t = Fr(t)), M(te(e, t));
          }, Zr.prototype.getType = Zr.prototype.getType = function () {
            var t = this.ptr;
            return ee(t);
          }, Br.prototype = Object.create(Xr.prototype), Br.prototype.constructor = Br, Br.prototype.__class__ = Br, Br.__cache__ = {}, t.PeDatum = Br, Br.prototype.getSpheroid = Br.prototype.getSpheroid = function () {
            var t = this.ptr;
            return Ar(ne(t), Jr);
          }, Br.prototype.getCode = Br.prototype.getCode = function () {
            var t = this.ptr;
            return re(t);
          }, Br.prototype.getName = Br.prototype.getName = function (t) {
            var e = this.ptr;
            return Ur.prepare(), "object" == typeof t && (t = Fr(t)), M(_e(e, t));
          }, Br.prototype.getType = Br.prototype.getType = function () {
            var t = this.ptr;
            return oe(t);
          }, Wr.prototype = Object.create(Dr.prototype), Wr.prototype.constructor = Wr, Wr.prototype.__class__ = Wr, Wr.__cache__ = {}, t.PeVersion = Wr, Wr.prototype.version_string = Wr.prototype.version_string = function () {
            var t = this.ptr;
            return M(pe(t));
          }, Vr.prototype = Object.create(Xr.prototype), Vr.prototype.constructor = Vr, Vr.prototype.__class__ = Vr, Vr.__cache__ = {}, t.PeParameter = Vr, Vr.prototype.getValue = Vr.prototype.getValue = function () {
            var t = this.ptr;
            return ie(t);
          }, Vr.prototype.getCode = Vr.prototype.getCode = function () {
            var t = this.ptr;
            return ce(t);
          }, Vr.prototype.getName = Vr.prototype.getName = function (t) {
            var e = this.ptr;
            return Ur.prepare(), "object" == typeof t && (t = Fr(t)), M(ae(e, t));
          }, Vr.prototype.getType = Vr.prototype.getType = function () {
            var t = this.ptr;
            return se(t);
          }, kr.prototype = Object.create(Dr.prototype), kr.prototype.constructor = kr, kr.prototype.__class__ = kr, kr.__cache__ = {}, t.PeNotationUtm = kr, kr.prototype.get_PE_UTM_OPTS_NONE = kr.prototype.get_PE_UTM_OPTS_NONE = function () {
            var t = this.ptr;
            return ue(t);
          }, Object.defineProperty(kr.prototype, "PE_UTM_OPTS_NONE", {
            get: kr.prototype.get_PE_UTM_OPTS_NONE
          }), kr.prototype.get_PE_UTM_OPTS_NS = kr.prototype.get_PE_UTM_OPTS_NS = function () {
            var t = this.ptr;
            return Pe(t);
          }, Object.defineProperty(kr.prototype, "PE_UTM_OPTS_NS", {
            get: kr.prototype.get_PE_UTM_OPTS_NS
          }), kr.prototype.get_PE_UTM_OPTS_NS_STRICT = kr.prototype.get_PE_UTM_OPTS_NS_STRICT = function () {
            var t = this.ptr;
            return ye(t);
          }, Object.defineProperty(kr.prototype, "PE_UTM_OPTS_NS_STRICT", {
            get: kr.prototype.get_PE_UTM_OPTS_NS_STRICT
          }), kr.prototype.get_PE_UTM_OPTS_ADD_SPACES = kr.prototype.get_PE_UTM_OPTS_ADD_SPACES = function () {
            var t = this.ptr;
            return ge(t);
          }, Object.defineProperty(kr.prototype, "PE_UTM_OPTS_ADD_SPACES", {
            get: kr.prototype.get_PE_UTM_OPTS_ADD_SPACES
          }), qr.prototype = Object.create(Dr.prototype), qr.prototype.constructor = qr, qr.prototype.__class__ = qr, qr.__cache__ = {}, t.VoidPtr = qr, qr.prototype.__destroy__ = qr.prototype.__destroy__ = function () {
            var t = this.ptr;
            fe(t);
          }, Jr.prototype = Object.create(Xr.prototype), Jr.prototype.constructor = Jr, Jr.prototype.__class__ = Jr, Jr.__cache__ = {}, t.PeSpheroid = Jr, Jr.prototype.getAxis = Jr.prototype.getAxis = function () {
            var t = this.ptr;
            return le(t);
          }, Jr.prototype.getFlattening = Jr.prototype.getFlattening = function () {
            var t = this.ptr;
            return me(t);
          }, Jr.prototype.getCode = Jr.prototype.getCode = function () {
            var t = this.ptr;
            return de(t);
          }, Jr.prototype.getName = Jr.prototype.getName = function (t) {
            var e = this.ptr;
            return Ur.prepare(), "object" == typeof t && (t = Fr(t)), M(Ee(e, t));
          }, Jr.prototype.getType = Jr.prototype.getType = function () {
            var t = this.ptr;
            return be(t);
          }, Kr.prototype = Object.create(Dr.prototype), Kr.prototype.constructor = Kr, Kr.prototype.__class__ = Kr, Kr.__cache__ = {}, t.PeGTlistExtendedEntry = Kr, Kr.prototype.getEntries = Kr.prototype.getEntries = function () {
            var t = this.ptr;
            return Ar(Oe(t), p_);
          }, Kr.prototype.getSteps = Kr.prototype.getSteps = function () {
            var t = this.ptr;
            return Te(t);
          }, Kr.prototype.Delete = Kr.prototype.Delete = function (t) {
            var e = this.ptr;
            t && "object" == typeof t && (t = t.ptr), Se(e, t);
          }, $r.prototype = Object.create(Dr.prototype), $r.prototype.constructor = $r, $r.prototype.__class__ = $r, $r.__cache__ = {}, t.PeHorizon = $r, $r.prototype.getNump = $r.prototype.getNump = function () {
            var t = this.ptr;
            return he(t);
          }, $r.prototype.getKind = $r.prototype.getKind = function () {
            var t = this.ptr;
            return Ne(t);
          }, $r.prototype.getInclusive = $r.prototype.getInclusive = function () {
            var t = this.ptr;
            return Me(t);
          }, $r.prototype.getSize = $r.prototype.getSize = function () {
            var t = this.ptr;
            return ve(t);
          }, $r.prototype.getCoord = $r.prototype.getCoord = function () {
            var t = this.ptr;
            return De(t);
          }, Qr.prototype = Object.create(Dr.prototype), Qr.prototype.constructor = Qr, Qr.prototype.__class__ = Qr, Qr.__cache__ = {}, t.PeFactory = Qr, Qr.prototype.initialize = Qr.prototype.initialize = function (t) {
            var e = this.ptr;
            Ur.prepare(), t = t && "object" == typeof t ? t.ptr : wr(t), Re(e, t);
          }, Qr.prototype.factoryByType = Qr.prototype.factoryByType = function (t, e) {
            var n = this.ptr;
            return t && "object" == typeof t && (t = t.ptr), e && "object" == typeof e && (e = e.ptr), Ar(Ae(n, t, e), Xr);
          }, Qr.prototype.fromString = Qr.prototype.fromString = function (t, e) {
            var n = this.ptr;
            return Ur.prepare(), t && "object" == typeof t && (t = t.ptr), e = e && "object" == typeof e ? e.ptr : wr(e), Ar(Ge(n, t, e), Xr);
          }, Qr.prototype.getCode = Qr.prototype.getCode = function (t) {
            var e = this.ptr;
            return t && "object" == typeof t && (t = t.ptr), Ce(e, t);
          }, t_.prototype = Object.create(Dr.prototype), t_.prototype.constructor = t_, t_.prototype.__class__ = t_, t_.__cache__ = {}, t.PeGTlistExtended = t_, t_.prototype.getGTlist = t_.prototype.getGTlist = function (t, e, n, r, _, o) {
            var p = this.ptr;
            return t && "object" == typeof t && (t = t.ptr), e && "object" == typeof e && (e = e.ptr), n && "object" == typeof n && (n = n.ptr), r && "object" == typeof r && (r = r.ptr), _ && "object" == typeof _ && (_ = _.ptr), o && "object" == typeof o && (o = o.ptr), Ar(Ie(p, t, e, n, r, _, o), Kr);
          }, t_.prototype.get_PE_GTLIST_OPTS_COMMON = t_.prototype.get_PE_GTLIST_OPTS_COMMON = function () {
            var t = this.ptr;
            return je(t);
          }, Object.defineProperty(t_.prototype, "PE_GTLIST_OPTS_COMMON", {
            get: t_.prototype.get_PE_GTLIST_OPTS_COMMON
          }), e_.prototype = Object.create(Xr.prototype), e_.prototype.constructor = e_, e_.prototype.__class__ = e_, e_.__cache__ = {}, t.PeUnit = e_, e_.prototype.getUnitFactor = e_.prototype.getUnitFactor = function () {
            var t = this.ptr;
            return Le(t);
          }, e_.prototype.getCode = e_.prototype.getCode = function () {
            var t = this.ptr;
            return Ue(t);
          }, e_.prototype.getName = e_.prototype.getName = function (t) {
            var e = this.ptr;
            return Ur.prepare(), "object" == typeof t && (t = Fr(t)), M(we(e, t));
          }, e_.prototype.getType = e_.prototype.getType = function () {
            var t = this.ptr;
            return Fe(t);
          }, n_.prototype = Object.create(Zr.prototype), n_.prototype.constructor = n_, n_.prototype.__class__ = n_, n_.__cache__ = {}, t.PeGeogcs = n_, n_.prototype.getDatum = n_.prototype.getDatum = function () {
            var t = this.ptr;
            return Ar(xe(t), Br);
          }, n_.prototype.getPrimem = n_.prototype.getPrimem = function () {
            var t = this.ptr;
            return Ar(Ye(t), i_);
          }, n_.prototype.getUnit = n_.prototype.getUnit = function () {
            var t = this.ptr;
            return Ar(He(t), e_);
          }, n_.prototype.getCode = n_.prototype.getCode = function () {
            var t = this.ptr;
            return ze(t);
          }, n_.prototype.getName = n_.prototype.getName = function (t) {
            var e = this.ptr;
            return Ur.prepare(), "object" == typeof t && (t = Fr(t)), M(Xe(e, t));
          }, n_.prototype.getType = n_.prototype.getType = function () {
            var t = this.ptr;
            return Ze(t);
          }, r_.prototype = Object.create(Dr.prototype), r_.prototype.constructor = r_, r_.prototype.__class__ = r_, r_.__cache__ = {}, t.PeGCSExtent = r_, r_.prototype.getLLon = r_.prototype.getLLon = function () {
            var t = this.ptr;
            return We(t);
          }, r_.prototype.getSLat = r_.prototype.getSLat = function () {
            var t = this.ptr;
            return Ve(t);
          }, r_.prototype.getRLon = r_.prototype.getRLon = function () {
            var t = this.ptr;
            return ke(t);
          }, r_.prototype.getNLat = r_.prototype.getNLat = function () {
            var t = this.ptr;
            return qe(t);
          }, r_.prototype.__destroy__ = r_.prototype.__destroy__ = function () {
            var t = this.ptr;
            Je(t);
          }, __.prototype = Object.create(Dr.prototype), __.prototype.constructor = __, __.prototype.__class__ = __, __.__cache__ = {}, t.PePCSInfo = __, __.prototype.getCentralMeridian = __.prototype.getCentralMeridian = function () {
            var t = this.ptr;
            return Ke(t);
          }, __.prototype.getDomainMinx = __.prototype.getDomainMinx = function () {
            var t = this.ptr;
            return $e(t);
          }, __.prototype.getDomainMiny = __.prototype.getDomainMiny = function () {
            var t = this.ptr;
            return Qe(t);
          }, __.prototype.getDomainMaxx = __.prototype.getDomainMaxx = function () {
            var t = this.ptr;
            return tn(t);
          }, __.prototype.getDomainMaxy = __.prototype.getDomainMaxy = function () {
            var t = this.ptr;
            return en(t);
          }, __.prototype.getNorthPoleLocation = __.prototype.getNorthPoleLocation = function () {
            var t = this.ptr;
            return nn(t);
          }, __.prototype.getNorthPoleGeometry = __.prototype.getNorthPoleGeometry = function () {
            var t = this.ptr;
            return rn(t);
          }, __.prototype.getSouthPoleLocation = __.prototype.getSouthPoleLocation = function () {
            var t = this.ptr;
            return _n(t);
          }, __.prototype.getSouthPoleGeometry = __.prototype.getSouthPoleGeometry = function () {
            var t = this.ptr;
            return on(t);
          }, __.prototype.isDensificationNeeded = __.prototype.isDensificationNeeded = function () {
            var t = this.ptr;
            return !!pn(t);
          }, __.prototype.isGcsHorizonMultiOverlap = __.prototype.isGcsHorizonMultiOverlap = function () {
            var t = this.ptr;
            return !!cn(t);
          }, __.prototype.isPannableRectangle = __.prototype.isPannableRectangle = function () {
            var t = this.ptr;
            return !!an(t);
          }, __.prototype.generate = __.prototype.generate = function (t, e) {
            var n = this.ptr;
            return t && "object" == typeof t && (t = t.ptr), e && "object" == typeof e && (e = e.ptr), Ar(sn(n, t, e), __);
          }, __.prototype.get_PE_PCSINFO_OPTION_NONE = __.prototype.get_PE_PCSINFO_OPTION_NONE = function () {
            var t = this.ptr;
            return un(t);
          }, Object.defineProperty(__.prototype, "PE_PCSINFO_OPTION_NONE", {
            get: __.prototype.get_PE_PCSINFO_OPTION_NONE
          }), __.prototype.get_PE_PCSINFO_OPTION_DOMAIN = __.prototype.get_PE_PCSINFO_OPTION_DOMAIN = function () {
            var t = this.ptr;
            return Pn(t);
          }, Object.defineProperty(__.prototype, "PE_PCSINFO_OPTION_DOMAIN", {
            get: __.prototype.get_PE_PCSINFO_OPTION_DOMAIN
          }), __.prototype.get_PE_POLE_OUTSIDE_BOUNDARY = __.prototype.get_PE_POLE_OUTSIDE_BOUNDARY = function () {
            var t = this.ptr;
            return yn(t);
          }, Object.defineProperty(__.prototype, "PE_POLE_OUTSIDE_BOUNDARY", {
            get: __.prototype.get_PE_POLE_OUTSIDE_BOUNDARY
          }), __.prototype.get_PE_POLE_POINT = __.prototype.get_PE_POLE_POINT = function () {
            var t = this.ptr;
            return gn(t);
          }, Object.defineProperty(__.prototype, "PE_POLE_POINT", {
            get: __.prototype.get_PE_POLE_POINT
          }), o_.prototype = Object.create(Zr.prototype), o_.prototype.constructor = o_, o_.prototype.__class__ = o_, o_.__cache__ = {}, t.PeProjcs = o_, o_.prototype.getGeogcs = o_.prototype.getGeogcs = function () {
            var t = this.ptr;
            return Ar(fn(t), n_);
          }, o_.prototype.getParameters = o_.prototype.getParameters = function () {
            var t = this.ptr;
            return ln(t);
          }, o_.prototype.getUnit = o_.prototype.getUnit = function () {
            var t = this.ptr;
            return Ar(mn(t), e_);
          }, o_.prototype.loadConstants = o_.prototype.loadConstants = function () {
            var t = this.ptr;
            return !!dn(t);
          }, o_.prototype.horizonGcsGenerate = o_.prototype.horizonGcsGenerate = function () {
            var t = this.ptr;
            return Ar(En(t), $r);
          }, o_.prototype.horizonPcsGenerate = o_.prototype.horizonPcsGenerate = function () {
            var t = this.ptr;
            return Ar(bn(t), $r);
          }, o_.prototype.getCode = o_.prototype.getCode = function () {
            var t = this.ptr;
            return On(t);
          }, o_.prototype.getName = o_.prototype.getName = function (t) {
            var e = this.ptr;
            return Ur.prepare(), "object" == typeof t && (t = Fr(t)), M(Tn(e, t));
          }, o_.prototype.getType = o_.prototype.getType = function () {
            var t = this.ptr;
            return Sn(t);
          }, p_.prototype = Object.create(Dr.prototype), p_.prototype.constructor = p_, p_.prototype.__class__ = p_, p_.__cache__ = {}, t.PeGTlistExtendedGTs = p_, p_.prototype.getDirection = p_.prototype.getDirection = function () {
            var t = this.ptr;
            return hn(t);
          }, p_.prototype.getGeogtran = p_.prototype.getGeogtran = function () {
            var t = this.ptr;
            return Ar(Nn(t), a_);
          }, i_.prototype = Object.create(Xr.prototype), i_.prototype.constructor = i_, i_.prototype.__class__ = i_, i_.__cache__ = {}, t.PePrimem = i_, i_.prototype.getLongitude = i_.prototype.getLongitude = function () {
            var t = this.ptr;
            return Mn(t);
          }, i_.prototype.getCode = i_.prototype.getCode = function () {
            var t = this.ptr;
            return vn(t);
          }, i_.prototype.getName = i_.prototype.getName = function (t) {
            var e = this.ptr;
            return Ur.prepare(), "object" == typeof t && (t = Fr(t)), M(Dn(e, t));
          }, i_.prototype.getType = i_.prototype.getType = function () {
            var t = this.ptr;
            return Rn(t);
          }, c_.prototype = Object.create(Dr.prototype), c_.prototype.constructor = c_, c_.prototype.__class__ = c_, c_.__cache__ = {}, t.PeNotationMgrs = c_, c_.prototype.get_PE_MGRS_STYLE_NEW = c_.prototype.get_PE_MGRS_STYLE_NEW = function () {
            var t = this.ptr;
            return An(t);
          }, Object.defineProperty(c_.prototype, "PE_MGRS_STYLE_NEW", {
            get: c_.prototype.get_PE_MGRS_STYLE_NEW
          }), c_.prototype.get_PE_MGRS_STYLE_OLD = c_.prototype.get_PE_MGRS_STYLE_OLD = function () {
            var t = this.ptr;
            return Gn(t);
          }, Object.defineProperty(c_.prototype, "PE_MGRS_STYLE_OLD", {
            get: c_.prototype.get_PE_MGRS_STYLE_OLD
          }), c_.prototype.get_PE_MGRS_STYLE_AUTO = c_.prototype.get_PE_MGRS_STYLE_AUTO = function () {
            var t = this.ptr;
            return Cn(t);
          }, Object.defineProperty(c_.prototype, "PE_MGRS_STYLE_AUTO", {
            get: c_.prototype.get_PE_MGRS_STYLE_AUTO
          }), c_.prototype.get_PE_MGRS_180_ZONE_1_PLUS = c_.prototype.get_PE_MGRS_180_ZONE_1_PLUS = function () {
            var t = this.ptr;
            return In(t);
          }, Object.defineProperty(c_.prototype, "PE_MGRS_180_ZONE_1_PLUS", {
            get: c_.prototype.get_PE_MGRS_180_ZONE_1_PLUS
          }), c_.prototype.get_PE_MGRS_ADD_SPACES = c_.prototype.get_PE_MGRS_ADD_SPACES = function () {
            var t = this.ptr;
            return jn(t);
          }, Object.defineProperty(c_.prototype, "PE_MGRS_ADD_SPACES", {
            get: c_.prototype.get_PE_MGRS_ADD_SPACES
          }), a_.prototype = Object.create(Xr.prototype), a_.prototype.constructor = a_, a_.prototype.__class__ = a_, a_.__cache__ = {}, t.PeGeogtran = a_, a_.prototype.isEqual = a_.prototype.isEqual = function (t) {
            var e = this.ptr;
            return t && "object" == typeof t && (t = t.ptr), !!Ln(e, t);
          }, a_.prototype.getGeogcs1 = a_.prototype.getGeogcs1 = function () {
            var t = this.ptr;
            return Ar(Un(t), n_);
          }, a_.prototype.getGeogcs2 = a_.prototype.getGeogcs2 = function () {
            var t = this.ptr;
            return Ar(wn(t), n_);
          }, a_.prototype.getParameters = a_.prototype.getParameters = function () {
            var t = this.ptr;
            return Fn(t);
          }, a_.prototype.loadConstants = a_.prototype.loadConstants = function () {
            var t = this.ptr;
            return !!xn(t);
          }, a_.prototype.getCode = a_.prototype.getCode = function () {
            var t = this.ptr;
            return Yn(t);
          }, a_.prototype.getName = a_.prototype.getName = function (t) {
            var e = this.ptr;
            return Ur.prepare(), "object" == typeof t && (t = Fr(t)), M(Hn(e, t));
          }, a_.prototype.getType = a_.prototype.getType = function () {
            var t = this.ptr;
            return zn(t);
          }, s_.prototype = Object.create(Dr.prototype), s_.prototype.constructor = s_, s_.prototype.__class__ = s_, s_.__cache__ = {}, t.PeDefs = s_, s_.prototype.get_PE_BUFFER_MAX = s_.prototype.get_PE_BUFFER_MAX = function () {
            var t = this.ptr;
            return Xn(t);
          }, Object.defineProperty(s_.prototype, "PE_BUFFER_MAX", {
            get: s_.prototype.get_PE_BUFFER_MAX
          }), s_.prototype.get_PE_NAME_MAX = s_.prototype.get_PE_NAME_MAX = function () {
            var t = this.ptr;
            return Zn(t);
          }, Object.defineProperty(s_.prototype, "PE_NAME_MAX", {
            get: s_.prototype.get_PE_NAME_MAX
          }), s_.prototype.get_PE_MGRS_MAX = s_.prototype.get_PE_MGRS_MAX = function () {
            var t = this.ptr;
            return Bn(t);
          }, Object.defineProperty(s_.prototype, "PE_MGRS_MAX", {
            get: s_.prototype.get_PE_MGRS_MAX
          }), s_.prototype.get_PE_USNG_MAX = s_.prototype.get_PE_USNG_MAX = function () {
            var t = this.ptr;
            return Wn(t);
          }, Object.defineProperty(s_.prototype, "PE_USNG_MAX", {
            get: s_.prototype.get_PE_USNG_MAX
          }), s_.prototype.get_PE_DD_MAX = s_.prototype.get_PE_DD_MAX = function () {
            var t = this.ptr;
            return Vn(t);
          }, Object.defineProperty(s_.prototype, "PE_DD_MAX", {
            get: s_.prototype.get_PE_DD_MAX
          }), s_.prototype.get_PE_DMS_MAX = s_.prototype.get_PE_DMS_MAX = function () {
            var t = this.ptr;
            return kn(t);
          }, Object.defineProperty(s_.prototype, "PE_DMS_MAX", {
            get: s_.prototype.get_PE_DMS_MAX
          }), s_.prototype.get_PE_DDM_MAX = s_.prototype.get_PE_DDM_MAX = function () {
            var t = this.ptr;
            return qn(t);
          }, Object.defineProperty(s_.prototype, "PE_DDM_MAX", {
            get: s_.prototype.get_PE_DDM_MAX
          }), s_.prototype.get_PE_UTM_MAX = s_.prototype.get_PE_UTM_MAX = function () {
            var t = this.ptr;
            return Jn(t);
          }, Object.defineProperty(s_.prototype, "PE_UTM_MAX", {
            get: s_.prototype.get_PE_UTM_MAX
          }), s_.prototype.get_PE_PARM_MAX = s_.prototype.get_PE_PARM_MAX = function () {
            var t = this.ptr;
            return Kn(t);
          }, Object.defineProperty(s_.prototype, "PE_PARM_MAX", {
            get: s_.prototype.get_PE_PARM_MAX
          }), s_.prototype.get_PE_TYPE_NONE = s_.prototype.get_PE_TYPE_NONE = function () {
            var t = this.ptr;
            return $n(t);
          }, Object.defineProperty(s_.prototype, "PE_TYPE_NONE", {
            get: s_.prototype.get_PE_TYPE_NONE
          }), s_.prototype.get_PE_TYPE_GEOGCS = s_.prototype.get_PE_TYPE_GEOGCS = function () {
            var t = this.ptr;
            return Qn(t);
          }, Object.defineProperty(s_.prototype, "PE_TYPE_GEOGCS", {
            get: s_.prototype.get_PE_TYPE_GEOGCS
          }), s_.prototype.get_PE_TYPE_PROJCS = s_.prototype.get_PE_TYPE_PROJCS = function () {
            var t = this.ptr;
            return tr(t);
          }, Object.defineProperty(s_.prototype, "PE_TYPE_PROJCS", {
            get: s_.prototype.get_PE_TYPE_PROJCS
          }), s_.prototype.get_PE_TYPE_GEOGTRAN = s_.prototype.get_PE_TYPE_GEOGTRAN = function () {
            var t = this.ptr;
            return er(t);
          }, Object.defineProperty(s_.prototype, "PE_TYPE_GEOGTRAN", {
            get: s_.prototype.get_PE_TYPE_GEOGTRAN
          }), s_.prototype.get_PE_TYPE_COORDSYS = s_.prototype.get_PE_TYPE_COORDSYS = function () {
            var t = this.ptr;
            return nr(t);
          }, Object.defineProperty(s_.prototype, "PE_TYPE_COORDSYS", {
            get: s_.prototype.get_PE_TYPE_COORDSYS
          }), s_.prototype.get_PE_TYPE_UNIT = s_.prototype.get_PE_TYPE_UNIT = function () {
            var t = this.ptr;
            return rr(t);
          }, Object.defineProperty(s_.prototype, "PE_TYPE_UNIT", {
            get: s_.prototype.get_PE_TYPE_UNIT
          }), s_.prototype.get_PE_STR_OPTS_NONE = s_.prototype.get_PE_STR_OPTS_NONE = function () {
            var t = this.ptr;
            return _r(t);
          }, Object.defineProperty(s_.prototype, "PE_STR_OPTS_NONE", {
            get: s_.prototype.get_PE_STR_OPTS_NONE
          }), s_.prototype.get_PE_STR_AUTH_NONE = s_.prototype.get_PE_STR_AUTH_NONE = function () {
            var t = this.ptr;
            return or(t);
          }, Object.defineProperty(s_.prototype, "PE_STR_AUTH_NONE", {
            get: s_.prototype.get_PE_STR_AUTH_NONE
          }), s_.prototype.get_PE_STR_AUTH_TOP = s_.prototype.get_PE_STR_AUTH_TOP = function () {
            var t = this.ptr;
            return pr(t);
          }, Object.defineProperty(s_.prototype, "PE_STR_AUTH_TOP", {
            get: s_.prototype.get_PE_STR_AUTH_TOP
          }), s_.prototype.get_PE_STR_NAME_CANON = s_.prototype.get_PE_STR_NAME_CANON = function () {
            var t = this.ptr;
            return ir(t);
          }, Object.defineProperty(s_.prototype, "PE_STR_NAME_CANON", {
            get: s_.prototype.get_PE_STR_NAME_CANON
          }), s_.prototype.get_PE_PARM_X0 = s_.prototype.get_PE_PARM_X0 = function () {
            var t = this.ptr;
            return cr(t);
          }, Object.defineProperty(s_.prototype, "PE_PARM_X0", {
            get: s_.prototype.get_PE_PARM_X0
          }), s_.prototype.get_PE_PARM_ND = s_.prototype.get_PE_PARM_ND = function () {
            var t = this.ptr;
            return ar(t);
          }, Object.defineProperty(s_.prototype, "PE_PARM_ND", {
            get: s_.prototype.get_PE_PARM_ND
          }), s_.prototype.get_PE_TRANSFORM_1_TO_2 = s_.prototype.get_PE_TRANSFORM_1_TO_2 = function () {
            var t = this.ptr;
            return sr(t);
          }, Object.defineProperty(s_.prototype, "PE_TRANSFORM_1_TO_2", {
            get: s_.prototype.get_PE_TRANSFORM_1_TO_2
          }), s_.prototype.get_PE_TRANSFORM_2_TO_1 = s_.prototype.get_PE_TRANSFORM_2_TO_1 = function () {
            var t = this.ptr;
            return ur(t);
          }, Object.defineProperty(s_.prototype, "PE_TRANSFORM_2_TO_1", {
            get: s_.prototype.get_PE_TRANSFORM_2_TO_1
          }), s_.prototype.get_PE_TRANSFORM_P_TO_G = s_.prototype.get_PE_TRANSFORM_P_TO_G = function () {
            var t = this.ptr;
            return Pr(t);
          }, Object.defineProperty(s_.prototype, "PE_TRANSFORM_P_TO_G", {
            get: s_.prototype.get_PE_TRANSFORM_P_TO_G
          }), s_.prototype.get_PE_TRANSFORM_G_TO_P = s_.prototype.get_PE_TRANSFORM_G_TO_P = function () {
            var t = this.ptr;
            return yr(t);
          }, Object.defineProperty(s_.prototype, "PE_TRANSFORM_G_TO_P", {
            get: s_.prototype.get_PE_TRANSFORM_G_TO_P
          }), s_.prototype.get_PE_HORIZON_RECT = s_.prototype.get_PE_HORIZON_RECT = function () {
            var t = this.ptr;
            return gr(t);
          }, Object.defineProperty(s_.prototype, "PE_HORIZON_RECT", {
            get: s_.prototype.get_PE_HORIZON_RECT
          }), s_.prototype.get_PE_HORIZON_POLY = s_.prototype.get_PE_HORIZON_POLY = function () {
            var t = this.ptr;
            return fr(t);
          }, Object.defineProperty(s_.prototype, "PE_HORIZON_POLY", {
            get: s_.prototype.get_PE_HORIZON_POLY
          }), s_.prototype.get_PE_HORIZON_LINE = s_.prototype.get_PE_HORIZON_LINE = function () {
            var t = this.ptr;
            return lr(t);
          }, Object.defineProperty(s_.prototype, "PE_HORIZON_LINE", {
            get: s_.prototype.get_PE_HORIZON_LINE
          }), s_.prototype.get_PE_HORIZON_DELTA = s_.prototype.get_PE_HORIZON_DELTA = function () {
            var t = this.ptr;
            return mr(t);
          }, Object.defineProperty(s_.prototype, "PE_HORIZON_DELTA", {
            get: s_.prototype.get_PE_HORIZON_DELTA
          }), u_.prototype = Object.create(Dr.prototype), u_.prototype.constructor = u_, u_.prototype.__class__ = u_, u_.__cache__ = {}, t.PeInteger = u_, u_.prototype.get_val = u_.prototype.get_val = function () {
            var t = this.ptr;
            return Er(t);
          }, u_.prototype.set_val = u_.prototype.set_val = function (t) {
            var e = this.ptr;
            t && "object" == typeof t && (t = t.ptr), br(e, t);
          }, Object.defineProperty(u_.prototype, "val", {
            get: u_.prototype.get_val,
            set: u_.prototype.set_val
          }), u_.prototype.__destroy__ = u_.prototype.__destroy__ = function () {
            var t = this.ptr;
            Or(t);
          }, t.ensureCache = Ur, t.ensureString = wr, t.ensureInt8 = Fr, t.ensureInt16 = xr, t.ensureInt32 = Yr, t.ensureFloat32 = Hr, t.ensureFloat64 = zr, t.ready;
        }, t.exports = r;
      }),
          n = Object.freeze(Object.assign(Object.create(null), e, {
        "default": e
      }));
      /***/
    }
  }]);
})();
//# sourceMappingURL=pe-wasm-js-es5.js.map