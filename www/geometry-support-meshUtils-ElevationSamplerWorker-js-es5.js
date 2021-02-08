(function () {
  function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

  function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

  function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

  function _possibleConstructorReturn(self, call) { if (call && (typeof call === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

  function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

  function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

  function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

  function _createForOfIteratorHelper(o, allowArrayLike) { var it; if (typeof Symbol === "undefined" || o[Symbol.iterator] == null) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e9) { throw _e9; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = o[Symbol.iterator](); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e10) { didErr = true; err = _e10; }, f: function f() { try { if (!normalCompletion && it["return"] != null) it["return"](); } finally { if (didErr) throw err; } } }; }

  function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

  function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

  function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

  function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["geometry-support-meshUtils-ElevationSamplerWorker-js"], {
    /***/
    "CVnL":
    /*!****************************************************************************************!*\
      !*** ./node_modules/@arcgis/core/geometry/support/meshUtils/ElevationSamplerWorker.js ***!
      \****************************************************************************************/

    /*! exports provided: default, ElevationSamplerWorker */

    /***/
    function CVnL(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ElevationSamplerWorker", function () {
        return n;
      });
      /* harmony import */


      var _core_has_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ../../../core/has.js */
      "wSAH");
      /* harmony import */


      var _core_maybe_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ../../../core/maybe.js */
      "srIe");
      /* harmony import */


      var _core_libs_rbush_PooledRBush_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ../../../core/libs/rbush/PooledRBush.js */
      "zna6");
      /*
      All material copyright ESRI, All Rights Reserved, unless otherwise specified.
      See https://js.arcgis.com/4.18/esri/copyright.txt for details.
      */


      var n = /*#__PURE__*/function () {
        function n() {
          _classCallCheck(this, n);
        }

        _createClass(n, [{
          key: "createIndex",
          value: function () {
            var _createIndex = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(e, _n) {
              var o, s, a;
              return regeneratorRuntime.wrap(function _callee$(_context) {
                while (1) {
                  switch (_context.prev = _context.next) {
                    case 0:
                      o = new Array();

                      if (!(!e.vertexAttributes || !e.vertexAttributes.position)) {
                        _context.next = 3;
                        break;
                      }

                      return _context.abrupt("return", new _core_libs_rbush_PooledRBush_js__WEBPACK_IMPORTED_MODULE_2__["PooledRBush"]());

                    case 3:
                      s = this.createMeshData(e);

                      if (!Object(_core_maybe_js__WEBPACK_IMPORTED_MODULE_1__["isSome"])(_n)) {
                        _context.next = 10;
                        break;
                      }

                      _context.next = 7;
                      return _n.invoke("createIndexThread", s, {
                        transferList: o
                      });

                    case 7:
                      _context.t0 = _context.sent;
                      _context.next = 11;
                      break;

                    case 10:
                      _context.t0 = this.createIndexThread(s).result;

                    case 11:
                      a = _context.t0;
                      return _context.abrupt("return", this.createPooledRBush().fromJSON(a));

                    case 13:
                    case "end":
                      return _context.stop();
                  }
                }
              }, _callee, this);
            }));

            function createIndex(_x, _x2) {
              return _createIndex.apply(this, arguments);
            }

            return createIndex;
          }()
        }, {
          key: "createIndexThread",
          value: function createIndexThread(e) {
            var t = new Float64Array(e.position),
                r = this.createPooledRBush();
            return e.components ? this.createIndexComponentsThread(r, t, e.components.map(function (e) {
              return new Uint32Array(e);
            })) : this.createIndexAllThread(r, t);
          }
        }, {
          key: "createIndexAllThread",
          value: function createIndexAllThread(e, t) {
            var r = new Array(t.length / 9);
            var _n2 = 0;

            for (var _e = 0; _e < t.length; _e += 9) {
              r[_n2++] = o(t, _e + 0, _e + 3, _e + 6);
            }

            return e.load(r), {
              result: e.toJSON()
            };
          }
        }, {
          key: "createIndexComponentsThread",
          value: function createIndexComponentsThread(e, t, r) {
            var _n3 = 0;

            var _iterator = _createForOfIteratorHelper(r),
                _step;

            try {
              for (_iterator.s(); !(_step = _iterator.n()).done;) {
                var _e2 = _step.value;
                _n3 += _e2.length / 3;
              }
            } catch (err) {
              _iterator.e(err);
            } finally {
              _iterator.f();
            }

            var s = new Array(_n3);
            var a = 0;

            var _iterator2 = _createForOfIteratorHelper(r),
                _step2;

            try {
              for (_iterator2.s(); !(_step2 = _iterator2.n()).done;) {
                var _e3 = _step2.value;

                for (var _r = 0; _r < _e3.length; _r += 3) {
                  s[a++] = o(t, 3 * _e3[_r + 0], 3 * _e3[_r + 1], 3 * _e3[_r + 2]);
                }
              }
            } catch (err) {
              _iterator2.e(err);
            } finally {
              _iterator2.f();
            }

            return e.load(s), {
              result: e.toJSON()
            };
          }
        }, {
          key: "createMeshData",
          value: function createMeshData(e) {
            var t = e.vertexAttributes.position.buffer;
            return !e.components || e.components.some(function (e) {
              return !e.faces;
            }) ? {
              position: t
            } : {
              position: t,
              components: e.components.map(function (e) {
                return e.faces;
              })
            };
          }
        }, {
          key: "createPooledRBush",
          value: function createPooledRBush() {
            return new _core_libs_rbush_PooledRBush_js__WEBPACK_IMPORTED_MODULE_2__["PooledRBush"](9, Object(_core_has_js__WEBPACK_IMPORTED_MODULE_0__["default"])("csp-restrictions") ? function (e) {
              return e;
            } : [".minX", ".minY", ".maxX", ".maxY"]);
          }
        }]);

        return n;
      }();

      function o(e, t, r, n) {
        return {
          minX: Math.min(e[t + 0], e[r + 0], e[n + 0]),
          maxX: Math.max(e[t + 0], e[r + 0], e[n + 0]),
          minY: Math.min(e[t + 1], e[r + 1], e[n + 1]),
          maxY: Math.max(e[t + 1], e[r + 1], e[n + 1]),
          p0: [e[t + 0], e[t + 1], e[t + 2]],
          p1: [e[r + 0], e[r + 1], e[r + 2]],
          p2: [e[n + 0], e[n + 1], e[n + 2]]
        };
      }
      /* harmony default export */


      __webpack_exports__["default"] = n;
      /***/
    },

    /***/
    "RjdO":
    /*!*********************************************************!*\
      !*** ./node_modules/@arcgis/core/chunks/quickselect.js ***!
      \*********************************************************/

    /*! exports provided: q */

    /***/
    function RjdO(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "q", function () {
        return r;
      });
      /* harmony import */


      var _commonjsHelpers_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ./_commonjsHelpers.js */
      "X2wA");
      /*
      All material copyright ESRI, All Rights Reserved, unless otherwise specified.
      See https://js.arcgis.com/4.18/esri/copyright.txt for details.
      */


      var r = Object(_commonjsHelpers_js__WEBPACK_IMPORTED_MODULE_0__["c"])(function (o) {
        var r;
        void 0 !== (r = function () {
          function o(o, t, a, f, i) {
            r(o, t, a || 0, f || o.length - 1, i || n);
          }

          function r(o, n, a, f, i) {
            for (; f > a;) {
              if (f - a > 600) {
                var c = f - a + 1,
                    e = n - a + 1,
                    h = Math.log(c),
                    u = .5 * Math.exp(2 * h / 3),
                    s = .5 * Math.sqrt(h * u * (c - u) / c) * (e - c / 2 < 0 ? -1 : 1);
                r(o, n, Math.max(a, Math.floor(n - e * u / c + s)), Math.min(f, Math.floor(n + (c - e) * u / c + s)), i);
              }

              var M = o[n],
                  m = a,
                  v = f;

              for (t(o, a, n), i(o[f], M) > 0 && t(o, a, f); m < v;) {
                for (t(o, m, v), m++, v--; i(o[m], M) < 0;) {
                  m++;
                }

                for (; i(o[v], M) > 0;) {
                  v--;
                }
              }

              0 === i(o[a], M) ? t(o, a, v) : t(o, ++v, f), v <= n && (a = v + 1), n <= v && (f = v - 1);
            }
          }

          function t(o, r, t) {
            var n = o[r];
            o[r] = o[t], o[t] = n;
          }

          function n(o, r) {
            return o < r ? -1 : o > r ? 1 : 0;
          }

          return o;
        }()) && (o.exports = r);
      });
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
    "zna6":
    /*!******************************************************************!*\
      !*** ./node_modules/@arcgis/core/core/libs/rbush/PooledRBush.js ***!
      \******************************************************************/

    /*! exports provided: default, BBox, PooledRBush */

    /***/
    function zna6(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "BBox", function () {
        return _;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "PooledRBush", function () {
        return h;
      });
      /* harmony import */


      var _maybe_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ../../maybe.js */
      "srIe");
      /* harmony import */


      var _arrayUtils_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ../../arrayUtils.js */
      "tQ+6");
      /* harmony import */


      var _PooledArray_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ../../PooledArray.js */
      "ikTR");
      /* harmony import */


      var _chunks_quickselect_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ../../../chunks/quickselect.js */
      "RjdO");
      /*
      All material copyright ESRI, All Rights Reserved, unless otherwise specified.
      See https://js.arcgis.com/4.18/esri/copyright.txt for details.
      */


      var h = /*#__PURE__*/function () {
        function h() {
          var t = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 9;
          var i = arguments.length > 1 ? arguments[1] : undefined;

          _classCallCheck(this, h);

          this.compareMinX = l, this.compareMinY = c, this.toBBox = function (t) {
            return t;
          }, this._maxEntries = Math.max(4, t || 9), this._minEntries = Math.max(2, Math.ceil(.4 * this._maxEntries)), i && ("function" == typeof i ? this.toBBox = i : this._initFormat(i)), this.clear();
        }

        _createClass(h, [{
          key: "destroy",
          value: function destroy() {
            this.clear(), M.prune(), X.prune(), Y.prune(), B.prune();
          }
        }, {
          key: "all",
          value: function all(t) {
            this._all(this.data, t);
          }
        }, {
          key: "search",
          value: function search(t, i) {
            var n = this.data;
            var e = this.toBBox;
            if (f(t, n)) for (M.clear(); n;) {
              for (var s = 0, _h12 = n.children.length; s < _h12; s++) {
                var _h13 = n.children[s],
                    _a = n.leaf ? e(_h13) : _h13;

                f(t, _a) && (n.leaf ? i(_h13) : x(t, _a) ? this._all(_h13, i) : M.push(_h13));
              }

              n = M.pop();
            }
          }
        }, {
          key: "collides",
          value: function collides(t) {
            var i = this.data;
            var n = this.toBBox;
            if (!f(t, i)) return !1;

            for (M.clear(); i;) {
              for (var e = 0, s = i.children.length; e < s; e++) {
                var _s = i.children[e],
                    _h14 = i.leaf ? n(_s) : _s;

                if (f(t, _h14)) {
                  if (i.leaf || x(t, _h14)) return !0;
                  M.push(_s);
                }
              }

              i = M.pop();
            }

            return !1;
          }
        }, {
          key: "load",
          value: function load(t) {
            var i = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : t.length;
            if (!i) return this;

            if (i < this._minEntries) {
              for (var _n4 = 0, e = i; _n4 < e; _n4++) {
                this.insert(t[_n4]);
              }

              return this;
            }

            var n = this._build(t.slice(0, i), 0, i - 1, 0);

            if (this.data.children.length) {
              if (this.data.height === n.height) this._splitRoot(this.data, n);else {
                if (this.data.height < n.height) {
                  var _t = this.data;
                  this.data = n, n = _t;
                }

                this._insert(n, this.data.height - n.height - 1, !0);
              }
            } else this.data = n;
            return this;
          }
        }, {
          key: "insert",
          value: function insert(t) {
            return t && this._insert(t, this.data.height - 1), this;
          }
        }, {
          key: "clear",
          value: function clear() {
            return this.data = new w([]), this;
          }
        }, {
          key: "remove",
          value: function remove(n) {
            if (!n) return this;
            var e,
                s = this.data,
                _h4 = null,
                a = 0,
                r = !1;
            var o = this.toBBox(n);

            for (Y.clear(), B.clear(); s || Y.length > 0;) {
              var l;
              if (!s) s = Object(_maybe_js__WEBPACK_IMPORTED_MODULE_0__["assumeNonNull"])(Y.pop()), _h4 = Y.data[Y.length - 1], a = null != (l = B.pop()) ? l : 0, r = !0;
              if (s.leaf && (e = Object(_arrayUtils_js__WEBPACK_IMPORTED_MODULE_1__["indexOf"])(s.children, n, s.children.length, s.indexHint), -1 !== e)) return s.children.splice(e, 1), Y.push(s), this._condense(Y), this;
              r || s.leaf || !x(s, o) ? _h4 ? (a++, s = _h4.children[a], r = !1) : s = null : (Y.push(s), B.push(a), a = 0, _h4 = s, s = s.children[0]);
            }

            return this;
          }
        }, {
          key: "toJSON",
          value: function toJSON() {
            return this.data;
          }
        }, {
          key: "fromJSON",
          value: function fromJSON(t) {
            return this.data = t, this;
          }
        }, {
          key: "_all",
          value: function _all(t, i) {
            var n = t;

            for (X.clear(); n;) {
              var e;

              if (!0 === n.leaf) {
                var _iterator3 = _createForOfIteratorHelper(n.children),
                    _step3;

                try {
                  for (_iterator3.s(); !(_step3 = _iterator3.n()).done;) {
                    var _t2 = _step3.value;
                    i(_t2);
                  }
                } catch (err) {
                  _iterator3.e(err);
                } finally {
                  _iterator3.f();
                }
              } else X.pushArray(n.children);

              n = null != (e = X.pop()) ? e : null;
            }
          }
        }, {
          key: "_build",
          value: function _build(t, i, n, e) {
            var s = n - i + 1;
            var _h5 = this._maxEntries;

            if (s <= _h5) {
              var _e4 = new w(t.slice(i, n + 1));

              return a(_e4, this.toBBox), _e4;
            }

            e || (e = Math.ceil(Math.log(s) / Math.log(_h5)), _h5 = Math.ceil(s / Math.pow(_h5, e - 1)));
            var r = new b([]);
            r.height = e;
            var o = Math.ceil(s / _h5),
                l = o * Math.ceil(Math.sqrt(_h5));
            p(t, i, n, l, this.compareMinX);

            for (var _s2 = i; _s2 <= n; _s2 += l) {
              var _i = Math.min(_s2 + l - 1, n);

              p(t, _s2, _i, o, this.compareMinY);

              for (var _n5 = _s2; _n5 <= _i; _n5 += o) {
                var _s3 = Math.min(_n5 + o - 1, _i);

                r.children.push(this._build(t, _n5, _s3, e - 1));
              }
            }

            return a(r, this.toBBox), r;
          }
        }, {
          key: "_chooseSubtree",
          value: function _chooseSubtree(t, i, n, e) {
            for (; e.push(i), !0 !== i.leaf && e.length - 1 !== n;) {
              var _n6 = void 0,
                  _e5 = 1 / 0,
                  _a2 = 1 / 0;

              for (var _r2 = 0, _o = i.children.length; _r2 < _o; _r2++) {
                var _o2 = i.children[_r2],
                    _l = m(_o2),
                    _c = (s = t, _h6 = _o2, (Math.max(_h6.maxX, s.maxX) - Math.min(_h6.minX, s.minX)) * (Math.max(_h6.maxY, s.maxY) - Math.min(_h6.minY, s.minY)) - _l);

                _c < _a2 ? (_a2 = _c, _e5 = _l < _e5 ? _l : _e5, _n6 = _o2) : _c === _a2 && _l < _e5 && (_e5 = _l, _n6 = _o2);
              }

              i = _n6 || i.children[0];
            }

            var s, _h6;

            return i;
          }
        }, {
          key: "_insert",
          value: function _insert(t, i, n) {
            var e = this.toBBox,
                s = n ? t : e(t);
            Y.clear();

            var _h7 = this._chooseSubtree(s, this.data, i, Y);

            for (_h7.children.push(t), o(_h7, s); i >= 0 && Y.data[i].children.length > this._maxEntries;) {
              this._split(Y, i), i--;
            }

            this._adjustParentBBoxes(s, Y, i);
          }
        }, {
          key: "_split",
          value: function _split(t, i) {
            var n = t.data[i],
                e = n.children.length,
                s = this._minEntries;

            this._chooseSplitAxis(n, s, e);

            var _h8 = this._chooseSplitIndex(n, s, e);

            if (!_h8) return void console.log("  Error: assertion failed at PooledRBush._split: no valid split index");
            var r = n.children.splice(_h8, n.children.length - _h8),
                o = n.leaf ? new w(r) : new b(r);
            o.height = n.height, a(n, this.toBBox), a(o, this.toBBox), i ? t.data[i - 1].children.push(o) : this._splitRoot(n, o);
          }
        }, {
          key: "_splitRoot",
          value: function _splitRoot(t, i) {
            this.data = new b([t, i]), this.data.height = t.height + 1, a(this.data, this.toBBox);
          }
        }, {
          key: "_chooseSplitIndex",
          value: function _chooseSplitIndex(t, i, n) {
            var e, s, _h9;

            e = s = 1 / 0;

            for (var _a3 = i; _a3 <= n - i; _a3++) {
              var _i2 = r(t, 0, _a3, this.toBBox),
                  _o3 = r(t, _a3, n, this.toBBox),
                  _l2 = u(_i2, _o3),
                  _c2 = m(_i2) + m(_o3);

              _l2 < e ? (e = _l2, _h9 = _a3, s = _c2 < s ? _c2 : s) : _l2 === e && _c2 < s && (s = _c2, _h9 = _a3);
            }

            return _h9;
          }
        }, {
          key: "_chooseSplitAxis",
          value: function _chooseSplitAxis(t, i, n) {
            var e = t.leaf ? this.compareMinX : l,
                s = t.leaf ? this.compareMinY : c;
            this._allDistMargin(t, i, n, e) < this._allDistMargin(t, i, n, s) && t.children.sort(e);
          }
        }, {
          key: "_allDistMargin",
          value: function _allDistMargin(t, i, n, e) {
            t.children.sort(e);

            var s = this.toBBox,
                _h10 = r(t, 0, i, s),
                a = r(t, n - i, n, s);

            var l = d(_h10) + d(a);

            for (var _e6 = i; _e6 < n - i; _e6++) {
              var _i3 = t.children[_e6];
              o(_h10, t.leaf ? s(_i3) : _i3), l += d(_h10);
            }

            for (var _e7 = n - i - 1; _e7 >= i; _e7--) {
              var _i4 = t.children[_e7];
              o(a, t.leaf ? s(_i4) : _i4), l += d(a);
            }

            return l;
          }
        }, {
          key: "_adjustParentBBoxes",
          value: function _adjustParentBBoxes(t, i, n) {
            for (var e = n; e >= 0; e--) {
              o(i.data[e], t);
            }
          }
        }, {
          key: "_condense",
          value: function _condense(t) {
            for (var n = t.length - 1; n >= 0; n--) {
              var e = t.data[n];
              if (0 === e.children.length) {
                if (n > 0) {
                  var s = t.data[n - 1],
                      _h15 = s.children;

                  _h15.splice(Object(_arrayUtils_js__WEBPACK_IMPORTED_MODULE_1__["indexOf"])(_h15, e, _h15.length, s.indexHint), 1);
                } else this.clear();
              } else a(e, this.toBBox);
            }
          }
        }, {
          key: "_initFormat",
          value: function _initFormat(t) {
            var i = ["return a", " - b", ";"];
            this.compareMinX = new Function("a", "b", i.join(t[0])), this.compareMinY = new Function("a", "b", i.join(t[1])), this.toBBox = new Function("a", "return {minX: a" + t[0] + ", minY: a" + t[1] + ", maxX: a" + t[2] + ", maxY: a" + t[3] + "};");
          }
        }]);

        return h;
      }();

      function a(t, i) {
        r(t, 0, t.children.length, i, t);
      }

      function r(t, i, n, e, s) {
        s || (s = new w([])), s.minX = 1 / 0, s.minY = 1 / 0, s.maxX = -1 / 0, s.maxY = -1 / 0;

        for (var _h16, _a4 = i; _a4 < n; _a4++) {
          _h16 = t.children[_a4], o(s, t.leaf ? e(_h16) : _h16);
        }

        return s;
      }

      function o(t, i) {
        t.minX = Math.min(t.minX, i.minX), t.minY = Math.min(t.minY, i.minY), t.maxX = Math.max(t.maxX, i.maxX), t.maxY = Math.max(t.maxY, i.maxY);
      }

      function l(t, i) {
        return t.minX - i.minX;
      }

      function c(t, i) {
        return t.minY - i.minY;
      }

      function m(t) {
        return (t.maxX - t.minX) * (t.maxY - t.minY);
      }

      function d(t) {
        return t.maxX - t.minX + (t.maxY - t.minY);
      }

      function u(t, i) {
        var n = Math.max(t.minX, i.minX),
            e = Math.max(t.minY, i.minY),
            s = Math.min(t.maxX, i.maxX),
            h = Math.min(t.maxY, i.maxY);
        return Math.max(0, s - n) * Math.max(0, h - e);
      }

      function x(t, i) {
        return t.minX <= i.minX && t.minY <= i.minY && i.maxX <= t.maxX && i.maxY <= t.maxY;
      }

      function f(t, i) {
        return i.minX <= t.maxX && i.minY <= t.maxY && i.maxX >= t.minX && i.maxY >= t.minY;
      }

      function p(i, n, e, h, a) {
        var r = [n, e];

        for (; r.length;) {
          var _n7 = Object(_maybe_js__WEBPACK_IMPORTED_MODULE_0__["assumeNonNull"])(r.pop()),
              _e8 = Object(_maybe_js__WEBPACK_IMPORTED_MODULE_0__["assumeNonNull"])(r.pop());

          if (_n7 - _e8 <= h) continue;

          var _o4 = _e8 + Math.ceil((_n7 - _e8) / h / 2) * h;

          Object(_chunks_quickselect_js__WEBPACK_IMPORTED_MODULE_3__["q"])(i, _o4, _e8, _n7, a), r.push(_e8, _o4, _o4, _n7);
        }
      }

      var M = new _PooledArray_js__WEBPACK_IMPORTED_MODULE_2__["default"](),
          X = new _PooledArray_js__WEBPACK_IMPORTED_MODULE_2__["default"](),
          Y = new _PooledArray_js__WEBPACK_IMPORTED_MODULE_2__["default"](),
          B = new _PooledArray_js__WEBPACK_IMPORTED_MODULE_2__["default"]({
        deallocator: void 0
      });

      var _ = function _() {
        _classCallCheck(this, _);

        this.minX = 1 / 0, this.minY = 1 / 0, this.maxX = -1 / 0, this.maxY = -1 / 0;
      };

      var g = /*#__PURE__*/function (_ref) {
        _inherits(g, _ref);

        var _super = _createSuper(g);

        function g() {
          var _this;

          _classCallCheck(this, g);

          _this = _super.apply(this, arguments), _this.height = 1, _this.indexHint = new _arrayUtils_js__WEBPACK_IMPORTED_MODULE_1__["PositionHint"]();
          return _this;
        }

        return g;
      }(_);

      var w = /*#__PURE__*/function (_g) {
        _inherits(w, _g);

        var _super2 = _createSuper(w);

        function w(t) {
          var _this2;

          _classCallCheck(this, w);

          _this2 = _super2.call(this), _this2.children = t, _this2.leaf = !0;
          return _this2;
        }

        return w;
      }(g);

      var b = /*#__PURE__*/function (_g2) {
        _inherits(b, _g2);

        var _super3 = _createSuper(b);

        function b(t) {
          var _this3;

          _classCallCheck(this, b);

          _this3 = _super3.call(this), _this3.children = t, _this3.leaf = !1;
          return _this3;
        }

        return b;
      }(g);
      /* harmony default export */


      __webpack_exports__["default"] = h;
      /***/
    }
  }]);
})();
//# sourceMappingURL=geometry-support-meshUtils-ElevationSamplerWorker-js-es5.js.map