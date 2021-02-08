(function () {
  function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

  function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["layers-support-RasterWorker-js"], {
    /***/
    "DABJ":
    /*!******************************************************************!*\
      !*** ./node_modules/@arcgis/core/layers/support/RasterWorker.js ***!
      \******************************************************************/

    /*! exports provided: default */

    /***/
    function DABJ(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony import */


      var _core_promiseUtils_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ../../core/promiseUtils.js */
      "9MzC");
      /* harmony import */


      var _geometry_Extent_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ../../geometry/Extent.js */
      "OvF4");
      /* harmony import */


      var _geometry_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ../../geometry.js */
      "4GrV");
      /* harmony import */


      var _PixelBlock_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./PixelBlock.js */
      "Piei");
      /* harmony import */


      var _rasterFormats_RasterCodec_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ./rasterFormats/RasterCodec.js */
      "FFFX");
      /* harmony import */


      var _rasterFunctions_pixelUtils_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ./rasterFunctions/pixelUtils.js */
      "ne7T");
      /* harmony import */


      var _renderers_support_RasterSymbolizer_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ../../renderers/support/RasterSymbolizer.js */
      "ciAr");
      /*
      All material copyright ESRI, All Rights Reserved, unless otherwise specified.
      See https://js.arcgis.com/4.18/esri/copyright.txt for details.
      */

      /* harmony default export */


      __webpack_exports__["default"] = /*#__PURE__*/function () {
        function _class() {
          _classCallCheck(this, _class);
        }

        _createClass(_class, [{
          key: "decode",
          value: function () {
            var _decode = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(r) {
              var t;
              return regeneratorRuntime.wrap(function _callee$(_context) {
                while (1) {
                  switch (_context.prev = _context.next) {
                    case 0:
                      _context.next = 2;
                      return Object(_rasterFormats_RasterCodec_js__WEBPACK_IMPORTED_MODULE_4__["decode"])(r.data, r.options);

                    case 2:
                      t = _context.sent;
                      return _context.abrupt("return", t && t.toJSON());

                    case 4:
                    case "end":
                      return _context.stop();
                  }
                }
              }, _callee);
            }));

            function decode(_x) {
              return _decode.apply(this, arguments);
            }

            return decode;
          }()
        }, {
          key: "symbolize",
          value: function symbolize(o) {
            o.pixelBlock = _PixelBlock_js__WEBPACK_IMPORTED_MODULE_3__["default"].fromJSON(o.pixelBlock), o.extent = o.extent ? _geometry_Extent_js__WEBPACK_IMPORTED_MODULE_1__["default"].fromJSON(o.extent) : null;
            var s = this.symbolizer.symbolize(o);
            return Object(_core_promiseUtils_js__WEBPACK_IMPORTED_MODULE_0__["resolve"])(s && s.toJSON());
          }
        }, {
          key: "updateSymbolizer",
          value: function () {
            var _updateSymbolizer = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee2(r) {
              var t;
              return regeneratorRuntime.wrap(function _callee2$(_context2) {
                while (1) {
                  switch (_context2.prev = _context2.next) {
                    case 0:
                      this.symbolizer = _renderers_support_RasterSymbolizer_js__WEBPACK_IMPORTED_MODULE_6__["default"].fromJSON(r.symbolizerJSON), r.histograms && "rasterStretch" === (null == (t = this.symbolizer) ? void 0 : t.rendererJSON.type) && (this.symbolizer.rendererJSON.histograms = r.histograms);

                    case 1:
                    case "end":
                      return _context2.stop();
                  }
                }
              }, _callee2, this);
            }));

            function updateSymbolizer(_x2) {
              return _updateSymbolizer.apply(this, arguments);
            }

            return updateSymbolizer;
          }()
        }, {
          key: "stretch",
          value: function stretch(t) {
            var o = this.symbolizer.simpleStretch(_PixelBlock_js__WEBPACK_IMPORTED_MODULE_3__["default"].fromJSON(t.srcPixelBlock), t.stretchParams);
            return Object(_core_promiseUtils_js__WEBPACK_IMPORTED_MODULE_0__["resolve"])(o && o.toJSON());
          }
        }, {
          key: "estimateStatisticsHistograms",
          value: function estimateStatisticsHistograms(t) {
            var o = Object(_rasterFunctions_pixelUtils_js__WEBPACK_IMPORTED_MODULE_5__["estimateStatisticsHistograms"])(_PixelBlock_js__WEBPACK_IMPORTED_MODULE_3__["default"].fromJSON(t.srcPixelBlock));
            return Object(_core_promiseUtils_js__WEBPACK_IMPORTED_MODULE_0__["resolve"])(o);
          }
        }, {
          key: "split",
          value: function split(t) {
            var o = Object(_rasterFunctions_pixelUtils_js__WEBPACK_IMPORTED_MODULE_5__["split"])(_PixelBlock_js__WEBPACK_IMPORTED_MODULE_3__["default"].fromJSON(t.srcPixelBlock), t.tileSize, t.maximumPyramidLevel);
            return o && o.forEach(function (r, t) {
              o.set(t, null == r ? void 0 : r.toJSON());
            }), Object(_core_promiseUtils_js__WEBPACK_IMPORTED_MODULE_0__["resolve"])(o);
          }
        }, {
          key: "mosaicAndTransform",
          value: function () {
            var _mosaicAndTransform = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee3(r) {
              var t, o, s;
              return regeneratorRuntime.wrap(function _callee3$(_context3) {
                while (1) {
                  switch (_context3.prev = _context3.next) {
                    case 0:
                      t = r.srcPixelBlocks.map(function (r) {
                        return r ? new _PixelBlock_js__WEBPACK_IMPORTED_MODULE_3__["default"](r) : null;
                      }), o = Object(_rasterFunctions_pixelUtils_js__WEBPACK_IMPORTED_MODULE_5__["mosaic"])(t, r.srcMosaicSize);

                      if (r.coefs) {
                        _context3.next = 3;
                        break;
                      }

                      return _context3.abrupt("return", o && o.toJSON());

                    case 3:
                      s = Object(_rasterFunctions_pixelUtils_js__WEBPACK_IMPORTED_MODULE_5__["approximateTransform"])(o, r.destDimension, r.coefs, r.sampleSpacing, r.interpolation);
                      return _context3.abrupt("return", s && s.toJSON());

                    case 5:
                    case "end":
                      return _context3.stop();
                  }
                }
              }, _callee3);
            }));

            function mosaicAndTransform(_x3) {
              return _mosaicAndTransform.apply(this, arguments);
            }

            return mosaicAndTransform;
          }()
        }]);

        return _class;
      }();
      /***/

    }
  }]);
})();
//# sourceMappingURL=layers-support-RasterWorker-js-es5.js.map