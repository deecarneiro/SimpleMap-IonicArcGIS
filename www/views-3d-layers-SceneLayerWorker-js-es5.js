(function () {
  function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

  function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["views-3d-layers-SceneLayerWorker-js"], {
    /***/
    "KgD9":
    /*!***********************************************************************!*\
      !*** ./node_modules/@arcgis/core/views/3d/layers/SceneLayerWorker.js ***!
      \***********************************************************************/

    /*! exports provided: destroyContext, dracoDecompressPointCloudData, filterObbsForModifications, filterObbsForModificationsSync, initialize, interpretObbModificationResults, process, setLegacySchema, setModifications, setModificationsSync, test */

    /***/
    function KgD9(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "destroyContext", function () {
        return u;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "dracoDecompressPointCloudData", function () {
        return s;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "filterObbsForModifications", function () {
        return f;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "filterObbsForModificationsSync", function () {
        return d;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "initialize", function () {
        return p;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "interpretObbModificationResults", function () {
        return m;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "process", function () {
        return o;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "setLegacySchema", function () {
        return a;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "setModifications", function () {
        return i;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "setModificationsSync", function () {
        return y;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "test", function () {
        return g;
      });
      /* harmony import */


      var _core_typedArrayUtil_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ../../../core/typedArrayUtil.js */
      "ohva");
      /* harmony import */


      var _core_maybe_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ../../../core/maybe.js */
      "srIe");
      /* harmony import */


      var _core_promiseUtils_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ../../../core/promiseUtils.js */
      "9MzC");
      /* harmony import */


      var _libs_i3s_I3SWorker_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ../../../libs/i3s/I3SWorker.js */
      "jPQz");
      /*
      All material copyright ESRI, All Rights Reserved, unless otherwise specified.
      See https://js.arcgis.com/4.18/esri/copyright.txt for details.
      */


      function o(_x) {
        return _o.apply(this, arguments);
      }

      function _o() {
        _o = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(e) {
          var t;
          return regeneratorRuntime.wrap(function _callee$(_context) {
            while (1) {
              switch (_context.prev = _context.next) {
                case 0:
                  _context.next = 2;
                  return p();

                case 2:
                  t = [e.geometryBuffer];
                  return _context.abrupt("return", {
                    result: b(e, t),
                    transferList: t
                  });

                case 4:
                case "end":
                  return _context.stop();
              }
            }
          }, _callee);
        }));
        return _o.apply(this, arguments);
      }

      function s(_x2) {
        return _s.apply(this, arguments);
      }

      function _s() {
        _s = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee2(t) {
          var r, n, o, s, f, i, a, u, c;
          return regeneratorRuntime.wrap(function _callee2$(_context2) {
            while (1) {
              switch (_context2.prev = _context2.next) {
                case 0:
                  _context2.next = 2;
                  return p();

                case 2:
                  n = [t.geometryBuffer], o = t.geometryBuffer, s = o.byteLength, f = l._malloc(s), i = new Uint8Array(l.HEAPU8.buffer, f, s);
                  i.set(new Uint8Array(o));
                  a = l.dracoDecompressPointCloudData(f, i.byteLength);

                  if (!(l._free(f), a.error.length > 0)) {
                    _context2.next = 7;
                    break;
                  }

                  throw "i3s.wasm: ".concat(a.error);

                case 7:
                  u = (null == (r = a.featureIds) ? void 0 : r.length) > 0 ? Object(_core_typedArrayUtil_js__WEBPACK_IMPORTED_MODULE_0__["slice"])(a.featureIds) : null, c = Object(_core_typedArrayUtil_js__WEBPACK_IMPORTED_MODULE_0__["slice"])(a.positions);
                  u && n.push(u.buffer), n.push(c.buffer);
                  return _context2.abrupt("return", {
                    result: {
                      positions: c,
                      featureIds: u
                    },
                    transferList: n
                  });

                case 10:
                case "end":
                  return _context2.stop();
              }
            }
          }, _callee2);
        }));
        return _s.apply(this, arguments);
      }

      function f(_x3) {
        return _f.apply(this, arguments);
      }

      function _f() {
        _f = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee3(e) {
          var t;
          return regeneratorRuntime.wrap(function _callee3$(_context3) {
            while (1) {
              switch (_context3.prev = _context3.next) {
                case 0:
                  _context3.next = 2;
                  return p();

                case 2:
                  d(e);
                  t = {
                    buffer: e.buffer
                  };
                  return _context3.abrupt("return", {
                    result: t,
                    transferList: [t.buffer]
                  });

                case 5:
                case "end":
                  return _context3.stop();
              }
            }
          }, _callee3);
        }));
        return _f.apply(this, arguments);
      }

      function i(_x4) {
        return _i.apply(this, arguments);
      }

      function _i() {
        _i = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee4(e) {
          return regeneratorRuntime.wrap(function _callee4$(_context4) {
            while (1) {
              switch (_context4.prev = _context4.next) {
                case 0:
                  _context4.next = 2;
                  return p();

                case 2:
                  y(e);

                case 3:
                case "end":
                  return _context4.stop();
              }
            }
          }, _callee4);
        }));
        return _i.apply(this, arguments);
      }

      function a(_x5) {
        return _a.apply(this, arguments);
      }

      function _a() {
        _a = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee5(e) {
          return regeneratorRuntime.wrap(function _callee5$(_context5) {
            while (1) {
              switch (_context5.prev = _context5.next) {
                case 0:
                  _context5.next = 2;
                  return p();

                case 2:
                  l.setLegacySchema(e.context, e.jsonSchema);

                case 3:
                case "end":
                  return _context5.stop();
              }
            }
          }, _callee5);
        }));
        return _a.apply(this, arguments);
      }

      function u(e) {
        E(e);
      }

      var c, l;

      function y(e) {
        var t = e.modifications,
            r = l._malloc(8 * t.length),
            n = new Float64Array(l.HEAPU8.buffer, r, t.length);

        for (var _e = 0; _e < t.length; ++_e) {
          n[_e] = t[_e];
        }

        l.setModifications(e.context, r, t.length, e.isGeodetic), l._free(r);
      }

      function b(r, n) {
        if (!l) return null;

        var o = r.context,
            s = r.localOrigin,
            f = r.globalTrafo,
            i = r.mbs,
            a = r.obb,
            u = r.elevationOffset,
            c = r.geometryBuffer,
            y = r.geometryDescriptor,
            b = r.indexToVertexProjector,
            m = r.vertexToRenderProjector,
            d = l._malloc(c.byteLength),
            E = l._malloc(33 * Float64Array.BYTES_PER_ELEMENT),
            p = new Uint8Array(l.HEAPU8.buffer, d, c.byteLength);

        p.set(new Uint8Array(c));
        var g = new Float64Array(l.HEAPU8.buffer, E, 33);
        h(g, s);
        var w = g.byteOffset + 3 * g.BYTES_PER_ELEMENT,
            A = new Float64Array(g.buffer, w);
        h(A, f), w += 16 * g.BYTES_PER_ELEMENT, A = new Float64Array(g.buffer, w), h(A, i), w += 4 * g.BYTES_PER_ELEMENT, Object(_core_maybe_js__WEBPACK_IMPORTED_MODULE_1__["isSome"])(a) && (A = new Float64Array(g.buffer, w), h(A, a.center), w += 3 * g.BYTES_PER_ELEMENT, A = new Float64Array(g.buffer, w), h(A, a.halfSize), w += 3 * g.BYTES_PER_ELEMENT, A = new Float64Array(g.buffer, w), h(A, a.quaternion));
        var _ = y,
            L = {
          isDraco: !1,
          isLegacy: !1,
          color: r.layouts.some(function (e) {
            return e.some(function (e) {
              return "color" === e.name;
            });
          }),
          normal: r.needNormals && r.layouts.some(function (e) {
            return e.some(function (e) {
              return "normalCompressed" === e.name;
            });
          }),
          uv0: r.layouts.some(function (e) {
            return e.some(function (e) {
              return "uv0" === e.name;
            });
          }),
          uvRegion: r.layouts.some(function (e) {
            return e.some(function (e) {
              return "uvRegion" === e.name;
            });
          }),
          featureIndex: _.featureIndex
        },
            T = l.process(o, !!r.obb, d, p.byteLength, _, L, E, u, b, m, r.normalReferenceFrame);
        if (l._free(E), l._free(d), T.error.length > 0) throw "i3s.wasm: ".concat(T.error);
        if (T.discarded) return null;
        var I = T.componentOffsets.length > 0 ? Object(_core_typedArrayUtil_js__WEBPACK_IMPORTED_MODULE_0__["slice"])(T.componentOffsets) : null,
            P = T.featureIds.length > 0 ? Object(_core_typedArrayUtil_js__WEBPACK_IMPORTED_MODULE_0__["slice"])(T.featureIds) : null,
            U = Object(_core_typedArrayUtil_js__WEBPACK_IMPORTED_MODULE_0__["slice"])(T.interleavedVertedData).buffer,
            B = 1 === T.indicesType ? Object(_core_typedArrayUtil_js__WEBPACK_IMPORTED_MODULE_0__["slice"])(new Uint16Array(T.indices.buffer, T.indices.byteOffset, T.indices.byteLength / 2)) : Object(_core_typedArrayUtil_js__WEBPACK_IMPORTED_MODULE_0__["slice"])(new Uint32Array(T.indices.buffer, T.indices.byteOffset, T.indices.byteLength / 4)),
            F = Object(_core_typedArrayUtil_js__WEBPACK_IMPORTED_MODULE_0__["slice"])(T.positions),
            x = 1 === T.positionIndicesType ? Object(_core_typedArrayUtil_js__WEBPACK_IMPORTED_MODULE_0__["slice"])(new Uint16Array(T.positionIndices.buffer, T.positionIndices.byteOffset, T.positionIndices.byteLength / 2)) : Object(_core_typedArrayUtil_js__WEBPACK_IMPORTED_MODULE_0__["slice"])(new Uint32Array(T.positionIndices.buffer, T.positionIndices.byteOffset, T.positionIndices.byteLength / 4)),
            O = {
          layout: r.layouts[0],
          interleavedVertexData: U,
          indices: B,
          hasColors: T.hasColors,
          hasModifications: T.hasModifications,
          positionData: {
            data: F,
            indices: x
          }
        };
        return P && n.push(P.buffer), I && n.push(I.buffer), n.push(U), n.push(B.buffer), n.push(F.buffer), n.push(x.buffer), {
          componentOffsets: I,
          featureIds: P,
          transformedGeometry: O,
          obb: T.obb
        };
      }

      function m(e) {
        return 0 === e ? 0 : 1 === e ? 1 : 2 === e ? 2 : 3;
      }

      function d(e) {
        var t = e.context,
            r = e.buffer,
            n = l._malloc(r.byteLength),
            o = r.byteLength / Float64Array.BYTES_PER_ELEMENT,
            s = new Float64Array(l.HEAPU8.buffer, n, o),
            f = new Float64Array(r);

        s.set(f), l.filterOBBs(t, n, o), f.set(s), l._free(n);
      }

      function E(e) {
        l && l.destroy(e);
      }

      function h(e, t) {
        for (var r = 0; r < t.length; ++r) {
          e[r] = t[r];
        }
      }

      function p() {
        return l ? Object(_core_promiseUtils_js__WEBPACK_IMPORTED_MODULE_2__["resolve"])() : (c || (c = Object(_libs_i3s_I3SWorker_js__WEBPACK_IMPORTED_MODULE_3__["getWorkerModule"])().then(function (e) {
          l = e, c = null;
        })), c);
      }

      var g = {
        transform: b,
        destroy: E
      };
      /***/
    },

    /***/
    "jPQz":
    /*!*********************************************************!*\
      !*** ./node_modules/@arcgis/core/libs/i3s/I3SWorker.js ***!
      \*********************************************************/

    /*! exports provided: getWorkerModule */

    /***/
    function jPQz(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "getWorkerModule", function () {
        return n;
      });
      /* harmony import */


      var _core_promiseUtils_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ../../core/promiseUtils.js */
      "9MzC");
      /* harmony import */


      var _assets_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ../../assets.js */
      "ss0y");
      /*
      All material copyright ESRI, All Rights Reserved, unless otherwise specified.
      See https://js.arcgis.com/4.18/esri/copyright.txt for details.
      */


      function n() {
        return o || (o = Object(_core_promiseUtils_js__WEBPACK_IMPORTED_MODULE_0__["create"])(function (t) {
          return __webpack_require__.e(
          /*! import() | chunks-i3s-js */
          "chunks-i3s-js").then(__webpack_require__.bind(null,
          /*! ../../chunks/i3s.js */
          "ilXH")).then(function (t) {
            return t.i;
          }).then(function (_ref) {
            var e = _ref["default"];
            var i = e({
              locateFile: r,
              onRuntimeInitialized: function onRuntimeInitialized() {
                return t(i);
              }
            });
            delete i.then;
          });
        })["catch"](function (t) {
          return Object(_core_promiseUtils_js__WEBPACK_IMPORTED_MODULE_0__["reject"])(t);
        })), o;
      }

      function r(t) {
        return Object(_assets_js__WEBPACK_IMPORTED_MODULE_1__["getAssetUrl"])("esri/libs/i3s/".concat(t));
      }

      var o;
      /***/
    }
  }]);
})();
//# sourceMappingURL=views-3d-layers-SceneLayerWorker-js-es5.js.map