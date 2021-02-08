(function () {
  function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

  function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

  function _iterableToArrayLimit(arr, i) { if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr))) return; var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

  function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

  function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

  function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

  function _createForOfIteratorHelper(o, allowArrayLike) { var it; if (typeof Symbol === "undefined" || o[Symbol.iterator] == null) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function (_e78) { function e(_x19) { return _e78.apply(this, arguments); } e.toString = function () { return _e78.toString(); }; return e; }(function (e) { throw e; }), f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = o[Symbol.iterator](); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function (_e79) { function e(_x20) { return _e79.apply(this, arguments); } e.toString = function () { return _e79.toString(); }; return e; }(function (e) { didErr = true; err = e; }), f: function f() { try { if (!normalCompletion && it["return"] != null) it["return"](); } finally { if (didErr) throw err; } } }; }

  function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

  function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

  function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

  function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

  function _possibleConstructorReturn(self, call) { if (call && (typeof call === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

  function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

  function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

  function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["views-2d-engine-vectorTiles-WorkerTileHandler-js"], {
    /***/
    "+yyC":
    /*!**************************************************************!*\
      !*** ./node_modules/@arcgis/core/core/libs/earcut/earcut.js ***!
      \**************************************************************/

    /*! exports provided: deviation, earcut */

    /***/
    function yyC(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "deviation", function () {
        return p;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "earcut", function () {
        return e;
      });
      /*
      All material copyright ESRI, All Rights Reserved, unless otherwise specified.
      See https://js.arcgis.com/4.18/esri/copyright.txt for details.
      */


      function e(e, r, i) {
        var u = r && r.length,
            o = u ? r[0] * i : e.length;
        var y = n(e, 0, o, i, !0);
        var p = new Array();
        if (!y || y.next === y.prev) return p;
        var c, v, s, h, d;

        if (u && (y = function (e, x, r, i) {
          var u = new Array();

          for (var _t = 0, _r = x.length; _t < _r; _t++) {
            var _o = n(e, x[_t] * i, _t < _r - 1 ? x[_t + 1] * i : e.length, i, !1);

            _o === _o.next && (_o.steiner = !0), u.push(l(_o));
          }

          u.sort(w);

          for (var _i = 0, _u = u; _i < _u.length; _i++) {
            var _e = _u[_i];
            f(_e, r), r = t(r, r.next);
          }

          return r;
        }(e, r, y, i)), e.length > 80 * i) {
          c = s = e[0], v = h = e[1];

          for (var _n = i; _n < o; _n += i) {
            var _t2 = e[_n],
                _x = e[_n + 1];
            c = Math.min(c, _t2), v = Math.min(v, _x), s = Math.max(s, _t2), h = Math.max(h, _x);
          }

          d = Math.max(s - c, h - v), d = 0 !== d ? 1 / d : 0;
        }

        return x(y, p, i, c, v, d), p;
      }

      function n(e, n, t, x, r) {
        var i;
        if (r === s(e, n, t, x) > 0) for (var _r2 = n; _r2 < t; _r2 += x) {
          i = u(_r2, e[_r2], e[_r2 + 1], i);
        } else for (var _r3 = t - x; _r3 >= n; _r3 -= x) {
          i = u(_r3, e[_r3], e[_r3 + 1], i);
        }
        return i && a(i, i.next) && (o(i), i = i.next), i;
      }

      function t(e) {
        var n = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : e;
        if (!e) return e;
        var t,
            x = e;

        do {
          if (t = !1, x.steiner || !a(x, x.next) && 0 !== c(x.prev, x, x.next)) x = x.next;else {
            if (o(x), x = n = x.prev, x === x.next) break;
            t = !0;
          }
        } while (t || x !== n);

        return n;
      }

      function x(e, n, u, l, f, p) {
        var c = arguments.length > 6 && arguments[6] !== undefined ? arguments[6] : 0;
        if (!e) return;
        !c && p && (e = y(e, l, f, p));
        var v = e;

        for (; e.prev !== e.next;) {
          var _y = e.prev,
              _s = e.next;
          if (p ? i(e, l, f, p) : r(e)) n.push(_y.index / u), n.push(e.index / u), n.push(_s.index / u), o(e), e = _s.next, v = _s.next;else if ((e = _s) === v) {
            c ? 1 === c ? x(e = g(e, n, u), n, u, l, f, p, 2) : 2 === c && M(e, n, u, l, f, p) : x(t(e), n, u, l, f, p, 1);
            break;
          }
        }
      }

      function r(e) {
        var n = e.prev,
            t = e,
            x = e.next;
        if (c(n, t, x) >= 0) return !1;
        var r = e.next.next;
        var i = r;
        var u = 0;

        for (; r !== e.prev && (0 === u || r !== i);) {
          if (u++, h(n.x, n.y, t.x, t.y, x.x, x.y, r.x, r.y) && c(r.prev, r, r.next) >= 0) return !1;
          r = r.next;
        }

        return !0;
      }

      function i(e, n, t, x) {
        var r = e.prev,
            i = e,
            u = e.next;
        if (c(r, i, u) >= 0) return !1;
        var o = r.x < i.x ? r.x < u.x ? r.x : u.x : i.x < u.x ? i.x : u.x,
            l = r.y < i.y ? r.y < u.y ? r.y : u.y : i.y < u.y ? i.y : u.y,
            f = r.x > i.x ? r.x > u.x ? r.x : u.x : i.x > u.x ? i.x : u.x,
            y = r.y > i.y ? r.y > u.y ? r.y : u.y : i.y > u.y ? i.y : u.y,
            p = Z(o, l, n, t, x),
            v = Z(f, y, n, t, x);
        var s = e.prevZ,
            d = e.nextZ;

        for (; s && s.z >= p && d && d.z <= v;) {
          if (s !== e.prev && s !== e.next && h(r.x, r.y, i.x, i.y, u.x, u.y, s.x, s.y) && c(s.prev, s, s.next) >= 0) return !1;
          if (s = s.prevZ, d !== e.prev && d !== e.next && h(r.x, r.y, i.x, i.y, u.x, u.y, d.x, d.y) && c(d.prev, d, d.next) >= 0) return !1;
          d = d.nextZ;
        }

        for (; s && s.z >= p;) {
          if (s !== e.prev && s !== e.next && h(r.x, r.y, i.x, i.y, u.x, u.y, s.x, s.y) && c(s.prev, s, s.next) >= 0) return !1;
          s = s.prevZ;
        }

        for (; d && d.z <= v;) {
          if (d !== e.prev && d !== e.next && h(r.x, r.y, i.x, i.y, u.x, u.y, d.x, d.y) && c(d.prev, d, d.next) >= 0) return !1;
          d = d.nextZ;
        }

        return !0;
      }

      function u(e, n, t, x) {
        var r = new m(e, n, t);
        return x ? (r.next = x.next, r.prev = x, x.next.prev = r, x.next = r) : (r.prev = r, r.next = r), r;
      }

      function o(e) {
        e.next.prev = e.prev, e.prev.next = e.next, e.prevZ && (e.prevZ.nextZ = e.nextZ), e.nextZ && (e.nextZ.prevZ = e.prevZ);
      }

      function l(e) {
        var n = e,
            t = e;

        do {
          (n.x < t.x || n.x === t.x && n.y < t.y) && (t = n), n = n.next;
        } while (n !== e);

        return t;
      }

      function f(e, n) {
        if (n = function (e, n) {
          var t = n;
          var x = e.x,
              r = e.y;
          var i,
              u = -1 / 0;

          do {
            if (r <= t.y && r >= t.next.y && t.next.y !== t.y) {
              var _e2 = t.x + (r - t.y) * (t.next.x - t.x) / (t.next.y - t.y);

              if (_e2 <= x && _e2 > u) {
                if (u = _e2, _e2 === x) {
                  if (r === t.y) return t;
                  if (r === t.next.y) return t.next;
                }

                i = t.x < t.next.x ? t : t.next;
              }
            }

            t = t.next;
          } while (t !== n);

          if (!i) return null;
          if (x === u) return i.prev;
          var o = i,
              l = i.x,
              f = i.y;
          var y,
              p = 1 / 0;
          t = i.next;

          for (; t !== o;) {
            x >= t.x && t.x >= l && x !== t.x && h(r < f ? x : u, r, l, f, r < f ? u : x, r, t.x, t.y) && (y = Math.abs(r - t.y) / (x - t.x), (y < p || y === p && t.x > i.x) && d(t, e) && (i = t, p = y)), t = t.next;
          }

          return i;
        }(e, n)) {
          var _x2 = b(n, e);

          t(_x2, _x2.next);
        }
      }

      function y(e, n, t, x) {
        for (var _r4; _r4 !== e; _r4 = _r4.next) {
          if (_r4 = _r4 || e, null === _r4.z && (_r4.z = Z(_r4.x, _r4.y, n, t, x)), _r4.prev.next !== _r4 || _r4.next.prev !== _r4) return _r4.prev.next = _r4, _r4.next.prev = _r4, y(e, n, t, x);
          _r4.prevZ = _r4.prev, _r4.nextZ = _r4.next;
        }

        return e.prevZ.nextZ = null, e.prevZ = null, function (e) {
          var n,
              t = 1;

          for (;;) {
            var _x3 = void 0,
                _r5 = e;

            e = null, n = null;
            var _i2 = 0;

            for (; _r5;) {
              _i2++, _x3 = _r5;
              var _u2 = 0;

              for (; _u2 < t && _x3; _u2++) {
                _x3 = _x3.nextZ;
              }

              var _o2 = t;

              for (; _u2 > 0 || _o2 > 0 && _x3;) {
                var _t3 = void 0;

                0 === _u2 ? (_t3 = _x3, _x3 = _x3.nextZ, _o2--) : 0 !== _o2 && _x3 ? _r5.z <= _x3.z ? (_t3 = _r5, _r5 = _r5.nextZ, _u2--) : (_t3 = _x3, _x3 = _x3.nextZ, _o2--) : (_t3 = _r5, _r5 = _r5.nextZ, _u2--), n ? n.nextZ = _t3 : e = _t3, _t3.prevZ = n, n = _t3;
              }

              _r5 = _x3;
            }

            if (n.nextZ = null, t *= 2, _i2 < 2) return e;
          }
        }(e);
      }

      function p(e, n, t, x) {
        var r = n && n.length,
            i = r ? n[0] * t : e.length;
        var u = Math.abs(s(e, 0, i, t));
        if (r) for (var _x4 = 0, _r6 = n.length; _x4 < _r6; _x4++) {
          var _i3 = n[_x4] * t,
              _o3 = _x4 < _r6 - 1 ? n[_x4 + 1] * t : e.length;

          u -= Math.abs(s(e, _i3, _o3, t));
        }
        var o = 0;

        for (var _n2 = 0; _n2 < x.length; _n2 += 3) {
          var _r7 = x[_n2] * t,
              _i4 = x[_n2 + 1] * t,
              _u3 = x[_n2 + 2] * t;

          o += Math.abs((e[_r7] - e[_u3]) * (e[_i4 + 1] - e[_r7 + 1]) - (e[_r7] - e[_i4]) * (e[_u3 + 1] - e[_r7 + 1]));
        }

        return 0 === u && 0 === o ? 0 : Math.abs((o - u) / u);
      }

      function c(e, n, t) {
        return (n.y - e.y) * (t.x - n.x) - (n.x - e.x) * (t.y - n.y);
      }

      function v(e, n, t, x) {
        return !!(a(e, n) && a(t, x) || a(e, x) && a(t, n)) || c(e, n, t) > 0 != c(e, n, x) > 0 && c(t, x, e) > 0 != c(t, x, n) > 0;
      }

      function s(e, n, t, x) {
        var r = 0;

        for (var _i5 = n, _u4 = t - x; _i5 < t; _i5 += x) {
          r += (e[_u4] - e[_i5]) * (e[_i5 + 1] + e[_u4 + 1]), _u4 = _i5;
        }

        return r;
      }

      function h(e, n, t, x, r, i, u, o) {
        return (r - u) * (n - o) - (e - u) * (i - o) >= 0 && (e - u) * (x - o) - (t - u) * (n - o) >= 0 && (t - u) * (i - o) - (r - u) * (x - o) >= 0;
      }

      function d(e, n) {
        return c(e.prev, e, e.next) < 0 ? c(e, n, e.next) >= 0 && c(e, e.prev, n) >= 0 : c(e, n, e.prev) < 0 || c(e, e.next, n) < 0;
      }

      function Z(e, n, t, x, r) {
        return (e = 1431655765 & ((e = 858993459 & ((e = 252645135 & ((e = 16711935 & ((e = 32767 * (e - t) * r) | e << 8)) | e << 4)) | e << 2)) | e << 1)) | (n = 1431655765 & ((n = 858993459 & ((n = 252645135 & ((n = 16711935 & ((n = 32767 * (n - x) * r) | n << 8)) | n << 4)) | n << 2)) | n << 1)) << 1;
      }

      function a(e, n) {
        return e.x === n.x && e.y === n.y;
      }

      function w(e, n) {
        return e.x - n.x;
      }

      function g(e, n, t) {
        var x = e;

        do {
          var _r8 = x.prev,
              _i6 = x.next.next;
          !a(_r8, _i6) && v(_r8, x, x.next, _i6) && d(_r8, _i6) && d(_i6, _r8) && (n.push(_r8.index / t), n.push(x.index / t), n.push(_i6.index / t), o(x), o(x.next), x = e = _i6), x = x.next;
        } while (x !== e);

        return x;
      }

      function M(e, n, r, i, u, o) {
        var l = e;

        do {
          var _e3 = l.next.next;

          for (; _e3 !== l.prev;) {
            if (l.index !== _e3.index && z(l, _e3)) {
              var _f = b(l, _e3);

              return l = t(l, l.next), _f = t(_f, _f.next), x(l, n, r, i, u, o), void x(_f, n, r, i, u, o);
            }

            _e3 = _e3.next;
          }

          l = l.next;
        } while (l !== e);
      }

      function z(e, n) {
        return e.next.index !== n.index && e.prev.index !== n.index && !function (e, n) {
          var t = e;

          do {
            if (t.index !== e.index && t.next.index !== e.index && t.index !== n.index && t.next.index !== n.index && v(t, t.next, e, n)) return !0;
            t = t.next;
          } while (t !== e);

          return !1;
        }(e, n) && d(e, n) && d(n, e) && function (e, n) {
          var t = e,
              x = !1;
          var r = (e.x + n.x) / 2,
              i = (e.y + n.y) / 2;

          do {
            t.y > i != t.next.y > i && t.next.y !== t.y && r < (t.next.x - t.x) * (i - t.y) / (t.next.y - t.y) + t.x && (x = !x), t = t.next;
          } while (t !== e);

          return x;
        }(e, n);
      }

      function b(e, n) {
        var t = new m(e.index, e.x, e.y),
            x = new m(n.index, n.x, n.y),
            r = e.next,
            i = n.prev;
        return e.next = n, n.prev = e, t.next = r, r.prev = t, x.next = t, t.prev = x, i.next = x, x.prev = i, x;
      }

      var m = function m(e, n, t) {
        _classCallCheck(this, m);

        this.index = e, this.x = n, this.y = t, this.prev = null, this.next = null, this.z = null, this.prevZ = null, this.nextZ = null, this.steiner = !1;
      };
      /***/

    },

    /***/
    "2yHJ":
    /*!**************************************************************************************!*\
      !*** ./node_modules/@arcgis/core/views/2d/engine/vectorTiles/decluttering/config.js ***!
      \**************************************************************************************/

    /*! exports provided: COLLISION_GRID_CELL_SIZE, DECLUTTER_BUDGET, DECLUTTER_TILES, FADE_DURATION */

    /***/
    function yHJ(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "COLLISION_GRID_CELL_SIZE", function () {
        return t;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "DECLUTTER_BUDGET", function () {
        return c;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "DECLUTTER_TILES", function () {
        return o;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "FADE_DURATION", function () {
        return e;
      });
      /*
      All material copyright ESRI, All Rights Reserved, unless otherwise specified.
      See https://js.arcgis.com/4.18/esri/copyright.txt for details.
      */


      var o = !0,
          t = 32,
          c = 1.5,
          e = 200;
      /***/
    },

    /***/
    "3kKw":
    /*!*****************************************************************************!*\
      !*** ./node_modules/@arcgis/core/views/2d/engine/vectorTiles/FillBucket.js ***!
      \*****************************************************************************/

    /*! exports provided: default */

    /***/
    function kKw(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony import */


      var _core_ArrayPool_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ../../../../core/ArrayPool.js */
      "VW+2");
      /* harmony import */


      var _core_libs_earcut_earcut_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ../../../../core/libs/earcut/earcut.js */
      "+yyC");
      /* harmony import */


      var _webgl_Geometry_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ../webgl/Geometry.js */
      "OXZQ");
      /* harmony import */


      var _webgl_mesh_Tesselator_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ../webgl/mesh/Tesselator.js */
      "6NBT");
      /* harmony import */


      var _BaseBucket_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ./BaseBucket.js */
      "xN0w");
      /*
      All material copyright ESRI, All Rights Reserved, unless otherwise specified.
      See https://js.arcgis.com/4.18/esri/copyright.txt for details.
      */


      var o = new _webgl_mesh_Tesselator_js__WEBPACK_IMPORTED_MODULE_3__["default"]();

      var a = /*#__PURE__*/function (_BaseBucket_js__WEBPA) {
        _inherits(a, _BaseBucket_js__WEBPA);

        var _super = _createSuper(a);

        function a(e, t, l, i, r, n) {
          var _this;

          _classCallCheck(this, a);

          if (_this = _super.call(this, e, t), _this.type = 1, e.hasDataDrivenFill !== l.isDataDriven()) throw new Error("incompatible fill buffer");
          if (e.hasDataDrivenOutline !== r.isDataDriven()) throw new Error("incompatible outline buffer");
          _this._fillVertexBuffer = l, _this._fillIndexBuffer = i, _this._outlineVertexBuffer = r, _this._outlineIndexBuffer = n;
          return _possibleConstructorReturn(_this);
        }

        _createClass(a, [{
          key: "fillIndexStart",
          get: function get() {
            return this._fillIndexStart;
          }
        }, {
          key: "fillIndexCount",
          get: function get() {
            return this._fillIndexCount;
          }
        }, {
          key: "outlineIndexStart",
          get: function get() {
            return this._outlineIndexStart;
          }
        }, {
          key: "outlineIndexCount",
          get: function get() {
            return this._outlineIndexCount;
          }
        }, {
          key: "processFeatures",
          value: function processFeatures(e) {
            this._fillIndexStart = 3 * this._fillIndexBuffer.index, this._fillIndexCount = 0, this._outlineIndexStart = 3 * this._outlineIndexBuffer.index, this._outlineIndexCount = 0;
            var t = this.layer,
                l = this.zoom,
                i = t.hasDataDrivenFill,
                r = t.hasDataDrivenOutline;
            e && e.setExtent(this.layerExtent);
            var n = t.getPaintValue("fill-pattern", l);
            var o = t.getPaintValue("fill-antialias", l) && void 0 === n,
                _a = [1, 1, 1, 1],
                s = [1, 1, 1, 1],
                f = 1;

            if (t.outlineUsesFillColor) {
              if (o && !t.hasDataDrivenOpacity) {
                var _e4 = t.getPaintValue("fill-opacity", l),
                    _i7 = t.getPaintValue("fill-opacity", l + 1);

                _e4 < 1 && _i7 < 1 && (o = !1);
              }

              if (o && !t.hasDataDrivenColor) {
                var _e5 = t.getPaintValue("fill-color", l),
                    _i8 = t.getPaintValue("fill-color", l + 1);

                _e5[3] < 1 && _i8[3] < 1 && (o = !1);
              }
            }

            var _iterator = _createForOfIteratorHelper(this._features),
                _step;

            try {
              for (_iterator.s(); !(_step = _iterator.n()).done;) {
                var u = _step.value;
                var h = void 0,
                    d = void 0;
                !n && t.hasDataDrivenColor && (_a = t.getPaintValue("fill-color", l, u)), t.hasDataDrivenOpacity && (f = t.getPaintValue("fill-opacity", l, u)), !n && t.hasDataDrivenOutlineColor && (s = t.getPaintValue("fill-outline-color", l, u)), i && (h = {
                  color: _a,
                  opacity: f
                }), r && (d = {
                  color: t.outlineUsesFillColor ? _a : s,
                  opacity: f
                });
                var x = u.getGeometry(e),
                    y = null == e ? void 0 : e.validateTessellation;

                this._processFeature(x, o, t.outlineUsesFillColor, h, d, y);
              }
            } catch (err) {
              _iterator.e(err);
            } finally {
              _iterator.f();
            }
          }
        }, {
          key: "serialize",
          value: function serialize() {
            var e = 12;
            e += this.layerUIDs.length, e += this._fillVertexBuffer.array.length, e += this._fillIndexBuffer.array.length, e += this._outlineVertexBuffer.array.length, e += this._outlineIndexBuffer.array.length;
            var t = 0;
            var l = new Uint32Array(e),
                i = new Int32Array(l.buffer);
            l[t++] = this.type, l[t++] = this.layerUIDs.length;

            for (var _e6 = 0; _e6 < this.layerUIDs.length; _e6++) {
              l[t++] = this.layerUIDs[_e6];
            }

            l[t++] = this._fillIndexStart, l[t++] = this._fillIndexCount, l[t++] = this._outlineIndexStart, l[t++] = this._outlineIndexCount, l[t++] = this._fillVertexBuffer.isDataDriven() ? 1 : 0, l[t++] = this._outlineVertexBuffer.isDataDriven() ? 1 : 0, l[t++] = this._fillVertexBuffer.array.length;

            for (var _e7 = 0; _e7 < this._fillVertexBuffer.array.length; _e7++) {
              i[t++] = this._fillVertexBuffer.array[_e7];
            }

            l[t++] = this._fillIndexBuffer.array.length;

            for (var _e8 = 0; _e8 < this._fillIndexBuffer.array.length; _e8++) {
              l[t++] = this._fillIndexBuffer.array[_e8];
            }

            l[t++] = this._outlineVertexBuffer.array.length;

            for (var _e9 = 0; _e9 < this._outlineVertexBuffer.array.length; _e9++) {
              i[t++] = this._outlineVertexBuffer.array[_e9];
            }

            l[t++] = this._outlineIndexBuffer.array.length;

            for (var _e10 = 0; _e10 < this._outlineIndexBuffer.array.length; _e10++) {
              l[t++] = this._outlineIndexBuffer.array[_e10];
            }

            return l.buffer;
          }
        }, {
          key: "_processFeature",
          value: function _processFeature(e, t, l, i, r, n) {
            if (!e) return;
            var o = e.length;
            if (t && (!l || !r || r.color[3] * r.opacity == 1)) for (var _t4 = 0; _t4 < o; _t4++) {
              this._processOutline(e[_t4], r);
            }
            var s;

            for (var _t5 = 0; _t5 < o; _t5++) {
              var _l = a._area(e[_t5]);

              _l > 128 ? (void 0 !== s && this._processFill(e, s, i, n), s = [_t5]) : _l < -128 && void 0 !== s && s.push(_t5);
            }

            void 0 !== s && this._processFill(e, s, i, n);
          }
        }, {
          key: "_processOutline",
          value: function _processOutline(e, t) {
            var l = this._outlineVertexBuffer,
                r = this._outlineIndexBuffer,
                n = r.index;

            var o, _a2, s;

            var f = new _webgl_Geometry_js__WEBPACK_IMPORTED_MODULE_2__["Point"](0, 0),
                u = new _webgl_Geometry_js__WEBPACK_IMPORTED_MODULE_2__["Point"](0, 0),
                h = new _webgl_Geometry_js__WEBPACK_IMPORTED_MODULE_2__["Point"](0, 0);

            var d = -1,
                x = -1,
                y = -1,
                c = -1,
                _ = -1,
                g = !1;

            var I = e.length;
            if (I < 2) return;
            var p = e[0];
            var B = e[I - 1];

            for (; I && B.isEqual(p);) {
              --I, B = e[I - 1];
            }

            if (!(I - 0 < 2)) {
              for (var i = 0; i < I; ++i) {
                0 === i ? (o = e[I - 1], _a2 = e[0], s = e[1], f.assignSub(_a2, o), f.normalize(), f.rightPerpendicular()) : (o = _a2, _a2 = s, s = i !== I - 1 ? e[i + 1] : e[0], f.assign(u));

                var _n3 = this._isClipEdge(o, _a2);

                -1 === c && (g = _n3), u.assignSub(s, _a2), u.normalize(), u.rightPerpendicular();

                var _p = f.x * u.y - f.y * u.x;

                h.assignAdd(f, u), h.normalize();

                var _B = -h.x * -f.x + -h.y * -f.y;

                var D = Math.abs(0 !== _B ? 1 / _B : 1);
                D > 8 && (D = 8), _p >= 0 ? (y = l.add(_a2.x, _a2.y, f.x, f.y, 0, 1, t), -1 === c && (c = y), d >= 0 && x >= 0 && y >= 0 && !_n3 && r.add(d, x, y), x = l.add(_a2.x, _a2.y, D * -h.x, D * -h.y, 0, -1, t), -1 === _ && (_ = x), d >= 0 && x >= 0 && y >= 0 && !_n3 && r.add(d, x, y), d = x, x = y, y = l.add(_a2.x, _a2.y, h.x, h.y, 0, 1, t), d >= 0 && x >= 0 && y >= 0 && !_n3 && r.add(d, x, y), x = l.add(_a2.x, _a2.y, u.x, u.y, 0, 1, t), d >= 0 && x >= 0 && y >= 0 && !_n3 && r.add(d, x, y)) : (y = l.add(_a2.x, _a2.y, D * h.x, D * h.y, 0, 1, t), -1 === c && (c = y), d >= 0 && x >= 0 && y >= 0 && !_n3 && r.add(d, x, y), x = l.add(_a2.x, _a2.y, -f.x, -f.y, 0, -1, t), -1 === _ && (_ = x), d >= 0 && x >= 0 && y >= 0 && !_n3 && r.add(d, x, y), d = x, x = y, y = l.add(_a2.x, _a2.y, -h.x, -h.y, 0, -1, t), d >= 0 && x >= 0 && y >= 0 && !_n3 && r.add(d, x, y), d = l.add(_a2.x, _a2.y, -u.x, -u.y, 0, -1, t), d >= 0 && x >= 0 && y >= 0 && !_n3 && r.add(d, x, y));
              }

              d >= 0 && x >= 0 && c >= 0 && !g && r.add(d, x, c), d >= 0 && c >= 0 && _ >= 0 && !g && r.add(d, _, c), this._outlineIndexCount += 3 * (r.index - n);
            }
          }
        }, {
          key: "_processFill",
          value: function _processFill(i, r, n, _a3) {
            var s;
            r.length > 1 && (s = []);
            var f = 0;

            var _iterator2 = _createForOfIteratorHelper(r),
                _step2;

            try {
              for (_iterator2.s(); !(_step2 = _iterator2.n()).done;) {
                var _e14 = _step2.value;
                0 !== f && s.push(f), f += i[_e14].length;
              }
            } catch (err) {
              _iterator2.e(err);
            } finally {
              _iterator2.f();
            }

            var u = 2 * f,
                h = _core_ArrayPool_js__WEBPACK_IMPORTED_MODULE_0__["default"].acquire();

            var _iterator3 = _createForOfIteratorHelper(r),
                _step3;

            try {
              for (_iterator3.s(); !(_step3 = _iterator3.n()).done;) {
                var _e15 = _step3.value;
                var _t8 = i[_e15],
                    _l4 = _t8.length;

                for (var _e16 = 0; _e16 < _l4; ++_e16) {
                  h.push(_t8[_e16].x, _t8[_e16].y);
                }
              }
            } catch (err) {
              _iterator3.e(err);
            } finally {
              _iterator3.f();
            }

            var d = Object(_core_libs_earcut_earcut_js__WEBPACK_IMPORTED_MODULE_1__["earcut"])(h, s, 2);

            if (_a3 && Object(_core_libs_earcut_earcut_js__WEBPACK_IMPORTED_MODULE_1__["deviation"])(h, s, 2, d) > 0) {
              var e = [],
                  t = [];

              if (function (e, t, l, i) {
                var r, n;
                o.beginPolygon(e, t);

                var _iterator4 = _createForOfIteratorHelper(i),
                    _step4;

                try {
                  for (_iterator4.s(); !(_step4 = _iterator4.n()).done;) {
                    var _e11 = _step4.value;
                    var _t6 = l[_e11];

                    if (!(_t6.length < 3)) {
                      o.beginContour();

                      for (var _e12 = 0; _e12 < _t6.length; ++_e12) {
                        r = _t6[_e12].x, n = _t6[_e12].y;
                        var _l2 = [r, n, 0];
                        o.addVertex(_l2, _l2);
                      }

                      o.endContour();
                    }
                  }
                } catch (err) {
                  _iterator4.e(err);
                } finally {
                  _iterator4.f();
                }

                o.endPolygon();
              }(e, t, i, r), t.length > 0) {
                var l = this._fillVertexBuffer.index;
                var _i9 = 0;

                for (; _i9 < e.length;) {
                  this._fillVertexBuffer.add(e[_i9++], e[_i9++], n);
                }

                var _r9 = 0;

                for (; _r9 < t.length;) {
                  this._fillIndexBuffer.add(l + t[_r9 + 0], l + t[_r9 + 1], l + t[_r9 + 2]), _r9 += 3;
                }

                this._fillIndexCount += t.length;
              }
            } else {
              var _e13 = d.length;

              if (_e13 > 0) {
                var _t7 = this._fillVertexBuffer.index;
                var _l3 = 0;

                for (; _l3 < u;) {
                  this._fillVertexBuffer.add(h[_l3++], h[_l3++], n);
                }

                var _i10 = 0;

                for (; _i10 < _e13;) {
                  this._fillIndexBuffer.add(_t7 + d[_i10++], _t7 + d[_i10++], _t7 + d[_i10++]);
                }

                this._fillIndexCount += _e13;
              }
            }

            _core_ArrayPool_js__WEBPACK_IMPORTED_MODULE_0__["default"].release(h);
          }
        }, {
          key: "_isClipEdge",
          value: function _isClipEdge(e, t) {
            return e.x === t.x ? e.x <= -64 || e.x >= 4160 : e.y === t.y && (e.y <= -64 || e.y >= 4160);
          }
        }], [{
          key: "_area",
          value: function _area(e) {
            var t = 0;
            var l = e.length - 1;

            for (var i = 0; i < l; i++) {
              t += (e[i].x - e[i + 1].x) * (e[i].y + e[i + 1].y);
            }

            return t += (e[l].x - e[0].x) * (e[l].y + e[0].y), .5 * t;
          }
        }]);

        return a;
      }(_BaseBucket_js__WEBPACK_IMPORTED_MODULE_4__["default"]);
      /* harmony default export */


      __webpack_exports__["default"] = a;
      /***/
    },

    /***/
    "4FHc":
    /*!************************************************************************************!*\
      !*** ./node_modules/@arcgis/core/views/2d/engine/vectorTiles/IndexMemoryBuffer.js ***!
      \************************************************************************************/

    /*! exports provided: PointElementMemoryBuffer, TriangleIndexBuffer */

    /***/
    function FHc(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "PointElementMemoryBuffer", function () {
        return t;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "TriangleIndexBuffer", function () {
        return r;
      });
      /* harmony import */


      var _MemoryBuffer_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ./MemoryBuffer.js */
      "rgtN");
      /*
      All material copyright ESRI, All Rights Reserved, unless otherwise specified.
      See https://js.arcgis.com/4.18/esri/copyright.txt for details.
      */


      var r = /*#__PURE__*/function (_MemoryBuffer_js__WEB) {
        _inherits(r, _MemoryBuffer_js__WEB);

        var _super2 = _createSuper(r);

        function r() {
          _classCallCheck(this, r);

          return _super2.call(this, 12);
        }

        _createClass(r, [{
          key: "add",
          value: function add(s, _r10, t) {
            var e = this.array;
            e.push(s), e.push(_r10), e.push(t);
          }
        }]);

        return r;
      }(_MemoryBuffer_js__WEBPACK_IMPORTED_MODULE_0__["default"]);

      var t = /*#__PURE__*/function (_MemoryBuffer_js__WEB2) {
        _inherits(t, _MemoryBuffer_js__WEB2);

        var _super3 = _createSuper(t);

        function t() {
          _classCallCheck(this, t);

          return _super3.call(this, 4);
        }

        _createClass(t, [{
          key: "add",
          value: function add(s) {
            this.array.push(s);
          }
        }]);

        return t;
      }(_MemoryBuffer_js__WEBPACK_IMPORTED_MODULE_0__["default"]);
      /***/

    },

    /***/
    "8NBV":
    /*!**********************************************************************************!*\
      !*** ./node_modules/@arcgis/core/views/2d/engine/vectorTiles/SourceLayerData.js ***!
      \**********************************************************************************/

    /*! exports provided: default */

    /***/
    function NBV(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /*
      All material copyright ESRI, All Rights Reserved, unless otherwise specified.
      See https://js.arcgis.com/4.18/esri/copyright.txt for details.
      */


      var e = /*#__PURE__*/function () {
        function e(t) {
          _classCallCheck(this, e);

          for (this.extent = 4096, this.keys = [], this.values = [], this._pbfLayer = t.clone(); t.next();) {
            switch (t.tag()) {
              case 1:
                this.name = t.getString();
                break;

              case 3:
                this.keys.push(t.getString());
                break;

              case 4:
                this.values.push(t.processMessage(e._parseValue));
                break;

              case 5:
                this.extent = t.getUInt32();
                break;

              default:
                t.skip();
            }
          }
        }

        _createClass(e, [{
          key: "getData",
          value: function getData() {
            return this._pbfLayer;
          }
        }], [{
          key: "_parseValue",
          value: function _parseValue(_e17) {
            for (; _e17.next();) {
              switch (_e17.tag()) {
                case 1:
                  return _e17.getString();

                case 2:
                  return _e17.getFloat();

                case 3:
                  return _e17.getDouble();

                case 4:
                  return _e17.getInt64();

                case 5:
                  return _e17.getUInt64();

                case 6:
                  return _e17.getSInt64();

                case 7:
                  return _e17.getBool();

                default:
                  _e17.skip();

              }
            }

            return null;
          }
        }]);

        return e;
      }();
      /* harmony default export */


      __webpack_exports__["default"] = e;
      /***/
    },

    /***/
    "HQFP":
    /*!**************************************************************************!*\
      !*** ./node_modules/@arcgis/core/views/2d/engine/webgl/GeometryUtils.js ***!
      \**************************************************************************/

    /*! exports provided: C_256_TO_RAD, C_2PI, C_DEG_TO_256, C_DEG_TO_RAD, C_INFINITY, C_PI, C_PI_BY_2, C_RAD_TO_256, C_SQRT2, C_SQRT2_INV, between, degToByte, interpolate, log2, positiveMod, radToByte, sqr */

    /***/
    function HQFP(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "C_256_TO_RAD", function () {
        return e;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "C_2PI", function () {
        return r;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "C_DEG_TO_256", function () {
        return c;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "C_DEG_TO_RAD", function () {
        return f;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "C_INFINITY", function () {
        return n;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "C_PI", function () {
        return t;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "C_PI_BY_2", function () {
        return u;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "C_RAD_TO_256", function () {
        return o;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "C_SQRT2", function () {
        return i;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "C_SQRT2_INV", function () {
        return I;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "between", function () {
        return g;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "degToByte", function () {
        return M;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "interpolate", function () {
        return b;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "log2", function () {
        return P;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "positiveMod", function () {
        return a;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "radToByte", function () {
        return h;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "sqr", function () {
        return T;
      });
      /*
      All material copyright ESRI, All Rights Reserved, unless otherwise specified.
      See https://js.arcgis.com/4.18/esri/copyright.txt for details.
      */


      var n = Number.POSITIVE_INFINITY,
          t = Math.PI,
          r = 2 * t,
          u = t / 2,
          o = 128 / t,
          e = t / 128,
          c = 256 / 360,
          f = t / 180,
          i = 1.414213562,
          I = 1 / 1.414213562,
          N = 1 / Math.LN2;

      function a(n, t) {
        return (n %= t) >= 0 ? n : n + t;
      }

      function h(n) {
        return a(n * o, 256);
      }

      function M(n) {
        return a(.7111111111111111 * n, 256);
      }

      function P(n) {
        return Math.log(n) * N;
      }

      function T(n) {
        return n * n;
      }

      function b(n, t, r) {
        return n * (1 - r) + t * r;
      }

      function g(n, t, r) {
        return n >= t && n <= r || n >= r && n <= t;
      }
      /***/

    },

    /***/
    "IMID":
    /*!*****************************************************************************!*\
      !*** ./node_modules/@arcgis/core/views/2d/engine/vectorTiles/WorkerTile.js ***!
      \*****************************************************************************/

    /*! exports provided: default */

    /***/
    function IMID(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony import */


      var _core_maybe_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ../../../../core/maybe.js */
      "srIe");
      /* harmony import */


      var _core_promiseUtils_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ../../../../core/promiseUtils.js */
      "9MzC");
      /* harmony import */


      var _tiling_enums_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ../../tiling/enums.js */
      "zJVD");
      /* harmony import */


      var _Placement_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./Placement.js */
      "ixhk");
      /* harmony import */


      var _TileParser_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ./TileParser.js */
      "mKU8");
      /*
      All material copyright ESRI, All Rights Reserved, unless otherwise specified.
      See https://js.arcgis.com/4.18/esri/copyright.txt for details.
      */

      /* harmony default export */


      __webpack_exports__["default"] = /*#__PURE__*/function () {
        function _class(e, t, i, n) {
          _classCallCheck(this, _class);

          this.status = _tiling_enums_js__WEBPACK_IMPORTED_MODULE_2__["TileStatus"].INITIALIZED, this.placementEngine = new _Placement_js__WEBPACK_IMPORTED_MODULE_3__["PlacementEngine"](), this.tileKey = e, this.refKeys = t, this._workerTileHandler = i, this._styleRepository = n;
        }

        _createClass(_class, [{
          key: "release",
          value: function release() {
            this.tileKey = "", this.refKeys = null, this.status = _tiling_enums_js__WEBPACK_IMPORTED_MODULE_2__["TileStatus"].INITIALIZED, this._workerTileHandler = null;
          }
        }, {
          key: "parse",
          value: function () {
            var _parse2 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(r, i, n) {
              var _this2 = this;

              var a, e, o, l, _iterator5, _step5, _e18, t;

              return regeneratorRuntime.wrap(function _callee$(_context) {
                while (1) {
                  switch (_context.prev = _context.next) {
                    case 0:
                      a = n && n.signal;

                      if (Object(_core_maybe_js__WEBPACK_IMPORTED_MODULE_0__["isSome"])(a)) {
                        e = function e() {
                          a.removeEventListener("abort", e), _this2.status = _tiling_enums_js__WEBPACK_IMPORTED_MODULE_2__["TileStatus"].INVALID;
                        };

                        a.addEventListener("abort", e);
                      }

                      _context.prev = 2;
                      _context.next = 5;
                      return this._parse(r, n);

                    case 5:
                      o = _context.sent;
                      _context.next = 13;
                      break;

                    case 8:
                      _context.prev = 8;
                      _context.t0 = _context["catch"](2);

                      if (!Object(_core_promiseUtils_js__WEBPACK_IMPORTED_MODULE_1__["isAbortError"])(_context.t0)) {
                        _context.next = 12;
                        break;
                      }

                      throw _context.t0;

                    case 12:
                      return _context.abrupt("return", {
                        result: [],
                        transferList: []
                      });

                    case 13:
                      this.status = _tiling_enums_js__WEBPACK_IMPORTED_MODULE_2__["TileStatus"].READY;
                      l = [];
                      _iterator5 = _createForOfIteratorHelper(o);

                      try {
                        for (_iterator5.s(); !(_step5 = _iterator5.n()).done;) {
                          _e18 = _step5.value;
                          t = _e18.serialize();
                          l.push(t);
                        }
                      } catch (err) {
                        _iterator5.e(err);
                      } finally {
                        _iterator5.f();
                      }

                      return _context.abrupt("return", {
                        result: l,
                        transferList: l.length <= i && l
                      });

                    case 18:
                    case "end":
                      return _context.stop();
                  }
                }
              }, _callee, this, [[2, 8]]);
            }));

            function parse(_x5, _x6, _x7) {
              return _parse2.apply(this, arguments);
            }

            return parse;
          }()
        }, {
          key: "setObsolete",
          value: function setObsolete() {
            this.status = _tiling_enums_js__WEBPACK_IMPORTED_MODULE_2__["TileStatus"].INVALID;
          }
        }, {
          key: "getLayers",
          value: function getLayers() {
            return this._workerTileHandler.getLayers();
          }
        }, {
          key: "getWorkerTileHandler",
          value: function getWorkerTileHandler() {
            return this._workerTileHandler;
          }
        }, {
          key: "_parse",
          value: function () {
            var _parse3 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee2(e, t) {
              var r;
              return regeneratorRuntime.wrap(function _callee2$(_context2) {
                while (1) {
                  switch (_context2.prev = _context2.next) {
                    case 0:
                      r = e.sourceName2DataAndRefKey;

                      if (!(0 === Object.keys(r).length)) {
                        _context2.next = 3;
                        break;
                      }

                      return _context2.abrupt("return", []);

                    case 3:
                      this.status = _tiling_enums_js__WEBPACK_IMPORTED_MODULE_2__["TileStatus"].MODIFIED;
                      return _context2.abrupt("return", new _TileParser_js__WEBPACK_IMPORTED_MODULE_4__["default"](r, this, t.client, this._styleRepository, e.styleLayerUIDs).parse(t));

                    case 5:
                    case "end":
                      return _context2.stop();
                  }
                }
              }, _callee2, this);
            }));

            function _parse(_x8, _x9) {
              return _parse3.apply(this, arguments);
            }

            return _parse;
          }()
        }]);

        return _class;
      }();
      /***/

    },

    /***/
    "IqUe":
    /*!*****************************************************************************!*\
      !*** ./node_modules/@arcgis/core/views/2d/engine/vectorTiles/LineBucket.js ***!
      \*****************************************************************************/

    /*! exports provided: default */

    /***/
    function IqUe(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony import */


      var _core_has_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ../../../../core/has.js */
      "wSAH");
      /* harmony import */


      var _webgl_mesh_templates_util_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ../webgl/mesh/templates/util.js */
      "aixI");
      /* harmony import */


      var _webgl_TurboLine_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ../webgl/TurboLine.js */
      "Jimw");
      /* harmony import */


      var _BaseBucket_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./BaseBucket.js */
      "xN0w");
      /*
      All material copyright ESRI, All Rights Reserved, unless otherwise specified.
      See https://js.arcgis.com/4.18/esri/copyright.txt for details.
      */


      var l = function l(e) {
        return function (t) {
          t.entry0 = e._lineVertexBuffer.index, e._lineVertexBuffer.add(t.currentVertex.x, t.currentVertex.y, t.prevNormal.x, t.prevNormal.y, 0, -1, t.distance, e._ddValues), t.entry2 = e._lineVertexBuffer.index, e._lineVertexBuffer.add(t.currentVertex.x, t.currentVertex.y, -t.prevNormal.x, -t.prevNormal.y, 0, 1, t.distance, e._ddValues), t.exit0 = e._lineVertexBuffer.index, e._lineVertexBuffer.add(t.currentVertex.x, t.currentVertex.y, t.nextNormal.x, t.nextNormal.y, 0, -1, t.distance, e._ddValues), t.exit2 = e._lineVertexBuffer.index, e._lineVertexBuffer.add(t.currentVertex.x, t.currentVertex.y, -t.nextNormal.x, -t.nextNormal.y, 0, 1, t.distance, e._ddValues);
        };
      },
          s = function s(e) {
        return function (t) {
          e._lineIndexBuffer.add(t.leftExit0, t.rightEntry0, t.leftExit2), e._lineIndexBuffer.add(t.rightEntry0, t.rightEntry2, t.leftExit2);
        };
      },
          x = function x(e) {
        return function (r) {
          var n = 2 === e._joinType ? e._miterLimitCosine : e._roundLimitCosine,
              i = r.isCap && 0 !== e._capType;
          var l = !1;
          r.cosine > .97 ? (r.exit0 = r.entry0 = e._lineVertexBuffer.index, e._lineVertexBuffer.add(r.currentVertex.x, r.currentVertex.y, r.bisector.x / r.cosine, r.bisector.y / r.cosine, 0, -1, r.distance, e._ddValues), r.exit2 = r.entry2 = e._lineVertexBuffer.index, e._lineVertexBuffer.add(r.currentVertex.x, r.currentVertex.y, -r.bisector.x / r.cosine, -r.bisector.y / r.cosine, 0, 1, r.distance, e._ddValues)) : r.cosine < 1 - .97 ? (r.entry0 = e._lineVertexBuffer.index, e._lineVertexBuffer.add(r.currentVertex.x, r.currentVertex.y, r.prevNormal.x, r.prevNormal.y, 0, -1, r.distance, e._ddValues), r.entry2 = e._lineVertexBuffer.index, e._lineVertexBuffer.add(r.currentVertex.x, r.currentVertex.y, -r.prevNormal.x, -r.prevNormal.y, 0, 1, r.distance, e._ddValues), r.exit0 = e._lineVertexBuffer.index, e._lineVertexBuffer.add(r.currentVertex.x, r.currentVertex.y, r.nextNormal.x, r.nextNormal.y, 0, -1, r.distance, e._ddValues), r.exit2 = e._lineVertexBuffer.index, e._lineVertexBuffer.add(r.currentVertex.x, r.currentVertex.y, -r.nextNormal.x, -r.nextNormal.y, 0, 1, r.distance, e._ddValues)) : r.canSplit ? (Object(_webgl_TurboLine_js__WEBPACK_IMPORTED_MODULE_2__["splitVertex"])(), r.sign > 0 ? (r.splitInner ? (r.exit0 = e._lineVertexBuffer.index, e._lineVertexBuffer.add(r.currentVertex.x, r.currentVertex.y, r.leftInner.x, r.leftInner.y, 0, -1, r.distance, e._ddValues), r.entry0 = e._lineVertexBuffer.index, e._lineVertexBuffer.add(r.currentVertex.x, r.currentVertex.y, r.rightInner.x, r.rightInner.y, 0, -1, r.distance, e._ddValues)) : (r.exit0 = r.entry0 = e._lineVertexBuffer.index, e._lineVertexBuffer.add(r.currentVertex.x, r.currentVertex.y, r.bisector.x / r.cosine, r.bisector.y / r.cosine, 0, -1, r.distance, e._ddValues)), r.cosine < n ? (l = !r.isCap, r.entry2 = e._lineVertexBuffer.index, e._lineVertexBuffer.add(r.currentVertex.x, r.currentVertex.y, -r.prevNormal.x, -r.prevNormal.y, 0, 1, r.distance, e._ddValues), r.exit2 = e._lineVertexBuffer.index, e._lineVertexBuffer.add(r.currentVertex.x, r.currentVertex.y, -r.nextNormal.x, -r.nextNormal.y, 0, 1, r.distance, e._ddValues)) : r.splitOuter ? (l = l || r.gapOuter, r.entry2 = e._lineVertexBuffer.index, e._lineVertexBuffer.add(r.currentVertex.x, r.currentVertex.y, -r.leftOuter.x, -r.leftOuter.y, 0, 1, r.distance, e._ddValues), r.exit2 = e._lineVertexBuffer.index, e._lineVertexBuffer.add(r.currentVertex.x, r.currentVertex.y, -r.rightOuter.x, -r.rightOuter.y, 0, 1, r.distance, e._ddValues)) : (r.entry2 = r.exit2 = e._lineVertexBuffer.index, e._lineVertexBuffer.add(r.currentVertex.x, r.currentVertex.y, -r.bisector.x / r.cosine, -r.bisector.y / r.cosine, 0, 1, r.distance, e._ddValues))) : (r.splitInner ? (r.exit2 = e._lineVertexBuffer.index, e._lineVertexBuffer.add(r.currentVertex.x, r.currentVertex.y, -r.leftInner.x, -r.leftInner.y, 0, 1, r.distance, e._ddValues), r.entry2 = e._lineVertexBuffer.index, e._lineVertexBuffer.add(r.currentVertex.x, r.currentVertex.y, -r.rightInner.x, -r.rightInner.y, 0, 1, r.distance, e._ddValues)) : (r.exit2 = r.entry2 = e._lineVertexBuffer.index, e._lineVertexBuffer.add(r.currentVertex.x, r.currentVertex.y, -r.bisector.x / r.cosine, -r.bisector.y / r.cosine, 0, 1, r.distance, e._ddValues)), r.cosine < n ? (l = !r.isCap, r.entry0 = e._lineVertexBuffer.index, e._lineVertexBuffer.add(r.currentVertex.x, r.currentVertex.y, r.prevNormal.x, r.prevNormal.y, 0, -1, r.distance, e._ddValues), r.exit0 = e._lineVertexBuffer.index, e._lineVertexBuffer.add(r.currentVertex.x, r.currentVertex.y, r.nextNormal.x, r.nextNormal.y, 0, -1, r.distance, e._ddValues)) : r.splitOuter ? (l = l || r.gapOuter, r.entry0 = e._lineVertexBuffer.index, e._lineVertexBuffer.add(r.currentVertex.x, r.currentVertex.y, r.leftOuter.x, r.leftOuter.y, 0, -1, r.distance, e._ddValues), r.exit0 = e._lineVertexBuffer.index, e._lineVertexBuffer.add(r.currentVertex.x, r.currentVertex.y, r.rightOuter.x, r.rightOuter.y, 0, -1, r.distance, e._ddValues)) : (r.exit0 = r.entry0 = e._lineVertexBuffer.index, e._lineVertexBuffer.add(r.currentVertex.x, r.currentVertex.y, r.bisector.x / r.cosine, r.bisector.y / r.cosine, 0, -1, r.distance, e._ddValues)))) : r.sign > 0 ? (r.exit0 = r.entry0 = e._lineVertexBuffer.index, e._lineVertexBuffer.add(r.currentVertex.x, r.currentVertex.y, r.bisector.x / r.cosine, r.bisector.y / r.cosine, 0, -1, r.distance, e._ddValues), r.cosine < n ? (l = !r.isCap, r.entry2 = e._lineVertexBuffer.index, e._lineVertexBuffer.add(r.currentVertex.x, r.currentVertex.y, -r.prevNormal.x, -r.prevNormal.y, 0, 1, r.distance, e._ddValues), r.exit2 = e._lineVertexBuffer.index, e._lineVertexBuffer.add(r.currentVertex.x, r.currentVertex.y, -r.nextNormal.x, -r.nextNormal.y, 0, 1, r.distance, e._ddValues)) : (r.entry2 = r.exit2 = e._lineVertexBuffer.index, e._lineVertexBuffer.add(r.currentVertex.x, r.currentVertex.y, -r.bisector.x / r.cosine, -r.bisector.y / r.cosine, 0, 1, r.distance, e._ddValues))) : (r.exit2 = r.entry2 = e._lineVertexBuffer.index, e._lineVertexBuffer.add(r.currentVertex.x, r.currentVertex.y, -r.bisector.x / r.cosine, -r.bisector.y / r.cosine, 0, 1, r.distance, e._ddValues), r.cosine < n ? (l = !r.isCap, r.entry0 = e._lineVertexBuffer.index, e._lineVertexBuffer.add(r.currentVertex.x, r.currentVertex.y, r.prevNormal.x, r.prevNormal.y, 0, -1, r.distance, e._ddValues), r.exit0 = e._lineVertexBuffer.index, e._lineVertexBuffer.add(r.currentVertex.x, r.currentVertex.y, r.nextNormal.x, r.nextNormal.y, 0, -1, r.distance, e._ddValues)) : (r.exit0 = r.entry0 = e._lineVertexBuffer.index, e._lineVertexBuffer.add(r.currentVertex.x, r.currentVertex.y, r.bisector.x / r.cosine, r.bisector.y / r.cosine, 0, -1, r.distance, e._ddValues)));
          var s;
          if (r.canSplit && (r.splitInner || r.splitOuter) || l || i ? (s = r.entry1 = r.exit1 = e._lineVertexBuffer.index, e._lineVertexBuffer.add(r.currentVertex.x, r.currentVertex.y, 0, 0, 0, 0, r.distance, e._ddValues)) : s = r.entry1 = r.exit1 = null, l && 1 !== e._joinType) e._lineIndexBuffer.add(s, r.sign > 0 ? r.exit2 : r.entry0, r.sign > 0 ? r.entry2 : r.exit0);else if (i && 1 === e._capType || l && 1 === e._joinType) {
            var t, _n4, _i11, _l5, _x10, _a4;

            if (r.isCap) {
              var _e19 = Math.PI;
              _x10 = Math.ceil(_e19 / .8), _a4 = _e19 / _x10, r.isFirstVertex ? (t = r.prevNormal.x, _n4 = r.prevNormal.y, _i11 = r.entry0, _l5 = r.entry2) : r.isLastVertex && (t = -r.nextNormal.x, _n4 = -r.nextNormal.y, _i11 = r.exit2, _l5 = r.exit0);
            } else {
              var _e20 = 2 * Math.acos(r.cosine);

              _x10 = Math.ceil(_e20 / .8), _a4 = _e20 / _x10, t = r.sign > 0 ? -r.prevNormal.x : r.nextNormal.x, _n4 = r.sign > 0 ? -r.prevNormal.y : r.nextNormal.y, _i11 = r.sign > 0 ? r.entry2 : r.exit0, _l5 = r.sign > 0 ? r.exit2 : r.entry0;
            }

            var d = Math.cos(_a4),
                u = Math.sin(_a4),
                f = u * t + d * _n4;
            var o, c;
            t = d * t - u * _n4, _n4 = f;

            for (var _a5 = 0; _a5 < _x10; ++_a5) {
              if (o = c, _a5 < _x10 - 1) if (r.isCap) {
                var _i12 = r.isFirstVertex ? -1 : 1;

                c = e._lineVertexBuffer.index, e._lineVertexBuffer.add(r.currentVertex.x, r.currentVertex.y, t, _n4, _i12, 0, r.distance, e._ddValues);
              } else c = e._lineVertexBuffer.index, e._lineVertexBuffer.add(r.currentVertex.x, r.currentVertex.y, t, _n4, 0, r.sign, r.distance, e._ddValues);

              e._lineIndexBuffer.add(0 === _a5 ? _i11 : o, s, _a5 === _x10 - 1 ? _l5 : c);

              var _f2 = u * t + d * _n4;

              t = d * t - u * _n4, _n4 = _f2;
            }
          } else if (i && 2 === e._capType) {
            var _t9 = r.isFirstVertex ? 1 : -1;

            var _n5, _i13;

            e._hasPattern ? (_n5 = e._lineVertexBuffer.index, e._lineVertexBuffer.add(r.currentVertex.x, r.currentVertex.y, r.prevNormal.x - _t9 * r.inbound.x, r.prevNormal.y - _t9 * r.inbound.y, -_t9, -1, r.distance, e._ddValues), _i13 = e._lineVertexBuffer.index, e._lineVertexBuffer.add(r.currentVertex.x, r.currentVertex.y, -r.prevNormal.x - _t9 * r.inbound.x, -r.prevNormal.y - _t9 * r.inbound.y, -_t9, 1, r.distance, e._ddValues)) : (_n5 = e._lineVertexBuffer.index, e._lineVertexBuffer.add(r.currentVertex.x, r.currentVertex.y, r.prevNormal.x - _t9 * r.inbound.x, r.prevNormal.y - _t9 * r.inbound.y, 0, -1, r.distance, e._ddValues), _i13 = e._lineVertexBuffer.index, e._lineVertexBuffer.add(r.currentVertex.x, r.currentVertex.y, -r.prevNormal.x - _t9 * r.inbound.x, -r.prevNormal.y - _t9 * r.inbound.y, 0, 1, r.distance, e._ddValues)), _t9 > 0 ? (e._lineIndexBuffer.add(s, r.entry2, _i13), e._lineIndexBuffer.add(s, _i13, _n5), e._lineIndexBuffer.add(s, _n5, r.entry0)) : (e._lineIndexBuffer.add(s, _i13, r.exit2), e._lineIndexBuffer.add(s, _n5, _i13), e._lineIndexBuffer.add(s, r.exit0, _n5));
          }
        };
      },
          a = function a(e) {
        return function (t) {
          e._lineIndexBuffer.add(t.leftExit0, t.rightEntry0, null != t.leftExit1 ? t.leftExit1 : t.leftExit2), e._lineIndexBuffer.add(t.rightEntry0, null != t.rightEntry1 ? t.rightEntry1 : t.rightEntry2, null != t.leftExit1 ? t.leftExit1 : t.leftExit2), null != t.leftExit1 && null != t.rightEntry1 ? (e._lineIndexBuffer.add(t.leftExit1, t.rightEntry1, t.leftExit2), e._lineIndexBuffer.add(t.rightEntry1, t.rightEntry2, t.leftExit2)) : null != t.leftExit1 ? e._lineIndexBuffer.add(t.leftExit1, t.rightEntry2, t.leftExit2) : null != t.rightEntry1 && e._lineIndexBuffer.add(t.rightEntry1, t.rightEntry2, t.leftExit2);
        };
      };
      /* harmony default export */


      __webpack_exports__["default"] = /*#__PURE__*/function (_BaseBucket_js__WEBPA2) {
        _inherits(_class2, _BaseBucket_js__WEBPA2);

        var _super4 = _createSuper(_class2);

        function _class2(e, t, r, n) {
          var _this3;

          _classCallCheck(this, _class2);

          if (_this3 = _super4.call(this, e, t), _this3.type = 2, _this3._tessellationOptions = {}, _this3.tessellationProperties = {
            _lineVertexBuffer: null,
            _lineIndexBuffer: null,
            _hasPattern: null,
            _ddValues: null,
            _capType: null,
            _joinType: null,
            _miterLimitCosine: null,
            _roundLimitCosine: null
          }, e.hasDataDrivenLine !== r.isDataDriven()) throw new Error("incompatible line buffer");
          _this3.tessellationProperties._lineVertexBuffer = r, _this3.tessellationProperties._lineIndexBuffer = n, _this3.tessellationProperties._hasPattern = e.getPaintValue("line-pattern", _this3.zoom) || e.getPaintValue("line-dasharray", _this3.zoom).length > 0, _this3._isThinLine = e.isThinLine, _this3._isThinLine ? _this3._tessellationCallbacks = {
            vertex: l(_this3.tessellationProperties),
            bridge: s(_this3.tessellationProperties)
          } : _this3._tessellationCallbacks = {
            vertex: x(_this3.tessellationProperties),
            bridge: a(_this3.tessellationProperties)
          };
          return _possibleConstructorReturn(_this3);
        }

        _createClass(_class2, [{
          key: "lineIndexStart",
          get: function get() {
            return this._lineIndexStart;
          }
        }, {
          key: "lineIndexCount",
          get: function get() {
            return this._lineIndexCount;
          }
        }, {
          key: "processFeatures",
          value: function processFeatures(t) {
            this._lineIndexStart = 3 * this.tessellationProperties._lineIndexBuffer.index, this._lineIndexCount = 0;
            var n = this.layer,
                i = this.zoom,
                l = n.hasDataDrivenLine;
            t && t.setExtent(this.layerExtent);
            var s = [1, 1, 1, 1],
                x = 1,
                a = 1;

            var _iterator6 = _createForOfIteratorHelper(this._features),
                _step6;

            try {
              for (_iterator6.s(); !(_step6 = _iterator6.n()).done;) {
                var r = _step6.value;
                var d = void 0;
                if (!this.tessellationProperties._hasPattern && n.hasDataDrivenColor && (s = n.getPaintValue("line-color", i, r)), n.hasDataDrivenOpacity && (x = n.getPaintValue("line-opacity", i, r)), n.hasDataDrivenWidth && (a = n.getPaintValue("line-width", i, r)), l && (d = {
                  color: s,
                  opacity: x,
                  size: Math.max(Math.min(a, 256), 0)
                }, d.size <= 0 || d.opacity <= 0 || d.color[3] <= 0)) continue;
                this.tessellationProperties._capType = n.getLayoutValue("line-cap", i, r), this.tessellationProperties._joinType = n.getLayoutValue("line-join", i, r), this.tessellationProperties._miterLimitCosine = Object(_webgl_mesh_templates_util_js__WEBPACK_IMPORTED_MODULE_1__["getLimitCosine"])(n.getLayoutValue("line-miter-limit", i, r)), this.tessellationProperties._roundLimitCosine = Object(_webgl_mesh_templates_util_js__WEBPACK_IMPORTED_MODULE_1__["getLimitCosine"])(n.getLayoutValue("line-round-limit", i, r));
                var u = r.getGeometry(t);

                this._processFeature(u, d);
              }
            } catch (err) {
              _iterator6.e(err);
            } finally {
              _iterator6.f();
            }

            Object(_webgl_TurboLine_js__WEBPACK_IMPORTED_MODULE_2__["cleanup"])();
          }
        }, {
          key: "serialize",
          value: function serialize() {
            var e = 7;
            e += this.layerUIDs.length, e += this.tessellationProperties._lineVertexBuffer.array.length, e += this.tessellationProperties._lineIndexBuffer.array.length;
            var t = 0;
            var r = new Uint32Array(e),
                n = new Int32Array(r.buffer);
            r[t++] = this.type, r[t++] = this.layerUIDs.length;

            for (var _e21 = 0; _e21 < this.layerUIDs.length; _e21++) {
              r[t++] = this.layerUIDs[_e21];
            }

            r[t++] = this._lineIndexStart, r[t++] = this._lineIndexCount, r[t++] = this.tessellationProperties._lineVertexBuffer.isDataDriven() ? 1 : 0, r[t++] = this.tessellationProperties._lineVertexBuffer.array.length;

            for (var _e22 = 0; _e22 < this.tessellationProperties._lineVertexBuffer.array.length; _e22++) {
              n[t++] = this.tessellationProperties._lineVertexBuffer.array[_e22];
            }

            r[t++] = this.tessellationProperties._lineIndexBuffer.array.length;

            for (var _e23 = 0; _e23 < this.tessellationProperties._lineIndexBuffer.array.length; _e23++) {
              r[t++] = this.tessellationProperties._lineIndexBuffer.array[_e23];
            }

            return r.buffer;
          }
        }, {
          key: "_processFeature",
          value: function _processFeature(e, t) {
            if (!e) return;
            var r = e.length;

            for (var n = 0; n < r; n++) {
              this._processGeometry(e[n], t);
            }
          }
        }, {
          key: "_processGeometry",
          value: function _processGeometry(e, t) {
            if (e.length < 2) return;
            var r,
                i,
                l = e[0],
                s = 1;

            for (; s < e.length;) {
              r = e[s].x - l.x, i = e[s].y - l.y, r * r + i * i < 1e-6 ? e.splice(s, 1) : (l = e[s], ++s);
            }

            if (e.length < 2) return;
            var x = 3 * this.tessellationProperties._lineIndexBuffer.index;
            this._tessellationOptions.trackDistance = this.tessellationProperties._hasPattern, this._tessellationOptions.initialDistance = 0, this._tessellationOptions.thin = this._isThinLine, this._tessellationOptions.wrapDistance = 65535, this._tessellationOptions.outerBisectorAutoSplitThreshold = .2631578947368421, this._tessellationOptions.enableOuterBisectorSplit = this.tessellationProperties._hasPattern, this._tessellationOptions.innerBisectorAutoSplitThreshold = .2631578947368421, this._tessellationOptions.enableInnerBisectorSplit = this.tessellationProperties._hasPattern, this.tessellationProperties._ddValues = t, Object(_webgl_TurboLine_js__WEBPACK_IMPORTED_MODULE_2__["tessellate"])(e, this._tessellationOptions, this._tessellationCallbacks), this._lineIndexCount += 3 * this.tessellationProperties._lineIndexBuffer.index - x;
          }
        }]);

        return _class2;
      }(_BaseBucket_js__WEBPACK_IMPORTED_MODULE_3__["default"]);
      /***/

    },

    /***/
    "VLY0":
    /*!************************************************************************************!*\
      !*** ./node_modules/@arcgis/core/views/2d/engine/vectorTiles/WorkerTileHandler.js ***!
      \************************************************************************************/

    /*! exports provided: default */

    /***/
    function VLY0(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony import */


      var _core_promiseUtils_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ../../../../core/promiseUtils.js */
      "9MzC");
      /* harmony import */


      var _style_StyleRepository_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./style/StyleRepository.js */
      "kB7V");
      /* harmony import */


      var _WorkerTile_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./WorkerTile.js */
      "IMID");
      /*
      All material copyright ESRI, All Rights Reserved, unless otherwise specified.
      See https://js.arcgis.com/4.18/esri/copyright.txt for details.
      */

      /* harmony default export */


      __webpack_exports__["default"] = /*#__PURE__*/function () {
        function _class3() {
          _classCallCheck(this, _class3);

          this._spriteInfo = {}, this._glyphInfo = {};
        }

        _createClass(_class3, [{
          key: "reset",
          value: function reset() {
            return this._spriteInfo = {}, this._glyphInfo = {}, Object(_core_promiseUtils_js__WEBPACK_IMPORTED_MODULE_0__["resolve"])();
          }
        }, {
          key: "getLayers",
          value: function getLayers() {
            var e;
            return null == (e = this._styleRepository) ? void 0 : e.layers;
          }
        }, {
          key: "createTileAndParse",
          value: function () {
            var _createTileAndParse = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee3(e, s) {
              var o, i, _i14, _Object$keys, t, _s2, n;

              return regeneratorRuntime.wrap(function _callee3$(_context3) {
                while (1) {
                  switch (_context3.prev = _context3.next) {
                    case 0:
                      o = e.key, i = {};

                      for (_i14 = 0, _Object$keys = Object.keys(e.sourceName2DataAndRefKey); _i14 < _Object$keys.length; _i14++) {
                        t = _Object$keys[_i14];
                        _s2 = e.sourceName2DataAndRefKey[t];
                        i[t] = _s2.refKey;
                      }

                      n = new _WorkerTile_js__WEBPACK_IMPORTED_MODULE_2__["default"](o, i, this, this._styleRepository);
                      _context3.prev = 3;
                      _context3.next = 6;
                      return n.parse(e, this._vectorTileLayerMaxBuffers, s);

                    case 6:
                      return _context3.abrupt("return", _context3.sent);

                    case 9:
                      _context3.prev = 9;
                      _context3.t0 = _context3["catch"](3);

                      if (!(n.setObsolete(), n.release(), !Object(_core_promiseUtils_js__WEBPACK_IMPORTED_MODULE_0__["isAbortError"])(_context3.t0))) {
                        _context3.next = 13;
                        break;
                      }

                      throw _context3.t0;

                    case 13:
                      return _context3.abrupt("return", null);

                    case 14:
                    case "end":
                      return _context3.stop();
                  }
                }
              }, _callee3, this, [[3, 9]]);
            }));

            function createTileAndParse(_x11, _x12) {
              return _createTileAndParse.apply(this, arguments);
            }

            return createTileAndParse;
          }()
        }, {
          key: "updateStyle",
          value: function updateStyle(e) {
            if (!e || 0 === e.length || !this._styleRepository) return;
            var t = this._styleRepository;

            var _iterator7 = _createForOfIteratorHelper(e),
                _step7;

            try {
              for (_iterator7.s(); !(_step7 = _iterator7.n()).done;) {
                var s = _step7.value;
                var _e24 = s.type,
                    r = s.data;

                switch (_e24) {
                  case 0:
                    t.setPaintProperties(r.layer, r.paint);
                    break;

                  case 1:
                    t.setLayoutProperties(r.layer, r.layout);
                    break;

                  case 3:
                    t.deleteStyleLayer(r.layerName);
                    break;

                  case 2:
                    t.setStyleLayer(r.layer, r.index);
                }
              }
            } catch (err) {
              _iterator7.e(err);
            } finally {
              _iterator7.f();
            }
          }
        }, {
          key: "setStyle",
          value: function setStyle(e) {
            this._styleRepository = new _style_StyleRepository_js__WEBPACK_IMPORTED_MODULE_1__["default"](e.style), this._spriteInfo = {}, this._glyphInfo = {}, this._vectorTileLayerMaxBuffers = e.vectorTileLayerMaxBuffers;
          }
        }, {
          key: "fetchSprites",
          value: function fetchSprites(t, s, r) {
            var o = [],
                i = this._spriteInfo;
            return t.forEach(function (e) {
              void 0 === i[e] && o.push(e);
            }), 0 === o.length ? Object(_core_promiseUtils_js__WEBPACK_IMPORTED_MODULE_0__["resolve"])() : s.invoke("getSprites", o, {
              signal: r && r.signal
            }).then(function (e) {
              for (var _t10 in e) {
                var _s3 = e[_t10];
                i[_t10] = _s3;
              }
            });
          }
        }, {
          key: "getSpriteItems",
          value: function getSpriteItems() {
            return this._spriteInfo;
          }
        }, {
          key: "fetchGlyphs",
          value: function fetchGlyphs(t, s, r, o, i) {
            var n = [];
            var a = this._glyphInfo[s];
            return a ? r.forEach(function (e) {
              a[e] || n.push(e);
            }) : (a = this._glyphInfo[s] = [], r.forEach(function (e) {
              return n.push(e);
            })), 0 === n.length ? Object(_core_promiseUtils_js__WEBPACK_IMPORTED_MODULE_0__["resolve"])() : o.invoke("getGlyphs", {
              tileID: t,
              font: s,
              codePoints: n
            }, i).then(function (e) {
              for (var _t11 = 0; _t11 < e.length; _t11++) {
                e[_t11] && (a[_t11] = e[_t11]);
              }
            });
          }
        }, {
          key: "getGlyphItems",
          value: function getGlyphItems(e) {
            return this._glyphInfo[e];
          }
        }]);

        return _class3;
      }();
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
    "Z7lw":
    /*!*******************************************************************************!*\
      !*** ./node_modules/@arcgis/core/views/2d/engine/vectorTiles/CircleBucket.js ***!
      \*******************************************************************************/

    /*! exports provided: default */

    /***/
    function Z7lw(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony import */


      var _BaseBucket_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ./BaseBucket.js */
      "xN0w");
      /*
      All material copyright ESRI, All Rights Reserved, unless otherwise specified.
      See https://js.arcgis.com/4.18/esri/copyright.txt for details.
      */

      /* harmony default export */


      __webpack_exports__["default"] = /*#__PURE__*/function (_BaseBucket_js__WEBPA3) {
        _inherits(_class4, _BaseBucket_js__WEBPA3);

        var _super5 = _createSuper(_class4);

        function _class4(e, t, r, i) {
          var _this4;

          _classCallCheck(this, _class4);

          _this4 = _super5.call(this, e, t), _this4.type = 4, _this4._circleVertexBuffer = r, _this4._circleIndexBuffer = i;
          return _this4;
        }

        _createClass(_class4, [{
          key: "circleIndexStart",
          get: function get() {
            return this._circleIndexStart;
          }
        }, {
          key: "circleIndexCount",
          get: function get() {
            return this._circleIndexCount;
          }
        }, {
          key: "processFeatures",
          value: function processFeatures(e) {
            var t = this._circleVertexBuffer,
                r = this._circleIndexBuffer;
            this._circleIndexStart = 3 * r.index, this._circleIndexCount = 0;
            var i = this.layer,
                a = this.zoom;
            e && e.setExtent(this.layerExtent);
            var c = 1,
                s = [1, 1, 1, 1],
                l = 1,
                n = 0,
                h = 1,
                o = [1, 1, 1, 1],
                f = 1;

            var _iterator8 = _createForOfIteratorHelper(this._features),
                _step8;

            try {
              for (_iterator8.s(); !(_step8 = _iterator8.n()).done;) {
                var u = _step8.value;
                var d = u.getGeometry(e);

                if (d) {
                  i.hasDataDrivenRadius && (c = i.getPaintValue("circle-radius", a, u)), i.hasDataDrivenColor && (s = i.getPaintValue("circle-color", a, u)), i.hasDataDrivenOpacity && (l = i.getPaintValue("circle-opacity", a, u)), i.hasDataDrivenStrokeWidth && (h = i.getPaintValue("circle-stroke-width", a, u)), i.hasDataDrivenStrokeColor && (o = i.getPaintValue("circle-stroke-color", a, u)), i.hasDataDrivenStrokeOpacity && (f = i.getPaintValue("circle-stroke-opacity", a, u)), i.hasDataDrivenBlur && (n = i.getPaintValue("circle-blur", a, u));

                  var _iterator9 = _createForOfIteratorHelper(d),
                      _step9;

                  try {
                    for (_iterator9.s(); !(_step9 = _iterator9.n()).done;) {
                      var _e25 = _step9.value;

                      if (_e25) {
                        var _iterator10 = _createForOfIteratorHelper(_e25),
                            _step10;

                        try {
                          for (_iterator10.s(); !(_step10 = _iterator10.n()).done;) {
                            var _i15 = _step10.value;
                            var _e26 = t.index;
                            t.add(_i15.x, _i15.y, 0, 0, c, s, l, n, h, o, f), t.add(_i15.x, _i15.y, 0, 1, c, s, l, n, h, o, f), t.add(_i15.x, _i15.y, 1, 0, c, s, l, n, h, o, f), t.add(_i15.x, _i15.y, 1, 1, c, s, l, n, h, o, f), r.add(_e26 + 0, _e26 + 1, _e26 + 2), r.add(_e26 + 1, _e26 + 2, _e26 + 3), this._circleIndexCount += 6;
                          }
                        } catch (err) {
                          _iterator10.e(err);
                        } finally {
                          _iterator10.f();
                        }
                      }
                    }
                  } catch (err) {
                    _iterator9.e(err);
                  } finally {
                    _iterator9.f();
                  }
                }
              }
            } catch (err) {
              _iterator8.e(err);
            } finally {
              _iterator8.f();
            }
          }
        }, {
          key: "serialize",
          value: function serialize() {
            var e = 6;
            e += this.layerUIDs.length, e += this._circleVertexBuffer.array.length, e += this._circleIndexBuffer.array.length;
            var t = 0;
            var r = new Uint32Array(e),
                i = new Int32Array(r.buffer);
            r[t++] = this.type, r[t++] = this.layerUIDs.length;

            for (var _e27 = 0; _e27 < this.layerUIDs.length; _e27++) {
              r[t++] = this.layerUIDs[_e27];
            }

            r[t++] = this._circleIndexStart, r[t++] = this._circleIndexCount, r[t++] = this._circleVertexBuffer.array.length;

            for (var _e28 = 0; _e28 < this._circleVertexBuffer.array.length; _e28++) {
              i[t++] = this._circleVertexBuffer.array[_e28];
            }

            r[t++] = this._circleIndexBuffer.array.length;

            for (var _e29 = 0; _e29 < this._circleIndexBuffer.array.length; _e29++) {
              r[t++] = this._circleIndexBuffer.array[_e29];
            }

            return r.buffer;
          }
        }]);

        return _class4;
      }(_BaseBucket_js__WEBPACK_IMPORTED_MODULE_0__["default"]);
      /***/

    },

    /***/
    "Zcxi":
    /*!**************************************************************************!*\
      !*** ./node_modules/@arcgis/core/views/2d/engine/vectorTiles/Feature.js ***!
      \**************************************************************************/

    /*! exports provided: default */

    /***/
    function Zcxi(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony import */


      var _webgl_Geometry_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ../webgl/Geometry.js */
      "OXZQ");
      /*
      All material copyright ESRI, All Rights Reserved, unless otherwise specified.
      See https://js.arcgis.com/4.18/esri/copyright.txt for details.
      */

      /* harmony default export */


      __webpack_exports__["default"] = /*#__PURE__*/function () {
        function _class5(e, t) {
          _classCallCheck(this, _class5);

          this.values = {};
          var s = t.keys,
              r = t.values;

          for (; e.next();) {
            switch (e.tag()) {
              case 1:
                this.id = e.getUInt64();
                break;

              case 2:
                {
                  var _t12 = e.getMessage(),
                      o = this.values;

                  for (; !_t12.empty();) {
                    var _e30 = _t12.getUInt32(),
                        _a6 = _t12.getUInt32();

                    o[s[_e30]] = r[_a6];
                  }

                  _t12.release();

                  break;
                }

              case 3:
                this.type = e.getUInt32();
                break;

              case 4:
                this._pbfGeometry = e.getMessage();
                break;

              default:
                e.skip();
            }
          }
        }

        _createClass(_class5, [{
          key: "getGeometry",
          value: function getGeometry(t) {
            if (void 0 !== this._geometry) return this._geometry;
            if (!this._pbfGeometry) return null;
            var s = this._pbfGeometry;
            var r, o;
            this._pbfGeometry = null, t ? t.reset(this.type) : r = [];
            var a,
                n = 1,
                i = 0,
                l = 0,
                h = 0;

            for (; !s.empty();) {
              if (0 === i) {
                var _e31 = s.getUInt32();

                n = 7 & _e31, i = _e31 >> 3;
              }

              switch (i--, n) {
                case 1:
                  l += s.getSInt32(), h += s.getSInt32(), t ? t.moveTo(l, h) : (o && r.push(o), o = [], o.push(new _webgl_Geometry_js__WEBPACK_IMPORTED_MODULE_0__["Point"](l, h)));
                  break;

                case 2:
                  l += s.getSInt32(), h += s.getSInt32(), t ? t.lineTo(l, h) : o.push(new _webgl_Geometry_js__WEBPACK_IMPORTED_MODULE_0__["Point"](l, h));
                  break;

                case 7:
                  t ? t.close() : o && !o[0].equals(l, h) && o.push(o[0].clone());
                  break;

                default:
                  throw s.release(), new Error("Invalid path operation");
              }
            }

            return t ? a = t.result() : (o && r.push(o), a = r), s.release(), this._geometry = a, a;
          }
        }]);

        return _class5;
      }();
      /***/

    },

    /***/
    "i0/R":
    /*!*******************************************************************************!*\
      !*** ./node_modules/@arcgis/core/views/2d/engine/vectorTiles/SymbolBucket.js ***!
      \*******************************************************************************/

    /*! exports provided: default */

    /***/
    function i0R(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony import */


      var _core_string_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ../../../../core/string.js */
      "s7YA");
      /* harmony import */


      var _core_BidiEngine_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ../../../../core/BidiEngine.js */
      "179/");
      /* harmony import */


      var _GeometryUtils_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./GeometryUtils.js */
      "OxmL");
      /* harmony import */


      var _style_StyleLayer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./style/StyleLayer.js */
      "Ip4x");
      /* harmony import */


      var _webgl_Geometry_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ../webgl/Geometry.js */
      "OXZQ");
      /* harmony import */


      var _BaseBucket_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ./BaseBucket.js */
      "xN0w");
      /* harmony import */


      var _TextShaping_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ./TextShaping.js */
      "ynYs");
      /* harmony import */


      var _Placement_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! ./Placement.js */
      "ixhk");
      /*
      All material copyright ESRI, All Rights Reserved, unless otherwise specified.
      See https://js.arcgis.com/4.18/esri/copyright.txt for details.
      */


      function y(e, t) {
        return e.iconMosaicItem && t.iconMosaicItem ? e.iconMosaicItem.page === t.iconMosaicItem.page ? 0 : e.iconMosaicItem.page - t.iconMosaicItem.page : e.iconMosaicItem && !t.iconMosaicItem ? 1 : !e.iconMosaicItem && t.iconMosaicItem ? -1 : 0;
      }

      var g = /*#__PURE__*/function (_BaseBucket_js__WEBPA4) {
        _inherits(g, _BaseBucket_js__WEBPA4);

        var _super6 = _createSuper(g);

        function g(e, t, i, n, a, s, o, r) {
          var _this5;

          _classCallCheck(this, g);

          if (_this5 = _super6.call(this, e, t), _this5.type = 3, _this5._markerMap = new Map(), _this5._glyphMap = new Map(), _this5._glyphBufferDataStorage = new Map(), _this5._isIconSDF = !1, e.hasDataDrivenIcon !== i.isDataDriven()) throw new Error("incompatible icon buffer");
          if (e.hasDataDrivenText !== a.isDataDriven()) throw new Error("incompatible text buffer");
          _this5._iconVertexBuffer = i, _this5._iconIndexBuffer = n, _this5._textVertexBuffer = a, _this5._textIndexBuffer = s, _this5._placementEngine = o, _this5._workerTileHandler = r;
          return _possibleConstructorReturn(_this5);
        }

        _createClass(g, [{
          key: "markerPageMap",
          get: function get() {
            return this._markerMap;
          }
        }, {
          key: "glyphsPageMap",
          get: function get() {
            return this._glyphMap;
          }
        }, {
          key: "symbolInstances",
          get: function get() {
            return this._symbolInstances;
          }
        }, {
          key: "getResources",
          value: function getResources(t, i, n) {
            var a = this.layer,
                s = this.zoom,
                o = a.hasDataDrivenIcon,
                r = a.hasDataDrivenText;
            t && t.setExtent(this.layerExtent);
            var l = a.getLayoutProperty("icon-image"),
                h = a.getLayoutProperty("text-field"),
                x = [];

            var c,
                d,
                f,
                y,
                u,
                m,
                p,
                _,
                M,
                I,
                b = [1, 1, 1, 1],
                P = 1,
                V = 1,
                A = [1, 1, 1, 1],
                L = 1,
                w = 1;

            var _iterator11 = _createForOfIteratorHelper(this._features),
                _step11;

            try {
              for (_iterator11.s(); !(_step11 = _iterator11.n()).done;) {
                var D = _step11.value;
                var z = D.getGeometry(t);
                if (!z || 0 === z.length) continue;
                var B = void 0,
                    C = void 0;
                l && (B = a.getLayoutValue("icon-image", s, D), l.isDataDriven || (B = this._replaceKeys(B, D.values)), B && (i.add(B), c = a.getLayoutValue("icon-rotate", s, D), d = a.getLayoutValue("icon-anchor", s, D), f = a.getLayoutValue("icon-offset", s, D)));
                var S = !1;

                if (h && (C = a.getLayoutValue("text-field", s, D), C && !h.isDataDriven && (C = this._replaceKeys(C, D.values)), C)) {
                  C = C.replace(/\\n/g, "\n");

                  switch (a.getLayoutValue("text-transform", s, D)) {
                    case 2:
                      C = C.toLowerCase();
                      break;

                    case 1:
                      C = C.toUpperCase();
                  }

                  if (g._bidiEngine.hasBidiChar(C)) {
                    var _e33 = void 0;

                    _e33 = "rtl" === g._bidiEngine.checkContextual(C) ? "IDNNN" : "ICNNN", C = g._bidiEngine.bidiTransform(C, _e33, "VLYSN"), S = !0;
                  }

                  var _e32 = C.length;

                  if (_e32 > 0) {
                    I = a.getLayoutValue("text-font", s, D);

                    var _iterator12 = _createForOfIteratorHelper(I),
                        _step12;

                    try {
                      for (_iterator12.s(); !(_step12 = _iterator12.n()).done;) {
                        var _t13 = _step12.value;
                        var _i16 = n[_t13];
                        _i16 || (_i16 = n[_t13] = new Set());

                        for (var _t14 = 0; _t14 < _e32; _t14++) {
                          var _e34 = C.charCodeAt(_t14);

                          _i16.add(_e34);
                        }
                      }
                    } catch (err) {
                      _iterator12.e(err);
                    } finally {
                      _iterator12.f();
                    }

                    y = a.getLayoutValue("text-rotate", s, D), u = a.getLayoutValue("text-anchor", s, D), m = a.getLayoutValue("text-offset", s, D), p = a.getLayoutValue("text-justify", s, D), _ = a.getLayoutValue("text-letter-spacing", s, D), M = a.getLayoutValue("text-max-width", s, D);
                  }
                }

                if (!B && !C) continue;
                var R = a.getLayoutValue("icon-size", s, D),
                    v = a.getLayoutValue("text-size", s, D);
                a.hasDataDrivenIconColor && (b = a.getPaintValue("icon-color", s, D)), a.hasDataDrivenIconOpacity && (P = a.getPaintValue("icon-opacity", s, D)), a.hasDataDrivenIconSize && (V = R), a.hasDataDrivenTextColor && (A = a.getPaintValue("text-color", s, D)), a.hasDataDrivenTextOpacity && (L = a.getPaintValue("text-opacity", s, D)), a.hasDataDrivenTextSize && (w = v);
                var k = a.getLayoutValue("symbol-sort-key", s, D),
                    T = {
                  sprite: B,
                  label: C,
                  rtl: S,
                  type: D.type,
                  geometry: z,
                  hash: (C ? Object(_core_string_js__WEBPACK_IMPORTED_MODULE_0__["numericHash"])(C) : 0) ^ (B ? Object(_core_string_js__WEBPACK_IMPORTED_MODULE_0__["numericHash"])(B) : 0),
                  priority: k,
                  iconSize: R,
                  iconRotate: c,
                  ddIconValues: o ? {
                    color: b,
                    opacity: P,
                    size: V
                  } : null,
                  iconAnchor: d,
                  iconOffset: f,
                  textSize: v,
                  textRotate: y,
                  ddTextValues: r ? {
                    color: A,
                    opacity: L,
                    size: w
                  } : null,
                  textAnchor: u,
                  textOffset: m,
                  textJustify: p,
                  textLetterSpacing: _,
                  textMaxWidth: M,
                  textFontArray: I
                };
                x.push(T);
              }
            } catch (err) {
              _iterator11.e(err);
            } finally {
              _iterator11.f();
            }

            this._symbolFeatures = x;
          }
        }, {
          key: "processFeatures",
          value: function processFeatures(e) {
            e && e.setExtent(this.layerExtent);

            var t = this.layer,
                n = this.zoom,
                a = t.getLayoutValue("symbol-placement", n),
                r = 0 !== a,
                l = t.getLayoutValue("symbol-spacing", n) * _Placement_js__WEBPACK_IMPORTED_MODULE_7__["TILE_PIXEL_RATIO"],
                u = t.getLayoutProperty("icon-image"),
                m = t.getLayoutProperty("text-field"),
                p = u ? new _style_StyleLayer_js__WEBPACK_IMPORTED_MODULE_3__["IconLayout"](t, n, r) : null,
                _ = m ? new _style_StyleLayer_js__WEBPACK_IMPORTED_MODULE_3__["TextLayout"](t, n, r) : null,
                M = this._workerTileHandler;

            var I;
            u && (I = M.getSpriteItems()), this._iconIndexStart = 3 * this._iconIndexBuffer.index, this._textIndexStart = 3 * this._textIndexBuffer.index, this._iconIndexCount = 0, this._textIndexCount = 0, this._markerMap.clear(), this._glyphMap.clear();
            var b = [];
            var P = 1;
            _ && _.size && (P = _.size / _TextShaping_js__WEBPACK_IMPORTED_MODULE_6__["SDF_GLYPH_SIZE"]);
            var V = _ ? _.maxAngle * _GeometryUtils_js__WEBPACK_IMPORTED_MODULE_2__["C_DEG_TO_RAD"] : 0,
                A = _ ? _.size * _Placement_js__WEBPACK_IMPORTED_MODULE_7__["TILE_PIXEL_RATIO"] : 0;

            var _iterator13 = _createForOfIteratorHelper(this._symbolFeatures),
                _step13;

            try {
              for (_iterator13.s(); !(_step13 = _iterator13.n()).done;) {
                var _e35 = _step13.value;

                var _t15 = void 0;

                p && I && _e35.sprite && (_t15 = I[_e35.sprite], _t15 && _t15.sdf && (this._isIconSDF = !0));
                var i = void 0;
                !!_t15 && (p.size = _e35.iconSize, p.rotate = _e35.iconRotate, p.offset = _e35.iconOffset);
                var _n6 = 0;
                var _s4 = _e35.label;

                if (_s4) {
                  _.size = _e35.textSize, _.rotate = _e35.textRotate, _.anchor = _e35.textAnchor, _.fontArray = _e35.textFontArray, _.justify = _e35.textJustify, _.letterSpacing = _e35.textLetterSpacing, _.maxWidth = _e35.textMaxWidth, _.offset = _e35.textOffset;

                  var _t16 = r ? _.keepUpright : _.writingMode && _.writingMode.indexOf(1) >= 0;

                  var _a7 = .5;

                  switch (_.anchor) {
                    case 5:
                    case 1:
                    case 7:
                      _a7 = 0;
                      break;

                    case 6:
                    case 2:
                    case 8:
                      _a7 = 1;
                  }

                  var o = .5;

                  switch (_.anchor) {
                    case 5:
                    case 3:
                    case 6:
                      o = 0;
                      break;

                    case 7:
                    case 4:
                    case 8:
                      o = 1;
                  }

                  var _l6 = .5;

                  switch (_.justify) {
                    case 0:
                      _l6 = _a7;
                      break;

                    case 1:
                      _l6 = 0;
                      break;

                    case 3:
                      _l6 = 1;
                  }

                  var d = _.letterSpacing * _TextShaping_js__WEBPACK_IMPORTED_MODULE_6__["SDF_GLYPH_SIZE"],
                      f = r ? 0 : _.maxWidth * _TextShaping_js__WEBPACK_IMPORTED_MODULE_6__["SDF_GLYPH_SIZE"],
                      _y2 = _.lineHeight * _TextShaping_js__WEBPACK_IMPORTED_MODULE_6__["SDF_GLYPH_SIZE"];

                  var _g9 = void 0,
                      _u5 = void 0;

                  if (_g9 = _.fontArray.map(function (e) {
                    return M.getGlyphItems(e);
                  }), _u5 = new _TextShaping_js__WEBPACK_IMPORTED_MODULE_6__["TextShaping"](_g9, f, _y2, d, _a7, o, _l6), i = _u5.getShaping(_s4, _e35.rtl, _t16), i && i.length > 0) {
                    var _e36 = 1e30,
                        _t17 = -1e30;

                    var _iterator14 = _createForOfIteratorHelper(i),
                        _step14;

                    try {
                      for (_iterator14.s(); !(_step14 = _iterator14.n()).done;) {
                        var _n7 = _step14.value;
                        _e36 = Math.min(_e36, _n7.x), _t17 = Math.max(_t17, _n7.x);
                      }
                    } catch (err) {
                      _iterator14.e(err);
                    } finally {
                      _iterator14.f();
                    }

                    _n6 = (_t17 - _e36 + 2 * _TextShaping_js__WEBPACK_IMPORTED_MODULE_6__["SDF_GLYPH_SIZE"]) * P * _Placement_js__WEBPACK_IMPORTED_MODULE_7__["TILE_PIXEL_RATIO"];
                  }
                }

                var _iterator15 = _createForOfIteratorHelper(_e35.geometry),
                    _step15;

                try {
                  for (_iterator15.s(); !(_step15 = _iterator15.n()).done;) {
                    var _s5 = _step15.value;
                    var _o4 = [];

                    if (1 === a) {
                      if (i && i.length > 0 && _ && _.size) {
                        var _e37 = _.size * _Placement_js__WEBPACK_IMPORTED_MODULE_7__["TILE_PIXEL_RATIO"] * (2 + Math.min(2, 4 * Math.abs(_.offset[1])));

                        _s5 = g._smoothVertices(_s5, _e37);
                      }

                      g._pushAnchors(_o4, _s5, l, _n6);
                    } else 2 === a ? g._pushCenterAnchor(_o4, _s5) : 3 === _e35.type ? g._pushCentroid(_o4, _s5) : _o4.push(new _Placement_js__WEBPACK_IMPORTED_MODULE_7__["Anchor"](_s5[0].x, _s5[0].y));

                    for (var _i17 = 0, _o5 = _o4; _i17 < _o5.length; _i17++) {
                      var _a8 = _o5[_i17];
                      if (_a8.x < 0 || _a8.x > _Placement_js__WEBPACK_IMPORTED_MODULE_7__["TILE_COORD_SIZE"] || _a8.y < 0 || _a8.y > _Placement_js__WEBPACK_IMPORTED_MODULE_7__["TILE_COORD_SIZE"]) continue;
                      if (r && _n6 > 0 && 0 === _.rotationAlignment && !g._honorsTextMaxAngle(_s5, _a8, _n6, V, A)) continue;
                      var _o6 = {
                        shaping: i,
                        line: _s5,
                        iconMosaicItem: _t15,
                        anchor: _a8,
                        symbolFeature: _e35,
                        textColliders: [],
                        iconColliders: [],
                        textVertexRanges: [],
                        iconVertexRanges: []
                      };
                      b.push(_o6), this._processFeature(_o6, p, _);
                    }
                  }
                } catch (err) {
                  _iterator15.e(err);
                } finally {
                  _iterator15.f();
                }
              }
            } catch (err) {
              _iterator13.e(err);
            } finally {
              _iterator13.f();
            }

            b.sort(y), this._addPlacedGlyphs(), this._symbolInstances = b;
          }
        }, {
          key: "serialize",
          value: function serialize() {
            var e = 13;
            e += this.layerUIDs.length, e += 3 * this.markerPageMap.size, e += 3 * this.glyphsPageMap.size, e += g.symbolsSerializationLength(this._symbolInstances), e += this._iconVertexBuffer.array.length, e += this._iconIndexBuffer.array.length, e += this._textVertexBuffer.array.length, e += this._textIndexBuffer.array.length;
            var t = 0;
            var i = new Uint32Array(e),
                n = new Int32Array(i.buffer),
                a = new Float32Array(i.buffer);
            i[t++] = this.type, i[t++] = this.layerUIDs.length;

            for (var _e38 = 0; _e38 < this.layerUIDs.length; _e38++) {
              i[t++] = this.layerUIDs[_e38];
            }

            i[t++] = this._isIconSDF ? 1 : 0, i[t++] = this._iconVertexBuffer.isDataDriven() ? 1 : 0, i[t++] = this._textVertexBuffer.isDataDriven() ? 1 : 0, i[t++] = this.markerPageMap.size, this.markerPageMap.forEach(function (_ref, a) {
              var _ref2 = _slicedToArray(_ref, 2),
                  e = _ref2[0],
                  n = _ref2[1];

              i[t++] = a, i[t++] = e, i[t++] = n;
            }), i[t++] = this.glyphsPageMap.size, this.glyphsPageMap.forEach(function (_ref3, a) {
              var _ref4 = _slicedToArray(_ref3, 2),
                  e = _ref4[0],
                  n = _ref4[1];

              i[t++] = a, i[t++] = e, i[t++] = n;
            }), i[t++] = this._iconVertexBuffer.index / 4, i[t++] = this._textVertexBuffer.index / 4, t = g.serializeSymbols(i, n, a, t, this._symbolInstances), i[t++] = this._iconVertexBuffer.array.length;

            for (var _e39 = 0; _e39 < this._iconVertexBuffer.array.length; _e39++) {
              n[t++] = this._iconVertexBuffer.array[_e39];
            }

            i[t++] = this._iconIndexBuffer.array.length;

            for (var _e40 = 0; _e40 < this._iconIndexBuffer.array.length; _e40++) {
              i[t++] = this._iconIndexBuffer.array[_e40];
            }

            i[t++] = this._textVertexBuffer.array.length;

            for (var _e41 = 0; _e41 < this._textVertexBuffer.array.length; _e41++) {
              n[t++] = this._textVertexBuffer.array[_e41];
            }

            i[t++] = this._textIndexBuffer.array.length;

            for (var _e42 = 0; _e42 < this._textIndexBuffer.array.length; _e42++) {
              i[t++] = this._textIndexBuffer.array[_e42];
            }

            return i.buffer;
          }
        }, {
          key: "_replaceKeys",
          value: function _replaceKeys(e, t) {
            return e.replace(/{([^{}]+)}/g, function (e, i) {
              return i in t ? t[i] : "";
            });
          }
        }, {
          key: "_processFeature",
          value: function _processFeature(e, t, i) {
            var a = e.line,
                s = e.iconMosaicItem,
                o = e.shaping,
                r = e.anchor,
                l = !!s;
            var h = !0;
            l && (h = t.optional || !s);
            var x = o && o.length > 0;
            var c,
                d,
                f = !0;

            if (x && (f = i.optional || !o || 0 === o.length), l && (c = this._placementEngine.getIconPlacement(r, s, t)), (c || h) && (x && (d = this._placementEngine.getTextPlacement(r, o, a, i)), d || f)) {
              if (c && d || (f || h ? f || d ? h || c || (d = null) : c = null : (c = null, d = null)), d && (this._storePlacedGlyphs(e, d.shapes, this.zoom, i.rotationAlignment), d.textColliders)) {
                e.textColliders = d.textColliders;

                var _iterator16 = _createForOfIteratorHelper(d.textColliders),
                    _step16;

                try {
                  for (_iterator16.s(); !(_step16 = _iterator16.n()).done;) {
                    var _e43 = _step16.value;
                    _e43.minLod = Math.max(this.zoom + Object(_GeometryUtils_js__WEBPACK_IMPORTED_MODULE_2__["log2"])(_e43.minLod), 0), _e43.maxLod = Math.min(this.zoom + Object(_GeometryUtils_js__WEBPACK_IMPORTED_MODULE_2__["log2"])(_e43.maxLod), 25);
                    var _t18 = _e43.angle;

                    if (_t18) {
                      var _i18 = Math.cos(_t18),
                          n = Math.sin(_t18),
                          _a9 = _e43.dxPixels * _i18 - _e43.dyPixels * n,
                          _s6 = _e43.dxPixels * n + _e43.dyPixels * _i18,
                          _o7 = (_e43.dxPixels + _e43.width) * _i18 - _e43.dyPixels * n,
                          _r11 = (_e43.dxPixels + _e43.width) * n + _e43.dyPixels * _i18,
                          _l7 = _e43.dxPixels * _i18 - (_e43.dyPixels + _e43.height) * n,
                          _h = _e43.dxPixels * n + (_e43.dyPixels + _e43.height) * _i18,
                          _x13 = (_e43.dxPixels + _e43.width) * _i18 - (_e43.dyPixels + _e43.height) * n,
                          _c = (_e43.dxPixels + _e43.width) * n + (_e43.dyPixels + _e43.height) * _i18,
                          _d2 = Math.min(_a9, _o7, _l7, _x13),
                          _f3 = Math.max(_a9, _o7, _l7, _x13),
                          _y3 = Math.min(_s6, _r11, _h, _c),
                          _g10 = Math.max(_s6, _r11, _h, _c);

                      _e43.dxPixels = _d2, _e43.dyPixels = _y3, _e43.width = _f3 - _d2, _e43.height = _g10 - _y3;
                    }
                  }
                } catch (err) {
                  _iterator16.e(err);
                } finally {
                  _iterator16.f();
                }
              }

              if (c && (this._addPlacedIcons(e, c.shapes, this.zoom, s.page, 1 === t.rotationAlignment), c.iconColliders)) {
                e.iconColliders = c.iconColliders;

                var _iterator17 = _createForOfIteratorHelper(c.iconColliders),
                    _step17;

                try {
                  for (_iterator17.s(); !(_step17 = _iterator17.n()).done;) {
                    var _e44 = _step17.value;
                    _e44.minLod = Math.max(this.zoom + Object(_GeometryUtils_js__WEBPACK_IMPORTED_MODULE_2__["log2"])(_e44.minLod), 0), _e44.maxLod = Math.min(this.zoom + Object(_GeometryUtils_js__WEBPACK_IMPORTED_MODULE_2__["log2"])(_e44.maxLod), 25);
                    var _t19 = _e44.angle;

                    if (_t19) {
                      var _i19 = Math.cos(_t19),
                          _n8 = Math.sin(_t19),
                          _a10 = _e44.dxPixels * _i19 - _e44.dyPixels * _n8,
                          _s7 = _e44.dxPixels * _n8 + _e44.dyPixels * _i19,
                          _o8 = (_e44.dxPixels + _e44.width) * _i19 - _e44.dyPixels * _n8,
                          _r12 = (_e44.dxPixels + _e44.width) * _n8 + _e44.dyPixels * _i19,
                          _l8 = _e44.dxPixels * _i19 - (_e44.dyPixels + _e44.height) * _n8,
                          _h2 = _e44.dxPixels * _n8 + (_e44.dyPixels + _e44.height) * _i19,
                          _x14 = (_e44.dxPixels + _e44.width) * _i19 - (_e44.dyPixels + _e44.height) * _n8,
                          _c2 = (_e44.dxPixels + _e44.width) * _n8 + (_e44.dyPixels + _e44.height) * _i19,
                          _d3 = Math.min(_a10, _o8, _l8, _x14),
                          _f4 = Math.max(_a10, _o8, _l8, _x14),
                          _y4 = Math.min(_s7, _r12, _h2, _c2),
                          _g11 = Math.max(_s7, _r12, _h2, _c2);

                      _e44.dxPixels = _d3, _e44.dyPixels = _y4, _e44.width = _f4 - _d3, _e44.height = _g11 - _y4;
                    }
                  }
                } catch (err) {
                  _iterator17.e(err);
                } finally {
                  _iterator17.f();
                }
              }
            }
          }
        }, {
          key: "_addPlacedIcons",
          value: function _addPlacedIcons(e, t, i, a, s) {
            var o = e.symbolFeature.ddIconValues,
                r = Math.max(i - 1, 0),
                l = this._iconVertexBuffer,
                h = this._iconIndexBuffer,
                x = this._markerMap;

            var _iterator18 = _createForOfIteratorHelper(t),
                _step18;

            try {
              for (_iterator18.s(); !(_step18 = _iterator18.n()).done;) {
                var c = _step18.value;

                var _t20 = s ? 0 : Math.max(i + Object(_GeometryUtils_js__WEBPACK_IMPORTED_MODULE_2__["log2"])(c.minzoom), r),
                    d = s ? 25 : Math.min(i + Object(_GeometryUtils_js__WEBPACK_IMPORTED_MODULE_2__["log2"])(c.maxzoom), 25);

                if (d <= _t20) continue;
                var f = c.tl,
                    _y5 = c.tr,
                    _g12 = c.bl,
                    u = c.br,
                    m = c.mosaicRect,
                    p = c.labelAngle,
                    _ = c.minAngle,
                    M = c.maxAngle,
                    I = c.anchor,
                    b = l.index,
                    P = m.x,
                    V = m.y,
                    A = P + m.width,
                    L = V + m.height,
                    w = l.index;
                l.add(I.x, I.y, f.x, f.y, P, V, p, _, M, _t20, d, o), l.add(I.x, I.y, _y5.x, _y5.y, A, V, p, _, M, _t20, d, o), l.add(I.x, I.y, _g12.x, _g12.y, P, L, p, _, M, _t20, d, o), l.add(I.x, I.y, u.x, u.y, A, L, p, _, M, _t20, d, o), e.iconVertexRanges.length > 0 && e.iconVertexRanges[0][0] + e.iconVertexRanges[0][1] === w ? e.iconVertexRanges[0][1] += 4 : e.iconVertexRanges.push([w, 4]), h.add(b + 0, b + 1, b + 2), h.add(b + 1, b + 2, b + 3), x.has(a) ? x.get(a)[1] += 6 : x.set(a, [this._iconIndexStart + this._iconIndexCount, 6]), this._iconIndexCount += 6;
              }
            } catch (err) {
              _iterator18.e(err);
            } finally {
              _iterator18.f();
            }
          }
        }, {
          key: "_addPlacedGlyphs",
          value: function _addPlacedGlyphs() {
            var _this6 = this;

            var e = this._textVertexBuffer,
                t = this._textIndexBuffer,
                i = this._glyphMap;
            this._glyphBufferDataStorage.forEach(function (n, a) {
              var _iterator19 = _createForOfIteratorHelper(n),
                  _step19;

              try {
                for (_iterator19.s(); !(_step19 = _iterator19.n()).done;) {
                  var _s8 = _step19.value;
                  var _n9 = e.index,
                      o = _s8.symbolInstance,
                      _r13 = o.symbolFeature.ddTextValues,
                      l = e.index;
                  e.add(_s8.glyphAnchor[0], _s8.glyphAnchor[1], _s8.tl[0], _s8.tl[1], _s8.xmin, _s8.ymin, _s8.labelAngle, _s8.minAngle, _s8.maxAngle, _s8.minLod, _s8.maxLod, _r13), e.add(_s8.glyphAnchor[0], _s8.glyphAnchor[1], _s8.tr[0], _s8.tr[1], _s8.xmax, _s8.ymin, _s8.labelAngle, _s8.minAngle, _s8.maxAngle, _s8.minLod, _s8.maxLod, _r13), e.add(_s8.glyphAnchor[0], _s8.glyphAnchor[1], _s8.bl[0], _s8.bl[1], _s8.xmin, _s8.ymax, _s8.labelAngle, _s8.minAngle, _s8.maxAngle, _s8.minLod, _s8.maxLod, _r13), e.add(_s8.glyphAnchor[0], _s8.glyphAnchor[1], _s8.br[0], _s8.br[1], _s8.xmax, _s8.ymax, _s8.labelAngle, _s8.minAngle, _s8.maxAngle, _s8.minLod, _s8.maxLod, _r13), o.textVertexRanges.length > 0 && o.textVertexRanges[0][0] + o.textVertexRanges[0][1] === l ? o.textVertexRanges[0][1] += 4 : o.textVertexRanges.push([l, 4]), t.add(_n9 + 0, _n9 + 1, _n9 + 2), t.add(_n9 + 1, _n9 + 2, _n9 + 3), i.has(a) ? i.get(a)[1] += 6 : i.set(a, [_this6._textIndexStart + _this6._textIndexCount, 6]), _this6._textIndexCount += 6;
                }
              } catch (err) {
                _iterator19.e(err);
              } finally {
                _iterator19.f();
              }
            }), this._glyphBufferDataStorage.clear();
          }
        }, {
          key: "_storePlacedGlyphs",
          value: function _storePlacedGlyphs(e, t, i, a) {
            var s = Math.max(i - 1, 0),
                o = 1 === a;

            var r, l, h, x, c, d, f, y, _g5, u, m;

            var _iterator20 = _createForOfIteratorHelper(t),
                _step20;

            try {
              for (_iterator20.s(); !(_step20 = _iterator20.n()).done;) {
                var _a11 = _step20.value;
                if (r = o ? 0 : Math.max(i + Object(_GeometryUtils_js__WEBPACK_IMPORTED_MODULE_2__["log2"])(_a11.minzoom), s), l = o ? 25 : Math.min(i + Object(_GeometryUtils_js__WEBPACK_IMPORTED_MODULE_2__["log2"])(_a11.maxzoom), 25), l <= r) continue;
                h = _a11.tl, x = _a11.tr, c = _a11.bl, d = _a11.br, f = _a11.labelAngle, y = _a11.minAngle, _g5 = _a11.maxAngle, u = _a11.anchor, m = _a11.mosaicRect, this._glyphBufferDataStorage.has(_a11.page) || this._glyphBufferDataStorage.set(_a11.page, []);

                this._glyphBufferDataStorage.get(_a11.page).push({
                  glyphAnchor: [u.x, u.y],
                  tl: [h.x, h.y],
                  tr: [x.x, x.y],
                  bl: [c.x, c.y],
                  br: [d.x, d.y],
                  xmin: m.x,
                  ymin: m.y,
                  xmax: m.x + m.width,
                  ymax: m.y + m.height,
                  labelAngle: f,
                  minAngle: y,
                  maxAngle: _g5,
                  minLod: r,
                  maxLod: l,
                  placementLod: s,
                  symbolInstance: e
                });
              }
            } catch (err) {
              _iterator20.e(err);
            } finally {
              _iterator20.f();
            }
          }
        }], [{
          key: "symbolsSerializationLength",
          value: function symbolsSerializationLength(e) {
            var t = 0;
            t += 1;

            var _iterator21 = _createForOfIteratorHelper(e || []),
                _step21;

            try {
              for (_iterator21.s(); !(_step21 = _iterator21.n()).done;) {
                var i = _step21.value;
                t += 4, t += 1;

                var _iterator22 = _createForOfIteratorHelper(i.textColliders),
                    _step22;

                try {
                  for (_iterator22.s(); !(_step22 = _iterator22.n()).done;) {
                    var _e45 = _step22.value;
                    t += 10;
                  }
                } catch (err) {
                  _iterator22.e(err);
                } finally {
                  _iterator22.f();
                }

                var _iterator23 = _createForOfIteratorHelper(i.iconColliders),
                    _step23;

                try {
                  for (_iterator23.s(); !(_step23 = _iterator23.n()).done;) {
                    var _e46 = _step23.value;
                    t += 10;
                  }
                } catch (err) {
                  _iterator23.e(err);
                } finally {
                  _iterator23.f();
                }

                t += 1, t += 2 * i.textVertexRanges.length, t += 1, t += 2 * i.iconVertexRanges.length;
              }
            } catch (err) {
              _iterator21.e(err);
            } finally {
              _iterator21.f();
            }

            return t;
          }
        }, {
          key: "serializeSymbols",
          value: function serializeSymbols(e, t, i, n, a) {
            a = a || [], t[n++] = a.length;

            var _iterator24 = _createForOfIteratorHelper(a),
                _step24;

            try {
              for (_iterator24.s(); !(_step24 = _iterator24.n()).done;) {
                var _e47 = _step24.value;
                t[n++] = _e47.anchor.x, t[n++] = _e47.anchor.y, t[n++] = _e47.symbolFeature.hash, t[n++] = _e47.symbolFeature.priority, t[n++] = _e47.textColliders.length + _e47.iconColliders.length;

                var _iterator25 = _createForOfIteratorHelper(_e47.textColliders),
                    _step25;

                try {
                  for (_iterator25.s(); !(_step25 = _iterator25.n()).done;) {
                    var _a12 = _step25.value;
                    t[n++] = _a12.xTile, t[n++] = _a12.yTile, t[n++] = _a12.dxPixels, t[n++] = _a12.dyPixels, t[n++] = _a12.hard ? 1 : 0, t[n++] = _a12.partIndex, i[n++] = _a12.minLod, i[n++] = _a12.maxLod, t[n++] = _a12.width, t[n++] = _a12.height;
                  }
                } catch (err) {
                  _iterator25.e(err);
                } finally {
                  _iterator25.f();
                }

                var _iterator26 = _createForOfIteratorHelper(_e47.iconColliders),
                    _step26;

                try {
                  for (_iterator26.s(); !(_step26 = _iterator26.n()).done;) {
                    var _a13 = _step26.value;
                    t[n++] = _a13.xTile, t[n++] = _a13.yTile, t[n++] = _a13.dxPixels, t[n++] = _a13.dyPixels, t[n++] = _a13.hard ? 1 : 0, t[n++] = _a13.partIndex, i[n++] = _a13.minLod, i[n++] = _a13.maxLod, t[n++] = _a13.width, t[n++] = _a13.height;
                  }
                } catch (err) {
                  _iterator26.e(err);
                } finally {
                  _iterator26.f();
                }

                t[n++] = _e47.textVertexRanges.length;

                var _iterator27 = _createForOfIteratorHelper(_e47.textVertexRanges),
                    _step27;

                try {
                  for (_iterator27.s(); !(_step27 = _iterator27.n()).done;) {
                    var _step27$value = _slicedToArray(_step27.value, 2),
                        _i20 = _step27$value[0],
                        _a14 = _step27$value[1];

                    t[n++] = _i20, t[n++] = _a14;
                  }
                } catch (err) {
                  _iterator27.e(err);
                } finally {
                  _iterator27.f();
                }

                t[n++] = _e47.iconVertexRanges.length;

                var _iterator28 = _createForOfIteratorHelper(_e47.iconVertexRanges),
                    _step28;

                try {
                  for (_iterator28.s(); !(_step28 = _iterator28.n()).done;) {
                    var _step28$value = _slicedToArray(_step28.value, 2),
                        _i21 = _step28$value[0],
                        _a15 = _step28$value[1];

                    t[n++] = _i21, t[n++] = _a15;
                  }
                } catch (err) {
                  _iterator28.e(err);
                } finally {
                  _iterator28.f();
                }
              }
            } catch (err) {
              _iterator24.e(err);
            } finally {
              _iterator24.f();
            }

            return n;
          }
        }, {
          key: "_pushAnchors",
          value: function _pushAnchors(e, t, i, n) {
            i += n;
            var s = 0;
            var o = t.length - 1;

            for (var _e48 = 0; _e48 < o; _e48++) {
              s += _webgl_Geometry_js__WEBPACK_IMPORTED_MODULE_4__["Point"].distance(t[_e48], t[_e48 + 1]);
            }

            var l = n || i;
            if (l *= .5, s <= l) return;
            var h = l / s;
            var x = 0,
                c = -(i = s / Math.max(Math.round(s / i), 1)) / 2;
            var f = t.length - 1;

            for (var _n10 = 0; _n10 < f; _n10++) {
              var _s9 = t[_n10],
                  _o9 = t[_n10 + 1],
                  _r14 = _o9.x - _s9.x,
                  _l9 = _o9.y - _s9.y,
                  _f5 = Math.sqrt(_r14 * _r14 + _l9 * _l9);

              var _y6 = void 0;

              for (; c + i < x + _f5;) {
                c += i;

                var _t21 = (c - x) / _f5,
                    _g13 = Object(_GeometryUtils_js__WEBPACK_IMPORTED_MODULE_2__["interpolate"])(_s9.x, _o9.x, _t21),
                    u = Object(_GeometryUtils_js__WEBPACK_IMPORTED_MODULE_2__["interpolate"])(_s9.y, _o9.y, _t21);

                void 0 === _y6 && (_y6 = Math.atan2(_l9, _r14)), e.push(new _Placement_js__WEBPACK_IMPORTED_MODULE_7__["Anchor"](_g13, u, _y6, _n10, h));
              }

              x += _f5;
            }
          }
        }, {
          key: "_pushCenterAnchor",
          value: function _pushCenterAnchor(e, t) {
            var i = 0;
            var n = t.length - 1;

            for (var _e49 = 0; _e49 < n; _e49++) {
              i += _webgl_Geometry_js__WEBPACK_IMPORTED_MODULE_4__["Point"].distance(t[_e49], t[_e49 + 1]);
            }

            var s = i / 2;
            var o = 0;
            var l = t.length - 1;

            for (var _i22 = 0; _i22 < l; _i22++) {
              var _n11 = t[_i22],
                  _r15 = t[_i22 + 1],
                  _l10 = _r15.x - _n11.x,
                  h = _r15.y - _n11.y,
                  x = Math.sqrt(_l10 * _l10 + h * h);

              if (s < o + x) {
                var _t22 = (s - o) / x,
                    c = Object(_GeometryUtils_js__WEBPACK_IMPORTED_MODULE_2__["interpolate"])(_n11.x, _r15.x, _t22),
                    f = Object(_GeometryUtils_js__WEBPACK_IMPORTED_MODULE_2__["interpolate"])(_n11.y, _r15.y, _t22),
                    _y7 = Math.atan2(h, _l10);

                return void e.push(new _Placement_js__WEBPACK_IMPORTED_MODULE_7__["Anchor"](c, f, _y7, _i22, 0));
              }

              o += x;
            }
          }
        }, {
          key: "_deviation",
          value: function _deviation(e, t, i) {
            var n = (t.x - e.x) * (i.x - t.x) + (t.y - e.y) * (i.y - t.y),
                a = (t.x - e.x) * (i.y - t.y) - (t.y - e.y) * (i.x - t.x);
            return Math.atan2(a, n);
          }
        }, {
          key: "_honorsTextMaxAngle",
          value: function _honorsTextMaxAngle(e, t, i, n, a) {
            var s = 0;
            var o = i / 2;
            var l = new _webgl_Geometry_js__WEBPACK_IMPORTED_MODULE_4__["Point"](t.x, t.y),
                h = t.segment + 1;

            for (; s > -o;) {
              if (--h, h < 0) return !1;
              s -= _webgl_Geometry_js__WEBPACK_IMPORTED_MODULE_4__["Point"].distance(e[h], l), l = e[h];
            }

            s += _webgl_Geometry_js__WEBPACK_IMPORTED_MODULE_4__["Point"].distance(e[h], e[h + 1]);
            var x = [];
            var c = 0;
            var d = e.length;

            for (; s < o;) {
              var _t23 = e[h];

              var _i23 = void 0,
                  _o10 = h;

              do {
                if (++_o10, _o10 === d) return !1;
                _i23 = e[_o10];
              } while (_i23.isEqual(_t23));

              var _l11 = void 0,
                  f = _o10;

              do {
                if (++f, f === d) return !1;
                _l11 = e[f];
              } while (_l11.isEqual(_i23));

              var _y8 = this._deviation(_t23, _i23, _l11);

              for (x.push({
                deviation: _y8,
                distToAnchor: s
              }), c += _y8; s - x[0].distToAnchor > a;) {
                c -= x.shift().deviation;
              }

              if (Math.abs(c) > n) return !1;
              s += _webgl_Geometry_js__WEBPACK_IMPORTED_MODULE_4__["Point"].distance(_i23, _l11), h = _o10;
            }

            return !0;
          }
        }, {
          key: "_smoothVertices",
          value: function _smoothVertices(e, t) {
            if (t <= 0) return e;
            var i = e.length;
            if (i < 3) return e;
            var n = [];
            var a = 0,
                s = 0;
            n.push(0);

            for (var _t24 = 1; _t24 < i; _t24++) {
              var _i24 = _webgl_Geometry_js__WEBPACK_IMPORTED_MODULE_4__["Point"].distance(e[_t24], e[_t24 - 1]);

              _i24 > 0 && (a += _i24, n.push(a), s++, s !== _t24 && (e[s] = e[_t24]));
            }

            if (i = s + 1, i < 3) return e;
            t = Math.min(t, .2 * a);

            var o = e[0].x,
                l = e[0].y,
                h = e[i - 1].x,
                x = e[i - 1].y,
                c = _webgl_Geometry_js__WEBPACK_IMPORTED_MODULE_4__["Point"].sub(e[0], e[1]);

            c.normalize(), e[0].x += t * c.x, e[0].y += t * c.y, c.assignSub(e[i - 1], e[i - 2]), c.normalize(), e[i - 1].x += t * c.x, e[i - 1].y += t * c.y, n[0] -= t, n[i - 1] += t;
            var d = [];
            d.push(new _webgl_Geometry_js__WEBPACK_IMPORTED_MODULE_4__["Point"](o, l));
            var f = 1e-6,
                y = .5 * t;

            for (var _a16 = 1; _a16 < i - 1; _a16++) {
              var _s10 = 0,
                  _o11 = 0,
                  _l12 = 0;

              for (var _i25 = _a16 - 1; _i25 >= 0; _i25--) {
                var _r16 = y + n[_i25 + 1] - n[_a16];

                if (_r16 < 0) break;

                var _h3 = n[_i25 + 1] - n[_i25],
                    _x15 = n[_a16] - n[_i25] < y ? 1 : _r16 / _h3;

                if (_x15 < f) break;

                var _c3 = _x15 * _x15,
                    _d4 = _x15 * _r16 - .5 * _c3 * _h3,
                    _g14 = _x15 * _h3 / t,
                    u = e[_i25 + 1],
                    m = e[_i25].x - u.x,
                    p = e[_i25].y - u.y;

                _s10 += _g14 / _d4 * (u.x * _x15 * _r16 + .5 * _c3 * (_r16 * m - _h3 * u.x) - _c3 * _x15 * _h3 * m / 3), _o11 += _g14 / _d4 * (u.y * _x15 * _r16 + .5 * _c3 * (_r16 * p - _h3 * u.y) - _c3 * _x15 * _h3 * p / 3), _l12 += _g14;
              }

              for (var _r17 = _a16 + 1; _r17 < i; _r17++) {
                var _i26 = y - n[_r17 - 1] + n[_a16];

                if (_i26 < 0) break;

                var _h4 = n[_r17] - n[_r17 - 1],
                    _x16 = n[_r17] - n[_a16] < y ? 1 : _i26 / _h4;

                if (_x16 < f) break;

                var _c4 = _x16 * _x16,
                    _d5 = _x16 * _i26 - .5 * _c4 * _h4,
                    _g15 = _x16 * _h4 / t,
                    _u6 = e[_r17 - 1],
                    _m = e[_r17].x - _u6.x,
                    _p2 = e[_r17].y - _u6.y;

                _s10 += _g15 / _d5 * (_u6.x * _x16 * _i26 + .5 * _c4 * (_i26 * _m - _h4 * _u6.x) - _c4 * _x16 * _h4 * _m / 3), _o11 += _g15 / _d5 * (_u6.y * _x16 * _i26 + .5 * _c4 * (_i26 * _p2 - _h4 * _u6.y) - _c4 * _x16 * _h4 * _p2 / 3), _l12 += _g15;
              }

              d.push(new _webgl_Geometry_js__WEBPACK_IMPORTED_MODULE_4__["Point"](_s10 / _l12, _o11 / _l12));
            }

            return d.push(new _webgl_Geometry_js__WEBPACK_IMPORTED_MODULE_4__["Point"](h, x)), e[0].x = o, e[0].y = l, e[i - 1].x = h, e[i - 1].y = x, d;
          }
        }, {
          key: "_pushCentroid",
          value: function _pushCentroid(e, t) {
            var i = 4096,
                n = 4096,
                a = t.length - 1;
            var s = 0,
                o = 0,
                r = 0,
                l = t[0].x,
                h = t[0].y;
            l > i && (l = i), l < 0 && (l = 0), h > n && (h = n), h < 0 && (h = 0);

            for (var _e50 = 1; _e50 < a; _e50++) {
              var _a17 = t[_e50].x,
                  x = t[_e50].y,
                  c = t[_e50 + 1].x,
                  d = t[_e50 + 1].y;
              _a17 > i && (_a17 = i), _a17 < 0 && (_a17 = 0), x > n && (x = n), x < 0 && (x = 0), c > i && (c = i), c < 0 && (c = 0), d > n && (d = n), d < 0 && (d = 0);
              var f = (_a17 - l) * (d - h) - (c - l) * (x - h);
              s += f * (l + _a17 + c), o += f * (h + x + d), r += f;
            }

            s /= 3 * r, o /= 3 * r, isNaN(s) || isNaN(o) || e.push(new _Placement_js__WEBPACK_IMPORTED_MODULE_7__["Anchor"](s, o));
          }
        }]);

        return g;
      }(_BaseBucket_js__WEBPACK_IMPORTED_MODULE_5__["default"]);

      g._bidiEngine = new _core_BidiEngine_js__WEBPACK_IMPORTED_MODULE_1__["default"]();
      /* harmony default export */

      __webpack_exports__["default"] = g;
      /***/
    },

    /***/
    "ixhk":
    /*!****************************************************************************!*\
      !*** ./node_modules/@arcgis/core/views/2d/engine/vectorTiles/Placement.js ***!
      \****************************************************************************/

    /*! exports provided: Anchor, PlacedSymbol, Placement, PlacementEngine, TILE_COORD_SIZE, TILE_PIXEL_RATIO, TILE_PIXEL_SIZE */

    /***/
    function ixhk(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "Anchor", function () {
        return d;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "PlacedSymbol", function () {
        return p;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "Placement", function () {
        return y;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "PlacementEngine", function () {
        return f;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "TILE_COORD_SIZE", function () {
        return g;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "TILE_PIXEL_RATIO", function () {
        return x;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "TILE_PIXEL_SIZE", function () {
        return m;
      });
      /* harmony import */


      var _GeometryUtils_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ./GeometryUtils.js */
      "OxmL");
      /* harmony import */


      var _decluttering_config_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./decluttering/config.js */
      "2yHJ");
      /* harmony import */


      var _webgl_Geometry_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ../webgl/Geometry.js */
      "OXZQ");
      /* harmony import */


      var _TextShaping_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./TextShaping.js */
      "ynYs");
      /*
      All material copyright ESRI, All Rights Reserved, unless otherwise specified.
      See https://js.arcgis.com/4.18/esri/copyright.txt for details.
      */


      var g = 4096,
          m = 512,
          x = 8;

      var d = function d(e, t) {
        var i = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 0;
        var n = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : -1;
        var s = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : .5;

        _classCallCheck(this, d);

        this.x = e, this.y = t, this.angle = i, this.segment = n, this.minzoom = s;
      };

      var w = function w(e, t, n, s, a) {
        var o = arguments.length > 5 && arguments[5] !== undefined ? arguments[5] : .5;
        var l = arguments.length > 6 && arguments[6] !== undefined ? arguments[6] : _GeometryUtils_js__WEBPACK_IMPORTED_MODULE_0__["C_INFINITY"];

        _classCallCheck(this, w);

        this.anchor = e, this.labelAngle = t, this.glyphAngle = n, this.page = s, this.alternateVerticalGlyph = a, this.minzoom = o, this.maxzoom = l;
      };

      var p = function p(e, t, i, n, s, a, o, l, h, r, c, g) {
        _classCallCheck(this, p);

        this.tl = e, this.tr = t, this.bl = i, this.br = n, this.mosaicRect = s, this.labelAngle = a, this.minAngle = o, this.maxAngle = l, this.anchor = h, this.minzoom = r, this.maxzoom = c, this.page = g;
      };

      var y = function y(e) {
        _classCallCheck(this, y);

        this.shapes = e;
      };

      var f = /*#__PURE__*/function () {
        function f() {
          _classCallCheck(this, f);
        }

        _createClass(f, [{
          key: "getIconPlacement",
          value: function getIconPlacement(i, n, s) {
            var a = new _webgl_Geometry_js__WEBPACK_IMPORTED_MODULE_2__["Point"](i.x, i.y),
                h = 0 === s.rotationAlignment,
                r = s.keepUpright;
            var c = s.rotate * _GeometryUtils_js__WEBPACK_IMPORTED_MODULE_0__["C_DEG_TO_RAD"];
            h && (c += i.angle);
            var g = new y([]);
            return s.allowOverlap && s.ignorePlacement || !_decluttering_config_js__WEBPACK_IMPORTED_MODULE_1__["DECLUTTER_TILES"] || (g.iconColliders = []), this._addIconPlacement(g, a, n, s, c), h && r && this._addIconPlacement(g, a, n, s, c + _GeometryUtils_js__WEBPACK_IMPORTED_MODULE_0__["C_PI"]), g;
          }
        }, {
          key: "_addIconPlacement",
          value: function _addIconPlacement(e, t, n, s, a) {
            var h = n.pixelRatio,
                r = n.width / h,
                c = n.height / h,
                g = s.offset;
            var m = g[0],
                x = g[1];

            switch (s.anchor) {
              case 0:
                m -= r / 2, x -= c / 2;
                break;

              case 1:
                x -= c / 2;
                break;

              case 2:
                m -= r, x -= c / 2;
                break;

              case 3:
                m -= r / 2;
                break;

              case 4:
                m -= r / 2, x -= c;
                break;

              case 5:
                break;

              case 7:
                x -= c;
                break;

              case 6:
                m -= r;
                break;

              case 8:
                m -= r, x -= c;
            }

            var d = n.rect,
                w = 2 / h,
                y = m - w,
                _f6 = x - w,
                b = y + d.width / h,
                u = _f6 + d.height / h,
                I = new _webgl_Geometry_js__WEBPACK_IMPORTED_MODULE_2__["Point"](y, _f6),
                k = new _webgl_Geometry_js__WEBPACK_IMPORTED_MODULE_2__["Point"](b, u),
                T = new _webgl_Geometry_js__WEBPACK_IMPORTED_MODULE_2__["Point"](y, u),
                P = new _webgl_Geometry_js__WEBPACK_IMPORTED_MODULE_2__["Point"](b, _f6);

            if (0 !== a) {
              var _e51 = Math.cos(a),
                  _t25 = Math.sin(a);

              I.rotate(_e51, _t25), k.rotate(_e51, _t25), T.rotate(_e51, _t25), P.rotate(_e51, _t25);
            }

            var N = new p(I, P, T, k, d, a, 0, 256, t, .5, _GeometryUtils_js__WEBPACK_IMPORTED_MODULE_0__["C_INFINITY"], 0);

            if (e.shapes.push(N), (!s.allowOverlap || !s.ignorePlacement) && _decluttering_config_js__WEBPACK_IMPORTED_MODULE_1__["DECLUTTER_TILES"]) {
              var _n12 = s.size,
                  o = s.padding,
                  l = {
                xTile: t.x,
                yTile: t.y,
                dxPixels: m * _n12 - o,
                dyPixels: x * _n12 - o,
                hard: !s.optional,
                partIndex: 0,
                width: r * _n12 + 2 * o,
                height: c * _n12 + 2 * o,
                angle: a,
                minLod: .5,
                maxLod: _GeometryUtils_js__WEBPACK_IMPORTED_MODULE_0__["C_INFINITY"]
              };
              e.iconColliders.push(l);
            }
          }
        }, {
          key: "getTextPlacement",
          value: function getTextPlacement(n, s, a, o) {
            var g = new _webgl_Geometry_js__WEBPACK_IMPORTED_MODULE_2__["Point"](n.x, n.y),
                m = o.rotate * _GeometryUtils_js__WEBPACK_IMPORTED_MODULE_0__["C_DEG_TO_RAD"],
                x = 0 === o.rotationAlignment,
                d = o.keepUpright,
                _f7 = o.padding;
            var b = .5;
            var u = !x ? 0 : n.angle,
                I = n.segment >= 0 && x,
                k = o.allowOverlap && o.ignorePlacement ? null : [],
                T = [],
                P = !I;
            var N = Number.POSITIVE_INFINITY,
                z = Number.NEGATIVE_INFINITY,
                A = N,
                _ = z;
            var G = (I || x) && d,
                v = o.size / _TextShaping_js__WEBPACK_IMPORTED_MODULE_3__["SDF_GLYPH_SIZE"];
            var M = !1;

            var _iterator29 = _createForOfIteratorHelper(s),
                _step29;

            try {
              for (_iterator29.s(); !(_step29 = _iterator29.n()).done;) {
                var _e54 = _step29.value;

                if (_e54.vertical) {
                  M = !0;
                  break;
                }
              }
            } catch (err) {
              _iterator29.e(err);
            } finally {
              _iterator29.f();
            }

            var E,
                L = 0,
                V = 0;

            if (!I && M) {
              var _e52 = _TextShaping_js__WEBPACK_IMPORTED_MODULE_3__["TextShaping"].getTextBox(s, o.lineHeight * _TextShaping_js__WEBPACK_IMPORTED_MODULE_3__["SDF_GLYPH_SIZE"]);

              switch (o.anchor) {
                case 1:
                  L = _e52.height / 2, V = -_e52.width / 2;
                  break;

                case 2:
                  L = -_e52.height / 2, V = _e52.width / 2;
                  break;

                case 3:
                  L = _e52.height / 2, V = _e52.width / 2;
                  break;

                case 4:
                  L = -_e52.height / 2, V = -_e52.width / 2;
                  break;

                case 5:
                  L = _e52.height;
                  break;

                case 7:
                  V = -_e52.width;
                  break;

                case 6:
                  V = _e52.width;
                  break;

                case 8:
                  L = -_e52.height;
              }
            }

            L += o.offset[0] * _TextShaping_js__WEBPACK_IMPORTED_MODULE_3__["SDF_GLYPH_SIZE"], V += o.offset[1] * _TextShaping_js__WEBPACK_IMPORTED_MODULE_3__["SDF_GLYPH_SIZE"];

            var _iterator30 = _createForOfIteratorHelper(s),
                _step30;

            try {
              for (_iterator30.s(); !(_step30 = _iterator30.n()).done;) {
                var _e55 = _step30.value;
                var _s12 = _e55.glyphMosaicItem;
                if (!_s12 || _s12.rect.isEmpty) continue;
                var h = _s12.rect,
                    _r18 = _s12.metrics,
                    _y9 = _s12.page;

                if (k && P) {
                  if (void 0 !== E && E !== _e55.y) {
                    var _e56 = void 0,
                        _t26 = void 0,
                        _s13 = void 0,
                        _a19 = void 0;

                    M ? (_e56 = -_ + L, _t26 = N + V, _s13 = _ - A, _a19 = z - N) : (_e56 = N + L, _t26 = A + V, _s13 = z - N, _a19 = _ - A);
                    var _l13 = {
                      xTile: n.x,
                      yTile: n.y,
                      dxPixels: _e56 * v - _f7,
                      dyPixels: _t26 * v - _f7,
                      hard: !o.optional,
                      partIndex: 1,
                      width: _s13 * v + 2 * _f7,
                      height: _a19 * v + 2 * _f7,
                      angle: m,
                      minLod: .5,
                      maxLod: _GeometryUtils_js__WEBPACK_IMPORTED_MODULE_0__["C_INFINITY"]
                    };
                    k.push(_l13), N = Number.POSITIVE_INFINITY, z = Number.NEGATIVE_INFINITY, A = N, _ = z;
                  }

                  E = _e55.y;
                }

                var _O = [];

                if (I) {
                  var _t27 = .5 * _s12.metrics.width,
                      i = (_e55.x + _r18.left - 4 + _t27) * v * 8;

                  if (b = this._placeGlyph(n, b, i, a, n.segment, 1, _e55.vertical, _y9, _O), d && (b = this._placeGlyph(n, b, i, a, n.segment, -1, _e55.vertical, _y9, _O)), b >= 2) break;
                } else _O.push(new w(g, u, u, _y9, !1)), x && d && _O.push(new w(g, u + _GeometryUtils_js__WEBPACK_IMPORTED_MODULE_0__["C_PI"], u + _GeometryUtils_js__WEBPACK_IMPORTED_MODULE_0__["C_PI"], _y9, !1));

                var j = _e55.x + _r18.left,
                    F = _e55.y - _TextShaping_js__WEBPACK_IMPORTED_MODULE_3__["SDF_GLYPH_BASELINE"] - _r18.top,
                    Y = j + _r18.width,
                    q = F + _r18.height;
                var C = void 0,
                    S = void 0,
                    U = void 0,
                    R = void 0,
                    B = void 0,
                    H = void 0,
                    D = void 0,
                    J = void 0;
                if (!I && M) {
                  if (_e55.vertical) {
                    var _e57 = (j + Y) / 2 - _r18.height / 2,
                        _t28 = (F + q) / 2 + _r18.width / 2;

                    C = new _webgl_Geometry_js__WEBPACK_IMPORTED_MODULE_2__["Point"](-_t28 - 4 + L, _e57 - 4 + V), S = new _webgl_Geometry_js__WEBPACK_IMPORTED_MODULE_2__["Point"](C.x + h.width, C.y + h.height), U = new _webgl_Geometry_js__WEBPACK_IMPORTED_MODULE_2__["Point"](C.x, S.y), R = new _webgl_Geometry_js__WEBPACK_IMPORTED_MODULE_2__["Point"](S.x, C.y);
                  } else C = new _webgl_Geometry_js__WEBPACK_IMPORTED_MODULE_2__["Point"](4 - F + L, j - 4 + V), S = new _webgl_Geometry_js__WEBPACK_IMPORTED_MODULE_2__["Point"](C.x - h.height, C.y + h.width), U = new _webgl_Geometry_js__WEBPACK_IMPORTED_MODULE_2__["Point"](S.x, C.y), R = new _webgl_Geometry_js__WEBPACK_IMPORTED_MODULE_2__["Point"](C.x, S.y);
                } else C = new _webgl_Geometry_js__WEBPACK_IMPORTED_MODULE_2__["Point"](j - 4 + L, F - 4 + V), S = new _webgl_Geometry_js__WEBPACK_IMPORTED_MODULE_2__["Point"](C.x + h.width, C.y + h.height), U = new _webgl_Geometry_js__WEBPACK_IMPORTED_MODULE_2__["Point"](C.x, S.y), R = new _webgl_Geometry_js__WEBPACK_IMPORTED_MODULE_2__["Point"](S.x, C.y);

                for (var _i27 = 0, _O2 = _O; _i27 < _O2.length; _i27++) {
                  var _t29 = _O2[_i27];

                  var _i28 = void 0,
                      _s14 = void 0,
                      _a20 = void 0,
                      c = void 0;

                  if (_t29.alternateVerticalGlyph) {
                    if (!B) {
                      var _e58 = (F + q) / 2 + V;

                      B = new _webgl_Geometry_js__WEBPACK_IMPORTED_MODULE_2__["Point"]((j + Y) / 2 + L - _r18.height / 2 - 4, _e58 + _r18.width / 2 + 4), H = new _webgl_Geometry_js__WEBPACK_IMPORTED_MODULE_2__["Point"](B.x + h.height, B.y - h.width), D = new _webgl_Geometry_js__WEBPACK_IMPORTED_MODULE_2__["Point"](H.x, B.y), J = new _webgl_Geometry_js__WEBPACK_IMPORTED_MODULE_2__["Point"](B.x, H.y);
                    }

                    _i28 = B, _s14 = D, _a20 = J, c = H;
                  } else _i28 = C, _s14 = U, _a20 = R, c = S;

                  var _g16 = F,
                      _x17 = q,
                      _d6 = _t29.glyphAngle + m;

                  if (0 !== _d6) {
                    var _e59 = Math.cos(_d6),
                        _t30 = Math.sin(_d6);

                    _i28 = _i28.clone(), _s14 = _s14.clone(), _a20 = _a20.clone(), c = c.clone(), _i28.rotate(_e59, _t30), c.rotate(_e59, _t30), _s14.rotate(_e59, _t30), _a20.rotate(_e59, _t30);
                  }

                  var _w = 0,
                      _y10 = 256;
                  if (I && M ? _e55.vertical ? _t29.alternateVerticalGlyph ? (_w = 32, _y10 = 96) : (_w = 224, _y10 = 32) : (_w = 224, _y10 = 96) : (_w = 192, _y10 = 64), T.push(new p(_i28, _a20, _s14, c, h, _t29.labelAngle, _w, _y10, _t29.anchor, _t29.minzoom, _t29.maxzoom, _t29.page)), k && (!G || this._legible(_t29.labelAngle))) if (P) j < N && (N = j), _g16 < A && (A = _g16), Y > z && (z = Y), _x17 > _ && (_ = _x17);else if (_t29.minzoom < 2) {
                    var _e60 = {
                      xTile: n.x,
                      yTile: n.y,
                      dxPixels: (j + L) * v - _f7,
                      dyPixels: (_g16 + L) * v - _f7,
                      hard: !o.optional,
                      partIndex: 1,
                      width: (Y - j) * v + 2 * _f7,
                      height: (_x17 - _g16) * v + 2 * _f7,
                      angle: _d6,
                      minLod: _t29.minzoom,
                      maxLod: _t29.maxzoom
                    };
                    k.push(_e60);
                  }
                }
              }
            } catch (err) {
              _iterator30.e(err);
            } finally {
              _iterator30.f();
            }

            if (b >= 2) return null;

            if (k && P) {
              var _e53, t, _s11, _a18;

              M ? (_e53 = -_ + L, t = N + V, _s11 = _ - A, _a18 = z - N) : (_e53 = N + L, t = A + V, _s11 = z - N, _a18 = _ - A);
              var l = {
                xTile: n.x,
                yTile: n.y,
                dxPixels: _e53 * v - _f7,
                dyPixels: t * v - _f7,
                hard: !o.optional,
                partIndex: 1,
                width: _s11 * v + 2 * _f7,
                height: _a18 * v + 2 * _f7,
                angle: m,
                minLod: .5,
                maxLod: _GeometryUtils_js__WEBPACK_IMPORTED_MODULE_0__["C_INFINITY"]
              };
              k.push(l);
            }

            var O = new y(T);
            return k && k.length > 0 && (O.textColliders = k), O;
          }
        }, {
          key: "_legible",
          value: function _legible(e) {
            var t = Object(_GeometryUtils_js__WEBPACK_IMPORTED_MODULE_0__["radToByte"])(e);
            return t < 65 || t >= 193;
          }
        }, {
          key: "_placeGlyph",
          value: function _placeGlyph(e, n, o, h, r, c, g, m, x) {
            var d = c;
            var p = d < 0 ? Object(_GeometryUtils_js__WEBPACK_IMPORTED_MODULE_0__["positiveMod"])(e.angle + _GeometryUtils_js__WEBPACK_IMPORTED_MODULE_0__["C_PI"], _GeometryUtils_js__WEBPACK_IMPORTED_MODULE_0__["C_2PI"]) : e.angle;
            var y = 0;
            o < 0 && (d *= -1, o *= -1, y = _GeometryUtils_js__WEBPACK_IMPORTED_MODULE_0__["C_PI"]), d > 0 && ++r;

            var _f8 = new _webgl_Geometry_js__WEBPACK_IMPORTED_MODULE_2__["Point"](e.x, e.y),
                b = h[r],
                u = _GeometryUtils_js__WEBPACK_IMPORTED_MODULE_0__["C_INFINITY"];

            if (h.length <= r) return u;

            for (;;) {
              var _e61 = b.x - _f8.x,
                  t = b.y - _f8.y,
                  i = Math.sqrt(_e61 * _e61 + t * t),
                  l = Math.max(o / i, n),
                  _c5 = _e61 / i,
                  I = t / i,
                  k = Object(_GeometryUtils_js__WEBPACK_IMPORTED_MODULE_0__["positiveMod"])(Math.atan2(I, _c5) + y, _GeometryUtils_js__WEBPACK_IMPORTED_MODULE_0__["C_2PI"]);

              if (x.push(new w(_f8, p, k, m, !1, l, u)), g && x.push(new w(_f8, p, k, m, !0, l, u)), l <= n) return l;
              _f8 = b.clone();

              do {
                if (r += d, h.length <= r || r < 0) return l;
                b = h[r];
              } while (_f8.isEqual(b));

              var T = b.x - _f8.x,
                  P = b.y - _f8.y;
              var N = Math.sqrt(T * T + P * P);
              T *= i / N, P *= i / N, _f8.x -= T, _f8.y -= P, u = l;
            }
          }
        }]);

        return f;
      }();
      /***/

    },

    /***/
    "jIHu":
    /*!************************************************************************!*\
      !*** ./node_modules/@arcgis/core/views/2d/engine/webgl/definitions.js ***!
      \************************************************************************/

    /*! exports provided: ANGLE_FACTOR_256, ATTRIBUTE_DATA_ANIMATION, ATTRIBUTE_DATA_DD0, ATTRIBUTE_DATA_DD1, ATTRIBUTE_DATA_FILTER_FLAGS, ATTRIBUTE_DATA_VV, ATTRIBUTE_STORE_TEXTURE_SIZE, AVERAGE_GLYPH_MOSAIC_ITEM, COLLISION_BOX_PADDING, COLLISION_BUCKET_SIZE, COLLISION_EARLY_REJECT_BUCKET_SIZE, COLLISION_MAX_ZOOM_DELTA, COLLISION_PLACEMENT_PADDING, COLLISION_TILE_BOX_SIZE, DEBUG_LABELS, DOT_DENSITY_MAX_FIELDS, EFFECT_FLAG_0, EXTRUDE_SCALE, FILTER_FLAG_0, GLYPH_SIZE, HEURISTIC_GLYPHS_PER_FEATURE, HEURISTIC_GLYPHS_PER_LINE, HIGHLIGHT_FLAG, HITTEST_SEARCH_SIZE, MAGIC_LABEL_LINE_HEIGHT, MAX_FILTERS, MAX_GPU_UPLOADS_PER_FRAME, NAN_MAGIC_NUMBER, PICTURE_FILL_COLOR, RASTER_TILE_SIZE, SPRITE_PADDING, TEXTURE_BINDING_ATTRIBUTE_DATA_0, TEXTURE_BINDING_ATTRIBUTE_DATA_1, TEXTURE_BINDING_ATTRIBUTE_DATA_2, TEXTURE_BINDING_ATTRIBUTE_DATA_3, TEXTURE_BINDING_BITMAP, TEXTURE_BINDING_GLYPH_ATLAS, TEXTURE_BINDING_HIGHLIGHT_0, TEXTURE_BINDING_HIGHLIGHT_1, TEXTURE_BINDING_RENDERER_0, TEXTURE_BINDING_RENDERER_1, TEXTURE_BINDING_SPRITE_ATLAS, TEXT_PLACEMENT_PADDING, THIN_LINE_THRESHOLD, TILE_SIZE, VTL_HIGH_RES_CUTOFF, VTL_TEXTURE_BINDING_UNIT_GLYPHS, VTL_TEXTURE_BINDING_UNIT_SPRITES, WEBGL_MAX_INNER_STOPS, WEBGL_MAX_STOPS */

    /***/
    function jIHu(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ANGLE_FACTOR_256", function () {
        return d;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ATTRIBUTE_DATA_ANIMATION", function () {
        return J;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ATTRIBUTE_DATA_DD0", function () {
        return L;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ATTRIBUTE_DATA_DD1", function () {
        return M;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ATTRIBUTE_DATA_FILTER_FLAGS", function () {
        return I;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ATTRIBUTE_DATA_VV", function () {
        return K;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ATTRIBUTE_STORE_TEXTURE_SIZE", function () {
        return q;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "AVERAGE_GLYPH_MOSAIC_ITEM", function () {
        return k;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "COLLISION_BOX_PADDING", function () {
        return l;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "COLLISION_BUCKET_SIZE", function () {
        return p;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "COLLISION_EARLY_REJECT_BUCKET_SIZE", function () {
        return g;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "COLLISION_MAX_ZOOM_DELTA", function () {
        return f;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "COLLISION_PLACEMENT_PADDING", function () {
        return v;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "COLLISION_TILE_BOX_SIZE", function () {
        return m;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "DEBUG_LABELS", function () {
        return n;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "DOT_DENSITY_MAX_FIELDS", function () {
        return r;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "EFFECT_FLAG_0", function () {
        return Q;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "EXTRUDE_SCALE", function () {
        return h;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "FILTER_FLAG_0", function () {
        return P;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "GLYPH_SIZE", function () {
        return b;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "HEURISTIC_GLYPHS_PER_FEATURE", function () {
        return x;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "HEURISTIC_GLYPHS_PER_LINE", function () {
        return w;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "HIGHLIGHT_FLAG", function () {
        return O;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "HITTEST_SEARCH_SIZE", function () {
        return S;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "MAGIC_LABEL_LINE_HEIGHT", function () {
        return s;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "MAX_FILTERS", function () {
        return N;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "MAX_GPU_UPLOADS_PER_FRAME", function () {
        return W;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "NAN_MAGIC_NUMBER", function () {
        return c;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "PICTURE_FILL_COLOR", function () {
        return i;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "RASTER_TILE_SIZE", function () {
        return a;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "SPRITE_PADDING", function () {
        return X;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "TEXTURE_BINDING_ATTRIBUTE_DATA_0", function () {
        return A;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "TEXTURE_BINDING_ATTRIBUTE_DATA_1", function () {
        return B;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "TEXTURE_BINDING_ATTRIBUTE_DATA_2", function () {
        return C;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "TEXTURE_BINDING_ATTRIBUTE_DATA_3", function () {
        return D;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "TEXTURE_BINDING_BITMAP", function () {
        return z;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "TEXTURE_BINDING_GLYPH_ATLAS", function () {
        return y;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "TEXTURE_BINDING_HIGHLIGHT_0", function () {
        return E;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "TEXTURE_BINDING_HIGHLIGHT_1", function () {
        return F;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "TEXTURE_BINDING_RENDERER_0", function () {
        return G;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "TEXTURE_BINDING_RENDERER_1", function () {
        return H;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "TEXTURE_BINDING_SPRITE_ATLAS", function () {
        return u;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "TEXT_PLACEMENT_PADDING", function () {
        return j;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "THIN_LINE_THRESHOLD", function () {
        return R;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "TILE_SIZE", function () {
        return o;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "VTL_HIGH_RES_CUTOFF", function () {
        return V;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "VTL_TEXTURE_BINDING_UNIT_GLYPHS", function () {
        return U;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "VTL_TEXTURE_BINDING_UNIT_SPRITES", function () {
        return T;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "WEBGL_MAX_INNER_STOPS", function () {
        return e;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "WEBGL_MAX_STOPS", function () {
        return t;
      });
      /*
      All material copyright ESRI, All Rights Reserved, unless otherwise specified.
      See https://js.arcgis.com/4.18/esri/copyright.txt for details.
      */


      var t = 8,
          e = 6,
          c = 1e-30,
          h = 64,
          i = 4294967295,
          o = 512,
          a = 256,
          d = 256 / 360,
          n = !1,
          p = 128,
          r = 8,
          s = 29,
          f = 1,
          g = 16,
          l = 16,
          m = 4,
          v = 8,
          w = 50,
          x = 10,
          b = 24,
          j = 8,
          k = {
        metrics: {
          width: 15,
          height: 17,
          left: 0,
          top: -7,
          advance: 14
        }
      },
          q = 1024,
          u = 0,
          y = 0,
          z = 0,
          A = 1,
          B = 2,
          C = 3,
          D = 4,
          E = 5,
          F = 6,
          G = 5,
          H = 6,
          I = 0,
          J = 1,
          K = 2,
          L = 3,
          M = 3,
          N = 2,
          O = 1,
          P = 2,
          Q = 4,
          R = 2.5,
          S = 6,
          T = 5,
          U = 6,
          V = 1.15,
          W = 2,
          X = 2;
      /***/
    },

    /***/
    "mKU8":
    /*!*****************************************************************************!*\
      !*** ./node_modules/@arcgis/core/views/2d/engine/vectorTiles/TileParser.js ***!
      \*****************************************************************************/

    /*! exports provided: default */

    /***/
    function mKU8(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony import */


      var _core_promiseUtils_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ../../../../core/promiseUtils.js */
      "9MzC");
      /* harmony import */


      var _core_pbf_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ../../../../core/pbf.js */
      "ATu9");
      /* harmony import */


      var _webgl_TileClipper_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ../webgl/TileClipper.js */
      "LaVW");
      /* harmony import */


      var _tiling_enums_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ../../tiling/enums.js */
      "zJVD");
      /* harmony import */


      var _CircleBucket_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ./CircleBucket.js */
      "Z7lw");
      /* harmony import */


      var _Feature_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ./Feature.js */
      "Zcxi");
      /* harmony import */


      var _FillBucket_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ./FillBucket.js */
      "3kKw");
      /* harmony import */


      var _IndexMemoryBuffer_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! ./IndexMemoryBuffer.js */
      "4FHc");
      /* harmony import */


      var _LineBucket_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! ./LineBucket.js */
      "IqUe");
      /* harmony import */


      var _SourceLayerData_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! ./SourceLayerData.js */
      "8NBV");
      /* harmony import */


      var _SymbolBucket_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
      /*! ./SymbolBucket.js */
      "i0/R");
      /* harmony import */


      var _VertexMemoryBuffer_js__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
      /*! ./VertexMemoryBuffer.js */
      "yQzY");
      /*
      All material copyright ESRI, All Rights Reserved, unless otherwise specified.
      See https://js.arcgis.com/4.18/esri/copyright.txt for details.
      */

      /* harmony default export */


      __webpack_exports__["default"] = /*#__PURE__*/function () {
        function _class6(e, t, r, n, c) {
          _classCallCheck(this, _class6);

          if (this._pbfTiles = {}, this._tileClippers = {}, this._client = r, this._tile = t, c) {
            this._styleLayerUIDs = new Set();

            var _iterator31 = _createForOfIteratorHelper(c),
                _step31;

            try {
              for (_iterator31.s(); !(_step31 = _iterator31.n()).done;) {
                var _e62 = _step31.value;

                this._styleLayerUIDs.add(_e62);
              }
            } catch (err) {
              _iterator31.e(err);
            } finally {
              _iterator31.f();
            }
          }

          this._styleRepository = n, this._layers = this._styleRepository.layers;

          var _t$tileKey$split$map = t.tileKey.split("/").map(parseFloat),
              _t$tileKey$split$map2 = _slicedToArray(_t$tileKey$split$map, 3),
              a = _t$tileKey$split$map2[0],
              l = _t$tileKey$split$map2[1],
              u = _t$tileKey$split$map2[2];

          this._level = a;
          var f = Math.max(8, Math.round(1 * this._level) - 8);

          for (var _i29 = 0, _Object$keys2 = Object.keys(e); _i29 < _Object$keys2.length; _i29++) {
            var _t31 = _Object$keys2[_i29];
            var _r19 = e[_t31];
            this._pbfTiles[_t31] = new _core_pbf_js__WEBPACK_IMPORTED_MODULE_1__["default"](new Uint8Array(_r19.protobuff), new DataView(_r19.protobuff));

            if (_r19.refKey) {
              var _r19$refKey$split$map = _r19.refKey.split("/").map(parseFloat),
                  _r19$refKey$split$map2 = _slicedToArray(_r19$refKey$split$map, 1),
                  _e63 = _r19$refKey$split$map2[0],
                  _s15 = a - _e63;

              if (_s15 > 0) {
                var _e64 = (1 << _s15) - 1,
                    _r20 = l & _e64,
                    i = u & _e64;

                this._tileClippers[_t31] = new _webgl_TileClipper_js__WEBPACK_IMPORTED_MODULE_2__["TileClipper"](_s15, _r20, i, 8, f);
              }
            }

            this._tileClippers[_t31] || (this._tileClippers[_t31] = new _webgl_TileClipper_js__WEBPACK_IMPORTED_MODULE_2__["SimpleBuilder"]());
          }
        }

        _createClass(_class6, [{
          key: "_canParseStyleLayer",
          value: function _canParseStyleLayer(e) {
            return !this._styleLayerUIDs || this._styleLayerUIDs.has(e);
          }
        }, {
          key: "parse",
          value: function () {
            var _parse4 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee4(r) {
              var _this7 = this;

              var s, o, i, c, _iterator32, _step32, _e65, a;

              return regeneratorRuntime.wrap(function _callee4$(_context4) {
                while (1) {
                  switch (_context4.prev = _context4.next) {
                    case 0:
                      s = this._initialize(r), o = s.returnedBuckets;
                      this._processLayers(s), this._linkReferences(s), this._filterFeatures(s);
                      i = new Set(), c = {};
                      _iterator32 = _createForOfIteratorHelper(o);

                      try {
                        for (_iterator32.s(); !(_step32 = _iterator32.n()).done;) {
                          _e65 = _step32.value;
                          3 === _e65.type && _e65.getResources(_e65.tileClipper, i, c);
                        }
                      } catch (err) {
                        _iterator32.e(err);
                      } finally {
                        _iterator32.f();
                      }

                      if (!(this._tile.status === _tiling_enums_js__WEBPACK_IMPORTED_MODULE_3__["TileStatus"].INVALID)) {
                        _context4.next = 7;
                        break;
                      }

                      return _context4.abrupt("return", Object(_core_promiseUtils_js__WEBPACK_IMPORTED_MODULE_0__["resolve"])([]));

                    case 7:
                      a = this._fetchResources(i, c, r);
                      return _context4.abrupt("return", Object(_core_promiseUtils_js__WEBPACK_IMPORTED_MODULE_0__["all"])(a).then(function () {
                        return _this7._processFeatures(s.returnedBuckets);
                      }));

                    case 9:
                    case "end":
                      return _context4.stop();
                  }
                }
              }, _callee4, this);
            }));

            function parse(_x18) {
              return _parse4.apply(this, arguments);
            }

            return parse;
          }()
        }, {
          key: "_initialize",
          value: function _initialize(e) {
            return {
              signal: e && e.signal,
              sourceNameToTileData: this._parseTileData(this._pbfTiles),
              layers: this._layers,
              zoom: this._level,
              sourceNameToTileClipper: this._tileClippers,
              sourceNameToUniqueSourceLayerBuckets: {},
              sourceNameToUniqueSourceLayers: {},
              returnedBuckets: [],
              layerIdToBucket: {},
              referencerUIDToReferencedId: new Map()
            };
          }
        }, {
          key: "_processLayers",
          value: function _processLayers(e) {
            var t = e.sourceNameToTileData,
                r = e.layers,
                s = e.zoom,
                o = e.sourceNameToTileClipper,
                i = e.sourceNameToUniqueSourceLayerBuckets,
                n = e.sourceNameToUniqueSourceLayers,
                c = e.returnedBuckets,
                a = e.layerIdToBucket,
                l = e.referencerUIDToReferencedId;

            for (var _e66 = r.length - 1; _e66 >= 0; _e66--) {
              var _u7 = r[_e66];
              if (!this._canParseStyleLayer(_u7.uid) || _u7.minzoom && s < Math.floor(_u7.minzoom) || _u7.maxzoom && s >= _u7.maxzoom || 0 === _u7.type) continue;
              if (!t[_u7.source] || !o[_u7.source]) continue;
              var _f9 = t[_u7.source],
                  h = o[_u7.source],
                  p = _u7.sourceLayer,
                  m = _f9[p];

              if (m) {
                var _e67 = n[_u7.source];
                if (_e67 || (_e67 = n[_u7.source] = new Set()), _e67.add(_u7.sourceLayer), _u7.refLayerId) l.set(_u7.uid, _u7.refLayerId);else {
                  var _e68 = this._createBucket(_u7);

                  if (_e68) {
                    _e68.layerUIDs = [_u7.uid], _e68.layerExtent = m.extent, _e68.tileClipper = h;
                    var _t32 = i[_u7.source];
                    _t32 || (_t32 = i[_u7.source] = {});
                    var _r21 = _t32[p];
                    _r21 || (_r21 = _t32[p] = []), _r21.push(_e68), c.push(_e68), a[_u7.id.toLowerCase()] = _e68;
                  }
                }
              }
            }
          }
        }, {
          key: "_linkReferences",
          value: function _linkReferences(e) {
            var t = e.layerIdToBucket,
                r = e.referencerUIDToReferencedId;
            r.forEach(function (e, r) {
              e = e.toLowerCase(), t[e] && t[e].layerUIDs.push(r);
            });
          }
        }, {
          key: "_filterFeatures",
          value: function _filterFeatures(e) {
            var t = e.signal,
                s = e.sourceNameToTileData,
                o = e.sourceNameToUniqueSourceLayerBuckets,
                i = e.sourceNameToUniqueSourceLayers,
                n = 10 * this._level,
                c = 10 * (this._level + 1),
                l = [],
                u = [];

            var _loop = function _loop() {
              var e = _Object$keys3[_i30];
              i[e].forEach(function (t) {
                l.push(t), u.push(e);
              });
            };

            for (var _i30 = 0, _Object$keys3 = Object.keys(i); _i30 < _Object$keys3.length; _i30++) {
              _loop();
            }

            for (var _e69 = 0; _e69 < l.length; _e69++) {
              var _i31 = u[_e69],
                  _f10 = l[_e69];
              if (!s[_i31] || !o[_i31]) continue;
              var h = s[_i31][_f10],
                  p = o[_i31][_f10];
              if (!p || 0 === p.length) continue;
              if (Object(_core_promiseUtils_js__WEBPACK_IMPORTED_MODULE_0__["isAborted"])(t)) return;
              var m = h.getData();

              for (; m.nextTag(2);) {
                var _e70 = m.getMessage(),
                    _t33 = new _Feature_js__WEBPACK_IMPORTED_MODULE_5__["default"](_e70, h);

                _e70.release();

                var _r22 = _t33.values;

                if (_r22) {
                  var _e71 = _r22._minzoom;
                  if (_e71 && _e71 >= c) continue;
                  var _t34 = _r22._maxzoom;
                  if (_t34 && _t34 <= n) continue;
                }

                var _iterator33 = _createForOfIteratorHelper(p),
                    _step33;

                try {
                  for (_iterator33.s(); !(_step33 = _iterator33.n()).done;) {
                    var _e72 = _step33.value;

                    _e72.pushFeature(_t33);
                  }
                } catch (err) {
                  _iterator33.e(err);
                } finally {
                  _iterator33.f();
                }
              }
            }
          }
        }, {
          key: "_fetchResources",
          value: function _fetchResources(e, t, r) {
            var s = [],
                o = this._tile.getWorkerTileHandler();

            var i, n;
            e.size > 0 && (i = o.fetchSprites(e, this._client, r), s.push(i));

            for (var _e73 in t) {
              var _i32 = t[_e73];
              _i32.size > 0 && (n = o.fetchGlyphs(this._tile.tileKey, _e73, _i32, this._client, r), s.push(n));
            }

            return s;
          }
        }, {
          key: "_processFeatures",
          value: function _processFeatures(e) {
            var t = e.filter(function (e) {
              return e.hasFeatures();
            });

            var _iterator34 = _createForOfIteratorHelper(t),
                _step34;

            try {
              for (_iterator34.s(); !(_step34 = _iterator34.n()).done;) {
                var _e74 = _step34.value;

                _e74.processFeatures(_e74.tileClipper);
              }
            } catch (err) {
              _iterator34.e(err);
            } finally {
              _iterator34.f();
            }

            return t;
          }
        }, {
          key: "_parseTileData",
          value: function _parseTileData(e) {
            var t = {};

            for (var _i33 = 0, _Object$keys4 = Object.keys(e); _i33 < _Object$keys4.length; _i33++) {
              var _r23 = _Object$keys4[_i33];
              var _s16 = e[_r23],
                  o = {};

              for (; _s16.next();) {
                switch (_s16.tag()) {
                  case 3:
                    {
                      var _e75 = _s16.getMessage(),
                          _t35 = new _SourceLayerData_js__WEBPACK_IMPORTED_MODULE_9__["default"](_e75);

                      _e75.release(), o[_t35.name] = _t35;
                      break;
                    }

                  default:
                    _s16.skip();

                }
              }

              t[_r23] = o;
            }

            return t;
          }
        }, {
          key: "_createBucket",
          value: function _createBucket(e) {
            switch (e.type) {
              case 0:
                return null;

              case 1:
                return this._createFillBucket(e);

              case 2:
                return this._createLineBucket(e);

              case 4:
                return this._createCircleBucket(e);

              case 3:
                return this._createSymbolBucket(e);
            }
          }
        }, {
          key: "_createFillBucket",
          value: function _createFillBucket(e) {
            return new _FillBucket_js__WEBPACK_IMPORTED_MODULE_6__["default"](e, this._level, new _VertexMemoryBuffer_js__WEBPACK_IMPORTED_MODULE_11__["FillVertexBuffer"](e.hasDataDrivenFill), new _IndexMemoryBuffer_js__WEBPACK_IMPORTED_MODULE_7__["TriangleIndexBuffer"](), new _VertexMemoryBuffer_js__WEBPACK_IMPORTED_MODULE_11__["OutlineVertexBuffer"](e.hasDataDrivenOutline), new _IndexMemoryBuffer_js__WEBPACK_IMPORTED_MODULE_7__["TriangleIndexBuffer"]());
          }
        }, {
          key: "_createLineBucket",
          value: function _createLineBucket(e) {
            return new _LineBucket_js__WEBPACK_IMPORTED_MODULE_8__["default"](e, this._level, new _VertexMemoryBuffer_js__WEBPACK_IMPORTED_MODULE_11__["LineVertexBuffer"](e.hasDataDrivenLine), new _IndexMemoryBuffer_js__WEBPACK_IMPORTED_MODULE_7__["TriangleIndexBuffer"]());
          }
        }, {
          key: "_createCircleBucket",
          value: function _createCircleBucket(e) {
            return new _CircleBucket_js__WEBPACK_IMPORTED_MODULE_4__["default"](e, this._level, new _VertexMemoryBuffer_js__WEBPACK_IMPORTED_MODULE_11__["CircleVertexBuffer"](), new _IndexMemoryBuffer_js__WEBPACK_IMPORTED_MODULE_7__["TriangleIndexBuffer"]());
          }
        }, {
          key: "_createSymbolBucket",
          value: function _createSymbolBucket(e) {
            var t = this._tile;
            return new _SymbolBucket_js__WEBPACK_IMPORTED_MODULE_10__["default"](e, this._level, new _VertexMemoryBuffer_js__WEBPACK_IMPORTED_MODULE_11__["SymbolVertexBuffer"](e.hasDataDrivenIcon), new _IndexMemoryBuffer_js__WEBPACK_IMPORTED_MODULE_7__["TriangleIndexBuffer"](), new _VertexMemoryBuffer_js__WEBPACK_IMPORTED_MODULE_11__["SymbolVertexBuffer"](e.hasDataDrivenText), new _IndexMemoryBuffer_js__WEBPACK_IMPORTED_MODULE_7__["TriangleIndexBuffer"](), t.placementEngine, t.getWorkerTileHandler());
          }
        }]);

        return _class6;
      }();
      /***/

    },

    /***/
    "rgtN":
    /*!*******************************************************************************!*\
      !*** ./node_modules/@arcgis/core/views/2d/engine/vectorTiles/MemoryBuffer.js ***!
      \*******************************************************************************/

    /*! exports provided: default */

    /***/
    function rgtN(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /*
      All material copyright ESRI, All Rights Reserved, unless otherwise specified.
      See https://js.arcgis.com/4.18/esri/copyright.txt for details.
      */

      /* harmony default export */


      __webpack_exports__["default"] = /*#__PURE__*/function () {
        function _class7(t) {
          _classCallCheck(this, _class7);

          this._array = [], t <= 0 && console.error("strideInBytes must be positive!"), this._stride = t;
        }

        _createClass(_class7, [{
          key: "array",
          get: function get() {
            return this._array;
          }
        }, {
          key: "index",
          get: function get() {
            return 4 * this._array.length / this._stride;
          }
        }, {
          key: "itemSize",
          get: function get() {
            return this._stride;
          }
        }, {
          key: "sizeInBytes",
          get: function get() {
            return 4 * this._array.length;
          }
        }, {
          key: "reset",
          value: function reset() {
            this.array.length = 0;
          }
        }, {
          key: "toBuffer",
          value: function toBuffer() {
            return new Uint32Array(this._array).buffer;
          }
        }], [{
          key: "i1616to32",
          value: function i1616to32(t, r) {
            return 65535 & t | r << 16;
          }
        }, {
          key: "i8888to32",
          value: function i8888to32(t, r, e, i) {
            return 255 & t | (255 & r) << 8 | (255 & e) << 16 | i << 24;
          }
        }, {
          key: "i8816to32",
          value: function i8816to32(t, r, e) {
            return 255 & t | (255 & r) << 8 | e << 16;
          }
        }]);

        return _class7;
      }();
      /***/

    },

    /***/
    "u8Fm":
    /*!******************************************************************************!*\
      !*** ./node_modules/@arcgis/core/views/2d/engine/vectorTiles/ScriptUtils.js ***!
      \******************************************************************************/

    /*! exports provided: hasVerticalOrientation, isWhiteSpace */

    /***/
    function u8Fm(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "hasVerticalOrientation", function () {
        return n;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "isWhiteSpace", function () {
        return r;
      });
      /*
      All material copyright ESRI, All Rights Reserved, unless otherwise specified.
      See https://js.arcgis.com/4.18/esri/copyright.txt for details.
      */


      function n(n) {
        return 746 === n || 747 === n || !(n < 4352) && (n >= 12704 && n <= 12735 || n >= 12544 && n <= 12591 || n >= 65072 && n <= 65103 && !(n >= 65097 && n <= 65103) || n >= 63744 && n <= 64255 || n >= 13056 && n <= 13311 || n >= 11904 && n <= 12031 || n >= 12736 && n <= 12783 || n >= 12288 && n <= 12351 && !(n >= 12296 && n <= 12305 || n >= 12308 && n <= 12319 || 12336 === n) || n >= 13312 && n <= 19903 || n >= 19968 && n <= 40959 || n >= 12800 && n <= 13055 || n >= 12592 && n <= 12687 || n >= 43360 && n <= 43391 || n >= 55216 && n <= 55295 || n >= 4352 && n <= 4607 || n >= 44032 && n <= 55215 || n >= 12352 && n <= 12447 || n >= 12272 && n <= 12287 || n >= 12688 && n <= 12703 || n >= 12032 && n <= 12255 || n >= 12784 && n <= 12799 || n >= 12448 && n <= 12543 && 12540 !== n || n >= 65280 && n <= 65519 && !(65288 === n || 65289 === n || 65293 === n || n >= 65306 && n <= 65310 || 65339 === n || 65341 === n || 65343 === n || n >= 65371 && n <= 65503 || 65507 === n || n >= 65512 && n <= 65519) || n >= 65104 && n <= 65135 && !(n >= 65112 && n <= 65118 || n >= 65123 && n <= 65126) || n >= 5120 && n <= 5759 || n >= 6320 && n <= 6399 || n >= 65040 && n <= 65055 || n >= 19904 && n <= 19967 || n >= 40960 && n <= 42127 || n >= 42128 && n <= 42191);
      }

      function r(n) {
        return 32 === n;
      }
      /***/

    },

    /***/
    "xN0w":
    /*!*****************************************************************************!*\
      !*** ./node_modules/@arcgis/core/views/2d/engine/vectorTiles/BaseBucket.js ***!
      \*****************************************************************************/

    /*! exports provided: default */

    /***/
    function xN0w(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /*
      All material copyright ESRI, All Rights Reserved, unless otherwise specified.
      See https://js.arcgis.com/4.18/esri/copyright.txt for details.
      */

      /* harmony default export */


      __webpack_exports__["default"] = /*#__PURE__*/function () {
        function _class8(t, e) {
          _classCallCheck(this, _class8);

          this.layerExtent = 4096, this._features = [], this.layer = t, this.zoom = e, this._filter = t.getFeatureFilter();
        }

        _createClass(_class8, [{
          key: "pushFeature",
          value: function pushFeature(t) {
            this._filter && !this._filter.filter(t, this.zoom) || this._features.push(t);
          }
        }, {
          key: "hasFeatures",
          value: function hasFeatures() {
            return this._features.length > 0;
          }
        }]);

        return _class8;
      }();
      /***/

    },

    /***/
    "yQzY":
    /*!*************************************************************************************!*\
      !*** ./node_modules/@arcgis/core/views/2d/engine/vectorTiles/VertexMemoryBuffer.js ***!
      \*************************************************************************************/

    /*! exports provided: CircleVertexBuffer, FillVertexBuffer, LineVertexBuffer, OutlineVertexBuffer, SymbolVertexBuffer */

    /***/
    function yQzY(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "CircleVertexBuffer", function () {
        return h;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "FillVertexBuffer", function () {
        return o;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "LineVertexBuffer", function () {
        return a;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "OutlineVertexBuffer", function () {
        return n;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "SymbolVertexBuffer", function () {
        return e;
      });
      /* harmony import */


      var _GeometryUtils_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ./GeometryUtils.js */
      "OxmL");
      /* harmony import */


      var _MemoryBuffer_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./MemoryBuffer.js */
      "rgtN");
      /*
      All material copyright ESRI, All Rights Reserved, unless otherwise specified.
      See https://js.arcgis.com/4.18/esri/copyright.txt for details.
      */


      var i = new Float32Array(1),
          r = new Uint32Array(i.buffer);

      var a = /*#__PURE__*/function (_MemoryBuffer_js__WEB3) {
        _inherits(a, _MemoryBuffer_js__WEB3);

        var _super7 = _createSuper(a);

        function a(t) {
          var _this8;

          _classCallCheck(this, a);

          _this8 = _super7.call(this, t ? 20 : 12), _this8._isDataDriven = t;
          return _this8;
        }

        _createClass(a, [{
          key: "isDataDriven",
          value: function isDataDriven() {
            return this._isDataDriven;
          }
        }, {
          key: "add",
          value: function add(t, _a21, o, n, e, h, u, c) {
            var p = this.array;

            var d = _MemoryBuffer_js__WEBPACK_IMPORTED_MODULE_1__["default"].i1616to32(t, _a21);

            p.push(d);

            if (d = _MemoryBuffer_js__WEBPACK_IMPORTED_MODULE_1__["default"].i8888to32(Math.round(31 * o), Math.round(31 * n), Math.round(31 * e), Math.round(31 * h)), p.push(d), d = _MemoryBuffer_js__WEBPACK_IMPORTED_MODULE_1__["default"].i1616to32(u, 0), p.push(d), this._isDataDriven) {
              if (!c) throw new Error("Expecting data driven values.");

              var _t36 = c.color,
                  _a23 = _t36[3] * c.opacity * 255;

              p.push(_MemoryBuffer_js__WEBPACK_IMPORTED_MODULE_1__["default"].i8888to32(_t36[0] * _a23, _t36[1] * _a23, _t36[2] * _a23, _a23)), i[0] = c.size, p.push(r[0]);
            }
          }
        }]);

        return a;
      }(_MemoryBuffer_js__WEBPACK_IMPORTED_MODULE_1__["default"]);

      var o = /*#__PURE__*/function (_MemoryBuffer_js__WEB4) {
        _inherits(o, _MemoryBuffer_js__WEB4);

        var _super8 = _createSuper(o);

        function o(t) {
          var _this9;

          _classCallCheck(this, o);

          _this9 = _super8.call(this, t ? 8 : 4), _this9._isDataDriven = t;
          return _this9;
        }

        _createClass(o, [{
          key: "isDataDriven",
          value: function isDataDriven() {
            return this._isDataDriven;
          }
        }, {
          key: "add",
          value: function add(t, i, r) {
            var a = this.array;

            if (a.push(_MemoryBuffer_js__WEBPACK_IMPORTED_MODULE_1__["default"].i1616to32(t, i)), this._isDataDriven) {
              if (!r) throw new Error("Expecting data driven values.");

              var _t37 = r.color,
                  _i34 = _t37[3] * r.opacity * 255;

              a.push(_MemoryBuffer_js__WEBPACK_IMPORTED_MODULE_1__["default"].i8888to32(_t37[0] * _i34, _t37[1] * _i34, _t37[2] * _i34, _i34));
            }
          }
        }]);

        return o;
      }(_MemoryBuffer_js__WEBPACK_IMPORTED_MODULE_1__["default"]);

      var n = /*#__PURE__*/function (_MemoryBuffer_js__WEB5) {
        _inherits(n, _MemoryBuffer_js__WEB5);

        var _super9 = _createSuper(n);

        function n(t) {
          var _this10;

          _classCallCheck(this, n);

          _this10 = _super9.call(this, t ? 12 : 8), _this10._isDataDriven = t;
          return _this10;
        }

        _createClass(n, [{
          key: "isDataDriven",
          value: function isDataDriven() {
            return this._isDataDriven;
          }
        }, {
          key: "add",
          value: function add(t, i, r, a, o, _n13, e) {
            var h = this.array,
                u = this.index;

            var c = _MemoryBuffer_js__WEBPACK_IMPORTED_MODULE_1__["default"].i1616to32(t, i);

            h.push(c);

            if (c = _MemoryBuffer_js__WEBPACK_IMPORTED_MODULE_1__["default"].i8888to32(Math.round(15 * r), Math.round(15 * a), o, _n13), h.push(c), this._isDataDriven) {
              if (!e) throw new Error("Expecting data driven values.");

              var _t38 = e.color,
                  _i35 = _t38[3] * e.opacity * 255;

              h.push(_MemoryBuffer_js__WEBPACK_IMPORTED_MODULE_1__["default"].i8888to32(_t38[0] * _i35, _t38[1] * _i35, _t38[2] * _i35, _i35));
            }

            return u;
          }
        }]);

        return n;
      }(_MemoryBuffer_js__WEBPACK_IMPORTED_MODULE_1__["default"]);

      var e = /*#__PURE__*/function (_MemoryBuffer_js__WEB6) {
        _inherits(e, _MemoryBuffer_js__WEB6);

        var _super10 = _createSuper(e);

        function e(t) {
          var _this11;

          _classCallCheck(this, e);

          _this11 = _super10.call(this, t ? 24 : 16), _this11._isDataDriven = t;
          return _this11;
        }

        _createClass(e, [{
          key: "isDataDriven",
          value: function isDataDriven() {
            return this._isDataDriven;
          }
        }, {
          key: "add",
          value: function add(a, o, n, _e76, h, u, c, p, d, D, v, l) {
            var f = this.array;

            var y = _MemoryBuffer_js__WEBPACK_IMPORTED_MODULE_1__["default"].i1616to32(a, o);

            if (f.push(y), y = _MemoryBuffer_js__WEBPACK_IMPORTED_MODULE_1__["default"].i1616to32(Math.round(8 * n), Math.round(8 * _e76)), f.push(y), y = _MemoryBuffer_js__WEBPACK_IMPORTED_MODULE_1__["default"].i8888to32(h / 4, u / 4, p, d), f.push(y), y = _MemoryBuffer_js__WEBPACK_IMPORTED_MODULE_1__["default"].i8888to32(0, Object(_GeometryUtils_js__WEBPACK_IMPORTED_MODULE_0__["radToByte"])(c), 10 * D, Math.min(10 * v, 255)), f.push(y), this._isDataDriven) {
              if (!l) throw new Error("Expecting data driven values.");

              var t = l.color,
                  _a24 = t[3] * l.opacity * 255;

              f.push(_MemoryBuffer_js__WEBPACK_IMPORTED_MODULE_1__["default"].i8888to32(t[0] * _a24, t[1] * _a24, t[2] * _a24, _a24)), i[0] = l.size, f.push(r[0]);
            }
          }
        }]);

        return e;
      }(_MemoryBuffer_js__WEBPACK_IMPORTED_MODULE_1__["default"]);

      var h = /*#__PURE__*/function (_MemoryBuffer_js__WEB7) {
        _inherits(h, _MemoryBuffer_js__WEB7);

        var _super11 = _createSuper(h);

        function h() {
          _classCallCheck(this, h);

          return _super11.call(this, 16);
        }

        _createClass(h, [{
          key: "add",
          value: function add(t, i, r, a, o, n, e, _h5, u, c, p) {
            var d = this.array;

            var D = _MemoryBuffer_js__WEBPACK_IMPORTED_MODULE_1__["default"].i1616to32(2 * t + r, 2 * i + a);

            d.push(D);
            var v = n[3] * e * 255;
            D = _MemoryBuffer_js__WEBPACK_IMPORTED_MODULE_1__["default"].i8888to32(n[0] * v, n[1] * v, n[2] * v, v), d.push(D);
            var l = c[3] * p * 255;
            D = _MemoryBuffer_js__WEBPACK_IMPORTED_MODULE_1__["default"].i8888to32(c[0] * l, c[1] * l, c[2] * l, l), d.push(D), D = _MemoryBuffer_js__WEBPACK_IMPORTED_MODULE_1__["default"].i8888to32(Math.min(32 * _h5, 255), Math.min(4 * u, 255), Math.min(o, 255), 0), d.push(D);
          }
        }]);

        return h;
      }(_MemoryBuffer_js__WEBPACK_IMPORTED_MODULE_1__["default"]);
      /***/

    },

    /***/
    "ynYs":
    /*!******************************************************************************!*\
      !*** ./node_modules/@arcgis/core/views/2d/engine/vectorTiles/TextShaping.js ***!
      \******************************************************************************/

    /*! exports provided: SDF_GLYPH_BASELINE, SDF_GLYPH_SIZE, TextShaping */

    /***/
    function ynYs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "SDF_GLYPH_BASELINE", function () {
        return s;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "SDF_GLYPH_SIZE", function () {
        return e;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "TextShaping", function () {
        return c;
      });
      /* harmony import */


      var _webgl_Rect_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ../webgl/Rect.js */
      "qcDN");
      /* harmony import */


      var _ScriptUtils_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./ScriptUtils.js */
      "u8Fm");
      /*
      All material copyright ESRI, All Rights Reserved, unless otherwise specified.
      See https://js.arcgis.com/4.18/esri/copyright.txt for details.
      */


      var e = 24,
          s = 17;

      var c = /*#__PURE__*/function () {
        function c(t, i, e, s, _c6, h, o) {
          _classCallCheck(this, c);

          this._glyphItems = t, this._maxWidth = i, this._lineHeight = e, this._letterSpacing = s, this._hAnchor = _c6, this._vAnchor = h, this._justify = o;
        }

        _createClass(c, [{
          key: "getShaping",
          value: function getShaping(t, e, s) {
            var _c7 = this._letterSpacing,
                h = this._lineHeight,
                o = this._justify,
                a = this._maxWidth,
                n = [];
            var l = 0,
                r = 0,
                m = 0,
                f = 0,
                g = -1,
                p = 0,
                y = -1;
            var x = t.length;

            for (var d = 0; d < x; d++) {
              var M = t.charCodeAt(d),
                  _u8 = s && Object(_ScriptUtils_js__WEBPACK_IMPORTED_MODULE_1__["hasVerticalOrientation"])(M);

              if (10 === M) {
                if (d === x - 1) continue;

                if (g >= f) {
                  var _t39 = n[g],
                      i = _t39.x + _t39.glyphMosaicItem.metrics.advance;
                  p = Math.max(i, p), o && this._applyJustification(n, f, g), f = n.length;
                }

                e ? r -= h : r += h, l = 0, ++m;
                continue;
              }

              var _ = void 0;

              var _iterator35 = _createForOfIteratorHelper(this._glyphItems),
                  _step35;

              try {
                for (_iterator35.s(); !(_step35 = _iterator35.n()).done;) {
                  var _t41 = _step35.value;
                  if (_ = _t41[M], _) break;
                }
              } catch (err) {
                _iterator35.e(err);
              } finally {
                _iterator35.f();
              }

              if (_) {
                if (n.push({
                  codePoint: M,
                  x: l,
                  y: r,
                  vertical: _u8,
                  glyphMosaicItem: _
                }), l += _.metrics.advance + _c7, a > 0 && l > a && y >= 0) {
                  var _t40 = y + 1,
                      _i36 = n[_t40].x;

                  p = Math.max(_i36, p);

                  for (var _s17 = _t40; _s17 < n.length; _s17++) {
                    e ? n[_s17].y -= h : n[_s17].y += h, n[_s17].x -= _i36;
                  }

                  o && this._applyJustification(n, f, y), e ? r -= h : r += h, l -= _i36, ++m, f = _t40, y = -1;
                }

                ++g, 32 === M && (y = n.length - 1);
              }
            }

            if (g >= f) {
              var _t42 = n[g],
                  _i37 = _t42.x + _t42.glyphMosaicItem.metrics.advance;

              p = Math.max(p, _i37), o && this._applyJustification(n, f, g);
            }

            if (n.length > 0) {
              var _t43 = (o - this._hAnchor) * p;

              var _i38 = (-this._vAnchor * (m + 1) + .5) * h;

              e && m && (_i38 += m * h);

              var _iterator36 = _createForOfIteratorHelper(n),
                  _step36;

              try {
                for (_iterator36.s(); !(_step36 = _iterator36.n()).done;) {
                  var _e77 = _step36.value;
                  _e77.x += _t43, _e77.y += _i38;
                }
              } catch (err) {
                _iterator36.e(err);
              } finally {
                _iterator36.f();
              }
            }

            return n;
          }
        }, {
          key: "_applyJustification",
          value: function _applyJustification(t, i, e) {
            var s = t[e],
                _c11 = s.vertical ? 24 : s.glyphMosaicItem.metrics.advance,
                h = (s.x + _c11) * this._justify;

            for (var _s18 = i; _s18 <= e; _s18++) {
              t[_s18].x -= h;
            }
          }
        }], [{
          key: "getTextBox",
          value: function getTextBox(t, i) {
            if (!t.length) return null;
            var e = 1 / 0,
                s = 1 / 0,
                _c8 = 0,
                h = 0;

            var _iterator37 = _createForOfIteratorHelper(t),
                _step37;

            try {
              for (_iterator37.s(); !(_step37 = _iterator37.n()).done;) {
                var o = _step37.value;

                var _t44 = o.glyphMosaicItem.metrics.advance,
                    _a25 = o.x,
                    n = o.y - 17,
                    _l14 = _a25 + _t44,
                    _r24 = n + i;

                e = Math.min(e, _a25), _c8 = Math.max(_c8, _l14), s = Math.min(s, n), h = Math.max(h, _r24);
              }
            } catch (err) {
              _iterator37.e(err);
            } finally {
              _iterator37.f();
            }

            return {
              x: e,
              y: s,
              width: _c8 - e,
              height: h - s
            };
          }
        }, {
          key: "getBox",
          value: function getBox(t) {
            if (!t.length) return null;
            var i = 1 / 0,
                e = 1 / 0,
                s = 0,
                _c9 = 0;

            var _iterator38 = _createForOfIteratorHelper(t),
                _step38;

            try {
              for (_iterator38.s(); !(_step38 = _iterator38.n()).done;) {
                var h = _step38.value;

                var _h$glyphMosaicItem$me = h.glyphMosaicItem.metrics,
                    _t45 = _h$glyphMosaicItem$me.height,
                    o = _h$glyphMosaicItem$me.left,
                    _a26 = _h$glyphMosaicItem$me.top,
                    n = _h$glyphMosaicItem$me.width,
                    _l15 = h.x,
                    _r25 = h.y - (_t45 - Math.abs(_a26)),
                    m = _l15 + n + o,
                    _f11 = _r25 + _t45;

                i = Math.min(i, _l15), s = Math.max(s, m), e = Math.min(e, _r25), _c9 = Math.max(_c9, _f11);
              }
            } catch (err) {
              _iterator38.e(err);
            } finally {
              _iterator38.f();
            }

            return {
              x: i,
              y: e,
              width: s - i,
              height: _c9 - e
            };
          }
        }, {
          key: "addDecoration",
          value: function addDecoration(i, e) {
            var s = i.length;
            if (0 === s) return;

            var _c10 = i[0].x + i[0].glyphMosaicItem.metrics.left,
                h = i[0].y;

            for (var _o12 = 1; _o12 < s; _o12++) {
              var _s19 = i[_o12];

              if (_s19.y !== h) {
                var _a27 = i[_o12 - 1].x + i[_o12 - 1].glyphMosaicItem.metrics.left + i[_o12 - 1].glyphMosaicItem.metrics.width;

                i.push({
                  codePoint: 0,
                  x: _c10,
                  y: h + e - 3,
                  vertical: !1,
                  glyphMosaicItem: {
                    sdf: !0,
                    rect: new _webgl_Rect_js__WEBPACK_IMPORTED_MODULE_0__["default"](4, 0, 4, 8),
                    metrics: {
                      width: _a27 - _c10,
                      height: 8,
                      left: 0,
                      top: 0,
                      advance: 0
                    },
                    page: 0,
                    code: 0
                  }
                }), h = _s19.y, _c10 = _s19.x + _s19.glyphMosaicItem.metrics.left;
              }
            }

            var o = i[s - 1].x + i[s - 1].glyphMosaicItem.metrics.left + i[s - 1].glyphMosaicItem.metrics.width;
            i.push({
              codePoint: 0,
              x: _c10,
              y: h + e - 3,
              vertical: !1,
              glyphMosaicItem: {
                sdf: !0,
                rect: new _webgl_Rect_js__WEBPACK_IMPORTED_MODULE_0__["default"](4, 0, 4, 8),
                metrics: {
                  width: o - _c10,
                  height: 8,
                  left: 0,
                  top: 0,
                  advance: 0
                },
                page: 0,
                code: 0
              }
            });
          }
        }]);

        return c;
      }();
      /***/

    },

    /***/
    "zJVD":
    /*!************************************************************!*\
      !*** ./node_modules/@arcgis/core/views/2d/tiling/enums.js ***!
      \************************************************************/

    /*! exports provided: TileStatus */

    /***/
    function zJVD(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "TileStatus", function () {
        return I;
      });
      /*
      All material copyright ESRI, All Rights Reserved, unless otherwise specified.
      See https://js.arcgis.com/4.18/esri/copyright.txt for details.
      */


      var I;
      !function (I) {
        I[I.INITIALIZED = 0] = "INITIALIZED", I[I.NO_DATA = 1] = "NO_DATA", I[I.READY = 2] = "READY", I[I.MODIFIED = 3] = "MODIFIED", I[I.INVALID = 4] = "INVALID";
      }(I || (I = {}));
      /***/
    }
  }]);
})();
//# sourceMappingURL=views-2d-engine-vectorTiles-WorkerTileHandler-js-es5.js.map