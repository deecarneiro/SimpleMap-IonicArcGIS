(function () {
  function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

  function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

  function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

  function _get(target, property, receiver) { if (typeof Reflect !== "undefined" && Reflect.get) { _get = Reflect.get; } else { _get = function _get(target, property, receiver) { var base = _superPropBase(target, property); if (!base) return; var desc = Object.getOwnPropertyDescriptor(base, property); if (desc.get) { return desc.get.call(receiver); } return desc.value; }; } return _get(target, property, receiver || target); }

  function _superPropBase(object, property) { while (!Object.prototype.hasOwnProperty.call(object, property)) { object = _getPrototypeOf(object); if (object === null) break; } return object; }

  function _createForOfIteratorHelper(o, allowArrayLike) { var it; if (typeof Symbol === "undefined" || o[Symbol.iterator] == null) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e4) { throw _e4; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = o[Symbol.iterator](); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e5) { didErr = true; err = _e5; }, f: function f() { try { if (!normalCompletion && it["return"] != null) it["return"](); } finally { if (didErr) throw err; } } }; }

  function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

  function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

  function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

  function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

  function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

  function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

  function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

  function _possibleConstructorReturn(self, call) { if (call && (typeof call === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

  function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

  function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

  function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["processors-SymbolProcessor-js"], {
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
    "1agI":
    /*!*************************************************************************************!*\
      !*** ./node_modules/@arcgis/core/views/2d/engine/webgl/collisions/CollisionGrid.js ***!
      \*************************************************************************************/

    /*! exports provided: CollisionGrid */

    /***/
    function agI(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "CollisionGrid", function () {
        return i;
      });
      /* harmony import */


      var _definitions_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ../definitions.js */
      "jIHu");
      /*
      All material copyright ESRI, All Rights Reserved, unless otherwise specified.
      See https://js.arcgis.com/4.18/esri/copyright.txt for details.
      */


      var i = /*#__PURE__*/function () {
        function i(_i7) {
          var s = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 2;

          _classCallCheck(this, i);

          this._bucketSize = _i7, this._rowsLength = _definitions_js__WEBPACK_IMPORTED_MODULE_0__["TILE_SIZE"] / _i7, this._colsLength = _definitions_js__WEBPACK_IMPORTED_MODULE_0__["TILE_SIZE"] / _i7, this._elementsPerBucket = s, this._grid = this._initGrid();
        }

        _createClass(i, [{
          key: "checkOverlap",
          value: function checkOverlap(t, _i8) {
            var s = Math.floor(t / this._bucketSize),
                e = Math.floor(_i8 / this._bucketSize);
            return s < 0 || s >= this._rowsLength || e < 0 || e >= this._colsLength || this._grid[e * this._colsLength + s] >= this._elementsPerBucket;
          }
        }, {
          key: "markUsed",
          value: function markUsed(t, _i9) {
            var s = Math.floor(t / this._bucketSize),
                e = Math.floor(_i9 / this._bucketSize);
            this._grid[e * this._colsLength + s] += 1;
          }
        }, {
          key: "reset",
          value: function reset() {
            this._grid = this._initGrid();
          }
        }, {
          key: "_initGrid",
          value: function _initGrid() {
            return new Uint8Array(this._rowsLength * this._colsLength);
          }
        }]);

        return i;
      }();
      /***/

    },

    /***/
    "DsOJ":
    /*!******************************************************************************************!*\
      !*** ./node_modules/@arcgis/core/views/2d/layers/features/processors/SymbolProcessor.js ***!
      \******************************************************************************************/

    /*! exports provided: default */

    /***/
    function DsOJ(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony import */


      var _chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ../../../../../chunks/tslib.es6.js */
      "pO5D");
      /* harmony import */


      var _core_has_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ../../../../../core/has.js */
      "wSAH");
      /* harmony import */


      var _core_maybe_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ../../../../../core/maybe.js */
      "srIe");
      /* harmony import */


      var _core_Logger_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ../../../../../core/Logger.js */
      "6S2I");
      /* harmony import */


      var _core_accessorSupport_ensureType_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ../../../../../core/accessorSupport/ensureType.js */
      "zqDF");
      /* harmony import */


      var _core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ../../../../../core/accessorSupport/decorators/property.js */
      "WbKI");
      /* harmony import */


      var _core_accessorSupport_decorators_subclass_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ../../../../../core/accessorSupport/decorators/subclass.js */
      "04ZG");
      /* harmony import */


      var _core_Error_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! ../../../../../core/Error.js */
      "zlDU");
      /* harmony import */


      var _core_urlUtils_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! ../../../../../core/urlUtils.js */
      "4EHJ");
      /* harmony import */


      var _core_uuid_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! ../../../../../core/uuid.js */
      "ju1D");
      /* harmony import */


      var _portal_support_resourceExtension_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
      /*! ../../../../../portal/support/resourceExtension.js */
      "9AIY");
      /* harmony import */


      var _core_promiseUtils_js__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
      /*! ../../../../../core/promiseUtils.js */
      "9MzC");
      /* harmony import */


      var _geometry_SpatialReference_js__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
      /*! ../../../../../geometry/SpatialReference.js */
      "WZb1");
      /* harmony import */


      var _core_accessorSupport_diffUtils_js__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
      /*! ../../../../../core/accessorSupport/diffUtils.js */
      "DxxZ");
      /* harmony import */


      var _engine_webgl_definitions_js__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(
      /*! ../../../engine/webgl/definitions.js */
      "jIHu");
      /* harmony import */


      var _engine_webgl_util_BidiText_js__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(
      /*! ../../../engine/webgl/util/BidiText.js */
      "t7mB");
      /* harmony import */


      var _engine_webgl_mesh_factories_matcherUtils_js__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(
      /*! ../../../engine/webgl/mesh/factories/matcherUtils.js */
      "Bcjy");
      /* harmony import */


      var _textUtils_js__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(
      /*! ../textUtils.js */
      "MrbB");
      /* harmony import */


      var _engine_webgl_mesh_templates_WGLTemplateStore_js__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(
      /*! ../../../engine/webgl/mesh/templates/WGLTemplateStore.js */
      "Dw8i");
      /* harmony import */


      var _engine_webgl_mesh_factories_WGLMeshFactory_js__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(
      /*! ../../../engine/webgl/mesh/factories/WGLMeshFactory.js */
      "J3nV");
      /* harmony import */


      var _support_AttributeStore_js__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(
      /*! ../support/AttributeStore.js */
      "2AbE");
      /* harmony import */


      var _engine_webgl_collisions_CollisionGrid_js__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(
      /*! ../../../engine/webgl/collisions/CollisionGrid.js */
      "1agI");
      /* harmony import */


      var _BaseProcessor_js__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(
      /*! ./BaseProcessor.js */
      "ukaK");
      /*
      All material copyright ESRI, All Rights Reserved, unless otherwise specified.
      See https://js.arcgis.com/4.18/esri/copyright.txt for details.
      */


      _core_Logger_js__WEBPACK_IMPORTED_MODULE_3__["default"].getLogger("esri.views.2d.layers.features.processors.SymbolProcessor");

      var S = /*#__PURE__*/function (_BaseProcessor_js__WE) {
        _inherits(S, _BaseProcessor_js__WE);

        var _super = _createSuper(S);

        function S() {
          var _this;

          _classCallCheck(this, S);

          _this = _super.apply(this, arguments), _this.type = "symbol";
          return _this;
        }

        _createClass(S, [{
          key: "destroy",
          value: function destroy() {}
        }, {
          key: "supportsTileUpdates",
          get: function get() {
            return !0;
          }
        }, {
          key: "update",
          value: function () {
            var _update = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(e, r) {
              var s, o;
              return regeneratorRuntime.wrap(function _callee$(_context) {
                while (1) {
                  switch (_context.prev = _context.next) {
                    case 0:
                      s = r.schema.processors[0];

                      if (!("symbol" !== s.type)) {
                        _context.next = 3;
                        break;
                      }

                      return _context.abrupt("return");

                    case 3:
                      o = Object(_core_accessorSupport_diffUtils_js__WEBPACK_IMPORTED_MODULE_13__["diff"])(this._schema, s);
                      Object(_core_accessorSupport_diffUtils_js__WEBPACK_IMPORTED_MODULE_13__["hasDiff"])(o, "mesh") && (Object(_core_has_js__WEBPACK_IMPORTED_MODULE_1__["default"])("esri-2d-update-debug") && console.debug("Applying Update - Processor:", o), e.mesh = !0, e.why.mesh.push("Symbology changed"), this._schema = s, this._factory = this._createFactory(s), this._factory.update(s, this.tileStore.tileScheme.tileInfo));

                    case 5:
                    case "end":
                      return _context.stop();
                  }
                }
              }, _callee, this);
            }));

            function update(_x5, _x6) {
              return _update.apply(this, arguments);
            }

            return update;
          }()
        }, {
          key: "onTileData",
          value: function onTileData(e, t, r) {
            return Object(_core_promiseUtils_js__WEBPACK_IMPORTED_MODULE_11__["throwIfAborted"])(r), this._onTileData(e, t, r);
          }
        }, {
          key: "onTileError",
          value: function onTileError(e, t, r) {
            var s = r.signal,
                o = {
              tileKey: e.id,
              error: t
            };
            return this.remoteClient.invoke("tileRenderer.onTileError", o, {
              signal: s
            });
          }
        }, {
          key: "_createFactory",
          value: function _createFactory(e) {
            var _this2 = this;

            var _this$service = this.service,
                t = _this$service.geometryType,
                r = _this$service.objectIdField,
                s = _this$service.fields,
                o = {
              geometryType: t,
              fields: s,
              spatialReference: _geometry_SpatialReference_js__WEBPACK_IMPORTED_MODULE_12__["default"].fromJSON(this.spatialReference)
            },
                i = new _engine_webgl_mesh_templates_WGLTemplateStore_js__WEBPACK_IMPORTED_MODULE_18__["WGLTemplateStore"](function (e, t) {
              return _this2.remoteClient.invoke("tileRenderer.getMaterialItems", e, t);
            }, !1);
            return this._store = i, this._matcher = Object(_engine_webgl_mesh_factories_matcherUtils_js__WEBPACK_IMPORTED_MODULE_16__["createMatcher"])(e.mesh.matcher, i, o), new _engine_webgl_mesh_factories_WGLMeshFactory_js__WEBPACK_IMPORTED_MODULE_19__["WGLMeshFactory"](t, r, i);
          }
        }, {
          key: "_onTileData",
          value: function () {
            var _onTileData2 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee2(e, t, o) {
              var i, a, n, l, _t4, m, p, _t5, _o4, _a, d, u;

              return regeneratorRuntime.wrap(function _callee2$(_context2) {
                while (1) {
                  switch (_context2.prev = _context2.next) {
                    case 0:
                      i = t.type, a = t.addOrUpdate, n = t.remove, l = t.end;

                      if (a) {
                        _context2.next = 4;
                        break;
                      }

                      _t4 = {
                        type: i,
                        addOrUpdate: null,
                        remove: n,
                        clear: !1,
                        end: l
                      };
                      return _context2.abrupt("return", this.remoteClient.invoke("tileRenderer.onTileData", {
                        tileKey: e.id,
                        data: _t4
                      }, o));

                    case 4:
                      m = this._processFeatures(e, a, o), p = o.signal;
                      _context2.prev = 5;
                      _context2.next = 8;
                      return m;

                    case 8:
                      _t5 = _context2.sent;
                      _o4 = Object(_core_maybe_js__WEBPACK_IMPORTED_MODULE_2__["andThen"])(_t5, function (e) {
                        return e.message;
                      });
                      _a = Object(_core_maybe_js__WEBPACK_IMPORTED_MODULE_2__["andThen"])(_t5, function (e) {
                        return e.transferList;
                      }) || [];
                      d = {
                        type: i,
                        addOrUpdate: _o4,
                        remove: n,
                        clear: !1,
                        end: l
                      };
                      u = {
                        transferList: Object(_core_maybe_js__WEBPACK_IMPORTED_MODULE_2__["unwrap"])(_a) || [],
                        signal: p
                      };
                      return _context2.abrupt("return", (Object(_core_promiseUtils_js__WEBPACK_IMPORTED_MODULE_11__["throwIfAborted"])(u), this.remoteClient.invoke("tileRenderer.onTileData", {
                        tileKey: e.id,
                        data: d
                      }, u)));

                    case 16:
                      _context2.prev = 16;
                      _context2.t0 = _context2["catch"](5);

                      this._handleError(e, _context2.t0, o);

                    case 19:
                    case "end":
                      return _context2.stop();
                  }
                }
              }, _callee2, this, [[5, 16]]);
            }));

            function _onTileData(_x7, _x8, _x9) {
              return _onTileData2.apply(this, arguments);
            }

            return _onTileData;
          }()
        }, {
          key: "_processFeatures",
          value: function () {
            var _processFeatures2 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee3(e, t, r) {
              var s, i, a, n, l;
              return regeneratorRuntime.wrap(function _callee3$(_context3) {
                while (1) {
                  switch (_context3.prev = _context3.next) {
                    case 0:
                      if (!(Object(_core_maybe_js__WEBPACK_IMPORTED_MODULE_2__["isNone"])(t) || !t.hasFeatures)) {
                        _context3.next = 2;
                        break;
                      }

                      return _context3.abrupt("return", null);

                    case 2:
                      s = {
                        transform: e.transform,
                        hasZ: !1,
                        hasM: !1
                      };
                      i = this._factory;
                      a = {
                        viewingMode: "",
                        scale: e.scale
                      };
                      _context3.next = 7;
                      return this._matcher;

                    case 7:
                      n = _context3.sent;
                      Object(_core_promiseUtils_js__WEBPACK_IMPORTED_MODULE_11__["throwIfAborted"])(r);
                      l = this._getLabelInfos(e, t);
                      _context3.next = 12;
                      return i.analyze(t.getCursor(), n, s, a);

                    case 12:
                      Object(_core_promiseUtils_js__WEBPACK_IMPORTED_MODULE_11__["throwIfAborted"])(r);
                      return _context3.abrupt("return", this._writeFeatureSet(e, t, s, l, i));

                    case 14:
                    case "end":
                      return _context3.stop();
                  }
                }
              }, _callee3, this);
            }));

            function _processFeatures(_x10, _x11, _x12) {
              return _processFeatures2.apply(this, arguments);
            }

            return _processFeatures;
          }()
        }, {
          key: "_writeFeatureSet",
          value: function _writeFeatureSet(e, t, r, s, o) {
            var a = o.createMeshData(t.getApproximateSize()),
                n = {
              viewingMode: "",
              scale: e.scale
            },
                c = t.getCursor();

            for (; c.next();) {
              try {
                var _t6 = c.getDisplayId(),
                    l = Object(_core_maybe_js__WEBPACK_IMPORTED_MODULE_2__["isSome"])(s) ? s.get(_t6) : null;

                o.writeCursor(a, c, r, n, e.level, l);
              } catch (e) {}
            }

            return this._encodeDisplayData(a);
          }
        }, {
          key: "_encodeDisplayData",
          value: function _encodeDisplayData(e) {
            var t = {},
                r = new Array();
            return e.encode(t, r), {
              message: t,
              transferList: r
            };
          }
        }, {
          key: "_handleError",
          value: function _handleError(e, t, r) {
            if (!Object(_core_promiseUtils_js__WEBPACK_IMPORTED_MODULE_11__["isAbortError"])(t)) {
              var s = {
                tileKey: e.id,
                error: t.message
              };
              return this.remoteClient.invoke("tileRenderer.onTileError", s, {
                signal: r.signal
              });
            }
          }
        }, {
          key: "_shouldDiscard",
          value: function _shouldDiscard(e, t) {
            switch (this.service.geometryType) {
              case "esriGeometryPoint":
                {
                  var r = t.readLegacyPointGeometry();
                  return !r || e.checkOverlap(r.x, r.y);
                }

              case "esriGeometryPolygon":
                {
                  var _r9 = t.readLegacyCentroid();

                  return !_r9 || e.checkOverlap(_r9.x, _r9.y);
                }

              default:
                return !1;
            }
          }
        }, {
          key: "_markUsed",
          value: function _markUsed(e, t) {
            switch (this.service.geometryType) {
              case "esriGeometryPoint":
                {
                  var _t$readLegacyPointGeo = t.readLegacyPointGeometry(),
                      r = _t$readLegacyPointGeo.x,
                      s = _t$readLegacyPointGeo.y;

                  return e.markUsed(r, s);
                }

              case "esriGeometryPolygon":
                {
                  var _t$readLegacyCentroid = t.readLegacyCentroid(),
                      _r10 = _t$readLegacyCentroid.x,
                      _s2 = _t$readLegacyCentroid.y;

                  return e.markUsed(_r10, _s2);
                }
            }
          }
        }, {
          key: "_getLabelInfos",
          value: function _getLabelInfos(e, t) {
            var _this3 = this;

            var s = this._schema.mesh.labels,
                i = Object(_core_maybe_js__WEBPACK_IMPORTED_MODULE_2__["andThen"])(s, function (t) {
              return t.filter(function (t) {
                return function (e, t) {
                  return (!e.minScale || e.minScale >= t) && (!e.maxScale || e.maxScale <= t);
                }(t, e.scale);
              });
            });
            if (Object(_core_maybe_js__WEBPACK_IMPORTED_MODULE_2__["isNone"])(i) || 0 === i.length) return null;
            var a = new Map(),
                n = new _engine_webgl_collisions_CollisionGrid_js__WEBPACK_IMPORTED_MODULE_21__["CollisionGrid"](_engine_webgl_definitions_js__WEBPACK_IMPORTED_MODULE_14__["COLLISION_EARLY_REJECT_BUCKET_SIZE"]),
                c = t.getCursor();

            var _loop = function _loop() {
              var e = c.getDisplayId();

              if (_this3._shouldDiscard(n, c)) {
                a.has(e) || a.set(e, null);
                return "continue";
              }

              var t = !1;
              var r = [],
                  s = Object(_support_AttributeStore_js__WEBPACK_IMPORTED_MODULE_20__["isAggregateId"])(e),
                  o = s && 1 !== c.readAttribute("cluster_count") ? "aggregate" : "feature";

              var _iterator = _createForOfIteratorHelper(i),
                  _step;

              try {
                var _loop2 = function _loop2() {
                  var a = _step.value;
                  if (a.target !== o) return "continue";
                  var i = c.getStorage(),
                      n = s && "feature" === o ? i.getComputedStringAtIndex(c.readAttribute("referenceId"), a.fieldIndex) : i.getComputedStringAtIndex(e, a.fieldIndex);
                  if (!n) return "continue";
                  var l = Object(_engine_webgl_util_BidiText_js__WEBPACK_IMPORTED_MODULE_15__["bidiText"])(n.toString()),
                      m = l[0],
                      p = l[1];
                  _this3._store.getMosaicItem(a.symbol, Object(_textUtils_js__WEBPACK_IMPORTED_MODULE_17__["codepoints"])(m)).then(function (e) {
                    r[a.index] = {
                      glyphs: e.glyphMosaicItems,
                      rtl: p,
                      index: a.index
                    };
                  }), t = !0;
                };

                for (_iterator.s(); !(_step = _iterator.n()).done;) {
                  var _ret2 = _loop2();

                  if (_ret2 === "continue") continue;
                }
              } catch (err) {
                _iterator.e(err);
              } finally {
                _iterator.f();
              }

              a.set(e, r), t && _this3._markUsed(n, c);
            };

            for (; c.next();) {
              var _ret = _loop();

              if (_ret === "continue") continue;
            }

            return a;
          }
        }]);

        return S;
      }(_BaseProcessor_js__WEBPACK_IMPORTED_MODULE_22__["default"]);

      S = Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_subclass_js__WEBPACK_IMPORTED_MODULE_6__["subclass"])("esri.views.2d.layers.features.processors.SymbolProcessor")], S);
      var x = S;
      /* harmony default export */

      __webpack_exports__["default"] = x;
      /***/
    },

    /***/
    "GMaR":
    /*!************************************************************************************!*\
      !*** ./node_modules/@arcgis/core/views/2d/engine/webgl/materialKey/MaterialKey.js ***!
      \************************************************************************************/

    /*! exports provided: FillMaterialKey, LabelMaterialKey, LineMaterialKey, MarkerMaterialKey, MaterialKeyBase, TextMaterialKey, createMaterialKey, getFillVVFlags, getLabelVVFlags, getLineVVFlags, getMarkerVVFlags, getSizeFlagsMask, getTextVVFlags, hydrateMaterialKey */

    /***/
    function GMaR(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "FillMaterialKey", function () {
        return z;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "LabelMaterialKey", function () {
        return m;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "LineMaterialKey", function () {
        return y;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "MarkerMaterialKey", function () {
        return T;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "MaterialKeyBase", function () {
        return c;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "TextMaterialKey", function () {
        return E;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "createMaterialKey", function () {
        return S;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "getFillVVFlags", function () {
        return o;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "getLabelVVFlags", function () {
        return u;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "getLineVVFlags", function () {
        return v;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "getMarkerVVFlags", function () {
        return n;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "getSizeFlagsMask", function () {
        return a;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "getTextVVFlags", function () {
        return h;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "hydrateMaterialKey", function () {
        return l;
      });
      /* harmony import */


      var _core_Error_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ../../../../../core/Error.js */
      "zlDU");
      /* harmony import */


      var _enums_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ../enums.js */
      "yE7X");
      /* harmony import */


      var _mesh_templates_meshUtils_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ../mesh/templates/meshUtils.js */
      "m3fN");
      /*
      All material copyright ESRI, All Rights Reserved, unless otherwise specified.
      See https://js.arcgis.com/4.18/esri/copyright.txt for details.
      */


      function a(t) {
        var s = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : !1;
        var r = _enums_js__WEBPACK_IMPORTED_MODULE_1__["WGLVVFlag"].SIZE_FIELD_STOPS | _enums_js__WEBPACK_IMPORTED_MODULE_1__["WGLVVFlag"].SIZE_MINMAX_VALUE | _enums_js__WEBPACK_IMPORTED_MODULE_1__["WGLVVFlag"].SIZE_SCALE_STOPS | _enums_js__WEBPACK_IMPORTED_MODULE_1__["WGLVVFlag"].SIZE_UNIT_VALUE,
            a = (t & (_enums_js__WEBPACK_IMPORTED_MODULE_1__["WGLVVTarget"].FIELD_TARGETS_OUTLINE | _enums_js__WEBPACK_IMPORTED_MODULE_1__["WGLVVTarget"].MINMAX_TARGETS_OUTLINE | _enums_js__WEBPACK_IMPORTED_MODULE_1__["WGLVVTarget"].SCALE_TARGETS_OUTLINE | _enums_js__WEBPACK_IMPORTED_MODULE_1__["WGLVVTarget"].UNIT_TARGETS_OUTLINE)) >>> 4;
        return s ? r & a : r & ~a;
      }

      function n(t) {
        var i = a(t, !1);
        return t & (_enums_js__WEBPACK_IMPORTED_MODULE_1__["WGLVVFlag"].COLOR | _enums_js__WEBPACK_IMPORTED_MODULE_1__["WGLVVFlag"].OPACITY | _enums_js__WEBPACK_IMPORTED_MODULE_1__["WGLVVFlag"].ROTATION | i);
      }

      function o(t) {
        return t & (_enums_js__WEBPACK_IMPORTED_MODULE_1__["WGLVVFlag"].COLOR | _enums_js__WEBPACK_IMPORTED_MODULE_1__["WGLVVFlag"].OPACITY);
      }

      function v(t, i) {
        if (i) {
          return t & a(t, !0);
        }

        var s = a(t, !1);
        return t & (_enums_js__WEBPACK_IMPORTED_MODULE_1__["WGLVVFlag"].COLOR | _enums_js__WEBPACK_IMPORTED_MODULE_1__["WGLVVFlag"].OPACITY | s);
      }

      function h(t) {
        return n(t);
      }

      function u(t) {
        return t & a(t, !1);
      }

      function S(t, e, i, r, a) {
        switch (t) {
          case _enums_js__WEBPACK_IMPORTED_MODULE_1__["WGLGeometryType"].FILL:
            return z.from(e, r);

          case _enums_js__WEBPACK_IMPORTED_MODULE_1__["WGLGeometryType"].LINE:
            return y.from(e, i);

          case _enums_js__WEBPACK_IMPORTED_MODULE_1__["WGLGeometryType"].MARKER:
            return T.from(e);

          case _enums_js__WEBPACK_IMPORTED_MODULE_1__["WGLGeometryType"].TEXT:
            return E.from(e);

          case _enums_js__WEBPACK_IMPORTED_MODULE_1__["WGLGeometryType"].LABEL:
            return m.from(e, a);

          default:
            throw new Error("Unable to createMaterialKey for unknown geometryType ".concat(t));
        }
      }

      function l(t) {
        switch (c.load(t).geometryType) {
          case _enums_js__WEBPACK_IMPORTED_MODULE_1__["WGLGeometryType"].MARKER:
            return new T(t);

          case _enums_js__WEBPACK_IMPORTED_MODULE_1__["WGLGeometryType"].FILL:
            return new z(t);

          case _enums_js__WEBPACK_IMPORTED_MODULE_1__["WGLGeometryType"].LINE:
            return new y(t);

          case _enums_js__WEBPACK_IMPORTED_MODULE_1__["WGLGeometryType"].TEXT:
            return new E(t);

          case _enums_js__WEBPACK_IMPORTED_MODULE_1__["WGLGeometryType"].LABEL:
            return new m(t);
        }
      }

      var c = /*#__PURE__*/function () {
        function c(t) {
          _classCallCheck(this, c);

          this._data = 0, this._data = t;
        }

        _createClass(c, [{
          key: "data",
          get: function get() {
            return this._data;
          },
          set: function set(t) {
            this._data = t;
          }
        }, {
          key: "geometryType",
          get: function get() {
            return this.bits(8, 11);
          },
          set: function set(t) {
            this.setBits(t, 8, 11);
          }
        }, {
          key: "mapAligned",
          get: function get() {
            return !!this.bit(20);
          },
          set: function set(t) {
            this.setBit(20, t);
          }
        }, {
          key: "sdf",
          get: function get() {
            return !!this.bit(11);
          },
          set: function set(t) {
            this.setBit(11, t);
          }
        }, {
          key: "pattern",
          get: function get() {
            return !!this.bit(12);
          },
          set: function set(t) {
            this.setBit(12, t);
          }
        }, {
          key: "textureBinding",
          get: function get() {
            return this.bits(0, 8);
          },
          set: function set(t) {
            this.setBits(t, 0, 8);
          }
        }, {
          key: "geometryTypeString",
          get: function get() {
            switch (this.geometryType) {
              case _enums_js__WEBPACK_IMPORTED_MODULE_1__["WGLGeometryType"].FILL:
                return "fill";

              case _enums_js__WEBPACK_IMPORTED_MODULE_1__["WGLGeometryType"].MARKER:
                return "marker";

              case _enums_js__WEBPACK_IMPORTED_MODULE_1__["WGLGeometryType"].LINE:
                return "line";

              case _enums_js__WEBPACK_IMPORTED_MODULE_1__["WGLGeometryType"].TEXT:
                return "text";

              case _enums_js__WEBPACK_IMPORTED_MODULE_1__["WGLGeometryType"].LABEL:
                return "label";

              default:
                throw new _core_Error_js__WEBPACK_IMPORTED_MODULE_0__["default"]("Unable to handle unknown geometryType: ".concat(this.geometryType));
            }
          }
        }, {
          key: "setBit",
          value: function setBit(t, e) {
            var i = 1 << t;
            e ? this._data |= i : this._data &= ~i;
          }
        }, {
          key: "bit",
          value: function bit(t) {
            return (this._data & 1 << t) >> t;
          }
        }, {
          key: "setBits",
          value: function setBits(t, e, i) {
            for (var s = e, r = 0; s < i; s++, r++) {
              this.setBit(s, 0 != (t & 1 << r));
            }
          }
        }, {
          key: "bits",
          value: function bits(t, e) {
            var i = 0;

            for (var s = t, r = 0; s < e; s++, r++) {
              i |= this.bit(s) << r;
            }

            return i;
          }
        }, {
          key: "hasVV",
          value: function hasVV() {
            return !1;
          }
        }, {
          key: "setVV",
          value: function setVV(t, e) {}
        }, {
          key: "getVariation",
          value: function getVariation() {
            return {
              mapAligned: this.mapAligned,
              pattern: this.pattern,
              sdf: this.sdf
            };
          }
        }, {
          key: "getVariationHash",
          value: function getVariationHash() {
            return this._data & ~(7 & this.textureBinding);
          }
        }], [{
          key: "load",
          value: function load(t) {
            var e = this.shared;
            return e.data = t, e;
          }
        }]);

        return c;
      }();

      c.shared = new c(0);

      var d = function d(t) {
        return /*#__PURE__*/function (_t7) {
          _inherits(_class, _t7);

          var _super2 = _createSuper(_class);

          function _class() {
            _classCallCheck(this, _class);

            return _super2.apply(this, arguments);
          }

          _createClass(_class, [{
            key: "vvSizeMinMaxValue",
            get: function get() {
              return 0 !== this.bit(16);
            },
            set: function set(t) {
              this.setBit(16, t);
            }
          }, {
            key: "vvSizeScaleStops",
            get: function get() {
              return 0 !== this.bit(17);
            },
            set: function set(t) {
              this.setBit(17, t);
            }
          }, {
            key: "vvSizeFieldStops",
            get: function get() {
              return 0 !== this.bit(18);
            },
            set: function set(t) {
              this.setBit(18, t);
            }
          }, {
            key: "vvSizeUnitValue",
            get: function get() {
              return 0 !== this.bit(19);
            },
            set: function set(t) {
              this.setBit(19, t);
            }
          }, {
            key: "hasVV",
            value: function hasVV() {
              return _get(_getPrototypeOf(_class.prototype), "hasVV", this).call(this) || this.vvSizeMinMaxValue || this.vvSizeScaleStops || this.vvSizeFieldStops || this.vvSizeUnitValue;
            }
          }, {
            key: "setVV",
            value: function setVV(t, i) {
              _get(_getPrototypeOf(_class.prototype), "setVV", this).call(this, t, i);

              var s = a(t, i) & t;
              this.vvSizeMinMaxValue = !!(s & _enums_js__WEBPACK_IMPORTED_MODULE_1__["WGLVVFlag"].SIZE_MINMAX_VALUE), this.vvSizeFieldStops = !!(s & _enums_js__WEBPACK_IMPORTED_MODULE_1__["WGLVVFlag"].SIZE_FIELD_STOPS), this.vvSizeUnitValue = !!(s & _enums_js__WEBPACK_IMPORTED_MODULE_1__["WGLVVFlag"].SIZE_UNIT_VALUE), this.vvSizeScaleStops = !!(s & _enums_js__WEBPACK_IMPORTED_MODULE_1__["WGLVVFlag"].SIZE_SCALE_STOPS);
            }
          }]);

          return _class;
        }(t);
      },
          V = function V(t) {
        return /*#__PURE__*/function (_t8) {
          _inherits(_class2, _t8);

          var _super3 = _createSuper(_class2);

          function _class2() {
            _classCallCheck(this, _class2);

            return _super3.apply(this, arguments);
          }

          _createClass(_class2, [{
            key: "vvRotation",
            get: function get() {
              return 0 !== this.bit(15);
            },
            set: function set(t) {
              this.setBit(15, t);
            }
          }, {
            key: "hasVV",
            value: function hasVV() {
              return _get(_getPrototypeOf(_class2.prototype), "hasVV", this).call(this) || this.vvRotation;
            }
          }, {
            key: "setVV",
            value: function setVV(t, i) {
              _get(_getPrototypeOf(_class2.prototype), "setVV", this).call(this, t, i), this.vvRotation = !i && !!(t & _enums_js__WEBPACK_IMPORTED_MODULE_1__["WGLVVFlag"].ROTATION);
            }
          }]);

          return _class2;
        }(t);
      },
          p = function p(t) {
        return /*#__PURE__*/function (_t9) {
          _inherits(_class3, _t9);

          var _super4 = _createSuper(_class3);

          function _class3() {
            _classCallCheck(this, _class3);

            return _super4.apply(this, arguments);
          }

          _createClass(_class3, [{
            key: "vvColor",
            get: function get() {
              return 0 !== this.bit(13);
            },
            set: function set(t) {
              this.setBit(13, t);
            }
          }, {
            key: "hasVV",
            value: function hasVV() {
              return _get(_getPrototypeOf(_class3.prototype), "hasVV", this).call(this) || this.vvColor;
            }
          }, {
            key: "setVV",
            value: function setVV(t, i) {
              _get(_getPrototypeOf(_class3.prototype), "setVV", this).call(this, t, i), this.vvColor = !i && !!(t & _enums_js__WEBPACK_IMPORTED_MODULE_1__["WGLVVFlag"].COLOR);
            }
          }]);

          return _class3;
        }(t);
      },
          g = function g(t) {
        return /*#__PURE__*/function (_t10) {
          _inherits(_class4, _t10);

          var _super5 = _createSuper(_class4);

          function _class4() {
            _classCallCheck(this, _class4);

            return _super5.apply(this, arguments);
          }

          _createClass(_class4, [{
            key: "vvOpacity",
            get: function get() {
              return 0 !== this.bit(14);
            },
            set: function set(t) {
              this.setBit(14, t);
            }
          }, {
            key: "hasVV",
            value: function hasVV() {
              return _get(_getPrototypeOf(_class4.prototype), "hasVV", this).call(this) || this.vvOpacity;
            }
          }, {
            key: "setVV",
            value: function setVV(t, i) {
              _get(_getPrototypeOf(_class4.prototype), "setVV", this).call(this, t, i), this.vvOpacity = !i && !!(t & _enums_js__WEBPACK_IMPORTED_MODULE_1__["WGLVVFlag"].OPACITY);
            }
          }]);

          return _class4;
        }(t);
      };

      var z = /*#__PURE__*/function (_p) {
        _inherits(z, _p);

        var _super6 = _createSuper(z);

        function z() {
          _classCallCheck(this, z);

          return _super6.apply(this, arguments);
        }

        _createClass(z, [{
          key: "getVariation",
          value: function getVariation() {
            return _objectSpread(_objectSpread({}, _get(_getPrototypeOf(z.prototype), "getVariation", this).call(this)), {}, {
              dotDensity: this.dotDensity,
              vvColor: this.vvColor,
              vvOpacity: this.vvOpacity
            });
          }
        }, {
          key: "dotDensity",
          get: function get() {
            return !!this.bit(15);
          },
          set: function set(t) {
            this.setBit(15, t);
          }
        }], [{
          key: "load",
          value: function load(t) {
            var e = this.shared;
            return e.data = t, e;
          }
        }, {
          key: "from",
          value: function from(t, e) {
            var i = this.load(0);
            return i.geometryType = _enums_js__WEBPACK_IMPORTED_MODULE_1__["WGLGeometryType"].FILL, e ? i.dotDensity = !0 : i.setVV(t, !1), i.data;
          }
        }]);

        return z;
      }(p(g(c)));

      z.shared = new z(0);

      var T = /*#__PURE__*/function (_p2) {
        _inherits(T, _p2);

        var _super7 = _createSuper(T);

        function T() {
          _classCallCheck(this, T);

          return _super7.apply(this, arguments);
        }

        _createClass(T, [{
          key: "getVariation",
          value: function getVariation() {
            return _objectSpread(_objectSpread({}, _get(_getPrototypeOf(T.prototype), "getVariation", this).call(this)), {}, {
              vvColor: this.vvColor,
              vvRotation: this.vvRotation,
              vvOpacity: this.vvOpacity,
              vvSizeFieldStops: this.vvSizeFieldStops,
              vvSizeMinMaxValue: this.vvSizeMinMaxValue,
              vvSizeScaleStops: this.vvSizeScaleStops,
              vvSizeUnitValue: this.vvSizeUnitValue
            });
          }
        }], [{
          key: "load",
          value: function load(t) {
            var e = this.shared;
            return e.data = t, e;
          }
        }, {
          key: "from",
          value: function from(t) {
            var e = this.load(0);
            return e.geometryType = _enums_js__WEBPACK_IMPORTED_MODULE_1__["WGLGeometryType"].MARKER, e.setVV(t, !1), e.data;
          }
        }]);

        return T;
      }(p(g(V(d(c)))));

      T.shared = new T(0);

      var y = /*#__PURE__*/function (_p3) {
        _inherits(y, _p3);

        var _super8 = _createSuper(y);

        function y() {
          _classCallCheck(this, y);

          return _super8.apply(this, arguments);
        }

        _createClass(y, [{
          key: "getVariation",
          value: function getVariation() {
            return _objectSpread(_objectSpread({}, _get(_getPrototypeOf(y.prototype), "getVariation", this).call(this)), {}, {
              vvColor: this.vvColor,
              vvOpacity: this.vvOpacity,
              vvSizeFieldStops: this.vvSizeFieldStops,
              vvSizeMinMaxValue: this.vvSizeMinMaxValue,
              vvSizeScaleStops: this.vvSizeScaleStops,
              vvSizeUnitValue: this.vvSizeUnitValue
            });
          }
        }], [{
          key: "load",
          value: function load(t) {
            var e = this.shared;
            return e.data = t, e;
          }
        }, {
          key: "from",
          value: function from(t, e) {
            var i = this.load(0);
            return i.geometryType = _enums_js__WEBPACK_IMPORTED_MODULE_1__["WGLGeometryType"].LINE, i.setVV(t, e), i.data;
          }
        }]);

        return y;
      }(p(g(d(c))));

      y.shared = new y(0);

      var E = /*#__PURE__*/function (_p4) {
        _inherits(E, _p4);

        var _super9 = _createSuper(E);

        function E() {
          _classCallCheck(this, E);

          return _super9.apply(this, arguments);
        }

        _createClass(E, [{
          key: "getVariation",
          value: function getVariation() {
            return _objectSpread(_objectSpread({}, _get(_getPrototypeOf(E.prototype), "getVariation", this).call(this)), {}, {
              vvColor: this.vvColor,
              vvOpacity: this.vvOpacity,
              vvRotation: this.vvRotation,
              vvSizeFieldStops: this.vvSizeFieldStops,
              vvSizeMinMaxValue: this.vvSizeMinMaxValue,
              vvSizeScaleStops: this.vvSizeScaleStops,
              vvSizeUnitValue: this.vvSizeUnitValue
            });
          }
        }], [{
          key: "load",
          value: function load(t) {
            var e = this.shared;
            return e.data = t, e;
          }
        }, {
          key: "from",
          value: function from(t) {
            var e = this.load(t);
            return e.geometryType = _enums_js__WEBPACK_IMPORTED_MODULE_1__["WGLGeometryType"].TEXT, e.setVV(t, !1), e.data;
          }
        }]);

        return E;
      }(p(g(V(d(c)))));

      E.shared = new E(0);

      var m = /*#__PURE__*/function (_d) {
        _inherits(m, _d);

        var _super10 = _createSuper(m);

        function m() {
          _classCallCheck(this, m);

          return _super10.apply(this, arguments);
        }

        _createClass(m, [{
          key: "getVariation",
          value: function getVariation() {
            return _objectSpread(_objectSpread({}, _get(_getPrototypeOf(m.prototype), "getVariation", this).call(this)), {}, {
              vvSizeFieldStops: this.vvSizeFieldStops,
              vvSizeMinMaxValue: this.vvSizeMinMaxValue,
              vvSizeScaleStops: this.vvSizeScaleStops,
              vvSizeUnitValue: this.vvSizeUnitValue
            });
          }
        }], [{
          key: "load",
          value: function load(t) {
            var e = this.shared;
            return e.data = t, e;
          }
        }, {
          key: "from",
          value: function from(t, e) {
            var i = this.load(0);
            return i.geometryType = _enums_js__WEBPACK_IMPORTED_MODULE_1__["WGLGeometryType"].LABEL, i.setVV(t, !1), i.mapAligned = !!Object(_mesh_templates_meshUtils_js__WEBPACK_IMPORTED_MODULE_2__["isMapAligned"])(e), i.data;
          }
        }]);

        return m;
      }(d(c));

      m.shared = new m(0);
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
    "m3fN":
    /*!*************************************************************************************!*\
      !*** ./node_modules/@arcgis/core/views/2d/engine/webgl/mesh/templates/meshUtils.js ***!
      \*************************************************************************************/

    /*! exports provided: isMapAligned */

    /***/
    function m3fN(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "isMapAligned", function () {
        return e;
      });
      /*
      All material copyright ESRI, All Rights Reserved, unless otherwise specified.
      See https://js.arcgis.com/4.18/esri/copyright.txt for details.
      */


      function e(e) {
        switch (e) {
          case "above-along":
          case "below-along":
          case "center-along":
            return 1;

          default:
            return 0;
        }
      }
      /***/

    },

    /***/
    "wk6I":
    /*!****************************************************!*\
      !*** ./node_modules/@arcgis/core/core/LRUCache.js ***!
      \****************************************************/

    /*! exports provided: default */

    /***/
    function wk6I(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony import */


      var _MemCache_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ./MemCache.js */
      "rvq7");
      /*
      All material copyright ESRI, All Rights Reserved, unless otherwise specified.
      See https://js.arcgis.com/4.18/esri/copyright.txt for details.
      */

      /* harmony default export */


      __webpack_exports__["default"] = /*#__PURE__*/function () {
        function _class5(e, r) {
          _classCallCheck(this, _class5);

          this._storage = new _MemCache_js__WEBPACK_IMPORTED_MODULE_0__["MemCacheStorage"](), this._storage.maxSize = e, r && this._storage.registerRemoveFunc("", r);
        }

        _createClass(_class5, [{
          key: "put",
          value: function put(t, e, r) {
            this._storage.put(t, e, r, 1);
          }
        }, {
          key: "pop",
          value: function pop(t) {
            return this._storage.pop(t);
          }
        }, {
          key: "get",
          value: function get(t) {
            return this._storage.get(t);
          }
        }, {
          key: "clear",
          value: function clear() {
            this._storage.clearAll();
          }
        }, {
          key: "destroy",
          value: function destroy() {
            this._storage.clearAll();
          }
        }, {
          key: "maxSize",
          get: function get() {
            return this._storage.maxSize;
          },
          set: function set(t) {
            this._storage.maxSize = t;
          }
        }]);

        return _class5;
      }();
      /***/

    }
  }]);
})();
//# sourceMappingURL=processors-SymbolProcessor-js-es5.js.map