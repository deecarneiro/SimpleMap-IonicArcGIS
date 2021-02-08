(function () {
  function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

  function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

  function _createForOfIteratorHelper(o, allowArrayLike) { var it; if (typeof Symbol === "undefined" || o[Symbol.iterator] == null) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e2) { throw _e2; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = o[Symbol.iterator](); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e3) { didErr = true; err = _e3; }, f: function f() { try { if (!normalCompletion && it["return"] != null) it["return"](); } finally { if (didErr) throw err; } } }; }

  function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

  function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["layers-graphics-data-FeatureFilter-js"], {
    /***/
    "64Oa":
    /*!*************************************************************************!*\
      !*** ./node_modules/@arcgis/core/layers/graphics/data/FeatureFilter.js ***!
      \*************************************************************************/

    /*! exports provided: default */

    /***/
    function Oa(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony import */


      var _core_maybe_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ../../../core/maybe.js */
      "srIe");
      /* harmony import */


      var _core_Logger_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ../../../core/Logger.js */
      "6S2I");
      /* harmony import */


      var _core_Error_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ../../../core/Error.js */
      "zlDU");
      /* harmony import */


      var _core_promiseUtils_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ../../../core/promiseUtils.js */
      "9MzC");
      /* harmony import */


      var _geometry_support_boundsUtils_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ../../../geometry/support/boundsUtils.js */
      "KLE9");
      /* harmony import */


      var _geometry_support_aaBoundingRect_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ../../../geometry/support/aaBoundingRect.js */
      "kYAx");
      /* harmony import */


      var _tasks_support_Query_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ../../../tasks/support/Query.js */
      "xk++");
      /* harmony import */


      var _chunks_spatialQuerySupport_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! ../../../chunks/spatialQuerySupport.js */
      "1Rg/");
      /* harmony import */


      var _timeSupport_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! ./timeSupport.js */
      "q7ja");
      /* harmony import */


      var _views_2d_layers_features_FeatureStore2D_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! ../../../views/2d/layers/features/FeatureStore2D.js */
      "DJok");
      /* harmony import */


      var _views_2d_layers_features_support_whereUtils_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
      /*! ../../../views/2d/layers/features/support/whereUtils.js */
      "IFAU");
      /*
      All material copyright ESRI, All Rights Reserved, unless otherwise specified.
      See https://js.arcgis.com/4.18/esri/copyright.txt for details.
      */


      var _ = _core_Logger_js__WEBPACK_IMPORTED_MODULE_1__["default"].getLogger("esri.views.2d.layers.features.controllers.FeatureFilter");
      /* harmony default export */


      __webpack_exports__["default"] = /*#__PURE__*/function () {
        function _class(t) {
          _classCallCheck(this, _class);

          this._geometryBounds = Object(_geometry_support_aaBoundingRect_js__WEBPACK_IMPORTED_MODULE_5__["create"])(), this._idToVisibility = new Map(), this._serviceInfo = t;
        }

        _createClass(_class, [{
          key: "hash",
          get: function get() {
            return this._hash;
          }
        }, {
          key: "check",
          value: function check(t) {
            return this._applyFilter(t);
          }
        }, {
          key: "clear",
          value: function clear() {
            var t = this._resetAllHiddenIds();

            return this.update(), {
              show: t,
              hide: []
            };
          }
        }, {
          key: "invalidate",
          value: function invalidate() {
            var _this = this;

            this._idToVisibility.forEach(function (t, e) {
              _this._idToVisibility.set(e, 0);
            });
          }
        }, {
          key: "setKnownIds",
          value: function setKnownIds(t) {
            var _iterator = _createForOfIteratorHelper(t),
                _step;

            try {
              for (_iterator.s(); !(_step = _iterator.n()).done;) {
                var e = _step.value;

                this._idToVisibility.set(e, 1);
              }
            } catch (err) {
              _iterator.e(err);
            } finally {
              _iterator.f();
            }
          }
        }, {
          key: "setTrue",
          value: function setTrue(t) {
            var _this2 = this;

            var e = [],
                i = [],
                s = new Set(t);
            return this._idToVisibility.forEach(function (t, r) {
              var o = !!(1 & _this2._idToVisibility.get(r)),
                  h = s.has(r);
              !o && h ? e.push(r) : o && !h && i.push(r), _this2._idToVisibility.set(r, h ? 3 : 0);
            }), {
              show: e,
              hide: i
            };
          }
        }, {
          key: "createQuery",
          value: function createQuery() {
            var t = this.geometry,
                e = this.spatialRel,
                i = this.where,
                s = this.timeExtent,
                r = this.objectIds;
            return _tasks_support_Query_js__WEBPACK_IMPORTED_MODULE_6__["default"].fromJSON({
              geometry: t,
              spatialRel: e,
              where: i,
              timeExtent: s,
              objectIds: r
            });
          }
        }, {
          key: "update",
          value: function () {
            var _update = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(t, e) {
              var i;
              return regeneratorRuntime.wrap(function _callee$(_context) {
                while (1) {
                  switch (_context.prev = _context.next) {
                    case 0:
                      this._hash = JSON.stringify(t);
                      _context.next = 3;
                      return Object(_chunks_spatialQuerySupport_js__WEBPACK_IMPORTED_MODULE_7__["n"])(t, null, e);

                    case 3:
                      i = _context.sent;
                      _context.next = 6;
                      return Object(_core_promiseUtils_js__WEBPACK_IMPORTED_MODULE_3__["all"])([this._setGeometryFilter(i), this._setIdFilter(i), this._setAttributeFilter(i), this._setTimeFilter(i)]);

                    case 6:
                    case "end":
                      return _context.stop();
                  }
                }
              }, _callee, this);
            }));

            function update(_x, _x2) {
              return _update.apply(this, arguments);
            }

            return update;
          }()
        }, {
          key: "_setAttributeFilter",
          value: function () {
            var _setAttributeFilter2 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee2(t) {
              return regeneratorRuntime.wrap(function _callee2$(_context2) {
                while (1) {
                  switch (_context2.prev = _context2.next) {
                    case 0:
                      if (!(!t || !t.where)) {
                        _context2.next = 2;
                        break;
                      }

                      return _context2.abrupt("return", (this._clause = null, void (this.where = null)));

                    case 2:
                      _context2.next = 4;
                      return Object(_views_2d_layers_features_support_whereUtils_js__WEBPACK_IMPORTED_MODULE_10__["createWhereClause"])(t.where, this._serviceInfo.fieldsIndex);

                    case 4:
                      this._clause = _context2.sent;
                      this.where = t.where;

                    case 6:
                    case "end":
                      return _context2.stop();
                  }
                }
              }, _callee2, this);
            }));

            function _setAttributeFilter(_x3) {
              return _setAttributeFilter2.apply(this, arguments);
            }

            return _setAttributeFilter;
          }()
        }, {
          key: "_setIdFilter",
          value: function _setIdFilter(t) {
            this._idsToShow = t && t.objectIds && new Set(t.objectIds), this._idsToHide = t && t.hiddenIds && new Set(t.hiddenIds), this.objectIds = t && t.objectIds;
          }
        }, {
          key: "_setGeometryFilter",
          value: function () {
            var _setGeometryFilter2 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee3(t) {
              var e, i, s;
              return regeneratorRuntime.wrap(function _callee3$(_context3) {
                while (1) {
                  switch (_context3.prev = _context3.next) {
                    case 0:
                      if (!(!t || !t.geometry)) {
                        _context3.next = 2;
                        break;
                      }

                      return _context3.abrupt("return", (this._spatialQueryOperator = null, this.geometry = null, void (this.spatialRel = null)));

                    case 2:
                      e = t.geometry;
                      i = t.spatialRel || "esriSpatialRelIntersects";
                      _context3.next = 6;
                      return Object(_chunks_spatialQuerySupport_js__WEBPACK_IMPORTED_MODULE_7__["g"])(i, e, this._serviceInfo.geometryType, this._serviceInfo.hasZ, this._serviceInfo.hasM);

                    case 6:
                      s = _context3.sent;
                      Object(_geometry_support_boundsUtils_js__WEBPACK_IMPORTED_MODULE_4__["getBoundsXY"])(this._geometryBounds, e), this._spatialQueryOperator = s, this.geometry = e, this.spatialRel = i;

                    case 8:
                    case "end":
                      return _context3.stop();
                  }
                }
              }, _callee3, this);
            }));

            function _setGeometryFilter(_x4) {
              return _setGeometryFilter2.apply(this, arguments);
            }

            return _setGeometryFilter;
          }()
        }, {
          key: "_setTimeFilter",
          value: function _setTimeFilter(t) {
            if (this.timeExtent = this._timeOperator = null, t && t.timeExtent) if (this._serviceInfo.timeInfo) this.timeExtent = t.timeExtent, this._timeOperator = Object(_timeSupport_js__WEBPACK_IMPORTED_MODULE_8__["getTimeOperator"])(this._serviceInfo.timeInfo, t.timeExtent, _views_2d_layers_features_FeatureStore2D_js__WEBPACK_IMPORTED_MODULE_9__["featureAdapter"]);else {
              var e = new _core_Error_js__WEBPACK_IMPORTED_MODULE_2__["default"]("feature-layer-view:time-filter-not-available", "Unable to apply time filter, as layer doesn't have time metadata.", t.timeExtent);

              _.error(e);
            }
          }
        }, {
          key: "_applyFilter",
          value: function _applyFilter(t) {
            return this._filterByGeometry(t) && this._filterById(t) && this._filterByTime(t) && this._filterByExpression(t);
          }
        }, {
          key: "_filterByExpression",
          value: function _filterByExpression(t) {
            return !this.where || this._clause(t);
          }
        }, {
          key: "_filterById",
          value: function _filterById(t) {
            return (!this._idsToHide || !this._idsToHide.size || !this._idsToHide.has(t.getObjectId())) && (!this._idsToShow || !this._idsToShow.size || this._idsToShow.has(t.getObjectId()));
          }
        }, {
          key: "_filterByGeometry",
          value: function _filterByGeometry(t) {
            if (!this.geometry) return !0;
            var e = t.readHydratedGeometry();
            return !!e && this._spatialQueryOperator(e);
          }
        }, {
          key: "_filterByTime",
          value: function _filterByTime(e) {
            return !Object(_core_maybe_js__WEBPACK_IMPORTED_MODULE_0__["isSome"])(this._timeOperator) || this._timeOperator(e);
          }
        }, {
          key: "_resetAllHiddenIds",
          value: function _resetAllHiddenIds() {
            var _this3 = this;

            var t = [];
            return this._idToVisibility.forEach(function (e, i) {
              1 & e || (_this3._idToVisibility.set(i, 1), t.push(i));
            }), t;
          }
        }]);

        return _class;
      }();
      /***/

    },

    /***/
    "IFAU":
    /*!**********************************************************************************!*\
      !*** ./node_modules/@arcgis/core/views/2d/layers/features/support/whereUtils.js ***!
      \**********************************************************************************/

    /*! exports provided: createWhereClause */

    /***/
    function IFAU(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "createWhereClause", function () {
        return s;
      });
      /* harmony import */


      var _core_Logger_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ../../../../../core/Logger.js */
      "6S2I");
      /* harmony import */


      var _core_Error_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ../../../../../core/Error.js */
      "zlDU");
      /*
      All material copyright ESRI, All Rights Reserved, unless otherwise specified.
      See https://js.arcgis.com/4.18/esri/copyright.txt for details.
      */


      var t = _core_Logger_js__WEBPACK_IMPORTED_MODULE_0__["default"].getLogger("esri.views.2d.layers.features.support.whereUtils"),
          a = {
        getAttribute: function getAttribute(e, r) {
          return e.field(r);
        }
      };

      function s(_x5, _x6) {
        return _s.apply(this, arguments);
      }
      /***/


      function _s() {
        _s = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee4(e, s) {
          var n, o, _e;

          return regeneratorRuntime.wrap(function _callee4$(_context4) {
            while (1) {
              switch (_context4.prev = _context4.next) {
                case 0:
                  _context4.next = 2;
                  return Promise.all(
                  /*! import() | core-sql-WhereClause-js */
                  [__webpack_require__.e("default~arcade-featureSetUtils-js~arcade-functions-featuresetbase-js~arcade-functions-featuresetgeom~0707428b"), __webpack_require__.e("core-sql-WhereClause-js")]).then(__webpack_require__.bind(null,
                  /*! ../../../../../core/sql/WhereClause.js */
                  "ZqIb"));

                case 2:
                  n = _context4.sent;
                  _context4.prev = 3;
                  o = n.WhereClause.create(e, s);

                  if (!o.isStandardized) {
                    _e = new _core_Error_js__WEBPACK_IMPORTED_MODULE_1__["default"]("mapview - bad input", "Unable to apply filter's definition expression, as expression is not standardized.", o);
                    t.error(_e);
                  }

                  return _context4.abrupt("return", function (e) {
                    var r = e.readArcadeFeature();
                    return o.testFeature(r, a);
                  });

                case 9:
                  _context4.prev = 9;
                  _context4.t0 = _context4["catch"](3);
                  return _context4.abrupt("return", (t.warn("mapview-bad-where-clause", "Encountered an error when evaluating where clause", e), function (e) {
                    return !0;
                  }));

                case 12:
                case "end":
                  return _context4.stop();
              }
            }
          }, _callee4, null, [[3, 9]]);
        }));
        return _s.apply(this, arguments);
      }
    }
  }]);
})();
//# sourceMappingURL=layers-graphics-data-FeatureFilter-js-es5.js.map