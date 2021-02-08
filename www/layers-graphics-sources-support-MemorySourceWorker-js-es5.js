(function () {
  function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

  function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

  function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

  function _createForOfIteratorHelper(o, allowArrayLike) { var it; if (typeof Symbol === "undefined" || o[Symbol.iterator] == null) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e8) { throw _e8; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = o[Symbol.iterator](); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e9) { didErr = true; err = _e9; }, f: function f() { try { if (!normalCompletion && it["return"] != null) it["return"](); } finally { if (didErr) throw err; } } }; }

  function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

  function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

  function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

  function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["layers-graphics-sources-support-MemorySourceWorker-js"], {
    /***/
    "Glky":
    /*!*****************************************************************************************!*\
      !*** ./node_modules/@arcgis/core/layers/graphics/sources/support/MemorySourceWorker.js ***!
      \*****************************************************************************************/

    /*! exports provided: default */

    /***/
    function Glky(module, __webpack_exports__, __webpack_require__) {
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


      var _support_fieldType_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ../../../support/fieldType.js */
      "Z4F+");
      /* harmony import */


      var _featureConversionUtils_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ../../featureConversionUtils.js */
      "ZlUD");
      /* harmony import */


      var _support_FieldsIndex_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! ../../../support/FieldsIndex.js */
      "gLc9");
      /* harmony import */


      var _data_projectionSupport_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! ../../data/projectionSupport.js */
      "HsO1");
      /* harmony import */


      var _clientSideDefaults_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! ./clientSideDefaults.js */
      "iNG6");
      /* harmony import */


      var _data_FeatureStore_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
      /*! ../../data/FeatureStore.js */
      "ZRfE");
      /* harmony import */


      var _data_QueryEngine_js__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
      /*! ../../data/QueryEngine.js */
      "ZBG3");
      /* harmony import */


      var _sourceUtils_js__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
      /*! ./sourceUtils.js */
      "IcpP");
      /*
      All material copyright ESRI, All Rights Reserved, unless otherwise specified.
      See https://js.arcgis.com/4.18/esri/copyright.txt for details.
      */


      var E = _geometry_support_spatialReferenceUtils_js__WEBPACK_IMPORTED_MODULE_2__["WGS84"],
          x = {
        xmin: -180,
        ymin: -90,
        xmax: 180,
        ymax: 90,
        spatialReference: _geometry_support_spatialReferenceUtils_js__WEBPACK_IMPORTED_MODULE_2__["WGS84"]
      },
          T = {
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

      function q(e) {
        return Object(_geometry_support_jsonUtils_js__WEBPACK_IMPORTED_MODULE_3__["isPoint"])(e) ? null != e.z : !!e.hasZ;
      }

      function R(e) {
        return Object(_geometry_support_jsonUtils_js__WEBPACK_IMPORTED_MODULE_3__["isPoint"])(e) ? null != e.m : !!e.hasM;
      }
      /* harmony default export */


      __webpack_exports__["default"] = /*#__PURE__*/function () {
        function _class() {
          _classCallCheck(this, _class);

          this._queryEngine = null, this._nextObjectId = null;
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
              var i, s, r, l, o, d, f, I, b, F, _, j, q, e, _iterator, _step, _t, R, _iterator2, _step2, _e4, _t2, _e, _e2, _e3, D, O;

              return regeneratorRuntime.wrap(function _callee$(_context) {
                while (1) {
                  switch (_context.prev = _context.next) {
                    case 0:
                      i = [], s = t.features, r = this._inferLayerProperties(s, t.fields), l = t.fields || [], o = null != t.hasM ? t.hasM : r.hasM, d = null != t.hasZ ? t.hasZ : r.hasZ, f = !t.spatialReference && !r.spatialReference, I = f ? E : t.spatialReference || r.spatialReference, b = f ? x : null, F = t.geometryType || r.geometryType, _ = !F;
                      j = t.objectIdField || r.objectIdField, q = t.timeInfo;

                      if (!(!_ && (f && i.push({
                        name: "feature-layer:spatial-reference-not-found",
                        message: "Spatial reference not provided or found in features. Defaults to WGS84"
                      }), !F))) {
                        _context.next = 4;
                        break;
                      }

                      throw new _core_Error_js__WEBPACK_IMPORTED_MODULE_0__["default"]("feature-layer:missing-property", "geometryType not set and couldn't be inferred from the provided features");

                    case 4:
                      if (j) {
                        _context.next = 6;
                        break;
                      }

                      throw new _core_Error_js__WEBPACK_IMPORTED_MODULE_0__["default"]("feature-layer:missing-property", "objectIdField not set and couldn't be found in the provided fields");

                    case 6:
                      if (r.objectIdField && j !== r.objectIdField && (i.push({
                        name: "feature-layer:duplicated-oid-field",
                        message: "Provided objectIdField \"".concat(j, "\" doesn't match the field name \"").concat(r.objectIdField, "\", found in the provided fields")
                      }), j = r.objectIdField), j && !r.objectIdField) {
                        e = null;
                        l.some(function (t) {
                          return t.name === j && (e = t, !0);
                        }) ? (e.type = "esriFieldTypeOID", e.editable = !1, e.nullable = !1) : l.unshift({
                          alias: j,
                          name: j,
                          type: "esriFieldTypeOID",
                          editable: !1,
                          nullable: !1
                        });
                      }

                      _iterator = _createForOfIteratorHelper(l);
                      _context.prev = 8;

                      _iterator.s();

                    case 10:
                      if ((_step = _iterator.n()).done) {
                        _context.next = 18;
                        break;
                      }

                      _t = _step.value;

                      if (!(null == _t.name && (_t.name = _t.alias), null == _t.alias && (_t.alias = _t.name), !_t.name)) {
                        _context.next = 14;
                        break;
                      }

                      throw new _core_Error_js__WEBPACK_IMPORTED_MODULE_0__["default"]("feature-layer:invalid-field-name", "field name is missing", {
                        field: _t
                      });

                    case 14:
                      if (!(_t.name === j && (_t.type = "esriFieldTypeOID"), -1 === _support_fieldType_js__WEBPACK_IMPORTED_MODULE_5__["kebabDict"].jsonValues.indexOf(_t.type))) {
                        _context.next = 16;
                        break;
                      }

                      throw new _core_Error_js__WEBPACK_IMPORTED_MODULE_0__["default"]("feature-layer:invalid-field-type", "invalid type for field \"".concat(_t.name, "\""), {
                        field: _t
                      });

                    case 16:
                      _context.next = 10;
                      break;

                    case 18:
                      _context.next = 23;
                      break;

                    case 20:
                      _context.prev = 20;
                      _context.t0 = _context["catch"](8);

                      _iterator.e(_context.t0);

                    case 23:
                      _context.prev = 23;

                      _iterator.f();

                      return _context.finish(23);

                    case 26:
                      R = {};
                      this._requiredFields = [];
                      _iterator2 = _createForOfIteratorHelper(l);

                      try {
                        for (_iterator2.s(); !(_step2 = _iterator2.n()).done;) {
                          _e4 = _step2.value;

                          if ("esriFieldTypeOID" !== _e4.type && "esriFieldTypeGlobalID" !== _e4.type) {
                            _e4.editable = null == _e4.editable || !!_e4.editable, _e4.nullable = null == _e4.nullable || !!_e4.nullable;
                            _t2 = Object(_support_fieldUtils_js__WEBPACK_IMPORTED_MODULE_4__["getFieldDefaultValue"])(_e4);
                            _e4.nullable || void 0 !== _t2 ? R[_e4.name] = _t2 : this._requiredFields.push(_e4);
                          }
                        }
                      } catch (err) {
                        _iterator2.e(err);
                      } finally {
                        _iterator2.f();
                      }

                      if (this._fieldsIndex = new _support_FieldsIndex_js__WEBPACK_IMPORTED_MODULE_7__["default"](l), this._createDefaultAttributes = Object(_clientSideDefaults_js__WEBPACK_IMPORTED_MODULE_9__["createDefaultAttributesFunction"])(R, j), q) {
                        if (q.startTimeField) {
                          _e = this._fieldsIndex.get(q.startTimeField);
                          _e ? (q.startTimeField = _e.name, _e.type = "esriFieldTypeDate") : q.startTimeField = null;
                        }

                        if (q.endTimeField) {
                          _e2 = this._fieldsIndex.get(q.endTimeField);
                          _e2 ? (q.endTimeField = _e2.name, _e2.type = "esriFieldTypeDate") : q.endTimeField = null;
                        }

                        if (q.trackIdField) {
                          _e3 = this._fieldsIndex.get(q.trackIdField);
                          _e3 ? q.trackIdField = _e3.name : (q.trackIdField = null, i.push({
                            name: "feature-layer:invalid-timeInfo-trackIdField",
                            message: "trackIdField is missing",
                            details: {
                              timeInfo: q
                            }
                          }));
                        }

                        q.startTimeField || q.endTimeField || (i.push({
                          name: "feature-layer:invalid-timeInfo",
                          message: "startTimeField and endTimeField are missing or invalid",
                          details: {
                            timeInfo: q
                          }
                        }), q = null);
                      }

                      D = {
                        warnings: i,
                        featureErrors: [],
                        layerDefinition: _objectSpread(_objectSpread({}, T), {}, {
                          drawingInfo: Object(_clientSideDefaults_js__WEBPACK_IMPORTED_MODULE_9__["createDrawingInfo"])(F),
                          templates: Object(_clientSideDefaults_js__WEBPACK_IMPORTED_MODULE_9__["createDefaultTemplate"])(R),
                          extent: b,
                          geometryType: F,
                          objectIdField: j,
                          fields: l,
                          hasZ: !!d,
                          hasM: !!o,
                          timeInfo: q
                        }),
                        assignedObjectIds: {}
                      };

                      if (!(this._queryEngine = new _data_QueryEngine_js__WEBPACK_IMPORTED_MODULE_11__["default"]({
                        fields: l,
                        geometryType: F,
                        hasM: o,
                        hasZ: d,
                        objectIdField: j,
                        spatialReference: I,
                        featureStore: new _data_FeatureStore_js__WEBPACK_IMPORTED_MODULE_10__["default"]({
                          geometryType: F,
                          hasM: o,
                          hasZ: d
                        }),
                        timeInfo: q
                      }), !s || !s.length)) {
                        _context.next = 34;
                        break;
                      }

                      return _context.abrupt("return", (this._nextObjectId = 1, D));

                    case 34:
                      O = s.reduce(function (e, t) {
                        var i = t.attributes && t.attributes[j];
                        return null == i || isNaN(i) || !isFinite(i) ? e : Math.max(e, i);
                      }, 0);
                      this._nextObjectId = 1 + O;
                      _context.next = 38;
                      return Object(_data_projectionSupport_js__WEBPACK_IMPORTED_MODULE_8__["checkProjectionSupport"])(s, I);

                    case 38:
                      return _context.abrupt("return", this._loadInitialFeatures(D, s));

                    case 39:
                    case "end":
                      return _context.stop();
                  }
                }
              }, _callee, this, [[8, 20, 23, 26]]);
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
                      return Object(_core_promiseUtils_js__WEBPACK_IMPORTED_MODULE_1__["all"])([Object(_sourceUtils_js__WEBPACK_IMPORTED_MODULE_12__["loadGeometryEngineForSimplify"])(i, s), Object(_data_projectionSupport_js__WEBPACK_IMPORTED_MODULE_8__["checkProjectionSupport"])(e.adds, i), Object(_data_projectionSupport_js__WEBPACK_IMPORTED_MODULE_8__["checkProjectionSupport"])(e.updates, i)]);

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
            var _queryFeatures = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee3(e) {
              var t,
                  _args3 = arguments;
              return regeneratorRuntime.wrap(function _callee3$(_context3) {
                while (1) {
                  switch (_context3.prev = _context3.next) {
                    case 0:
                      t = _args3.length > 1 && _args3[1] !== undefined ? _args3[1] : {};
                      return _context3.abrupt("return", this._queryEngine.executeQuery(e, t.signal));

                    case 2:
                    case "end":
                      return _context3.stop();
                  }
                }
              }, _callee3, this);
            }));

            function queryFeatures(_x3) {
              return _queryFeatures.apply(this, arguments);
            }

            return queryFeatures;
          }()
        }, {
          key: "queryFeatureCount",
          value: function () {
            var _queryFeatureCount = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee4(e) {
              var t,
                  _args4 = arguments;
              return regeneratorRuntime.wrap(function _callee4$(_context4) {
                while (1) {
                  switch (_context4.prev = _context4.next) {
                    case 0:
                      t = _args4.length > 1 && _args4[1] !== undefined ? _args4[1] : {};
                      return _context4.abrupt("return", this._queryEngine.executeQueryForCount(e, t.signal));

                    case 2:
                    case "end":
                      return _context4.stop();
                  }
                }
              }, _callee4, this);
            }));

            function queryFeatureCount(_x4) {
              return _queryFeatureCount.apply(this, arguments);
            }

            return queryFeatureCount;
          }()
        }, {
          key: "queryObjectIds",
          value: function () {
            var _queryObjectIds = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee5(e) {
              var t,
                  _args5 = arguments;
              return regeneratorRuntime.wrap(function _callee5$(_context5) {
                while (1) {
                  switch (_context5.prev = _context5.next) {
                    case 0:
                      t = _args5.length > 1 && _args5[1] !== undefined ? _args5[1] : {};
                      return _context5.abrupt("return", this._queryEngine.executeQueryForIds(e, t.signal));

                    case 2:
                    case "end":
                      return _context5.stop();
                  }
                }
              }, _callee5, this);
            }));

            function queryObjectIds(_x5) {
              return _queryObjectIds.apply(this, arguments);
            }

            return queryObjectIds;
          }()
        }, {
          key: "queryExtent",
          value: function () {
            var _queryExtent = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee6(e) {
              var t,
                  _args6 = arguments;
              return regeneratorRuntime.wrap(function _callee6$(_context6) {
                while (1) {
                  switch (_context6.prev = _context6.next) {
                    case 0:
                      t = _args6.length > 1 && _args6[1] !== undefined ? _args6[1] : {};
                      return _context6.abrupt("return", this._queryEngine.executeQueryForExtent(e, t.signal));

                    case 2:
                    case "end":
                      return _context6.stop();
                  }
                }
              }, _callee6, this);
            }));

            function queryExtent(_x6) {
              return _queryExtent.apply(this, arguments);
            }

            return queryExtent;
          }()
        }, {
          key: "_inferLayerProperties",
          value: function _inferLayerProperties(e, t) {
            var i,
                r,
                n = null,
                a = null,
                l = null;

            var _iterator3 = _createForOfIteratorHelper(e),
                _step3;

            try {
              for (_iterator3.s(); !(_step3 = _iterator3.n()).done;) {
                var _t3 = _step3.value;
                var _e6 = _t3.geometry;
                if (_e6 && (n || (n = Object(_geometry_support_jsonUtils_js__WEBPACK_IMPORTED_MODULE_3__["getJsonType"])(_e6)), a || (a = _e6.spatialReference), null == i && (i = q(_e6)), null == r && (r = R(_e6)), n && a && null != i && null != r)) break;
              }
            } catch (err) {
              _iterator3.e(err);
            } finally {
              _iterator3.f();
            }

            if (t && t.length) {
              var _e5 = null;
              t.some(function (t) {
                var i = "esriFieldTypeOID" === t.type,
                    s = !t.type && t.name && "objectid" === t.name.toLowerCase();
                return _e5 = t, i || s;
              }) && (l = _e5.name);
            }

            return {
              geometryType: n,
              spatialReference: a,
              objectIdField: l,
              hasM: r,
              hasZ: i
            };
          }
        }, {
          key: "_loadInitialFeatures",
          value: function _loadInitialFeatures(e, t) {
            var _this$_queryEngine2 = this._queryEngine,
                i = _this$_queryEngine2.geometryType,
                r = _this$_queryEngine2.hasM,
                n = _this$_queryEngine2.hasZ,
                a = _this$_queryEngine2.objectIdField,
                o = _this$_queryEngine2.spatialReference,
                d = _this$_queryEngine2.featureStore,
                u = [];

            var _iterator4 = _createForOfIteratorHelper(t),
                _step4;

            try {
              for (_iterator4.s(); !(_step4 = _iterator4.n()).done;) {
                var _r = _step4.value;

                if (null != _r.uid && (e.assignedObjectIds[_r.uid] = -1), _r.geometry && i !== Object(_geometry_support_jsonUtils_js__WEBPACK_IMPORTED_MODULE_3__["getJsonType"])(_r.geometry)) {
                  e.featureErrors.push(Object(_sourceUtils_js__WEBPACK_IMPORTED_MODULE_12__["createFeatureEditErrorResult"])("Incorrect geometry type."));
                  continue;
                }

                var _t5 = this._createDefaultAttributes(),
                    _n = Object(_sourceUtils_js__WEBPACK_IMPORTED_MODULE_12__["mixAttributes"])(this._fieldsIndex, this._requiredFields, _t5, _r.attributes, !0, e.warnings);

                _n ? e.featureErrors.push(_n) : (this._assignObjectId(_t5, _r.attributes, !0), _r.attributes = _t5, null != _r.uid && (e.assignedObjectIds[_r.uid] = _r.attributes[a]), _r.geometry && (_r.geometry = Object(_data_projectionSupport_js__WEBPACK_IMPORTED_MODULE_8__["project"])(_r.geometry, _r.geometry.spatialReference, o)), u.push(_r));
              }
            } catch (err) {
              _iterator4.e(err);
            } finally {
              _iterator4.f();
            }

            if (d.addMany(Object(_featureConversionUtils_js__WEBPACK_IMPORTED_MODULE_6__["convertFromFeatures"])([], u, i, n, r, a)), e.layerDefinition.extent = this._queryEngine.fullExtent, e.layerDefinition.timeInfo) {
              var _this$_queryEngine$ti = this._queryEngine.timeExtent,
                  _t4 = _this$_queryEngine$ti.start,
                  _i = _this$_queryEngine$ti.end;
              e.layerDefinition.timeInfo.timeExtent = [_t4, _i];
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
                  var _e7 = _step5.value;
                  r.deleteResults.push(Object(_sourceUtils_js__WEBPACK_IMPORTED_MODULE_12__["createFeatureEditSuccessResult"])(_e7));
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
              featureEditResults: r
            };
          }
        }, {
          key: "_applyAddEdits",
          value: function _applyAddEdits(e, t) {
            var i = e.addResults,
                _this$_queryEngine3 = this._queryEngine,
                r = _this$_queryEngine3.geometryType,
                n = _this$_queryEngine3.hasM,
                a = _this$_queryEngine3.hasZ,
                o = _this$_queryEngine3.objectIdField,
                d = _this$_queryEngine3.spatialReference,
                u = _this$_queryEngine3.featureStore,
                p = [];

            var _iterator6 = _createForOfIteratorHelper(t),
                _step6;

            try {
              for (_iterator6.s(); !(_step6 = _iterator6.n()).done;) {
                var _n2 = _step6.value;

                if (_n2.geometry && r !== Object(_geometry_support_jsonUtils_js__WEBPACK_IMPORTED_MODULE_3__["getJsonType"])(_n2.geometry)) {
                  i.push(Object(_sourceUtils_js__WEBPACK_IMPORTED_MODULE_12__["createFeatureEditErrorResult"])("Incorrect geometry type."));
                  continue;
                }

                var _t6 = this._createDefaultAttributes(),
                    _a = Object(_sourceUtils_js__WEBPACK_IMPORTED_MODULE_12__["mixAttributes"])(this._fieldsIndex, this._requiredFields, _t6, _n2.attributes);

                if (_a) i.push(_a);else {
                  if (this._assignObjectId(_t6, _n2.attributes), _n2.attributes = _t6, null != _n2.uid) {
                    var _t7 = _n2.attributes[o];
                    e.uidToObjectId[_n2.uid] = _t7;
                  }

                  _n2.geometry && (_n2.geometry = Object(_data_projectionSupport_js__WEBPACK_IMPORTED_MODULE_8__["project"])(Object(_sourceUtils_js__WEBPACK_IMPORTED_MODULE_12__["simplify"])(_n2.geometry, d), _n2.geometry.spatialReference, d)), p.push(_n2), i.push(Object(_sourceUtils_js__WEBPACK_IMPORTED_MODULE_12__["createFeatureEditSuccessResult"])(_n2.attributes[o]));
                }
              }
            } catch (err) {
              _iterator6.e(err);
            } finally {
              _iterator6.f();
            }

            u.addMany(Object(_featureConversionUtils_js__WEBPACK_IMPORTED_MODULE_6__["convertFromFeatures"])([], p, r, a, n, o));
          }
        }, {
          key: "_applyUpdateEdits",
          value: function _applyUpdateEdits(_ref, t) {
            var e = _ref.updateResults;
            var _this$_queryEngine4 = this._queryEngine,
                i = _this$_queryEngine4.geometryType,
                r = _this$_queryEngine4.hasM,
                n = _this$_queryEngine4.hasZ,
                a = _this$_queryEngine4.objectIdField,
                l = _this$_queryEngine4.spatialReference,
                u = _this$_queryEngine4.featureStore;

            var _iterator7 = _createForOfIteratorHelper(t),
                _step7;

            try {
              for (_iterator7.s(); !(_step7 = _iterator7.n()).done;) {
                var p = _step7.value;
                var _t8 = p.attributes,
                    y = p.geometry,
                    c = _t8 && _t8[a];

                if (null == c) {
                  e.push(Object(_sourceUtils_js__WEBPACK_IMPORTED_MODULE_12__["createFeatureEditErrorResult"])("Identifier field ".concat(a, " missing")));
                  continue;
                }

                if (!u.has(c)) {
                  e.push(Object(_sourceUtils_js__WEBPACK_IMPORTED_MODULE_12__["createFeatureEditErrorResult"])("Feature with object id ".concat(c, " missing")));
                  continue;
                }

                var m = Object(_featureConversionUtils_js__WEBPACK_IMPORTED_MODULE_6__["convertToFeature"])(u.getFeature(c), i, n, r);

                if (y) {
                  if (i !== Object(_geometry_support_jsonUtils_js__WEBPACK_IMPORTED_MODULE_3__["getJsonType"])(y)) {
                    e.push(Object(_sourceUtils_js__WEBPACK_IMPORTED_MODULE_12__["createFeatureEditErrorResult"])("Incorrect geometry type."));
                    continue;
                  }

                  m.geometry = Object(_data_projectionSupport_js__WEBPACK_IMPORTED_MODULE_8__["project"])(Object(_sourceUtils_js__WEBPACK_IMPORTED_MODULE_12__["simplify"])(y, l), y.spatialReference, l);
                }

                if (_t8) {
                  var _i2 = Object(_sourceUtils_js__WEBPACK_IMPORTED_MODULE_12__["mixAttributes"])(this._fieldsIndex, this._requiredFields, m.attributes, _t8);

                  if (_i2) {
                    e.push(_i2);
                    continue;
                  }
                }

                u.add(Object(_featureConversionUtils_js__WEBPACK_IMPORTED_MODULE_6__["convertFromFeature"])(m, i, n, r, a)), e.push(Object(_sourceUtils_js__WEBPACK_IMPORTED_MODULE_12__["createFeatureEditSuccessResult"])(c));
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
            i && t && isFinite(t[s]) ? e[s] = t[s] : e[s] = this._nextObjectId++;
          }
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
//# sourceMappingURL=layers-graphics-sources-support-MemorySourceWorker-js-es5.js.map