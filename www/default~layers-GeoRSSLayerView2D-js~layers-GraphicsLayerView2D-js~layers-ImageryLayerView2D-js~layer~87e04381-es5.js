(function () {
  function _get(target, property, receiver) { if (typeof Reflect !== "undefined" && Reflect.get) { _get = Reflect.get; } else { _get = function _get(target, property, receiver) { var base = _superPropBase(target, property); if (!base) return; var desc = Object.getOwnPropertyDescriptor(base, property); if (desc.get) { return desc.get.call(receiver); } return desc.value; }; } return _get(target, property, receiver || target); }

  function _superPropBase(object, property) { while (!Object.prototype.hasOwnProperty.call(object, property)) { object = _getPrototypeOf(object); if (object === null) break; } return object; }

  function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

  function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

  function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

  function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

  function _iterableToArrayLimit(arr, i) { if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr))) return; var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

  function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

  function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

  function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

  function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

  function _createForOfIteratorHelper(o, allowArrayLike) { var it; if (typeof Symbol === "undefined" || o[Symbol.iterator] == null) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e26) { throw _e26; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = o[Symbol.iterator](); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e27) { didErr = true; err = _e27; }, f: function f() { try { if (!normalCompletion && it["return"] != null) it["return"](); } finally { if (didErr) throw err; } } }; }

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

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["default~layers-GeoRSSLayerView2D-js~layers-GraphicsLayerView2D-js~layers-ImageryLayerView2D-js~layer~87e04381"], {
    /***/
    "0u2h":
    /*!**************************************************************************************!*\
      !*** ./node_modules/@arcgis/core/views/2d/layers/features/support/GraphicsReader.js ***!
      \**************************************************************************************/

    /*! exports provided: GraphicsReader */

    /***/
    function u2h(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "GraphicsReader", function () {
        return s;
      });
      /* harmony import */


      var _geometry_support_jsonUtils_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ../../../../../geometry/support/jsonUtils.js */
      "qatw");
      /* harmony import */


      var _layers_graphics_featureConversionUtils_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ../../../../../layers/graphics/featureConversionUtils.js */
      "ZlUD");
      /* harmony import */


      var _FeatureSetReader_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./FeatureSetReader.js */
      "8NDJ");
      /* harmony import */


      var _FeatureSetReaderJSON_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./FeatureSetReaderJSON.js */
      "Q0oN");
      /*
      All material copyright ESRI, All Rights Reserved, unless otherwise specified.
      See https://js.arcgis.com/4.18/esri/copyright.txt for details.
      */


      var s = /*#__PURE__*/function (_FeatureSetReaderJSON) {
        _inherits(s, _FeatureSetReaderJSON);

        var _super = _createSuper(s);

        function s(e, r) {
          _classCallCheck(this, s);

          return _super.call(this, e, r, null);
        }

        _createClass(s, [{
          key: "geometryType",
          get: function get() {
            var e = this._current;
            return e ? e.geometryType : null;
          }
        }, {
          key: "readGraphic",
          value: function readGraphic() {
            return this._current;
          }
        }, {
          key: "getCursor",
          value: function getCursor() {
            return this.copy();
          }
        }, {
          key: "copy",
          value: function copy() {
            var e = new s(this.instance, this._features);
            return this.copyInto(e), e;
          }
        }], [{
          key: "from",
          value: function from(o) {
            var n = _FeatureSetReader_js__WEBPACK_IMPORTED_MODULE_2__["FeatureSetReader"].createInstance(),
                c = [],
                i = o.filter(function (e) {
              return !!e.geometry;
            });

            var _iterator = _createForOfIteratorHelper(i),
                _step;

            try {
              for (_iterator.s(); !(_step = _iterator.n()).done;) {
                var t = _step.value;

                var _o = Object(_geometry_support_jsonUtils_js__WEBPACK_IMPORTED_MODULE_0__["getJsonType"])(t.geometry);

                Object(_layers_graphics_featureConversionUtils_js__WEBPACK_IMPORTED_MODULE_1__["convertFromGraphics"])(c, [t], _o, !1, !1, "uid");
              }
            } catch (err) {
              _iterator.e(err);
            } finally {
              _iterator.f();
            }

            return new s(n, c);
          }
        }]);

        return s;
      }(_FeatureSetReaderJSON_js__WEBPACK_IMPORTED_MODULE_3__["FeatureSetReaderJSON"]);
      /***/

    },

    /***/
    "7+sN":
    /*!****************************************************************************!*\
      !*** ./node_modules/@arcgis/core/views/2d/layers/graphics/GraphicStore.js ***!
      \****************************************************************************/

    /*! exports provided: default */

    /***/
    function sN(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony import */


      var _core_has_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ../../../../core/has.js */
      "wSAH");
      /* harmony import */


      var _geometry_support_contains_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ../../../../geometry/support/contains.js */
      "IXLn");
      /* harmony import */


      var _geometry_support_extentUtils_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ../../../../geometry/support/extentUtils.js */
      "+NQI");
      /* harmony import */


      var _geometry_support_jsonUtils_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ../../../../geometry/support/jsonUtils.js */
      "qatw");
      /* harmony import */


      var _core_screenUtils_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ../../../../core/screenUtils.js */
      "qRWG");
      /* harmony import */


      var _core_unitUtils_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ../../../../core/unitUtils.js */
      "gEht");
      /* harmony import */


      var _geometry_support_aaBoundingRect_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ../../../../geometry/support/aaBoundingRect.js */
      "kYAx");
      /* harmony import */


      var _geometry_support_normalizeUtils_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! ../../../../geometry/support/normalizeUtils.js */
      "qNUd");
      /* harmony import */


      var _chunks_rbush_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! ../../../../chunks/rbush.js */
      "kB+0");
      /* harmony import */


      var _graphicsUtils_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! ./graphicsUtils.js */
      "M08Z");
      /* harmony import */


      var _GraphicStoreItem_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
      /*! ./GraphicStoreItem.js */
      "t0Xj");
      /*
      All material copyright ESRI, All Rights Reserved, unless otherwise specified.
      See https://js.arcgis.com/4.18/esri/copyright.txt for details.
      */


      var b = {
        minX: 0,
        minY: 0,
        maxX: 0,
        maxY: 0
      },
          x = Object(_geometry_support_aaBoundingRect_js__WEBPACK_IMPORTED_MODULE_6__["create"])(),
          G = [];

      function z(e, t, i, r, s) {
        return b.minX = t, b.minY = i, b.maxX = r, b.maxY = s, e.search(b);
      }
      /* harmony default export */


      __webpack_exports__["default"] = /*#__PURE__*/function () {
        function _class(t, i, r, s, n, a) {
          _classCallCheck(this, _class);

          this._graphics = s, this._onAdd = n, this._onRemove = a, this._index = Object(_chunks_rbush_js__WEBPACK_IMPORTED_MODULE_8__["r"])(9, Object(_core_has_js__WEBPACK_IMPORTED_MODULE_0__["default"])("csp-restrictions") ? function (e) {
            return {
              minX: e.bounds[0],
              minY: e.bounds[1],
              maxX: e.bounds[2],
              maxY: e.bounds[3]
            };
          } : [".bounds[0]", ".bounds[1]", ".bounds[2]", ".bounds[3]"]), this._itemByGraphic = new Map(), this._currentLevel = -1 / 0, this._tileInfoView = t, this._uidFieldName = r;
          var u = t.getClosestInfoForScale(i);
          u && (this._currentLevel = u.level, this._resolution = this._tileInfoView.getTileResolution(u.level)), this._metersPerUnit = Object(_core_unitUtils_js__WEBPACK_IMPORTED_MODULE_5__["getMetersPerUnit"])(t.spatialReference);
        }

        _createClass(_class, [{
          key: "hitTest",
          value: function hitTest(e, o, u, h, l) {
            e = Object(_geometry_support_normalizeUtils_js__WEBPACK_IMPORTED_MODULE_7__["normalizeMapX"])(e, this._tileInfoView.spatialReference);
            var m = .5 * h * u;
            x[0] = e - m, x[1] = o - m, x[2] = e + m, x[3] = o + m;
            var f = .5 * h * (u + 50),
                b = z(this._index, e - f, o - f, e + f, o + f);
            if (!b || 0 === b.length) return [];
            var G = {
              x: e,
              y: o
            },
                I = [];
            var B;

            var _iterator2 = _createForOfIteratorHelper(b),
                _step2;

            try {
              for (_iterator2.s(); !(_step2 = _iterator2.n()).done;) {
                var _u = _step2.value;
                if (_u.graphic.visible) switch (Object(_geometry_support_jsonUtils_js__WEBPACK_IMPORTED_MODULE_3__["getJsonType"])(_u.geometry)) {
                  case "esriGeometryPoint":
                    {
                      var _e = _u.symbol;
                      if (!_e) continue;

                      var i = _u.geometry,
                          r = i.x,
                          s = i.y,
                          _o2 = h * this._metersPerUnit;

                      var n = void 0;

                      switch (_e.type) {
                        case "esriTS":
                          n = Object(_graphicsUtils_js__WEBPACK_IMPORTED_MODULE_9__["getTextSymbolBounds"])(r, s, _e, _u.size, h, l);
                          break;

                        case "expanded-cim":
                          n = Object(_graphicsUtils_js__WEBPACK_IMPORTED_MODULE_9__["getCIMMarkerBounds"])(r, s, _e, h, _o2, l);
                          break;

                        case "esriSMS":
                        case "esriPMS":
                          n = Object(_graphicsUtils_js__WEBPACK_IMPORTED_MODULE_9__["getMarkerSymbolBounds"])(r, s, _e, h, _o2, l);
                      }

                      Object(_geometry_support_contains_js__WEBPACK_IMPORTED_MODULE_1__["polygonContainsPoint"])(n, G) && I.push(_u);
                    }
                    break;

                  case "esriGeometryPolyline":
                    {
                      var t = _u.symbol;
                      if (!t || !t.layers.length) continue;
                      var _i = t.layers[0];
                      B = 1.5 * h * window.devicePixelRatio * Object(_core_screenUtils_js__WEBPACK_IMPORTED_MODULE_4__["pt2px"])(_i.width), Object(_graphicsUtils_js__WEBPACK_IMPORTED_MODULE_9__["isPointOnPolyline"])(_u.geometry, e, o, B) && I.push(_u);
                    }
                    break;

                  case "esriGeometryEnvelope":
                    {
                      var _e2 = _u.geometry,
                          _t = Object(_geometry_support_aaBoundingRect_js__WEBPACK_IMPORTED_MODULE_6__["fromValues"])(_e2.xmin, _e2.ymin, _e2.xmax, _e2.ymax);

                      Object(_geometry_support_aaBoundingRect_js__WEBPACK_IMPORTED_MODULE_6__["intersects"])(_t, x) && I.push(_u);
                      break;
                    }

                  case "esriGeometryPolygon":
                    {
                      if (Object(_geometry_support_contains_js__WEBPACK_IMPORTED_MODULE_1__["polygonContainsPoint"])(_u.geometry, G)) {
                        I.push(_u);
                        break;
                      }

                      var _e3 = Object(_geometry_support_extentUtils_js__WEBPACK_IMPORTED_MODULE_2__["getPolygonExtent"])(_u.geometry);

                      if (Math.abs(_e3.ymax - _e3.ymin) < 5 * h || Math.abs(_e3.xmax - _e3.xmin) < 5 * h) {
                        var _t2 = Object(_geometry_support_aaBoundingRect_js__WEBPACK_IMPORTED_MODULE_6__["fromValues"])(_e3.xmin, _e3.ymin, _e3.xmax, _e3.ymax);

                        Object(_geometry_support_aaBoundingRect_js__WEBPACK_IMPORTED_MODULE_6__["intersects"])(_t2, x) && I.push(_u);
                      }

                      break;
                    }

                  case "esriGeometryMultipoint":
                    {
                      var _e4 = _u.symbol;
                      if (!_e4) continue;
                      var _i2 = _u.geometry.points;

                      var _r = void 0;

                      for (var _s = 0; _s < _i2.length; _s++) {
                        if (_r = "esriTS" === _e4.type ? Object(_graphicsUtils_js__WEBPACK_IMPORTED_MODULE_9__["getTextSymbolBounds"])(_i2[_s][0], _i2[_s][1], _e4, _u.size, h, l) : Object(_graphicsUtils_js__WEBPACK_IMPORTED_MODULE_9__["getMarkerSymbolBounds"])(_i2[_s][0], _i2[_s][1], _e4, h, h * this._metersPerUnit, l), Object(_geometry_support_contains_js__WEBPACK_IMPORTED_MODULE_1__["polygonContainsPoint"])(_r, G)) {
                          I.push(_u);
                          break;
                        }
                      }

                      break;
                    }
                }
              }
            } catch (err) {
              _iterator2.e(err);
            } finally {
              _iterator2.f();
            }

            return I.sort(function (e, t) {
              var i = Object(_graphicsUtils_js__WEBPACK_IMPORTED_MODULE_9__["graphicGeometryToNumber"])(e.graphic),
                  r = Object(_graphicsUtils_js__WEBPACK_IMPORTED_MODULE_9__["graphicGeometryToNumber"])(t.graphic);
              return i === r ? t.zorder - e.zorder : i - r;
            }), I.map(function (e) {
              return e.graphic;
            });
          }
        }, {
          key: "getGraphicsData",
          value: function getGraphicsData(e, t, i) {
            var r = z(this._index, t.bounds[0], t.bounds[1], t.bounds[2], t.bounds[3]);
            if (0 === r.length || 0 === i.length) return [];
            r.sort(function (e, t) {
              return e.zorder - t.zorder;
            }), r[0].insertAfter = -1;

            for (var _e5 = 1; _e5 < r.length; _e5++) {
              r[_e5].insertAfter = r[_e5 - 1].graphic.uid;
            }

            r.sort(function (e, t) {
              return e.graphic.uid - t.graphic.uid;
            }), i.sort(function (e, t) {
              return e.uid - t.uid;
            });
            var s,
                o = 0,
                n = 0;
            var a = [],
                u = {
              originPosition: "upperLeft",
              scale: [t.resolution, t.resolution],
              translate: [t.bounds[0], t.bounds[3]]
            };

            var _iterator3 = _createForOfIteratorHelper(i),
                _step3;

            try {
              for (_iterator3.s(); !(_step3 = _iterator3.n()).done;) {
                var _t3 = _step3.value;

                for (n = -2; o < r.length;) {
                  if (s = r[o], o++, _t3.uid === s.graphic.uid) {
                    n = s.insertAfter;
                    break;
                  }
                }

                if (!s.geometry || -2 === n) continue;

                var _i3 = s.getGeometryQuantized(u),
                    h = _objectSpread({}, s.graphic.attributes);

                h[this._uidFieldName] = _t3.uid, null == s.groupId && (s.groupId = e.createTemplateGroup(s.symbol, null)), a.push({
                  centroid: _GraphicStoreItem_js__WEBPACK_IMPORTED_MODULE_10__["default"].getCentroidQuantized(s, u),
                  geometry: _i3,
                  attributes: h,
                  symbol: s.symbol,
                  groupId: s.groupId,
                  insertAfter: n,
                  zorder: s.zorder
                });
              }
            } catch (err) {
              _iterator3.e(err);
            } finally {
              _iterator3.f();
            }

            return a.sort(function (e, t) {
              return e.zorder - t.zorder;
            }), a;
          }
        }, {
          key: "queryTileData",
          value: function queryTileData(e, t) {
            var i = 50 * t.resolution,
                r = Object(_geometry_support_aaBoundingRect_js__WEBPACK_IMPORTED_MODULE_6__["pad"])(t.bounds, i, Object(_geometry_support_aaBoundingRect_js__WEBPACK_IMPORTED_MODULE_6__["create"])()),
                s = z(this._index, r[0], r[1], r[2], r[3]),
                o = [];
            return this._createTileGraphics(o, e, s, {
              originPosition: "upperLeft",
              scale: [t.resolution, t.resolution],
              translate: [t.bounds[0], t.bounds[3]]
            }), o;
          }
        }, {
          key: "has",
          value: function has(e) {
            return this._itemByGraphic.has(e);
          }
        }, {
          key: "getBounds",
          value: function getBounds(e) {
            return this._itemByGraphic.has(e) ? this._itemByGraphic.get(e).bounds : null;
          }
        }, {
          key: "addOrModify",
          value: function addOrModify(e, t, i) {
            if (!e) return;
            this.has(e) && this.remove(e), this._onAdd(e);

            var r = _GraphicStoreItem_js__WEBPACK_IMPORTED_MODULE_10__["default"].acquire(e, t, i, this._resolution, this._resolution * this._metersPerUnit, this._tileInfoView.spatialReference);

            return this._itemByGraphic.set(e, r), i && this._index.insert(r), r.bounds;
          }
        }, {
          key: "remove",
          value: function remove(e) {
            if (!this._itemByGraphic.has(e)) return;

            this._onRemove(e);

            var t = this._itemByGraphic.get(e);

            this._index.remove(t), this._itemByGraphic["delete"](e);
          }
        }, {
          key: "updateZ",
          value: function updateZ() {
            var e = this._graphics.items;
            var t, i;

            for (var r = 0; r < e.length; r++) {
              i = e[r], t = this._itemByGraphic.get(i), t && (t.zorder = r);
            }
          }
        }, {
          key: "update",
          value: function update(e, t, i) {
            var r = this._itemByGraphic.get(e);

            r.groupId = null;
            var s = Object(_geometry_support_aaBoundingRect_js__WEBPACK_IMPORTED_MODULE_6__["clone"])(r.bounds);
            return r.size[0] = r.size[1] = 0, this._index.remove(r), r.set(e, t, i, this._resolution, this._resolution * this._metersPerUnit, this._tileInfoView.spatialReference), i && this._index.insert(r), {
              oldBounds: s,
              newBounds: r.bounds
            };
          }
        }, {
          key: "updateLevel",
          value: function updateLevel(e) {
            var _this = this;

            if (this._currentLevel === e) return;
            this._currentLevel = e;

            var t = this._tileInfoView.getTileResolution(e);

            this._resolution = t, this._index.clear(), G.length = 0, this._itemByGraphic.forEach(function (e) {
              e.updateBounds(_this._resolution, _this._resolution * _this._metersPerUnit, _this._tileInfoView.spatialReference), e.geometry && G.push(e);
            }), this._index.load(G);
          }
        }, {
          key: "clear",
          value: function clear() {
            this._itemByGraphic.clear(), this._index.clear();
          }
        }, {
          key: "_createTileGraphics",
          value: function _createTileGraphics(e, t, i, r) {
            var s = this._uidFieldName;
            var o, n, a, u;
            i.sort(function (e, t) {
              return e.zorder - t.zorder;
            });

            for (var h = 0; h < i.length; h++) {
              a = i[h], o = a.graphic, n = a.getGeometryQuantized(r), u = 0 === h ? -1 : i[h - 1].graphic.uid;

              var l = _objectSpread({}, a.graphic.attributes);

              l[s] = o.uid, null == a.groupId && (a.groupId = t.createTemplateGroup(a.symbol, null)), e.push({
                centroid: _GraphicStoreItem_js__WEBPACK_IMPORTED_MODULE_10__["default"].getCentroidQuantized(a, r),
                geometry: n,
                attributes: l,
                symbol: a.symbol,
                groupId: a.groupId,
                insertAfter: u,
                zorder: a.zorder
              });
            }
          }
        }]);

        return _class;
      }();
      /***/

    },

    /***/
    "BA+2":
    /*!****************************************************************!*\
      !*** ./node_modules/@arcgis/core/views/layers/GraphicsView.js ***!
      \****************************************************************/

    /*! exports provided: GraphicsView */

    /***/
    function BA2(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "GraphicsView", function () {
        return t;
      });
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


      var _core_urlUtils_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ../../core/urlUtils.js */
      "4EHJ");
      /* harmony import */


      var _core_uuid_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! ../../core/uuid.js */
      "ju1D");
      /* harmony import */


      var _portal_support_resourceExtension_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! ../../portal/support/resourceExtension.js */
      "9AIY");
      /* harmony import */


      var _core_Identifiable_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! ../../core/Identifiable.js */
      "pdg3");
      /*
      All material copyright ESRI, All Rights Reserved, unless otherwise specified.
      See https://js.arcgis.com/4.18/esri/copyright.txt for details.
      */


      var t = function t(_t4) {
        var p = /*#__PURE__*/function (_Object) {
          _inherits(p, _Object);

          var _super2 = _createSuper(p);

          function p() {
            var _this2;

            _classCallCheck(this, p);

            _this2 = _super2.apply(this, arguments), _this2.graphics = null, _this2.renderer = null, _this2.view = null;
            return _this2;
          }

          return p;
        }(Object(_core_Identifiable_js__WEBPACK_IMPORTED_MODULE_9__["IdentifiableMixin"])(_t4));

        return Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_4__["property"])()], p.prototype, "graphics", void 0), Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_4__["property"])()], p.prototype, "renderer", void 0), Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_4__["property"])()], p.prototype, "updating", void 0), Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_4__["property"])()], p.prototype, "view", void 0), p = Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_subclass_js__WEBPACK_IMPORTED_MODULE_5__["subclass"])("esri.views.layers.GraphicsView")], p), p;
      };
      /***/

    },

    /***/
    "M08Z":
    /*!*****************************************************************************!*\
      !*** ./node_modules/@arcgis/core/views/2d/layers/graphics/graphicsUtils.js ***!
      \*****************************************************************************/

    /*! exports provided: getBounds, getCIMMarkerBounds, getMarkerSymbolBounds, getTextSymbolBounds, getTextSymbolSize, graphicGeometryToNumber, isMarkerSymbol, isPointOnPolyline, normalizeCentralMeridian */

    /***/
    function M08Z(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "getBounds", function () {
        return X;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "getCIMMarkerBounds", function () {
        return G;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "getMarkerSymbolBounds", function () {
        return F;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "getTextSymbolBounds", function () {
        return D;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "getTextSymbolSize", function () {
        return V;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "graphicGeometryToNumber", function () {
        return O;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "isMarkerSymbol", function () {
        return z;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "isPointOnPolyline", function () {
        return E;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "normalizeCentralMeridian", function () {
        return K;
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


      var _geometry_support_spatialReferenceUtils_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ../../../../geometry/support/spatialReferenceUtils.js */
      "f4Nx");
      /* harmony import */


      var _geometry_SpatialReference_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ../../../../geometry/SpatialReference.js */
      "WZb1");
      /* harmony import */


      var _geometry_support_intersects_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ../../../../geometry/support/intersects.js */
      "PNY3");
      /* harmony import */


      var _geometry_support_boundsUtils_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ../../../../geometry/support/boundsUtils.js */
      "KLE9");
      /* harmony import */


      var _geometry_support_jsonUtils_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ../../../../geometry/support/jsonUtils.js */
      "qatw");
      /* harmony import */


      var _core_screenUtils_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! ../../../../core/screenUtils.js */
      "qRWG");
      /* harmony import */


      var _geometry_support_aaBoundingRect_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! ../../../../geometry/support/aaBoundingRect.js */
      "kYAx");
      /* harmony import */


      var _geometry_support_normalizeUtils_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! ../../../../geometry/support/normalizeUtils.js */
      "qNUd");
      /* harmony import */


      var _chunks_vec2_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
      /*! ../../../../chunks/vec2.js */
      "M0lq");
      /* harmony import */


      var _chunks_mat2d_js__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
      /*! ../../../../chunks/mat2d.js */
      "opr1");
      /* harmony import */


      var _chunks_mat2df32_js__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
      /*! ../../../../chunks/mat2df32.js */
      "LGNZ");
      /* harmony import */


      var _chunks_vec2f32_js__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
      /*! ../../../../chunks/vec2f32.js */
      "c46T");
      /* harmony import */


      var _engine_webgl_alignmentUtils_js__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(
      /*! ../../engine/webgl/alignmentUtils.js */
      "Mt1D");
      /* harmony import */


      var _engine_webgl_mesh_templates_shapingUtils_js__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(
      /*! ../../engine/webgl/mesh/templates/shapingUtils.js */
      "G0q+");
      /* harmony import */


      var _engine_webgl_util_BidiText_js__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(
      /*! ../../engine/webgl/util/BidiText.js */
      "t7mB");
      /* harmony import */


      var _symbols_cim_CIMSymbolHelper_js__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(
      /*! ../../../../symbols/cim/CIMSymbolHelper.js */
      "eT81");
      /*
      All material copyright ESRI, All Rights Reserved, unless otherwise specified.
      See https://js.arcgis.com/4.18/esri/copyright.txt for details.
      */


      var P = Math.PI / 180,
          W = Object(_chunks_mat2df32_js__WEBPACK_IMPORTED_MODULE_12__["c"])(),
          U = Object(_chunks_vec2f32_js__WEBPACK_IMPORTED_MODULE_13__["c"])(),
          A = Object(_geometry_support_aaBoundingRect_js__WEBPACK_IMPORTED_MODULE_8__["create"])();

      function X(t, n, s, o, a, m, c) {
        if (!o || !s.symbol) return t[0] = t[1] = t[2] = t[3] = 0, n[0] = n[1] = n[2] = n[3] = 0, t;
        var l = o;

        if (!Object(_geometry_support_jsonUtils_js__WEBPACK_IMPORTED_MODULE_6__["isPoint"])(l)) {
          Object(_geometry_support_boundsUtils_js__WEBPACK_IMPORTED_MODULE_5__["getBoundsXY"])(t, l);
          var e = n[0];
          0 === e && (e = Q(s), n[0] = e);
          var r = a * e / 2;
          return t[0] -= r, t[1] -= r, t[2] += r, t[3] += r, t;
        }

        {
          var i = l.x,
              _r2 = l.y;
          "esriTS" === s.symbol.type && 0 === n[2] && 0 === n[3] && V(n, s.symbol, s.mosaicItem), function (t, n, s, i, r, o, a, m) {
            var c;

            switch (i.type) {
              case "esriSMS":
              case "esriPMS":
                c = F(n, s, i, o, a, 0);
                break;

              case "esriTS":
                c = D(n, s, i, r, o, 0);
                break;

              case "cim":
              case "CIMSymbolReference":
              case "expanded-cim":
                c = G(n, s, i, o, a, 0);
            }

            var l,
                f,
                u = 0;

            for (var _t5 = 0; _t5 < c.rings[0].length - 1; _t5++) {
              f = c.rings[0][_t5], l = (n - f[0]) * (n - f[0]) + (s - f[1]) * (s - f[1]), u = Math.max(u, l);
            }

            u = Math.sqrt(u);
            var h = Object(_geometry_support_normalizeUtils_js__WEBPACK_IMPORTED_MODULE_9__["normalizeMapX"])(n - u, m),
                p = Object(_geometry_support_normalizeUtils_js__WEBPACK_IMPORTED_MODULE_9__["normalizeMapX"])(n + u, m);

            if (h > p) {
              var _t6 = Object(_geometry_support_spatialReferenceUtils_js__WEBPACK_IMPORTED_MODULE_2__["getInfo"])(m);

              if (_t6) {
                var _t6$valid = _slicedToArray(_t6.valid, 2),
                    _e6 = _t6$valid[0],
                    _n = _t6$valid[1];

                h = _e6, p = _n;
              }
            }

            t[0] = h, t[1] = s - u, t[2] = p, t[3] = s + u;
          }(t, i, _r2, s.symbol, n, a, m, c);
        }
        return t;
      }

      function z(t) {
        return "simple-marker" === t || "picture-marker" === t || "text" === t;
      }

      function O(e) {
        switch (Object(_core_maybe_js__WEBPACK_IMPORTED_MODULE_1__["unwrap"])(e.geometry).type) {
          case "point":
          case "multipoint":
            return 0;

          case "polyline":
            return 1;

          case "polygon":
          case "extent":
            return 2;
        }

        return 0;
      }

      var H = Object(_chunks_vec2f32_js__WEBPACK_IMPORTED_MODULE_13__["c"])(),
          T = Object(_chunks_vec2f32_js__WEBPACK_IMPORTED_MODULE_13__["c"])(),
          q = Object(_chunks_vec2f32_js__WEBPACK_IMPORTED_MODULE_13__["c"])(),
          C = Object(_chunks_vec2f32_js__WEBPACK_IMPORTED_MODULE_13__["c"])(),
          J = Object(_chunks_vec2f32_js__WEBPACK_IMPORTED_MODULE_13__["c"])(),
          N = Object(_chunks_vec2f32_js__WEBPACK_IMPORTED_MODULE_13__["c"])(),
          B = Object(_chunks_vec2f32_js__WEBPACK_IMPORTED_MODULE_13__["c"])();

      function E(t, e, n, s) {
        Object(_chunks_vec2_js__WEBPACK_IMPORTED_MODULE_10__["s"])(q, e, n);
        var i = t.paths;
        var r,
            o,
            a,
            m,
            c,
            l,
            f,
            x,
            g,
            d = 1 / 0;

        for (var _t7 = 0; _t7 < i.length; _t7++) {
          var b = i[_t7];
          if (!(b.length < 2)) for (var _t8 = 1; _t8 < b.length; _t8++) {
            r = b[_t8 - 1][0], a = b[_t8 - 1][1], o = b[_t8][0], m = b[_t8][1], c = Math.min(r, o) - s, l = Math.min(a, m) - s, f = Math.max(r, o) + s, x = Math.max(a, m) + s, e < c || e > f || n < l || n > x || (Object(_chunks_vec2_js__WEBPACK_IMPORTED_MODULE_10__["s"])(H, r, a), Object(_chunks_vec2_js__WEBPACK_IMPORTED_MODULE_10__["s"])(T, o, m), Object(_chunks_vec2_js__WEBPACK_IMPORTED_MODULE_10__["d"])(C, T, H), Object(_chunks_vec2_js__WEBPACK_IMPORTED_MODULE_10__["d"])(J, H, q), Object(_chunks_vec2_js__WEBPACK_IMPORTED_MODULE_10__["a"])(N, C, Object(_chunks_vec2_js__WEBPACK_IMPORTED_MODULE_10__["g"])(C, J) / Object(_chunks_vec2_js__WEBPACK_IMPORTED_MODULE_10__["g"])(C, C)), Object(_chunks_vec2_js__WEBPACK_IMPORTED_MODULE_10__["d"])(B, J, N), g = Object(_chunks_vec2_js__WEBPACK_IMPORTED_MODULE_10__["g"])(B, B), d > g && (d = g));
          }
        }

        return Math.sqrt(d) <= s;
      }

      function F(t, e, n, s, i, r) {
        var o, a;
        var m = Object(_core_screenUtils_js__WEBPACK_IMPORTED_MODULE_7__["pt2px"])(n.xoffset),
            c = Object(_core_screenUtils_js__WEBPACK_IMPORTED_MODULE_7__["pt2px"])(n.yoffset),
            f = P * n.angle,
            x = P * r;

        switch (n.type) {
          case "esriSMS":
            o = a = Object(_core_screenUtils_js__WEBPACK_IMPORTED_MODULE_7__["pt2px"])(n.size);
            break;

          case "esriPMS":
            o = Object(_core_screenUtils_js__WEBPACK_IMPORTED_MODULE_7__["pt2px"])(n.width), a = Object(_core_screenUtils_js__WEBPACK_IMPORTED_MODULE_7__["pt2px"])(n.height);
        }

        i < .04 && (s = .04 * s / i);
        var h = Object(_chunks_mat2d_js__WEBPACK_IMPORTED_MODULE_11__["i"])(W);
        Object(_chunks_mat2d_js__WEBPACK_IMPORTED_MODULE_11__["t"])(h, h, Object(_chunks_vec2_js__WEBPACK_IMPORTED_MODULE_10__["s"])(U, t, e)), Object(_chunks_mat2d_js__WEBPACK_IMPORTED_MODULE_11__["r"])(h, h, x - f), Object(_chunks_mat2d_js__WEBPACK_IMPORTED_MODULE_11__["s"])(h, h, Object(_chunks_vec2_js__WEBPACK_IMPORTED_MODULE_10__["s"])(U, s, -s)), Object(_chunks_mat2d_js__WEBPACK_IMPORTED_MODULE_11__["t"])(h, h, Object(_chunks_vec2_js__WEBPACK_IMPORTED_MODULE_10__["s"])(U, m, -c));
        var p = [0, 0];
        Object(_chunks_vec2_js__WEBPACK_IMPORTED_MODULE_10__["t"])(p, Object(_chunks_vec2_js__WEBPACK_IMPORTED_MODULE_10__["s"])(U, -.5 * o, -.5 * a), h);
        var y = [0, 0];
        Object(_chunks_vec2_js__WEBPACK_IMPORTED_MODULE_10__["t"])(y, Object(_chunks_vec2_js__WEBPACK_IMPORTED_MODULE_10__["s"])(U, -.5 * o, .5 * a), h);
        var j = [0, 0];
        Object(_chunks_vec2_js__WEBPACK_IMPORTED_MODULE_10__["t"])(j, Object(_chunks_vec2_js__WEBPACK_IMPORTED_MODULE_10__["s"])(U, .5 * o, -.5 * a), h);
        var I = [0, 0];
        return Object(_chunks_vec2_js__WEBPACK_IMPORTED_MODULE_10__["t"])(I, Object(_chunks_vec2_js__WEBPACK_IMPORTED_MODULE_10__["s"])(U, .5 * o, .5 * a), h), {
          rings: [[p, j, I, y, p]]
        };
      }

      function G(t, e, n, s, i, r) {
        var o = _symbols_cim_CIMSymbolHelper_js__WEBPACK_IMPORTED_MODULE_17__["CIMSymbolHelper"].getEnvelope(n.data);

        if (!o) return null;
        i < .04 && (s = .04 * s / i);
        var a = Object(_core_screenUtils_js__WEBPACK_IMPORTED_MODULE_7__["pt2px"])(o.width),
            m = Object(_core_screenUtils_js__WEBPACK_IMPORTED_MODULE_7__["pt2px"])(o.height),
            c = Object(_core_screenUtils_js__WEBPACK_IMPORTED_MODULE_7__["pt2px"])(o.x),
            f = Object(_core_screenUtils_js__WEBPACK_IMPORTED_MODULE_7__["pt2px"])(o.y),
            x = 0 * P,
            h = P * r,
            p = Object(_chunks_mat2d_js__WEBPACK_IMPORTED_MODULE_11__["i"])(W);
        Object(_chunks_mat2d_js__WEBPACK_IMPORTED_MODULE_11__["t"])(p, p, Object(_chunks_vec2_js__WEBPACK_IMPORTED_MODULE_10__["s"])(U, t, e)), Object(_chunks_mat2d_js__WEBPACK_IMPORTED_MODULE_11__["r"])(p, p, h - x), Object(_chunks_mat2d_js__WEBPACK_IMPORTED_MODULE_11__["s"])(p, p, Object(_chunks_vec2_js__WEBPACK_IMPORTED_MODULE_10__["s"])(U, s, s));
        var y = [0, 0];
        Object(_chunks_vec2_js__WEBPACK_IMPORTED_MODULE_10__["t"])(y, Object(_chunks_vec2_js__WEBPACK_IMPORTED_MODULE_10__["s"])(U, c, f + m), p);
        var j = [0, 0];
        Object(_chunks_vec2_js__WEBPACK_IMPORTED_MODULE_10__["t"])(j, Object(_chunks_vec2_js__WEBPACK_IMPORTED_MODULE_10__["s"])(U, c, f), p);
        var I = [0, 0];
        Object(_chunks_vec2_js__WEBPACK_IMPORTED_MODULE_10__["t"])(I, Object(_chunks_vec2_js__WEBPACK_IMPORTED_MODULE_10__["s"])(U, c + a, f + m), p);
        var w = [0, 0];
        return Object(_chunks_vec2_js__WEBPACK_IMPORTED_MODULE_10__["t"])(w, Object(_chunks_vec2_js__WEBPACK_IMPORTED_MODULE_10__["s"])(U, c + a, f), p), {
          rings: [[y, I, w, j, y]]
        };
      }

      function D(t, e, n, s, i, r) {
        var o = Object(_core_screenUtils_js__WEBPACK_IMPORTED_MODULE_7__["pt2px"])(n.xoffset),
            a = Object(_core_screenUtils_js__WEBPACK_IMPORTED_MODULE_7__["pt2px"])(n.yoffset),
            m = P * n.angle,
            c = P * r,
            f = Object(_chunks_mat2d_js__WEBPACK_IMPORTED_MODULE_11__["i"])(W);
        Object(_chunks_mat2d_js__WEBPACK_IMPORTED_MODULE_11__["t"])(f, f, Object(_chunks_vec2_js__WEBPACK_IMPORTED_MODULE_10__["s"])(U, t, e)), Object(_chunks_mat2d_js__WEBPACK_IMPORTED_MODULE_11__["r"])(f, f, c), Object(_chunks_mat2d_js__WEBPACK_IMPORTED_MODULE_11__["s"])(f, f, Object(_chunks_vec2_js__WEBPACK_IMPORTED_MODULE_10__["s"])(U, i, -i));
        var x = s[0] + s[2] / 2,
            h = s[1] + s[3] / 2;
        Object(_chunks_mat2d_js__WEBPACK_IMPORTED_MODULE_11__["t"])(f, f, Object(_chunks_vec2_js__WEBPACK_IMPORTED_MODULE_10__["s"])(U, o, -a)), Object(_chunks_mat2d_js__WEBPACK_IMPORTED_MODULE_11__["t"])(f, f, Object(_chunks_vec2_js__WEBPACK_IMPORTED_MODULE_10__["s"])(U, x, h)), Object(_chunks_mat2d_js__WEBPACK_IMPORTED_MODULE_11__["r"])(f, f, m), Object(_chunks_mat2d_js__WEBPACK_IMPORTED_MODULE_11__["t"])(f, f, Object(_chunks_vec2_js__WEBPACK_IMPORTED_MODULE_10__["s"])(U, -x, -h));
        var p = [0, 0];
        Object(_chunks_vec2_js__WEBPACK_IMPORTED_MODULE_10__["t"])(p, Object(_chunks_vec2_js__WEBPACK_IMPORTED_MODULE_10__["s"])(U, s[0], s[1]), f);
        var y = [0, 0];
        Object(_chunks_vec2_js__WEBPACK_IMPORTED_MODULE_10__["t"])(y, Object(_chunks_vec2_js__WEBPACK_IMPORTED_MODULE_10__["s"])(U, s[0], s[1] + s[3]), f);
        var j = [0, 0];
        Object(_chunks_vec2_js__WEBPACK_IMPORTED_MODULE_10__["t"])(j, Object(_chunks_vec2_js__WEBPACK_IMPORTED_MODULE_10__["s"])(U, s[0] + s[2], s[1]), f);
        var I = [0, 0];
        return Object(_chunks_vec2_js__WEBPACK_IMPORTED_MODULE_10__["t"])(I, Object(_chunks_vec2_js__WEBPACK_IMPORTED_MODULE_10__["s"])(U, s[0] + s[2], s[1] + s[3]), f), {
          rings: [[p, j, I, y, p]]
        };
      }

      function K(t) {
        var n,
            l,
            f,
            x,
            u,
            h,
            p,
            y,
            g,
            d = null;
        if (!t) return null;
        if ("mesh" === t.type) return t.toJSON();
        if (n = t.spatialReference, l = Object(_geometry_support_spatialReferenceUtils_js__WEBPACK_IMPORTED_MODULE_2__["getInfo"])(n), !l) return t.toJSON();
        f = n.isWebMercator, h = f ? 102100 : 4326, x = Y[h].maxX, u = Y[h].minX, p = Y[h].plus180Line, y = Y[h].minus180Line;
        var b = t.toJSON();
        if (Object(_geometry_support_jsonUtils_js__WEBPACK_IMPORTED_MODULE_6__["isPoint"])(b)) g = et(b, x, u);else if (Object(_geometry_support_jsonUtils_js__WEBPACK_IMPORTED_MODULE_6__["isMultipoint"])(b)) b.points = b.points.map(function (t) {
          return et(t, x, u);
        }), g = b;else if (Object(_geometry_support_jsonUtils_js__WEBPACK_IMPORTED_MODULE_6__["isExtent"])(b)) g = function (t, e) {
          if (!e) return t;

          var n = function (t, e) {
            var n = [],
                s = t.ymin,
                i = t.ymax,
                r = t.xmax - t.xmin,
                o = t.xmin,
                a = t.xmax;
            var m;

            var _e$valid = _slicedToArray(e.valid, 2),
                c = _e$valid[0],
                l = _e$valid[1];

            m = $(t.xmin, e);
            var f = m.x,
                x = m.frameId;
            m = $(t.xmax, e);
            var u = m.x,
                h = m.frameId,
                p = f === u && r > 0;

            if (r > 2 * l) {
              var _t9 = {
                xmin: o < a ? f : u,
                ymin: s,
                xmax: l,
                ymax: i
              },
                  _e7 = {
                xmin: c,
                ymin: s,
                xmax: o < a ? u : f,
                ymax: i
              },
                  _r3 = {
                xmin: 0,
                ymin: s,
                xmax: l,
                ymax: i
              },
                  _m = {
                xmin: c,
                ymin: s,
                xmax: 0,
                ymax: i
              },
                  _p = [],
                  _y = [];
              _(_t9, _r3) && _p.push(x), _(_t9, _m) && _y.push(x), _(_e7, _r3) && _p.push(h), _(_e7, _m) && _y.push(h);

              for (var _t10 = x + 1; _t10 < h; _t10++) {
                _p.push(_t10), _y.push(_t10);
              }

              n.push({
                extent: _t9,
                frameIds: [x]
              }, {
                extent: _e7,
                frameIds: [h]
              }, {
                extent: _r3,
                frameIds: _p
              }, {
                extent: _m,
                frameIds: _y
              });
            } else f > u || p ? n.push({
              extent: {
                xmin: f,
                ymin: s,
                xmax: l,
                ymax: i
              },
              frameIds: [x]
            }, {
              extent: {
                xmin: c,
                ymin: s,
                xmax: u,
                ymax: i
              },
              frameIds: [h]
            }) : n.push({
              extent: {
                xmin: f,
                ymin: s,
                xmax: u,
                ymax: i
              },
              frameIds: [x]
            });

            return n;
          }(t, e).map(function (t) {
            return t.extent;
          });

          if (n.length < 2) return n[0] || t;
          if (n.length > 2) return t.xmin = e.valid[0], t.xmax = e.valid[1], t;
          return {
            rings: n.map(function (t) {
              return [[t.xmin, t.ymin], [t.xmin, t.ymax], [t.xmax, t.ymax], [t.xmax, t.ymin], [t.xmin, t.ymin]];
            })
          };
        }(b, l);else if (Object(_geometry_support_jsonUtils_js__WEBPACK_IMPORTED_MODULE_6__["isPolygon"])(b) || Object(_geometry_support_jsonUtils_js__WEBPACK_IMPORTED_MODULE_6__["isPolyline"])(b)) {
          var _t11 = A;
          Object(_geometry_support_boundsUtils_js__WEBPACK_IMPORTED_MODULE_5__["getBoundsXY"])(_t11, b);

          var e = {
            xmin: _t11[0],
            ymin: _t11[1],
            xmax: _t11[2],
            ymax: _t11[3]
          },
              _n2 = Z(e.xmin, u) * (2 * x),
              r = 0 === _n2 ? b : function (t, e) {
            var n = function (t) {
              if (Object(_geometry_support_jsonUtils_js__WEBPACK_IMPORTED_MODULE_6__["isPolygon"])(t)) return t.rings;
              return t.paths;
            }(t);

            var _iterator4 = _createForOfIteratorHelper(n),
                _step4;

            try {
              for (_iterator4.s(); !(_step4 = _iterator4.n()).done;) {
                var _t12 = _step4.value;

                var _iterator5 = _createForOfIteratorHelper(_t12),
                    _step5;

                try {
                  for (_iterator5.s(); !(_step5 = _iterator5.n()).done;) {
                    var _n3 = _step5.value;
                    _n3[0] += e;
                  }
                } catch (err) {
                  _iterator5.e(err);
                } finally {
                  _iterator5.f();
                }
              }
            } catch (err) {
              _iterator4.e(err);
            } finally {
              _iterator4.f();
            }

            return t;
          }(b, _n2);

          e.xmin += _n2, e.xmax += _n2, Object(_geometry_support_intersects_js__WEBPACK_IMPORTED_MODULE_4__["extentIntersectsPolyline"])(e, p) && e.xmax !== x || Object(_geometry_support_intersects_js__WEBPACK_IMPORTED_MODULE_4__["extentIntersectsPolyline"])(e, y) && e.xmin !== u ? d = r : g = r;
        } else g = t.clone();

        if (null !== d) {
          return new nt().cut(d, x);
        }

        return g;
      }

      function Q(t) {
        switch (t.symbol.type) {
          case "esriSFS":
          case "esriPFS":
            {
              var e = t.symbol.outline;
              return e ? e.width : 0;
            }

          case "esriSLS":
            return Object(_core_screenUtils_js__WEBPACK_IMPORTED_MODULE_7__["pt2px"])(t.symbol.width);

          case "esriSMS":
            return Object(_core_screenUtils_js__WEBPACK_IMPORTED_MODULE_7__["pt2px"])(t.symbol.size);

          case "esriPMS":
            return Object(_core_screenUtils_js__WEBPACK_IMPORTED_MODULE_7__["pt2px"])(Math.max(t.symbol.width, t.symbol.height));

          case "esriTS":
            {
              var _e8 = [0, 0, 0, 0];
              V(_e8, t.symbol, t.mosaicItem);
              var n = Math.max(Math.abs(_e8[0]), Math.abs(_e8[1]));
              return Math.max(_e8[2], _e8[3]) + n;
            }

          case "expanded-cim":
            {
              var _e9 = _symbols_cim_CIMSymbolHelper_js__WEBPACK_IMPORTED_MODULE_17__["CIMSymbolHelper"].getEnvelope(t.symbol.data);

              return Object(_core_screenUtils_js__WEBPACK_IMPORTED_MODULE_7__["pt2px"])(Math.sqrt(_e9.width * _e9.width + _e9.height * _e9.height));
            }

          case "composite-symbol":
            {
              if (!t.symbol.layers.length) return 0;

              var _e10 = t.symbol.layers.length - 1;

              return Q({
                symbol: t.symbol.layers[_e10],
                mosaicItem: null
              });
            }

          case "label":
          default:
            return 0;
        }
      }

      function V(t, e, n) {
        if (!n || 0 === n.glyphMosaicItems.length) return t;
        var s = Object(_engine_webgl_util_BidiText_js__WEBPACK_IMPORTED_MODULE_16__["bidiText"])(e.text)[1],
            i = n.glyphMosaicItems,
            r = Object(_engine_webgl_mesh_templates_shapingUtils_js__WEBPACK_IMPORTED_MODULE_15__["shapeGlyphs"])(i, s, {
          scale: Object(_core_screenUtils_js__WEBPACK_IMPORTED_MODULE_7__["pt2px"])(e.font.size) / 24,
          angle: e.angle,
          xOffset: e.xoffset,
          yOffset: e.yoffset,
          hAlign: Object(_engine_webgl_alignmentUtils_js__WEBPACK_IMPORTED_MODULE_14__["getXAnchorDirection"])(e.horizontalAlignment || "center"),
          vAlign: Object(_engine_webgl_alignmentUtils_js__WEBPACK_IMPORTED_MODULE_14__["getYAnchorDirection"])(e.verticalAlignment || "baseline"),
          maxLineWidth: Math.max(32, Math.min(e.lineWidth || 512, 512)),
          lineHeight: 30 * Math.max(.25, Math.min(e.lineHeight || 1, 4)),
          decoration: e.font.decoration || "none",
          isCIM: !1
        }).bounds;
        return t[0] = Object(_core_screenUtils_js__WEBPACK_IMPORTED_MODULE_7__["pt2px"])(r.x - r.halfWidth), t[1] = Object(_core_screenUtils_js__WEBPACK_IMPORTED_MODULE_7__["pt2px"])(r.y - r.halfHeight), t[2] = Object(_core_screenUtils_js__WEBPACK_IMPORTED_MODULE_7__["pt2px"])(r.width), t[3] = Object(_core_screenUtils_js__WEBPACK_IMPORTED_MODULE_7__["pt2px"])(r.height), t;
      }

      var Y = {
        102100: {
          maxX: 20037508.342788905,
          minX: -20037508.342788905,
          plus180Line: {
            paths: [[[20037508.342788905, -20037508.342788905], [20037508.342788905, 20037508.342788905]]],
            spatialReference: _geometry_SpatialReference_js__WEBPACK_IMPORTED_MODULE_3__["default"].WebMercator
          },
          minus180Line: {
            paths: [[[-20037508.342788905, -20037508.342788905], [-20037508.342788905, 20037508.342788905]]],
            spatialReference: _geometry_SpatialReference_js__WEBPACK_IMPORTED_MODULE_3__["default"].WebMercator
          }
        },
        4326: {
          maxX: 180,
          minX: -180,
          plus180Line: {
            paths: [[[180, -180], [180, 180]]],
            spatialReference: _geometry_SpatialReference_js__WEBPACK_IMPORTED_MODULE_3__["default"].WGS84
          },
          minus180Line: {
            paths: [[[-180, -180], [-180, 180]]],
            spatialReference: _geometry_SpatialReference_js__WEBPACK_IMPORTED_MODULE_3__["default"].WGS84
          }
        }
      };

      function Z(t, e) {
        return Math.ceil((t - e) / (2 * e));
      }

      function $(t, e) {
        var _e$valid2 = _slicedToArray(e.valid, 2),
            n = _e$valid2[0],
            s = _e$valid2[1],
            i = 2 * s;

        var r,
            o = 0;
        return t > s ? (r = Math.ceil(Math.abs(t - s) / i), t -= r * i, o = r) : t < n && (r = Math.ceil(Math.abs(t - n) / i), t += r * i, o = -r), {
          x: t,
          frameId: o
        };
      }

      function _(t, e) {
        var n = e.xmin,
            s = e.ymin,
            i = e.xmax,
            r = e.ymax;
        return tt(t, n, s) && tt(t, n, r) && tt(t, i, r) && tt(t, i, s);
      }

      function tt(t, e, n) {
        return e >= t.xmin && e <= t.xmax && n >= t.ymin && n <= t.ymax;
      }

      function et(t, e, n) {
        if (Array.isArray(t)) {
          var s = t[0];

          if (s > e) {
            var _n4 = Z(s, e);

            t[0] = s + _n4 * (-2 * e);
          } else if (s < n) {
            var _e11 = Z(s, n);

            t[0] = s + _e11 * (-2 * n);
          }
        } else {
          var _s2 = t.x;

          if (_s2 > e) {
            var _n5 = Z(_s2, e);

            t.x += _n5 * (-2 * e);
          } else if (_s2 < n) {
            var _e12 = Z(_s2, n);

            t.x += _e12 * (-2 * n);
          }
        }

        return t;
      }

      var nt = /*#__PURE__*/function () {
        function nt() {
          _classCallCheck(this, nt);
        }

        _createClass(nt, [{
          key: "cut",
          value: function cut(t, e) {
            var n;
            if (t.rings) this.closed = !0, n = t.rings, this.minPts = 4;else {
              if (!t.paths) return null;
              this.closed = !1, n = t.paths, this.minPts = 2;
            }
            var s = n.length,
                i = -2 * e;

            for (var _t13 = 0; _t13 < s; _t13++) {
              var _e13 = n[_t13];

              if (_e13 && _e13.length >= this.minPts) {
                var _t14 = [];

                var _iterator6 = _createForOfIteratorHelper(_e13),
                    _step6;

                try {
                  for (_iterator6.s(); !(_step6 = _iterator6.n()).done;) {
                    var _n6 = _step6.value;

                    _t14.push([_n6[0] + i, _n6[1]]);
                  }
                } catch (err) {
                  _iterator6.e(err);
                } finally {
                  _iterator6.f();
                }

                n.push(_t14);
              }
            }

            return this.closed ? t.rings = n : t.paths = n, t;
          }
        }]);

        return nt;
      }();
      /***/

    },

    /***/
    "Vh9r":
    /*!******************************************************************************!*\
      !*** ./node_modules/@arcgis/core/views/2d/layers/graphics/GraphicsView2D.js ***!
      \******************************************************************************/

    /*! exports provided: default */

    /***/
    function Vh9r(module, __webpack_exports__, __webpack_require__) {
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


      var _core_maybe_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ../../../../core/maybe.js */
      "srIe");
      /* harmony import */


      var _core_Logger_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ../../../../core/Logger.js */
      "6S2I");
      /* harmony import */


      var _core_accessorSupport_ensureType_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ../../../../core/accessorSupport/ensureType.js */
      "zqDF");
      /* harmony import */


      var _core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ../../../../core/accessorSupport/decorators/property.js */
      "WbKI");
      /* harmony import */


      var _core_accessorSupport_decorators_subclass_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ../../../../core/accessorSupport/decorators/subclass.js */
      "04ZG");
      /* harmony import */


      var _core_urlUtils_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! ../../../../core/urlUtils.js */
      "4EHJ");
      /* harmony import */


      var _core_uuid_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! ../../../../core/uuid.js */
      "ju1D");
      /* harmony import */


      var _portal_support_resourceExtension_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! ../../../../portal/support/resourceExtension.js */
      "9AIY");
      /* harmony import */


      var _core_promiseUtils_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
      /*! ../../../../core/promiseUtils.js */
      "9MzC");
      /* harmony import */


      var _core_Accessor_js__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
      /*! ../../../../core/Accessor.js */
      "/CmD");
      /* harmony import */


      var _geometry_support_spatialReferenceUtils_js__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
      /*! ../../../../geometry/support/spatialReferenceUtils.js */
      "f4Nx");
      /* harmony import */


      var _geometry_SpatialReference_js__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
      /*! ../../../../geometry/SpatialReference.js */
      "WZb1");
      /* harmony import */


      var _geometry_support_coordsUtils_js__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(
      /*! ../../../../geometry/support/coordsUtils.js */
      "Mu3I");
      /* harmony import */


      var _geometry_Polygon_js__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(
      /*! ../../../../geometry/Polygon.js */
      "Ehki");
      /* harmony import */


      var _geometry_support_jsonUtils_js__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(
      /*! ../../../../geometry/support/jsonUtils.js */
      "qatw");
      /* harmony import */


      var _core_screenUtils_js__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(
      /*! ../../../../core/screenUtils.js */
      "qRWG");
      /* harmony import */


      var _geometry_support_aaBoundingRect_js__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(
      /*! ../../../../geometry/support/aaBoundingRect.js */
      "kYAx");
      /* harmony import */


      var _symbols_support_defaults_js__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(
      /*! ../../../../symbols/support/defaults.js */
      "psH3");
      /* harmony import */


      var _core_HandleOwner_js__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(
      /*! ../../../../core/HandleOwner.js */
      "kJYu");
      /* harmony import */


      var _layers_graphics_data_projectionSupport_js__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(
      /*! ../../../../layers/graphics/data/projectionSupport.js */
      "HsO1");
      /* harmony import */


      var _engine_webgl_definitions_js__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(
      /*! ../../engine/webgl/definitions.js */
      "jIHu");
      /* harmony import */


      var _webgl_capabilities_js__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(
      /*! ../../../webgl/capabilities.js */
      "sq/B");
      /* harmony import */


      var _engine_webgl_util_BidiText_js__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(
      /*! ../../engine/webgl/util/BidiText.js */
      "t7mB");
      /* harmony import */


      var _symbols_cim_cimSymbolUtils_js__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(
      /*! ../../../../symbols/cim/cimSymbolUtils.js */
      "ZxoT");
      /* harmony import */


      var _engine_webgl_TileData_js__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(
      /*! ../../engine/webgl/TileData.js */
      "fZs+");
      /* harmony import */


      var _engine_webgl_WGLTile_js__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(
      /*! ../../engine/webgl/WGLTile.js */
      "KFVX");
      /* harmony import */


      var _features_schemaUtils_js__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(
      /*! ../features/schemaUtils.js */
      "owVx");
      /* harmony import */


      var _engine_webgl_mesh_factories_matcherUtils_js__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(
      /*! ../../engine/webgl/mesh/factories/matcherUtils.js */
      "Bcjy");
      /* harmony import */


      var _engine_webgl_mesh_templates_WGLTemplateStore_js__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(
      /*! ../../engine/webgl/mesh/templates/WGLTemplateStore.js */
      "Dw8i");
      /* harmony import */


      var _engine_webgl_mesh_factories_WGLMeshFactory_js__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(
      /*! ../../engine/webgl/mesh/factories/WGLMeshFactory.js */
      "J3nV");
      /* harmony import */


      var _features_support_AttributeStore_js__WEBPACK_IMPORTED_MODULE_32__ = __webpack_require__(
      /*! ../features/support/AttributeStore.js */
      "2AbE");
      /* harmony import */


      var _features_support_ComputedAttributeStorage_js__WEBPACK_IMPORTED_MODULE_33__ = __webpack_require__(
      /*! ../features/support/ComputedAttributeStorage.js */
      "Swtj");
      /* harmony import */


      var _features_support_GraphicsReader_js__WEBPACK_IMPORTED_MODULE_34__ = __webpack_require__(
      /*! ../features/support/GraphicsReader.js */
      "0u2h");
      /* harmony import */


      var _features_support_TileStore_js__WEBPACK_IMPORTED_MODULE_35__ = __webpack_require__(
      /*! ../features/support/TileStore.js */
      "w5u1");
      /* harmony import */


      var _GraphicContainer_js__WEBPACK_IMPORTED_MODULE_36__ = __webpack_require__(
      /*! ./GraphicContainer.js */
      "q03O");
      /* harmony import */


      var _graphicsUtils_js__WEBPACK_IMPORTED_MODULE_37__ = __webpack_require__(
      /*! ./graphicsUtils.js */
      "M08Z");
      /* harmony import */


      var _GraphicStore_js__WEBPACK_IMPORTED_MODULE_38__ = __webpack_require__(
      /*! ./GraphicStore.js */
      "7+sN");
      /* harmony import */


      var _layers_GraphicsView_js__WEBPACK_IMPORTED_MODULE_39__ = __webpack_require__(
      /*! ../../../layers/GraphicsView.js */
      "BA+2");
      /*
      All material copyright ESRI, All Rights Reserved, unless otherwise specified.
      See https://js.arcgis.com/4.18/esri/copyright.txt for details.
      */


      function Z(t, e, i) {
        if (i.has(t)) return i.get(t);
        var s = {
          tile: e,
          addedOrModified: [],
          removed: []
        };
        return i.set(t, s), s;
      }

      var K = /*#__PURE__*/function (_Object2) {
        _inherits(K, _Object2);

        var _super3 = _createSuper(K);

        function K(t) {
          var _this3;

          _classCallCheck(this, K);

          _this3 = _super3.call(this, t), _this3._storage = new _features_support_ComputedAttributeStorage_js__WEBPACK_IMPORTED_MODULE_33__["ComputedAttributeStorage"](), _this3._displayIds = new Map(), _this3._tiles = new Map(), _this3._graphicStoreUpdate = !1, _this3._graphicsSet = new Set(), _this3._matcher = Object(_core_promiseUtils_js__WEBPACK_IMPORTED_MODULE_10__["resolve"])(null), _this3._tileUpdateSet = new Set(), _this3._tilesToUpdate = new Map(), _this3._graphicIdToAbortController = new Map(), _this3._attached = !1, _this3._highlightIds = new Map(), _this3._updatingGraphicsTimer = null, _this3._processing = !1, _this3._needsProcessing = !1, _this3._pendingUpdate = {
            added: new Set(),
            updated: new Set(),
            removed: new Set()
          }, _this3.lastUpdateId = -1, _this3.updateRequested = !1, _this3.graphicUpdateHandler = _this3.graphicUpdateHandler.bind(_assertThisInitialized(_this3)), _this3._processAnalyzedGraphics = _this3._processAnalyzedGraphics.bind(_assertThisInitialized(_this3)), _this3._graphicsChangeHandler = _this3._graphicsChangeHandler.bind(_assertThisInitialized(_this3));
          return _this3;
        }

        _createClass(K, [{
          key: "_createMatcher",
          value: function _createMatcher(t, e) {
            if (t) {
              var i = Object(_features_schemaUtils_js__WEBPACK_IMPORTED_MODULE_28__["createMatcherSchema"])({
                indexCount: 0,
                fields: {}
              }, "feature", t);
              this._matcher = Object(_engine_webgl_mesh_factories_matcherUtils_js__WEBPACK_IMPORTED_MODULE_29__["createMatcher"])(i, e, null);
            }
          }
        }, {
          key: "_createDisplayId",
          value: function _createDisplayId(t) {
            return this._displayIds.has(t) || this._displayIds.set(t, this._storage.createDisplayId()), this._displayIds.get(t);
          }
        }, {
          key: "initialize",
          value: function initialize() {
            var _this4 = this;

            this._tileStore = new _features_support_TileStore_js__WEBPACK_IMPORTED_MODULE_35__["default"](this.view.featuresTilingScheme), this.container = new _GraphicContainer_js__WEBPACK_IMPORTED_MODULE_36__["default"](this.view.featuresTilingScheme), this._attributeStore = new _features_support_AttributeStore_js__WEBPACK_IMPORTED_MODULE_32__["default"]({
              type: "local",
              initialize: function initialize(t) {
                return Object(_core_promiseUtils_js__WEBPACK_IMPORTED_MODULE_10__["resolve"])(_this4.container.attributeView.initialize(t));
              },
              update: function update(t) {
                return _this4.container.attributeView.requestUpdate(t);
              },
              render: function render() {
                return _this4.container.requestRender();
              }
            }, Object(_webgl_capabilities_js__WEBPACK_IMPORTED_MODULE_23__["default"])());
            this._graphicStore = new _GraphicStore_js__WEBPACK_IMPORTED_MODULE_38__["default"](this.view.featuresTilingScheme, this.view.state.scale, this.uid, this.graphics, function (t) {
              _this4._createDisplayId(t.uid), _this4._setFilterState(t.uid, t.visible);
            }, function (t) {
              var e = _this4._displayIds.get(t.uid);

              _this4._displayIds["delete"](t.uid), _this4._storage.releaseDisplayId(e);
            });
            var t = new _engine_webgl_mesh_templates_WGLTemplateStore_js__WEBPACK_IMPORTED_MODULE_30__["WGLTemplateStore"](this.container.getMaterialItems.bind(this.container), !0);
            this._createMatcher(this.renderer, t), this._meshFactory = new _engine_webgl_mesh_factories_WGLMeshFactory_js__WEBPACK_IMPORTED_MODULE_31__["WGLMeshFactory"](null, this.uid, t), this._templateStore = t, this.watch("renderer", function (e) {
              _this4._createMatcher(e, t);

              var _iterator7 = _createForOfIteratorHelper(_this4.graphics),
                  _step7;

              try {
                for (_iterator7.s(); !(_step7 = _iterator7.n()).done;) {
                  var _t15 = _step7.value;

                  _this4._pendingUpdate.updated.add(_t15);
                }
              } catch (err) {
                _iterator7.e(err);
              } finally {
                _iterator7.f();
              }

              _this4.requestUpdate();
            }), this._tileStore.on("update", this._onTileUpdate.bind(this)), this.container.on("attach", function () {
              _this4.graphics.items.length > 0 && _this4._graphicsChangeHandler({
                target: _this4.graphics,
                added: _this4.graphics.items,
                removed: [],
                moved: []
              }), _this4.handles.add(_this4.graphics.on("change", _this4._graphicsChangeHandler), "graphics"), _this4._attached = !0, _this4.notifyChange("updating");
            });
          }
        }, {
          key: "destroy",
          value: function destroy() {
            this._updatingGraphicsTimer && (clearTimeout(this._updatingGraphicsTimer), this._updatingGraphicsTimer = null, this.notifyChange("updating")), this.container.destroy(), this._set("graphics", null), this._graphicStore.clear(), this._tileStore.destroy(), this._attributeStore = null;
          }
        }, {
          key: "updating",
          get: function get() {
            return !this._attached || null !== this._updatingGraphicsTimer || this._tileUpdateSet.size > 0 || this._tilesToUpdate.size > 0;
          }
        }, {
          key: "hitTest",
          value: function hitTest(t, e) {
            if (!this.view || !this.view.position) return Object(_core_promiseUtils_js__WEBPACK_IMPORTED_MODULE_10__["resolve"])();
            var i = this.view.toMap(Object(_core_screenUtils_js__WEBPACK_IMPORTED_MODULE_17__["createScreenPoint"])(t, e));
            return this.searchFeatures(i).then(function (t) {
              return t && t.length ? t[0] : null;
            });
          }
        }, {
          key: "searchFeatures",
          value: function () {
            var _searchFeatures = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(t) {
              var e,
                  _args = arguments;
              return regeneratorRuntime.wrap(function _callee$(_context) {
                while (1) {
                  switch (_context.prev = _context.next) {
                    case 0:
                      e = _args.length > 1 && _args[1] !== undefined ? _args[1] : 2;
                      return _context.abrupt("return", this._graphicStore.hitTest(t.x, t.y, e, this.view.state.resolution, this.view.state.rotation));

                    case 2:
                    case "end":
                      return _context.stop();
                  }
                }
              }, _callee, this);
            }));

            function searchFeatures(_x) {
              return _searchFeatures.apply(this, arguments);
            }

            return searchFeatures;
          }()
        }, {
          key: "update",
          value: function update(t) {
            var e = t.state,
                i = this.view.featuresTilingScheme.getClosestInfoForScale(e.scale).level;

            if (this._graphicStore.updateLevel(i), this._tileStore.setViewState(e), this._graphicStoreUpdate = !0, this.updateRequested = !1, this._pendingUpdate.updated.size > 0) {
              if (!this._processing) return void this._updateGraphics();
              this._needsProcessing = !0;
            }
          }
        }, {
          key: "viewChange",
          value: function viewChange() {
            this.requestUpdate();
          }
        }, {
          key: "requestUpdate",
          value: function requestUpdate() {
            this.updateRequested || (this.updateRequested = !0, this.requestUpdateCallback());
          }
        }, {
          key: "processUpdate",
          value: function processUpdate(t) {
            this.updateRequested && (this.updateRequested = !1, this.update(t));
          }
        }, {
          key: "graphicUpdateHandler",
          value: function graphicUpdateHandler(t) {
            var e = t.graphic,
                i = t.property,
                s = t.newValue,
                r = e;

            switch (i) {
              case "attributes":
                break;

              case "geometry":
              case "symbol":
                this._pendingUpdate.updated.add(r), this.requestUpdate();
                break;

              case "visible":
                this._setFilterState(r.uid, s), this._attributeStore.sendUpdates();
            }
          }
        }, {
          key: "addHighlight",
          value: function addHighlight(t) {
            var _iterator8 = _createForOfIteratorHelper(t),
                _step8;

            try {
              for (_iterator8.s(); !(_step8 = _iterator8.n()).done;) {
                var e = _step8.value;

                if (this._highlightIds.has(e)) {
                  var _t16 = this._highlightIds.get(e);

                  this._highlightIds.set(e, _t16 + 1);
                } else this._highlightIds.set(e, 1);
              }
            } catch (err) {
              _iterator8.e(err);
            } finally {
              _iterator8.f();
            }

            this._updateHighlight();
          }
        }, {
          key: "removeHighlight",
          value: function removeHighlight(t) {
            var _iterator9 = _createForOfIteratorHelper(t),
                _step9;

            try {
              for (_iterator9.s(); !(_step9 = _iterator9.n()).done;) {
                var e = _step9.value;

                if (this._highlightIds.has(e)) {
                  var _t17 = this._highlightIds.get(e) - 1;

                  0 === _t17 ? this._highlightIds["delete"](e) : this._highlightIds.set(e, _t17);
                }
              }
            } catch (err) {
              _iterator9.e(err);
            } finally {
              _iterator9.f();
            }

            this._updateHighlight();
          }
        }, {
          key: "_updateHighlight",
          value: function _updateHighlight() {
            var _this5 = this;

            var t = Array.from(this._highlightIds.keys()),
                e = t.map(function (t) {
              return _this5._displayIds.get(t);
            });

            this._attributeStore.setHighlight(t, e);
          }
        }, {
          key: "_getIntersectingTiles",
          value: function _getIntersectingTiles(t) {
            var e = this._graphicStore.getBounds(t);

            return !e || 0 === Object(_geometry_support_aaBoundingRect_js__WEBPACK_IMPORTED_MODULE_18__["width"])(e) || 0 === Object(_geometry_support_aaBoundingRect_js__WEBPACK_IMPORTED_MODULE_18__["height"])(e) ? [] : this._tileStore.boundsIntersections(e);
          }
        }, {
          key: "_updateTile",
          value: function _updateTile(t) {
            var _this6 = this;

            var e = t.tile,
                i = this._getGraphicsData(this._templateStore, e, t.addedOrModified);

            return this._processGraphics(i).then(function (i) {
              return _this6._patchTile(e.key, {
                type: "update",
                addOrUpdate: i,
                remove: t.removed,
                end: !0
              }), i;
            });
          }
        }, {
          key: "_patchTile",
          value: function _patchTile(t, e) {
            if (!this._tiles.has(t)) return;

            var i = this._tiles.get(t);

            this.container.onTileData(i, e), this.container.requestRender();
          }
        }, {
          key: "_graphicsChangeHandler",
          value: function _graphicsChangeHandler(t) {
            var _iterator10 = _createForOfIteratorHelper(t.added),
                _step10;

            try {
              for (_iterator10.s(); !(_step10 = _iterator10.n()).done;) {
                var e = _step10.value;

                this._pendingUpdate.added.add(e);
              }
            } catch (err) {
              _iterator10.e(err);
            } finally {
              _iterator10.f();
            }

            var _iterator11 = _createForOfIteratorHelper(t.moved),
                _step11;

            try {
              for (_iterator11.s(); !(_step11 = _iterator11.n()).done;) {
                var _e14 = _step11.value;

                this._pendingUpdate.added.add(_e14);
              }
            } catch (err) {
              _iterator11.e(err);
            } finally {
              _iterator11.f();
            }

            var _iterator12 = _createForOfIteratorHelper(t.removed),
                _step12;

            try {
              for (_iterator12.s(); !(_step12 = _iterator12.n()).done;) {
                var _e15 = _step12.value;
                this._pendingUpdate.added.has(_e15) ? this._pendingUpdate.added["delete"](_e15) : this._pendingUpdate.removed.add(_e15);
              }
            } catch (err) {
              _iterator12.e(err);
            } finally {
              _iterator12.f();
            }

            this._processing ? this._needsProcessing = !0 : this._updateGraphics();
          }
        }, {
          key: "_getGraphicsToUpdate",
          value: function _getGraphicsToUpdate() {
            var t = {
              added: [],
              removed: [],
              updated: []
            },
                e = this._pendingUpdate;

            var _iterator13 = _createForOfIteratorHelper(this.graphics.items),
                _step13;

            try {
              for (_iterator13.s(); !(_step13 = _iterator13.n()).done;) {
                var i = _step13.value;
                e.added.has(i) ? t.added.push(i) : e.updated.has(i) && t.updated.push(i);
              }
            } catch (err) {
              _iterator13.e(err);
            } finally {
              _iterator13.f();
            }

            var _iterator14 = _createForOfIteratorHelper(e.removed),
                _step14;

            try {
              for (_iterator14.s(); !(_step14 = _iterator14.n()).done;) {
                var _i4 = _step14.value;
                this._graphicStore.has(_i4) && t.removed.push(_i4);
              }
            } catch (err) {
              _iterator14.e(err);
            } finally {
              _iterator14.f();
            }

            return e.added.clear(), e.removed.clear(), e.updated.clear(), t;
          }
        }, {
          key: "_updateGraphics",
          value: function () {
            var _updateGraphics2 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee2() {
              var _this$_getGraphicsToU, t, e, i, s, r, _t18, _e16, a, h, _t19, _e17, o, _iterator15, _step15, _t20, n, _e18, _i5, _iterator16, _step16, _t23, _e20, _iterator19, _step19, _i6, d, _t21, _e19, _iterator17, _step17, _t22, p, _iterator18, _step18, _step18$value, _t24, _e21;

              return regeneratorRuntime.wrap(function _callee2$(_context2) {
                while (1) {
                  switch (_context2.prev = _context2.next) {
                    case 0:
                      this._processing = !0;
                      _this$_getGraphicsToU = this._getGraphicsToUpdate(), t = _this$_getGraphicsToU.added, e = _this$_getGraphicsToU.removed, i = _this$_getGraphicsToU.updated, s = this._tilesToUpdate;
                      _context2.prev = 2;

                      if (!this._graphicStoreUpdate) {
                        _t18 = this.view.state, _e16 = this.view.featuresTilingScheme.getClosestInfoForScale(_t18.scale).level;
                        this._graphicStore.updateLevel(_e16), this._tileStore.setViewState(_t18);
                      }

                      a = [], h = new Array(t.length + e.length);

                      for (_t19 = 0; _t19 < i.length; _t19++) {
                        _e17 = i[_t19], o = this._getIntersectingTiles(_e17);
                        _iterator15 = _createForOfIteratorHelper(o);

                        try {
                          for (_iterator15.s(); !(_step15 = _iterator15.n()).done;) {
                            _t20 = _step15.value;
                            r = _t20.id;
                            Z(r, _t20, s).removed.push(this._displayIds.get(_e17.uid));
                          }
                        } catch (err) {
                          _iterator15.e(err);
                        } finally {
                          _iterator15.f();
                        }

                        a.push(this._updateGraphic(_e17, null)), h[_t19] = _e17;
                      }

                      n = i.length;

                      for (_e18 = 0; _e18 < t.length; _e18++) {
                        _i5 = t[_e18];
                        h[n + _e18] = _i5, this._graphicsSet.add(_i5), a.push(this.addGraphic(_i5));
                      }

                      _iterator16 = _createForOfIteratorHelper(e);

                      try {
                        for (_iterator16.s(); !(_step16 = _iterator16.n()).done;) {
                          _t23 = _step16.value;

                          this._abortProcessingGraphic(_t23.uid);

                          _e20 = this._getIntersectingTiles(_t23);
                          _iterator19 = _createForOfIteratorHelper(_e20);

                          try {
                            for (_iterator19.s(); !(_step19 = _iterator19.n()).done;) {
                              _i6 = _step19.value;
                              r = _i6.id;
                              Z(r, _i6, s).removed.push(this._displayIds.get(_t23.uid));
                            }
                          } catch (err) {
                            _iterator19.e(err);
                          } finally {
                            _iterator19.f();
                          }

                          this._graphicsSet["delete"](_t23), this._graphicStore.remove(_t23);
                        }
                      } catch (err) {
                        _iterator16.e(err);
                      } finally {
                        _iterator16.f();
                      }

                      this._flipUpdatingGraphics();

                      _context2.next = 13;
                      return Object(_core_promiseUtils_js__WEBPACK_IMPORTED_MODULE_10__["all"])(a);

                    case 13:
                      for (_t21 = 0; _t21 < h.length; _t21++) {
                        d = h[_t21];
                        _e19 = this._getIntersectingTiles(d);
                        _iterator17 = _createForOfIteratorHelper(_e19);

                        try {
                          for (_iterator17.s(); !(_step17 = _iterator17.n()).done;) {
                            _t22 = _step17.value;
                            r = _t22.id;
                            Z(r, _t22, s).addedOrModified.push(d);
                          }
                        } catch (err) {
                          _iterator17.e(err);
                        } finally {
                          _iterator17.f();
                        }
                      }

                      this._graphicStore.updateZ();

                      p = [];
                      _iterator18 = _createForOfIteratorHelper(s);

                      try {
                        for (_iterator18.s(); !(_step18 = _iterator18.n()).done;) {
                          _step18$value = _slicedToArray(_step18.value, 2), _t24 = _step18$value[0], _e21 = _step18$value[1];
                          p.push(this._updateTile(_e21));
                        }
                      } catch (err) {
                        _iterator18.e(err);
                      } finally {
                        _iterator18.f();
                      }

                      _context2.next = 20;
                      return Object(_core_promiseUtils_js__WEBPACK_IMPORTED_MODULE_10__["all"])(p);

                    case 20:
                      _context2.next = 24;
                      break;

                    case 22:
                      _context2.prev = 22;
                      _context2.t0 = _context2["catch"](2);

                    case 24:
                      s.clear(), this.notifyChange("updating"), this._processing = !1, this._needsProcessing && (this._needsProcessing = !1, this._updateGraphics());

                    case 25:
                    case "end":
                      return _context2.stop();
                  }
                }
              }, _callee2, this, [[2, 22]]);
            }));

            function _updateGraphics() {
              return _updateGraphics2.apply(this, arguments);
            }

            return _updateGraphics;
          }()
        }, {
          key: "_getArcadeInfo",
          value: function _getArcadeInfo(t) {
            var i = (t.attributes ? Object.keys(t.attributes) : []).map(function (e) {
              return {
                name: e,
                alias: e,
                type: "string" == typeof t.attributes[e] ? "esriFieldTypeString" : "esriFieldTypeDouble"
              };
            });
            return Object(_core_maybe_js__WEBPACK_IMPORTED_MODULE_2__["isNone"])(t.geometry) ? null : {
              geometryType: Object(_geometry_support_jsonUtils_js__WEBPACK_IMPORTED_MODULE_16__["getJsonType"])(t.geometry),
              spatialReference: _geometry_SpatialReference_js__WEBPACK_IMPORTED_MODULE_13__["default"].fromJSON(t.geometry.spatialReference),
              fields: i
            };
          }
        }, {
          key: "_getSymbolForGraphic",
          value: function () {
            var _getSymbolForGraphic2 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee3(t, e) {
              return regeneratorRuntime.wrap(function _callee3$(_context3) {
                while (1) {
                  switch (_context3.prev = _context3.next) {
                    case 0:
                      return _context3.abrupt("return", Object(_core_maybe_js__WEBPACK_IMPORTED_MODULE_2__["isSome"])(t.symbol) ? t.symbol : Object(_core_maybe_js__WEBPACK_IMPORTED_MODULE_2__["isSome"])(this.renderer) ? this.renderer.getSymbolAsync(t, {
                        scale: this.view.scale,
                        abortOptions: e
                      }) : this._getNullSymbol(t));

                    case 1:
                    case "end":
                      return _context3.stop();
                  }
                }
              }, _callee3, this);
            }));

            function _getSymbolForGraphic(_x2, _x3) {
              return _getSymbolForGraphic2.apply(this, arguments);
            }

            return _getSymbolForGraphic;
          }()
        }, {
          key: "_getSymbolResources",
          value: function () {
            var _getSymbolResources2 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee4(t, e) {
              var i, s, r, o, _t25, _Object3, _Object4, _e22, _i8, _i7, _yield$this$container, _yield$this$container2, _s3;

              return regeneratorRuntime.wrap(function _callee4$(_context4) {
                while (1) {
                  switch (_context4.prev = _context4.next) {
                    case 0:
                      if (this.container.stage) {
                        _context4.next = 2;
                        break;
                      }

                      return _context4.abrupt("return", Object(_core_promiseUtils_js__WEBPACK_IMPORTED_MODULE_10__["resolve"])(null));

                    case 2:
                      i = this._getArcadeInfo(t);
                      _context4.next = 5;
                      return this._getSymbolForGraphic(t, e);

                    case 5:
                      s = _context4.sent;
                      r = Object(_features_schemaUtils_js__WEBPACK_IMPORTED_MODULE_28__["createSymbolSchema"])(s);
                      _context4.next = 9;
                      return Object(_symbols_cim_cimSymbolUtils_js__WEBPACK_IMPORTED_MODULE_25__["expandSymbol"])(r, i, e);

                    case 9:
                      o = _context4.sent;

                      if (!("esriTS" === o.type)) {
                        _context4.next = 20;
                        break;
                      }

                      _t25 = [], _Object3 = Object(_engine_webgl_util_BidiText_js__WEBPACK_IMPORTED_MODULE_24__["bidiText"])(o.text), _Object4 = _slicedToArray(_Object3, 1), _e22 = _Object4[0];

                      for (_i8 = 0; _i8 < _e22.length; _i8++) {
                        _t25.push(_e22.charCodeAt(_i8));
                      }

                      _i7 = {
                        symbol: o,
                        id: 0,
                        glyphIds: _t25
                      };
                      _context4.next = 16;
                      return this.container.getMaterialItems([_i7]);

                    case 16:
                      _yield$this$container = _context4.sent;
                      _yield$this$container2 = _slicedToArray(_yield$this$container, 1);
                      _s3 = _yield$this$container2[0].mosaicItem;
                      return _context4.abrupt("return", {
                        symbol: o,
                        mosaicItem: _s3
                      });

                    case 20:
                      return _context4.abrupt("return", {
                        symbol: o,
                        mosaicItem: null
                      });

                    case 21:
                    case "end":
                      return _context4.stop();
                  }
                }
              }, _callee4, this);
            }));

            function _getSymbolResources(_x4, _x5) {
              return _getSymbolResources2.apply(this, arguments);
            }

            return _getSymbolResources;
          }()
        }, {
          key: "_projectAndNormalizeGeometry",
          value: function () {
            var _projectAndNormalizeGeometry2 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee5(t) {
              var _this7 = this;

              var i, _t26, _t27;

              return regeneratorRuntime.wrap(function _callee5$(_context5) {
                while (1) {
                  switch (_context5.prev = _context5.next) {
                    case 0:
                      if (!Object(_core_maybe_js__WEBPACK_IMPORTED_MODULE_2__["isNone"])(t.geometry)) {
                        _context5.next = 2;
                        break;
                      }

                      return _context5.abrupt("return", Object(_core_promiseUtils_js__WEBPACK_IMPORTED_MODULE_10__["resolve"])(null));

                    case 2:
                      i = t.geometry;

                      if (Object(_geometry_support_jsonUtils_js__WEBPACK_IMPORTED_MODULE_16__["isPolygon"])(i)) {
                        _t26 = i.rings;
                        i.rings = _t26;
                      } else if (Object(_geometry_support_jsonUtils_js__WEBPACK_IMPORTED_MODULE_16__["isPolyline"])(i)) {
                        _t27 = i.paths;
                        i.paths = _t27;
                      } else Object(_geometry_support_jsonUtils_js__WEBPACK_IMPORTED_MODULE_16__["isExtent"])(i) && (i = _geometry_Polygon_js__WEBPACK_IMPORTED_MODULE_15__["default"].fromExtent(i));

                      return _context5.abrupt("return", Object(_layers_graphics_data_projectionSupport_js__WEBPACK_IMPORTED_MODULE_21__["checkProjectionSupport"])(i.spatialReference, this.view.spatialReference).then(function () {
                        var t = Object(_graphicsUtils_js__WEBPACK_IMPORTED_MODULE_37__["normalizeCentralMeridian"])(i),
                            e = Object(_layers_graphics_data_projectionSupport_js__WEBPACK_IMPORTED_MODULE_21__["project"])(t, i.spatialReference, _this7.view.spatialReference);
                        return Object(_geometry_support_coordsUtils_js__WEBPACK_IMPORTED_MODULE_14__["closeRingsAndFixWinding"])(e), e;
                      }));

                    case 5:
                    case "end":
                      return _context5.stop();
                  }
                }
              }, _callee5, this);
            }));

            function _projectAndNormalizeGeometry(_x6) {
              return _projectAndNormalizeGeometry2.apply(this, arguments);
            }

            return _projectAndNormalizeGeometry;
          }()
        }, {
          key: "_onTileUpdate",
          value: function _onTileUpdate(t) {
            var e = Object(_geometry_support_spatialReferenceUtils_js__WEBPACK_IMPORTED_MODULE_12__["getInfo"])(this.view.spatialReference);

            if (t.added && t.added.length > 0) {
              var _iterator20 = _createForOfIteratorHelper(t.added),
                  _step20;

              try {
                for (_iterator20.s(); !(_step20 = _iterator20.n()).done;) {
                  var i = _step20.value;

                  this._addNewTile(i, e);
                }
              } catch (err) {
                _iterator20.e(err);
              } finally {
                _iterator20.f();
              }
            }

            if (t.removed && t.removed.length > 0) {
              var _iterator21 = _createForOfIteratorHelper(t.removed),
                  _step21;

              try {
                for (_iterator21.s(); !(_step21 = _iterator21.n()).done;) {
                  var _e23 = _step21.value;

                  this._removeTile(_e23.key);
                }
              } catch (err) {
                _iterator21.e(err);
              } finally {
                _iterator21.f();
              }
            }
          }
        }, {
          key: "addGraphic",
          value: function addGraphic(t) {
            var _this8 = this;

            this._abortProcessingGraphic(t.uid);

            var e = Object(_core_promiseUtils_js__WEBPACK_IMPORTED_MODULE_10__["createAbortController"])();

            this._graphicIdToAbortController.set(t.uid, e);

            var i = {
              signal: e.signal
            };
            return this._addOrUpdateGraphic(t, i).then(function () {
              _this8._graphicIdToAbortController["delete"](t.uid);
            })["catch"](function (e) {
              if (_this8._graphicIdToAbortController["delete"](t.uid), !Object(_core_promiseUtils_js__WEBPACK_IMPORTED_MODULE_10__["isAbortError"])(e)) throw e;
            });
          }
        }, {
          key: "_updateGraphic",
          value: function () {
            var _updateGraphic2 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee6(t, e) {
              var i, s, _yield$Object, _yield$Object2, r, a;

              return regeneratorRuntime.wrap(function _callee6$(_context6) {
                while (1) {
                  switch (_context6.prev = _context6.next) {
                    case 0:
                      i = this._projectAndNormalizeGeometry(t);
                      s = this._getSymbolResources(t, e);
                      _context6.next = 4;
                      return Object(_core_promiseUtils_js__WEBPACK_IMPORTED_MODULE_10__["all"])([i, s]);

                    case 4:
                      _yield$Object = _context6.sent;
                      _yield$Object2 = _slicedToArray(_yield$Object, 2);
                      r = _yield$Object2[0];
                      a = _yield$Object2[1];

                      this._graphicStore.addOrModify(t, a, r);

                    case 9:
                    case "end":
                      return _context6.stop();
                  }
                }
              }, _callee6, this);
            }));

            function _updateGraphic(_x7, _x8) {
              return _updateGraphic2.apply(this, arguments);
            }

            return _updateGraphic;
          }()
        }, {
          key: "_addOrUpdateGraphic",
          value: function () {
            var _addOrUpdateGraphic2 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee7(t, e) {
              var i, s, _yield$Object3, _yield$Object4, _e24, r;

              return regeneratorRuntime.wrap(function _callee7$(_context7) {
                while (1) {
                  switch (_context7.prev = _context7.next) {
                    case 0:
                      i = this._projectAndNormalizeGeometry(t), s = this._getSymbolResources(t, e);
                      _context7.prev = 1;
                      _context7.next = 4;
                      return Object(_core_promiseUtils_js__WEBPACK_IMPORTED_MODULE_10__["all"])([i, s]);

                    case 4:
                      _yield$Object3 = _context7.sent;
                      _yield$Object4 = _slicedToArray(_yield$Object3, 2);
                      _e24 = _yield$Object4[0];
                      r = _yield$Object4[1];

                      this._addProjectedGraphic(t, r, _e24);

                      _context7.next = 15;
                      break;

                    case 11:
                      _context7.prev = 11;
                      _context7.t0 = _context7["catch"](1);

                      if (Object(_core_promiseUtils_js__WEBPACK_IMPORTED_MODULE_10__["isAbortError"])(_context7.t0)) {
                        _context7.next = 15;
                        break;
                      }

                      throw _context7.t0;

                    case 15:
                    case "end":
                      return _context7.stop();
                  }
                }
              }, _callee7, this, [[1, 11]]);
            }));

            function _addOrUpdateGraphic(_x9, _x10) {
              return _addOrUpdateGraphic2.apply(this, arguments);
            }

            return _addOrUpdateGraphic;
          }()
        }, {
          key: "_addProjectedGraphic",
          value: function _addProjectedGraphic(t, e, i) {
            this._graphicsSet.has(t) && this._graphicStore.addOrModify(t, e, i);
          }
        }, {
          key: "_addTile",
          value: function _addTile(t) {
            var e = Object(_geometry_support_aaBoundingRect_js__WEBPACK_IMPORTED_MODULE_18__["create"])();
            this.view.featuresTilingScheme.getTileBounds(e, t);
            var i = new _engine_webgl_WGLTile_js__WEBPACK_IMPORTED_MODULE_27__["WGLTile"](t, e, !0);
            return this._tiles.set(t, i), this.container.addChild(i), i;
          }
        }, {
          key: "_addNewTile",
          value: function _addNewTile(t, e) {
            var _this9 = this;

            var i = this._addTile(t.key),
                s = this._graphicStore.queryTileData(this._templateStore, t);

            if (e) {
              var _i9 = Math.round((e.valid[1] - e.valid[0]) / t.resolution);

              var _iterator22 = _createForOfIteratorHelper(s),
                  _step22;

              try {
                for (_iterator22.s(); !(_step22 = _iterator22.n()).done;) {
                  var _t28 = _step22.value;
                  _t28.geometry && Object(_geometry_support_jsonUtils_js__WEBPACK_IMPORTED_MODULE_16__["isPoint"])(_t28.geometry) && this._wrapPoints(_t28, _i9);
                }
              } catch (err) {
                _iterator22.e(err);
              } finally {
                _iterator22.f();
              }
            }

            var r = t.key;
            this._tileUpdateSet.add(t.key), this.notifyChange("updating"), this._processGraphics(s).then(function (t) {
              var e = {
                type: "update",
                clear: !0,
                addOrUpdate: t,
                remove: [],
                end: !0
              };
              i.setData(e), _this9._tileUpdateSet["delete"](r), _this9.notifyChange("updating");
            })["catch"](function (t) {
              if (_this9._tileUpdateSet["delete"](r), _this9.notifyChange("updating"), !Object(_core_promiseUtils_js__WEBPACK_IMPORTED_MODULE_10__["isAbortError"])(t)) throw t;
            });
          }
        }, {
          key: "_removeTile",
          value: function _removeTile(t) {
            if (!this._tiles.has(t)) return;

            var e = this._tiles.get(t);

            this.container.removeChild(e), e.destroy(), this._tiles["delete"](t);
          }
        }, {
          key: "_setFilterState",
          value: function _setFilterState(t, e) {
            var i = this._displayIds.get(t),
                s = this._attributeStore.getHighlightFlag(t);

            this._attributeStore.setData(i, 0, 0, s | (e ? _engine_webgl_definitions_js__WEBPACK_IMPORTED_MODULE_22__["FILTER_FLAG_0"] : 0));
          }
        }, {
          key: "_getGraphicsData",
          value: function _getGraphicsData(t, e, i) {
            var s = Object(_geometry_support_spatialReferenceUtils_js__WEBPACK_IMPORTED_MODULE_12__["getInfo"])(this.view.spatialReference),
                r = this._graphicStore.getGraphicsData(t, e, i);

            if (s) {
              var _t29 = Math.round((s.valid[1] - s.valid[0]) / e.resolution);

              var _iterator23 = _createForOfIteratorHelper(r),
                  _step23;

              try {
                for (_iterator23.s(); !(_step23 = _iterator23.n()).done;) {
                  var _e25 = _step23.value;
                  _e25.geometry && Object(_geometry_support_jsonUtils_js__WEBPACK_IMPORTED_MODULE_16__["isPoint"])(_e25.geometry) && this._wrapPoints(_e25, _t29);
                }
              } catch (err) {
                _iterator23.e(err);
              } finally {
                _iterator23.f();
              }
            }

            return r;
          }
        }, {
          key: "_wrapPoints",
          value: function _wrapPoints(t, e) {
            var i = t.geometry;
            512 === e ? i.x < 20 ? t.geometry = {
              points: [[i.x, i.y], [e, 0]]
            } : i.x > 492 && (t.geometry = {
              points: [[i.x, i.y], [-e, 0]]
            }) : i.x < -20 ? t.geometry = {
              points: [[i.x, i.y], [e, 0]]
            } : i.x > 532 && (t.geometry = {
              points: [[i.x, i.y], [-e, 0]]
            });
          }
        }, {
          key: "_processGraphics",
          value: function () {
            var _processGraphics2 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee8(t, e) {
              var i, s;
              return regeneratorRuntime.wrap(function _callee8$(_context8) {
                while (1) {
                  switch (_context8.prev = _context8.next) {
                    case 0:
                      if (!(!(t && t.length) || !this._meshFactory)) {
                        _context8.next = 2;
                        break;
                      }

                      return _context8.abrupt("return", null);

                    case 2:
                      i = _features_support_GraphicsReader_js__WEBPACK_IMPORTED_MODULE_34__["GraphicsReader"].from(t), s = this._meshFactory;
                      _context8.t0 = s;
                      _context8.t1 = i;
                      _context8.next = 7;
                      return this._matcher;

                    case 7:
                      _context8.t2 = _context8.sent;
                      _context8.t3 = e;
                      _context8.next = 11;
                      return _context8.t0.analyzeGraphics.call(_context8.t0, _context8.t1, _context8.t2, null, null, _context8.t3);

                    case 11:
                      this._attributeStore.sendUpdates();

                      return _context8.abrupt("return", this._processAnalyzedGraphics(i));

                    case 13:
                    case "end":
                      return _context8.stop();
                  }
                }
              }, _callee8, this);
            }));

            function _processGraphics(_x11, _x12) {
              return _processGraphics2.apply(this, arguments);
            }

            return _processGraphics;
          }()
        }, {
          key: "_processAnalyzedGraphics",
          value: function _processAnalyzedGraphics(t) {
            var e = this._meshFactory,
                i = e.createMeshData(t.getApproximateSize()),
                s = t.getCursor();

            for (; s.next();) {
              var _t30 = s.readGraphic();

              _t30.insertAfter = -1 === _t30.insertAfter ? -1 : this._displayIds.get(_t30.insertAfter), _t30.displayId = this._displayIds.get(_t30.attributes[this.uid]), e.writeGraphic(i, s);
            }

            var r = {};
            return i.encode(r, []), _engine_webgl_TileData_js__WEBPACK_IMPORTED_MODULE_26__["TileData"].decode(r);
          }
        }, {
          key: "_abortProcessingGraphic",
          value: function _abortProcessingGraphic(t) {
            if (this._graphicIdToAbortController.has(t)) {
              this._graphicIdToAbortController.get(t).abort();
            }
          }
        }, {
          key: "_getNullSymbol",
          value: function _getNullSymbol(t) {
            var e = t.geometry;
            return Object(_geometry_support_jsonUtils_js__WEBPACK_IMPORTED_MODULE_16__["isPolyline"])(e) ? _symbols_support_defaults_js__WEBPACK_IMPORTED_MODULE_19__["errorPolylineSymbol2D"] : Object(_geometry_support_jsonUtils_js__WEBPACK_IMPORTED_MODULE_16__["isPolygon"])(e) || Object(_geometry_support_jsonUtils_js__WEBPACK_IMPORTED_MODULE_16__["isExtent"])(e) ? _symbols_support_defaults_js__WEBPACK_IMPORTED_MODULE_19__["errorPolygonSymbol2D"] : _symbols_support_defaults_js__WEBPACK_IMPORTED_MODULE_19__["errorPointSymbol2D"];
          }
        }, {
          key: "_flipUpdatingGraphics",
          value: function _flipUpdatingGraphics() {
            var _this10 = this;

            this._updatingGraphicsTimer && clearTimeout(this._updatingGraphicsTimer), this._updatingGraphicsTimer = setTimeout(function () {
              _this10._updatingGraphicsTimer = null, _this10.notifyChange("updating");
            }, 160), this.notifyChange("updating");
          }
        }]);

        return K;
      }(Object(_layers_GraphicsView_js__WEBPACK_IMPORTED_MODULE_39__["GraphicsView"])(Object(_core_HandleOwner_js__WEBPACK_IMPORTED_MODULE_20__["HandleOwnerMixin"])(_core_Accessor_js__WEBPACK_IMPORTED_MODULE_11__["default"])));

      Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_5__["property"])({
        constructOnly: !0
      })], K.prototype, "requestUpdateCallback", void 0), Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_5__["property"])({
        constructOnly: !0
      })], K.prototype, "graphics", void 0), Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_5__["property"])()], K.prototype, "updating", null), Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_5__["property"])()], K.prototype, "view", void 0), Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_5__["property"])()], K.prototype, "updateRequested", void 0), K = Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_subclass_js__WEBPACK_IMPORTED_MODULE_6__["subclass"])("esri.views.2d.layers.support.GraphicsView2D")], K);
      var Q = K;
      /* harmony default export */

      __webpack_exports__["default"] = Q;
      /***/
    },

    /***/
    "q03O":
    /*!********************************************************************************!*\
      !*** ./node_modules/@arcgis/core/views/2d/layers/graphics/GraphicContainer.js ***!
      \********************************************************************************/

    /*! exports provided: default */

    /***/
    function q03O(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony import */


      var _engine_webgl_enums_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ../../engine/webgl/enums.js */
      "yE7X");
      /* harmony import */


      var _engine_FeatureContainer_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ../../engine/FeatureContainer.js */
      "by2V");
      /*
      All material copyright ESRI, All Rights Reserved, unless otherwise specified.
      See https://js.arcgis.com/4.18/esri/copyright.txt for details.
      */

      /* harmony default export */


      __webpack_exports__["default"] = /*#__PURE__*/function (_engine_FeatureContai) {
        _inherits(_class2, _engine_FeatureContai);

        var _super4 = _createSuper(_class2);

        function _class2() {
          _classCallCheck(this, _class2);

          return _super4.apply(this, arguments);
        }

        _createClass(_class2, [{
          key: "hasLabels",
          get: function get() {
            return !1;
          }
        }, {
          key: "labelsVisible",
          get: function get() {
            return !1;
          }
        }, {
          key: "renderChildren",
          value: function renderChildren(r) {
            this.attributeView.bindTextures(r.context), this.children.some(function (e) {
              return e.hasData;
            }) && (_get(_getPrototypeOf(_class2.prototype), "renderChildren", this).call(this, r), r.drawPhase === _engine_webgl_enums_js__WEBPACK_IMPORTED_MODULE_0__["WGLDrawPhase"].MAP && this._renderChildren(r), r.drawPhase === _engine_webgl_enums_js__WEBPACK_IMPORTED_MODULE_0__["WGLDrawPhase"].HIGHLIGHT && this._renderHighlight(r));
          }
        }, {
          key: "_renderChildren",
          value: function _renderChildren(e, r) {
            var _iterator24 = _createForOfIteratorHelper(this.children),
                _step24;

            try {
              for (_iterator24.s(); !(_step24 = _iterator24.n()).done;) {
                var i = _step24.value;
                i.isReady && i.hasData && (i.commitChanges(e), e.context.setStencilFunction(514, i.stencilRef, 255), i._displayList.replay(e, i, r));
              }
            } catch (err) {
              _iterator24.e(err);
            } finally {
              _iterator24.f();
            }
          }
        }, {
          key: "_renderHighlight",
          value: function _renderHighlight(e) {
            var r = e.painter,
                i = r.effects.highlight;
            i.bind(e), this._renderChildren(e, i.defines), i.draw(e), i.unbind();
          }
        }]);

        return _class2;
      }(_engine_FeatureContainer_js__WEBPACK_IMPORTED_MODULE_1__["FeatureContainer"]);
      /***/

    },

    /***/
    "t0Xj":
    /*!********************************************************************************!*\
      !*** ./node_modules/@arcgis/core/views/2d/layers/graphics/GraphicStoreItem.js ***!
      \********************************************************************************/

    /*! exports provided: default */

    /***/
    function t0Xj(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony import */


      var _core_maybe_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ../../../../core/maybe.js */
      "srIe");
      /* harmony import */


      var _geometry_support_centroid_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ../../../../geometry/support/centroid.js */
      "V+VG");
      /* harmony import */


      var _geometry_support_jsonUtils_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ../../../../geometry/support/jsonUtils.js */
      "qatw");
      /* harmony import */


      var _geometry_support_aaBoundingRect_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ../../../../geometry/support/aaBoundingRect.js */
      "kYAx");
      /* harmony import */


      var _layers_graphics_OptimizedGeometry_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ../../../../layers/graphics/OptimizedGeometry.js */
      "gVKr");
      /* harmony import */


      var _layers_graphics_featureConversionUtils_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ../../../../layers/graphics/featureConversionUtils.js */
      "ZlUD");
      /* harmony import */


      var _geometry_support_quantizationUtils_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ../../../../geometry/support/quantizationUtils.js */
      "AIxD");
      /* harmony import */


      var _graphicsUtils_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! ./graphicsUtils.js */
      "M08Z");
      /*
      All material copyright ESRI, All Rights Reserved, unless otherwise specified.
      See https://js.arcgis.com/4.18/esri/copyright.txt for details.
      */


      var p = new _layers_graphics_OptimizedGeometry_js__WEBPACK_IMPORTED_MODULE_4__["default"](),
          c = new _layers_graphics_OptimizedGeometry_js__WEBPACK_IMPORTED_MODULE_4__["default"]();

      function d(e) {
        e.coords.length = 0, e.lengths.length = 0;
      }

      var f = /*#__PURE__*/function () {
        function f() {
          _classCallCheck(this, f);

          this.bounds = Object(_geometry_support_aaBoundingRect_js__WEBPACK_IMPORTED_MODULE_3__["create"])(), this.graphic = null, this.size = [0, 0, 0, 0];
        }

        _createClass(f, [{
          key: "acquire",
          value: function acquire() {
            var e = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : null;
            var t = arguments.length > 1 ? arguments[1] : undefined;
            var s = arguments.length > 2 ? arguments[2] : undefined;
            var r = arguments.length > 3 ? arguments[3] : undefined;
            var o = arguments.length > 4 ? arguments[4] : undefined;
            var i = arguments.length > 5 ? arguments[5] : undefined;
            e && this.set(e, t, s, r, o, i);
          }
        }, {
          key: "release",
          value: function release() {
            this.graphic = null, this.symbolResource = null, this.geometry = null;
          }
        }, {
          key: "symbol",
          get: function get() {
            return this.symbolResource.symbol;
          }
        }, {
          key: "set",
          value: function set(e, t, s, r, o, i) {
            this.graphic = e, this.geometry = s, this.symbolResource = t, this.updateBounds(r, o, i);
          }
        }, {
          key: "updateBounds",
          value: function updateBounds(e, t, s) {
            Object(_graphicsUtils_js__WEBPACK_IMPORTED_MODULE_7__["getBounds"])(this.bounds, this.size, this.symbolResource, this.geometry, e, t, s);
          }
        }, {
          key: "getGeometryQuantized",
          value: function getGeometryQuantized(e) {
            if (Object(_geometry_support_jsonUtils_js__WEBPACK_IMPORTED_MODULE_2__["isPolygon"])(this.geometry)) {
              var t = this.geometry.rings;
              if (1 === t.length && 2 === t[0].length) return Object(_geometry_support_quantizationUtils_js__WEBPACK_IMPORTED_MODULE_6__["quantizeGeometry"])(e, {
                paths: [[t[0][0], t[0][1]]]
              });
            } else if (Object(_geometry_support_jsonUtils_js__WEBPACK_IMPORTED_MODULE_2__["isPolyline"])(this.geometry)) return d(p), d(c), Object(_layers_graphics_featureConversionUtils_js__WEBPACK_IMPORTED_MODULE_5__["convertFromPolyline"])(p, this.geometry), Object(_layers_graphics_featureConversionUtils_js__WEBPACK_IMPORTED_MODULE_5__["generalizeOptimizedGeometry"])(c, p, this.geometry.hasZ, this.geometry.hasM, "esriGeometryPolyline", e.scale[0]), Object(_layers_graphics_featureConversionUtils_js__WEBPACK_IMPORTED_MODULE_5__["quantizeOptimizedGeometry"])(p, c, this.geometry.hasZ, this.geometry.hasM, "esriGeometryPolyline", e), Object(_layers_graphics_featureConversionUtils_js__WEBPACK_IMPORTED_MODULE_5__["convertToPolyline"])(p, this.geometry.hasZ, this.geometry.hasM);

            return Object(_geometry_support_quantizationUtils_js__WEBPACK_IMPORTED_MODULE_6__["quantizeGeometry"])(e, this.geometry);
          }
        }], [{
          key: "acquire",
          value: function acquire() {
            var e = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : null;
            var t = arguments.length > 1 ? arguments[1] : undefined;
            var s = arguments.length > 2 ? arguments[2] : undefined;
            var r = arguments.length > 3 ? arguments[3] : undefined;
            var o = arguments.length > 4 ? arguments[4] : undefined;
            var i = arguments.length > 5 ? arguments[5] : undefined;
            var h;
            return 0 === f._pool.length ? h = new f() : (h = f._pool.pop(), this._set["delete"](h)), h.acquire(e, t, s, r, o, i), h;
          }
        }, {
          key: "release",
          value: function release(e) {
            e && !this._set.has(e) && (e.release(), this._pool.push(e), this._set.add(e));
          }
        }, {
          key: "getCentroidQuantized",
          value: function getCentroidQuantized(r, o) {
            if (Object(_geometry_support_jsonUtils_js__WEBPACK_IMPORTED_MODULE_2__["isPolygon"])(r.geometry)) {
              var s = r.symbol;
              if (Object(_core_maybe_js__WEBPACK_IMPORTED_MODULE_0__["isNone"])(s)) return null;

              if (Object(_graphicsUtils_js__WEBPACK_IMPORTED_MODULE_7__["isMarkerSymbol"])(s.type)) {
                var e = Object(_geometry_support_centroid_js__WEBPACK_IMPORTED_MODULE_1__["polygonCentroid"])(r.geometry);
                return Object(_geometry_support_quantizationUtils_js__WEBPACK_IMPORTED_MODULE_6__["quantizePoint"])(o, {}, {
                  x: e[0],
                  y: e[1]
                }, !1, !1);
              }
            }

            return null;
          }
        }]);

        return f;
      }();

      f._pool = [], f._set = new Set();
      /* harmony default export */

      __webpack_exports__["default"] = f;
      /***/
    }
  }]);
})();
//# sourceMappingURL=default~layers-GeoRSSLayerView2D-js~layers-GraphicsLayerView2D-js~layers-ImageryLayerView2D-js~layer~87e04381-es5.js.map