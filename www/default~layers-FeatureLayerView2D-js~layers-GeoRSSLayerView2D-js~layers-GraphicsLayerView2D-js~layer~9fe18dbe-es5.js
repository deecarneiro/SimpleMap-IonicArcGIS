(function () {
  function _toArray(arr) { return _arrayWithHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableRest(); }

  function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }

  function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

  function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && Symbol.iterator in Object(iter)) return Array.from(iter); }

  function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }

  function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

  function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

  function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

  function _createForOfIteratorHelper(o, allowArrayLike) { var it; if (typeof Symbol === "undefined" || o[Symbol.iterator] == null) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e60) { throw _e60; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = o[Symbol.iterator](); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e61) { didErr = true; err = _e61; }, f: function f() { try { if (!normalCompletion && it["return"] != null) it["return"](); } finally { if (didErr) throw err; } } }; }

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

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["default~layers-FeatureLayerView2D-js~layers-GeoRSSLayerView2D-js~layers-GraphicsLayerView2D-js~layer~9fe18dbe"], {
    /***/
    "/iQf":
    /*!*************************************************************!*\
      !*** ./node_modules/@arcgis/core/symbols/cim/CIMEffects.js ***!
      \*************************************************************/

    /*! exports provided: SimpleGeometryCursor, clone */

    /***/
    function iQf(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "SimpleGeometryCursor", function () {
        return r;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "clone", function () {
        return e;
      });
      /* harmony import */


      var _core_lang_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ../../core/lang.js */
      "f/qv");
      /*
      All material copyright ESRI, All Rights Reserved, unless otherwise specified.
      See https://js.arcgis.com/4.18/esri/copyright.txt for details.
      */


      var r = /*#__PURE__*/function () {
        function r(t) {
          _classCallCheck(this, r);

          this._geometry = t;
        }

        _createClass(r, [{
          key: "next",
          value: function next() {
            var t = this._geometry;
            return this._geometry = null, t;
          }
        }]);

        return r;
      }();

      function e(r) {
        return Object(_core_lang_js__WEBPACK_IMPORTED_MODULE_0__["clone"])(r);
      }
      /***/

    },

    /***/
    "/vtc":
    /*!**************************************************************!*\
      !*** ./node_modules/@arcgis/core/symbols/cim/CurveHelper.js ***!
      \**************************************************************/

    /*! exports provided: CurveHelper, PIXEL_TOLERANCE, PathHelper */

    /***/
    function vtc(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "CurveHelper", function () {
        return s;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "PIXEL_TOLERANCE", function () {
        return t;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "PathHelper", function () {
        return e;
      });
      /*
      All material copyright ESRI, All Rights Reserved, unless otherwise specified.
      See https://js.arcgis.com/4.18/esri/copyright.txt for details.
      */


      var t = .03;

      var e = /*#__PURE__*/function () {
        function e() {
          _classCallCheck(this, e);

          this._path = [];
        }

        _createClass(e, [{
          key: "path",
          value: function path() {
            return this._path;
          }
        }, {
          key: "addPath",
          value: function addPath(t, _e) {
            _e || t.reverse(), Array.prototype.push.apply(this._path, t), _e || t.reverse();
          }
        }, {
          key: "startPath",
          value: function startPath(t) {
            this._path.push(t);
          }
        }, {
          key: "lineTo",
          value: function lineTo(t) {
            this._path.push(t);
          }
        }, {
          key: "close",
          value: function close() {
            var t = this._path;
            t.length > 1 && (t[0][0] === t[t.length - 1][0] && t[0][1] === t[t.length - 1][1] || t.push([t[0][0], t[0][1]]));
          }
        }], [{
          key: "mergePath",
          value: function mergePath(t, _e2) {
            _e2 && Array.prototype.push.apply(t, _e2);
          }
        }]);

        return e;
      }();

      var s = /*#__PURE__*/function () {
        function s() {
          var t = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 0;
          var e = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : !1;

          _classCallCheck(this, s);
        }

        _createClass(s, [{
          key: "normalize",
          value: function normalize(t) {
            var e = Math.sqrt(t[0] * t[0] + t[1] * t[1]);
            t[0] /= e, t[1] /= e;
          }
        }, {
          key: "calculateLength",
          value: function calculateLength(t, e) {
            var _s = e[0] - t[0],
                n = e[1] - t[1];

            return Math.sqrt(_s * _s + n * n);
          }
        }, {
          key: "calculateSegLength",
          value: function calculateSegLength(t, e) {
            return this.calculateLength(t[e], t[e + 1]);
          }
        }, {
          key: "calculatePathLength",
          value: function calculatePathLength(t) {
            var e = 0;

            var _s2 = t ? t.length : 0;

            for (var n = 0; n < _s2 - 1; ++n) {
              e += this.calculateSegLength(t, n);
            }

            return e;
          }
        }, {
          key: "calculatePathArea",
          value: function calculatePathArea(t) {
            var e = 0;

            var _s3 = t ? t.length : 0;

            for (var n = 0; n < _s3 - 1; ++n) {
              e += (t[n + 1][0] - t[n][0]) * (t[n + 1][1] + t[n][1]);
            }

            return e / 2;
          }
        }, {
          key: "getCoord2D",
          value: function getCoord2D(t, e, _s4) {
            return [t[0] + (e[0] - t[0]) * _s4, t[1] + (e[1] - t[1]) * _s4];
          }
        }, {
          key: "getSegCoord2D",
          value: function getSegCoord2D(t, e, _s5) {
            return this.getCoord2D(t[e], t[e + 1], _s5);
          }
        }, {
          key: "getAngle",
          value: function getAngle(t, e, _s6) {
            var n = e[0] - t[0],
                r = e[1] - t[1];
            return Math.atan2(r, n);
          }
        }, {
          key: "getSegAngle",
          value: function getSegAngle(t, e, _s7) {
            return this.getAngle(t[e], t[e + 1], _s7);
          }
        }, {
          key: "getAngleCS",
          value: function getAngleCS(t, e, _s8) {
            var n = e[0] - t[0],
                r = e[1] - t[1],
                h = Math.sqrt(n * n + r * r);
            return h > 0 ? [n / h, r / h] : [1, 0];
          }
        }, {
          key: "getSegAngleCS",
          value: function getSegAngleCS(t, e, _s9) {
            return this.getAngleCS(t[e], t[e + 1], _s9);
          }
        }, {
          key: "cut",
          value: function cut(t, e, _s10, n) {
            return [_s10 <= 0 ? t[e] : this.getSegCoord2D(t, e, _s10), n >= 1 ? t[e + 1] : this.getSegCoord2D(t, e, n)];
          }
        }, {
          key: "addSegment",
          value: function addSegment(t, e, _s11) {
            _s11 && t.push(e[0]), t.push(e[1]);
          }
        }, {
          key: "getSubCurve",
          value: function getSubCurve(t, e, _s12) {
            var n = [];
            return this.appendSubCurve(n, t, e, _s12) ? n : null;
          }
        }, {
          key: "appendSubCurve",
          value: function appendSubCurve(t, e, _s13, n) {
            var r = e ? e.length - 1 : 0;
            var h = 0,
                l = !0,
                a = 0;

            for (; a < r;) {
              var _r = this.calculateSegLength(e, a);

              if (0 !== _r) {
                if (l) {
                  if (h + _r > _s13) {
                    var o = (_s13 - h) / _r;
                    var u = 1,
                        c = !1;
                    h + _r >= n && (u = (n - h) / _r, c = !0);
                    var i = this.cut(e, a, o, u);
                    if (i && this.addSegment(t, i, l), c) break;
                    l = !1;
                  }
                } else {
                  if (h + _r > n) {
                    var _s24 = this.cut(e, a, 0, (n - h) / _r);

                    _s24 && this.addSegment(t, _s24, l);
                    break;
                  }

                  this.addSegment(t, [e[a], e[a + 1]], l);
                }

                h += _r, ++a;
              } else ++a;
            }

            return !0;
          }
        }, {
          key: "getCIMPointAlong",
          value: function getCIMPointAlong(t, e) {
            var _s15 = t ? t.length - 1 : 0;

            var n = 0,
                r = -1;

            for (; r < _s15;) {
              ++r;

              var _s25 = this.calculateSegLength(t, r);

              if (0 !== _s25) {
                if (n + _s25 > e) {
                  var h = (e - n) / _s25;
                  return this.getCoord2D(t[r], t[r + 1], h);
                }

                n += _s25;
              }
            }

            return null;
          }
        }, {
          key: "isEmpty",
          value: function isEmpty(t, e) {
            if (!t || t.length <= 1) return !0;

            var _s17 = t ? t.length - 1 : 0;

            var n = -1;

            for (; n < _s17;) {
              if (++n, t[n + 1][0] !== t[n][0] || t[n + 1][1] !== t[n][1]) return !1;
              if (e && t[n + 1][2] !== t[n][2]) return !1;
            }

            return !0;
          }
        }, {
          key: "offset",
          value: function offset(t, e, _s18, n, r) {
            if (!t || t.length < 2) return null;
            var h = t.length;
            var l = t[0][0] === t[h - 1][0] && t[0][1] === t[h - 1][1];

            if (l) {
              if (t.length < 3) return null;
              --h;
            }

            var a = [];
            var o = l ? t[h - 1] : null,
                u = t[0];

            for (var _r2 = 0; _r2 < h; _r2++) {
              var c = _r2 === h - 1 ? l ? t[0] : null : t[_r2 + 1];
              if (o) {
                if (c) {
                  var _t = [c[0] - u[0], c[1] - u[1]];
                  this.normalize(_t);
                  var _r3 = [u[0] - o[0], u[1] - o[1]];
                  this.normalize(_r3);

                  var _h = _r3[0] * _t[1] - _r3[1] * _t[0],
                      _l = _r3[0] * _t[0] + _r3[1] * _t[1];

                  if (_h >= 0 == e <= 0) {
                    var _s26 = [_t[0] - _r3[0], _t[1] - _r3[1]];
                    this.normalize(_s26);

                    var _n = Math.sqrt((1 + _l) / 2),
                        _h2 = -Math.abs(e) / _n;

                    a.push([u[0] - _s26[0] * _h2, u[1] - _s26[1] * _h2]);
                  } else switch (_s18) {
                    case "Mitered":
                      {
                        var _s27 = Math.sqrt((1 + _l) / 2);

                        if (_s27 > 0 && 1 / _s27 < n) {
                          var _n2 = [_t[0] - _r3[0], _t[1] - _r3[1]];
                          this.normalize(_n2);

                          var _h3 = Math.abs(e) / _s27;

                          a.push([u[0] - _n2[0] * _h3, u[1] - _n2[1] * _h3]);
                          break;
                        }
                      }

                    case "Bevelled":
                      a.push([u[0] + _r3[1] * e, u[1] - _r3[0] * e]), a.push([u[0] + _t[1] * e, u[1] - _t[0] * e]);
                      break;

                    case "Rounded":
                      {
                        a.push([u[0] + _r3[1] * e, u[1] - _r3[0] * e]);

                        var _s28 = 5,
                            _n3 = 1 / _s28;

                        var _h4 = _n3;

                        for (var _l2 = 1; _l2 < _s28; _l2++, _h4 += _n3) {
                          var _s29 = [_r3[1] * (1 - _h4) + _t[1] * _h4, -_r3[0] * (1 - _h4) - _t[0] * _h4];
                          this.normalize(_s29), a.push([u[0] + _s29[0] * e, u[1] + _s29[1] * e]);
                        }

                        a.push([u[0] + _t[1] * e, u[1] - _t[0] * e]);
                        break;
                      }

                    case "Square":
                    default:
                      if (_h < 0) a.push([u[0] + (_r3[1] + _r3[0]) * e, u[1] + (_r3[1] - _r3[0]) * e]), a.push([u[0] + (_t[1] - _t[0]) * e, u[1] - (_t[0] + _t[1]) * e]);else {
                        var _s30 = Math.sqrt((1 + Math.abs(_l)) / 2),
                            _n4 = [_t[0] - _r3[0], _t[1] - _r3[1]];

                        this.normalize(_n4);

                        var _h5 = e / _s30;

                        a.push([u[0] - _n4[0] * _h5, u[1] - _n4[1] * _h5]);
                      }
                  }
                } else {
                  var _t2 = [u[0] - o[0], u[1] - o[1]];
                  this.normalize(_t2), a.push([u[0] + _t2[1] * e, u[1] - _t2[0] * e]);
                }
              } else {
                var _t3 = [c[0] - u[0], c[1] - u[1]];
                this.normalize(_t3), a.push([u[0] + _t3[1] * e, u[1] - _t3[0] * e]);
              }
              o = u, u = c;
            }

            return l && a.push([a[0][0], a[0][1]]), a;
          }
        }]);

        return s;
      }();
      /***/

    },

    /***/
    "01wM":
    /*!************************************************************************************!*\
      !*** ./node_modules/@arcgis/core/symbols/cim/placements/PlacementAtExtremities.js ***!
      \************************************************************************************/

    /*! exports provided: PlacementAtExtremities */

    /***/
    function wM(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "PlacementAtExtremities", function () {
        return i;
      });
      /* harmony import */


      var _CIMCursor_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ../CIMCursor.js */
      "tqcG");
      /* harmony import */


      var _CurveHelper_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ../CurveHelper.js */
      "/vtc");
      /*
      All material copyright ESRI, All Rights Reserved, unless otherwise specified.
      See https://js.arcgis.com/4.18/esri/copyright.txt for details.
      */


      var i = /*#__PURE__*/function () {
        function i() {
          _classCallCheck(this, i);
        }

        _createClass(i, [{
          key: "execute",
          value: function execute(e, t, s) {
            return new n(e, t, s);
          }
        }], [{
          key: "local",
          value: function local() {
            return null === i.instance && (i.instance = new i()), i.instance;
          }
        }]);

        return i;
      }();

      i.instance = null;

      var n = /*#__PURE__*/function (_CIMCursor_js__WEBPAC) {
        _inherits(n, _CIMCursor_js__WEBPAC);

        var _super = _createSuper(n);

        function n(e, t, i) {
          var _this;

          _classCallCheck(this, n);

          _this = _super.call(this, e, !1, !0), _this._curveHelper = new _CurveHelper_js__WEBPACK_IMPORTED_MODULE_1__["CurveHelper"](), _this._angleToLine = void 0 === t.angleToLine || t.angleToLine, _this._offset = void 0 !== t.offset ? t.offset * i : 0, _this._type = t.extremityPlacement, _this._position = void 0 !== t.offsetAlongLine ? t.offsetAlongLine * i : 0, _this._beginProcessed = !1;
          return _this;
        }

        _createClass(n, [{
          key: "processPath",
          value: function processPath(e) {
            var t;

            switch (this._type) {
              case "Both":
              default:
                this._beginProcessed ? (t = this._atExtremities(e, this._position, !1), this._beginProcessed = !1, this.iteratePath = !1) : (t = this._atExtremities(e, this._position, !0), this._beginProcessed = !0, this.iteratePath = !0);
                break;

              case "JustBegin":
                t = this._atExtremities(e, this._position, !0);
                break;

              case "JustEnd":
                t = this._atExtremities(e, this._position, !1);
                break;

              case "None":
            }

            return t;
          }
        }, {
          key: "_atExtremities",
          value: function _atExtremities(e, s, i) {
            var _n5 = e.length;
            if (_n5 < 2) return null;
            var r = i ? 1 : _n5 - 2,
                o = i ? _n5 : -1,
                a = i ? 1 : -1;
            var l,
                h = 0,
                c = i ? e[0] : e[_n5 - 1];

            for (var _i = r; _i !== o; _i += a) {
              l = c, c = e[_i];

              var _n7 = this._curveHelper.calculateLength(l, c);

              if (h + _n7 > s) {
                var _e3 = (s - h) / _n7,
                    _this$_curveHelper$ge = this._curveHelper.getAngleCS(l, c, _e3),
                    _this$_curveHelper$ge2 = _slicedToArray(_this$_curveHelper$ge, 2),
                    _i2 = _this$_curveHelper$ge2[0],
                    _r4 = _this$_curveHelper$ge2[1],
                    _o = Object(_CIMCursor_js__WEBPACK_IMPORTED_MODULE_0__["getCoord2D"])(l, c, _e3);

                return this.internalPlacement.setTranslate(_o[0] - this._offset * _r4, _o[1] + this._offset * _i2), this._angleToLine && this.internalPlacement.setRotateCS(-_i2, -_r4), this.internalPlacement;
              }

              h += _n7;
            }

            return null;
          }
        }]);

        return n;
      }(_CIMCursor_js__WEBPACK_IMPORTED_MODULE_0__["PathTransformationCursor"]);
      /***/

    },

    /***/
    "5x/F":
    /*!*********************************************************************************!*\
      !*** ./node_modules/@arcgis/core/views/2d/engine/LevelDependentSizeVariable.js ***!
      \*********************************************************************************/

    /*! exports provided: LevelDependentSizeVariable */

    /***/
    function xF(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "LevelDependentSizeVariable", function () {
        return n;
      });
      /* harmony import */


      var _chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ../../../chunks/tslib.es6.js */
      "pO5D");
      /* harmony import */


      var _core_has_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ../../../core/has.js */
      "wSAH");
      /* harmony import */


      var _core_lang_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ../../../core/lang.js */
      "f/qv");
      /* harmony import */


      var _core_Logger_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ../../../core/Logger.js */
      "6S2I");
      /* harmony import */


      var _core_accessorSupport_ensureType_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ../../../core/accessorSupport/ensureType.js */
      "zqDF");
      /* harmony import */


      var _core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ../../../core/accessorSupport/decorators/property.js */
      "WbKI");
      /* harmony import */


      var _core_accessorSupport_decorators_subclass_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ../../../core/accessorSupport/decorators/subclass.js */
      "04ZG");
      /* harmony import */


      var _core_accessorSupport_decorators_writer_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! ../../../core/accessorSupport/decorators/writer.js */
      "Cduq");
      /* harmony import */


      var _core_urlUtils_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! ../../../core/urlUtils.js */
      "4EHJ");
      /* harmony import */


      var _core_uuid_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! ../../../core/uuid.js */
      "ju1D");
      /* harmony import */


      var _portal_support_resourceExtension_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
      /*! ../../../portal/support/resourceExtension.js */
      "9AIY");
      /* harmony import */


      var _renderers_visualVariables_support_sizeVariableUtils_js__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
      /*! ../../../renderers/visualVariables/support/sizeVariableUtils.js */
      "hvLT");
      /* harmony import */


      var _renderers_visualVariables_SizeVariable_js__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
      /*! ../../../renderers/visualVariables/SizeVariable.js */
      "w/y1");
      /*
      All material copyright ESRI, All Rights Reserved, unless otherwise specified.
      See https://js.arcgis.com/4.18/esri/copyright.txt for details.
      */


      var _l3;

      var n = _l3 = /*#__PURE__*/function (_renderers_visualVari) {
        _inherits(l, _renderers_visualVari);

        var _super2 = _createSuper(l);

        function l() {
          _classCallCheck(this, l);

          return _super2.apply(this, arguments);
        }

        _createClass(l, [{
          key: "writeLevels",
          value: function writeLevels(e, s, i) {
            for (var _i3 in e) {
              var _e4 = this.levels[_i3];
              return void (s.stops = _e4);
            }
          }
        }, {
          key: "clone",
          value: function clone() {
            return new _l3({
              axis: this.axis,
              field: this.field,
              valueExpression: this.valueExpression,
              valueExpressionTitle: this.valueExpressionTitle,
              maxDataValue: this.maxDataValue,
              maxSize: Object(_renderers_visualVariables_support_sizeVariableUtils_js__WEBPACK_IMPORTED_MODULE_11__["isSizeVariable"])(this.maxSize) ? this.maxSize.clone() : this.maxSize,
              minDataValue: this.minDataValue,
              minSize: Object(_renderers_visualVariables_support_sizeVariableUtils_js__WEBPACK_IMPORTED_MODULE_11__["isSizeVariable"])(this.minSize) ? this.minSize.clone() : this.minSize,
              normalizationField: this.normalizationField,
              stops: this.stops && this.stops.map(function (e) {
                return e.clone();
              }),
              target: this.target,
              useSymbolValue: this.useSymbolValue,
              valueRepresentation: this.valueRepresentation,
              valueUnit: this.valueUnit,
              legendOptions: this.legendOptions && this.legendOptions.clone(),
              levels: Object(_core_lang_js__WEBPACK_IMPORTED_MODULE_2__["clone"])(this.levels)
            });
          }
        }]);

        return l;
      }(_renderers_visualVariables_SizeVariable_js__WEBPACK_IMPORTED_MODULE_12__["default"]);

      Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_5__["property"])()], n.prototype, "levels", void 0), Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_writer_js__WEBPACK_IMPORTED_MODULE_7__["writer"])("levels")], n.prototype, "writeLevels", null), n = _l3 = Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_subclass_js__WEBPACK_IMPORTED_MODULE_6__["subclass"])("esri.views.2d.engine.LevelDependentSizeVariable")], n);
      /***/
    },

    /***/
    "6BGx":
    /*!****************************************************************************************!*\
      !*** ./node_modules/@arcgis/core/symbols/cim/placements/PlacementAlongLineSameSize.js ***!
      \****************************************************************************************/

    /*! exports provided: PlacementAlongLineSameSize */

    /***/
    function BGx(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "PlacementAlongLineSameSize", function () {
        return n;
      });
      /* harmony import */


      var _CIMCursor_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ../CIMCursor.js */
      "tqcG");
      /* harmony import */


      var _GeometryWalker_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ../GeometryWalker.js */
      "DAsI");
      /* harmony import */


      var _enums_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ../enums.js */
      "qzns");
      /*
      All material copyright ESRI, All Rights Reserved, unless otherwise specified.
      See https://js.arcgis.com/4.18/esri/copyright.txt for details.
      */


      var n = /*#__PURE__*/function () {
        function n() {
          _classCallCheck(this, n);
        }

        _createClass(n, [{
          key: "execute",
          value: function execute(t, e, s) {
            return new a(t, e, s);
          }
        }], [{
          key: "local",
          value: function local() {
            return null === n.instance && (n.instance = new n()), n.instance;
          }
        }]);

        return n;
      }();

      n.instance = null;

      var a = /*#__PURE__*/function (_CIMCursor_js__WEBPAC2) {
        _inherits(a, _CIMCursor_js__WEBPAC2);

        var _super3 = _createSuper(a);

        function a(t, i, n) {
          var _this2;

          _classCallCheck(this, a);

          _this2 = _super3.call(this, t, !0, !0), _this2._grometryWalker = new _GeometryWalker_js__WEBPACK_IMPORTED_MODULE_1__["GeometryWalker"](), _this2._grometryWalker.updateTolerance(n), _this2._angleToLine = void 0 === i.angleToLine || i.angleToLine, _this2._offset = void 0 !== i.offset ? i.offset * n : 0, _this2._originalEndings = i.endings, _this2._offsetAtEnd = void 0 !== i.customEndingOffset ? i.customEndingOffset * n : 0, _this2._position = void 0 !== i.offsetAlongLine ? i.offsetAlongLine * n : 0, _this2._pattern = new _GeometryWalker_js__WEBPACK_IMPORTED_MODULE_1__["DashPattern"](), _this2._pattern.init(i.placementTemplate, !1), _this2._pattern.scale(n), _this2._endings = _this2._originalEndings;
          return _this2;
        }

        _createClass(a, [{
          key: "processPath",
          value: function processPath(t) {
            if (this._pattern.isEmpty()) return null;
            var e;
            if (this.iteratePath) e = this._pattern.nextValue();else {
              this._originalEndings === _enums_js__WEBPACK_IMPORTED_MODULE_2__["PlacementEndings"].WithFullGap && this.isClosed ? this._endings = _enums_js__WEBPACK_IMPORTED_MODULE_2__["PlacementEndings"].WithMarkers : this._endings = this._originalEndings, this._pattern.extPtGap = 0;

              var _s31,
                  _n8 = !0;

              switch (this._endings) {
                case _enums_js__WEBPACK_IMPORTED_MODULE_2__["PlacementEndings"].NoConstraint:
                  _s31 = -this._position, _s31 = this._adjustPosition(_s31), _n8 = !1;
                  break;

                case _enums_js__WEBPACK_IMPORTED_MODULE_2__["PlacementEndings"].WithHalfGap:
                default:
                  _s31 = -this._pattern.lastValue() / 2;
                  break;

                case _enums_js__WEBPACK_IMPORTED_MODULE_2__["PlacementEndings"].WithFullGap:
                  _s31 = -this._pattern.lastValue(), this._pattern.extPtGap = this._pattern.lastValue();
                  break;

                case _enums_js__WEBPACK_IMPORTED_MODULE_2__["PlacementEndings"].WithMarkers:
                  _s31 = 0;
                  break;

                case _enums_js__WEBPACK_IMPORTED_MODULE_2__["PlacementEndings"].Custom:
                  _s31 = -this._position, _s31 = this._adjustPosition(_s31), this._pattern.extPtGap = .5 * this._offsetAtEnd;
              }

              if (!this._grometryWalker.init(t, this._pattern, _n8)) return null;

              this._pattern.reset();

              var _a2 = 0;

              for (; _s31 > _a2;) {
                _s31 -= _a2, _a2 = this._pattern.nextValue();
              }

              _a2 -= _s31, e = _a2, this.iteratePath = !0;
            }
            var s = {};
            return this._grometryWalker.nextPointAndAngle(e, s) ? this._endings === _enums_js__WEBPACK_IMPORTED_MODULE_2__["PlacementEndings"].WithFullGap && this._grometryWalker.isPathEnd() ? (this.iteratePath = !1, null) : this._endings === _enums_js__WEBPACK_IMPORTED_MODULE_2__["PlacementEndings"].WithMarkers && this._grometryWalker.isPathEnd() && (this.iteratePath = !1, this.isClosed) ? null : (this.internalPlacement.setTranslate(s.pt[0] + this._offset * s.sa, s.pt[1] - this._offset * s.ca), this._angleToLine && this.internalPlacement.setRotateCS(s.ca, s.sa), this.internalPlacement) : (this.iteratePath = !1, null);
          }
        }, {
          key: "_adjustPosition",
          value: function _adjustPosition(t) {
            var e = t / this._pattern.length();

            return e -= Math.floor(e), e * this._pattern.length();
          }
        }]);

        return a;
      }(_CIMCursor_js__WEBPACK_IMPORTED_MODULE_0__["PathTransformationCursor"]);
      /***/

    },

    /***/
    "8Fik":
    /*!*********************************************************************!*\
      !*** ./node_modules/@arcgis/core/symbols/cim/effects/EffectWave.js ***!
      \*********************************************************************/

    /*! exports provided: EffectWave */

    /***/
    function Fik(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "EffectWave", function () {
        return n;
      });
      /* harmony import */


      var _geometry_support_jsonUtils_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ../../../geometry/support/jsonUtils.js */
      "qatw");
      /* harmony import */


      var _CurveHelper_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ../CurveHelper.js */
      "/vtc");
      /* harmony import */


      var _GeometryWalker_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ../GeometryWalker.js */
      "DAsI");
      /*
      All material copyright ESRI, All Rights Reserved, unless otherwise specified.
      See https://js.arcgis.com/4.18/esri/copyright.txt for details.
      */


      var n = /*#__PURE__*/function () {
        function n() {
          _classCallCheck(this, n);
        }

        _createClass(n, [{
          key: "execute",
          value: function execute(t, e, i) {
            return new r(t, e, i);
          }
        }], [{
          key: "local",
          value: function local() {
            return null === n.instance && (n.instance = new n()), n.instance;
          }
        }]);

        return n;
      }();

      n.instance = null;

      var r = /*#__PURE__*/function () {
        function r(t, e, i) {
          _classCallCheck(this, r);

          this._inputGeometries = t, this._height = (void 0 !== e.amplitude ? e.amplitude : 2) * i, this._period = (void 0 !== e.period ? e.period : 3) * i, this._style = e.waveform, this._height <= 0 && (this._height = Math.abs(this._height)), this._period <= 0 && (this._period = Math.abs(this._period)), this._pattern = new _GeometryWalker_js__WEBPACK_IMPORTED_MODULE_2__["DashPattern"](), this._pattern.addValue(this._period), this._pattern.addValue(this._period), this._walker = new _GeometryWalker_js__WEBPACK_IMPORTED_MODULE_2__["GeometryWalker"](), this._walker.updateTolerance(i);
        }

        _createClass(r, [{
          key: "next",
          value: function next() {
            var i = this._inputGeometries.next();

            for (; i;) {
              if (0 === this._height || 0 === this._period) return i;

              if (Object(_geometry_support_jsonUtils_js__WEBPACK_IMPORTED_MODULE_0__["isPolyline"])(i)) {
                var t = this._processGeom(i.paths);

                if (t.length) return {
                  paths: t
                };
              }

              if (Object(_geometry_support_jsonUtils_js__WEBPACK_IMPORTED_MODULE_0__["isPolygon"])(i)) {
                var _t4 = this._processGeom(i.rings);

                if (_t4.length) return {
                  rings: _t4
                };
              }

              i = this._inputGeometries.next();
            }

            return null;
          }
        }, {
          key: "_processGeom",
          value: function _processGeom(t) {
            var e = [];

            var _iterator = _createForOfIteratorHelper(t),
                _step;

            try {
              for (_iterator.s(); !(_step = _iterator.n()).done;) {
                var i = _step.value;
                if (this._walker.init(i, this._pattern)) switch (this._style) {
                  case "Sinus":
                  default:
                    e.push(this._constructCurve(i, !1));
                    break;

                  case "Square":
                    e.push(this._constructSquare(i));
                    break;

                  case "Triangle":
                    e.push(this._constructTriangle(i));
                    break;

                  case "Random":
                    e.push(this._constructCurve(i, !0));
                } else e.push(i);
              }
            } catch (err) {
              _iterator.e(err);
            } finally {
              _iterator.f();
            }

            return e;
          }
        }, {
          key: "_constructCurve",
          value: function _constructCurve(t, e) {
            var s = new _CurveHelper_js__WEBPACK_IMPORTED_MODULE_1__["PathHelper"](),
                h = this._walker.calculatePathLength(t);

            var n = Math.round(h / this._period);
            0 === n && (n = 1);

            var _r5 = 16 * n + 1,
                a = h / n,
                o = this._period / 16,
                l = 1 / _r5,
                _ = 2 * Math.PI * h / a,
                c = 2 * Math.PI * Math.random(),
                p = 2 * Math.PI * Math.random(),
                u = 2 * Math.PI * Math.random(),
                d = .75 - Math.random() / 2,
                g = .75 - Math.random() / 2,
                w = {};

            this._walker.curPointAndAngle(w), s.startPath(w.pt);
            var k = 0;

            for (;;) {
              if (!this._walker.nextPointAndAngle(o, w)) {
                s.lineTo(t[t.length - 1]);
                break;
              }

              {
                var _t5 = k;
                var i = void 0;

                if (k += l, e) {
                  var _e5 = this._height / 2 * (1 + .3 * Math.sin(d * _ * _t5 + c));

                  i = _e5 * Math.sin(_ * _t5 + p), i += _e5 * Math.sin(g * _ * _t5 + u), i /= 2;
                } else i = .5 * this._height * Math.sin(.5 * _ * _t5);

                s.lineTo([w.pt[0] - i * w.sa, w.pt[1] + i * w.ca]);
              }
            }

            return s.path();
          }
        }, {
          key: "_constructSquare",
          value: function _constructSquare(t) {
            var e = new _CurveHelper_js__WEBPACK_IMPORTED_MODULE_1__["PathHelper"](),
                s = this._walker.calculatePathLength(t);

            var h = Math.round(s / this._period);
            0 === h && (h = 1);
            var n = !0;

            for (;;) {
              var _t6 = !1;

              if (this._walker.curPositionIsValid()) {
                var i = {};

                this._walker.curPointAndAngle(i);

                var _s32 = {};

                if (this._walker.nextPointAndAngle(this._period, _s32)) {
                  var _h6 = {};
                  this._walker.nextPointAndAngle(this._period, _h6) && (n ? (e.startPath(i.pt), n = !1) : e.lineTo(i.pt), e.lineTo([i.pt[0] - this._height / 2 * i.sa, i.pt[1] + this._height / 2 * i.ca]), e.lineTo([_s32.pt[0] - this._height / 2 * _s32.sa, _s32.pt[1] + this._height / 2 * _s32.ca]), e.lineTo([_s32.pt[0] + this._height / 2 * _s32.sa, _s32.pt[1] - this._height / 2 * _s32.ca]), e.lineTo([_h6.pt[0] + this._height / 2 * _h6.sa, _h6.pt[1] - this._height / 2 * _h6.ca]), _t6 = !0);
                }
              }

              if (!_t6) {
                e.lineTo(this._walker.getPathEnd());
                break;
              }
            }

            return e.path();
          }
        }, {
          key: "_constructTriangle",
          value: function _constructTriangle(t) {
            var e = new _CurveHelper_js__WEBPACK_IMPORTED_MODULE_1__["PathHelper"](),
                s = this._walker.calculatePathLength(t);

            var h = Math.round(s / this._period);
            0 === h && (h = 1);
            var n = !0;

            for (;;) {
              var _t7 = !1;

              if (this._walker.curPositionIsValid()) {
                var i = {};

                this._walker.curPointAndAngle(i);

                var _s33 = {};

                if (this._walker.nextPointAndAngle(this._period / 2, _s33)) {
                  var _h7 = {};
                  this._walker.nextPointAndAngle(this._period, _h7) && (this._walker.nextPosition(this._period / 2) && (n ? (e.startPath(i.pt), n = !1) : e.lineTo(i.pt), e.lineTo([_s33.pt[0] - this._height / 2 * _s33.sa, _s33.pt[1] + this._height / 2 * _s33.ca]), e.lineTo([_h7.pt[0] + this._height / 2 * _h7.sa, _h7.pt[1] - this._height / 2 * _h7.ca])), _t7 = !0);
                }
              }

              if (!_t7) {
                e.lineTo(this._walker.getPathEnd());
                break;
              }
            }

            return e.path();
          }
        }]);

        return r;
      }();
      /***/

    },

    /***/
    "8YkW":
    /*!**********************************************************************!*\
      !*** ./node_modules/@arcgis/core/symbols/cim/effects/EffectDonut.js ***!
      \**********************************************************************/

    /*! exports provided: EffectDonut */

    /***/
    function YkW(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "EffectDonut", function () {
        return h;
      });
      /* harmony import */


      var _geometry_support_jsonUtils_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ../../../geometry/support/jsonUtils.js */
      "qatw");
      /* harmony import */


      var _CurveHelper_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ../CurveHelper.js */
      "/vtc");
      /*
      All material copyright ESRI, All Rights Reserved, unless otherwise specified.
      See https://js.arcgis.com/4.18/esri/copyright.txt for details.
      */


      var h = /*#__PURE__*/function () {
        function h() {
          _classCallCheck(this, h);
        }

        _createClass(h, [{
          key: "execute",
          value: function execute(t, i, e) {
            return new n(t, i, e);
          }
        }], [{
          key: "local",
          value: function local() {
            return null === h.instance && (h.instance = new h()), h.instance;
          }
        }]);

        return h;
      }();

      h.instance = null;

      var n = /*#__PURE__*/function () {
        function n(t, i, h) {
          _classCallCheck(this, n);

          switch (this._inputGeometries = t, this._curveHelper = new _CurveHelper_js__WEBPACK_IMPORTED_MODULE_1__["CurveHelper"](), this._width = (void 0 !== i.width ? i.width : 2) * h, i.method) {
            case "Mitered":
            default:
              this._method = "Mitered";
              break;

            case "Bevelled":
              this._method = "Bevelled";
              break;

            case "Rounded":
            case "TrueBuffer":
              this._method = "Rounded";
              break;

            case "Square":
              this._method = "Square";
          }

          this._option = i.option, this._offsetFlattenError = _CurveHelper_js__WEBPACK_IMPORTED_MODULE_1__["PIXEL_TOLERANCE"] * h, this._option;
        }

        _createClass(n, [{
          key: "next",
          value: function next() {
            var e = this._inputGeometries.next();

            for (; e;) {
              if (Object(_geometry_support_jsonUtils_js__WEBPACK_IMPORTED_MODULE_0__["isExtent"])(e) && this._width > 0) {
                if (Math.min(e.xmax - e.xmin, e.ymax - e.ymin) - 2 * this._width < 0) return e;
                var t = [];
                return t.push([[e.xmin, e.ymin], [e.xmin, e.ymax], [e.xmax, e.ymax], [e.xmax, e.ymin], [e.xmin, e.ymin]]), t.push([[e.xmin + this._width, e.ymin + this._width], [e.xmax - this._width, e.ymin + this._width], [e.xmax - this._width, e.ymax - this._width], [e.xmin + this._width, e.ymax - this._width], [e.xmin + this._width, e.ymin + this._width]]), {
                  rings: t
                };
              }

              if (Object(_geometry_support_jsonUtils_js__WEBPACK_IMPORTED_MODULE_0__["isPolygon"])(e) && this._width > 0) {
                var _t8 = [];

                var _iterator2 = _createForOfIteratorHelper(e.rings),
                    _step2;

                try {
                  for (_iterator2.s(); !(_step2 = _iterator2.n()).done;) {
                    var i = _step2.value;

                    var _e6 = this._curveHelper.calculatePathLength(i),
                        s = this._curveHelper.offset(i, this._width, this._method, 4, this._offsetFlattenError);

                    s && (_e6 < 0 && s.reverse(), _t8.push(s));
                  }
                } catch (err) {
                  _iterator2.e(err);
                } finally {
                  _iterator2.f();
                }

                if (_t8.length) return {
                  rings: _t8
                };
              }

              e = this._inputGeometries.next();
            }

            return null;
          }
        }]);

        return n;
      }();
      /***/

    },

    /***/
    "CUuX":
    /*!*****************************************************************************!*\
      !*** ./node_modules/@arcgis/core/symbols/cim/placements/PlacementOnLine.js ***!
      \*****************************************************************************/

    /*! exports provided: PlacementOnLine */

    /***/
    function CUuX(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "PlacementOnLine", function () {
        return s;
      });
      /* harmony import */


      var _CIMCursor_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ../CIMCursor.js */
      "tqcG");
      /* harmony import */


      var _CurveHelper_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ../CurveHelper.js */
      "/vtc");
      /*
      All material copyright ESRI, All Rights Reserved, unless otherwise specified.
      See https://js.arcgis.com/4.18/esri/copyright.txt for details.
      */


      var s = /*#__PURE__*/function () {
        function s() {
          _classCallCheck(this, s);
        }

        _createClass(s, [{
          key: "execute",
          value: function execute(e, t, n) {
            return new r(e, t, n);
          }
        }], [{
          key: "local",
          value: function local() {
            return null === s.instance && (s.instance = new s()), s.instance;
          }
        }]);

        return s;
      }();

      s.instance = null;

      var r = /*#__PURE__*/function (_CIMCursor_js__WEBPAC3) {
        _inherits(r, _CIMCursor_js__WEBPAC3);

        var _super4 = _createSuper(r);

        function r(e, t, n) {
          var _this3;

          _classCallCheck(this, r);

          _this3 = _super4.call(this, e, !0, !0), _this3._curveHelper = new _CurveHelper_js__WEBPACK_IMPORTED_MODULE_1__["CurveHelper"](), _this3._angleToLine = void 0 === t.angleToLine || t.angleToLine, _this3._offset = void 0 !== t.offset ? t.offset * n : 0, _this3._relativeTo = t.relativeTo, _this3._position = void 0 !== t.startPointOffset ? t.startPointOffset * n : 0, _this3._epsilon = .001 * n;
          return _this3;
        }

        _createClass(r, [{
          key: "processPath",
          value: function processPath(e) {
            var i = this._position;

            if ("SegmentMidpoint" === this._relativeTo) {
              for (this.iteratePath || (this._segmentCount = e.length, this._curSegment = 1, this.iteratePath = !0); this._curSegment < this._segmentCount;) {
                var n = this._curSegment;
                this._curSegment++;

                var _i4 = e[n - 1],
                    _s34 = e[n],
                    _r9 = this._curveHelper.calculateLength(_i4, _s34);

                if (_r9 < this._epsilon) continue;

                var _l4 = .5 + this._position / _r9,
                    _this$_curveHelper$ge3 = this._curveHelper.getAngleCS(_i4, _s34, _l4),
                    _this$_curveHelper$ge4 = _slicedToArray(_this$_curveHelper$ge3, 2),
                    a = _this$_curveHelper$ge4[0],
                    o = _this$_curveHelper$ge4[1],
                    h = Object(_CIMCursor_js__WEBPACK_IMPORTED_MODULE_0__["getCoord2D"])(_i4, _s34, _l4);

                return this.internalPlacement.setTranslate(h[0] - this._offset * o, h[1] + this._offset * a), this._angleToLine && this.internalPlacement.setRotateCS(a, o), this.internalPlacement;
              }

              return this.iteratePath = !1, null;
            }

            "LineEnd" === this._relativeTo && Object(_CIMCursor_js__WEBPACK_IMPORTED_MODULE_0__["reversePath"])(e);
            var s = this.onLine(e, i);
            return "LineEnd" === this._relativeTo && Object(_CIMCursor_js__WEBPACK_IMPORTED_MODULE_0__["reversePath"])(e), s;
          }
        }, {
          key: "onLine",
          value: function onLine(e, n) {
            var i,
                s = !1;

            switch (this._relativeTo) {
              case "LineMiddle":
              default:
                i = this._curveHelper.calculatePathLength(e) / 2 + n;
                break;

              case "LineBeginning":
                i = n;
                break;

              case "LineEnd":
                i = n, s = !0;
            }

            var _r7 = e.length;
            var l,
                a = 0,
                o = e[0];

            for (var _n9 = 1; _n9 < _r7; ++_n9) {
              l = o, o = e[_n9];

              var _r10 = this._curveHelper.calculateLength(l, o);

              if (a + _r10 > i) {
                var _e7 = (i - a) / _r10,
                    _this$_curveHelper$ge5 = this._curveHelper.getAngleCS(l, o, _e7),
                    _this$_curveHelper$ge6 = _slicedToArray(_this$_curveHelper$ge5, 2),
                    _n10 = _this$_curveHelper$ge6[0],
                    h = _this$_curveHelper$ge6[1],
                    c = Object(_CIMCursor_js__WEBPACK_IMPORTED_MODULE_0__["getCoord2D"])(l, o, _e7),
                    u = s ? this._offset : -this._offset;

                return this.internalPlacement.setTranslate(c[0] - u * h, c[1] + u * _n10), this._angleToLine && (s ? this.internalPlacement.setRotateCS(-_n10, -h) : this.internalPlacement.setRotateCS(_n10, h)), this.internalPlacement;
              }

              a += _r10;
            }

            return null;
          }
        }]);

        return r;
      }(_CIMCursor_js__WEBPACK_IMPORTED_MODULE_0__["PathTransformationCursor"]);
      /***/

    },

    /***/
    "DAsI":
    /*!*****************************************************************!*\
      !*** ./node_modules/@arcgis/core/symbols/cim/GeometryWalker.js ***!
      \*****************************************************************/

    /*! exports provided: DashPattern, GeometryWalker */

    /***/
    function DAsI(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "DashPattern", function () {
        return i;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "GeometryWalker", function () {
        return h;
      });
      /* harmony import */


      var _CIMCursor_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ./CIMCursor.js */
      "tqcG");
      /* harmony import */


      var _CurveHelper_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./CurveHelper.js */
      "/vtc");
      /*
      All material copyright ESRI, All Rights Reserved, unless otherwise specified.
      See https://js.arcgis.com/4.18/esri/copyright.txt for details.
      */


      var i = /*#__PURE__*/function () {
        function i() {
          _classCallCheck(this, i);

          this._values = [], this.extPtGap = 0, this.ctrlPtGap = 0, this._length = 0, this._currentValue = 0;
        }

        _createClass(i, [{
          key: "isEmpty",
          value: function isEmpty() {
            return 0 === this._values.length;
          }
        }, {
          key: "size",
          value: function size() {
            return this._values.length;
          }
        }, {
          key: "init",
          value: function init(t, s) {
            var e = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : !0;
            if (this._setEmpty(), !t || 0 === t.length) return !1;

            for (var _s35 = 0; _s35 < t.length; _s35++) {
              var _i6 = Math.abs(t[_s35]);

              e && _i6 < 1e-7 && (_i6 = 1e-7), this._values.push(_i6), this._length += _i6;
            }

            return s && 1 & t.length && (this._length *= 2), 0 !== this._length && (this.ctrlPtGap = this.extPtGap = 0, this._currentValue = -1, !0);
          }
        }, {
          key: "scale",
          value: function scale(t) {
            var s = this._values ? this._values.length : 0;

            for (var e = 0; e < s; ++e) {
              this._values[e] *= t;
            }

            this._length *= t, this.extPtGap *= t, this.ctrlPtGap *= t;
          }
        }, {
          key: "addValue",
          value: function addValue(t) {
            this._length += t, this._values.push(t);
          }
        }, {
          key: "firstValue",
          value: function firstValue() {
            return this._values[0];
          }
        }, {
          key: "lastValue",
          value: function lastValue() {
            return this._values[this._values.length - 1];
          }
        }, {
          key: "nextValue",
          value: function nextValue() {
            return this._currentValue++, this._currentValue === this._values.length && (this._currentValue = 0), this._values[this._currentValue];
          }
        }, {
          key: "reset",
          value: function reset() {
            this._currentValue = -1;
          }
        }, {
          key: "length",
          value: function length() {
            return this._length;
          }
        }, {
          key: "_setEmpty",
          value: function _setEmpty() {
            this.extPtGap = this.ctrlPtGap = this._length = 0, this._currentValue = -1, this._values.length = 0;
          }
        }]);

        return i;
      }();

      var n = /*#__PURE__*/function () {
        function n() {
          _classCallCheck(this, n);

          this.reset();
        }

        _createClass(n, [{
          key: "reset",
          value: function reset() {
            this.segment = -1, this.segmentLength = 0, this.abscissa = 0, this.isPathEnd = !1, this.isPartEnd = !1;
          }
        }, {
          key: "isValid",
          value: function isValid() {
            return -1 !== this.segment;
          }
        }, {
          key: "copyTo",
          value: function copyTo(t) {
            t.segment = this.segment, t.segmentLength = this.segmentLength, t.abscissa = this.abscissa, t.isPathEnd = this.isPathEnd, t.isPartEnd = this.isPartEnd;
          }
        }]);

        return n;
      }();

      var h = /*#__PURE__*/function (_CurveHelper_js__WEBP) {
        _inherits(h, _CurveHelper_js__WEBP);

        var _super5 = _createSuper(h);

        function h() {
          var _this4;

          var t = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 0;
          var s = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : !1;

          _classCallCheck(this, h);

          _this4 = _super5.call(this, t, s), _this4._tolerance = _CurveHelper_js__WEBPACK_IMPORTED_MODULE_1__["PIXEL_TOLERANCE"], _this4._currentPosition = new n();
          return _this4;
        }

        _createClass(h, [{
          key: "updateTolerance",
          value: function updateTolerance(t) {
            this._tolerance = _CurveHelper_js__WEBPACK_IMPORTED_MODULE_1__["PIXEL_TOLERANCE"] * t;
          }
        }, {
          key: "init",
          value: function init(t, s) {
            var e = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : !0;
            return e ? (this._patternLength = s.length(), this._partExtPtGap = s.extPtGap, this._partCtrlPtGap = s.ctrlPtGap) : (this._patternLength = 0, this._partExtPtGap = 0, this._partCtrlPtGap = 0), this._currentPosition.reset(), this._partSegCount = 0, this._path = t, this._seg = -1, this.setPosAtNextPart();
          }
        }, {
          key: "curPositionIsValid",
          value: function curPositionIsValid() {
            return this._currentPosition.isValid();
          }
        }, {
          key: "nextPosition",
          value: function nextPosition(t) {
            var s = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;
            var e = new n();
            return !!this._nextPosition(t, e, null, s) && (e.copyTo(this._currentPosition), !0);
          }
        }, {
          key: "curPointAndAngle",
          value: function curPointAndAngle(t) {
            t.pt = this._getPoint(this._currentPosition);

            var _this$_getAngle = this._getAngle(this._currentPosition),
                _this$_getAngle2 = _slicedToArray(_this$_getAngle, 2),
                s = _this$_getAngle2[0],
                e = _this$_getAngle2[1];

            t.ca = s, t.sa = e;
          }
        }, {
          key: "nextPointAndAngle",
          value: function nextPointAndAngle(t, s) {
            var e = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 0;
            var i = new n();
            if (!this._nextPosition(t, i, null, e)) return !1;
            i.copyTo(this._currentPosition), s.pt = this._getPoint(i);

            var _this$_getAngle3 = this._getAngle(i),
                _this$_getAngle4 = _slicedToArray(_this$_getAngle3, 2),
                _h8 = _this$_getAngle4[0],
                r = _this$_getAngle4[1];

            return s.ca = _h8, s.sa = r, !0;
          }
        }, {
          key: "nextCurve",
          value: function nextCurve(t) {
            if (0 === t) return null;
            var s = [],
                e = new n();
            return this._nextPosition(t, e, s, 1) ? (e.copyTo(this._currentPosition), s) : null;
          }
        }, {
          key: "isPathEnd",
          value: function isPathEnd() {
            return this._currentPosition.isPathEnd;
          }
        }, {
          key: "getPathEnd",
          value: function getPathEnd() {
            if (-1 === this._currentPosition.segment) throw new Error("missing segment");
            return this._path[this._currentPosition.segment + 1];
          }
        }, {
          key: "_nextPosition",
          value: function _nextPosition(t, s, e, i) {
            if (this._currentPosition.isPathEnd) return !1;
            var n = this._currentPosition.abscissa;

            for (this._currentPosition.segmentLength > 0 && (n /= this._currentPosition.segmentLength), this._currentPosition.copyTo(s); s.abscissa + t * this._partLengthRatio > s.segmentLength + this._tolerance;) {
              if (e) {
                if (0 === e.length) if (0 === n) {
                  var _t10 = this._path[s.segment];
                  e.push([_t10[0], _t10[1]]);
                } else e.push(this.getSegCoord2D(this._path, s.segment, n));
                var _t9 = this._path[s.segment + 1];
                e.push([_t9[0], _t9[1]]);
              }

              if (n = 0, t -= (s.segmentLength - s.abscissa) / this._partLengthRatio, this._partSegCount) s.segment = this.nextSegment(), s.segmentLength = this.calculateSegLength(this._path, s.segment), s.abscissa = 0, this._partSegCount--;else {
                if (!this.setPosAtNextPart()) return 0 !== i && (s.segmentLength = this.calculateSegLength(this._path, s.segment), s.isPartEnd = !0, 1 === i ? (s.abscissa = s.segmentLength, s.isPathEnd = !0) : s.abscissa = s.segmentLength + t, !0);

                this._currentPosition.copyTo(s);
              }
            }

            if (s.abscissa += t * this._partLengthRatio, e) {
              if (0 === e.length) if (0 === n) {
                var _t12 = this._path[s.segment];
                e.push([_t12[0], _t12[1]]);
              } else e.push(this.getSegCoord2D(this._path, s.segment, n));

              var _t11 = s.abscissa / s.segmentLength;

              if (1 === _t11) {
                var _t13 = this._path[s.segment + 1];
                e.push([_t13[0], _t13[1]]);
              } else e.push(this.getSegCoord2D(this._path, s.segment, _t11));
            }

            return this._partSegCount || Math.abs(s.abscissa - s.segmentLength) < this._tolerance && (s.isPathEnd = this._partIsLast, s.isPartEnd = !0), !0;
          }
        }, {
          key: "_getPoint",
          value: function _getPoint(t) {
            if (-1 === t.segment) throw new Error("missing segment");
            var s = t.segmentLength <= 0 ? 0 : t.abscissa / t.segmentLength;
            return this.getSegCoord2D(this._path, t.segment, s);
          }
        }, {
          key: "_getAngle",
          value: function _getAngle(t) {
            if (-1 === t.segment) throw new Error("missing segment");
            var s = t.segmentLength <= 0 ? 0 : t.abscissa / t.segmentLength;
            return this.getSegAngleCS(this._path, t.segment, s);
          }
        }, {
          key: "setPosAtNextPart",
          value: function setPosAtNextPart() {
            for (; this._partSegCount;) {
              this.hasNextSegment() && this.nextSegment(), this._partSegCount--;
            }

            if (!this.hasNextSegment()) return !1;

            for (this._partLength = 0, this._partIsLast = !0, this._partSegCount = 0; this.hasNextSegment();) {
              if (this._partLength += this.calculateSegLength(this._path, this.nextSegment()), this._partSegCount++, 1 === Object(_CIMCursor_js__WEBPACK_IMPORTED_MODULE_0__["getId"])(this._path[this.getEndPointIndex()])) {
                this._partIsLast = !this.hasNextSegment();
                break;
              }
            }

            var s = this._partSegCount;

            for (; s;) {
              this.previousSegment(), --s;
            }

            this._currentPosition.segment = this.nextSegment(), this._currentPosition.segmentLength = this.calculateSegLength(this._path, this._currentPosition.segment), this._currentPosition.abscissa = 0, this._currentPosition.isPathEnd = this._currentPosition.isPartEnd = !1, --this._partSegCount;
            var e = this.getStartPointIndex();
            this._ctrlPtBegin = 1 === Object(_CIMCursor_js__WEBPACK_IMPORTED_MODULE_0__["getId"])(this._path[e]);
            var i = e + this._partSegCount + 1;

            if (i >= this._path.length && (i = 0), this._ctrlPtEnd = 1 === Object(_CIMCursor_js__WEBPACK_IMPORTED_MODULE_0__["getId"])(this._path[i]), this._patternLength > 0) {
              var t = this._ctrlPtBegin ? this._partCtrlPtGap : this._partExtPtGap,
                  _s36 = this._ctrlPtEnd ? this._partCtrlPtGap : this._partExtPtGap;

              var _e8 = Math.round((this._partLength - (t + _s36)) / this._patternLength);

              _e8 <= 0 && (_e8 = t + _s36 > 0 ? 0 : 1), this._partLengthRatio = this._partLength / (t + _s36 + _e8 * this._patternLength), this._partLengthRatio < .01 && (this._partLengthRatio = 1);
            } else this._partLengthRatio = 1;

            return !0;
          }
        }, {
          key: "hasNextSegment",
          value: function hasNextSegment() {
            return this._seg < this._path.length - 2;
          }
        }, {
          key: "previousSegment",
          value: function previousSegment() {
            return --this._seg;
          }
        }, {
          key: "nextSegment",
          value: function nextSegment() {
            return ++this._seg;
          }
        }, {
          key: "getStartPointIndex",
          value: function getStartPointIndex() {
            return this._seg;
          }
        }, {
          key: "getEndPointIndex",
          value: function getEndPointIndex() {
            return this._seg + 1;
          }
        }]);

        return h;
      }(_CurveHelper_js__WEBPACK_IMPORTED_MODULE_1__["CurveHelper"]);
      /***/

    },

    /***/
    "Du6U":
    /*!*******************************************************!*\
      !*** ./node_modules/@arcgis/core/symbols/cim/Rect.js ***!
      \*******************************************************/

    /*! exports provided: default */

    /***/
    function Du6U(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /*
      All material copyright ESRI, All Rights Reserved, unless otherwise specified.
      See https://js.arcgis.com/4.18/esri/copyright.txt for details.
      */

      /* harmony default export */


      __webpack_exports__["default"] = /*#__PURE__*/function () {
        function _class() {
          var t = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 0;
          var h = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;
          var i = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 0;
          var s = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : 0;

          _classCallCheck(this, _class);

          this.x = t, this.y = h, this.width = i, this.height = s;
        }

        _createClass(_class, [{
          key: "isEmpty",
          get: function get() {
            return this.width <= 0 || this.height <= 0;
          }
        }, {
          key: "union",
          value: function union(t) {
            this.x = Math.min(this.x, t.x), this.y = Math.min(this.y, t.y), this.width = Math.max(this.width, t.width), this.height = Math.max(this.height, t.height);
          }
        }]);

        return _class;
      }();
      /***/

    },

    /***/
    "E/5U":
    /*!**********************************************************************!*\
      !*** ./node_modules/@arcgis/core/symbols/cim/effects/EffectArrow.js ***!
      \**********************************************************************/

    /*! exports provided: EffectArrow */

    /***/
    function E5U(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "EffectArrow", function () {
        return i;
      });
      /* harmony import */


      var _CIMCursor_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ../CIMCursor.js */
      "tqcG");
      /* harmony import */


      var _CurveHelper_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ../CurveHelper.js */
      "/vtc");
      /*
      All material copyright ESRI, All Rights Reserved, unless otherwise specified.
      See https://js.arcgis.com/4.18/esri/copyright.txt for details.
      */


      var s = 1.7320508075688772;

      var i = /*#__PURE__*/function () {
        function i() {
          _classCallCheck(this, i);
        }

        _createClass(i, [{
          key: "execute",
          value: function execute(t, e, r) {
            return new l(t, e, r);
          }
        }], [{
          key: "local",
          value: function local() {
            return null === i.instance && (i.instance = new i()), i.instance;
          }
        }]);

        return i;
      }();

      i.instance = null;

      var l = /*#__PURE__*/function (_CIMCursor_js__WEBPAC4) {
        _inherits(l, _CIMCursor_js__WEBPAC4);

        var _super6 = _createSuper(l);

        function l(t, e, o) {
          var _this5;

          _classCallCheck(this, l);

          _this5 = _super6.call(this, t, !1, !0), _this5._curveHelper = new _CurveHelper_js__WEBPACK_IMPORTED_MODULE_1__["CurveHelper"](), _this5._width = (void 0 !== e.width ? e.width : 5) * o, _this5._arrowType = void 0 !== e.geometricEffectArrowType ? e.geometricEffectArrowType : "OpenEnded", _this5._offsetFlattenError = _CurveHelper_js__WEBPACK_IMPORTED_MODULE_1__["PIXEL_TOLERANCE"] * o;
          return _this5;
        }

        _createClass(l, [{
          key: "processPath",
          value: function processPath(t) {
            switch (this._arrowType) {
              case "OpenEnded":
              default:
                return this._constructSimpleArrow(t, !0);

              case "Block":
                return this._constructSimpleArrow(t, !1);

              case "Crossed":
                return this._constructCrossedArrow(t);
            }
          }
        }, {
          key: "_constructSimpleArrow",
          value: function _constructSimpleArrow(t, e) {
            var r = this._curveHelper.calculatePathLength(t);

            var n = this._width;
            r < 2 * n && (n = r / 2);

            var s = this._curveHelper.getSubCurve(t, 0, r - n);

            if (!s) return null;
            var i = n / 2;
            if (this._curveHelper.isEmpty(s, !1)) return null;

            var _l5 = this._constructOffset(s, -i);

            if (!_l5) return null;

            var c = this._constructOffset(s, i);

            if (!c) return null;

            var u = this._constructArrowBasePoint(_l5, -i / 2);

            if (!u) return null;

            var h = this._constructArrowBasePoint(c, i / 2);

            if (!h) return null;
            var a = t[t.length - 1];
            e || (this._makeControlPoint(c, !0), this._makeControlPoint(_l5, !0));

            var _ = new _CurveHelper_js__WEBPACK_IMPORTED_MODULE_1__["PathHelper"]();

            return _.addPath(c, !0), _.lineTo(h), this._makeControlPoint(_.path()), _.lineTo(a), this._makeControlPoint(_.path()), _.lineTo(u), this._makeControlPoint(_.path()), _.addPath(_l5, !1), e ? {
              paths: [_.path()]
            } : (_.close(), {
              rings: [_.path()]
            });
          }
        }, {
          key: "_constructCrossedArrow",
          value: function _constructCrossedArrow(t) {
            var e = this._curveHelper.calculatePathLength(t);

            var r = this._width;
            e < r * (1 + s + 1) && (r = e / (1 + s + 1));

            var n = this._curveHelper.getSubCurve(t, 0, e - r * (1 + s));

            if (!n) return null;
            var i = r / 2;
            if (this._curveHelper.isEmpty(n, !1)) return null;

            var _l6 = this._constructOffset(n, i);

            if (!_l6) return null;

            var c = this._constructOffset(n, -i);

            if (!c) return null;

            var u = this._curveHelper.getSubCurve(t, 0, e - r);

            if (!u) return null;
            if (this._curveHelper.isEmpty(u, !1)) return null;

            var h = this._constructOffset(u, i);

            if (!h) return null;

            var a = this._constructOffset(u, -i);

            if (!a) return null;

            var _ = h[h.length - 1],
                f = this._constructArrowBasePoint(h, i / 2);

            if (!f) return null;

            var p = a[a.length - 1],
                d = this._constructArrowBasePoint(a, -i / 2);

            if (!d) return null;
            var m = t[t.length - 1];
            this._makeControlPoint(_l6, !1), this._makeControlPoint(c, !1);
            var w = new _CurveHelper_js__WEBPACK_IMPORTED_MODULE_1__["PathHelper"]();
            return w.addPath(_l6, !0), this._makeControlPoint(w.path()), w.lineTo(p), w.lineTo(d), this._makeControlPoint(w.path()), w.lineTo(m), this._makeControlPoint(w.path()), w.lineTo(f), this._makeControlPoint(w.path()), w.lineTo(_), this._makeControlPoint(w.path()), w.addPath(c, !1), {
              paths: [w.path()]
            };
          }
        }, {
          key: "_constructOffset",
          value: function _constructOffset(t, e) {
            return this._curveHelper.offset(t, e, "Rounded", 4, this._offsetFlattenError);
          }
        }, {
          key: "_constructArrowBasePoint",
          value: function _constructArrowBasePoint(t, e) {
            if (!t || t.length < 2) return null;
            var r = t[t.length - 2],
                n = t[t.length - 1],
                o = [n[0] - r[0], n[1] - r[1]];
            return this._curveHelper.normalize(o), [n[0] + o[1] * e, n[1] - o[0] * e];
          }
        }, {
          key: "_makeControlPoint",
          value: function _makeControlPoint(t) {
            var r = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : !1;
            Object(_CIMCursor_js__WEBPACK_IMPORTED_MODULE_0__["setId"])(r ? t[0] : t[t.length - 1], 1);
          }
        }]);

        return l;
      }(_CIMCursor_js__WEBPACK_IMPORTED_MODULE_0__["PathGeometryCursor"]);
      /***/

    },

    /***/
    "G0q+":
    /*!****************************************************************************************!*\
      !*** ./node_modules/@arcgis/core/views/2d/engine/webgl/mesh/templates/shapingUtils.js ***!
      \****************************************************************************************/

    /*! exports provided: ShapedGlyph, ShapingInfo, shapeGlyphs */

    /***/
    function G0q(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ShapedGlyph", function () {
        return u;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ShapingInfo", function () {
        return p;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "shapeGlyphs", function () {
        return T;
      });
      /* harmony import */


      var _chunks_vec2_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ../../../../../../chunks/vec2.js */
      "M0lq");
      /* harmony import */


      var _chunks_mat2d_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ../../../../../../chunks/mat2d.js */
      "opr1");
      /* harmony import */


      var _chunks_mat2df32_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ../../../../../../chunks/mat2df32.js */
      "LGNZ");
      /* harmony import */


      var _chunks_vec2f32_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ../../../../../../chunks/vec2f32.js */
      "c46T");
      /* harmony import */


      var _alignmentUtils_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ../../alignmentUtils.js */
      "Mt1D");
      /* harmony import */


      var _number_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ../../number.js */
      "0RS7");
      /* harmony import */


      var _Rect_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ../../Rect.js */
      "qcDN");
      /* harmony import */


      var _collisions_BoundingBox_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! ../../collisions/BoundingBox.js */
      "e+Fw");
      /*
      All material copyright ESRI, All Rights Reserved, unless otherwise specified.
      See https://js.arcgis.com/4.18/esri/copyright.txt for details.
      */


      var g = Math.PI / 180;

      var u = /*#__PURE__*/function () {
        function u(t, s, e, i) {
          _classCallCheck(this, u);

          this._rotationT = Object(_chunks_mat2df32_js__WEBPACK_IMPORTED_MODULE_2__["c"])(), this._xBounds = 0, this._yBounds = 0, this.minZoom = 0, this.maxZoom = 255;
          var o = e.rect,
              h = new Float32Array(8);
          t *= i, s *= i;
          var n = e.code ? o.width * i : e.metrics.width,
              a = e.code ? o.height * i : e.metrics.height;
          h[0] = t, h[1] = s, h[2] = t + n, h[3] = s, h[4] = t, h[5] = s + a, h[6] = t + n, h[7] = s + a, this._data = h, this._setTextureCoords(o), this._scale = i, this._mosaic = e, this.x = t, this.y = s;
        }

        _createClass(u, [{
          key: "width",
          get: function get() {
            return this._mosaic.metrics.width * this._scale;
          }
        }, {
          key: "mosaic",
          get: function get() {
            return this._mosaic;
          }
        }, {
          key: "angle",
          get: function get() {
            return this._angle;
          },
          set: function set(t) {
            this._angle = t, Object(_chunks_mat2d_js__WEBPACK_IMPORTED_MODULE_1__["i"])(this._rotationT), Object(_chunks_mat2d_js__WEBPACK_IMPORTED_MODULE_1__["r"])(this._rotationT, this._rotationT, -t), this._setOffsets(this._data);
          }
        }, {
          key: "xTopLeft",
          get: function get() {
            return this._data[0];
          }
        }, {
          key: "yTopLeft",
          get: function get() {
            return this._data[1];
          }
        }, {
          key: "xBottomRight",
          get: function get() {
            return this._data[6];
          }
        }, {
          key: "yBottomRight",
          get: function get() {
            return this._data[7];
          }
        }, {
          key: "texcoords",
          get: function get() {
            return this._texcoords;
          }
        }, {
          key: "textureBinding",
          get: function get() {
            return this._mosaic.textureBinding;
          }
        }, {
          key: "offsets",
          get: function get() {
            return this._offsets || this._setOffsets(this._data), this._offsets;
          }
        }, {
          key: "char",
          get: function get() {
            return String.fromCharCode(this._mosaic.code);
          }
        }, {
          key: "code",
          get: function get() {
            return this._mosaic.code;
          }
        }, {
          key: "bounds",
          get: function get() {
            var _this$_mosaic$metrics = this._mosaic.metrics,
                t = _this$_mosaic$metrics.height,
                s = _this$_mosaic$metrics.width,
                e = s * this._scale,
                i = Math.abs(t) * this._scale,
                h = new Float32Array(8);

            h[0] = this.x, h[1] = this.y, h[2] = this.x + e, h[3] = this.y, h[4] = this.x, h[5] = this.y + i, h[6] = this.x + e, h[7] = this.y + i;
            var n = Object(_chunks_mat2d_js__WEBPACK_IMPORTED_MODULE_1__["m"])(Object(_chunks_mat2df32_js__WEBPACK_IMPORTED_MODULE_2__["c"])(), this._rotationT, this._T);
            Object(_chunks_mat2df32_js__WEBPACK_IMPORTED_MODULE_2__["t"])(h, h, n);
            var c = 1 / 0,
                d = 1 / 0,
                f = 0,
                l = 0;

            for (var _t14 = 0; _t14 < 4; _t14++) {
              var _s37 = h[2 * _t14],
                  _e9 = h[2 * _t14 + 1];
              c = Math.min(c, _s37), d = Math.min(d, _e9), f = Math.max(f, _s37), l = Math.max(l, _e9);
            }

            var g = f - c,
                _u = l - d;

            return new _collisions_BoundingBox_js__WEBPACK_IMPORTED_MODULE_7__["default"](c + g / 2, d + _u / 2, g, _u);
          }
        }, {
          key: "setTransform",
          value: function setTransform(t) {
            this._T = t, this._offsets = null;
          }
        }, {
          key: "_setOffsets",
          value: function _setOffsets(t) {
            this._offsets || (this._offsets = {
              upperLeft: 0,
              upperRight: 0,
              lowerLeft: 0,
              lowerRight: 0
            });
            var s = this._offsets,
                e = new Float32Array(8),
                i = Object(_chunks_mat2d_js__WEBPACK_IMPORTED_MODULE_1__["m"])(Object(_chunks_mat2df32_js__WEBPACK_IMPORTED_MODULE_2__["c"])(), this._rotationT, this._T);
            Object(_chunks_mat2df32_js__WEBPACK_IMPORTED_MODULE_2__["t"])(e, t, i), s.upperLeft = Object(_number_js__WEBPACK_IMPORTED_MODULE_5__["i1616to32"])(8 * e[0], 8 * e[1]), s.upperRight = Object(_number_js__WEBPACK_IMPORTED_MODULE_5__["i1616to32"])(8 * e[2], 8 * e[3]), s.lowerLeft = Object(_number_js__WEBPACK_IMPORTED_MODULE_5__["i1616to32"])(8 * e[4], 8 * e[5]), s.lowerRight = Object(_number_js__WEBPACK_IMPORTED_MODULE_5__["i1616to32"])(8 * e[6], 8 * e[7]);
          }
        }, {
          key: "_setTextureCoords",
          value: function _setTextureCoords(_ref) {
            var t = _ref.x,
                s = _ref.y,
                e = _ref.width,
                i = _ref.height;
            this._texcoords = {
              upperLeft: Object(_number_js__WEBPACK_IMPORTED_MODULE_5__["i1616to32"])(t, s),
              upperRight: Object(_number_js__WEBPACK_IMPORTED_MODULE_5__["i1616to32"])(t + e, s),
              lowerLeft: Object(_number_js__WEBPACK_IMPORTED_MODULE_5__["i1616to32"])(t, s + i),
              lowerRight: Object(_number_js__WEBPACK_IMPORTED_MODULE_5__["i1616to32"])(t + e, s + i)
            };
          }
        }]);

        return u;
      }();

      var _ = function _(t, s) {
        return {
          code: 0,
          page: 0,
          sdf: !0,
          rect: new _Rect_js__WEBPACK_IMPORTED_MODULE_6__["default"](0, 0, 11, 8),
          textureBinding: s,
          metrics: {
            advance: 0,
            height: 4,
            width: t,
            left: 0,
            top: 0
          }
        };
      };

      var p = /*#__PURE__*/function () {
        function p(t, s, e) {
          _classCallCheck(this, p);

          this._rotation = 0, this._decorate(t, s, e), this.glyphs = t, this.bounds = this._createBounds(t), this.isMultiline = s.length > 1, this._hasRotation = 0 !== e.angle, this._T = this._createGlyphTransform(this.bounds, e);

          var _iterator3 = _createForOfIteratorHelper(t),
              _step3;

          try {
            for (_iterator3.s(); !(_step3 = _iterator3.n()).done;) {
              var _s38 = _step3.value;

              _s38.setTransform(this._T);
            }
          } catch (err) {
            _iterator3.e(err);
          } finally {
            _iterator3.f();
          }
        }

        _createClass(p, [{
          key: "setRotation",
          value: function setRotation(t) {
            if (0 === t && 0 === this._rotation) return;
            this._rotation = t;
            var s = this._T,
                e = Object(_chunks_mat2d_js__WEBPACK_IMPORTED_MODULE_1__["b"])(Object(_chunks_mat2df32_js__WEBPACK_IMPORTED_MODULE_2__["c"])(), t);
            Object(_chunks_mat2d_js__WEBPACK_IMPORTED_MODULE_1__["m"])(s, e, s);

            var _iterator4 = _createForOfIteratorHelper(this.glyphs),
                _step4;

            try {
              for (_iterator4.s(); !(_step4 = _iterator4.n()).done;) {
                var _t15 = _step4.value;

                _t15.setTransform(this._T);
              }
            } catch (err) {
              _iterator4.e(err);
            } finally {
              _iterator4.f();
            }
          }
        }, {
          key: "_decorate",
          value: function _decorate(t, s, e) {
            if (!e.decoration || "none" === e.decoration || !t.length) return;
            var i = e.scale,
                o = "underline" === e.decoration ? 30 : 20,
                h = t[0].textureBinding;

            var _iterator5 = _createForOfIteratorHelper(s),
                _step5;

            try {
              for (_iterator5.s(); !(_step5 = _iterator5.n()).done;) {
                var _e10 = _step5.value;

                var _s39 = _e10.startX * i,
                    n = _e10.startY * i,
                    r = (_e10.width + _e10.glyphWidthEnd) * i;

                t.push(new u(_s39, n + o * i, _(r, h), 1));
              }
            } catch (err) {
              _iterator5.e(err);
            } finally {
              _iterator5.f();
            }
          }
        }, {
          key: "boundsT",
          get: function get() {
            var e = this.bounds,
                i = Object(_chunks_vec2_js__WEBPACK_IMPORTED_MODULE_0__["s"])(Object(_chunks_vec2f32_js__WEBPACK_IMPORTED_MODULE_3__["c"])(), e.x, e.y);

            if (Object(_chunks_vec2_js__WEBPACK_IMPORTED_MODULE_0__["t"])(i, i, this._T), this._hasRotation) {
              var t = Math.max(e.width, e.height);
              return new _collisions_BoundingBox_js__WEBPACK_IMPORTED_MODULE_7__["default"](i[0], i[1], t, t);
            }

            return new _collisions_BoundingBox_js__WEBPACK_IMPORTED_MODULE_7__["default"](i[0], i[1], e.width, e.height);
          }
        }, {
          key: "_createBounds",
          value: function _createBounds(t) {
            var s = 1 / 0,
                e = 1 / 0,
                i = 0,
                o = 0;

            var _iterator6 = _createForOfIteratorHelper(t),
                _step6;

            try {
              for (_iterator6.s(); !(_step6 = _iterator6.n()).done;) {
                var _h9 = _step6.value;
                s = Math.min(s, _h9.xTopLeft), e = Math.min(e, _h9.yTopLeft), i = Math.max(i, _h9.xTopLeft + _h9.width), o = Math.max(o, _h9.yBottomRight);
              }
            } catch (err) {
              _iterator6.e(err);
            } finally {
              _iterator6.f();
            }

            var h = i - s,
                n = o - e;
            return new _collisions_BoundingBox_js__WEBPACK_IMPORTED_MODULE_7__["default"](s + h / 2, e + n / 2, h, n);
          }
        }, {
          key: "_createGlyphTransform",
          value: function _createGlyphTransform(s, e) {
            var o = g * e.angle,
                h = Object(_chunks_mat2df32_js__WEBPACK_IMPORTED_MODULE_2__["c"])(),
                a = Object(_chunks_vec2f32_js__WEBPACK_IMPORTED_MODULE_3__["c"])();
            return Object(_chunks_mat2d_js__WEBPACK_IMPORTED_MODULE_1__["t"])(h, h, Object(_chunks_vec2_js__WEBPACK_IMPORTED_MODULE_0__["s"])(a, e.xOffset, -e.yOffset)), e.isCIM ? Object(_chunks_mat2d_js__WEBPACK_IMPORTED_MODULE_1__["r"])(h, h, o) : (Object(_chunks_mat2d_js__WEBPACK_IMPORTED_MODULE_1__["t"])(h, h, Object(_chunks_vec2_js__WEBPACK_IMPORTED_MODULE_0__["s"])(a, s.x, s.y)), Object(_chunks_mat2d_js__WEBPACK_IMPORTED_MODULE_1__["r"])(h, h, o), Object(_chunks_mat2d_js__WEBPACK_IMPORTED_MODULE_1__["t"])(h, h, Object(_chunks_vec2_js__WEBPACK_IMPORTED_MODULE_0__["s"])(a, -s.x, -s.y))), h;
          }
        }]);

        return p;
      }();

      var x = function x(t, s, e, i, o, h) {
        _classCallCheck(this, x);

        this.glyphWidthEnd = 0, this.startX = 0, this.startY = 0, this.start = Math.max(0, Math.min(s, e)), this.end = Math.max(0, Math.max(s, e)), this.end < t.length && (this.glyphWidthEnd = t[this.end].metrics.width), this.width = i, this.yMin = o, this.yMax = h;
      };

      var w = function w(t) {
        return 10 === t;
      },
          y = function y(t) {
        return 32 === t;
      };

      function T(t, s, e) {
        var i = e.scale,
            o = new Array(),
            h = function (t, s, e) {
          var i = new Array(),
              o = 1 / e.scale,
              h = e.maxLineWidth * o,
              n = s ? t.length - 1 : 0,
              r = s ? -1 : t.length,
              a = s ? -1 : 1;
          var c = n,
              d = 0,
              f = 0,
              l = c,
              m = l,
              g = 0,
              u = 1 / 0,
              _ = 0;

          for (; c !== r;) {
            var _t$c = t[c],
                _s40 = _t$c.code,
                _e11 = _t$c.metrics,
                _o2 = Math.abs(_e11.top);

            if (w(_s40) || y(_s40) || (u = Math.min(u, _o2), _ = Math.max(_, _o2 + _e11.height)), w(_s40)) c !== n && (i.push(new x(t, l, c - a, d, u, _)), u = 1 / 0, _ = 0), d = 0, l = c + a, m = c + a, f = 0;else if (y(_s40)) m = c + a, f = 0, g = _e11.advance, d += _e11.advance;else if (d > h) {
              if (m !== l) {
                var _s41 = m - 2 * a;

                d -= g, i.push(new x(t, l, _s41, d - f, u, _)), u = 1 / 0, _ = 0, l = m, d = f;
              } else i.push(new x(t, l, c - a, d, u, _)), u = 1 / 0, _ = 0, l = c, m = c, d = 0;

              d += _e11.advance, f += _e11.advance;
            } else d += _e11.advance, f += _e11.advance;
            c += a;
          }

          var p = new x(t, l, c - a, d, u, _);
          return p.start >= 0 && p.end < t.length && i.push(p), i;
        }(t, s, e),
            n = function (t, s) {
          var e = 0;

          for (var _s42 = 0; _s42 < t.length; _s42++) {
            var _i7 = t[_s42].width;
            e = Math.max(_i7, e);
          }

          var i = "underline" === s.decoration ? 4 : 0,
              o = t[0].yMin;
          return {
            x: 0,
            y: o,
            height: t[t.length - 1].yMax + s.lineHeight * (t.length - 1) + i - o,
            width: e
          };
        }(h, e),
            r = e.vAlign,
            a = e.hAlign,
            c = r === _alignmentUtils_js__WEBPACK_IMPORTED_MODULE_4__["VAlign"].Baseline ? 1 : 0,
            f = c ? 0 : r - 1,
            l = (1 - c) * -n.y + f * (n.height / 2) + -26 * (c ? 1 : 0);

        for (var _s43 = 0; _s43 < h.length; _s43++) {
          var _h$_s = h[_s43],
              _n11 = _h$_s.start,
              _r11 = _h$_s.end,
              _c = _h$_s.width;

          var _d2 = -1 * (a + 1) * (_c / 2) - 3;

          var _f = _s43 * e.lineHeight + l - 3;

          h[_s43].startX = _d2, h[_s43].startY = _f;

          for (var _s44 = _n11; _s44 <= _r11; _s44++) {
            var _e12 = t[_s44];
            if (w(_e12.code)) continue;

            var _h10 = new u(_d2 + _e12.metrics.left, _f - _e12.metrics.top, _e12, i);

            _d2 += _e12.metrics.advance, o.push(_h10);
          }
        }

        return new p(o, h, e);
      }
      /***/

    },

    /***/
    "GQfk":
    /*!***********************************************************************!*\
      !*** ./node_modules/@arcgis/core/symbols/cim/effects/EffectDashes.js ***!
      \***********************************************************************/

    /*! exports provided: EffectDashes */

    /***/
    function GQfk(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "EffectDashes", function () {
        return i;
      });
      /* harmony import */


      var _CIMCursor_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ../CIMCursor.js */
      "tqcG");
      /* harmony import */


      var _CurveHelper_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ../CurveHelper.js */
      "/vtc");
      /* harmony import */


      var _GeometryWalker_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ../GeometryWalker.js */
      "DAsI");
      /*
      All material copyright ESRI, All Rights Reserved, unless otherwise specified.
      See https://js.arcgis.com/4.18/esri/copyright.txt for details.
      */


      var i = /*#__PURE__*/function () {
        function i() {
          _classCallCheck(this, i);
        }

        _createClass(i, [{
          key: "execute",
          value: function execute(t, e, s) {
            return new r(t, e, s);
          }
        }], [{
          key: "local",
          value: function local() {
            return null === i.instance && (i.instance = new i()), i.instance;
          }
        }]);

        return i;
      }();

      i.instance = null;

      var r = /*#__PURE__*/function (_CIMCursor_js__WEBPAC5) {
        _inherits(r, _CIMCursor_js__WEBPAC5);

        var _super7 = _createSuper(r);

        function r(t, e, i) {
          var _this6;

          _classCallCheck(this, r);

          _this6 = _super7.call(this, t, !0, !0), _this6._walker = new _GeometryWalker_js__WEBPACK_IMPORTED_MODULE_2__["GeometryWalker"](), _this6._walker.updateTolerance(i), _this6._endings = e.lineDashEnding, _this6._customDashPos = void 0 !== e.offsetAlongLine ? e.offsetAlongLine * i : 0, _this6._offsetAtEnd = void 0 !== e.customEndingOffset ? e.customEndingOffset * i : 0, _this6._pattern = new _GeometryWalker_js__WEBPACK_IMPORTED_MODULE_2__["DashPattern"](), _this6._pattern.init(e.dashTemplate, !0), _this6._pattern.scale(i);
          return _this6;
        }

        _createClass(r, [{
          key: "processPath",
          value: function processPath(t) {
            if (0 === this._pattern.length()) return this.iteratePath = !1, {
              paths: [t]
            };

            if (!this.iteratePath) {
              var e = !0;

              switch (this._endings) {
                case "HalfPattern":
                case "HalfGap":
                default:
                  this._pattern.extPtGap = 0;
                  break;

                case "FullPattern":
                  this.isClosed || (this._pattern.extPtGap = .5 * this._pattern.firstValue());
                  break;

                case "FullGap":
                  this.isClosed || (this._pattern.extPtGap = .5 * this._pattern.lastValue());
                  break;

                case "NoConstraint":
                  this.isClosed || (e = !1);
                  break;

                case "Custom":
                  this.isClosed || (this._pattern.extPtGap = .5 * this._offsetAtEnd);
              }

              var _s45 = this._walker.calculatePathLength(t);

              if (this._pattern.isEmpty() || _s45 < .1 * this._pattern.length()) return {
                paths: [t]
              };
              if (!this._walker.init(t, this._pattern, e)) return {
                paths: [t]
              };
            }

            var s;
            if (this.iteratePath) s = this._pattern.nextValue();else {
              var _t16;

              switch (this._endings) {
                case "HalfPattern":
                default:
                  _t16 = .5 * this._pattern.firstValue();
                  break;

                case "HalfGap":
                  _t16 = .5 * -this._pattern.lastValue();
                  break;

                case "FullGap":
                  _t16 = -this._pattern.lastValue();
                  break;

                case "FullPattern":
                  _t16 = 0;
                  break;

                case "NoConstraint":
                case "Custom":
                  _t16 = -this._customDashPos;
              }

              var _e13 = _t16 / this._pattern.length();

              _e13 -= Math.floor(_e13), _t16 = _e13 * this._pattern.length(), this._pattern.reset(), s = this._pattern.nextValue();

              var _a3 = !1;

              for (; _t16 >= s;) {
                _t16 -= s, s = this._pattern.nextValue(), _a3 = !_a3;
              }

              s -= _t16, _a3 ? (this._walker.nextPosition(s), s = this._pattern.nextValue()) : this.isClosed && (this._firstCurve = this._walker.nextCurve(s), s = this._pattern.nextValue(), this._walker.nextPosition(s), s = this._pattern.nextValue());
            }

            var a = this._walker.nextCurve(s);

            return a ? this._walker.isPathEnd() ? (this.iteratePath = !1, this._firstCurve && (this._firstCurve.splice(0, 1), _CurveHelper_js__WEBPACK_IMPORTED_MODULE_1__["PathHelper"].mergePath(a, this._firstCurve), this._firstCurve = null)) : (s = this._pattern.nextValue(), !this._walker.nextPosition(s) || this._walker.isPathEnd() ? (this.iteratePath = !1, this._firstCurve && (a = this._firstCurve, this._firstCurve = null)) : this.iteratePath = !0) : (this.iteratePath = !1, a = this._firstCurve, this._firstCurve = null), {
              paths: [a]
            };
          }
        }]);

        return r;
      }(_CIMCursor_js__WEBPACK_IMPORTED_MODULE_0__["PathGeometryCursor"]);
      /***/

    },

    /***/
    "J8sa":
    /*!***********************************************************************!*\
      !*** ./node_modules/@arcgis/core/symbols/cim/effects/EffectRotate.js ***!
      \***********************************************************************/

    /*! exports provided: EffectRotate */

    /***/
    function J8sa(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "EffectRotate", function () {
        return u;
      });
      /* harmony import */


      var _core_lang_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ../../../core/lang.js */
      "f/qv");
      /* harmony import */


      var _geometry_support_boundsUtils_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ../../../geometry/support/boundsUtils.js */
      "KLE9");
      /* harmony import */


      var _geometry_support_jsonUtils_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ../../../geometry/support/jsonUtils.js */
      "qatw");
      /* harmony import */


      var _geometry_support_aaBoundingRect_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ../../../geometry/support/aaBoundingRect.js */
      "kYAx");
      /*
      All material copyright ESRI, All Rights Reserved, unless otherwise specified.
      See https://js.arcgis.com/4.18/esri/copyright.txt for details.
      */


      var u = /*#__PURE__*/function () {
        function u() {
          _classCallCheck(this, u);
        }

        _createClass(u, [{
          key: "execute",
          value: function execute(t, n, e) {
            return new c(t, n, e);
          }
        }], [{
          key: "local",
          value: function local() {
            return null === u.instance && (u.instance = new u()), u.instance;
          }
        }]);

        return u;
      }();

      u.instance = null;

      var c = /*#__PURE__*/function () {
        function c(t, n, e) {
          _classCallCheck(this, c);

          this._inputGeometries = t, this._rotateAngle = void 0 !== n.angle ? -n.angle * Math.PI / 180 : 0;
        }

        _createClass(c, [{
          key: "next",
          value: function next() {
            var u = this._inputGeometries.next();

            for (; u;) {
              if (0 === this._rotateAngle) return u;

              var _c3 = Object(_geometry_support_aaBoundingRect_js__WEBPACK_IMPORTED_MODULE_3__["create"])();

              Object(_geometry_support_boundsUtils_js__WEBPACK_IMPORTED_MODULE_1__["getBoundsXY"])(_c3, u);

              var _l7 = (_c3[2] + _c3[0]) / 2,
                  _m = (_c3[3] + _c3[1]) / 2;

              if (Object(_geometry_support_jsonUtils_js__WEBPACK_IMPORTED_MODULE_2__["isExtent"])(u)) {
                var t = {
                  rings: [[[u.xmin, u.ymin], [u.xmin, u.ymax], [u.xmax, u.ymax], [u.xmax, u.ymin], [u.xmin, u.ymin]]]
                };
                return this._rotateMultipath(t.rings, _l7, _m), t;
              }

              if (Object(_geometry_support_jsonUtils_js__WEBPACK_IMPORTED_MODULE_2__["isPolygon"])(u)) {
                var n = Object(_core_lang_js__WEBPACK_IMPORTED_MODULE_0__["clone"])(u);
                return this._rotateMultipath(n.rings, _l7, _m), n;
              }

              if (Object(_geometry_support_jsonUtils_js__WEBPACK_IMPORTED_MODULE_2__["isPolyline"])(u)) {
                var _n12 = Object(_core_lang_js__WEBPACK_IMPORTED_MODULE_0__["clone"])(u);

                return this._rotateMultipath(_n12.paths, _l7, _m), _n12;
              }

              if (Object(_geometry_support_jsonUtils_js__WEBPACK_IMPORTED_MODULE_2__["isMultipoint"])(u)) {
                var _n13 = Object(_core_lang_js__WEBPACK_IMPORTED_MODULE_0__["clone"])(u);

                return this._rotatePath(_n13.points, _l7, _m), _n13;
              }

              if (Object(_geometry_support_jsonUtils_js__WEBPACK_IMPORTED_MODULE_2__["isPoint"])(u)) return u;
              u = this._inputGeometries.next();
            }

            return null;
          }
        }, {
          key: "_rotateMultipath",
          value: function _rotateMultipath(t, n, e) {
            if (t) {
              var _iterator7 = _createForOfIteratorHelper(t),
                  _step7;

              try {
                for (_iterator7.s(); !(_step7 = _iterator7.n()).done;) {
                  var r = _step7.value;

                  this._rotatePath(r, n, e);
                }
              } catch (err) {
                _iterator7.e(err);
              } finally {
                _iterator7.f();
              }
            }
          }
        }, {
          key: "_rotatePath",
          value: function _rotatePath(t, n, e) {
            if (t) {
              var r = Math.cos(this._rotateAngle),
                  i = Math.sin(this._rotateAngle);

              var _iterator8 = _createForOfIteratorHelper(t),
                  _step8;

              try {
                for (_iterator8.s(); !(_step8 = _iterator8.n()).done;) {
                  var o = _step8.value;

                  var _t17 = o[0] - n,
                      s = o[1] - e;

                  o[0] = n + _t17 * r - s * i, o[1] = e + _t17 * i + s * r;
                }
              } catch (err) {
                _iterator8.e(err);
              } finally {
                _iterator8.f();
              }
            }
          }
        }]);

        return c;
      }();
      /***/

    },

    /***/
    "MbPc":
    /*!*********************************************************************************!*\
      !*** ./node_modules/@arcgis/core/symbols/cim/placements/PlacementOnVertices.js ***!
      \*********************************************************************************/

    /*! exports provided: PlacementOnVertices */

    /***/
    function MbPc(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "PlacementOnVertices", function () {
        return n;
      });
      /* harmony import */


      var _CIMCursor_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ../CIMCursor.js */
      "tqcG");
      /* harmony import */


      var _CurveHelper_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ../CurveHelper.js */
      "/vtc");
      /*
      All material copyright ESRI, All Rights Reserved, unless otherwise specified.
      See https://js.arcgis.com/4.18/esri/copyright.txt for details.
      */


      var n = /*#__PURE__*/function () {
        function n() {
          _classCallCheck(this, n);
        }

        _createClass(n, [{
          key: "execute",
          value: function execute(t, e, s) {
            return new a(t, e, s);
          }
        }], [{
          key: "local",
          value: function local() {
            return null === n.instance && (n.instance = new n()), n.instance;
          }
        }]);

        return n;
      }();

      n.instance = null;

      var a = /*#__PURE__*/function (_CIMCursor_js__WEBPAC6) {
        _inherits(a, _CIMCursor_js__WEBPAC6);

        var _super8 = _createSuper(a);

        function a(t, e, s) {
          var _this7;

          _classCallCheck(this, a);

          _this7 = _super8.call(this, t, !0, !0), _this7._curveHelper = new _CurveHelper_js__WEBPACK_IMPORTED_MODULE_1__["CurveHelper"](), _this7._angleToLine = void 0 === e.angleToLine || e.angleToLine, _this7._offset = void 0 !== e.offset ? e.offset * s : 0, _this7._endPoints = void 0 === e.placeOnEndPoints || e.placeOnEndPoints, _this7._controlPoints = void 0 === e.placeOnControlPoints || e.placeOnControlPoints, _this7._regularVertices = void 0 === e.placeOnRegularVertices || e.placeOnRegularVertices, _this7._tags = [], _this7._tagIterator = 0;
          return _this7;
        }

        _createClass(a, [{
          key: "processPath",
          value: function processPath(t) {
            if (this.iteratePath || (this._preparePath(t), this.iteratePath = !0), this._tagIterator >= this._tags.length) return this._tags.length = 0, this._tagIterator = 0, this.iteratePath = !1, null;
            var e = this._tags[this._tagIterator];
            this._angleToLine && this.internalPlacement.setRotate(e[2]);
            var s = e[0],
                i = e[1];

            if (0 !== this._offset) {
              var _t18 = Math.cos(e[2]),
                  _n14 = Math.sin(e[2]);

              s -= this._offset * _n14, i += this._offset * _t18;
            }

            return this.internalPlacement.setTranslate(s, i), this._tagIterator++, this.internalPlacement;
          }
        }, {
          key: "_preparePath",
          value: function _preparePath(t) {
            this._tags.length = 0, this._tagIterator = 0;
            var i = Object(_CIMCursor_js__WEBPACK_IMPORTED_MODULE_0__["isClosedPath"])(t),
                n = t.length - 1;

            var _a4,
                h,
                o = 0,
                l = 0,
                _ = 0,
                c = 0,
                g = 0;

            for (; o < n;) {
              o++, _a4 = t[o - 1], h = t[o];
              var e = Object(_CIMCursor_js__WEBPACK_IMPORTED_MODULE_0__["getId"])(_a4),
                  u = Object(_CIMCursor_js__WEBPACK_IMPORTED_MODULE_0__["getId"])(h);
              (this._angleToLine || 0 !== this._offset) && (c = this._curveHelper.getAngle(_a4, h, 0)), 1 === o ? i ? (l = c, _ = e) : this._endPoints && this._tags.push([_a4[0], _a4[1], c]) : 1 === e ? this._controlPoints && this._tags.push([_a4[0], _a4[1], r(g, c)]) : this._regularVertices && this._tags.push([_a4[0], _a4[1], r(g, c)]), (this._angleToLine || 0 !== this._offset) && (g = this._curveHelper.getAngle(_a4, h, 1)), o === n && (i ? 1 === u || 1 === _ ? this._controlPoints && this._tags.push([h[0], h[1], r(g, l)]) : this._regularVertices && this._tags.push([h[0], h[1], r(g, l)]) : this._endPoints && this._tags.push([h[0], h[1], g]));
            }

            this._tagIterator = 0;
          }
        }]);

        return a;
      }(_CIMCursor_js__WEBPACK_IMPORTED_MODULE_0__["PathTransformationCursor"]);

      function r(t, e) {
        var s = Math.PI;

        for (; Math.abs(e - t) > s + 2e-15;) {
          e - t > s ? e -= 2 * s : e += 2 * s;
        }

        return (t + e) / 2;
      }
      /***/

    },

    /***/
    "Mt1D":
    /*!***************************************************************************!*\
      !*** ./node_modules/@arcgis/core/views/2d/engine/webgl/alignmentUtils.js ***!
      \***************************************************************************/

    /*! exports provided: HAlign, VAlign, getAlignmentFromPlacement, getJustification, getXAnchorDirection, getXDirection, getYAnchorDirection, getYDirection */

    /***/
    function Mt1D(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "HAlign", function () {
        return e;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "VAlign", function () {
        return t;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "getAlignmentFromPlacement", function () {
        return a;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "getJustification", function () {
        return s;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "getXAnchorDirection", function () {
        return n;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "getXDirection", function () {
        return c;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "getYAnchorDirection", function () {
        return r;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "getYDirection", function () {
        return o;
      });
      /*
      All material copyright ESRI, All Rights Reserved, unless otherwise specified.
      See https://js.arcgis.com/4.18/esri/copyright.txt for details.
      */


      var e, t;

      function n(t) {
        switch (t) {
          case "left":
            return e.Left;

          case "right":
            return e.Right;

          case "center":
          case "justify":
            return e.Center;
        }
      }

      function r(e) {
        switch (e) {
          case "top":
            return t.Top;

          case "middle":
            return t.Center;

          case "baseline":
            return t.Baseline;

          case "bottom":
            return t.Bottom;
        }
      }

      function a(n) {
        switch (n) {
          case "above-left":
            return [e.Right, t.Bottom];

          case "above-center":
          case "above-along":
            return [e.Center, t.Bottom];

          case "above-right":
            return [e.Left, t.Bottom];

          case "center-left":
            return [e.Right, t.Center];

          case "center-center":
          case "center-along":
            return [e.Center, t.Center];

          case "center-right":
            return [e.Left, t.Center];

          case "below-left":
            return [e.Right, t.Top];

          case "below-center":
          case "below-along":
            return [e.Center, t.Top];

          case "below-right":
            return [e.Left, t.Top];

          case "always-horizontal":
            return [e.Center, t.Baseline];

          default:
            return console.debug("Found invalid placement type ".concat(n)), [e.Center, t.Center];
        }
      }

      function c(t) {
        switch (t) {
          case e.Right:
            return -1;

          case e.Center:
            return 0;

          case e.Left:
            return 1;

          default:
            return console.debug("Found invalid horizontal alignment ".concat(t)), 0;
        }
      }

      function o(e) {
        switch (e) {
          case t.Top:
            return 1;

          case t.Center:
            return 0;

          case t.Bottom:
          case t.Baseline:
            return -1;

          default:
            return console.debug("Found invalid vertical alignment ".concat(e)), 0;
        }
      }

      function s(t) {
        switch (t) {
          case "left":
            return e.Left;

          case "right":
            return e.Right;

          case "center":
          case "justify":
            return e.Center;
        }
      }

      !function (e) {
        e[e.Left = -1] = "Left", e[e.Center = 0] = "Center", e[e.Right = 1] = "Right";
      }(e || (e = {})), function (e) {
        e[e.Top = 1] = "Top", e[e.Center = 0] = "Center", e[e.Bottom = -1] = "Bottom", e[e.Baseline = 2] = "Baseline";
      }(t || (t = {}));
      /***/
    },

    /***/
    "Nl1v":
    /*!***************************************************************************************!*\
      !*** ./node_modules/@arcgis/core/symbols/cim/placements/PlacementAtRatioPositions.js ***!
      \***************************************************************************************/

    /*! exports provided: PlacementAtRatioPositions */

    /***/
    function Nl1v(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "PlacementAtRatioPositions", function () {
        return e;
      });
      /* harmony import */


      var _CIMCursor_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ../CIMCursor.js */
      "tqcG");
      /* harmony import */


      var _GeometryWalker_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ../GeometryWalker.js */
      "DAsI");
      /*
      All material copyright ESRI, All Rights Reserved, unless otherwise specified.
      See https://js.arcgis.com/4.18/esri/copyright.txt for details.
      */


      var e = /*#__PURE__*/function () {
        function e() {
          _classCallCheck(this, e);
        }

        _createClass(e, [{
          key: "execute",
          value: function execute(t, i, s) {
            return new n(t, i, s);
          }
        }], [{
          key: "local",
          value: function local() {
            return null === e.instance && (e.instance = new e()), e.instance;
          }
        }]);

        return e;
      }();

      e.instance = null;

      var n = /*#__PURE__*/function (_CIMCursor_js__WEBPAC7) {
        _inherits(n, _CIMCursor_js__WEBPAC7);

        var _super9 = _createSuper(n);

        function n(t, e, _n15) {
          var _this8;

          _classCallCheck(this, n);

          _this8 = _super9.call(this, t, !0, !0), _this8._walker = new _GeometryWalker_js__WEBPACK_IMPORTED_MODULE_1__["GeometryWalker"](), _this8._walker.updateTolerance(_n15), _this8._angleToLine = void 0 === e.angleToLine || e.angleToLine, _this8._offset = void 0 !== e.offset ? e.offset * _n15 : 0, _this8._beginGap = void 0 !== e.beginPosition ? e.beginPosition * _n15 : 0, _this8._endGap = void 0 !== e.endPosition ? e.endPosition * _n15 : 0, _this8._flipFirst = void 0 === e.flipFirst || e.flipFirst, _this8._pattern = new _GeometryWalker_js__WEBPACK_IMPORTED_MODULE_1__["DashPattern"](), _this8._pattern.init(e.positionArray, !1, !1), _this8._subPathLen = 0, _this8._posCount = _this8._pattern.size(), _this8._isFirst = !0, _this8._prevPos = 0;
          return _this8;
        }

        _createClass(n, [{
          key: "processPath",
          value: function processPath(t) {
            if (this._pattern.isEmpty()) return null;
            var i;

            if (this.iteratePath) {
              var _t19 = this._pattern.nextValue() * this._subPathLen,
                  _s46 = this._beginGap + _t19;

              i = _s46 - this._prevPos, this._prevPos = _s46;
            } else {
              if (this._posCount = this._pattern.size(), this._isFirst = !0, this._prevPos = 0, this._subPathLen = this._walker.calculatePathLength(t) - this._beginGap - this._endGap, this._subPathLen < 0) return this.iteratePath = !1, null;
              if (!this._walker.init(t, this._pattern, !1)) return null;

              this._pattern.reset();

              var _s47 = this._pattern.nextValue() * this._subPathLen,
                  _e14 = this._beginGap + _s47;

              i = _e14 - this._prevPos, this._prevPos = _e14, this.iteratePath = !0;
            }

            var s = {};
            if (!this._walker.nextPointAndAngle(i, s, 1)) return this.iteratePath = !1, null;
            this.internalPlacement.setTranslate(s.pt[0] + this._offset * s.sa, s.pt[1] - this._offset * s.ca);
            var e = this._isFirst && this._flipFirst;

            var _n16, a;

            return this._angleToLine ? (_n16 = s.ca, a = s.sa) : (_n16 = 1, a = 0), e && (_n16 = -_n16, a = -a), this.internalPlacement.setRotateCS(_n16, a), this._isFirst = !1, this._posCount--, 0 === this._posCount && (this.iteratePath = !1), this.internalPlacement;
          }
        }]);

        return n;
      }(_CIMCursor_js__WEBPACK_IMPORTED_MODULE_0__["PathTransformationCursor"]);
      /***/

    },

    /***/
    "PiQZ":
    /*!***********************************************************************!*\
      !*** ./node_modules/@arcgis/core/symbols/cim/effects/EffectBuffer.js ***!
      \***********************************************************************/

    /*! exports provided: EffectBuffer */

    /***/
    function PiQZ(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "EffectBuffer", function () {
        return o;
      });
      /* harmony import */


      var _geometry_support_jsonUtils_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ../../../geometry/support/jsonUtils.js */
      "qatw");
      /* harmony import */


      var _CurveHelper_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ../CurveHelper.js */
      "/vtc");
      /*
      All material copyright ESRI, All Rights Reserved, unless otherwise specified.
      See https://js.arcgis.com/4.18/esri/copyright.txt for details.
      */


      var o = /*#__PURE__*/function () {
        function o() {
          _classCallCheck(this, o);
        }

        _createClass(o, [{
          key: "execute",
          value: function execute(e, t, i) {
            return new f(e, t, i);
          }
        }], [{
          key: "local",
          value: function local() {
            return null === o.instance && (o.instance = new o()), o.instance;
          }
        }]);

        return o;
      }();

      o.instance = null;

      var f = /*#__PURE__*/function () {
        function f(e, t, i) {
          _classCallCheck(this, f);

          this._inputGeometries = e, this._curveHelper = new _CurveHelper_js__WEBPACK_IMPORTED_MODULE_1__["CurveHelper"](), this._size = (void 0 !== t.size ? t.size : 1) * i, this._offsetFlattenError = _CurveHelper_js__WEBPACK_IMPORTED_MODULE_1__["PIXEL_TOLERANCE"] * i;
        }

        _createClass(f, [{
          key: "next",
          value: function next() {
            var n = this._inputGeometries.next();

            for (; n;) {
              if (Object(_geometry_support_jsonUtils_js__WEBPACK_IMPORTED_MODULE_0__["isExtent"])(n)) if (this._size > 0) {
                var e = [[n.xmin, n.ymin], [n.xmin, n.ymax], [n.xmax, n.ymax], [n.xmax, n.ymin], [n.xmin, n.ymin]],
                    t = this._curveHelper.offset(e, this._size, "Rounded", 4, this._offsetFlattenError);

                if (t) return {
                  rings: [t]
                };
              } else {
                if (!(this._size < 0)) return n;
                if (Math.min(n.xmax - n.xmin, n.ymax - n.ymin) + 2 * this._size > 0) return {
                  xmin: n.xmin - this._size,
                  xmax: n.xmax + this._size,
                  ymin: n.ymin - this._size,
                  ymax: n.ymax + this._size
                };
              }

              if (Object(_geometry_support_jsonUtils_js__WEBPACK_IMPORTED_MODULE_0__["isPolygon"])(n)) {
                if (0 === this._size) return n;
                var _e15 = [];

                var _iterator9 = _createForOfIteratorHelper(n.rings),
                    _step9;

                try {
                  for (_iterator9.s(); !(_step9 = _iterator9.n()).done;) {
                    var _t20 = _step9.value;

                    var i = this._curveHelper.offset(_t20, this._size, "Rounded", 4, this._offsetFlattenError);

                    i && _e15.push(i);
                  }
                } catch (err) {
                  _iterator9.e(err);
                } finally {
                  _iterator9.f();
                }

                if (_e15.length) return {
                  rings: _e15
                };
              }

              if (Object(_geometry_support_jsonUtils_js__WEBPACK_IMPORTED_MODULE_0__["isPolyline"])(n) && this._size > 0) {
                var _e16 = [];

                var _iterator10 = _createForOfIteratorHelper(n.paths),
                    _step10;

                try {
                  for (_iterator10.s(); !(_step10 = _iterator10.n()).done;) {
                    var _t21 = _step10.value;

                    if (_t21 && _t21.length > 1) {
                      var _i8 = this._curveHelper.offset(_t21, this._size, "Rounded", 4, this._offsetFlattenError),
                          s = this._curveHelper.offset(_t21, -this._size, "Rounded", 4, this._offsetFlattenError);

                      if (_i8 && s) {
                        for (var _e17 = s.length - 1; _e17 >= 0; _e17--) {
                          _i8.push(s[_e17]);
                        }

                        _i8.push([_i8[0][0], _i8[0][1]]), _e16.push(_i8);
                      }
                    }
                  }
                } catch (err) {
                  _iterator10.e(err);
                } finally {
                  _iterator10.f();
                }

                if (_e16.length) return {
                  rings: _e16
                };
              }

              Object(_geometry_support_jsonUtils_js__WEBPACK_IMPORTED_MODULE_0__["isPoint"])(n) && this._size, n = this._inputGeometries.next();
            }

            return null;
          }
        }]);

        return f;
      }();
      /***/

    },

    /***/
    "Q/g2":
    /*!************************************************************************!*\
      !*** ./node_modules/@arcgis/core/symbols/cim/effects/EffectReverse.js ***!
      \************************************************************************/

    /*! exports provided: EffectReverse */

    /***/
    function QG2(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "EffectReverse", function () {
        return s;
      });
      /* harmony import */


      var _core_lang_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ../../../core/lang.js */
      "f/qv");
      /* harmony import */


      var _geometry_support_jsonUtils_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ../../../geometry/support/jsonUtils.js */
      "qatw");
      /* harmony import */


      var _CIMCursor_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ../CIMCursor.js */
      "tqcG");
      /*
      All material copyright ESRI, All Rights Reserved, unless otherwise specified.
      See https://js.arcgis.com/4.18/esri/copyright.txt for details.
      */


      var s = /*#__PURE__*/function () {
        function s() {
          _classCallCheck(this, s);
        }

        _createClass(s, [{
          key: "execute",
          value: function execute(e, t, r) {
            return new n(e, t, r);
          }
        }], [{
          key: "local",
          value: function local() {
            return null === s.instance && (s.instance = new s()), s.instance;
          }
        }]);

        return s;
      }();

      s.instance = null;

      var n = /*#__PURE__*/function () {
        function n(e, t, r) {
          _classCallCheck(this, n);

          this._inputGeometries = e, this._reverse = void 0 === t.reverse || t.reverse;
        }

        _createClass(n, [{
          key: "next",
          value: function next() {
            var s = this._inputGeometries.next();

            for (; s;) {
              if (!this._reverse) return s;

              if (Object(_geometry_support_jsonUtils_js__WEBPACK_IMPORTED_MODULE_1__["isPolyline"])(s)) {
                var t = Object(_core_lang_js__WEBPACK_IMPORTED_MODULE_0__["clone"])(s);
                return Object(_CIMCursor_js__WEBPACK_IMPORTED_MODULE_2__["reverseMultipath"])(t.paths), t;
              }

              s = this._inputGeometries.next();
            }

            return null;
          }
        }]);

        return n;
      }();
      /***/

    },

    /***/
    "QPyG":
    /*!*********************************************************************!*\
      !*** ./node_modules/@arcgis/core/symbols/cim/effects/EffectMove.js ***!
      \*********************************************************************/

    /*! exports provided: EffectMove */

    /***/
    function QPyG(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "EffectMove", function () {
        return n;
      });
      /* harmony import */


      var _core_lang_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ../../../core/lang.js */
      "f/qv");
      /* harmony import */


      var _geometry_support_jsonUtils_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ../../../geometry/support/jsonUtils.js */
      "qatw");
      /*
      All material copyright ESRI, All Rights Reserved, unless otherwise specified.
      See https://js.arcgis.com/4.18/esri/copyright.txt for details.
      */


      var n = /*#__PURE__*/function () {
        function n() {
          _classCallCheck(this, n);
        }

        _createClass(n, [{
          key: "execute",
          value: function execute(t, s, e) {
            return new r(t, s, e);
          }
        }], [{
          key: "local",
          value: function local() {
            return null === n.instance && (n.instance = new n()), n.instance;
          }
        }]);

        return n;
      }();

      n.instance = null;

      var r = /*#__PURE__*/function () {
        function r(t, s, e) {
          _classCallCheck(this, r);

          this._inputGeometries = t, this._offsetX = void 0 !== s.offsetX ? s.offsetX * e : 0, this._offsetY = void 0 !== s.offsetY ? -s.offsetY * e : 0;
        }

        _createClass(r, [{
          key: "next",
          value: function next() {
            var n = this._inputGeometries.next();

            for (; n;) {
              if (Object(_geometry_support_jsonUtils_js__WEBPACK_IMPORTED_MODULE_1__["isExtent"])(n)) return {
                xmin: n.xmin + this._offsetX,
                xmax: n.xmax + this._offsetX,
                ymin: n.ymin + this._offsetY,
                ymax: n.ymax + this._offsetY
              };

              if (Object(_geometry_support_jsonUtils_js__WEBPACK_IMPORTED_MODULE_1__["isPolygon"])(n)) {
                var s = Object(_core_lang_js__WEBPACK_IMPORTED_MODULE_0__["clone"])(n);
                return this._moveMultipath(s.rings, this._offsetX, this._offsetY), s;
              }

              if (Object(_geometry_support_jsonUtils_js__WEBPACK_IMPORTED_MODULE_1__["isPolyline"])(n)) {
                var _s48 = Object(_core_lang_js__WEBPACK_IMPORTED_MODULE_0__["clone"])(n);

                return this._moveMultipath(_s48.paths, this._offsetX, this._offsetY), _s48;
              }

              if (Object(_geometry_support_jsonUtils_js__WEBPACK_IMPORTED_MODULE_1__["isMultipoint"])(n)) {
                var _s49 = Object(_core_lang_js__WEBPACK_IMPORTED_MODULE_0__["clone"])(n);

                return this._movePath(_s49.points, this._offsetX, this._offsetY), _s49;
              }

              if (Object(_geometry_support_jsonUtils_js__WEBPACK_IMPORTED_MODULE_1__["isPoint"])(n)) return {
                x: n.x + this._offsetX,
                y: n.y + this._offsetY
              };
              n = this._inputGeometries.next();
            }

            return null;
          }
        }, {
          key: "_moveMultipath",
          value: function _moveMultipath(t, s, e) {
            if (t) {
              var _iterator11 = _createForOfIteratorHelper(t),
                  _step11;

              try {
                for (_iterator11.s(); !(_step11 = _iterator11.n()).done;) {
                  var i = _step11.value;

                  this._movePath(i, s, e);
                }
              } catch (err) {
                _iterator11.e(err);
              } finally {
                _iterator11.f();
              }
            }
          }
        }, {
          key: "_movePath",
          value: function _movePath(t, s, e) {
            if (t) {
              var _iterator12 = _createForOfIteratorHelper(t),
                  _step12;

              try {
                for (_iterator12.s(); !(_step12 = _iterator12.n()).done;) {
                  var i = _step12.value;
                  i[0] += s, i[1] += e;
                }
              } catch (err) {
                _iterator12.e(err);
              } finally {
                _iterator12.f();
              }
            }
          }
        }]);

        return r;
      }();
      /***/

    },

    /***/
    "RaXU":
    /*!*******************************************************************!*\
      !*** ./node_modules/@arcgis/core/views/2d/layers/support/util.js ***!
      \*******************************************************************/

    /*! exports provided: analyzeRings, toJSONGeometryType */

    /***/
    function RaXU(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "analyzeRings", function () {
        return n;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "toJSONGeometryType", function () {
        return e;
      });
      /* harmony import */


      var _core_jsonMap_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ../../../../core/jsonMap.js */
      "+opI");
      /*
      All material copyright ESRI, All Rights Reserved, unless otherwise specified.
      See https://js.arcgis.com/4.18/esri/copyright.txt for details.
      */


      var o = new _core_jsonMap_js__WEBPACK_IMPORTED_MODULE_0__["JSONMap"]({
        esriGeometryPoint: "point",
        esriGeometryMultipoint: "multipoint",
        esriGeometryPolyline: "polyline",
        esriGeometryPolygon: "polygon",
        esriGeometryMultiPatch: "multipatch",
        mesh: "mesh"
      });

      function e(t) {
        return o.toJSON(t);
      }

      function n(t, o, e) {
        var n = [],
            i = [];
        var r = 0,
            l = 0;

        var _iterator13 = _createForOfIteratorHelper(t),
            _step13;

        try {
          for (_iterator13.s(); !(_step13 = _iterator13.n()).done;) {
            var s = _step13.value;
            var _t22 = l;
            var _m2 = s[0][0],
                c = s[0][1];
            n[l++] = _m2, n[l++] = c;
            var p = 0;

            for (var _t23 = 1; _t23 < s.length; ++_t23) {
              var _o3 = _m2,
                  _e18 = c;
              _m2 = s[_t23][0], c = s[_t23][1], p += c * _o3 - _m2 * _e18, n[l++] = _m2, n[l++] = c;
            }

            o(p / 2), p > 0 ? (_t22 - r > 0 && (e(r, _t22, n, i), r = _t22), i.length = 0) : p < 0 && _t22 - r > 0 ? i.push(.5 * (_t22 - r)) : l = _t22;
          }
        } catch (err) {
          _iterator13.e(err);
        } finally {
          _iterator13.f();
        }

        l - r > 0 && e(r, l, n, i);
      }
      /***/

    },

    /***/
    "Sld3":
    /*!**********************************************************************!*\
      !*** ./node_modules/@arcgis/core/symbols/cim/effects/EffectScale.js ***!
      \**********************************************************************/

    /*! exports provided: EffectScale */

    /***/
    function Sld3(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "EffectScale", function () {
        return c;
      });
      /* harmony import */


      var _core_lang_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ../../../core/lang.js */
      "f/qv");
      /* harmony import */


      var _geometry_support_boundsUtils_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ../../../geometry/support/boundsUtils.js */
      "KLE9");
      /* harmony import */


      var _geometry_support_jsonUtils_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ../../../geometry/support/jsonUtils.js */
      "qatw");
      /* harmony import */


      var _geometry_support_aaBoundingRect_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ../../../geometry/support/aaBoundingRect.js */
      "kYAx");
      /*
      All material copyright ESRI, All Rights Reserved, unless otherwise specified.
      See https://js.arcgis.com/4.18/esri/copyright.txt for details.
      */


      var c = /*#__PURE__*/function () {
        function c() {
          _classCallCheck(this, c);
        }

        _createClass(c, [{
          key: "execute",
          value: function execute(t, s, i) {
            return new l(t, s, i);
          }
        }], [{
          key: "local",
          value: function local() {
            return null === c.instance && (c.instance = new c()), c.instance;
          }
        }]);

        return c;
      }();

      c.instance = null;

      var l = /*#__PURE__*/function () {
        function l(t, s, i) {
          _classCallCheck(this, l);

          this._inputGeometries = t, this._xFactor = void 0 !== s.xScaleFactor ? s.xScaleFactor : 1.15, this._yFactor = void 0 !== s.yScaleFactor ? s.yScaleFactor : 1.15;
        }

        _createClass(l, [{
          key: "next",
          value: function next() {
            var c = this._inputGeometries.next();

            for (; c;) {
              if (1 === this._xFactor && 1 === this._yFactor) return c;

              var _l9 = Object(_geometry_support_aaBoundingRect_js__WEBPACK_IMPORTED_MODULE_3__["create"])();

              Object(_geometry_support_boundsUtils_js__WEBPACK_IMPORTED_MODULE_1__["getBoundsXY"])(_l9, c);

              var u = (_l9[2] + _l9[0]) / 2,
                  _m3 = (_l9[3] + _l9[1]) / 2;

              if (Object(_geometry_support_jsonUtils_js__WEBPACK_IMPORTED_MODULE_2__["isExtent"])(c)) {
                var t = {
                  rings: [[[c.xmin, c.ymin], [c.xmin, c.ymax], [c.xmax, c.ymax], [c.xmax, c.ymin], [c.xmin, c.ymin]]]
                };
                return this._scaleMultipath(t.rings, u, _m3), t;
              }

              if (Object(_geometry_support_jsonUtils_js__WEBPACK_IMPORTED_MODULE_2__["isPolygon"])(c)) {
                var s = Object(_core_lang_js__WEBPACK_IMPORTED_MODULE_0__["clone"])(c);
                return this._scaleMultipath(s.rings, u, _m3), s;
              }

              if (Object(_geometry_support_jsonUtils_js__WEBPACK_IMPORTED_MODULE_2__["isPolyline"])(c)) {
                var _s50 = Object(_core_lang_js__WEBPACK_IMPORTED_MODULE_0__["clone"])(c);

                return this._scaleMultipath(_s50.paths, u, _m3), _s50;
              }

              if (Object(_geometry_support_jsonUtils_js__WEBPACK_IMPORTED_MODULE_2__["isMultipoint"])(c)) {
                var _s51 = Object(_core_lang_js__WEBPACK_IMPORTED_MODULE_0__["clone"])(c);

                return this._scalePath(_s51.points, u, _m3), _s51;
              }

              if (Object(_geometry_support_jsonUtils_js__WEBPACK_IMPORTED_MODULE_2__["isPoint"])(c)) return c;
              c = this._inputGeometries.next();
            }

            return null;
          }
        }, {
          key: "_scaleMultipath",
          value: function _scaleMultipath(t, s, i) {
            if (t) {
              var _iterator14 = _createForOfIteratorHelper(t),
                  _step14;

              try {
                for (_iterator14.s(); !(_step14 = _iterator14.n()).done;) {
                  var r = _step14.value;

                  this._scalePath(r, s, i);
                }
              } catch (err) {
                _iterator14.e(err);
              } finally {
                _iterator14.f();
              }
            }
          }
        }, {
          key: "_scalePath",
          value: function _scalePath(t, s, i) {
            if (t) {
              var _iterator15 = _createForOfIteratorHelper(t),
                  _step15;

              try {
                for (_iterator15.s(); !(_step15 = _iterator15.n()).done;) {
                  var r = _step15.value;

                  var _t24 = (r[0] - s) * this._xFactor,
                      n = (r[1] - i) * this._yFactor;

                  r[0] = s + _t24, r[1] = i + n;
                }
              } catch (err) {
                _iterator15.e(err);
              } finally {
                _iterator15.f();
              }
            }
          }
        }]);

        return l;
      }();
      /***/

    },

    /***/
    "WPSO":
    /*!****************************************************************!*\
      !*** ./node_modules/@arcgis/core/symbols/cim/CIMPlacements.js ***!
      \****************************************************************/

    /*! exports provided: EmptyPlacementCursor, Placement */

    /***/
    function WPSO(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "EmptyPlacementCursor", function () {
        return s;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "Placement", function () {
        return t;
      });
      /*
      All material copyright ESRI, All Rights Reserved, unless otherwise specified.
      See https://js.arcgis.com/4.18/esri/copyright.txt for details.
      */


      var t = /*#__PURE__*/function () {
        function t() {
          _classCallCheck(this, t);

          this.setIdentity();
        }

        _createClass(t, [{
          key: "getAngle",
          value: function getAngle() {
            return (null == this.rz || 0 === this.rz && 1 !== this.rz_c && 0 !== this.rz_s) && (this.rz = Math.atan2(this.rz_s, this.rz_c)), this.rz;
          }
        }, {
          key: "setIdentity",
          value: function setIdentity() {
            this.tx = 0, this.ty = 0, this.tz = 0, this.s = 1, this.rx = 0, this.ry = 0, this.rz = 0, this.rz_c = 1, this.rz_s = 0;
          }
        }, {
          key: "setTranslate",
          value: function setTranslate(_t25, s) {
            this.tx = _t25, this.ty = s;
          }
        }, {
          key: "setTranslateZ",
          value: function setTranslateZ(_t26) {
            this.tz = _t26;
          }
        }, {
          key: "setRotateCS",
          value: function setRotateCS(_t27, s) {
            this.rz = void 0, this.rz_c = _t27, this.rz_s = s;
          }
        }, {
          key: "setRotate",
          value: function setRotate(_t28) {
            this.rz = _t28, this.rz_c = void 0, this.rz_s = void 0;
          }
        }, {
          key: "setRotateY",
          value: function setRotateY(_t29) {
            this.ry = _t29;
          }
        }, {
          key: "setScale",
          value: function setScale(_t30) {
            this.s = _t30;
          }
        }, {
          key: "setMeasure",
          value: function setMeasure(_t31) {
            this.m = _t31;
          }
        }]);

        return t;
      }();

      var s = /*#__PURE__*/function () {
        function s() {
          _classCallCheck(this, s);
        }

        _createClass(s, [{
          key: "next",
          value: function next() {
            return null;
          }
        }]);

        return s;
      }();
      /***/

    },

    /***/
    "X4zr":
    /*!***************************************************************!*\
      !*** ./node_modules/@arcgis/core/symbols/cim/packingUtils.js ***!
      \***************************************************************/

    /*! exports provided: packFloatRGBA, unpackFloatRGBA */

    /***/
    function X4zr(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "packFloatRGBA", function () {
        return o;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "unpackFloatRGBA", function () {
        return e;
      });
      /*
      All material copyright ESRI, All Rights Reserved, unless otherwise specified.
      See https://js.arcgis.com/4.18/esri/copyright.txt for details.
      */


      var r = [1, 256, 65536, 16777216],
          t = [1 / 256, 1 / 65536, 1 / 16777216, 1 / 4294967296],
          n = e(new Uint8ClampedArray([255, 255, 255, 255]));

      function o(t, o) {
        var e = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 0;

        var f = function (r, t, n) {
          if (r < t) return t;
          if (r > n) return n;
          return r;
        }(t, 0, n);

        for (var _t32 = 0; _t32 < 4; _t32++) {
          o[e + _t32] = Math.floor(256 * ((u = f * r[_t32]) - Math.floor(u)));
        }

        var u;
      }

      function e(r) {
        var n = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;
        var o = 0;

        for (var _e19 = 0; _e19 < 4; _e19++) {
          o += r[n + _e19] * t[_e19];
        }

        return o;
      }
      /***/

    },

    /***/
    "XunE":
    /*!**********************************************************************!*\
      !*** ./node_modules/@arcgis/core/symbols/cim/CIMSymbolDrawHelper.js ***!
      \**********************************************************************/

    /*! exports provided: CIMSymbolDrawHelper, C_DEG_TO_RAD, CanvasDrawHelper, EnvDrawHelper, Transformation */

    /***/
    function XunE(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "CIMSymbolDrawHelper", function () {
        return u;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "C_DEG_TO_RAD", function () {
        return c;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "CanvasDrawHelper", function () {
        return _;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "EnvDrawHelper", function () {
        return p;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "Transformation", function () {
        return m;
      });
      /* harmony import */


      var _core_Logger_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ../../core/Logger.js */
      "6S2I");
      /* harmony import */


      var _geometry_support_boundsUtils_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ../../geometry/support/boundsUtils.js */
      "KLE9");
      /* harmony import */


      var _geometry_support_jsonUtils_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ../../geometry/support/jsonUtils.js */
      "qatw");
      /* harmony import */


      var _geometry_support_aaBoundingRect_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ../../geometry/support/aaBoundingRect.js */
      "kYAx");
      /* harmony import */


      var _CIMPlacements_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ./CIMPlacements.js */
      "WPSO");
      /* harmony import */


      var _CIMEffects_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ./CIMEffects.js */
      "/iQf");
      /* harmony import */


      var _CIMOperators_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ./CIMOperators.js */
      "k0QX");
      /* harmony import */


      var _Rect_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! ./Rect.js */
      "Du6U");
      /*
      All material copyright ESRI, All Rights Reserved, unless otherwise specified.
      See https://js.arcgis.com/4.18/esri/copyright.txt for details.
      */


      var c = Math.PI / 180,
          f = _core_Logger_js__WEBPACK_IMPORTED_MODULE_0__["default"].getLogger("esri.symbols.cim.CIMSymbolDrawHelper");

      var m = /*#__PURE__*/function () {
        function m(t) {
          _classCallCheck(this, m);

          this._t = t;
        }

        _createClass(m, [{
          key: "clone",
          value: function clone() {
            var t = this._t;
            return new m(t.slice());
          }
        }, {
          key: "transform",
          value: function transform(t) {
            var s = this._t;
            return [s[0] * t[0] + s[1] * t[1] + s[2], s[3] * t[0] + s[4] * t[1] + s[5]];
          }
        }, {
          key: "scale",
          value: function scale(t, s) {
            var e = this._t;
            return e[0] *= t, e[1] *= t, e[2] *= t, e[3] *= s, e[4] *= s, e[5] *= s, this;
          }
        }, {
          key: "scaleRatio",
          value: function scaleRatio() {
            return Math.sqrt(this._t[0] * this._t[0] + this._t[1] * this._t[1]);
          }
        }, {
          key: "translate",
          value: function translate(t, s) {
            var e = this._t;
            return e[2] += t, e[5] += s, this;
          }
        }, {
          key: "rotate",
          value: function rotate(t) {
            return this.multiply(m.createRotate(t));
          }
        }, {
          key: "multiply",
          value: function multiply(t) {
            var s = this._t,
                e = t._t,
                r = s[0] * e[0] + s[3] * e[1],
                i = s[1] * e[0] + s[4] * e[1],
                o = s[2] * e[0] + s[5] * e[1] + e[2],
                a = s[0] * e[3] + s[3] * e[4],
                n = s[1] * e[3] + s[4] * e[4],
                h = s[2] * e[3] + s[5] * e[4] + e[5];
            return s[0] = r, s[1] = i, s[2] = o, s[3] = a, s[4] = n, s[5] = h, this;
          }
        }], [{
          key: "createIdentity",
          value: function createIdentity() {
            return new m([1, 0, 0, 0, 1, 0]);
          }
        }, {
          key: "createScale",
          value: function createScale(t, s) {
            return new m([t, 0, 0, 0, s, 0]);
          }
        }, {
          key: "createTranslate",
          value: function createTranslate(t, s) {
            return new m([0, 0, t, 0, 0, s]);
          }
        }, {
          key: "createRotate",
          value: function createRotate(t) {
            var s = Math.cos(t),
                e = Math.sin(t);
            return new m([s, -e, 0, e, s, 0]);
          }
        }]);

        return m;
      }();

      var u = /*#__PURE__*/function () {
        function u(t) {
          _classCallCheck(this, u);

          this._transfos = [], this._sizeTransfos = [], this._transfos.push(t || m.createIdentity()), this._sizeTransfos.push(t ? t.scaleRatio() : 1);
        }

        _createClass(u, [{
          key: "transformPt",
          value: function transformPt(t) {
            return this._transfos[this._transfos.length - 1].transform(t);
          }
        }, {
          key: "transformSize",
          value: function transformSize(t) {
            return t * this._sizeTransfos[this._sizeTransfos.length - 1];
          }
        }, {
          key: "back",
          value: function back() {
            return this._transfos[this._transfos.length - 1];
          }
        }, {
          key: "push",
          value: function push(t, s) {
            var e = s ? t.scaleRatio() : 1;
            t.multiply(this.back()), this._transfos.push(t), this._sizeTransfos.push(this._sizeTransfos[this._sizeTransfos.length - 1] * e);
          }
        }, {
          key: "pop",
          value: function pop() {
            this._transfos.splice(-1, 1), this._sizeTransfos.splice(-1, 1);
          }
        }, {
          key: "drawSymbol",
          value: function drawSymbol(t, s) {
            if (t) switch (t.type) {
              case "CIMPointSymbol":
              case "CIMLineSymbol":
              case "CIMPolygonSymbol":
                this.drawMultiLayerSymbol(t, s);
            }
          }
        }, {
          key: "drawMultiLayerSymbol",
          value: function drawMultiLayerSymbol(t, s) {
            if (!t) return;
            var e = t.symbolLayers;
            if (!e) return;
            var r = t.effects;

            if (r) {
              var _t33 = this.executeEffects(r, s);

              if (_t33) {
                var _s52 = _t33.next();

                for (; _s52;) {
                  this.drawSymbolLayers(e, _s52), _s52 = _t33.next();
                }
              }
            } else this.drawSymbolLayers(e, s);
          }
        }, {
          key: "executeEffects",
          value: function executeEffects(t, s) {
            var e = new _CIMEffects_js__WEBPACK_IMPORTED_MODULE_5__["SimpleGeometryCursor"](s);

            var _iterator16 = _createForOfIteratorHelper(t),
                _step16;

            try {
              for (_iterator16.s(); !(_step16 = _iterator16.n()).done;) {
                var _s53 = _step16.value;

                var _t34 = Object(_CIMOperators_js__WEBPACK_IMPORTED_MODULE_6__["getEffectOperator"])(_s53);

                _t34 && (e = _t34.execute(e, _s53, 1));
              }
            } catch (err) {
              _iterator16.e(err);
            } finally {
              _iterator16.f();
            }

            return e;
          }
        }, {
          key: "drawSymbolLayers",
          value: function drawSymbolLayers(t, s) {
            var e = t.length;

            for (; e--;) {
              var r = t[e];
              if (!r || !1 === r.enable) continue;
              var i = r.effects;

              if (i) {
                var _t35 = this.executeEffects(i, s);

                if (_t35) {
                  var _s54 = _t35.next();

                  for (; _s54;) {
                    this.drawSymbolLayer(r, _s54), _s54 = _t35.next();
                  }
                }
              } else this.drawSymbolLayer(r, s);
            }
          }
        }, {
          key: "drawSymbolLayer",
          value: function drawSymbolLayer(t, s) {
            switch (t.type) {
              case "CIMSolidFill":
                this.drawSolidFill(s, t.color);
                break;

              case "CIMHatchFill":
                this.drawHatchFill(t, s);
                break;

              case "CIMSolidStroke":
                this.drawSolidStroke(s, t.color, t.width, t.capStyle, t.joinStyle, t.miterLimit);
                break;

              case "CIMCharacterMarker":
              case "CIMPictureMarker":
              case "CIMVectorMarker":
                this.drawMarkerLayer(t, s);
            }
          }
        }, {
          key: "drawHatchFill",
          value: function drawHatchFill(t, s) {
            var e = this._buildHatchPolyline(t, s, 1);

            e && (this.pushClipPath(s), this.drawMultiLayerSymbol(t.lineSymbol, e), this.popClipPath());
          }
        }, {
          key: "drawMarkerLayer",
          value: function drawMarkerLayer(t, s) {
            var e = t.markerPlacement;

            if (e) {
              var r = Object(_CIMOperators_js__WEBPACK_IMPORTED_MODULE_6__["getPlacementOperator"])(e);

              if (r) {
                var i = "CIMMarkerPlacementInsidePolygon" === e.type;
                i && this.pushClipPath(s);
                var o = 1,
                    a = r.execute(s, e, o);

                if (a) {
                  var _s55 = a.next();

                  for (; _s55;) {
                    this.drawMarker(t, _s55), _s55 = a.next();
                  }
                }

                i && this.popClipPath();
              }
            } else {
              var _e20 = new _CIMPlacements_js__WEBPACK_IMPORTED_MODULE_4__["Placement"]();

              _e20.tx = s.x, _e20.ty = s.y, this.drawMarker(t, _e20);
            }
          }
        }, {
          key: "drawMarker",
          value: function drawMarker(t, s) {
            switch (t.type) {
              case "CIMCharacterMarker":
              case "CIMPictureMarker":
                this.drawPictureMarker(t, s);
                break;

              case "CIMVectorMarker":
                this.drawVectorMarker(t, s);
            }
          }
        }, {
          key: "drawPictureMarker",
          value: function drawPictureMarker(t, s) {}
        }, {
          key: "drawVectorMarker",
          value: function drawVectorMarker(t, s) {
            if (!t) return;
            var e = t.markerGraphics;
            if (!e) return;
            var r = t.size,
                i = t.frame,
                o = i ? i.ymax - i.ymin : 0,
                a = r && o ? r / o : 1,
                n = m.createIdentity();
            i && n.translate(.5 * -(i.xmax + i.xmin), .5 * -(i.ymax + i.ymin));
            var h = t.anchorPoint;

            if (h) {
              var _s56 = h.x,
                  _e21 = h.y;
              "Absolute" !== t.anchorPointUnits && i && (_s56 *= i.xmax - i.xmin, _e21 *= i.ymax - i.ymin), n.translate(-_s56, -_e21);
            }

            1 !== a && n.scale(a, a), t.rotation && n.rotate(t.rotation * c), n.translate(t.offsetX || 0, t.offsetY || 0), n.translate(s.tx, s.ty), this.push(n, t.scaleSymbolsProportionally);

            var _iterator17 = _createForOfIteratorHelper(e),
                _step17;

            try {
              for (_iterator17.s(); !(_step17 = _iterator17.n()).done;) {
                var _t36 = _step17.value;
                _t36 && _t36.symbol && _t36.geometry || f.error("Invalid marker graphic", _t36), this.drawSymbol(_t36.symbol, _t36.geometry);
              }
            } catch (err) {
              _iterator17.e(err);
            } finally {
              _iterator17.f();
            }

            this.pop();
          }
        }, {
          key: "_buildHatchPolyline",
          value: function _buildHatchPolyline(t, e, r) {
            var o = (void 0 !== t.separation ? t.separation : 4) * r,
                a = void 0 !== t.rotation ? t.rotation : 0;
            if (0 === o) return null;
            o < 0 && (o = -o);
            var n = 0;
            var h = .5 * o;

            for (; n > h;) {
              n -= o;
            }

            for (; n < -h;) {
              n += o;
            }

            var l = Object(_geometry_support_aaBoundingRect_js__WEBPACK_IMPORTED_MODULE_3__["create"])();
            Object(_geometry_support_boundsUtils_js__WEBPACK_IMPORTED_MODULE_1__["getBoundsXY"])(l, e), l[0] -= h, l[1] -= h, l[2] += h, l[3] += h;
            var f = [[l[0], l[1]], [l[0], l[3]], [l[2], l[3]], [l[2], l[1]]];

            for (; a > 180;) {
              a -= 180;
            }

            for (; a < 0;) {
              a += 180;
            }

            var m = Math.cos(a * c),
                _u2 = Math.sin(a * c),
                p = -o * _u2,
                _ = o * m;

            var y, d, x, M;
            n = (void 0 !== t.offsetX ? t.offsetX * r : 0) * _u2 - (void 0 !== t.offsetY ? t.offsetY * r : 0) * m, y = x = Number.MAX_VALUE, d = M = -Number.MAX_VALUE;

            for (var _i9 = 0, _f2 = f; _i9 < _f2.length; _i9++) {
              var _t37 = _f2[_i9];

              var s = _t37[0],
                  _e22 = _t37[1],
                  _r12 = m * s + _u2 * _e22,
                  i = -_u2 * s + m * _e22;

              y = Math.min(y, _r12), x = Math.min(x, i), d = Math.max(d, _r12), M = Math.max(M, i);
            }

            x = Math.floor(x / o) * o;
            var b = m * y - _u2 * x - p * n / o,
                w = _u2 * y + m * x - _ * n / o,
                P = m * d - _u2 * x - p * n / o,
                S = _u2 * d + m * x - _ * n / o;
            var C = 1 + Math.round((M - x) / o),
                k = [];

            for (var _t38 = 0; _t38 < C; _t38++) {
              b += p, w += _, P += p, S += _, k.push([[b, w], [P, S]]);
            }

            return {
              paths: k
            };
          }
        }]);

        return u;
      }();

      var p = /*#__PURE__*/function (_u3) {
        _inherits(p, _u3);

        var _super10 = _createSuper(p);

        function p() {
          var _this9;

          _classCallCheck(this, p);

          _this9 = _super10.call(this), _this9.reset();
          return _this9;
        }

        _createClass(p, [{
          key: "reset",
          value: function reset() {
            this._xmin = this._ymin = 1 / 0, this._xmax = this._ymax = -1 / 0, this._clipCount = 0;
          }
        }, {
          key: "envelope",
          value: function envelope() {
            return new _Rect_js__WEBPACK_IMPORTED_MODULE_7__["default"](this._xmin, this._ymin, this._xmax - this._xmin, this._ymax - this._ymin);
          }
        }, {
          key: "drawSolidFill",
          value: function drawSolidFill(t) {
            !t || this._clipCount > 0 || (Object(_geometry_support_jsonUtils_js__WEBPACK_IMPORTED_MODULE_2__["isPolygon"])(t) ? this._processPath(t.rings, 0) : Object(_geometry_support_jsonUtils_js__WEBPACK_IMPORTED_MODULE_2__["isPolyline"])(t) && this._processPath(t.paths, 0));
          }
        }, {
          key: "drawSolidStroke",
          value: function drawSolidStroke(t, s, i) {
            if (!t || this._clipCount > 0) return;
            var o = .5 * this.transformSize(i);
            Object(_geometry_support_jsonUtils_js__WEBPACK_IMPORTED_MODULE_2__["isPolygon"])(t) ? this._processPath(t.rings, o) : Object(_geometry_support_jsonUtils_js__WEBPACK_IMPORTED_MODULE_2__["isPolyline"])(t) && this._processPath(t.paths, o);
          }
        }, {
          key: "pushClipPath",
          value: function pushClipPath(t) {
            this.drawSolidFill(t), ++this._clipCount;
          }
        }, {
          key: "popClipPath",
          value: function popClipPath() {
            --this._clipCount;
          }
        }, {
          key: "_processPath",
          value: function _processPath(t, s) {
            if (t) {
              var _iterator18 = _createForOfIteratorHelper(t),
                  _step18;

              try {
                for (_iterator18.s(); !(_step18 = _iterator18.n()).done;) {
                  var e = _step18.value;

                  var _t39 = e ? e.length : 0;

                  if (_t39 > 1) {
                    this._merge(this.transformPt(e[0]), s);

                    for (var r = 1; r < _t39; ++r) {
                      this._merge(this.transformPt(e[r]), s);
                    }
                  }
                }
              } catch (err) {
                _iterator18.e(err);
              } finally {
                _iterator18.f();
              }
            }
          }
        }, {
          key: "_merge",
          value: function _merge(t, s) {
            t[0] - s < this._xmin && (this._xmin = t[0] - s), t[0] + s > this._xmax && (this._xmax = t[0] + s), t[1] - s < this._ymin && (this._ymin = t[1] - s), t[1] + s > this._ymax && (this._ymax = t[1] + s);
          }
        }]);

        return p;
      }(u);

      var _ = /*#__PURE__*/function (_u4) {
        _inherits(_, _u4);

        var _super11 = _createSuper(_);

        function _(t, s) {
          var _this10;

          _classCallCheck(this, _);

          _this10 = _super11.call(this, s), _this10._ctx = t;
          return _this10;
        }

        _createClass(_, [{
          key: "drawSolidFill",
          value: function drawSolidFill(t, s) {
            if (!t) return;
            if (Object(_geometry_support_jsonUtils_js__WEBPACK_IMPORTED_MODULE_2__["isPolygon"])(t)) this._buildPath(t.rings, !0);else {
              if (!Object(_geometry_support_jsonUtils_js__WEBPACK_IMPORTED_MODULE_2__["isPolyline"])(t)) return;

              this._buildPath(t.paths, !0);
            }
            var i = this._ctx;
            i.fillStyle = "string" == typeof s ? s : "rgba(" + Math.round(s[0]) + "," + Math.round(s[1]) + "," + Math.round(s[2]) + "," + s[3] / 255 + ")", i.fill("evenodd");
          }
        }, {
          key: "drawSolidStroke",
          value: function drawSolidStroke(t, s, i, o, a, n) {
            if (!t || !s || 0 === i) return;
            if (Object(_geometry_support_jsonUtils_js__WEBPACK_IMPORTED_MODULE_2__["isPolygon"])(t)) this._buildPath(t.rings, !0);else {
              if (!Object(_geometry_support_jsonUtils_js__WEBPACK_IMPORTED_MODULE_2__["isPolyline"])(t)) return;

              this._buildPath(t.paths, !1);
            }
            var h = this._ctx;
            h.strokeStyle = "string" == typeof s ? s : "rgba(" + Math.round(s[0]) + "," + Math.round(s[1]) + "," + Math.round(s[2]) + "," + s[3] / 255 + ")", h.lineWidth = this.transformSize(i) + .5, this._setCapStyle(o), this._setJoinStyle(a), h.miterLimit = n, h.stroke();
          }
        }, {
          key: "pushClipPath",
          value: function pushClipPath(t) {
            this._ctx.save(), Object(_geometry_support_jsonUtils_js__WEBPACK_IMPORTED_MODULE_2__["isPolygon"])(t) ? this._buildPath(t.rings, !0) : Object(_geometry_support_jsonUtils_js__WEBPACK_IMPORTED_MODULE_2__["isPolyline"])(t) && this._buildPath(t.paths, !0), this._ctx.clip("evenodd");
          }
        }, {
          key: "popClipPath",
          value: function popClipPath() {
            this._ctx.restore();
          }
        }, {
          key: "_buildPath",
          value: function _buildPath(t, s) {
            var e = this._ctx;

            if (e.beginPath(), t) {
              var _iterator19 = _createForOfIteratorHelper(t),
                  _step19;

              try {
                for (_iterator19.s(); !(_step19 = _iterator19.n()).done;) {
                  var r = _step19.value;

                  var _t40 = r ? r.length : 0;

                  if (_t40 > 1) {
                    var i = this.transformPt(r[0]);
                    e.moveTo(i[0], i[1]);

                    for (var _s57 = 1; _s57 < _t40; ++_s57) {
                      i = this.transformPt(r[_s57]), e.lineTo(i[0], i[1]);
                    }

                    s && e.closePath();
                  }
                }
              } catch (err) {
                _iterator19.e(err);
              } finally {
                _iterator19.f();
              }
            }
          }
        }, {
          key: "_setCapStyle",
          value: function _setCapStyle(t) {
            switch (t) {
              case "Butt":
                this._ctx.lineCap = "butt";
                break;

              case "Round":
                this._ctx.lineCap = "round";
                break;

              case "Square":
                this._ctx.lineCap = "square";
            }
          }
        }, {
          key: "_setJoinStyle",
          value: function _setJoinStyle(t) {
            switch (t) {
              case "Bevel":
                this._ctx.lineJoin = "bevel";
                break;

              case "Round":
                this._ctx.lineJoin = "round";
                break;

              case "Miter":
                this._ctx.lineJoin = "miter";
            }
          }
        }]);

        return _;
      }(u);
      /***/

    },

    /***/
    "a8c1":
    /*!*****************************************************************************!*\
      !*** ./node_modules/@arcgis/core/views/2d/engine/webgl/util/vvFlagUtils.js ***!
      \*****************************************************************************/

    /*! exports provided: getVVFlags */

    /***/
    function a8c1(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "getVVFlags", function () {
        return e;
      });
      /* harmony import */


      var _enums_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ../enums.js */
      "yE7X");
      /* harmony import */


      var _visualVariablesUtils_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ../visualVariablesUtils.js */
      "NIRN");
      /*
      All material copyright ESRI, All Rights Reserved, unless otherwise specified.
      See https://js.arcgis.com/4.18/esri/copyright.txt for details.
      */


      function e(e) {
        if (!e) return _enums_js__WEBPACK_IMPORTED_MODULE_0__["WGLVVFlag"].NONE;
        var r = 0;

        var _iterator20 = _createForOfIteratorHelper(e),
            _step20;

        try {
          for (_iterator20.s(); !(_step20 = _iterator20.n()).done;) {
            var i = _step20.value;

            if ("size" === i.type) {
              var t = Object(_visualVariablesUtils_js__WEBPACK_IMPORTED_MODULE_1__["getTypeOfSizeVisualVariable"])(i);
              r |= t, "outline" === i.target && (r |= t << 4);
            } else "color" === i.type ? r |= _enums_js__WEBPACK_IMPORTED_MODULE_0__["WGLVVFlag"].COLOR : "opacity" === i.type ? r |= _enums_js__WEBPACK_IMPORTED_MODULE_0__["WGLVVFlag"].OPACITY : "rotation" === i.type && (r |= _enums_js__WEBPACK_IMPORTED_MODULE_0__["WGLVVFlag"].ROTATION);
          }
        } catch (err) {
          _iterator20.e(err);
        } finally {
          _iterator20.f();
        }

        return r;
      }
      /***/

    },

    /***/
    "agE9":
    /*!***********************************************************************!*\
      !*** ./node_modules/@arcgis/core/symbols/cim/effects/EffectOffset.js ***!
      \***********************************************************************/

    /*! exports provided: EffectOffset */

    /***/
    function agE9(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "EffectOffset", function () {
        return o;
      });
      /* harmony import */


      var _geometry_support_jsonUtils_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ../../../geometry/support/jsonUtils.js */
      "qatw");
      /* harmony import */


      var _CurveHelper_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ../CurveHelper.js */
      "/vtc");
      /*
      All material copyright ESRI, All Rights Reserved, unless otherwise specified.
      See https://js.arcgis.com/4.18/esri/copyright.txt for details.
      */


      var o = /*#__PURE__*/function () {
        function o() {
          _classCallCheck(this, o);
        }

        _createClass(o, [{
          key: "execute",
          value: function execute(t, e, s) {
            return new r(t, e, s);
          }
        }], [{
          key: "local",
          value: function local() {
            return null === o.instance && (o.instance = new o()), o.instance;
          }
        }]);

        return o;
      }();

      o.instance = null;

      var r = /*#__PURE__*/function () {
        function r(t, e, s) {
          _classCallCheck(this, r);

          this._inputGeometries = t, this._curveHelper = new _CurveHelper_js__WEBPACK_IMPORTED_MODULE_1__["CurveHelper"](), this._offset = (void 0 !== e.offset ? e.offset : 1) * s, this._method = e.method, this._option = e.option, this._offsetFlattenError = _CurveHelper_js__WEBPACK_IMPORTED_MODULE_1__["PIXEL_TOLERANCE"] * s, this._option;
        }

        _createClass(r, [{
          key: "next",
          value: function next() {
            var i = this._inputGeometries.next();

            for (; i;) {
              if (0 === this._offset) return i;

              if (Object(_geometry_support_jsonUtils_js__WEBPACK_IMPORTED_MODULE_0__["isExtent"])(i)) {
                if ("Rounded" === this._method && this._offset > 0) {
                  var t = [[i.xmin, i.ymin], [i.xmin, i.ymax], [i.xmax, i.ymax], [i.xmax, i.ymin], [i.xmin, i.ymin]],
                      e = this._curveHelper.offset(t, this._offset, this._method, 4, this._offsetFlattenError);

                  return e ? {
                    rings: [e]
                  } : null;
                }

                if (Math.min(i.xmax - i.xmin, i.ymax - i.ymin) + 2 * this._offset > 0) return {
                  xmin: i.xmin - this._offset,
                  xmax: i.xmax + this._offset,
                  ymin: i.ymin - this._offset,
                  ymax: i.ymax + this._offset
                };
              }

              if (Object(_geometry_support_jsonUtils_js__WEBPACK_IMPORTED_MODULE_0__["isPolygon"])(i)) {
                var _t41 = [];

                var _iterator21 = _createForOfIteratorHelper(i.rings),
                    _step21;

                try {
                  for (_iterator21.s(); !(_step21 = _iterator21.n()).done;) {
                    var _e23 = _step21.value;

                    var s = this._curveHelper.offset(_e23, this._offset, this._method, 4, this._offsetFlattenError);

                    s && _t41.push(s);
                  }
                } catch (err) {
                  _iterator21.e(err);
                } finally {
                  _iterator21.f();
                }

                if (_t41.length) return {
                  rings: _t41
                };
              }

              if (Object(_geometry_support_jsonUtils_js__WEBPACK_IMPORTED_MODULE_0__["isPolyline"])(i)) {
                var _t42 = [];

                var _iterator22 = _createForOfIteratorHelper(i.paths),
                    _step22;

                try {
                  for (_iterator22.s(); !(_step22 = _iterator22.n()).done;) {
                    var _e24 = _step22.value;

                    var _s58 = this._curveHelper.offset(_e24, this._offset, this._method, 4, this._offsetFlattenError);

                    _s58 && _t42.push(_s58);
                  }
                } catch (err) {
                  _iterator22.e(err);
                } finally {
                  _iterator22.f();
                }

                if (_t42.length) return {
                  paths: _t42
                };
              }

              i = this._inputGeometries.next();
            }

            return null;
          }
        }]);

        return r;
      }();
      /***/

    },

    /***/
    "cG1k":
    /*!************************************************************************************!*\
      !*** ./node_modules/@arcgis/core/symbols/cim/placements/PlacementPolygonCenter.js ***!
      \************************************************************************************/

    /*! exports provided: PlacementPolygonCenter */

    /***/
    function cG1k(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "PlacementPolygonCenter", function () {
        return s;
      });
      /* harmony import */


      var _geometry_support_boundsUtils_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ../../../geometry/support/boundsUtils.js */
      "KLE9");
      /* harmony import */


      var _geometry_support_aaBoundingRect_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ../../../geometry/support/aaBoundingRect.js */
      "kYAx");
      /* harmony import */


      var _CIMPlacements_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ../CIMPlacements.js */
      "WPSO");
      /*
      All material copyright ESRI, All Rights Reserved, unless otherwise specified.
      See https://js.arcgis.com/4.18/esri/copyright.txt for details.
      */


      var s = /*#__PURE__*/function () {
        function s() {
          _classCallCheck(this, s);
        }

        _createClass(s, [{
          key: "execute",
          value: function execute(t, e, n) {
            return new o(t, e, n);
          }
        }], [{
          key: "local",
          value: function local() {
            return null === s.instance && (s.instance = new s()), s.instance;
          }
        }]);

        return s;
      }();

      s.instance = null;

      var o = /*#__PURE__*/function () {
        function o(t, e, s) {
          _classCallCheck(this, o);

          this._geometry = t, this._offsetX = void 0 !== e.offsetX ? e.offsetX * s : 0, this._offsetY = void 0 !== e.offsetY ? e.offsetY * s : 0, this._method = void 0 !== e.method ? e.method : "OnPolygon", this._internalPlacement = new _CIMPlacements_js__WEBPACK_IMPORTED_MODULE_2__["Placement"]();
        }

        _createClass(o, [{
          key: "next",
          value: function next() {
            var t = this._geometry;
            return this._geometry = null, t && void 0 !== t.rings ? this._polygonCenter(t) : null;
          }
        }, {
          key: "_polygonCenter",
          value: function _polygonCenter(n) {
            var s = !1;

            switch (this._method) {
              case "OnPolygon":
              default:
              case "CenterOfMass":
              case "BoundingBoxCenter":
                {
                  var _o5 = Object(_geometry_support_aaBoundingRect_js__WEBPACK_IMPORTED_MODULE_1__["create"])();

                  Object(_geometry_support_boundsUtils_js__WEBPACK_IMPORTED_MODULE_0__["getBoundsXY"])(_o5, n), this._internalPlacement.setTranslate((_o5[2] + _o5[0]) / 2 + this._offsetX, (_o5[3] + _o5[1]) / 2 - this._offsetY), s = !0;
                  break;
                }
            }

            return s ? this._internalPlacement : null;
          }
        }]);

        return o;
      }();
      /***/

    },

    /***/
    "e+Fw":
    /*!***********************************************************************************!*\
      !*** ./node_modules/@arcgis/core/views/2d/engine/webgl/collisions/BoundingBox.js ***!
      \***********************************************************************************/

    /*! exports provided: default */

    /***/
    function eFw(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony import */


      var _core_mathUtils_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ../../../../../core/mathUtils.js */
      "OKTS");
      /* harmony import */


      var _chunks_vec2f32_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ../../../../../chunks/vec2f32.js */
      "c46T");
      /*
      All material copyright ESRI, All Rights Reserved, unless otherwise specified.
      See https://js.arcgis.com/4.18/esri/copyright.txt for details.
      */


      var e = /*#__PURE__*/function () {
        function e(t, _e25, s, r) {
          _classCallCheck(this, e);

          this.center = Object(_chunks_vec2f32_js__WEBPACK_IMPORTED_MODULE_1__["f"])(t, _e25), this.centerT = Object(_chunks_vec2f32_js__WEBPACK_IMPORTED_MODULE_1__["c"])(), this.halfWidth = s / 2, this.halfHeight = r / 2, this.width = s, this.height = r;
        }

        _createClass(e, [{
          key: "x",
          get: function get() {
            return this.center[0];
          },
          set: function set(t) {
            this.center[0] = t;
          }
        }, {
          key: "y",
          get: function get() {
            return this.center[1];
          },
          set: function set(t) {
            this.center[1] = t;
          }
        }, {
          key: "blX",
          get: function get() {
            return this.center[0] + this.halfWidth;
          }
        }, {
          key: "blY",
          get: function get() {
            return this.center[1] + this.halfHeight;
          }
        }, {
          key: "trX",
          get: function get() {
            return this.center[0] - this.halfWidth;
          }
        }, {
          key: "trY",
          get: function get() {
            return this.center[1] - this.halfHeight;
          }
        }, {
          key: "xmin",
          get: function get() {
            return this.x - this.halfWidth;
          }
        }, {
          key: "xmax",
          get: function get() {
            return this.x + this.halfWidth;
          }
        }, {
          key: "ymin",
          get: function get() {
            return this.y - this.halfHeight;
          }
        }, {
          key: "ymax",
          get: function get() {
            return this.y + this.halfHeight;
          }
        }, {
          key: "clone",
          value: function clone() {
            return new e(this.x, this.y, this.width, this.height);
          }
        }, {
          key: "serialize",
          value: function serialize(t) {
            return t.writeF32(this.center[0]), t.writeF32(this.center[1]), t.push(this.width), t.push(this.height), t;
          }
        }, {
          key: "findCollisionDelta",
          value: function findCollisionDelta(h) {
            var i = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 4;

            var _e26 = Math.abs(h.centerT[0] - this.centerT[0]),
                s = Math.abs(h.centerT[1] - this.centerT[1]),
                r = (h.halfWidth + this.halfWidth + i) / _e26,
                n = (h.halfHeight + this.halfHeight + i) / s,
                a = Math.min(r, n);

            return Object(_core_mathUtils_js__WEBPACK_IMPORTED_MODULE_0__["log2"])(a);
          }
        }, {
          key: "extend",
          value: function extend(t) {
            var h = Math.min(this.xmin, t.xmin),
                i = Math.min(this.ymin, t.ymin),
                _e27 = Math.max(this.xmax, t.xmax) - h,
                s = Math.max(this.ymax, t.ymax) - i,
                r = h + _e27 / 2,
                n = i + s / 2;

            this.width = _e27, this.height = s, this.halfWidth = _e27 / 2, this.halfHeight = s / 2, this.x = r, this.y = n;
          }
        }], [{
          key: "deserialize",
          value: function deserialize(t) {
            var h = t.readF32(),
                i = t.readF32(),
                s = t.readInt32(),
                r = t.readInt32();
            return new e(h, i, s, r);
          }
        }]);

        return e;
      }();
      /* harmony default export */


      __webpack_exports__["default"] = e;
      /***/
    },

    /***/
    "eT81":
    /*!******************************************************************!*\
      !*** ./node_modules/@arcgis/core/symbols/cim/CIMSymbolHelper.js ***!
      \******************************************************************/

    /*! exports provided: CIMSymbolHelper, OverrideHelper, SymbolHelper */

    /***/
    function eT81(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "CIMSymbolHelper", function () {
        return y;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "OverrideHelper", function () {
        return S;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "SymbolHelper", function () {
        return h;
      });
      /* harmony import */


      var _core_Logger_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ../../core/Logger.js */
      "6S2I");
      /* harmony import */


      var _core_mathUtils_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ../../core/mathUtils.js */
      "OKTS");
      /* harmony import */


      var _Color_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ../../Color.js */
      "nvBr");
      /* harmony import */


      var _CIMPlacements_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./CIMPlacements.js */
      "WPSO");
      /* harmony import */


      var _CIMSymbolDrawHelper_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ./CIMSymbolDrawHelper.js */
      "XunE");
      /* harmony import */


      var _packingUtils_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ./packingUtils.js */
      "X4zr");
      /*
      All material copyright ESRI, All Rights Reserved, unless otherwise specified.
      See https://js.arcgis.com/4.18/esri/copyright.txt for details.
      */


      var n = Math.PI,
          l = n / 2,
          m = _core_Logger_js__WEBPACK_IMPORTED_MODULE_0__["default"].getLogger("esri.symbols.cim.CIMSymbolHelper");

      function f(e, t) {
        switch (t.type) {
          case "CIMSymbolReference":
            {
              var r = {
                type: "point",
                x: 0,
                y: 0
              };
              e.drawSymbol(t.symbol, r);
              break;
            }

          case "CIMPointSymbol":
            {
              var _r13 = {
                type: "point",
                x: 0,
                y: 0
              };
              e.drawSymbol(t, _r13);
              break;
            }

          case "CIMTextSymbol":
            break;

          case "CIMVectorMarker":
            {
              var _r14 = new _CIMPlacements_js__WEBPACK_IMPORTED_MODULE_3__["Placement"]();

              e.drawMarker(t, _r14);
              break;
            }
        }

        return e.envelope();
      }

      var y = /*#__PURE__*/function () {
        function y() {
          _classCallCheck(this, y);
        }

        _createClass(y, null, [{
          key: "getEnvelope",
          value: function getEnvelope(e) {
            var t = new _CIMSymbolDrawHelper_js__WEBPACK_IMPORTED_MODULE_4__["EnvDrawHelper"]();

            if (Array.isArray(e)) {
              var r;

              var _iterator23 = _createForOfIteratorHelper(e),
                  _step23;

              try {
                for (_iterator23.s(); !(_step23 = _iterator23.n()).done;) {
                  var o = _step23.value;
                  r ? r.union(f(t, o)) : r = f(t, o);
                }
              } catch (err) {
                _iterator23.e(err);
              } finally {
                _iterator23.f();
              }

              return r;
            }

            return f(t, e);
          }
        }, {
          key: "getTextureAnchor",
          value: function getTextureAnchor(e) {
            var t = this.getEnvelope(e);
            if (!t || t.width <= 0 || t.height <= 0) return [0, 0, 0];
            var r = 96 / 72,
                o = (t.x + .5 * t.width) * r,
                a = -(t.y + .5 * t.height) * r,
                s = t.width * r + 2,
                i = t.height * r + 2;
            return [o / s, a / i, i];
          }
        }, {
          key: "rasterize",
          value: function rasterize(e, t, r) {
            var a = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : !0;
            var c = r || this.getEnvelope(t);
            if (!c || c.width <= 0 || c.height <= 0) return [null, 0, 0, 0, 0];
            var n = 96 / 72,
                l = (c.x + .5 * c.width) * n,
                m = (c.y + .5 * c.height) * n;
            e.width = c.width * n, e.height = c.height * n, r || (e.width += 2, e.height += 2);

            var f = e.getContext("2d"),
                _y = _CIMSymbolDrawHelper_js__WEBPACK_IMPORTED_MODULE_4__["Transformation"].createScale(n, -n);

            _y.translate(.5 * e.width - l, .5 * e.height + m);

            var h = new _CIMSymbolDrawHelper_js__WEBPACK_IMPORTED_MODULE_4__["CanvasDrawHelper"](f, _y);

            switch (t.type) {
              case "CIMPointSymbol":
                {
                  var _e28 = {
                    type: "point",
                    x: 0,
                    y: 0
                  };
                  h.drawSymbol(t, _e28);
                  break;
                }

              case "CIMVectorMarker":
                {
                  var _e29 = new _CIMPlacements_js__WEBPACK_IMPORTED_MODULE_3__["Placement"]();

                  h.drawMarker(t, _e29);
                  break;
                }
            }

            var S = f.getImageData(0, 0, e.width, e.height),
                p = new Uint8Array(S.data);

            if (a) {
              var _e30;

              for (var _t43 = 0; _t43 < p.length; _t43 += 4) {
                _e30 = p[_t43 + 3] / 255, p[_t43] = p[_t43] * _e30, p[_t43 + 1] = p[_t43 + 1] * _e30, p[_t43 + 2] = p[_t43 + 2] * _e30;
              }
            }

            return [p, e.width, e.height, -l / e.width, -m / e.height];
          }
        }, {
          key: "fromSimpleMarker",
          value: function fromSimpleMarker(e) {
            var t = 50;
            var r, o;
            var a = e.style;

            if ("circle" === a || "esriSMSCircle" === a) {
              var _e31 = .25;

              var _a5 = Math.acos(1 - _e31 / t),
                  _s59 = Math.ceil(n / _a5 / 4);

              0 === _s59 && (_s59 = 1), _a5 = l / _s59, _s59 *= 4;
              var i = [];
              i.push([t, 0]);

              for (var _e32 = 1; _e32 < _s59; _e32++) {
                i.push([t * Math.cos(_e32 * _a5), -50 * Math.sin(_e32 * _a5)]);
              }

              i.push([t, 0]), r = {
                rings: [i]
              }, o = {
                xmin: -50,
                ymin: -50,
                xmax: t,
                ymax: t
              };
            } else if ("cross" === a || "esriSMSCross" === a) {
              var _e33 = 0;
              r = {
                rings: [[[_e33, t], [_e33, _e33], [t, _e33], [t, -_e33], [_e33, -_e33], [_e33, -50], [-_e33, -50], [-_e33, -_e33], [-50, -_e33], [-50, _e33], [-_e33, _e33], [-_e33, t], [_e33, t]]]
              }, o = {
                xmin: -50,
                ymin: -50,
                xmax: t,
                ymax: t
              };
            } else if ("diamond" === a || "esriSMSDiamond" === a) r = {
              rings: [[[-50, 0], [0, t], [t, 0], [0, -50], [-50, 0]]]
            }, o = {
              xmin: -50,
              ymin: -50,
              xmax: t,
              ymax: t
            };else if ("square" === a || "esriSMSSquare" === a) r = {
              rings: [[[-50, -50], [-50, t], [t, t], [t, -50], [-50, -50]]]
            }, o = {
              xmin: -50,
              ymin: -50,
              xmax: t,
              ymax: t
            };else if ("x" === a || "esriSMSX" === a) {
              var _e34 = 0;
              r = {
                rings: [[[0, _e34], [t - _e34, t], [t, t - _e34], [_e34, 0], [t, _e34 - t], [t - _e34, -50], [0, -_e34], [_e34 - t, -50], [-50, _e34 - t], [-_e34, 0], [-50, t - _e34], [_e34 - t, t], [0, _e34]]]
              }, o = {
                xmin: -50,
                ymin: -50,
                xmax: t,
                ymax: t
              };
            } else if ("triangle" === a || "esriSMSTriangle" === a) {
              var _e35 = 100 * .5773502691896257,
                  _t44 = -_e35,
                  _a6 = 2 / 3 * 100,
                  _s60 = _a6 - 100;

              r = {
                rings: [[[_t44, _s60], [0, _a6], [_e35, _s60], [_t44, _s60]]]
              }, o = {
                xmin: _t44,
                ymin: _s60,
                xmax: _e35,
                ymax: _a6
              };
            } else "arrow" !== a && "esriSMSArrow" !== a || (r = {
              rings: [[[-50, 50], [50, 0], [-50, -50], [-33, -20], [-33, 20], [-50, 50]]]
            }, o = {
              xmin: -50,
              ymin: -50,
              xmax: t,
              ymax: t
            });

            var s;

            if (r && o) {
              var _t45 = [{
                type: "CIMSolidFill",
                enable: !0,
                color: e.color
              }];
              e.outline && _t45.push({
                type: "CIMSolidStroke",
                enable: !0,
                width: e.outline.width,
                color: e.outline.color
              });
              var _a7 = {
                type: "CIMPolygonSymbol",
                symbolLayers: _t45
              };
              s = {
                type: "CIMPointSymbol",
                symbolLayers: [{
                  type: "CIMVectorMarker",
                  enable: !0,
                  rotation: e.angle,
                  size: e.size,
                  offsetX: e.xoffset,
                  offsetY: e.yoffset,
                  frame: o,
                  markerGraphics: [{
                    type: "CIMMarkerGraphic",
                    geometry: r,
                    symbol: _a7
                  }]
                }]
              };
            }

            return s;
          }
        }, {
          key: "fromCIMHatchFill",
          value: function fromCIMHatchFill(e) {
            var t = void 0 !== e.separation ? e.separation : 4,
                r = t / 2;
            var o = this._getLineSymbolPeriod(e.lineSymbol) || 4;

            for (; o < 4;) {
              o *= 2;
            }

            var a = o / 2;
            return {
              type: "CIMVectorMarker",
              frame: {
                xmin: -a,
                xmax: a,
                ymin: -r,
                ymax: r
              },
              markerGraphics: [{
                type: "CIMMarkerGraphic",
                geometry: {
                  paths: [[[-a, 0], [a, 0]]]
                },
                symbol: e.lineSymbol
              }],
              size: t
            };
          }
        }, {
          key: "_getLineSymbolPeriod",
          value: function _getLineSymbolPeriod(e) {
            if (e) {
              var t = this._getEffectsRepeat(e.effects);

              if (t) return t;

              if (e.symbolLayers) {
                var _iterator24 = _createForOfIteratorHelper(e.symbolLayers),
                    _step24;

                try {
                  for (_iterator24.s(); !(_step24 = _iterator24.n()).done;) {
                    var _t46 = _step24.value;

                    var _e36 = this._getEffectsRepeat(_t46.effects);

                    if (_e36) return _e36;

                    if (_t46) {
                      var _e37 = this._getPlacementRepeat(_t46.markerPlacement);

                      if (_e37) return _e37;
                    }
                  }
                } catch (err) {
                  _iterator24.e(err);
                } finally {
                  _iterator24.f();
                }
              }
            }

            return 0;
          }
        }, {
          key: "_getEffectsRepeat",
          value: function _getEffectsRepeat(e) {
            if (e) {
              var _iterator25 = _createForOfIteratorHelper(e),
                  _step25;

              try {
                for (_iterator25.s(); !(_step25 = _iterator25.n()).done;) {
                  var t = _step25.value;
                  if (t) switch (t.type) {
                    case "CIMGeometricEffectDashes":
                      {
                        var _e38 = t.dashTemplate;

                        if (_e38 && _e38.length) {
                          var _t47 = 0;

                          var _iterator26 = _createForOfIteratorHelper(_e38),
                              _step26;

                          try {
                            for (_iterator26.s(); !(_step26 = _iterator26.n()).done;) {
                              var r = _step26.value;
                              _t47 += r;
                            }
                          } catch (err) {
                            _iterator26.e(err);
                          } finally {
                            _iterator26.f();
                          }

                          return 1 & _e38.length && (_t47 *= 2), _t47;
                        }

                        break;
                      }

                    case "CIMGeometricEffectWave":
                      return t.period;

                    default:
                      m.error("unsupported geometric effect type ".concat(t.type));
                  }
                }
              } catch (err) {
                _iterator25.e(err);
              } finally {
                _iterator25.f();
              }
            }

            return 0;
          }
        }, {
          key: "_getPlacementRepeat",
          value: function _getPlacementRepeat(e) {
            if (e) switch (e.type) {
              case "CIMMarkerPlacementAlongLineSameSize":
              case "CIMMarkerPlacementAlongLineRandomSize":
              case "CIMMarkerPlacementAlongLineVariableSize":
                {
                  var t = e.placementTemplate;

                  if (t && t.length) {
                    var _e39 = 0;

                    var _iterator27 = _createForOfIteratorHelper(t),
                        _step27;

                    try {
                      for (_iterator27.s(); !(_step27 = _iterator27.n()).done;) {
                        var r = _step27.value;
                        _e39 += r;
                      }
                    } catch (err) {
                      _iterator27.e(err);
                    } finally {
                      _iterator27.f();
                    }

                    return 1 & t.length && (_e39 *= 2), _e39;
                  }

                  break;
                }
            }
            return 0;
          }
        }, {
          key: "fromCIMInsidePolygon",
          value: function fromCIMInsidePolygon(e) {
            var t = e.markerPlacement,
                r = t.stepX / 2,
                o = t.stepY / 2,
                a = {
              xmin: -r,
              xmax: r,
              ymin: -o,
              ymax: o
            },
                s = _objectSpread({
              type: e.type
            }, e);

            s.markerPlacement = null, s.anchorPoint = null;
            return {
              type: "CIMVectorMarker",
              frame: a,
              markerGraphics: [{
                type: "CIMMarkerGraphic",
                geometry: {
                  x: 0,
                  y: 0
                },
                symbol: {
                  type: "CIMPointSymbol",
                  symbolLayers: [s]
                }
              }],
              size: t.stepY
            };
          }
        }, {
          key: "getFillColor",
          value: function getFillColor(e) {
            if (!e) return null;

            switch (e.type) {
              case "CIMPolygonSymbol":
                if (e.symbolLayers) {
                  var _iterator28 = _createForOfIteratorHelper(e.symbolLayers),
                      _step28;

                  try {
                    for (_iterator28.s(); !(_step28 = _iterator28.n()).done;) {
                      var t = _step28.value;

                      var _e40 = y.getFillColor(t);

                      if (null != _e40) return _e40;
                    }
                  } catch (err) {
                    _iterator28.e(err);
                  } finally {
                    _iterator28.f();
                  }
                }

                break;

              case "CIMTextSymbol":
                return y.getFillColor(e.symbol);

              case "CIMSolidFill":
                return e.color;
            }
          }
        }, {
          key: "getStrokeColor",
          value: function getStrokeColor(e) {
            if (e) switch (e.type) {
              case "CIMPolygonSymbol":
              case "CIMLineSymbol":
                if (e.symbolLayers) {
                  var _iterator29 = _createForOfIteratorHelper(e.symbolLayers),
                      _step29;

                  try {
                    for (_iterator29.s(); !(_step29 = _iterator29.n()).done;) {
                      var t = _step29.value;

                      var _e41 = y.getStrokeColor(t);

                      if (void 0 !== _e41) return _e41;
                    }
                  } catch (err) {
                    _iterator29.e(err);
                  } finally {
                    _iterator29.f();
                  }
                }

                break;

              case "CIMTextSymbol":
                return y.getStrokeColor(e.symbol);

              case "CIMSolidStroke":
                return e.color;
            }
          }
        }, {
          key: "getStrokeWidth",
          value: function getStrokeWidth(e) {
            if (e) switch (e.type) {
              case "CIMPolygonSymbol":
              case "CIMLineSymbol":
                if (e.symbolLayers) {
                  var _iterator30 = _createForOfIteratorHelper(e.symbolLayers),
                      _step30;

                  try {
                    for (_iterator30.s(); !(_step30 = _iterator30.n()).done;) {
                      var t = _step30.value;

                      var _e42 = y.getStrokeWidth(t);

                      if (void 0 !== _e42) return _e42;
                    }
                  } catch (err) {
                    _iterator30.e(err);
                  } finally {
                    _iterator30.f();
                  }
                }

                break;

              case "CIMTextSymbol":
                return y.getStrokeWidth(e.symbol);

              case "CIMSolidStroke":
              case "CIMGradientStroke":
              case "CIMPictureStroke":
                return e.width;
            }
          }
        }, {
          key: "getSize",
          value: function getSize(e) {
            if (e) switch (e.type) {
              case "CIMPointSymbol":
              case "CIMLineSymbol":
              case "CIMPolygonSymbol":
                {
                  var t = 0;

                  if (e.symbolLayers) {
                    var _iterator31 = _createForOfIteratorHelper(e.symbolLayers),
                        _step31;

                    try {
                      for (_iterator31.s(); !(_step31 = _iterator31.n()).done;) {
                        var r = _step31.value;

                        var _e43 = y.getSize(r);

                        _e43 > t && (t = _e43);
                      }
                    } catch (err) {
                      _iterator31.e(err);
                    } finally {
                      _iterator31.f();
                    }
                  }

                  return t;
                }

              case "CIMSolidStroke":
              case "CIMPictureStroke":
              case "CIMGradientStroke":
                return e.width;

              case "CIMCharacterMarker":
              case "CIMPictureMarker":
              case "CIMVectorMarker":
                return e.size;
            }
          }
        }, {
          key: "getMarkerScaleRatio",
          value: function getMarkerScaleRatio(e) {
            if (e) switch (e.type) {
              case "CIMVectorMarker":
                if (!1 !== e.scaleSymbolsProportionally && e.frame) {
                  var t = e.frame.ymax - e.frame.ymin;
                  return e.size / t;
                }

            }
            return 1;
          }
        }]);

        return y;
      }();

      var h = /*#__PURE__*/function () {
        function h() {
          _classCallCheck(this, h);
        }

        _createClass(h, null, [{
          key: "rasterizeSimpleFill",
          value: function rasterizeSimpleFill(e, r, o) {
            "solid" !== r && "none" !== r && "esriSFSSolid" !== r && "esriSFSNull" !== r || console.error("Unexpected: style does not require rasterization");
            var a = Object(_core_mathUtils_js__WEBPACK_IMPORTED_MODULE_1__["nextPowerOfTwo"])(Math.ceil(o)),
                s = this._isHorizontalOrVertical(r) ? 8 * a : 16 * a,
                i = 2 * a;
            e.width = s, e.height = s;
            var c = e.getContext("2d");
            c.strokeStyle = "#FFFFFF", c.lineWidth = a, c.beginPath(), "vertical" !== r && "cross" !== r && "esriSFSCross" !== r && "esriSFSVertical" !== r || (c.moveTo(s / 2, -i), c.lineTo(s / 2, s + i)), "horizontal" !== r && "cross" !== r && "esriSFSCross" !== r && "esriSFSHorizontal" !== r || (c.moveTo(-i, s / 2), c.lineTo(s + i, s / 2)), "forward-diagonal" !== r && "diagonal-cross" !== r && "esriSFSDiagonalCross" !== r && "esriSFSForwardDiagonal" !== r || (c.moveTo(-i, -i), c.lineTo(s + i, s + i), c.moveTo(s - i, -i), c.lineTo(s + i, i), c.moveTo(-i, s - i), c.lineTo(i, s + i)), "backward-diagonal" !== r && "diagonal-cross" !== r && "esriSFSBackwardDiagonal" !== r && "esriSFSDiagonalCross" !== r || (c.moveTo(s + i, -i), c.lineTo(-i, s + i), c.moveTo(i, -i), c.lineTo(-i, i), c.moveTo(s + i, s - i), c.lineTo(s - i, s + i)), c.stroke();
            var n = c.getImageData(0, 0, e.width, e.height),
                l = new Uint8Array(n.data);
            var m;

            for (var _e44 = 0; _e44 < l.length; _e44 += 4) {
              m = l[_e44 + 3] / 255, l[_e44] = l[_e44] * m, l[_e44 + 1] = l[_e44 + 1] * m, l[_e44 + 2] = l[_e44 + 2] * m;
            }

            return [l, e.width, e.height];
          }
        }, {
          key: "rasterizeSimpleLine",
          value: function rasterizeSimpleLine(e, t) {
            var r;

            switch (t) {
              case "butt":
                r = "Butt";
                break;

              case "square":
                r = "Square";
                break;

              default:
                r = "Round";
            }

            var o = "Butt" === r;
            var a;

            switch (e) {
              case "dash":
              case "esriSLSDash":
                a = o ? [4, 3] : [3, 4];
                break;

              case "dash-dot":
              case "esriSLSDashDot":
                a = o ? [4, 3, 1, 3] : [3, 4, 0, 4];
                break;

              case "dot":
              case "esriSLSDot":
                a = o ? [1, 3] : [0, 4];
                break;

              case "long-dash":
              case "esriSLSLongDash":
                a = o ? [8, 3] : [7, 4];
                break;

              case "long-dash-dot":
              case "esriSLSLongDashDot":
                a = o ? [8, 3, 1, 3] : [7, 4, 0, 4];
                break;

              case "long-dash-dot-dot":
              case "esriSLSDashDotDot":
                a = o ? [8, 3, 1, 3, 1, 3] : [7, 4, 0, 4, 0, 4];
                break;

              case "short-dash":
              case "esriSLSShortDash":
                a = o ? [4, 1] : [3, 2];
                break;

              case "short-dash-dot":
              case "esriSLSShortDashDot":
                a = o ? [4, 1, 1, 1] : [3, 2, 0, 2];
                break;

              case "short-dash-dot-dot":
              case "esriSLSShortDashDotDot":
                a = o ? [4, 1, 1, 1, 1, 1] : [3, 2, 0, 2, 0, 2];
                break;

              case "short-dot":
              case "esriSLSShortDot":
                a = o ? [1, 1] : [0, 2];
                break;

              case "solid":
              case "esriSLSSolid":
              case "none":
                m.error("Unexpected: style does not require rasterization"), a = [0, 0];
                break;

              default:
                m.error("Tried to rasterize SLS, but found an unexpected style: ".concat(e, "!")), a = [0, 0];
            }

            return this.rasterizeDash(a, r);
          }
        }, {
          key: "rasterizeDash",
          value: function rasterizeDash(e, t) {
            var r = "Butt" === t,
                o = "Square" === t,
                a = !r && !o,
                s = 15;
            var i = 0;

            var _iterator32 = _createForOfIteratorHelper(e),
                _step32;

            try {
              for (_iterator32.s(); !(_step32 = _iterator32.n()).done;) {
                var _t49 = _step32.value;
                i += _t49;
              }
            } catch (err) {
              _iterator32.e(err);
            } finally {
              _iterator32.f();
            }

            var n = i * s,
                l = 31 * n,
                m = new Float32Array(l),
                f = a ? 225 : s;

            for (var _e45 = 0; _e45 < l; ++_e45) {
              m[_e45] = f;
            }

            var y = 7.5;
            var _h11 = 0,
                S = 0,
                p = !0;

            var _iterator33 = _createForOfIteratorHelper(e),
                _step33;

            try {
              for (_iterator33.s(); !(_step33 = _iterator33.n()).done;) {
                var _t50 = _step33.value;
                _h11 = S, S += _t50 * s;
                var _e47 = _h11;

                for (; _e47 < S;) {
                  var _t51 = 0;

                  for (; _t51 < 31;) {
                    var _s61 = _t51 * n + _e47,
                        _i10 = a ? (_t51 - 15) * (_t51 - 15) : Math.abs(_t51 - 15);

                    m[_s61] = p ? r ? Math.max(Math.max(_h11 + y - _e47, _i10), Math.max(_e47 - S + y, _i10)) : _i10 : a ? Math.min((_e47 - _h11) * (_e47 - _h11) + _i10, (_e47 - S) * (_e47 - S) + _i10) : o ? Math.min(Math.max(_e47 - _h11, _i10), Math.max(S - _e47, _i10)) : Math.min(Math.max(_e47 - _h11 + y, _i10), Math.max(S + y - _e47, _i10)), _t51++;
                  }

                  _e47++;
                }

                p = !p;
              }
            } catch (err) {
              _iterator33.e(err);
            } finally {
              _iterator33.f();
            }

            var d = m.length,
                M = new Uint8Array(4 * d);

            for (var _e46 = 0; _e46 < d; ++_e46) {
              var _t48 = (a ? Math.sqrt(m[_e46]) : m[_e46]) / s;

              Object(_packingUtils_js__WEBPACK_IMPORTED_MODULE_5__["packFloatRGBA"])(_t48, M, 4 * _e46);
            }

            return [M, n, 31];
          }
        }, {
          key: "_isHorizontalOrVertical",
          value: function _isHorizontalOrVertical(e) {
            return "vertical" === e || "horizontal" === e || "cross" === e || "esriSFSCross" === e || "esriSFSVertical" === e || "esriSFSHorizontal" === e;
          }
        }]);

        return h;
      }();

      var S = /*#__PURE__*/function () {
        function S() {
          _classCallCheck(this, S);
        }

        _createClass(S, null, [{
          key: "findApplicableOverrides",
          value: function findApplicableOverrides(e, t, r) {
            if (t) {
              if (e.primitiveName) {
                var o = !1;

                var _iterator34 = _createForOfIteratorHelper(r),
                    _step34;

                try {
                  for (_iterator34.s(); !(_step34 = _iterator34.n()).done;) {
                    var _t52 = _step34.value;

                    if (_t52.primitiveName === e.primitiveName) {
                      o = !0;
                      break;
                    }
                  }
                } catch (err) {
                  _iterator34.e(err);
                } finally {
                  _iterator34.f();
                }

                if (!o) {
                  var _iterator35 = _createForOfIteratorHelper(t),
                      _step35;

                  try {
                    for (_iterator35.s(); !(_step35 = _iterator35.n()).done;) {
                      var _o6 = _step35.value;
                      _o6.primitiveName === e.primitiveName && r.push(_o6);
                    }
                  } catch (err) {
                    _iterator35.e(err);
                  } finally {
                    _iterator35.f();
                  }
                }
              }

              switch (e.type) {
                case "CIMPointSymbol":
                case "CIMLineSymbol":
                case "CIMPolygonSymbol":
                  if (e.effects) {
                    var _iterator36 = _createForOfIteratorHelper(e.effects),
                        _step36;

                    try {
                      for (_iterator36.s(); !(_step36 = _iterator36.n()).done;) {
                        var _o7 = _step36.value;
                        S.findApplicableOverrides(_o7, t, r);
                      }
                    } catch (err) {
                      _iterator36.e(err);
                    } finally {
                      _iterator36.f();
                    }
                  }

                  if (e.symbolLayers) {
                    var _iterator37 = _createForOfIteratorHelper(e.symbolLayers),
                        _step37;

                    try {
                      for (_iterator37.s(); !(_step37 = _iterator37.n()).done;) {
                        var _o8 = _step37.value;
                        S.findApplicableOverrides(_o8, t, r);
                      }
                    } catch (err) {
                      _iterator37.e(err);
                    } finally {
                      _iterator37.f();
                    }
                  }

                  break;

                case "CIMTextSymbol":
                  break;

                case "CIMSolidStroke":
                case "CIMPictureStroke":
                case "CIMGradientStroke":
                case "CIMSolidFill":
                case "CIMPictureFill":
                case "CIMHatchFill":
                case "CIMGradientFill":
                case "CIMVectorMarker":
                case "CIMCharacterMarker":
                case "CIMPictureMarker":
                  if (e.effects) {
                    var _iterator38 = _createForOfIteratorHelper(e.effects),
                        _step38;

                    try {
                      for (_iterator38.s(); !(_step38 = _iterator38.n()).done;) {
                        var _o9 = _step38.value;
                        S.findApplicableOverrides(_o9, t, r);
                      }
                    } catch (err) {
                      _iterator38.e(err);
                    } finally {
                      _iterator38.f();
                    }
                  }

                  if (e.markerPlacement && S.findApplicableOverrides(e.markerPlacement, t, r), "CIMVectorMarker" === e.type) {
                    if (e.markerGraphics) {
                      var _iterator39 = _createForOfIteratorHelper(e.markerGraphics),
                          _step39;

                      try {
                        for (_iterator39.s(); !(_step39 = _iterator39.n()).done;) {
                          var _o10 = _step39.value;
                          S.findApplicableOverrides(_o10, t, r), S.findApplicableOverrides(_o10.symbol, t, r);
                        }
                      } catch (err) {
                        _iterator39.e(err);
                      } finally {
                        _iterator39.f();
                      }
                    }
                  } else "CIMCharacterMarker" === e.type ? S.findApplicableOverrides(e.symbol, t, r) : "CIMHatchFill" === e.type && S.findApplicableOverrides(e.lineSymbol, t, r);

              }
            }
          }
        }, {
          key: "applyOverrides",
          value: function applyOverrides(e, t, r, o) {
            if (!t) return;

            if (e.primitiveName) {
              var _iterator40 = _createForOfIteratorHelper(t),
                  _step40;

              try {
                for (_iterator40.s(); !(_step40 = _iterator40.n()).done;) {
                  var s = _step40.value;

                  if (s.primitiveName === e.primitiveName) {
                    var _t53 = (a = s.propertyName) ? a.charAt(0).toLowerCase() + a.substr(1) : a;

                    if (o && o.push({
                      cim: e,
                      nocapPropertyName: _t53,
                      value: e[_t53]
                    }), s.expression && (s.value = S.toValue(s.propertyName, s.expression)), r) {
                      var _t54 = !1;

                      var _iterator41 = _createForOfIteratorHelper(r),
                          _step41;

                      try {
                        for (_iterator41.s(); !(_step41 = _iterator41.n()).done;) {
                          var _o11 = _step41.value;
                          _o11.primitiveName === e.primitiveName && (_t54 = !0);
                        }
                      } catch (err) {
                        _iterator41.e(err);
                      } finally {
                        _iterator41.f();
                      }

                      _t54 || r.push(s);
                    }

                    e[_t53] = s.value;
                  }
                }
              } catch (err) {
                _iterator40.e(err);
              } finally {
                _iterator40.f();
              }
            }

            var a;

            switch (e.type) {
              case "CIMPointSymbol":
              case "CIMLineSymbol":
              case "CIMPolygonSymbol":
                if (e.effects) {
                  var _iterator42 = _createForOfIteratorHelper(e.effects),
                      _step42;

                  try {
                    for (_iterator42.s(); !(_step42 = _iterator42.n()).done;) {
                      var _a8 = _step42.value;
                      S.applyOverrides(_a8, t, r, o);
                    }
                  } catch (err) {
                    _iterator42.e(err);
                  } finally {
                    _iterator42.f();
                  }
                }

                if (e.symbolLayers) {
                  var _iterator43 = _createForOfIteratorHelper(e.symbolLayers),
                      _step43;

                  try {
                    for (_iterator43.s(); !(_step43 = _iterator43.n()).done;) {
                      var _a9 = _step43.value;
                      S.applyOverrides(_a9, t, r, o);
                    }
                  } catch (err) {
                    _iterator43.e(err);
                  } finally {
                    _iterator43.f();
                  }
                }

                break;

              case "CIMTextSymbol":
                break;

              case "CIMSolidStroke":
              case "CIMSolidFill":
              case "CIMVectorMarker":
                if (e.effects) {
                  var _iterator44 = _createForOfIteratorHelper(e.effects),
                      _step44;

                  try {
                    for (_iterator44.s(); !(_step44 = _iterator44.n()).done;) {
                      var _a10 = _step44.value;
                      S.applyOverrides(_a10, t, r, o);
                    }
                  } catch (err) {
                    _iterator44.e(err);
                  } finally {
                    _iterator44.f();
                  }
                }

                if ("CIMVectorMarker" === e.type && e.markerGraphics) {
                  var _iterator45 = _createForOfIteratorHelper(e.markerGraphics),
                      _step45;

                  try {
                    for (_iterator45.s(); !(_step45 = _iterator45.n()).done;) {
                      var _a11 = _step45.value;
                      S.applyOverrides(_a11, t, r, o), S.applyOverrides(_a11.symbol, t, r, o);
                    }
                  } catch (err) {
                    _iterator45.e(err);
                  } finally {
                    _iterator45.f();
                  }
                }

            }
          }
        }, {
          key: "restoreOverrides",
          value: function restoreOverrides(e) {
            var _iterator46 = _createForOfIteratorHelper(e),
                _step46;

            try {
              for (_iterator46.s(); !(_step46 = _iterator46.n()).done;) {
                var t = _step46.value;
                t.cim[t.nocapPropertyName] = t.value;
              }
            } catch (err) {
              _iterator46.e(err);
            } finally {
              _iterator46.f();
            }
          }
        }, {
          key: "buildOverrideKey",
          value: function buildOverrideKey(e) {
            var t = "";

            var _iterator47 = _createForOfIteratorHelper(e),
                _step47;

            try {
              for (_iterator47.s(); !(_step47 = _iterator47.n()).done;) {
                var r = _step47.value;
                void 0 !== r.value && (t += "".concat(r.primitiveName).concat(r.propertyName).concat(JSON.stringify(r.value)));
              }
            } catch (err) {
              _iterator47.e(err);
            } finally {
              _iterator47.f();
            }

            return t;
          }
        }, {
          key: "toValue",
          value: function toValue(e, t) {
            if ("DashTemplate" === e) return t.split(" ").map(function (e) {
              return Number(e);
            });

            if ("Color" === e) {
              var _e48 = new _Color_js__WEBPACK_IMPORTED_MODULE_2__["default"](t).toRgba();

              return _e48[3] *= 255, _e48;
            }

            return t;
          }
        }]);

        return S;
      }();
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
    "k0QX":
    /*!***************************************************************!*\
      !*** ./node_modules/@arcgis/core/symbols/cim/CIMOperators.js ***!
      \***************************************************************/

    /*! exports provided: getEffectOperator, getPlacementOperator */

    /***/
    function k0QX(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "getEffectOperator", function () {
        return G;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "getPlacementOperator", function () {
        return A;
      });
      /* harmony import */


      var _effects_EffectAddControlPoints_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ./effects/EffectAddControlPoints.js */
      "tdjz");
      /* harmony import */


      var _effects_EffectArrow_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./effects/EffectArrow.js */
      "E/5U");
      /* harmony import */


      var _effects_EffectBuffer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./effects/EffectBuffer.js */
      "PiQZ");
      /* harmony import */


      var _effects_EffectCut_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./effects/EffectCut.js */
      "vxUa");
      /* harmony import */


      var _effects_EffectDashes_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ./effects/EffectDashes.js */
      "GQfk");
      /* harmony import */


      var _effects_EffectDonut_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ./effects/EffectDonut.js */
      "8YkW");
      /* harmony import */


      var _effects_EffectJog_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ./effects/EffectJog.js */
      "l263");
      /* harmony import */


      var _effects_EffectMove_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! ./effects/EffectMove.js */
      "QPyG");
      /* harmony import */


      var _effects_EffectOffset_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! ./effects/EffectOffset.js */
      "agE9");
      /* harmony import */


      var _effects_EffectReverse_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! ./effects/EffectReverse.js */
      "Q/g2");
      /* harmony import */


      var _effects_EffectRotate_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
      /*! ./effects/EffectRotate.js */
      "J8sa");
      /* harmony import */


      var _effects_EffectScale_js__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
      /*! ./effects/EffectScale.js */
      "Sld3");
      /* harmony import */


      var _effects_EffectWave_js__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
      /*! ./effects/EffectWave.js */
      "8Fik");
      /* harmony import */


      var _placements_PlacementAlongLineSameSize_js__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
      /*! ./placements/PlacementAlongLineSameSize.js */
      "6BGx");
      /* harmony import */


      var _placements_PlacementAtExtremities_js__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(
      /*! ./placements/PlacementAtExtremities.js */
      "01wM");
      /* harmony import */


      var _placements_PlacementAtRatioPositions_js__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(
      /*! ./placements/PlacementAtRatioPositions.js */
      "Nl1v");
      /* harmony import */


      var _placements_PlacementInsidePolygon_js__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(
      /*! ./placements/PlacementInsidePolygon.js */
      "pckB");
      /* harmony import */


      var _placements_PlacementOnLine_js__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(
      /*! ./placements/PlacementOnLine.js */
      "CUuX");
      /* harmony import */


      var _placements_PlacementOnVertices_js__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(
      /*! ./placements/PlacementOnVertices.js */
      "MbPc");
      /* harmony import */


      var _placements_PlacementPolygonCenter_js__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(
      /*! ./placements/PlacementPolygonCenter.js */
      "cG1k");
      /*
      All material copyright ESRI, All Rights Reserved, unless otherwise specified.
      See https://js.arcgis.com/4.18/esri/copyright.txt for details.
      */


      function G(p) {
        if (!p) return null;

        switch (p.type) {
          case "CIMGeometricEffectAddControlPoints":
            return _effects_EffectAddControlPoints_js__WEBPACK_IMPORTED_MODULE_0__["EffectAddControlPoints"].local();

          case "CIMGeometricEffectArrow":
            return _effects_EffectArrow_js__WEBPACK_IMPORTED_MODULE_1__["EffectArrow"].local();

          case "CIMGeometricEffectBuffer":
            return _effects_EffectBuffer_js__WEBPACK_IMPORTED_MODULE_2__["EffectBuffer"].local();

          case "CIMGeometricEffectCut":
            return _effects_EffectCut_js__WEBPACK_IMPORTED_MODULE_3__["EffectCut"].local();

          case "CIMGeometricEffectDashes":
            return _effects_EffectDashes_js__WEBPACK_IMPORTED_MODULE_4__["EffectDashes"].local();

          case "CIMGeometricEffectDonut":
            return _effects_EffectDonut_js__WEBPACK_IMPORTED_MODULE_5__["EffectDonut"].local();

          case "CIMGeometricEffectJog":
            return _effects_EffectJog_js__WEBPACK_IMPORTED_MODULE_6__["EffectJog"].local();

          case "CIMGeometricEffectMove":
            return _effects_EffectMove_js__WEBPACK_IMPORTED_MODULE_7__["EffectMove"].local();

          case "CIMGeometricEffectOffset":
            return _effects_EffectOffset_js__WEBPACK_IMPORTED_MODULE_8__["EffectOffset"].local();

          case "CIMGeometricEffectReverse":
            return _effects_EffectReverse_js__WEBPACK_IMPORTED_MODULE_9__["EffectReverse"].local();

          case "CIMGeometricEffectRotate":
            return _effects_EffectRotate_js__WEBPACK_IMPORTED_MODULE_10__["EffectRotate"].local();

          case "CIMGeometricEffectScale":
            return _effects_EffectScale_js__WEBPACK_IMPORTED_MODULE_11__["EffectScale"].local();

          case "CIMGeometricEffectWave":
            return _effects_EffectWave_js__WEBPACK_IMPORTED_MODULE_12__["EffectWave"].local();
        }

        return null;
      }

      function A(e) {
        if (!e) return null;

        switch (e.type) {
          case "CIMMarkerPlacementAlongLineSameSize":
            return _placements_PlacementAlongLineSameSize_js__WEBPACK_IMPORTED_MODULE_13__["PlacementAlongLineSameSize"].local();

          case "CIMMarkerPlacementAtExtremities":
            return _placements_PlacementAtExtremities_js__WEBPACK_IMPORTED_MODULE_14__["PlacementAtExtremities"].local();

          case "CIMMarkerPlacementAtRatioPositions":
            return _placements_PlacementAtRatioPositions_js__WEBPACK_IMPORTED_MODULE_15__["PlacementAtRatioPositions"].local();

          case "CIMMarkerPlacementInsidePolygon":
            return _placements_PlacementInsidePolygon_js__WEBPACK_IMPORTED_MODULE_16__["PlacementInsidePolygon"].local();

          case "CIMMarkerPlacementOnLine":
            return _placements_PlacementOnLine_js__WEBPACK_IMPORTED_MODULE_17__["PlacementOnLine"].local();

          case "CIMMarkerPlacementOnVertices":
            return _placements_PlacementOnVertices_js__WEBPACK_IMPORTED_MODULE_18__["PlacementOnVertices"].local();

          case "CIMMarkerPlacementPolygonCenter":
            return _placements_PlacementPolygonCenter_js__WEBPACK_IMPORTED_MODULE_19__["PlacementPolygonCenter"].local();
        }

        return null;
      }
      /***/

    },

    /***/
    "l263":
    /*!********************************************************************!*\
      !*** ./node_modules/@arcgis/core/symbols/cim/effects/EffectJog.js ***!
      \********************************************************************/

    /*! exports provided: EffectJog */

    /***/
    function l263(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "EffectJog", function () {
        return s;
      });
      /* harmony import */


      var _CIMCursor_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ../CIMCursor.js */
      "tqcG");
      /* harmony import */


      var _CurveHelper_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ../CurveHelper.js */
      "/vtc");
      /*
      All material copyright ESRI, All Rights Reserved, unless otherwise specified.
      See https://js.arcgis.com/4.18/esri/copyright.txt for details.
      */


      var s = /*#__PURE__*/function () {
        function s() {
          _classCallCheck(this, s);
        }

        _createClass(s, [{
          key: "execute",
          value: function execute(t, i, _s62) {
            return new e(t, i, _s62);
          }
        }], [{
          key: "local",
          value: function local() {
            return null === s.instance && (s.instance = new s()), s.instance;
          }
        }]);

        return s;
      }();

      s.instance = null;

      var e = /*#__PURE__*/function (_CIMCursor_js__WEBPAC8) {
        _inherits(e, _CIMCursor_js__WEBPAC8);

        var _super12 = _createSuper(e);

        function e(t, s, _e49) {
          var _this11;

          _classCallCheck(this, e);

          _this11 = _super12.call(this, t, !1, !0), _this11._curveHelper = new _CurveHelper_js__WEBPACK_IMPORTED_MODULE_1__["CurveHelper"](), _this11._length = (void 0 !== s.length ? s.length : 20) * _e49, _this11._angle = void 0 !== s.angle ? s.angle : 225, _this11._position = void 0 !== s.position ? s.position : 50, _this11._length < 0 && (_this11._length = -_this11._length), _this11._position < 20 && (_this11._position = 20), _this11._position > 80 && (_this11._position = 80), _this11._mirror = !1;
          return _this11;
        }

        _createClass(e, [{
          key: "processPath",
          value: function processPath(t) {
            if (this._curveHelper.isEmpty(t, !1)) return null;
            var i = t[0],
                s = t[t.length - 1],
                _e50 = [s[0] - i[0], s[1] - i[1]];

            this._curveHelper.normalize(_e50);

            var n = [i[0] + (s[0] - i[0]) * this._position / 100, i[1] + (s[1] - i[1]) * this._position / 100],
                h = Math.cos((90 - this._angle) / 180 * Math.PI);
            var r = Math.sin((90 - this._angle) / 180 * Math.PI);
            this._mirror && (r = -r), this._mirror = !this._mirror;
            return {
              paths: [[i, [n[0] - this._length / 2 * h, n[1] - this._length / 2 * r], [n[0] + this._length / 2 * h, n[1] + this._length / 2 * r], s]]
            };
          }
        }]);

        return e;
      }(_CIMCursor_js__WEBPACK_IMPORTED_MODULE_0__["PathGeometryCursor"]);
      /***/

    },

    /***/
    "m662":
    /*!***************************************************************************!*\
      !*** ./node_modules/@arcgis/core/views/2d/layers/support/clusterUtils.js ***!
      \***************************************************************************/

    /*! exports provided: createClusterCountSizeVariable, createClusterRenderer, findSizeVV, hasClusterCountVV, isClusterCompatibleRenderer */

    /***/
    function m662(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "createClusterCountSizeVariable", function () {
        return f;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "createClusterRenderer", function () {
        return c;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "findSizeVV", function () {
        return d;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "hasClusterCountVV", function () {
        return p;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "isClusterCompatibleRenderer", function () {
        return m;
      });
      /* harmony import */


      var _core_has_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ../../../../core/has.js */
      "wSAH");
      /* harmony import */


      var _core_maybe_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ../../../../core/maybe.js */
      "srIe");
      /* harmony import */


      var _core_Logger_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ../../../../core/Logger.js */
      "6S2I");
      /* harmony import */


      var _core_Error_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ../../../../core/Error.js */
      "zlDU");
      /* harmony import */


      var _renderers_visualVariables_support_SizeStop_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ../../../../renderers/visualVariables/support/SizeStop.js */
      "moES");
      /* harmony import */


      var _renderers_visualVariables_SizeVariable_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ../../../../renderers/visualVariables/SizeVariable.js */
      "w/y1");
      /* harmony import */


      var _core_MD5_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ../../../../core/MD5.js */
      "fvq6");
      /* harmony import */


      var _engine_LevelDependentSizeVariable_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! ../../engine/LevelDependentSizeVariable.js */
      "5x/F");
      /*
      All material copyright ESRI, All Rights Reserved, unless otherwise specified.
      See https://js.arcgis.com/4.18/esri/copyright.txt for details.
      */


      var o = _core_Logger_js__WEBPACK_IMPORTED_MODULE_2__["default"].getLogger("esri.views.2d.layers.support.clusterUtils");

      _core_has_js__WEBPACK_IMPORTED_MODULE_0__["default"].add("esri-cluster-arcade-enabled", 1);

      var u = Object(_core_has_js__WEBPACK_IMPORTED_MODULE_0__["default"])("esri-cluster-arcade-enabled"),
          c = function c(e, t, r, s) {
        var a = t.clone();
        if (!m(a)) return a;

        if (r.fields) {
          var _iterator48 = _createForOfIteratorHelper(r.fields),
              _step48;

          try {
            for (_iterator48.s(); !(_step48 = _iterator48.n()).done;) {
              var i = _step48.value;
              v(e, i);
            }
          } catch (err) {
            _iterator48.e(err);
          } finally {
            _iterator48.f();
          }
        }

        if ("visualVariables" in a) {
          var _t55 = (a.visualVariables || []).filter(function (e) {
            return "$view.scale" !== e.valueExpression;
          }),
              n = d(_t55);

          _t55.forEach(function (i) {
            "rotation" === i.type ? i.field ? i.field = S(e, i.field, "avg_angle") : i.valueExpression && (i.field = x(e, i.valueExpression, "avg_angle"), i.valueExpression = null) : i.normalizationField ? (i.field = S(e, i.field, "norm", i.normalizationField), i.normalizationField = null) : i.field ? i.field = S(e, i.field, "avg") : (i.field = x(e, i.valueExpression, "avg"), i.valueExpression = null);
          }), Object(_core_maybe_js__WEBPACK_IMPORTED_MODULE_1__["isNone"])(n) && !p(_t55) && (_t55.push(f(r, s)), a.dynamicClusterSize = !0), a.visualVariables = _t55;
        }

        switch (a.type) {
          case "simple":
            break;

          case "unique-value":
            a.field ? a.field = S(e, a.field, "mode") : a.valueExpression && (a.field = x(e, a.valueExpression, "mode"), a.valueExpression = null);
            break;

          case "class-breaks":
            a.normalizationField ? (a.field = S(e, a.field, "norm", a.normalizationField), a.normalizationField = null) : a.field ? a.field = S(e, a.field, "avg") : (a.field = x(e, a.valueExpression, "avg"), a.valueExpression = null);
        }

        return a;
      },
          d = function d(e) {
        var _iterator49 = _createForOfIteratorHelper(e),
            _step49;

        try {
          for (_iterator49.s(); !(_step49 = _iterator49.n()).done;) {
            var i = _step49.value;
            if ("size" === i.type) return i;
          }
        } catch (err) {
          _iterator49.e(err);
        } finally {
          _iterator49.f();
        }

        return null;
      },
          p = function p(e) {
        var _iterator50 = _createForOfIteratorHelper(e),
            _step50;

        try {
          for (_iterator50.s(); !(_step50 = _iterator50.n()).done;) {
            var i = _step50.value;
            if ("cluster_count" === i.field) return !0;
          }
        } catch (err) {
          _iterator50.e(err);
        } finally {
          _iterator50.f();
        }

        return !1;
      },
          f = function f(e, t) {
        var r = [new _renderers_visualVariables_support_SizeStop_js__WEBPACK_IMPORTED_MODULE_4__["default"]({
          value: 0,
          size: 0
        }), new _renderers_visualVariables_support_SizeStop_js__WEBPACK_IMPORTED_MODULE_4__["default"]({
          value: 1
        })];
        if (Object(_core_maybe_js__WEBPACK_IMPORTED_MODULE_1__["isNone"])(t)) return new _renderers_visualVariables_SizeVariable_js__WEBPACK_IMPORTED_MODULE_5__["default"]({
          field: "cluster_count",
          stops: [].concat(r, [new _renderers_visualVariables_support_SizeStop_js__WEBPACK_IMPORTED_MODULE_4__["default"]({
            value: 2,
            size: 0
          })])
        });
        var n = Object.keys(t).reduce(function (i, a) {
          return _objectSpread(_objectSpread({}, i), {}, _defineProperty({}, a, [].concat(r, [new _renderers_visualVariables_support_SizeStop_js__WEBPACK_IMPORTED_MODULE_4__["default"]({
            value: Math.max(2, t[a].minValue),
            size: e.clusterMinSize
          }), new _renderers_visualVariables_support_SizeStop_js__WEBPACK_IMPORTED_MODULE_4__["default"]({
            value: Math.max(3, t[a].maxValue),
            size: e.clusterMaxSize
          })])));
        }, {});
        return new _engine_LevelDependentSizeVariable_js__WEBPACK_IMPORTED_MODULE_7__["LevelDependentSizeVariable"]({
          field: "cluster_count",
          levels: n
        });
      },
          m = function m(e) {
        var i = function i(_i11) {
          return o.error(new _core_Error_js__WEBPACK_IMPORTED_MODULE_3__["default"]("Unsupported-renderer", _i11, {
            renderer: e
          }));
        };

        if ("unique-value" === e.type) {
          if (e.field2 || e.field3) return i("FeatureReductionCluster does not support multi-field UniqueValueRenderers"), !1;
        } else if ("class-breaks" === e.type) {
          if (e.normalizationField) {
            var t = e.normalizationType;
            if ("field" !== t) return i("FeatureReductionCluster does not support a normalizationType of ".concat(t)), !1;
          }
        } else if ("simple" !== e.type) return i("FeatureReductionCluster does not support renderers of type ".concat(e.type)), !1;

        if (!u) {
          if ("valueExpression" in e && e.valueExpression) return i("FeatureReductionCluster does not currently support renderer.valueExpression. Support will be added in a future release"), !1;
          if (("visualVariables" in e && e.visualVariables || []).some(function (e) {
            return !(!("valueExpression" in e) || !e.valueExpression);
          })) return i("FeatureReductionCluster does not currently support visualVariables with a valueExpression. Support will be added in a future release"), !1;
        }

        return !0;
      };

      function v(e, i) {
        var t = i.name,
            s = i.outStatistic,
            a = s.onStatisticField,
            l = s.onStatisticValueExpression,
            u = s.statisticType;

        if (l) {
          var _i12 = Object(_core_MD5_js__WEBPACK_IMPORTED_MODULE_6__["createMD5Hash"])(l.toLowerCase());

          e.push({
            name: t,
            outStatistic: {
              onStatisticField: _i12,
              onStatisticValueExpression: l,
              statisticType: u
            }
          });
        } else a ? e.push({
          name: t,
          outStatistic: {
            onStatisticField: a,
            statisticType: u
          }
        }) : o.error(new _core_Error_js__WEBPACK_IMPORTED_MODULE_3__["default"]("mapview-unsupported-field", "Unable to handle field", {
          field: i
        }));
      }

      function x(e, i, t) {
        var r = Object(_core_MD5_js__WEBPACK_IMPORTED_MODULE_6__["createMD5Hash"])(i),
            s = "mode" === t ? "cluster_type_".concat(r) : "cluster_avg_".concat(r);
        return e.some(function (e) {
          return e.name === s;
        }) || e.push({
          name: s,
          outStatistic: {
            onStatisticField: r,
            onStatisticValueExpression: i,
            statisticType: t
          }
        }), s;
      }

      function S(e, i, t, r) {
        if ("cluster_count" === i || e.some(function (e) {
          return e.name === i;
        })) return i;

        var s = function (e, i, t) {
          switch (e) {
            case "avg":
            case "avg_angle":
              return "cluster_avg_".concat(i);

            case "mode":
              return "cluster_type_".concat(i);

            case "norm":
              {
                var _e51 = t,
                    _r15 = "field",
                    _s63 = i.toLowerCase() + ",norm:" + _r15 + "," + _e51.toLowerCase();

                return "cluster_avg_" + Object(_core_MD5_js__WEBPACK_IMPORTED_MODULE_6__["createMD5Hash"])(_s63);
              }
          }
        }(t, i, r);

        return e.some(function (e) {
          return e.name === s;
        }) || ("norm" === t ? e.push({
          name: s,
          outStatistic: {
            onStatisticField: i,
            onStatisticNormalizationField: r,
            statisticType: t
          }
        }) : e.push({
          name: s,
          outStatistic: {
            onStatisticField: i,
            statisticType: t
          }
        })), s;
      }
      /***/

    },

    /***/
    "owVx":
    /*!***************************************************************************!*\
      !*** ./node_modules/@arcgis/core/views/2d/layers/features/schemaUtils.js ***!
      \***************************************************************************/

    /*! exports provided: addAggregateFields, createMatcherSchema, createSchema, createSymbolSchema */

    /***/
    function owVx(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "addAggregateFields", function () {
        return R;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "createMatcherSchema", function () {
        return j;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "createSchema", function () {
        return E;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "createSymbolSchema", function () {
        return v;
      });
      /* harmony import */


      var _core_has_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ../../../../core/has.js */
      "wSAH");
      /* harmony import */


      var _core_lang_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ../../../../core/lang.js */
      "f/qv");
      /* harmony import */


      var _core_maybe_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ../../../../core/maybe.js */
      "srIe");
      /* harmony import */


      var _core_Logger_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ../../../../core/Logger.js */
      "6S2I");
      /* harmony import */


      var _core_Error_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ../../../../core/Error.js */
      "zlDU");
      /* harmony import */


      var _core_screenUtils_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ../../../../core/screenUtils.js */
      "qRWG");
      /* harmony import */


      var _chunks_symbols_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ../../../../chunks/symbols.js */
      "nNR5");
      /* harmony import */


      var _support_clusterUtils_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! ../support/clusterUtils.js */
      "m662");
      /* harmony import */


      var _engine_webgl_enums_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! ../../engine/webgl/enums.js */
      "yE7X");
      /* harmony import */


      var _engine_webgl_materialKey_MaterialKey_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! ../../engine/webgl/materialKey/MaterialKey.js */
      "GMaR");
      /* harmony import */


      var _engine_webgl_Utils_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
      /*! ../../engine/webgl/Utils.js */
      "yN2G");
      /* harmony import */


      var _engine_webgl_util_vvFlagUtils_js__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
      /*! ../../engine/webgl/util/vvFlagUtils.js */
      "a8c1");
      /* harmony import */


      var _support_rendererUtils_js__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
      /*! ./support/rendererUtils.js */
      "tDOP");
      /* harmony import */


      var _support_util_js__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
      /*! ../support/util.js */
      "RaXU");
      /*
      All material copyright ESRI, All Rights Reserved, unless otherwise specified.
      See https://js.arcgis.com/4.18/esri/copyright.txt for details.
      */


      var g = _core_Logger_js__WEBPACK_IMPORTED_MODULE_3__["default"].getLogger("esri.views.2d.layers.features.schemaUtils"),
          b = {
        esriGeometryPoint: ["above-right", "above-center", "above-left", "center-center", "center-left", "center-right", "below-center", "below-left", "below-right"],
        esriGeometryPolygon: ["always-horizontal"],
        esriGeometryPolyline: ["center-along"],
        esriGeometryMultipoint: null
      };

      function h(e) {
        return Object(_engine_webgl_materialKey_MaterialKey_js__WEBPACK_IMPORTED_MODULE_9__["hydrateMaterialKey"])(e);
      }

      function x(e) {
        switch (e.type) {
          case "line-marker":
            var t;
            return {
              type: "line-marker",
              color: null == (t = e.color) ? void 0 : t.toJSON(),
              placement: e.placement,
              style: e.style
            };

          default:
            return Object(_chunks_symbols_js__WEBPACK_IMPORTED_MODULE_6__["f"])(e.toJSON()).toJSON();
        }
      }

      function v(e, t, r) {
        if (!e) return null;
        var n = 0,
            l = !1;

        switch (Object(_core_maybe_js__WEBPACK_IMPORTED_MODULE_2__["isSome"])(t) && "visualVariables" in t && (n = Object(_engine_webgl_util_vvFlagUtils_js__WEBPACK_IMPORTED_MODULE_11__["getVVFlags"])(t.visualVariables || []), l = "dot-density" === t.type), e.type) {
          case "simple-fill":
          case "picture-fill":
            return function (e, t, i, r) {
              var n = Object(_engine_webgl_materialKey_MaterialKey_js__WEBPACK_IMPORTED_MODULE_9__["createMaterialKey"])(_engine_webgl_enums_js__WEBPACK_IMPORTED_MODULE_8__["WGLGeometryType"].FILL, t, !1, i),
                  l = r ? h(n) : n,
                  s = e.clone(),
                  a = s.outline;
              s.outline = null;

              var o = [],
                  c = _objectSpread({
                materialKey: l,
                hash: s.hash()
              }, x(s));

              if (o.push(c), a) {
                var _e52 = Object(_engine_webgl_materialKey_MaterialKey_js__WEBPACK_IMPORTED_MODULE_9__["createMaterialKey"])(_engine_webgl_enums_js__WEBPACK_IMPORTED_MODULE_8__["WGLGeometryType"].LINE, t, !0, !1),
                    _i13 = _objectSpread({
                  materialKey: r ? h(_e52) : _e52,
                  hash: a.hash()
                }, x(a));

                o.push(_i13);
              }

              return {
                type: "composite-symbol",
                layers: o,
                hash: o.reduce(function (e, t) {
                  return t.hash + e;
                }, "")
              };
            }(e, n, l, r);

          case "simple-marker":
          case "picture-marker":
            return function (e, t, i) {
              var r = Object(_engine_webgl_materialKey_MaterialKey_js__WEBPACK_IMPORTED_MODULE_9__["createMaterialKey"])(_engine_webgl_enums_js__WEBPACK_IMPORTED_MODULE_8__["WGLGeometryType"].MARKER, t, !1, !1),
                  n = i ? h(r) : r,
                  l = x(e);
              return _objectSpread(_objectSpread({
                materialKey: n,
                hash: e.hash()
              }, l), {}, {
                angle: e.angle
              });
            }(e, n, r);

          case "simple-line":
            return function (e, t, i) {
              var r = Object(_engine_webgl_materialKey_MaterialKey_js__WEBPACK_IMPORTED_MODULE_9__["createMaterialKey"])(_engine_webgl_enums_js__WEBPACK_IMPORTED_MODULE_8__["WGLGeometryType"].LINE, t, !1, !1),
                  n = i ? h(r) : r,
                  l = e.clone(),
                  s = l.marker;
              l.marker = null;
              var a = [];

              if (a.push(_objectSpread({
                materialKey: n,
                hash: l.hash()
              }, x(l))), s) {
                var o;

                var _e53 = Object(_engine_webgl_materialKey_MaterialKey_js__WEBPACK_IMPORTED_MODULE_9__["createMaterialKey"])(_engine_webgl_enums_js__WEBPACK_IMPORTED_MODULE_8__["WGLGeometryType"].MARKER, t, !1, !1),
                    _r16 = i ? h(_e53) : _e53;

                s.color = null != (o = s.color) ? o : l.color, a.push(_objectSpread({
                  materialKey: _r16,
                  hash: s.hash(),
                  lineWidth: l.width
                }, x(s)));
              }

              return {
                type: "composite-symbol",
                layers: a,
                hash: a.reduce(function (e, t) {
                  return t.hash + e;
                }, "")
              };
            }(e, n, r);

          case "text":
            return function (e, t, i) {
              var r = Object(_engine_webgl_materialKey_MaterialKey_js__WEBPACK_IMPORTED_MODULE_9__["createMaterialKey"])(_engine_webgl_enums_js__WEBPACK_IMPORTED_MODULE_8__["WGLGeometryType"].TEXT, t, !1, !1),
                  n = i ? h(r) : r,
                  l = x(e);
              return _objectSpread(_objectSpread({
                materialKey: n,
                hash: e.hash()
              }, l), {}, {
                angle: e.angle
              });
            }(e, n, r);

          case "label":
            return function (e, t, i) {
              var r = Object(_engine_webgl_materialKey_MaterialKey_js__WEBPACK_IMPORTED_MODULE_9__["createMaterialKey"])(_engine_webgl_enums_js__WEBPACK_IMPORTED_MODULE_8__["WGLGeometryType"].LABEL, t, !1, !1, e.labelPlacement);
              return _objectSpread(_objectSpread({
                materialKey: i ? h(r) : r,
                hash: e.hash()
              }, e.toJSON()), {}, {
                labelPlacement: e.labelPlacement
              });
            }(e, n, r);

          case "cim":
            return {
              type: "cim",
              rendererKey: n,
              data: e.data
            };

          case "web-style":
            return _objectSpread(_objectSpread({}, x(e)), {}, {
              type: "web-style",
              hash: e.hash(),
              rendererKey: n
            });

          default:
            throw new Error("symbol not supported ".concat(e.type));
        }
      }

      function w(e, i) {
        var r = Object(_core_lang_js__WEBPACK_IMPORTED_MODULE_1__["clone"])(e);
        return r.some(function (e) {
          return function (e, t) {
            var i = e.labelPlacement,
                r = b[t];
            if (!e.symbol) return g.warn("No LabelClass symbol specified."), !0;
            if (!r) return g.error(new _core_Error_js__WEBPACK_IMPORTED_MODULE_4__["default"]("mapview-labeling:unsupported-geometry-type", "Unable to create labels for Feature Layer, ".concat(t, " is not supported"))), !0;

            if (!r.some(function (e) {
              return e === i;
            })) {
              var n = r[0];
              i && g.warn("Found invalid label placement type ".concat(i, " for ").concat(t, ". Defaulting to ").concat(n)), e.labelPlacement = n;
            }

            return !1;
          }(e, i);
        }) ? [] : r;
      }

      function E(t) {
        return Object(_core_has_js__WEBPACK_IMPORTED_MODULE_0__["default"])("esri-2d-update-debug") && console.debug("Created new schema", I(t, !0)), I(t);
      }

      function I(e) {
        var t = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : !1;

        try {
          var i, r;

          var n = function (e) {
            var t = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : !1;
            var i = new Array();
            return i.push(function (e, t) {
              var i = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : !1;
              var r = {
                indexCount: 0,
                fields: {}
              },
                  n = "featureReduction" in e && e.featureReduction,
                  s = n ? "aggregate" : "feature";

              switch (e.renderer.type) {
                case "heatmap":
                  {
                    var _e$renderer = e.renderer,
                        _t56 = _e$renderer.blurRadius,
                        _i14 = _e$renderer.fieldOffset,
                        _n17 = _e$renderer.field;
                    return {
                      type: "heatmap",
                      aggregateFields: [],
                      attributes: r,
                      target: s,
                      storage: null,
                      mesh: {
                        blurRadius: _t56,
                        fieldOffset: _i14,
                        field: z(r, {
                          target: s,
                          field: _n17,
                          resultType: "numeric"
                        }).field
                      }
                    };
                  }

                default:
                  {
                    var _t57 = [],
                        _a12 = "aggregate" === s ? Object(_support_clusterUtils_js__WEBPACK_IMPORTED_MODULE_7__["createClusterRenderer"])(_t57, e.renderer, n, null) : e.renderer;

                    R(r, _t57);

                    var u = j(r, s, _a12, i),
                        _d3 = function (e, t, i) {
                      switch (i.type) {
                        case "dot-density":
                          return function (e, t, i) {
                            if (!i || !i.length) return {
                              type: "dot-density",
                              mapping: [],
                              target: t
                            };
                            return {
                              type: "dot-density",
                              mapping: i.map(function (i, r) {
                                var _z = z(e, {
                                  valueExpression: i.valueExpression,
                                  field: i.field,
                                  resultType: "numeric",
                                  target: t
                                }),
                                    n = _z.field,
                                    l = _z.fieldIndex;

                                return {
                                  binding: r,
                                  field: n,
                                  fieldIndex: l
                                };
                              }),
                              target: t
                            };
                          }(e, t, i.attributes);

                        case "simple":
                        case "class-breaks":
                        case "unique-value":
                          return function (e, t, i) {
                            if (!i || !i.length) return {
                              type: "visual-variable",
                              mapping: [],
                              target: t
                            };
                            var r = {
                              storage: !0
                            },
                                n = "numeric";
                            return {
                              type: "visual-variable",
                              mapping: Object(_support_rendererUtils_js__WEBPACK_IMPORTED_MODULE_12__["simplifyVisualVariables"])(i).map(function (i) {
                                var l;

                                var s = Object(_engine_webgl_Utils_js__WEBPACK_IMPORTED_MODULE_10__["getVVType"])(i.type),
                                    _z2 = z(e, {
                                  target: t,
                                  valueExpression: i.valueExpression,
                                  field: i.field,
                                  context: r,
                                  resultType: n
                                }),
                                    a = _z2.field,
                                    o = _z2.fieldIndex;

                                switch (i.type) {
                                  case "size":
                                    return "$view.scale" === i.valueExpression ? null : {
                                      type: "size",
                                      binding: s,
                                      field: a,
                                      fieldIndex: o,
                                      normalizationField: z(e, {
                                        target: t,
                                        field: i.normalizationField,
                                        context: r,
                                        resultType: n
                                      }).field,
                                      valueRepresentation: null != (l = i.valueRepresentation) ? l : null
                                    };

                                  case "color":
                                    return {
                                      type: "color",
                                      binding: s,
                                      field: a,
                                      fieldIndex: o,
                                      normalizationField: z(e, {
                                        target: t,
                                        field: i.normalizationField,
                                        context: r,
                                        resultType: n
                                      }).field
                                    };

                                  case "opacity":
                                    return {
                                      type: "opacity",
                                      binding: s,
                                      field: a,
                                      fieldIndex: o,
                                      normalizationField: z(e, {
                                        target: t,
                                        field: i.normalizationField,
                                        context: r,
                                        resultType: n
                                      }).field
                                    };

                                  case "rotation":
                                    return {
                                      type: "rotation",
                                      binding: s,
                                      field: a,
                                      fieldIndex: o
                                    };
                                }
                              }).filter(function (e) {
                                return e;
                              }),
                              target: t
                            };
                          }(e, t, i.visualVariables);

                        case "heatmap":
                        case "dictionary":
                          return null;
                      }
                    }(r, s, _a12),
                        c = Object(_support_util_js__WEBPACK_IMPORTED_MODULE_13__["toJSONGeometryType"])(e.geometryType);

                    var p = e.labelsVisible && e.labelingInfo || [],
                        _g = [];

                    if (n) {
                      if ("selection" === n.type) throw new _core_Error_js__WEBPACK_IMPORTED_MODULE_4__["default"]("ValidationError", "Mapview does not support `selection` reduction type", n);
                      _g = n && n.labelsVisible && n.labelingInfo || [];
                    }

                    p = w(p, c), _g = w(_g, c);
                    var _b = 0;

                    var _h12 = [].concat(_toConsumableArray(p.map(function (e) {
                      return V(_a12, r, e, "feature", _b++, i);
                    })), _toConsumableArray(_g.map(function (e) {
                      return V(_a12, r, e, "aggregate", _b++, i);
                    })));

                    return {
                      type: "symbol",
                      target: s,
                      attributes: r,
                      aggregateFields: _t57,
                      storage: _d3,
                      mesh: {
                        matcher: u,
                        labels: _h12
                      }
                    };
                  }
              }
            }(e, t)), i;
          }(e, t),
              a = {};

          n.map(function (t) {
            return function (e, t, i) {
              switch (i.target) {
                case "feature":
                  return void T(e, S(t), i);

                case "aggregate":
                  {
                    var _r17 = t.featureReduction;
                    if ("selection" === _r17.type) throw new _core_Error_js__WEBPACK_IMPORTED_MODULE_4__["default"]("ValidationError", "Mapview does not support `selection` reduction type", _r17);
                    return T(e, S(t), i), void function (e, t, i) {
                      e.aggregate || (e.aggregate = {
                        name: "aggregate",
                        input: "feature",
                        filters: null,
                        attributes: {},
                        params: {
                          clusterRadius: Object(_core_screenUtils_js__WEBPACK_IMPORTED_MODULE_5__["pt2px"])(t.clusterRadius / 2),
                          clusterPixelBuffer: 64 * Math.ceil(Object(_core_screenUtils_js__WEBPACK_IMPORTED_MODULE_5__["pt2px"])(t.clusterMaxSize) / 64),
                          fields: i.aggregateFields
                        }
                      });
                      F(e.aggregate, i.attributes.fields);
                    }(e, _r17, i);
                  }
              }
            }(a, e, t);
          });
          return {
            source: {
              definitionExpression: e.definitionExpression,
              fields: e.fields.map(function (e) {
                return e.toJSON();
              }),
              gdbVersion: e.gdbVersion,
              historicMoment: null == (i = e.historicMoment) ? void 0 : i.getTime(),
              outFields: e.availableFields,
              pixelBuffer: e.pixelBuffer,
              spatialReference: e.spatialReference.toJSON(),
              timeExtent: null == (r = e.timeExtent) ? void 0 : r.toJSON()
            },
            attributes: {
              fields: {},
              indexCount: 0
            },
            processors: n,
            targets: a
          };
        } catch (e) {
          if ("ValidationError" === e.fieldName) return g.error(e), null;
          throw e;
        }
      }

      function F(e, t) {
        for (var i in t) {
          var r = t[i];
          if (r.target !== e.name) continue;
          var n = e.attributes[i];
          n ? (n.context.mesh = n.context.mesh || r.context.mesh, n.context.storage = n.context.storage || r.context.storage) : e.attributes[i] = r;
        }

        return e;
      }

      function S(e) {
        var t, i, r, n, l;
        return [null != (t = null == (i = e.filter) ? void 0 : i.toJSON()) ? t : null, null != (r = null == (n = e.effect) || null == (l = n.filter) ? void 0 : l.toJSON()) ? r : null];
      }

      function T(e, t, i) {
        return e.feature || (e.feature = {
          name: "feature",
          input: "source",
          filters: t,
          attributes: {}
        }), F(e.feature, i.attributes.fields), e;
      }

      function z(e, t) {
        return t.field ? N(e, _objectSpread(_objectSpread({}, t), {}, {
          type: "field",
          field: t.field
        })) : t.valueExpression ? N(e, _objectSpread(_objectSpread({}, t), {}, {
          type: "expression",
          valueExpression: t.valueExpression
        })) : {
          field: null,
          fieldIndex: null
        };
      }

      function N(e, t) {
        switch (t.type) {
          case "expression":
            {
              var i = t.valueExpression;

              if (!e.fields[i]) {
                var r = e.indexCount++;
                e.fields[i] = _objectSpread(_objectSpread({}, t), {}, {
                  name: i,
                  fieldIndex: r
                });
              }

              return {
                fieldIndex: e.fields[i].fieldIndex
              };
            }

          case "label-expression":
            {
              var _i15 = JSON.stringify(t.label);

              if (!e.fields[_i15]) {
                var _r18 = e.indexCount++;

                e.fields[_i15] = _objectSpread(_objectSpread({}, t), {}, {
                  name: _i15,
                  fieldIndex: _r18
                });
              }

              return {
                fieldIndex: e.fields[_i15].fieldIndex
              };
            }

          case "field":
            {
              var _i16 = t.field;
              return "aggregate" === t.target && e.fields[_i16] || (e.fields[_i16] = _objectSpread(_objectSpread({}, t), {}, {
                name: _i16
              })), {
                field: _i16
              };
            }

          case "statistic":
            return e.fields[t.name] = _objectSpread({}, t), {
              field: t.name
            };
        }
      }

      function V(e, t, i, r, n) {
        var l = arguments.length > 5 && arguments[5] !== undefined ? arguments[5] : !1;
        var s = N(t, {
          type: "label-expression",
          target: r,
          context: {
            mesh: !0
          },
          resultType: "string",
          label: {
            labelExpression: i.labelExpression,
            labelExpressionInfo: i.labelExpressionInfo ? {
              expression: i.labelExpressionInfo.expression
            } : null,
            symbol: !!i.symbol,
            where: i.where
          }
        }),
            a = s.fieldIndex;
        return _objectSpread(_objectSpread({}, v(i, e, l)), {}, {
          fieldIndex: a,
          target: r,
          index: n
        });
      }

      function R(e, t) {
        var i = {
          mesh: !0,
          storage: !0
        };

        var _iterator51 = _createForOfIteratorHelper(t),
            _step51;

        try {
          for (_iterator51.s(); !(_step51 = _iterator51.n()).done;) {
            var r = _step51.value;
            var _t58 = r.name,
                n = r.outStatistic,
                _l10 = n.statisticType,
                s = n.onStatisticField;
            var a = null,
                o = null,
                u = null;
            var _d4 = "numeric",
                c = "feature";

            if ("onStatisticValueExpression" in n) {
              o = N(e, {
                type: "expression",
                target: c,
                valueExpression: n.onStatisticValueExpression,
                resultType: _d4
              }).fieldIndex;
            } else if ("onStatisticNormalizationField" in n) {
              a = N(e, {
                type: "field",
                target: c,
                field: s,
                resultType: _d4
              }).field, u = n.onStatisticNormalizationField;
            } else {
              a = N(e, {
                type: "field",
                target: c,
                field: s,
                resultType: _d4
              }).field;
            }

            N(e, {
              type: "statistic",
              target: "aggregate",
              name: _t58,
              context: i,
              inField: a,
              inNormalizationField: u,
              inFieldIndex: o,
              statisticType: _l10
            });
          }
        } catch (err) {
          _iterator51.e(err);
        } finally {
          _iterator51.f();
        }
      }

      function j(e, t, i) {
        var n = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : !1;
        var s = Object(_core_maybe_js__WEBPACK_IMPORTED_MODULE_2__["unwrapOr"])(e, {
          indexCount: 0,
          fields: {}
        });

        switch (i.type) {
          case "simple":
          case "dot-density":
            return function (e, t, i) {
              var r = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : !1;
              var n = t.getSymbols();
              return {
                type: "simple",
                symbol: v(n.length ? n[0] : null, t, r),
                isDotDensity: i
              };
            }(0, i, "dot-density" === i.type, n);

          case "class-breaks":
            return function (e, t, i) {
              var r = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : !1;

              var n = {
                mesh: !0,
                use: "renderer.field"
              },
                  l = i.backgroundFillSymbol,
                  _z3 = z(e, {
                target: t,
                field: i.field,
                valueExpression: i.valueExpression,
                resultType: "numeric",
                context: n
              }),
                  s = _z3.field,
                  a = _z3.fieldIndex,
                  o = i.normalizationType,
                  u = "log" === o ? "esriNormalizeByLog" : "percent-of-total" === o ? "esriNormalizeByPercentOfTotal" : "field" === o ? "esriNormalizeByField" : null,
                  d = i.classBreakInfos.map(function (e) {
                return {
                  symbol: v(e.symbol, i, r),
                  min: e.minValue,
                  max: e.maxValue
                };
              }).sort(function (e, t) {
                return e.min - t.min;
              });

              return {
                type: "interval",
                attributes: e.fields,
                field: s,
                fieldIndex: a,
                backgroundFillSymbol: v(l, i, r),
                defaultSymbol: v(i.defaultSymbol, i, r),
                intervals: d,
                normalizationField: i.normalizationField,
                normalizationTotal: i.normalizationTotal,
                normalizationType: u,
                isMaxInclusive: i.isMaxInclusive
              };
            }(s, t, i, n);

          case "unique-value":
            return function (e, t, i) {
              var r = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : !1;
              var n = [],
                  s = i.backgroundFillSymbol,
                  a = {
                target: t,
                context: {
                  mesh: !0
                },
                resultType: "string"
              };
              if (i.field && "string" != typeof i.field) throw new _core_Error_js__WEBPACK_IMPORTED_MODULE_4__["default"]("ValidationError", "Expected renderer.field to be a string", i);

              var _z4 = z(e, _objectSpread(_objectSpread({}, a), {}, {
                field: i.field,
                valueExpression: i.valueExpression
              })),
                  o = _z4.field,
                  u = _z4.fieldIndex;

              var _iterator52 = _createForOfIteratorHelper(i.uniqueValueInfos),
                  _step52;

              try {
                for (_iterator52.s(); !(_step52 = _iterator52.n()).done;) {
                  var _e54 = _step52.value;
                  n.push({
                    value: "" + _e54.value,
                    symbol: v(_e54.symbol, i, r)
                  });
                }
              } catch (err) {
                _iterator52.e(err);
              } finally {
                _iterator52.f();
              }

              return {
                type: "map",
                attributes: e.fields,
                field: o,
                fieldIndex: u,
                field2: z(e, _objectSpread(_objectSpread({}, a), {}, {
                  field: i.field2
                })).field,
                field3: z(e, _objectSpread(_objectSpread({}, a), {}, {
                  field: i.field3
                })).field,
                fieldDelimiter: i.fieldDelimiter,
                backgroundFillSymbol: v(s, i),
                defaultSymbol: v(i.defaultSymbol, i),
                map: n
              };
            }(s, t, i, n);

          case "dictionary":
            return function (e, t) {
              var i = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : !1;
              return {
                type: "dictionary",
                renderer: t.toJSON()
              };
            }(0, i, n);
        }
      }
      /***/

    },

    /***/
    "pckB":
    /*!************************************************************************************!*\
      !*** ./node_modules/@arcgis/core/symbols/cim/placements/PlacementInsidePolygon.js ***!
      \************************************************************************************/

    /*! exports provided: PlacementInsidePolygon */

    /***/
    function pckB(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "PlacementInsidePolygon", function () {
        return s;
      });
      /* harmony import */


      var _CIMPlacements_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ../CIMPlacements.js */
      "WPSO");
      /*
      All material copyright ESRI, All Rights Reserved, unless otherwise specified.
      See https://js.arcgis.com/4.18/esri/copyright.txt for details.
      */


      var s = /*#__PURE__*/function () {
        function s() {
          _classCallCheck(this, s);
        }

        _createClass(s, [{
          key: "execute",
          value: function execute(t, _s64, h) {
            return new i(t, _s64, h);
          }
        }], [{
          key: "local",
          value: function local() {
            return null === s.instance && (s.instance = new s()), s.instance;
          }
        }]);

        return s;
      }();

      s.instance = null;

      var i = /*#__PURE__*/function () {
        function i(s, _i17, h) {
          _classCallCheck(this, i);

          if (this._xMin = 0, this._xMax = 0, this._yMin = 0, this._yMax = 0, this._currentX = 0, this._currentY = 0, this._stepX = (void 0 !== _i17.stepX ? Math.abs(_i17.stepX) : 16) * h, this._stepY = (void 0 !== _i17.stepY ? Math.abs(_i17.stepY) : 16) * h, 0 !== this._stepX && 0 !== this._stepY && s && void 0 !== s.rings && s.rings) {
            if (this._gridType = void 0 !== _i17.gridType ? _i17.gridType : "Fixed", "Random" === this._gridType) this._randomness = void 0 !== _i17.randomness ? _i17.randomness / 100 : 1, this._gridAngle = 0, this._shiftOddRows = !1, this._cosAngle = 1, this._sinAngle = 0, this._offsetX = 0, this._offsetY = 0;else {
              if (this._randomness = 0, this._gridAngle = void 0 !== _i17.gridAngle ? _i17.gridAngle : 0, this._shiftOddRows = void 0 !== _i17.shiftOddRows && _i17.shiftOddRows, this._offsetX = void 0 !== _i17.offsetX ? _i17.offsetX * h : 0, this._offsetY = void 0 !== _i17.offsetY ? _i17.offsetY * h : 0, this._cosAngle = Math.cos(this._gridAngle / 180 * Math.PI), this._sinAngle = -Math.sin(this._gridAngle / 180 * Math.PI), this._stepX) if (this._offsetX < 0) for (; this._offsetX < -.5 * this._stepX;) {
                this._offsetX += this._stepX;
              } else for (; this._offsetX >= .5 * this._stepX;) {
                this._offsetX -= this._stepX;
              }
              if (this._stepY) if (this._offsetY < 0) for (; this._offsetY < -.5 * this._stepY;) {
                this._offsetY += this._stepY;
              } else for (; this._offsetY >= .5 * this._stepY;) {
                this._offsetY -= this._stepY;
              }
            }
            this._graphicOriginX = 0, this._graphicOriginY = 0, this._internalPlacement = new _CIMPlacements_js__WEBPACK_IMPORTED_MODULE_0__["Placement"](), this._calculateMinMax(s), this._geometry = s;
          }
        }

        _createClass(i, [{
          key: "next",
          value: function next() {
            return this._geometry ? this._nextInside() : null;
          }
        }, {
          key: "_calculateMinMax",
          value: function _calculateMinMax(t) {
            var s, _i18, h, e, n, _, r, o;

            this._xMin = 0, this._xMax = 0, this._yMin = 0, this._yMax = 0, n = _ = Number.MAX_VALUE, r = o = -Number.MAX_VALUE;

            var _iterator53 = _createForOfIteratorHelper(t.rings),
                _step53;

            try {
              for (_iterator53.s(); !(_step53 = _iterator53.n()).done;) {
                var a = _step53.value;

                var _t59 = a ? a.length : 0;

                for (var f = 0; f < _t59; ++f) {
                  s = a[f][0] - this._graphicOriginX - this._offsetX, _i18 = a[f][1] - this._graphicOriginY - this._offsetY, h = this._cosAngle * s - this._sinAngle * _i18, e = this._sinAngle * s + this._cosAngle * _i18, n = Math.min(n, h), r = Math.max(r, h), _ = Math.min(_, e), o = Math.max(o, e);
                }
              }
            } catch (err) {
              _iterator53.e(err);
            } finally {
              _iterator53.f();
            }

            n += this._graphicOriginX, r += this._graphicOriginX, _ += this._graphicOriginY, o += this._graphicOriginY, this._xMin = Math.round(n / this._stepX), this._xMax = Math.round(r / this._stepX), this._yMin = Math.round(_ / this._stepY), this._yMax = Math.round(o / this._stepY), this._currentX = this._xMax + 1, this._currentY = this._yMin - 1;
          }
        }, {
          key: "_nextInside",
          value: function _nextInside() {
            for (;;) {
              if (this._currentX > this._xMax) {
                if (this._currentY++, this._currentY > this._yMax) return null;
                this._currentX = this._xMin, this._shiftOddRows && this._currentY % 2 && this._currentX--;
              }

              var t = this._currentX * this._stepX + this._offsetX;
              this._shiftOddRows && this._currentY % 2 && (t += .5 * this._stepX);

              var _s65 = this._currentY * this._stepY + this._offsetY;

              var _i20 = void 0,
                  h = void 0;

              return this._currentX++, "Random" === this._gridType ? (_i20 = this._graphicOriginX + t + this._stepX * this._randomness * (.5 - Math.random()) * 2 / 3, h = this._graphicOriginY + _s65 + this._stepY * this._randomness * (.5 - Math.random()) * 2 / 3) : (_i20 = this._graphicOriginX + this._cosAngle * t + this._sinAngle * _s65, h = this._graphicOriginY - this._sinAngle * t + this._cosAngle * _s65), this._internalPlacement.setTranslate(_i20, h), this._internalPlacement;
            }
          }
        }]);

        return i;
      }();
      /***/

    },

    /***/
    "qzns":
    /*!********************************************************!*\
      !*** ./node_modules/@arcgis/core/symbols/cim/enums.js ***!
      \********************************************************/

    /*! exports provided: PlacementEndings */

    /***/
    function qzns(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "PlacementEndings", function () {
        return t;
      });
      /*
      All material copyright ESRI, All Rights Reserved, unless otherwise specified.
      See https://js.arcgis.com/4.18/esri/copyright.txt for details.
      */


      var t;
      !function (t) {
        t.NoConstraint = "NoConstraint", t.WithMarkers = "WithMarkers", t.WithFullGap = "WithFullGap", t.WithHalfGap = "WithHalfGap", t.Custom = "Custom";
      }(t || (t = {}));
      /***/
    },

    /***/
    "t7mB":
    /*!**************************************************************************!*\
      !*** ./node_modules/@arcgis/core/views/2d/engine/webgl/util/BidiText.js ***!
      \**************************************************************************/

    /*! exports provided: bidiText */

    /***/
    function t7mB(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "bidiText", function () {
        return n;
      });
      /* harmony import */


      var _core_BidiEngine_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ../../../../../core/BidiEngine.js */
      "179/");
      /*
      All material copyright ESRI, All Rights Reserved, unless otherwise specified.
      See https://js.arcgis.com/4.18/esri/copyright.txt for details.
      */


      var i = new _core_BidiEngine_js__WEBPACK_IMPORTED_MODULE_0__["default"]();

      function n(r) {
        if (!i.hasBidiChar(r)) return [r, !1];
        var n;
        return n = "rtl" === i.checkContextual(r) ? "IDNNN" : "ICNNN", [i.bidiTransform(r, n, "VLYSN"), !0];
      }
      /***/

    },

    /***/
    "tDOP":
    /*!*************************************************************************************!*\
      !*** ./node_modules/@arcgis/core/views/2d/layers/features/support/rendererUtils.js ***!
      \*************************************************************************************/

    /*! exports provided: simplifyVVRenderer, simplifyVisualVariables */

    /***/
    function tDOP(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "simplifyVVRenderer", function () {
        return r;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "simplifyVisualVariables", function () {
        return t;
      });
      /* harmony import */


      var _core_Logger_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ../../../../../core/Logger.js */
      "6S2I");
      /* harmony import */


      var _core_screenUtils_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ../../../../../core/screenUtils.js */
      "qRWG");
      /*
      All material copyright ESRI, All Rights Reserved, unless otherwise specified.
      See https://js.arcgis.com/4.18/esri/copyright.txt for details.
      */


      var o = _core_Logger_js__WEBPACK_IMPORTED_MODULE_0__["default"].getLogger("esri.renderers.visualVariables.support.utils"),
          r = function r(e) {
        if (!("visualVariables" in e) || !e.visualVariables || !e.visualVariables.length) return e;
        var l = e.clone(),
            o = l.visualVariables.map(function (e) {
          return s(e) ? a(e) : e;
        });
        return l.visualVariables = o, l;
      };

      function t(e) {
        return e.map(function (e) {
          return s(e) ? a(e.clone()) : e;
        });
      }

      function s(e) {
        return ("size" === e.type || "color" === e.type || "opacity" === e.type) && null != e.stops;
      }

      function a(e) {
        return e.stops = function (e, r) {
          if (r.length <= 8) return r;
          if (o.warn("Found ".concat(r.length, " Visual Variable stops, but MapView only supports 8. Displayed stops will be simplified.")), r.length > 16) return function (e, o) {
            var _o12 = _toArray(o),
                r = _o12[0],
                t = _o12.slice(1),
                s = t.pop(),
                a = t[0].value,
                i = t[t.length - 1].value,
                u = (i - a) / 6,
                c = [];

            for (var _r19 = a; _r19 < i; _r19 += u) {
              var _s66 = 0;

              for (; _r19 >= t[_s66].value;) {
                _s66++;
              }

              var _a13 = t[_s66],
                  _i21 = o[_s66 - 1],
                  _u5 = _r19 - _i21.value,
                  p = _a13.value === _i21.value ? 1 : _u5 / (_a13.value - _i21.value);

              if ("color" === e) {
                var _e55 = t[_s66],
                    _l11 = o[_s66 - 1],
                    _a14 = _e55.color.clone();

                _a14.r = n(_l11.color.r, _a14.r, p), _a14.g = n(_l11.color.g, _a14.g, p), _a14.b = n(_l11.color.b, _a14.b, p), _a14.a = n(_l11.color.a, _a14.a, p), c.push({
                  value: _r19,
                  color: _a14,
                  label: _e55.label
                });
              } else if ("size" === e) {
                var _e56 = t[_s66],
                    _a15 = o[_s66 - 1],
                    _i22 = Object(_core_screenUtils_js__WEBPACK_IMPORTED_MODULE_1__["toPt"])(_e56.size),
                    _u6 = n(Object(_core_screenUtils_js__WEBPACK_IMPORTED_MODULE_1__["toPt"])(_a15.size), _i22, p);

                c.push({
                  value: _r19,
                  size: _u6,
                  label: _e56.label
                });
              } else {
                var _e57 = t[_s66],
                    _l12 = n(o[_s66 - 1].opacity, _e57.opacity, p);

                c.push({
                  value: _r19,
                  opacity: _l12,
                  label: _e57.label
                });
              }
            }

            return [r].concat(c, [s]);
          }(e, r);
          return function (e) {
            var _e58 = _toArray(e),
                l = _e58[0],
                o = _e58.slice(1),
                r = o.pop();

            for (; o.length > 6;) {
              var _e59 = 0,
                  _l13 = 0;

              for (var _r20 = 1; _r20 < o.length; _r20++) {
                var _t60 = o[_r20 - 1],
                    _s67 = o[_r20],
                    _a16 = Math.abs(_s67.value - _t60.value);

                _a16 > _l13 && (_l13 = _a16, _e59 = _r20);
              }

              o.splice(_e59, 1);
            }

            return [l].concat(_toConsumableArray(o), [r]);
          }(r);
        }(e.type, e.stops), e;
      }

      function n(e, l, o) {
        return (1 - o) * e + o * l;
      }
      /***/

    },

    /***/
    "tdjz":
    /*!*********************************************************************************!*\
      !*** ./node_modules/@arcgis/core/symbols/cim/effects/EffectAddControlPoints.js ***!
      \*********************************************************************************/

    /*! exports provided: EffectAddControlPoints */

    /***/
    function tdjz(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "EffectAddControlPoints", function () {
        return o;
      });
      /* harmony import */


      var _core_lang_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ../../../core/lang.js */
      "f/qv");
      /* harmony import */


      var _geometry_support_jsonUtils_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ../../../geometry/support/jsonUtils.js */
      "qatw");
      /* harmony import */


      var _CIMCursor_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ../CIMCursor.js */
      "tqcG");
      /*
      All material copyright ESRI, All Rights Reserved, unless otherwise specified.
      See https://js.arcgis.com/4.18/esri/copyright.txt for details.
      */


      var o = /*#__PURE__*/function () {
        function o() {
          _classCallCheck(this, o);
        }

        _createClass(o, [{
          key: "execute",
          value: function execute(s, t, e) {
            return new r(s, t, e);
          }
        }], [{
          key: "local",
          value: function local() {
            return null === o.instance && (o.instance = new o()), o.instance;
          }
        }]);

        return o;
      }();

      o.instance = null;

      var r = /*#__PURE__*/function () {
        function r(s, t, e) {
          _classCallCheck(this, r);

          this._inputGeometries = s, this._angleTolerance = void 0 !== t.angleTolerance ? t.angleTolerance : 120, this._maxCosAngle = Math.cos((1 - Math.abs(this._angleTolerance) / 180) * Math.PI);
        }

        _createClass(r, [{
          key: "next",
          value: function next() {
            var n = this._inputGeometries.next();

            for (; n;) {
              if (Object(_geometry_support_jsonUtils_js__WEBPACK_IMPORTED_MODULE_1__["isPolygon"])(n)) {
                this._isClosed = !0;
                var t = Object(_core_lang_js__WEBPACK_IMPORTED_MODULE_0__["clone"])(n);
                return this._processMultipath(t.rings), t;
              }

              if (Object(_geometry_support_jsonUtils_js__WEBPACK_IMPORTED_MODULE_1__["isPolyline"])(n)) {
                this._isClosed = !1;

                var _t61 = Object(_core_lang_js__WEBPACK_IMPORTED_MODULE_0__["clone"])(n);

                return this._processMultipath(_t61.paths), _t61;
              }

              if (Object(_geometry_support_jsonUtils_js__WEBPACK_IMPORTED_MODULE_1__["isExtent"])(n)) {
                if (this._maxCosAngle) return n;
                this._isClosed = !0;
                var s = [[n.xmin, n.ymin], [n.xmin, n.ymax], [n.xmax, n.ymax], [n.xmax, n.ymin], [n.xmin, n.ymin]];
                return this._processPath(s), {
                  rings: [s]
                };
              }

              n = this._inputGeometries.next();
            }

            return null;
          }
        }, {
          key: "_processMultipath",
          value: function _processMultipath(s) {
            if (s) {
              var _iterator54 = _createForOfIteratorHelper(s),
                  _step54;

              try {
                for (_iterator54.s(); !(_step54 = _iterator54.n()).done;) {
                  var t = _step54.value;

                  this._processPath(t);
                }
              } catch (err) {
                _iterator54.e(err);
              } finally {
                _iterator54.f();
              }
            }
          }
        }, {
          key: "_processPath",
          value: function _processPath(s) {
            if (s) {
              var t,
                  e,
                  i,
                  _o13,
                  _r22,
                  _l14,
                  a = s.length,
                  h = s[0];

              this._isClosed && ++a;

              for (var c = 1; c < a; ++c) {
                var _m4 = void 0;

                _m4 = this._isClosed && c === a - 1 ? s[0] : s[c];

                var _ = _m4[0] - h[0],
                    u = _m4[1] - h[1],
                    p = Math.sqrt(_ * _ + u * u);

                if (c > 1 && p > 0 && i > 0) {
                  (t * _ + e * u) / p / i <= this._maxCosAngle && Object(_CIMCursor_js__WEBPACK_IMPORTED_MODULE_2__["setId"])(h, 1);
                }

                1 === c && (_o13 = _, _r22 = u, _l14 = p), p > 0 && (h = _m4, t = _, e = u, i = p);
              }

              if (this._isClosed && i > 0 && _l14 > 0) {
                (t * _o13 + e * _r22) / _l14 / i <= this._maxCosAngle && Object(_CIMCursor_js__WEBPACK_IMPORTED_MODULE_2__["setId"])(s[0], 1);
              }
            }
          }
        }]);

        return r;
      }();
      /***/

    },

    /***/
    "tqcG":
    /*!************************************************************!*\
      !*** ./node_modules/@arcgis/core/symbols/cim/CIMCursor.js ***!
      \************************************************************/

    /*! exports provided: PathGeometryCursor, PathTransformationCursor, cloneAndDecodeGeometry, deltaDecodeGeometry, deltaEncodeGeometry, getCoord2D, getId, isClosedPath, reverseMultipath, reversePath, setId */

    /***/
    function tqcG(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "PathGeometryCursor", function () {
        return y;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "PathTransformationCursor", function () {
        return C;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "cloneAndDecodeGeometry", function () {
        return o;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "deltaDecodeGeometry", function () {
        return c;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "deltaEncodeGeometry", function () {
        return p;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "getCoord2D", function () {
        return P;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "getId", function () {
        return g;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "isClosedPath", function () {
        return x;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "reverseMultipath", function () {
        return m;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "reversePath", function () {
        return f;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "setId", function () {
        return d;
      });
      /* harmony import */


      var _core_lang_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ../../core/lang.js */
      "f/qv");
      /* harmony import */


      var _geometry_support_jsonUtils_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ../../geometry/support/jsonUtils.js */
      "qatw");
      /* harmony import */


      var _CIMPlacements_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./CIMPlacements.js */
      "WPSO");
      /*
      All material copyright ESRI, All Rights Reserved, unless otherwise specified.
      See https://js.arcgis.com/4.18/esri/copyright.txt for details.
      */


      function o(i) {
        var h = Object(_core_lang_js__WEBPACK_IMPORTED_MODULE_0__["clone"])(i);
        return c(h), h;
      }

      function a(t) {
        if (t) {
          for (var i = t.length - 1; i > 0; --i) {
            t[i][0] -= t[i - 1][0], t[i][1] -= t[i - 1][1];
          }
        }
      }

      function r(t) {
        if (t) {
          var _iterator55 = _createForOfIteratorHelper(t),
              _step55;

          try {
            for (_iterator55.s(); !(_step55 = _iterator55.n()).done;) {
              var i = _step55.value;
              a(i);
            }
          } catch (err) {
            _iterator55.e(err);
          } finally {
            _iterator55.f();
          }
        }
      }

      function l(t) {
        if (t) {
          var i = t.length;

          for (var h = 1; h < i; ++h) {
            t[h][0] += t[h - 1][0], t[h][1] += t[h - 1][1];
          }
        }
      }

      function u(t) {
        if (t) {
          var _iterator56 = _createForOfIteratorHelper(t),
              _step56;

          try {
            for (_iterator56.s(); !(_step56 = _iterator56.n()).done;) {
              var i = _step56.value;
              l(i);
            }
          } catch (err) {
            _iterator56.e(err);
          } finally {
            _iterator56.f();
          }
        }
      }

      function c(t) {
        t && (Object(_geometry_support_jsonUtils_js__WEBPACK_IMPORTED_MODULE_1__["isPolygon"])(t) ? u(t.rings) : Object(_geometry_support_jsonUtils_js__WEBPACK_IMPORTED_MODULE_1__["isPolyline"])(t) ? u(t.paths) : Object(_geometry_support_jsonUtils_js__WEBPACK_IMPORTED_MODULE_1__["isMultipoint"])(t) && l(t.points));
      }

      function p(t) {
        t && (Object(_geometry_support_jsonUtils_js__WEBPACK_IMPORTED_MODULE_1__["isPolygon"])(t) ? r(t.rings) : Object(_geometry_support_jsonUtils_js__WEBPACK_IMPORTED_MODULE_1__["isPolyline"])(t) ? r(t.paths) : Object(_geometry_support_jsonUtils_js__WEBPACK_IMPORTED_MODULE_1__["isMultipoint"])(t) && a(t.points));
      }

      function m(t) {
        if (t) {
          var _iterator57 = _createForOfIteratorHelper(t),
              _step57;

          try {
            for (_iterator57.s(); !(_step57 = _iterator57.n()).done;) {
              var i = _step57.value;
              f(i);
            }
          } catch (err) {
            _iterator57.e(err);
          } finally {
            _iterator57.f();
          }
        }
      }

      function f(t) {
        t && t.reverse();
      }

      function P(t, i, h) {
        return [t[0] + (i[0] - t[0]) * h, t[1] + (i[1] - t[1]) * h];
      }

      function x(t) {
        return !(!t || 0 === t.length) && t[0][0] === t[t.length - 1][0] && t[0][1] === t[t.length - 1][1];
      }

      function g(t) {
        return t[4];
      }

      function d(t, i) {
        t[4] = i;
      }

      var C = /*#__PURE__*/function () {
        function C(t, n, o, a) {
          _classCallCheck(this, C);

          this.acceptPolygon = n, this.acceptPolyline = o, this.geomUnitsPerPoint = a, this.pathCount = -1, this.pathIndex = -1, this.iteratePath = !1, t && (Object(_geometry_support_jsonUtils_js__WEBPACK_IMPORTED_MODULE_1__["isPolygon"])(t) ? n && (this.multiPath = t.rings, this.isClosed = !0) : Object(_geometry_support_jsonUtils_js__WEBPACK_IMPORTED_MODULE_1__["isPolyline"])(t) ? o && (this.multiPath = t.paths, this.isClosed = !1) : Object(_geometry_support_jsonUtils_js__WEBPACK_IMPORTED_MODULE_1__["isExtent"])(t) && n && (this.multiPath = I(t).rings, this.isClosed = !0), this.multiPath && (this.pathCount = this.multiPath.length)), this.internalPlacement = new _CIMPlacements_js__WEBPACK_IMPORTED_MODULE_2__["Placement"]();
        }

        _createClass(C, [{
          key: "next",
          value: function next() {
            if (!this.multiPath) return null;

            for (; this.iteratePath || this.pathIndex < this.pathCount - 1;) {
              this.iteratePath || this.pathIndex++;
              var t = this.processPath(this.multiPath[this.pathIndex]);
              if (t) return t;
            }

            return this.pathCount = -1, this.pathIndex = -1, this.multiPath = null, null;
          }
        }]);

        return C;
      }();

      var y = /*#__PURE__*/function () {
        function y(t, i, h, n) {
          _classCallCheck(this, y);

          this.inputGeometries = t, this.acceptPolygon = i, this.acceptPolyline = h, this.geomUnitsPerPoint = n, this.pathCount = -1, this.pathIndex = -1, this.iteratePath = !1;
        }

        _createClass(y, [{
          key: "next",
          value: function next() {
            for (;;) {
              if (!this.multiPath) {
                var t = this.inputGeometries.next();

                for (; t;) {
                  if (Object(_geometry_support_jsonUtils_js__WEBPACK_IMPORTED_MODULE_1__["isPolygon"])(t) ? this.acceptPolygon && (this.multiPath = t.rings, this.isClosed = !0) : Object(_geometry_support_jsonUtils_js__WEBPACK_IMPORTED_MODULE_1__["isPolyline"])(t) ? this.acceptPolyline && (this.multiPath = t.paths, this.isClosed = !1) : Object(_geometry_support_jsonUtils_js__WEBPACK_IMPORTED_MODULE_1__["isExtent"])(t) && this.acceptPolygon && (this.multiPath = I(t).rings, this.isClosed = !0), this.multiPath) {
                    this.pathCount = this.multiPath.length, this.pathIndex = -1;
                    break;
                  }

                  t = this.inputGeometries.next();
                }

                if (!this.multiPath) return null;
              }

              for (; this.iteratePath || this.pathIndex < this.pathCount - 1;) {
                this.iteratePath || this.pathIndex++;

                var _t62 = this.processPath(this.multiPath[this.pathIndex]);

                if (_t62) return _t62;
              }

              this.pathCount = -1, this.pathIndex = -1, this.multiPath = null;
            }
          }
        }]);

        return y;
      }();

      function I(t) {
        return {
          rings: [[[t.xmin, t.ymin], [t.xmin, t.ymax], [t.xmax, t.ymax], [t.xmax, t.ymin], [t.xmin, t.ymin]]]
        };
      }
      /***/

    },

    /***/
    "vxUa":
    /*!********************************************************************!*\
      !*** ./node_modules/@arcgis/core/symbols/cim/effects/EffectCut.js ***!
      \********************************************************************/

    /*! exports provided: EffectCut */

    /***/
    function vxUa(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "EffectCut", function () {
        return u;
      });
      /* harmony import */


      var _CIMCursor_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ../CIMCursor.js */
      "tqcG");
      /* harmony import */


      var _CurveHelper_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ../CurveHelper.js */
      "/vtc");
      /*
      All material copyright ESRI, All Rights Reserved, unless otherwise specified.
      See https://js.arcgis.com/4.18/esri/copyright.txt for details.
      */


      var u = /*#__PURE__*/function () {
        function u() {
          _classCallCheck(this, u);
        }

        _createClass(u, [{
          key: "execute",
          value: function execute(e, t, _u7) {
            return new s(e, t, _u7);
          }
        }], [{
          key: "local",
          value: function local() {
            return null === u.instance && (u.instance = new u()), u.instance;
          }
        }]);

        return u;
      }();

      u.instance = null;

      var s = /*#__PURE__*/function (_CIMCursor_js__WEBPAC9) {
        _inherits(s, _CIMCursor_js__WEBPAC9);

        var _super13 = _createSuper(s);

        function s(e, u, _s68) {
          var _this12;

          _classCallCheck(this, s);

          _this12 = _super13.call(this, e, !0, !0), _this12._curveHelper = new _CurveHelper_js__WEBPACK_IMPORTED_MODULE_1__["CurveHelper"](), _this12._beginCut = (void 0 !== u.beginCut ? u.beginCut : 1) * _s68, _this12._endCut = (void 0 !== u.endCut ? u.endCut : 1) * _s68, _this12._middleCut = (void 0 !== u.middleCut ? u.middleCut : 0) * _s68, _this12._invert = void 0 !== u.invert && u.invert, _this12._beginCut < 0 && (_this12._beginCut = 0), _this12._endCut < 0 && (_this12._endCut = 0), _this12._middleCut < 0 && (_this12._middleCut = 0);
          return _this12;
        }

        _createClass(s, [{
          key: "processPath",
          value: function processPath(e) {
            var t = this._beginCut,
                u = this._endCut,
                _s69 = this._middleCut,
                i = this._curveHelper.calculatePathLength(e),
                r = [];

            if (this._invert) {
              if (0 === t && 0 === u && 0 === _s69) ;else if (t + u + _s69 >= i) r.push(e);else {
                var n = this._curveHelper.getSubCurve(e, 0, t);

                n && r.push(n), n = this._curveHelper.getSubCurve(e, .5 * (i - _s69), .5 * (i + _s69)), n && r.push(n), n = this._curveHelper.getSubCurve(e, i - u, u), n && r.push(n);
              }
            } else if (0 === t && 0 === u && 0 === _s69) r.push(e);else if (t + u + _s69 >= i) ;else if (0 === _s69) {
              var _s71 = this._curveHelper.getSubCurve(e, t, i - u);

              _s71 && r.push(_s71);
            } else {
              var _n18 = this._curveHelper.getSubCurve(e, t, .5 * (i - _s69));

              _n18 && r.push(_n18), _n18 = this._curveHelper.getSubCurve(e, .5 * (i + _s69), i - u), _n18 && r.push(_n18);
            }
            return 0 === r.length ? null : {
              paths: r
            };
          }
        }]);

        return s;
      }(_CIMCursor_js__WEBPACK_IMPORTED_MODULE_0__["PathGeometryCursor"]);
      /***/

    }
  }]);
})();
//# sourceMappingURL=default~layers-FeatureLayerView2D-js~layers-GeoRSSLayerView2D-js~layers-GraphicsLayerView2D-js~layer~9fe18dbe-es5.js.map