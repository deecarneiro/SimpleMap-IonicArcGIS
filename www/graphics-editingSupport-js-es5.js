(function () {
  function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

  function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

  function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

  function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

  function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["graphics-editingSupport-js"], {
    /***/
    "CJn3":
    /*!*********************************************************************!*\
      !*** ./node_modules/@arcgis/core/layers/graphics/editingSupport.js ***!
      \*********************************************************************/

    /*! exports provided: applyEdits, isEditableLayer */

    /***/
    function CJn3(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "applyEdits", function () {
        return u;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "isEditableLayer", function () {
        return o;
      });
      /* harmony import */


      var _core_lang_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ../../core/lang.js */
      "f/qv");
      /* harmony import */


      var _core_maybe_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ../../core/maybe.js */
      "srIe");
      /* harmony import */


      var _core_Error_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ../../core/Error.js */
      "zlDU");
      /* harmony import */


      var _core_urlUtils_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ../../core/urlUtils.js */
      "4EHJ");
      /* harmony import */


      var _core_promiseUtils_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ../../core/promiseUtils.js */
      "9MzC");
      /* harmony import */


      var _core_Collection_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ../../core/Collection.js */
      "LE9a");
      /* harmony import */


      var _Graphic_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ../../Graphic.js */
      "jWBI");
      /* harmony import */


      var _geometry_support_normalizeUtils_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! ../../geometry/support/normalizeUtils.js */
      "qNUd");
      /*
      All material copyright ESRI, All Rights Reserved, unless otherwise specified.
      See https://js.arcgis.com/4.18/esri/copyright.txt for details.
      */


      function o(e) {
        var t, a;
        return !0 === (null == e || null == (t = e.capabilities) || null == (a = t.operations) ? void 0 : a.supportsEditing) && e && (!("editingEnabled" in e) || e.editingEnabled);
      }

      function u(_x, _x2, _x3, _x4) {
        return _u.apply(this, arguments);
      }

      function _u() {
        _u = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee3(t, r, l, o) {
          var u, m, y, _yield, s, _m, _y, f;

          return regeneratorRuntime.wrap(function _callee3$(_context3) {
            while (1) {
              switch (_context3.prev = _context3.next) {
                case 0:
                  y = {
                    edits: l,
                    result: Object(_core_promiseUtils_js__WEBPACK_IMPORTED_MODULE_4__["create"])(function (e, t) {
                      u = e, m = t;
                    })
                  };
                  t.emit("apply-edits", y);
                  _context3.prev = 2;
                  _context3.next = 5;
                  return function () {
                    var _ref = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee2(e, t, r, s) {
                      var l;
                      return regeneratorRuntime.wrap(function _callee2$(_context2) {
                        while (1) {
                          switch (_context2.prev = _context2.next) {
                            case 0:
                              _context2.next = 2;
                              return e.load();

                            case 2:
                              if (function (e) {
                                return e && null != e.applyEdits;
                              }(t)) {
                                _context2.next = 4;
                                break;
                              }

                              return _context2.abrupt("return", Object(_core_promiseUtils_js__WEBPACK_IMPORTED_MODULE_4__["reject"])(new _core_Error_js__WEBPACK_IMPORTED_MODULE_2__["default"]("".concat(e.type, "-layer:no-editing-support"), "Layer source does not support applyEdits capability", {
                                layer: e
                              })));

                            case 4:
                              if (e.editingEnabled) {
                                _context2.next = 6;
                                break;
                              }

                              throw new _core_Error_js__WEBPACK_IMPORTED_MODULE_2__["default"]("".concat(e.type, "-layer:editing-disabled"), "Editing is disabled for layer", {
                                layer: e
                              });

                            case 6:
                              _context2.next = 8;
                              return function (e, t, r) {
                                var s = t && (t.addFeatures || t.updateFeatures || t.deleteFeatures),
                                    d = t && (t.addAttachments || t.updateAttachments || t.deleteAttachments);
                                if (!t || !s && !d) throw new _core_Error_js__WEBPACK_IMPORTED_MODULE_2__["default"]("".concat(e.type, "-layer:missing-parameters"), "'addFeatures', 'updateFeatures', 'deleteFeatures', 'addAttachments', 'updateAttachments' or 'deleteAttachments' parameter is required");
                                if (!e.capabilities.data.isVersioned && r && r.gdbVersion) throw new _core_Error_js__WEBPACK_IMPORTED_MODULE_2__["default"]("".concat(e.type, "-layer:invalid-parameter"), "'gdbVersion' is applicable only if the layer supports versioned data. See: 'capabilities.data.isVersioned'");
                                if (!e.capabilities.editing.supportsRollbackOnFailure && r && r.rollbackOnFailureEnabled) throw new _core_Error_js__WEBPACK_IMPORTED_MODULE_2__["default"]("".concat(e.type, "-layer:invalid-parameter"), "This layer does not support 'rollbackOnFailureEnabled' parameter. See: 'capabilities.editing.supportsRollbackOnFailure'");
                                if (!e.capabilities.editing.supportsGlobalId && r && r.globalIdUsed) throw new _core_Error_js__WEBPACK_IMPORTED_MODULE_2__["default"]("".concat(e.type, "-layer:invalid-parameter"), "This layer does not support 'globalIdUsed' parameter. See: 'capabilities.editing.supportsGlobalId'");
                                if (!e.capabilities.editing.supportsGlobalId && d) throw new _core_Error_js__WEBPACK_IMPORTED_MODULE_2__["default"]("".concat(e.type, "-layer:invalid-parameter"), "'addAttachments', 'updateAttachments' and 'deleteAttachments' are applicable only if the layer supports global ids. See: 'capabilities.editing.supportsGlobalId'");
                                if ((!r || !r.globalIdUsed) && d) throw new _core_Error_js__WEBPACK_IMPORTED_MODULE_2__["default"]("".concat(e.type, "-layer:invalid-parameter"), "When 'addAttachments', 'updateAttachments' or 'deleteAttachments' is specified, globalIdUsed should be set to true");

                                var l = _objectSpread({}, t);

                                if (l.addFeatures = t && _core_Collection_js__WEBPACK_IMPORTED_MODULE_5__["default"].isCollection(t.addFeatures) ? t.addFeatures.toArray() : l.addFeatures || [], l.updateFeatures = t && _core_Collection_js__WEBPACK_IMPORTED_MODULE_5__["default"].isCollection(t.updateFeatures) ? t.updateFeatures.toArray() : l.updateFeatures || [], l.deleteFeatures = t && _core_Collection_js__WEBPACK_IMPORTED_MODULE_5__["default"].isCollection(t.deleteFeatures) ? t.deleteFeatures.toArray() : l.deleteFeatures || [], l.addFeatures.length && !e.capabilities.operations.supportsAdd) throw new _core_Error_js__WEBPACK_IMPORTED_MODULE_2__["default"]("".concat(e.type, "-layer:unsupported-operation"), "Layer does not support adding features.");
                                if (l.updateFeatures.length && !e.capabilities.operations.supportsUpdate) throw new _core_Error_js__WEBPACK_IMPORTED_MODULE_2__["default"]("".concat(e.type, "-layer:unsupported-operation"), "Layer does not support updating features.");
                                if (l.deleteFeatures.length && !e.capabilities.operations.supportsDelete) throw new _core_Error_js__WEBPACK_IMPORTED_MODULE_2__["default"]("".concat(e.type, "-layer:unsupported-operation"), "Layer does not support deleting features.");
                                l.addAttachments = l.addAttachments || [], l.updateAttachments = l.updateAttachments || [], l.deleteAttachments = l.deleteAttachments || [], l.addFeatures = l.addFeatures.map(c), l.updateFeatures = l.updateFeatures.map(c);
                                var o = r && r.globalIdUsed;
                                return l.addFeatures.forEach(function (t) {
                                  return p(t, e, o);
                                }), l.updateFeatures.forEach(function (t) {
                                  return p(t, e, o);
                                }), l.deleteFeatures.forEach(function (t) {
                                  return p(t, e, o);
                                }), l.addAttachments.forEach(function (t) {
                                  return h(t, e);
                                }), l.updateAttachments.forEach(function (t) {
                                  return h(t, e);
                                }), function () {
                                  var _ref2 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(e) {
                                    var t, a, r, s, d, i;
                                    return regeneratorRuntime.wrap(function _callee$(_context) {
                                      while (1) {
                                        switch (_context.prev = _context.next) {
                                          case 0:
                                            t = e.addFeatures;
                                            a = e.updateFeatures;
                                            r = t.concat(a).map(function (e) {
                                              return e.geometry;
                                            });
                                            _context.next = 5;
                                            return Object(_geometry_support_normalizeUtils_js__WEBPACK_IMPORTED_MODULE_7__["normalizeCentralMeridian"])(r);

                                          case 5:
                                            s = _context.sent;
                                            d = t.length;
                                            i = a.length;
                                            return _context.abrupt("return", (s.slice(0, d).forEach(function (t, a) {
                                              e.addFeatures[a].geometry = t;
                                            }), s.slice(d, d + i).forEach(function (t, a) {
                                              e.updateFeatures[a].geometry = t;
                                            }), e));

                                          case 9:
                                          case "end":
                                            return _context.stop();
                                        }
                                      }
                                    }, _callee);
                                  }));

                                  return function (_x9) {
                                    return _ref2.apply(this, arguments);
                                  };
                                }()(l);
                              }(e, r, s);

                            case 8:
                              l = _context2.sent;

                              if (l.addFeatures.length || l.updateFeatures.length || l.deleteFeatures.length || l.addAttachments.length || l.updateAttachments.length || l.deleteAttachments.length) {
                                _context2.next = 11;
                                break;
                              }

                              return _context2.abrupt("return", {
                                edits: l,
                                results: {
                                  addFeatureResults: [],
                                  updateFeatureResults: [],
                                  deleteFeatureResults: [],
                                  addAttachmentResults: [],
                                  updateAttachmentResults: [],
                                  deleteAttachmentResults: []
                                }
                              });

                            case 11:
                              _context2.t0 = l;
                              _context2.next = 14;
                              return t.applyEdits(l, s);

                            case 14:
                              _context2.t1 = _context2.sent;
                              return _context2.abrupt("return", {
                                edits: _context2.t0,
                                results: _context2.t1
                              });

                            case 16:
                            case "end":
                              return _context2.stop();
                          }
                        }
                      }, _callee2);
                    }));

                    return function (_x5, _x6, _x7, _x8) {
                      return _ref.apply(this, arguments);
                    };
                  }()(t, r, l, o);

                case 5:
                  _yield = _context3.sent;
                  s = _yield.results;
                  _m = _yield.edits;

                  _y = function _y(t) {
                    return t.filter(function (e) {
                      return !e.error;
                    }).map(_core_lang_js__WEBPACK_IMPORTED_MODULE_0__["clone"]);
                  };

                  f = {
                    edits: _m,
                    addedFeatures: _y(s.addFeatureResults),
                    updatedFeatures: _y(s.updateFeatureResults),
                    deletedFeatures: _y(s.deleteFeatureResults),
                    addedAttachments: _y(s.addAttachmentResults),
                    updatedAttachments: _y(s.updateAttachmentResults),
                    deletedAttachments: _y(s.deleteAttachmentResults)
                  };
                  return _context3.abrupt("return", ((f.addedFeatures.length || f.updatedFeatures.length || f.deletedFeatures.length || f.addedAttachments.length || f.updatedAttachments.length || f.deletedAttachments.length) && t.emit("edits", f), u(f), s));

                case 13:
                  _context3.prev = 13;
                  _context3.t0 = _context3["catch"](2);
                  throw m(_context3.t0), _context3.t0;

                case 16:
                case "end":
                  return _context3.stop();
              }
            }
          }, _callee3, null, [[2, 13]]);
        }));
        return _u.apply(this, arguments);
      }

      function p(e, r, s) {
        if (s) {
          if ("attributes" in e && !e.attributes[r.globalIdField]) throw new _core_Error_js__WEBPACK_IMPORTED_MODULE_2__["default"]("".concat(r.type, "-layer:invalid-parameter"), "Feature should have 'globalId' when 'globalIdUsed' is true");
          if (!("attributes" in e) && !e.globalId) throw new _core_Error_js__WEBPACK_IMPORTED_MODULE_2__["default"]("".concat(r.type, "-layer:invalid-parameter"), "'globalId' of the feature should be passed when 'globalIdUsed' is true");
        }

        if ("geometry" in e && Object(_core_maybe_js__WEBPACK_IMPORTED_MODULE_1__["isSome"])(e.geometry)) {
          if (e.geometry.hasZ && !1 === r.capabilities.data.supportsZ) throw new _core_Error_js__WEBPACK_IMPORTED_MODULE_2__["default"]("".concat(r.type, "-layer:z-unsupported"), "Layer does not support z values while feature has z values.");
          if (e.geometry.hasM && !1 === r.capabilities.data.supportsM) throw new _core_Error_js__WEBPACK_IMPORTED_MODULE_2__["default"]("".concat(r.type, "-layer:m-unsupported"), "Layer does not support m values while feature has m values.");
        }
      }

      function h(e, t) {
        var s = e.feature,
            d = e.attachment;
        if (!s || "attributes" in s && !s.attributes[t.globalIdField]) throw new _core_Error_js__WEBPACK_IMPORTED_MODULE_2__["default"]("".concat(t.type, "-layer:invalid-parameter"), "Attachment should have reference to a feature with 'globalId'");
        if (!("attributes" in s) && !s.globalId) throw new _core_Error_js__WEBPACK_IMPORTED_MODULE_2__["default"]("".concat(t.type, "-layer:invalid-parameter"), "Attachment should have reference to 'globalId' of the parent feature");
        if (!d.globalId) throw new _core_Error_js__WEBPACK_IMPORTED_MODULE_2__["default"]("".concat(t.type, "-layer:invalid-parameter"), "Attachment should have 'globalId'");
        if (!d.data && !d.uploadId) throw new _core_Error_js__WEBPACK_IMPORTED_MODULE_2__["default"]("".concat(t.type, "-layer:invalid-parameter"), "Attachment should have 'data' or 'uploadId'");
        if (!(d.data instanceof File && !!d.data.name) && !d.name) throw new _core_Error_js__WEBPACK_IMPORTED_MODULE_2__["default"]("".concat(t.type, "-layer:invalid-parameter"), "'name' is required when attachment is specified as Base64 encoded string using 'data'");
        if (!t.capabilities.editing.supportsUploadWithItemId && d.uploadId) throw new _core_Error_js__WEBPACK_IMPORTED_MODULE_2__["default"]("".concat(t.type, "-layer:invalid-parameter"), "This layer does not support 'uploadId' parameter. See: 'capabilities.editing.supportsUploadWithItemId'");

        if ("string" == typeof d.data) {
          var _e = Object(_core_urlUtils_js__WEBPACK_IMPORTED_MODULE_3__["dataComponents"])(d.data);

          if (_e && !_e.isBase64) throw new _core_Error_js__WEBPACK_IMPORTED_MODULE_2__["default"]("".concat(t.type, "-layer:invalid-parameter"), "Attachment 'data' should be a Blob, File or Base64 encoded string");
        }
      }

      function c(e) {
        var t = new _Graphic_js__WEBPACK_IMPORTED_MODULE_6__["default"]();
        return e.attributes || (e.attributes = {}), t.geometry = e.geometry, t.attributes = e.attributes, t;
      }
      /***/

    }
  }]);
})();
//# sourceMappingURL=graphics-editingSupport-js-es5.js.map