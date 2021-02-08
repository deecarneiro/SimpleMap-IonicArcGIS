(function () {
  function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

  function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

  function _iterableToArrayLimit(arr, i) { if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr))) return; var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

  function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

  function _get(target, property, receiver) { if (typeof Reflect !== "undefined" && Reflect.get) { _get = Reflect.get; } else { _get = function _get(target, property, receiver) { var base = _superPropBase(target, property); if (!base) return; var desc = Object.getOwnPropertyDescriptor(base, property); if (desc.get) { return desc.get.call(receiver); } return desc.value; }; } return _get(target, property, receiver || target); }

  function _superPropBase(object, property) { while (!Object.prototype.hasOwnProperty.call(object, property)) { object = _getPrototypeOf(object); if (object === null) break; } return object; }

  function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

  function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

  function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

  function _possibleConstructorReturn(self, call) { if (call && (typeof call === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

  function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

  function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

  function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

  function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

  function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

  function _createForOfIteratorHelper(o, allowArrayLike) { var it; if (typeof Symbol === "undefined" || o[Symbol.iterator] == null) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e13) { throw _e13; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = o[Symbol.iterator](); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e14) { didErr = true; err = _e14; }, f: function f() { try { if (!normalCompletion && it["return"] != null) it["return"](); } finally { if (didErr) throw err; } } }; }

  function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

  function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["default~layers-GeoRSSLayerView2D-js~layers-GraphicsLayerView2D-js~layers-ImageryLayerView2D-js~layer~f4e9118f"], {
    /***/
    "2AbE":
    /*!**************************************************************************************!*\
      !*** ./node_modules/@arcgis/core/views/2d/layers/features/support/AttributeStore.js ***!
      \**************************************************************************************/

    /*! exports provided: default, DISPLAY_ID_TYPE_AGGREGATE, DISPLAY_ID_TYPE_FEATURE, isAggregateId */

    /***/
    function AbE(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "DISPLAY_ID_TYPE_AGGREGATE", function () {
        return F;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "DISPLAY_ID_TYPE_FEATURE", function () {
        return E;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "isAggregateId", function () {
        return C;
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


      var _core_promiseUtils_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ../../../../../core/promiseUtils.js */
      "9MzC");
      /* harmony import */


      var _core_mathUtils_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ../../../../../core/mathUtils.js */
      "OKTS");
      /* harmony import */


      var _core_accessorSupport_diffUtils_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ../../../../../core/accessorSupport/diffUtils.js */
      "DxxZ");
      /* harmony import */


      var _layers_support_FieldsIndex_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! ../../../../../layers/support/FieldsIndex.js */
      "gLc9");
      /* harmony import */


      var _engine_webgl_definitions_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! ../../../engine/webgl/definitions.js */
      "jIHu");
      /* harmony import */


      var _engine_webgl_Utils_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! ../../../engine/webgl/Utils.js */
      "yN2G");
      /* harmony import */


      var _engine_webgl_util_debug_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
      /*! ../../../engine/webgl/util/debug.js */
      "l8tk");
      /* harmony import */


      var _tileRenderers_support_visualVariablesUtils_js__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
      /*! ../tileRenderers/support/visualVariablesUtils.js */
      "gzK8");
      /*
      All material copyright ESRI, All Rights Reserved, unless otherwise specified.
      See https://js.arcgis.com/4.18/esri/copyright.txt for details.
      */


      var k = _core_Logger_js__WEBPACK_IMPORTED_MODULE_2__["default"].getLogger("esri.views.layers.2d.features.support.AttributeStore"),
          D = Object(_engine_webgl_util_debug_js__WEBPACK_IMPORTED_MODULE_10__["createDebugLogger"])(_engine_webgl_util_debug_js__WEBPACK_IMPORTED_MODULE_10__["DEBUG_ATTR_UPDATES"], k),
          E = 0,
          F = 1,
          U = function U(t) {
        return (2147483648 & t) >>> 31;
      },
          R = function R(t) {
        return 2147483647 & t;
      };

      function C(t) {
        return 1 === U(t);
      }

      var M = {
        sharedArrayBuffer: Object(_core_has_js__WEBPACK_IMPORTED_MODULE_0__["default"])("esri-shared-array-buffer"),
        atomics: Object(_core_has_js__WEBPACK_IMPORTED_MODULE_0__["default"])("esri-atomics")
      };

      function B(t, e) {
        return function (i) {
          return e(t(i));
        };
      }

      var v = /*#__PURE__*/function () {
        function v(t, e, i, s) {
          _classCallCheck(this, v);

          this.size = 0, this.texelSize = 4;
          var r = s.pixelType,
              a = s.layout,
              o = s.textureOnly;
          this.textureOnly = o || !1, this.pixelType = r, this._ctype = e, this.layout = a, this._resetRange(), this._shared = t, this.size = i, o || (this.data = this._initData(r, i, t, e));
        }

        _createClass(v, [{
          key: "buffer",
          get: function get() {
            return Object(_core_maybe_js__WEBPACK_IMPORTED_MODULE_1__["andThen"])(this.data, function (t) {
              return t.buffer;
            });
          }
        }, {
          key: "unsetComponentAllTexels",
          value: function unsetComponentAllTexels(t, e) {
            var i = Object(_core_maybe_js__WEBPACK_IMPORTED_MODULE_1__["unwrap"])(this.data);

            for (var s = 0; s < this.size * this.size; s++) {
              i[s * this.texelSize + t] &= ~e;
            }

            this.dirtyStart = 0, this.dirtyEnd = this.size * this.size - 1;
          }
        }, {
          key: "setComponentAllTexels",
          value: function setComponentAllTexels(t, e) {
            var i = Object(_core_maybe_js__WEBPACK_IMPORTED_MODULE_1__["unwrap"])(this.data);

            for (var s = 0; s < this.size * this.size; s++) {
              i[s * this.texelSize + t] |= 255 & e;
            }

            this.dirtyStart = 0, this.dirtyEnd = this.size * this.size - 1;
          }
        }, {
          key: "setComponent",
          value: function setComponent(t, e, i) {
            var s = Object(_core_maybe_js__WEBPACK_IMPORTED_MODULE_1__["unwrap"])(this.data);

            var _iterator = _createForOfIteratorHelper(i),
                _step;

            try {
              for (_iterator.s(); !(_step = _iterator.n()).done;) {
                var r = _step.value;
                s[r * this.texelSize + t] |= e, this.dirtyStart = Math.min(this.dirtyStart, r), this.dirtyEnd = Math.max(this.dirtyEnd, r);
              }
            } catch (err) {
              _iterator.e(err);
            } finally {
              _iterator.f();
            }
          }
        }, {
          key: "setComponentTexel",
          value: function setComponentTexel(t, e, i) {
            Object(_core_maybe_js__WEBPACK_IMPORTED_MODULE_1__["unwrap"])(this.data)[i * this.texelSize + t] |= e, this.dirtyStart = Math.min(this.dirtyStart, i), this.dirtyEnd = Math.max(this.dirtyEnd, i);
          }
        }, {
          key: "unsetComponentTexel",
          value: function unsetComponentTexel(t, e, i) {
            Object(_core_maybe_js__WEBPACK_IMPORTED_MODULE_1__["unwrap"])(this.data)[i * this.texelSize + t] &= ~e, this.dirtyStart = Math.min(this.dirtyStart, i), this.dirtyEnd = Math.max(this.dirtyEnd, i);
          }
        }, {
          key: "getData",
          value: function getData(t, e) {
            var i = R(t);
            return Object(_core_maybe_js__WEBPACK_IMPORTED_MODULE_1__["unwrap"])(this.data)[i * this.texelSize + e];
          }
        }, {
          key: "setData",
          value: function setData(t, e, i) {
            var s = R(t),
                r = 1 << e;
            0 != (this.layout & r) ? (this.data[s * this.texelSize + e] = i, this.dirtyStart = Math.min(this.dirtyStart, s), this.dirtyEnd = Math.max(this.dirtyEnd, s)) : k.error("mapview-attributes-store", "Tried to set a value for a texel's readonly component");
          }
        }, {
          key: "lock",
          value: function lock() {
            5121 === this.pixelType && this._shared && M.atomics && "local" !== this._ctype && Atomics.store(this.data, 0, 1);
          }
        }, {
          key: "unlock",
          value: function unlock() {
            5121 === this.pixelType && this._shared && M.atomics && "local" !== this._ctype && Atomics.store(this.data, 0, 0);
          }
        }, {
          key: "expand",
          value: function expand(t) {
            if (this.size = t, !this.textureOnly) {
              var e = this._initData(this.pixelType, t, this._shared, this._ctype),
                  i = Object(_core_maybe_js__WEBPACK_IMPORTED_MODULE_1__["unwrap"])(this.data);

              e.set(i), this.data = e;
            }
          }
        }, {
          key: "toMessage",
          value: function toMessage() {
            var t = this.dirtyStart,
                e = this.dirtyEnd,
                i = this.texelSize;
            if (t > e) return null;

            this._resetRange();

            var s = !(this._shared || "local" === this._ctype),
                r = this.pixelType,
                a = this.layout,
                n = Object(_core_maybe_js__WEBPACK_IMPORTED_MODULE_1__["unwrap"])(this.data);

            if (!n.slice) {
              if (!s) return {
                start: t,
                end: e,
                data: null,
                pixelType: r,
                layout: a
              };
              return {
                start: t,
                end: e,
                data: new (Object(_engine_webgl_Utils_js__WEBPACK_IMPORTED_MODULE_9__["getPixelArrayCtor"])(this.pixelType))(Array.prototype.slice.call(this.data, t * i, (e + 1) * i)),
                pixelType: r,
                layout: a
              };
            }

            return {
              start: t,
              end: e,
              data: s && n.slice(t * i, (e + 1) * i) || null,
              pixelType: r,
              layout: a
            };
          }
        }, {
          key: "_initData",
          value: function _initData(t, e, i, s) {
            var r = i && "local" !== s ? SharedArrayBuffer : ArrayBuffer,
                a = Object(_engine_webgl_Utils_js__WEBPACK_IMPORTED_MODULE_9__["getPixelArrayCtor"])(t),
                o = new a(new r(e * e * 4 * a.BYTES_PER_ELEMENT));

            for (var _t = 0; _t < o.length; _t += 4) {
              o[_t + 1] = 255;
            }

            return o;
          }
        }, {
          key: "_resetRange",
          value: function _resetRange() {
            this.dirtyStart = 2147483647, this.dirtyEnd = 0;
          }
        }]);

        return v;
      }();
      /* harmony default export */


      __webpack_exports__["default"] = /*#__PURE__*/function () {
        function _class(t, e) {
          _classCallCheck(this, _class);

          this._client = t, this.config = e, this._attributeComputeMap = new Map(), this._blocks = new Array(), this._filters = new Array(_engine_webgl_definitions_js__WEBPACK_IMPORTED_MODULE_8__["MAX_FILTERS"]), this._targetType = 0, this._abortController = Object(_core_promiseUtils_js__WEBPACK_IMPORTED_MODULE_4__["createAbortController"])(), this._hasScaleExpr = !1, this._size = 32, this._idsToHighlight = new Set();
          var i = e.supportsTextureFloat ? 5126 : 5121;
          D("Creating AttributeStore ".concat(M.sharedArrayBuffer ? "with" : "without", " shared memory")), this._blockDescriptors = [{
            pixelType: 5121,
            layout: 1
          }, {
            pixelType: 5121,
            layout: 15,
            textureOnly: !0
          }, {
            pixelType: i,
            layout: 15
          }, {
            pixelType: i,
            layout: 15
          }], this._blocks = this._blockDescriptors.map(function () {
            return null;
          });
        }

        _createClass(_class, [{
          key: "destroy",
          value: function destroy() {
            this._abortController.abort();
          }
        }, {
          key: "hasScaleExpr",
          get: function get() {
            return this._hasScaleExpr;
          }
        }, {
          key: "_signal",
          get: function get() {
            return this._abortController.signal;
          }
        }, {
          key: "update",
          value: function update(i, s) {
            this.config = s;
            var r = s.schema.processors[0].storage,
                a = Object(_core_accessorSupport_diffUtils_js__WEBPACK_IMPORTED_MODULE_6__["diff"])(this._schema, r);

            if ((i.targets.feature || i.targets.aggregate) && (i.storage.data = !0), a && (Object(_core_has_js__WEBPACK_IMPORTED_MODULE_0__["default"])("esri-2d-update-debug") && console.debug("Applying Update - AttributeStore:", a), i.storage.data = !0, this._schema = r, this._attributeComputeMap.clear(), !Object(_core_maybe_js__WEBPACK_IMPORTED_MODULE_1__["isNone"])(r))) {
              switch (r.target) {
                case "feature":
                  this._targetType = 0;
                  break;

                case "aggregate":
                  this._targetType = 1;
              }

              var _iterator2 = _createForOfIteratorHelper(r.mapping),
                  _step2;

              try {
                for (_iterator2.s(); !(_step2 = _iterator2.n()).done;) {
                  var t = _step2.value;

                  this._bindAttribute(t);
                }
              } catch (err) {
                _iterator2.e(err);
              } finally {
                _iterator2.f();
              }
            }
          }
        }, {
          key: "onTileData",
          value: function onTileData(t, i) {
            if (Object(_core_maybe_js__WEBPACK_IMPORTED_MODULE_1__["isNone"])(i.addOrUpdate)) return;
            var s = i.addOrUpdate.getCursor();

            for (; s.next();) {
              var _t2 = s.getDisplayId();

              this.setAttributeData(_t2, s);
            }
          }
        }, {
          key: "invalidateResources",
          value: function invalidateResources() {
            this._createResourcesPromise = null, this._abortController.abort(), this._abortController = Object(_core_promiseUtils_js__WEBPACK_IMPORTED_MODULE_4__["createAbortController"])();
          }
        }, {
          key: "setHighlight",
          value: function () {
            var _setHighlight = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(t, e) {
              var i, s, _iterator3, _step3, _e;

              return regeneratorRuntime.wrap(function _callee$(_context) {
                while (1) {
                  switch (_context.prev = _context.next) {
                    case 0:
                      i = this._getBlock(0), s = e.map(function (t) {
                        return R(t);
                      });
                      i.lock(), i.unsetComponentAllTexels(0, 1), i.setComponent(0, 1, s), i.unlock(), this._idsToHighlight.clear();
                      _iterator3 = _createForOfIteratorHelper(t);

                      try {
                        for (_iterator3.s(); !(_step3 = _iterator3.n()).done;) {
                          _e = _step3.value;

                          this._idsToHighlight.add(_e);
                        }
                      } catch (err) {
                        _iterator3.e(err);
                      } finally {
                        _iterator3.f();
                      }

                      _context.next = 6;
                      return this.sendUpdates();

                    case 6:
                    case "end":
                      return _context.stop();
                  }
                }
              }, _callee, this);
            }));

            function setHighlight(_x, _x2) {
              return _setHighlight.apply(this, arguments);
            }

            return setHighlight;
          }()
        }, {
          key: "updateFilters",
          value: function () {
            var _updateFilters = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee2(e, i) {
              var _this = this;

              var s, r, a, o, n;
              return regeneratorRuntime.wrap(function _callee2$(_context2) {
                while (1) {
                  switch (_context2.prev = _context2.next) {
                    case 0:
                      s = i.config, r = i.service, a = i.spatialReference, o = s.filters, n = o.map(function (t, e) {
                        return _this._updateFilter(t, e, r, a);
                      });
                      _context2.next = 3;
                      return Object(_core_promiseUtils_js__WEBPACK_IMPORTED_MODULE_4__["all"])(n);

                    case 3:
                      _context2.t0 = _context2.sent.some(function (t) {
                        return t;
                      });

                      if (!_context2.t0) {
                        _context2.next = 6;
                        break;
                      }

                      e.storage.filters = !0, Object(_core_has_js__WEBPACK_IMPORTED_MODULE_0__["default"])("esri-2d-update-debug") && console.debug("Applying Update - AttributeStore:", "Filters changed");

                    case 6:
                    case "end":
                      return _context2.stop();
                  }
                }
              }, _callee2);
            }));

            function updateFilters(_x3, _x4) {
              return _updateFilters.apply(this, arguments);
            }

            return updateFilters;
          }()
        }, {
          key: "setData",
          value: function setData(t, e, i, s) {
            var r = R(t);
            this._ensureSizeForTexel(r), this._getBlock(e).setData(t, i, s);
          }
        }, {
          key: "getData",
          value: function getData(t, e, i) {
            return this._getBlock(e).getData(t, i);
          }
        }, {
          key: "getHighlightFlag",
          value: function getHighlightFlag(t) {
            return this._idsToHighlight.has(t) ? _engine_webgl_definitions_js__WEBPACK_IMPORTED_MODULE_8__["HIGHLIGHT_FLAG"] : 0;
          }
        }, {
          key: "unsetAttributeData",
          value: function unsetAttributeData(t) {
            var e = R(t);

            this._getBlock(0).setData(e, 0, 0);
          }
        }, {
          key: "setAttributeData",
          value: function setAttributeData(t, e) {
            var _this2 = this;

            var i = R(t);
            if (this._ensureSizeForTexel(i), this._getBlock(0).setData(i, 0, this.getFilterFlags(e)), this._targetType !== U(t)) return;
            var s = this._attributeComputeMap,
                r = this.config.supportsTextureFloat ? 1 : 2;
            s.size && s.forEach(function (t, s) {
              var a = s * r % 4,
                  o = Math.floor(s * r / 4),
                  n = _this2._getBlock(o + _engine_webgl_definitions_js__WEBPACK_IMPORTED_MODULE_8__["ATTRIBUTE_DATA_VV"]),
                  l = t(e);

              if (_this2.config.supportsTextureFloat) n.setData(i, a, l);else if (l === _engine_webgl_definitions_js__WEBPACK_IMPORTED_MODULE_8__["NAN_MAGIC_NUMBER"]) n.setData(i, a, 255), n.setData(i, a + 1, 255);else {
                var _t3 = Object(_core_mathUtils_js__WEBPACK_IMPORTED_MODULE_5__["clamp"])(Math.round(l), -32767, 32766) + 32768,
                    _e2 = 255 & _t3,
                    _s = (65280 & _t3) >> 8;

                n.setData(i, a, _e2), n.setData(i, a + 1, _s);
              }
            });
          }
        }, {
          key: "sendUpdates",
          value: function sendUpdates() {
            var _this3 = this;

            if (this._nextUpdate) return this._nextUpdate.promise;
            if (this._currUpdate) return this._nextUpdate = Object(_core_promiseUtils_js__WEBPACK_IMPORTED_MODULE_4__["createResolver"])(), this._nextUpdate.promise;
            var t = {
              blocks: this._blocks.map(function (t) {
                return Object(_core_maybe_js__WEBPACK_IMPORTED_MODULE_1__["isSome"])(t) ? t.toMessage() : null;
              })
            };
            return this._currUpdate = this._createResources().then(function () {
              var e = function e() {
                if (_this3._currUpdate = null, _this3._nextUpdate) {
                  var _t4 = _this3._nextUpdate;
                  _this3._nextUpdate = null, _this3.sendUpdates().then(function () {
                    return _t4.resolve();
                  });
                }
              },
                  i = _this3._client.update(t, _this3._signal).then(e)["catch"](e);

              return _this3._client.render(_this3._signal), i;
            })["catch"](function (t) {
              return Object(_core_promiseUtils_js__WEBPACK_IMPORTED_MODULE_4__["isAbortError"])(t) ? (_this3._createResourcesPromise = null, _this3._createResources()) : (k.error(new _core_Error_js__WEBPACK_IMPORTED_MODULE_3__["default"]("mapview-attribute-store", "Encountered an error during client update", t)), Object(_core_promiseUtils_js__WEBPACK_IMPORTED_MODULE_4__["resolve"])());
            }), this._currUpdate;
          }
        }, {
          key: "_ensureSizeForTexel",
          value: function _ensureSizeForTexel(t) {
            for (; t >= this._size * this._size;) {
              if (this._expand()) return;
            }
          }
        }, {
          key: "_bindAttribute",
          value: function _bindAttribute(t) {
            var e;
            if (null != t.fieldIndex) t.normalizationField && k.warn("mapview-arcade", "Ignoring normalizationField specified with an arcade expression which is not supported."), e = function e(_e3) {
              return _e3.getComputedNumericAtIndex(t.fieldIndex);
            };else {
              if (!t.field) return;
              e = t.normalizationField ? function (e) {
                var i = e.readAttribute(t.normalizationField);
                return i ? e.readAttribute(t.field) / i : null;
              } : function (e) {
                return e.readAttribute(t.field);
              };
            }

            if (t.valueRepresentation) {
              e = B(e, function (e) {
                return Object(_tileRenderers_support_visualVariablesUtils_js__WEBPACK_IMPORTED_MODULE_11__["getVisualVariableSizeValueRepresentationRatio"])(e, t.valueRepresentation);
              });
            }

            this._attributeComputeMap.set(t.binding, B(e, function (t) {
              return null === t || isNaN(t) || t === 1 / 0 ? _engine_webgl_definitions_js__WEBPACK_IMPORTED_MODULE_8__["NAN_MAGIC_NUMBER"] : t;
            }));
          }
        }, {
          key: "_createResources",
          value: function _createResources() {
            var _this4 = this;

            if (Object(_core_maybe_js__WEBPACK_IMPORTED_MODULE_1__["isSome"])(this._createResourcesPromise)) return this._createResourcesPromise;
            this._getBlock(_engine_webgl_definitions_js__WEBPACK_IMPORTED_MODULE_8__["ATTRIBUTE_DATA_ANIMATION"]), D("Initializing AttributeStore");

            var t = {
              shared: M.sharedArrayBuffer && !("local" === this._client.type),
              size: this._size,
              blocks: Object(_core_maybe_js__WEBPACK_IMPORTED_MODULE_1__["mapMany"])(this._blocks, function (t) {
                return {
                  textureOnly: t.textureOnly,
                  buffer: t.buffer,
                  pixelType: t.pixelType
                };
              })
            },
                r = this._client.initialize(t, this._signal)["catch"](function (t) {
              Object(_core_promiseUtils_js__WEBPACK_IMPORTED_MODULE_4__["isAbortError"])(t) ? _this4._createResourcesPromise = null : k.error(new _core_Error_js__WEBPACK_IMPORTED_MODULE_3__["default"]("mapview-attribute-store", "Encountered an error during client initialization", t));
            });

            return this._createResourcesPromise = r, r.then(function () {
              return Object(_core_maybe_js__WEBPACK_IMPORTED_MODULE_1__["isNone"])(_this4._createResourcesPromise) ? _this4._createResources() : void 0;
            }), r;
          }
        }, {
          key: "_getBlock",
          value: function _getBlock(t) {
            var e = this._blocks[t];
            if (Object(_core_maybe_js__WEBPACK_IMPORTED_MODULE_1__["isSome"])(e)) return e;
            D("Initializing AttributeBlock at index ".concat(t));
            var s = M.sharedArrayBuffer,
                r = this._client.type,
                a = new v(s, r, this._size, this._blockDescriptors[t]);
            return this._blocks[t] = a, this._createResourcesPromise = null, a;
          }
        }, {
          key: "_expand",
          value: function _expand() {
            if (this._size < this.config.maxTextureSize) {
              var t = this._size <<= 1;
              return D("Expanding block size to", t, this._blocks), Object(_core_maybe_js__WEBPACK_IMPORTED_MODULE_1__["forEachSome"])(this._blocks, function (e) {
                return e.expand(t);
              }), this._createResourcesPromise = null, this._size = t, 0;
            }

            return k.error(new _core_Error_js__WEBPACK_IMPORTED_MODULE_3__["default"]("mapview-limitations", "Maximum number of onscreen features exceeded.")), -1;
          }
        }, {
          key: "_updateFilter",
          value: function () {
            var _updateFilter2 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee3(t, s, r, a) {
              var o, n, _t5, e, l;

              return regeneratorRuntime.wrap(function _callee3$(_context3) {
                while (1) {
                  switch (_context3.prev = _context3.next) {
                    case 0:
                      o = this._filters[s], n = Object(_core_maybe_js__WEBPACK_IMPORTED_MODULE_1__["isSome"])(o) && o.hash;

                      if (!(!o && !t)) {
                        _context3.next = 3;
                        break;
                      }

                      return _context3.abrupt("return", !1);

                    case 3:
                      if (!(n === JSON.stringify(t))) {
                        _context3.next = 5;
                        break;
                      }

                      return _context3.abrupt("return", !1);

                    case 5:
                      if (!Object(_core_maybe_js__WEBPACK_IMPORTED_MODULE_1__["isNone"])(t)) {
                        _context3.next = 8;
                        break;
                      }

                      _t5 = 1 << s + 1, e = this._getBlock(0);
                      return _context3.abrupt("return", (this._filters[s] = null, e.setComponentAllTexels(0, _t5), this.sendUpdates(), !0));

                    case 8:
                      _context3.next = 10;
                      return this._getFilter(s, r);

                    case 10:
                      l = _context3.sent;
                      _context3.next = 13;
                      return l.update(t, a);

                    case 13:
                      return _context3.abrupt("return", !0);

                    case 14:
                    case "end":
                      return _context3.stop();
                  }
                }
              }, _callee3, this);
            }));

            function _updateFilter(_x5, _x6, _x7, _x8) {
              return _updateFilter2.apply(this, arguments);
            }

            return _updateFilter;
          }()
        }, {
          key: "_getFilter",
          value: function () {
            var _getFilter2 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee4(t, e) {
              var s, _yield$Promise$all$th, r, a;

              return regeneratorRuntime.wrap(function _callee4$(_context4) {
                while (1) {
                  switch (_context4.prev = _context4.next) {
                    case 0:
                      s = this._filters[t];

                      if (!Object(_core_maybe_js__WEBPACK_IMPORTED_MODULE_1__["isSome"])(s)) {
                        _context4.next = 3;
                        break;
                      }

                      return _context4.abrupt("return", s);

                    case 3:
                      _context4.next = 5;
                      return Promise.all(
                      /*! import() | layers-graphics-data-FeatureFilter-js */
                      [__webpack_require__.e("default~layers-graphics-data-FeatureFilter-js~layers-graphics-sources-geojson-GeoJSONSourceWorker-js~1a1c8721"), __webpack_require__.e("common"), __webpack_require__.e("layers-graphics-data-FeatureFilter-js")]).then(__webpack_require__.bind(null,
                      /*! ../../../../../layers/graphics/data/FeatureFilter.js */
                      "64Oa"));

                    case 5:
                      _yield$Promise$all$th = _context4.sent;
                      r = _yield$Promise$all$th["default"];
                      a = new r({
                        geometryType: e.geometryType,
                        hasM: !1,
                        hasZ: !1,
                        timeInfo: e.timeInfo,
                        fieldsIndex: new _layers_support_FieldsIndex_js__WEBPACK_IMPORTED_MODULE_7__["default"](e.fields)
                      });
                      return _context4.abrupt("return", (this._filters[t] = a, a));

                    case 9:
                    case "end":
                      return _context4.stop();
                  }
                }
              }, _callee4, this);
            }));

            function _getFilter(_x9, _x10) {
              return _getFilter2.apply(this, arguments);
            }

            return _getFilter;
          }()
        }, {
          key: "isVisible",
          value: function isVisible(t) {
            return !!(2 & this._getBlock(0).getData(t, 0));
          }
        }, {
          key: "getFilterFlags",
          value: function getFilterFlags(t) {
            var i = 0;
            var s = (r = t.getDisplayId(), 1 === U(r) ? 254 : 255);
            var r;

            for (var _r = 0; _r < this._filters.length; _r++) {
              var _a = !!(s & 1 << _r),
                  o = this._filters[_r];

              i |= (!_a || Object(_core_maybe_js__WEBPACK_IMPORTED_MODULE_1__["isNone"])(o) || o.check(t) ? 1 : 0) << _r;
            }

            var a = 0;

            if (this._idsToHighlight.size) {
              var e = t.getObjectId();
              a = this.getHighlightFlag(e);
            }

            return i << 1 | a;
          }
        }]);

        return _class;
      }();
      /***/

    },

    /***/
    "7g5W":
    /*!****************************************************************************!*\
      !*** ./node_modules/@arcgis/core/views/2d/layers/features/support/Tile.js ***!
      \****************************************************************************/

    /*! exports provided: default, Tile, isChildOf, isParentOf */

    /***/
    function g5W(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "Tile", function () {
        return l;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "isChildOf", function () {
        return r;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "isParentOf", function () {
        return n;
      });
      /* harmony import */


      var _core_ArrayPool_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ../../../../../core/ArrayPool.js */
      "VW+2");
      /* harmony import */


      var _geometry_Extent_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ../../../../../geometry/Extent.js */
      "OvF4");
      /* harmony import */


      var _geometry_support_aaBoundingRect_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ../../../../../geometry/support/aaBoundingRect.js */
      "kYAx");
      /* harmony import */


      var _tasks_support_QuantizationParameters_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ../../../../../tasks/support/QuantizationParameters.js */
      "AtWh");
      /* harmony import */


      var _tiling_TileKey_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ../../../tiling/TileKey.js */
      "rlSK");
      /*
      All material copyright ESRI, All Rights Reserved, unless otherwise specified.
      See https://js.arcgis.com/4.18/esri/copyright.txt for details.
      */


      function n(e, t) {
        var i = e.bounds,
            s = t.bounds;
        return e.key.id !== t.key.id && e.key.world === t.key.world && i[0] <= s[0] && i[1] <= s[1] && i[2] >= s[2] && i[3] >= s[3];
      }

      function r(e, t) {
        return n(t, e);
      }

      var l = /*#__PURE__*/function () {
        function l(e, t) {
          _classCallCheck(this, l);

          this.key = new _tiling_TileKey_js__WEBPACK_IMPORTED_MODULE_4__["default"](0, 0, 0, 0), this.bounds = Object(_geometry_support_aaBoundingRect_js__WEBPACK_IMPORTED_MODULE_2__["create"])(), this.objectIds = new Set(), this.key.set(t);
          var s = e.getLODInfoAt(this.key);
          this.tileInfoView = e, this.tileInfoView.getTileBounds(this.bounds, this.key, !0), this.resolution = s.resolution, this.scale = s.scale, this.level = s.level, this.needsClear = !0;
        }

        _createClass(l, [{
          key: "id",
          get: function get() {
            return this.key.id;
          }
        }, {
          key: "extent",
          get: function get() {
            return _geometry_Extent_js__WEBPACK_IMPORTED_MODULE_1__["default"].fromBounds(this.bounds, this.tileInfoView.tileInfo.spatialReference);
          }
        }, {
          key: "transform",
          get: function get() {
            return {
              originPosition: "upperLeft",
              scale: [this.resolution, this.resolution],
              translate: [this.bounds[0], this.bounds[3]]
            };
          }
        }, {
          key: "bbox",
          get: function get() {
            var e = this.bounds;
            return {
              minX: e[0],
              minY: e[1],
              maxX: e[2],
              maxY: e[3]
            };
          }
        }, {
          key: "clone",
          value: function clone() {
            return new l(this.tileInfoView, this.key);
          }
        }, {
          key: "createChildTiles",
          value: function createChildTiles() {
            var t = this.key.getChildKeys(),
                i = _core_ArrayPool_js__WEBPACK_IMPORTED_MODULE_0__["default"].acquire();

            for (var e = 0; e < t.length; e++) {
              i[e] = new l(this.tileInfoView, t[e]);
            }

            return i;
          }
        }, {
          key: "getQuantizationParameters",
          value: function getQuantizationParameters() {
            return _tasks_support_QuantizationParameters_js__WEBPACK_IMPORTED_MODULE_3__["default"].fromJSON({
              mode: "view",
              originPosition: "upperLeft",
              tolerance: this.resolution,
              extent: {
                xmin: this.bounds[0],
                ymin: this.bounds[1],
                xmax: this.bounds[2],
                ymax: this.bounds[3],
                spatialReference: this.tileInfoView.tileInfo.spatialReference
              }
            });
          }
        }]);

        return l;
      }();
      /* harmony default export */


      __webpack_exports__["default"] = l;
      /***/
    },

    /***/
    "8NDJ":
    /*!****************************************************************************************!*\
      !*** ./node_modules/@arcgis/core/views/2d/layers/features/support/FeatureSetReader.js ***!
      \****************************************************************************************/

    /*! exports provided: FeatureSetReader */

    /***/
    function NDJ(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "FeatureSetReader", function () {
        return n;
      });
      /* harmony import */


      var _geometry_support_jsonUtils_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ../../../../../geometry/support/jsonUtils.js */
      "qatw");
      /* harmony import */


      var _geometry_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ../../../../../geometry.js */
      "4GrV");
      /* harmony import */


      var _layers_graphics_OptimizedGeometry_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ../../../../../layers/graphics/OptimizedGeometry.js */
      "gVKr");
      /* harmony import */


      var _layers_graphics_featureConversionUtils_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ../../../../../layers/graphics/featureConversionUtils.js */
      "ZlUD");
      /* harmony import */


      var _layers_graphics_centroid_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ../../../../../layers/graphics/centroid.js */
      "2X7Z");
      /*
      All material copyright ESRI, All Rights Reserved, unless otherwise specified.
      See https://js.arcgis.com/4.18/esri/copyright.txt for details.
      */


      var s = 0;

      var n = /*#__PURE__*/function () {
        function n(t) {
          _classCallCheck(this, n);

          this.type = "FeatureSetReader", this.seen = !1, this.instance = 0, this._tx = 0, this._ty = 0, this._xmin = -1, this._xmax = 0, this._ymin = 0, this._ymax = 0, this._joined = [], this.instance = t;
        }

        _createClass(n, [{
          key: "_hasFilter",
          get: function get() {
            return -1 !== this._xmin;
          }
        }, {
          key: "getQuantizationTransform",
          value: function getQuantizationTransform() {
            throw new Error("Unable to find transform for featureSet");
          }
        }, {
          key: "getStorage",
          value: function getStorage() {
            return this._storage;
          }
        }, {
          key: "getComputedNumeric",
          value: function getComputedNumeric(t) {
            return this.getComputedNumericAtIndex(0);
          }
        }, {
          key: "setComputedNumeric",
          value: function setComputedNumeric(t, e) {
            return this.setComputedNumericAtIndex(e, 0);
          }
        }, {
          key: "getComputedString",
          value: function getComputedString(t) {
            return this.getComputedStringAtIndex(0);
          }
        }, {
          key: "setComputedString",
          value: function setComputedString(t, e) {
            return this.setComputedStringAtIndex(0, e);
          }
        }, {
          key: "getComputedNumericAtIndex",
          value: function getComputedNumericAtIndex(t) {
            return this._storage.getComputedNumericAtIndex(this.getDisplayId(), t);
          }
        }, {
          key: "setComputedNumericAtIndex",
          value: function setComputedNumericAtIndex(t, e) {
            this._storage.setComputedNumericAtIndex(this.getDisplayId(), t, e);
          }
        }, {
          key: "getComputedStringAtIndex",
          value: function getComputedStringAtIndex(t) {
            return this._storage.getComputedStringAtIndex(this.getDisplayId(), t);
          }
        }, {
          key: "setComputedStringAtIndex",
          value: function setComputedStringAtIndex(t, e) {
            return this._storage.setComputedStringAtIndex(this.getDisplayId(), t, e);
          }
        }, {
          key: "transform",
          value: function transform(t, e) {
            var r = this.copy();
            return r._tx = t, r._ty = e, r;
          }
        }, {
          key: "extent",
          value: function extent(t, e, r, i) {
            var s = this.copy();
            return s._xmin = t, s._xmax = r, s._ymin = e, s._ymax = i, s;
          }
        }, {
          key: "hasFilter",
          value: function hasFilter() {
            return this._hasFilter;
          }
        }, {
          key: "readAttribute",
          value: function readAttribute(t) {
            var e = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : !1;

            var r = this._readAttribute(t, e);

            if (void 0 !== r) return r;

            var _iterator4 = _createForOfIteratorHelper(this._joined),
                _step4;

            try {
              for (_iterator4.s(); !(_step4 = _iterator4.n()).done;) {
                var _r2 = _step4.value;

                _r2.setIndex(this.getIndex());

                var i = _r2._readAttribute(t, e);

                if (void 0 !== i) return i;
              }
            } catch (err) {
              _iterator4.e(err);
            } finally {
              _iterator4.f();
            }
          }
        }, {
          key: "readAttributes",
          value: function readAttributes() {
            return this._readAttributes();
          }
        }, {
          key: "joinAttributes",
          value: function joinAttributes(t) {
            this._joined.push(t);
          }
        }, {
          key: "readArcadeFeature",
          value: function readArcadeFeature() {
            return this;
          }
        }, {
          key: "geometry",
          value: function geometry() {
            var e = this.readHydratedGeometry(),
                i = Object(_layers_graphics_featureConversionUtils_js__WEBPACK_IMPORTED_MODULE_3__["convertToGeometry"])(e, this.geometryType, this.hasZ, this.hasM),
                s = Object(_geometry_support_jsonUtils_js__WEBPACK_IMPORTED_MODULE_0__["fromJSON"])(i);
            return s.spatialReference = this._arcadeSpatialReference, s;
          }
        }, {
          key: "field",
          value: function field(t) {
            return this.readAttribute(t, !0);
          }
        }, {
          key: "hasField",
          value: function hasField(t) {
            return !0;
          }
        }, {
          key: "setField",
          value: function setField(t, e) {}
        }, {
          key: "keys",
          value: function keys() {
            return [];
          }
        }, {
          key: "castToText",
          value: function castToText() {
            return "";
          }
        }, {
          key: "_computeCentroid",
          value: function _computeCentroid() {
            if ("esriGeometryPolygon" !== this.geometryType) return null;
            var t = this.readUnquantizedGeometry();
            if (!t || t.hasIndeterminateRingOrder) return null;
            var r = this.getQuantizationTransform();
            return Object(_layers_graphics_centroid_js__WEBPACK_IMPORTED_MODULE_4__["getCentroidOptimizedGeometry"])(new _layers_graphics_OptimizedGeometry_js__WEBPACK_IMPORTED_MODULE_2__["default"](), t, this.hasM, this.hasZ, r);
          }
        }, {
          key: "copyInto",
          value: function copyInto(t) {
            t.seen = this.seen, t._storage = this._storage, t._arcadeSpatialReference = this._arcadeSpatialReference, t._joined = this._joined, t._tx = this._tx, t._ty = this._ty, t._xmin = this._xmin, t._xmax = this._xmax, t._ymin = this._ymin, t._ymax = this._ymax;
          }
        }], [{
          key: "createInstance",
          value: function createInstance() {
            return s++, s = s > 65535 ? 0 : s, s;
          }
        }]);

        return n;
      }();
      /***/

    },

    /***/
    "NIRN":
    /*!*********************************************************************************!*\
      !*** ./node_modules/@arcgis/core/views/2d/engine/webgl/visualVariablesUtils.js ***!
      \*********************************************************************************/

    /*! exports provided: getTypeOfSizeVisualVariable */

    /***/
    function NIRN(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "getTypeOfSizeVisualVariable", function () {
        return o;
      });
      /* harmony import */


      var _core_Logger_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ../../../../core/Logger.js */
      "6S2I");
      /* harmony import */


      var _core_Error_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ../../../../core/Error.js */
      "zlDU");
      /* harmony import */


      var _enums_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./enums.js */
      "yE7X");
      /* harmony import */


      var _Utils_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./Utils.js */
      "yN2G");
      /*
      All material copyright ESRI, All Rights Reserved, unless otherwise specified.
      See https://js.arcgis.com/4.18/esri/copyright.txt for details.
      */


      var l = _core_Logger_js__WEBPACK_IMPORTED_MODULE_0__["default"].getLogger("esri.views.2d.engine.webgl");

      function o(e) {
        return Object(_Utils_js__WEBPACK_IMPORTED_MODULE_3__["isNumber"])(e.minDataValue) && Object(_Utils_js__WEBPACK_IMPORTED_MODULE_3__["isNumber"])(e.maxDataValue) && null != e.minSize && null != e.maxSize ? _enums_js__WEBPACK_IMPORTED_MODULE_2__["WGLVVFlag"].SIZE_MINMAX_VALUE : (e.expression && "view.scale" === e.expression || e.valueExpression && "$view.scale" === e.valueExpression) && Array.isArray(e.stops) ? _enums_js__WEBPACK_IMPORTED_MODULE_2__["WGLVVFlag"].SIZE_SCALE_STOPS : (null != e.field || e.expression && "view.scale" !== e.expression || e.valueExpression && "$view.scale" !== e.valueExpression) && (Array.isArray(e.stops) || "levels" in e && e.levels) ? _enums_js__WEBPACK_IMPORTED_MODULE_2__["WGLVVFlag"].SIZE_FIELD_STOPS : (null != e.field || e.expression && "view.scale" !== e.expression || e.valueExpression && "$view.scale" !== e.valueExpression) && null != e.valueUnit ? _enums_js__WEBPACK_IMPORTED_MODULE_2__["WGLVVFlag"].SIZE_UNIT_VALUE : (l.error(new _core_Error_js__WEBPACK_IMPORTED_MODULE_1__["default"]("mapview-bad-type", "Found invalid size VisualVariable", e)), _enums_js__WEBPACK_IMPORTED_MODULE_2__["WGLVVFlag"].NONE);
      }
      /***/

    },

    /***/
    "P0wj":
    /*!**************************************************************************************!*\
      !*** ./node_modules/@arcgis/core/views/2d/layers/features/support/displayIdUtils.js ***!
      \**************************************************************************************/

    /*! exports provided: DISPLAY_ID_TYPE_AGGREGATE, DISPLAY_ID_TYPE_FEATURE, DisplayIdGenerator, getDisplayIdIndex, getDisplayIdType */

    /***/
    function P0wj(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "DISPLAY_ID_TYPE_AGGREGATE", function () {
        return t;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "DISPLAY_ID_TYPE_FEATURE", function () {
        return e;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "DisplayIdGenerator", function () {
        return n;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "getDisplayIdIndex", function () {
        return s;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "getDisplayIdType", function () {
        return r;
      });
      /*
      All material copyright ESRI, All Rights Reserved, unless otherwise specified.
      See https://js.arcgis.com/4.18/esri/copyright.txt for details.
      */


      var e = 0,
          t = 1;

      function r(e) {
        return (2147483648 & e) >>> 31;
      }

      function s(e) {
        return 2147483647 & e;
      }

      var n = /*#__PURE__*/function () {
        function n() {
          _classCallCheck(this, n);

          this._freeIds = [], this._idCounter = 1;
        }

        _createClass(n, [{
          key: "createId",
          value: function createId() {
            var e = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : !1;
            return function (e, t) {
              return ((t ? 2147483648 : 0) | e) >>> 0;
            }(this._getFreeId(), e);
          }
        }, {
          key: "releaseId",
          value: function releaseId(e) {
            this._freeIds.push(e);
          }
        }, {
          key: "_getFreeId",
          value: function _getFreeId() {
            return this._freeIds.length ? this._freeIds.pop() : this._idCounter++;
          }
        }]);

        return n;
      }();
      /***/

    },

    /***/
    "Q0oN":
    /*!********************************************************************************************!*\
      !*** ./node_modules/@arcgis/core/views/2d/layers/features/support/FeatureSetReaderJSON.js ***!
      \********************************************************************************************/

    /*! exports provided: FeatureSetReaderJSON */

    /***/
    function Q0oN(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "FeatureSetReaderJSON", function () {
        return a;
      });
      /* harmony import */


      var _layers_graphics_featureConversionUtils_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ../../../../../layers/graphics/featureConversionUtils.js */
      "ZlUD");
      /* harmony import */


      var _FeatureSetReader_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./FeatureSetReader.js */
      "8NDJ");
      /*
      All material copyright ESRI, All Rights Reserved, unless otherwise specified.
      See https://js.arcgis.com/4.18/esri/copyright.txt for details.
      */


      var a = /*#__PURE__*/function (_FeatureSetReader_js_) {
        _inherits(a, _FeatureSetReader_js_);

        var _super = _createSuper(a);

        function a(t, e, r) {
          var _this5;

          _classCallCheck(this, a);

          _this5 = _super.call(this, t), _this5._featureIndex = -1, _this5._dateFields = new Set(), _this5._geometryType = r, _this5._features = e;
          return _this5;
        }

        _createClass(a, [{
          key: "_current",
          get: function get() {
            return this._features[this._featureIndex];
          }
        }, {
          key: "geometryType",
          get: function get() {
            return this._geometryType;
          }
        }, {
          key: "hasFeatures",
          get: function get() {
            return !!this._features.length;
          }
        }, {
          key: "hasNext",
          get: function get() {
            return this._featureIndex + 1 < this._features.length;
          }
        }, {
          key: "exceededTransferLimit",
          get: function get() {
            return this._exceededTransferLimit;
          }
        }, {
          key: "hasZ",
          get: function get() {
            return !1;
          }
        }, {
          key: "hasM",
          get: function get() {
            return !1;
          }
        }, {
          key: "getApproximateSize",
          value: function getApproximateSize() {
            return this._features.length;
          }
        }, {
          key: "getCursor",
          value: function getCursor() {
            return this.copy();
          }
        }, {
          key: "getQuantizationTransform",
          value: function getQuantizationTransform() {
            return this._transform;
          }
        }, {
          key: "getAttributeHash",
          value: function getAttributeHash() {
            var t = "";

            for (var e in this._current.attributes) {
              t += this._current.attributes[e];
            }

            return t;
          }
        }, {
          key: "getIndex",
          value: function getIndex() {
            return this._featureIndex;
          }
        }, {
          key: "setIndex",
          value: function setIndex(t) {
            this._featureIndex = t;
          }
        }, {
          key: "getObjectId",
          value: function getObjectId() {
            return this._current.objectId;
          }
        }, {
          key: "getDisplayId",
          value: function getDisplayId() {
            return this._current.displayId;
          }
        }, {
          key: "setDisplayId",
          value: function setDisplayId(t) {
            this._current.displayId = t;
          }
        }, {
          key: "getGroupId",
          value: function getGroupId() {
            return this._current.groupId;
          }
        }, {
          key: "setGroupId",
          value: function setGroupId(t) {
            this._current.groupId = t;
          }
        }, {
          key: "copy",
          value: function copy() {
            var t = new a(this.instance, this._features, this.geometryType);
            return this.copyInto(t), t;
          }
        }, {
          key: "next",
          value: function next() {
            if (!this._hasFilter) return ++this._featureIndex < this._features.length;

            for (; ++this._featureIndex < this._features.length && !this._passesFilter();) {
              ;
            }

            return this._featureIndex < this._features.length;
          }
        }, {
          key: "readLegacyFeature",
          value: function readLegacyFeature() {
            return Object(_layers_graphics_featureConversionUtils_js__WEBPACK_IMPORTED_MODULE_0__["convertToFeature"])(this._current, this.geometryType, this.hasZ, this.hasM);
          }
        }, {
          key: "readOptimizedFeature",
          value: function readOptimizedFeature() {
            return this._current;
          }
        }, {
          key: "readLegacyPointGeometry",
          value: function readLegacyPointGeometry() {
            var t = this.readGeometry();
            return t ? {
              x: t.coords[0],
              y: t.coords[1]
            } : null;
          }
        }, {
          key: "readLegacyGeometry",
          value: function readLegacyGeometry() {
            var t = this.readGeometry();
            return Object(_layers_graphics_featureConversionUtils_js__WEBPACK_IMPORTED_MODULE_0__["convertToGeometry"])(t, this.geometryType, this.hasZ, this.hasM);
          }
        }, {
          key: "readLegacyCentroid",
          value: function readLegacyCentroid() {
            var t = this.readCentroid();
            return t ? {
              x: t.coords[0],
              y: t.coords[1]
            } : null;
          }
        }, {
          key: "readGeometryArea",
          value: function readGeometryArea() {
            return Object(_layers_graphics_featureConversionUtils_js__WEBPACK_IMPORTED_MODULE_0__["getQuantizedArea"])(this._current.geometry, 2);
          }
        }, {
          key: "readUnquantizedGeometry",
          value: function readUnquantizedGeometry() {
            var t = this.readGeometry();
            if ("esriGeometryPoint" === this.geometryType || !t) return t;
            var e = t.clone();
            return function (_ref) {
              var t = _ref.coords,
                  e = _ref.lengths;
              var r = 0;

              var _iterator5 = _createForOfIteratorHelper(e),
                  _step5;

              try {
                for (_iterator5.s(); !(_step5 = _iterator5.n()).done;) {
                  var s = _step5.value;

                  for (var _e4 = 1; _e4 < s; _e4++) {
                    t[2 * (r + _e4)] += t[2 * (r + _e4) - 2], t[2 * (r + _e4) + 1] += t[2 * (r + _e4) - 1];
                  }

                  r += s;
                }
              } catch (err) {
                _iterator5.e(err);
              } finally {
                _iterator5.f();
              }
            }(e), e;
          }
        }, {
          key: "readHydratedGeometry",
          value: function readHydratedGeometry() {
            var t = this._current.geometry;
            if (!t) return null;
            var e = t.clone();
            return Object(_layers_graphics_featureConversionUtils_js__WEBPACK_IMPORTED_MODULE_0__["unquantizeOptimizedGeometry"])(e, e, this.hasZ, this.hasM, this._transform), e;
          }
        }, {
          key: "getXHydrate",
          value: function getXHydrate() {
            var t = this._current.geometry.coords[0] + this._tx,
                e = this.getQuantizationTransform();
            return t * e.scale[0] + e.translate[0];
          }
        }, {
          key: "getYHydrate",
          value: function getYHydrate() {
            var t = this._current.geometry.coords[1] + this._ty,
                e = this.getQuantizationTransform();
            return e.translate[1] - t * e.scale[1];
          }
        }, {
          key: "readGeometry",
          value: function readGeometry() {
            if (!this._current.hasGeometry) return null;

            var t = this._current.geometry.clone();

            if (t.isPoint) return t.coords[0] += this._tx, t.coords[1] += this._ty, t;
            var e = 0;

            var _iterator6 = _createForOfIteratorHelper(t.lengths),
                _step6;

            try {
              for (_iterator6.s(); !(_step6 = _iterator6.n()).done;) {
                var r = _step6.value;
                t.coords[2 * e] += this._tx, t.coords[2 * e + 1] += this._ty, e += r;
              }
            } catch (err) {
              _iterator6.e(err);
            } finally {
              _iterator6.f();
            }

            return t;
          }
        }, {
          key: "readCentroid",
          value: function readCentroid() {
            if (!this._current.hasGeometry) return null;

            if (!this._current.centroid) {
              var _t6 = this._computeCentroid();

              if (!_t6) return null;
              _t6.coords[0] -= this._tx, _t6.coords[1] -= this._ty, this._current.centroid = _t6;
            }

            var t = this._current.centroid.clone();

            return t.coords[0] += this._tx, t.coords[1] += this._ty, t;
          }
        }, {
          key: "_readAttribute",
          value: function _readAttribute(t, e) {
            var r = this._current.attributes[t];
            if (void 0 !== r) return e && this._dateFields.has(t) ? new Date(r) : r;
            var s = this.readAttributes(),
                i = t.toLocaleLowerCase().trim();

            for (var _t7 in s) {
              if (_t7.toLocaleLowerCase().trim() === i) {
                var _e5 = this._current.attributes[_t7];
                return this._dateFields.has(_t7) ? new Date(_e5) : _e5;
              }
            }
          }
        }, {
          key: "copyInto",
          value: function copyInto(t) {
            _get(_getPrototypeOf(a.prototype), "copyInto", this).call(this, t), t._featureIndex = this._featureIndex, t._transform = this._transform, t._dateFields = this._dateFields;
          }
        }, {
          key: "_readAttributes",
          value: function _readAttributes() {
            return this._current.attributes;
          }
        }, {
          key: "_passesFilter",
          value: function _passesFilter() {
            if (!this._hasFilter) return !0;
            var t = 0,
                e = 0;

            switch (this.geometryType) {
              case "esriGeometryPoint":
                {
                  var r = this._current.geometry;
                  if (!r) return !1;

                  var _r$coords = _slicedToArray(r.coords, 2);

                  t = _r$coords[0];
                  e = _r$coords[1];
                  break;
                }

              case "esriGeometryPolygon":
                {
                  var _r3$coords, _r3$coords2;

                  var _r3 = this.readCentroid();

                  if (!_r3) return !1;
                  (_r3$coords = _r3.coords, _r3$coords2 = _slicedToArray(_r3$coords, 2), t = _r3$coords2[0], e = _r3$coords2[1], _r3$coords), t -= this._tx, e -= this._ty;
                  break;
                }

              default:
                return !1;
            }

            return t >= this._xmin && t <= this._xmax && e >= this._ymin && e <= this._ymax;
          }
        }], [{
          key: "fromFeatures",
          value: function fromFeatures(e, r, s) {
            var i = Object(_layers_graphics_featureConversionUtils_js__WEBPACK_IMPORTED_MODULE_0__["convertFromFeatures"])([], e, r, !1, !1, s);

            for (var t = 0; t < i.length; t++) {
              i[t].displayId = e[t].displayId;
            }

            return a.fromOptimizedFeatures(i, r);
          }
        }, {
          key: "fromFeatureSet",
          value: function fromFeatureSet(t, r) {
            var s = Object(_layers_graphics_featureConversionUtils_js__WEBPACK_IMPORTED_MODULE_0__["convertFromFeatureSet"])(t, r);
            return a.fromOptimizedFeatureSet(s);
          }
        }, {
          key: "fromOptimizedFeatureSet",
          value: function fromOptimizedFeatureSet(t) {
            var e = t.features,
                r = t.geometryType,
                s = a.fromOptimizedFeatures(e, r);
            s._exceededTransferLimit = t.exceededTransferLimit, s._transform = t.transform;

            var _iterator7 = _createForOfIteratorHelper(t.fields),
                _step7;

            try {
              for (_iterator7.s(); !(_step7 = _iterator7.n()).done;) {
                var _e6 = _step7.value;
                "esriFieldTypeDate" === _e6.type && s._dateFields.add(_e6.name);
              }
            } catch (err) {
              _iterator7.e(err);
            } finally {
              _iterator7.f();
            }

            return s;
          }
        }, {
          key: "fromOptimizedFeatures",
          value: function fromOptimizedFeatures(t, e, r) {
            var s = _FeatureSetReader_js__WEBPACK_IMPORTED_MODULE_1__["FeatureSetReader"].createInstance(),
                i = new a(s, t, e);

            return i._transform = r, i;
          }
        }]);

        return a;
      }(_FeatureSetReader_js__WEBPACK_IMPORTED_MODULE_1__["FeatureSetReader"]);
      /***/

    },

    /***/
    "Swtj":
    /*!************************************************************************************************!*\
      !*** ./node_modules/@arcgis/core/views/2d/layers/features/support/ComputedAttributeStorage.js ***!
      \************************************************************************************************/

    /*! exports provided: ComputedAttributeStorage */

    /***/
    function Swtj(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ComputedAttributeStorage", function () {
        return i;
      });
      /* harmony import */


      var _displayIdUtils_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ./displayIdUtils.js */
      "P0wj");
      /* harmony import */


      var _StaticBitSet_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./StaticBitSet.js */
      "feGD");
      /*
      All material copyright ESRI, All Rights Reserved, unless otherwise specified.
      See https://js.arcgis.com/4.18/esri/copyright.txt for details.
      */


      function s(t, e, s) {
        if (!(t.length > e)) for (; t.length <= e;) {
          t.push(s);
        }
      }

      var i = /*#__PURE__*/function () {
        function i() {
          _classCallCheck(this, i);

          this._numerics = [], this._strings = [], this._idGenerator = new _displayIdUtils_js__WEBPACK_IMPORTED_MODULE_0__["DisplayIdGenerator"](), this._allocatedSize = 256, this._bitsets = [], this._instanceIds = [], this._bounds = [];
        }

        _createClass(i, [{
          key: "createBitset",
          value: function createBitset() {
            var t = this._bitsets.length;
            return this._bitsets.push(_StaticBitSet_js__WEBPACK_IMPORTED_MODULE_1__["StaticBitSet"].create(this._allocatedSize, 2147483647)), t + 1;
          }
        }, {
          key: "getBitset",
          value: function getBitset(t) {
            return this._bitsets[t - 1];
          }
        }, {
          key: "_expand",
          value: function _expand() {
            this._allocatedSize <<= 1;

            var _iterator8 = _createForOfIteratorHelper(this._bitsets),
                _step8;

            try {
              for (_iterator8.s(); !(_step8 = _iterator8.n()).done;) {
                var t = _step8.value;
                t.resize(this._allocatedSize);
              }
            } catch (err) {
              _iterator8.e(err);
            } finally {
              _iterator8.f();
            }
          }
        }, {
          key: "_ensureNumeric",
          value: function _ensureNumeric(t, e) {
            this._numerics[t] || (this._numerics[t] = []);
            s(this._numerics[t], e, 0);
          }
        }, {
          key: "_ensureInstanceId",
          value: function _ensureInstanceId(t) {
            s(this._instanceIds, t, 0);
          }
        }, {
          key: "_ensureString",
          value: function _ensureString(t, e) {
            this._strings[t] || (this._strings[t] = []);
            s(this._strings[t], e, null);
          }
        }, {
          key: "createDisplayId",
          value: function createDisplayId() {
            var t = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : !1;

            var e = this._idGenerator.createId();

            return e > this._allocatedSize && this._expand(), function (t, e) {
              return ((e ? 2147483648 : 0) | t) >>> 0;
            }(e, t);
          }
        }, {
          key: "releaseDisplayId",
          value: function releaseDisplayId(t) {
            var _iterator9 = _createForOfIteratorHelper(this._bitsets),
                _step9;

            try {
              for (_iterator9.s(); !(_step9 = _iterator9.n()).done;) {
                var e = _step9.value;
                e.unset(t);
              }
            } catch (err) {
              _iterator9.e(err);
            } finally {
              _iterator9.f();
            }

            return this._idGenerator.releaseId(2147483647 & t);
          }
        }, {
          key: "getComputedNumeric",
          value: function getComputedNumeric(t, e) {
            return this.getComputedNumericAtIndex(2147483647 & t, 0);
          }
        }, {
          key: "setComputedNumeric",
          value: function setComputedNumeric(t, e, s) {
            return this.setComputedNumericAtIndex(2147483647 & t, s, 0);
          }
        }, {
          key: "getComputedString",
          value: function getComputedString(t, e) {
            return this.getComputedStringAtIndex(2147483647 & t, 0);
          }
        }, {
          key: "setComputedString",
          value: function setComputedString(t, e, s) {
            return this.setComputedStringAtIndex(2147483647 & t, 0, s);
          }
        }, {
          key: "getComputedNumericAtIndex",
          value: function getComputedNumericAtIndex(t, e) {
            var s = 2147483647 & t;
            return this._ensureNumeric(e, s), this._numerics[e][s];
          }
        }, {
          key: "setComputedNumericAtIndex",
          value: function setComputedNumericAtIndex(t, e, s) {
            var _i2 = 2147483647 & t;

            this._ensureNumeric(e, _i2), this._numerics[e][_i2] = s;
          }
        }, {
          key: "getInstanceId",
          value: function getInstanceId(t) {
            var e = 2147483647 & t;
            return this._ensureInstanceId(e), this._instanceIds[e];
          }
        }, {
          key: "setInstanceId",
          value: function setInstanceId(t, e) {
            var s = 2147483647 & t;
            this._ensureInstanceId(s), this._instanceIds[s] = e;
          }
        }, {
          key: "getComputedStringAtIndex",
          value: function getComputedStringAtIndex(t, e) {
            var s = 2147483647 & t;
            return this._ensureString(e, s), this._strings[e][s];
          }
        }, {
          key: "setComputedStringAtIndex",
          value: function setComputedStringAtIndex(t, e, s) {
            var _i3 = 2147483647 & t;

            this._ensureString(e, _i3), this._strings[e][_i3] = s;
          }
        }, {
          key: "getXMin",
          value: function getXMin(t) {
            return this._bounds[4 * (2147483647 & t)];
          }
        }, {
          key: "getYMin",
          value: function getYMin(t) {
            return this._bounds[4 * (2147483647 & t) + 1];
          }
        }, {
          key: "getXMax",
          value: function getXMax(t) {
            return this._bounds[4 * (2147483647 & t) + 2];
          }
        }, {
          key: "getYMax",
          value: function getYMax(t) {
            return this._bounds[4 * (2147483647 & t) + 3];
          }
        }, {
          key: "setBounds",
          value: function setBounds(t, e) {
            var _i4 = e.readHydratedGeometry();

            if (!_i4 || !_i4.coords.length) return !1;
            var n = 1 / 0,
                r = 1 / 0,
                u = -1 / 0,
                h = -1 / 0;

            _i4.forEachVertex(function (t, e) {
              n = Math.min(n, t), r = Math.min(r, e), u = Math.max(u, t), h = Math.max(h, e);
            });

            var d = 2147483647 & t;
            return s(this._bounds, 4 * d + 4, 0), this._bounds[4 * d] = n, this._bounds[4 * d + 1] = r, this._bounds[4 * d + 2] = u, this._bounds[4 * d + 3] = h, !0;
          }
        }]);

        return i;
      }();
      /***/

    },

    /***/
    "feGD":
    /*!************************************************************************************!*\
      !*** ./node_modules/@arcgis/core/views/2d/layers/features/support/StaticBitSet.js ***!
      \************************************************************************************/

    /*! exports provided: StaticBitSet */

    /***/
    function feGD(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "StaticBitSet", function () {
        return t;
      });
      /*
      All material copyright ESRI, All Rights Reserved, unless otherwise specified.
      See https://js.arcgis.com/4.18/esri/copyright.txt for details.
      */


      var t = /*#__PURE__*/function () {
        function t(_t8, e) {
          _classCallCheck(this, t);

          this._mask = 0, this._buf = _t8, this._mask = e;
        }

        _createClass(t, [{
          key: "_getIndex",
          value: function _getIndex(_t9) {
            return Math.floor(_t9 / 32);
          }
        }, {
          key: "has",
          value: function has(_t10) {
            var e = this._mask & _t10;
            return !!(this._buf[this._getIndex(e)] & 1 << e % 32);
          }
        }, {
          key: "set",
          value: function set(_t11) {
            var e = this._mask & _t11,
                s = this._getIndex(e),
                h = 1 << e % 32;

            this._buf[s] |= h;
          }
        }, {
          key: "unset",
          value: function unset(_t12) {
            var e = this._mask & _t12,
                s = this._getIndex(e),
                h = 1 << e % 32;

            this._buf[s] &= 4294967295 ^ h;
          }
        }, {
          key: "resize",
          value: function resize(_t13) {
            var e = this._buf,
                s = new Uint32Array(Math.ceil(_t13 / 32));
            s.set(e), this._buf = s;
          }
        }, {
          key: "or",
          value: function or(_t14) {
            for (var e = 0; e < this._buf.length; e++) {
              this._buf[e] |= _t14._buf[e];
            }

            return this;
          }
        }, {
          key: "and",
          value: function and(_t15) {
            for (var e = 0; e < this._buf.length; e++) {
              this._buf[e] &= _t15._buf[e];
            }

            return this;
          }
        }, {
          key: "xor",
          value: function xor(_t16) {
            for (var e = 0; e < this._buf.length; e++) {
              this._buf[e] ^= _t16._buf[e];
            }

            return this;
          }
        }, {
          key: "ior",
          value: function ior(_t17) {
            for (var e = 0; e < this._buf.length; e++) {
              this._buf[e] |= ~_t17._buf[e];
            }

            return this;
          }
        }, {
          key: "iand",
          value: function iand(_t18) {
            for (var e = 0; e < this._buf.length; e++) {
              this._buf[e] &= ~_t18._buf[e];
            }

            return this;
          }
        }, {
          key: "ixor",
          value: function ixor(_t19) {
            for (var e = 0; e < this._buf.length; e++) {
              this._buf[e] ^= ~_t19._buf[e];
            }

            return this;
          }
        }, {
          key: "any",
          value: function any() {
            for (var _t25 = 0; _t25 < this._buf.length; _t25++) {
              if (this._buf[_t25]) return !0;
            }

            return !1;
          }
        }, {
          key: "copy",
          value: function copy(_t21) {
            for (var e = 0; e < this._buf.length; e++) {
              this._buf[e] = _t21._buf[e];
            }

            return this;
          }
        }, {
          key: "clone",
          value: function clone() {
            return new t(this._buf.slice(), this._mask);
          }
        }, {
          key: "clear",
          value: function clear() {
            for (var _t26 = 0; _t26 < this._buf.length; _t26++) {
              this._buf[_t26] = 0;
            }
          }
        }, {
          key: "forEachSet",
          value: function forEachSet(_t23) {
            for (var e = 0; e < this._buf.length; e++) {
              var s = this._buf[e],
                  h = 32 * e;
              if (s) for (; s;) {
                1 & s && _t23(h), s >>>= 1, h++;
              }
            }
          }
        }, {
          key: "countSet",
          value: function countSet() {
            var _t24 = 0;
            return this.forEachSet(function (e) {
              _t24++;
            }), _t24;
          }
        }], [{
          key: "fromBuffer",
          value: function fromBuffer(e, s) {
            return new t(e, s);
          }
        }, {
          key: "create",
          value: function create(e) {
            var s = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 4294967295;
            var h = new Uint32Array(Math.ceil(e / 32));
            return new t(h, s);
          }
        }]);

        return t;
      }();
      /***/

    },

    /***/
    "w5u1":
    /*!*********************************************************************************!*\
      !*** ./node_modules/@arcgis/core/views/2d/layers/features/support/TileStore.js ***!
      \*********************************************************************************/

    /*! exports provided: default */

    /***/
    function w5u1(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony import */


      var _core_has_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ../../../../../core/has.js */
      "wSAH");
      /* harmony import */


      var _core_Evented_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ../../../../../core/Evented.js */
      "zm0L");
      /* harmony import */


      var _tiling_TileKey_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ../../../tiling/TileKey.js */
      "rlSK");
      /* harmony import */


      var _tiling_TileCoverage_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ../../../tiling/TileCoverage.js */
      "umoc");
      /* harmony import */


      var _chunks_rbush_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ../../../../../chunks/rbush.js */
      "kB+0");
      /* harmony import */


      var _Tile_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ./Tile.js */
      "7g5W");
      /*
      All material copyright ESRI, All Rights Reserved, unless otherwise specified.
      See https://js.arcgis.com/4.18/esri/copyright.txt for details.
      */


      var h = {
        added: [],
        removed: []
      },
          r = new Set(),
          d = new _tiling_TileKey_js__WEBPACK_IMPORTED_MODULE_2__["default"](0, 0, 0, 0);
      /* harmony default export */

      __webpack_exports__["default"] = /*#__PURE__*/function (_core_Evented_js__WEB) {
        _inherits(_class2, _core_Evented_js__WEB);

        var _super2 = _createSuper(_class2);

        function _class2(t) {
          var _this6;

          _classCallCheck(this, _class2);

          _this6 = _super2.call(this), _this6._tiles = new Map(), _this6._index = Object(_chunks_rbush_js__WEBPACK_IMPORTED_MODULE_4__["r"])(9, Object(_core_has_js__WEBPACK_IMPORTED_MODULE_0__["default"])("csp-restrictions") ? function (e) {
            return {
              minX: e.bounds[0],
              minY: e.bounds[1],
              maxX: e.bounds[2],
              maxY: e.bounds[3]
            };
          } : [".bounds[0]", ".bounds[1]", ".bounds[2]", ".bounds[3]"]), _this6.tiles = [], _this6.tileScheme = t;
          return _this6;
        }

        _createClass(_class2, [{
          key: "destroy",
          value: function destroy() {
            this.clear();
          }
        }, {
          key: "clear",
          value: function clear() {
            this.tiles.length = 0, this._tiles.clear(), this._index.clear();
          }
        }, {
          key: "has",
          value: function has(e) {
            return this._tiles.has(e);
          }
        }, {
          key: "get",
          value: function get(e) {
            return this._tiles.get(e);
          }
        }, {
          key: "findByKey",
          value: function findByKey(e) {
            return this._tiles.get(e.id);
          }
        }, {
          key: "intersections",
          value: function intersections(e, t) {
            var s = "string" == typeof e ? this.get(e) : e;
            if (!s) return [];
            var i = t * s.resolution,
                o = s.bounds[0] - i,
                n = s.bounds[1] - i,
                h = s.bounds[2] + i,
                r = s.bounds[3] + i,
                d = [];

            var _iterator10 = _createForOfIteratorHelper(this._index.search({
              minX: o,
              minY: n,
              maxX: h,
              maxY: r
            })),
                _step10;

            try {
              for (_iterator10.s(); !(_step10 = _iterator10.n()).done;) {
                var _e7 = _step10.value;

                var _t27 = _e7.bounds.slice();

                _t27[0] = Math.max(_t27[0], o), _t27[1] = Math.max(_t27[1], n), _t27[2] = Math.min(_t27[2], h), _t27[3] = Math.min(_t27[3], r), _t27[2] - _t27[0] > 0 && _t27[3] - _t27[1] > 0 && d.push({
                  bounds: _t27,
                  tile: _e7
                });
              }
            } catch (err) {
              _iterator10.e(err);
            } finally {
              _iterator10.f();
            }

            return d;
          }
        }, {
          key: "boundsIntersections",
          value: function boundsIntersections(e) {
            return this._index.search({
              minX: e[0],
              minY: e[1],
              maxX: e[2],
              maxY: e[3]
            });
          }
        }, {
          key: "updateTiles",
          value: function updateTiles(e) {
            var _this7 = this;

            var t = {
              added: [],
              removed: []
            };

            var _iterator11 = _createForOfIteratorHelper(e.added),
                _step11;

            try {
              for (_iterator11.s(); !(_step11 = _iterator11.n()).done;) {
                var s = _step11.value;

                if (!this.has(s)) {
                  var _e8 = new _Tile_js__WEBPACK_IMPORTED_MODULE_5__["Tile"](this.tileScheme, s);

                  this._tiles.set(s, _e8), this._index.insert(_e8), t.added.push(_e8);
                }
              }
            } catch (err) {
              _iterator11.e(err);
            } finally {
              _iterator11.f();
            }

            var _iterator12 = _createForOfIteratorHelper(e.removed),
                _step12;

            try {
              for (_iterator12.s(); !(_step12 = _iterator12.n()).done;) {
                var _s2 = _step12.value;

                if (this.has(_s2)) {
                  var _e9 = this.get(_s2);

                  this._tiles["delete"](_s2), this._index.remove(_e9), t.removed.push(_e9);
                }
              }
            } catch (err) {
              _iterator12.e(err);
            } finally {
              _iterator12.f();
            }

            this.tiles.length = 0, this._tiles.forEach(function (e) {
              return _this7.tiles.push(e);
            }), (t.added.length || t.removed.length) && this.emit("update", t);
          }
        }, {
          key: "setViewState",
          value: function setViewState(e) {
            var t = this.tileScheme.getTileCoverage(e, 0);
            if (!t) return;
            var s = t.spans,
                o = t.lodInfo,
                l = o.level;

            if (s.length > 0) {
              var _iterator13 = _createForOfIteratorHelper(s),
                  _step13;

              try {
                for (_iterator13.s(); !(_step13 = _iterator13.n()).done;) {
                  var _step13$value = _step13.value,
                      _e10 = _step13$value.row,
                      _t28 = _step13$value.colFrom,
                      i = _step13$value.colTo;

                  for (var _s3 = _t28; _s3 <= i; _s3++) {
                    var _t29 = d.set(l, _e10, o.normalizeCol(_s3), o.getWorldForColumn(_s3)).id;

                    if (r.add(_t29), !this.has(_t29)) {
                      var _e11 = new _Tile_js__WEBPACK_IMPORTED_MODULE_5__["Tile"](this.tileScheme, _t29);

                      this._tiles.set(_t29, _e11), this._index.insert(_e11), this.tiles.push(_e11), h.added.push(_e11);
                    }
                  }
                }
              } catch (err) {
                _iterator13.e(err);
              } finally {
                _iterator13.f();
              }
            }

            for (var _e12 = this.tiles.length - 1; _e12 >= 0; _e12--) {
              var _t30 = this.tiles[_e12];
              r.has(_t30.id) || (this._tiles["delete"](_t30.id), this.tiles.splice(_e12, 1), this._index.remove(_t30), h.removed.push(_t30));
            }

            (h.added.length || h.removed.length) && this.emit("update", h), _tiling_TileCoverage_js__WEBPACK_IMPORTED_MODULE_3__["default"].pool.release(t), r.clear(), h.added.length = 0, h.removed.length = 0;
          }
        }]);

        return _class2;
      }(_core_Evented_js__WEBPACK_IMPORTED_MODULE_1__["default"]);
      /***/

    }
  }]);
})();
//# sourceMappingURL=default~layers-GeoRSSLayerView2D-js~layers-GraphicsLayerView2D-js~layers-ImageryLayerView2D-js~layer~f4e9118f-es5.js.map