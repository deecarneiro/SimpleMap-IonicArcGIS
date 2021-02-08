(function () {
  function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

  function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

  function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

  function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

  function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

  function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }

  function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

  function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && Symbol.iterator in Object(iter)) return Array.from(iter); }

  function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }

  function _get(target, property, receiver) { if (typeof Reflect !== "undefined" && Reflect.get) { _get = Reflect.get; } else { _get = function _get(target, property, receiver) { var base = _superPropBase(target, property); if (!base) return; var desc = Object.getOwnPropertyDescriptor(base, property); if (desc.get) { return desc.get.call(receiver); } return desc.value; }; } return _get(target, property, receiver || target); }

  function _superPropBase(object, property) { while (!Object.prototype.hasOwnProperty.call(object, property)) { object = _getPrototypeOf(object); if (object === null) break; } return object; }

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

  function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

  function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

  function _iterableToArrayLimit(arr, i) { if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr))) return; var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

  function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

  function _createForOfIteratorHelper(o, allowArrayLike) { var it; if (typeof Symbol === "undefined" || o[Symbol.iterator] == null) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e23) { throw _e23; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = o[Symbol.iterator](); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e24) { didErr = true; err = _e24; }, f: function f() { try { if (!normalCompletion && it["return"] != null) it["return"](); } finally { if (didErr) throw err; } } }; }

  function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

  function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["common"], {
    /***/
    "0/6H":
    /*!*********************************************************************!*\
      !*** ./node_modules/@ionic/core/dist/esm/button-active-a6787d69.js ***!
      \*********************************************************************/

    /*! exports provided: c */

    /***/
    function H(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "c", function () {
        return createButtonActiveGesture;
      });
      /* harmony import */


      var _index_e806d1f6_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ./index-e806d1f6.js */
      "A36C");
      /* harmony import */


      var _index_f49d994d_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./index-f49d994d.js */
      "iWo5");
      /* harmony import */


      var _haptic_27b3f981_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./haptic-27b3f981.js */
      "qULd");

      var createButtonActiveGesture = function createButtonActiveGesture(el, isButton) {
        var currentTouchedButton;
        var initialTouchedButton;

        var activateButtonAtPoint = function activateButtonAtPoint(x, y, hapticFeedbackFn) {
          if (typeof document === 'undefined') {
            return;
          }

          var target = document.elementFromPoint(x, y);

          if (!target || !isButton(target)) {
            clearActiveButton();
            return;
          }

          if (target !== currentTouchedButton) {
            clearActiveButton();
            setActiveButton(target, hapticFeedbackFn);
          }
        };

        var setActiveButton = function setActiveButton(button, hapticFeedbackFn) {
          currentTouchedButton = button;

          if (!initialTouchedButton) {
            initialTouchedButton = currentTouchedButton;
          }

          var buttonToModify = currentTouchedButton;
          Object(_index_e806d1f6_js__WEBPACK_IMPORTED_MODULE_0__["c"])(function () {
            return buttonToModify.classList.add('ion-activated');
          });
          hapticFeedbackFn();
        };

        var clearActiveButton = function clearActiveButton() {
          var dispatchClick = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : false;

          if (!currentTouchedButton) {
            return;
          }

          var buttonToModify = currentTouchedButton;
          Object(_index_e806d1f6_js__WEBPACK_IMPORTED_MODULE_0__["c"])(function () {
            return buttonToModify.classList.remove('ion-activated');
          });
          /**
           * Clicking on one button, but releasing on another button
           * does not dispatch a click event in browsers, so we
           * need to do it manually here. Some browsers will
           * dispatch a click if clicking on one button, dragging over
           * another button, and releasing on the original button. In that
           * case, we need to make sure we do not cause a double click there.
           */

          if (dispatchClick && initialTouchedButton !== currentTouchedButton) {
            currentTouchedButton.click();
          }

          currentTouchedButton = undefined;
        };

        return Object(_index_f49d994d_js__WEBPACK_IMPORTED_MODULE_1__["createGesture"])({
          el: el,
          gestureName: 'buttonActiveDrag',
          threshold: 0,
          onStart: function onStart(ev) {
            return activateButtonAtPoint(ev.currentX, ev.currentY, _haptic_27b3f981_js__WEBPACK_IMPORTED_MODULE_2__["a"]);
          },
          onMove: function onMove(ev) {
            return activateButtonAtPoint(ev.currentX, ev.currentY, _haptic_27b3f981_js__WEBPACK_IMPORTED_MODULE_2__["b"]);
          },
          onEnd: function onEnd() {
            clearActiveButton(true);
            Object(_haptic_27b3f981_js__WEBPACK_IMPORTED_MODULE_2__["h"])();
            initialTouchedButton = undefined;
          }
        });
      };
      /***/

    },

    /***/
    "2uVf":
    /*!*****************************************************!*\
      !*** ./node_modules/@arcgis/core/chunks/mat3f64.js ***!
      \*****************************************************/

    /*! exports provided: a, b, c, f, m */

    /***/
    function uVf(module, __webpack_exports__, __webpack_require__) {
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
        return t;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "f", function () {
        return n;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "m", function () {
        return a;
      });
      /*
      All material copyright ESRI, All Rights Reserved, unless otherwise specified.
      See https://js.arcgis.com/4.18/esri/copyright.txt for details.
      */


      function e() {
        return [1, 0, 0, 0, 1, 0, 0, 0, 1];
      }

      function r(e) {
        return [e[0], e[1], e[2], e[3], e[4], e[5], e[6], e[7], e[8]];
      }

      function n(e, r, n, t, a, o, u, c, f) {
        return [e, r, n, t, a, o, u, c, f];
      }

      function t(e, r) {
        return new Float64Array(e, r, 9);
      }

      var a = Object.freeze({
        __proto__: null,
        create: e,
        clone: r,
        fromValues: n,
        createView: t
      });
      /***/
    },

    /***/
    "46M0":
    /*!******************************************************************************!*\
      !*** ./node_modules/@arcgis/core/layers/graphics/sources/geojson/geojson.js ***!
      \******************************************************************************/

    /*! exports provided: createOptimizedFeatures, inferLayerProperties, validateGeoJSON */

    /***/
    function M0(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      var _marked = /*#__PURE__*/regeneratorRuntime.mark(i),
          _marked2 = /*#__PURE__*/regeneratorRuntime.mark(s);

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "createOptimizedFeatures", function () {
        return b;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "inferLayerProperties", function () {
        return w;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "validateGeoJSON", function () {
        return h;
      });
      /* harmony import */


      var _core_Error_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ../../../../core/Error.js */
      "zlDU");
      /* harmony import */


      var _OptimizedFeature_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ../../OptimizedFeature.js */
      "k5I3");
      /* harmony import */


      var _OptimizedGeometry_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ../../OptimizedGeometry.js */
      "gVKr");
      /*
      All material copyright ESRI, All Rights Reserved, unless otherwise specified.
      See https://js.arcgis.com/4.18/esri/copyright.txt for details.
      */


      function o(e) {
        var t = [];
        return e.forEach(function (e) {
          return t.push(e);
        }), t;
      }

      var r = {
        LineString: "esriGeometryPolyline",
        MultiLineString: "esriGeometryPolyline",
        MultiPoint: "esriGeometryMultipoint",
        Point: "esriGeometryPoint",
        Polygon: "esriGeometryPolygon",
        MultiPolygon: "esriGeometryPolygon"
      };

      function i(e) {
        var _iterator, _step, t;

        return regeneratorRuntime.wrap(function i$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _context.t0 = e.type;
                _context.next = _context.t0 === "Feature" ? 3 : _context.t0 === "FeatureCollection" ? 6 : 25;
                break;

              case 3:
                _context.next = 5;
                return e;

              case 5:
                return _context.abrupt("break", 25);

              case 6:
                _iterator = _createForOfIteratorHelper(e.features);
                _context.prev = 7;

                _iterator.s();

              case 9:
                if ((_step = _iterator.n()).done) {
                  _context.next = 17;
                  break;
                }

                t = _step.value;
                _context.t1 = t;

                if (!_context.t1) {
                  _context.next = 15;
                  break;
                }

                _context.next = 15;
                return t;

              case 15:
                _context.next = 9;
                break;

              case 17:
                _context.next = 22;
                break;

              case 19:
                _context.prev = 19;
                _context.t2 = _context["catch"](7);

                _iterator.e(_context.t2);

              case 22:
                _context.prev = 22;

                _iterator.f();

                return _context.finish(22);

              case 25:
              case "end":
                return _context.stop();
            }
          }
        }, _marked, null, [[7, 19, 22, 25]]);
      }

      function s(e) {
        var _iterator2, _step2, t, _iterator3, _step3, _t, _iterator4, _step4, _e;

        return regeneratorRuntime.wrap(function s$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                if (e) {
                  _context2.next = 2;
                  break;
                }

                return _context2.abrupt("return", null);

              case 2:
                _context2.t0 = e.type;
                _context2.next = _context2.t0 === "Point" ? 5 : _context2.t0 === "LineString" ? 8 : _context2.t0 === "MultiPoint" ? 8 : _context2.t0 === "MultiLineString" ? 10 : _context2.t0 === "Polygon" ? 10 : _context2.t0 === "MultiPolygon" ? 27 : 58;
                break;

              case 5:
                _context2.next = 7;
                return e.coordinates;

              case 7:
                return _context2.abrupt("break", 58);

              case 8:
                return _context2.delegateYield(e.coordinates, "t1", 9);

              case 9:
                return _context2.abrupt("break", 58);

              case 10:
                _iterator2 = _createForOfIteratorHelper(e.coordinates);
                _context2.prev = 11;

                _iterator2.s();

              case 13:
                if ((_step2 = _iterator2.n()).done) {
                  _context2.next = 18;
                  break;
                }

                t = _step2.value;
                return _context2.delegateYield(t, "t2", 16);

              case 16:
                _context2.next = 13;
                break;

              case 18:
                _context2.next = 23;
                break;

              case 20:
                _context2.prev = 20;
                _context2.t3 = _context2["catch"](11);

                _iterator2.e(_context2.t3);

              case 23:
                _context2.prev = 23;

                _iterator2.f();

                return _context2.finish(23);

              case 26:
                return _context2.abrupt("break", 58);

              case 27:
                _iterator3 = _createForOfIteratorHelper(e.coordinates);
                _context2.prev = 28;

                _iterator3.s();

              case 30:
                if ((_step3 = _iterator3.n()).done) {
                  _context2.next = 50;
                  break;
                }

                _t = _step3.value;
                _iterator4 = _createForOfIteratorHelper(_t);
                _context2.prev = 33;

                _iterator4.s();

              case 35:
                if ((_step4 = _iterator4.n()).done) {
                  _context2.next = 40;
                  break;
                }

                _e = _step4.value;
                return _context2.delegateYield(_e, "t4", 38);

              case 38:
                _context2.next = 35;
                break;

              case 40:
                _context2.next = 45;
                break;

              case 42:
                _context2.prev = 42;
                _context2.t5 = _context2["catch"](33);

                _iterator4.e(_context2.t5);

              case 45:
                _context2.prev = 45;

                _iterator4.f();

                return _context2.finish(45);

              case 48:
                _context2.next = 30;
                break;

              case 50:
                _context2.next = 55;
                break;

              case 52:
                _context2.prev = 52;
                _context2.t6 = _context2["catch"](28);

                _iterator3.e(_context2.t6);

              case 55:
                _context2.prev = 55;

                _iterator3.f();

                return _context2.finish(55);

              case 58:
              case "end":
                return _context2.stop();
            }
          }
        }, _marked2, null, [[11, 20, 23, 26], [28, 52, 55, 58], [33, 42, 45, 48]]);
      }

      function c(e) {
        for (;;) {
          var _e$next = e.next(),
              t = _e$next.value,
              n = _e$next.done;

          if (n) return !1;
          if (t.length > 2) return !0;
        }
      }

      function u(e) {
        var t = 0;

        for (var n = 0; n < e.length; n++) {
          var _o = e[n],
              _r = e[(n + 1) % e.length];
          t += _o[0] * _r[1] - _r[0] * _o[1];
        }

        return t <= 0;
      }

      function l(e) {
        var t = e[0],
            n = e[e.length - 1];
        return t[0] === n[0] && t[1] === n[1] && t[2] === n[2] || e.push(t), e;
      }

      function f(e, t, n) {
        switch (t.type) {
          case "LineString":
            return function (e, t, n) {
              return p(e, t.coordinates, n), e;
            }(e, t, n);

          case "MultiLineString":
            return function (e, t, n) {
              var _iterator5 = _createForOfIteratorHelper(t.coordinates),
                  _step5;

              try {
                for (_iterator5.s(); !(_step5 = _iterator5.n()).done;) {
                  var _o2 = _step5.value;
                  p(e, _o2, n);
                }
              } catch (err) {
                _iterator5.e(err);
              } finally {
                _iterator5.f();
              }

              return e;
            }(e, t, n);

          case "MultiPoint":
            return function (e, t, n) {
              return p(e, t.coordinates, n), e;
            }(e, t, n);

          case "MultiPolygon":
            return function (e, t, n) {
              var _iterator6 = _createForOfIteratorHelper(t.coordinates),
                  _step6;

              try {
                for (_iterator6.s(); !(_step6 = _iterator6.n()).done;) {
                  var _o3 = _step6.value;
                  a(e, _o3[0], n);

                  for (var _t2 = 1; _t2 < _o3.length; _t2++) {
                    y(e, _o3[_t2], n);
                  }
                }
              } catch (err) {
                _iterator6.e(err);
              } finally {
                _iterator6.f();
              }

              return e;
            }(e, t, n);

          case "Point":
            return function (e, t, n) {
              return g(e, t.coordinates, n), e;
            }(e, t, n);

          case "Polygon":
            return function (e, t, n) {
              var o = t.coordinates;
              a(e, o[0], n);

              for (var _t3 = 1; _t3 < o.length; _t3++) {
                y(e, o[_t3], n);
              }

              return e;
            }(e, t, n);
        }
      }

      function a(e, t, n) {
        var o = l(t);
        u(o) ? p(e, o, n) : d(e, o, n);
      }

      function y(e, t, n) {
        var o = l(t);
        u(o) ? d(e, o, n) : p(e, o, n);
      }

      function p(e, t, n) {
        var _iterator7 = _createForOfIteratorHelper(t),
            _step7;

        try {
          for (_iterator7.s(); !(_step7 = _iterator7.n()).done;) {
            var _o4 = _step7.value;
            g(e, _o4, n);
          }
        } catch (err) {
          _iterator7.e(err);
        } finally {
          _iterator7.f();
        }

        e.lengths.push(t.length);
      }

      function d(e, t, n) {
        for (var _o5 = t.length - 1; _o5 >= 0; _o5--) {
          g(e, t[_o5], n);
        }

        e.lengths.push(t.length);
      }

      function g(e, t, n) {
        var _t4 = _slicedToArray(t, 3),
            o = _t4[0],
            r = _t4[1],
            i = _t4[2];

        e.coords.push(o, r), n.hasZ && e.coords.push(i || 0);
      }

      function m(e) {
        switch (typeof e) {
          case "string":
            return "esriFieldTypeString";

          case "number":
            return "esriFieldTypeDouble";

          default:
            return "unknown";
        }
      }

      function h(t) {
        if (!t) throw new _core_Error_js__WEBPACK_IMPORTED_MODULE_0__["default"]("geojson-layer:empty", "GeoJSON data is empty");
        if ("Feature" !== t.type && "FeatureCollection" !== t.type) throw new _core_Error_js__WEBPACK_IMPORTED_MODULE_0__["default"]("geojson-layer:unsupported-geojson-object", "missing or not supported GeoJSON object type", {
          data: t
        });
        var n = t.crs;
        if (!n) return;
        var o = "string" == typeof n ? n : "name" === n.type ? n.properties.name : null,
            r = new RegExp(".*(CRS84H?|4326)$", "i");
        if (!o || !r.test(o)) throw new _core_Error_js__WEBPACK_IMPORTED_MODULE_0__["default"]("geojson-layer:unsupported-crs", "unsupported GeoJSON 'crs' member", {
          crs: n
        });
      }

      function w(e) {
        var t = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
        var n = i(e),
            u = [],
            l = new Set(),
            f = new Set();
        var a,
            y = !1,
            p = Number.NEGATIVE_INFINITY,
            d = null,
            g = !1,
            _t$geometryType = t.geometryType,
            h = _t$geometryType === void 0 ? null : _t$geometryType,
            w = !1;

        var _loop = function _loop() {
          var _n$next = n.next(),
              e = _n$next.value,
              t = _n$next.done;

          if (t) {
            var _e2 = d && 1 === d.length && d[0] || null;

            if (_e2) {
              var _iterator8 = _createForOfIteratorHelper(u),
                  _step8;

              try {
                for (_iterator8.s(); !(_step8 = _iterator8.n()).done;) {
                  var _t5 = _step8.value;
                  _t5.name === _e2 && (_t5.type = "esriFieldTypeOID");
                }
              } catch (err) {
                _iterator8.e(err);
              } finally {
                _iterator8.f();
              }
            }

            return {
              v: {
                fields: u,
                geometryType: h,
                hasZ: y,
                maxObjectId: Math.max(0, p),
                objectIdFieldName: _e2,
                objectIdFieldType: a,
                unknownFields: o(f)
              }
            };
          }

          var i = e.geometry,
              b = e.properties,
              P = e.id;

          if (!i || (h || (h = r[i.type]), r[i.type] === h)) {
            if (!y) {
              y = c(s(i));
            }

            if (g || (g = null != P, g && (a = typeof P, "number" === a && (d = Object.keys(b).filter(function (e) {
              return b[e] === P;
            })))), g && "number" === a && null != P && (p = Math.max(p, P), d.length > 1 ? d = d.filter(function (e) {
              return b[e] === P;
            }) : 1 === d.length && (d = b[d[0]] === P ? d : [])), !w && b) {
              var _e3 = !0;

              for (var _t6 in b) {
                if (l.has(_t6)) continue;
                var _n2 = b[_t6];

                if (null == _n2) {
                  _e3 = !1, f.add(_t6);
                  continue;
                }

                var _o6 = m(_n2);

                "unknown" !== _o6 ? (f["delete"](_t6), l.add(_t6), u.push({
                  name: _t6,
                  alias: _t6,
                  type: _o6
                })) : f.add(_t6);
              }

              w = _e3;
            }
          }
        };

        for (;;) {
          var _ret = _loop();

          if (typeof _ret === "object") return _ret.v;
        }
      }

      function b(e, o) {
        return function (e) {
          var t = [];

          for (;;) {
            var _e$next2 = e.next(),
                n = _e$next2.value,
                _o7 = _e$next2.done;

            if (_o7) return t;
            t.push(n);
          }
        }( /*#__PURE__*/regeneratorRuntime.mark(function _callee(e) {
          var o,
              i,
              s,
              _e$next3,
              _c,
              _u,
              _l,
              _a,
              _y,
              _p,
              _d2,
              _args3 = arguments;

          return regeneratorRuntime.wrap(function _callee$(_context3) {
            while (1) {
              switch (_context3.prev = _context3.next) {
                case 0:
                  o = _args3.length > 1 && _args3[1] !== undefined ? _args3[1] : {};
                  i = o.geometryType, s = o.objectIdFieldName;

                case 2:
                  _e$next3 = e.next(), _c = _e$next3.value, _u = _e$next3.done;

                  if (!_u) {
                    _context3.next = 5;
                    break;
                  }

                  return _context3.abrupt("return");

                case 5:
                  _l = _c.geometry, _a = _c.properties, _y = _c.id;

                  if (!(_l && r[_l.type] !== i)) {
                    _context3.next = 8;
                    break;
                  }

                  return _context3.abrupt("continue", 13);

                case 8:
                  _p = _a || {};
                  s && null != _y && !_p[s] && (_p[s] = _y);
                  _d2 = new _OptimizedFeature_js__WEBPACK_IMPORTED_MODULE_1__["default"](_l ? f(new _OptimizedGeometry_js__WEBPACK_IMPORTED_MODULE_2__["default"](), _l, o) : null, _p);
                  _context3.next = 13;
                  return _d2;

                case 13:
                  _context3.next = 2;
                  break;

                case 15:
                case "end":
                  return _context3.stop();
              }
            }
          }, _callee);
        })(i(e), o));
      }
      /***/

    },

    /***/
    "4xTw":
    /*!**********************************************************************************************!*\
      !*** ./node_modules/@arcgis/core/views/2d/layers/features/tileRenderers/BaseTileRenderer.js ***!
      \**********************************************************************************************/

    /*! exports provided: default */

    /***/
    function xTw(module, __webpack_exports__, __webpack_require__) {
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


      var _core_Logger_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ../../../../../core/Logger.js */
      "6S2I");
      /* harmony import */


      var _core_accessorSupport_ensureType_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ../../../../../core/accessorSupport/ensureType.js */
      "zqDF");
      /* harmony import */


      var _core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ../../../../../core/accessorSupport/decorators/property.js */
      "WbKI");
      /* harmony import */


      var _core_accessorSupport_decorators_subclass_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ../../../../../core/accessorSupport/decorators/subclass.js */
      "04ZG");
      /* harmony import */


      var _core_urlUtils_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ../../../../../core/urlUtils.js */
      "4EHJ");
      /* harmony import */


      var _core_uuid_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! ../../../../../core/uuid.js */
      "ju1D");
      /* harmony import */


      var _portal_support_resourceExtension_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! ../../../../../portal/support/resourceExtension.js */
      "9AIY");
      /* harmony import */


      var _core_HandleOwner_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! ../../../../../core/HandleOwner.js */
      "kJYu");
      /*
      All material copyright ESRI, All Rights Reserved, unless otherwise specified.
      See https://js.arcgis.com/4.18/esri/copyright.txt for details.
      */


      var i = /*#__PURE__*/function (_core_HandleOwner_js_) {
        _inherits(i, _core_HandleOwner_js_);

        var _super = _createSuper(i);

        function i(e) {
          var _this;

          _classCallCheck(this, i);

          _this = _super.call(this, e), _this.tiles = new Map();
          return _this;
        }

        _createClass(i, [{
          key: "destroy",
          value: function destroy() {
            this.tiles.clear(), this.layer = this.layerView = this.tileInfoView = this.tiles = null;
          }
        }, {
          key: "updating",
          get: function get() {
            return this.isUpdating();
          }
        }, {
          key: "acquireTile",
          value: function acquireTile(e) {
            var _this2 = this;

            var t = this.createTile(e);
            return t.once("isReady", function () {
              return _this2.notifyChange("updating");
            }), this.tiles.set(e.id, t), t;
          }
        }, {
          key: "forceAttributeTextureUpload",
          value: function forceAttributeTextureUpload() {}
        }, {
          key: "forEachTile",
          value: function forEachTile(e) {
            this.tiles.forEach(e);
          }
        }, {
          key: "releaseTile",
          value: function releaseTile(e) {
            this.tiles["delete"](e.key.id), this.disposeTile(e);
          }
        }, {
          key: "isUpdating",
          value: function isUpdating() {
            var e = !0;
            return this.tiles.forEach(function (t) {
              e = e && t.isReady;
            }), !e;
          }
        }, {
          key: "setHighlight",
          value: function setHighlight() {}
        }, {
          key: "invalidateLabels",
          value: function invalidateLabels() {}
        }, {
          key: "requestUpdate",
          value: function requestUpdate() {
            this.layerView.requestUpdate();
          }
        }]);

        return i;
      }(_core_HandleOwner_js__WEBPACK_IMPORTED_MODULE_9__["HandleOwner"]);

      Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_4__["property"])()], i.prototype, "layer", void 0), Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_4__["property"])()], i.prototype, "layerView", void 0), Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_4__["property"])()], i.prototype, "tileInfoView", void 0), Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_4__["property"])()], i.prototype, "updating", null), i = Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_subclass_js__WEBPACK_IMPORTED_MODULE_5__["subclass"])("esri.views.2d.layers.features.tileRenderers.BaseTileRenderer")], i);
      var o = i;
      /* harmony default export */

      __webpack_exports__["default"] = o;
      /***/
    },

    /***/
    "6Az7":
    /*!**************************************************************************!*\
      !*** ./node_modules/@arcgis/core/views/2d/engine/BitmapTileContainer.js ***!
      \**************************************************************************/

    /*! exports provided: BitmapTileContainer */

    /***/
    function Az7(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "BitmapTileContainer", function () {
        return o;
      });
      /* harmony import */


      var _geometry_support_aaBoundingRect_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ../../../geometry/support/aaBoundingRect.js */
      "kYAx");
      /* harmony import */


      var _webgl_enums_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./webgl/enums.js */
      "yE7X");
      /* harmony import */


      var _brushes_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./brushes.js */
      "Oxob");
      /* harmony import */


      var _webgl_TileContainer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./webgl/TileContainer.js */
      "ZyIX");
      /* harmony import */


      var _BitmapTile_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ./BitmapTile.js */
      "lP2y");
      /*
      All material copyright ESRI, All Rights Reserved, unless otherwise specified.
      See https://js.arcgis.com/4.18/esri/copyright.txt for details.
      */


      var o = /*#__PURE__*/function (_webgl_TileContainer_) {
        _inherits(o, _webgl_TileContainer_);

        var _super2 = _createSuper(o);

        function o() {
          _classCallCheck(this, o);

          return _super2.apply(this, arguments);
        }

        _createClass(o, [{
          key: "createTile",
          value: function createTile(r) {
            var s = this._tileInfoView.getTileBounds(Object(_geometry_support_aaBoundingRect_js__WEBPACK_IMPORTED_MODULE_0__["create"])(), r);

            return new _BitmapTile_js__WEBPACK_IMPORTED_MODULE_4__["BitmapTile"](r, s, this._tileInfoView.tileInfo.size);
          }
        }, {
          key: "destroyTile",
          value: function destroyTile() {}
        }, {
          key: "prepareRenderPasses",
          value: function prepareRenderPasses(e) {
            var _this3 = this;

            var t = e.registerRenderPass({
              name: "bitmap (tile)",
              brushes: [_brushes_js__WEBPACK_IMPORTED_MODULE_2__["brushes"].bitmap],
              target: function target() {
                return _this3.children.map(function (e) {
                  return e.bitmap;
                });
              },
              drawPhase: _webgl_enums_js__WEBPACK_IMPORTED_MODULE_1__["WGLDrawPhase"].MAP
            });
            return [].concat(_toConsumableArray(_get(_getPrototypeOf(o.prototype), "prepareRenderPasses", this).call(this, e)), [t]);
          }
        }, {
          key: "doRender",
          value: function doRender(e) {
            this.visible && e.drawPhase === _webgl_enums_js__WEBPACK_IMPORTED_MODULE_1__["WGLDrawPhase"].MAP && _get(_getPrototypeOf(o.prototype), "doRender", this).call(this, e);
          }
        }]);

        return o;
      }(_webgl_TileContainer_js__WEBPACK_IMPORTED_MODULE_3__["default"]);
      /***/

    },

    /***/
    "74mu":
    /*!*************************************************************!*\
      !*** ./node_modules/@ionic/core/dist/esm/theme-ff3fc52f.js ***!
      \*************************************************************/

    /*! exports provided: c, g, h, o */

    /***/
    function mu(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "c", function () {
        return createColorClasses;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "g", function () {
        return getClassMap;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "h", function () {
        return hostContext;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "o", function () {
        return openURL;
      });

      var hostContext = function hostContext(selector, el) {
        return el.closest(selector) !== null;
      };
      /**
       * Create the mode and color classes for the component based on the classes passed in
       */


      var createColorClasses = function createColorClasses(color, cssClassMap) {
        return typeof color === 'string' && color.length > 0 ? Object.assign(_defineProperty({
          'ion-color': true
        }, "ion-color-".concat(color), true), cssClassMap) : cssClassMap;
      };

      var getClassList = function getClassList(classes) {
        if (classes !== undefined) {
          var array = Array.isArray(classes) ? classes : classes.split(' ');
          return array.filter(function (c) {
            return c != null;
          }).map(function (c) {
            return c.trim();
          }).filter(function (c) {
            return c !== '';
          });
        }

        return [];
      };

      var getClassMap = function getClassMap(classes) {
        var map = {};
        getClassList(classes).forEach(function (c) {
          return map[c] = true;
        });
        return map;
      };

      var SCHEME = /^[a-z][a-z0-9+\-.]*:/;

      var openURL = /*#__PURE__*/function () {
        var _ref = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee2(url, ev, direction, animation) {
          var router;
          return regeneratorRuntime.wrap(function _callee2$(_context4) {
            while (1) {
              switch (_context4.prev = _context4.next) {
                case 0:
                  if (!(url != null && url[0] !== '#' && !SCHEME.test(url))) {
                    _context4.next = 5;
                    break;
                  }

                  router = document.querySelector('ion-router');

                  if (!router) {
                    _context4.next = 5;
                    break;
                  }

                  if (ev != null) {
                    ev.preventDefault();
                  }

                  return _context4.abrupt("return", router.push(url, direction, animation));

                case 5:
                  return _context4.abrupt("return", false);

                case 6:
                case "end":
                  return _context4.stop();
              }
            }
          }, _callee2);
        }));

        return function openURL(_x, _x2, _x3, _x4) {
          return _ref.apply(this, arguments);
        };
      }();
      /***/

    },

    /***/
    "A8Zi":
    /*!**************************************************************!*\
      !*** ./node_modules/@arcgis/core/views/2d/viewStateUtils.js ***!
      \**************************************************************/

    /*! exports provided: bboxIntersects, getBBox, getOuterSize, snapToPixel */

    /***/
    function A8Zi(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "bboxIntersects", function () {
        return s;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "getBBox", function () {
        return r;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "getOuterSize", function () {
        return o;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "snapToPixel", function () {
        return n;
      });
      /*
      All material copyright ESRI, All Rights Reserved, unless otherwise specified.
      See https://js.arcgis.com/4.18/esri/copyright.txt for details.
      */


      var t = Math.PI / 180;

      function n(t, n, o) {
        var r = o.resolution,
            s = o.size;
        return t[0] = r * (Math.round(n[0] / r) + s[0] % 2 * .5), t[1] = r * (Math.round(n[1] / r) + s[1] % 2 * .5), t;
      }

      function o(n, o) {
        var r = o.rotation * t;

        var s = Math.abs(Math.cos(r)),
            u = Math.abs(Math.sin(r)),
            _o$size = _slicedToArray(o.size, 2),
            a = _o$size[0],
            c = _o$size[1];

        return n[0] = Math.round(c * u + a * s), n[1] = Math.round(c * s + a * u), n;
      }

      function r(t, n, o, r) {
        var _n3 = _slicedToArray(n, 2),
            s = _n3[0],
            u = _n3[1],
            _r2 = _slicedToArray(r, 2),
            a = _r2[0],
            c = _r2[1],
            h = .5 * o;

        return t[0] = s - h * a, t[1] = u - h * c, t[2] = s + h * a, t[3] = u + h * c, t;
      }

      function s(t, n) {
        var _t7 = _slicedToArray(t, 4),
            o = _t7[0],
            r = _t7[1],
            s = _t7[2],
            u = _t7[3],
            _n4 = _slicedToArray(n, 4),
            a = _n4[0],
            c = _n4[1],
            h = _n4[2],
            i = _n4[3];

        return !(o > h || s < a || r > i || u < c);
      }
      /***/

    },

    /***/
    "ACSY":
    /*!**********************************************************************!*\
      !*** ./node_modules/@arcgis/core/tasks/support/ProjectParameters.js ***!
      \**********************************************************************/

    /*! exports provided: default */

    /***/
    function ACSY(module, __webpack_exports__, __webpack_require__) {
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


      var _geometry_support_jsonUtils_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
      /*! ../../geometry/support/jsonUtils.js */
      "qatw");
      /*
      All material copyright ESRI, All Rights Reserved, unless otherwise specified.
      See https://js.arcgis.com/4.18/esri/copyright.txt for details.
      */


      var a = _core_Logger_js__WEBPACK_IMPORTED_MODULE_2__["default"].getLogger("esri.tasks.support.ProjectParameters");

      var n = /*#__PURE__*/function (_core_JSONSupport_js_) {
        _inherits(n, _core_JSONSupport_js_);

        var _super3 = _createSuper(n);

        function n(r) {
          var _this4;

          _classCallCheck(this, n);

          _this4 = _super3.call(this, r), _this4.geometries = null, _this4.outSpatialReference = null, _this4.transformation = null, _this4.transformForward = null;
          return _this4;
        }

        _createClass(n, [{
          key: "outSR",
          get: function get() {
            return a.warn("ProjectParameters.outSR is deprecated. Use outSpatialReference instead."), this.outSpatialReference;
          },
          set: function set(r) {
            a.warn("ProjectParameters.outSR is deprecated. Use outSpatialReference instead."), this.outSpatialReference = r;
          }
        }, {
          key: "toJSON",
          value: function toJSON() {
            var r = this.geometries.map(function (r) {
              return r.toJSON();
            }),
                t = this.geometries[0],
                e = {};
            return e.outSR = this.outSpatialReference.wkid || JSON.stringify(this.outSpatialReference.toJSON()), e.inSR = t.spatialReference.wkid || JSON.stringify(t.spatialReference.toJSON()), e.geometries = JSON.stringify({
              geometryType: Object(_geometry_support_jsonUtils_js__WEBPACK_IMPORTED_MODULE_10__["getJsonType"])(t),
              geometries: r
            }), this.transformation && (e.transformation = this.transformation.wkid || JSON.stringify(this.transformation)), null != this.transformForward && (e.transformForward = this.transformForward), e;
          }
        }]);

        return n;
      }(_core_JSONSupport_js__WEBPACK_IMPORTED_MODULE_9__["JSONSupport"]);

      Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_4__["property"])()], n.prototype, "geometries", void 0), Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_4__["property"])({
        json: {
          read: {
            source: "outSR"
          }
        }
      })], n.prototype, "outSpatialReference", void 0), Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_4__["property"])({
        json: {
          read: !1
        }
      })], n.prototype, "outSR", null), Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_4__["property"])()], n.prototype, "transformation", void 0), Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_4__["property"])()], n.prototype, "transformForward", void 0), n = Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_subclass_js__WEBPACK_IMPORTED_MODULE_5__["subclass"])("esri.tasks.support.ProjectParameters")], n);
      var p = n;
      /* harmony default export */

      __webpack_exports__["default"] = p;
      /***/
    },

    /***/
    "AfLA":
    /*!*********************************************************************!*\
      !*** ./node_modules/@arcgis/core/renderers/support/heatmapUtils.js ***!
      \*********************************************************************/

    /*! exports provided: calculateHeatmapIntensityInfo, calculateHeatmapIntensityInfoReaders, createHeatmapImageData, createKernel, createValueFunction, createValueFunctionCursor, drawHeatmap, generateGradient */

    /***/
    function AfLA(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "calculateHeatmapIntensityInfo", function () {
        return n;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "calculateHeatmapIntensityInfoReaders", function () {
        return o;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "createHeatmapImageData", function () {
        return f;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "createKernel", function () {
        return i;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "createValueFunction", function () {
        return c;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "createValueFunctionCursor", function () {
        return u;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "drawHeatmap", function () {
        return a;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "generateGradient", function () {
        return r;
      });
      /* harmony import */


      var _core_global_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ../../core/global.js */
      "3r0u");
      /* harmony import */


      var _core_mathUtils_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ../../core/mathUtils.js */
      "OKTS");
      /*
      All material copyright ESRI, All Rights Reserved, unless otherwise specified.
      See https://js.arcgis.com/4.18/esri/copyright.txt for details.
      */


      var r = function () {
        if (!("document" in _core_global_js__WEBPACK_IMPORTED_MODULE_0__["default"])) return function () {
          return null;
        };
        var e = document.createElement("canvas"),
            r = e.getContext("2d");
        return e.height = 512, e.width = 1, function (t) {
          r.clearRect(0, 0, 1, e.height);
          var n = r.createLinearGradient(0, 0, 0, e.height);

          var _iterator9 = _createForOfIteratorHelper(t.colorStops),
              _step9;

          try {
            for (_iterator9.s(); !(_step9 = _iterator9.n()).done;) {
              var _step9$value = _step9.value,
                  _e4 = _step9$value.ratio,
                  _r3 = _step9$value.color;
              n.addColorStop(Math.max(_e4, .001), "rgba(".concat(_r3[0], ", ").concat(_r3[1], ", ").concat(_r3[2], ", ").concat(_r3[3], ")"));
            }
          } catch (err) {
            _iterator9.e(err);
          } finally {
            _iterator9.f();
          }

          return r.fillStyle = n, r.fillRect(0, 0, 1, e.height), r.getImageData(0, 0, 1, e.height).data;
        };
      }();

      function n(t, e, r, n) {
        var o = e.blurRadius,
            a = e.fieldOffset,
            f = e.field,
            u = new Float64Array(r * n),
            l = i(o),
            s = Math.round(3 * o);
        var h,
            m = Number.NEGATIVE_INFINITY;
        var d = c(f, a);

        var _iterator10 = _createForOfIteratorHelper(t),
            _step10;

        try {
          for (_iterator10.s(); !(_step10 = _iterator10.n()).done;) {
            var _step10$value = _step10.value,
                _e5 = _step10$value.geometry,
                _o8 = _step10$value.attributes;

            var _t8 = _e5.x - s,
                _a2 = _e5.y - s,
                _f = Math.max(0, _t8),
                _i2 = Math.max(0, _a2),
                _c2 = Math.min(n, _e5.y + s),
                g = Math.min(r, _e5.x + s),
                y = +d(_o8);

            for (var _e6 = _i2; _e6 < _c2; _e6++) {
              var _n5 = l[_e6 - _a2];

              for (var _o9 = _f; _o9 < g; _o9++) {
                var _a3 = l[_o9 - _t8];
                h = u[_e6 * r + _o9] += _n5 * _a3 * y, h > m && (m = h);
              }
            }
          }
        } catch (err) {
          _iterator10.e(err);
        } finally {
          _iterator10.f();
        }

        return {
          matrix: u.buffer,
          max: m
        };
      }

      function o(t, e, r, n) {
        var o = e.blurRadius,
            a = e.fieldOffset,
            f = e.field,
            c = new Float64Array(r * n),
            l = i(o),
            s = Math.round(3 * o);
        var h,
            m = Number.NEGATIVE_INFINITY;
        var d = u(f, a),
            g = new Set();

        var _iterator11 = _createForOfIteratorHelper(t),
            _step11;

        try {
          for (_iterator11.s(); !(_step11 = _iterator11.n()).done;) {
            var _e7 = _step11.value;

            var _t9 = _e7.getCursor();

            for (; _t9.next();) {
              var _e8 = _t9.getObjectId();

              if (g.has(_e8)) continue;
              g.add(_e8);

              var _o10 = _t9.readLegacyPointGeometry(),
                  _a4 = +d(_t9),
                  _f2 = _o10.x - s,
                  _i3 = _o10.y - s,
                  _u2 = Math.max(0, _f2),
                  y = Math.max(0, _i3),
                  b = Math.min(n, _o10.y + s),
                  x = Math.min(r, _o10.x + s);

              for (var _t10 = y; _t10 < b; _t10++) {
                var _e9 = l[_t10 - _i3];

                for (var _n6 = _u2; _n6 < x; _n6++) {
                  var _o11 = l[_n6 - _f2];
                  h = c[_t10 * r + _n6] += _e9 * _o11 * _a4, h > m && (m = h);
                }
              }
            }
          }
        } catch (err) {
          _iterator11.e(err);
        } finally {
          _iterator11.f();
        }

        return {
          matrix: c.buffer,
          max: m
        };
      }

      function a(t, e, r, n, o, a) {
        t.canvas.width = t.canvas.height = e, t.clearRect(0, 0, e, e);
        var i = t.getImageData(0, 0, e, e);
        r && n && i.data.set(new Uint8ClampedArray(f(e, r, n, o, a))), t.putImageData(i, 0, 0);
      }

      function f(t, r, n, o, a) {
        var f = new Uint32Array(t * t),
            i = "buffer" in r ? r : new Float64Array(r),
            c = "buffer" in n ? new Uint32Array(n.buffer) : new Uint32Array(new Uint8Array(n).buffer),
            u = c.length / (a - o);

        for (var _t11 = 0; _t11 < i.length; _t11++) {
          var _r4 = i[_t11],
              _n7 = Math.floor((_r4 - o) * u);

          f[_t11] = c[Object(_core_mathUtils_js__WEBPACK_IMPORTED_MODULE_1__["clamp"])(_n7, 0, c.length - 1)];
        }

        return f.buffer;
      }

      function i(t) {
        var e = Math.round(3 * t),
            r = 2 * t * t,
            n = new Float64Array(2 * e + 1);

        for (var _o12 = 0; _o12 <= n.length; _o12++) {
          n[_o12] = Math.exp(-Math.pow(_o12 - e, 2) / r) / Math.sqrt(2 * Math.PI) * (t / 2);
        }

        return n;
      }

      function c(t, e) {
        return "function" == typeof t ? t : t ? "string" == typeof e ? function (e) {
          return -1 * +e[t];
        } : function (r) {
          return +r[t] + e;
        } : function () {
          return 1;
        };
      }

      function u(t, e) {
        return null != t ? "string" == typeof e ? function (e) {
          return -1 * +e.readAttribute(t);
        } : function (r) {
          return +r.readAttribute(t) + e;
        } : function (t) {
          return 1;
        };
      }
      /***/

    },

    /***/
    "BGvB":
    /*!**************************************************************!*\
      !*** ./node_modules/@arcgis/core/layers/support/kmlUtils.js ***!
      \**************************************************************/

    /*! exports provided: computeExtent, fetchService, getGraphics, parseKML, sublayersFromJSON */

    /***/
    function BGvB(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "computeExtent", function () {
        return P;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "fetchService", function () {
        return g;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "getGraphics", function () {
        return h;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "parseKML", function () {
        return d;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "sublayersFromJSON", function () {
        return S;
      });
      /* harmony import */


      var _core_lang_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ../../core/lang.js */
      "f/qv");
      /* harmony import */


      var _config_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ../../config.js */
      "EyXx");
      /* harmony import */


      var _core_urlUtils_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ../../core/urlUtils.js */
      "4EHJ");
      /* harmony import */


      var _geometry_SpatialReference_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ../../geometry/SpatialReference.js */
      "WZb1");
      /* harmony import */


      var _geometry_support_boundsUtils_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ../../geometry/support/boundsUtils.js */
      "KLE9");
      /* harmony import */


      var _PopupTemplate_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ../../PopupTemplate.js */
      "SFah");
      /* harmony import */


      var _kernel_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ../../kernel.js */
      "975N");
      /* harmony import */


      var _request_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! ../../request.js */
      "Lqtk");
      /* harmony import */


      var _renderers_support_jsonUtils_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! ../../renderers/support/jsonUtils.js */
      "+Xal");
      /* harmony import */


      var _tasks_support_FeatureSet_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! ../../tasks/support/FeatureSet.js */
      "8prj");
      /* harmony import */


      var _geometry_support_aaBoundingBox_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
      /*! ../../geometry/support/aaBoundingBox.js */
      "QmHG");
      /*
      All material copyright ESRI, All Rights Reserved, unless otherwise specified.
      See https://js.arcgis.com/4.18/esri/copyright.txt for details.
      */


      var c = {
        esriGeometryPoint: "points",
        esriGeometryPolyline: "polylines",
        esriGeometryPolygon: "polygons"
      };

      function d(o) {
        var t = o.folders || [],
            r = t.slice(),
            s = new Map(),
            n = new Map(),
            i = new Map(),
            a = new Map(),
            f = new Map(),
            l = {
          esriGeometryPoint: n,
          esriGeometryPolyline: i,
          esriGeometryPolygon: a
        };
        (o.featureCollection && o.featureCollection.layers || []).forEach(function (o) {
          var t = Object(_core_lang_js__WEBPACK_IMPORTED_MODULE_0__["clone"])(o);
          t.featureSet.features = [];
          var r = o.featureSet.geometryType;
          s.set(r, t);
          var f = o.layerDefinition.objectIdField;
          "esriGeometryPoint" === r ? G(n, f, o.featureSet.features) : "esriGeometryPolyline" === r ? G(i, f, o.featureSet.features) : "esriGeometryPolygon" === r && G(a, f, o.featureSet.features);
        }), o.groundOverlays && o.groundOverlays.forEach(function (e) {
          f.set(e.id, e);
        }), t.forEach(function (e) {
          e.networkLinkIds.forEach(function (t) {
            var s = function (e, o, t) {
              var r = function (e, o) {
                var t;
                return o.some(function (o) {
                  return o.id === e && (t = o, !0);
                }), t;
              }(e, t);

              r && (r.parentFolderId = o, r.networkLink = r);
              return r;
            }(t, e.id, o.networkLinks);

            s && r.push(s);
          });
        }), r.forEach(function (o) {
          o.featureInfos && (o.points = Object(_core_lang_js__WEBPACK_IMPORTED_MODULE_0__["clone"])(s.get("esriGeometryPoint")), o.polylines = Object(_core_lang_js__WEBPACK_IMPORTED_MODULE_0__["clone"])(s.get("esriGeometryPolyline")), o.polygons = Object(_core_lang_js__WEBPACK_IMPORTED_MODULE_0__["clone"])(s.get("esriGeometryPolygon")), o.mapImages = [], o.featureInfos.map(function (e) {
            switch (e.type) {
              case "esriGeometryPoint":
              case "esriGeometryPolyline":
              case "esriGeometryPolygon":
                {
                  var _t12 = l[e.type].get(e.id);

                  _t12 && o[c[e.type]].featureSet.features.push(_t12);
                  break;
                }

              case "GroundOverlay":
                {
                  var _t13 = f.get(e.id);

                  _t13 && o.mapImages.push(_t13);
                  break;
                }
            }
          }), o.fullExtent = P([o]));
        });
        var u = P(r);
        return {
          folders: t,
          sublayers: r,
          extent: u
        };
      }

      function g(e, r, s, n) {
        var f = _kernel_js__WEBPACK_IMPORTED_MODULE_6__["id"] && _kernel_js__WEBPACK_IMPORTED_MODULE_6__["id"].findCredential(e);

        e = Object(_core_urlUtils_js__WEBPACK_IMPORTED_MODULE_2__["addQueryParameters"])(e, {
          token: f && f.token
        });
        var l = _config_js__WEBPACK_IMPORTED_MODULE_1__["default"].kmlServiceUrl;
        return Object(_request_js__WEBPACK_IMPORTED_MODULE_7__["default"])(l, {
          query: {
            url: e,
            model: "simple",
            folders: "",
            refresh: 0 !== s || void 0,
            outSR: JSON.stringify(r)
          },
          responseType: "json",
          signal: n
        });
      }

      function S(e, o) {
        var t = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : null;
        var r = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : [];
        var s = [],
            n = {},
            i = o.sublayers,
            a = o.folders.map(function (e) {
          return e.id;
        });
        return i.forEach(function (o) {
          var i = new e();

          if (t ? i.read(o, t) : i.read(o), r.length && a.indexOf(i.id) > -1 && (i.visible = -1 !== r.indexOf(i.id)), n[o.id] = i, null != o.parentFolderId && -1 !== o.parentFolderId) {
            var _e10 = n[o.parentFolderId];
            _e10.sublayers || (_e10.sublayers = []), _e10.sublayers.unshift(i);
          } else s.unshift(i);
        }), s;
      }

      function G(e, o, t) {
        t.forEach(function (t) {
          e.set(t.attributes[o], t);
        });
      }

      function h(_x5) {
        return _h.apply(this, arguments);
      }

      function _h() {
        _h = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee3(e) {
          var o, t, r, s, i, _iterator17, _step17, _e15, _o13;

          return regeneratorRuntime.wrap(function _callee3$(_context5) {
            while (1) {
              switch (_context5.prev = _context5.next) {
                case 0:
                  o = _tasks_support_FeatureSet_js__WEBPACK_IMPORTED_MODULE_9__["default"].fromJSON(e.featureSet).features, t = e.layerDefinition, r = Object(_renderers_support_jsonUtils_js__WEBPACK_IMPORTED_MODULE_8__["fromJSON"])(t.drawingInfo.renderer), s = _PopupTemplate_js__WEBPACK_IMPORTED_MODULE_5__["default"].fromJSON(e.popupInfo), i = [];
                  _iterator17 = _createForOfIteratorHelper(o);
                  _context5.prev = 2;

                  _iterator17.s();

                case 4:
                  if ((_step17 = _iterator17.n()).done) {
                    _context5.next = 12;
                    break;
                  }

                  _e15 = _step17.value;
                  _context5.next = 8;
                  return r.getSymbolAsync(_e15);

                case 8:
                  _o13 = _context5.sent;
                  _e15.symbol = _o13, _e15.popupTemplate = s, _e15.visible = !0, i.push(_e15);

                case 10:
                  _context5.next = 4;
                  break;

                case 12:
                  _context5.next = 17;
                  break;

                case 14:
                  _context5.prev = 14;
                  _context5.t0 = _context5["catch"](2);

                  _iterator17.e(_context5.t0);

                case 17:
                  _context5.prev = 17;

                  _iterator17.f();

                  return _context5.finish(17);

                case 20:
                  return _context5.abrupt("return", i);

                case 21:
                case "end":
                  return _context5.stop();
              }
            }
          }, _callee3, null, [[2, 14, 17, 20]]);
        }));
        return _h.apply(this, arguments);
      }

      function P(e) {
        var o = Object(_geometry_support_aaBoundingBox_js__WEBPACK_IMPORTED_MODULE_10__["create"])(),
            t = Object(_geometry_support_aaBoundingBox_js__WEBPACK_IMPORTED_MODULE_10__["create"])(_geometry_support_aaBoundingBox_js__WEBPACK_IMPORTED_MODULE_10__["NEGATIVE_INFINITY"]);

        var _iterator12 = _createForOfIteratorHelper(e),
            _step12;

        try {
          for (_iterator12.s(); !(_step12 = _iterator12.n()).done;) {
            var r = _step12.value;

            if (r.polygons && r.polygons.featureSet && r.polygons.featureSet.features) {
              var _iterator13 = _createForOfIteratorHelper(r.polygons.featureSet.features),
                  _step13;

              try {
                for (_iterator13.s(); !(_step13 = _iterator13.n()).done;) {
                  var _e11 = _step13.value;
                  Object(_geometry_support_boundsUtils_js__WEBPACK_IMPORTED_MODULE_4__["getBoundsXYZ"])(o, _e11.geometry), Object(_geometry_support_aaBoundingBox_js__WEBPACK_IMPORTED_MODULE_10__["expandWithAABB"])(t, o);
                }
              } catch (err) {
                _iterator13.e(err);
              } finally {
                _iterator13.f();
              }
            }

            if (r.polylines && r.polylines.featureSet && r.polylines.featureSet.features) {
              var _iterator14 = _createForOfIteratorHelper(r.polylines.featureSet.features),
                  _step14;

              try {
                for (_iterator14.s(); !(_step14 = _iterator14.n()).done;) {
                  var _e12 = _step14.value;
                  Object(_geometry_support_boundsUtils_js__WEBPACK_IMPORTED_MODULE_4__["getBoundsXYZ"])(o, _e12.geometry), Object(_geometry_support_aaBoundingBox_js__WEBPACK_IMPORTED_MODULE_10__["expandWithAABB"])(t, o);
                }
              } catch (err) {
                _iterator14.e(err);
              } finally {
                _iterator14.f();
              }
            }

            if (r.points && r.points.featureSet && r.points.featureSet.features) {
              var _iterator15 = _createForOfIteratorHelper(r.points.featureSet.features),
                  _step15;

              try {
                for (_iterator15.s(); !(_step15 = _iterator15.n()).done;) {
                  var _e13 = _step15.value;
                  Object(_geometry_support_boundsUtils_js__WEBPACK_IMPORTED_MODULE_4__["getBoundsXYZ"])(o, _e13.geometry), Object(_geometry_support_aaBoundingBox_js__WEBPACK_IMPORTED_MODULE_10__["expandWithAABB"])(t, o);
                }
              } catch (err) {
                _iterator15.e(err);
              } finally {
                _iterator15.f();
              }
            }

            if (r.mapImages) {
              var _iterator16 = _createForOfIteratorHelper(r.mapImages),
                  _step16;

              try {
                for (_iterator16.s(); !(_step16 = _iterator16.n()).done;) {
                  var _e14 = _step16.value;
                  Object(_geometry_support_boundsUtils_js__WEBPACK_IMPORTED_MODULE_4__["getBoundsXYZ"])(o, _e14.extent), Object(_geometry_support_aaBoundingBox_js__WEBPACK_IMPORTED_MODULE_10__["expandWithAABB"])(t, o);
                }
              } catch (err) {
                _iterator16.e(err);
              } finally {
                _iterator16.f();
              }
            }
          }
        } catch (err) {
          _iterator12.e(err);
        } finally {
          _iterator12.f();
        }

        return Object(_geometry_support_aaBoundingBox_js__WEBPACK_IMPORTED_MODULE_10__["equals"])(t, _geometry_support_aaBoundingBox_js__WEBPACK_IMPORTED_MODULE_10__["NEGATIVE_INFINITY"]) ? null : {
          xmin: t[0],
          ymin: t[1],
          zmin: t[2],
          xmax: t[3],
          ymax: t[4],
          zmax: t[5],
          spatialReference: _geometry_SpatialReference_js__WEBPACK_IMPORTED_MODULE_3__["default"].WGS84
        };
      }
      /***/

    },

    /***/
    "BMSW":
    /*!***********************************************************************!*\
      !*** ./node_modules/@arcgis/core/layers/graphics/data/BoundsStore.js ***!
      \***********************************************************************/

    /*! exports provided: BoundsStore */

    /***/
    function BMSW(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "BoundsStore", function () {
        return n;
      });
      /* harmony import */


      var _core_has_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ../../../core/has.js */
      "wSAH");
      /* harmony import */


      var _chunks_rbush_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ../../../chunks/rbush.js */
      "kB+0");
      /*
      All material copyright ESRI, All Rights Reserved, unless otherwise specified.
      See https://js.arcgis.com/4.18/esri/copyright.txt for details.
      */


      var d = {
        minX: 0,
        minY: 0,
        maxX: 0,
        maxY: 0
      };

      var n = /*#__PURE__*/function () {
        function n() {
          var _this5 = this;

          _classCallCheck(this, n);

          this._indexInvalid = !1, this._boundsToLoad = [], this._boundsById = new Map(), this._idByBounds = new Map(), this._index = Object(_chunks_rbush_js__WEBPACK_IMPORTED_MODULE_1__["r"])(9, Object(_core_has_js__WEBPACK_IMPORTED_MODULE_0__["default"])("csp-restrictions") ? function (s) {
            return {
              minX: s[0],
              minY: s[1],
              maxX: s[2],
              maxY: s[3]
            };
          } : ["[0]", "[1]", "[2]", "[3]"]), this._loadIndex = function () {
            if (_this5._indexInvalid) {
              var s = new Array(_this5._idByBounds.size);
              var i = 0;
              _this5._idByBounds.forEach(function (d, _n8) {
                s[i++] = _n8;
              }), _this5._indexInvalid = !1, _this5._index.clear(), _this5._index.load(s);
            } else _this5._boundsToLoad.length && (_this5._index.load(_this5._boundsToLoad.filter(function (s) {
              return _this5._idByBounds.has(s);
            })), _this5._boundsToLoad.length = 0);
          };
        }

        _createClass(n, [{
          key: "clear",
          value: function clear() {
            this._indexInvalid = !1, this._boundsToLoad.length = 0, this._boundsById.clear(), this._idByBounds.clear(), this._index.clear();
          }
        }, {
          key: "delete",
          value: function _delete(s) {
            var i = this._boundsById.get(s);

            this._boundsById["delete"](s), i && (this._idByBounds["delete"](i), this._indexInvalid || this._index.remove(i));
          }
        }, {
          key: "forEachInBounds",
          value: function forEachInBounds(s, i) {
            this._loadIndex();

            var _iterator18 = _createForOfIteratorHelper(function (s, i) {
              return d.minX = i[0], d.minY = i[1], d.maxX = i[2], d.maxY = i[3], s.search(d);
            }(this._index, s)),
                _step18;

            try {
              for (_iterator18.s(); !(_step18 = _iterator18.n()).done;) {
                var _n10 = _step18.value;
                i(this._idByBounds.get(_n10));
              }
            } catch (err) {
              _iterator18.e(err);
            } finally {
              _iterator18.f();
            }
          }
        }, {
          key: "get",
          value: function get(s) {
            return this._boundsById.get(s);
          }
        }, {
          key: "has",
          value: function has(s) {
            return this._boundsById.has(s);
          }
        }, {
          key: "invalidateIndex",
          value: function invalidateIndex() {
            this._indexInvalid || (this._indexInvalid = !0, this._boundsToLoad.length = 0);
          }
        }, {
          key: "set",
          value: function set(s, i) {
            if (!this._indexInvalid) {
              var _i4 = this._boundsById.get(s);

              _i4 && (this._index.remove(_i4), this._idByBounds["delete"](_i4));
            }

            this._boundsById.set(s, i), i && (this._idByBounds.set(i, s), this._indexInvalid || (this._boundsToLoad.push(i), this._boundsToLoad.length > 5e4 && this._loadIndex()));
          }
        }]);

        return n;
      }();
      /***/

    },

    /***/
    "BPBZ":
    /*!**************************************************!*\
      !*** ./node_modules/@arcgis/core/chunks/quat.js ***!
      \**************************************************/

    /*! exports provided: A, B, C, D, E, F, G, a, b, c, d, e, f, g, h, i, j, k, l, m, n, o, p, q, r, s, t, u, v, w, x, y, z */

    /***/
    function BPBZ(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "A", function () {
        return X;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "B", function () {
        return Z;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "C", function () {
        return J;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "D", function () {
        return K;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "E", function () {
        return Q;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "F", function () {
        return tt;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "G", function () {
        return nt;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "a", function () {
        return F;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "b", function () {
        return b;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "c", function () {
        return w;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "d", function () {
        return y;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "e", function () {
        return E;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "f", function () {
        return W;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "g", function () {
        return I;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "h", function () {
        return H;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "i", function () {
        return k;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "j", function () {
        return N;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "k", function () {
        return C;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "l", function () {
        return Y;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "m", function () {
        return P;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "n", function () {
        return x;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "o", function () {
        return _;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "p", function () {
        return z;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "q", function () {
        return rt;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "r", function () {
        return S;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "s", function () {
        return A;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "t", function () {
        return L;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "u", function () {
        return B;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "v", function () {
        return D;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "w", function () {
        return G;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "x", function () {
        return O;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "y", function () {
        return R;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "z", function () {
        return T;
      });
      /* harmony import */


      var _vec3f64_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ./vec3f64.js */
      "Cy1f");
      /* harmony import */


      var _common_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./common.js */
      "QhKk");
      /* harmony import */


      var _vec3_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./vec3.js */
      "5DEt");
      /* harmony import */


      var _mat3f64_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./mat3f64.js */
      "2uVf");
      /* harmony import */


      var _quatf64_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ./quatf64.js */
      "sTkM");
      /* harmony import */


      var _vec4_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ./vec4.js */
      "dXfX");
      /*
      All material copyright ESRI, All Rights Reserved, unless otherwise specified.
      See https://js.arcgis.com/4.18/esri/copyright.txt for details.
      */


      function x(t) {
        return t[0] = 0, t[1] = 0, t[2] = 0, t[3] = 1, t;
      }

      function A(t, s, a) {
        a *= .5;
        var n = Math.sin(a);
        return t[0] = n * s[0], t[1] = n * s[1], t[2] = n * s[2], t[3] = Math.cos(a), t;
      }

      function I(t, s) {
        var n = 2 * Math.acos(s[3]),
            o = Math.sin(n / 2);
        return o > _common_js__WEBPACK_IMPORTED_MODULE_1__["E"] ? (t[0] = s[0] / o, t[1] = s[1] / o, t[2] = s[2] / o) : (t[0] = 1, t[1] = 0, t[2] = 0), n;
      }

      function P(t, s, a) {
        var n = s[0],
            o = s[1],
            r = s[2],
            c = s[3],
            e = a[0],
            u = a[1],
            i = a[2],
            h = a[3];
        return t[0] = n * h + c * e + o * i - r * u, t[1] = o * h + c * u + r * e - n * i, t[2] = r * h + c * i + n * u - o * e, t[3] = c * h - n * e - o * u - r * i, t;
      }

      function b(t, s, a) {
        a *= .5;
        var n = s[0],
            o = s[1],
            r = s[2],
            c = s[3],
            e = Math.sin(a),
            u = Math.cos(a);
        return t[0] = n * u + c * e, t[1] = o * u + r * e, t[2] = r * u - o * e, t[3] = c * u - n * e, t;
      }

      function y(t, s, a) {
        a *= .5;
        var n = s[0],
            o = s[1],
            r = s[2],
            c = s[3],
            e = Math.sin(a),
            u = Math.cos(a);
        return t[0] = n * u - r * e, t[1] = o * u + c * e, t[2] = r * u + n * e, t[3] = c * u - o * e, t;
      }

      function E(t, s, a) {
        a *= .5;
        var n = s[0],
            o = s[1],
            r = s[2],
            c = s[3],
            e = Math.sin(a),
            u = Math.cos(a);
        return t[0] = n * u + o * e, t[1] = o * u - n * e, t[2] = r * u + c * e, t[3] = c * u - r * e, t;
      }

      function _(t, s) {
        var a = s[0],
            n = s[1],
            o = s[2];
        return t[0] = a, t[1] = n, t[2] = o, t[3] = Math.sqrt(Math.abs(1 - a * a - n * n - o * o)), t;
      }

      function z(t, s, n, o) {
        var r = s[0],
            c = s[1],
            e = s[2],
            u = s[3];
        var i,
            h,
            M,
            f,
            l,
            m = n[0],
            p = n[1],
            q = n[2],
            j = n[3];
        return h = r * m + c * p + e * q + u * j, h < 0 && (h = -h, m = -m, p = -p, q = -q, j = -j), 1 - h > _common_js__WEBPACK_IMPORTED_MODULE_1__["E"] ? (i = Math.acos(h), M = Math.sin(i), f = Math.sin((1 - o) * i) / M, l = Math.sin(o * i) / M) : (f = 1 - o, l = o), t[0] = f * r + l * m, t[1] = f * c + l * p, t[2] = f * e + l * q, t[3] = f * u + l * j, t;
      }

      function L(t) {
        var s = Object(_common_js__WEBPACK_IMPORTED_MODULE_1__["R"])(),
            a = Object(_common_js__WEBPACK_IMPORTED_MODULE_1__["R"])(),
            o = Object(_common_js__WEBPACK_IMPORTED_MODULE_1__["R"])(),
            r = Math.sqrt(1 - s),
            c = Math.sqrt(s);
        return t[0] = r * Math.sin(2 * Math.PI * a), t[1] = r * Math.cos(2 * Math.PI * a), t[2] = c * Math.sin(2 * Math.PI * o), t[3] = c * Math.cos(2 * Math.PI * o), t;
      }

      function k(t, s) {
        var a = s[0],
            n = s[1],
            o = s[2],
            r = s[3],
            c = a * a + n * n + o * o + r * r,
            e = c ? 1 / c : 0;
        return t[0] = -a * e, t[1] = -n * e, t[2] = -o * e, t[3] = r * e, t;
      }

      function w(t, s) {
        return t[0] = -s[0], t[1] = -s[1], t[2] = -s[2], t[3] = s[3], t;
      }

      function B(t, s) {
        var a = s[0] + s[4] + s[8];
        var n;
        if (a > 0) n = Math.sqrt(a + 1), t[3] = .5 * n, n = .5 / n, t[0] = (s[5] - s[7]) * n, t[1] = (s[6] - s[2]) * n, t[2] = (s[1] - s[3]) * n;else {
          var _a5 = 0;
          s[4] > s[0] && (_a5 = 1), s[8] > s[3 * _a5 + _a5] && (_a5 = 2);
          var o = (_a5 + 1) % 3,
              r = (_a5 + 2) % 3;
          n = Math.sqrt(s[3 * _a5 + _a5] - s[3 * o + o] - s[3 * r + r] + 1), t[_a5] = .5 * n, n = .5 / n, t[3] = (s[3 * o + r] - s[3 * r + o]) * n, t[o] = (s[3 * o + _a5] + s[3 * _a5 + o]) * n, t[r] = (s[3 * r + _a5] + s[3 * _a5 + r]) * n;
        }
        return t;
      }

      function C(t, s, a, n) {
        var o = .5 * Math.PI / 180;
        s *= o, a *= o, n *= o;
        var r = Math.sin(s),
            c = Math.cos(s),
            e = Math.sin(a),
            u = Math.cos(a),
            i = Math.sin(n),
            h = Math.cos(n);
        return t[0] = r * u * h - c * e * i, t[1] = c * e * h + r * u * i, t[2] = c * u * i - r * e * h, t[3] = c * u * h + r * e * i, t;
      }

      function D(t) {
        return "quat(" + t[0] + ", " + t[1] + ", " + t[2] + ", " + t[3] + ")";
      }

      var F = _vec4_js__WEBPACK_IMPORTED_MODULE_5__["c"],
          G = _vec4_js__WEBPACK_IMPORTED_MODULE_5__["s"],
          O = _vec4_js__WEBPACK_IMPORTED_MODULE_5__["a"],
          R = P,
          T = _vec4_js__WEBPACK_IMPORTED_MODULE_5__["b"],
          W = _vec4_js__WEBPACK_IMPORTED_MODULE_5__["d"],
          X = _vec4_js__WEBPACK_IMPORTED_MODULE_5__["l"],
          Y = _vec4_js__WEBPACK_IMPORTED_MODULE_5__["e"],
          Z = Y,
          H = _vec4_js__WEBPACK_IMPORTED_MODULE_5__["f"],
          J = H,
          K = _vec4_js__WEBPACK_IMPORTED_MODULE_5__["n"],
          N = _vec4_js__WEBPACK_IMPORTED_MODULE_5__["g"],
          Q = _vec4_js__WEBPACK_IMPORTED_MODULE_5__["h"];

      function S(t, s, a) {
        var n = Object(_vec3_js__WEBPACK_IMPORTED_MODULE_2__["d"])(s, a);
        return n < -.999999 ? (Object(_vec3_js__WEBPACK_IMPORTED_MODULE_2__["c"])(U, V, s), Object(_vec3_js__WEBPACK_IMPORTED_MODULE_2__["j"])(U) < 1e-6 && Object(_vec3_js__WEBPACK_IMPORTED_MODULE_2__["c"])(U, $, s), Object(_vec3_js__WEBPACK_IMPORTED_MODULE_2__["n"])(U, U), A(t, U, Math.PI), t) : n > .999999 ? (t[0] = 0, t[1] = 0, t[2] = 0, t[3] = 1, t) : (Object(_vec3_js__WEBPACK_IMPORTED_MODULE_2__["c"])(U, s, a), t[0] = U[0], t[1] = U[1], t[2] = U[2], t[3] = 1 + n, K(t, t));
      }

      var U = Object(_vec3f64_js__WEBPACK_IMPORTED_MODULE_0__["c"])(),
          V = Object(_vec3f64_js__WEBPACK_IMPORTED_MODULE_0__["f"])(1, 0, 0),
          $ = Object(_vec3f64_js__WEBPACK_IMPORTED_MODULE_0__["f"])(0, 1, 0);

      function tt(t, s, a, n, o, r) {
        return z(st, s, o, r), z(at, a, n, r), z(t, st, at, 2 * r * (1 - r)), t;
      }

      var st = Object(_quatf64_js__WEBPACK_IMPORTED_MODULE_4__["a"])(),
          at = Object(_quatf64_js__WEBPACK_IMPORTED_MODULE_4__["a"])();

      function nt(t, s, a, n) {
        var o = ot;
        return o[0] = a[0], o[3] = a[1], o[6] = a[2], o[1] = n[0], o[4] = n[1], o[7] = n[2], o[2] = -s[0], o[5] = -s[1], o[8] = -s[2], K(t, B(t, o));
      }

      var ot = Object(_mat3f64_js__WEBPACK_IMPORTED_MODULE_3__["a"])();
      var rt = Object.freeze({
        __proto__: null,
        identity: x,
        setAxisAngle: A,
        getAxisAngle: I,
        multiply: P,
        rotateX: b,
        rotateY: y,
        rotateZ: E,
        calculateW: _,
        slerp: z,
        random: L,
        invert: k,
        conjugate: w,
        fromMat3: B,
        fromEuler: C,
        str: D,
        copy: F,
        set: G,
        add: O,
        mul: R,
        scale: T,
        dot: W,
        lerp: X,
        length: Y,
        len: Z,
        squaredLength: H,
        sqrLen: J,
        normalize: K,
        exactEquals: N,
        equals: Q,
        rotationTo: S,
        sqlerp: tt,
        setAxes: nt
      });
      /***/
    },

    /***/
    "DJok":
    /*!******************************************************************************!*\
      !*** ./node_modules/@arcgis/core/views/2d/layers/features/FeatureStore2D.js ***!
      \******************************************************************************/

    /*! exports provided: FeatureStore2D, featureAdapter */

    /***/
    function DJok(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "FeatureStore2D", function () {
        return u;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "featureAdapter", function () {
        return d;
      });
      /* harmony import */


      var _core_maybe_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ../../../../core/maybe.js */
      "srIe");
      /* harmony import */


      var _core_Evented_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ../../../../core/Evented.js */
      "zm0L");
      /* harmony import */


      var _geometry_support_aaBoundingBox_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ../../../../geometry/support/aaBoundingBox.js */
      "QmHG");
      /* harmony import */


      var _chunks_rbush_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ../../../../chunks/rbush.js */
      "kB+0");
      /* harmony import */


      var _Store2D_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ./Store2D.js */
      "hIOP");
      /*
      All material copyright ESRI, All Rights Reserved, unless otherwise specified.
      See https://js.arcgis.com/4.18/esri/copyright.txt for details.
      */


      function o(t) {
        return (4294901760 & t) >>> 16;
      }

      function i(t) {
        return 65535 & t;
      }

      var d = {
        getObjectId: function getObjectId(t) {
          return t.getObjectId();
        },
        getAttributes: function getAttributes(t) {
          return t.readAttributes();
        },
        getAttribute: function getAttribute(t, e) {
          return t.readAttribute(e);
        },
        cloneWithGeometry: function cloneWithGeometry(t, e) {
          return t;
        },
        getGeometry: function getGeometry(t) {
          return t.readHydratedGeometry();
        },
        getCentroid: function getCentroid(t, e) {
          return t.readCentroid();
        }
      };

      var u = /*#__PURE__*/function (_Store2D_js__WEBPACK_) {
        _inherits(u, _Store2D_js__WEBPACK_);

        var _super4 = _createSuper(u);

        function u(t, e) {
          var _this6;

          _classCallCheck(this, u);

          _this6 = _super4.call(this, t, e), _this6.featureAdapter = d, _this6.events = new _core_Evented_js__WEBPACK_IMPORTED_MODULE_1__["default"](), _this6._featureSetsByInstance = new Map(), _this6._objectIdToDisplayId = new Map(), _this6._spatialIndexInvalid = !0, _this6._index = Object(_chunks_rbush_js__WEBPACK_IMPORTED_MODULE_3__["r"])(9, function (t) {
            return {
              minX: _this6._storage.getXMin(t),
              minY: _this6._storage.getYMin(t),
              maxX: _this6._storage.getXMax(t),
              maxY: _this6._storage.getYMax(t)
            };
          });
          return _this6;
        }

        _createClass(u, [{
          key: "storeStatistics",
          get: function get() {
            return {
              featureCount: 0,
              vertexCount: 0
            };
          }
        }, {
          key: "onTileData",
          value: function onTileData(e, s, a) {
            if (Object(_core_maybe_js__WEBPACK_IMPORTED_MODULE_0__["isNone"])(s.addOrUpdate)) return s;
            this._featureSetsByInstance.set(s.addOrUpdate.instance, s.addOrUpdate), this._storage = a, s.addOrUpdate._storage = a;
            var r = s.addOrUpdate.getCursor();

            for (; r.next();) {
              var t = r.getObjectId(),
                  _s2 = (n = r.instance, o = r.getIndex(), n << 16 | o);

              var _i5 = this._objectIdToDisplayId.get(t);

              _i5 || (_i5 = a.createDisplayId(), this._objectIdToDisplayId.set(t, _i5), this._spatialIndexInvalid = !0), r.setDisplayId(_i5), a.setInstanceId(_i5, _s2), this.setComputedAttributes(a, r, _i5, e.scale);
            }

            var n, o;
            return "update" === s.type && (this._spatialIndexInvalid = !0), this.events.emit("changed"), s;
          }
        }, {
          key: "forEach",
          value: function forEach(t) {
            var _this7 = this;

            this._objectIdToDisplayId.forEach(function (e) {
              var s = _this7._storage.getInstanceId(e),
                  a = _this7._lookupFeature(s);

              t(a);
            });
          }
        }, {
          key: "forEachUnsafe",
          value: function forEachUnsafe(t) {
            var _this8 = this;

            this._objectIdToDisplayId.forEach(function (e) {
              var s = _this8._storage.getInstanceId(e),
                  a = o(s),
                  r = i(s),
                  n = _this8._getFeatureSet(a);

              n.setIndex(r), t(n);
            });
          }
        }, {
          key: "forEachInBounds",
          value: function forEachInBounds(t, s) {
            var a = this._searchIndex(t);

            var _iterator19 = _createForOfIteratorHelper(a),
                _step19;

            try {
              for (_iterator19.s(); !(_step19 = _iterator19.n()).done;) {
                var _t14 = _step19.value;

                var _a6 = this.lookupFeatureByDisplayId(_t14, this._storage);

                s(Object(_core_maybe_js__WEBPACK_IMPORTED_MODULE_0__["unwrap"])(_a6));
              }
            } catch (err) {
              _iterator19.e(err);
            } finally {
              _iterator19.f();
            }
          }
        }, {
          key: "forEachBounds",
          value: function forEachBounds(t, e, s) {
            this._rebuildIndex();

            var r = [0, 0, 0, 0];

            var _iterator20 = _createForOfIteratorHelper(t),
                _step20;

            try {
              for (_iterator20.s(); !(_step20 = _iterator20.n()).done;) {
                var n = _step20.value;
                if (!n.readGeometry()) continue;

                var _t15 = n.getDisplayId();

                r[0] = this._storage.getXMin(_t15), r[1] = this._storage.getYMin(_t15), r[2] = this._storage.getXMax(_t15), r[3] = this._storage.getYMax(_t15), e(Object(_geometry_support_aaBoundingBox_js__WEBPACK_IMPORTED_MODULE_2__["fromRect"])(s, r));
              }
            } catch (err) {
              _iterator20.e(err);
            } finally {
              _iterator20.f();
            }
          }
        }, {
          key: "sweepFeatures",
          value: function sweepFeatures(t, e, s) {
            var _this9 = this;

            this._objectIdToDisplayId.forEach(function (a, r) {
              t.has(a) || (e.releaseDisplayId(a), s.unsetAttributeData(a), _this9._objectIdToDisplayId["delete"](r));
            }), this.events.emit("changed");
          }
        }, {
          key: "sweepFeatureSets",
          value: function sweepFeatureSets(t) {
            var _this10 = this;

            this._featureSetsByInstance.forEach(function (e, s) {
              t.has(s) || _this10._featureSetsByInstance["delete"](s);
            });
          }
        }, {
          key: "lookupObjectId",
          value: function lookupObjectId(e, s) {
            var a = this.lookupFeatureByDisplayId(e, s);
            return Object(_core_maybe_js__WEBPACK_IMPORTED_MODULE_0__["isNone"])(a) ? null : a.getObjectId();
          }
        }, {
          key: "lookupDisplayId",
          value: function lookupDisplayId(t) {
            return this._objectIdToDisplayId.get(t);
          }
        }, {
          key: "lookupFeatureByDisplayId",
          value: function lookupFeatureByDisplayId(t, e) {
            var s = e.getInstanceId(t);
            return this._lookupFeature(s);
          }
        }, {
          key: "lookupByDisplayIdUnsafe",
          value: function lookupByDisplayIdUnsafe(t) {
            var e = this._storage.getInstanceId(t),
                s = o(e),
                a = i(e),
                r = this._getFeatureSet(s);

            return r ? (r.setIndex(a), r) : null;
          }
        }, {
          key: "hasInstance",
          value: function hasInstance(t) {
            return this._featureSetsByInstance.has(t);
          }
        }, {
          key: "_rebuildIndex",
          value: function _rebuildIndex() {
            var _this11 = this;

            if (!this._spatialIndexInvalid) return;

            this._index.clear();

            var t = [];
            this._objectIdToDisplayId.forEach(function (e) {
              var s = _this11._storage.getInstanceId(e);

              _this11._storage.setBounds(e, _this11._lookupFeature(s)) && t.push(e);
            }), this._index.load(t), this._spatialIndexInvalid = !1;
          }
        }, {
          key: "_lookupFeature",
          value: function _lookupFeature(t) {
            var e = o(t),
                s = i(t),
                a = this._getFeatureSet(e);

            if (!a) return null;
            var r = a.getCursor();
            return r.setIndex(s), r;
          }
        }, {
          key: "_getFeatureSet",
          value: function _getFeatureSet(t) {
            return this._featureSetsByInstance.get(t);
          }
        }, {
          key: "_searchIndex",
          value: function _searchIndex(t) {
            this._rebuildIndex();

            var e = {
              minX: t[0],
              minY: t[1],
              maxX: t[2],
              maxY: t[3]
            };
            return this._index.search(e);
          }
        }]);

        return u;
      }(_Store2D_js__WEBPACK_IMPORTED_MODULE_4__["Store2D"]);
      /***/

    },

    /***/
    "Dfpg":
    /*!*********************************************************************!*\
      !*** ./node_modules/@arcgis/core/portal/support/portalItemUtils.js ***!
      \*********************************************************************/

    /*! exports provided: addTypeKeyword, hasTypeKeyword, removeTypeKeyword */

    /***/
    function Dfpg(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "addTypeKeyword", function () {
        return e;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "hasTypeKeyword", function () {
        return t;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "removeTypeKeyword", function () {
        return n;
      });
      /*
      All material copyright ESRI, All Rights Reserved, unless otherwise specified.
      See https://js.arcgis.com/4.18/esri/copyright.txt for details.
      */


      function e(e, n) {
        if (!t(e, n)) {
          var _t16 = e.typeKeywords;
          _t16 ? _t16.push(n) : e.typeKeywords = [n];
        }
      }

      function t(e, t) {
        return !!e.typeKeywords && e.typeKeywords.indexOf(t) > -1;
      }

      function n(e, t) {
        var n = e.typeKeywords;

        if (n) {
          var _e16 = n.indexOf(t);

          _e16 > -1 && n.splice(_e16, 1);
        }
      }
      /***/

    },

    /***/
    "Fewv":
    /*!*****************************************************************!*\
      !*** ./node_modules/@arcgis/core/portal/support/jsonContext.js ***!
      \*****************************************************************/

    /*! exports provided: createForItem */

    /***/
    function Fewv(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "createForItem", function () {
        return o;
      });
      /* harmony import */


      var _core_urlUtils_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ../../core/urlUtils.js */
      "4EHJ");
      /* harmony import */


      var _Portal_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ../Portal.js */
      "AiS/");
      /*
      All material copyright ESRI, All Rights Reserved, unless otherwise specified.
      See https://js.arcgis.com/4.18/esri/copyright.txt for details.
      */


      function o(o) {
        return {
          origin: "portal-item",
          url: Object(_core_urlUtils_js__WEBPACK_IMPORTED_MODULE_0__["urlToObject"])(o.itemUrl),
          portal: o.portal || _Portal_js__WEBPACK_IMPORTED_MODULE_1__["default"].getDefault(),
          portalItem: o,
          readResourcePaths: []
        };
      }
      /***/

    },

    /***/
    "Fkrg":
    /*!****************************************************************************!*\
      !*** ./node_modules/@arcgis/core/views/2d/layers/BitmapTileLayerView2D.js ***!
      \****************************************************************************/

    /*! exports provided: BitmapTileLayerView2D */

    /***/
    function Fkrg(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "BitmapTileLayerView2D", function () {
        return i;
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


      var _core_Logger_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ../../../core/Logger.js */
      "6S2I");
      /* harmony import */


      var _core_accessorSupport_ensureType_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ../../../core/accessorSupport/ensureType.js */
      "zqDF");
      /* harmony import */


      var _core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ../../../core/accessorSupport/decorators/property.js */
      "WbKI");
      /* harmony import */


      var _core_accessorSupport_decorators_subclass_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ../../../core/accessorSupport/decorators/subclass.js */
      "04ZG");
      /* harmony import */


      var _core_urlUtils_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ../../../core/urlUtils.js */
      "4EHJ");
      /* harmony import */


      var _core_uuid_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! ../../../core/uuid.js */
      "ju1D");
      /* harmony import */


      var _portal_support_resourceExtension_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! ../../../portal/support/resourceExtension.js */
      "9AIY");
      /* harmony import */


      var _engine_BitmapTileContainer_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! ../engine/BitmapTileContainer.js */
      "6Az7");
      /*
      All material copyright ESRI, All Rights Reserved, unless otherwise specified.
      See https://js.arcgis.com/4.18/esri/copyright.txt for details.
      */


      var i = function i(_i7) {
        var s = /*#__PURE__*/function (_i6) {
          _inherits(s, _i6);

          var _super5 = _createSuper(s);

          function s() {
            _classCallCheck(this, s);

            return _super5.apply(this, arguments);
          }

          _createClass(s, [{
            key: "attach",
            value: function attach() {
              this.view.timeline.record("".concat(this.layer.title, " (BitmapTileLayer) Attach")), this._bitmapView = new _engine_BitmapTileContainer_js__WEBPACK_IMPORTED_MODULE_9__["BitmapTileContainer"](this._tileInfoView), this.container.addChild(this._bitmapView);
            }
          }, {
            key: "detach",
            value: function detach() {
              this.container.removeChild(this._bitmapView), this._bitmapView.removeAllChildren();
            }
          }]);

          return s;
        }(_i7);

        return s = Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_subclass_js__WEBPACK_IMPORTED_MODULE_5__["subclass"])("esri.views.2d.layers.BitmapTileLayerView2D")], s), s;
      };
      /***/

    },

    /***/
    "IcpP":
    /*!**********************************************************************************!*\
      !*** ./node_modules/@arcgis/core/layers/graphics/sources/support/sourceUtils.js ***!
      \**********************************************************************************/

    /*! exports provided: createFeatureEditErrorResult, createFeatureEditSuccessResult, loadGeometryEngine, loadGeometryEngineForSimplify, mixAttributes, simplify */

    /***/
    function IcpP(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "createFeatureEditErrorResult", function () {
        return u;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "createFeatureEditSuccessResult", function () {
        return c;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "loadGeometryEngine", function () {
        return g;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "loadGeometryEngineForSimplify", function () {
        return y;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "mixAttributes", function () {
        return d;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "simplify", function () {
        return h;
      });
      /* harmony import */


      var _geometry_support_spatialReferenceUtils_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ../../../../geometry/support/spatialReferenceUtils.js */
      "f4Nx");
      /* harmony import */


      var _support_fieldUtils_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ../../../support/fieldUtils.js */
      "wdpY");
      /*
      All material copyright ESRI, All Rights Reserved, unless otherwise specified.
      See https://js.arcgis.com/4.18/esri/copyright.txt for details.
      */


      var o = function o() {
        _classCallCheck(this, o);

        this.code = null, this.description = null;
      };

      var l = function l(t) {
        _classCallCheck(this, l);

        this.error = new o(), this.globalId = null, this.objectId = null, this.success = !1, this.uniqueId = null, this.error.description = t;
      };

      function u(t) {
        return new l(t);
      }

      var a = function a(t) {
        _classCallCheck(this, a);

        this.globalId = null, this.success = !0, this.objectId = this.uniqueId = t;
      };

      function c(t) {
        return new a(t);
      }

      var f = new Set();

      function d(t, e, r, s) {
        var o = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : !1;
        var l = arguments.length > 5 ? arguments[5] : undefined;
        f.clear();

        for (var _e17 in s) {
          var _a7 = t.get(_e17);

          if (!_a7) continue;

          var _c3 = s[_e17],
              _d3 = m(_a7, _c3);

          if (_d3 !== _c3 && l && l.push({
            name: "invalid-value-type",
            message: "attribute value was converted to match the field type",
            details: {
              field: _a7,
              originalValue: _c3,
              sanitizedValue: _d3
            }
          }), f.add(_a7.name), _a7 && (o || _a7.editable)) {
            var _t17 = Object(_support_fieldUtils_js__WEBPACK_IMPORTED_MODULE_1__["validateFieldValue"])(_a7, _d3);

            if (_t17) return u(Object(_support_fieldUtils_js__WEBPACK_IMPORTED_MODULE_1__["validationErrorToString"])(_t17, _a7, _d3));
            r[_a7.name] = _d3;
          }
        }

        var _iterator21 = _createForOfIteratorHelper(e),
            _step21;

        try {
          for (_iterator21.s(); !(_step21 = _iterator21.n()).done;) {
            var _t18 = _step21.value;
            if (!f.has(_t18.name)) return u("missing required field \"".concat(_t18.name, "\""));
          }
        } catch (err) {
          _iterator21.e(err);
        } finally {
          _iterator21.f();
        }

        return null;
      }

      function m(t, n) {
        var i = n;
        return "string" == typeof n && Object(_support_fieldUtils_js__WEBPACK_IMPORTED_MODULE_1__["isNumericField"])(t) ? i = parseFloat(n) : null != n && Object(_support_fieldUtils_js__WEBPACK_IMPORTED_MODULE_1__["isStringField"])(t) && "string" != typeof n && (i = String(n)), Object(_support_fieldUtils_js__WEBPACK_IMPORTED_MODULE_1__["sanitizeNullFieldValue"])(i);
      }

      var p;

      function h(e, n) {
        if (!e || !Object(_geometry_support_spatialReferenceUtils_js__WEBPACK_IMPORTED_MODULE_0__["isValid"])(n)) return e;

        if ("rings" in e || "paths" in e) {
          if (!p) throw new TypeError("geometry engine not loaded");
          return p.simplify(n, e);
        }

        return e;
      }

      function g() {
        return _g.apply(this, arguments);
      }

      function _g() {
        _g = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee4() {
          return regeneratorRuntime.wrap(function _callee4$(_context6) {
            while (1) {
              switch (_context6.prev = _context6.next) {
                case 0:
                  _context6.t0 = p;

                  if (_context6.t0) {
                    _context6.next = 6;
                    break;
                  }

                  _context6.next = 4;
                  return Promise.all(
                  /*! import() | geometry-geometryEngineJSON-js */
                  [__webpack_require__.e("default~chunks-geometryEngineBase-js~geometry-geometryEngine-js~geometry-geometryEngineJSON-js~geome~1472b8fb"), __webpack_require__.e("common"), __webpack_require__.e("geometry-geometryEngineJSON-js")]).then(__webpack_require__.bind(null,
                  /*! ../../../../geometry/geometryEngineJSON.js */
                  "AKzY"));

                case 4:
                  p = _context6.sent;
                  _context6.t0 = p;

                case 6:
                  return _context6.abrupt("return", _context6.t0);

                case 7:
                case "end":
                  return _context6.stop();
              }
            }
          }, _callee4);
        }));
        return _g.apply(this, arguments);
      }

      function y(_x6, _x7) {
        return _y2.apply(this, arguments);
      }
      /***/


      function _y2() {
        _y2 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee5(e, n) {
          return regeneratorRuntime.wrap(function _callee5$(_context7) {
            while (1) {
              switch (_context7.prev = _context7.next) {
                case 0:
                  _context7.t0 = !Object(_geometry_support_spatialReferenceUtils_js__WEBPACK_IMPORTED_MODULE_0__["isValid"])(e) || "esriGeometryPolygon" !== n && "esriGeometryPolyline" !== n;

                  if (_context7.t0) {
                    _context7.next = 4;
                    break;
                  }

                  _context7.next = 4;
                  return g();

                case 4:
                case "end":
                  return _context7.stop();
              }
            }
          }, _callee5);
        }));
        return _y2.apply(this, arguments);
      }
    },

    /***/
    "JYLa":
    /*!****************************************************************************!*\
      !*** ./node_modules/@arcgis/core/views/2d/engine/vectorTiles/TileIndex.js ***!
      \****************************************************************************/

    /*! exports provided: default */

    /***/
    function JYLa(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony import */


      var _core_promiseUtils_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ../../../../core/promiseUtils.js */
      "9MzC");
      /* harmony import */


      var _layers_support_TilemapCache_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ../../../../layers/support/TilemapCache.js */
      "llFo");
      /* harmony import */


      var _tiling_TileKey_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ../../tiling/TileKey.js */
      "rlSK");
      /*
      All material copyright ESRI, All Rights Reserved, unless otherwise specified.
      See https://js.arcgis.com/4.18/esri/copyright.txt for details.
      */

      /* harmony default export */


      __webpack_exports__["default"] = /*#__PURE__*/function () {
        function _class(e) {
          _classCallCheck(this, _class);

          if (e instanceof _layers_support_TilemapCache_js__WEBPACK_IMPORTED_MODULE_1__["TilemapCache"]) this._tilemapCache = e;else {
            if (!e || !("index" in e)) throw new Error("Invalid tilemap!");
            this._tilemap = e.index;
          }
        }

        _createClass(_class, [{
          key: "dataKey",
          value: function dataKey(t, l) {
            if (this._tilemapCache) {
              var r = t.level,
                  o = t.row,
                  a = t.col,
                  h = new _tiling_TileKey_js__WEBPACK_IMPORTED_MODULE_2__["default"](t);
              return this._tilemapCache.fetchAvailabilityUpsample(r, o, a, h, l).then(function () {
                return h.world = t.world, h;
              })["catch"](function (t) {
                if (Object(_core_promiseUtils_js__WEBPACK_IMPORTED_MODULE_0__["isAbortError"])(t)) throw t;
                return null;
              });
            }

            return this._getIndexedDataKey(t);
          }
        }, {
          key: "forEach",
          value: function forEach(e, t, l, i, r) {
            this._callback = r, this._maxLevel = t + e, this._forEach(this._tilemap, t, l, i);
          }
        }, {
          key: "_forEach",
          value: function _forEach(e, t, l, i) {
            0 !== e && (this._callback(t, l, i), t !== this._maxLevel && "object" == typeof e && (this._forEach(e[0], t + 1, 2 * l, 2 * i), this._forEach(e[1], t + 1, 2 * l, 2 * i + 1), this._forEach(e[2], t + 1, 2 * l + 1, 2 * i), this._forEach(e[3], t + 1, 2 * l + 1, 2 * i + 1)));
          }
        }, {
          key: "_getIndexedDataKey",
          value: function _getIndexedDataKey(e) {
            var l = [e];
            if (e.level < 0 || e.row < 0 || e.col < 0 || e.row >> e.level > 0 || e.col >> e.level > 0) return Object(_core_promiseUtils_js__WEBPACK_IMPORTED_MODULE_0__["resolve"])(null);
            var r = e;

            for (; 0 !== r.level;) {
              r = new _tiling_TileKey_js__WEBPACK_IMPORTED_MODULE_2__["default"](r.level - 1, r.row >> 1, r.col >> 1, r.world), l.push(r);
            }

            var o,
                a,
                h = this._tilemap,
                s = l.pop();
            if (1 === h) return Object(_core_promiseUtils_js__WEBPACK_IMPORTED_MODULE_0__["resolve"])(s);

            for (; l.length;) {
              if (o = l.pop(), a = (1 & o.col) + ((1 & o.row) << 1), h) {
                if (0 === h[a]) {
                  s = null;
                  break;
                }

                if (1 === h[a]) {
                  s = o;
                  break;
                }

                s = o, h = h[a];
              }
            }

            return Object(_core_promiseUtils_js__WEBPACK_IMPORTED_MODULE_0__["resolve"])(s);
          }
        }]);

        return _class;
      }();
      /***/

    },

    /***/
    "LTnl":
    /*!**********************************************************************!*\
      !*** ./node_modules/@arcgis/core/views/2d/engine/BitmapContainer.js ***!
      \**********************************************************************/

    /*! exports provided: BitmapContainer */

    /***/
    function LTnl(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "BitmapContainer", function () {
        return t;
      });
      /* harmony import */


      var _webgl_enums_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ./webgl/enums.js */
      "yE7X");
      /* harmony import */


      var _brushes_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./brushes.js */
      "Oxob");
      /* harmony import */


      var _webgl_WGLContainer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./webgl/WGLContainer.js */
      "mgI5");
      /*
      All material copyright ESRI, All Rights Reserved, unless otherwise specified.
      See https://js.arcgis.com/4.18/esri/copyright.txt for details.
      */


      var t = /*#__PURE__*/function (_webgl_WGLContainer_j) {
        _inherits(t, _webgl_WGLContainer_j);

        var _super6 = _createSuper(t);

        function t() {
          _classCallCheck(this, t);

          return _super6.apply(this, arguments);
        }

        _createClass(t, [{
          key: "prepareRenderPasses",
          value: function prepareRenderPasses(s) {
            var _this12 = this;

            var _t19 = s.registerRenderPass({
              name: "bitmap",
              brushes: [_brushes_js__WEBPACK_IMPORTED_MODULE_1__["brushes"].bitmap],
              target: function target() {
                return _this12.children;
              },
              drawPhase: _webgl_enums_js__WEBPACK_IMPORTED_MODULE_0__["WGLDrawPhase"].MAP
            });

            return [].concat(_toConsumableArray(_get(_getPrototypeOf(t.prototype), "prepareRenderPasses", this).call(this, s)), [_t19]);
          }
        }]);

        return t;
      }(_webgl_WGLContainer_js__WEBPACK_IMPORTED_MODULE_2__["default"]);
      /***/

    },

    /***/
    "LbAs":
    /*!****************************************************************!*\
      !*** ./node_modules/@arcgis/core/support/requestImageUtils.js ***!
      \****************************************************************/

    /*! exports provided: requestImage */

    /***/
    function LbAs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "requestImage", function () {
        return t;
      });
      /* harmony import */


      var _request_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ../request.js */
      "Lqtk");
      /*
      All material copyright ESRI, All Rights Reserved, unless otherwise specified.
      See https://js.arcgis.com/4.18/esri/copyright.txt for details.
      */


      function t(_x8, _x9) {
        return _t20.apply(this, arguments);
      }
      /***/


      function _t20() {
        _t20 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee6(t, r) {
          var _yield$Object, a;

          return regeneratorRuntime.wrap(function _callee6$(_context8) {
            while (1) {
              switch (_context8.prev = _context8.next) {
                case 0:
                  _context8.next = 2;
                  return Object(_request_js__WEBPACK_IMPORTED_MODULE_0__["default"])(t, _objectSpread({
                    responseType: "image"
                  }, r));

                case 2:
                  _yield$Object = _context8.sent;
                  a = _yield$Object.data;
                  return _context8.abrupt("return", a);

                case 5:
                case "end":
                  return _context8.stop();
              }
            }
          }, _callee6);
        }));
        return _t20.apply(this, arguments);
      }
    },

    /***/
    "R/jG":
    /*!*****************************************************!*\
      !*** ./node_modules/@arcgis/core/chunks/vec3f32.js ***!
      \*****************************************************/

    /*! exports provided: O, U, Z, a, b, c, d, e, f, g, h, o, u, v, z */

    /***/
    function RJG(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "O", function () {
        return f;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "U", function () {
        return l;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "Z", function () {
        return i;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "a", function () {
        return r;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "b", function () {
        return a;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "c", function () {
        return n;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "d", function () {
        return s;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "e", function () {
        return c;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "f", function () {
        return t;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "g", function () {
        return _;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "h", function () {
        return w;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "o", function () {
        return o;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "u", function () {
        return u;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "v", function () {
        return y;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "z", function () {
        return e;
      });
      /*
      All material copyright ESRI, All Rights Reserved, unless otherwise specified.
      See https://js.arcgis.com/4.18/esri/copyright.txt for details.
      */


      function n() {
        return new Float32Array(3);
      }

      function r(n) {
        var r = new Float32Array(3);
        return r[0] = n[0], r[1] = n[1], r[2] = n[2], r;
      }

      function t(n, r, t) {
        var a = new Float32Array(3);
        return a[0] = n, a[1] = r, a[2] = t, a;
      }

      function a(n, r) {
        return new Float32Array(n, r, 3);
      }

      function e() {
        return n();
      }

      function o() {
        return t(1, 1, 1);
      }

      function u() {
        return t(1, 0, 0);
      }

      function s() {
        return t(0, 1, 0);
      }

      function c() {
        return t(0, 0, 1);
      }

      var i = e(),
          f = o(),
          l = u(),
          _ = s(),
          w = c();

      var y = Object.freeze({
        __proto__: null,
        create: n,
        clone: r,
        fromValues: t,
        createView: a,
        zeros: e,
        ones: o,
        unitX: u,
        unitY: s,
        unitZ: c,
        ZEROS: i,
        ONES: f,
        UNIT_X: l,
        UNIT_Y: _,
        UNIT_Z: w
      });
      /***/
    },

    /***/
    "Rh/S":
    /*!**********************************************************************************************!*\
      !*** ./node_modules/@arcgis/core/layers/graphics/data/optimizedFeatureQueryEngineAdapter.js ***!
      \**********************************************************************************************/

    /*! exports provided: default, optimizedFeatureQueryEngineAdapter */

    /***/
    function RhS(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "optimizedFeatureQueryEngineAdapter", function () {
        return o;
      });
      /* harmony import */


      var _OptimizedFeature_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ../OptimizedFeature.js */
      "k5I3");
      /* harmony import */


      var _OptimizedGeometry_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ../OptimizedGeometry.js */
      "gVKr");
      /* harmony import */


      var _centroid_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ../centroid.js */
      "2X7Z");
      /*
      All material copyright ESRI, All Rights Reserved, unless otherwise specified.
      See https://js.arcgis.com/4.18/esri/copyright.txt for details.
      */


      var o = {
        getObjectId: function getObjectId(t) {
          return t.objectId;
        },
        getAttributes: function getAttributes(t) {
          return t.attributes;
        },
        getAttribute: function getAttribute(t, e) {
          return t.attributes[e];
        },
        cloneWithGeometry: function cloneWithGeometry(e, r) {
          return new _OptimizedFeature_js__WEBPACK_IMPORTED_MODULE_0__["default"](r, e.attributes, null, e.objectId);
        },
        getGeometry: function getGeometry(t) {
          return t.geometry;
        },
        getCentroid: function getCentroid(t, o) {
          return t.centroid || (t.centroid = Object(_centroid_js__WEBPACK_IMPORTED_MODULE_2__["getCentroidOptimizedGeometry"])(new _OptimizedGeometry_js__WEBPACK_IMPORTED_MODULE_1__["default"](), t.geometry, o.hasZ, o.hasM)), t.centroid;
        }
      };
      /* harmony default export */

      __webpack_exports__["default"] = o;
      /***/
    },

    /***/
    "XJLX":
    /*!******************************************************************!*\
      !*** ./node_modules/@arcgis/core/portal/support/portalLayers.js ***!
      \******************************************************************/

    /*! exports provided: fromItem, selectLayerClassPath */

    /***/
    function XJLX(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "fromItem", function () {
        return i;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "selectLayerClassPath", function () {
        return c;
      });
      /* harmony import */


      var _core_maybe_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ../../core/maybe.js */
      "srIe");
      /* harmony import */


      var _core_Error_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ../../core/Error.js */
      "zlDU");
      /* harmony import */


      var _core_promiseUtils_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ../../core/promiseUtils.js */
      "9MzC");
      /* harmony import */


      var _request_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ../../request.js */
      "Lqtk");
      /* harmony import */


      var _PortalItem_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ../PortalItem.js */
      "p+Gi");
      /* harmony import */


      var _portalItemUtils_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ./portalItemUtils.js */
      "Dfpg");
      /* harmony import */


      var _layers_support_lazyLayerLoader_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ../../layers/support/lazyLayerLoader.js */
      "oLSx");
      /*
      All material copyright ESRI, All Rights Reserved, unless otherwise specified.
      See https://js.arcgis.com/4.18/esri/copyright.txt for details.
      */


      function i(e) {
        return !e.portalItem || e.portalItem instanceof _PortalItem_js__WEBPACK_IMPORTED_MODULE_4__["default"] || (e = _objectSpread(_objectSpread({}, e), {}, {
          portalItem: new _PortalItem_js__WEBPACK_IMPORTED_MODULE_4__["default"](e.portalItem)
        })), (r = e.portalItem, r.load().then(c).then(u)).then(function (r) {
          var a = _objectSpread({
            portalItem: e.portalItem
          }, r.properties),
              n = r.constructor;

          return Object(_core_promiseUtils_js__WEBPACK_IMPORTED_MODULE_2__["resolve"])(new n(a));
        });
        var r;
      }

      function c(e) {
        switch (e.type) {
          case "Map Service":
            return function (e) {
              return function (e) {
                return d(e.url).then(function (e) {
                  return e.tileInfo;
                });
              }(e).then(function (e) {
                return e ? {
                  className: "TileLayer"
                } : {
                  className: "MapImageLayer"
                };
              });
            }(e);

          case "Feature Service":
            return function (e) {
              return y(e).then(function (e) {
                if ("object" == typeof e) {
                  var r = {};
                  return null != e.id && (r.layerId = e.id), {
                    className: "FeatureLayer",
                    properties: r
                  };
                }

                return {
                  className: "GroupLayer"
                };
              });
            }(e);

          case "Feature Collection":
            return function () {
              var _ref2 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee7(e) {
                return regeneratorRuntime.wrap(function _callee7$(_context9) {
                  while (1) {
                    switch (_context9.prev = _context9.next) {
                      case 0:
                        _context9.next = 2;
                        return e.load();

                      case 2:
                        if (!Object(_portalItemUtils_js__WEBPACK_IMPORTED_MODULE_5__["hasTypeKeyword"])(e, "Map Notes")) {
                          _context9.next = 4;
                          break;
                        }

                        return _context9.abrupt("return", {
                          className: "MapNotesLayer"
                        });

                      case 4:
                        if (!Object(_portalItemUtils_js__WEBPACK_IMPORTED_MODULE_5__["hasTypeKeyword"])(e, "Route Layer")) {
                          _context9.next = 6;
                          break;
                        }

                        return _context9.abrupt("return", {
                          className: "RouteLayer"
                        });

                      case 6:
                        _context9.t0 = f;
                        _context9.next = 9;
                        return e.fetchData();

                      case 9:
                        _context9.t1 = _context9.sent;
                        _context9.t2 = (0, _context9.t0)(_context9.t1);

                        if (!(1 === _context9.t2)) {
                          _context9.next = 13;
                          break;
                        }

                        return _context9.abrupt("return", {
                          className: "FeatureLayer"
                        });

                      case 13:
                        return _context9.abrupt("return", {
                          className: "GroupLayer"
                        });

                      case 14:
                      case "end":
                        return _context9.stop();
                    }
                  }
                }, _callee7);
              }));

              return function (_x10) {
                return _ref2.apply(this, arguments);
              };
            }()(e);

          case "Scene Service":
            return function (e) {
              return y(e).then(function (r) {
                if ("object" == typeof r) {
                  var t = {};
                  var a;

                  if (null != r.id ? (t.layerId = r.id, a = "".concat(e.url, "/layers/").concat(r.id)) : a = e.url, Array.isArray(e.typeKeywords) && e.typeKeywords.length > 0) {
                    var _r5 = {
                      IntegratedMesh: "IntegratedMeshLayer",
                      "3DObject": "SceneLayer",
                      Point: "SceneLayer",
                      PointCloud: "PointCloudLayer",
                      Building: "BuildingSceneLayer"
                    };

                    for (var _i8 = 0, _Object$keys = Object.keys(_r5); _i8 < _Object$keys.length; _i8++) {
                      var _t21 = _Object$keys[_i8];
                      if (-1 !== e.typeKeywords.indexOf(_t21)) return {
                        className: _r5[_t21]
                      };
                    }
                  }

                  return d(a).then(function (e) {
                    var r = "SceneLayer";
                    var a = {
                      Point: "SceneLayer",
                      "3DObject": "SceneLayer",
                      IntegratedMesh: "IntegratedMeshLayer",
                      PointCloud: "PointCloudLayer",
                      Building: "BuildingSceneLayer"
                    };
                    return e && e.layerType && a[e.layerType] && (r = a[e.layerType]), {
                      className: r,
                      properties: t
                    };
                  });
                }

                return {
                  className: "GroupLayer"
                };
              });
            }(e);

          case "Image Service":
            return function () {
              var _ref3 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee8(e) {
                var r, t, a, n, o, l, s;
                return regeneratorRuntime.wrap(function _callee8$(_context10) {
                  while (1) {
                    switch (_context10.prev = _context10.next) {
                      case 0:
                        _context10.next = 2;
                        return e.load();

                      case 2:
                        n = null != (r = null == (t = e.typeKeywords) ? void 0 : t.map(function (e) {
                          return e.toLowerCase();
                        })) ? r : [];

                        if (!(n.indexOf("elevation 3d layer") > -1)) {
                          _context10.next = 5;
                          break;
                        }

                        return _context10.abrupt("return", {
                          className: "ElevationLayer"
                        });

                      case 5:
                        if (!(n.indexOf("tiled imagery") > -1)) {
                          _context10.next = 7;
                          break;
                        }

                        return _context10.abrupt("return", {
                          className: "ImageryTileLayer"
                        });

                      case 7:
                        _context10.next = 9;
                        return e.fetchData();

                      case 9:
                        o = _context10.sent;
                        l = null == o ? void 0 : o.layerType;

                        if (!("ArcGISTiledImageServiceLayer" === l)) {
                          _context10.next = 13;
                          break;
                        }

                        return _context10.abrupt("return", {
                          className: "ImageryTileLayer"
                        });

                      case 13:
                        if (!("ArcGISImageServiceLayer" === l)) {
                          _context10.next = 15;
                          break;
                        }

                        return _context10.abrupt("return", {
                          className: "ImageryLayer"
                        });

                      case 15:
                        _context10.next = 17;
                        return d(e.url);

                      case 17:
                        s = _context10.sent;

                        if (!("map" === (null == (a = s.cacheType) ? void 0 : a.toLowerCase()))) {
                          _context10.next = 20;
                          break;
                        }

                        return _context10.abrupt("return", {
                          className: "ImageryTileLayer"
                        });

                      case 20:
                        return _context10.abrupt("return", {
                          className: "ImageryLayer"
                        });

                      case 21:
                      case "end":
                        return _context10.stop();
                    }
                  }
                }, _callee8);
              }));

              return function (_x11) {
                return _ref3.apply(this, arguments);
              };
            }()(e);

          case "Stream Service":
            return {
              className: "StreamLayer"
            };

          case "Vector Tile Service":
            return {
              className: "VectorTileLayer"
            };

          case "KML":
            return {
              className: "KMLLayer"
            };

          case "WMTS":
            return {
              className: "WMTSLayer"
            };

          case "WMS":
            return {
              className: "WMSLayer"
            };

          default:
            return Object(_core_promiseUtils_js__WEBPACK_IMPORTED_MODULE_2__["reject"])(new _core_Error_js__WEBPACK_IMPORTED_MODULE_1__["default"]("portal:unknown-item-type", "Unknown item type '${type}'", {
              type: e.type
            }));
        }
      }

      function u(e) {
        return (0, _layers_support_lazyLayerLoader_js__WEBPACK_IMPORTED_MODULE_6__["layerLookupMap"][e.className])().then(function (r) {
          return {
            constructor: r,
            properties: e.properties
          };
        });
      }

      function y(e) {
        return !e.url || e.url.match(/\/\d+$/) ? Object(_core_promiseUtils_js__WEBPACK_IMPORTED_MODULE_2__["resolve"])({}) : e.load().then(function () {
          return e.fetchData();
        }).then(function (r) {
          return f(r) > 0 ? m(r) : d(e.url).then(m);
        });
      }

      function m(r) {
        return 1 === f(r) && {
          id: Object(_core_maybe_js__WEBPACK_IMPORTED_MODULE_0__["unwrap"])(p(r))
        };
      }

      function p(e) {
        var r = e.layers;
        if (r && r.length) return r[0].id;
        var t = e.tables;
        return t && t.length ? t[0].id : null;
      }

      function f(e) {
        var r, t, a, n;
        return (null != (r = null == e || null == (t = e.layers) ? void 0 : t.length) ? r : 0) + (null != (a = null == e || null == (n = e.tables) ? void 0 : n.length) ? a : 0);
      }

      function d(e) {
        return Object(_request_js__WEBPACK_IMPORTED_MODULE_3__["default"])(e, {
          responseType: "json",
          query: {
            f: "json"
          }
        }).then(function (e) {
          return e.data;
        });
      }
      /***/

    },

    /***/
    "ZRfE":
    /*!************************************************************************!*\
      !*** ./node_modules/@arcgis/core/layers/graphics/data/FeatureStore.js ***!
      \************************************************************************/

    /*! exports provided: default */

    /***/
    function ZRfE(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony import */


      var _core_maybe_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ../../../core/maybe.js */
      "srIe");
      /* harmony import */


      var _core_Logger_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ../../../core/Logger.js */
      "6S2I");
      /* harmony import */


      var _core_Error_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ../../../core/Error.js */
      "zlDU");
      /* harmony import */


      var _core_Evented_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ../../../core/Evented.js */
      "zm0L");
      /* harmony import */


      var _geometry_support_aaBoundingRect_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ../../../geometry/support/aaBoundingRect.js */
      "kYAx");
      /* harmony import */


      var _featureConversionUtils_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ../featureConversionUtils.js */
      "ZlUD");
      /* harmony import */


      var _geometry_support_aaBoundingBox_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ../../../geometry/support/aaBoundingBox.js */
      "QmHG");
      /* harmony import */


      var _BoundsStore_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! ./BoundsStore.js */
      "BMSW");
      /* harmony import */


      var _optimizedFeatureQueryEngineAdapter_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! ./optimizedFeatureQueryEngineAdapter.js */
      "Rh/S");
      /*
      All material copyright ESRI, All Rights Reserved, unless otherwise specified.
      See https://js.arcgis.com/4.18/esri/copyright.txt for details.
      */

      /* harmony default export */


      __webpack_exports__["default"] = /*#__PURE__*/function () {
        function _class2(e) {
          _classCallCheck(this, _class2);

          this.geometryInfo = e, this._boundsStore = new _BoundsStore_js__WEBPACK_IMPORTED_MODULE_7__["BoundsStore"](), this._featuresById = new Map(), this._markedIds = new Set(), this.events = new _core_Evented_js__WEBPACK_IMPORTED_MODULE_3__["default"](), this.featureAdapter = _optimizedFeatureQueryEngineAdapter_js__WEBPACK_IMPORTED_MODULE_8__["optimizedFeatureQueryEngineAdapter"];
        }

        _createClass(_class2, [{
          key: "geometryType",
          get: function get() {
            return this.geometryInfo.geometryType;
          }
        }, {
          key: "hasM",
          get: function get() {
            return this.geometryInfo.hasM;
          }
        }, {
          key: "hasZ",
          get: function get() {
            return this.geometryInfo.hasZ;
          }
        }, {
          key: "numFeatures",
          get: function get() {
            return this._featuresById.size;
          }
        }, {
          key: "fullBounds",
          get: function get() {
            var _this13 = this;

            if (!this.numFeatures) return null;
            var e = Object(_geometry_support_aaBoundingRect_js__WEBPACK_IMPORTED_MODULE_4__["create"])(_geometry_support_aaBoundingRect_js__WEBPACK_IMPORTED_MODULE_4__["NEGATIVE_INFINITY"]);
            return this._featuresById.forEach(function (t) {
              var r = _this13._boundsStore.get(t.objectId);

              r && (e[0] = Math.min(r[0], e[0]), e[1] = Math.min(r[1], e[1]), e[2] = Math.max(r[2], e[2]), e[3] = Math.max(r[3], e[3]));
            }), e;
          }
        }, {
          key: "storeStatistics",
          get: function get() {
            var e = 0;
            return this._featuresById.forEach(function (t) {
              t.geometry && t.geometry.coords && (e += t.geometry.coords.length);
            }), {
              featureCount: this._featuresById.size,
              vertexCount: e / (this.hasZ ? this.hasM ? 4 : 3 : this.hasM ? 3 : 2)
            };
          }
        }, {
          key: "add",
          value: function add(e) {
            this._add(e), this._emitChanged();
          }
        }, {
          key: "addMany",
          value: function addMany(e) {
            var _iterator22 = _createForOfIteratorHelper(e),
                _step22;

            try {
              for (_iterator22.s(); !(_step22 = _iterator22.n()).done;) {
                var t = _step22.value;

                this._add(t);
              }
            } catch (err) {
              _iterator22.e(err);
            } finally {
              _iterator22.f();
            }

            this._emitChanged();
          }
        }, {
          key: "clear",
          value: function clear() {
            this._featuresById.clear(), this._boundsStore.clear(), this._emitChanged();
          }
        }, {
          key: "removeById",
          value: function removeById(e) {
            var t = this._featuresById.get(e);

            return t ? (this._remove(t), this._emitChanged(), t) : null;
          }
        }, {
          key: "removeManyById",
          value: function removeManyById(e) {
            this._boundsStore.invalidateIndex();

            var _iterator23 = _createForOfIteratorHelper(e),
                _step23;

            try {
              for (_iterator23.s(); !(_step23 = _iterator23.n()).done;) {
                var t = _step23.value;

                var _e18 = this._featuresById.get(t);

                _e18 && this._remove(_e18);
              }
            } catch (err) {
              _iterator23.e(err);
            } finally {
              _iterator23.f();
            }

            this._emitChanged();
          }
        }, {
          key: "forEachBounds",
          value: function forEachBounds(e, t, r) {
            var _iterator24 = _createForOfIteratorHelper(e),
                _step24;

            try {
              for (_iterator24.s(); !(_step24 = _iterator24.n()).done;) {
                var s = _step24.value;

                var _e19 = this._boundsStore.get(s.objectId);

                _e19 && t(Object(_geometry_support_aaBoundingBox_js__WEBPACK_IMPORTED_MODULE_6__["fromRect"])(r, _e19));
              }
            } catch (err) {
              _iterator24.e(err);
            } finally {
              _iterator24.f();
            }
          }
        }, {
          key: "getFeature",
          value: function getFeature(e) {
            return this._featuresById.get(e);
          }
        }, {
          key: "has",
          value: function has(e) {
            return this._featuresById.has(e);
          }
        }, {
          key: "forEach",
          value: function forEach(e) {
            this._featuresById.forEach(function (t) {
              return e(t);
            });
          }
        }, {
          key: "forEachInBounds",
          value: function forEachInBounds(e, t) {
            var _this14 = this;

            this._boundsStore.forEachInBounds(e, function (e) {
              t(_this14._featuresById.get(e));
            });
          }
        }, {
          key: "startMarkingUsedFeatures",
          value: function startMarkingUsedFeatures() {
            this._boundsStore.invalidateIndex(), this._markedIds.clear();
          }
        }, {
          key: "sweep",
          value: function sweep() {
            var _this15 = this;

            var e = !1;
            this._featuresById.forEach(function (t, r) {
              _this15._markedIds.has(r) || (e = !0, _this15._remove(t));
            }), this._markedIds.clear(), e && this._emitChanged();
          }
        }, {
          key: "_emitChanged",
          value: function _emitChanged() {
            this.events.emit("changed", void 0);
          }
        }, {
          key: "_add",
          value: function _add(s) {
            if (!s) return;
            var i = s.objectId;
            if (null == i) return void _core_Logger_js__WEBPACK_IMPORTED_MODULE_1__["default"].getLogger("esri.layers.graphics.data.FeatureStore").error(new _core_Error_js__WEBPACK_IMPORTED_MODULE_2__["default"]("featurestore:invalid-feature", "feature id is missing", {
              feature: s
            }));

            var d = this._featuresById.get(i);

            var n;
            if (this._markedIds.add(i), d ? (s.displayId = d.displayId, n = this._boundsStore.get(i), this._boundsStore["delete"](i)) : Object(_core_maybe_js__WEBPACK_IMPORTED_MODULE_0__["isSome"])(this.onFeatureAdd) && this.onFeatureAdd(s), !s.geometry || !s.geometry.coords || !s.geometry.coords.length) return this._boundsStore.set(i, null), void this._featuresById.set(i, s);
            n = Object(_featureConversionUtils_js__WEBPACK_IMPORTED_MODULE_5__["getBoundsOptimizedGeometry"])(n || Object(_geometry_support_aaBoundingRect_js__WEBPACK_IMPORTED_MODULE_4__["create"])(), s.geometry, this.geometryInfo.hasZ, this.geometryInfo.hasM), this._boundsStore.set(i, n), this._featuresById.set(i, s);
          }
        }, {
          key: "_remove",
          value: function _remove(t) {
            return Object(_core_maybe_js__WEBPACK_IMPORTED_MODULE_0__["isSome"])(this.onFeatureRemove) && this.onFeatureRemove(t), this._markedIds["delete"](t.objectId), this._boundsStore["delete"](t.objectId), this._featuresById["delete"](t.objectId), t;
          }
        }]);

        return _class2;
      }();
      /***/

    },

    /***/
    "ZaV5":
    /*!**************************************************************************!*\
      !*** ./node_modules/@ionic/core/dist/esm/framework-delegate-4584ab5a.js ***!
      \**************************************************************************/

    /*! exports provided: a, d */

    /***/
    function ZaV5(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "a", function () {
        return attachComponent;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "d", function () {
        return detachComponent;
      });

      var attachComponent = /*#__PURE__*/function () {
        var _ref4 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee9(delegate, container, component, cssClasses, componentProps) {
          var el;
          return regeneratorRuntime.wrap(function _callee9$(_context11) {
            while (1) {
              switch (_context11.prev = _context11.next) {
                case 0:
                  if (!delegate) {
                    _context11.next = 2;
                    break;
                  }

                  return _context11.abrupt("return", delegate.attachViewToDom(container, component, componentProps, cssClasses));

                case 2:
                  if (!(typeof component !== 'string' && !(component instanceof HTMLElement))) {
                    _context11.next = 4;
                    break;
                  }

                  throw new Error('framework delegate is missing');

                case 4:
                  el = typeof component === 'string' ? container.ownerDocument && container.ownerDocument.createElement(component) : component;

                  if (cssClasses) {
                    cssClasses.forEach(function (c) {
                      return el.classList.add(c);
                    });
                  }

                  if (componentProps) {
                    Object.assign(el, componentProps);
                  }

                  container.appendChild(el);

                  if (!el.componentOnReady) {
                    _context11.next = 11;
                    break;
                  }

                  _context11.next = 11;
                  return el.componentOnReady();

                case 11:
                  return _context11.abrupt("return", el);

                case 12:
                case "end":
                  return _context11.stop();
              }
            }
          }, _callee9);
        }));

        return function attachComponent(_x12, _x13, _x14, _x15, _x16) {
          return _ref4.apply(this, arguments);
        };
      }();

      var detachComponent = function detachComponent(delegate, element) {
        if (element) {
          if (delegate) {
            var container = element.parentElement;
            return delegate.removeViewFromDom(container, element);
          }

          element.remove();
        }

        return Promise.resolve();
      };
      /***/

    },

    /***/
    "cBWO":
    /*!**************************************************!*\
      !*** ./node_modules/@arcgis/core/core/number.js ***!
      \**************************************************/

    /*! exports provided: _parseInfo, format, getCustoms, parse, regexp */

    /***/
    function cBWO(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "_parseInfo", function () {
        return l;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "format", function () {
        return o;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "getCustoms", function () {
        return r;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "parse", function () {
        return c;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "regexp", function () {
        return s;
      });
      /* harmony import */


      var _string_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ./string.js */
      "s7YA");
      /* harmony import */


      var _intl_locale_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ../intl/locale.js */
      "IDUf");
      /*
      All material copyright ESRI, All Rights Reserved, unless otherwise specified.
      See https://js.arcgis.com/4.18/esri/copyright.txt for details.
      */


      var t = {
        ar: [".", ","],
        bs: [",", "."],
        ca: [",", "."],
        cs: [",", " "],
        da: [",", "."],
        de: [",", "."],
        "de-ch": [".", "’"],
        el: [",", "."],
        en: [".", ","],
        "en-au": [".", ","],
        es: [",", "."],
        "es-mx": [".", ","],
        et: [",", " "],
        fi: [",", " "],
        fr: [",", " "],
        "fr-ch": [",", " "],
        he: [".", ","],
        hi: [".", ",", "#,##,##0.###"],
        hr: [",", "."],
        hu: [",", " "],
        id: [",", "."],
        it: [",", "."],
        "it-ch": [".", "’"],
        ja: [".", ","],
        ko: [".", ","],
        lt: [",", " "],
        lv: [",", " "],
        mk: [",", "."],
        nb: [",", " "],
        nl: [",", "."],
        pl: [",", " "],
        pt: [",", "."],
        "pt-pt": [",", " "],
        ro: [",", "."],
        ru: [",", " "],
        sk: [",", " "],
        sl: [",", "."],
        sr: [",", "."],
        sv: [",", " "],
        th: [".", ","],
        tr: [",", "."],
        uk: [",", " "],
        vi: [",", "."],
        zh: [".", ","]
      };

      function r(e) {
        e || (e = Object(_intl_locale_js__WEBPACK_IMPORTED_MODULE_1__["getLocale"])());
        var r = (e in t);

        if (!r) {
          var n = e.split("-");
          n.length > 1 && n[0] in t && (e = n[0], r = !0), r || (e = "en");
        }

        var _t$e = _slicedToArray(t[e], 3),
            o = _t$e[0],
            i = _t$e[1],
            _t$e$ = _t$e[2],
            s = _t$e$ === void 0 ? "#,##0.###" : _t$e$;

        return {
          decimal: o,
          group: i,
          pattern: s
        };
      }

      function o(e, n) {
        var t = r((n = _objectSpread({}, n)).locale);
        n.customs = t;
        var o = n.pattern || t.pattern;
        return isNaN(e) || Math.abs(e) === 1 / 0 ? null : function (e, n, t) {
          var r = (t = t || {}).customs.group,
              o = t.customs.decimal,
              s = n.split(";"),
              l = s[0];
          if (-1 !== (n = s[e < 0 ? 1 : 0] || "-" + l).indexOf("%")) e *= 100;else if (-1 !== n.indexOf("‰")) e *= 1e3;else {
            if (-1 !== n.indexOf("¤")) throw new Error("currency notation not supported");
            if (-1 !== n.indexOf("E")) throw new Error("exponential notation not supported");
          }
          var c = i,
              a = l.match(c);
          if (!a) throw new Error("unable to find a number expression in pattern: " + n);
          !1 === t.fractional && (t.places = 0);
          return n.replace(c, function (e, n, t) {
            !0 === (t = t || {}).places && (t.places = 0);
            t.places === 1 / 0 && (t.places = 6);
            var r = n.split("."),
                o = "string" == typeof t.places && t.places.indexOf(",");
            var i = t.places;
            o ? i = t.places.substring(o + 1) : i >= 0 || (i = (r[1] || []).length);
            t.round < 0 || (e = Number(e.toFixed(Number(i))));
            var s = String(Math.abs(e)).split("."),
                l = s[1] || "";

            if (r[1] || t.places) {
              o && (t.places = t.places.substring(0, o));

              var _e20 = void 0 !== t.places ? t.places : r[1] && r[1].lastIndexOf("0") + 1;

              _e20 > l.length && (s[1] = l.padEnd(Number(_e20), "0")), i < l.length && (s[1] = l.substr(0, Number(i)));
            } else s[1] && s.pop();

            var c = r[0].replace(",", "");
            var a = c.indexOf("0");
            -1 !== a && (a = c.length - a, a > s[0].length && (s[0] = s[0].padStart(a, "0")), -1 === c.indexOf("#") && (s[0] = s[0].substr(s[0].length - a)));
            var p,
                u,
                f = r[0].lastIndexOf(",");

            if (-1 !== f) {
              p = r[0].length - f - 1;

              var _e21 = r[0].substr(0, f);

              f = _e21.lastIndexOf(","), -1 !== f && (u = _e21.length - f - 1);
            }

            var d = [];

            for (var _e22 = s[0]; _e22;) {
              var _n11 = _e22.length - p;

              d.push(_n11 > 0 ? _e22.substr(_n11) : _e22), _e22 = _n11 > 0 ? _e22.slice(0, _n11) : "", u && (p = u, u = void 0);
            }

            return s[0] = d.reverse().join(t.group || ","), s.join(t.decimal || ".");
          }(e, a[0], {
            decimal: o,
            group: r,
            places: t.places,
            round: t.round
          }));
        }(e, o, n);
      }

      var i = /[#0,]*[#0](?:\.0*#*)?/;

      function s(e) {
        return l(e).regexp;
      }

      function l(n) {
        var t = r((n = n || {}).locale),
            o = n.pattern || t.pattern,
            s = t.group,
            l = t.decimal;
        var c = 1;
        if (-1 !== o.indexOf("%")) c /= 100;else if (-1 !== o.indexOf("‰")) c /= 1e3;else if (-1 !== o.indexOf("¤")) throw new Error("currency notation not supported");
        var u = o.split(";");
        1 === u.length && u.push("-" + u[0]);
        return {
          regexp: p(u, function (t) {
            return (t = "(?:" + Object(_string_js__WEBPACK_IMPORTED_MODULE_0__["escapeRegExpString"])(t, ".") + ")").replace(i, function (e) {
              var t = {
                signed: !1,
                separator: n.strict ? s : [s, ""],
                fractional: n.fractional,
                decimal: l,
                exponent: !1
              },
                  r = e.split(".");
              var o = n.places;
              1 === r.length && 1 !== c && (r[1] = "###"), 1 === r.length || 0 === o ? t.fractional = !1 : (void 0 === o && (o = n.pattern ? r[1].lastIndexOf("0") + 1 : 1 / 0), o && null == n.fractional && (t.fractional = !0), !n.places && o < r[1].length && (o += "," + r[1].length), t.places = o);
              var i = r[0].split(",");
              return i.length > 1 && (t.groupSize = i.pop().length, i.length > 1 && (t.groupSize2 = i.pop().length)), "(" + function (e) {
                "places" in (e = e || {}) || (e.places = 1 / 0);
                "string" != typeof e.decimal && (e.decimal = ".");
                "fractional" in e && !/^0/.test(String(e.places)) || (e.fractional = [!0, !1]);
                "exponent" in e || (e.exponent = [!0, !1]);
                "eSigned" in e || (e.eSigned = [!0, !1]);
                var n = a(e),
                    t = p(e.fractional, function (n) {
                  var t = "";
                  return n && 0 !== e.places && (t = "\\" + e.decimal, e.places === 1 / 0 ? t = "(?:" + t + "\\d+)?" : t += "\\d{" + e.places + "}"), t;
                }, !0),
                    r = p(e.exponent, function (n) {
                  return n ? "([eE]" + a({
                    signed: e.eSigned
                  }) + ")" : "";
                });
                var o = n + t;
                t && (o = "(?:(?:" + o + ")|(?:" + t + "))");
                return o + r;
              }(t) + ")";
            });
          }, !0).replace(/[\xa0 ]/g, "[\\s\\xa0]"),
          group: s,
          decimal: l,
          factor: c
        };
      }

      function c(e, n) {
        var t = l(n),
            r = new RegExp("^" + t.regexp + "$").exec(e);
        if (!r) return NaN;
        var o = r[1];

        if (!r[1]) {
          if (!r[2]) return NaN;
          o = r[2], t.factor *= -1;
        }

        return o = o.replace(new RegExp("[" + t.group + "\\s\\xa0]", "g"), "").replace(t.decimal, "."), Number(o) * t.factor;
      }

      function a(n) {
        "signed" in (n = n || {}) || (n.signed = [!0, !1]), "separator" in n ? "groupSize" in n || (n.groupSize = 3) : n.separator = "";
        return p(n.signed, function (e) {
          return e ? "[-+]" : "";
        }, !0) + p(n.separator, function (t) {
          if (!t) return "(?:\\d+)";
          " " === (t = Object(_string_js__WEBPACK_IMPORTED_MODULE_0__["escapeRegExpString"])(t)) ? t = "\\s" : " " === t && (t = "\\s\\xa0");
          var r = n.groupSize,
              o = n.groupSize2;

          if (o) {
            var e = "(?:0|[1-9]\\d{0," + (o - 1) + "}(?:[" + t + "]\\d{" + o + "})*[" + t + "]\\d{" + r + "})";
            return r - o > 0 ? "(?:" + e + "|(?:0|[1-9]\\d{0," + (r - 1) + "}))" : e;
          }

          return "(?:0|[1-9]\\d{0," + (r - 1) + "}(?:[" + t + "]\\d{" + r + "})*)";
        }, !0);
      }

      var p = function p(e, n, t) {
        if (!(e instanceof Array)) return n(e);
        var r = [];

        for (var _t22 = 0; _t22 < e.length; _t22++) {
          r.push(n(e[_t22]));
        }

        return u(r.join("|"), t);
      },
          u = function u(e, n) {
        return "(" + (n ? "?:" : "") + e + ")";
      };
      /***/

    },

    /***/
    "dZC4":
    /*!*************************************************************************!*\
      !*** ./node_modules/@arcgis/core/geometry/geometryAdapters/hydrated.js ***!
      \*************************************************************************/

    /*! exports provided: hydratedAdapter */

    /***/
    function dZC4(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "hydratedAdapter", function () {
        return r;
      });
      /* harmony import */


      var _Point_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ../Point.js */
      "SuVq");
      /* harmony import */


      var _Extent_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ../Extent.js */
      "OvF4");
      /* harmony import */


      var _Multipoint_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ../Multipoint.js */
      "V9wi");
      /* harmony import */


      var _Polygon_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ../Polygon.js */
      "Ehki");
      /* harmony import */


      var _Polyline_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ../Polyline.js */
      "UhwK");
      /*
      All material copyright ESRI, All Rights Reserved, unless otherwise specified.
      See https://js.arcgis.com/4.18/esri/copyright.txt for details.
      */


      var r = {
        convertToGEGeometry: function convertToGEGeometry(e, n) {
          if (null == n) return null;
          var t = "cache" in n ? n.cache._geVersion : void 0;
          null == t && (t = e.convertJSONToGeometry(n), "cache" in n && (n.cache._geVersion = t));
          return t;
        },
        exportPoint: function exportPoint(n, t, o) {
          var i = n.hasZ(t),
              r = n.hasM(t),
              s = new _Point_js__WEBPACK_IMPORTED_MODULE_0__["default"]({
            x: n.getPointX(t),
            y: n.getPointY(t),
            spatialReference: o
          });
          i && (s.z = n.getPointZ(t));
          r && (s.m = n.getPointM(t));
          return s.cache._geVersion = t, s;
        },
        exportPolygon: function exportPolygon(e, n, t) {
          var i = new _Polygon_js__WEBPACK_IMPORTED_MODULE_3__["default"]({
            rings: e.exportPaths(n),
            hasZ: e.hasZ(n),
            hasM: e.hasM(n),
            spatialReference: t
          });
          return i.cache._geVersion = n, i;
        },
        exportPolyline: function exportPolyline(e, n, t) {
          var o = new _Polyline_js__WEBPACK_IMPORTED_MODULE_4__["default"]({
            paths: e.exportPaths(n),
            hasZ: e.hasZ(n),
            hasM: e.hasM(n),
            spatialReference: t
          });
          return o.cache._geVersion = n, o;
        },
        exportMultipoint: function exportMultipoint(e, n, o) {
          var i = new _Multipoint_js__WEBPACK_IMPORTED_MODULE_2__["default"]({
            hasZ: e.hasZ(n),
            hasM: e.hasM(n),
            points: e.exportPoints(n),
            spatialReference: o
          });
          return i.cache._geVersion = n, i;
        },
        exportExtent: function exportExtent(e, t, o) {
          var i = e.hasZ(t),
              r = e.hasM(t),
              s = new _Extent_js__WEBPACK_IMPORTED_MODULE_1__["default"]({
            xmin: e.getXMin(t),
            ymin: e.getYMin(t),
            xmax: e.getXMax(t),
            ymax: e.getYMax(t),
            spatialReference: o
          });

          if (i) {
            var n = e.getZExtent(t);
            s.zmin = n.vmin, s.zmax = n.vmax;
          }

          if (r) {
            var _n12 = e.getMExtent(t);

            s.mmin = _n12.vmin, s.mmax = _n12.vmax;
          }

          return s.cache._geVersion = t, s;
        }
      };
      /***/
    },

    /***/
    "h3R7":
    /*!***********************************************************************!*\
      !*** ./node_modules/@ionic/core/dist/esm/spinner-configs-cd7845af.js ***!
      \***********************************************************************/

    /*! exports provided: S */

    /***/
    function h3R7(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "S", function () {
        return SPINNERS;
      });

      var spinners = {
        'bubbles': {
          dur: 1000,
          circles: 9,
          fn: function fn(dur, index, total) {
            var animationDelay = "".concat(dur * index / total - dur, "ms");
            var angle = 2 * Math.PI * index / total;
            return {
              r: 5,
              style: {
                'top': "".concat(9 * Math.sin(angle), "px"),
                'left': "".concat(9 * Math.cos(angle), "px"),
                'animation-delay': animationDelay
              }
            };
          }
        },
        'circles': {
          dur: 1000,
          circles: 8,
          fn: function fn(dur, index, total) {
            var step = index / total;
            var animationDelay = "".concat(dur * step - dur, "ms");
            var angle = 2 * Math.PI * step;
            return {
              r: 5,
              style: {
                'top': "".concat(9 * Math.sin(angle), "px"),
                'left': "".concat(9 * Math.cos(angle), "px"),
                'animation-delay': animationDelay
              }
            };
          }
        },
        'circular': {
          dur: 1400,
          elmDuration: true,
          circles: 1,
          fn: function fn() {
            return {
              r: 20,
              cx: 48,
              cy: 48,
              fill: 'none',
              viewBox: '24 24 48 48',
              transform: 'translate(0,0)',
              style: {}
            };
          }
        },
        'crescent': {
          dur: 750,
          circles: 1,
          fn: function fn() {
            return {
              r: 26,
              style: {}
            };
          }
        },
        'dots': {
          dur: 750,
          circles: 3,
          fn: function fn(_, index) {
            var animationDelay = -(110 * index) + 'ms';
            return {
              r: 6,
              style: {
                'left': "".concat(9 - 9 * index, "px"),
                'animation-delay': animationDelay
              }
            };
          }
        },
        'lines': {
          dur: 1000,
          lines: 12,
          fn: function fn(dur, index, total) {
            var transform = "rotate(".concat(30 * index + (index < 6 ? 180 : -180), "deg)");
            var animationDelay = "".concat(dur * index / total - dur, "ms");
            return {
              y1: 17,
              y2: 29,
              style: {
                'transform': transform,
                'animation-delay': animationDelay
              }
            };
          }
        },
        'lines-small': {
          dur: 1000,
          lines: 12,
          fn: function fn(dur, index, total) {
            var transform = "rotate(".concat(30 * index + (index < 6 ? 180 : -180), "deg)");
            var animationDelay = "".concat(dur * index / total - dur, "ms");
            return {
              y1: 12,
              y2: 20,
              style: {
                'transform': transform,
                'animation-delay': animationDelay
              }
            };
          }
        }
      };
      var SPINNERS = spinners;
      /***/
    },

    /***/
    "hIOP":
    /*!***********************************************************************!*\
      !*** ./node_modules/@arcgis/core/views/2d/layers/features/Store2D.js ***!
      \***********************************************************************/

    /*! exports provided: Store2D */

    /***/
    function hIOP(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "Store2D", function () {
        return n;
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


      var _core_promiseUtils_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ../../../../core/promiseUtils.js */
      "9MzC");
      /* harmony import */


      var _support_arcadeOnDemand_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ../../../../support/arcadeOnDemand.js */
      "gvqN");
      /* harmony import */


      var _core_accessorSupport_diffUtils_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ../../../../core/accessorSupport/diffUtils.js */
      "DxxZ");
      /* harmony import */


      var _arcade_callExpressionWithCursor_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ../../arcade/callExpressionWithCursor.js */
      "xMVW");
      /*
      All material copyright ESRI, All Rights Reserved, unless otherwise specified.
      See https://js.arcgis.com/4.18/esri/copyright.txt for details.
      */


      var c = __webpack_require__.e(
      /*! import() | layers-support-labelFormatUtils-js */
      "layers-support-labelFormatUtils-js").then(__webpack_require__.bind(null,
      /*! ../../../../layers/support/labelFormatUtils.js */
      "zKxS"));

      var n = /*#__PURE__*/function () {
        function n(e, s) {
          _classCallCheck(this, n);

          this._canCacheExpressionValue = !1, this._sourceInfo = e, this._bitsets = {
            computed: s.getBitset(s.createBitset())
          };
        }

        _createClass(n, [{
          key: "updateSchema",
          value: function () {
            var _updateSchema = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee10(r, o) {
              var c, _n13, p, u, e, s;

              return regeneratorRuntime.wrap(function _callee10$(_context12) {
                while (1) {
                  switch (_context12.prev = _context12.next) {
                    case 0:
                      c = Object(_core_accessorSupport_diffUtils_js__WEBPACK_IMPORTED_MODULE_4__["diff"])(this._schema, o);

                      if (!(this._schema = o, !o || Object(_core_maybe_js__WEBPACK_IMPORTED_MODULE_1__["isNone"])(c) || !Object(_core_accessorSupport_diffUtils_js__WEBPACK_IMPORTED_MODULE_4__["hasDiff"])(c, "attributes"))) {
                        _context12.next = 3;
                        break;
                      }

                      return _context12.abrupt("return");

                    case 3:
                      Object(_core_has_js__WEBPACK_IMPORTED_MODULE_0__["default"])("esri-2d-update-debug") && console.debug("Applying Update - Store:", c), this._bitsets.computed.clear(), r.targets[o.name] = !0;
                      _n13 = o.attributes, p = [], u = [];
                      _context12.t0 = regeneratorRuntime.keys(_n13);

                    case 6:
                      if ((_context12.t1 = _context12.t0()).done) {
                        _context12.next = 20;
                        break;
                      }

                      e = _context12.t1.value;
                      s = _n13[e];
                      _context12.t2 = s.type;
                      _context12.next = _context12.t2 === "field" ? 12 : _context12.t2 === "expression" ? 13 : _context12.t2 === "label-expression" ? 15 : _context12.t2 === "statistic" ? 17 : 18;
                      break;

                    case 12:
                      return _context12.abrupt("break", 18);

                    case 13:
                      p.push(this._createArcadeComputedField(s));
                      return _context12.abrupt("break", 18);

                    case 15:
                      p.push(this._createLabelArcadeComputedField(s));
                      return _context12.abrupt("break", 18);

                    case 17:
                      u.push(s);

                    case 18:
                      _context12.next = 6;
                      break;

                    case 20:
                      _context12.next = 22;
                      return Object(_core_promiseUtils_js__WEBPACK_IMPORTED_MODULE_2__["all"])(p);

                    case 22:
                      this._computedFields = _context12.sent;
                      this._canCacheExpressionValue = !this._computedFields.some(function (e) {
                        return "expression" === e.type && e.expression.referencesScale();
                      });
                      this._statisticFields = u;

                    case 25:
                    case "end":
                      return _context12.stop();
                  }
                }
              }, _callee10, this);
            }));

            function updateSchema(_x17, _x18) {
              return _updateSchema.apply(this, arguments);
            }

            return updateSchema;
          }()
        }, {
          key: "setComputedAttributes",
          value: function setComputedAttributes(e, s, t, r) {
            var i = this._bitsets.computed;

            if (!this._canCacheExpressionValue || !i.has(t)) {
              i.set(t);

              var _iterator25 = _createForOfIteratorHelper(this._computedFields),
                  _step25;

              try {
                for (_iterator25.s(); !(_step25 = _iterator25.n()).done;) {
                  var _i9 = _step25.value;

                  var a = this._evaluateField(s, _i9, r);

                  switch (_i9.resultType) {
                    case "numeric":
                      e.setComputedNumericAtIndex(t, _i9.fieldIndex, a);
                      break;

                    case "string":
                      e.setComputedStringAtIndex(t, _i9.fieldIndex, a);
                  }
                }
              } catch (err) {
                _iterator25.e(err);
              } finally {
                _iterator25.f();
              }
            }
          }
        }, {
          key: "_createArcadeComputedField",
          value: function () {
            var _createArcadeComputedField2 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee11(e) {
              var s, t;
              return regeneratorRuntime.wrap(function _callee11$(_context13) {
                while (1) {
                  switch (_context13.prev = _context13.next) {
                    case 0:
                      s = this._sourceInfo.spatialReference, t = this._sourceInfo.fieldsIndex;
                      _context13.t0 = _objectSpread;
                      _context13.t1 = _objectSpread({}, e);
                      _context13.t2 = {};
                      _context13.next = 6;
                      return Object(_support_arcadeOnDemand_js__WEBPACK_IMPORTED_MODULE_3__["createRendererExpression"])(e.valueExpression, s, t);

                    case 6:
                      _context13.t3 = _context13.sent;
                      _context13.t4 = {
                        expression: _context13.t3
                      };
                      return _context13.abrupt("return", (0, _context13.t0)(_context13.t1, _context13.t2, _context13.t4));

                    case 9:
                    case "end":
                      return _context13.stop();
                  }
                }
              }, _callee11, this);
            }));

            function _createArcadeComputedField(_x19) {
              return _createArcadeComputedField2.apply(this, arguments);
            }

            return _createArcadeComputedField;
          }()
        }, {
          key: "_createLabelArcadeComputedField",
          value: function () {
            var _createLabelArcadeComputedField2 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee12(e) {
              var s, t, _yield$c, r, i;

              return regeneratorRuntime.wrap(function _callee12$(_context14) {
                while (1) {
                  switch (_context14.prev = _context14.next) {
                    case 0:
                      s = this._sourceInfo.spatialReference;
                      t = this._sourceInfo.fields;
                      _context14.next = 4;
                      return c;

                    case 4:
                      _yield$c = _context14.sent;
                      r = _yield$c.createLabelFunction;
                      _context14.next = 8;
                      return r(e.label, t, s);

                    case 8:
                      i = _context14.sent;
                      return _context14.abrupt("return", _objectSpread(_objectSpread({}, e), {}, {
                        builder: i
                      }));

                    case 10:
                    case "end":
                      return _context14.stop();
                  }
                }
              }, _callee12, this);
            }));

            function _createLabelArcadeComputedField(_x20) {
              return _createLabelArcadeComputedField2.apply(this, arguments);
            }

            return _createLabelArcadeComputedField;
          }()
        }, {
          key: "_evaluateField",
          value: function _evaluateField(e, s, t) {
            switch (s.type) {
              case "label-expression":
                {
                  var _t23 = e.readArcadeFeature();

                  return s.builder.evaluate(_t23) || "";
                }

              case "expression":
                {
                  var r = s.expression;
                  return Object(_arcade_callExpressionWithCursor_js__WEBPACK_IMPORTED_MODULE_5__["default"])(r, e, {
                    $view: {
                      scale: t
                    }
                  });
                }
            }
          }
        }]);

        return n;
      }();
      /***/

    },

    /***/
    "iUxC":
    /*!**************************************************************************!*\
      !*** ./node_modules/@arcgis/core/views/2d/engine/ImageryBitmapSource.js ***!
      \**************************************************************************/

    /*! exports provided: default */

    /***/
    function iUxC(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /*
      All material copyright ESRI, All Rights Reserved, unless otherwise specified.
      See https://js.arcgis.com/4.18/esri/copyright.txt for details.
      */

      /* harmony default export */


      __webpack_exports__["default"] = /*#__PURE__*/function () {
        function _class3(e, t, i) {
          _classCallCheck(this, _class3);

          this.pixelBlock = e, this.extent = t, this.originalPixelBlock = i;
        }

        _createClass(_class3, [{
          key: "width",
          get: function get() {
            return this.pixelBlock ? this.pixelBlock.width : 0;
          }
        }, {
          key: "height",
          get: function get() {
            return this.pixelBlock ? this.pixelBlock.height : 0;
          }
        }, {
          key: "render",
          value: function render(e) {
            var t = this.pixelBlock;
            if (!t) return;
            var i = this.filter({
              pixelBlock: t
            }),
                l = i.pixelBlock.getAsRGBA(),
                h = e.createImageData(i.pixelBlock.width, i.pixelBlock.height);
            h.data.set(l), e.putImageData(h, 0, 0);
          }
        }, {
          key: "getRenderedRasterPixels",
          value: function getRenderedRasterPixels() {
            var e = this.filter({
              pixelBlock: this.pixelBlock
            });
            return {
              width: e.pixelBlock.width,
              height: e.pixelBlock.height,
              renderedRasterPixels: new Uint8Array(e.pixelBlock.getAsRGBA().buffer)
            };
          }
        }]);

        return _class3;
      }();
      /***/

    },

    /***/
    "kGdt":
    /*!***************************************************************!*\
      !*** ./node_modules/@arcgis/core/views/webgl/ProgramCache.js ***!
      \***************************************************************/

    /*! exports provided: default */

    /***/
    function kGdt(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony import */


      var _programUtils_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ./programUtils.js */
      "1F90");
      /*
      All material copyright ESRI, All Rights Reserved, unless otherwise specified.
      See https://js.arcgis.com/4.18/esri/copyright.txt for details.
      */

      /* harmony default export */


      __webpack_exports__["default"] = /*#__PURE__*/function () {
        function _class4(r) {
          _classCallCheck(this, _class4);

          this._programCacheByTemplate = new Map(), this._rctx = r;
        }

        _createClass(_class4, [{
          key: "dispose",
          value: function dispose() {
            this._programCacheByTemplate.forEach(function (r) {
              r.programs.forEach(function (r) {
                r.dispose();
              });
            }), this._programCacheByTemplate = null;
          }
        }, {
          key: "getProgram",
          value: function getProgram(t, a) {
            var _this16 = this;

            return this._programCacheByTemplate.has(t) || this.addProgramTemplate(t, function (a) {
              return Object(_programUtils_js__WEBPACK_IMPORTED_MODULE_0__["createProgram"])(_this16._rctx, t, a);
            }), this.getProgramTemplateInstance(t, a);
          }
        }, {
          key: "addProgramTemplate",
          value: function addProgramTemplate(r, t) {
            this._programCacheByTemplate.set(r, {
              constructor: t,
              programs: new Map()
            });
          }
        }, {
          key: "getProgramTemplateInstance",
          value: function getProgramTemplateInstance(r, t) {
            var a = this._programCacheByTemplate.get(r);

            if (a) {
              var _r6 = t ? JSON.stringify(t) : "default";

              if (!a.programs.has(_r6)) {
                var e = a.constructor(t);
                a.programs.set(_r6, e);
              }

              return a.programs.get(_r6);
            }

            return null;
          }
        }]);

        return _class4;
      }();
      /***/

    },

    /***/
    "l5Tg":
    /*!****************************************************************!*\
      !*** ./node_modules/@arcgis/core/chunks/geometryEngineJSON.js ***!
      \****************************************************************/

    /*! exports provided: A, B, C, D, E, F, G, H, I, J, K, a, b, c, d, e, f, g, h, i, j, k, l, m, n, o, p, q, r, s, t, u, v, w, x, y, z */

    /***/
    function l5Tg(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "A", function () {
        return D;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "B", function () {
        return H;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "C", function () {
        return R;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "D", function () {
        return b;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "E", function () {
        return B;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "F", function () {
        return L;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "G", function () {
        return S;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "H", function () {
        return _;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "I", function () {
        return q;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "J", function () {
        return C;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "K", function () {
        return k;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "a", function () {
        return i;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "b", function () {
        return s;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "c", function () {
        return t;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "d", function () {
        return u;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "e", function () {
        return r;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "f", function () {
        return o;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "g", function () {
        return F;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "h", function () {
        return a;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "i", function () {
        return c;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "j", function () {
        return p;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "k", function () {
        return m;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "l", function () {
        return y;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "m", function () {
        return x;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "n", function () {
        return w;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "o", function () {
        return g;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "p", function () {
        return A;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "q", function () {
        return j;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "r", function () {
        return d;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "s", function () {
        return h;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "t", function () {
        return f;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "u", function () {
        return E;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "v", function () {
        return v;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "w", function () {
        return l;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "x", function () {
        return z;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "y", function () {
        return I;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "z", function () {
        return V;
      });
      /* harmony import */


      var _geometryEngineBase_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ./geometryEngineBase.js */
      "9gar");
      /* harmony import */


      var _geometry_geometryAdapters_json_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ../geometry/geometryAdapters/json.js */
      "1kEK");
      /*
      All material copyright ESRI, All Rights Reserved, unless otherwise specified.
      See https://js.arcgis.com/4.18/esri/copyright.txt for details.
      */


      function r(n) {
        return _geometryEngineBase_js__WEBPACK_IMPORTED_MODULE_0__["a"].extendedSpatialReferenceInfo(n);
      }

      function t(r, t, i) {
        return _geometryEngineBase_js__WEBPACK_IMPORTED_MODULE_0__["a"].clip(_geometry_geometryAdapters_json_js__WEBPACK_IMPORTED_MODULE_1__["jsonAdapter"], r, t, i);
      }

      function i(r, t, i) {
        return _geometryEngineBase_js__WEBPACK_IMPORTED_MODULE_0__["a"].cut(_geometry_geometryAdapters_json_js__WEBPACK_IMPORTED_MODULE_1__["jsonAdapter"], r, t, i);
      }

      function s(r, t, i) {
        return _geometryEngineBase_js__WEBPACK_IMPORTED_MODULE_0__["a"].contains(_geometry_geometryAdapters_json_js__WEBPACK_IMPORTED_MODULE_1__["jsonAdapter"], r, t, i);
      }

      function u(r, t, i) {
        return _geometryEngineBase_js__WEBPACK_IMPORTED_MODULE_0__["a"].crosses(_geometry_geometryAdapters_json_js__WEBPACK_IMPORTED_MODULE_1__["jsonAdapter"], r, t, i);
      }

      function o(r, t, i, s) {
        return _geometryEngineBase_js__WEBPACK_IMPORTED_MODULE_0__["a"].distance(_geometry_geometryAdapters_json_js__WEBPACK_IMPORTED_MODULE_1__["jsonAdapter"], r, t, i, s);
      }

      function a(r, t, i) {
        return _geometryEngineBase_js__WEBPACK_IMPORTED_MODULE_0__["a"].equals(_geometry_geometryAdapters_json_js__WEBPACK_IMPORTED_MODULE_1__["jsonAdapter"], r, t, i);
      }

      function c(r, t, i) {
        return _geometryEngineBase_js__WEBPACK_IMPORTED_MODULE_0__["a"].intersects(_geometry_geometryAdapters_json_js__WEBPACK_IMPORTED_MODULE_1__["jsonAdapter"], r, t, i);
      }

      function f(r, t, i) {
        return _geometryEngineBase_js__WEBPACK_IMPORTED_MODULE_0__["a"].touches(_geometry_geometryAdapters_json_js__WEBPACK_IMPORTED_MODULE_1__["jsonAdapter"], r, t, i);
      }

      function l(r, t, i) {
        return _geometryEngineBase_js__WEBPACK_IMPORTED_MODULE_0__["a"].within(_geometry_geometryAdapters_json_js__WEBPACK_IMPORTED_MODULE_1__["jsonAdapter"], r, t, i);
      }

      function p(r, t, i) {
        return _geometryEngineBase_js__WEBPACK_IMPORTED_MODULE_0__["a"].disjoint(_geometry_geometryAdapters_json_js__WEBPACK_IMPORTED_MODULE_1__["jsonAdapter"], r, t, i);
      }

      function g(r, t, i) {
        return _geometryEngineBase_js__WEBPACK_IMPORTED_MODULE_0__["a"].overlaps(_geometry_geometryAdapters_json_js__WEBPACK_IMPORTED_MODULE_1__["jsonAdapter"], r, t, i);
      }

      function d(r, t, i, s) {
        return _geometryEngineBase_js__WEBPACK_IMPORTED_MODULE_0__["a"].relate(_geometry_geometryAdapters_json_js__WEBPACK_IMPORTED_MODULE_1__["jsonAdapter"], r, t, i, s);
      }

      function m(r, t) {
        return _geometryEngineBase_js__WEBPACK_IMPORTED_MODULE_0__["a"].isSimple(_geometry_geometryAdapters_json_js__WEBPACK_IMPORTED_MODULE_1__["jsonAdapter"], r, t);
      }

      function h(r, t) {
        return _geometryEngineBase_js__WEBPACK_IMPORTED_MODULE_0__["a"].simplify(_geometry_geometryAdapters_json_js__WEBPACK_IMPORTED_MODULE_1__["jsonAdapter"], r, t);
      }

      function y(r, t) {
        var i = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : !1;
        return _geometryEngineBase_js__WEBPACK_IMPORTED_MODULE_0__["a"].convexHull(_geometry_geometryAdapters_json_js__WEBPACK_IMPORTED_MODULE_1__["jsonAdapter"], r, t, i);
      }

      function x(r, t, i) {
        return _geometryEngineBase_js__WEBPACK_IMPORTED_MODULE_0__["a"].difference(_geometry_geometryAdapters_json_js__WEBPACK_IMPORTED_MODULE_1__["jsonAdapter"], r, t, i);
      }

      function w(r, t, i) {
        return _geometryEngineBase_js__WEBPACK_IMPORTED_MODULE_0__["a"].symmetricDifference(_geometry_geometryAdapters_json_js__WEBPACK_IMPORTED_MODULE_1__["jsonAdapter"], r, t, i);
      }

      function A(r, t, i) {
        return _geometryEngineBase_js__WEBPACK_IMPORTED_MODULE_0__["a"].intersect(_geometry_geometryAdapters_json_js__WEBPACK_IMPORTED_MODULE_1__["jsonAdapter"], r, t, i);
      }

      function E(r, t) {
        var i = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : null;
        return _geometryEngineBase_js__WEBPACK_IMPORTED_MODULE_0__["a"].union(_geometry_geometryAdapters_json_js__WEBPACK_IMPORTED_MODULE_1__["jsonAdapter"], r, t, i);
      }

      function j(r, t, i, s, u, o, a) {
        return _geometryEngineBase_js__WEBPACK_IMPORTED_MODULE_0__["a"].offset(_geometry_geometryAdapters_json_js__WEBPACK_IMPORTED_MODULE_1__["jsonAdapter"], r, t, i, s, u, o, a);
      }

      function v(r, t, i, s) {
        var u = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : !1;
        return _geometryEngineBase_js__WEBPACK_IMPORTED_MODULE_0__["a"].buffer(_geometry_geometryAdapters_json_js__WEBPACK_IMPORTED_MODULE_1__["jsonAdapter"], r, t, i, s, u);
      }

      function z(r, t, i, s, u, o, a) {
        return _geometryEngineBase_js__WEBPACK_IMPORTED_MODULE_0__["a"].geodesicBuffer(_geometry_geometryAdapters_json_js__WEBPACK_IMPORTED_MODULE_1__["jsonAdapter"], r, t, i, s, u, o, a);
      }

      function I(r, t, i) {
        var s = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : !0;
        return _geometryEngineBase_js__WEBPACK_IMPORTED_MODULE_0__["a"].nearestCoordinate(_geometry_geometryAdapters_json_js__WEBPACK_IMPORTED_MODULE_1__["jsonAdapter"], r, t, i, s);
      }

      function V(r, t, i) {
        return _geometryEngineBase_js__WEBPACK_IMPORTED_MODULE_0__["a"].nearestVertex(_geometry_geometryAdapters_json_js__WEBPACK_IMPORTED_MODULE_1__["jsonAdapter"], r, t, i);
      }

      function D(r, t, i, s, u) {
        return _geometryEngineBase_js__WEBPACK_IMPORTED_MODULE_0__["a"].nearestVertices(_geometry_geometryAdapters_json_js__WEBPACK_IMPORTED_MODULE_1__["jsonAdapter"], r, t, i, s, u);
      }

      function H(n, r, t, i) {
        if (null == r || null == i) throw new Error("Illegal Argument Exception");

        var s = _geometryEngineBase_js__WEBPACK_IMPORTED_MODULE_0__["a"].rotate(r, t, i);

        return s.spatialReference = n, s;
      }

      function R(n, r, t) {
        if (null == r || null == t) throw new Error("Illegal Argument Exception");

        var i = _geometryEngineBase_js__WEBPACK_IMPORTED_MODULE_0__["a"].flipHorizontal(r, t);

        return i.spatialReference = n, i;
      }

      function b(n, r, t) {
        if (null == r || null == t) throw new Error("Illegal Argument Exception");

        var i = _geometryEngineBase_js__WEBPACK_IMPORTED_MODULE_0__["a"].flipVertical(r, t);

        return i.spatialReference = n, i;
      }

      function B(r, t, i, s, u) {
        return _geometryEngineBase_js__WEBPACK_IMPORTED_MODULE_0__["a"].generalize(_geometry_geometryAdapters_json_js__WEBPACK_IMPORTED_MODULE_1__["jsonAdapter"], r, t, i, s, u);
      }

      function L(r, t, i, s) {
        return _geometryEngineBase_js__WEBPACK_IMPORTED_MODULE_0__["a"].densify(_geometry_geometryAdapters_json_js__WEBPACK_IMPORTED_MODULE_1__["jsonAdapter"], r, t, i, s);
      }

      function S(r, t, i, s) {
        var u = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : 0;
        return _geometryEngineBase_js__WEBPACK_IMPORTED_MODULE_0__["a"].geodesicDensify(_geometry_geometryAdapters_json_js__WEBPACK_IMPORTED_MODULE_1__["jsonAdapter"], r, t, i, s, u);
      }

      function _(r, t, i) {
        return _geometryEngineBase_js__WEBPACK_IMPORTED_MODULE_0__["a"].planarArea(_geometry_geometryAdapters_json_js__WEBPACK_IMPORTED_MODULE_1__["jsonAdapter"], r, t, i);
      }

      function q(r, t, i) {
        return _geometryEngineBase_js__WEBPACK_IMPORTED_MODULE_0__["a"].planarLength(_geometry_geometryAdapters_json_js__WEBPACK_IMPORTED_MODULE_1__["jsonAdapter"], r, t, i);
      }

      function C(r, t, i, s) {
        return _geometryEngineBase_js__WEBPACK_IMPORTED_MODULE_0__["a"].geodesicArea(_geometry_geometryAdapters_json_js__WEBPACK_IMPORTED_MODULE_1__["jsonAdapter"], r, t, i, s);
      }

      function k(r, t, i, s) {
        return _geometryEngineBase_js__WEBPACK_IMPORTED_MODULE_0__["a"].geodesicLength(_geometry_geometryAdapters_json_js__WEBPACK_IMPORTED_MODULE_1__["jsonAdapter"], r, t, i, s);
      }

      var F = Object.freeze({
        __proto__: null,
        extendedSpatialReferenceInfo: r,
        clip: t,
        cut: i,
        contains: s,
        crosses: u,
        distance: o,
        equals: a,
        intersects: c,
        touches: f,
        within: l,
        disjoint: p,
        overlaps: g,
        relate: d,
        isSimple: m,
        simplify: h,
        convexHull: y,
        difference: x,
        symmetricDifference: w,
        intersect: A,
        union: E,
        offset: j,
        buffer: v,
        geodesicBuffer: z,
        nearestCoordinate: I,
        nearestVertex: V,
        nearestVertices: D,
        rotate: H,
        flipHorizontal: R,
        flipVertical: b,
        generalize: B,
        densify: L,
        geodesicDensify: S,
        planarArea: _,
        planarLength: q,
        geodesicArea: C,
        geodesicLength: k
      });
      /***/
    },

    /***/
    "lP2y":
    /*!*****************************************************************!*\
      !*** ./node_modules/@arcgis/core/views/2d/engine/BitmapTile.js ***!
      \*****************************************************************/

    /*! exports provided: BitmapTile */

    /***/
    function lP2y(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "BitmapTile", function () {
        return s;
      });
      /* harmony import */


      var _webgl_TiledDisplayObject_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ./webgl/TiledDisplayObject.js */
      "5LEI");
      /* harmony import */


      var _Bitmap_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./Bitmap.js */
      "xzrc");
      /*
      All material copyright ESRI, All Rights Reserved, unless otherwise specified.
      See https://js.arcgis.com/4.18/esri/copyright.txt for details.
      */


      var s = /*#__PURE__*/function (_webgl_TiledDisplayOb) {
        _inherits(s, _webgl_TiledDisplayOb);

        var _super7 = _createSuper(s);

        function s(e, _s3, r) {
          var _this17;

          var i = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : null;

          _classCallCheck(this, s);

          _this17 = _super7.call(this, e, _s3, r, r), _this17.bitmap = new _Bitmap_js__WEBPACK_IMPORTED_MODULE_1__["Bitmap"](i), _this17.bitmap.coordScale = r, _this17.bitmap.once("isReady", function () {
            return _this17.ready();
          });
          return _this17;
        }

        _createClass(s, [{
          key: "destroy",
          value: function destroy() {
            _get(_getPrototypeOf(s.prototype), "destroy", this).call(this), this.bitmap.destroy();
          }
        }, {
          key: "beforeRender",
          value: function beforeRender(e) {
            _get(_getPrototypeOf(s.prototype), "beforeRender", this).call(this, e), this.bitmap.beforeRender(e);
          }
        }, {
          key: "afterRender",
          value: function afterRender(e) {
            _get(_getPrototypeOf(s.prototype), "afterRender", this).call(this, e), this.bitmap.afterRender(e);
          }
        }, {
          key: "stencilRef",
          get: function get() {
            return this.bitmap.stencilRef;
          },
          set: function set(e) {
            this.bitmap.stencilRef = e;
          }
        }, {
          key: "setTransform",
          value: function setTransform(e, t) {
            _get(_getPrototypeOf(s.prototype), "setTransform", this).call(this, e, t), this.bitmap.transforms.dvs = this.transforms.dvs;
          }
        }, {
          key: "onAttach",
          value: function onAttach() {
            this.bitmap.stage = this.stage;
          }
        }, {
          key: "onDetach",
          value: function onDetach() {
            this.bitmap.stage = null;
          }
        }]);

        return s;
      }(_webgl_TiledDisplayObject_js__WEBPACK_IMPORTED_MODULE_0__["TiledDisplayObject"]);
      /***/

    },

    /***/
    "oLSx":
    /*!*********************************************************************!*\
      !*** ./node_modules/@arcgis/core/layers/support/lazyLayerLoader.js ***!
      \*********************************************************************/

    /*! exports provided: layerLookupMap */

    /***/
    function oLSx(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "layerLookupMap", function () {
        return a;
      });
      /*
      All material copyright ESRI, All Rights Reserved, unless otherwise specified.
      See https://js.arcgis.com/4.18/esri/copyright.txt for details.
      */


      var a = {
        BingMapsLayer: function () {
          var _BingMapsLayer = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee13() {
            return regeneratorRuntime.wrap(function _callee13$(_context15) {
              while (1) {
                switch (_context15.prev = _context15.next) {
                  case 0:
                    _context15.next = 2;
                    return Promise.all(
                    /*! import() | BingMapsLayer-js */
                    [__webpack_require__.e("default~BingMapsLayer-js~BuildingSceneLayer-js~CSVLayer-js~ElevationLayer-js~FeatureLayer-js~GeoRSSL~17f7a7e8"), __webpack_require__.e("BingMapsLayer-js")]).then(__webpack_require__.bind(null,
                    /*! ../BingMapsLayer.js */
                    "CR/Q"));

                  case 2:
                    return _context15.abrupt("return", _context15.sent["default"]);

                  case 3:
                  case "end":
                    return _context15.stop();
                }
              }
            }, _callee13);
          }));

          function BingMapsLayer() {
            return _BingMapsLayer.apply(this, arguments);
          }

          return BingMapsLayer;
        }(),
        BuildingSceneLayer: function () {
          var _BuildingSceneLayer = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee14() {
            return regeneratorRuntime.wrap(function _callee14$(_context16) {
              while (1) {
                switch (_context16.prev = _context16.next) {
                  case 0:
                    _context16.next = 2;
                    return Promise.all(
                    /*! import() | BuildingSceneLayer-js */
                    [__webpack_require__.e("default~BingMapsLayer-js~BuildingSceneLayer-js~CSVLayer-js~ElevationLayer-js~FeatureLayer-js~GeoRSSL~17f7a7e8"), __webpack_require__.e("default~BuildingSceneLayer-js~CSVLayer-js~FeatureLayer-js~ImageryLayer-js~ImageryTileLayer-js~KMLLay~c6eed8bf"), __webpack_require__.e("default~BuildingSceneLayer-js~CSVLayer-js~FeatureLayer-js~ImageryLayer-js~ImageryTileLayer-js~KMLLay~166cc929"), __webpack_require__.e("default~BuildingSceneLayer-js~CSVLayer-js~FeatureLayer-js~ImageryLayer-js~ImageryTileLayer-js~KMLLay~253c3a50"), __webpack_require__.e("default~BuildingSceneLayer-js~CSVLayer-js~FeatureLayer-js~KMLLayer-js~MapImageLayer-js~MapNotesLayer~dc20c115"), __webpack_require__.e("default~BuildingSceneLayer-js~CSVLayer-js~FeatureLayer-js~ImageryLayer-js~MapImageLayer-js~MapNotesL~ca7a17ec"), __webpack_require__.e("default~BuildingSceneLayer-js~CSVLayer-js~FeatureLayer-js~MapImageLayer-js~MapNotesLayer-js~RouteLay~17087e09"), __webpack_require__.e("default~BuildingSceneLayer-js~CSVLayer-js~FeatureLayer-js~MapNotesLayer-js~RouteLayer-js~SceneLayer-~7c09c9db"), __webpack_require__.e("default~BuildingSceneLayer-js~IntegratedMeshLayer-js~PointCloudLayer-js~SceneLayer-js"), __webpack_require__.e("default~BuildingSceneLayer-js~SceneLayer-js"), __webpack_require__.e("BuildingSceneLayer-js")]).then(__webpack_require__.bind(null,
                    /*! ../BuildingSceneLayer.js */
                    "TWTt"));

                  case 2:
                    return _context16.abrupt("return", _context16.sent["default"]);

                  case 3:
                  case "end":
                    return _context16.stop();
                }
              }
            }, _callee14);
          }));

          function BuildingSceneLayer() {
            return _BuildingSceneLayer.apply(this, arguments);
          }

          return BuildingSceneLayer;
        }(),
        CSVLayer: function () {
          var _CSVLayer = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee15() {
            return regeneratorRuntime.wrap(function _callee15$(_context17) {
              while (1) {
                switch (_context17.prev = _context17.next) {
                  case 0:
                    _context17.next = 2;
                    return Promise.all(
                    /*! import() | CSVLayer-js */
                    [__webpack_require__.e("default~BingMapsLayer-js~BuildingSceneLayer-js~CSVLayer-js~ElevationLayer-js~FeatureLayer-js~GeoRSSL~17f7a7e8"), __webpack_require__.e("default~BuildingSceneLayer-js~CSVLayer-js~FeatureLayer-js~ImageryLayer-js~ImageryTileLayer-js~KMLLay~c6eed8bf"), __webpack_require__.e("default~BuildingSceneLayer-js~CSVLayer-js~FeatureLayer-js~ImageryLayer-js~ImageryTileLayer-js~KMLLay~166cc929"), __webpack_require__.e("default~BuildingSceneLayer-js~CSVLayer-js~FeatureLayer-js~ImageryLayer-js~ImageryTileLayer-js~KMLLay~253c3a50"), __webpack_require__.e("default~BuildingSceneLayer-js~CSVLayer-js~FeatureLayer-js~KMLLayer-js~MapImageLayer-js~MapNotesLayer~dc20c115"), __webpack_require__.e("default~BuildingSceneLayer-js~CSVLayer-js~FeatureLayer-js~ImageryLayer-js~MapImageLayer-js~MapNotesL~ca7a17ec"), __webpack_require__.e("default~BuildingSceneLayer-js~CSVLayer-js~FeatureLayer-js~MapImageLayer-js~MapNotesLayer-js~RouteLay~17087e09"), __webpack_require__.e("default~BuildingSceneLayer-js~CSVLayer-js~FeatureLayer-js~MapNotesLayer-js~RouteLayer-js~SceneLayer-~7c09c9db"), __webpack_require__.e("CSVLayer-js")]).then(__webpack_require__.bind(null,
                    /*! ../CSVLayer.js */
                    "Kn0e"));

                  case 2:
                    return _context17.abrupt("return", _context17.sent["default"]);

                  case 3:
                  case "end":
                    return _context17.stop();
                }
              }
            }, _callee15);
          }));

          function CSVLayer() {
            return _CSVLayer.apply(this, arguments);
          }

          return CSVLayer;
        }(),
        ElevationLayer: function () {
          var _ElevationLayer = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee16() {
            return regeneratorRuntime.wrap(function _callee16$(_context18) {
              while (1) {
                switch (_context18.prev = _context18.next) {
                  case 0:
                    _context18.next = 2;
                    return Promise.all(
                    /*! import() | ElevationLayer-js */
                    [__webpack_require__.e("default~BingMapsLayer-js~BuildingSceneLayer-js~CSVLayer-js~ElevationLayer-js~FeatureLayer-js~GeoRSSL~17f7a7e8"), __webpack_require__.e("default~ElevationLayer-js~ImageryTileLayer-js~TileLayer-js~VectorTileLayer-js"), __webpack_require__.e("common"), __webpack_require__.e("ElevationLayer-js")]).then(__webpack_require__.bind(null,
                    /*! ../ElevationLayer.js */
                    "8g7C"));

                  case 2:
                    return _context18.abrupt("return", _context18.sent["default"]);

                  case 3:
                  case "end":
                    return _context18.stop();
                }
              }
            }, _callee16);
          }));

          function ElevationLayer() {
            return _ElevationLayer.apply(this, arguments);
          }

          return ElevationLayer;
        }(),
        FeatureLayer: function () {
          var _FeatureLayer = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee17() {
            return regeneratorRuntime.wrap(function _callee17$(_context19) {
              while (1) {
                switch (_context19.prev = _context19.next) {
                  case 0:
                    _context19.next = 2;
                    return Promise.all(
                    /*! import() | FeatureLayer-js */
                    [__webpack_require__.e("default~BingMapsLayer-js~BuildingSceneLayer-js~CSVLayer-js~ElevationLayer-js~FeatureLayer-js~GeoRSSL~17f7a7e8"), __webpack_require__.e("default~BuildingSceneLayer-js~CSVLayer-js~FeatureLayer-js~ImageryLayer-js~ImageryTileLayer-js~KMLLay~c6eed8bf"), __webpack_require__.e("default~BuildingSceneLayer-js~CSVLayer-js~FeatureLayer-js~ImageryLayer-js~ImageryTileLayer-js~KMLLay~166cc929"), __webpack_require__.e("default~BuildingSceneLayer-js~CSVLayer-js~FeatureLayer-js~ImageryLayer-js~ImageryTileLayer-js~KMLLay~253c3a50"), __webpack_require__.e("default~BuildingSceneLayer-js~CSVLayer-js~FeatureLayer-js~KMLLayer-js~MapImageLayer-js~MapNotesLayer~dc20c115"), __webpack_require__.e("default~BuildingSceneLayer-js~CSVLayer-js~FeatureLayer-js~ImageryLayer-js~MapImageLayer-js~MapNotesL~ca7a17ec"), __webpack_require__.e("default~BuildingSceneLayer-js~CSVLayer-js~FeatureLayer-js~MapImageLayer-js~MapNotesLayer-js~RouteLay~17087e09"), __webpack_require__.e("default~BuildingSceneLayer-js~CSVLayer-js~FeatureLayer-js~MapNotesLayer-js~RouteLayer-js~SceneLayer-~7c09c9db"), __webpack_require__.e("FeatureLayer-js")]).then(__webpack_require__.bind(null,
                    /*! ../FeatureLayer.js */
                    "W9Wu"));

                  case 2:
                    return _context19.abrupt("return", _context19.sent["default"]);

                  case 3:
                  case "end":
                    return _context19.stop();
                }
              }
            }, _callee17);
          }));

          function FeatureLayer() {
            return _FeatureLayer.apply(this, arguments);
          }

          return FeatureLayer;
        }(),
        GroupLayer: function () {
          var _GroupLayer = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee18() {
            return regeneratorRuntime.wrap(function _callee18$(_context20) {
              while (1) {
                switch (_context20.prev = _context20.next) {
                  case 0:
                    _context20.next = 2;
                    return Promise.all(
                    /*! import() | GroupLayer-js */
                    [__webpack_require__.e("default~BingMapsLayer-js~BuildingSceneLayer-js~CSVLayer-js~ElevationLayer-js~FeatureLayer-js~GeoRSSL~17f7a7e8"), __webpack_require__.e("GroupLayer-js")]).then(__webpack_require__.bind(null,
                    /*! ../GroupLayer.js */
                    "VPx4"));

                  case 2:
                    return _context20.abrupt("return", _context20.sent["default"]);

                  case 3:
                  case "end":
                    return _context20.stop();
                }
              }
            }, _callee18);
          }));

          function GroupLayer() {
            return _GroupLayer.apply(this, arguments);
          }

          return GroupLayer;
        }(),
        GeoRSSLayer: function () {
          var _GeoRSSLayer = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee19() {
            return regeneratorRuntime.wrap(function _callee19$(_context21) {
              while (1) {
                switch (_context21.prev = _context21.next) {
                  case 0:
                    _context21.next = 2;
                    return Promise.all(
                    /*! import() | GeoRSSLayer-js */
                    [__webpack_require__.e("default~BingMapsLayer-js~BuildingSceneLayer-js~CSVLayer-js~ElevationLayer-js~FeatureLayer-js~GeoRSSL~17f7a7e8"), __webpack_require__.e("GeoRSSLayer-js")]).then(__webpack_require__.bind(null,
                    /*! ../GeoRSSLayer.js */
                    "AP+b"));

                  case 2:
                    return _context21.abrupt("return", _context21.sent["default"]);

                  case 3:
                  case "end":
                    return _context21.stop();
                }
              }
            }, _callee19);
          }));

          function GeoRSSLayer() {
            return _GeoRSSLayer.apply(this, arguments);
          }

          return GeoRSSLayer;
        }(),
        ImageryLayer: function () {
          var _ImageryLayer = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee20() {
            return regeneratorRuntime.wrap(function _callee20$(_context22) {
              while (1) {
                switch (_context22.prev = _context22.next) {
                  case 0:
                    _context22.next = 2;
                    return Promise.all(
                    /*! import() | ImageryLayer-js */
                    [__webpack_require__.e("default~BingMapsLayer-js~BuildingSceneLayer-js~CSVLayer-js~ElevationLayer-js~FeatureLayer-js~GeoRSSL~17f7a7e8"), __webpack_require__.e("default~BuildingSceneLayer-js~CSVLayer-js~FeatureLayer-js~ImageryLayer-js~ImageryTileLayer-js~KMLLay~c6eed8bf"), __webpack_require__.e("default~BuildingSceneLayer-js~CSVLayer-js~FeatureLayer-js~ImageryLayer-js~ImageryTileLayer-js~KMLLay~166cc929"), __webpack_require__.e("default~BuildingSceneLayer-js~CSVLayer-js~FeatureLayer-js~ImageryLayer-js~ImageryTileLayer-js~KMLLay~253c3a50"), __webpack_require__.e("default~BuildingSceneLayer-js~CSVLayer-js~FeatureLayer-js~ImageryLayer-js~MapImageLayer-js~MapNotesL~ca7a17ec"), __webpack_require__.e("default~ImageryLayer-js~ImageryTileLayer-js~layers-ImageryLayerView2D-js~layers-ImageryTileLayerView~fc91ae2a"), __webpack_require__.e("default~ImageryLayer-js~ImageryTileLayer-js~layers-support-RasterWorker-js"), __webpack_require__.e("default~ImageryLayer-js~ImageryTileLayer-js"), __webpack_require__.e("common"), __webpack_require__.e("ImageryLayer-js")]).then(__webpack_require__.bind(null,
                    /*! ../ImageryLayer.js */
                    "/GVf"));

                  case 2:
                    return _context22.abrupt("return", _context22.sent["default"]);

                  case 3:
                  case "end":
                    return _context22.stop();
                }
              }
            }, _callee20);
          }));

          function ImageryLayer() {
            return _ImageryLayer.apply(this, arguments);
          }

          return ImageryLayer;
        }(),
        ImageryTileLayer: function () {
          var _ImageryTileLayer = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee21() {
            return regeneratorRuntime.wrap(function _callee21$(_context23) {
              while (1) {
                switch (_context23.prev = _context23.next) {
                  case 0:
                    _context23.next = 2;
                    return Promise.all(
                    /*! import() | ImageryTileLayer-js */
                    [__webpack_require__.e("default~BingMapsLayer-js~BuildingSceneLayer-js~CSVLayer-js~ElevationLayer-js~FeatureLayer-js~GeoRSSL~17f7a7e8"), __webpack_require__.e("default~BuildingSceneLayer-js~CSVLayer-js~FeatureLayer-js~ImageryLayer-js~ImageryTileLayer-js~KMLLay~c6eed8bf"), __webpack_require__.e("default~BuildingSceneLayer-js~CSVLayer-js~FeatureLayer-js~ImageryLayer-js~ImageryTileLayer-js~KMLLay~166cc929"), __webpack_require__.e("default~BuildingSceneLayer-js~CSVLayer-js~FeatureLayer-js~ImageryLayer-js~ImageryTileLayer-js~KMLLay~253c3a50"), __webpack_require__.e("default~ImageryLayer-js~ImageryTileLayer-js~layers-ImageryLayerView2D-js~layers-ImageryTileLayerView~fc91ae2a"), __webpack_require__.e("default~ElevationLayer-js~ImageryTileLayer-js~TileLayer-js~VectorTileLayer-js"), __webpack_require__.e("default~ImageryLayer-js~ImageryTileLayer-js~layers-support-RasterWorker-js"), __webpack_require__.e("default~ImageryLayer-js~ImageryTileLayer-js"), __webpack_require__.e("default~ImageryTileLayer-js~layers-ImageryTileLayerView2D-js"), __webpack_require__.e("ImageryTileLayer-js")]).then(__webpack_require__.bind(null,
                    /*! ../ImageryTileLayer.js */
                    "mRf7"));

                  case 2:
                    return _context23.abrupt("return", _context23.sent["default"]);

                  case 3:
                  case "end":
                    return _context23.stop();
                }
              }
            }, _callee21);
          }));

          function ImageryTileLayer() {
            return _ImageryTileLayer.apply(this, arguments);
          }

          return ImageryTileLayer;
        }(),
        IntegratedMeshLayer: function () {
          var _IntegratedMeshLayer = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee22() {
            return regeneratorRuntime.wrap(function _callee22$(_context24) {
              while (1) {
                switch (_context24.prev = _context24.next) {
                  case 0:
                    _context24.next = 2;
                    return Promise.all(
                    /*! import() | IntegratedMeshLayer-js */
                    [__webpack_require__.e("default~BingMapsLayer-js~BuildingSceneLayer-js~CSVLayer-js~ElevationLayer-js~FeatureLayer-js~GeoRSSL~17f7a7e8"), __webpack_require__.e("default~BuildingSceneLayer-js~IntegratedMeshLayer-js~PointCloudLayer-js~SceneLayer-js"), __webpack_require__.e("IntegratedMeshLayer-js")]).then(__webpack_require__.bind(null,
                    /*! ../IntegratedMeshLayer.js */
                    "yvy3"));

                  case 2:
                    return _context24.abrupt("return", _context24.sent["default"]);

                  case 3:
                  case "end":
                    return _context24.stop();
                }
              }
            }, _callee22);
          }));

          function IntegratedMeshLayer() {
            return _IntegratedMeshLayer.apply(this, arguments);
          }

          return IntegratedMeshLayer;
        }(),
        KMLLayer: function () {
          var _KMLLayer = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee23() {
            return regeneratorRuntime.wrap(function _callee23$(_context25) {
              while (1) {
                switch (_context25.prev = _context25.next) {
                  case 0:
                    _context25.next = 2;
                    return Promise.all(
                    /*! import() | KMLLayer-js */
                    [__webpack_require__.e("default~BingMapsLayer-js~BuildingSceneLayer-js~CSVLayer-js~ElevationLayer-js~FeatureLayer-js~GeoRSSL~17f7a7e8"), __webpack_require__.e("default~BuildingSceneLayer-js~CSVLayer-js~FeatureLayer-js~ImageryLayer-js~ImageryTileLayer-js~KMLLay~c6eed8bf"), __webpack_require__.e("default~BuildingSceneLayer-js~CSVLayer-js~FeatureLayer-js~ImageryLayer-js~ImageryTileLayer-js~KMLLay~166cc929"), __webpack_require__.e("default~BuildingSceneLayer-js~CSVLayer-js~FeatureLayer-js~ImageryLayer-js~ImageryTileLayer-js~KMLLay~253c3a50"), __webpack_require__.e("default~BuildingSceneLayer-js~CSVLayer-js~FeatureLayer-js~KMLLayer-js~MapImageLayer-js~MapNotesLayer~dc20c115"), __webpack_require__.e("common"), __webpack_require__.e("KMLLayer-js")]).then(__webpack_require__.bind(null,
                    /*! ../KMLLayer.js */
                    "9fxc"));

                  case 2:
                    return _context25.abrupt("return", _context25.sent["default"]);

                  case 3:
                  case "end":
                    return _context25.stop();
                }
              }
            }, _callee23);
          }));

          function KMLLayer() {
            return _KMLLayer.apply(this, arguments);
          }

          return KMLLayer;
        }(),
        MapImageLayer: function () {
          var _MapImageLayer = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee24() {
            return regeneratorRuntime.wrap(function _callee24$(_context26) {
              while (1) {
                switch (_context26.prev = _context26.next) {
                  case 0:
                    _context26.next = 2;
                    return Promise.all(
                    /*! import() | MapImageLayer-js */
                    [__webpack_require__.e("default~BingMapsLayer-js~BuildingSceneLayer-js~CSVLayer-js~ElevationLayer-js~FeatureLayer-js~GeoRSSL~17f7a7e8"), __webpack_require__.e("default~BuildingSceneLayer-js~CSVLayer-js~FeatureLayer-js~ImageryLayer-js~ImageryTileLayer-js~KMLLay~c6eed8bf"), __webpack_require__.e("default~BuildingSceneLayer-js~CSVLayer-js~FeatureLayer-js~ImageryLayer-js~ImageryTileLayer-js~KMLLay~166cc929"), __webpack_require__.e("default~BuildingSceneLayer-js~CSVLayer-js~FeatureLayer-js~ImageryLayer-js~ImageryTileLayer-js~KMLLay~253c3a50"), __webpack_require__.e("default~BuildingSceneLayer-js~CSVLayer-js~FeatureLayer-js~KMLLayer-js~MapImageLayer-js~MapNotesLayer~dc20c115"), __webpack_require__.e("default~BuildingSceneLayer-js~CSVLayer-js~FeatureLayer-js~ImageryLayer-js~MapImageLayer-js~MapNotesL~ca7a17ec"), __webpack_require__.e("default~BuildingSceneLayer-js~CSVLayer-js~FeatureLayer-js~MapImageLayer-js~MapNotesLayer-js~RouteLay~17087e09"), __webpack_require__.e("default~MapImageLayer-js~TileLayer-js~layers-MapImageLayer-js"), __webpack_require__.e("default~MapImageLayer-js~layers-MapImageLayer-js"), __webpack_require__.e("MapImageLayer-js")]).then(__webpack_require__.bind(null,
                    /*! ../MapImageLayer.js */
                    "U/i9"));

                  case 2:
                    return _context26.abrupt("return", _context26.sent["default"]);

                  case 3:
                  case "end":
                    return _context26.stop();
                }
              }
            }, _callee24);
          }));

          function MapImageLayer() {
            return _MapImageLayer.apply(this, arguments);
          }

          return MapImageLayer;
        }(),
        MapNotesLayer: function () {
          var _MapNotesLayer = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee25() {
            return regeneratorRuntime.wrap(function _callee25$(_context27) {
              while (1) {
                switch (_context27.prev = _context27.next) {
                  case 0:
                    _context27.next = 2;
                    return Promise.all(
                    /*! import() | MapNotesLayer-js */
                    [__webpack_require__.e("default~BingMapsLayer-js~BuildingSceneLayer-js~CSVLayer-js~ElevationLayer-js~FeatureLayer-js~GeoRSSL~17f7a7e8"), __webpack_require__.e("default~BuildingSceneLayer-js~CSVLayer-js~FeatureLayer-js~ImageryLayer-js~ImageryTileLayer-js~KMLLay~c6eed8bf"), __webpack_require__.e("default~BuildingSceneLayer-js~CSVLayer-js~FeatureLayer-js~ImageryLayer-js~ImageryTileLayer-js~KMLLay~166cc929"), __webpack_require__.e("default~BuildingSceneLayer-js~CSVLayer-js~FeatureLayer-js~ImageryLayer-js~ImageryTileLayer-js~KMLLay~253c3a50"), __webpack_require__.e("default~BuildingSceneLayer-js~CSVLayer-js~FeatureLayer-js~KMLLayer-js~MapImageLayer-js~MapNotesLayer~dc20c115"), __webpack_require__.e("default~BuildingSceneLayer-js~CSVLayer-js~FeatureLayer-js~ImageryLayer-js~MapImageLayer-js~MapNotesL~ca7a17ec"), __webpack_require__.e("default~BuildingSceneLayer-js~CSVLayer-js~FeatureLayer-js~MapImageLayer-js~MapNotesLayer-js~RouteLay~17087e09"), __webpack_require__.e("default~BuildingSceneLayer-js~CSVLayer-js~FeatureLayer-js~MapNotesLayer-js~RouteLayer-js~SceneLayer-~7c09c9db"), __webpack_require__.e("MapNotesLayer-js")]).then(__webpack_require__.bind(null,
                    /*! ../MapNotesLayer.js */
                    "Wvof"));

                  case 2:
                    return _context27.abrupt("return", _context27.sent["default"]);

                  case 3:
                  case "end":
                    return _context27.stop();
                }
              }
            }, _callee25);
          }));

          function MapNotesLayer() {
            return _MapNotesLayer.apply(this, arguments);
          }

          return MapNotesLayer;
        }(),
        OpenStreetMapLayer: function () {
          var _OpenStreetMapLayer = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee26() {
            return regeneratorRuntime.wrap(function _callee26$(_context28) {
              while (1) {
                switch (_context28.prev = _context28.next) {
                  case 0:
                    _context28.next = 2;
                    return Promise.all(
                    /*! import() | OpenStreetMapLayer-js */
                    [__webpack_require__.e("default~BingMapsLayer-js~BuildingSceneLayer-js~CSVLayer-js~ElevationLayer-js~FeatureLayer-js~GeoRSSL~17f7a7e8"), __webpack_require__.e("default~OpenStreetMapLayer-js~WMTSLayer-js~WebTileLayer-js"), __webpack_require__.e("OpenStreetMapLayer-js")]).then(__webpack_require__.bind(null,
                    /*! ../OpenStreetMapLayer.js */
                    "jFi3"));

                  case 2:
                    return _context28.abrupt("return", _context28.sent["default"]);

                  case 3:
                  case "end":
                    return _context28.stop();
                }
              }
            }, _callee26);
          }));

          function OpenStreetMapLayer() {
            return _OpenStreetMapLayer.apply(this, arguments);
          }

          return OpenStreetMapLayer;
        }(),
        PointCloudLayer: function () {
          var _PointCloudLayer = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee27() {
            return regeneratorRuntime.wrap(function _callee27$(_context29) {
              while (1) {
                switch (_context29.prev = _context29.next) {
                  case 0:
                    _context29.next = 2;
                    return Promise.all(
                    /*! import() | PointCloudLayer-js */
                    [__webpack_require__.e("default~BingMapsLayer-js~BuildingSceneLayer-js~CSVLayer-js~ElevationLayer-js~FeatureLayer-js~GeoRSSL~17f7a7e8"), __webpack_require__.e("default~BuildingSceneLayer-js~IntegratedMeshLayer-js~PointCloudLayer-js~SceneLayer-js"), __webpack_require__.e("default~PointCloudLayer-js~views-3d-layers-PointCloudWorker-js"), __webpack_require__.e("PointCloudLayer-js")]).then(__webpack_require__.bind(null,
                    /*! ../PointCloudLayer.js */
                    "RLtZ"));

                  case 2:
                    return _context29.abrupt("return", _context29.sent["default"]);

                  case 3:
                  case "end":
                    return _context29.stop();
                }
              }
            }, _callee27);
          }));

          function PointCloudLayer() {
            return _PointCloudLayer.apply(this, arguments);
          }

          return PointCloudLayer;
        }(),
        RouteLayer: function () {
          var _RouteLayer = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee28() {
            return regeneratorRuntime.wrap(function _callee28$(_context30) {
              while (1) {
                switch (_context30.prev = _context30.next) {
                  case 0:
                    _context30.next = 2;
                    return Promise.all(
                    /*! import() | RouteLayer-js */
                    [__webpack_require__.e("default~BingMapsLayer-js~BuildingSceneLayer-js~CSVLayer-js~ElevationLayer-js~FeatureLayer-js~GeoRSSL~17f7a7e8"), __webpack_require__.e("default~BuildingSceneLayer-js~CSVLayer-js~FeatureLayer-js~ImageryLayer-js~ImageryTileLayer-js~KMLLay~c6eed8bf"), __webpack_require__.e("default~BuildingSceneLayer-js~CSVLayer-js~FeatureLayer-js~ImageryLayer-js~ImageryTileLayer-js~KMLLay~166cc929"), __webpack_require__.e("default~BuildingSceneLayer-js~CSVLayer-js~FeatureLayer-js~ImageryLayer-js~ImageryTileLayer-js~KMLLay~253c3a50"), __webpack_require__.e("default~BuildingSceneLayer-js~CSVLayer-js~FeatureLayer-js~KMLLayer-js~MapImageLayer-js~MapNotesLayer~dc20c115"), __webpack_require__.e("default~BuildingSceneLayer-js~CSVLayer-js~FeatureLayer-js~ImageryLayer-js~MapImageLayer-js~MapNotesL~ca7a17ec"), __webpack_require__.e("default~BuildingSceneLayer-js~CSVLayer-js~FeatureLayer-js~MapImageLayer-js~MapNotesLayer-js~RouteLay~17087e09"), __webpack_require__.e("default~BuildingSceneLayer-js~CSVLayer-js~FeatureLayer-js~MapNotesLayer-js~RouteLayer-js~SceneLayer-~7c09c9db"), __webpack_require__.e("RouteLayer-js")]).then(__webpack_require__.bind(null,
                    /*! ../RouteLayer.js */
                    "soW6"));

                  case 2:
                    return _context30.abrupt("return", _context30.sent["default"]);

                  case 3:
                  case "end":
                    return _context30.stop();
                }
              }
            }, _callee28);
          }));

          function RouteLayer() {
            return _RouteLayer.apply(this, arguments);
          }

          return RouteLayer;
        }(),
        SceneLayer: function () {
          var _SceneLayer = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee29() {
            return regeneratorRuntime.wrap(function _callee29$(_context31) {
              while (1) {
                switch (_context31.prev = _context31.next) {
                  case 0:
                    _context31.next = 2;
                    return Promise.all(
                    /*! import() | SceneLayer-js */
                    [__webpack_require__.e("default~BingMapsLayer-js~BuildingSceneLayer-js~CSVLayer-js~ElevationLayer-js~FeatureLayer-js~GeoRSSL~17f7a7e8"), __webpack_require__.e("default~BuildingSceneLayer-js~CSVLayer-js~FeatureLayer-js~ImageryLayer-js~ImageryTileLayer-js~KMLLay~c6eed8bf"), __webpack_require__.e("default~BuildingSceneLayer-js~CSVLayer-js~FeatureLayer-js~ImageryLayer-js~ImageryTileLayer-js~KMLLay~166cc929"), __webpack_require__.e("default~BuildingSceneLayer-js~CSVLayer-js~FeatureLayer-js~ImageryLayer-js~ImageryTileLayer-js~KMLLay~253c3a50"), __webpack_require__.e("default~BuildingSceneLayer-js~CSVLayer-js~FeatureLayer-js~KMLLayer-js~MapImageLayer-js~MapNotesLayer~dc20c115"), __webpack_require__.e("default~BuildingSceneLayer-js~CSVLayer-js~FeatureLayer-js~ImageryLayer-js~MapImageLayer-js~MapNotesL~ca7a17ec"), __webpack_require__.e("default~BuildingSceneLayer-js~CSVLayer-js~FeatureLayer-js~MapImageLayer-js~MapNotesLayer-js~RouteLay~17087e09"), __webpack_require__.e("default~BuildingSceneLayer-js~CSVLayer-js~FeatureLayer-js~MapNotesLayer-js~RouteLayer-js~SceneLayer-~7c09c9db"), __webpack_require__.e("default~BuildingSceneLayer-js~IntegratedMeshLayer-js~PointCloudLayer-js~SceneLayer-js"), __webpack_require__.e("default~BuildingSceneLayer-js~SceneLayer-js"), __webpack_require__.e("SceneLayer-js")]).then(__webpack_require__.bind(null,
                    /*! ../SceneLayer.js */
                    "0yFX"));

                  case 2:
                    return _context31.abrupt("return", _context31.sent["default"]);

                  case 3:
                  case "end":
                    return _context31.stop();
                }
              }
            }, _callee29);
          }));

          function SceneLayer() {
            return _SceneLayer.apply(this, arguments);
          }

          return SceneLayer;
        }(),
        StreamLayer: function () {
          var _StreamLayer = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee30() {
            return regeneratorRuntime.wrap(function _callee30$(_context32) {
              while (1) {
                switch (_context32.prev = _context32.next) {
                  case 0:
                    _context32.next = 2;
                    return Promise.all(
                    /*! import() | StreamLayer-js */
                    [__webpack_require__.e("default~BingMapsLayer-js~BuildingSceneLayer-js~CSVLayer-js~ElevationLayer-js~FeatureLayer-js~GeoRSSL~17f7a7e8"), __webpack_require__.e("default~BuildingSceneLayer-js~CSVLayer-js~FeatureLayer-js~ImageryLayer-js~ImageryTileLayer-js~KMLLay~c6eed8bf"), __webpack_require__.e("default~BuildingSceneLayer-js~CSVLayer-js~FeatureLayer-js~ImageryLayer-js~ImageryTileLayer-js~KMLLay~166cc929"), __webpack_require__.e("default~BuildingSceneLayer-js~CSVLayer-js~FeatureLayer-js~ImageryLayer-js~ImageryTileLayer-js~KMLLay~253c3a50"), __webpack_require__.e("default~BuildingSceneLayer-js~CSVLayer-js~FeatureLayer-js~KMLLayer-js~MapImageLayer-js~MapNotesLayer~dc20c115"), __webpack_require__.e("default~BuildingSceneLayer-js~CSVLayer-js~FeatureLayer-js~ImageryLayer-js~MapImageLayer-js~MapNotesL~ca7a17ec"), __webpack_require__.e("default~BuildingSceneLayer-js~CSVLayer-js~FeatureLayer-js~MapImageLayer-js~MapNotesLayer-js~RouteLay~17087e09"), __webpack_require__.e("StreamLayer-js")]).then(__webpack_require__.bind(null,
                    /*! ../StreamLayer.js */
                    "u6iX"));

                  case 2:
                    return _context32.abrupt("return", _context32.sent["default"]);

                  case 3:
                  case "end":
                    return _context32.stop();
                }
              }
            }, _callee30);
          }));

          function StreamLayer() {
            return _StreamLayer.apply(this, arguments);
          }

          return StreamLayer;
        }(),
        TileLayer: function () {
          var _TileLayer = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee31() {
            return regeneratorRuntime.wrap(function _callee31$(_context33) {
              while (1) {
                switch (_context33.prev = _context33.next) {
                  case 0:
                    _context33.next = 2;
                    return Promise.all(
                    /*! import() | TileLayer-js */
                    [__webpack_require__.e("default~BingMapsLayer-js~BuildingSceneLayer-js~CSVLayer-js~ElevationLayer-js~FeatureLayer-js~GeoRSSL~17f7a7e8"), __webpack_require__.e("default~BuildingSceneLayer-js~CSVLayer-js~FeatureLayer-js~ImageryLayer-js~ImageryTileLayer-js~KMLLay~c6eed8bf"), __webpack_require__.e("default~BuildingSceneLayer-js~CSVLayer-js~FeatureLayer-js~ImageryLayer-js~ImageryTileLayer-js~KMLLay~166cc929"), __webpack_require__.e("default~BuildingSceneLayer-js~CSVLayer-js~FeatureLayer-js~ImageryLayer-js~ImageryTileLayer-js~KMLLay~253c3a50"), __webpack_require__.e("default~BuildingSceneLayer-js~CSVLayer-js~FeatureLayer-js~KMLLayer-js~MapImageLayer-js~MapNotesLayer~dc20c115"), __webpack_require__.e("default~BuildingSceneLayer-js~CSVLayer-js~FeatureLayer-js~MapImageLayer-js~MapNotesLayer-js~RouteLay~17087e09"), __webpack_require__.e("default~ElevationLayer-js~ImageryTileLayer-js~TileLayer-js~VectorTileLayer-js"), __webpack_require__.e("default~MapImageLayer-js~TileLayer-js~layers-MapImageLayer-js"), __webpack_require__.e("common"), __webpack_require__.e("TileLayer-js")]).then(__webpack_require__.bind(null,
                    /*! ../TileLayer.js */
                    "JlDE"));

                  case 2:
                    return _context33.abrupt("return", _context33.sent["default"]);

                  case 3:
                  case "end":
                    return _context33.stop();
                }
              }
            }, _callee31);
          }));

          function TileLayer() {
            return _TileLayer.apply(this, arguments);
          }

          return TileLayer;
        }(),
        UnknownLayer: function () {
          var _UnknownLayer = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee32() {
            return regeneratorRuntime.wrap(function _callee32$(_context34) {
              while (1) {
                switch (_context34.prev = _context34.next) {
                  case 0:
                    _context34.next = 2;
                    return __webpack_require__.e(
                    /*! import() | UnknownLayer-js */
                    "UnknownLayer-js").then(__webpack_require__.bind(null,
                    /*! ../UnknownLayer.js */
                    "qcqe"));

                  case 2:
                    return _context34.abrupt("return", _context34.sent["default"]);

                  case 3:
                  case "end":
                    return _context34.stop();
                }
              }
            }, _callee32);
          }));

          function UnknownLayer() {
            return _UnknownLayer.apply(this, arguments);
          }

          return UnknownLayer;
        }(),
        UnsupportedLayer: function () {
          var _UnsupportedLayer = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee33() {
            return regeneratorRuntime.wrap(function _callee33$(_context35) {
              while (1) {
                switch (_context35.prev = _context35.next) {
                  case 0:
                    _context35.next = 2;
                    return __webpack_require__.e(
                    /*! import() | UnsupportedLayer-js */
                    "UnsupportedLayer-js").then(__webpack_require__.bind(null,
                    /*! ../UnsupportedLayer.js */
                    "GN2T"));

                  case 2:
                    return _context35.abrupt("return", _context35.sent["default"]);

                  case 3:
                  case "end":
                    return _context35.stop();
                }
              }
            }, _callee33);
          }));

          function UnsupportedLayer() {
            return _UnsupportedLayer.apply(this, arguments);
          }

          return UnsupportedLayer;
        }(),
        VectorTileLayer: function () {
          var _VectorTileLayer = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee34() {
            return regeneratorRuntime.wrap(function _callee34$(_context36) {
              while (1) {
                switch (_context36.prev = _context36.next) {
                  case 0:
                    _context36.next = 2;
                    return Promise.all(
                    /*! import() | VectorTileLayer-js */
                    [__webpack_require__.e("default~BingMapsLayer-js~BuildingSceneLayer-js~CSVLayer-js~ElevationLayer-js~FeatureLayer-js~GeoRSSL~17f7a7e8"), __webpack_require__.e("default~ElevationLayer-js~ImageryTileLayer-js~TileLayer-js~VectorTileLayer-js"), __webpack_require__.e("default~VectorTileLayer-js~layers-VectorTileLayerView2D-js~views-2d-engine-vectorTiles-WorkerTileHandler-js"), __webpack_require__.e("common"), __webpack_require__.e("VectorTileLayer-js")]).then(__webpack_require__.bind(null,
                    /*! ../VectorTileLayer.js */
                    "FzwJ"));

                  case 2:
                    return _context36.abrupt("return", _context36.sent["default"]);

                  case 3:
                  case "end":
                    return _context36.stop();
                }
              }
            }, _callee34);
          }));

          function VectorTileLayer() {
            return _VectorTileLayer.apply(this, arguments);
          }

          return VectorTileLayer;
        }(),
        WebTileLayer: function () {
          var _WebTileLayer = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee35() {
            return regeneratorRuntime.wrap(function _callee35$(_context37) {
              while (1) {
                switch (_context37.prev = _context37.next) {
                  case 0:
                    _context37.next = 2;
                    return Promise.all(
                    /*! import() | WebTileLayer-js */
                    [__webpack_require__.e("default~BingMapsLayer-js~BuildingSceneLayer-js~CSVLayer-js~ElevationLayer-js~FeatureLayer-js~GeoRSSL~17f7a7e8"), __webpack_require__.e("default~OpenStreetMapLayer-js~WMTSLayer-js~WebTileLayer-js")]).then(__webpack_require__.bind(null,
                    /*! ../WebTileLayer.js */
                    "ncPp"));

                  case 2:
                    return _context37.abrupt("return", _context37.sent["default"]);

                  case 3:
                  case "end":
                    return _context37.stop();
                }
              }
            }, _callee35);
          }));

          function WebTileLayer() {
            return _WebTileLayer.apply(this, arguments);
          }

          return WebTileLayer;
        }(),
        WMSLayer: function () {
          var _WMSLayer = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee36() {
            return regeneratorRuntime.wrap(function _callee36$(_context38) {
              while (1) {
                switch (_context38.prev = _context38.next) {
                  case 0:
                    _context38.next = 2;
                    return Promise.all(
                    /*! import() | WMSLayer-js */
                    [__webpack_require__.e("default~BingMapsLayer-js~BuildingSceneLayer-js~CSVLayer-js~ElevationLayer-js~FeatureLayer-js~GeoRSSL~17f7a7e8"), __webpack_require__.e("default~BuildingSceneLayer-js~CSVLayer-js~FeatureLayer-js~ImageryLayer-js~MapImageLayer-js~MapNotesL~ca7a17ec"), __webpack_require__.e("default~WMSLayer-js~layers-WMSLayerView2D-js"), __webpack_require__.e("WMSLayer-js")]).then(__webpack_require__.bind(null,
                    /*! ../WMSLayer.js */
                    "h2Da"));

                  case 2:
                    return _context38.abrupt("return", _context38.sent["default"]);

                  case 3:
                  case "end":
                    return _context38.stop();
                }
              }
            }, _callee36);
          }));

          function WMSLayer() {
            return _WMSLayer.apply(this, arguments);
          }

          return WMSLayer;
        }(),
        WMTSLayer: function () {
          var _WMTSLayer = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee37() {
            return regeneratorRuntime.wrap(function _callee37$(_context39) {
              while (1) {
                switch (_context39.prev = _context39.next) {
                  case 0:
                    _context39.next = 2;
                    return Promise.all(
                    /*! import() | WMTSLayer-js */
                    [__webpack_require__.e("default~BingMapsLayer-js~BuildingSceneLayer-js~CSVLayer-js~ElevationLayer-js~FeatureLayer-js~GeoRSSL~17f7a7e8"), __webpack_require__.e("default~OpenStreetMapLayer-js~WMTSLayer-js~WebTileLayer-js"), __webpack_require__.e("WMTSLayer-js")]).then(__webpack_require__.bind(null,
                    /*! ../WMTSLayer.js */
                    "sDlQ"));

                  case 2:
                    return _context39.abrupt("return", _context39.sent["default"]);

                  case 3:
                  case "end":
                    return _context39.stop();
                }
              }
            }, _callee37);
          }));

          function WMTSLayer() {
            return _WMTSLayer.apply(this, arguments);
          }

          return WMTSLayer;
        }()
      };
      /***/
    },

    /***/
    "qULd":
    /*!**************************************************************!*\
      !*** ./node_modules/@ionic/core/dist/esm/haptic-27b3f981.js ***!
      \**************************************************************/

    /*! exports provided: a, b, c, d, h */

    /***/
    function qULd(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "a", function () {
        return hapticSelectionStart;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "b", function () {
        return hapticSelectionChanged;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "c", function () {
        return hapticSelection;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "d", function () {
        return hapticImpact;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "h", function () {
        return hapticSelectionEnd;
      });

      var HapticEngine = {
        getEngine: function getEngine() {
          var win = window;
          return win.TapticEngine || win.Capacitor && win.Capacitor.isPluginAvailable('Haptics') && win.Capacitor.Plugins.Haptics;
        },
        available: function available() {
          return !!this.getEngine();
        },
        isCordova: function isCordova() {
          return !!window.TapticEngine;
        },
        isCapacitor: function isCapacitor() {
          var win = window;
          return !!win.Capacitor;
        },
        impact: function impact(options) {
          var engine = this.getEngine();

          if (!engine) {
            return;
          }

          var style = this.isCapacitor() ? options.style.toUpperCase() : options.style;
          engine.impact({
            style: style
          });
        },
        notification: function notification(options) {
          var engine = this.getEngine();

          if (!engine) {
            return;
          }

          var style = this.isCapacitor() ? options.style.toUpperCase() : options.style;
          engine.notification({
            style: style
          });
        },
        selection: function selection() {
          this.impact({
            style: 'light'
          });
        },
        selectionStart: function selectionStart() {
          var engine = this.getEngine();

          if (!engine) {
            return;
          }

          if (this.isCapacitor()) {
            engine.selectionStart();
          } else {
            engine.gestureSelectionStart();
          }
        },
        selectionChanged: function selectionChanged() {
          var engine = this.getEngine();

          if (!engine) {
            return;
          }

          if (this.isCapacitor()) {
            engine.selectionChanged();
          } else {
            engine.gestureSelectionChanged();
          }
        },
        selectionEnd: function selectionEnd() {
          var engine = this.getEngine();

          if (!engine) {
            return;
          }

          if (this.isCapacitor()) {
            engine.selectionEnd();
          } else {
            engine.gestureSelectionEnd();
          }
        }
      };
      /**
       * Trigger a selection changed haptic event. Good for one-time events
       * (not for gestures)
       */

      var hapticSelection = function hapticSelection() {
        HapticEngine.selection();
      };
      /**
       * Tell the haptic engine that a gesture for a selection change is starting.
       */


      var hapticSelectionStart = function hapticSelectionStart() {
        HapticEngine.selectionStart();
      };
      /**
       * Tell the haptic engine that a selection changed during a gesture.
       */


      var hapticSelectionChanged = function hapticSelectionChanged() {
        HapticEngine.selectionChanged();
      };
      /**
       * Tell the haptic engine we are done with a gesture. This needs to be
       * called lest resources are not properly recycled.
       */


      var hapticSelectionEnd = function hapticSelectionEnd() {
        HapticEngine.selectionEnd();
      };
      /**
       * Use this to indicate success/failure/warning to the user.
       * options should be of the type `{ style: 'light' }` (or `medium`/`heavy`)
       */


      var hapticImpact = function hapticImpact(options) {
        HapticEngine.impact(options);
      };
      /***/

    },

    /***/
    "sTkM":
    /*!*****************************************************!*\
      !*** ./node_modules/@arcgis/core/chunks/quatf64.js ***!
      \*****************************************************/

    /*! exports provided: I, a, b, c, f, q */

    /***/
    function sTkM(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "I", function () {
        return a;
      });
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
        return t;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "f", function () {
        return n;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "q", function () {
        return o;
      });
      /*
      All material copyright ESRI, All Rights Reserved, unless otherwise specified.
      See https://js.arcgis.com/4.18/esri/copyright.txt for details.
      */


      function e() {
        return [0, 0, 0, 1];
      }

      function r(e) {
        return [e[0], e[1], e[2], e[3]];
      }

      function n(e, r, n, t) {
        return [e, r, n, t];
      }

      function t(e, r) {
        return new Float64Array(e, r, 4);
      }

      var a = [0, 0, 0, 1];
      var o = Object.freeze({
        __proto__: null,
        create: e,
        clone: r,
        fromValues: n,
        createView: t,
        IDENTITY: a
      });
      /***/
    },

    /***/
    "tIWS":
    /*!************************************************************************!*\
      !*** ./node_modules/@arcgis/core/layers/mixins/ArcGISCachedService.js ***!
      \************************************************************************/

    /*! exports provided: ArcGISCachedService */

    /***/
    function tIWS(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ArcGISCachedService", function () {
        return a;
      });
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


      var _core_accessorSupport_decorators_reader_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ../../core/accessorSupport/decorators/reader.js */
      "r88o");
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


      var _geometry_SpatialReference_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
      /*! ../../geometry/SpatialReference.js */
      "WZb1");
      /* harmony import */


      var _geometry_js__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
      /*! ../../geometry.js */
      "4GrV");
      /* harmony import */


      var _support_serviceTileInfoProperty_js__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
      /*! ../support/serviceTileInfoProperty.js */
      "q2iW");
      /* harmony import */


      var _support_TilemapCache_js__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
      /*! ../support/TilemapCache.js */
      "llFo");
      /*
      All material copyright ESRI, All Rights Reserved, unless otherwise specified.
      See https://js.arcgis.com/4.18/esri/copyright.txt for details.
      */


      var a = function a(_a9) {
        var l = /*#__PURE__*/function (_a8) {
          _inherits(l, _a8);

          var _super8 = _createSuper(l);

          function l() {
            var _this18;

            _classCallCheck(this, l);

            _this18 = _super8.apply(this, arguments), _this18.copyright = null, _this18.minScale = 0, _this18.maxScale = 0, _this18.spatialReference = null, _this18.tileInfo = null, _this18.tilemapCache = null;
            return _this18;
          }

          _createClass(l, [{
            key: "readMinScale",
            value: function readMinScale(e, r) {
              return null != r.minLOD && null != r.maxLOD ? e : 0;
            }
          }, {
            key: "readMaxScale",
            value: function readMaxScale(e, r) {
              return null != r.minLOD && null != r.maxLOD ? e : 0;
            }
          }, {
            key: "supportsBlankTile",
            get: function get() {
              return this.version >= 10.2;
            }
          }, {
            key: "readTilemapCache",
            value: function readTilemapCache(e, r) {
              return r.capabilities && r.capabilities.indexOf("Tilemap") > -1 ? new _support_TilemapCache_js__WEBPACK_IMPORTED_MODULE_13__["TilemapCache"]({
                layer: this
              }) : null;
            }
          }]);

          return l;
        }(_a9);

        return Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_4__["property"])({
          json: {
            read: {
              source: "copyrightText"
            }
          }
        })], l.prototype, "copyright", void 0), Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_4__["property"])()], l.prototype, "minScale", void 0), Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_reader_js__WEBPACK_IMPORTED_MODULE_5__["reader"])("service", "minScale")], l.prototype, "readMinScale", null), Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_4__["property"])()], l.prototype, "maxScale", void 0), Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_reader_js__WEBPACK_IMPORTED_MODULE_5__["reader"])("service", "maxScale")], l.prototype, "readMaxScale", null), Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_4__["property"])({
          type: _geometry_SpatialReference_js__WEBPACK_IMPORTED_MODULE_10__["default"]
        })], l.prototype, "spatialReference", void 0), Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_4__["property"])({
          readOnly: !0,
          dependsOn: ["version"]
        })], l.prototype, "supportsBlankTile", null), Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_4__["property"])(_support_serviceTileInfoProperty_js__WEBPACK_IMPORTED_MODULE_12__["serviceTileInfoProperty"])], l.prototype, "tileInfo", void 0), Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_4__["property"])()], l.prototype, "tilemapCache", void 0), Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_reader_js__WEBPACK_IMPORTED_MODULE_5__["reader"])("service", "tilemapCache", ["capabilities"])], l.prototype, "readTilemapCache", null), Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_4__["property"])()], l.prototype, "version", void 0), l = Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_subclass_js__WEBPACK_IMPORTED_MODULE_6__["subclass"])("esri.layers.mixins.ArcGISCachedService")], l), l;
      };
      /***/

    },

    /***/
    "u3Ia":
    /*!*************************************************!*\
      !*** ./node_modules/@arcgis/core/rest/utils.js ***!
      \*************************************************/

    /*! exports provided: asValidOptions, encode, parseUrl */

    /***/
    function u3Ia(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "asValidOptions", function () {
        return n;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "encode", function () {
        return r;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "parseUrl", function () {
        return e;
      });
      /* harmony import */


      var _core_urlUtils_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ../core/urlUtils.js */
      "4EHJ");
      /*
      All material copyright ESRI, All Rights Reserved, unless otherwise specified.
      See https://js.arcgis.com/4.18/esri/copyright.txt for details.
      */


      function n(t, n) {
        var e = {
          query: t
        };
        return n && (e = _objectSpread(_objectSpread({}, n), e)), e;
      }

      function e(n) {
        return "string" == typeof n ? Object(_core_urlUtils_js__WEBPACK_IMPORTED_MODULE_0__["urlToObject"])(n) : n;
      }

      function r(t, n, e) {
        var o = {};

        for (var i in t) {
          if ("declaredClass" === i) continue;
          var f = t[i];
          if (null != f && "function" != typeof f) if (Array.isArray(f)) {
            o[i] = [];

            for (var _t24 = 0; _t24 < f.length; _t24++) {
              o[i][_t24] = r(f[_t24]);
            }
          } else if ("object" == typeof f) {
            if (f.toJSON) {
              var _t25 = f.toJSON(e && e[i]);

              o[i] = n ? _t25 : JSON.stringify(_t25);
            } else o[i] = n ? f : JSON.stringify(f);
          } else o[i] = f;
        }

        return o;
      }
      /***/

    },

    /***/
    "ukaK":
    /*!****************************************************************************************!*\
      !*** ./node_modules/@arcgis/core/views/2d/layers/features/processors/BaseProcessor.js ***!
      \****************************************************************************************/

    /*! exports provided: default */

    /***/
    function ukaK(module, __webpack_exports__, __webpack_require__) {
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


      var _core_Logger_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ../../../../../core/Logger.js */
      "6S2I");
      /* harmony import */


      var _core_accessorSupport_ensureType_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ../../../../../core/accessorSupport/ensureType.js */
      "zqDF");
      /* harmony import */


      var _core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ../../../../../core/accessorSupport/decorators/property.js */
      "WbKI");
      /* harmony import */


      var _core_accessorSupport_decorators_subclass_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ../../../../../core/accessorSupport/decorators/subclass.js */
      "04ZG");
      /* harmony import */


      var _core_urlUtils_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ../../../../../core/urlUtils.js */
      "4EHJ");
      /* harmony import */


      var _core_uuid_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! ../../../../../core/uuid.js */
      "ju1D");
      /* harmony import */


      var _portal_support_resourceExtension_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! ../../../../../portal/support/resourceExtension.js */
      "9AIY");
      /* harmony import */


      var _core_HandleOwner_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! ../../../../../core/HandleOwner.js */
      "kJYu");
      /*
      All material copyright ESRI, All Rights Reserved, unless otherwise specified.
      See https://js.arcgis.com/4.18/esri/copyright.txt for details.
      */


      var s = /*#__PURE__*/function (_core_HandleOwner_js_2) {
        _inherits(s, _core_HandleOwner_js_2);

        var _super9 = _createSuper(s);

        function s() {
          _classCallCheck(this, s);

          return _super9.apply(this, arguments);
        }

        _createClass(s, [{
          key: "initialize",
          value: function initialize() {}
        }, {
          key: "destroy",
          value: function destroy() {}
        }, {
          key: "supportsTileUpdates",
          get: function get() {
            return !1;
          }
        }, {
          key: "spatialReference",
          get: function get() {
            var e = this.get("tileStore.tileScheme.spatialReference");
            return e && e.toJSON() || null;
          }
        }]);

        return s;
      }(_core_HandleOwner_js__WEBPACK_IMPORTED_MODULE_9__["HandleOwner"]);

      Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_4__["property"])({
        readOnly: !0
      })], s.prototype, "supportsTileUpdates", null), Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_4__["property"])({
        constructOnly: !0
      })], s.prototype, "remoteClient", void 0), Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_4__["property"])({
        constructOnly: !0
      })], s.prototype, "service", void 0), Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_4__["property"])({
        dependsOn: ["tileStore.tileScheme.spatialReference"]
      })], s.prototype, "spatialReference", null), Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_4__["property"])({
        constructOnly: !0
      })], s.prototype, "tileInfo", void 0), Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_4__["property"])({
        constructOnly: !0
      })], s.prototype, "tileStore", void 0), s = Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_subclass_js__WEBPACK_IMPORTED_MODULE_5__["subclass"])("esri.views.2d.layers.features.processors.BaseProcessor")], s);
      var p = s;
      /* harmony default export */

      __webpack_exports__["default"] = p;
      /***/
    },

    /***/
    "vbiG":
    /*!*****************************************************************************!*\
      !*** ./node_modules/@arcgis/core/views/2d/layers/support/ExportStrategy.js ***!
      \*****************************************************************************/

    /*! exports provided: default */

    /***/
    function vbiG(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony import */


      var _chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ../../../../chunks/tslib.es6.js */
      "pO5D");
      /* harmony import */


      var _core_has_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ../../../../core/has.js */
      "wSAH");
      /* harmony import */


      var _core_Logger_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ../../../../core/Logger.js */
      "6S2I");
      /* harmony import */


      var _core_accessorSupport_ensureType_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ../../../../core/accessorSupport/ensureType.js */
      "zqDF");
      /* harmony import */


      var _core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ../../../../core/accessorSupport/decorators/property.js */
      "WbKI");
      /* harmony import */


      var _core_accessorSupport_decorators_subclass_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ../../../../core/accessorSupport/decorators/subclass.js */
      "04ZG");
      /* harmony import */


      var _core_urlUtils_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ../../../../core/urlUtils.js */
      "4EHJ");
      /* harmony import */


      var _core_uuid_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! ../../../../core/uuid.js */
      "ju1D");
      /* harmony import */


      var _portal_support_resourceExtension_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! ../../../../portal/support/resourceExtension.js */
      "9AIY");
      /* harmony import */


      var _core_promiseUtils_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! ../../../../core/promiseUtils.js */
      "9MzC");
      /* harmony import */


      var _core_Accessor_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
      /*! ../../../../core/Accessor.js */
      "/CmD");
      /* harmony import */


      var _geometry_support_spatialReferenceUtils_js__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
      /*! ../../../../geometry/support/spatialReferenceUtils.js */
      "f4Nx");
      /* harmony import */


      var _geometry_Extent_js__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
      /*! ../../../../geometry/Extent.js */
      "OvF4");
      /* harmony import */


      var _geometry_support_aaBoundingRect_js__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
      /*! ../../../../geometry/support/aaBoundingRect.js */
      "kYAx");
      /* harmony import */


      var _layers_support_TileInfo_js__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(
      /*! ../../../../layers/support/TileInfo.js */
      "3/ME");
      /* harmony import */


      var _tiling_TileKey_js__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(
      /*! ../../tiling/TileKey.js */
      "rlSK");
      /* harmony import */


      var _tiling_TileInfoView_js__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(
      /*! ../../tiling/TileInfoView.js */
      "AY31");
      /* harmony import */


      var _viewStateUtils_js__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(
      /*! ../../viewStateUtils.js */
      "A8Zi");
      /* harmony import */


      var _engine_Bitmap_js__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(
      /*! ../../engine/Bitmap.js */
      "xzrc");
      /*
      All material copyright ESRI, All Rights Reserved, unless otherwise specified.
      See https://js.arcgis.com/4.18/esri/copyright.txt for details.
      */


      var f = Object(_geometry_support_aaBoundingRect_js__WEBPACK_IMPORTED_MODULE_13__["create"])(),
          x = [0, 0],
          y = new _tiling_TileKey_js__WEBPACK_IMPORTED_MODULE_15__["default"](0, 0, 0, 0),
          j = 2048,
          v = 2048,
          _ = !1,
          S = !1,
          R = !1;

      var M = /*#__PURE__*/function (_core_Accessor_js__WE) {
        _inherits(M, _core_Accessor_js__WE);

        var _super10 = _createSuper(M);

        function M(t) {
          var _this19;

          _classCallCheck(this, M);

          _this19 = _super10.call(this, t), _this19._imagePromise = null, _this19.hidpi = R, _this19.imageMaxWidth = j, _this19.imageMaxHeight = v, _this19.imageRotationSupported = _, _this19.imageNormalizationSupported = S, _this19.update = Object(_core_promiseUtils_js__WEBPACK_IMPORTED_MODULE_9__["debounce"])( /*#__PURE__*/function () {
            var _ref5 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee39(t, e) {
              var o, i, r, s, a, n, m, l, _t26;

              return regeneratorRuntime.wrap(function _callee39$(_context41) {
                while (1) {
                  switch (_context41.prev = _context41.next) {
                    case 0:
                      o = t.state, i = Object(_geometry_support_spatialReferenceUtils_js__WEBPACK_IMPORTED_MODULE_11__["getInfo"])(o.spatialReference), r = _this19.hidpi ? t.pixelRatio : 1;

                      if (!(!t.stationary || _this19.destroyed)) {
                        _context41.next = 3;
                        break;
                      }

                      return _context41.abrupt("return");

                    case 3:
                      _this19.imageRotationSupported ? (x[0] = o.size[0], x[1] = o.size[1]) : Object(_viewStateUtils_js__WEBPACK_IMPORTED_MODULE_17__["getOuterSize"])(x, o);
                      s = Math.floor(x[0] * r) > _this19.imageMaxWidth || Math.floor(x[1] * r) > _this19.imageMaxHeight, a = i && (o.extent.xmin < i.valid[0] || o.extent.xmax > i.valid[1]), n = !_this19.imageNormalizationSupported && a, m = !s && !n, l = _this19.imageRotationSupported ? o.rotation : 0;
                      if (m) _this19._imagePromise = _this19._singleExport(o, x, l, r, e);else {
                        _t26 = Math.min(_this19.imageMaxWidth, _this19.imageMaxHeight);
                        n && (_t26 = Math.min(o.worldScreenWidth, _t26)), _this19._imagePromise = _this19._tiledExport(o, _t26, l, r, e);
                      }
                      return _context41.abrupt("return", _this19._imagePromise.then( /*#__PURE__*/function () {
                        var _ref6 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee38(t) {
                          var _iterator26, _step26, _loop2;

                          return regeneratorRuntime.wrap(function _callee38$(_context40) {
                            while (1) {
                              switch (_context40.prev = _context40.next) {
                                case 0:
                                  _this19._imagePromise = null;
                                  _context40.next = 3;
                                  return Promise.all(t.map(function (t) {
                                    return _this19.container.addChild(t), t.fadeIn();
                                  }));

                                case 3:
                                  _iterator26 = _createForOfIteratorHelper(_this19.container.children);

                                  try {
                                    _loop2 = function _loop2() {
                                      var e = _step26.value;
                                      t.includes(e) || e.fadeOut().then(function () {
                                        _this19.container.removeChild(e);
                                      });
                                    };

                                    for (_iterator26.s(); !(_step26 = _iterator26.n()).done;) {
                                      _loop2();
                                    }
                                  } catch (err) {
                                    _iterator26.e(err);
                                  } finally {
                                    _iterator26.f();
                                  }

                                case 5:
                                case "end":
                                  return _context40.stop();
                              }
                            }
                          }, _callee38);
                        }));

                        return function (_x23) {
                          return _ref6.apply(this, arguments);
                        };
                      }())["catch"](function (t) {
                        throw _this19._imagePromise = null, t;
                      }));

                    case 7:
                    case "end":
                      return _context41.stop();
                  }
                }
              }, _callee39);
            }));

            return function (_x21, _x22) {
              return _ref5.apply(this, arguments);
            };
          }(), 5e3);
          return _this19;
        }

        _createClass(M, [{
          key: "destroy",
          value: function destroy() {}
        }, {
          key: "updating",
          get: function get() {
            return null !== this._imagePromise;
          }
        }, {
          key: "updateExports",
          value: function updateExports(t) {
            var _iterator27 = _createForOfIteratorHelper(this.container.children),
                _step27;

            try {
              for (_iterator27.s(); !(_step27 = _iterator27.n()).done;) {
                var e = _step27.value;
                if (!e.visible || !e.stage) return;
                t(e) ? console.error("ExportStrategy.updateExports doesn't support promise yet") : (e.invalidateTexture(), e.requestRender());
              }
            } catch (err) {
              _iterator27.e(err);
            } finally {
              _iterator27.f();
            }
          }
        }, {
          key: "_export",
          value: function _export(t, e, o, i, s, a) {
            var _this20 = this;

            return Object(_core_promiseUtils_js__WEBPACK_IMPORTED_MODULE_9__["resolve"])().then(function () {
              return _this20.fetchSource(t, Math.floor(e * s), Math.floor(o * s), {
                rotation: i,
                pixelRatio: s,
                signal: a
              });
            }).then(function (o) {
              var r = new _engine_Bitmap_js__WEBPACK_IMPORTED_MODULE_18__["Bitmap"](o);
              return r.x = t.xmin, r.y = t.ymax, r.resolution = t.width / e, r.rotation = i, r.pixelRatio = s, r;
            });
          }
        }, {
          key: "_singleExport",
          value: function _singleExport(t, e, o, i, r) {
            Object(_viewStateUtils_js__WEBPACK_IMPORTED_MODULE_17__["getBBox"])(f, t.center, t.resolution, e);
            var s = new _geometry_Extent_js__WEBPACK_IMPORTED_MODULE_12__["default"](f[0], f[1], f[2], f[3], t.spatialReference);
            return this._export(s, e[0], e[1], o, i, r).then(function (t) {
              return [t];
            });
          }
        }, {
          key: "_tiledExport",
          value: function _tiledExport(t, e, o, i, r) {
            var _this21 = this;

            var a = _layers_support_TileInfo_js__WEBPACK_IMPORTED_MODULE_14__["default"].create({
              size: e,
              spatialReference: t.spatialReference,
              scales: [t.scale]
            }),
                p = new _tiling_TileInfoView_js__WEBPACK_IMPORTED_MODULE_16__["default"](a),
                m = p.getTileCoverage(t);

            if (!m) return null;
            var h = [];
            return m.forEach(function (s, a, m, l) {
              y.set(s, a, m, l), p.getTileBounds(f, y);
              var c = new _geometry_Extent_js__WEBPACK_IMPORTED_MODULE_12__["default"](f[0], f[1], f[2], f[3], t.spatialReference);
              h.push(_this21._export(c, e, e, o, i, r));
            }), Object(_core_promiseUtils_js__WEBPACK_IMPORTED_MODULE_9__["all"])(h);
          }
        }]);

        return M;
      }(_core_Accessor_js__WEBPACK_IMPORTED_MODULE_10__["default"]);

      Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_4__["property"])()], M.prototype, "_imagePromise", void 0), Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_4__["property"])()], M.prototype, "container", void 0), Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_4__["property"])()], M.prototype, "fetchSource", void 0), Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_4__["property"])()], M.prototype, "hidpi", void 0), Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_4__["property"])()], M.prototype, "imageMaxWidth", void 0), Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_4__["property"])()], M.prototype, "imageMaxHeight", void 0), Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_4__["property"])()], M.prototype, "imageRotationSupported", void 0), Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_4__["property"])()], M.prototype, "imageNormalizationSupported", void 0), Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_4__["property"])()], M.prototype, "requestUpdate", void 0), Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_4__["property"])({
        dependsOn: ["_imagePromise"]
      })], M.prototype, "updating", null), M = Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_subclass_js__WEBPACK_IMPORTED_MODULE_5__["subclass"])("esri.views.2d.layers.support.ExportStrategy")], M);
      var w = M;
      /* harmony default export */

      __webpack_exports__["default"] = w;
      /***/
    },

    /***/
    "xMVW":
    /*!*******************************************************************************!*\
      !*** ./node_modules/@arcgis/core/views/2d/arcade/callExpressionWithCursor.js ***!
      \*******************************************************************************/

    /*! exports provided: default */

    /***/
    function xMVW(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony import */


      var _core_Logger_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ../../../core/Logger.js */
      "6S2I");
      /*
      All material copyright ESRI, All Rights Reserved, unless otherwise specified.
      See https://js.arcgis.com/4.18/esri/copyright.txt for details.
      */


      function r(r, a, t) {
        r.referencesGeometry();
        var n = a.readArcadeFeature();

        try {
          return r.evaluate(_objectSpread(_objectSpread({}, t), {}, {
            $feature: n
          }));
        } catch (r) {
          return _core_Logger_js__WEBPACK_IMPORTED_MODULE_0__["default"].getLogger("esri.views.2d.support.arcadeOnDemand").warn("Feature arcade evaluation failed:", r), null;
        }
      }
      /* harmony default export */


      __webpack_exports__["default"] = r;
      /***/
    },

    /***/
    "xzrc":
    /*!*************************************************************!*\
      !*** ./node_modules/@arcgis/core/views/2d/engine/Bitmap.js ***!
      \*************************************************************/

    /*! exports provided: Bitmap */

    /***/
    function xzrc(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "Bitmap", function () {
        return c;
      });
      /* harmony import */


      var _core_has_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ../../../core/has.js */
      "wSAH");
      /* harmony import */


      var _chunks_mat3_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ../../../chunks/mat3.js */
      "HJJS");
      /* harmony import */


      var _chunks_mat3f32_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ../../../chunks/mat3f32.js */
      "jHF5");
      /* harmony import */


      var _chunks_vec2f32_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ../../../chunks/vec2f32.js */
      "c46T");
      /* harmony import */


      var _chunks_builtins_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ../../../chunks/builtins.js */
      "n4uK");
      /* harmony import */


      var _webgl_Texture_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ../../webgl/Texture.js */
      "of9L");
      /* harmony import */


      var _webgl_FramebufferObject_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ../../webgl/FramebufferObject.js */
      "0meK");
      /* harmony import */


      var _webgl_RenderingContext_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! ../../webgl/RenderingContext.js */
      "bfJE");
      /* harmony import */


      var _DisplayObject_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! ./DisplayObject.js */
      "fEsP");
      /* harmony import */


      var _ImageryBitmapSource_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! ./ImageryBitmapSource.js */
      "iUxC");
      /*
      All material copyright ESRI, All Rights Reserved, unless otherwise specified.
      See https://js.arcgis.com/4.18/esri/copyright.txt for details.
      */


      function d(t, e, i) {
        var s = {
          target: 3553,
          pixelFormat: 6408,
          internalFormat: 6408,
          dataType: 5121,
          wrapMode: 33071
        };
        return e && i && (s.width = e, s.height = i), new _webgl_Texture_js__WEBPACK_IMPORTED_MODULE_5__["default"](t, s);
      }

      var c = /*#__PURE__*/function (_DisplayObject_js__WE) {
        _inherits(c, _DisplayObject_js__WE);

        var _super11 = _createSuper(c);

        function c() {
          var _this22;

          var t = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : null;
          var e = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : !0;

          _classCallCheck(this, c);

          _this22 = _super11.call(this), _this22.requestRenderOnSourceChangedEnabled = e, _this22._textureInvalidated = !0, _this22.stencilRef = 0, _this22.coordScale = [1, 1], _this22._height = void 0, _this22.pixelRatio = 1, _this22.resolution = 0, _this22.rotation = 0, _this22._source = null, _this22._width = void 0, _this22.x = 0, _this22.y = 0, _this22.transforms = {
            dvs: Object(_chunks_mat3f32_js__WEBPACK_IMPORTED_MODULE_2__["c"])()
          }, _this22.source = t, _this22.requestRender = _this22.requestRender.bind(_assertThisInitialized(_this22));
          return _this22;
        }

        _createClass(c, [{
          key: "destroy",
          value: function destroy() {
            this._texture && (this._texture.dispose(), this._texture = null);
          }
        }, {
          key: "isSourceScaled",
          get: function get() {
            return this.width !== this.sourceWidth || this.height !== this.sourceHeight;
          }
        }, {
          key: "height",
          get: function get() {
            return void 0 !== this._height ? this._height : this.sourceHeight;
          },
          set: function set(t) {
            this._height = t;
          }
        }, {
          key: "source",
          get: function get() {
            return this._source;
          },
          set: function set(t) {
            this._source = t, this.invalidateTexture();
          }
        }, {
          key: "sourceHeight",
          get: function get() {
            return this._source instanceof HTMLImageElement ? this._source.naturalHeight : this._source.height;
          }
        }, {
          key: "sourceWidth",
          get: function get() {
            return this._source instanceof HTMLImageElement ? this._source.naturalWidth : this._source.width;
          }
        }, {
          key: "width",
          get: function get() {
            return void 0 !== this._width ? this._width : this.sourceWidth;
          },
          set: function set(t) {
            this._width = t;
          }
        }, {
          key: "beforeRender",
          value: function beforeRender(t) {
            _get(_getPrototypeOf(c.prototype), "beforeRender", this).call(this, t), this.updateTexture(t);
          }
        }, {
          key: "invalidateTexture",
          value: function invalidateTexture() {
            this._textureInvalidated || (this._textureInvalidated = !0, this.requestRenderOnSourceChangedEnabled && this.requestRender());
          }
        }, {
          key: "setTransform",
          value: function setTransform(h) {
            var o = Object(_chunks_mat3_js__WEBPACK_IMPORTED_MODULE_1__["i"])(this.transforms.dvs),
                _h$toScreenNoRotation = h.toScreenNoRotation([0, 0], this.x, this.y),
                _h$toScreenNoRotation2 = _slicedToArray(_h$toScreenNoRotation, 2),
                u = _h$toScreenNoRotation2[0],
                a = _h$toScreenNoRotation2[1],
                d = this.resolution / this.pixelRatio / h.resolution,
                _c4 = d * this.width,
                l = d * this.height,
                x = Math.PI * this.rotation / 180;

            Object(_chunks_mat3_js__WEBPACK_IMPORTED_MODULE_1__["a"])(o, o, Object(_chunks_vec2f32_js__WEBPACK_IMPORTED_MODULE_3__["f"])(u, a)), Object(_chunks_mat3_js__WEBPACK_IMPORTED_MODULE_1__["a"])(o, o, Object(_chunks_vec2f32_js__WEBPACK_IMPORTED_MODULE_3__["f"])(_c4 / 2, l / 2)), Object(_chunks_mat3_js__WEBPACK_IMPORTED_MODULE_1__["r"])(o, o, -x), Object(_chunks_mat3_js__WEBPACK_IMPORTED_MODULE_1__["a"])(o, o, Object(_chunks_vec2f32_js__WEBPACK_IMPORTED_MODULE_3__["f"])(-_c4 / 2, -l / 2)), Object(_chunks_mat3_js__WEBPACK_IMPORTED_MODULE_1__["j"])(o, o, Object(_chunks_vec2f32_js__WEBPACK_IMPORTED_MODULE_3__["f"])(_c4, l)), Object(_chunks_mat3_js__WEBPACK_IMPORTED_MODULE_1__["m"])(this.transforms.dvs, h.displayViewMat3, o);
          }
        }, {
          key: "setSamplingProfile",
          value: function setSamplingProfile(t) {
            this._texture && (t.mips && !this._texture.descriptor.hasMipmap && this._texture.generateMipmap(), this._texture.setSamplingMode(t.samplingMode));
          }
        }, {
          key: "bind",
          value: function bind(_ref7, e) {
            var t = _ref7.context;
            this._texture && t.bindTexture(this._texture, e);
          }
        }, {
          key: "updateTexture",
          value: function updateTexture(_ref8) {
            var t = _ref8.context;
            var e;
            if (!this.stage) return null == (e = this._texture) || e.dispose(), void (this._texture = null);
            if (!this._textureInvalidated) return;
            this._textureInvalidated = !1, this._texture || (this.source ? this._texture = d(t, this.sourceWidth, this.sourceHeight) : this._texture = d(t));
            var i = this.source;

            if (i) {
              if (this._texture.resize(this.sourceWidth, this.sourceHeight), function (t) {
                return t && "render" in t;
              }(i)) {
                if (i instanceof _ImageryBitmapSource_js__WEBPACK_IMPORTED_MODULE_9__["default"]) {
                  var _t27 = i.getRenderedRasterPixels();

                  this._texture.setData(_t27.renderedRasterPixels);
                } else this._texture.setData(function (t) {
                  var e = document.createElement("canvas");
                  return e.width = t.width, e.height = t.height, t.render(e.getContext("2d")), e;
                }(i));
              } else (function (t) {
                return t && !("render" in t);
              })(i) && this._texture.setData(i);
              this.ready();
            } else this._texture.setData(null);
          }
        }, {
          key: "onAttach",
          value: function onAttach() {
            this.invalidateTexture();
          }
        }, {
          key: "onDetach",
          value: function onDetach() {
            this.invalidateTexture();
          }
        }]);

        return c;
      }(_DisplayObject_js__WEBPACK_IMPORTED_MODULE_8__["DisplayObject"]);
      /***/

    }
  }]);
})();
//# sourceMappingURL=common-es5.js.map