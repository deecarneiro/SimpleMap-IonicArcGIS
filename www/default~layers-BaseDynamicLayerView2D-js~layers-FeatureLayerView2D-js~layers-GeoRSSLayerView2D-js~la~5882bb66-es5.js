(function () {
  function _createForOfIteratorHelper(o, allowArrayLike) { var it; if (typeof Symbol === "undefined" || o[Symbol.iterator] == null) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e8) { throw _e8; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = o[Symbol.iterator](); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e9) { didErr = true; err = _e9; }, f: function f() { try { if (!normalCompletion && it["return"] != null) it["return"](); } finally { if (didErr) throw err; } } }; }

  function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

  function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

  function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

  function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

  function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["default~layers-BaseDynamicLayerView2D-js~layers-FeatureLayerView2D-js~layers-GeoRSSLayerView2D-js~la~5882bb66"], {
    /***/
    "0X3F":
    /*!********************************************************!*\
      !*** ./node_modules/@arcgis/core/views/webgl/enums.js ***!
      \********************************************************/

    /*! exports provided: BASE_TEXTURE_UNIT */

    /***/
    function X3F(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "BASE_TEXTURE_UNIT", function () {
        return o;
      });
      /*
      All material copyright ESRI, All Rights Reserved, unless otherwise specified.
      See https://js.arcgis.com/4.18/esri/copyright.txt for details.
      */


      var o = 33984;
      /***/
    },

    /***/
    "0meK":
    /*!********************************************************************!*\
      !*** ./node_modules/@arcgis/core/views/webgl/FramebufferObject.js ***!
      \********************************************************************/

    /*! exports provided: default */

    /***/
    function meK(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony import */


      var _core_has_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ../../core/has.js */
      "wSAH");
      /* harmony import */


      var _core_Logger_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ../../core/Logger.js */
      "6S2I");
      /* harmony import */


      var _Texture_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./Texture.js */
      "of9L");
      /* harmony import */


      var _Renderbuffer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./Renderbuffer.js */
      "kbDN");
      /*
      All material copyright ESRI, All Rights Reserved, unless otherwise specified.
      See https://js.arcgis.com/4.18/esri/copyright.txt for details.
      */


      var s = _core_Logger_js__WEBPACK_IMPORTED_MODULE_1__["default"].getLogger("esri.views.webgl.FrameBufferObject");

      var r = /*#__PURE__*/function () {
        function r(t, s, n, o) {
          _classCallCheck(this, r);

          if (this._context = null, this._glName = null, this.id = h++, this._depthAttachment = null, this._stencilAttachment = null, this._colorAttachments = new Map(), this._initialized = !1, t.instanceCounter.increment(4, this), this._context = t, this._desc = _objectSpread({}, s), n) {
            var i;
            var c;

            if (Array.isArray(n)) {
              var _iterator = _createForOfIteratorHelper(n),
                  _step;

              try {
                for (_iterator.s(); !(_step = _iterator.n()).done;) {
                  var _s = _step.value;

                  var _r5 = _s.attachmentPoint,
                      _h = _s.texture,
                      _n = _h instanceof _Texture_js__WEBPACK_IMPORTED_MODULE_2__["default"] ? _h : new _Texture_js__WEBPACK_IMPORTED_MODULE_2__["default"](t, _h);

                  i = _n.descriptor, this._colorAttachments.set(_r5, _n), this._validateColorAttachmentPoint(_r5), this._validateTextureDimensions(i, this._desc);
                }
              } catch (err) {
                _iterator.e(err);
              } finally {
                _iterator.f();
              }
            } else n instanceof _Texture_js__WEBPACK_IMPORTED_MODULE_2__["default"] ? (i = n.descriptor, this._colorAttachments.set(36064, n)) : (i = n, this._colorAttachments.set(36064, new _Texture_js__WEBPACK_IMPORTED_MODULE_2__["default"](t, n))), 0 !== (null == (c = this._desc) ? void 0 : c.colorTarget) && console.error("Framebuffer is initialized with a texture however the descriptor indicates using a renderbuffer color attachment!"), this._validateTextureDimensions(i, this._desc);
          }

          if (o instanceof _Renderbuffer_js__WEBPACK_IMPORTED_MODULE_3__["default"]) {
            var a;

            var _t = null != (a = this._desc.depthStencilTarget) ? a : 3;

            2 === _t ? this._stencilAttachment = o : 1 === _t || 3 === _t ? this._depthAttachment = o : console.error('If a Renderbuffer is provided, "depthStencilTarget" must be one of STENCIL_RENDER_BUFFER, DEPTH_RENDER_BUFFER or DEPTH_STENCIL_RENDER_BUFFER'), r._validateBufferDimensions(o.descriptor, this._desc);
          } else if (o) {
            var _t2;

            this._context.capabilities.depthTexture || console.error("Extension WEBGL_depth_texture isn't supported therefore it is no possible to set the depth/stencil texture as an attachment!"), o instanceof _Texture_js__WEBPACK_IMPORTED_MODULE_2__["default"] ? (this._depthStencilTexture = o, _t2 = this._depthStencilTexture.descriptor) : (_t2 = o, this._depthStencilTexture = new _Texture_js__WEBPACK_IMPORTED_MODULE_2__["default"](this._context, _t2)), this._validateTextureDimensions(_t2, this._desc);
          }
        }

        _createClass(r, [{
          key: "dispose",
          value: function dispose() {
            if (!this._context) return;
            var t = this._context,
                e = t.getBoundFramebufferObject();

            if (this._disposeColorAttachments(), this._disposeDepthStencilAttachments(), this._glName) {
              t.gl.deleteFramebuffer(this._glName), this._glName = null;
            }

            t.bindFramebuffer(e), t.instanceCounter.decrement(4, this), this._context = null;
          }
        }, {
          key: "glName",
          get: function get() {
            return this._glName;
          }
        }, {
          key: "descriptor",
          get: function get() {
            return this._desc;
          }
        }, {
          key: "colorTexture",
          get: function get() {
            var t = this._colorAttachments.get(36064);

            return t && t instanceof _Texture_js__WEBPACK_IMPORTED_MODULE_2__["default"] ? t : null;
          }
        }, {
          key: "colorAttachment",
          get: function get() {
            return this._colorAttachments.get(36064);
          }
        }, {
          key: "depthStencilAttachment",
          get: function get() {
            return this._depthStencilTexture || this._depthAttachment || this._stencilAttachment;
          }
        }, {
          key: "depthStencilTexture",
          get: function get() {
            return this._depthStencilTexture;
          }
        }, {
          key: "width",
          get: function get() {
            return this._desc.width;
          }
        }, {
          key: "height",
          get: function get() {
            return this._desc.height;
          }
        }, {
          key: "getColorTexture",
          value: function getColorTexture(t) {
            var i = this._colorAttachments.get(t);

            return i && i instanceof _Texture_js__WEBPACK_IMPORTED_MODULE_2__["default"] ? i : null;
          }
        }, {
          key: "attachColorTexture",
          value: function attachColorTexture(t) {
            var e = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 36064;
            if (!t) return;

            this._validateColorAttachmentPoint(e);

            var i = t.descriptor;

            if (this._validateTextureDimensions(i, this._desc), this._disposeColorAttachments(), this._initialized) {
              this._context.bindFramebuffer(this);

              var _i = this._context.gl;

              _i.framebufferTexture2D(_i.FRAMEBUFFER, e, _i.TEXTURE_2D, t.glName, 0);
            }

            this._colorAttachments.set(e, t);
          }
        }, {
          key: "detachColorTexture",
          value: function detachColorTexture() {
            var t = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 36064;

            var i = this._colorAttachments.get(t);

            if (i instanceof _Texture_js__WEBPACK_IMPORTED_MODULE_2__["default"]) {
              var e = i;

              if (this._initialized) {
                this._context.bindFramebuffer(this);

                var _e = this._context.gl;

                _e.framebufferTexture2D(_e.FRAMEBUFFER, t, _e.TEXTURE_2D, null, 0);
              }

              return this._colorAttachments["delete"](t), e;
            }
          }
        }, {
          key: "attachDepthStencilTexture",
          value: function attachDepthStencilTexture(t) {
            if (!t) return;
            var e = t.descriptor;

            if (34041 !== e.pixelFormat && console.error("Depth/Stencil texture must have a pixel type of DEPTH_STENCIL!"), 34042 !== e.dataType && console.error("Depth/Stencil texture must have data type of UNSIGNED_INT_24_8_WEBGL!"), this._context.capabilities.depthTexture || console.error("Extension WEBGL_depth_texture isn't supported therefore it is no possible to set the depth/stencil texture!"), this._validateTextureDimensions(e, this._desc), this._desc.depthStencilTarget && 4 !== this._desc.depthStencilTarget && (this._desc.depthStencilTarget = 4), this._disposeDepthStencilAttachments(), this._initialized) {
              this._context.bindFramebuffer(this);

              var _e2 = this._context.gl;

              _e2.framebufferTexture2D(_e2.FRAMEBUFFER, _e2.DEPTH_STENCIL_ATTACHMENT, _e2.TEXTURE_2D, t.glName, 0);
            }

            this._depthStencilTexture = t;
          }
        }, {
          key: "detachDepthStencilTexture",
          value: function detachDepthStencilTexture() {
            var t = this._depthStencilTexture;

            if (t && this._initialized) {
              this._context.bindFramebuffer(this);

              var _t3 = this._context.gl;

              this._context.gl.framebufferTexture2D(_t3.FRAMEBUFFER, _t3.DEPTH_STENCIL_ATTACHMENT, _t3.TEXTURE_2D, null, 0);
            }

            return this._depthStencilTexture = null, t;
          }
        }, {
          key: "attachDepthStencilBuffer",
          value: function attachDepthStencilBuffer(t) {
            if (!t) return;
            var e = t.descriptor;

            if (34041 !== e.internalFormat && 33189 !== e.internalFormat && console.error("Depth/Stencil buffer must have correct internalFormat"), r._validateBufferDimensions(e, this._desc), this._disposeDepthStencilAttachments(), this._desc.depthStencilTarget = 34041 === e.internalFormat ? 3 : 1, this._initialized) {
              this._context.bindFramebuffer(this);

              var _e3 = this._context.gl,
                  i = 1 === this._desc.depthStencilTarget ? _e3.DEPTH_ATTACHMENT : _e3.DEPTH_STENCIL_ATTACHMENT;

              _e3.framebufferRenderbuffer(_e3.FRAMEBUFFER, i, _e3.RENDERBUFFER, t.glName);
            }

            this._depthAttachment = t;
          }
        }, {
          key: "detachDepthStencilBuffer",
          value: function detachDepthStencilBuffer() {
            var t = this._context.gl,
                e = this._depthAttachment;

            if (e && this._initialized) {
              this._context.bindFramebuffer(this);

              var _e4 = 1 === this._desc.depthStencilTarget ? t.DEPTH_ATTACHMENT : t.DEPTH_STENCIL_ATTACHMENT;

              t.framebufferRenderbuffer(t.FRAMEBUFFER, _e4, t.RENDERBUFFER, null);
            }

            return this._depthAttachment = null, e;
          }
        }, {
          key: "copyToTexture",
          value: function copyToTexture(t, e, i, s, _r2, h, n) {
            (t < 0 || e < 0 || _r2 < 0 || h < 0) && console.error("Offsets cannot be negative!"), (i <= 0 || s <= 0) && console.error("Copy width and height must be greater than zero!");
            var o = this._desc,
                c = n.descriptor;
            3553 !== n.descriptor.target && console.error("Texture target must be TEXTURE_2D!"), (t + i > o.width || e + s > o.height || _r2 + i > c.width || h + s > c.height) && console.error("Bad dimensions, the current input values will attempt to read or copy out of bounds!");
            var a = this._context;
            a.bindTexture(n, 0), a.bindFramebuffer(this), a.gl.copyTexSubImage2D(3553, 0, _r2, h, t, e, i, s);
          }
        }, {
          key: "readPixels",
          value: function readPixels(t, e, i, s, _r3, h, n) {
            (i <= 0 || s <= 0) && console.error("Copy width and height must be greater than zero!"), n || console.error("Target memory is not initialized!"), this._context.bindFramebuffer(this);

            this._context.gl.readPixels(t, e, i, s, _r3, h, n);
          }
        }, {
          key: "resize",
          value: function resize(t, e) {
            var i = this._desc;

            if (i.width !== t || i.height !== e) {
              if (!this._initialized) return i.width = t, i.height = e, this._colorAttachments.forEach(function (i) {
                i && i.resize(t, e);
              }), void (this._depthStencilTexture && this._depthStencilTexture.resize(t, e));
              i.width = t, i.height = e, this._colorAttachments.forEach(function (i) {
                i && i.resize(t, e);
              }), null != this._depthStencilTexture ? this._depthStencilTexture.resize(t, e) : (this._depthAttachment || this._stencilAttachment) && (this._depthAttachment && this._depthAttachment.resize(t, e), this._stencilAttachment && this._stencilAttachment.resize(t, e)), this._context.getBoundFramebufferObject() === this && this._context.bindFramebuffer(null), this._initialized = !1;
            }
          }
        }, {
          key: "initialize",
          value: function initialize() {
            var t, s, _r4, h;

            if (this._initialized) return !1;
            var o = this._context,
                c = o.gl;
            this._glName && c.deleteFramebuffer(this._glName);

            var a = c.createFramebuffer(),
                l = this._desc,
                _ = null != (t = l.colorTarget) ? t : 1,
                d = null != (s = l.width) ? s : 1,
                f = null != (_r4 = l.height) ? _r4 : 1;

            if (c.bindFramebuffer(c.FRAMEBUFFER, a), 0 === this._colorAttachments.size) if (0 === _) this._colorAttachments.set(36064, n(o, l));else {
              var _t4 = new _Renderbuffer_js__WEBPACK_IMPORTED_MODULE_3__["default"](o, {
                internalFormat: 32854,
                width: d,
                height: f
              });

              this._colorAttachments.set(36064, _t4);
            }

            this._colorAttachments.forEach(function (t, i) {
              t && (t instanceof _Texture_js__WEBPACK_IMPORTED_MODULE_2__["default"] ? c.framebufferTexture2D(c.FRAMEBUFFER, i, c.TEXTURE_2D, t.glName, 0) : c.framebufferRenderbuffer(c.FRAMEBUFFER, c.COLOR_ATTACHMENT0, c.RENDERBUFFER, t.glName));
            });

            var u = null != (h = l.depthStencilTarget) ? h : 0;

            switch (u) {
              case 1:
              case 3:
                {
                  this._depthAttachment || (this._depthAttachment = new _Renderbuffer_js__WEBPACK_IMPORTED_MODULE_3__["default"](o, {
                    internalFormat: 1 === l.depthStencilTarget ? 33189 : 34041,
                    width: d,
                    height: f
                  }));

                  var _t5 = 1 === u ? c.DEPTH_ATTACHMENT : c.DEPTH_STENCIL_ATTACHMENT;

                  c.framebufferRenderbuffer(c.FRAMEBUFFER, _t5, c.RENDERBUFFER, this._depthAttachment.glName);
                  break;
                }

              case 2:
                this._stencilAttachment || (this._stencilAttachment = new _Renderbuffer_js__WEBPACK_IMPORTED_MODULE_3__["default"](o, {
                  internalFormat: 36168,
                  width: d,
                  height: f
                })), c.framebufferRenderbuffer(c.FRAMEBUFFER, c.STENCIL_ATTACHMENT, c.RENDERBUFFER, this._stencilAttachment.glName);
                break;

              case 4:
                if (!this._depthStencilTexture) {
                  o.capabilities.depthTexture || console.error("Extension WEBGL_depth_texture isn't supported therefore it is no possible to set the depth/stencil texture as an attachment!");
                  var _t6 = {
                    target: 3553,
                    pixelFormat: 34041,
                    dataType: 34042,
                    samplingMode: 9728,
                    wrapMode: 33071,
                    width: d,
                    height: f
                  };
                  this._depthStencilTexture = new _Texture_js__WEBPACK_IMPORTED_MODULE_2__["default"](o, _t6);
                }

                c.framebufferTexture2D(c.FRAMEBUFFER, c.DEPTH_STENCIL_ATTACHMENT, c.TEXTURE_2D, this._depthStencilTexture.glName, 0);
            }

            return this._glName = a, this._initialized = !0, !0;
          }
        }, {
          key: "_disposeColorAttachments",
          value: function _disposeColorAttachments() {
            var _this = this;

            this._colorAttachments.forEach(function (t, i) {
              if (t instanceof _Texture_js__WEBPACK_IMPORTED_MODULE_2__["default"]) {
                if (_this._initialized) {
                  _this._context.bindFramebuffer(_this);

                  var _t7 = _this._context.gl;

                  _t7.framebufferTexture2D(_t7.FRAMEBUFFER, i, _t7.TEXTURE_2D, null, 0);
                }

                t.dispose();
              } else if (t instanceof WebGLRenderbuffer) {
                var e = _this._context.gl;
                _this._initialized && (_this._context.bindFramebuffer(_this), e.framebufferRenderbuffer(e.FRAMEBUFFER, i, e.RENDERBUFFER, null)), _this._context.gl.deleteRenderbuffer(t);
              }
            }), this._colorAttachments.clear();
          }
        }, {
          key: "_disposeDepthStencilAttachments",
          value: function _disposeDepthStencilAttachments() {
            var t = this._context.gl;

            if (this._depthAttachment) {
              if (this._initialized) {
                this._context.bindFramebuffer(this);

                var e = 1 === this._desc.depthStencilTarget ? t.DEPTH_ATTACHMENT : t.DEPTH_STENCIL_ATTACHMENT;
                t.framebufferRenderbuffer(t.FRAMEBUFFER, e, t.RENDERBUFFER, null);
              }

              this._depthAttachment.dispose(), this._depthAttachment = null;
            }

            this._stencilAttachment && (this._initialized && (this._context.bindFramebuffer(this), t.framebufferRenderbuffer(t.FRAMEBUFFER, t.STENCIL_ATTACHMENT, t.RENDERBUFFER, null)), this._stencilAttachment.dispose(), this._stencilAttachment = null), this._depthStencilTexture && (this._initialized && (this._context.bindFramebuffer(this), t.framebufferTexture2D(t.FRAMEBUFFER, t.DEPTH_STENCIL_ATTACHMENT, t.TEXTURE_2D, null, 0)), this._depthStencilTexture.dispose(), this._depthStencilTexture = null);
          }
        }, {
          key: "_validateTextureDimensions",
          value: function _validateTextureDimensions(t, e) {
            console.assert(t.width >= 0 && t.height >= 0), 3553 !== t.target && console.error("Texture type must be TEXTURE_2D!"), void 0 !== e.width && e.width >= 0 && void 0 !== e.height && e.height >= 0 ? e.width === t.width && e.height === t.height || console.error("Color attachment texture must match the framebuffer's!") : (e.width = t.width, e.height = t.height);
          }
        }, {
          key: "_validateColorAttachmentPoint",
          value: function _validateColorAttachmentPoint(t) {
            if (-1 === r._MAX_COLOR_ATTACHMENTS) {
              var _t8 = this._context.capabilities.drawBuffers;

              if (_t8) {
                var _e5 = this._context.gl;
                r._MAX_COLOR_ATTACHMENTS = _e5.getParameter(_t8.MAX_COLOR_ATTACHMENTS);
              } else r._MAX_COLOR_ATTACHMENTS = 1;
            }

            var e = t - 36064;
            e + 1 > r._MAX_COLOR_ATTACHMENTS && s.error("esri.FrameBufferObject", "illegal attachment point for color attachment: ".concat(e + 1, ". Implementation supports up to ").concat(r._MAX_COLOR_ATTACHMENTS, " color attachments"));
          }
        }], [{
          key: "_validateBufferDimensions",
          value: function _validateBufferDimensions(t, e) {
            console.assert(t.width >= 0 && t.height >= 0), void 0 !== e.width && e.width >= 0 && void 0 !== e.height && e.height >= 0 ? e.width === t.width && e.height === t.height || console.error("Renderbuffer dimensions must match the framebuffer's!") : (e.width = t.width, e.height = t.height);
          }
        }]);

        return r;
      }();

      r._MAX_COLOR_ATTACHMENTS = -1;
      var h = 0;

      var n = function n(t, i) {
        return new _Texture_js__WEBPACK_IMPORTED_MODULE_2__["default"](t, {
          target: 3553,
          pixelFormat: 6408,
          dataType: 5121,
          samplingMode: 9728,
          wrapMode: 33071,
          width: i.width,
          height: i.height
        });
      };
      /* harmony default export */


      __webpack_exports__["default"] = r;
      /***/
    },

    /***/
    "6c4E":
    /*!***************************************************************************!*\
      !*** ./node_modules/@arcgis/core/views/webgl/capabilities/LoseContext.js ***!
      \***************************************************************************/

    /*! exports provided: load */

    /***/
    function c4E(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "load", function () {
        return e;
      });
      /*
      All material copyright ESRI, All Rights Reserved, unless otherwise specified.
      See https://js.arcgis.com/4.18/esri/copyright.txt for details.
      */


      function e(e, t) {
        var n = t.loseContext && e.getExtension("WEBGL_lose_context");
        return n ? {
          loseRenderingContext: function loseRenderingContext() {
            return n.loseContext();
          }
        } : null;
      }
      /***/

    },

    /***/
    "GJyJ":
    /*!**************************************************************!*\
      !*** ./node_modules/@arcgis/core/views/webgl/renderState.js ***!
      \**************************************************************/

    /*! exports provided: StateTracker, backFaceCullingParams, defaultColorWriteParams, defaultDepthWriteParams, makeBlending, makeColorWrite, makeCulling, makeDepthTest, makeDepthWrite, makePipelineState, makePolygonOffset, makeStencilTest, makeStencilWrite, separateBlendingParams, simpleBlendingParams */

    /***/
    function GJyJ(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "StateTracker", function () {
        return z;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "backFaceCullingParams", function () {
        return i;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "defaultColorWriteParams", function () {
        return s;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "defaultDepthWriteParams", function () {
        return n;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "makeBlending", function () {
        return l;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "makeColorWrite", function () {
        return d;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "makeCulling", function () {
        return r;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "makeDepthTest", function () {
        return o;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "makeDepthWrite", function () {
        return c;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "makePipelineState", function () {
        return u;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "makePolygonOffset", function () {
        return h;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "makeStencilTest", function () {
        return a;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "makeStencilWrite", function () {
        return p;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "separateBlendingParams", function () {
        return e;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "simpleBlendingParams", function () {
        return t;
      });
      /*
      All material copyright ESRI, All Rights Reserved, unless otherwise specified.
      See https://js.arcgis.com/4.18/esri/copyright.txt for details.
      */


      function t(t, e) {
        var i = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 32774;
        var n = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : [0, 0, 0, 0];
        return {
          srcRgb: t,
          srcAlpha: t,
          dstRgb: e,
          dstAlpha: e,
          opRgb: i,
          opAlpha: i,
          color: {
            r: n[0],
            g: n[1],
            b: n[2],
            a: n[3]
          }
        };
      }

      function e(t, e, i, n) {
        var s = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : 32774;
        var l = arguments.length > 5 && arguments[5] !== undefined ? arguments[5] : 32774;
        var r = arguments.length > 6 && arguments[6] !== undefined ? arguments[6] : [0, 0, 0, 0];
        return {
          srcRgb: t,
          srcAlpha: e,
          dstRgb: i,
          dstAlpha: n,
          opRgb: s,
          opAlpha: l,
          color: {
            r: r[0],
            g: r[1],
            b: r[2],
            a: r[3]
          }
        };
      }

      var i = {
        face: 1029,
        mode: 2305
      },
          n = {
        zNear: 0,
        zFar: 1
      },
          s = {
        r: !0,
        g: !0,
        b: !0,
        a: !0
      };

      function l(t) {
        return f.intern(t);
      }

      function r(t) {
        return I.intern(t);
      }

      function h(t) {
        return S.intern(t);
      }

      function o(t) {
        return T.intern(t);
      }

      function a(t) {
        return O.intern(t);
      }

      function c(t) {
        return w.intern(t);
      }

      function d(t) {
        return D.intern(t);
      }

      function p(t) {
        return m.intern(t);
      }

      function u(t) {
        return k.intern(t);
      }

      var _ = /*#__PURE__*/function () {
        function _(t, e) {
          _classCallCheck(this, _);

          this.makeKey = t, this.makeRef = e, this.interns = new Map();
        }

        _createClass(_, [{
          key: "intern",
          value: function intern(t) {
            if (!t) return null;
            var e = this.makeKey(t),
                i = this.interns;
            return i.has(e) || i.set(e, this.makeRef(t)), i.get(e);
          }
        }]);

        return _;
      }();

      function g(t) {
        return "[" + t.join(",") + "]";
      }

      var f = new _(v, function (t) {
        return _objectSpread({
          __tag: "Blending"
        }, t);
      });

      function v(t) {
        return t ? g([t.srcRgb, t.srcAlpha, t.dstRgb, t.dstAlpha, t.opRgb, t.opAlpha, t.color.r, t.color.g, t.color.b, t.color.a]) : null;
      }

      var I = new _(W, function (t) {
        return _objectSpread({
          __tag: "Culling"
        }, t);
      });

      function W(t) {
        return t ? g([t.face, t.mode]) : null;
      }

      var S = new _(b, function (t) {
        return _objectSpread({
          __tag: "PolygonOffset"
        }, t);
      });

      function b(t) {
        return t ? g([t.factor, t.units]) : null;
      }

      var T = new _(y, function (t) {
        return _objectSpread({
          __tag: "DepthTest"
        }, t);
      });

      function y(t) {
        return t ? g([t.func]) : null;
      }

      var O = new _(R, function (t) {
        return _objectSpread({
          __tag: "StencilTest"
        }, t);
      });

      function R(t) {
        return t ? g([t["function"].func, t["function"].ref, t["function"].mask, t.operation.fail, t.operation.zFail, t.operation.zPass]) : null;
      }

      var w = new _(C, function (t) {
        return _objectSpread({
          __tag: "DepthWrite"
        }, t);
      });

      function C(t) {
        return t ? g([t.zNear, t.zFar]) : null;
      }

      var D = new _(A, function (t) {
        return _objectSpread({
          __tag: "ColorWrite"
        }, t);
      });

      function A(t) {
        return t ? g([t.r, t.g, t.b, t.a]) : null;
      }

      var m = new _(P, function (t) {
        return _objectSpread({
          __tag: "StencilWrite"
        }, t);
      });

      function P(t) {
        return t ? g([t.mask]) : null;
      }

      var k = new _(function (t) {
        return t ? g([v(t.blending), W(t.culling), b(t.polygonOffset), y(t.depthTest), R(t.stencilTest), C(t.depthWrite), A(t.colorWrite), P(t.stencilWrite)]) : null;
      }, function (t) {
        return {
          blending: l(t.blending),
          culling: r(t.culling),
          polygonOffset: h(t.polygonOffset),
          depthTest: o(t.depthTest),
          stencilTest: a(t.stencilTest),
          depthWrite: c(t.depthWrite),
          colorWrite: d(t.colorWrite),
          stencilWrite: p(t.stencilWrite)
        };
      });

      var z = /*#__PURE__*/function () {
        function z(t) {
          _classCallCheck(this, z);

          this._pipelineInvalid = !0, this._blendingInvalid = !0, this._cullingInvalid = !0, this._polygonOffsetInvalid = !0, this._depthTestInvalid = !0, this._stencilTestInvalid = !0, this._depthWriteInvalid = !0, this._colorWriteInvalid = !0, this._stencilWriteInvalid = !0, this._stateSetters = t;
        }

        _createClass(z, [{
          key: "setPipeline",
          value: function setPipeline(t) {
            (this._pipelineInvalid || t !== this._pipeline) && (this.setBlending(t.blending), this.setCulling(t.culling), this.setPolygonOffset(t.polygonOffset), this.setDepthTest(t.depthTest), this.setStencilTest(t.stencilTest), this.setDepthWrite(t.depthWrite), this.setColorWrite(t.colorWrite), this.setStencilWrite(t.stencilWrite), this._pipeline = t), this._pipelineInvalid = !1;
          }
        }, {
          key: "invalidateBlending",
          value: function invalidateBlending() {
            this._blendingInvalid = !0, this._pipelineInvalid = !0;
          }
        }, {
          key: "invalidateCulling",
          value: function invalidateCulling() {
            this._cullingInvalid = !0, this._pipelineInvalid = !0;
          }
        }, {
          key: "invalidatePolygonOffset",
          value: function invalidatePolygonOffset() {
            this._polygonOffsetInvalid = !0, this._pipelineInvalid = !0;
          }
        }, {
          key: "invalidateDepthTest",
          value: function invalidateDepthTest() {
            this._depthTestInvalid = !0, this._pipelineInvalid = !0;
          }
        }, {
          key: "invalidateStencilTest",
          value: function invalidateStencilTest() {
            this._stencilTestInvalid = !0, this._pipelineInvalid = !0;
          }
        }, {
          key: "invalidateDepthWrite",
          value: function invalidateDepthWrite() {
            this._depthWriteInvalid = !0, this._pipelineInvalid = !0;
          }
        }, {
          key: "invalidateColorWrite",
          value: function invalidateColorWrite() {
            this._colorWriteInvalid = !0, this._pipelineInvalid = !0;
          }
        }, {
          key: "invalidateStencilWrite",
          value: function invalidateStencilWrite() {
            this._stencilTestInvalid = !0, this._pipelineInvalid = !0;
          }
        }, {
          key: "setBlending",
          value: function setBlending(t) {
            this._blending = this.setSubState(t, this._blending, this._blendingInvalid, this._stateSetters.setBlending), this._blendingInvalid = !1;
          }
        }, {
          key: "setCulling",
          value: function setCulling(t) {
            this._culling = this.setSubState(t, this._culling, this._cullingInvalid, this._stateSetters.setCulling), this._cullingInvalid = !1;
          }
        }, {
          key: "setPolygonOffset",
          value: function setPolygonOffset(t) {
            this._polygonOffset = this.setSubState(t, this._polygonOffset, this._polygonOffsetInvalid, this._stateSetters.setPolygonOffset), this._polygonOffsetInvalid = !1;
          }
        }, {
          key: "setDepthTest",
          value: function setDepthTest(t) {
            this._depthTest = this.setSubState(t, this._depthTest, this._depthTestInvalid, this._stateSetters.setDepthTest), this._depthTestInvalid = !1;
          }
        }, {
          key: "setStencilTest",
          value: function setStencilTest(t) {
            this._stencilTest = this.setSubState(t, this._stencilTest, this._stencilTestInvalid, this._stateSetters.setStencilTest), this._stencilTestInvalid = !1;
          }
        }, {
          key: "setDepthWrite",
          value: function setDepthWrite(t) {
            this._depthWrite = this.setSubState(t, this._depthWrite, this._depthWriteInvalid, this._stateSetters.setDepthWrite), this._depthWriteInvalid = !1;
          }
        }, {
          key: "setColorWrite",
          value: function setColorWrite(t) {
            this._colorWrite = this.setSubState(t, this._colorWrite, this._colorWriteInvalid, this._stateSetters.setColorWrite), this._colorWriteInvalid = !1;
          }
        }, {
          key: "setStencilWrite",
          value: function setStencilWrite(t) {
            this._stencilWrite = this.setSubState(t, this._stencilWrite, this._stencilWriteInvalid, this._stateSetters.setStencilWrite), this._stencilTestInvalid = !1;
          }
        }, {
          key: "setSubState",
          value: function setSubState(t, e, i, n) {
            return (i || t !== e) && (n(t), this._pipelineInvalid = !0), t;
          }
        }]);

        return z;
      }();
      /***/

    },

    /***/
    "GprA":
    /*!**********************************************************************************!*\
      !*** ./node_modules/@arcgis/core/views/webgl/capabilities/DisjointTimerQuery.js ***!
      \**********************************************************************************/

    /*! exports provided: DisjointTimerQuery, createDisjointTimerQuery */

    /***/
    function GprA(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "DisjointTimerQuery", function () {
        return E;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "createDisjointTimerQuery", function () {
        return t;
      });
      /* harmony import */


      var _isWebGL2Context_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ./isWebGL2Context.js */
      "xRQN");
      /*
      All material copyright ESRI, All Rights Reserved, unless otherwise specified.
      See https://js.arcgis.com/4.18/esri/copyright.txt for details.
      */


      var E = function E(e, _E, t, T, r, _, i, u) {
        _classCallCheck(this, E);

        this.createQuery = e, this.resultAvailable = _E, this.getResult = t, this.disjoint = T, this.beginTimeElapsed = r, this.endTimeElapsed = _, this.createTimestamp = i, this.timestampBits = u;
      };

      function t(t, T) {
        if (T.disjointTimerQuery) return null;
        var r = t.getExtension("EXT_disjoint_timer_query_webgl2");
        return r && Object(_isWebGL2Context_js__WEBPACK_IMPORTED_MODULE_0__["default"])(t) ? new E(function () {
          return t.createQuery();
        }, function (e) {
          return t.getQueryParameter(e, t.QUERY_RESULT_AVAILABLE);
        }, function (e) {
          return t.getQueryParameter(e, t.QUERY_RESULT);
        }, function () {
          return t.getParameter(r.GPU_DISJOINT_EXT);
        }, function (e) {
          return t.beginQuery(r.TIME_ELAPSED_EXT, e);
        }, function () {
          return t.endQuery(r.TIME_ELAPSED_EXT);
        }, function (e) {
          return r.queryCounterEXT(e, r.TIMESTAMP_EXT);
        }, function () {
          return t.getQuery(r.TIMESTAMP_EXT, r.QUERY_COUNTER_BITS_EXT);
        }) : (r = t.getExtension("EXT_disjoint_timer_query"), r ? new E(function () {
          return r.createQueryEXT();
        }, function (e) {
          return r.getQueryObjectEXT(e, r.QUERY_RESULT_AVAILABLE_EXT);
        }, function (e) {
          return r.getQueryObjectEXT(e, r.QUERY_RESULT_EXT);
        }, function () {
          return t.getParameter(r.GPU_DISJOINT_EXT);
        }, function (e) {
          return r.beginQueryEXT(r.TIME_ELAPSED_EXT, e);
        }, function () {
          return r.endQueryEXT(r.TIME_ELAPSED_EXT);
        }, function (e) {
          return r.queryCounterEXT(e, r.TIMESTAMP_EXT);
        }, function () {
          return r.getQueryEXT(r.TIMESTAMP_EXT, r.QUERY_COUNTER_BITS_EXT);
        }) : null);
      }
      /***/

    },

    /***/
    "MTaK":
    /*!**************************************************************************!*\
      !*** ./node_modules/@arcgis/core/views/webgl/capabilities/Instancing.js ***!
      \**************************************************************************/

    /*! exports provided: load */

    /***/
    function MTaK(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "load", function () {
        return r;
      });
      /* harmony import */


      var _isWebGL2Context_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ./isWebGL2Context.js */
      "xRQN");
      /*
      All material copyright ESRI, All Rights Reserved, unless otherwise specified.
      See https://js.arcgis.com/4.18/esri/copyright.txt for details.
      */


      function r(r) {
        if (Object(_isWebGL2Context_js__WEBPACK_IMPORTED_MODULE_0__["default"])(r)) return {
          drawArraysInstanced: r.drawArraysInstanced.bind(r),
          drawElementsInstanced: r.drawElementsInstanced.bind(r),
          vertexAttribDivisor: r.vertexAttribDivisor.bind(r)
        };
        var t = r.getExtension("ANGLE_instanced_arrays");
        return t ? {
          drawArraysInstanced: t.drawArraysInstancedANGLE.bind(t),
          drawElementsInstanced: t.drawElementsInstancedANGLE.bind(t),
          vertexAttribDivisor: t.vertexAttribDivisorANGLE.bind(t)
        } : null;
      }
      /***/

    },

    /***/
    "RiM0":
    /*!***************************************************************************!*\
      !*** ./node_modules/@arcgis/core/views/webgl/capabilities/DrawBuffers.js ***!
      \***************************************************************************/

    /*! exports provided: load */

    /***/
    function RiM0(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "load", function () {
        return A;
      });
      /* harmony import */


      var _isWebGL2Context_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ./isWebGL2Context.js */
      "xRQN");
      /*
      All material copyright ESRI, All Rights Reserved, unless otherwise specified.
      See https://js.arcgis.com/4.18/esri/copyright.txt for details.
      */


      function A(A, _) {
        if (_.disjointTimerQuery) return null;
        if (Object(_isWebGL2Context_js__WEBPACK_IMPORTED_MODULE_0__["default"])(A)) return {
          drawBuffers: A.drawBuffers.bind(A),
          MAX_DRAW_BUFFERS: A.MAX_DRAW_BUFFERS,
          MAX_COLOR_ATTACHMENTS: A.MAX_COLOR_ATTACHMENTS
        };
        if (_.drawBuffers) return null;
        var e = A.getExtension("WEBGL_draw_buffers");
        return e ? {
          drawBuffers: e.drawBuffersWEBGL.bind(e),
          MAX_DRAW_BUFFERS: e.MAX_DRAW_BUFFERS_WEBGL,
          MAX_COLOR_ATTACHMENTS: e.MAX_COLOR_ATTACHMENTS_WEBGL
        } : null;
      }
      /***/

    },

    /***/
    "bfJE":
    /*!*******************************************************************!*\
      !*** ./node_modules/@arcgis/core/views/webgl/RenderingContext.js ***!
      \*******************************************************************/

    /*! exports provided: default */

    /***/
    function bfJE(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony import */


      var _core_has_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ../../core/has.js */
      "wSAH");
      /* harmony import */


      var _core_maybe_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ../../core/maybe.js */
      "srIe");
      /* harmony import */


      var _renderState_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./renderState.js */
      "GJyJ");
      /* harmony import */


      var _enums_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./enums.js */
      "0X3F");
      /* harmony import */


      var _InstanceCounter_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ./InstanceCounter.js */
      "r3F2");
      /* harmony import */


      var _capabilities_isWebGL2Context_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ./capabilities/isWebGL2Context.js */
      "xRQN");
      /* harmony import */


      var _capabilities_load_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ./capabilities/load.js */
      "uzVh");
      /*
      All material copyright ESRI, All Rights Reserved, unless otherwise specified.
      See https://js.arcgis.com/4.18/esri/copyright.txt for details.
      */


      var l = /*#__PURE__*/function () {
        function l(t, i) {
          var _this2 = this;

          _classCallCheck(this, l);

          this.gl = null, this.instanceCounter = new _InstanceCounter_js__WEBPACK_IMPORTED_MODULE_4__["InstanceCounter"](), this._blendEnabled = !1, this._blendColorState = {
            r: 0,
            g: 0,
            b: 0,
            a: 0
          }, this._blendFunctionState = {
            srcRGB: 1,
            dstRGB: 0,
            srcAlpha: 1,
            dstAlpha: 0
          }, this._blendEquationState = {
            mode: 32774,
            modeAlpha: 32774
          }, this._colorMaskState = {
            r: !0,
            g: !0,
            b: !0,
            a: !0
          }, this._polygonCullingEnabled = !1, this._cullFace = 1029, this._frontFace = 2305, this._scissorTestEnabled = !1, this._scissorRect = {
            x: 0,
            y: 0,
            width: 0,
            height: 0
          }, this._depthTestEnabled = !1, this._depthFunction = 513, this._clearDepth = 1, this._depthWriteEnabled = !0, this._depthRange = {
            zNear: 0,
            zFar: 1
          }, this._viewport = null, this._stencilTestEnabled = !1, this._polygonOffsetFillEnabled = !1, this._polygonOffset = [0, 0], this._stencilFunction = {
            face: 1032,
            func: 519,
            ref: 0,
            mask: 1
          }, this._clearStencil = 0, this._stencilWriteMask = 1, this._stencilOperation = {
            face: 1032,
            fail: 7680,
            zFail: 7680,
            zPass: 7680
          }, this._clearColor = {
            r: 0,
            g: 0,
            b: 0,
            a: 0
          }, this._activeShaderProgram = null, this._activeVertexBuffer = null, this._activeIndexBuffer = null, this._activeFramebuffer = null, this._activeRenderbuffer = null, this._activeTextureUnit = 0, this._textureUnitMap = {}, this._numOfDrawCalls = 0, this._numOfTriangles = 0, this.contextVersion = Object(_capabilities_isWebGL2Context_js__WEBPACK_IMPORTED_MODULE_5__["default"])(t) ? "webgl2" : "webgl", this.gl = t, t instanceof WebGLRenderingContext && this.gl.getExtension("OES_element_index_uint"), this._capabilities = Object(_capabilities_load_js__WEBPACK_IMPORTED_MODULE_6__["loadCapabilities"])(t, i);

          var _l = this.gl.getParameter(this.gl.VIEWPORT);

          this._viewport = {
            x: _l[0],
            y: _l[1],
            width: _l[2],
            height: _l[3]
          }, this._stateTracker = new _renderState_js__WEBPACK_IMPORTED_MODULE_2__["StateTracker"]({
            setBlending: function setBlending(t) {
              if (t) {
                _this2.setBlendingEnabled(!0), _this2.setBlendEquationSeparate(t.opRgb, t.opAlpha), _this2.setBlendFunctionSeparate(t.srcRgb, t.dstRgb, t.srcAlpha, t.dstAlpha);
                var e = t.color;

                _this2.setBlendColor(e.r, e.g, e.b, e.a);
              } else _this2.setBlendingEnabled(!1);
            },
            setCulling: function setCulling(t) {
              t ? (_this2.setFaceCullingEnabled(!0), _this2.setCullFace(t.face), _this2.setFrontFace(t.mode)) : _this2.setFaceCullingEnabled(!1);
            },
            setPolygonOffset: function setPolygonOffset(t) {
              t ? (_this2.setPolygonOffsetFillEnabled(!0), _this2.setPolygonOffset(t.factor, t.units)) : _this2.setPolygonOffsetFillEnabled(!1);
            },
            setDepthTest: function setDepthTest(t) {
              t ? (_this2.setDepthTestEnabled(!0), _this2.setDepthFunction(t.func)) : _this2.setDepthTestEnabled(!1);
            },
            setStencilTest: function setStencilTest(t) {
              if (t) {
                _this2.setStencilTestEnabled(!0);

                var e = t["function"];

                _this2.setStencilFunction(e.func, e.ref, e.mask);

                var _i2 = t.operation;

                _this2.setStencilOp(_i2.fail, _i2.zFail, _i2.zPass);
              } else _this2.setStencilTestEnabled(!1);
            },
            setDepthWrite: function setDepthWrite(t) {
              t ? (_this2.setDepthWriteEnabled(!0), _this2.setDepthRange(t.zNear, t.zFar)) : _this2.setDepthWriteEnabled(!1);
            },
            setColorWrite: function setColorWrite(t) {
              t ? _this2.setColorMask(t.r, t.g, t.b, t.a) : _this2.setColorMask(!1, !1, !1, !1);
            },
            setStencilWrite: function setStencilWrite(t) {
              t ? _this2.setStencilWriteMask(t.mask) : _this2.setStencilWriteMask(0);
            }
          }), this.enforceState();
        }

        _createClass(l, [{
          key: "contextAttributes",
          get: function get() {
            return this.gl.getContextAttributes();
          }
        }, {
          key: "parameters",
          get: function get() {
            if (!this._parameters) {
              var t = this.capabilities.textureFilterAnisotropic;
              this._parameters = {
                versionString: this.gl.getParameter(this.gl.VERSION),
                maxVertexTextureImageUnits: this.gl.getParameter(this.gl.MAX_VERTEX_TEXTURE_IMAGE_UNITS),
                maxVertexAttributes: this.gl.getParameter(this.gl.MAX_VERTEX_ATTRIBS),
                maxMaxAnisotropy: t ? this.gl.getParameter(t.MAX_TEXTURE_MAX_ANISOTROPY) : void 0,
                maxTextureImageUnits: this.gl.getParameter(this.gl.MAX_TEXTURE_IMAGE_UNITS),
                maxTextureSize: this.gl.getParameter(this.gl.MAX_TEXTURE_SIZE)
              };
            }

            return this._parameters;
          }
        }, {
          key: "dispose",
          value: function dispose() {
            this.bindVAO(null), this.unbindBuffer(34962), this.unbindBuffer(34963), this._textureUnitMap = {}, this.gl = null, this._capabilities = null;
          }
        }, {
          key: "setPipelineState",
          value: function setPipelineState(t) {
            this._stateTracker.setPipeline(t);
          }
        }, {
          key: "setBlendingEnabled",
          value: function setBlendingEnabled(t) {
            this._blendEnabled !== t && (!0 === t ? this.gl.enable(this.gl.BLEND) : this.gl.disable(this.gl.BLEND), this._blendEnabled = t, this._stateTracker.invalidateBlending());
          }
        }, {
          key: "setBlendColor",
          value: function setBlendColor(t, e, i, s) {
            t === this._blendColorState.r && e === this._blendColorState.g && i === this._blendColorState.b && s === this._blendColorState.a || (this.gl.blendColor(t, e, i, s), this._blendColorState.r = t, this._blendColorState.g = e, this._blendColorState.b = i, this._blendColorState.a = s, this._stateTracker.invalidateBlending());
          }
        }, {
          key: "setBlendFunction",
          value: function setBlendFunction(t, e) {
            t === this._blendFunctionState.srcRGB && e === this._blendFunctionState.dstRGB || (this.gl.blendFunc(t, e), this._blendFunctionState.srcRGB = t, this._blendFunctionState.srcAlpha = t, this._blendFunctionState.dstRGB = e, this._blendFunctionState.dstAlpha = e, this._stateTracker.invalidateBlending());
          }
        }, {
          key: "setBlendFunctionSeparate",
          value: function setBlendFunctionSeparate(t, e, i, s) {
            this._blendFunctionState.srcRGB === t && this._blendFunctionState.srcAlpha === i && this._blendFunctionState.dstRGB === e && this._blendFunctionState.dstAlpha === s || (this.gl.blendFuncSeparate(t, e, i, s), this._blendFunctionState.srcRGB = t, this._blendFunctionState.srcAlpha = i, this._blendFunctionState.dstRGB = e, this._blendFunctionState.dstAlpha = s, this._stateTracker.invalidateBlending());
          }
        }, {
          key: "setBlendEquation",
          value: function setBlendEquation(t) {
            this._blendEquationState.mode !== t && (this.gl.blendEquation(t), this._blendEquationState.mode = t, this._blendEquationState.modeAlpha = t, this._stateTracker.invalidateBlending());
          }
        }, {
          key: "setBlendEquationSeparate",
          value: function setBlendEquationSeparate(t, e) {
            this._blendEquationState.mode === t && this._blendEquationState.modeAlpha === e || (this.gl.blendEquationSeparate(t, e), this._blendEquationState.mode = t, this._blendEquationState.modeAlpha = e, this._stateTracker.invalidateBlending());
          }
        }, {
          key: "setColorMask",
          value: function setColorMask(t, e, i, s) {
            this._colorMaskState.r === t && this._colorMaskState.g === e && this._colorMaskState.b === i && this._colorMaskState.a === s || (this.gl.colorMask(t, e, i, s), this._colorMaskState.r = t, this._colorMaskState.g = e, this._colorMaskState.b = i, this._colorMaskState.a = s, this._stateTracker.invalidateColorWrite());
          }
        }, {
          key: "setClearColor",
          value: function setClearColor(t, e, i, s) {
            this._clearColor.r === t && this._clearColor.g === e && this._clearColor.b === i && this._clearColor.a === s || (this.gl.clearColor(t, e, i, s), this._clearColor.r = t, this._clearColor.g = e, this._clearColor.b = i, this._clearColor.a = s);
          }
        }, {
          key: "setFaceCullingEnabled",
          value: function setFaceCullingEnabled(t) {
            this._polygonCullingEnabled !== t && (!0 === t ? this.gl.enable(this.gl.CULL_FACE) : this.gl.disable(this.gl.CULL_FACE), this._polygonCullingEnabled = t, this._stateTracker.invalidateCulling());
          }
        }, {
          key: "setPolygonOffsetFillEnabled",
          value: function setPolygonOffsetFillEnabled(t) {
            this._polygonOffsetFillEnabled !== t && (!0 === t ? this.gl.enable(this.gl.POLYGON_OFFSET_FILL) : this.gl.disable(this.gl.POLYGON_OFFSET_FILL), this._polygonOffsetFillEnabled = t, this._stateTracker.invalidatePolygonOffset());
          }
        }, {
          key: "setPolygonOffset",
          value: function setPolygonOffset(t, e) {
            this._polygonOffset[0] === t && this._polygonOffset[1] === e || (this._polygonOffset[0] = t, this._polygonOffset[1] = e, this.gl.polygonOffset(t, e), this._stateTracker.invalidatePolygonOffset());
          }
        }, {
          key: "setCullFace",
          value: function setCullFace(t) {
            this._cullFace !== t && (this.gl.cullFace(t), this._cullFace = t, this._stateTracker.invalidateCulling());
          }
        }, {
          key: "setFrontFace",
          value: function setFrontFace(t) {
            this._frontFace !== t && (this.gl.frontFace(t), this._frontFace = t, this._stateTracker.invalidateCulling());
          }
        }, {
          key: "setScissorTestEnabled",
          value: function setScissorTestEnabled(t) {
            this._scissorTestEnabled !== t && (!0 === t ? this.gl.enable(this.gl.SCISSOR_TEST) : this.gl.disable(this.gl.SCISSOR_TEST), this._scissorTestEnabled = t);
          }
        }, {
          key: "setScissorRect",
          value: function setScissorRect(t, e, i, s) {
            this._scissorRect.x === t && this._scissorRect.y === e && this._scissorRect.width === i && this._scissorRect.height === s || (this.gl.scissor(t, e, i, s), this._scissorRect.x = t, this._scissorRect.y = e, this._scissorRect.width = i, this._scissorRect.height = s);
          }
        }, {
          key: "setDepthTestEnabled",
          value: function setDepthTestEnabled(t) {
            this._depthTestEnabled !== t && (!0 === t ? this.gl.enable(this.gl.DEPTH_TEST) : this.gl.disable(this.gl.DEPTH_TEST), this._depthTestEnabled = t, this._stateTracker.invalidateDepthTest());
          }
        }, {
          key: "setClearDepth",
          value: function setClearDepth(t) {
            this._clearDepth !== t && (this.gl.clearDepth(t), this._clearDepth = t);
          }
        }, {
          key: "setDepthFunction",
          value: function setDepthFunction(t) {
            this._depthFunction !== t && (this.gl.depthFunc(t), this._depthFunction = t, this._stateTracker.invalidateDepthTest());
          }
        }, {
          key: "setDepthWriteEnabled",
          value: function setDepthWriteEnabled(t) {
            this._depthWriteEnabled !== t && (this.gl.depthMask(t), this._depthWriteEnabled = t, this._stateTracker.invalidateDepthWrite());
          }
        }, {
          key: "setDepthRange",
          value: function setDepthRange(t, e) {
            this._depthRange.zNear === t && this._depthRange.zFar === e || (this.gl.depthRange(t, e), this._depthRange.zNear = t, this._depthRange.zFar = e, this._stateTracker.invalidateDepthWrite());
          }
        }, {
          key: "setStencilTestEnabled",
          value: function setStencilTestEnabled(t) {
            this._stencilTestEnabled !== t && (!0 === t ? this.gl.enable(this.gl.STENCIL_TEST) : this.gl.disable(this.gl.STENCIL_TEST), this._stencilTestEnabled = t, this._stateTracker.invalidateStencilTest());
          }
        }, {
          key: "setClearStencil",
          value: function setClearStencil(t) {
            t !== this._clearStencil && (this.gl.clearStencil(t), this._clearStencil = t);
          }
        }, {
          key: "setStencilFunction",
          value: function setStencilFunction(t, e, i) {
            this._stencilFunction.func === t && this._stencilFunction.ref === e && this._stencilFunction.mask === i || (this.gl.stencilFunc(t, e, i), this._stencilFunction.face = 1032, this._stencilFunction.func = t, this._stencilFunction.ref = e, this._stencilFunction.mask = i, this._stateTracker.invalidateStencilTest());
          }
        }, {
          key: "setStencilFunctionSeparate",
          value: function setStencilFunctionSeparate(t, e, i, s) {
            this._stencilFunction.face === t && this._stencilFunction.func === e && this._stencilFunction.ref === i && this._stencilFunction.mask === s || (this.gl.stencilFuncSeparate(t, e, i, s), this._stencilFunction.face = t, this._stencilFunction.func = e, this._stencilFunction.ref = i, this._stencilFunction.mask = s, this._stateTracker.invalidateStencilTest());
          }
        }, {
          key: "setStencilWriteMask",
          value: function setStencilWriteMask(t) {
            this._stencilWriteMask !== t && (this.gl.stencilMask(t), this._stencilWriteMask = t, this._stateTracker.invalidateStencilWrite());
          }
        }, {
          key: "setStencilOp",
          value: function setStencilOp(t, e, i) {
            this._stencilOperation.fail === t && this._stencilOperation.zFail === e && this._stencilOperation.zPass === i || (this.gl.stencilOp(t, e, i), this._stencilOperation.face = 1032, this._stencilOperation.fail = t, this._stencilOperation.zFail = e, this._stencilOperation.zPass = i, this._stateTracker.invalidateStencilTest());
          }
        }, {
          key: "setStencilOpSeparate",
          value: function setStencilOpSeparate(t, e, i, s) {
            this._stencilOperation.face === t && this._stencilOperation.fail === e && this._stencilOperation.zFail === i && this._stencilOperation.zPass === s || (this.gl.stencilOpSeparate(t, e, i, s), this._stencilOperation.face = t, this._stencilOperation.face = t, this._stencilOperation.fail = e, this._stencilOperation.zFail = i, this._stencilOperation.zPass = s, this._stateTracker.invalidateStencilTest());
          }
        }, {
          key: "setActiveTexture",
          value: function setActiveTexture(t) {
            var e = this._activeTextureUnit;
            return t >= 0 && t !== this._activeTextureUnit && (this.gl.activeTexture(_enums_js__WEBPACK_IMPORTED_MODULE_3__["BASE_TEXTURE_UNIT"] + t), this._activeTextureUnit = t), e;
          }
        }, {
          key: "clear",
          value: function clear(t) {
            t && this.gl.clear(t);
          }
        }, {
          key: "clearSafe",
          value: function clearSafe(t) {
            var e = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 255;
            t && (16384 & t && this.setColorMask(!0, !0, !0, !0), 256 & t && this.setDepthWriteEnabled(!0), 1024 & t && this.setStencilWriteMask(e), this.gl.clear(t));
          }
        }, {
          key: "drawArrays",
          value: function drawArrays(t, e, i) {
            this.gl.drawArrays(t, e, i);
          }
        }, {
          key: "drawElements",
          value: function drawElements(t, e, i, s) {
            5123 !== i ? 5125 === i && this.gl.drawElements(t, e, i, s) : this.gl.drawElements(t, e, i, s);
          }
        }, {
          key: "logIno",
          value: function logIno() {}
        }, {
          key: "capabilities",
          get: function get() {
            return this._capabilities;
          }
        }, {
          key: "setViewport",
          value: function setViewport(t, e, i, s) {
            var a = this._viewport;
            a.x === t && a.y === e && a.width === i && a.height === s || (a.x = t, a.y = e, a.width = i, a.height = s, this.gl.viewport(t, e, i, s));
          }
        }, {
          key: "getViewport",
          value: function getViewport() {
            return {
              x: this._viewport.x,
              y: this._viewport.y,
              width: this._viewport.width,
              height: this._viewport.height
            };
          }
        }, {
          key: "bindProgram",
          value: function bindProgram(t) {
            if (!t) return this.gl.useProgram(null), void (this._activeShaderProgram = null);
            this._activeShaderProgram !== t && (t.initialize(), this.gl.useProgram(t.glName), this._activeShaderProgram = t);
          }
        }, {
          key: "bindTexture",
          value: function bindTexture(t, e) {
            -1 === l._MAX_TEXTURE_IMAGE_UNITS && (l._MAX_TEXTURE_IMAGE_UNITS = this.gl.getParameter(this.gl.MAX_TEXTURE_IMAGE_UNITS)), (e >= l._MAX_TEXTURE_IMAGE_UNITS || e < 0) && console.error("Input texture unit is out of range of available units!");
            var i = this._textureUnitMap[e];
            if (this.setActiveTexture(e), null == t || null == t.glName) return null != i && (this.gl.bindTexture(i.descriptor.target, null), i.setBoundToUnit(e, !1)), void (this._textureUnitMap[e] = null);
            i && i.id === t.id ? t.applyChanges() : (i && i.setBoundToUnit(e, !1), this.gl.bindTexture(t.descriptor.target, t.glName), t.setBoundToUnit(e, !0), t.applyChanges(), this._textureUnitMap[e] = t);
          }
        }, {
          key: "bindFramebuffer",
          value: function bindFramebuffer(e) {
            if (Object(_core_maybe_js__WEBPACK_IMPORTED_MODULE_1__["isNone"])(e)) return this.gl.bindFramebuffer(this.gl.FRAMEBUFFER, null), void (this._activeFramebuffer = null);
            this._activeFramebuffer !== e && (e.initialize() || this.gl.bindFramebuffer(this.gl.FRAMEBUFFER, e.glName), this._activeFramebuffer = e);
          }
        }, {
          key: "bindBuffer",
          value: function bindBuffer(t) {
            t && (34962 === t.bufferType ? this._activeVertexBuffer = l._bindBuffer(this.gl, t, t.bufferType, this._activeVertexBuffer) : this._activeIndexBuffer = l._bindBuffer(this.gl, t, t.bufferType, this._activeIndexBuffer));
          }
        }, {
          key: "bindRenderbuffer",
          value: function bindRenderbuffer(t) {
            var e = this.gl;
            t || (e.bindRenderbuffer(e.RENDERBUFFER, null), this._activeRenderbuffer = null), this._activeRenderbuffer !== t && (e.bindRenderbuffer(e.RENDERBUFFER, t.glName), this._activeRenderbuffer = t);
          }
        }, {
          key: "unbindBuffer",
          value: function unbindBuffer(t) {
            34962 === t ? this._activeVertexBuffer = l._bindBuffer(this.gl, null, t, this._activeVertexBuffer) : this._activeIndexBuffer = l._bindBuffer(this.gl, null, t, this._activeIndexBuffer);
          }
        }, {
          key: "bindVAO",
          value: function bindVAO(t) {
            t ? this._activeVertexArrayObject && this._activeVertexArrayObject.id === t.id || (t.bind(), this._activeVertexArrayObject = t) : this._activeVertexArrayObject && (this._activeVertexArrayObject.unbind(), this._activeVertexArrayObject = null);
          }
        }, {
          key: "getBoundTexture",
          value: function getBoundTexture(t) {
            return this._textureUnitMap[t];
          }
        }, {
          key: "getBoundFramebufferObject",
          value: function getBoundFramebufferObject() {
            return this._activeFramebuffer;
          }
        }, {
          key: "getBoundVAO",
          value: function getBoundVAO() {
            return this._activeVertexArrayObject;
          }
        }, {
          key: "resetState",
          value: function resetState() {
            this.bindProgram(null), this.bindVAO(null), this.bindFramebuffer(null), this.unbindBuffer(34962), this.unbindBuffer(34963);

            for (var t = 0; t < this.parameters.maxTextureImageUnits; t++) {
              this.bindTexture(null, t);
            }

            this.setBlendingEnabled(!1), this.setBlendFunction(1, 0), this.setBlendEquation(32774), this.setBlendColor(0, 0, 0, 0), this.setFaceCullingEnabled(!1), this.setCullFace(1029), this.setFrontFace(2305), this.setPolygonOffsetFillEnabled(!1), this.setPolygonOffset(0, 0), this.setScissorTestEnabled(!1), this.setScissorRect(0, 0, this.gl.canvas.width, this.gl.canvas.height), this.setDepthTestEnabled(!1), this.setDepthFunction(513), this.setDepthRange(0, 1), this.setStencilTestEnabled(!1), this.setStencilFunction(519, 0, 0), this.setStencilOp(7680, 7680, 7680), this.setClearColor(0, 0, 0, 0), this.setClearDepth(1), this.setClearStencil(0), this.setColorMask(!0, !0, !0, !0), this.setStencilWriteMask(4294967295), this.setDepthWriteEnabled(!0), this.setViewport(0, 0, this.gl.canvas.width, this.gl.canvas.height);
          }
        }, {
          key: "enforceState",
          value: function enforceState() {
            var t = this.gl,
                e = this.capabilities.vao;
            e && e.bindVertexArray(null);

            for (var _e6 = 0; _e6 < this.parameters.maxVertexAttributes; _e6++) {
              t.disableVertexAttribArray(_e6);
            }

            if (this._activeVertexBuffer ? t.bindBuffer(this._activeVertexBuffer.bufferType, this._activeVertexBuffer.glName) : t.bindBuffer(34962, null), this._activeIndexBuffer ? t.bindBuffer(this._activeIndexBuffer.bufferType, this._activeIndexBuffer.glName) : t.bindBuffer(34963, null), e && this._activeVertexArrayObject) {
              var _t9 = this._activeVertexArrayObject;
              this._activeVertexArrayObject && (this._activeVertexArrayObject.unbind(), this._activeVertexArrayObject = null), this.bindVAO(_t9);
            }

            t.bindFramebuffer(t.FRAMEBUFFER, this._activeFramebuffer ? this._activeFramebuffer.glName : null), t.useProgram(this._activeShaderProgram ? this._activeShaderProgram.glName : null), t.blendColor(this._blendColorState.r, this._blendColorState.g, this._blendColorState.b, this._blendColorState.a), t.bindRenderbuffer(t.RENDERBUFFER, this._activeRenderbuffer ? this._activeRenderbuffer.glName : null), !0 === this._blendEnabled ? t.enable(this.gl.BLEND) : t.disable(this.gl.BLEND), t.blendEquationSeparate(this._blendEquationState.mode, this._blendEquationState.modeAlpha), t.blendFuncSeparate(this._blendFunctionState.srcRGB, this._blendFunctionState.dstRGB, this._blendFunctionState.srcAlpha, this._blendFunctionState.dstAlpha), t.clearColor(this._clearColor.r, this._clearColor.g, this._clearColor.b, this._clearColor.a), t.clearDepth(this._clearDepth), t.clearStencil(this._clearStencil), t.colorMask(this._colorMaskState.r, this._colorMaskState.g, this._colorMaskState.b, this._colorMaskState.a), t.cullFace(this._cullFace), t.depthFunc(this._depthFunction), t.depthRange(this._depthRange.zNear, this._depthRange.zFar), !0 === this._depthTestEnabled ? t.enable(t.DEPTH_TEST) : t.disable(t.DEPTH_TEST), t.depthMask(this._depthWriteEnabled), t.frontFace(this._frontFace), t.lineWidth(1), !0 === this._polygonCullingEnabled ? t.enable(t.CULL_FACE) : t.disable(t.CULL_FACE), t.polygonOffset(this._polygonOffset[0], this._polygonOffset[1]), !0 === this._polygonOffsetFillEnabled ? t.enable(t.POLYGON_OFFSET_FILL) : t.disable(t.POLYGON_OFFSET_FILL), t.scissor(this._scissorRect.x, this._scissorRect.y, this._scissorRect.width, this._scissorRect.height), !0 === this._scissorTestEnabled ? t.enable(t.SCISSOR_TEST) : t.disable(t.SCISSOR_TEST), t.stencilFunc(this._stencilFunction.func, this._stencilFunction.ref, this._stencilFunction.mask), t.stencilOpSeparate(this._stencilOperation.face, this._stencilOperation.fail, this._stencilOperation.zFail, this._stencilOperation.zPass), !0 === this._stencilTestEnabled ? t.enable(t.STENCIL_TEST) : t.disable(t.STENCIL_TEST), t.stencilMask(this._stencilWriteMask);

            for (var _e7 = 0; _e7 < this.parameters.maxTextureImageUnits; _e7++) {
              t.activeTexture(_enums_js__WEBPACK_IMPORTED_MODULE_3__["BASE_TEXTURE_UNIT"] + _e7), t.bindTexture(3553, null);
              var s = this._textureUnitMap[_e7];
              s && t.bindTexture(s.descriptor.target, s.glName);
            }

            t.activeTexture(_enums_js__WEBPACK_IMPORTED_MODULE_3__["BASE_TEXTURE_UNIT"] + this._activeTextureUnit), t.viewport(this._viewport.x, this._viewport.y, this._viewport.width, this._viewport.height);
          }
        }], [{
          key: "_bindBuffer",
          value: function _bindBuffer(t, e, i, s) {
            return e ? s !== e && t.bindBuffer(i, e.glName) : t.bindBuffer(i, null), e;
          }
        }]);

        return l;
      }();

      l._MAX_TEXTURE_IMAGE_UNITS = -1;
      /* harmony default export */

      __webpack_exports__["default"] = l;
      /***/
    },

    /***/
    "cXeJ":
    /*!**********************************************************************************!*\
      !*** ./node_modules/@arcgis/core/views/webgl/capabilities/VertexArrayObjects.js ***!
      \**********************************************************************************/

    /*! exports provided: load */

    /***/
    function cXeJ(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "load", function () {
        return r;
      });
      /* harmony import */


      var _isWebGL2Context_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ./isWebGL2Context.js */
      "xRQN");
      /*
      All material copyright ESRI, All Rights Reserved, unless otherwise specified.
      See https://js.arcgis.com/4.18/esri/copyright.txt for details.
      */


      function r(r, t) {
        if (Object(_isWebGL2Context_js__WEBPACK_IMPORTED_MODULE_0__["default"])(r)) return {
          createVertexArray: r.createVertexArray.bind(r),
          deleteVertexArray: r.deleteVertexArray.bind(r),
          bindVertexArray: r.bindVertexArray.bind(r)
        };
        if (t.vao) return null;
        var n = r.getExtension("OES_vertex_array_object") || r.getExtension("MOZ_OES_vertex_array_object") || r.getExtension("WEBKIT_OES_vertex_array_object");
        return n ? {
          createVertexArray: n.createVertexArrayOES.bind(n),
          deleteVertexArray: n.deleteVertexArrayOES.bind(n),
          bindVertexArray: n.bindVertexArrayOES.bind(n)
        } : null;
      }
      /***/

    },

    /***/
    "kbDN":
    /*!***************************************************************!*\
      !*** ./node_modules/@arcgis/core/views/webgl/Renderbuffer.js ***!
      \***************************************************************/

    /*! exports provided: default */

    /***/
    function kbDN(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /*
      All material copyright ESRI, All Rights Reserved, unless otherwise specified.
      See https://js.arcgis.com/4.18/esri/copyright.txt for details.
      */


      var t = 0;
      /* harmony default export */

      __webpack_exports__["default"] = /*#__PURE__*/function () {
        function _class(e, i) {
          _classCallCheck(this, _class);

          this._context = e, this._desc = i, this.id = ++t, this._context.instanceCounter.increment(5, this);
          var n = this._context.gl;
          this.glName = n.createRenderbuffer(), this._context.bindRenderbuffer(this), n.renderbufferStorage(n.RENDERBUFFER, i.internalFormat, i.width, i.height);
        }

        _createClass(_class, [{
          key: "descriptor",
          get: function get() {
            return this._desc;
          }
        }, {
          key: "resize",
          value: function resize(t, e) {
            var i = this._desc;
            if (i.width === t && i.height === e) return;
            i.width = t, i.height = e;
            var n = this._context.gl;
            this._context.bindRenderbuffer(this), n.renderbufferStorage(n.RENDERBUFFER, i.internalFormat, i.width, i.height);
          }
        }, {
          key: "dispose",
          value: function dispose() {
            this._context && (this._context.gl.deleteRenderbuffer(this.glName), this._context.instanceCounter.decrement(5, this), this._context = null);
          }
        }]);

        return _class;
      }();
      /***/

    },

    /***/
    "n4uK":
    /*!******************************************************!*\
      !*** ./node_modules/@arcgis/core/chunks/builtins.js ***!
      \******************************************************/

    /*! exports provided: b, l, o */

    /***/
    function n4uK(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "b", function () {
        return o;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "l", function () {
        return r;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "o", function () {
        return t;
      });
      /* harmony import */


      var _commonjsHelpers_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ./_commonjsHelpers.js */
      "X2wA");
      /*
      All material copyright ESRI, All Rights Reserved, unless otherwise specified.
      See https://js.arcgis.com/4.18/esri/copyright.txt for details.
      */


      var r = Object(_commonjsHelpers_js__WEBPACK_IMPORTED_MODULE_0__["c"])(function (e) {
        var r;
        void 0 !== (r = ["precision", "highp", "mediump", "lowp", "attribute", "const", "uniform", "varying", "break", "continue", "do", "for", "while", "if", "else", "in", "out", "inout", "float", "int", "void", "bool", "true", "false", "discard", "return", "mat2", "mat3", "mat4", "vec2", "vec3", "vec4", "ivec2", "ivec3", "ivec4", "bvec2", "bvec3", "bvec4", "sampler1D", "sampler2D", "sampler3D", "samplerCube", "sampler1DShadow", "sampler2DShadow", "struct", "asm", "class", "union", "enum", "typedef", "template", "this", "packed", "goto", "switch", "default", "inline", "noinline", "volatile", "public", "static", "extern", "external", "interface", "long", "short", "double", "half", "fixed", "unsigned", "input", "output", "hvec2", "hvec3", "hvec4", "dvec2", "dvec3", "dvec4", "fvec2", "fvec3", "fvec4", "sampler2DRect", "sampler3DRect", "sampler2DRectShadow", "sizeof", "cast", "namespace", "using"]) && (e.exports = r);
      }),
          t = Object(_commonjsHelpers_js__WEBPACK_IMPORTED_MODULE_0__["c"])(function (e) {
        var r;
        void 0 !== (r = ["<<=", ">>=", "++", "--", "<<", ">>", "<=", ">=", "==", "!=", "&&", "||", "+=", "-=", "*=", "/=", "%=", "&=", "^^", "^=", "|=", "(", ")", "[", "]", ".", "!", "~", "*", "/", "%", "+", "-", "<", ">", "&", "^", "|", "?", ":", "=", ",", ";", "{", "}"]) && (e.exports = r);
      }),
          o = Object(_commonjsHelpers_js__WEBPACK_IMPORTED_MODULE_0__["c"])(function (e) {
        var r;
        void 0 !== (r = ["abs", "acos", "all", "any", "asin", "atan", "ceil", "clamp", "cos", "cross", "dFdx", "dFdy", "degrees", "distance", "dot", "equal", "exp", "exp2", "faceforward", "floor", "fract", "gl_BackColor", "gl_BackLightModelProduct", "gl_BackLightProduct", "gl_BackMaterial", "gl_BackSecondaryColor", "gl_ClipPlane", "gl_ClipVertex", "gl_Color", "gl_DepthRange", "gl_DepthRangeParameters", "gl_EyePlaneQ", "gl_EyePlaneR", "gl_EyePlaneS", "gl_EyePlaneT", "gl_Fog", "gl_FogCoord", "gl_FogFragCoord", "gl_FogParameters", "gl_FragColor", "gl_FragCoord", "gl_FragData", "gl_FragDepth", "gl_FragDepthEXT", "gl_FrontColor", "gl_FrontFacing", "gl_FrontLightModelProduct", "gl_FrontLightProduct", "gl_FrontMaterial", "gl_FrontSecondaryColor", "gl_LightModel", "gl_LightModelParameters", "gl_LightModelProducts", "gl_LightProducts", "gl_LightSource", "gl_LightSourceParameters", "gl_MaterialParameters", "gl_MaxClipPlanes", "gl_MaxCombinedTextureImageUnits", "gl_MaxDrawBuffers", "gl_MaxFragmentUniformComponents", "gl_MaxLights", "gl_MaxTextureCoords", "gl_MaxTextureImageUnits", "gl_MaxTextureUnits", "gl_MaxVaryingFloats", "gl_MaxVertexAttribs", "gl_MaxVertexTextureImageUnits", "gl_MaxVertexUniformComponents", "gl_ModelViewMatrix", "gl_ModelViewMatrixInverse", "gl_ModelViewMatrixInverseTranspose", "gl_ModelViewMatrixTranspose", "gl_ModelViewProjectionMatrix", "gl_ModelViewProjectionMatrixInverse", "gl_ModelViewProjectionMatrixInverseTranspose", "gl_ModelViewProjectionMatrixTranspose", "gl_MultiTexCoord0", "gl_MultiTexCoord1", "gl_MultiTexCoord2", "gl_MultiTexCoord3", "gl_MultiTexCoord4", "gl_MultiTexCoord5", "gl_MultiTexCoord6", "gl_MultiTexCoord7", "gl_Normal", "gl_NormalMatrix", "gl_NormalScale", "gl_ObjectPlaneQ", "gl_ObjectPlaneR", "gl_ObjectPlaneS", "gl_ObjectPlaneT", "gl_Point", "gl_PointCoord", "gl_PointParameters", "gl_PointSize", "gl_Position", "gl_ProjectionMatrix", "gl_ProjectionMatrixInverse", "gl_ProjectionMatrixInverseTranspose", "gl_ProjectionMatrixTranspose", "gl_SecondaryColor", "gl_TexCoord", "gl_TextureEnvColor", "gl_TextureMatrix", "gl_TextureMatrixInverse", "gl_TextureMatrixInverseTranspose", "gl_TextureMatrixTranspose", "gl_Vertex", "greaterThan", "greaterThanEqual", "inversesqrt", "length", "lessThan", "lessThanEqual", "log", "log2", "matrixCompMult", "max", "min", "mix", "mod", "normalize", "not", "notEqual", "pow", "radians", "reflect", "refract", "sign", "sin", "smoothstep", "sqrt", "step", "tan", "texture2D", "texture2DLod", "texture2DProj", "texture2DProjLod", "textureCube", "textureCubeLod", "texture2DLodEXT", "texture2DProjLodEXT", "textureCubeLodEXT", "texture2DGradEXT", "texture2DProjGradEXT", "textureCubeGradEXT"]) && (e.exports = r);
      });
      /***/
    },

    /***/
    "of9L":
    /*!**********************************************************!*\
      !*** ./node_modules/@arcgis/core/views/webgl/Texture.js ***!
      \**********************************************************/

    /*! exports provided: default */

    /***/
    function of9L(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony import */


      var _core_maybe_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ../../core/maybe.js */
      "srIe");
      /* harmony import */


      var _core_mathUtils_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ../../core/mathUtils.js */
      "OKTS");
      /*
      All material copyright ESRI, All Rights Reserved, unless otherwise specified.
      See https://js.arcgis.com/4.18/esri/copyright.txt for details.
      */


      var i = /*#__PURE__*/function () {
        function i(t, e) {
          var _i3 = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : null;

          _classCallCheck(this, i);

          this._context = null, this._glName = null, this.id = a++, this._descriptor = void 0, this._samplingModeDirty = !1, this._wrapModeDirty = !1, this._boundToUnits = new Set(), t.instanceCounter.increment(0, this), this._context = t, this._descriptor = _objectSpread({
            target: 3553,
            samplingMode: 9729,
            wrapMode: 10497,
            flipped: !1,
            hasMipmap: !1,
            isOpaque: !1,
            unpackAlignment: 4,
            preMultiplyAlpha: !1
          }, e), this.setData(_i3);
        }

        _createClass(i, [{
          key: "glName",
          get: function get() {
            return this._glName;
          }
        }, {
          key: "descriptor",
          get: function get() {
            return this._descriptor;
          }
        }, {
          key: "dispose",
          value: function dispose() {
            var _this3 = this;

            if (this._context && this._context.gl) {
              if (this._glName) {
                var t = this._context.gl;
                this._boundToUnits.forEach(function (t) {
                  _this3._context.bindTexture(null, t);
                }), t.deleteTexture(this._glName), this._glName = null;
              }

              this._context.instanceCounter.decrement(0, this), this._context = null;
            }
          }
        }, {
          key: "release",
          value: function release() {
            this.dispose();
          }
        }, {
          key: "resize",
          value: function resize(t, e) {
            var _i4 = this._descriptor;
            _i4.width === t && _i4.height === e || (_i4.width = t, _i4.height = e, this.setData(null));
          }
        }, {
          key: "setData",
          value: function setData(e) {
            if (!this._context || !this._context.gl) return;
            var a = this._context.gl;
            this._glName || (this._glName = a.createTexture()), void 0 === e && (e = null), null === e && (this._descriptor.width = this._descriptor.width || 4, this._descriptor.height = this._descriptor.height || 4);

            var s = this._context.getBoundTexture(0);

            this._context.bindTexture(this, 0);

            var o = this._descriptor;
            i._validateTexture(o), a.pixelStorei(a.UNPACK_ALIGNMENT, o.unpackAlignment), a.pixelStorei(a.UNPACK_FLIP_Y_WEBGL, o.flipped ? 1 : 0), a.pixelStorei(a.UNPACK_PREMULTIPLY_ALPHA_WEBGL, o.preMultiplyAlpha ? 1 : 0);
            var r = o.pixelFormat;
            var n = o.internalFormat ? o.internalFormat : r;

            if (e instanceof ImageData || e instanceof HTMLImageElement || e instanceof HTMLCanvasElement || e instanceof HTMLVideoElement) {
              var t = e.width,
                  _i10 = e.height;
              e instanceof HTMLVideoElement && (t = e.videoWidth, _i10 = e.videoHeight), o.width && o.height && console.assert(t === o.width && _i10 === o.height), a.texImage2D(a.TEXTURE_2D, 0, n, r, o.dataType, e), o.hasMipmap && this.generateMipmap(), void 0 === o.width && (o.width = t), void 0 === o.height && (o.height = _i10);
            } else {
              null != o.width && null != o.height || console.error("Width and height must be specified!"), a.DEPTH24_STENCIL8 && n === a.DEPTH_STENCIL && (n = a.DEPTH24_STENCIL8);
              var _i11 = o.width,
                  _s2 = o.height;

              if (function (e) {
                return Object(_core_maybe_js__WEBPACK_IMPORTED_MODULE_0__["isSome"])(e) && "type" in e && "compressed" === e.type;
              }(e)) {
                var _t10 = Math.round(Math.log(Math.max(_i11, _s2)) / Math.LN2) + 1;

                o.hasMipmap = o.hasMipmap && _t10 === e.levels.length;

                for (var _t11 = 0;; ++_t11) {
                  var _r6 = e.levels[Math.min(_t11, e.levels.length - 1)];
                  if (a.compressedTexImage2D(a.TEXTURE_2D, _t11, n, _i11, _s2, 0, _r6), 1 === _i11 && 1 === _s2 || !o.hasMipmap) break;
                  _i11 = Math.max(1, _i11 >> 1), _s2 = Math.max(1, _s2 >> 1);
                }
              } else if (Object(_core_maybe_js__WEBPACK_IMPORTED_MODULE_0__["isSome"])(e)) a.texImage2D(a.TEXTURE_2D, 0, n, _i11, _s2, 0, r, o.dataType, e), o.hasMipmap && this.generateMipmap();else for (var _t12 = 0; a.texImage2D(a.TEXTURE_2D, _t12, n, _i11, _s2, 0, r, o.dataType, null), (1 !== _i11 || 1 !== _s2) && o.hasMipmap; ++_t12) {
                _i11 = Math.max(1, _i11 >> 1), _s2 = Math.max(1, _s2 >> 1);
              }
            }

            i._applySamplingMode(a, this._descriptor), i._applyWrapMode(a, this._descriptor), i._applyAnisotropicFilteringParameters(this._context, this._descriptor), this._context.bindTexture(s, 0);
          }
        }, {
          key: "updateData",
          value: function updateData(t, e, _i7, a, s, o) {
            o || console.error("An attempt to use uninitialized data!"), this._glName || console.error("An attempt to update uninitialized texture!");

            var r = this._context.gl,
                n = this._descriptor,
                p = this._context.getBoundTexture(0);

            this._context.bindTexture(this, 0), (e < 0 || _i7 < 0 || a > n.width || s > n.height || e + a > n.width || _i7 + s > n.height) && console.error("An attempt to update out of bounds of the texture!"), r.pixelStorei(r.UNPACK_ALIGNMENT, n.unpackAlignment), r.pixelStorei(r.UNPACK_FLIP_Y_WEBGL, n.flipped ? 1 : 0), r.pixelStorei(r.UNPACK_PREMULTIPLY_ALPHA_WEBGL, n.preMultiplyAlpha ? 1 : 0), o instanceof ImageData || o instanceof HTMLImageElement || o instanceof HTMLCanvasElement || o instanceof HTMLVideoElement ? r.texSubImage2D(r.TEXTURE_2D, t, e, _i7, n.pixelFormat, n.dataType, o) : r.texSubImage2D(r.TEXTURE_2D, t, e, _i7, a, s, n.pixelFormat, n.dataType, o), this._context.bindTexture(p, 0);
          }
        }, {
          key: "generateMipmap",
          value: function generateMipmap() {
            var t = this._descriptor;
            t.hasMipmap || (t.hasMipmap = !0, this._samplingModeDirty = !0, i._validateTexture(t)), 9729 === t.samplingMode ? (this._samplingModeDirty = !0, t.samplingMode = 9985) : 9728 === t.samplingMode && (this._samplingModeDirty = !0, t.samplingMode = 9984);

            var e = this._context.getBoundTexture(0);

            this._context.bindTexture(this, 0);

            var a = this._context.gl;
            a.generateMipmap(a.TEXTURE_2D), this._context.bindTexture(e, 0);
          }
        }, {
          key: "setSamplingMode",
          value: function setSamplingMode(t) {
            t !== this._descriptor.samplingMode && (this._descriptor.samplingMode = t, i._validateTexture(this._descriptor), this._samplingModeDirty = !0);
          }
        }, {
          key: "setWrapMode",
          value: function setWrapMode(t) {
            t !== this._descriptor.wrapMode && (this._descriptor.wrapMode = t, i._validateTexture(this._descriptor), this._wrapModeDirty = !0);
          }
        }, {
          key: "applyChanges",
          value: function applyChanges() {
            var t = this._context.gl,
                e = this._descriptor;
            this._samplingModeDirty && (i._applySamplingMode(t, e), this._samplingModeDirty = !1), this._wrapModeDirty && (i._applyWrapMode(t, e), this._wrapModeDirty = !1);
          }
        }, {
          key: "setBoundToUnit",
          value: function setBoundToUnit(t, e) {
            e ? this._boundToUnits.add(t) : this._boundToUnits["delete"](t);
          }
        }], [{
          key: "_validateTexture",
          value: function _validateTexture(t) {
            (t.width < 0 || t.height < 0) && console.error("Negative dimension parameters are not allowed!");
            Object(_core_mathUtils_js__WEBPACK_IMPORTED_MODULE_1__["isPowerOfTwo"])(t.width) && Object(_core_mathUtils_js__WEBPACK_IMPORTED_MODULE_1__["isPowerOfTwo"])(t.height) || ("number" == typeof t.wrapMode ? 33071 !== t.wrapMode && console.error("Non-power-of-two textures must have a wrap mode of CLAMP_TO_EDGE!") : 33071 === t.wrapMode.s && 33071 === t.wrapMode.t || console.error("Non-power-of-two textures must have a wrap mode of CLAMP_TO_EDGE!"), t.hasMipmap && console.error("Mipmapping requires power-of-two textures!"));
          }
        }, {
          key: "_applySamplingMode",
          value: function _applySamplingMode(t, e) {
            var _i8 = e.samplingMode,
                a = e.samplingMode;
            9985 === _i8 || 9987 === _i8 ? (_i8 = 9729, e.hasMipmap || (a = 9729)) : 9984 !== _i8 && 9986 !== _i8 || (_i8 = 9728, e.hasMipmap || (a = 9728)), t.texParameteri(t.TEXTURE_2D, t.TEXTURE_MAG_FILTER, _i8), t.texParameteri(t.TEXTURE_2D, t.TEXTURE_MIN_FILTER, a);
          }
        }, {
          key: "_applyWrapMode",
          value: function _applyWrapMode(t, e) {
            "number" == typeof e.wrapMode ? (t.texParameteri(t.TEXTURE_2D, t.TEXTURE_WRAP_S, e.wrapMode), t.texParameteri(t.TEXTURE_2D, t.TEXTURE_WRAP_T, e.wrapMode)) : (t.texParameteri(t.TEXTURE_2D, t.TEXTURE_WRAP_S, e.wrapMode.s), t.texParameteri(t.TEXTURE_2D, t.TEXTURE_WRAP_T, e.wrapMode.t));
          }
        }, {
          key: "_applyAnisotropicFilteringParameters",
          value: function _applyAnisotropicFilteringParameters(t, e) {
            if (null == e.maxAnisotropy) return;
            var _i9 = t.capabilities.textureFilterAnisotropic;
            if (!_i9) return;
            var a = t.gl;
            a.texParameterf(a.TEXTURE_2D, _i9.TEXTURE_MAX_ANISOTROPY, e.maxAnisotropy);
          }
        }]);

        return i;
      }();

      var a = 0;
      /* harmony default export */

      __webpack_exports__["default"] = i;
      /***/
    },

    /***/
    "r3F2":
    /*!******************************************************************!*\
      !*** ./node_modules/@arcgis/core/views/webgl/InstanceCounter.js ***!
      \******************************************************************/

    /*! exports provided: InstanceCounter */

    /***/
    function r3F2(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "InstanceCounter", function () {
        return t;
      });
      /*
      All material copyright ESRI, All Rights Reserved, unless otherwise specified.
      See https://js.arcgis.com/4.18/esri/copyright.txt for details.
      */


      var t = /*#__PURE__*/function () {
        function t() {
          _classCallCheck(this, t);

          for (this._current = new Array(), this._max = new Array(), this._allocations = new Map(); this._current.length < 6;) {
            this._current.push(0), this._max.push(0);
          }
        }

        _createClass(t, [{
          key: "resetMax",
          value: function resetMax() {
            for (this._max.length = 0; this._max.length < this._current.length;) {
              this._max.push(0);
            }
          }
        }, {
          key: "increment",
          value: function increment(_t13, e) {
            var s = ++this._current[_t13];
            this._max[_t13] = Math.max(s, this._max[_t13]);
          }
        }, {
          key: "decrement",
          value: function decrement(_t14, e) {
            --this._current[_t14];
          }
        }, {
          key: "max",
          get: function get() {
            return this._max;
          }
        }, {
          key: "current",
          get: function get() {
            return this._current;
          }
        }, {
          key: "printResourceCount",
          value: function printResourceCount() {
            if (console.log("Live objects:"), console.log("Textures: ".concat(this._current[0])), console.log("Buffers: ".concat(this._current[1])), console.log("VAOs: ".concat(this._current[2])), console.log("Programs: ".concat(this._current[3])), console.log("Framebuffers: ".concat(this._current[4])), console.log("Renderbuffers: ".concat(this._current[5])), this._allocations.size > 0) {
              console.log("".concat(this._allocations.size, " live object allocations:"));

              var _t17 = new Map();

              this._allocations.forEach(function (e) {
                var s;

                _t17.set(e, (null != (s = _t17.get(e)) ? s : 0) + 1);
              }), _t17.forEach(function (_t16, e) {
                return console.log(_t16, " : ", e);
              });
            }
          }
        }]);

        return t;
      }();
      /***/

    },

    /***/
    "uzVh":
    /*!********************************************************************!*\
      !*** ./node_modules/@arcgis/core/views/webgl/capabilities/load.js ***!
      \********************************************************************/

    /*! exports provided: loadCapabilities */

    /***/
    function uzVh(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "loadCapabilities", function () {
        return u;
      });
      /* harmony import */


      var _isWebGL2Context_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ./isWebGL2Context.js */
      "xRQN");
      /* harmony import */


      var _DisjointTimerQuery_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./DisjointTimerQuery.js */
      "GprA");
      /* harmony import */


      var _DrawBuffers_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./DrawBuffers.js */
      "RiM0");
      /* harmony import */


      var _Instancing_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./Instancing.js */
      "MTaK");
      /* harmony import */


      var _LoseContext_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ./LoseContext.js */
      "6c4E");
      /* harmony import */


      var _VertexArrayObjects_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ./VertexArrayObjects.js */
      "cXeJ");
      /*
      All material copyright ESRI, All Rights Reserved, unless otherwise specified.
      See https://js.arcgis.com/4.18/esri/copyright.txt for details.
      */


      function u(u, i) {
        var a = i && i.disabledExtensions || {},
            f = i && i.debugWebGLExtensions || {};
        var E,
            s,
            x,
            T,
            F,
            R,
            X,
            A,
            c,
            g,
            S = null,
            d = null,
            B = null,
            G = null;
        return {
          get drawBuffers() {
            return g || (g = Object(_DrawBuffers_js__WEBPACK_IMPORTED_MODULE_2__["load"])(u, a)), g;
          },

          get instancing() {
            return E || (E = Object(_Instancing_js__WEBPACK_IMPORTED_MODULE_3__["load"])(u)), E;
          },

          get vao() {
            return s || (s = Object(_VertexArrayObjects_js__WEBPACK_IMPORTED_MODULE_5__["load"])(u, a)), s;
          },

          get compressedTextureS3TC() {
            return x || (x = function (t, e) {
              if (e.compressedTextureS3TC) return null;
              var r = t.getExtension("WEBGL_compressed_texture_s3tc");
              if (!r) return null;
              return {
                COMPRESSED_RGB_S3TC_DXT1: r.COMPRESSED_RGB_S3TC_DXT1_EXT,
                COMPRESSED_RGBA_S3TC_DXT1: r.COMPRESSED_RGBA_S3TC_DXT1_EXT,
                COMPRESSED_RGBA_S3TC_DXT3: r.COMPRESSED_RGBA_S3TC_DXT3_EXT,
                COMPRESSED_RGBA_S3TC_DXT5: r.COMPRESSED_RGBA_S3TC_DXT5_EXT
              };
            }(u, a)), x;
          },

          get textureFilterAnisotropic() {
            return T || (T = function (t, e) {
              if (e.textureFilterAnisotropic) return null;
              var r = t.getExtension("EXT_texture_filter_anisotropic") || t.getExtension("MOZ_EXT_texture_filter_anisotropic") || t.getExtension("WEBKIT_EXT_texture_filter_anisotropic");
              if (!r) return null;
              return {
                MAX_TEXTURE_MAX_ANISOTROPY: r.MAX_TEXTURE_MAX_ANISOTROPY_EXT,
                TEXTURE_MAX_ANISOTROPY: r.TEXTURE_MAX_ANISOTROPY_EXT
              };
            }(u, a)), T;
          },

          get disjointTimerQuery() {
            return F || (F = Object(_DisjointTimerQuery_js__WEBPACK_IMPORTED_MODULE_1__["createDisjointTimerQuery"])(u, a)), F;
          },

          get textureFloat() {
            return R || (R = function (e, r) {
              if (Object(_isWebGL2Context_js__WEBPACK_IMPORTED_MODULE_0__["default"])(e)) return {
                textureFloat: !0,
                textureFloatLinear: !r.textureFloatLinear && !!e.getExtension("OES_texture_float_linear"),
                textureHalfFloat: !0,
                textureHalfFloatLinear: !r.textureHalfFloatLinear && !!e.getExtension("OES_texture_half_float_linear"),
                HALF_FLOAT: e.HALF_FLOAT
              };

              if (e instanceof WebGLRenderingContext) {
                var t = !r.textureHalfFloat && e.getExtension("OES_texture_half_float");
                return {
                  textureFloat: !r.textureFloat && !!e.getExtension("OES_texture_float"),
                  textureFloatLinear: !r.textureFloatLinear && !!e.getExtension("OES_texture_float_linear"),
                  textureHalfFloat: !!t,
                  textureHalfFloatLinear: !r.textureHalfFloatLinear && !!e.getExtension("OES_texture_half_float_linear"),
                  HALF_FLOAT: t ? t.HALF_FLOAT_OES : void 0
                };
              }

              return null;
            }(u, a)), R;
          },

          get colorBufferFloat() {
            return X || (X = function (e, r) {
              if (Object(_isWebGL2Context_js__WEBPACK_IMPORTED_MODULE_0__["default"])(e)) {
                var t = !r.colorBufferFloat && e.getExtension("EXT_color_buffer_half_float"),
                    n = !r.colorBufferFloat && e.getExtension("EXT_color_buffer_float");
                return t || n ? {
                  textureFloat: !!n,
                  textureHalfFloat: !!t,
                  R16F: e.R16F,
                  RG16F: e.RG16F,
                  RGBA16F: e.RGBA16F,
                  R32F: e.R32F,
                  RG32F: e.RG32F,
                  RGBA32F: e.RGBA32F,
                  R11F_G11F_B10F: e.R11F_G11F_B10F,
                  RGB16F: e.RGB16F
                } : null;
              }

              if (e instanceof WebGLRenderingContext) {
                var _t18 = !r.colorBufferFloat && e.getExtension("EXT_color_buffer_half_float"),
                    _n2 = !r.colorBufferFloat && e.getExtension("WEBGL_color_buffer_float");

                return _t18 || _n2 ? {
                  textureFloat: !!_n2,
                  textureHalfFloat: !!_t18,
                  RGBA16F: _t18 ? _t18.RGBA16F_EXT : void 0,
                  RGB16F: _t18 ? _t18.RGB16F_EXT : void 0,
                  RGBA32F: _n2 ? _n2.RGBA32F_EXT : void 0
                } : null;
              }

              return null;
            }(u, a)), X;
          },

          get blendMinMax() {
            return A || (A = function (e, r) {
              if (Object(_isWebGL2Context_js__WEBPACK_IMPORTED_MODULE_0__["default"])(e)) return {
                MIN: e.MIN,
                MAX: e.MAX
              };
              if (r.blendMinMax) return null;
              {
                var t = e.getExtension("EXT_blend_minmax");
                return t ? {
                  MIN: t.MIN_EXT,
                  MAX: t.MAX_EXT
                } : null;
              }
            }(u, a)), A;
          },

          get depthTexture() {
            return null === S && (S = l(u, a, "depthTexture", !0, ["WEBGL_depth_texture", "MOZ_WEBGL_depth_texture", "WEBKIT_WEBGL_depth_texture"])), S;
          },

          get standardDerivatives() {
            return null === d && (d = l(u, a, "standardDerivatives", !0, ["OES_standard_derivatives"])), d;
          },

          get shaderTextureLOD() {
            return null === B && (B = l(u, a, "shaderTextureLOD", !0, ["EXT_shader_texture_lod"])), B;
          },

          get fragDepth() {
            return null === G && (G = l(u, a, "fragDepth", !0, ["EXT_frag_depth"])), G;
          },

          get loseContext() {
            return c || (c = Object(_LoseContext_js__WEBPACK_IMPORTED_MODULE_4__["load"])(u, f)), c;
          }

        };
      }

      function l(e, r, n, o, _) {
        if (o && Object(_isWebGL2Context_js__WEBPACK_IMPORTED_MODULE_0__["default"])(e)) return !0;
        if (r[n]) return !1;

        var _iterator2 = _createForOfIteratorHelper(_),
            _step2;

        try {
          for (_iterator2.s(); !(_step2 = _iterator2.n()).done;) {
            var t = _step2.value;
            if (e.getExtension(t)) return !0;
          }
        } catch (err) {
          _iterator2.e(err);
        } finally {
          _iterator2.f();
        }

        return !1;
      }
      /***/

    },

    /***/
    "xRQN":
    /*!*******************************************************************************!*\
      !*** ./node_modules/@arcgis/core/views/webgl/capabilities/isWebGL2Context.js ***!
      \*******************************************************************************/

    /*! exports provided: default */

    /***/
    function xRQN(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /*
      All material copyright ESRI, All Rights Reserved, unless otherwise specified.
      See https://js.arcgis.com/4.18/esri/copyright.txt for details.
      */


      function n(n) {
        return window.WebGL2RenderingContext && n instanceof window.WebGL2RenderingContext;
      }
      /* harmony default export */


      __webpack_exports__["default"] = n;
      /***/
    }
  }]);
})();
//# sourceMappingURL=default~layers-BaseDynamicLayerView2D-js~layers-FeatureLayerView2D-js~layers-GeoRSSLayerView2D-js~la~5882bb66-es5.js.map