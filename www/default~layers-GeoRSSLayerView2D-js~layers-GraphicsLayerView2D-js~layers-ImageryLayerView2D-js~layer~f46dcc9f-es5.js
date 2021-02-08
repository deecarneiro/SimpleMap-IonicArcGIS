(function () {
  function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }

  function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

  function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && Symbol.iterator in Object(iter)) return Array.from(iter); }

  function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }

  function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

  function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

  function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

  function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

  function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

  function _createForOfIteratorHelper(o, allowArrayLike) { var it; if (typeof Symbol === "undefined" || o[Symbol.iterator] == null) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function (_e62) { function e(_x5) { return _e62.apply(this, arguments); } e.toString = function () { return _e62.toString(); }; return e; }(function (e) { throw e; }), f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = o[Symbol.iterator](); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function (_e63) { function e(_x6) { return _e63.apply(this, arguments); } e.toString = function () { return _e63.toString(); }; return e; }(function (e) { didErr = true; err = e; }), f: function f() { try { if (!normalCompletion && it["return"] != null) it["return"](); } finally { if (didErr) throw err; } } }; }

  function _get(target, property, receiver) { if (typeof Reflect !== "undefined" && Reflect.get) { _get = Reflect.get; } else { _get = function _get(target, property, receiver) { var base = _superPropBase(target, property); if (!base) return; var desc = Object.getOwnPropertyDescriptor(base, property); if (desc.get) { return desc.get.call(receiver); } return desc.value; }; } return _get(target, property, receiver || target); }

  function _superPropBase(object, property) { while (!Object.prototype.hasOwnProperty.call(object, property)) { object = _getPrototypeOf(object); if (object === null) break; } return object; }

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

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["default~layers-GeoRSSLayerView2D-js~layers-GraphicsLayerView2D-js~layers-ImageryLayerView2D-js~layer~f46dcc9f"], {
    /***/
    "5LEI":
    /*!*******************************************************************************!*\
      !*** ./node_modules/@arcgis/core/views/2d/engine/webgl/TiledDisplayObject.js ***!
      \*******************************************************************************/

    /*! exports provided: TiledDisplayObject */

    /***/
    function LEI(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "TiledDisplayObject", function () {
        return r;
      });
      /* harmony import */


      var _core_has_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ../../../../core/has.js */
      "wSAH");
      /* harmony import */


      var _chunks_mat3_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ../../../../chunks/mat3.js */
      "HJJS");
      /* harmony import */


      var _tiling_TileKey_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ../../tiling/TileKey.js */
      "rlSK");
      /* harmony import */


      var _chunks_mat3f32_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ../../../../chunks/mat3f32.js */
      "jHF5");
      /* harmony import */


      var _DisplayObject_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ../DisplayObject.js */
      "fEsP");
      /*
      All material copyright ESRI, All Rights Reserved, unless otherwise specified.
      See https://js.arcgis.com/4.18/esri/copyright.txt for details.
      */


      var r = /*#__PURE__*/function (_DisplayObject_js__WE) {
        _inherits(r, _DisplayObject_js__WE);

        var _super = _createSuper(r);

        function r(s, t, e) {
          var _this;

          var _r = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : e;

          _classCallCheck(this, r);

          _this = _super.call(this), _this.triangleCountReportedInDebug = 0, _this.transforms = {
            dvs: Object(_chunks_mat3f32_js__WEBPACK_IMPORTED_MODULE_3__["c"])(),
            tileMat3: Object(_chunks_mat3f32_js__WEBPACK_IMPORTED_MODULE_3__["c"])()
          }, _this.triangleCount = 0, _this.key = new _tiling_TileKey_js__WEBPACK_IMPORTED_MODULE_2__["default"](s), _this.bounds = t, _this.size = e, _this.coordRange = _r;
          return _this;
        }

        _createClass(r, [{
          key: "destroy",
          value: function destroy() {
            this.texture && (this.texture.dispose(), this.texture = null);
          }
        }, {
          key: "coords",
          get: function get() {
            return this._coords;
          }
        }, {
          key: "bounds",
          get: function get() {
            return this._bounds;
          },
          set: function set(s) {
            this._coords = [s[0], s[3]], this._bounds = s;
          }
        }, {
          key: "setTransform",
          value: function setTransform(o, i) {
            var e = i / (o.resolution * o.pixelRatio),
                _r2 = this.transforms.tileMat3,
                _o$toScreenNoRotation = o.toScreenNoRotation([0, 0], this.coords),
                _o$toScreenNoRotation2 = _slicedToArray(_o$toScreenNoRotation, 2),
                n = _o$toScreenNoRotation2[0],
                h = _o$toScreenNoRotation2[1],
                a = this.size[0] / this.coordRange[0] * e,
                d = this.size[1] / this.coordRange[1] * e;

            Object(_chunks_mat3_js__WEBPACK_IMPORTED_MODULE_1__["s"])(_r2, a, 0, 0, 0, d, 0, n, h, 1), Object(_chunks_mat3_js__WEBPACK_IMPORTED_MODULE_1__["m"])(this.transforms.dvs, o.displayViewMat3, _r2);
          }
        }]);

        return r;
      }(_DisplayObject_js__WEBPACK_IMPORTED_MODULE_4__["DisplayObject"]);
      /***/

    },

    /***/
    "F8bX":
    /*!***********************************************************************!*\
      !*** ./node_modules/@arcgis/core/views/2d/engine/webgl/WGLBuffers.js ***!
      \***********************************************************************/

    /*! exports provided: default */

    /***/
    function F8bX(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony import */


      var _core_has_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ../../../../core/has.js */
      "wSAH");
      /* harmony import */


      var _core_mathUtils_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ../../../../core/mathUtils.js */
      "OKTS");
      /* harmony import */


      var _chunks_builtins_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ../../../../chunks/builtins.js */
      "n4uK");
      /* harmony import */


      var _webgl_BufferObject_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ../../../webgl/BufferObject.js */
      "fOQB");
      /* harmony import */


      var _webgl_FramebufferObject_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ../../../webgl/FramebufferObject.js */
      "0meK");
      /* harmony import */


      var _webgl_RenderingContext_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ../../../webgl/RenderingContext.js */
      "bfJE");
      /* harmony import */


      var _Utils_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ./Utils.js */
      "yN2G");
      /*
      All material copyright ESRI, All Rights Reserved, unless otherwise specified.
      See https://js.arcgis.com/4.18/esri/copyright.txt for details.
      */

      /* harmony default export */


      __webpack_exports__["default"] = /*#__PURE__*/function () {
        function _class(s) {
          _classCallCheck(this, _class);

          this.geometryMap = Object(_Utils_js__WEBPACK_IMPORTED_MODULE_6__["createGeometryData"])(function () {
            return {
              indexBuffer: _webgl_BufferObject_js__WEBPACK_IMPORTED_MODULE_3__["default"].createIndex(s, 35044),
              vao: null
            };
          }, function (t, f) {
            return {
              vertexBuffer: _webgl_BufferObject_js__WEBPACK_IMPORTED_MODULE_3__["default"].createVertex(s, _Utils_js__WEBPACK_IMPORTED_MODULE_6__["C_VBO_INFO"][f])
            };
          });
        }

        _createClass(_class, [{
          key: "dispose",
          value: function dispose() {
            for (var _e2 = 0; _e2 < 5; _e2++) {
              var t = this.geometryMap[_e2];

              if (t) {
                t.data.vao && t.data.vao.dispose(!1), t.data.indexBuffer && t.data.indexBuffer.dispose();

                for (var _e3 in t.buffers) {
                  t.buffers[_e3] && t.buffers[_e3].data.vertexBuffer.dispose();
                }
              }
            }
          }
        }, {
          key: "get",
          value: function get(e) {
            var t = this.geometryMap[e],
                r = {};

            for (var _e4 in t.buffers) {
              r[_e4] = t.buffers[_e4].data.vertexBuffer;
            }

            return {
              indexBuffer: t.data.indexBuffer,

              get vao() {
                return t.data.vao;
              },

              set vao(e) {
                t.data.vao = e;
              },

              vertexBufferMap: r
            };
          }
        }, {
          key: "has",
          value: function has(e) {
            return null != this.geometryMap[e];
          }
        }, {
          key: "upload",
          value: function upload(e, t) {
            var _this2 = this;

            t.forEach(function (t, r) {
              _this2._upload(t, r, e);
            });
          }
        }, {
          key: "_upload",
          value: function _upload(e, t, r) {
            if (e.indices && (e.indices.allDirty ? this._uploadIndices(r, t) : null != e.indices.from && null != e.indices.count && this._uploadIndices(r, t, e.indices.from, e.indices.count)), e.vertices) {
              var s = e.vertices;

              for (var _e5 in s) {
                var f = s[_e5];
                f.allDirty ? this._uploadVertices(r, t, _e5) : null != f.from && null != f.count && this._uploadVertices(r, t, _e5, f.from, f.count);
              }
            }
          }
        }, {
          key: "_uploadVertices",
          value: function _uploadVertices(e, t, r, s, f) {
            var a = this.geometryMap[t];
            if (!a) return;
            var i = e.geometries[t].vertexBuffer[r];
            if (!i) return;
            var o = i.stride,
                u = i.data.buffer;
            a.buffers[r] && u.byteLength > 0 && (null != s && null != f ? a.buffers[r].data.vertexBuffer.setSubData(u, s * o, s * o, (s + f) * o) : a.buffers[r].data.vertexBuffer.setData(u));
          }
        }, {
          key: "_uploadIndices",
          value: function _uploadIndices(e, t, r, s) {
            var f = this.geometryMap[t];
            if (!f) return;
            var a = e.geometries[t].indexBuffer.buffer;
            f.data.indexBuffer && a.byteLength > 0 && (null != r && null != s ? f.data.indexBuffer.setSubData(a, 4 * r, 4 * r, 4 * (r + s)) : f.data.indexBuffer.setData(a));
          }
        }]);

        return _class;
      }();
      /***/

    },

    /***/
    "FA+c":
    /*!*******************************************************************************!*\
      !*** ./node_modules/@arcgis/core/views/2d/engine/webgl/MemoryRequirements.js ***!
      \*******************************************************************************/

    /*! exports provided: default */

    /***/
    function FAC(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /*
      All material copyright ESRI, All Rights Reserved, unless otherwise specified.
      See https://js.arcgis.com/4.18/esri/copyright.txt for details.
      */

      /* harmony default export */


      __webpack_exports__["default"] = /*#__PURE__*/function () {
        function _class2() {
          _classCallCheck(this, _class2);

          this._byGeometryType = null;
        }

        _createClass(_class2, [{
          key: "satisfied",
          get: function get() {
            return !this._byGeometryType;
          }
        }, {
          key: "reset",
          value: function reset() {
            this._byGeometryType = null;
          }
        }, {
          key: "verticesFor",
          value: function verticesFor(e) {
            return this._byGeometryType ? this._byGeometryType[e].vertices : 0;
          }
        }, {
          key: "indicesFor",
          value: function indicesFor(e) {
            return this._byGeometryType ? this._byGeometryType[e].indices : 0;
          }
        }, {
          key: "needMore",
          value: function needMore(e, t, i) {
            if (!t && !i) return;
            this._byGeometryType || (this._byGeometryType = [{
              vertices: 0,
              indices: 0
            }, {
              vertices: 0,
              indices: 0
            }, {
              vertices: 0,
              indices: 0
            }, {
              vertices: 0,
              indices: 0
            }, {
              vertices: 0,
              indices: 0
            }]);
            var r = this._byGeometryType[e];
            r.vertices += t, r.indices += i;
          }
        }]);

        return _class2;
      }();
      /***/

    },

    /***/
    "KFVX":
    /*!********************************************************************!*\
      !*** ./node_modules/@arcgis/core/views/2d/engine/webgl/WGLTile.js ***!
      \********************************************************************/

    /*! exports provided: WGLTile */

    /***/
    function KFVX(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "WGLTile", function () {
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


      var _core_CircularArray_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ../../../../core/CircularArray.js */
      "lx5q");
      /* harmony import */


      var _chunks_vec2_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ../../../../chunks/vec2.js */
      "M0lq");
      /* harmony import */


      var _definitions_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ./definitions.js */
      "jIHu");
      /* harmony import */


      var _chunks_mat2d_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ../../../../chunks/mat2d.js */
      "opr1");
      /* harmony import */


      var _chunks_mat2df32_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ../../../../chunks/mat2df32.js */
      "LGNZ");
      /* harmony import */


      var _chunks_vec2f32_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! ../../../../chunks/vec2f32.js */
      "c46T");
      /* harmony import */


      var _TiledDisplayObject_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! ./TiledDisplayObject.js */
      "5LEI");
      /* harmony import */


      var _enums_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! ./enums.js */
      "yE7X");
      /* harmony import */


      var _DirtyMap_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
      /*! ./DirtyMap.js */
      "T6vb");
      /* harmony import */


      var _DisplayRecordStore_js__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
      /*! ./DisplayRecordStore.js */
      "MQs+");
      /* harmony import */


      var _Fader_js__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
      /*! ./Fader.js */
      "ZdL5");
      /* harmony import */


      var _WGLBuffers_js__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
      /*! ./WGLBuffers.js */
      "F8bX");
      /*
      All material copyright ESRI, All Rights Reserved, unless otherwise specified.
      See https://js.arcgis.com/4.18/esri/copyright.txt for details.
      */


      var _ = new Set();

      var m = /*#__PURE__*/function (_TiledDisplayObject_j) {
        _inherits(m, _TiledDisplayObject_j);

        var _super2 = _createSuper(m);

        function m(t, s) {
          var _this3;

          var a = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : !1;

          _classCallCheck(this, m);

          _this3 = _super2.call(this, t, s, [_definitions_js__WEBPACK_IMPORTED_MODULE_4__["TILE_SIZE"], _definitions_js__WEBPACK_IMPORTED_MODULE_4__["TILE_SIZE"]]), _this3._data = null, _this3._displayList = null, _this3._wglBuffers = null, _this3._deferPatches = !1, _this3._dirtyMap = new _DirtyMap_js__WEBPACK_IMPORTED_MODULE_10__["default"](), _this3._labelIndex = null, _this3._lastCommitTime = 0, _this3._patchQueue = new _core_CircularArray_js__WEBPACK_IMPORTED_MODULE_2__["default"](100), _this3.fader = new _Fader_js__WEBPACK_IMPORTED_MODULE_12__["default"](), _this3._dirty = !0, _this3._replaceBuffers = !1, _this3._uploadsLocked = !1, _this3._hasData = !1, _this3._invalidated = !1, _this3.transforms.labelMat2d = Object(_chunks_mat2df32_js__WEBPACK_IMPORTED_MODULE_6__["c"])(), _this3._ensureCorrectZOrder = a, _this3._deferPatches = !a;
          return _this3;
        }

        _createClass(m, [{
          key: "destroy",
          value: function destroy() {
            _get(_getPrototypeOf(m.prototype), "destroy", this).call(this), this.clear();
          }
        }, {
          key: "displayObjects",
          get: function get() {
            var t;
            return null != (t = this._displayObjects) ? t : [];
          }
        }, {
          key: "isDirty",
          get: function get() {
            return this._dirty;
          },
          set: function set(t) {
            this._dirty = t, this.requestRender();
          }
        }, {
          key: "hasData",
          get: function get() {
            return !!this._hasData;
          }
        }, {
          key: "labelIndex",
          get: function get() {
            return this._labelIndex;
          }
        }, {
          key: "getGeometry",
          value: function getGeometry(t) {
            return this._wglBuffers && this._wglBuffers.has(t) ? this._wglBuffers.get(t) : null;
          }
        }, {
          key: "getDisplayList",
          value: function getDisplayList() {
            return this._displayList;
          }
        }, {
          key: "setTransform",
          value: function setTransform(t, e) {
            _get(_getPrototypeOf(m.prototype), "setTransform", this).call(this, t, e);

            var i = this.transforms.labelMat2d,
                a = t.getScreenTransform(i, e),
                h = Object(_chunks_vec2f32_js__WEBPACK_IMPORTED_MODULE_7__["c"])();
            Object(_chunks_vec2_js__WEBPACK_IMPORTED_MODULE_3__["t"])(h, this.coords, a), Object(_chunks_mat2d_js__WEBPACK_IMPORTED_MODULE_5__["i"])(i), Object(_chunks_mat2d_js__WEBPACK_IMPORTED_MODULE_5__["t"])(i, i, h), Object(_chunks_mat2d_js__WEBPACK_IMPORTED_MODULE_5__["m"])(i, t.viewMat2d, i);
          }
        }, {
          key: "setData",
          value: function setData(t) {
            var e = t.addOrUpdate,
                s = t.remove;
            t.clear && (this.clear(), this._patchQueue.clear(), this._hasData = !1), "replace" === t.type && (this._replaceBuffers = !0, this._patchQueue.clear(), this._data = null), !this._data && e && e.tileDisplayData.displayObjects.length ? (e.tileDisplayData.computeDisplayList(this._ensureCorrectZOrder), this._dirtyMap = new _DirtyMap_js__WEBPACK_IMPORTED_MODULE_10__["default"](), this._dispRecStore = _DisplayRecordStore_js__WEBPACK_IMPORTED_MODULE_11__["default"].fromTileData(e, this._dirtyMap), this._data = e, this._dirtyMap.markAllDirty(), this._hasData = !0, t.end && this.ready()) : this._data && (e && e.tileDisplayData.displayObjects.length || s.length) ? this._deferPatches ? this._patchQueue.enqueue(t) : this._doPatchData(t) : t.end && this.ready(), t.end && !this._data && this.clear(), this.requestRender(), this.emit("change");
          }
        }, {
          key: "lockUploads",
          value: function lockUploads() {
            this._uploadsLocked = !0;
          }
        }, {
          key: "unlockUploads",
          value: function unlockUploads() {
            this._uploadsLocked = !1, this.requestRender();
          }
        }, {
          key: "commitChanges",
          value: function commitChanges(e) {
            if (!e.time || e.time !== this._lastCommitTime) {
              if (this._lastCommitTime = e.time, this.fader.step() || this.requestRender(), this._patchQueue.size) {
                var _e6 = this._patchQueue.dequeue();

                Object(_core_maybe_js__WEBPACK_IMPORTED_MODULE_1__["isSome"])(_e6) && (_e6.end && this.ready(), this._doPatchData(_e6), this.requestRender(), this._hasData = !0);
              }

              if (this._uploadsLocked) this.requestRender();else if (this.visible && this._data) {
                if (this._replaceBuffers) for (this._wglBuffers && this._wglBuffers.dispose(), this._wglBuffers = null, this._replaceBuffers = !1; this._patchQueue.size;) {
                  var _e7 = this._patchQueue.dequeue();

                  Object(_core_maybe_js__WEBPACK_IMPORTED_MODULE_1__["isSome"])(_e7) && (_e7.end && this.ready(), this._doPatchData(_e7), this._hasData = !0);
                }
                this._wglBuffers || (this._wglBuffers = new _WGLBuffers_js__WEBPACK_IMPORTED_MODULE_13__["default"](e.context)), (this._dirtyMap.hasDirty() || this._invalidated) && (this._invalidated = !1, this._wglBuffers.upload(this._data.tileBufferData, this._dirtyMap), this._displayList = this._data.tileDisplayData.displayList.clone(), this._displayObjects = this._data.tileDisplayData.displayObjects.slice(), this._rebuildLabelIndex(), this._dirtyMap.markAllClean());
              }
            }
          }
        }, {
          key: "clear",
          value: function clear() {
            this._data = null, this._displayList = null, this._dispRecStore = null, this._wglBuffers && (this._wglBuffers.dispose(), this._wglBuffers = null);
          }
        }, {
          key: "_doPatchData",
          value: function _doPatchData(t) {
            try {
              if ("new" === t.type) {
                if (!t.addOrUpdate) return;
                this._invalidated = !0;

                var _e8 = this._bulkAddFeatures(t);

                _e8 && (this._dirtyMap.markAllDirty(), this._data.reshuffleBulkAdd(t, _e8.objectIndex, _e8.recordIndex), this._dispRecStore = _DisplayRecordStore_js__WEBPACK_IMPORTED_MODULE_11__["default"].fromTileData(this._data, this._dirtyMap));
              } else this._invalidated = !0, this._patchData(t) || (this._dirtyMap.markAllDirty(), this._data.reshuffle(), this._dispRecStore = _DisplayRecordStore_js__WEBPACK_IMPORTED_MODULE_11__["default"].fromTileData(this._data, this._dirtyMap));
            } catch (t) {}

            this.requestRender();
          }
        }, {
          key: "_rebuildLabelIndex",
          value: function _rebuildLabelIndex() {
            var t, e;

            if (!(null == (t = this._data) || null == (e = t.tileBufferData.geometries[_enums_js__WEBPACK_IMPORTED_MODULE_9__["WGLGeometryType"].LABEL]) || !e.indexBuffer.length)) {
              this.isDirty = !0, this._labelIndex = this._initLabelIndex();

              var _iterator = _createForOfIteratorHelper(this.displayObjects),
                  _step;

              try {
                for (_iterator.s(); !(_step = _iterator.n()).done;) {
                  var _t = _step.value;

                  var _iterator2 = _createForOfIteratorHelper(_t.metrics),
                      _step2;

                  try {
                    for (_iterator2.s(); !(_step2 = _iterator2.n()).done;) {
                      var _e9 = _step2.value;

                      this._insertIntoLabelIndex(_e9);
                    }
                  } catch (err) {
                    _iterator2.e(err);
                  } finally {
                    _iterator2.f();
                  }
                }
              } catch (err) {
                _iterator.e(err);
              } finally {
                _iterator.f();
              }
            }
          }
        }, {
          key: "_insertIntoLabelIndex",
          value: function _insertIntoLabelIndex(t) {
            if (t.xBucket < 0 || t.yBucket < 0 || t.yBucket > 3 || t.xBucket > 3) return;
            this.labelIndex[t.yBucket][t.xBucket].push(t);
          }
        }, {
          key: "_initLabelIndex",
          value: function _initLabelIndex() {
            var t = [];

            for (var _e10 = 0; _e10 < _definitions_js__WEBPACK_IMPORTED_MODULE_4__["TILE_SIZE"] / _definitions_js__WEBPACK_IMPORTED_MODULE_4__["COLLISION_BUCKET_SIZE"]; _e10++) {
              t.push([]);

              for (var s = 0; s < _definitions_js__WEBPACK_IMPORTED_MODULE_4__["TILE_SIZE"] / _definitions_js__WEBPACK_IMPORTED_MODULE_4__["COLLISION_BUCKET_SIZE"]; s++) {
                t[_e10].push([]);
              }
            }

            return t;
          }
        }, {
          key: "_bulkAddFeatures",
          value: function _bulkAddFeatures(t) {
            var e = t.addOrUpdate.tileDisplayData.displayObjects,
                s = this._data.tileDisplayData.displayObjects,
                i = this._data.tileDisplayData.displayObjectRegistry;

            for (var a = 0; a < e.length; a++) {
              var r = e[a],
                  l = i.get(r.id);

              for (var _e11 = 0; _e11 < r.displayRecords.length; ++_e11) {
                var _s2 = r.displayRecords[_e11];

                if (l) {
                  if (_s2.geometryType !== _enums_js__WEBPACK_IMPORTED_MODULE_9__["WGLGeometryType"].FILL && _s2.geometryType !== _enums_js__WEBPACK_IMPORTED_MODULE_9__["WGLGeometryType"].LINE) continue;
                  l.displayRecords.push(_s2);
                }

                var _i2 = t.addOrUpdate.tileBufferData.geometries[_s2.geometryType];
                if (!this._dispRecStore.tryAddMeshData(_s2, _i2)) return {
                  objectIndex: a,
                  recordIndex: _e11
                };
              }

              l || (i.set(r.id, r), s.push(r));
            }

            return null;
          }
        }, {
          key: "_patchData",
          value: function _patchData(t) {
            var e = !0;
            var s = t.addOrUpdate && t.addOrUpdate.tileDisplayData && t.addOrUpdate.tileDisplayData.displayObjects || [],
                i = (t.remove || []).slice();

            var _iterator3 = _createForOfIteratorHelper(s),
                _step3;

            try {
              for (_iterator3.s(); !(_step3 = _iterator3.n()).done;) {
                var _t2 = _step3.value;
                null != _t2.insertAfter && i.push(_t2.id);
              }
            } catch (err) {
              _iterator3.e(err);
            } finally {
              _iterator3.f();
            }

            var _iterator4 = _createForOfIteratorHelper(i),
                _step4;

            try {
              for (_iterator4.s(); !(_step4 = _iterator4.n()).done;) {
                var _t3 = _step4.value;

                var _e12 = this._data.tileDisplayData.displayObjectRegistry.get(_t3);

                if (_e12) {
                  this._data.tileDisplayData.displayList.removeFromList(_e12.displayRecords);

                  var _iterator6 = _createForOfIteratorHelper(_e12.displayRecords),
                      _step6;

                  try {
                    for (_iterator6.s(); !(_step6 = _iterator6.n()).done;) {
                      var _t4 = _step6.value;

                      this._dispRecStore["delete"](_t4);
                    }
                  } catch (err) {
                    _iterator6.e(err);
                  } finally {
                    _iterator6.f();
                  }

                  this._data.tileDisplayData.displayObjectRegistry["delete"](_t3);

                  var _s3 = this._data.tileDisplayData.displayObjects.indexOf(_e12);

                  this._data.tileDisplayData.displayObjects.splice(_s3, 1);
                }
              }
            } catch (err) {
              _iterator4.e(err);
            } finally {
              _iterator4.f();
            }

            var _iterator5 = _createForOfIteratorHelper(s),
                _step5;

            try {
              for (_iterator5.s(); !(_step5 = _iterator5.n()).done;) {
                var _i3 = _step5.value;

                var _s4 = void 0,
                    a = this._data.tileDisplayData.displayObjectRegistry.get(_i3.id);

                if (a) {
                  var _t5 = a.displayRecords;
                  a.set(_i3), a.displayRecords = _t5;
                  var _e13 = a.displayRecords.length;

                  for (var _t6 = 0; _t6 < _e13; ++_t6) {
                    var _e14 = a.displayRecords[_t6],
                        _s5 = _i3.displayRecords[_t6];
                    (_t6 >= _i3.displayRecords.length || _e14.geometryType !== _s5.geometryType || _e14.symbolLevel !== _s5.symbolLevel || _e14.zOrder !== _s5.zOrder || _e14.materialKey !== _s5.materialKey) && (this._dispRecStore["delete"](a.displayRecords[_t6]), _t6 < _i3.displayRecords.length && (a.displayRecords[_t6] = void 0));
                  }

                  a.displayRecords.length = _i3.displayRecords.length, a.metrics = _i3.metrics;
                } else {
                  var _t7 = void 0;

                  a = _i3.copy(), a.displayRecords = [], this._data.tileDisplayData.displayObjectRegistry.set(_i3.id, a);
                  var _e15 = this._data.tileDisplayData.displayObjects;
                  if (null != a.insertAfter) {
                    if (_s4 = {}, a.insertAfter >= 0) {
                      var _s6 = this._data.tileDisplayData.displayObjectRegistry.get(a.insertAfter);

                      _s6 ? (_t7 = _e15.indexOf(_s6) + 1, _t7 < _e15.length ? _e15.splice(_t7, 0, a) : (_e15.push(a), _t7 = _e15.length)) : (_e15.push(a), _t7 = _e15.length);
                    } else _e15.unshift(a), _t7 = 0;
                  } else _e15.push(a), _t7 = _e15.length;

                  if (_s4) {
                    var _a = void 0;

                    if (this._data.tileDisplayData.displayList.unified) _a = _i3.displayRecords.length > 0 ? 1 : 0;else {
                      _.clear();

                      var _iterator7 = _createForOfIteratorHelper(_i3.displayRecords),
                          _step7;

                      try {
                        for (_iterator7.s(); !(_step7 = _iterator7.n()).done;) {
                          var _t8 = _step7.value;

                          var _e16 = this._data.tileDisplayData.displayList.getDPInfoType(_t8.geometryType);

                          _.add(_e16);
                        }
                      } catch (err) {
                        _iterator7.e(err);
                      } finally {
                        _iterator7.f();
                      }

                      _a = _.size;
                    }
                    var _r3 = 0;

                    for (var _i4 = _t7 - 1; _i4 >= 0 && _r3 < _a; --_i4) {
                      for (var _t9 = _e15[_i4].displayRecords.length - 1; _t9 >= 0 && _r3 < _a; --_t9) {
                        var _a2 = _e15[_i4].displayRecords[_t9],
                            l = this._data.tileDisplayData.displayList.getDPInfoType(_a2.geometryType);

                        _s4[l] || (_s4[l] = _a2, ++_r3);
                      }
                    }
                  }
                }

                var r = _i3.displayRecords.length;

                for (var _l = 0; _l < r; ++_l) {
                  var _r4 = _i3.displayRecords[_l];
                  var d = a.displayRecords[_l];
                  d ? (d.meshData = _r4.meshData, d.materialKey = _r4.materialKey) : (d = _r4.copy(), d.vertexFrom = void 0, d.indexFrom = void 0, a.displayRecords[_l] = d);

                  var h = _r4.geometryType,
                      o = this._data.tileDisplayData.displayList.getDPInfoType(h),
                      p = t.addOrUpdate.tileBufferData.geometries[h],
                      c = p.vertexBuffer,
                      n = p.indexBuffer;

                  var y = void 0;
                  _s4 && (y = _s4[o] ? this._data.tileDisplayData.displayList.splitAfter(_s4[o]) : -1), e = this._dispRecStore.setMeshData(d, _r4, c, n, y) && e, _s4 && null != d.indexFrom && null != d.indexFrom && (_s4[o] = d);
                }
              }
            } catch (err) {
              _iterator5.e(err);
            } finally {
              _iterator5.f();
            }

            return e;
          }
        }]);

        return m;
      }(_TiledDisplayObject_js__WEBPACK_IMPORTED_MODULE_8__["TiledDisplayObject"]);
      /***/

    },

    /***/
    "MQs+":
    /*!*******************************************************************************!*\
      !*** ./node_modules/@arcgis/core/views/2d/engine/webgl/DisplayRecordStore.js ***!
      \*******************************************************************************/

    /*! exports provided: default */

    /***/
    function MQs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony import */


      var _core_has_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ../../../../core/has.js */
      "wSAH");
      /* harmony import */


      var _Utils_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./Utils.js */
      "yN2G");
      /* harmony import */


      var _FreeList_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./FreeList.js */
      "S4Ec");
      /*
      All material copyright ESRI, All Rights Reserved, unless otherwise specified.
      See https://js.arcgis.com/4.18/esri/copyright.txt for details.
      */


      var s = ["FILL", "LINE", "MARKER", "TEXT", "LABEL"];

      var o = /*#__PURE__*/function () {
        function o(t, r, s, _o) {
          _classCallCheck(this, o);

          this._strides = t, this._displayList = r, this._freeListsAndStorage = {}, this._dirtyMap = null, this._dirtyMap = s;

          for (var _r5 in t) {
            this._freeListsAndStorage[_r5] = {
              vtxFreeList: _o ? new _FreeList_js__WEBPACK_IMPORTED_MODULE_2__["FreeList"](_o) : null,
              idxFreeList: _o ? new _FreeList_js__WEBPACK_IMPORTED_MODULE_2__["FreeList"](_o) : null,
              vertexBuffers: {},
              indexBuffer: _o ? new Uint32Array(_o) : null
            };

            for (var i in t[_r5]) {
              this._freeListsAndStorage[_r5].vertexBuffers[i] = {
                data: _o ? Object(_Utils_js__WEBPACK_IMPORTED_MODULE_1__["allocateTypedArrayBuffer"])(_o, t[_r5][i]) : null,
                stride: t[_r5][i]
              };
            }
          }
        }

        _createClass(o, [{
          key: "delete",
          value: function _delete(e) {
            var t = s[e.geometryType];
            this._freeVertices(t, e.vertexFrom, e.vertexCount), this._freeIndices(t, e.indexFrom, e.indexCount), this._displayList.removeFromList(e), e.vertexFrom = void 0, e.indexFrom = void 0;
          }
        }, {
          key: "setMeshData",
          value: function setMeshData(e, t, i, _o4, n) {
            var d = s[e.geometryType];
            var a, x;
            e.meshData = null, void 0 === e.vertexFrom ? (x = t.vertexCount, a = this._allocateVertices(d, x)) : t.vertexCount > e.vertexCount ? (this._freeVertices(d, e.vertexFrom, e.vertexCount), x = t.vertexCount, a = this._allocateVertices(d, x)) : t.vertexCount === e.vertexCount ? (a = e.vertexFrom, x = e.vertexCount) : (this._freeVertices(d, e.vertexFrom + t.vertexCount, e.vertexCount - t.vertexCount), a = e.vertexFrom, x = t.vertexCount);
            var u,
                f,
                l,
                c = !0;

            if (void 0 === e.indexFrom ? (u = n, l = t.indexCount, f = this._allocateIndices(d, l)) : t.indexCount > e.indexCount ? (u = this._displayList.removeFromList(e), this._freeIndices(d, e.indexFrom, e.indexCount), l = t.indexCount, f = this._allocateIndices(d, l)) : t.indexCount === e.indexCount ? (c = !1, f = e.indexFrom, l = e.indexCount) : (u = this._displayList.removeFromList(e), this._freeIndices(d, e.indexFrom + t.indexCount, e.indexCount - t.indexCount), f = e.indexFrom, l = t.indexCount), -1 !== a && -1 !== f) {
              var _s7 = this._storageFor(d);

              if (Object(_Utils_js__WEBPACK_IMPORTED_MODULE_1__["copyMeshData"])(a, f, _s7.vertexBuffers, _s7.indexBuffer, t, i, _o4), e.vertexFrom = a, e.indexFrom = f, e.vertexCount = t.vertexCount, e.indexCount = t.indexCount, this._dirtyMap) {
                this._dirtyMap.markDirtyIndices(e.geometryType, e.indexFrom, e.indexCount);

                for (var _t10 in i) {
                  this._dirtyMap.markDirtyVertices(e.geometryType, _t10, e.vertexFrom, e.vertexCount);
                }
              }

              return c && this._displayList.addToList(e, u), !0;
            }

            return -1 !== a && this._freeVertices(d, a, x), -1 !== f && this._freeIndices(d, f, l), e.setMeshDataFromBuffers(t, i, _o4), e.vertexFrom = void 0, e.vertexCount = 0, e.indexFrom = void 0, e.indexCount = 0, !1;
          }
        }, {
          key: "tryAddMeshData",
          value: function tryAddMeshData(e, t) {
            var i = t.vertexBuffer,
                _o5 = t.indexBuffer,
                n = s[e.geometryType],
                d = this._allocateVertices(n, e.vertexCount);

            if (-1 === d) return this._freeVertices(n, d, e.vertexCount), !1;

            var a = this._allocateIndices(n, e.indexCount);

            if (-1 === a) return this._freeVertices(n, d, e.vertexCount), this._freeIndices(n, a, e.indexCount), !1;

            var x = this._storageFor(n);

            if (Object(_Utils_js__WEBPACK_IMPORTED_MODULE_1__["copyMeshData"])(d, a, x.vertexBuffers, x.indexBuffer, e, i, _o5), e.vertexFrom = d, e.indexFrom = a, this._dirtyMap) {
              this._dirtyMap.markDirtyIndices(e.geometryType, e.indexFrom, e.indexCount);

              for (var _t11 in i) {
                this._dirtyMap.markDirtyVertices(e.geometryType, _t11, d, e.vertexCount);
              }
            }

            return this._displayList.addToList(e), !0;
          }
        }, {
          key: "_allocateVertices",
          value: function _allocateVertices(e, t) {
            var r = this._storageFor(e),
                i = r.vtxFreeList.allocate(t);

            if (-1 === i) return -1;
            return r.vtxFreeList.fragmentation > .5 ? -1 : i;
          }
        }, {
          key: "_freeVertices",
          value: function _freeVertices(e, t, r) {
            this._storageFor(e).vtxFreeList.free(t, r);
          }
        }, {
          key: "_freeIndices",
          value: function _freeIndices(e, t, r) {
            this._storageFor(e).idxFreeList.free(t, r);
          }
        }, {
          key: "_allocateIndices",
          value: function _allocateIndices(e, t) {
            var r = this._storageFor(e),
                i = r.idxFreeList.allocate(t);

            if (-1 === i) return -1;
            return r.idxFreeList.fragmentation > .5 ? -1 : i;
          }
        }, {
          key: "_storageFor",
          value: function _storageFor(e) {
            return this._freeListsAndStorage[e];
          }
        }, {
          key: "_stridesFor",
          value: function _stridesFor(e, t) {
            return this._strides[e][t];
          }
        }], [{
          key: "fromTileData",
          value: function fromTileData(e, r) {
            var n = function (e) {
              var t = e.getStrides(),
                  r = {};

              for (var _e17 = 0; _e17 < t.length; _e17++) {
                r[s[_e17]] = t[_e17];
              }

              return r;
            }(e),
                d = [0, 0, 0, 0, 0],
                a = [0, 0, 0, 0, 0],
                x = e.tileDisplayData.displayObjects;

            var _iterator8 = _createForOfIteratorHelper(x),
                _step8;

            try {
              for (_iterator8.s(); !(_step8 = _iterator8.n()).done;) {
                var _e18 = _step8.value;

                var _iterator9 = _createForOfIteratorHelper(_e18.displayRecords),
                    _step9;

                try {
                  for (_iterator9.s(); !(_step9 = _iterator9.n()).done;) {
                    var t = _step9.value;
                    d[t.geometryType] = Math.max(d[t.geometryType], t.vertexFrom + t.vertexCount), a[t.geometryType] = Math.max(a[t.geometryType], t.indexFrom + t.indexCount);
                  }
                } catch (err) {
                  _iterator9.e(err);
                } finally {
                  _iterator9.f();
                }
              }
            } catch (err) {
              _iterator8.e(err);
            } finally {
              _iterator8.f();
            }

            var u = new o(n, e.tileDisplayData.displayList, r, null);

            for (var _r6 = 0; _r6 < e.tileBufferData.geometries.length; ++_r6) {
              var _o6 = d[_r6],
                  _n2 = a[_r6],
                  _x = e.tileBufferData.geometries[_r6],
                  f = s[_r6],
                  l = u._storageFor(f),
                  c = e.tileBufferData.geometries[_r6].indexBuffer;

              var m = void 0;
              l.indexBuffer = c, l.idxFreeList = new _FreeList_js__WEBPACK_IMPORTED_MODULE_2__["FreeList"](c.length), l.idxFreeList.allocate(_n2);

              for (var i in _x.vertexBuffer) {
                var _s8 = e.tileBufferData.geometries[_r6].vertexBuffer[i];
                l.vertexBuffers[i].data = _s8.data, l.vertexBuffers[i].stride = _s8.stride;

                var _o7 = Object(_Utils_js__WEBPACK_IMPORTED_MODULE_1__["strideToPackingFactor"])(_s8.stride),
                    _n3 = _s8.data.length * _o7 / _s8.stride;

                m || (m = _n3);
              }

              l.vtxFreeList = new _FreeList_js__WEBPACK_IMPORTED_MODULE_2__["FreeList"](m), l.vtxFreeList.allocate(_o6);
            }

            return u;
          }
        }]);

        return o;
      }();
      /* harmony default export */


      __webpack_exports__["default"] = o;
      /***/
    },

    /***/
    "S4Ec":
    /*!*********************************************************************!*\
      !*** ./node_modules/@arcgis/core/views/2d/engine/webgl/FreeList.js ***!
      \*********************************************************************/

    /*! exports provided: FreeList */

    /***/
    function S4Ec(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "FreeList", function () {
        return t;
      });
      /*
      All material copyright ESRI, All Rights Reserved, unless otherwise specified.
      See https://js.arcgis.com/4.18/esri/copyright.txt for details.
      */


      var e = /*#__PURE__*/function () {
        function e(_e19) {
          _classCallCheck(this, e);

          this._largestRange = null, this._parent = _e19, this._updateLargestRange();
        }

        _createClass(e, [{
          key: "largestRange",
          get: function get() {
            return this._largestRange;
          }
        }, {
          key: "rangeCreated",
          value: function rangeCreated(_e20) {
            (!this._largestRange || _e20.count > this._largestRange.count) && (this._largestRange = _e20);
          }
        }, {
          key: "rangeResized",
          value: function rangeResized(_e21, t) {
            _e21 === this._largestRange ? _e21.count < t && this._updateLargestRange() : (!this._largestRange || _e21.count > this._largestRange.count) && (this._largestRange = _e21);
          }
        }, {
          key: "findBestRange",
          value: function findBestRange(_e22) {
            var t = this._parent._freeHead,
                n = null;

            for (; null !== t;) {
              t.count >= _e22 && (!n || t.count - _e22 < n.count - _e22) && (n = t), t = t.next;
            }

            return n;
          }
        }, {
          key: "findAdjacentRanges",
          value: function findAdjacentRanges(_e23, t) {
            var n = !0,
                r = !1,
                s = null,
                o = this._parent._freeHead;

            for (; n && !r;) {
              var a = null !== s ? s.from + s.count : 0,
                  l = null !== o ? o.from : this._parent._size;
              _e23 >= a && _e23 + t <= l ? (n = !1, r = !0) : null !== o ? (s = o, o = o.next) : n = !1;
            }

            return [s, o];
          }
        }, {
          key: "_updateLargestRange",
          value: function _updateLargestRange() {
            var _e24 = null,
                t = this._parent._freeHead;

            for (; null !== t;) {
              (!_e24 || t.count > _e24.count) && (_e24 = t), t = t.next;
            }

            this._largestRange = _e24;
          }
        }]);

        return e;
      }();

      var t = /*#__PURE__*/function () {
        function t(_t12, n) {
          _classCallCheck(this, t);

          this._allocated = 0, this._size = _t12, this._freeHead = _t12 > 0 ? {
            from: 0,
            count: _t12,
            prev: null,
            next: null
          } : null, this._bookKeeper = n || new e(this), this._freeHead && this._bookKeeper.rangeCreated(this._freeHead);
        }

        _createClass(t, [{
          key: "allocate",
          value: function allocate(e) {
            var n = this._bookKeeper.findBestRange(e);

            if (null === n) return -1;
            var r = n.from,
                s = n.count;

            if (n.from += e, n.count -= e, this._bookKeeper.rangeResized(n, r, s), this._allocated += e, 0 === n.count) {
              var _e25 = null !== n.prev ? this._freeHead : n.next;

              t._removeRange(n), this._freeHead = _e25;
            }

            return r;
          }
        }, {
          key: "free",
          value: function free(e, n) {
            var _this$_bookKeeper$fin = this._bookKeeper.findAdjacentRanges(e, n),
                _this$_bookKeeper$fin2 = _slicedToArray(_this$_bookKeeper$fin, 2),
                r = _this$_bookKeeper$fin2[0],
                s = _this$_bookKeeper$fin2[1],
                o = {
              from: e,
              count: n,
              prev: r,
              next: s
            };

            if (null !== r && (r.next = o), null !== s && (s.prev = o), this._bookKeeper.rangeCreated(o), this._allocated -= n, null !== s && o.from + o.count === s.from) {
              var _e26 = o.from,
                  _n4 = o.count;
              t._fuse(o, s), t._removeRange(s), this._bookKeeper.rangeResized(o, _e26, _n4), this._bookKeeper.rangeResized(s, void 0, 0);
            }

            if (null !== r && r.from + r.count === o.from) {
              var _e27 = r.from,
                  _n5 = r.count;
              t._fuse(r, o), t._removeRange(o), this._bookKeeper.rangeResized(r, _e27, _n5), this._bookKeeper.rangeResized(o, void 0, 0);
            }

            this._freeHead = null !== o.prev ? this._freeHead : o;
          }
        }, {
          key: "fragmentation",
          get: function get() {
            var e = this._size - this._allocated;
            if (0 === e) return 0;
            return 1 - this._bookKeeper.largestRange.count / e;
          }
        }], [{
          key: "_removeRange",
          value: function _removeRange(e) {
            null !== e.prev ? null !== e.next ? (e.prev.next = e.next, e.next.prev = e.prev) : e.prev.next = null : null !== e.next && (e.next.prev = null);
          }
        }, {
          key: "_fuse",
          value: function _fuse(e, _t13) {
            e.count += _t13.count, e.next = _t13.next, _t13.from += _t13.count, _t13.count = 0, null !== _t13.next && (_t13.next.prev = e);
          }
        }]);

        return t;
      }();
      /***/

    },

    /***/
    "T6vb":
    /*!*********************************************************************!*\
      !*** ./node_modules/@arcgis/core/views/2d/engine/webgl/DirtyMap.js ***!
      \*********************************************************************/

    /*! exports provided: default */

    /***/
    function T6vb(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony import */


      var _Utils_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ./Utils.js */
      "yN2G");
      /*
      All material copyright ESRI, All Rights Reserved, unless otherwise specified.
      See https://js.arcgis.com/4.18/esri/copyright.txt for details.
      */


      function i(t, i, r) {
        if (!t.allDirty) if (null != t.from && null != t.count) {
          var s = Math.min(t.from, i),
              l = Math.max(t.from + t.count, i + r) - s;
          t.from = s, t.count = l;
        } else t.from = i, t.count = r;
      }
      /* harmony default export */


      __webpack_exports__["default"] = /*#__PURE__*/function () {
        function _class3() {
          _classCallCheck(this, _class3);

          this._dirties = Object(_Utils_js__WEBPACK_IMPORTED_MODULE_0__["createGeometryData"])(function () {
            return {
              indices: {
                from: null,
                count: null,
                allDirty: !1
              }
            };
          }, function () {
            return {
              vertices: {
                from: null,
                count: null,
                allDirty: !1
              }
            };
          });
        }

        _createClass(_class3, [{
          key: "hasDirty",
          value: function hasDirty() {
            var _iterator10 = _createForOfIteratorHelper(this._dirties),
                _step10;

            try {
              for (_iterator10.s(); !(_step10 = _iterator10.n()).done;) {
                var t = _step10.value;
                if (null !== t.data.indices.count || t.data.indices.allDirty) return !0;
              }
            } catch (err) {
              _iterator10.e(err);
            } finally {
              _iterator10.f();
            }

            return !1;
          }
        }, {
          key: "markAllClean",
          value: function markAllClean() {
            var _iterator11 = _createForOfIteratorHelper(this._dirties),
                _step11;

            try {
              for (_iterator11.s(); !(_step11 = _iterator11.n()).done;) {
                var t = _step11.value;
                t.data.indices.from = null, t.data.indices.count = null, t.data.indices.allDirty = !1;

                for (var _i5 in t.buffers) {
                  t.buffers[_i5].data.vertices.from = null, t.buffers[_i5].data.vertices.count = null, t.buffers[_i5].data.vertices.allDirty = !1;
                }
              }
            } catch (err) {
              _iterator11.e(err);
            } finally {
              _iterator11.f();
            }
          }
        }, {
          key: "markAllDirty",
          value: function markAllDirty() {
            var _iterator12 = _createForOfIteratorHelper(this._dirties),
                _step12;

            try {
              for (_iterator12.s(); !(_step12 = _iterator12.n()).done;) {
                var t = _step12.value;
                t.data.indices.allDirty = !0;

                for (var _i6 in t.buffers) {
                  t.buffers[_i6].data.vertices.allDirty = !0;
                }
              }
            } catch (err) {
              _iterator12.e(err);
            } finally {
              _iterator12.f();
            }
          }
        }, {
          key: "forEach",
          value: function forEach(t) {
            for (var _i7 = 0; _i7 < this._dirties.length; ++_i7) {
              var r = this._dirties[_i7],
                  s = {};

              for (var _t14 in r.buffers) {
                var _i8 = r.buffers[_t14].data.vertices;
                (_i8.allDirty || null != _i8.from && null != _i8.count && _i8.count > 0) && (s[_t14] = _i8);
              }

              var l = r.data.indices;
              var n = void 0;
              n = l.allDirty || null != l.from && null != l.count && l.count > 0 ? {
                indices: l,
                vertices: s
              } : {
                indices: null,
                vertices: s
              }, (n.indices || Object.keys(n).length > 0) && t(n, _i7);
            }
          }
        }, {
          key: "markDirtyIndices",
          value: function markDirtyIndices(t, r, s) {
            i(this._dirties[t].data.indices, r, s);
          }
        }, {
          key: "markDirtyVertices",
          value: function markDirtyVertices(t, r, s, l) {
            i(this._dirties[t].buffers[r].data.vertices, s, l);
          }
        }]);

        return _class3;
      }();
      /***/

    },

    /***/
    "Vmjh":
    /*!****************************************************************************!*\
      !*** ./node_modules/@arcgis/core/views/2d/engine/webgl/WGLRendererInfo.js ***!
      \****************************************************************************/

    /*! exports provided: WGLRendererInfo */

    /***/
    function Vmjh(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "WGLRendererInfo", function () {
        return p;
      });
      /* harmony import */


      var _core_maybe_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ../../../../core/maybe.js */
      "srIe");
      /* harmony import */


      var _Color_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ../../../../Color.js */
      "nvBr");
      /* harmony import */


      var _core_screenUtils_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ../../../../core/screenUtils.js */
      "qRWG");
      /* harmony import */


      var _core_unitUtils_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ../../../../core/unitUtils.js */
      "gEht");
      /* harmony import */


      var _renderers_support_lengthUtils_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ../../../../renderers/support/lengthUtils.js */
      "m0D6");
      /* harmony import */


      var _definitions_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ./definitions.js */
      "jIHu");
      /* harmony import */


      var _webgl_capabilities_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ../../../webgl/capabilities.js */
      "sq/B");
      /* harmony import */


      var _Utils_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! ./Utils.js */
      "yN2G");
      /*
      All material copyright ESRI, All Rights Reserved, unless otherwise specified.
      See https://js.arcgis.com/4.18/esri/copyright.txt for details.
      */


      function c(e, t) {
        var i = t.length;
        if (e < t[0].value || 1 === i) return t[0].size;

        for (var s = 1; s < i; s++) {
          if (e < t[s].value) {
            var _i9 = (e - t[s - 1].value) / (t[s].value - t[s - 1].value);

            return t[s - 1].size + _i9 * (t[s].size - t[s - 1].size);
          }
        }

        return t[i - 1].size;
      }

      function h(e, t) {
        var i = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 0;
        if (Object(_core_maybe_js__WEBPACK_IMPORTED_MODULE_0__["isNone"])(t)) return e[i + 0] = 0, e[i + 1] = 0, e[i + 2] = 0, void (e[i + 3] = 0);
        var a = t.r,
            o = t.g,
            l = t.b,
            r = t.a;
        e[i + 0] = a * r / 255, e[i + 1] = o * r / 255, e[i + 2] = l * r / 255, e[i + 3] = r;
      }

      var p = /*#__PURE__*/function () {
        function p() {
          _classCallCheck(this, p);

          this.symbolLevels = [], this.vvColorValues = new Float32Array(8), this.vvColors = new Float32Array(32), this.vvOpacityValues = new Float32Array(8), this.vvOpacities = new Float32Array(8), this.vvSizeMinMaxValue = new Float32Array(4), this.ddColors = new Float32Array(32), this.ddBackgroundColor = new Float32Array(4), this.ddActiveDots = new Float32Array(8), this._vvMaterialParameters = {
            vvSizeEnabled: !1,
            vvColorEnabled: !1,
            vvRotationEnabled: !1,
            vvRotationType: "geographic",
            vvOpacityEnabled: !1
          };
        }

        _createClass(p, [{
          key: "getSizeVVFieldStops",
          value: function getSizeVVFieldStops(i) {
            var s = this._vvSizeFieldStops;

            switch (s.type) {
              case "static":
                return s;

              case "level-dependent":
                return Object(_core_maybe_js__WEBPACK_IMPORTED_MODULE_0__["unwrapOr"])(s.levels[i], function () {
                  var e = 1 / 0,
                      a = 0;

                  for (var t in s.levels) {
                    var _s9 = parseFloat(t),
                        _o8 = Math.abs(i - _s9);

                    _o8 < e && (e = _o8, a = _s9);
                  }

                  if (e === 1 / 0) return {
                    sizes: new Float32Array([0, 0, 0, 0, 0, 0]),
                    values: new Float32Array([0, 0, 0, 0, 0, 0])
                  };
                  var o = i - a,
                      l = Math.pow(2, o / 2),
                      r = Object(_core_maybe_js__WEBPACK_IMPORTED_MODULE_0__["unwrap"])(s.levels[a]),
                      n = new Float32Array(r.values);
                  return n[2] *= l, n[3] *= l, {
                    sizes: Object(_core_maybe_js__WEBPACK_IMPORTED_MODULE_0__["unwrap"])(r.sizes),
                    values: n
                  };
                });
            }
          }
        }, {
          key: "vvMaterialParameters",
          get: function get() {
            return this._vvMaterialParameters;
          }
        }, {
          key: "update",
          value: function update(e) {
            Object(_core_maybe_js__WEBPACK_IMPORTED_MODULE_0__["isSome"])(this._vvInfo) && this._updateVisualVariables(this._vvInfo.vvRanges, e);
          }
        }, {
          key: "setInfo",
          value: function setInfo(e, t, s) {
            var _this4 = this;

            switch (Object(_core_maybe_js__WEBPACK_IMPORTED_MODULE_0__["isSome"])(s) && s.forEach(function (e) {
              return _this4._updateEffects(e);
            }), this._vvInfo = t, e.type) {
              case "dot-density":
                this._updateDotDensityInfo(e);

            }
          }
        }, {
          key: "getVariation",
          value: function getVariation() {
            return {
              ddDotBlending: this.ddDotBlending,
              outsideLabelsVisible: this.outsideLabelsVisible,
              oesTextureFloat: Object(_webgl_capabilities_js__WEBPACK_IMPORTED_MODULE_6__["default"])().supportsTextureFloat
            };
          }
        }, {
          key: "getVariationHash",
          value: function getVariationHash() {
            return (this.ddDotBlending ? 1 : 0) | (this.outsideLabelsVisible ? 1 : 0) << 1;
          }
        }, {
          key: "_updateEffects",
          value: function _updateEffects(e) {
            Object(_core_maybe_js__WEBPACK_IMPORTED_MODULE_0__["isSome"])(e) && e.filter && e.filter.enabled && (this.outsideLabelsVisible = e.excludedLabelsVisible);
          }
        }, {
          key: "_updateVisualVariables",
          value: function _updateVisualVariables(e, t) {
            var i = this._vvMaterialParameters;
            if (i.vvOpacityEnabled = !1, i.vvSizeEnabled = !1, i.vvColorEnabled = !1, i.vvRotationEnabled = !1, !e) return;
            var s = e.size;

            if (s) {
              if (i.vvSizeEnabled = !0, s.minMaxValue) {
                var _e28 = s.minMaxValue;

                var _i10, _a3;

                if (Object(_Utils_js__WEBPACK_IMPORTED_MODULE_7__["isDefined"])(_e28.minSize) && Object(_Utils_js__WEBPACK_IMPORTED_MODULE_7__["isDefined"])(_e28.maxSize)) if (Object(_Utils_js__WEBPACK_IMPORTED_MODULE_7__["isNumber"])(_e28.minSize) && Object(_Utils_js__WEBPACK_IMPORTED_MODULE_7__["isNumber"])(_e28.maxSize)) _i10 = Object(_core_screenUtils_js__WEBPACK_IMPORTED_MODULE_2__["pt2px"])(_e28.minSize), _a3 = Object(_core_screenUtils_js__WEBPACK_IMPORTED_MODULE_2__["pt2px"])(_e28.maxSize);else {
                  var _s10 = t.scale;
                  _i10 = Object(_core_screenUtils_js__WEBPACK_IMPORTED_MODULE_2__["pt2px"])(c(_s10, _e28.minSize.stops)), _a3 = Object(_core_screenUtils_js__WEBPACK_IMPORTED_MODULE_2__["pt2px"])(c(_s10, _e28.maxSize.stops));
                }
                this.vvSizeMinMaxValue.set([_e28.minDataValue, _e28.maxDataValue, _i10, _a3]);
              }

              if (s.scaleStops && (this.vvSizeScaleStopsValue = Object(_core_screenUtils_js__WEBPACK_IMPORTED_MODULE_2__["pt2px"])(c(t.scale, s.scaleStops.stops))), s.unitValue) {
                var _e29 = Object(_core_unitUtils_js__WEBPACK_IMPORTED_MODULE_3__["getMetersPerUnitForSR"])(t.spatialReference) / _renderers_support_lengthUtils_js__WEBPACK_IMPORTED_MODULE_4__["meterIn"][s.unitValue.unit];

                this.vvSizeUnitValueToPixelsRatio = _e29 / t.resolution;
              }

              s.fieldStops && (this._vvSizeFieldStops = s.fieldStops);
            }

            var a = e.color;
            a && (i.vvColorEnabled = !0, this.vvColorValues.set(a.values), this.vvColors.set(a.colors));
            var n = e.opacity;
            n && (i.vvOpacityEnabled = !0, this.vvOpacityValues.set(n.values), this.vvOpacities.set(n.opacities));
            var v = e.rotation;
            v && (i.vvRotationEnabled = !0, i.vvRotationType = v.type);
          }
        }, {
          key: "_updateDotDensityInfo",
          value: function _updateDotDensityInfo(e) {
            var t = e.attributes;
            this.ddDotValue = e.dotValue, this.ddDotScale = e.referenceScale, this.ddDotSize = e.dotSize, this.ddDotBlending = e.dotBlendingEnabled, this.ddSeed = e.seed;

            for (var _e30 = 0; _e30 < _definitions_js__WEBPACK_IMPORTED_MODULE_5__["DOT_DENSITY_MAX_FIELDS"]; _e30++) {
              var i = _e30 >= t.length ? new _Color_js__WEBPACK_IMPORTED_MODULE_1__["default"]([0, 0, 0, 0]) : t[_e30].color;
              h(this.ddColors, i, 4 * _e30);
            }

            for (var _t15 = 0; _t15 < 8; _t15++) {
              this.ddActiveDots[_t15] = _t15 < e.attributes.length ? 1 : 0;
            }

            h(this.ddBackgroundColor, e.backgroundColor);
          }
        }]);

        return p;
      }();
      /***/

    },

    /***/
    "X0J2":
    /*!*******************************************************************************!*\
      !*** ./node_modules/@arcgis/core/views/2d/engine/webgl/AttributeStoreView.js ***!
      \*******************************************************************************/

    /*! exports provided: AttributeStoreView */

    /***/
    function X0J2(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "AttributeStoreView", function () {
        return j;
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


      var _core_promiseUtils_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ../../../../core/promiseUtils.js */
      "9MzC");
      /* harmony import */


      var _definitions_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ./definitions.js */
      "jIHu");
      /* harmony import */


      var _chunks_builtins_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ../../../../chunks/builtins.js */
      "n4uK");
      /* harmony import */


      var _webgl_Texture_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! ../../../webgl/Texture.js */
      "of9L");
      /* harmony import */


      var _webgl_FramebufferObject_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! ../../../webgl/FramebufferObject.js */
      "0meK");
      /* harmony import */


      var _webgl_RenderingContext_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! ../../../webgl/RenderingContext.js */
      "bfJE");
      /* harmony import */


      var _Utils_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
      /*! ./Utils.js */
      "yN2G");
      /* harmony import */


      var _util_debug_js__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
      /*! ./util/debug.js */
      "l8tk");
      /*
      All material copyright ESRI, All Rights Reserved, unless otherwise specified.
      See https://js.arcgis.com/4.18/esri/copyright.txt for details.
      */


      var z = _core_Logger_js__WEBPACK_IMPORTED_MODULE_2__["default"].getLogger("esri.views.2d.engine.webgl.AttributeStoreView"),
          D = Object(_util_debug_js__WEBPACK_IMPORTED_MODULE_11__["createDebugLogger"])(_util_debug_js__WEBPACK_IMPORTED_MODULE_11__["DEBUG_ATTR_UPDATES"], z),
          S = function S(t) {
        return 2147483647 & t;
      };

      var U = /*#__PURE__*/function () {
        function U(t, e, i) {
          _classCallCheck(this, U);

          this._texture = null, this._lastTexture = null, this._fbos = {}, this.texelSize = 4;
          var s = t.buffer,
              r = t.pixelType,
              h = t.textureOnly,
              o = Object(_Utils_js__WEBPACK_IMPORTED_MODULE_10__["getPixelArrayCtor"])(r);
          this.shared = i, this.pixelType = r, this.size = e, this.textureOnly = h, h || (this.data = new o(Object(_core_maybe_js__WEBPACK_IMPORTED_MODULE_1__["unwrap"])(s))), this._resetRange();
        }

        _createClass(U, [{
          key: "destroy",
          value: function destroy() {
            var _this5 = this;

            Object(_core_maybe_js__WEBPACK_IMPORTED_MODULE_1__["andThen"])(this._texture, function (t) {
              return t.dispose();
            });

            var _loop = function _loop(t) {
              Object(_core_maybe_js__WEBPACK_IMPORTED_MODULE_1__["andThen"])(_this5._fbos[t], function (e) {
                "0" === t && e.detachColorTexture(), e.dispose();
              }), _this5._fbos[t] = null;
            };

            for (var t in this._fbos) {
              _loop(t);
            }

            this._texture = null;
          }
        }, {
          key: "_textureDesc",
          get: function get() {
            return {
              target: 3553,
              wrapMode: 33071,
              pixelFormat: 6408,
              dataType: this.pixelType,
              samplingMode: 9728,
              width: this.size,
              height: this.size
            };
          }
        }, {
          key: "setData",
          value: function setData(t, e, i) {
            var s = S(t),
                r = Object(_core_maybe_js__WEBPACK_IMPORTED_MODULE_1__["unwrap"])(this.data),
                h = s * this.texelSize + e;
            !r || h >= r.length || (r[h] = i, this.dirtyStart = Math.min(this.dirtyStart, s), this.dirtyEnd = Math.max(this.dirtyEnd, s));
          }
        }, {
          key: "getData",
          value: function getData(t, i) {
            if (Object(_core_maybe_js__WEBPACK_IMPORTED_MODULE_1__["isNone"])(this.data)) return null;
            var s = S(t) * this.texelSize + i;
            return !this.data || s >= this.data.length ? null : this.data[s];
          }
        }, {
          key: "getTexture",
          value: function getTexture(t) {
            var _this6 = this;

            return Object(_core_maybe_js__WEBPACK_IMPORTED_MODULE_1__["unwrapOr"])(this._texture, function () {
              return _this6._initTexture(t);
            });
          }
        }, {
          key: "getFBO",
          value: function getFBO(t) {
            var i = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;

            if (Object(_core_maybe_js__WEBPACK_IMPORTED_MODULE_1__["isNone"])(this._fbos[i])) {
              var _e31 = {
                colorTarget: 0,
                depthStencilTarget: 0
              },
                  s = 0 === i ? this.getTexture(t) : this._textureDesc;
              this._fbos[i] = new _webgl_FramebufferObject_js__WEBPACK_IMPORTED_MODULE_8__["default"](t, _e31, s);
            }

            return this._fbos[i];
          }
        }, {
          key: "locked",
          get: function get() {
            return !(5121 !== this.pixelType || !this.shared || this.textureOnly || !Object(_core_has_js__WEBPACK_IMPORTED_MODULE_0__["default"])("esri-atomics") || !this.data) && 1 === Atomics.load(this.data, 0);
          }
        }, {
          key: "updateTexture",
          value: function updateTexture(t) {
            if (!this.locked) try {
              var _e32 = this.dirtyStart,
                  i = this.dirtyEnd;
              if (_e32 > i) return;

              this._resetRange();

              var s = Object(_core_maybe_js__WEBPACK_IMPORTED_MODULE_1__["unwrap"])(this.data).buffer,
                  r = this.getTexture(t),
                  h = 4,
                  o = (_e32 - _e32 % this.size) / this.size,
                  n = (i - i % this.size) / this.size,
                  d = o,
                  l = this.size,
                  p = n,
                  x = o * this.size * h,
                  c = (l + p * this.size) * h - x,
                  _ = Object(_Utils_js__WEBPACK_IMPORTED_MODULE_10__["getPixelArrayCtor"])(this.pixelType),
                  g = _.BYTES_PER_ELEMENT;

              try {
                new _(s, x * g, c);
              } catch (t) {
                console.debug(t);
              }

              var f = new _(s, x * g, c),
                  b = this.size,
                  m = p - d + 1;
              if (m > this.size) return void z.error(new _core_Error_js__WEBPACK_IMPORTED_MODULE_3__["default"]("mapview-webgl", "Out-of-bounds index when updating AttributeData"));
              r.updateData(0, 0, d, b, m, f);
            } catch (t) {
              console.debug(t);
            }
          }
        }, {
          key: "update",
          value: function update(t) {
            var e = t.data,
                i = t.start,
                r = t.end;

            if (Object(_core_maybe_js__WEBPACK_IMPORTED_MODULE_1__["isSome"])(e)) {
              var s = this.data,
                  _r7 = i * this.texelSize;

              for (var _i11 = 0; _i11 < e.length; _i11++) {
                var a = 1 << _i11 % this.texelSize;
                t.layout & a && (s[_r7 + _i11] = e[_i11]);
              }
            }

            this.dirtyStart = Math.min(this.dirtyStart, i), this.dirtyEnd = Math.max(this.dirtyEnd, r);
          }
        }, {
          key: "resize",
          value: function resize(t, e) {
            var i = this.size;
            if (this.size = e, this.textureOnly) return void (i !== this.size && (this._lastTexture = this._texture, this._texture = null));
            var s = Object(_Utils_js__WEBPACK_IMPORTED_MODULE_10__["getPixelArrayCtor"])(this.pixelType);
            this.destroy(), this.data = new s(Object(_core_maybe_js__WEBPACK_IMPORTED_MODULE_1__["unwrap"])(t.buffer));
          }
        }, {
          key: "_resetRange",
          value: function _resetRange() {
            this.dirtyStart = 2147483647, this.dirtyEnd = 0;
          }
        }, {
          key: "_initTexture",
          value: function _initTexture(t) {
            var e = new _webgl_Texture_js__WEBPACK_IMPORTED_MODULE_7__["default"](t, this._textureDesc, Object(_core_maybe_js__WEBPACK_IMPORTED_MODULE_1__["unwrapOr"])(this.data, void 0));

            if (Object(_core_maybe_js__WEBPACK_IMPORTED_MODULE_1__["isSome"])(this._lastTexture) && this._fbos[0]) {
              var i = this._lastTexture.descriptor.width,
                  s = this._lastTexture.descriptor.height,
                  r = this._lastTexture.descriptor.dataType,
                  a = this._lastTexture.descriptor.pixelFormat,
                  h = this.getFBO(t),
                  o = Object(_Utils_js__WEBPACK_IMPORTED_MODULE_10__["getPixelBytes"])(r),
                  n = new (Object(_Utils_js__WEBPACK_IMPORTED_MODULE_10__["getPixelArrayCtor"])(r))(new ArrayBuffer(i * s * o * this.texelSize)),
                  d = t.getBoundFramebufferObject(),
                  _t$getViewport = t.getViewport(),
                  u = _t$getViewport.x,
                  l = _t$getViewport.y,
                  p = _t$getViewport.width,
                  x = _t$getViewport.height;

              t.bindFramebuffer(h), h.readPixels(0, 0, i, s, a, r, n), e.updateData(0, 0, 0, 2 * i, s / 2, n), t.setViewport(u, l, p, x), t.bindFramebuffer(d);
            }

            return this.destroy(), this._texture = e, this._texture;
          }
        }]);

        return U;
      }();

      var j = /*#__PURE__*/function () {
        function j() {
          _classCallCheck(this, j);

          this._initialized = !1, this._forceNextUpload = !1, this._locked = !1;
        }

        _createClass(j, [{
          key: "initialize",
          value: function initialize(t) {
            var r = t.blocks,
                a = t.shared,
                h = t.size;
            if (this.shared = a, this.size = h, D("Initializing AttributeStoreView", t), Object(_core_maybe_js__WEBPACK_IMPORTED_MODULE_1__["isNone"])(this._data)) this._data = Object(_core_maybe_js__WEBPACK_IMPORTED_MODULE_1__["mapMany"])(r, function (t) {
              return new U(t, h, a);
            });else for (var _t16 = 0; _t16 < this._data.length; _t16++) {
              var i = this._data[_t16],
                  o = r[_t16];
              Object(_core_maybe_js__WEBPACK_IMPORTED_MODULE_1__["isSome"])(o) && (Object(_core_maybe_js__WEBPACK_IMPORTED_MODULE_1__["isNone"])(i) ? this._data[_t16] = new U(o, h, a) : i.resize(o, h));
            }
            this._initialized = !0;
          }
        }, {
          key: "destroy",
          value: function destroy() {
            Object(_core_maybe_js__WEBPACK_IMPORTED_MODULE_1__["andThen"])(this._data, function (t) {
              return Object(_core_maybe_js__WEBPACK_IMPORTED_MODULE_1__["mapMany"])(t, function (t) {
                return t.destroy();
              });
            }), Object(_core_maybe_js__WEBPACK_IMPORTED_MODULE_1__["andThen"])(this._defaultTexture, function (t) {
              return t.dispose();
            });
          }
        }, {
          key: "getBlock",
          value: function getBlock(t) {
            if (Object(_core_maybe_js__WEBPACK_IMPORTED_MODULE_1__["isNone"])(this._data)) return null;
            return this._data[t];
          }
        }, {
          key: "setLabelMinZoom",
          value: function setLabelMinZoom(t, e) {
            this.setData(t, 0, 1, e);
          }
        }, {
          key: "getLabelMinZoom",
          value: function getLabelMinZoom(t) {
            return this.getData(t, 0, 1, 255);
          }
        }, {
          key: "getFilterFlags",
          value: function getFilterFlags(t) {
            return this.getData(t, 0, 0, 0);
          }
        }, {
          key: "getVVSize",
          value: function getVVSize(t) {
            return this.getData(t, _definitions_js__WEBPACK_IMPORTED_MODULE_5__["ATTRIBUTE_DATA_VV"], 0, 0);
          }
        }, {
          key: "getData",
          value: function getData(t, i, r, h) {
            if (!this._data) return 0;
            var o = Object(_core_maybe_js__WEBPACK_IMPORTED_MODULE_1__["unwrap"])(this._data)[i];
            if (Object(_core_maybe_js__WEBPACK_IMPORTED_MODULE_1__["isNone"])(o)) return 0;
            var n = o.getData(t, r);
            return Object(_core_maybe_js__WEBPACK_IMPORTED_MODULE_1__["isSome"])(n) ? n : h;
          }
        }, {
          key: "setData",
          value: function setData(t, e, i, s) {
            var r = Object(_core_maybe_js__WEBPACK_IMPORTED_MODULE_1__["unwrap"])(this._data)[e];
            Object(_core_maybe_js__WEBPACK_IMPORTED_MODULE_1__["unwrap"])(r).setData(t, i, s);
          }
        }, {
          key: "lockTextureUpload",
          value: function lockTextureUpload() {
            this._locked = !0;
          }
        }, {
          key: "unlockTextureUpload",
          value: function unlockTextureUpload() {
            this._locked = !1;
          }
        }, {
          key: "forceTextureUpload",
          value: function forceTextureUpload() {
            this._forceNextUpload = !0;
          }
        }, {
          key: "requestUpdate",
          value: function () {
            var _requestUpdate = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(t) {
              var e;
              return regeneratorRuntime.wrap(function _callee$(_context) {
                while (1) {
                  switch (_context.prev = _context.next) {
                    case 0:
                      if (!this._pendingAttributeUpdate) {
                        _context.next = 2;
                        break;
                      }

                      return _context.abrupt("return", void z.error(new _core_Error_js__WEBPACK_IMPORTED_MODULE_3__["default"]("mapview-webgl", "Tried to update attribute data with a pending update")));

                    case 2:
                      e = Object(_core_promiseUtils_js__WEBPACK_IMPORTED_MODULE_4__["createResolver"])();
                      return _context.abrupt("return", (D("AttributeStoreView Update Requested", t), this._pendingAttributeUpdate = {
                        data: t,
                        resolver: e
                      }, e.promise));

                    case 4:
                    case "end":
                      return _context.stop();
                  }
                }
              }, _callee, this);
            }));

            function requestUpdate(_x2) {
              return _requestUpdate.apply(this, arguments);
            }

            return requestUpdate;
          }()
        }, {
          key: "update",
          value: function update() {
            if (this._initialized && Object(_core_maybe_js__WEBPACK_IMPORTED_MODULE_1__["isSome"])(this._pendingAttributeUpdate)) {
              var _this$_pendingAttribu = this._pendingAttributeUpdate,
                  t = _this$_pendingAttribu.data,
                  _e33 = _this$_pendingAttribu.resolver,
                  i = Object(_core_maybe_js__WEBPACK_IMPORTED_MODULE_1__["unwrap"])(this._data);

              var _loop2 = function _loop2(_e34) {
                var s = t.blocks[_e34],
                    a = i[_e34];
                Object(_core_maybe_js__WEBPACK_IMPORTED_MODULE_1__["andThen"])(a, function (t) {
                  return Object(_core_maybe_js__WEBPACK_IMPORTED_MODULE_1__["andThen"])(s, function (i) {
                    D("Updating block ".concat(_e34), i), t.update(i);
                  });
                });
              };

              for (var _e34 = 0; _e34 < t.blocks.length; _e34++) {
                _loop2(_e34);
              }

              this._pendingAttributeUpdate = null, _e33();
            }
          }
        }, {
          key: "bindTextures",
          value: function bindTextures(t) {
            this.update();

            var e = this._getDefaultTexture(t);

            if (!this._initialized) return t.bindTexture(e, _definitions_js__WEBPACK_IMPORTED_MODULE_5__["TEXTURE_BINDING_ATTRIBUTE_DATA_0"]), t.bindTexture(e, _definitions_js__WEBPACK_IMPORTED_MODULE_5__["TEXTURE_BINDING_ATTRIBUTE_DATA_1"]), t.bindTexture(e, _definitions_js__WEBPACK_IMPORTED_MODULE_5__["TEXTURE_BINDING_ATTRIBUTE_DATA_2"]), void t.bindTexture(e, _definitions_js__WEBPACK_IMPORTED_MODULE_5__["TEXTURE_BINDING_ATTRIBUTE_DATA_3"]);
            var i = Object(_core_maybe_js__WEBPACK_IMPORTED_MODULE_1__["unwrap"])(this._data);
            this._locked && !this._forceNextUpload || (Object(_core_maybe_js__WEBPACK_IMPORTED_MODULE_1__["forEachSome"])(i, function (e) {
              return e.updateTexture(t);
            }), this._forceNextUpload = !1), t.bindTexture(Object(_core_maybe_js__WEBPACK_IMPORTED_MODULE_1__["mapOr"])(i[0], e, function (e) {
              return e.getTexture(t);
            }), _definitions_js__WEBPACK_IMPORTED_MODULE_5__["TEXTURE_BINDING_ATTRIBUTE_DATA_0"]), t.bindTexture(Object(_core_maybe_js__WEBPACK_IMPORTED_MODULE_1__["mapOr"])(i[1], e, function (e) {
              return e.getTexture(t);
            }), _definitions_js__WEBPACK_IMPORTED_MODULE_5__["TEXTURE_BINDING_ATTRIBUTE_DATA_1"]), t.bindTexture(Object(_core_maybe_js__WEBPACK_IMPORTED_MODULE_1__["mapOr"])(i[2], e, function (e) {
              return e.getTexture(t);
            }), _definitions_js__WEBPACK_IMPORTED_MODULE_5__["TEXTURE_BINDING_ATTRIBUTE_DATA_2"]), t.bindTexture(Object(_core_maybe_js__WEBPACK_IMPORTED_MODULE_1__["mapOr"])(i[3], e, function (e) {
              return e.getTexture(t);
            }), _definitions_js__WEBPACK_IMPORTED_MODULE_5__["TEXTURE_BINDING_ATTRIBUTE_DATA_3"]);
          }
        }, {
          key: "_getDefaultTexture",
          value: function _getDefaultTexture(t) {
            if (Object(_core_maybe_js__WEBPACK_IMPORTED_MODULE_1__["isNone"])(this._defaultTexture)) {
              var _e35 = {
                wrapMode: 33071,
                pixelFormat: 6408,
                dataType: 5121,
                samplingMode: 9728,
                width: 1,
                height: 1
              };
              this._defaultTexture = new _webgl_Texture_js__WEBPACK_IMPORTED_MODULE_7__["default"](t, _e35, new Uint8Array(4));
            }

            return this._defaultTexture;
          }
        }]);

        return j;
      }();
      /***/

    },

    /***/
    "ZdL5":
    /*!******************************************************************!*\
      !*** ./node_modules/@arcgis/core/views/2d/engine/webgl/Fader.js ***!
      \******************************************************************/

    /*! exports provided: default */

    /***/
    function ZdL5(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /*
      All material copyright ESRI, All Rights Reserved, unless otherwise specified.
      See https://js.arcgis.com/4.18/esri/copyright.txt for details.
      */

      /* harmony default export */


      __webpack_exports__["default"] = /*#__PURE__*/function () {
        function _class4() {
          var t = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 400;

          _classCallCheck(this, _class4);

          this.duration = t, this._lastTime = 0, this._elapsed = 0, this._value = 0, this._finished = !1;
        }

        _createClass(_class4, [{
          key: "value",
          get: function get() {
            return this._value;
          }
        }, {
          key: "reset",
          value: function reset() {
            this._lastTime = 0, this._elapsed = 0, this._value = 0;
          }
        }, {
          key: "step",
          value: function step() {
            var t = performance.now();
            if (0 === this._lastTime) return this._lastTime = t, this._value = 0, !0;
            if (this._elapsed >= this.duration) return !0;
            var s = t - this._lastTime;
            return this._elapsed += s, this._lastTime = t, this._value = Math.min(this._elapsed / this.duration, 1), !1;
          }
        }]);

        return _class4;
      }();
      /***/

    },

    /***/
    "ZnvS":
    /*!****************************************************************************!*\
      !*** ./node_modules/@arcgis/core/views/2d/engine/webgl/TileDisplayData.js ***!
      \****************************************************************************/

    /*! exports provided: default, groupRecordsByGeometryType */

    /***/
    function ZnvS(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "groupRecordsByGeometryType", function () {
        return e;
      });
      /* harmony import */


      var _WGLDisplayList_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ./WGLDisplayList.js */
      "bbr/");
      /* harmony import */


      var _util_serializationUtils_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./util/serializationUtils.js */
      "wnVl");
      /* harmony import */


      var _WGLDisplayObject_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./WGLDisplayObject.js */
      "ZByl");
      /*
      All material copyright ESRI, All Rights Reserved, unless otherwise specified.
      See https://js.arcgis.com/4.18/esri/copyright.txt for details.
      */


      function e(s) {
        var t = [[], [], [], [], []],
            i = s;

        var _iterator13 = _createForOfIteratorHelper(i),
            _step13;

        try {
          for (_iterator13.s(); !(_step13 = _iterator13.n()).done;) {
            var _s11 = _step13.value;

            var _iterator14 = _createForOfIteratorHelper(_s11.displayRecords),
                _step14;

            try {
              for (_iterator14.s(); !(_step14 = _iterator14.n()).done;) {
                var _i12 = _step14.value;

                t[_i12.geometryType].push(_i12);
              }
            } catch (err) {
              _iterator14.e(err);
            } finally {
              _iterator14.f();
            }
          }
        } catch (err) {
          _iterator13.e(err);
        } finally {
          _iterator13.f();
        }

        return t;
      }

      var r = /*#__PURE__*/function () {
        function r() {
          _classCallCheck(this, r);
        }

        _createClass(r, [{
          key: "displayObjectRegistry",
          get: function get() {
            if (!this._displayObjectRegistry) {
              this._displayObjectRegistry = new Map();

              var _iterator15 = _createForOfIteratorHelper(this.displayObjects),
                  _step15;

              try {
                for (_iterator15.s(); !(_step15 = _iterator15.n()).done;) {
                  var s = _step15.value;

                  this._displayObjectRegistry.set(s.id, s);
                }
              } catch (err) {
                _iterator15.e(err);
              } finally {
                _iterator15.f();
              }
            }

            return this._displayObjectRegistry;
          }
        }, {
          key: "displayList",
          get: function get() {
            return this._displayList;
          }
        }, {
          key: "computeDisplayList",
          value: function computeDisplayList(t) {
            if (this._displayList = new _WGLDisplayList_js__WEBPACK_IMPORTED_MODULE_0__["default"](t), t) {
              var _iterator16 = _createForOfIteratorHelper(this.displayObjects),
                  _step16;

              try {
                for (_iterator16.s(); !(_step16 = _iterator16.n()).done;) {
                  var s = _step16.value;

                  var _iterator17 = _createForOfIteratorHelper(s.displayRecords),
                      _step17;

                  try {
                    for (_iterator17.s(); !(_step17 = _iterator17.n()).done;) {
                      var _t17 = _step17.value;

                      this._displayList.addToList(_t17);
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
            } else {
              var _s12 = e(this.displayObjects),
                  _t18 = _s12.length;

              for (var i = 0; i < _t18; ++i) {
                var _t19 = _s12[i];

                this._displayList.addToList(_t19);
              }
            }
          }
        }, {
          key: "clone",
          value: function clone() {
            var s = new r();
            return this.displayObjects && (s.displayObjects = this.displayObjects.map(function (s) {
              return s.clone();
            })), s;
          }
        }, {
          key: "serialize",
          value: function serialize(s) {
            return Object(_util_serializationUtils_js__WEBPACK_IMPORTED_MODULE_1__["serializeList"])(s, this.displayObjects), s;
          }
        }, {
          key: "_deserializeObjects",
          value: function _deserializeObjects(s) {
            var t = s.readInt32(),
                e = new Array(t),
                _r8 = new Map();

            for (var _t20 = 0; _t20 < e.length; ++_t20) {
              var l = _WGLDisplayObject_js__WEBPACK_IMPORTED_MODULE_2__["default"].deserialize(s);

              e[_t20] = l, _r8.set(l.id, l);
            }

            this.displayObjects = e, this._displayList = null, this._displayObjectRegistry = _r8;
          }
        }], [{
          key: "deserialize",
          value: function deserialize(s) {
            var t = new r();
            return t._deserializeObjects(s), t;
          }
        }]);

        return r;
      }();
      /* harmony default export */


      __webpack_exports__["default"] = r;
      /***/
    },

    /***/
    "ZyIX":
    /*!**************************************************************************!*\
      !*** ./node_modules/@arcgis/core/views/2d/engine/webgl/TileContainer.js ***!
      \**************************************************************************/

    /*! exports provided: default, sortByLevel */

    /***/
    function ZyIX(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "sortByLevel", function () {
        return n;
      });
      /* harmony import */


      var _enums_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ./enums.js */
      "yE7X");
      /* harmony import */


      var _brushes_WGLBrushInfo_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./brushes/WGLBrushInfo.js */
      "b3VY");
      /* harmony import */


      var _brushes_WGLBrushStencil_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./brushes/WGLBrushStencil.js */
      "7F7D");
      /* harmony import */


      var _WGLContainer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./WGLContainer.js */
      "mgI5");
      /*
      All material copyright ESRI, All Rights Reserved, unless otherwise specified.
      See https://js.arcgis.com/4.18/esri/copyright.txt for details.
      */


      var n = function n(e, r) {
        return e.key.level - r.key.level != 0 ? e.key.level - r.key.level : e.key.row - r.key.row != 0 ? e.key.row - r.key.row : e.key.col - r.key.col;
      };
      /* harmony default export */


      __webpack_exports__["default"] = /*#__PURE__*/function (_WGLContainer_js__WEB) {
        _inherits(_class5, _WGLContainer_js__WEB);

        var _super3 = _createSuper(_class5);

        function _class5(e) {
          var _this7;

          _classCallCheck(this, _class5);

          _this7 = _super3.call(this), _this7._tileInfoView = e;
          return _this7;
        }

        _createClass(_class5, [{
          key: "renderChildren",
          value: function renderChildren(e) {
            this.sortChildren(n), this.setStencilReference(), _get(_getPrototypeOf(_class5.prototype), "renderChildren", this).call(this, e);
          }
        }, {
          key: "createRenderParams",
          value: function createRenderParams(e) {
            var r = e.state;
            return _objectSpread(_objectSpread({}, _get(_getPrototypeOf(_class5.prototype), "createRenderParams", this).call(this, e)), {}, {
              requiredLevel: this._tileInfoView.getClosestInfoForScale(r.scale).level,
              displayLevel: this._tileInfoView.tileInfo.scaleToZoom(r.scale)
            });
          }
        }, {
          key: "prepareRenderPasses",
          value: function prepareRenderPasses(t) {
            var _this8 = this;

            var n = t.registerRenderPass({
              name: "stencil",
              brushes: [_brushes_WGLBrushStencil_js__WEBPACK_IMPORTED_MODULE_2__["default"]],
              drawPhase: _enums_js__WEBPACK_IMPORTED_MODULE_0__["WGLDrawPhase"].DEBUG | _enums_js__WEBPACK_IMPORTED_MODULE_0__["WGLDrawPhase"].MAP | _enums_js__WEBPACK_IMPORTED_MODULE_0__["WGLDrawPhase"].HIGHLIGHT,
              target: function target() {
                return _this8.getStencilTarget();
              }
            }),
                i = t.registerRenderPass({
              name: "tileInfo",
              brushes: [_brushes_WGLBrushInfo_js__WEBPACK_IMPORTED_MODULE_1__["default"]],
              drawPhase: _enums_js__WEBPACK_IMPORTED_MODULE_0__["WGLDrawPhase"].DEBUG,
              target: function target() {
                return _this8.children;
              },
              has: "esri-tiles-debug"
            });
            return [].concat(_toConsumableArray(_get(_getPrototypeOf(_class5.prototype), "prepareRenderPasses", this).call(this, t)), [n, i]);
          }
        }, {
          key: "getStencilTarget",
          value: function getStencilTarget() {
            return this.children;
          }
        }, {
          key: "updateTransforms",
          value: function updateTransforms(e) {
            var _iterator18 = _createForOfIteratorHelper(this.children),
                _step18;

            try {
              for (_iterator18.s(); !(_step18 = _iterator18.n()).done;) {
                var r = _step18.value;

                var s = this._tileInfoView.getTileResolution(r.key);

                r.setTransform(e, s);
              }
            } catch (err) {
              _iterator18.e(err);
            } finally {
              _iterator18.f();
            }
          }
        }, {
          key: "setStencilReference",
          value: function setStencilReference() {
            var e = 1;

            var _iterator19 = _createForOfIteratorHelper(this.children),
                _step19;

            try {
              for (_iterator19.s(); !(_step19 = _iterator19.n()).done;) {
                var r = _step19.value;
                r.stencilRef = e++;
              }
            } catch (err) {
              _iterator19.e(err);
            } finally {
              _iterator19.f();
            }
          }
        }]);

        return _class5;
      }(_WGLContainer_js__WEBPACK_IMPORTED_MODULE_3__["default"]);
      /***/

    },

    /***/
    "ahbm":
    /*!***************************************************************************!*\
      !*** ./node_modules/@arcgis/core/views/2d/engine/webgl/TileBufferData.js ***!
      \***************************************************************************/

    /*! exports provided: default */

    /***/
    function ahbm(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony import */


      var _Utils_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ./Utils.js */
      "yN2G");
      /*
      All material copyright ESRI, All Rights Reserved, unless otherwise specified.
      See https://js.arcgis.com/4.18/esri/copyright.txt for details.
      */


      var r = /*#__PURE__*/function () {
        function r() {
          _classCallCheck(this, r);

          this.geometries = [{
            indexBuffer: void 0,
            vertexBuffer: {}
          }, {
            indexBuffer: void 0,
            vertexBuffer: {}
          }, {
            indexBuffer: void 0,
            vertexBuffer: {}
          }, {
            indexBuffer: void 0,
            vertexBuffer: {}
          }, {
            indexBuffer: void 0,
            vertexBuffer: {}
          }];
        }

        _createClass(r, [{
          key: "clone",
          value: function clone() {
            var e = new r();

            for (var _r14 = 0; _r14 < this.geometries.length; _r14++) {
              var f = this.geometries[_r14],
                  t = e.geometries[_r14];
              t.indexBuffer = f.indexBuffer.slice(), t.vertexBuffer = {};

              for (var _e36 in f.vertexBuffer) {
                var _f$vertexBuffer$_e = f.vertexBuffer[_e36],
                    _r15 = _f$vertexBuffer$_e.data,
                    i = _f$vertexBuffer$_e.stride;
                t.vertexBuffer[_e36] = {
                  data: _r15.slice(),
                  stride: i
                };
              }
            }

            return e;
          }
        }, {
          key: "serialize",
          value: function serialize() {
            var e = {
              geometries: [{
                indexBuffer: this.geometries[0].indexBuffer.buffer,
                vertexBuffer: {}
              }, {
                indexBuffer: this.geometries[1].indexBuffer.buffer,
                vertexBuffer: {}
              }, {
                indexBuffer: this.geometries[2].indexBuffer.buffer,
                vertexBuffer: {}
              }, {
                indexBuffer: this.geometries[3].indexBuffer.buffer,
                vertexBuffer: {}
              }, {
                indexBuffer: this.geometries[4].indexBuffer.buffer,
                vertexBuffer: {}
              }]
            };

            for (var _r16 = 0; _r16 < 5; ++_r16) {
              for (var f in this.geometries[_r16].vertexBuffer) {
                e.geometries[_r16].vertexBuffer[f] = {
                  data: this.geometries[_r16].vertexBuffer[f].data.buffer,
                  stride: this.geometries[_r16].vertexBuffer[f].stride
                };
              }
            }

            return e;
          }
        }, {
          key: "getBuffers",
          value: function getBuffers() {
            var e = [];

            for (var _r17 = 0; _r17 < 5; ++_r17) {
              e.push(this.geometries[_r17].indexBuffer.buffer);

              for (var f in this.geometries[_r17].vertexBuffer) {
                e.push(this.geometries[_r17].vertexBuffer[f].data.buffer);
              }
            }

            return e;
          }
        }], [{
          key: "deserialize",
          value: function deserialize(f) {
            var t = new r();

            for (var _r18 = 0; _r18 < 5; ++_r18) {
              t.geometries[_r18].indexBuffer = new Uint32Array(f.geometries[_r18].indexBuffer), t.geometries[_r18].vertexBuffer = {};

              for (var i in f.geometries[_r18].vertexBuffer) {
                t.geometries[_r18].vertexBuffer[i] = {
                  data: Object(_Utils_js__WEBPACK_IMPORTED_MODULE_0__["allocateTypedArrayBufferwithData"])(f.geometries[_r18].vertexBuffer[i].data, f.geometries[_r18].vertexBuffer[i].stride),
                  stride: f.geometries[_r18].vertexBuffer[i].stride
                };
              }
            }

            return t;
          }
        }]);

        return r;
      }();
      /* harmony default export */


      __webpack_exports__["default"] = r;
      /***/
    },

    /***/
    "bbr/":
    /*!***************************************************************************!*\
      !*** ./node_modules/@arcgis/core/views/2d/engine/webgl/WGLDisplayList.js ***!
      \***************************************************************************/

    /*! exports provided: default */

    /***/
    function bbr(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony import */


      var _core_Logger_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ../../../../core/Logger.js */
      "6S2I");
      /* harmony import */


      var _enums_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./enums.js */
      "yE7X");
      /*
      All material copyright ESRI, All Rights Reserved, unless otherwise specified.
      See https://js.arcgis.com/4.18/esri/copyright.txt for details.
      */


      var n = _core_Logger_js__WEBPACK_IMPORTED_MODULE_0__["default"].getLogger("esri.views.2d.engine.webgl.WGLDisplayList");

      function i(e, t, o) {
        for (var _len = arguments.length, n = new Array(_len > 3 ? _len - 3 : 0), _key = 3; _key < _len; _key++) {
          n[_key - 3] = arguments[_key];
        }

        t < e.length ? e.splice.apply(e, [t, o].concat(n)) : e.push.apply(e, n);
      }

      var r = new Map();
      r.set(_enums_js__WEBPACK_IMPORTED_MODULE_1__["WGLDrawPhase"].MAP, [_enums_js__WEBPACK_IMPORTED_MODULE_1__["WGLGeometryType"].FILL, _enums_js__WEBPACK_IMPORTED_MODULE_1__["WGLGeometryType"].LINE, _enums_js__WEBPACK_IMPORTED_MODULE_1__["WGLGeometryType"].MARKER, _enums_js__WEBPACK_IMPORTED_MODULE_1__["WGLGeometryType"].TEXT]), r.set(_enums_js__WEBPACK_IMPORTED_MODULE_1__["WGLDrawPhase"].LABEL, [_enums_js__WEBPACK_IMPORTED_MODULE_1__["WGLGeometryType"].LABEL]), r.set(_enums_js__WEBPACK_IMPORTED_MODULE_1__["WGLDrawPhase"].LABEL_ALPHA, [_enums_js__WEBPACK_IMPORTED_MODULE_1__["WGLGeometryType"].LABEL]);

      var s = /*#__PURE__*/function () {
        function s() {
          var e = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : !1;

          _classCallCheck(this, s);

          this.symbolLevels = [], this.unified = e;
        }

        _createClass(s, [{
          key: "replay",
          value: function replay(e, t, o) {
            if (this.unified) {
              var _iterator20 = _createForOfIteratorHelper(this.symbolLevels),
                  _step20;

              try {
                for (_iterator20.s(); !(_step20 = _iterator20.n()).done;) {
                  var _n6 = _step20.value;

                  var _iterator21 = _createForOfIteratorHelper(_n6.zLevels),
                      _step21;

                  try {
                    for (_iterator21.s(); !(_step21 = _iterator21.n()).done;) {
                      var _i13 = _step21.value;
                      var _n7 = _i13.geometryDPInfo.unified;

                      if (_n7) {
                        var _iterator22 = _createForOfIteratorHelper(_n7),
                            _step22;

                        try {
                          for (_iterator22.s(); !(_step22 = _iterator22.n()).done;) {
                            var _i14 = _step22.value;

                            var _n8 = e.painter.getGeometryBrush(_i14.geometryType),
                                _r19 = t.getGeometry(_i14.geometryType);

                            _n8.prepareState(e, t), _n8.drawGeometry(e, t, _i14, _r19, o);
                          }
                        } catch (err) {
                          _iterator22.e(err);
                        } finally {
                          _iterator22.f();
                        }
                      }
                    }
                  } catch (err) {
                    _iterator21.e(err);
                  } finally {
                    _iterator21.f();
                  }
                }
              } catch (err) {
                _iterator20.e(err);
              } finally {
                _iterator20.f();
              }
            }
          }
        }, {
          key: "empty",
          get: function get() {
            return !this.symbolLevels || 0 === this.symbolLevels.length;
          }
        }, {
          key: "clear",
          value: function clear() {
            this.symbolLevels.length = 0;
          }
        }, {
          key: "addToList",
          value: function addToList(e, t) {
            if (Array.isArray(e)) {
              var _iterator23 = _createForOfIteratorHelper(e),
                  _step23;

              try {
                for (_iterator23.s(); !(_step23 = _iterator23.n()).done;) {
                  var o = _step23.value;

                  this._addToList(o, t);
                }
              } catch (err) {
                _iterator23.e(err);
              } finally {
                _iterator23.f();
              }
            } else this._addToList(e, t);
          }
        }, {
          key: "removeFromList",
          value: function removeFromList(e) {
            Array.isArray(e) || (e = [e]);
            var t = null;

            var _iterator24 = _createForOfIteratorHelper(e),
                _step24;

            try {
              for (_iterator24.s(); !(_step24 = _iterator24.n()).done;) {
                var o = _step24.value;
                t = this._removeFromList(o);
              }
            } catch (err) {
              _iterator24.e(err);
            } finally {
              _iterator24.f();
            }

            return t;
          }
        }, {
          key: "byType",
          value: function byType(e, t) {
            var _iterator25 = _createForOfIteratorHelper(this.symbolLevels),
                _step25;

            try {
              for (_iterator25.s(); !(_step25 = _iterator25.n()).done;) {
                var o = _step25.value;

                var _iterator26 = _createForOfIteratorHelper(o.zLevels),
                    _step26;

                try {
                  for (_iterator26.s(); !(_step26 = _iterator26.n()).done;) {
                    var _n9 = _step26.value;

                    var _o9 = _n9.geometryDPInfo,
                        _i15 = this.getDPInfoType(e);

                    if (_o9[_i15]) {
                      var _iterator27 = _createForOfIteratorHelper(_o9[_i15]),
                          _step27;

                      try {
                        for (_iterator27.s(); !(_step27 = _iterator27.n()).done;) {
                          var _e37 = _step27.value;
                          t(_e37);
                        }
                      } catch (err) {
                        _iterator27.e(err);
                      } finally {
                        _iterator27.f();
                      }
                    }
                  }
                } catch (err) {
                  _iterator26.e(err);
                } finally {
                  _iterator26.f();
                }
              }
            } catch (err) {
              _iterator25.e(err);
            } finally {
              _iterator25.f();
            }
          }
        }, {
          key: "clone",
          value: function clone() {
            var e = new s(this.unified);

            var _iterator28 = _createForOfIteratorHelper(this.symbolLevels),
                _step28;

            try {
              for (_iterator28.s(); !(_step28 = _iterator28.n()).done;) {
                var t = _step28.value;
                e.symbolLevels.push(t.clone());
              }
            } catch (err) {
              _iterator28.e(err);
            } finally {
              _iterator28.f();
            }

            return e;
          }
        }, {
          key: "splitAfter",
          value: function splitAfter(e) {
            var t = this._getDisplayList(e.symbolLevel, e.zOrder, e.geometryType),
                o = t.length,
                n = e.indexFrom + e.indexCount;

            for (var _i16 = 0; _i16 < o; ++_i16) {
              var _o10 = t[_i16];

              if (_o10.geometryType === e.geometryType && n > _o10.indexFrom && n <= _o10.indexFrom + _o10.indexCount) {
                if (n < _o10.indexFrom + _o10.indexCount) {
                  var _e38 = new l();

                  _e38.geometryType = _o10.geometryType, _e38.materialKey = _o10.materialKey, _e38.indexFrom = n, _e38.indexCount = _o10.indexFrom + _o10.indexCount - n, t.splice(_i16 + 1, 0, _e38), _o10.indexCount = n - _o10.indexFrom;
                }

                return _i16;
              }
            }
          }
        }, {
          key: "_addToList",
          value: function _addToList(e, t) {
            var o = e.symbolLevel,
                n = e.zOrder,
                r = this._getDisplayList(o, n, e.geometryType),
                _s13 = null != t ? t : r.length - 1,
                m = _s13 >= 0 && _s13 < r.length ? r[_s13] : null;

            if (null === m || m.materialKey !== e.materialKey || m.indexFrom + m.indexCount !== e.indexFrom || this.unified && m.geometryType !== e.geometryType) {
              var _t21 = new l();

              _t21.indexFrom = e.indexFrom, _t21.indexCount = e.indexCount, _t21.materialKey = e.materialKey, _t21.geometryType = e.geometryType, i(r, _s13 + 1, 0, _t21);
            } else m.indexCount += e.indexCount;
          }
        }, {
          key: "_removeFromList",
          value: function _removeFromList(e) {
            var t = e.symbolLevel,
                o = e.zOrder,
                n = this._getDisplayList(t, o, e.geometryType),
                r = n.length;

            var _s14;

            for (var _t22 = 0; _t22 < r; ++_t22) {
              var _o11 = n[_t22];

              if (e.indexFrom + e.indexCount > _o11.indexFrom && e.indexFrom < _o11.indexFrom + _o11.indexCount && (!this.unified || _o11.geometryType === e.geometryType)) {
                _s14 = _t22;
                break;
              }
            }

            if (void 0 !== _s14) {
              var _t23 = n[_s14];
              if (e.indexFrom === _t23.indexFrom) return _t23.indexCount -= e.indexCount, _t23.indexFrom += e.indexCount, 0 === _t23.indexCount && i(n, _s14, 1), _s14 - 1;
              if (e.indexFrom + e.indexCount === _t23.indexFrom + _t23.indexCount) return _t23.indexCount -= e.indexCount, 0 === _t23.indexCount ? (i(n, _s14, 1), _s14 - 1) : _s14;
              {
                var _o12 = _t23.indexFrom,
                    _r20 = e.indexFrom - _t23.indexFrom,
                    _m = e.indexCount,
                    _y = _t23.indexFrom + _t23.indexCount - (e.indexFrom + e.indexCount);

                _t23.indexCount = _r20;

                var _d2 = new l();

                return _d2.geometryType = _t23.geometryType, _d2.materialKey = _t23.materialKey, _d2.indexFrom = _o12 + _r20 + _m, _d2.indexCount = _y, i(n, _s14 + 1, 0, _d2), _s14;
              }
            }

            return null;
          }
        }, {
          key: "_getDisplayList",
          value: function _getDisplayList(e, t, n) {
            var i;
            var r = this.symbolLevels.length;

            for (var _t24 = 0; _t24 < r; _t24++) {
              if (this.symbolLevels[_t24].symbolLevel === e) {
                i = this.symbolLevels[_t24];
                break;
              }
            }

            var _s15;

            i || (i = new d(), i.symbolLevel = e, this.symbolLevels.push(i));
            var l = i.zLevels.length;

            for (var _e39 = 0; _e39 < l; _e39++) {
              if (i.zLevels[_e39].zLevel === t) {
                _s15 = i.zLevels[_e39];
                break;
              }
            }

            var f;
            if (_s15 || (_s15 = new y(), _s15.geometryDPInfo = new m(), _s15.zLevel = t, i.zLevels.push(_s15)), this.unified) _s15.geometryDPInfo.unified || (_s15.geometryDPInfo.unified = []), f = _s15.geometryDPInfo.unified;else switch (n) {
              case _enums_js__WEBPACK_IMPORTED_MODULE_1__["WGLGeometryType"].FILL:
                _s15.geometryDPInfo.fill || (_s15.geometryDPInfo.fill = []), f = _s15.geometryDPInfo.fill;
                break;

              case _enums_js__WEBPACK_IMPORTED_MODULE_1__["WGLGeometryType"].LINE:
                _s15.geometryDPInfo.line || (_s15.geometryDPInfo.line = []), f = _s15.geometryDPInfo.line;
                break;

              case _enums_js__WEBPACK_IMPORTED_MODULE_1__["WGLGeometryType"].MARKER:
                _s15.geometryDPInfo.marker || (_s15.geometryDPInfo.marker = []), f = _s15.geometryDPInfo.marker;
                break;

              case _enums_js__WEBPACK_IMPORTED_MODULE_1__["WGLGeometryType"].TEXT:
                _s15.geometryDPInfo.text || (_s15.geometryDPInfo.text = []), f = _s15.geometryDPInfo.text;
                break;

              case _enums_js__WEBPACK_IMPORTED_MODULE_1__["WGLGeometryType"].LABEL:
                _s15.geometryDPInfo.label || (_s15.geometryDPInfo.label = []), f = _s15.geometryDPInfo.label;
                break;

              default:
                console.error("Trying to add a record with geometry type '" + n + "'.");
            }
            return f;
          }
        }, {
          key: "getDPInfoType",
          value: function getDPInfoType(e) {
            if (this.unified) return "unified";

            switch (e) {
              case _enums_js__WEBPACK_IMPORTED_MODULE_1__["WGLGeometryType"].FILL:
                return "fill";

              case _enums_js__WEBPACK_IMPORTED_MODULE_1__["WGLGeometryType"].LINE:
                return "line";

              case _enums_js__WEBPACK_IMPORTED_MODULE_1__["WGLGeometryType"].MARKER:
                return "marker";

              case _enums_js__WEBPACK_IMPORTED_MODULE_1__["WGLGeometryType"].TEXT:
                return "text";

              case _enums_js__WEBPACK_IMPORTED_MODULE_1__["WGLGeometryType"].LABEL:
                return "label";

              default:
                return void n.error("DisplayList: Tried to convert unknown geometryType: ".concat(e));
            }
          }
        }]);

        return s;
      }();

      var l = /*#__PURE__*/function () {
        function l() {
          _classCallCheck(this, l);

          this.materialKey = null, this.indexFrom = 0, this.indexCount = 0;
        }

        _createClass(l, [{
          key: "clone",
          value: function clone() {
            var e = new l();
            return e.geometryType = this.geometryType, e.materialKey = this.materialKey, e.indexFrom = this.indexFrom, e.indexCount = this.indexCount, e;
          }
        }]);

        return l;
      }();

      var m = /*#__PURE__*/function () {
        function m() {
          _classCallCheck(this, m);

          this.fill = null, this.line = null, this.marker = null, this.text = null, this.label = null, this.unified = null;
        }

        _createClass(m, [{
          key: "clone",
          value: function clone() {
            var e = new m();
            return e.fill = this.fill && this.fill.map(function (e) {
              return e.clone();
            }), e.line = this.line && this.line.map(function (e) {
              return e.clone();
            }), e.marker = this.marker && this.marker.map(function (e) {
              return e.clone();
            }), e.text = this.text && this.text.map(function (e) {
              return e.clone();
            }), e.label = this.label && this.label.map(function (e) {
              return e.clone();
            }), e.unified = this.unified && this.unified.map(function (e) {
              return e.clone();
            }), e;
          }
        }]);

        return m;
      }();

      var y = /*#__PURE__*/function () {
        function y() {
          _classCallCheck(this, y);

          this.geometryDPInfo = new m();
        }

        _createClass(y, [{
          key: "clone",
          value: function clone() {
            var e = new y();
            return e.zLevel = this.zLevel, e.geometryDPInfo = this.geometryDPInfo.clone(), e;
          }
        }]);

        return y;
      }();

      var d = /*#__PURE__*/function () {
        function d() {
          _classCallCheck(this, d);

          this.zLevels = [];
        }

        _createClass(d, [{
          key: "clone",
          value: function clone() {
            var e = new d();
            e.symbolLevel = this.symbolLevel;

            var _iterator29 = _createForOfIteratorHelper(this.zLevels),
                _step29;

            try {
              for (_iterator29.s(); !(_step29 = _iterator29.n()).done;) {
                var t = _step29.value;
                e.zLevels.push(t.clone());
              }
            } catch (err) {
              _iterator29.e(err);
            } finally {
              _iterator29.f();
            }

            return e;
          }
        }]);

        return d;
      }();
      /* harmony default export */


      __webpack_exports__["default"] = s;
      /***/
    },

    /***/
    "by2V":
    /*!***********************************************************************!*\
      !*** ./node_modules/@arcgis/core/views/2d/engine/FeatureContainer.js ***!
      \***********************************************************************/

    /*! exports provided: FeatureContainer */

    /***/
    function by2V(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "FeatureContainer", function () {
        return l;
      });
      /* harmony import */


      var _core_promiseUtils_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ../../../core/promiseUtils.js */
      "9MzC");
      /* harmony import */


      var _geometry_support_aaBoundingRect_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ../../../geometry/support/aaBoundingRect.js */
      "kYAx");
      /* harmony import */


      var _core_Queue_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ../../../core/Queue.js */
      "jKdI");
      /* harmony import */


      var _webgl_TileData_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./webgl/TileData.js */
      "fZs+");
      /* harmony import */


      var _webgl_WGLTile_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ./webgl/WGLTile.js */
      "KFVX");
      /* harmony import */


      var _webgl_AttributeStoreView_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ./webgl/AttributeStoreView.js */
      "X0J2");
      /* harmony import */


      var _webgl_TileContainer_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ./webgl/TileContainer.js */
      "ZyIX");
      /* harmony import */


      var _webgl_WGLRendererInfo_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! ./webgl/WGLRendererInfo.js */
      "Vmjh");
      /*
      All material copyright ESRI, All Rights Reserved, unless otherwise specified.
      See https://js.arcgis.com/4.18/esri/copyright.txt for details.
      */


      var l = /*#__PURE__*/function (_webgl_TileContainer_) {
        _inherits(l, _webgl_TileContainer_);

        var _super4 = _createSuper(l);

        function l(e) {
          var _this9;

          _classCallCheck(this, l);

          _this9 = _super4.call(this, e), _this9._rendererInfo = new _webgl_WGLRendererInfo_js__WEBPACK_IMPORTED_MODULE_7__["WGLRendererInfo"](), _this9._materialItemsRequestQueue = new _core_Queue_js__WEBPACK_IMPORTED_MODULE_2__["default"](), _this9.attributeView = new _webgl_AttributeStoreView_js__WEBPACK_IMPORTED_MODULE_5__["AttributeStoreView"]();
          return _this9;
        }

        _createClass(l, [{
          key: "destroy",
          value: function destroy() {
            this.removeAllChildren(), this.children.forEach(function (e) {
              return e.destroy();
            }), this.attributeView.destroy(), this._materialItemsRequestQueue.clear();
          }
        }, {
          key: "setRendererInfo",
          value: function setRendererInfo(e, t, r) {
            this._rendererInfo.setInfo(e, t, r), this.requestRender();
          }
        }, {
          key: "getMaterialItems",
          value: function () {
            var _getMaterialItems = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee2(t, r) {
              var s;
              return regeneratorRuntime.wrap(function _callee2$(_context2) {
                while (1) {
                  switch (_context2.prev = _context2.next) {
                    case 0:
                      if (!(!t || 0 === t.length)) {
                        _context2.next = 2;
                        break;
                      }

                      return _context2.abrupt("return", null);

                    case 2:
                      s = Object(_core_promiseUtils_js__WEBPACK_IMPORTED_MODULE_0__["createResolver"])();
                      return _context2.abrupt("return", (this._materialItemsRequestQueue.push({
                        items: t,
                        abortOptions: r,
                        resolver: s
                      }), this.requestRender(), s.promise));

                    case 4:
                    case "end":
                      return _context2.stop();
                  }
                }
              }, _callee2, this);
            }));

            function getMaterialItems(_x3, _x4) {
              return _getMaterialItems.apply(this, arguments);
            }

            return getMaterialItems;
          }()
        }, {
          key: "onTileData",
          value: function onTileData(e, t) {
            if (t.addOrUpdate && "tileDisplayData" in t.addOrUpdate) e.setData(t);else {
              var r = t.addOrUpdate && _webgl_TileData_js__WEBPACK_IMPORTED_MODULE_3__["TileData"].decode(t.addOrUpdate),
                  s = _objectSpread(_objectSpread({}, t), {}, {
                addOrUpdate: r
              });

              e.setData(s);
            }
            this.contains(e) || this.addChild(e), this.requestRender();
          }
        }, {
          key: "onTileError",
          value: function onTileError(e) {
            e.clear(), this.contains(e) || this.addChild(e);
          }
        }, {
          key: "doRender",
          value: function doRender(e) {
            if (e.context.capabilities.textureFloat, e.context.capabilities.vao, this._materialItemsRequestQueue.length > 0) {
              var t = this._materialItemsRequestQueue.pop();

              for (; t;) {
                this._processMaterialItemRequest(e, t), t = this._materialItemsRequestQueue.pop();
              }
            }

            _get(_getPrototypeOf(l.prototype), "doRender", this).call(this, e);
          }
        }, {
          key: "renderChildren",
          value: function renderChildren(e) {
            var _iterator30 = _createForOfIteratorHelper(this.children),
                _step30;

            try {
              for (_iterator30.s(); !(_step30 = _iterator30.n()).done;) {
                var t = _step30.value;
                t.commitChanges(e);
              }
            } catch (err) {
              _iterator30.e(err);
            } finally {
              _iterator30.f();
            }

            this._rendererInfo.update(e.state), _get(_getPrototypeOf(l.prototype), "renderChildren", this).call(this, e);
          }
        }, {
          key: "createTile",
          value: function createTile(e) {
            var t = this._tileInfoView.getTileBounds(Object(_geometry_support_aaBoundingRect_js__WEBPACK_IMPORTED_MODULE_1__["create"])(), e);

            return new _webgl_WGLTile_js__WEBPACK_IMPORTED_MODULE_4__["WGLTile"](e, t);
          }
        }, {
          key: "destroyTile",
          value: function destroyTile(e) {
            this.removeChild(e), e.destroy();
          }
        }, {
          key: "createRenderParams",
          value: function createRenderParams(e) {
            return _objectSpread(_objectSpread({}, _get(_getPrototypeOf(l.prototype), "createRenderParams", this).call(this, e)), {}, {
              rendererInfo: this._rendererInfo,
              attributeView: this.attributeView
            });
          }
        }, {
          key: "_processMaterialItemRequest",
          value: function _processMaterialItemRequest(e, _ref) {
            var _this10 = this;

            var r = _ref.items,
                s = _ref.abortOptions,
                i = _ref.resolver;
            var o = e.painter,
                a = e.pixelRatio,
                n = r.map(function (e) {
              return o.textureManager.rasterizeItem(e.symbol, a, e.glyphIds, s);
            });
            Object(_core_promiseUtils_js__WEBPACK_IMPORTED_MODULE_0__["all"])(n).then(function (e) {
              if (!_this10.stage) return void i.reject();
              var t = e.map(function (e, t) {
                return {
                  id: r[t].id,
                  mosaicItem: e
                };
              });
              i.resolve(t);
            }, i.reject);
          }
        }]);

        return l;
      }(_webgl_TileContainer_js__WEBPACK_IMPORTED_MODULE_6__["default"]);
      /***/

    },

    /***/
    "fZs+":
    /*!*********************************************************************!*\
      !*** ./node_modules/@arcgis/core/views/2d/engine/webgl/TileData.js ***!
      \*********************************************************************/

    /*! exports provided: TileData */

    /***/
    function fZs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "TileData", function () {
        return m;
      });
      /* harmony import */


      var _enums_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ./enums.js */
      "yE7X");
      /* harmony import */


      var _Utils_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./Utils.js */
      "yN2G");
      /* harmony import */


      var _MemoryRequirements_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./MemoryRequirements.js */
      "FA+c");
      /* harmony import */


      var _TileBufferData_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./TileBufferData.js */
      "ahbm");
      /* harmony import */


      var _WGLDisplayRecord_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ./WGLDisplayRecord.js */
      "opKs");
      /* harmony import */


      var _TileDisplayData_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ./TileDisplayData.js */
      "ZnvS");
      /* harmony import */


      var _util_Writer_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ./util/Writer.js */
      "PeSW");
      /* harmony import */


      var _mesh_MeshData_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! ./mesh/MeshData.js */
      "acOm");
      /* harmony import */


      var _mesh_VertexBuffer_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! ./mesh/VertexBuffer.js */
      "2vGY");
      /*
      All material copyright ESRI, All Rights Reserved, unless otherwise specified.
      See https://js.arcgis.com/4.18/esri/copyright.txt for details.
      */


      var u = new _MemoryRequirements_js__WEBPACK_IMPORTED_MODULE_2__["default"](),
          c = new _MemoryRequirements_js__WEBPACK_IMPORTED_MODULE_2__["default"]();

      function p(e, r) {
        var i = {};

        for (var s in e) {
          var a = {
            data: Object(_Utils_js__WEBPACK_IMPORTED_MODULE_1__["allocateTypedArrayBuffer"])(r, e[s]),
            stride: e[s]
          };
          i[s] = a;
        }

        return i;
      }

      var m = /*#__PURE__*/function () {
        function m() {
          _classCallCheck(this, m);

          this.tileDisplayData = null, this.tileBufferData = null;
        }

        _createClass(m, [{
          key: "reshuffle",
          value: function reshuffle() {
            u.reset();
            var e = Object(_TileDisplayData_js__WEBPACK_IMPORTED_MODULE_5__["groupRecordsByGeometryType"])(this.tileDisplayData.displayObjects);

            var _iterator31 = _createForOfIteratorHelper(e),
                _step31;

            try {
              for (_iterator31.s(); !(_step31 = _iterator31.n()).done;) {
                var _t26 = _step31.value;

                var _iterator34 = _createForOfIteratorHelper(_t26),
                    _step34;

                try {
                  for (_iterator34.s(); !(_step34 = _iterator34.n()).done;) {
                    var _e43 = _step34.value;
                    _e43 && u.needMore(_e43.geometryType, _e43.meshData ? _e43.meshData.vertexCount : _e43.vertexCount, _e43.meshData ? _e43.meshData.indexData.length : _e43.indexCount);
                  }
                } catch (err) {
                  _iterator34.e(err);
                } finally {
                  _iterator34.f();
                }
              }
            } catch (err) {
              _iterator31.e(err);
            } finally {
              _iterator31.f();
            }

            var i = e.length,
                a = new _TileBufferData_js__WEBPACK_IMPORTED_MODULE_3__["default"]();

            for (var _e40 = 0; _e40 < i; ++_e40) {
              a.geometries[_e40].indexBuffer = new Uint32Array(Math.round(1.5 * u.indicesFor(_e40)));
              var r = [];

              for (var t in this.tileBufferData.geometries[_e40].vertexBuffer) {
                r.push(this.tileBufferData.geometries[_e40].vertexBuffer[t].stride);
              }

              var _i17 = m._computeVertexAlignment(r),
                  s = Math.round(1.5 * u.verticesFor(_e40)),
                  o = m._align(s, _i17);

              for (var _r21 in this.tileBufferData.geometries[_e40].vertexBuffer) {
                var _i18 = this.tileBufferData.geometries[_e40].vertexBuffer[_r21].stride;
                a.geometries[_e40].vertexBuffer[_r21] = {
                  stride: _i18,
                  data: Object(_Utils_js__WEBPACK_IMPORTED_MODULE_1__["allocateTypedArrayBuffer"])(o, _i18)
                };
              }
            }

            c.reset(), this.tileDisplayData.displayList.clear();

            for (var _t25 = 0; _t25 < i; ++_t25) {
              var _i19 = e[_t25];

              var _iterator32 = _createForOfIteratorHelper(_i19),
                  _step32;

              try {
                for (_iterator32.s(); !(_step32 = _iterator32.n()).done;) {
                  var _e41 = _step32.value;
                  if (_e41.meshData) _e41.writeMeshDataToBuffers(c.verticesFor(_t25), a.geometries[_t25].vertexBuffer, c.indicesFor(_t25), a.geometries[_t25].indexBuffer), _e41.meshData = null;else {
                    var _i20 = this.tileBufferData.geometries[_t25].vertexBuffer,
                        _s16 = this.tileBufferData.geometries[_t25].indexBuffer,
                        _o13 = a.geometries[_t25].vertexBuffer,
                        n = a.geometries[_t25].indexBuffer,
                        f = c.verticesFor(_t25),
                        l = c.indicesFor(_t25);
                    Object(_Utils_js__WEBPACK_IMPORTED_MODULE_1__["copyMeshData"])(f, l, _o13, n, _e41, _i20, _s16), _e41.vertexFrom = f, _e41.indexFrom = l;
                  }
                  c.needMore(_t25, _e41.vertexCount, _e41.indexCount);
                }
              } catch (err) {
                _iterator32.e(err);
              } finally {
                _iterator32.f();
              }

              this.tileDisplayData.displayList.unified || this.tileDisplayData.displayList.addToList(_i19);
            }

            if (this.tileDisplayData.displayList.unified) {
              var _iterator33 = _createForOfIteratorHelper(this.tileDisplayData.displayObjects),
                  _step33;

              try {
                for (_iterator33.s(); !(_step33 = _iterator33.n()).done;) {
                  var _e42 = _step33.value;
                  this.tileDisplayData.displayList.addToList(_e42.displayRecords);
                }
              } catch (err) {
                _iterator33.e(err);
              } finally {
                _iterator33.f();
              }
            }

            this.tileBufferData = a;
          }
        }, {
          key: "reshuffleBulkAdd",
          value: function reshuffleBulkAdd(i, a, o) {
            var n = i.addOrUpdate.tileDisplayData.displayObjects,
                f = this.tileDisplayData.displayObjects;
            u.reset();

            for (var _e44 = 0; _e44 < f.length; _e44++) {
              var t = f[_e44];

              for (var _e45 = 0; _e45 < t.displayRecords.length; _e45++) {
                var r = t.displayRecords[_e45];
                u.needMore(r.geometryType, r.vertexCount, r.indexCount);
              }
            }

            for (var _e46 = a; _e46 < n.length; _e46++) {
              var _t27 = n[_e46];

              for (var _r22 = _e46 === a ? o : 0; _r22 < _t27.displayRecords.length; _r22++) {
                var _e47 = _t27.displayRecords[_r22];
                u.needMore(_e47.geometryType, _e47.vertexCount, _e47.indexCount);
              }
            }

            var l = new _TileBufferData_js__WEBPACK_IMPORTED_MODULE_3__["default"]();

            for (var _e48 = 0; _e48 < 5; _e48++) {
              l.geometries[_e48].indexBuffer = new Uint32Array(Math.round(1.5 * u.indicesFor(_e48)));
              var _r23 = [],
                  _i21 = this.tileBufferData.geometries[_e48].vertexBuffer;

              for (var _e49 in _i21) {
                _r23.push(_i21[_e49].stride);
              }

              var s = m._computeVertexAlignment(_r23),
                  _a4 = Math.round(1.5 * u.verticesFor(_e48)),
                  _o14 = m._align(_a4, s);

              for (var _r24 in _i21) {
                var _s17 = _i21[_r24].stride,
                    _a5 = Object(_Utils_js__WEBPACK_IMPORTED_MODULE_1__["allocateTypedArrayBuffer"])(_o14, _s17);

                l.geometries[_e48].vertexBuffer[_r24] = {
                  stride: _s17,
                  data: _a5
                };
              }
            }

            c.reset(), this.tileDisplayData.displayList.clear();

            for (var _e50 = 0; _e50 < f.length; _e50++) {
              var _t28 = f[_e50];

              for (var _e51 = 0; _e51 < _t28.displayRecords.length; _e51++) {
                var _i22 = _t28.displayRecords[_e51],
                    _s18 = _i22.geometryType,
                    _a6 = this.tileBufferData.geometries[_s18].vertexBuffer,
                    _o15 = this.tileBufferData.geometries[_s18].indexBuffer,
                    _n10 = l.geometries[_s18].vertexBuffer,
                    _f = l.geometries[_s18].indexBuffer,
                    _d3 = c.verticesFor(_s18),
                    _u = c.indicesFor(_s18);

                Object(_Utils_js__WEBPACK_IMPORTED_MODULE_1__["copyMeshData"])(_d3, _u, _n10, _f, _i22, _a6, _o15), _i22.vertexFrom = _d3, _i22.indexFrom = _u, c.needMore(_s18, _i22.vertexCount, _i22.indexCount), this.tileDisplayData.displayList.addToList(_i22);
              }
            }

            var d = this.tileDisplayData.displayObjectRegistry;

            if (0 !== o) {
              var _t29 = n[a];

              for (var _i23 = 0; _i23 < o; _i23++) {
                var _s19 = _t29.displayRecords[_i23];

                if (d.get(_t29.id)) {
                  if (_s19.geometryType !== _enums_js__WEBPACK_IMPORTED_MODULE_0__["WGLGeometryType"].FILL && _s19.geometryType !== _enums_js__WEBPACK_IMPORTED_MODULE_0__["WGLGeometryType"].LINE) continue;
                }

                var _a7 = _s19.geometryType,
                    _o16 = this.tileBufferData.geometries[_a7].vertexBuffer,
                    _n11 = this.tileBufferData.geometries[_a7].indexBuffer,
                    _f2 = l.geometries[_a7].vertexBuffer,
                    _u2 = l.geometries[_a7].indexBuffer,
                    _p = c.verticesFor(_a7),
                    _m4 = c.indicesFor(_a7);

                Object(_Utils_js__WEBPACK_IMPORTED_MODULE_1__["copyMeshData"])(_p, _m4, _f2, _u2, _s19, _o16, _n11), _s19.vertexFrom = _p, _s19.indexFrom = _m4, c.needMore(_a7, _s19.vertexCount, _s19.indexCount), this.tileDisplayData.displayList.addToList(_s19);
              }
            }

            for (var _t30 = a; _t30 < n.length; _t30++) {
              var _s20 = n[_t30],
                  _f3 = _t30 === a ? o : 0,
                  _u3 = d.get(_s20.id);

              for (var _t31 = _f3; _t31 < _s20.displayRecords.length; _t31++) {
                var _a8 = _s20.displayRecords[_t31];

                if (_u3) {
                  if (_a8.geometryType !== _enums_js__WEBPACK_IMPORTED_MODULE_0__["WGLGeometryType"].FILL && _a8.geometryType !== _enums_js__WEBPACK_IMPORTED_MODULE_0__["WGLGeometryType"].LINE) continue;

                  _u3.displayRecords.push(_a8);
                }

                var _o17 = _a8.geometryType,
                    _n12 = i.addOrUpdate.tileBufferData.geometries[_o17],
                    _f4 = _n12.vertexBuffer,
                    _d4 = _n12.indexBuffer,
                    _p2 = l.geometries[_o17].vertexBuffer,
                    _m5 = l.geometries[_o17].indexBuffer,
                    D = c.verticesFor(_o17),
                    y = c.indicesFor(_o17);
                Object(_Utils_js__WEBPACK_IMPORTED_MODULE_1__["copyMeshData"])(D, y, _p2, _m5, _a8, _f4, _d4), _a8.vertexFrom = D, _a8.indexFrom = y, c.needMore(_o17, _a8.vertexCount, _a8.indexCount), this.tileDisplayData.displayList.addToList(_a8);
              }

              _u3 || (d.set(_s20.id, _s20), this.tileDisplayData.displayObjects.push(_s20));
            }

            this.tileBufferData = l;
          }
        }, {
          key: "getStrides",
          value: function getStrides() {
            var e = [];

            for (var t = 0; t < this.tileBufferData.geometries.length; ++t) {
              var r = this.tileBufferData.geometries[t];
              e[t] = {};

              for (var i in r.vertexBuffer) {
                e[t][i] = r.vertexBuffer[i].stride;
              }
            }

            return e;
          }
        }, {
          key: "clone",
          value: function clone() {
            var e = new m();
            return e.tileBufferData = this.tileBufferData.clone(), e.tileDisplayData = this.tileDisplayData.clone(), e;
          }
        }, {
          key: "_guessSize",
          value: function _guessSize() {
            var e = this.tileDisplayData.displayObjects,
                t = Math.min(e.length, 4);
            var r = 0;

            for (var i = 0; i < t; i++) {
              r = Math.max(r, e[i].displayRecords.length);
            }

            return 2 * (12 * e.length + e.length * r * 40);
          }
        }, {
          key: "serialize",
          value: function serialize() {
            var e = this.tileBufferData.serialize(),
                t = this.tileBufferData.getBuffers(),
                r = this.tileDisplayData.serialize(new _util_Writer_js__WEBPACK_IMPORTED_MODULE_6__["default"](Int32Array, this._guessSize())).buffer();
            return t.push(r), {
              result: {
                displayData: r,
                bufferData: e
              },
              transferList: t
            };
          }
        }], [{
          key: "decode",
          value: function decode(e) {
            var t = _mesh_MeshData_js__WEBPACK_IMPORTED_MODULE_7__["MeshData"].deserializeDisplayObjects(e),
                r = {};

            for (var _t32 in e.vertexBuffersMap) {
              r[_t32] = _mesh_VertexBuffer_js__WEBPACK_IMPORTED_MODULE_8__["VertexBuffers"].decode(e.vertexBuffersMap[_t32]);
            }

            return m.fromMeshData({
              displayObjects: t,
              vertexBuffersMap: r
            });
          }
        }, {
          key: "fromMeshData",
          value: function fromMeshData(e) {
            var t = new m(),
                r = new _TileDisplayData_js__WEBPACK_IMPORTED_MODULE_5__["default"](),
                i = new _TileBufferData_js__WEBPACK_IMPORTED_MODULE_3__["default"]();
            r.displayObjects = e.displayObjects;

            for (var _t33 in e.vertexBuffersMap) {
              var _r25 = e.vertexBuffersMap[_t33];
              i.geometries[_t33].indexBuffer = _r25.indexBuffer, i.geometries[_t33].vertexBuffer = _r25.namedBuffers;
            }

            return t.tileDisplayData = r, t.tileBufferData = i, t;
          }
        }, {
          key: "bind",
          value: function bind(e, t) {
            var r = new m();
            return r.tileDisplayData = e, r.tileBufferData = t, r;
          }
        }, {
          key: "create",
          value: function create(e, t) {
            var r = new m();
            r.tileDisplayData = new _TileDisplayData_js__WEBPACK_IMPORTED_MODULE_5__["default"](), r.tileDisplayData.displayObjects = e;
            var i = [0, 0, 0, 0, 0],
                n = [0, 0, 0, 0, 0],
                f = [[], [], [], [], []];

            var _iterator35 = _createForOfIteratorHelper(e),
                _step35;

            try {
              for (_iterator35.s(); !(_step35 = _iterator35.n()).done;) {
                var _t35 = _step35.value;

                var _iterator36 = _createForOfIteratorHelper(_t35.displayRecords),
                    _step36;

                try {
                  for (_iterator36.s(); !(_step36 = _iterator36.n()).done;) {
                    var _e53 = _step36.value;
                    f[_e53.geometryType].push(_e53), i[_e53.geometryType] += _e53.meshData.vertexCount, n[_e53.geometryType] += _e53.meshData.indexData.length;
                  }
                } catch (err) {
                  _iterator36.e(err);
                } finally {
                  _iterator36.f();
                }
              }
            } catch (err) {
              _iterator35.e(err);
            } finally {
              _iterator35.f();
            }

            var l = new _TileBufferData_js__WEBPACK_IMPORTED_MODULE_3__["default"](),
                d = function (e) {
              return [e.fill || {}, e.line || {}, e.icon || {}, e.text || {}, e.label || {}];
            }(t);

            for (var _e52 = 0; _e52 < 5; _e52++) {
              var _t34 = new Uint32Array(n[_e52]),
                  _r26 = p(d[_e52], i[_e52]);

              _WGLDisplayRecord_js__WEBPACK_IMPORTED_MODULE_4__["default"].writeAllMeshDataToBuffers(f[_e52], _r26, _t34), l.geometries[_e52] = {
                indexBuffer: _t34,
                vertexBuffer: _r26
              };
            }

            return r.tileBufferData = l, r;
          }
        }, {
          key: "_align",
          value: function _align(e, t) {
            var r = e % t;
            return 0 === r ? e : e + (t - r);
          }
        }, {
          key: "_computeVertexAlignment",
          value: function _computeVertexAlignment(e) {
            var t = !1,
                r = !1;

            var _iterator37 = _createForOfIteratorHelper(e),
                _step37;

            try {
              for (_iterator37.s(); !(_step37 = _iterator37.n()).done;) {
                var i = _step37.value;
                i % 4 == 2 ? t = !0 : i % 4 != 0 && (r = !0);
              }
            } catch (err) {
              _iterator37.e(err);
            } finally {
              _iterator37.f();
            }

            return r ? 4 : t ? 2 : 1;
          }
        }]);

        return m;
      }();
      /***/

    },

    /***/
    "gzK8":
    /*!**********************************************************************************************************!*\
      !*** ./node_modules/@arcgis/core/views/2d/layers/features/tileRenderers/support/visualVariablesUtils.js ***!
      \**********************************************************************************************************/

    /*! exports provided: convertColorVariable, convertVisualVariables, getVisualVariableSizeValueRepresentationRatio, getVisualVariablesFields, normalizeSizeElement, normalizeSizeStops, stopToSizeStop */

    /***/
    function gzK8(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "convertColorVariable", function () {
        return y;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "convertVisualVariables", function () {
        return m;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "getVisualVariableSizeValueRepresentationRatio", function () {
        return r;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "getVisualVariablesFields", function () {
        return p;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "normalizeSizeElement", function () {
        return c;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "normalizeSizeStops", function () {
        return u;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "stopToSizeStop", function () {
        return a;
      });
      /* harmony import */


      var _core_maybe_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ../../../../../../core/maybe.js */
      "srIe");
      /* harmony import */


      var _core_screenUtils_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ../../../../../../core/screenUtils.js */
      "qRWG");
      /* harmony import */


      var _engine_webgl_definitions_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ../../../../engine/webgl/definitions.js */
      "jIHu");
      /* harmony import */


      var _engine_webgl_enums_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ../../../../engine/webgl/enums.js */
      "yE7X");
      /* harmony import */


      var _engine_webgl_color_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ../../../../engine/webgl/color.js */
      "qaIE");
      /* harmony import */


      var _engine_webgl_visualVariablesUtils_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ../../../../engine/webgl/visualVariablesUtils.js */
      "NIRN");
      /*
      All material copyright ESRI, All Rights Reserved, unless otherwise specified.
      See https://js.arcgis.com/4.18/esri/copyright.txt for details.
      */


      function r(e, t) {
        if (!e || !t) return e;

        switch (t) {
          case "radius":
          case "distance":
            return 2 * e;

          case "diameter":
          case "width":
            return e;

          case "area":
            return Math.sqrt(e);
        }

        return e;
      }

      function a(e) {
        return {
          value: e.value,
          size: Object(_core_screenUtils_js__WEBPACK_IMPORTED_MODULE_1__["toPt"])(e.size)
        };
      }

      function u(e) {
        return e.map(function (e) {
          return a(e);
        });
      }

      function c(e) {
        if ("string" == typeof e || "number" == typeof e) return Object(_core_screenUtils_js__WEBPACK_IMPORTED_MODULE_1__["toPt"])(e);
        var s = e;
        return {
          type: "size",
          expression: s.expression,
          stops: u(s.stops)
        };
      }

      function p(e) {
        var t = e && e.length > 0 ? {} : null;
        return t && e.forEach(function (e) {
          var s = e.type;
          e.field && (t[s] = e.field);
        }), t;
      }

      var f = function f(e) {
        var t = [],
            o = [],
            i = u(e),
            l = i.length;

        for (var _e54 = 0; _e54 < 6; _e54++) {
          var _r27 = i[Math.min(_e54, l - 1)];
          t.push(_r27.value), o.push(null == _r27.size ? _engine_webgl_definitions_js__WEBPACK_IMPORTED_MODULE_2__["NAN_MAGIC_NUMBER"] : Object(_core_screenUtils_js__WEBPACK_IMPORTED_MODULE_1__["pt2px"])(_r27.size));
        }

        return {
          values: new Float32Array(t),
          sizes: new Float32Array(o)
        };
      };

      function m(e) {
        var t = e && e.length > 0 ? {} : null,
            s = t ? {} : null;
        if (!t) return {
          vvFields: t,
          vvRanges: s
        };

        var _iterator38 = _createForOfIteratorHelper(e),
            _step38;

        try {
          for (_iterator38.s(); !(_step38 = _iterator38.n()).done;) {
            var n = _step38.value;

            if (n.field && (t[n.type] = n.field), "size" === n.type) {
              s.size || (s.size = {});
              var _e55 = n;

              switch (Object(_engine_webgl_visualVariablesUtils_js__WEBPACK_IMPORTED_MODULE_5__["getTypeOfSizeVisualVariable"])(_e55)) {
                case _engine_webgl_enums_js__WEBPACK_IMPORTED_MODULE_3__["WGLVVFlag"].SIZE_MINMAX_VALUE:
                  s.size.minMaxValue = {
                    minDataValue: _e55.minDataValue,
                    maxDataValue: _e55.maxDataValue,
                    minSize: c(_e55.minSize),
                    maxSize: c(_e55.maxSize)
                  };
                  break;

                case _engine_webgl_enums_js__WEBPACK_IMPORTED_MODULE_3__["WGLVVFlag"].SIZE_SCALE_STOPS:
                  s.size.scaleStops = {
                    stops: u(_e55.stops)
                  };
                  break;

                case _engine_webgl_enums_js__WEBPACK_IMPORTED_MODULE_3__["WGLVVFlag"].SIZE_FIELD_STOPS:
                  if (_e55.levels) {
                    var _t36 = {};

                    for (var _s21 in _e55.levels) {
                      _t36[_s21] = f(_e55.levels[_s21]);
                    }

                    s.size.fieldStops = {
                      type: "level-dependent",
                      levels: _t36
                    };
                  } else s.size.fieldStops = _objectSpread({
                    type: "static"
                  }, f(_e55.stops));

                  break;

                case _engine_webgl_enums_js__WEBPACK_IMPORTED_MODULE_3__["WGLVVFlag"].SIZE_UNIT_VALUE:
                  s.size.unitValue = {
                    unit: _e55.valueUnit,
                    valueRepresentation: _e55.valueRepresentation
                  };
              }
            } else if ("color" === n.type) s.color = y(n);else if ("opacity" === n.type) s.opacity = v(n);else if ("rotation" === n.type) {
              var _e56 = n;
              s.rotation = {
                type: _e56.rotationType
              };
            }
          }
        } catch (err) {
          _iterator38.e(err);
        } finally {
          _iterator38.f();
        }

        return {
          vvFields: t,
          vvRanges: s
        };
      }

      function v(e) {
        var t = {
          values: [0, 0, 0, 0, 0, 0, 0, 0],
          opacities: [0, 0, 0, 0, 0, 0, 0, 0]
        };

        if ("string" == typeof e.field) {
          if (!e.stops) return null;
          {
            if (e.stops.length > 8) return null;
            var s = e.stops;

            for (var _e57 = 0; _e57 < 8; ++_e57) {
              var n = s[Math.min(_e57, s.length - 1)];
              t.values[_e57] = n.value, t.opacities[_e57] = n.opacity;
            }
          }
        } else {
          if (!(e.stops && e.stops.length >= 0)) return null;
          {
            var _s22 = e.stops && e.stops.length >= 0 && e.stops[0].opacity;

            for (var _e58 = 0; _e58 < 8; _e58++) {
              t.values[_e58] = 1 / 0, t.opacities[_e58] = _s22;
            }
          }
        }

        return t;
      }

      function g(e, t, s) {
        e[4 * t + 0] = s.r / 255, e[4 * t + 1] = s.g / 255, e[4 * t + 2] = s.b / 255, e[4 * t + 3] = s.a;
      }

      function y(t) {
        if (Object(_core_maybe_js__WEBPACK_IMPORTED_MODULE_0__["isNone"])(t)) return null;
        if (t.normalizationField) return null;
        var s = {
          field: null,
          values: [0, 0, 0, 0, 0, 0, 0, 0],
          colors: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
        };

        if ("string" == typeof t.field) {
          if (!t.stops) return null;
          {
            if (t.stops.length > 8) return null;
            s.field = t.field;
            var _e59 = t.stops;

            for (var _t37 = 0; _t37 < 8; ++_t37) {
              var n = _e59[Math.min(_t37, _e59.length - 1)];

              s.values[_t37] = n.value, g(s.colors, _t37, n.color);
            }
          }
        } else {
          if (!(t.stops && t.stops.length >= 0)) return null;
          {
            var _e60 = t.stops && t.stops.length >= 0 && t.stops[0].color;

            for (var _t38 = 0; _t38 < 8; _t38++) {
              s.values[_t38] = 1 / 0, g(s.colors, _t38, _e60);
            }
          }
        }

        for (var _e61 = 0; _e61 < 32; _e61 += 4) {
          Object(_engine_webgl_color_js__WEBPACK_IMPORTED_MODULE_4__["premultiplyAlpha"])(s.colors, _e61, !0);
        }

        return s;
      }
      /***/

    },

    /***/
    "l8tk":
    /*!***********************************************************************!*\
      !*** ./node_modules/@arcgis/core/views/2d/engine/webgl/util/debug.js ***!
      \***********************************************************************/

    /*! exports provided: DEBUG_ATTR_UPDATES, createDebugLogger */

    /***/
    function l8tk(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "DEBUG_ATTR_UPDATES", function () {
        return l;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "createDebugLogger", function () {
        return n;
      });
      /*
      All material copyright ESRI, All Rights Reserved, unless otherwise specified.
      See https://js.arcgis.com/4.18/esri/copyright.txt for details.
      */


      var n = function n(_n13, l) {
        return _n13 && function () {
          for (var _len2 = arguments.length, n = new Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
            n[_key2] = arguments[_key2];
          }

          return l.warn.apply(l, ["DEBUG:"].concat(n));
        } || function () {
          return null;
        };
      },
          l = !1;
      /***/

    },

    /***/
    "lx5q":
    /*!*********************************************************!*\
      !*** ./node_modules/@arcgis/core/core/CircularArray.js ***!
      \*********************************************************/

    /*! exports provided: default */

    /***/
    function lx5q(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony import */


      var _maybe_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ./maybe.js */
      "srIe");
      /*
      All material copyright ESRI, All Rights Reserved, unless otherwise specified.
      See https://js.arcgis.com/4.18/esri/copyright.txt for details.
      */

      /* harmony default export */


      __webpack_exports__["default"] = /*#__PURE__*/function () {
        function _class6() {
          var t = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : Number.POSITIVE_INFINITY;

          _classCallCheck(this, _class6);

          this.size = 0, this._start = 0, this.maxSize = t, this._buffer = isFinite(t) ? new Array(t) : [];
        }

        _createClass(_class6, [{
          key: "entries",
          get: function get() {
            return this._buffer;
          }
        }, {
          key: "enqueue",
          value: function enqueue(t) {
            if (this.size === this.maxSize) {
              var s = this._buffer[this._start];
              return this._buffer[this._start] = t, this._start = (this._start + 1) % this.maxSize, s;
            }

            return isFinite(this.maxSize) ? this._buffer[(this._start + this.size++) % this.maxSize] = t : this._buffer[this._start + this.size++] = t, null;
          }
        }, {
          key: "dequeue",
          value: function dequeue() {
            if (0 === this.size) return null;
            var t = this._buffer[this._start];
            return this._buffer[this._start] = null, this.size--, this._start = (this._start + 1) % this.maxSize, t;
          }
        }, {
          key: "clear",
          value: function clear() {
            for (; Object(_maybe_js__WEBPACK_IMPORTED_MODULE_0__["isSome"])(this.dequeue());) {
              ;
            }
          }
        }]);

        return _class6;
      }();
      /***/

    }
  }]);
})();
//# sourceMappingURL=default~layers-GeoRSSLayerView2D-js~layers-GraphicsLayerView2D-js~layers-ImageryLayerView2D-js~layer~f46dcc9f-es5.js.map