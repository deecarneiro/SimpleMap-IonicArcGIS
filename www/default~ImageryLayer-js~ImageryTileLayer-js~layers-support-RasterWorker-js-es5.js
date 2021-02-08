(function () {
  function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

  function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

  function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

  function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

  function _iterableToArrayLimit(arr, i) { if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr))) return; var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

  function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

  function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

  function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

  function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

  function _possibleConstructorReturn(self, call) { if (call && (typeof call === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

  function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

  function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

  function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

  function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

  function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

  function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

  function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["default~ImageryLayer-js~ImageryTileLayer-js~layers-support-RasterWorker-js"], {
    /***/
    "0ynT":
    /*!******************************************************!*\
      !*** ./node_modules/@arcgis/core/core/colorUtils.js ***!
      \******************************************************/

    /*! exports provided: darken, toHSV, toLAB, toLCH, toRGB, toXYZ */

    /***/
    function ynT(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "darken", function () {
        return x;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "toHSV", function () {
        return p;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "toLAB", function () {
        return m;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "toLCH", function () {
        return d;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "toRGB", function () {
        return g;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "toXYZ", function () {
        return w;
      });
      /*
      All material copyright ESRI, All Rights Reserved, unless otherwise specified.
      See https://js.arcgis.com/4.18/esri/copyright.txt for details.
      */


      function n(n) {
        return "h" in n && "s" in n && "v" in n;
      }

      function t(n) {
        return "l" in n && "a" in n && "b" in n;
      }

      function r(n) {
        return "l" in n && "c" in n && "h" in n;
      }

      function o(n) {
        return "x" in n && "y" in n && "z" in n;
      }

      var u = [[.4124, .3576, .1805], [.2126, .7152, .0722], [.0193, .1192, .9505]],
          a = [[3.2406, -1.5372, -.4986], [-.9689, 1.8758, .0415], [.0557, -.204, 1.057]];

      function e(n, t) {
        var r = [];
        var o, u;
        if (n[0].length !== t.length) throw "dimensions do not match";
        var a = n.length,
            e = n[0].length;
        var c = 0;

        for (o = 0; o < a; o++) {
          for (c = 0, u = 0; u < e; u++) {
            c += n[o][u] * t[u];
          }

          r.push(c);
        }

        return r;
      }

      function c(n) {
        var t = [n.r / 255, n.g / 255, n.b / 255].map(function (n) {
          return n <= .04045 ? n / 12.92 : Math.pow((n + .055) / 1.055, 2.4);
        }),
            r = e(u, t);
        return {
          x: 100 * r[0],
          y: 100 * r[1],
          z: 100 * r[2]
        };
      }

      function i(n) {
        var t = e(a, [n.x / 100, n.y / 100, n.z / 100]).map(function (n) {
          var t = n <= .0031308 ? 12.92 * n : 1.055 * Math.pow(n, 1 / 2.4) - .055;
          return Math.min(1, Math.max(t, 0));
        });
        return {
          r: Math.round(255 * t[0]),
          g: Math.round(255 * t[1]),
          b: Math.round(255 * t[2])
        };
      }

      function h(n) {
        var t = [n.x / 95.047, n.y / 100, n.z / 108.883].map(function (n) {
          return n > Math.pow(6 / 29, 3) ? Math.pow(n, 1 / 3) : 1 / 3 * Math.pow(29 / 6, 2) * n + 4 / 29;
        });
        return {
          l: 116 * t[1] - 16,
          a: 500 * (t[0] - t[1]),
          b: 200 * (t[1] - t[2])
        };
      }

      function s(n) {
        var t = n.l,
            r = [(t + 16) / 116 + n.a / 500, (t + 16) / 116, (t + 16) / 116 - n.b / 200].map(function (n) {
          return n > 6 / 29 ? Math.pow(n, 3) : 3 * Math.pow(6 / 29, 2) * (n - 4 / 29);
        });
        return {
          x: 95.047 * r[0],
          y: 100 * r[1],
          z: 108.883 * r[2]
        };
      }

      function f(n) {
        return h(c(n));
      }

      function b(n) {
        return i(s(n));
      }

      function M(n) {
        return function (n) {
          var t = n.l,
              r = n.a,
              o = n.b,
              u = Math.sqrt(r * r + o * o);
          var a = Math.atan2(o, r);
          return a = a > 0 ? a : a + 2 * Math.PI, {
            l: t,
            c: u,
            h: a
          };
        }(h(c(n)));
      }

      function l(n) {
        return i(s(function (n) {
          var t = n.l,
              r = n.c,
              o = n.h;
          return {
            l: t,
            a: r * Math.cos(o),
            b: r * Math.sin(o)
          };
        }(n)));
      }

      function g(u) {
        return function (n) {
          return "r" in n && "g" in n && "b" in n;
        }(u) ? u : r(u) ? l(u) : t(u) ? b(u) : o(u) ? i(u) : n(u) ? function (n) {
          var t = (n.h + 360) % 360 / 60,
              r = n.s / 100,
              o = n.v / 100 * 255,
              u = o * r,
              a = u * (1 - Math.abs(t % 2 - 1));
          var e;

          switch (Math.floor(t)) {
            case 0:
              e = {
                r: u,
                g: a,
                b: 0
              };
              break;

            case 1:
              e = {
                r: a,
                g: u,
                b: 0
              };
              break;

            case 2:
              e = {
                r: 0,
                g: u,
                b: a
              };
              break;

            case 3:
              e = {
                r: 0,
                g: a,
                b: u
              };
              break;

            case 4:
              e = {
                r: a,
                g: 0,
                b: u
              };
              break;

            case 5:
            case 6:
              e = {
                r: u,
                g: 0,
                b: a
              };
              break;

            default:
              e = {
                r: 0,
                g: 0,
                b: 0
              };
          }

          return e.r = Math.round(e.r + o - u), e.g = Math.round(e.g + o - u), e.b = Math.round(e.b + o - u), e;
        }(u) : u;
      }

      function p(t) {
        if (n(t)) return t;
        return function (n) {
          var t = n.r,
              r = n.g,
              o = n.b,
              u = Math.max(t, r, o),
              a = u - Math.min(t, r, o);
          var e = u,
              c = 0 === a ? 0 : u === t ? (r - o) / a % 6 : u === r ? (o - t) / a + 2 : (t - r) / a + 4,
              i = 0 === a ? 0 : a / e;
          return c < 0 && (c += 6), c *= 60, i *= 100, e *= 100 / 255, {
            h: c,
            s: i,
            v: e
          };
        }(g(t));
      }

      function m(n) {
        return t(n) ? n : f(g(n));
      }

      function d(n) {
        return r(n) ? n : M(g(n));
      }

      function w(n) {
        return o(n) ? n : c(g(n));
      }

      function x(n, t) {
        var r = f(n);
        return r.l *= 1 - t, b(r);
      }
      /***/

    },

    /***/
    "5VpP":
    /*!*************************************************************************!*\
      !*** ./node_modules/@arcgis/core/layers/support/rasterFormats/utils.js ***!
      \*************************************************************************/

    /*! exports provided: isPlatformLittleEndian */

    /***/
    function VpP(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "isPlatformLittleEndian", function () {
        return r;
      });
      /*
      All material copyright ESRI, All Rights Reserved, unless otherwise specified.
      See https://js.arcgis.com/4.18/esri/copyright.txt for details.
      */


      var r = function () {
        var r = new ArrayBuffer(4),
            n = new Uint8Array(r);
        return new Uint32Array(r)[0] = 1, 1 === n[0];
      }();
      /***/

    },

    /***/
    "6Q66":
    /*!*************************************************!*\
      !*** ./node_modules/@arcgis/core/chunks/Jpg.js ***!
      \*************************************************/

    /*! exports provided: J */

    /***/
    function Q66(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "J", function () {
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


      var n = Object(_commonjsHelpers_js__WEBPACK_IMPORTED_MODULE_0__["c"])(function (e) {
        var n, r;
        n = function () {
          function e(e) {
            this.message = "JPEG error: " + e;
          }

          return e.prototype = new Error(), e.prototype.name = "JpegError", e.constructor = e, e;
        }(), void 0 !== (r = function () {
          if (!self || !self.Uint8ClampedArray) return null;
          var e = new Uint8Array([0, 1, 8, 16, 9, 2, 3, 10, 17, 24, 32, 25, 18, 11, 4, 5, 12, 19, 26, 33, 40, 48, 41, 34, 27, 20, 13, 6, 7, 14, 21, 28, 35, 42, 49, 56, 57, 50, 43, 36, 29, 22, 15, 23, 30, 37, 44, 51, 58, 59, 52, 45, 38, 31, 39, 46, 53, 60, 61, 54, 47, 55, 62, 63]),
              r = 4017,
              o = 799,
              a = 3406,
              t = 2276,
              i = 1567,
              s = 3784,
              c = 5793,
              f = 2896;

          function l() {
            this.decodeTransform = null, this.colorTransform = -1;
          }

          function u(e, n) {
            for (var r, o, a = 0, t = [], i = 16; i > 0 && !e[i - 1];) {
              i--;
            }

            t.push({
              children: [],
              index: 0
            });
            var s,
                c = t[0];

            for (r = 0; r < i; r++) {
              for (o = 0; o < e[r]; o++) {
                for ((c = t.pop()).children[c.index] = n[a]; c.index > 0;) {
                  c = t.pop();
                }

                for (c.index++, t.push(c); t.length <= r;) {
                  t.push(s = {
                    children: [],
                    index: 0
                  }), c.children[c.index] = s.children, c = s;
                }

                a++;
              }

              r + 1 < i && (t.push(s = {
                children: [],
                index: 0
              }), c.children[c.index] = s.children, c = s);
            }

            return t[0].children;
          }

          function h(e, n, r) {
            return 64 * ((e.blocksPerLine + 1) * n + r);
          }

          function v(r, o, a, t, i, s, c, f, l) {
            var u = a.mcusPerLine,
                v = a.progressive,
                m = o,
                d = 0,
                p = 0;

            function k() {
              if (p > 0) return p--, d >> p & 1;

              if (255 === (d = r[o++])) {
                var e = r[o++];
                if (e) throw new n("unexpected marker " + (d << 8 | e).toString(16));
              }

              return p = 7, d >>> 7;
            }

            function g(e) {
              for (var r = e;;) {
                if ("number" == typeof (r = r[k()])) return r;
                if ("object" != typeof r) throw new n("invalid huffman sequence");
              }
            }

            function C(e) {
              for (var n = 0; e > 0;) {
                n = n << 1 | k(), e--;
              }

              return n;
            }

            function w(e) {
              if (1 === e) return 1 === k() ? 1 : -1;
              var n = C(e);
              return n >= 1 << e - 1 ? n : n + (-1 << e) + 1;
            }

            function x(n, r) {
              var o = g(n.huffmanTableDC),
                  a = 0 === o ? 0 : w(o);
              n.blockData[r] = n.pred += a;

              for (var t = 1; t < 64;) {
                var i = g(n.huffmanTableAC),
                    s = 15 & i,
                    c = i >> 4;

                if (0 !== s) {
                  var f = e[t += c];
                  n.blockData[r + f] = w(s), t++;
                } else {
                  if (c < 15) break;
                  t += 16;
                }
              }
            }

            function y(e, n) {
              var r = g(e.huffmanTableDC),
                  o = 0 === r ? 0 : w(r) << l;
              e.blockData[n] = e.pred += o;
            }

            function D(e, n) {
              e.blockData[n] |= k() << l;
            }

            var T = 0;

            function P(n, r) {
              if (T > 0) T--;else for (var o = s, a = c; o <= a;) {
                var t = g(n.huffmanTableAC),
                    i = 15 & t,
                    f = t >> 4;

                if (0 !== i) {
                  var u = e[o += f];
                  n.blockData[r + u] = w(i) * (1 << l), o++;
                } else {
                  if (f < 15) {
                    T = C(f) + (1 << f) - 1;
                    break;
                  }

                  o += 16;
                }
              }
            }

            var L,
                A = 0;

            function _(r, o) {
              for (var a, t, i = s, f = c, u = 0; i <= f;) {
                var h = e[i];

                switch (A) {
                  case 0:
                    if (u = (t = g(r.huffmanTableAC)) >> 4, 0 == (a = 15 & t)) u < 15 ? (T = C(u) + (1 << u), A = 4) : (u = 16, A = 1);else {
                      if (1 !== a) throw new n("invalid ACn encoding");
                      L = w(a), A = u ? 2 : 3;
                    }
                    continue;

                  case 1:
                  case 2:
                    r.blockData[o + h] ? r.blockData[o + h] += k() << l : 0 == --u && (A = 2 === A ? 3 : 0);
                    break;

                  case 3:
                    r.blockData[o + h] ? r.blockData[o + h] += k() << l : (r.blockData[o + h] = L << l, A = 0);
                    break;

                  case 4:
                    r.blockData[o + h] && (r.blockData[o + h] += k() << l);
                }

                i++;
              }

              4 === A && 0 == --T && (A = 0);
            }

            function U(e, n, r, o, a) {
              var t = r % u;
              n(e, h(e, (r / u | 0) * e.v + o, t * e.h + a));
            }

            function z(e, n, r) {
              n(e, h(e, r / e.blocksPerLine | 0, r % e.blocksPerLine));
            }

            var I,
                M,
                Y,
                q,
                S,
                H,
                R = t.length;
            H = v ? 0 === s ? 0 === f ? y : D : 0 === f ? P : _ : x;
            var j,
                E,
                J,
                V,
                B = 0;

            for (E = 1 === R ? t[0].blocksPerLine * t[0].blocksPerColumn : u * a.mcusPerColumn; B < E;) {
              var N = i ? Math.min(E - B, i) : E;

              for (M = 0; M < R; M++) {
                t[M].pred = 0;
              }

              if (T = 0, 1 === R) for (I = t[0], S = 0; S < N; S++) {
                z(I, H, B), B++;
              } else for (S = 0; S < N; S++) {
                for (M = 0; M < R; M++) {
                  for (J = (I = t[M]).h, V = I.v, Y = 0; Y < V; Y++) {
                    for (q = 0; q < J; q++) {
                      U(I, H, B, Y, q);
                    }
                  }
                }

                B++;
              }
              p = 0, (j = b(r, o)) && j.invalid && (console.log("decodeScan - unexpected MCU data, next marker is: " + j.invalid), o = j.offset);
              var G = j && j.marker;
              if (!G || G <= 65280) throw new n("marker was not found");
              if (!(G >= 65488 && G <= 65495)) break;
              o += 2;
            }

            return (j = b(r, o)) && j.invalid && (console.log("decodeScan - unexpected Scan data, next marker is: " + j.invalid), o = j.offset), o - m;
          }

          function m(e, l, u) {
            var h,
                v,
                m,
                d,
                b,
                p,
                k,
                g,
                C,
                w,
                x,
                y,
                D,
                T,
                P,
                L,
                A,
                _ = e.quantizationTable,
                U = e.blockData;
            if (!_) throw new n("missing required Quantization Table.");

            for (var z = 0; z < 64; z += 8) {
              C = U[l + z], w = U[l + z + 1], x = U[l + z + 2], y = U[l + z + 3], D = U[l + z + 4], T = U[l + z + 5], P = U[l + z + 6], L = U[l + z + 7], C *= _[z], 0 != (w | x | y | D | T | P | L) ? (w *= _[z + 1], x *= _[z + 2], y *= _[z + 3], D *= _[z + 4], T *= _[z + 5], P *= _[z + 6], L *= _[z + 7], v = (h = (h = c * C + 128 >> 8) + (v = c * D + 128 >> 8) + 1 >> 1) - v, A = (m = x) * s + (d = P) * i + 128 >> 8, m = m * i - d * s + 128 >> 8, k = (b = (b = f * (w - L) + 128 >> 8) + (k = T << 4) + 1 >> 1) - k, p = (g = (g = f * (w + L) + 128 >> 8) + (p = y << 4) + 1 >> 1) - p, d = (h = h + (d = A) + 1 >> 1) - d, m = (v = v + m + 1 >> 1) - m, A = b * t + g * a + 2048 >> 12, b = b * a - g * t + 2048 >> 12, g = A, A = p * o + k * r + 2048 >> 12, p = p * r - k * o + 2048 >> 12, k = A, u[z] = h + g, u[z + 7] = h - g, u[z + 1] = v + k, u[z + 6] = v - k, u[z + 2] = m + p, u[z + 5] = m - p, u[z + 3] = d + b, u[z + 4] = d - b) : (A = c * C + 512 >> 10, u[z] = A, u[z + 1] = A, u[z + 2] = A, u[z + 3] = A, u[z + 4] = A, u[z + 5] = A, u[z + 6] = A, u[z + 7] = A);
            }

            for (var I = 0; I < 8; ++I) {
              C = u[I], 0 != ((w = u[I + 8]) | (x = u[I + 16]) | (y = u[I + 24]) | (D = u[I + 32]) | (T = u[I + 40]) | (P = u[I + 48]) | (L = u[I + 56])) ? (v = (h = 4112 + ((h = c * C + 2048 >> 12) + (v = c * D + 2048 >> 12) + 1 >> 1)) - v, A = (m = x) * s + (d = P) * i + 2048 >> 12, m = m * i - d * s + 2048 >> 12, d = A, k = (b = (b = f * (w - L) + 2048 >> 12) + (k = T) + 1 >> 1) - k, p = (g = (g = f * (w + L) + 2048 >> 12) + (p = y) + 1 >> 1) - p, A = b * t + g * a + 2048 >> 12, b = b * a - g * t + 2048 >> 12, g = A, A = p * o + k * r + 2048 >> 12, p = p * r - k * o + 2048 >> 12, C = (C = (h = h + d + 1 >> 1) + g) < 16 ? 0 : C >= 4080 ? 255 : C >> 4, w = (w = (v = v + m + 1 >> 1) + (k = A)) < 16 ? 0 : w >= 4080 ? 255 : w >> 4, x = (x = (m = v - m) + p) < 16 ? 0 : x >= 4080 ? 255 : x >> 4, y = (y = (d = h - d) + b) < 16 ? 0 : y >= 4080 ? 255 : y >> 4, D = (D = d - b) < 16 ? 0 : D >= 4080 ? 255 : D >> 4, T = (T = m - p) < 16 ? 0 : T >= 4080 ? 255 : T >> 4, P = (P = v - k) < 16 ? 0 : P >= 4080 ? 255 : P >> 4, L = (L = h - g) < 16 ? 0 : L >= 4080 ? 255 : L >> 4, U[l + I] = C, U[l + I + 8] = w, U[l + I + 16] = x, U[l + I + 24] = y, U[l + I + 32] = D, U[l + I + 40] = T, U[l + I + 48] = P, U[l + I + 56] = L) : (A = (A = c * C + 8192 >> 14) < -2040 ? 0 : A >= 2024 ? 255 : A + 2056 >> 4, U[l + I] = A, U[l + I + 8] = A, U[l + I + 16] = A, U[l + I + 24] = A, U[l + I + 32] = A, U[l + I + 40] = A, U[l + I + 48] = A, U[l + I + 56] = A);
            }
          }

          function d(e, n) {
            for (var r = n.blocksPerLine, o = n.blocksPerColumn, a = new Int16Array(64), t = 0; t < o; t++) {
              for (var i = 0; i < r; i++) {
                m(n, h(n, t, i), a);
              }
            }

            return n.blockData;
          }

          function b(e, n, r) {
            function o(n) {
              return e[n] << 8 | e[n + 1];
            }

            var a = e.length - 1,
                t = r < n ? r : n;
            if (n >= a) return null;
            var i = o(n);
            if (i >= 65472 && i <= 65534) return {
              invalid: null,
              marker: i,
              offset: n
            };

            for (var s = o(t); !(s >= 65472 && s <= 65534);) {
              if (++t >= a) return null;
              s = o(t);
            }

            return {
              invalid: i.toString(16),
              marker: s,
              offset: t
            };
          }

          return l.prototype = {
            parse: function parse(r) {
              function o() {
                var e = r[c] << 8 | r[c + 1];
                return c += 2, e;
              }

              function a() {
                var e = o(),
                    n = c + e - 2,
                    a = b(r, n, c);
                a && a.invalid && (console.log("readDataBlock - incorrect length, next marker is: " + a.invalid), n = a.offset);
                var t = r.subarray(c, n);
                return c += t.length, t;
              }

              function t(e) {
                for (var n = Math.ceil(e.samplesPerLine / 8 / e.maxH), r = Math.ceil(e.scanLines / 8 / e.maxV), o = 0; o < e.components.length; o++) {
                  R = e.components[o];
                  var a = Math.ceil(Math.ceil(e.samplesPerLine / 8) * R.h / e.maxH),
                      t = Math.ceil(Math.ceil(e.scanLines / 8) * R.v / e.maxV),
                      i = n * R.h,
                      s = r * R.v * 64 * (i + 1);
                  R.blockData = new Int16Array(s), R.blocksPerLine = a, R.blocksPerColumn = t;
                }

                e.mcusPerLine = n, e.mcusPerColumn = r;
              }

              var i,
                  s,
                  c = 0,
                  f = null,
                  l = null,
                  h = [],
                  m = [],
                  p = [],
                  k = o();
              if (65496 !== k) throw new n("SOI not found");

              for (k = o(); 65497 !== k;) {
                var g, C, w;

                switch (k) {
                  case 65504:
                  case 65505:
                  case 65506:
                  case 65507:
                  case 65508:
                  case 65509:
                  case 65510:
                  case 65511:
                  case 65512:
                  case 65513:
                  case 65514:
                  case 65515:
                  case 65516:
                  case 65517:
                  case 65518:
                  case 65519:
                  case 65534:
                    var x = a();
                    65504 === k && 74 === x[0] && 70 === x[1] && 73 === x[2] && 70 === x[3] && 0 === x[4] && (f = {
                      version: {
                        major: x[5],
                        minor: x[6]
                      },
                      densityUnits: x[7],
                      xDensity: x[8] << 8 | x[9],
                      yDensity: x[10] << 8 | x[11],
                      thumbWidth: x[12],
                      thumbHeight: x[13],
                      thumbData: x.subarray(14, 14 + 3 * x[12] * x[13])
                    }), 65518 === k && 65 === x[0] && 100 === x[1] && 111 === x[2] && 98 === x[3] && 101 === x[4] && (l = {
                      version: x[5] << 8 | x[6],
                      flags0: x[7] << 8 | x[8],
                      flags1: x[9] << 8 | x[10],
                      transformCode: x[11]
                    });
                    break;

                  case 65499:
                    for (var y = o() + c - 2; c < y;) {
                      var D = r[c++],
                          T = new Uint16Array(64);
                      if (D >> 4 == 0) for (C = 0; C < 64; C++) {
                        T[e[C]] = r[c++];
                      } else {
                        if (D >> 4 != 1) throw new n("DQT - invalid table spec");

                        for (C = 0; C < 64; C++) {
                          T[e[C]] = o();
                        }
                      }
                      h[15 & D] = T;
                    }

                    break;

                  case 65472:
                  case 65473:
                  case 65474:
                    if (i) throw new n("Only single frame JPEGs supported");
                    o(), (i = {}).extended = 65473 === k, i.progressive = 65474 === k, i.precision = r[c++], i.scanLines = o(), i.samplesPerLine = o(), i.components = [], i.componentIds = {};
                    var P,
                        L = r[c++],
                        A = 0,
                        _ = 0;

                    for (g = 0; g < L; g++) {
                      P = r[c];
                      var U = r[c + 1] >> 4,
                          z = 15 & r[c + 1];
                      A < U && (A = U), _ < z && (_ = z);
                      var I = r[c + 2];
                      w = i.components.push({
                        h: U,
                        v: z,
                        quantizationId: I,
                        quantizationTable: null
                      }), i.componentIds[P] = w - 1, c += 3;
                    }

                    i.maxH = A, i.maxV = _, t(i);
                    break;

                  case 65476:
                    var M = o();

                    for (g = 2; g < M;) {
                      var Y = r[c++],
                          q = new Uint8Array(16),
                          S = 0;

                      for (C = 0; C < 16; C++, c++) {
                        S += q[C] = r[c];
                      }

                      var H = new Uint8Array(S);

                      for (C = 0; C < S; C++, c++) {
                        H[C] = r[c];
                      }

                      g += 17 + S, (Y >> 4 == 0 ? p : m)[15 & Y] = u(q, H);
                    }

                    break;

                  case 65501:
                    o(), s = o();
                    break;

                  case 65498:
                    o();
                    var R,
                        j = r[c++],
                        E = [];

                    for (g = 0; g < j; g++) {
                      var J = i.componentIds[r[c++]];
                      R = i.components[J];
                      var V = r[c++];
                      R.huffmanTableDC = p[V >> 4], R.huffmanTableAC = m[15 & V], E.push(R);
                    }

                    var B = r[c++],
                        N = r[c++],
                        G = r[c++],
                        O = v(r, c, i, E, s, B, N, G >> 4, 15 & G);
                    c += O;
                    break;

                  case 65535:
                    255 !== r[c] && c--;
                    break;

                  default:
                    if (255 === r[c - 3] && r[c - 2] >= 192 && r[c - 2] <= 254) {
                      c -= 3;
                      break;
                    }

                    throw new n("unknown marker " + k.toString(16));
                }

                k = o();
              }

              for (this.width = i.samplesPerLine, this.height = i.scanLines, this.jfif = f, this.eof = c, this.adobe = l, this.components = [], g = 0; g < i.components.length; g++) {
                var Q = h[(R = i.components[g]).quantizationId];
                Q && (R.quantizationTable = Q), this.components.push({
                  output: d(i, R),
                  scaleX: R.h / i.maxH,
                  scaleY: R.v / i.maxV,
                  blocksPerLine: R.blocksPerLine,
                  blocksPerColumn: R.blocksPerColumn
                });
              }

              this.numComponents = this.components.length;
            },
            _getLinearizedBlockData: function _getLinearizedBlockData(e, n) {
              var r,
                  o,
                  a,
                  t,
                  i,
                  s,
                  c,
                  f,
                  l,
                  u,
                  h,
                  v = this.width / e,
                  m = this.height / n,
                  d = 0,
                  b = this.components.length,
                  p = e * n * b,
                  k = new Uint8ClampedArray(p),
                  g = new Uint32Array(e),
                  C = 4294967288;

              for (c = 0; c < b; c++) {
                for (o = (r = this.components[c]).scaleX * v, a = r.scaleY * m, d = c, h = r.output, t = r.blocksPerLine + 1 << 3, i = 0; i < e; i++) {
                  f = 0 | i * o, g[i] = (f & C) << 3 | 7 & f;
                }

                for (s = 0; s < n; s++) {
                  for (u = t * ((f = 0 | s * a) & C) | (7 & f) << 3, i = 0; i < e; i++) {
                    k[d] = h[u + g[i]], d += b;
                  }
                }
              }

              var w = this.decodeTransform;
              if (w) for (c = 0; c < p;) {
                for (f = 0, l = 0; f < b; f++, c++, l += 2) {
                  k[c] = (k[c] * w[l] >> 8) + w[l + 1];
                }
              }
              return k;
            },
            _isColorConversionNeeded: function _isColorConversionNeeded() {
              return this.adobe ? !!this.adobe.transformCode : 3 === this.numComponents ? 0 !== this.colorTransform : 1 === this.colorTransform;
            },
            _convertYccToRgb: function _convertYccToRgb(e) {
              for (var n, r, o, a = 0, t = e.length; a < t; a += 3) {
                n = e[a], r = e[a + 1], o = e[a + 2], e[a] = n - 179.456 + 1.402 * o, e[a + 1] = n + 135.459 - .344 * r - .714 * o, e[a + 2] = n - 226.816 + 1.772 * r;
              }

              return e;
            },
            _convertYcckToRgb: function _convertYcckToRgb(e) {
              for (var n, r, o, a, t = 0, i = 0, s = e.length; i < s; i += 4) {
                n = e[i], r = e[i + 1], o = e[i + 2], a = e[i + 3], e[t++] = r * (-660635669420364e-19 * r + .000437130475926232 * o - 54080610064599e-18 * n + .00048449797120281 * a - .154362151871126) - 122.67195406894 + o * (-.000957964378445773 * o + .000817076911346625 * n - .00477271405408747 * a + 1.53380253221734) + n * (.000961250184130688 * n - .00266257332283933 * a + .48357088451265) + a * (-.000336197177618394 * a + .484791561490776), e[t++] = 107.268039397724 + r * (219927104525741e-19 * r - .000640992018297945 * o + .000659397001245577 * n + .000426105652938837 * a - .176491792462875) + o * (-.000778269941513683 * o + .00130872261408275 * n + .000770482631801132 * a - .151051492775562) + n * (.00126935368114843 * n - .00265090189010898 * a + .25802910206845) + a * (-.000318913117588328 * a - .213742400323665), e[t++] = r * (-.000570115196973677 * r - 263409051004589e-19 * o + .0020741088115012 * n - .00288260236853442 * a + .814272968359295) - 20.810012546947 + o * (-153496057440975e-19 * o - .000132689043961446 * n + .000560833691242812 * a - .195152027534049) + n * (.00174418132927582 * n - .00255243321439347 * a + .116935020465145) + a * (-.000343531996510555 * a + .24165260232407);
              }

              return e;
            },
            _convertYcckToCmyk: function _convertYcckToCmyk(e) {
              for (var n, r, o, a = 0, t = e.length; a < t; a += 4) {
                n = e[a], r = e[a + 1], o = e[a + 2], e[a] = 434.456 - n - 1.402 * o, e[a + 1] = 119.541 - n + .344 * r + .714 * o, e[a + 2] = 481.816 - n - 1.772 * r;
              }

              return e;
            },
            _convertCmykToRgb: function _convertCmykToRgb(e) {
              for (var n, r, o, a, t = 0, i = 1 / 255, s = 0, c = e.length; s < c; s += 4) {
                n = e[s] * i, r = e[s + 1] * i, o = e[s + 2] * i, a = e[s + 3] * i, e[t++] = 255 + n * (-4.387332384609988 * n + 54.48615194189176 * r + 18.82290502165302 * o + 212.25662451639585 * a - 285.2331026137004) + r * (1.7149763477362134 * r - 5.6096736904047315 * o - 17.873870861415444 * a - 5.497006427196366) + o * (-2.5217340131683033 * o - 21.248923337353073 * a + 17.5119270841813) - a * (21.86122147463605 * a + 189.48180835922747), e[t++] = 255 + n * (8.841041422036149 * n + 60.118027045597366 * r + 6.871425592049007 * o + 31.159100130055922 * a - 79.2970844816548) + r * (-15.310361306967817 * r + 17.575251261109482 * o + 131.35250912493976 * a - 190.9453302588951) + o * (4.444339102852739 * o + 9.8632861493405 * a - 24.86741582555878) - a * (20.737325471181034 * a + 187.80453709719578), e[t++] = 255 + n * (.8842522430003296 * n + 8.078677503112928 * r + 30.89978309703729 * o - .23883238689178934 * a - 14.183576799673286) + r * (10.49593273432072 * r + 63.02378494754052 * o + 50.606957656360734 * a - 112.23884253719248) + o * (.03296041114873217 * o + 115.60384449646641 * a - 193.58209356861505) - a * (22.33816807309886 * a + 180.12613974708367);
              }

              return e;
            },
            getData: function getData(e, r, o) {
              if (this.numComponents > 4) throw new n("Unsupported color mode");

              var a = this._getLinearizedBlockData(e, r);

              if (1 === this.numComponents && o) {
                for (var t = a.length, i = new Uint8ClampedArray(3 * t), s = 0, c = 0; c < t; c++) {
                  var f = a[c];
                  i[s++] = f, i[s++] = f, i[s++] = f;
                }

                return i;
              }

              if (3 === this.numComponents && this._isColorConversionNeeded()) return this._convertYccToRgb(a);

              if (4 === this.numComponents) {
                if (this._isColorConversionNeeded()) return o ? this._convertYcckToRgb(a) : this._convertYcckToCmyk(a);
                if (o) return this._convertCmykToRgb(a);
              }

              return a;
            }
          }, l;
        }()) && (e.exports = r);
      });
      /***/
    },

    /***/
    "D/0F":
    /*!****************************************************************************!*\
      !*** ./node_modules/@arcgis/core/layers/support/rasterFormats/TiffTags.js ***!
      \****************************************************************************/

    /*! exports provided: default */

    /***/
    function D0F(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /*
      All material copyright ESRI, All Rights Reserved, unless otherwise specified.
      See https://js.arcgis.com/4.18/esri/copyright.txt for details.
      */


      var e = function () {
        var e = [];
        return e[254] = "NEWSUBFILETYPE", e[255] = "SUBFILETYPE", e[256] = "IMAGEWIDTH", e[257] = "IMAGELENGTH", e[258] = "BITSPERSAMPLE", e[259] = "COMPRESSION", e[262] = "PHOTOMETRICINTERPRETATION", e[263] = "THRESHHOLDING", e[264] = "CELLWIDTH", e[265] = "CELLLENGTH", e[266] = "FILLORDER", e[269] = "DOCUMENTNAME", e[270] = "IMAGEDESCRIPTION", e[271] = "MAKE", e[272] = "MODEL", e[273] = "STRIPOFFSETS", e[274] = "ORIENTATION", e[277] = "SAMPLESPERPIXEL", e[278] = "ROWSPERSTRIP", e[279] = "STRIPBYTECOUNTS", e[280] = "MINSAMPLEVALUE", e[281] = "MAXSAMPLEVALUE", e[282] = "XRESOLUTION", e[283] = "YRESOLUTION", e[284] = "PLANARCONFIGURATION", e[285] = "PAGENAME", e[286] = "XPOSITION", e[287] = "YPOSITION", e[288] = "FREEOFFSETS", e[289] = "FREEBYTECOUNTS", e[290] = "GRAYRESPONSEUNIT", e[291] = "GRAYRESPONSECURVE", e[292] = "T4OPTIONS", e[293] = "T6OPTIONS", e[296] = "RESOLUTIONUNIT", e[297] = "PAGENUMBER", e[300] = "COLORRESPONSEUNIT", e[301] = "TRANSFERFUNCTION", e[305] = "SOFTWARE", e[306] = "DATETIME", e[315] = "ARTIST", e[316] = "HOSTCOMPUTER", e[317] = "PREDICTOR", e[318] = "WHITEPOINT", e[319] = "PRIMARYCHROMATICITIES", e[320] = "COLORMAP", e[321] = "HALFTONEHINTS", e[322] = "TILEWIDTH", e[323] = "TILELENGTH", e[324] = "TILEOFFSETS", e[325] = "TILEBYTECOUNTS", e[326] = "BADFAXLINES", e[327] = "CLEANFAXDATA", e[328] = "CONSECUTIVEBADFAXLINES", e[330] = "SUBIFD", e[332] = "INKSET", e[333] = "INKNAMES", e[334] = "NUMBEROFINKS", e[336] = "DOTRANGE", e[337] = "TARGETPRINTER", e[338] = "EXTRASAMPLES", e[339] = "SAMPLEFORMAT", e[340] = "SMINSAMPLEVALUE", e[341] = "SMAXSAMPLEVALUE", e[342] = "TRANSFERRANGE", e[347] = "JPEGTABLES", e[512] = "JPEGPROC", e[513] = "JPEGIFOFFSET", e[514] = "JPEGIFBYTECOUNT", e[515] = "JPEGRESTARTINTERVAL", e[517] = "JPEGLOSSLESSPREDICTORS", e[518] = "JPEGPOINTTRANSFORM", e[519] = "JPEGQTABLES", e[520] = "JPEGDCTABLES", e[521] = "JPEGACTABLES", e[529] = "YCBCRCOEFFICIENTS", e[530] = "YCBCRSUBSAMPLING", e[531] = "YCBCRPOSITIONING", e[532] = "REFERENCEBLACKWHITE", e[700] = "XMP", e[33550] = "GEOPIXELSCALE", e[33922] = "GEOTIEPOINTS", e[33432] = "COPYRIGHT", e[42112] = "GDAL_METADATA", e[42113] = "GDAL_NODATA", e[50844] = "RPCCOEFFICIENT", e[34264] = "GEOTRANSMATRIX", e[34735] = "GEOKEYDIRECTORY", e[34736] = "GEODOUBLEPARAMS", e[34737] = "GEOASCIIPARAMS", e[34665] = "EXIFIFD", e[34853] = "GPSIFD", e[40965] = "INTEROPERABILITYIFD", e;
      }(),
          i = function () {
        var i = [].concat(e);
        return i[36864] = "ExifVersion", i[40960] = "FlashpixVersion", i[40961] = "ColorSpace", i[42240] = "Gamma", i[37121] = "ComponentsConfiguration", i[37122] = "CompressedBitsPerPixel", i[40962] = "PixelXDimension", i[40963] = "PixelYDimension", i[37500] = "MakerNote", i[37510] = "UserComment", i[40964] = "RelatedSoundFile", i[36867] = "DateTimeOriginal", i[36868] = "DateTimeDigitized", i[36880] = "OffsetTime", i[36881] = "OffsetTimeOriginal", i[36882] = "OffsetTimeDigitized", i[37520] = "SubSecTime", i[37521] = "SubSecTimeOriginal", i[37522] = "SubSecTimeDigitized", i[37888] = "Temperature", i[37889] = "Humidity", i[37890] = "Pressure", i[37891] = "WaterDepth", i[37892] = "Acceleration", i[37893] = "CameraElevationAngle", i[42016] = "ImageUniqueID", i[42032] = "CameraOwnerName", i[42033] = "BodySerialNumber", i[42034] = "LensSpecification", i[42035] = "LensMake", i[42036] = "LensModel", i[42037] = "LensSerialNumber", i[33434] = "ExposureTime", i[33437] = "FNumber", i[34850] = "ExposureProgram", i[34852] = "SpectralSensitivity", i[34855] = "PhotographicSensitivity", i[34856] = "OECF", i[34864] = "SensitivityType", i[34865] = "StandardOutputSensitivity", i[34866] = "RecommendedExposureIndex", i[34867] = "ISOSpeed", i[34868] = "ISOSpeedLatitudeyyy", i[34869] = "ISOSpeedLatitudezzz", i[37377] = "ShutterSpeedValue", i[37378] = "ApertureValue", i[37379] = "BrightnessValue", i[37380] = "ExposureBiasValue", i[37381] = "MaxApertureValue", i[37382] = "SubjectDistance", i[37383] = "MeteringMode", i[37384] = "LightSource", i[37385] = "Flash", i[37386] = "FocalLength", i[37396] = "SubjectArea", i[41483] = "FlashEnergy", i[41484] = "SpatialFrequencyResponse", i[41486] = "FocalPlaneXResolution", i[41487] = "FocalPlaneYResolution", i[41488] = "FocalPlaneResolutionUnit", i[41492] = "SubjectLocation", i[41493] = "ExposureIndex", i[41495] = "SensingMethod", i[41728] = "FileSource", i[41729] = "SceneType", i[41730] = "CFAPattern", i[41985] = "CustomRendered", i[41986] = "ExposureMode", i[41987] = "WhiteBalance", i[41988] = "DigitalZoomRatio", i[41989] = "FocalLengthIn35mmFilm", i[41990] = "SceneCaptureType", i[41991] = "GainControl", i[41992] = "Contrast", i[41993] = "Saturation", i[41994] = "Sharpness", i[41995] = "DeviceSettingDescription", i[41996] = "SubjectDistanceRange", i;
      }(),
          t = function () {
        var e = [];
        return e[1024] = "GTModelTypeGeoKey", e[1025] = "GTRasterTypeGeoKey", e[1026] = "GTCitationGeoKey", e[2048] = "GeographicTypeGeoKey", e[2049] = "GeogCitationGeoKey", e[2050] = "GeogGeodeticDatumGeoKey", e[2051] = "GeogPrimeMeridianGeoKey", e[2052] = "GeogLinearUnitsGeoKey", e[2053] = "GeogLinearUnitSizeGeoKey", e[2054] = "GeogAngularUnitsGeoKey", e[2055] = "GeogAngularUnitSizeGeoKey", e[2056] = "GeogEllipsoidGeoKey", e[2057] = "GeogSemiMajorAxisGeoKey", e[2058] = "GeogSemiMinorAxisGeoKey", e[2059] = "GeogInvFlatteningGeoKey", e[2061] = "GeogPrimeMeridianLongGeoKey", e[2060] = "GeogAzimuthUnitsGeoKey", e[3072] = "ProjectedCSTypeGeoKey", e[3073] = "PCSCitationGeoKey", e[3074] = "ProjectionGeoKey", e[3075] = "ProjCoordTransGeoKey", e[3076] = "ProjLinearUnitsGeoKey", e[3077] = "ProjLinearUnitSizeGeoKey", e[3078] = "ProjStdParallel1GeoKey", e[3079] = "ProjStdParallel2GeoKey", e[3080] = "ProjNatOriginLongGeoKey", e[3081] = "ProjNatOriginLatGeoKey", e[3082] = "ProjFalseEastingGeoKey", e[3083] = "ProjFalseNorthingGeoKey", e[3084] = "ProjFalseOriginLongGeoKey", e[3085] = "ProjFalseOriginLatGeoKey", e[3086] = "ProjFalseOriginEastingGeoKey", e[3087] = "ProjFalseOriginNorthingGeoKey", e[3088] = "ProjCenterLongGeoKey", e[3090] = "ProjCenterEastingGeoKey", e[3091] = "ProjCenterNorthingGeoKey", e[3092] = "ProjScaleAtNatOriginGeoKey", e[3093] = "ProjScaleAtCenterGeoKey", e[3094] = "ProjAzimuthAngleGeoKey", e[3095] = "ProjStraightVertPoleLongGeoKey", e[4096] = "VerticalCSTypeGeoKey", e[4097] = "VerticalCitationGeoKey", e[4098] = "VerticalDatumGeoKey", e[4099] = "VerticalUnitsGeoKey", e;
      }(),
          o = new Map();

      o.set("EXIFIFD", i), o.set("GPSIFD", ["GPSVersionID", "GPSLatitudeRef", "GPSLatitude", "GPSLongitudeRef", "GPSLongitude", "GPSAltitudeRef", "GPSAltitude", "GPSTimeStamp", "GPSSatellites", "GPSStatus", "GPSMeasureMode", "GPSDOP", "GPSSpeedRef", "GPSSpeed", "GPSTrackRef", "GPSTrack", "GPSImgDirectionRef", "GPSImgDirection", "GPSMapDatum", "GPSDestLatitudeRef", "GPSDestLatitude", "GPSDestLongitudeRef", "GPSDestLongitude", "GPSDestBearingRef", "GPSDestBearing", "GPSDestDistanceRef", "GPSDestDistance", "GPSProcessingMethod", "GPSAreaInformation", "GPSDateStamp", "GPSDifferential", "GPSHPositioningError"]);
      var S = {
        TIFF_TAGS: e,
        ifdTags: o,
        GEO_KEYS: t,
        getTagName: function getTagName(i, t) {
          var o = (t || e)[i];
          return void 0 === o && (o = "unknown" + String(i)), o;
        }
      };
      /* harmony default export */

      __webpack_exports__["default"] = S;
      /***/
    },

    /***/
    "FFFX":
    /*!*******************************************************************************!*\
      !*** ./node_modules/@arcgis/core/layers/support/rasterFormats/RasterCodec.js ***!
      \*******************************************************************************/

    /*! exports provided: decode, getFormat */

    /***/
    function FFFX(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "decode", function () {
        return U;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "getFormat", function () {
        return I;
      });
      /* harmony import */


      var _core_Error_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ../../../core/Error.js */
      "zlDU");
      /* harmony import */


      var _PixelBlock_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ../PixelBlock.js */
      "Piei");
      /* harmony import */


      var _chunks_commonjsHelpers_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ../../../chunks/_commonjsHelpers.js */
      "X2wA");
      /* harmony import */


      var _chunks_Zlib_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ../../../chunks/Zlib.js */
      "xMJK");
      /* harmony import */


      var _ImageCanvasDecoder_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ./ImageCanvasDecoder.js */
      "R0O3");
      /* harmony import */


      var _JpgPlus_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ./JpgPlus.js */
      "Nypj");
      /* harmony import */


      var _chunks_LercCodec_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ../../../chunks/LercCodec.js */
      "svfg");
      /* harmony import */


      var _Raw_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! ./Raw.js */
      "Foyv");
      /* harmony import */


      var _utils_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! ./utils.js */
      "5VpP");
      /* harmony import */


      var _TiffDecoder_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! ./TiffDecoder.js */
      "bT0G");
      /*
      All material copyright ESRI, All Rights Reserved, unless otherwise specified.
      See https://js.arcgis.com/4.18/esri/copyright.txt for details.
      */


      var u = Object(_chunks_commonjsHelpers_js__WEBPACK_IMPORTED_MODULE_2__["c"])(function (e) {
        var t, a, r, i;
        t = {
          unstuff: function unstuff(e, t, a, r, i, n, s, o) {
            var l,
                f,
                h,
                u,
                c,
                d = (1 << a) - 1,
                p = 0,
                m = 0,
                g = 4 * e.length - Math.ceil(a * r / 8);
            if (e[e.length - 1] <<= 8 * g, i) for (l = 0; l < r; l++) {
              0 === m && (h = e[p++], m = 32), m >= a ? (f = h >>> m - a & d, m -= a) : (f = (h & d) << (u = a - m) & d, f += (h = e[p++]) >>> (m = 32 - u)), t[l] = i[f];
            } else for (c = Math.ceil((o - n) / s), l = 0; l < r; l++) {
              0 === m && (h = e[p++], m = 32), m >= a ? (f = h >>> m - a & d, m -= a) : (f = (h & d) << (u = a - m) & d, f += (h = e[p++]) >>> (m = 32 - u)), t[l] = f < c ? n + f * s : o;
            }
          },
          unstuffLUT: function unstuffLUT(e, t, a, r, i, n) {
            var s,
                o = (1 << t) - 1,
                l = 0,
                f = 0,
                h = 0,
                u = 0,
                c = 0,
                d = [],
                p = 4 * e.length - Math.ceil(t * a / 8);
            e[e.length - 1] <<= 8 * p;
            var m = Math.ceil((n - r) / i);

            for (f = 0; f < a; f++) {
              0 === u && (s = e[l++], u = 32), u >= t ? (c = s >>> u - t & o, u -= t) : (c = (s & o) << (h = t - u) & o, c += (s = e[l++]) >>> (u = 32 - h)), d[f] = c < m ? r + c * i : n;
            }

            return d.unshift(r), d;
          },
          unstuff2: function unstuff2(e, t, a, r, i, n, s, o) {
            var l,
                f,
                h,
                u,
                c = (1 << a) - 1,
                d = 0,
                p = 0,
                m = 0;
            if (i) for (l = 0; l < r; l++) {
              0 === p && (h = e[d++], p = 32, m = 0), p >= a ? (f = h >>> m & c, p -= a, m += a) : (f = h >>> m & c, p = 32 - (u = a - p), f |= ((h = e[d++]) & (1 << u) - 1) << a - u, m = u), t[l] = i[f];
            } else {
              var g = Math.ceil((o - n) / s);

              for (l = 0; l < r; l++) {
                0 === p && (h = e[d++], p = 32, m = 0), p >= a ? (f = h >>> m & c, p -= a, m += a) : (f = h >>> m & c, p = 32 - (u = a - p), f |= ((h = e[d++]) & (1 << u) - 1) << a - u, m = u), t[l] = f < g ? n + f * s : o;
              }
            }
            return t;
          },
          unstuffLUT2: function unstuffLUT2(e, t, a, r, i, n) {
            var s,
                o = (1 << t) - 1,
                l = 0,
                f = 0,
                h = 0,
                u = 0,
                c = 0,
                d = 0,
                p = [],
                m = Math.ceil((n - r) / i);

            for (f = 0; f < a; f++) {
              0 === u && (s = e[l++], u = 32, d = 0), u >= t ? (c = s >>> d & o, u -= t, d += t) : (c = s >>> d & o, u = 32 - (h = t - u), c |= ((s = e[l++]) & (1 << h) - 1) << t - h, d = h), p[f] = c < m ? r + c * i : n;
            }

            return p.unshift(r), p;
          },
          originalUnstuff: function originalUnstuff(e, t, a, r) {
            var i,
                n,
                s,
                o,
                l = (1 << a) - 1,
                f = 0,
                h = 0,
                u = 4 * e.length - Math.ceil(a * r / 8);

            for (e[e.length - 1] <<= 8 * u, i = 0; i < r; i++) {
              0 === h && (s = e[f++], h = 32), h >= a ? (n = s >>> h - a & l, h -= a) : (n = (s & l) << (o = a - h) & l, n += (s = e[f++]) >>> (h = 32 - o)), t[i] = n;
            }

            return t;
          },
          originalUnstuff2: function originalUnstuff2(e, t, a, r) {
            var i,
                n,
                s,
                o,
                l = (1 << a) - 1,
                f = 0,
                h = 0,
                u = 0;

            for (i = 0; i < r; i++) {
              0 === h && (s = e[f++], h = 32, u = 0), h >= a ? (n = s >>> u & l, h -= a, u += a) : (n = s >>> u & l, h = 32 - (o = a - h), n |= ((s = e[f++]) & (1 << o) - 1) << a - o, u = o), t[i] = n;
            }

            return t;
          }
        }, a = {
          HUFFMAN_LUT_BITS_MAX: 12,
          computeChecksumFletcher32: function computeChecksumFletcher32(e) {
            for (var t = 65535, a = 65535, r = e.length, i = Math.floor(r / 2), n = 0; i;) {
              var s = i >= 359 ? 359 : i;
              i -= s;

              do {
                t += e[n++] << 8, a += t += e[n++];
              } while (--s);

              t = (65535 & t) + (t >>> 16), a = (65535 & a) + (a >>> 16);
            }

            return 1 & r && (a += t += e[n] << 8), ((a = (65535 & a) + (a >>> 16)) << 16 | (t = (65535 & t) + (t >>> 16))) >>> 0;
          },
          readHeaderInfo: function readHeaderInfo(e, t) {
            var a = t.ptr,
                r = new Uint8Array(e, a, 6),
                i = {};
            if (i.fileIdentifierString = String.fromCharCode.apply(null, r), 0 !== i.fileIdentifierString.lastIndexOf("Lerc2", 0)) throw "Unexpected file identifier string (expect Lerc2 ): " + i.fileIdentifierString;
            a += 6;
            var n,
                s = new DataView(e, a, 8),
                o = s.getInt32(0, !0);
            if (i.fileVersion = o, a += 4, o >= 3 && (i.checksum = s.getUint32(4, !0), a += 4), s = new DataView(e, a, 12), i.height = s.getUint32(0, !0), i.width = s.getUint32(4, !0), a += 8, o >= 4 ? (i.numDims = s.getUint32(8, !0), a += 4) : i.numDims = 1, s = new DataView(e, a, 40), i.numValidPixel = s.getUint32(0, !0), i.microBlockSize = s.getInt32(4, !0), i.blobSize = s.getInt32(8, !0), i.imageType = s.getInt32(12, !0), i.maxZError = s.getFloat64(16, !0), i.zMin = s.getFloat64(24, !0), i.zMax = s.getFloat64(32, !0), a += 40, t.headerInfo = i, t.ptr = a, o >= 3 && (n = o >= 4 ? 52 : 48, this.computeChecksumFletcher32(new Uint8Array(e, a - n, i.blobSize - 14)) !== i.checksum)) throw "Checksum failed.";
            return !0;
          },
          checkMinMaxRanges: function checkMinMaxRanges(e, t) {
            var a = t.headerInfo,
                r = this.getDataTypeArray(a.imageType),
                i = a.numDims * this.getDataTypeSize(a.imageType),
                n = this.readSubArray(e, t.ptr, r, i),
                s = this.readSubArray(e, t.ptr + i, r, i);
            t.ptr += 2 * i;
            var o,
                l = !0;

            for (o = 0; o < a.numDims; o++) {
              if (n[o] !== s[o]) {
                l = !1;
                break;
              }
            }

            return a.minValues = n, a.maxValues = s, l;
          },
          readSubArray: function readSubArray(e, t, a, r) {
            var i;
            if (a === Uint8Array) i = new Uint8Array(e, t, r);else {
              var n = new ArrayBuffer(r);
              new Uint8Array(n).set(new Uint8Array(e, t, r)), i = new a(n);
            }
            return i;
          },
          readMask: function readMask(e, t) {
            var a,
                r,
                i = t.ptr,
                n = t.headerInfo,
                s = n.width * n.height,
                o = n.numValidPixel,
                l = new DataView(e, i, 4),
                f = {};
            if (f.numBytes = l.getUint32(0, !0), i += 4, (0 === o || s === o) && 0 !== f.numBytes) throw "invalid mask";
            if (0 === o) a = new Uint8Array(Math.ceil(s / 8)), f.bitset = a, r = new Uint8Array(s), t.pixels.resultMask = r, i += f.numBytes;else if (f.numBytes > 0) {
              a = new Uint8Array(Math.ceil(s / 8));
              var h = (l = new DataView(e, i, f.numBytes)).getInt16(0, !0),
                  u = 2,
                  c = 0,
                  d = 0;

              do {
                if (h > 0) for (; h--;) {
                  a[c++] = l.getUint8(u++);
                } else for (d = l.getUint8(u++), h = -h; h--;) {
                  a[c++] = d;
                }
                h = l.getInt16(u, !0), u += 2;
              } while (u < f.numBytes);

              if (-32768 !== h || c < a.length) throw "Unexpected end of mask RLE encoding";
              r = new Uint8Array(s);
              var p = 0,
                  m = 0;

              for (m = 0; m < s; m++) {
                7 & m ? (p = a[m >> 3], p <<= 7 & m) : p = a[m >> 3], 128 & p && (r[m] = 1);
              }

              t.pixels.resultMask = r, f.bitset = a, i += f.numBytes;
            }
            return t.ptr = i, t.mask = f, !0;
          },
          readDataOneSweep: function readDataOneSweep(e, t, r) {
            var i,
                n = t.ptr,
                s = t.headerInfo,
                o = s.numDims,
                l = s.width * s.height,
                f = s.imageType,
                h = s.numValidPixel * a.getDataTypeSize(f) * o,
                u = t.pixels.resultMask;
            if (r === Uint8Array) i = new Uint8Array(e, n, h);else {
              var c = new ArrayBuffer(h);
              new Uint8Array(c).set(new Uint8Array(e, n, h)), i = new r(c);
            }
            if (i.length === l * o) t.pixels.resultPixels = i;else {
              t.pixels.resultPixels = new r(l * o);
              var d = 0,
                  p = 0,
                  m = 0,
                  g = 0;
              if (o > 1) for (m = 0; m < o; m++) {
                for (g = m * l, p = 0; p < l; p++) {
                  u[p] && (t.pixels.resultPixels[g + p] = i[d++]);
                }
              } else for (p = 0; p < l; p++) {
                u[p] && (t.pixels.resultPixels[p] = i[d++]);
              }
            }
            return n += h, t.ptr = n, !0;
          },
          readHuffmanTree: function readHuffmanTree(e, t) {
            var i = this.HUFFMAN_LUT_BITS_MAX,
                n = new DataView(e, t.ptr, 16);
            if (t.ptr += 16, n.getInt32(0, !0) < 2) throw "unsupported Huffman version";
            var s = n.getInt32(4, !0),
                o = n.getInt32(8, !0),
                l = n.getInt32(12, !0);
            if (o >= l) return !1;
            var f = new Uint32Array(l - o);
            a.decodeBits(e, t, f);
            var h,
                u,
                c,
                d,
                p = [];

            for (h = o; h < l; h++) {
              p[u = h - (h < s ? 0 : s)] = {
                first: f[h - o],
                second: null
              };
            }

            var m = e.byteLength - t.ptr,
                g = Math.ceil(m / 4),
                w = new ArrayBuffer(4 * g);
            new Uint8Array(w).set(new Uint8Array(e, t.ptr, m));
            var y,
                x = new Uint32Array(w),
                k = 0,
                b = 0;

            for (y = x[0], h = o; h < l; h++) {
              (d = p[u = h - (h < s ? 0 : s)].first) > 0 && (p[u].second = y << k >>> 32 - d, 32 - k >= d ? 32 === (k += d) && (k = 0, y = x[++b]) : (k += d - 32, y = x[++b], p[u].second |= y >>> 32 - k));
            }

            var I = 0,
                U = 0,
                v = new r();

            for (h = 0; h < p.length; h++) {
              void 0 !== p[h] && (I = Math.max(I, p[h].first));
            }

            U = I >= i ? i : I;
            var D,
                A,
                M,
                T,
                V,
                C = [];

            for (h = o; h < l; h++) {
              if ((d = p[u = h - (h < s ? 0 : s)].first) > 0) if (D = [d, u], d <= U) for (A = p[u].second << U - d, M = 1 << U - d, c = 0; c < M; c++) {
                C[A | c] = D;
              } else for (A = p[u].second, V = v, T = d - 1; T >= 0; T--) {
                A >>> T & 1 ? (V.right || (V.right = new r()), V = V.right) : (V.left || (V.left = new r()), V = V.left), 0 !== T || V.val || (V.val = D[1]);
              }
            }

            return {
              decodeLut: C,
              numBitsLUTQick: U,
              numBitsLUT: I,
              tree: v,
              stuffedData: x,
              srcPtr: b,
              bitPos: k
            };
          },
          readHuffman: function readHuffman(e, t, a) {
            var r,
                i,
                n,
                s,
                o,
                l,
                f,
                h,
                u,
                c = t.headerInfo,
                d = c.numDims,
                p = t.headerInfo.height,
                m = t.headerInfo.width,
                g = m * p,
                w = this.readHuffmanTree(e, t),
                y = w.decodeLut,
                x = w.tree,
                k = w.stuffedData,
                b = w.srcPtr,
                I = w.bitPos,
                U = w.numBitsLUTQick,
                v = w.numBitsLUT,
                D = 0 === t.headerInfo.imageType ? 128 : 0,
                A = t.pixels.resultMask,
                M = 0;
            I > 0 && (b++, I = 0);
            var T,
                V = k[b],
                C = 1 === t.encodeMode,
                S = new a(g * d),
                P = S;

            for (T = 0; T < c.numDims; T++) {
              if (d > 1 && (P = new a(S.buffer, g * T, g), M = 0), t.headerInfo.numValidPixel === m * p) for (h = 0, l = 0; l < p; l++) {
                for (f = 0; f < m; f++, h++) {
                  if (i = 0, o = s = V << I >>> 32 - U, 32 - I < U && (o = s |= k[b + 1] >>> 64 - I - U), y[o]) i = y[o][1], I += y[o][0];else for (o = s = V << I >>> 32 - v, 32 - I < v && (o = s |= k[b + 1] >>> 64 - I - v), r = x, u = 0; u < v; u++) {
                    if (!(r = s >>> v - u - 1 & 1 ? r.right : r.left).left && !r.right) {
                      i = r.val, I = I + u + 1;
                      break;
                    }
                  }
                  I >= 32 && (I -= 32, V = k[++b]), n = i - D, C ? (n += f > 0 ? M : l > 0 ? P[h - m] : M, n &= 255, P[h] = n, M = n) : P[h] = n;
                }
              } else for (h = 0, l = 0; l < p; l++) {
                for (f = 0; f < m; f++, h++) {
                  if (A[h]) {
                    if (i = 0, o = s = V << I >>> 32 - U, 32 - I < U && (o = s |= k[b + 1] >>> 64 - I - U), y[o]) i = y[o][1], I += y[o][0];else for (o = s = V << I >>> 32 - v, 32 - I < v && (o = s |= k[b + 1] >>> 64 - I - v), r = x, u = 0; u < v; u++) {
                      if (!(r = s >>> v - u - 1 & 1 ? r.right : r.left).left && !r.right) {
                        i = r.val, I = I + u + 1;
                        break;
                      }
                    }
                    I >= 32 && (I -= 32, V = k[++b]), n = i - D, C ? (f > 0 && A[h - 1] ? n += M : l > 0 && A[h - m] ? n += P[h - m] : n += M, n &= 255, P[h] = n, M = n) : P[h] = n;
                  }
                }
              }
              t.ptr = t.ptr + 4 * (b + 1) + (I > 0 ? 4 : 0);
            }

            t.pixels.resultPixels = S;
          },
          decodeBits: function decodeBits(e, a, r, i, n) {
            var s = a.headerInfo,
                o = s.fileVersion,
                l = 0,
                f = e.byteLength - a.ptr >= 5 ? 5 : e.byteLength - a.ptr,
                h = new DataView(e, a.ptr, f),
                u = h.getUint8(0);
            l++;
            var c = u >> 6,
                d = 0 === c ? 4 : 3 - c,
                p = (32 & u) > 0,
                m = 31 & u,
                g = 0;
            if (1 === d) g = h.getUint8(l), l++;else if (2 === d) g = h.getUint16(l, !0), l += 2;else {
              if (4 !== d) throw "Invalid valid pixel count type";
              g = h.getUint32(l, !0), l += 4;
            }
            var w,
                y,
                x,
                k,
                b,
                I,
                U,
                v,
                D,
                A = 2 * s.maxZError,
                M = s.numDims > 1 ? s.maxValues[n] : s.zMax;

            if (p) {
              for (a.counter.lut++, v = h.getUint8(l), l++, k = Math.ceil((v - 1) * m / 8), b = Math.ceil(k / 4), y = new ArrayBuffer(4 * b), x = new Uint8Array(y), a.ptr += l, x.set(new Uint8Array(e, a.ptr, k)), U = new Uint32Array(y), a.ptr += k, D = 0; v - 1 >>> D;) {
                D++;
              }

              k = Math.ceil(g * D / 8), b = Math.ceil(k / 4), y = new ArrayBuffer(4 * b), (x = new Uint8Array(y)).set(new Uint8Array(e, a.ptr, k)), w = new Uint32Array(y), a.ptr += k, I = o >= 3 ? t.unstuffLUT2(U, m, v - 1, i, A, M) : t.unstuffLUT(U, m, v - 1, i, A, M), o >= 3 ? t.unstuff2(w, r, D, g, I) : t.unstuff(w, r, D, g, I);
            } else a.counter.bitstuffer++, D = m, a.ptr += l, D > 0 && (k = Math.ceil(g * D / 8), b = Math.ceil(k / 4), y = new ArrayBuffer(4 * b), (x = new Uint8Array(y)).set(new Uint8Array(e, a.ptr, k)), w = new Uint32Array(y), a.ptr += k, o >= 3 ? null == i ? t.originalUnstuff2(w, r, D, g) : t.unstuff2(w, r, D, g, !1, i, A, M) : null == i ? t.originalUnstuff(w, r, D, g) : t.unstuff(w, r, D, g, !1, i, A, M));
          },
          readTiles: function readTiles(e, t, r) {
            var i = t.headerInfo,
                n = i.width,
                s = i.height,
                o = i.microBlockSize,
                l = i.imageType,
                f = a.getDataTypeSize(l),
                h = Math.ceil(n / o),
                u = Math.ceil(s / o);
            t.pixels.numBlocksY = u, t.pixels.numBlocksX = h, t.pixels.ptr = 0;
            var c,
                d,
                p,
                m,
                g,
                w,
                y,
                x,
                k,
                b,
                I = 0,
                U = 0,
                v = 0,
                D = 0,
                A = 0,
                M = 0,
                T = 0,
                V = 0,
                C = 0,
                S = 0,
                P = 0,
                B = 0,
                O = 0,
                L = 0,
                z = 0,
                F = new r(o * o),
                j = s % o || o,
                E = n % o || o,
                H = i.numDims,
                R = t.pixels.resultMask,
                _ = t.pixels.resultPixels,
                Z = i.fileVersion >= 5 ? 14 : 15,
                X = i.zMax;

            for (v = 0; v < u; v++) {
              for (A = v !== u - 1 ? o : j, D = 0; D < h; D++) {
                for (S = v * n * o + D * o, P = n - (M = D !== h - 1 ? o : E), x = 0; x < H; x++) {
                  if (H > 1 ? (b = _, S = v * n * o + D * o, _ = new r(t.pixels.resultPixels.buffer, n * s * x * f, n * s), X = i.maxValues[x]) : b = null, T = e.byteLength - t.ptr, d = {}, z = 0, V = (c = new DataView(e, t.ptr, Math.min(10, T))).getUint8(0), z++, k = i.fileVersion >= 5 ? 4 & V : 0, C = V >> 6 & 255, (V >> 2 & Z) != (D * o >> 3 & Z)) throw "integrity issue";
                  if (k && 0 === x) throw "integrity issue";
                  if ((g = 3 & V) > 3) throw t.ptr += z, "Invalid block encoding (" + g + ")";
                  if (2 !== g) {
                    if (0 === g) {
                      if (k) throw "integrity issue";
                      if (t.counter.uncompressed++, t.ptr += z, B = (B = A * M * f) < (O = e.byteLength - t.ptr) ? B : O, p = new ArrayBuffer(B % f == 0 ? B : B + f - B % f), new Uint8Array(p).set(new Uint8Array(e, t.ptr, B)), m = new r(p), L = 0, R) for (I = 0; I < A; I++) {
                        for (U = 0; U < M; U++) {
                          R[S] && (_[S] = m[L++]), S++;
                        }

                        S += P;
                      } else for (I = 0; I < A; I++) {
                        for (U = 0; U < M; U++) {
                          _[S++] = m[L++];
                        }

                        S += P;
                      }
                      t.ptr += L * f;
                    } else if (w = a.getDataTypeUsed(k && l < 6 ? 4 : l, C), y = a.getOnePixel(d, z, w, c), z += a.getDataTypeSize(w), 3 === g) {
                      if (t.ptr += z, t.counter.constantoffset++, R) for (I = 0; I < A; I++) {
                        for (U = 0; U < M; U++) {
                          R[S] && (_[S] = k ? Math.min(X, b[S] + y) : y), S++;
                        }

                        S += P;
                      } else for (I = 0; I < A; I++) {
                        for (U = 0; U < M; U++) {
                          _[S] = k ? Math.min(X, b[S] + y) : y, S++;
                        }

                        S += P;
                      }
                    } else if (t.ptr += z, a.decodeBits(e, t, F, y, x), z = 0, k) {
                      if (R) for (I = 0; I < A; I++) {
                        for (U = 0; U < M; U++) {
                          R[S] && (_[S] = F[z++] + b[S]), S++;
                        }

                        S += P;
                      } else for (I = 0; I < A; I++) {
                        for (U = 0; U < M; U++) {
                          _[S] = F[z++] + b[S], S++;
                        }

                        S += P;
                      }
                    } else if (R) for (I = 0; I < A; I++) {
                      for (U = 0; U < M; U++) {
                        R[S] && (_[S] = F[z++]), S++;
                      }

                      S += P;
                    } else for (I = 0; I < A; I++) {
                      for (U = 0; U < M; U++) {
                        _[S++] = F[z++];
                      }

                      S += P;
                    }
                  } else {
                    if (k) if (R) for (I = 0; I < A; I++) {
                      for (U = 0; U < M; U++) {
                        R[S] && (_[S] = b[S]), S++;
                      }
                    } else for (I = 0; I < A; I++) {
                      for (U = 0; U < M; U++) {
                        _[S] = b[S], S++;
                      }
                    }
                    t.counter.constant++, t.ptr += z;
                  }
                }
              }
            }
          },
          formatFileInfo: function formatFileInfo(e) {
            return {
              fileIdentifierString: e.headerInfo.fileIdentifierString,
              fileVersion: e.headerInfo.fileVersion,
              imageType: e.headerInfo.imageType,
              height: e.headerInfo.height,
              width: e.headerInfo.width,
              numValidPixel: e.headerInfo.numValidPixel,
              microBlockSize: e.headerInfo.microBlockSize,
              blobSize: e.headerInfo.blobSize,
              maxZError: e.headerInfo.maxZError,
              pixelType: a.getPixelType(e.headerInfo.imageType),
              eofOffset: e.eofOffset,
              mask: e.mask ? {
                numBytes: e.mask.numBytes
              } : null,
              pixels: {
                numBlocksX: e.pixels.numBlocksX,
                numBlocksY: e.pixels.numBlocksY,
                maxValue: e.headerInfo.zMax,
                minValue: e.headerInfo.zMin,
                noDataValue: e.noDataValue
              }
            };
          },
          constructConstantSurface: function constructConstantSurface(e) {
            var t = e.headerInfo.zMax,
                a = e.headerInfo.numDims,
                r = e.headerInfo.height * e.headerInfo.width,
                i = 0,
                n = 0,
                s = 0,
                o = e.pixels.resultMask,
                l = e.pixels.resultPixels;
            if (o) {
              if (a > 1) for (i = 0; i < a; i++) {
                for (s = i * r, t = e.headerInfo.maxValues[i], n = 0; n < r; n++) {
                  o[n] && (l[s + n] = t);
                }
              } else for (n = 0; n < r; n++) {
                o[n] && (l[n] = t);
              }
            } else if (a > 1) for (i = 0; i < a; i++) {
              for (s = i * r, t = e.headerInfo.maxValues[i], n = 0; n < r; n++) {
                l[s + n] = t;
              }
            } else for (n = 0; n < r; n++) {
              l[n] = t;
            }
          },
          getDataTypeArray: function getDataTypeArray(e) {
            var t;

            switch (e) {
              case 0:
                t = Int8Array;
                break;

              case 1:
                t = Uint8Array;
                break;

              case 2:
                t = Int16Array;
                break;

              case 3:
                t = Uint16Array;
                break;

              case 4:
                t = Int32Array;
                break;

              case 5:
                t = Uint32Array;
                break;

              case 6:
                t = Float32Array;
                break;

              case 7:
                t = Float64Array;
                break;

              default:
                t = Float32Array;
            }

            return t;
          },
          getPixelType: function getPixelType(e) {
            var t;

            switch (e) {
              case 0:
                t = "S8";
                break;

              case 1:
                t = "U8";
                break;

              case 2:
                t = "S16";
                break;

              case 3:
                t = "U16";
                break;

              case 4:
                t = "S32";
                break;

              case 5:
                t = "U32";
                break;

              case 6:
                t = "F32";
                break;

              case 7:
                t = "F64";
                break;

              default:
                t = "F32";
            }

            return t;
          },
          isValidPixelValue: function isValidPixelValue(e, t) {
            if (null == t) return !1;
            var a;

            switch (e) {
              case 0:
                a = t >= -128 && t <= 127;
                break;

              case 1:
                a = t >= 0 && t <= 255;
                break;

              case 2:
                a = t >= -32768 && t <= 32767;
                break;

              case 3:
                a = t >= 0 && t <= 65536;
                break;

              case 4:
                a = t >= -2147483648 && t <= 2147483647;
                break;

              case 5:
                a = t >= 0 && t <= 4294967296;
                break;

              case 6:
                a = t >= -34027999387901484e22 && t <= 34027999387901484e22;
                break;

              case 7:
                a = t >= 5e-324 && t <= 17976931348623157e292;
                break;

              default:
                a = !1;
            }

            return a;
          },
          getDataTypeSize: function getDataTypeSize(e) {
            var t = 0;

            switch (e) {
              case 0:
              case 1:
                t = 1;
                break;

              case 2:
              case 3:
                t = 2;
                break;

              case 4:
              case 5:
              case 6:
                t = 4;
                break;

              case 7:
                t = 8;
                break;

              default:
                t = e;
            }

            return t;
          },
          getDataTypeUsed: function getDataTypeUsed(e, t) {
            var a = e;

            switch (e) {
              case 2:
              case 4:
                a = e - t;
                break;

              case 3:
              case 5:
                a = e - 2 * t;
                break;

              case 6:
                a = 0 === t ? e : 1 === t ? 2 : 1;
                break;

              case 7:
                a = 0 === t ? e : e - 2 * t + 1;
                break;

              default:
                a = e;
            }

            return a;
          },
          getOnePixel: function getOnePixel(e, t, a, r) {
            var i = 0;

            switch (a) {
              case 0:
                i = r.getInt8(t);
                break;

              case 1:
                i = r.getUint8(t);
                break;

              case 2:
                i = r.getInt16(t, !0);
                break;

              case 3:
                i = r.getUint16(t, !0);
                break;

              case 4:
                i = r.getInt32(t, !0);
                break;

              case 5:
                i = r.getUInt32(t, !0);
                break;

              case 6:
                i = r.getFloat32(t, !0);
                break;

              case 7:
                i = r.getFloat64(t, !0);
                break;

              default:
                throw "the decoder does not understand this pixel type";
            }

            return i;
          }
        }, r = function r(e, t, a) {
          this.val = e, this.left = t, this.right = a;
        }, void 0 !== (i = {
          decode: function decode(e, t) {
            var r = (t = t || {}).noDataValue,
                i = 0,
                n = {};

            if (n.ptr = t.inputOffset || 0, n.pixels = {}, a.readHeaderInfo(e, n)) {
              var s = n.headerInfo,
                  o = s.fileVersion,
                  l = a.getDataTypeArray(s.imageType);
              if (o > 5) throw "unsupported lerc version 2." + o;
              a.readMask(e, n), s.numValidPixel === s.width * s.height || n.pixels.resultMask || (n.pixels.resultMask = t.maskData);
              var f,
                  h = s.width * s.height;
              if (n.pixels.resultPixels = new l(h * s.numDims), n.counter = {
                onesweep: 0,
                uncompressed: 0,
                lut: 0,
                bitstuffer: 0,
                constant: 0,
                constantoffset: 0
              }, 0 !== s.numValidPixel) if (s.zMax === s.zMin) a.constructConstantSurface(n);else if (o >= 4 && a.checkMinMaxRanges(e, n)) a.constructConstantSurface(n);else {
                var u = new DataView(e, n.ptr, 2),
                    c = u.getUint8(0);
                if (n.ptr++, c) a.readDataOneSweep(e, n, l);else if (o > 1 && s.imageType <= 1 && Math.abs(s.maxZError - .5) < 1e-5) {
                  var d = u.getUint8(1);
                  if (n.ptr++, n.encodeMode = d, d > 2 || o < 4 && d > 1) throw "Invalid Huffman flag " + d;
                  d ? a.readHuffman(e, n, l) : a.readTiles(e, n, l);
                } else a.readTiles(e, n, l);
              }
              n.eofOffset = n.ptr, t.inputOffset ? (f = n.headerInfo.blobSize + t.inputOffset - n.ptr, Math.abs(f) >= 1 && (n.eofOffset = t.inputOffset + n.headerInfo.blobSize)) : (f = n.headerInfo.blobSize - n.ptr, Math.abs(f) >= 1 && (n.eofOffset = n.headerInfo.blobSize));
              var p = {
                width: s.width,
                height: s.height,
                pixelData: n.pixels.resultPixels,
                minValue: s.zMin,
                maxValue: s.zMax,
                validPixelCount: s.numValidPixel,
                dimCount: s.numDims,
                dimStats: {
                  minValues: s.minValues,
                  maxValues: s.maxValues
                },
                maskData: n.pixels.resultMask
              };

              if (n.pixels.resultMask && a.isValidPixelValue(s.imageType, r)) {
                var m = n.pixels.resultMask;

                for (i = 0; i < h; i++) {
                  m[i] || (p.pixelData[i] = r);
                }

                p.noDataValue = r;
              }

              return n.noDataValue = r, t.returnFileInfo && (p.fileInfo = a.formatFileInfo(n)), p;
            }
          },
          getBandCount: function getBandCount(e) {
            for (var t = 0, r = 0, i = {
              ptr: 0,
              pixels: {}
            }; r < e.byteLength - 58;) {
              a.readHeaderInfo(e, i), r += i.headerInfo.blobSize, t++, i.ptr = r;
            }

            return t;
          }
        }) && (e.exports = i);
      }),
          c = function (e) {
        var t, a, i;

        function n(e) {
          var t, a, r, i, n, s, o, l, f, h, u, c, d;

          for (this.data = e, this.pos = 8, this.palette = [], this.imgData = [], this.transparency = {}, this.animation = null, this.text = {}, n = null;;) {
            switch (t = this.readUInt32(), l = function () {
              var e, t;

              for (t = [], e = 0; e < 4; ++e) {
                t.push(String.fromCharCode(this.data[this.pos++]));
              }

              return t;
            }.call(this).join("")) {
              case "IHDR":
                this.width = this.readUInt32(), this.height = this.readUInt32(), this.bits = this.data[this.pos++], this.colorType = this.data[this.pos++], this.compressionMethod = this.data[this.pos++], this.filterMethod = this.data[this.pos++], this.interlaceMethod = this.data[this.pos++];
                break;

              case "acTL":
                this.animation = {
                  numFrames: this.readUInt32(),
                  numPlays: this.readUInt32() || 1 / 0,
                  frames: []
                };
                break;

              case "PLTE":
                this.palette = this.read(t);
                break;

              case "fcTL":
                n && this.animation.frames.push(n), this.pos += 4, n = {
                  width: this.readUInt32(),
                  height: this.readUInt32(),
                  xOffset: this.readUInt32(),
                  yOffset: this.readUInt32()
                }, i = this.readUInt16(), r = this.readUInt16() || 100, n.delay = 1e3 * i / r, n.disposeOp = this.data[this.pos++], n.blendOp = this.data[this.pos++], n.data = [];
                break;

              case "IDAT":
              case "fdAT":
                for ("fdAT" === l && (this.pos += 4, t -= 4), e = (null != n ? n.data : void 0) || this.imgData, u = 0; 0 <= t ? u < t : u > t; 0 <= t ? ++u : --u) {
                  e.push(this.data[this.pos++]);
                }

                break;

              case "tRNS":
                switch (this.transparency = {}, this.colorType) {
                  case 3:
                    if (this.transparency.indexed = this.read(t), (f = 255 - this.transparency.indexed.length) > 0) for (c = 0; 0 <= f ? c < f : c > f; 0 <= f ? ++c : --c) {
                      this.transparency.indexed.push(255);
                    }
                    break;

                  case 0:
                    this.transparency.grayscale = this.read(t)[0];
                    break;

                  case 2:
                    this.transparency.rgb = this.read(t);
                }

                break;

              case "tEXt":
                s = (h = this.read(t)).indexOf(0), o = String.fromCharCode.apply(String, h.slice(0, s)), this.text[o] = String.fromCharCode.apply(String, h.slice(s + 1));
                break;

              case "IEND":
                return n && this.animation.frames.push(n), this.colors = function () {
                  switch (this.colorType) {
                    case 0:
                    case 3:
                    case 4:
                      return 1;

                    case 2:
                    case 6:
                      return 3;
                  }
                }.call(this), this.hasAlphaChannel = 4 === (d = this.colorType) || 6 === d, a = this.colors + (this.hasAlphaChannel ? 1 : 0), this.pixelBitlength = this.bits * a, this.colorSpace = function () {
                  switch (this.colors) {
                    case 1:
                      return "DeviceGray";

                    case 3:
                      return "DeviceRGB";
                  }
                }.call(this), void (this.imgData = new Uint8Array(this.imgData));

              default:
                this.pos += t;
            }

            if (this.pos += 4, this.pos > this.data.length) throw new Error("Incomplete or corrupt PNG file");
          }
        }

        return n.load = function (e, t, a) {
          var r;
          return "function" == typeof t && (a = t), (r = new XMLHttpRequest()).open("GET", e, !0), r.responseType = "arraybuffer", r.onload = function () {
            var e;
            return e = new n(new Uint8Array(r.response || r.mozResponseArrayBuffer)), "function" == typeof (null != t ? t.getContext : void 0) && e.render(t), "function" == typeof a ? a(e) : void 0;
          }, r.send(null);
        }, 1, 2, 0, n.prototype.read = function (e) {
          var t, a;

          for (a = [], t = 0; 0 <= e ? t < e : t > e; 0 <= e ? ++t : --t) {
            a.push(this.data[this.pos++]);
          }

          return a;
        }, n.prototype.readUInt32 = function () {
          return this.data[this.pos++] << 24 | this.data[this.pos++] << 16 | this.data[this.pos++] << 8 | this.data[this.pos++];
        }, n.prototype.readUInt16 = function () {
          return this.data[this.pos++] << 8 | this.data[this.pos++];
        }, n.prototype.decodePixels = function (e) {
          var t, a, i, n, s, o, l, f, h, u, c, d, p, m, g, w, y, x, k, b, I, U, v;
          if (null == e && (e = this.imgData), 0 === e.length) return new Uint8Array(0);

          for (e = (e = new _chunks_Zlib_js__WEBPACK_IMPORTED_MODULE_3__["Z"](e)).getBytes(), w = (d = this.pixelBitlength / 8) * this.width, p = new Uint8Array(w * this.height), o = e.length, g = 0, m = 0, a = 0; m < o;) {
            switch (e[m++]) {
              case 0:
                for (n = k = 0; k < w; n = k += 1) {
                  p[a++] = e[m++];
                }

                break;

              case 1:
                for (n = b = 0; b < w; n = b += 1) {
                  t = e[m++], s = n < d ? 0 : p[a - d], p[a++] = (t + s) % 256;
                }

                break;

              case 2:
                for (n = I = 0; I < w; n = I += 1) {
                  t = e[m++], i = (n - n % d) / d, y = g && p[(g - 1) * w + i * d + n % d], p[a++] = (y + t) % 256;
                }

                break;

              case 3:
                for (n = U = 0; U < w; n = U += 1) {
                  t = e[m++], i = (n - n % d) / d, s = n < d ? 0 : p[a - d], y = g && p[(g - 1) * w + i * d + n % d], p[a++] = (t + Math.floor((s + y) / 2)) % 256;
                }

                break;

              case 4:
                for (n = v = 0; v < w; n = v += 1) {
                  t = e[m++], i = (n - n % d) / d, s = n < d ? 0 : p[a - d], 0 === g ? y = x = 0 : (y = p[(g - 1) * w + i * d + n % d], x = i && p[(g - 1) * w + (i - 1) * d + n % d]), l = s + y - x, f = Math.abs(l - s), u = Math.abs(l - y), c = Math.abs(l - x), h = f <= u && f <= c ? s : u <= c ? y : x, p[a++] = (t + h) % 256;
                }

                break;

              default:
                throw new Error("Invalid filter algorithm: " + e[m - 1]);
            }

            g++;
          }

          return p;
        }, n.prototype.decodePalette = function () {
          var e, t, a, r, i, n, s, o, l;

          for (a = this.palette, n = this.transparency.indexed || [], i = new Uint8Array((n.length || 0) + a.length), r = 0, a.length, e = 0, t = s = 0, o = a.length; s < o; t = s += 3) {
            i[r++] = a[t], i[r++] = a[t + 1], i[r++] = a[t + 2], i[r++] = null != (l = n[e++]) ? l : 255;
          }

          return i;
        }, n.prototype.copyToImageData = function (e, t) {
          var a, r, i, n, s, o, l, f, h, u, c;
          if (r = this.colors, h = null, a = this.hasAlphaChannel, this.palette.length && (h = null != (c = this._decodedPalette) ? c : this._decodedPalette = this.decodePalette(), r = 4, a = !0), f = (i = e.data || e).length, s = h || t, n = o = 0, 1 === r) for (; n < f;) {
            l = h ? 4 * t[n / 4] : o, u = s[l++], i[n++] = u, i[n++] = u, i[n++] = u, i[n++] = a ? s[l++] : this.transparency.grayscale && this.transparency.grayscale === u ? 0 : 255, o = l;
          } else for (; n < f;) {
            l = h ? 4 * t[n / 4] : o, i[n++] = s[l++], i[n++] = s[l++], i[n++] = s[l++], i[n++] = a ? s[l++] : this.transparency.rgb && this.transparency.rgb[1] === s[l - 3] && this.transparency.rgb[3] === s[l - 2] && this.transparency.rgb[5] === s[l - 1] ? 0 : 255, o = l;
          }
        }, n.prototype.decode = function () {
          var e;
          return e = new Uint8Array(this.width * this.height * 4), this.copyToImageData(e, this.decodePixels()), e;
        }, a = e.document && e.document.createElement("canvas"), i = a && a.getContext("2d"), t = function t(e) {
          var t;
          return i.width = e.width, i.height = e.height, i.clearRect(0, 0, e.width, e.height), i.putImageData(e, 0, 0), (t = new Image()).src = a.toDataURL(), t;
        }, n.prototype.decodeFrames = function (e) {
          var a, r, i, n, s, o, l, f;

          if (this.animation) {
            for (f = [], r = s = 0, o = (l = this.animation.frames).length; s < o; r = ++s) {
              a = l[r], i = e.createImageData(a.width, a.height), n = this.decodePixels(new Uint8Array(a.data)), this.copyToImageData(i, n), a.imageData = i, f.push(a.image = t(i));
            }

            return f;
          }
        }, n.prototype.renderFrame = function (e, t) {
          var a, r, i;
          return a = (r = this.animation.frames)[t], i = r[t - 1], 0 === t && e.clearRect(0, 0, this.width, this.height), 1 === (null != i ? i.disposeOp : void 0) ? e.clearRect(i.xOffset, i.yOffset, i.width, i.height) : 2 === (null != i ? i.disposeOp : void 0) && e.putImageData(i.imageData, i.xOffset, i.yOffset), 0 === a.blendOp && e.clearRect(a.xOffset, a.yOffset, a.width, a.height), e.drawImage(a.image, a.xOffset, a.yOffset);
        }, n.prototype.animate = function (e) {
          var _t,
              a,
              r,
              i,
              n,
              s,
              o = this;

          return a = 0, s = this.animation, i = s.numFrames, r = s.frames, n = s.numPlays, (_t = function t() {
            var s, l;
            if (s = a++ % i, l = r[s], o.renderFrame(e, s), i > 1 && a / i < n) return o.animation._timeout = setTimeout(_t, l.delay);
          })();
        }, n.prototype.stopAnimation = function () {
          var e;
          return clearTimeout(null != (e = this.animation) ? e._timeout : void 0);
        }, n.prototype.render = function (e) {
          var t, a;
          return e._png && e._png.stopAnimation(), e._png = this, e.width = this.width, e.height = this.height, t = e.getContext("2d"), this.animation ? (this.decodeFrames(t), this.animate(t)) : (a = t.createImageData(this.width, this.height), this.copyToImageData(a, this.decodePixels()), t.putImageData(a, 0, 0));
        }, n;
      }(self);

      var d = new Set(["jpg", "png", "bmp", "gif"]);

      function p(a, r) {
        if (!_utils_js__WEBPACK_IMPORTED_MODULE_8__["isPlatformLittleEndian"]) throw new _core_Error_js__WEBPACK_IMPORTED_MODULE_0__["default"]("rasterCoded:decode", "lerc decoder is not supported on big endian platform");
        var i = r.width,
            n = r.height,
            o = r.pixelType,
            f = b(o),
            h = f.pixelTypeCtor,
            u = null == r.noDataValue ? f.noDataValue : r.noDataValue;
        var c,
            d,
            p = 0,
            m = 0;
        var g = a.byteLength - 10;

        for (; m < g;) {
          var _r = Object(_chunks_LercCodec_js__WEBPACK_IMPORTED_MODULE_6__["d"])(a, {
            inputOffset: m,
            encodedMaskData: c,
            returnMask: 0 === p,
            returnEncodedMask: 0 === p,
            returnFileInfo: !0,
            pixelType: h,
            noDataValue: u
          });

          if (i && n && (_r.width !== i || _r.height !== n)) throw new _core_Error_js__WEBPACK_IMPORTED_MODULE_0__["default"]("rasterCoded:decode", "lerc decoded result has width or height different from specified in options");

          if (m = _r.fileInfo.eofOffset, 0 === p && (c = _r.encodedMaskData, d = new _PixelBlock_js__WEBPACK_IMPORTED_MODULE_1__["default"]({
            width: _r.width,
            height: _r.height,
            pixels: [],
            pixelType: o,
            mask: _r.maskData,
            statistics: []
          })), p++, d.addData({
            pixels: _r.pixelData,
            statistics: {
              minValue: _r.minValue,
              maxValue: _r.maxValue,
              noDataValue: _r.noDataValue
            }
          }), g - m > 10) {
            var e = String.fromCharCode.apply(null, new Uint8Array(a, m, 10));
            m = m + e.indexOf("CntZ") > -1 ? e.indexOf("CntZ") : 0;
          }
        }

        return d;
      }

      function m(a, r) {
        if (!_utils_js__WEBPACK_IMPORTED_MODULE_8__["isPlatformLittleEndian"]) throw new _core_Error_js__WEBPACK_IMPORTED_MODULE_0__["default"]("rasterCoded:decode", "lerc decoder is not supported on big endian platform");
        var i,
            n,
            s,
            o = 0,
            f = 0,
            h = 0;
        var c = a.byteLength - 10,
            d = [],
            p = r.width,
            m = r.height;

        for (; f < c;) {
          var g;
          if (n = u.decode(a, {
            inputOffset: f,
            maskData: i,
            returnFileInfo: !0
          }), p && m && (n.width !== p || n.height !== m)) throw new _core_Error_js__WEBPACK_IMPORTED_MODULE_0__["default"]("rasterCoded:decode", "lerc2 decoded result has width or height different from what's specified in options");

          if (f = n.fileInfo.eofOffset, 0 === o && (h = n.fileInfo.numValidPixel, i = n.maskData, s = new _PixelBlock_js__WEBPACK_IMPORTED_MODULE_1__["default"]({
            width: n.width,
            height: n.height,
            pixels: [],
            pixelType: n.fileInfo.pixelType,
            mask: n.maskData,
            statistics: []
          })), n.fileInfo.mask && n.fileInfo.mask.numBytes > 0 && d.push(n.maskData), n.dimCount > 1 && (null == (g = n.pixelData) ? void 0 : g.length) === n.width * n.height * n.dimCount) {
            var w, y, x, k;
            n.pixelData = n.pixelData.slice(-n.width * n.height);
            var e = null == (w = n.dimStats) || null == (y = w.minValues) ? void 0 : y[n.dimCount - 1],
                t = null == (x = n.dimStats) || null == (k = x.maxValues) ? void 0 : k[n.dimCount - 1];
            null != e && null != t && (n.minValue = e, n.maxValue = t);
          }

          if (o++, s.addData({
            pixels: n.pixelData,
            statistics: {
              minValue: n.minValue,
              maxValue: n.maxValue
            }
          }), c - f > 10) {
            var _e = String.fromCharCode.apply(null, new Uint8Array(a, f, 10));

            f += _e.indexOf("Lerc") > -1 ? _e.indexOf("Lerc") : 0;
          }
        }

        var b = 0,
            I = 0,
            U = 0;

        if (d.length > 1) {
          for (U = s.width * s.height, i = new Uint8Array(U), i.set(d[0]), b = 1; b < d.length; b++) {
            var _e2 = d[b];

            for (I = 0; I < U; I++) {
              i[I] = i[I] & _e2[I];
            }
          }

          for (h = 0, I = 0; I < U; I++) {
            h += i[I];
          }

          s.mask = i;
        }

        return s.validPixelCount = h, s;
      }

      function g(e) {
        var a = Object(_TiffDecoder_js__WEBPACK_IMPORTED_MODULE_9__["decode"])(e),
            r = new _PixelBlock_js__WEBPACK_IMPORTED_MODULE_1__["default"]({
          width: a.width,
          height: a.height,
          pixels: a.pixels,
          pixelType: a.pixelType.toLowerCase(),
          mask: a.mask,
          statistics: null
        });
        return r.updateStatistics(), r;
      }

      function w(e) {
        var a = _JpgPlus_js__WEBPACK_IMPORTED_MODULE_5__["default"].decode(e),
            r = new _PixelBlock_js__WEBPACK_IMPORTED_MODULE_1__["default"]({
          width: a.width,
          height: a.height,
          pixels: a.pixels,
          pixelType: "U8",
          mask: a.mask,
          statistics: null
        });

        return r.updateStatistics(), r;
      }

      function y(e, a) {
        var r = new Uint8Array(e),
            i = new c(r),
            n = a.width,
            s = a.height,
            o = n * s,
            l = i.decode();
        var f,
            h = 0,
            u = 0;
        var d = new Uint8Array(o);

        for (h = 0; h < o; h++) {
          d[h] = l[4 * h + 3];
        }

        var p = new _PixelBlock_js__WEBPACK_IMPORTED_MODULE_1__["default"]({
          width: n,
          height: s,
          pixels: [],
          pixelType: "U8",
          mask: d,
          statistics: []
        });

        for (h = 0; h < 3; h++) {
          for (f = new Uint8Array(o), u = 0; u < o; u++) {
            f[u] = l[4 * u + h];
          }

          p.addData({
            pixels: f
          });
        }

        return p.updateStatistics(), p;
      }

      function x(t) {
        if (null == t) throw new _core_Error_js__WEBPACK_IMPORTED_MODULE_0__["default"]("rasterCodec:decode", "parameter encodeddata is required.");
        var a = new Uint8Array(t, 0, 10);
        var r = "";
        return 255 === a[0] && 216 === a[1] ? r = "jpg" : 137 === a[0] && 80 === a[1] && 78 === a[2] && 71 === a[3] ? r = "png" : 67 === a[0] && 110 === a[1] && 116 === a[2] && 90 === a[3] && 73 === a[4] && 109 === a[5] && 97 === a[6] && 103 === a[7] && 101 === a[8] && 32 === a[9] ? r = "lerc" : 76 === a[0] && 101 === a[1] && 114 === a[2] && 99 === a[3] && 50 === a[4] && 32 === a[5] ? r = "lerc2" : 73 === a[0] && 73 === a[1] && 42 === a[2] && 0 === a[3] || 77 === a[0] && 77 === a[1] && 0 === a[2] && 42 === a[3] ? r = "tiff" : 71 === a[0] && 73 === a[1] && 70 === a[2] ? r = "gif" : 66 === a[0] && 77 === a[1] ? r = "bmp" : String.fromCharCode.apply(null, a).toLowerCase().indexOf("error") > -1 && (r = "error"), r;
      }

      function k(a) {
        var r = null;

        switch (a) {
          case "lerc":
            r = p;
            break;

          case "lerc2":
            r = m;
            break;

          case "jpg":
            r = w;
            break;

          case "png":
            r = y;
            break;

          case "bsq":
          case "bip":
            r = function r(e, _r2) {
              return function (e, a, r) {
                var _b = b(a.pixelType),
                    i = _b.pixelTypeCtor,
                    n = (0, _Raw_js__WEBPACK_IMPORTED_MODULE_7__["default"].decode)(e, {
                  width: a.width,
                  height: a.height,
                  pixelType: i,
                  format: r
                }),
                    s = new _PixelBlock_js__WEBPACK_IMPORTED_MODULE_1__["default"]({
                  width: a.width,
                  height: a.height,
                  pixels: n.pixels,
                  pixelType: a.pixelType,
                  mask: n.mask,
                  statistics: null
                });

                return s.updateStatistics(), s;
              }(e, _r2, a);
            };

            break;

          case "tiff":
            r = g;
            break;

          case "error":
            r = function r() {
              throw new _core_Error_js__WEBPACK_IMPORTED_MODULE_0__["default"]("rasterCodec:decode", "input data contains error");
            };

            break;

          default:
            r = function r() {
              throw new _core_Error_js__WEBPACK_IMPORTED_MODULE_0__["default"]("rasterCodec:decode", "unsupported raster format");
            };

        }

        return r;
      }

      function b(e) {
        var t = null,
            a = null;

        switch (e ? e.toLowerCase() : "f32") {
          case "u1":
          case "u2":
          case "u4":
          case "u8":
            a = Math.pow(2, 8) - 1, t = Uint8Array;
            break;

          case "u16":
            a = a || Math.pow(2, 16) - 1, t = Uint16Array;
            break;

          case "u32":
            a = a || Math.pow(2, 32) - 1, t = Uint32Array;
            break;

          case "s8":
            a = a || 0 - Math.pow(2, 7), t = Int8Array;
            break;

          case "s16":
            a = a || 0 - Math.pow(2, 15), t = Int16Array;
            break;

          case "s32":
            a = a || 0 - Math.pow(2, 31), t = Int32Array;
            break;

          default:
            t = Float32Array;
        }

        return {
          pixelTypeCtor: t,
          noDataValue: a
        };
      }

      function I(e) {
        var t = x(e);
        return "lerc2" === t ? t = "lerc" : "error" === t && (t = ""), t;
      }

      function U(_x, _x2, _x3) {
        return _U.apply(this, arguments);
      }
      /***/


      function _U() {
        _U = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee2(a, r, n) {
          var s, o, l;
          return regeneratorRuntime.wrap(function _callee2$(_context2) {
            while (1) {
              switch (_context2.prev = _context2.next) {
                case 0:
                  if (!(null == a)) {
                    _context2.next = 2;
                    break;
                  }

                  throw new _core_Error_js__WEBPACK_IMPORTED_MODULE_0__["default"]("rasterCodec:decode", "missing encodeddata parameter.");

                case 2:
                  if (!(null == r || null == r.width || null == r.height)) {
                    _context2.next = 4;
                    break;
                  }

                  throw new _core_Error_js__WEBPACK_IMPORTED_MODULE_0__["default"]("rasterCodec:decode", "requires width and height in options parameter.");

                case 4:
                  l = r.format && r.format.toLowerCase();

                  if (!("tiff" === l && r.customOptions)) {
                    _context2.next = 9;
                    break;
                  }

                  _context2.t0 = function (e, a) {
                    var r = Object(_TiffDecoder_js__WEBPACK_IMPORTED_MODULE_9__["decodeTileOrStrip"])(e, a.customOptions),
                        i = new _PixelBlock_js__WEBPACK_IMPORTED_MODULE_1__["default"]({
                      width: r.width,
                      height: r.height,
                      pixels: r.pixels,
                      pixelType: r.pixelType.toLowerCase(),
                      mask: r.mask,
                      statistics: null
                    });
                    return i.updateStatistics(), i;
                  }(a, r);

                  _context2.next = 18;
                  break;

                case 9:
                  (!l || "bsq" !== l && "bip" !== l) && (l = x(a));

                  if (!(r.useCanvas && d.has(l))) {
                    _context2.next = 16;
                    break;
                  }

                  _context2.next = 13;
                  return function () {
                    var _ref = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(e, a, r, n) {
                      var s, o, l, f;
                      return regeneratorRuntime.wrap(function _callee$(_context) {
                        while (1) {
                          switch (_context.prev = _context.next) {
                            case 0:
                              s = new _ImageCanvasDecoder_js__WEBPACK_IMPORTED_MODULE_4__["default"]();
                              o = _objectSpread({
                                applyJpegMask: !1,
                                format: a
                              }, r);
                              _context.next = 4;
                              return s.decode(e, o, n);

                            case 4:
                              l = _context.sent;
                              f = new _PixelBlock_js__WEBPACK_IMPORTED_MODULE_1__["default"](l);
                              return _context.abrupt("return", (f.updateStatistics(), f));

                            case 7:
                            case "end":
                              return _context.stop();
                          }
                        }
                      }, _callee);
                    }));

                    return function (_x4, _x5, _x6, _x7) {
                      return _ref.apply(this, arguments);
                    };
                  }()(a, l, r, n);

                case 13:
                  o = _context2.sent;
                  _context2.next = 17;
                  break;

                case 16:
                  s = k(l), r.isPoint && ((r = _objectSpread({}, r)).width++, r.height++), o = s(a, r), r.isPoint && function (e) {
                    var a = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 1;
                    if (!e) return;
                    var r = e.pixels,
                        i = e.width,
                        n = e.height,
                        s = e.mask;
                    if (!r || 0 === r.length) return;
                    var o = r.length,
                        l = i - 1,
                        f = n - 1,
                        h = [];
                    var u, c, d, p, m, g, w;

                    var y = _PixelBlock_js__WEBPACK_IMPORTED_MODULE_1__["default"].getPixelArrayConstructor(e.pixelType);

                    if (0 === a) {
                      for (u = 0; u < o; u++) {
                        for (m = r[u], g = new y(l * f), c = 0; c < f; c++) {
                          for (p = c * i, d = 0; d < l; d++) {
                            g[c * l + d] = m[p + d];
                          }
                        }

                        h.push(g);
                      }

                      if (s) for (w = new Uint8Array(l * f), c = 0; c < f; c++) {
                        for (p = c * i, d = 0; d < l; d++) {
                          w[c * l + d] = s[p + d];
                        }
                      }
                    } else {
                      for (u = 0; u < o; u++) {
                        for (m = r[u], g = new y(l * f), c = 0; c < f; c++) {
                          for (p = c * i, d = 0; d < l; d++) {
                            g[c * l + d] = (m[p + d] + m[p + d + 1] + m[p + i + d] + m[p + i + d + 1]) / 4;
                          }
                        }

                        h.push(g);
                      }

                      if (s) for (w = new Uint8Array(l * f), c = 0; c < f; c++) {
                        for (p = c * i, d = 0; d < l; d++) {
                          w[c * l + d] = Math.min.apply(null, [s[p + d], s[p + d + 1], s[p + i + d], s[p + i + d + 1]]);
                        }
                      }
                    }

                    e.width = l, e.height = f, e.mask = w, e.pixels = h;
                  }(o);

                case 17:
                  _context2.t0 = o;

                case 18:
                  return _context2.abrupt("return", _context2.t0);

                case 19:
                case "end":
                  return _context2.stop();
              }
            }
          }, _callee2);
        }));
        return _U.apply(this, arguments);
      }
    },

    /***/
    "Foyv":
    /*!***********************************************************************!*\
      !*** ./node_modules/@arcgis/core/layers/support/rasterFormats/Raw.js ***!
      \***********************************************************************/

    /*! exports provided: default */

    /***/
    function Foyv(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /*
      All material copyright ESRI, All Rights Reserved, unless otherwise specified.
      See https://js.arcgis.com/4.18/esri/copyright.txt for details.
      */


      var e = function e(_e3, r) {
        var n = r.width * r.height,
            a = r.pixelType;
        return Math.floor(_e3.byteLength / (n * t(a)));
      },
          t = function t(e) {
        var t = 1;

        switch (e) {
          case Uint8Array:
          case Int8Array:
            t = 1;
            break;

          case Uint16Array:
          case Int16Array:
            t = 2;
            break;

          case Uint32Array:
          case Int32Array:
          case Float32Array:
            t = 4;
            break;

          case Float64Array:
            t = 8;
        }

        return t;
      };
      /* harmony default export */


      __webpack_exports__["default"] = /*#__PURE__*/function () {
        function _class() {
          _classCallCheck(this, _class);
        }

        _createClass(_class, null, [{
          key: "decode",
          value: function decode(r, n) {
            var a = n.pixelType,
                s = [],
                i = n.width * n.height,
                c = e(r, n),
                o = n.bandIds,
                h = n.format,
                l = o && o.length || e(r, n),
                y = r.byteLength - r.byteLength % (i * t(a)),
                f = new a(r, 0, i * c);
            var u, b, g, A, p;
            if ("bip" === h) for (u = 0; u < l; u++) {
              for (A = new a(i), p = o ? o[u] : u, b = 0; b < i; b++) {
                A[b] = f[b * c + p];
              }

              s.push(A);
            } else if ("bsq" === h) for (u = 0; u < l; u++) {
              p = o ? o[u] : u, s.push(f.subarray(p * i, (p + 1) * i));
            }
            return y < r.byteLength - 1 && (g = function (e, t) {
              if (8 * e.byteLength < t) return null;
              var r = new Uint8Array(e, 0, Math.ceil(t / 8)),
                  n = new Uint8Array(t);
              var a = 0,
                  s = 0,
                  i = 0,
                  c = 0;

              for (i = 0; i < r.length - 1; i++) {
                for (s = r[i], c = 7; c >= 0; c--) {
                  n[a++] = s >> c & 1;
                }
              }

              for (c = 7; a < t - 1;) {
                s = r[r.length - 1], n[a++] = s >> c & 1, c--;
              }

              return n;
            }(r.slice(y), i)), {
              pixels: s,
              mask: g
            };
          }
        }]);

        return _class;
      }();
      /***/

    },

    /***/
    "Nypj":
    /*!***************************************************************************!*\
      !*** ./node_modules/@arcgis/core/layers/support/rasterFormats/JpgPlus.js ***!
      \***************************************************************************/

    /*! exports provided: default */

    /***/
    function Nypj(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony import */


      var _chunks_Zlib_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ../../../chunks/Zlib.js */
      "xMJK");
      /* harmony import */


      var _chunks_Jpg_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ../../../chunks/Jpg.js */
      "6Q66");
      /*
      All material copyright ESRI, All Rights Reserved, unless otherwise specified.
      See https://js.arcgis.com/4.18/esri/copyright.txt for details.
      */

      /* harmony default export */


      __webpack_exports__["default"] = /*#__PURE__*/function () {
        function _class2() {
          _classCallCheck(this, _class2);
        }

        _createClass(_class2, null, [{
          key: "decode",
          value: function decode(n) {
            var r = new Uint8Array(n),
                s = new _chunks_Jpg_js__WEBPACK_IMPORTED_MODULE_1__["J"]();
            s.parse(r);
            var o = s.width,
                a = s.height,
                i = s.numComponents,
                l = s.eof,
                f = s.getData(o, a, !0);
            var h;
            var c = o * a;
            var p = 0,
                u = 0,
                g = 0;

            if (l < r.length - 1) {
              var e = new _chunks_Zlib_js__WEBPACK_IMPORTED_MODULE_0__["Z"](r.subarray(l)).getBytes();
              h = new Uint8Array(c);
              var _n = 0;

              for (p = 0; p < e.length; p++) {
                for (g = 7; g >= 0; g--) {
                  h[_n++] = e[p] >> g & 1;
                }
              }
            }

            var m,
                w = null;
            if (1 === i) w = [f, f, f];else {
              for (w = [], p = 0; p < 3; p++) {
                m = new Uint8Array(c), w.push(m);
              }

              for (g = 0, u = 0; u < c; u++) {
                for (p = 0; p < 3; p++) {
                  w[p][u] = f[g++];
                }
              }
            }
            return {
              width: o,
              height: a,
              pixels: w,
              mask: h
            };
          }
        }]);

        return _class2;
      }();
      /***/

    },

    /***/
    "R0O3":
    /*!**************************************************************************************!*\
      !*** ./node_modules/@arcgis/core/layers/support/rasterFormats/ImageCanvasDecoder.js ***!
      \**************************************************************************************/

    /*! exports provided: default */

    /***/
    function R0O3(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony import */


      var _core_Error_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ../../../core/Error.js */
      "zlDU");
      /* harmony import */


      var _core_promiseUtils_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ../../../core/promiseUtils.js */
      "9MzC");
      /* harmony import */


      var _chunks_Zlib_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ../../../chunks/Zlib.js */
      "xMJK");
      /*
      All material copyright ESRI, All Rights Reserved, unless otherwise specified.
      See https://js.arcgis.com/4.18/esri/copyright.txt for details.
      */


      var r = /*#__PURE__*/function () {
        function r(t) {
          _classCallCheck(this, r);

          t && (this.canvas = t.canvas, this.ctx = t.ctx || t.canvas && t.canvas.getContext("2d"));
        }

        _createClass(r, [{
          key: "decode",
          value: function decode(i, s, c) {
            var _this = this;

            if (!i || i.byteLength < 10) throw new _core_Error_js__WEBPACK_IMPORTED_MODULE_0__["default"]("imagecanvasdecoder: decode", "required a valid encoded data as input.");
            var h = s.width,
                o = s.height,
                d = s.format;
            var l = s.applyJpegMask;
            if (l && (!h || !o)) throw new _core_Error_js__WEBPACK_IMPORTED_MODULE_0__["default"]("imagecanvasdecoder: decode", "image width and height are needed to apply jpeg mask directly to canvas");
            return Object(_core_promiseUtils_js__WEBPACK_IMPORTED_MODULE_1__["create"])(function (t, e) {
              var g = null;
              "jpg" === d && l && (g = r.getMask(i, s));
              var v = new Blob([new Uint8Array(i)], {
                type: "image/" + d == "jpg" ? "jpeg" : d
              }),
                  w = URL.createObjectURL(v),
                  m = new Image();
              var p;
              m.src = w, m.onload = function () {
                if (URL.revokeObjectURL(w), Object(_core_promiseUtils_js__WEBPACK_IMPORTED_MODULE_1__["isAborted"])(c)) return void e(Object(_core_promiseUtils_js__WEBPACK_IMPORTED_MODULE_1__["createAbortError"])());
                h = m.width, o = m.height, _this.canvas ? (_this.canvas.width === h && _this.canvas.height === o || (_this.canvas.width = h, _this.canvas.height = o), _this.ctx.clearRect(0, 0, h, o)) : (_this.canvas = document.createElement("canvas"), _this.canvas.width = h, _this.canvas.height = o, _this.ctx = _this.canvas.getContext("2d")), _this.ctx.drawImage(m, 0, 0);

                var i = _this.ctx.getImageData(0, 0, h, o);

                var _r3;

                if (p = i.data, s.renderOnCanvas) {
                  if (g) for (_r3 = 0; _r3 < g.length; _r3++) {
                    g[_r3] ? p[4 * _r3 + 3] = 255 : p[4 * _r3 + 3] = 0;
                  }
                  return _this.ctx.putImageData(i, 0, 0), void t(null);
                }

                var d = h * o,
                    l = new Uint8Array(d),
                    v = new Uint8Array(d),
                    f = new Uint8Array(d);
                if (g) for (_r3 = 0; _r3 < d; _r3++) {
                  l[_r3] = p[4 * _r3], v[_r3] = p[4 * _r3 + 1], f[_r3] = p[4 * _r3 + 2];
                } else for (g = new Uint8Array(d), _r3 = 0; _r3 < d; _r3++) {
                  l[_r3] = p[4 * _r3], v[_r3] = p[4 * _r3 + 1], f[_r3] = p[4 * _r3 + 2], g[_r3] = p[4 * _r3 + 3];
                }
                t({
                  width: h,
                  height: o,
                  pixels: [l, v, f],
                  mask: g,
                  pixelType: "u8"
                });
              }, m.onerror = function () {
                URL.revokeObjectURL(w), e("cannot load image");
              };
            });
          }
        }], [{
          key: "getMask",
          value: function getMask(t, e) {
            var a = null;

            try {
              var n = new Uint8Array(t),
                  _r6 = Math.ceil(n.length / 2);

              var s = 0;
              var c = n.length - 2;

              for (s = _r6; s < c && (255 !== n[s] || 217 !== n[s + 1]); s++) {
                ;
              }

              if (s += 2, s < n.length - 1) {
                var _t2 = new _chunks_Zlib_js__WEBPACK_IMPORTED_MODULE_2__["Z"](n.subarray(s)).getBytes();

                a = new Uint8Array(e.width * e.height);
                var _r7 = 0;

                for (var _e4 = 0; _e4 < _t2.length; _e4++) {
                  for (var _n2 = 7; _n2 >= 0; _n2--) {
                    a[_r7++] = _t2[_e4] >> _n2 & 1;
                  }
                }
              }
            } catch (t) {}

            return a;
          }
        }]);

        return r;
      }();
      /* harmony default export */


      __webpack_exports__["default"] = r;
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
    "bT0G":
    /*!*******************************************************************************!*\
      !*** ./node_modules/@arcgis/core/layers/support/rasterFormats/TiffDecoder.js ***!
      \*******************************************************************************/

    /*! exports provided: decode, decodeTileOrStrip, getImageInfo, parseFieldValues, parseHeader, parseIFD, parseSignature */

    /***/
    function bT0G(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "decode", function () {
        return S;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "decodeTileOrStrip", function () {
        return A;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "getImageInfo", function () {
        return p;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "parseFieldValues", function () {
        return w;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "parseHeader", function () {
        return I;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "parseIFD", function () {
        return m;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "parseSignature", function () {
        return y;
      });
      /* harmony import */


      var _chunks_Zlib_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ../../../chunks/Zlib.js */
      "xMJK");
      /* harmony import */


      var _chunks_Jpg_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ../../../chunks/Jpg.js */
      "6Q66");
      /* harmony import */


      var _rasterDatasets_byteStreamUtils_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ../rasterDatasets/byteStreamUtils.js */
      "dCrW");
      /* harmony import */


      var _Lzw_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./Lzw.js */
      "rbZt");
      /* harmony import */


      var _TiffTags_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ./TiffTags.js */
      "D/0F");
      /* harmony import */


      var _utils_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ./utils.js */
      "5VpP");
      /*
      All material copyright ESRI, All Rights Reserved, unless otherwise specified.
      See https://js.arcgis.com/4.18/esri/copyright.txt for details.
      */


      var r = [0, 1, 1, 2, 4, 8, 1, 1, 2, 4, 8, 4, 8, -1, -1, -1, 8, 8, 8];

      function l(e, t) {
        var n = "unknown";
        return 3 === e ? n = "f32" : 1 === e ? 1 === t ? n = "u1" : 2 === t ? n = "u2" : 4 === t ? n = "u4" : t <= 8 ? n = "u8" : t <= 16 ? n = "u16" : t <= 32 && (n = "u32") : 2 === e && (t <= 8 ? n = "s8" : t <= 16 ? n = "s16" : t <= 32 && (n = "s32")), n;
      }

      function o(e) {
        var t = null;

        switch (e ? e.toLowerCase() : "f32") {
          case "u1":
          case "u2":
          case "u4":
          case "u8":
            t = Uint8Array;
            break;

          case "u16":
            t = Uint16Array;
            break;

          case "u32":
            t = Uint32Array;
            break;

          case "s8":
            t = Int8Array;
            break;

          case "s16":
            t = Int16Array;
            break;

          case "s32":
            t = Int32Array;
            break;

          default:
            t = Float32Array;
        }

        return t;
      }

      function f(e, t) {
        return {
          x: t[0] * e.x + t[1] * e.y + t[2],
          y: t[3] * e.x + t[4] * e.y + t[5]
        };
      }

      function u(e, t) {
        var n = e.get(t);
        return n && n.values;
      }

      function c(e, t) {
        var n = e.get(t);
        return n && n.values[0];
      }

      function h(e, t, n) {
        var a = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : 0;
        var s = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : _TiffTags_js__WEBPACK_IMPORTED_MODULE_4__["default"].TIFF_TAGS;
        var r = arguments.length > 5 && arguments[5] !== undefined ? arguments[5] : 4;
        var l = 8 === r,
            o = l ? T(new DataView(e, n, 8), 0, t) : new DataView(e, n, 2).getUint16(0, t),
            f = 4 + 2 * r,
            u = l ? 8 : 2,
            c = u + o * f;
        if (n + c > e.byteLength) return {
          success: !1,
          ifd: null,
          nextIFD: null,
          requiredBufferSize: c
        };
        var h = n + c + 4 <= e.byteLength ? E(new DataView(e, n + c, 8 === r ? 8 : 4), 0, t, 8 === r) : null,
            g = n + u,
            p = new Map();
        var I, d, y, m, A, S, M;

        for (var _n3 = 0; _n3 < o; _n3++) {
          d = new DataView(e, g + f * _n3, f), y = d.getUint16(0, t), A = d.getUint16(2, t), m = _TiffTags_js__WEBPACK_IMPORTED_MODULE_4__["default"].getTagName(y, s), 2 === r ? (S = d.getUint16(4, t), M = d.getUint16(6, t)) : 4 === r ? (S = d.getUint32(4, t), M = d.getUint32(8, t)) : 8 === r && (S = E(d, 4, t, !0), M = E(d, 12, t, !0)), I = {
            id: y,
            type: A,
            valueCount: S,
            valueOffset: M,
            values: null
          }, w(e, t, I, a, !1, r), p.set(m, I);
        }

        return {
          success: !0,
          ifd: p,
          nextIFD: h,
          requiredBufferSize: c
        };
      }

      var g = function g(n, i, r, f, u) {
        var h = _utils_js__WEBPACK_IMPORTED_MODULE_5__["isPlatformLittleEndian"] === i,
            g = c(r, "BITSPERSAMPLE"),
            w = l(c(r, "SAMPLEFORMAT") || 1, g),
            p = c(r, "COMPRESSION") || 1,
            I = o(w);
        var T, d, E, y, m, A, S;
        if (1 === p) E = n.slice(f, f + u), y = new Uint8Array(E);else if (8 === p || 32946 === p) y = new Uint8Array(n, f, u), A = new _chunks_Zlib_js__WEBPACK_IMPORTED_MODULE_0__["Z"](y), S = A.getBytes(), E = new ArrayBuffer(S.length), y = new Uint8Array(E), y.set(S);else if (6 === p) {
          y = new Uint8Array(n, f, u);
          var e = new _chunks_Jpg_js__WEBPACK_IMPORTED_MODULE_1__["J"]();
          e.parse(y);
          var a = e.getData(e.width, e.height, !0);
          E = new ArrayBuffer(a.length), y = new Uint8Array(E), y.set(a);
        } else 5 === p && (y = Object(_Lzw_js__WEBPACK_IMPORTED_MODULE_3__["decode"])(n, f, u, i), E = y.buffer);
        if ("u8" === w || "s8" === w || h) d = new I(E);else {
          switch (E = new ArrayBuffer(y.length), m = new Uint8Array(E), w) {
            case "u16":
            case "s16":
              for (T = 0; T < y.length; T += 2) {
                m[T] = y[T + 1], m[T + 1] = y[T];
              }

              break;

            case "u32":
            case "s32":
            case "f32":
              for (T = 0; T < y.length; T += 4) {
                m[T] = y[T + 3], m[T + 1] = y[T + 2], m[T + 2] = y[T + 1], m[T + 3] = y[T];
              }

          }

          d = new I(E);
        }
        return d;
      };

      function w(e, t, n) {
        var a = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : 0;
        var i = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : !1;
        var s = arguments.length > 5 && arguments[5] !== undefined ? arguments[5] : 4;
        if (n.values) return !0;
        var l = n.type,
            o = n.valueCount;
        var f = n.valueOffset,
            u = [];
        var c = r[l],
            h = 8 * c,
            g = o * c,
            w = o * r[l] * 8;
        var p, I;
        var E = 8 === s ? 64 : 32;

        if (w > E) {
          if (g > (i ? e.byteLength : e ? e.byteLength - f + a : 0)) return n.offlineOffsetSize = [f, g], n.values = null, !1;
        }

        if (w <= E) {
          if (t || (f >>>= 32 - w), 1 === o) u = [f];else if (64 === E) {
            var _e5 = f >>> 0,
                _t3 = Math.round((f - _e5) / 4294967296);

            var _n4 = _e5,
                _a = 32;

            for (I = 1; I <= o; I++) {
              var _e6 = 32 - h * I % 32;

              if (_a < h) {
                var _i = _n4 << _e6 >>> 32 - _a,
                    _s = _t3 << 32 - _a >>> 32 - _a;

                _n4 = _t3, u.push(_i + _s * Math.pow(2, h - _a)), _a -= 32 - (h - _a);
              } else u.push(_n4 << _e6 >>> 32 - h), _a -= h;

              0 === _a && (_a = 32, _n4 = _t3);
            }
          } else for (I = 1; I <= o; I++) {
            var _e7 = 32 - h * I;

            u.push(f << _e7 >>> 32 - h);
          }
        } else {
          f -= a, i && (f = 0);

          for (var _n5 = f; _n5 < f + g; _n5 += c) {
            switch (l) {
              case 1:
              case 2:
                p = new DataView(e, _n5, 1).getUint8(0);
                break;

              case 3:
                p = new DataView(e, _n5, 2).getUint16(0, t);
                break;

              case 4:
                p = new DataView(e, _n5, 4).getUint32(0, t);
                break;

              case 5:
                p = new DataView(e, _n5, 4).getUint32(0, t) / new DataView(e, _n5 + 4, 4).getUint32(0, t);
                break;

              case 6:
                p = new DataView(e, _n5, 1).getInt8(0);
                break;

              case 7:
                p = new DataView(e, _n5, 1).getUint8(0);
                break;

              case 8:
                p = new DataView(e, _n5, 2).getInt16(0, t);
                break;

              case 9:
                p = new DataView(e, _n5, 4).getInt32(0, t);
                break;

              case 10:
                p = new DataView(e, _n5, 4).getInt32(0, t) / new DataView(e, _n5 + 4, 4).getInt32(0, t);
                break;

              case 11:
                p = new DataView(e, _n5, 4).getFloat32(0, t);
                break;

              case 12:
                p = new DataView(e, _n5, 8).getFloat64(0, t);
                break;

              case 16:
              case 18:
                p = T(new DataView(e, _n5, 8), 0, t);
                break;

              case 17:
                p = d(new DataView(e, _n5, 8), 0, t);
                break;

              default:
                p = null;
            }

            u.push(p);
          }
        }

        if (2 === l) {
          var _e8 = "";
          var _t4 = u;

          for (u = [], I = 0; I < _t4.length; I++) {
            0 === _t4[I] && "" !== _e8 ? (u.push(_e8), _e8 = "") : _e8 += String.fromCharCode(_t4[I]);
          }

          "" === _e8 && 0 !== u.length || u.push(_e8);
        }

        return n.values = u, !0;
      }

      function p(e) {
        var t = e[0],
            n = c(t, "TILEWIDTH"),
            a = c(t, "TILELENGTH"),
            i = c(t, "IMAGEWIDTH"),
            s = c(t, "IMAGELENGTH"),
            r = c(t, "BITSPERSAMPLE"),
            o = c(t, "SAMPLESPERPIXEL"),
            h = c(t, "SAMPLEFORMAT") || 1,
            g = l(h, r),
            w = !!u(t, "PLANARCONFIGURATION") && 2 === u(t, "PLANARCONFIGURATION")[0],
            p = u(t, "GDAL_NODATA");
        var I;
        null != p && ("string" == typeof p[0] ? (I = p.map(function (e) {
          return parseFloat(e);
        }), I.some(function (e) {
          return isNaN(e);
        }) && (I = null)) : "number" == typeof p[0] && (I = p));
        var T = c(t, "COMPRESSION") || 1;
        var d;

        switch (T) {
          case 1:
            d = "NONE";
            break;

          case 2:
          case 3:
          case 4:
          case 32771:
            d = "CCITT";
            break;

          case 5:
            d = "LZW";
            break;

          case 6:
          case 7:
            d = "JPEG";
            break;

          case 32773:
            d = "PACKBITS";
            break;

          case 8:
          case 32946:
            d = "DEFLATE";
            break;

          case 34712:
            d = "JPEG2000";
            break;

          default:
            d = String(T);
        }

        var E = !0,
            y = "";
        1 !== T && 5 !== T && 6 !== T && 8 !== T && 32946 !== T && (E = !1, y += "unsupported tag compression " + T), h > 3 && (E = !1, y += "unsupported tag sampleFormat " + h), r % 8 != 0 && (E = !1, y += "unsupported tag bitsPerSample " + r);
        var m = c(t, "GEOASCIIPARAMS");
        var A;

        if (m) {
          var _e9 = m.split("|").filter(function (e) {
            return e.indexOf("ESRI PE String = ") > -1;
          })[0],
              _t5 = _e9 ? _e9.replace("ESRI PE String = ", "") : "";

          A = 0 === _t5.indexOf("PROJCS") || 0 === _t5.indexOf("GEOGCS") ? {
            wkid: null,
            wkt: _t5
          } : null;
        }

        var S = u(t, "GEOTIEPOINTS"),
            M = u(t, "GEOPIXELSCALE"),
            x = u(t, "GEOTRANSMATRIX"),
            b = t.has("GEOKEYDIRECTORY") ? t.get("GEOKEYDIRECTORY").data : null;
        var O,
            D,
            U = !1;

        if (b) {
          U = 2 === c(b, "GTRasterTypeGeoKey");

          var _e10 = c(b, "GTModelTypeGeoKey");

          if (2 === _e10) {
            var _e11 = c(b, "GeographicTypeGeoKey");

            _e11 >= 1024 && _e11 <= 32766 && (A = {
              wkid: _e11
            });
          } else if (1 === _e10) {
            var _e12 = c(b, "ProjectedCSTypeGeoKey");

            _e12 >= 1024 && _e12 <= 32766 && (A = {
              wkid: _e12
            });
          }
        }

        if (M && S && S.length >= 6 ? (O = [M[0], 0, S[3] - S[0] * M[0], 0, -Math.abs(M[1]), S[4] - S[1] * M[1]], U && (O[2] -= .5 * O[0] + .5 * O[1], O[5] -= .5 * O[3] + .5 * O[4])) : x && 16 === x.length && (O = [x[0], x[1], x[3], x[4], x[5], x[7]]), O) {
          var _e13 = [{
            x: 0,
            y: s
          }, {
            x: 0,
            y: 0
          }, {
            x: i,
            y: s
          }, {
            x: i,
            y: 0
          }];

          var _t6,
              _n6 = Number.POSITIVE_INFINITY,
              _a2 = Number.POSITIVE_INFINITY,
              _r8 = Number.NEGATIVE_INFINITY,
              _l = Number.NEGATIVE_INFINITY;

          for (var _i2 = 0; _i2 < _e13.length; _i2++) {
            _t6 = f(_e13[_i2], O), _n6 = _t6.x > _n6 ? _n6 : _t6.x, _r8 = _t6.x < _r8 ? _r8 : _t6.x, _a2 = _t6.y > _a2 ? _a2 : _t6.y, _l = _t6.y < _l ? _l : _t6.y;
          }

          D = {
            xmin: _n6,
            xmax: _r8,
            ymin: _a2,
            ymax: _l,
            spatialReference: A
          };
        }

        var N = e.filter(function (e) {
          return 1 === c(e, "NEWSUBFILETYPE");
        });
        var k, L, G, P, R;
        N.length > 0 && (k = Math.round(Math.log(i / c(N[0], "IMAGEWIDTH")) / Math.LN2), L = Math.round(Math.log(i / c(N[N.length - 1], "IMAGEWIDTH")) / Math.LN2), G = c(N[N.length - 1], "TILEWIDTH"), P = c(N[N.length - 1], "TILEHEIGHT")), G = L > 0 ? G || n : null, P = L > 0 ? P || a : null, n && (R = [{
          maxCol: Math.ceil(i / n) - 1,
          maxRow: Math.ceil(s / a) - 1,
          minRow: 0,
          minCol: 0
        }], N.forEach(function (e) {
          R.push({
            maxCol: Math.ceil(c(e, "IMAGEWIDTH") / c(e, "TILEWIDTH")) - 1,
            maxRow: Math.ceil(c(e, "IMAGELENGTH") / c(e, "TILELENGTH")) - 1,
            minRow: 0,
            minCol: 0
          });
        }));

        var F = function (e) {
          if (!e) return null;
          var t = e.match(/<Item(.*?)Item>/gi);
          if (!t || 0 === t.length) return null;
          var n = new Map();
          var a, i, s, r, l;

          for (var _e14 = 0; _e14 < t.length; _e14++) {
            a = t[_e14], i = a.slice("<Item ".length, a.indexOf(">")), r = a.indexOf("sample="), r > -1 && (l = a.slice(r + 'sample="'.length, a.indexOf('"', r + 'sample="'.length))), r = a.indexOf("name="), r > -1 && (i = a.slice(r + 'name="'.length, a.indexOf('"', r + 'name="'.length))), i && (s = a.slice(a.indexOf(">") + 1, a.indexOf("</Item>")).trim(), null != l ? n.has(i) ? n.get(i)[l] = s : n.set(i, [s]) : n.set(i, s)), l = null;
          }

          var o = n.get("STATISTICS_MINIMUM"),
              f = n.get("STATISTICS_MAXIMUM"),
              u = n.get("STATISTICS_MEAN"),
              c = n.get("STATISTICS_STDDEV");
          var h = null;

          if (o && f) {
            h = [];

            for (var _e15 = 0; _e15 < o.length; _e15++) {
              h.push({
                min: parseFloat(o[_e15]),
                max: parseFloat(f[_e15]),
                avg: u && parseFloat(u[_e15]),
                stddev: c && parseFloat(c[_e15])
              });
            }
          }

          var g = n.get("BandName"),
              w = n.get("WavelengthMin"),
              p = n.get("WavelengthMax");
          var I = null;

          if (g) {
            I = [];

            for (var _e16 = 0; _e16 < g.length; _e16++) {
              I.push({
                BandName: g[_e16],
                WavelengthMin: w && parseFloat(w[_e16]),
                WavelengthMax: p && parseFloat(p[_e16])
              });
            }
          }

          return {
            statistics: h,
            bandProperties: I,
            dataType: n.get("DataType"),
            rawMetadata: n
          };
        }(c(e[0], "GDAL_METADATA"));

        return {
          width: i,
          height: s,
          tileWidth: n,
          tileHeight: a,
          planes: o,
          isBSQ: w,
          pixelType: g,
          compression: d,
          noData: I,
          isSupported: E,
          message: y,
          extent: D,
          firstPyramidLevel: k,
          maximumPyramidLevel: L,
          pyramidBlockWidth: G,
          pyramidBlockHeight: P,
          tileBoundary: R,
          metadata: F
        };
      }

      function I(e) {
        var _y = y(e),
            t = _y.littleEndian,
            n = _y.isBigTiff,
            a = _y.firstIFD;

        var s = a;
        var r = [];

        do {
          var _a3 = m(e, t, s, 0, _TiffTags_js__WEBPACK_IMPORTED_MODULE_4__["default"].TIFF_TAGS, n ? 8 : 4);

          if (!_a3.success) break;
          r.push(_a3.ifd), s = _a3.nextIFD;
        } while (s > 0);

        return _objectSpread(_objectSpread({}, p(r)), {}, {
          littleEndian: t,
          isBigTiff: n,
          ifds: r
        });
      }

      function T(e, t, n) {
        var a = e.getUint32(t, n),
            i = e.getUint32(t + 4, n);
        return n ? 4294967296 * i + a : 4294967296 * a + i;
      }

      function d(e, t, n) {
        var a = n ? e.getInt32(t, n) : e.getUint32(t, n),
            i = n ? e.getUint32(t + 4, n) : e.getInt32(t + 4, n);
        var s = (n ? a : i) >= 0 ? 1 : -1;
        n ? a *= s : i *= s;
        return s * (n ? 4294967296 * i + a : 4294967296 * a + i);
      }

      function E(e, t, n, a) {
        return a ? T(e, t, n) : e.getUint32(t, n);
      }

      function y(e) {
        var t = new DataView(e, 0, 16),
            n = t.getUint16(0, !1);
        var a = null;
        if (18761 === n) a = !0;else {
          if (19789 !== n) throw "unexpected endianess byte";
          a = !1;
        }
        var i = t.getUint16(2, a);
        if (42 !== i && 43 !== i) throw "unexpected tiff identifier";
        var s = 4;
        var r = 43 === i;

        if (r) {
          var _e17 = t.getUint16(s, a);

          if (s += 2, 8 !== _e17) throw "unsupported bigtiff version";
          if (0 !== t.getUint16(s, a)) throw "unsupported bigtiff version";
          s += 2;
        }

        return {
          littleEndian: a,
          isBigTiff: r,
          firstIFD: E(t, s, a, r)
        };
      }

      function m(e, t, a) {
        var s = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : 0;
        var r = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : _TiffTags_js__WEBPACK_IMPORTED_MODULE_4__["default"].TIFF_TAGS;
        var l = arguments.length > 5 && arguments[5] !== undefined ? arguments[5] : 4;
        var o = h(e, t, a, s, r, l);
        var f;
        var u = o.ifd;

        if (u) {
          if (_TiffTags_js__WEBPACK_IMPORTED_MODULE_4__["default"].ifdTags.forEach(function (n, a) {
            u.has(a) && (f = u.get(a), f.data = h(e, t, f.valueOffset - s, s, n).ifd);
          }), u.has("GEOKEYDIRECTORY")) {
            f = u.get("GEOKEYDIRECTORY");
            var n = f.values;

            if (n && n.length > 4) {
              var _a4 = n[0] + "." + n[1] + "." + n[2];

              f.data = h(e, t, f.valueOffset + 6 - s, s, _TiffTags_js__WEBPACK_IMPORTED_MODULE_4__["default"].GEO_KEYS, 2).ifd, f.data && f.data.set("GEOTIFFVersion", {
                id: 0,
                type: 2,
                valueCount: 1,
                valueOffset: null,
                values: [_a4]
              });
            }
          }

          if (u.has("XMP")) {
            f = u.get("XMP");
            var _e18 = f.values;
            "number" == typeof _e18[0] && 7 === f.type && (f.values = [Object(_rasterDatasets_byteStreamUtils_js__WEBPACK_IMPORTED_MODULE_2__["bytesToUTF8"])(new Uint8Array(_e18))]);
          }
        }

        return o;
      }

      function A(e, t) {
        var n = t.headerInfo,
            a = t.ifd,
            i = g(e, n.littleEndian, a, t.offset || 0, t.size || e.byteLength),
            s = n.pixelType,
            r = n.isBSQ,
            l = n.planes,
            f = o(s),
            u = i.length / l;
        var h;
        var w = [];

        for (var _e19 = 0; _e19 < l; _e19++) {
          if (h = new f(u), r) h = i.slice(u * _e19, u * (_e19 + 1));else for (var _t7 = 0; _t7 < u; _t7++) {
            h[_t7] = i[_t7 * l + _e19];
          }
          w.push(h);
        }

        var p = c(a, "TILEWIDTH"),
            I = c(a, "TILELENGTH"),
            T = n.noData ? n.noData[0] : null,
            d = n.metadata ? n.metadata.statistics : null,
            E = d ? d.map(function (e) {
          return e.min;
        }) : null,
            y = d ? d.map(function (e) {
          return e.max;
        }) : null;
        var m, A;
        if (null != T) {
          if (m = new Uint8Array(u), Math.abs(T) > 1e24) for (A = 0; A < u; A++) {
            Math.abs((w[0][A] - T) / T) < 1e-6 ? m[A] = 0 : m[A] = 1;
          } else for (A = 0; A < u; A++) {
            w[0][A] === T ? m[A] = 0 : m[A] = 1;
          }
        } else E && y && t.applyMinMaxConstraint && (m = function (e, t, n) {
          if (!(e && e.length > 0 && t && n)) return null;
          var a, i, s;
          var r = e[0].length,
              l = e.length,
              o = new Uint8Array(r);

          for (var _f = 0; _f < l; _f++) {
            if (a = e[_f], i = t[_f], s = n[_f], 0 === _f) for (var _e20 = 0; _e20 < r; _e20++) {
              o[_e20] = a[_e20] < i || a[_e20] > s ? 0 : 1;
            } else for (var _e21 = 0; _e21 < r; _e21++) {
              o[_e21] && (o[_e21] = a[_e21] < i || a[_e21] > s ? 0 : 1);
            }
          }

          return o;
        }(w, E, y));
        return {
          pixelType: s,
          width: p,
          height: I,
          pixels: w,
          mask: m,
          noDataValue: T
        };
      }

      function S(n, a) {
        a = a || I(n);
        var _a5 = a,
            i = _a5.ifds,
            r = _a5.noData;
        if (0 === i.length) throw "no valid image file directory";
        var l, f;
        var c = i[0],
            h = r ? r[0] : null;

        if (f = a.tileWidth ? function (e, t, n) {
          var a = u(n, "TILEOFFSETS");
          if (void 0 === a) return null;
          var i = u(n, "TILEBYTECOUNTS"),
              s = t.tileWidth,
              r = t.tileHeight,
              l = t.width,
              f = t.height,
              c = t.pixelType,
              h = t.isBSQ,
              w = t.planes,
              p = l * f,
              I = u(n, "BITSPERSAMPLE")[0],
              T = o(c),
              d = [];

          for (var _e22 = 0; _e22 < w; _e22++) {
            d.push(new T(p));
          }

          var E, y, m, A, S, M, x, b, O, D, U, N, k;
          var L = Math.ceil(l / s);
          if (I % 8 == 0) for (E = 0; E < a.length; E++) {
            for (M = Math.floor(E / L) * r, x = E % L * s, b = M * l + x, m = g(e, t.littleEndian, n, a[E], i[E]), D = 0, O = b, N = Math.min(s, l - x), U = Math.min(r, f - M), y = 0; y < w; y++) {
              if (k = d[y], h) for (A = 0; A < U; A++) {
                for (O = b + A * l, D = s * r * y + A * s, S = 0; S < N; S++, O++, D++) {
                  k[O] = m[D];
                }
              } else for (A = 0; A < U; A++) {
                for (O = b + A * l, D = A * s * w + y, S = 0; S < N; S++, O++, D += w) {
                  k[O] = m[D];
                }
              }
            }
          }
          return {
            width: l,
            height: f,
            pixelType: c,
            pixels: d
          };
        }(n, a, c) : function (n, a, i) {
          var r = _utils_js__WEBPACK_IMPORTED_MODULE_5__["isPlatformLittleEndian"] === a.littleEndian,
              l = u(i, "STRIPOFFSETS");
          if (void 0 === l) return null;
          var f = a.width,
              c = a.height,
              h = a.pixelType,
              g = a.planes,
              w = f * c,
              p = u(i, "BITSPERSAMPLE")[0],
              I = o(h),
              T = new I(w * g),
              d = u(i, "STRIPBYTECOUNTS"),
              E = u(i, "ROWSPERSTRIP")[0],
              y = u(i, "COMPRESSION") ? u(i, "COMPRESSION")[0] : 1;
          var m,
              A,
              S,
              M,
              x,
              b,
              O,
              D,
              U,
              N,
              k,
              L = E;
          if (p % 8 == 0) for (m = 0; m < l.length; m++) {
            if (x = m * (E * f) * g, L = (m + 1) * E > c ? c - m * E : E, "u8" === h || "s8" === h || r) {
              if (8 === y || 32946 === y) O = new Uint8Array(n, l[m], d[m]), N = new _chunks_Zlib_js__WEBPACK_IMPORTED_MODULE_0__["Z"](O), k = N.getBytes(), b = new ArrayBuffer(k.length), O = new Uint8Array(b), O.set(k), O.length !== L * f * g * p / 8 && console.log("strip byte counts is different than expected");else if (6 === y) {
                O = new Uint8Array(n, l[m], d[m]);
                var e = new _chunks_Jpg_js__WEBPACK_IMPORTED_MODULE_1__["J"]();
                e.parse(O);

                var _a6 = e.getData(e.width, e.height, !0);

                b = new ArrayBuffer(_a6.length), O = new Uint8Array(b), O.set(_a6);
              } else 1 === y && (d[m] !== L * f * g * p / 8 && console.log("strip byte counts is different than expected"), b = n.slice(l[m], l[m] + d[m]));
              M = new I(b);
            } else {
              switch (6 === y || 8 === y || 32946 === y ? (O = new Uint8Array(n, l[m], d[m]), N = new _chunks_Zlib_js__WEBPACK_IMPORTED_MODULE_0__["Z"](O), O = N.getBytes(), b = new ArrayBuffer(O.length), D = new Uint8Array(b), O.length !== L * f * g * p / 8 && console.log("strip byte counts is different than expected")) : 1 === y && (d[m] !== L * f * g * p / 8 && console.log("strip byte counts is different than expected"), b = new ArrayBuffer(d[m]), O = new Uint8Array(n, l[m], d[m]), D = new Uint8Array(b)), h) {
                case "u16":
                case "s16":
                  for (S = 0; S < O.length; S += 2) {
                    D[S] = O[S + 1], D[S + 1] = O[S];
                  }

                  break;

                case "u32":
                case "s32":
                case "f32":
                  for (S = 0; S < O.length; S += 4) {
                    D[S] = O[S + 3], D[S + 1] = O[S + 2], D[S + 2] = O[S + 1], D[S + 3] = O[S];
                  }

              }

              M = new I(b);
            }

            T.set(M, x);
          }
          var G = [];
          if (1 === g) G.push(T);else for (m = 0; m < g; m++) {
            for (U = new I(w), A = 0; A < w; A++) {
              U[A] = T[A * g + m];
            }

            G.push(U);
          }
          return {
            width: f,
            height: c,
            pixelType: h,
            pixels: G
          };
        }(n, a, c), null !== h) {
          if (f.mask = new Uint8Array(f.width * f.height), Math.abs(h) > 1e24) for (l = 0; l < f.width * f.height; l++) {
            Math.abs((f.pixels[0][l] - h) / h) < 1e-6 ? f.mask[l] = 0 : f.mask[l] = 1;
          } else for (l = 0; l < f.width * f.height; l++) {
            f.pixels[0][l] === h ? f.mask[l] = 0 : f.mask[l] = 1;
          }
          f.noDataValue = h;
        }

        return f;
      }
      /***/

    },

    /***/
    "ciAr":
    /*!*************************************************************************!*\
      !*** ./node_modules/@arcgis/core/renderers/support/RasterSymbolizer.js ***!
      \*************************************************************************/

    /*! exports provided: default */

    /***/
    function ciAr(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony import */


      var _chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ../../chunks/tslib.es6.js */
      "pO5D");
      /* harmony import */


      var _core_has_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ../../core/has.js */
      "wSAH");
      /* harmony import */


      var _core_maybe_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ../../core/maybe.js */
      "srIe");
      /* harmony import */


      var _core_Logger_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ../../core/Logger.js */
      "6S2I");
      /* harmony import */


      var _core_accessorSupport_ensureType_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ../../core/accessorSupport/ensureType.js */
      "zqDF");
      /* harmony import */


      var _core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ../../core/accessorSupport/decorators/property.js */
      "WbKI");
      /* harmony import */


      var _core_accessorSupport_decorators_subclass_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ../../core/accessorSupport/decorators/subclass.js */
      "04ZG");
      /* harmony import */


      var _core_urlUtils_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! ../../core/urlUtils.js */
      "4EHJ");
      /* harmony import */


      var _core_uuid_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! ../../core/uuid.js */
      "ju1D");
      /* harmony import */


      var _portal_support_resourceExtension_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! ../../portal/support/resourceExtension.js */
      "9AIY");
      /* harmony import */


      var _core_JSONSupport_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
      /*! ../../core/JSONSupport.js */
      "ag7Y");
      /* harmony import */


      var _core_colorUtils_js__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
      /*! ../../core/colorUtils.js */
      "0ynT");
      /* harmony import */


      var _colorRampUtils_js__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
      /*! ./colorRampUtils.js */
      "fG4V");
      /* harmony import */


      var _layers_support_RasterInfo_js__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
      /*! ../../layers/support/RasterInfo.js */
      "pPNP");
      /* harmony import */


      var _layers_support_rasterFunctions_pixelUtils_js__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(
      /*! ../../layers/support/rasterFunctions/pixelUtils.js */
      "ne7T");
      /* harmony import */


      var _layers_support_rasterFunctions_surfaceUtils_js__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(
      /*! ../../layers/support/rasterFunctions/surfaceUtils.js */
      "maMH");
      /*
      All material copyright ESRI, All Rights Reserved, unless otherwise specified.
      See https://js.arcgis.com/4.18/esri/copyright.txt for details.
      */


      var k = _core_Logger_js__WEBPACK_IMPORTED_MODULE_3__["default"].getLogger("esri.renderers.support.RasterSymbolizer");

      var C = {
        u1: [0, 1],
        u2: [0, 3],
        u4: [0, 15],
        u8: [0, 255],
        s8: [-128, 127],
        u16: [0, 65535],
        s16: [-32768, 32767],
        u32: [0, 4294967295],
        s32: [-2147483648, 2147483647],
        f32: [-34e38, 34e38],
        f64: [-Number.MAX_VALUE, Number.MAX_VALUE]
      };

      var O = /*#__PURE__*/function (_core_JSONSupport_js_) {
        _inherits(O, _core_JSONSupport_js_);

        var _super = _createSuper(O);

        function O(e) {
          _classCallCheck(this, O);

          return _super.call(this, e);
        }

        _createClass(O, [{
          key: "bind",
          value: function bind() {
            var e = this.rendererJSON;
            if (!e) return !1;
            var t;

            switch (this.lookup = {
              rendererJSON: {}
            }, e.type) {
              case "uniqueValue":
                t = this._updateUVRenderer(e);
                break;

              case "rasterColormap":
                t = this._updateColormapRenderer(e);
                break;

              case "rasterStretch":
                t = this._updateStretchRenderer(e);
                break;

              case "classBreaks":
                t = this._updateClassBreaksRenderer(e);
                break;

              case "rasterShadedRelief":
                t = this._updateShadedReliefRenderer(e);
            }

            return t;
          }
        }, {
          key: "symbolize",
          value: function symbolize(e) {
            var t = e && e.pixelBlock;
            if (!this.isValidPixelBlock(t)) return t;
            if (e.simpleStretchParams && "rasterStretch" === this.rendererJSON.type) return this.simpleStretch(t, e.simpleStretchParams);

            try {
              var r;

              switch (t.pixels.length > 3 && (t = Object(_layers_support_rasterFunctions_pixelUtils_js__WEBPACK_IMPORTED_MODULE_14__["extractBands"])(t, [0, 1, 2])), this.rendererJSON.type) {
                case "uniqueValue":
                case "rasterColormap":
                  r = this._symbolize_colormap(t);
                  break;

                case "classBreaks":
                  r = this._symbolize_classBreaks(t);
                  break;

                case "rasterStretch":
                  r = this._symbolize_stretch(t, e.bandIds);
                  break;

                case "rasterShadedRelief":
                  {
                    var s = e.extent,
                        o = s.spatialReference.isGeographic,
                        a = {
                      x: (s.xmax - s.xmin) / t.width,
                      y: (s.ymax - s.ymin) / t.height
                    };
                    r = this._symbolize_shadedRelief(t, {
                      isGCS: o,
                      resolution: a
                    });
                    break;
                  }
              }

              return r;
            } catch (e) {
              return k.error("symbolize", e.message), t;
            }
          }
        }, {
          key: "simpleStretch",
          value: function simpleStretch(e, t) {
            if (!this.isValidPixelBlock(e)) return e;

            try {
              return e.pixels.length > 3 && (e = Object(_layers_support_rasterFunctions_pixelUtils_js__WEBPACK_IMPORTED_MODULE_14__["extractBands"])(e, [0, 1, 2])), Object(_layers_support_rasterFunctions_pixelUtils_js__WEBPACK_IMPORTED_MODULE_14__["stretch"])(e, t);
            } catch (t) {
              return k.error("symbolize", t.message), e;
            }
          }
        }, {
          key: "generateWebGLParameters",
          value: function generateWebGLParameters(e) {
            if (["uniqueValue", "rasterColormap", "classBreaks"].indexOf(this.rendererJSON.type) > -1) {
              var _this$lookup$colormap = this.lookup.colormapLut,
                  _e23 = _this$lookup$colormap.indexedColormap,
                  _t8 = _this$lookup$colormap.offset;
              return {
                colormap: _e23,
                colormapOffset: _t8,
                type: "lut"
              };
            }

            var t = e.pixelBlock,
                r = e.isGCS,
                s = e.resolution,
                o = e.bandIds,
                a = this.rendererJSON;
            return "rasterStretch" === a.type ? this.generateStretchWebGLParams(t, a, o) : "rasterShadedRelief" === a.type ? this.generateShadedReliefWebGLParams(a, r, s) : null;
          }
        }, {
          key: "_isLUTChanged",
          value: function _isLUTChanged(e) {
            if (!this.lookup || !this.lookup.rendererJSON) return !0;

            if ("colorRamp" in this.rendererJSON) {
              var t = this.rendererJSON.colorRamp;
              if (e) return JSON.stringify(t) !== JSON.stringify(this.lookup.rendererJSON.colorRamp);

              var r = _objectSpread({}, this.rendererJSON),
                  s = _objectSpread({}, this.lookup.rendererJSON);

              return r.colorRamp = null, s.colorRamp = null, JSON.stringify(this.rendererJSON) !== JSON.stringify(this.lookup.rendererJSON);
            }

            return JSON.stringify(this.rendererJSON) !== JSON.stringify(this.lookup.rendererJSON);
          }
        }, {
          key: "_symbolize_colormap",
          value: function _symbolize_colormap(e) {
            if (this._isLUTChanged()) {
              if (!this.bind()) return e;
            }

            return Object(_layers_support_rasterFunctions_pixelUtils_js__WEBPACK_IMPORTED_MODULE_14__["colorize"])(e, this.lookup.colormapLut);
          }
        }, {
          key: "_symbolize_classBreaks",
          value: function _symbolize_classBreaks(e) {
            var t = this.rasterInfo.pixelType,
                r = ["u8", "u16", "s8", "s16"].indexOf(t) > -1;
            var s;

            if (this._isLUTChanged()) {
              if (!this.bind()) return e;
            }

            return s = r ? Object(_layers_support_rasterFunctions_pixelUtils_js__WEBPACK_IMPORTED_MODULE_14__["colorize"])(e, this.lookup.colormapLut) : Object(_layers_support_rasterFunctions_pixelUtils_js__WEBPACK_IMPORTED_MODULE_14__["remapColor"])(e, this.lookup.remapLut), s;
          }
        }, {
          key: "_symbolize_stretch",
          value: function _symbolize_stretch(e, t) {
            var _this$rasterInfo = this.rasterInfo,
                r = _this$rasterInfo.pixelType,
                s = _this$rasterInfo.bandCount,
                o = this.rendererJSON,
                a = ["u8", "u16", "s8", "s16"].indexOf(r) > -1;
            var i, n;
            var l = o.gamma,
                u = o.useGamma;

            if (a) {
              var c;

              if (o.dra) {
                var _s2 = this.getStretchCutoff(o, e, t);

                i = Object(_layers_support_rasterFunctions_pixelUtils_js__WEBPACK_IMPORTED_MODULE_14__["createStretchLUT"])(_objectSpread(_objectSpread({
                  pixelType: r
                }, _s2), {}, {
                  gamma: u ? l : null
                }));
              } else if (this._isLUTChanged()) {
                if (!this.bind()) return e;
                i = this.lookup ? this.lookup.stretchLut : null;
              } else i = this.lookup ? this.lookup.stretchLut : null;

              if (!i) return e;
              s > 1 && (null == t ? void 0 : t.length) === e.pixels.length && (null == (c = i) ? void 0 : c.lut.length) === s && (i = {
                lut: t.map(function (e) {
                  return i.lut[e];
                }),
                offset: i.offset
              }), n = Object(_layers_support_rasterFunctions_pixelUtils_js__WEBPACK_IMPORTED_MODULE_14__["lookupPixels"])(e, i);
            } else {
              var _r9 = this.getStretchCutoff(o, e, t);

              n = Object(_layers_support_rasterFunctions_pixelUtils_js__WEBPACK_IMPORTED_MODULE_14__["stretch"])(e, _objectSpread(_objectSpread({}, _r9), {}, {
                gamma: u ? l : null
              }));
            }

            if (o.colorRamp) {
              if (this._isLUTChanged(!0)) {
                if (!this.bind()) return e;
              }

              n = Object(_layers_support_rasterFunctions_pixelUtils_js__WEBPACK_IMPORTED_MODULE_14__["colorize"])(n, this.lookup.colormapLut);
            }

            return n;
          }
        }, {
          key: "_symbolize_shadedRelief",
          value: function _symbolize_shadedRelief(e, r) {
            var s, o;

            var a = this.rendererJSON,
                i = _objectSpread(_objectSpread({}, a), r),
                n = Object(_layers_support_rasterFunctions_surfaceUtils_js__WEBPACK_IMPORTED_MODULE_15__["hillshade"])(e, i);

            if (!a.colorRamp) return n;
            var l;

            if (this._isLUTChanged(!0)) {
              if (!this.bind()) return n;
              l = this.lookup ? this.lookup.hsvMap : null;
            } else l = this.lookup ? this.lookup.hsvMap : null;

            if (!l) return n;
            var u = null != (s = null == (o = Object(_core_maybe_js__WEBPACK_IMPORTED_MODULE_2__["unwrap"])(this.rasterInfo.statistics)) ? void 0 : o[0]) ? s : {
              min: 0,
              max: 8e3
            };
            return Object(_layers_support_rasterFunctions_surfaceUtils_js__WEBPACK_IMPORTED_MODULE_15__["tintHillshade"])(n, e, l, u), n;
          }
        }, {
          key: "_updateUVRenderer",
          value: function _updateUVRenderer(e) {
            var _this$rasterInfo2 = this.rasterInfo,
                t = _this$rasterInfo2.bandCount,
                s = _this$rasterInfo2.attributeTable,
                o = _this$rasterInfo2.statistics,
                a = _this$rasterInfo2.pixelType,
                i = e.field1;
            if (!i) return !1;
            var n = ["u8", "s8"].indexOf(a) > -1 && o && null != o[0].min && null != o[0].max;
            if (!(function (e, t) {
              var s = e.attributeTable,
                  o = e.bandCount;
              if (!Object(_core_maybe_js__WEBPACK_IMPORTED_MODULE_2__["isSome"])(s) || o > 1) return !1;
              if (t && null == s.fields.find(function (e) {
                return e.name.toLowerCase() === t.toLowerCase();
              })) return !1;
              return !0;
            }(this.rasterInfo, i) || 1 === t && n)) return !1;
            var l = [];

            if (s) {
              var _t9 = s.fields.filter(function (e) {
                return "value" === e.name.toLowerCase();
              })[0];
              if (!_t9) return !1;
              s.features.forEach(function (r) {
                var s;
                var o = e.uniqueValueInfos.filter(function (e) {
                  return String(e.value) === String(r.attributes[i]);
                })[0],
                    a = null == o || null == (s = o.symbol) ? void 0 : s.color;
                a && l.push([r.attributes[_t9.name]].concat(a));
              });
            } else {
              if ("value" !== i.toLowerCase()) return !1;
              e.uniqueValueInfos.forEach(function (e) {
                var t;
                var r = null == e || null == (t = e.symbol) ? void 0 : t.color;
                r && l.push([parseInt("" + e.value, 10)].concat(r));
              });
            }

            if (0 === l.length) return !1;
            var u = Object(_layers_support_rasterFunctions_pixelUtils_js__WEBPACK_IMPORTED_MODULE_14__["createColormapLUT"])({
              colormap: l
            });
            return this.lookup = {
              rendererJSON: e,
              colormapLut: u
            }, this.canRenderInWebGL = !0, !0;
          }
        }, {
          key: "_updateColormapRenderer",
          value: function _updateColormapRenderer(e) {
            if (!function (e) {
              var t = e.bandCount,
                  s = e.colormap;
              return Object(_core_maybe_js__WEBPACK_IMPORTED_MODULE_2__["isSome"])(s) && s.length && 1 === t;
            }(this.rasterInfo)) return !1;
            var t = e.colormapInfos.map(function (e) {
              return [e.value].concat(e.color);
            }).sort(function (e, t) {
              return e[0] - t[0];
            });
            if (!t || 0 === t.length) return !1;
            var s = Object(_layers_support_rasterFunctions_pixelUtils_js__WEBPACK_IMPORTED_MODULE_14__["createColormapLUT"])({
              colormap: t
            });
            return this.lookup = {
              rendererJSON: e,
              colormapLut: s
            }, this.canRenderInWebGL = !0, !0;
          }
        }, {
          key: "_updateShadedReliefRenderer",
          value: function _updateShadedReliefRenderer(e) {
            if ("elevation" !== this.rasterInfo.dataType) return !1;

            if (e.colorRamp) {
              var t = Object(_colorRampUtils_js__WEBPACK_IMPORTED_MODULE_12__["convertColorRampToColormap"])(e.colorRamp, 256, !0),
                  r = Object(_layers_support_rasterFunctions_pixelUtils_js__WEBPACK_IMPORTED_MODULE_14__["createColormapLUT"])({
                colormap: t
              }),
                  s = [],
                  o = r.indexedColormap;

              for (var _e24 = 0; _e24 < o.length; _e24 += 4) {
                var _t10 = Object(_core_colorUtils_js__WEBPACK_IMPORTED_MODULE_11__["toHSV"])({
                  r: o[_e24],
                  g: o[_e24 + 1],
                  b: o[_e24 + 2]
                });

                s.push([_t10.h / 60, _t10.s / 100, 255 * _t10.v / 100]);
              }

              this.lookup = {
                rendererJSON: e,
                colormapLut: r,
                hsvMap: s
              };
            } else this.lookup = null;

            return this.canRenderInWebGL = !0, !0;
          }
        }, {
          key: "_updateClassBreaksRenderer",
          value: function _updateClassBreaksRenderer(e) {
            var t = this.rasterInfo.pixelType,
                r = ["u8", "u16", "s8", "s16"].indexOf(t) > -1,
                s = e.classBreakInfos;
            if (null == s || !s.length) return !1;
            var o = s.sort(function (e, t) {
              return e.classMaxValue - t.classMaxValue;
            }),
                a = o[o.length - 1];
            var i = e.minValue;

            if (!r) {
              var _t11 = [];

              for (var _e25 = 0; _e25 < o.length; _e25++) {
                var n;
                _t11.push({
                  value: null != (n = o[_e25].classMinValue) ? n : i,
                  mappedColor: o[_e25].symbol.color
                }), i = o[_e25].classMaxValue;
              }

              return _t11.push({
                value: a.classMaxValue,
                mappedColor: a.symbol.color
              }), this.lookup = {
                rendererJSON: e,
                remapLut: _t11
              }, this.canRenderInWebGL = !1, !0;
            }

            var l = [];
            i = e.minValue;

            for (var _e26 = 0; _e26 < o.length; _e26++) {
              var _t12 = o[_e26];

              for (var _e27 = i; _e27 < _t12.classMaxValue; _e27++) {
                l.push([_e27].concat(_t12.symbol.color));
              }

              i = _t12.classMaxValue;
            }

            l.push([a.classMaxValue].concat(a.symbol.color));
            var u = Object(_layers_support_rasterFunctions_pixelUtils_js__WEBPACK_IMPORTED_MODULE_14__["createColormapLUT"])({
              colormap: l,
              fillUnspecified: !1
            });
            return this.lookup = {
              rendererJSON: e,
              colormapLut: u
            }, this.canRenderInWebGL = !0, !0;
          }
        }, {
          key: "_updateStretchRenderer",
          value: function _updateStretchRenderer(e) {
            if (!("none" === e.stretchType || e.statistics || this.rasterInfo.statistics || e.dra)) return !1;
            var t = e.histograms || this.rasterInfo.histograms;
            if (!e.dra && "percentClip" === e.stretchType && !t) return !1;
            var r = e.gamma,
                s = e.useGamma,
                o = e.colorRamp,
                a = this.rasterInfo.pixelType;

            if (!e.dra && ["u8", "u16", "s8", "s16"].indexOf(a) > -1) {
              var _t13 = this.getStretchCutoff(e),
                  _o = Object(_layers_support_rasterFunctions_pixelUtils_js__WEBPACK_IMPORTED_MODULE_14__["createStretchLUT"])(_objectSpread(_objectSpread({
                pixelType: a
              }, _t13), {}, {
                gamma: s ? r : null
              }));

              this.lookup = {
                rendererJSON: e,
                stretchLut: _o
              };
            }

            if (o) {
              var _t14 = Object(_colorRampUtils_js__WEBPACK_IMPORTED_MODULE_12__["convertColorRampToColormap"])(o, 256, !0);

              this.lookup || (this.lookup = {
                rendererJSON: e
              }), this.lookup.colormapLut = Object(_layers_support_rasterFunctions_pixelUtils_js__WEBPACK_IMPORTED_MODULE_14__["createColormapLUT"])({
                colormap: _t14
              }), this.lookup.rendererJSON = e;
            }

            return this.canRenderInWebGL = !0, !0;
          }
        }, {
          key: "getStretchCutoff",
          value: function getStretchCutoff(e, r, s) {
            var o, a;
            var i = e.stretchType;
            var n;
            if (e.dra) {
              if ("minMax" === i && r.statistics) o = r.statistics.map(function (e) {
                return [e.minValue, e.maxValue, 0, 0];
              });else {
                var _e28 = Object(_layers_support_rasterFunctions_pixelUtils_js__WEBPACK_IMPORTED_MODULE_14__["estimateStatisticsHistograms"])(r);

                o = _e28.statistics, a = _e28.histograms;
              }
            } else o = (null == (n = e.statistics) ? void 0 : n.length) > 0 ? e.statistics : Object(_core_maybe_js__WEBPACK_IMPORTED_MODULE_2__["unwrap"])(this.rasterInfo.statistics), a = e.histograms || Object(_core_maybe_js__WEBPACK_IMPORTED_MODULE_2__["unwrap"])(this.rasterInfo.histograms);
            var l = o || a ? (o || a).length : this.rasterInfo.bandCount,
                u = [],
                c = [];
            var p, h, m, f, d, b, S, x, y;

            switch (o && !Array.isArray(o[0]) && (o = o.map(function (e) {
              return [e.min, e.max, e.avg, e.stddev];
            })), i) {
              case "none":
                {
                  var _e29 = C[this.rasterInfo.pixelType] || C.f32;

                  for (x = 0; x < l; x++) {
                    u[x] = _e29[0], c[x] = _e29[1];
                  }
                }
                break;

              case "minMax":
                for (x = 0; x < l; x++) {
                  u[x] = o[x][0], c[x] = o[x][1];
                }

                break;

              case "standardDeviation":
                for (x = 0; x < l; x++) {
                  u[x] = o[x][2] - e.numberOfStandardDeviations * o[x][3], c[x] = o[x][2] + e.numberOfStandardDeviations * o[x][3], u[x] < o[x][0] && (u[x] = o[x][0]), c[x] > o[x][1] && (c[x] = o[x][1]);
                }

                break;

              case "percentClip":
                for (x = 0; x < a.length; x++) {
                  for (p = a[x], d = new Uint32Array(p.size), f = p.counts, m = 0, h = (p.max - p.min) / p.size, S = -.5 === p.min && 1 === h ? .5 : 0, y = 0; y < p.size; y++) {
                    m += f[y], d[y] = m;
                  }

                  for (b = e.minPercent * m / 100, y = 0; y < p.size; y++) {
                    if (d[y] > b) {
                      u[x] = p.min + h * (y + S);
                      break;
                    }
                  }

                  for (b = (1 - e.maxPercent / 100) * m, y = p.size - 2; y >= 0; y--) {
                    if (d[y] < b) {
                      c[x] = p.min + h * (y + 2 - S);
                      break;
                    }
                  }
                }

                break;

              default:
                for (x = 0; x < l; x++) {
                  u[x] = o[x][0], c[x] = o[x][1];
                }

            }

            var k = {
              minCutOff: u,
              maxCutOff: c,
              outMax: e.max || 255,
              outMin: e.min || 0
            };
            return this.getSelectedBandCutoffs(k, s);
          }
        }, {
          key: "getSelectedBandCutoffs",
          value: function getSelectedBandCutoffs(e, t) {
            if (null == t || 0 === t.length) return e;
            var r = Math.max.apply(null, t),
                s = e.minCutOff,
                o = e.maxCutOff,
                a = e.outMin,
                i = e.outMax;
            return s.length === t.length || s.length <= r ? e : {
              minCutOff: t.map(function (e) {
                return s[e];
              }),
              maxCutOff: t.map(function (e) {
                return o[e];
              }),
              outMin: a,
              outMax: i
            };
          }
        }, {
          key: "generateStretchWebGLParams",
          value: function generateStretchWebGLParams(e, t, r) {
            var s = null,
                o = null;
            var a = this.lookup && this.lookup.colormapLut;
            t.colorRamp && a && (s = a.indexedColormap, o = a.offset);

            var i = t.gamma,
                n = !!(t.useGamma && i && i.some(function (e) {
              return 1 !== e;
            })),
                _this$getStretchCutof = this.getStretchCutoff(t, e, r),
                l = _this$getStretchCutof.minCutOff,
                u = _this$getStretchCutof.maxCutOff,
                c = _this$getStretchCutof.outMin,
                p = _this$getStretchCutof.outMax;

            e && e.pixels && 2 === e.pixels.length && ((e = e.clone()).statistics = [e.statistics[0]], e.pixels = [e.pixels[0]]);
            var h = Math.min(3, r && r.length || e && e.getPlaneCount() || this.rasterInfo.bandCount),
                m = new Float32Array(h),
                f = s || n ? 1 : 255;
            var d;

            for (d = 0; d < h; d++) {
              m[d] = (p - c) / (u[d] - l[d]) / f;
            }

            var b = new Float32Array(h);
            if (n) for (d = 0; d < h; d++) {
              i[d] > 1 ? i[d] > 2 ? b[d] = 6.5 + Math.pow(i[d] - 2, 2.5) : b[d] = 6.5 + 100 * Math.pow(2 - i[d], 4) : b[d] = 1;
            }
            return {
              bandCount: h,
              outMin: c / f,
              outMax: p / f,
              minCutOff: l,
              maxCutOff: u,
              factor: m,
              useGamma: n,
              gamma: n ? i : [1, 1, 1],
              gammaCorrection: n ? b : [1, 1, 1],
              colormap: s,
              colormapOffset: o,
              type: "stretch"
            };
          }
        }, {
          key: "generateShadedReliefWebGLParams",
          value: function generateShadedReliefWebGLParams(e, r, s) {
            var o, a, i;
            var n = null,
                l = null;
            var u = this.lookup && this.lookup.colormapLut;
            e.colorRamp && u && (n = u.indexedColormap, l = u.offset);

            var c = _objectSpread(_objectSpread({}, e), {}, {
              isGCS: r,
              resolution: s
            }),
                p = Object(_layers_support_rasterFunctions_surfaceUtils_js__WEBPACK_IMPORTED_MODULE_15__["calculateHillshadeParams"])(c),
                h = null == (o = Object(_core_maybe_js__WEBPACK_IMPORTED_MODULE_2__["unwrap"])(this.rasterInfo.statistics)) ? void 0 : o[0];

            return _objectSpread(_objectSpread({}, p), {}, {
              minValue: null != (a = h.min) ? a : 0,
              maxValue: null != (i = h.max) ? i : 8e3,
              hillshadeType: "traditional" === e.hillshadeType ? 0 : 1,
              type: "hillshade",
              colormap: n,
              colormapOffset: l
            });
          }
        }, {
          key: "isValidPixelBlock",
          value: function isValidPixelBlock(e) {
            return !!(e && e.pixels && e.pixels.length > 0 && 0 !== e.validPixelCount);
          }
        }]);

        return O;
      }(_core_JSONSupport_js__WEBPACK_IMPORTED_MODULE_10__["JSONSupport"]);

      Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_5__["property"])({
        json: {
          write: !0
        }
      })], O.prototype, "rendererJSON", void 0), Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_5__["property"])({
        type: _layers_support_RasterInfo_js__WEBPACK_IMPORTED_MODULE_13__["default"],
        json: {
          write: !0
        }
      })], O.prototype, "rasterInfo", void 0), Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_5__["property"])({
        json: {
          write: !0
        }
      })], O.prototype, "lookup", void 0), Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_5__["property"])({})], O.prototype, "canRenderInWebGL", void 0), O = Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_subclass_js__WEBPACK_IMPORTED_MODULE_6__["subclass"])("esri.renderers.support.RasterSymbolizer")], O);
      var R = O;
      /* harmony default export */

      __webpack_exports__["default"] = R;
      /***/
    },

    /***/
    "dCrW":
    /*!************************************************************************************!*\
      !*** ./node_modules/@arcgis/core/layers/support/rasterDatasets/byteStreamUtils.js ***!
      \************************************************************************************/

    /*! exports provided: bytesToUTF8 */

    /***/
    function dCrW(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "bytesToUTF8", function () {
        return r;
      });
      /*
      All material copyright ESRI, All Rights Reserved, unless otherwise specified.
      See https://js.arcgis.com/4.18/esri/copyright.txt for details.
      */


      function r(r, t) {
        var n = 0,
            o = "",
            e = 0,
            f = 0;
        var c = r.length;

        for (; n < c;) {
          f = r[n++], e = f >> 4, e < 8 ? e = 1 : 15 === e ? (e = 4, f = (7 & f) << 18 | (63 & r[n++]) << 12 | (63 & r[n++]) << 6 | 63 & r[n++]) : 14 === e ? (e = 3, f = (15 & f) << 12 | (63 & r[n++]) << 6 | 63 & r[n++]) : (e = 2, f = (31 & f) << 6 | 63 & r[n++]), (0 !== f || t) && (o += String.fromCharCode(f));
        }

        return o;
      }
      /***/

    },

    /***/
    "fG4V":
    /*!***********************************************************************!*\
      !*** ./node_modules/@arcgis/core/renderers/support/colorRampUtils.js ***!
      \***********************************************************************/

    /*! exports provided: PREDEFINED_COLOR_RAMP_NAME_MAP, PREDEFINED_JSON_COLOR_RAMPS, convertColorRampToColormap, getColorRampId, getColorRampName */

    /***/
    function fG4V(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "PREDEFINED_COLOR_RAMP_NAME_MAP", function () {
        return t;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "PREDEFINED_JSON_COLOR_RAMPS", function () {
        return l;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "convertColorRampToColormap", function () {
        return f;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "getColorRampId", function () {
        return p;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "getColorRampName", function () {
        return n;
      });
      /* harmony import */


      var _Color_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ../../Color.js */
      "nvBr");
      /* harmony import */


      var _core_colorUtils_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ../../core/colorUtils.js */
      "0ynT");
      /*
      All material copyright ESRI, All Rights Reserved, unless otherwise specified.
      See https://js.arcgis.com/4.18/esri/copyright.txt for details.
      */


      var l = [{
        id: "aspect_predefined",
        type: "multipart",
        colorRamps: [{
          fromColor: [190, 190, 190],
          toColor: [255, 45, 8]
        }, {
          fromColor: [255, 45, 8],
          toColor: [255, 181, 61]
        }, {
          fromColor: [255, 181, 61],
          toColor: [255, 254, 52]
        }, {
          fromColor: [255, 254, 52],
          toColor: [0, 251, 50]
        }, {
          fromColor: [0, 251, 50],
          toColor: [255, 254, 52]
        }, {
          fromColor: [0, 253, 255],
          toColor: [0, 181, 255]
        }, {
          fromColor: [0, 181, 255],
          toColor: [26, 35, 253]
        }, {
          fromColor: [26, 35, 253],
          toColor: [255, 57, 251]
        }, {
          fromColor: [255, 57, 251],
          toColor: [255, 45, 8]
        }]
      }, {
        id: "blackToWhite_predefined",
        fromColor: [0, 0, 0],
        toColor: [255, 255, 255]
      }, {
        id: "blueBright_predefined",
        fromColor: [204, 204, 255],
        toColor: [0, 0, 224]
      }, {
        id: "blueLightToDark_predefined",
        fromColor: [211, 229, 232],
        toColor: [46, 100, 140]
      }, {
        id: "blueGreenBright_predefined",
        fromColor: [203, 245, 234],
        toColor: [48, 207, 146]
      }, {
        id: "blueGreenLightToDark_predefined",
        fromColor: [216, 242, 237],
        toColor: [21, 79, 74]
      }, {
        id: "brownLightToDark_predefined",
        fromColor: [240, 236, 170],
        toColor: [102, 72, 48]
      }, {
        id: "brownToBlueGreenDivergingBright_predefined",
        type: "multipart",
        colorRamps: [{
          fromColor: [156, 85, 31],
          toColor: [255, 255, 191]
        }, {
          fromColor: [255, 255, 191],
          toColor: [33, 130, 145]
        }]
      }, {
        id: "brownToBlueGreenDivergingDark_predefined",
        type: "multipart",
        colorRamps: [{
          fromColor: [110, 70, 45],
          toColor: [204, 204, 102]
        }, {
          fromColor: [204, 204, 102],
          toColor: [48, 100, 102]
        }]
      }, {
        id: "coefficientBias_predefined",
        fromColor: [214, 214, 255],
        toColor: [0, 57, 148]
      }, {
        id: "coldToHotDiverging_predefined",
        type: "multipart",
        colorRamps: [{
          fromColor: [69, 117, 181],
          toColor: [255, 255, 191]
        }, {
          fromColor: [255, 255, 191],
          toColor: [214, 47, 39]
        }]
      }, {
        id: "conditionNumber_predefined",
        type: "multipart",
        colorRamps: [{
          fromColor: [0, 97, 0],
          toColor: [255, 255, 0]
        }, {
          fromColor: [255, 255, 0],
          toColor: [255, 34, 0]
        }]
      }, {
        id: "cyanToPurple_predefined",
        type: "multipart",
        colorRamps: [{
          fromColor: [0, 245, 245],
          toColor: [0, 0, 245]
        }, {
          fromColor: [0, 0, 245],
          toColor: [245, 0, 245]
        }]
      }, {
        id: "cyanLightToBlueDark_predefined",
        type: "multipart",
        colorRamps: [{
          fromColor: [182, 237, 240],
          toColor: [31, 131, 224]
        }, {
          fromColor: [31, 131, 224],
          toColor: [9, 9, 145]
        }]
      }, {
        id: "distance_predefined",
        fromColor: [255, 200, 0],
        toColor: [0, 0, 255]
      }, {
        id: "elevation1_predefined",
        type: "multipart",
        colorRamps: [{
          fromColor: [175, 240, 233],
          toColor: [255, 255, 179]
        }, {
          fromColor: [255, 255, 179],
          toColor: [0, 128, 64]
        }, {
          fromColor: [0, 128, 64],
          toColor: [252, 186, 3]
        }, {
          fromColor: [252, 186, 3],
          toColor: [128, 0, 0]
        }, {
          fromColor: [120, 0, 0],
          toColor: [105, 48, 13]
        }, {
          fromColor: [105, 48, 13],
          toColor: [171, 171, 171]
        }, {
          fromColor: [171, 171, 171],
          toColor: [255, 252, 255]
        }]
      }, {
        id: "elevation2_predefined",
        type: "multipart",
        colorRamps: [{
          fromColor: [118, 219, 211],
          toColor: [255, 255, 199]
        }, {
          fromColor: [255, 255, 199],
          toColor: [255, 255, 128]
        }, {
          fromColor: [255, 255, 128],
          toColor: [217, 194, 121]
        }, {
          fromColor: [217, 194, 121],
          toColor: [135, 96, 38]
        }, {
          fromColor: [135, 96, 38],
          toColor: [150, 150, 181]
        }, {
          fromColor: [150, 150, 181],
          toColor: [181, 150, 181]
        }, {
          fromColor: [181, 150, 181],
          toColor: [255, 252, 255]
        }]
      }, {
        id: "errors_predefined",
        fromColor: [255, 235, 214],
        toColor: [196, 10, 10]
      }, {
        id: "grayLightToDark_predefined",
        fromColor: [219, 219, 219],
        toColor: [69, 69, 69]
      }, {
        id: "greenBright_predefined",
        fromColor: [204, 255, 204],
        toColor: [14, 204, 14]
      }, {
        id: "greenLightToDark_predefined",
        fromColor: [220, 245, 233],
        toColor: [34, 102, 51]
      }, {
        id: "greenToBlue_predefined",
        type: "multipart",
        colorRamps: [{
          fromColor: [32, 204, 16],
          toColor: [0, 242, 242]
        }, {
          fromColor: [0, 242, 242],
          toColor: [2, 33, 227]
        }]
      }, {
        id: "orangeBright_predefined",
        fromColor: [255, 235, 204],
        toColor: [240, 118, 5]
      }, {
        id: "orangeLightToDark_predefined",
        fromColor: [250, 233, 212],
        toColor: [171, 65, 36]
      }, {
        id: "partialSpectrum_predefined",
        type: "multipart",
        colorRamps: [{
          fromColor: [242, 241, 162],
          toColor: [255, 255, 0]
        }, {
          fromColor: [255, 255, 0],
          toColor: [255, 0, 0]
        }, {
          fromColor: [252, 3, 69],
          toColor: [176, 7, 237]
        }, {
          fromColor: [176, 7, 237],
          toColor: [2, 29, 173]
        }]
      }, {
        id: "partialSpectrum1Diverging_predefined",
        type: "multipart",
        colorRamps: [{
          fromColor: [135, 38, 38],
          toColor: [240, 149, 12]
        }, {
          fromColor: [240, 149, 12],
          toColor: [255, 255, 191]
        }, {
          fromColor: [255, 255, 191],
          toColor: [74, 80, 181]
        }, {
          fromColor: [74, 80, 181],
          toColor: [39, 32, 122]
        }]
      }, {
        id: "partialSpectrum2Diverging_predefined",
        type: "multipart",
        colorRamps: [{
          fromColor: [115, 77, 42],
          toColor: [201, 137, 52]
        }, {
          fromColor: [201, 137, 52],
          toColor: [255, 255, 191]
        }, {
          fromColor: [255, 255, 191],
          toColor: [91, 63, 176]
        }, {
          fromColor: [91, 63, 176],
          toColor: [81, 13, 97]
        }]
      }, {
        id: "pinkToYellowGreenDivergingBright_predefined",
        type: "multipart",
        colorRamps: [{
          fromColor: [158, 30, 113],
          toColor: [255, 255, 191]
        }, {
          fromColor: [255, 255, 191],
          toColor: [99, 110, 45]
        }]
      }, {
        id: "pinkToYellowGreenDivergingDark_predefined",
        type: "multipart",
        colorRamps: [{
          fromColor: [97, 47, 73],
          toColor: [204, 204, 102]
        }, {
          fromColor: [204, 204, 102],
          toColor: [22, 59, 15]
        }]
      }, {
        id: "precipitation_predefined",
        type: "multipart",
        colorRamps: [{
          fromColor: [194, 82, 60],
          toColor: [237, 161, 19]
        }, {
          fromColor: [237, 161, 19],
          toColor: [255, 255, 0]
        }, {
          fromColor: [255, 255, 0],
          toColor: [0, 219, 0]
        }, {
          fromColor: [0, 219, 0],
          toColor: [32, 153, 143]
        }, {
          fromColor: [32, 153, 143],
          toColor: [11, 44, 122]
        }]
      }, {
        id: "prediction_predefined",
        type: "multipart",
        colorRamps: [{
          fromColor: [40, 146, 199],
          toColor: [250, 250, 100]
        }, {
          fromColor: [250, 250, 100],
          toColor: [232, 16, 20]
        }]
      }, {
        id: "purpleBright_predefined",
        fromColor: [255, 204, 255],
        toColor: [199, 0, 199]
      }, {
        id: "purpleToGreenDivergingBright_predefined",
        type: "multipart",
        colorRamps: [{
          fromColor: [77, 32, 150],
          toColor: [255, 255, 191]
        }, {
          fromColor: [255, 255, 191],
          toColor: [20, 122, 11]
        }]
      }, {
        id: "purpleToGreenDivergingDark_predefined",
        type: "multipart",
        colorRamps: [{
          fromColor: [67, 14, 89],
          toColor: [204, 204, 102]
        }, {
          fromColor: [204, 204, 102],
          toColor: [24, 79, 15]
        }]
      }, {
        id: "purpleBlueBright_predefined",
        fromColor: [223, 184, 230],
        toColor: [112, 12, 242]
      }, {
        id: "purpleBlueLightToDark_predefined",
        fromColor: [229, 213, 242],
        toColor: [93, 44, 112]
      }, {
        id: "purpleRedBright_predefined",
        fromColor: [255, 204, 225],
        toColor: [199, 0, 99]
      }, {
        id: "purpleRedLightToDark_predefined",
        fromColor: [250, 215, 246],
        toColor: [143, 17, 57]
      }, {
        id: "redBright_predefined",
        fromColor: [255, 204, 204],
        toColor: [219, 0, 0]
      }, {
        id: "redLightToDark_predefined",
        fromColor: [255, 224, 224],
        toColor: [143, 10, 10]
      }, {
        id: "redToBlueDivergingBright_predefined",
        type: "multipart",
        colorRamps: [{
          fromColor: [196, 69, 57],
          toColor: [255, 255, 191]
        }, {
          fromColor: [255, 255, 191],
          toColor: [48, 95, 207]
        }]
      }, {
        id: "redToBlueDivergingDark_predefined",
        type: "multipart",
        colorRamps: [{
          fromColor: [107, 13, 13],
          toColor: [204, 204, 102]
        }, {
          fromColor: [204, 204, 102],
          toColor: [13, 53, 97]
        }]
      }, {
        id: "redToGreen_predefined",
        type: "multipart",
        colorRamps: [{
          fromColor: [245, 0, 0],
          toColor: [245, 245, 0]
        }, {
          fromColor: [245, 245, 0],
          toColor: [0, 245, 0]
        }]
      }, {
        id: "redToGreenDivergingBright_predefined",
        type: "multipart",
        colorRamps: [{
          fromColor: [186, 20, 20],
          toColor: [255, 255, 191]
        }, {
          fromColor: [255, 255, 191],
          toColor: [54, 145, 33]
        }]
      }, {
        id: "redToGreenDivergingDark_predefined",
        type: "multipart",
        colorRamps: [{
          fromColor: [97, 21, 13],
          toColor: [204, 204, 102]
        }, {
          fromColor: [204, 204, 102],
          toColor: [16, 69, 16]
        }]
      }, {
        id: "slope_predefined",
        type: "multipart",
        colorRamps: [{
          fromColor: [56, 168, 0],
          toColor: [255, 255, 0]
        }, {
          fromColor: [255, 255, 0],
          toColor: [255, 0, 0]
        }]
      }, {
        id: "spectrumFullBright_predefined",
        type: "multipart",
        colorRamps: [{
          fromColor: [255, 0, 0],
          toColor: [255, 255, 0]
        }, {
          fromColor: [255, 255, 0],
          toColor: [0, 255, 255]
        }, {
          fromColor: [0, 255, 255],
          toColor: [0, 0, 255]
        }]
      }, {
        id: "spectrumFullDark_predefined",
        type: "multipart",
        colorRamps: [{
          fromColor: [153, 0, 0],
          toColor: [153, 153, 0]
        }, {
          fromColor: [153, 153, 0],
          toColor: [0, 153, 153]
        }, {
          fromColor: [0, 153, 153],
          toColor: [0, 0, 153]
        }]
      }, {
        id: "spectrumFullLight_predefined",
        type: "multipart",
        colorRamps: [{
          fromColor: [255, 153, 153],
          toColor: [255, 255, 153]
        }, {
          fromColor: [255, 255, 153],
          toColor: [153, 255, 255]
        }, {
          fromColor: [153, 255, 255],
          toColor: [153, 153, 255]
        }]
      }, {
        id: "surface_predefined",
        type: "multipart",
        colorRamps: [{
          fromColor: [112, 153, 89],
          toColor: [242, 238, 162]
        }, {
          fromColor: [242, 238, 162],
          toColor: [242, 206, 133]
        }, {
          fromColor: [242, 206, 133],
          toColor: [194, 140, 124]
        }, {
          fromColor: [194, 140, 124],
          toColor: [255, 242, 255]
        }]
      }, {
        id: "temperature_predefined",
        type: "multipart",
        colorRamps: [{
          fromColor: [255, 252, 255],
          toColor: [255, 0, 255]
        }, {
          fromColor: [255, 0, 255],
          toColor: [0, 0, 255]
        }, {
          fromColor: [0, 0, 255],
          toColor: [0, 255, 255]
        }, {
          fromColor: [0, 255, 255],
          toColor: [0, 255, 0]
        }, {
          fromColor: [0, 255, 0],
          toColor: [255, 255, 0]
        }, {
          fromColor: [255, 255, 0],
          toColor: [255, 128, 0]
        }, {
          fromColor: [255, 128, 0],
          toColor: [128, 0, 0]
        }]
      }, {
        id: "whiteToBlack_predefined",
        fromColor: [255, 255, 255],
        toColor: [0, 0, 0]
      }, {
        id: "yellowToDarkRed_predefined",
        type: "multipart",
        colorRamps: [{
          fromColor: [255, 255, 128],
          toColor: [242, 167, 46]
        }, {
          fromColor: [242, 167, 46],
          toColor: [107, 0, 0]
        }]
      }, {
        id: "yellowToGreenToDarkBlue_predefined",
        type: "multipart",
        colorRamps: [{
          fromColor: [255, 255, 128],
          toColor: [56, 224, 9]
        }, {
          fromColor: [56, 224, 9],
          toColor: [26, 147, 171]
        }, {
          fromColor: [26, 147, 171],
          toColor: [12, 16, 120]
        }]
      }, {
        id: "yellowToRed_predefined",
        fromColor: [245, 245, 0],
        toColor: [255, 0, 0]
      }, {
        id: "yellowGreenBright_predefined",
        fromColor: [236, 252, 204],
        toColor: [157, 204, 16]
      }, {
        id: "yellowGreenLightToDark_predefined",
        fromColor: [215, 240, 175],
        toColor: [96, 107, 45]
      }],
          t = {
        aspect_predefined: "Aspect",
        blackToWhite_predefined: "Black to White",
        blueBright_predefined: "Blue Bright",
        blueLightToDark_predefined: "Blue Light to Dark",
        blueGreenBright_predefined: "Blue-Green Bright",
        blueGreenLightToDark_predefined: "Blue-Green Light to Dark",
        brownLightToDark_predefined: "Brown Light to Dark",
        brownToBlueGreenDivergingBright_predefined: "Brown to Blue Green Diverging, Bright",
        brownToBlueGreenDivergingDark_predefined: "Brown to Blue Green Diverging, Dark",
        coefficientBias_predefined: "Coefficient Bias",
        coldToHotDiverging_predefined: "Cold to Hot Diverging",
        conditionNumber_predefined: "Condition Number",
        cyanToPurple_predefined: "Cyan to Purple",
        cyanLightToBlueDark_predefined: "Cyan-Light to Blue-Dark",
        distance_predefined: "Distance",
        elevation1_predefined: "Elevation #1",
        elevation2_predefined: "Elevation #2",
        errors_predefined: "Errors",
        grayLightToDark_predefined: "Gray Light to Dark",
        greenBright_predefined: "Green Bright",
        greenLightToDark_predefined: "Green Light to Dark",
        greenToBlue_predefined: "Green to Blue",
        orangeBright_predefined: "Orange Bright",
        orangeLightToDark_predefined: "Orange Light to Dark",
        partialSpectrum_predefined: "Partial Spectrum",
        partialSpectrum1Diverging_predefined: "Partial Spectrum 1 Diverging",
        partialSpectrum2Diverging_predefined: "Partial Spectrum 2 Diverging",
        pinkToYellowGreenDivergingBright_predefined: "Pink to YellowGreen Diverging, Bright",
        pinkToYellowGreenDivergingDark_predefined: "Pink to YellowGreen Diverging, Dark",
        precipitation_predefined: "Precipitation",
        prediction_predefined: "Prediction",
        purpleBright_predefined: "Purple Bright",
        purpleToGreenDivergingBright_predefined: "Purple to Green Diverging, Bright",
        purpleToGreenDivergingDark_predefined: "Purple to Green Diverging, Dark",
        purpleBlueBright_predefined: "Purple-Blue Bright",
        purpleBlueLightToDark_predefined: "Purple-Blue Light to Dark",
        purpleRedBright_predefined: "Purple-Red Bright",
        purpleRedLightToDark_predefined: "Purple-Red Light to Dark",
        redBright_predefined: "Red Bright",
        redLightToDark_predefined: "Red Light to Dark",
        redToBlueDivergingBright_predefined: "Red to Blue Diverging, Bright",
        redToBlueDivergingDark_predefined: "Red to Blue Diverging, Dark",
        redToGreen_predefined: "Red to Green",
        redToGreenDivergingBright_predefined: "Red to Green Diverging, Bright",
        redToGreenDivergingDark_predefined: "Red to Green Diverging, Dark",
        slope_predefined: "Slope",
        spectrumFullBright_predefined: "Spectrum-Full Bright",
        spectrumFullDark_predefined: "Spectrum-Full Dark",
        spectrumFullLight_predefined: "Spectrum-Full Light",
        surface_predefined: "Surface",
        temperature_predefined: "Temperature",
        whiteToBlack_predefined: "White to Black",
        yellowToDarkRed_predefined: "Yellow to Dark Red",
        yellowToGreenToDarkBlue_predefined: "Yellow to Green to Dark Blue",
        yellowToRed_predefined: "Yellow to Red",
        yellowGreenBright_predefined: "Yellow-Green Bright",
        yellowGreenLightToDark_predefined: "Yellow-Green Light to Dark"
      };

      function i(o, r) {
        if (!o || !r || o.length !== r.length) return !1;

        for (var e = 0; e < o.length; e++) {
          if (o[e] > r[e] + 2 || o[e] < r[e] - 2) return !1;
        }

        return !0;
      }

      function d(o, l, t) {
        var i = Object(_core_colorUtils_js__WEBPACK_IMPORTED_MODULE_1__["toLAB"])(o),
            d = Object(_core_colorUtils_js__WEBPACK_IMPORTED_MODULE_1__["toLAB"])(l),
            p = {
          l: i.l * (1 - t) + t * d.l,
          a: i.a * (1 - t) + t * d.a,
          b: i.b * (1 - t) + t * d.b
        };
        return Object(_core_colorUtils_js__WEBPACK_IMPORTED_MODULE_1__["toRGB"])(p);
      }

      function p(r, e) {
        if (!r) return;
        var t = e || l;
        var d,
            p = null;
        return "algorithmic" === r.type ? t.some(function (o) {
          if (i(r.fromColor.toRgb(), o.fromColor) && i(r.toColor.toRgb(), o.toColor)) return p = o.id, !0;
        }) : "multipart" === r.type && t.some(function (e) {
          if (r.colorRamps && e.colorRamps && r.colorRamps.length === e.colorRamps.length && (d = r.colorRamps, !e.colorRamps.some(function (r, e) {
            if (!i(d[e].fromColor.toRgb(), new _Color_js__WEBPACK_IMPORTED_MODULE_0__["default"](r.fromColor).toRgb()) || !i(d[e].toColor.toRgb(), new _Color_js__WEBPACK_IMPORTED_MODULE_0__["default"](r.toColor).toRgb())) return !0;
          }))) {
            if (p) return !0;
            p = e.id;
          }
        }), p;
      }

      function n(o) {
        var r = p(o);
        return r ? t[r] : null;
      }

      function f(o, r) {
        var e = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : !1;
        if (!o || !r || r < 2) return;
        var l = "toJSON" in o ? o.toJSON() : o,
            t = "multipart" === l.type ? l.colorRamps.length : 1,
            i = [],
            p = [];
        var n,
            f,
            C,
            m,
            a,
            g = 0;

        for (var _o2 = 0; _o2 < t; _o2++) {
          i[_o2] = {
            start: null,
            end: null
          }, i[_o2].start = g, i[_o2].end = g + 1 / t, g = i[_o2].end;
        }

        var _loop = function _loop(_o3) {
          m = _o3 / (r - 1), i.forEach(function (i, g) {
            if (m >= i.start && (m < i.end || _o3 === r - 1 && g === t - 1)) {
              a = (m - i.start) / (i.end - i.start), "multipart" === l.type ? (n = l.colorRamps[g].fromColor, f = l.colorRamps[g].toColor) : (n = l.fromColor, f = l.toColor), 0 === _o3 ? p.push([_o3].concat(n.slice(0, 3))) : _o3 === r - 1 ? p.push([_o3].concat(f.slice(0, 3))) : (C = d({
                r: n[0],
                g: n[1],
                b: n[2]
              }, {
                r: f[0],
                g: f[1],
                b: f[2]
              }, a), p.push([_o3, C.r, C.g, C.b]));

              var _t15 = null != n[3] ? n[3] > 1 ? n[3] / 255 : n[3] : 1,
                  u = null != f[3] ? f[3] > 1 ? f[3] / 255 : f[3] : 1;

              e && p[_o3].push(Math.min(255, Math.round(255 * (_t15 * (1 - a) + u * a))));
            }
          });
        };

        for (var _o3 = 0; _o3 < r; _o3++) {
          _loop(_o3);
        }

        return p;
      }
      /***/

    },

    /***/
    "maMH":
    /*!**********************************************************************************!*\
      !*** ./node_modules/@arcgis/core/layers/support/rasterFunctions/surfaceUtils.js ***!
      \**********************************************************************************/

    /*! exports provided: calculateHillshadeParams, hillshade, tintHillshade */

    /***/
    function maMH(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "calculateHillshadeParams", function () {
        return i;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "hillshade", function () {
        return s;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "tintHillshade", function () {
        return a;
      });
      /* harmony import */


      var _PixelBlock_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ../PixelBlock.js */
      "Piei");
      /*
      All material copyright ESRI, All Rights Reserved, unless otherwise specified.
      See https://js.arcgis.com/4.18/esri/copyright.txt for details.
      */


      var e = function e(t) {
        return t && "esri.layers.support.PixelBlock" === t.declaredClass && t.pixels && t.pixels.length > 0;
      };

      function i(t) {
        var e = t.altitude,
            i = t.azimuth;
        var s = t.hillshadeType,
            a = t.pixelSizePower,
            l = t.pixelSizeFactor,
            n = t.scalingType,
            o = t.isGCS,
            r = t.resolution,
            c = "multi-directional" === s ? 2 * t.zFactor : t.zFactor,
            h = r.x,
            u = r.y;
        var f = c / (8 * h),
            p = c / (8 * u);
        if (o && c > .001 && (f /= 111e3, p /= 111e3), "adjusted" === n) if (o) {
          var _t16 = 111e3 * h,
              _e30 = 111e3 * u;

          f = (c + Math.pow(_t16, a) * l) / (8 * _t16), p = (c + Math.pow(_e30, a) * l) / (8 * _e30);
        } else f = (c + Math.pow(h, a) * l) / (8 * h), p = (c + Math.pow(u, a) * l) / (8 * u);
        var d = (90 - e) * Math.PI / 180,
            M = Math.cos(d),
            w = (360 - i + 90) * Math.PI / 180,
            x = Math.sin(d) * Math.cos(w),
            m = Math.sin(d) * Math.sin(w);
        var A = [315, 270, 225, 360, 180, 0],
            y = [60, 60, 60, 60, 60, 90],
            g = new Float32Array([3, 5, 3, 2, 1, 4]),
            Z = g.reduce(function (t, e) {
          return t + e;
        }),
            k = g.map(function (t) {
          return t / Z;
        }),
            P = "multi-directional" === s ? A.length : 1,
            C = new Float32Array(6),
            F = new Float32Array(6),
            b = new Float32Array(6);
        if ("multi-directional" === s) for (var _t17 = 0; _t17 < P; _t17++) {
          e = y[_t17], i = A[_t17], d = (90 - e) * Math.PI / 180, M = Math.cos(d), w = (360 - i + 90) * Math.PI / 180, x = Math.sin(d) * Math.cos(w), m = Math.sin(d) * Math.sin(w), C[_t17] = M, F[_t17] = x, b[_t17] = m;
        } else C.fill(M), F.fill(x), b.fill(m);
        return {
          resolution: r,
          factor: [f, p],
          sinZcosA: x,
          sinZsinA: m,
          cosZ: M,
          sinZcosAs: F,
          sinZsinAs: b,
          cosZs: C,
          weights: k,
          hillshadeType: ["traditional", "multi-directional"].indexOf(s)
        };
      }

      function s(s, a) {
        if (!e(s)) return s;
        var l = s.width,
            n = s.height,
            o = s.mask,
            r = new Uint8Array(l * n);
        o && r.set(o);

        var _i3 = i(a),
            c = _i3.factor,
            h = _i3.sinZcosA,
            u = _i3.sinZsinA,
            f = _i3.cosZ,
            p = _i3.sinZcosAs,
            d = _i3.sinZsinAs,
            M = _i3.cosZs,
            w = _i3.weights,
            _c = _slicedToArray(c, 2),
            x = _c[0],
            m = _c[1],
            A = a.hillshadeType,
            y = s.pixels[0],
            g = new Uint8Array(l * n);

        var Z, k, P, C, F, b, z, T;

        for (var t = 1; t < n - 1; t++) {
          var _e31 = t * l;

          for (var _t18 = 1; _t18 < l - 1; _t18++) {
            if (o && !o[_e31 + _t18]) {
              g[_e31 + _t18] = 0;
              continue;
            }

            var _i4 = 8;

            if (o && (_i4 = o[_e31 - l + _t18 - 1] + o[_e31 - l + _t18] + o[_e31 - l + _t18 + 1] + o[_e31 + _t18 - 1] + o[_e31 + _t18 + 1] + o[_e31 + l + _t18 - 1] + o[_e31 + l + _t18] + o[_e31 + l + _t18 + 1], _i4 < 7)) {
              g[_e31 + _t18] = 0, r[_e31 + _t18] = 0;
              continue;
            }

            7 === _i4 ? (Z = o[_e31 - l + _t18 - 1] ? y[_e31 - l + _t18 - 1] : y[_e31 + _t18], k = o[_e31 - l + _t18] ? y[_e31 - l + _t18] : y[_e31 + _t18], P = o[_e31 - l + _t18 + 1] ? y[_e31 - l + _t18 + 1] : y[_e31 + _t18], C = o[_e31 + _t18 - 1] ? y[_e31 + _t18 - 1] : y[_e31 + _t18], F = o[_e31 + _t18 + 1] ? y[_e31 + _t18 + 1] : y[_e31 + _t18], b = o[_e31 + l + _t18 - 1] ? y[_e31 + l + _t18 - 1] : y[_e31 + _t18], z = o[_e31 + l + _t18] ? y[_e31 + l + _t18] : y[_e31 + _t18], T = o[_e31 + l + _t18 + 1] ? y[_e31 + l + _t18 + 1] : y[_e31 + _t18]) : (Z = y[_e31 - l + _t18 - 1], k = y[_e31 - l + _t18], P = y[_e31 - l + _t18 + 1], C = y[_e31 + _t18 - 1], F = y[_e31 + _t18 + 1], b = y[_e31 + l + _t18 - 1], z = y[_e31 + l + _t18], T = y[_e31 + l + _t18 + 1]);

            var _s3 = (P + F + F + T - (Z + C + C + b)) * x,
                _a7 = (b + z + z + T - (Z + k + k + P)) * m,
                _n7 = Math.sqrt(1 + _s3 * _s3 + _a7 * _a7);

            var _c2 = 0;

            if ("traditional" === A) {
              var _t19 = 255 * (f + u * _a7 - h * _s3) / _n7;

              _t19 < 0 && (_t19 = 0), _c2 = _t19;
            } else {
              var _t20 = d.length;

              for (var _e32 = 0; _e32 < _t20; _e32++) {
                var _t21 = 255 * (M[_e32] + d[_e32] * _a7 - p[_e32] * _s3) / _n7;

                _t21 < 0 && (_t21 = 0), _c2 += _t21 * w[_e32];
              }
            }

            g[_e31 + _t18] = 255 & _c2;
          }
        }

        for (var _t22 = 0; _t22 < n; _t22++) {
          g[_t22 * l] = g[_t22 * l + 1], g[(_t22 + 1) * l - 1] = g[(_t22 + 1) * l - 2];
        }

        for (var _t23 = 1; _t23 < l - 1; _t23++) {
          g[_t23] = g[_t23 + l], g[_t23 + (n - 1) * l] = g[_t23 + (n - 2) * l];
        }

        return new _PixelBlock_js__WEBPACK_IMPORTED_MODULE_0__["default"]({
          width: l,
          height: n,
          pixels: [g],
          mask: o ? r : null,
          pixelType: "u8",
          validPixelCount: s.validPixelCount,
          statistics: [{
            minValue: 0,
            maxValue: 255
          }]
        });
      }

      function a(t, i, s, a) {
        if (!e(t) || !e(i)) return;
        var l = a.min,
            n = a.max,
            o = t.pixels[0],
            r = i.pixels,
            c = i.mask,
            h = r[0],
            u = 255.00001 / (n - l),
            f = new Uint8ClampedArray(h.length),
            p = new Uint8ClampedArray(h.length),
            d = new Uint8ClampedArray(h.length),
            M = s.length - 1;

        for (var _t24 = 0; _t24 < h.length; _t24++) {
          if (c && 0 === c[_t24]) continue;

          var _e33 = Math.floor((h[_t24] - l) * u),
              _s4 = _slicedToArray(s[_e33 < 0 ? 0 : _e33 > M ? M : _e33], 2),
              _i5 = _s4[0],
              _a8 = _s4[1],
              _n8 = o[_t24],
              _r10 = _n8 * _a8,
              w = _r10 * (1 - Math.abs(_i5 % 2 - 1)),
              x = _n8 - _r10;

          switch (Math.floor(_i5)) {
            case 0:
              f[_t24] = _r10 + x, p[_t24] = w + x, d[_t24] = x;
              break;

            case 1:
              f[_t24] = w + x, p[_t24] = _r10 + x, d[_t24] = x;
              break;

            case 2:
              f[_t24] = x, p[_t24] = _r10 + x, d[_t24] = w + x;
              break;

            case 3:
              f[_t24] = x, p[_t24] = w + x, d[_t24] = _r10 + x;
              break;

            case 4:
              f[_t24] = w + x, p[_t24] = x, d[_t24] = _r10 + x;
              break;

            case 5:
            case 6:
              f[_t24] = _r10 + x, p[_t24] = x, d[_t24] = w + x;
          }
        }

        t.pixels = [f, p, d], t.updateStatistics();
      }
      /***/

    },

    /***/
    "pPNP":
    /*!****************************************************************!*\
      !*** ./node_modules/@arcgis/core/layers/support/RasterInfo.js ***!
      \****************************************************************/

    /*! exports provided: default */

    /***/
    function pPNP(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony import */


      var _chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ../../chunks/tslib.es6.js */
      "pO5D");
      /* harmony import */


      var _core_has_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ../../core/has.js */
      "wSAH");
      /* harmony import */


      var _core_Logger_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ../../core/Logger.js */
      "6S2I");
      /* harmony import */


      var _core_accessorSupport_ensureType_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ../../core/accessorSupport/ensureType.js */
      "zqDF");
      /* harmony import */


      var _core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ../../core/accessorSupport/decorators/property.js */
      "WbKI");
      /* harmony import */


      var _core_accessorSupport_decorators_subclass_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ../../core/accessorSupport/decorators/subclass.js */
      "04ZG");
      /* harmony import */


      var _core_urlUtils_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ../../core/urlUtils.js */
      "4EHJ");
      /* harmony import */


      var _core_uuid_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! ../../core/uuid.js */
      "ju1D");
      /* harmony import */


      var _portal_support_resourceExtension_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! ../../portal/support/resourceExtension.js */
      "9AIY");
      /* harmony import */


      var _core_JSONSupport_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! ../../core/JSONSupport.js */
      "ag7Y");
      /* harmony import */


      var _geometry_Extent_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
      /*! ../../geometry/Extent.js */
      "OvF4");
      /*
      All material copyright ESRI, All Rights Reserved, unless otherwise specified.
      See https://js.arcgis.com/4.18/esri/copyright.txt for details.
      */


      var s = /*#__PURE__*/function (_core_JSONSupport_js_2) {
        _inherits(s, _core_JSONSupport_js_2);

        var _super2 = _createSuper(s);

        function s(t) {
          var _this2;

          _classCallCheck(this, s);

          _this2 = _super2.call(this, t), _this2.attributeTable = null, _this2.bandCount = null, _this2.colormap = null, _this2.extent = null, _this2.format = void 0, _this2.height = null, _this2.width = null, _this2.histograms = null, _this2.keyProperties = {}, _this2.multidimensionalInfo = null, _this2.noDataValue = null, _this2.pixelSize = null, _this2.pixelType = null, _this2.isPseudoSpatialReference = !1, _this2.spatialReference = null, _this2.statistics = null, _this2.storageInfo = null, _this2.transform = null;
          return _this2;
        }

        _createClass(s, [{
          key: "dataType",
          get: function get() {
            var t = this.keyProperties && this.keyProperties.DataType;
            return t ? t.toLowerCase() : "generic";
          }
        }, {
          key: "nativeExtent",
          get: function get() {
            return this._get("nativeExtent") || this.extent;
          },
          set: function set(t) {
            t && this._set("nativeExtent", t);
          }
        }, {
          key: "nativePixelSize",
          get: function get() {
            var t = this.nativeExtent;
            return {
              x: t.width / this.width,
              y: t.height / this.height
            };
          }
        }]);

        return s;
      }(_core_JSONSupport_js__WEBPACK_IMPORTED_MODULE_9__["JSONSupport"]);

      Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_4__["property"])({
        json: {
          write: !0
        }
      })], s.prototype, "attributeTable", void 0), Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_4__["property"])({
        json: {
          write: !0
        }
      })], s.prototype, "bandCount", void 0), Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_4__["property"])({
        json: {
          write: !0
        }
      })], s.prototype, "colormap", void 0), Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_4__["property"])({
        type: String,
        readOnly: !0
      })], s.prototype, "dataType", null), Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_4__["property"])({
        type: _geometry_Extent_js__WEBPACK_IMPORTED_MODULE_10__["default"],
        json: {
          write: !0
        }
      })], s.prototype, "extent", void 0), Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_4__["property"])({
        type: _geometry_Extent_js__WEBPACK_IMPORTED_MODULE_10__["default"],
        dependsOn: ["extent"],
        json: {
          write: !0
        }
      })], s.prototype, "nativeExtent", null), Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_4__["property"])({
        dependsOn: ["nativeExtent"],
        json: {
          write: !0
        }
      })], s.prototype, "nativePixelSize", null), Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_4__["property"])({
        json: {
          write: !0
        }
      })], s.prototype, "format", void 0), Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_4__["property"])({
        json: {
          write: !0
        }
      })], s.prototype, "height", void 0), Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_4__["property"])({
        json: {
          write: !0
        }
      })], s.prototype, "width", void 0), Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_4__["property"])({
        json: {
          write: !0
        }
      })], s.prototype, "histograms", void 0), Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_4__["property"])({
        json: {
          write: !0
        }
      })], s.prototype, "keyProperties", void 0), Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_4__["property"])({
        json: {
          write: !0
        }
      })], s.prototype, "multidimensionalInfo", void 0), Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_4__["property"])()], s.prototype, "noDataValue", void 0), Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_4__["property"])({
        json: {
          write: !0
        }
      })], s.prototype, "pixelSize", void 0), Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_4__["property"])({
        json: {
          write: !0
        }
      })], s.prototype, "pixelType", void 0), Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_4__["property"])()], s.prototype, "isPseudoSpatialReference", void 0), Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_4__["property"])({
        json: {
          write: !0
        }
      })], s.prototype, "spatialReference", void 0), Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_4__["property"])({
        json: {
          write: !0
        }
      })], s.prototype, "statistics", void 0), Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_4__["property"])({
        json: {
          write: !0
        }
      })], s.prototype, "storageInfo", void 0), Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_4__["property"])({
        json: {
          write: !0
        }
      })], s.prototype, "transform", void 0), s = Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_subclass_js__WEBPACK_IMPORTED_MODULE_5__["subclass"])("esri.layers.support.RasterInfo")], s);
      var n = s;
      /* harmony default export */

      __webpack_exports__["default"] = n;
      /***/
    },

    /***/
    "rbZt":
    /*!***********************************************************************!*\
      !*** ./node_modules/@arcgis/core/layers/support/rasterFormats/Lzw.js ***!
      \***********************************************************************/

    /*! exports provided: decode */

    /***/
    function rbZt(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "decode", function () {
        return r;
      });
      /*
      All material copyright ESRI, All Rights Reserved, unless otherwise specified.
      See https://js.arcgis.com/4.18/esri/copyright.txt for details.
      */


      function e() {
        var e = [];

        for (var _n9 = 0; _n9 <= 257; _n9++) {
          e[_n9] = [_n9];
        }

        return e;
      }

      function n(e, n) {
        for (var _t25 = 0; _t25 < n.length; _t25++) {
          e.push(n[_t25]);
        }
      }

      var t = new Set();

      function r(r, i, l) {
        var o = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : !0;

        var f = function (e, n, t) {
          var r = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : !0;

          if (n % 4 != 0 || t % 4 != 0) {
            var _i6 = new ArrayBuffer(4 * Math.ceil(t / 4)),
                _l2 = new Uint8Array(_i6),
                _o4 = new Uint8Array(e, n, t);

            if (r) for (var _e34 = 0; _e34 < _l2.length; _e34 += 4) {
              _l2[_e34] = _o4[_e34 + 3], _l2[_e34 + 1] = _o4[_e34 + 2], _l2[_e34 + 2] = _o4[_e34 + 1], _l2[_e34 + 3] = _o4[_e34];
            } else _l2.set(_o4);
            return new Uint32Array(_l2.buffer);
          }

          if (r) {
            var _r11 = new Uint8Array(e, n, t),
                _i7 = new Uint8Array(_r11.length);

            for (var _e35 = 0; _e35 < _i7.length; _e35 += 4) {
              _i7[_e35] = _r11[_e35 + 3], _i7[_e35 + 1] = _r11[_e35 + 2], _i7[_e35 + 2] = _r11[_e35 + 1], _i7[_e35 + 3] = _r11[_e35];
            }

            return new Uint32Array(_i7.buffer);
          }

          return new Uint32Array(e, n, t / 4);
        }(r, i, l, o);

        var s = 9,
            a = e(),
            c = 32,
            u = a.length,
            h = [],
            d = 1,
            g = f[0],
            w = 0;
        var y = f.length,
            A = 8 * (4 * y - l),
            U = [];

        for (; null != g;) {
          if (c >= s) c -= s, w = g >>> 32 - s, g <<= s;else {
            w = g >>> 32 - c, g = f[d++];

            var _e36 = s - c;

            c = 32 - _e36, w = (w << _e36) + (g >>> c), g <<= _e36;
          }
          if (257 === w) break;

          if (256 === w) {
            s = 9, a = e(), u = a.length, h = [];
            continue;
          }

          var _r12 = a[w];

          if (null == _r12) {
            if (w > a.length) throw "data integrity issue: code does not exist on code page";
            h.push(h[0]), a[u++] = h.slice(), n(U, h);
          } else n(U, _r12), h.push(_r12[0]), h.length > 1 && (a[u++] = h.slice()), h = _r12.slice();

          if (t.has(u) && s++, 0 === c && (g = f[d++], c = 32), d > y || d === y && c <= A) break;
        }

        return new Uint8Array(U);
      }

      t.add(511), t.add(1023), t.add(2047), t.add(4095), t.add(8191);
      /***/
    },

    /***/
    "svfg":
    /*!*******************************************************!*\
      !*** ./node_modules/@arcgis/core/chunks/LercCodec.js ***!
      \*******************************************************/

    /*! exports provided: d */

    /***/
    function svfg(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "d", function () {
        return m;
      });
      /*
      All material copyright ESRI, All Rights Reserved, unless otherwise specified.
      See https://js.arcgis.com/4.18/esri/copyright.txt for details.
      */


      var e = new Float32Array(1);

      function t(e) {
        return i(Math.max(-n, Math.min(e, n)));
      }

      function i(t) {
        return e[0] = t, e[0];
      }

      var n = i(34028234663852886e22);
      var a = {};
      a.defaultNoDataValue = t(-1 / 0), a.decode = function (e, i) {
        var n = (i = i || {}).encodedMaskData || null === i.encodedMaskData,
            f = o(e, i.inputOffset || 0, n),
            m = null != i.noDataValue ? t(i.noDataValue) : a.defaultNoDataValue,
            u = l(f, i.pixelType || Float32Array, i.encodedMaskData, m, i.returnMask),
            d = {
          width: f.width,
          height: f.height,
          pixelData: u.resultPixels,
          minValue: f.pixels.minValue,
          maxValue: f.pixels.maxValue,
          noDataValue: m
        };
        return u.resultMask && (d.maskData = u.resultMask), i.returnEncodedMask && f.mask && (d.encodedMaskData = f.mask.bitset ? f.mask.bitset : null), i.returnFileInfo && (d.fileInfo = s(f, m), i.computeUsedBitDepths && (d.fileInfo.bitDepths = r(f))), d;
      };

      var l = function l(e, t, i, n, a) {
        var l,
            s,
            r = 0,
            o = e.pixels.numBlocksX,
            m = e.pixels.numBlocksY,
            u = Math.floor(e.width / o),
            d = Math.floor(e.height / m),
            c = 2 * e.maxZError;
        i = i || (e.mask ? e.mask.bitset : null), l = new t(e.width * e.height), a && i && (s = new Uint8Array(e.width * e.height));

        for (var g, h, k = new Float32Array(u * d), x = 0; x <= m; x++) {
          var w = x !== m ? d : e.height % m;
          if (0 !== w) for (var p = 0; p <= o; p++) {
            var y = p !== o ? u : e.width % o;

            if (0 !== y) {
              var V,
                  B,
                  v,
                  U,
                  M = x * e.width * d + p * u,
                  D = e.width - y,
                  b = e.pixels.blocks[r];
              if (b.encoding < 2 ? (0 === b.encoding ? V = b.rawData : (f(b.stuffedData, b.bitsPerPixel, b.numValidPixels, b.offset, c, k, e.pixels.maxValue), V = k), B = 0) : v = 2 === b.encoding ? 0 : b.offset, i) for (h = 0; h < w; h++) {
                for (7 & M && (U = i[M >> 3], U <<= 7 & M), g = 0; g < y; g++) {
                  7 & M || (U = i[M >> 3]), 128 & U ? (s && (s[M] = 1), l[M++] = b.encoding < 2 ? V[B++] : v) : (s && (s[M] = 0), l[M++] = n), U <<= 1;
                }

                M += D;
              } else if (b.encoding < 2) for (h = 0; h < w; h++) {
                for (g = 0; g < y; g++) {
                  l[M++] = V[B++];
                }

                M += D;
              } else for (h = 0; h < w; h++) {
                if (l.fill) l.fill(v, M, M + y), M += y + D;else {
                  for (g = 0; g < y; g++) {
                    l[M++] = v;
                  }

                  M += D;
                }
              }
              if (1 === b.encoding && B !== b.numValidPixels) throw "Block and Mask do not match";
              r++;
            }
          }
        }

        return {
          resultPixels: l,
          resultMask: s
        };
      },
          s = function s(e, t) {
        return {
          fileIdentifierString: e.fileIdentifierString,
          fileVersion: e.fileVersion,
          imageType: e.imageType,
          height: e.height,
          width: e.width,
          maxZError: e.maxZError,
          eofOffset: e.eofOffset,
          mask: e.mask ? {
            numBlocksX: e.mask.numBlocksX,
            numBlocksY: e.mask.numBlocksY,
            numBytes: e.mask.numBytes,
            maxValue: e.mask.maxValue
          } : null,
          pixels: {
            numBlocksX: e.pixels.numBlocksX,
            numBlocksY: e.pixels.numBlocksY,
            numBytes: e.pixels.numBytes,
            maxValue: e.pixels.maxValue,
            minValue: e.pixels.minValue,
            noDataValue: t
          }
        };
      },
          r = function r(e) {
        for (var t = e.pixels.numBlocksX * e.pixels.numBlocksY, i = {}, n = 0; n < t; n++) {
          var a = e.pixels.blocks[n];
          0 === a.encoding ? i.float32 = !0 : 1 === a.encoding ? i[a.bitsPerPixel] = !0 : i[0] = !0;
        }

        return Object.keys(i);
      },
          o = function o(e, t, i) {
        var n = {},
            a = new Uint8Array(e, t, 10);
        if (n.fileIdentifierString = String.fromCharCode.apply(null, a), "CntZImage" != n.fileIdentifierString.trim()) throw "Unexpected file identifier string: " + n.fileIdentifierString;
        t += 10;
        var l = new DataView(e, t, 24);
        if (n.fileVersion = l.getInt32(0, !0), n.imageType = l.getInt32(4, !0), n.height = l.getUint32(8, !0), n.width = l.getUint32(12, !0), n.maxZError = l.getFloat64(16, !0), t += 24, !i) if (l = new DataView(e, t, 16), n.mask = {}, n.mask.numBlocksY = l.getUint32(0, !0), n.mask.numBlocksX = l.getUint32(4, !0), n.mask.numBytes = l.getUint32(8, !0), n.mask.maxValue = l.getFloat32(12, !0), t += 16, n.mask.numBytes > 0) {
          var s = new Uint8Array(Math.ceil(n.width * n.height / 8)),
              r = (l = new DataView(e, t, n.mask.numBytes)).getInt16(0, !0),
              o = 2,
              f = 0;

          do {
            if (r > 0) for (; r--;) {
              s[f++] = l.getUint8(o++);
            } else {
              var m = l.getUint8(o++);

              for (r = -r; r--;) {
                s[f++] = m;
              }
            }
            r = l.getInt16(o, !0), o += 2;
          } while (o < n.mask.numBytes);

          if (-32768 !== r || f < s.length) throw "Unexpected end of mask RLE encoding";
          n.mask.bitset = s, t += n.mask.numBytes;
        } else if (0 == (n.mask.numBytes | n.mask.numBlocksY | n.mask.maxValue)) {
          s = new Uint8Array(Math.ceil(n.width * n.height / 8));
          n.mask.bitset = s;
        }
        l = new DataView(e, t, 16), n.pixels = {}, n.pixels.numBlocksY = l.getUint32(0, !0), n.pixels.numBlocksX = l.getUint32(4, !0), n.pixels.numBytes = l.getUint32(8, !0), n.pixels.maxValue = l.getFloat32(12, !0), t += 16;
        var u = n.pixels.numBlocksX,
            d = n.pixels.numBlocksY,
            c = u + (n.width % u > 0 ? 1 : 0),
            g = d + (n.height % d > 0 ? 1 : 0);
        n.pixels.blocks = new Array(c * g);

        for (var h = 1e9, k = 0, x = 0; x < g; x++) {
          for (var w = 0; w < c; w++) {
            var p = 0,
                y = e.byteLength - t;
            l = new DataView(e, t, Math.min(10, y));
            var V = {};
            n.pixels.blocks[k++] = V;
            var B = l.getUint8(0);
            if (p++, V.encoding = 63 & B, V.encoding > 3) throw "Invalid block encoding (" + V.encoding + ")";

            if (2 !== V.encoding) {
              if (0 !== B && 2 !== B) {
                if (B >>= 6, V.offsetType = B, 2 === B) V.offset = l.getInt8(1), p++;else if (1 === B) V.offset = l.getInt16(1, !0), p += 2;else {
                  if (0 !== B) throw "Invalid block offset type";
                  V.offset = l.getFloat32(1, !0), p += 4;
                }
                if (h = Math.min(V.offset, h), 1 === V.encoding) if (B = l.getUint8(p), p++, V.bitsPerPixel = 63 & B, B >>= 6, V.numValidPixelsType = B, 2 === B) V.numValidPixels = l.getUint8(p), p++;else if (1 === B) V.numValidPixels = l.getUint16(p, !0), p += 2;else {
                  if (0 !== B) throw "Invalid valid pixel count type";
                  V.numValidPixels = l.getUint32(p, !0), p += 4;
                }
              }

              var v;
              if (t += p, 3 != V.encoding) if (0 === V.encoding) {
                var U = (n.pixels.numBytes - 1) / 4;
                if (U !== Math.floor(U)) throw "uncompressed block has invalid length";
                v = new ArrayBuffer(4 * U), new Uint8Array(v).set(new Uint8Array(e, t, 4 * U));

                for (var M = new Float32Array(v), D = 0; D < M.length; D++) {
                  h = Math.min(h, M[D]);
                }

                V.rawData = M, t += 4 * U;
              } else if (1 === V.encoding) {
                var b = Math.ceil(V.numValidPixels * V.bitsPerPixel / 8),
                    I = Math.ceil(b / 4);
                v = new ArrayBuffer(4 * I), new Uint8Array(v).set(new Uint8Array(e, t, b)), V.stuffedData = new Uint32Array(v), t += b;
              }
            } else t++, h = Math.min(h, 0);
          }
        }

        return n.pixels.minValue = h, n.eofOffset = t, n;
      },
          f = function f(e, t, i, n, a, l, s) {
        var r,
            o,
            f,
            m = (1 << t) - 1,
            u = 0,
            d = 0,
            c = Math.ceil((s - n) / a),
            g = 4 * e.length - Math.ceil(t * i / 8);

        for (e[e.length - 1] <<= 8 * g, r = 0; r < i; r++) {
          if (0 === d && (f = e[u++], d = 32), d >= t) o = f >>> d - t & m, d -= t;else {
            var h = t - d;
            o = (f & m) << h & m, o += (f = e[u++]) >>> (d = 32 - h);
          }
          l[r] = o < c ? n + o * a : s;
        }

        return l;
      };

      var m = a.decode;
      /***/
    },

    /***/
    "xMJK":
    /*!**************************************************!*\
      !*** ./node_modules/@arcgis/core/chunks/Zlib.js ***!
      \**************************************************/

    /*! exports provided: Z */

    /***/
    function xMJK(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "Z", function () {
        return e;
      });
      /* harmony import */


      var _commonjsHelpers_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ./_commonjsHelpers.js */
      "X2wA");
      /*
      All material copyright ESRI, All Rights Reserved, unless otherwise specified.
      See https://js.arcgis.com/4.18/esri/copyright.txt for details.
      */


      var e = Object(_commonjsHelpers_js__WEBPACK_IMPORTED_MODULE_0__["c"])(function (t) {
        var e, r;
        e = function () {
          function t() {
            this.pos = 0, this.bufferLength = 0, this.eof = !1, this.buffer = null;
          }

          return t.prototype = {
            ensureBuffer: function ensureBuffer(t) {
              var e = this.buffer,
                  r = e ? e.byteLength : 0;
              if (t < r) return e;

              for (var i = 512; i < t;) {
                i <<= 1;
              }

              for (var s = new Uint8Array(i), f = 0; f < r; ++f) {
                s[f] = e[f];
              }

              return this.buffer = s;
            },
            getByte: function getByte() {
              for (var t = this.pos; this.bufferLength <= t;) {
                if (this.eof) return null;
                this.readBlock();
              }

              return this.buffer[this.pos++];
            },
            getBytes: function getBytes(t) {
              var e = this.pos;

              if (t) {
                this.ensureBuffer(e + t);

                for (var r = e + t; !this.eof && this.bufferLength < r;) {
                  this.readBlock();
                }

                var i = this.bufferLength;
                r > i && (r = i);
              } else {
                for (; !this.eof;) {
                  this.readBlock();
                }

                r = this.bufferLength;
              }

              return this.pos = r, this.buffer.subarray(e, r);
            },
            lookChar: function lookChar() {
              for (var t = this.pos; this.bufferLength <= t;) {
                if (this.eof) return null;
                this.readBlock();
              }

              return String.fromCharCode(this.buffer[this.pos]);
            },
            getChar: function getChar() {
              for (var t = this.pos; this.bufferLength <= t;) {
                if (this.eof) return null;
                this.readBlock();
              }

              return String.fromCharCode(this.buffer[this.pos++]);
            },
            makeSubStream: function makeSubStream(t, e, r) {
              for (var i = t + e; this.bufferLength <= i && !this.eof;) {
                this.readBlock();
              }

              return new Stream(this.buffer, t, e, r);
            },
            skip: function skip(t) {
              t || (t = 1), this.pos += t;
            },
            reset: function reset() {
              this.pos = 0;
            }
          }, t;
        }(), void 0 !== (r = function () {
          if (!self || !self.Uint32Array) return null;
          var t = new Uint32Array([16, 17, 18, 0, 8, 7, 9, 6, 10, 5, 11, 4, 12, 3, 13, 2, 14, 1, 15]),
              r = new Uint32Array([3, 4, 5, 6, 7, 8, 9, 10, 65547, 65549, 65551, 65553, 131091, 131095, 131099, 131103, 196643, 196651, 196659, 196667, 262211, 262227, 262243, 262259, 327811, 327843, 327875, 327907, 258, 258, 258]),
              i = new Uint32Array([1, 2, 3, 4, 65541, 65543, 131081, 131085, 196625, 196633, 262177, 262193, 327745, 327777, 393345, 393409, 459009, 459137, 524801, 525057, 590849, 591361, 657409, 658433, 724993, 727041, 794625, 798721, 868353, 876545]),
              s = [new Uint32Array([459008, 524368, 524304, 524568, 459024, 524400, 524336, 590016, 459016, 524384, 524320, 589984, 524288, 524416, 524352, 590048, 459012, 524376, 524312, 589968, 459028, 524408, 524344, 590032, 459020, 524392, 524328, 59e4, 524296, 524424, 524360, 590064, 459010, 524372, 524308, 524572, 459026, 524404, 524340, 590024, 459018, 524388, 524324, 589992, 524292, 524420, 524356, 590056, 459014, 524380, 524316, 589976, 459030, 524412, 524348, 590040, 459022, 524396, 524332, 590008, 524300, 524428, 524364, 590072, 459009, 524370, 524306, 524570, 459025, 524402, 524338, 590020, 459017, 524386, 524322, 589988, 524290, 524418, 524354, 590052, 459013, 524378, 524314, 589972, 459029, 524410, 524346, 590036, 459021, 524394, 524330, 590004, 524298, 524426, 524362, 590068, 459011, 524374, 524310, 524574, 459027, 524406, 524342, 590028, 459019, 524390, 524326, 589996, 524294, 524422, 524358, 590060, 459015, 524382, 524318, 589980, 459031, 524414, 524350, 590044, 459023, 524398, 524334, 590012, 524302, 524430, 524366, 590076, 459008, 524369, 524305, 524569, 459024, 524401, 524337, 590018, 459016, 524385, 524321, 589986, 524289, 524417, 524353, 590050, 459012, 524377, 524313, 589970, 459028, 524409, 524345, 590034, 459020, 524393, 524329, 590002, 524297, 524425, 524361, 590066, 459010, 524373, 524309, 524573, 459026, 524405, 524341, 590026, 459018, 524389, 524325, 589994, 524293, 524421, 524357, 590058, 459014, 524381, 524317, 589978, 459030, 524413, 524349, 590042, 459022, 524397, 524333, 590010, 524301, 524429, 524365, 590074, 459009, 524371, 524307, 524571, 459025, 524403, 524339, 590022, 459017, 524387, 524323, 589990, 524291, 524419, 524355, 590054, 459013, 524379, 524315, 589974, 459029, 524411, 524347, 590038, 459021, 524395, 524331, 590006, 524299, 524427, 524363, 590070, 459011, 524375, 524311, 524575, 459027, 524407, 524343, 590030, 459019, 524391, 524327, 589998, 524295, 524423, 524359, 590062, 459015, 524383, 524319, 589982, 459031, 524415, 524351, 590046, 459023, 524399, 524335, 590014, 524303, 524431, 524367, 590078, 459008, 524368, 524304, 524568, 459024, 524400, 524336, 590017, 459016, 524384, 524320, 589985, 524288, 524416, 524352, 590049, 459012, 524376, 524312, 589969, 459028, 524408, 524344, 590033, 459020, 524392, 524328, 590001, 524296, 524424, 524360, 590065, 459010, 524372, 524308, 524572, 459026, 524404, 524340, 590025, 459018, 524388, 524324, 589993, 524292, 524420, 524356, 590057, 459014, 524380, 524316, 589977, 459030, 524412, 524348, 590041, 459022, 524396, 524332, 590009, 524300, 524428, 524364, 590073, 459009, 524370, 524306, 524570, 459025, 524402, 524338, 590021, 459017, 524386, 524322, 589989, 524290, 524418, 524354, 590053, 459013, 524378, 524314, 589973, 459029, 524410, 524346, 590037, 459021, 524394, 524330, 590005, 524298, 524426, 524362, 590069, 459011, 524374, 524310, 524574, 459027, 524406, 524342, 590029, 459019, 524390, 524326, 589997, 524294, 524422, 524358, 590061, 459015, 524382, 524318, 589981, 459031, 524414, 524350, 590045, 459023, 524398, 524334, 590013, 524302, 524430, 524366, 590077, 459008, 524369, 524305, 524569, 459024, 524401, 524337, 590019, 459016, 524385, 524321, 589987, 524289, 524417, 524353, 590051, 459012, 524377, 524313, 589971, 459028, 524409, 524345, 590035, 459020, 524393, 524329, 590003, 524297, 524425, 524361, 590067, 459010, 524373, 524309, 524573, 459026, 524405, 524341, 590027, 459018, 524389, 524325, 589995, 524293, 524421, 524357, 590059, 459014, 524381, 524317, 589979, 459030, 524413, 524349, 590043, 459022, 524397, 524333, 590011, 524301, 524429, 524365, 590075, 459009, 524371, 524307, 524571, 459025, 524403, 524339, 590023, 459017, 524387, 524323, 589991, 524291, 524419, 524355, 590055, 459013, 524379, 524315, 589975, 459029, 524411, 524347, 590039, 459021, 524395, 524331, 590007, 524299, 524427, 524363, 590071, 459011, 524375, 524311, 524575, 459027, 524407, 524343, 590031, 459019, 524391, 524327, 589999, 524295, 524423, 524359, 590063, 459015, 524383, 524319, 589983, 459031, 524415, 524351, 590047, 459023, 524399, 524335, 590015, 524303, 524431, 524367, 590079]), 9],
              f = [new Uint32Array([327680, 327696, 327688, 327704, 327684, 327700, 327692, 327708, 327682, 327698, 327690, 327706, 327686, 327702, 327694, 0, 327681, 327697, 327689, 327705, 327685, 327701, 327693, 327709, 327683, 327699, 327691, 327707, 327687, 327703, 327695, 0]), 5];

          function o(t) {
            throw new Error(t);
          }

          function n(t) {
            var r = 0,
                i = t[r++],
                s = t[r++];
            -1 != i && -1 != s || o("Invalid header in flate stream"), 8 != (15 & i) && o("Unknown compression method in flate stream"), ((i << 8) + s) % 31 != 0 && o("Bad FCHECK in flate stream"), 32 & s && o("FDICT bit set in flate stream"), this.bytes = t, this.bytesPos = r, this.codeSize = 0, this.codeBuf = 0, e.call(this);
          }

          return n.prototype = Object.create(e.prototype), n.prototype.getBits = function (t) {
            for (var e, r = this.codeSize, i = this.codeBuf, s = this.bytes, f = this.bytesPos; r < t;) {
              void 0 === (e = s[f++]) && o("Bad encoding in flate stream"), i |= e << r, r += 8;
            }

            return e = i & (1 << t) - 1, this.codeBuf = i >> t, this.codeSize = r -= t, this.bytesPos = f, e;
          }, n.prototype.getCode = function (t) {
            for (var e = t[0], r = t[1], i = this.codeSize, s = this.codeBuf, f = this.bytes, n = this.bytesPos; i < r;) {
              var a;
              void 0 === (a = f[n++]) && o("Bad encoding in flate stream"), s |= a << i, i += 8;
            }

            var h = e[s & (1 << r) - 1],
                u = h >> 16,
                l = 65535 & h;
            return (0 == i || i < u || 0 == u) && o("Bad encoding in flate stream"), this.codeBuf = s >> u, this.codeSize = i - u, this.bytesPos = n, l;
          }, n.prototype.generateHuffmanTable = function (t) {
            for (var e = t.length, r = 0, i = 0; i < e; ++i) {
              t[i] > r && (r = t[i]);
            }

            for (var s = 1 << r, f = new Uint32Array(s), o = 1, n = 0, a = 2; o <= r; ++o, n <<= 1, a <<= 1) {
              for (var h = 0; h < e; ++h) {
                if (t[h] == o) {
                  var u = 0,
                      l = n;

                  for (i = 0; i < o; ++i) {
                    u = u << 1 | 1 & l, l >>= 1;
                  }

                  for (i = u; i < s; i += a) {
                    f[i] = o << 16 | h;
                  }

                  ++n;
                }
              }
            }

            return [f, r];
          }, n.prototype.readBlock = function () {
            function e(t, e, r, i, s) {
              for (var f = t.getBits(r) + i; f-- > 0;) {
                e[b++] = s;
              }
            }

            var n = this.getBits(3);

            if (1 & n && (this.eof = !0), 0 != (n >>= 1)) {
              var a, h;
              if (1 == n) a = s, h = f;else if (2 == n) {
                for (var u = this.getBits(5) + 257, l = this.getBits(5) + 1, c = this.getBits(4) + 4, d = Array(t.length), b = 0; b < c;) {
                  d[t[b++]] = this.getBits(3);
                }

                for (var v = this.generateHuffmanTable(d), g = 0, B = (b = 0, u + l), p = new Array(B); b < B;) {
                  var y = this.getCode(v);
                  16 == y ? e(this, p, 2, 3, g) : 17 == y ? e(this, p, 3, 3, g = 0) : 18 == y ? e(this, p, 7, 11, g = 0) : p[b++] = g = y;
                }

                a = this.generateHuffmanTable(p.slice(0, u)), h = this.generateHuffmanTable(p.slice(u, B));
              } else o("Unknown block type in flate stream");

              for (var m = (j = this.buffer) ? j.length : 0, k = this.bufferLength;;) {
                var w = this.getCode(a);
                if (w < 256) k + 1 >= m && (m = (j = this.ensureBuffer(k + 1)).length), j[k++] = w;else {
                  if (256 == w) return void (this.bufferLength = k);
                  var C = (w = r[w -= 257]) >> 16;
                  C > 0 && (C = this.getBits(C)), g = (65535 & w) + C, w = this.getCode(h), (C = (w = i[w]) >> 16) > 0 && (C = this.getBits(C));
                  var L = (65535 & w) + C;
                  k + g >= m && (m = (j = this.ensureBuffer(k + g)).length);

                  for (var S = 0; S < g; ++S, ++k) {
                    j[k] = j[k - L];
                  }
                }
              }
            } else {
              var A,
                  U = this.bytes,
                  P = this.bytesPos;
              void 0 === (A = U[P++]) && o("Bad block header in flate stream");
              var z = A;
              void 0 === (A = U[P++]) && o("Bad block header in flate stream"), z |= A << 8, void 0 === (A = U[P++]) && o("Bad block header in flate stream");
              var H = A;
              void 0 === (A = U[P++]) && o("Bad block header in flate stream"), (H |= A << 8) != (65535 & ~z) && o("Bad uncompressed block length in flate stream"), this.codeBuf = 0, this.codeSize = 0;
              var T = this.bufferLength,
                  j = this.ensureBuffer(T + z),
                  x = T + z;
              this.bufferLength = x;

              for (var E = T; E < x; ++E) {
                if (void 0 === (A = U[P++])) {
                  this.eof = !0;
                  break;
                }

                j[E] = A;
              }

              this.bytesPos = P;
            }
          }, n;
        }()) && (t.exports = r);
      });
      /***/
    }
  }]);
})();
//# sourceMappingURL=default~ImageryLayer-js~ImageryTileLayer-js~layers-support-RasterWorker-js-es5.js.map