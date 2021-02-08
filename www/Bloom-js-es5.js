(function () {
  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["Bloom-js"], {
    /***/
    "mxcV":
    /*!******************************************************************************************!*\
      !*** ./node_modules/@arcgis/core/views/2d/engine/webgl/effects/post-processing/Bloom.js ***!
      \******************************************************************************************/

    /*! exports provided: Bloom */

    /***/
    function mxcV(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "Bloom", function () {
        return n;
      });
      /* harmony import */


      var _core_has_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ../../../../../../core/has.js */
      "wSAH");
      /* harmony import */


      var _core_mathUtils_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ../../../../../../core/mathUtils.js */
      "OKTS");
      /* harmony import */


      var _chunks_builtins_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ../../../../../../chunks/builtins.js */
      "n4uK");
      /* harmony import */


      var _webgl_FramebufferObject_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ../../../../../webgl/FramebufferObject.js */
      "0meK");
      /* harmony import */


      var _webgl_RenderingContext_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ../../../../../webgl/RenderingContext.js */
      "bfJE");
      /* harmony import */


      var _VertexStream_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ../../VertexStream.js */
      "gjrC");
      /*
      All material copyright ESRI, All Rights Reserved, unless otherwise specified.
      See https://js.arcgis.com/4.18/esri/copyright.txt for details.
      */


      var e = [1, 0],
          s = [0, 1],
          r = [1, .8, .6, .4, .2],
          o = [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1];

      var n = /*#__PURE__*/function () {
        function n() {
          _classCallCheck(this, n);

          this._intensityFBO = null, this._compositeFBO = null, this._mipsFBOs = new Array(5), this._nMips = 5, this._kernelSizeArray = [3, 5, 7, 9, 11], this._size = [0, 0], this._programDesc = {
            luminosityHighPass: {
              vsPath: "post-processing/pp",
              fsPath: "post-processing/bloom/luminosityHighPass",
              attributes: {
                a_position: 0
              }
            },
            gaussianBlur: {
              vsPath: "post-processing/pp",
              fsPath: "post-processing/bloom/gaussianBlur",
              attributes: {
                a_position: 0
              }
            },
            composite: {
              vsPath: "post-processing/pp",
              fsPath: "post-processing/bloom/composite",
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

        _createClass(n, [{
          key: "dispose",
          value: function dispose() {
            if (this._quad && (this._quad.dispose(), this._quad = null), this._intensityFBO && (this._intensityFBO.dispose(), this._intensityFBO = null), this._compositeFBO && (this._compositeFBO.dispose(), this._compositeFBO = null), this._mipsFBOs) {
              for (var t = 0; t < this._nMips; t++) {
                this._mipsFBOs[t] && (this._mipsFBOs[t].horizontal.dispose(), this._mipsFBOs[t].vertical.dispose());
              }

              this._mipsFBOs = null;
            }
          }
        }, {
          key: "draw",
          value: function draw(t, _n, a) {
            var h = _n.width,
                l = _n.height,
                u = t.context,
                p = t.painter,
                m = p.materialManager,
                d = u.gl,
                c = this._programDesc,
                _ = a.strength,
                g = a.radius,
                f = a.threshold;
            this._quad || (this._quad = new _VertexStream_js__WEBPACK_IMPORTED_MODULE_5__["default"](u, [-1, -1, 1, -1, -1, 1, 1, 1])), this._createOrResizeResources(t, h, l), u.setStencilTestEnabled(!1), u.setBlendingEnabled(!0), u.setBlendFunction(1, 771), u.setStencilWriteMask(0);
            var b = this._quad;
            b.bind(), u.bindFramebuffer(this._intensityFBO);
            var F = m.getProgram(t, c.luminosityHighPass);
            u.bindProgram(F), u.bindTexture(_n.colorTexture, 0), F.setUniform1i("u_texture", 0), F.setUniform3fv("u_defaultColor", [0, 0, 0]), F.setUniform1f("u_defaultOpacity", 0), F.setUniform1f("u_luminosityThreshold", f), F.setUniform1f("u_smoothWidth", .01);
            var B = [Math.round(h / 2), Math.round(l / 2)];
            u.setViewport(0, 0, B[0], B[1]), u.setClearColor(0, 0, 0, 0), u.clear(d.COLOR_BUFFER_BIT), b.draw(), u.setBlendingEnabled(!1);
            var O = this._intensityFBO.colorTexture;

            for (var i = 0; i < this._nMips; i++) {
              var _r = m.getProgram(t, c.gaussianBlur, [{
                name: "radius",
                value: this._kernelSizeArray[i]
              }]);

              u.bindProgram(_r), u.bindTexture(O, i + 1), _r.setUniform1i("u_colorTexture", i + 1), _r.setUniform2fv("u_texSize", B), _r.setUniform2fv("u_direction", e), u.setViewport(0, 0, B[0], B[1]);
              var _o = this._mipsFBOs[i];
              u.bindFramebuffer(_o.horizontal), b.draw(), O = _o.horizontal.colorTexture, u.bindFramebuffer(_o.vertical), u.bindTexture(O, i + 1), _r.setUniform2fv("u_direction", s), b.draw(), O = _o.vertical.colorTexture, B[0] = Math.round(B[0] / 2), B[1] = Math.round(B[1] / 2);
            }

            u.setViewport(0, 0, h, l);
            var T = m.getProgram(t, c.composite, [{
              name: "nummips",
              value: 5
            }]);
            u.bindFramebuffer(this._compositeFBO), u.bindProgram(T), T.setUniform1f("u_bloomStrength", _), T.setUniform1f("u_bloomRadius", g), T.setUniform1fv("u_bloomFactors", r), T.setUniform3fv("u_bloomTintColors", o), u.bindTexture(this._mipsFBOs[0].vertical.colorTexture, 1), T.setUniform1i("u_blurTexture1", 1), u.bindTexture(this._mipsFBOs[1].vertical.colorTexture, 2), T.setUniform1i("u_blurTexture2", 2), u.bindTexture(this._mipsFBOs[2].vertical.colorTexture, 3), T.setUniform1i("u_blurTexture3", 3), u.bindTexture(this._mipsFBOs[3].vertical.colorTexture, 4), T.setUniform1i("u_blurTexture4", 4), u.bindTexture(this._mipsFBOs[4].vertical.colorTexture, 5), T.setUniform1i("u_blurTexture5", 5), b.draw(), u.bindFramebuffer(_n), u.setBlendingEnabled(!0);
            var x = m.getProgram(t, c.blit);
            u.bindProgram(x), u.bindTexture(this._compositeFBO.colorTexture, 6), x.setUniform1i("u_texture", 6), u.setBlendFunction(1, 1), b.draw(), b.unbind(), u.setBlendFunction(1, 771), u.setStencilTestEnabled(!0);
          }
        }, {
          key: "_createOrResizeResources",
          value: function _createOrResizeResources(i, e, s) {
            var r = i.context;
            if (this._compositeFBO && this._size[0] === e && this._size[1] === s) return;
            this._size[0] = e, this._size[1] = s;
            var o = [Math.round(e / 2), Math.round(s / 2)];
            this._compositeFBO ? this._compositeFBO.resize(e, s) : this._compositeFBO = new _webgl_FramebufferObject_js__WEBPACK_IMPORTED_MODULE_3__["default"](r, {
              colorTarget: 0,
              depthStencilTarget: 0,
              width: e,
              height: s
            }), this._intensityFBO ? this._intensityFBO.resize(o[0], o[1]) : this._intensityFBO = new _webgl_FramebufferObject_js__WEBPACK_IMPORTED_MODULE_3__["default"](r, {
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
            });

            for (var _i = 0; _i < this._nMips; _i++) {
              this._mipsFBOs[_i] ? (this._mipsFBOs[_i].horizontal.resize(o[0], o[1]), this._mipsFBOs[_i].vertical.resize(o[0], o[1])) : this._mipsFBOs[_i] = {
                horizontal: new _webgl_FramebufferObject_js__WEBPACK_IMPORTED_MODULE_3__["default"](r, {
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
                }),
                vertical: new _webgl_FramebufferObject_js__WEBPACK_IMPORTED_MODULE_3__["default"](r, {
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
                })
              }, o[0] = Math.round(o[0] / 2), o[1] = Math.round(o[1] / 2);
            }
          }
        }]);

        return n;
      }();
      /***/

    }
  }]);
})();
//# sourceMappingURL=Bloom-js-es5.js.map