(function () {
  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["Colorize-js"], {
    /***/
    "P3Vg":
    /*!*********************************************************************************************!*\
      !*** ./node_modules/@arcgis/core/views/2d/engine/webgl/effects/post-processing/Colorize.js ***!
      \*********************************************************************************************/

    /*! exports provided: Colorize */

    /***/
    function P3Vg(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "Colorize", function () {
        return s;
      });
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
      /* harmony import */


      var _VertexStream_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ../../VertexStream.js */
      "gjrC");
      /*
      All material copyright ESRI, All Rights Reserved, unless otherwise specified.
      See https://js.arcgis.com/4.18/esri/copyright.txt for details.
      */


      var s = /*#__PURE__*/function () {
        function s() {
          _classCallCheck(this, s);

          this._size = [0, 0], this._programDesc = {
            vsPath: "post-processing/pp",
            fsPath: "post-processing/filterEffect",
            attributes: {
              a_position: 0
            }
          };
        }

        _createClass(s, [{
          key: "dispose",
          value: function dispose() {
            this._layerFBOTexture && (this._layerFBOTexture.dispose(), this._layerFBOTexture = null);
          }
        }, {
          key: "draw",
          value: function draw(e, t, _s) {
            var r = t.width,
                i = t.height;

            this._createOrResizeResources(e, r, i);

            var o = e.context,
                a = e.painter,
                n = a.materialManager,
                l = this._programDesc,
                c = this._quad,
                h = _s.colorMatrix;
            c.bind();
            var u = this._layerFBOTexture;
            o.bindFramebuffer(t), t.copyToTexture(0, 0, r, i, 0, 0, u), o.setBlendingEnabled(!1), o.setStencilTestEnabled(!1);
            var d = n.getProgram(e, l);
            o.bindProgram(d), o.bindTexture(u, 2), d.setUniformMatrix4fv("u_coefficients", h), d.setUniform1i("u_colorTexture", 2), c.draw(), o.setBlendingEnabled(!0), o.setBlendFunction(1, 771), o.setStencilTestEnabled(!0), c.unbind();
          }
        }, {
          key: "_createOrResizeResources",
          value: function _createOrResizeResources(_s2, r, i) {
            var o = _s2.context;
            this._layerFBOTexture && this._size[0] === r && this._size[1] === i || (this._size[0] = r, this._size[1] = i, this._layerFBOTexture ? this._layerFBOTexture.resize(r, i) : this._layerFBOTexture = new _webgl_Texture_js__WEBPACK_IMPORTED_MODULE_2__["default"](o, {
              target: 3553,
              pixelFormat: 6408,
              internalFormat: 6408,
              dataType: 5121,
              wrapMode: 33071,
              samplingMode: 9729,
              flipped: !1,
              width: r,
              height: i
            }), this._quad || (this._quad = new _VertexStream_js__WEBPACK_IMPORTED_MODULE_5__["default"](o, [-1, -1, 1, -1, -1, 1, 1, 1])));
          }
        }]);

        return s;
      }();
      /***/

    }
  }]);
})();
//# sourceMappingURL=Colorize-js-es5.js.map