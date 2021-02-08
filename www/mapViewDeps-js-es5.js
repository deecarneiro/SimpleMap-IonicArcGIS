(function () {
  function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

  function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

  function _get(target, property, receiver) { if (typeof Reflect !== "undefined" && Reflect.get) { _get = Reflect.get; } else { _get = function _get(target, property, receiver) { var base = _superPropBase(target, property); if (!base) return; var desc = Object.getOwnPropertyDescriptor(base, property); if (desc.get) { return desc.get.call(receiver); } return desc.value; }; } return _get(target, property, receiver || target); }

  function _superPropBase(object, property) { while (!Object.prototype.hasOwnProperty.call(object, property)) { object = _getPrototypeOf(object); if (object === null) break; } return object; }

  function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

  function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }

  function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

  function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && Symbol.iterator in Object(iter)) return Array.from(iter); }

  function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }

  function _createForOfIteratorHelper(o, allowArrayLike) { var it; if (typeof Symbol === "undefined" || o[Symbol.iterator] == null) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e50) { throw _e50; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = o[Symbol.iterator](); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e51) { didErr = true; err = _e51; }, f: function f() { try { if (!normalCompletion && it["return"] != null) it["return"](); } finally { if (didErr) throw err; } } }; }

  function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

  function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

  function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

  function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

  function _iterableToArrayLimit(arr, i) { if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr))) return; var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

  function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

  function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

  function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

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

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["mapViewDeps-js"], {
    /***/
    "0Ht6":
    /*!*************************************************************************!*\
      !*** ./node_modules/@arcgis/core/views/2d/magnifier/MagnifierView2D.js ***!
      \*************************************************************************/

    /*! exports provided: default */

    /***/
    function Ht6(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony import */


      var _core_has_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ../../../core/has.js */
      "wSAH");
      /* harmony import */


      var _core_maybe_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ../../../core/maybe.js */
      "srIe");
      /* harmony import */


      var _core_promiseUtils_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ../../../core/promiseUtils.js */
      "9MzC");
      /* harmony import */


      var _core_mathUtils_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ../../../core/mathUtils.js */
      "OKTS");
      /* harmony import */


      var _request_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ../../../request.js */
      "Lqtk");
      /* harmony import */


      var _core_Handles_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ../../../core/Handles.js */
      "r0DZ");
      /* harmony import */


      var _core_watchUtils_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ../../../core/watchUtils.js */
      "N5XI");
      /* harmony import */


      var _chunks_builtins_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! ../../../chunks/builtins.js */
      "n4uK");
      /* harmony import */


      var _webgl_BufferObject_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! ../../webgl/BufferObject.js */
      "fOQB");
      /* harmony import */


      var _webgl_Texture_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! ../../webgl/Texture.js */
      "of9L");
      /* harmony import */


      var _webgl_VertexArrayObject_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
      /*! ../../webgl/VertexArrayObject.js */
      "D6bk");
      /* harmony import */


      var _webgl_FramebufferObject_js__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
      /*! ../../webgl/FramebufferObject.js */
      "0meK");
      /* harmony import */


      var _webgl_RenderingContext_js__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
      /*! ../../webgl/RenderingContext.js */
      "bfJE");
      /* harmony import */


      var _engine_DisplayObject_js__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
      /*! ../engine/DisplayObject.js */
      "fEsP");
      /* harmony import */


      var _magnifier_resources_js__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(
      /*! ../../magnifier/resources.js */
      "UBW5");
      /* harmony import */


      var _engine_webgl_enums_js__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(
      /*! ../engine/webgl/enums.js */
      "yE7X");
      /* harmony import */


      var _engine_webgl_shaders_MagnifierPrograms_js__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(
      /*! ../engine/webgl/shaders/MagnifierPrograms.js */
      "fUoV");
      /*
      All material copyright ESRI, All Rights Reserved, unless otherwise specified.
      See https://js.arcgis.com/4.18/esri/copyright.txt for details.
      */

      /* harmony default export */


      __webpack_exports__["default"] = /*#__PURE__*/function (_engine_DisplayObject) {
        _inherits(_class, _engine_DisplayObject);

        var _super = _createSuper(_class);

        function _class() {
          var _this;

          _classCallCheck(this, _class);

          _this = _super.call(this), _this._handles = new _core_Handles_js__WEBPACK_IMPORTED_MODULE_5__["default"](), _this._resourcePixelRatio = 1, _this.visible = !1;
          return _this;
        }

        _createClass(_class, [{
          key: "destroy",
          value: function destroy() {
            this._handles.destroy(), this._handles = null, this._disposeRenderResources(), this._resourcesTask && (this._resourcesTask.abort(), this._resourcesTask = null);
          }
        }, {
          key: "background",
          get: function get() {
            return this._background;
          },
          set: function set(e) {
            this._background = e, this.requestRender();
          }
        }, {
          key: "magnifier",
          get: function get() {
            return this._magnifier;
          },
          set: function set(e) {
            var _this2 = this;

            this._magnifier = e, this._handles.removeAll(), this._handles.add([Object(_core_watchUtils_js__WEBPACK_IMPORTED_MODULE_6__["init"])(e, "version", function () {
              _this2.visible = e.visible && Object(_core_maybe_js__WEBPACK_IMPORTED_MODULE_1__["isSome"])(e.position) && e.size > 0, _this2.requestRender();
            }), e.watch(["mask", "overlay"], function () {
              return _this2._reloadResources();
            }), e.watch("size", function () {
              _this2._disposeRenderResources(), _this2.requestRender();
            })]);
          }
        }, {
          key: "doRender",
          value: function doRender(r) {
            var t;
            var s = r.context;
            if (!this._resourcesTask) return void this._reloadResources();
            if (r.drawPhase !== _engine_webgl_enums_js__WEBPACK_IMPORTED_MODULE_15__["WGLDrawPhase"].MAP || !this._canRender()) return;

            this._updateResources(r);

            var i = this._magnifier;
            if (Object(_core_maybe_js__WEBPACK_IMPORTED_MODULE_1__["isNone"])(i.position)) return;
            var o = r.pixelRatio,
                n = i.size * o,
                h = 1 / i.factor,
                m = Math.ceil(h * n);

            this._readbackTexture.resize(m, m);

            var l = r.state.size,
                d = o * l[0],
                u = o * l[1],
                c = .5 * m,
                p = .5 * m,
                g = Object(_core_mathUtils_js__WEBPACK_IMPORTED_MODULE_3__["clamp"])(o * i.position.x, c, d - c - 1),
                f = Object(_core_mathUtils_js__WEBPACK_IMPORTED_MODULE_3__["clamp"])(u - o * i.position.y, p, u - p - 1),
                b = g - c,
                x = f - p,
                y = this._readbackTexture;
            s.bindTexture(y, 0), s.gl.copyTexImage2D(y.descriptor.target, 0, y.descriptor.pixelFormat, b, x, m, m, 0);
            var k = null == (t = this.background) ? void 0 : t.color,
                T = k ? [k.a * k.r / 255, k.a * k.g / 255, k.a * k.b / 255, k.a] : [1, 1, 1, 1],
                R = (g + i.offsetX * o) / d * 2 - 1,
                v = (f - i.offsetY * o) / u * 2 - 1,
                w = n / d * 2,
                j = n / u * 2,
                M = this._program;
            s.bindVAO(this._vertexArrayObject), s.bindTexture(this._overlayTexture, 6), s.bindTexture(this._maskTexture, 7), s.bindProgram(M), M.setUniform4fv("u_background", T), M.setUniform1i("u_readbackTexture", 0), M.setUniform1i("u_overlayTexture", 6), M.setUniform1i("u_maskTexture", 7), M.setUniform4f("u_drawPos", R, v, w, j), M.setUniform1i("u_maskEnabled", i.maskEnabled ? 1 : 0), M.setUniform1i("u_overlayEnabled", i.overlayEnabled ? 1 : 0), s.setStencilTestEnabled(!1), s.drawArrays(5, 0, 4), s.bindVAO();
          }
        }, {
          key: "_canRender",
          value: function _canRender() {
            return this.mask && this.overlay && null != this._magnifier;
          }
        }, {
          key: "_reloadResources",
          value: function _reloadResources() {
            var _this3 = this;

            this._resourcesTask && this._resourcesTask.abort();
            var t = Object(_core_maybe_js__WEBPACK_IMPORTED_MODULE_1__["isSome"])(this._magnifier) ? this._magnifier.mask : null,
                a = Object(_core_maybe_js__WEBPACK_IMPORTED_MODULE_1__["isSome"])(this._magnifier) ? this._magnifier.overlay : null;
            this._resourcesTask = Object(_core_promiseUtils_js__WEBPACK_IMPORTED_MODULE_2__["createTask"])( /*#__PURE__*/function () {
              var _ref = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(s) {
                var n, h, m, _yield$Object, _yield$Object2, l, d;

                return regeneratorRuntime.wrap(function _callee$(_context) {
                  while (1) {
                    switch (_context.prev = _context.next) {
                      case 0:
                        n = Object(_core_maybe_js__WEBPACK_IMPORTED_MODULE_1__["isNone"])(t) || Object(_core_maybe_js__WEBPACK_IMPORTED_MODULE_1__["isNone"])(a) ? Object(_magnifier_resources_js__WEBPACK_IMPORTED_MODULE_14__["loadMagnifierResources"])(s) : null;
                        h = Object(_core_maybe_js__WEBPACK_IMPORTED_MODULE_1__["isSome"])(t) ? Object(_request_js__WEBPACK_IMPORTED_MODULE_4__["default"])(t, {
                          responseType: "image",
                          signal: s
                        }).then(function (e) {
                          return e.data;
                        }) : n.then(function (e) {
                          return e.mask;
                        });
                        m = Object(_core_maybe_js__WEBPACK_IMPORTED_MODULE_1__["isSome"])(a) ? Object(_request_js__WEBPACK_IMPORTED_MODULE_4__["default"])(a, {
                          responseType: "image",
                          signal: s
                        }).then(function (e) {
                          return e.data;
                        }) : n.then(function (e) {
                          return e.overlay;
                        });
                        _context.next = 5;
                        return Object(_core_promiseUtils_js__WEBPACK_IMPORTED_MODULE_2__["all"])([h, m]);

                      case 5:
                        _yield$Object = _context.sent;
                        _yield$Object2 = _slicedToArray(_yield$Object, 2);
                        l = _yield$Object2[0];
                        d = _yield$Object2[1];
                        _this3.mask = l, _this3.overlay = d, _this3._disposeRenderResources(), _this3.requestRender();

                      case 10:
                      case "end":
                        return _context.stop();
                    }
                  }
                }, _callee);
              }));

              return function (_x) {
                return _ref.apply(this, arguments);
              };
            }());
          }
        }, {
          key: "_disposeRenderResources",
          value: function _disposeRenderResources() {
            this._readbackTexture = Object(_core_maybe_js__WEBPACK_IMPORTED_MODULE_1__["disposeMaybe"])(this._readbackTexture), this._overlayTexture = Object(_core_maybe_js__WEBPACK_IMPORTED_MODULE_1__["disposeMaybe"])(this._overlayTexture), this._maskTexture = Object(_core_maybe_js__WEBPACK_IMPORTED_MODULE_1__["disposeMaybe"])(this._maskTexture), this._vertexArrayObject = Object(_core_maybe_js__WEBPACK_IMPORTED_MODULE_1__["disposeMaybe"])(this._vertexArrayObject), this._program = Object(_core_maybe_js__WEBPACK_IMPORTED_MODULE_1__["disposeMaybe"])(this._program);
          }
        }, {
          key: "_updateResources",
          value: function _updateResources(e) {
            if (e.pixelRatio !== this._resourcePixelRatio && this._disposeRenderResources(), this._readbackTexture) return;
            var r = e.context;
            this._resourcePixelRatio = e.pixelRatio;
            var t = Math.ceil(this._magnifier.size * e.pixelRatio);
            this._program = Object(_engine_webgl_shaders_MagnifierPrograms_js__WEBPACK_IMPORTED_MODULE_16__["createMagnifierProgram"])(r);
            var s = new Uint16Array([0, 1, 0, 0, 1, 1, 1, 0]),
                i = _engine_webgl_shaders_MagnifierPrograms_js__WEBPACK_IMPORTED_MODULE_16__["magnifierProgramTemplate"].attributes;
            this._vertexArrayObject = new _webgl_VertexArrayObject_js__WEBPACK_IMPORTED_MODULE_10__["default"](r, i, {
              geometry: [{
                name: "a_pos",
                count: 2,
                type: 5123,
                offset: 0,
                stride: 4,
                normalized: !1,
                divisor: 0
              }]
            }, {
              geometry: _webgl_BufferObject_js__WEBPACK_IMPORTED_MODULE_8__["default"].createVertex(r, 35044, s)
            }), this.overlay.width = t, this.overlay.height = t, this._overlayTexture = new _webgl_Texture_js__WEBPACK_IMPORTED_MODULE_9__["default"](r, {
              target: 3553,
              pixelFormat: 6408,
              internalFormat: 6408,
              dataType: 5121,
              wrapMode: 33071,
              samplingMode: 9728,
              flipped: !0
            }, this.overlay), this.mask.width = t, this.mask.height = t, this._maskTexture = new _webgl_Texture_js__WEBPACK_IMPORTED_MODULE_9__["default"](r, {
              target: 3553,
              pixelFormat: 6406,
              internalFormat: 6406,
              dataType: 5121,
              wrapMode: 33071,
              samplingMode: 9728,
              flipped: !0
            }, this.mask);
            var a = 1 / this._magnifier.factor;
            this._readbackTexture = new _webgl_Texture_js__WEBPACK_IMPORTED_MODULE_9__["default"](r, {
              target: 3553,
              pixelFormat: 6408,
              internalFormat: 6408,
              dataType: 5121,
              wrapMode: 33071,
              samplingMode: 9729,
              flipped: !1,
              width: Math.ceil(a * t),
              height: Math.ceil(a * t)
            });
          }
        }]);

        return _class;
      }(_engine_DisplayObject_js__WEBPACK_IMPORTED_MODULE_13__["DisplayObject"]);
      /***/

    },

    /***/
    "0O54":
    /*!************************************************************************************!*\
      !*** ./node_modules/@arcgis/core/views/2d/engine/webgl/effects/HighlightEffect.js ***!
      \************************************************************************************/

    /*! exports provided: default */

    /***/
    function O54(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony import */


      var _core_has_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ../../../../../core/has.js */
      "wSAH");
      /* harmony import */


      var _BitBlitRenderer_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ../BitBlitRenderer.js */
      "bfVh");
      /* harmony import */


      var _Effect_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./Effect.js */
      "FrEu");
      /* harmony import */


      var _highlight_HighlightGradient_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./highlight/HighlightGradient.js */
      "ygGI");
      /* harmony import */


      var _highlight_HighlightRenderer_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ./highlight/HighlightRenderer.js */
      "aK+o");
      /* harmony import */


      var _highlight_HighlightSurfaces_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ./highlight/HighlightSurfaces.js */
      "26zf");
      /*
      All material copyright ESRI, All Rights Reserved, unless otherwise specified.
      See https://js.arcgis.com/4.18/esri/copyright.txt for details.
      */

      /* harmony default export */


      __webpack_exports__["default"] = /*#__PURE__*/function (_Effect_js__WEBPACK_I) {
        _inherits(_class2, _Effect_js__WEBPACK_I);

        var _super2 = _createSuper(_class2);

        function _class2() {
          var _this4;

          _classCallCheck(this, _class2);

          _this4 = _super2.apply(this, arguments), _this4.defines = ["highlight"], _this4._hlRenderer = new _highlight_HighlightRenderer_js__WEBPACK_IMPORTED_MODULE_4__["default"](), _this4._hlGradient = new _highlight_HighlightGradient_js__WEBPACK_IMPORTED_MODULE_3__["default"](), _this4._width = void 0, _this4._height = void 0, _this4._hlSurfaces = new _highlight_HighlightSurfaces_js__WEBPACK_IMPORTED_MODULE_5__["default"](), _this4._adjustedWidth = void 0, _this4._adjustedHeight = void 0, _this4._blitRenderer = new _BitBlitRenderer_js__WEBPACK_IMPORTED_MODULE_1__["BitBlitRenderer"]();
          return _this4;
        }

        _createClass(_class2, [{
          key: "dispose",
          value: function dispose() {
            this._hlSurfaces && this._hlSurfaces.dispose(), this._hlRenderer && this._hlRenderer.dispose(), this._hlGradient && this._hlGradient.destroy(), this._boundFBO = null;
          }
        }, {
          key: "bind",
          value: function bind(e) {
            var t = e.context,
                i = e.painter,
                _t$getViewport = t.getViewport(),
                h = _t$getViewport.width,
                s = _t$getViewport.height,
                r = i.getFbos(h, s).effect0;

            this.setup(e, h, s), t.bindFramebuffer(r), t.setColorMask(!0, !0, !0, !0), t.setClearColor(0, 0, 0, 0), t.clear(t.gl.COLOR_BUFFER_BIT);
          }
        }, {
          key: "unbind",
          value: function unbind() {}
        }, {
          key: "setup",
          value: function setup(_ref2, t, i) {
            var e = _ref2.context;
            this._width = t, this._height = i;
            var h = t % 4,
                s = i % 4;
            t += h < 2 ? -h : 4 - h, i += s < 2 ? -s : 4 - s, this._adjustedWidth = t, this._adjustedHeight = i, this._boundFBO = e.getBoundFramebufferObject();
            var r = Math.round(.75 * t),
                d = Math.round(.75 * i);
            this._hlRenderer.setup(e, r, d), this._hlSurfaces.setup(e, r, d);
          }
        }, {
          key: "draw",
          value: function draw(_ref3) {
            var e = _ref3.context;
            var t = e.getBoundFramebufferObject();
            e.setViewport(0, 0, .75 * this._adjustedWidth, .75 * this._adjustedHeight), e.bindFramebuffer(this._hlSurfaces.sharedBlur1Fbo), e.setStencilTestEnabled(!1), e.setClearColor(0, 0, 0, 0), e.clear(e.gl.COLOR_BUFFER_BIT), this._blitRenderer.render(e, t.colorTexture, 9728, 1), e.setStencilTestEnabled(!1), e.setBlendingEnabled(!1), e.bindFramebuffer(this._hlSurfaces.sharedBlur2Fbo), e.setClearColor(0, 0, 0, 0), e.clear(e.gl.COLOR_BUFFER_BIT), this._hlRenderer.preBlur(e, this._hlSurfaces.sharedBlur1Tex), e.bindFramebuffer(this._hlSurfaces.sharedBlur1Fbo), e.setClearColor(0, 0, 0, 0), e.clear(e.gl.COLOR_BUFFER_BIT), this._hlRenderer.finalBlur(e, this._hlSurfaces.sharedBlur2Tex), e.bindFramebuffer(this._boundFBO), e.setBlendingEnabled(!0), e.setViewport(0, 0, this._width, this._height), this._hlRenderer.renderHighlight(e, this._hlSurfaces.sharedBlur1Tex, this._hlGradient), this._boundFBO = null;
          }
        }, {
          key: "setHighlightOptions",
          value: function setHighlightOptions(e) {
            this._hlGradient.setHighlightOptions(e);
          }
        }]);

        return _class2;
      }(_Effect_js__WEBPACK_IMPORTED_MODULE_2__["Effect"]);
      /***/

    },

    /***/
    "1dih":
    /*!****************************************************************************!*\
      !*** ./node_modules/@arcgis/core/views/2d/navigation/MapViewNavigation.js ***!
      \****************************************************************************/

    /*! exports provided: default */

    /***/
    function dih(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
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


      var _core_Accessor_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! ../../../core/Accessor.js */
      "/CmD");
      /* harmony import */


      var _geometry_Point_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
      /*! ../../../geometry/Point.js */
      "SuVq");
      /* harmony import */


      var _Viewpoint_js__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
      /*! ../../../Viewpoint.js */
      "y3LX");
      /* harmony import */


      var _viewpointUtils_js__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
      /*! ../viewpointUtils.js */
      "qYtE");
      /* harmony import */


      var _ZoomBox_js__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
      /*! ./ZoomBox.js */
      "qnLi");
      /* harmony import */


      var _actions_Pan_js__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(
      /*! ./actions/Pan.js */
      "JlMO");
      /* harmony import */


      var _actions_Pinch_js__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(
      /*! ./actions/Pinch.js */
      "cwtj");
      /* harmony import */


      var _actions_Rotate_js__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(
      /*! ./actions/Rotate.js */
      "KOSm");
      /*
      All material copyright ESRI, All Rights Reserved, unless otherwise specified.
      See https://js.arcgis.com/4.18/esri/copyright.txt for details.
      */


      var l = new _Viewpoint_js__WEBPACK_IMPORTED_MODULE_11__["default"]({
        targetGeometry: new _geometry_Point_js__WEBPACK_IMPORTED_MODULE_10__["default"]()
      }),
          v = [0, 0];

      var w = /*#__PURE__*/function (_core_Accessor_js__WE) {
        _inherits(w, _core_Accessor_js__WE);

        var _super3 = _createSuper(w);

        function w(t) {
          var _this5;

          _classCallCheck(this, w);

          _this5 = _super3.call(this, t), _this5._endTimer = null, _this5.animationManager = null;
          return _this5;
        }

        _createClass(w, [{
          key: "initialize",
          value: function initialize() {
            this.pan = new _actions_Pan_js__WEBPACK_IMPORTED_MODULE_14__["default"]({
              navigation: this
            }), this.rotate = new _actions_Rotate_js__WEBPACK_IMPORTED_MODULE_16__["default"]({
              navigation: this
            }), this.pinch = new _actions_Pinch_js__WEBPACK_IMPORTED_MODULE_15__["default"]({
              navigation: this
            }), this.zoomBox = new _ZoomBox_js__WEBPACK_IMPORTED_MODULE_13__["default"]({
              view: this.view,
              navigation: this
            });
          }
        }, {
          key: "destroy",
          value: function destroy() {
            this.zoomBox.destroy(), this.zoomBox = null, this.animationManager = null;
          }
        }, {
          key: "begin",
          value: function begin() {
            this._set("interacting", !0);
          }
        }, {
          key: "end",
          value: function end() {
            this._lastEventTimestamp = performance.now(), this._startTimer(250);
          }
        }, {
          key: "zoom",
          value: function () {
            var _zoom = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee2(t) {
              var i,
                  _args2 = arguments;
              return regeneratorRuntime.wrap(function _callee2$(_context2) {
                while (1) {
                  switch (_context2.prev = _context2.next) {
                    case 0:
                      i = _args2.length > 1 && _args2[1] !== undefined ? _args2[1] : this._getDefaultAnchor();

                      if (!(this.stop(), this.begin(), this.view.constraints.snapToZoom && this.view.constraints.effectiveLODs)) {
                        _context2.next = 3;
                        break;
                      }

                      return _context2.abrupt("return", t < 1 ? this.zoomIn(i) : this.zoomOut(i));

                    case 3:
                      this.setViewpoint(i, t, 0, [0, 0]);

                    case 4:
                    case "end":
                      return _context2.stop();
                  }
                }
              }, _callee2, this);
            }));

            function zoom(_x2) {
              return _zoom.apply(this, arguments);
            }

            return zoom;
          }()
        }, {
          key: "zoomIn",
          value: function () {
            var _zoomIn = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee3(t) {
              var i, o;
              return regeneratorRuntime.wrap(function _callee3$(_context3) {
                while (1) {
                  switch (_context3.prev = _context3.next) {
                    case 0:
                      i = this.view, o = i.constraints.snapToNextScale(i.scale);
                      return _context3.abrupt("return", this._zoomToScale(o, t));

                    case 2:
                    case "end":
                      return _context3.stop();
                  }
                }
              }, _callee3, this);
            }));

            function zoomIn(_x3) {
              return _zoomIn.apply(this, arguments);
            }

            return zoomIn;
          }()
        }, {
          key: "zoomOut",
          value: function () {
            var _zoomOut = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee4(t) {
              var i, o;
              return regeneratorRuntime.wrap(function _callee4$(_context4) {
                while (1) {
                  switch (_context4.prev = _context4.next) {
                    case 0:
                      i = this.view, o = i.constraints.snapToPreviousScale(i.scale);
                      return _context4.abrupt("return", this._zoomToScale(o, t));

                    case 2:
                    case "end":
                      return _context4.stop();
                  }
                }
              }, _callee4, this);
            }));

            function zoomOut(_x4) {
              return _zoomOut.apply(this, arguments);
            }

            return zoomOut;
          }()
        }, {
          key: "setViewpoint",
          value: function setViewpoint(t, i, o, n) {
            this.begin(), this.view.state.viewpoint = this._scaleRotateTranslateViewpoint(this.view.viewpoint, t, i, o, n), this.end();
          }
        }, {
          key: "setViewpointImmediate",
          value: function setViewpointImmediate(t) {
            var i = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;
            var o = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : [0, 0];
            var n = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : this._getDefaultAnchor();
            this.view.state.viewpoint = this._scaleRotateTranslateViewpoint(this.view.viewpoint, n, t, i, o);
          }
        }, {
          key: "continousRotateClockwise",
          value: function continousRotateClockwise() {
            var t = this.get("view.viewpoint");
            this.animationManager.animateContinous(t, function (t) {
              Object(_viewpointUtils_js__WEBPACK_IMPORTED_MODULE_12__["rotateBy"])(t, t, -1);
            });
          }
        }, {
          key: "continousRotateCounterclockwise",
          value: function continousRotateCounterclockwise() {
            var t = this.get("view.viewpoint");
            this.animationManager.animateContinous(t, function (t) {
              Object(_viewpointUtils_js__WEBPACK_IMPORTED_MODULE_12__["rotateBy"])(t, t, 1);
            });
          }
        }, {
          key: "resetRotation",
          value: function resetRotation() {
            this.view.rotation = 0;
          }
        }, {
          key: "continousPanLeft",
          value: function continousPanLeft() {
            this._continuousPan([-10, 0]);
          }
        }, {
          key: "continousPanRight",
          value: function continousPanRight() {
            this._continuousPan([10, 0]);
          }
        }, {
          key: "continousPanUp",
          value: function continousPanUp() {
            this._continuousPan([0, 10]);
          }
        }, {
          key: "continousPanDown",
          value: function continousPanDown() {
            this._continuousPan([0, -10]);
          }
        }, {
          key: "stop",
          value: function stop() {
            this.pan.stopMomentumNavigation(), this.animationManager.stop(), this.end(), null !== this._endTimer && (clearTimeout(this._endTimer), this._endTimer = null, this._set("interacting", !1));
          }
        }, {
          key: "_continuousPan",
          value: function _continuousPan(t) {
            var _this6 = this;

            var i = this.get("view.viewpoint");
            this.animationManager.animateContinous(i, function (i) {
              Object(_viewpointUtils_js__WEBPACK_IMPORTED_MODULE_12__["translateBy"])(i, i, t), _this6.view.constraints.constrainByGeometry(i);
            });
          }
        }, {
          key: "_startTimer",
          value: function _startTimer(t) {
            var _this7 = this;

            return null !== this._endTimer || (this._endTimer = setTimeout(function () {
              _this7._endTimer = null;

              var t = performance.now() - _this7._lastEventTimestamp;

              t < 250 ? _this7._endTimer = _this7._startTimer(t) : _this7._set("interacting", !1);
            }, t)), this._endTimer;
          }
        }, {
          key: "_getDefaultAnchor",
          value: function _getDefaultAnchor() {
            var _this$view = this.view,
                t = _this$view.size,
                _this$view$padding = _this$view.padding,
                i = _this$view$padding.left,
                o = _this$view$padding.right,
                n = _this$view$padding.top,
                e = _this$view$padding.bottom;
            return v[0] = .5 * (t[0] - o + i), v[1] = .5 * (t[1] - e + n), v;
          }
        }, {
          key: "_zoomToScale",
          value: function () {
            var _zoomToScale2 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee5(t) {
              var i,
                  o,
                  n,
                  e,
                  s,
                  a,
                  r,
                  m,
                  p,
                  _args5 = arguments;
              return regeneratorRuntime.wrap(function _callee5$(_context5) {
                while (1) {
                  switch (_context5.prev = _context5.next) {
                    case 0:
                      i = _args5.length > 1 && _args5[1] !== undefined ? _args5[1] : this._getDefaultAnchor();
                      o = this.view, n = o.constraints, e = o.scale, s = o.viewpoint, a = o.size, r = o.padding, m = n.canZoomInTo(t), p = n.canZoomOutTo(t);

                      if (t < e && !m || t > e && !p) {
                        _context5.next = 4;
                        break;
                      }

                      return _context5.abrupt("return", (Object(_viewpointUtils_js__WEBPACK_IMPORTED_MODULE_12__["padAndScaleAndRotateBy"])(l, s, t / e, 0, i, a, r), n.constrainByGeometry(l), o.goTo(l, {
                        animate: !0
                      })));

                    case 4:
                    case "end":
                      return _context5.stop();
                  }
                }
              }, _callee5, this);
            }));

            function _zoomToScale(_x5) {
              return _zoomToScale2.apply(this, arguments);
            }

            return _zoomToScale;
          }()
        }, {
          key: "_scaleRotateTranslateViewpoint",
          value: function _scaleRotateTranslateViewpoint(t, i, o, n, e) {
            var s = this.view,
                a = s.size,
                m = s.padding,
                p = s.constraints,
                h = s.scale,
                u = s.viewpoint,
                l = h * o,
                v = p.canZoomInTo(l),
                _w = p.canZoomOutTo(l);

            return (o < 1 && !v || o > 1 && !_w) && (o = 1), Object(_viewpointUtils_js__WEBPACK_IMPORTED_MODULE_12__["translateBy"])(u, u, e), Object(_viewpointUtils_js__WEBPACK_IMPORTED_MODULE_12__["padAndScaleAndRotateBy"])(t, u, o, n, i, a, m), p.constrainByGeometry(t);
          }
        }]);

        return w;
      }(_core_Accessor_js__WEBPACK_IMPORTED_MODULE_9__["default"]);

      Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_4__["property"])()], w.prototype, "animationManager", void 0), Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_4__["property"])({
        type: Boolean,
        readOnly: !0
      })], w.prototype, "interacting", void 0), Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_4__["property"])()], w.prototype, "pan", void 0), Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_4__["property"])()], w.prototype, "pinch", void 0), Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_4__["property"])()], w.prototype, "rotate", void 0), Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_4__["property"])()], w.prototype, "view", void 0), Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_4__["property"])()], w.prototype, "zoomBox", void 0), w = Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_subclass_js__WEBPACK_IMPORTED_MODULE_5__["subclass"])("esri.views.2d.navigation.MapViewNavigation")], w);
      var g = w;
      /* harmony default export */

      __webpack_exports__["default"] = g;
      /***/
    },

    /***/
    "26zf":
    /*!************************************************************************************************!*\
      !*** ./node_modules/@arcgis/core/views/2d/engine/webgl/effects/highlight/HighlightSurfaces.js ***!
      \************************************************************************************************/

    /*! exports provided: default */

    /***/
    function zf(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony import */


      var _core_has_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ../../../../../../core/has.js */
      "wSAH");
      /* harmony import */


      var _chunks_builtins_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ../../../../../../chunks/builtins.js */
      "n4uK");
      /* harmony import */


      var _webgl_Texture_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ../../../../../webgl/Texture.js */
      "of9L");
      /* harmony import */


      var _webgl_FramebufferObject_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ../../../../../webgl/FramebufferObject.js */
      "0meK");
      /* harmony import */


      var _webgl_RenderingContext_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ../../../../../webgl/RenderingContext.js */
      "bfJE");
      /*
      All material copyright ESRI, All Rights Reserved, unless otherwise specified.
      See https://js.arcgis.com/4.18/esri/copyright.txt for details.
      */


      function r(r, t, i) {
        var h = new _webgl_Texture_js__WEBPACK_IMPORTED_MODULE_2__["default"](r, {
          target: 3553,
          pixelFormat: 6408,
          dataType: 5121,
          wrapMode: 33071,
          width: t,
          height: i,
          samplingMode: 9729
        });
        return [h, new _webgl_FramebufferObject_js__WEBPACK_IMPORTED_MODULE_3__["default"](r, {
          colorTarget: 0,
          depthStencilTarget: 2
        }, h)];
      }
      /* harmony default export */


      __webpack_exports__["default"] = /*#__PURE__*/function () {
        function _class3() {
          _classCallCheck(this, _class3);

          this._width = void 0, this._height = void 0, this._resources = null;
        }

        _createClass(_class3, [{
          key: "dispose",
          value: function dispose() {
            this._resources && (this._resources.sharedBlur1Tex.dispose(), this._resources.sharedBlur1Fbo.dispose(), this._resources.sharedBlur2Tex.dispose(), this._resources.sharedBlur2Fbo.dispose(), this._resources = null);
          }
        }, {
          key: "_initialize",
          value: function _initialize(e, s, t) {
            this._width = s, this._height = t;

            var _r = r(e, s, t),
                _r2 = _slicedToArray(_r, 2),
                i = _r2[0],
                h = _r2[1],
                _r3 = r(e, s, t),
                _r4 = _slicedToArray(_r3, 2),
                o = _r4[0],
                u = _r4[1];

            this._resources = {
              sharedBlur1Tex: i,
              sharedBlur1Fbo: h,
              sharedBlur2Tex: o,
              sharedBlur2Fbo: u
            };
          }
        }, {
          key: "setup",
          value: function setup(e, s, r) {
            !this._resources || this._width === s && this._height === r || this.dispose(), this._resources || this._initialize(e, s, r);
          }
        }, {
          key: "sharedBlur1Tex",
          get: function get() {
            return this._resources.sharedBlur1Tex;
          }
        }, {
          key: "sharedBlur1Fbo",
          get: function get() {
            return this._resources.sharedBlur1Fbo;
          }
        }, {
          key: "sharedBlur2Tex",
          get: function get() {
            return this._resources.sharedBlur2Tex;
          }
        }, {
          key: "sharedBlur2Fbo",
          get: function get() {
            return this._resources.sharedBlur2Fbo;
          }
        }]);

        return _class3;
      }();
      /***/

    },

    /***/
    "297m":
    /*!*************************************************************************************!*\
      !*** ./node_modules/@arcgis/core/views/2d/engine/webgl/shaders/MaterialPrograms.js ***!
      \*************************************************************************************/

    /*! exports provided: createProgramTemplate */

    /***/
    function m(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "createProgramTemplate", function () {
        return o;
      });
      /* harmony import */


      var _core_has_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ../../../../../core/has.js */
      "wSAH");
      /* harmony import */


      var _core_mathUtils_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ../../../../../core/mathUtils.js */
      "OKTS");
      /* harmony import */


      var _chunks_builtins_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ../../../../../chunks/builtins.js */
      "n4uK");
      /* harmony import */


      var _webgl_FramebufferObject_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ../../../../webgl/FramebufferObject.js */
      "0meK");
      /* harmony import */


      var _webgl_programUtils_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ../../../../webgl/programUtils.js */
      "1F90");
      /* harmony import */


      var _webgl_RenderingContext_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ../../../../webgl/RenderingContext.js */
      "bfJE");
      /* harmony import */


      var _sources_resolver_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ./sources/resolver.js */
      "vpBa");
      /*
      All material copyright ESRI, All Rights Reserved, unless otherwise specified.
      See https://js.arcgis.com/4.18/esri/copyright.txt for details.
      */


      var t = function t(r) {
        var e = "";
        e += r[0].toUpperCase();

        for (var _t = 1; _t < r.length; _t++) {
          var _s2 = r[_t];
          _s2 === _s2.toUpperCase() ? (e += "_", e += _s2) : e += _s2.toUpperCase();
        }

        return e;
      },
          s = function s(e) {
        var s = {};

        for (var r in e) {
          s[t(r)] = e[r];
        }

        return Object(_webgl_programUtils_js__WEBPACK_IMPORTED_MODULE_4__["glslifyDefineMap"])(s);
      },
          o = function o(r, t, _o) {
        var n = r + r.substring(r.lastIndexOf("/")),
            a = t + t.substring(t.lastIndexOf("/"));
        return {
          name: name,
          attributes: _o,
          shaders: function shaders(r) {
            return {
              vertexShader: s(r) + Object(_sources_resolver_js__WEBPACK_IMPORTED_MODULE_6__["resolveIncludes"])("".concat(n, ".vert")),
              fragmentShader: s(r) + Object(_sources_resolver_js__WEBPACK_IMPORTED_MODULE_6__["resolveIncludes"])("".concat(a, ".frag"))
            };
          }
        };
      };
      /***/

    },

    /***/
    "3wQP":
    /*!************************************************************************************!*\
      !*** ./node_modules/@arcgis/core/views/2d/engine/webgl/shaders/StencilPrograms.js ***!
      \************************************************************************************/

    /*! exports provided: stencil */

    /***/
    function wQP(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "stencil", function () {
        return r;
      });
      /* harmony import */


      var _sources_resolver_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ./sources/resolver.js */
      "vpBa");
      /*
      All material copyright ESRI, All Rights Reserved, unless otherwise specified.
      See https://js.arcgis.com/4.18/esri/copyright.txt for details.
      */


      var r = {
        name: "stencil",
        shaders: {
          vertexShader: Object(_sources_resolver_js__WEBPACK_IMPORTED_MODULE_0__["resolveIncludes"])("stencil/stencil.vert"),
          fragmentShader: Object(_sources_resolver_js__WEBPACK_IMPORTED_MODULE_0__["resolveIncludes"])("stencil/stencil.frag")
        },
        attributes: {
          a_pos: 0
        }
      };
      /***/
    },

    /***/
    "5ROZ":
    /*!**********************************************************************!*\
      !*** ./node_modules/@arcgis/core/views/2d/engine/webgl/fontUtils.js ***!
      \**********************************************************************/

    /*! exports provided: getFontDecorationTop, getFullyQualifiedFontName */

    /***/
    function ROZ(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "getFontDecorationTop", function () {
        return r;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "getFullyQualifiedFontName", function () {
        return e;
      });
      /*
      All material copyright ESRI, All Rights Reserved, unless otherwise specified.
      See https://js.arcgis.com/4.18/esri/copyright.txt for details.
      */


      function e(e) {
        var r = function (e) {
          if (!e.weight) return "";

          switch (e.weight.toLowerCase()) {
            case "bold":
            case "bolder":
              return "-bold";
          }

          return "";
        }(e) + function (e) {
          if (!e.style) return "";

          switch (e.style.toLowerCase()) {
            case "italic":
            case "oblic":
              return "-italic";
          }

          return "";
        }(e);

        return function (e) {
          var r = e.toLowerCase().split(" ").join("-");

          switch (r) {
            case "serif":
              return "noto-serif";

            case "sans-serif":
              return "arial-unicode-ms";

            case "monospace":
              return "ubuntu-mono";

            case "fantasy":
              return "cabin-sketch";

            case "cursive":
              return "redressed";

            default:
              return r;
          }
        }(e.family) + (r.length > 0 ? r : "-regular");
      }

      function r(e) {
        switch (e) {
          case "underline":
            return -26;

          case "line-through":
            return -18;
        }

        return NaN;
      }
      /***/

    },

    /***/
    "60EV":
    /*!**********************************************************************************!*\
      !*** ./node_modules/@arcgis/core/views/2d/engine/webgl/effects/HittestEffect.js ***!
      \**********************************************************************************/

    /*! exports provided: HittestEffect */

    /***/
    function EV(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "HittestEffect", function () {
        return r;
      });
      /* harmony import */


      var _core_maybe_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ../../../../../core/maybe.js */
      "srIe");
      /* harmony import */


      var _definitions_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ../definitions.js */
      "jIHu");
      /* harmony import */


      var _Effect_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./Effect.js */
      "FrEu");
      /*
      All material copyright ESRI, All Rights Reserved, unless otherwise specified.
      See https://js.arcgis.com/4.18/esri/copyright.txt for details.
      */


      var r = /*#__PURE__*/function (_Effect_js__WEBPACK_I2) {
        _inherits(r, _Effect_js__WEBPACK_I2);

        var _super4 = _createSuper(r);

        function r() {
          var _this8;

          _classCallCheck(this, r);

          _this8 = _super4.apply(this, arguments), _this8.name = _this8.constructor.name, _this8.defines = ["id"], _this8._lastSize = 0;
          return _this8;
        }

        _createClass(r, [{
          key: "dispose",
          value: function dispose() {
            Object(_core_maybe_js__WEBPACK_IMPORTED_MODULE_0__["isSome"])(this._fbo) && this._fbo.dispose();
          }
        }, {
          key: "bind",
          value: function bind(_ref4) {
            var t = _ref4.context,
                e = _ref4.painter;

            var _t$getViewport2 = t.getViewport(),
                s = _t$getViewport2.width,
                _r5 = _t$getViewport2.height,
                i = e.getFbos(s, _r5).effect0;

            t.bindFramebuffer(i), t.setClearColor(0, 0, 0, 0), t.clear(t.gl.COLOR_BUFFER_BIT);
          }
        }, {
          key: "unbind",
          value: function unbind() {}
        }, {
          key: "draw",
          value: function draw(_ref5, i) {
            var _this9 = this;

            var t = _ref5.context,
                s = _ref5.state,
                _r6 = _ref5.pixelRatio;
            var o = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : _definitions_js__WEBPACK_IMPORTED_MODULE_1__["HITTEST_SEARCH_SIZE"];
            var f = t.getBoundFramebufferObject(),
                n = s.size[1] * _r6,
                a = Math.round(o * _r6),
                h = a / 2,
                c = a / 2;
            this._ensureBuffer(a), i.forEach(function (t, e) {
              var s = new Map(),
                  o = Math.floor(e[0] * _r6 - a / 2),
                  u = Math.floor(n - e[1] * _r6 - a / 2);
              f.readPixels(o, u, a, a, 6408, 5121, _this9._buf);

              for (var _t2 = 0; _t2 < _this9._buf32.length; _t2++) {
                var _e2 = _this9._buf32[_t2];

                if (4294967295 !== _e2 && 0 !== _e2) {
                  var _r8 = _t2 % a,
                      _i2 = a - Math.floor(_t2 / a),
                      _o2 = (h - _r8) * (h - _r8) + (c - _i2) * (c - _i2),
                      _f = s.has(_e2) ? s.get(_e2) : 4294967295;

                  s.set(_e2, Math.min(_o2, _f));
                }
              }

              var b = Array.from(s).sort(function (t, e) {
                return t[1] - e[1];
              }).map(function (t) {
                return t[0];
              });
              t.resolve(b), i["delete"](e);
            });
          }
        }, {
          key: "_ensureBuffer",
          value: function _ensureBuffer(t) {
            this._lastSize !== t && (this._lastSize = t, this._buf = new Uint8Array(4 * t * t), this._buf32 = new Uint32Array(this._buf.buffer));
          }
        }]);

        return r;
      }(_Effect_js__WEBPACK_IMPORTED_MODULE_2__["Effect"]);
      /***/

    },

    /***/
    "A+Tu":
    /*!******************************************************************************************!*\
      !*** ./node_modules/@arcgis/core/views/2d/engine/webgl/collisions/LayerCollisionInfo.js ***!
      \******************************************************************************************/

    /*! exports provided: default, createLabelVVEvaluator */

    /***/
    function ATu(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "createLabelVVEvaluator", function () {
        return c;
      });
      /* harmony import */


      var _core_Logger_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ../../../../../core/Logger.js */
      "6S2I");
      /* harmony import */


      var _core_mathUtils_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ../../../../../core/mathUtils.js */
      "OKTS");
      /* harmony import */


      var _core_screenUtils_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ../../../../../core/screenUtils.js */
      "qRWG");
      /* harmony import */


      var _visualVariableSimpleUtils_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./visualVariableSimpleUtils.js */
      "cZ4F");
      /*
      All material copyright ESRI, All Rights Reserved, unless otherwise specified.
      See https://js.arcgis.com/4.18/esri/copyright.txt for details.
      */


      var i = function i(e, t) {
        return e.order - t.order;
      },
          n = function n(e, t) {
        return e.index - t.index;
      },
          l = _core_Logger_js__WEBPACK_IMPORTED_MODULE_0__["default"].getLogger("esri/views/2d/engine/webgl/collisions/CollisionEngine");

      function s(e, r) {
        var o = !!e.minScale,
            i = !!e.maxScale,
            n = o && r.scaleToZoom(e.minScale) || 0,
            l = i && r.scaleToZoom(e.maxScale) || 255;
        return {
          deconflictionStrategy: e.deconflictionStrategy,
          minZoom: Object(_core_mathUtils_js__WEBPACK_IMPORTED_MODULE_1__["clamp"])(Math.floor(10 * n), 0, 255),
          maxZoom: Object(_core_mathUtils_js__WEBPACK_IMPORTED_MODULE_1__["clamp"])(Math.floor(10 * l), 0, 255)
        };
      }

      function a(e) {
        return function (t) {
          return Object(_core_screenUtils_js__WEBPACK_IMPORTED_MODULE_2__["pt2px"])(Object(_visualVariableSimpleUtils_js__WEBPACK_IMPORTED_MODULE_3__["getSizeForValueSimple"])(t, e));
        };
      }

      function c(e) {
        if (!e) return null;

        var _iterator = _createForOfIteratorHelper(e),
            _step;

        try {
          for (_iterator.s(); !(_step = _iterator.n()).done;) {
            var t = _step.value;
            if ("size" === t.type) return a(t);
          }
        } catch (err) {
          _iterator.e(err);
        } finally {
          _iterator.f();
        }

        return null;
      }

      var d = /*#__PURE__*/function () {
        function d(e, t, r, o) {
          var _this10 = this;

          _classCallCheck(this, d);

          this._vvHandle = null;
          var i = e.layer,
              n = i.geometryType,
              l = i.labelingInfo,
              a = i.renderer;
          a && (this.vvEval = c("visualVariables" in a && a.visualVariables)), this._vvHandle = i.watch("renderer", function (e) {
            e && (_this10.vvEval = c("visualVariables" in e && e.visualVariables));
          });
          var _d2 = i.featureReduction,
              f = _d2 && "cluster" === _d2.type && _d2.labelingInfo,
              m = (l || []).map(function (e) {
            return s(e, o);
          }),
              u = (f || []).map(function (e) {
            return s(e, o);
          });
          this.layerView = e, this.geometryType = n, this.index = t, this.order = r, this.zoomRanges = [].concat(_toConsumableArray(m), _toConsumableArray(u)), this.layerView = e;
        }

        _createClass(d, [{
          key: "hasVV",
          value: function hasVV() {
            return !!this.vvEval;
          }
        }, {
          key: "allOrNothing",
          value: function allOrNothing() {
            return !("polyline" === this.geometryType);
          }
        }, {
          key: "destroy",
          value: function destroy() {
            this._vvHandle.remove();
          }
        }], [{
          key: "create",
          value: function create(e, t, r, o) {
            var n = r.sort(i);
            var l = !1,
                s = -1;

            var _iterator2 = _createForOfIteratorHelper(n),
                _step2;

            try {
              for (_iterator2.s(); !(_step2 = _iterator2.n()).done;) {
                var _e3 = _step2.value;
                !l && _e3.order > t && (s = _e3.index, l = !0), l && _e3.index++;
              }
            } catch (err) {
              _iterator2.e(err);
            } finally {
              _iterator2.f();
            }

            return l || (s = n.length), new d(e, s, t, o);
          }
        }, {
          key: "delete",
          value: function _delete(e, t) {
            var r = t.sort(n);

            for (var o = e + 1; o < r.length; o++) {
              t[o].index--;
            }

            t[e].destroy(), t.splice(e, 1);
          }
        }, {
          key: "find",
          value: function find(e, t) {
            var _iterator3 = _createForOfIteratorHelper(t),
                _step3;

            try {
              for (_iterator3.s(); !(_step3 = _iterator3.n()).done;) {
                var r = _step3.value;
                if (r.index === e) return r;
              }
            } catch (err) {
              _iterator3.e(err);
            } finally {
              _iterator3.f();
            }

            return l.error("Tried to get a LayerCollisionInfo for an index that doesn't exist!"), null;
          }
        }]);

        return d;
      }();
      /* harmony default export */


      __webpack_exports__["default"] = d;
      /***/
    },

    /***/
    "BaZm":
    /*!************************************************************************!*\
      !*** ./node_modules/@arcgis/core/views/2d/engine/webgl/GlyphMosaic.js ***!
      \************************************************************************/

    /*! exports provided: default */

    /***/
    function BaZm(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony import */


      var _core_has_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ../../../../core/has.js */
      "wSAH");
      /* harmony import */


      var _core_promiseUtils_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ../../../../core/promiseUtils.js */
      "9MzC");
      /* harmony import */


      var _chunks_builtins_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ../../../../chunks/builtins.js */
      "n4uK");
      /* harmony import */


      var _webgl_Texture_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ../../../webgl/Texture.js */
      "of9L");
      /* harmony import */


      var _webgl_FramebufferObject_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ../../../webgl/FramebufferObject.js */
      "0meK");
      /* harmony import */


      var _webgl_RenderingContext_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ../../../webgl/RenderingContext.js */
      "bfJE");
      /* harmony import */


      var _Rect_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ./Rect.js */
      "qcDN");
      /* harmony import */


      var _RectangleBinPack_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! ./RectangleBinPack.js */
      "rhr1");
      /*
      All material copyright ESRI, All Rights Reserved, unless otherwise specified.
      See https://js.arcgis.com/4.18/esri/copyright.txt for details.
      */


      var a = function a(t) {
        return Math.floor(t / 256);
      };
      /* harmony default export */


      __webpack_exports__["default"] = /*#__PURE__*/function () {
        function _class4(t, e, i) {
          _classCallCheck(this, _class4);

          this.width = 0, this.height = 0, this._dirties = [], this._glyphData = [], this._currentPage = 0, this._glyphCache = {}, this._textures = [], this._rangePromises = new Map(), this.width = t, this.height = e, this._glyphSource = i, this._binPack = new _RectangleBinPack_js__WEBPACK_IMPORTED_MODULE_7__["default"](t - 4, e - 4), this._glyphData.push(new Uint8Array(t * e)), this._dirties.push(!0), this._textures.push(null), this._initDecorationGlyph();
        }

        _createClass(_class4, [{
          key: "dispose",
          value: function dispose() {
            this._binPack = null;

            var _iterator4 = _createForOfIteratorHelper(this._textures),
                _step4;

            try {
              for (_iterator4.s(); !(_step4 = _iterator4.n()).done;) {
                var t = _step4.value;
                t && t.dispose();
              }
            } catch (err) {
              _iterator4.e(err);
            } finally {
              _iterator4.f();
            }

            this._textures.length = 0, this._glyphData.length = 0;
          }
        }, {
          key: "_initDecorationGlyph",
          value: function _initDecorationGlyph() {
            var t = [117, 149, 181, 207, 207, 181, 149, 117],
                e = [];

            for (var _i3 = 0; _i3 < t.length; _i3++) {
              var h = t[_i3];

              for (var _t3 = 0; _t3 < 11; _t3++) {
                e.push(h);
              }
            }

            var i = {
              metrics: {
                width: 5,
                height: 2,
                left: 0,
                top: 0,
                advance: 0
              },
              bitmap: new Uint8Array(e)
            };

            this._recordGlyph(i);
          }
        }, {
          key: "getGlyphItems",
          value: function () {
            var _getGlyphItems = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee6(t, e, i) {
              var _this11 = this;

              var h;
              return regeneratorRuntime.wrap(function _callee6$(_context6) {
                while (1) {
                  switch (_context6.prev = _context6.next) {
                    case 0:
                      h = this._getGlyphCache(t);
                      _context6.next = 3;
                      return this._fetchRanges(t, e, i);

                    case 3:
                      return _context6.abrupt("return", e.map(function (e) {
                        return _this11._getMosaicItem(h, t, e);
                      }));

                    case 4:
                    case "end":
                      return _context6.stop();
                  }
                }
              }, _callee6, this);
            }));

            function getGlyphItems(_x6, _x7, _x8) {
              return _getGlyphItems.apply(this, arguments);
            }

            return getGlyphItems;
          }()
        }, {
          key: "bind",
          value: function bind(t, e, i, h) {
            var s = this._getTexture(t, i);

            s.setSamplingMode(e), this._dirties[i] && (s.setData(this._glyphData[i]), this._dirties[i] = !1), t.bindTexture(s, h);
          }
        }, {
          key: "_getGlyphCache",
          value: function _getGlyphCache(t) {
            return this._glyphCache[t] || (this._glyphCache[t] = {}), this._glyphCache[t];
          }
        }, {
          key: "_getTexture",
          value: function _getTexture(t, e) {
            return this._textures[e] || (this._textures[e] = new _webgl_Texture_js__WEBPACK_IMPORTED_MODULE_3__["default"](t, {
              pixelFormat: 6406,
              dataType: 5121,
              width: this.width,
              height: this.height
            }, new Uint8Array(this.width * this.height))), this._textures[e];
          }
        }, {
          key: "_invalidate",
          value: function _invalidate() {
            this._dirties[this._currentPage] = !0;
          }
        }, {
          key: "_fetchRanges",
          value: function () {
            var _fetchRanges2 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee7(t, i, h) {
              var _this12 = this;

              var s, r;
              return regeneratorRuntime.wrap(function _callee7$(_context7) {
                while (1) {
                  switch (_context7.prev = _context7.next) {
                    case 0:
                      s = function (t) {
                        var e = new Set();

                        var _iterator5 = _createForOfIteratorHelper(t),
                            _step5;

                        try {
                          for (_iterator5.s(); !(_step5 = _iterator5.n()).done;) {
                            var _i4 = _step5.value;
                            e.add(a(_i4));
                          }
                        } catch (err) {
                          _iterator5.e(err);
                        } finally {
                          _iterator5.f();
                        }

                        return e;
                      }(i), r = [];
                      s.forEach(function (e) {
                        r.push(_this12._fetchRange(t, e, h));
                      });
                      _context7.next = 4;
                      return Object(_core_promiseUtils_js__WEBPACK_IMPORTED_MODULE_1__["all"])(r);

                    case 4:
                    case "end":
                      return _context7.stop();
                  }
                }
              }, _callee7);
            }));

            function _fetchRanges(_x9, _x10, _x11) {
              return _fetchRanges2.apply(this, arguments);
            }

            return _fetchRanges;
          }()
        }, {
          key: "_fetchRange",
          value: function () {
            var _fetchRange2 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee8(t, e, h) {
              var _this13 = this;

              var s, r, a, n;
              return regeneratorRuntime.wrap(function _callee8$(_context8) {
                while (1) {
                  switch (_context8.prev = _context8.next) {
                    case 0:
                      if (!(e > 256)) {
                        _context8.next = 2;
                        break;
                      }

                      return _context8.abrupt("return", null);

                    case 2:
                      s = t + e;
                      return _context8.abrupt("return", (r = this._rangePromises, a = s, n = function n() {
                        return _this13._glyphSource.getRange(t, e, h);
                      }, r.has(a) || r.set(a, n().then(function () {
                        r["delete"](a);
                      })["catch"](function (t) {
                        r["delete"](a), Object(_core_promiseUtils_js__WEBPACK_IMPORTED_MODULE_1__["throwIfNotAbortError"])(t);
                      })), r.get(a)));

                    case 4:
                    case "end":
                      return _context8.stop();
                  }
                }
              }, _callee8, this);
            }));

            function _fetchRange(_x12, _x13, _x14) {
              return _fetchRange2.apply(this, arguments);
            }

            return _fetchRange;
          }()
        }, {
          key: "_getMosaicItem",
          value: function _getMosaicItem(t, e, i) {
            if (!t[i]) {
              var h = this._glyphSource.getGlyph(e, i);

              if (!h || !h.metrics) return function (t) {
                return {
                  rect: new _Rect_js__WEBPACK_IMPORTED_MODULE_6__["default"](0, 0, 0, 0),
                  page: 0,
                  metrics: {
                    left: 0,
                    width: 0,
                    height: 0,
                    advance: 0,
                    top: 0
                  },
                  code: t,
                  sdf: !0
                };
              }(i);

              var r = this._recordGlyph(h),
                  a = this._currentPage,
                  n = h.metrics;

              t[i] = {
                rect: r,
                page: a,
                metrics: n,
                code: i,
                sdf: !0
              }, this._invalidate();
            }

            return t[i];
          }
        }, {
          key: "_getMosaicItemsStable",
          value: function _getMosaicItemsStable(t, e, i) {
            var _this14 = this;

            var h = [],
                s = i.map(function (t) {
              return t;
            });
            return i.map(function (t) {
              return t;
            }).sort().map(function (i) {
              return _this14._getMosaicItem(t, e, i);
            }).forEach(function (t) {
              var e = s.indexOf(t.code);
              h[e] = t, s[e] = null;
            }), h;
          }
        }, {
          key: "_recordGlyph",
          value: function _recordGlyph(e) {
            var i = e.metrics;
            var h;
            if (0 === i.width) h = new _Rect_js__WEBPACK_IMPORTED_MODULE_6__["default"](0, 0, 0, 0);else {
              var s = 3,
                  a = i.width + 2 * s,
                  n = i.height + 2 * s;
              h = this._binPack.allocate(a, n), h.isEmpty && (this._dirties[this._currentPage] || (this._glyphData[this._currentPage] = null), this._currentPage = this._glyphData.length, this._glyphData.push(new Uint8Array(this.width * this.height)), this._dirties.push(!0), this._textures.push(null), this._initDecorationGlyph(), this._binPack = new _RectangleBinPack_js__WEBPACK_IMPORTED_MODULE_7__["default"](this.width - 4, this.height - 4), h = this._binPack.allocate(a, n));
              var c = this._glyphData[this._currentPage],
                  o = e.bitmap;
              var l, g;
              if (o) for (var t = 0; t < n; t++) {
                l = a * t, g = this.width * (h.y + t) + h.x;

                for (var _t4 = 0; _t4 < a; _t4++) {
                  c[g + _t4] = o[l + _t4];
                }
              }
              Object(_core_has_js__WEBPACK_IMPORTED_MODULE_0__["default"])("esri-glyph-debug") && this._showDebugPage(c);
            }
            return h;
          }
        }, {
          key: "_showDebugPage",
          value: function _showDebugPage(t) {
            var e = document.createElement("canvas"),
                i = e.getContext("2d"),
                h = new ImageData(this.width, this.height),
                s = h.data;
            e.width = this.width, e.height = this.height, e.style.border = "1px solid black";

            for (var _e4 = 0; _e4 < t.length; ++_e4) {
              s[4 * _e4 + 0] = t[_e4], s[4 * _e4 + 1] = 0, s[4 * _e4 + 2] = 0, s[4 * _e4 + 3] = 255;
            }

            i.putImageData(h, 0, 0), document.body.appendChild(e);
          }
        }]);

        return _class4;
      }();
      /***/

    },

    /***/
    "Coxz":
    /*!**************************************************************************************************!*\
      !*** ./node_modules/@arcgis/core/views/2d/engine/webgl/effects/post-processing/EffectManager.js ***!
      \**************************************************************************************************/

    /*! exports provided: EffectManager */

    /***/
    function Coxz(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "EffectManager", function () {
        return s;
      });
      /*
      All material copyright ESRI, All Rights Reserved, unless otherwise specified.
      See https://js.arcgis.com/4.18/esri/copyright.txt for details.
      */


      function e(e) {
        switch (e) {
          case "bloom":
          case "blur":
          case "opacity":
          case "drop-shadow":
            return e;

          default:
            return "colorize";
        }
      }

      var t = {
        colorize: function () {
          var _colorize = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee9() {
            return regeneratorRuntime.wrap(function _callee9$(_context9) {
              while (1) {
                switch (_context9.prev = _context9.next) {
                  case 0:
                    _context9.next = 2;
                    return __webpack_require__.e(
                    /*! import() | Colorize-js */
                    "Colorize-js").then(__webpack_require__.bind(null,
                    /*! ./Colorize.js */
                    "P3Vg"));

                  case 2:
                    _context9.t0 = _context9.sent.Colorize;
                    return _context9.abrupt("return", new _context9.t0());

                  case 4:
                  case "end":
                    return _context9.stop();
                }
              }
            }, _callee9);
          }));

          function colorize() {
            return _colorize.apply(this, arguments);
          }

          return colorize;
        }(),
        blur: function () {
          var _blur = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee10() {
            return regeneratorRuntime.wrap(function _callee10$(_context10) {
              while (1) {
                switch (_context10.prev = _context10.next) {
                  case 0:
                    _context10.next = 2;
                    return __webpack_require__.e(
                    /*! import() | Blur-js */
                    "Blur-js").then(__webpack_require__.bind(null,
                    /*! ./Blur.js */
                    "B2cn"));

                  case 2:
                    _context10.t0 = _context10.sent.Blur;
                    return _context10.abrupt("return", new _context10.t0());

                  case 4:
                  case "end":
                    return _context10.stop();
                }
              }
            }, _callee10);
          }));

          function blur() {
            return _blur.apply(this, arguments);
          }

          return blur;
        }(),
        bloom: function () {
          var _bloom = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee11() {
            return regeneratorRuntime.wrap(function _callee11$(_context11) {
              while (1) {
                switch (_context11.prev = _context11.next) {
                  case 0:
                    _context11.next = 2;
                    return __webpack_require__.e(
                    /*! import() | Bloom-js */
                    "Bloom-js").then(__webpack_require__.bind(null,
                    /*! ./Bloom.js */
                    "mxcV"));

                  case 2:
                    _context11.t0 = _context11.sent.Bloom;
                    return _context11.abrupt("return", new _context11.t0());

                  case 4:
                  case "end":
                    return _context11.stop();
                }
              }
            }, _callee11);
          }));

          function bloom() {
            return _bloom.apply(this, arguments);
          }

          return bloom;
        }(),
        opacity: function () {
          var _opacity = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee12() {
            return regeneratorRuntime.wrap(function _callee12$(_context12) {
              while (1) {
                switch (_context12.prev = _context12.next) {
                  case 0:
                    _context12.next = 2;
                    return __webpack_require__.e(
                    /*! import() | Opacity-js */
                    "Opacity-js").then(__webpack_require__.bind(null,
                    /*! ./Opacity.js */
                    "T/wP"));

                  case 2:
                    _context12.t0 = _context12.sent.Opacity;
                    return _context12.abrupt("return", new _context12.t0());

                  case 4:
                  case "end":
                    return _context12.stop();
                }
              }
            }, _callee12);
          }));

          function opacity() {
            return _opacity.apply(this, arguments);
          }

          return opacity;
        }(),
        "drop-shadow": function () {
          var _dropShadow = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee13() {
            return regeneratorRuntime.wrap(function _callee13$(_context13) {
              while (1) {
                switch (_context13.prev = _context13.next) {
                  case 0:
                    _context13.next = 2;
                    return __webpack_require__.e(
                    /*! import() | DropShadow-js */
                    "DropShadow-js").then(__webpack_require__.bind(null,
                    /*! ./DropShadow.js */
                    "eylR"));

                  case 2:
                    _context13.t0 = _context13.sent.DropShadow;
                    return _context13.abrupt("return", new _context13.t0());

                  case 4:
                  case "end":
                    return _context13.stop();
                }
              }
            }, _callee13);
          }));

          function dropShadow() {
            return _dropShadow.apply(this, arguments);
          }

          return dropShadow;
        }()
      };

      var s = /*#__PURE__*/function () {
        function s(e) {
          _classCallCheck(this, s);

          this._requestRender = e, this._effectMap = new Map(), this._effectPromiseMap = new Map();
        }

        _createClass(s, [{
          key: "dispose",
          value: function dispose() {
            this._requestRender && (this._requestRender = null), this._effectMap.forEach(function (e) {
              return e.dispose();
            }), this._effectMap.clear(), this._effectPromiseMap.clear();
          }
        }, {
          key: "getPostProcessingEffects",
          value: function getPostProcessingEffects(t) {
            if (!t || 0 === t.length) return [];
            var _s3 = [];

            var _iterator6 = _createForOfIteratorHelper(t),
                _step6;

            try {
              for (_iterator6.s(); !(_step6 = _iterator6.n()).done;) {
                var o = _step6.value;

                var _t5 = e(o.type),
                    r = this._effectMap.get(_t5);

                r ? _s3.push({
                  postProcessingEffect: r,
                  effect: o
                }) : this._enablePostProcessingEffect(_t5);
              }
            } catch (err) {
              _iterator6.e(err);
            } finally {
              _iterator6.f();
            }

            return _s3;
          }
        }, {
          key: "_enablePostProcessingEffect",
          value: function () {
            var _enablePostProcessingEffect2 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee14(e) {
              var t;
              return regeneratorRuntime.wrap(function _callee14$(_context14) {
                while (1) {
                  switch (_context14.prev = _context14.next) {
                    case 0:
                      _context14.next = 2;
                      return this._loadPostProcessingEffect(e);

                    case 2:
                      t = _context14.sent;
                      this._requestRender && (this._effectMap.set(e, t), this._requestRender.requestRender());

                    case 4:
                    case "end":
                      return _context14.stop();
                  }
                }
              }, _callee14, this);
            }));

            function _enablePostProcessingEffect(_x15) {
              return _enablePostProcessingEffect2.apply(this, arguments);
            }

            return _enablePostProcessingEffect;
          }()
        }, {
          key: "_loadPostProcessingEffect",
          value: function () {
            var _loadPostProcessingEffect2 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee15(e) {
              return regeneratorRuntime.wrap(function _callee15$(_context15) {
                while (1) {
                  switch (_context15.prev = _context15.next) {
                    case 0:
                      return _context15.abrupt("return", (this._effectPromiseMap.has(e) || this._effectPromiseMap.set(e, t[e]()), this._effectPromiseMap.get(e)));

                    case 1:
                    case "end":
                      return _context15.stop();
                  }
                }
              }, _callee15, this);
            }));

            function _loadPostProcessingEffect(_x16) {
              return _loadPostProcessingEffect2.apply(this, arguments);
            }

            return _loadPostProcessingEffect;
          }()
        }]);

        return s;
      }();
      /***/

    },

    /***/
    "DKFY":
    /*!********************************************************************************!*\
      !*** ./node_modules/@arcgis/core/views/navigation/FilteredFiniteDifference.js ***!
      \********************************************************************************/

    /*! exports provided: FilteredFiniteDifference */

    /***/
    function DKFY(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "FilteredFiniteDifference", function () {
        return t;
      });
      /*
      All material copyright ESRI, All Rights Reserved, unless otherwise specified.
      See https://js.arcgis.com/4.18/esri/copyright.txt for details.
      */


      var t = /*#__PURE__*/function () {
        function t(_t6) {
          _classCallCheck(this, t);

          this.gain = _t6;
        }

        _createClass(t, [{
          key: "update",
          value: function update(_t7) {
            if (this.hasLastValue) {
              var e = this.computeDelta(_t7);
              this.updateDelta(e);
            }

            this.lastValue = _t7;
          }
        }, {
          key: "reset",
          value: function reset() {
            this.lastValue = void 0, this.filteredDelta = void 0;
          }
        }, {
          key: "hasLastValue",
          get: function get() {
            return void 0 !== this.lastValue;
          }
        }, {
          key: "hasFilteredDelta",
          get: function get() {
            return void 0 !== this.filteredDelta;
          }
        }, {
          key: "computeDelta",
          value: function computeDelta(_t8) {
            return _t8 - this.lastValue;
          }
        }, {
          key: "updateDelta",
          value: function updateDelta(_t9) {
            this.hasFilteredDelta ? this.filteredDelta = (1 - this.gain) * this.filteredDelta + this.gain * _t9 : this.filteredDelta = _t9;
          }
        }]);

        return t;
      }();
      /***/

    },

    /***/
    "DRKG":
    /*!*****************************************************************************!*\
      !*** ./node_modules/@arcgis/core/views/2d/engine/webgl/util/symbolUtils.js ***!
      \*****************************************************************************/

    /*! exports provided: keyFromSymbol */

    /***/
    function DRKG(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "keyFromSymbol", function () {
        return e;
      });
      /*
      All material copyright ESRI, All Rights Reserved, unless otherwise specified.
      See https://js.arcgis.com/4.18/esri/copyright.txt for details.
      */


      function e(e) {
        switch (e.type) {
          case "esriSMS":
            return "".concat(e.style, ".").concat(e.path);

          case "esriSLS":
            return "".concat(e.style, ".").concat(e.cap);

          case "esriSFS":
            return "".concat(e.style);

          case "esriPFS":
          case "esriPMS":
            return e.imageData ? "".concat(e.imageData).concat(e.width).concat(e.height) : "".concat(e.url).concat(e.width).concat(e.height);

          default:
            return e.mosaicHash ? e.mosaicHash : JSON.stringify(e);
        }
      }
      /***/

    },

    /***/
    "DxxZ":
    /*!*********************************************************************!*\
      !*** ./node_modules/@arcgis/core/core/accessorSupport/diffUtils.js ***!
      \*********************************************************************/

    /*! exports provided: diff, hasDiff, hasDiffAny, isEmpty */

    /***/
    function DxxZ(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "diff", function () {
        return y;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "hasDiff", function () {
        return p;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "hasDiffAny", function () {
        return a;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "isEmpty", function () {
        return m;
      });
      /* harmony import */


      var _maybe_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ../maybe.js */
      "srIe");
      /* harmony import */


      var _utils_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./utils.js */
      "TDcG");
      /* harmony import */


      var _Accessor_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ../Accessor.js */
      "/CmD");
      /* harmony import */


      var _Collection_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ../Collection.js */
      "LE9a");
      /*
      All material copyright ESRI, All Rights Reserved, unless otherwise specified.
      See https://js.arcgis.com/4.18/esri/copyright.txt for details.
      */


      var f = ["esri.Color", "esri.portal.Portal", "esri.symbols.support.Symbol3DAnchorPosition2D", "esri.symbols.support.Symbol3DAnchorPosition3D"];

      function i(t) {
        return t instanceof _Accessor_js__WEBPACK_IMPORTED_MODULE_2__["default"];
      }

      function c(t) {
        return t instanceof _Collection_js__WEBPACK_IMPORTED_MODULE_3__["default"] ? Object.keys(t.items) : i(t) ? Object(_utils_js__WEBPACK_IMPORTED_MODULE_1__["getProperties"])(t).keys() : t ? Object.keys(t) : [];
      }

      function u(t, e) {
        return t instanceof _Collection_js__WEBPACK_IMPORTED_MODULE_3__["default"] ? t.items[e] : t[e];
      }

      function l(t) {
        return t ? t.declaredClass : null;
      }

      function s(t, n) {
        var o = t.diff;
        if (o && "function" == typeof o) return o(t, n);
        var r = c(t),
            p = c(n);
        if (0 === r.length && 0 === p.length) return;
        if (!r.length || !p.length || function (t, e) {
          return !(!Array.isArray(t) || !Array.isArray(e)) && t.length !== e.length;
        }(t, n)) return {
          type: "complete",
          oldValue: t,
          newValue: n
        };
        var a = p.filter(function (t) {
          return -1 === r.indexOf(t);
        }),
            y = r.filter(function (t) {
          return -1 === p.indexOf(t);
        }),
            m = r.filter(function (e) {
          return p.indexOf(e) > -1 && u(t, e) !== u(n, e);
        }).concat(a, y).sort(),
            d = l(t);
        if (d && f.indexOf(d) > -1 && m.length) return {
          type: "complete",
          oldValue: t,
          newValue: n
        };
        var b;
        var h = i(t) && i(n);

        var _iterator7 = _createForOfIteratorHelper(m),
            _step7;

        try {
          for (_iterator7.s(); !(_step7 = _iterator7.n()).done;) {
            var _r9 = _step7.value;

            var _f2 = u(t, _r9),
                _i5 = u(n, _r9);

            var _c = void 0;

            (h || "function" != typeof _f2 && "function" != typeof _i5) && _f2 !== _i5 && (null == _f2 && null == _i5 || (_c = o && o[_r9] && "function" == typeof o[_r9] ? o[_r9](_f2, _i5) : "object" == typeof _f2 && "object" == typeof _i5 && l(_f2) === l(_i5) ? s(_f2, _i5) : {
              type: "complete",
              oldValue: _f2,
              newValue: _i5
            }, Object(_maybe_js__WEBPACK_IMPORTED_MODULE_0__["isSome"])(_c) && (Object(_maybe_js__WEBPACK_IMPORTED_MODULE_0__["isSome"])(b) ? b.diff[_r9] = _c : b = {
              type: "partial",
              diff: _defineProperty({}, _r9, _c)
            })));
          }
        } catch (err) {
          _iterator7.e(err);
        } finally {
          _iterator7.f();
        }

        return b;
      }

      function p(e, n) {
        if (Object(_maybe_js__WEBPACK_IMPORTED_MODULE_0__["isNone"])(e)) return !1;
        var o = n.split(".");
        var r = e;

        var _iterator8 = _createForOfIteratorHelper(o),
            _step8;

        try {
          for (_iterator8.s(); !(_step8 = _iterator8.n()).done;) {
            var t = _step8.value;
            if ("complete" === r.type) return !0;
            if ("partial" !== r.type) return !1;
            {
              var _e5 = r.diff[t];
              if (!_e5) return !1;
              r = _e5;
            }
          }
        } catch (err) {
          _iterator8.e(err);
        } finally {
          _iterator8.f();
        }

        return !0;
      }

      function a(t, e) {
        var _iterator9 = _createForOfIteratorHelper(e),
            _step9;

        try {
          for (_iterator9.s(); !(_step9 = _iterator9.n()).done;) {
            var n = _step9.value;
            if (p(t, n)) return !0;
          }
        } catch (err) {
          _iterator9.e(err);
        } finally {
          _iterator9.f();
        }

        return !1;
      }

      function y(t, e) {
        if ("function" != typeof t && "function" != typeof e && (t || e)) return !t || !e || "object" == typeof t && "object" == typeof e && l(t) !== l(e) ? {
          type: "complete",
          oldValue: t,
          newValue: e
        } : s(t, e);
      }

      function m(e) {
        if (Object(_maybe_js__WEBPACK_IMPORTED_MODULE_0__["isNone"])(e)) return !0;

        switch (e.type) {
          case "complete":
            return !1;

          case "collection":
            {
              var t = e;

              var _iterator10 = _createForOfIteratorHelper(t.added),
                  _step10;

              try {
                for (_iterator10.s(); !(_step10 = _iterator10.n()).done;) {
                  var _e6 = _step10.value;
                  if (!m(_e6)) return !1;
                }
              } catch (err) {
                _iterator10.e(err);
              } finally {
                _iterator10.f();
              }

              var _iterator11 = _createForOfIteratorHelper(t.removed),
                  _step11;

              try {
                for (_iterator11.s(); !(_step11 = _iterator11.n()).done;) {
                  var _e7 = _step11.value;
                  if (!m(_e7)) return !1;
                }
              } catch (err) {
                _iterator11.e(err);
              } finally {
                _iterator11.f();
              }

              var _iterator12 = _createForOfIteratorHelper(t.changed),
                  _step12;

              try {
                for (_iterator12.s(); !(_step12 = _iterator12.n()).done;) {
                  var _e8 = _step12.value;
                  if (!m(_e8)) return !1;
                }
              } catch (err) {
                _iterator12.e(err);
              } finally {
                _iterator12.f();
              }

              return !0;
            }

          case "partial":
            for (var _t10 in e.diff) {
              if (!m(e.diff[_t10])) return !1;
            }

            return !0;
        }
      }
      /***/

    },

    /***/
    "E7yl":
    /*!*************************************************************************!*\
      !*** ./node_modules/@arcgis/core/views/2d/engine/webgl/packingUtils.js ***!
      \*************************************************************************/

    /*! exports provided: packFloatRGBA */

    /***/
    function E7yl(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "packFloatRGBA", function () {
        return o;
      });
      /*
      All material copyright ESRI, All Rights Reserved, unless otherwise specified.
      See https://js.arcgis.com/4.18/esri/copyright.txt for details.
      */


      var r = [1, 256, 65536, 16777216],
          t = [1 / 256, 1 / 65536, 1 / 16777216, 1 / 4294967296],
          n = function (r) {
        var n = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;
        var o = 0;

        for (var e = 0; e < 4; e++) {
          o += r[n + e] * t[e];
        }

        return o;
      }(new Uint8ClampedArray([255, 255, 255, 255]));

      function o(t, o) {
        var e = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 0;

        var f = function (r, t, n) {
          if (r < t) return t;
          if (r > n) return n;
          return r;
        }(t, 0, n);

        for (var _t11 = 0; _t11 < 4; _t11++) {
          o[e + _t11] = Math.floor(256 * ((u = f * r[_t11]) - Math.floor(u)));
        }

        var u;
      }
      /***/

    },

    /***/
    "EdjT":
    /*!*********************************************************************************!*\
      !*** ./node_modules/@arcgis/core/views/navigation/RotationMomentumEstimator.js ***!
      \*********************************************************************************/

    /*! exports provided: RotationMomentumEstimator */

    /***/
    function EdjT(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "RotationMomentumEstimator", function () {
        return a;
      });
      /* harmony import */


      var _MomentumEstimator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ./MomentumEstimator.js */
      "VfAO");
      /*
      All material copyright ESRI, All Rights Reserved, unless otherwise specified.
      See https://js.arcgis.com/4.18/esri/copyright.txt for details.
      */


      var a = /*#__PURE__*/function (_MomentumEstimator_js) {
        _inherits(a, _MomentumEstimator_js);

        var _super5 = _createSuper(a);

        function a() {
          var t = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 3;

          var _a = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : .01;

          var s = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : .95;
          var e = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : 12;

          _classCallCheck(this, a);

          return _super5.call(this, t, _a, s, e);
        }

        _createClass(a, [{
          key: "add",
          value: function add(t, _a2) {
            if (this.value.hasLastValue) {
              var _a4 = this.value.lastValue;
              var s = t - _a4;

              for (; s > Math.PI;) {
                s -= 2 * Math.PI;
              }

              for (; s < -Math.PI;) {
                s += 2 * Math.PI;
              }

              t = _a4 + s;
            }

            _get(_getPrototypeOf(a.prototype), "add", this).call(this, t, _a2);
          }
        }]);

        return a;
      }(_MomentumEstimator_js__WEBPACK_IMPORTED_MODULE_0__["MomentumEstimator"]);
      /***/

    },

    /***/
    "FGzj":
    /*!****************************************************************************!*\
      !*** ./node_modules/@arcgis/core/views/2d/engine/webgl/MaterialManager.js ***!
      \****************************************************************************/

    /*! exports provided: default */

    /***/
    function FGzj(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony import */


      var _core_has_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ../../../../core/has.js */
      "wSAH");
      /* harmony import */


      var _core_maybe_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ../../../../core/maybe.js */
      "srIe");
      /* harmony import */


      var _core_mathUtils_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ../../../../core/mathUtils.js */
      "OKTS");
      /* harmony import */


      var _chunks_builtins_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ../../../../chunks/builtins.js */
      "n4uK");
      /* harmony import */


      var _webgl_FramebufferObject_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ../../../webgl/FramebufferObject.js */
      "0meK");
      /* harmony import */


      var _webgl_ProgramCache_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ../../../webgl/ProgramCache.js */
      "kGdt");
      /* harmony import */


      var _webgl_RenderingContext_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ../../../webgl/RenderingContext.js */
      "bfJE");
      /* harmony import */


      var _enums_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! ./enums.js */
      "yE7X");
      /* harmony import */


      var _shaders_MaterialPrograms_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! ./shaders/MaterialPrograms.js */
      "297m");
      /*
      All material copyright ESRI, All Rights Reserved, unless otherwise specified.
      See https://js.arcgis.com/4.18/esri/copyright.txt for details.
      */


      var a = function a(r) {
        return r === _enums_js__WEBPACK_IMPORTED_MODULE_7__["WGLDrawPhase"].HITTEST || r === _enums_js__WEBPACK_IMPORTED_MODULE_7__["WGLDrawPhase"].LABEL_ALPHA;
      },
          s = function s(_ref6, _s4, i, n) {
        var e = _ref6.rendererInfo,
            o = _ref6.drawPhase;
        return "".concat(_s4.getVariationHash(), "-").concat(n.join("."), "-").concat(function (r) {
          return (a(r) ? 1 : 0) | (r === _enums_js__WEBPACK_IMPORTED_MODULE_7__["WGLDrawPhase"].HIGHLIGHT ? 2 : 0);
        }(o), "-").concat(e.getVariationHash(), "-").concat(Object(_core_maybe_js__WEBPACK_IMPORTED_MODULE_1__["isSome"])(i) && i.join("."));
      };
      /* harmony default export */


      __webpack_exports__["default"] = /*#__PURE__*/function () {
        function _class5(r) {
          _classCallCheck(this, _class5);

          this._programByKey = new Map(), this._programCache = new _webgl_ProgramCache_js__WEBPACK_IMPORTED_MODULE_5__["default"](r);
        }

        _createClass(_class5, [{
          key: "dispose",
          value: function dispose() {
            this._programCache && this._programCache.dispose();
          }
        }, {
          key: "getProgram",
          value: function getProgram(r, e) {
            var t = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : [];
            var a = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : [];
            var s = e.vsPath + "." + e.fsPath + JSON.stringify(t) + a.join(".");
            if (this._programByKey.has(s)) return this._programByKey.get(s);

            var i = a.reduce(function (e, t) {
              return _objectSpread(_objectSpread({}, e), {}, _defineProperty({}, t, r.driverTestResult[t]));
            }, {}),
                n = _objectSpread(_objectSpread({}, t.map(function (r) {
              return "string" == typeof r ? {
                name: r,
                value: !0
              } : r;
            }).reduce(function (r, e) {
              return _objectSpread(_objectSpread({}, r), {}, _defineProperty({}, e.name, e.value));
            }, {})), i),
                g = e.vsPath,
                m = e.fsPath,
                h = e.attributes,
                p = this._programCache.getProgram(Object(_shaders_MaterialPrograms_js__WEBPACK_IMPORTED_MODULE_8__["createProgramTemplate"])(g, m, h), n);

            if (!p) throw new Error("Unable to get program for key: ${key}");
            return this._programByKey.set(s, p), p;
          }
        }, {
          key: "getMaterialProgram",
          value: function getMaterialProgram(e, i, n, g, m) {
            var h = arguments.length > 5 && arguments[5] !== undefined ? arguments[5] : ["ignoresSamplerPrecision"];
            var p = s(e, i, m, h);
            if (this._programByKey.has(p)) return this._programByKey.get(p);

            var c = function (e, o, s, i) {
              var n = i.reduce(function (r, t) {
                return _objectSpread(_objectSpread({}, r), {}, _defineProperty({}, t, e.driverTestResult[t]));
              }, {}),
                  g = _objectSpread(_objectSpread(_objectSpread({}, o.getVariation()), e.rendererInfo.getVariation()), {}, {
                highlight: e.drawPhase === _enums_js__WEBPACK_IMPORTED_MODULE_7__["WGLDrawPhase"].HIGHLIGHT,
                id: a(e.drawPhase)
              }, n);

              if (Object(_core_maybe_js__WEBPACK_IMPORTED_MODULE_1__["isSome"])(s)) {
                var _iterator13 = _createForOfIteratorHelper(s),
                    _step13;

                try {
                  for (_iterator13.s(); !(_step13 = _iterator13.n()).done;) {
                    var r = _step13.value;
                    g[r] = !0;
                  }
                } catch (err) {
                  _iterator13.e(err);
                } finally {
                  _iterator13.f();
                }
              }

              return g;
            }(e, i, m, h),
                f = this._programCache.getProgram(Object(_shaders_MaterialPrograms_js__WEBPACK_IMPORTED_MODULE_8__["createProgramTemplate"])(n, n, g), c);

            if (!f) throw new Error("Unable to get program for key: ${key}");
            return this._programByKey.set(p, f), f;
          }
        }]);

        return _class5;
      }();
      /***/

    },

    /***/
    "FrEu":
    /*!***************************************************************************!*\
      !*** ./node_modules/@arcgis/core/views/2d/engine/webgl/effects/Effect.js ***!
      \***************************************************************************/

    /*! exports provided: Effect */

    /***/
    function FrEu(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "Effect", function () {
        return t;
      });
      /*
      All material copyright ESRI, All Rights Reserved, unless otherwise specified.
      See https://js.arcgis.com/4.18/esri/copyright.txt for details.
      */


      var t = function t() {
        _classCallCheck(this, t);

        this.name = this.constructor.name;
      };
      /***/

    },

    /***/
    "G+vY":
    /*!********************************************************************************!*\
      !*** ./node_modules/@arcgis/core/views/2d/engine/webgl/animatedFormats/gif.js ***!
      \********************************************************************************/

    /*! exports provided: default, getGIFSize, isAnimatedGIF, isGIF */

    /***/
    function GVY(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "getGIFSize", function () {
        return u;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "isAnimatedGIF", function () {
        return m;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "isGIF", function () {
        return p;
      });
      /* harmony import */


      var _core_Error_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ../../../../../core/Error.js */
      "zlDU");
      /* harmony import */


      var _core_promiseUtils_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ../../../../../core/promiseUtils.js */
      "9MzC");
      /*
      All material copyright ESRI, All Rights Reserved, unless otherwise specified.
      See https://js.arcgis.com/4.18/esri/copyright.txt for details.
      */


      var r = 249,
          h = 254,
          o = 255,
          l = 1,
          n = 44,
          d = 59;

      function p(t) {
        if (!t || 0 === t.byteLength) return !1;
        var e = t.constructor === Uint8Array ? t : new Uint8Array(t);
        return 71 === e[0] && 73 === e[1] && 70 === e[2] && 56 === e[3];
      }

      function u(t) {
        var e = new Uint8ClampedArray(t);
        var s = 6;
        return [e[s++] + (e[s++] << 8), e[s++] + (e[s++] << 8)];
      }

      function m(t) {
        if (!t || 0 === t.byteLength) return !1;
        var e = new Uint8Array(t);
        if (!p(e)) return !1;
        var s = 0;

        for (var _t12 = 0, i = e.length - 9; _t12 < i && (0 !== e[_t12] || 33 !== e[_t12 + 1] || 249 !== e[_t12 + 2] || 4 !== e[_t12 + 3] || 0 !== e[_t12 + 8] || 44 !== e[_t12 + 9] && 33 !== e[_t12 + 9] || (s++, !(s > 1))); ++_t12) {
          ;
        }

        return s > 1;
      }

      var c = /*#__PURE__*/function () {
        function c() {
          _classCallCheck(this, c);

          this.paused = !1, this.playing = !1, this.waitTillDone = !0, this.loading = !1, this.firstFrameOnly = !1, this.frames = [], this.comment = "", this.length = 0, this.currentFrameNumber = 0, this.frameCount = 0, this.playSpeed = 1, this.lastFrame = null, this.playOnLoad = !0, this.complete = !1, this.interlaceOffsets = [0, 4, 2, 1], this.interlaceSteps = [8, 8, 4, 2], this._lastUsedFrame = -1;
        }

        _createClass(c, [{
          key: "play",
          value: function play() {
            this.playing || (this.paused = !1, this.playing = !0, this._play());
          }
        }, {
          key: "pause",
          value: function pause() {
            this.paused = !0, this.playing = !1, clearTimeout(this.timerID);
          }
        }, {
          key: "togglePlay",
          value: function togglePlay() {
            this.paused || !this.playing ? this.play() : this.pause();
          }
        }, {
          key: "bindFrame",
          value: function bindFrame(t, e, s) {
            t.bindTexture(e, s);
            var i = this.frameChanged();

            if (i) {
              var _t13 = this.currentFrame,
                  _s5 = _t13.frameData;
              e.updateData(0, 0, 0, _t13.width, _t13.height, _s5), this.updateUsedFrame();
            }

            return i;
          }
        }, {
          key: "seekFrame",
          value: function seekFrame(t) {
            clearTimeout(this.timerID), this.currentFrameNumber = t % this.frames.length, this.playing ? this._play() : this._setCurrentFrame(this.currentFrameNumber);
          }
        }, {
          key: "seek",
          value: function seek(t) {
            clearTimeout(this.timerID), t < 0 && (t = 0), t *= 1e3, t %= this.length;
            var e = 0;

            for (; t > this.frames[e].time + this.frames[e].delay && e < this.frames.length;) {
              e += 1;
            }

            this.currentFrameNumber = e, this.playing ? this._play() : this._setCurrentFrame(this.currentFrameNumber);
          }
        }, {
          key: "frameChanged",
          value: function frameChanged() {
            return this._lastUsedFrame !== this.currentFrameNumber;
          }
        }, {
          key: "updateUsedFrame",
          value: function updateUsedFrame() {
            this._lastUsedFrame = this.currentFrameNumber;
          }
        }, {
          key: "_load",
          value: function () {
            var _load2 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee16(s, i) {
              return regeneratorRuntime.wrap(function _callee16$(_context16) {
                while (1) {
                  switch (_context16.prev = _context16.next) {
                    case 0:
                      _context16.prev = 0;
                      this.loading = !0;
                      _context16.next = 4;
                      return this._parse(s, i);

                    case 4:
                      this.loading = !1;
                      this.play();
                      _context16.next = 12;
                      break;

                    case 8:
                      _context16.prev = 8;
                      _context16.t0 = _context16["catch"](0);

                      if (Object(_core_promiseUtils_js__WEBPACK_IMPORTED_MODULE_1__["isAbortError"])(_context16.t0)) {
                        _context16.next = 12;
                        break;
                      }

                      return _context16.abrupt("return", new _core_Error_js__WEBPACK_IMPORTED_MODULE_0__["default"]("invalid-resource", "Could not parse gif!"));

                    case 12:
                    case "end":
                      return _context16.stop();
                  }
                }
              }, _callee16, this, [[0, 8]]);
            }));

            function _load(_x17, _x18) {
              return _load2.apply(this, arguments);
            }

            return _load;
          }()
        }, {
          key: "_parse",
          value: function _parse(t, e) {
            var _this15 = this;

            var i = new f(t);
            i.pos += 6, this.width = i.data[i.pos++] + (i.data[i.pos++] << 8), this.height = i.data[i.pos++] + (i.data[i.pos++] << 8);
            var a = i.data[i.pos++];
            return this.globalColourCount = 1 << 1 + (7 & a), i.pos++, i.pos++, 128 & a && (this.globalColourTable = this._parseColourTable(this.globalColourCount, i)), Object(_core_promiseUtils_js__WEBPACK_IMPORTED_MODULE_1__["create"])(function (t, s) {
              setTimeout(function () {
                return _this15._parseBlock(i, t, s, e);
              }, 0);
            });
          }
        }, {
          key: "_parseBlock",
          value: function () {
            var _parseBlock2 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee17(t, e, s, r) {
              var _this16 = this;

              var h;
              return regeneratorRuntime.wrap(function _callee17$(_context17) {
                while (1) {
                  switch (_context17.prev = _context17.next) {
                    case 0:
                      if (!(r && r.signal && Object(_core_promiseUtils_js__WEBPACK_IMPORTED_MODULE_1__["isAborted"])(r.signal))) {
                        _context17.next = 2;
                        break;
                      }

                      return _context17.abrupt("return", void s(Object(_core_promiseUtils_js__WEBPACK_IMPORTED_MODULE_1__["createAbortError"])()));

                    case 2:
                      h = t.data[t.pos++];

                      if (!(h === n)) {
                        _context17.next = 8;
                        break;
                      }

                      if (!(this._parseImg(t), this.firstFrameOnly)) {
                        _context17.next = 6;
                        break;
                      }

                      return _context17.abrupt("return", (this._finishedLoading(), void e()));

                    case 6:
                      _context17.next = 11;
                      break;

                    case 8:
                      if (!(h === d)) {
                        _context17.next = 10;
                        break;
                      }

                      return _context17.abrupt("return", (this._finishedLoading(), void e()));

                    case 10:
                      this._parseExt(t);

                    case 11:
                      "function" == typeof this.onprogress && this.onprogress({
                        bytesRead: t.pos,
                        totalBytes: t.data.length,
                        frame: this.frames.length
                      }), setTimeout(function () {
                        return _this16._parseBlock(t, e, s, r);
                      }, 0);

                    case 12:
                    case "end":
                      return _context17.stop();
                  }
                }
              }, _callee17, this);
            }));

            function _parseBlock(_x19, _x20, _x21, _x22) {
              return _parseBlock2.apply(this, arguments);
            }

            return _parseBlock;
          }()
        }, {
          key: "_parseColourTable",
          value: function _parseColourTable(t, e) {
            var s = [];

            for (var i = 0; i < t; i++) {
              s.push([e.data[e.pos++], e.data[e.pos++], e.data[e.pos++]]);
            }

            return s;
          }
        }, {
          key: "_parseImg",
          value: function _parseImg(t) {
            var _this17 = this;

            var e = function e(t) {
              var e = _this17.pixelBufSize / t;
              _this17.interlacedBufSize !== _this17.pixelBufSize && (_this17.deinterlaceBuf = new Uint8Array(_this17.pixelBufSize), _this17.interlacedBufSize = _this17.pixelBufSize);
              var s = 0;

              for (var _i6 = 0; _i6 < 4; _i6++) {
                for (var a = _this17.interlaceOffsets[_i6]; a < e; a += _this17.interlaceSteps[_i6]) {
                  _this17.deinterlaceBuf.set(_this17.pixelBuf.subarray(s, s + t), a * t), s += t;
                }
              }
            },
                s = {};

            this.frames.push(s), s.disposalMethod = this.disposalMethod, s.time = this.length, s.delay = 10 * this.delayTime, this.length += s.delay, this.transparencyGiven ? s.transparencyIndex = this.transparencyIndex : s.transparencyIndex = void 0, s.leftPos = t.data[t.pos++] + (t.data[t.pos++] << 8), s.topPos = t.data[t.pos++] + (t.data[t.pos++] << 8), s.width = t.data[t.pos++] + (t.data[t.pos++] << 8), s.height = t.data[t.pos++] + (t.data[t.pos++] << 8);
            var i = t.data[t.pos++];
            s.localColourTableFlag = !!(128 & i), s.localColourTableFlag && (s.localColourTable = this._parseColourTable(1 << 1 + (7 & i), t)), this.pixelBufSize !== s.width * s.height && (this.pixelBuf = new Uint8Array(s.width * s.height), this.pixelBufSize = s.width * s.height), this._lzwDecode(t.data[t.pos++], t.readSubBlocksB()), 64 & i ? (s.interlaced = !0, e(s.width)) : s.interlaced = !1, this._processFrame(s);
          }
        }, {
          key: "_lzwDecode",
          value: function _lzwDecode(t, e) {
            var s, i, a, r, h, o, l, n, d, p, u;
            a = i = 0;
            var m = [];

            for (r = 1 << t, h = r + 1, o = t + 1, u = !1; !u;) {
              for (n = l, l = 0, s = 0; s < o; s++) {
                e[a >> 3] & 1 << (7 & a) && (l |= 1 << s), a++;
              }

              if (l === r) {
                for (m = [], o = t + 1, s = 0; s < r; s++) {
                  m[s] = [s];
                }

                m[r] = [], m[h] = null;
              } else {
                if (l === h) return void (u = !0);

                for (l >= m.length ? m.push(m[n].concat(m[n][0])) : n !== r && m.push(m[n].concat(m[l][0])), d = m[l], p = d.length, s = 0; s < p; s++) {
                  this.pixelBuf[i++] = d[s];
                }

                m.length === 1 << o && o < 12 && o++;
              }
            }
          }
        }, {
          key: "_processFrame",
          value: function _processFrame(t) {
            t.image = document.createElement("canvas"), t.image.width = this.width, t.image.height = this.height, t.ctx = t.image.getContext("2d");
            var e = t.localColourTableFlag ? t.localColourTable : this.globalColourTable;
            null === this.lastFrame && (this.lastFrame = t);
            var s = 2 === this.lastFrame.disposalMethod || 3 === this.lastFrame.disposalMethod;
            s || t.ctx.drawImage(this.lastFrame.image, 0, 0, this.width, this.height);
            var i = t.ctx.getImageData(t.leftPos, t.topPos, t.width, t.height),
                a = t.transparencyIndex,
                r = i.data,
                h = t.interlaced ? this.deinterlaceBuf : this.pixelBuf,
                o = h.length;
            var l,
                n,
                d = 0;

            for (var _t14 = 0; _t14 < o; _t14++) {
              l = h[_t14], n = e[l], a !== l ? (r[d++] = n[0], r[d++] = n[1], r[d++] = n[2], r[d++] = 255) : s ? (r[d + 3] = 0, d += 4) : d += 4;
            }

            t.ctx.putImageData(i, t.leftPos, t.topPos), this.lastFrame = t;
          }
        }, {
          key: "_parseExt",
          value: function _parseExt(t) {
            var e = t.data[t.pos++];
            e === r ? this._parseGCExt(t) : e === h ? this.comment += t.readSubBlocks() : e === o ? this._parseAppExt(t) : (e === l && (t.pos += 13), t.readSubBlocks());
          }
        }, {
          key: "_parseAppExt",
          value: function _parseAppExt(t) {
            t.pos += 1, "NETSCAPE" === t.getString(8) ? t.pos += 8 : (t.pos += 3, t.readSubBlocks());
          }
        }, {
          key: "_parseGCExt",
          value: function _parseGCExt(t) {
            var e;
            t.pos++, e = t.data[t.pos++], this.disposalMethod = (28 & e) >> 2, this.transparencyGiven = !!(1 & e), this.delayTime = t.data[t.pos++] + (t.data[t.pos++] << 8), this.transparencyIndex = t.data[t.pos++], t.pos++;
          }
        }, {
          key: "_finishedLoading",
          value: function _finishedLoading() {
            this.loading = !1, this.frameCount = this.frames.length, this.lastFrame = null, this.complete = !0, this.disposalMethod = void 0, this.transparencyGiven = void 0, this.delayTime = void 0, this.transparencyIndex = void 0, this.waitTillDone = void 0, this.pixelBuf = void 0, this.deinterlaceBuf = void 0, this.pixelBufSize = void 0, this.deinterlaceBuf = void 0, this.currentFrameNumber = 0, this.frames.length > 0 && this._setCurrentFrame(0), this.playOnLoad && this.play();
          }
        }, {
          key: "_play",
          value: function _play() {
            var _this18 = this;

            var t, e;
            0 !== this.playSpeed ? (this.playSpeed < 0 ? (this.currentFrameNumber -= 1, this.currentFrameNumber < 0 && (this.currentFrameNumber = this.frames.length - 1), e = this.currentFrameNumber, e -= 1, e < 0 && (e = this.frames.length - 1), t = 1 * -this.frames[e].delay / this.playSpeed) : (this.currentFrameNumber += 1, this.currentFrameNumber %= this.frames.length, t = 1 * this.frames[this.currentFrameNumber].delay / this.playSpeed), this._setCurrentFrame(this.currentFrameNumber), this.timerID = window.setTimeout(function () {
              return _this18._play();
            }, t)) : this.pause();
          }
        }, {
          key: "_setCurrentFrame",
          value: function _setCurrentFrame(t) {
            var e = this.frames[t];
            this.currentFrame = {
              frameData: e.image,
              top: 0,
              left: 0,
              width: this.width,
              height: this.height
            };
          }
        }], [{
          key: "create",
          value: function () {
            var _create = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee18(s, i) {
              var a;
              return regeneratorRuntime.wrap(function _callee18$(_context18) {
                while (1) {
                  switch (_context18.prev = _context18.next) {
                    case 0:
                      a = new c();
                      _context18.prev = 1;
                      _context18.next = 4;
                      return a._load(s, i);

                    case 4:
                      _context18.next = 10;
                      break;

                    case 6:
                      _context18.prev = 6;
                      _context18.t0 = _context18["catch"](1);

                      if (Object(_core_promiseUtils_js__WEBPACK_IMPORTED_MODULE_1__["isAbortError"])(_context18.t0)) {
                        _context18.next = 10;
                        break;
                      }

                      return _context18.abrupt("return", new _core_Error_js__WEBPACK_IMPORTED_MODULE_0__["default"]("invalid-resource", "Could not load PNG: ".concat(_context18.t0.message)));

                    case 10:
                      return _context18.abrupt("return", a);

                    case 11:
                    case "end":
                      return _context18.stop();
                  }
                }
              }, _callee18, null, [[1, 6]]);
            }));

            function create(_x23, _x24) {
              return _create.apply(this, arguments);
            }

            return create;
          }()
        }]);

        return c;
      }();

      var f = /*#__PURE__*/function () {
        function f(t) {
          _classCallCheck(this, f);

          this.pos = 0, this.data = new Uint8ClampedArray(t), this.len = this.data.length;
        }

        _createClass(f, [{
          key: "getString",
          value: function getString(t) {
            var e = "";

            for (; t--;) {
              e += String.fromCharCode(this.data[this.pos++]);
            }

            return e;
          }
        }, {
          key: "readSubBlocks",
          value: function readSubBlocks() {
            var t,
                e,
                s = "";

            do {
              for (e = t = this.data[this.pos++]; e--;) {
                s += String.fromCharCode(this.data[this.pos++]);
              }
            } while (0 !== t && this.pos < this.len);

            return s;
          }
        }, {
          key: "readSubBlocksB",
          value: function readSubBlocksB() {
            var t, e;
            var s = [];

            do {
              for (e = t = this.data[this.pos++]; e--;) {
                s.push(this.data[this.pos++]);
              }
            } while (0 !== t && this.pos < this.len);

            return s;
          }
        }]);

        return f;
      }();
      /* harmony default export */


      __webpack_exports__["default"] = c;
      /***/
    },

    /***/
    "JlMO":
    /*!**********************************************************************!*\
      !*** ./node_modules/@arcgis/core/views/2d/navigation/actions/Pan.js ***!
      \**********************************************************************/

    /*! exports provided: default */

    /***/
    function JlMO(module, __webpack_exports__, __webpack_require__) {
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


      var _core_Accessor_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! ../../../../core/Accessor.js */
      "/CmD");
      /* harmony import */


      var _geometry_Point_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
      /*! ../../../../geometry/Point.js */
      "SuVq");
      /* harmony import */


      var _geometry_js__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
      /*! ../../../../geometry.js */
      "4GrV");
      /* harmony import */


      var _core_screenUtils_js__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
      /*! ../../../../core/screenUtils.js */
      "qRWG");
      /* harmony import */


      var _chunks_vec3f64_js__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
      /*! ../../../../chunks/vec3f64.js */
      "Cy1f");
      /* harmony import */


      var _chunks_vec3_js__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(
      /*! ../../../../chunks/vec3.js */
      "5DEt");
      /* harmony import */


      var _Viewpoint_js__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(
      /*! ../../../../Viewpoint.js */
      "y3LX");
      /* harmony import */


      var _viewpointUtils_js__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(
      /*! ../../viewpointUtils.js */
      "qYtE");
      /* harmony import */


      var _navigation_PanPlanarMomentumEstimator_js__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(
      /*! ../../../navigation/PanPlanarMomentumEstimator.js */
      "TkeS");
      /*
      All material copyright ESRI, All Rights Reserved, unless otherwise specified.
      See https://js.arcgis.com/4.18/esri/copyright.txt for details.
      */


      var c = /*#__PURE__*/function (_core_Accessor_js__WE2) {
        _inherits(c, _core_Accessor_js__WE2);

        var _super6 = _createSuper(c);

        function c(t) {
          var _this19;

          _classCallCheck(this, c);

          _this19 = _super6.call(this, t), _this19.animationTime = 0, _this19.momentumEstimator = new _navigation_PanPlanarMomentumEstimator_js__WEBPACK_IMPORTED_MODULE_17__["PanPlanarMomentumEstimator"](500, 6, .92), _this19.momentum = null, _this19.tmpMomentum = Object(_chunks_vec3f64_js__WEBPACK_IMPORTED_MODULE_13__["c"])(), _this19.momentumFinished = !1, _this19.viewpoint = new _Viewpoint_js__WEBPACK_IMPORTED_MODULE_15__["default"]({
            targetGeometry: new _geometry_Point_js__WEBPACK_IMPORTED_MODULE_10__["default"](),
            scale: 0,
            rotation: 0
          }), _this19.watch("momentumFinished", function (t) {
            t && _this19.navigation.stop();
          });
          return _this19;
        }

        _createClass(c, [{
          key: "begin",
          value: function begin(t, i) {
            this.navigation.begin(), this.momentumEstimator.reset(), this.addToEstimator(i), this.previousDrag = i;
          }
        }, {
          key: "update",
          value: function update(t, i) {
            this.addToEstimator(i);
            var o = i.center.x,
                s = i.center.y;
            var e = this.previousDrag;
            o = e ? e.center.x - o : -o, s = e ? s - e.center.y : s, t.viewpoint = Object(_viewpointUtils_js__WEBPACK_IMPORTED_MODULE_16__["translateBy"])(this.viewpoint, t.viewpoint, [o || 0, s || 0]), this.previousDrag = i;
          }
        }, {
          key: "end",
          value: function end(t, i) {
            this.addToEstimator(i);
            var o = t.navigation.momentumEnabled;
            this.momentum = o ? this.momentumEstimator.evaluateMomentum() : null, this.animationTime = 0, this.momentum && this.onAnimationUpdate(t), this.previousDrag = null, this.navigation.end();
          }
        }, {
          key: "addToEstimator",
          value: function addToEstimator(t) {
            var i = t.center.x,
                o = t.center.y,
                s = Object(_core_screenUtils_js__WEBPACK_IMPORTED_MODULE_12__["createScreenPointArray"])(-i, o),
                e = Object(_chunks_vec3f64_js__WEBPACK_IMPORTED_MODULE_13__["f"])(-i, o, 0);
            this.momentumEstimator.add(s, e, .001 * t.timestamp);
          }
        }, {
          key: "onAnimationUpdate",
          value: function onAnimationUpdate(t) {
            var _this20 = this;

            this.navigation.animationManager.animateContinous(t.viewpoint, function (i, o) {
              _this20.momentumFinished = !_this20.momentum || _this20.momentum.isFinished(_this20.animationTime);
              var s = .001 * o;

              if (!_this20.momentumFinished) {
                var _o3 = _this20.momentum.valueDelta(_this20.animationTime, s);

                Object(_chunks_vec3_js__WEBPACK_IMPORTED_MODULE_14__["a"])(_this20.tmpMomentum, _this20.momentum.direction, _o3), Object(_viewpointUtils_js__WEBPACK_IMPORTED_MODULE_16__["translateBy"])(i, i, _this20.tmpMomentum), t.constraints.constrainByGeometry(i);
              }

              _this20.animationTime += s;
            });
          }
        }, {
          key: "stopMomentumNavigation",
          value: function stopMomentumNavigation() {
            this.momentum && (this.momentumEstimator.reset(), this.momentum = null, this.navigation.stop());
          }
        }]);

        return c;
      }(_core_Accessor_js__WEBPACK_IMPORTED_MODULE_9__["default"]);

      Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_4__["property"])()], c.prototype, "momentumFinished", void 0), Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_4__["property"])()], c.prototype, "viewpoint", void 0), Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_4__["property"])()], c.prototype, "navigation", void 0), c = Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_subclass_js__WEBPACK_IMPORTED_MODULE_5__["subclass"])("esri.views.2d.navigation.actions.Pan")], c);
      var d = c;
      /* harmony default export */

      __webpack_exports__["default"] = d;
      /***/
    },

    /***/
    "KOSm":
    /*!*************************************************************************!*\
      !*** ./node_modules/@arcgis/core/views/2d/navigation/actions/Rotate.js ***!
      \*************************************************************************/

    /*! exports provided: default */

    /***/
    function KOSm(module, __webpack_exports__, __webpack_require__) {
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


      var _core_Accessor_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! ../../../../core/Accessor.js */
      "/CmD");
      /* harmony import */


      var _geometry_Point_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
      /*! ../../../../geometry/Point.js */
      "SuVq");
      /* harmony import */


      var _geometry_js__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
      /*! ../../../../geometry.js */
      "4GrV");
      /* harmony import */


      var _Viewpoint_js__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
      /*! ../../../../Viewpoint.js */
      "y3LX");
      /* harmony import */


      var _chunks_vec2f64_js__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
      /*! ../../../../chunks/vec2f64.js */
      "AvGH");
      /* harmony import */


      var _chunks_vec2_js__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(
      /*! ../../../../chunks/vec2.js */
      "M0lq");
      /* harmony import */


      var _viewpointUtils_js__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(
      /*! ../../viewpointUtils.js */
      "qYtE");
      /*
      All material copyright ESRI, All Rights Reserved, unless otherwise specified.
      See https://js.arcgis.com/4.18/esri/copyright.txt for details.
      */


      var v = Object(_chunks_vec2f64_js__WEBPACK_IMPORTED_MODULE_13__["a"])(),
          d = Object(_chunks_vec2f64_js__WEBPACK_IMPORTED_MODULE_13__["a"])();

      var j = /*#__PURE__*/function (_core_Accessor_js__WE3) {
        _inherits(j, _core_Accessor_js__WE3);

        var _super7 = _createSuper(j);

        function j(e) {
          var _this21;

          _classCallCheck(this, j);

          _this21 = _super7.call(this, e), _this21._previousCenter = Object(_chunks_vec2f64_js__WEBPACK_IMPORTED_MODULE_13__["a"])(), _this21.viewpoint = new _Viewpoint_js__WEBPACK_IMPORTED_MODULE_12__["default"]({
            targetGeometry: new _geometry_Point_js__WEBPACK_IMPORTED_MODULE_10__["default"](),
            scale: 0,
            rotation: 0
          });
          return _this21;
        }

        _createClass(j, [{
          key: "begin",
          value: function begin(e, t) {
            this.navigation.begin(), Object(_chunks_vec2_js__WEBPACK_IMPORTED_MODULE_14__["s"])(this._previousCenter, t.center.x, t.center.y);
          }
        }, {
          key: "update",
          value: function update(e, t) {
            var _e$state = e.state,
                o = _e$state.size,
                r = _e$state.padding;
            Object(_chunks_vec2_js__WEBPACK_IMPORTED_MODULE_14__["s"])(v, t.center.x, t.center.y), Object(_viewpointUtils_js__WEBPACK_IMPORTED_MODULE_15__["getAnchor"])(d, o, r), e.viewpoint = Object(_viewpointUtils_js__WEBPACK_IMPORTED_MODULE_15__["rotateBy"])(this.viewpoint, e.state.paddedViewState.viewpoint, Object(_viewpointUtils_js__WEBPACK_IMPORTED_MODULE_15__["angleBetween"])(d, this._previousCenter, v)), Object(_chunks_vec2_js__WEBPACK_IMPORTED_MODULE_14__["c"])(this._previousCenter, v);
          }
        }, {
          key: "end",
          value: function end() {
            this.navigation.end();
          }
        }]);

        return j;
      }(_core_Accessor_js__WEBPACK_IMPORTED_MODULE_9__["default"]);

      Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_4__["property"])()], j.prototype, "viewpoint", void 0), Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_4__["property"])()], j.prototype, "navigation", void 0), j = Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_subclass_js__WEBPACK_IMPORTED_MODULE_5__["subclass"])("esri.views.2d.actions.Rotate")], j);
      var h = j;
      /* harmony default export */

      __webpack_exports__["default"] = h;
      /***/
    },

    /***/
    "KVK4":
    /*!***************************************************************************************!*\
      !*** ./node_modules/@arcgis/core/views/2d/engine/webgl/collisions/CollisionEngine.js ***!
      \***************************************************************************************/

    /*! exports provided: CollisionEngine */

    /***/
    function KVK4(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "CollisionEngine", function () {
        return u;
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


      var _core_mathUtils_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ../../../../../core/mathUtils.js */
      "OKTS");
      /* harmony import */


      var _definitions_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ../definitions.js */
      "jIHu");
      /* harmony import */


      var _CollisionBucket_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ./CollisionBucket.js */
      "NRy8");
      /* harmony import */


      var _LayerCollisionInfo_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ./LayerCollisionInfo.js */
      "A+Tu");
      /*
      All material copyright ESRI, All Rights Reserved, unless otherwise specified.
      See https://js.arcgis.com/4.18/esri/copyright.txt for details.
      */


      var h = _definitions_js__WEBPACK_IMPORTED_MODULE_3__["TILE_SIZE"] / _definitions_js__WEBPACK_IMPORTED_MODULE_3__["COLLISION_BUCKET_SIZE"],
          f = h,
          m = _core_Logger_js__WEBPACK_IMPORTED_MODULE_0__["default"].getLogger("esri.views.2d.engine.webgl.collisions.CollisionEngine");

      var u = /*#__PURE__*/function () {
        function u(e) {
          _classCallCheck(this, u);

          this._layers = new Map(), this._collisionBuckets = new Map(), this._didError = !1, this._tilingScheme = e;
        }

        _createClass(u, [{
          key: "collisionInfos",
          get: function get() {
            return Array.from(this._layers.values());
          }
        }, {
          key: "registerLayerView",
          value: function registerLayerView(e, i) {
            if (this._layers.has(e)) return;

            var t = _LayerCollisionInfo_js__WEBPACK_IMPORTED_MODULE_5__["default"].create(e, i, this.collisionInfos, this._tilingScheme);

            this._layers.set(e, t), this._collisionBuckets.forEach(function (e) {
              return e.onRegisterLayer(t.index);
            });
          }
        }, {
          key: "unregisterLayerView",
          value: function unregisterLayerView(e) {
            var _this22 = this;

            if (!this._layers.has(e)) return;

            var i = this._layers.get(e);

            _LayerCollisionInfo_js__WEBPACK_IMPORTED_MODULE_5__["default"]["delete"](i.index, this.collisionInfos), this._layers["delete"](e), this._collisionBuckets.forEach(function (e, t) {
              var s = e.getTile(i.index);
              s && (e.onUnregisterLayer(i.index), e.canDelete() && _this22._collisionBuckets["delete"](t), s.reference && (s.reference.isDirty = !1));
            });
          }
        }, {
          key: "addTile",
          value: function addTile(e, i) {
            var t = i.key.id;
            if (!this._layers.has(e)) return;
            this._collisionBuckets.has(t) || this._collisionBuckets.set(t, new _CollisionBucket_js__WEBPACK_IMPORTED_MODULE_4__["default"](i.key, this._layers.size));

            var s = this._getIndex(e);

            this._collisionBuckets.get(t).getTile(s).reference = i;
          }
        }, {
          key: "removeTile",
          value: function removeTile(e, i) {
            if (!this._layers.has(e) || !this._collisionBuckets.has(i)) return;

            var t = this._getIndex(e),
                s = this._collisionBuckets.get(i).getTile(t);

            s.dirty = !1, s.reference = null;
          }
        }, {
          key: "run",
          value: function run(e, t) {
            var s = Array.from(this._collisionBuckets.values()).sort(function (e, i) {
              return e.key.compareRowMajor(i.key);
            });
            var o = !0;
            var r = e.renderingOptions.labelCollisionsEnabled && !this._didError,
                n = this.collisionInfos;

            try {
              var _iterator14 = _createForOfIteratorHelper(s),
                  _step14;

              try {
                for (_iterator14.s(); !(_step14 = _iterator14.n()).done;) {
                  var _i7 = _step14.value;
                  o = o || _i7.isDirty, _i7.computeNeighbors(this._collisionBuckets);

                  for (var _t15 = 0; _t15 < this._layers.size; _t15++) {
                    var _s6 = _LayerCollisionInfo_js__WEBPACK_IMPORTED_MODULE_5__["default"].find(_t15, n);

                    _i7.reset(e, o, _s6);
                  }
                }
              } catch (err) {
                _iterator14.e(err);
              } finally {
                _iterator14.f();
              }

              for (var _e9 = 0; _e9 < this._layers.size; _e9++) {
                var i = _LayerCollisionInfo_js__WEBPACK_IMPORTED_MODULE_5__["default"].find(_e9, n);

                var _iterator15 = _createForOfIteratorHelper(s),
                    _step15;

                try {
                  for (_iterator15.s(); !(_step15 = _iterator15.n()).done;) {
                    var _e10 = _step15.value;

                    this._run(r, _e10, i, t);
                  }
                } catch (err) {
                  _iterator15.e(err);
                } finally {
                  _iterator15.f();
                }
              }
            } catch (e) {
              m.error(new _core_Error_js__WEBPACK_IMPORTED_MODULE_1__["default"]("mapview-labeling", "Encountered an error during decluttering. Disabling collisions", e)), this._didError = !0;
            }

            var _iterator16 = _createForOfIteratorHelper(s),
                _step16;

            try {
              for (_iterator16.s(); !(_step16 = _iterator16.n()).done;) {
                var _e11 = _step16.value;

                _e11.ready();
              }
            } catch (err) {
              _iterator16.e(err);
            } finally {
              _iterator16.f();
            }
          }
        }, {
          key: "_run",
          value: function _run(e, i, t, s) {
            var o = i.getReference(t.index);
            o && o.hasData && (o.key.level !== s ? this._resetLabelsMinZoom(i, t) : this._runVisibility(e, i, o, t, s));
          }
        }, {
          key: "_resetLabelsMinZoom",
          value: function _resetLabelsMinZoom(e, i) {
            if (!e || "polyline" === i.geometryType) return;
            var t = e.getReference(i.index);
            if (!t || !t.hasData) return;
            var s = i.layerView.tileRenderer.featuresView.attributeView,
                o = t.displayObjects;

            var _iterator17 = _createForOfIteratorHelper(o),
                _step17;

            try {
              for (_iterator17.s(); !(_step17 = _iterator17.n()).done;) {
                var _e12 = _step17.value;
                s.setLabelMinZoom(_e12.id, 255);
              }
            } catch (err) {
              _iterator17.e(err);
            } finally {
              _iterator17.f();
            }
          }
        }, {
          key: "_checkLabelsVisible",
          value: function _checkLabelsVisible(e, i) {
            var t = !i.filter || !!(e & _definitions_js__WEBPACK_IMPORTED_MODULE_3__["FILTER_FLAG_0"]),
                s = !i.effect || i.effect.excludedLabelsVisible || !!(e & _definitions_js__WEBPACK_IMPORTED_MODULE_3__["EFFECT_FLAG_0"]);
            return t && s;
          }
        }, {
          key: "_runVisibility",
          value: function _runVisibility(e, i, t, s, o) {
            var r = s.layerView.tileRenderer.featuresView.attributeView,
                n = t.displayObjects.sort(function (e, i) {
              return r.getLabelMinZoom(e.id) - r.getLabelMinZoom(i.id);
            }),
                l = s.zoomRanges.some(function (e) {
              return "none" === e.deconflictionStrategy;
            });

            var _iterator18 = _createForOfIteratorHelper(n),
                _step18;

            try {
              for (_iterator18.s(); !(_step18 = _iterator18.n()).done;) {
                var _t16 = _step18.value;
                if (!_t16.metrics.length) continue;

                var _n2 = "polyline" === s.geometryType ? 0 : 10 * (o - 1);

                var c = r.getFilterFlags(_t16.id),
                    a = this._checkLabelsVisible(c, s.layerView);

                if (e && !l) for (var _e13 = 0; _e13 < _t16.metrics.length; _e13++) {
                  var _r10 = _t16.metrics[_e13],
                      _l = a ? -1 !== _r10.minZoom ? _r10.minZoom : this._computeLabelVisibility(_t16, _r10, s.index, i, _r10.baseZoom, o) : 255;

                  _n2 = Math.max(_l, _n2);
                }
                _n2 = Math.max(_n2, 0), r.setLabelMinZoom(_t16.id, _n2);

                var _iterator19 = _createForOfIteratorHelper(_t16.metrics),
                    _step19;

                try {
                  for (_iterator19.s(); !(_step19 = _iterator19.n()).done;) {
                    var _e14 = _step19.value;
                    _e14.minZoom = _n2;
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
          }
        }, {
          key: "_computeLabelVisibility",
          value: function _computeLabelVisibility(e, i, t, s, o, r) {
            var n = o;

            var l = i.xBucket,
                c = i.yBucket,
                a = i.xOverflow,
                m = i.yOverflow,
                _u = l - a,
                g = l + a + 1,
                d = c + m + 1;

            for (var _o4 = c - m; _o4 < d; _o4++) {
              for (var _l2 = _u; _l2 < g; _l2++) {
                if (!(_l2 < -h || _o4 < -f || _l2 > h || _o4 > f)) for (var _c2 = 0; _c2 <= t; _c2++) {
                  var _a5 = this._getRelativeSubBucket(_c2, s, _l2, _o4);

                  if (_a5) {
                    var _iterator20 = _createForOfIteratorHelper(_a5),
                        _step20;

                    try {
                      for (_iterator20.s(); !(_step20 = _iterator20.n()).done;) {
                        var _s7 = _step20.value;
                        if (_c2 === t && _s7.id === e.id) continue;

                        var _o5 = this._compareLabels(i, _s7, n, r);

                        n = Math.max(_o5, n);
                      }
                    } catch (err) {
                      _iterator20.e(err);
                    } finally {
                      _iterator20.f();
                    }
                  }
                }
              }
            }

            return n;
          }
        }, {
          key: "_compareLabels",
          value: function _compareLabels(e, i, s, o) {
            var r = 10 * (o + 1);
            if (-1 === i.minZoom || i.minZoom > r) return s;
            var n = e.findCollisionDelta(i),
                l = Object(_core_mathUtils_js__WEBPACK_IMPORTED_MODULE_2__["clamp"])(Math.ceil(10 * (n + o)), 0, 255);
            return i.minZoom >= l ? s : Math.max(s, l);
          }
        }, {
          key: "_getNeighboringTile",
          value: function _getNeighboringTile(e, i, t, s) {
            var o = 3 * (1 + s) + (1 + t),
                r = i.neighbors[o];
            return r && r.getTile(e);
          }
        }, {
          key: "_getRelativeSubBucket",
          value: function _getRelativeSubBucket(e, i, t, o) {
            var r = Object(_core_mathUtils_js__WEBPACK_IMPORTED_MODULE_2__["sign"])(Math.floor(t / 4)),
                n = Object(_core_mathUtils_js__WEBPACK_IMPORTED_MODULE_2__["sign"])(Math.floor(o / 4)),
                l = this._getNeighboringTile(e, i, r, n);

            return l && l.reference && l.index && l.reference.hasData ? l.index[o - 4 * n][t - 4 * r] : null;
          }
        }, {
          key: "_getIndex",
          value: function _getIndex(e) {
            return this._layers.get(e).index;
          }
        }]);

        return u;
      }();
      /***/

    },

    /***/
    "L/m8":
    /*!**************************************************************************************!*\
      !*** ./node_modules/@arcgis/core/views/2d/engine/webgl/shaders/HighlightPrograms.js ***!
      \**************************************************************************************/

    /*! exports provided: blur, highlight */

    /***/
    function LM8(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "blur", function () {
        return r;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "highlight", function () {
        return e;
      });
      /* harmony import */


      var _sources_resolver_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ./sources/resolver.js */
      "vpBa");
      /*
      All material copyright ESRI, All Rights Reserved, unless otherwise specified.
      See https://js.arcgis.com/4.18/esri/copyright.txt for details.
      */


      var e = {
        name: "highlight",
        shaders: {
          vertexShader: Object(_sources_resolver_js__WEBPACK_IMPORTED_MODULE_0__["resolveIncludes"])("highlight/textured.vert"),
          fragmentShader: Object(_sources_resolver_js__WEBPACK_IMPORTED_MODULE_0__["resolveIncludes"])("highlight/highlight.frag")
        },
        attributes: {
          a_position: 0,
          a_texcoord: 1
        }
      },
          r = {
        name: "blur",
        shaders: {
          vertexShader: Object(_sources_resolver_js__WEBPACK_IMPORTED_MODULE_0__["resolveIncludes"])("highlight/textured.vert"),
          fragmentShader: Object(_sources_resolver_js__WEBPACK_IMPORTED_MODULE_0__["resolveIncludes"])("highlight/blur.frag")
        },
        attributes: {
          a_position: 0,
          a_texcoord: 1
        }
      };
      /***/
    },

    /***/
    "N4te":
    /*!****************************************************************************!*\
      !*** ./node_modules/@arcgis/core/views/2d/engine/webgl/WebGLDriverTest.js ***!
      \****************************************************************************/

    /*! exports provided: testSamplerPrecision, testWebGLDriver */

    /***/
    function N4te(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "testSamplerPrecision", function () {
        return l;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "testWebGLDriver", function () {
        return p;
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


      var _webgl_Program_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ../../../webgl/Program.js */
      "jjdI");
      /* harmony import */


      var _webgl_Texture_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ../../../webgl/Texture.js */
      "of9L");
      /* harmony import */


      var _webgl_FramebufferObject_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ../../../webgl/FramebufferObject.js */
      "0meK");
      /* harmony import */


      var _webgl_RenderingContext_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ../../../webgl/RenderingContext.js */
      "bfJE");
      /* harmony import */


      var _VertexStream_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! ./VertexStream.js */
      "gjrC");
      /*
      All material copyright ESRI, All Rights Reserved, unless otherwise specified.
      See https://js.arcgis.com/4.18/esri/copyright.txt for details.
      */


      var s = _core_Logger_js__WEBPACK_IMPORTED_MODULE_2__["default"].getLogger("esri.views.2d.engine.webgl.WebGLDriverTest");

      var a = /*#__PURE__*/function () {
        function a(e) {
          _classCallCheck(this, a);

          this._ignoresSamplerPrecision = null, this._context = e;
        }

        _createClass(a, [{
          key: "ignoresSamplerPrecision",
          get: function get() {
            return Object(_core_maybe_js__WEBPACK_IMPORTED_MODULE_1__["isNone"])(this._ignoresSamplerPrecision) && (this._ignoresSamplerPrecision = l(this._context)), this._ignoresSamplerPrecision;
          }
        }]);

        return a;
      }();

      var p = function p(e) {
        return new a(e);
      },
          l = function l(e) {
        var r = new _webgl_FramebufferObject_js__WEBPACK_IMPORTED_MODULE_5__["default"](e, {
          colorTarget: 0,
          depthStencilTarget: 0
        }, {
          target: 3553,
          wrapMode: 33071,
          pixelFormat: 6408,
          dataType: 5121,
          samplingMode: 9728,
          width: 1,
          height: 1
        }),
            a = new Uint8Array(4),
            p = new _VertexStream_js__WEBPACK_IMPORTED_MODULE_7__["default"](e, [0, 0, 1, 0, 0, 1, 1, 1]),
            l = new _webgl_Program_js__WEBPACK_IMPORTED_MODULE_3__["default"](e, "\nprecision highp float;\n\nattribute vec2 a_pos;\n\nuniform highp sampler2D u_texture;\nvarying vec4 v_color;\n\nfloat getBit(in float bitset, in int bitIndex) {\n  float offset = pow(2.0, float(bitIndex));\n\n  return mod(floor(bitset / offset), 2.0);\n}\n\nvoid main() {\n  vec4 value = texture2D(u_texture, vec2(0.0));\n\n  float bit = getBit(value.x * 255.0, 1);\n\n  v_color = bit * vec4(1.0);\n\n  gl_Position = vec4(a_pos * 2.0 - 1.0, 0.0, 1.0);\n}\n", "\nprecision highp float;\n\nvarying vec4 v_color;\n\nvoid main() {\n  gl_FragColor = v_color;\n}\n", {
          a_pos: 0
        }),
            g = new _webgl_Texture_js__WEBPACK_IMPORTED_MODULE_4__["default"](e, {
          target: 3553,
          wrapMode: 33071,
          pixelFormat: 6408,
          dataType: 5121,
          samplingMode: 9728,
          width: 1,
          height: 1
        }, new Uint8Array([2, 255, 0, 0]));
        l.setUniform1i("u_texture", 0), e.bindTexture(g, 0);
        var m = e.getBoundFramebufferObject();
        e.bindFramebuffer(r), e.bindProgram(l);

        var _e$getViewport = e.getViewport(),
            c = _e$getViewport.x,
            d = _e$getViewport.y,
            u = _e$getViewport.width,
            h = _e$getViewport.height;

        e.setViewport(0, 0, 1, 1), p.draw(), e.setViewport(c, d, u, h), r.readPixels(0, 0, 1, 1, 6408, 5121, a), l.dispose(), p.dispose(), r.dispose();
        var f = 255 !== a[0] || 255 !== a[1] || 255 !== a[2] || 255 !== a[3];
        return f && s.warn("A problem was detected with your graphics driver. Your driver does not appear to honor sampler precision specifiers, which may result in rendering issues due to numerical instability. We recommend ensuring that your drivers have been updated to the latest version. Applying lowp sampler workaround. [".concat(a[0], ".").concat(a[1], ".").concat(a[2], ".").concat(a[3], "]")), e.bindFramebuffer(m), f;
      };
      /***/

    },

    /***/
    "NRy8":
    /*!***************************************************************************************!*\
      !*** ./node_modules/@arcgis/core/views/2d/engine/webgl/collisions/CollisionBucket.js ***!
      \***************************************************************************************/

    /*! exports provided: default */

    /***/
    function NRy8(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony import */


      var _tiling_TileKey_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ../../../tiling/TileKey.js */
      "rlSK");
      /* harmony import */


      var _tiling_PagedTileQueue_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ../../../tiling/PagedTileQueue.js */
      "Pns9");
      /* harmony import */


      var _tiling_TileInfoView_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ../../../tiling/TileInfoView.js */
      "AY31");
      /* harmony import */


      var _tiling_TileQueue_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ../../../tiling/TileQueue.js */
      "B81a");
      /* harmony import */


      var _tiling_TileStrategy_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ../../../tiling/TileStrategy.js */
      "0wLv");
      /* harmony import */


      var _CollisionBucketEntry_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ./CollisionBucketEntry.js */
      "pc5U");
      /*
      All material copyright ESRI, All Rights Reserved, unless otherwise specified.
      See https://js.arcgis.com/4.18/esri/copyright.txt for details.
      */

      /* harmony default export */


      __webpack_exports__["default"] = /*#__PURE__*/function () {
        function _class6(e, i) {
          _classCallCheck(this, _class6);

          this.neighbors = new Array(9), this._tiles = new Array(i);

          for (var _e15 = 0; _e15 < i; _e15++) {
            this._tiles[_e15] = new _CollisionBucketEntry_js__WEBPACK_IMPORTED_MODULE_5__["default"]();
          }

          this.key = e;
        }

        _createClass(_class6, [{
          key: "isDirty",
          get: function get() {
            var _iterator21 = _createForOfIteratorHelper(this._tiles),
                _step21;

            try {
              for (_iterator21.s(); !(_step21 = _iterator21.n()).done;) {
                var e = _step21.value;
                if (e.dirty) return !0;
              }
            } catch (err) {
              _iterator21.e(err);
            } finally {
              _iterator21.f();
            }

            return !1;
          }
        }, {
          key: "size",
          get: function get() {
            return this._tiles.length;
          }
        }, {
          key: "getTile",
          value: function getTile(e) {
            return this._tiles[e];
          }
        }, {
          key: "getReference",
          value: function getReference(e) {
            var t = this._tiles[e];
            return t && t.reference;
          }
        }, {
          key: "onRegisterLayer",
          value: function onRegisterLayer(e) {
            this.invalidateRange(e), this._add(e);
          }
        }, {
          key: "onUnregisterLayer",
          value: function onUnregisterLayer(e) {
            this.invalidateRange(e), this._remove(e);
          }
        }, {
          key: "onLabelsRendered",
          value: function onLabelsRendered() {}
        }, {
          key: "invalidateRange",
          value: function invalidateRange(e) {
            for (var t = e; t < this._tiles.length; t++) {
              this._tiles[t].dirty = !0;
            }
          }
        }, {
          key: "add",
          value: function add(e) {
            this._add(e);
          }
        }, {
          key: "remove",
          value: function remove(e) {
            this._remove(e);
          }
        }, {
          key: "canDelete",
          value: function canDelete() {
            return 0 === this._tiles.length;
          }
        }, {
          key: "ready",
          value: function ready() {
            var _iterator22 = _createForOfIteratorHelper(this._tiles),
                _step22;

            try {
              for (_iterator22.s(); !(_step22 = _iterator22.n()).done;) {
                var e = _step22.value;
                e.dirty = !1;
              }
            } catch (err) {
              _iterator22.e(err);
            } finally {
              _iterator22.f();
            }
          }
        }, {
          key: "computeNeighbors",
          value: function computeNeighbors(e) {
            this.neighbors[0] = this._getNeighbor(e, -1, -1), this.neighbors[1] = this._getNeighbor(e, 0, -1), this.neighbors[2] = this._getNeighbor(e, 1, -1), this.neighbors[3] = this._getNeighbor(e, -1, 0), this.neighbors[4] = this, this.neighbors[5] = this._getNeighbor(e, 1, 0), this.neighbors[6] = this._getNeighbor(e, -1, 1), this.neighbors[7] = this._getNeighbor(e, 0, 1), this.neighbors[8] = this._getNeighbor(e, 1, 1);
          }
        }, {
          key: "reset",
          value: function reset(e, t, i) {
            var s = this._tiles[i.index];
            s && s.reset(e, t, i);
          }
        }, {
          key: "_add",
          value: function _add(e) {
            var i = [];
            if (e >= this._tiles.length) this._tiles.push(new _CollisionBucketEntry_js__WEBPACK_IMPORTED_MODULE_5__["default"]());else {
              for (var s = 0; s < this._tiles.length; s++) {
                s === e && i.push(new _CollisionBucketEntry_js__WEBPACK_IMPORTED_MODULE_5__["default"]()), i.push(this._tiles[s]);
              }

              this._tiles = i;
            }
          }
        }, {
          key: "_remove",
          value: function _remove(e) {
            var t = [];

            for (var i = 0; i < this._tiles.length; i++) {
              i !== e && t.push(this._tiles[i]);
            }

            this._tiles = t;
          }
        }, {
          key: "_getNeighbor",
          value: function _getNeighbor(t, i, s) {
            var r = this.key,
                h = r.col + i,
                n = r.row + s,
                o = r.level,
                l = r.world,
                g = _tiling_TileKey_js__WEBPACK_IMPORTED_MODULE_0__["default"].getId(o, n, h, l);

            return t.has(g) ? t.get(g) : null;
          }
        }]);

        return _class6;
      }();
      /***/

    },

    /***/
    "PNHs":
    /*!**********************************************************************************!*\
      !*** ./node_modules/@arcgis/core/views/2d/engine/webgl/effects/FeatureEffect.js ***!
      \**********************************************************************************/

    /*! exports provided: FeatureEffect */

    /***/
    function PNHs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "FeatureEffect", function () {
        return t;
      });
      /* harmony import */


      var _Effect_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ./Effect.js */
      "FrEu");
      /*
      All material copyright ESRI, All Rights Reserved, unless otherwise specified.
      See https://js.arcgis.com/4.18/esri/copyright.txt for details.
      */


      var t = /*#__PURE__*/function (_Effect_js__WEBPACK_I3) {
        _inherits(t, _Effect_js__WEBPACK_I3);

        var _super8 = _createSuper(t);

        function t(e) {
          var _this23;

          _classCallCheck(this, t);

          _this23 = _super8.call(this), _this23.name = _this23.constructor.name, _this23.defines = [e];
          return _this23;
        }

        _createClass(t, [{
          key: "dispose",
          value: function dispose() {}
        }, {
          key: "bind",
          value: function bind(_ref7) {
            var e = _ref7.context,
                _t17 = _ref7.painter;
            this._prev = e.getBoundFramebufferObject();

            var _e$getViewport2 = e.getViewport(),
                s = _e$getViewport2.width,
                r = _e$getViewport2.height,
                n = _t17.getFbos(s, r).effect0;

            e.bindFramebuffer(n), e.setClearColor(0, 0, 0, 0), e.clear(e.gl.COLOR_BUFFER_BIT);
          }
        }, {
          key: "unbind",
          value: function unbind() {}
        }, {
          key: "draw",
          value: function draw(e, _t18) {
            var s = e.context,
                r = e.painter,
                n = e.state,
                o = e.deltaTime,
                c = r.getPostProcessingEffects(_t18.effects),
                i = s.getBoundFramebufferObject();
            c.length && _t18.transitionStep(o, n.scale);

            var _iterator23 = _createForOfIteratorHelper(c),
                _step23;

            try {
              for (_iterator23.s(); !(_step23 = _iterator23.n()).done;) {
                var _step23$value = _step23.value,
                    _t20 = _step23$value.postProcessingEffect,
                    _s8 = _step23$value.effect;

                _t20.draw(e, i, _s8);
              }
            } catch (err) {
              _iterator23.e(err);
            } finally {
              _iterator23.f();
            }

            s.bindFramebuffer(this._prev), s.setStencilTestEnabled(!1), r.blitTexture(s, i.colorTexture, 9728), s.setStencilTestEnabled(!0);
          }
        }]);

        return t;
      }(_Effect_js__WEBPACK_IMPORTED_MODULE_0__["Effect"]);
      /***/

    },

    /***/
    "TkeS":
    /*!**********************************************************************************!*\
      !*** ./node_modules/@arcgis/core/views/navigation/PanPlanarMomentumEstimator.js ***!
      \**********************************************************************************/

    /*! exports provided: PanPlanarMomentum, PanPlanarMomentumEstimator */

    /***/
    function TkeS(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "PanPlanarMomentum", function () {
        return c;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "PanPlanarMomentumEstimator", function () {
        return h;
      });
      /* harmony import */


      var _chunks_vec3f64_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ../../chunks/vec3f64.js */
      "Cy1f");
      /* harmony import */


      var _chunks_vec3_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ../../chunks/vec3.js */
      "5DEt");
      /* harmony import */


      var _FilteredFiniteDifference_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./FilteredFiniteDifference.js */
      "DKFY");
      /* harmony import */


      var _Momentum_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./Momentum.js */
      "sz4w");
      /*
      All material copyright ESRI, All Rights Reserved, unless otherwise specified.
      See https://js.arcgis.com/4.18/esri/copyright.txt for details.
      */


      var c = /*#__PURE__*/function (_Momentum_js__WEBPACK) {
        _inherits(c, _Momentum_js__WEBPACK);

        var _super9 = _createSuper(c);

        function c(e, t, i, s, n) {
          var _this24;

          _classCallCheck(this, c);

          _this24 = _super9.call(this, e, t, i), _this24.sceneVelocity = s, _this24.direction = n;
          return _this24;
        }

        _createClass(c, [{
          key: "value",
          value: function value(e) {
            return _get(_getPrototypeOf(c.prototype), "valueFromInitialVelocity", this).call(this, this.sceneVelocity, e);
          }
        }]);

        return c;
      }(_Momentum_js__WEBPACK_IMPORTED_MODULE_3__["Momentum"]);

      var h = /*#__PURE__*/function () {
        function h() {
          var t = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 300;
          var i = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 12;
          var s = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : .84;

          _classCallCheck(this, h);

          this.minimumInitialVelocity = t, this.stopVelocity = i, this.friction = s, this.enabled = !0, this.time = new _FilteredFiniteDifference_js__WEBPACK_IMPORTED_MODULE_2__["FilteredFiniteDifference"](.6), this.screen = [new _FilteredFiniteDifference_js__WEBPACK_IMPORTED_MODULE_2__["FilteredFiniteDifference"](.4), new _FilteredFiniteDifference_js__WEBPACK_IMPORTED_MODULE_2__["FilteredFiniteDifference"](.4)], this.scene = [new _FilteredFiniteDifference_js__WEBPACK_IMPORTED_MODULE_2__["FilteredFiniteDifference"](.6), new _FilteredFiniteDifference_js__WEBPACK_IMPORTED_MODULE_2__["FilteredFiniteDifference"](.6), new _FilteredFiniteDifference_js__WEBPACK_IMPORTED_MODULE_2__["FilteredFiniteDifference"](.6)], this.tmpDirection = Object(_chunks_vec3f64_js__WEBPACK_IMPORTED_MODULE_0__["c"])();
        }

        _createClass(h, [{
          key: "add",
          value: function add(e, t, i) {
            if (this.enabled) {
              if (this.time.hasLastValue) {
                if (this.time.computeDelta(i) < .015) return;
              }

              this.screen[0].update(e[0]), this.screen[1].update(e[1]), this.scene[0].update(t[0]), this.scene[1].update(t[1]), this.scene[2].update(t[2]), this.time.update(i);
            }
          }
        }, {
          key: "reset",
          value: function reset() {
            this.screen[0].reset(), this.screen[1].reset(), this.scene[0].reset(), this.scene[1].reset(), this.scene[2].reset(), this.time.reset();
          }
        }, {
          key: "evaluateMomentum",
          value: function evaluateMomentum() {
            if (!this.enabled || !this.screen[0].hasFilteredDelta) return null;
            var e = this.screen[0].filteredDelta,
                t = this.screen[1].filteredDelta,
                i = Math.sqrt(e * e + t * t) / this.time.filteredDelta;
            return Math.abs(i) < this.minimumInitialVelocity ? null : this.createMomentum(i, this.stopVelocity, this.friction);
          }
        }, {
          key: "createMomentum",
          value: function createMomentum(e, n, r) {
            Object(_chunks_vec3_js__WEBPACK_IMPORTED_MODULE_1__["s"])(this.tmpDirection, this.scene[0].filteredDelta, this.scene[1].filteredDelta, this.scene[2].filteredDelta);

            var _h = Object(_chunks_vec3_js__WEBPACK_IMPORTED_MODULE_1__["l"])(this.tmpDirection);

            _h > 0 && Object(_chunks_vec3_js__WEBPACK_IMPORTED_MODULE_1__["a"])(this.tmpDirection, this.tmpDirection, 1 / _h);
            var a = _h / this.time.filteredDelta;
            return new c(e, n, r, a, this.tmpDirection);
          }
        }]);

        return h;
      }();
      /***/

    },

    /***/
    "UBW5":
    /*!****************************************************************!*\
      !*** ./node_modules/@arcgis/core/views/magnifier/resources.js ***!
      \****************************************************************/

    /*! exports provided: loadMagnifierResources */

    /***/
    function UBW5(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "loadMagnifierResources", function () {
        return s;
      });
      /* harmony import */


      var _core_promiseUtils_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ../../core/promiseUtils.js */
      "9MzC");
      /* harmony import */


      var _support_requestImageUtils_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ../../support/requestImageUtils.js */
      "LbAs");
      /*
      All material copyright ESRI, All Rights Reserved, unless otherwise specified.
      See https://js.arcgis.com/4.18/esri/copyright.txt for details.
      */


      function s(_x25) {
        return _s9.apply(this, arguments);
      }
      /***/


      function _s9() {
        _s9 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee19(s) {
          var r, i, o, e, m;
          return regeneratorRuntime.wrap(function _callee19$(_context19) {
            while (1) {
              switch (_context19.prev = _context19.next) {
                case 0:
                  r = __webpack_require__.e(
                  /*! import() | mask-svg-js */
                  "mask-svg-js").then(__webpack_require__.bind(null,
                  /*! ./mask-svg.js */
                  "RzSf"));
                  i = __webpack_require__.e(
                  /*! import() | overlay-svg-js */
                  "overlay-svg-js").then(__webpack_require__.bind(null,
                  /*! ./overlay-svg.js */
                  "o3Xd"));
                  _context19.t0 = Object(_support_requestImageUtils_js__WEBPACK_IMPORTED_MODULE_1__["requestImage"]);
                  _context19.next = 5;
                  return r;

                case 5:
                  _context19.t1 = _context19.sent["default"];
                  _context19.t2 = {
                    signal: s
                  };
                  o = (0, _context19.t0)(_context19.t1, _context19.t2);
                  _context19.t3 = Object(_support_requestImageUtils_js__WEBPACK_IMPORTED_MODULE_1__["requestImage"]);
                  _context19.next = 11;
                  return i;

                case 11:
                  _context19.t4 = _context19.sent["default"];
                  _context19.t5 = {
                    signal: s
                  };
                  e = (0, _context19.t3)(_context19.t4, _context19.t5);
                  _context19.next = 16;
                  return o;

                case 16:
                  _context19.t6 = _context19.sent;
                  _context19.next = 19;
                  return e;

                case 19:
                  _context19.t7 = _context19.sent;
                  m = {
                    mask: _context19.t6,
                    overlay: _context19.t7
                  };
                  return _context19.abrupt("return", (Object(_core_promiseUtils_js__WEBPACK_IMPORTED_MODULE_0__["throwIfAborted"])(s), m));

                case 22:
                case "end":
                  return _context19.stop();
              }
            }
          }, _callee19);
        }));
        return _s9.apply(this, arguments);
      }
    },

    /***/
    "VfAO":
    /*!*************************************************************************!*\
      !*** ./node_modules/@arcgis/core/views/navigation/MomentumEstimator.js ***!
      \*************************************************************************/

    /*! exports provided: MomentumEstimator */

    /***/
    function VfAO(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "MomentumEstimator", function () {
        return s;
      });
      /* harmony import */


      var _core_mathUtils_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ../../core/mathUtils.js */
      "OKTS");
      /* harmony import */


      var _FilteredFiniteDifference_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./FilteredFiniteDifference.js */
      "DKFY");
      /* harmony import */


      var _Momentum_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./Momentum.js */
      "sz4w");
      /*
      All material copyright ESRI, All Rights Reserved, unless otherwise specified.
      See https://js.arcgis.com/4.18/esri/copyright.txt for details.
      */


      var s = /*#__PURE__*/function () {
        function s() {
          var t = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 2.5;
          var i = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : .01;

          var _s10 = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : .95;

          var l = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : 12;

          _classCallCheck(this, s);

          this.minimumInitialVelocity = t, this.stopVelocity = i, this.friction = _s10, this.maxVelocity = l, this.enabled = !0, this.value = new _FilteredFiniteDifference_js__WEBPACK_IMPORTED_MODULE_1__["FilteredFiniteDifference"](.8), this.time = new _FilteredFiniteDifference_js__WEBPACK_IMPORTED_MODULE_1__["FilteredFiniteDifference"](.3);
        }

        _createClass(s, [{
          key: "add",
          value: function add(t, e) {
            if (this.enabled) {
              if (this.time.hasLastValue) {
                if (this.time.computeDelta(e) < .01) return;

                if (this.value.hasFilteredDelta) {
                  var _e16 = this.value.computeDelta(t);

                  this.value.filteredDelta * _e16 < 0 && this.value.reset();
                }
              }

              this.time.update(e), this.value.update(t);
            }
          }
        }, {
          key: "reset",
          value: function reset() {
            this.value.reset(), this.time.reset();
          }
        }, {
          key: "evaluateMomentum",
          value: function evaluateMomentum() {
            if (!this.enabled || !this.value.hasFilteredDelta) return null;
            var e = this.value.filteredDelta / this.time.filteredDelta;
            return e = Object(_core_mathUtils_js__WEBPACK_IMPORTED_MODULE_0__["clamp"])(e, -this.maxVelocity, this.maxVelocity), Math.abs(e) < this.minimumInitialVelocity ? null : this.createMomentum(e, this.stopVelocity, this.friction);
          }
        }, {
          key: "createMomentum",
          value: function createMomentum(t, e, _s11) {
            return new _Momentum_js__WEBPACK_IMPORTED_MODULE_2__["Momentum"](t, e, _s11);
          }
        }]);

        return s;
      }();
      /***/

    },

    /***/
    "W3i+":
    /*!********************************************************************!*\
      !*** ./node_modules/@arcgis/core/views/2d/engine/webgl/Painter.js ***!
      \********************************************************************/

    /*! exports provided: default */

    /***/
    function W3i(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony import */


      var _core_has_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ../../../../core/has.js */
      "wSAH");
      /* harmony import */


      var _core_maybe_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ../../../../core/maybe.js */
      "srIe");
      /* harmony import */


      var _core_mathUtils_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ../../../../core/mathUtils.js */
      "OKTS");
      /* harmony import */


      var _chunks_builtins_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ../../../../chunks/builtins.js */
      "n4uK");
      /* harmony import */


      var _webgl_Renderbuffer_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ../../../webgl/Renderbuffer.js */
      "kbDN");
      /* harmony import */


      var _webgl_FramebufferObject_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ../../../webgl/FramebufferObject.js */
      "0meK");
      /* harmony import */


      var _webgl_RenderingContext_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ../../../webgl/RenderingContext.js */
      "bfJE");
      /* harmony import */


      var _enums_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! ./enums.js */
      "yE7X");
      /* harmony import */


      var _brushes_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! ../brushes.js */
      "Oxob");
      /* harmony import */


      var _vectorTiles_shaders_ProgramCache_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! ../vectorTiles/shaders/ProgramCache.js */
      "vYD5");
      /* harmony import */


      var _BitBlitRenderer_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
      /*! ./BitBlitRenderer.js */
      "bfVh");
      /* harmony import */


      var _MaterialManager_js__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
      /*! ./MaterialManager.js */
      "FGzj");
      /* harmony import */


      var _TextureManager_js__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
      /*! ./TextureManager.js */
      "v9+0");
      /* harmony import */


      var _effects_AnimationEffect_js__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
      /*! ./effects/AnimationEffect.js */
      "ac4n");
      /* harmony import */


      var _effects_BlendEffect_js__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(
      /*! ./effects/BlendEffect.js */
      "viFY");
      /* harmony import */


      var _effects_FeatureEffect_js__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(
      /*! ./effects/FeatureEffect.js */
      "PNHs");
      /* harmony import */


      var _effects_HighlightEffect_js__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(
      /*! ./effects/HighlightEffect.js */
      "0O54");
      /* harmony import */


      var _effects_HittestEffect_js__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(
      /*! ./effects/HittestEffect.js */
      "60EV");
      /* harmony import */


      var _effects_post_processing_EffectManager_js__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(
      /*! ./effects/post-processing/EffectManager.js */
      "Coxz");
      /* harmony import */


      var _painter_RenderPass_js__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(
      /*! ./painter/RenderPass.js */
      "sAsQ");
      /*
      All material copyright ESRI, All Rights Reserved, unless otherwise specified.
      See https://js.arcgis.com/4.18/esri/copyright.txt for details.
      */


      function m(t, s, r) {
        return 1 !== r || Object(_core_maybe_js__WEBPACK_IMPORTED_MODULE_1__["isSome"])(t) && "normal" !== t || Object(_core_maybe_js__WEBPACK_IMPORTED_MODULE_1__["isSome"])(s) && s.length > 0;
      }
      /* harmony default export */


      __webpack_exports__["default"] = /*#__PURE__*/function () {
        function _class7(e, t) {
          _classCallCheck(this, _class7);

          this.context = e, this._blitRenderer = new _BitBlitRenderer_js__WEBPACK_IMPORTED_MODULE_10__["BitBlitRenderer"](), this._brushCache = new Map(), this._vtlProgramCache = null, this._blendEffect = new _effects_BlendEffect_js__WEBPACK_IMPORTED_MODULE_14__["BlendEffect"](), this.effects = {
            highlight: new _effects_HighlightEffect_js__WEBPACK_IMPORTED_MODULE_16__["default"](),
            hittest: new _effects_HittestEffect_js__WEBPACK_IMPORTED_MODULE_17__["HittestEffect"](),
            integrate: new _effects_AnimationEffect_js__WEBPACK_IMPORTED_MODULE_13__["AnimationEffect"](),
            insideEffect: new _effects_FeatureEffect_js__WEBPACK_IMPORTED_MODULE_15__["FeatureEffect"]("inside"),
            outsideEffect: new _effects_FeatureEffect_js__WEBPACK_IMPORTED_MODULE_15__["FeatureEffect"]("outside")
          }, this.materialManager = new _MaterialManager_js__WEBPACK_IMPORTED_MODULE_11__["default"](e), this._vtlProgramCache = new _vectorTiles_shaders_ProgramCache_js__WEBPACK_IMPORTED_MODULE_9__["default"](e), this.textureManager = new _TextureManager_js__WEBPACK_IMPORTED_MODULE_12__["default"](t), this._effectsManager = new _effects_post_processing_EffectManager_js__WEBPACK_IMPORTED_MODULE_18__["EffectManager"](t);
        }

        _createClass(_class7, [{
          key: "getRenderTarget",
          value: function getRenderTarget() {
            return this._renderTarget;
          }
        }, {
          key: "setRenderTarget",
          value: function setRenderTarget(e) {
            this._renderTarget = e;
          }
        }, {
          key: "getFbos",
          value: function getFbos(e, r) {
            if (e !== this._lastWidth || r !== this._lastHeight) {
              if (this._lastWidth = e, this._lastHeight = r, this._fbos) {
                for (var t in this._fbos) {
                  this._fbos[t].resize(e, r);
                }

                return this._fbos;
              }

              var i = {
                target: 3553,
                pixelFormat: 6408,
                dataType: 5121,
                samplingMode: 9728,
                wrapMode: 33071,
                width: e,
                height: r
              },
                  n = {
                colorTarget: 0,
                depthStencilTarget: 3
              },
                  o = new _webgl_Renderbuffer_js__WEBPACK_IMPORTED_MODULE_4__["default"](this.context, {
                width: e,
                height: r,
                internalFormat: 34041
              });
              this._stencilBuf = o, this._fbos = {
                output: new _webgl_FramebufferObject_js__WEBPACK_IMPORTED_MODULE_5__["default"](this.context, n, i, o),
                blend: new _webgl_FramebufferObject_js__WEBPACK_IMPORTED_MODULE_5__["default"](this.context, n, i, o),
                effect0: new _webgl_FramebufferObject_js__WEBPACK_IMPORTED_MODULE_5__["default"](this.context, n, i, o)
              };
            }

            return this._fbos;
          }
        }, {
          key: "getSharedStencilBuffer",
          value: function getSharedStencilBuffer() {
            return this._stencilBuf;
          }
        }, {
          key: "beforeRenderLayers",
          value: function beforeRenderLayers(t) {
            var s = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : null;

            var _t$getViewport3 = t.getViewport(),
                r = _t$getViewport3.width,
                i = _t$getViewport3.height;

            this._prevFBO = t.getBoundFramebufferObject();
            var n = this.getFbos(r, i);

            if (t.bindFramebuffer(n.output), t.setColorMask(!0, !0, !0, !0), t.setDepthWriteEnabled(!0), Object(_core_maybe_js__WEBPACK_IMPORTED_MODULE_1__["isSome"])(s)) {
              var _s$color = s.color,
                  e = _s$color.r,
                  _r11 = _s$color.g,
                  _i8 = _s$color.b,
                  _n3 = _s$color.a;
              t.setClearColor(_n3 * e / 255, _n3 * _r11 / 255, _n3 * _i8 / 255, _n3);
            } else t.setClearColor(0, 0, 0, 0);

            t.setClearDepth(1), t.clear(t.gl.COLOR_BUFFER_BIT | t.gl.DEPTH_BUFFER_BIT), t.setDepthWriteEnabled(!1);
          }
        }, {
          key: "beforeRenderLayer",
          value: function beforeRenderLayer(e, t, s) {
            var r = e.context,
                i = e.blendMode,
                n = e.effects;
            if (m(i, n, s)) r.bindFramebuffer(this._fbos.blend), r.setColorMask(!0, !0, !0, !0), r.setClearColor(0, 0, 0, 0), r.clear(r.gl.COLOR_BUFFER_BIT);else {
              var _e17 = this._getOutputFBO();

              r.bindFramebuffer(_e17);
            }
            r.setDepthWriteEnabled(!1), r.setDepthTestEnabled(!1), r.setStencilTestEnabled(!0), r.setClearStencil(t), r.setStencilWriteMask(255), r.clear(r.gl.STENCIL_BUFFER_BIT);
          }
        }, {
          key: "compositeLayer",
          value: function compositeLayer(t, s) {
            var i = t.context,
                n = t.blendMode,
                o = t.effects;

            if (m(n, o, s)) {
              Object(_core_maybe_js__WEBPACK_IMPORTED_MODULE_1__["isSome"])(o) && o.length > 0 && t.drawPhase === _enums_js__WEBPACK_IMPORTED_MODULE_7__["WGLDrawPhase"].MAP && this._applyEffects(t, o);

              var h = this._getOutputFBO();

              i.bindFramebuffer(h), i.setStencilTestEnabled(!1), i.setStencilWriteMask(0), i.setBlendingEnabled(!0), i.setBlendFunctionSeparate(1, 771, 1, 771), i.setColorMask(!0, !0, !0, !0);
              var a = Object(_core_maybe_js__WEBPACK_IMPORTED_MODULE_1__["isSome"])(n) ? n : "normal";

              this._blendEffect.draw(t, this._fbos.blend.colorTexture, 9728, a, s);
            }
          }
        }, {
          key: "renderLayers",
          value: function renderLayers(e) {
            if (e.bindFramebuffer(this._prevFBO), !this._fbos) return;

            var t = this._getOutputFBO();

            e.setStencilTestEnabled(!1), e.setStencilWriteMask(0), this.blitTexture(e, t.colorTexture, 9728);
          }
        }, {
          key: "dispose",
          value: function dispose() {
            if (this.materialManager.dispose(), this.textureManager.dispose(), this._blitRenderer && (this._blitRenderer.dispose(), this._blitRenderer = null), this._vtlProgramCache && (this._vtlProgramCache.dispose(), this._vtlProgramCache = null), this._brushCache && (this._brushCache.forEach(function (e) {
              return e.dispose();
            }), this._brushCache.clear(), this._brushCache = null), this._fbos) for (var e in this._fbos) {
              this._fbos[e] && this._fbos[e].dispose();
            }
            if (this.effects) for (var _e18 in this.effects) {
              this.effects[_e18] && this.effects[_e18].dispose();
            }
            this._prevFBO = null;
          }
        }, {
          key: "getGeometryBrush",
          value: function getGeometryBrush(e) {
            var _enums_js__WEBPACK_IM;

            var t = (_enums_js__WEBPACK_IM = {}, _defineProperty(_enums_js__WEBPACK_IM, _enums_js__WEBPACK_IMPORTED_MODULE_7__["WGLGeometryType"].FILL, _brushes_js__WEBPACK_IMPORTED_MODULE_8__["brushes"].fill), _defineProperty(_enums_js__WEBPACK_IM, _enums_js__WEBPACK_IMPORTED_MODULE_7__["WGLGeometryType"].LINE, _brushes_js__WEBPACK_IMPORTED_MODULE_8__["brushes"].line), _defineProperty(_enums_js__WEBPACK_IM, _enums_js__WEBPACK_IMPORTED_MODULE_7__["WGLGeometryType"].MARKER, _brushes_js__WEBPACK_IMPORTED_MODULE_8__["brushes"].marker), _defineProperty(_enums_js__WEBPACK_IM, _enums_js__WEBPACK_IMPORTED_MODULE_7__["WGLGeometryType"].TEXT, _brushes_js__WEBPACK_IMPORTED_MODULE_8__["brushes"].text), _enums_js__WEBPACK_IM)[e];

            var s = this._brushCache.get(t);

            return void 0 === s && (s = new t(), this._brushCache.set(t, s)), this._brushCache.get(t);
          }
        }, {
          key: "renderObject",
          value: function renderObject(e, t, s, r) {
            var i = _brushes_js__WEBPACK_IMPORTED_MODULE_8__["brushes"][s];
            if (!i) return null;

            var o = this._brushCache.get(i);

            void 0 === o && (o = new i(), this._brushCache.set(i, o)), o.prepareState(e, t, r), o.draw(e, t, r);
          }
        }, {
          key: "renderObjects",
          value: function renderObjects(e, t, s, r) {
            var i = _brushes_js__WEBPACK_IMPORTED_MODULE_8__["brushes"][s];
            if (!i) return null;

            var o = this._brushCache.get(i);

            void 0 === o && (o = new i(), this._brushCache.set(i, o)), o.drawMany(e, t, r);
          }
        }, {
          key: "getVectorTileProgramCache",
          value: function getVectorTileProgramCache() {
            return this._vtlProgramCache;
          }
        }, {
          key: "registerRenderPass",
          value: function registerRenderPass(e) {
            var _this25 = this;

            var t = e.brushes.map(function (e) {
              return _this25._brushCache.has(e) || _this25._brushCache.set(e, new e()), _this25._brushCache.get(e);
            });
            return new _painter_RenderPass_js__WEBPACK_IMPORTED_MODULE_19__["default"](t, e);
          }
        }, {
          key: "setHighlightOptions",
          value: function setHighlightOptions(e) {
            this.effects.highlight.setHighlightOptions(e);
          }
        }, {
          key: "blitTexture",
          value: function blitTexture(e, t, s) {
            var r = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : 1;
            e.setBlendingEnabled(!0), e.setBlendFunctionSeparate(1, 771, 1, 771), e.setColorMask(!0, !0, !0, !0), this._blitRenderer.render(e, t, s, r);
          }
        }, {
          key: "getPostProcessingEffects",
          value: function getPostProcessingEffects(e) {
            return this._effectsManager.getPostProcessingEffects(e);
          }
        }, {
          key: "_getOutputFBO",
          value: function _getOutputFBO() {
            return null != this._renderTarget ? this._renderTarget : this._fbos.output;
          }
        }, {
          key: "_applyEffects",
          value: function _applyEffects(e, t) {
            var s = e.context,
                r = this._effectsManager.getPostProcessingEffects(t);

            var _iterator24 = _createForOfIteratorHelper(r),
                _step24;

            try {
              for (_iterator24.s(); !(_step24 = _iterator24.n()).done;) {
                var _step24$value = _step24.value,
                    _t21 = _step24$value.postProcessingEffect,
                    i = _step24$value.effect;
                s.bindFramebuffer(this._fbos.blend), _t21.draw(e, this._fbos.blend, i);
              }
            } catch (err) {
              _iterator24.e(err);
            } finally {
              _iterator24.f();
            }
          }
        }]);

        return _class7;
      }();
      /***/

    },

    /***/
    "XDzM":
    /*!************************************************************!*\
      !*** ./node_modules/@arcgis/core/views/2d/engine/Stage.js ***!
      \************************************************************/

    /*! exports provided: EXTRA_RENDER_TIME, Stage */

    /***/
    function XDzM(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "EXTRA_RENDER_TIME", function () {
        return B;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "Stage", function () {
        return E;
      });
      /* harmony import */


      var _core_has_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ../../../core/has.js */
      "wSAH");
      /* harmony import */


      var _core_Error_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ../../../core/Error.js */
      "zlDU");
      /* harmony import */


      var _core_events_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ../../../core/events.js */
      "nYOO");
      /* harmony import */


      var _core_scheduling_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ../../../core/scheduling.js */
      "WBXD");
      /* harmony import */


      var _core_mathUtils_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ../../../core/mathUtils.js */
      "OKTS");
      /* harmony import */


      var _chunks_common_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ../../../chunks/common.js */
      "QhKk");
      /* harmony import */


      var _core_watchUtils_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ../../../core/watchUtils.js */
      "N5XI");
      /* harmony import */


      var _chunks_vec2f64_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! ../../../chunks/vec2f64.js */
      "AvGH");
      /* harmony import */


      var _support_screenshotUtils_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! ../../support/screenshotUtils.js */
      "TcGo");
      /* harmony import */


      var _chunks_vec2_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! ../../../chunks/vec2.js */
      "M0lq");
      /* harmony import */


      var _webgl_context_util_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
      /*! ../../webgl/context-util.js */
      "zBXm");
      /* harmony import */


      var _chunks_mat2d_js__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
      /*! ../../../chunks/mat2d.js */
      "opr1");
      /* harmony import */


      var _chunks_mat2df64_js__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
      /*! ../../../chunks/mat2df64.js */
      "9+ss");
      /* harmony import */


      var _support_Timeline_js__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
      /*! ../support/Timeline.js */
      "Snp0");
      /* harmony import */


      var _chunks_builtins_js__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(
      /*! ../../../chunks/builtins.js */
      "n4uK");
      /* harmony import */


      var _webgl_BufferObject_js__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(
      /*! ../../webgl/BufferObject.js */
      "fOQB");
      /* harmony import */


      var _webgl_VertexArrayObject_js__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(
      /*! ../../webgl/VertexArrayObject.js */
      "D6bk");
      /* harmony import */


      var _webgl_FramebufferObject_js__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(
      /*! ../../webgl/FramebufferObject.js */
      "0meK");
      /* harmony import */


      var _webgl_programUtils_js__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(
      /*! ../../webgl/programUtils.js */
      "1F90");
      /* harmony import */


      var _webgl_RenderingContext_js__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(
      /*! ../../webgl/RenderingContext.js */
      "bfJE");
      /* harmony import */


      var _webgl_enums_js__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(
      /*! ./webgl/enums.js */
      "yE7X");
      /* harmony import */


      var _Container_js__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(
      /*! ./Container.js */
      "AMBt");
      /* harmony import */


      var _webgl_Painter_js__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(
      /*! ./webgl/Painter.js */
      "W3i+");
      /* harmony import */


      var _webgl_Profiler_js__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(
      /*! ./webgl/Profiler.js */
      "oQiY");
      /* harmony import */


      var _webgl_WebGLDriverTest_js__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(
      /*! ./webgl/WebGLDriverTest.js */
      "N4te");
      /* harmony import */


      var _webgl_shaders_StencilPrograms_js__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(
      /*! ./webgl/shaders/StencilPrograms.js */
      "3wQP");
      /*
      All material copyright ESRI, All Rights Reserved, unless otherwise specified.
      See https://js.arcgis.com/4.18/esri/copyright.txt for details.
      */


      var B = 2e3;

      var E = /*#__PURE__*/function (_Container_js__WEBPAC) {
        _inherits(E, _Container_js__WEBPAC);

        var _super10 = _createSuper(E);

        function E(r, n) {
          var _this26;

          _classCallCheck(this, E);

          _this26 = _super10.call(this), _this26._trash = new Set(), _this26._clipData = new Float32Array(8), _this26._upperLeft = Object(_chunks_vec2f64_js__WEBPACK_IMPORTED_MODULE_7__["a"])(), _this26._upperRight = Object(_chunks_vec2f64_js__WEBPACK_IMPORTED_MODULE_7__["a"])(), _this26._lowerLeft = Object(_chunks_vec2f64_js__WEBPACK_IMPORTED_MODULE_7__["a"])(), _this26._lowerRight = Object(_chunks_vec2f64_js__WEBPACK_IMPORTED_MODULE_7__["a"])(), _this26._mat2 = Object(_chunks_mat2df64_js__WEBPACK_IMPORTED_MODULE_12__["c"])(), _this26._clipRendererInitialized = !1, _this26._supersampleScreenshots = !0, _this26.renderRequested = !1, _this26.stage = _assertThisInitialized(_this26), _this26._stationary = !0;
          var _n$canvas = n.canvas,
              h = _n$canvas === void 0 ? document.createElement("canvas") : _n$canvas,
              _n$alpha = n.alpha,
              o = _n$alpha === void 0 ? !0 : _n$alpha,
              _n$stencil = n.stencil,
              l = _n$stencil === void 0 ? !0 : _n$stencil,
              _n$renderContext = n.renderContext,
              d = _n$renderContext === void 0 ? "webgl" : _n$renderContext,
              _n$supersampleScreens = n.supersampleScreenshots,
              c = _n$supersampleScreens === void 0 ? !0 : _n$supersampleScreens,
              _n$contextOptions = n.contextOptions,
              p = _n$contextOptions === void 0 ? {} : _n$contextOptions;
          _this26._canvas = h;

          var _ = Object(_webgl_context_util_js__WEBPACK_IMPORTED_MODULE_10__["createContextOrErrorHTML"])(h, {
            alpha: o,
            antialias: !1,
            depth: !0,
            stencil: l
          }, d);

          _this26.context = new _webgl_RenderingContext_js__WEBPACK_IMPORTED_MODULE_19__["default"](_, p), _this26.painter = new _webgl_Painter_js__WEBPACK_IMPORTED_MODULE_22__["default"](_this26.context, _assertThisInitialized(_this26)), Object(_core_has_js__WEBPACK_IMPORTED_MODULE_0__["default"])("esri-2d-profiler") && (_this26._debugOutput = document.createElement("div"), _this26._debugOutput.setAttribute("style", "margin: 24px 64px; position: absolute; color: red;"), r.appendChild(_this26._debugOutput)), _this26._renderParameters = {
            drawPhase: 0,
            state: _this26.state,
            pixelRatio: window.devicePixelRatio,
            stationary: !1,
            globalOpacity: 1,
            blendMode: null,
            deltaTime: -1,
            time: 0,
            inFadeTransition: !1,
            effects: null,
            context: _this26.context,
            painter: _this26.painter,
            timeline: n.timeline || new _support_Timeline_js__WEBPACK_IMPORTED_MODULE_13__["Timeline"](),
            renderingOptions: n.renderingOptions,
            driverTestResult: Object(_webgl_WebGLDriverTest_js__WEBPACK_IMPORTED_MODULE_24__["testWebGLDriver"])(_this26.context),
            profiler: new _webgl_Profiler_js__WEBPACK_IMPORTED_MODULE_23__["Profiler"](_this26.context, _this26._debugOutput),
            dataUploadCounter: 0
          }, _this26._taskHandle = Object(_core_scheduling_js__WEBPACK_IMPORTED_MODULE_3__["addFrameTask"])({
            render: function render(e) {
              return _this26.renderFrame(e);
            }
          }), _this26._taskHandle.pause(), _this26._supersampleScreenshots = c, _this26._lostWebGLContextHandle = Object(_core_events_js__WEBPACK_IMPORTED_MODULE_2__["on"])(h, "webglcontextlost", function () {
            _this26.emit("webgl-error", {
              error: new _core_Error_js__WEBPACK_IMPORTED_MODULE_1__["default"]("webgl-context-lost")
            });
          }), h.setAttribute("style", "width: 100%; height:100%; display:block;"), r.appendChild(h);
          return _this26;
        }

        _createClass(E, [{
          key: "destroy",
          value: function destroy() {
            this.removeAllChildren(), this._emptyTrash(), this._taskHandle.remove(), this._taskHandle = null, this._boundFBO = null, this._clipFBO && (this._clipFBO.dispose(), this._clipFBO = null), this._clipVAO && (this._clipVAO.dispose(), this._clipVAO = null, this._clipVBO = null), this._clipStencilProgram && (this._clipStencilProgram.dispose(), this._clipStencilProgram = null), this._lostWebGLContextHandle && (this._lostWebGLContextHandle.remove(), this._lostWebGLContextHandle = null), this._canvas.parentNode && this._canvas.parentNode.removeChild(this._canvas), this._debugOutput && this._debugOutput.parentNode && this._debugOutput.parentNode.removeChild(this._debugOutput), this.highlightOptions = null, this.painter.dispose(), this.context.dispose(), this._canvas = null;
          }
        }, {
          key: "background",
          get: function get() {
            return this._background;
          },
          set: function set(e) {
            this._background = e, this.requestRender();
          }
        }, {
          key: "highlightOptions",
          get: function get() {
            return this._highlightOptions;
          },
          set: function set(e) {
            var _this27 = this;

            this._highlightOptionsHandle && (this._highlightOptionsHandle.remove(), this._highlightOptionsHandle = null), this._highlightOptions = e, this._highlightOptions && (this._highlightOptionsHandle = Object(_core_watchUtils_js__WEBPACK_IMPORTED_MODULE_6__["init"])(this._highlightOptions, "version", function () {
              _this27.painter.setHighlightOptions(e), _this27.requestRender();
            }));
          }
        }, {
          key: "renderingOptions",
          get: function get() {
            return this._renderingOptions;
          },
          set: function set(e) {
            this._renderingOptions = e, this.requestRender();
          }
        }, {
          key: "state",
          get: function get() {
            return this._state;
          },
          set: function set(e) {
            this._state = e, this.requestRender();
          }
        }, {
          key: "stationary",
          get: function get() {
            return this._stationary;
          },
          set: function set(e) {
            this._stationary !== e && (this._stationary = e, this.requestRender());
          }
        }, {
          key: "trashDisplayObject",
          value: function trashDisplayObject(e) {
            this._trash.add(e), this.requestRender();
          }
        }, {
          key: "untrashDisplayObject",
          value: function untrashDisplayObject(e) {
            return this._trash["delete"](e);
          }
        }, {
          key: "requestRender",
          value: function requestRender() {
            this._lastRenderRequestTime = performance.now(), this.renderRequested || (this.renderRequested = !0, this.emit("will-render"), this._taskHandle.resume());
          }
        }, {
          key: "renderFrame",
          value: function renderFrame(e) {
            e.time - this._lastRenderRequestTime >= 2e3 && this._taskHandle.pause(), this.renderRequested = !1, this._renderParameters.state = this._state, this._renderParameters.stationary = this.stationary, this._renderParameters.pixelRatio = window.devicePixelRatio, this._renderParameters.globalOpacity = 1, this._renderParameters.time = e.time, this._renderParameters.deltaTime = e.deltaTime, this._renderParameters.effects = null, this.processRender(this._renderParameters), this._emptyTrash(), this.emit("post-render");
          }
        }, {
          key: "renderChildren",
          value: function renderChildren(e) {
            var _iterator25 = _createForOfIteratorHelper(this.children),
                _step25;

            try {
              for (_iterator25.s(); !(_step25 = _iterator25.n()).done;) {
                var t = _step25.value;
                t.beforeRender(e);
              }
            } catch (err) {
              _iterator25.e(err);
            } finally {
              _iterator25.f();
            }

            this._renderChildren(this.children, e);

            var _iterator26 = _createForOfIteratorHelper(this.children),
                _step26;

            try {
              for (_iterator26.s(); !(_step26 = _iterator26.n()).done;) {
                var _t22 = _step26.value;

                _t22.afterRender(e);
              }
            } catch (err) {
              _iterator26.e(err);
            } finally {
              _iterator26.f();
            }
          }
        }, {
          key: "_renderChildren",
          value: function _renderChildren(t, i) {
            var s = this.context;
            i.profiler.recordStart("drawLayers"), i.dataUploadCounter = 0, this._beforeRenderChildren(i), i.drawPhase = _webgl_enums_js__WEBPACK_IMPORTED_MODULE_20__["WGLDrawPhase"].MAP, this.painter.beforeRenderLayers(s, this.background);

            var _iterator27 = _createForOfIteratorHelper(t),
                _step27;

            try {
              for (_iterator27.s(); !(_step27 = _iterator27.n()).done;) {
                var _e20 = _step27.value;

                _e20.processRender(i);
              }
            } catch (err) {
              _iterator27.e(err);
            } finally {
              _iterator27.f();
            }

            this.painter.renderLayers(s), i.drawPhase = _webgl_enums_js__WEBPACK_IMPORTED_MODULE_20__["WGLDrawPhase"].HIGHLIGHT, this.painter.beforeRenderLayers(s);

            var _iterator28 = _createForOfIteratorHelper(t),
                _step28;

            try {
              for (_iterator28.s(); !(_step28 = _iterator28.n()).done;) {
                var _e21 = _step28.value;

                _e21.processRender(i);
              }
            } catch (err) {
              _iterator28.e(err);
            } finally {
              _iterator28.f();
            }

            this.painter.renderLayers(s);

            if (this._isLabelDrawPhaseRequired(t)) {
              i.drawPhase = _webgl_enums_js__WEBPACK_IMPORTED_MODULE_20__["WGLDrawPhase"].LABEL, this.painter.beforeRenderLayers(s);

              var _iterator29 = _createForOfIteratorHelper(t),
                  _step29;

              try {
                for (_iterator29.s(); !(_step29 = _iterator29.n()).done;) {
                  var e = _step29.value;
                  e.processRender(i);
                }
              } catch (err) {
                _iterator29.e(err);
              } finally {
                _iterator29.f();
              }

              this.painter.renderLayers(s);
            }

            if (Object(_core_has_js__WEBPACK_IMPORTED_MODULE_0__["default"])("esri-tiles-debug")) {
              i.drawPhase = _webgl_enums_js__WEBPACK_IMPORTED_MODULE_20__["WGLDrawPhase"].DEBUG, this.painter.beforeRenderLayers(s);

              var _iterator30 = _createForOfIteratorHelper(t),
                  _step30;

              try {
                for (_iterator30.s(); !(_step30 = _iterator30.n()).done;) {
                  var _e19 = _step30.value;

                  _e19.processRender(i);
                }
              } catch (err) {
                _iterator30.e(err);
              } finally {
                _iterator30.f();
              }

              this.painter.renderLayers(s);
            }

            i.profiler.recordEnd("drawLayers"), this._afterRenderChildren();
          }
        }, {
          key: "_beforeRenderChildren",
          value: function _beforeRenderChildren(e) {
            var t = this.context,
                i = e.state,
                s = e.pixelRatio;
            t.enforceState();
            var n = i.size,
                a = i.rotation,
                h = Math.round(n[0] * s),
                o = Math.round(n[1] * s);
            this._boundFBO = t.getBoundFramebufferObject();
            if (!(i.spatialReference && (i.spatialReference._isWrappable ? i.spatialReference._isWrappable() : i.spatialReference.isWrappable))) return void (this._clipFrame = !1);
            var l = Object(_chunks_common_js__WEBPACK_IMPORTED_MODULE_5__["t"])(a),
                d = Math.abs(Math.cos(l)),
                u = Math.abs(Math.sin(l)),
                f = Math.round(h * d + o * u),
                b = Math.round(i.worldScreenWidth);
            if (f <= b) return void (this._clipFrame = !1);
            this._clipFBO && this._clipFBO.width === h && this._clipFBO.height === o || (this._clipFBO = new _webgl_FramebufferObject_js__WEBPACK_IMPORTED_MODULE_17__["default"](t, {
              colorTarget: 0,
              depthStencilTarget: 3,
              width: h,
              height: o
            }));
            var w = (this.state.padding.left - this.state.padding.right) / 2,
                R = (this.state.padding.bottom - this.state.padding.top) / 2,
                x = .5 * h,
                y = .5 * o,
                C = 1 / h,
                F = 1 / o,
                v = b * s * .5,
                P = .5 * (h * u + o * d),
                S = this._upperLeft,
                j = this._upperRight,
                B = this._lowerLeft,
                _E = this._lowerRight;
            Object(_chunks_vec2_js__WEBPACK_IMPORTED_MODULE_9__["s"])(S, -v, -P), Object(_chunks_vec2_js__WEBPACK_IMPORTED_MODULE_9__["s"])(j, v, -P), Object(_chunks_vec2_js__WEBPACK_IMPORTED_MODULE_9__["s"])(B, -v, P), Object(_chunks_vec2_js__WEBPACK_IMPORTED_MODULE_9__["s"])(_E, v, P), Object(_chunks_mat2d_js__WEBPACK_IMPORTED_MODULE_11__["i"])(this._mat2), Object(_chunks_mat2d_js__WEBPACK_IMPORTED_MODULE_11__["t"])(this._mat2, this._mat2, [x + w, y + R]), 0 !== a && Object(_chunks_mat2d_js__WEBPACK_IMPORTED_MODULE_11__["r"])(this._mat2, this._mat2, l), Object(_chunks_vec2_js__WEBPACK_IMPORTED_MODULE_9__["t"])(S, S, this._mat2), Object(_chunks_vec2_js__WEBPACK_IMPORTED_MODULE_9__["t"])(j, j, this._mat2), Object(_chunks_vec2_js__WEBPACK_IMPORTED_MODULE_9__["t"])(B, B, this._mat2), Object(_chunks_vec2_js__WEBPACK_IMPORTED_MODULE_9__["t"])(_E, _E, this._mat2);
            var T = this._clipData;
            T.set([2 * B[0] * C - 1, 2 * (o - B[1]) * F - 1, 2 * _E[0] * C - 1, 2 * (o - _E[1]) * F - 1, 2 * S[0] * C - 1, 2 * (o - S[1]) * F - 1, 2 * j[0] * C - 1, 2 * (o - j[1]) * F - 1]), this._clipRendererInitialized || this._initializeClipRenderer(t), this._clipVBO.setData(T), this._boundFBO = t.getBoundFramebufferObject(), t.bindFramebuffer(this._clipFBO), t.setDepthWriteEnabled(!0), t.setStencilWriteMask(255), t.setClearColor(0, 0, 0, 0), t.setClearDepth(1), t.setClearStencil(0), t.clear(t.gl.COLOR_BUFFER_BIT | t.gl.DEPTH_BUFFER_BIT | t.gl.STENCIL_BUFFER_BIT), t.setDepthWriteEnabled(!1), this._clipFrame = !0;
          }
        }, {
          key: "_afterRenderChildren",
          value: function _afterRenderChildren() {
            var e = this.context;

            if (e.logIno(), this._clipFrame && this._clipRendererInitialized) {
              if (e.bindFramebuffer(this._boundFBO), this._boundFBO = null, e.bindVAO(this._clipVAO), e.bindProgram(this._clipStencilProgram), e.setDepthWriteEnabled(!1), e.setDepthTestEnabled(!1), e.setStencilTestEnabled(!0), e.setBlendingEnabled(!1), e.setColorMask(!1, !1, !1, !1), e.setStencilOp(7680, 7680, 7681), e.setStencilWriteMask(255), e.setStencilFunction(519, 1, 255), e.drawElements(4, 6, 5123, 0), e.bindVAO(), e.setColorMask(!0, !0, !0, !0), null != this.background) {
                var _this$background$colo = this.background.color,
                    t = _this$background$colo.r,
                    i = _this$background$colo.g,
                    s = _this$background$colo.b,
                    r = _this$background$colo.a;
                e.setClearColor(r * t / 255, r * i / 255, r * s / 255, r);
              } else e.setClearColor(0, 0, 0, 0);

              e.clear(e.gl.COLOR_BUFFER_BIT), e.setBlendingEnabled(!0), e.setStencilFunction(514, 1, 255), this.painter.blitTexture(e, this._clipFBO.colorTexture, 9728, 1), e.setStencilTestEnabled(!1);
            }
          }
        }, {
          key: "doRender",
          value: function doRender(e) {
            var t = this.context,
                i = e.state,
                s = e.pixelRatio;
            this._resizeCanvas(e), this.context.enforceState(), t.setViewport(0, 0, s * i.size[0], s * i.size[1]), t.setDepthWriteEnabled(!0), t.setStencilWriteMask(255), _get(_getPrototypeOf(E.prototype), "doRender", this).call(this, e);
          }
        }, {
          key: "takeScreenshot",
          value: function () {
            var _takeScreenshot = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee20(e, t) {
              var i, s, r, n, a, l, d, _t23, c, p, u, _, m;

              return regeneratorRuntime.wrap(function _callee20$(_context20) {
                while (1) {
                  switch (_context20.prev = _context20.next) {
                    case 0:
                      i = Object(_support_screenshotUtils_js__WEBPACK_IMPORTED_MODULE_8__["screenshotSuperSampleSettings"])(e, this._supersampleScreenshots, this._state.padding), s = i.framebufferWidth, r = i.framebufferHeight, n = this.context, a = e.layers;
                      l = this.children;
                      d = _objectSpread(_objectSpread({}, this._renderParameters), {}, {
                        drawPhase: null,
                        globalOpacity: 1,
                        stationary: !0,
                        state: this._renderParameters.state.clone(),
                        pixelRatio: i.pixelRatio,
                        time: Date.now(),
                        deltaTime: 0,
                        blendMode: null,
                        effects: null,
                        inFadeTransition: !1
                      });

                      if (null != e.rotation) {
                        _t23 = d.state.viewpoint;
                        _t23.rotation = e.rotation, d.state.viewpoint = _t23;
                      }

                      a.length > 0 && (l = [], a.forEach(function (e) {
                        var i = t.find(function (t) {
                          return t.layer.id === e.id;
                        });
                        i && "container" in i && i.container && l.push(i.container);
                      }));
                      c = new _webgl_FramebufferObject_js__WEBPACK_IMPORTED_MODULE_17__["default"](n, {
                        colorTarget: 0,
                        depthStencilTarget: 3,
                        width: s,
                        height: r
                      }), p = n.getBoundFramebufferObject(), u = n.getViewport();
                      n.bindFramebuffer(c), n.setViewport(0, 0, s, r), this._renderChildren(l, d);
                      _ = this._readbackScreenshot(i);
                      n.bindFramebuffer(p), n.setViewport(u.x, u.y, u.width, u.height), this.requestRender();
                      m = this._ensureScreenshotEncodeCanvas();
                      return _context20.abrupt("return", Object(_support_screenshotUtils_js__WEBPACK_IMPORTED_MODULE_8__["encodeResult"])(_, e, m, {
                        flipY: !0,
                        premultipliedAlpha: !0
                      }));

                    case 11:
                    case "end":
                      return _context20.stop();
                  }
                }
              }, _callee20, this);
            }));

            function takeScreenshot(_x26, _x27) {
              return _takeScreenshot.apply(this, arguments);
            }

            return takeScreenshot;
          }()
        }, {
          key: "_ensureScreenshotEncodeCanvas",
          value: function _ensureScreenshotEncodeCanvas() {
            return this._screenshotEncodeCanvas || (this._screenshotEncodeCanvas = document.createElement("canvas")), this._screenshotEncodeCanvas;
          }
        }, {
          key: "_readbackScreenshot",
          value: function _readbackScreenshot(e) {
            var t = e.framebufferWidth,
                i = e.framebufferHeight,
                s = e.region,
                r = e.resample,
                n = this.context.gl;

            if (r) {
              var _e22 = Object(_support_screenshotUtils_js__WEBPACK_IMPORTED_MODULE_8__["createEmptyImageData"])(t, i, this._ensureScreenshotEncodeCanvas());

              n.readPixels(0, 0, t, i, 6408, 5121, new Uint8Array(_e22.data.buffer));
              var a = Object(_support_screenshotUtils_js__WEBPACK_IMPORTED_MODULE_8__["createEmptyImageData"])(s.width, s.height, this._ensureScreenshotEncodeCanvas());
              return Object(_support_screenshotUtils_js__WEBPACK_IMPORTED_MODULE_8__["resampleHermite"])(_e22, a, !0, r.region.x, i - (r.region.y + r.region.height), r.region.width, r.region.height);
            }

            {
              var _e23 = Object(_support_screenshotUtils_js__WEBPACK_IMPORTED_MODULE_8__["createEmptyImageData"])(s.width, s.height, this._ensureScreenshotEncodeCanvas());

              return n.readPixels(s.x, i - (s.y + s.height), s.width, s.height, 6408, 5121, new Uint8Array(_e23.data.buffer)), _e23;
            }
          }
        }, {
          key: "_resizeCanvas",
          value: function _resizeCanvas(e) {
            var t = this._canvas,
                i = t.style,
                s = e.state.size,
                r = e.pixelRatio,
                n = s[0],
                a = s[1],
                h = Math.round(n * r),
                o = Math.round(a * r);
            t.width === h && t.height === o || (t.width = h, t.height = o), i.width = n + "px", i.height = a + "px";
          }
        }, {
          key: "_initializeClipRenderer",
          value: function _initializeClipRenderer(e) {
            if (this._clipRendererInitialized) return !0;
            var t = _webgl_shaders_StencilPrograms_js__WEBPACK_IMPORTED_MODULE_25__["stencil"].attributes,
                i = Object(_webgl_programUtils_js__WEBPACK_IMPORTED_MODULE_18__["createProgram"])(e, _webgl_shaders_StencilPrograms_js__WEBPACK_IMPORTED_MODULE_25__["stencil"]);
            if (!i) return !1;

            var s = _webgl_BufferObject_js__WEBPACK_IMPORTED_MODULE_15__["default"].createVertex(e, 35040, 32),
                r = new Uint16Array([0, 1, 2, 2, 1, 3]),
                n = _webgl_BufferObject_js__WEBPACK_IMPORTED_MODULE_15__["default"].createIndex(e, 35044, r),
                a = new _webgl_VertexArrayObject_js__WEBPACK_IMPORTED_MODULE_16__["default"](e, t, {
              geometry: [{
                name: "a_pos",
                count: 2,
                type: 5126,
                offset: 0,
                stride: 8,
                normalized: !1,
                divisor: 0
              }]
            }, {
              geometry: s
            }, n);

            return this._clipStencilProgram = i, this._clipVBO = s, this._clipVAO = a, this._clipRendererInitialized = !0, !0;
          }
        }, {
          key: "_emptyTrash",
          value: function _emptyTrash() {
            for (; this._trash.size > 0;) {
              var e = Array.from(this._trash);

              this._trash.clear();

              for (var _i9 = 0, _e24 = e; _i9 < _e24.length; _i9++) {
                var t = _e24[_i9];
                t.processDetach();
              }
            }
          }
        }, {
          key: "_isLabelDrawPhaseRequired",
          value: function _isLabelDrawPhaseRequired(e) {
            var t = !1;

            var _iterator31 = _createForOfIteratorHelper(e),
                _step31;

            try {
              for (_iterator31.s(); !(_step31 = _iterator31.n()).done;) {
                var i = _step31.value;

                if (!(i instanceof _Container_js__WEBPACK_IMPORTED_MODULE_21__["Container"])) {
                  t = t || !1;
                  break;
                }

                if (i.hasLabels) return !0;
                t = t || this._isLabelDrawPhaseRequired(i.children);
              }
            } catch (err) {
              _iterator31.e(err);
            } finally {
              _iterator31.f();
            }

            return t;
          }
        }]);

        return E;
      }(_Container_js__WEBPACK_IMPORTED_MODULE_21__["Container"]);
      /***/

    },

    /***/
    "YbU1":
    /*!*************************************************************************!*\
      !*** ./node_modules/@arcgis/core/views/2d/engine/webgl/SpriteMosaic.js ***!
      \*************************************************************************/

    /*! exports provided: default */

    /***/
    function YbU1(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony import */


      var _core_has_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ../../../../core/has.js */
      "wSAH");
      /* harmony import */


      var _core_maybe_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ../../../../core/maybe.js */
      "srIe");
      /* harmony import */


      var _core_Error_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ../../../../core/Error.js */
      "zlDU");
      /* harmony import */


      var _definitions_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./definitions.js */
      "jIHu");
      /* harmony import */


      var _chunks_builtins_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ../../../../chunks/builtins.js */
      "n4uK");
      /* harmony import */


      var _webgl_Texture_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ../../../webgl/Texture.js */
      "of9L");
      /* harmony import */


      var _webgl_FramebufferObject_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ../../../webgl/FramebufferObject.js */
      "0meK");
      /* harmony import */


      var _webgl_RenderingContext_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! ../../../webgl/RenderingContext.js */
      "bfJE");
      /* harmony import */


      var _Rect_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! ./Rect.js */
      "qcDN");
      /* harmony import */


      var _GeometryUtils_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! ./GeometryUtils.js */
      "HQFP");
      /* harmony import */


      var _RectangleBinPack_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
      /*! ./RectangleBinPack.js */
      "rhr1");
      /*
      All material copyright ESRI, All Rights Reserved, unless otherwise specified.
      See https://js.arcgis.com/4.18/esri/copyright.txt for details.
      */


      function c(t) {
        return t && "static" === t.type;
      }

      var n = /*#__PURE__*/function () {
        function n(e, i, s) {
          var a = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : 0;

          _classCallCheck(this, n);

          if (this._mosaicPages = [], this._maxItemSize = 0, this._currentPage = 0, this._fixSpriteLocationsTable = Object(_core_has_js__WEBPACK_IMPORTED_MODULE_0__["default"])("fix-sprite-locations"), this._testId = Object(_core_has_js__WEBPACK_IMPORTED_MODULE_0__["default"])("test-id"), this._pageWidth = 0, this._pageHeight = 0, this._mosaicRects = new Map(), this._spriteCopyQueue = [], this.pixelRatio = 1, (i <= 0 || s <= 0) && console.error("Sprites mosaic defaultWidth and defaultHeight must be greater than zero!"), this._pageWidth = i, this._pageHeight = s, this._requestRender = e, a > 0 && (this._maxItemSize = a), this.pixelRatio = window.devicePixelRatio || 1, this._fixSpriteLocationsTable) {
            var t = [];

            for (var _e25 in this._fixSpriteLocationsTable[this._testId]) {
              var _i10 = this._fixSpriteLocationsTable[this._testId][_e25];
              t[_i10.page] = _i10.pageSize;
            }

            for (var _i11 = 0, _t24 = t; _i11 < _t24.length; _i11++) {
              var _e26 = _t24[_i11];

              this._mosaicPages.push({
                mosaicsData: {
                  type: "static",
                  data: new Uint32Array(_e26[0] * _e26[1])
                },
                size: [_e26[0], _e26[1]],
                dirty: !0,
                texture: void 0
              });
            }
          }

          this._binPack = new _RectangleBinPack_js__WEBPACK_IMPORTED_MODULE_10__["default"](this._pageWidth, this._pageHeight);
          var r = Math.floor(this._pageWidth),
              o = Math.floor(this._pageHeight);

          this._mosaicPages.push({
            mosaicsData: {
              type: "static",
              data: new Uint32Array(r * o)
            },
            size: [this._pageWidth, this._pageHeight],
            dirty: !0,
            texture: void 0
          });
        }

        _createClass(n, [{
          key: "getWidth",
          value: function getWidth(t) {
            return t >= this._mosaicPages.length ? -1 : this._mosaicPages[t].size[0];
          }
        }, {
          key: "getHeight",
          value: function getHeight(t) {
            return t >= this._mosaicPages.length ? -1 : this._mosaicPages[t].size[1];
          }
        }, {
          key: "getPageTexture",
          value: function getPageTexture(t) {
            return t < this._mosaicPages.length ? this._mosaicPages[t].texture : null;
          }
        }, {
          key: "has",
          value: function has(t) {
            return this._mosaicRects.has(t);
          }
        }, {
          key: "itemCount",
          get: function get() {
            return this._mosaicRects.size;
          }
        }, {
          key: "getSpriteItem",
          value: function getSpriteItem(t) {
            return this._mosaicRects.get(t);
          }
        }, {
          key: "addSpriteItem",
          value: function addSpriteItem(t, e, i, s, a, o) {
            if (this._mosaicRects.has(t)) return this._mosaicRects.get(t);

            var h, _n4, p;

            if (c(i)) {
              if (this._fixSpriteLocationsTable && this._fixSpriteLocationsTable[this._testId] && this._fixSpriteLocationsTable[this._testId][t]) {
                var _e27 = this._fixSpriteLocationsTable[this._testId][t];
                h = _e27.rect, _n4 = _e27.page, p = _e27.pageSize;
              } else {
                var _this$_allocateImage = this._allocateImage(e[0], e[1]);

                var _this$_allocateImage2 = _slicedToArray(_this$_allocateImage, 3);

                h = _this$_allocateImage2[0];
                _n4 = _this$_allocateImage2[1];
                p = _this$_allocateImage2[2];
              }
            } else {
              h = new _Rect_js__WEBPACK_IMPORTED_MODULE_8__["default"](0, 0, e[0], e[1]), _n4 = this._mosaicPages.length;

              var _t25 = void 0;

              this._mosaicPages.push({
                mosaicsData: i,
                size: e,
                dirty: !0,
                texture: _t25
              });
            }
            if (h.width <= 0 || h.height <= 0) return null;
            var g = {
              rect: h,
              width: e[0],
              height: e[1],
              sdf: a,
              simplePattern: o,
              pixelRatio: 1,
              page: _n4
            };
            return this._mosaicRects.set(t, g), c(i) && this._copy({
              rect: h,
              spriteSize: e,
              spriteData: i.data,
              page: _n4,
              pageSize: p,
              repeat: s,
              sdf: a
            }), g;
          }
        }, {
          key: "hasItemsToProcess",
          value: function hasItemsToProcess() {
            return 0 !== this._spriteCopyQueue.length;
          }
        }, {
          key: "processNextItem",
          value: function processNextItem() {
            var t = this._spriteCopyQueue.pop();

            t && this._copy(t);
          }
        }, {
          key: "getSpriteItems",
          value: function getSpriteItems(t) {
            var e = {};

            var _iterator32 = _createForOfIteratorHelper(t),
                _step32;

            try {
              for (_iterator32.s(); !(_step32 = _iterator32.n()).done;) {
                var i = _step32.value;
                e[i] = this.getSpriteItem(i);
              }
            } catch (err) {
              _iterator32.e(err);
            } finally {
              _iterator32.f();
            }

            return e;
          }
        }, {
          key: "getMosaicItemPosition",
          value: function getMosaicItemPosition(t) {
            var e = this.getSpriteItem(t),
                i = e && e.rect;
            if (!i) return null;
            i.width = e.width, i.height = e.height;
            var a = e.width,
                r = e.height,
                o = _definitions_js__WEBPACK_IMPORTED_MODULE_3__["SPRITE_PADDING"],
                h = this._mosaicPages[e.page];
            return {
              size: [e.width, e.height],
              tl: [(i.x + o) / h[0], (i.y + o) / h[1]],
              br: [(i.x + o + a) / h[0], (i.y + o + r) / h[1]],
              page: e.page
            };
          }
        }, {
          key: "bind",
          value: function bind(t, i) {
            var s = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 0;
            var r = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : 0;
            var o = this._mosaicPages[s],
                h = o.mosaicsData;
            var _n5 = o.texture;
            if (_n5 || (_n5 = function (t, e, i) {
              if (c(e)) return new _webgl_Texture_js__WEBPACK_IMPORTED_MODULE_5__["default"](t, {
                pixelFormat: 6408,
                dataType: 5121,
                width: i[0],
                height: i[1]
              }, new Uint8Array(e.data.buffer));
              return new _webgl_Texture_js__WEBPACK_IMPORTED_MODULE_5__["default"](t, {
                pixelFormat: 6408,
                dataType: 5121,
                samplingMode: 9729,
                wrapMode: 33071,
                width: i[0],
                height: i[1]
              }, null);
            }(t, h, o.size), o.texture = _n5), _n5.setSamplingMode(i), c(h)) t.bindTexture(_n5, r), o.dirty && (_n5.setData(new Uint8Array(h.data.buffer)), _n5.generateMipmap());else {
              var _i12 = h.data,
                  _s12 = _i12.bindFrame(t, _n5, r);

              Object(_core_maybe_js__WEBPACK_IMPORTED_MODULE_1__["isSome"])(this._requestRender) && _s12 && _i12.frameCount > 0 && this._requestRender.requestRender(), _i12.bindFrame(t, _n5, r);
            }
            o.dirty = !1;
          }
        }, {
          key: "_copy",
          value: function _copy(t) {
            if (t.page >= this._mosaicPages.length) return;
            var e = this._mosaicPages[t.page],
                a = e.mosaicsData;
            if (!c(e.mosaicsData)) throw new _core_Error_js__WEBPACK_IMPORTED_MODULE_2__["default"]("mapview-invalid-resource", "unsuitable data type!");
            var r = t.spriteData,
                o = a.data;
            o && r || console.error("Source or target images are uninitialized!"), n._copyBits(r, t.spriteSize[0], 0, 0, o, t.pageSize[0], t.rect.x + _definitions_js__WEBPACK_IMPORTED_MODULE_3__["SPRITE_PADDING"], t.rect.y + _definitions_js__WEBPACK_IMPORTED_MODULE_3__["SPRITE_PADDING"], t.spriteSize[0], t.spriteSize[1], t.repeat), e.dirty = !0;
          }
        }, {
          key: "_allocateImage",
          value: function _allocateImage(t, e) {
            t += 2 * _definitions_js__WEBPACK_IMPORTED_MODULE_3__["SPRITE_PADDING"], e += 2 * _definitions_js__WEBPACK_IMPORTED_MODULE_3__["SPRITE_PADDING"];
            var i = Math.max(t, e);

            if (this._maxItemSize && this._maxItemSize < i) {
              var _i13 = Math.pow(2, Math.ceil(Object(_GeometryUtils_js__WEBPACK_IMPORTED_MODULE_9__["log2"])(t))),
                  s = Math.pow(2, Math.ceil(Object(_GeometryUtils_js__WEBPACK_IMPORTED_MODULE_9__["log2"])(e))),
                  _a6 = new _Rect_js__WEBPACK_IMPORTED_MODULE_8__["default"](0, 0, t, e);

              return this._mosaicPages.push({
                mosaicsData: {
                  type: "static",
                  data: new Uint32Array(_i13 * s)
                },
                size: [_i13, s],
                dirty: !0,
                texture: void 0
              }), [_a6, this._mosaicPages.length - 1, [_i13, s]];
            }

            var a = this._binPack.allocate(t, e);

            if (a.width <= 0) {
              var _i14 = this._mosaicPages[this._currentPage];
              return !_i14.dirty && c(_i14.mosaicsData) && (_i14.mosaicsData.data = null), this._currentPage = this._mosaicPages.length, this._mosaicPages.push({
                mosaicsData: {
                  type: "static",
                  data: new Uint32Array(this._pageWidth * this._pageHeight)
                },
                size: [this._pageWidth, this._pageHeight],
                dirty: !0,
                texture: void 0
              }), this._binPack = new _RectangleBinPack_js__WEBPACK_IMPORTED_MODULE_10__["default"](this._pageWidth, this._pageHeight), this._allocateImage(t, e);
            }

            return [a, this._currentPage, [this._pageWidth, this._pageHeight]];
          }
        }, {
          key: "dispose",
          value: function dispose() {
            this._binPack = null;

            var _iterator33 = _createForOfIteratorHelper(this._mosaicPages),
                _step33;

            try {
              for (_iterator33.s(); !(_step33 = _iterator33.n()).done;) {
                var t = _step33.value;
                var e = t.texture;
                e && e.dispose();
                var i = t.mosaicsData;

                if (!c(i)) {
                  i.data.pause();
                }
              }
            } catch (err) {
              _iterator33.e(err);
            } finally {
              _iterator33.f();
            }

            this._mosaicPages = null, this._mosaicRects.clear();
          }
        }], [{
          key: "_copyBits",
          value: function _copyBits(t, e, i, s, a, r, o, h, c, _n6, p) {
            var g = s * e + i,
                m = h * r + o;

            if (p) {
              m -= r;

              for (var _o6 = -1; _o6 <= _n6; _o6++, g = ((_o6 + _n6) % _n6 + s) * e + i, m += r) {
                for (var _e28 = -1; _e28 <= c; _e28++) {
                  a[m + _e28] = t[g + (_e28 + c) % c];
                }
              }
            } else for (var _i15 = 0; _i15 < _n6; _i15++) {
              for (var _e29 = 0; _e29 < c; _e29++) {
                a[m + _e29] = t[g + _e29];
              }

              g += e, m += r;
            }
          }
        }]);

        return n;
      }();
      /* harmony default export */


      __webpack_exports__["default"] = n;
      /***/
    },

    /***/
    "aK+o":
    /*!************************************************************************************************!*\
      !*** ./node_modules/@arcgis/core/views/2d/engine/webgl/effects/highlight/HighlightRenderer.js ***!
      \************************************************************************************************/

    /*! exports provided: default */

    /***/
    function aKO(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony import */


      var _core_has_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ../../../../../../core/has.js */
      "wSAH");
      /* harmony import */


      var _core_mathUtils_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ../../../../../../core/mathUtils.js */
      "OKTS");
      /* harmony import */


      var _definitions_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ../../definitions.js */
      "jIHu");
      /* harmony import */


      var _chunks_builtins_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ../../../../../../chunks/builtins.js */
      "n4uK");
      /* harmony import */


      var _webgl_BufferObject_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ../../../../../webgl/BufferObject.js */
      "fOQB");
      /* harmony import */


      var _webgl_VertexArrayObject_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ../../../../../webgl/VertexArrayObject.js */
      "D6bk");
      /* harmony import */


      var _webgl_FramebufferObject_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ../../../../../webgl/FramebufferObject.js */
      "0meK");
      /* harmony import */


      var _webgl_programUtils_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! ../../../../../webgl/programUtils.js */
      "1F90");
      /* harmony import */


      var _webgl_RenderingContext_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! ../../../../../webgl/RenderingContext.js */
      "bfJE");
      /* harmony import */


      var _parameters_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! ./parameters.js */
      "fGRN");
      /* harmony import */


      var _shaders_HighlightPrograms_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
      /*! ../../shaders/HighlightPrograms.js */
      "L/m8");
      /*
      All material copyright ESRI, All Rights Reserved, unless otherwise specified.
      See https://js.arcgis.com/4.18/esri/copyright.txt for details.
      */

      /* harmony default export */


      __webpack_exports__["default"] = /*#__PURE__*/function () {
        function _class8() {
          _classCallCheck(this, _class8);

          this._width = void 0, this._height = void 0, this._resources = null;
        }

        _createClass(_class8, [{
          key: "dispose",
          value: function dispose() {
            this._resources && (this._resources.quadGeometry.dispose(), this._resources.quadVAO.dispose(), this._resources.highlightProgram.dispose(), this._resources.blurProgram.dispose(), this._resources = null);
          }
        }, {
          key: "preBlur",
          value: function preBlur(e, s) {
            e.bindTexture(s, _definitions_js__WEBPACK_IMPORTED_MODULE_2__["TEXTURE_BINDING_HIGHLIGHT_0"]), e.bindProgram(this._resources.blurProgram), this._resources.blurProgram.setUniform4fv("u_direction", [1, 0, 1 / this._width, 0]), this._resources.blurProgram.setUniformMatrix4fv("u_channelSelector", _parameters_js__WEBPACK_IMPORTED_MODULE_9__["ALPHA_TO_RGBA_CHANNEL_SELECTOR_MATRIX"]), e.bindVAO(this._resources.quadVAO), e.drawArrays(5, 0, 4), e.bindVAO();
          }
        }, {
          key: "finalBlur",
          value: function finalBlur(e, s) {
            e.bindTexture(s, _definitions_js__WEBPACK_IMPORTED_MODULE_2__["TEXTURE_BINDING_HIGHLIGHT_0"]), e.bindProgram(this._resources.blurProgram), this._resources.blurProgram.setUniform4fv("u_direction", [0, 1, 0, 1 / this._height]), this._resources.blurProgram.setUniformMatrix4fv("u_channelSelector", _parameters_js__WEBPACK_IMPORTED_MODULE_9__["RGBA_TO_RGBA_CHANNEL_SELECTOR_MATRIX"]), e.bindVAO(this._resources.quadVAO), e.drawArrays(5, 0, 4), e.bindVAO();
          }
        }, {
          key: "renderHighlight",
          value: function renderHighlight(e, s, i) {
            e.bindTexture(s, _definitions_js__WEBPACK_IMPORTED_MODULE_2__["TEXTURE_BINDING_HIGHLIGHT_0"]), e.bindProgram(this._resources.highlightProgram), i.applyHighlightOptions(e, this._resources.highlightProgram), e.bindVAO(this._resources.quadVAO), e.setBlendingEnabled(!0), e.setBlendFunction(1, 771), e.drawArrays(5, 0, 4), e.bindVAO();
          }
        }, {
          key: "_initialize",
          value: function _initialize(o, h, m) {
            this._width = h, this._height = m;

            var d = new _webgl_BufferObject_js__WEBPACK_IMPORTED_MODULE_4__["default"](o, 34962, 35044, new Int8Array([-1, -1, 0, 0, 1, -1, 1, 0, -1, 1, 0, 1, 1, 1, 1, 1]).buffer),
                g = new _webgl_VertexArrayObject_js__WEBPACK_IMPORTED_MODULE_5__["default"](o, {
              a_position: 0,
              a_texcoord: 1
            }, {
              geometry: [{
                name: "a_position",
                count: 2,
                type: 5120,
                offset: 0,
                stride: 4,
                normalized: !1
              }, {
                name: "a_texcoord",
                count: 2,
                type: 5121,
                offset: 2,
                stride: 4,
                normalized: !1
              }]
            }, {
              geometry: d
            }),
                l = Object(_webgl_programUtils_js__WEBPACK_IMPORTED_MODULE_7__["createProgram"])(o, _shaders_HighlightPrograms_js__WEBPACK_IMPORTED_MODULE_10__["highlight"]),
                _ = Object(_webgl_programUtils_js__WEBPACK_IMPORTED_MODULE_7__["createProgram"])(o, _shaders_HighlightPrograms_js__WEBPACK_IMPORTED_MODULE_10__["blur"]);

            l.setUniform1i("u_texture", _definitions_js__WEBPACK_IMPORTED_MODULE_2__["TEXTURE_BINDING_HIGHLIGHT_0"]), l.setUniform1i("u_shade", _definitions_js__WEBPACK_IMPORTED_MODULE_2__["TEXTURE_BINDING_HIGHLIGHT_1"]), l.setUniform4fv("u_sigmas", _parameters_js__WEBPACK_IMPORTED_MODULE_9__["SIGMAS"]), _.setUniform1i("u_texture", _definitions_js__WEBPACK_IMPORTED_MODULE_2__["TEXTURE_BINDING_HIGHLIGHT_0"]), _.setUniform4fv("u_sigmas", _parameters_js__WEBPACK_IMPORTED_MODULE_9__["SIGMAS"]), this._resources = {
              quadGeometry: d,
              quadVAO: g,
              highlightProgram: l,
              blurProgram: _
            };
          }
        }, {
          key: "setup",
          value: function setup(r, e, s) {
            this._resources ? (this._width = e, this._height = s) : this._initialize(r, e, s);
          }
        }]);

        return _class8;
      }();
      /***/

    },

    /***/
    "ac4n":
    /*!************************************************************************************!*\
      !*** ./node_modules/@arcgis/core/views/2d/engine/webgl/effects/AnimationEffect.js ***!
      \************************************************************************************/

    /*! exports provided: AnimationEffect */

    /***/
    function ac4n(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "AnimationEffect", function () {
        return o;
      });
      /* harmony import */


      var _core_maybe_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ../../../../../core/maybe.js */
      "srIe");
      /* harmony import */


      var _definitions_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ../definitions.js */
      "jIHu");
      /* harmony import */


      var _VertexStream_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ../VertexStream.js */
      "gjrC");
      /* harmony import */


      var _Effect_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./Effect.js */
      "FrEu");
      /*
      All material copyright ESRI, All Rights Reserved, unless otherwise specified.
      See https://js.arcgis.com/4.18/esri/copyright.txt for details.
      */


      var o = /*#__PURE__*/function (_Effect_js__WEBPACK_I4) {
        _inherits(o, _Effect_js__WEBPACK_I4);

        var _super11 = _createSuper(o);

        function o() {
          var _this28;

          _classCallCheck(this, o);

          _this28 = _super11.apply(this, arguments), _this28.defines = [], _this28._desc = {
            vsPath: "fx/integrate",
            fsPath: "fx/integrate",
            attributes: {
              a_position: 0
            }
          };
          return _this28;
        }

        _createClass(o, [{
          key: "dispose",
          value: function dispose() {
            this._quad && this._quad.dispose();
          }
        }, {
          key: "bind",
          value: function bind() {}
        }, {
          key: "unbind",
          value: function unbind() {}
        }, {
          key: "draw",
          value: function draw(i, r) {
            if (!r.size) return;
            var a = i.context,
                _o7 = i.renderingOptions;
            this._quad || (this._quad = new _VertexStream_js__WEBPACK_IMPORTED_MODULE_2__["default"](a, [0, 0, 1, 0, 0, 1, 1, 1]));

            var n = a.getBoundFramebufferObject(),
                _a$getViewport = a.getViewport(),
                m = _a$getViewport.x,
                u = _a$getViewport.y,
                d = _a$getViewport.width,
                f = _a$getViewport.height;

            r.bindTextures(a);
            var c = r.getBlock(_definitions_js__WEBPACK_IMPORTED_MODULE_1__["ATTRIBUTE_DATA_ANIMATION"]);
            if (Object(_core_maybe_js__WEBPACK_IMPORTED_MODULE_0__["isNone"])(c)) return;

            var _ = c.getFBO(a),
                l = c.getFBO(a, 1);

            a.setViewport(0, 0, r.size, r.size), this._computeDelta(i, l, _o7.labelsAnimationTime), this._updateAnimationState(i, l, _), a.bindFramebuffer(n), a.setViewport(m, u, d, f);
          }
        }, {
          key: "_computeDelta",
          value: function _computeDelta(e, t, s) {
            var a = e.context,
                _o8 = e.painter,
                n = e.displayLevel,
                m = _o8.materialManager.getProgram(e, this._desc, ["delta"]);

            a.bindFramebuffer(t), a.setClearColor(0, 0, 0, 0), a.clear(a.gl.COLOR_BUFFER_BIT), a.bindProgram(m), m.setUniform1i("u_maskTexture", _definitions_js__WEBPACK_IMPORTED_MODULE_1__["TEXTURE_BINDING_ATTRIBUTE_DATA_0"]), m.setUniform1i("u_sourceTexture", _definitions_js__WEBPACK_IMPORTED_MODULE_1__["TEXTURE_BINDING_ATTRIBUTE_DATA_1"]), m.setUniform1f("u_timeDelta", e.deltaTime), m.setUniform1f("u_animationTime", s), m.setUniform1f("u_zoomLevel", Math.round(10 * n)), this._quad.draw();
          }
        }, {
          key: "_updateAnimationState",
          value: function _updateAnimationState(e, t, i) {
            var r = e.context,
                s = e.painter,
                a = s.materialManager.getProgram(e, this._desc, ["update"]);
            r.bindTexture(t.colorTexture, 1), r.bindProgram(a), a.setUniform1i("u_sourceTexture", 1), r.bindFramebuffer(i), r.setClearColor(0, 0, 0, 0), r.clear(r.gl.COLOR_BUFFER_BIT), this._quad.draw();
          }
        }]);

        return o;
      }(_Effect_js__WEBPACK_IMPORTED_MODULE_3__["Effect"]);
      /***/

    },

    /***/
    "bfVh":
    /*!****************************************************************************!*\
      !*** ./node_modules/@arcgis/core/views/2d/engine/webgl/BitBlitRenderer.js ***!
      \****************************************************************************/

    /*! exports provided: BitBlitRenderer */

    /***/
    function bfVh(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "BitBlitRenderer", function () {
        return s;
      });
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


      var _webgl_VertexArrayObject_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ../../../webgl/VertexArrayObject.js */
      "D6bk");
      /* harmony import */


      var _webgl_FramebufferObject_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ../../../webgl/FramebufferObject.js */
      "0meK");
      /* harmony import */


      var _webgl_programUtils_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ../../../webgl/programUtils.js */
      "1F90");
      /* harmony import */


      var _webgl_RenderingContext_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! ../../../webgl/RenderingContext.js */
      "bfJE");
      /* harmony import */


      var _shaders_BitBlitPrograms_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! ./shaders/BitBlitPrograms.js */
      "q6Gj");
      /*
      All material copyright ESRI, All Rights Reserved, unless otherwise specified.
      See https://js.arcgis.com/4.18/esri/copyright.txt for details.
      */


      var s = /*#__PURE__*/function () {
        function s() {
          _classCallCheck(this, s);

          this._initialized = !1;
        }

        _createClass(s, [{
          key: "dispose",
          value: function dispose() {
            this._program && (this._program.dispose(), this._program = null), this._vertexArrayObject && (this._vertexArrayObject.dispose(), this._vertexArrayObject = null);
          }
        }, {
          key: "render",
          value: function render(r, t, e, i) {
            r && (this._initialized || this._initialize(r), r.setBlendFunctionSeparate(1, 771, 1, 771), r.bindVAO(this._vertexArrayObject), r.bindProgram(this._program), t.setSamplingMode(e), r.bindTexture(t, 0), this._program.setUniform1i("u_tex", 0), this._program.setUniform1f("u_opacity", i), r.drawArrays(5, 0, 4), r.bindTexture(null, 0), r.bindVAO());
          }
        }, {
          key: "_initialize",
          value: function _initialize(_s13) {
            if (this._initialized) return !0;
            var o = _shaders_BitBlitPrograms_js__WEBPACK_IMPORTED_MODULE_8__["bitBlit"].attributes,
                a = Object(_webgl_programUtils_js__WEBPACK_IMPORTED_MODULE_6__["createProgram"])(_s13, _shaders_BitBlitPrograms_js__WEBPACK_IMPORTED_MODULE_8__["bitBlit"]);
            if (!a) return !1;
            var n = new Int8Array(16);
            n[0] = -1, n[1] = -1, n[2] = 0, n[3] = 0, n[4] = 1, n[5] = -1, n[6] = 1, n[7] = 0, n[8] = -1, n[9] = 1, n[10] = 0, n[11] = 1, n[12] = 1, n[13] = 1, n[14] = 1, n[15] = 1;
            var m = new _webgl_VertexArrayObject_js__WEBPACK_IMPORTED_MODULE_4__["default"](_s13, o, {
              geometry: [{
                name: "a_pos",
                count: 2,
                type: 5120,
                offset: 0,
                stride: 4,
                normalized: !1,
                divisor: 0
              }, {
                name: "a_tex",
                count: 2,
                type: 5120,
                offset: 2,
                stride: 4,
                normalized: !1,
                divisor: 0
              }]
            }, {
              geometry: _webgl_BufferObject_js__WEBPACK_IMPORTED_MODULE_3__["default"].createVertex(_s13, 35044, n)
            });
            return this._program = a, this._vertexArrayObject = m, this._initialized = !0, !0;
          }
        }]);

        return s;
      }();
      /***/

    },

    /***/
    "cZ4F":
    /*!*************************************************************************************************!*\
      !*** ./node_modules/@arcgis/core/views/2d/engine/webgl/collisions/visualVariableSimpleUtils.js ***!
      \*************************************************************************************************/

    /*! exports provided: getSizeForValueSimple */

    /***/
    function cZ4F(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "getSizeForValueSimple", function () {
        return r;
      });
      /* harmony import */


      var _core_mathUtils_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ../../../../../core/mathUtils.js */
      "OKTS");
      /* harmony import */


      var _renderers_support_lengthUtils_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ../../../../../renderers/support/lengthUtils.js */
      "m0D6");
      /*
      All material copyright ESRI, All Rights Reserved, unless otherwise specified.
      See https://js.arcgis.com/4.18/esri/copyright.txt for details.
      */


      var e = Math.PI;

      function r(r, i) {
        switch (i.transformationType) {
          case "additive":
            return function (t, n) {
              var e = a(n.minSize, t);
              return t + (e || n.minDataValue);
            }(r, i);

          case "constant":
            return function (t, n) {
              var e = t.stops;
              var r = e && e.length && e[0].size;
              null == r && (r = t.minSize);
              return a(r, n);
            }(i, r);

          case "clamped-linear":
            return function (t, n) {
              var e = (t - n.minDataValue) / (n.maxDataValue - n.minDataValue),
                  r = a(n.minSize, t),
                  i = a(n.maxSize, t);
              if (t <= n.minDataValue) return r;
              if (t >= n.maxDataValue) return i;
              return r + e * (i - r);
            }(r, i);

          case "proportional":
            return function (n, e) {
              var r = n / e.minDataValue,
                  i = a(e.minSize, n),
                  u = a(e.maxSize, n);
              var s = null;
              return s = r * i, Object(_core_mathUtils_js__WEBPACK_IMPORTED_MODULE_0__["clamp"])(s, i, u);
            }(r, i);

          case "stops":
            return function (t, n) {
              var _ref8 = function (t, n) {
                if (!n) return;
                var e = 0,
                    r = n.length - 1;
                return n.some(function (n, a) {
                  return t < n ? (r = a, !0) : (e = a, !1);
                }), [e, r, (t - n[e]) / (n[r] - n[e])];
              }(t, n.cache.ipData),
                  _ref9 = _slicedToArray(_ref8, 3),
                  e = _ref9[0],
                  r = _ref9[1],
                  i = _ref9[2];

              if (e === r) return a(n.stops[e].size, t);
              {
                var u = a(n.stops[e].size, t);
                return u + (a(n.stops[r].size, t) - u) * i;
              }
            }(r, i);

          case "real-world-size":
            return function (r, i) {
              var u = _renderers_support_lengthUtils_js__WEBPACK_IMPORTED_MODULE_1__["meterIn"][i.valueUnit],
                  s = a(i.minSize, r),
                  o = a(i.maxSize, r),
                  c = i.valueRepresentation;
              var l = null;
              l = "area" === c ? 2 * Math.sqrt(r / e) / u : "radius" === c || "distance" === c ? 2 * r / u : r / u;
              return Object(_core_mathUtils_js__WEBPACK_IMPORTED_MODULE_0__["clamp"])(l, s, o);
            }(r, i);

          case "identity":
            return r;

          case "unknown":
            return null;
        }
      }

      function a(t, n) {
        return "number" == typeof t ? t : r(n, t);
      }
      /***/

    },

    /***/
    "cwtj":
    /*!************************************************************************!*\
      !*** ./node_modules/@arcgis/core/views/2d/navigation/actions/Pinch.js ***!
      \************************************************************************/

    /*! exports provided: default */

    /***/
    function cwtj(module, __webpack_exports__, __webpack_require__) {
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


      var _core_Accessor_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! ../../../../core/Accessor.js */
      "/CmD");
      /* harmony import */


      var _geometry_Point_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
      /*! ../../../../geometry/Point.js */
      "SuVq");
      /* harmony import */


      var _geometry_js__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
      /*! ../../../../geometry.js */
      "4GrV");
      /* harmony import */


      var _Viewpoint_js__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
      /*! ../../../../Viewpoint.js */
      "y3LX");
      /* harmony import */


      var _chunks_vec2f64_js__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
      /*! ../../../../chunks/vec2f64.js */
      "AvGH");
      /* harmony import */


      var _chunks_vec2_js__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(
      /*! ../../../../chunks/vec2.js */
      "M0lq");
      /* harmony import */


      var _viewpointUtils_js__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(
      /*! ../../viewpointUtils.js */
      "qYtE");
      /* harmony import */


      var _navigation_RotationMomentumEstimator_js__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(
      /*! ../../../navigation/RotationMomentumEstimator.js */
      "EdjT");
      /* harmony import */


      var _navigation_ZoomMomentumEstimator_js__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(
      /*! ../../../navigation/ZoomMomentumEstimator.js */
      "jm8U");
      /*
      All material copyright ESRI, All Rights Reserved, unless otherwise specified.
      See https://js.arcgis.com/4.18/esri/copyright.txt for details.
      */


      var l = /*#__PURE__*/function (_core_Accessor_js__WE4) {
        _inherits(l, _core_Accessor_js__WE4);

        var _super12 = _createSuper(l);

        function l(t) {
          var _this29;

          _classCallCheck(this, l);

          _this29 = _super12.call(this, t), _this29._animationTime = 0, _this29._momentumFinished = !1, _this29._rotationMomentumEstimator = new _navigation_RotationMomentumEstimator_js__WEBPACK_IMPORTED_MODULE_16__["RotationMomentumEstimator"](.6, .15, .95), _this29._rotationDirection = 1, _this29._zoomDirection = 1, _this29._zoomMomentumEstimator = new _navigation_ZoomMomentumEstimator_js__WEBPACK_IMPORTED_MODULE_17__["ZoomMomentumEstimator"](), _this29._zoomOnly = null, _this29.zoomMomentum = null, _this29.rotateMomentum = null, _this29.viewpoint = new _Viewpoint_js__WEBPACK_IMPORTED_MODULE_12__["default"]({
            targetGeometry: new _geometry_Point_js__WEBPACK_IMPORTED_MODULE_10__["default"](),
            scale: 0,
            rotation: 0
          }), _this29.watch("_momentumFinished", function (t) {
            t && _this29.navigation.stop();
          });
          return _this29;
        }

        _createClass(l, [{
          key: "begin",
          value: function begin(t, o) {
            this.navigation.begin(), this._rotationMomentumEstimator.reset(), this._zoomMomentumEstimator.reset(), this._zoomOnly = null, this._previousAngle = this._startAngle = o.angle, this._previousRadius = this._startRadius = o.radius, this._previousCenter = o.center, this._updateTimestamp = null, t.constraints.rotationEnabled && this.addToRotateEstimator(0, o.timestamp), this.addToZoomEstimator(o, 1);
          }
        }, {
          key: "update",
          value: function update(t, o) {
            null === this._updateTimestamp && (this._updateTimestamp = o.timestamp);
            var i = o.angle,
                s = o.radius,
                e = o.center,
                n = Math.abs(180 * (i - this._startAngle) / Math.PI),
                m = Math.abs(s - this._startRadius),
                a = this._startRadius / s;

            if (this._previousRadius) {
              var r = s / this._previousRadius;
              var h = 180 * (i - this._previousAngle) / Math.PI;
              this._rotationDirection = h >= 0 ? 1 : -1, this._zoomDirection = r >= 1 ? 1 : -1, t.constraints.rotationEnabled ? (null === this._zoomOnly && o.timestamp - this._updateTimestamp > 200 && (this._zoomOnly = m - n > 0), null === this._zoomOnly || this._zoomOnly ? h = 0 : this.addToRotateEstimator(i - this._startAngle, o.timestamp)) : h = 0, this.addToZoomEstimator(o, a), this.navigation.setViewpoint([e.x, e.y], 1 / r, h, [this._previousCenter.x - e.x, e.y - this._previousCenter.y]);
            }

            this._previousAngle = i, this._previousRadius = s, this._previousCenter = e;
          }
        }, {
          key: "end",
          value: function end(t) {
            this.rotateMomentum = this._rotationMomentumEstimator.evaluateMomentum(), this.zoomMomentum = this._zoomMomentumEstimator.evaluateMomentum(), this._animationTime = 0, (this.rotateMomentum || this.zoomMomentum) && this.onAnimationUpdate(t), this.navigation.end();
          }
        }, {
          key: "addToRotateEstimator",
          value: function addToRotateEstimator(t, o) {
            this._rotationMomentumEstimator.add(t, .001 * o);
          }
        }, {
          key: "addToZoomEstimator",
          value: function addToZoomEstimator(t, o) {
            this._zoomMomentumEstimator.add(o, .001 * t.timestamp);
          }
        }, {
          key: "canZoomIn",
          value: function canZoomIn(t) {
            var o = t.scale,
                i = t.constraints.effectiveMaxScale;
            return 0 === i || o > i;
          }
        }, {
          key: "canZoomOut",
          value: function canZoomOut(t) {
            var o = t.scale,
                i = t.constraints.effectiveMinScale;
            return 0 === i || o < i;
          }
        }, {
          key: "onAnimationUpdate",
          value: function onAnimationUpdate(t) {
            var _this30 = this;

            this.navigation.animationManager.animateContinous(t.viewpoint, function (o, i) {
              var s = !_this30.canZoomIn(t) && _this30._zoomDirection > 1 || !_this30.canZoomOut(t) && _this30._zoomDirection < 1,
                  e = !_this30.rotateMomentum || _this30.rotateMomentum.isFinished(_this30._animationTime),
                  n = s || !_this30.zoomMomentum || _this30.zoomMomentum.isFinished(_this30._animationTime),
                  p = .001 * i;

              if (_this30._momentumFinished = e && n, !_this30._momentumFinished) {
                var _i16 = _this30.rotateMomentum ? Math.abs(_this30.rotateMomentum.valueDelta(_this30._animationTime, p)) * _this30._rotationDirection * 180 / Math.PI : 0;

                var _s14 = _this30.zoomMomentum ? Math.abs(_this30.zoomMomentum.valueDelta(_this30._animationTime, p)) : 1;

                var _e30 = Object(_chunks_vec2f64_js__WEBPACK_IMPORTED_MODULE_13__["a"])(),
                    _n7 = Object(_chunks_vec2f64_js__WEBPACK_IMPORTED_MODULE_13__["a"])();

                if (_this30._previousCenter) {
                  Object(_chunks_vec2_js__WEBPACK_IMPORTED_MODULE_14__["s"])(_e30, _this30._previousCenter.x, _this30._previousCenter.y), Object(_viewpointUtils_js__WEBPACK_IMPORTED_MODULE_15__["getPaddingScreenTranslation"])(_n7, t.size, t.padding), Object(_chunks_vec2_js__WEBPACK_IMPORTED_MODULE_14__["h"])(_e30, _e30, _n7);
                  var m = t.constraints,
                      _p = t.scale,
                      c = _p * _s14;
                  _s14 < 1 && !m.canZoomInTo(c) ? (_s14 = _p / m.effectiveMaxScale, _this30.zoomMomentum = null, _this30.rotateMomentum = null) : _s14 > 1 && !m.canZoomOutTo(c) && (_s14 = _p / m.effectiveMinScale, _this30.zoomMomentum = null, _this30.rotateMomentum = null), Object(_viewpointUtils_js__WEBPACK_IMPORTED_MODULE_15__["scaleAndRotateBy"])(o, t.viewpoint, _s14, _i16, _e30, t.size), t.constraints.constrainByGeometry(o);
                }
              }

              _this30._animationTime += p;
            });
          }
        }, {
          key: "stopMomentumNavigation",
          value: function stopMomentumNavigation() {
            (this.rotateMomentum || this.zoomMomentum) && (this.rotateMomentum && (this._rotationMomentumEstimator.reset(), this.rotateMomentum = null), this.zoomMomentum && (this._zoomMomentumEstimator.reset(), this.zoomMomentum = null), this.navigation.stop());
          }
        }]);

        return l;
      }(_core_Accessor_js__WEBPACK_IMPORTED_MODULE_9__["default"]);

      Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_4__["property"])()], l.prototype, "_momentumFinished", void 0), Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_4__["property"])()], l.prototype, "viewpoint", void 0), Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_4__["property"])()], l.prototype, "navigation", void 0), l = Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_subclass_js__WEBPACK_IMPORTED_MODULE_5__["subclass"])("esri.views.2d.navigation.actions.Pinch")], l);
      var _ = l;
      /* harmony default export */

      __webpack_exports__["default"] = _;
      /***/
    },

    /***/
    "e4KH":
    /*!*************************************************************!*\
      !*** ./node_modules/@arcgis/core/symbols/cim/Rasterizer.js ***!
      \*************************************************************/

    /*! exports provided: default */

    /***/
    function e4KH(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony import */


      var _utils_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ./utils.js */
      "NrhG");
      /* harmony import */


      var _Rect_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./Rect.js */
      "Du6U");
      /* harmony import */


      var _CIMSymbolHelper_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./CIMSymbolHelper.js */
      "eT81");
      /* harmony import */


      var _SDFHelper_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./SDFHelper.js */
      "QFw1");
      /*
      All material copyright ESRI, All Rights Reserved, unless otherwise specified.
      See https://js.arcgis.com/4.18/esri/copyright.txt for details.
      */

      /* harmony default export */


      __webpack_exports__["default"] = /*#__PURE__*/function () {
        function _class9() {
          _classCallCheck(this, _class9);
        }

        _createClass(_class9, [{
          key: "dispose",
          value: function dispose() {
            this._rasterizationCanvas = null;
          }
        }, {
          key: "rasterizeJSONResource",
          value: function rasterizeJSONResource(e, s, o) {
            if (this._rasterizationCanvas || (this._rasterizationCanvas = document.createElement("canvas")), "simple-fill" === e.type || "esriSFS" === e.type) {
              var _CIMSymbolHelper_js__ = _CIMSymbolHelper_js__WEBPACK_IMPORTED_MODULE_2__["SymbolHelper"].rasterizeSimpleFill(this._rasterizationCanvas, e.style, s),
                  _CIMSymbolHelper_js__2 = _slicedToArray(_CIMSymbolHelper_js__, 3),
                  r = _CIMSymbolHelper_js__2[0],
                  a = _CIMSymbolHelper_js__2[1],
                  n = _CIMSymbolHelper_js__2[2];

              return {
                size: [a, n],
                image: new Uint32Array(r.buffer),
                sdf: !1,
                simplePattern: !0,
                anchorX: 0,
                anchorY: 0
              };
            }

            if ("simple-line" === e.type || "esriSLS" === e.type) {
              var _CIMSymbolHelper_js__3 = _CIMSymbolHelper_js__WEBPACK_IMPORTED_MODULE_2__["SymbolHelper"].rasterizeSimpleLine(e.style, e.cap),
                  _CIMSymbolHelper_js__4 = _slicedToArray(_CIMSymbolHelper_js__3, 3),
                  _r12 = _CIMSymbolHelper_js__4[0],
                  _a7 = _CIMSymbolHelper_js__4[1],
                  _n8 = _CIMSymbolHelper_js__4[2];

              return {
                size: [_a7, _n8],
                image: new Uint32Array(_r12.buffer),
                sdf: !0,
                simplePattern: !0,
                anchorX: 0,
                anchorY: 0
              };
            }

            var m, l, f;

            if ("simple-marker" === e.type || "esriSMS" === e.type || "line-marker" === e.type ? (m = _CIMSymbolHelper_js__WEBPACK_IMPORTED_MODULE_2__["CIMSymbolHelper"].fromSimpleMarker(e), f = Object(_SDFHelper_js__WEBPACK_IMPORTED_MODULE_3__["getSDFInfo"])(m)) : "CIMHatchFill" === e.type ? (m = _CIMSymbolHelper_js__WEBPACK_IMPORTED_MODULE_2__["CIMSymbolHelper"].fromCIMHatchFill(e), l = new _Rect_js__WEBPACK_IMPORTED_MODULE_1__["default"](m.frame.xmin, -m.frame.ymax, m.frame.xmax - m.frame.xmin, m.frame.ymax - m.frame.ymin)) : e.markerPlacement && "CIMMarkerPlacementInsidePolygon" === e.markerPlacement.type ? (m = _CIMSymbolHelper_js__WEBPACK_IMPORTED_MODULE_2__["CIMSymbolHelper"].fromCIMInsidePolygon(e), l = new _Rect_js__WEBPACK_IMPORTED_MODULE_1__["default"](m.frame.xmin, -m.frame.ymax, m.frame.xmax - m.frame.xmin, m.frame.ymax - m.frame.ymin)) : (m = e, f = Object(_SDFHelper_js__WEBPACK_IMPORTED_MODULE_3__["getSDFInfo"])(m)), f && !o) {
              var _Object = Object(_SDFHelper_js__WEBPACK_IMPORTED_MODULE_3__["buildSDF"])(f),
                  _Object2 = _slicedToArray(_Object, 3),
                  _e31 = _Object2[0],
                  _r13 = _Object2[1],
                  t = _Object2[2];

              return _e31 ? {
                size: [_r13, t],
                image: new Uint32Array(_e31.buffer),
                sdf: !0,
                simplePattern: !0,
                anchorX: 0,
                anchorY: 0
              } : null;
            }

            var _CIMSymbolHelper_js__5 = _CIMSymbolHelper_js__WEBPACK_IMPORTED_MODULE_2__["CIMSymbolHelper"].rasterize(this._rasterizationCanvas, m, l, !o),
                _CIMSymbolHelper_js__6 = _slicedToArray(_CIMSymbolHelper_js__5, 5),
                c = _CIMSymbolHelper_js__6[0],
                h = _CIMSymbolHelper_js__6[1],
                p = _CIMSymbolHelper_js__6[2],
                y = _CIMSymbolHelper_js__6[3],
                u = _CIMSymbolHelper_js__6[4];

            return c ? {
              size: [h, p],
              image: new Uint32Array(c.buffer),
              sdf: !1,
              simplePattern: !1,
              anchorX: y,
              anchorY: u
            } : null;
          }
        }, {
          key: "rasterizeImageResource",
          value: function rasterizeImageResource(r, t, a, n) {
            this._rasterizationCanvas || (this._rasterizationCanvas = document.createElement("canvas")), this._rasterizationCanvas.width = r, this._rasterizationCanvas.height = t;

            var i = this._rasterizationCanvas.getContext("2d");

            a instanceof ImageData ? i.putImageData(a, 0, 0) : (a.setAttribute("width", "".concat(r, "px")), a.setAttribute("height", "".concat(t, "px")), i.drawImage(a, 0, 0, r, t));
            var s = i.getImageData(0, 0, r, t),
                o = new Uint8Array(s.data);

            if (n) {
              var _iterator34 = _createForOfIteratorHelper(n),
                  _step34;

              try {
                for (_iterator34.s(); !(_step34 = _iterator34.n()).done;) {
                  var e = _step34.value;

                  if (e && e.oldColor && 4 === e.oldColor.length && e.newColor && 4 === e.newColor.length) {
                    var _e$oldColor = _slicedToArray(e.oldColor, 4),
                        _r14 = _e$oldColor[0],
                        _t26 = _e$oldColor[1],
                        _a8 = _e$oldColor[2],
                        _n9 = _e$oldColor[3],
                        _e$newColor = _slicedToArray(e.newColor, 4),
                        _i17 = _e$newColor[0],
                        _s15 = _e$newColor[1],
                        _m = _e$newColor[2],
                        _l3 = _e$newColor[3];

                    if (_r14 === _i17 && _t26 === _s15 && _a8 === _m && _n9 === _l3) continue;

                    for (var _e32 = 0; _e32 < o.length; _e32 += 4) {
                      _r14 === o[_e32] && _t26 === o[_e32 + 1] && _a8 === o[_e32 + 2] && _n9 === o[_e32 + 3] && (o[_e32] = _i17, o[_e32 + 1] = _s15, o[_e32 + 2] = _m, o[_e32 + 3] = _l3);
                    }
                  }
                }
              } catch (err) {
                _iterator34.e(err);
              } finally {
                _iterator34.f();
              }
            }

            var m;

            for (var _e33 = 0; _e33 < o.length; _e33 += 4) {
              m = o[_e33 + 3] / 255, o[_e33] = o[_e33] * m, o[_e33 + 1] = o[_e33 + 1] * m, o[_e33 + 2] = o[_e33 + 2] * m;
            }

            var l = o,
                f = r,
                c = t;
            var h = 512;

            if (f >= h || c >= h) {
              var _a9 = f / c;

              _a9 > 1 ? (f = h, c = Math.round(h / _a9)) : (c = h, f = Math.round(h * _a9)), l = new Uint8Array(4 * f * c);

              var _n10 = new Uint8ClampedArray(l.buffer);

              Object(_utils_js__WEBPACK_IMPORTED_MODULE_0__["resampleHermite"])(o, r, t, _n10, f, c, !1);
            }

            return {
              size: [r, t],
              image: new Uint32Array(l.buffer),
              sdf: !1,
              simplePattern: !1,
              anchorX: 0,
              anchorY: 0
            };
          }
        }]);

        return _class9;
      }();
      /***/

    },

    /***/
    "fGRN":
    /*!*****************************************************************************************!*\
      !*** ./node_modules/@arcgis/core/views/2d/engine/webgl/effects/highlight/parameters.js ***!
      \*****************************************************************************************/

    /*! exports provided: ALPHA_TO_RGBA_CHANNEL_SELECTOR_MATRIX, HIGHLIGHT_SIZING, RGBA_TO_RGBA_CHANNEL_SELECTOR_MATRIX, SHADE_TEXTURE_SIZE, SIGMAS */

    /***/
    function fGRN(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ALPHA_TO_RGBA_CHANNEL_SELECTOR_MATRIX", function () {
        return i;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "HIGHLIGHT_SIZING", function () {
        return n;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "RGBA_TO_RGBA_CHANNEL_SELECTOR_MATRIX", function () {
        return t;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "SHADE_TEXTURE_SIZE", function () {
        return d;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "SIGMAS", function () {
        return o;
      });
      /*
      All material copyright ESRI, All Rights Reserved, unless otherwise specified.
      See https://js.arcgis.com/4.18/esri/copyright.txt for details.
      */


      var o = [void 0, void 0, void 0, 1],
          i = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1],
          t = [1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1],
          d = 256,
          n = {
        outlineWidth: .7,
        outerHaloWidth: .7,
        innerHaloWidth: .7,
        outlinePosition: 0
      };
      /***/
    },

    /***/
    "fUoV":
    /*!**************************************************************************************!*\
      !*** ./node_modules/@arcgis/core/views/2d/engine/webgl/shaders/MagnifierPrograms.js ***!
      \**************************************************************************************/

    /*! exports provided: createMagnifierProgram, magnifierProgramTemplate */

    /***/
    function fUoV(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "createMagnifierProgram", function () {
        return t;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "magnifierProgramTemplate", function () {
        return i;
      });
      /* harmony import */


      var _core_has_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ../../../../../core/has.js */
      "wSAH");
      /* harmony import */


      var _core_mathUtils_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ../../../../../core/mathUtils.js */
      "OKTS");
      /* harmony import */


      var _chunks_builtins_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ../../../../../chunks/builtins.js */
      "n4uK");
      /* harmony import */


      var _webgl_FramebufferObject_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ../../../../webgl/FramebufferObject.js */
      "0meK");
      /* harmony import */


      var _webgl_programUtils_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ../../../../webgl/programUtils.js */
      "1F90");
      /* harmony import */


      var _webgl_RenderingContext_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ../../../../webgl/RenderingContext.js */
      "bfJE");
      /* harmony import */


      var _sources_resolver_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ./sources/resolver.js */
      "vpBa");
      /*
      All material copyright ESRI, All Rights Reserved, unless otherwise specified.
      See https://js.arcgis.com/4.18/esri/copyright.txt for details.
      */


      var i = {
        name: "magnifier",
        shaders: {
          vertexShader: Object(_sources_resolver_js__WEBPACK_IMPORTED_MODULE_6__["resolveIncludes"])("magnifier/magnifier.vert"),
          fragmentShader: Object(_sources_resolver_js__WEBPACK_IMPORTED_MODULE_6__["resolveIncludes"])("magnifier/magnifier.frag")
        },
        attributes: {
          a_pos: 0
        }
      };

      function t(e) {
        return Object(_webgl_programUtils_js__WEBPACK_IMPORTED_MODULE_4__["createProgram"])(e, i);
      }
      /***/

    },

    /***/
    "jE2w":
    /*!*************************************************************************!*\
      !*** ./node_modules/@arcgis/core/views/2d/engine/webgl/SDFConverter.js ***!
      \*************************************************************************/

    /*! exports provided: default */

    /***/
    function jE2w(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony import */


      var _core_promiseUtils_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ../../../../core/promiseUtils.js */
      "9MzC");
      /* harmony import */


      var _packingUtils_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./packingUtils.js */
      "E7yl");
      /*
      All material copyright ESRI, All Rights Reserved, unless otherwise specified.
      See https://js.arcgis.com/4.18/esri/copyright.txt for details.
      */


      var h = 1e20;
      /* harmony default export */

      __webpack_exports__["default"] = /*#__PURE__*/function () {
        function _class10(t) {
          _classCallCheck(this, _class10);

          this.size = t;
          var s = document.createElement("canvas");
          s.width = s.height = t, this._context = s.getContext("2d"), this._gridOuter = new Float64Array(t * t), this._gridInner = new Float64Array(t * t), this._f = new Float64Array(t), this._d = new Float64Array(t), this._z = new Float64Array(t + 1), this._v = new Int16Array(t);
        }

        _createClass(_class10, [{
          key: "dispose",
          value: function dispose() {
            this._context = this._gridOuter = this._gridInner = this._f = this._d = this._z = this._v = null, this._svg && (document.body.removeChild(this._svg), this._svg = null);
          }
        }, {
          key: "draw",
          value: function draw(r, n) {
            var _this31 = this;

            var o = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 31;

            this._initSVG();

            var a = this._createSVGString(r);

            return Object(_core_promiseUtils_js__WEBPACK_IMPORTED_MODULE_0__["create"])(function (t, r) {
              var d = new Image();
              d.src = "data:image/svg+xml; charset=utf8, " + encodeURIComponent(a), d.onload = function () {
                d.onload = null, _this31._context.clearRect(0, 0, _this31.size, _this31.size), _this31._context.drawImage(d, 0, 0, _this31.size, _this31.size);

                var s = _this31._context.getImageData(0, 0, _this31.size, _this31.size),
                    e = new Uint8Array(_this31.size * _this31.size * 4);

                for (var _t27 = 0; _t27 < _this31.size * _this31.size; _t27++) {
                  var _e34 = s.data[4 * _t27 + 3] / 255;

                  _this31._gridOuter[_t27] = 1 === _e34 ? 0 : 0 === _e34 ? h : Math.pow(Math.max(0, .5 - _e34), 2), _this31._gridInner[_t27] = 1 === _e34 ? h : 0 === _e34 ? 0 : Math.pow(Math.max(0, _e34 - .5), 2);
                }

                _this31._edt(_this31._gridOuter, _this31.size, _this31.size), _this31._edt(_this31._gridInner, _this31.size, _this31.size);

                for (var _t28 = 0; _t28 < _this31.size * _this31.size; _t28++) {
                  var _s16 = _this31._gridOuter[_t28] - _this31._gridInner[_t28];

                  Object(_packingUtils_js__WEBPACK_IMPORTED_MODULE_1__["packFloatRGBA"])(.5 - _s16 / (2 * o), e, 4 * _t28);
                }

                t(e);
              };
              var l = n && n.signal;
              l && Object(_core_promiseUtils_js__WEBPACK_IMPORTED_MODULE_0__["onAbort"])(l, function () {
                return r(Object(_core_promiseUtils_js__WEBPACK_IMPORTED_MODULE_0__["createAbortError"])());
              });
            });
          }
        }, {
          key: "_initSVG",
          value: function _initSVG() {
            if (!this._svg) {
              var t = document.createElementNS("http://www.w3.org/2000/svg", "svg");
              t.setAttribute("style", "position: absolute;"), t.setAttribute("width", "0"), t.setAttribute("height", "0"), t.setAttribute("aria-hidden", "true"), t.setAttribute("role", "presentation"), document.body.appendChild(t), this._svg = t;
            }
          }
        }, {
          key: "_createSVGString",
          value: function _createSVGString(t) {
            var s = document.createElementNS("http://www.w3.org/2000/svg", "path");
            s.setAttribute("d", t), this._svg.appendChild(s);
            var e = s.getBBox(),
                i = e.width / e.height,
                h = this.size / 2;
            var r, n, o, a;

            if (i > 1) {
              n = r = h / e.width;

              var _t29 = h * (1 / i);

              o = this.size / 4, a = h - _t29 / 2;
            } else {
              r = n = h / e.height;
              o = h - h * i / 2, a = this.size / 4;
            }

            var d = -e.x * r + o,
                l = -e.y * n + a;
            s.setAttribute("style", "transform: matrix(".concat(r, ", 0, 0, ").concat(n, ", ").concat(d, ", ").concat(l, ")"));

            var _ = "<svg style=\"fill:red;\" height=\"".concat(this.size, "\" width=\"").concat(this.size, "\" xmlns=\"http://www.w3.org/2000/svg\">").concat(this._svg.innerHTML, "</svg>");

            return this._svg.removeChild(s), _;
          }
        }, {
          key: "_edt",
          value: function _edt(t, s, e) {
            var i = this._f,
                h = this._d,
                r = this._v,
                n = this._z;

            for (var o = 0; o < s; o++) {
              for (var _h2 = 0; _h2 < e; _h2++) {
                i[_h2] = t[_h2 * s + o];
              }

              this._edt1d(i, h, r, n, e);

              for (var _i18 = 0; _i18 < e; _i18++) {
                t[_i18 * s + o] = h[_i18];
              }
            }

            for (var _o9 = 0; _o9 < e; _o9++) {
              for (var _e35 = 0; _e35 < s; _e35++) {
                i[_e35] = t[_o9 * s + _e35];
              }

              this._edt1d(i, h, r, n, s);

              for (var _e36 = 0; _e36 < s; _e36++) {
                t[_o9 * s + _e36] = Math.sqrt(h[_e36]);
              }
            }
          }
        }, {
          key: "_edt1d",
          value: function _edt1d(t, s, e, i, r) {
            e[0] = 0, i[0] = -h, i[1] = +h;

            for (var _s17 = 1, n = 0; _s17 < r; _s17++) {
              var _r15 = (t[_s17] + _s17 * _s17 - (t[e[n]] + e[n] * e[n])) / (2 * _s17 - 2 * e[n]);

              for (; _r15 <= i[n];) {
                n--, _r15 = (t[_s17] + _s17 * _s17 - (t[e[n]] + e[n] * e[n])) / (2 * _s17 - 2 * e[n]);
              }

              n++, e[n] = _s17, i[n] = _r15, i[n + 1] = +h;
            }

            for (var _h3 = 0, _n11 = 0; _h3 < r; _h3++) {
              for (; i[_n11 + 1] < _h3;) {
                _n11++;
              }

              s[_h3] = (_h3 - e[_n11]) * (_h3 - e[_n11]) + t[e[_n11]];
            }
          }
        }]);

        return _class10;
      }();
      /***/

    },

    /***/
    "jm8U":
    /*!*****************************************************************************!*\
      !*** ./node_modules/@arcgis/core/views/navigation/ZoomMomentumEstimator.js ***!
      \*****************************************************************************/

    /*! exports provided: ZoomMomentum, ZoomMomentumEstimator */

    /***/
    function jm8U(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ZoomMomentum", function () {
        return r;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ZoomMomentumEstimator", function () {
        return s;
      });
      /* harmony import */


      var _Momentum_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ./Momentum.js */
      "sz4w");
      /* harmony import */


      var _MomentumEstimator_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./MomentumEstimator.js */
      "VfAO");
      /*
      All material copyright ESRI, All Rights Reserved, unless otherwise specified.
      See https://js.arcgis.com/4.18/esri/copyright.txt for details.
      */


      var r = /*#__PURE__*/function (_Momentum_js__WEBPACK2) {
        _inherits(r, _Momentum_js__WEBPACK2);

        var _super13 = _createSuper(r);

        function r(e, t, _r16) {
          _classCallCheck(this, r);

          return _super13.call(this, e, t, _r16);
        }

        _createClass(r, [{
          key: "value",
          value: function value(e) {
            var t = _get(_getPrototypeOf(r.prototype), "value", this).call(this, e);

            return Math.exp(t);
          }
        }, {
          key: "valueDelta",
          value: function valueDelta(e, t) {
            var _r17 = _get(_getPrototypeOf(r.prototype), "value", this).call(this, e),
                s = _get(_getPrototypeOf(r.prototype), "value", this).call(this, e + t) - _r17;

            return Math.exp(s);
          }
        }]);

        return r;
      }(_Momentum_js__WEBPACK_IMPORTED_MODULE_0__["Momentum"]);

      var s = /*#__PURE__*/function (_MomentumEstimator_js2) {
        _inherits(s, _MomentumEstimator_js2);

        var _super14 = _createSuper(s);

        function s() {
          var e = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 2.5;
          var t = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : .01;
          var r = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : .95;

          var _s18 = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : 12;

          _classCallCheck(this, s);

          return _super14.call(this, e, t, r, _s18);
        }

        _createClass(s, [{
          key: "add",
          value: function add(e, t) {
            _get(_getPrototypeOf(s.prototype), "add", this).call(this, Math.log(e), t);
          }
        }, {
          key: "createMomentum",
          value: function createMomentum(e, t, _s19) {
            return new r(e, t, _s19);
          }
        }]);

        return s;
      }(_MomentumEstimator_js__WEBPACK_IMPORTED_MODULE_1__["MomentumEstimator"]);
      /***/

    },

    /***/
    "kIoy":
    /*!*********************************************************************************!*\
      !*** ./node_modules/@arcgis/core/views/2d/engine/webgl/animatedFormats/apng.js ***!
      \*********************************************************************************/

    /*! exports provided: default, getPNGSize, isAnimatedPNG, isPNG */

    /***/
    function kIoy(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "getPNGSize", function () {
        return l;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "isAnimatedPNG", function () {
        return o;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "isPNG", function () {
        return u;
      });
      /* harmony import */


      var _core_Error_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ../../../../../core/Error.js */
      "zlDU");
      /* harmony import */


      var _core_promiseUtils_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ../../../../../core/promiseUtils.js */
      "9MzC");
      /*
      All material copyright ESRI, All Rights Reserved, unless otherwise specified.
      See https://js.arcgis.com/4.18/esri/copyright.txt for details.
      */


      var i = new Uint32Array(256);

      for (var t = 0; t < 256; t++) {
        var e = t;

        for (var _t30 = 0; _t30 < 8; _t30++) {
          e = 0 != (1 & e) ? 3988292384 ^ e >>> 1 : e >>> 1;
        }

        i[t] = e;
      }

      var n = new _core_Error_js__WEBPACK_IMPORTED_MODULE_0__["default"]("Not a PNG"),
          s = new _core_Error_js__WEBPACK_IMPORTED_MODULE_0__["default"]("Not an animated PNG"),
          h = new Uint8Array([137, 80, 78, 71, 13, 10, 26, 10]);

      function u(t) {
        var e = t.constructor === Uint8Array ? t : new Uint8Array(t);
        return !h.some(function (t, r) {
          return t !== e[r];
        });
      }

      function l(t) {
        var e, r;
        return m(new Uint8Array(t), function (t, a, i) {
          var n = new DataView(a.buffer);
          "IHDR" === t && (e = n.getUint32(i + 8), r = n.getUint32(i + 12));
        }), [e, r];
      }

      function o(t) {
        var e = new Uint8Array(t);
        if (!u(e)) return !1;
        var r = !1;
        return m(e, function (t) {
          return !(r = "acTL" === t);
        }), r;
      }

      var c = /*#__PURE__*/function () {
        function c() {
          _classCallCheck(this, c);

          this.width = 0, this.height = 0, this.numPlays = 0, this.playTime = 0, this.frames = [], this.paused = !1, this.playing = !1, this.playSpeed = 1, this.currentFrameNumber = 0, this._lastUsedFrame = -1;
        }

        _createClass(c, [{
          key: "play",
          value: function play() {
            this.playing || (this.paused = !1, this.playing = !0, this._play());
          }
        }, {
          key: "pause",
          value: function pause() {
            this.paused = !0, this.playing = !1, clearTimeout(this.timerID);
          }
        }, {
          key: "togglePlay",
          value: function togglePlay() {
            this.paused || !this.playing ? this.play() : this.pause();
          }
        }, {
          key: "bindFrame",
          value: function bindFrame(t, e, r) {
            t.bindTexture(e, r);
            var a = this.frameChanged();
            if (!a) return !1;
            var i = this.currentFrame,
                n = i.frameData,
                s = e.descriptor;
            return (i.left || i.top || i.width !== s.width || i.height !== s.height) && e.setData(null), e.updateData(0, i.left, i.top, i.width, i.height, n), this.updateUsedFrame(), a;
          }
        }, {
          key: "frameChanged",
          value: function frameChanged() {
            return this._lastUsedFrame !== this.currentFrameNumber;
          }
        }, {
          key: "updateUsedFrame",
          value: function updateUsedFrame() {
            this._lastUsedFrame = this.currentFrameNumber;
          }
        }, {
          key: "_load",
          value: function () {
            var _load3 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee21(a, i) {
              var _this32 = this;

              var _t31;

              return regeneratorRuntime.wrap(function _callee21$(_context21) {
                while (1) {
                  switch (_context21.prev = _context21.next) {
                    case 0:
                      _context21.prev = 0;

                      _t31 = function (t, e) {
                        var r = new Uint8Array(e);
                        if (h.some(function (t, e) {
                          return t !== r[e];
                        })) return n;
                        var a = !1;
                        if (m(r, function (t) {
                          return !(a = "acTL" === t);
                        }), !a) return s;
                        var i = [],
                            u = [];
                        var l = null,
                            o = null,
                            c = 0;
                        if (m(r, function (e, r, a, n) {
                          var s = new DataView(r.buffer);

                          switch (e) {
                            case "IHDR":
                              l = r.subarray(a + 8, a + 8 + n), t.width = s.getUint32(a + 8), t.height = s.getUint32(a + 12);
                              break;

                            case "acTL":
                              t.numPlays = s.getUint32(a + 8 + 4);
                              break;

                            case "fcTL":
                              {
                                o && (t.frames.push(o), c++), o = new d(), o.width = s.getUint32(a + 8 + 4), o.height = s.getUint32(a + 8 + 8), o.left = s.getUint32(a + 8 + 12), o.top = s.getUint32(a + 8 + 16);

                                var _e37 = s.getUint16(a + 8 + 20);

                                var _r18 = s.getUint16(a + 8 + 22);

                                0 === _r18 && (_r18 = 100), o.delay = 1e3 * _e37 / _r18, o.delay <= 10 && (o.delay = 100), t.playTime += o.delay, o.disposeOp = s.getUint8(a + 8 + 24), o.blendOp = s.getUint8(a + 8 + 25), o.dataParts = [], 0 === c && 2 === o.disposeOp && (o.disposeOp = 1);
                                break;
                              }

                            case "fdAT":
                              o && o.dataParts.push(r.subarray(a + 8 + 4, a + 8 + n));
                              break;

                            case "IDAT":
                              o && o.dataParts.push(r.subarray(a + 8, a + 8 + n));
                              break;

                            case "IEND":
                              u.push(g(r, a, 12 + n));
                              break;

                            default:
                              i.push(g(r, a, 12 + n));
                          }
                        }), 0 === t.frames.length) return s;
                        t.frameCount = t.frames.length;
                        var p = new Blob(i),
                            y = new Blob(u);
                        return t.frames.forEach(function (t) {
                          var e = [];
                          e.push(h), l.set(w(t.width), 0), l.set(w(t.height), 4), e.push(f("IHDR", l)), e.push(p), t.dataParts.forEach(function (t) {
                            return e.push(f("IDAT", t));
                          }), e.push(y), t.data = new Blob(e, {
                            type: "image/png"
                          }), delete t.dataParts, e = null;
                        }), t;
                      }(this, a);

                      if (!(_t31 !== this)) {
                        _context21.next = 4;
                        break;
                      }

                      return _context21.abrupt("return", _t31);

                    case 4:
                      this._resizeCanvas = document.createElement("canvas");
                      this._resizeCanvas.width = this.width;
                      this._resizeCanvas.height = this.height;
                      _context21.next = 9;
                      return Object(_core_promiseUtils_js__WEBPACK_IMPORTED_MODULE_1__["all"])(this.frames.map(function (t) {
                        return t.createImage(_this32._resizeCanvas);
                      }));

                    case 9:
                      _context21.next = 15;
                      break;

                    case 11:
                      _context21.prev = 11;
                      _context21.t0 = _context21["catch"](0);

                      if (Object(_core_promiseUtils_js__WEBPACK_IMPORTED_MODULE_1__["isAbortError"])(_context21.t0)) {
                        _context21.next = 15;
                        break;
                      }

                      return _context21.abrupt("return", new _core_Error_js__WEBPACK_IMPORTED_MODULE_0__["default"]("invalid-resource", "Could not parse PNG"));

                    case 15:
                      this.play();

                    case 16:
                    case "end":
                      return _context21.stop();
                  }
                }
              }, _callee21, this, [[0, 11]]);
            }));

            function _load(_x28, _x29) {
              return _load3.apply(this, arguments);
            }

            return _load;
          }()
        }, {
          key: "_play",
          value: function _play() {
            var _this33 = this;

            var t, e;
            if (0 === this.playSpeed) return void this.pause();
            this.playSpeed < 0 ? (this.currentFrameNumber -= 1, this.currentFrameNumber < 0 && (this.currentFrameNumber = this.frames.length - 1), e = this.currentFrameNumber, e -= 1, e < 0 && (e = this.frames.length - 1), t = 1 * -this.frames[e].delay / this.playSpeed) : (this.currentFrameNumber += 1, this.currentFrameNumber %= this.frames.length, t = 1 * this.frames[this.currentFrameNumber].delay / this.playSpeed);
            var r = this.frames[this.currentFrameNumber];
            this.currentFrame = {
              frameData: r.imageData,
              top: r.top,
              left: r.left,
              width: r.width,
              height: r.height
            }, this.timerID = window.setTimeout(function () {
              return _this33._play();
            }, t);
          }
        }], [{
          key: "create",
          value: function () {
            var _create2 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee22(r, a) {
              var i;
              return regeneratorRuntime.wrap(function _callee22$(_context22) {
                while (1) {
                  switch (_context22.prev = _context22.next) {
                    case 0:
                      i = new c();
                      _context22.prev = 1;
                      _context22.next = 4;
                      return i._load(r, a);

                    case 4:
                      _context22.next = 10;
                      break;

                    case 6:
                      _context22.prev = 6;
                      _context22.t0 = _context22["catch"](1);

                      if (Object(_core_promiseUtils_js__WEBPACK_IMPORTED_MODULE_1__["isAbortError"])(_context22.t0)) {
                        _context22.next = 10;
                        break;
                      }

                      return _context22.abrupt("return", new _core_Error_js__WEBPACK_IMPORTED_MODULE_0__["default"]("invalid-resource", "Could not load PNG: ".concat(_context22.t0.message)));

                    case 10:
                      return _context22.abrupt("return", i);

                    case 11:
                    case "end":
                      return _context22.stop();
                  }
                }
              }, _callee22, null, [[1, 6]]);
            }));

            function create(_x30, _x31) {
              return _create2.apply(this, arguments);
            }

            return create;
          }()
        }]);

        return c;
      }();

      var d = /*#__PURE__*/function () {
        function d() {
          _classCallCheck(this, d);

          this.left = 0, this.top = 0, this.width = 0, this.height = 0, this.delay = 0, this.disposeOp = 0, this.blendOp = 0, this.data = null, this.imageData = null;
        }

        _createClass(d, [{
          key: "createImage",
          value: function () {
            var _createImage = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee23(t) {
              var _this34 = this;

              return regeneratorRuntime.wrap(function _callee23$(_context23) {
                while (1) {
                  switch (_context23.prev = _context23.next) {
                    case 0:
                      if (!(null === this.imageData)) {
                        _context23.next = 2;
                        break;
                      }

                      return _context23.abrupt("return", Object(_core_promiseUtils_js__WEBPACK_IMPORTED_MODULE_1__["create"])(function (e, r) {
                        var a = URL.createObjectURL(_this34.data),
                            i = document.createElement("img");
                        i.onload = function () {
                          URL.revokeObjectURL(a), _this34.imageData = function (t, e) {
                            e.width = t.width, e.height = t.height;
                            var r = e.getContext("2d");
                            r.drawImage(t, 0, 0, t.width, t.height);
                            var a = r.getImageData(0, 0, t.width, t.height),
                                i = new Uint8Array(a.data);
                            var n;

                            for (var _t32 = 0; _t32 < i.length; _t32 += 4) {
                              n = i[_t32 + 3] / 255, i[_t32] = i[_t32] * n, i[_t32 + 1] = i[_t32 + 1] * n, i[_t32 + 2] = i[_t32 + 2] * n;
                            }

                            return new ImageData(new Uint8ClampedArray(i.buffer), t.width, t.height);
                          }(i, t), e();
                        }, i.onerror = function () {
                          URL.revokeObjectURL(a), _this34.imageData = null, r(new Error("Image creation error"));
                        }, i.src = a;
                      }));

                    case 2:
                    case "end":
                      return _context23.stop();
                  }
                }
              }, _callee23, this);
            }));

            function createImage(_x32) {
              return _createImage.apply(this, arguments);
            }

            return createImage;
          }()
        }]);

        return d;
      }();

      function m(t, e) {
        var r = new DataView(t.buffer);
        var a,
            i,
            n,
            s = 8;

        do {
          i = r.getUint32(s), a = p(t, s + 4, 4), n = e(a, t, s, i), s += 12 + i;
        } while (!1 !== n && "IEND" !== a && s < t.length);
      }

      function p(t, e, r) {
        var a = Array.prototype.slice.call(t.subarray(e, e + r));
        return String.fromCharCode.apply(String, a);
      }

      function g(t, e, r) {
        var a = new Uint8Array(r);
        return a.set(t.subarray(e, e + r)), a;
      }

      function f(t, e) {
        var r = t.length + e.length,
            a = new Uint8Array(r + 8),
            n = new DataView(a.buffer);
        n.setUint32(0, e.length), a.set(function (t) {
          var e = new Uint8Array(t.length);

          for (var _r19 = 0; _r19 < t.length; _r19++) {
            e[_r19] = t.charCodeAt(_r19);
          }

          return e;
        }(t), 4), a.set(e, 8);

        var s = function (t) {
          var e = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;
          var r = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : t.length - e;
          var a = -1;

          for (var _n12 = e, _s20 = e + r; _n12 < _s20; _n12++) {
            a = a >>> 8 ^ i[255 & (a ^ t[_n12])];
          }

          return -1 ^ a;
        }(a, 4, r);

        return n.setUint32(r + 4, s), a;
      }

      function w(t) {
        return new Uint8Array([t >>> 24 & 255, t >>> 16 & 255, t >>> 8 & 255, 255 & t]);
      }
      /* harmony default export */


      __webpack_exports__["default"] = c;
      /***/
    },

    /***/
    "krN3":
    /*!************************************************************************!*\
      !*** ./node_modules/@arcgis/core/views/2d/engine/webgl/GlyphSource.js ***!
      \************************************************************************/

    /*! exports provided: default */

    /***/
    function krN3(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony import */


      var _core_promiseUtils_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ../../../../core/promiseUtils.js */
      "9MzC");
      /* harmony import */


      var _request_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ../../../../request.js */
      "Lqtk");
      /* harmony import */


      var _core_pbf_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ../../../../core/pbf.js */
      "ATu9");
      /*
      All material copyright ESRI, All Rights Reserved, unless otherwise specified.
      See https://js.arcgis.com/4.18/esri/copyright.txt for details.
      */


      var a = /*#__PURE__*/function () {
        function a(t) {
          _classCallCheck(this, a);

          for (this._metrics = [], this._bitmaps = []; t.next();) {
            switch (t.tag()) {
              case 1:
                {
                  var e = t.getMessage();

                  for (; e.next();) {
                    switch (e.tag()) {
                      case 3:
                        {
                          var _t33 = e.getMessage();

                          var s = void 0,
                              _a11 = void 0,
                              _r20 = void 0,
                              n = void 0,
                              i = void 0,
                              c = void 0,
                              g = void 0;

                          for (; _t33.next();) {
                            switch (_t33.tag()) {
                              case 1:
                                s = _t33.getUInt32();
                                break;

                              case 2:
                                _a11 = _t33.getBytes();
                                break;

                              case 3:
                                _r20 = _t33.getUInt32();
                                break;

                              case 4:
                                n = _t33.getUInt32();
                                break;

                              case 5:
                                i = _t33.getSInt32();
                                break;

                              case 6:
                                c = _t33.getSInt32();
                                break;

                              case 7:
                                g = _t33.getUInt32();
                                break;

                              default:
                                _t33.skip();

                            }
                          }

                          _t33.release(), s && (this._metrics[s] = {
                            width: _r20,
                            height: n,
                            left: i,
                            top: c,
                            advance: g
                          }, this._bitmaps[s] = _a11);
                          break;
                        }

                      default:
                        e.skip();
                    }
                  }

                  e.release();
                  break;
                }

              default:
                t.skip();
            }
          }
        }

        _createClass(a, [{
          key: "getMetrics",
          value: function getMetrics(t) {
            return this._metrics[t];
          }
        }, {
          key: "getBitmap",
          value: function getBitmap(t) {
            return this._bitmaps[t];
          }
        }]);

        return a;
      }();

      var r = /*#__PURE__*/function () {
        function r() {
          _classCallCheck(this, r);

          this._ranges = [];
        }

        _createClass(r, [{
          key: "getRange",
          value: function getRange(t) {
            return this._ranges[t];
          }
        }, {
          key: "addRange",
          value: function addRange(t, e) {
            this._ranges[t] = e;
          }
        }]);

        return r;
      }();
      /* harmony default export */


      __webpack_exports__["default"] = /*#__PURE__*/function () {
        function _class11(t) {
          _classCallCheck(this, _class11);

          this._glyphInfo = {}, this._baseURL = t;
        }

        _createClass(_class11, [{
          key: "getRange",
          value: function getRange(r, n, i) {
            var c = this._getFontStack(r);

            if (c.getRange(n)) return Object(_core_promiseUtils_js__WEBPACK_IMPORTED_MODULE_0__["resolve"])();

            var g = 256 * n,
                o = g + 255,
                h = this._baseURL.replace("{fontstack}", r).replace("{range}", g + "-" + o);

            return Object(_request_js__WEBPACK_IMPORTED_MODULE_1__["default"])(h, _objectSpread({
              responseType: "array-buffer"
            }, i)).then(function (t) {
              c.addRange(n, new a(new _core_pbf_js__WEBPACK_IMPORTED_MODULE_2__["default"](new Uint8Array(t.data), new DataView(t.data))));
            });
          }
        }, {
          key: "getGlyph",
          value: function getGlyph(t, e) {
            var s = this._getFontStack(t);

            if (!s) return;
            var a = Math.floor(e / 256);
            if (a > 256) return;
            var r = s.getRange(a);
            return r ? {
              metrics: r.getMetrics(e),
              bitmap: r.getBitmap(e)
            } : void 0;
          }
        }, {
          key: "_getFontStack",
          value: function _getFontStack(t) {
            var e = this._glyphInfo[t];
            return e || (e = this._glyphInfo[t] = new r()), e;
          }
        }]);

        return _class11;
      }();
      /***/

    },

    /***/
    "mvnU":
    /*!************************************************************!*\
      !*** ./node_modules/@arcgis/core/views/2d/LabelManager.js ***!
      \************************************************************/

    /*! exports provided: default */

    /***/
    function mvnU(module, __webpack_exports__, __webpack_require__) {
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


      var _core_Error_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ../../core/Error.js */
      "zlDU");
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


      var _core_Accessor_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
      /*! ../../core/Accessor.js */
      "/CmD");
      /* harmony import */


      var _core_HandleOwner_js__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
      /*! ../../core/HandleOwner.js */
      "kJYu");
      /* harmony import */


      var _core_throttle_js__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
      /*! ../../core/throttle.js */
      "5C/r");
      /* harmony import */


      var _engine_webgl_collisions_CollisionEngine_js__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
      /*! ./engine/webgl/collisions/CollisionEngine.js */
      "KVK4");
      /* harmony import */


      var _engine_webgl_collisions_LayerViewSorter_js__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(
      /*! ./engine/webgl/collisions/LayerViewSorter.js */
      "yCUC");
      /*
      All material copyright ESRI, All Rights Reserved, unless otherwise specified.
      See https://js.arcgis.com/4.18/esri/copyright.txt for details.
      */


      var d = _core_Logger_js__WEBPACK_IMPORTED_MODULE_2__["default"].getLogger("esri.views.2d.layers.labels.LabelManager");

      var u = /*#__PURE__*/function (_Object3) {
        _inherits(u, _Object3);

        var _super15 = _createSuper(u);

        function u(e) {
          var _this35;

          _classCallCheck(this, u);

          _this35 = _super15.call(this, e), _this35._applyVisibilityPassThrottled = Object(_core_throttle_js__WEBPACK_IMPORTED_MODULE_12__["throttle"])(_this35._applyVisibilityPass, 64, _assertThisInitialized(_this35)), _this35.lastUpdateId = -1, _this35.updateRequested = !1, _this35.view = null;
          return _this35;
        }

        _createClass(u, [{
          key: "initialize",
          value: function initialize() {
            var _this36 = this;

            this.collisionEngine = new _engine_webgl_collisions_CollisionEngine_js__WEBPACK_IMPORTED_MODULE_13__["CollisionEngine"](this.view.featuresTilingScheme), this._layerViewSorter = new _engine_webgl_collisions_LayerViewSorter_js__WEBPACK_IMPORTED_MODULE_14__["LayerViewSorter"](function (e, t) {
              _this36.collisionEngine.registerLayerView(e, t);

              var i = e.tileRenderer;
              i && i.forEachTile(function (t) {
                t.isDirty = !0, _this36.addTile(e, t);
              }), _this36.requestUpdate();
            }, function (e) {
              _this36.collisionEngine.unregisterLayerView(e), _this36.requestUpdate();
            }), this.handles.add(this.view.allLayerViews.on("change", function (e) {
              _this36._layerViewSorter.update(e);
            }));
          }
        }, {
          key: "destroy",
          value: function destroy() {
            this._layerViewSorter.destroy(), this._layerViewSorter = null, this.collisionEngine = null, this._applyVisibilityPassThrottled.remove(), this._applyVisibilityPassThrottled = null;
          }
        }, {
          key: "updating",
          get: function get() {
            return this.updateRequested;
          }
        }, {
          key: "update",
          value: function update(e) {
            this._applyVisibilityPassThrottled(e);
          }
        }, {
          key: "viewChange",
          value: function viewChange() {
            this.requestUpdate();
          }
        }, {
          key: "requestUpdate",
          value: function requestUpdate() {
            this.updateRequested || (this.updateRequested = !0, this.view.requestUpdate());
          }
        }, {
          key: "processUpdate",
          value: function processUpdate(e) {
            this._set("updateParameters", e), this.updateRequested && (this.updateRequested = !1, this.update(e));
          }
        }, {
          key: "addTile",
          value: function addTile(e, t) {
            this.collisionEngine.addTile(e, t);
          }
        }, {
          key: "removeTile",
          value: function removeTile(e, t) {
            this.collisionEngine.removeTile(e, t);
          }
        }, {
          key: "_applyVisibilityPass",
          value: function _applyVisibilityPass(e) {
            try {
              var t = this.view.featuresTilingScheme.getClosestInfoForScale(e.state.scale).level;
              this.collisionEngine.run(e, t);
            } catch (e) {
              d.error(new _core_Error_js__WEBPACK_IMPORTED_MODULE_6__["default"]("mapview-labeling", "Encountered an error during label decluttering", e));
            }
          }
        }]);

        return u;
      }(Object(_core_HandleOwner_js__WEBPACK_IMPORTED_MODULE_11__["HandleOwnerMixin"])(_core_Accessor_js__WEBPACK_IMPORTED_MODULE_10__["default"]));

      Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_4__["property"])()], u.prototype, "updateRequested", void 0), Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_4__["property"])({
        readOnly: !0
      })], u.prototype, "updateParameters", void 0), Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_4__["property"])({
        dependsOn: ["updateRequested"]
      })], u.prototype, "updating", null), Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_4__["property"])()], u.prototype, "view", void 0), u = Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_subclass_js__WEBPACK_IMPORTED_MODULE_5__["subclass"])("esri.views.2d.layers.labels.LabelManager")], u);
      var c = u;
      /* harmony default export */

      __webpack_exports__["default"] = c;
      /***/
    },

    /***/
    "oQiY":
    /*!*********************************************************************!*\
      !*** ./node_modules/@arcgis/core/views/2d/engine/webgl/Profiler.js ***!
      \*********************************************************************/

    /*! exports provided: Profiler */

    /***/
    function oQiY(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "Profiler", function () {
        return o;
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


      var _core_Evented_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ../../../../core/Evented.js */
      "zm0L");
      /* harmony import */


      var _core_CircularArray_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ../../../../core/CircularArray.js */
      "lx5q");
      /* harmony import */


      var _webgl_capabilities_DisjointTimerQuery_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ../../../webgl/capabilities/DisjointTimerQuery.js */
      "GprA");
      /*
      All material copyright ESRI, All Rights Reserved, unless otherwise specified.
      See https://js.arcgis.com/4.18/esri/copyright.txt for details.
      */


      var i = Object(_core_has_js__WEBPACK_IMPORTED_MODULE_0__["default"])("esri-2d-profiler");

      var o = /*#__PURE__*/function () {
        function o(e, s) {
          var _this37 = this;

          _classCallCheck(this, o);

          if (this._events = new _core_Evented_js__WEBPACK_IMPORTED_MODULE_2__["default"](), this._entries = new Map(), this._timings = new _core_CircularArray_js__WEBPACK_IMPORTED_MODULE_3__["default"](10), !i) return;
          this._ext = Object(_webgl_capabilities_DisjointTimerQuery_js__WEBPACK_IMPORTED_MODULE_4__["createDisjointTimerQuery"])(e.gl, {}), this._debugOutput = s;
          var _o10 = e.gl;

          if (this.enableCommandLogging) {
            var _loop = function _loop(_e38) {
              if ("function" == typeof _o10[_e38]) {
                var _s21 = _o10[_e38],
                    t = -1 !== _e38.indexOf("draw");

                _o10[_e38] = function () {
                  for (var _len = arguments.length, r = new Array(_len), _key = 0; _key < _len; _key++) {
                    r[_key] = arguments[_key];
                  }

                  return _this37._events.emit("command", {
                    container: _this37._currentContainer,
                    pass: _this37._currentPass,
                    brush: _this37._currentBrush,
                    method: _e38,
                    args: r,
                    isDrawCommand: t
                  }), _this37._currentSummary && (_this37._currentSummary.commands++, t && _this37._currentSummary.drawCommands++), _s21.apply(_o10, r);
                };
              }
            };

            for (var _e38 in _o10) {
              _loop(_e38);
            }
          }
        }

        _createClass(o, [{
          key: "enableCommandLogging",
          get: function get() {
            return !("object" == typeof i && i.disableCommands);
          }
        }, {
          key: "recordContainerStart",
          value: function recordContainerStart(e) {
            i && (this._currentContainer = e);
          }
        }, {
          key: "recordContainerEnd",
          value: function recordContainerEnd() {
            i && (this._currentContainer = null);
          }
        }, {
          key: "recordPassStart",
          value: function recordPassStart(e) {
            i && (this._currentPass = e, this._initSummary());
          }
        }, {
          key: "recordPassEnd",
          value: function recordPassEnd() {
            i && (this._currentPass = null, this._emitSummary());
          }
        }, {
          key: "recordBrushStart",
          value: function recordBrushStart(e) {
            i && (this._currentBrush = e);
          }
        }, {
          key: "recordBrushEnd",
          value: function recordBrushEnd() {
            i && (this._currentBrush = null);
          }
        }, {
          key: "recordStart",
          value: function recordStart(e) {
            if (i && Object(_core_maybe_js__WEBPACK_IMPORTED_MODULE_1__["isSome"])(this._ext)) {
              if (this._entries.has(e)) {
                var _t34 = this._entries.get(e),
                    r = this._ext.resultAvailable(_t34.query),
                    n = this._ext.disjoint();

                if (r && !n) {
                  var _r21 = this._ext.getResult(_t34.query) / 1e6;

                  var _n13 = 0;

                  if (Object(_core_maybe_js__WEBPACK_IMPORTED_MODULE_1__["isSome"])(this._timings.enqueue(_r21))) {
                    var _e39 = this._timings.entries,
                        s = _e39.length;
                    var _t35 = 0;

                    var _iterator35 = _createForOfIteratorHelper(_e39),
                        _step35;

                    try {
                      for (_iterator35.s(); !(_step35 = _iterator35.n()).done;) {
                        var _s22 = _step35.value;
                        _t35 += _s22;
                      }
                    } catch (err) {
                      _iterator35.e(err);
                    } finally {
                      _iterator35.f();
                    }

                    _n13 = _t35 / s;
                  }

                  var _i19 = _r21.toFixed(2),
                      _o12 = _n13 ? _n13.toFixed(2) : "--";

                  this.enableCommandLogging ? (console.groupCollapsed("Frame report for ".concat(e, ", ").concat(_i19, " ms (").concat(_o12, " last 10 avg)\n").concat(_t34.commandsLen, " Commands (").concat(_t34.drawCommands, " draw)")), console.log("RenderPass breakdown: "), console.table(_t34.summaries), console.log("Commands: ", _t34.commands), console.groupEnd()) : console.log("Frame report for ".concat(e, ", ").concat(_i19, " ms (").concat(_o12, " last 10 avg)")), this._debugOutput.innerHTML = "".concat(_i19, " (").concat(_o12, ")");
                }

                var _iterator36 = _createForOfIteratorHelper(_t34.handles),
                    _step36;

                try {
                  for (_iterator36.s(); !(_step36 = _iterator36.n()).done;) {
                    var _e40 = _step36.value;

                    _e40.remove();
                  }
                } catch (err) {
                  _iterator36.e(err);
                } finally {
                  _iterator36.f();
                }

                this._entries["delete"](e);
              }

              var t = {
                name: e,
                query: this._ext.createQuery(),
                commands: [],
                commandsLen: 0,
                drawCommands: 0,
                summaries: [],
                handles: []
              };
              this.enableCommandLogging && (t.handles.push(this._events.on("command", function (e) {
                t.commandsLen++, t.commands.push(e), e.isDrawCommand && t.drawCommands++;
              })), t.handles.push(this._events.on("summary", function (e) {
                t.summaries.push(e);
              }))), this._ext.beginTimeElapsed(t.query), this._entries.set(e, t);
            }
          }
        }, {
          key: "recordEnd",
          value: function recordEnd(e) {
            i && Object(_core_maybe_js__WEBPACK_IMPORTED_MODULE_1__["isSome"])(this._ext) && this._entries.has(e) && this._ext.endTimeElapsed();
          }
        }, {
          key: "_initSummary",
          value: function _initSummary() {
            this.enableCommandLogging && (this._currentSummary = {
              container: this._currentContainer,
              pass: this._currentPass,
              drawCommands: 0,
              commands: 0
            });
          }
        }, {
          key: "_emitSummary",
          value: function _emitSummary() {
            this.enableCommandLogging && this._events.emit("summary", this._currentSummary);
          }
        }]);

        return o;
      }();
      /***/

    },

    /***/
    "pc5U":
    /*!********************************************************************************************!*\
      !*** ./node_modules/@arcgis/core/views/2d/engine/webgl/collisions/CollisionBucketEntry.js ***!
      \********************************************************************************************/

    /*! exports provided: default */

    /***/
    function pc5U(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony import */


      var _chunks_vec2_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ../../../../../chunks/vec2.js */
      "M0lq");
      /*
      All material copyright ESRI, All Rights Reserved, unless otherwise specified.
      See https://js.arcgis.com/4.18/esri/copyright.txt for details.
      */

      /* harmony default export */


      __webpack_exports__["default"] = /*#__PURE__*/function () {
        function _class12() {
          _classCallCheck(this, _class12);

          this._reference = null;
        }

        _createClass(_class12, [{
          key: "dirty",
          get: function get() {
            return this.reference && this.reference.isDirty;
          },
          set: function set(e) {
            this.reference && this.reference.hasData && (e || this.reference.isDirty) && (this.reference.isDirty = e);
          }
        }, {
          key: "index",
          get: function get() {
            return this._reference && this._reference.labelIndex;
          }
        }, {
          key: "reference",
          get: function get() {
            return this._reference;
          },
          set: function set(e) {
            this._reference = e;
          }
        }, {
          key: "reset",
          value: function reset(s, n, i) {
            var c = s.state,
                o = i.layerView.tileRenderer,
                f = this.reference;
            if (!f || !f.hasData) return !1;
            n && (f.isDirty = !0);
            var a = f.transforms.labelMat2d,
                h = a[4],
                u = a[5];

            var _iterator37 = _createForOfIteratorHelper(f.displayObjects),
                _step37;

            try {
              for (_iterator37.s(); !(_step37 = _iterator37.n()).done;) {
                var _s23 = _step37.value;
                var _n14 = o.featuresView.attributeView,
                    l = i.hasVV() ? _n14.getVVSize(_s23.id) : 0;

                var _iterator38 = _createForOfIteratorHelper(_s23.metrics),
                    _step38;

                try {
                  for (_iterator38.s(); !(_step38 = _iterator38.n()).done;) {
                    var _n15 = _step38.value;
                    i.hasVV() && _n15.computeVVOffset(l, i.vvEval);
                    var _s24 = _n15.bounds.center,
                        _o13 = _n15.bounds.centerT;
                    f.isDirty && (_n15.minZoom = -1);
                    var d = Object(_chunks_vec2_js__WEBPACK_IMPORTED_MODULE_0__["c"])(_o13, _n15.anchor);

                    if (c.rotation ? Object(_chunks_vec2_js__WEBPACK_IMPORTED_MODULE_0__["t"])(d, d, a) : (_o13[0] = d[0] + h, _o13[1] = d[1] + u), Object(_chunks_vec2_js__WEBPACK_IMPORTED_MODULE_0__["h"])(_o13, d, _s24), _o13[0] += _n15.offsetX, _o13[1] += _n15.offsetY, _n15.boxes) {
                      var _iterator39 = _createForOfIteratorHelper(_n15.boxes),
                          _step39;

                      try {
                        for (_iterator39.s(); !(_step39 = _iterator39.n()).done;) {
                          var e = _step39.value;
                          var _s25 = e.center,
                              _i20 = _n15.anchor,
                              _o14 = e.centerT;
                          Object(_chunks_vec2_js__WEBPACK_IMPORTED_MODULE_0__["h"])(_o14, _i20, _s25), c.rotation ? Object(_chunks_vec2_js__WEBPACK_IMPORTED_MODULE_0__["t"])(_o14, _o14, a) : (_o14[0] = _o14[0] + h, _o14[1] = _o14[1] + u);
                        }
                      } catch (err) {
                        _iterator39.e(err);
                      } finally {
                        _iterator39.f();
                      }
                    }
                  }
                } catch (err) {
                  _iterator38.e(err);
                } finally {
                  _iterator38.f();
                }
              }
            } catch (err) {
              _iterator37.e(err);
            } finally {
              _iterator37.f();
            }

            return !0;
          }
        }]);

        return _class12;
      }();
      /***/

    },

    /***/
    "q6Gj":
    /*!************************************************************************************!*\
      !*** ./node_modules/@arcgis/core/views/2d/engine/webgl/shaders/BitBlitPrograms.js ***!
      \************************************************************************************/

    /*! exports provided: bitBlit */

    /***/
    function q6Gj(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "bitBlit", function () {
        return e;
      });
      /* harmony import */


      var _sources_resolver_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ./sources/resolver.js */
      "vpBa");
      /*
      All material copyright ESRI, All Rights Reserved, unless otherwise specified.
      See https://js.arcgis.com/4.18/esri/copyright.txt for details.
      */


      var e = {
        name: "bitBlit",
        shaders: {
          vertexShader: Object(_sources_resolver_js__WEBPACK_IMPORTED_MODULE_0__["resolveIncludes"])("bitBlit/bitBlit.vert"),
          fragmentShader: Object(_sources_resolver_js__WEBPACK_IMPORTED_MODULE_0__["resolveIncludes"])("bitBlit/bitBlit.frag")
        },
        attributes: {
          a_pos: 0,
          a_tex: 1
        }
      };
      /***/
    },

    /***/
    "qnLi":
    /*!******************************************************************!*\
      !*** ./node_modules/@arcgis/core/views/2d/navigation/ZoomBox.js ***!
      \******************************************************************/

    /*! exports provided: default */

    /***/
    function qnLi(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
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


      var _core_Accessor_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! ../../../core/Accessor.js */
      "/CmD");
      /* harmony import */


      var _core_screenUtils_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
      /*! ../../../core/screenUtils.js */
      "qRWG");
      /*
      All material copyright ESRI, All Rights Reserved, unless otherwise specified.
      See https://js.arcgis.com/4.18/esri/copyright.txt for details.
      */


      var o = "esri-zoom-box__container",
          a = "esri-zoom-box__overlay",
          n = "esri-zoom-box__overlay-background",
          h = "esri-zoom-box__outline",
          l = "Shift",
          c = "Ctrl";

      var d = /*#__PURE__*/function (_core_Accessor_js__WE5) {
        _inherits(d, _core_Accessor_js__WE5);

        var _super16 = _createSuper(d);

        function d(t) {
          var _this38;

          _classCallCheck(this, d);

          _this38 = _super16.call(this, t), _this38._container = null, _this38._overlay = null, _this38._backgroundShape = null, _this38._boxShape = null, _this38._box = {
            x: 0,
            y: 0,
            width: 0,
            height: 0
          }, _this38._redraw = _this38._redraw.bind(_assertThisInitialized(_this38));
          return _this38;
        }

        _createClass(d, [{
          key: "destroy",
          value: function destroy() {
            this.view = null;
          }
        }, {
          key: "view",
          set: function set(t) {
            var _this39 = this;

            this._handles && this._handles.forEach(function (t) {
              t.remove();
            }), this._handles = null, this._destroyOverlay(), this._set("view", t), t && (t.on("drag", [l], function (t) {
              return _this39._handleDrag(t, 1);
            }), t.on("drag", [l, c], function (t) {
              return _this39._handleDrag(t, -1);
            }));
          }
        }, {
          key: "_start",
          value: function _start() {
            this._createContainer(), this._createOverlay(), this.navigation.begin();
          }
        }, {
          key: "_update",
          value: function _update(t, e, i, s) {
            this._box.x = t, this._box.y = e, this._box.width = i, this._box.height = s, this._rafId || (this._rafId = requestAnimationFrame(this._redraw));
          }
        }, {
          key: "_end",
          value: function _end(t, e, i, s, o) {
            var a = this.view,
                n = a.toMap(Object(_core_screenUtils_js__WEBPACK_IMPORTED_MODULE_10__["createScreenPoint"])(t + .5 * i, e + .5 * s));
            var h = Math.max(i / a.width, s / a.height);
            -1 === o && (h = 1 / h), this._destroyOverlay(), this.navigation.end(), a.goTo({
              center: n,
              scale: a.scale * h
            });
          }
        }, {
          key: "_updateBox",
          value: function _updateBox(t, e, i, s) {
            var r = this._boxShape;
            r.setAttributeNS(null, "x", "" + t), r.setAttributeNS(null, "y", "" + e), r.setAttributeNS(null, "width", "" + i), r.setAttributeNS(null, "height", "" + s), r.setAttributeNS(null, "class", h);
          }
        }, {
          key: "_updateBackground",
          value: function _updateBackground(t, e, i, s) {
            this._backgroundShape.setAttributeNS(null, "d", this._toSVGPath(t, e, i, s, this.view.width, this.view.height));
          }
        }, {
          key: "_createContainer",
          value: function _createContainer() {
            var t = document.createElement("div");
            t.className = o, this.view.root.appendChild(t), this._container = t;
          }
        }, {
          key: "_createOverlay",
          value: function _createOverlay() {
            var t = this.view.width,
                e = this.view.height,
                i = document.createElementNS("http://www.w3.org/2000/svg", "path");
            i.setAttributeNS(null, "d", "M 0 0 L " + t + " 0 L " + t + " " + e + " L 0 " + e + " Z"), i.setAttributeNS(null, "class", n);
            var s = document.createElementNS("http://www.w3.org/2000/svg", "rect"),
                r = document.createElementNS("http://www.w3.org/2000/svg", "svg");
            r.setAttributeNS("http://www.w3.org/2000/xmlns/", "xmlns:xlink", "http://www.w3.org/1999/xlink"), r.setAttributeNS(null, "class", a), r.appendChild(i), r.appendChild(s), this._container.appendChild(r), this._backgroundShape = i, this._boxShape = s, this._overlay = r;
          }
        }, {
          key: "_destroyOverlay",
          value: function _destroyOverlay() {
            this._container && this._container.parentNode && this._container.parentNode.removeChild(this._container), this._container = this._backgroundShape = this._boxShape = this._overlay = null;
          }
        }, {
          key: "_toSVGPath",
          value: function _toSVGPath(t, e, i, s, r, o) {
            var a = t + i,
                n = e + s;
            return "M 0 0 L " + r + " 0 L " + r + " " + o + " L 0 " + o + " ZM " + t + " " + e + " L " + t + " " + n + " L " + a + " " + n + " L " + a + " " + e + " Z";
          }
        }, {
          key: "_handleDrag",
          value: function _handleDrag(t, e) {
            var i = t.x,
                s = t.y,
                r = t.origin.x,
                o = t.origin.y;
            var a, n, h, l;

            switch (i > r ? (a = r, h = i - r) : (a = i, h = r - i), s > o ? (n = o, l = s - o) : (n = s, l = o - s), t.action) {
              case "start":
                this._start();

                break;

              case "update":
                this._update(a, n, h, l);

                break;

              case "end":
                this._end(a, n, h, l, e);

            }

            t.stopPropagation();
          }
        }, {
          key: "_redraw",
          value: function _redraw() {
            if (!this._rafId) return;
            if (this._rafId = null, !this._overlay) return;
            var _this$_box = this._box,
                t = _this$_box.x,
                e = _this$_box.y,
                i = _this$_box.width,
                s = _this$_box.height;
            this._updateBox(t, e, i, s), this._updateBackground(t, e, i, s), this._rafId = requestAnimationFrame(this._redraw);
          }
        }]);

        return d;
      }(_core_Accessor_js__WEBPACK_IMPORTED_MODULE_9__["default"]);

      Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_4__["property"])()], d.prototype, "navigation", void 0), Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_4__["property"])()], d.prototype, "view", null), d = Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_subclass_js__WEBPACK_IMPORTED_MODULE_5__["subclass"])("esri.views.2d.navigation.ZoomBox")], d);
      var _ = d;
      /* harmony default export */

      __webpack_exports__["default"] = _;
      /***/
    },

    /***/
    "rhr1":
    /*!*****************************************************************************!*\
      !*** ./node_modules/@arcgis/core/views/2d/engine/webgl/RectangleBinPack.js ***!
      \*****************************************************************************/

    /*! exports provided: default */

    /***/
    function rhr1(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony import */


      var _Rect_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ./Rect.js */
      "qcDN");
      /*
      All material copyright ESRI, All Rights Reserved, unless otherwise specified.
      See https://js.arcgis.com/4.18/esri/copyright.txt for details.
      */

      /* harmony default export */


      __webpack_exports__["default"] = /*#__PURE__*/function () {
        function _class13(t, e) {
          _classCallCheck(this, _class13);

          this._width = 0, this._height = 0, this._free = [], this._width = t, this._height = e, this._free.push(new _Rect_js__WEBPACK_IMPORTED_MODULE_0__["default"](0, 0, t, e));
        }

        _createClass(_class13, [{
          key: "width",
          get: function get() {
            return this._width;
          }
        }, {
          key: "height",
          get: function get() {
            return this._height;
          }
        }, {
          key: "allocate",
          value: function allocate(t, e) {
            if (t > this._width || e > this._height) return new _Rect_js__WEBPACK_IMPORTED_MODULE_0__["default"]();
            var i = null,
                s = -1;

            for (var h = 0; h < this._free.length; ++h) {
              var r = this._free[h];
              t <= r.width && e <= r.height && (null === i || r.y <= i.y && r.x <= i.x) && (i = r, s = h);
            }

            return null === i ? new _Rect_js__WEBPACK_IMPORTED_MODULE_0__["default"]() : (this._free.splice(s, 1), i.width < i.height ? (i.width > t && this._free.push(new _Rect_js__WEBPACK_IMPORTED_MODULE_0__["default"](i.x + t, i.y, i.width - t, e)), i.height > e && this._free.push(new _Rect_js__WEBPACK_IMPORTED_MODULE_0__["default"](i.x, i.y + e, i.width, i.height - e))) : (i.width > t && this._free.push(new _Rect_js__WEBPACK_IMPORTED_MODULE_0__["default"](i.x + t, i.y, i.width - t, i.height)), i.height > e && this._free.push(new _Rect_js__WEBPACK_IMPORTED_MODULE_0__["default"](i.x, i.y + e, t, i.height - e))), new _Rect_js__WEBPACK_IMPORTED_MODULE_0__["default"](i.x, i.y, t, e));
          }
        }, {
          key: "release",
          value: function release(h) {
            for (var t = 0; t < this._free.length; ++t) {
              var e = this._free[t];
              if (e.y === h.y && e.height === h.height && e.x + e.width === h.x) e.width += h.width;else if (e.x === h.x && e.width === h.width && e.y + e.height === h.y) e.height += h.height;else if (h.y === e.y && h.height === e.height && h.x + h.width === e.x) e.x = h.x, e.width += h.width;else {
                if (h.x !== e.x || h.width !== e.width || h.y + h.height !== e.y) continue;
                e.y = h.y, e.height += h.height;
              }
              this._free.splice(t, 1), this.release(h);
            }

            this._free.push(h);
          }
        }]);

        return _class13;
      }();
      /***/

    },

    /***/
    "rvq7":
    /*!****************************************************!*\
      !*** ./node_modules/@arcgis/core/core/MemCache.js ***!
      \****************************************************/

    /*! exports provided: MIN_PRIORITY, MemCache, MemCacheStorage */

    /***/
    function rvq7(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "MIN_PRIORITY", function () {
        return e;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "MemCache", function () {
        return s;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "MemCacheStorage", function () {
        return i;
      });
      /* harmony import */


      var _PooledArray_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ./PooledArray.js */
      "ikTR");
      /*
      All material copyright ESRI, All Rights Reserved, unless otherwise specified.
      See https://js.arcgis.com/4.18/esri/copyright.txt for details.
      */


      var e = -3;

      var s = /*#__PURE__*/function () {
        function s(t, e, _s26) {
          _classCallCheck(this, s);

          this._namespace = t, this._storage = e, this._removeFunc = !1, this._hit = 0, this._miss = 0, this._storage.register(this), this._namespace += ":", _s26 && (this._storage.registerRemoveFunc(this._namespace, _s26), this._removeFunc = !0);
        }

        _createClass(s, [{
          key: "namespace",
          get: function get() {
            return this._namespace.slice(0, -1);
          }
        }, {
          key: "hitRate",
          get: function get() {
            return this._hit / (this._hit + this._miss);
          }
        }, {
          key: "size",
          get: function get() {
            return this._storage.size;
          }
        }, {
          key: "maxSize",
          get: function get() {
            return this._storage.maxSize;
          }
        }, {
          key: "resetHitRate",
          value: function resetHitRate() {
            this._hit = this._miss = 0;
          }
        }, {
          key: "destroy",
          value: function destroy() {
            this._storage.clear(this._namespace), this._removeFunc && this._storage.deregisterRemoveFunc(this._namespace), this._storage.deregister(this);
          }
        }, {
          key: "put",
          value: function put(t, e, _s27) {
            var i = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : 0;

            this._storage.put(this._namespace + t, e, _s27, i);
          }
        }, {
          key: "get",
          value: function get(t) {
            var e = this._storage.get(this._namespace + t);

            return void 0 === e ? ++this._miss : ++this._hit, e;
          }
        }, {
          key: "pop",
          value: function pop(t) {
            var e = this._storage.pop(this._namespace + t);

            return void 0 === e ? ++this._miss : ++this._hit, e;
          }
        }, {
          key: "updateSize",
          value: function updateSize(t, e, _s28) {
            this._storage.updateSize(this._namespace + t, e, _s28);
          }
        }, {
          key: "clear",
          value: function clear() {
            this._storage.clear(this._namespace);
          }
        }, {
          key: "clearAll",
          value: function clearAll() {
            this._storage.clearAll();
          }
        }, {
          key: "getStats",
          value: function getStats() {
            return this._storage.getStats();
          }
        }, {
          key: "resetStats",
          value: function resetStats() {
            this._storage.resetStats();
          }
        }]);

        return s;
      }();

      var i = /*#__PURE__*/function () {
        function i() {
          var e = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 10485760;

          _classCallCheck(this, i);

          this._maxSize = e, this._db = new Map(), this._size = 0, this._hit = 0, this._miss = 0, this._removeFuncs = [], this._users = new _PooledArray_js__WEBPACK_IMPORTED_MODULE_0__["default"]();
        }

        _createClass(i, [{
          key: "register",
          value: function register(t) {
            this._users.push(t);
          }
        }, {
          key: "deregister",
          value: function deregister(t) {
            this._users.removeUnordered(t);
          }
        }, {
          key: "registerRemoveFunc",
          value: function registerRemoveFunc(t, e) {
            this._removeFuncs.push([t, e]);
          }
        }, {
          key: "deregisterRemoveFunc",
          value: function deregisterRemoveFunc(t) {
            this._removeFuncs = this._removeFuncs.filter(function (e) {
              return e[0] !== t;
            });
          }
        }, {
          key: "size",
          get: function get() {
            return this._size;
          }
        }, {
          key: "maxSize",
          get: function get() {
            return this._maxSize;
          },
          set: function set(t) {
            this._maxSize = Math.max(t, 0), this._checkSizeLimit();
          }
        }, {
          key: "put",
          value: function put(t, e, s, _i21) {
            var h = this._db.get(t);

            if (h && (this._size -= h.size, this._db["delete"](t), h.entry !== e && this._notifyRemoved(t, h.entry)), s > this._maxSize) return void this._notifyRemoved(t, e);
            if (void 0 === e) return void console.warn("Refusing to cache undefined entry ");
            if (!s || s < 0) return void console.warn("Refusing to cache entry with invalid size " + s);
            var r = 1 + Math.max(_i21, -3) - -3;
            this._db.set(t, {
              entry: e,
              size: s,
              lifetime: r,
              lives: r
            }), this._size += s, this._checkSizeLimit();
          }
        }, {
          key: "updateSize",
          value: function updateSize(t, e, s) {
            var _i22 = this._db.get(t);

            _i22 && _i22.entry === e && (this._size -= _i22.size, s > this._maxSize ? this._notifyRemoved(t, e) : (_i22.size = s, this._size += s, this._checkSizeLimit()));
          }
        }, {
          key: "pop",
          value: function pop(t) {
            var e = this._db.get(t);

            if (e) return this._size -= e.size, this._db["delete"](t), ++this._hit, e.entry;
            ++this._miss;
          }
        }, {
          key: "get",
          value: function get(t) {
            var e = this._db.get(t);

            if (void 0 !== e) return this._db["delete"](t), e.lives = e.lifetime, this._db.set(t, e), ++this._hit, e.entry;
            ++this._miss;
          }
        }, {
          key: "getStats",
          value: function getStats() {
            var _this40 = this;

            var t = {
              Size: Math.round(this._size / 1048576) + "/" + Math.round(this._maxSize / 1048576) + "MB",
              "Hit rate": Math.round(100 * this._getHitRate()) + "%",
              Entries: this._db.size.toString()
            },
                e = {},
                s = new Array();

            this._db.forEach(function (t, _i24) {
              var h = t.lifetime;
              s[h] = (s[h] || 0) + t.size, _this40._users.forAll(function (s) {
                var h = s.namespace;

                if (_i24.startsWith(h)) {
                  var _s29 = e[h] || 0;

                  e[h] = _s29 + t.size;
                }
              });
            });

            var _i23 = {};

            this._users.forAll(function (t) {
              var s = t.namespace;

              if (!isNaN(t.hitRate) && t.hitRate > 0) {
                var _h4 = e[s] || 0;

                e[s] = _h4, _i23[s] = Math.round(100 * t.hitRate) + "%";
              } else _i23[s] = "0%";
            });

            var h = Object.keys(e);
            h.forEach(function (t) {
              return e[t] = e[t] / _this40._size * 100;
            }), h.sort(function (t, s) {
              return e[s] - e[t];
            }), h.forEach(function (s) {
              return t[s] = Math.round(e[s]) + "% / " + _i23[s];
            });

            for (var _e41 = s.length - 1; _e41 >= 0; --_e41) {
              var _i26 = s[_e41];
              _i26 && (t["Priority " + (_e41 + -3 - 1)] = Math.round(_i26 / this.size * 100) + "%");
            }

            return t;
          }
        }, {
          key: "resetStats",
          value: function resetStats() {
            this._hit = this._miss = 0, this._users.forAll(function (t) {
              return t.resetHitRate();
            });
          }
        }, {
          key: "clear",
          value: function clear(t) {
            var _this41 = this;

            this._db.forEach(function (e, s) {
              s.startsWith(t) && (_this41._size -= e.size, _this41._db["delete"](s), _this41._notifyRemoved(s, e.entry));
            });
          }
        }, {
          key: "clearAll",
          value: function clearAll() {
            var _this42 = this;

            this._db.forEach(function (t, e) {
              return _this42._notifyRemoved(e, t.entry);
            }), this._size = 0, this._db.clear();
          }
        }, {
          key: "_getHitRate",
          value: function _getHitRate() {
            return this._hit / (this._hit + this._miss);
          }
        }, {
          key: "_notifyRemoved",
          value: function _notifyRemoved(t, e) {
            this._removeFuncs.forEach(function (s) {
              t.startsWith(s[0]) && s[1](e);
            });
          }
        }, {
          key: "_checkSizeLimit",
          value: function _checkSizeLimit() {
            if (!(this._size <= this._maxSize)) {
              var _iterator40 = _createForOfIteratorHelper(this._db),
                  _step40;

              try {
                for (_iterator40.s(); !(_step40 = _iterator40.n()).done;) {
                  var _step40$value = _slicedToArray(_step40.value, 2),
                      t = _step40$value[0],
                      _e42 = _step40$value[1];

                  if (this._db["delete"](t), _e42.lives <= 1 ? (this._size -= _e42.size, this._notifyRemoved(t, _e42.entry)) : (--_e42.lives, this._db.set(t, _e42)), this._size <= .9 * this.maxSize) return;
                }
              } catch (err) {
                _iterator40.e(err);
              } finally {
                _iterator40.f();
              }
            }
          }
        }]);

        return i;
      }();
      /***/

    },

    /***/
    "sAsQ":
    /*!*******************************************************************************!*\
      !*** ./node_modules/@arcgis/core/views/2d/engine/webgl/painter/RenderPass.js ***!
      \*******************************************************************************/

    /*! exports provided: default */

    /***/
    function sAsQ(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony import */


      var _core_has_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ../../../../../core/has.js */
      "wSAH");
      /* harmony import */


      var _core_maybe_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ../../../../../core/maybe.js */
      "srIe");
      /* harmony import */


      var _core_arrayUtils_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ../../../../../core/arrayUtils.js */
      "tQ+6");
      /* harmony import */


      var _enums_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ../enums.js */
      "yE7X");
      /*
      All material copyright ESRI, All Rights Reserved, unless otherwise specified.
      See https://js.arcgis.com/4.18/esri/copyright.txt for details.
      */

      /* harmony default export */


      __webpack_exports__["default"] = /*#__PURE__*/function () {
        function _class14(r, e) {
          _classCallCheck(this, _class14);

          var s;
          this.brushes = r, this.name = e.name, this.drawPhase = e.drawPhase || _enums_js__WEBPACK_IMPORTED_MODULE_3__["WGLDrawPhase"].MAP, this._targetFn = e.target, this.effects = e.effects || [], this.enableDefaultDraw = null != (s = e.enableDefaultDraw) ? s : function () {
            return !0;
          }, this.has = e.has;
        }

        _createClass(_class14, [{
          key: "render",
          value: function render(e) {
            var s = e.context,
                t = e.profiler,
                a = this._targetFn(),
                o = this.drawPhase & e.drawPhase;

            if (t.recordPassStart(this.name), o && (!this.has || Object(_core_has_js__WEBPACK_IMPORTED_MODULE_0__["default"])(this.has))) {
              this.enableDefaultDraw() && this._doRender(e, a), t.recordPassEnd();

              var _iterator41 = _createForOfIteratorHelper(this.effects),
                  _step41;

              try {
                for (_iterator41.s(); !(_step41 = _iterator41.n()).done;) {
                  var r = _step41.value;
                  if (!r.enable()) continue;
                  var _o15 = r.apply;
                  t.recordPassStart(this.name + "." + _o15.name), t.recordBrushStart(_o15.name);

                  var i = r.args && r.args(),
                      _s$getViewport = s.getViewport(),
                      n = _s$getViewport.x,
                      h = _s$getViewport.y,
                      f = _s$getViewport.width,
                      d = _s$getViewport.height,
                      c = s.getBoundFramebufferObject();

                  _o15.bind(e, i), this._doRender(e, a, _o15.defines), _o15.draw(e, i), _o15.unbind(e, i), s.bindFramebuffer(c), s.setViewport(n, h, f, d), t.recordBrushEnd(), t.recordPassEnd();
                }
              } catch (err) {
                _iterator41.e(err);
              } finally {
                _iterator41.f();
              }
            }
          }
        }, {
          key: "_doRender",
          value: function _doRender(r, t, a) {
            if (!Object(_core_maybe_js__WEBPACK_IMPORTED_MODULE_1__["isNone"])(t)) if (Object(_core_arrayUtils_js__WEBPACK_IMPORTED_MODULE_2__["isArrayLike"])(t)) {
              var _iterator42 = _createForOfIteratorHelper(t),
                  _step42;

              try {
                for (_iterator42.s(); !(_step42 = _iterator42.n()).done;) {
                  var e = _step42.value;

                  if (e.visible) {
                    var _iterator43 = _createForOfIteratorHelper(this.brushes),
                        _step43;

                    try {
                      for (_iterator43.s(); !(_step43 = _iterator43.n()).done;) {
                        var s = _step43.value;
                        r.profiler.recordBrushStart(s.name), s.prepareState(r, e, a), s.draw(r, e, a), r.profiler.recordBrushEnd();
                      }
                    } catch (err) {
                      _iterator43.e(err);
                    } finally {
                      _iterator43.f();
                    }
                  }
                }
              } catch (err) {
                _iterator42.e(err);
              } finally {
                _iterator42.f();
              }
            } else {
              var _iterator44 = _createForOfIteratorHelper(this.brushes),
                  _step44;

              try {
                for (_iterator44.s(); !(_step44 = _iterator44.n()).done;) {
                  var _e43 = _step44.value;
                  r.profiler.recordBrushStart(_e43.name), _e43.prepareState(r, t, a), _e43.draw(r, t, a), r.profiler.recordBrushEnd();
                }
              } catch (err) {
                _iterator44.e(err);
              } finally {
                _iterator44.f();
              }
            }
          }
        }]);

        return _class14;
      }();
      /***/

    },

    /***/
    "sz4w":
    /*!****************************************************************!*\
      !*** ./node_modules/@arcgis/core/views/navigation/Momentum.js ***!
      \****************************************************************/

    /*! exports provided: Momentum */

    /***/
    function sz4w(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "Momentum", function () {
        return t;
      });
      /*
      All material copyright ESRI, All Rights Reserved, unless otherwise specified.
      See https://js.arcgis.com/4.18/esri/copyright.txt for details.
      */


      var t = /*#__PURE__*/function () {
        function t(_t36, i, o) {
          _classCallCheck(this, t);

          this._initialVelocity = _t36, this._stopVelocity = i, this._friction = o, this._duration = Math.abs(Math.log(Math.abs(this._initialVelocity) / this._stopVelocity) / Math.log(1 - this._friction));
        }

        _createClass(t, [{
          key: "duration",
          get: function get() {
            return this._duration;
          }
        }, {
          key: "isFinished",
          value: function isFinished(_t37) {
            return _t37 > this.duration;
          }
        }, {
          key: "friction",
          get: function get() {
            return this._friction;
          }
        }, {
          key: "value",
          value: function value(_t38) {
            return this.valueFromInitialVelocity(this._initialVelocity, _t38);
          }
        }, {
          key: "valueDelta",
          value: function valueDelta(_t39, i) {
            var o = this.value(_t39);
            return this.value(_t39 + i) - o;
          }
        }, {
          key: "valueFromInitialVelocity",
          value: function valueFromInitialVelocity(_t40, i) {
            i = Math.min(i, this.duration);
            var o = 1 - this.friction;
            return _t40 * (Math.pow(o, i) - 1) / Math.log(o);
          }
        }]);

        return t;
      }();
      /***/

    },

    /***/
    "tGAV":
    /*!***********************************************************!*\
      !*** ./node_modules/@arcgis/core/views/2d/mapViewDeps.js ***!
      \***********************************************************/

    /*! exports provided: LabelManager, Stage, GraphicsView2D, MapViewNavigation, MagnifierView2D */

    /***/
    function tGAV(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony import */


      var _LabelManager_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ./LabelManager.js */
      "mvnU");
      /* harmony reexport (safe) */


      __webpack_require__.d(__webpack_exports__, "LabelManager", function () {
        return _LabelManager_js__WEBPACK_IMPORTED_MODULE_0__["default"];
      });
      /* harmony import */


      var _engine_Stage_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./engine/Stage.js */
      "XDzM");
      /* harmony reexport (safe) */


      __webpack_require__.d(__webpack_exports__, "Stage", function () {
        return _engine_Stage_js__WEBPACK_IMPORTED_MODULE_1__["Stage"];
      });
      /* harmony import */


      var _layers_graphics_GraphicsView2D_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./layers/graphics/GraphicsView2D.js */
      "Vh9r");
      /* harmony reexport (safe) */


      __webpack_require__.d(__webpack_exports__, "GraphicsView2D", function () {
        return _layers_graphics_GraphicsView2D_js__WEBPACK_IMPORTED_MODULE_2__["default"];
      });
      /* harmony import */


      var _navigation_MapViewNavigation_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./navigation/MapViewNavigation.js */
      "1dih");
      /* harmony reexport (safe) */


      __webpack_require__.d(__webpack_exports__, "MapViewNavigation", function () {
        return _navigation_MapViewNavigation_js__WEBPACK_IMPORTED_MODULE_3__["default"];
      });
      /* harmony import */


      var _magnifier_MagnifierView2D_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ./magnifier/MagnifierView2D.js */
      "0Ht6");
      /* harmony reexport (safe) */


      __webpack_require__.d(__webpack_exports__, "MagnifierView2D", function () {
        return _magnifier_MagnifierView2D_js__WEBPACK_IMPORTED_MODULE_4__["default"];
      });
      /*
      All material copyright ESRI, All Rights Reserved, unless otherwise specified.
      See https://js.arcgis.com/4.18/esri/copyright.txt for details.
      */

      /***/

    },

    /***/
    "v9+0":
    /*!***************************************************************************!*\
      !*** ./node_modules/@arcgis/core/views/2d/engine/webgl/TextureManager.js ***!
      \***************************************************************************/

    /*! exports provided: default */

    /***/
    function v90(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony import */


      var _config_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ../../../../config.js */
      "EyXx");
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


      var _core_screenUtils_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ../../../../core/screenUtils.js */
      "qRWG");
      /* harmony import */


      var _request_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ../../../../request.js */
      "Lqtk");
      /* harmony import */


      var _chunks_vec2_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! ../../../../chunks/vec2.js */
      "M0lq");
      /* harmony import */


      var _definitions_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! ./definitions.js */
      "jIHu");
      /* harmony import */


      var _chunks_vec2f32_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! ../../../../chunks/vec2f32.js */
      "c46T");
      /* harmony import */


      var _util_BidiText_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
      /*! ./util/BidiText.js */
      "t7mB");
      /* harmony import */


      var _symbols_cim_Rasterizer_js__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
      /*! ../../../../symbols/cim/Rasterizer.js */
      "e4KH");
      /* harmony import */


      var _enums_js__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
      /*! ./enums.js */
      "yE7X");
      /* harmony import */


      var _fontUtils_js__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
      /*! ./fontUtils.js */
      "5ROZ");
      /* harmony import */


      var _GlyphMosaic_js__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(
      /*! ./GlyphMosaic.js */
      "BaZm");
      /* harmony import */


      var _GlyphSource_js__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(
      /*! ./GlyphSource.js */
      "krN3");
      /* harmony import */


      var _SDFConverter_js__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(
      /*! ./SDFConverter.js */
      "jE2w");
      /* harmony import */


      var _SpriteMosaic_js__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(
      /*! ./SpriteMosaic.js */
      "YbU1");
      /* harmony import */


      var _animatedFormats_apng_js__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(
      /*! ./animatedFormats/apng.js */
      "kIoy");
      /* harmony import */


      var _animatedFormats_gif_js__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(
      /*! ./animatedFormats/gif.js */
      "G+vY");
      /* harmony import */


      var _util_Result_js__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(
      /*! ./util/Result.js */
      "GqaZ");
      /* harmony import */


      var _util_symbolUtils_js__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(
      /*! ./util/symbolUtils.js */
      "DRKG");
      /*
      All material copyright ESRI, All Rights Reserved, unless otherwise specified.
      See https://js.arcgis.com/4.18/esri/copyright.txt for details.
      */


      var z = Object(_chunks_vec2f32_js__WEBPACK_IMPORTED_MODULE_9__["c"])(),
          j = _core_Logger_js__WEBPACK_IMPORTED_MODULE_2__["default"].getLogger("esri.views.2d.engine.webgl.TextureManager"),
          R = function R(e) {
        return "esriSMS" === e.type && e.path;
      };

      function C(e) {
        switch (e.type) {
          case "esriSMS":
          case "esriPMS":
          case "CIMPointSymbol":
          case "CIMVectorMarker":
          case "CIMPictureMarker":
          case "CIMCharacterMarker":
            return !1;

          default:
            return !0;
        }
      }

      function U(e, t) {
        var i = Math.round(Object(_core_screenUtils_js__WEBPACK_IMPORTED_MODULE_5__["pt2px"])(t) * window.devicePixelRatio),
            s = i >= 128 ? 2 : 4;
        return Math.min(e, i * s);
      }

      var F = function F(e, t, i) {
        return j.error(new _core_Error_js__WEBPACK_IMPORTED_MODULE_3__["default"](e, t, i));
      };

      var P = /*#__PURE__*/function () {
        function P(e, t, i) {
          _classCallCheck(this, P);

          this.mosaicType = e, this.page = t, this.sdf = i;
        }

        _createClass(P, null, [{
          key: "fromMosaic",
          value: function fromMosaic(e, t) {
            return new P(e, t.page, t.sdf);
          }
        }]);

        return P;
      }();
      /* harmony default export */


      __webpack_exports__["default"] = /*#__PURE__*/function () {
        function _class15(t) {
          _classCallCheck(this, _class15);

          this._invalidFontsMap = new Map(), this._sdfConverter = new _SDFConverter_js__WEBPACK_IMPORTED_MODULE_16__["default"](126), this._bindingInfos = new Array(), this._hashToBindingIndex = new Map(), this._rasterizer = new _symbols_cim_Rasterizer_js__WEBPACK_IMPORTED_MODULE_11__["default"](), this._ongoingRasterizations = new Map(), this._spriteMosaic = new _SpriteMosaic_js__WEBPACK_IMPORTED_MODULE_17__["default"](t, 2048, 2048, 500), this._glyphSource = new _GlyphSource_js__WEBPACK_IMPORTED_MODULE_15__["default"]("".concat(_config_js__WEBPACK_IMPORTED_MODULE_0__["default"].fontsUrl, "/{fontstack}/{range}.pbf")), this._glyphMosaic = new _GlyphMosaic_js__WEBPACK_IMPORTED_MODULE_14__["default"](1024, 1024, this._glyphSource);
        }

        _createClass(_class15, [{
          key: "dispose",
          value: function dispose() {
            this._spriteMosaic.dispose(), this._glyphMosaic.dispose(), this._rasterizer.dispose(), this._sdfConverter.dispose(), this._spriteMosaic = null, this._glyphMosaic = null, this._rasterizer = null, this._sdfConverter = null, this._hashToBindingIndex.clear(), this._hashToBindingIndex = null, this._bindingInfos = null, this._ongoingRasterizations.clear(), this._ongoingRasterizations = null;
          }
        }, {
          key: "sprites",
          get: function get() {
            return this._spriteMosaic;
          }
        }, {
          key: "glyphs",
          get: function get() {
            return this._glyphMosaic;
          }
        }, {
          key: "rasterizeItem",
          value: function () {
            var _rasterizeItem = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee24(e, i, s, r) {
              var _this43 = this;

              var t, _t41, a;

              return regeneratorRuntime.wrap(function _callee24$(_context24) {
                while (1) {
                  switch (_context24.prev = _context24.next) {
                    case 0:
                      if (!Object(_core_maybe_js__WEBPACK_IMPORTED_MODULE_1__["isNone"])(e)) {
                        _context24.next = 2;
                        break;
                      }

                      return _context24.abrupt("return", (F("mapview-null-resource", "Unable to rasterize null resource"), null));

                    case 2:
                      _context24.t0 = e.type;
                      _context24.next = _context24.t0 === "CIMTextSymbol" ? 5 : _context24.t0 === "esriTS" ? 5 : _context24.t0 === "esriSMS" ? 9 : _context24.t0 === "esriPMS" ? 9 : _context24.t0 === "esriSFS" ? 9 : _context24.t0 === "esriPFS" ? 9 : _context24.t0 === "esriSLS" ? 9 : 9;
                      break;

                    case 5:
                      _context24.next = 7;
                      return this._rasterizeText(e, s, r);

                    case 7:
                      t = _context24.sent;
                      return _context24.abrupt("return", (t.forEach(function (e) {
                        return _this43._setTextureBinding(_enums_js__WEBPACK_IMPORTED_MODULE_12__["MosaicType"].GLYPH, e);
                      }), {
                        glyphMosaicItems: t
                      }));

                    case 9:
                      if (!((a = e).type && -1 !== a.type.toLowerCase().indexOf("3d"))) {
                        _context24.next = 11;
                        break;
                      }

                      return _context24.abrupt("return", (F("mapview-invalid-type", "MapView does not support symbol type: ".concat(e.type), e), null));

                    case 11:
                      _context24.next = 13;
                      return this._rasterizeSpriteSymbol(e, i, r);

                    case 13:
                      _t41 = _context24.sent;
                      return _context24.abrupt("return", (Object(_util_Result_js__WEBPACK_IMPORTED_MODULE_20__["ok"])(_t41) && _t41 && this._setTextureBinding(_enums_js__WEBPACK_IMPORTED_MODULE_12__["MosaicType"].SPRITE, _t41), {
                        spriteMosaicItem: _t41
                      }));

                    case 15:
                    case "end":
                      return _context24.stop();
                  }
                }
              }, _callee24, this);
            }));

            function rasterizeItem(_x33, _x34, _x35, _x36) {
              return _rasterizeItem.apply(this, arguments);
            }

            return rasterizeItem;
          }()
        }, {
          key: "bindTextures",
          value: function bindTextures(e, t, i) {
            var s = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : !1;
            if (0 === i.textureBinding) return;
            var r = this._bindingInfos[i.textureBinding - 1],
                a = r.page,
                n = s ? 9987 : 9729;

            switch (r.mosaicType) {
              case _enums_js__WEBPACK_IMPORTED_MODULE_12__["MosaicType"].SPRITE:
                {
                  var _i27 = this.sprites.getWidth(a),
                      _s30 = this.sprites.getHeight(a),
                      _r22 = Object(_chunks_vec2_js__WEBPACK_IMPORTED_MODULE_7__["s"])(z, _i27, _s30);

                  return this._spriteMosaic.bind(e, n, a, _definitions_js__WEBPACK_IMPORTED_MODULE_8__["TEXTURE_BINDING_SPRITE_ATLAS"]), t.setUniform1i("u_texture", _definitions_js__WEBPACK_IMPORTED_MODULE_8__["TEXTURE_BINDING_SPRITE_ATLAS"]), void t.setUniform2fv("u_mosaicSize", _r22);
                }

              case _enums_js__WEBPACK_IMPORTED_MODULE_12__["MosaicType"].GLYPH:
                {
                  var _i28 = this.glyphs.width,
                      _s31 = this.glyphs.height,
                      _r23 = Object(_chunks_vec2_js__WEBPACK_IMPORTED_MODULE_7__["s"])(z, _i28, _s31);

                  return this._glyphMosaic.bind(e, n, a, _definitions_js__WEBPACK_IMPORTED_MODULE_8__["TEXTURE_BINDING_GLYPH_ATLAS"]), t.setUniform1i("u_texture", _definitions_js__WEBPACK_IMPORTED_MODULE_8__["TEXTURE_BINDING_GLYPH_ATLAS"]), void t.setUniform2fv("u_mosaicSize", _r23);
                }

              default:
                j.error("mapview-texture-manager", "Cannot handle unknown type ".concat(r.mosaicType));
            }
          }
        }, {
          key: "_hashMosaic",
          value: function _hashMosaic(e, t) {
            return 1 | e << 1 | (t.sdf ? 1 : 0) << 2 | t.page << 3;
          }
        }, {
          key: "_setTextureBinding",
          value: function _setTextureBinding(e, t) {
            var i = this._hashMosaic(e, t);

            if (!this._hashToBindingIndex.has(i)) {
              var s = P.fromMosaic(e, t),
                  r = this._bindingInfos.length + 1;
              this._hashToBindingIndex.set(i, r), this._bindingInfos.push(s);
            }

            t.textureBinding = this._hashToBindingIndex.get(i);
          }
        }, {
          key: "_rasterizeText",
          value: function () {
            var _rasterizeText2 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee25(e, t, i) {
              var s, r, a;
              return regeneratorRuntime.wrap(function _callee25$(_context25) {
                while (1) {
                  switch (_context25.prev = _context25.next) {
                    case 0:
                      s = Object(_fontUtils_js__WEBPACK_IMPORTED_MODULE_13__["getFullyQualifiedFontName"])(e.font), r = this._invalidFontsMap.has(s), a = t || function (e) {
                        var t = [];

                        for (var _i29 = 0; _i29 < e.length; _i29++) {
                          t.push(e.charCodeAt(_i29));
                        }

                        return t;
                      }(Object(_util_BidiText_js__WEBPACK_IMPORTED_MODULE_10__["bidiText"])(e.text)[0]);
                      _context25.prev = 1;
                      _context25.next = 4;
                      return this._glyphMosaic.getGlyphItems(r ? "arial-unicode-ms-regular" : s, a, i);

                    case 4:
                      return _context25.abrupt("return", _context25.sent);

                    case 7:
                      _context25.prev = 7;
                      _context25.t0 = _context25["catch"](1);
                      return _context25.abrupt("return", (F("mapview-invalid-resource", "Couldn't find font ".concat(s, ". Falling back to Arial Unicode MS Regular")), this._invalidFontsMap.set(s, !0), this._glyphMosaic.getGlyphItems("arial-unicode-ms-regular", a, i)));

                    case 10:
                    case "end":
                      return _context25.stop();
                  }
                }
              }, _callee25, this, [[1, 7]]);
            }));

            function _rasterizeText(_x37, _x38, _x39) {
              return _rasterizeText2.apply(this, arguments);
            }

            return _rasterizeText;
          }()
        }, {
          key: "_rasterizeSpriteSymbol",
          value: function () {
            var _rasterizeSpriteSymbol2 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee26(e, t, i) {
              var r, a, _t42, _i30, s, n;

              return regeneratorRuntime.wrap(function _callee26$(_context26) {
                while (1) {
                  switch (_context26.prev = _context26.next) {
                    case 0:
                      if (!function (e) {
                        switch (e.type) {
                          case "CIMSolidStroke":
                          case "CIMSolidFill":
                            return !0;

                          case "esriSFS":
                            return "esriSFSSolid" === e.style || "esriSFSNull" === e.style;

                          case "esriSLS":
                            return "esriSLSSolid" === e.style || "esriSLSNull" === e.style;

                          default:
                            return !1;
                        }
                      }(e)) {
                        _context26.next = 2;
                        break;
                      }

                      return _context26.abrupt("return", null);

                    case 2:
                      r = Object(_util_symbolUtils_js__WEBPACK_IMPORTED_MODULE_21__["keyFromSymbol"])(e);

                      if (!this._spriteMosaic.has(r)) {
                        _context26.next = 5;
                        break;
                      }

                      return _context26.abrupt("return", this._spriteMosaic.getSpriteItem(r));

                    case 5:
                      if (!(R(e) || function (e) {
                        return e.url || e.imageData;
                      }(e))) {
                        _context26.next = 7;
                        break;
                      }

                      return _context26.abrupt("return", this._handleAsyncResource(r, e, i));

                    case 7:
                      a = this._rasterizer.rasterizeJSONResource(e, t);

                      if (!a) {
                        _context26.next = 11;
                        break;
                      }

                      _t42 = a.size, _i30 = a.image, s = a.sdf, n = a.simplePattern;
                      return _context26.abrupt("return", this._addItemToMosaic(r, _t42, {
                        type: "static",
                        data: _i30
                      }, C(e), s, n));

                    case 11:
                      return _context26.abrupt("return", new _core_Error_js__WEBPACK_IMPORTED_MODULE_3__["default"]("TextureManager", "unrecognized or null rasterized image"));

                    case 12:
                    case "end":
                      return _context26.stop();
                  }
                }
              }, _callee26, this);
            }));

            function _rasterizeSpriteSymbol(_x40, _x41, _x42) {
              return _rasterizeSpriteSymbol2.apply(this, arguments);
            }

            return _rasterizeSpriteSymbol;
          }()
        }, {
          key: "_handleAsyncResource",
          value: function () {
            var _handleAsyncResource2 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee27(e, t, i) {
              var s;
              return regeneratorRuntime.wrap(function _callee27$(_context27) {
                while (1) {
                  switch (_context27.prev = _context27.next) {
                    case 0:
                      if (!this._ongoingRasterizations.has(e)) {
                        _context27.next = 2;
                        break;
                      }

                      return _context27.abrupt("return", this._ongoingRasterizations.get(e));

                    case 2:
                      s = R(t) ? this._handleSVG(t, e, i) : this._handleImage(t, e, i), this._ongoingRasterizations.set(e, s);
                      _context27.prev = 3;
                      _context27.next = 6;
                      return s;

                    case 6:
                      this._ongoingRasterizations["delete"](e);

                      _context27.next = 12;
                      break;

                    case 9:
                      _context27.prev = 9;
                      _context27.t0 = _context27["catch"](3);

                      this._ongoingRasterizations["delete"](e);

                    case 12:
                      return _context27.abrupt("return", s);

                    case 13:
                    case "end":
                      return _context27.stop();
                  }
                }
              }, _callee27, this, [[3, 9]]);
            }));

            function _handleAsyncResource(_x43, _x44, _x45) {
              return _handleAsyncResource2.apply(this, arguments);
            }

            return _handleAsyncResource;
          }()
        }, {
          key: "_handleSVG",
          value: function () {
            var _handleSVG2 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee28(e, t, i) {
              var s, r;
              return regeneratorRuntime.wrap(function _callee28$(_context28) {
                while (1) {
                  switch (_context28.prev = _context28.next) {
                    case 0:
                      s = [126, 126];
                      _context28.next = 3;
                      return this._sdfConverter.draw(e.path, i);

                    case 3:
                      r = _context28.sent;
                      return _context28.abrupt("return", this._addItemToMosaic(t, s, {
                        type: "static",
                        data: new Uint32Array(r.buffer)
                      }, !1, !0, !0));

                    case 5:
                    case "end":
                      return _context28.stop();
                  }
                }
              }, _callee28, this);
            }));

            function _handleSVG(_x46, _x47, _x48) {
              return _handleSVG2.apply(this, arguments);
            }

            return _handleSVG;
          }()
        }, {
          key: "_handleGIFOrPNG",
          value: function () {
            var _handleGIFOrPNG2 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee31(e, t, i) {
              var a, o, c, h, d, u, _i31, s, _this$_rasterizer$ras, r, n;

              return regeneratorRuntime.wrap(function _callee31$(_context31) {
                while (1) {
                  switch (_context31.prev = _context31.next) {
                    case 0:
                      _context31.next = 2;
                      return function () {
                        var _ref10 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee29(e, t) {
                          var i, a, o, _e44, _t43, s, r, _e45, _yield$Object3, _e46;

                          return regeneratorRuntime.wrap(function _callee29$(_context29) {
                            while (1) {
                              switch (_context29.prev = _context29.next) {
                                case 0:
                                  i = e.imageData ? "data:".concat(e.contentType, ";base64,").concat(e.imageData) : e.url;
                                  o = ";base64,";

                                  if (!(-1 !== i.indexOf(o))) {
                                    _context29.next = 8;
                                    break;
                                  }

                                  _e44 = i.indexOf(o) + o.length, _t43 = i.substring(_e44), s = atob(_t43), r = new Uint8Array(s.length);

                                  for (_e45 = 0; _e45 < s.length; _e45++) {
                                    r[_e45] = s.charCodeAt(_e45);
                                  }

                                  a = r.buffer;
                                  _context29.next = 20;
                                  break;

                                case 8:
                                  _context29.prev = 8;
                                  _context29.next = 11;
                                  return Object(_request_js__WEBPACK_IMPORTED_MODULE_6__["default"])(i, _objectSpread({
                                    responseType: "array-buffer"
                                  }, t));

                                case 11:
                                  _yield$Object3 = _context29.sent;
                                  _e46 = _yield$Object3.data;
                                  a = _e46;
                                  _context29.next = 20;
                                  break;

                                case 16:
                                  _context29.prev = 16;
                                  _context29.t0 = _context29["catch"](8);

                                  if (Object(_core_promiseUtils_js__WEBPACK_IMPORTED_MODULE_4__["isAbortError"])(_context29.t0)) {
                                    _context29.next = 20;
                                    break;
                                  }

                                  return _context29.abrupt("return", new _core_Error_js__WEBPACK_IMPORTED_MODULE_3__["default"]("mapview-invalid-resource", "Could not fetch requested resource at ".concat(i)));

                                case 20:
                                  return _context29.abrupt("return", a);

                                case 21:
                                case "end":
                                  return _context29.stop();
                              }
                            }
                          }, _callee29, null, [[8, 16]]);
                        }));

                        return function (_x52, _x53) {
                          return _ref10.apply(this, arguments);
                        };
                      }()(e, i);

                    case 2:
                      a = _context31.sent;

                      if (!Object(_util_Result_js__WEBPACK_IMPORTED_MODULE_20__["ok"])(a)) {
                        _context31.next = 36;
                        break;
                      }

                      o = Object(_animatedFormats_gif_js__WEBPACK_IMPORTED_MODULE_19__["isGIF"])(a), c = Object(_animatedFormats_apng_js__WEBPACK_IMPORTED_MODULE_18__["isPNG"])(a);

                      if (!(!o && !c)) {
                        _context31.next = 7;
                        break;
                      }

                      return _context31.abrupt("return", new _core_Error_js__WEBPACK_IMPORTED_MODULE_3__["default"]("mapview-invalid-resource", "Image data is neither GIF nor PNG!"));

                    case 7:
                      _context31.prev = 7;

                      if (!(o && Object(_animatedFormats_gif_js__WEBPACK_IMPORTED_MODULE_19__["isAnimatedGIF"])(a))) {
                        _context31.next = 14;
                        break;
                      }

                      _context31.next = 11;
                      return _animatedFormats_gif_js__WEBPACK_IMPORTED_MODULE_19__["default"].create(a, i);

                    case 11:
                      h = _context31.sent;
                      _context31.next = 19;
                      break;

                    case 14:
                      _context31.t0 = c && Object(_animatedFormats_apng_js__WEBPACK_IMPORTED_MODULE_18__["isAnimatedPNG"])(a);

                      if (!_context31.t0) {
                        _context31.next = 19;
                        break;
                      }

                      _context31.next = 18;
                      return _animatedFormats_apng_js__WEBPACK_IMPORTED_MODULE_18__["default"].create(a, i);

                    case 18:
                      h = _context31.sent;

                    case 19:
                      _context31.next = 25;
                      break;

                    case 21:
                      _context31.prev = 21;
                      _context31.t1 = _context31["catch"](7);

                      if (Object(_core_promiseUtils_js__WEBPACK_IMPORTED_MODULE_4__["isAbortError"])(_context31.t1)) {
                        _context31.next = 25;
                        break;
                      }

                      return _context31.abrupt("return", new _core_Error_js__WEBPACK_IMPORTED_MODULE_3__["default"]("mapview-invalid-resource", "Could not fetch requested resource!"));

                    case 25:
                      if (!(h && Object(_util_Result_js__WEBPACK_IMPORTED_MODULE_20__["ok"])(h))) {
                        _context31.next = 27;
                        break;
                      }

                      return _context31.abrupt("return", this._addItemToMosaic(t, [h.width, h.height], {
                        type: "animated",
                        data: h
                      }, C(e), !1, !1));

                    case 27:
                      d = new Blob([a], {
                        type: o ? "image/gif" : "image/png"
                      });
                      _context31.next = 30;
                      return function () {
                        var _ref11 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee30(e) {
                          var t, _yield$Object4, _e47;

                          return regeneratorRuntime.wrap(function _callee30$(_context30) {
                            while (1) {
                              switch (_context30.prev = _context30.next) {
                                case 0:
                                  t = window.URL.createObjectURL(e);
                                  _context30.prev = 1;
                                  _context30.next = 4;
                                  return Object(_request_js__WEBPACK_IMPORTED_MODULE_6__["default"])(t, {
                                    responseType: "image"
                                  });

                                case 4:
                                  _yield$Object4 = _context30.sent;
                                  _e47 = _yield$Object4.data;
                                  return _context30.abrupt("return", (window.URL.revokeObjectURL(t), _e47));

                                case 9:
                                  _context30.prev = 9;
                                  _context30.t0 = _context30["catch"](1);
                                  return _context30.abrupt("return", (window.URL.revokeObjectURL(t), new _core_Error_js__WEBPACK_IMPORTED_MODULE_3__["default"]("mapview-invalid-resource", "Could not fetch requested resource at ".concat(t))));

                                case 12:
                                case "end":
                                  return _context30.stop();
                              }
                            }
                          }, _callee30, null, [[1, 9]]);
                        }));

                        return function (_x54) {
                          return _ref11.apply(this, arguments);
                        };
                      }()(d);

                    case 30:
                      u = _context31.sent;

                      if (!(u && u instanceof HTMLImageElement)) {
                        _context31.next = 36;
                        break;
                      }

                      _i31 = u.width, s = u.height;
                      "esriPMS" === e.type && (_i31 = Math.round(U(u.width, e.width)), s = Math.round(u.height * (_i31 / u.width)));
                      _this$_rasterizer$ras = this._rasterizer.rasterizeImageResource(_i31, s, u, e.colorSubstitutions), r = _this$_rasterizer$ras.size, a = _this$_rasterizer$ras.sdf, n = _this$_rasterizer$ras.image;
                      return _context31.abrupt("return", this._addItemToMosaic(t, r, {
                        type: "static",
                        data: n
                      }, C(e), a, !1));

                    case 36:
                      return _context31.abrupt("return", new _core_Error_js__WEBPACK_IMPORTED_MODULE_3__["default"]("mapview-invalid-resource", "Could not handle resource!"));

                    case 37:
                    case "end":
                      return _context31.stop();
                  }
                }
              }, _callee31, this, [[7, 21]]);
            }));

            function _handleGIFOrPNG(_x49, _x50, _x51) {
              return _handleGIFOrPNG2.apply(this, arguments);
            }

            return _handleGIFOrPNG;
          }()
        }, {
          key: "_handleImage",
          value: function () {
            var _handleImage2 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee32(e, t, i) {
              var o, _yield$Object5, s, r, c, _this$_rasterizer$ras2, h, d, u;

              return regeneratorRuntime.wrap(function _callee32$(_context32) {
                while (1) {
                  switch (_context32.prev = _context32.next) {
                    case 0:
                      if (!(function (e) {
                        return e.url && -1 !== e.url.indexOf(".gif") || e.contentType && "image/gif" === e.contentType || e.imageData && -1 !== e.imageData.indexOf("data:image/gif");
                      }(e) || function (e) {
                        return e.url && -1 !== e.url.indexOf(".png") || e.contentType && "image/png" === e.contentType || e.imageData && -1 !== e.imageData.indexOf("data:image/png");
                      }(e))) {
                        _context32.next = 2;
                        break;
                      }

                      return _context32.abrupt("return", this._handleGIFOrPNG(e, t, i));

                    case 2:
                      o = e.imageData ? "data:".concat(e.contentType, ";base64,").concat(e.imageData) : e.url;
                      _context32.prev = 3;
                      _context32.next = 6;
                      return Object(_request_js__WEBPACK_IMPORTED_MODULE_6__["default"])(o, _objectSpread({
                        responseType: "image"
                      }, i));

                    case 6:
                      _yield$Object5 = _context32.sent;
                      s = _yield$Object5.data;
                      -1 !== o.indexOf("data:image/svg+xml") && (s.width = Object(_core_screenUtils_js__WEBPACK_IMPORTED_MODULE_5__["pt2px"])(e.width), s.height = Object(_core_screenUtils_js__WEBPACK_IMPORTED_MODULE_5__["pt2px"])(e.height));
                      r = s.width, c = s.height;
                      "esriPMS" === e.type && (r = Math.round(U(s.width, e.width)), c = Math.round(s.height * (r / s.width)));
                      _this$_rasterizer$ras2 = this._rasterizer.rasterizeImageResource(r, c, s, e.colorSubstitutions), h = _this$_rasterizer$ras2.size, d = _this$_rasterizer$ras2.sdf, u = _this$_rasterizer$ras2.image;
                      return _context32.abrupt("return", this._addItemToMosaic(t, h, {
                        type: "static",
                        data: u
                      }, C(e), d, !1));

                    case 15:
                      _context32.prev = 15;
                      _context32.t0 = _context32["catch"](3);

                      if (Object(_core_promiseUtils_js__WEBPACK_IMPORTED_MODULE_4__["isAbortError"])(_context32.t0)) {
                        _context32.next = 19;
                        break;
                      }

                      return _context32.abrupt("return", new _core_Error_js__WEBPACK_IMPORTED_MODULE_3__["default"]("mapview-invalid-resource", "Could not fetch requested resource at ".concat(o)));

                    case 19:
                    case "end":
                      return _context32.stop();
                  }
                }
              }, _callee32, this, [[3, 15]]);
            }));

            function _handleImage(_x55, _x56, _x57) {
              return _handleImage2.apply(this, arguments);
            }

            return _handleImage;
          }()
        }, {
          key: "_addItemToMosaic",
          value: function _addItemToMosaic(e, t, i, s, r, a) {
            return this._spriteMosaic.addSpriteItem(e, t, i, s, r, a);
          }
        }]);

        return _class15;
      }();
      /***/

    },

    /***/
    "vEyU":
    /*!**********************************************************************************!*\
      !*** ./node_modules/@arcgis/core/views/2d/engine/webgl/shaders/BlendPrograms.js ***!
      \**********************************************************************************/

    /*! exports provided: blend */

    /***/
    function vEyU(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "blend", function () {
        return a;
      });
      /* harmony import */


      var _sources_resolver_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ./sources/resolver.js */
      "vpBa");
      /*
      All material copyright ESRI, All Rights Reserved, unless otherwise specified.
      See https://js.arcgis.com/4.18/esri/copyright.txt for details.
      */


      var r = function r(e) {
        return "#define ".concat(function (e) {
          return e.replace("-", "_").toUpperCase();
        }(e), "\n");
      },
          a = {
        name: "blend",
        attributes: {
          a_pos: 0,
          a_tex: 1
        },
        shaders: function shaders(a) {
          return {
            vertexShader: r(a) + Object(_sources_resolver_js__WEBPACK_IMPORTED_MODULE_0__["resolveIncludes"])("blend/blend.vert"),
            fragmentShader: r(a) + Object(_sources_resolver_js__WEBPACK_IMPORTED_MODULE_0__["resolveIncludes"])("blend/blend.frag")
          };
        }
      };
      /***/

    },

    /***/
    "vYD5":
    /*!***************************************************************************************!*\
      !*** ./node_modules/@arcgis/core/views/2d/engine/vectorTiles/shaders/ProgramCache.js ***!
      \***************************************************************************************/

    /*! exports provided: default */

    /***/
    function vYD5(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony import */


      var _core_has_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ../../../../../core/has.js */
      "wSAH");
      /* harmony import */


      var _core_mathUtils_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ../../../../../core/mathUtils.js */
      "OKTS");
      /* harmony import */


      var _chunks_builtins_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ../../../../../chunks/builtins.js */
      "n4uK");
      /* harmony import */


      var _webgl_FramebufferObject_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ../../../../webgl/FramebufferObject.js */
      "0meK");
      /* harmony import */


      var _webgl_ProgramCache_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ../../../../webgl/ProgramCache.js */
      "kGdt");
      /* harmony import */


      var _webgl_RenderingContext_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ../../../../webgl/RenderingContext.js */
      "bfJE");
      /* harmony import */


      var _Programs_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ./Programs.js */
      "6ldq");
      /*
      All material copyright ESRI, All Rights Reserved, unless otherwise specified.
      See https://js.arcgis.com/4.18/esri/copyright.txt for details.
      */

      /* harmony default export */


      __webpack_exports__["default"] = /*#__PURE__*/function () {
        function _class16(t) {
          _classCallCheck(this, _class16);

          this._cache = new Array(8);

          for (var r = 0; r < 8; r++) {
            this._cache[r] = {};
          }

          this._programRepo = new _webgl_ProgramCache_js__WEBPACK_IMPORTED_MODULE_4__["default"](t);
        }

        _createClass(_class16, [{
          key: "dispose",
          value: function dispose() {
            this._programRepo && (this._programRepo.dispose(), this._programRepo = null);
          }
        }, {
          key: "getProgram",
          value: function getProgram(r, t, e) {
            var s = this._cache[r];

            if (!s[t]) {
              var a = this._programRepo.getProgram(this._getProgramTemplate(r), e);

              s[t] = a;
            }

            return s[t];
          }
        }, {
          key: "getProgramAttributes",
          value: function getProgramAttributes(r) {
            switch (r) {
              case 0:
                return _Programs_js__WEBPACK_IMPORTED_MODULE_6__["background"].attributes;

              case 5:
                return _Programs_js__WEBPACK_IMPORTED_MODULE_6__["circle"].attributes;

              case 1:
                return _Programs_js__WEBPACK_IMPORTED_MODULE_6__["fill"].attributes;

              case 4:
                return _Programs_js__WEBPACK_IMPORTED_MODULE_6__["icon"].attributes;

              case 3:
                return _Programs_js__WEBPACK_IMPORTED_MODULE_6__["line"].attributes;

              case 2:
                return _Programs_js__WEBPACK_IMPORTED_MODULE_6__["outline"].attributes;

              case 6:
                return _Programs_js__WEBPACK_IMPORTED_MODULE_6__["text"].attributes;

              default:
                return null;
            }
          }
        }, {
          key: "_getProgramTemplate",
          value: function _getProgramTemplate(r) {
            switch (r) {
              case 0:
                return _Programs_js__WEBPACK_IMPORTED_MODULE_6__["background"];

              case 5:
                return _Programs_js__WEBPACK_IMPORTED_MODULE_6__["circle"];

              case 1:
                return _Programs_js__WEBPACK_IMPORTED_MODULE_6__["fill"];

              case 4:
                return _Programs_js__WEBPACK_IMPORTED_MODULE_6__["icon"];

              case 3:
                return _Programs_js__WEBPACK_IMPORTED_MODULE_6__["line"];

              case 2:
                return _Programs_js__WEBPACK_IMPORTED_MODULE_6__["outline"];

              case 6:
                return _Programs_js__WEBPACK_IMPORTED_MODULE_6__["text"];

              default:
                return null;
            }
          }
        }]);

        return _class16;
      }();
      /***/

    },

    /***/
    "viFY":
    /*!********************************************************************************!*\
      !*** ./node_modules/@arcgis/core/views/2d/engine/webgl/effects/BlendEffect.js ***!
      \********************************************************************************/

    /*! exports provided: BlendEffect */

    /***/
    function viFY(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "BlendEffect", function () {
        return u;
      });
      /* harmony import */


      var _core_has_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ../../../../../core/has.js */
      "wSAH");
      /* harmony import */


      var _core_maybe_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ../../../../../core/maybe.js */
      "srIe");
      /* harmony import */


      var _core_Logger_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ../../../../../core/Logger.js */
      "6S2I");
      /* harmony import */


      var _core_Error_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ../../../../../core/Error.js */
      "zlDU");
      /* harmony import */


      var _chunks_builtins_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ../../../../../chunks/builtins.js */
      "n4uK");
      /* harmony import */


      var _webgl_Texture_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ../../../../webgl/Texture.js */
      "of9L");
      /* harmony import */


      var _webgl_FramebufferObject_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ../../../../webgl/FramebufferObject.js */
      "0meK");
      /* harmony import */


      var _webgl_ProgramCache_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! ../../../../webgl/ProgramCache.js */
      "kGdt");
      /* harmony import */


      var _webgl_RenderingContext_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! ../../../../webgl/RenderingContext.js */
      "bfJE");
      /* harmony import */


      var _enums_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! ../enums.js */
      "yE7X");
      /* harmony import */


      var _VertexStream_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
      /*! ../VertexStream.js */
      "gjrC");
      /* harmony import */


      var _shaders_BlendPrograms_js__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
      /*! ../shaders/BlendPrograms.js */
      "vEyU");
      /*
      All material copyright ESRI, All Rights Reserved, unless otherwise specified.
      See https://js.arcgis.com/4.18/esri/copyright.txt for details.
      */


      var d = _core_Logger_js__WEBPACK_IMPORTED_MODULE_2__["default"].getLogger("esri.views.2d.engine.webgl.effects.blendEffects.BlendEffect");

      var u = /*#__PURE__*/function () {
        function u() {
          _classCallCheck(this, u);

          this._size = [0, 0];
        }

        _createClass(u, [{
          key: "dispose",
          value: function dispose(e) {
            this._backBufferTexture && (this._backBufferTexture.dispose(), this._backBufferTexture = null), this._programCache && (this._programCache.dispose(), this._programCache = null), this._quad && (this._quad.dispose(), this._quad = null);
          }
        }, {
          key: "draw",
          value: function draw(e, r, i, s, n) {
            var _u2 = e.context,
                c = e.drawPhase;
            if (this._setupShader(_u2), s && "normal" !== s && c !== _enums_js__WEBPACK_IMPORTED_MODULE_9__["WGLDrawPhase"].LABEL) return void this._drawBlended(e, r, i, s, n);

            var m = this._programCache.getProgram(_shaders_BlendPrograms_js__WEBPACK_IMPORTED_MODULE_11__["blend"], "normal");

            if (!m) return void d.error(new _core_Error_js__WEBPACK_IMPORTED_MODULE_3__["default"]("mapview-BlendEffect", 'Error creating shader program for blend mode "normal"'));
            _u2.bindProgram(m), r.setSamplingMode(i), _u2.bindTexture(r, 0), m.setUniform1i("u_layerTexture", 0), m.setUniform1f("u_opacity", n), _u2.setBlendingEnabled(!0), _u2.setBlendFunction(1, 771);
            var f = this._quad;
            f.draw(), f.unbind();
          }
        }, {
          key: "_drawBlended",
          value: function _drawBlended(r, i, s, o, n) {
            var _u3 = r.context,
                c = r.state,
                m = r.pixelRatio,
                f = r.inFadeTransition,
                h = c.size,
                l = _u3.getBoundFramebufferObject();

            var p, g;

            if (Object(_core_maybe_js__WEBPACK_IMPORTED_MODULE_1__["isSome"])(l)) {
              var e = l.descriptor;
              p = e.width, g = e.height;
            } else p = Math.round(m * h[0]), g = Math.round(m * h[1]);

            this._createOrResizeTexture(r, p, g);

            var _ = this._backBufferTexture;
            l.copyToTexture(0, 0, p, g, 0, 0, _), _u3.setStencilTestEnabled(!1), _u3.setStencilWriteMask(0), _u3.setBlendingEnabled(!0), _u3.setDepthTestEnabled(!1), _u3.setDepthWriteEnabled(!1);

            var b = this._programCache.getProgram(_shaders_BlendPrograms_js__WEBPACK_IMPORTED_MODULE_11__["blend"], o);

            if (!b) return void d.error(new _core_Error_js__WEBPACK_IMPORTED_MODULE_3__["default"]("mapview-BlendEffect", "Error creating shader program for blend mode ".concat(o)));
            _u3.bindProgram(b), _.setSamplingMode(s), _u3.bindTexture(_, 0), b.setUniform1i("u_backbufferTexture", 0), i.setSamplingMode(s), _u3.bindTexture(i, 1), b.setUniform1i("u_layerTexture", 1), b.setUniform1f("u_opacity", n), b.setUniform1f("u_inFadeOpacity", f ? 1 : 0), _u3.setBlendFunction(1, 0);
            var x = this._quad;
            x.draw(), x.unbind(), _u3.setBlendFunction(1, 771);
          }
        }, {
          key: "_setupShader",
          value: function _setupShader(e) {
            this._programCache || (this._programCache = new _webgl_ProgramCache_js__WEBPACK_IMPORTED_MODULE_7__["default"](e), this._quad || (this._quad = new _VertexStream_js__WEBPACK_IMPORTED_MODULE_10__["default"](e, [-1, -1, 1, -1, -1, 1, 1, 1])));
          }
        }, {
          key: "_createOrResizeTexture",
          value: function _createOrResizeTexture(e, r, t) {
            var s = e.context;
            null !== this._backBufferTexture && r === this._size[0] && t === this._size[1] || (this._backBufferTexture ? this._backBufferTexture.resize(r, t) : this._backBufferTexture = new _webgl_Texture_js__WEBPACK_IMPORTED_MODULE_5__["default"](s, {
              target: 3553,
              pixelFormat: 6408,
              internalFormat: 6408,
              dataType: 5121,
              wrapMode: 33071,
              samplingMode: 9729,
              flipped: !1,
              width: r,
              height: t
            }), this._size[0] = r, this._size[1] = t);
          }
        }]);

        return u;
      }();
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
        function _class17(e, r) {
          _classCallCheck(this, _class17);

          this._storage = new _MemCache_js__WEBPACK_IMPORTED_MODULE_0__["MemCacheStorage"](), this._storage.maxSize = e, r && this._storage.registerRemoveFunc("", r);
        }

        _createClass(_class17, [{
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

        return _class17;
      }();
      /***/

    },

    /***/
    "yCUC":
    /*!***************************************************************************************!*\
      !*** ./node_modules/@arcgis/core/views/2d/engine/webgl/collisions/LayerViewSorter.js ***!
      \***************************************************************************************/

    /*! exports provided: LayerViewSorter */

    /***/
    function yCUC(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "LayerViewSorter", function () {
        return s;
      });
      /* harmony import */


      var _core_Logger_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ../../../../../core/Logger.js */
      "6S2I");
      /* harmony import */


      var _core_Error_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ../../../../../core/Error.js */
      "zlDU");
      /*
      All material copyright ESRI, All Rights Reserved, unless otherwise specified.
      See https://js.arcgis.com/4.18/esri/copyright.txt for details.
      */


      var t = _core_Logger_js__WEBPACK_IMPORTED_MODULE_0__["default"].getLogger("esri.views.2d.engine.collisions.LayerViewSorter");

      function i(e) {
        return "esri.views.2d.layers.FeatureLayerView2D" === e.declaredClass || "esri.views.2d.layers.StreamLayerView2D" === e.declaredClass;
      }

      function a(e) {
        if (!e.layer || !e.layer.renderer) return !1;

        switch (e.layer.renderer.type) {
          case "class-breaks":
          case "simple":
          case "unique-value":
          case "dictionary":
          case "dot-density":
            return !0;

          default:
            return t.error(new _core_Error_js__WEBPACK_IMPORTED_MODULE_1__["default"]("mapview-labeling", "Renderer of type ".concat(e.layer.renderer.type, " does not currently support labeling"))), !1;
        }
      }

      var s = /*#__PURE__*/function () {
        function s(e, r) {
          _classCallCheck(this, s);

          this.registerLayer = e, this.unregisterLayer = r, this._layerViewState = new Map();
        }

        _createClass(s, [{
          key: "findIndex",
          value: function findIndex(e) {
            return e.view.allLayerViews.findIndex(function (r) {
              return r.uid === e.uid;
            });
          }
        }, {
          key: "update",
          value: function update(e) {
            var r = e.added,
                t = e.removed;

            var _iterator45 = _createForOfIteratorHelper(t),
                _step45;

            try {
              for (_iterator45.s(); !(_step45 = _iterator45.n()).done;) {
                var _e48 = _step45.value;
                i(_e48) && this._layerViewState.has(_e48) && this._deleteState(_e48);
              }
            } catch (err) {
              _iterator45.e(err);
            } finally {
              _iterator45.f();
            }

            var _iterator46 = _createForOfIteratorHelper(r),
                _step46;

            try {
              for (_iterator46.s(); !(_step46 = _iterator46.n()).done;) {
                var _e49 = _step46.value;
                i(_e49) && a(_e49) && !this._layerViewState.has(_e49) && this._createState(_e49);
              }
            } catch (err) {
              _iterator46.e(err);
            } finally {
              _iterator46.f();
            }

            this._recomputeOrder();
          }
        }, {
          key: "destroy",
          value: function destroy() {
            this._layerViewState.forEach(function (e) {
              return e.handles.forEach(function (e) {
                return e.remove();
              });
            });
          }
        }, {
          key: "_createState",
          value: function _createState(e) {
            var r = {
              priority: -1,
              handles: null
            };
            return r.handles = [e.layer.watch("visible", this._recomputeOrder.bind(this)), e.layer.watch("labelsVisible", this._recomputeOrder.bind(this)), e.layer.watch("labelingInfo", this._recomputeOrder.bind(this)), e.layer.watch("featureReduction", this._recomputeOrder.bind(this))], this._layerViewState.set(e, r), r;
          }
        }, {
          key: "_deleteState",
          value: function _deleteState(e) {
            if (!this._layerViewState.has(e)) return;

            var r = this._layerViewState.get(e);

            r.handles.forEach(function (e) {
              return e.remove();
            }), -1 !== r.priority && this.unregisterLayer(e), this._layerViewState["delete"](e);
          }
        }, {
          key: "_recomputeOrder",
          value: function _recomputeOrder() {
            var _this44 = this;

            this._layerViewState.forEach(function (e, r) {
              var t = r.view.map.allLayers.findIndex(function (e) {
                return e.uid === r.layer.uid;
              }),
                  i = r.layer,
                  a = i.featureReduction,
                  _s32 = a && "cluster" === a.type && a.labelsVisible && a.labelingInfo && a.labelingInfo.length,
                  l = i.labelsVisible && i.labelingInfo && i.labelingInfo.length || _s32,
                  n = i.visible && l ? 4294967295 - t : -1;

              n !== e.priority && (e.priority = n, _this44.unregisterLayer(r), -1 !== n && _this44.registerLayer(r, n));
            });
          }
        }]);

        return s;
      }();
      /***/

    },

    /***/
    "ygGI":
    /*!************************************************************************************************!*\
      !*** ./node_modules/@arcgis/core/views/2d/engine/webgl/effects/highlight/HighlightGradient.js ***!
      \************************************************************************************************/

    /*! exports provided: default */

    /***/
    function ygGI(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony import */


      var _core_has_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ../../../../../../core/has.js */
      "wSAH");
      /* harmony import */


      var _core_Logger_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ../../../../../../core/Logger.js */
      "6S2I");
      /* harmony import */


      var _definitions_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ../../definitions.js */
      "jIHu");
      /* harmony import */


      var _chunks_builtins_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ../../../../../../chunks/builtins.js */
      "n4uK");
      /* harmony import */


      var _webgl_Texture_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ../../../../../webgl/Texture.js */
      "of9L");
      /* harmony import */


      var _webgl_FramebufferObject_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ../../../../../webgl/FramebufferObject.js */
      "0meK");
      /* harmony import */


      var _webgl_RenderingContext_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ../../../../../webgl/RenderingContext.js */
      "bfJE");
      /* harmony import */


      var _parameters_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! ./parameters.js */
      "fGRN");
      /*
      All material copyright ESRI, All Rights Reserved, unless otherwise specified.
      See https://js.arcgis.com/4.18/esri/copyright.txt for details.
      */


      var n = _core_Logger_js__WEBPACK_IMPORTED_MODULE_1__["default"].getLogger("esri.views.2d.engine.webgl.painter.highlight.HighlightGradient");

      var h = [0, 0, 0, 0];
      /* harmony default export */

      __webpack_exports__["default"] = /*#__PURE__*/function () {
        function _class18() {
          _classCallCheck(this, _class18);

          this._convertedHighlightOptions = {
            fillColor: [.2 * .75, .6 * .75, .675, .75],
            outlineColor: [.2 * .9, .54, .81, .9],
            outlinePosition: _parameters_js__WEBPACK_IMPORTED_MODULE_7__["HIGHLIGHT_SIZING"].outlinePosition,
            outlineWidth: _parameters_js__WEBPACK_IMPORTED_MODULE_7__["HIGHLIGHT_SIZING"].outlineWidth,
            innerHaloWidth: _parameters_js__WEBPACK_IMPORTED_MODULE_7__["HIGHLIGHT_SIZING"].innerHaloWidth,
            outerHaloWidth: _parameters_js__WEBPACK_IMPORTED_MODULE_7__["HIGHLIGHT_SIZING"].outerHaloWidth
          }, this.shadeTexChanged = !0, this.texelData = new Uint8Array(4 * _parameters_js__WEBPACK_IMPORTED_MODULE_7__["SHADE_TEXTURE_SIZE"]), this.minMaxDistance = [0, 0];
        }

        _createClass(_class18, [{
          key: "setHighlightOptions",
          value: function setHighlightOptions(o) {
            var i = this._convertedHighlightOptions;
            var t, s;
            t = o, (s = i).fillColor[0] = t.color.r / 255, s.fillColor[1] = t.color.g / 255, s.fillColor[2] = t.color.b / 255, s.fillColor[3] = t.color.a, t.haloColor ? (s.outlineColor[0] = t.haloColor.r / 255, s.outlineColor[1] = t.haloColor.g / 255, s.outlineColor[2] = t.haloColor.b / 255, s.outlineColor[3] = t.haloColor.a) : (s.outlineColor[0] = s.fillColor[0], s.outlineColor[1] = s.fillColor[1], s.outlineColor[2] = s.fillColor[2], s.outlineColor[3] = s.fillColor[3]), s.fillColor[3] *= t.fillOpacity, s.outlineColor[3] *= t.haloOpacity, s.fillColor[0] *= s.fillColor[3], s.fillColor[1] *= s.fillColor[3], s.fillColor[2] *= s.fillColor[3], s.outlineColor[0] *= s.outlineColor[3], s.outlineColor[1] *= s.outlineColor[3], s.outlineColor[2] *= s.outlineColor[3], s.outlineWidth = _parameters_js__WEBPACK_IMPORTED_MODULE_7__["HIGHLIGHT_SIZING"].outlineWidth, s.outerHaloWidth = _parameters_js__WEBPACK_IMPORTED_MODULE_7__["HIGHLIGHT_SIZING"].outerHaloWidth, s.innerHaloWidth = _parameters_js__WEBPACK_IMPORTED_MODULE_7__["HIGHLIGHT_SIZING"].innerHaloWidth, s.outlinePosition = _parameters_js__WEBPACK_IMPORTED_MODULE_7__["HIGHLIGHT_SIZING"].outlinePosition;

            var a = i.outlinePosition - i.outlineWidth / 2 - i.outerHaloWidth,
                d = i.outlinePosition - i.outlineWidth / 2,
                u = i.outlinePosition + i.outlineWidth / 2,
                g = i.outlinePosition + i.outlineWidth / 2 + i.innerHaloWidth,
                C = Math.sqrt(Math.PI / 2) * _parameters_js__WEBPACK_IMPORTED_MODULE_7__["SIGMAS"][3],
                f = Math.abs(a) > C ? Math.round(10 * (Math.abs(a) - C)) / 10 : 0,
                c = Math.abs(g) > C ? Math.round(10 * (Math.abs(g) - C)) / 10 : 0;

            var m;
            f && !c ? n.error("The outer rim of the highlight is " + f + "px away from the edge of the feature; consider reducing some width values or shifting the outline position towards positive values (inwards).") : !f && c ? n.error("The inner rim of the highlight is " + c + "px away from the edge of the feature; consider reducing some width values or shifting the outline position towards negative values (outwards).") : f && c && n.error("The highlight is " + Math.max(f, c) + "px away from the edge of the feature; consider reducing some width values.");
            var p = [void 0, void 0, void 0, void 0];

            function x(o, i, t) {
              p[0] = (1 - t) * o[0] + t * i[0], p[1] = (1 - t) * o[1] + t * i[1], p[2] = (1 - t) * o[2] + t * i[2], p[3] = (1 - t) * o[3] + t * i[3];
            }

            var w = this.texelData;

            for (var _o16 = 0; _o16 < _parameters_js__WEBPACK_IMPORTED_MODULE_7__["SHADE_TEXTURE_SIZE"]; ++_o16) {
              var _i$outlineColor, _i$outlineColor2, _i$fillColor, _i$fillColor2;

              m = a + _o16 / (_parameters_js__WEBPACK_IMPORTED_MODULE_7__["SHADE_TEXTURE_SIZE"] - 1) * (g - a), m < a ? (p[4 * _o16 + 0] = 0, p[4 * _o16 + 1] = 0, p[4 * _o16 + 2] = 0, p[4 * _o16 + 3] = 0) : m < d ? x(h, i.outlineColor, (m - a) / (d - a)) : m < u ? (_i$outlineColor = i.outlineColor, _i$outlineColor2 = _slicedToArray(_i$outlineColor, 4), p[0] = _i$outlineColor2[0], p[1] = _i$outlineColor2[1], p[2] = _i$outlineColor2[2], p[3] = _i$outlineColor2[3], _i$outlineColor) : m < g ? x(i.outlineColor, i.fillColor, (m - u) / (g - u)) : (_i$fillColor = i.fillColor, _i$fillColor2 = _slicedToArray(_i$fillColor, 4), p[4 * _o16 + 0] = _i$fillColor2[0], p[4 * _o16 + 1] = _i$fillColor2[1], p[4 * _o16 + 2] = _i$fillColor2[2], p[4 * _o16 + 3] = _i$fillColor2[3], _i$fillColor), w[4 * _o16 + 0] = 255 * p[0], w[4 * _o16 + 1] = 255 * p[1], w[4 * _o16 + 2] = 255 * p[2], w[4 * _o16 + 3] = 255 * p[3];
            }

            this.minMaxDistance[0] = a, this.minMaxDistance[1] = g, this.shadeTexChanged = !0;
          }
        }, {
          key: "applyHighlightOptions",
          value: function applyHighlightOptions(o, e) {
            this.shadeTex || (this.shadeTex = new _webgl_Texture_js__WEBPACK_IMPORTED_MODULE_4__["default"](o, {
              target: 3553,
              pixelFormat: 6408,
              dataType: 5121,
              wrapMode: 33071,
              width: _parameters_js__WEBPACK_IMPORTED_MODULE_7__["SHADE_TEXTURE_SIZE"],
              height: 1,
              samplingMode: 9729
            })), this.shadeTexChanged && (this.shadeTex.updateData(0, 0, 0, _parameters_js__WEBPACK_IMPORTED_MODULE_7__["SHADE_TEXTURE_SIZE"], 1, this.texelData), this.shadeTexChanged = !1), o.bindTexture(this.shadeTex, _definitions_js__WEBPACK_IMPORTED_MODULE_2__["TEXTURE_BINDING_HIGHLIGHT_1"]), e.setUniform2fv("u_minMaxDistance", this.minMaxDistance);
          }
        }, {
          key: "destroy",
          value: function destroy() {
            this.shadeTex && (this.shadeTex.dispose(), this.shadeTex = null);
          }
        }]);

        return _class18;
      }();
      /***/

    }
  }]);
})();
//# sourceMappingURL=mapViewDeps-js-es5.js.map