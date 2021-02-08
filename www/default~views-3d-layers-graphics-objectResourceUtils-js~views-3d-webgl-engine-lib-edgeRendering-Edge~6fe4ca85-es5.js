(function () {
  function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

  function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

  function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

  function _possibleConstructorReturn(self, call) { if (call && (typeof call === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

  function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

  function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

  function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

  function _createForOfIteratorHelper(o, allowArrayLike) { var it; if (typeof Symbol === "undefined" || o[Symbol.iterator] == null) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e22) { throw _e22; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = o[Symbol.iterator](); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e23) { didErr = true; err = _e23; }, f: function f() { try { if (!normalCompletion && it["return"] != null) it["return"](); } finally { if (didErr) throw err; } } }; }

  function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

  function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["default~views-3d-layers-graphics-objectResourceUtils-js~views-3d-webgl-engine-lib-edgeRendering-Edge~6fe4ca85"], {
    /***/
    "/ADo":
    /*!********************************************************************************!*\
      !*** ./node_modules/@arcgis/core/views/3d/support/buffer/InterleavedLayout.js ***!
      \********************************************************************************/

    /*! exports provided: InterleavedBuffer, InterleavedLayout, newLayout */

    /***/
    function ADo(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "InterleavedBuffer", function () {
        return N;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "InterleavedLayout", function () {
        return T;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "newLayout", function () {
        return A;
      });
      /* harmony import */


      var _BufferView_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ./BufferView.js */
      "VeZB");
      /* harmony import */


      var _types_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./types.js */
      "grla");
      /*
      All material copyright ESRI, All Rights Reserved, unless otherwise specified.
      See https://js.arcgis.com/4.18/esri/copyright.txt for details.
      */


      var N = /*#__PURE__*/function () {
        function N(e, t) {
          _classCallCheck(this, N);

          this.layout = e, this.buffer = "number" == typeof t ? new ArrayBuffer(t * e.stride) : t;

          var _iterator = _createForOfIteratorHelper(e.fieldNames),
              _step;

          try {
            for (_iterator.s(); !(_step = _iterator.n()).done;) {
              var _t = _step.value;
              var i = e.fields.get(_t);
              this[_t] = new i.constructor(this.buffer, i.offset, this.stride);
            }
          } catch (err) {
            _iterator.e(err);
          } finally {
            _iterator.f();
          }
        }

        _createClass(N, [{
          key: "stride",
          get: function get() {
            return this.layout.stride;
          }
        }, {
          key: "count",
          get: function get() {
            return this.buffer.byteLength / this.stride;
          }
        }, {
          key: "byteLength",
          get: function get() {
            return this.buffer.byteLength;
          }
        }, {
          key: "getField",
          value: function getField(e, t) {
            var i = this[e];
            return i && i.elementCount === t.ElementCount && i.elementType === t.ElementType ? i : null;
          }
        }, {
          key: "slice",
          value: function slice(e, t) {
            return new N(this.layout, this.buffer.slice(e * this.stride, t * this.stride));
          }
        }, {
          key: "copyFrom",
          value: function copyFrom(e, t, i, s) {
            var r = this.stride;

            if (r % 4 == 0) {
              var n = new Uint32Array(e.buffer, t * r, s * r / 4);
              new Uint32Array(this.buffer, i * r, s * r / 4).set(n);
            } else {
              var _n = new Uint8Array(e.buffer, t * r, s * r);

              new Uint8Array(this.buffer, i * r, s * r).set(_n);
            }
          }
        }]);

        return N;
      }();

      var T = /*#__PURE__*/function () {
        function T() {
          _classCallCheck(this, T);

          this.stride = 0, this.fields = new Map(), this.fieldNames = [];
        }

        _createClass(T, [{
          key: "vec2f",
          value: function vec2f(t, i) {
            return this.appendField(t, _BufferView_js__WEBPACK_IMPORTED_MODULE_0__["BufferViewVec2f"], i), this;
          }
        }, {
          key: "vec2f64",
          value: function vec2f64(e, i) {
            return this.appendField(e, _BufferView_js__WEBPACK_IMPORTED_MODULE_0__["BufferViewVec2f64"], i), this;
          }
        }, {
          key: "vec3f",
          value: function vec3f(e, t) {
            return this.appendField(e, _BufferView_js__WEBPACK_IMPORTED_MODULE_0__["BufferViewVec3f"], t), this;
          }
        }, {
          key: "vec3f64",
          value: function vec3f64(e, t) {
            return this.appendField(e, _BufferView_js__WEBPACK_IMPORTED_MODULE_0__["BufferViewVec3f64"], t), this;
          }
        }, {
          key: "vec4f",
          value: function vec4f(e, t) {
            return this.appendField(e, _BufferView_js__WEBPACK_IMPORTED_MODULE_0__["BufferViewVec4f"], t), this;
          }
        }, {
          key: "vec4f64",
          value: function vec4f64(e, t) {
            return this.appendField(e, _BufferView_js__WEBPACK_IMPORTED_MODULE_0__["BufferViewVec4f64"], t), this;
          }
        }, {
          key: "mat3f",
          value: function mat3f(e, t) {
            return this.appendField(e, _BufferView_js__WEBPACK_IMPORTED_MODULE_0__["BufferViewMat3f"], t), this;
          }
        }, {
          key: "mat3f64",
          value: function mat3f64(e, t) {
            return this.appendField(e, _BufferView_js__WEBPACK_IMPORTED_MODULE_0__["BufferViewMat3f64"], t), this;
          }
        }, {
          key: "mat4f",
          value: function mat4f(e, t) {
            return this.appendField(e, _BufferView_js__WEBPACK_IMPORTED_MODULE_0__["BufferViewMat4f"], t), this;
          }
        }, {
          key: "mat4f64",
          value: function mat4f64(e, t) {
            return this.appendField(e, _BufferView_js__WEBPACK_IMPORTED_MODULE_0__["BufferViewMat4f64"], t), this;
          }
        }, {
          key: "vec4u8",
          value: function vec4u8(e, t) {
            return this.appendField(e, _BufferView_js__WEBPACK_IMPORTED_MODULE_0__["BufferViewVec4u8"], t), this;
          }
        }, {
          key: "f32",
          value: function f32(e, t) {
            return this.appendField(e, _BufferView_js__WEBPACK_IMPORTED_MODULE_0__["BufferViewFloat"], t), this;
          }
        }, {
          key: "f64",
          value: function f64(e, t) {
            return this.appendField(e, _BufferView_js__WEBPACK_IMPORTED_MODULE_0__["BufferViewFloat64"], t), this;
          }
        }, {
          key: "u8",
          value: function u8(e, t) {
            return this.appendField(e, _BufferView_js__WEBPACK_IMPORTED_MODULE_0__["BufferViewUint8"], t), this;
          }
        }, {
          key: "u16",
          value: function u16(e, t) {
            return this.appendField(e, _BufferView_js__WEBPACK_IMPORTED_MODULE_0__["BufferViewUint16"], t), this;
          }
        }, {
          key: "i8",
          value: function i8(e, t) {
            return this.appendField(e, _BufferView_js__WEBPACK_IMPORTED_MODULE_0__["BufferViewInt8"], t), this;
          }
        }, {
          key: "vec2i8",
          value: function vec2i8(e, t) {
            return this.appendField(e, _BufferView_js__WEBPACK_IMPORTED_MODULE_0__["BufferViewVec2i8"], t), this;
          }
        }, {
          key: "vec2i16",
          value: function vec2i16(e, t) {
            return this.appendField(e, _BufferView_js__WEBPACK_IMPORTED_MODULE_0__["BufferViewVec2i16"], t), this;
          }
        }, {
          key: "vec2u8",
          value: function vec2u8(e, t) {
            return this.appendField(e, _BufferView_js__WEBPACK_IMPORTED_MODULE_0__["BufferViewVec2u8"], t), this;
          }
        }, {
          key: "vec4u16",
          value: function vec4u16(e, t) {
            return this.appendField(e, _BufferView_js__WEBPACK_IMPORTED_MODULE_0__["BufferViewVec4u16"], t), this;
          }
        }, {
          key: "u32",
          value: function u32(e, t) {
            return this.appendField(e, _BufferView_js__WEBPACK_IMPORTED_MODULE_0__["BufferViewUint32"], t), this;
          }
        }, {
          key: "appendField",
          value: function appendField(e, t, i) {
            var s = t.ElementCount * Object(_types_js__WEBPACK_IMPORTED_MODULE_1__["elementTypeSize"])(t.ElementType),
                r = this.stride;
            this.fields.set(e, {
              size: s,
              constructor: t,
              offset: r,
              optional: i
            }), this.stride += s, this.fieldNames.push(e);
          }
        }, {
          key: "alignTo",
          value: function alignTo(e) {
            return this.stride = Math.floor((this.stride + e - 1) / e) * e, this;
          }
        }, {
          key: "hasField",
          value: function hasField(e) {
            return this.fieldNames.indexOf(e) >= 0;
          }
        }, {
          key: "createBuffer",
          value: function createBuffer(e) {
            return new N(this, e);
          }
        }, {
          key: "createView",
          value: function createView(e) {
            return new N(this, e);
          }
        }, {
          key: "clone",
          value: function clone() {
            var e = new T();
            return e.stride = this.stride, e.fields = new Map(), this.fields.forEach(function (t, i) {
              return e.fields.set(i, t);
            }), e.fieldNames = this.fieldNames.slice(), e.BufferType = this.BufferType, e;
          }
        }]);

        return T;
      }();

      function A() {
        return new T();
      }
      /***/

    },

    /***/
    "DZZ3":
    /*!*****************************************************************************!*\
      !*** ./node_modules/@arcgis/core/views/3d/support/buffer/internals/Vec4.js ***!
      \*****************************************************************************/

    /*! exports provided: BufferViewVec4Impl */

    /***/
    function DZZ3(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "BufferViewVec4Impl", function () {
        return e;
      });
      /* harmony import */


      var _chunks_vec4_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ../../../../../chunks/vec4.js */
      "dXfX");
      /*
      All material copyright ESRI, All Rights Reserved, unless otherwise specified.
      See https://js.arcgis.com/4.18/esri/copyright.txt for details.
      */


      var e = /*#__PURE__*/function () {
        function e(t, _e) {
          var r = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 0;
          var f = arguments.length > 3 ? arguments[3] : undefined;
          var i = arguments.length > 4 ? arguments[4] : undefined;

          _classCallCheck(this, e);

          this.TypedArrayConstructor = t, this.elementCount = 4;
          var d = this.TypedArrayConstructor;
          void 0 === f && (f = 4 * d.BYTES_PER_ELEMENT);
          var s = 0 === _e.byteLength ? 0 : r;
          this.typedBuffer = null == i ? new d(_e, s) : new d(_e, s, (i - r) / d.BYTES_PER_ELEMENT), this.typedBufferStride = f / d.BYTES_PER_ELEMENT, this.count = Math.ceil(this.typedBuffer.length / this.typedBufferStride), this.stride = this.typedBufferStride * this.TypedArrayConstructor.BYTES_PER_ELEMENT;
        }

        _createClass(e, [{
          key: "getVec",
          value: function getVec(_e2, r) {
            return Object(_chunks_vec4_js__WEBPACK_IMPORTED_MODULE_0__["s"])(r, this.typedBuffer[_e2 * this.typedBufferStride], this.typedBuffer[_e2 * this.typedBufferStride + 1], this.typedBuffer[_e2 * this.typedBufferStride + 2], this.typedBuffer[_e2 * this.typedBufferStride + 3]);
          }
        }, {
          key: "setVec",
          value: function setVec(t, _e3) {
            this.typedBuffer[t * this.typedBufferStride] = _e3[0], this.typedBuffer[t * this.typedBufferStride + 1] = _e3[1], this.typedBuffer[t * this.typedBufferStride + 2] = _e3[2], this.typedBuffer[t * this.typedBufferStride + 3] = _e3[3];
          }
        }, {
          key: "get",
          value: function get(t, _e4) {
            return this.typedBuffer[t * this.typedBufferStride + _e4];
          }
        }, {
          key: "set",
          value: function set(t, _e5, r) {
            this.typedBuffer[t * this.typedBufferStride + _e5] = r;
          }
        }, {
          key: "setValues",
          value: function setValues(t, _e6, r, f, i) {
            this.typedBuffer[t * this.typedBufferStride] = _e6, this.typedBuffer[t * this.typedBufferStride + 1] = r, this.typedBuffer[t * this.typedBufferStride + 2] = f, this.typedBuffer[t * this.typedBufferStride + 3] = i;
          }
        }, {
          key: "copyFrom",
          value: function copyFrom(t, _e7, r) {
            var f = this.typedBuffer,
                i = _e7.typedBuffer,
                d = t * this.typedBufferStride,
                s = r * _e7.typedBufferStride;
            f[d] = i[s], f[d + 1] = i[s + 1], f[d + 2] = i[s + 2], f[d + 3] = i[s + 3];
          }
        }, {
          key: "buffer",
          get: function get() {
            return this.typedBuffer.buffer;
          }
        }]);

        return e;
      }();

      e.ElementCount = 4;
      /***/
    },

    /***/
    "EY25":
    /*!*****************************************************************************!*\
      !*** ./node_modules/@arcgis/core/views/3d/support/buffer/internals/Vec3.js ***!
      \*****************************************************************************/

    /*! exports provided: BufferViewVec3Impl */

    /***/
    function EY25(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "BufferViewVec3Impl", function () {
        return e;
      });
      /* harmony import */


      var _chunks_vec3_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ../../../../../chunks/vec3.js */
      "5DEt");
      /*
      All material copyright ESRI, All Rights Reserved, unless otherwise specified.
      See https://js.arcgis.com/4.18/esri/copyright.txt for details.
      */


      var e = /*#__PURE__*/function () {
        function e(t, _e8) {
          var r = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 0;
          var f = arguments.length > 3 ? arguments[3] : undefined;
          var i = arguments.length > 4 ? arguments[4] : undefined;

          _classCallCheck(this, e);

          this.TypedArrayConstructor = t, this.elementCount = 3;
          var s = this.TypedArrayConstructor;
          void 0 === f && (f = 3 * s.BYTES_PER_ELEMENT);
          var d = 0 === _e8.byteLength ? 0 : r;
          this.typedBuffer = null == i ? new s(_e8, d) : new s(_e8, d, (i - r) / s.BYTES_PER_ELEMENT), this.typedBufferStride = f / s.BYTES_PER_ELEMENT, this.count = Math.ceil(this.typedBuffer.length / this.typedBufferStride), this.stride = this.typedBufferStride * this.TypedArrayConstructor.BYTES_PER_ELEMENT;
        }

        _createClass(e, [{
          key: "getVec",
          value: function getVec(_e9, r) {
            return Object(_chunks_vec3_js__WEBPACK_IMPORTED_MODULE_0__["s"])(r, this.typedBuffer[_e9 * this.typedBufferStride], this.typedBuffer[_e9 * this.typedBufferStride + 1], this.typedBuffer[_e9 * this.typedBufferStride + 2]);
          }
        }, {
          key: "setVec",
          value: function setVec(t, _e10) {
            this.typedBuffer[t * this.typedBufferStride] = _e10[0], this.typedBuffer[t * this.typedBufferStride + 1] = _e10[1], this.typedBuffer[t * this.typedBufferStride + 2] = _e10[2];
          }
        }, {
          key: "get",
          value: function get(t, _e11) {
            return this.typedBuffer[t * this.typedBufferStride + _e11];
          }
        }, {
          key: "set",
          value: function set(t, _e12, r) {
            this.typedBuffer[t * this.typedBufferStride + _e12] = r;
          }
        }, {
          key: "setValues",
          value: function setValues(t, _e13, r, f) {
            this.typedBuffer[t * this.typedBufferStride] = _e13, this.typedBuffer[t * this.typedBufferStride + 1] = r, this.typedBuffer[t * this.typedBufferStride + 2] = f;
          }
        }, {
          key: "copyFrom",
          value: function copyFrom(t, _e14, r) {
            var f = this.typedBuffer,
                i = _e14.typedBuffer,
                s = t * this.typedBufferStride,
                d = r * _e14.typedBufferStride;
            f[s] = i[d], f[s + 1] = i[d + 1], f[s + 2] = i[d + 2];
          }
        }, {
          key: "buffer",
          get: function get() {
            return this.typedBuffer.buffer;
          }
        }]);

        return e;
      }();

      e.ElementCount = 3;
      /***/
    },

    /***/
    "UyQh":
    /*!*****************************************************************************!*\
      !*** ./node_modules/@arcgis/core/views/3d/support/buffer/internals/Vec2.js ***!
      \*****************************************************************************/

    /*! exports provided: BufferViewVec2Impl */

    /***/
    function UyQh(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "BufferViewVec2Impl", function () {
        return e;
      });
      /* harmony import */


      var _chunks_vec2_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ../../../../../chunks/vec2.js */
      "M0lq");
      /*
      All material copyright ESRI, All Rights Reserved, unless otherwise specified.
      See https://js.arcgis.com/4.18/esri/copyright.txt for details.
      */


      var e = /*#__PURE__*/function () {
        function e(t, _e15) {
          var r = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 0;
          var f = arguments.length > 3 ? arguments[3] : undefined;
          var s = arguments.length > 4 ? arguments[4] : undefined;

          _classCallCheck(this, e);

          this.TypedArrayConstructor = t, this.elementCount = 2;
          var i = this.TypedArrayConstructor;
          void 0 === f && (f = 2 * i.BYTES_PER_ELEMENT);
          var d = 0 === _e15.byteLength ? 0 : r;
          this.typedBuffer = null == s ? new i(_e15, d) : new i(_e15, d, (s - r) / i.BYTES_PER_ELEMENT), this.typedBufferStride = f / i.BYTES_PER_ELEMENT, this.count = Math.ceil(this.typedBuffer.length / this.typedBufferStride), this.stride = this.typedBufferStride * this.TypedArrayConstructor.BYTES_PER_ELEMENT;
        }

        _createClass(e, [{
          key: "getVec",
          value: function getVec(_e16, r) {
            return Object(_chunks_vec2_js__WEBPACK_IMPORTED_MODULE_0__["s"])(r, this.typedBuffer[_e16 * this.typedBufferStride], this.typedBuffer[_e16 * this.typedBufferStride + 1]);
          }
        }, {
          key: "setVec",
          value: function setVec(t, _e17) {
            this.typedBuffer[t * this.typedBufferStride] = _e17[0], this.typedBuffer[t * this.typedBufferStride + 1] = _e17[1];
          }
        }, {
          key: "get",
          value: function get(t, _e18) {
            return this.typedBuffer[t * this.typedBufferStride + _e18];
          }
        }, {
          key: "set",
          value: function set(t, _e19, r) {
            this.typedBuffer[t * this.typedBufferStride + _e19] = r;
          }
        }, {
          key: "setValues",
          value: function setValues(t, _e20, r) {
            this.typedBuffer[t * this.typedBufferStride] = _e20, this.typedBuffer[t * this.typedBufferStride + 1] = r;
          }
        }, {
          key: "copyFrom",
          value: function copyFrom(t, _e21, r) {
            var f = this.typedBuffer,
                s = _e21.typedBuffer,
                i = t * this.typedBufferStride,
                d = r * _e21.typedBufferStride;
            f[i] = s[d], f[i + 1] = s[d + 1];
          }
        }, {
          key: "buffer",
          get: function get() {
            return this.typedBuffer.buffer;
          }
        }]);

        return e;
      }();

      e.ElementCount = 2;
      /***/
    },

    /***/
    "VeZB":
    /*!*************************************************************************!*\
      !*** ./node_modules/@arcgis/core/views/3d/support/buffer/BufferView.js ***!
      \*************************************************************************/

    /*! exports provided: BufferViewFloat, BufferViewFloat64, BufferViewInt16, BufferViewInt32, BufferViewInt8, BufferViewMat3f, BufferViewMat3f64, BufferViewMat4f, BufferViewMat4f64, BufferViewUint16, BufferViewUint32, BufferViewUint8, BufferViewVec2f, BufferViewVec2f64, BufferViewVec2i16, BufferViewVec2i32, BufferViewVec2i8, BufferViewVec2u16, BufferViewVec2u32, BufferViewVec2u8, BufferViewVec3f, BufferViewVec3f64, BufferViewVec3i16, BufferViewVec3i32, BufferViewVec3i8, BufferViewVec3u16, BufferViewVec3u32, BufferViewVec3u8, BufferViewVec4f, BufferViewVec4f64, BufferViewVec4i16, BufferViewVec4i32, BufferViewVec4i8, BufferViewVec4u16, BufferViewVec4u32, BufferViewVec4u8 */

    /***/
    function VeZB(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "BufferViewFloat", function () {
        return f;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "BufferViewFloat64", function () {
        return i;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "BufferViewInt16", function () {
        return q;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "BufferViewInt32", function () {
        return C;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "BufferViewInt8", function () {
        return V;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "BufferViewMat3f", function () {
        return c;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "BufferViewMat3f64", function () {
        return b;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "BufferViewMat4f", function () {
        return o;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "BufferViewMat4f64", function () {
        return l;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "BufferViewUint16", function () {
        return g;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "BufferViewUint32", function () {
        return F;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "BufferViewUint8", function () {
        return h;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "BufferViewVec2f", function () {
        return u;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "BufferViewVec2f64", function () {
        return m;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "BufferViewVec2i16", function () {
        return v;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "BufferViewVec2i32", function () {
        return D;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "BufferViewVec2i8", function () {
        return M;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "BufferViewVec2u16", function () {
        return w;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "BufferViewVec2u32", function () {
        return I;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "BufferViewVec2u8", function () {
        return A;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "BufferViewVec3f", function () {
        return a;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "BufferViewVec3f64", function () {
        return T;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "BufferViewVec3i16", function () {
        return z;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "BufferViewVec3i32", function () {
        return G;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "BufferViewVec3i8", function () {
        return S;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "BufferViewVec3u16", function () {
        return E;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "BufferViewVec3u32", function () {
        return U;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "BufferViewVec3u8", function () {
        return O;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "BufferViewVec4f", function () {
        return p;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "BufferViewVec4f64", function () {
        return d;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "BufferViewVec4i16", function () {
        return B;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "BufferViewVec4i32", function () {
        return H;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "BufferViewVec4i8", function () {
        return k;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "BufferViewVec4u16", function () {
        return L;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "BufferViewVec4u32", function () {
        return j;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "BufferViewVec4u8", function () {
        return x;
      });
      /* harmony import */


      var _internals_Mat3_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ./internals/Mat3.js */
      "YDkJ");
      /* harmony import */


      var _internals_Mat4_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./internals/Mat4.js */
      "rl7h");
      /* harmony import */


      var _internals_Scalar_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./internals/Scalar.js */
      "hIn0");
      /* harmony import */


      var _internals_Vec2_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./internals/Vec2.js */
      "UyQh");
      /* harmony import */


      var _internals_Vec3_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ./internals/Vec3.js */
      "EY25");
      /* harmony import */


      var _internals_Vec4_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ./internals/Vec4.js */
      "DZZ3");
      /*
      All material copyright ESRI, All Rights Reserved, unless otherwise specified.
      See https://js.arcgis.com/4.18/esri/copyright.txt for details.
      */


      var f = /*#__PURE__*/function (_internals_Scalar_js_) {
        _inherits(f, _internals_Scalar_js_);

        var _super = _createSuper(f);

        function f(e) {
          var _this;

          var t = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;
          var r = arguments.length > 2 ? arguments[2] : undefined;
          var s = arguments.length > 3 ? arguments[3] : undefined;

          _classCallCheck(this, f);

          _this = _super.call(this, Float32Array, e, t, r, s), _this.elementType = "f32";
          return _this;
        }

        _createClass(f, null, [{
          key: "fromTypedArray",
          value: function fromTypedArray(e, t) {
            return new f(e.buffer, e.byteOffset, t, e.byteOffset + e.byteLength);
          }
        }]);

        return f;
      }(_internals_Scalar_js__WEBPACK_IMPORTED_MODULE_2__["BufferViewScalarImpl"]);

      f.ElementType = "f32";

      var u = /*#__PURE__*/function (_internals_Vec2_js__W) {
        _inherits(u, _internals_Vec2_js__W);

        var _super2 = _createSuper(u);

        function u(e) {
          var _this2;

          var t = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;
          var r = arguments.length > 2 ? arguments[2] : undefined;
          var s = arguments.length > 3 ? arguments[3] : undefined;

          _classCallCheck(this, u);

          _this2 = _super2.call(this, Float32Array, e, t, r, s), _this2.elementType = "f32";
          return _this2;
        }

        _createClass(u, null, [{
          key: "fromTypedArray",
          value: function fromTypedArray(e, t) {
            return new u(e.buffer, e.byteOffset, t, e.byteOffset + e.byteLength);
          }
        }]);

        return u;
      }(_internals_Vec2_js__WEBPACK_IMPORTED_MODULE_3__["BufferViewVec2Impl"]);

      u.ElementType = "f32";

      var a = /*#__PURE__*/function (_internals_Vec3_js__W) {
        _inherits(a, _internals_Vec3_js__W);

        var _super3 = _createSuper(a);

        function a(e) {
          var _this3;

          var t = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;
          var r = arguments.length > 2 ? arguments[2] : undefined;
          var s = arguments.length > 3 ? arguments[3] : undefined;

          _classCallCheck(this, a);

          _this3 = _super3.call(this, Float32Array, e, t, r, s), _this3.elementType = "f32";
          return _this3;
        }

        _createClass(a, null, [{
          key: "fromTypedArray",
          value: function fromTypedArray(e, t) {
            return new a(e.buffer, e.byteOffset, t, e.byteOffset + e.byteLength);
          }
        }]);

        return a;
      }(_internals_Vec3_js__WEBPACK_IMPORTED_MODULE_4__["BufferViewVec3Impl"]);

      a.ElementType = "f32";

      var p = /*#__PURE__*/function (_internals_Vec4_js__W) {
        _inherits(p, _internals_Vec4_js__W);

        var _super4 = _createSuper(p);

        function p(e) {
          var _this4;

          var t = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;
          var r = arguments.length > 2 ? arguments[2] : undefined;
          var s = arguments.length > 3 ? arguments[3] : undefined;

          _classCallCheck(this, p);

          _this4 = _super4.call(this, Float32Array, e, t, r, s), _this4.elementType = "f32";
          return _this4;
        }

        _createClass(p, null, [{
          key: "fromTypedArray",
          value: function fromTypedArray(e, t) {
            return new p(e.buffer, e.byteOffset, t, e.byteOffset + e.byteLength);
          }
        }]);

        return p;
      }(_internals_Vec4_js__WEBPACK_IMPORTED_MODULE_5__["BufferViewVec4Impl"]);

      p.ElementType = "f32";

      var c = /*#__PURE__*/function (_internals_Mat3_js__W) {
        _inherits(c, _internals_Mat3_js__W);

        var _super5 = _createSuper(c);

        function c(e) {
          var _this5;

          var t = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;
          var r = arguments.length > 2 ? arguments[2] : undefined;
          var s = arguments.length > 3 ? arguments[3] : undefined;

          _classCallCheck(this, c);

          _this5 = _super5.call(this, Float32Array, e, t, r, s), _this5.elementType = "f32";
          return _this5;
        }

        _createClass(c, null, [{
          key: "fromTypedArray",
          value: function fromTypedArray(e, t) {
            return new c(e.buffer, e.byteOffset, t, e.byteOffset + e.byteLength);
          }
        }]);

        return c;
      }(_internals_Mat3_js__WEBPACK_IMPORTED_MODULE_0__["BufferViewMat3Impl"]);

      c.ElementType = "f32";

      var b = /*#__PURE__*/function (_internals_Mat3_js__W2) {
        _inherits(b, _internals_Mat3_js__W2);

        var _super6 = _createSuper(b);

        function b(e) {
          var _this6;

          var t = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;
          var r = arguments.length > 2 ? arguments[2] : undefined;
          var s = arguments.length > 3 ? arguments[3] : undefined;

          _classCallCheck(this, b);

          _this6 = _super6.call(this, Float64Array, e, t, r, s), _this6.elementType = "f64";
          return _this6;
        }

        _createClass(b, null, [{
          key: "fromTypedArray",
          value: function fromTypedArray(e, t) {
            return new b(e.buffer, e.byteOffset, t, e.byteOffset + e.byteLength);
          }
        }]);

        return b;
      }(_internals_Mat3_js__WEBPACK_IMPORTED_MODULE_0__["BufferViewMat3Impl"]);

      b.ElementType = "f64";

      var o = /*#__PURE__*/function (_internals_Mat4_js__W) {
        _inherits(o, _internals_Mat4_js__W);

        var _super7 = _createSuper(o);

        function o(e) {
          var _this7;

          var t = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;
          var r = arguments.length > 2 ? arguments[2] : undefined;
          var s = arguments.length > 3 ? arguments[3] : undefined;

          _classCallCheck(this, o);

          _this7 = _super7.call(this, Float32Array, e, t, r, s), _this7.elementType = "f32";
          return _this7;
        }

        _createClass(o, null, [{
          key: "fromTypedArray",
          value: function fromTypedArray(e, t) {
            return new o(e.buffer, e.byteOffset, t, e.byteOffset + e.byteLength);
          }
        }]);

        return o;
      }(_internals_Mat4_js__WEBPACK_IMPORTED_MODULE_1__["BufferViewMat4Impl"]);

      o.ElementType = "f32";

      var l = /*#__PURE__*/function (_internals_Mat4_js__W2) {
        _inherits(l, _internals_Mat4_js__W2);

        var _super8 = _createSuper(l);

        function l(e) {
          var _this8;

          var t = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;
          var r = arguments.length > 2 ? arguments[2] : undefined;
          var s = arguments.length > 3 ? arguments[3] : undefined;

          _classCallCheck(this, l);

          _this8 = _super8.call(this, Float64Array, e, t, r, s), _this8.elementType = "f64";
          return _this8;
        }

        _createClass(l, null, [{
          key: "fromTypedArray",
          value: function fromTypedArray(e, t) {
            return new l(e.buffer, e.byteOffset, t, e.byteOffset + e.byteLength);
          }
        }]);

        return l;
      }(_internals_Mat4_js__WEBPACK_IMPORTED_MODULE_1__["BufferViewMat4Impl"]);

      l.ElementType = "f64";

      var i = /*#__PURE__*/function (_internals_Scalar_js_2) {
        _inherits(i, _internals_Scalar_js_2);

        var _super9 = _createSuper(i);

        function i(e) {
          var _this9;

          var t = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;
          var r = arguments.length > 2 ? arguments[2] : undefined;
          var s = arguments.length > 3 ? arguments[3] : undefined;

          _classCallCheck(this, i);

          _this9 = _super9.call(this, Float64Array, e, t, r, s), _this9.elementType = "f64";
          return _this9;
        }

        _createClass(i, null, [{
          key: "fromTypedArray",
          value: function fromTypedArray(e, t) {
            return new i(e.buffer, e.byteOffset, t, e.byteOffset + e.byteLength);
          }
        }]);

        return i;
      }(_internals_Scalar_js__WEBPACK_IMPORTED_MODULE_2__["BufferViewScalarImpl"]);

      i.ElementType = "f64";

      var m = /*#__PURE__*/function (_internals_Vec2_js__W2) {
        _inherits(m, _internals_Vec2_js__W2);

        var _super10 = _createSuper(m);

        function m(e) {
          var _this10;

          var t = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;
          var r = arguments.length > 2 ? arguments[2] : undefined;
          var s = arguments.length > 3 ? arguments[3] : undefined;

          _classCallCheck(this, m);

          _this10 = _super10.call(this, Float64Array, e, t, r, s), _this10.elementType = "f64";
          return _this10;
        }

        _createClass(m, null, [{
          key: "fromTypedArray",
          value: function fromTypedArray(e, t) {
            return new m(e.buffer, e.byteOffset, t, e.byteOffset + e.byteLength);
          }
        }]);

        return m;
      }(_internals_Vec2_js__WEBPACK_IMPORTED_MODULE_3__["BufferViewVec2Impl"]);

      m.ElementType = "f64";

      var T = /*#__PURE__*/function (_internals_Vec3_js__W2) {
        _inherits(T, _internals_Vec3_js__W2);

        var _super11 = _createSuper(T);

        function T(e) {
          var _this11;

          var t = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;
          var r = arguments.length > 2 ? arguments[2] : undefined;
          var s = arguments.length > 3 ? arguments[3] : undefined;

          _classCallCheck(this, T);

          _this11 = _super11.call(this, Float64Array, e, t, r, s), _this11.elementType = "f64";
          return _this11;
        }

        _createClass(T, null, [{
          key: "fromTypedArray",
          value: function fromTypedArray(e, t) {
            return new T(e.buffer, e.byteOffset, t, e.byteOffset + e.byteLength);
          }
        }]);

        return T;
      }(_internals_Vec3_js__WEBPACK_IMPORTED_MODULE_4__["BufferViewVec3Impl"]);

      T.ElementType = "f64";

      var d = /*#__PURE__*/function (_internals_Vec4_js__W2) {
        _inherits(d, _internals_Vec4_js__W2);

        var _super12 = _createSuper(d);

        function d(e) {
          var _this12;

          var t = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;
          var r = arguments.length > 2 ? arguments[2] : undefined;
          var s = arguments.length > 3 ? arguments[3] : undefined;

          _classCallCheck(this, d);

          _this12 = _super12.call(this, Float64Array, e, t, r, s), _this12.elementType = "f64";
          return _this12;
        }

        _createClass(d, null, [{
          key: "fromTypedArray",
          value: function fromTypedArray(e, t) {
            return new d(e.buffer, e.byteOffset, t, e.byteOffset + e.byteLength);
          }
        }]);

        return d;
      }(_internals_Vec4_js__WEBPACK_IMPORTED_MODULE_5__["BufferViewVec4Impl"]);

      d.ElementType = "f64";

      var h = /*#__PURE__*/function (_internals_Scalar_js_3) {
        _inherits(h, _internals_Scalar_js_3);

        var _super13 = _createSuper(h);

        function h(e) {
          var _this13;

          var t = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;
          var r = arguments.length > 2 ? arguments[2] : undefined;
          var s = arguments.length > 3 ? arguments[3] : undefined;

          _classCallCheck(this, h);

          _this13 = _super13.call(this, Uint8Array, e, t, r, s), _this13.elementType = "u8";
          return _this13;
        }

        _createClass(h, null, [{
          key: "fromTypedArray",
          value: function fromTypedArray(e, t) {
            return new h(e.buffer, e.byteOffset, t, e.byteOffset + e.byteLength);
          }
        }]);

        return h;
      }(_internals_Scalar_js__WEBPACK_IMPORTED_MODULE_2__["BufferViewScalarImpl"]);

      h.ElementType = "u8";

      var A = /*#__PURE__*/function (_internals_Vec2_js__W3) {
        _inherits(A, _internals_Vec2_js__W3);

        var _super14 = _createSuper(A);

        function A(e) {
          var _this14;

          var t = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;
          var r = arguments.length > 2 ? arguments[2] : undefined;
          var s = arguments.length > 3 ? arguments[3] : undefined;

          _classCallCheck(this, A);

          _this14 = _super14.call(this, Uint8Array, e, t, r, s), _this14.elementType = "u8";
          return _this14;
        }

        _createClass(A, null, [{
          key: "fromTypedArray",
          value: function fromTypedArray(e, t) {
            return new A(e.buffer, e.byteOffset, t, e.byteOffset + e.byteLength);
          }
        }]);

        return A;
      }(_internals_Vec2_js__WEBPACK_IMPORTED_MODULE_3__["BufferViewVec2Impl"]);

      A.ElementType = "u8";

      var O = /*#__PURE__*/function (_internals_Vec3_js__W3) {
        _inherits(O, _internals_Vec3_js__W3);

        var _super15 = _createSuper(O);

        function O(e) {
          var _this15;

          var t = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;
          var r = arguments.length > 2 ? arguments[2] : undefined;
          var s = arguments.length > 3 ? arguments[3] : undefined;

          _classCallCheck(this, O);

          _this15 = _super15.call(this, Uint8Array, e, t, r, s), _this15.elementType = "u8";
          return _this15;
        }

        _createClass(O, null, [{
          key: "fromTypedArray",
          value: function fromTypedArray(e, t) {
            return new O(e.buffer, e.byteOffset, t, e.byteOffset + e.byteLength);
          }
        }]);

        return O;
      }(_internals_Vec3_js__WEBPACK_IMPORTED_MODULE_4__["BufferViewVec3Impl"]);

      O.ElementType = "u8";

      var x = /*#__PURE__*/function (_internals_Vec4_js__W3) {
        _inherits(x, _internals_Vec4_js__W3);

        var _super16 = _createSuper(x);

        function x(e) {
          var _this16;

          var t = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;
          var r = arguments.length > 2 ? arguments[2] : undefined;
          var s = arguments.length > 3 ? arguments[3] : undefined;

          _classCallCheck(this, x);

          _this16 = _super16.call(this, Uint8Array, e, t, r, s), _this16.elementType = "u8";
          return _this16;
        }

        _createClass(x, null, [{
          key: "fromTypedArray",
          value: function fromTypedArray(e, t) {
            return new x(e.buffer, e.byteOffset, t, e.byteOffset + e.byteLength);
          }
        }]);

        return x;
      }(_internals_Vec4_js__WEBPACK_IMPORTED_MODULE_5__["BufferViewVec4Impl"]);

      x.ElementType = "u8";

      var g = /*#__PURE__*/function (_internals_Scalar_js_4) {
        _inherits(g, _internals_Scalar_js_4);

        var _super17 = _createSuper(g);

        function g(e) {
          var _this17;

          var t = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;
          var r = arguments.length > 2 ? arguments[2] : undefined;
          var s = arguments.length > 3 ? arguments[3] : undefined;

          _classCallCheck(this, g);

          _this17 = _super17.call(this, Uint16Array, e, t, r, s), _this17.elementType = "u16";
          return _this17;
        }

        _createClass(g, null, [{
          key: "fromTypedArray",
          value: function fromTypedArray(e, t) {
            return new g(e.buffer, e.byteOffset, t, e.byteOffset + e.byteLength);
          }
        }]);

        return g;
      }(_internals_Scalar_js__WEBPACK_IMPORTED_MODULE_2__["BufferViewScalarImpl"]);

      g.ElementType = "u16";

      var w = /*#__PURE__*/function (_internals_Vec2_js__W4) {
        _inherits(w, _internals_Vec2_js__W4);

        var _super18 = _createSuper(w);

        function w(e) {
          var _this18;

          var t = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;
          var r = arguments.length > 2 ? arguments[2] : undefined;
          var s = arguments.length > 3 ? arguments[3] : undefined;

          _classCallCheck(this, w);

          _this18 = _super18.call(this, Uint16Array, e, t, r, s), _this18.elementType = "u16";
          return _this18;
        }

        _createClass(w, null, [{
          key: "fromTypedArray",
          value: function fromTypedArray(e, t) {
            return new w(e.buffer, e.byteOffset, t, e.byteOffset + e.byteLength);
          }
        }]);

        return w;
      }(_internals_Vec2_js__WEBPACK_IMPORTED_MODULE_3__["BufferViewVec2Impl"]);

      w.ElementType = "u16";

      var E = /*#__PURE__*/function (_internals_Vec3_js__W4) {
        _inherits(E, _internals_Vec3_js__W4);

        var _super19 = _createSuper(E);

        function E(e) {
          var _this19;

          var t = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;
          var r = arguments.length > 2 ? arguments[2] : undefined;
          var s = arguments.length > 3 ? arguments[3] : undefined;

          _classCallCheck(this, E);

          _this19 = _super19.call(this, Uint16Array, e, t, r, s), _this19.elementType = "u16";
          return _this19;
        }

        _createClass(E, null, [{
          key: "fromTypedArray",
          value: function fromTypedArray(e, t) {
            return new E(e.buffer, e.byteOffset, t, e.byteOffset + e.byteLength);
          }
        }]);

        return E;
      }(_internals_Vec3_js__WEBPACK_IMPORTED_MODULE_4__["BufferViewVec3Impl"]);

      E.ElementType = "u16";

      var L = /*#__PURE__*/function (_internals_Vec4_js__W4) {
        _inherits(L, _internals_Vec4_js__W4);

        var _super20 = _createSuper(L);

        function L(e) {
          var _this20;

          var t = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;
          var r = arguments.length > 2 ? arguments[2] : undefined;
          var s = arguments.length > 3 ? arguments[3] : undefined;

          _classCallCheck(this, L);

          _this20 = _super20.call(this, Uint16Array, e, t, r, s), _this20.elementType = "u16";
          return _this20;
        }

        _createClass(L, null, [{
          key: "fromTypedArray",
          value: function fromTypedArray(e, t) {
            return new L(e.buffer, e.byteOffset, t, e.byteOffset + e.byteLength);
          }
        }]);

        return L;
      }(_internals_Vec4_js__WEBPACK_IMPORTED_MODULE_5__["BufferViewVec4Impl"]);

      L.ElementType = "u16";

      var F = /*#__PURE__*/function (_internals_Scalar_js_5) {
        _inherits(F, _internals_Scalar_js_5);

        var _super21 = _createSuper(F);

        function F(e) {
          var _this21;

          var t = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;
          var r = arguments.length > 2 ? arguments[2] : undefined;
          var s = arguments.length > 3 ? arguments[3] : undefined;

          _classCallCheck(this, F);

          _this21 = _super21.call(this, Uint32Array, e, t, r, s), _this21.elementType = "u32";
          return _this21;
        }

        _createClass(F, null, [{
          key: "fromTypedArray",
          value: function fromTypedArray(e, t) {
            return new F(e.buffer, e.byteOffset, t, e.byteOffset + e.byteLength);
          }
        }]);

        return F;
      }(_internals_Scalar_js__WEBPACK_IMPORTED_MODULE_2__["BufferViewScalarImpl"]);

      F.ElementType = "u32";

      var I = /*#__PURE__*/function (_internals_Vec2_js__W5) {
        _inherits(I, _internals_Vec2_js__W5);

        var _super22 = _createSuper(I);

        function I(e) {
          var _this22;

          var t = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;
          var r = arguments.length > 2 ? arguments[2] : undefined;
          var s = arguments.length > 3 ? arguments[3] : undefined;

          _classCallCheck(this, I);

          _this22 = _super22.call(this, Uint32Array, e, t, r, s), _this22.elementType = "u32";
          return _this22;
        }

        _createClass(I, null, [{
          key: "fromTypedArray",
          value: function fromTypedArray(e, t) {
            return new I(e.buffer, e.byteOffset, t, e.byteOffset + e.byteLength);
          }
        }]);

        return I;
      }(_internals_Vec2_js__WEBPACK_IMPORTED_MODULE_3__["BufferViewVec2Impl"]);

      I.ElementType = "u32";

      var U = /*#__PURE__*/function (_internals_Vec3_js__W5) {
        _inherits(U, _internals_Vec3_js__W5);

        var _super23 = _createSuper(U);

        function U(e) {
          var _this23;

          var t = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;
          var r = arguments.length > 2 ? arguments[2] : undefined;
          var s = arguments.length > 3 ? arguments[3] : undefined;

          _classCallCheck(this, U);

          _this23 = _super23.call(this, Uint32Array, e, t, r, s), _this23.elementType = "u32";
          return _this23;
        }

        _createClass(U, null, [{
          key: "fromTypedArray",
          value: function fromTypedArray(e, t) {
            return new U(e.buffer, e.byteOffset, t, e.byteOffset + e.byteLength);
          }
        }]);

        return U;
      }(_internals_Vec3_js__WEBPACK_IMPORTED_MODULE_4__["BufferViewVec3Impl"]);

      U.ElementType = "u32";

      var j = /*#__PURE__*/function (_internals_Vec4_js__W5) {
        _inherits(j, _internals_Vec4_js__W5);

        var _super24 = _createSuper(j);

        function j(e) {
          var _this24;

          var t = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;
          var r = arguments.length > 2 ? arguments[2] : undefined;
          var s = arguments.length > 3 ? arguments[3] : undefined;

          _classCallCheck(this, j);

          _this24 = _super24.call(this, Uint32Array, e, t, r, s), _this24.elementType = "u32";
          return _this24;
        }

        _createClass(j, null, [{
          key: "fromTypedArray",
          value: function fromTypedArray(e, t) {
            return new j(e.buffer, e.byteOffset, t, e.byteOffset + e.byteLength);
          }
        }]);

        return j;
      }(_internals_Vec4_js__WEBPACK_IMPORTED_MODULE_5__["BufferViewVec4Impl"]);

      j.ElementType = "u32";

      var V = /*#__PURE__*/function (_internals_Scalar_js_6) {
        _inherits(V, _internals_Scalar_js_6);

        var _super25 = _createSuper(V);

        function V(e) {
          var _this25;

          var t = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;
          var r = arguments.length > 2 ? arguments[2] : undefined;
          var s = arguments.length > 3 ? arguments[3] : undefined;

          _classCallCheck(this, V);

          _this25 = _super25.call(this, Int8Array, e, t, r, s), _this25.elementType = "i8";
          return _this25;
        }

        _createClass(V, null, [{
          key: "fromTypedArray",
          value: function fromTypedArray(e, t) {
            return new V(e.buffer, e.byteOffset, t, e.byteOffset + e.byteLength);
          }
        }]);

        return V;
      }(_internals_Scalar_js__WEBPACK_IMPORTED_MODULE_2__["BufferViewScalarImpl"]);

      V.ElementType = "i8";

      var M = /*#__PURE__*/function (_internals_Vec2_js__W6) {
        _inherits(M, _internals_Vec2_js__W6);

        var _super26 = _createSuper(M);

        function M(e) {
          var _this26;

          var t = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;
          var r = arguments.length > 2 ? arguments[2] : undefined;
          var s = arguments.length > 3 ? arguments[3] : undefined;

          _classCallCheck(this, M);

          _this26 = _super26.call(this, Int8Array, e, t, r, s), _this26.elementType = "i8";
          return _this26;
        }

        _createClass(M, null, [{
          key: "fromTypedArray",
          value: function fromTypedArray(e, t) {
            return new M(e.buffer, e.byteOffset, t, e.byteOffset + e.byteLength);
          }
        }]);

        return M;
      }(_internals_Vec2_js__WEBPACK_IMPORTED_MODULE_3__["BufferViewVec2Impl"]);

      M.ElementType = "i8";

      var S = /*#__PURE__*/function (_internals_Vec3_js__W6) {
        _inherits(S, _internals_Vec3_js__W6);

        var _super27 = _createSuper(S);

        function S(e) {
          var _this27;

          var t = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;
          var r = arguments.length > 2 ? arguments[2] : undefined;
          var s = arguments.length > 3 ? arguments[3] : undefined;

          _classCallCheck(this, S);

          _this27 = _super27.call(this, Int8Array, e, t, r, s), _this27.elementType = "i8";
          return _this27;
        }

        _createClass(S, null, [{
          key: "fromTypedArray",
          value: function fromTypedArray(e, t) {
            return new S(e.buffer, e.byteOffset, t, e.byteOffset + e.byteLength);
          }
        }]);

        return S;
      }(_internals_Vec3_js__WEBPACK_IMPORTED_MODULE_4__["BufferViewVec3Impl"]);

      S.ElementType = "i8";

      var k = /*#__PURE__*/function (_internals_Vec4_js__W6) {
        _inherits(k, _internals_Vec4_js__W6);

        var _super28 = _createSuper(k);

        function k(e) {
          var _this28;

          var t = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;
          var r = arguments.length > 2 ? arguments[2] : undefined;
          var s = arguments.length > 3 ? arguments[3] : undefined;

          _classCallCheck(this, k);

          _this28 = _super28.call(this, Int8Array, e, t, r, s), _this28.elementType = "i8";
          return _this28;
        }

        _createClass(k, null, [{
          key: "fromTypedArray",
          value: function fromTypedArray(e, t) {
            return new k(e.buffer, e.byteOffset, t, e.byteOffset + e.byteLength);
          }
        }]);

        return k;
      }(_internals_Vec4_js__WEBPACK_IMPORTED_MODULE_5__["BufferViewVec4Impl"]);

      k.ElementType = "i8";

      var q = /*#__PURE__*/function (_internals_Scalar_js_7) {
        _inherits(q, _internals_Scalar_js_7);

        var _super29 = _createSuper(q);

        function q(e) {
          var _this29;

          var t = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;
          var r = arguments.length > 2 ? arguments[2] : undefined;
          var s = arguments.length > 3 ? arguments[3] : undefined;

          _classCallCheck(this, q);

          _this29 = _super29.call(this, Int16Array, e, t, r, s), _this29.elementType = "i16";
          return _this29;
        }

        _createClass(q, null, [{
          key: "fromTypedArray",
          value: function fromTypedArray(e, t) {
            return new q(e.buffer, e.byteOffset, t, e.byteOffset + e.byteLength);
          }
        }]);

        return q;
      }(_internals_Scalar_js__WEBPACK_IMPORTED_MODULE_2__["BufferViewScalarImpl"]);

      q.ElementType = "i16";

      var v = /*#__PURE__*/function (_internals_Vec2_js__W7) {
        _inherits(v, _internals_Vec2_js__W7);

        var _super30 = _createSuper(v);

        function v(e) {
          var _this30;

          var t = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;
          var r = arguments.length > 2 ? arguments[2] : undefined;
          var s = arguments.length > 3 ? arguments[3] : undefined;

          _classCallCheck(this, v);

          _this30 = _super30.call(this, Int16Array, e, t, r, s), _this30.elementType = "i16";
          return _this30;
        }

        _createClass(v, null, [{
          key: "fromTypedArray",
          value: function fromTypedArray(e, t) {
            return new v(e.buffer, e.byteOffset, t, e.byteOffset + e.byteLength);
          }
        }]);

        return v;
      }(_internals_Vec2_js__WEBPACK_IMPORTED_MODULE_3__["BufferViewVec2Impl"]);

      v.ElementType = "i16";

      var z = /*#__PURE__*/function (_internals_Vec3_js__W7) {
        _inherits(z, _internals_Vec3_js__W7);

        var _super31 = _createSuper(z);

        function z(e) {
          var _this31;

          var t = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;
          var r = arguments.length > 2 ? arguments[2] : undefined;
          var s = arguments.length > 3 ? arguments[3] : undefined;

          _classCallCheck(this, z);

          _this31 = _super31.call(this, Int16Array, e, t, r, s), _this31.elementType = "i16";
          return _this31;
        }

        _createClass(z, null, [{
          key: "fromTypedArray",
          value: function fromTypedArray(e, t) {
            return new z(e.buffer, e.byteOffset, t, e.byteOffset + e.byteLength);
          }
        }]);

        return z;
      }(_internals_Vec3_js__WEBPACK_IMPORTED_MODULE_4__["BufferViewVec3Impl"]);

      z.ElementType = "i16";

      var B = /*#__PURE__*/function (_internals_Vec4_js__W7) {
        _inherits(B, _internals_Vec4_js__W7);

        var _super32 = _createSuper(B);

        function B(e) {
          var _this32;

          var t = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;
          var r = arguments.length > 2 ? arguments[2] : undefined;
          var s = arguments.length > 3 ? arguments[3] : undefined;

          _classCallCheck(this, B);

          _this32 = _super32.call(this, Int16Array, e, t, r, s), _this32.elementType = "i16";
          return _this32;
        }

        _createClass(B, null, [{
          key: "fromTypedArray",
          value: function fromTypedArray(e, t) {
            return new B(e.buffer, e.byteOffset, t, e.byteOffset + e.byteLength);
          }
        }]);

        return B;
      }(_internals_Vec4_js__WEBPACK_IMPORTED_MODULE_5__["BufferViewVec4Impl"]);

      B.ElementType = "i16";

      var C = /*#__PURE__*/function (_internals_Scalar_js_8) {
        _inherits(C, _internals_Scalar_js_8);

        var _super33 = _createSuper(C);

        function C(e) {
          var _this33;

          var t = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;
          var r = arguments.length > 2 ? arguments[2] : undefined;
          var s = arguments.length > 3 ? arguments[3] : undefined;

          _classCallCheck(this, C);

          _this33 = _super33.call(this, Int32Array, e, t, r, s), _this33.elementType = "i32";
          return _this33;
        }

        _createClass(C, null, [{
          key: "fromTypedArray",
          value: function fromTypedArray(e, t) {
            return new C(e.buffer, e.byteOffset, t, e.byteOffset + e.byteLength);
          }
        }]);

        return C;
      }(_internals_Scalar_js__WEBPACK_IMPORTED_MODULE_2__["BufferViewScalarImpl"]);

      C.ElementType = "i32";

      var D = /*#__PURE__*/function (_internals_Vec2_js__W8) {
        _inherits(D, _internals_Vec2_js__W8);

        var _super34 = _createSuper(D);

        function D(e) {
          var _this34;

          var t = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;
          var r = arguments.length > 2 ? arguments[2] : undefined;
          var s = arguments.length > 3 ? arguments[3] : undefined;

          _classCallCheck(this, D);

          _this34 = _super34.call(this, Int32Array, e, t, r, s), _this34.elementType = "i32";
          return _this34;
        }

        _createClass(D, null, [{
          key: "fromTypedArray",
          value: function fromTypedArray(e, t) {
            return new D(e.buffer, e.byteOffset, t, e.byteOffset + e.byteLength);
          }
        }]);

        return D;
      }(_internals_Vec2_js__WEBPACK_IMPORTED_MODULE_3__["BufferViewVec2Impl"]);

      D.ElementType = "i32";

      var G = /*#__PURE__*/function (_internals_Vec3_js__W8) {
        _inherits(G, _internals_Vec3_js__W8);

        var _super35 = _createSuper(G);

        function G(e) {
          var _this35;

          var t = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;
          var r = arguments.length > 2 ? arguments[2] : undefined;
          var s = arguments.length > 3 ? arguments[3] : undefined;

          _classCallCheck(this, G);

          _this35 = _super35.call(this, Int32Array, e, t, r, s), _this35.elementType = "i32";
          return _this35;
        }

        _createClass(G, null, [{
          key: "fromTypedArray",
          value: function fromTypedArray(e, t) {
            return new G(e.buffer, e.byteOffset, t, e.byteOffset + e.byteLength);
          }
        }]);

        return G;
      }(_internals_Vec3_js__WEBPACK_IMPORTED_MODULE_4__["BufferViewVec3Impl"]);

      G.ElementType = "i32";

      var H = /*#__PURE__*/function (_internals_Vec4_js__W8) {
        _inherits(H, _internals_Vec4_js__W8);

        var _super36 = _createSuper(H);

        function H(e) {
          var _this36;

          var t = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;
          var r = arguments.length > 2 ? arguments[2] : undefined;
          var s = arguments.length > 3 ? arguments[3] : undefined;

          _classCallCheck(this, H);

          _this36 = _super36.call(this, Int32Array, e, t, r, s), _this36.elementType = "i32";
          return _this36;
        }

        _createClass(H, null, [{
          key: "fromTypedArray",
          value: function fromTypedArray(e, t) {
            return new H(e.buffer, e.byteOffset, t, e.byteOffset + e.byteLength);
          }
        }]);

        return H;
      }(_internals_Vec4_js__WEBPACK_IMPORTED_MODULE_5__["BufferViewVec4Impl"]);

      H.ElementType = "i32";
      /***/
    },

    /***/
    "YDkJ":
    /*!*****************************************************************************!*\
      !*** ./node_modules/@arcgis/core/views/3d/support/buffer/internals/Mat3.js ***!
      \*****************************************************************************/

    /*! exports provided: BufferViewMat3Impl */

    /***/
    function YDkJ(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "BufferViewMat3Impl", function () {
        return t;
      });
      /*
      All material copyright ESRI, All Rights Reserved, unless otherwise specified.
      See https://js.arcgis.com/4.18/esri/copyright.txt for details.
      */


      var t = /*#__PURE__*/function () {
        function t(_t2, e) {
          var r = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 0;
          var f = arguments.length > 3 ? arguments[3] : undefined;
          var s = arguments.length > 4 ? arguments[4] : undefined;

          _classCallCheck(this, t);

          this.TypedArrayConstructor = _t2, this.elementCount = 9;
          var i = this.TypedArrayConstructor;
          void 0 === f && (f = 9 * i.BYTES_PER_ELEMENT);
          var d = 0 === e.byteLength ? 0 : r;
          this.typedBuffer = null == s ? new i(e, d) : new i(e, d, (s - r) / i.BYTES_PER_ELEMENT), this.typedBufferStride = f / i.BYTES_PER_ELEMENT, this.count = Math.ceil(this.typedBuffer.length / this.typedBufferStride), this.stride = this.typedBufferStride * this.TypedArrayConstructor.BYTES_PER_ELEMENT;
        }

        _createClass(t, [{
          key: "getMat",
          value: function getMat(_t3, e) {
            var r = _t3 * this.typedBufferStride;

            for (var _t11 = 0; _t11 < 9; _t11++) {
              e[_t11] = this.typedBuffer[r + _t11];
            }

            return e;
          }
        }, {
          key: "setMat",
          value: function setMat(_t5, e) {
            var r = _t5 * this.typedBufferStride;

            for (var _t12 = 0; _t12 < 9; _t12++) {
              this.typedBuffer[r + _t12] = e[_t12];
            }
          }
        }, {
          key: "get",
          value: function get(_t7, e) {
            return this.typedBuffer[_t7 * this.typedBufferStride + e];
          }
        }, {
          key: "set",
          value: function set(_t8, e, r) {
            this.typedBuffer[_t8 * this.typedBufferStride + e] = r;
          }
        }, {
          key: "copyFrom",
          value: function copyFrom(_t9, e, r) {
            var f = this.typedBuffer,
                s = e.typedBuffer,
                i = _t9 * this.typedBufferStride,
                d = r * e.typedBufferStride;

            for (var _t13 = 0; _t13 < 9; ++_t13) {
              f[i + _t13] = s[d + _t13];
            }
          }
        }, {
          key: "buffer",
          get: function get() {
            return this.typedBuffer.buffer;
          }
        }]);

        return t;
      }();

      t.ElementCount = 9;
      /***/
    },

    /***/
    "dXfX":
    /*!**************************************************!*\
      !*** ./node_modules/@arcgis/core/chunks/vec4.js ***!
      \**************************************************/

    /*! exports provided: A, B, C, D, E, F, G, H, I, J, a, b, c, d, e, f, g, h, i, j, k, l, m, n, o, p, q, r, s, t, u, v, w, x, y, z */

    /***/
    function dXfX(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "A", function () {
        return w;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "B", function () {
        return z;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "C", function () {
        return A;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "D", function () {
        return L;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "E", function () {
        return k;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "F", function () {
        return B;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "G", function () {
        return C;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "H", function () {
        return F;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "I", function () {
        return G;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "J", function () {
        return H;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "a", function () {
        return s;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "b", function () {
        return l;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "c", function () {
        return a;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "d", function () {
        return _;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "e", function () {
        return x;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "f", function () {
        return q;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "g", function () {
        return D;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "h", function () {
        return E;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "i", function () {
        return b;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "j", function () {
        return u;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "k", function () {
        return e;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "l", function () {
        return j;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "m", function () {
        return o;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "n", function () {
        return g;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "o", function () {
        return c;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "p", function () {
        return i;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "q", function () {
        return h;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "r", function () {
        return M;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "s", function () {
        return r;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "t", function () {
        return y;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "u", function () {
        return f;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "v", function () {
        return I;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "w", function () {
        return m;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "x", function () {
        return d;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "y", function () {
        return p;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "z", function () {
        return v;
      });
      /* harmony import */


      var _common_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ./common.js */
      "QhKk");
      /*
      All material copyright ESRI, All Rights Reserved, unless otherwise specified.
      See https://js.arcgis.com/4.18/esri/copyright.txt for details.
      */


      function a(t, n) {
        return t[0] = n[0], t[1] = n[1], t[2] = n[2], t[3] = n[3], t;
      }

      function r(t, n, a, r, s) {
        return t[0] = n, t[1] = a, t[2] = r, t[3] = s, t;
      }

      function s(t, n, a) {
        return t[0] = n[0] + a[0], t[1] = n[1] + a[1], t[2] = n[2] + a[2], t[3] = n[3] + a[3], t;
      }

      function u(t, n, a) {
        return t[0] = n[0] - a[0], t[1] = n[1] - a[1], t[2] = n[2] - a[2], t[3] = n[3] - a[3], t;
      }

      function o(t, n, a) {
        return t[0] = n[0] * a[0], t[1] = n[1] * a[1], t[2] = n[2] * a[2], t[3] = n[3] * a[3], t;
      }

      function e(t, n, a) {
        return t[0] = n[0] / a[0], t[1] = n[1] / a[1], t[2] = n[2] / a[2], t[3] = n[3] / a[3], t;
      }

      function c(t, n) {
        return t[0] = Math.ceil(n[0]), t[1] = Math.ceil(n[1]), t[2] = Math.ceil(n[2]), t[3] = Math.ceil(n[3]), t;
      }

      function i(t, n) {
        return t[0] = Math.floor(n[0]), t[1] = Math.floor(n[1]), t[2] = Math.floor(n[2]), t[3] = Math.floor(n[3]), t;
      }

      function h(t, n, a) {
        return t[0] = Math.min(n[0], a[0]), t[1] = Math.min(n[1], a[1]), t[2] = Math.min(n[2], a[2]), t[3] = Math.min(n[3], a[3]), t;
      }

      function M(t, n, a) {
        return t[0] = Math.max(n[0], a[0]), t[1] = Math.max(n[1], a[1]), t[2] = Math.max(n[2], a[2]), t[3] = Math.max(n[3], a[3]), t;
      }

      function f(t, n) {
        return t[0] = Math.round(n[0]), t[1] = Math.round(n[1]), t[2] = Math.round(n[2]), t[3] = Math.round(n[3]), t;
      }

      function l(t, n, a) {
        return t[0] = n[0] * a, t[1] = n[1] * a, t[2] = n[2] * a, t[3] = n[3] * a, t;
      }

      function m(t, n, a, r) {
        return t[0] = n[0] + a[0] * r, t[1] = n[1] + a[1] * r, t[2] = n[2] + a[2] * r, t[3] = n[3] + a[3] * r, t;
      }

      function d(t, n) {
        var a = n[0] - t[0],
            r = n[1] - t[1],
            s = n[2] - t[2],
            u = n[3] - t[3];
        return Math.sqrt(a * a + r * r + s * s + u * u);
      }

      function b(t, n) {
        var a = n[0] - t[0],
            r = n[1] - t[1],
            s = n[2] - t[2],
            u = n[3] - t[3];
        return a * a + r * r + s * s + u * u;
      }

      function x(t) {
        var n = t[0],
            a = t[1],
            r = t[2],
            s = t[3];
        return Math.sqrt(n * n + a * a + r * r + s * s);
      }

      function q(t) {
        var n = t[0],
            a = t[1],
            r = t[2],
            s = t[3];
        return n * n + a * a + r * r + s * s;
      }

      function p(t, n) {
        return t[0] = -n[0], t[1] = -n[1], t[2] = -n[2], t[3] = -n[3], t;
      }

      function v(t, n) {
        return t[0] = 1 / n[0], t[1] = 1 / n[1], t[2] = 1 / n[2], t[3] = 1 / n[3], t;
      }

      function g(t, n) {
        var a = n[0],
            r = n[1],
            s = n[2],
            u = n[3];
        var o = a * a + r * r + s * s + u * u;
        return o > 0 && (o = 1 / Math.sqrt(o), t[0] = a * o, t[1] = r * o, t[2] = s * o, t[3] = u * o), t;
      }

      function _(t, n) {
        return t[0] * n[0] + t[1] * n[1] + t[2] * n[2] + t[3] * n[3];
      }

      function j(t, n, a, r) {
        var s = n[0],
            u = n[1],
            o = n[2],
            e = n[3];
        return t[0] = s + r * (a[0] - s), t[1] = u + r * (a[1] - u), t[2] = o + r * (a[2] - o), t[3] = e + r * (a[3] - e), t;
      }

      function w(t, a) {
        var r, s, u, o, e, c;
        a = a || 1;

        do {
          r = 2 * Object(_common_js__WEBPACK_IMPORTED_MODULE_0__["R"])() - 1, s = 2 * Object(_common_js__WEBPACK_IMPORTED_MODULE_0__["R"])() - 1, e = r * r + s * s;
        } while (e >= 1);

        do {
          u = 2 * Object(_common_js__WEBPACK_IMPORTED_MODULE_0__["R"])() - 1, o = 2 * Object(_common_js__WEBPACK_IMPORTED_MODULE_0__["R"])() - 1, c = u * u + o * o;
        } while (c >= 1);

        var i = Math.sqrt((1 - e) / c);
        return t[0] = a * r, t[1] = a * s, t[2] = a * u * i, t[3] = a * o * i, t;
      }

      function y(t, n, a) {
        var r = n[0],
            s = n[1],
            u = n[2],
            o = n[3];
        return t[0] = a[0] * r + a[4] * s + a[8] * u + a[12] * o, t[1] = a[1] * r + a[5] * s + a[9] * u + a[13] * o, t[2] = a[2] * r + a[6] * s + a[10] * u + a[14] * o, t[3] = a[3] * r + a[7] * s + a[11] * u + a[15] * o, t;
      }

      function z(t, n, a) {
        var r = n[0],
            s = n[1],
            u = n[2],
            o = a[0],
            e = a[1],
            c = a[2],
            i = a[3],
            h = i * r + e * u - c * s,
            M = i * s + c * r - o * u,
            f = i * u + o * s - e * r,
            l = -o * r - e * s - c * u;
        return t[0] = h * i + l * -o + M * -c - f * -e, t[1] = M * i + l * -e + f * -o - h * -c, t[2] = f * i + l * -c + h * -e - M * -o, t[3] = n[3], t;
      }

      function A(t) {
        return "vec4(" + t[0] + ", " + t[1] + ", " + t[2] + ", " + t[3] + ")";
      }

      function D(t, n) {
        return t[0] === n[0] && t[1] === n[1] && t[2] === n[2] && t[3] === n[3];
      }

      function E(n, a) {
        var r = n[0],
            s = n[1],
            u = n[2],
            o = n[3],
            e = a[0],
            c = a[1],
            i = a[2],
            h = a[3];
        return Math.abs(r - e) <= _common_js__WEBPACK_IMPORTED_MODULE_0__["E"] * Math.max(1, Math.abs(r), Math.abs(e)) && Math.abs(s - c) <= _common_js__WEBPACK_IMPORTED_MODULE_0__["E"] * Math.max(1, Math.abs(s), Math.abs(c)) && Math.abs(u - i) <= _common_js__WEBPACK_IMPORTED_MODULE_0__["E"] * Math.max(1, Math.abs(u), Math.abs(i)) && Math.abs(o - h) <= _common_js__WEBPACK_IMPORTED_MODULE_0__["E"] * Math.max(1, Math.abs(o), Math.abs(h));
      }

      var L = u,
          k = o,
          B = e,
          C = d,
          F = b,
          G = x,
          H = q;
      var I = Object.freeze({
        __proto__: null,
        copy: a,
        set: r,
        add: s,
        subtract: u,
        multiply: o,
        divide: e,
        ceil: c,
        floor: i,
        min: h,
        max: M,
        round: f,
        scale: l,
        scaleAndAdd: m,
        distance: d,
        squaredDistance: b,
        length: x,
        squaredLength: q,
        negate: p,
        inverse: v,
        normalize: g,
        dot: _,
        lerp: j,
        random: w,
        transformMat4: y,
        transformQuat: z,
        str: A,
        exactEquals: D,
        equals: E,
        sub: L,
        mul: k,
        div: B,
        dist: C,
        sqrDist: F,
        len: G,
        sqrLen: H
      });
      /***/
    },

    /***/
    "grla":
    /*!********************************************************************!*\
      !*** ./node_modules/@arcgis/core/views/3d/support/buffer/types.js ***!
      \********************************************************************/

    /*! exports provided: elementTypeSize, isInteger, isSigned, maximumValue */

    /***/
    function grla(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "elementTypeSize", function () {
        return e;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "isInteger", function () {
        return u;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "isSigned", function () {
        return r;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "maximumValue", function () {
        return c;
      });
      /* harmony import */


      var _core_has_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ../../../../core/has.js */
      "wSAH");
      /*
      All material copyright ESRI, All Rights Reserved, unless otherwise specified.
      See https://js.arcgis.com/4.18/esri/copyright.txt for details.
      */


      function e(e) {
        switch (e) {
          case "u8":
            return 1;

          case "u16":
            return 2;

          case "u32":
            return 4;

          case "i8":
            return 1;

          case "i16":
            return 2;

          case "i32":
          case "f32":
            return 4;

          case "f64":
            return 8;

          default:
            return;
        }
      }

      function r(e) {
        switch (e) {
          case "u8":
          case "u16":
          case "u32":
            return !1;

          case "i8":
          case "i16":
          case "i32":
          case "f32":
          case "f64":
            return !0;

          default:
            return;
        }
      }

      function u(e) {
        switch (e) {
          case "u8":
          case "u16":
          case "u32":
          case "i8":
          case "i16":
          case "i32":
            return !0;

          case "f32":
          case "f64":
            return !1;

          default:
            return;
        }
      }

      function c(e) {
        switch (e) {
          case "u8":
            return 255;

          case "u16":
            return 65535;

          case "u32":
            return 4294967295;

          case "i8":
            return 127;

          case "i16":
            return 32767;

          case "i32":
            return 2147483647;

          case "f32":
            return 3402823e32;

          case "f64":
            return 179769e303;

          default:
            return;
        }
      }
      /***/

    },

    /***/
    "hIn0":
    /*!*******************************************************************************!*\
      !*** ./node_modules/@arcgis/core/views/3d/support/buffer/internals/Scalar.js ***!
      \*******************************************************************************/

    /*! exports provided: BufferViewScalarImpl */

    /***/
    function hIn0(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "BufferViewScalarImpl", function () {
        return t;
      });
      /*
      All material copyright ESRI, All Rights Reserved, unless otherwise specified.
      See https://js.arcgis.com/4.18/esri/copyright.txt for details.
      */


      var t = /*#__PURE__*/function () {
        function t(_t14, e) {
          var r = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 0;
          var s = arguments.length > 3 ? arguments[3] : undefined;
          var f = arguments.length > 4 ? arguments[4] : undefined;

          _classCallCheck(this, t);

          this.TypedArrayConstructor = _t14, this.elementCount = 1;
          var i = this.TypedArrayConstructor;
          void 0 === s && (s = i.BYTES_PER_ELEMENT);
          var u = 0 === e.byteLength ? 0 : r;
          this.typedBuffer = null == f ? new i(e, u) : new i(e, u, (f - r) / i.BYTES_PER_ELEMENT), this.typedBufferStride = s / i.BYTES_PER_ELEMENT, this.count = Math.ceil(this.typedBuffer.length / this.typedBufferStride), this.stride = this.typedBufferStride * this.TypedArrayConstructor.BYTES_PER_ELEMENT;
        }

        _createClass(t, [{
          key: "get",
          value: function get(_t15) {
            return this.typedBuffer[_t15 * this.typedBufferStride];
          }
        }, {
          key: "set",
          value: function set(_t16, e) {
            this.typedBuffer[_t16 * this.typedBufferStride] = e;
          }
        }, {
          key: "buffer",
          get: function get() {
            return this.typedBuffer.buffer;
          }
        }]);

        return t;
      }();

      t.ElementCount = 1;
      /***/
    },

    /***/
    "rl7h":
    /*!*****************************************************************************!*\
      !*** ./node_modules/@arcgis/core/views/3d/support/buffer/internals/Mat4.js ***!
      \*****************************************************************************/

    /*! exports provided: BufferViewMat4Impl */

    /***/
    function rl7h(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "BufferViewMat4Impl", function () {
        return t;
      });
      /*
      All material copyright ESRI, All Rights Reserved, unless otherwise specified.
      See https://js.arcgis.com/4.18/esri/copyright.txt for details.
      */


      var t = /*#__PURE__*/function () {
        function t(_t17, e) {
          var r = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 0;
          var f = arguments.length > 3 ? arguments[3] : undefined;
          var s = arguments.length > 4 ? arguments[4] : undefined;

          _classCallCheck(this, t);

          this.TypedArrayConstructor = _t17, this.elementCount = 16;
          var i = this.TypedArrayConstructor;
          void 0 === f && (f = 16 * i.BYTES_PER_ELEMENT);
          var d = 0 === e.byteLength ? 0 : r;
          this.typedBuffer = null == s ? new i(e, d) : new i(e, d, (s - r) / i.BYTES_PER_ELEMENT), this.typedBufferStride = f / i.BYTES_PER_ELEMENT, this.count = Math.ceil(this.typedBuffer.length / this.typedBufferStride), this.stride = this.typedBufferStride * this.TypedArrayConstructor.BYTES_PER_ELEMENT;
        }

        _createClass(t, [{
          key: "getMat",
          value: function getMat(_t18, e) {
            var r = _t18 * this.typedBufferStride;

            for (var _t26 = 0; _t26 < 16; _t26++) {
              e[_t26] = this.typedBuffer[r + _t26];
            }

            return e;
          }
        }, {
          key: "setMat",
          value: function setMat(_t20, e) {
            var r = _t20 * this.typedBufferStride;

            for (var _t27 = 0; _t27 < 16; _t27++) {
              this.typedBuffer[r + _t27] = e[_t27];
            }
          }
        }, {
          key: "get",
          value: function get(_t22, e) {
            return this.typedBuffer[_t22 * this.typedBufferStride + e];
          }
        }, {
          key: "set",
          value: function set(_t23, e, r) {
            this.typedBuffer[_t23 * this.typedBufferStride + e] = r;
          }
        }, {
          key: "copyFrom",
          value: function copyFrom(_t24, e, r) {
            var f = this.typedBuffer,
                s = e.typedBuffer,
                i = _t24 * this.typedBufferStride,
                d = r * e.typedBufferStride;

            for (var _t28 = 0; _t28 < 16; ++_t28) {
              f[i + _t28] = s[d + _t28];
            }
          }
        }, {
          key: "buffer",
          get: function get() {
            return this.typedBuffer.buffer;
          }
        }]);

        return t;
      }();

      t.ElementCount = 16;
      /***/
    }
  }]);
})();
//# sourceMappingURL=default~views-3d-layers-graphics-objectResourceUtils-js~views-3d-webgl-engine-lib-edgeRendering-Edge~6fe4ca85-es5.js.map