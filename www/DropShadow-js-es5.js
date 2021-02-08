(function () {
  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["DropShadow-js"], {
    /***/
    "eylR":
    /*!***********************************************************************************************!*\
      !*** ./node_modules/@arcgis/core/views/2d/engine/webgl/effects/post-processing/DropShadow.js ***!
      \***********************************************************************************************/

    /*! exports provided: DropShadow */

    /***/
    function eylR(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "DropShadow", function () {
        return a;
      });
      /* harmony import */


      var _core_has_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ../../../../../../core/has.js */
      "wSAH");
      /* harmony import */


      var _core_screenUtils_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ../../../../../../core/screenUtils.js */
      "qRWG");
      /* harmony import */


      var _chunks_builtins_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ../../../../../../chunks/builtins.js */
      "n4uK");
      /* harmony import */


      var _webgl_Texture_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ../../../../../webgl/Texture.js */
      "of9L");
      /* harmony import */


      var _webgl_FramebufferObject_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ../../../../../webgl/FramebufferObject.js */
      "0meK");
      /* harmony import */


      var _webgl_RenderingContext_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ../../../../../webgl/RenderingContext.js */
      "bfJE");
      /* harmony import */


      var _VertexStream_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ../../VertexStream.js */
      "gjrC");
      /*
      All material copyright ESRI, All Rights Reserved, unless otherwise specified.
      See https://js.arcgis.com/4.18/esri/copyright.txt for details.
      */


      var s = [1, 0],
          o = [0, 1];

      var a = /*#__PURE__*/function () {
        function a() {
          _classCallCheck(this, a);

          this._horizontalBlurFBO = null, this._verticalBlurFBO = null, this._size = [0, 0], this._programDesc = {
            blur: {
              vsPath: "post-processing/drop-shadow",
              fsPath: "post-processing/blur/gaussianBlur",
              attributes: {
                a_position: 0
              }
            },
            composite: {
              vsPath: "post-processing/pp",
              fsPath: "post-processing/drop-shadow/composite",
              attributes: {
                a_position: 0
              }
            },
            blit: {
              vsPath: "post-processing/pp",
              fsPath: "post-processing/blit",
              attributes: {
                a_position: 0
              }
            }
          };
        }

        _createClass(a, [{
          key: "dispose",
          value: function dispose() {
            this._layerFBOTexture && (this._layerFBOTexture.dispose(), this._layerFBOTexture = null), this._horizontalBlurFBO && (this._horizontalBlurFBO.dispose(), this._horizontalBlurFBO = null), this._verticalBlurFBO && (this._verticalBlurFBO.dispose(), this._verticalBlurFBO = null);
          }
        }, {
          key: "draw",
          value: function draw(e, r, _a) {
            var l = e.context,
                n = e.state,
                u = e.painter,
                h = e.pixelRatio,
                p = u.materialManager,
                d = this._programDesc,
                c = r.width,
                _ = r.height,
                m = [Math.round(c / 2), Math.round(_ / 2)],
                f = _a.blurRadius,
                B = _a.offsetX,
                g = _a.offsetY,
                b = _a.color,
                F = [h * Object(_core_screenUtils_js__WEBPACK_IMPORTED_MODULE_1__["pt2px"])(B / 2), h * Object(_core_screenUtils_js__WEBPACK_IMPORTED_MODULE_1__["pt2px"])(g / 2)];

            this._createOrResizeResources(e, c, _, m);

            var x = this._horizontalBlurFBO,
                T = this._verticalBlurFBO;
            l.setStencilWriteMask(0), l.setStencilTestEnabled(!1), l.setDepthWriteEnabled(!1), l.setDepthTestEnabled(!1);
            var O = this._layerFBOTexture;
            r.copyToTexture(0, 0, c, _, 0, 0, O), this._quad || (this._quad = new _VertexStream_js__WEBPACK_IMPORTED_MODULE_6__["default"](l, [-1, -1, 1, -1, -1, 1, 1, 1])), l.setViewport(0, 0, m[0], m[1]);
            var w = this._quad;
            w.bind(), l.setBlendingEnabled(!1);
            var v = p.getProgram(e, d.blur, [{
              name: "radius",
              value: Math.ceil(f)
            }]);
            l.bindProgram(v), l.bindFramebuffer(x), l.bindTexture(r.colorTexture, 4), v.setUniformMatrix3fv("u_displayViewMat3", n.displayMat3), v.setUniform2fv("u_offset", F), v.setUniform1i("u_colorTexture", 4), v.setUniform2fv("u_texSize", m), v.setUniform2fv("u_direction", s), v.setUniform1f("u_sigma", f), w.draw(), l.bindFramebuffer(T), l.bindTexture(x.colorTexture, 5), v.setUniformMatrix3fv("u_displayViewMat3", n.displayMat3), v.setUniform2fv("u_offset", [0, 0]), v.setUniform1i("u_colorTexture", 5), v.setUniform2fv("u_direction", o), w.draw(), l.bindFramebuffer(r), l.setViewport(0, 0, c, _);
            var z = p.getProgram(e, d.composite);
            l.bindProgram(z), l.bindTexture(T.colorTexture, 2), z.setUniform1i("u_blurTexture", 2), l.bindTexture(O, 3), z.setUniform1i("u_layerFBOTexture", 3), z.setUniform4fv("u_shadowColor", [b[3] * (b[0] / 255), b[3] * (b[1] / 255), b[3] * (b[2] / 255), b[3]]), w.draw(), l.setBlendingEnabled(!0), l.setStencilTestEnabled(!0), l.setBlendFunction(1, 771), w.unbind();
          }
        }, {
          key: "_createOrResizeResources",
          value: function _createOrResizeResources(t, i, s, o) {
            var _a2 = t.context;
            this._horizontalBlurFBO && this._size[0] === i && this._size[1] === s || (this._size[0] = i, this._size[1] = s, this._horizontalBlurFBO ? this._horizontalBlurFBO.resize(o[0], o[1]) : this._horizontalBlurFBO = new _webgl_FramebufferObject_js__WEBPACK_IMPORTED_MODULE_4__["default"](_a2, {
              colorTarget: 0,
              depthStencilTarget: 0,
              width: o[0],
              height: o[1]
            }, {
              target: 3553,
              pixelFormat: 6408,
              internalFormat: 6408,
              dataType: 5121,
              wrapMode: 33071,
              samplingMode: 9729,
              flipped: !1,
              width: o[0],
              height: o[1]
            }), this._verticalBlurFBO ? this._verticalBlurFBO.resize(o[0], o[1]) : this._verticalBlurFBO = new _webgl_FramebufferObject_js__WEBPACK_IMPORTED_MODULE_4__["default"](_a2, {
              colorTarget: 0,
              depthStencilTarget: 0,
              width: o[0],
              height: o[1]
            }, {
              target: 3553,
              pixelFormat: 6408,
              internalFormat: 6408,
              dataType: 5121,
              wrapMode: 33071,
              samplingMode: 9729,
              flipped: !1,
              width: o[0],
              height: o[1]
            }), this._layerFBOTexture ? this._layerFBOTexture.resize(i, s) : this._layerFBOTexture = new _webgl_Texture_js__WEBPACK_IMPORTED_MODULE_3__["default"](_a2, {
              target: 3553,
              pixelFormat: 6408,
              internalFormat: 6408,
              dataType: 5121,
              wrapMode: 33071,
              samplingMode: 9729,
              flipped: !1,
              width: i,
              height: s
            }));
          }
        }]);

        return a;
      }();
      /***/

    }
  }]);
})();
//# sourceMappingURL=DropShadow-js-es5.js.map