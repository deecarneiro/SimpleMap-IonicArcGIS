(function () {
  function _createForOfIteratorHelper(o, allowArrayLike) { var it; if (typeof Symbol === "undefined" || o[Symbol.iterator] == null) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e11) { throw _e11; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = o[Symbol.iterator](); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e12) { didErr = true; err = _e12; }, f: function f() { try { if (!normalCompletion && it["return"] != null) it["return"](); } finally { if (didErr) throw err; } } }; }

  function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

  function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["arcade-arcadeAsyncRuntime-js"], {
    /***/
    "ME8W":
    /*!****************************************************************!*\
      !*** ./node_modules/@arcgis/core/arcade/arcadeAsyncRuntime.js ***!
      \****************************************************************/

    /*! exports provided: executeScript, extend, extractFieldLiterals, findFunctionCalls, functionHelper, referencesFunction, referencesMember, validateScript */

    /***/
    function ME8W(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "executeScript", function () {
        return Pe;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "extend", function () {
        return xe;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "extractFieldLiterals", function () {
        return De;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "findFunctionCalls", function () {
        return _e;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "functionHelper", function () {
        return Me;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "referencesFunction", function () {
        return ke;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "referencesMember", function () {
        return Le;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "validateScript", function () {
        return je;
      });
      /* harmony import */


      var _core_promiseUtils_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ../core/promiseUtils.js */
      "9MzC");
      /* harmony import */


      var _geometry_SpatialReference_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ../geometry/SpatialReference.js */
      "WZb1");
      /* harmony import */


      var _geometry_Geometry_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ../geometry/Geometry.js */
      "N2DF");
      /* harmony import */


      var _geometry_Point_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ../geometry/Point.js */
      "SuVq");
      /* harmony import */


      var _geometry_Extent_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ../geometry/Extent.js */
      "OvF4");
      /* harmony import */


      var _geometry_Multipoint_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ../geometry/Multipoint.js */
      "V9wi");
      /* harmony import */


      var _geometry_Polygon_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ../geometry/Polygon.js */
      "Ehki");
      /* harmony import */


      var _geometry_Polyline_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! ../geometry/Polyline.js */
      "UhwK");
      /* harmony import */


      var _FunctionWrapper_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! ./FunctionWrapper.js */
      "pqxT");
      /* harmony import */


      var _ImmutablePointArray_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! ./ImmutablePointArray.js */
      "Q2u5");
      /* harmony import */


      var _ImmutablePathArray_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
      /*! ./ImmutablePathArray.js */
      "kJip");
      /* harmony import */


      var _chunks_languageUtils_js__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
      /*! ../chunks/languageUtils.js */
      "idrm");
      /* harmony import */


      var _Dictionary_js__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
      /*! ./Dictionary.js */
      "D5C5");
      /* harmony import */


      var _ArcadePortal_js__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
      /*! ./ArcadePortal.js */
      "Xfxc");
      /* harmony import */


      var _Attachment_js__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(
      /*! ./Attachment.js */
      "db86");
      /* harmony import */


      var _featureset_support_shared_js__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(
      /*! ./featureset/support/shared.js */
      "hTzF");
      /* harmony import */


      var _Feature_js__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(
      /*! ./Feature.js */
      "Xrjs");
      /* harmony import */


      var _treeAnalysis_js__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(
      /*! ./treeAnalysis.js */
      "k8am");
      /* harmony import */


      var _functions_array_js__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(
      /*! ./functions/array.js */
      "ACnk");
      /* harmony import */


      var _functions_date_js__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(
      /*! ./functions/date.js */
      "ve0I");
      /* harmony import */


      var _functions_geometry_js__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(
      /*! ./functions/geometry.js */
      "KvhC");
      /* harmony import */


      var _functions_maths_js__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(
      /*! ./functions/maths.js */
      "yBFI");
      /* harmony import */


      var _functions_stats_js__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(
      /*! ./functions/stats.js */
      "IqHt");
      /* harmony import */


      var _functions_string_js__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(
      /*! ./functions/string.js */
      "RrDw");
      /* harmony import */


      var _functions_geomasync_js__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(
      /*! ./functions/geomasync.js */
      "NOfn");
      /*
      All material copyright ESRI, All Rights Reserved, unless otherwise specified.
      See https://js.arcgis.com/4.18/esri/copyright.txt for details.
      */


      function te(e) {
        return e instanceof Error ? Object(_core_promiseUtils_js__WEBPACK_IMPORTED_MODULE_0__["reject"])(e) : Object(_core_promiseUtils_js__WEBPACK_IMPORTED_MODULE_0__["reject"])(new Error(e));
      }

      function re(e) {
        return Object(_core_promiseUtils_js__WEBPACK_IMPORTED_MODULE_0__["resolve"])(e);
      }

      function ne(e, r) {
        var n = [];

        for (var t = 0; t < r.arguments.length; t++) {
          n.push(ce(e, r.arguments[t]));
        }

        return Object(_core_promiseUtils_js__WEBPACK_IMPORTED_MODULE_0__["all"])(n);
      }

      function oe(t, r, n) {
        return Object(_core_promiseUtils_js__WEBPACK_IMPORTED_MODULE_0__["create"])(function (e, o) {
          ne(t, r).then(function (a) {
            try {
              e(n(t, r, a));
            } catch (e) {
              o(e);
            }
          }, o);
        });
      }

      function ae(e, t, r) {
        try {
          return ne(e, t).then(function (o) {
            try {
              var c = r(e, t, o);
              return (a = c) && "function" == typeof a.then ? c : Object(_core_promiseUtils_js__WEBPACK_IMPORTED_MODULE_0__["resolve"])(c);
            } catch (e) {
              return te(e);
            }

            var a;
          });
        } catch (e) {
          return te(e);
        }
      }

      function ce(o, c) {
        try {
          switch (c.type) {
            case "VariableDeclarator":
              return function (t, r) {
                try {
                  var _o = null;
                  return _o = null === r.init ? Object(_core_promiseUtils_js__WEBPACK_IMPORTED_MODULE_0__["resolve"])(null) : ce(t, r.init), null !== t.localScope ? _o.then(function (n) {
                    return Object(_core_promiseUtils_js__WEBPACK_IMPORTED_MODULE_0__["create"])(function (e) {
                      if (n === _chunks_languageUtils_js__WEBPACK_IMPORTED_MODULE_11__["v"] && (n = null), "Identifier" !== r.id.type) throw new Error("Can only assign a regular variable");
                      var o = r.id.name.toLowerCase();
                      t.localScope[o] = {
                        value: n,
                        valueset: !0,
                        node: r.init
                      }, e(_chunks_languageUtils_js__WEBPACK_IMPORTED_MODULE_11__["v"]);
                    });
                  }) : _o.then(function (n) {
                    return Object(_core_promiseUtils_js__WEBPACK_IMPORTED_MODULE_0__["create"])(function (e) {
                      if ("Identifier" !== r.id.type) throw new Error("Can only assign a regular variable");
                      var o = r.id.name.toLowerCase();
                      n === _chunks_languageUtils_js__WEBPACK_IMPORTED_MODULE_11__["v"] && (n = null), t.globalScope[o] = {
                        value: n,
                        valueset: !0,
                        node: r.init
                      }, e(_chunks_languageUtils_js__WEBPACK_IMPORTED_MODULE_11__["v"]);
                    });
                  });
                } catch (e) {
                  return te(e);
                }
              }(o, c);

            case "VariableDeclaration":
              return me(o, c, 0);

            case "BlockStatement":
              return function (e, t) {
                try {
                  return de(e, t, 0);
                } catch (e) {
                  return te(e);
                }
              }(o, c);

            case "FunctionDeclaration":
              return function (e, t) {
                try {
                  var r = t.id.name.toLowerCase();
                  return e.globalScope[r] = {
                    valueset: !0,
                    node: null,
                    value: new _FunctionWrapper_js__WEBPACK_IMPORTED_MODULE_8__["default"](t, e)
                  }, Object(_core_promiseUtils_js__WEBPACK_IMPORTED_MODULE_0__["resolve"])(_chunks_languageUtils_js__WEBPACK_IMPORTED_MODULE_11__["v"]);
                } catch (e) {
                  return te(e);
                }
              }(o, c);

            case "ReturnStatement":
              return function (t, r) {
                return Object(_core_promiseUtils_js__WEBPACK_IMPORTED_MODULE_0__["create"])(function (e, n) {
                  null === r.argument ? e(new _chunks_languageUtils_js__WEBPACK_IMPORTED_MODULE_11__["R"](_chunks_languageUtils_js__WEBPACK_IMPORTED_MODULE_11__["v"])) : ce(t, r.argument).then(function (t) {
                    try {
                      e(new _chunks_languageUtils_js__WEBPACK_IMPORTED_MODULE_11__["R"](t));
                    } catch (e) {
                      n(e);
                    }
                  }, n);
                });
              }(o, c);

            case "IfStatement":
              return function (t, r) {
                return Object(_core_promiseUtils_js__WEBPACK_IMPORTED_MODULE_0__["create"])(function (e, n) {
                  "AssignmentExpression" !== r.test.type && "UpdateExpression" !== r.test.type ? ce(t, r.test).then(function (o) {
                    try {
                      !0 === o ? ce(t, r.consequent).then(e, n) : !1 === o ? null !== r.alternate ? ce(t, r.alternate).then(e, n) : e(_chunks_languageUtils_js__WEBPACK_IMPORTED_MODULE_11__["v"]) : n(new Error(Object(_treeAnalysis_js__WEBPACK_IMPORTED_MODULE_17__["nodeErrorMessage"])(r.test, "RUNTIME", "CANNOT_USE_NONBOOLEAN_IN_CONDITION")));
                    } catch (e) {
                      n(e);
                    }
                  }, n) : n(new Error(Object(_treeAnalysis_js__WEBPACK_IMPORTED_MODULE_17__["nodeErrorMessage"])(r.test, "RUNTIME", "CANNOT_USE_ASSIGNMENT_IN_CONDITION")));
                });
              }(o, c);

            case "ExpressionStatement":
              return function (t, n) {
                try {
                  return "AssignmentExpression" === n.expression.type ? ce(t, n.expression) : (n.expression.type, ce(t, n.expression).then(function (t) {
                    return Object(_core_promiseUtils_js__WEBPACK_IMPORTED_MODULE_0__["create"])(function (e) {
                      e(t === _chunks_languageUtils_js__WEBPACK_IMPORTED_MODULE_11__["v"] ? _chunks_languageUtils_js__WEBPACK_IMPORTED_MODULE_11__["v"] : new _chunks_languageUtils_js__WEBPACK_IMPORTED_MODULE_11__["I"](t));
                    });
                  }));
                } catch (e) {
                  return Object(_core_promiseUtils_js__WEBPACK_IMPORTED_MODULE_0__["reject"])(e);
                }
              }(o, c);

            case "UpdateExpression":
              return function (t, o) {
                try {
                  var r = o.argument;

                  if ("MemberExpression" === r.type) {
                    var a = {
                      t: null
                    };
                    return ce(t, r.object).then(function (e) {
                      var o = null;
                      return a.t = e, !0 === r.computed ? o = ce(t, r.property) : "Identifier" === r.property.type && (o = Object(_core_promiseUtils_js__WEBPACK_IMPORTED_MODULE_0__["resolve"])(r.property.name)), o;
                    }).then(function (t) {
                      return Object(_core_promiseUtils_js__WEBPACK_IMPORTED_MODULE_0__["create"])(function (e) {
                        var r = a.t;
                        var n;

                        if (Object(_chunks_languageUtils_js__WEBPACK_IMPORTED_MODULE_11__["h"])(r)) {
                          if (!Object(_chunks_languageUtils_js__WEBPACK_IMPORTED_MODULE_11__["a"])(t)) throw new Error("Invalid Parameter");
                          if (t < 0 && (t = r.length + t), t < 0 || t >= r.length) throw new Error("Assignment outside of array bounds");
                          n = Object(_chunks_languageUtils_js__WEBPACK_IMPORTED_MODULE_11__["c"])(r[t]), r[t] = "++" === o.operator ? n + 1 : n - 1;
                        } else if (r instanceof _Dictionary_js__WEBPACK_IMPORTED_MODULE_12__["default"]) {
                          if (!1 === Object(_chunks_languageUtils_js__WEBPACK_IMPORTED_MODULE_11__["b"])(t)) throw new Error("Dictionary accessor must be a string");
                          if (!0 !== r.hasField(t)) throw new Error("Invalid Parameter");
                          n = Object(_chunks_languageUtils_js__WEBPACK_IMPORTED_MODULE_11__["c"])(r.field(t)), r.setField(t, "++" === o.operator ? n + 1 : n - 1);
                        } else {
                          if (!(r instanceof _Feature_js__WEBPACK_IMPORTED_MODULE_16__["default"])) throw Object(_chunks_languageUtils_js__WEBPACK_IMPORTED_MODULE_11__["o"])(r) ? new Error("Array is Immutable") : new Error("Invalid Parameter");
                          if (!1 === Object(_chunks_languageUtils_js__WEBPACK_IMPORTED_MODULE_11__["b"])(t)) throw new Error("Feature accessor must be a string");
                          if (!0 !== r.hasField(t)) throw new Error("Invalid Parameter");
                          n = Object(_chunks_languageUtils_js__WEBPACK_IMPORTED_MODULE_11__["c"])(r.field(t)), r.setField(t, "++" === o.operator ? n + 1 : n - 1);
                        }

                        !1 === o.prefix ? e(n) : e("++" === o.operator ? n + 1 : n - 1);
                      });
                    });
                  }

                  return Object(_core_promiseUtils_js__WEBPACK_IMPORTED_MODULE_0__["create"])(function (e, r) {
                    var n = "Identifier" === o.argument.type ? o.argument.name.toLowerCase() : "";
                    if (!n) throw new Error("Invalid identifier");
                    var a;
                    return null !== t.localScope && void 0 !== t.localScope[n] ? (a = Object(_chunks_languageUtils_js__WEBPACK_IMPORTED_MODULE_11__["c"])(t.localScope[n].value), t.localScope[n] = {
                      value: "++" === o.operator ? a + 1 : a - 1,
                      valueset: !0,
                      node: o
                    }, void (!1 === o.prefix ? e(a) : e("++" === o.operator ? a + 1 : a - 1))) : void 0 !== t.globalScope[n] ? (a = Object(_chunks_languageUtils_js__WEBPACK_IMPORTED_MODULE_11__["c"])(t.globalScope[n].value), t.globalScope[n] = {
                      value: "++" === o.operator ? a + 1 : a - 1,
                      valueset: !0,
                      node: o
                    }, void (!1 === o.prefix ? e(a) : e("++" === o.operator ? a + 1 : a - 1))) : void r(new Error("Variable not recognised"));
                  });
                } catch (e) {
                  return Object(_core_promiseUtils_js__WEBPACK_IMPORTED_MODULE_0__["reject"])(e);
                }
              }(o, c);

            case "AssignmentExpression":
              return function (t, r) {
                return Object(_core_promiseUtils_js__WEBPACK_IMPORTED_MODULE_0__["create"])(function (e, o) {
                  var a = r.left;
                  if ("MemberExpression" === a.type) ce(t, r.right).then(function (c) {
                    try {
                      ce(t, a.object).then(function (i) {
                        try {
                          var s = null;
                          if (!0 === a.computed) s = ce(t, a.property);else {
                            if ("Identifier" !== a.property.type) throw new Error("Expected computed or identifier for assignemnt target");
                            s = Object(_core_promiseUtils_js__WEBPACK_IMPORTED_MODULE_0__["resolve"])(a.property.name);
                          }
                          s.then(function (t) {
                            try {
                              if (Object(_chunks_languageUtils_js__WEBPACK_IMPORTED_MODULE_11__["h"])(i)) {
                                if (!Object(_chunks_languageUtils_js__WEBPACK_IMPORTED_MODULE_11__["a"])(t)) throw new Error("Invalid Parameter");
                                if (t < 0 && (t = i.length + t), t < 0 || t > i.length) throw new Error("Assignment outside of array bounds");

                                if (t === i.length) {
                                  if ("=" !== r.operator) throw new Error("Invalid Parameter");
                                  i[t] = pe(c, r.operator, i[t], r);
                                } else i[t] = pe(c, r.operator, i[t], r);
                              } else if (i instanceof _Dictionary_js__WEBPACK_IMPORTED_MODULE_12__["default"]) {
                                if (!1 === Object(_chunks_languageUtils_js__WEBPACK_IMPORTED_MODULE_11__["b"])(t)) throw new Error("Dictionary accessor must be a string");
                                if (!0 === i.hasField(t)) i.setField(t, pe(c, r.operator, i.field(t), r));else {
                                  if ("=" !== r.operator) throw new Error("Invalid Parameter");
                                  i.setField(t, pe(c, r.operator, null, r));
                                }
                              } else {
                                if (!(i instanceof _Feature_js__WEBPACK_IMPORTED_MODULE_16__["default"])) throw Object(_chunks_languageUtils_js__WEBPACK_IMPORTED_MODULE_11__["o"])(i) ? new Error("Array is Immutable") : new Error("Invalid Parameter");
                                if (!1 === Object(_chunks_languageUtils_js__WEBPACK_IMPORTED_MODULE_11__["b"])(t)) throw new Error("Feature accessor must be a string");
                                if (!0 === i.hasField(t)) i.setField(t, pe(c, r.operator, i.field(t), r));else {
                                  if ("=" !== r.operator) throw new Error("Invalid Parameter");
                                  i.setField(t, pe(c, r.operator, null, r));
                                }
                              }

                              e(_chunks_languageUtils_js__WEBPACK_IMPORTED_MODULE_11__["v"]);
                            } catch (e) {
                              o(e);
                            }
                          }, o);
                        } catch (e) {
                          o(e);
                        }
                      }, o);
                    } catch (e) {
                      o(e);
                    }
                  }, o);else {
                    var n = a.name.toLowerCase();
                    if (null !== t.localScope && void 0 !== t.localScope[n]) return void ce(t, r.right).then(function (a) {
                      try {
                        t.localScope[n] = {
                          value: pe(a, r.operator, t.localScope[n].value, r),
                          valueset: !0,
                          node: r.right
                        }, e(_chunks_languageUtils_js__WEBPACK_IMPORTED_MODULE_11__["v"]);
                      } catch (e) {
                        o(e);
                      }
                    }, o);
                    void 0 !== t.globalScope[n] ? ce(t, r.right).then(function (a) {
                      try {
                        t.globalScope[n] = {
                          value: pe(a, r.operator, t.globalScope[n].value, r),
                          valueset: !0,
                          node: r.right
                        }, e(_chunks_languageUtils_js__WEBPACK_IMPORTED_MODULE_11__["v"]);
                      } catch (e) {
                        o(e);
                      }
                    }, o) : o(new Error("Cannot assign undeclared variable"));
                  }
                });
              }(o, c);

            case "ForStatement":
              return function (t, n) {
                try {
                  return null !== n.init ? ce(t, n.init).then(function () {
                    return Object(_core_promiseUtils_js__WEBPACK_IMPORTED_MODULE_0__["create"])(function (e, r) {
                      se(t, n, {
                        testResult: !0,
                        lastAction: _chunks_languageUtils_js__WEBPACK_IMPORTED_MODULE_11__["v"]
                      }, function (t) {
                        e(t);
                      }, function (e) {
                        r(e);
                      }, 0);
                    });
                  }) : Object(_core_promiseUtils_js__WEBPACK_IMPORTED_MODULE_0__["create"])(function (e, r) {
                    se(t, n, {
                      testResult: !0,
                      lastAction: _chunks_languageUtils_js__WEBPACK_IMPORTED_MODULE_11__["v"]
                    }, function (t) {
                      e(t);
                    }, function (e) {
                      r(e);
                    }, 0);
                  });
                } catch (e) {
                  return Object(_core_promiseUtils_js__WEBPACK_IMPORTED_MODULE_0__["reject"])(e);
                }
              }(o, c);

            case "ForInStatement":
              return function (t, r) {
                return Object(_core_promiseUtils_js__WEBPACK_IMPORTED_MODULE_0__["create"])(function (e, o) {
                  ce(t, r.right).then(function (a) {
                    try {
                      var _c = null;
                      _c = "VariableDeclaration" === r.left.type ? ce(t, r.left) : Object(_core_promiseUtils_js__WEBPACK_IMPORTED_MODULE_0__["resolve"])(), _c.then(function () {
                        try {
                          var n = "";

                          if ("VariableDeclaration" === r.left.type) {
                            var _e2 = r.left.declarations[0].id;
                            "Identifier" === _e2.type && (n = _e2.name);
                          } else "Identifier" === r.left.type && (n = r.left.name);

                          if (!n) throw new Error(Object(_treeAnalysis_js__WEBPACK_IMPORTED_MODULE_17__["nodeErrorMessage"])(r, "RUNTIME", "INVALIDVARIABLE"));
                          n = n.toLowerCase();
                          var _c2 = null;
                          if (null !== t.localScope && void 0 !== t.localScope[n] && (_c2 = t.localScope[n]), null === _c2 && void 0 !== t.globalScope[n] && (_c2 = t.globalScope[n]), null === _c2) return void o(new Error(Object(_treeAnalysis_js__WEBPACK_IMPORTED_MODULE_17__["nodeErrorMessage"])(r, "RUNTIME", "VARIABLENOTDECLARED")));
                          Object(_chunks_languageUtils_js__WEBPACK_IMPORTED_MODULE_11__["h"])(a) || Object(_chunks_languageUtils_js__WEBPACK_IMPORTED_MODULE_11__["b"])(a) ? fe(t, r, a, {
                            reject: o,
                            resolve: e
                          }, _c2) : Object(_chunks_languageUtils_js__WEBPACK_IMPORTED_MODULE_11__["o"])(a) ? function (e, t, r, n, o, a) {
                            try {
                              if (void 0 === a && (a = "i"), 0 === r.length) return void n.resolve(_chunks_languageUtils_js__WEBPACK_IMPORTED_MODULE_11__["v"]);
                              ue(e, t, r, o, 0, a, function (e) {
                                n.resolve(e);
                              }, function (e) {
                                n.reject(e);
                              }, 0);
                            } catch (e) {
                              n.reject(e);
                            }
                          }(t, r, a, {
                            reject: o,
                            resolve: e
                          }, _c2) : a instanceof _Dictionary_js__WEBPACK_IMPORTED_MODULE_12__["default"] || a instanceof _Feature_js__WEBPACK_IMPORTED_MODULE_16__["default"] ? function (e, t, r, n, o) {
                            try {
                              fe(e, t, r.keys(), n, o, "k");
                            } catch (e) {
                              n.reject(e);
                            }
                          }(t, r, a, {
                            reject: o,
                            resolve: e
                          }, _c2) : Object(_chunks_languageUtils_js__WEBPACK_IMPORTED_MODULE_11__["z"])(a) ? he(a.iterator(t.abortSignal), t, r, a, _c2, function (t) {
                            e(t);
                          }, function (e) {
                            o(e);
                          }, 0) : fe(t, r, [], {
                            reject: o,
                            resolve: e
                          }, _c2);
                        } catch (e) {
                          o(e);
                        }
                      }, o);
                    } catch (e) {
                      o(e);
                    }
                  }, o);
                });
              }(o, c);

            case "BreakStatement":
              return Object(_core_promiseUtils_js__WEBPACK_IMPORTED_MODULE_0__["resolve"])(_chunks_languageUtils_js__WEBPACK_IMPORTED_MODULE_11__["x"]);

            case "EmptyStatement":
              return Object(_core_promiseUtils_js__WEBPACK_IMPORTED_MODULE_0__["resolve"])(_chunks_languageUtils_js__WEBPACK_IMPORTED_MODULE_11__["v"]);

            case "ContinueStatement":
              return Object(_core_promiseUtils_js__WEBPACK_IMPORTED_MODULE_0__["resolve"])(_chunks_languageUtils_js__WEBPACK_IMPORTED_MODULE_11__["y"]);

            case "TemplateElement":
              return function (e, t) {
                return Object(_core_promiseUtils_js__WEBPACK_IMPORTED_MODULE_0__["resolve"])(t.value ? t.value.cooked : "");
              }(0, c);

            case "TemplateLiteral":
              return function (t, r) {
                return Object(_core_promiseUtils_js__WEBPACK_IMPORTED_MODULE_0__["create"])(function (e) {
                  var n = [];
                  Object(_featureset_support_shared_js__WEBPACK_IMPORTED_MODULE_15__["reduceArrayWithPromises"])(r.expressions, function (e, r, o, a) {
                    return ce(t, r).then(function (e) {
                      n[o] = Object(_chunks_languageUtils_js__WEBPACK_IMPORTED_MODULE_11__["e"])(e);
                    });
                  }).then(function () {
                    var t = "",
                        o = 0;

                    var _iterator = _createForOfIteratorHelper(r.quasis),
                        _step;

                    try {
                      for (_iterator.s(); !(_step = _iterator.n()).done;) {
                        var _e3 = _step.value;

                        if (t += _e3.value ? _e3.value.cooked : "", !1 === _e3.tail) {
                          t += n[o] ? n[o] : "", o++;
                        }
                      }
                    } catch (err) {
                      _iterator.e(err);
                    } finally {
                      _iterator.f();
                    }

                    e(t);
                  });
                });
              }(o, c);

            case "Identifier":
              return ye(o, c);

            case "MemberExpression":
              return function (t, o) {
                try {
                  return ce(t, o.object).then(function (c) {
                    try {
                      return null === c ? Object(_core_promiseUtils_js__WEBPACK_IMPORTED_MODULE_0__["reject"])(new Error(Object(_treeAnalysis_js__WEBPACK_IMPORTED_MODULE_17__["nodeErrorMessage"])(o, "RUNTIME", "NOTFOUND"))) : !1 === o.computed ? "Identifier" === o.property.type ? c instanceof _Dictionary_js__WEBPACK_IMPORTED_MODULE_12__["default"] || c instanceof _Feature_js__WEBPACK_IMPORTED_MODULE_16__["default"] ? Object(_core_promiseUtils_js__WEBPACK_IMPORTED_MODULE_0__["resolve"])(c.field(o.property.name)) : c instanceof _geometry_Geometry_js__WEBPACK_IMPORTED_MODULE_2__["default"] ? Object(_core_promiseUtils_js__WEBPACK_IMPORTED_MODULE_0__["resolve"])(Ee(c, o.property.name, t, o)) : Object(_core_promiseUtils_js__WEBPACK_IMPORTED_MODULE_0__["reject"])(new Error(Object(_treeAnalysis_js__WEBPACK_IMPORTED_MODULE_17__["nodeErrorMessage"])(o, "RUNTIME", "INVALIDTYPE"))) : Object(_core_promiseUtils_js__WEBPACK_IMPORTED_MODULE_0__["reject"])(new Error(Object(_treeAnalysis_js__WEBPACK_IMPORTED_MODULE_17__["nodeErrorMessage"])(o, "RUNTIME", "INVALIDTYPE"))) : ce(t, o.property).then(function (r) {
                        return Object(_core_promiseUtils_js__WEBPACK_IMPORTED_MODULE_0__["create"])(function (e, n) {
                          if (c instanceof _Dictionary_js__WEBPACK_IMPORTED_MODULE_12__["default"] || c instanceof _Feature_js__WEBPACK_IMPORTED_MODULE_16__["default"]) Object(_chunks_languageUtils_js__WEBPACK_IMPORTED_MODULE_11__["b"])(r) ? e(c.field(r)) : n(new Error(Object(_treeAnalysis_js__WEBPACK_IMPORTED_MODULE_17__["nodeErrorMessage"])(o, "RUNTIME", "INVALIDTYPE")));else if (c instanceof _geometry_Geometry_js__WEBPACK_IMPORTED_MODULE_2__["default"]) Object(_chunks_languageUtils_js__WEBPACK_IMPORTED_MODULE_11__["b"])(r) ? e(Ee(c, r, t, o)) : n(new Error(Object(_treeAnalysis_js__WEBPACK_IMPORTED_MODULE_17__["nodeErrorMessage"])(o, "RUNTIME", "INVALIDTYPE")));else if (Object(_chunks_languageUtils_js__WEBPACK_IMPORTED_MODULE_11__["h"])(c)) {
                            if (Object(_chunks_languageUtils_js__WEBPACK_IMPORTED_MODULE_11__["a"])(r) && isFinite(r) && Math.floor(r) === r) {
                              if (r < 0 && (r = c.length + r), r >= c.length || r < 0) throw new Error(Object(_treeAnalysis_js__WEBPACK_IMPORTED_MODULE_17__["nodeErrorMessage"])(o, "RUNTIME", "OUTOFBOUNDS"));
                              e(c[r]);
                            } else n(new Error(Object(_treeAnalysis_js__WEBPACK_IMPORTED_MODULE_17__["nodeErrorMessage"])(o, "RUNTIME", "INVALIDTYPE")));
                          } else if (Object(_chunks_languageUtils_js__WEBPACK_IMPORTED_MODULE_11__["o"])(c)) {
                            if (Object(_chunks_languageUtils_js__WEBPACK_IMPORTED_MODULE_11__["a"])(r) && isFinite(r) && Math.floor(r) === r) {
                              if (r < 0 && (r = c.length() + r), r >= c.length() || r < 0) throw new Error(Object(_treeAnalysis_js__WEBPACK_IMPORTED_MODULE_17__["nodeErrorMessage"])(o, "RUNTIME", "OUTOFBOUNDS"));
                              e(c.get(r));
                            } else n(new Error(Object(_treeAnalysis_js__WEBPACK_IMPORTED_MODULE_17__["nodeErrorMessage"])(o, "RUNTIME", "INVALIDTYPE")));
                          } else if (Object(_chunks_languageUtils_js__WEBPACK_IMPORTED_MODULE_11__["b"])(c)) {
                            if (Object(_chunks_languageUtils_js__WEBPACK_IMPORTED_MODULE_11__["a"])(r) && isFinite(r) && Math.floor(r) === r) {
                              if (r < 0 && (r = c.length + r), r >= c.length || r < 0) throw new Error(Object(_treeAnalysis_js__WEBPACK_IMPORTED_MODULE_17__["nodeErrorMessage"])(o, "RUNTIME", "OUTOFBOUNDS"));
                              e(c[r]);
                            } else n(new Error(Object(_treeAnalysis_js__WEBPACK_IMPORTED_MODULE_17__["nodeErrorMessage"])(o, "RUNTIME", "INVALIDTYPE")));
                          } else n(new Error(Object(_treeAnalysis_js__WEBPACK_IMPORTED_MODULE_17__["nodeErrorMessage"])(o, "RUNTIME", "INVALIDTYPE")));
                        });
                      });
                    } catch (e) {
                      return te(e);
                    }
                  });
                } catch (e) {
                  return te(e);
                }
              }(o, c);

            case "Literal":
              return re(c.value);

            case "CallExpression":
              return function (e, t) {
                try {
                  if ("Identifier" !== t.callee.type) return te(Object(_treeAnalysis_js__WEBPACK_IMPORTED_MODULE_17__["nodeErrorMessage"])(t, "RUNTIME", "ONLYNODESSUPPORTED"));

                  if (null !== e.localScope && void 0 !== e.localScope[t.callee.name.toLowerCase()]) {
                    var r = e.localScope[t.callee.name.toLowerCase()];
                    return r.value instanceof _chunks_languageUtils_js__WEBPACK_IMPORTED_MODULE_11__["N"] ? r.value.fn(e, t) : r.value instanceof _FunctionWrapper_js__WEBPACK_IMPORTED_MODULE_8__["default"] ? Oe(e, t, r.value.definition) : te(Object(_treeAnalysis_js__WEBPACK_IMPORTED_MODULE_17__["nodeErrorMessage"])(t, "RUNTIME", "NOTAFUNCTION"));
                  }

                  if (void 0 !== e.globalScope[t.callee.name.toLowerCase()]) {
                    var _r = e.globalScope[t.callee.name.toLowerCase()];
                    return _r.value instanceof _chunks_languageUtils_js__WEBPACK_IMPORTED_MODULE_11__["N"] ? _r.value.fn(e, t) : _r.value instanceof _FunctionWrapper_js__WEBPACK_IMPORTED_MODULE_8__["default"] ? Oe(e, t, _r.value.definition) : te(Object(_treeAnalysis_js__WEBPACK_IMPORTED_MODULE_17__["nodeErrorMessage"])(t, "RUNTIME", "NOTAFUNCTION"));
                  }

                  return te(Object(_treeAnalysis_js__WEBPACK_IMPORTED_MODULE_17__["nodeErrorMessage"])(t, "RUNTIME", "NOTFOUND"));
                } catch (e) {
                  return te(e);
                }
              }(o, c);

            case "UnaryExpression":
              return function (t, r) {
                try {
                  return ce(t, r.argument).then(function (t) {
                    return Object(_core_promiseUtils_js__WEBPACK_IMPORTED_MODULE_0__["create"])(function (e, n) {
                      Object(_chunks_languageUtils_js__WEBPACK_IMPORTED_MODULE_11__["i"])(t) && "!" === r.operator ? e(!t) : "-" === r.operator ? e(-1 * Object(_chunks_languageUtils_js__WEBPACK_IMPORTED_MODULE_11__["c"])(t)) : "+" === r.operator ? e(1 * Object(_chunks_languageUtils_js__WEBPACK_IMPORTED_MODULE_11__["c"])(t)) : "~" === r.operator ? e(~Object(_chunks_languageUtils_js__WEBPACK_IMPORTED_MODULE_11__["c"])(t)) : n(new Error(Object(_treeAnalysis_js__WEBPACK_IMPORTED_MODULE_17__["nodeErrorMessage"])(r, "RUNTIME", "NOTSUPPORTEDUNARYOPERATOR")));
                    });
                  });
                } catch (e) {
                  return te(e);
                }
              }(o, c);

            case "BinaryExpression":
              return function (r, n) {
                try {
                  return Object(_core_promiseUtils_js__WEBPACK_IMPORTED_MODULE_0__["all"])([ce(r, n.left), ce(r, n.right)]).then(function (t) {
                    return Object(_core_promiseUtils_js__WEBPACK_IMPORTED_MODULE_0__["create"])(function (e, r) {
                      var o = t[0],
                          a = t[1];

                      switch (n.operator) {
                        case "|":
                        case "<<":
                        case ">>":
                        case ">>>":
                        case "^":
                        case "&":
                          e(Object(_chunks_languageUtils_js__WEBPACK_IMPORTED_MODULE_11__["u"])(Object(_chunks_languageUtils_js__WEBPACK_IMPORTED_MODULE_11__["c"])(o), Object(_chunks_languageUtils_js__WEBPACK_IMPORTED_MODULE_11__["c"])(a), n.operator));

                        case "==":
                          e(Object(_chunks_languageUtils_js__WEBPACK_IMPORTED_MODULE_11__["n"])(o, a));
                          break;

                        case "!=":
                          e(!Object(_chunks_languageUtils_js__WEBPACK_IMPORTED_MODULE_11__["n"])(o, a));
                          break;

                        case "<":
                        case ">":
                        case "<=":
                        case ">=":
                          e(Object(_chunks_languageUtils_js__WEBPACK_IMPORTED_MODULE_11__["s"])(o, a, n.operator));
                          break;

                        case "+":
                          Object(_chunks_languageUtils_js__WEBPACK_IMPORTED_MODULE_11__["b"])(o) || Object(_chunks_languageUtils_js__WEBPACK_IMPORTED_MODULE_11__["b"])(a) ? e(Object(_chunks_languageUtils_js__WEBPACK_IMPORTED_MODULE_11__["e"])(o) + Object(_chunks_languageUtils_js__WEBPACK_IMPORTED_MODULE_11__["e"])(a)) : e(Object(_chunks_languageUtils_js__WEBPACK_IMPORTED_MODULE_11__["c"])(o) + Object(_chunks_languageUtils_js__WEBPACK_IMPORTED_MODULE_11__["c"])(a));
                          break;

                        case "-":
                          e(Object(_chunks_languageUtils_js__WEBPACK_IMPORTED_MODULE_11__["c"])(o) - Object(_chunks_languageUtils_js__WEBPACK_IMPORTED_MODULE_11__["c"])(a));
                          break;

                        case "*":
                          e(Object(_chunks_languageUtils_js__WEBPACK_IMPORTED_MODULE_11__["c"])(o) * Object(_chunks_languageUtils_js__WEBPACK_IMPORTED_MODULE_11__["c"])(a));
                          break;

                        case "/":
                          e(Object(_chunks_languageUtils_js__WEBPACK_IMPORTED_MODULE_11__["c"])(o) / Object(_chunks_languageUtils_js__WEBPACK_IMPORTED_MODULE_11__["c"])(a));
                          break;

                        case "%":
                          e(Object(_chunks_languageUtils_js__WEBPACK_IMPORTED_MODULE_11__["c"])(o) % Object(_chunks_languageUtils_js__WEBPACK_IMPORTED_MODULE_11__["c"])(a));
                          break;

                        default:
                          r(new Error(Object(_treeAnalysis_js__WEBPACK_IMPORTED_MODULE_17__["nodeErrorMessage"])(n, "RUNTIME", "OPERATORNOTRECOGNISED")));
                      }
                    });
                  });
                } catch (e) {
                  return te(e);
                }
              }(o, c);

            case "LogicalExpression":
              return function (t, r) {
                return Object(_core_promiseUtils_js__WEBPACK_IMPORTED_MODULE_0__["create"])(function (e, n) {
                  "AssignmentExpression" !== r.left.type && "UpdateExpression" !== r.left.type ? "AssignmentExpression" !== r.right.type && "UpdateExpression" !== r.right.type ? ce(t, r.left).then(function (o) {
                    try {
                      if (!Object(_chunks_languageUtils_js__WEBPACK_IMPORTED_MODULE_11__["i"])(o)) throw new Error(Object(_treeAnalysis_js__WEBPACK_IMPORTED_MODULE_17__["nodeErrorMessage"])(r, "RUNTIME", "ONLYBOOLEAN"));

                      switch (r.operator) {
                        case "||":
                          !0 === o ? e(o) : ce(t, r.right).then(function (t) {
                            try {
                              if (!Object(_chunks_languageUtils_js__WEBPACK_IMPORTED_MODULE_11__["i"])(t)) throw new Error(Object(_treeAnalysis_js__WEBPACK_IMPORTED_MODULE_17__["nodeErrorMessage"])(r, "RUNTIME", "ONLYORORAND"));
                              e(t);
                            } catch (e) {
                              n(e);
                            }
                          }, n);
                          break;

                        case "&&":
                          !1 === o ? e(o) : ce(t, r.right).then(function (t) {
                            try {
                              if (!Object(_chunks_languageUtils_js__WEBPACK_IMPORTED_MODULE_11__["i"])(t)) throw new Error(Object(_treeAnalysis_js__WEBPACK_IMPORTED_MODULE_17__["nodeErrorMessage"])(r, "RUNTIME", "ONLYORORAND"));
                              e(t);
                            } catch (e) {
                              n(e);
                            }
                          }, n);
                          break;

                        default:
                          throw new Error(Object(_treeAnalysis_js__WEBPACK_IMPORTED_MODULE_17__["nodeErrorMessage"])(r, "RUNTIME", "ONLYORORAND"));
                      }
                    } catch (e) {
                      n(e);
                    }
                  }, n) : n(new Error(Object(_treeAnalysis_js__WEBPACK_IMPORTED_MODULE_17__["nodeErrorMessage"])(r.right, "RUNTIME", "CANNOT_USE_ASSIGNMENT_IN_CONDITION"))) : n(new Error(Object(_treeAnalysis_js__WEBPACK_IMPORTED_MODULE_17__["nodeErrorMessage"])(r.left, "RUNTIME", "CANNOT_USE_ASSIGNMENT_IN_CONDITION")));
                });
              }(o, c);

            case "ConditionalExpression":
              return te(Object(_treeAnalysis_js__WEBPACK_IMPORTED_MODULE_17__["nodeErrorMessage"])(c, "RUNTIME", "NOTSUPPORTED"));

            case "ArrayExpression":
              return function (r, n) {
                try {
                  var _o2 = [];

                  for (var e = 0; e < n.elements.length; e++) {
                    _o2.push(ce(r, n.elements[e]));
                  }

                  return Object(_core_promiseUtils_js__WEBPACK_IMPORTED_MODULE_0__["all"])(_o2).then(function (t) {
                    return Object(_core_promiseUtils_js__WEBPACK_IMPORTED_MODULE_0__["create"])(function (e, r) {
                      for (var _e4 = 0; _e4 < t.length; _e4++) {
                        if (Object(_chunks_languageUtils_js__WEBPACK_IMPORTED_MODULE_11__["q"])(t[_e4])) return void r(new Error(Object(_treeAnalysis_js__WEBPACK_IMPORTED_MODULE_17__["nodeErrorMessage"])(n, "RUNTIME", "FUNCTIONCONTEXTILLEGAL")));
                        t[_e4] === _chunks_languageUtils_js__WEBPACK_IMPORTED_MODULE_11__["v"] && (t[_e4] = null);
                      }

                      e(t);
                    });
                  });
                } catch (e) {
                  return te(e);
                }
              }(o, c);

            case "ObjectExpression":
              return function (r, n) {
                try {
                  var _o3 = [];

                  for (var e = 0; e < n.properties.length; e++) {
                    _o3.push(ce(r, n.properties[e]));
                  }

                  return Object(_core_promiseUtils_js__WEBPACK_IMPORTED_MODULE_0__["all"])(_o3).then(function (t) {
                    return Object(_core_promiseUtils_js__WEBPACK_IMPORTED_MODULE_0__["create"])(function (e) {
                      var r = {};

                      for (var _e5 = 0; _e5 < t.length; _e5++) {
                        var _n = t[_e5];
                        if (Object(_chunks_languageUtils_js__WEBPACK_IMPORTED_MODULE_11__["q"])(_n.value)) throw new Error("Illegal Argument");
                        if (!1 === Object(_chunks_languageUtils_js__WEBPACK_IMPORTED_MODULE_11__["b"])(_n.key)) throw new Error("Illegal Argument");
                        _n.value === _chunks_languageUtils_js__WEBPACK_IMPORTED_MODULE_11__["v"] ? r[_n.key.toString()] = null : r[_n.key.toString()] = _n.value;
                      }

                      var n = new _Dictionary_js__WEBPACK_IMPORTED_MODULE_12__["default"](r);
                      n.immutable = !1, e(n);
                    });
                  });
                } catch (e) {
                  return te(e);
                }
              }(o, c);

            case "Property":
              return function (t, n) {
                try {
                  return ce(t, n.value).then(function (r) {
                    return Object(_core_promiseUtils_js__WEBPACK_IMPORTED_MODULE_0__["create"])(function (e) {
                      "Identifier" === n.key.type ? e({
                        key: n.key.name,
                        value: r
                      }) : ce(t, n.key).then(function (t) {
                        e({
                          key: t,
                          value: r
                        });
                      });
                    });
                  });
                } catch (e) {
                  return Object(_core_promiseUtils_js__WEBPACK_IMPORTED_MODULE_0__["reject"])(e);
                }
              }(o, c);

            default:
              return te(Object(_treeAnalysis_js__WEBPACK_IMPORTED_MODULE_17__["nodeErrorMessage"])(c, "RUNTIME", "UNREOGNISED"));
          }
        } catch (e) {
          return te(e);
        }
      }

      function ie(e, t, o) {
        try {
          return ce(e, t.body).then(function (a) {
            try {
              return o.lastAction = a, o.lastAction === _chunks_languageUtils_js__WEBPACK_IMPORTED_MODULE_11__["x"] || o.lastAction instanceof _chunks_languageUtils_js__WEBPACK_IMPORTED_MODULE_11__["R"] ? (o.testResult = !1, Object(_core_promiseUtils_js__WEBPACK_IMPORTED_MODULE_0__["resolve"])(o)) : null !== t.update ? ce(e, t.update).then(function () {
                return Object(_core_promiseUtils_js__WEBPACK_IMPORTED_MODULE_0__["resolve"])(o);
              }) : Object(_core_promiseUtils_js__WEBPACK_IMPORTED_MODULE_0__["resolve"])(o);
            } catch (e) {
              return Object(_core_promiseUtils_js__WEBPACK_IMPORTED_MODULE_0__["reject"])(e);
            }
          });
        } catch (e) {
          return Object(_core_promiseUtils_js__WEBPACK_IMPORTED_MODULE_0__["reject"])(e);
        }
      }

      function se(e, t, o, a, c, i) {
        try {
          (function (e, t, o) {
            try {
              return null !== t.test ? ce(e, t.test).then(function (a) {
                try {
                  return !0 === e.abortSignal.aborted ? Object(_core_promiseUtils_js__WEBPACK_IMPORTED_MODULE_0__["reject"])(new Error("Cancelled")) : (o.testResult = a, !1 === o.testResult ? Object(_core_promiseUtils_js__WEBPACK_IMPORTED_MODULE_0__["resolve"])(o) : !0 !== o.testResult ? Object(_core_promiseUtils_js__WEBPACK_IMPORTED_MODULE_0__["reject"])(new Error(Object(_treeAnalysis_js__WEBPACK_IMPORTED_MODULE_17__["nodeErrorMessage"])(t, "RUNTIME", "CANNOT_USE_NONBOOLEAN_IN_CONDITION"))) : ie(e, t, o));
                } catch (e) {
                  return Object(_core_promiseUtils_js__WEBPACK_IMPORTED_MODULE_0__["reject"])(e);
                }
              }) : ie(e, t, o);
            } catch (e) {
              return Object(_core_promiseUtils_js__WEBPACK_IMPORTED_MODULE_0__["reject"])(e);
            }
          })(e, t, o).then(function () {
            try {
              !0 === o.testResult ? ++i > 100 ? (i = 0, setTimeout(function () {
                se(e, t, o, a, c, i);
              }, 0)) : se(e, t, o, a, c, i) : o.lastAction instanceof _chunks_languageUtils_js__WEBPACK_IMPORTED_MODULE_11__["R"] ? a(o.lastAction) : a(_chunks_languageUtils_js__WEBPACK_IMPORTED_MODULE_11__["v"]);
            } catch (e) {
              c(e);
            }
          }, function (e) {
            c(e);
          });
        } catch (e) {
          c(e);
        }
      }

      function le(e, t, r, n, o, a, c, i, s, l) {
        try {
          if (n <= a) return void i(_chunks_languageUtils_js__WEBPACK_IMPORTED_MODULE_11__["v"]);
          o.value = "k" === c ? r[a] : a, ce(e, t.body).then(function (u) {
            try {
              u instanceof _chunks_languageUtils_js__WEBPACK_IMPORTED_MODULE_11__["R"] ? i(u) : u === _chunks_languageUtils_js__WEBPACK_IMPORTED_MODULE_11__["x"] ? i(_chunks_languageUtils_js__WEBPACK_IMPORTED_MODULE_11__["v"]) : ++l > 100 ? (l = 0, setTimeout(function () {
                le(e, t, r, n, o, a + 1, c, i, s, l);
              }, 0)) : le(e, t, r, n, o, a + 1, c, i, s, l);
            } catch (e) {
              s(e);
            }
          }, function (e) {
            s(e);
          });
        } catch (e) {
          s(e);
        }
      }

      function ue(e, t, r, n, o, a, c, i, s) {
        try {
          if (r.length() <= o) return void c(_chunks_languageUtils_js__WEBPACK_IMPORTED_MODULE_11__["v"]);
          n.value = "k" === a ? r.get(o) : o, ce(e, t.body).then(function (l) {
            l instanceof _chunks_languageUtils_js__WEBPACK_IMPORTED_MODULE_11__["R"] ? c(l) : l === _chunks_languageUtils_js__WEBPACK_IMPORTED_MODULE_11__["x"] ? c(_chunks_languageUtils_js__WEBPACK_IMPORTED_MODULE_11__["v"]) : ++s > 100 ? (s = 0, setTimeout(function () {
              ue(e, t, r, n, o + 1, a, c, i, s);
            }, 0)) : ue(e, t, r, n, o + 1, a, c, i, s);
          }, function (e) {
            i(e);
          });
        } catch (e) {
          i(e);
        }
      }

      function fe(e, t, r, n, o, a) {
        try {
          if (void 0 === a && (a = "i"), 0 === r.length) return void n.resolve(_chunks_languageUtils_js__WEBPACK_IMPORTED_MODULE_11__["v"]);
          le(e, t, r, r.length, o, 0, a, function (e) {
            n.resolve(e);
          }, function (e) {
            n.reject(e);
          }, 0);
        } catch (e) {
          n.reject(e);
        }
      }

      function he(e, t, r, n, o, a, c, i) {
        try {
          e.next().then(function (s) {
            try {
              if (null === s) a(_chunks_languageUtils_js__WEBPACK_IMPORTED_MODULE_11__["v"]);else {
                var l = _Feature_js__WEBPACK_IMPORTED_MODULE_16__["default"].createFromGraphicLikeObject(s.geometry, s.attributes, n);

                l._underlyingGraphic = s, o.value = l;
                ce(t, r.body).then(function (s) {
                  try {
                    s === _chunks_languageUtils_js__WEBPACK_IMPORTED_MODULE_11__["x"] ? a(_chunks_languageUtils_js__WEBPACK_IMPORTED_MODULE_11__["v"]) : s instanceof _chunks_languageUtils_js__WEBPACK_IMPORTED_MODULE_11__["R"] ? a(s) : ++i > 100 ? (i = 0, setTimeout(function () {
                      he(e, t, r, n, o, a, c, i);
                    }, 0)) : he(e, t, r, n, o, a, c, i);
                  } catch (e) {
                    c(e);
                  }
                }, function (e) {
                  c(e);
                });
              }
            } catch (e) {
              c(e);
            }
          }, function (e) {
            c(e);
          });
        } catch (e) {
          c(e);
        }
      }

      function pe(e, t, r, n) {
        switch (t) {
          case "=":
            return e === _chunks_languageUtils_js__WEBPACK_IMPORTED_MODULE_11__["v"] ? null : e;

          case "/=":
            return Object(_chunks_languageUtils_js__WEBPACK_IMPORTED_MODULE_11__["c"])(r) / Object(_chunks_languageUtils_js__WEBPACK_IMPORTED_MODULE_11__["c"])(e);

          case "*=":
            return Object(_chunks_languageUtils_js__WEBPACK_IMPORTED_MODULE_11__["c"])(r) * Object(_chunks_languageUtils_js__WEBPACK_IMPORTED_MODULE_11__["c"])(e);

          case "-=":
            return Object(_chunks_languageUtils_js__WEBPACK_IMPORTED_MODULE_11__["c"])(r) - Object(_chunks_languageUtils_js__WEBPACK_IMPORTED_MODULE_11__["c"])(e);

          case "+=":
            return Object(_chunks_languageUtils_js__WEBPACK_IMPORTED_MODULE_11__["b"])(r) || Object(_chunks_languageUtils_js__WEBPACK_IMPORTED_MODULE_11__["b"])(e) ? Object(_chunks_languageUtils_js__WEBPACK_IMPORTED_MODULE_11__["e"])(r) + Object(_chunks_languageUtils_js__WEBPACK_IMPORTED_MODULE_11__["e"])(e) : Object(_chunks_languageUtils_js__WEBPACK_IMPORTED_MODULE_11__["c"])(r) + Object(_chunks_languageUtils_js__WEBPACK_IMPORTED_MODULE_11__["c"])(e);

          case "%=":
            return Object(_chunks_languageUtils_js__WEBPACK_IMPORTED_MODULE_11__["c"])(r) % Object(_chunks_languageUtils_js__WEBPACK_IMPORTED_MODULE_11__["c"])(e);

          default:
            throw new Error(Object(_treeAnalysis_js__WEBPACK_IMPORTED_MODULE_17__["nodeErrorMessage"])(n, "RUNTIME", "OPERATORNOTRECOGNISED"));
        }
      }

      function de(t, r, o) {
        try {
          return o >= r.body.length ? Object(_core_promiseUtils_js__WEBPACK_IMPORTED_MODULE_0__["resolve"])(_chunks_languageUtils_js__WEBPACK_IMPORTED_MODULE_11__["v"]) : Object(_core_promiseUtils_js__WEBPACK_IMPORTED_MODULE_0__["create"])(function (e, n) {
            ce(t, r.body[o]).then(function (a) {
              try {
                a instanceof _chunks_languageUtils_js__WEBPACK_IMPORTED_MODULE_11__["R"] || a === _chunks_languageUtils_js__WEBPACK_IMPORTED_MODULE_11__["x"] || a === _chunks_languageUtils_js__WEBPACK_IMPORTED_MODULE_11__["y"] || o === r.body.length - 1 ? e(a) : de(t, r, o + 1).then(e, n);
              } catch (e) {
                n(e);
              }
            }, n);
          });
        } catch (e) {
          return te(e);
        }
      }

      function me(t, r, n) {
        return Object(_core_promiseUtils_js__WEBPACK_IMPORTED_MODULE_0__["create"])(function (e, o) {
          n >= r.declarations.length ? e(_chunks_languageUtils_js__WEBPACK_IMPORTED_MODULE_11__["v"]) : ce(t, r.declarations[n]).then(function () {
            n === r.declarations.length - 1 ? e(_chunks_languageUtils_js__WEBPACK_IMPORTED_MODULE_11__["v"]) : me(t, r, n + 1).then(function () {
              e(_chunks_languageUtils_js__WEBPACK_IMPORTED_MODULE_11__["v"]);
            }, o);
          }, o);
        });
      }

      var ge = 0;

      function Ee(e, t, r, n) {
        var o;

        switch (t = t.toLowerCase()) {
          case "hasz":
            {
              var _t = e.hasZ;
              return void 0 !== _t && _t;
            }

          case "hasm":
            {
              var _t2 = e.hasM;
              return void 0 !== _t2 && _t2;
            }

          case "spatialreference":
            {
              var _t3 = e.spatialReference._arcadeCacheId;

              if (void 0 === _t3) {
                var _r3 = !0;

                Object.freeze && Object.isFrozen(e.spatialReference) && (_r3 = !1), _r3 && (ge++, e.spatialReference._arcadeCacheId = ge, _t3 = ge);
              }

              var _r2 = new _Dictionary_js__WEBPACK_IMPORTED_MODULE_12__["default"]({
                wkt: e.spatialReference.wkt,
                wkid: e.spatialReference.wkid
              });

              return void 0 !== _t3 && (_r2._arcadeCacheId = "SPREF" + _t3.toString()), _r2;
            }
        }

        switch (e.type) {
          case "extent":
            switch (t) {
              case "xmin":
              case "xmax":
              case "ymin":
              case "ymax":
              case "zmin":
              case "zmax":
              case "mmin":
              case "mmax":
                {
                  var _r4 = e[t];
                  return void 0 !== _r4 ? _r4 : null;
                }

              case "type":
                return "Extent";
            }

            break;

          case "polygon":
            switch (t) {
              case "rings":
                o = e.cache._arcadeCacheId, void 0 === o && (ge++, o = ge, e.cache._arcadeCacheId = o);
                return new _ImmutablePathArray_js__WEBPACK_IMPORTED_MODULE_10__["default"](e.rings, e.spatialReference, !0 === e.hasZ, !0 === e.hasM, o);

              case "type":
                return "Polygon";
            }

            break;

          case "point":
            switch (t) {
              case "x":
              case "y":
              case "z":
              case "m":
                return void 0 !== e[t] ? e[t] : null;

              case "type":
                return "Point";
            }

            break;

          case "polyline":
            switch (t) {
              case "paths":
                o = e.cache._arcadeCacheId, void 0 === o && (ge++, o = ge, e.cache._arcadeCacheId = o);
                return new _ImmutablePathArray_js__WEBPACK_IMPORTED_MODULE_10__["default"](e.paths, e.spatialReference, !0 === e.hasZ, !0 === e.hasM, o);

              case "type":
                return "Polyline";
            }

            break;

          case "multipoint":
            switch (t) {
              case "points":
                o = e.cache._arcadeCacheId, void 0 === o && (ge++, o = ge, e.cache._arcadeCacheId = o);
                return new _ImmutablePointArray_js__WEBPACK_IMPORTED_MODULE_9__["default"](e.points, e.spatialReference, !0 === e.hasZ, !0 === e.hasM, o, 1);

              case "type":
                return "Multipoint";
            }

        }

        throw new Error(Object(_treeAnalysis_js__WEBPACK_IMPORTED_MODULE_17__["nodeErrorMessage"])(n, "RUNTIME", "PROPERTYNOTFOUND"));
      }

      function ye(t, r) {
        return Object(_core_promiseUtils_js__WEBPACK_IMPORTED_MODULE_0__["create"])(function (e, n) {
          var o = r.name.toLowerCase();
          if (null === t.localScope || void 0 === t.localScope[o]) {
            if (void 0 === t.globalScope[o]) n(new Error(Object(_treeAnalysis_js__WEBPACK_IMPORTED_MODULE_17__["nodeErrorMessage"])(r, "RUNTIME", "VARIABLENOTFOUND")));else {
              var _r5 = t.globalScope[o];
              !0 === _r5.valueset ? e(_r5.value) : null !== _r5.d ? _r5.d.then(e, n) : (_r5.d = ce(t, _r5.node), _r5.d.then(function (t) {
                try {
                  _r5.value = t, _r5.valueset = !0, e(t);
                } catch (e) {
                  n(e);
                }
              }, n));
            }
          } else {
            var _r6 = t.localScope[o];
            !0 === _r6.valueset ? e(_r6.value) : null !== _r6.d ? _r6.d.then(e, n) : (_r6.d = ce(t, _r6.node), _r6.d.then(function (t) {
              try {
                _r6.value = t, _r6.valueset = !0, e(t);
              } catch (e) {
                n(e);
              }
            }, n));
          }
        });
      }

      var we = {};

      function ve(e) {
        return null === e ? "" : Object(_chunks_languageUtils_js__WEBPACK_IMPORTED_MODULE_11__["h"])(e) || Object(_chunks_languageUtils_js__WEBPACK_IMPORTED_MODULE_11__["o"])(e) ? "Array" : Object(_chunks_languageUtils_js__WEBPACK_IMPORTED_MODULE_11__["f"])(e) ? "Date" : Object(_chunks_languageUtils_js__WEBPACK_IMPORTED_MODULE_11__["b"])(e) ? "String" : Object(_chunks_languageUtils_js__WEBPACK_IMPORTED_MODULE_11__["i"])(e) ? "Boolean" : Object(_chunks_languageUtils_js__WEBPACK_IMPORTED_MODULE_11__["a"])(e) ? "Number" : e instanceof _Attachment_js__WEBPACK_IMPORTED_MODULE_14__["default"] ? "Attachment" : e instanceof _ArcadePortal_js__WEBPACK_IMPORTED_MODULE_13__["default"] ? "Portal" : e instanceof _Dictionary_js__WEBPACK_IMPORTED_MODULE_12__["default"] ? "Dictionary" : e instanceof _Feature_js__WEBPACK_IMPORTED_MODULE_16__["default"] ? "Feature" : e instanceof _geometry_Point_js__WEBPACK_IMPORTED_MODULE_3__["default"] ? "Point" : e instanceof _geometry_Polygon_js__WEBPACK_IMPORTED_MODULE_6__["default"] ? "Polygon" : e instanceof _geometry_Polyline_js__WEBPACK_IMPORTED_MODULE_7__["default"] ? "Polyline" : e instanceof _geometry_Multipoint_js__WEBPACK_IMPORTED_MODULE_5__["default"] ? "Multipoint" : e instanceof _geometry_Extent_js__WEBPACK_IMPORTED_MODULE_4__["default"] ? "Extent" : Object(_chunks_languageUtils_js__WEBPACK_IMPORTED_MODULE_11__["q"])(e) ? "Function" : Object(_chunks_languageUtils_js__WEBPACK_IMPORTED_MODULE_11__["z"])(e) ? "FeatureSet" : Object(_chunks_languageUtils_js__WEBPACK_IMPORTED_MODULE_11__["A"])(e) ? "FeatureSetCollection" : e === _chunks_languageUtils_js__WEBPACK_IMPORTED_MODULE_11__["v"] ? "" : "number" == typeof e && isNaN(e) ? "Number" : "Unrecognised Type";
      }

      function Ne(t, r, n, o) {
        return Object(_core_promiseUtils_js__WEBPACK_IMPORTED_MODULE_0__["create"])(function (e, a) {
          ce(t, r.arguments[n]).then(function (c) {
            try {
              if (Object(_chunks_languageUtils_js__WEBPACK_IMPORTED_MODULE_11__["n"])(c, o)) return void ce(t, r.arguments[n + 1]).then(e, a);
              {
                var _c3 = r.arguments.length - n;

                return 1 === _c3 ? void ce(t, r.arguments[n]).then(e, a) : (2 === _c3 && e(null), 3 === _c3 ? void ce(t, r.arguments[n + 2]).then(e, a) : void Ne(t, r, n + 2, o).then(e, a));
              }
            } catch (e) {
              a(e);
            }
          }, a);
        });
      }

      function Ie(t, r, n, o) {
        return Object(_core_promiseUtils_js__WEBPACK_IMPORTED_MODULE_0__["create"])(function (e, a) {
          if (!0 === o) ce(t, r.arguments[n + 1]).then(e, a);else {
            3 === r.arguments.length - n ? ce(t, r.arguments[n + 2]).then(e, a) : ce(t, r.arguments[n + 2]).then(function (o) {
              try {
                if (!1 === Object(_chunks_languageUtils_js__WEBPACK_IMPORTED_MODULE_11__["i"])(o)) return void a(new Error("WHEN needs boolean test conditions"));
                Ie(t, r, n + 2, o).then(e, a);
              } catch (e) {
                a(e);
              }
            });
          }
        });
      }

      function be(r, o) {
        try {
          var a = r.length,
              c = Math.floor(a / 2);
          return 0 === a ? Object(_core_promiseUtils_js__WEBPACK_IMPORTED_MODULE_0__["resolve"])([]) : 1 === a ? Object(_core_promiseUtils_js__WEBPACK_IMPORTED_MODULE_0__["resolve"])([r[0]]) : Object(_core_promiseUtils_js__WEBPACK_IMPORTED_MODULE_0__["create"])(function (e, n) {
            var i = [be(r.slice(0, c), o), be(r.slice(c, a), o)];
            Object(_core_promiseUtils_js__WEBPACK_IMPORTED_MODULE_0__["all"])(i).then(function (t) {
              try {
                Te(t[0], t[1], o, []).then(e, n);
              } catch (e) {
                n(e);
              }
            }, n);
          });
        } catch (e) {
          return te(e);
        }
      }

      function Te(t, r, n, o) {
        return Object(_core_promiseUtils_js__WEBPACK_IMPORTED_MODULE_0__["create"])(function (e, a) {
          var c = o;
          t.length > 0 || r.length > 0 ? t.length > 0 && r.length > 0 ? n(t[0], r[0]).then(function (i) {
            try {
              isNaN(i) && (i = 1), i <= 0 ? (c.push(t[0]), t = t.slice(1)) : (c.push(r[0]), r = r.slice(1)), Te(t, r, n, o).then(e, a);
            } catch (e) {
              a(e);
            }
          }, a) : t.length > 0 ? (c.push(t[0]), Te(t = t.slice(1), r, n, o).then(e, a)) : r.length > 0 && (c.push(r[0]), r = r.slice(1), Te(t, r, n, o).then(e, a)) : e(o);
        });
      }

      function Se(e, t) {
        var r = e.length,
            n = Math.floor(r / 2);
        return t || (t = function t(e, _t4) {
          return e < _t4 ? -1 : e === _t4 ? 0 : 1;
        }), 0 === r ? [] : 1 === r ? [e[0]] : function (e, t, r) {
          var n = [];

          for (; e.length > 0 || t.length > 0;) {
            if (e.length > 0 && t.length > 0) {
              var o = r(e[0], t[0]);
              isNaN(o) && (o = 1), o <= 0 ? (n.push(e[0]), e = e.slice(1)) : (n.push(t[0]), t = t.slice(1));
            } else e.length > 0 ? (n.push(e[0]), e = e.slice(1)) : t.length > 0 && (n.push(t[0]), t = t.slice(1));
          }

          return n;
        }(Se(e.slice(0, n), t), Se(e.slice(n, r), t), t);
      }

      function Re(t, n, o) {
        try {
          var r = t.body;
          if (o.length !== t.params.length) return te(new Error("Invalid Parameter calls to function."));

          for (var e = 0; e < o.length; e++) {
            var _r7 = t.params[e];
            "Identifier" === _r7.type && (n.localScope[_r7.name.toLowerCase()] = {
              d: null,
              value: o[e],
              valueset: !0,
              node: null
            });
          }

          return ce(n, r).then(function (t) {
            return Object(_core_promiseUtils_js__WEBPACK_IMPORTED_MODULE_0__["create"])(function (e, r) {
              t instanceof _chunks_languageUtils_js__WEBPACK_IMPORTED_MODULE_11__["R"] ? e(t.value) : t !== _chunks_languageUtils_js__WEBPACK_IMPORTED_MODULE_11__["x"] ? t !== _chunks_languageUtils_js__WEBPACK_IMPORTED_MODULE_11__["y"] ? e(t instanceof _chunks_languageUtils_js__WEBPACK_IMPORTED_MODULE_11__["I"] ? t.value : t) : r(new Error("Cannot Continue from a Function")) : r(new Error("Cannot Break from a Function"));
            });
          });
        } catch (e) {
          return Object(_core_promiseUtils_js__WEBPACK_IMPORTED_MODULE_0__["reject"])(e);
        }
      }

      function Oe(e, t, r) {
        return ae(e, t, function (t, n, o) {
          var a = {
            spatialReference: e.spatialReference,
            services: e.services,
            console: e.console,
            lrucache: e.lrucache,
            localScope: {},
            abortSignal: e.abortSignal,
            globalScope: e.globalScope,
            depthCounter: e.depthCounter + 1
          };
          if (a.depthCounter > 64) throw new Error("Exceeded maximum function depth");
          return Re(r, a, o);
        });
      }

      function Ae(e) {
        return function () {
          var t = {
            abortSignal: e.context.abortSignal,
            spatialReference: e.context.spatialReference,
            console: e.context.console,
            lrucache: e.context.lrucache,
            services: e.context.services,
            localScope: {},
            globalScope: e.context.globalScope,
            depthCounter: e.context.depthCounter + 1
          };
          if (t.depthCounter > 64) throw new Error("Exceeded maximum function depth");
          return Re(e.definition, t, arguments);
        };
      }

      Object(_functions_array_js__WEBPACK_IMPORTED_MODULE_18__["registerFunctions"])(we, oe), Object(_functions_date_js__WEBPACK_IMPORTED_MODULE_19__["registerFunctions"])(we, oe), Object(_functions_string_js__WEBPACK_IMPORTED_MODULE_23__["registerFunctions"])(we, oe), Object(_functions_maths_js__WEBPACK_IMPORTED_MODULE_21__["registerFunctions"])(we, oe), Object(_functions_geometry_js__WEBPACK_IMPORTED_MODULE_20__["registerFunctions"])(we, oe), Object(_functions_stats_js__WEBPACK_IMPORTED_MODULE_22__["registerFunctions"])(we, oe), Object(_functions_geomasync_js__WEBPACK_IMPORTED_MODULE_24__["registerFunctions"])({
        functions: we,
        compiled: !1,
        signatures: null,
        failDefferred: null,
        evaluateIdentifier: null,
        arcadeCustomFunctionHandler: null,
        mode: "async",
        standardFunction: oe,
        standardFunctionAsync: ae
      }), we["typeof"] = function (e, t) {
        return oe(e, t, function (e, t, r) {
          Object(_chunks_languageUtils_js__WEBPACK_IMPORTED_MODULE_11__["p"])(r, 1, 1);
          var n = ve(r[0]);
          if ("Unrecognised Type" === n) throw new Error("Unrecognised Type");
          return n;
        });
      }, we.iif = function (r, n) {
        return Object(_core_promiseUtils_js__WEBPACK_IMPORTED_MODULE_0__["create"])(function (e, o) {
          Object(_chunks_languageUtils_js__WEBPACK_IMPORTED_MODULE_11__["p"])(null === n.arguments ? [] : n.arguments, 3, 3), ce(r, n.arguments[0]).then(function (a) {
            try {
              if (!1 === Object(_chunks_languageUtils_js__WEBPACK_IMPORTED_MODULE_11__["i"])(a)) return void o(new Error("IF Function must have a boolean test condition"));
              Object(_core_promiseUtils_js__WEBPACK_IMPORTED_MODULE_0__["all"])([ce(r, n.arguments[1]), ce(r, n.arguments[2])]).then(function (t) {
                e(a ? t[0] : t[1]);
              }, o);
            } catch (e) {
              o(e);
            }
          }, o);
        });
      }, we.decode = function (t, r) {
        return Object(_core_promiseUtils_js__WEBPACK_IMPORTED_MODULE_0__["create"])(function (e, n) {
          r.arguments.length < 2 ? n(new Error("Missing Parameters")) : 2 !== r.arguments.length ? (r.arguments.length - 1) % 2 != 0 ? ce(t, r.arguments[0]).then(function (o) {
            try {
              Ne(t, r, 1, o).then(e, n);
            } catch (e) {
              n(e);
            }
          }, n) : n(new Error("Must have a default value result.")) : ce(t, r.arguments[1]).then(e, n);
        });
      }, we.when = function (t, r) {
        try {
          return r.arguments.length < 3 ? te("Missing Parameters") : r.arguments.length % 2 == 0 ? te("Must have a default value result.") : ce(t, r.arguments[0]).then(function (n) {
            return Object(_core_promiseUtils_js__WEBPACK_IMPORTED_MODULE_0__["create"])(function (e, o) {
              if (!1 === Object(_chunks_languageUtils_js__WEBPACK_IMPORTED_MODULE_11__["i"])(n)) return void o(new Error("WHEN needs boolean test conditions"));
              Ie(t, r, 0, n).then(e, o);
            });
          });
        } catch (e) {
          return te(e);
        }
      }, we.sort = function (e, t) {
        return ae(e, t, function (e, t, r) {
          Object(_chunks_languageUtils_js__WEBPACK_IMPORTED_MODULE_11__["p"])(r, 1, 2);
          var o = r[0];
          if (Object(_chunks_languageUtils_js__WEBPACK_IMPORTED_MODULE_11__["o"])(o) && (o = o.toArray()), !1 === Object(_chunks_languageUtils_js__WEBPACK_IMPORTED_MODULE_11__["h"])(o)) return te(Error("Illegal Argument"));

          if (r.length > 1) {
            if (!1 === Object(_chunks_languageUtils_js__WEBPACK_IMPORTED_MODULE_11__["q"])(r[1])) return te(Error("Illegal Argument"));
            return be(o, Ae(r[1]));
          }

          {
            var _e6 = o;
            if (0 === _e6.length) return Object(_core_promiseUtils_js__WEBPACK_IMPORTED_MODULE_0__["resolve"])([]);
            var _t5 = {};

            for (var _r9 = 0; _r9 < _e6.length; _r9++) {
              var n = ve(_e6[_r9]);
              "" !== n && (_t5[n] = !0);
            }

            if (!0 === _t5.Array || !0 === _t5.Dictionary || !0 === _t5.Feature || !0 === _t5.Point || !0 === _t5.Polygon || !0 === _t5.Polyline || !0 === _t5.Multipoint || !0 === _t5.Extent || !0 === _t5.Function) return Object(_core_promiseUtils_js__WEBPACK_IMPORTED_MODULE_0__["resolve"])(_e6.slice(0));
            var _r8 = 0,
                a = "";

            for (var _e7 in _t5) {
              _r8++, a = _e7;
            }

            return _r8 > 1 || "String" === a ? _e6 = Se(_e6, function (e, t) {
              if (null == e || e === _chunks_languageUtils_js__WEBPACK_IMPORTED_MODULE_11__["v"]) return null == t || t === _chunks_languageUtils_js__WEBPACK_IMPORTED_MODULE_11__["v"] ? 0 : 1;
              if (null == t || t === _chunks_languageUtils_js__WEBPACK_IMPORTED_MODULE_11__["v"]) return -1;
              var r = Object(_chunks_languageUtils_js__WEBPACK_IMPORTED_MODULE_11__["e"])(e),
                  n = Object(_chunks_languageUtils_js__WEBPACK_IMPORTED_MODULE_11__["e"])(t);
              return r < n ? -1 : r === n ? 0 : 1;
            }) : "Number" === a ? _e6 = Se(_e6, function (e, t) {
              return e - t;
            }) : "Boolean" === a ? _e6 = Se(_e6, function (e, t) {
              return e === t ? 0 : t ? -1 : 1;
            }) : "Date" === a && (_e6 = Se(_e6, function (e, t) {
              return t - e;
            })), Object(_core_promiseUtils_js__WEBPACK_IMPORTED_MODULE_0__["resolve"])(_e6);
          }
        });
      };
      var Ue = {
        failDefferred: te,
        resolveDeffered: re,
        fixSpatialReference: _chunks_languageUtils_js__WEBPACK_IMPORTED_MODULE_11__["r"],
        parseArguments: ne,
        standardFunction: oe,
        standardFunctionAsync: ae,
        evaluateIdentifier: ye,
        arcadeCustomFunction: Ae
      };

      for (var e in we) {
        we[e] = {
          value: new _chunks_languageUtils_js__WEBPACK_IMPORTED_MODULE_11__["N"](we[e]),
          valueset: !0,
          node: null
        };
      }

      var Ce = function Ce() {};

      function Fe(e) {
        console.log(e);
      }

      (Ce.prototype = we).infinity = {
        value: Number.POSITIVE_INFINITY,
        valueset: !0,
        node: null
      }, Ce.prototype.pi = {
        value: Math.PI,
        valueset: !0,
        node: null
      };
      var Me = Ue;

      function xe(e) {
        var t = {
          mode: "async",
          compiled: !1,
          functions: {},
          signatures: [],
          standardFunction: oe,
          standardFunctionAsync: ae,
          failDefferred: te,
          evaluateIdentifier: ye,
          arcadeCustomFunctionHandler: Ae
        };

        for (var r = 0; r < e.length; r++) {
          e[r].registerFunctions(t);
        }

        for (var _e8 in t.functions) {
          we[_e8] = {
            value: new _chunks_languageUtils_js__WEBPACK_IMPORTED_MODULE_11__["N"](t.functions[_e8]),
            valueset: !0,
            node: null
          }, Ce.prototype[_e8] = we[_e8];
        }

        for (var _e9 = 0; _e9 < t.signatures.length; _e9++) {
          Object(_treeAnalysis_js__WEBPACK_IMPORTED_MODULE_17__["addFunctionDeclaration"])(t.signatures[_e9], "async");
        }
      }

      function Pe(t, r) {
        var n = r.spatialReference;
        null == n && (n = new _geometry_SpatialReference_js__WEBPACK_IMPORTED_MODULE_1__["default"]({
          wkid: 102100
        }));

        var a = function (e, t) {
          var r = new Ce();
          null == e && (e = {}), null == t && (t = {});
          var n = new _Dictionary_js__WEBPACK_IMPORTED_MODULE_12__["default"]({
            newline: "\n",
            tab: "\t",
            singlequote: "'",
            doublequote: '"',
            forwardslash: "/",
            backwardslash: "\\"
          });
          n.immutable = !1, r.textformatting = {
            value: n,
            valueset: !0,
            node: null
          };

          for (var _e10 in t) {
            r[_e10] = {
              value: new _chunks_languageUtils_js__WEBPACK_IMPORTED_MODULE_11__["N"](t[_e10]),
              "native": !0,
              valueset: !0,
              node: null
            };
          }

          for (var _t6 in e) {
            e[_t6] && "esri.Graphic" === e[_t6].declaredClass ? r[_t6] = {
              value: _Feature_js__WEBPACK_IMPORTED_MODULE_16__["default"].createFromGraphic(e[_t6]),
              valueset: !0,
              node: null
            } : r[_t6] = {
              value: e[_t6],
              valueset: !0,
              node: null
            };
          }

          return r;
        }(r.vars, r.customfunctions);

        return ce({
          spatialReference: n,
          services: r.services,
          abortSignal: void 0 === r.abortSignal || null === r.abortSignal ? {
            aborted: !1
          } : r.abortSignal,
          globalScope: a,
          console: r.console ? r.console : Fe,
          lrucache: r.lrucache,
          localScope: null,
          depthCounter: 1
        }, t.body[0].body).then(function (t) {
          return Object(_core_promiseUtils_js__WEBPACK_IMPORTED_MODULE_0__["create"])(function (e, r) {
            t instanceof _chunks_languageUtils_js__WEBPACK_IMPORTED_MODULE_11__["R"] && (t = t.value), t instanceof _chunks_languageUtils_js__WEBPACK_IMPORTED_MODULE_11__["I"] && (t = t.value), t === _chunks_languageUtils_js__WEBPACK_IMPORTED_MODULE_11__["v"] && (t = null), t !== _chunks_languageUtils_js__WEBPACK_IMPORTED_MODULE_11__["x"] ? t !== _chunks_languageUtils_js__WEBPACK_IMPORTED_MODULE_11__["y"] ? t instanceof _chunks_languageUtils_js__WEBPACK_IMPORTED_MODULE_11__["N"] || t instanceof _FunctionWrapper_js__WEBPACK_IMPORTED_MODULE_8__["default"] ? r(new Error("Cannot return FUNCTION")) : e(t) : r(new Error("Cannot return CONTINUE")) : r(new Error("Cannot return BREAK"));
          });
        });
      }

      function De(e, t) {
        return Object(_treeAnalysis_js__WEBPACK_IMPORTED_MODULE_17__["findFieldLiterals"])(e);
      }

      function je(e, t) {
        return Object(_treeAnalysis_js__WEBPACK_IMPORTED_MODULE_17__["validateScript"])(e, t, "full");
      }

      function Le(e, t) {
        return Object(_treeAnalysis_js__WEBPACK_IMPORTED_MODULE_17__["referencesMember"])(e, t);
      }

      function ke(e, t) {
        return Object(_treeAnalysis_js__WEBPACK_IMPORTED_MODULE_17__["referencesFunction"])(e, t);
      }

      function _e(e) {
        return Object(_treeAnalysis_js__WEBPACK_IMPORTED_MODULE_17__["findFunctionCalls"])(e);
      }
      /***/

    }
  }]);
})();
//# sourceMappingURL=arcade-arcadeAsyncRuntime-js-es5.js.map