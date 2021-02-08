(function () {
  function _createForOfIteratorHelper(o, allowArrayLike) { var it; if (typeof Symbol === "undefined" || o[Symbol.iterator] == null) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e17) { throw _e17; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = o[Symbol.iterator](); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e18) { didErr = true; err = _e18; }, f: function f() { try { if (!normalCompletion && it["return"] != null) it["return"](); } finally { if (didErr) throw err; } } }; }

  function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

  function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

  function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

  function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

  function _iterableToArrayLimit(arr, i) { if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr))) return; var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

  function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

  function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

  function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["layers-graphics-sources-support-CSVSourceWorker-js"], {
    /***/
    "136L":
    /*!**************************************************************************************!*\
      !*** ./node_modules/@arcgis/core/layers/graphics/sources/support/CSVSourceWorker.js ***!
      \**************************************************************************************/

    /*! exports provided: default, csvLatitudeFieldNames, csvLongitudeFieldNames */

    /***/
    function L(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "csvLatitudeFieldNames", function () {
        return E;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "csvLongitudeFieldNames", function () {
        return D;
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


      var _core_Error_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ../../../../core/Error.js */
      "zlDU");
      /* harmony import */


      var _core_urlUtils_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ../../../../core/urlUtils.js */
      "4EHJ");
      /* harmony import */


      var _core_promiseUtils_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ../../../../core/promiseUtils.js */
      "9MzC");
      /* harmony import */


      var _geometry_support_spatialReferenceUtils_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ../../../../geometry/support/spatialReferenceUtils.js */
      "f4Nx");
      /* harmony import */


      var _geometry_SpatialReference_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ../../../../geometry/SpatialReference.js */
      "WZb1");
      /* harmony import */


      var _geometry_support_webMercatorUtils_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! ../../../../geometry/support/webMercatorUtils.js */
      "l4ZG");
      /* harmony import */


      var _geometry_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! ../../../../geometry.js */
      "4GrV");
      /* harmony import */


      var _request_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! ../../../../request.js */
      "Lqtk");
      /* harmony import */


      var _geometry_projection_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
      /*! ../../../../geometry/projection.js */
      "gYg2");
      /* harmony import */


      var _core_number_js__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
      /*! ../../../../core/number.js */
      "cBWO");
      /* harmony import */


      var _OptimizedFeature_js__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
      /*! ../../OptimizedFeature.js */
      "k5I3");
      /* harmony import */


      var _OptimizedGeometry_js__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
      /*! ../../OptimizedGeometry.js */
      "gVKr");
      /* harmony import */


      var _support_FieldsIndex_js__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(
      /*! ../../../support/FieldsIndex.js */
      "gLc9");
      /* harmony import */


      var _geometry_geometryAdapters_json_js__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(
      /*! ../../../../geometry/geometryAdapters/json.js */
      "1kEK");
      /* harmony import */


      var _data_projectionSupport_js__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(
      /*! ../../data/projectionSupport.js */
      "HsO1");
      /* harmony import */


      var _clientSideDefaults_js__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(
      /*! ./clientSideDefaults.js */
      "iNG6");
      /* harmony import */


      var _data_FeatureStore_js__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(
      /*! ../../data/FeatureStore.js */
      "ZRfE");
      /* harmony import */


      var _data_QueryEngine_js__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(
      /*! ../../data/QueryEngine.js */
      "ZBG3");
      /* harmony import */


      var _csv_csv_js__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(
      /*! ../csv/csv.js */
      "vKS7");
      /*
      All material copyright ESRI, All Rights Reserved, unless otherwise specified.
      See https://js.arcgis.com/4.18/esri/copyright.txt for details.
      */


      var j = Object(_clientSideDefaults_js__WEBPACK_IMPORTED_MODULE_17__["createDrawingInfo"])("esriGeometryPoint"),
          w = ["esriFieldTypeSmallInteger", "esriFieldTypeInteger", "esriFieldTypeSingle", "esriFieldTypeDouble", "esriFieldTypeLong"],
          E = ["lat", "latitude", "latitude83", "latdecdeg", "lat_dd", "y", "ycenter", "point-y"],
          D = ["lon", "lng", "long", "longitude", "longitude83", "longdecdeg", "long_dd", "x", "xcenter", "point-x"],
          q = /^((jan(uary)?)|(feb(ruary)?)|(mar(ch)?)|(apr(il)?)|(may)|(jun(e)?)|(jul(y)?)|(aug(ust)?)|(sep(tember)?)|(oct(ober)?)|(nov(ember)?)|(dec(ember)?)|(am)|(pm)|(gmt)|(utc))$/i,
          v = ["csv"],
          S = [0, 0];

      var C = function C(e, t) {
        _classCallCheck(this, C);

        this.x = e, this.y = t;
      };

      var V = function () {
        var e = Object(_core_number_js__WEBPACK_IMPORTED_MODULE_11__["_parseInfo"])(),
            t = new RegExp("^" + e.regexp + "$"),
            i = new RegExp("[" + e.group + "\\s\\xa0]", "g"),
            n = e.factor;
        return function (r) {
          var o = t.exec(r);
          if (e.factor = n, !o) return NaN;
          var l = o[1];

          if (!o[1]) {
            if (!o[2]) return NaN;
            l = o[2], e.factor *= -1;
          }

          return l = l.replace(i, "").replace(e.decimal, "."), +l * e.factor;
        };
      }(),
          k = "isInteger" in Number ? Number.isInteger : function (e) {
        return "number" == typeof e && isFinite(e) && Math.floor(e) === e;
      };
      /* harmony default export */


      __webpack_exports__["default"] = /*#__PURE__*/function () {
        function _class() {
          _classCallCheck(this, _class);

          this._fieldsIndex = null, this._queryEngine = null;
        }

        _createClass(_class, [{
          key: "destroy",
          value: function destroy() {
            this._queryEngine && this._queryEngine && this._queryEngine.destroy(), this._queryEngine = null, this._fieldsIndex = null;
          }
        }, {
          key: "load",
          value: function () {
            var _load = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(e) {
              var t,
                  _yield$Object,
                  _yield$Object2,
                  i,
                  n,
                  _this$_queryEngine$ti,
                  _e2,
                  _t,
                  _args = arguments;

              return regeneratorRuntime.wrap(function _callee$(_context) {
                while (1) {
                  switch (_context.prev = _context.next) {
                    case 0:
                      t = _args.length > 1 && _args[1] !== undefined ? _args[1] : {};
                      _context.next = 3;
                      return Object(_core_promiseUtils_js__WEBPACK_IMPORTED_MODULE_4__["all"])([this._fetch(e.url, t), this._checkProjection(t && e.parsing && e.parsing.spatialReference)]);

                    case 3:
                      _yield$Object = _context.sent;
                      _yield$Object2 = _slicedToArray(_yield$Object, 1);
                      i = _yield$Object2[0];
                      n = this._parse(i, e);

                      if (this._queryEngine = this._createQueryEngine(i, n), n.layerDefinition.extent = this._queryEngine.fullExtent, n.layerDefinition.timeInfo) {
                        _this$_queryEngine$ti = this._queryEngine.timeExtent, _e2 = _this$_queryEngine$ti.start, _t = _this$_queryEngine$ti.end;
                        n.layerDefinition.timeInfo.timeExtent = [_e2, _t];
                      }

                      return _context.abrupt("return", n);

                    case 9:
                    case "end":
                      return _context.stop();
                  }
                }
              }, _callee, this);
            }));

            function load(_x) {
              return _load.apply(this, arguments);
            }

            return load;
          }()
        }, {
          key: "applyEdits",
          value: function () {
            var _applyEdits = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee2() {
              return regeneratorRuntime.wrap(function _callee2$(_context2) {
                while (1) {
                  switch (_context2.prev = _context2.next) {
                    case 0:
                      throw new _core_Error_js__WEBPACK_IMPORTED_MODULE_2__["default"]("csv-source:editing-not-supported", "applyEdits() is not supported on CSVLayer");

                    case 1:
                    case "end":
                      return _context2.stop();
                  }
                }
              }, _callee2);
            }));

            function applyEdits() {
              return _applyEdits.apply(this, arguments);
            }

            return applyEdits;
          }()
        }, {
          key: "queryFeatures",
          value: function () {
            var _queryFeatures = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee3() {
              var e,
                  t,
                  _args3 = arguments;
              return regeneratorRuntime.wrap(function _callee3$(_context3) {
                while (1) {
                  switch (_context3.prev = _context3.next) {
                    case 0:
                      e = _args3.length > 0 && _args3[0] !== undefined ? _args3[0] : {};
                      t = _args3.length > 1 && _args3[1] !== undefined ? _args3[1] : {};
                      return _context3.abrupt("return", this._queryEngine.executeQuery(e, t.signal));

                    case 3:
                    case "end":
                      return _context3.stop();
                  }
                }
              }, _callee3, this);
            }));

            function queryFeatures() {
              return _queryFeatures.apply(this, arguments);
            }

            return queryFeatures;
          }()
        }, {
          key: "queryFeatureCount",
          value: function () {
            var _queryFeatureCount = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee4() {
              var e,
                  t,
                  _args4 = arguments;
              return regeneratorRuntime.wrap(function _callee4$(_context4) {
                while (1) {
                  switch (_context4.prev = _context4.next) {
                    case 0:
                      e = _args4.length > 0 && _args4[0] !== undefined ? _args4[0] : {};
                      t = _args4.length > 1 && _args4[1] !== undefined ? _args4[1] : {};
                      return _context4.abrupt("return", this._queryEngine.executeQueryForCount(e, t.signal));

                    case 3:
                    case "end":
                      return _context4.stop();
                  }
                }
              }, _callee4, this);
            }));

            function queryFeatureCount() {
              return _queryFeatureCount.apply(this, arguments);
            }

            return queryFeatureCount;
          }()
        }, {
          key: "queryObjectIds",
          value: function () {
            var _queryObjectIds = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee5() {
              var e,
                  t,
                  _args5 = arguments;
              return regeneratorRuntime.wrap(function _callee5$(_context5) {
                while (1) {
                  switch (_context5.prev = _context5.next) {
                    case 0:
                      e = _args5.length > 0 && _args5[0] !== undefined ? _args5[0] : {};
                      t = _args5.length > 1 && _args5[1] !== undefined ? _args5[1] : {};
                      return _context5.abrupt("return", this._queryEngine.executeQueryForIds(e, t.signal));

                    case 3:
                    case "end":
                      return _context5.stop();
                  }
                }
              }, _callee5, this);
            }));

            function queryObjectIds() {
              return _queryObjectIds.apply(this, arguments);
            }

            return queryObjectIds;
          }()
        }, {
          key: "queryExtent",
          value: function () {
            var _queryExtent = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee6() {
              var e,
                  t,
                  _args6 = arguments;
              return regeneratorRuntime.wrap(function _callee6$(_context6) {
                while (1) {
                  switch (_context6.prev = _context6.next) {
                    case 0:
                      e = _args6.length > 0 && _args6[0] !== undefined ? _args6[0] : {};
                      t = _args6.length > 1 && _args6[1] !== undefined ? _args6[1] : {};
                      return _context6.abrupt("return", this._queryEngine.executeQueryForExtent(e, t.signal));

                    case 3:
                    case "end":
                      return _context6.stop();
                  }
                }
              }, _callee6, this);
            }));

            function queryExtent() {
              return _queryExtent.apply(this, arguments);
            }

            return queryExtent;
          }()
        }, {
          key: "_fetch",
          value: function () {
            var _fetch2 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee7(e, t) {
              var r;
              return regeneratorRuntime.wrap(function _callee7$(_context7) {
                while (1) {
                  switch (_context7.prev = _context7.next) {
                    case 0:
                      if (e) {
                        _context7.next = 2;
                        break;
                      }

                      throw new _core_Error_js__WEBPACK_IMPORTED_MODULE_2__["default"]("csv-source:invalid-source", "url not defined");

                    case 2:
                      r = Object(_core_urlUtils_js__WEBPACK_IMPORTED_MODULE_3__["urlToObject"])(e);
                      _context7.next = 5;
                      return Object(_request_js__WEBPACK_IMPORTED_MODULE_9__["default"])(r.path, {
                        query: r.query,
                        responseType: "text",
                        signal: t.signal
                      });

                    case 5:
                      return _context7.abrupt("return", _context7.sent.data);

                    case 6:
                    case "end":
                      return _context7.stop();
                  }
                }
              }, _callee7);
            }));

            function _fetch(_x2, _x3) {
              return _fetch2.apply(this, arguments);
            }

            return _fetch;
          }()
        }, {
          key: "_parse",
          value: function _parse(e, n) {
            var o = n.parsing || {},
                l = {
              columnDelimiter: o.columnDelimiter,
              layerDefinition: null,
              locationInfo: {
                latitudeFieldName: o.latitudeField,
                longitudeFieldName: o.longitudeField
              }
            },
                s = Object(_csv_csv_js__WEBPACK_IMPORTED_MODULE_20__["readRows"])(e);

            var _s$next = s.next(),
                a = _s$next.value;

            if (!a) throw new _core_Error_js__WEBPACK_IMPORTED_MODULE_2__["default"]("csv", "CSV is empty", {
              csv: e
            });

            if (a = a.trim(), !o.columnDelimiter) {
              var _e3 = Object(_csv_csv_js__WEBPACK_IMPORTED_MODULE_20__["inferDelimiter"])(a);

              if (!_e3) throw new _core_Error_js__WEBPACK_IMPORTED_MODULE_2__["default"]("csv-source:invalid-delimiter", "Unable to detect the delimiter from CSV");
              l.columnDelimiter = _e3;
            }

            var d = a.split(l.columnDelimiter),
                u = l.layerDefinition = {
              name: Object(_core_urlUtils_js__WEBPACK_IMPORTED_MODULE_3__["getFilename"])(n.url, v) || "csv",
              drawingInfo: j,
              geometryType: "esriGeometryPoint",
              objectIdField: null,
              fields: [],
              timeInfo: o.timeInfo,
              extent: {
                xmin: Number.POSITIVE_INFINITY,
                ymin: Number.POSITIVE_INFINITY,
                xmax: Number.NEGATIVE_INFINITY,
                ymax: Number.NEGATIVE_INFINITY,
                spatialReference: o.spatialReference || {
                  wkid: 102100
                }
              }
            };

            if (!o.latitudeField || !o.longitudeField) {
              var _e4 = this._inferLocationInfo(d);

              if (!o.longitudeField && !_e4.longitudeFieldName || !o.latitudeField && !_e4.latitudeFieldName) throw new _core_Error_js__WEBPACK_IMPORTED_MODULE_2__["default"]("csv", "Unable to identify latitudeField and/or longitudeField from CSV");
              l.locationInfo = {
                longitudeFieldName: o.longitudeField || _e4.longitudeFieldName,
                latitudeFieldName: o.latitudeField || _e4.latitudeFieldName
              };
            }

            var c = this._inferFields(s, l.columnDelimiter, d, l.locationInfo);

            if (o.fields && o.fields.length) {
              var _e5 = new Map();

              var _iterator = _createForOfIteratorHelper(o.fields),
                  _step;

              try {
                for (_iterator.s(); !(_step = _iterator.n()).done;) {
                  var t = _step.value;

                  _e5.set(t.name.toLowerCase(), t);
                }
              } catch (err) {
                _iterator.e(err);
              } finally {
                _iterator.f();
              }

              var _iterator2 = _createForOfIteratorHelper(c),
                  _step2;

              try {
                for (_iterator2.s(); !(_step2 = _iterator2.n()).done;) {
                  var i = _step2.value;

                  var _n2 = _e5.get(i.name.toLowerCase());

                  if (_n2) {
                    var _e6 = i.name;
                    Object(_core_lang_js__WEBPACK_IMPORTED_MODULE_1__["mixin"])(i, _n2), i.name = _e6;
                  }
                }
              } catch (err) {
                _iterator2.e(err);
              } finally {
                _iterator2.f();
              }
            }

            u.fields = c;

            if (!u.fields.some(function (e) {
              return "esriFieldTypeOID" === e.type && (u.objectIdField = e.name, !0);
            })) {
              var _e7 = {
                name: "__OBJECTID",
                alias: "__OBJECTID",
                type: "esriFieldTypeOID",
                editable: !1,
                nullable: !1
              };
              u.objectIdField = _e7.name, u.fields.unshift(_e7);
            }

            if (this._fieldsIndex = new _support_FieldsIndex_js__WEBPACK_IMPORTED_MODULE_14__["default"](u.fields), u.timeInfo) {
              var _e8 = u.timeInfo;

              if (_e8.startTimeField) {
                var _t2 = this._fieldsIndex.get(_e8.startTimeField);

                _t2 ? (_e8.startTimeField = _t2.name, _t2.type = "esriFieldTypeDate") : _e8.startTimeField = null;
              }

              if (_e8.endTimeField) {
                var _t3 = this._fieldsIndex.get(_e8.endTimeField);

                _t3 ? (_e8.endTimeField = _t3.name, _t3.type = "esriFieldTypeDate") : _e8.endTimeField = null;
              }

              if (_e8.trackIdField) {
                var _t4 = this._fieldsIndex.get(_e8.trackIdField);

                _e8.trackIdField = _t4 ? _t4.name : null;
              }

              _e8.startTimeField || _e8.endTimeField || (u.timeInfo = null);
            }

            return l;
          }
        }, {
          key: "_inferLocationInfo",
          value: function _inferLocationInfo(e) {
            var t = null,
                i = null;

            var n = function n(t) {
              return e.find(function (e) {
                return e.toLowerCase() === t;
              });
            };

            return D.some(function (e) {
              return t = n(e), !!t;
            }), E.some(function (e) {
              return i = n(e), !!i;
            }), {
              longitudeFieldName: t,
              latitudeFieldName: i
            };
          }
        }, {
          key: "_inferFields",
          value: function _inferFields(e, t, i, n) {
            var _this = this;

            var r = [],
                o = Object(_csv_csv_js__WEBPACK_IMPORTED_MODULE_20__["parseRows"])(e, i, t),
                l = [];

            e: for (; l.length < 10;) {
              var _o$next = o.next(),
                  _e9 = _o$next.value,
                  _t5 = _o$next.done;

              if (_t5) break e;
              l.push(_e9);
            }

            var _iterator3 = _createForOfIteratorHelper(i),
                _step3;

            try {
              var _loop = function _loop() {
                var e = _step3.value;
                if (e === n.longitudeFieldName || e === n.latitudeFieldName) r.push({
                  name: e,
                  type: "esriFieldTypeDouble",
                  alias: e
                });else {
                  var _t6 = l.map(function (t) {
                    return t[e];
                  }),
                      _i2 = _this._inferFieldType(_t6),
                      _n3 = {
                    name: e,
                    type: null,
                    alias: e
                  };

                  switch (_i2) {
                    case "integer":
                      _n3.type = "esriFieldTypeInteger";
                      break;

                    case "double":
                      _n3.type = "esriFieldTypeDouble";
                      break;

                    case "date":
                      _n3.type = "esriFieldTypeDate", _n3.length = 36;
                      break;

                    default:
                      _n3.type = "esriFieldTypeString", _n3.length = 255;
                  }

                  r.push(_n3);
                }
              };

              for (_iterator3.s(); !(_step3 = _iterator3.n()).done;) {
                _loop();
              }
            } catch (err) {
              _iterator3.e(err);
            } finally {
              _iterator3.f();
            }

            return r;
          }
        }, {
          key: "_inferFieldType",
          value: function _inferFieldType(e) {
            var _this2 = this;

            if (!e.length) return "string";
            var t = /[^+-.,0-9]/;
            return e.map(function (e) {
              var i = !1;

              if ("" !== e) {
                if (t.test(e)) i = !0;else {
                  var _t7 = V(e);

                  if (!isNaN(_t7)) return /[.,]/.test(e) || !k(_t7) || _t7 > 214783647 || _t7 < -214783648 ? "double" : "integer";
                  if (-1 === e.indexOf("E")) i = !0;else {
                    if (_t7 = Number(e), !isNaN(_t7)) return "double";
                    if (-1 === e.indexOf(",")) i = !0;else {
                      if (e = e.replace(",", "."), _t7 = Number(e), !isNaN(_t7)) return "double";
                      i = !0;
                    }
                  }
                }

                if (i) {
                  if (!/^[-]?\d*[.,]?\d*$/.test(e)) {
                    var _t8 = new Date(e);

                    return _this2._isValidDate(_t8, e) ? "date" : "string";
                  }

                  return "string";
                }

                return "string";
              }
            }).reduce(function (e, t) {
              return void 0 === e || e === t ? t : "string" === e || "string" === t ? "string" : "double" === e || "double" === t ? "double" : void 0;
            });
          }
        }, {
          key: "_isValidDate",
          value: function _isValidDate(t, i) {
            if (!t || "[object Date]" !== Object.prototype.toString.call(t) || isNaN(t.getTime())) return !1;
            var n = !0;

            if (Object(_core_has_js__WEBPACK_IMPORTED_MODULE_0__["default"])("chrome") && /\d+\W*$/.test(i)) {
              var e = i.match(/[a-zA-Z]{2,}/);

              if (e) {
                var _t9 = !1,
                    _i3 = 0;

                for (; !_t9 && _i3 <= e.length;) {
                  _t9 = !q.test(e[_i3]), _i3++;
                }

                n = !_t9;
              }
            }

            return n;
          }
        }, {
          key: "_createQueryEngine",
          value: function _createQueryEngine(e, t) {
            var _t$locationInfo = t.locationInfo,
                i = _t$locationInfo.latitudeFieldName,
                n = _t$locationInfo.longitudeFieldName,
                _t$layerDefinition = t.layerDefinition,
                r = _t$layerDefinition.objectIdField,
                o = _t$layerDefinition.fields,
                a = _t$layerDefinition.extent,
                c = _t$layerDefinition.timeInfo;
            var f = [];
            var g = [],
                h = new Set(),
                I = new Set(),
                b = [];

            var _iterator4 = _createForOfIteratorHelper(o),
                _step4;

            try {
              for (_iterator4.s(); !(_step4 = _iterator4.n()).done;) {
                var _step4$value = _step4.value,
                    _e13 = _step4$value.name,
                    _t13 = _step4$value.type;
                "esriFieldTypeDate" === _t13 ? h.add(_e13) : w.indexOf(_t13) > -1 && I.add(_e13), _e13 !== r && b.push(_e13);
              }
            } catch (err) {
              _iterator4.e(err);
            } finally {
              _iterator4.f();
            }

            var j = 0;
            var E = Object(_csv_csv_js__WEBPACK_IMPORTED_MODULE_20__["readRows"])(e);
            E.next();
            var D = Object(_csv_csv_js__WEBPACK_IMPORTED_MODULE_20__["parseRows"])(E, b, t.columnDelimiter);

            e: for (;;) {
              var _D$next = D.next(),
                  _e10 = _D$next.value,
                  _t10 = _D$next.done;

              if (_t10) break e;

              var _o = this._parseCoordinateValue(_e10[i]),
                  l = this._parseCoordinateValue(_e10[n]);

              if (null != l && null != _o && !isNaN(_o) && !isNaN(l)) {
                _e10[i] = _o, _e10[n] = l;

                for (var _t11 in _e10) {
                  if (_t11 !== i && _t11 !== n) if (h.has(_t11)) {
                    var _i4 = new Date(_e10[_t11]);

                    _e10[_t11] = this._isValidDate(_i4, _e10[_t11]) ? _i4.getTime() : null;
                  } else if (I.has(_t11)) {
                    var _i5 = V(_e10[_t11]);

                    isNaN(_i5) ? _e10[_t11] = null : _e10[_t11] = _i5;
                  }
                }

                _e10[r] = j, j++, f.push(new C(l, _o)), g.push(_e10);
              }
            }

            if (!Object(_geometry_support_spatialReferenceUtils_js__WEBPACK_IMPORTED_MODULE_5__["equals"])({
              wkid: 4326
            }, a.spatialReference)) if (Object(_geometry_support_spatialReferenceUtils_js__WEBPACK_IMPORTED_MODULE_5__["isWebMercator"])(a.spatialReference)) {
              var _iterator5 = _createForOfIteratorHelper(f),
                  _step5;

              try {
                for (_iterator5.s(); !(_step5 = _iterator5.n()).done;) {
                  var _e11 = _step5.value;

                  var _Object = Object(_geometry_support_webMercatorUtils_js__WEBPACK_IMPORTED_MODULE_7__["lngLatToXY"])(_e11.x, _e11.y, S);

                  var _Object2 = _slicedToArray(_Object, 2);

                  _e11.x = _Object2[0];
                  _e11.y = _Object2[1];
                }
              } catch (err) {
                _iterator5.e(err);
              } finally {
                _iterator5.f();
              }
            } else f = Object(_geometry_projection_js__WEBPACK_IMPORTED_MODULE_10__["projectMany"])(_geometry_geometryAdapters_json_js__WEBPACK_IMPORTED_MODULE_15__["jsonAdapter"], f, _geometry_SpatialReference_js__WEBPACK_IMPORTED_MODULE_6__["default"].WGS84, a.spatialReference, null);
            var q = new _data_FeatureStore_js__WEBPACK_IMPORTED_MODULE_18__["default"]({
              geometryType: "esriGeometryPoint",
              hasM: !1,
              hasZ: !1
            }),
                v = new _data_QueryEngine_js__WEBPACK_IMPORTED_MODULE_19__["default"]({
              fields: t.layerDefinition.fields,
              geometryType: "esriGeometryPoint",
              hasM: !1,
              hasZ: !1,
              timeInfo: c,
              objectIdField: r,
              spatialReference: a.spatialReference || {
                wkid: 4326
              },
              cacheSpatialQueries: !0,
              featureStore: q
            }),
                k = [];

            for (var _e12 = 0; _e12 < f.length; _e12++) {
              var _f$_e = f[_e12],
                  _t12 = _f$_e.x,
                  _i6 = _f$_e.y,
                  _n4 = g[_e12];
              _n4[r] = _e12 + 1, k.push(new _OptimizedFeature_js__WEBPACK_IMPORTED_MODULE_12__["default"](new _OptimizedGeometry_js__WEBPACK_IMPORTED_MODULE_13__["default"]([], [_t12, _i6]), _n4, null, _n4[r]));
            }

            return q.addMany(k), v;
          }
        }, {
          key: "_parseCoordinateValue",
          value: function _parseCoordinateValue(e) {
            if (null == e || "" === e) return null;
            var t = V(e);
            return (isNaN(t) || Math.abs(t) > 181) && (t = parseFloat(e)), t;
          }
        }, {
          key: "_checkProjection",
          value: function () {
            var _checkProjection2 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee8(e) {
              return regeneratorRuntime.wrap(function _callee8$(_context8) {
                while (1) {
                  switch (_context8.prev = _context8.next) {
                    case 0:
                      _context8.prev = 0;
                      _context8.next = 3;
                      return Object(_data_projectionSupport_js__WEBPACK_IMPORTED_MODULE_16__["checkProjectionSupport"])(_geometry_support_spatialReferenceUtils_js__WEBPACK_IMPORTED_MODULE_5__["WGS84"], e);

                    case 3:
                      _context8.next = 8;
                      break;

                    case 5:
                      _context8.prev = 5;
                      _context8.t0 = _context8["catch"](0);
                      throw new _core_Error_js__WEBPACK_IMPORTED_MODULE_2__["default"]("csv-layer", "Projection not supported");

                    case 8:
                    case "end":
                      return _context8.stop();
                  }
                }
              }, _callee8, null, [[0, 5]]);
            }));

            function _checkProjection(_x4) {
              return _checkProjection2.apply(this, arguments);
            }

            return _checkProjection;
          }()
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
    "vKS7":
    /*!**********************************************************************!*\
      !*** ./node_modules/@arcgis/core/layers/graphics/sources/csv/csv.js ***!
      \**********************************************************************/

    /*! exports provided: inferDelimiter, parseRows, readRowParts, readRows */

    /***/
    function vKS7(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      var _marked = /*#__PURE__*/regeneratorRuntime.mark(r),
          _marked2 = /*#__PURE__*/regeneratorRuntime.mark(s);

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "inferDelimiter", function () {
        return f;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "parseRows", function () {
        return s;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "readRowParts", function () {
        return c;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "readRows", function () {
        return i;
      });
      /*
      All material copyright ESRI, All Rights Reserved, unless otherwise specified.
      See https://js.arcgis.com/4.18/esri/copyright.txt for details.
      */


      var n = /^\s*"([\S\s]*)"\s*$/,
          t = /""/g,
          e = [",", " ", ";", "|", "\t"];

      function o(n, t) {
        var e = {},
            o = n.length;

        for (var _r = 0; _r < o; _r++) {
          e[n[_r]] = t[_r];
        }

        return e;
      }

      function r(n, t, e) {
        var o, _r2, _i7;

        return regeneratorRuntime.wrap(function r$(_context9) {
          while (1) {
            switch (_context9.prev = _context9.next) {
              case 0:
                o = 0;

              case 1:
                if (!(o <= n.length)) {
                  _context9.next = 10;
                  break;
                }

                _r2 = n.indexOf(t, o), _i7 = n.substring(o, _r2 > -1 ? _r2 : void 0);
                o += _i7.length + 1;
                _context9.t0 = e && !_i7.trim();

                if (_context9.t0) {
                  _context9.next = 8;
                  break;
                }

                _context9.next = 8;
                return _i7;

              case 8:
                _context9.next = 1;
                break;

              case 10:
              case "end":
                return _context9.stop();
            }
          }
        }, _marked);
      }

      function i(n) {
        var t = n.includes("\r\n") ? "\r\n" : "\n";
        return r(n, t, !0);
      }

      function c(n, t) {
        return r(n, t, !1);
      }

      function f(n) {
        var t = n.trim();
        var o = 0,
            r = "";

        var _iterator6 = _createForOfIteratorHelper(e),
            _step6;

        try {
          for (_iterator6.s(); !(_step6 = _iterator6.n()).done;) {
            var _n5 = _step6.value;
            var _e14 = t.split(_n5).length;
            _e14 > o && (o = _e14, r = _n5);
          }
        } catch (err) {
          _iterator6.e(err);
        } finally {
          _iterator6.f();
        }

        return "" === r ? null : r;
      }

      function s(e, r, i) {
        var f, s, l, d, _e$next, x, g, h, _h$next, _e15, _o2, _e16;

        return regeneratorRuntime.wrap(function s$(_context10) {
          while (1) {
            switch (_context10.prev = _context10.next) {
              case 0:
                f = "", s = "", l = 0, d = [];

              case 1:
                _e$next = e.next(), x = _e$next.value, g = _e$next.done;

                if (!g) {
                  _context10.next = 4;
                  break;
                }

                return _context10.abrupt("return");

              case 4:
                h = c(x, i);

              case 5:
                _h$next = h.next(), _e15 = _h$next.value, _o2 = _h$next.done;

                if (!_o2) {
                  _context10.next = 8;
                  break;
                }

                return _context10.abrupt("break", 24);

              case 8:
                if (!(f += s + _e15, s = "", l += u(_e15), l % 2 == 0)) {
                  _context10.next = 21;
                  break;
                }

                if (!(l > 0)) {
                  _context10.next = 17;
                  break;
                }

                _e16 = n.exec(f);

                if (_e16) {
                  _context10.next = 14;
                  break;
                }

                d = [], f = "", l = 0;
                return _context10.abrupt("continue", 31);

              case 14:
                d.push(_e16[1].replace(t, '"'));
                _context10.next = 18;
                break;

              case 17:
                d.push(f);

              case 18:
                f = "", l = 0;
                _context10.next = 22;
                break;

              case 21:
                s = i;

              case 22:
                _context10.next = 5;
                break;

              case 24:
                if (!(0 === l)) {
                  _context10.next = 30;
                  break;
                }

                _context10.next = 27;
                return o(r, d);

              case 27:
                d = [];
                _context10.next = 31;
                break;

              case 30:
                s = "\n";

              case 31:
                _context10.next = 1;
                break;

              case 33:
              case "end":
                return _context10.stop();
            }
          }
        }, _marked2);
      }

      function u(n) {
        var t = 0,
            e = 0;

        for (e = n.indexOf('"', e); e >= 0;) {
          t++, e = n.indexOf('"', e + 1);
        }

        return t;
      }
      /***/

    }
  }]);
})();
//# sourceMappingURL=layers-graphics-sources-support-CSVSourceWorker-js-es5.js.map