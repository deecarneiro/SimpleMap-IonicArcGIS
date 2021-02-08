(function () {
  function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

  function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

  function _iterableToArrayLimit(arr, i) { if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr))) return; var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

  function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

  function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

  function _createForOfIteratorHelper(o, allowArrayLike) { var it; if (typeof Symbol === "undefined" || o[Symbol.iterator] == null) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e7) { throw _e7; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = o[Symbol.iterator](); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e8) { didErr = true; err = _e8; }, f: function f() { try { if (!normalCompletion && it["return"] != null) it["return"](); } finally { if (didErr) throw err; } } }; }

  function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

  function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

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

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["layers-RouteLayerView2D-js"], {
    /***/
    "BLb8":
    /*!***********************************************************************!*\
      !*** ./node_modules/@arcgis/core/views/2d/layers/RouteLayerView2D.js ***!
      \***********************************************************************/

    /*! exports provided: default */

    /***/
    function BLb8(module, __webpack_exports__, __webpack_require__) {
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


      var _core_promiseUtils_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! ../../../core/promiseUtils.js */
      "9MzC");
      /* harmony import */


      var _core_Handles_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
      /*! ../../../core/Handles.js */
      "r0DZ");
      /* harmony import */


      var _layers_LayerView_js__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
      /*! ../../layers/LayerView.js */
      "NloG");
      /* harmony import */


      var _graphics_GraphicsView2D_js__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
      /*! ./graphics/GraphicsView2D.js */
      "Vh9r");
      /* harmony import */


      var _LayerView2D_js__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
      /*! ./LayerView2D.js */
      "Vm2Q");
      /*
      All material copyright ESRI, All Rights Reserved, unless otherwise specified.
      See https://js.arcgis.com/4.18/esri/copyright.txt for details.
      */


      var h = /*#__PURE__*/function (_Object) {
        _inherits(h, _Object);

        var _super = _createSuper(h);

        function h() {
          var _this;

          _classCallCheck(this, h);

          _this = _super.apply(this, arguments), _this._handles = new _core_Handles_js__WEBPACK_IMPORTED_MODULE_10__["default"](), _this._popupTemplates = new Map(), _this.graphicsViews = [];
          return _this;
        }

        _createClass(h, [{
          key: "hitTest",
          value: function hitTest(e, s) {
            var _this2 = this;

            if (this.suspended || !this.graphicsViews.length) return Object(_core_promiseUtils_js__WEBPACK_IMPORTED_MODULE_9__["resolve"])();
            var i = this.graphicsViews.map(function (r) {
              return r.hitTest(e, s);
            });
            return Object(_core_promiseUtils_js__WEBPACK_IMPORTED_MODULE_9__["all"])(i).then(function (e) {
              return e.filter(function (e, s) {
                return e && (e.popupTemplate = _this2._popupTemplates.get(_this2.graphicsViews[s]), e.layer = _this2.layer, e.sourceLayer = _this2.layer), !!e;
              })[0] || null;
            });
          }
        }, {
          key: "update",
          value: function update(e) {
            if (this.graphicsViews) {
              var _iterator = _createForOfIteratorHelper(this.graphicsViews),
                  _step;

              try {
                for (_iterator.s(); !(_step = _iterator.n()).done;) {
                  var s = _step.value;
                  s.processUpdate(e);
                }
              } catch (err) {
                _iterator.e(err);
              } finally {
                _iterator.f();
              }
            }
          }
        }, {
          key: "attach",
          value: function attach() {
            var _this3 = this;

            this.layer.featureCollections.forEach(function (e) {
              var s = new _graphics_GraphicsView2D_js__WEBPACK_IMPORTED_MODULE_12__["default"]({
                view: _this3.view,
                graphics: e.source,
                requestUpdateCallback: function requestUpdateCallback() {
                  return _this3.requestUpdate();
                }
              });
              s.renderer = e.renderer, _this3._popupTemplates.set(s, e.popupTemplate), _this3.graphicsViews.push(s), _this3.container.addChild(s.container);
            });
          }
        }, {
          key: "detach",
          value: function detach() {
            this.container.removeAllChildren();

            var _iterator2 = _createForOfIteratorHelper(this.graphicsViews),
                _step2;

            try {
              for (_iterator2.s(); !(_step2 = _iterator2.n()).done;) {
                var e = _step2.value;
                e.destroy(), e.view = null, e.renderer = null;
              }
            } catch (err) {
              _iterator2.e(err);
            } finally {
              _iterator2.f();
            }

            this.graphicsViews.length = 0, this._handles.removeAll(), this._popupTemplates = null;
          }
        }, {
          key: "moveStart",
          value: function moveStart() {}
        }, {
          key: "moveEnd",
          value: function moveEnd() {}
        }, {
          key: "viewChange",
          value: function viewChange() {
            var _iterator3 = _createForOfIteratorHelper(this.graphicsViews),
                _step3;

            try {
              for (_iterator3.s(); !(_step3 = _iterator3.n()).done;) {
                var e = _step3.value;
                e.viewChange();
              }
            } catch (err) {
              _iterator3.e(err);
            } finally {
              _iterator3.f();
            }
          }
        }]);

        return h;
      }(Object(_LayerView2D_js__WEBPACK_IMPORTED_MODULE_13__["LayerView2DMixin"])(_layers_LayerView_js__WEBPACK_IMPORTED_MODULE_11__["default"]));

      h = Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_subclass_js__WEBPACK_IMPORTED_MODULE_5__["subclass"])("esri.views.2d.layers.RouteLayerView2D")], h);
      var c = h;
      /* harmony default export */

      __webpack_exports__["default"] = c;
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

        var _iterator4 = _createForOfIteratorHelper(m),
            _step4;

        try {
          for (_iterator4.s(); !(_step4 = _iterator4.n()).done;) {
            var _r = _step4.value;

            var _f = u(t, _r),
                _i = u(n, _r);

            var _c = void 0;

            (h || "function" != typeof _f && "function" != typeof _i) && _f !== _i && (null == _f && null == _i || (_c = o && o[_r] && "function" == typeof o[_r] ? o[_r](_f, _i) : "object" == typeof _f && "object" == typeof _i && l(_f) === l(_i) ? s(_f, _i) : {
              type: "complete",
              oldValue: _f,
              newValue: _i
            }, Object(_maybe_js__WEBPACK_IMPORTED_MODULE_0__["isSome"])(_c) && (Object(_maybe_js__WEBPACK_IMPORTED_MODULE_0__["isSome"])(b) ? b.diff[_r] = _c : b = {
              type: "partial",
              diff: _defineProperty({}, _r, _c)
            })));
          }
        } catch (err) {
          _iterator4.e(err);
        } finally {
          _iterator4.f();
        }

        return b;
      }

      function p(e, n) {
        if (Object(_maybe_js__WEBPACK_IMPORTED_MODULE_0__["isNone"])(e)) return !1;
        var o = n.split(".");
        var r = e;

        var _iterator5 = _createForOfIteratorHelper(o),
            _step5;

        try {
          for (_iterator5.s(); !(_step5 = _iterator5.n()).done;) {
            var t = _step5.value;
            if ("complete" === r.type) return !0;
            if ("partial" !== r.type) return !1;
            {
              var _e = r.diff[t];
              if (!_e) return !1;
              r = _e;
            }
          }
        } catch (err) {
          _iterator5.e(err);
        } finally {
          _iterator5.f();
        }

        return !0;
      }

      function a(t, e) {
        var _iterator6 = _createForOfIteratorHelper(e),
            _step6;

        try {
          for (_iterator6.s(); !(_step6 = _iterator6.n()).done;) {
            var n = _step6.value;
            if (p(t, n)) return !0;
          }
        } catch (err) {
          _iterator6.e(err);
        } finally {
          _iterator6.f();
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

              var _iterator7 = _createForOfIteratorHelper(t.added),
                  _step7;

              try {
                for (_iterator7.s(); !(_step7 = _iterator7.n()).done;) {
                  var _e2 = _step7.value;
                  if (!m(_e2)) return !1;
                }
              } catch (err) {
                _iterator7.e(err);
              } finally {
                _iterator7.f();
              }

              var _iterator8 = _createForOfIteratorHelper(t.removed),
                  _step8;

              try {
                for (_iterator8.s(); !(_step8 = _iterator8.n()).done;) {
                  var _e3 = _step8.value;
                  if (!m(_e3)) return !1;
                }
              } catch (err) {
                _iterator8.e(err);
              } finally {
                _iterator8.f();
              }

              var _iterator9 = _createForOfIteratorHelper(t.changed),
                  _step9;

              try {
                for (_iterator9.s(); !(_step9 = _iterator9.n()).done;) {
                  var _e4 = _step9.value;
                  if (!m(_e4)) return !1;
                }
              } catch (err) {
                _iterator9.e(err);
              } finally {
                _iterator9.f();
              }

              return !0;
            }

          case "partial":
            for (var _t in e.diff) {
              if (!m(e.diff[_t])) return !1;
            }

            return !0;
        }
      }
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
        function s(t, e, _s) {
          _classCallCheck(this, s);

          this._namespace = t, this._storage = e, this._removeFunc = !1, this._hit = 0, this._miss = 0, this._storage.register(this), this._namespace += ":", _s && (this._storage.registerRemoveFunc(this._namespace, _s), this._removeFunc = !0);
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
          value: function put(t, e, _s2) {
            var i = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : 0;

            this._storage.put(this._namespace + t, e, _s2, i);
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
          value: function updateSize(t, e, _s3) {
            this._storage.updateSize(this._namespace + t, e, _s3);
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
          value: function put(t, e, s, _i2) {
            var h = this._db.get(t);

            if (h && (this._size -= h.size, this._db["delete"](t), h.entry !== e && this._notifyRemoved(t, h.entry)), s > this._maxSize) return void this._notifyRemoved(t, e);
            if (void 0 === e) return void console.warn("Refusing to cache undefined entry ");
            if (!s || s < 0) return void console.warn("Refusing to cache entry with invalid size " + s);
            var r = 1 + Math.max(_i2, -3) - -3;
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
            var _i3 = this._db.get(t);

            _i3 && _i3.entry === e && (this._size -= _i3.size, s > this._maxSize ? this._notifyRemoved(t, e) : (_i3.size = s, this._size += s, this._checkSizeLimit()));
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
            var _this4 = this;

            var t = {
              Size: Math.round(this._size / 1048576) + "/" + Math.round(this._maxSize / 1048576) + "MB",
              "Hit rate": Math.round(100 * this._getHitRate()) + "%",
              Entries: this._db.size.toString()
            },
                e = {},
                s = new Array();

            this._db.forEach(function (t, _i5) {
              var h = t.lifetime;
              s[h] = (s[h] || 0) + t.size, _this4._users.forAll(function (s) {
                var h = s.namespace;

                if (_i5.startsWith(h)) {
                  var _s4 = e[h] || 0;

                  e[h] = _s4 + t.size;
                }
              });
            });

            var _i4 = {};

            this._users.forAll(function (t) {
              var s = t.namespace;

              if (!isNaN(t.hitRate) && t.hitRate > 0) {
                var _h = e[s] || 0;

                e[s] = _h, _i4[s] = Math.round(100 * t.hitRate) + "%";
              } else _i4[s] = "0%";
            });

            var h = Object.keys(e);
            h.forEach(function (t) {
              return e[t] = e[t] / _this4._size * 100;
            }), h.sort(function (t, s) {
              return e[s] - e[t];
            }), h.forEach(function (s) {
              return t[s] = Math.round(e[s]) + "% / " + _i4[s];
            });

            for (var _e5 = s.length - 1; _e5 >= 0; --_e5) {
              var _i7 = s[_e5];
              _i7 && (t["Priority " + (_e5 + -3 - 1)] = Math.round(_i7 / this.size * 100) + "%");
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
            var _this5 = this;

            this._db.forEach(function (e, s) {
              s.startsWith(t) && (_this5._size -= e.size, _this5._db["delete"](s), _this5._notifyRemoved(s, e.entry));
            });
          }
        }, {
          key: "clearAll",
          value: function clearAll() {
            var _this6 = this;

            this._db.forEach(function (t, e) {
              return _this6._notifyRemoved(e, t.entry);
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
              var _iterator10 = _createForOfIteratorHelper(this._db),
                  _step10;

              try {
                for (_iterator10.s(); !(_step10 = _iterator10.n()).done;) {
                  var _step10$value = _slicedToArray(_step10.value, 2),
                      t = _step10$value[0],
                      _e6 = _step10$value[1];

                  if (this._db["delete"](t), _e6.lives <= 1 ? (this._size -= _e6.size, this._notifyRemoved(t, _e6.entry)) : (--_e6.lives, this._db.set(t, _e6)), this._size <= .9 * this.maxSize) return;
                }
              } catch (err) {
                _iterator10.e(err);
              } finally {
                _iterator10.f();
              }
            }
          }
        }]);

        return i;
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
        function _class(e, r) {
          _classCallCheck(this, _class);

          this._storage = new _MemCache_js__WEBPACK_IMPORTED_MODULE_0__["MemCacheStorage"](), this._storage.maxSize = e, r && this._storage.registerRemoveFunc("", r);
        }

        _createClass(_class, [{
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

        return _class;
      }();
      /***/

    }
  }]);
})();
//# sourceMappingURL=layers-RouteLayerView2D-js-es5.js.map