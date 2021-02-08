(function () {
  function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

  function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

  function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

  function _createForOfIteratorHelper(o, allowArrayLike) { var it; if (typeof Symbol === "undefined" || o[Symbol.iterator] == null) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e7) { throw _e7; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = o[Symbol.iterator](); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e8) { didErr = true; err = _e8; }, f: function f() { try { if (!normalCompletion && it["return"] != null) it["return"](); } finally { if (didErr) throw err; } } }; }

  function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }

  function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

  function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

  function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && Symbol.iterator in Object(iter)) return Array.from(iter); }

  function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }

  function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

  function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

  function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

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

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["graphics-sources-FeatureLayerSource-js"], {
    /***/
    "DlAm":
    /*!*********************************************************************************!*\
      !*** ./node_modules/@arcgis/core/layers/graphics/sources/FeatureLayerSource.js ***!
      \*********************************************************************************/

    /*! exports provided: default */

    /***/
    function DlAm(module, __webpack_exports__, __webpack_require__) {
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


      var _core_lang_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ../../../core/lang.js */
      "f/qv");
      /* harmony import */


      var _core_object_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ../../../core/object.js */
      "nR38");
      /* harmony import */


      var _core_maybe_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ../../../core/maybe.js */
      "srIe");
      /* harmony import */


      var _core_Logger_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ../../../core/Logger.js */
      "6S2I");
      /* harmony import */


      var _core_accessorSupport_ensureType_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ../../../core/accessorSupport/ensureType.js */
      "zqDF");
      /* harmony import */


      var _core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! ../../../core/accessorSupport/decorators/property.js */
      "WbKI");
      /* harmony import */


      var _core_accessorSupport_decorators_subclass_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! ../../../core/accessorSupport/decorators/subclass.js */
      "04ZG");
      /* harmony import */


      var _core_Error_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! ../../../core/Error.js */
      "zlDU");
      /* harmony import */


      var _core_urlUtils_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
      /*! ../../../core/urlUtils.js */
      "4EHJ");
      /* harmony import */


      var _core_uuid_js__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
      /*! ../../../core/uuid.js */
      "ju1D");
      /* harmony import */


      var _portal_support_resourceExtension_js__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
      /*! ../../../portal/support/resourceExtension.js */
      "9AIY");
      /* harmony import */


      var _core_promiseUtils_js__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
      /*! ../../../core/promiseUtils.js */
      "9MzC");
      /* harmony import */


      var _geometry_Extent_js__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(
      /*! ../../../geometry/Extent.js */
      "OvF4");
      /* harmony import */


      var _request_js__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(
      /*! ../../../request.js */
      "Lqtk");
      /* harmony import */


      var _core_Loadable_js__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(
      /*! ../../../core/Loadable.js */
      "bV/r");
      /* harmony import */


      var _TimeExtent_js__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(
      /*! ../../../TimeExtent.js */
      "ZYtI");
      /* harmony import */


      var _tasks_operations_zscale_js__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(
      /*! ../../../tasks/operations/zscale.js */
      "kUx5");
      /* harmony import */


      var _tasks_operations_queryAttachments_js__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(
      /*! ../../../tasks/operations/queryAttachments.js */
      "Xzbc");
      /* harmony import */


      var _tasks_QueryTask_js__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(
      /*! ../../../tasks/QueryTask.js */
      "/uz8");
      /* harmony import */


      var _support_clientSideDefaults_js__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(
      /*! ./support/clientSideDefaults.js */
      "iNG6");
      /*
      All material copyright ESRI, All Rights Reserved, unless otherwise specified.
      See https://js.arcgis.com/4.18/esri/copyright.txt for details.
      */


      var q = new Set(["Feature Layer", "Table"]);

      var I = /*#__PURE__*/function (_core_Loadable_js__WE) {
        _inherits(I, _core_Loadable_js__WE);

        var _super = _createSuper(I);

        function I() {
          var _this;

          _classCallCheck(this, I);

          _this = _super.apply(this, arguments), _this.type = "feature-layer";
          return _this;
        }

        _createClass(I, [{
          key: "load",
          value: function load(e) {
            var t = Object(_core_maybe_js__WEBPACK_IMPORTED_MODULE_4__["isSome"])(e) ? e.signal : null;
            return this.addResolvingPromise(this._fetchService(t)), Object(_core_promiseUtils_js__WEBPACK_IMPORTED_MODULE_13__["resolve"])(this);
          }
        }, {
          key: "queryTask",
          get: function get() {
            var _this$layer = this.layer,
                e = _this$layer.capabilities.query.supportsFormatPBF,
                r = _this$layer.parsedUrl,
                a = _this$layer.dynamicDataSource,
                s = _this$layer.gdbVersion,
                o = _this$layer.spatialReference,
                i = _this$layer.fieldsIndex,
                u = Object(_core_has_js__WEBPACK_IMPORTED_MODULE_1__["default"])("featurelayer-pbf") && e ? "pbf" : "json";
            return new _tasks_QueryTask_js__WEBPACK_IMPORTED_MODULE_20__["default"]({
              url: r.path,
              format: u,
              fieldsIndex: i,
              dynamicDataSource: a,
              gdbVersion: s,
              sourceSpatialReference: o
            });
          }
        }, {
          key: "addAttachment",
          value: function () {
            var _addAttachment = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(e, t) {
              var r, a, s, o, _e;

              return regeneratorRuntime.wrap(function _callee$(_context) {
                while (1) {
                  switch (_context.prev = _context.next) {
                    case 0:
                      _context.next = 2;
                      return this.load();

                    case 2:
                      r = e.attributes[this.layer.objectIdField], a = this.layer.parsedUrl.path + "/" + r + "/addAttachment", s = this._getLayerRequestOptions(), o = this._getFormDataForAttachment(t, s.query);
                      _context.prev = 3;
                      _context.next = 6;
                      return Object(_request_js__WEBPACK_IMPORTED_MODULE_15__["default"])(a, {
                        body: o
                      });

                    case 6:
                      _e = _context.sent;
                      return _context.abrupt("return", this._createFeatureEditResult(_e.data.addAttachmentResult));

                    case 10:
                      _context.prev = 10;
                      _context.t0 = _context["catch"](3);
                      throw this._createAttachmentErrorResult(r, _context.t0);

                    case 13:
                    case "end":
                      return _context.stop();
                  }
                }
              }, _callee, this, [[3, 10]]);
            }));

            function addAttachment(_x, _x2) {
              return _addAttachment.apply(this, arguments);
            }

            return addAttachment;
          }()
        }, {
          key: "updateAttachment",
          value: function () {
            var _updateAttachment = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee2(e, t, r) {
              var a, s, o, i, _e2;

              return regeneratorRuntime.wrap(function _callee2$(_context2) {
                while (1) {
                  switch (_context2.prev = _context2.next) {
                    case 0:
                      _context2.next = 2;
                      return this.load();

                    case 2:
                      a = e.attributes[this.layer.objectIdField], s = this.layer.parsedUrl.path + "/" + a + "/updateAttachment", o = this._getLayerRequestOptions({
                        query: {
                          attachmentId: t
                        }
                      }), i = this._getFormDataForAttachment(r, o.query);
                      _context2.prev = 3;
                      _context2.next = 6;
                      return Object(_request_js__WEBPACK_IMPORTED_MODULE_15__["default"])(s, {
                        body: i
                      });

                    case 6:
                      _e2 = _context2.sent;
                      return _context2.abrupt("return", this._createFeatureEditResult(_e2.data.updateAttachmentResult));

                    case 10:
                      _context2.prev = 10;
                      _context2.t0 = _context2["catch"](3);
                      throw this._createAttachmentErrorResult(a, _context2.t0);

                    case 13:
                    case "end":
                      return _context2.stop();
                  }
                }
              }, _callee2, this, [[3, 10]]);
            }));

            function updateAttachment(_x3, _x4, _x5) {
              return _updateAttachment.apply(this, arguments);
            }

            return updateAttachment;
          }()
        }, {
          key: "applyEdits",
          value: function () {
            var _applyEdits = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee3(e, t) {
              var r, a, s, o, i, u, _iterator, _step, _t, _iterator2, _step2, _t2, n, l, d;

              return regeneratorRuntime.wrap(function _callee3$(_context3) {
                while (1) {
                  switch (_context3.prev = _context3.next) {
                    case 0:
                      _context3.next = 2;
                      return this.load();

                    case 2:
                      r = e.addFeatures.map(this._serializeFeature, this), a = e.updateFeatures.map(this._serializeFeature, this), s = this._getFeatureIds(e.deleteFeatures);
                      Object(_tasks_operations_zscale_js__WEBPACK_IMPORTED_MODULE_18__["unapplyEditsZUnitScaling"])(r, a, this.layer.spatialReference);
                      o = [], i = [], u = _toConsumableArray(e.deleteAttachments);
                      _iterator = _createForOfIteratorHelper(e.addAttachments);
                      _context3.prev = 6;

                      _iterator.s();

                    case 8:
                      if ((_step = _iterator.n()).done) {
                        _context3.next = 17;
                        break;
                      }

                      _t = _step.value;
                      _context3.t0 = o;
                      _context3.next = 13;
                      return this._serializeAttachment(_t);

                    case 13:
                      _context3.t1 = _context3.sent;

                      _context3.t0.push.call(_context3.t0, _context3.t1);

                    case 15:
                      _context3.next = 8;
                      break;

                    case 17:
                      _context3.next = 22;
                      break;

                    case 19:
                      _context3.prev = 19;
                      _context3.t2 = _context3["catch"](6);

                      _iterator.e(_context3.t2);

                    case 22:
                      _context3.prev = 22;

                      _iterator.f();

                      return _context3.finish(22);

                    case 25:
                      _iterator2 = _createForOfIteratorHelper(e.updateAttachments);
                      _context3.prev = 26;

                      _iterator2.s();

                    case 28:
                      if ((_step2 = _iterator2.n()).done) {
                        _context3.next = 37;
                        break;
                      }

                      _t2 = _step2.value;
                      _context3.t3 = i;
                      _context3.next = 33;
                      return this._serializeAttachment(_t2);

                    case 33:
                      _context3.t4 = _context3.sent;

                      _context3.t3.push.call(_context3.t3, _context3.t4);

                    case 35:
                      _context3.next = 28;
                      break;

                    case 37:
                      _context3.next = 42;
                      break;

                    case 39:
                      _context3.prev = 39;
                      _context3.t5 = _context3["catch"](26);

                      _iterator2.e(_context3.t5);

                    case 42:
                      _context3.prev = 42;

                      _iterator2.f();

                      return _context3.finish(42);

                    case 45:
                      n = o.length || i.length || u.length ? {
                        adds: o,
                        updates: i,
                        deletes: u
                      } : null;
                      l = this._getLayerRequestOptions({
                        method: "post",
                        query: {
                          adds: r.length ? JSON.stringify(r) : null,
                          updates: a.length ? JSON.stringify(a) : null,
                          deletes: s.length ? s.join(",") : null,
                          gdbVersion: null == t ? void 0 : t.gdbVersion,
                          rollbackOnFailure: null == t ? void 0 : t.rollbackOnFailureEnabled,
                          useGlobalIds: null == t ? void 0 : t.globalIdUsed,
                          attachments: n && JSON.stringify(n)
                        }
                      });
                      _context3.next = 49;
                      return Object(_request_js__WEBPACK_IMPORTED_MODULE_15__["default"])(this.layer.parsedUrl.path + "/applyEdits", l);

                    case 49:
                      d = _context3.sent;
                      return _context3.abrupt("return", this._createEditsResult(d));

                    case 51:
                    case "end":
                      return _context3.stop();
                  }
                }
              }, _callee3, this, [[6, 19, 22, 25], [26, 39, 42, 45]]);
            }));

            function applyEdits(_x6, _x7) {
              return _applyEdits.apply(this, arguments);
            }

            return applyEdits;
          }()
        }, {
          key: "deleteAttachments",
          value: function () {
            var _deleteAttachments = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee4(e, t) {
              var r, a;
              return regeneratorRuntime.wrap(function _callee4$(_context4) {
                while (1) {
                  switch (_context4.prev = _context4.next) {
                    case 0:
                      _context4.next = 2;
                      return this.load();

                    case 2:
                      r = e.attributes[this.layer.objectIdField], a = this.layer.parsedUrl.path + "/" + r + "/deleteAttachments";
                      _context4.prev = 3;
                      _context4.next = 6;
                      return Object(_request_js__WEBPACK_IMPORTED_MODULE_15__["default"])(a, this._getLayerRequestOptions({
                        query: {
                          attachmentIds: t.join(",")
                        },
                        method: "post"
                      }));

                    case 6:
                      return _context4.abrupt("return", _context4.sent.data.deleteAttachmentResults.map(this._createFeatureEditResult));

                    case 9:
                      _context4.prev = 9;
                      _context4.t0 = _context4["catch"](3);
                      throw this._createAttachmentErrorResult(r, _context4.t0);

                    case 12:
                    case "end":
                      return _context4.stop();
                  }
                }
              }, _callee4, this, [[3, 9]]);
            }));

            function deleteAttachments(_x8, _x9) {
              return _deleteAttachments.apply(this, arguments);
            }

            return deleteAttachments;
          }()
        }, {
          key: "fetchRecomputedExtents",
          value: function fetchRecomputedExtents() {
            var _this2 = this;

            var e = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
            var t = e.signal;
            return this.load({
              signal: t
            }).then( /*#__PURE__*/_asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee5() {
              var t, _this2$layer, r, a, _yield$Object, s, o, i, u, n, l;

              return regeneratorRuntime.wrap(function _callee5$(_context5) {
                while (1) {
                  switch (_context5.prev = _context5.next) {
                    case 0:
                      t = _this2._getLayerRequestOptions(_objectSpread(_objectSpread({}, e), {}, {
                        query: {
                          returnUpdates: !0
                        }
                      }));
                      _this2$layer = _this2.layer;
                      r = _this2$layer.layerId;
                      a = _this2$layer.url;
                      _context5.next = 6;
                      return Object(_request_js__WEBPACK_IMPORTED_MODULE_15__["default"])("".concat(a, "/").concat(r), t);

                    case 6:
                      _yield$Object = _context5.sent;
                      s = _yield$Object.data;
                      o = s.id;
                      i = s.extent;
                      u = s.fullExtent;
                      n = s.timeExtent;
                      l = i || u;
                      return _context5.abrupt("return", {
                        id: o,
                        fullExtent: l && _geometry_Extent_js__WEBPACK_IMPORTED_MODULE_14__["default"].fromJSON(l),
                        timeExtent: n && _TimeExtent_js__WEBPACK_IMPORTED_MODULE_17__["default"].fromJSON({
                          start: n[0],
                          end: n[1]
                        })
                      });

                    case 14:
                    case "end":
                      return _context5.stop();
                  }
                }
              }, _callee5);
            })));
          }
        }, {
          key: "queryAttachments",
          value: function () {
            var _queryAttachments = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee6(e) {
              var t,
                  r,
                  a,
                  s,
                  _t3,
                  _r,
                  _iterator3,
                  _step3,
                  _e3,
                  _t4,
                  _args6 = arguments;

              return regeneratorRuntime.wrap(function _callee6$(_context6) {
                while (1) {
                  switch (_context6.prev = _context6.next) {
                    case 0:
                      t = _args6.length > 1 && _args6[1] !== undefined ? _args6[1] : {};
                      r = this.layer.parsedUrl, a = r.path;
                      _context6.next = 4;
                      return this.load();

                    case 4:
                      s = this._getLayerRequestOptions(t);

                      if (this.layer.get("capabilities.operations.supportsQueryAttachments")) {
                        _context6.next = 10;
                        break;
                      }

                      _t3 = e.objectIds, _r = [];
                      _iterator3 = _createForOfIteratorHelper(_t3);

                      try {
                        for (_iterator3.s(); !(_step3 = _iterator3.n()).done;) {
                          _e3 = _step3.value;
                          _t4 = a + "/" + _e3 + "/attachments";

                          _r.push(Object(_request_js__WEBPACK_IMPORTED_MODULE_15__["default"])(_t4, s));
                        }
                      } catch (err) {
                        _iterator3.e(err);
                      } finally {
                        _iterator3.f();
                      }

                      return _context6.abrupt("return", Object(_core_promiseUtils_js__WEBPACK_IMPORTED_MODULE_13__["all"])(_r).then(function (e) {
                        return _t3.map(function (t, r) {
                          return {
                            parentObjectId: t,
                            attachmentInfos: e[r].data.attachmentInfos
                          };
                        });
                      }).then(function (e) {
                        return Object(_tasks_operations_queryAttachments_js__WEBPACK_IMPORTED_MODULE_19__["processAttachmentQueryResult"])(e, a);
                      }));

                    case 10:
                      return _context6.abrupt("return", this.queryTask.executeAttachmentQuery(e, s));

                    case 11:
                    case "end":
                      return _context6.stop();
                  }
                }
              }, _callee6, this);
            }));

            function queryAttachments(_x10) {
              return _queryAttachments.apply(this, arguments);
            }

            return queryAttachments;
          }()
        }, {
          key: "queryFeatures",
          value: function () {
            var _queryFeatures = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee7(e, t) {
              return regeneratorRuntime.wrap(function _callee7$(_context7) {
                while (1) {
                  switch (_context7.prev = _context7.next) {
                    case 0:
                      _context7.next = 2;
                      return this.load();

                    case 2:
                      return _context7.abrupt("return", this.queryTask.execute(e, _objectSpread(_objectSpread({}, t), {}, {
                        query: _objectSpread(_objectSpread({}, this.layer.customParameters), null == t ? void 0 : t.query)
                      })));

                    case 3:
                    case "end":
                      return _context7.stop();
                  }
                }
              }, _callee7, this);
            }));

            function queryFeatures(_x11, _x12) {
              return _queryFeatures.apply(this, arguments);
            }

            return queryFeatures;
          }()
        }, {
          key: "queryFeaturesJSON",
          value: function () {
            var _queryFeaturesJSON = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee8(e, t) {
              return regeneratorRuntime.wrap(function _callee8$(_context8) {
                while (1) {
                  switch (_context8.prev = _context8.next) {
                    case 0:
                      _context8.next = 2;
                      return this.load();

                    case 2:
                      return _context8.abrupt("return", this.queryTask.executeJSON(e, _objectSpread(_objectSpread({}, t), {}, {
                        query: _objectSpread(_objectSpread({}, this.layer.customParameters), null == t ? void 0 : t.query)
                      })));

                    case 3:
                    case "end":
                      return _context8.stop();
                  }
                }
              }, _callee8, this);
            }));

            function queryFeaturesJSON(_x13, _x14) {
              return _queryFeaturesJSON.apply(this, arguments);
            }

            return queryFeaturesJSON;
          }()
        }, {
          key: "queryObjectIds",
          value: function () {
            var _queryObjectIds = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee9(e, t) {
              return regeneratorRuntime.wrap(function _callee9$(_context9) {
                while (1) {
                  switch (_context9.prev = _context9.next) {
                    case 0:
                      _context9.next = 2;
                      return this.load();

                    case 2:
                      return _context9.abrupt("return", this.queryTask.executeForIds(e, _objectSpread(_objectSpread({}, t), {}, {
                        query: _objectSpread(_objectSpread({}, this.layer.customParameters), null == t ? void 0 : t.query)
                      })));

                    case 3:
                    case "end":
                      return _context9.stop();
                  }
                }
              }, _callee9, this);
            }));

            function queryObjectIds(_x15, _x16) {
              return _queryObjectIds.apply(this, arguments);
            }

            return queryObjectIds;
          }()
        }, {
          key: "queryFeatureCount",
          value: function () {
            var _queryFeatureCount = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee10(e, t) {
              return regeneratorRuntime.wrap(function _callee10$(_context10) {
                while (1) {
                  switch (_context10.prev = _context10.next) {
                    case 0:
                      _context10.next = 2;
                      return this.load();

                    case 2:
                      return _context10.abrupt("return", this.queryTask.executeForCount(e, _objectSpread(_objectSpread({}, t), {}, {
                        query: _objectSpread(_objectSpread({}, this.layer.customParameters), null == t ? void 0 : t.query)
                      })));

                    case 3:
                    case "end":
                      return _context10.stop();
                  }
                }
              }, _callee10, this);
            }));

            function queryFeatureCount(_x17, _x18) {
              return _queryFeatureCount.apply(this, arguments);
            }

            return queryFeatureCount;
          }()
        }, {
          key: "queryExtent",
          value: function () {
            var _queryExtent = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee11(e, t) {
              return regeneratorRuntime.wrap(function _callee11$(_context11) {
                while (1) {
                  switch (_context11.prev = _context11.next) {
                    case 0:
                      _context11.next = 2;
                      return this.load();

                    case 2:
                      return _context11.abrupt("return", this.queryTask.executeForExtent(e, _objectSpread(_objectSpread({}, t), {}, {
                        query: _objectSpread(_objectSpread({}, this.layer.customParameters), null == t ? void 0 : t.query)
                      })));

                    case 3:
                    case "end":
                      return _context11.stop();
                  }
                }
              }, _callee11, this);
            }));

            function queryExtent(_x19, _x20) {
              return _queryExtent.apply(this, arguments);
            }

            return queryExtent;
          }()
        }, {
          key: "queryRelatedFeatures",
          value: function () {
            var _queryRelatedFeatures = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee12(e, t) {
              return regeneratorRuntime.wrap(function _callee12$(_context12) {
                while (1) {
                  switch (_context12.prev = _context12.next) {
                    case 0:
                      _context12.next = 2;
                      return this.load();

                    case 2:
                      return _context12.abrupt("return", this.queryTask.executeRelationshipQuery(e, _objectSpread(_objectSpread({}, t), {}, {
                        query: _objectSpread(_objectSpread({}, this.layer.customParameters), null == t ? void 0 : t.query)
                      })));

                    case 3:
                    case "end":
                      return _context12.stop();
                  }
                }
              }, _callee12, this);
            }));

            function queryRelatedFeatures(_x21, _x22) {
              return _queryRelatedFeatures.apply(this, arguments);
            }

            return queryRelatedFeatures;
          }()
        }, {
          key: "queryRelatedFeaturesCount",
          value: function () {
            var _queryRelatedFeaturesCount = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee13(e, t) {
              return regeneratorRuntime.wrap(function _callee13$(_context13) {
                while (1) {
                  switch (_context13.prev = _context13.next) {
                    case 0:
                      _context13.next = 2;
                      return this.load();

                    case 2:
                      return _context13.abrupt("return", this.queryTask.executeRelationshipQueryForCount(e, _objectSpread(_objectSpread({}, t), {}, {
                        query: _objectSpread(_objectSpread({}, this.layer.customParameters), null == t ? void 0 : t.query)
                      })));

                    case 3:
                    case "end":
                      return _context13.stop();
                  }
                }
              }, _callee13, this);
            }));

            function queryRelatedFeaturesCount(_x23, _x24) {
              return _queryRelatedFeaturesCount.apply(this, arguments);
            }

            return queryRelatedFeaturesCount;
          }()
        }, {
          key: "_fetchService",
          value: function () {
            var _fetchService2 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee14(e) {
              var r, _yield$Object2, _a, a;

              return regeneratorRuntime.wrap(function _callee14$(_context14) {
                while (1) {
                  switch (_context14.prev = _context14.next) {
                    case 0:
                      r = this.layer.sourceJSON;

                      if (r) {
                        _context14.next = 7;
                        break;
                      }

                      _context14.next = 4;
                      return Object(_request_js__WEBPACK_IMPORTED_MODULE_15__["default"])(this.layer.parsedUrl.path, this._getLayerRequestOptions({
                        query: Object(_core_has_js__WEBPACK_IMPORTED_MODULE_1__["default"])("featurelayer-advanced-symbols") ? {
                          returnAdvancedSymbols: !0
                        } : {},
                        signal: e
                      }));

                    case 4:
                      _yield$Object2 = _context14.sent;
                      _a = _yield$Object2.data;
                      r = _a;

                    case 7:
                      this.sourceJSON = this._patchServiceJSON(r);
                      a = r.type;

                      if (q.has(a)) {
                        _context14.next = 11;
                        break;
                      }

                      throw new _core_Error_js__WEBPACK_IMPORTED_MODULE_9__["default"]("feature-layer-source:unsupported-type", "Source type \"".concat(a, "\" is not supported"));

                    case 11:
                    case "end":
                      return _context14.stop();
                  }
                }
              }, _callee14, this);
            }));

            function _fetchService(_x25) {
              return _fetchService2.apply(this, arguments);
            }

            return _fetchService;
          }()
        }, {
          key: "_patchServiceJSON",
          value: function _patchServiceJSON(e) {
            var t;

            if ("Table" !== e.type && e.geometryType && (null == e || null == (t = e.drawingInfo) || !t.renderer) && !e.defaultSymbol) {
              var _t5 = Object(_support_clientSideDefaults_js__WEBPACK_IMPORTED_MODULE_21__["createDrawingInfo"])(e.geometryType).renderer;
              Object(_core_object_js__WEBPACK_IMPORTED_MODULE_3__["setDeepValue"])("drawingInfo.renderer", _t5, e);
            }

            return e;
          }
        }, {
          key: "_serializeFeature",
          value: function _serializeFeature(e) {
            var t = e.geometry,
                r = e.attributes;
            return Object(_core_maybe_js__WEBPACK_IMPORTED_MODULE_4__["isNone"])(t) ? {
              attributes: r
            } : "mesh" === t.type || "extent" === t.type ? null : {
              geometry: t.toJSON(),
              attributes: r
            };
          }
        }, {
          key: "_serializeAttachment",
          value: function () {
            var _serializeAttachment2 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee16(e) {
              var t, r, a, s, o, i, u, n, _e4;

              return regeneratorRuntime.wrap(function _callee16$(_context16) {
                while (1) {
                  switch (_context16.prev = _context16.next) {
                    case 0:
                      t = e.feature, r = e.attachment, a = r.globalId, s = r.name, o = r.contentType, i = r.data, u = r.uploadId, n = {
                        globalId: a,
                        parentGlobalId: null,
                        contentType: null,
                        name: null,
                        uploadId: null,
                        data: null
                      };

                      if (!(t && (n.parentGlobalId = "attributes" in t ? t.attributes && t.attributes[this.layer.globalIdField] : t.globalId), u)) {
                        _context16.next = 5;
                        break;
                      }

                      n.uploadId = u;
                      _context16.next = 10;
                      break;

                    case 5:
                      if (!i) {
                        _context16.next = 10;
                        break;
                      }

                      _context16.next = 8;
                      return function () {
                        var _ref2 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee15(e) {
                          return regeneratorRuntime.wrap(function _callee15$(_context15) {
                            while (1) {
                              switch (_context15.prev = _context15.next) {
                                case 0:
                                  if (!("string" == typeof e)) {
                                    _context15.next = 2;
                                    break;
                                  }

                                  return _context15.abrupt("return", Object(_core_urlUtils_js__WEBPACK_IMPORTED_MODULE_10__["dataComponents"])(e) || {
                                    data: e
                                  });

                                case 2:
                                  return _context15.abrupt("return", Object(_core_promiseUtils_js__WEBPACK_IMPORTED_MODULE_13__["create"])(function (t, r) {
                                    var a = new FileReader();
                                    a.readAsDataURL(e), a.onload = function () {
                                      return t(Object(_core_urlUtils_js__WEBPACK_IMPORTED_MODULE_10__["dataComponents"])(a.result));
                                    }, a.onerror = function (e) {
                                      return r(e);
                                    };
                                  }));

                                case 3:
                                case "end":
                                  return _context15.stop();
                              }
                            }
                          }, _callee15);
                        }));

                        return function (_x27) {
                          return _ref2.apply(this, arguments);
                        };
                      }()(i);

                    case 8:
                      _e4 = _context16.sent;
                      n.contentType = _e4.mediaType, n.data = _e4.data, i instanceof File && (n.name = i.name);

                    case 10:
                      return _context16.abrupt("return", (s && (n.name = s), o && (n.contentType = o), n));

                    case 11:
                    case "end":
                      return _context16.stop();
                  }
                }
              }, _callee16, this);
            }));

            function _serializeAttachment(_x26) {
              return _serializeAttachment2.apply(this, arguments);
            }

            return _serializeAttachment;
          }()
        }, {
          key: "_getFeatureIds",
          value: function _getFeatureIds(e) {
            var t = e[0];
            return t ? "objectId" in t ? this._getIdsFromFeatureIdentifier(e) : this._getIdsFromFeatures(e) : [];
          }
        }, {
          key: "_getIdsFromFeatures",
          value: function _getIdsFromFeatures(e) {
            var t = this.layer.objectIdField;
            return e.map(function (e) {
              return e.attributes && e.attributes[t];
            });
          }
        }, {
          key: "_getIdsFromFeatureIdentifier",
          value: function _getIdsFromFeatureIdentifier(e) {
            return e.map(function (e) {
              return e.objectId;
            });
          }
        }, {
          key: "_createEditsResult",
          value: function _createEditsResult(e) {
            var t = e.data,
                r = e.data && e.data.attachments;
            return {
              addFeatureResults: t.addResults ? t.addResults.map(this._createFeatureEditResult, this) : [],
              updateFeatureResults: t.updateResults ? t.updateResults.map(this._createFeatureEditResult, this) : [],
              deleteFeatureResults: t.deleteResults ? t.deleteResults.map(this._createFeatureEditResult, this) : [],
              addAttachmentResults: r && r.addResults ? r.addResults.map(this._createFeatureEditResult, this) : [],
              updateAttachmentResults: r && r.updateResults ? r.updateResults.map(this._createFeatureEditResult, this) : [],
              deleteAttachmentResults: r && r.deleteResults ? r.deleteResults.map(this._createFeatureEditResult, this) : []
            };
          }
        }, {
          key: "_createFeatureEditResult",
          value: function _createFeatureEditResult(e) {
            var t = !0 === e.success ? null : e.error || {
              code: void 0,
              description: void 0
            };
            return {
              objectId: e.objectId,
              globalId: e.globalId,
              error: t ? new _core_Error_js__WEBPACK_IMPORTED_MODULE_9__["default"]("feature-layer-source:edit-failure", t.description, {
                code: t.code
              }) : null
            };
          }
        }, {
          key: "_createAttachmentErrorResult",
          value: function _createAttachmentErrorResult(e, t) {
            var r = t.details.messages && t.details.messages[0] || t.message,
                a = t.details.httpStatus || t.details.messageCode;
            return {
              objectId: e,
              globalId: null,
              error: new _core_Error_js__WEBPACK_IMPORTED_MODULE_9__["default"]("feature-layer-source:attachment-failure", r, {
                code: a
              })
            };
          }
        }, {
          key: "_getFormDataForAttachment",
          value: function _getFormDataForAttachment(e, t) {
            var r = e instanceof FormData ? e : e && e.elements ? new FormData(e) : null;
            if (r) for (var _e5 in t) {
              var a = t[_e5];
              null != a && (r.set ? r.set(_e5, a) : r.append(_e5, a));
            }
            return r;
          }
        }, {
          key: "_getLayerRequestOptions",
          value: function _getLayerRequestOptions() {
            var e = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
            var _this$layer2 = this.layer,
                t = _this$layer2.parsedUrl,
                a = _this$layer2.gdbVersion,
                s = _this$layer2.dynamicDataSource;
            return _objectSpread(_objectSpread({}, e), {}, {
              query: Object(_core_lang_js__WEBPACK_IMPORTED_MODULE_2__["fixJson"])(_objectSpread(_objectSpread(_objectSpread({
                gdbVersion: a,
                layer: s ? JSON.stringify({
                  source: s
                }) : void 0
              }, t.query), {}, {
                f: "json"
              }, this.layer.customParameters), null == e ? void 0 : e.query)),
              responseType: "json"
            });
          }
        }]);

        return I;
      }(_core_Loadable_js__WEBPACK_IMPORTED_MODULE_16__["default"]);

      Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_7__["property"])()], I.prototype, "type", void 0), Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_7__["property"])({
        constructOnly: !0
      })], I.prototype, "layer", void 0), Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_7__["property"])({
        readOnly: !0,
        dependsOn: ["layer.parsedUrl", "layer.gdbVersion", "layer.dynamicDataSource", "layer.fieldsIndex"]
      })], I.prototype, "queryTask", null), I = Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_subclass_js__WEBPACK_IMPORTED_MODULE_8__["subclass"])("esri.layers.graphics.sources.FeatureLayerSource")], I);
      var _ = I;
      /* harmony default export */

      __webpack_exports__["default"] = _;
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

          for (var _e6 in r) {
            t += "this".concat(_e6.indexOf(".") ? "[\"".concat(_e6, "\"]") : ".".concat(_e6), " = ").concat(JSON.stringify(r[_e6]), ";");
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

    }
  }]);
})();
//# sourceMappingURL=graphics-sources-FeatureLayerSource-js-es5.js.map