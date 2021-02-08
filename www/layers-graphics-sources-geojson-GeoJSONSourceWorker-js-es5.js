(function () {
  function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

  function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

  function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

  function _createForOfIteratorHelper(o, allowArrayLike) { var it; if (typeof Symbol === "undefined" || o[Symbol.iterator] == null) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e7) { throw _e7; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = o[Symbol.iterator](); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e8) { didErr = true; err = _e8; }, f: function f() { try { if (!normalCompletion && it["return"] != null) it["return"](); } finally { if (didErr) throw err; } } }; }

  function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

  function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

  function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

  function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["layers-graphics-sources-geojson-GeoJSONSourceWorker-js"], {
    /***/
    "BUoz":
    /*!******************************************************************************************!*\
      !*** ./node_modules/@arcgis/core/layers/graphics/sources/geojson/GeoJSONSourceWorker.js ***!
      \******************************************************************************************/

    /*! exports provided: default */

    /***/
    function BUoz(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony import */


      var _core_Error_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ../../../../core/Error.js */
      "zlDU");
      /* harmony import */


      var _core_promiseUtils_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ../../../../core/promiseUtils.js */
      "9MzC");
      /* harmony import */


      var _geometry_support_spatialReferenceUtils_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ../../../../geometry/support/spatialReferenceUtils.js */
      "f4Nx");
      /* harmony import */


      var _geometry_support_jsonUtils_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ../../../../geometry/support/jsonUtils.js */
      "qatw");
      /* harmony import */


      var _support_fieldUtils_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ../../../support/fieldUtils.js */
      "wdpY");
      /* harmony import */


      var _request_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ../../../../request.js */
      "Lqtk");
      /* harmony import */


      var _support_fieldType_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ../../../support/fieldType.js */
      "Z4F+");
      /* harmony import */


      var _featureConversionUtils_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! ../../featureConversionUtils.js */
      "ZlUD");
      /* harmony import */


      var _support_FieldsIndex_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! ../../../support/FieldsIndex.js */
      "gLc9");
      /* harmony import */


      var _data_projectionSupport_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! ../../data/projectionSupport.js */
      "HsO1");
      /* harmony import */


      var _geojson_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
      /*! ./geojson.js */
      "46M0");
      /* harmony import */


      var _support_clientSideDefaults_js__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
      /*! ../support/clientSideDefaults.js */
      "iNG6");
      /* harmony import */


      var _data_FeatureStore_js__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
      /*! ../../data/FeatureStore.js */
      "ZRfE");
      /* harmony import */


      var _data_QueryEngine_js__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
      /*! ../../data/QueryEngine.js */
      "ZBG3");
      /* harmony import */


      var _support_sourceUtils_js__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(
      /*! ../support/sourceUtils.js */
      "IcpP");
      /*
      All material copyright ESRI, All Rights Reserved, unless otherwise specified.
      See https://js.arcgis.com/4.18/esri/copyright.txt for details.
      */


      var D = {
        hasAttachments: !1,
        capabilities: "query, editing, create, delete, update",
        useStandardizedQueries: !0,
        supportsCoordinatesQuantization: !0,
        supportsReturningQueryGeometry: !0,
        advancedQueryCapabilities: {
          supportsQueryAttachments: !1,
          supportsStatistics: !0,
          supportsPercentileStatistics: !0,
          supportsReturningGeometryCentroid: !0,
          supportsQueryWithDistance: !0,
          supportsDistinct: !0,
          supportsReturningQueryExtent: !0,
          supportsReturningGeometryProperties: !1,
          supportsHavingClause: !0,
          supportsOrderBy: !0,
          supportsPagination: !0,
          supportsQueryWithResultType: !1,
          supportsSqlExpression: !0,
          supportsDisjointSpatialRel: !0
        }
      };
      /* harmony default export */

      __webpack_exports__["default"] = /*#__PURE__*/function () {
        function _class() {
          _classCallCheck(this, _class);

          this._queryEngine = null;
        }

        _createClass(_class, [{
          key: "destroy",
          value: function destroy() {
            this._queryEngine && this._queryEngine && this._queryEngine.destroy(), this._queryEngine = this._requiredFields = this._fieldsIndex = this._createDefaultAttributes = null;
          }
        }, {
          key: "load",
          value: function () {
            var _load = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(t) {
              var r, u, p, y, c, T, q, x, w, e, _iterator, _step, _t, R, _iterator2, _step2, _e5, _t2, _e, _e2, _e3, O, S, _iterator3, _step3, _e4;

              return regeneratorRuntime.wrap(function _callee$(_context) {
                while (1) {
                  switch (_context.prev = _context.next) {
                    case 0:
                      r = [];
                      _context.next = 3;
                      return this._checkProjection(t.spatialReference);

                    case 3:
                      u = null;

                      if (!t.url) {
                        _context.next = 10;
                        break;
                      }

                      _context.next = 7;
                      return Object(_request_js__WEBPACK_IMPORTED_MODULE_5__["default"])(t.url, {
                        responseType: "json"
                      });

                    case 7:
                      u = _context.sent.data;
                      _context.next = 10;
                      return Object(_geojson_js__WEBPACK_IMPORTED_MODULE_10__["validateGeoJSON"])(u);

                    case 10:
                      p = Object(_geojson_js__WEBPACK_IMPORTED_MODULE_10__["inferLayerProperties"])(u, {
                        geometryType: t.geometryType
                      }), y = t.fields || p.fields || [], c = null != t.hasZ ? t.hasZ : p.hasZ, T = p.geometryType, q = t.objectIdField || ("number" === p.objectIdFieldType ? p.objectIdFieldName : "OBJECTID") || "OBJECTID", x = t.spatialReference || _geometry_support_spatialReferenceUtils_js__WEBPACK_IMPORTED_MODULE_2__["WGS84"];
                      w = t.timeInfo;

                      if (T) {
                        _context.next = 14;
                        break;
                      }

                      throw new _core_Error_js__WEBPACK_IMPORTED_MODULE_0__["default"]("geojson-layer:missing-property", "geometryType not set and couldn't be inferred from the provided features");

                    case 14:
                      if ("string" === p.objectIdFieldType && r.push({
                        name: "geojson-layer:unsupported-id-type",
                        message: "Feature ids are of type string and can't be honored."
                      }), y === p.fields && p.unknownFields.length > 0 && r.push({
                        name: "geojson-layer:unknown-field-types",
                        message: "Some fields types couldn't be inferred from the features and were dropped",
                        details: {
                          unknownFields: p.unknownFields
                        }
                      }), q) {
                        e = null;
                        y.some(function (t) {
                          return t.name === q && (e = t, !0);
                        }) ? (e.type = "esriFieldTypeOID", e.editable = !1, e.nullable = !1) : y.unshift({
                          alias: q,
                          name: q,
                          type: "esriFieldTypeOID",
                          editable: !1,
                          nullable: !1
                        });
                      }

                      _iterator = _createForOfIteratorHelper(y);
                      _context.prev = 16;

                      _iterator.s();

                    case 18:
                      if ((_step = _iterator.n()).done) {
                        _context.next = 26;
                        break;
                      }

                      _t = _step.value;

                      if (!(null == _t.name && (_t.name = _t.alias), null == _t.alias && (_t.alias = _t.name), !_t.name)) {
                        _context.next = 22;
                        break;
                      }

                      throw new _core_Error_js__WEBPACK_IMPORTED_MODULE_0__["default"]("geojson-layer:invalid-field-name", "field name is missing", {
                        field: _t
                      });

                    case 22:
                      if (!(_t.name === q && (_t.type = "esriFieldTypeOID"), -1 === _support_fieldType_js__WEBPACK_IMPORTED_MODULE_6__["kebabDict"].jsonValues.indexOf(_t.type))) {
                        _context.next = 24;
                        break;
                      }

                      throw new _core_Error_js__WEBPACK_IMPORTED_MODULE_0__["default"]("geojson-layer:invalid-field-type", "invalid type for field \"".concat(_t.name, "\""), {
                        field: _t
                      });

                    case 24:
                      _context.next = 18;
                      break;

                    case 26:
                      _context.next = 31;
                      break;

                    case 28:
                      _context.prev = 28;
                      _context.t0 = _context["catch"](16);

                      _iterator.e(_context.t0);

                    case 31:
                      _context.prev = 31;

                      _iterator.f();

                      return _context.finish(31);

                    case 34:
                      R = {};
                      this._requiredFields = [];
                      _iterator2 = _createForOfIteratorHelper(y);

                      try {
                        for (_iterator2.s(); !(_step2 = _iterator2.n()).done;) {
                          _e5 = _step2.value;

                          if ("esriFieldTypeOID" !== _e5.type && "esriFieldTypeGlobalID" !== _e5.type) {
                            _e5.editable = null == _e5.editable || !!_e5.editable, _e5.nullable = null == _e5.nullable || !!_e5.nullable;
                            _t2 = Object(_support_fieldUtils_js__WEBPACK_IMPORTED_MODULE_4__["getFieldDefaultValue"])(_e5);
                            _e5.nullable || void 0 !== _t2 ? R[_e5.name] = _t2 : this._requiredFields.push(_e5);
                          }
                        }
                      } catch (err) {
                        _iterator2.e(err);
                      } finally {
                        _iterator2.f();
                      }

                      if (this._fieldsIndex = new _support_FieldsIndex_js__WEBPACK_IMPORTED_MODULE_8__["default"](y), w) {
                        if (w.startTimeField) {
                          _e = this._fieldsIndex.get(w.startTimeField);
                          _e ? (w.startTimeField = _e.name, _e.type = "esriFieldTypeDate") : w.startTimeField = null;
                        }

                        if (w.endTimeField) {
                          _e2 = this._fieldsIndex.get(w.endTimeField);
                          _e2 ? (w.endTimeField = _e2.name, _e2.type = "esriFieldTypeDate") : w.endTimeField = null;
                        }

                        if (w.trackIdField) {
                          _e3 = this._fieldsIndex.get(w.trackIdField);
                          _e3 ? w.trackIdField = _e3.name : (w.trackIdField = null, r.push({
                            name: "geojson-layer:invalid-timeInfo-trackIdField",
                            message: "trackIdField is missing",
                            details: {
                              timeInfo: w
                            }
                          }));
                        }

                        w.startTimeField || w.endTimeField || (r.push({
                          name: "geojson-layer:invalid-timeInfo",
                          message: "startTimeField and endTimeField are missing",
                          details: {
                            timeInfo: w
                          }
                        }), w = null);
                      }

                      O = {
                        warnings: r,
                        featureErrors: [],
                        layerDefinition: _objectSpread(_objectSpread({}, D), {}, {
                          drawingInfo: Object(_support_clientSideDefaults_js__WEBPACK_IMPORTED_MODULE_11__["createDrawingInfo"])(T),
                          templates: Object(_support_clientSideDefaults_js__WEBPACK_IMPORTED_MODULE_11__["createDefaultTemplate"])(R),
                          extent: null,
                          geometryType: T,
                          objectIdField: q,
                          fields: y,
                          hasZ: !!c,
                          timeInfo: w
                        })
                      };
                      this._queryEngine = new _data_QueryEngine_js__WEBPACK_IMPORTED_MODULE_13__["default"]({
                        fields: y,
                        geometryType: T,
                        hasM: !1,
                        hasZ: c,
                        objectIdField: q,
                        spatialReference: x,
                        timeInfo: w,
                        featureStore: new _data_FeatureStore_js__WEBPACK_IMPORTED_MODULE_12__["default"]({
                          geometryType: T,
                          hasM: !1,
                          hasZ: c
                        })
                      }), this._createDefaultAttributes = Object(_support_clientSideDefaults_js__WEBPACK_IMPORTED_MODULE_11__["createDefaultAttributesFunction"])(R, q), this._nextObjectId = p.maxObjectId + 1;
                      S = Object(_geojson_js__WEBPACK_IMPORTED_MODULE_10__["createOptimizedFeatures"])(u, {
                        geometryType: T,
                        hasZ: c,
                        objectIdFieldName: "number" === p.objectIdFieldType ? q : null
                      });

                      if (!Object(_geometry_support_spatialReferenceUtils_js__WEBPACK_IMPORTED_MODULE_2__["equals"])(x, _geometry_support_spatialReferenceUtils_js__WEBPACK_IMPORTED_MODULE_2__["WGS84"])) {
                        _iterator3 = _createForOfIteratorHelper(S);

                        try {
                          for (_iterator3.s(); !(_step3 = _iterator3.n()).done;) {
                            _e4 = _step3.value;
                            _e4.geometry && (_e4.geometry = Object(_featureConversionUtils_js__WEBPACK_IMPORTED_MODULE_7__["convertFromGeometry"])(Object(_data_projectionSupport_js__WEBPACK_IMPORTED_MODULE_9__["project"])(Object(_featureConversionUtils_js__WEBPACK_IMPORTED_MODULE_7__["convertToGeometry"])(_e4.geometry, T, c, !1), _geometry_support_spatialReferenceUtils_js__WEBPACK_IMPORTED_MODULE_2__["WGS84"], x)));
                          }
                        } catch (err) {
                          _iterator3.e(err);
                        } finally {
                          _iterator3.f();
                        }
                      }

                      return _context.abrupt("return", (this._loadInitialFeatures(O, S), O));

                    case 44:
                    case "end":
                      return _context.stop();
                  }
                }
              }, _callee, this, [[16, 28, 31, 34]]);
            }));

            function load(_x) {
              return _load.apply(this, arguments);
            }

            return load;
          }()
        }, {
          key: "applyEdits",
          value: function () {
            var _applyEdits2 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee2(e) {
              var _this$_queryEngine, i, s;

              return regeneratorRuntime.wrap(function _callee2$(_context2) {
                while (1) {
                  switch (_context2.prev = _context2.next) {
                    case 0:
                      _this$_queryEngine = this._queryEngine, i = _this$_queryEngine.spatialReference, s = _this$_queryEngine.geometryType;
                      _context2.next = 3;
                      return Object(_core_promiseUtils_js__WEBPACK_IMPORTED_MODULE_1__["all"])([Object(_support_sourceUtils_js__WEBPACK_IMPORTED_MODULE_14__["loadGeometryEngineForSimplify"])(i, s), Object(_data_projectionSupport_js__WEBPACK_IMPORTED_MODULE_9__["checkProjectionSupport"])(e.adds, i), Object(_data_projectionSupport_js__WEBPACK_IMPORTED_MODULE_9__["checkProjectionSupport"])(e.updates, i)]);

                    case 3:
                      return _context2.abrupt("return", this._applyEdits(e));

                    case 4:
                    case "end":
                      return _context2.stop();
                  }
                }
              }, _callee2, this);
            }));

            function applyEdits(_x2) {
              return _applyEdits2.apply(this, arguments);
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
          key: "_loadInitialFeatures",
          value: function _loadInitialFeatures(e, t) {
            var _this$_queryEngine2 = this._queryEngine,
                i = _this$_queryEngine2.featureStore,
                s = _this$_queryEngine2.objectIdField,
                r = [];

            var _iterator4 = _createForOfIteratorHelper(t),
                _step4;

            try {
              for (_iterator4.s(); !(_step4 = _iterator4.n()).done;) {
                var _i2 = _step4.value;

                var _t4 = this._createDefaultAttributes(),
                    n = Object(_support_sourceUtils_js__WEBPACK_IMPORTED_MODULE_14__["mixAttributes"])(this._fieldsIndex, this._requiredFields, _t4, _i2.attributes, !0, e.warnings);

                n ? e.featureErrors.push(n) : (this._assignObjectId(_t4, _i2.attributes, !0), _i2.attributes = _t4, _i2.objectId = _t4[s], r.push(_i2));
              }
            } catch (err) {
              _iterator4.e(err);
            } finally {
              _iterator4.f();
            }

            if (i.addMany(r), e.layerDefinition.extent = this._queryEngine.fullExtent, e.layerDefinition.timeInfo) {
              var _this$_queryEngine$ti = this._queryEngine.timeExtent,
                  _t3 = _this$_queryEngine$ti.start,
                  _i = _this$_queryEngine$ti.end;
              e.layerDefinition.timeInfo.timeExtent = [_t3, _i];
            }

            return e;
          }
        }, {
          key: "_applyEdits",
          value: function _applyEdits(e) {
            var t = e.adds,
                i = e.updates,
                s = e.deletes,
                r = {
              addResults: [],
              deleteResults: [],
              updateResults: [],
              uidToObjectId: {}
            };

            if (t && t.length && this._applyAddEdits(r, t), i && i.length && this._applyUpdateEdits(r, i), s && s.length) {
              var _iterator5 = _createForOfIteratorHelper(s),
                  _step5;

              try {
                for (_iterator5.s(); !(_step5 = _iterator5.n()).done;) {
                  var _e6 = _step5.value;
                  r.deleteResults.push(Object(_support_sourceUtils_js__WEBPACK_IMPORTED_MODULE_14__["createFeatureEditSuccessResult"])(_e6));
                }
              } catch (err) {
                _iterator5.e(err);
              } finally {
                _iterator5.f();
              }

              this._queryEngine.featureStore.removeManyById(s);
            }

            return {
              fullExtent: this._queryEngine.fullExtent,
              timeExtent: this._queryEngine.timeExtent,
              featureEditResults: r
            };
          }
        }, {
          key: "_applyAddEdits",
          value: function _applyAddEdits(e, t) {
            var i = e.addResults,
                _this$_queryEngine3 = this._queryEngine,
                s = _this$_queryEngine3.geometryType,
                n = _this$_queryEngine3.hasM,
                o = _this$_queryEngine3.hasZ,
                a = _this$_queryEngine3.objectIdField,
                l = _this$_queryEngine3.spatialReference,
                d = _this$_queryEngine3.featureStore,
                p = [];

            var _iterator6 = _createForOfIteratorHelper(t),
                _step6;

            try {
              for (_iterator6.s(); !(_step6 = _iterator6.n()).done;) {
                var _n = _step6.value;

                if (_n.geometry && s !== Object(_geometry_support_jsonUtils_js__WEBPACK_IMPORTED_MODULE_3__["getJsonType"])(_n.geometry)) {
                  i.push(Object(_support_sourceUtils_js__WEBPACK_IMPORTED_MODULE_14__["createFeatureEditErrorResult"])("Incorrect geometry type."));
                  continue;
                }

                var _t5 = this._createDefaultAttributes(),
                    _o = Object(_support_sourceUtils_js__WEBPACK_IMPORTED_MODULE_14__["mixAttributes"])(this._fieldsIndex, this._requiredFields, _t5, _n.attributes);

                if (_o) i.push(_o);else {
                  if (this._assignObjectId(_t5, _n.attributes), _n.attributes = _t5, null != _n.uid) {
                    var _t6 = _n.attributes[a];
                    e.uidToObjectId[_n.uid] = _t6;
                  }

                  _n.geometry && (_n.geometry = Object(_data_projectionSupport_js__WEBPACK_IMPORTED_MODULE_9__["project"])(Object(_support_sourceUtils_js__WEBPACK_IMPORTED_MODULE_14__["simplify"])(_n.geometry, l), _n.geometry.spatialReference, l)), p.push(_n), i.push(Object(_support_sourceUtils_js__WEBPACK_IMPORTED_MODULE_14__["createFeatureEditSuccessResult"])(_n.attributes[a]));
                }
              }
            } catch (err) {
              _iterator6.e(err);
            } finally {
              _iterator6.f();
            }

            d.addMany(Object(_featureConversionUtils_js__WEBPACK_IMPORTED_MODULE_7__["convertFromFeatures"])([], p, s, o, n, a));
          }
        }, {
          key: "_applyUpdateEdits",
          value: function _applyUpdateEdits(_ref, t) {
            var e = _ref.updateResults;
            var _this$_queryEngine4 = this._queryEngine,
                i = _this$_queryEngine4.geometryType,
                s = _this$_queryEngine4.hasM,
                n = _this$_queryEngine4.hasZ,
                o = _this$_queryEngine4.objectIdField,
                a = _this$_queryEngine4.spatialReference,
                l = _this$_queryEngine4.featureStore;

            var _iterator7 = _createForOfIteratorHelper(t),
                _step7;

            try {
              for (_iterator7.s(); !(_step7 = _iterator7.n()).done;) {
                var d = _step7.value;
                var _t7 = d.attributes,
                    u = d.geometry,
                    f = _t7 && _t7[o];

                if (null == f) {
                  e.push(Object(_support_sourceUtils_js__WEBPACK_IMPORTED_MODULE_14__["createFeatureEditErrorResult"])("Identifier field ".concat(o, " missing")));
                  continue;
                }

                if (!l.has(f)) {
                  e.push(Object(_support_sourceUtils_js__WEBPACK_IMPORTED_MODULE_14__["createFeatureEditErrorResult"])("Feature with object id ".concat(f, " missing")));
                  continue;
                }

                var c = Object(_featureConversionUtils_js__WEBPACK_IMPORTED_MODULE_7__["convertToFeature"])(l.getFeature(f), i, n, s);

                if (u) {
                  if (i !== Object(_geometry_support_jsonUtils_js__WEBPACK_IMPORTED_MODULE_3__["getJsonType"])(u)) {
                    e.push(Object(_support_sourceUtils_js__WEBPACK_IMPORTED_MODULE_14__["createFeatureEditErrorResult"])("Incorrect geometry type."));
                    continue;
                  }

                  c.geometry = Object(_data_projectionSupport_js__WEBPACK_IMPORTED_MODULE_9__["project"])(Object(_support_sourceUtils_js__WEBPACK_IMPORTED_MODULE_14__["simplify"])(u, a), u.spatialReference, a);
                }

                if (_t7) {
                  var _i3 = Object(_support_sourceUtils_js__WEBPACK_IMPORTED_MODULE_14__["mixAttributes"])(this._fieldsIndex, this._requiredFields, c.attributes, _t7);

                  if (_i3) {
                    e.push(_i3);
                    continue;
                  }
                }

                l.add(Object(_featureConversionUtils_js__WEBPACK_IMPORTED_MODULE_7__["convertFromFeature"])(c, i, n, s, o)), e.push(Object(_support_sourceUtils_js__WEBPACK_IMPORTED_MODULE_14__["createFeatureEditSuccessResult"])(f));
              }
            } catch (err) {
              _iterator7.e(err);
            } finally {
              _iterator7.f();
            }
          }
        }, {
          key: "_assignObjectId",
          value: function _assignObjectId(e, t) {
            var i = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : !1;
            var s = this._queryEngine.objectIdField;
            i && isFinite(t[s]) ? e[s] = t[s] : e[s] = this._nextObjectId++;
          }
        }, {
          key: "_checkProjection",
          value: function () {
            var _checkProjection2 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee7(t) {
              return regeneratorRuntime.wrap(function _callee7$(_context7) {
                while (1) {
                  switch (_context7.prev = _context7.next) {
                    case 0:
                      _context7.prev = 0;
                      _context7.next = 3;
                      return Object(_data_projectionSupport_js__WEBPACK_IMPORTED_MODULE_9__["checkProjectionSupport"])(_geometry_support_spatialReferenceUtils_js__WEBPACK_IMPORTED_MODULE_2__["WGS84"], t);

                    case 3:
                      _context7.next = 8;
                      break;

                    case 5:
                      _context7.prev = 5;
                      _context7.t0 = _context7["catch"](0);
                      throw new _core_Error_js__WEBPACK_IMPORTED_MODULE_0__["default"]("geojson-layer", "Projection not supported");

                    case 8:
                    case "end":
                      return _context7.stop();
                  }
                }
              }, _callee7, null, [[0, 5]]);
            }));

            function _checkProjection(_x3) {
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

    }
  }]);
})();
//# sourceMappingURL=layers-graphics-sources-geojson-GeoJSONSourceWorker-js-es5.js.map