(function () {
  function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

  function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

  function _iterableToArrayLimit(arr, i) { if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr))) return; var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

  function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

  function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }

  function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

  function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && Symbol.iterator in Object(iter)) return Array.from(iter); }

  function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }

  function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

  function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

  function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

  function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

  function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

  function _createForOfIteratorHelper(o, allowArrayLike) { var it; if (typeof Symbol === "undefined" || o[Symbol.iterator] == null) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e24) { throw _e24; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = o[Symbol.iterator](); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e25) { didErr = true; err = _e25; }, f: function f() { try { if (!normalCompletion && it["return"] != null) it["return"](); } finally { if (didErr) throw err; } } }; }

  function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

  function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["default~layers-graphics-sources-geojson-GeoJSONSourceWorker-js~layers-graphics-sources-support-CSVSo~030922b1"], {
    /***/
    "1/KW":
    /*!*****************************************************!*\
      !*** ./node_modules/@arcgis/core/core/ItemCache.js ***!
      \*****************************************************/

    /*! exports provided: default */

    /***/
    function KW(module, __webpack_exports__, __webpack_require__) {
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
          value: function put(t, e) {
            this._storage.put(t, e, 1, 1);
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
        }]);

        return _class;
      }();
      /***/

    },

    /***/
    "3pdw":
    /*!****************************************************************!*\
      !*** ./node_modules/@arcgis/core/core/sql/WhereClauseCache.js ***!
      \****************************************************************/

    /*! exports provided: WhereClauseCache */

    /***/
    function pdw(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "WhereClauseCache", function () {
        return c;
      });
      /* harmony import */


      var _ItemCache_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ../ItemCache.js */
      "1/KW");
      /* harmony import */


      var _WhereClause_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./WhereClause.js */
      "ZqIb");
      /*
      All material copyright ESRI, All Rights Reserved, unless otherwise specified.
      See https://js.arcgis.com/4.18/esri/copyright.txt for details.
      */


      var c = /*#__PURE__*/function () {
        function c(e, _c) {
          _classCallCheck(this, c);

          this._cache = new _ItemCache_js__WEBPACK_IMPORTED_MODULE_0__["default"](e), this._invalidCache = new _ItemCache_js__WEBPACK_IMPORTED_MODULE_0__["default"](_c);
        }

        _createClass(c, [{
          key: "get",
          value: function get(t, _c2) {
            var i = "".concat(_c2.uid, ":").concat(t),
                r = this._cache.get(i);

            if (r) return r;
            if (void 0 !== this._invalidCache.get(i)) return null;

            try {
              var _r = _WhereClause_js__WEBPACK_IMPORTED_MODULE_1__["WhereClause"].create(t, _c2);

              return this._cache.put(i, _r), _r;
            } catch (_unused) {
              return this._invalidCache.put(i, null), null;
            }
          }
        }]);

        return c;
      }();
      /***/

    },

    /***/
    "J6ET":
    /*!*****************************************************************************!*\
      !*** ./node_modules/@arcgis/core/layers/graphics/data/QueryEngineResult.js ***!
      \*****************************************************************************/

    /*! exports provided: default */

    /***/
    function J6ET(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony import */


      var _core_maybe_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ../../../core/maybe.js */
      "srIe");
      /* harmony import */


      var _core_promiseUtils_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ../../../core/promiseUtils.js */
      "9MzC");
      /* harmony import */


      var _geometry_support_spatialReferenceUtils_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ../../../geometry/support/spatialReferenceUtils.js */
      "f4Nx");
      /* harmony import */


      var _featureConversionUtils_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ../featureConversionUtils.js */
      "ZlUD");
      /* harmony import */


      var _projectionSupport_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ./projectionSupport.js */
      "HsO1");
      /* harmony import */


      var _geometry_support_quantizationUtils_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ../../../geometry/support/quantizationUtils.js */
      "AIxD");
      /* harmony import */


      var _attributeSupport_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ./attributeSupport.js */
      "wauK");
      /* harmony import */


      var _AttributesBuilder_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! ./AttributesBuilder.js */
      "WRMU");
      /* harmony import */


      var _chunks_spatialQuerySupport_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! ../../../chunks/spatialQuerySupport.js */
      "1Rg/");
      /* harmony import */


      var _timeSupport_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! ./timeSupport.js */
      "q7ja");
      /*
      All material copyright ESRI, All Rights Reserved, unless otherwise specified.
      See https://js.arcgis.com/4.18/esri/copyright.txt for details.
      */


      function g(t) {
        return t.substr(24, 12) + t.substr(19, 4) + t.substr(16, 2) + t.substr(14, 2) + t.substr(11, 2) + t.substr(9, 2) + t.substr(6, 2) + t.substr(4, 2) + t.substr(2, 2) + t.substr(0, 2);
      }

      function y(t, e, s) {
        return (s ? t > e : t < e) ? -1 : (s ? t < e : t > e) ? 1 : 0;
      }

      function I(t, e, s) {
        return s ? e - t : t - e;
      }

      function b(t, e, s, i) {
        if (s && "esriFieldTypeDate" === s.type) {
          var _s = new Date(t).getTime(),
              r = new Date(e).getTime();

          if (!isNaN(_s) && !isNaN(r)) return I(_s, r, i);
        }

        if ("number" == typeof t && "number" == typeof e) return I(t, e, i);

        if ("string" == typeof t && "string" == typeof e) {
          var _r2 = t.toUpperCase(),
              n = e.toUpperCase();

          return !s || "esriFieldTypeGUID" !== s.type && "esriFieldTypeGlobalID" !== s.type ? y(_r2, n, i) : y(g(_r2), g(n), i);
        }

        return i ? 1 : -1;
      }

      var x = /*#__PURE__*/function () {
        function x(t, e, s) {
          _classCallCheck(this, x);

          this.items = t, this.queryGeometry = e, this.definitionExpression = s.definitionExpression, this.geometryType = s.geometryType, this.hasM = s.hasM, this.hasZ = s.hasZ, this.objectIdField = s.objectIdField, this.spatialReference = s.spatialReference, this.fieldsIndex = s.fieldsIndex, this.timeInfo = s.timeInfo, this.featureAdapter = s.featureAdapter, this.aggregateAdapter = s.aggregateAdapter;
        }

        _createClass(x, [{
          key: "size",
          get: function get() {
            return this.items.length;
          }
        }, {
          key: "createQueryResponseForCount",
          value: function createQueryResponseForCount(t) {
            var e = new _AttributesBuilder_js__WEBPACK_IMPORTED_MODULE_7__["default"](t, this.featureAdapter, this.fieldsIndex);
            if (!t.outStatistics) return e.countDistinctValues(this.items);
            var s = t.groupByFieldsForStatistics,
                i = t.having;
            if (!!!(null == s ? void 0 : s.length)) return 1;
            var r = new Map(),
                n = new Map(),
                a = new Set(),
                o = t.outStatistics;

            var _iterator = _createForOfIteratorHelper(o),
                _step;

            try {
              for (_iterator.s(); !(_step = _iterator.n()).done;) {
                var _t = _step.value;
                var _o = _t.statisticType,
                    u = "exceedslimit" !== _o ? _t.onStatisticField : void 0;

                if (!n.has(u)) {
                  var _t2 = [];

                  var _iterator2 = _createForOfIteratorHelper(s),
                      _step2;

                  try {
                    for (_iterator2.s(); !(_step2 = _iterator2.n()).done;) {
                      var _i = _step2.value;

                      var _s2 = this._getAttributeValues(e, _i, r);

                      _t2.push(_s2);
                    }
                  } catch (err) {
                    _iterator2.e(err);
                  } finally {
                    _iterator2.f();
                  }

                  n.set(u, this._calculateUniqueValues(_t2));
                }

                var l = n.get(u);

                for (var _t3 in l) {
                  var _l$_t = l[_t3],
                      _s3 = _l$_t.data,
                      _r3 = _l$_t.items,
                      _n = _s3.join(",");

                  i && !e.validateItems(_r3, i) || a.add(_n);
                }
              }
            } catch (err) {
              _iterator.e(err);
            } finally {
              _iterator.f();
            }

            return a.size;
          }
        }, {
          key: "createQueryResponse",
          value: function createQueryResponse(t) {
            var e;

            if (t.outStatistics) {
              e = t.outStatistics.some(function (t) {
                return "exceedslimit" === t.statisticType;
              }) ? this._createExceedsLimitQueryResponse(t) : this._createStatisticsQueryResponse(t);
            } else e = this._createFeatureQueryResponse(t);

            return t.returnQueryGeometry && (Object(_geometry_support_spatialReferenceUtils_js__WEBPACK_IMPORTED_MODULE_2__["isValid"])(t.outSR) && !Object(_geometry_support_spatialReferenceUtils_js__WEBPACK_IMPORTED_MODULE_2__["equals"])(this.queryGeometry.spatialReference, t.outSR) ? e.queryGeometry = Object(_chunks_spatialQuerySupport_js__WEBPACK_IMPORTED_MODULE_8__["c"])(_objectSpread({
              spatialReference: t.outSR
            }, Object(_projectionSupport_js__WEBPACK_IMPORTED_MODULE_4__["project"])(this.queryGeometry, this.queryGeometry.spatialReference, t.outSR))) : e.queryGeometry = Object(_chunks_spatialQuerySupport_js__WEBPACK_IMPORTED_MODULE_8__["c"])(_objectSpread({
              spatialReference: t.outSR
            }, this.queryGeometry))), e;
          }
        }, {
          key: "executeAttributesQuery",
          value: function executeAttributesQuery(t) {
            var e = Object(_attributeSupport_js__WEBPACK_IMPORTED_MODULE_6__["getWhereClause"])(t.where, this.fieldsIndex);
            if (!e) return Object(_core_promiseUtils_js__WEBPACK_IMPORTED_MODULE_1__["resolve"])(this);

            if (e.isStandardized) {
              var i = 0;
              var r = [];

              var _iterator3 = _createForOfIteratorHelper(this.items),
                  _step3;

              try {
                for (_iterator3.s(); !(_step3 = _iterator3.n()).done;) {
                  var _t4 = _step3.value;
                  e.testFeature(_t4, this.featureAdapter) && (r[i++] = _t4);
                }
              } catch (err) {
                _iterator3.e(err);
              } finally {
                _iterator3.f();
              }

              var n = new x(r, this.queryGeometry, this);
              return n.definitionExpression = t.where, Object(_core_promiseUtils_js__WEBPACK_IMPORTED_MODULE_1__["resolve"])(n);
            }

            return Object(_core_promiseUtils_js__WEBPACK_IMPORTED_MODULE_1__["reject"])(new TypeError("Where clause is not standardized"));
          }
        }, {
          key: "executeAggregateIdsQuery",
          value: function executeAggregateIdsQuery(e) {
            if (!e.aggregateIds || !e.aggregateIds.length || Object(_core_maybe_js__WEBPACK_IMPORTED_MODULE_0__["isNone"])(this.aggregateAdapter)) return Object(_core_promiseUtils_js__WEBPACK_IMPORTED_MODULE_1__["resolve"])(this);
            var i = new Set();

            var _iterator4 = _createForOfIteratorHelper(e.aggregateIds),
                _step4;

            try {
              for (_iterator4.s(); !(_step4 = _iterator4.n()).done;) {
                var t = _step4.value;
                this.aggregateAdapter.getFeatureObjectIds(t).forEach(function (t) {
                  return i.add(t);
                });
              }
            } catch (err) {
              _iterator4.e(err);
            } finally {
              _iterator4.f();
            }

            var r = this.featureAdapter.getObjectId;
            return Object(_core_promiseUtils_js__WEBPACK_IMPORTED_MODULE_1__["resolve"])(new x(this.items.filter(function (t) {
              return i.has(r(t));
            }), this.queryGeometry, this));
          }
        }, {
          key: "executeObjectIdsQuery",
          value: function executeObjectIdsQuery(t) {
            if (!t.objectIds || !t.objectIds.length) return Object(_core_promiseUtils_js__WEBPACK_IMPORTED_MODULE_1__["resolve"])(this);
            var e = new Set(t.objectIds),
                i = this.featureAdapter.getObjectId;
            return Object(_core_promiseUtils_js__WEBPACK_IMPORTED_MODULE_1__["resolve"])(new x(this.items.filter(function (t) {
              return e.has(i(t));
            }), this.queryGeometry, this));
          }
        }, {
          key: "executeTimeQuery",
          value: function executeTimeQuery(t) {
            var i = Object(_timeSupport_js__WEBPACK_IMPORTED_MODULE_9__["getTimeOperator"])(this.timeInfo, t.timeExtent, this.featureAdapter);
            if (!Object(_core_maybe_js__WEBPACK_IMPORTED_MODULE_0__["isSome"])(i)) return Object(_core_promiseUtils_js__WEBPACK_IMPORTED_MODULE_1__["resolve"])(this);
            var r = this.items.filter(i);
            return Object(_core_promiseUtils_js__WEBPACK_IMPORTED_MODULE_1__["resolve"])(new x(r, this.queryGeometry, this));
          }
        }, {
          key: "filterLatest",
          value: function filterLatest() {
            var _this$timeInfo = this.timeInfo,
                t = _this$timeInfo.trackIdField,
                e = _this$timeInfo.startTimeField,
                i = _this$timeInfo.endTimeField,
                r = i || e,
                n = new Map(),
                a = this.featureAdapter.getAttribute;

            var _iterator5 = _createForOfIteratorHelper(this.items),
                _step5;

            try {
              for (_iterator5.s(); !(_step5 = _iterator5.n()).done;) {
                var _e = _step5.value;

                var s = a(_e, t),
                    _i2 = a(_e, r),
                    _o2 = n.get(s);

                (!_o2 || _i2 > a(_o2, r)) && n.set(s, _e);
              }
            } catch (err) {
              _iterator5.e(err);
            } finally {
              _iterator5.f();
            }

            var o = Array.from(n.values());
            return Object(_core_promiseUtils_js__WEBPACK_IMPORTED_MODULE_1__["resolve"])(new x(o, this.queryGeometry, this));
          }
        }, {
          key: "project",
          value: function () {
            var _project = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(t) {
              var _this = this;

              var e, s;
              return regeneratorRuntime.wrap(function _callee$(_context) {
                while (1) {
                  switch (_context.prev = _context.next) {
                    case 0:
                      if (!(!t || Object(_geometry_support_spatialReferenceUtils_js__WEBPACK_IMPORTED_MODULE_2__["equals"])(this.spatialReference, t))) {
                        _context.next = 2;
                        break;
                      }

                      return _context.abrupt("return", this);

                    case 2:
                      e = this.featureAdapter;
                      _context.next = 5;
                      return Object(_projectionSupport_js__WEBPACK_IMPORTED_MODULE_4__["projectMany"])(this.items.map(function (t) {
                        return Object(_chunks_spatialQuerySupport_js__WEBPACK_IMPORTED_MODULE_8__["e"])(_this.geometryType, _this.hasZ, _this.hasM, e.getGeometry(t));
                      }), this.spatialReference, t);

                    case 5:
                      s = _context.sent.map(function (t, s) {
                        return e.cloneWithGeometry(_this.items[s], Object(_featureConversionUtils_js__WEBPACK_IMPORTED_MODULE_3__["convertFromGeometry"])(t, _this.hasZ, _this.hasM));
                      });
                      return _context.abrupt("return", new x(s, this.queryGeometry, {
                        definitionExpression: this.definitionExpression,
                        geometryType: this.geometryType,
                        hasM: this.hasM,
                        hasZ: this.hasZ,
                        objectIdField: this.objectIdField,
                        spatialReference: t,
                        fieldsIndex: this.fieldsIndex,
                        timeInfo: this.timeInfo,
                        featureAdapter: this.featureAdapter
                      }));

                    case 7:
                    case "end":
                      return _context.stop();
                  }
                }
              }, _callee, this);
            }));

            function project(_x2) {
              return _project.apply(this, arguments);
            }

            return project;
          }()
        }, {
          key: "_sortFeatures",
          value: function _sortFeatures(t, e, s) {
            var _this2 = this;

            if (t.length > 1 && e && e.length) {
              var _iterator6 = _createForOfIteratorHelper(e.reverse()),
                  _step6;

              try {
                var _loop = function _loop() {
                  var i = _step6.value;

                  var e = i.split(" "),
                      r = e[0],
                      n = _this2.fieldsIndex.get(r),
                      a = e[1] && "desc" === e[1].toLowerCase();

                  t.sort(function (t, e) {
                    return b(s(t, r, n), s(e, r, n), n, a);
                  });
                };

                for (_iterator6.s(); !(_step6 = _iterator6.n()).done;) {
                  _loop();
                }
              } catch (err) {
                _iterator6.e(err);
              } finally {
                _iterator6.f();
              }
            }
          }
        }, {
          key: "_createFeatureQueryResponse",
          value: function _createFeatureQueryResponse(t) {
            var _this3 = this;

            var e = this.items,
                s = this.geometryType,
                i = this.hasM,
                r = this.hasZ,
                n = this.objectIdField,
                a = this.spatialReference,
                o = t.outFields,
                u = t.outSR,
                c = t.quantizationParameters,
                h = t.resultRecordCount,
                d = t.resultOffset,
                m = t.returnZ,
                p = t.returnM,
                g = null != h && e.length > (d || 0) + h,
                y = o && (o.indexOf("*") > -1 ? _toConsumableArray(this.fieldsIndex.fields) : o.map(function (t) {
              return _this3.fieldsIndex.get(t);
            }));
            return {
              exceededTransferLimit: g,
              features: this._createFeatures(t, e),
              fields: y,
              geometryType: s,
              hasM: i && p,
              hasZ: r && m,
              objectIdFieldName: n,
              spatialReference: Object(_chunks_spatialQuerySupport_js__WEBPACK_IMPORTED_MODULE_8__["c"])(u || a),
              transform: c && Object(_geometry_support_quantizationUtils_js__WEBPACK_IMPORTED_MODULE_5__["toQuantizationTransform"])(c) || null
            };
          }
        }, {
          key: "_createFeatures",
          value: function _createFeatures(t, e) {
            var s = new _AttributesBuilder_js__WEBPACK_IMPORTED_MODULE_7__["default"](t, this.featureAdapter, this.fieldsIndex),
                i = this.hasM,
                r = this.hasZ,
                n = t.orderByFields,
                a = t.quantizationParameters,
                o = t.returnGeometry,
                u = t.returnCentroid,
                c = t.maxAllowableOffset,
                f = t.resultOffset,
                p = t.resultRecordCount,
                _t$returnZ = t.returnZ,
                g = _t$returnZ === void 0 ? !1 : _t$returnZ,
                _t$returnM = t.returnM,
                y = _t$returnM === void 0 ? !1 : _t$returnM,
                I = r && g,
                b = i && y;
            var _x = [],
                F = 0;

            var T = _toConsumableArray(e);

            if (this._sortFeatures(T, n, function (t, e, i) {
              return s.getFieldValue(t, e, i);
            }), o || u) {
              var _t5 = Object(_geometry_support_quantizationUtils_js__WEBPACK_IMPORTED_MODULE_5__["toQuantizationTransform"])(a);

              if (o && !u) {
                var _iterator7 = _createForOfIteratorHelper(T),
                    _step7;

                try {
                  for (_iterator7.s(); !(_step7 = _iterator7.n()).done;) {
                    var _e2 = _step7.value;
                    _x[F++] = {
                      attributes: s.getAttributes(_e2),
                      geometry: Object(_chunks_spatialQuerySupport_js__WEBPACK_IMPORTED_MODULE_8__["e"])(this.geometryType, this.hasZ, this.hasM, this.featureAdapter.getGeometry(_e2), c, _t5, I, b)
                    };
                  }
                } catch (err) {
                  _iterator7.e(err);
                } finally {
                  _iterator7.f();
                }
              } else if (!o && u) {
                var _iterator8 = _createForOfIteratorHelper(T),
                    _step8;

                try {
                  for (_iterator8.s(); !(_step8 = _iterator8.n()).done;) {
                    var _e3 = _step8.value;
                    _x[F++] = {
                      attributes: s.getAttributes(_e3),
                      centroid: Object(_chunks_spatialQuerySupport_js__WEBPACK_IMPORTED_MODULE_8__["t"])(this, this.featureAdapter.getCentroid(_e3, this), _t5)
                    };
                  }
                } catch (err) {
                  _iterator8.e(err);
                } finally {
                  _iterator8.f();
                }
              } else {
                var _iterator9 = _createForOfIteratorHelper(T),
                    _step9;

                try {
                  for (_iterator9.s(); !(_step9 = _iterator9.n()).done;) {
                    var _e4 = _step9.value;
                    _x[F++] = {
                      attributes: s.getAttributes(_e4),
                      centroid: Object(_chunks_spatialQuerySupport_js__WEBPACK_IMPORTED_MODULE_8__["t"])(this, this.featureAdapter.getCentroid(_e4, this), _t5),
                      geometry: Object(_chunks_spatialQuerySupport_js__WEBPACK_IMPORTED_MODULE_8__["e"])(this.geometryType, this.hasZ, this.hasM, this.featureAdapter.getGeometry(_e4), c, _t5, I, b)
                    };
                  }
                } catch (err) {
                  _iterator9.e(err);
                } finally {
                  _iterator9.f();
                }
              }
            } else {
              var _iterator10 = _createForOfIteratorHelper(T),
                  _step10;

              try {
                for (_iterator10.s(); !(_step10 = _iterator10.n()).done;) {
                  var _t6 = _step10.value;

                  var _e5 = s.getAttributes(_t6);

                  _e5 && (_x[F++] = {
                    attributes: _e5
                  });
                }
              } catch (err) {
                _iterator10.e(err);
              } finally {
                _iterator10.f();
              }
            }

            var S = f || 0;

            if (null != p) {
              var _t7 = S + p;

              _x = _x.slice(S, Math.min(_x.length, _t7));
            }

            return _x;
          }
        }, {
          key: "_createExceedsLimitQueryResponse",
          value: function _createExceedsLimitQueryResponse(t) {
            var e = !1,
                s = Number.POSITIVE_INFINITY,
                i = Number.POSITIVE_INFINITY,
                r = Number.POSITIVE_INFINITY;

            var _iterator11 = _createForOfIteratorHelper(t.outStatistics),
                _step11;

            try {
              for (_iterator11.s(); !(_step11 = _iterator11.n()).done;) {
                var _e6 = _step11.value;

                if ("exceedslimit" === _e6.statisticType) {
                  s = null != _e6.maxPointCount ? _e6.maxPointCount : Number.POSITIVE_INFINITY, i = null != _e6.maxRecordCount ? _e6.maxRecordCount : Number.POSITIVE_INFINITY, r = null != _e6.maxVertexCount ? _e6.maxVertexCount : Number.POSITIVE_INFINITY;
                  break;
                }
              }
            } catch (err) {
              _iterator11.e(err);
            } finally {
              _iterator11.f();
            }

            if ("esriGeometryPoint" === this.geometryType) e = this.items.length > s;else if (this.items.length > i) e = !0;else {
              var _t8 = this.hasZ ? this.hasM ? 4 : 3 : this.hasM ? 3 : 2,
                  _s4 = this.featureAdapter;

              e = this.items.reduce(function (t, e) {
                var i = _s4.getGeometry(e);

                return t + (i && i.coords.length || 0);
              }, 0) / _t8 > r;
            }
            return {
              fields: [{
                name: "exceedslimit",
                type: "esriFieldTypeInteger",
                alias: "exceedslimit",
                sqlType: "sqlTypeInteger",
                domain: null,
                defaultValue: null
              }],
              features: [{
                attributes: {
                  exceedslimit: Number(e)
                }
              }]
            };
          }
        }, {
          key: "_createStatisticsQueryResponse",
          value: function _createStatisticsQueryResponse(t) {
            var _this4 = this;

            var e = {
              attributes: {}
            },
                s = [],
                i = new Map(),
                r = new Map(),
                n = new Map(),
                a = new Map(),
                o = new _AttributesBuilder_js__WEBPACK_IMPORTED_MODULE_7__["default"](t, this.featureAdapter, this.fieldsIndex),
                u = t.outStatistics,
                l = t.groupByFieldsForStatistics,
                c = t.having,
                f = t.orderByFields,
                d = l && l.length,
                m = !!d,
                p = m && l[0],
                g = m && !this.fieldsIndex.get(p);

            var _iterator12 = _createForOfIteratorHelper(u),
                _step12;

            try {
              for (_iterator12.s(); !(_step12 = _iterator12.n()).done;) {
                var _t9 = _step12.value;

                var _u = _t9.outStatisticFieldName,
                    h = _t9.statisticType,
                    _f = _t9,
                    _y = "exceedslimit" !== h ? _t9.onStatisticField : void 0,
                    _I = "percentile_disc" === h || "percentile_cont" === h,
                    _b = m && 1 === d && (_y === p || g) && "count" === h;

                if (m) {
                  if (!n.has(_y)) {
                    var _t11 = [];

                    var _iterator13 = _createForOfIteratorHelper(l),
                        _step13;

                    try {
                      for (_iterator13.s(); !(_step13 = _iterator13.n()).done;) {
                        var _e7 = _step13.value;

                        var _s5 = this._getAttributeValues(o, _e7, i);

                        _t11.push(_s5);
                      }
                    } catch (err) {
                      _iterator13.e(err);
                    } finally {
                      _iterator13.f();
                    }

                    n.set(_y, this._calculateUniqueValues(_t11));
                  }

                  var _t10 = n.get(_y);

                  var _loop2 = function _loop2(_e8) {
                    var _t10$_e = _t10[_e8],
                        s = _t10$_e.count,
                        r = _t10$_e.data,
                        n = _t10$_e.items,
                        h = _t10$_e.itemPositions,
                        d = r.join(",");

                    if (!c || o.validateItems(n, c)) {
                      var _t12 = a.get(d) || {
                        attributes: {}
                      };

                      var _e9 = null;
                      if (_b) _e9 = s;else {
                        var _t13 = _this4._getAttributeValues(o, _y, i),
                            _s6 = h.map(function (e) {
                          return _t13[e];
                        });

                        _e9 = _I && "statisticParameters" in _f ? _this4._getPercentileValue(_f, _s6) : _this4._getStatisticValue(_f, _s6);
                      }
                      _t12.attributes[_u] = _e9, l.forEach(function (e, s) {
                        return _t12.attributes[_this4.fieldsIndex.get(e) ? e : "EXPR_".concat(s + 1)] = r[s];
                      }), a.set(d, _t12);
                    }
                  };

                  for (var _e8 in _t10) {
                    _loop2(_e8);
                  }
                } else {
                  var _t14 = this._getAttributeValues(o, _y, i);

                  e.attributes[_u] = _I && "statisticParameters" in _f ? this._getPercentileValue(_f, _t14) : this._getStatisticValue(_f, _t14, r);
                }

                s.push({
                  name: _u,
                  alias: _u,
                  type: "esriFieldTypeDouble"
                });
              }
            } catch (err) {
              _iterator12.e(err);
            } finally {
              _iterator12.f();
            }

            var y = m ? Array.from(a.values()) : [e];
            return this._sortFeatures(y, f, function (t, e) {
              return t.attributes[e];
            }), {
              fields: s,
              features: y
            };
          }
        }, {
          key: "_getStatisticValue",
          value: function _getStatisticValue(t, e, s) {
            var i = t.onStatisticField,
                r = t.statisticType,
                n = s && s.has(i) ? s.get(i) : this._calculateStatistics(e);
            s && s.set(i, n);
            return n["var" === r ? "variance" : r];
          }
        }, {
          key: "_getPercentileValue",
          value: function _getPercentileValue(t, e) {
            var s = t.onStatisticField,
                i = t.statisticParameters,
                r = t.statisticType,
                n = i.value,
                a = i.orderBy,
                o = "desc" === a,
                u = this.fieldsIndex.get(s),
                l = _toConsumableArray(e).filter(function (t) {
              return null != t;
            }).sort(function (t, e) {
              return b(t, e, u, o);
            });

            return this._calculatePercentile(l, n, "percentile_disc" === r);
          }
        }, {
          key: "_getAttributeValues",
          value: function _getAttributeValues(t, e, s) {
            if (s.has(e)) return s.get(e);
            var i = this.fieldsIndex.get(e),
                r = this.items.map(function (s) {
              return t.getFieldValue(s, e, i);
            });
            return s.set(e, r), r;
          }
        }, {
          key: "_calculateStatistics",
          value: function _calculateStatistics(t) {
            var e = Number.POSITIVE_INFINITY,
                s = Number.NEGATIVE_INFINITY,
                i = null,
                r = null,
                n = null,
                a = null;
            var o = [];
            var u = 0;

            var _iterator14 = _createForOfIteratorHelper(t),
                _step14;

            try {
              for (_iterator14.s(); !(_step14 = _iterator14.n()).done;) {
                var _r4 = _step14.value;
                "string" == typeof _r4 ? u++ : null == _r4 || isNaN(_r4) || (i += _r4, e = Math.min(e, _r4), s = Math.max(s, _r4), o.push(_r4), u++);
              }
            } catch (err) {
              _iterator14.e(err);
            } finally {
              _iterator14.f();
            }

            if (u) {
              r = i / u;
              var _t15 = 0;

              var _iterator15 = _createForOfIteratorHelper(o),
                  _step15;

              try {
                for (_iterator15.s(); !(_step15 = _iterator15.n()).done;) {
                  var _e10 = _step15.value;
                  _t15 += Math.pow(_e10 - r, 2);
                }
              } catch (err) {
                _iterator15.e(err);
              } finally {
                _iterator15.f();
              }

              a = u > 1 ? _t15 / (u - 1) : 0, n = Math.sqrt(a);
            } else e = null, s = null;

            return {
              avg: r,
              count: u,
              max: s,
              min: e,
              stddev: n,
              sum: i,
              variance: a
            };
          }
        }, {
          key: "_calculateUniqueValues",
          value: function _calculateUniqueValues(t) {
            var e = {},
                s = this.items,
                i = s.length;

            for (var r = 0; r < i; r++) {
              var _i3 = s[r],
                  n = [];

              var _iterator16 = _createForOfIteratorHelper(t),
                  _step16;

              try {
                for (_iterator16.s(); !(_step16 = _iterator16.n()).done;) {
                  var _e11 = _step16.value;
                  n.push(_e11[r]);
                }
              } catch (err) {
                _iterator16.e(err);
              } finally {
                _iterator16.f();
              }

              var a = n.join(",");
              null == e[a] ? e[a] = {
                count: 1,
                data: n,
                items: [_i3],
                itemPositions: [r]
              } : (e[a].count++, e[a].items.push(_i3), e[a].itemPositions.push(r));
            }

            return e;
          }
        }, {
          key: "_calculatePercentile",
          value: function _calculatePercentile(t, e, s) {
            if (0 === t.length) return null;
            if (e <= 0) return t[0];
            if (e >= 1) return t[t.length - 1];
            var i = (t.length - 1) * e,
                r = Math.floor(i),
                n = r + 1,
                a = i % 1,
                o = t[r],
                u = t[n];
            return n >= t.length || s || "string" == typeof o || "string" == typeof u ? o : o * (1 - a) + u * a;
          }
        }]);

        return x;
      }();
      /* harmony default export */


      __webpack_exports__["default"] = x;
      /***/
    },

    /***/
    "WRMU":
    /*!*****************************************************************************!*\
      !*** ./node_modules/@arcgis/core/layers/graphics/data/AttributesBuilder.js ***!
      \*****************************************************************************/

    /*! exports provided: default */

    /***/
    function WRMU(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony import */


      var _core_maybe_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ../../../core/maybe.js */
      "srIe");
      /* harmony import */


      var _attributeSupport_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./attributeSupport.js */
      "wauK");
      /*
      All material copyright ESRI, All Rights Reserved, unless otherwise specified.
      See https://js.arcgis.com/4.18/esri/copyright.txt for details.
      */

      /* harmony default export */


      __webpack_exports__["default"] = /*#__PURE__*/function () {
        function _class2(t, a, r) {
          _classCallCheck(this, _class2);

          this._fieldDataCache = new Map(), this._returnDistinctMap = new Map(), this.returnDistinctValues = t.returnDistinctValues, this.fieldsIndex = r, this.featureAdapter = a;
          var u = t.outFields;

          if (u && -1 === u.indexOf("*")) {
            this.outFields = u;
            var _t16 = 0;

            var _iterator17 = _createForOfIteratorHelper(u),
                _step17;

            try {
              for (_iterator17.s(); !(_step17 = _iterator17.n()).done;) {
                var _a = _step17.value;

                var _u2 = Object(_attributeSupport_js__WEBPACK_IMPORTED_MODULE_1__["getExpressionFromFieldName"])(_a),
                    l = this.fieldsIndex.get(_u2),
                    n = l ? null : Object(_attributeSupport_js__WEBPACK_IMPORTED_MODULE_1__["getWhereClause"])(_u2, r),
                    c = l ? l.name : Object(_attributeSupport_js__WEBPACK_IMPORTED_MODULE_1__["getAliasFromFieldName"])(_a) || "FIELD_EXP_" + _t16++;

                this._fieldDataCache.set(_a, {
                  alias: c,
                  clause: n
                });
              }
            } catch (err) {
              _iterator17.e(err);
            } finally {
              _iterator17.f();
            }
          }
        }

        _createClass(_class2, [{
          key: "countDistinctValues",
          value: function countDistinctValues(t) {
            var _this5 = this;

            return this.returnDistinctValues ? (t.forEach(function (t) {
              return _this5.getAttributes(t);
            }), this._returnDistinctMap.size) : t.length;
          }
        }, {
          key: "getAttributes",
          value: function getAttributes(t) {
            var e = this._processAttributesForOutFields(t);

            return this._processAttributesForDistinctValues(e);
          }
        }, {
          key: "getFieldValue",
          value: function getFieldValue(t, e, i) {
            var a = i ? i.name : e;
            var r = null;
            return this._fieldDataCache.has(a) ? r = this._fieldDataCache.get(a).clause : i || (r = Object(_attributeSupport_js__WEBPACK_IMPORTED_MODULE_1__["getWhereClause"])(e, this.fieldsIndex), this._fieldDataCache.set(a, {
              alias: a,
              clause: r
            })), i ? this.featureAdapter.getAttribute(t, a) : r.calculateValue(t, this.featureAdapter);
          }
        }, {
          key: "validateItem",
          value: function validateItem(t, e) {
            return this._fieldDataCache.has(e) || this._fieldDataCache.set(e, {
              alias: e,
              clause: Object(_attributeSupport_js__WEBPACK_IMPORTED_MODULE_1__["getWhereClause"])(e, this.fieldsIndex)
            }), this._fieldDataCache.get(e).clause.testFeature(t, this.featureAdapter);
          }
        }, {
          key: "validateItems",
          value: function validateItems(t, e) {
            return this._fieldDataCache.has(e) || this._fieldDataCache.set(e, {
              alias: e,
              clause: Object(_attributeSupport_js__WEBPACK_IMPORTED_MODULE_1__["getWhereClause"])(e, this.fieldsIndex)
            }), this._fieldDataCache.get(e).clause.testSet(t, this.featureAdapter);
          }
        }, {
          key: "_processAttributesForOutFields",
          value: function _processAttributesForOutFields(t) {
            var e = this.outFields;
            if (!e || !e.length) return this.featureAdapter.getAttributes(t);
            var s = {};

            var _iterator18 = _createForOfIteratorHelper(e),
                _step18;

            try {
              for (_iterator18.s(); !(_step18 = _iterator18.n()).done;) {
                var i = _step18.value;

                var _this$_fieldDataCache = this._fieldDataCache.get(i),
                    _e12 = _this$_fieldDataCache.alias,
                    a = _this$_fieldDataCache.clause;

                s[_e12] = a ? a.calculateValue(t, this.featureAdapter) : this.featureAdapter.getAttribute(t, _e12);
              }
            } catch (err) {
              _iterator18.e(err);
            } finally {
              _iterator18.f();
            }

            return s;
          }
        }, {
          key: "_processAttributesForDistinctValues",
          value: function _processAttributesForDistinctValues(e) {
            if (Object(_core_maybe_js__WEBPACK_IMPORTED_MODULE_0__["isNone"])(e) || !this.returnDistinctValues) return e;
            var s = this.outFields,
                i = [];

            if (s) {
              var _iterator19 = _createForOfIteratorHelper(s),
                  _step19;

              try {
                for (_iterator19.s(); !(_step19 = _iterator19.n()).done;) {
                  var t = _step19.value;

                  var _this$_fieldDataCache2 = this._fieldDataCache.get(t),
                      _s7 = _this$_fieldDataCache2.alias;

                  i.push(e[_s7]);
                }
              } catch (err) {
                _iterator19.e(err);
              } finally {
                _iterator19.f();
              }
            } else for (var _t17 in e) {
              i.push(e[_t17]);
            }

            var a = "".concat((s || ["*"]).join(","), "=").concat(i.join(","));
            var r = this._returnDistinctMap.get(a) || 0;
            return this._returnDistinctMap.set(a, ++r), r > 1 ? null : e;
          }
        }]);

        return _class2;
      }();
      /***/

    },

    /***/
    "ZBG3":
    /*!***********************************************************************!*\
      !*** ./node_modules/@arcgis/core/layers/graphics/data/QueryEngine.js ***!
      \***********************************************************************/

    /*! exports provided: default, Feature */

    /***/
    function ZBG3(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "Feature", function () {
        return O;
      });
      /* harmony import */


      var _core_lang_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ../../../core/lang.js */
      "f/qv");
      /* harmony import */


      var _core_maybe_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ../../../core/maybe.js */
      "srIe");
      /* harmony import */


      var _core_Error_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ../../../core/Error.js */
      "zlDU");
      /* harmony import */


      var _core_promiseUtils_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ../../../core/promiseUtils.js */
      "9MzC");
      /* harmony import */


      var _geometry_support_spatialReferenceUtils_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ../../../geometry/support/spatialReferenceUtils.js */
      "f4Nx");
      /* harmony import */


      var _geometry_support_boundsUtils_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ../../../geometry/support/boundsUtils.js */
      "KLE9");
      /* harmony import */


      var _geometry_support_jsonUtils_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ../../../geometry/support/jsonUtils.js */
      "qatw");
      /* harmony import */


      var _core_unitUtils_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! ../../../core/unitUtils.js */
      "gEht");
      /* harmony import */


      var _geometry_support_aaBoundingRect_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! ../../../geometry/support/aaBoundingRect.js */
      "kYAx");
      /* harmony import */


      var _core_MemCache_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! ../../../core/MemCache.js */
      "rvq7");
      /* harmony import */


      var _support_PromiseQueue_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
      /*! ../../support/PromiseQueue.js */
      "MG+P");
      /* harmony import */


      var _support_FieldsIndex_js__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
      /*! ../../support/FieldsIndex.js */
      "gLc9");
      /* harmony import */


      var _QueryEngineCapabilities_js__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
      /*! ./QueryEngineCapabilities.js */
      "qUyK");
      /* harmony import */


      var _geometry_support_aaBoundingBox_js__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
      /*! ../../../geometry/support/aaBoundingBox.js */
      "QmHG");
      /* harmony import */


      var _projectionSupport_js__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(
      /*! ./projectionSupport.js */
      "HsO1");
      /* harmony import */


      var _attributeSupport_js__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(
      /*! ./attributeSupport.js */
      "wauK");
      /* harmony import */


      var _chunks_spatialQuerySupport_js__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(
      /*! ../../../chunks/spatialQuerySupport.js */
      "1Rg/");
      /* harmony import */


      var _timeSupport_js__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(
      /*! ./timeSupport.js */
      "q7ja");
      /* harmony import */


      var _QueryEngineResult_js__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(
      /*! ./QueryEngineResult.js */
      "J6ET");
      /*
      All material copyright ESRI, All Rights Reserved, unless otherwise specified.
      See https://js.arcgis.com/4.18/esri/copyright.txt for details.
      */


      var O = function O(e) {
        var t = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : null;
        var s = arguments.length > 2 ? arguments[2] : undefined;
        var i = arguments.length > 3 ? arguments[3] : undefined;
        var r = arguments.length > 4 ? arguments[4] : undefined;

        _classCallCheck(this, O);

        this.attributes = e, this.geometry = s, this.centroid = i, this.filterFlags = r, this.groupId = -1, this.displayId = t;
      };

      var q = new Set(),
          G = new _core_MemCache_js__WEBPACK_IMPORTED_MODULE_9__["MemCacheStorage"](2e6);
      var M = 0;
      var P = Object(_geometry_support_aaBoundingBox_js__WEBPACK_IMPORTED_MODULE_13__["create"])(),
          v = Object(_geometry_support_aaBoundingBox_js__WEBPACK_IMPORTED_MODULE_13__["create"])();
      /* harmony default export */

      __webpack_exports__["default"] = /*#__PURE__*/function () {
        function _class3(e) {
          var _this6 = this;

          _classCallCheck(this, _class3);

          this.capabilities = {
            query: _QueryEngineCapabilities_js__WEBPACK_IMPORTED_MODULE_12__["queryCapabilities"]
          }, this.geometryType = e.geometryType, this.hasM = e.hasM, this.hasZ = e.hasZ, this.objectIdField = e.objectIdField, this.spatialReference = e.spatialReference, this.definitionExpression = e.definitionExpression, this.featureStore = e.featureStore, this.aggregateAdapter = e.aggregateAdapter, this._changeHandle = this.featureStore.events.on("changed", function () {
            return _this6.clearCache();
          }), this.timeInfo = e.timeInfo, e.cacheSpatialQueries && (this._geometryQueryCache = new _core_MemCache_js__WEBPACK_IMPORTED_MODULE_9__["MemCache"](M++ + "$$", G)), this.fieldsIndex = new _support_FieldsIndex_js__WEBPACK_IMPORTED_MODULE_11__["default"](e.fields), e.scheduler && e.task && (this._frameQueue = new _support_PromiseQueue_js__WEBPACK_IMPORTED_MODULE_10__["default"](), this._frameTask = e.scheduler.registerTask(e.task, function (e) {
            return _this6._update(e);
          }, function () {
            return _this6._frameQueue.length > 0;
          }));
        }

        _createClass(_class3, [{
          key: "destroy",
          value: function destroy() {
            this._frameTask && (this._frameTask.remove(), this._frameTask = null, this._frameQueue.cancelAll(), this._frameQueue = null), this.clearCache(), this._geometryQueryCache && this._geometryQueryCache.destroy(), this._changeHandle && (this._changeHandle.remove(), this._changeHandle = null), this.fieldsIndex.destroy();
          }
        }, {
          key: "featureAdapter",
          get: function get() {
            return this.featureStore.featureAdapter;
          }
        }, {
          key: "fullExtent",
          get: function get() {
            var e = this.featureStore.fullBounds;
            return e ? {
              xmin: e[0],
              ymin: e[1],
              xmax: e[2],
              ymax: e[3],
              spatialReference: Object(_chunks_spatialQuerySupport_js__WEBPACK_IMPORTED_MODULE_16__["c"])(this.spatialReference)
            } : null;
          }
        }, {
          key: "timeExtent",
          get: function get() {
            return this.timeInfo ? (this._timeExtent || (this._timeExtent = Object(_timeSupport_js__WEBPACK_IMPORTED_MODULE_17__["getTimeExtent"])(this.timeInfo, this.featureStore)), this._timeExtent) : null;
          }
        }, {
          key: "clearCache",
          value: function clearCache() {
            this._geometryQueryCache && this._geometryQueryCache.clear(), this._allItems = null, this._timeExtent = null;
          }
        }, {
          key: "executeQuery",
          value: function () {
            var _executeQuery = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee2() {
              var _this7 = this;

              var t,
                  s,
                  i,
                  r,
                  _args2 = arguments;
              return regeneratorRuntime.wrap(function _callee2$(_context2) {
                while (1) {
                  switch (_context2.prev = _context2.next) {
                    case 0:
                      t = _args2.length > 0 && _args2[0] !== undefined ? _args2[0] : {};
                      s = _args2.length > 1 ? _args2[1] : undefined;
                      r = Object(_core_lang_js__WEBPACK_IMPORTED_MODULE_0__["clone"])(t);
                      _context2.prev = 3;
                      _context2.next = 6;
                      return this._schedule(function () {
                        return Object(_chunks_spatialQuerySupport_js__WEBPACK_IMPORTED_MODULE_16__["a"])(r, _this7.definitionExpression, _this7.spatialReference);
                      }, s);

                    case 6:
                      r = _context2.sent;
                      _context2.next = 9;
                      return this._reschedule(function () {
                        return _this7._checkQuerySupport(r);
                      }, s);

                    case 9:
                      r = _context2.sent;
                      _context2.next = 12;
                      return this._reschedule(function () {
                        return _this7._executeGeometryQuery(r, s);
                      }, s);

                    case 12:
                      i = _context2.sent;
                      _context2.next = 15;
                      return this._reschedule(function () {
                        return i.executeAggregateIdsQuery(r);
                      }, s);

                    case 15:
                      i = _context2.sent;
                      _context2.next = 18;
                      return this._reschedule(function () {
                        return i.executeObjectIdsQuery(r);
                      }, s);

                    case 18:
                      i = _context2.sent;
                      _context2.next = 21;
                      return this._reschedule(function () {
                        return i.executeTimeQuery(r);
                      }, s);

                    case 21:
                      i = _context2.sent;
                      _context2.next = 24;
                      return this._reschedule(function () {
                        return i.executeAttributesQuery(r);
                      }, s);

                    case 24:
                      i = _context2.sent;
                      _context2.next = 32;
                      break;

                    case 27:
                      _context2.prev = 27;
                      _context2.t0 = _context2["catch"](3);

                      if (!(_context2.t0 !== _chunks_spatialQuerySupport_js__WEBPACK_IMPORTED_MODULE_16__["Q"])) {
                        _context2.next = 31;
                        break;
                      }

                      throw _context2.t0;

                    case 31:
                      i = new _QueryEngineResult_js__WEBPACK_IMPORTED_MODULE_18__["default"]([], null, this);

                    case 32:
                      return _context2.abrupt("return", i.createQueryResponse(r));

                    case 33:
                    case "end":
                      return _context2.stop();
                  }
                }
              }, _callee2, this, [[3, 27]]);
            }));

            function executeQuery() {
              return _executeQuery.apply(this, arguments);
            }

            return executeQuery;
          }()
        }, {
          key: "executeQueryForCount",
          value: function () {
            var _executeQueryForCount = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee3() {
              var _this8 = this;

              var t,
                  s,
                  i,
                  r,
                  _args3 = arguments;
              return regeneratorRuntime.wrap(function _callee3$(_context3) {
                while (1) {
                  switch (_context3.prev = _context3.next) {
                    case 0:
                      t = _args3.length > 0 && _args3[0] !== undefined ? _args3[0] : {};
                      s = _args3.length > 1 ? _args3[1] : undefined;
                      r = Object(_core_lang_js__WEBPACK_IMPORTED_MODULE_0__["clone"])(t);
                      r.returnGeometry = !1, r.returnCentroid = !1, r.outSR = null;
                      _context3.prev = 4;
                      _context3.next = 7;
                      return this._schedule(function () {
                        return Object(_chunks_spatialQuerySupport_js__WEBPACK_IMPORTED_MODULE_16__["a"])(r, _this8.definitionExpression, _this8.spatialReference);
                      }, s);

                    case 7:
                      r = _context3.sent;
                      _context3.next = 10;
                      return this._reschedule(function () {
                        return _this8._checkQuerySupport(r);
                      }, s);

                    case 10:
                      r = _context3.sent;
                      _context3.next = 13;
                      return this._reschedule(function () {
                        return _this8._executeGeometryQuery(r, s);
                      }, s);

                    case 13:
                      i = _context3.sent;
                      _context3.next = 16;
                      return this._reschedule(function () {
                        return i.executeAggregateIdsQuery(r);
                      }, s);

                    case 16:
                      i = _context3.sent;
                      _context3.next = 19;
                      return this._reschedule(function () {
                        return i.executeObjectIdsQuery(r);
                      }, s);

                    case 19:
                      i = _context3.sent;
                      _context3.next = 22;
                      return this._reschedule(function () {
                        return i.executeTimeQuery(r);
                      }, s);

                    case 22:
                      i = _context3.sent;
                      _context3.next = 25;
                      return this._reschedule(function () {
                        return i.executeAttributesQuery(r);
                      }, s);

                    case 25:
                      i = _context3.sent;
                      _context3.next = 33;
                      break;

                    case 28:
                      _context3.prev = 28;
                      _context3.t0 = _context3["catch"](4);

                      if (!(_context3.t0 !== _chunks_spatialQuerySupport_js__WEBPACK_IMPORTED_MODULE_16__["Q"])) {
                        _context3.next = 32;
                        break;
                      }

                      throw _context3.t0;

                    case 32:
                      return _context3.abrupt("return", 0);

                    case 33:
                      return _context3.abrupt("return", i.createQueryResponseForCount(r));

                    case 34:
                    case "end":
                      return _context3.stop();
                  }
                }
              }, _callee3, this, [[4, 28]]);
            }));

            function executeQueryForCount() {
              return _executeQueryForCount.apply(this, arguments);
            }

            return executeQueryForCount;
          }()
        }, {
          key: "executeQueryForExtent",
          value: function () {
            var _executeQueryForExtent = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee4() {
              var _this9 = this;

              var t,
                  s,
                  i,
                  r,
                  a,
                  e,
                  _t18,
                  u,
                  _e13,
                  _e14,
                  _e15,
                  _args4 = arguments;

              return regeneratorRuntime.wrap(function _callee4$(_context4) {
                while (1) {
                  switch (_context4.prev = _context4.next) {
                    case 0:
                      t = _args4.length > 0 && _args4[0] !== undefined ? _args4[0] : {};
                      s = _args4.length > 1 ? _args4[1] : undefined;
                      r = Object(_core_lang_js__WEBPACK_IMPORTED_MODULE_0__["clone"])(t);
                      a = r.outSR;
                      _context4.prev = 4;
                      _context4.next = 7;
                      return this._schedule(function () {
                        return Object(_chunks_spatialQuerySupport_js__WEBPACK_IMPORTED_MODULE_16__["a"])(r, _this9.definitionExpression, _this9.spatialReference);
                      }, s);

                    case 7:
                      r = _context4.sent;
                      _context4.next = 10;
                      return this._reschedule(function () {
                        return _this9._checkQuerySupport(r);
                      }, s);

                    case 10:
                      r = _context4.sent;
                      r.returnGeometry = !0;
                      r.returnCentroid = !1;
                      r.outSR = null;
                      _context4.next = 16;
                      return this._reschedule(function () {
                        return _this9._executeGeometryQuery(r, s);
                      }, s);

                    case 16:
                      i = _context4.sent;
                      _context4.next = 19;
                      return this._reschedule(function () {
                        return i.executeAggregateIdsQuery(r);
                      }, s);

                    case 19:
                      i = _context4.sent;
                      _context4.next = 22;
                      return this._reschedule(function () {
                        return i.executeObjectIdsQuery(r);
                      }, s);

                    case 22:
                      i = _context4.sent;
                      _context4.next = 25;
                      return this._reschedule(function () {
                        return i.executeTimeQuery(r);
                      }, s);

                    case 25:
                      i = _context4.sent;
                      _context4.next = 28;
                      return this._reschedule(function () {
                        return i.executeAttributesQuery(r);
                      }, s);

                    case 28:
                      i = _context4.sent;
                      e = i.size;

                      if (e) {
                        _context4.next = 32;
                        break;
                      }

                      return _context4.abrupt("return", {
                        count: e,
                        extent: null
                      });

                    case 32:
                      Object(_geometry_support_aaBoundingBox_js__WEBPACK_IMPORTED_MODULE_13__["set"])(v, _geometry_support_aaBoundingBox_js__WEBPACK_IMPORTED_MODULE_13__["NEGATIVE_INFINITY"]), this.featureStore.forEachBounds(i.items, function (e) {
                        return Object(_geometry_support_aaBoundingBox_js__WEBPACK_IMPORTED_MODULE_13__["expandWithAABB"])(v, e);
                      }, P);
                      _t18 = {
                        xmin: v[0],
                        ymin: v[1],
                        xmax: v[3],
                        ymax: v[4],
                        spatialReference: Object(_chunks_spatialQuerySupport_js__WEBPACK_IMPORTED_MODULE_16__["c"])(this.spatialReference)
                      };
                      this.hasZ && isFinite(v[2]) && isFinite(v[5]) && (_t18.zmin = v[2], _t18.zmax = v[5]);
                      u = Object(_projectionSupport_js__WEBPACK_IMPORTED_MODULE_14__["project"])(_t18, i.spatialReference, a);

                      if (u.spatialReference = Object(_chunks_spatialQuerySupport_js__WEBPACK_IMPORTED_MODULE_16__["c"])(a || this.spatialReference), u.xmax - u.xmin == 0) {
                        _e13 = Object(_core_unitUtils_js__WEBPACK_IMPORTED_MODULE_7__["getMetersPerUnitForSR"])(u.spatialReference);
                        u.xmin -= _e13, u.xmax += _e13;
                      }

                      if (u.ymax - u.ymin == 0) {
                        _e14 = Object(_core_unitUtils_js__WEBPACK_IMPORTED_MODULE_7__["getMetersPerUnitForSR"])(u.spatialReference);
                        u.ymin -= _e14, u.ymax += _e14;
                      }

                      if (this.hasZ && null != u.zmin && null != u.zmax && u.zmax - u.zmin == 0) {
                        _e15 = Object(_core_unitUtils_js__WEBPACK_IMPORTED_MODULE_7__["getMetersPerUnitForSR"])(u.spatialReference);
                        u.zmin -= _e15, u.zmax += _e15;
                      }

                      return _context4.abrupt("return", {
                        count: e,
                        extent: u
                      });

                    case 42:
                      _context4.prev = 42;
                      _context4.t0 = _context4["catch"](4);

                      if (!(_context4.t0 === _chunks_spatialQuerySupport_js__WEBPACK_IMPORTED_MODULE_16__["Q"])) {
                        _context4.next = 46;
                        break;
                      }

                      return _context4.abrupt("return", {
                        count: 0,
                        extent: null
                      });

                    case 46:
                      throw _context4.t0;

                    case 47:
                    case "end":
                      return _context4.stop();
                  }
                }
              }, _callee4, this, [[4, 42]]);
            }));

            function executeQueryForExtent() {
              return _executeQueryForExtent.apply(this, arguments);
            }

            return executeQueryForExtent;
          }()
        }, {
          key: "executeQueryForIds",
          value: function () {
            var _executeQueryForIds = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee5() {
              var e,
                  t,
                  _args5 = arguments;
              return regeneratorRuntime.wrap(function _callee5$(_context5) {
                while (1) {
                  switch (_context5.prev = _context5.next) {
                    case 0:
                      e = _args5.length > 0 && _args5[0] !== undefined ? _args5[0] : {};
                      t = _args5.length > 1 ? _args5[1] : undefined;
                      return _context5.abrupt("return", this.executeQueryForIdSet(e, t).then(function (e) {
                        return Array.from(e);
                      }));

                    case 3:
                    case "end":
                      return _context5.stop();
                  }
                }
              }, _callee5, this);
            }));

            function executeQueryForIds() {
              return _executeQueryForIds.apply(this, arguments);
            }

            return executeQueryForIds;
          }()
        }, {
          key: "executeQueryForIdSet",
          value: function () {
            var _executeQueryForIdSet = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee6() {
              var _this10 = this;

              var t,
                  s,
                  i,
                  r,
                  e,
                  _t19,
                  _args6 = arguments;

              return regeneratorRuntime.wrap(function _callee6$(_context6) {
                while (1) {
                  switch (_context6.prev = _context6.next) {
                    case 0:
                      t = _args6.length > 0 && _args6[0] !== undefined ? _args6[0] : {};
                      s = _args6.length > 1 ? _args6[1] : undefined;
                      r = Object(_core_lang_js__WEBPACK_IMPORTED_MODULE_0__["clone"])(t);
                      r.returnGeometry = !1, r.returnCentroid = !1, r.outSR = null;
                      _context6.prev = 4;
                      _context6.next = 7;
                      return this._schedule(function () {
                        return Object(_chunks_spatialQuerySupport_js__WEBPACK_IMPORTED_MODULE_16__["a"])(r, _this10.definitionExpression, _this10.spatialReference);
                      }, s);

                    case 7:
                      r = _context6.sent;
                      _context6.next = 10;
                      return this._reschedule(function () {
                        return _this10._checkQuerySupport(r);
                      }, s);

                    case 10:
                      r = _context6.sent;
                      _context6.next = 13;
                      return this._reschedule(function () {
                        return _this10._executeGeometryQuery(r, s);
                      }, s);

                    case 13:
                      i = _context6.sent;
                      _context6.next = 16;
                      return this._reschedule(function () {
                        return i.executeAggregateIdsQuery(r);
                      }, s);

                    case 16:
                      i = _context6.sent;
                      _context6.next = 19;
                      return this._reschedule(function () {
                        return i.executeObjectIdsQuery(r);
                      }, s);

                    case 19:
                      i = _context6.sent;
                      _context6.next = 22;
                      return this._reschedule(function () {
                        return i.executeTimeQuery(r);
                      }, s);

                    case 22:
                      i = _context6.sent;
                      _context6.next = 25;
                      return this._reschedule(function () {
                        return i.executeAttributesQuery(r);
                      }, s);

                    case 25:
                      i = _context6.sent;
                      e = i.items, _t19 = new Set();
                      _context6.next = 29;
                      return this._reschedule(function () {
                        var _iterator20 = _createForOfIteratorHelper(e),
                            _step20;

                        try {
                          for (_iterator20.s(); !(_step20 = _iterator20.n()).done;) {
                            var _s8 = _step20.value;

                            _t19.add(i.featureAdapter.getObjectId(_s8));
                          }
                        } catch (err) {
                          _iterator20.e(err);
                        } finally {
                          _iterator20.f();
                        }
                      }, s);

                    case 29:
                      return _context6.abrupt("return", _t19);

                    case 32:
                      _context6.prev = 32;
                      _context6.t0 = _context6["catch"](4);

                      if (!(_context6.t0 === _chunks_spatialQuerySupport_js__WEBPACK_IMPORTED_MODULE_16__["Q"])) {
                        _context6.next = 36;
                        break;
                      }

                      return _context6.abrupt("return", new Set());

                    case 36:
                      throw _context6.t0;

                    case 37:
                    case "end":
                      return _context6.stop();
                  }
                }
              }, _callee6, this, [[4, 32]]);
            }));

            function executeQueryForIdSet() {
              return _executeQueryForIdSet.apply(this, arguments);
            }

            return executeQueryForIdSet;
          }()
        }, {
          key: "executeQueryForLatestObservations",
          value: function () {
            var _executeQueryForLatestObservations = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee7() {
              var _this11 = this;

              var t,
                  i,
                  r,
                  a,
                  _args7 = arguments;
              return regeneratorRuntime.wrap(function _callee7$(_context7) {
                while (1) {
                  switch (_context7.prev = _context7.next) {
                    case 0:
                      t = _args7.length > 0 && _args7[0] !== undefined ? _args7[0] : {};
                      i = _args7.length > 1 ? _args7[1] : undefined;

                      if (!(!this.timeInfo || !this.timeInfo.trackIdField)) {
                        _context7.next = 4;
                        break;
                      }

                      throw new _core_Error_js__WEBPACK_IMPORTED_MODULE_2__["default"]("feature-store:unsupported-query", "Missing timeInfo or timeInfo.trackIdField", {
                        query: t,
                        timeInfo: this.timeInfo
                      });

                    case 4:
                      a = Object(_core_lang_js__WEBPACK_IMPORTED_MODULE_0__["clone"])(t);
                      _context7.prev = 5;
                      _context7.next = 8;
                      return this._schedule(function () {
                        return Object(_chunks_spatialQuerySupport_js__WEBPACK_IMPORTED_MODULE_16__["a"])(a, _this11.definitionExpression, _this11.spatialReference);
                      }, i);

                    case 8:
                      a = _context7.sent;
                      _context7.next = 11;
                      return this._reschedule(function () {
                        return _this11._checkQuerySupport(a);
                      }, i);

                    case 11:
                      a = _context7.sent;
                      _context7.next = 14;
                      return this._reschedule(function () {
                        return _this11._executeGeometryQuery(a, i);
                      }, i);

                    case 14:
                      r = _context7.sent;
                      _context7.next = 17;
                      return this._reschedule(function () {
                        return r.executeAggregateIdsQuery(a);
                      }, i);

                    case 17:
                      r = _context7.sent;
                      _context7.next = 20;
                      return this._reschedule(function () {
                        return r.executeObjectIdsQuery(a);
                      }, i);

                    case 20:
                      r = _context7.sent;
                      _context7.next = 23;
                      return this._reschedule(function () {
                        return r.executeTimeQuery(a);
                      }, i);

                    case 23:
                      r = _context7.sent;
                      _context7.next = 26;
                      return this._reschedule(function () {
                        return r.executeAttributesQuery(a);
                      }, i);

                    case 26:
                      r = _context7.sent;
                      _context7.next = 29;
                      return this._reschedule(function () {
                        return r.filterLatest();
                      }, i);

                    case 29:
                      r = _context7.sent;
                      _context7.next = 37;
                      break;

                    case 32:
                      _context7.prev = 32;
                      _context7.t0 = _context7["catch"](5);

                      if (!(_context7.t0 !== _chunks_spatialQuerySupport_js__WEBPACK_IMPORTED_MODULE_16__["Q"])) {
                        _context7.next = 36;
                        break;
                      }

                      throw _context7.t0;

                    case 36:
                      r = new _QueryEngineResult_js__WEBPACK_IMPORTED_MODULE_18__["default"]([], null, this);

                    case 37:
                      return _context7.abrupt("return", r.createQueryResponse(a));

                    case 38:
                    case "end":
                      return _context7.stop();
                  }
                }
              }, _callee7, this, [[5, 32]]);
            }));

            function executeQueryForLatestObservations() {
              return _executeQueryForLatestObservations.apply(this, arguments);
            }

            return executeQueryForLatestObservations;
          }()
        }, {
          key: "_schedule",
          value: function () {
            var _schedule2 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee8(e, t) {
              return regeneratorRuntime.wrap(function _callee8$(_context8) {
                while (1) {
                  switch (_context8.prev = _context8.next) {
                    case 0:
                      return _context8.abrupt("return", this._frameQueue ? this._frameQueue.push(e, t) : e());

                    case 1:
                    case "end":
                      return _context8.stop();
                  }
                }
              }, _callee8, this);
            }));

            function _schedule(_x3, _x4) {
              return _schedule2.apply(this, arguments);
            }

            return _schedule;
          }()
        }, {
          key: "_reschedule",
          value: function () {
            var _reschedule2 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee9(e, t) {
              return regeneratorRuntime.wrap(function _callee9$(_context9) {
                while (1) {
                  switch (_context9.prev = _context9.next) {
                    case 0:
                      return _context9.abrupt("return", this._frameQueue ? this._frameQueue.unshift(e, t) : e());

                    case 1:
                    case "end":
                      return _context9.stop();
                  }
                }
              }, _callee9, this);
            }));

            function _reschedule(_x5, _x6) {
              return _reschedule2.apply(this, arguments);
            }

            return _reschedule;
          }()
        }, {
          key: "_update",
          value: function _update(e) {
            for (this._budget = e; !e.done && this._frameQueue && this._frameQueue.process();) {
              e.madeProgress();
            }

            this._budget = null;
          }
        }, {
          key: "_getAll",
          value: function _getAll() {
            if (!this._allItems) {
              var e = [];
              this.featureStore.forEach(function (t) {
                return e.push(t);
              }), this._allItems = new _QueryEngineResult_js__WEBPACK_IMPORTED_MODULE_18__["default"](e, null, this);
            }

            return this._allItems;
          }
        }, {
          key: "_executeGeometryQuery",
          value: function () {
            var _executeGeometryQuery2 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee12(e, s) {
              var _this12 = this;

              var i, u, n, o, h, _e16, c, l, _e18, t, r, a, _iterator21, _step21, _t20, d, _e19, f, m;

              return regeneratorRuntime.wrap(function _callee12$(_context12) {
                while (1) {
                  switch (_context12.prev = _context12.next) {
                    case 0:
                      i = e.geometry, u = e.outSR, n = e.spatialRel, o = Object(_geometry_support_spatialReferenceUtils_js__WEBPACK_IMPORTED_MODULE_4__["isValid"])(u) && !Object(_geometry_support_spatialReferenceUtils_js__WEBPACK_IMPORTED_MODULE_4__["equals"])(this.spatialReference, u), h = this._geometryQueryCache ? o ? JSON.stringify({
                        geometry: i,
                        spatialRelationship: n,
                        outSpatialReference: u
                      }) : JSON.stringify({
                        geometry: i,
                        spatialRelationship: n
                      }) : null;

                      if (!h) {
                        _context12.next = 5;
                        break;
                      }

                      _e16 = this._geometryQueryCache.get(h);

                      if (Object(_core_maybe_js__WEBPACK_IMPORTED_MODULE_1__["isUndefined"])(_e16)) {
                        _context12.next = 5;
                        break;
                      }

                      return _context12.abrupt("return", _e16);

                    case 5:
                      c = /*#__PURE__*/function () {
                        var _ref = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee10(t) {
                          var _e17;

                          return regeneratorRuntime.wrap(function _callee10$(_context10) {
                            while (1) {
                              switch (_context10.prev = _context10.next) {
                                case 0:
                                  if (!(o && (e.returnGeometry || e.returnCentroid))) {
                                    _context10.next = 5;
                                    break;
                                  }

                                  _context10.next = 3;
                                  return t.project(u);

                                case 3:
                                  _e17 = _context10.sent;
                                  return _context10.abrupt("return", (h && _this12._geometryQueryCache.put(h, _e17, _e17.size || 1), _e17));

                                case 5:
                                  return _context10.abrupt("return", (h && _this12._geometryQueryCache.put(h, t, t.size || 1), t));

                                case 6:
                                case "end":
                                  return _context10.stop();
                              }
                            }
                          }, _callee10);
                        }));

                        return function c(_x9) {
                          return _ref.apply(this, arguments);
                        };
                      }();

                      if (i) {
                        _context12.next = 8;
                        break;
                      }

                      return _context12.abrupt("return", c(this._getAll()));

                    case 8:
                      l = this.featureAdapter;

                      if (!("esriSpatialRelDisjoint" === n)) {
                        _context12.next = 23;
                        break;
                      }

                      _e18 = this._searchFeatures(this._getQueryBBoxes(i));

                      if (_e18.length) {
                        _context12.next = 13;
                        break;
                      }

                      return _context12.abrupt("return", c(this._getAll()));

                    case 13:
                      a = new Set();
                      _iterator21 = _createForOfIteratorHelper(_e18);

                      try {
                        for (_iterator21.s(); !(_step21 = _iterator21.n()).done;) {
                          _t20 = _step21.value;
                          a.add(l.getObjectId(_t20));
                        }
                      } catch (err) {
                        _iterator21.e(err);
                      } finally {
                        _iterator21.f();
                      }

                      _context12.next = 18;
                      return this._reschedule(function () {
                        var e = 0;
                        t = new Array(a.size), _this12.featureStore.forEach(function (s) {
                          return t[e++] = s;
                        }), r = a;
                      }, s);

                    case 18:
                      _context12.t0 = c;
                      _context12.next = 21;
                      return this._reschedule( /*#__PURE__*/_asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee11() {
                        var e;
                        return regeneratorRuntime.wrap(function _callee11$(_context11) {
                          while (1) {
                            switch (_context11.prev = _context11.next) {
                              case 0:
                                _context11.next = 2;
                                return Object(_chunks_spatialQuerySupport_js__WEBPACK_IMPORTED_MODULE_16__["g"])(n, i, _this12.geometryType, _this12.hasZ, _this12.hasM);

                              case 2:
                                e = _context11.sent;
                                _context11.t0 = _QueryEngineResult_js__WEBPACK_IMPORTED_MODULE_18__["default"];
                                _context11.next = 6;
                                return _this12._runSpatialFilter(t, function (t) {
                                  return !r.has(l.getObjectId(t)) || e(l.getGeometry(t));
                                }, s);

                              case 6:
                                _context11.t1 = _context11.sent;
                                _context11.t2 = i;
                                _context11.t3 = _this12;
                                return _context11.abrupt("return", new _context11.t0(_context11.t1, _context11.t2, _context11.t3));

                              case 10:
                              case "end":
                                return _context11.stop();
                            }
                          }
                        }, _callee11);
                      })), s);

                    case 21:
                      _context12.t1 = _context12.sent;
                      return _context12.abrupt("return", (0, _context12.t0)(_context12.t1));

                    case 23:
                      d = this._searchFeatures(this._getQueryBBoxes(i));

                      if (d.length) {
                        _context12.next = 27;
                        break;
                      }

                      _e19 = new _QueryEngineResult_js__WEBPACK_IMPORTED_MODULE_18__["default"]([], i, this);
                      return _context12.abrupt("return", (h && this._geometryQueryCache.put(h, _e19, _e19.size || 1), _e19));

                    case 27:
                      if (!this._canExecuteSoloPass(i, e)) {
                        _context12.next = 29;
                        break;
                      }

                      return _context12.abrupt("return", c(new _QueryEngineResult_js__WEBPACK_IMPORTED_MODULE_18__["default"](d, i, this)));

                    case 29:
                      _context12.next = 31;
                      return Object(_chunks_spatialQuerySupport_js__WEBPACK_IMPORTED_MODULE_16__["g"])(n, i, this.geometryType, this.hasZ, this.hasM);

                    case 31:
                      f = _context12.sent;
                      _context12.next = 34;
                      return this._runSpatialFilter(d, function (e) {
                        return f(l.getGeometry(e));
                      }, s);

                    case 34:
                      m = _context12.sent;
                      return _context12.abrupt("return", c(new _QueryEngineResult_js__WEBPACK_IMPORTED_MODULE_18__["default"](m, i, this)));

                    case 36:
                    case "end":
                      return _context12.stop();
                  }
                }
              }, _callee12, this);
            }));

            function _executeGeometryQuery(_x7, _x8) {
              return _executeGeometryQuery2.apply(this, arguments);
            }

            return _executeGeometryQuery;
          }()
        }, {
          key: "_runSpatialFilter",
          value: function () {
            var _runSpatialFilter2 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee14(e, t, s) {
              var _this13 = this;

              var i, r, a;
              return regeneratorRuntime.wrap(function _callee14$(_context14) {
                while (1) {
                  switch (_context14.prev = _context14.next) {
                    case 0:
                      if (t) {
                        _context14.next = 2;
                        break;
                      }

                      return _context14.abrupt("return", e);

                    case 2:
                      if (this._budget) {
                        _context14.next = 4;
                        break;
                      }

                      return _context14.abrupt("return", e.filter(function (e) {
                        return t(e);
                      }));

                    case 4:
                      i = 0;
                      r = new Array(), a = /*#__PURE__*/function () {
                        var _ref3 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee13() {
                          var u;
                          return regeneratorRuntime.wrap(function _callee13$(_context13) {
                            while (1) {
                              switch (_context13.prev = _context13.next) {
                                case 0:
                                  if (!(i < e.length)) {
                                    _context13.next = 10;
                                    break;
                                  }

                                  u = e[i];
                                  t(u) && r.push(u);
                                  _context13.t0 = _this13._budget.done;

                                  if (!_context13.t0) {
                                    _context13.next = 7;
                                    break;
                                  }

                                  _context13.next = 7;
                                  return _this13._reschedule(function () {
                                    return a();
                                  }, s);

                                case 7:
                                  ++i;

                                case 8:
                                  _context13.next = 0;
                                  break;

                                case 10:
                                case "end":
                                  return _context13.stop();
                              }
                            }
                          }, _callee13);
                        }));

                        return function a() {
                          return _ref3.apply(this, arguments);
                        };
                      }();
                      return _context14.abrupt("return", this._reschedule(function () {
                        return a();
                      }, s).then(function () {
                        return r;
                      }));

                    case 7:
                    case "end":
                      return _context14.stop();
                  }
                }
              }, _callee14, this);
            }));

            function _runSpatialFilter(_x10, _x11, _x12) {
              return _runSpatialFilter2.apply(this, arguments);
            }

            return _runSpatialFilter;
          }()
        }, {
          key: "_canExecuteSoloPass",
          value: function _canExecuteSoloPass(e, t) {
            var s = this.geometryType,
                i = t.spatialRel;
            return Object(_chunks_spatialQuerySupport_js__WEBPACK_IMPORTED_MODULE_16__["b"])(e) && ("esriSpatialRelEnvelopeIntersects" === i || "esriGeometryPoint" === s && ("esriSpatialRelIntersects" === i || "esriSpatialRelContains" === i || "esriSpatialRelWithin" === i));
          }
        }, {
          key: "_getQueryBBoxes",
          value: function _getQueryBBoxes(e) {
            if (Object(_chunks_spatialQuerySupport_js__WEBPACK_IMPORTED_MODULE_16__["b"])(e)) {
              if (Object(_geometry_support_jsonUtils_js__WEBPACK_IMPORTED_MODULE_6__["isExtent"])(e)) return [Object(_geometry_support_aaBoundingRect_js__WEBPACK_IMPORTED_MODULE_8__["fromValues"])(e.xmin, e.ymin, e.xmax, e.ymax)];
              if (Object(_geometry_support_jsonUtils_js__WEBPACK_IMPORTED_MODULE_6__["isPolygon"])(e)) return e.rings.map(function (e) {
                return Object(_geometry_support_aaBoundingRect_js__WEBPACK_IMPORTED_MODULE_8__["fromValues"])(Math.min(e[0][0], e[2][0]), Math.min(e[0][1], e[2][1]), Math.max(e[0][0], e[2][0]), Math.max(e[0][1], e[2][1]));
              });
            }

            return [Object(_geometry_support_boundsUtils_js__WEBPACK_IMPORTED_MODULE_5__["getBoundsXY"])(Object(_geometry_support_aaBoundingRect_js__WEBPACK_IMPORTED_MODULE_8__["create"])(), e)];
          }
        }, {
          key: "_searchFeatures",
          value: function _searchFeatures(e) {
            var _iterator22 = _createForOfIteratorHelper(e),
                _step22;

            try {
              for (_iterator22.s(); !(_step22 = _iterator22.n()).done;) {
                var _t21 = _step22.value;
                this.featureStore.forEachInBounds(_t21, function (e) {
                  q.add(e);
                });
              }
            } catch (err) {
              _iterator22.e(err);
            } finally {
              _iterator22.f();
            }

            var t = new Array(q.size);
            var s = 0;
            return q.forEach(function (e) {
              return t[s++] = e;
            }), q.clear(), t;
          }
        }, {
          key: "_checkQuerySupport",
          value: function () {
            var _checkQuerySupport2 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee15(e) {
              return regeneratorRuntime.wrap(function _callee15$(_context15) {
                while (1) {
                  switch (_context15.prev = _context15.next) {
                    case 0:
                      if (!(e.distance < 0 || null != e.geometryPrecision || e.multipatchOption || e.pixelSize || e.relationParam || e.text)) {
                        _context15.next = 2;
                        break;
                      }

                      throw new _core_Error_js__WEBPACK_IMPORTED_MODULE_2__["default"]("feature-store:unsupported-query", "Unsupported query options", {
                        query: e
                      });

                    case 2:
                      return _context15.abrupt("return", Object(_core_promiseUtils_js__WEBPACK_IMPORTED_MODULE_3__["all"])([this._checkAttributesQuerySupport(e), this._checkStatisticsQuerySupport(e), Object(_chunks_spatialQuerySupport_js__WEBPACK_IMPORTED_MODULE_16__["d"])(e, this.geometryType, this.spatialReference), Object(_projectionSupport_js__WEBPACK_IMPORTED_MODULE_14__["checkProjectionSupport"])(this.spatialReference, e.outSR)]).then(function () {
                        return e;
                      }));

                    case 3:
                    case "end":
                      return _context15.stop();
                  }
                }
              }, _callee15, this);
            }));

            function _checkQuerySupport(_x13) {
              return _checkQuerySupport2.apply(this, arguments);
            }

            return _checkQuerySupport;
          }()
        }, {
          key: "_checkAttributesQuerySupport",
          value: function _checkAttributesQuerySupport(e) {
            var t = e.outFields,
                i = e.orderByFields,
                r = e.returnDistinctValues,
                a = e.outStatistics,
                u = a ? a.map(function (e) {
              return e.outStatisticFieldName && e.outStatisticFieldName.toLowerCase();
            }) : [];

            if (i && i.length > 0) {
              var _e20 = " asc",
                  _t22 = " desc",
                  s = i.map(function (s) {
                var i = s.toLowerCase();
                return i.indexOf(_e20) > -1 ? i.split(_e20)[0] : i.indexOf(_t22) > -1 ? i.split(_t22)[0] : s;
              }).filter(function (e) {
                return -1 === u.indexOf(e);
              });
              Object(_attributeSupport_js__WEBPACK_IMPORTED_MODULE_15__["validateFields"])(this.fieldsIndex, s, "orderByFields contains missing fields");
            }

            if (t && t.length > 0) Object(_attributeSupport_js__WEBPACK_IMPORTED_MODULE_15__["validateFields"])(this.fieldsIndex, t, "outFields contains missing fields");else if (r) throw new _core_Error_js__WEBPACK_IMPORTED_MODULE_2__["default"]("feature-store:unsupported-query", "outFields should be specified for returnDistinctValues", {
              query: e
            });
            Object(_attributeSupport_js__WEBPACK_IMPORTED_MODULE_15__["validateWhere"])(this.fieldsIndex, e.where);
          }
        }, {
          key: "_checkStatisticsQuerySupport",
          value: function () {
            var _checkStatisticsQuerySupport2 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee16(e) {
              var t, i, r, a, u, _r5, _iterator23, _step23, _i4, _t23, _r6, _t24;

              return regeneratorRuntime.wrap(function _callee16$(_context16) {
                while (1) {
                  switch (_context16.prev = _context16.next) {
                    case 0:
                      t = e.outStatistics, i = e.groupByFieldsForStatistics, r = e.having, a = i && i.length, u = t && t.length;

                      if (!r) {
                        _context16.next = 5;
                        break;
                      }

                      if (!(!a || !u)) {
                        _context16.next = 4;
                        break;
                      }

                      throw new _core_Error_js__WEBPACK_IMPORTED_MODULE_2__["default"]("feature-store:unsupported-query", "outStatistics and groupByFieldsForStatistics should be specified with having", {
                        query: e
                      });

                    case 4:
                      Object(_attributeSupport_js__WEBPACK_IMPORTED_MODULE_15__["validateHaving"])(this.fieldsIndex, r, t);

                    case 5:
                      if (!u) {
                        _context16.next = 34;
                        break;
                      }

                      if (function (e) {
                        return e.every(function (e) {
                          return "exceedslimit" !== e.statisticType;
                        });
                      }(t)) {
                        _context16.next = 8;
                        break;
                      }

                      return _context16.abrupt("return");

                    case 8:
                      _r5 = t.map(function (e) {
                        return e.onStatisticField;
                      });
                      Object(_attributeSupport_js__WEBPACK_IMPORTED_MODULE_15__["validateFields"])(this.fieldsIndex, _r5, "onStatisticFields contains missing fields"), a && Object(_attributeSupport_js__WEBPACK_IMPORTED_MODULE_15__["validateFields"])(this.fieldsIndex, i, "groupByFieldsForStatistics contains missing fields");
                      _iterator23 = _createForOfIteratorHelper(t);
                      _context16.prev = 11;

                      _iterator23.s();

                    case 13:
                      if ((_step23 = _iterator23.n()).done) {
                        _context16.next = 26;
                        break;
                      }

                      _i4 = _step23.value;
                      _t23 = _i4.onStatisticField, _r6 = _i4.statisticType;

                      if (!(("percentile_disc" === _r6 || "percentile_cont" === _r6) && "statisticParameters" in _i4)) {
                        _context16.next = 22;
                        break;
                      }

                      _t24 = _i4.statisticParameters;

                      if (_t24) {
                        _context16.next = 20;
                        break;
                      }

                      throw new _core_Error_js__WEBPACK_IMPORTED_MODULE_2__["default"]("feature-store:unsupported-query", "statisticParamters should be set for percentile type", {
                        definition: _i4,
                        query: e
                      });

                    case 20:
                      _context16.next = 24;
                      break;

                    case 22:
                      if (!("count" !== _r6 && _t23 && Object(_attributeSupport_js__WEBPACK_IMPORTED_MODULE_15__["hasInvalidFieldType"])(_t23, this.fieldsIndex))) {
                        _context16.next = 24;
                        break;
                      }

                      throw new _core_Error_js__WEBPACK_IMPORTED_MODULE_2__["default"]("feature-store:unsupported-query", "outStatistics contains non-numeric fields", {
                        definition: _i4,
                        query: e
                      });

                    case 24:
                      _context16.next = 13;
                      break;

                    case 26:
                      _context16.next = 31;
                      break;

                    case 28:
                      _context16.prev = 28;
                      _context16.t0 = _context16["catch"](11);

                      _iterator23.e(_context16.t0);

                    case 31:
                      _context16.prev = 31;

                      _iterator23.f();

                      return _context16.finish(31);

                    case 34:
                    case "end":
                      return _context16.stop();
                  }
                }
              }, _callee16, this, [[11, 28, 31, 34]]);
            }));

            function _checkStatisticsQuerySupport(_x14) {
              return _checkStatisticsQuerySupport2.apply(this, arguments);
            }

            return _checkStatisticsQuerySupport;
          }()
        }]);

        return _class3;
      }();
      /***/

    },

    /***/
    "iNG6":
    /*!*****************************************************************************************!*\
      !*** ./node_modules/@arcgis/core/layers/graphics/sources/support/clientSideDefaults.js ***!
      \*****************************************************************************************/

    /*! exports provided: createDefaultAttributesFunction, createDefaultTemplate, createDrawingInfo */

    /***/
    function iNG6(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "createDefaultAttributesFunction", function () {
        return s;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "createDefaultTemplate", function () {
        return u;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "createDrawingInfo", function () {
        return i;
      });
      /* harmony import */


      var _core_has_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ../../../../core/has.js */
      "wSAH");
      /* harmony import */


      var _core_lang_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ../../../../core/lang.js */
      "f/qv");
      /* harmony import */


      var _symbols_support_defaultsJSON_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ../../../../symbols/support/defaultsJSON.js */
      "gkbi");
      /*
      All material copyright ESRI, All Rights Reserved, unless otherwise specified.
      See https://js.arcgis.com/4.18/esri/copyright.txt for details.
      */


      function i(t) {
        return {
          renderer: {
            type: "simple",
            symbol: "esriGeometryPoint" === t || "esriGeometryMultipoint" === t ? _symbols_support_defaultsJSON_js__WEBPACK_IMPORTED_MODULE_2__["defaultPointSymbolJSON"] : "esriGeometryPolyline" === t ? _symbols_support_defaultsJSON_js__WEBPACK_IMPORTED_MODULE_2__["defaultPolylineSymbolJSON"] : _symbols_support_defaultsJSON_js__WEBPACK_IMPORTED_MODULE_2__["defaultPolygonSymbolJSON"]
          }
        };
      }

      function s(r, e) {
        if (Object(_core_has_js__WEBPACK_IMPORTED_MODULE_0__["default"])("csp-restrictions")) return function () {
          return _objectSpread(_defineProperty({}, e, null), r);
        };

        try {
          var t = "this.".concat(e, " = null;");

          for (var _e21 in r) {
            t += "this".concat(_e21.indexOf(".") ? "[\"".concat(_e21, "\"]") : ".".concat(_e21), " = ").concat(JSON.stringify(r[_e21]), ";");
          }

          var n = new Function(t);
          return function () {
            return new n();
          };
        } catch (t) {
          return function () {
            return _objectSpread(_defineProperty({}, e, null), r);
          };
        }
      }

      function u() {
        var t = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
        return [{
          name: "New Feature",
          description: "",
          prototype: {
            attributes: Object(_core_lang_js__WEBPACK_IMPORTED_MODULE_1__["clone"])(t)
          }
        }];
      }
      /***/

    },

    /***/
    "qUyK":
    /*!***********************************************************************************!*\
      !*** ./node_modules/@arcgis/core/layers/graphics/data/QueryEngineCapabilities.js ***!
      \***********************************************************************************/

    /*! exports provided: queryCapabilities */

    /***/
    function qUyK(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "queryCapabilities", function () {
        return t;
      });
      /*
      All material copyright ESRI, All Rights Reserved, unless otherwise specified.
      See https://js.arcgis.com/4.18/esri/copyright.txt for details.
      */


      var t = {
        supportsStatistics: !0,
        supportsPercentileStatistics: !0,
        supportsCentroid: !0,
        supportsCacheHint: !1,
        supportsDistance: !0,
        supportsDistinct: !0,
        supportsExtent: !0,
        supportsGeometryProperties: !1,
        supportsHavingClause: !0,
        supportsOrderBy: !0,
        supportsPagination: !0,
        supportsQuantization: !0,
        supportsQuantizationEditMode: !1,
        supportsQueryGeometry: !0,
        supportsResultType: !1,
        supportsSqlExpression: !0,
        supportsMaxRecordCountFactor: !1,
        supportsStandardizedQueriesOnly: !0,
        supportsQueryByOthers: !0,
        supportsHistoricMoment: !1,
        supportsFormatPBF: !1,
        supportsDisjointSpatialRelationship: !0,
        maxRecordCountFactor: void 0,
        maxRecordCount: void 0,
        standardMaxRecordCount: void 0,
        tileMaxRecordCount: void 0
      };
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
        function s(t, e, _s9) {
          _classCallCheck(this, s);

          this._namespace = t, this._storage = e, this._removeFunc = !1, this._hit = 0, this._miss = 0, this._storage.register(this), this._namespace += ":", _s9 && (this._storage.registerRemoveFunc(this._namespace, _s9), this._removeFunc = !0);
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
          value: function put(t, e, _s10) {
            var i = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : 0;

            this._storage.put(this._namespace + t, e, _s10, i);
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
          value: function updateSize(t, e, _s11) {
            this._storage.updateSize(this._namespace + t, e, _s11);
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
          value: function put(t, e, s, _i5) {
            var h = this._db.get(t);

            if (h && (this._size -= h.size, this._db["delete"](t), h.entry !== e && this._notifyRemoved(t, h.entry)), s > this._maxSize) return void this._notifyRemoved(t, e);
            if (void 0 === e) return void console.warn("Refusing to cache undefined entry ");
            if (!s || s < 0) return void console.warn("Refusing to cache entry with invalid size " + s);
            var r = 1 + Math.max(_i5, -3) - -3;
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
            var _i6 = this._db.get(t);

            _i6 && _i6.entry === e && (this._size -= _i6.size, s > this._maxSize ? this._notifyRemoved(t, e) : (_i6.size = s, this._size += s, this._checkSizeLimit()));
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
            var _this14 = this;

            var t = {
              Size: Math.round(this._size / 1048576) + "/" + Math.round(this._maxSize / 1048576) + "MB",
              "Hit rate": Math.round(100 * this._getHitRate()) + "%",
              Entries: this._db.size.toString()
            },
                e = {},
                s = new Array();

            this._db.forEach(function (t, _i8) {
              var h = t.lifetime;
              s[h] = (s[h] || 0) + t.size, _this14._users.forAll(function (s) {
                var h = s.namespace;

                if (_i8.startsWith(h)) {
                  var _s12 = e[h] || 0;

                  e[h] = _s12 + t.size;
                }
              });
            });

            var _i7 = {};

            this._users.forAll(function (t) {
              var s = t.namespace;

              if (!isNaN(t.hitRate) && t.hitRate > 0) {
                var _h = e[s] || 0;

                e[s] = _h, _i7[s] = Math.round(100 * t.hitRate) + "%";
              } else _i7[s] = "0%";
            });

            var h = Object.keys(e);
            h.forEach(function (t) {
              return e[t] = e[t] / _this14._size * 100;
            }), h.sort(function (t, s) {
              return e[s] - e[t];
            }), h.forEach(function (s) {
              return t[s] = Math.round(e[s]) + "% / " + _i7[s];
            });

            for (var _e22 = s.length - 1; _e22 >= 0; --_e22) {
              var _i10 = s[_e22];
              _i10 && (t["Priority " + (_e22 + -3 - 1)] = Math.round(_i10 / this.size * 100) + "%");
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
            var _this15 = this;

            this._db.forEach(function (e, s) {
              s.startsWith(t) && (_this15._size -= e.size, _this15._db["delete"](s), _this15._notifyRemoved(s, e.entry));
            });
          }
        }, {
          key: "clearAll",
          value: function clearAll() {
            var _this16 = this;

            this._db.forEach(function (t, e) {
              return _this16._notifyRemoved(e, t.entry);
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
              var _iterator24 = _createForOfIteratorHelper(this._db),
                  _step24;

              try {
                for (_iterator24.s(); !(_step24 = _iterator24.n()).done;) {
                  var _step24$value = _slicedToArray(_step24.value, 2),
                      t = _step24$value[0],
                      _e23 = _step24$value[1];

                  if (this._db["delete"](t), _e23.lives <= 1 ? (this._size -= _e23.size, this._notifyRemoved(t, _e23.entry)) : (--_e23.lives, this._db.set(t, _e23)), this._size <= .9 * this.maxSize) return;
                }
              } catch (err) {
                _iterator24.e(err);
              } finally {
                _iterator24.f();
              }
            }
          }
        }]);

        return i;
      }();
      /***/

    },

    /***/
    "wauK":
    /*!****************************************************************************!*\
      !*** ./node_modules/@arcgis/core/layers/graphics/data/attributeSupport.js ***!
      \****************************************************************************/

    /*! exports provided: getAliasFromFieldName, getExpressionFromFieldName, getWhereClause, hasInvalidFieldType, validateFields, validateHaving, validateWhere */

    /***/
    function wauK(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "getAliasFromFieldName", function () {
        return d;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "getExpressionFromFieldName", function () {
        return c;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "getWhereClause", function () {
        return a;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "hasInvalidFieldType", function () {
        return u;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "validateFields", function () {
        return l;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "validateHaving", function () {
        return o;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "validateWhere", function () {
        return r;
      });
      /* harmony import */


      var _core_Error_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ../../../core/Error.js */
      "zlDU");
      /* harmony import */


      var _core_sql_WhereClauseCache_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ../../../core/sql/WhereClauseCache.js */
      "3pdw");
      /*
      All material copyright ESRI, All Rights Reserved, unless otherwise specified.
      See https://js.arcgis.com/4.18/esri/copyright.txt for details.
      */


      var s = new _core_sql_WhereClauseCache_js__WEBPACK_IMPORTED_MODULE_1__["WhereClauseCache"](50, 500),
          n = "feature-store:unsupported-query",
          t = new Set(["esriFieldTypeOID", "esriFieldTypeSmallInteger", "esriFieldTypeInteger", "esriFieldTypeSingle", "esriFieldTypeDouble", "esriFieldTypeLong", "esriFieldTypeDate"]);

      function r(i, t) {
        if (!t) return !0;
        var r = s.get(t, i);
        if (!r) throw new _core_Error_js__WEBPACK_IMPORTED_MODULE_0__["default"](n, "invalid SQL expression", {
          where: t
        });
        if (!r.isStandardized) throw new _core_Error_js__WEBPACK_IMPORTED_MODULE_0__["default"](n, "where clause is not standard", {
          where: t
        });
        return l(i, r.fieldNames, "where clause contains missing fields"), !0;
      }

      function o(i, t, r) {
        if (!t) return !0;
        var o = s.get(t, i);
        if (!o) throw new _core_Error_js__WEBPACK_IMPORTED_MODULE_0__["default"](n, "invalid SQL expression", {
          having: t
        });
        if (!o.isAggregate) throw new _core_Error_js__WEBPACK_IMPORTED_MODULE_0__["default"](n, "having does not contain a valid aggregate function", {
          having: t
        });
        var a = o.fieldNames;
        l(i, a, "having contains missing fields");
        if (!o.getExpressions().every(function (e) {
          var s = e.aggregateType,
              n = e.field,
              t = i.has(n) && i.get(n).name;
          return r.some(function (e) {
            var n = e.onStatisticField,
                r = e.statisticType;
            return (i.has(n) && i.get(n).name) === t && r.toLowerCase().trim() === s;
          });
        })) throw new _core_Error_js__WEBPACK_IMPORTED_MODULE_0__["default"](n, "expressions in having should also exist in outStatistics", {
          having: t
        });
        return !0;
      }

      function a(e, i) {
        return e ? s.get(e, i) : null;
      }

      function l(i, s, t) {
        var r = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : !0;
        var o = [];

        var _iterator25 = _createForOfIteratorHelper(s),
            _step25;

        try {
          for (_iterator25.s(); !(_step25 = _iterator25.n()).done;) {
            var _t25 = _step25.value;
            if ("*" !== _t25 && !i.has(_t25)) if (r) {
              var _s13 = c(_t25);

              try {
                var _t26 = a(_s13, i);

                if (!_t26) throw new _core_Error_js__WEBPACK_IMPORTED_MODULE_0__["default"](n, "invalid SQL expression", {
                  where: _s13
                });
                if (!_t26.isStandardized) throw new _core_Error_js__WEBPACK_IMPORTED_MODULE_0__["default"](n, "expression is not standard", {
                  clause: _t26
                });
                l(i, _t26.fieldNames, "expression contains missing fields");
              } catch (e) {
                var _i11 = e && e.details;

                if (_i11 && (_i11.clause || _i11.where)) throw e;
                _i11 && _i11.missingFields ? o.push.apply(o, _toConsumableArray(_i11.missingFields)) : o.push(_t25);
              }
            } else o.push(_t25);
          }
        } catch (err) {
          _iterator25.e(err);
        } finally {
          _iterator25.f();
        }

        if (o.length) throw new _core_Error_js__WEBPACK_IMPORTED_MODULE_0__["default"](n, t, {
          missingFields: o
        });
      }

      function c(e) {
        return e.split(" as ")[0];
      }

      function d(e) {
        return e.split(" as ")[1];
      }

      function u(e, i) {
        var s = i.get(e);
        return !!s && !t.has(s.type);
      }
      /***/

    }
  }]);
})();
//# sourceMappingURL=default~layers-graphics-sources-geojson-GeoJSONSourceWorker-js~layers-graphics-sources-support-CSVSo~030922b1-es5.js.map