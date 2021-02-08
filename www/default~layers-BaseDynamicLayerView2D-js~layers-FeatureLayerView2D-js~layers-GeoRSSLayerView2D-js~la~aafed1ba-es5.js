(function () {
  function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }

  function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

  function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && Symbol.iterator in Object(iter)) return Array.from(iter); }

  function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }

  function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

  function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

  function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

  function _createForOfIteratorHelper(o, allowArrayLike) { var it; if (typeof Symbol === "undefined" || o[Symbol.iterator] == null) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e9) { throw _e9; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = o[Symbol.iterator](); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e10) { didErr = true; err = _e10; }, f: function f() { try { if (!normalCompletion && it["return"] != null) it["return"](); } finally { if (didErr) throw err; } } }; }

  function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

  function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  function _get(target, property, receiver) { if (typeof Reflect !== "undefined" && Reflect.get) { _get = Reflect.get; } else { _get = function _get(target, property, receiver) { var base = _superPropBase(target, property); if (!base) return; var desc = Object.getOwnPropertyDescriptor(base, property); if (desc.get) { return desc.get.call(receiver); } return desc.value; }; } return _get(target, property, receiver || target); }

  function _superPropBase(object, property) { while (!Object.prototype.hasOwnProperty.call(object, property)) { object = _getPrototypeOf(object); if (object === null) break; } return object; }

  function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

  function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

  function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

  function _possibleConstructorReturn(self, call) { if (call && (typeof call === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

  function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

  function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

  function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["default~layers-BaseDynamicLayerView2D-js~layers-FeatureLayerView2D-js~layers-GeoRSSLayerView2D-js~la~aafed1ba"], {
    /***/
    "AMBt":
    /*!****************************************************************!*\
      !*** ./node_modules/@arcgis/core/views/2d/engine/Container.js ***!
      \****************************************************************/

    /*! exports provided: Container */

    /***/
    function AMBt(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "Container", function () {
        return r;
      });
      /* harmony import */


      var _core_has_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ../../../core/has.js */
      "wSAH");
      /* harmony import */


      var _DisplayObject_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./DisplayObject.js */
      "fEsP");
      /* harmony import */


      var _layers_effects_EffectList_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ../../layers/effects/EffectList.js */
      "q0q8");
      /*
      All material copyright ESRI, All Rights Reserved, unless otherwise specified.
      See https://js.arcgis.com/4.18/esri/copyright.txt for details.
      */


      var s = Object(_core_has_js__WEBPACK_IMPORTED_MODULE_0__["default"])("mapview-transitions-duration");

      var r = /*#__PURE__*/function (_DisplayObject_js__WE) {
        _inherits(r, _DisplayObject_js__WE);

        var _super = _createSuper(r);

        function r() {
          var _this;

          _classCallCheck(this, r);

          _this = _super.apply(this, arguments), _this._childrenSet = new Set(), _this.children = [], _this._effectList = null;
          return _this;
        }

        _createClass(r, [{
          key: "blendMode",
          get: function get() {
            return this._blendMode;
          },
          set: function set(e) {
            this._blendMode = e, this.requestRender();
          }
        }, {
          key: "clips",
          get: function get() {
            return this._clips;
          },
          set: function set(e) {
            this._clips = e, this.children.forEach(function (t) {
              return t.clips = e;
            });
          }
        }, {
          key: "computedEffects",
          get: function get() {
            var e, t;
            return null != (e = null == (t = this._effectList) ? void 0 : t.effects) ? e : null;
          }
        }, {
          key: "effect",
          get: function get() {
            var e, t;
            return null != (e = null == (t = this._effectList) ? void 0 : t.effect) ? e : "";
          },
          set: function set(e) {
            (this._effectList || e) && (this._effectList || (this._effectList = new _layers_effects_EffectList_js__WEBPACK_IMPORTED_MODULE_2__["default"](s)), this._effectList.effect = e, this.requestRender());
          }
        }, {
          key: "updateTransitionProperties",
          value: function updateTransitionProperties(e, t) {
            _get(_getPrototypeOf(r.prototype), "updateTransitionProperties", this).call(this, e, t), this._effectList && (this._effectList.transitionStep(e, t), this._effectList.transitioning && this.requestRender());
          }
        }, {
          key: "doRender",
          value: function doRender(e) {
            var t = this.createRenderParams(e);
            this.renderChildren(t);
          }
        }, {
          key: "addChild",
          value: function addChild(e) {
            return this.addChildAt(e, this.children.length);
          }
        }, {
          key: "addChildAt",
          value: function addChildAt(e) {
            var t = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : this.children.length;
            if (!e) return e;
            if (this.contains(e)) return e;
            var i = e.parent;
            return i && i !== this && i.removeChild(e), t >= this.children.length ? this.children.push(e) : this.children.splice(t, 0, e), this._childrenSet.add(e), e.parent = this, e.stage = this.stage, this !== this.stage && (e.clips = this.clips), this.requestRender(), e;
          }
        }, {
          key: "contains",
          value: function contains(e) {
            return this._childrenSet.has(e);
          }
        }, {
          key: "removeAllChildren",
          value: function removeAllChildren() {
            this._childrenSet.clear();

            var _iterator = _createForOfIteratorHelper(this.children),
                _step;

            try {
              for (_iterator.s(); !(_step = _iterator.n()).done;) {
                var e = _step.value;
                this !== this.stage && (e.clips = null), e.stage = null, e.parent = null;
              }
            } catch (err) {
              _iterator.e(err);
            } finally {
              _iterator.f();
            }

            this.children.length = 0;
          }
        }, {
          key: "removeChild",
          value: function removeChild(e) {
            return this.contains(e) ? this.removeChildAt(this.children.indexOf(e)) : e;
          }
        }, {
          key: "removeChildAt",
          value: function removeChildAt(e) {
            var t;
            return e < 0 || e >= this.children.length ? null : (t = this.children.splice(e, 1)[0], this._childrenSet["delete"](t), this !== this.stage && (t.clips = null), t.stage = null, t.parent = null, t);
          }
        }, {
          key: "sortChildren",
          value: function sortChildren(e) {
            return this.children.sort(e);
          }
        }, {
          key: "onAttach",
          value: function onAttach() {
            _get(_getPrototypeOf(r.prototype), "onAttach", this).call(this);

            var e = this.stage;

            var _iterator2 = _createForOfIteratorHelper(this.children),
                _step2;

            try {
              for (_iterator2.s(); !(_step2 = _iterator2.n()).done;) {
                var t = _step2.value;
                t.stage = e;
              }
            } catch (err) {
              _iterator2.e(err);
            } finally {
              _iterator2.f();
            }
          }
        }, {
          key: "onDetach",
          value: function onDetach() {
            _get(_getPrototypeOf(r.prototype), "onDetach", this).call(this);

            var _iterator3 = _createForOfIteratorHelper(this.children),
                _step3;

            try {
              for (_iterator3.s(); !(_step3 = _iterator3.n()).done;) {
                var e = _step3.value;
                e.stage = null;
              }
            } catch (err) {
              _iterator3.e(err);
            } finally {
              _iterator3.f();
            }
          }
        }, {
          key: "renderChildren",
          value: function renderChildren(e) {
            var _iterator4 = _createForOfIteratorHelper(this.children),
                _step4;

            try {
              for (_iterator4.s(); !(_step4 = _iterator4.n()).done;) {
                var t = _step4.value;
                t.beforeRender(e);
              }
            } catch (err) {
              _iterator4.e(err);
            } finally {
              _iterator4.f();
            }

            var _iterator5 = _createForOfIteratorHelper(this.children),
                _step5;

            try {
              for (_iterator5.s(); !(_step5 = _iterator5.n()).done;) {
                var _t2 = _step5.value;

                _t2.processRender(e);
              }
            } catch (err) {
              _iterator5.e(err);
            } finally {
              _iterator5.f();
            }

            var _iterator6 = _createForOfIteratorHelper(this.children),
                _step6;

            try {
              for (_iterator6.s(); !(_step6 = _iterator6.n()).done;) {
                var _t3 = _step6.value;

                _t3.afterRender(e);
              }
            } catch (err) {
              _iterator6.e(err);
            } finally {
              _iterator6.f();
            }
          }
        }, {
          key: "createRenderParams",
          value: function createRenderParams(e) {
            return _objectSpread(_objectSpread({}, e), {}, {
              blendMode: this.blendMode,
              effects: this.computedEffects,
              globalOpacity: e.globalOpacity * this.computedOpacity,
              inFadeTransition: this.inFadeTransition
            });
          }
        }]);

        return r;
      }(_DisplayObject_js__WEBPACK_IMPORTED_MODULE_1__["DisplayObject"]);
      /***/

    },

    /***/
    "BmV5":
    /*!********************************************************************************!*\
      !*** ./node_modules/@arcgis/core/views/layers/effects/colorMatrixFunctions.js ***!
      \********************************************************************************/

    /*! exports provided: brightness, contrast, grayscale, invert, rotateHue, saturate, sepia */

    /***/
    function BmV5(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "brightness", function () {
        return r;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "contrast", function () {
        return s;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "grayscale", function () {
        return o;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "invert", function () {
        return e;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "rotateHue", function () {
        return c;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "saturate", function () {
        return u;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "sepia", function () {
        return a;
      });
      /* harmony import */


      var _chunks_mat4_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ../../../chunks/mat4.js */
      "15Hh");
      /*
      All material copyright ESRI, All Rights Reserved, unless otherwise specified.
      See https://js.arcgis.com/4.18/esri/copyright.txt for details.
      */


      var r = function r(_r, s) {
        var o = Object(_chunks_mat4_js__WEBPACK_IMPORTED_MODULE_0__["d"])(_r, s, 0, 0, 0, 0, s, 0, 0, 0, 0, s, 0, 0, 0, 0, 1);
        return Object(_chunks_mat4_js__WEBPACK_IMPORTED_MODULE_0__["b"])(o, o);
      },
          s = function s(r, _s) {
        var o = Object(_chunks_mat4_js__WEBPACK_IMPORTED_MODULE_0__["d"])(r, _s, 0, 0, .5 - .5 * _s, 0, _s, 0, .5 - .5 * _s, 0, 0, _s, .5 - .5 * _s, 0, 0, 0, 1);
        return Object(_chunks_mat4_js__WEBPACK_IMPORTED_MODULE_0__["b"])(o, o);
      },
          o = function o(r, s) {
        var o = 1 - s,
            c = Object(_chunks_mat4_js__WEBPACK_IMPORTED_MODULE_0__["d"])(r, .2126 + .7874 * o, .7152 - .7152 * o, .0722 - .0722 * o, 0, .2126 - .2126 * o, .7152 + .2848 * o, .0722 - .0722 * o, 0, .2126 - .2126 * o, .7152 - .7152 * o, .0722 + .9278 * o, 0, 0, 0, 0, 1);
        return Object(_chunks_mat4_js__WEBPACK_IMPORTED_MODULE_0__["b"])(c, c);
      },
          c = function c(r, s) {
        var o = Math.sin(s * Math.PI / 180),
            c = Math.cos(s * Math.PI / 180),
            e = Object(_chunks_mat4_js__WEBPACK_IMPORTED_MODULE_0__["d"])(r, .213 + .787 * c - .213 * o, .715 - .715 * c - .715 * o, .072 - .072 * c + .928 * o, 0, .213 - .213 * c + .143 * o, .715 + .285 * c + .14 * o, .072 - .072 * c - .283 * o, 0, .213 - .213 * c - .787 * o, .715 - .715 * c + .715 * o, .072 + .928 * c + .072 * o, 0, 0, 0, 0, 1);
        return Object(_chunks_mat4_js__WEBPACK_IMPORTED_MODULE_0__["b"])(e, e);
      },
          e = function e(r, s) {
        var o = 1 - 2 * s,
            c = Object(_chunks_mat4_js__WEBPACK_IMPORTED_MODULE_0__["d"])(r, o, 0, 0, s, 0, o, 0, s, 0, 0, o, s, 0, 0, 0, 1);
        return Object(_chunks_mat4_js__WEBPACK_IMPORTED_MODULE_0__["b"])(c, c);
      },
          u = function u(r, s) {
        var o = Object(_chunks_mat4_js__WEBPACK_IMPORTED_MODULE_0__["d"])(r, .213 + .787 * s, .715 - .715 * s, .072 - .072 * s, 0, .213 - .213 * s, .715 + .285 * s, .072 - .072 * s, 0, .213 - .213 * s, .715 - .715 * s, .072 + .928 * s, 0, 0, 0, 0, 1);
        return Object(_chunks_mat4_js__WEBPACK_IMPORTED_MODULE_0__["b"])(o, o);
      },
          a = function a(r, s) {
        var o = 1 - s,
            c = Object(_chunks_mat4_js__WEBPACK_IMPORTED_MODULE_0__["d"])(r, .393 + .607 * o, .769 - .769 * o, .189 - .189 * o, 0, .349 - .349 * o, .686 + .314 * o, .168 - .168 * o, 0, .272 - .272 * o, .534 - .534 * o, .131 + .869 * o, 0, 0, 0, 0, 1);
        return Object(_chunks_mat4_js__WEBPACK_IMPORTED_MODULE_0__["b"])(c, c);
      };
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
        return /*#__PURE__*/function (_t4) {
          _inherits(_class, _t4);

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
        return /*#__PURE__*/function (_t5) {
          _inherits(_class2, _t5);

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
        return /*#__PURE__*/function (_t6) {
          _inherits(_class3, _t6);

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
        return /*#__PURE__*/function (_t7) {
          _inherits(_class4, _t7);

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
    "RKAj":
    /*!*******************************************************************!*\
      !*** ./node_modules/@arcgis/core/views/layers/effects/effects.js ***!
      \*******************************************************************/

    /*! exports provided: BloomEffect, BlurEffect, ColorMatrixEffect, DropShadowEffect, HueRotateEffect, OpacityEffect, isColorMatrixEffect */

    /***/
    function RKAj(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "BloomEffect", function () {
        return c;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "BlurEffect", function () {
        return u;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ColorMatrixEffect", function () {
        return l;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "DropShadowEffect", function () {
        return d;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "HueRotateEffect", function () {
        return p;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "OpacityEffect", function () {
        return M;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "isColorMatrixEffect", function () {
        return n;
      });
      /* harmony import */


      var _chunks_mat4f32_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ../../../chunks/mat4f32.js */
      "lwwL");
      /* harmony import */


      var _colorMatrixFunctions_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./colorMatrixFunctions.js */
      "BmV5");
      /*
      All material copyright ESRI, All Rights Reserved, unless otherwise specified.
      See https://js.arcgis.com/4.18/esri/copyright.txt for details.
      */


      function n(t) {
        return "colorMatrix" in t;
      }

      var c = /*#__PURE__*/function () {
        function c(t, s, o) {
          _classCallCheck(this, c);

          this.strength = t, this.radius = s, this.threshold = o, this.type = "bloom";
        }

        _createClass(c, [{
          key: "interpolate",
          value: function interpolate(t, s, o) {
            this.strength = m(t.strength, s.strength, o), this.radius = m(t.radius, s.radius, o), this.threshold = m(t.threshold, s.threshold, o);
          }
        }, {
          key: "clone",
          value: function clone() {
            return new c(this.strength, this.radius, this.threshold);
          }
        }]);

        return c;
      }();

      var u = /*#__PURE__*/function () {
        function u(t) {
          _classCallCheck(this, u);

          this.radius = t, this.type = "blur";
        }

        _createClass(u, [{
          key: "interpolate",
          value: function interpolate(t, s, o) {
            this.radius = Math.round(m(t.radius, s.radius, o));
          }
        }, {
          key: "clone",
          value: function clone() {
            return new u(this.radius);
          }
        }]);

        return u;
      }();

      var l = /*#__PURE__*/function () {
        function l(t, s) {
          _classCallCheck(this, l);

          this.type = t, this.amount = s, "invert" !== this.type && "grayscale" !== this.type && "sepia" !== this.type || (this.amount = Math.min(this.amount, 1));
        }

        _createClass(l, [{
          key: "colorMatrix",
          get: function get() {
            return this._colorMatrix || this._updateMatrix(), this._colorMatrix;
          }
        }, {
          key: "interpolate",
          value: function interpolate(t, s, o) {
            this.amount = m(t.amount, s.amount, o), this._updateMatrix();
          }
        }, {
          key: "clone",
          value: function clone() {
            return new l(this.type, this.amount);
          }
        }, {
          key: "_updateMatrix",
          value: function _updateMatrix() {
            var h = this._colorMatrix || Object(_chunks_mat4f32_js__WEBPACK_IMPORTED_MODULE_0__["c"])();

            switch (this.type) {
              case "brightness":
                this._colorMatrix = Object(_colorMatrixFunctions_js__WEBPACK_IMPORTED_MODULE_1__["brightness"])(h, this.amount);
                break;

              case "contrast":
                this._colorMatrix = Object(_colorMatrixFunctions_js__WEBPACK_IMPORTED_MODULE_1__["contrast"])(h, this.amount);
                break;

              case "grayscale":
                this._colorMatrix = Object(_colorMatrixFunctions_js__WEBPACK_IMPORTED_MODULE_1__["grayscale"])(h, this.amount);
                break;

              case "invert":
                this._colorMatrix = Object(_colorMatrixFunctions_js__WEBPACK_IMPORTED_MODULE_1__["invert"])(h, this.amount);
                break;

              case "saturate":
                this._colorMatrix = Object(_colorMatrixFunctions_js__WEBPACK_IMPORTED_MODULE_1__["saturate"])(h, this.amount);
                break;

              case "sepia":
                this._colorMatrix = Object(_colorMatrixFunctions_js__WEBPACK_IMPORTED_MODULE_1__["sepia"])(h, this.amount);
            }
          }
        }]);

        return l;
      }();

      var d = /*#__PURE__*/function () {
        function d(t, s, o, r) {
          _classCallCheck(this, d);

          this.offsetX = t, this.offsetY = s, this.blurRadius = o, this.color = r, this.type = "drop-shadow";
        }

        _createClass(d, [{
          key: "interpolate",
          value: function interpolate(t, s, o) {
            this.offsetX = m(t.offsetX, s.offsetX, o), this.offsetY = m(t.offsetY, s.offsetY, o), this.blurRadius = m(t.blurRadius, s.blurRadius, o), this.color[0] = Math.round(m(t.color[0], s.color[0], o)), this.color[1] = Math.round(m(t.color[1], s.color[1], o)), this.color[2] = Math.round(m(t.color[2], s.color[2], o)), this.color[3] = m(t.color[3], s.color[3], o);
          }
        }, {
          key: "clone",
          value: function clone() {
            return new d(this.offsetX, this.offsetY, this.blurRadius, _toConsumableArray(this.color));
          }
        }]);

        return d;
      }();

      var p = /*#__PURE__*/function () {
        function p(t) {
          _classCallCheck(this, p);

          this.angle = t, this.type = "hue-rotate";
        }

        _createClass(p, [{
          key: "colorMatrix",
          get: function get() {
            return this._colorMatrix || this._updateMatrix(), this._colorMatrix;
          }
        }, {
          key: "interpolate",
          value: function interpolate(t, s, o) {
            this.angle = m(t.angle, s.angle, o), this._updateMatrix();
          }
        }, {
          key: "clone",
          value: function clone() {
            return new p(this.angle);
          }
        }, {
          key: "_updateMatrix",
          value: function _updateMatrix() {
            var s = this._colorMatrix || Object(_chunks_mat4f32_js__WEBPACK_IMPORTED_MODULE_0__["c"])();
            this._colorMatrix = Object(_colorMatrixFunctions_js__WEBPACK_IMPORTED_MODULE_1__["rotateHue"])(s, this.angle);
          }
        }]);

        return p;
      }();

      var M = /*#__PURE__*/function () {
        function M(t) {
          _classCallCheck(this, M);

          this.amount = t, this.type = "opacity", this.amount = Math.min(this.amount, 1);
        }

        _createClass(M, [{
          key: "interpolate",
          value: function interpolate(t, s, o) {
            this.amount = m(t.amount, s.amount, o);
          }
        }, {
          key: "clone",
          value: function clone() {
            return new M(this.amount);
          }
        }]);

        return M;
      }();

      function m(t, s, o) {
        return t + (s - t) * o;
      }
      /***/

    },

    /***/
    "Za7r":
    /*!******************************************************************!*\
      !*** ./node_modules/@arcgis/core/views/layers/effects/parser.js ***!
      \******************************************************************/

    /*! exports provided: parse */

    /***/
    function Za7r(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "parse", function () {
        return h;
      });
      /* harmony import */


      var _core_Error_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ../../../core/Error.js */
      "zlDU");
      /* harmony import */


      var _colorUtils_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ../../../colorUtils.js */
      "6zdV");
      /* harmony import */


      var _chunks_commonjsHelpers_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ../../../chunks/_commonjsHelpers.js */
      "X2wA");
      /* harmony import */


      var _effects_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./effects.js */
      "RKAj");
      /*
      All material copyright ESRI, All Rights Reserved, unless otherwise specified.
      See https://js.arcgis.com/4.18/esri/copyright.txt for details.
      */


      var p = Object(_chunks_commonjsHelpers_js__WEBPACK_IMPORTED_MODULE_2__["c"])(function (t) {
        t.exports && (t.exports = function () {
          function t(t, e) {
            function r() {
              this.constructor = t;
            }

            r.prototype = e.prototype, t.prototype = new r();
          }

          function e(t, r, n, u) {
            this.message = t, this.expected = r, this.found = n, this.location = u, this.name = "SyntaxError", "function" == typeof Error.captureStackTrace && Error.captureStackTrace(this, e);
          }

          function r(t, r) {
            r = void 0 !== r ? r : {};

            var n,
                u = {},
                a = {
              start: Kt
            },
                c = Kt,
                o = _t("none"),
                i = "none",
                s = Ht("none", !1),
                f = function f() {
              return [];
            },
                l = ")",
                p = Ht(")", !1),
                h = function h(t, e) {
              return {
                type: "function",
                name: t,
                parameters: e || []
              };
            },
                m = ",",
                g = Ht(",", !1),
                v = function v(t, e) {
              return e.length > 0 ? ie(t, e, 3) : [t];
            },
                d = function d(t) {
              return {
                type: "quantity",
                value: t.value,
                unit: t.unit
              };
            },
                A = function A(t) {
              return {
                type: "color",
                colorType: t.type,
                value: t.value
              };
            },
                y = _t("whitespace"),
                w = /^[ \t\n\r]/,
                x = Nt([" ", "\t", "\n", "\r"], !1, !1),
                b = _t("function"),
                F = "(",
                C = Ht("(", !1),
                E = function E(t) {
              return t;
            },
                $ = _t("identifier"),
                j = /^[a-z\-]/,
                k = Nt([["a", "z"], "-"], !1, !1),
                q = function q() {
              return Ut();
            },
                S = _t("percentage"),
                z = "%",
                R = Ht("%", !1),
                T = function T(t) {
              return {
                value: t,
                unit: "%"
              };
            },
                I = _t("length"),
                M = "px",
                O = Ht("px", !1),
                U = function U(t) {
              return {
                value: t,
                unit: "px"
              };
            },
                H = "cm",
                N = Ht("cm", !1),
                P = function P(t) {
              return {
                value: t,
                unit: "cm"
              };
            },
                _ = "mm",
                B = Ht("mm", !1),
                D = function D(t) {
              return {
                value: t,
                unit: "mm"
              };
            },
                G = "in",
                J = Ht("in", !1),
                K = function K(t) {
              return {
                value: t,
                unit: "in"
              };
            },
                L = "pt",
                Q = Ht("pt", !1),
                V = function V(t) {
              return {
                value: t,
                unit: "pt"
              };
            },
                W = "pc",
                X = Ht("pc", !1),
                Y = function Y(t) {
              return {
                value: t,
                unit: "pc"
              };
            },
                Z = _t("angle"),
                tt = "deg",
                et = Ht("deg", !1),
                rt = function rt(t) {
              return {
                value: t,
                unit: "deg"
              };
            },
                nt = "rad",
                ut = Ht("rad", !1),
                at = function at(t) {
              return {
                value: t,
                unit: "rad"
              };
            },
                ct = "grad",
                ot = Ht("grad", !1),
                it = function it(t) {
              return {
                value: t,
                unit: "grad"
              };
            },
                st = "turn",
                ft = Ht("turn", !1),
                lt = function lt(t) {
              return {
                value: t,
                unit: "turn"
              };
            },
                pt = _t("number"),
                ht = function ht(t) {
              return {
                value: t,
                unit: null
              };
            },
                mt = _t("color"),
                gt = "#",
                vt = Ht("#", !1),
                dt = /^[0-9a-fA-F]/,
                At = Nt([["0", "9"], ["a", "f"], ["A", "F"]], !1, !1),
                yt = function yt() {
              return {
                type: "hex",
                value: Ut()
              };
            },
                wt = function wt(t) {
              return {
                type: "function",
                value: t
              };
            },
                xt = function xt() {
              return {
                type: "named",
                value: Ut()
              };
            },
                bt = /^[+\-]/,
                Ft = Nt(["+", "-"], !1, !1),
                Ct = /^[0-9]/,
                Et = Nt([["0", "9"]], !1, !1),
                $t = ".",
                jt = Ht(".", !1),
                kt = "e",
                qt = Ht("e", !1),
                St = function St() {
              return parseFloat(Ut());
            },
                zt = 0,
                Rt = 0,
                Tt = [{
              line: 1,
              column: 1
            }],
                It = 0,
                Mt = [],
                Ot = 0;

            if ("startRule" in r) {
              if (!(r.startRule in a)) throw new Error("Can't start parsing from rule \"" + r.startRule + '".');
              c = a[r.startRule];
            }

            function Ut() {
              return t.substring(Rt, zt);
            }

            function Ht(t, e) {
              return {
                type: "literal",
                text: t,
                ignoreCase: e
              };
            }

            function Nt(t, e, r) {
              return {
                type: "class",
                parts: t,
                inverted: e,
                ignoreCase: r
              };
            }

            function Pt() {
              return {
                type: "end"
              };
            }

            function _t(t) {
              return {
                type: "other",
                description: t
              };
            }

            function Bt(e) {
              var r,
                  n = Tt[e];
              if (n) return n;

              for (r = e - 1; !Tt[r];) {
                r--;
              }

              for (n = {
                line: (n = Tt[r]).line,
                column: n.column
              }; r < e;) {
                10 === t.charCodeAt(r) ? (n.line++, n.column = 1) : n.column++, r++;
              }

              return Tt[e] = n, n;
            }

            function Dt(t, e) {
              var r = Bt(t),
                  n = Bt(e);
              return {
                start: {
                  offset: t,
                  line: r.line,
                  column: r.column
                },
                end: {
                  offset: e,
                  line: n.line,
                  column: n.column
                }
              };
            }

            function Gt(t) {
              zt < It || (zt > It && (It = zt, Mt = []), Mt.push(t));
            }

            function Jt(t, r, n) {
              return new e(e.buildMessage(t, r), t, r, n);
            }

            function Kt() {
              var t;
              return (t = Lt()) === u && (t = Qt()), t;
            }

            function Lt() {
              var e, r;
              return Ot++, e = zt, Yt() !== u ? (t.substr(zt, 4) === i ? (r = i, zt += 4) : (r = u, 0 === Ot && Gt(s)), r !== u && Yt() !== u ? (Rt = e, e = f()) : (zt = e, e = u)) : (zt = e, e = u), Ot--, e === u && 0 === Ot && Gt(o), e;
            }

            function Qt() {
              var t, e;
              if (t = [], (e = Vt()) !== u) for (; e !== u;) {
                t.push(e), e = Vt();
              } else t = u;
              return t;
            }

            function Vt() {
              var e, r, n, a;
              return e = zt, Yt() !== u && (r = Zt()) !== u && Yt() !== u ? ((n = Wt()) === u && (n = null), n !== u && Yt() !== u ? (41 === t.charCodeAt(zt) ? (a = l, zt++) : (a = u, 0 === Ot && Gt(p)), a !== u && Yt() !== u ? (Rt = e, e = h(r, n)) : (zt = e, e = u)) : (zt = e, e = u)) : (zt = e, e = u), e;
            }

            function Wt() {
              var e, r, n, a, c, o, i, s;

              if (e = zt, (r = Xt()) !== u) {
                for (n = [], a = zt, (c = Yt()) !== u ? (44 === t.charCodeAt(zt) ? (o = m, zt++) : (o = u, 0 === Ot && Gt(g)), o === u && (o = null), o !== u && (i = Yt()) !== u && (s = Xt()) !== u ? a = c = [c, o, i, s] : (zt = a, a = u)) : (zt = a, a = u); a !== u;) {
                  n.push(a), a = zt, (c = Yt()) !== u ? (44 === t.charCodeAt(zt) ? (o = m, zt++) : (o = u, 0 === Ot && Gt(g)), o === u && (o = null), o !== u && (i = Yt()) !== u && (s = Xt()) !== u ? a = c = [c, o, i, s] : (zt = a, a = u)) : (zt = a, a = u);
                }

                n !== u ? (Rt = e, e = r = v(r, n)) : (zt = e, e = u);
              } else zt = e, e = u;

              return e;
            }

            function Xt() {
              var t, e;
              return t = zt, (e = ee()) === u && (e = re()) === u && (e = ne()) === u && (e = ue()), e !== u && (Rt = t, e = d(e)), (t = e) === u && (t = zt, (e = ae()) !== u && (Rt = t, e = A(e)), t = e), t;
            }

            function Yt() {
              var e, r;

              for (Ot++, e = [], w.test(t.charAt(zt)) ? (r = t.charAt(zt), zt++) : (r = u, 0 === Ot && Gt(x)); r !== u;) {
                e.push(r), w.test(t.charAt(zt)) ? (r = t.charAt(zt), zt++) : (r = u, 0 === Ot && Gt(x));
              }

              return Ot--, e === u && (r = u, 0 === Ot && Gt(y)), e;
            }

            function Zt() {
              var e, r, n;
              return Ot++, e = zt, (r = te()) !== u ? (40 === t.charCodeAt(zt) ? (n = F, zt++) : (n = u, 0 === Ot && Gt(C)), n !== u ? (Rt = e, e = r = E(r)) : (zt = e, e = u)) : (zt = e, e = u), Ot--, e === u && (r = u, 0 === Ot && Gt(b)), e;
            }

            function te() {
              var e, r, n;
              if (Ot++, e = zt, r = [], j.test(t.charAt(zt)) ? (n = t.charAt(zt), zt++) : (n = u, 0 === Ot && Gt(k)), n !== u) for (; n !== u;) {
                r.push(n), j.test(t.charAt(zt)) ? (n = t.charAt(zt), zt++) : (n = u, 0 === Ot && Gt(k));
              } else r = u;
              return r !== u && (Rt = e, r = q()), Ot--, (e = r) === u && (r = u, 0 === Ot && Gt($)), e;
            }

            function ee() {
              var e, r, n;
              return Ot++, e = zt, Yt() !== u && (r = ce()) !== u ? (37 === t.charCodeAt(zt) ? (n = z, zt++) : (n = u, 0 === Ot && Gt(R)), n !== u ? (Rt = e, e = T(r)) : (zt = e, e = u)) : (zt = e, e = u), Ot--, e === u && 0 === Ot && Gt(S), e;
            }

            function re() {
              var e, r, n;
              return Ot++, e = zt, Yt() !== u && (r = ce()) !== u ? (t.substr(zt, 2) === M ? (n = M, zt += 2) : (n = u, 0 === Ot && Gt(O)), n !== u ? (Rt = e, e = U(r)) : (zt = e, e = u)) : (zt = e, e = u), e === u && (e = zt, Yt() !== u && (r = ce()) !== u ? (t.substr(zt, 2) === H ? (n = H, zt += 2) : (n = u, 0 === Ot && Gt(N)), n !== u ? (Rt = e, e = P(r)) : (zt = e, e = u)) : (zt = e, e = u), e === u && (e = zt, Yt() !== u && (r = ce()) !== u ? (t.substr(zt, 2) === _ ? (n = _, zt += 2) : (n = u, 0 === Ot && Gt(B)), n !== u ? (Rt = e, e = D(r)) : (zt = e, e = u)) : (zt = e, e = u), e === u && (e = zt, Yt() !== u && (r = ce()) !== u ? (t.substr(zt, 2) === G ? (n = G, zt += 2) : (n = u, 0 === Ot && Gt(J)), n !== u ? (Rt = e, e = K(r)) : (zt = e, e = u)) : (zt = e, e = u), e === u && (e = zt, Yt() !== u && (r = ce()) !== u ? (t.substr(zt, 2) === L ? (n = L, zt += 2) : (n = u, 0 === Ot && Gt(Q)), n !== u ? (Rt = e, e = V(r)) : (zt = e, e = u)) : (zt = e, e = u), e === u && (e = zt, Yt() !== u && (r = ce()) !== u ? (t.substr(zt, 2) === W ? (n = W, zt += 2) : (n = u, 0 === Ot && Gt(X)), n !== u ? (Rt = e, e = Y(r)) : (zt = e, e = u)) : (zt = e, e = u)))))), Ot--, e === u && 0 === Ot && Gt(I), e;
            }

            function ne() {
              var e, r, n;
              return Ot++, e = zt, (r = ce()) !== u ? (t.substr(zt, 3) === tt ? (n = tt, zt += 3) : (n = u, 0 === Ot && Gt(et)), n !== u ? (Rt = e, e = r = rt(r)) : (zt = e, e = u)) : (zt = e, e = u), e === u && (e = zt, (r = ce()) !== u ? (t.substr(zt, 3) === nt ? (n = nt, zt += 3) : (n = u, 0 === Ot && Gt(ut)), n !== u ? (Rt = e, e = r = at(r)) : (zt = e, e = u)) : (zt = e, e = u), e === u && (e = zt, (r = ce()) !== u ? (t.substr(zt, 4) === ct ? (n = ct, zt += 4) : (n = u, 0 === Ot && Gt(ot)), n !== u ? (Rt = e, e = r = it(r)) : (zt = e, e = u)) : (zt = e, e = u), e === u && (e = zt, (r = ce()) !== u ? (t.substr(zt, 4) === st ? (n = st, zt += 4) : (n = u, 0 === Ot && Gt(ft)), n !== u ? (Rt = e, e = r = lt(r)) : (zt = e, e = u)) : (zt = e, e = u)))), Ot--, e === u && (r = u, 0 === Ot && Gt(Z)), e;
            }

            function ue() {
              var t, e;
              return Ot++, t = zt, Yt() !== u && (e = ce()) !== u ? (Rt = t, t = ht(e)) : (zt = t, t = u), Ot--, t === u && 0 === Ot && Gt(pt), t;
            }

            function ae() {
              var e, r, n, a;

              if (Ot++, e = zt, 35 === t.charCodeAt(zt) ? (r = gt, zt++) : (r = u, 0 === Ot && Gt(vt)), r !== u) {
                if (n = [], dt.test(t.charAt(zt)) ? (a = t.charAt(zt), zt++) : (a = u, 0 === Ot && Gt(At)), a !== u) for (; a !== u;) {
                  n.push(a), dt.test(t.charAt(zt)) ? (a = t.charAt(zt), zt++) : (a = u, 0 === Ot && Gt(At));
                } else n = u;
                n !== u ? (Rt = e, e = r = yt()) : (zt = e, e = u);
              } else zt = e, e = u;

              return e === u && (e = zt, (r = Vt()) !== u && (Rt = e, r = wt(r)), (e = r) === u && (e = zt, (r = te()) !== u && (Rt = e, r = xt()), e = r)), Ot--, e === u && (r = u, 0 === Ot && Gt(mt)), e;
            }

            function ce() {
              var e, r, n, a, c, o, i, s;

              if (e = zt, bt.test(t.charAt(zt)) ? (r = t.charAt(zt), zt++) : (r = u, 0 === Ot && Gt(Ft)), r === u && (r = null), r !== u) {
                for (n = zt, a = [], Ct.test(t.charAt(zt)) ? (c = t.charAt(zt), zt++) : (c = u, 0 === Ot && Gt(Et)); c !== u;) {
                  a.push(c), Ct.test(t.charAt(zt)) ? (c = t.charAt(zt), zt++) : (c = u, 0 === Ot && Gt(Et));
                }

                if (a !== u) {
                  if (46 === t.charCodeAt(zt) ? (c = $t, zt++) : (c = u, 0 === Ot && Gt(jt)), c !== u) {
                    if (o = [], Ct.test(t.charAt(zt)) ? (i = t.charAt(zt), zt++) : (i = u, 0 === Ot && Gt(Et)), i !== u) for (; i !== u;) {
                      o.push(i), Ct.test(t.charAt(zt)) ? (i = t.charAt(zt), zt++) : (i = u, 0 === Ot && Gt(Et));
                    } else o = u;
                    o !== u ? n = a = [a, c, o] : (zt = n, n = u);
                  } else zt = n, n = u;
                } else zt = n, n = u;
                if (n === u) if (n = [], Ct.test(t.charAt(zt)) ? (a = t.charAt(zt), zt++) : (a = u, 0 === Ot && Gt(Et)), a !== u) for (; a !== u;) {
                  n.push(a), Ct.test(t.charAt(zt)) ? (a = t.charAt(zt), zt++) : (a = u, 0 === Ot && Gt(Et));
                } else n = u;

                if (n !== u) {
                  if (a = zt, 101 === t.charCodeAt(zt) ? (c = kt, zt++) : (c = u, 0 === Ot && Gt(qt)), c !== u) {
                    if (bt.test(t.charAt(zt)) ? (o = t.charAt(zt), zt++) : (o = u, 0 === Ot && Gt(Ft)), o === u && (o = null), o !== u) {
                      if (i = [], Ct.test(t.charAt(zt)) ? (s = t.charAt(zt), zt++) : (s = u, 0 === Ot && Gt(Et)), s !== u) for (; s !== u;) {
                        i.push(s), Ct.test(t.charAt(zt)) ? (s = t.charAt(zt), zt++) : (s = u, 0 === Ot && Gt(Et));
                      } else i = u;
                      i !== u ? a = c = [c, o, i] : (zt = a, a = u);
                    } else zt = a, a = u;
                  } else zt = a, a = u;
                  a === u && (a = null), a !== u ? (Rt = e, e = r = St()) : (zt = e, e = u);
                } else zt = e, e = u;
              } else zt = e, e = u;

              return e;
            }

            function oe(t, e) {
              return t.map(function (t) {
                return t[e];
              });
            }

            function ie(t, e, r) {
              return [t].concat(oe(e, r));
            }

            if ((n = c()) !== u && zt === t.length) return n;
            throw n !== u && zt < t.length && Gt(Pt()), Jt(Mt, It < t.length ? t.charAt(It) : null, It < t.length ? Dt(It, It + 1) : Dt(It, It));
          }

          return t(e, Error), e.buildMessage = function (t, e) {
            var r = {
              literal: function literal(t) {
                return '"' + u(t.text) + '"';
              },
              "class": function _class(t) {
                var e,
                    r = "";

                for (e = 0; e < t.parts.length; e++) {
                  r += t.parts[e] instanceof Array ? a(t.parts[e][0]) + "-" + a(t.parts[e][1]) : a(t.parts[e]);
                }

                return "[" + (t.inverted ? "^" : "") + r + "]";
              },
              any: function any(t) {
                return "any character";
              },
              end: function end(t) {
                return "end of input";
              },
              other: function other(t) {
                return t.description;
              }
            };

            function n(t) {
              return t.charCodeAt(0).toString(16).toUpperCase();
            }

            function u(t) {
              return t.replace(/\\/g, "\\\\").replace(/"/g, '\\"').replace(/\0/g, "\\0").replace(/\t/g, "\\t").replace(/\n/g, "\\n").replace(/\r/g, "\\r").replace(/[\x00-\x0F]/g, function (t) {
                return "\\x0" + n(t);
              }).replace(/[\x10-\x1F\x7F-\x9F]/g, function (t) {
                return "\\x" + n(t);
              });
            }

            function a(t) {
              return t.replace(/\\/g, "\\\\").replace(/\]/g, "\\]").replace(/\^/g, "\\^").replace(/-/g, "\\-").replace(/\0/g, "\\0").replace(/\t/g, "\\t").replace(/\n/g, "\\n").replace(/\r/g, "\\r").replace(/[\x00-\x0F]/g, function (t) {
                return "\\x0" + n(t);
              }).replace(/[\x10-\x1F\x7F-\x9F]/g, function (t) {
                return "\\x" + n(t);
              });
            }

            function c(t) {
              return r[t.type](t);
            }

            function o(t) {
              var e,
                  r,
                  n = new Array(t.length);

              for (e = 0; e < t.length; e++) {
                n[e] = c(t[e]);
              }

              if (n.sort(), n.length > 0) {
                for (e = 1, r = 1; e < n.length; e++) {
                  n[e - 1] !== n[e] && (n[r] = n[e], r++);
                }

                n.length = r;
              }

              switch (n.length) {
                case 1:
                  return n[0];

                case 2:
                  return n[0] + " or " + n[1];

                default:
                  return n.slice(0, -1).join(", ") + ", or " + n[n.length - 1];
              }
            }

            function i(t) {
              return t ? '"' + u(t) + '"' : "end of input";
            }

            return "Expected " + o(t) + " but " + i(e) + " found.";
          }, {
            SyntaxError: e,
            parse: r
          };
        }());
      });

      function h(e) {
        var r;

        try {
          r = e ? p.parse(e) : [];
        } catch (r) {
          return {
            input: e,
            parsedFunctions: [],
            effects: [],
            error: new _core_Error_js__WEBPACK_IMPORTED_MODULE_0__["default"]("effect:invalid-syntax", "Invalid effect syntax", {
              input: e,
              error: r
            })
          };
        }

        var n = {
          input: e,
          parsedFunctions: r,
          effects: [],
          error: null
        };

        try {
          var _iterator7 = _createForOfIteratorHelper(r),
              _step7;

          try {
            for (_iterator7.s(); !(_step7 = _iterator7.n()).done;) {
              var t = _step7.value;
              n.effects.push(m(t));
            }
          } catch (err) {
            _iterator7.e(err);
          } finally {
            _iterator7.f();
          }
        } catch (t) {
          n.effects.length = 0, n.error = t;
        }

        return n;
      }

      function m(e) {
        try {
          switch (e.name) {
            case "grayscale":
            case "sepia":
            case "saturate":
            case "invert":
            case "brightness":
            case "contrast":
              return function (t) {
                var e = 1;
                g(t.parameters, 1), 1 === t.parameters.length && (e = w(t.parameters[0]));
                return new _effects_js__WEBPACK_IMPORTED_MODULE_3__["ColorMatrixEffect"](t.name, e);
              }(e);

            case "opacity":
              return function (t) {
                var e = 1;
                g(t.parameters, 1), 1 === t.parameters.length && (e = w(t.parameters[0]));
                return new _effects_js__WEBPACK_IMPORTED_MODULE_3__["OpacityEffect"](e);
              }(e);

            case "hue-rotate":
              return function (e) {
                var r = 0;
                g(e.parameters, 1), 1 === e.parameters.length && (function (e) {
                  if ("quantity" !== e.type || (0 !== e.value || null !== e.unit) && null == A[e.unit]) throw new _core_Error_js__WEBPACK_IMPORTED_MODULE_0__["default"]("effect:type-error", "Expected <angle>, Actual: ".concat(v(e)), {
                    term: e
                  });
                }(n = e.parameters[0]), r = n.value * A[n.unit] || 0);
                var n;
                return new _effects_js__WEBPACK_IMPORTED_MODULE_3__["HueRotateEffect"](r);
              }(e);

            case "blur":
              return function (t) {
                var e = 0;
                g(t.parameters, 1), 1 === t.parameters.length && (e = b(t.parameters[0]), d(e, t.parameters[0]));
                return new _effects_js__WEBPACK_IMPORTED_MODULE_3__["BlurEffect"](e);
              }(e);

            case "drop-shadow":
              return function (e) {
                var r = [];
                var n;

                var _iterator8 = _createForOfIteratorHelper(e.parameters),
                    _step8;

                try {
                  for (_iterator8.s(); !(_step8 = _iterator8.n()).done;) {
                    var u = _step8.value;

                    if ("color" === u.type) {
                      if (r.length && Object.freeze(r), n) throw new _core_Error_js__WEBPACK_IMPORTED_MODULE_0__["default"]("effect:type-error", "Accepts only one color", {});
                      n = F(u);
                    } else {
                      var _e = b(u);

                      if (Object.isFrozen(r)) throw new _core_Error_js__WEBPACK_IMPORTED_MODULE_0__["default"]("effect:type-error", "<length> parameters not consecutive", {
                        lengths: r
                      });
                      r.push(_e), 3 === r.length && d(_e, u);
                    }
                  }
                } catch (err) {
                  _iterator8.e(err);
                } finally {
                  _iterator8.f();
                }

                if (r.length < 2 || r.length > 3) throw new _core_Error_js__WEBPACK_IMPORTED_MODULE_0__["default"]("effect:type-error", "Expected <length>{2,3}, Actual: <length>{".concat(r.length, "}"), {
                  lengths: r
                });
                return new _effects_js__WEBPACK_IMPORTED_MODULE_3__["DropShadowEffect"](r[0], r[1], r[2] || 0, n || C("black"));
              }(e);

            case "bloom":
              return function (t) {
                var e = 1,
                    r = 0,
                    n = 0;
                g(t.parameters, 3), t.parameters[0] && (e = w(t.parameters[0]));
                t.parameters[1] && (r = b(t.parameters[1]), d(r, t.parameters[1]));
                t.parameters[2] && (n = w(t.parameters[2]));
                return new _effects_js__WEBPACK_IMPORTED_MODULE_3__["BloomEffect"](e, r, n);
              }(e);
          }
        } catch (t) {
          throw t.details.filter = e, t;
        }

        throw new _core_Error_js__WEBPACK_IMPORTED_MODULE_0__["default"]("effect:unknown-effect", "Effect '".concat(e.name, "' is not supported"), {
          effect: e
        });
      }

      function g(e, r) {
        if (e.length > r) throw new _core_Error_js__WEBPACK_IMPORTED_MODULE_0__["default"]("effect:type-error", "Function supports up to ".concat(r, " parameters, Actual: ").concat(e.length), {
          parameters: e
        });
      }

      function v(t) {
        return "color" === t.type ? "<color>" : y[t.unit] ? "<length>" : A[t.unit] ? "<angle>" : "%" === t.unit ? "<percentage>" : "<double>";
      }

      function d(e, r) {
        if (e < 0) throw new _core_Error_js__WEBPACK_IMPORTED_MODULE_0__["default"]("effect:type-error", "Negative values are not allowed, Actual: ".concat(e), {
          term: r
        });
      }

      var A = {
        deg: 1,
        grad: .9,
        rad: 180 / Math.PI,
        turn: 360
      };
      var y = {
        px: 1,
        cm: 96 / 2.54,
        mm: 96 / 2.54 / 10,
        "in": 96,
        pc: 16,
        pt: 96 / 73
      };

      function w(e) {
        !function (e) {
          if ("quantity" !== e.type || null !== e.unit && "%" !== e.unit) throw new _core_Error_js__WEBPACK_IMPORTED_MODULE_0__["default"]("effect:type-error", "Expected <double> or <percentage>, Actual: ".concat(v(e)), {
            term: e
          });
        }(e);
        var r = e.value;
        return d(r, e), "%" === e.unit ? .01 * r : r;
      }

      function x(e) {
        return function (e) {
          if ("quantity" !== e.type || null !== e.unit) throw new _core_Error_js__WEBPACK_IMPORTED_MODULE_0__["default"]("effect:type-error", "Expected <double>, Actual: ".concat(v(e)), {
            term: e
          });
        }(e), d(e.value, e), e.value;
      }

      function b(e) {
        return function (e) {
          if ("quantity" !== e.type || (0 !== e.value || null !== e.unit) && null == y[e.unit]) throw new _core_Error_js__WEBPACK_IMPORTED_MODULE_0__["default"]("effect:type-error", "Expected <length>, Actual: ".concat(v(e)), {
            term: e
          });
        }(e), e.value * y[e.unit] || 0;
      }

      function F(r) {
        switch (r.colorType) {
          case "hex":
            return Object(_colorUtils_js__WEBPACK_IMPORTED_MODULE_1__["hex2rgba"])(r.value);

          case "named":
            return C(r.value);

          case "function":
            return function (e) {
              if (g(e.parameters, 4), E.test(e.name)) return [w(e.parameters[0]), w(e.parameters[1]), w(e.parameters[2]), e.parameters[3] ? w(e.parameters[3]) : 1];
              if ($.test(e.name)) return Object(_colorUtils_js__WEBPACK_IMPORTED_MODULE_1__["hsla2rgba"])(x(e.parameters[0]), w(e.parameters[1]), w(e.parameters[2]), e.parameters[3] ? w(e.parameters[3]) : 1);
              throw new _core_Error_js__WEBPACK_IMPORTED_MODULE_0__["default"]("effect:syntax-error", "Invalid color function '".concat(e.name, "'"), {
                colorFunction: e
              });
            }(r.value);
        }
      }

      function C(e) {
        var n = Object(_colorUtils_js__WEBPACK_IMPORTED_MODULE_1__["getNamedColorCopy"])(e);
        if (!n) throw new _core_Error_js__WEBPACK_IMPORTED_MODULE_0__["default"]("effect:unknown-color", "color '".concat(e, "' isn't valid"), {
          namedColor: e
        });
        return n;
      }

      var E = /^rgba?/i,
          $ = /^hsla?/i;
      /***/
    },

    /***/
    "fEsP":
    /*!********************************************************************!*\
      !*** ./node_modules/@arcgis/core/views/2d/engine/DisplayObject.js ***!
      \********************************************************************/

    /*! exports provided: DisplayObject */

    /***/
    function fEsP(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "DisplayObject", function () {
        return a;
      });
      /* harmony import */


      var _core_has_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ../../../core/has.js */
      "wSAH");
      /* harmony import */


      var _core_promiseUtils_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ../../../core/promiseUtils.js */
      "9MzC");
      /* harmony import */


      var _core_Evented_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ../../../core/Evented.js */
      "zm0L");
      /*
      All material copyright ESRI, All Rights Reserved, unless otherwise specified.
      See https://js.arcgis.com/4.18/esri/copyright.txt for details.
      */


      var i = 1 / Object(_core_has_js__WEBPACK_IMPORTED_MODULE_0__["default"])("mapview-transitions-duration");

      var a = /*#__PURE__*/function (_core_Evented_js__WEB) {
        _inherits(a, _core_Evented_js__WEB);

        var _super11 = _createSuper(a);

        function a() {
          var _this2;

          _classCallCheck(this, a);

          _this2 = _super11.apply(this, arguments), _this2._fadeOutResolver = null, _this2._fadeInResolver = null, _this2._clips = null, _this2.computedVisible = !0, _this2.computedOpacity = 1, _this2.fadeTransitionEnabled = !1, _this2.inFadeTransition = !1, _this2._isReady = !1, _this2._opacity = 1, _this2._stage = null, _this2._visible = !0;
          return _this2;
        }

        _createClass(a, [{
          key: "clips",
          get: function get() {
            return this._clips;
          },
          set: function set(e) {
            this._clips = e, this.requestRender();
          }
        }, {
          key: "isReady",
          get: function get() {
            return this._isReady;
          }
        }, {
          key: "opacity",
          get: function get() {
            return this._opacity;
          },
          set: function set(e) {
            this._opacity !== e && (this._opacity = Math.min(1, Math.max(e, 0)), this.requestRender());
          }
        }, {
          key: "stage",
          get: function get() {
            return this._stage;
          },
          set: function set(e) {
            if (this._stage === e) return;
            var t = this._stage;
            this._stage = e, e ? this._stage.untrashDisplayObject(this) || (this.onAttach(), this.emit("attach")) : t.trashDisplayObject(this);
          }
        }, {
          key: "visible",
          get: function get() {
            return this._visible;
          },
          set: function set(e) {
            this._visible !== e && (this._visible = e, this.requestRender());
          }
        }, {
          key: "fadeIn",
          value: function fadeIn() {
            return this._fadeInResolver || (this._fadeOutResolver && (this._fadeOutResolver(), this._fadeOutResolver = null), this.computedOpacity = 0, this.fadeTransitionEnabled = !0, this._fadeInResolver = Object(_core_promiseUtils_js__WEBPACK_IMPORTED_MODULE_1__["createResolver"])(), this.requestRender()), this._fadeInResolver.promise;
          }
        }, {
          key: "fadeOut",
          value: function fadeOut() {
            return this._fadeOutResolver || (this._fadeInResolver && (this._fadeInResolver(), this._fadeInResolver = null), this.fadeTransitionEnabled = !0, this._fadeOutResolver = Object(_core_promiseUtils_js__WEBPACK_IMPORTED_MODULE_1__["createResolver"])(), this.requestRender()), this._fadeOutResolver.promise;
          }
        }, {
          key: "beforeRender",
          value: function beforeRender(e) {
            this.updateTransitionProperties(e.deltaTime, e.state.scale);
          }
        }, {
          key: "afterRender",
          value: function afterRender(e) {
            this._fadeInResolver && this.computedOpacity === this.opacity ? (this._fadeInResolver(), this._fadeInResolver = null) : this._fadeOutResolver && 0 === this.computedOpacity && (this._fadeOutResolver(), this._fadeOutResolver = null);
          }
        }, {
          key: "setTransform",
          value: function setTransform(e) {}
        }, {
          key: "processRender",
          value: function processRender(e) {
            this.stage && this.computedVisible && this.doRender(e);
          }
        }, {
          key: "requestRender",
          value: function requestRender() {
            this.stage && this.stage.requestRender();
          }
        }, {
          key: "processDetach",
          value: function processDetach() {
            this.onDetach(), this.emit("detach");
          }
        }, {
          key: "updateTransitionProperties",
          value: function updateTransitionProperties(e, t) {
            if (this.fadeTransitionEnabled) {
              var _t8 = this._fadeOutResolver || !this.visible ? 0 : this.opacity,
                  s = this.computedOpacity;

              if (s === _t8) this.computedVisible = this.visible;else {
                var _a2 = e * i;

                this.computedOpacity = s > _t8 ? Math.max(_t8, s - _a2) : Math.min(_t8, s + _a2), this.computedVisible = this.computedOpacity > 0;
                var h = _t8 === this.computedOpacity;
                this.inFadeTransition = !h, h || this.requestRender();
              }
            } else this.computedOpacity = this.opacity, this.computedVisible = this.visible;
          }
        }, {
          key: "onAttach",
          value: function onAttach() {}
        }, {
          key: "onDetach",
          value: function onDetach() {}
        }, {
          key: "doRender",
          value: function doRender(e) {}
        }, {
          key: "ready",
          value: function ready() {
            this._isReady || (this._isReady = !0, this.emit("isReady"), this.requestRender());
          }
        }]);

        return a;
      }(_core_Evented_js__WEBPACK_IMPORTED_MODULE_2__["default"]);
      /***/

    },

    /***/
    "lwwL":
    /*!*****************************************************!*\
      !*** ./node_modules/@arcgis/core/chunks/mat4f32.js ***!
      \*****************************************************/

    /*! exports provided: I, a, b, c, f, m */

    /***/
    function lwwL(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "I", function () {
        return a;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "a", function () {
        return n;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "b", function () {
        return e;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "c", function () {
        return r;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "f", function () {
        return t;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "m", function () {
        return o;
      });
      /*
      All material copyright ESRI, All Rights Reserved, unless otherwise specified.
      See https://js.arcgis.com/4.18/esri/copyright.txt for details.
      */


      function r() {
        var r = new Float32Array(16);
        return r[0] = 1, r[5] = 1, r[10] = 1, r[15] = 1, r;
      }

      function n(r) {
        var n = new Float32Array(16);
        return n[0] = r[0], n[1] = r[1], n[2] = r[2], n[3] = r[3], n[4] = r[4], n[5] = r[5], n[6] = r[6], n[7] = r[7], n[8] = r[8], n[9] = r[9], n[10] = r[10], n[11] = r[11], n[12] = r[12], n[13] = r[13], n[14] = r[14], n[15] = r[15], n;
      }

      function t(r, n, t, e, a, o, c, s, u, l, f, i, w, y, A, F) {
        var _ = new Float32Array(16);

        return _[0] = r, _[1] = n, _[2] = t, _[3] = e, _[4] = a, _[5] = o, _[6] = c, _[7] = s, _[8] = u, _[9] = l, _[10] = f, _[11] = i, _[12] = w, _[13] = y, _[14] = A, _[15] = F, _;
      }

      function e(r, n) {
        return new Float32Array(r, n, 16);
      }

      var a = r();
      var o = Object.freeze({
        __proto__: null,
        create: r,
        clone: n,
        fromValues: t,
        createView: e,
        IDENTITY: a
      });
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
    "q0q8":
    /*!**********************************************************************!*\
      !*** ./node_modules/@arcgis/core/views/layers/effects/EffectList.js ***!
      \**********************************************************************/

    /*! exports provided: default, canInterpolateEffectStops, canInterpolateEffects, convertEffectToStops, normalizeEffectStops, normalizeEffects */

    /***/
    function q0q8(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "canInterpolateEffectStops", function () {
        return p;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "canInterpolateEffects", function () {
        return _;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "convertEffectToStops", function () {
        return h;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "normalizeEffectStops", function () {
        return m;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "normalizeEffects", function () {
        return g;
      });
      /* harmony import */


      var _core_lang_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ../../../core/lang.js */
      "f/qv");
      /* harmony import */


      var _core_Logger_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ../../../core/Logger.js */
      "6S2I");
      /* harmony import */


      var _core_Error_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ../../../core/Error.js */
      "zlDU");
      /* harmony import */


      var _colorUtils_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ../../../colorUtils.js */
      "6zdV");
      /* harmony import */


      var _effects_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ./effects.js */
      "RKAj");
      /* harmony import */


      var _parser_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ./parser.js */
      "Za7r");
      /*
      All material copyright ESRI, All Rights Reserved, unless otherwise specified.
      See https://js.arcgis.com/4.18/esri/copyright.txt for details.
      */


      function h(e) {
        if (!e) return [];

        if ("string" == typeof e) {
          var _t9 = Object(_parser_js__WEBPACK_IMPORTED_MODULE_5__["parse"])(e);

          return _t9.error ? _t9.error : [{
            scale: -1,
            effects: _t9.effects
          }];
        }

        var t = [];

        var _iterator9 = _createForOfIteratorHelper(e),
            _step9;

        try {
          for (_iterator9.s(); !(_step9 = _iterator9.n()).done;) {
            var r = _step9.value;
            if (!isFinite(r.scale) || r.scale <= 0) return new _core_Error_js__WEBPACK_IMPORTED_MODULE_2__["default"]("effect:invalid-scale", "scale must be finite and greater than 0", {
              stop: r
            });

            var _e3 = Object(_parser_js__WEBPACK_IMPORTED_MODULE_5__["parse"])(r.value);

            if (_e3.error) return _e3.error;
            t.push({
              scale: r.scale,
              effects: _e3.effects
            });
          }
        } catch (err) {
          _iterator9.e(err);
        } finally {
          _iterator9.f();
        }

        t.sort(function (e, t) {
          return t.effects.length - e.effects.length;
        });

        for (var _e2 = 0; _e2 < t.length - 1; _e2++) {
          if (!_(t[_e2].effects, t[_e2 + 1].effects)) return new _core_Error_js__WEBPACK_IMPORTED_MODULE_2__["default"]("effect:interpolation-impossible", "Cannot interpolate by scale between 2 lists of mixed effects", {
            a: t[_e2].effects,
            b: t[_e2 + 1].effects
          });
          g(t[_e2].effects, t[_e2 + 1].effects);
        }

        return t.sort(function (e, t) {
          return t.scale - e.scale;
        }), t;
      }

      function u(e) {
        switch (e.type) {
          case "grayscale":
          case "sepia":
          case "invert":
            return new _effects_js__WEBPACK_IMPORTED_MODULE_4__["ColorMatrixEffect"](e.type, 0);

          case "saturate":
          case "brightness":
          case "contrast":
            return new _effects_js__WEBPACK_IMPORTED_MODULE_4__["ColorMatrixEffect"](e.type, 1);

          case "opacity":
            return new _effects_js__WEBPACK_IMPORTED_MODULE_4__["OpacityEffect"](1);

          case "hue-rotate":
            return new _effects_js__WEBPACK_IMPORTED_MODULE_4__["HueRotateEffect"](0);

          case "blur":
            return new _effects_js__WEBPACK_IMPORTED_MODULE_4__["BlurEffect"](0);

          case "drop-shadow":
            return new _effects_js__WEBPACK_IMPORTED_MODULE_4__["DropShadowEffect"](0, 0, 0, _toConsumableArray(Object(_colorUtils_js__WEBPACK_IMPORTED_MODULE_3__["getNamedColor"])("transparent")));

          case "bloom":
            return new _effects_js__WEBPACK_IMPORTED_MODULE_4__["BloomEffect"](0, 0, 0);
        }
      }

      function _(e, t) {
        var s = e.length > t.length ? e : t;
        return (e.length > t.length ? t : e).every(function (e, t) {
          return e.type === s[t].type;
        });
      }

      function g(e, t) {
        var s = e.length > t.length ? e : t,
            r = e.length > t.length ? t : e;

        for (var _e4 = r.length; _e4 < s.length; _e4++) {
          r.push(u(s[_e4]));
        }
      }

      function p(e, t, s) {
        var r, n, f, i;
        if (null == (r = e[0]) || !r.effects || null == (n = t[0]) || !n.effects) return !0;
        return !((-1 === (null == (f = e[0]) ? void 0 : f.scale) || -1 === (null == (i = t[0]) ? void 0 : i.scale)) && (e.length > 1 || t.length > 1) && s <= 0) && _(e[0].effects, t[0].effects);
      }

      function m(e, t, s) {
        var r, n;
        var f = e.length > t.length ? e : t,
            i = e.length > t.length ? t : e,
            c = i[i.length - 1],
            l = null != (r = null == c ? void 0 : c.scale) ? r : s,
            o = null != (n = null == c ? void 0 : c.effects) ? n : [];

        for (var _e5 = i.length; _e5 < f.length; _e5++) {
          i.push({
            scale: l,
            effects: _toConsumableArray(o)
          });
        }

        for (var _e6 = 0; _e6 < f.length; _e6++) {
          i[_e6].scale = -1 === i[_e6].scale ? s : i[_e6].scale, f[_e6].scale = -1 === f[_e6].scale ? s : f[_e6].scale, g(i[_e6].effects, f[_e6].effects);
        }
      }

      function d(e, t, s) {
        return e + (t - e) * s;
      }
      /* harmony default export */


      __webpack_exports__["default"] = /*#__PURE__*/function () {
        function _class5() {
          var e = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 200;

          _classCallCheck(this, _class5);

          this.duration = e, this._from = null, this._to = null, this._final = null, this._current = [], this._time = 0, this._effect = "", this._effects = [], this._scale = 0;
        }

        _createClass(_class5, [{
          key: "effect",
          get: function get() {
            return this._effect;
          },
          set: function set(e) {
            if (e = e || "", this._effect === e) return;
            this._effect = e;
            var s = h(e);
            Array.isArray(s) ? this._transitionTo(s) : (this._transitionTo([]), _core_Logger_js__WEBPACK_IMPORTED_MODULE_1__["default"].getLogger("esri.views.layers.effects.EffectList").warn("Invalid Effect", {
              effect: e,
              error: s
            }));
          }
        }, {
          key: "hasEffects",
          get: function get() {
            return this.transitioning || !!this._effects.length;
          }
        }, {
          key: "effects",
          get: function get() {
            return this._effects;
          }
        }, {
          key: "scale",
          get: function get() {
            return this._scale;
          }
        }, {
          key: "transitioning",
          get: function get() {
            return null !== this._to;
          }
        }, {
          key: "transitionStep",
          value: function transitionStep(e, t) {
            this._applyTimeTransition(e), this._updateForScale(t);
          }
        }, {
          key: "_transitionTo",
          value: function _transitionTo(t) {
            this.scale > 0 && p(this._current, t, this.scale) ? (this._final = t, this._to = Object(_core_lang_js__WEBPACK_IMPORTED_MODULE_0__["clone"])(t), m(this._current, this._to, this.scale), this._from = Object(_core_lang_js__WEBPACK_IMPORTED_MODULE_0__["clone"])(this._current), this._time = 0) : (this._from = this._to = this._final = null, this._current = t), this._effects = this._current[0] ? Object(_core_lang_js__WEBPACK_IMPORTED_MODULE_0__["clone"])(this._current[0].effects) : [];
          }
        }, {
          key: "_applyTimeTransition",
          value: function _applyTimeTransition(t) {
            if (!this._to) return;
            this._time += t;
            var s = Math.min(1, this._time / this.duration);

            for (var e = 0; e < this._current.length; e++) {
              var _t10 = this._current[e],
                  r = this._from[e],
                  n = this._to[e];
              _t10.scale = d(r.scale, n.scale, s);

              for (var _e7 = 0; _e7 < _t10.effects.length; _e7++) {
                var f = _t10.effects[_e7],
                    i = r.effects[_e7],
                    c = n.effects[_e7];
                f.interpolate(i, c, s);
              }
            }

            1 === s && (this._current = this._final, this._effects = this._current[0] ? Object(_core_lang_js__WEBPACK_IMPORTED_MODULE_0__["clone"])(this._current[0].effects) : [], this._from = this._to = this._final = null);
          }
        }, {
          key: "_updateForScale",
          value: function _updateForScale(e) {
            if (0 === this._current.length) return;
            this._scale = e;
            var t = this._current,
                s = this._current.length - 1;
            var r,
                n,
                f = 1;
            if (1 === t.length || e >= t[0].scale) n = r = t[0].effects;else if (e <= t[s].scale) n = r = t[s].effects;else for (var i = 0; i < s; i++) {
              var _s2 = t[i],
                  c = t[i + 1];

              if (_s2.scale >= e && c.scale <= e) {
                f = (e - _s2.scale) / (c.scale - _s2.scale), r = _s2.effects, n = c.effects;
                break;
              }
            }

            for (var _e8 = 0; _e8 < this._effects.length; _e8++) {
              this._effects[_e8].interpolate(r[_e8], n[_e8], f);
            }
          }
        }]);

        return _class5;
      }();
      /***/

    }
  }]);
})();
//# sourceMappingURL=default~layers-BaseDynamicLayerView2D-js~layers-FeatureLayerView2D-js~layers-GeoRSSLayerView2D-js~la~aafed1ba-es5.js.map