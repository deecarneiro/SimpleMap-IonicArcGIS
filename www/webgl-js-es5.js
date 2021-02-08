(function () {
  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["webgl-js"], {
    /***/
    "1F90":
    /*!***************************************************************!*\
      !*** ./node_modules/@arcgis/core/views/webgl/programUtils.js ***!
      \***************************************************************/

    /*! exports provided: createProgram, glslifyDefineMap */

    /***/
    function F90(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "createProgram", function () {
        return t;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "glslifyDefineMap", function () {
        return n;
      });
      /* harmony import */


      var _Program_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ./Program.js */
      "jjdI");
      /*
      All material copyright ESRI, All Rights Reserved, unless otherwise specified.
      See https://js.arcgis.com/4.18/esri/copyright.txt for details.
      */


      function n(e) {
        var n = "";

        for (var _t in e) {
          var o = e[_t];
          if ("boolean" == typeof o) o && (n += "#define ".concat(_t, "\n"));else if ("number" == typeof o) n += "#define ".concat(_t, " ").concat(o.toFixed(), "\n");else if ("object" == typeof o) {
            var _e = o.options;
            var r = 0;

            for (var _t2 in _e) {
              n += "#define ".concat(_e[_t2], " ").concat((r++).toFixed(), "\n");
            }

            n += "#define ".concat(_t, " ").concat(_e[o.value], "\n");
          }
        }

        return n;
      }

      function t(n, t, o, r) {
        o = o || {}, r = r || "";
        var f = "function" == typeof t.shaders ? t.shaders(o) : t.shaders;
        return new _Program_js__WEBPACK_IMPORTED_MODULE_0__["default"](n, r + f.vertexShader, r + f.fragmentShader, t.attributes);
      }
      /***/

    },

    /***/
    "SfCL":
    /*!*****************************************************************!*\
      !*** ./node_modules/@arcgis/core/views/webgl/ShaderCompiler.js ***!
      \*****************************************************************/

    /*! exports provided: default */

    /***/
    function SfCL(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /*
      All material copyright ESRI, All Rights Reserved, unless otherwise specified.
      See https://js.arcgis.com/4.18/esri/copyright.txt for details.
      */

      /* harmony default export */


      __webpack_exports__["default"] = /*#__PURE__*/function () {
        function _class(e) {
          _classCallCheck(this, _class);

          this.readFile = e;
        }

        _createClass(_class, [{
          key: "resolveIncludes",
          value: function resolveIncludes(e) {
            return this.resolve(e);
          }
        }, {
          key: "resolve",
          value: function resolve(e) {
            var _this = this;

            var t = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : new Map();
            if (t.has(e)) return t.get(e);
            var r = this.read(e);
            if (!r) throw new Error("cannot find shader file ".concat(e));
            var s = /^[^\S\n]*#include\s+<(\S+)>[^\S\n]?/gm;
            var n = s.exec(r);
            var l = [];

            for (; null != n;) {
              l.push({
                path: n[1],
                start: n.index,
                length: n[0].length
              }), n = s.exec(r);
            }

            var a = 0,
                h = "";
            return l.forEach(function (e) {
              h += r.slice(a, e.start), h += t.has(e.path) ? "" : _this.resolve(e.path, t), a = e.start + e.length;
            }), h += r.slice(a), t.set(e, h), h;
          }
        }, {
          key: "read",
          value: function read(e) {
            return this.readFile(e);
          }
        }]);

        return _class;
      }();
      /***/

    },

    /***/
    "X2wA":
    /*!**************************************************************!*\
      !*** ./node_modules/@arcgis/core/chunks/_commonjsHelpers.js ***!
      \**************************************************************/

    /*! exports provided: a, b, c, g */

    /***/
    function X2wA(module, __webpack_exports__, __webpack_require__) {
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
        return o;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "g", function () {
        return n;
      });
      /*
      All material copyright ESRI, All Rights Reserved, unless otherwise specified.
      See https://js.arcgis.com/4.18/esri/copyright.txt for details.
      */


      var e = "undefined" != typeof globalThis ? globalThis : "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self ? self : {};

      function n(e) {
        return e && e.__esModule && Object.prototype.hasOwnProperty.call(e, "default") ? e["default"] : e;
      }

      function o(e, n, o) {
        return e(o = {
          path: n,
          exports: {},
          require: function require(e, n) {
            return r(null == n && o.path);
          }
        }, o.exports), o.exports;
      }

      function r() {
        throw new Error("Dynamic requires are not currently supported by @rollup/plugin-commonjs");
      }
      /***/

    },

    /***/
    "tpsn":
    /*!**************************************************!*\
      !*** ./node_modules/@arcgis/core/views/webgl.js ***!
      \**************************************************/

    /*! exports provided: createContextOrErrorHTML, Program, BufferObject, Texture, VertexArrayObject, Renderbuffer, FramebufferObject, createProgram, glslifyDefineMap, ProgramCache, RenderingContext, ShaderCompiler */

    /***/
    function tpsn(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony import */


      var _webgl_context_util_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ./webgl/context-util.js */
      "zBXm");
      /* harmony reexport (safe) */


      __webpack_require__.d(__webpack_exports__, "createContextOrErrorHTML", function () {
        return _webgl_context_util_js__WEBPACK_IMPORTED_MODULE_0__["createContextOrErrorHTML"];
      });
      /* harmony import */


      var _webgl_Program_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./webgl/Program.js */
      "jjdI");
      /* harmony reexport (safe) */


      __webpack_require__.d(__webpack_exports__, "Program", function () {
        return _webgl_Program_js__WEBPACK_IMPORTED_MODULE_1__["default"];
      });
      /* harmony import */


      var _webgl_BufferObject_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./webgl/BufferObject.js */
      "fOQB");
      /* harmony reexport (safe) */


      __webpack_require__.d(__webpack_exports__, "BufferObject", function () {
        return _webgl_BufferObject_js__WEBPACK_IMPORTED_MODULE_2__["default"];
      });
      /* harmony import */


      var _webgl_Texture_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./webgl/Texture.js */
      "of9L");
      /* harmony reexport (safe) */


      __webpack_require__.d(__webpack_exports__, "Texture", function () {
        return _webgl_Texture_js__WEBPACK_IMPORTED_MODULE_3__["default"];
      });
      /* harmony import */


      var _webgl_VertexArrayObject_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ./webgl/VertexArrayObject.js */
      "D6bk");
      /* harmony reexport (safe) */


      __webpack_require__.d(__webpack_exports__, "VertexArrayObject", function () {
        return _webgl_VertexArrayObject_js__WEBPACK_IMPORTED_MODULE_4__["default"];
      });
      /* harmony import */


      var _webgl_Renderbuffer_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ./webgl/Renderbuffer.js */
      "kbDN");
      /* harmony reexport (safe) */


      __webpack_require__.d(__webpack_exports__, "Renderbuffer", function () {
        return _webgl_Renderbuffer_js__WEBPACK_IMPORTED_MODULE_5__["default"];
      });
      /* harmony import */


      var _webgl_FramebufferObject_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ./webgl/FramebufferObject.js */
      "0meK");
      /* harmony reexport (safe) */


      __webpack_require__.d(__webpack_exports__, "FramebufferObject", function () {
        return _webgl_FramebufferObject_js__WEBPACK_IMPORTED_MODULE_6__["default"];
      });
      /* harmony import */


      var _webgl_programUtils_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! ./webgl/programUtils.js */
      "1F90");
      /* harmony reexport (safe) */


      __webpack_require__.d(__webpack_exports__, "createProgram", function () {
        return _webgl_programUtils_js__WEBPACK_IMPORTED_MODULE_7__["createProgram"];
      });
      /* harmony reexport (safe) */


      __webpack_require__.d(__webpack_exports__, "glslifyDefineMap", function () {
        return _webgl_programUtils_js__WEBPACK_IMPORTED_MODULE_7__["glslifyDefineMap"];
      });
      /* harmony import */


      var _webgl_ProgramCache_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! ./webgl/ProgramCache.js */
      "kGdt");
      /* harmony reexport (safe) */


      __webpack_require__.d(__webpack_exports__, "ProgramCache", function () {
        return _webgl_ProgramCache_js__WEBPACK_IMPORTED_MODULE_8__["default"];
      });
      /* harmony import */


      var _webgl_RenderingContext_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! ./webgl/RenderingContext.js */
      "bfJE");
      /* harmony reexport (safe) */


      __webpack_require__.d(__webpack_exports__, "RenderingContext", function () {
        return _webgl_RenderingContext_js__WEBPACK_IMPORTED_MODULE_9__["default"];
      });
      /* harmony import */


      var _webgl_ShaderCompiler_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
      /*! ./webgl/ShaderCompiler.js */
      "SfCL");
      /* harmony reexport (safe) */


      __webpack_require__.d(__webpack_exports__, "ShaderCompiler", function () {
        return _webgl_ShaderCompiler_js__WEBPACK_IMPORTED_MODULE_10__["default"];
      });
      /*
      All material copyright ESRI, All Rights Reserved, unless otherwise specified.
      See https://js.arcgis.com/4.18/esri/copyright.txt for details.
      */

      /***/

    }
  }]);
})();
//# sourceMappingURL=webgl-js-es5.js.map