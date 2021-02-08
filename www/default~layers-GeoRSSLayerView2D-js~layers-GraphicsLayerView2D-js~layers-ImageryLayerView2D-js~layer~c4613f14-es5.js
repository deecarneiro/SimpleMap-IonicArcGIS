(function () {
  function _get(target, property, receiver) { if (typeof Reflect !== "undefined" && Reflect.get) { _get = Reflect.get; } else { _get = function _get(target, property, receiver) { var base = _superPropBase(target, property); if (!base) return; var desc = Object.getOwnPropertyDescriptor(base, property); if (desc.get) { return desc.get.call(receiver); } return desc.value; }; } return _get(target, property, receiver || target); }

  function _superPropBase(object, property) { while (!Object.prototype.hasOwnProperty.call(object, property)) { object = _getPrototypeOf(object); if (object === null) break; } return object; }

  function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

  function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

  function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

  function _createForOfIteratorHelper(o, allowArrayLike) { var it; if (typeof Symbol === "undefined" || o[Symbol.iterator] == null) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e41) { throw _e41; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = o[Symbol.iterator](); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e42) { didErr = true; err = _e42; }, f: function f() { try { if (!normalCompletion && it["return"] != null) it["return"](); } finally { if (didErr) throw err; } } }; }

  function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

  function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

  function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

  function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

  function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

  function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

  function _iterableToArrayLimit(arr, i) { if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr))) return; var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

  function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

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

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["default~layers-GeoRSSLayerView2D-js~layers-GraphicsLayerView2D-js~layers-ImageryLayerView2D-js~layer~c4613f14"], {
    /***/
    "+TxJ":
    /*!*************************************************************************************************!*\
      !*** ./node_modules/@arcgis/core/views/2d/engine/webgl/mesh/templates/WGLBaseMarkerTemplate.js ***!
      \*************************************************************************************************/

    /*! exports provided: default */

    /***/
    function TxJ(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony import */


      var _core_maybe_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ../../../../../../core/maybe.js */
      "srIe");
      /* harmony import */


      var _core_screenUtils_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ../../../../../../core/screenUtils.js */
      "qRWG");
      /* harmony import */


      var _layers_graphics_featureConversionUtils_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ../../../../../../layers/graphics/featureConversionUtils.js */
      "ZlUD");
      /* harmony import */


      var _chunks_vec2_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ../../../../../../chunks/vec2.js */
      "M0lq");
      /* harmony import */


      var _chunks_mat2d_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ../../../../../../chunks/mat2d.js */
      "opr1");
      /* harmony import */


      var _chunks_mat2df32_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ../../../../../../chunks/mat2df32.js */
      "LGNZ");
      /* harmony import */


      var _chunks_vec2f32_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ../../../../../../chunks/vec2f32.js */
      "c46T");
      /* harmony import */


      var _number_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! ../../number.js */
      "0RS7");
      /* harmony import */


      var _enums_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! ../../enums.js */
      "yE7X");
      /* harmony import */


      var _symbols_cim_placements_CIMMarkerPlacementHelper_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! ../../../../../../symbols/cim/placements/CIMMarkerPlacementHelper.js */
      "5Bb1");
      /*
      All material copyright ESRI, All Rights Reserved, unless otherwise specified.
      See https://js.arcgis.com/4.18/esri/copyright.txt for details.
      */

      /* harmony default export */


      __webpack_exports__["default"] = function (d) {
        return /*#__PURE__*/function (_d) {
          _inherits(_class, _d);

          var _super = _createSuper(_class);

          function _class() {
            var _this;

            _classCallCheck(this, _class);

            for (var _len = arguments.length, t = new Array(_len), _key = 0; _key < _len; _key++) {
              t[_key] = arguments[_key];
            }

            _this = _super.call.apply(_super, [this].concat(t)), _this.angle = 0, _this.xOffset = 0, _this.yOffset = 0, _this.width = 0, _this.height = 0, _this.boundsType = "square", _this._anchorX = 0, _this._anchorY = 0, _this._computedWidth = 0, _this._computedHeight = 0, _this.geometryType = _enums_js__WEBPACK_IMPORTED_MODULE_8__["WGLGeometryType"].MARKER;
            return _this;
          }

          _createClass(_class, [{
            key: "writeMeshWithGeometry",
            value: function writeMeshWithGeometry(s, e, o, r, p, n) {
              var _this2 = this;

              var u = e.indexVector,
                  a = e.get("geometry"),
                  f = e.getVector("geometry"),
                  c = f.vertexCount,
                  l = c,
                  m = u.length;

              if (Object(_core_maybe_js__WEBPACK_IMPORTED_MODULE_0__["isSome"])(this._markerPlacement)) {
                var t = null != n ? n : o.readLegacyGeometry();

                this._writePlacedMarkers(a, u, c, p, t);
              } else {
                var _t = n ? Object(_layers_graphics_featureConversionUtils_js__WEBPACK_IMPORTED_MODULE_2__["deltaDecodeGeometry"])(Object(_layers_graphics_featureConversionUtils_js__WEBPACK_IMPORTED_MODULE_2__["convertFromGeometry"])(n), 2) : "esriGeometryPolygon" === r ? o.readCentroid() : o.readUnquantizedGeometry();

                if (!_t) return;

                if (_t.isPoint) {
                  var _t$coords = _slicedToArray(_t.coords, 2),
                      _s = _t$coords[0],
                      _e = _t$coords[1];

                  this._writeVertices(a, p, this._getPos(_s, _e)), this._writeIndices(u, c);
                } else _t.forEachVertex(function (t, s) {
                  var e = f.vertexCount;
                  _this2._writeVertices(a, p, _this2._getPos(t, s)), _this2._writeIndices(u, e);
                });
              }

              var _ = e.getVector("geometry").vertexCount - l,
                  d = u.length - m;

              s.writeDisplayRecord(this.geometryType, this._materialKey, l, _, m, d);
            }
          }, {
            key: "_applyTransformation",
            value: function _applyTransformation(t, s) {
              var e = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 0;
              Object(_chunks_mat2d_js__WEBPACK_IMPORTED_MODULE_4__["i"])(t), Object(_chunks_mat2d_js__WEBPACK_IMPORTED_MODULE_4__["t"])(t, t, Object(_chunks_vec2f32_js__WEBPACK_IMPORTED_MODULE_6__["f"])(this.xOffset, -this.yOffset)), this.angle + e !== 0 && Object(_chunks_mat2d_js__WEBPACK_IMPORTED_MODULE_4__["r"])(t, t, .017453292519944444 * (this.angle + e));
              var i = this._computedWidth,
                  h = this._computedHeight,
                  a = (this._anchorX - .5) * i,
                  c = (this._anchorY - .5) * h;
              Object(_chunks_vec2_js__WEBPACK_IMPORTED_MODULE_3__["s"])(s, a, c), Object(_chunks_vec2_js__WEBPACK_IMPORTED_MODULE_3__["t"])(s, s, t), this._offsetUpperLeft = Object(_number_js__WEBPACK_IMPORTED_MODULE_7__["i1616to32"])(16 * s[0], 16 * s[1]), Object(_chunks_vec2_js__WEBPACK_IMPORTED_MODULE_3__["s"])(s, a + i, c), Object(_chunks_vec2_js__WEBPACK_IMPORTED_MODULE_3__["t"])(s, s, t), this._offsetUpperRight = Object(_number_js__WEBPACK_IMPORTED_MODULE_7__["i1616to32"])(16 * s[0], 16 * s[1]), Object(_chunks_vec2_js__WEBPACK_IMPORTED_MODULE_3__["s"])(s, a, c + h), Object(_chunks_vec2_js__WEBPACK_IMPORTED_MODULE_3__["t"])(s, s, t), this._offsetBottomLeft = Object(_number_js__WEBPACK_IMPORTED_MODULE_7__["i1616to32"])(16 * s[0], 16 * s[1]), Object(_chunks_vec2_js__WEBPACK_IMPORTED_MODULE_3__["s"])(s, a + i, c + h), Object(_chunks_vec2_js__WEBPACK_IMPORTED_MODULE_3__["t"])(s, s, t), this._offsetBottomRight = Object(_number_js__WEBPACK_IMPORTED_MODULE_7__["i1616to32"])(16 * s[0], 16 * s[1]);
            }
          }, {
            key: "_writePlacedMarkers",
            value: function _writePlacedMarkers(t, i, h, o, r) {
              var p = _symbols_cim_placements_CIMMarkerPlacementHelper_js__WEBPACK_IMPORTED_MODULE_9__["CIMMarkerPlacementHelper"].getPlacement(r, Object(_core_maybe_js__WEBPACK_IMPORTED_MODULE_0__["unwrap"])(this._markerPlacement), Object(_core_screenUtils_js__WEBPACK_IMPORTED_MODULE_1__["pt2px"])(1));

              if (!p) return;
              var n = Object(_chunks_vec2f32_js__WEBPACK_IMPORTED_MODULE_6__["c"])(),
                  u = Object(_chunks_mat2df32_js__WEBPACK_IMPORTED_MODULE_5__["c"])();
              var f = 0,
                  l = p.next();

              for (; null != l;) {
                l.tx >= -128 && l.tx <= 640 && l.ty >= -128 && l.ty <= 640 && (this._applyTransformation(u, n, l.getAngle() / .017453292519944444), this._writeVertices(t, o, this._getPos(l.tx, l.ty)), this._writeIndices(i, h + f), f += 4), l = p.next();
              }
            }
          }, {
            key: "_getPos",
            value: function _getPos(t, s) {
              return Object(_number_js__WEBPACK_IMPORTED_MODULE_7__["i1616to32"])(Math.round(8 * t), Math.round(8 * s));
            }
          }, {
            key: "_writeVertices",
            value: function _writeVertices(t, s, e) {
              t.push(e), t.push(this._offsetUpperLeft), t.push(this._texUpperLeft), t.push(this._bitestAndDistRatio), t.push(s), t.push(this._fillColor), t.push(this._outlineColor), t.push(this._sizeOutlineWidth), t.push(e), t.push(this._offsetUpperRight), t.push(this._texUpperRight), t.push(this._bitestAndDistRatio), t.push(s), t.push(this._fillColor), t.push(this._outlineColor), t.push(this._sizeOutlineWidth), t.push(e), t.push(this._offsetBottomLeft), t.push(this._texBottomLeft), t.push(this._bitestAndDistRatio), t.push(s), t.push(this._fillColor), t.push(this._outlineColor), t.push(this._sizeOutlineWidth), t.push(e), t.push(this._offsetBottomRight), t.push(this._texBottomRight), t.push(this._bitestAndDistRatio), t.push(s), t.push(this._fillColor), t.push(this._outlineColor), t.push(this._sizeOutlineWidth);
            }
          }, {
            key: "_writeIndices",
            value: function _writeIndices(t, s) {
              var e = s;
              t.push(e + 0), t.push(e + 1), t.push(e + 2), t.push(e + 1), t.push(e + 3), t.push(e + 2);
            }
          }]);

          return _class;
        }(d);
      };
      /***/

    },

    /***/
    "/Hru":
    /*!******************************************************************************!*\
      !*** ./node_modules/@arcgis/core/views/2d/engine/webgl/mesh/VertexVector.js ***!
      \******************************************************************************/

    /*! exports provided: default, VertexVectors */

    /***/
    function Hru(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "VertexVectors", function () {
        return o;
      });
      /* harmony import */


      var _Utils_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ../Utils.js */
      "yN2G");
      /* harmony import */


      var _util_Writer_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ../util/Writer.js */
      "PeSW");
      /* harmony import */


      var _VertexBuffer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./VertexBuffer.js */
      "2vGY");
      /*
      All material copyright ESRI, All Rights Reserved, unless otherwise specified.
      See https://js.arcgis.com/4.18/esri/copyright.txt for details.
      */


      var s = /*#__PURE__*/function () {
        function s(t, e) {
          _classCallCheck(this, s);

          this.data = t, this.stride = e;
        }

        _createClass(s, [{
          key: "vertexCount",
          get: function get() {
            var t = this.stride / 4,
                e = this.data.length / t;
            return e !== (0 | e) && console.debug("Corrupted stride"), e;
          }
        }, {
          key: "transfer",
          value: function transfer(t, e) {
            var r = this.data.buffer();
            t.vertexCount = this.vertexCount, t.data = r, t.stride = this.stride, e.push(r);
          }
        }]);

        return s;
      }();

      var o = /*#__PURE__*/function () {
        function o(r, _o) {
          var n = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : !1;

          _classCallCheck(this, o);

          this.geometryType = r, this.indexVector = new _util_Writer_js__WEBPACK_IMPORTED_MODULE_1__["default"](Uint32Array, 6 * _o), this.namedVectors = {};
          var i = Object(_Utils_js__WEBPACK_IMPORTED_MODULE_0__["getStrides"])(r, n);

          for (var t in i) {
            var _r = i[t];

            var _n2 = void 0;

            switch (_r % 4) {
              case 0:
              case 2:
                _n2 = new _util_Writer_js__WEBPACK_IMPORTED_MODULE_1__["default"](Uint32Array, _r * _o);
                break;

              case 1:
              case 3:
                _n2 = new _util_Writer_js__WEBPACK_IMPORTED_MODULE_1__["default"](Uint8Array, _r * _o);
            }

            this.namedVectors[t] = new s(_n2, _r);
          }
        }

        _createClass(o, [{
          key: "get",
          value: function get(t) {
            return this.namedVectors[t].data;
          }
        }, {
          key: "getVector",
          value: function getVector(t) {
            return this.namedVectors[t];
          }
        }, {
          key: "transfer",
          value: function transfer(t, e) {
            var r = this.indexVector.buffer(),
                s = {};
            e.push(r);

            for (var _t2 in this.namedVectors) {
              var _r2 = this.namedVectors[_t2];
              s[_t2] = {}, _r2.transfer(s[_t2], e);
            }

            t.geometryType = this.geometryType, t.indexBuffer = r, t.namedBuffers = s, this.destroy();
          }
        }, {
          key: "intoBuffers",
          value: function intoBuffers() {
            var t = _VertexBuffer_js__WEBPACK_IMPORTED_MODULE_2__["VertexBuffers"].fromVertexVectors(this);

            return this.destroy(), t;
          }
        }, {
          key: "destroy",
          value: function destroy() {
            this.indexVector = null, this.namedVectors = null;
          }
        }]);

        return o;
      }();
      /* harmony default export */


      __webpack_exports__["default"] = s;
      /***/
    },

    /***/
    "/kT+":
    /*!****************************************************************************************!*\
      !*** ./node_modules/@arcgis/core/views/2d/engine/webgl/mesh/templates/segmentUtils.js ***!
      \****************************************************************************************/

    /*! exports provided: SegmentCursor, pathDivide, pathLength, pathSubdivide, segmentAt, segmentCount, segmentLength, smoothPaths */

    /***/
    function kT(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "SegmentCursor", function () {
        return c;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "pathDivide", function () {
        return u;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "pathLength", function () {
        return a;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "pathSubdivide", function () {
        return o;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "segmentAt", function () {
        return r;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "segmentCount", function () {
        return h;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "segmentLength", function () {
        return d;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "smoothPaths", function () {
        return l;
      });
      /* harmony import */


      var _core_maybe_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ../../../../../../core/maybe.js */
      "srIe");
      /* harmony import */


      var _util_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./util.js */
      "aixI");
      /*
      All material copyright ESRI, All Rights Reserved, unless otherwise specified.
      See https://js.arcgis.com/4.18/esri/copyright.txt for details.
      */


      function r(t, e) {
        return t[e + 1];
      }

      function h(t) {
        return t.length - 1;
      }

      function a(t) {
        var e = 0;

        for (var s = 0; s < h(t); s++) {
          e += d(t, s);
        }

        return e;
      }

      function d(t, e) {
        var s = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 1;

        var _r3 = r(t, e),
            _r4 = _slicedToArray(_r3, 2),
            n = _r4[0],
            i = _r4[1];

        return Math.sqrt(n * n + i * i) * s;
      }

      var c = /*#__PURE__*/function () {
        function c(t, e, s, n, i) {
          _classCallCheck(this, c);

          this._segments = t, this._index = e, this._distance = s, this._xStart = n, this._yStart = i, this._done = !1;
        }

        _createClass(c, [{
          key: "clone",
          value: function clone() {
            return new c(this._segments, this._index, this._distance, this.xStart, this.yStart);
          }
        }, {
          key: "equals",
          value: function equals(t) {
            return this._index === t._index || t._index === this._index - 1 && (0 === this._distance || 1 === t._distance) || t._index === this._index + 1 && (1 === this._distance || 0 === t._distance);
          }
        }, {
          key: "leq",
          value: function leq(t) {
            return this._index < t._index || this._index === t._index && this._distance <= t._distance;
          }
        }, {
          key: "geq",
          value: function geq(t) {
            return this._index > t._index || this._index === t._index && this._distance >= t._distance;
          }
        }, {
          key: "_segment",
          get: function get() {
            return this._segments[this._index + 1];
          }
        }, {
          key: "angle",
          get: function get() {
            var t = this.dy,
                e = (0 * t + -1 * -this.dx) / (1 * this.length);
            var s = Math.acos(e);
            return t > 0 && (s = 2 * Math.PI - s), s;
          }
        }, {
          key: "xStart",
          get: function get() {
            return this._xStart;
          }
        }, {
          key: "yStart",
          get: function get() {
            return this._yStart;
          }
        }, {
          key: "x",
          get: function get() {
            return this.xStart + this.distance * this.dx;
          }
        }, {
          key: "y",
          get: function get() {
            return this.yStart + this.distance * this.dy;
          }
        }, {
          key: "dx",
          get: function get() {
            return this._segment[0];
          }
        }, {
          key: "dy",
          get: function get() {
            return this._segment[1];
          }
        }, {
          key: "xMidpoint",
          get: function get() {
            return this.xStart + .5 * this.dx;
          }
        }, {
          key: "yMidpoint",
          get: function get() {
            return this.yStart + .5 * this.dy;
          }
        }, {
          key: "xEnd",
          get: function get() {
            return this.xStart + this.dx;
          }
        }, {
          key: "yEnd",
          get: function get() {
            return this.yStart + this.dy;
          }
        }, {
          key: "length",
          get: function get() {
            var t = this.dx,
                e = this.dy;
            return Math.sqrt(t * t + e * e);
          }
        }, {
          key: "remainingLength",
          get: function get() {
            return this.length * (1 - this._distance);
          }
        }, {
          key: "backwardLength",
          get: function get() {
            return this.length * this._distance;
          }
        }, {
          key: "distance",
          get: function get() {
            return this._distance;
          }
        }, {
          key: "done",
          get: function get() {
            return this._done;
          }
        }, {
          key: "hasPrev",
          value: function hasPrev() {
            return this._index - 1 >= 0;
          }
        }, {
          key: "hasNext",
          value: function hasNext() {
            return this._index + 1 < h(this._segments);
          }
        }, {
          key: "next",
          value: function next() {
            return this.hasNext() ? (this._xStart += this.dx, this._yStart += this.dy, this._distance = 0, this._index += 1, this) : null;
          }
        }, {
          key: "prev",
          value: function prev() {
            return this.hasPrev() ? (this._index -= 1, this._xStart -= this.dx, this._yStart -= this.dy, this._distance = 1, this) : (this._done = !0, null);
          }
        }, {
          key: "_seekBackwards",
          value: function _seekBackwards(t, e) {
            var s = this.backwardLength;
            if (t <= s) return this._distance = (s - t) / this.length, this;
            var n = this.backwardLength;

            for (; this.prev();) {
              if (n + this.length > t) return this._seekBackwards(t - n);
              n += this.length;
            }

            return this._distance = 0, e ? this : null;
          }
        }, {
          key: "seek",
          value: function seek(t) {
            var e = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : !1;
            if (t < 0) return this._seekBackwards(Math.abs(t), e);
            if (t <= this.remainingLength) return this._distance = (this.backwardLength + t) / this.length, this;
            var s = this.remainingLength;

            for (; this.next();) {
              if (s + this.length > t) return this.seek(t - s, e);
              s += this.length;
            }

            return this._distance = 1, e ? this : null;
          }
        }], [{
          key: "create",
          value: function create(t) {
            return new c(t, 0, 0, t[0][0], t[0][1]);
          }
        }]);

        return c;
      }();

      function u(t, e, s) {
        var n = a(t),
            i = c.create(t),
            r = n / 2,
            h = (n - e) / 2,
            d = Math.floor(h / e),
            u = r - d * e;
        i.seek(u);

        for (var _t3 = -d; _t3 <= d; _t3++) {
          i.x < 512 && i.x >= 0 && i.y < 512 && i.y >= 0 && s(i.clone(), _t3, r + _t3 * e, n), i.seek(e);
        }
      }

      function o(t, e, s) {
        _(s, e, a(t), c.create(t), 0);
      }

      function _(s, n, i, r, h) {
        if (i < n) return;
        var a = r.clone().seek(i / 2);
        if (Object(_core_maybe_js__WEBPACK_IMPORTED_MODULE_0__["isNone"])(a)) return;
        s(a.clone(), i, h), i = (i - n) / 2;
        var d = Object(_core_maybe_js__WEBPACK_IMPORTED_MODULE_0__["unwrap"])(a.seek(n / 2));
        _(s, n, i, r, h + 1), _(s, n, i, d, h + 1);
      }

      function l(t, e) {
        var s = e;

        for (var _e2 = 0; _e2 < t.length; _e2++) {
          var n = t[_e2];
          var _i2 = [];

          _i2.push(n[0]);

          for (var _t4 = 1; _t4 < n.length; _t4++) {
            var _i3 = _slicedToArray(_i2[_t4 - 1], 2),
                _e3 = _i3[0],
                _s2 = _i3[1];

            _e3 += n[_t4][0], _s2 += n[_t4][1], _i2.push([_e3, _s2]);
          }

          g(_i2, s);
          var _r5 = [];

          _r5.push(_i2[0]);

          for (var _t5 = 1; _t5 < _i2.length; _t5++) {
            var _i4 = _slicedToArray(_i2[_t5 - 1], 2),
                _e4 = _i4[0],
                _s3 = _i4[1],
                _i2$_t = _slicedToArray(_i2[_t5], 2),
                _n3 = _i2$_t[0],
                _h = _i2$_t[1],
                _a = Math.round(_n3 - _e4),
                _d2 = Math.round(_h - _s3);

            _r5.push([_a, _d2]);
          }

          t[_e2] = _r5, n = _r5;
        }

        return t;
      }

      function g(t, e) {
        var r = 1e-6;
        if (e <= 0) return;
        var h = t.length;
        if (h < 3) return;
        var a = [];
        var d = 0;
        a.push(0);

        for (var _e5 = 1; _e5 < h; _e5++) {
          d += Object(_util_js__WEBPACK_IMPORTED_MODULE_1__["dist"])(t[_e5], t[_e5 - 1]), a.push(d);
        }

        e = Math.min(e, .2 * d);
        var c = [];
        c.push(t[0][0]), c.push(t[0][1]);

        var u = t[h - 1][0],
            o = t[h - 1][1],
            _ = Object(_util_js__WEBPACK_IMPORTED_MODULE_1__["sub"])([0, 0], t[0], t[1]);

        Object(_util_js__WEBPACK_IMPORTED_MODULE_1__["normalize"])(_), t[0][0] += e * _[0], t[0][1] += e * _[1], Object(_util_js__WEBPACK_IMPORTED_MODULE_1__["sub"])(_, t[h - 1], t[h - 2]), Object(_util_js__WEBPACK_IMPORTED_MODULE_1__["normalize"])(_), t[h - 1][0] += e * _[0], t[h - 1][1] += e * _[1];

        for (var _t6 = 1; _t6 < h; _t6++) {
          a[_t6] += e;
        }

        a[h - 1] += e;
        var l = .5 * e;

        for (var s = 1; s < h - 1; s++) {
          var n = 0,
              _i5 = 0,
              _d3 = 0;

          for (var _h2 = s - 1; _h2 >= 0 && !(a[_h2 + 1] < a[s] - l); _h2--) {
            var _c = l + a[_h2 + 1] - a[s],
                _u = a[_h2 + 1] - a[_h2],
                _o2 = a[s] - a[_h2] < l ? 1 : _c / _u;

            if (Math.abs(_o2) < r) break;

            var _2 = _o2 * _o2,
                _g = _o2 * _c - .5 * _2 * _u,
                x = _o2 * _u / e,
                f = t[_h2 + 1],
                y = t[_h2][0] - f[0],
                p = t[_h2][1] - f[1];

            n += x / _g * (f[0] * _o2 * _c + .5 * _2 * (_c * y - _u * f[0]) - _2 * _o2 * _u * y / 3), _i5 += x / _g * (f[1] * _o2 * _c + .5 * _2 * (_c * p - _u * f[1]) - _2 * _o2 * _u * p / 3), _d3 += x;
          }

          for (var _c2 = s + 1; _c2 < h && !(a[_c2 - 1] > a[s] + l); _c2++) {
            var _h3 = l - a[_c2 - 1] + a[s],
                _u2 = a[_c2] - a[_c2 - 1],
                _o3 = a[_c2] - a[s] < l ? 1 : _h3 / _u2;

            if (Math.abs(_o3) < r) break;

            var _3 = _o3 * _o3,
                _g2 = _o3 * _h3 - .5 * _3 * _u2,
                _x = _o3 * _u2 / e,
                _f = t[_c2 - 1],
                _y = t[_c2][0] - _f[0],
                _p = t[_c2][1] - _f[1];

            n += _x / _g2 * (_f[0] * _o3 * _h3 + .5 * _3 * (_h3 * _y - _u2 * _f[0]) - _3 * _o3 * _u2 * _y / 3), _i5 += _x / _g2 * (_f[1] * _o3 * _h3 + .5 * _3 * (_h3 * _p - _u2 * _f[1]) - _3 * _o3 * _u2 * _p / 3), _d3 += _x;
          }

          c.push(n / _d3), c.push(_i5 / _d3);
        }

        c.push(u), c.push(o);

        for (var _e6 = 0, _s4 = 0; _e6 < h; _e6++) {
          t[_e6][0] = c[_s4++], t[_e6][1] = c[_s4++];
        }
      }
      /***/

    },

    /***/
    "5Bb1":
    /*!**************************************************************************************!*\
      !*** ./node_modules/@arcgis/core/symbols/cim/placements/CIMMarkerPlacementHelper.js ***!
      \**************************************************************************************/

    /*! exports provided: CIMMarkerPlacementHelper */

    /***/
    function Bb1(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "CIMMarkerPlacementHelper", function () {
        return e;
      });
      /* harmony import */


      var _CIMCursor_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ../CIMCursor.js */
      "tqcG");
      /* harmony import */


      var _CIMOperators_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ../CIMOperators.js */
      "k0QX");
      /*
      All material copyright ESRI, All Rights Reserved, unless otherwise specified.
      See https://js.arcgis.com/4.18/esri/copyright.txt for details.
      */


      var e = /*#__PURE__*/function () {
        function e() {
          _classCallCheck(this, e);
        }

        _createClass(e, null, [{
          key: "getPlacement",
          value: function getPlacement(_e7, o, s) {
            var c = Object(_CIMOperators_js__WEBPACK_IMPORTED_MODULE_1__["getPlacementOperator"])(o);
            if (!c) return null;
            var n = Object(_CIMCursor_js__WEBPACK_IMPORTED_MODULE_0__["cloneAndDecodeGeometry"])(_e7);
            return c.execute(n, o, s);
          }
        }]);

        return e;
      }();
      /***/

    },

    /***/
    "916D":
    /*!*******************************************************************************************!*\
      !*** ./node_modules/@arcgis/core/views/2d/engine/webgl/mesh/templates/WGLMeshTemplate.js ***!
      \*******************************************************************************************/

    /*! exports provided: default */

    /***/
    function D(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony import */


      var _core_maybe_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ../../../../../../core/maybe.js */
      "srIe");
      /* harmony import */


      var _geometry_support_jsonUtils_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ../../../../../../geometry/support/jsonUtils.js */
      "qatw");
      /* harmony import */


      var _enums_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ../../enums.js */
      "yE7X");
      /* harmony import */


      var _symbols_cim_effects_CIMEffectHelper_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ../../../../../../symbols/cim/effects/CIMEffectHelper.js */
      "XbuD");
      /*
      All material copyright ESRI, All Rights Reserved, unless otherwise specified.
      See https://js.arcgis.com/4.18/esri/copyright.txt for details.
      */

      /* harmony default export */


      __webpack_exports__["default"] = /*#__PURE__*/function () {
        function _class2() {
          _classCallCheck(this, _class2);
        }

        _createClass(_class2, [{
          key: "needsPixelBuffer",
          get: function get() {
            return !!this.effects || this.geometryType === _enums_js__WEBPACK_IMPORTED_MODULE_2__["WGLGeometryType"].MARKER || this.geometryType === _enums_js__WEBPACK_IMPORTED_MODULE_2__["WGLGeometryType"].TEXT || this.geometryType === _enums_js__WEBPACK_IMPORTED_MODULE_2__["WGLGeometryType"].LABEL;
          }
        }, {
          key: "writeMesh",
          value: function writeMesh(r, i, o, f, m) {
            if (Object(_core_maybe_js__WEBPACK_IMPORTED_MODULE_0__["isNone"])(this.effects)) return this.writeMeshWithGeometry(r, i, o, f, m);

            var h = _symbols_cim_effects_CIMEffectHelper_js__WEBPACK_IMPORTED_MODULE_3__["CIMEffectHelper"].executeEffects(this.effects, o.readLegacyGeometry());

            var y = _symbols_cim_effects_CIMEffectHelper_js__WEBPACK_IMPORTED_MODULE_3__["CIMEffectHelper"].next(h);

            for (; y;) {
              this.writeMeshWithGeometry(r, i, o, Object(_geometry_support_jsonUtils_js__WEBPACK_IMPORTED_MODULE_1__["getJsonType"])(y), m, y), y = _symbols_cim_effects_CIMEffectHelper_js__WEBPACK_IMPORTED_MODULE_3__["CIMEffectHelper"].next(h);
            }
          }
        }, {
          key: "writeMeshWithGeometry",
          value: function writeMeshWithGeometry(e, t, r, s, i, o) {}
        }, {
          key: "bindFeature",
          value: function bindFeature(e, t, r) {}
        }]);

        return _class2;
      }();
      /***/

    },

    /***/
    "9SkJ":
    /*!*******************************************************************************************!*\
      !*** ./node_modules/@arcgis/core/views/2d/engine/webgl/mesh/templates/WGLLineTemplate.js ***!
      \*******************************************************************************************/

    /*! exports provided: default */

    /***/
    function SkJ(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony import */


      var _core_Logger_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ../../../../../../core/Logger.js */
      "6S2I");
      /* harmony import */


      var _core_screenUtils_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ../../../../../../core/screenUtils.js */
      "qRWG");
      /* harmony import */


      var _definitions_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ../../definitions.js */
      "jIHu");
      /* harmony import */


      var _number_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ../../number.js */
      "0RS7");
      /* harmony import */


      var _materialKey_MaterialKey_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ../../materialKey/MaterialKey.js */
      "GMaR");
      /* harmony import */


      var _color_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ../../color.js */
      "qaIE");
      /* harmony import */


      var _Utils_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ../../Utils.js */
      "yN2G");
      /* harmony import */


      var _util_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! ./util.js */
      "aixI");
      /* harmony import */


      var _WGLMeshTemplate_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! ./WGLMeshTemplate.js */
      "916D");
      /* harmony import */


      var _WGLBaseLineTemplate_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! ./WGLBaseLineTemplate.js */
      "bzZf");
      /*
      All material copyright ESRI, All Rights Reserved, unless otherwise specified.
      See https://js.arcgis.com/4.18/esri/copyright.txt for details.
      */


      var f = _core_Logger_js__WEBPACK_IMPORTED_MODULE_0__["default"].getLogger("esri.views.2d.engine.webgl.WGLLineTemplate");

      var p = /*#__PURE__*/function (_Object) {
        _inherits(p, _Object);

        var _super2 = _createSuper(p);

        function p(e, t, i, r, o, l, n, a, c, h, f, _p2, d, u, L, y) {
          var _this3;

          _classCallCheck(this, p);

          _this3 = _super2.call(this);

          var _ = _materialKey_MaterialKey_js__WEBPACK_IMPORTED_MODULE_4__["LineMaterialKey"].load(e);

          t && (_.sdf = t.sdf, _.pattern = !0, _.textureBinding = t.textureBinding), _this3._capType = r, _this3._joinType = o, _this3._miterLimitCosine = Object(_util_js__WEBPACK_IMPORTED_MODULE_7__["getLimitCosine"])(l), _this3.tessellationProperties._fillColor = n, _this3.tessellationProperties._tl = a, _this3.tessellationProperties._br = c, _this3._hasPattern = h, _this3._isDashed = f, _this3._joinOnUTurn = L, _this3._isColorLocked = _p2, _this3._zOrder = u, _this3.effects = y, _this3._materialKey = _.data, _this3.tessellationProperties._bitset = _p2 ? 1 : 0, _this3.tessellationProperties._halfWidth = .5 * i, _this3.tessellationProperties._halfReferenceWidth = .5 * d, _this3._initializeTessellator(!1);
          return _this3;
        }

        _createClass(p, null, [{
          key: "fromCIMLine",
          value: function fromCIMLine(e, s, o) {
            var n = e.color,
                a = e.scaleFactor || 1,
                m = e.isDashed;
            var c = e.cap;
            m && 1 === c && (c = 2);
            var h = e.join,
                f = Object(_core_screenUtils_js__WEBPACK_IMPORTED_MODULE_1__["pt2px"])(e.width) * a,
                d = Object(_core_screenUtils_js__WEBPACK_IMPORTED_MODULE_1__["pt2px"])(e.referenceWidth),
                u = Object(_core_screenUtils_js__WEBPACK_IMPORTED_MODULE_1__["pt2px"])(e.miterLimit),
                L = n && Object(_color_js__WEBPACK_IMPORTED_MODULE_5__["premultiplyAlphaRGBA"])(n) || 0;
            if (!s) return new p(e.materialKey, s, f, c, h, u, L, 0, 0, !1, m, e.colorLocked, d, e.zOrder, o, e.effects);
            var y = s.rect,
                _ = s.width,
                j = s.height,
                S = y.x + _definitions_js__WEBPACK_IMPORTED_MODULE_2__["SPRITE_PADDING"],
                g = y.y + _definitions_js__WEBPACK_IMPORTED_MODULE_2__["SPRITE_PADDING"],
                w = S + _,
                P = g + j,
                x = Object(_number_js__WEBPACK_IMPORTED_MODULE_3__["i1616to32"])(S, g),
                K = Object(_number_js__WEBPACK_IMPORTED_MODULE_3__["i1616to32"])(w, P);
            return new p(e.materialKey, s, f, c, h, u, L, x, K, !0, m, e.colorLocked, d, e.zOrder, o, e.effects);
          }
        }, {
          key: "fromSimpleLine",
          value: function fromSimpleLine(e, s, l) {
            var m = e.color,
                c = "esriSLSSolid" !== e.style && "esriSLSNull" !== e.style,
                h = Object(_Utils_js__WEBPACK_IMPORTED_MODULE_6__["getCapType"])(e.cap || "round", c),
                f = Object(_Utils_js__WEBPACK_IMPORTED_MODULE_6__["getJoinType"])(e.join || "round");
            var d = m && "esriSLSNull" !== e.style && Object(_color_js__WEBPACK_IMPORTED_MODULE_5__["premultiplyAlphaRGBAArray"])(m) || 0;
            "esriSLSNull" === e.style && (d = 0);
            var u = Object(_core_screenUtils_js__WEBPACK_IMPORTED_MODULE_1__["pt2px"])(e.width),
                L = e.miterLimit;
            if (!s) return new p(e.materialKey, s, u, h, f, L, d, 0, 0, !1, c, !1, u, 0, l, null);
            var y = s.rect,
                _ = s.width,
                j = s.height,
                S = y.x + _definitions_js__WEBPACK_IMPORTED_MODULE_2__["SPRITE_PADDING"],
                g = y.y + _definitions_js__WEBPACK_IMPORTED_MODULE_2__["SPRITE_PADDING"],
                w = S + _,
                P = g + j,
                x = Object(_number_js__WEBPACK_IMPORTED_MODULE_3__["i1616to32"])(S, g),
                K = Object(_number_js__WEBPACK_IMPORTED_MODULE_3__["i1616to32"])(w, P);
            return new p(e.materialKey, s, u, h, f, L, d, x, K, !0, c, !1, u, 0, l, null);
          }
        }, {
          key: "fromPictureLineSymbol",
          value: function fromPictureLineSymbol(e, t, i, r) {
            return f.error("PictureLineSymbol support does not exist!"), null;
          }
        }]);

        return p;
      }(Object(_WGLBaseLineTemplate_js__WEBPACK_IMPORTED_MODULE_9__["default"])(_WGLMeshTemplate_js__WEBPACK_IMPORTED_MODULE_8__["default"]));
      /* harmony default export */


      __webpack_exports__["default"] = p;
      /***/
    },

    /***/
    "Bcjy":
    /*!****************************************************************************************!*\
      !*** ./node_modules/@arcgis/core/views/2d/engine/webgl/mesh/factories/matcherUtils.js ***!
      \****************************************************************************************/

    /*! exports provided: createMatcher */

    /***/
    function Bcjy(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "createMatcher", function () {
        return s;
      });
      /* harmony import */


      var _core_Logger_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ../../../../../../core/Logger.js */
      "6S2I");
      /* harmony import */


      var _core_Error_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ../../../../../../core/Error.js */
      "zlDU");
      /* harmony import */


      var _util_Matcher_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ../../util/Matcher.js */
      "YB6V");
      /*
      All material copyright ESRI, All Rights Reserved, unless otherwise specified.
      See https://js.arcgis.com/4.18/esri/copyright.txt for details.
      */


      var a = _core_Logger_js__WEBPACK_IMPORTED_MODULE_0__["default"].getLogger("esri/views/2d/engine/webgl/mesh/factories/matcherUtils");

      function s(_x2, _x3, _x4) {
        return _s5.apply(this, arguments);
      }
      /***/


      function _s5() {
        _s5 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(e, s, c) {
          return regeneratorRuntime.wrap(function _callee$(_context) {
            while (1) {
              switch (_context.prev = _context.next) {
                case 0:
                  _context.t0 = e.type;
                  _context.next = _context.t0 === "simple" ? 3 : _context.t0 === "map" ? 4 : _context.t0 === "interval" ? 5 : _context.t0 === "dictionary" ? 6 : 7;
                  break;

                case 3:
                  return _context.abrupt("return", _util_Matcher_js__WEBPACK_IMPORTED_MODULE_2__["FeatureMatcher"].fromBasicRenderer(e, s, c));

                case 4:
                  return _context.abrupt("return", _util_Matcher_js__WEBPACK_IMPORTED_MODULE_2__["MapMatcher"].fromUVRenderer(e, s, c));

                case 5:
                  return _context.abrupt("return", _util_Matcher_js__WEBPACK_IMPORTED_MODULE_2__["IntervalMatcher"].fromCBRenderer(e, s, c));

                case 6:
                  return _context.abrupt("return", _util_Matcher_js__WEBPACK_IMPORTED_MODULE_2__["DictionaryMatcher"].fromDictionaryRenderer(e, s, c));

                case 7:
                  return _context.abrupt("return", (a.error(new _core_Error_js__WEBPACK_IMPORTED_MODULE_1__["default"]("mapview-mesh:invalid-renderer", "Unable to handle unknown renderer type")), null));

                case 8:
                case "end":
                  return _context.stop();
              }
            }
          }, _callee);
        }));
        return _s5.apply(this, arguments);
      }
    },

    /***/
    "C/3w":
    /*!***********************************************************************************************!*\
      !*** ./node_modules/@arcgis/core/views/2d/engine/webgl/mesh/templates/WGLBaseFillTemplate.js ***!
      \***********************************************************************************************/

    /*! exports provided: default */

    /***/
    function C3w(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony import */


      var _layers_graphics_featureConversionUtils_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ../../../../../../layers/graphics/featureConversionUtils.js */
      "ZlUD");
      /* harmony import */


      var _number_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ../../number.js */
      "0RS7");
      /* harmony import */


      var _enums_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ../../enums.js */
      "yE7X");
      /* harmony import */


      var _materialKey_MaterialKey_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ../../materialKey/MaterialKey.js */
      "GMaR");
      /* harmony import */


      var _templateUtils_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ./templateUtils.js */
      "DiuL");
      /*
      All material copyright ESRI, All Rights Reserved, unless otherwise specified.
      See https://js.arcgis.com/4.18/esri/copyright.txt for details.
      */

      /* harmony default export */


      __webpack_exports__["default"] = function (l) {
        return /*#__PURE__*/function (_l) {
          _inherits(_class3, _l);

          var _super3 = _createSuper(_class3);

          function _class3() {
            var _this4;

            _classCallCheck(this, _class3);

            for (var _len2 = arguments.length, t = new Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
              t[_key2] = arguments[_key2];
            }

            _this4 = _super3.call.apply(_super3, [this].concat(t)), _this4.forceLibtess = !1, _this4.geometryType = _enums_js__WEBPACK_IMPORTED_MODULE_2__["WGLGeometryType"].FILL;
            return _this4;
          }

          _createClass(_class3, [{
            key: "writeMeshWithGeometry",
            value: function writeMeshWithGeometry(r, s, l, m, u, n) {
              var p = _materialKey_MaterialKey_js__WEBPACK_IMPORTED_MODULE_3__["FillMaterialKey"].load(this._materialKey),
                  d = s.indexVector,
                  y = s.getVector("geometry"),
                  c = y.vertexCount,
                  f = d.length;

              var g = n ? Object(_layers_graphics_featureConversionUtils_js__WEBPACK_IMPORTED_MODULE_0__["deltaDecodeGeometry"])(Object(_layers_graphics_featureConversionUtils_js__WEBPACK_IMPORTED_MODULE_0__["convertFromGeometry"])(n), 2) : l.readUnquantizedGeometry();
              if (!g) return;
              if (g = Object(_templateUtils_js__WEBPACK_IMPORTED_MODULE_4__["clipMarshall"])(g), !g) return;
              var x = g.coords;
              !this.forceLibtess && Object(_templateUtils_js__WEBPACK_IMPORTED_MODULE_4__["triangulate"])(d, g, c) || (x = [], Object(_templateUtils_js__WEBPACK_IMPORTED_MODULE_4__["triangulateLibtess"])(x, d, g, c)), this._write(y, l, u, x, p);
              var b = y.vertexCount - c,
                  j = d.length - f;
              r.writeDisplayRecord(this.geometryType, this._materialKey, c, b, f, j);
            }
          }, {
            key: "_write",
            value: function _write(t, e, s, a, i) {
              for (var o = 0; o < a.length; o += 2) {
                var h = Object(_number_js__WEBPACK_IMPORTED_MODULE_1__["i1616to32"])(1 * a[o], 1 * a[o + 1]);
                t.data.push(h), t.data.push(s), i.dotDensity ? t.data.writeF32(1 / Math.abs(e.readGeometryArea())) : (t.data.push(this.fillColor), t.data.push(this.tl), t.data.push(this.br), t.data.push(this.aux1), t.data.push(this.aux2), t.data.push(this.aux3));
              }
            }
          }]);

          return _class3;
        }(l);
      };
      /***/

    },

    /***/
    "C8N4":
    /*!************************************************************************!*\
      !*** ./node_modules/@arcgis/core/views/2d/engine/webgl/mesh/bufcut.js ***!
      \************************************************************************/

    /*! exports provided: bufcut */

    /***/
    function C8N4(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "bufcut", function () {
        return e;
      });
      /*
      All material copyright ESRI, All Rights Reserved, unless otherwise specified.
      See https://js.arcgis.com/4.18/esri/copyright.txt for details.
      */


      function e(e, r, i, u, o, f, p) {
        g = 0;
        var c = (u - i) * f,
            v = o && o.length,
            s = v ? (o[0] - i) * f : c;
        var d,
            h,
            a,
            w,
            z,
            M = n(r, i, u, 0, s, f, !0);

        if (M && M.next !== M.prev) {
          if (v && (M = function (e, x, r, i, u, o) {
            var f = new Array();

            for (var _t7 = 0, _u3 = i.length; _t7 < _u3; _t7++) {
              var _y2 = n(e, x, r, i[_t7] * o, _t7 < _u3 - 1 ? i[_t7 + 1] * o : r * o, o, !1);

              _y2 === _y2.next && (_y2.steiner = !0), f.push(l(_y2));
            }

            f.sort(Z);

            for (var _i6 = 0, _f2 = f; _i6 < _f2.length; _i6++) {
              var _e8 = _f2[_i6];
              y(_e8, u), u = t(u, u.next);
            }

            return u;
          }(r, i, u, o, M, f)), c > 80 * f) {
            d = a = r[0 + i * f], h = w = r[1 + i * f];

            for (var _e9 = f; _e9 < s; _e9 += f) {
              var _n4 = r[_e9 + i * f],
                  _t8 = r[_e9 + 1 + i * f];
              d = Math.min(d, _n4), h = Math.min(h, _t8), a = Math.max(a, _n4), w = Math.max(w, _t8);
            }

            z = Math.max(a - d, w - h), z = 0 !== z ? 1 / z : 0;
          }

          x(M, e, f, d, h, z, p, 0);
        }
      }

      function n(e, n, t, x, r, i, l) {
        var y;
        if (l === function (e, n, t, x, r, i) {
          var u = 0;

          for (var _t9 = x, _o4 = r - i; _t9 < r; _t9 += i) {
            u += (e[_o4 + n * i] - e[_t9 + n * i]) * (e[_t9 + 1 + n * i] + e[_o4 + 1 + n * i]), _o4 = _t9;
          }

          return u;
        }(e, n, 0, x, r, i) > 0) for (var _t10 = x; _t10 < r; _t10 += i) {
          y = u(_t10 + n * i, e[_t10 + n * i], e[_t10 + 1 + n * i], y);
        } else for (var _t11 = r - i; _t11 >= x; _t11 -= i) {
          y = u(_t11 + n * i, e[_t11 + n * i], e[_t11 + 1 + n * i], y);
        }
        return y && h(y, y.next) && (o(y), y = y.next), y;
      }

      function t(e) {
        var n = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : e;
        if (!e) return e;
        var t,
            x = e;

        do {
          if (t = !1, x.steiner || !h(x, x.next) && 0 !== p(x.prev, x, x.next)) x = x.next;else {
            if (o(x), x = n = x.prev, x === x.next) break;
            t = !0;
          }
        } while (t || x !== n);

        return n;
      }

      function x(e, n, u, l, y, p, c, v) {
        if (!e) return;
        !v && p && (e = f(e, l, y, p));
        var s = e;

        for (; e.prev !== e.next;) {
          var _f3 = e.prev,
              _d4 = e.next;
          if (p ? i(e, l, y, p) : r(e)) n.push(_f3.index / u + c), n.push(e.index / u + c), n.push(_d4.index / u + c), o(e), e = _d4.next, s = _d4.next;else if ((e = _d4) === s) {
            v ? 1 === v ? x(e = a(e, n, u, c), n, u, l, y, p, c, 2) : 2 === v && w(e, n, u, l, y, p, c) : x(t(e), n, u, l, y, p, c, 1);
            break;
          }
        }
      }

      function r(e) {
        var n = e.prev,
            t = e,
            x = e.next;
        if (p(n, t, x) >= 0) return !1;
        var r = e.next.next;
        var i = r;
        var u = 0;

        for (; r !== e.prev && (0 === u || r !== i);) {
          if (u++, v(n.x, n.y, t.x, t.y, x.x, x.y, r.x, r.y) && p(r.prev, r, r.next) >= 0) return !1;
          r = r.next;
        }

        return !0;
      }

      function i(e, n, t, x) {
        var r = e.prev,
            i = e,
            u = e.next;
        if (p(r, i, u) >= 0) return !1;
        var o = r.x < i.x ? r.x < u.x ? r.x : u.x : i.x < u.x ? i.x : u.x,
            l = r.y < i.y ? r.y < u.y ? r.y : u.y : i.y < u.y ? i.y : u.y,
            y = r.x > i.x ? r.x > u.x ? r.x : u.x : i.x > u.x ? i.x : u.x,
            f = r.y > i.y ? r.y > u.y ? r.y : u.y : i.y > u.y ? i.y : u.y,
            c = d(o, l, n, t, x),
            s = d(y, f, n, t, x);
        var h = e.prevZ,
            Z = e.nextZ;

        for (; h && h.z >= c && Z && Z.z <= s;) {
          if (h !== e.prev && h !== e.next && v(r.x, r.y, i.x, i.y, u.x, u.y, h.x, h.y) && p(h.prev, h, h.next) >= 0) return !1;
          if (h = h.prevZ, Z !== e.prev && Z !== e.next && v(r.x, r.y, i.x, i.y, u.x, u.y, Z.x, Z.y) && p(Z.prev, Z, Z.next) >= 0) return !1;
          Z = Z.nextZ;
        }

        for (; h && h.z >= c;) {
          if (h !== e.prev && h !== e.next && v(r.x, r.y, i.x, i.y, u.x, u.y, h.x, h.y) && p(h.prev, h, h.next) >= 0) return !1;
          h = h.prevZ;
        }

        for (; Z && Z.z <= s;) {
          if (Z !== e.prev && Z !== e.next && v(r.x, r.y, i.x, i.y, u.x, u.y, Z.x, Z.y) && p(Z.prev, Z, Z.next) >= 0) return !1;
          Z = Z.nextZ;
        }

        return !0;
      }

      function u(e, n, t, x) {
        var r = m.create(e, n, t);
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

      function y(e, n) {
        if (n = function (e, n) {
          var t = n;
          var x = e.x,
              r = e.y;
          var i,
              u = -1 / 0;

          do {
            if (r <= t.y && r >= t.next.y && t.next.y !== t.y) {
              var _e10 = t.x + (r - t.y) * (t.next.x - t.x) / (t.next.y - t.y);

              if (_e10 <= x && _e10 > u) {
                if (u = _e10, _e10 === x) {
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
              y = i.y;
          var f,
              p = 1 / 0;
          t = i.next;

          for (; t !== o;) {
            x >= t.x && t.x >= l && x !== t.x && v(r < y ? x : u, r, l, y, r < y ? u : x, r, t.x, t.y) && (f = Math.abs(r - t.y) / (x - t.x), (f < p || f === p && t.x > i.x) && s(t, e) && (i = t, p = f)), t = t.next;
          }

          return i;
        }(e, n)) {
          var _x5 = M(n, e);

          t(_x5, _x5.next);
        }
      }

      function f(e, n, t, x) {
        for (var _r6; _r6 !== e; _r6 = _r6.next) {
          if (_r6 = _r6 || e, null === _r6.z && (_r6.z = d(_r6.x, _r6.y, n, t, x)), _r6.prev.next !== _r6 || _r6.next.prev !== _r6) return _r6.prev.next = _r6, _r6.next.prev = _r6, f(e, n, t, x);
          _r6.prevZ = _r6.prev, _r6.nextZ = _r6.next;
        }

        return e.prevZ.nextZ = null, e.prevZ = null, function (e) {
          var n,
              t = 1;

          for (;;) {
            var _x6 = void 0,
                _r7 = e;

            e = null, n = null;
            var _i7 = 0;

            for (; _r7;) {
              _i7++, _x6 = _r7;
              var _u4 = 0;

              for (; _u4 < t && _x6; _u4++) {
                _x6 = _x6.nextZ;
              }

              var _o5 = t;

              for (; _u4 > 0 || _o5 > 0 && _x6;) {
                var _t12 = void 0;

                0 === _u4 ? (_t12 = _x6, _x6 = _x6.nextZ, _o5--) : 0 !== _o5 && _x6 ? _r7.z <= _x6.z ? (_t12 = _r7, _r7 = _r7.nextZ, _u4--) : (_t12 = _x6, _x6 = _x6.nextZ, _o5--) : (_t12 = _r7, _r7 = _r7.nextZ, _u4--), n ? n.nextZ = _t12 : e = _t12, _t12.prevZ = n, n = _t12;
              }

              _r7 = _x6;
            }

            if (n.nextZ = null, t *= 2, _i7 < 2) return e;
          }
        }(e);
      }

      function p(e, n, t) {
        return (n.y - e.y) * (t.x - n.x) - (n.x - e.x) * (t.y - n.y);
      }

      function c(e, n, t, x) {
        return !!(h(e, n) && h(t, x) || h(e, x) && h(t, n)) || p(e, n, t) > 0 != p(e, n, x) > 0 && p(t, x, e) > 0 != p(t, x, n) > 0;
      }

      function v(e, n, t, x, r, i, u, o) {
        return (r - u) * (n - o) - (e - u) * (i - o) >= 0 && (e - u) * (x - o) - (t - u) * (n - o) >= 0 && (t - u) * (i - o) - (r - u) * (x - o) >= 0;
      }

      function s(e, n) {
        return p(e.prev, e, e.next) < 0 ? p(e, n, e.next) >= 0 && p(e, e.prev, n) >= 0 : p(e, n, e.prev) < 0 || p(e, e.next, n) < 0;
      }

      function d(e, n, t, x, r) {
        return (e = 1431655765 & ((e = 858993459 & ((e = 252645135 & ((e = 16711935 & ((e = 32767 * (e - t) * r) | e << 8)) | e << 4)) | e << 2)) | e << 1)) | (n = 1431655765 & ((n = 858993459 & ((n = 252645135 & ((n = 16711935 & ((n = 32767 * (n - x) * r) | n << 8)) | n << 4)) | n << 2)) | n << 1)) << 1;
      }

      function h(e, n) {
        return e.x === n.x && e.y === n.y;
      }

      function Z(e, n) {
        return e.x - n.x;
      }

      function a(e, n, t, x) {
        var r = e;

        do {
          var _i8 = r.prev,
              _u5 = r.next.next;
          !h(_i8, _u5) && c(_i8, r, r.next, _u5) && s(_i8, _u5) && s(_u5, _i8) && (n.push(_i8.index / t + x), n.push(r.index / t + x), n.push(_u5.index / t + x), o(r), o(r.next), r = e = _u5), r = r.next;
        } while (r !== e);

        return r;
      }

      function w(e, n, r, i, u, o, l) {
        var y = e;

        do {
          var _e11 = y.next.next;

          for (; _e11 !== y.prev;) {
            if (y.index !== _e11.index && z(y, _e11)) {
              var _f4 = M(y, _e11);

              return y = t(y, y.next), _f4 = t(_f4, _f4.next), x(y, n, r, i, u, o, l, 0), void x(_f4, n, r, i, u, o, l, 0);
            }

            _e11 = _e11.next;
          }

          y = y.next;
        } while (y !== e);
      }

      function z(e, n) {
        return e.next.index !== n.index && e.prev.index !== n.index && !function (e, n) {
          var t = e;

          do {
            if (t.index !== e.index && t.next.index !== e.index && t.index !== n.index && t.next.index !== n.index && c(t, t.next, e, n)) return !0;
            t = t.next;
          } while (t !== e);

          return !1;
        }(e, n) && s(e, n) && s(n, e) && function (e, n) {
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

      function M(e, n) {
        var t = m.create(e.index, e.x, e.y),
            x = m.create(n.index, n.x, n.y),
            r = e.next,
            i = n.prev;
        return e.next = n, n.prev = e, t.next = r, r.prev = t, x.next = t, t.prev = x, i.next = x, x.prev = i, x;
      }

      var m = /*#__PURE__*/function () {
        function m() {
          _classCallCheck(this, m);

          this.index = 0, this.x = 0, this.y = 0, this.prev = null, this.next = null, this.z = null, this.prevZ = null, this.nextZ = null, this.steiner = !1;
        }

        _createClass(m, null, [{
          key: "create",
          value: function create(e, n, t) {
            var x = b[g++];
            return x.index = e, x.x = n, x.y = t, x.prev = null, x.next = null, x.z = null, x.prevZ = null, x.nextZ = null, x.steiner = !1, x;
          }
        }]);

        return m;
      }();

      var b = new Array();
      var g = 0;

      for (var _e12 = 0; _e12 < 8096; _e12++) {
        b.push(new m());
      }
      /***/

    },

    /***/
    "DiuL":
    /*!*****************************************************************************************!*\
      !*** ./node_modules/@arcgis/core/views/2d/engine/webgl/mesh/templates/templateUtils.js ***!
      \*****************************************************************************************/

    /*! exports provided: area, clip, clipMarshall, triangleArea, triangulate, triangulateEarcut, triangulateLibtess */

    /***/
    function DiuL(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "area", function () {
        return f;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "clip", function () {
        return m;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "clipMarshall", function () {
        return a;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "triangleArea", function () {
        return u;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "triangulate", function () {
        return i;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "triangulateEarcut", function () {
        return h;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "triangulateLibtess", function () {
        return d;
      });
      /* harmony import */


      var _layers_graphics_OptimizedGeometry_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ../../../../../../layers/graphics/OptimizedGeometry.js */
      "gVKr");
      /* harmony import */


      var _core_libs_earcut_earcut_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ../../../../../../core/libs/earcut/earcut.js */
      "+yyC");
      /* harmony import */


      var _definitions_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ../../definitions.js */
      "jIHu");
      /* harmony import */


      var _TileClipper_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ../../TileClipper.js */
      "LaVW");
      /* harmony import */


      var _bufcut_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ../bufcut.js */
      "C8N4");
      /* harmony import */


      var _Tesselator_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ../Tesselator.js */
      "6NBT");
      /*
      All material copyright ESRI, All Rights Reserved, unless otherwise specified.
      See https://js.arcgis.com/4.18/esri/copyright.txt for details.
      */


      var c = new _Tesselator_js__WEBPACK_IMPORTED_MODULE_5__["default"](),
          l = new _TileClipper_js__WEBPACK_IMPORTED_MODULE_3__["TileClipper"](0, 0, 0, 1, 128);

      function f(o, t, e) {
        var n = 0;

        for (var r = 1; r < e; r++) {
          var _e13 = o[2 * (t + r - 1)],
              s = o[2 * (t + r - 1) + 1];
          n += (o[2 * (t + r)] - _e13) * (o[2 * (t + r) + 1] + s);
        }

        return n;
      }

      function u(o, t, e, n, r) {
        var s = 0;

        for (var _c3 = e; _c3 < n; _c3 += 3) {
          var _e14 = 2 * (o.getValue(_c3) - r),
              _n5 = 2 * (o.getValue(_c3 + 1) - r),
              _l2 = 2 * (o.getValue(_c3 + 2) - r);

          s += Math.abs((t[_e14] - t[_l2]) * (t[_n5 + 1] - t[_e14 + 1]) - (t[_e14] - t[_n5]) * (t[_l2 + 1] - t[_e14 + 1]));
        }

        return s;
      }

      function i(o, t, e) {
        var n = t.coords,
            s = t.lengths,
            c = t.hasIndeterminateRingOrder;
        if (c) return !1;
        var l = o.length;
        var i = 0;

        for (var _t13 = 0; _t13 < s.length;) {
          var _c4 = _t13,
              _h4 = s[_t13],
              _d5 = f(n, i, _h4);

          var _g3 = [];

          for (; ++_c4 < s.length;) {
            var _o6 = s[_c4],
                _t14 = f(n, i + _h4, _o6);

            if (!(_t14 > 0)) break;
            _d5 += _t14, _g3.push(i + _h4), _h4 += _o6;
          }

          var _a2 = o.length;
          Object(_bufcut_js__WEBPACK_IMPORTED_MODULE_4__["bufcut"])(o, n, i, i + _h4, _g3, 2, e);

          var _m = u(o, n, _a2, o.length, e),
              p = Math.abs(_d5);

          if (Math.abs((_m - p) / Math.max(1e-7, p)) > 1e-5) return o.seek(l), !1;
          _t13 = _c4, i += _h4;
        }

        return !0;
      }

      function h(o, e, n) {
        var r = e.coords,
            s = e.lengths,
            c = e.hasIndeterminateRingOrder;
        if (c) return !1;
        var l = 0;

        for (var _c5 = 0; _c5 < s.length;) {
          var _u6 = _c5,
              _i9 = s[_c5];
          var _h5 = [];

          for (; ++_u6 < s.length;) {
            var _o7 = s[_u6];
            if (!(f(r, l + _i9, _o7) > 0)) break;
            _h5.push(l + _i9 - l), _i9 += _o7;
          }

          var _d6 = l + _i9,
              _g4 = e.coords.slice(2 * l, 2 * _d6),
              _a3 = Object(_core_libs_earcut_earcut_js__WEBPACK_IMPORTED_MODULE_1__["earcut"])(_g4, _h5, 2);

          var _iterator = _createForOfIteratorHelper(_a3),
              _step;

          try {
            for (_iterator.s(); !(_step = _iterator.n()).done;) {
              var t = _step.value;
              o.push(t + n + l);
            }
          } catch (err) {
            _iterator.e(err);
          } finally {
            _iterator.f();
          }

          _c5 = _u6, l += _i9;
        }

        return !0;
      }

      function d(o, t, e, n) {
        var r = [],
            s = e.coords,
            l = e.lengths;
        c.beginPolygon(o, r);
        var f = 0;

        for (var _o8 = 0; _o8 < l.length; _o8++) {
          var _t15 = e.lengths[_o8];
          c.beginContour();

          for (var _o9 = 0; _o9 < _t15; _o9++) {
            var _t16 = [s[2 * (f + _o9)], s[2 * (f + _o9) + 1], 0];
            c.addVertex(_t16, _t16);
          }

          c.endContour(), f += _t15;
        }

        c.endPolygon();

        for (var _o10 = 0; _o10 < r.length; _o10++) {
          t.push(r[_o10] + n);
        }
      }

      function g(o, t, e, n, r, s, c, l) {
        var f = ((o - r) * (s - l) - (t - l) * (r - c)) / ((o - e) * (s - l) - (t - n) * (r - c));
        if (f < 0 || f > 1) return null;
        return {
          x: Math.round(o + f * (e - o)),
          y: Math.round(t + f * (n - t))
        };
      }

      function a(t) {
        if (!function (o, t, e) {
          var n = 0;

          for (var _r8 = 0; _r8 < o.lengths.length; _r8++) {
            var _s6 = o.lengths[_r8];

            for (var _r9 = 0; _r9 < _s6; _r9++) {
              var _s7 = o.coords[2 * (_r9 + n)],
                  _c6 = o.coords[2 * (_r9 + n) + 1];
              if (_s7 < t || _s7 > e || _c6 < t || _c6 > e) return !0;
            }

            n += _s6;
          }

          return !1;
        }(t, -128, _definitions_js__WEBPACK_IMPORTED_MODULE_2__["TILE_SIZE"] + 128)) return t;
        l.reset(3);
        var n = 0;

        for (var o = 0; o < t.lengths.length; o++) {
          var e = t.lengths[o];
          var _r10 = t.coords[2 * (0 + n)],
              _s8 = t.coords[2 * (0 + n) + 1];
          l.moveTo(_r10, _s8);

          for (var _o11 = 1; _o11 < e; _o11++) {
            _r10 = t.coords[2 * (_o11 + n)], _s8 = t.coords[2 * (_o11 + n) + 1], l.lineTo(_r10, _s8);
          }

          l.close(), n += e;
        }

        var r = l.result(!1);
        if (!r) return null;
        var s = [],
            c = [];

        var _iterator2 = _createForOfIteratorHelper(r),
            _step2;

        try {
          for (_iterator2.s(); !(_step2 = _iterator2.n()).done;) {
            var _o12 = _step2.value;
            var _t17 = 0;

            var _iterator3 = _createForOfIteratorHelper(_o12),
                _step3;

            try {
              for (_iterator3.s(); !(_step3 = _iterator3.n()).done;) {
                var _e15 = _step3.value;
                c.push(_e15.x), c.push(_e15.y), _t17++;
              }
            } catch (err) {
              _iterator3.e(err);
            } finally {
              _iterator3.f();
            }

            s.push(_t17);
          }
        } catch (err) {
          _iterator2.e(err);
        } finally {
          _iterator2.f();
        }

        return new _layers_graphics_OptimizedGeometry_js__WEBPACK_IMPORTED_MODULE_0__["default"](s, c);
      }

      function m(o, t) {
        var e = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 0;
        var n = -e,
            r = t + e;
        var s = 0,
            c = 0,
            l = 0;

        for (var _t18 = 0; _t18 < o.lengths.length; _t18++) {
          var _e16 = o.lengths[_t18],
              _f5 = l + _e16;

          var _u7 = 0,
              _i10 = null;

          for (; s !== _f5;) {
            var _t19 = o.coords[2 * s],
                _e17 = o.coords[2 * s++ + 1],
                _l3 = _t19 < n || _t19 >= r || _e17 < n || _e17 >= r;

            var _h6 = _l3;

            for (; s !== _f5 && _l3 === _h6;) {
              _l3 || (o.coords[2 * c] = _t19, o.coords[2 * c++ + 1] = _e17, _u7++), _t19 = o.coords[2 * s], _e17 = o.coords[2 * s++ + 1], _l3 = _t19 < n || _t19 >= r || _e17 < n || _e17 >= r;
            }

            if (s === _f5) {
              _l3 ? _i10 && (o.coords[2 * c] = _i10.x, o.coords[2 * c++ + 1] = _i10.y, _u7++) : (o.coords[2 * c] = _t19, o.coords[2 * c++ + 1] = _e17, _u7++);
              continue;
            }

            var _d7 = o.coords[2 * (s - 2)],
                _a4 = o.coords[2 * (s - 2) + 1],
                _m2 = g(_d7, _a4, _t19, _e17, n, n, r, n) || g(_d7, _a4, _t19, _e17, r, n, r, r) || g(_d7, _a4, _t19, _e17, r, r, n, r) || g(_d7, _a4, _t19, _e17, n, n, n, r);

            _m2 && (o.coords[2 * c] = _m2.x, o.coords[2 * c++ + 1] = _m2.y, _u7++, _i10 || (_i10 = _m2)), _l3 || (o.coords[2 * c] = _t19, o.coords[2 * c++ + 1] = _e17, _u7++);
          }

          o.lengths[_t18] = _u7, l += _e16;
        }
      }

      l.setExtent(_definitions_js__WEBPACK_IMPORTED_MODULE_2__["TILE_SIZE"]);
      /***/
    },

    /***/
    "Dw8i":
    /*!********************************************************************************************!*\
      !*** ./node_modules/@arcgis/core/views/2d/engine/webgl/mesh/templates/WGLTemplateStore.js ***!
      \********************************************************************************************/

    /*! exports provided: WGLTemplateStore, isDynamicId */

    /***/
    function Dw8i(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "WGLTemplateStore", function () {
        return L;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "isDynamicId", function () {
        return C;
      });
      /* harmony import */


      var _core_Logger_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ../../../../../../core/Logger.js */
      "6S2I");
      /* harmony import */


      var _core_Error_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ../../../../../../core/Error.js */
      "zlDU");
      /* harmony import */


      var _core_promiseUtils_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ../../../../../../core/promiseUtils.js */
      "9MzC");
      /* harmony import */


      var _symbols_support_defaults_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ../../../../../../symbols/support/defaults.js */
      "psH3");
      /* harmony import */


      var _util_Result_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ../../util/Result.js */
      "GqaZ");
      /* harmony import */


      var _layers_features_schemaUtils_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ../../../../layers/features/schemaUtils.js */
      "owVx");
      /* harmony import */


      var _WGLTextTemplate_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ./WGLTextTemplate.js */
      "iegs");
      /* harmony import */


      var _WGLMarkerTemplate_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! ./WGLMarkerTemplate.js */
      "qLV0");
      /* harmony import */


      var _WGLDynamicFillTemplate_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! ./WGLDynamicFillTemplate.js */
      "I6rf");
      /* harmony import */


      var _WGLDynamicLineTemplate_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! ./WGLDynamicLineTemplate.js */
      "ImOt");
      /* harmony import */


      var _WGLDynamicMarkerTemplate_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
      /*! ./WGLDynamicMarkerTemplate.js */
      "xF2a");
      /* harmony import */


      var _layers_features_textUtils_js__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
      /*! ../../../../layers/features/textUtils.js */
      "MrbB");
      /* harmony import */


      var _WGLDynamicTextTemplate_js__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
      /*! ./WGLDynamicTextTemplate.js */
      "OetV");
      /* harmony import */


      var _WGLFillTemplate_js__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
      /*! ./WGLFillTemplate.js */
      "n7P2");
      /* harmony import */


      var _WGLLineTemplate_js__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(
      /*! ./WGLLineTemplate.js */
      "9SkJ");
      /* harmony import */


      var _util_Lock_js__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(
      /*! ../../util/Lock.js */
      "L/mq");
      /*
      All material copyright ESRI, All Rights Reserved, unless otherwise specified.
      See https://js.arcgis.com/4.18/esri/copyright.txt for details.
      */


      var S = _core_Logger_js__WEBPACK_IMPORTED_MODULE_0__["default"].getLogger("esri.views.2d.engine.webgl.mesh.templates.WGLTemplateStore"),
          k = new Array();

      function w(e, t) {
        var r = e.length;
        return e.push(null), t.then(function (t) {
          return e[r] = t;
        }), e;
      }

      function C(e) {
        return !!(1 & e);
      }

      var L = /*#__PURE__*/function () {
        function L(e, t) {
          _classCallCheck(this, L);

          this._idCounter = 1, this._templateIdCounter = 1, this._idToTemplateGroup = new Map(), this._symbolToTemplate = new Map(), this._fetchQueue = [], this._idToResolver = new Map(), this._cimTemplateCache = new Map(), this._cimAnalyses = [], this._lock = new _util_Lock_js__WEBPACK_IMPORTED_MODULE_15__["default"](), this._fetchResource = e, this._joinOnUTurn = t;
        }

        _createClass(L, [{
          key: "_markerError",
          get: function get() {
            return this._errorTemplates.marker[0];
          }
        }, {
          key: "_fillError",
          get: function get() {
            return this._errorTemplates.fill[0];
          }
        }, {
          key: "_lineError",
          get: function get() {
            return this._errorTemplates.line[0];
          }
        }, {
          key: "_textError",
          get: function get() {
            return this._errorTemplates.line[0];
          }
        }, {
          key: "createTemplateGroup",
          value: function createTemplateGroup(e, t) {
            this._initErrorTemplates();

            var r = e.hash;
            if (this._symbolToTemplate.has(r)) return this._symbolToTemplate.get(r);
            var s = new Array();
            t && this._createMeshTemplates(s, t, !0), this._createMeshTemplates(s, e, !1);

            var i = this._createGroupId("expanded-cim" === e.type);

            return this._idToTemplateGroup.set(i, s), this._symbolToTemplate.set(r, i), i;
          }
        }, {
          key: "getTemplateGroup",
          value: function getTemplateGroup(e) {
            return this._idToTemplateGroup.has(e) ? this._idToTemplateGroup.get(e) : k;
          }
        }, {
          key: "getDynamicTemplateGroup",
          value: function getDynamicTemplateGroup(e) {
            return this._idToTemplateGroup.has(e) ? (C(e) || S.error("mapview-template-store", "Id ".concat(e, " does not refer to a dynamic template")), this._idToTemplateGroup.get(e)) : k;
          }
        }, {
          key: "getMosaicItem",
          value: function getMosaicItem(e, t) {
            var _this5 = this;

            var s = this._createTemplateId(),
                i = Object(_core_promiseUtils_js__WEBPACK_IMPORTED_MODULE_2__["create"])(function (e) {
              return _this5._idToResolver.set(s, e);
            });

            return this._fetchQueue.push({
              symbol: e,
              id: s,
              glyphIds: t
            }), i;
          }
        }, {
          key: "finalize",
          value: function finalize(e) {
            return this._fetchQueue.length || this._lock.isHeld() ? Object(_util_Lock_js__WEBPACK_IMPORTED_MODULE_15__["withLock"])(this._lock, this._fetchAllQueuedResources.bind(this), e) : Object(_core_promiseUtils_js__WEBPACK_IMPORTED_MODULE_2__["resolve"])();
          }
        }, {
          key: "_initErrorTemplates",
          value: function _initErrorTemplates() {
            this._errorTemplates || (this._errorTemplates = {
              fill: this._createMeshTemplates([], Object(_layers_features_schemaUtils_js__WEBPACK_IMPORTED_MODULE_5__["createSymbolSchema"])(_symbols_support_defaults_js__WEBPACK_IMPORTED_MODULE_3__["errorPolygonSymbol2D"]), !1),
              marker: this._createMeshTemplates([], Object(_layers_features_schemaUtils_js__WEBPACK_IMPORTED_MODULE_5__["createSymbolSchema"])(_symbols_support_defaults_js__WEBPACK_IMPORTED_MODULE_3__["errorPointSymbol2D"]), !1),
              line: this._createMeshTemplates([], Object(_layers_features_schemaUtils_js__WEBPACK_IMPORTED_MODULE_5__["createSymbolSchema"])(_symbols_support_defaults_js__WEBPACK_IMPORTED_MODULE_3__["errorPolylineSymbol2D"]), !1)
            });
          }
        }, {
          key: "_fetchAllQueuedResources",
          value: function _fetchAllQueuedResources(e) {
            var _this6 = this;

            if (!this._fetchQueue.length) return Object(_core_promiseUtils_js__WEBPACK_IMPORTED_MODULE_2__["resolve"])();
            var r = this._fetchQueue,
                o = this._cimAnalyses;
            return this._fetchQueue = [], this._cimAnalyses = [], Object(_core_promiseUtils_js__WEBPACK_IMPORTED_MODULE_2__["all"])(o).then(function () {
              return _this6._fetchResource(r, e).then(function (e) {
                var _iterator4 = _createForOfIteratorHelper(e),
                    _step4;

                try {
                  for (_iterator4.s(); !(_step4 = _iterator4.n()).done;) {
                    var _step4$value = _step4.value,
                        t = _step4$value.id,
                        _r11 = _step4$value.mosaicItem;
                    _this6._idToResolver.get(t)(_r11), _this6._idToResolver["delete"](t);
                  }
                } catch (err) {
                  _iterator4.e(err);
                } finally {
                  _iterator4.f();
                }
              });
            })["catch"](function (e) {
              Object(_core_promiseUtils_js__WEBPACK_IMPORTED_MODULE_2__["isAbortError"])(e) ? _this6._fetchQueue = _this6._fetchQueue.concat(r) : function (e) {
                return "worker:port-closed" === e.name;
              }(e) || S.error(new _core_Error_js__WEBPACK_IMPORTED_MODULE_1__["default"]("mapview-template-store", "Unable to fetch requested texture resources", e));
            });
          }
        }, {
          key: "_createGroupId",
          value: function _createGroupId(e) {
            return this._idCounter++ << 1 | (e ? 1 : 0);
          }
        }, {
          key: "_createTemplateId",
          value: function _createTemplateId() {
            return this._templateIdCounter++;
          }
        }, {
          key: "_createSMS",
          value: function () {
            var _createSMS2 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee2(e) {
              var _yield$this$getMosaic, t;

              return regeneratorRuntime.wrap(function _callee2$(_context2) {
                while (1) {
                  switch (_context2.prev = _context2.next) {
                    case 0:
                      _context2.next = 2;
                      return this.getMosaicItem(e);

                    case 2:
                      _yield$this$getMosaic = _context2.sent;
                      t = _yield$this$getMosaic.spriteMosaicItem;
                      return _context2.abrupt("return", Object(_util_Result_js__WEBPACK_IMPORTED_MODULE_4__["ok"])(t, S) ? _WGLMarkerTemplate_js__WEBPACK_IMPORTED_MODULE_7__["default"].fromSimpleMarker(e, t) : this._markerError);

                    case 5:
                    case "end":
                      return _context2.stop();
                  }
                }
              }, _callee2, this);
            }));

            function _createSMS(_x7) {
              return _createSMS2.apply(this, arguments);
            }

            return _createSMS;
          }()
        }, {
          key: "_createPMS",
          value: function () {
            var _createPMS2 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee3(e) {
              var _yield$this$getMosaic2, t;

              return regeneratorRuntime.wrap(function _callee3$(_context3) {
                while (1) {
                  switch (_context3.prev = _context3.next) {
                    case 0:
                      _context3.next = 2;
                      return this.getMosaicItem(e);

                    case 2:
                      _yield$this$getMosaic2 = _context3.sent;
                      t = _yield$this$getMosaic2.spriteMosaicItem;
                      return _context3.abrupt("return", Object(_util_Result_js__WEBPACK_IMPORTED_MODULE_4__["ok"])(t, S) ? _WGLMarkerTemplate_js__WEBPACK_IMPORTED_MODULE_7__["default"].fromPictureMarker(e, t) : this._markerError);

                    case 5:
                    case "end":
                      return _context3.stop();
                  }
                }
              }, _callee3, this);
            }));

            function _createPMS(_x8) {
              return _createPMS2.apply(this, arguments);
            }

            return _createPMS;
          }()
        }, {
          key: "_createSFS",
          value: function () {
            var _createSFS2 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee4(e, t) {
              var _yield$this$getMosaic3, r;

              return regeneratorRuntime.wrap(function _callee4$(_context4) {
                while (1) {
                  switch (_context4.prev = _context4.next) {
                    case 0:
                      _context4.next = 2;
                      return this.getMosaicItem(e);

                    case 2:
                      _yield$this$getMosaic3 = _context4.sent;
                      r = _yield$this$getMosaic3.spriteMosaicItem;
                      return _context4.abrupt("return", Object(_util_Result_js__WEBPACK_IMPORTED_MODULE_4__["ok"])(r, S) ? _WGLFillTemplate_js__WEBPACK_IMPORTED_MODULE_13__["default"].fromSimpleFill(e, r, t) : this._fillError);

                    case 5:
                    case "end":
                      return _context4.stop();
                  }
                }
              }, _callee4, this);
            }));

            function _createSFS(_x9, _x10) {
              return _createSFS2.apply(this, arguments);
            }

            return _createSFS;
          }()
        }, {
          key: "_createPFS",
          value: function () {
            var _createPFS2 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee5(e, t) {
              var _yield$this$getMosaic4, r;

              return regeneratorRuntime.wrap(function _callee5$(_context5) {
                while (1) {
                  switch (_context5.prev = _context5.next) {
                    case 0:
                      _context5.next = 2;
                      return this.getMosaicItem(e);

                    case 2:
                      _yield$this$getMosaic4 = _context5.sent;
                      r = _yield$this$getMosaic4.spriteMosaicItem;
                      return _context5.abrupt("return", Object(_util_Result_js__WEBPACK_IMPORTED_MODULE_4__["ok"])(r, S) ? _WGLFillTemplate_js__WEBPACK_IMPORTED_MODULE_13__["default"].fromPictureFill(e, r, t) : this._fillError);

                    case 5:
                    case "end":
                      return _context5.stop();
                  }
                }
              }, _callee5, this);
            }));

            function _createPFS(_x11, _x12) {
              return _createPFS2.apply(this, arguments);
            }

            return _createPFS;
          }()
        }, {
          key: "_createSLS",
          value: function () {
            var _createSLS2 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee6(e, t) {
              var _yield$this$getMosaic5, r;

              return regeneratorRuntime.wrap(function _callee6$(_context6) {
                while (1) {
                  switch (_context6.prev = _context6.next) {
                    case 0:
                      _context6.next = 2;
                      return this.getMosaicItem(e);

                    case 2:
                      _yield$this$getMosaic5 = _context6.sent;
                      r = _yield$this$getMosaic5.spriteMosaicItem;
                      return _context6.abrupt("return", Object(_util_Result_js__WEBPACK_IMPORTED_MODULE_4__["ok"])(r, S) ? _WGLLineTemplate_js__WEBPACK_IMPORTED_MODULE_14__["default"].fromSimpleLine(e, r, this._joinOnUTurn) : this._lineError);

                    case 5:
                    case "end":
                      return _context6.stop();
                  }
                }
              }, _callee6, this);
            }));

            function _createSLS(_x13, _x14) {
              return _createSLS2.apply(this, arguments);
            }

            return _createSLS;
          }()
        }, {
          key: "_createLMS",
          value: function () {
            var _createLMS2 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee7(e) {
              var _yield$this$getMosaic6, t;

              return regeneratorRuntime.wrap(function _callee7$(_context7) {
                while (1) {
                  switch (_context7.prev = _context7.next) {
                    case 0:
                      _context7.next = 2;
                      return this.getMosaicItem(e);

                    case 2:
                      _yield$this$getMosaic6 = _context7.sent;
                      t = _yield$this$getMosaic6.spriteMosaicItem;
                      return _context7.abrupt("return", Object(_util_Result_js__WEBPACK_IMPORTED_MODULE_4__["ok"])(t, S) ? _WGLMarkerTemplate_js__WEBPACK_IMPORTED_MODULE_7__["default"].fromLineSymbolMarker(e, t) : this._markerError);

                    case 5:
                    case "end":
                      return _context7.stop();
                  }
                }
              }, _callee7, this);
            }));

            function _createLMS(_x15) {
              return _createLMS2.apply(this, arguments);
            }

            return _createLMS;
          }()
        }, {
          key: "_createTS",
          value: function () {
            var _createTS2 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee8(e) {
              var _yield$this$getMosaic7, t;

              return regeneratorRuntime.wrap(function _callee8$(_context8) {
                while (1) {
                  switch (_context8.prev = _context8.next) {
                    case 0:
                      _context8.next = 2;
                      return this.getMosaicItem(e);

                    case 2:
                      _yield$this$getMosaic7 = _context8.sent;
                      t = _yield$this$getMosaic7.glyphMosaicItems;
                      return _context8.abrupt("return", _WGLTextTemplate_js__WEBPACK_IMPORTED_MODULE_6__["default"].fromText(e, t));

                    case 5:
                    case "end":
                      return _context8.stop();
                  }
                }
              }, _callee8, this);
            }));

            function _createTS(_x16) {
              return _createTS2.apply(this, arguments);
            }

            return _createTS;
          }()
        }, {
          key: "_createCIMText",
          value: function () {
            var _createCIMText2 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee9(e) {
              var _yield$this$getMosaic8, t;

              return regeneratorRuntime.wrap(function _callee9$(_context9) {
                while (1) {
                  switch (_context9.prev = _context9.next) {
                    case 0:
                      _context9.next = 2;
                      return this.getMosaicItem(e.cim, Object(_layers_features_textUtils_js__WEBPACK_IMPORTED_MODULE_11__["codepoints"])(e.text));

                    case 2:
                      _yield$this$getMosaic8 = _context9.sent;
                      t = _yield$this$getMosaic8.glyphMosaicItems;
                      return _context9.abrupt("return", (e.cim.mosaicHash = e.materialHash, Object(_util_Result_js__WEBPACK_IMPORTED_MODULE_4__["ok"])(t, S) ? _WGLTextTemplate_js__WEBPACK_IMPORTED_MODULE_6__["default"].fromCIMText(e, t) : this._textError));

                    case 5:
                    case "end":
                      return _context9.stop();
                  }
                }
              }, _callee9, this);
            }));

            function _createCIMText(_x17) {
              return _createCIMText2.apply(this, arguments);
            }

            return _createCIMText;
          }()
        }, {
          key: "_createCIMFill",
          value: function () {
            var _createCIMFill2 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee10(e) {
              var _yield$this$getMosaic9, t;

              return regeneratorRuntime.wrap(function _callee10$(_context10) {
                while (1) {
                  switch (_context10.prev = _context10.next) {
                    case 0:
                      e.cim.mosaicHash = e.materialHash;
                      _context10.next = 3;
                      return this.getMosaicItem(e.cim);

                    case 3:
                      _yield$this$getMosaic9 = _context10.sent;
                      t = _yield$this$getMosaic9.spriteMosaicItem;
                      return _context10.abrupt("return", Object(_util_Result_js__WEBPACK_IMPORTED_MODULE_4__["ok"])(t, S) ? _WGLFillTemplate_js__WEBPACK_IMPORTED_MODULE_13__["default"].fromCIMFill(e, t) : this._fillError);

                    case 6:
                    case "end":
                      return _context10.stop();
                  }
                }
              }, _callee10, this);
            }));

            function _createCIMFill(_x18) {
              return _createCIMFill2.apply(this, arguments);
            }

            return _createCIMFill;
          }()
        }, {
          key: "_createCIMLine",
          value: function () {
            var _createCIMLine2 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee11(e) {
              var _yield$this$getMosaic10, t;

              return regeneratorRuntime.wrap(function _callee11$(_context11) {
                while (1) {
                  switch (_context11.prev = _context11.next) {
                    case 0:
                      e.cim.mosaicHash = e.materialHash;
                      _context11.next = 3;
                      return this.getMosaicItem(e.cim);

                    case 3:
                      _yield$this$getMosaic10 = _context11.sent;
                      t = _yield$this$getMosaic10.spriteMosaicItem;
                      return _context11.abrupt("return", Object(_util_Result_js__WEBPACK_IMPORTED_MODULE_4__["ok"])(t, S) ? _WGLLineTemplate_js__WEBPACK_IMPORTED_MODULE_14__["default"].fromCIMLine(e, t, this._joinOnUTurn) : this._lineError);

                    case 6:
                    case "end":
                      return _context11.stop();
                  }
                }
              }, _callee11, this);
            }));

            function _createCIMLine(_x19) {
              return _createCIMLine2.apply(this, arguments);
            }

            return _createCIMLine;
          }()
        }, {
          key: "_createCIMMarker",
          value: function () {
            var _createCIMMarker2 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee12(e) {
              var _yield$this$getMosaic11, t;

              return regeneratorRuntime.wrap(function _callee12$(_context12) {
                while (1) {
                  switch (_context12.prev = _context12.next) {
                    case 0:
                      e.cim.mosaicHash = e.materialHash;
                      _context12.next = 3;
                      return this.getMosaicItem(e.cim);

                    case 3:
                      _yield$this$getMosaic11 = _context12.sent;
                      t = _yield$this$getMosaic11.spriteMosaicItem;
                      return _context12.abrupt("return", Object(_util_Result_js__WEBPACK_IMPORTED_MODULE_4__["ok"])(t, S) ? _WGLMarkerTemplate_js__WEBPACK_IMPORTED_MODULE_7__["default"].fromCIMMarker(e, t) : this._markerError);

                    case 6:
                    case "end":
                      return _context12.stop();
                  }
                }
              }, _callee12, this);
            }));

            function _createCIMMarker(_x20) {
              return _createCIMMarker2.apply(this, arguments);
            }

            return _createCIMMarker;
          }()
        }, {
          key: "_createCIM",
          value: function () {
            var _createCIM2 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee13(e) {
              var _this7 = this;

              var t, r;
              return regeneratorRuntime.wrap(function _callee13$(_context13) {
                while (1) {
                  switch (_context13.prev = _context13.next) {
                    case 0:
                      t = e.templateHash;

                      if (!this._cimTemplateCache.has(t)) {
                        _context13.next = 3;
                        break;
                      }

                      return _context13.abrupt("return", this._cimTemplateCache.get(t));

                    case 3:
                      _context13.t0 = e.type;
                      _context13.next = _context13.t0 === "marker" ? 6 : _context13.t0 === "line" ? 8 : _context13.t0 === "fill" ? 10 : _context13.t0 === "text" ? 12 : 13;
                      break;

                    case 6:
                      r = this._createCIMMarker(e);
                      return _context13.abrupt("break", 13);

                    case 8:
                      r = this._createCIMLine(e);
                      return _context13.abrupt("break", 13);

                    case 10:
                      r = this._createCIMFill(e);
                      return _context13.abrupt("break", 13);

                    case 12:
                      r = this._createCIMText(e);

                    case 13:
                      return _context13.abrupt("return", (r.then(function (e) {
                        return _this7._cimTemplateCache.set(t, e);
                      }), r));

                    case 14:
                    case "end":
                      return _context13.stop();
                  }
                }
              }, _callee13, this);
            }));

            function _createCIM(_x21) {
              return _createCIM2.apply(this, arguments);
            }

            return _createCIM;
          }()
        }, {
          key: "_createDynamicCIM",
          value: function _createDynamicCIM(e) {
            var t = e.templateHash;
            if (this._cimTemplateCache.has(t)) return this._cimTemplateCache.get(t);
            var r;

            switch (e.type) {
              case "marker":
                r = _WGLDynamicMarkerTemplate_js__WEBPACK_IMPORTED_MODULE_10__["default"].fromCIMMarker(e);
                break;

              case "line":
                r = _WGLDynamicLineTemplate_js__WEBPACK_IMPORTED_MODULE_9__["default"].fromCIMLine(e);
                break;

              case "fill":
                r = _WGLDynamicFillTemplate_js__WEBPACK_IMPORTED_MODULE_8__["default"].fromCIMFill(e);
                break;

              case "text":
                r = _WGLDynamicTextTemplate_js__WEBPACK_IMPORTED_MODULE_12__["default"].fromCIMText(e);
            }

            return this._cimTemplateCache.set(t, r), r;
          }
        }, {
          key: "_createPrimitiveMeshTemplates",
          value: function _createPrimitiveMeshTemplates(e, t, r) {
            switch (t.type) {
              case "esriSMS":
                return w(e, this._createSMS(t));

              case "esriPMS":
                return w(e, this._createPMS(t));

              case "esriSFS":
                return w(e, this._createSFS(t, r));

              case "line-marker":
                return w(e, this._createLMS(t));

              case "esriPFS":
                return w(e, this._createPFS(t, r));

              case "esriSLS":
                return w(e, this._createSLS(t, !1));

              case "esriTS":
                return w(e, this._createTS(t));

              default:
                return S.error("Unable to create mesh template for unknown symbol type {: $ }{symbol.type}"), e;
            }
          }
        }, {
          key: "_createMeshTemplates",
          value: function _createMeshTemplates(e, t, r) {
            if (-1 !== t.type.indexOf("3d")) return S.error("3D symbols are not supported with MapView"), e;

            if ("expanded-cim" === t.type) {
              var _iterator5 = _createForOfIteratorHelper(t.layers),
                  _step5;

              try {
                for (_iterator5.s(); !(_step5 = _iterator5.n()).done;) {
                  var _r12 = _step5.value;
                  "function" == typeof _r12.materialHash ? e.push(this._createDynamicCIM(_r12)) : w(e, this._createCIM(_r12));
                }
              } catch (err) {
                _iterator5.e(err);
              } finally {
                _iterator5.f();
              }

              return e;
            }

            if ("composite-symbol" === t.type) {
              var _iterator6 = _createForOfIteratorHelper(t.layers),
                  _step6;

              try {
                for (_iterator6.s(); !(_step6 = _iterator6.n()).done;) {
                  var s = _step6.value;

                  this._createPrimitiveMeshTemplates(e, s, r);
                }
              } catch (err) {
                _iterator6.e(err);
              } finally {
                _iterator6.f();
              }

              return e;
            }

            return "cim" === t.type || "label" === t.type || "web-style" === t.type ? e : this._createPrimitiveMeshTemplates(e, t, r);
          }
        }]);

        return L;
      }();
      /***/

    },

    /***/
    "GqaZ":
    /*!************************************************************************!*\
      !*** ./node_modules/@arcgis/core/views/2d/engine/webgl/util/Result.js ***!
      \************************************************************************/

    /*! exports provided: ok */

    /***/
    function GqaZ(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ok", function () {
        return e;
      });
      /* harmony import */


      var _core_Error_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ../../../../../core/Error.js */
      "zlDU");
      /*
      All material copyright ESRI, All Rights Reserved, unless otherwise specified.
      See https://js.arcgis.com/4.18/esri/copyright.txt for details.
      */


      function e(e, n) {
        if (e && "name" in e) {
          var o = e;
          return n && n.error(new _core_Error_js__WEBPACK_IMPORTED_MODULE_0__["default"](o.name, o.message, o.details)), !1;
        }

        return !0;
      }
      /***/

    },

    /***/
    "I6rf":
    /*!**************************************************************************************************!*\
      !*** ./node_modules/@arcgis/core/views/2d/engine/webgl/mesh/templates/WGLDynamicFillTemplate.js ***!
      \**************************************************************************************************/

    /*! exports provided: default */

    /***/
    function I6rf(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony import */


      var _core_mathUtils_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ../../../../../../core/mathUtils.js */
      "OKTS");
      /* harmony import */


      var _core_screenUtils_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ../../../../../../core/screenUtils.js */
      "qRWG");
      /* harmony import */


      var _definitions_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ../../definitions.js */
      "jIHu");
      /* harmony import */


      var _number_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ../../number.js */
      "0RS7");
      /* harmony import */


      var _materialKey_MaterialKey_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ../../materialKey/MaterialKey.js */
      "GMaR");
      /* harmony import */


      var _color_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ../../color.js */
      "qaIE");
      /* harmony import */


      var _GeometryUtils_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ../../GeometryUtils.js */
      "HQFP");
      /* harmony import */


      var _util_Result_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! ../../util/Result.js */
      "GqaZ");
      /* harmony import */


      var _util_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! ./util.js */
      "aixI");
      /* harmony import */


      var _WGLBaseFillTemplate_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! ./WGLBaseFillTemplate.js */
      "C/3w");
      /* harmony import */


      var _WGLDynamicMeshTemplate_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
      /*! ./WGLDynamicMeshTemplate.js */
      "ej3m");
      /*
      All material copyright ESRI, All Rights Reserved, unless otherwise specified.
      See https://js.arcgis.com/4.18/esri/copyright.txt for details.
      */


      var n = /*#__PURE__*/function (_Object2) {
        _inherits(n, _Object2);

        var _super4 = _createSuper(n);

        function n(t) {
          var _this8;

          _classCallCheck(this, n);

          if (_this8 = _super4.call(this, t), Object(_util_js__WEBPACK_IMPORTED_MODULE_8__["isFunction"])(t.color)) {
            var e = function e(_e18, i, s) {
              var r = t.color(_e18, i, s);
              return r && Object(_color_js__WEBPACK_IMPORTED_MODULE_5__["premultiplyAlphaRGBA"])(r) || 0;
            };

            _this8._dynamicPropertyMap.set("_fillColor", e);
          } else {
            var _e19 = t.color;
            _this8.fillColor = _e19 && Object(_color_js__WEBPACK_IMPORTED_MODULE_5__["premultiplyAlphaRGBA"])(_e19) || 0;
          }

          var i = 0;
          Object(_util_js__WEBPACK_IMPORTED_MODULE_8__["isFunction"])(t.height) || (i = t.height || 0);

          _this8._dynamicPropertyMap.set("_height", function (e, s, r) {
            return Object(_util_js__WEBPACK_IMPORTED_MODULE_8__["isFunction"])(t.height) ? t.height(e, s, r) : i;
          });

          var s = 0;
          Object(_util_js__WEBPACK_IMPORTED_MODULE_8__["isFunction"])(t.offsetX) || (s = Object(_core_screenUtils_js__WEBPACK_IMPORTED_MODULE_1__["pt2px"])(t.offsetX || 0) + 128, s > 255 && (s = 255));

          _this8._dynamicPropertyMap.set("_offsetX", function (i, r, o) {
            if (Object(_util_js__WEBPACK_IMPORTED_MODULE_8__["isFunction"])(t.offsetX)) {
              var _s9 = Object(_core_screenUtils_js__WEBPACK_IMPORTED_MODULE_1__["pt2px"])(t.offsetX(i, r, o)) + 128;

              return _s9 > 255 && (_s9 = 255), _s9;
            }

            return s;
          });

          var r = 1;
          Object(_util_js__WEBPACK_IMPORTED_MODULE_8__["isFunction"])(t.scaleX) || (r = t.scaleX || 1);

          _this8._dynamicPropertyMap.set("_scaleX", function (e, i, s) {
            return Object(_util_js__WEBPACK_IMPORTED_MODULE_8__["isFunction"])(t.scaleX) ? t.scaleX(e, i, s) : r;
          });

          var f = 0;
          Object(_util_js__WEBPACK_IMPORTED_MODULE_8__["isFunction"])(t.offsetY) || (f = Object(_core_screenUtils_js__WEBPACK_IMPORTED_MODULE_1__["pt2px"])(-t.offsetY || 0) + 128, f > 255 && (f = 255));

          _this8._dynamicPropertyMap.set("_offsetY", function (i, s, r) {
            if (Object(_util_js__WEBPACK_IMPORTED_MODULE_8__["isFunction"])(t.offsetY)) {
              var o = Object(_core_screenUtils_js__WEBPACK_IMPORTED_MODULE_1__["pt2px"])(-t.offsetY(i, s, r)) + 128;
              return o > 255 && (o = 255), o;
            }

            return f;
          });

          var c = 0;
          Object(_util_js__WEBPACK_IMPORTED_MODULE_8__["isFunction"])(t.angle) || (c = Object(_GeometryUtils_js__WEBPACK_IMPORTED_MODULE_6__["radToByte"])(t.angle) || 0);
          _this8._dynamicPropertyMap.set("_angle", function (e, i, s) {
            return Object(_util_js__WEBPACK_IMPORTED_MODULE_8__["isFunction"])(t.angle) ? Object(_GeometryUtils_js__WEBPACK_IMPORTED_MODULE_6__["radToByte"])(t.angle(e, i, s)) : c;
          }), _this8.effects = t.effects, _this8._cimFillLayer = t, _this8._fillMaterialKey = _materialKey_MaterialKey_js__WEBPACK_IMPORTED_MODULE_4__["FillMaterialKey"].load(t.materialKey);
          return _possibleConstructorReturn(_this8);
        }

        _createClass(n, [{
          key: "bindFeature",
          value: function bindFeature(o, a, l) {
            var _this9 = this;

            var h = o.readLegacyFeature();

            this._dynamicPropertyMap.forEach(function (t, e) {
              _this9[e] = t(h, a, l);
            });

            var c = this._fillMaterialKey,
                m = this._materialCache,
                _n6 = this._cimFillLayer;
            this.aux3 = Object(_number_js__WEBPACK_IMPORTED_MODULE_3__["i8888to32"])(0, 0, this._angle, _n6.colorLocked ? 1 : 0);
            var p = (0, _n6.materialHash)(h, a, l),
                y = m.get(p);
            var _ = null;

            if (y && Object(_util_Result_js__WEBPACK_IMPORTED_MODULE_7__["ok"])(y.spriteMosaicItem) && (_ = y.spriteMosaicItem), _) {
              var _ref = _,
                  _o13 = _ref.rect,
                  _a5 = _ref.width,
                  _l4 = _ref.height,
                  f = _o13.x + _definitions_js__WEBPACK_IMPORTED_MODULE_2__["SPRITE_PADDING"],
                  _h7 = _o13.y + _definitions_js__WEBPACK_IMPORTED_MODULE_2__["SPRITE_PADDING"],
                  _m3 = f + _a5,
                  _n8 = _h7 + _l4;

              var _p3 = Object(_core_mathUtils_js__WEBPACK_IMPORTED_MODULE_0__["nextHighestPowerOfTwo"])(Object(_core_screenUtils_js__WEBPACK_IMPORTED_MODULE_1__["pt2px"])(this._height));

              _p3 > 255 ? _p3 = 255 : _p3 <= 0 && (_p3 = Object(_core_mathUtils_js__WEBPACK_IMPORTED_MODULE_0__["nextHighestPowerOfTwo"])(_n8 - _h7));

              var _y3 = Object(_core_mathUtils_js__WEBPACK_IMPORTED_MODULE_0__["nextHighestPowerOfTwo"])(Object(_core_screenUtils_js__WEBPACK_IMPORTED_MODULE_1__["pt2px"])(this._height / _l4 * _a5 || 0));

              _y3 > 255 ? _y3 = 255 : _y3 <= 0 && (_y3 = Object(_core_mathUtils_js__WEBPACK_IMPORTED_MODULE_0__["nextHighestPowerOfTwo"])(_m3 - f));
              var u = this._scaleX,
                  d = 1;
              this.tl = Object(_number_js__WEBPACK_IMPORTED_MODULE_3__["i1616to32"])(f, _h7), this.br = Object(_number_js__WEBPACK_IMPORTED_MODULE_3__["i1616to32"])(_m3, _n8), this.aux1 = Object(_number_js__WEBPACK_IMPORTED_MODULE_3__["i8888to32"])(_y3, _p3, this._offsetX, this._offsetY), this.aux2 = Object(_number_js__WEBPACK_IMPORTED_MODULE_3__["i1616to32"])(128 * u, 128 * d), c.sdf = _.sdf, c.pattern = !0, c.textureBinding = _.textureBinding;
            } else this.tl = 0, this.br = 0, this.aux1 = 0, this.aux2 = 0, c.sdf = !1, c.pattern = !1, c.textureBinding = 0;

            this._materialKey = c.data;
          }
        }], [{
          key: "fromCIMFill",
          value: function fromCIMFill(t) {
            return new n(t);
          }
        }]);

        return n;
      }(Object(_WGLBaseFillTemplate_js__WEBPACK_IMPORTED_MODULE_9__["default"])(_WGLDynamicMeshTemplate_js__WEBPACK_IMPORTED_MODULE_10__["default"]));
      /* harmony default export */


      __webpack_exports__["default"] = n;
      /***/
    },

    /***/
    "ImOt":
    /*!**************************************************************************************************!*\
      !*** ./node_modules/@arcgis/core/views/2d/engine/webgl/mesh/templates/WGLDynamicLineTemplate.js ***!
      \**************************************************************************************************/

    /*! exports provided: default */

    /***/
    function ImOt(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony import */


      var _core_screenUtils_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ../../../../../../core/screenUtils.js */
      "qRWG");
      /* harmony import */


      var _definitions_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ../../definitions.js */
      "jIHu");
      /* harmony import */


      var _number_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ../../number.js */
      "0RS7");
      /* harmony import */


      var _materialKey_MaterialKey_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ../../materialKey/MaterialKey.js */
      "GMaR");
      /* harmony import */


      var _color_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ../../color.js */
      "qaIE");
      /* harmony import */


      var _util_Result_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ../../util/Result.js */
      "GqaZ");
      /* harmony import */


      var _util_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ./util.js */
      "aixI");
      /* harmony import */


      var _WGLDynamicMeshTemplate_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! ./WGLDynamicMeshTemplate.js */
      "ej3m");
      /* harmony import */


      var _WGLBaseLineTemplate_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! ./WGLBaseLineTemplate.js */
      "bzZf");
      /*
      All material copyright ESRI, All Rights Reserved, unless otherwise specified.
      See https://js.arcgis.com/4.18/esri/copyright.txt for details.
      */


      var m = /*#__PURE__*/function (_Object3) {
        _inherits(m, _Object3);

        var _super5 = _createSuper(m);

        function m(i) {
          var _this10;

          _classCallCheck(this, m);

          _this10 = _super5.call(this, i), _this10._cimLineLayer = i;
          var e = 0;
          Object(_util_js__WEBPACK_IMPORTED_MODULE_6__["isFunction"])(i.width) || (e = .5 * Object(_core_screenUtils_js__WEBPACK_IMPORTED_MODULE_0__["pt2px"])(i.width));

          if (_this10._dynamicPropertyMap.set("_halfWidth", function (s, r, o) {
            return Object(_util_js__WEBPACK_IMPORTED_MODULE_6__["isFunction"])(i.width) ? .5 * Object(_core_screenUtils_js__WEBPACK_IMPORTED_MODULE_0__["pt2px"])(i.width(s, r, o)) : e;
          }), Object(_util_js__WEBPACK_IMPORTED_MODULE_6__["isFunction"])(i.cap) ? _this10._dynamicPropertyMap.set("_capType", i.cap) : _this10._capType = i.cap, Object(_util_js__WEBPACK_IMPORTED_MODULE_6__["isFunction"])(i.join) ? _this10._dynamicPropertyMap.set("_joinType", i.join) : _this10._joinType = i.join, Object(_util_js__WEBPACK_IMPORTED_MODULE_6__["isFunction"])(i.color)) {
            var t = function t(_t20, e, s) {
              var o = i.color(_t20, e, s);
              return o && Object(_color_js__WEBPACK_IMPORTED_MODULE_4__["premultiplyAlphaRGBA"])(o) || 0;
            };

            _this10._dynamicPropertyMap.set("_fillColor", t);
          } else {
            var _t21 = i.color;
            _this10._fillColor = _t21 && Object(_color_js__WEBPACK_IMPORTED_MODULE_4__["premultiplyAlphaRGBA"])(_t21) || 0;
          }

          if (Object(_util_js__WEBPACK_IMPORTED_MODULE_6__["isFunction"])(i.miterLimit)) {
            var _t22 = function _t22(t, e, s) {
              return Object(_util_js__WEBPACK_IMPORTED_MODULE_6__["getLimitCosine"])(i.miterLimit(t, e, s));
            };

            _this10._dynamicPropertyMap.set("_miterLimitCosine", _t22);
          } else _this10._miterLimitCosine = Object(_util_js__WEBPACK_IMPORTED_MODULE_6__["getLimitCosine"])(i.miterLimit);

          _this10._scaleFactor = i.scaleFactor || 1, _this10._isDashed = i.isDashed, _this10.effects = i.effects, _this10.tessellationProperties._bitset = i.colorLocked ? 1 : 0, _this10._materialKey = i.materialKey, _this10._initializeTessellator(!0);
          return _this10;
        }

        _createClass(m, [{
          key: "bindFeature",
          value: function bindFeature(t, r, a) {
            var _this11 = this;

            var l = t.readLegacyFeature();
            this._dynamicPropertyMap.forEach(function (t, i) {
              _this11[i] = t(l, r, a);
            }), this._halfWidth *= this._scaleFactor;

            var h = this._materialCache,
                n = (0, this._cimLineLayer.materialHash)(l, r, a),
                _m4 = h.get(n);

            var c = null;

            if (_m4 && Object(_util_Result_js__WEBPACK_IMPORTED_MODULE_5__["ok"])(_m4.spriteMosaicItem) && (c = _m4.spriteMosaicItem), c) {
              this._hasPattern = !0;

              var _c7 = c,
                  _t23 = _c7.rect,
                  s = _c7.width,
                  _r13 = _c7.height,
                  o = _t23.x + _definitions_js__WEBPACK_IMPORTED_MODULE_1__["SPRITE_PADDING"],
                  _a6 = _t23.y + _definitions_js__WEBPACK_IMPORTED_MODULE_1__["SPRITE_PADDING"],
                  _l5 = o + s,
                  _h8 = _a6 + _r13;

              this.tessellationProperties._tl = Object(_number_js__WEBPACK_IMPORTED_MODULE_2__["i1616to32"])(o, _a6), this.tessellationProperties._br = Object(_number_js__WEBPACK_IMPORTED_MODULE_2__["i1616to32"])(_l5, _h8);
            } else this._hasPattern = !1, this.tessellationProperties._tl = 0, this.tessellationProperties._br = 0;

            this.tessellationProperties._fillColor = this._fillColor, this.tessellationProperties._halfWidth = this._halfWidth, this.tessellationProperties._halfReferenceWidth = this.tessellationProperties._halfWidth;

            var p = _materialKey_MaterialKey_js__WEBPACK_IMPORTED_MODULE_3__["LineMaterialKey"].load(this._materialKey);

            c && (p.sdf = c.sdf, p.pattern = !0, p.textureBinding = c.textureBinding), this._materialKey = p.data;
          }
        }], [{
          key: "fromCIMLine",
          value: function fromCIMLine(t) {
            return new m(t);
          }
        }]);

        return m;
      }(Object(_WGLBaseLineTemplate_js__WEBPACK_IMPORTED_MODULE_8__["default"])(_WGLDynamicMeshTemplate_js__WEBPACK_IMPORTED_MODULE_7__["default"]));
      /* harmony default export */


      __webpack_exports__["default"] = m;
      /***/
    },

    /***/
    "J3nV":
    /*!******************************************************************************************!*\
      !*** ./node_modules/@arcgis/core/views/2d/engine/webgl/mesh/factories/WGLMeshFactory.js ***!
      \******************************************************************************************/

    /*! exports provided: WGLMeshFactory */

    /***/
    function J3nV(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "WGLMeshFactory", function () {
        return m;
      });
      /* harmony import */


      var _core_has_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ../../../../../../core/has.js */
      "wSAH");
      /* harmony import */


      var _core_maybe_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ../../../../../../core/maybe.js */
      "srIe");
      /* harmony import */


      var _core_promiseUtils_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ../../../../../../core/promiseUtils.js */
      "9MzC");
      /* harmony import */


      var _definitions_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ../../definitions.js */
      "jIHu");
      /* harmony import */


      var _enums_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ../../enums.js */
      "yE7X");
      /* harmony import */


      var _MeshData_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ../MeshData.js */
      "acOm");
      /* harmony import */


      var _VertexVector_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ../VertexVector.js */
      "/Hru");
      /* harmony import */


      var _templates_WGLLabelTemplate_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! ../templates/WGLLabelTemplate.js */
      "phaq");
      /* harmony import */


      var _templates_WGLMarkerTemplate_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! ../templates/WGLMarkerTemplate.js */
      "qLV0");
      /* harmony import */


      var _templates_WGLTemplateStore_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! ../templates/WGLTemplateStore.js */
      "Dw8i");
      /*
      All material copyright ESRI, All Rights Reserved, unless otherwise specified.
      See https://js.arcgis.com/4.18/esri/copyright.txt for details.
      */


      var m = /*#__PURE__*/function () {
        function m(e, t, r) {
          _classCallCheck(this, m);

          this._isDD = !1, this._geometryType = e, this._idField = t, this._templateStore = r;
        }

        _createClass(m, [{
          key: "update",
          value: function update(t, r) {
            this._isDD = "simple" === t.mesh.matcher.type && t.mesh.matcher.isDotDensity, Object(_core_maybe_js__WEBPACK_IMPORTED_MODULE_1__["isSome"])(t.mesh.labels) && this._setLabelTemplates(t.mesh.labels, r);
          }
        }, {
          key: "_setLabelTemplates",
          value: function _setLabelTemplates(e, t) {
            this._labelTemplates = e.map(function (e) {
              return _templates_WGLLabelTemplate_js__WEBPACK_IMPORTED_MODULE_7__["default"].fromLabelClass(e, t);
            });
          }
        }, {
          key: "templates",
          get: function get() {
            return this._templateStore;
          }
        }, {
          key: "createMeshData",
          value: function createMeshData(e) {
            var t = new Array(5),
                l = this._labelTemplates && this._labelTemplates.length > 0,
                n = "esriGeometryPolyline" === this._geometryType ? _definitions_js__WEBPACK_IMPORTED_MODULE_3__["HEURISTIC_GLYPHS_PER_LINE"] : _definitions_js__WEBPACK_IMPORTED_MODULE_3__["HEURISTIC_GLYPHS_PER_FEATURE"];
            return t[_enums_js__WEBPACK_IMPORTED_MODULE_4__["WGLGeometryType"].MARKER] = new _VertexVector_js__WEBPACK_IMPORTED_MODULE_6__["VertexVectors"](_enums_js__WEBPACK_IMPORTED_MODULE_4__["WGLGeometryType"].MARKER, 4 * e), t[_enums_js__WEBPACK_IMPORTED_MODULE_4__["WGLGeometryType"].FILL] = new _VertexVector_js__WEBPACK_IMPORTED_MODULE_6__["VertexVectors"](_enums_js__WEBPACK_IMPORTED_MODULE_4__["WGLGeometryType"].FILL, e, this._isDD), t[_enums_js__WEBPACK_IMPORTED_MODULE_4__["WGLGeometryType"].LINE] = new _VertexVector_js__WEBPACK_IMPORTED_MODULE_6__["VertexVectors"](_enums_js__WEBPACK_IMPORTED_MODULE_4__["WGLGeometryType"].LINE, e), t[_enums_js__WEBPACK_IMPORTED_MODULE_4__["WGLGeometryType"].TEXT] = new _VertexVector_js__WEBPACK_IMPORTED_MODULE_6__["VertexVectors"](_enums_js__WEBPACK_IMPORTED_MODULE_4__["WGLGeometryType"].TEXT, 4 * e), t[_enums_js__WEBPACK_IMPORTED_MODULE_4__["WGLGeometryType"].LABEL] = new _VertexVector_js__WEBPACK_IMPORTED_MODULE_6__["VertexVectors"](_enums_js__WEBPACK_IMPORTED_MODULE_4__["WGLGeometryType"].LABEL, l ? 4 * n : 0), new _MeshData_js__WEBPACK_IMPORTED_MODULE_5__["MeshData"](t, {
              features: e,
              records: e,
              metrics: 0
            });
          }
        }, {
          key: "analyze",
          value: function () {
            var _analyze = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee14(e, r, s, i, o) {
              var a, l, t, _r14, _iterator7, _step7, _t24;

              return regeneratorRuntime.wrap(function _callee14$(_context14) {
                while (1) {
                  switch (_context14.prev = _context14.next) {
                    case 0:
                      if (!Object(_core_promiseUtils_js__WEBPACK_IMPORTED_MODULE_2__["isAborted"])(o)) {
                        _context14.next = 2;
                        break;
                      }

                      return _context14.abrupt("return");

                    case 2:
                      _context14.t0 = "dictionary" === r.type;

                      if (!_context14.t0) {
                        _context14.next = 7;
                        break;
                      }

                      _context14.next = 6;
                      return r.analyze(this._idField, e.copy(), s, i, o);

                    case 6:
                      a = _context14.sent;

                    case 7:
                      l = 0;

                      for (; e.next();) {
                        t = void 0;

                        if (t = a ? a[l++] : r.match(this._idField, e, this._geometryType, s, i), e.setGroupId(t), Object(_templates_WGLTemplateStore_js__WEBPACK_IMPORTED_MODULE_9__["isDynamicId"])(t)) {
                          _r14 = this._templateStore.getDynamicTemplateGroup(t);
                          _iterator7 = _createForOfIteratorHelper(_r14);

                          try {
                            for (_iterator7.s(); !(_step7 = _iterator7.n()).done;) {
                              _t24 = _step7.value;
                              _t24 && _t24.analyze && _t24.analyze(this._templateStore, e, s, i);
                            }
                          } catch (err) {
                            _iterator7.e(err);
                          } finally {
                            _iterator7.f();
                          }
                        }
                      }

                      return _context14.abrupt("return", this._templateStore.finalize(o));

                    case 10:
                    case "end":
                      return _context14.stop();
                  }
                }
              }, _callee14, this);
            }));

            function analyze(_x22, _x23, _x24, _x25, _x26) {
              return _analyze.apply(this, arguments);
            }

            return analyze;
          }()
        }, {
          key: "analyzeGraphics",
          value: function () {
            var _analyzeGraphics = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee15(e, r, s, i, o) {
              var a, _e20, t, _iterator8, _step8, _e21;

              return regeneratorRuntime.wrap(function _callee15$(_context15) {
                while (1) {
                  switch (_context15.prev = _context15.next) {
                    case 0:
                      if (!Object(_core_promiseUtils_js__WEBPACK_IMPORTED_MODULE_2__["isAborted"])(o)) {
                        _context15.next = 2;
                        break;
                      }

                      return _context15.abrupt("return");

                    case 2:
                      a = e.getCursor();
                      _context15.t0 = r;

                      if (!_context15.t0) {
                        _context15.next = 7;
                        break;
                      }

                      _context15.next = 7;
                      return r.analyze(this._idField, a.copy(), s, i, o);

                    case 7:
                      if (!a.next()) {
                        _context15.next = 13;
                        break;
                      }

                      _e20 = a.getGroupId();

                      if (null != _e20 && -1 !== _e20 || (_e20 = r.match(this._idField, a, a.geometryType, s, i), a.setGroupId(_e20)), Object(_templates_WGLTemplateStore_js__WEBPACK_IMPORTED_MODULE_9__["isDynamicId"])(_e20)) {
                        t = this._templateStore.getDynamicTemplateGroup(_e20);
                        _iterator8 = _createForOfIteratorHelper(t);

                        try {
                          for (_iterator8.s(); !(_step8 = _iterator8.n()).done;) {
                            _e21 = _step8.value;
                            _e21 && _e21.analyze && _e21.analyze(this._templateStore, a, s, i);
                          }
                        } catch (err) {
                          _iterator8.e(err);
                        } finally {
                          _iterator8.f();
                        }
                      }

                      a.setGroupId(_e20);

                    case 11:
                      _context15.next = 7;
                      break;

                    case 13:
                      return _context15.abrupt("return", this._templateStore.finalize(o));

                    case 14:
                    case "end":
                      return _context15.stop();
                  }
                }
              }, _callee15, this);
            }));

            function analyzeGraphics(_x27, _x28, _x29, _x30, _x31) {
              return _analyzeGraphics.apply(this, arguments);
            }

            return analyzeGraphics;
          }()
        }, {
          key: "writeGraphic",
          value: function writeGraphic(e, t) {
            var r = t.getGroupId(),
                s = t.getDisplayId(),
                i = this._templateStore.getTemplateGroup(r),
                o = t.geometryType;

            if (null != s) {
              if (Object(_templates_WGLTemplateStore_js__WEBPACK_IMPORTED_MODULE_9__["isDynamicId"])(r)) {
                var _iterator9 = _createForOfIteratorHelper(i),
                    _step9;

                try {
                  for (_iterator9.s(); !(_step9 = _iterator9.n()).done;) {
                    var _e22 = _step9.value;

                    _e22.bindFeature(t, null, null);
                  }
                } catch (err) {
                  _iterator9.e(err);
                } finally {
                  _iterator9.f();
                }
              }

              if (i) {
                e.writeDisplayObject(s, t.readGraphic().insertAfter);

                var _iterator10 = _createForOfIteratorHelper(i),
                    _step10;

                try {
                  for (_iterator10.s(); !(_step10 = _iterator10.n()).done;) {
                    var _r15 = _step10.value;
                    if (!_r15) continue;

                    var _i11 = e.get(_r15.geometryType);

                    _r15.writeMesh(e, _i11, t, o, s);
                  }
                } catch (err) {
                  _iterator10.e(err);
                } finally {
                  _iterator10.f();
                }
              }
            }
          }
        }, {
          key: "writeCursor",
          value: function writeCursor(t, r, s, i, o, a) {
            var l = r.getGroupId(),
                n = r.getDisplayId(),
                _m5 = this._templateStore.getTemplateGroup(l);

            if (null == n) return;
            if (!_m5) return;

            if (t.writeDisplayObject(n, 0), Object(_templates_WGLTemplateStore_js__WEBPACK_IMPORTED_MODULE_9__["isDynamicId"])(l)) {
              var _iterator11 = _createForOfIteratorHelper(_m5),
                  _step11;

              try {
                for (_iterator11.s(); !(_step11 = _iterator11.n()).done;) {
                  var e = _step11.value;
                  e.bindFeature(r, s, i);
                }
              } catch (err) {
                _iterator11.e(err);
              } finally {
                _iterator11.f();
              }
            }

            var _iterator12 = _createForOfIteratorHelper(_m5),
                _step12;

            try {
              for (_iterator12.s(); !(_step12 = _iterator12.n()).done;) {
                var _e24 = _step12.value;

                var _s10 = t.get(_e24.geometryType);

                !_e24.needsPixelBuffer && r.hasFilter() || _e24.writeMesh(t, _s10, r, this._geometryType, n);
              }
            } catch (err) {
              _iterator12.e(err);
            } finally {
              _iterator12.f();
            }

            var f = t.hasDisplayRecords();

            if (Object(_core_maybe_js__WEBPACK_IMPORTED_MODULE_1__["isSome"])(a) && f) {
              var _e23 = a && this._findLabelRef(_m5);

              this._writeLabels(t, r, n, a, _e23, o);
            }

            t.endDisplayObject();
          }
        }, {
          key: "_findLabelRef",
          value: function _findLabelRef(e) {
            var _iterator13 = _createForOfIteratorHelper(e),
                _step13;

            try {
              for (_iterator13.s(); !(_step13 = _iterator13.n()).done;) {
                var t = _step13.value;
                if (t instanceof _templates_WGLMarkerTemplate_js__WEBPACK_IMPORTED_MODULE_8__["default"]) return t;
              }
            } catch (err) {
              _iterator13.e(err);
            } finally {
              _iterator13.f();
            }

            return null;
          }
        }, {
          key: "_writeLabels",
          value: function _writeLabels(t, r, s, i, o, a) {
            var _iterator14 = _createForOfIteratorHelper(i),
                _step14;

            try {
              for (_iterator14.s(); !(_step14 = _iterator14.n()).done;) {
                var l = _step14.value;

                if (Object(_core_maybe_js__WEBPACK_IMPORTED_MODULE_1__["isSome"])(l) && l) {
                  var e = l.glyphs,
                      _i12 = l.rtl,
                      n = l.index,
                      p = this._labelTemplates[n],
                      _m7 = t.get(p.geometryType);

                  p.bindReferenceTemplate(o), p.bindTextInfo(e, _i12), p.writeMesh(t, _m7, r, this._geometryType, s, a);
                }
              }
            } catch (err) {
              _iterator14.e(err);
            } finally {
              _iterator14.f();
            }
          }
        }]);

        return m;
      }();
      /***/

    },

    /***/
    "L/mq":
    /*!**********************************************************************!*\
      !*** ./node_modules/@arcgis/core/views/2d/engine/webgl/util/Lock.js ***!
      \**********************************************************************/

    /*! exports provided: default, withLock */

    /***/
    function LMq(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "withLock", function () {
        return s;
      });
      /* harmony import */


      var _core_promiseUtils_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ../../../../../core/promiseUtils.js */
      "9MzC");
      /*
      All material copyright ESRI, All Rights Reserved, unless otherwise specified.
      See https://js.arcgis.com/4.18/esri/copyright.txt for details.
      */


      function s(e, r, s) {
        return e.acquire().then(function () {
          return r(s);
        }).then(function () {
          return e.release();
        })["catch"](function (r) {
          throw e.release(), r;
        });
      }
      /* harmony default export */


      __webpack_exports__["default"] = /*#__PURE__*/function () {
        function _class4() {
          _classCallCheck(this, _class4);

          this._resolver = null;
        }

        _createClass(_class4, [{
          key: "isHeld",
          value: function isHeld() {
            return !!this._resolver;
          }
        }, {
          key: "acquire",
          value: function acquire() {
            var _this12 = this;

            return this._resolver ? this._resolver.promise.then(function () {
              return _this12.acquire();
            }) : (this._resolver = Object(_core_promiseUtils_js__WEBPACK_IMPORTED_MODULE_0__["createResolver"])(), Object(_core_promiseUtils_js__WEBPACK_IMPORTED_MODULE_0__["resolve"])());
          }
        }, {
          key: "release",
          value: function release() {
            var e = this._resolver;
            this._resolver = null, e.resolve();
          }
        }]);

        return _class4;
      }();
      /***/

    },

    /***/
    "MrbB":
    /*!*************************************************************************!*\
      !*** ./node_modules/@arcgis/core/views/2d/layers/features/textUtils.js ***!
      \*************************************************************************/

    /*! exports provided: codepoints */

    /***/
    function MrbB(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "codepoints", function () {
        return t;
      });
      /*
      All material copyright ESRI, All Rights Reserved, unless otherwise specified.
      See https://js.arcgis.com/4.18/esri/copyright.txt for details.
      */


      function t(t) {
        var e = new Array(t.length);

        for (var n = 0; n < t.length; n++) {
          e[n] = t.charCodeAt(n);
        }

        return e;
      }
      /***/

    },

    /***/
    "NrhG":
    /*!********************************************************!*\
      !*** ./node_modules/@arcgis/core/symbols/cim/utils.js ***!
      \********************************************************/

    /*! exports provided: _adjustTextCase, colorToArray, createLabelOverrideFunction, evaluateValueOrFunction, fromCIMColor, isCIMFill, isCIMMarker, isCIMMarkerStrokePlacement, isCIMStroke, resampleHermite, toCIMSymbolJSON */

    /***/
    function NrhG(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "_adjustTextCase", function () {
        return n;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "colorToArray", function () {
        return e;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "createLabelOverrideFunction", function () {
        return r;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "evaluateValueOrFunction", function () {
        return t;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "fromCIMColor", function () {
        return i;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "isCIMFill", function () {
        return u;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "isCIMMarker", function () {
        return o;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "isCIMMarkerStrokePlacement", function () {
        return M;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "isCIMStroke", function () {
        return c;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "resampleHermite", function () {
        return a;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "toCIMSymbolJSON", function () {
        return l;
      });
      /*
      All material copyright ESRI, All Rights Reserved, unless otherwise specified.
      See https://js.arcgis.com/4.18/esri/copyright.txt for details.
      */


      function t(t, e, r, n) {
        return function (t) {
          return "function" == typeof t;
        }(t) ? t(e, r, n) : t;
      }

      function e(t) {
        return [t.r, t.g, t.b, t.a];
      }

      function r(t, e, r) {
        var a = function a(t) {
          var e = t.length;

          for (; e--;) {
            if (-1 === " /-,\n".indexOf(t.charAt(e))) return !1;
          }

          return !0;
        },
            i = [];

        var l = 0,
            o = -1;

        do {
          if (o = e.indexOf("[", l), o >= l) {
            if (o > l) {
              var _t25 = e.substr(l, o - l);

              i.push([_t25, null, a(_t25)]);
            }

            if (l = o + 1, o = e.indexOf("]", l), o >= l) {
              if (o > l) {
                var _r16 = t[e.substr(l, o - l)];
                _r16 && i.push([null, _r16, !1]);
              }

              l = o + 1;
            }
          }
        } while (-1 !== o);

        if (l < e.length - 1) {
          var _t26 = e.substr(l);

          i.push([_t26, null, a(_t26)]);
        }

        return function (t) {
          var e = "",
              a = null;

          var _iterator15 = _createForOfIteratorHelper(i),
              _step15;

          try {
            for (_iterator15.s(); !(_step15 = _iterator15.n()).done;) {
              var _r17 = _step15.value;

              var _r18 = _slicedToArray(_r17, 3),
                  _n9 = _r18[0],
                  _i13 = _r18[1],
                  _l6 = _r18[2];

              if (_n9) _l6 ? a = _n9 : (a && (e += a, a = null), e += _n9);else {
                var _r19 = t.attributes[_i13];
                _r19 && (a && (e += a, a = null), e += _r19);
              }
            }
          } catch (err) {
            _iterator15.e(err);
          } finally {
            _iterator15.f();
          }

          return n(e, r);
        };
      }

      function n(t, e) {
        switch ("string" != typeof t && (t = String(t)), e) {
          case "LowerCase":
            return t.toLowerCase();

          case "Allcaps":
            return t.toUpperCase();

          default:
            return t;
        }
      }

      function a(t, e, r, n, a, i) {
        var l = arguments.length > 6 && arguments[6] !== undefined ? arguments[6] : !0;
        var o = e / a,
            c = r / i,
            u = Math.ceil(o / 2),
            M = Math.ceil(c / 2);

        for (var _r20 = 0; _r20 < i; _r20++) {
          for (var s = 0; s < a; s++) {
            var f = 4 * (s + (l ? i - _r20 - 1 : _r20) * a);
            var p = 0,
                C = 0,
                y = 0,
                I = 0,
                h = 0,
                k = 0,
                d = 0;
            var P = (_r20 + .5) * c;

            for (var _n10 = Math.floor(_r20 * c); _n10 < (_r20 + 1) * c; _n10++) {
              var _r21 = Math.abs(P - (_n10 + .5)) / M,
                  _a7 = (s + .5) * o,
                  _i14 = _r21 * _r21;

              for (var _r22 = Math.floor(s * o); _r22 < (s + 1) * o; _r22++) {
                var _l7 = Math.abs(_a7 - (_r22 + .5)) / u;

                var _o14 = Math.sqrt(_i14 + _l7 * _l7);

                _o14 >= -1 && _o14 <= 1 && (p = 2 * _o14 * _o14 * _o14 - 3 * _o14 * _o14 + 1, p > 0 && (_l7 = 4 * (_r22 + _n10 * e), d += p * t[_l7 + 3], y += p, t[_l7 + 3] < 255 && (p = p * t[_l7 + 3] / 250), I += p * t[_l7], h += p * t[_l7 + 1], k += p * t[_l7 + 2], C += p));
              }
            }

            n[f] = I / C, n[f + 1] = h / C, n[f + 2] = k / C, n[f + 3] = d / y;
          }
        }
      }

      function i(t) {
        return t ? {
          r: t[0],
          g: t[1],
          b: t[2],
          a: t[3] / 255
        } : {
          r: 0,
          g: 0,
          b: 0,
          a: 0
        };
      }

      function l(t) {
        var e;
        return null == (e = t.data) ? void 0 : e.symbol;
      }

      function o(t) {
        return "CIMVectorMarker" === t.type || "CIMPictureMarker" === t.type || "CIMBarChartMarker" === t.type || "CIMCharacterMarker" === t.type || "CIMPieChartMarker" === t.type || "CIMStackedBarChartMarker" === t.type;
      }

      function c(t) {
        return "CIMGradientStroke" === t.type || "CIMPictureStroke" === t.type || "CIMSolidStroke" === t.type;
      }

      function u(t) {
        return "CIMGradientFill" === t.type || "CIMHatchFill" === t.type || "CIMPictureFill" === t.type || "CIMSolidFill" === t.type || "CIMWaterFill" === t.type;
      }

      function M(t) {
        return "CIMMarkerPlacementAlongLineRandomSize" === t.type || "CIMMarkerPlacementAlongLineSameSize" === t.type || "CIMMarkerPlacementAlongLineVariableSize" === t.type || "CIMMarkerPlacementAtExtremities" === t.type || "CIMMarkerPlacementAtMeasuredUnits" === t.type || "CIMMarkerPlacementAtRatioPositions" === t.type || "CIMMarkerPlacementOnLine" === t.type || "CIMMarkerPlacementOnVertices" === t.type;
      }
      /***/

    },

    /***/
    "OetV":
    /*!**************************************************************************************************!*\
      !*** ./node_modules/@arcgis/core/views/2d/engine/webgl/mesh/templates/WGLDynamicTextTemplate.js ***!
      \**************************************************************************************************/

    /*! exports provided: default */

    /***/
    function OetV(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony import */


      var _core_screenUtils_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ../../../../../../core/screenUtils.js */
      "qRWG");
      /* harmony import */


      var _alignmentUtils_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ../../alignmentUtils.js */
      "Mt1D");
      /* harmony import */


      var _materialKey_MaterialKey_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ../../materialKey/MaterialKey.js */
      "GMaR");
      /* harmony import */


      var _color_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ../../color.js */
      "qaIE");
      /* harmony import */


      var _util_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ./util.js */
      "aixI");
      /* harmony import */


      var _WGLBaseTextTemplate_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ./WGLBaseTextTemplate.js */
      "RNFe");
      /* harmony import */


      var _WGLDynamicMeshTemplate_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ./WGLDynamicMeshTemplate.js */
      "ej3m");
      /* harmony import */


      var _layers_features_textUtils_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! ../../../../layers/features/textUtils.js */
      "MrbB");
      /*
      All material copyright ESRI, All Rights Reserved, unless otherwise specified.
      See https://js.arcgis.com/4.18/esri/copyright.txt for details.
      */


      var h = /*#__PURE__*/function (_Object4) {
        _inherits(h, _Object4);

        var _super6 = _createSuper(h);

        function h(e) {
          var _this13;

          _classCallCheck(this, h);

          _this13 = _super6.call(this, e), _this13._horizontalAlignment = "center", _this13._verticalAlignment = "middle", _this13._textToGlyphs = new Map();
          var i = e.scaleFactor || 1;

          if (_this13._cimTextLayer = e, Object(_util_js__WEBPACK_IMPORTED_MODULE_4__["isFunction"])(e.color)) {
            var t = function t(_t27, i, s) {
              return Object(_color_js__WEBPACK_IMPORTED_MODULE_3__["premultiplyAlphaRGBA"])(e.color(_t27, i, s));
            };

            _this13._dynamicPropertyMap.set("_color", t);
          } else _this13._color = Object(_color_js__WEBPACK_IMPORTED_MODULE_3__["premultiplyAlphaRGBA"])(e.color);

          if (Object(_util_js__WEBPACK_IMPORTED_MODULE_4__["isFunction"])(e.color)) {
            var _t28 = function _t28(t, i, s) {
              return Object(_color_js__WEBPACK_IMPORTED_MODULE_3__["premultiplyAlphaRGBA"])(e.outlineColor(t, i, s));
            };

            _this13._dynamicPropertyMap.set("_haloColor", _t28);
          } else _this13._haloColor = Object(_color_js__WEBPACK_IMPORTED_MODULE_3__["premultiplyAlphaRGBA"])(e.outlineColor);

          var r;
          Object(_util_js__WEBPACK_IMPORTED_MODULE_4__["isFunction"])(e.size) || (r = Math.min(Math.round(Object(_core_screenUtils_js__WEBPACK_IMPORTED_MODULE_0__["pt2px"])(e.size * e.sizeRatio)), 127));

          if (_this13._dynamicPropertyMap.set("_size", function (i, s, o) {
            return Object(_util_js__WEBPACK_IMPORTED_MODULE_4__["isFunction"])(e.size) ? Math.min(Math.round(Object(_core_screenUtils_js__WEBPACK_IMPORTED_MODULE_0__["pt2px"])(e.size(i, s, o) * e.sizeRatio)), 127) : r;
          }), Object(_util_js__WEBPACK_IMPORTED_MODULE_4__["isFunction"])(e.outlineSize)) {
            var _i15 = function _i15(i, s, o) {
              return Math.min(Math.floor(5 * Object(_core_screenUtils_js__WEBPACK_IMPORTED_MODULE_0__["pt2px"])(e.outlineSize(i, s, o) * e.sizeRatio)), 127);
            };

            _this13._dynamicPropertyMap.set("_haloSize", _i15);
          } else _this13._haloSize = Math.min(Math.floor(5 * Object(_core_screenUtils_js__WEBPACK_IMPORTED_MODULE_0__["pt2px"])(e.outlineSize * e.sizeRatio)), 127);

          var n;
          Object(_util_js__WEBPACK_IMPORTED_MODULE_4__["isFunction"])(e.offsetX) || (n = Math.round(Object(_core_screenUtils_js__WEBPACK_IMPORTED_MODULE_0__["pt2px"])(e.offsetX * e.sizeRatio)));
          var l;
          _this13._dynamicPropertyMap.set("_xOffset", function (i, s, o) {
            return Object(_util_js__WEBPACK_IMPORTED_MODULE_4__["isFunction"])(e.offsetX) ? Math.round(Object(_core_screenUtils_js__WEBPACK_IMPORTED_MODULE_0__["pt2px"])(e.offsetX(i, s, o) * e.sizeRatio)) : n;
          }), Object(_util_js__WEBPACK_IMPORTED_MODULE_4__["isFunction"])(e.offsetY) || (l = Math.round(Object(_core_screenUtils_js__WEBPACK_IMPORTED_MODULE_0__["pt2px"])(e.offsetY * e.sizeRatio)));
          _this13._dynamicPropertyMap.set("_yOffset", function (i, s, o) {
            return Object(_util_js__WEBPACK_IMPORTED_MODULE_4__["isFunction"])(e.offsetY) ? Math.round(Object(_core_screenUtils_js__WEBPACK_IMPORTED_MODULE_0__["pt2px"])(e.offsetY(i, s, o) * e.sizeRatio)) : l;
          }), Object(_util_js__WEBPACK_IMPORTED_MODULE_4__["isFunction"])(e.angle) ? _this13._dynamicPropertyMap.set("_angle", e.angle) : _this13._angle = e.angle, Object(_util_js__WEBPACK_IMPORTED_MODULE_4__["isFunction"])(e.horizontalAlignment) ? _this13._dynamicPropertyMap.set("_horizontalAlignment", e.horizontalAlignment) : _this13._horizontalAlignment = e.horizontalAlignment, Object(_util_js__WEBPACK_IMPORTED_MODULE_4__["isFunction"])(e.verticalAlignment) ? _this13._dynamicPropertyMap.set("_verticalAlignment", e.verticalAlignment) : _this13._verticalAlignment = e.verticalAlignment, _this13._scaleFactor = i, Object(_util_js__WEBPACK_IMPORTED_MODULE_4__["isFunction"])(e.text) ? _this13._dynamicPropertyMap.set("_text", e.text) : _this13._text = e.text;

          var _h9 = Math.min(Math.round(Object(_core_screenUtils_js__WEBPACK_IMPORTED_MODULE_0__["pt2px"])(e.referenceSize * e.sizeRatio)), 127);

          _this13._referenceSize = Math.round(Math.sqrt(256 * _h9)), _this13._materialKey = e.materialKey;

          var c = _materialKey_MaterialKey_js__WEBPACK_IMPORTED_MODULE_2__["TextMaterialKey"].load(_this13._materialKey);

          c.sdf = !0, _this13._bitset = (1 === e.alignment ? 1 : 0) | (e.colorLocked ? 1 : 0) << 1, _this13._materialKey = c.data, _this13._decoration = "none", _this13._lineHeight = 1, _this13._lineWidth = 512, _this13._textPlacement = e.markerPlacement, _this13.effects = e.effects, _this13._isCIM = !0;
          return _this13;
        }

        _createClass(h, [{
          key: "analyze",
          value: function () {
            var _analyze2 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee16(t, e, i, s) {
              var o, a, r;
              return regeneratorRuntime.wrap(function _callee16$(_context16) {
                while (1) {
                  switch (_context16.prev = _context16.next) {
                    case 0:
                      o = e.readLegacyFeature();

                      a = function (t, e, i, s) {
                        return "string" == typeof t.text ? t.text : "function" == typeof t.text ? t.text(e, i, s) : "";
                      }(this._cimTextLayer, o, i, s);

                      _context16.next = 4;
                      return t.getMosaicItem(this._cimTextLayer.cim, Object(_layers_features_textUtils_js__WEBPACK_IMPORTED_MODULE_7__["codepoints"])(a));

                    case 4:
                      r = _context16.sent;
                      return _context16.abrupt("return", (this._textToGlyphs.set(a, r.glyphMosaicItems), r));

                    case 6:
                    case "end":
                      return _context16.stop();
                  }
                }
              }, _callee16, this);
            }));

            function analyze(_x32, _x33, _x34, _x35) {
              return _analyze2.apply(this, arguments);
            }

            return analyze;
          }()
        }, {
          key: "bindFeature",
          value: function bindFeature(t, s, o) {
            var _this14 = this;

            var a = t.readLegacyFeature();
            if (this._dynamicPropertyMap.forEach(function (t, e) {
              _this14[e] = t(a, s, o);
            }), !this._text || 0 === this._text.length) return void (this._shapingInfo = null);
            this._size *= this._scaleFactor, this._scale = this._size / 24, this._xOffset *= this._scaleFactor, this._yOffset *= this._scaleFactor, this._xAlignD = Object(_alignmentUtils_js__WEBPACK_IMPORTED_MODULE_1__["getXAnchorDirection"])(this._horizontalAlignment || "center"), this._yAlignD = Object(_alignmentUtils_js__WEBPACK_IMPORTED_MODULE_1__["getYAnchorDirection"])(this._verticalAlignment || "baseline");

            var r = this._textToGlyphs.get(this._text);

            this.bindTextInfo(r, !1);
          }
        }], [{
          key: "fromCIMText",
          value: function fromCIMText(t) {
            return new h(t);
          }
        }]);

        return h;
      }(Object(_WGLBaseTextTemplate_js__WEBPACK_IMPORTED_MODULE_5__["default"])(_WGLDynamicMeshTemplate_js__WEBPACK_IMPORTED_MODULE_6__["default"]));
      /* harmony default export */


      __webpack_exports__["default"] = h;
      /***/
    },

    /***/
    "QFw1":
    /*!************************************************************!*\
      !*** ./node_modules/@arcgis/core/symbols/cim/SDFHelper.js ***!
      \************************************************************/

    /*! exports provided: buildSDF, getExtent, getSDFInfo, getSDFMetrics, getSDFSymbol */

    /***/
    function QFw1(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "buildSDF", function () {
        return f;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "getExtent", function () {
        return i;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "getSDFInfo", function () {
        return r;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "getSDFMetrics", function () {
        return s;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "getSDFSymbol", function () {
        return l;
      });
      /* harmony import */


      var _geometry_support_jsonUtils_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ../../geometry/support/jsonUtils.js */
      "qatw");
      /* harmony import */


      var _Rect_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./Rect.js */
      "Du6U");
      /* harmony import */


      var _packingUtils_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./packingUtils.js */
      "X4zr");
      /*
      All material copyright ESRI, All Rights Reserved, unless otherwise specified.
      See https://js.arcgis.com/4.18/esri/copyright.txt for details.
      */


      function r(t) {
        if (!t) return null;

        switch (t.type) {
          case "CIMPointSymbol":
            {
              var n = t.symbolLayers;
              return n && 1 === n.length ? r(n[0]) : null;
            }

          case "CIMVectorMarker":
            {
              var _n11 = t.markerGraphics;
              if (!_n11 || 1 !== _n11.length) return null;
              var o = _n11[0];
              if (!o) return null;
              var _r23 = o.geometry;
              if (!_r23) return null;
              var _l8 = o.symbol;
              return !_l8 || "CIMPolygonSymbol" !== _l8.type && "CIMLineSymbol" !== _l8.type ? null : {
                geom: _r23,
                asFill: "CIMPolygonSymbol" === _l8.type
              };
            }

          case "sdf":
            return {
              geom: t.geom,
              asFill: t.asFill
            };
        }

        return null;
      }

      function l(t) {
        var n = t.markerGraphics;
        if (!n || 1 !== n.length) return null;
        var o = n[0];
        if (!o) return null;
        var r = o.symbol;
        return !r || "CIMPolygonSymbol" !== r.type && "CIMLineSymbol" !== r.type ? null : r;
      }

      function e(t) {
        var n = 1 / 0,
            o = -1 / 0,
            r = 1 / 0,
            l = -1 / 0;

        var _iterator16 = _createForOfIteratorHelper(t),
            _step16;

        try {
          for (_iterator16.s(); !(_step16 = _iterator16.n()).done;) {
            var _e25 = _step16.value;

            var _iterator17 = _createForOfIteratorHelper(_e25),
                _step17;

            try {
              for (_iterator17.s(); !(_step17 = _iterator17.n()).done;) {
                var _t29 = _step17.value;
                _t29[0] < n && (n = _t29[0]), _t29[0] > o && (o = _t29[0]), _t29[1] < r && (r = _t29[1]), _t29[1] > l && (l = _t29[1]);
              }
            } catch (err) {
              _iterator17.e(err);
            } finally {
              _iterator17.f();
            }
          }
        } catch (err) {
          _iterator16.e(err);
        } finally {
          _iterator16.f();
        }

        return [n, r, o, l];
      }

      function i(n) {
        return n ? n.rings ? e(n.rings) : n.paths ? e(n.paths) : Object(_geometry_support_jsonUtils_js__WEBPACK_IMPORTED_MODULE_0__["isExtent"])(n) ? [n.xmin, n.ymin, n.xmax, n.ymax] : null : null;
      }

      function s(t, n, o, r, l) {
        var _t30 = _slicedToArray(t, 4),
            e = _t30[0],
            i = _t30[1],
            s = _t30[2],
            f = _t30[3];

        if (s < e || f < i) return [0, 0, 0];
        var m = s - e,
            a = f - i,
            c = Math.floor(31.5),
            u = (128 - 2 * (c + 1)) / Math.max(m, a),
            y = Math.round(m * u) + 2 * c,
            h = Math.round(a * u) + 2 * c;
        var x = 1;

        if (n) {
          x = h / u / (n.ymax - n.ymin);
        }

        var M = 0,
            g = 0;
        if (r) if (l) {
          if (n && o && n.ymax - n.ymin > 0) {
            var _t31 = (n.xmax - n.xmin) / (n.ymax - n.ymin);

            M = r.x / (o * _t31), g = r.y / o;
          }
        } else M = r.x, g = r.y;
        M = .5 * (n.xmax + n.xmin) + M * (n.xmax - n.xmin), g = .5 * (n.ymax + n.ymin) + g * (n.ymax - n.ymin), M -= e, g -= i, M *= u, g *= u, M += c, g += c;
        return [x, M / y - .5, -(g / h - .5)];
      }

      function f(t) {
        var o = (r = t.geom) ? r.rings ? r.rings : r.paths ? r.paths : void 0 !== r.xmin && void 0 !== r.ymin && void 0 !== r.xmax && void 0 !== r.ymax ? [[[r.xmin, r.ymin], [r.xmin, r.ymax], [r.xmax, r.ymax], [r.xmax, r.ymin], [r.xmin, r.ymin]]] : null : null;
        var r;

        var l = function (t) {
          var o = 1 / 0,
              r = -1 / 0,
              l = 1 / 0,
              e = -1 / 0;

          var _iterator18 = _createForOfIteratorHelper(t),
              _step18;

          try {
            for (_iterator18.s(); !(_step18 = _iterator18.n()).done;) {
              var n = _step18.value;

              var _iterator19 = _createForOfIteratorHelper(n),
                  _step19;

              try {
                for (_iterator19.s(); !(_step19 = _iterator19.n()).done;) {
                  var _t32 = _step19.value;
                  _t32[0] < o && (o = _t32[0]), _t32[0] > r && (r = _t32[0]), _t32[1] < l && (l = _t32[1]), _t32[1] > e && (e = _t32[1]);
                }
              } catch (err) {
                _iterator19.e(err);
              } finally {
                _iterator19.f();
              }
            }
          } catch (err) {
            _iterator18.e(err);
          } finally {
            _iterator18.f();
          }

          return new _Rect_js__WEBPACK_IMPORTED_MODULE_1__["default"](o, l, r - o, e - l);
        }(o),
            e = Math.floor(31.5),
            i = (128 - 2 * (e + 1)) / Math.max(l.width, l.height),
            s = Math.round(l.width * i) + 2 * e,
            f = Math.round(l.height * i) + 2 * e,
            a = [];

        var _iterator20 = _createForOfIteratorHelper(o),
            _step20;

        try {
          for (_iterator20.s(); !(_step20 = _iterator20.n()).done;) {
            var n = _step20.value;

            if (n && n.length > 1) {
              var _o15 = [];

              var _iterator23 = _createForOfIteratorHelper(n),
                  _step23;

              try {
                for (_iterator23.s(); !(_step23 = _iterator23.n()).done;) {
                  var _t41 = _step23.value;

                  var _t42 = _slicedToArray(_t41, 2),
                      _n13 = _t42[0],
                      _r25 = _t42[1];

                  _n13 -= l.x, _r25 -= l.y, _n13 *= i, _r25 *= i, _n13 += e - .5, _r25 += e - .5, _o15.push([_n13, _r25]);
                }
              } catch (err) {
                _iterator23.e(err);
              } finally {
                _iterator23.f();
              }

              if (t.asFill) {
                var _t40 = _o15.length - 1;

                _o15[0][0] === _o15[_t40][0] && _o15[0][1] === _o15[_t40][1] || _o15.push(_o15[0]);
              }

              a.push(_o15);
            }
          }
        } catch (err) {
          _iterator20.e(err);
        } finally {
          _iterator20.f();
        }

        var c = function (t, n, o, r) {
          var l = n * o,
              e = new Array(l),
              i = r * r + 1;

          for (var _t33 = 0; _t33 < l; ++_t33) {
            e[_t33] = i;
          }

          var _iterator21 = _createForOfIteratorHelper(t),
              _step21;

          try {
            for (_iterator21.s(); !(_step21 = _iterator21.n()).done;) {
              var _l9 = _step21.value;
              var _t35 = _l9.length;

              for (var _i16 = 1; _i16 < _t35; ++_i16) {
                var _t36 = _l9[_i16 - 1],
                    _s11 = _l9[_i16];

                var _f6 = void 0,
                    _m8 = void 0,
                    _a8 = void 0,
                    _c8 = void 0;

                _t36[0] < _s11[0] ? (_f6 = _t36[0], _m8 = _s11[0]) : (_f6 = _s11[0], _m8 = _t36[0]), _t36[1] < _s11[1] ? (_a8 = _t36[1], _c8 = _s11[1]) : (_a8 = _s11[1], _c8 = _t36[1]);
                var u = Math.floor(_f6) - r,
                    y = Math.floor(_m8) + r,
                    h = Math.floor(_a8) - r,
                    x = Math.floor(_c8) + r;
                u < 0 && (u = 0), y > n && (y = n), h < 0 && (h = 0), x > o && (x = o);
                var M = _s11[0] - _t36[0],
                    g = _s11[1] - _t36[1],
                    p = M * M + g * g;

                for (var _r24 = u; _r24 < y; _r24++) {
                  for (var _l10 = h; _l10 < x; _l10++) {
                    var _i17 = void 0,
                        _f7 = void 0,
                        _m9 = (_r24 - _t36[0]) * M + (_l10 - _t36[1]) * g;

                    _m9 < 0 ? (_i17 = _t36[0], _f7 = _t36[1]) : _m9 > p ? (_i17 = _s11[0], _f7 = _s11[1]) : (_m9 /= p, _i17 = _t36[0] + _m9 * M, _f7 = _t36[1] + _m9 * g);

                    var _a9 = (_r24 - _i17) * (_r24 - _i17) + (_l10 - _f7) * (_l10 - _f7),
                        _c9 = (o - _l10 - 1) * n + _r24;

                    _a9 < e[_c9] && (e[_c9] = _a9);
                  }
                }
              }
            }
          } catch (err) {
            _iterator21.e(err);
          } finally {
            _iterator21.f();
          }

          for (var _t34 = 0; _t34 < l; ++_t34) {
            e[_t34] = Math.sqrt(e[_t34]);
          }

          return e;
        }(a, s, f, e);

        return t.asFill && function (t, n, o, r, l) {
          var _iterator22 = _createForOfIteratorHelper(t),
              _step22;

          try {
            for (_iterator22.s(); !(_step22 = _iterator22.n()).done;) {
              var _e26 = _step22.value;
              var _t37 = _e26.length;

              for (var _i18 = 1; _i18 < _t37; ++_i18) {
                var _t38 = _e26[_i18 - 1],
                    _s12 = _e26[_i18];

                var _f8 = void 0,
                    _m10 = void 0,
                    _a10 = void 0,
                    _c10 = void 0;

                _t38[0] < _s12[0] ? (_f8 = _t38[0], _m10 = _s12[0]) : (_f8 = _s12[0], _m10 = _t38[0]), _t38[1] < _s12[1] ? (_a10 = _t38[1], _c10 = _s12[1]) : (_a10 = _s12[1], _c10 = _t38[1]);
                var u = Math.floor(_f8),
                    y = Math.floor(_m10) + 1,
                    h = Math.floor(_a10),
                    x = Math.floor(_c10) + 1;
                u < r && (u = r), y > n - r && (y = n - r), h < r && (h = r), x > o - r && (x = o - r);

                for (var _e27 = h; _e27 < x; ++_e27) {
                  if (_t38[1] > _e27 == _s12[1] > _e27) continue;

                  var _i19 = (o - _e27 - 1) * n;

                  for (var _n12 = u; _n12 < y; ++_n12) {
                    _n12 < (_s12[0] - _t38[0]) * (_e27 - _t38[1]) / (_s12[1] - _t38[1]) + _t38[0] && (l[_i19 + _n12] = -l[_i19 + _n12]);
                  }

                  for (var _t39 = r; _t39 < u; ++_t39) {
                    l[_i19 + _t39] = -l[_i19 + _t39];
                  }
                }
              }
            }
          } catch (err) {
            _iterator22.e(err);
          } finally {
            _iterator22.f();
          }
        }(a, s, f, e, c), [m(c, e), s, f];
      }

      function m(t, n) {
        var r = 2 * n,
            l = t.length,
            e = new Uint8Array(4 * l);

        for (var _n14 = 0; _n14 < l; ++_n14) {
          var _l11 = .5 - t[_n14] / r;

          Object(_packingUtils_js__WEBPACK_IMPORTED_MODULE_2__["packFloatRGBA"])(_l11, e, 4 * _n14);
        }

        return e;
      }
      /***/

    },

    /***/
    "RNFe":
    /*!***********************************************************************************************!*\
      !*** ./node_modules/@arcgis/core/views/2d/engine/webgl/mesh/templates/WGLBaseTextTemplate.js ***!
      \***********************************************************************************************/

    /*! exports provided: default */

    /***/
    function RNFe(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony import */


      var _core_maybe_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ../../../../../../core/maybe.js */
      "srIe");
      /* harmony import */


      var _core_screenUtils_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ../../../../../../core/screenUtils.js */
      "qRWG");
      /* harmony import */


      var _layers_graphics_featureConversionUtils_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ../../../../../../layers/graphics/featureConversionUtils.js */
      "ZlUD");
      /* harmony import */


      var _definitions_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ../../definitions.js */
      "jIHu");
      /* harmony import */


      var _number_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ../../number.js */
      "0RS7");
      /* harmony import */


      var _shapingUtils_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ./shapingUtils.js */
      "G0q+");
      /* harmony import */


      var _enums_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ../../enums.js */
      "yE7X");
      /* harmony import */


      var _materialKey_MaterialKey_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! ../../materialKey/MaterialKey.js */
      "GMaR");
      /* harmony import */


      var _symbols_cim_placements_CIMMarkerPlacementHelper_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! ../../../../../../symbols/cim/placements/CIMMarkerPlacementHelper.js */
      "5Bb1");
      /*
      All material copyright ESRI, All Rights Reserved, unless otherwise specified.
      See https://js.arcgis.com/4.18/esri/copyright.txt for details.
      */

      /* harmony default export */


      __webpack_exports__["default"] = function (f) {
        return /*#__PURE__*/function (_f9) {
          _inherits(_class5, _f9);

          var _super7 = _createSuper(_class5);

          function _class5() {
            var _this15;

            _classCallCheck(this, _class5);

            for (var _len3 = arguments.length, t = new Array(_len3), _key3 = 0; _key3 < _len3; _key3++) {
              t[_key3] = arguments[_key3];
            }

            _this15 = _super7.call.apply(_super7, [this].concat(t)), _this15._isCIM = !1, _this15.geometryType = _enums_js__WEBPACK_IMPORTED_MODULE_6__["WGLGeometryType"].TEXT, _this15._aux = Object(_number_js__WEBPACK_IMPORTED_MODULE_4__["i8888to32"])(0, 0, _this15._referenceSize, _this15._bitset);
            return _this15;
          }

          _createClass(_class5, [{
            key: "bindTextInfo",
            value: function bindTextInfo(e, i) {
              var _this16 = this;

              e && e.length ? this._shapingInfo = Object(_core_maybe_js__WEBPACK_IMPORTED_MODULE_0__["andThen"])(e, function (t) {
                return Object(_shapingUtils_js__WEBPACK_IMPORTED_MODULE_5__["shapeGlyphs"])(t, i, {
                  scale: _this16._scale,
                  angle: _this16._angle,
                  xOffset: _this16._xOffset,
                  yOffset: _this16._yOffset,
                  hAlign: _this16._xAlignD,
                  vAlign: _this16._yAlignD,
                  maxLineWidth: Math.max(32, Math.min(_this16._lineWidth, 512)),
                  lineHeight: _definitions_js__WEBPACK_IMPORTED_MODULE_3__["MAGIC_LABEL_LINE_HEIGHT"] * Math.max(.25, Math.min(_this16._lineHeight, 4)),
                  decoration: _this16._decoration,
                  isCIM: _this16._isCIM
                });
              }) : this._shapingInfo = null;
            }
          }, {
            key: "writeMeshWithGeometry",
            value: function writeMeshWithGeometry(t, i, s, r, h, a) {
              var _this17 = this;

              if (Object(_core_maybe_js__WEBPACK_IMPORTED_MODULE_0__["isSome"])(this._textPlacement)) {
                var e = null != a ? a : s.readLegacyGeometry();
                return this._writePlacedText(t, i, h, e);
              }

              var l = a ? Object(_layers_graphics_featureConversionUtils_js__WEBPACK_IMPORTED_MODULE_2__["deltaDecodeGeometry"])(Object(_layers_graphics_featureConversionUtils_js__WEBPACK_IMPORTED_MODULE_2__["convertFromGeometry"])(a), 2) : "esriGeometryPolygon" === r ? s.readCentroid() : s.readUnquantizedGeometry();

              if (l) {
                if (l.isPoint) {
                  var _l$coords = _slicedToArray(l.coords, 2),
                      _e28 = _l$coords[0],
                      _s13 = _l$coords[1];

                  return this._writeGlyphs(t, i, h, {
                    x: _e28,
                    y: _s13
                  });
                }

                l.forEachVertex(function (e, s) {
                  return _this17._writeGlyphs(t, i, h, {
                    x: e,
                    y: s
                  });
                });
              }
            }
          }, {
            key: "_writePlacedText",
            value: function _writePlacedText(t, e, o, n) {
              var h = this._shapingInfo;
              if (Object(_core_maybe_js__WEBPACK_IMPORTED_MODULE_0__["isNone"])(h)) return;

              var a = _materialKey_MaterialKey_js__WEBPACK_IMPORTED_MODULE_7__["MaterialKeyBase"].load(this._materialKey),
                  m = Object(_core_maybe_js__WEBPACK_IMPORTED_MODULE_0__["unwrap"])(this._textPlacement),
                  p = _symbols_cim_placements_CIMMarkerPlacementHelper_js__WEBPACK_IMPORTED_MODULE_8__["CIMMarkerPlacementHelper"].getPlacement(n, m, Object(_core_screenUtils_js__WEBPACK_IMPORTED_MODULE_1__["pt2px"])(1));

              if (!p) return;

              var f,
                  _,
                  g = p.next();

              for (; null != g;) {
                _ = Object(_number_js__WEBPACK_IMPORTED_MODULE_4__["i1616to32"])(Math.round(8 * g.tx), Math.round(8 * g.ty)), f = g.getAngle(), h.setRotation(f);

                var _iterator24 = _createForOfIteratorHelper(h.glyphs),
                    _step24;

                try {
                  for (_iterator24.s(); !(_step24 = _iterator24.n()).done;) {
                    var _i20 = _step24.value;
                    a.textureBinding = _i20.textureBinding;

                    var s = e.getVector("geometry").vertexCount,
                        r = e.indexVector.length,
                        _n15 = this._writeIndices(e),
                        _h10 = this._writeVertex(e, o, _, _i20);

                    t.writeDisplayRecord(this.geometryType, a.data, s, _h10, r, _n15);
                  }
                } catch (err) {
                  _iterator24.e(err);
                } finally {
                  _iterator24.f();
                }

                h.setRotation(-f), g = p.next();
              }
            }
          }, {
            key: "_writeGlyphs",
            value: function _writeGlyphs(t, e, s, r) {
              var o = this._shapingInfo;
              if (Object(_core_maybe_js__WEBPACK_IMPORTED_MODULE_0__["isNone"])(o)) return;

              var n = _materialKey_MaterialKey_js__WEBPACK_IMPORTED_MODULE_7__["MaterialKeyBase"].load(this._materialKey),
                  h = Object(_number_js__WEBPACK_IMPORTED_MODULE_4__["i1616to32"])(Math.round(8 * r.x), Math.round(8 * r.y));

              var _iterator25 = _createForOfIteratorHelper(o.glyphs),
                  _step25;

              try {
                for (_iterator25.s(); !(_step25 = _iterator25.n()).done;) {
                  var _i21 = _step25.value;
                  n.textureBinding = _i21.textureBinding;

                  var _r26 = e.getVector("geometry").vertexCount,
                      _o16 = e.indexVector.length,
                      a = this._writeIndices(e),
                      l = this._writeVertex(e, s, h, _i21);

                  t.writeDisplayRecord(this.geometryType, n.data, _r26, l, _o16, a);
                }
              } catch (err) {
                _iterator25.e(err);
              } finally {
                _iterator25.f();
              }
            }
          }, {
            key: "_writeVertexCommon",
            value: function _writeVertexCommon(t, e, i, s) {
              var r = this._color,
                  o = this._haloColor,
                  n = Object(_number_js__WEBPACK_IMPORTED_MODULE_4__["i8888to32"])(0, 0, this._referenceSize, this._bitset),
                  h = Object(_number_js__WEBPACK_IMPORTED_MODULE_4__["i8888to32"])(0, 0, this._size, this._haloSize);
              t.push(i), t.push(e), t.push(r), t.push(o), t.push(h), t.push(n);
            }
          }, {
            key: "_writeVertex",
            value: function _writeVertex(t, e, i, s) {
              var r = t.get("geometry");
              return this._writeVertexCommon(r, e, i, s), r.push(s.offsets.upperLeft), r.push(s.texcoords.upperLeft), this._writeVertexCommon(r, e, i, s), r.push(s.offsets.upperRight), r.push(s.texcoords.upperRight), this._writeVertexCommon(r, e, i, s), r.push(s.offsets.lowerLeft), r.push(s.texcoords.lowerLeft), this._writeVertexCommon(r, e, i, s), r.push(s.offsets.lowerRight), r.push(s.texcoords.lowerRight), 4;
            }
          }, {
            key: "_writeIndices",
            value: function _writeIndices(t) {
              var e = t.getVector("geometry").vertexCount,
                  i = t.indexVector;
              return i.push(e + 0), i.push(e + 1), i.push(e + 2), i.push(e + 1), i.push(e + 3), i.push(e + 2), 6;
            }
          }]);

          return _class5;
        }(f);
      };
      /***/

    },

    /***/
    "T8sT":
    /*!**************************************************************!*\
      !*** ./node_modules/@arcgis/core/symbols/cim/cimAnalyzer.js ***!
      \**************************************************************/

    /*! exports provided: analyzeCIMResource, analyzeCIMSymbol */

    /***/
    function T8sT(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "analyzeCIMResource", function () {
        return j;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "analyzeCIMSymbol", function () {
        return N;
      });
      /* harmony import */


      var _core_string_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ../../core/string.js */
      "s7YA");
      /* harmony import */


      var _core_Logger_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ../../core/Logger.js */
      "6S2I");
      /* harmony import */


      var _core_promiseUtils_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ../../core/promiseUtils.js */
      "9MzC");
      /* harmony import */


      var _support_arcadeOnDemand_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ../../support/arcadeOnDemand.js */
      "gvqN");
      /* harmony import */


      var _Color_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ../../Color.js */
      "nvBr");
      /* harmony import */


      var _core_screenUtils_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ../../core/screenUtils.js */
      "qRWG");
      /* harmony import */


      var _utils_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ./utils.js */
      "NrhG");
      /* harmony import */


      var _views_2d_arcade_callExpressionWithFeature_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! ../../views/2d/arcade/callExpressionWithFeature.js */
      "ictz");
      /* harmony import */


      var _CIMSymbolHelper_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! ./CIMSymbolHelper.js */
      "eT81");
      /* harmony import */


      var _SDFHelper_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! ./SDFHelper.js */
      "QFw1");
      /*
      All material copyright ESRI, All Rights Reserved, unless otherwise specified.
      See https://js.arcgis.com/4.18/esri/copyright.txt for details.
      */


      var y = _core_Logger_js__WEBPACK_IMPORTED_MODULE_1__["default"].getLogger("esri.symbols.cim.cimAnalyzer");

      function h(e) {
        switch (e) {
          case "Butt":
            return 0;

          case "Square":
            return 2;

          case "Round":
          default:
            return 1;
        }
      }

      function g(e) {
        switch (e) {
          case "Bevel":
            return 0;

          case "Miter":
            return 2;

          case "Round":
          default:
            return 1;
        }
      }

      function d(e) {
        switch (e) {
          case "Left":
          default:
            return "left";

          case "Right":
            return "right";

          case "Center":
            return "center";

          case "Justify":
            return "justify";
        }
      }

      function S(e) {
        switch (e) {
          case "Top":
          default:
            return "top";

          case "Center":
            return "middle";

          case "Baseline":
            return "baseline";

          case "Bottom":
            return "bottom";
        }
      }

      function v(e, t, i, o) {
        var r;
        e[t] ? r = e[t] : (r = {}, e[t] = r), r[i] = o;
      }

      function b(e) {
        var t = e.markerPlacement;
        return t && t.angleToLine ? 1 : 0;
      }

      function N(_x36, _x37, _x38, _x39) {
        return _N.apply(this, arguments);
      }

      function _N() {
        _N = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee17(e, t, r, n) {
          var a, l, s, c, _e30, _iterator33, _step33, _loop;

          return regeneratorRuntime.wrap(function _callee17$(_context17) {
            while (1) {
              switch (_context17.prev = _context17.next) {
                case 0:
                  a = r || [];

                  if (e) {
                    _context17.next = 3;
                    break;
                  }

                  return _context17.abrupt("return", a);

                case 3:
                  c = {};

                  if (!("CIMSymbolReference" !== e.type)) {
                    _context17.next = 6;
                    break;
                  }

                  return _context17.abrupt("return", (y.error("Expect cim type to be 'CIMSymbolReference'"), a));

                case 6:
                  if (!(l = e.symbol, s = e.primitiveOverrides, s)) {
                    _context17.next = 12;
                    break;
                  }

                  _e30 = [];
                  _iterator33 = _createForOfIteratorHelper(s);

                  try {
                    _loop = function _loop() {
                      var i = _step33.value;
                      var r = i.valueExpressionInfo;

                      if (r && t) {
                        var _n16 = r.expression,
                            _a11 = Object(_support_arcadeOnDemand_js__WEBPACK_IMPORTED_MODULE_3__["createRendererExpression"])(_n16, t.spatialReference, t.fields).then(function (e) {
                          e && v(c, i.primitiveName, i.propertyName, e);
                        });

                        _e30.push(_a11);
                      } else null != i.value && v(c, i.primitiveName, i.propertyName, i.value);
                    };

                    for (_iterator33.s(); !(_step33 = _iterator33.n()).done;) {
                      _loop();
                    }
                  } catch (err) {
                    _iterator33.e(err);
                  } finally {
                    _iterator33.f();
                  }

                  _context17.next = 12;
                  return Object(_core_promiseUtils_js__WEBPACK_IMPORTED_MODULE_2__["all"])(_e30);

                case 12:
                  switch (l.type) {
                    case "CIMPointSymbol":
                    case "CIMLineSymbol":
                    case "CIMPolygonSymbol":
                      !function (e, t, i, o, r, n) {
                        if (!e) return;
                        var a = e.symbolLayers;
                        if (!a) return;
                        var l;

                        var s = _CIMSymbolHelper_js__WEBPACK_IMPORTED_MODULE_8__["CIMSymbolHelper"].getSize(e);

                        "CIMPointSymbol" === e.type && "Map" === e.angleAlignment && (l = 1);
                        var c = a.length;

                        for (; c--;) {
                          var f = a[c];
                          if (!f || !1 === f.enable) continue;
                          var p = [];

                          switch (_CIMSymbolHelper_js__WEBPACK_IMPORTED_MODULE_8__["OverrideHelper"].findApplicableOverrides(f, t, p), f.type) {
                            case "CIMSolidFill":
                              k(f, i, p, o, r);
                              break;

                            case "CIMPictureFill":
                              O(f, i, p, o, r);
                              break;

                            case "CIMHatchFill":
                              C(f, i, p, o, r);
                              break;

                            case "CIMGradientFill":
                              P(f, i, p, o, r);
                              break;

                            case "CIMSolidStroke":
                              L(f, i, p, o, r, "CIMPolygonSymbol" === e.type, s);
                              break;

                            case "CIMPictureStroke":
                              M(f, i, p, o, r, "CIMPolygonSymbol" === e.type, s);
                              break;

                            case "CIMGradientStroke":
                              X(f, i, p, o, r, "CIMPolygonSymbol" === e.type, s);
                              break;

                            case "CIMCharacterMarker":
                              if (I(f, i, p, o, r)) break;
                              break;

                            case "CIMPictureMarker":
                              if (I(f, i, p, o, r)) break;
                              "CIMLineSymbol" === e.type && (l = b(f)), x(f, i, p, o, r, l, s);
                              break;

                            case "CIMVectorMarker":
                              if (I(f, i, p, o, r)) break;
                              "CIMLineSymbol" === e.type && (l = b(f)), w(f, i, p, o, r, l, s, n);
                              break;

                            default:
                              y.error("Cannot analyze CIM layer", f.type);
                          }
                        }
                      }(l, s, c, t, a, n);
                  }

                  return _context17.abrupt("return", a);

                case 14:
                case "end":
                  return _context17.stop();
              }
            }
          }, _callee17);
        }));
        return _N.apply(this, arguments);
      }

      function k(t, i, o, r, n) {
        var a = t.primitiveName,
            s = Object(_utils_js__WEBPACK_IMPORTED_MODULE_6__["fromCIMColor"])(t.color),
            c = Object(_core_string_js__WEBPACK_IMPORTED_MODULE_0__["numericHash"])(JSON.stringify(t)).toString();
        n.push({
          type: "fill",
          templateHash: c,
          materialHash: 0 === o.length ? c : function () {
            return c;
          },
          cim: t,
          materialOverrides: null,
          colorLocked: t.colorLocked,
          color: $(a, i, "Color", r, s, R),
          height: 0,
          angle: 0,
          offsetX: 0,
          offsetY: 0,
          scaleX: 1,
          effects: t.effects
        });
      }

      function O(t, i, o, r, n) {
        var a = t.primitiveName,
            s = t.tintColor ? Object(_utils_js__WEBPACK_IMPORTED_MODULE_6__["fromCIMColor"])(t.tintColor) : {
          r: 255,
          g: 255,
          b: 255,
          a: 1
        },
            c = Object(_core_string_js__WEBPACK_IMPORTED_MODULE_0__["numericHash"])(JSON.stringify(t)).toString(),
            f = Object(_core_string_js__WEBPACK_IMPORTED_MODULE_0__["numericHash"])("".concat(t.url).concat(JSON.stringify(t.colorSubstitutions))).toString();
        n.push({
          type: "fill",
          templateHash: c,
          materialHash: 0 === o.length ? f : function () {
            return f;
          },
          cim: t,
          materialOverrides: null,
          colorLocked: t.colorLocked,
          effects: t.effects,
          color: $(a, i, "TintColor", r, s, R),
          height: $(a, i, "Height", r, t.height),
          scaleX: $(a, i, "ScaleX", r, t.scaleX),
          angle: $(a, i, "Rotation", r, t.rotation),
          offsetX: $(a, i, "OffsetX", r, t.offsetX),
          offsetY: $(a, i, "OffsetY", r, t.offsetY)
        });
      }

      function C(t, i, o, r, n) {
        var a = ["Rotation", "OffsetX", "OffsetY"],
            l = o.filter(function (e) {
          return e.primitiveName !== t.primitiveName && -1 === a.indexOf(e.propertyName);
        }),
            s = t.primitiveName,
            c = Object(_core_string_js__WEBPACK_IMPORTED_MODULE_0__["numericHash"])(JSON.stringify(t)).toString(),
            f = Object(_core_string_js__WEBPACK_IMPORTED_MODULE_0__["numericHash"])("".concat(t.separation).concat(JSON.stringify(t.lineSymbol))).toString();
        n.push({
          type: "fill",
          templateHash: c,
          materialHash: 0 === o.length ? f : A(f, i, l, r),
          cim: t,
          materialOverrides: l,
          colorLocked: t.colorLocked,
          effects: t.effects,
          color: {
            r: 255,
            g: 255,
            b: 255,
            a: 1
          },
          height: $(s, i, "Separation", r, t.separation),
          scaleX: 1,
          angle: $(s, i, "Rotation", r, t.rotation),
          offsetX: $(s, i, "OffsetX", r, t.offsetX),
          offsetY: $(s, i, "OffsetY", r, t.offsetY)
        });
      }

      function P(t, i, o, r, n) {
        var a = Object(_core_string_js__WEBPACK_IMPORTED_MODULE_0__["numericHash"])(JSON.stringify(t)).toString();
        n.push({
          type: "fill",
          templateHash: a,
          materialHash: 0 === o.length ? a : A(a, i, o, r),
          cim: t,
          materialOverrides: null,
          colorLocked: t.colorLocked,
          effects: t.effects,
          color: {
            r: 128,
            g: 128,
            b: 128,
            a: 1
          },
          height: 0,
          angle: 0,
          offsetX: 0,
          offsetY: 0,
          scaleX: 1
        });
      }

      function L(t, i, o, r, n, a, s) {
        var c = Object(_core_string_js__WEBPACK_IMPORTED_MODULE_0__["numericHash"])(JSON.stringify(t)).toString(),
            f = t.primitiveName,
            m = Object(_utils_js__WEBPACK_IMPORTED_MODULE_6__["fromCIMColor"])(t.color),
            p = void 0 !== t.width ? t.width : 4,
            u = h(t.capStyle),
            y = g(t.joinStyle),
            d = t.miterLimit;
        n.push({
          type: "line",
          templateHash: c,
          materialHash: 0 === o.length ? c : function () {
            return c;
          },
          cim: t,
          materialOverrides: null,
          isOutline: a,
          colorLocked: t.colorLocked,
          effects: t.effects,
          color: $(f, i, "Color", r, m, R),
          width: $(f, i, "Width", r, p),
          cap: $(f, i, "CapStyle", r, u),
          join: $(f, i, "JoinStyle", r, y),
          miterLimit: $(f, i, "MiterLimit", r, d),
          referenceWidth: s,
          zOrder: Y(t.name),
          isDashed: !1
        });
      }

      function M(t, i, o, r, n, a, s) {
        var c = Object(_core_string_js__WEBPACK_IMPORTED_MODULE_0__["numericHash"])("".concat(t.url).concat(JSON.stringify(t.colorSubstitutions))).toString(),
            f = t.primitiveName,
            m = Object(_utils_js__WEBPACK_IMPORTED_MODULE_6__["fromCIMColor"])(t.tintColor),
            p = void 0 !== t.width ? t.width : 4,
            u = h(t.capStyle),
            y = g(t.joinStyle),
            d = t.miterLimit,
            S = Object(_core_string_js__WEBPACK_IMPORTED_MODULE_0__["numericHash"])(JSON.stringify(t)).toString();
        n.push({
          type: "line",
          templateHash: S,
          materialHash: 0 === o.length ? c : function () {
            return c;
          },
          cim: t,
          materialOverrides: null,
          isOutline: a,
          colorLocked: t.colorLocked,
          effects: t.effects,
          color: $(f, i, "TintColor", r, m, R),
          width: $(f, i, "Width", r, p),
          cap: $(f, i, "CapStyle", r, u),
          join: $(f, i, "JoinStyle", r, y),
          miterLimit: $(f, i, "MiterLimit", r, d),
          referenceWidth: s,
          zOrder: Y(t.name),
          isDashed: !1
        });
      }

      function X(t, i, o, r, n, a, l) {
        var s = t.primitiveName,
            c = void 0 !== t.width ? t.width : 4,
            f = h(t.capStyle),
            m = g(t.joinStyle),
            p = t.miterLimit,
            u = Object(_core_string_js__WEBPACK_IMPORTED_MODULE_0__["numericHash"])(JSON.stringify(t)).toString();
        n.push({
          type: "line",
          templateHash: u,
          materialHash: 0 === o.length ? u : A(u, i, o, r),
          cim: t,
          materialOverrides: null,
          isOutline: a,
          colorLocked: t.colorLocked,
          effects: t.effects,
          color: {
            r: 128,
            g: 128,
            b: 128,
            a: 1
          },
          width: $(s, i, "Width", r, c),
          cap: $(s, i, "CapStyle", r, f),
          join: $(s, i, "JoinStyle", r, m),
          miterLimit: $(s, i, "MiterLimit", r, p),
          referenceWidth: l,
          zOrder: Y(t.name),
          isDashed: !1
        });
      }

      function I(t, i, o, r, n) {
        var a = t.markerPlacement;
        if (!a || "CIMMarkerPlacementInsidePolygon" !== a.type) return !1;
        var l = a,
            s = ["Rotation", "OffsetX", "OffsetY"],
            c = o.filter(function (e) {
          return e.primitiveName !== t.primitiveName && -1 === s.indexOf(e.propertyName);
        }),
            f = Object(_core_string_js__WEBPACK_IMPORTED_MODULE_0__["numericHash"])(JSON.stringify(t)).toString();
        return n.push({
          type: "fill",
          templateHash: f,
          materialHash: 0 === o.length ? f : A(f, i, c, r),
          cim: t,
          materialOverrides: c,
          colorLocked: t.colorLocked,
          effects: t.effects,
          color: {
            r: 255,
            g: 255,
            b: 255,
            a: 1
          },
          height: $(l.primitiveName, i, "StepY", r, l.stepY),
          scaleX: 1,
          angle: $(l.primitiveName, i, "GridAngle", r, l.gridAngle),
          offsetX: $(l.primitiveName, i, "OffsetX", r, l.offsetX),
          offsetY: $(l.primitiveName, i, "OffsetY", r, l.offsetY)
        }), !0;
      }

      function x(t, i, o, r, n, a, s) {
        var c = t.primitiveName,
            f = t.size,
            m = t.scaleX,
            p = t.rotation,
            u = t.offsetX,
            y = t.offsetY,
            h = Object(_utils_js__WEBPACK_IMPORTED_MODULE_6__["fromCIMColor"])(t.tintColor),
            g = Object(_core_string_js__WEBPACK_IMPORTED_MODULE_0__["numericHash"])("".concat(t.url).concat(JSON.stringify(t.colorSubstitutions))).toString();
        var d = !1,
            S = "";

        var _iterator26 = _createForOfIteratorHelper(o),
            _step26;

        try {
          for (_iterator26.s(); !(_step26 = _iterator26.n()).done;) {
            var e = _step26.value;
            e.primitiveName === c && (void 0 !== e.value ? S += "-".concat(e.primitiveName, "-").concat(e.propertyName, "-").concat(JSON.stringify(e.value)) : e.valueExpressionInfo && (d = !0));
          }
        } catch (err) {
          _iterator26.e(err);
        } finally {
          _iterator26.f();
        }

        n.push({
          type: "marker",
          templateHash: Object(_core_string_js__WEBPACK_IMPORTED_MODULE_0__["numericHash"])(JSON.stringify(t) + S).toString(),
          materialHash: d ? function () {
            return g;
          } : g,
          cim: t,
          materialOverrides: null,
          colorLocked: t.colorLocked,
          effects: t.effects,
          scaleSymbolsProportionally: !1,
          alignment: a,
          size: $(c, i, "Size", r, f),
          scaleX: $(c, i, "ScaleX", r, m),
          rotation: $(c, i, "Rotation", r, p),
          offsetX: $(c, i, "OffsetX", r, u),
          offsetY: $(c, i, "OffsetY", r, y),
          color: $(c, i, "TintColor", r, h, R),
          anchorPoint: t.anchorPoint,
          isAbsoluteAnchorPoint: "Relative" !== t.anchorPointUnits,
          outlineColor: {
            r: 0,
            g: 0,
            b: 0,
            a: 0
          },
          outlineWidth: 0,
          frameHeight: 0,
          rotateClockwise: t.rotateClockwise,
          referenceSize: s,
          sizeRatio: 1,
          markerPlacement: t.markerPlacement
        });
      }

      function w(e, t, i, o, r, n, a, l) {
        var s = e.markerGraphics;
        if (!s) return;
        var c = 0;

        if (e.scaleSymbolsProportionally) {
          var _t43 = e.frame;
          _t43 && (c = _t43.ymax - _t43.ymin);
        }

        var _iterator27 = _createForOfIteratorHelper(s),
            _step27;

        try {
          for (_iterator27.s(); !(_step27 = _iterator27.n()).done;) {
            var f = _step27.value;

            if (f) {
              var _s14 = f.symbol;
              if (!_s14) continue;

              switch (_s14.type) {
                case "CIMPointSymbol":
                case "CIMLineSymbol":
                case "CIMPolygonSymbol":
                  J(e, f, i, t, o, r, n, a, c, l);
                  break;

                case "CIMTextSymbol":
                  z(e, f, t, i, o, r, n, a, c);
              }
            }
          }
        } catch (err) {
          _iterator27.e(err);
        } finally {
          _iterator27.f();
        }
      }

      function z(t, i, o, r, n, a, c, p, u) {
        _CIMSymbolHelper_js__WEBPACK_IMPORTED_MODULE_8__["OverrideHelper"].findApplicableOverrides(i, r, []);

        var y = i.geometry;
        if (!("x" in y) || !("y" in y)) return;
        var h = i.symbol,
            g = (v = h).underline ? "underline" : v.strikethrough ? "line-through" : "none";
        var v;

        var b = function (e) {
          var t = "normal",
              i = "normal";

          if (e) {
            var _o17 = e.toLowerCase();

            -1 !== _o17.indexOf("italic") ? t = "italic" : -1 !== _o17.indexOf("oblique") && (t = "oblique"), -1 !== _o17.indexOf("bold") ? i = "bold" : -1 !== _o17.indexOf("light") && (i = "lighter");
          }

          return {
            style: t,
            weight: i
          };
        }(h.fontStyleName);

        h.font = _objectSpread({
          family: h.fontFamilyName,
          decoration: g
        }, b);
        var N = t.frame,
            k = y.x - .5 * (N.xmin + N.xmax),
            O = y.y - .5 * (N.ymin + N.ymax),
            C = t.size / u,
            P = t.primitiveName,
            L = (h.height || 0) * C,
            M = h.angle || 0,
            X = ((h.offsetX || 0) + k) * C,
            I = ((h.offsetY || 0) + O) * C,
            x = Object(_utils_js__WEBPACK_IMPORTED_MODULE_6__["fromCIMColor"])(_CIMSymbolHelper_js__WEBPACK_IMPORTED_MODULE_8__["CIMSymbolHelper"].getFillColor(h));

        var w = Object(_utils_js__WEBPACK_IMPORTED_MODULE_6__["fromCIMColor"])(_CIMSymbolHelper_js__WEBPACK_IMPORTED_MODULE_8__["CIMSymbolHelper"].getStrokeColor(h)),
            z = _CIMSymbolHelper_js__WEBPACK_IMPORTED_MODULE_8__["CIMSymbolHelper"].getStrokeWidth(h);

        z || (w = Object(_utils_js__WEBPACK_IMPORTED_MODULE_6__["fromCIMColor"])(_CIMSymbolHelper_js__WEBPACK_IMPORTED_MODULE_8__["CIMSymbolHelper"].getFillColor(h.haloSymbol)), z = h.haloSize * C);
        var J = "";

        var _iterator28 = _createForOfIteratorHelper(r),
            _step28;

        try {
          for (_iterator28.s(); !(_step28 = _iterator28.n()).done;) {
            var e = _step28.value;
            e.primitiveName === P && void 0 !== e.value && (J += "-".concat(e.primitiveName, "-").concat(e.propertyName, "-").concat(JSON.stringify(e.value)));
          }
        } catch (err) {
          _iterator28.e(err);
        } finally {
          _iterator28.f();
        }

        var H = JSON.stringify(t.effects) + Number(t.colorLocked) + JSON.stringify(t.anchorPoint) + t.anchorPointUnits + JSON.stringify(t.markerPlacement),
            Y = Object(_core_string_js__WEBPACK_IMPORTED_MODULE_0__["numericHash"])(JSON.stringify(i) + H + J).toString();
        a.push({
          type: "text",
          templateHash: Y,
          materialHash: function materialHash() {
            return Object(_core_string_js__WEBPACK_IMPORTED_MODULE_0__["numericHash"])(JSON.stringify(h.font)).toString();
          },
          cim: h,
          materialOverrides: null,
          colorLocked: t.colorLocked,
          effects: t.effects,
          alignment: c,
          anchorPoint: {
            x: t.anchorPoint ? t.anchorPoint.x : 0,
            y: t.anchorPoint ? t.anchorPoint.y : 0
          },
          isAbsoluteAnchorPoint: "Relative" !== t.anchorPointUnits,
          fontName: h.fontFamilyName,
          decoration: "none",
          weight: "normal",
          style: "normal",
          size: $(P, o, "Size", n, L),
          angle: $(P, o, "Rotation", n, M),
          offsetX: $(P, o, "OffsetX", n, X),
          offsetY: $(P, o, "OffsetY", n, I),
          horizontalAlignment: d(h.horizontalAlignment),
          verticalAlignment: S(h.verticalAlignment),
          text: $(i.primitiveName, o, "TextString", n, i.textString, _utils_js__WEBPACK_IMPORTED_MODULE_6__["_adjustTextCase"], h.textCase),
          color: x,
          outlineColor: w,
          outlineSize: z,
          referenceSize: p,
          sizeRatio: 1,
          markerPlacement: t.markerPlacement
        });
      }

      function J(t, i, o, r, n, a, s, c, m, y) {
        var h = i.symbol,
            g = i.geometry;
        if (!g) return;
        var d = h.symbolLayers;
        if (!d) return;
        if (y) return void H(t, i, r, o, n, a, s, c, m);
        var S = d.length;

        for (; S--;) {
          var _y4 = d[S];
          if (_y4 && !1 !== _y4.enable) switch (_y4.type) {
            case "CIMSolidFill":
            case "CIMSolidStroke":
              {
                var _ret = function () {
                  var h = Object(_SDFHelper_js__WEBPACK_IMPORTED_MODULE_9__["getExtent"])(g);
                  if (!h) return "continue";

                  var _Object5 = Object(_SDFHelper_js__WEBPACK_IMPORTED_MODULE_9__["getSDFMetrics"])(h, t.frame, t.size, t.anchorPoint, "Relative" !== t.anchorPointUnits),
                      _Object6 = _slicedToArray(_Object5, 3),
                      d = _Object6[0],
                      S = _Object6[1],
                      v = _Object6[2],
                      b = "CIMSolidFill" === _y4.type,
                      N = {
                    type: "sdf",
                    geom: g,
                    asFill: b
                  },
                      k = t.primitiveName,
                      O = t.size,
                      C = t.rotation || 0,
                      P = t.offsetX,
                      L = t.offsetY,
                      M = _y4.primitiveName,
                      X = Object(_utils_js__WEBPACK_IMPORTED_MODULE_6__["fromCIMColor"])(b ? _CIMSymbolHelper_js__WEBPACK_IMPORTED_MODULE_8__["CIMSymbolHelper"].getFillColor(_y4) : _CIMSymbolHelper_js__WEBPACK_IMPORTED_MODULE_8__["CIMSymbolHelper"].getStrokeColor(_y4)),
                      I = b ? {
                    r: 0,
                    g: 0,
                    b: 0,
                    a: 0
                  } : Object(_utils_js__WEBPACK_IMPORTED_MODULE_6__["fromCIMColor"])(_CIMSymbolHelper_js__WEBPACK_IMPORTED_MODULE_8__["CIMSymbolHelper"].getStrokeColor(_y4)),
                      x = _CIMSymbolHelper_js__WEBPACK_IMPORTED_MODULE_8__["CIMSymbolHelper"].getStrokeWidth(_y4);

                  if (!b && !x) return "break";
                  var w = !1,
                      z = "";

                  var _iterator29 = _createForOfIteratorHelper(o),
                      _step29;

                  try {
                    for (_iterator29.s(); !(_step29 = _iterator29.n()).done;) {
                      var e = _step29.value;
                      e.primitiveName !== M && e.primitiveName !== k || (void 0 !== e.value ? z += "-".concat(e.primitiveName, "-").concat(e.propertyName, "-").concat(JSON.stringify(e.value)) : e.valueExpressionInfo && (w = !0));
                    }
                  } catch (err) {
                    _iterator29.e(err);
                  } finally {
                    _iterator29.f();
                  }

                  var J = JSON.stringify(_objectSpread(_objectSpread({}, t), {}, {
                    markerGraphics: null
                  })),
                      H = Object(_core_string_js__WEBPACK_IMPORTED_MODULE_0__["numericHash"])(JSON.stringify(N)).toString(),
                      Y = {
                    type: "marker",
                    templateHash: Object(_core_string_js__WEBPACK_IMPORTED_MODULE_0__["numericHash"])(JSON.stringify(i) + JSON.stringify(_y4) + J + z).toString(),
                    materialHash: w ? function () {
                      return H;
                    } : H,
                    cim: N,
                    materialOverrides: null,
                    colorLocked: t.colorLocked,
                    effects: t.effects,
                    scaleSymbolsProportionally: t.scaleSymbolsProportionally,
                    alignment: s,
                    anchorPoint: {
                      x: S,
                      y: v
                    },
                    isAbsoluteAnchorPoint: !1,
                    size: $(t.primitiveName, r, "Size", n, O),
                    rotation: $(t.primitiveName, r, "Rotation", n, C),
                    offsetX: $(t.primitiveName, r, "OffsetX", n, P),
                    offsetY: $(t.primitiveName, r, "OffsetY", n, L),
                    scaleX: 1,
                    frameHeight: m,
                    rotateClockwise: t.rotateClockwise,
                    referenceSize: c,
                    sizeRatio: d,
                    color: $(M, r, "Color", n, X, R),
                    outlineColor: $(M, r, "Color", n, I, R),
                    outlineWidth: $(M, r, "Width", n, x),
                    markerPlacement: t.markerPlacement
                  };
                  a.push(Y);
                  return "break";
                }();

                if (_ret === "continue") continue;
                if (_ret === "break") break;
              }

            default:
              H(t, i, r, o, n, a, s, c, m);
          }
        }
      }

      function H(t, i, o, r, n, l, s, c, m) {
        var p = function (e, t) {
          return {
            type: e.type,
            enable: !0,
            name: e.name,
            colorLocked: e.colorLocked,
            primitiveName: e.primitiveName,
            anchorPoint: e.anchorPoint,
            anchorPointUnits: e.anchorPointUnits,
            offsetX: 0,
            offsetY: 0,
            rotateClockwise: e.rotateClockwise,
            rotation: 0,
            size: e.size,
            billboardMode3D: e.billboardMode3D,
            depth3D: e.depth3D,
            frame: e.frame,
            markerGraphics: [t],
            scaleSymbolsProportionally: e.scaleSymbolsProportionally,
            respectFrame: e.respectFrame,
            clippingPath: e.clippingPath,
            effects: e.effects
          };
        }(t, i);

        var u = [];
        var y = ["Rotation", "OffsetX", "OffsetY"];
        u = r.filter(function (e) {
          return e.primitiveName !== t.primitiveName || -1 === y.indexOf(e.propertyName);
        });
        var h = "";

        var _iterator30 = _createForOfIteratorHelper(r),
            _step30;

        try {
          for (_iterator30.s(); !(_step30 = _iterator30.n()).done;) {
            var e = _step30.value;
            void 0 !== e.value && (h += "-".concat(e.primitiveName, "-").concat(e.propertyName, "-").concat(JSON.stringify(e.value)));
          }
        } catch (err) {
          _iterator30.e(err);
        } finally {
          _iterator30.f();
        }

        var _CIMSymbolHelper_js__ = _CIMSymbolHelper_js__WEBPACK_IMPORTED_MODULE_8__["CIMSymbolHelper"].getTextureAnchor(p),
            _CIMSymbolHelper_js__2 = _slicedToArray(_CIMSymbolHelper_js__, 3),
            g = _CIMSymbolHelper_js__2[0],
            d = _CIMSymbolHelper_js__2[1],
            S = _CIMSymbolHelper_js__2[2],
            v = t.primitiveName,
            b = t.rotation || 0,
            N = t.offsetX || 0,
            k = t.offsetY || 0,
            O = Object(_core_string_js__WEBPACK_IMPORTED_MODULE_0__["numericHash"])(JSON.stringify(p) + h).toString(),
            C = {
          type: "marker",
          templateHash: O,
          materialHash: 0 === u.length ? O : A(O, o, u, n),
          cim: p,
          materialOverrides: u,
          colorLocked: t.colorLocked,
          effects: t.effects,
          scaleSymbolsProportionally: t.scaleSymbolsProportionally,
          alignment: s,
          anchorPoint: {
            x: g,
            y: d
          },
          isAbsoluteAnchorPoint: !1,
          size: t.size,
          rotation: $(v, o, "Rotation", n, b),
          offsetX: $(v, o, "OffsetX", n, N),
          offsetY: $(v, o, "OffsetY", n, k),
          color: {
            r: 0,
            g: 0,
            b: 0,
            a: 0
          },
          outlineColor: {
            r: 0,
            g: 0,
            b: 0,
            a: 0
          },
          outlineWidth: 0,
          scaleX: 1,
          frameHeight: m,
          rotateClockwise: t.rotateClockwise,
          referenceSize: c,
          sizeRatio: S / Object(_core_screenUtils_js__WEBPACK_IMPORTED_MODULE_5__["pt2px"])(t.size),
          markerPlacement: t.markerPlacement
        };

        l.push(C);
      }

      function Y(e) {
        if (e && 0 === e.indexOf("Level_")) {
          var t = parseInt(e.substr(6), 10);
          if (NaN !== t) return t;
        }

        return 0;
      }

      function R(e) {
        if (!e || 0 === e.length) return null;
        var t = new _Color_js__WEBPACK_IMPORTED_MODULE_4__["default"](e).toRgba();
        return {
          r: t[0],
          g: t[1],
          b: t[2],
          a: t[3]
        };
      }

      function $(e, t, i, o, n, a, l) {
        var s = t[e];

        if (s) {
          var _e29 = s[i];
          if ("string" == typeof _e29 || "number" == typeof _e29 || _e29 instanceof Array) return a ? a.call(null, _e29, l) : _e29;
          if (null != _e29 && _e29 instanceof _support_arcadeOnDemand_js__WEBPACK_IMPORTED_MODULE_3__["ArcadeExpression"]) return function (t, i, r) {
            var s = Object(_views_2d_arcade_callExpressionWithFeature_js__WEBPACK_IMPORTED_MODULE_7__["default"])(_e29, t, {
              $view: r
            }, o.geometryType, i);
            return null !== s && a && (s = a.call(null, s, l)), null !== s ? s : n;
          };
        }

        return n;
      }

      function A(t, i, o, n) {
        var _iterator31 = _createForOfIteratorHelper(o),
            _step31;

        try {
          for (_iterator31.s(); !(_step31 = _iterator31.n()).done;) {
            var e = _step31.value;

            if (e.valueExpressionInfo) {
              (function () {
                var t = i[e.primitiveName] && i[e.primitiveName][e.propertyName];
                t instanceof _support_arcadeOnDemand_js__WEBPACK_IMPORTED_MODULE_3__["ArcadeExpression"] && (e.fn = function (e, i, o) {
                  return Object(_views_2d_arcade_callExpressionWithFeature_js__WEBPACK_IMPORTED_MODULE_7__["default"])(t, e, {
                    $view: o
                  }, n.geometryType, i);
                });
              })();
            }
          }
        } catch (err) {
          _iterator31.e(err);
        } finally {
          _iterator31.f();
        }

        return function (i, r, n) {
          var _iterator32 = _createForOfIteratorHelper(o),
              _step32;

          try {
            for (_iterator32.s(); !(_step32 = _iterator32.n()).done;) {
              var e = _step32.value;
              e.fn && (e.value = e.fn(i, r, n));
            }
          } catch (err) {
            _iterator32.e(err);
          } finally {
            _iterator32.f();
          }

          return Object(_core_string_js__WEBPACK_IMPORTED_MODULE_0__["numericHash"])(t + _CIMSymbolHelper_js__WEBPACK_IMPORTED_MODULE_8__["OverrideHelper"].buildOverrideKey(o)).toString();
        };
      }

      function j(e, t) {
        if (!t || 0 === t.length) return e;
        var i = JSON.parse(JSON.stringify(e));
        return _CIMSymbolHelper_js__WEBPACK_IMPORTED_MODULE_8__["OverrideHelper"].applyOverrides(i, t), i;
      }
      /***/

    },

    /***/
    "XbuD":
    /*!**************************************************************************!*\
      !*** ./node_modules/@arcgis/core/symbols/cim/effects/CIMEffectHelper.js ***!
      \**************************************************************************/

    /*! exports provided: CIMEffectHelper */

    /***/
    function XbuD(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "CIMEffectHelper", function () {
        return s;
      });
      /* harmony import */


      var _CIMCursor_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ../CIMCursor.js */
      "tqcG");
      /* harmony import */


      var _CIMEffects_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ../CIMEffects.js */
      "/iQf");
      /* harmony import */


      var _CIMOperators_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ../CIMOperators.js */
      "k0QX");
      /*
      All material copyright ESRI, All Rights Reserved, unless otherwise specified.
      See https://js.arcgis.com/4.18/esri/copyright.txt for details.
      */


      var s = /*#__PURE__*/function () {
        function s() {
          _classCallCheck(this, s);
        }

        _createClass(s, null, [{
          key: "executeEffects",
          value: function executeEffects(e, _s15) {
            var c = Object(_CIMCursor_js__WEBPACK_IMPORTED_MODULE_0__["cloneAndDecodeGeometry"])(_s15);
            var f = new _CIMEffects_js__WEBPACK_IMPORTED_MODULE_1__["SimpleGeometryCursor"](c);

            var _iterator34 = _createForOfIteratorHelper(e),
                _step34;

            try {
              for (_iterator34.s(); !(_step34 = _iterator34.n()).done;) {
                var t = _step34.value;

                var _e31 = Object(_CIMOperators_js__WEBPACK_IMPORTED_MODULE_2__["getEffectOperator"])(t);

                _e31 && (f = _e31.execute(f, t, 1.3333333333333333));
              }
            } catch (err) {
              _iterator34.e(err);
            } finally {
              _iterator34.f();
            }

            return f;
          }
        }, {
          key: "next",
          value: function next(t) {
            var r = t.next();
            return Object(_CIMCursor_js__WEBPACK_IMPORTED_MODULE_0__["deltaEncodeGeometry"])(r), r;
          }
        }]);

        return s;
      }();
      /***/

    },

    /***/
    "YB6V":
    /*!*************************************************************************!*\
      !*** ./node_modules/@arcgis/core/views/2d/engine/webgl/util/Matcher.js ***!
      \*************************************************************************/

    /*! exports provided: DictionaryMatcher, FeatureMatcher, IntervalMatcher, MapMatcher */

    /***/
    function YB6V(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "DictionaryMatcher", function () {
        return m;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "FeatureMatcher", function () {
        return c;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "IntervalMatcher", function () {
        return d;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "MapMatcher", function () {
        return f;
      });
      /* harmony import */


      var _core_Logger_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ../../../../../core/Logger.js */
      "6S2I");
      /* harmony import */


      var _core_Error_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ../../../../../core/Error.js */
      "zlDU");
      /* harmony import */


      var _core_promiseUtils_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ../../../../../core/promiseUtils.js */
      "9MzC");
      /* harmony import */


      var _support_arcadeOnDemand_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ../../../../../support/arcadeOnDemand.js */
      "gvqN");
      /* harmony import */


      var _symbols_cim_utils_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ../../../../../symbols/cim/utils.js */
      "NrhG");
      /* harmony import */


      var _core_LRUCache_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ../../../../../core/LRUCache.js */
      "wk6I");
      /* harmony import */


      var _arcade_callExpressionWithFeature_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ../../../arcade/callExpressionWithFeature.js */
      "ictz");
      /* harmony import */


      var _symbols_cim_cimSymbolUtils_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! ../../../../../symbols/cim/cimSymbolUtils.js */
      "ZxoT");
      /* harmony import */


      var _layers_features_schemaUtils_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! ../../../layers/features/schemaUtils.js */
      "owVx");
      /*
      All material copyright ESRI, All Rights Reserved, unless otherwise specified.
      See https://js.arcgis.com/4.18/esri/copyright.txt for details.
      */


      var u = _core_Logger_js__WEBPACK_IMPORTED_MODULE_0__["default"].getLogger("esri/views/2d/engine/webgl/util/Matcher");

      var c = /*#__PURE__*/function () {
        function c() {
          _classCallCheck(this, c);

          this.type = "feature", this._defaultResult = null;
        }

        _createClass(c, [{
          key: "size",
          value: function size() {
            return 1;
          }
        }, {
          key: "getDefault",
          value: function getDefault() {
            return this._defaultResult;
          }
        }, {
          key: "setDefault",
          value: function setDefault(e) {
            this._defaultResult = e;
          }
        }, {
          key: "match",
          value: function match(e, t, i, s, r) {
            return this.getDefault();
          }
        }, {
          key: "analyze",
          value: function () {
            var _analyze3 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee18(e, t, i, s, r) {
              return regeneratorRuntime.wrap(function _callee18$(_context18) {
                while (1) {
                  switch (_context18.prev = _context18.next) {
                    case 0:
                      return _context18.abrupt("return", null);

                    case 1:
                    case "end":
                      return _context18.stop();
                  }
                }
              }, _callee18);
            }));

            function analyze(_x40, _x41, _x42, _x43, _x44) {
              return _analyze3.apply(this, arguments);
            }

            return analyze;
          }()
        }], [{
          key: "fromBasicRenderer",
          value: function () {
            var _fromBasicRenderer = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee19(e, t, i) {
              var s, r, a;
              return regeneratorRuntime.wrap(function _callee19$(_context19) {
                while (1) {
                  switch (_context19.prev = _context19.next) {
                    case 0:
                      s = new c();

                      if (!e.symbol) {
                        _context19.next = 7;
                        break;
                      }

                      _context19.next = 4;
                      return Object(_symbols_cim_cimSymbolUtils_js__WEBPACK_IMPORTED_MODULE_7__["expandSymbol"])(e.symbol, i);

                    case 4:
                      r = _context19.sent;
                      a = t.createTemplateGroup(r, null);
                      s.setDefault(a);

                    case 7:
                      return _context19.abrupt("return", s);

                    case 8:
                    case "end":
                      return _context19.stop();
                  }
                }
              }, _callee19);
            }));

            function fromBasicRenderer(_x45, _x46, _x47) {
              return _fromBasicRenderer.apply(this, arguments);
            }

            return fromBasicRenderer;
          }()
        }]);

        return c;
      }();

      var d = /*#__PURE__*/function (_c11) {
        _inherits(d, _c11);

        var _super8 = _createSuper(d);

        function d(e, t, i, s) {
          var _this18;

          _classCallCheck(this, d);

          _this18 = _super8.call(this), _this18.type = "interval", _this18._intervals = [], _this18._isMaxInclusive = t, _this18._fieldIndex = s, _this18._field = e, _this18._normalizationInfo = i;
          return _this18;
        }

        _createClass(d, [{
          key: "add",
          value: function add(e, t) {
            this._intervals.push({
              interval: e,
              result: t
            }), this._intervals.sort(function (e, t) {
              return e.interval.min - t.interval.min;
            });
          }
        }, {
          key: "size",
          value: function size() {
            return _get(_getPrototypeOf(d.prototype), "size", this).call(this) + this._intervals.length;
          }
        }, {
          key: "match",
          value: function match(e, t, i, s, r) {
            if (null == this._fieldIndex && !this._field) return this.getDefault();
            var a = null != this._fieldIndex ? t.getComputedNumericAtIndex(this._fieldIndex) : this._getValueFromField(t);
            if (!a && (null == a || isNaN(a))) return this.getDefault();

            for (var _e32 = 0; _e32 < this._intervals.length; _e32++) {
              var _this$_intervals$_e = this._intervals[_e32],
                  _t44 = _this$_intervals$_e.interval,
                  _i22 = _this$_intervals$_e.result,
                  _s16 = a >= _t44.min,
                  _r27 = this._isMaxInclusive ? a <= _t44.max : a < _t44.max;

              if (_s16 && _r27) return _i22;
            }

            return this.getDefault();
          }
        }, {
          key: "_needsNormalization",
          value: function _needsNormalization() {
            var e = this._normalizationInfo;
            return e && (e.normalizationField || e.normalizationTotal || e.normalizationType);
          }
        }, {
          key: "_getValueFromField",
          value: function _getValueFromField(e) {
            var t = e.readAttribute(this._field);
            if (!this._needsNormalization()) return t;
            var _this$_normalizationI = this._normalizationInfo,
                i = _this$_normalizationI.normalizationField,
                s = _this$_normalizationI.normalizationTotal,
                r = _this$_normalizationI.normalizationType,
                a = !!i && e.readAttribute(i);
            if (r) switch (r) {
              case "esriNormalizeByField":
                return a ? t / a : void 0;

              case "esriNormalizeByLog":
                return Math.log(t) * Math.LOG10E;

              case "esriNormalizeByPercentOfTotal":
                return t / s * 100;

              default:
                return void u.error("Found unknown normalization type: ".concat(r));
            } else u.error("Normalization is required, but no type was set!");
          }
        }], [{
          key: "fromCBRenderer",
          value: function () {
            var _fromCBRenderer = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee21(e, t, s) {
              var r, a, n, o, u, c, f, m, _e33;

              return regeneratorRuntime.wrap(function _callee21$(_context21) {
                while (1) {
                  switch (_context21.prev = _context21.next) {
                    case 0:
                      r = e.isMaxInclusive;
                      a = e.normalizationField;
                      n = e.normalizationTotal;
                      o = e.normalizationType;
                      u = e.field;
                      c = new d(u, r, {
                        normalizationField: a,
                        normalizationTotal: n,
                        normalizationType: o
                      }, e.fieldIndex);
                      _context21.next = 8;
                      return Object(_symbols_cim_cimSymbolUtils_js__WEBPACK_IMPORTED_MODULE_7__["expandSymbol"])(e.backgroundFillSymbol, s);

                    case 8:
                      f = _context21.sent;
                      _context21.next = 11;
                      return Object(_core_promiseUtils_js__WEBPACK_IMPORTED_MODULE_2__["all"])(e.intervals.map( /*#__PURE__*/function () {
                        var _ref2 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee20(e) {
                          var i, r, a;
                          return regeneratorRuntime.wrap(function _callee20$(_context20) {
                            while (1) {
                              switch (_context20.prev = _context20.next) {
                                case 0:
                                  _context20.next = 2;
                                  return Object(_symbols_cim_cimSymbolUtils_js__WEBPACK_IMPORTED_MODULE_7__["expandSymbol"])(e.symbol, s);

                                case 2:
                                  i = _context20.sent;
                                  _context20.next = 5;
                                  return t.createTemplateGroup(i, f);

                                case 5:
                                  r = _context20.sent;
                                  a = {
                                    min: e.min,
                                    max: e.max
                                  };
                                  c.add(a, r);

                                case 8:
                                case "end":
                                  return _context20.stop();
                              }
                            }
                          }, _callee20);
                        }));

                        return function (_x51) {
                          return _ref2.apply(this, arguments);
                        };
                      }()));

                    case 11:
                      _context21.next = 13;
                      return Object(_symbols_cim_cimSymbolUtils_js__WEBPACK_IMPORTED_MODULE_7__["expandSymbol"])(e.defaultSymbol, s);

                    case 13:
                      m = _context21.sent;

                      if (!m) {
                        _context21.next = 19;
                        break;
                      }

                      _context21.next = 17;
                      return t.createTemplateGroup(m, f);

                    case 17:
                      _e33 = _context21.sent;
                      c.setDefault(_e33);

                    case 19:
                      return _context21.abrupt("return", c);

                    case 20:
                    case "end":
                      return _context21.stop();
                  }
                }
              }, _callee21);
            }));

            function fromCBRenderer(_x48, _x49, _x50) {
              return _fromCBRenderer.apply(this, arguments);
            }

            return fromCBRenderer;
          }()
        }]);

        return d;
      }(c);

      var f = /*#__PURE__*/function (_c12) {
        _inherits(f, _c12);

        var _super9 = _createSuper(f);

        function f(e, t, i) {
          var _this19;

          _classCallCheck(this, f);

          _this19 = _super9.call(this), _this19.type = "map", _this19._nullResult = null, _this19._resultsMap = new Map(), _this19._fieldsIndex = i, _this19._fields = e, _this19._seperator = t || "";
          return _this19;
        }

        _createClass(f, [{
          key: "setNullResult",
          value: function setNullResult(e) {
            this._nullResult = e;
          }
        }, {
          key: "add",
          value: function add(e, t) {
            this._resultsMap.set(e.toString(), t);
          }
        }, {
          key: "size",
          value: function size() {
            return _get(_getPrototypeOf(f.prototype), "size", this).call(this) + this._resultsMap.size;
          }
        }, {
          key: "match",
          value: function match(e, t, i, s, r) {
            if (null == this._fieldsIndex && !this._fields) return this.getDefault();
            var a = null != this._fieldsIndex ? t.getComputedStringAtIndex(this._fieldsIndex) : this._getValueFromFields(t);
            if (null !== this._nullResult && (null == a || "" === a || "<Null>" === a)) return this._nullResult;
            if (!a && null == a) return this.getDefault();
            var n = a.toString();
            return this._resultsMap.has(n) ? this._resultsMap.get(n) : this.getDefault();
          }
        }, {
          key: "_getValueFromFields",
          value: function _getValueFromFields(e) {
            var t = [];

            var _iterator35 = _createForOfIteratorHelper(this._fields),
                _step35;

            try {
              for (_iterator35.s(); !(_step35 = _iterator35.n()).done;) {
                var _i23 = _step35.value;
                var s = e.readAttribute(_i23);
                t.push(s);
              }
            } catch (err) {
              _iterator35.e(err);
            } finally {
              _iterator35.f();
            }

            return t.join(this._seperator);
          }
        }], [{
          key: "fromUVRenderer",
          value: function () {
            var _fromUVRenderer = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee23(e, t, s) {
              var r, a, n, o, u, _e34;

              return regeneratorRuntime.wrap(function _callee23$(_context23) {
                while (1) {
                  switch (_context23.prev = _context23.next) {
                    case 0:
                      r = e.fieldDelimiter, a = [e.field];
                      e.field2 && a.push(e.field2), e.field3 && a.push(e.field3);
                      _context23.next = 4;
                      return Object(_symbols_cim_cimSymbolUtils_js__WEBPACK_IMPORTED_MODULE_7__["expandSymbol"])(e.backgroundFillSymbol, s);

                    case 4:
                      n = _context23.sent;
                      o = new f(a, r, e.fieldIndex);
                      _context23.next = 8;
                      return Object(_core_promiseUtils_js__WEBPACK_IMPORTED_MODULE_2__["all"])(e.map.map( /*#__PURE__*/function () {
                        var _ref3 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee22(e) {
                          var i, r;
                          return regeneratorRuntime.wrap(function _callee22$(_context22) {
                            while (1) {
                              switch (_context22.prev = _context22.next) {
                                case 0:
                                  _context22.next = 2;
                                  return Object(_symbols_cim_cimSymbolUtils_js__WEBPACK_IMPORTED_MODULE_7__["expandSymbol"])(e.symbol, s);

                                case 2:
                                  i = _context22.sent;
                                  _context22.next = 5;
                                  return t.createTemplateGroup(i, n);

                                case 5:
                                  r = _context22.sent;
                                  "<Null>" === e.value ? o.setNullResult(r) : o.add(e.value, r);

                                case 7:
                                case "end":
                                  return _context22.stop();
                              }
                            }
                          }, _callee22);
                        }));

                        return function (_x55) {
                          return _ref3.apply(this, arguments);
                        };
                      }()));

                    case 8:
                      _context23.next = 10;
                      return Object(_symbols_cim_cimSymbolUtils_js__WEBPACK_IMPORTED_MODULE_7__["expandSymbol"])(e.defaultSymbol, s);

                    case 10:
                      u = _context23.sent;

                      if (!u) {
                        _context23.next = 16;
                        break;
                      }

                      _context23.next = 14;
                      return t.createTemplateGroup(u, n);

                    case 14:
                      _e34 = _context23.sent;
                      o.setDefault(_e34);

                    case 16:
                      return _context23.abrupt("return", o);

                    case 17:
                    case "end":
                      return _context23.stop();
                  }
                }
              }, _callee23);
            }));

            function fromUVRenderer(_x52, _x53, _x54) {
              return _fromUVRenderer.apply(this, arguments);
            }

            return fromUVRenderer;
          }()
        }]);

        return f;
      }(c);

      var m = /*#__PURE__*/function (_c13) {
        _inherits(m, _c13);

        var _super10 = _createSuper(m);

        function m(e, t, i, s) {
          var _this20;

          _classCallCheck(this, m);

          _this20 = _super10.call(this), _this20.type = "dictionary", _this20._groupIdCache = new _core_LRUCache_js__WEBPACK_IMPORTED_MODULE_5__["default"](100), _this20._renderer = e, _this20._fieldMap = e.fieldMap, _this20._symbolFields = e.getSymbolFields(), _this20._templates = t, _this20._info = i, _this20._scaleFn = s;
          return _this20;
        }

        _createClass(m, [{
          key: "_analyzeFeature",
          value: function () {
            var _analyzeFeature2 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee24(e, i, s, a) {
              var _this21 = this;

              var n, c, d, f, _m11, h, p, _;

              return regeneratorRuntime.wrap(function _callee24$(_context24) {
                while (1) {
                  switch (_context24.prev = _context24.next) {
                    case 0:
                      n = e.readLegacyFeature(), c = this._scaleFn(n, i, s), d = this._attributeHash(n) + "-" + c, f = this._groupIdCache.get(d);

                      if (!f) {
                        _context24.next = 3;
                        break;
                      }

                      return _context24.abrupt("return", f);

                    case 3:
                      _m11 = _objectSpread(_objectSpread({}, s), {}, {
                        spatialReference: this._info.spatialReference,
                        abortOptions: a,
                        fields: this._info.fields
                      });
                      _context24.next = 6;
                      return this._renderer.getSymbolAsync(n, _m11);

                    case 6:
                      h = _context24.sent;
                      p = Object(_layers_features_schemaUtils_js__WEBPACK_IMPORTED_MODULE_8__["createSymbolSchema"])(h, this._renderer);
                      _ = Object(_symbols_cim_cimSymbolUtils_js__WEBPACK_IMPORTED_MODULE_7__["expandSymbol"])(p, this._info, a).then(function (e) {
                        if ("expanded-cim" !== e.type) return u.error(new _core_Error_js__WEBPACK_IMPORTED_MODULE_1__["default"]("mapview-bad-type", "Found unexpected type ".concat(e.type, " in dictionary response"))), null;
                        e.hash += "-" + c;

                        var _iterator36 = _createForOfIteratorHelper(e.layers),
                            _step36;

                        try {
                          for (_iterator36.s(); !(_step36 = _iterator36.n()).done;) {
                            var t = _step36.value;
                            t.scaleFactor = c, t.templateHash += "-" + c, "text" === t.type && "string" == typeof t.text && t.text.indexOf("[") > -1 && (t.text = Object(_symbols_cim_utils_js__WEBPACK_IMPORTED_MODULE_4__["createLabelOverrideFunction"])(_this21._fieldMap, t.text, t.cim.textCase));
                          }
                        } catch (err) {
                          _iterator36.e(err);
                        } finally {
                          _iterator36.f();
                        }

                        return _this21._templates.createTemplateGroup(e, null);
                      });
                      return _context24.abrupt("return", (this._groupIdCache.put(d, _, 1), _));

                    case 10:
                    case "end":
                      return _context24.stop();
                  }
                }
              }, _callee24, this);
            }));

            function _analyzeFeature(_x56, _x57, _x58, _x59) {
              return _analyzeFeature2.apply(this, arguments);
            }

            return _analyzeFeature;
          }()
        }, {
          key: "analyze",
          value: function () {
            var _analyze4 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee25(e, t, s, r, a) {
              var n, l;
              return regeneratorRuntime.wrap(function _callee25$(_context25) {
                while (1) {
                  switch (_context25.prev = _context25.next) {
                    case 0:
                      n = t.getCursor(), l = [];

                      for (; n.next();) {
                        l.push(this._analyzeFeature(n, s, r, a));
                      }

                      return _context25.abrupt("return", Object(_core_promiseUtils_js__WEBPACK_IMPORTED_MODULE_2__["all"])(l));

                    case 3:
                    case "end":
                      return _context25.stop();
                  }
                }
              }, _callee25, this);
            }));

            function analyze(_x60, _x61, _x62, _x63, _x64) {
              return _analyze4.apply(this, arguments);
            }

            return analyze;
          }()
        }, {
          key: "match",
          value: function match(e, t, i, s, r) {
            return null;
          }
        }, {
          key: "_attributeHash",
          value: function _attributeHash(e) {
            var t = "";

            var _iterator37 = _createForOfIteratorHelper(this._symbolFields),
                _step37;

            try {
              for (_iterator37.s(); !(_step37 = _iterator37.n()).done;) {
                var _i24 = _step37.value;
                var s = this._fieldMap[_i24];
                s && (t += e.attributes[s] + "-");
              }
            } catch (err) {
              _iterator37.e(err);
            } finally {
              _iterator37.f();
            }

            return t;
          }
        }], [{
          key: "fromDictionaryRenderer",
          value: function () {
            var _fromDictionaryRenderer = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee27(e, t, i) {
              var r, a;
              return regeneratorRuntime.wrap(function _callee27$(_context27) {
                while (1) {
                  switch (_context27.prev = _context27.next) {
                    case 0:
                      _context27.next = 2;
                      return Promise.all(
                      /*! import() | renderers-DictionaryRenderer-js */
                      [__webpack_require__.e("default~BuildingSceneLayer-js~CSVLayer-js~FeatureLayer-js~ImageryLayer-js~ImageryTileLayer-js~KMLLay~166cc929"), __webpack_require__.e("renderers-DictionaryRenderer-js")]).then(__webpack_require__.bind(null,
                      /*! ../../../../../renderers/DictionaryRenderer.js */
                      "JhoD"));

                    case 2:
                      r = _context27.sent["default"].fromJSON(e.renderer);
                      _context27.next = 5;
                      return r.fetchResources({
                        spatialReference: i.spatialReference,
                        fields: i.fields
                      });

                    case 5:
                      _context27.next = 7;
                      return function () {
                        var _ref4 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee26(e, t) {
                          var i, r;
                          return regeneratorRuntime.wrap(function _callee26$(_context26) {
                            while (1) {
                              switch (_context26.prev = _context26.next) {
                                case 0:
                                  i = e || 1;

                                  if (!("number" == typeof i)) {
                                    _context26.next = 3;
                                    break;
                                  }

                                  return _context26.abrupt("return", function (e, t, s) {
                                    return i;
                                  });

                                case 3:
                                  _context26.next = 5;
                                  return Object(_support_arcadeOnDemand_js__WEBPACK_IMPORTED_MODULE_3__["createRendererExpression"])(i, t.spatialReference, t.fields);

                                case 5:
                                  r = _context26.sent;
                                  return _context26.abrupt("return", function (e, i, s) {
                                    return Object(_arcade_callExpressionWithFeature_js__WEBPACK_IMPORTED_MODULE_6__["default"])(r, e, {
                                      $view: s
                                    }, t.geometryType, i) || 1;
                                  });

                                case 7:
                                case "end":
                                  return _context26.stop();
                              }
                            }
                          }, _callee26);
                        }));

                        return function (_x68, _x69) {
                          return _ref4.apply(this, arguments);
                        };
                      }()(r.scaleExpression, i);

                    case 7:
                      a = _context27.sent;
                      return _context27.abrupt("return", new m(r, t, i, a));

                    case 9:
                    case "end":
                      return _context27.stop();
                  }
                }
              }, _callee27);
            }));

            function fromDictionaryRenderer(_x65, _x66, _x67) {
              return _fromDictionaryRenderer.apply(this, arguments);
            }

            return fromDictionaryRenderer;
          }()
        }]);

        return m;
      }(c);
      /***/

    },

    /***/
    "ZxoT":
    /*!*****************************************************************!*\
      !*** ./node_modules/@arcgis/core/symbols/cim/cimSymbolUtils.js ***!
      \*****************************************************************/

    /*! exports provided: expandSymbol, expandSymbols */

    /***/
    function ZxoT(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "expandSymbol", function () {
        return n;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "expandSymbols", function () {
        return m;
      });
      /* harmony import */


      var _core_promiseUtils_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ../../core/promiseUtils.js */
      "9MzC");
      /* harmony import */


      var _WebStyleSymbol_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ../WebStyleSymbol.js */
      "3cLA");
      /* harmony import */


      var _chunks_symbols_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ../../chunks/symbols.js */
      "nNR5");
      /* harmony import */


      var _cimAnalyzer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./cimAnalyzer.js */
      "T8sT");
      /* harmony import */


      var _ExpandedCIM_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ./ExpandedCIM.js */
      "wlZk");
      /*
      All material copyright ESRI, All Rights Reserved, unless otherwise specified.
      See https://js.arcgis.com/4.18/esri/copyright.txt for details.
      */


      var m = /*#__PURE__*/function () {
        var _ref5 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee28(e, t, a) {
          return regeneratorRuntime.wrap(function _callee28$(_context28) {
            while (1) {
              switch (_context28.prev = _context28.next) {
                case 0:
                  return _context28.abrupt("return", Object(_core_promiseUtils_js__WEBPACK_IMPORTED_MODULE_0__["all"])(e.map(function (r) {
                    return n(r, t, a);
                  })));

                case 1:
                case "end":
                  return _context28.stop();
              }
            }
          }, _callee28);
        }));

        return function m(_x70, _x71, _x72) {
          return _ref5.apply(this, arguments);
        };
      }(),
          o = /*#__PURE__*/function () {
        var _ref6 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee29(r, e) {
          return regeneratorRuntime.wrap(function _callee29$(_context29) {
            while (1) {
              switch (_context29.prev = _context29.next) {
                case 0:
                  _context29.t0 = _ExpandedCIM_js__WEBPACK_IMPORTED_MODULE_4__["ExpandedCIM"];
                  _context29.next = 3;
                  return Object(_cimAnalyzer_js__WEBPACK_IMPORTED_MODULE_3__["analyzeCIMSymbol"])(r.data, e);

                case 3:
                  _context29.t1 = _context29.sent;
                  _context29.t2 = r.data;
                  _context29.t3 = r.rendererKey;
                  return _context29.abrupt("return", new _context29.t0(_context29.t1, _context29.t2, _context29.t3));

                case 7:
                case "end":
                  return _context29.stop();
              }
            }
          }, _callee29);
        }));

        return function o(_x73, _x74) {
          return _ref6.apply(this, arguments);
        };
      }(),
          n = /*#__PURE__*/function () {
        var _ref7 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee30(r, t, a) {
          var _m12, _n17;

          return regeneratorRuntime.wrap(function _callee30$(_context30) {
            while (1) {
              switch (_context30.prev = _context30.next) {
                case 0:
                  if (r) {
                    _context30.next = 2;
                    break;
                  }

                  return _context30.abrupt("return", null);

                case 2:
                  if (!("cim" === r.type)) {
                    _context30.next = 4;
                    break;
                  }

                  return _context30.abrupt("return", o(r, t));

                case 4:
                  if (!("web-style" === r.type)) {
                    _context30.next = 12;
                    break;
                  }

                  _m12 = _WebStyleSymbol_js__WEBPACK_IMPORTED_MODULE_1__["default"].fromJSON(r);
                  _context30.next = 8;
                  return _m12.fetchCIMSymbol(a);

                case 8:
                  _context30.t0 = _context30.sent.data;
                  _context30.t1 = r.rendererKey;
                  _n17 = {
                    type: "cim",
                    data: _context30.t0,
                    rendererKey: _context30.t1
                  };
                  return _context30.abrupt("return", o(_n17, t));

                case 12:
                  return _context30.abrupt("return", r);

                case 13:
                case "end":
                  return _context30.stop();
              }
            }
          }, _callee30);
        }));

        return function n(_x75, _x76, _x77) {
          return _ref7.apply(this, arguments);
        };
      }();
      /***/

    },

    /***/
    "bzZf":
    /*!***********************************************************************************************!*\
      !*** ./node_modules/@arcgis/core/views/2d/engine/webgl/mesh/templates/WGLBaseLineTemplate.js ***!
      \***********************************************************************************************/

    /*! exports provided: default */

    /***/
    function bzZf(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony import */


      var _core_has_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ../../../../../../core/has.js */
      "wSAH");
      /* harmony import */


      var _definitions_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ../../definitions.js */
      "jIHu");
      /* harmony import */


      var _number_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ../../number.js */
      "0RS7");
      /* harmony import */


      var _enums_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ../../enums.js */
      "yE7X");
      /* harmony import */


      var _materialKey_MaterialKey_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ../../materialKey/MaterialKey.js */
      "GMaR");
      /* harmony import */


      var _TileClipper_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ../../TileClipper.js */
      "LaVW");
      /* harmony import */


      var _TurboLine_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ../../TurboLine.js */
      "Jimw");
      /*
      All material copyright ESRI, All Rights Reserved, unless otherwise specified.
      See https://js.arcgis.com/4.18/esri/copyright.txt for details.
      */


      var u = _definitions_js__WEBPACK_IMPORTED_MODULE_1__["TILE_SIZE"] + 16,
          c = new _TileClipper_js__WEBPACK_IMPORTED_MODULE_5__["TileClipper"](0, 0, 0, 1, 16);
      c.setExtent(_definitions_js__WEBPACK_IMPORTED_MODULE_1__["TILE_SIZE"]);

      var _ = new Uint32Array(9),
          f = new Uint32Array(36),
          p = new Uint32Array(3),
          d = new Uint32Array(6),
          x = function x(t) {
        return function (e) {
          var r = Math.ceil(1024 * t._halfWidth),
              n = Math.ceil(1024 * t._halfReferenceWidth);
          e.entry0 = t.offset + t.vertexCount++;
          {
            var o = Object(_number_js__WEBPACK_IMPORTED_MODULE_2__["i1616to32"])(e.distance, r),
                l = Object(_number_js__WEBPACK_IMPORTED_MODULE_2__["i8888to32"])(Math.round(31 * e.prevNormal.x), Math.round(31 * e.prevNormal.y), Math.round(0), Math.round(-31)),
                a = Object(_number_js__WEBPACK_IMPORTED_MODULE_2__["i8888to32"])(0, 0, 0, t._bitset);
            f[0] = Object(_number_js__WEBPACK_IMPORTED_MODULE_2__["i1616to32"])(8 * e.currentVertex.x, 8 * e.currentVertex.y), f[1] = t.id, f[2] = t._fillColor, f[3] = l, f[4] = o, f[5] = t._tl, f[6] = t._br, f[7] = a, f[8] = Object(_number_js__WEBPACK_IMPORTED_MODULE_2__["i1616to32"])(n, 0);
          }
          e.entry2 = t.offset + t.vertexCount++;
          {
            var _o18 = Object(_number_js__WEBPACK_IMPORTED_MODULE_2__["i1616to32"])(e.distance, r),
                _l12 = Object(_number_js__WEBPACK_IMPORTED_MODULE_2__["i8888to32"])(Math.round(31 * -e.prevNormal.x), Math.round(31 * -e.prevNormal.y), Math.round(0), Math.round(31)),
                _a12 = Object(_number_js__WEBPACK_IMPORTED_MODULE_2__["i8888to32"])(0, 0, 0, t._bitset);

            f[9] = Object(_number_js__WEBPACK_IMPORTED_MODULE_2__["i1616to32"])(8 * e.currentVertex.x, 8 * e.currentVertex.y), f[10] = t.id, f[11] = t._fillColor, f[12] = _l12, f[13] = _o18, f[14] = t._tl, f[15] = t._br, f[16] = _a12, f[17] = Object(_number_js__WEBPACK_IMPORTED_MODULE_2__["i1616to32"])(n, 0);
          }
          e.exit0 = t.offset + t.vertexCount++;
          {
            var _o19 = Object(_number_js__WEBPACK_IMPORTED_MODULE_2__["i1616to32"])(e.distance, r),
                _l13 = Object(_number_js__WEBPACK_IMPORTED_MODULE_2__["i8888to32"])(Math.round(31 * e.nextNormal.x), Math.round(31 * e.nextNormal.y), Math.round(0), Math.round(-31)),
                _a13 = Object(_number_js__WEBPACK_IMPORTED_MODULE_2__["i8888to32"])(0, 0, 0, t._bitset);

            f[18] = Object(_number_js__WEBPACK_IMPORTED_MODULE_2__["i1616to32"])(8 * e.currentVertex.x, 8 * e.currentVertex.y), f[19] = t.id, f[20] = t._fillColor, f[21] = _l13, f[22] = _o19, f[23] = t._tl, f[24] = t._br, f[25] = _a13, f[26] = Object(_number_js__WEBPACK_IMPORTED_MODULE_2__["i1616to32"])(n, 0);
          }
          e.exit2 = t.offset + t.vertexCount++;
          {
            var _o20 = Object(_number_js__WEBPACK_IMPORTED_MODULE_2__["i1616to32"])(e.distance, r),
                _l14 = Object(_number_js__WEBPACK_IMPORTED_MODULE_2__["i8888to32"])(Math.round(31 * -e.nextNormal.x), Math.round(31 * -e.nextNormal.y), Math.round(0), Math.round(31)),
                _a14 = Object(_number_js__WEBPACK_IMPORTED_MODULE_2__["i8888to32"])(0, 0, 0, t._bitset);

            f[27] = Object(_number_js__WEBPACK_IMPORTED_MODULE_2__["i1616to32"])(8 * e.currentVertex.x, 8 * e.currentVertex.y), f[28] = t.id, f[29] = t._fillColor, f[30] = _l14, f[31] = _o20, f[32] = t._tl, f[33] = t._br, f[34] = _a14, f[35] = Object(_number_js__WEBPACK_IMPORTED_MODULE_2__["i1616to32"])(n, 0);
          }
          t.geometryBuf.writeRegion(f);
        };
      },
          y = function y(t) {
        return function (e) {
          d[0] = e.leftExit0, d[1] = e.rightEntry0, d[2] = e.leftExit2, d[3] = e.rightEntry0, d[4] = e.rightEntry2, d[5] = e.leftExit2, t.indexCount += 6, t.indexBuf.writeRegion(d);
        };
      },
          m = function m(t) {
        return function (e, r, n, o, l, a, h, u, c) {
          var f = Object(_number_js__WEBPACK_IMPORTED_MODULE_2__["i1616to32"])(c, Math.ceil(1024 * t._halfWidth)),
              p = Object(_number_js__WEBPACK_IMPORTED_MODULE_2__["i8888to32"])(Math.round(31 * l), Math.round(31 * a), Math.round(31 * h), Math.round(31 * u)),
              d = Object(_number_js__WEBPACK_IMPORTED_MODULE_2__["i8888to32"])(31 * n, 31 * o, 0, t._bitset);
          return _[0] = Object(_number_js__WEBPACK_IMPORTED_MODULE_2__["i1616to32"])(8 * e, 8 * r), _[1] = t.id, _[2] = t._fillColor, _[3] = p, _[4] = f, _[5] = t._tl, _[6] = t._br, _[7] = d, _[8] = Object(_number_js__WEBPACK_IMPORTED_MODULE_2__["i1616to32"])(Math.ceil(1024 * t._halfReferenceWidth), 0), t.geometryBuf.writeRegion(_), t.offset + t.vertexCount++;
        };
      },
          C = function C(t) {
        return function (e, i, s) {
          p[0] = e, p[1] = i, p[2] = s, t.indexCount += 3, t.indexBuf.writeRegion(p);
        };
      };
      /* harmony default export */


      __webpack_exports__["default"] = function (e) {
        return /*#__PURE__*/function (_e35) {
          _inherits(_class6, _e35);

          var _super11 = _createSuper(_class6);

          function _class6() {
            var _this22;

            _classCallCheck(this, _class6);

            for (var _len4 = arguments.length, t = new Array(_len4), _key4 = 0; _key4 < _len4; _key4++) {
              t[_key4] = arguments[_key4];
            }

            _this22 = _super11.call.apply(_super11, [this].concat(t)), _this22.tessellationProperties = {
              _fillColor: null,
              _tl: null,
              _br: null,
              _halfWidth: null,
              _bitset: null,
              _halfReferenceWidth: null,
              id: null,
              indexBuf: null,
              indexCount: null,
              geometryBuf: null,
              vertexCount: null,
              offset: null
            }, _this22._tessellationOptions = {}, _this22.geometryType = _enums_js__WEBPACK_IMPORTED_MODULE_3__["WGLGeometryType"].LINE;
            return _this22;
          }

          _createClass(_class6, [{
            key: "writeMeshWithGeometry",
            value: function writeMeshWithGeometry(t, e, i, s, r, n) {
              var o = e.indexVector,
                  l = e.get("geometry"),
                  a = e.getVector("geometry").vertexCount,
                  h = o.length,
                  u = null != n ? n : i.readLegacyGeometry();
              if (!u) return;

              switch (s) {
                case "esriGeometryPolyline":
                  {
                    var _t45 = this._clipLines(u.paths);

                    if (0 === _t45.length) return;

                    this._write(o, l, a, r, _t45);

                    break;
                  }

                case "esriGeometryPolygon":
                  {
                    var _t46 = this._clipLines(u.rings);

                    if (0 === _t46.length) return;

                    this._write(o, l, a, r, _t46);

                    break;
                  }
              }

              var c = this.tessellationProperties.vertexCount,
                  _ = this.tessellationProperties.indexCount;
              t.writeDisplayRecord(this.geometryType, this._materialKey, a, c, h, _);
            }
          }, {
            key: "_clipLines",
            value: function _clipLines(t) {
              var e = [];
              var i = !1,
                  s = 0;

              for (; s < t.length;) {
                var r = [],
                    n = t[s];
                c.reset(2);

                var _n$ = _slicedToArray(n[0], 2),
                    o = _n$[0],
                    l = _n$[1];

                if (i) c.moveTo(o, l);else {
                  if (o < -16 || o > u || l < -16 || l > u) {
                    i = !0;
                    continue;
                  }

                  r.push({
                    x: o,
                    y: l
                  });
                }
                var a = !1;
                var h = n.length;

                for (var _t47 = 1; _t47 < h; ++_t47) {
                  if (o += n[_t47][0], l += n[_t47][1], i) c.lineTo(o, l);else {
                    if (o < -16 || o > u || l < -16 || l > u) {
                      a = !0;
                      break;
                    }

                    r.push({
                      x: o,
                      y: l
                    });
                  }
                }

                if (a) i = !0;else {
                  if (i) {
                    var _t48 = c.resultWithStarts();

                    if (_t48) {
                      var _iterator38 = _createForOfIteratorHelper(_t48),
                          _step38;

                      try {
                        for (_iterator38.s(); !(_step38 = _iterator38.n()).done;) {
                          var _i25 = _step38.value;
                          e.push(_i25);
                        }
                      } catch (err) {
                        _iterator38.e(err);
                      } finally {
                        _iterator38.f();
                      }
                    }
                  } else e.push({
                    line: r,
                    start: 0
                  });

                  s++, i = !1;
                }
              }

              return e;
            }
          }, {
            key: "_write",
            value: function _write(t, e, i, s, r) {
              this.tessellationProperties.id = s, this.tessellationProperties.indexBuf = t, this.tessellationProperties.indexCount = 0, this.tessellationProperties.geometryBuf = e, this.tessellationProperties.vertexCount = 0, this.tessellationProperties.offset = i;

              var _iterator39 = _createForOfIteratorHelper(r),
                  _step39;

              try {
                for (_iterator39.s(); !(_step39 = _iterator39.n()).done;) {
                  var _t49 = _step39.value;
                  var _e36 = _t49.line;
                  _e36.length < 2 || (this._tessellationOptions.initialDistance = _t49.start % 65535, this._tessellationCallbacks instanceof _TurboLine_js__WEBPACK_IMPORTED_MODULE_6__["StandardTessellationCallbacks"] && (this._tessellationCallbacks.capType = this._capType, this._tessellationCallbacks.joinType = this._joinType), Object(_TurboLine_js__WEBPACK_IMPORTED_MODULE_6__["tessellate"])(_e36, this._tessellationOptions, this._tessellationCallbacks), Object(_TurboLine_js__WEBPACK_IMPORTED_MODULE_6__["cleanup"])());
                }
              } catch (err) {
                _iterator39.e(err);
              } finally {
                _iterator39.f();
              }
            }
          }, {
            key: "_initializeTessellator",
            value: function _initializeTessellator(e) {
              var i = _materialKey_MaterialKey_js__WEBPACK_IMPORTED_MODULE_4__["LineMaterialKey"].load(this._materialKey);

              if (this._tessellationOptions.trackDistance = this._isDashed || this._hasPattern, this._tessellationOptions.thin = !e && this.tessellationProperties._halfWidth < _definitions_js__WEBPACK_IMPORTED_MODULE_1__["THIN_LINE_THRESHOLD"] / 2 && !(i.vvSizeFieldStops || i.vvSizeMinMaxValue || i.vvSizeScaleStops || i.vvSizeUnitValue), this._tessellationOptions.wrapDistance = 65535, this._tessellationOptions.outerBisectorAutoSplitThreshold = .2631578947368421, this._tessellationOptions.enableOuterBisectorSplit = this._isDashed || this._hasPattern, this._tessellationOptions.innerBisectorAutoSplitThreshold = .2631578947368421, this._tessellationOptions.enableInnerBisectorSplit = this._isDashed || this._hasPattern, this._tessellationOptions.thin) this._tessellationCallbacks = {
                vertex: x(this.tessellationProperties),
                bridge: y(this.tessellationProperties)
              };else {
                var t = new _TurboLine_js__WEBPACK_IMPORTED_MODULE_6__["StandardTessellationCallbacks"](m(this.tessellationProperties), C(this.tessellationProperties));
                t.miterLimitCosine = this._miterLimitCosine, t.textured = this._isDashed || this._hasPattern, t.joinOnUTurn = this._joinOnUTurn, this._tessellationCallbacks = t;
              }
            }
          }]);

          return _class6;
        }(e);
      };
      /***/

    },

    /***/
    "ej3m":
    /*!**************************************************************************************************!*\
      !*** ./node_modules/@arcgis/core/views/2d/engine/webgl/mesh/templates/WGLDynamicMeshTemplate.js ***!
      \**************************************************************************************************/

    /*! exports provided: default */

    /***/
    function ej3m(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony import */


      var _core_Logger_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ../../../../../../core/Logger.js */
      "6S2I");
      /* harmony import */


      var _core_promiseUtils_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ../../../../../../core/promiseUtils.js */
      "9MzC");
      /* harmony import */


      var _symbols_cim_cimAnalyzer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ../../../../../../symbols/cim/cimAnalyzer.js */
      "T8sT");
      /* harmony import */


      var _WGLMeshTemplate_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./WGLMeshTemplate.js */
      "916D");
      /*
      All material copyright ESRI, All Rights Reserved, unless otherwise specified.
      See https://js.arcgis.com/4.18/esri/copyright.txt for details.
      */


      var r = _core_Logger_js__WEBPACK_IMPORTED_MODULE_0__["default"].getLogger("esri.views.2d.engine.webgl.WGLDynamicMeshTemplate");
      /* harmony default export */


      __webpack_exports__["default"] = /*#__PURE__*/function (_WGLMeshTemplate_js__) {
        _inherits(_class7, _WGLMeshTemplate_js__);

        var _super12 = _createSuper(_class7);

        function _class7(e) {
          var _this23;

          _classCallCheck(this, _class7);

          _this23 = _super12.call(this), _this23._ongoingMaterialRequestMap = new Map(), _this23._materialCache = new Map(), _this23._dynamicPropertyMap = new Map(), _this23._cimLayer = e;
          return _this23;
        }

        _createClass(_class7, [{
          key: "analyze",
          value: function analyze(e, s, o, n) {
            var _this24 = this;

            var m = s.readLegacyFeature(),
                c = this._materialCache,
                l = this._cimLayer.materialHash;
            if (!l) return r.error("A Dynamic mesh template must have a material hash value or function!"), Object(_core_promiseUtils_js__WEBPACK_IMPORTED_MODULE_1__["reject"])(null);
            var h = "function" == typeof l ? l(m, o, n) : l;

            if (c.has(h)) {
              var _e37 = c.get(h);

              return Object(_core_promiseUtils_js__WEBPACK_IMPORTED_MODULE_1__["resolve"])(_e37);
            }

            if (this._ongoingMaterialRequestMap.has(h)) return this._ongoingMaterialRequestMap.get(h);
            var g = Object(_symbols_cim_cimAnalyzer_js__WEBPACK_IMPORTED_MODULE_2__["analyzeCIMResource"])(this._cimLayer.cim, this._cimLayer.materialOverrides);
            g.mosaicHash = h;
            var p = e.getMosaicItem(g).then(function (e) {
              return _this24._ongoingMaterialRequestMap["delete"](h), c.set(h, e), e;
            })["catch"](function (e) {
              return _this24._ongoingMaterialRequestMap["delete"](h), r.error(".analyze()", e.message), null;
            });
            return this._ongoingMaterialRequestMap.set(h, p), p;
          }
        }]);

        return _class7;
      }(_WGLMeshTemplate_js__WEBPACK_IMPORTED_MODULE_3__["default"]);
      /***/

    },

    /***/
    "ictz":
    /*!********************************************************************************!*\
      !*** ./node_modules/@arcgis/core/views/2d/arcade/callExpressionWithFeature.js ***!
      \********************************************************************************/

    /*! exports provided: default */

    /***/
    function ictz(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony import */


      var _core_Logger_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ../../../core/Logger.js */
      "6S2I");
      /* harmony import */


      var _core_Error_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ../../../core/Error.js */
      "zlDU");
      /* harmony import */


      var _geometry_support_quantizationUtils_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ../../../geometry/support/quantizationUtils.js */
      "AIxD");
      /*
      All material copyright ESRI, All Rights Reserved, unless otherwise specified.
      See https://js.arcgis.com/4.18/esri/copyright.txt for details.
      */


      function s(s, u, c, m, p) {
        var g = s.referencesGeometry() && p ? function (s, u, c) {
          var m = c.transform,
              p = c.hasZ,
              g = c.hasM;
          i.has(u) || i.set(u, function (s) {
            var i = {};

            switch (s) {
              case "esriGeometryPoint":
                return function (e, r, t, o) {
                  return Object(_geometry_support_quantizationUtils_js__WEBPACK_IMPORTED_MODULE_2__["unquantizePoint"])(r, i, e, t, o);
                };

              case "esriGeometryPolygon":
                return function (e, r, t, o) {
                  return Object(_geometry_support_quantizationUtils_js__WEBPACK_IMPORTED_MODULE_2__["unquantizePolygon"])(r, i, e, t, o);
                };

              case "esriGeometryPolyline":
                return function (e, r, t, n) {
                  return Object(_geometry_support_quantizationUtils_js__WEBPACK_IMPORTED_MODULE_2__["unquantizePolyline"])(r, i, e, t, n);
                };

              case "esriGeometryMultipoint":
                return function (e, r, o, n) {
                  return Object(_geometry_support_quantizationUtils_js__WEBPACK_IMPORTED_MODULE_2__["unquantizeMultipoint"])(r, i, e, o, n);
                };

              default:
                return _core_Logger_js__WEBPACK_IMPORTED_MODULE_0__["default"].getLogger("esri.views.2d.support.arcadeOnDemand").error(new _core_Error_js__WEBPACK_IMPORTED_MODULE_1__["default"]("mapview-arcade", "Unable to handle geometryType: ".concat(s))), function (e) {
                  return e;
                };
            }
          }(u));
          var l = i.get(u)(s.geometry, m, p, g);
          return _objectSpread(_objectSpread({}, s), {}, {
            geometry: l
          });
        }(u, m, p) : u,
            l = s.repurposeFeature(g);

        try {
          return s.evaluate(_objectSpread(_objectSpread({}, c), {}, {
            $feature: l
          }));
        } catch (r) {
          return _core_Logger_js__WEBPACK_IMPORTED_MODULE_0__["default"].getLogger("esri.views.2d.support.arcadeOnDemand").warn("Feature arcade evaluation failed:", r), null;
        }
      }

      var i = new Map();
      /* harmony default export */

      __webpack_exports__["default"] = s;
      /***/
    },

    /***/
    "iegs":
    /*!*******************************************************************************************!*\
      !*** ./node_modules/@arcgis/core/views/2d/engine/webgl/mesh/templates/WGLTextTemplate.js ***!
      \*******************************************************************************************/

    /*! exports provided: default */

    /***/
    function iegs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony import */


      var _core_screenUtils_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ../../../../../../core/screenUtils.js */
      "qRWG");
      /* harmony import */


      var _alignmentUtils_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ../../alignmentUtils.js */
      "Mt1D");
      /* harmony import */


      var _util_BidiText_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ../../util/BidiText.js */
      "t7mB");
      /* harmony import */


      var _materialKey_MaterialKey_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ../../materialKey/MaterialKey.js */
      "GMaR");
      /* harmony import */


      var _color_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ../../color.js */
      "qaIE");
      /* harmony import */


      var _WGLBaseTextTemplate_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ./WGLBaseTextTemplate.js */
      "RNFe");
      /* harmony import */


      var _WGLMeshTemplate_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ./WGLMeshTemplate.js */
      "916D");
      /*
      All material copyright ESRI, All Rights Reserved, unless otherwise specified.
      See https://js.arcgis.com/4.18/esri/copyright.txt for details.
      */


      var m = /*#__PURE__*/function (_Object7) {
        _inherits(m, _Object7);

        var _super13 = _createSuper(m);

        function m(n, r, a, h, f, _m13, c, _, d, u, x, z, g, M, p, y, j) {
          var _this25;

          var T = arguments.length > 17 && arguments[17] !== undefined ? arguments[17] : !1;

          _classCallCheck(this, m);

          _this25 = _super13.call(this), _this25._xOffset = Object(_core_screenUtils_js__WEBPACK_IMPORTED_MODULE_0__["pt2px"])(z), _this25._yOffset = Object(_core_screenUtils_js__WEBPACK_IMPORTED_MODULE_0__["pt2px"])(g), _this25._decoration = d || "none", _this25._color = h, _this25._haloColor = f, _this25._haloSize = Math.min(Math.floor(5 * Object(_core_screenUtils_js__WEBPACK_IMPORTED_MODULE_0__["pt2px"])(Object(_core_screenUtils_js__WEBPACK_IMPORTED_MODULE_0__["toPt"])(a))), 127), _this25._size = Math.min(Math.round(Object(_core_screenUtils_js__WEBPACK_IMPORTED_MODULE_0__["pt2px"])(r)), 127);
          var b = Math.min(Math.round(Object(_core_screenUtils_js__WEBPACK_IMPORTED_MODULE_0__["pt2px"])(r)), 127);
          _this25._referenceSize = Math.round(Math.sqrt(256 * b)), _this25._scale = _this25._size / 24, _this25._angle = x, _this25._justify = Object(_alignmentUtils_js__WEBPACK_IMPORTED_MODULE_1__["getJustification"])(_m13 || "center"), _this25._xAlignD = Object(_alignmentUtils_js__WEBPACK_IMPORTED_MODULE_1__["getXAnchorDirection"])(_m13 || "center"), _this25._yAlignD = Object(_alignmentUtils_js__WEBPACK_IMPORTED_MODULE_1__["getYAnchorDirection"])(c || "baseline"), _this25._baseline = "baseline" === (c || "baseline"), _this25._bitset = (1 === _ ? 1 : 0) | (u ? 1 : 0) << 1;

          var A = _materialKey_MaterialKey_js__WEBPACK_IMPORTED_MODULE_3__["MaterialKeyBase"].load(n);

          A.sdf = !0, _this25._materialKey = A.data, _this25._lineWidth = Object(_core_screenUtils_js__WEBPACK_IMPORTED_MODULE_0__["pt2px"])(M) || 512, _this25._lineHeight = p || 1, _this25._textPlacement = y, _this25.effects = j, _this25._isCIM = T;
          return _this25;
        }

        _createClass(m, null, [{
          key: "fromText",
          value: function fromText(t, e) {
            var i = new m(t.materialKey, t.font.size, t.haloSize || 0, t.color && Object(_color_js__WEBPACK_IMPORTED_MODULE_4__["premultiplyAlphaRGBAArray"])(t.color) || 0, t.haloColor && Object(_color_js__WEBPACK_IMPORTED_MODULE_4__["premultiplyAlphaRGBAArray"])(t.haloColor) || 0, t.horizontalAlignment, t.verticalAlignment, 0, t.font.decoration, !1, t.angle || 0, t.xoffset, t.yoffset, t.lineWidth, t.lineHeight, null, null, !1),
                _Object8 = Object(_util_BidiText_js__WEBPACK_IMPORTED_MODULE_2__["bidiText"])(t.text),
                _Object9 = _slicedToArray(_Object8, 2),
                o = _Object9[1];

            return i.bindTextInfo(e, o), i;
          }
        }, {
          key: "fromCIMText",
          value: function fromCIMText(t, e) {
            var i = t.scaleFactor || 1,
                o = new m(t.materialKey, t.size * t.sizeRatio * i, t.outlineSize * t.sizeRatio, Object(_color_js__WEBPACK_IMPORTED_MODULE_4__["premultiplyAlphaRGBA"])(t.color), Object(_color_js__WEBPACK_IMPORTED_MODULE_4__["premultiplyAlphaRGBA"])(t.outlineColor), t.horizontalAlignment, t.verticalAlignment, t.alignment, t.decoration, t.colorLocked, t.angle, t.offsetX * t.sizeRatio * i, t.offsetY * t.sizeRatio * i, 512, 1, t.markerPlacement, t.effects, !0),
                _Object10 = Object(_util_BidiText_js__WEBPACK_IMPORTED_MODULE_2__["bidiText"])(t.text),
                _Object11 = _slicedToArray(_Object10, 2),
                s = _Object11[1];

            return o.bindTextInfo(e, s), o;
          }
        }]);

        return m;
      }(Object(_WGLBaseTextTemplate_js__WEBPACK_IMPORTED_MODULE_5__["default"])(_WGLMeshTemplate_js__WEBPACK_IMPORTED_MODULE_6__["default"]));
      /* harmony default export */


      __webpack_exports__["default"] = m;
      /***/
    },

    /***/
    "n7P2":
    /*!*******************************************************************************************!*\
      !*** ./node_modules/@arcgis/core/views/2d/engine/webgl/mesh/templates/WGLFillTemplate.js ***!
      \*******************************************************************************************/

    /*! exports provided: default */

    /***/
    function n7P2(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony import */


      var _core_mathUtils_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ../../../../../../core/mathUtils.js */
      "OKTS");
      /* harmony import */


      var _core_screenUtils_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ../../../../../../core/screenUtils.js */
      "qRWG");
      /* harmony import */


      var _definitions_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ../../definitions.js */
      "jIHu");
      /* harmony import */


      var _number_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ../../number.js */
      "0RS7");
      /* harmony import */


      var _materialKey_MaterialKey_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ../../materialKey/MaterialKey.js */
      "GMaR");
      /* harmony import */


      var _color_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ../../color.js */
      "qaIE");
      /* harmony import */


      var _GeometryUtils_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ../../GeometryUtils.js */
      "HQFP");
      /* harmony import */


      var _WGLMeshTemplate_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! ./WGLMeshTemplate.js */
      "916D");
      /* harmony import */


      var _WGLBaseFillTemplate_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! ./WGLBaseFillTemplate.js */
      "C/3w");
      /*
      All material copyright ESRI, All Rights Reserved, unless otherwise specified.
      See https://js.arcgis.com/4.18/esri/copyright.txt for details.
      */


      var h = /*#__PURE__*/function (_Object12) {
        _inherits(h, _Object12);

        var _super14 = _createSuper(h);

        function h(t, e, r, l, i, o, n, c, f) {
          var _this26;

          _classCallCheck(this, h);

          _this26 = _super14.call(this), _this26.effects = f;

          var a = _materialKey_MaterialKey_js__WEBPACK_IMPORTED_MODULE_4__["FillMaterialKey"].load(t);

          e && (a.sdf = e.sdf, a.pattern = !0, a.textureBinding = e.textureBinding), _this26.fillColor = r, _this26.tl = l, _this26.br = i, _this26.aux1 = o, _this26.aux2 = n, _this26.aux3 = c, _this26._materialKey = a.data;
          return _this26;
        }

        _createClass(h, null, [{
          key: "fromCIMFill",
          value: function fromCIMFill(l, s) {
            var n = l.color,
                a = n && Object(_color_js__WEBPACK_IMPORTED_MODULE_5__["premultiplyAlphaRGBA"])(n) || 0,
                m = l.materialKey;

            if (!s) {
              var t = Object(_number_js__WEBPACK_IMPORTED_MODULE_3__["i8888to32"])(0, 0, 0, l.colorLocked ? 1 : 0);
              return new h(m, null, a, 0, 0, 0, 0, t, l.effects);
            }

            var u = s.rect,
                d = s.width,
                p = s.height,
                y = u.x + _definitions_js__WEBPACK_IMPORTED_MODULE_2__["SPRITE_PADDING"],
                x = u.y + _definitions_js__WEBPACK_IMPORTED_MODULE_2__["SPRITE_PADDING"],
                g = y + d,
                j = x + p;
            var w = Object(_core_mathUtils_js__WEBPACK_IMPORTED_MODULE_0__["nextHighestPowerOfTwo"])(Object(_core_screenUtils_js__WEBPACK_IMPORTED_MODULE_1__["pt2px"])(l.height || 0));
            w > 255 ? w = 255 : w <= 0 && (w = Object(_core_mathUtils_js__WEBPACK_IMPORTED_MODULE_0__["nextHighestPowerOfTwo"])(j - x));
            var K = Object(_core_mathUtils_js__WEBPACK_IMPORTED_MODULE_0__["nextHighestPowerOfTwo"])(Object(_core_screenUtils_js__WEBPACK_IMPORTED_MODULE_1__["pt2px"])(l.height / p * d || 0));
            K > 255 ? K = 255 : K <= 0 && (K = Object(_core_mathUtils_js__WEBPACK_IMPORTED_MODULE_0__["nextHighestPowerOfTwo"])(g - y));
            var F = Object(_core_screenUtils_js__WEBPACK_IMPORTED_MODULE_1__["pt2px"])(l.offsetX || 0) + 128;
            F > 255 && (F = 255);
            var L = Object(_core_screenUtils_js__WEBPACK_IMPORTED_MODULE_1__["pt2px"])(-l.offsetY || 0) + 128;
            L > 255 && (L = 255);
            var B = l.scaleX || 1,
                G = Object(_number_js__WEBPACK_IMPORTED_MODULE_3__["i1616to32"])(y, x),
                M = Object(_number_js__WEBPACK_IMPORTED_MODULE_3__["i1616to32"])(g, j),
                S = Object(_number_js__WEBPACK_IMPORTED_MODULE_3__["i8888to32"])(K, w, F, L),
                U = Object(_number_js__WEBPACK_IMPORTED_MODULE_3__["i1616to32"])(128 * B, 128),
                b = Object(_number_js__WEBPACK_IMPORTED_MODULE_3__["i8888to32"])(0, 0, Object(_GeometryUtils_js__WEBPACK_IMPORTED_MODULE_6__["degToByte"])(l.angle), l.colorLocked ? 1 : 0);
            return new h(m, s, a, G, M, S, U, b, l.effects);
          }
        }, {
          key: "fromSimpleFill",
          value: function fromSimpleFill(e, l) {
            var s = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : !1;
            var c = e.color,
                f = c && "esriSFSNull" !== e.style && Object(_color_js__WEBPACK_IMPORTED_MODULE_5__["premultiplyAlphaRGBAArray"])(c) || 0,
                a = Object(_number_js__WEBPACK_IMPORTED_MODULE_3__["i8888to32"])(0, 0, 0, s ? 255 : 0),
                m = e.materialKey;
            if (!l) return new h(m, null, f, 0, 0, 0, 0, a, null);
            var u = l.rect,
                d = l.width,
                p = l.height,
                y = u.x + _definitions_js__WEBPACK_IMPORTED_MODULE_2__["SPRITE_PADDING"],
                x = u.y + _definitions_js__WEBPACK_IMPORTED_MODULE_2__["SPRITE_PADDING"],
                g = y + d,
                j = x + p,
                w = Object(_number_js__WEBPACK_IMPORTED_MODULE_3__["i1616to32"])(y, x),
                K = Object(_number_js__WEBPACK_IMPORTED_MODULE_3__["i1616to32"])(g, j),
                F = Object(_number_js__WEBPACK_IMPORTED_MODULE_3__["i8888to32"])(Object(_core_mathUtils_js__WEBPACK_IMPORTED_MODULE_0__["nextHighestPowerOfTwo"])(g - y), Object(_core_mathUtils_js__WEBPACK_IMPORTED_MODULE_0__["nextHighestPowerOfTwo"])(j - x), 0, 0),
                L = Object(_number_js__WEBPACK_IMPORTED_MODULE_3__["i1616to32"])(128, 128);
            return new h(m, l, f, w, K, F, L, a, null);
          }
        }, {
          key: "fromPictureFill",
          value: function fromPictureFill(s, n) {
            var c = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : !1;
            var f = _definitions_js__WEBPACK_IMPORTED_MODULE_2__["PICTURE_FILL_COLOR"],
                a = n.rect,
                m = n.width,
                u = n.height,
                d = a.x + _definitions_js__WEBPACK_IMPORTED_MODULE_2__["SPRITE_PADDING"],
                p = a.y + _definitions_js__WEBPACK_IMPORTED_MODULE_2__["SPRITE_PADDING"],
                y = d + m,
                x = p + u,
                g = Object(_number_js__WEBPACK_IMPORTED_MODULE_3__["i1616to32"])(d, p),
                j = Object(_number_js__WEBPACK_IMPORTED_MODULE_3__["i1616to32"])(y, x);
            var w = Object(_core_mathUtils_js__WEBPACK_IMPORTED_MODULE_0__["nextHighestPowerOfTwo"])(Object(_core_screenUtils_js__WEBPACK_IMPORTED_MODULE_1__["pt2px"])(s.width));
            w > 255 && (w = 255);
            var K = Object(_core_mathUtils_js__WEBPACK_IMPORTED_MODULE_0__["nextHighestPowerOfTwo"])(Object(_core_screenUtils_js__WEBPACK_IMPORTED_MODULE_1__["pt2px"])(s.height));
            K > 255 && (K = 255);
            var F = Object(_core_screenUtils_js__WEBPACK_IMPORTED_MODULE_1__["pt2px"])(s.xoffset) + 128;
            F > 255 && (F = 255);
            var L = Object(_core_screenUtils_js__WEBPACK_IMPORTED_MODULE_1__["pt2px"])(-s.yoffset) + 128;
            L > 255 && (L = 255);
            var B = Object(_number_js__WEBPACK_IMPORTED_MODULE_3__["i8888to32"])(w, K, F, L),
                G = Object(_number_js__WEBPACK_IMPORTED_MODULE_3__["i1616to32"])(128 * s.xscale, 128 * s.yscale),
                M = Object(_number_js__WEBPACK_IMPORTED_MODULE_3__["i8888to32"])(0, 0, 0, c ? 255 : 0),
                S = s.materialKey;
            return new h(S, n, f, g, j, B, G, M, null);
          }
        }]);

        return h;
      }(Object(_WGLBaseFillTemplate_js__WEBPACK_IMPORTED_MODULE_8__["default"])(_WGLMeshTemplate_js__WEBPACK_IMPORTED_MODULE_7__["default"]));
      /* harmony default export */


      __webpack_exports__["default"] = h;
      /***/
    },

    /***/
    "phaq":
    /*!********************************************************************************************!*\
      !*** ./node_modules/@arcgis/core/views/2d/engine/webgl/mesh/templates/WGLLabelTemplate.js ***!
      \********************************************************************************************/

    /*! exports provided: default */

    /***/
    function phaq(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony import */


      var _core_maybe_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ../../../../../../core/maybe.js */
      "srIe");
      /* harmony import */


      var _core_Logger_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ../../../../../../core/Logger.js */
      "6S2I");
      /* harmony import */


      var _core_Error_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ../../../../../../core/Error.js */
      "zlDU");
      /* harmony import */


      var _core_mathUtils_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ../../../../../../core/mathUtils.js */
      "OKTS");
      /* harmony import */


      var _core_screenUtils_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ../../../../../../core/screenUtils.js */
      "qRWG");
      /* harmony import */


      var _definitions_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ../../definitions.js */
      "jIHu");
      /* harmony import */


      var _alignmentUtils_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ../../alignmentUtils.js */
      "Mt1D");
      /* harmony import */


      var _number_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! ../../number.js */
      "0RS7");
      /* harmony import */


      var _enums_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! ../../enums.js */
      "yE7X");
      /* harmony import */


      var _meshUtils_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! ./meshUtils.js */
      "m3fN");
      /* harmony import */


      var _materialKey_MaterialKey_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
      /*! ../../materialKey/MaterialKey.js */
      "GMaR");
      /* harmony import */


      var _color_js__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
      /*! ../../color.js */
      "qaIE");
      /* harmony import */


      var _collisions_Metric_js__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
      /*! ../../collisions/Metric.js */
      "NMeD");
      /* harmony import */


      var _segmentUtils_js__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
      /*! ./segmentUtils.js */
      "/kT+");
      /* harmony import */


      var _WGLTextTemplate_js__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(
      /*! ./WGLTextTemplate.js */
      "iegs");
      /*
      All material copyright ESRI, All Rights Reserved, unless otherwise specified.
      See https://js.arcgis.com/4.18/esri/copyright.txt for details.
      */


      var M = _core_Logger_js__WEBPACK_IMPORTED_MODULE_1__["default"].getLogger("esri.views.2d.engine.webgl.WGLLabelTemplate");

      var L = function (e) {
        var t = new Map();
        return function (i) {
          return t.has(i) || t.set(i, e(i)), t.get(i);
        };
      }(function (e) {
        var t = 0;
        if (0 === e) return 1 / 0;

        for (; !(e % 2);) {
          t++, e /= 2;
        }

        return t;
      }),
          S = function S(e) {
        return Math.floor(127 * e + 127);
      },
          P = function P(e) {
        return Math.floor(10 * e);
      },
          v = function v(e) {
        return Math.round(e * (254 / 360));
      },
          Z = function Z(e, t) {
        return Object(_number_js__WEBPACK_IMPORTED_MODULE_7__["i1616to32"])(Math.round(8 * e), Math.round(8 * t));
      };

      var O = /*#__PURE__*/function (_WGLTextTemplate_js__) {
        _inherits(O, _WGLTextTemplate_js__);

        var _super15 = _createSuper(O);

        function O(e, t, i, o) {
          var _this27;

          _classCallCheck(this, O);

          _this27 = _super15.call(this, e, i.font.size, i.haloSize || 0, i.color && Object(_color_js__WEBPACK_IMPORTED_MODULE_11__["premultiplyAlphaRGBAArray"])(i.color) || 0, i.haloColor && Object(_color_js__WEBPACK_IMPORTED_MODULE_11__["premultiplyAlphaRGBAArray"])(i.haloColor) || 0, i.horizontalAlignment, i.verticalAlignment, Object(_meshUtils_js__WEBPACK_IMPORTED_MODULE_9__["isMapAligned"])(t.labelPlacement) ? 1 : 0, i.font.decoration, !1, i.angle || 0, i.xoffset, i.yoffset, i.lineWidth, i.lineHeight, null, null), _this27._outLineLabelAngle = 0, _this27._refPlacementPadding = 0, _this27._refPlacementDirX = 0, _this27._refPlacementDirY = 0, _this27._refOffsetX = 0, _this27._refOffsetY = 0, _this27.geometryType = _enums_js__WEBPACK_IMPORTED_MODULE_8__["WGLGeometryType"].LABEL;

          var n = function (e, t) {
            var i = !!e.minScale && t.scaleToZoom(e.minScale) || 0;
            return Object(_core_mathUtils_js__WEBPACK_IMPORTED_MODULE_3__["clamp"])(i, 0, 25.5);
          }(t, o),
              l = function (e, t) {
            var i = !!e.maxScale && t.scaleToZoom(e.maxScale) || 255;
            return Object(_core_mathUtils_js__WEBPACK_IMPORTED_MODULE_3__["clamp"])(i, 0, 25.5);
          }(t, o),
              c = t.labelPlacement,
              _Object13 = Object(_alignmentUtils_js__WEBPACK_IMPORTED_MODULE_6__["getAlignmentFromPlacement"])(c),
              _Object14 = _slicedToArray(_Object13, 2),
              m = _Object14[0],
              f = _Object14[1];

          _this27._xAlignD = m, _this27._yAlignD = f, _this27._minZoom = n, _this27._maxZoom = l, _this27._refPlacementPadding = Object(_core_screenUtils_js__WEBPACK_IMPORTED_MODULE_4__["pt2px"])(i.haloSize) + _definitions_js__WEBPACK_IMPORTED_MODULE_5__["TEXT_PLACEMENT_PADDING"];

          var d = _materialKey_MaterialKey_js__WEBPACK_IMPORTED_MODULE_10__["LabelMaterialKey"].load(e);

          d.sdf = !0, _this27._materialKey = d.data;
          return _this27;
        }

        _createClass(O, [{
          key: "_shapedBox",
          get: function get() {
            return Object(_core_maybe_js__WEBPACK_IMPORTED_MODULE_0__["unwrap"])(this._shapingInfo).bounds;
          }
        }, {
          key: "bindReferenceTemplate",
          value: function bindReferenceTemplate(e) {
            var i = Object(_alignmentUtils_js__WEBPACK_IMPORTED_MODULE_6__["getXDirection"])(this._xAlignD),
                o = Object(_alignmentUtils_js__WEBPACK_IMPORTED_MODULE_6__["getYDirection"])(this._yAlignD);
            if (this._refOffsetX = 0, this._refOffsetY = 0, Object(_core_maybe_js__WEBPACK_IMPORTED_MODULE_0__["isNone"])(e)) return void (this._refSymbolAndPlacementOffset = Object(_number_js__WEBPACK_IMPORTED_MODULE_7__["i8888to32"])(0, 0, S(i), S(o)));

            if ("circle" === e.boundsType && (i || o)) {
              var _e38 = Math.sqrt(i * i + o * o);

              i /= _e38, o /= _e38;
            }

            var s = Math.max(e.height, e.width),
                n = 4 * this._refPlacementPadding;
            this._refSymbolAndPlacementOffset = Object(_number_js__WEBPACK_IMPORTED_MODULE_7__["i8888to32"])(n, s, S(i), S(o)), this._referenceSize = s, this._refPlacementDirX = i, this._refPlacementDirY = o, this._refOffsetX = e.xOffset, this._refOffsetY = e.yOffset;
          }
        }, {
          key: "writeMesh",
          value: function writeMesh(e, i, s, n, r, a) {
            if (Object(_core_maybe_js__WEBPACK_IMPORTED_MODULE_0__["isNone"])(this._shapingInfo)) return;
            var h = new Array(),
                l = this._shapingInfo,
                c = "esriGeometryPolygon" === s.geometryType ? s.readLegacyCentroid() : s.readLegacyGeometry();

            if (c) {
              switch (this.current = {
                out: e,
                outVecs: i,
                outMetrics: h,
                inId: r,
                inShaping: l,
                zoomLevel: a
              }, n) {
                case "esriGeometryPolyline":
                  this._placeLineLabels(c);

                  break;

                case "esriGeometryPoint":
                case "esriGeometryPolygon":
                  this._placePointLabels(c);

                  break;

                default:
                  (function (e) {
                    var t = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : "mapview-labeling";
                    M.error(new _core_Error_js__WEBPACK_IMPORTED_MODULE_2__["default"](t, e));
                  })("mapview-labeling", "Geometry of type ".concat(n, " is not supported"));

              }

              e.writeMetrics(this.current.outMetrics);
            }
          }
        }, {
          key: "_isVisible",
          value: function _isVisible(e, t) {
            var i = P(this.current.zoomLevel);
            return P(e) <= i && i <= P(t);
          }
        }, {
          key: "_placePointLabels",
          value: function _placePointLabels(e) {
            var _this$current = this.current,
                t = _this$current.out,
                i = _this$current.outVecs,
                o = _this$current.outMetrics,
                s = _this$current.inId;

            this._writeGlyphs(t, i, s, e, o);
          }
        }, {
          key: "_placeLineLabels",
          value: function _placeLineLabels(e) {
            var t = Object(_segmentUtils_js__WEBPACK_IMPORTED_MODULE_13__["smoothPaths"])(e.paths, this.current.inShaping.bounds.width),
                i = this._placeSubdivGlyphs.bind(this),
                o = (this._shapedBox.width + 128) / 4;

            var _iterator40 = _createForOfIteratorHelper(t),
                _step40;

            try {
              for (_iterator40.s(); !(_step40 = _iterator40.n()).done;) {
                var _e39 = _step40.value;
                Object(_segmentUtils_js__WEBPACK_IMPORTED_MODULE_13__["pathDivide"])(_e39, o, i);
              }
            } catch (err) {
              _iterator40.e(err);
            } finally {
              _iterator40.f();
            }
          }
        }, {
          key: "_placeSubdivGlyphs",
          value: function _placeSubdivGlyphs(e, t, i, o) {
            var s = L(t),
                r = this._shapedBox.width / 4,
                a = Math.min(i, o - i),
                h = Object(_core_mathUtils_js__WEBPACK_IMPORTED_MODULE_3__["log2"])(a / (4 + r / 2)),
                l = 0 === t ? h : Math.min(s, h),
                c = Math.max(this._minZoom, this.current.zoomLevel + 2 - l),
                m = this.current.zoomLevel - c,
                f = this._shapedBox.width / 2 * Math.pow(2, m);
            this.current.inShaping.isMultiline ? 0 === t && this._placeStraight(e, c) : this._placeCurved(e, c, f);
          }
        }, {
          key: "_placeStraight",
          value: function _placeStraight(e, t) {
            var _this$current2 = this.current,
                i = _this$current2.out,
                o = _this$current2.outVecs,
                s = _this$current2.outMetrics,
                n = _this$current2.inId;

            this._writeGlyphs(i, o, n, e, s, t);
          }
        }, {
          key: "_placeCurved",
          value: function _placeCurved(e, t, i) {
            var o = {
              from: this.current.out.currentDisplayRecordCount(),
              count: -1
            },
                s = new _collisions_Metric_js__WEBPACK_IMPORTED_MODULE_12__["default"](this.current.inId, o, e.x, e.y, t),
                n = e.clone(),
                r = e.angle * (180 / Math.PI) % 360,
                a = (e.angle * (180 / Math.PI) + 180) % 360;
            this._outLineLabelAngle = v(r), this._placeFirst(n, s, t, 1), this._placeBack(e, n, s, t, i, 1), this._placeForward(e, n, s, t, i, 1), this._outLineLabelAngle = v(a), this._placeFirst(n, s, t, 0), this._placeBack(e, n, s, t, i, 0), this._placeForward(e, n, s, t, i, 0), s.range.count = this.current.out.currentDisplayRecordCount() - s.range.from, s.bounds && this.current.outMetrics.push(s);
          }
        }, {
          key: "_placeBack",
          value: function _placeBack(e, t, i, o, s, n) {
            var r = e.clone();
            var a = e.backwardLength + 0;

            for (; r.prev() && !(a >= s);) {
              this._placeOnSegment(r, t, i, a, o, -1, n), a += r.length + 0;
            }
          }
        }, {
          key: "_placeForward",
          value: function _placeForward(e, t, i, o, s, n) {
            var r = e.clone();
            var a = e.remainingLength + 0;

            for (; r.next() && !(a >= s);) {
              this._placeOnSegment(r, t, i, a, o, 1, n), a += r.length + 0;
            }
          }
        }, {
          key: "_placeFirst",
          value: function _placeFirst(e, t, i, o) {
            var s = e,
                r = this.current.inShaping,
                a = r.glyphs,
                h = this.current.zoomLevel,
                _this$current3 = this.current,
                l = _this$current3.out,
                c = _this$current3.outVecs,
                m = _this$current3.inId,
                f = Z(s.x, s.y);

            var _iterator41 = _createForOfIteratorHelper(a),
                _step41;

            try {
              for (_iterator41.s(); !(_step41 = _iterator41.n()).done;) {
                var _s17 = _step41.value;

                var _a15 = _s17.x > r.bounds.x ? o : 1 - o,
                    u = _a15 * e.remainingLength + (1 - _a15) * e.backwardLength,
                    p = Math.abs(_s17.x + _s17.width / 2 - r.bounds.x),
                    _ = Math.max(0, h + Object(_core_mathUtils_js__WEBPACK_IMPORTED_MODULE_3__["log2"])(p / (u + 0))),
                    d = Math.max(i, _);

                _s17.maxZoom = 25, _s17.angle = e.angle + (1 - o) * Math.PI, _s17.minZoom = d, this._writeGlyph(l, c, _s17, m, f), o && this._isVisible(_s17.minZoom, _s17.maxZoom) && t.add(_s17.bounds, 0, 0);
              }
            } catch (err) {
              _iterator41.e(err);
            } finally {
              _iterator41.f();
            }
          }
        }, {
          key: "_placeOnSegment",
          value: function _placeOnSegment(e, t, i, o, s, r, a) {
            var h = this.current.inShaping.glyphs,
                _this$current4 = this.current,
                l = _this$current4.out,
                c = _this$current4.outVecs,
                m = _this$current4.inId,
                f = this.current.inShaping,
                u = this.current.zoomLevel,
                p = e.dx / e.length,
                _ = e.dy / e.length,
                d = {
              x: e.x + o * -r * p,
              y: e.y + o * -r * _
            },
                g = Z(d.x, d.y);

            var _iterator42 = _createForOfIteratorHelper(h),
                _step42;

            try {
              for (_iterator42.s(); !(_step42 = _iterator42.n()).done;) {
                var _p4 = _step42.value;

                var _h11 = _p4.x > f.bounds.x ? a : 1 - a;

                if (!(_h11 && 1 === r || !_h11 && -1 === r)) continue;

                var _4 = Math.abs(_p4.x + _p4.width / 2 - f.bounds.x),
                    _d8 = Math.max(0, u + Object(_core_mathUtils_js__WEBPACK_IMPORTED_MODULE_3__["log2"])(_4 / o) - .1),
                    y = Math.max(s, u + Object(_core_mathUtils_js__WEBPACK_IMPORTED_MODULE_3__["log2"])(_4 / (o + e.length + 0)));

                0 !== _d8 && (_p4.angle = e.angle + (1 - a) * Math.PI, _p4.minZoom = y, _p4.maxZoom = _d8, this._writeGlyph(l, c, _p4, m, g), a && this._isVisible(_p4.minZoom, _p4.maxZoom) && i.add(_p4.bounds, e.x - t.x, e.y - t.y));
              }
            } catch (err) {
              _iterator42.e(err);
            } finally {
              _iterator42.f();
            }
          }
        }, {
          key: "_writeGlyphs",
          value: function _writeGlyphs(e, i, o, s, n) {
            var r = arguments.length > 5 && arguments[5] !== undefined ? arguments[5] : this._minZoom;
            var a = this._shapingInfo;
            if (Object(_core_maybe_js__WEBPACK_IMPORTED_MODULE_0__["isNone"])(a)) return;
            if (s.x < 0 || s.x >= 512 || s.y < 0 || s.y >= 512) return;
            var h = e.currentDisplayRecordCount(),
                l = Z(s.x + this._refOffsetX, s.y - this._refOffsetY),
                c = new _collisions_Metric_js__WEBPACK_IMPORTED_MODULE_12__["default"](o, {
              from: h,
              count: -1
            }, s.x + this._refOffsetX, s.y - this._refOffsetY, r);

            var _iterator43 = _createForOfIteratorHelper(a.glyphs),
                _step43;

            try {
              for (_iterator43.s(); !(_step43 = _iterator43.n()).done;) {
                var t = _step43.value;
                t.minZoom = r, t.maxZoom = this._maxZoom, this._writeGlyph(e, i, t, o, l);
              }
            } catch (err) {
              _iterator43.e(err);
            } finally {
              _iterator43.f();
            }

            c.range.count = e.currentDisplayRecordCount() - c.range.from, c.bounds = a.boundsT;

            var m = _materialKey_MaterialKey_js__WEBPACK_IMPORTED_MODULE_10__["LabelMaterialKey"].load(this._materialKey),
                f = this._refPlacementDirX,
                u = this._refPlacementDirY,
                p = m.vvSizeFieldStops || m.vvSizeMinMaxValue || m.vvSizeScaleStops || m.vvSizeUnitValue;

            c.setPlacementOffset(p, this._referenceSize, this._refPlacementPadding, f, u), n.push(c);
          }
        }, {
          key: "_writeGlyph",
          value: function _writeGlyph(e, t, i, o, s) {
            var n = _materialKey_MaterialKey_js__WEBPACK_IMPORTED_MODULE_10__["MaterialKeyBase"].load(this._materialKey);

            n.textureBinding = i.textureBinding;

            var r = t.indexVector.length,
                a = t.getVector("geometry").vertexCount,
                h = this._writeIndices(t),
                l = this._writeVertex(t, o, s, i);

            e.writeDisplayRecord(this.geometryType, n.data, a, l, r, h);
          }
        }, {
          key: "_writeVertexCommon",
          value: function _writeVertexCommon(e, t, i, o) {
            var s = this._color,
                n = this._haloColor,
                r = Object(_number_js__WEBPACK_IMPORTED_MODULE_7__["i8888to32"])(0, 0, this._size, this._haloSize),
                a = Math.max(o.minZoom, this._minZoom),
                h = Math.min(o.maxZoom, this._maxZoom),
                l = Object(_number_js__WEBPACK_IMPORTED_MODULE_7__["i8888to32"])(P(a), P(h), this._outLineLabelAngle, 0);
            e.push(i), e.push(t), e.push(s), e.push(n), e.push(r), e.push(this._refSymbolAndPlacementOffset), e.push(l);
          }
        }], [{
          key: "fromLabelClass",
          value: function fromLabelClass(e, t) {
            if ("center-along" === e.labelPlacement) {
              var _t50 = e.symbol;
              _t50.xoffset = 0, _t50.yoffset = 0, _t50.angle = 0, _t50.font.decoration = "none";
            }

            return new O(e.materialKey, e, e.symbol, t);
          }
        }]);

        return O;
      }(_WGLTextTemplate_js__WEBPACK_IMPORTED_MODULE_14__["default"]);
      /* harmony default export */


      __webpack_exports__["default"] = O;
      /***/
    },

    /***/
    "psH3":
    /*!***************************************************************!*\
      !*** ./node_modules/@arcgis/core/symbols/support/defaults.js ***!
      \***************************************************************/

    /*! exports provided: defaultPointSymbol2D, defaultPolygonSymbol2D, defaultPolylineSymbol2D, defaultTextSymbol2D, errorPointSymbol2D, errorPolygonSymbol2D, errorPolylineSymbol2D, getDefaultSymbol2D */

    /***/
    function psH3(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "defaultPointSymbol2D", function () {
        return c;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "defaultPolygonSymbol2D", function () {
        return a;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "defaultPolylineSymbol2D", function () {
        return u;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "defaultTextSymbol2D", function () {
        return y;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "errorPointSymbol2D", function () {
        return N;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "errorPolygonSymbol2D", function () {
        return j;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "errorPolylineSymbol2D", function () {
        return O;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "getDefaultSymbol2D", function () {
        return J;
      });
      /* harmony import */


      var _core_has_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ../../core/has.js */
      "wSAH");
      /* harmony import */


      var _core_maybe_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ../../core/maybe.js */
      "srIe");
      /* harmony import */


      var _SimpleLineSymbol_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ../SimpleLineSymbol.js */
      "21Ip");
      /* harmony import */


      var _SimpleFillSymbol_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ../SimpleFillSymbol.js */
      "DXYb");
      /* harmony import */


      var _SimpleMarkerSymbol_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ../SimpleMarkerSymbol.js */
      "Tcmu");
      /* harmony import */


      var _TextSymbol_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ../TextSymbol.js */
      "Ibpv");
      /* harmony import */


      var _defaultsJSON_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ./defaultsJSON.js */
      "gkbi");
      /*
      All material copyright ESRI, All Rights Reserved, unless otherwise specified.
      See https://js.arcgis.com/4.18/esri/copyright.txt for details.
      */


      var c = _SimpleMarkerSymbol_js__WEBPACK_IMPORTED_MODULE_4__["default"].fromJSON(_defaultsJSON_js__WEBPACK_IMPORTED_MODULE_6__["defaultPointSymbolJSON"]),
          u = _SimpleLineSymbol_js__WEBPACK_IMPORTED_MODULE_2__["default"].fromJSON(_defaultsJSON_js__WEBPACK_IMPORTED_MODULE_6__["defaultPolylineSymbolJSON"]),
          a = _SimpleFillSymbol_js__WEBPACK_IMPORTED_MODULE_3__["default"].fromJSON(_defaultsJSON_js__WEBPACK_IMPORTED_MODULE_6__["defaultPolygonSymbolJSON"]),
          y = _TextSymbol_js__WEBPACK_IMPORTED_MODULE_5__["default"].fromJSON(_defaultsJSON_js__WEBPACK_IMPORTED_MODULE_6__["defaultTextSymbolJSON"]);

      function J(o) {
        if (Object(_core_maybe_js__WEBPACK_IMPORTED_MODULE_1__["isNone"])(o)) return null;

        switch (o.type) {
          case "mesh":
            return null;

          case "point":
          case "multipoint":
            return c;

          case "polyline":
            return u;

          case "polygon":
          case "extent":
            return a;
        }

        return null;
      }

      var N = _SimpleMarkerSymbol_js__WEBPACK_IMPORTED_MODULE_4__["default"].fromJSON(_defaultsJSON_js__WEBPACK_IMPORTED_MODULE_6__["errorPointSymbolJSON"]),
          O = _SimpleLineSymbol_js__WEBPACK_IMPORTED_MODULE_2__["default"].fromJSON(_defaultsJSON_js__WEBPACK_IMPORTED_MODULE_6__["errorPolylineSymbolJSON"]),
          j = _SimpleFillSymbol_js__WEBPACK_IMPORTED_MODULE_3__["default"].fromJSON(_defaultsJSON_js__WEBPACK_IMPORTED_MODULE_6__["errorPolygonSymbolJSON"]);
      /***/

    },

    /***/
    "qLV0":
    /*!*********************************************************************************************!*\
      !*** ./node_modules/@arcgis/core/views/2d/engine/webgl/mesh/templates/WGLMarkerTemplate.js ***!
      \*********************************************************************************************/

    /*! exports provided: default */

    /***/
    function qLV0(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony import */


      var _core_maybe_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ../../../../../../core/maybe.js */
      "srIe");
      /* harmony import */


      var _core_screenUtils_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ../../../../../../core/screenUtils.js */
      "qRWG");
      /* harmony import */


      var _definitions_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ../../definitions.js */
      "jIHu");
      /* harmony import */


      var _chunks_mat2df32_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ../../../../../../chunks/mat2df32.js */
      "LGNZ");
      /* harmony import */


      var _chunks_vec2f32_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ../../../../../../chunks/vec2f32.js */
      "c46T");
      /* harmony import */


      var _number_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ../../number.js */
      "0RS7");
      /* harmony import */


      var _materialKey_MaterialKey_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ../../materialKey/MaterialKey.js */
      "GMaR");
      /* harmony import */


      var _color_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! ../../color.js */
      "qaIE");
      /* harmony import */


      var _WGLMeshTemplate_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! ./WGLMeshTemplate.js */
      "916D");
      /* harmony import */


      var _WGLBaseMarkerTemplate_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! ./WGLBaseMarkerTemplate.js */
      "+TxJ");
      /*
      All material copyright ESRI, All Rights Reserved, unless otherwise specified.
      See https://js.arcgis.com/4.18/esri/copyright.txt for details.
      */


      var d = /*#__PURE__*/function (_Object15) {
        _inherits(d, _Object15);

        var _super16 = _createSuper(d);

        function d(t, e, o, l, c, m, f, _d9, u, M, p, y, g, x, k, _, b, w, S, j, P) {
          var _this28;

          _classCallCheck(this, d);

          _this28 = _super16.call(this), _this28.angle = l, _this28.height = f, _this28.width = m, _this28.xOffset = e * S, _this28.yOffset = o * S, _this28._markerPlacement = j, _this28.effects = P, _this28._anchorX = .5 - (.5 + _) * k.width / k.width, _this28._anchorY = .5 - (.5 + b) * k.height / k.height;

          var C = (1 === x ? 1 : 0) | (p ? 1 : 0) << 1 | (g ? 1 : 0) << 2 | (y ? 1 : 0) << 3,
              L = k && k.sdf,
              B = _materialKey_MaterialKey_js__WEBPACK_IMPORTED_MODULE_6__["MarkerMaterialKey"].load(t);

          B.sdf = L, B.pattern = !0, B.textureBinding = k.textureBinding, _this28._materialKey = B.data, _this28._fillColor = c, _this28._outlineColor = u, _this28._sizeOutlineWidth = Object(_number_js__WEBPACK_IMPORTED_MODULE_5__["i8888to32"])(Math.round(Math.min(Math.sqrt(128 * m), 255)), Math.round(Math.min(Math.sqrt(128 * f), 255)), Math.round(Math.min(Math.sqrt(128 * M), 255)), Math.round(Math.min(Math.sqrt(128 * _d9), 255)));
          var K = k.rect.x + _definitions_js__WEBPACK_IMPORTED_MODULE_2__["SPRITE_PADDING"],
              W = k.rect.y + _definitions_js__WEBPACK_IMPORTED_MODULE_2__["SPRITE_PADDING"],
              q = K + k.width,
              T = W + k.height;
          _this28._texUpperLeft = Object(_number_js__WEBPACK_IMPORTED_MODULE_5__["i1616to32"])(K, W), _this28._texUpperRight = Object(_number_js__WEBPACK_IMPORTED_MODULE_5__["i1616to32"])(q, W), _this28._texBottomLeft = Object(_number_js__WEBPACK_IMPORTED_MODULE_5__["i1616to32"])(K, T), _this28._texBottomRight = Object(_number_js__WEBPACK_IMPORTED_MODULE_5__["i1616to32"])(q, T), m *= w, f *= w, m *= S, f *= S;
          var z = Math.round(Math.min(64 * w, 255));
          _this28._bitestAndDistRatio = Object(_number_js__WEBPACK_IMPORTED_MODULE_5__["i8888to32"])(0, 0, C, z), _this28._computedWidth = m, _this28._computedHeight = f;
          var A = Object(_chunks_vec2f32_js__WEBPACK_IMPORTED_MODULE_4__["c"])(),
              R = Object(_chunks_mat2df32_js__WEBPACK_IMPORTED_MODULE_3__["c"])();

          _this28._applyTransformation(R, A);

          return _this28;
        }

        _createClass(d, null, [{
          key: "fromCIMMarker",
          value: function fromCIMMarker(r, o) {
            var i = o && o.width || 1,
                s = o && o.height || 1,
                a = r.size,
                n = i / s * r.scaleX,
                h = r.scaleSymbolsProportionally && r.frameHeight ? a / r.frameHeight : 1,
                c = Object(_color_js__WEBPACK_IMPORTED_MODULE_7__["premultiplyAlphaRGBA"])(r.color),
                m = Object(_color_js__WEBPACK_IMPORTED_MODULE_7__["premultiplyAlphaRGBA"])(r.outlineColor),
                f = Object(_core_screenUtils_js__WEBPACK_IMPORTED_MODULE_1__["pt2px"])(a),
                u = f * n,
                M = Object(_core_screenUtils_js__WEBPACK_IMPORTED_MODULE_1__["pt2px"])(r.offsetX || 0),
                p = Object(_core_screenUtils_js__WEBPACK_IMPORTED_MODULE_1__["pt2px"])(r.offsetY || 0),
                y = Object(_core_screenUtils_js__WEBPACK_IMPORTED_MODULE_1__["pt2px"])(r.outlineWidth || 0) * h,
                g = r.alignment || 0,
                x = Object(_core_screenUtils_js__WEBPACK_IMPORTED_MODULE_1__["pt2px"])(r.referenceSize);
            var k = r.rotation || 0;
            r.rotateClockwise || (k = -k);
            var _ = 0,
                b = 0;
            var w = r.anchorPoint;
            return w && (r.isAbsoluteAnchorPoint ? a && (_ = -w.x / (a * n), b = w.y / a) : (_ = w.x, b = w.y)), new d(r.materialKey, M, p, k, c, u, f, x, m, y, r.colorLocked, r.scaleSymbolsProportionally, !1, g, o, _, b, r.sizeRatio, Object(_core_maybe_js__WEBPACK_IMPORTED_MODULE_0__["unwrapOr"])(r.scaleFactor, 1), r.markerPlacement, r.effects);
          }
        }, {
          key: "fromPictureMarker",
          value: function fromPictureMarker(t, r) {
            var i = Math.round(Object(_core_screenUtils_js__WEBPACK_IMPORTED_MODULE_1__["pt2px"])(t.width)),
                s = Math.round(Object(_core_screenUtils_js__WEBPACK_IMPORTED_MODULE_1__["pt2px"])(t.height)),
                a = _definitions_js__WEBPACK_IMPORTED_MODULE_2__["PICTURE_FILL_COLOR"],
                n = Math.round(Object(_core_screenUtils_js__WEBPACK_IMPORTED_MODULE_1__["pt2px"])(t.xoffset || 0)),
                h = Math.round(Object(_core_screenUtils_js__WEBPACK_IMPORTED_MODULE_1__["pt2px"])(t.yoffset || 0));
            return new d(t.materialKey, n, h, t.angle, a, i, s, s, 0, 0, !1, !1, !1, 0, r, 0, 0, 1, 1, null, null);
          }
        }, {
          key: "fromSimpleMarker",
          value: function fromSimpleMarker(t, r) {
            var o = Object(_color_js__WEBPACK_IMPORTED_MODULE_7__["premultiplyAlphaRGBAArray"])(t.color),
                i = Math.round(Object(_core_screenUtils_js__WEBPACK_IMPORTED_MODULE_1__["pt2px"])(t.size)),
                s = i,
                a = Math.round(Object(_core_screenUtils_js__WEBPACK_IMPORTED_MODULE_1__["pt2px"])(t.xoffset || 0)),
                n = Math.round(Object(_core_screenUtils_js__WEBPACK_IMPORTED_MODULE_1__["pt2px"])(t.yoffset || 0)),
                h = t.style,
                l = t.outline,
                m = 0 | (l && l.color && Object(_color_js__WEBPACK_IMPORTED_MODULE_7__["premultiplyAlphaRGBAArray"])(l.color)),
                f = 0 | (l && l.width && Math.round(Object(_core_screenUtils_js__WEBPACK_IMPORTED_MODULE_1__["pt2px"])(l.width))),
                u = new d(t.materialKey, a, n, t.angle, o, i, s, s, m, f, !1, !1, "esriSMSCross" === h || "esriSMSX" === h, 0, r, 0, 0, 126 / 64, 1, null, null);
            return u.boundsType = "esriSMSCircle" === h ? "circle" : "square", u;
          }
        }, {
          key: "fromLineSymbolMarker",
          value: function fromLineSymbolMarker(t, r) {
            var o = Object(_color_js__WEBPACK_IMPORTED_MODULE_7__["premultiplyAlphaRGBAArray"])(t.color),
                i = Math.round(Object(_core_screenUtils_js__WEBPACK_IMPORTED_MODULE_1__["pt2px"])(6 * t.lineWidth)),
                s = i,
                a = "cross" === t.style || "x" === t.style;
            var n;

            switch (t.placement) {
              case "begin-end":
                n = "Both";
                break;

              case "begin":
                n = "JustBegin";
                break;

              case "end":
                n = "JustEnd";
                break;

              default:
                n = "None";
            }

            var h = {
              type: "CIMMarkerPlacementAtExtremities",
              angleToLine: !0,
              offset: 0,
              extremityPlacement: n,
              offsetAlongLine: 0
            },
                l = new d(t.materialKey, 0, 0, 0, o, i, s, s / 6, o, a ? Math.round(Object(_core_screenUtils_js__WEBPACK_IMPORTED_MODULE_1__["pt2px"])(t.lineWidth)) : 0, !1, !1, a, 1, r, 0, 0, 126 / 64, 1, h, null);
            return l.boundsType = "circle" === t.style ? "circle" : "square", l;
          }
        }]);

        return d;
      }(Object(_WGLBaseMarkerTemplate_js__WEBPACK_IMPORTED_MODULE_9__["default"])(_WGLMeshTemplate_js__WEBPACK_IMPORTED_MODULE_8__["default"]));
      /* harmony default export */


      __webpack_exports__["default"] = d;
      /***/
    },

    /***/
    "wlZk":
    /*!**************************************************************!*\
      !*** ./node_modules/@arcgis/core/symbols/cim/ExpandedCIM.js ***!
      \**************************************************************/

    /*! exports provided: ExpandedCIM */

    /***/
    function wlZk(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ExpandedCIM", function () {
        return s;
      });
      /* harmony import */


      var _views_2d_engine_webgl_enums_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ../../views/2d/engine/webgl/enums.js */
      "yE7X");
      /* harmony import */


      var _views_2d_engine_webgl_materialKey_MaterialKey_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ../../views/2d/engine/webgl/materialKey/MaterialKey.js */
      "GMaR");
      /*
      All material copyright ESRI, All Rights Reserved, unless otherwise specified.
      See https://js.arcgis.com/4.18/esri/copyright.txt for details.
      */


      var r = {
        marker: _views_2d_engine_webgl_enums_js__WEBPACK_IMPORTED_MODULE_0__["WGLGeometryType"].MARKER,
        fill: _views_2d_engine_webgl_enums_js__WEBPACK_IMPORTED_MODULE_0__["WGLGeometryType"].FILL,
        line: _views_2d_engine_webgl_enums_js__WEBPACK_IMPORTED_MODULE_0__["WGLGeometryType"].LINE,
        text: _views_2d_engine_webgl_enums_js__WEBPACK_IMPORTED_MODULE_0__["WGLGeometryType"].TEXT
      };

      var s = /*#__PURE__*/function () {
        function s(e, _s18, a) {
          _classCallCheck(this, s);

          this.layers = e, this.data = _s18, this.hash = this._createHash(), this.rendererKey = a;

          var _iterator44 = _createForOfIteratorHelper(e),
              _step44;

          try {
            for (_iterator44.s(); !(_step44 = _iterator44.n()).done;) {
              var _s20 = _step44.value;
              var _e40 = r[_s20.type];
              _s20.materialKey = Object(_views_2d_engine_webgl_materialKey_MaterialKey_js__WEBPACK_IMPORTED_MODULE_1__["createMaterialKey"])(_e40, this.rendererKey, !1, !1);
            }
          } catch (err) {
            _iterator44.e(err);
          } finally {
            _iterator44.f();
          }
        }

        _createClass(s, [{
          key: "type",
          get: function get() {
            return "expanded-cim";
          }
        }, {
          key: "_createHash",
          value: function _createHash() {
            var e = "";

            var _iterator45 = _createForOfIteratorHelper(this.layers),
                _step45;

            try {
              for (_iterator45.s(); !(_step45 = _iterator45.n()).done;) {
                var t = _step45.value;
                e += t.templateHash;
              }
            } catch (err) {
              _iterator45.e(err);
            } finally {
              _iterator45.f();
            }

            return e;
          }
        }]);

        return s;
      }();
      /***/

    },

    /***/
    "xF2a":
    /*!****************************************************************************************************!*\
      !*** ./node_modules/@arcgis/core/views/2d/engine/webgl/mesh/templates/WGLDynamicMarkerTemplate.js ***!
      \****************************************************************************************************/

    /*! exports provided: default */

    /***/
    function xF2a(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony import */


      var _core_maybe_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ../../../../../../core/maybe.js */
      "srIe");
      /* harmony import */


      var _core_Logger_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ../../../../../../core/Logger.js */
      "6S2I");
      /* harmony import */


      var _core_Error_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ../../../../../../core/Error.js */
      "zlDU");
      /* harmony import */


      var _core_screenUtils_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ../../../../../../core/screenUtils.js */
      "qRWG");
      /* harmony import */


      var _definitions_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ../../definitions.js */
      "jIHu");
      /* harmony import */


      var _chunks_mat2df32_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ../../../../../../chunks/mat2df32.js */
      "LGNZ");
      /* harmony import */


      var _chunks_vec2f32_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ../../../../../../chunks/vec2f32.js */
      "c46T");
      /* harmony import */


      var _number_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! ../../number.js */
      "0RS7");
      /* harmony import */


      var _materialKey_MaterialKey_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! ../../materialKey/MaterialKey.js */
      "GMaR");
      /* harmony import */


      var _color_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! ../../color.js */
      "qaIE");
      /* harmony import */


      var _util_Result_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
      /*! ../../util/Result.js */
      "GqaZ");
      /* harmony import */


      var _util_js__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
      /*! ./util.js */
      "aixI");
      /* harmony import */


      var _WGLBaseMarkerTemplate_js__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
      /*! ./WGLBaseMarkerTemplate.js */
      "+TxJ");
      /* harmony import */


      var _WGLDynamicMeshTemplate_js__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
      /*! ./WGLDynamicMeshTemplate.js */
      "ej3m");
      /*
      All material copyright ESRI, All Rights Reserved, unless otherwise specified.
      See https://js.arcgis.com/4.18/esri/copyright.txt for details.
      */


      var y = Object(_chunks_vec2f32_js__WEBPACK_IMPORTED_MODULE_6__["c"])(),
          d = Object(_chunks_mat2df32_js__WEBPACK_IMPORTED_MODULE_5__["c"])(),
          M = _core_Logger_js__WEBPACK_IMPORTED_MODULE_1__["default"].getLogger("esri.views.2d.engine.webgl.WGLDynamicMarkerTemplate");

      var u = /*#__PURE__*/function (_Object16) {
        _inherits(u, _Object16);

        var _super17 = _createSuper(u);

        function u(e) {
          var _this29;

          _classCallCheck(this, u);

          if (_this29 = _super17.call(this, e), _this29._cimMarkerLayer = e, Object(_util_js__WEBPACK_IMPORTED_MODULE_11__["isFunction"])(e.color)) {
            var t = function t(_t51, i, s) {
              return Object(_color_js__WEBPACK_IMPORTED_MODULE_9__["premultiplyAlphaRGBA"])(e.color(_t51, i, s));
            };

            _this29._dynamicPropertyMap.set("_fillColor", t);
          } else _this29._fillColor = Object(_color_js__WEBPACK_IMPORTED_MODULE_9__["premultiplyAlphaRGBA"])(e.color);

          if (Object(_util_js__WEBPACK_IMPORTED_MODULE_11__["isFunction"])(e.outlineColor)) {
            var _t52 = function _t52(t, i, s) {
              return Object(_color_js__WEBPACK_IMPORTED_MODULE_9__["premultiplyAlphaRGBA"])(e.outlineColor(t, i, s));
            };

            _this29._dynamicPropertyMap.set("_outlineColor", _t52);
          } else _this29._outlineColor = Object(_color_js__WEBPACK_IMPORTED_MODULE_9__["premultiplyAlphaRGBA"])(e.outlineColor);

          if (Object(_util_js__WEBPACK_IMPORTED_MODULE_11__["isFunction"])(e.size)) {
            var _t53 = function _t53(t, i, r) {
              return Object(_core_screenUtils_js__WEBPACK_IMPORTED_MODULE_3__["pt2px"])(e.size(t, i, r));
            };

            _this29._dynamicPropertyMap.set("_size", _t53);
          } else _this29._size = Object(_core_screenUtils_js__WEBPACK_IMPORTED_MODULE_3__["pt2px"])(e.size);

          if (Object(_util_js__WEBPACK_IMPORTED_MODULE_11__["isFunction"])(e.scaleX) ? _this29._dynamicPropertyMap.set("_scaleX", e.scaleX) : _this29._scaleX = e.scaleX, Object(_util_js__WEBPACK_IMPORTED_MODULE_11__["isFunction"])(e.offsetX)) {
            var _t54 = function _t54(t, i, r) {
              return Object(_core_screenUtils_js__WEBPACK_IMPORTED_MODULE_3__["pt2px"])(e.offsetX(t, i, r));
            };

            _this29._dynamicPropertyMap.set("xOffset", _t54);
          } else _this29.xOffset = Object(_core_screenUtils_js__WEBPACK_IMPORTED_MODULE_3__["pt2px"])(e.offsetX);

          if (Object(_util_js__WEBPACK_IMPORTED_MODULE_11__["isFunction"])(e.offsetY)) {
            var _t55 = function _t55(t, i, r) {
              return Object(_core_screenUtils_js__WEBPACK_IMPORTED_MODULE_3__["pt2px"])(e.offsetY(t, i, r));
            };

            _this29._dynamicPropertyMap.set("yOffset", _t55);
          } else _this29.yOffset = Object(_core_screenUtils_js__WEBPACK_IMPORTED_MODULE_3__["pt2px"])(e.offsetY);

          if (Object(_util_js__WEBPACK_IMPORTED_MODULE_11__["isFunction"])(e.outlineWidth)) {
            var _t56 = function _t56(t, i, r) {
              return Object(_core_screenUtils_js__WEBPACK_IMPORTED_MODULE_3__["pt2px"])(e.outlineWidth(t, i, r));
            };

            _this29._dynamicPropertyMap.set("_outlineWidth", _t56);
          } else _this29._outlineWidth = Object(_core_screenUtils_js__WEBPACK_IMPORTED_MODULE_3__["pt2px"])(e.outlineWidth);

          Object(_util_js__WEBPACK_IMPORTED_MODULE_11__["isFunction"])(e.rotation) ? _this29._dynamicPropertyMap.set("_angle", e.rotation) : _this29._angle = e.rotation, _this29._scaleFactor = Object(_core_maybe_js__WEBPACK_IMPORTED_MODULE_0__["unwrapOr"])(e.scaleFactor, 1), _this29._markerPlacement = e.markerPlacement, _this29.effects = e.effects, _this29._bitSet = (1 === e.alignment ? 1 : 0) | (e.colorLocked ? 1 : 0) << 1 | (e.scaleSymbolsProportionally ? 1 : 0) << 3, _this29._materialKey = e.materialKey;
          return _possibleConstructorReturn(_this29);
        }

        _createClass(u, [{
          key: "bindFeature",
          value: function bindFeature(t, e, o) {
            var _this30 = this;

            var a = t.readLegacyFeature();

            this._dynamicPropertyMap.forEach(function (t, i) {
              _this30[i] = t(a, e, o);
            });

            var m = this._cimMarkerLayer.materialHash,
                f = "function" == typeof m ? m(a, e, o) : m,
                _ = this._materialCache.get(f);

            if (!_ || !Object(_util_Result_js__WEBPACK_IMPORTED_MODULE_10__["ok"])(_.spriteMosaicItem) || !_.spriteMosaicItem) return void M.error(new _core_Error_js__WEBPACK_IMPORTED_MODULE_2__["default"]("mapview-cim", "Encountered an error when binding feature"));
            var p = _.spriteMosaicItem,
                _u8 = this._cimMarkerLayer.sizeRatio,
                g = p.width / p.height * this._scaleX,
                k = this._cimMarkerLayer.rotateClockwise ? this._angle : -this._angle;
            var L = this._size,
                x = L * g;
            var P = this.xOffset,
                j = this.yOffset;
            this.xOffset *= this._scaleFactor, this.yOffset *= this._scaleFactor;
            var w = this._cimMarkerLayer.scaleSymbolsProportionally && this._cimMarkerLayer.frameHeight ? this._size / Object(_core_screenUtils_js__WEBPACK_IMPORTED_MODULE_3__["pt2px"])(this._cimMarkerLayer.frameHeight) : 1,
                z = this._outlineWidth * w,
                b = Object(_core_screenUtils_js__WEBPACK_IMPORTED_MODULE_3__["pt2px"])(this._cimMarkerLayer.referenceSize);
            var O = 0,
                W = 0;
            var C = this._cimMarkerLayer.anchorPoint;
            C && (this._cimMarkerLayer.isAbsoluteAnchorPoint ? this._size && (O = -C.x / (this._size * g), W = C.y / this._size) : (O = C.x, W = C.y)), this._sizeOutlineWidth = Object(_number_js__WEBPACK_IMPORTED_MODULE_7__["i8888to32"])(Math.round(Math.min(Math.sqrt(128 * x), 255)), Math.round(Math.min(Math.sqrt(128 * L), 255)), Math.round(Math.min(Math.sqrt(128 * z), 255)), Math.round(Math.min(Math.sqrt(128 * b), 255))), this.angle = k;
            var X = Math.round(Math.min(64 * _u8, 255));
            this._bitestAndDistRatio = Object(_number_js__WEBPACK_IMPORTED_MODULE_7__["i8888to32"])(0, 0, this._bitSet, X);
            var F = p.rect.x + _definitions_js__WEBPACK_IMPORTED_MODULE_4__["SPRITE_PADDING"],
                K = p.rect.y + _definitions_js__WEBPACK_IMPORTED_MODULE_4__["SPRITE_PADDING"],
                B = F + p.width,
                R = K + p.height;
            this._texUpperLeft = Object(_number_js__WEBPACK_IMPORTED_MODULE_7__["i1616to32"])(F, K), this._texUpperRight = Object(_number_js__WEBPACK_IMPORTED_MODULE_7__["i1616to32"])(B, K), this._texBottomLeft = Object(_number_js__WEBPACK_IMPORTED_MODULE_7__["i1616to32"])(F, R), this._texBottomRight = Object(_number_js__WEBPACK_IMPORTED_MODULE_7__["i1616to32"])(B, R);

            var S = _materialKey_MaterialKey_js__WEBPACK_IMPORTED_MODULE_8__["MarkerMaterialKey"].load(this._materialKey);

            S.sdf = p.sdf, S.pattern = !0, S.textureBinding = p.textureBinding, this._materialKey = S.data, this._anchorX = .5 - (.5 + O) * p.width / p.width, this._anchorY = .5 - (.5 + W) * p.height / p.height, x *= _u8, L *= _u8, x *= this._scaleFactor, L *= this._scaleFactor, x *= p.rect.width / p.width, L *= p.rect.height / p.height, this._computedWidth = x, this._computedHeight = L, this._applyTransformation(d, y), this.xOffset = P, this.yOffset = j;
          }
        }], [{
          key: "fromCIMMarker",
          value: function fromCIMMarker(t) {
            return new u(t);
          }
        }]);

        return u;
      }(Object(_WGLBaseMarkerTemplate_js__WEBPACK_IMPORTED_MODULE_12__["default"])(_WGLDynamicMeshTemplate_js__WEBPACK_IMPORTED_MODULE_13__["default"]));
      /* harmony default export */


      __webpack_exports__["default"] = u;
      /***/
    }
  }]);
})();
//# sourceMappingURL=default~layers-GeoRSSLayerView2D-js~layers-GraphicsLayerView2D-js~layers-ImageryLayerView2D-js~layer~c4613f14-es5.js.map