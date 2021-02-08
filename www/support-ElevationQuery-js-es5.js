(function () {
  function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

  function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

  function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

  function _possibleConstructorReturn(self, call) { if (call && (typeof call === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

  function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

  function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

  function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

  function _createForOfIteratorHelper(o, allowArrayLike) { var it; if (typeof Symbol === "undefined" || o[Symbol.iterator] == null) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e8) { throw _e8; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = o[Symbol.iterator](); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e9) { didErr = true; err = _e9; }, f: function f() { try { if (!normalCompletion && it["return"] != null) it["return"](); } finally { if (didErr) throw err; } } }; }

  function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

  function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

  function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

  function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

  function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

  function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

  function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["support-ElevationQuery-js"], {
    /***/
    "LfYK":
    /*!********************************************************************!*\
      !*** ./node_modules/@arcgis/core/layers/support/ElevationQuery.js ***!
      \********************************************************************/

    /*! exports provided: default, ElevationQuery, GeometryDescriptor, getFinestLodIndex */

    /***/
    function LfYK(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ElevationQuery", function () {
        return v;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "GeometryDescriptor", function () {
        return x;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "getFinestLodIndex", function () {
        return E;
      });
      /* harmony import */


      var _core_maybe_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ../../core/maybe.js */
      "srIe");
      /* harmony import */


      var _core_Error_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ../../core/Error.js */
      "zlDU");
      /* harmony import */


      var _core_promiseUtils_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ../../core/promiseUtils.js */
      "9MzC");
      /* harmony import */


      var _geometry_Point_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ../../geometry/Point.js */
      "SuVq");
      /* harmony import */


      var _geometry_Multipoint_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ../../geometry/Multipoint.js */
      "V9wi");
      /* harmony import */


      var _geometry_Polyline_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ../../geometry/Polyline.js */
      "UhwK");
      /* harmony import */


      var _core_asyncUtils_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ../../core/asyncUtils.js */
      "eSsm");
      /* harmony import */


      var _core_unitUtils_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! ../../core/unitUtils.js */
      "gEht");
      /* harmony import */


      var _geometry_support_aaBoundingRect_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! ../../geometry/support/aaBoundingRect.js */
      "kYAx");
      /* harmony import */


      var _geometry_projection_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! ../../geometry/projection.js */
      "gYg2");
      /* harmony import */


      var _ElevationSampler_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
      /*! ./ElevationSampler.js */
      "hR8n");
      /* harmony import */


      var _ElevationTile_js__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
      /*! ./ElevationTile.js */
      "oLAj");
      /*
      All material copyright ESRI, All Rights Reserved, unless otherwise specified.
      See https://js.arcgis.com/4.18/esri/copyright.txt for details.
      */


      var v = /*#__PURE__*/function () {
        function v() {
          _classCallCheck(this, v);
        }

        _createClass(v, [{
          key: "queryAll",
          value: function () {
            var _queryAll = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(e, i, o) {
              var s, l, n, a, r;
              return regeneratorRuntime.wrap(function _callee$(_context) {
                while (1) {
                  switch (_context.prev = _context.next) {
                    case 0:
                      if ((e = o && o.ignoreInvisibleLayers ? e.filter(function (e) {
                        return e.visible;
                      }) : e.slice()).length) {
                        _context.next = 2;
                        break;
                      }

                      throw new _core_Error_js__WEBPACK_IMPORTED_MODULE_1__["default"]("elevation-query:invalid-layer", "Elevation queries require at least one elevation layer to fetch tiles from");

                    case 2:
                      s = x.fromGeometry(i);
                      l = !1;
                      o && o.returnSampleInfo || (l = !0);
                      n = _objectSpread(_objectSpread(_objectSpread({}, R), o), {}, {
                        returnSampleInfo: !0
                      });
                      _context.next = 8;
                      return this.query(e[e.length - 1], s, n);

                    case 8:
                      a = _context.sent;
                      _context.next = 11;
                      return this._queryAllContinue(e, a, n);

                    case 11:
                      r = _context.sent;
                      return _context.abrupt("return", (r.geometry = r.geometry["export"](), l && delete r.sampleInfo, r));

                    case 13:
                    case "end":
                      return _context.stop();
                  }
                }
              }, _callee, this);
            }));

            function queryAll(_x, _x2, _x3) {
              return _queryAll.apply(this, arguments);
            }

            return queryAll;
          }()
        }, {
          key: "query",
          value: function () {
            var _query = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee2(e, i, o) {
              var s, l, n;
              return regeneratorRuntime.wrap(function _callee2$(_context2) {
                while (1) {
                  switch (_context2.prev = _context2.next) {
                    case 0:
                      if (e) {
                        _context2.next = 2;
                        break;
                      }

                      throw new _core_Error_js__WEBPACK_IMPORTED_MODULE_1__["default"]("elevation-query:invalid-layer", "Elevation queries require an elevation layer to fetch tiles from");

                    case 2:
                      if (!(!i || !(i instanceof x) && "point" !== i.type && "multipoint" !== i.type && "polyline" !== i.type)) {
                        _context2.next = 4;
                        break;
                      }

                      throw new _core_Error_js__WEBPACK_IMPORTED_MODULE_1__["default"]("elevation-query:invalid-geometry", "Only point, polyline and multipoint geometries can be used to query elevation");

                    case 4:
                      s = _objectSpread(_objectSpread({}, R), o), l = new w(e, i.spatialReference, s), n = s.signal;
                      _context2.next = 7;
                      return e.load({
                        signal: n
                      });

                    case 7:
                      _context2.next = 9;
                      return this._createGeometryDescriptor(l, i, n);

                    case 9:
                      _context2.next = 11;
                      return this._selectTiles(l, n);

                    case 11:
                      _context2.next = 13;
                      return this._populateElevationTiles(l, n);

                    case 13:
                      this._sampleGeometryWithElevation(l);

                      return _context2.abrupt("return", this._createQueryResult(l, n));

                    case 15:
                    case "end":
                      return _context2.stop();
                  }
                }
              }, _callee2, this);
            }));

            function query(_x4, _x5, _x6) {
              return _query.apply(this, arguments);
            }

            return query;
          }()
        }, {
          key: "createSampler",
          value: function () {
            var _createSampler2 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee3(e, i, o) {
              var s;
              return regeneratorRuntime.wrap(function _callee3$(_context3) {
                while (1) {
                  switch (_context3.prev = _context3.next) {
                    case 0:
                      if (e) {
                        _context3.next = 2;
                        break;
                      }

                      throw new _core_Error_js__WEBPACK_IMPORTED_MODULE_1__["default"]("elevation-query:invalid-layer", "Elevation queries require an elevation layer to fetch tiles from");

                    case 2:
                      if (!(!i || "extent" !== i.type)) {
                        _context3.next = 4;
                        break;
                      }

                      throw new _core_Error_js__WEBPACK_IMPORTED_MODULE_1__["default"]("elevation-query:invalid-extent", "Invalid or undefined extent");

                    case 4:
                      s = _objectSpread(_objectSpread({}, R), o);
                      return _context3.abrupt("return", this._createSampler(e, i, s));

                    case 6:
                    case "end":
                      return _context3.stop();
                  }
                }
              }, _callee3, this);
            }));

            function createSampler(_x7, _x8, _x9) {
              return _createSampler2.apply(this, arguments);
            }

            return createSampler;
          }()
        }, {
          key: "createSamplerAll",
          value: function () {
            var _createSamplerAll = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee4(e, i, o) {
              var s, l;
              return regeneratorRuntime.wrap(function _callee4$(_context4) {
                while (1) {
                  switch (_context4.prev = _context4.next) {
                    case 0:
                      if ((e = o && o.ignoreInvisibleLayers ? e.filter(function (e) {
                        return e.visible;
                      }) : e.slice()).length) {
                        _context4.next = 2;
                        break;
                      }

                      throw new _core_Error_js__WEBPACK_IMPORTED_MODULE_1__["default"]("elevation-query:invalid-layer", "Elevation queries require at least one elevation layer to fetch tiles from");

                    case 2:
                      if (!(!i || "extent" !== i.type)) {
                        _context4.next = 4;
                        break;
                      }

                      throw new _core_Error_js__WEBPACK_IMPORTED_MODULE_1__["default"]("elevation-query:invalid-extent", "Invalid or undefined extent");

                    case 4:
                      s = _objectSpread(_objectSpread(_objectSpread({}, R), o), {}, {
                        returnSampleInfo: !0
                      });
                      _context4.next = 7;
                      return this._createSampler(e[e.length - 1], i, s);

                    case 7:
                      l = _context4.sent;
                      return _context4.abrupt("return", this._createSamplerAllContinue(e, i, l, s));

                    case 9:
                    case "end":
                      return _context4.stop();
                  }
                }
              }, _callee4, this);
            }));

            function createSamplerAll(_x10, _x11, _x12) {
              return _createSamplerAll.apply(this, arguments);
            }

            return createSamplerAll;
          }()
        }, {
          key: "_createSampler",
          value: function () {
            var _createSampler3 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee5(e, t, i, o) {
              var s, l, n, a;
              return regeneratorRuntime.wrap(function _callee5$(_context5) {
                while (1) {
                  switch (_context5.prev = _context5.next) {
                    case 0:
                      s = i.signal;
                      _context5.next = 3;
                      return e.load({
                        signal: s
                      });

                    case 3:
                      l = t.spatialReference, n = e.tileInfo.spatialReference;
                      _context5.t0 = l.equals(n);

                      if (_context5.t0) {
                        _context5.next = 9;
                        break;
                      }

                      _context5.next = 8;
                      return Object(_geometry_projection_js__WEBPACK_IMPORTED_MODULE_9__["initializeProjection"])([{
                        source: l,
                        dest: n
                      }], {
                        signal: s
                      });

                    case 8:
                      t = Object(_geometry_projection_js__WEBPACK_IMPORTED_MODULE_9__["project"])(t, n);

                    case 9:
                      a = new _(e, t, i, o);
                      _context5.next = 12;
                      return this._selectTiles(a, s);

                    case 12:
                      _context5.next = 14;
                      return this._populateElevationTiles(a, s);

                    case 14:
                      return _context5.abrupt("return", new _ElevationSampler_js__WEBPACK_IMPORTED_MODULE_10__["MultiTileElevationSampler"](a.elevationTiles, a.layer.tileInfo, a.options.noDataValue));

                    case 15:
                    case "end":
                      return _context5.stop();
                  }
                }
              }, _callee5, this);
            }));

            function _createSampler(_x13, _x14, _x15, _x16) {
              return _createSampler3.apply(this, arguments);
            }

            return _createSampler;
          }()
        }, {
          key: "_createSamplerAllContinue",
          value: function () {
            var _createSamplerAllContinue2 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee6(e, t, i, o) {
              var s, l, n, a;
              return regeneratorRuntime.wrap(function _callee6$(_context6) {
                while (1) {
                  switch (_context6.prev = _context6.next) {
                    case 0:
                      if (!(e.pop(), !e.length)) {
                        _context6.next = 2;
                        break;
                      }

                      return _context6.abrupt("return", i);

                    case 2:
                      s = i.samplers.map(function (e) {
                        return Object(_geometry_support_aaBoundingRect_js__WEBPACK_IMPORTED_MODULE_8__["fromExtent"])(e.extent);
                      });
                      _context6.next = 5;
                      return this._createSampler(e[e.length - 1], t, o, s);

                    case 5:
                      l = _context6.sent;

                      if (!(0 === l.samplers.length)) {
                        _context6.next = 8;
                        break;
                      }

                      return _context6.abrupt("return", i);

                    case 8:
                      n = i.samplers.concat(l.samplers), a = new _ElevationSampler_js__WEBPACK_IMPORTED_MODULE_10__["MultiTileElevationSampler"](n, o.noDataValue);
                      return _context6.abrupt("return", this._createSamplerAllContinue(e, t, a, o));

                    case 10:
                    case "end":
                      return _context6.stop();
                  }
                }
              }, _callee6, this);
            }));

            function _createSamplerAllContinue(_x17, _x18, _x19, _x20) {
              return _createSamplerAllContinue2.apply(this, arguments);
            }

            return _createSamplerAllContinue;
          }()
        }, {
          key: "_queryAllContinue",
          value: function () {
            var _queryAllContinue2 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee7(e, t, i) {
              var o, s, l, n, _i, _a, a, r;

              return regeneratorRuntime.wrap(function _callee7$(_context7) {
                while (1) {
                  switch (_context7.prev = _context7.next) {
                    case 0:
                      o = e.pop(), s = t.geometry.coordinates, l = [], n = [];

                      for (_i = 0; _i < s.length; _i++) {
                        _a = t.sampleInfo[_i];
                        _a.demResolution >= 0 ? _a.source || (_a.source = o) : e.length && (l.push(s[_i]), n.push(_i));
                      }

                      if (!(!e.length || 0 === l.length)) {
                        _context7.next = 4;
                        break;
                      }

                      return _context7.abrupt("return", t);

                    case 4:
                      a = t.geometry.clone(l);
                      _context7.next = 7;
                      return this.query(e[e.length - 1], a, i);

                    case 7:
                      r = _context7.sent;
                      return _context7.abrupt("return", (n.forEach(function (e, i) {
                        s[e].z = r.geometry.coordinates[i].z, t.sampleInfo[e].demResolution = r.sampleInfo[i].demResolution;
                      }), this._queryAllContinue(e, t, i)));

                    case 9:
                    case "end":
                      return _context7.stop();
                  }
                }
              }, _callee7, this);
            }));

            function _queryAllContinue(_x21, _x22, _x23) {
              return _queryAllContinue2.apply(this, arguments);
            }

            return _queryAllContinue;
          }()
        }, {
          key: "_createQueryResult",
          value: function () {
            var _createQueryResult2 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee8(e, t) {
              var i;
              return regeneratorRuntime.wrap(function _callee8$(_context8) {
                while (1) {
                  switch (_context8.prev = _context8.next) {
                    case 0:
                      _context8.next = 2;
                      return e.geometry.project(e.outSpatialReference, t);

                    case 2:
                      _context8.t0 = _context8.sent["export"]();
                      _context8.t1 = e.options.noDataValue;
                      i = {
                        geometry: _context8.t0,
                        noDataValue: _context8.t1
                      };
                      return _context8.abrupt("return", (e.options.returnSampleInfo && (i.sampleInfo = this._extractSampleInfo(e)), e.geometry.coordinates.forEach(function (e) {
                        e.tile = null, e.elevationTile = null;
                      }), i));

                    case 6:
                    case "end":
                      return _context8.stop();
                  }
                }
              }, _callee8, this);
            }));

            function _createQueryResult(_x24, _x25) {
              return _createQueryResult2.apply(this, arguments);
            }

            return _createQueryResult;
          }()
        }, {
          key: "_createGeometryDescriptor",
          value: function () {
            var _createGeometryDescriptor2 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee9(e, i, o) {
              var s, l;
              return regeneratorRuntime.wrap(function _callee9$(_context9) {
                while (1) {
                  switch (_context9.prev = _context9.next) {
                    case 0:
                      l = e.layer.tileInfo.spatialReference;

                      if (!(i instanceof x)) {
                        _context9.next = 7;
                        break;
                      }

                      _context9.next = 4;
                      return i.project(l, o);

                    case 4:
                      s = _context9.sent;
                      _context9.next = 10;
                      break;

                    case 7:
                      _context9.next = 9;
                      return Object(_geometry_projection_js__WEBPACK_IMPORTED_MODULE_9__["initializeProjection"])([{
                        source: i.spatialReference,
                        dest: l
                      }], {
                        signal: o
                      });

                    case 9:
                      s = Object(_geometry_projection_js__WEBPACK_IMPORTED_MODULE_9__["project"])(i, l);

                    case 10:
                      if (s) {
                        _context9.next = 12;
                        break;
                      }

                      throw new _core_Error_js__WEBPACK_IMPORTED_MODULE_1__["default"]("elevation-query:spatial-reference-mismatch", "Cannot query elevation in '".concat(i.spatialReference.wkid, "' on an elevation service in '").concat(l.wkid, "'"));

                    case 12:
                      e.geometry = x.fromGeometry(s);

                    case 13:
                    case "end":
                      return _context9.stop();
                  }
                }
              }, _callee9);
            }));

            function _createGeometryDescriptor(_x26, _x27, _x28) {
              return _createGeometryDescriptor2.apply(this, arguments);
            }

            return _createGeometryDescriptor;
          }()
        }, {
          key: "_selectTiles",
          value: function () {
            var _selectTiles2 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee10(e, i) {
              var o;
              return regeneratorRuntime.wrap(function _callee10$(_context10) {
                while (1) {
                  switch (_context10.prev = _context10.next) {
                    case 0:
                      o = e.options.demResolution;

                      if (!("geometry" === e.type && this._preselectOutsideLayerExtent(e), "number" == typeof o)) {
                        _context10.next = 5;
                        break;
                      }

                      this._selectTilesClosestResolution(e);

                      _context10.next = 14;
                      break;

                    case 5:
                      if (!("finest-contiguous" === o)) {
                        _context10.next = 10;
                        break;
                      }

                      _context10.next = 8;
                      return this._selectTilesFinestContiguous(e, i);

                    case 8:
                      _context10.next = 14;
                      break;

                    case 10:
                      if (!("auto" !== o)) {
                        _context10.next = 12;
                        break;
                      }

                      throw new _core_Error_js__WEBPACK_IMPORTED_MODULE_1__["default"]("elevation-query:invalid-dem-resolution", "Invalid dem resolution value '".concat(o, "', expected a number, \"finest-contiguous\" or \"auto\""));

                    case 12:
                      _context10.next = 14;
                      return this._selectTilesAuto(e, i);

                    case 14:
                    case "end":
                      return _context10.stop();
                  }
                }
              }, _callee10, this);
            }));

            function _selectTiles(_x29, _x30) {
              return _selectTiles2.apply(this, arguments);
            }

            return _selectTiles;
          }()
        }, {
          key: "_preselectOutsideLayerExtent",
          value: function _preselectOutsideLayerExtent(e) {
            var t = new _ElevationTile_js__WEBPACK_IMPORTED_MODULE_11__["ElevationTile"](null);
            t.sample = function () {
              return e.options.noDataValue;
            }, e.outsideExtentTile = t;
            var i = e.layer.fullExtent;
            e.geometry.coordinates.forEach(function (e) {
              var o = e.x,
                  s = e.y;
              (o < i.xmin || o > i.xmax || s < i.ymin || s > i.ymax) && (e.elevationTile = t);
            });
          }
        }, {
          key: "_selectTilesClosestResolution",
          value: function _selectTilesClosestResolution(e) {
            var t = e.layer.tileInfo,
                i = this._findNearestDemResolutionLODIndex(t, e.options.demResolution);

            e.selectTilesAtLOD(i);
          }
        }, {
          key: "_findNearestDemResolutionLODIndex",
          value: function _findNearestDemResolutionLODIndex(e, t) {
            var i = t / Object(_core_unitUtils_js__WEBPACK_IMPORTED_MODULE_7__["getMetersPerUnitForSR"])(e.spatialReference);
            var o = e.lods[0],
                s = 0;

            for (var _t = 1; _t < e.lods.length; _t++) {
              var l = e.lods[_t];
              Math.abs(l.resolution - i) < Math.abs(o.resolution - i) && (o = l, s = _t);
            }

            return s;
          }
        }, {
          key: "_selectTilesFinestContiguous",
          value: function () {
            var _selectTilesFinestContiguous2 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee11(e, t) {
              var i;
              return regeneratorRuntime.wrap(function _callee11$(_context11) {
                while (1) {
                  switch (_context11.prev = _context11.next) {
                    case 0:
                      i = E(e.layer.tileInfo, e.options.minDemResolution);
                      _context11.next = 3;
                      return this._selectTilesFinestContiguousAt(e, i, t);

                    case 3:
                    case "end":
                      return _context11.stop();
                  }
                }
              }, _callee11, this);
            }));

            function _selectTilesFinestContiguous(_x31, _x32) {
              return _selectTilesFinestContiguous2.apply(this, arguments);
            }

            return _selectTilesFinestContiguous;
          }()
        }, {
          key: "_selectTilesFinestContiguousAt",
          value: function () {
            var _selectTilesFinestContiguousAt2 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee12(e, l, n) {
              var a, r, c;
              return regeneratorRuntime.wrap(function _callee12$(_context12) {
                while (1) {
                  switch (_context12.prev = _context12.next) {
                    case 0:
                      a = e.layer;

                      if (!(e.selectTilesAtLOD(l), l < 0)) {
                        _context12.next = 3;
                        break;
                      }

                      return _context12.abrupt("return");

                    case 3:
                      r = a.tilemapCache, c = e.getTilesToFetch();
                      _context12.prev = 4;

                      if (!r) {
                        _context12.next = 10;
                        break;
                      }

                      _context12.next = 8;
                      return Object(_core_promiseUtils_js__WEBPACK_IMPORTED_MODULE_2__["whenOrAbort"])(Object(_core_promiseUtils_js__WEBPACK_IMPORTED_MODULE_2__["all"])(c.map(function (e) {
                        return r.fetchAvailability(e.level, e.row, e.col, {
                          signal: n
                        });
                      })), n);

                    case 8:
                      _context12.next = 14;
                      break;

                    case 10:
                      _context12.next = 12;
                      return this._populateElevationTiles(e, n);

                    case 12:
                      if (e.allElevationTilesFetched()) {
                        _context12.next = 14;
                        break;
                      }

                      throw e.clearElevationTiles(), new _core_Error_js__WEBPACK_IMPORTED_MODULE_1__["default"]("elevation-query:has-unavailable-tiles");

                    case 14:
                      _context12.next = 21;
                      break;

                    case 16:
                      _context12.prev = 16;
                      _context12.t0 = _context12["catch"](4);
                      Object(_core_promiseUtils_js__WEBPACK_IMPORTED_MODULE_2__["throwIfAbortError"])(_context12.t0);
                      _context12.next = 21;
                      return this._selectTilesFinestContiguousAt(e, l - 1, n);

                    case 21:
                    case "end":
                      return _context12.stop();
                  }
                }
              }, _callee12, this, [[4, 16]]);
            }));

            function _selectTilesFinestContiguousAt(_x33, _x34, _x35) {
              return _selectTilesFinestContiguousAt2.apply(this, arguments);
            }

            return _selectTilesFinestContiguousAt;
          }()
        }, {
          key: "_populateElevationTiles",
          value: function () {
            var _populateElevationTiles2 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee14(t, o) {
              var s, n, a, r, c;
              return regeneratorRuntime.wrap(function _callee14$(_context14) {
                while (1) {
                  switch (_context14.prev = _context14.next) {
                    case 0:
                      s = t.getTilesToFetch(), n = {}, a = t.options.cache, r = t.options.noDataValue, c = s.map( /*#__PURE__*/function () {
                        var _ref = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee13(i) {
                          var s, l, c;
                          return regeneratorRuntime.wrap(function _callee13$(_context13) {
                            while (1) {
                              switch (_context13.prev = _context13.next) {
                                case 0:
                                  s = "".concat(t.layer.uid, ":").concat(i.id, ":").concat(r);
                                  l = Object(_core_maybe_js__WEBPACK_IMPORTED_MODULE_0__["isSome"])(a) ? a.get(s) : null;

                                  if (!Object(_core_maybe_js__WEBPACK_IMPORTED_MODULE_0__["isSome"])(l)) {
                                    _context13.next = 6;
                                    break;
                                  }

                                  _context13.t0 = l;
                                  _context13.next = 9;
                                  break;

                                case 6:
                                  _context13.next = 8;
                                  return t.layer.fetchTile(i.level, i.row, i.col, {
                                    noDataValue: r,
                                    signal: o
                                  });

                                case 8:
                                  _context13.t0 = _context13.sent;

                                case 9:
                                  c = _context13.t0;
                                  Object(_core_maybe_js__WEBPACK_IMPORTED_MODULE_0__["isSome"])(a) && a.put(s, c), n[i.id] = new _ElevationTile_js__WEBPACK_IMPORTED_MODULE_11__["ElevationTile"](i, c);

                                case 11:
                                case "end":
                                  return _context13.stop();
                              }
                            }
                          }, _callee13);
                        }));

                        return function (_x38) {
                          return _ref.apply(this, arguments);
                        };
                      }());
                      _context14.next = 3;
                      return Object(_core_promiseUtils_js__WEBPACK_IMPORTED_MODULE_2__["whenOrAbort"])(Object(_core_promiseUtils_js__WEBPACK_IMPORTED_MODULE_2__["eachAlways"])(c), o);

                    case 3:
                      t.populateElevationTiles(n);

                    case 4:
                    case "end":
                      return _context14.stop();
                  }
                }
              }, _callee14);
            }));

            function _populateElevationTiles(_x36, _x37) {
              return _populateElevationTiles2.apply(this, arguments);
            }

            return _populateElevationTiles;
          }()
        }, {
          key: "_selectTilesAuto",
          value: function () {
            var _selectTilesAuto2 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee16(e, t) {
              var l, n, a, r;
              return regeneratorRuntime.wrap(function _callee16$(_context16) {
                while (1) {
                  switch (_context16.prev = _context16.next) {
                    case 0:
                      this._selectTilesAutoFinest(e), this._reduceTilesForMaximumRequests(e);
                      l = e.layer.tilemapCache;

                      if (l) {
                        _context16.next = 4;
                        break;
                      }

                      return _context16.abrupt("return", this._selectTilesAutoPrefetchUpsample(e, t));

                    case 4:
                      n = e.getTilesToFetch(), a = {}, r = n.map( /*#__PURE__*/function () {
                        var _ref2 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee15(e) {
                          var i, o;
                          return regeneratorRuntime.wrap(function _callee15$(_context15) {
                            while (1) {
                              switch (_context15.prev = _context15.next) {
                                case 0:
                                  i = {
                                    id: null,
                                    level: 0,
                                    row: 0,
                                    col: 0,
                                    extent: Object(_geometry_support_aaBoundingRect_js__WEBPACK_IMPORTED_MODULE_8__["create"])()
                                  };
                                  _context15.next = 3;
                                  return Object(_core_asyncUtils_js__WEBPACK_IMPORTED_MODULE_6__["result"])(l.fetchAvailabilityUpsample(e.level, e.row, e.col, i, {
                                    signal: t
                                  }));

                                case 3:
                                  o = _context15.sent;
                                  !1 === o.ok ? Object(_core_promiseUtils_js__WEBPACK_IMPORTED_MODULE_2__["throwIfAbortError"])(o.error) : a[e.id] = i;

                                case 5:
                                case "end":
                                  return _context15.stop();
                              }
                            }
                          }, _callee15);
                        }));

                        return function (_x41) {
                          return _ref2.apply(this, arguments);
                        };
                      }());
                      _context16.next = 7;
                      return Object(_core_promiseUtils_js__WEBPACK_IMPORTED_MODULE_2__["whenOrAbort"])(Object(_core_promiseUtils_js__WEBPACK_IMPORTED_MODULE_2__["all"])(r), t);

                    case 7:
                      e.remapTiles(a);

                    case 8:
                    case "end":
                      return _context16.stop();
                  }
                }
              }, _callee16, this);
            }));

            function _selectTilesAuto(_x39, _x40) {
              return _selectTilesAuto2.apply(this, arguments);
            }

            return _selectTilesAuto;
          }()
        }, {
          key: "_reduceTilesForMaximumRequests",
          value: function _reduceTilesForMaximumRequests(e) {
            var t = e.layer.tileInfo;
            var i = 0;

            var o = {},
                s = function s(e) {
              e.id in o ? o[e.id]++ : (o[e.id] = 1, i++);
            },
                l = function l(e) {
              var t = o[e.id];
              1 === t ? (delete o[e.id], i--) : o[e.id] = t - 1;
            };

            e.forEachTileToFetch(s, l);
            var n = !0;

            for (; n && (n = !1, e.forEachTileToFetch(function (o) {
              i <= e.options.maximumAutoTileRequests || (l(o), t.upsampleTile(o) && (n = !0), s(o));
            }, l), n);) {
              ;
            }
          }
        }, {
          key: "_selectTilesAutoFinest",
          value: function _selectTilesAutoFinest(e) {
            var t = E(e.layer.tileInfo, e.options.minDemResolution);
            e.selectTilesAtLOD(t, e.options.maximumAutoTileRequests);
          }
        }, {
          key: "_selectTilesAutoPrefetchUpsample",
          value: function () {
            var _selectTilesAutoPrefetchUpsample2 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee17(e, t) {
              var i, o;
              return regeneratorRuntime.wrap(function _callee17$(_context17) {
                while (1) {
                  switch (_context17.prev = _context17.next) {
                    case 0:
                      i = e.layer.tileInfo;
                      _context17.next = 3;
                      return this._populateElevationTiles(e, t);

                    case 3:
                      o = !1;
                      e.forEachTileToFetch(function (e, t) {
                        i.upsampleTile(e) ? o = !0 : t();
                      });
                      _context17.t0 = o;

                      if (!_context17.t0) {
                        _context17.next = 9;
                        break;
                      }

                      _context17.next = 9;
                      return this._selectTilesAutoPrefetchUpsample(e, t);

                    case 9:
                    case "end":
                      return _context17.stop();
                  }
                }
              }, _callee17, this);
            }));

            function _selectTilesAutoPrefetchUpsample(_x42, _x43) {
              return _selectTilesAutoPrefetchUpsample2.apply(this, arguments);
            }

            return _selectTilesAutoPrefetchUpsample;
          }()
        }, {
          key: "_sampleGeometryWithElevation",
          value: function _sampleGeometryWithElevation(e) {
            e.geometry.coordinates.forEach(function (t) {
              var i = t.elevationTile;
              var o = e.options.noDataValue;

              if (i) {
                var _e = i.sample(t.x, t.y);

                void 0 !== _e ? o = _e : t.elevationTile = null;
              }

              t.z = o;
            });
          }
        }, {
          key: "_extractSampleInfo",
          value: function _extractSampleInfo(e) {
            var t = e.layer.tileInfo,
                i = Object(_core_unitUtils_js__WEBPACK_IMPORTED_MODULE_7__["getMetersPerUnitForSR"])(t.spatialReference);
            return e.geometry.coordinates.map(function (o) {
              var s = -1;

              if (o.elevationTile && o.elevationTile !== e.outsideExtentTile) {
                s = t.lodAt(o.elevationTile.tile.level).resolution * i;
              }

              return {
                demResolution: s
              };
            });
          }
        }]);

        return v;
      }();

      var x = /*#__PURE__*/function () {
        function x() {
          _classCallCheck(this, x);
        }

        _createClass(x, [{
          key: "export",
          value: function _export() {
            return this._exporter(this.coordinates, this.spatialReference);
          }
        }, {
          key: "clone",
          value: function clone(e) {
            var _this = this;

            var t = new x();
            return t.geometry = this.geometry, t.spatialReference = this.spatialReference, t.coordinates = e || this.coordinates.map(function (e) {
              return _this._cloneCoordinate(e);
            }), t._exporter = this._exporter, t;
          }
        }, {
          key: "project",
          value: function () {
            var _project = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee18(e, t) {
              var _this2 = this;

              var i, o, s, l;
              return regeneratorRuntime.wrap(function _callee18$(_context18) {
                while (1) {
                  switch (_context18.prev = _context18.next) {
                    case 0:
                      if (!this.spatialReference.equals(e)) {
                        _context18.next = 2;
                        break;
                      }

                      return _context18.abrupt("return", this.clone());

                    case 2:
                      _context18.next = 4;
                      return Object(_geometry_projection_js__WEBPACK_IMPORTED_MODULE_9__["initializeProjection"])([{
                        source: this.spatialReference,
                        dest: e
                      }], {
                        signal: t
                      });

                    case 4:
                      i = new _geometry_Multipoint_js__WEBPACK_IMPORTED_MODULE_4__["default"]({
                        spatialReference: this.spatialReference,
                        points: this.coordinates.map(function (e) {
                          return [e.x, e.y];
                        })
                      }), o = Object(_geometry_projection_js__WEBPACK_IMPORTED_MODULE_9__["project"])(i, e);

                      if (o) {
                        _context18.next = 7;
                        break;
                      }

                      return _context18.abrupt("return", null);

                    case 7:
                      s = this.coordinates.map(function (e, t) {
                        var i = _this2._cloneCoordinate(e),
                            s = o.points[t];

                        return i.x = s[0], i.y = s[1], i;
                      }), l = this.clone(s);
                      return _context18.abrupt("return", (l.spatialReference = e, l));

                    case 9:
                    case "end":
                      return _context18.stop();
                  }
                }
              }, _callee18, this);
            }));

            function project(_x44, _x45) {
              return _project.apply(this, arguments);
            }

            return project;
          }()
        }, {
          key: "_cloneCoordinate",
          value: function _cloneCoordinate(e) {
            return {
              x: e.x,
              y: e.y,
              z: e.z,
              m: e.m,
              tile: null,
              elevationTile: null
            };
          }
        }], [{
          key: "fromGeometry",
          value: function fromGeometry(e) {
            var t = new x();
            if (t.geometry = e, t.spatialReference = e.spatialReference, e instanceof x) t.coordinates = e.coordinates.map(function (e) {
              return t._cloneCoordinate(e);
            }), t._exporter = function (t, i) {
              var o = e.clone(t);
              return o.spatialReference = i, o;
            };else switch (e.type) {
              case "point":
                {
                  var i = e,
                      o = i.hasZ,
                      s = i.hasM;
                  t.coordinates = o && s ? [{
                    x: i.x,
                    y: i.y,
                    z: i.z,
                    m: i.m
                  }] : o ? [{
                    x: i.x,
                    y: i.y,
                    z: i.z
                  }] : s ? [{
                    x: i.x,
                    y: i.y,
                    m: i.m
                  }] : [{
                    x: i.x,
                    y: i.y
                  }], t._exporter = function (t, i) {
                    return e.hasM ? new _geometry_Point_js__WEBPACK_IMPORTED_MODULE_3__["default"](t[0].x, t[0].y, t[0].z, t[0].m, i) : new _geometry_Point_js__WEBPACK_IMPORTED_MODULE_3__["default"](t[0].x, t[0].y, t[0].z, i);
                  };
                  break;
                }

              case "multipoint":
                {
                  var _i2 = e,
                      _o = _i2.hasZ,
                      _s = _i2.hasM;
                  t.coordinates = _o && _s ? _i2.points.map(function (e) {
                    return {
                      x: e[0],
                      y: e[1],
                      z: e[2],
                      m: e[3]
                    };
                  }) : _o ? _i2.points.map(function (e) {
                    return {
                      x: e[0],
                      y: e[1],
                      z: e[2]
                    };
                  }) : _s ? _i2.points.map(function (e) {
                    return {
                      x: e[0],
                      y: e[1],
                      m: e[2]
                    };
                  }) : _i2.points.map(function (e) {
                    return {
                      x: e[0],
                      y: e[1]
                    };
                  }), t._exporter = function (t, i) {
                    return e.hasM ? new _geometry_Multipoint_js__WEBPACK_IMPORTED_MODULE_4__["default"]({
                      points: t.map(function (e) {
                        return [e.x, e.y, e.z, e.m];
                      }),
                      hasZ: !0,
                      hasM: !0,
                      spatiaReference: i
                    }) : new _geometry_Multipoint_js__WEBPACK_IMPORTED_MODULE_4__["default"](t.map(function (e) {
                      return [e.x, e.y, e.z];
                    }), i);
                  };
                  break;
                }

              case "polyline":
                {
                  var _i3 = e,
                      _o2 = [],
                      _s2 = [],
                      l = e.hasZ,
                      n = e.hasM;
                  var a = 0;

                  var _iterator = _createForOfIteratorHelper(_i3.paths),
                      _step;

                  try {
                    for (_iterator.s(); !(_step = _iterator.n()).done;) {
                      var _e2 = _step.value;

                      if (_s2.push([a, a + _e2.length]), a += _e2.length, l && n) {
                        var _iterator2 = _createForOfIteratorHelper(_e2),
                            _step2;

                        try {
                          for (_iterator2.s(); !(_step2 = _iterator2.n()).done;) {
                            var _t2 = _step2.value;

                            _o2.push({
                              x: _t2[0],
                              y: _t2[1],
                              z: _t2[2],
                              m: _t2[3]
                            });
                          }
                        } catch (err) {
                          _iterator2.e(err);
                        } finally {
                          _iterator2.f();
                        }
                      } else if (l) {
                        var _iterator3 = _createForOfIteratorHelper(_e2),
                            _step3;

                        try {
                          for (_iterator3.s(); !(_step3 = _iterator3.n()).done;) {
                            var _t3 = _step3.value;

                            _o2.push({
                              x: _t3[0],
                              y: _t3[1],
                              z: _t3[2]
                            });
                          }
                        } catch (err) {
                          _iterator3.e(err);
                        } finally {
                          _iterator3.f();
                        }
                      } else if (n) {
                        var _iterator4 = _createForOfIteratorHelper(_e2),
                            _step4;

                        try {
                          for (_iterator4.s(); !(_step4 = _iterator4.n()).done;) {
                            var _t4 = _step4.value;

                            _o2.push({
                              x: _t4[0],
                              y: _t4[1],
                              m: _t4[2]
                            });
                          }
                        } catch (err) {
                          _iterator4.e(err);
                        } finally {
                          _iterator4.f();
                        }
                      } else {
                        var _iterator5 = _createForOfIteratorHelper(_e2),
                            _step5;

                        try {
                          for (_iterator5.s(); !(_step5 = _iterator5.n()).done;) {
                            var _t5 = _step5.value;

                            _o2.push({
                              x: _t5[0],
                              y: _t5[1]
                            });
                          }
                        } catch (err) {
                          _iterator5.e(err);
                        } finally {
                          _iterator5.f();
                        }
                      }
                    }
                  } catch (err) {
                    _iterator.e(err);
                  } finally {
                    _iterator.f();
                  }

                  t.coordinates = _o2, t._exporter = function (t, i) {
                    var o = e.hasM ? t.map(function (e) {
                      return [e.x, e.y, e.z, e.m];
                    }) : t.map(function (e) {
                      return [e.x, e.y, e.z];
                    }),
                        l = _s2.map(function (e) {
                      return o.slice(e[0], e[1]);
                    });

                    return new _geometry_Polyline_js__WEBPACK_IMPORTED_MODULE_5__["default"]({
                      paths: l,
                      hasM: e.hasM,
                      hasZ: !0,
                      spatialReference: i
                    });
                  };
                  break;
                }
            }
            return t;
          }
        }]);

        return x;
      }();

      var g = function g(e, t) {
        _classCallCheck(this, g);

        this.layer = e, this.options = t;
      };

      var w = /*#__PURE__*/function (_g) {
        _inherits(w, _g);

        var _super = _createSuper(w);

        function w(e, t, i) {
          var _this3;

          _classCallCheck(this, w);

          _this3 = _super.call(this, e, i), _this3.type = "geometry", _this3.outSpatialReference = t;
          return _this3;
        }

        _createClass(w, [{
          key: "selectTilesAtLOD",
          value: function selectTilesAtLOD(e) {
            if (e < 0) this.geometry.coordinates.forEach(function (e) {
              return e.tile = null;
            });else {
              var t = this.layer.tileInfo,
                  i = t.lods[e].level;
              this.geometry.coordinates.forEach(function (e) {
                e.tile = t.tileAt(i, e.x, e.y);
              });
            }
          }
        }, {
          key: "allElevationTilesFetched",
          value: function allElevationTilesFetched() {
            return !this.geometry.coordinates.some(function (e) {
              return !e.elevationTile;
            });
          }
        }, {
          key: "clearElevationTiles",
          value: function clearElevationTiles() {
            var _iterator6 = _createForOfIteratorHelper(this.geometry.coordinates),
                _step6;

            try {
              for (_iterator6.s(); !(_step6 = _iterator6.n()).done;) {
                var e = _step6.value;
                e.elevationTile !== this.outsideExtentTile && (e.elevationTile = null);
              }
            } catch (err) {
              _iterator6.e(err);
            } finally {
              _iterator6.f();
            }
          }
        }, {
          key: "populateElevationTiles",
          value: function populateElevationTiles(e) {
            var _iterator7 = _createForOfIteratorHelper(this.geometry.coordinates),
                _step7;

            try {
              for (_iterator7.s(); !(_step7 = _iterator7.n()).done;) {
                var t = _step7.value;
                !t.elevationTile && t.tile && (t.elevationTile = e[t.tile.id]);
              }
            } catch (err) {
              _iterator7.e(err);
            } finally {
              _iterator7.f();
            }
          }
        }, {
          key: "remapTiles",
          value: function remapTiles(e) {
            var _iterator8 = _createForOfIteratorHelper(this.geometry.coordinates),
                _step8;

            try {
              for (_iterator8.s(); !(_step8 = _iterator8.n()).done;) {
                var t = _step8.value;
                t.tile = e[t.tile.id];
              }
            } catch (err) {
              _iterator8.e(err);
            } finally {
              _iterator8.f();
            }
          }
        }, {
          key: "getTilesToFetch",
          value: function getTilesToFetch() {
            var e = {},
                t = [];

            var _iterator9 = _createForOfIteratorHelper(this.geometry.coordinates),
                _step9;

            try {
              for (_iterator9.s(); !(_step9 = _iterator9.n()).done;) {
                var i = _step9.value;
                var o = i.tile;
                i.elevationTile || !i.tile || e[o.id] || (e[o.id] = o, t.push(o));
              }
            } catch (err) {
              _iterator9.e(err);
            } finally {
              _iterator9.f();
            }

            return t;
          }
        }, {
          key: "forEachTileToFetch",
          value: function forEachTileToFetch(e) {
            var _iterator10 = _createForOfIteratorHelper(this.geometry.coordinates),
                _step10;

            try {
              var _loop = function _loop() {
                var t = _step10.value;
                t.tile && !t.elevationTile && e(t.tile, function () {
                  return t.tile = null;
                });
              };

              for (_iterator10.s(); !(_step10 = _iterator10.n()).done;) {
                _loop();
              }
            } catch (err) {
              _iterator10.e(err);
            } finally {
              _iterator10.f();
            }
          }
        }]);

        return w;
      }(g);

      var _ = /*#__PURE__*/function (_g2) {
        _inherits(_, _g2);

        var _super2 = _createSuper(_);

        function _(e, t, i, o) {
          var _this4;

          _classCallCheck(this, _);

          _this4 = _super2.call(this, e, i), _this4.type = "extent", _this4.elevationTiles = [], _this4.candidateTiles = [], _this4.fetchedCandidates = new Set(), _this4.extent = t.intersection(e.fullExtent), _this4.maskExtents = o;
          return _this4;
        }

        _createClass(_, [{
          key: "selectTilesAtLOD",
          value: function selectTilesAtLOD(e, t) {
            var i = this._maximumLodForRequests(t),
                o = Math.min(i, e);

            o < 0 ? this.candidateTiles.length = 0 : this._selectCandidateTilesCoveringExtentAt(o);
          }
        }, {
          key: "_maximumLodForRequests",
          value: function _maximumLodForRequests(e) {
            var t = this.layer.tileInfo;
            if (!e) return t.lods.length - 1;
            var i = this.extent;

            for (var o = t.lods.length - 1; o >= 0; o--) {
              var s = t.lods[o],
                  l = s.resolution * t.size[0],
                  n = s.resolution * t.size[1];
              if (Math.ceil(i.width / l) * Math.ceil(i.height / n) <= e) return o;
            }

            return -1;
          }
        }, {
          key: "allElevationTilesFetched",
          value: function allElevationTilesFetched() {
            return this.candidateTiles.length === this.elevationTiles.length;
          }
        }, {
          key: "clearElevationTiles",
          value: function clearElevationTiles() {
            this.elevationTiles.length = 0, this.fetchedCandidates.clear();
          }
        }, {
          key: "populateElevationTiles",
          value: function populateElevationTiles(e) {
            var _iterator11 = _createForOfIteratorHelper(this.candidateTiles),
                _step11;

            try {
              for (_iterator11.s(); !(_step11 = _iterator11.n()).done;) {
                var t = _step11.value;
                var i = e[t.id];
                i && (this.fetchedCandidates.add(t), this.elevationTiles.push(i));
              }
            } catch (err) {
              _iterator11.e(err);
            } finally {
              _iterator11.f();
            }
          }
        }, {
          key: "remapTiles",
          value: function remapTiles(e) {
            this.candidateTiles = this._uniqueNonOverlappingTiles(this.candidateTiles.map(function (t) {
              return e[t.id];
            }));
          }
        }, {
          key: "getTilesToFetch",
          value: function getTilesToFetch() {
            return this.candidateTiles;
          }
        }, {
          key: "forEachTileToFetch",
          value: function forEachTileToFetch(e, t) {
            var _this5 = this;

            var i = this.candidateTiles;
            this.candidateTiles = [], i.forEach(function (i) {
              if (_this5.fetchedCandidates.has(i)) return void (t && t(i));
              var o = !1;
              e(i, function () {
                return o = !0;
              }), o ? t && t(i) : _this5.candidateTiles.push(i);
            }), this.candidateTiles = this._uniqueNonOverlappingTiles(this.candidateTiles, t);
          }
        }, {
          key: "_uniqueNonOverlappingTiles",
          value: function _uniqueNonOverlappingTiles(e, t) {
            var i = {},
                o = [];

            var _iterator12 = _createForOfIteratorHelper(e),
                _step12;

            try {
              for (_iterator12.s(); !(_step12 = _iterator12.n()).done;) {
                var _s3 = _step12.value;
                i[_s3.id] ? t && t(_s3) : (i[_s3.id] = _s3, o.push(_s3));
              }
            } catch (err) {
              _iterator12.e(err);
            } finally {
              _iterator12.f();
            }

            var s = o.sort(function (e, t) {
              return e.level - t.level;
            });
            return s.filter(function (e, i) {
              for (var _o3 = 0; _o3 < i; _o3++) {
                if (Object(_geometry_support_aaBoundingRect_js__WEBPACK_IMPORTED_MODULE_8__["contains"])(s[_o3].extent, e.extent)) return t && t(e), !1;
              }

              return !0;
            });
          }
        }, {
          key: "_selectCandidateTilesCoveringExtentAt",
          value: function _selectCandidateTilesCoveringExtentAt(e) {
            this.candidateTiles.length = 0;
            var t = this.layer.tileInfo,
                i = t.lods[e],
                o = this.extent,
                s = t.tileAt(i.level, o.xmin, o.ymin),
                l = i.resolution * t.size[0],
                n = i.resolution * t.size[1],
                a = Math.ceil((o.xmax - s.extent[0]) / l),
                r = Math.ceil((o.ymax - s.extent[1]) / n);

            for (var _e3 = 0; _e3 < r; _e3++) {
              for (var _i4 = 0; _i4 < a; _i4++) {
                var _o4 = {
                  id: null,
                  level: s.level,
                  row: s.row - _e3,
                  col: s.col + _i4
                };
                t.updateTileInfo(_o4), this._tileIsMasked(_o4) || this.candidateTiles.push(_o4);
              }
            }
          }
        }, {
          key: "_tileIsMasked",
          value: function _tileIsMasked(e) {
            return !!this.maskExtents && this.maskExtents.some(function (t) {
              return Object(_geometry_support_aaBoundingRect_js__WEBPACK_IMPORTED_MODULE_8__["contains"])(t, e.extent);
            });
          }
        }]);

        return _;
      }(g);

      function E(e, t) {
        var i = e.lods.length - 1;

        if (t > 0) {
          var o = e.lods.findIndex(function (e) {
            return e.resolution < t;
          });
          0 === o ? i = 0 : o > 0 && (i = o - 1);
        }

        return i;
      }

      var R = {
        maximumAutoTileRequests: 20,
        noDataValue: 0,
        returnSampleInfo: !1,
        demResolution: "auto",
        minDemResolution: 0
      };
      /* harmony default export */

      __webpack_exports__["default"] = v;
      /***/
    },

    /***/
    "hR8n":
    /*!**********************************************************************!*\
      !*** ./node_modules/@arcgis/core/layers/support/ElevationSampler.js ***!
      \**********************************************************************/

    /*! exports provided: ElevationSamplerBase, MultiTileElevationSampler, TileElevationSampler, updateGeometryElevation */

    /***/
    function hR8n(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ElevationSamplerBase", function () {
        return c;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "MultiTileElevationSampler", function () {
        return p;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "TileElevationSampler", function () {
        return m;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "updateGeometryElevation", function () {
        return u;
      });
      /* harmony import */


      var _core_has_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ../../core/has.js */
      "wSAH");
      /* harmony import */


      var _core_Logger_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ../../core/Logger.js */
      "6S2I");
      /* harmony import */


      var _geometry_support_webMercatorUtils_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ../../geometry/support/webMercatorUtils.js */
      "l4ZG");
      /* harmony import */


      var _geometry_Point_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ../../geometry/Point.js */
      "SuVq");
      /* harmony import */


      var _geometry_support_contains_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ../../geometry/support/contains.js */
      "IXLn");
      /* harmony import */


      var _geometry_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ../../geometry.js */
      "4GrV");
      /* harmony import */


      var _core_unitUtils_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ../../core/unitUtils.js */
      "gEht");
      /* harmony import */


      var _geometry_support_aaBoundingRect_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! ../../geometry/support/aaBoundingRect.js */
      "kYAx");
      /*
      All material copyright ESRI, All Rights Reserved, unless otherwise specified.
      See https://js.arcgis.com/4.18/esri/copyright.txt for details.
      */


      var l = _core_Logger_js__WEBPACK_IMPORTED_MODULE_1__["default"].getLogger("esri.layers.support.ElevationSampler");

      var c = /*#__PURE__*/function () {
        function c() {
          _classCallCheck(this, c);
        }

        _createClass(c, [{
          key: "queryElevation",
          value: function queryElevation(e) {
            return u(e.clone(), this);
          }
        }, {
          key: "on",
          value: function on() {
            return x;
          }
        }, {
          key: "projectIfRequired",
          value: function projectIfRequired(e, t) {
            return h(e, t);
          }
        }]);

        return c;
      }();

      var m = /*#__PURE__*/function (_c) {
        _inherits(m, _c);

        var _super3 = _createSuper(m);

        function m(e, t, n) {
          var _this6;

          _classCallCheck(this, m);

          _this6 = _super3.call(this), _this6.tile = e, _this6.noDataValue = n, _this6.extent = Object(_geometry_support_aaBoundingRect_js__WEBPACK_IMPORTED_MODULE_7__["toExtent"])(e.tile.extent, t.spatialReference);
          var s = Object(_core_unitUtils_js__WEBPACK_IMPORTED_MODULE_6__["getMetersPerUnitForSR"])(t.spatialReference),
              i = t.lodAt(e.tile.level).resolution * s;
          _this6.demResolution = {
            min: i,
            max: i
          };
          return _this6;
        }

        _createClass(m, [{
          key: "spatialReference",
          get: function get() {
            return this.extent.spatialReference;
          }
        }, {
          key: "contains",
          value: function contains(e) {
            var t = this.projectIfRequired(e, this.spatialReference);
            return Object(_geometry_support_contains_js__WEBPACK_IMPORTED_MODULE_4__["extentContainsPoint"])(this.extent, t);
          }
        }, {
          key: "elevationAt",
          value: function elevationAt(e) {
            var t = this.projectIfRequired(e, this.spatialReference);
            if (!t) return null;

            if (!this.contains(e)) {
              var _t6 = this.extent,
                  n = "".concat(_t6.xmin, ", ").concat(_t6.ymin, ", ").concat(_t6.xmax, ", ").concat(_t6.ymax);
              l.warn("#elevationAt()", "Point used to sample elevation (".concat(e.x, ", ").concat(e.y, ") is outside of the sampler extent (").concat(n, ")"));
            }

            return this.tile.sample(t.x, t.y);
          }
        }]);

        return m;
      }(c);

      var p = /*#__PURE__*/function (_c2) {
        _inherits(p, _c2);

        var _super4 = _createSuper(p);

        function p(e, t, n) {
          var _this7;

          _classCallCheck(this, p);

          var s;
          _this7 = _super4.call(this), "number" == typeof t ? (_this7.noDataValue = t, s = null) : (s = t, _this7.noDataValue = n), _this7.samplers = s ? e.map(function (e) {
            return new m(e, s, _this7.noDataValue);
          }) : e;
          var i = _this7.samplers[0];

          if (i) {
            _this7.extent = i.extent.clone();
            var _i$demResolution = i.demResolution,
                _e4 = _i$demResolution.min,
                _t7 = _i$demResolution.max;
            _this7.demResolution = {
              min: _e4,
              max: _t7
            };

            for (var _e5 = 1; _e5 < _this7.samplers.length; _e5++) {
              var _t8 = _this7.samplers[_e5];
              _this7.extent.union(_t8.extent), _this7.demResolution.min = Math.min(_this7.demResolution.min, _t8.demResolution.min), _this7.demResolution.max = Math.max(_this7.demResolution.max, _t8.demResolution.max);
            }
          } else _this7.extent = Object(_geometry_support_aaBoundingRect_js__WEBPACK_IMPORTED_MODULE_7__["toExtent"])(Object(_geometry_support_aaBoundingRect_js__WEBPACK_IMPORTED_MODULE_7__["create"])(), s.spatialReference), _this7.demResolution = {
            min: 0,
            max: 0
          };

          return _this7;
        }

        _createClass(p, [{
          key: "spatialReference",
          get: function get() {
            return this.extent.spatialReference;
          }
        }, {
          key: "elevationAt",
          value: function elevationAt(e) {
            var t = this.projectIfRequired(e, this.spatialReference);
            if (!t) return null;

            var _iterator13 = _createForOfIteratorHelper(this.samplers),
                _step13;

            try {
              for (_iterator13.s(); !(_step13 = _iterator13.n()).done;) {
                var _e6 = _step13.value;
                if (_e6.contains(t)) return _e6.elevationAt(t);
              }
            } catch (err) {
              _iterator13.e(err);
            } finally {
              _iterator13.f();
            }

            return l.warn("#elevationAt()", "Point used to sample elevation (".concat(e.x, ", ").concat(e.y, ") is outside of the sampler")), null;
          }
        }]);

        return p;
      }(c);

      function u(e, t) {
        var n = h(e, t.spatialReference);
        if (!n) return null;

        switch (e.type) {
          case "point":
            !function (e, t, n) {
              e.z = n.elevationAt(t) || 0;
            }(e, n, t);
            break;

          case "polyline":
            !function (e, t, n) {
              f.spatialReference = t.spatialReference;
              var s = e.hasM && !e.hasZ;

              for (var i = 0; i < e.paths.length; i++) {
                var o = e.paths[i],
                    r = t.paths[i];

                for (var _e7 = 0; _e7 < o.length; _e7++) {
                  var _t9 = o[_e7],
                      _i5 = r[_e7];
                  f.x = _i5[0], f.y = _i5[1];
                  var a = n.elevationAt(f) || 0;
                  s && (_t9[3] = _t9[2]), _t9[2] = a;
                }
              }

              e.hasZ = !0;
            }(e, n, t);
            break;

          case "multipoint":
            !function (e, t, n) {
              f.spatialReference = t.spatialReference;
              var s = e.hasM && !e.hasZ;

              for (var i = 0; i < e.points.length; i++) {
                var o = e.points[i],
                    r = t.points[i];
                f.x = r[0], f.y = r[1];
                var a = n.elevationAt(f) || 0;
                s && (o[3] = o[2]), o[2] = a;
              }

              e.hasZ = !0;
            }(e, n, t);
        }

        return e;
      }

      function h(e, s) {
        var i = e.spatialReference;
        return i.equals(s) ? e : Object(_geometry_support_webMercatorUtils_js__WEBPACK_IMPORTED_MODULE_2__["canProject"])(i, s) ? Object(_geometry_support_webMercatorUtils_js__WEBPACK_IMPORTED_MODULE_2__["project"])(e, s) : (l.error("Cannot project geometry spatial reference (wkid:".concat(i.wkid, ") to elevation sampler spatial reference (wkid:").concat(s.wkid, ")")), null);
      }

      var f = new _geometry_Point_js__WEBPACK_IMPORTED_MODULE_3__["default"](),
          x = {
        remove: function remove() {}
      };
      /***/
    },

    /***/
    "oLAj":
    /*!*******************************************************************!*\
      !*** ./node_modules/@arcgis/core/layers/support/ElevationTile.js ***!
      \*******************************************************************/

    /*! exports provided: default, ElevationTile */

    /***/
    function oLAj(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ElevationTile", function () {
        return t;
      });
      /*
      All material copyright ESRI, All Rights Reserved, unless otherwise specified.
      See https://js.arcgis.com/4.18/esri/copyright.txt for details.
      */


      var t = /*#__PURE__*/function () {
        function t(_t10, a) {
          _classCallCheck(this, t);

          if (this.tile = _t10, !a) return void (this.samplerData = null);
          var e = this.tile.extent;
          this.samplerData = {
            pixelData: a.values,
            width: a.width,
            height: a.height,
            safeWidth: .99999999 * (a.width - 1),
            noDataValue: a.noDataValue,
            dx: (a.width - 1) / (e[2] - e[0]),
            dy: (a.width - 1) / (e[3] - e[1]),
            x0: e[0],
            y1: e[3]
          };
        }

        _createClass(t, [{
          key: "sample",
          value: function sample(_t11, e) {
            if (this.samplerData) return function (t, e, i) {
              var h = t.safeWidth,
                  r = t.width,
                  s = t.pixelData,
                  l = t.noDataValue,
                  n = a(t.dy * (t.y1 - i), 0, h),
                  o = a(t.dx * (e - t.x0), 0, h),
                  d = Math.floor(n),
                  u = Math.floor(o),
                  f = d * r + u,
                  p = f + r,
                  x = s[f],
                  D = s[p],
                  c = s[f + 1],
                  w = s[p + 1];

              if (x !== l && D !== l && c !== l && w !== l) {
                var _t12 = o - u,
                    _a2 = x + (c - x) * _t12;

                return _a2 + (D + (w - D) * _t12 - _a2) * (n - d);
              }

              return;
            }(this.samplerData, _t11, e);
          }
        }]);

        return t;
      }();

      function a(t, a, e) {
        return t < a ? a : t > e ? e : t;
      }
      /* harmony default export */


      __webpack_exports__["default"] = t;
      /***/
    }
  }]);
})();
//# sourceMappingURL=support-ElevationQuery-js-es5.js.map