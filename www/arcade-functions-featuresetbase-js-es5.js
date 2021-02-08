(function () {
  function _createForOfIteratorHelper(o, allowArrayLike) { var it; if (typeof Symbol === "undefined" || o[Symbol.iterator] == null) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e22) { throw _e22; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = o[Symbol.iterator](); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e23) { didErr = true; err = _e23; }, f: function f() { try { if (!normalCompletion && it["return"] != null) it["return"](); } finally { if (didErr) throw err; } } }; }

  function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

  function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["arcade-functions-featuresetbase-js"], {
    /***/
    "CBYW":
    /*!**********************************************************************!*\
      !*** ./node_modules/@arcgis/core/arcade/functions/featuresetbase.js ***!
      \**********************************************************************/

    /*! exports provided: registerFunctions */

    /***/
    function CBYW(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "registerFunctions", function () {
        return _;
      });
      /* harmony import */


      var _core_promiseUtils_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ../../core/promiseUtils.js */
      "9MzC");
      /* harmony import */


      var _chunks_languageUtils_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ../../chunks/languageUtils.js */
      "idrm");
      /* harmony import */


      var _Dictionary_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ../Dictionary.js */
      "D5C5");
      /* harmony import */


      var _ArcadePortal_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ../ArcadePortal.js */
      "Xfxc");
      /* harmony import */


      var _layers_support_Field_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ../../layers/support/Field.js */
      "ofM5");
      /* harmony import */


      var _featureset_support_shared_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ../featureset/support/shared.js */
      "hTzF");
      /* harmony import */


      var _Feature_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ../Feature.js */
      "Xrjs");
      /* harmony import */


      var _fieldStats_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! ./fieldStats.js */
      "kqd7");
      /* harmony import */


      var _featureSetCollection_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! ../featureSetCollection.js */
      "lNzE");
      /* harmony import */


      var _core_sql_WhereClause_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! ../../core/sql/WhereClause.js */
      "ZqIb");
      /* harmony import */


      var _featureset_support_sqlUtils_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
      /*! ../featureset/support/sqlUtils.js */
      "B8fU");
      /* harmony import */


      var _featureset_actions_AttributeFilter_js__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
      /*! ../featureset/actions/AttributeFilter.js */
      "nC36");
      /* harmony import */


      var _featureset_actions_Adapted_js__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
      /*! ../featureset/actions/Adapted.js */
      "LK1Z");
      /* harmony import */


      var _featureset_support_OrderbyClause_js__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
      /*! ../featureset/support/OrderbyClause.js */
      "lq8Q");
      /* harmony import */


      var _featureset_actions_OrderBy_js__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(
      /*! ../featureset/actions/OrderBy.js */
      "Xbkg");
      /* harmony import */


      var _featureset_sources_Empty_js__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(
      /*! ../featureset/sources/Empty.js */
      "GN9X");
      /* harmony import */


      var _featureset_actions_Top_js__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(
      /*! ../featureset/actions/Top.js */
      "YP08");
      /* harmony import */


      var _layers_FeatureLayer_js__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(
      /*! ../../layers/FeatureLayer.js */
      "W9Wu");
      /* harmony import */


      var _featureset_sources_FeatureLayerMemory_js__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(
      /*! ../featureset/sources/FeatureLayerMemory.js */
      "OAJp");
      /* harmony import */


      var _featureSetUtils_js__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(
      /*! ../featureSetUtils.js */
      "4zW0");
      /*
      All material copyright ESRI, All Rights Reserved, unless otherwise specified.
      See https://js.arcgis.com/4.18/esri/copyright.txt for details.
      */


      function V(n, r, i) {
        var a = n.getVariables();

        if (a.length > 0) {
          var t = [];

          for (var e = 0; e < a.length; e++) {
            var _n = {
              name: a[e]
            };
            t.push(r.evaluateIdentifier(i, _n));
          }

          return Object(_core_promiseUtils_js__WEBPACK_IMPORTED_MODULE_0__["all"])(t).then(function (e) {
            var t = {};

            for (var _n2 = 0; _n2 < a.length; _n2++) {
              t[a[_n2]] = e[_n2];
            }

            return n.parameters = t, n;
          });
        }

        return Object(_core_promiseUtils_js__WEBPACK_IMPORTED_MODULE_0__["resolve"])(n);
      }

      function z(e, t) {
        var n = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : null;

        for (var _n3 in e) {
          if (_n3.toLowerCase() === t.toLowerCase()) return e[_n3];
        }

        return n;
      }

      function H(e) {
        if (null === e) return null;
        var t = {
          type: z(e, "type", ""),
          name: z(e, "name", "")
        };
        if ("range" === t.type) t.range = z(e, "range", []);else {
          t.codedValues = [];

          var _iterator = _createForOfIteratorHelper(z(e, "codedValues", [])),
              _step;

          try {
            for (_iterator.s(); !(_step = _iterator.n()).done;) {
              var n = _step.value;
              t.codedValues.push({
                name: z(n, "name", ""),
                code: z(n, "code", null)
              });
            }
          } catch (err) {
            _iterator.e(err);
          } finally {
            _iterator.f();
          }
        }
        return t;
      }

      function U(e) {
        if (null === e) return null;
        var t = {},
            n = z(e, "wkt", null);
        null !== n && (t.wkt = n);
        var r = z(e, "wkid", null);
        return null !== r && (t.wkid = r), t;
      }

      function W(e) {
        if (null === e) return null;
        var t = {
          hasZ: z(e, "hasz", !1),
          hasM: z(e, "hasm", !1)
        },
            n = z(e, "spatialreference", null);
        n && (t.spatialReference = U(n));
        var r = z(e, "x", null);
        if (null !== r) return t.x = r, t.y = z(e, "y", null), t;
        var i = z(e, "rings", null);
        if (null !== i) return t.rings = i, t;
        var a = z(e, "paths", null);
        if (null !== a) return t.paths = a, t;
        var s = z(e, "points", null);
        if (null !== s) return t.points = s, t;

        for (var _i = 0, _arr = ["xmin", "xmax", "ymin", "ymax", "zmin", "zmax", "mmin", "mmax"]; _i < _arr.length; _i++) {
          var _n4 = _arr[_i];

          var _r = z(e, _n4, null);

          null !== _r && (t[_n4] = _r);
        }

        return t;
      }

      function _(_) {
        "async" === _.mode && (_.functions.getuser = function (e, t) {
          return _.standardFunctionAsync(e, t, function (t, s, l) {
            Object(_chunks_languageUtils_js__WEBPACK_IMPORTED_MODULE_1__["p"])(l, 1, 2);
            var o = Object(_chunks_languageUtils_js__WEBPACK_IMPORTED_MODULE_1__["C"])(l[1], ""),
                f = !0 === o;

            if (o = !0 === o || !1 === o ? "" : Object(_chunks_languageUtils_js__WEBPACK_IMPORTED_MODULE_1__["e"])(o), l[0] instanceof _ArcadePortal_js__WEBPACK_IMPORTED_MODULE_3__["default"]) {
              var _t = null;
              return e.services && e.services.portal && (_t = e.services.portal), _t = Object(_featureSetUtils_js__WEBPACK_IMPORTED_MODULE_19__["getPortal"])(l[0], _t), Object(_featureSetUtils_js__WEBPACK_IMPORTED_MODULE_19__["lookupUser"])(_t, o, f).then(function (e) {
                if (e) {
                  var _t2 = JSON.parse(JSON.stringify(e));

                  for (var _i2 = 0, _arr2 = ["lastLogin", "created", "modified"]; _i2 < _arr2.length; _i2++) {
                    var _e = _arr2[_i2];
                    void 0 !== _t2[_e] && null !== _t2[_e] && (_t2[_e] = new Date(_t2[_e]));
                  }

                  return _Dictionary_js__WEBPACK_IMPORTED_MODULE_2__["default"].convertObjectToArcadeDictionary(_t2);
                }

                return null;
              });
            }

            var u = null;
            if (Object(_chunks_languageUtils_js__WEBPACK_IMPORTED_MODULE_1__["z"])(l[0]) && (u = l[0]), u) return f = !1, o ? null : u.load().then(function () {
              return u.getOwningSystemUrl();
            }).then(function (t) {
              if (!t) return o ? null : u.getIdentityUser().then(function (e) {
                return e ? _Dictionary_js__WEBPACK_IMPORTED_MODULE_2__["default"].convertObjectToArcadeDictionary({
                  username: e
                }) : null;
              });
              var n = null;
              return e.services && e.services.portal && (n = e.services.portal), n = Object(_featureSetUtils_js__WEBPACK_IMPORTED_MODULE_19__["getPortal"])(new _ArcadePortal_js__WEBPACK_IMPORTED_MODULE_3__["default"](t), n), Object(_featureSetUtils_js__WEBPACK_IMPORTED_MODULE_19__["lookupUser"])(n, o, f).then(function (e) {
                if (e) {
                  var _t3 = JSON.parse(JSON.stringify(e));

                  for (var _i3 = 0, _arr3 = ["lastLogin", "created", "modified"]; _i3 < _arr3.length; _i3++) {
                    var _e2 = _arr3[_i3];
                    void 0 !== _t3[_e2] && null !== _t3[_e2] && (_t3[_e2] = new Date(_t3[_e2]));
                  }

                  return _Dictionary_js__WEBPACK_IMPORTED_MODULE_2__["default"].convertObjectToArcadeDictionary(_t3);
                }

                return null;
              });
            });
            throw new Error("Invalid Parameter");
          });
        }, _.signatures.push({
          name: "getuser",
          min: "1",
          max: "2"
        }), _.functions.featuresetbyid = function (e, t) {
          return _.standardFunctionAsync(e, t, function (e, t, a) {
            if (Object(_chunks_languageUtils_js__WEBPACK_IMPORTED_MODULE_1__["p"])(a, 2, 4), a[0] instanceof _featureSetCollection_js__WEBPACK_IMPORTED_MODULE_8__["default"]) {
              var _e3 = Object(_chunks_languageUtils_js__WEBPACK_IMPORTED_MODULE_1__["e"])(a[1]);

              var _t4 = Object(_chunks_languageUtils_js__WEBPACK_IMPORTED_MODULE_1__["C"])(a[2], null);

              var n = Object(_chunks_languageUtils_js__WEBPACK_IMPORTED_MODULE_1__["d"])(Object(_chunks_languageUtils_js__WEBPACK_IMPORTED_MODULE_1__["C"])(a[3], !0));
              if (null === _t4 && (_t4 = ["*"]), !1 === Object(_chunks_languageUtils_js__WEBPACK_IMPORTED_MODULE_1__["h"])(_t4)) throw new Error("Invalid Parameter");
              return a[0].featureSetById(_e3, n, _t4);
            }

            throw new Error("Invalid Parameter");
          });
        }, _.signatures.push({
          name: "featuresetbyid",
          min: "2",
          max: "4"
        }), _.functions.featuresetbyportalitem = function (e, t) {
          return _.standardFunctionAsync(e, t, function (t, a, f) {
            if (Object(_chunks_languageUtils_js__WEBPACK_IMPORTED_MODULE_1__["p"])(f, 2, 5), null === f[0]) throw new Error("Portal is required");

            if (f[0] instanceof _ArcadePortal_js__WEBPACK_IMPORTED_MODULE_3__["default"]) {
              var _t5 = Object(_chunks_languageUtils_js__WEBPACK_IMPORTED_MODULE_1__["e"])(f[1]),
                  n = Object(_chunks_languageUtils_js__WEBPACK_IMPORTED_MODULE_1__["e"])(f[2]);

              var _a = Object(_chunks_languageUtils_js__WEBPACK_IMPORTED_MODULE_1__["C"])(f[3], null);

              var o = Object(_chunks_languageUtils_js__WEBPACK_IMPORTED_MODULE_1__["d"])(Object(_chunks_languageUtils_js__WEBPACK_IMPORTED_MODULE_1__["C"])(f[4], !0));
              if (null === _a && (_a = ["*"]), !1 === Object(_chunks_languageUtils_js__WEBPACK_IMPORTED_MODULE_1__["h"])(_a)) throw new Error("Invalid Parameter");
              var _u = null;
              return e.services && e.services.portal && (_u = e.services.portal), _u = Object(_featureSetUtils_js__WEBPACK_IMPORTED_MODULE_19__["getPortal"])(f[0], _u), Object(_featureSetUtils_js__WEBPACK_IMPORTED_MODULE_19__["constructFeatureSetFromPortalItem"])(_t5, n, e.spatialReference, _a, o, _u, e.lrucache);
            }

            if (!1 === Object(_chunks_languageUtils_js__WEBPACK_IMPORTED_MODULE_1__["b"])(f[0])) throw new Error("Portal is required");
            var u = Object(_chunks_languageUtils_js__WEBPACK_IMPORTED_MODULE_1__["e"])(f[0]),
                c = Object(_chunks_languageUtils_js__WEBPACK_IMPORTED_MODULE_1__["e"])(f[1]);
            var d = Object(_chunks_languageUtils_js__WEBPACK_IMPORTED_MODULE_1__["C"])(f[2], null);
            var m = Object(_chunks_languageUtils_js__WEBPACK_IMPORTED_MODULE_1__["d"])(Object(_chunks_languageUtils_js__WEBPACK_IMPORTED_MODULE_1__["C"])(f[3], !0));
            if (null === d && (d = ["*"]), !1 === Object(_chunks_languageUtils_js__WEBPACK_IMPORTED_MODULE_1__["h"])(d)) throw new Error("Invalid Parameter");
            if (e.services && e.services.portal) return Object(_featureSetUtils_js__WEBPACK_IMPORTED_MODULE_19__["constructFeatureSetFromPortalItem"])(u, c, e.spatialReference, d, m, e.services.portal, e.lrucache);
            throw new Error("Portal is required");
          });
        }, _.signatures.push({
          name: "featuresetbyportalitem",
          min: "2",
          max: "5"
        }), _.functions.featuresetbyname = function (e, t) {
          return _.standardFunctionAsync(e, t, function (e, t, a) {
            if (Object(_chunks_languageUtils_js__WEBPACK_IMPORTED_MODULE_1__["p"])(a, 2, 4), a[0] instanceof _featureSetCollection_js__WEBPACK_IMPORTED_MODULE_8__["default"]) {
              var _e4 = Object(_chunks_languageUtils_js__WEBPACK_IMPORTED_MODULE_1__["e"])(a[1]);

              var _t6 = Object(_chunks_languageUtils_js__WEBPACK_IMPORTED_MODULE_1__["C"])(a[2], null);

              var n = Object(_chunks_languageUtils_js__WEBPACK_IMPORTED_MODULE_1__["d"])(Object(_chunks_languageUtils_js__WEBPACK_IMPORTED_MODULE_1__["C"])(a[3], !0));
              if (null === _t6 && (_t6 = ["*"]), !1 === Object(_chunks_languageUtils_js__WEBPACK_IMPORTED_MODULE_1__["h"])(_t6)) throw new Error("Invalid Parameter");
              return a[0].featureSetByName(_e4, n, _t6);
            }

            throw new Error("Invalid Parameter");
          });
        }, _.signatures.push({
          name: "featuresetbyname",
          min: "2",
          max: "4"
        }), _.functions.featureset = function (e, t) {
          return _.standardFunction(e, t, function (t, r, i) {
            Object(_chunks_languageUtils_js__WEBPACK_IMPORTED_MODULE_1__["p"])(i, 1, 1);
            var a = i[0];
            var s = {
              layerDefinition: {
                geometryType: "",
                objectIdField: "",
                globalIdField: "",
                typeIdField: "",
                fields: []
              },
              featureSet: {
                geometryType: "",
                features: []
              }
            };
            if (Object(_chunks_languageUtils_js__WEBPACK_IMPORTED_MODULE_1__["b"])(a)) a = JSON.parse(a), void 0 !== a.layerDefinition ? (s.layerDefinition = a.layerDefinition, s.featureSet = a.featureSet, a.layerDefinition.spatialReference && (s.layerDefinition.spatialReference = a.layerDefinition.spatialReference)) : (s.featureSet.features = a.features, s.featureSet.geometryType = a.geometryType, s.layerDefinition.geometryType = s.featureSet.geometryType, s.layerDefinition.objectIdField = a.objectIdFieldName, s.layerDefinition.typeIdField = a.typeIdFieldName, s.layerDefinition.globalIdField = a.globalIdFieldName, s.layerDefinition.fields = a.fields, a.spatialReference && (s.layerDefinition.spatialReference = a.spatialReference));else {
              if (!(i[0] instanceof _Dictionary_js__WEBPACK_IMPORTED_MODULE_2__["default"])) throw new Error("Invalid Parameter");
              {
                a = JSON.parse(i[0].castToText());

                var _e5 = z(a, "layerdefinition");

                if (null !== _e5) {
                  s.layerDefinition.geometryType = z(_e5, "geometrytype", ""), s.featureSet.geometryType = s.layerDefinition.geometryType, s.layerDefinition.globalIdField = z(_e5, "globalidfield", ""), s.layerDefinition.objectIdField = z(_e5, "objectidfield", ""), s.layerDefinition.typeIdField = z(_e5, "typeidfield", "");

                  var _t7 = z(_e5, "spatialreference", null);

                  _t7 && (s.layerDefinition.spatialReference = U(_t7));

                  var _iterator2 = _createForOfIteratorHelper(z(_e5, "fields", [])),
                      _step2;

                  try {
                    for (_iterator2.s(); !(_step2 = _iterator2.n()).done;) {
                      var _t11 = _step2.value;
                      var _e7 = {
                        name: z(_t11, "name", ""),
                        alias: z(_t11, "alias", ""),
                        type: z(_t11, "type", ""),
                        nullable: z(_t11, "nullable", !0),
                        editable: z(_t11, "editable", !0),
                        length: z(_t11, "length", null),
                        domain: H(z(_t11, "domain"))
                      };
                      s.layerDefinition.fields.push(_e7);
                    }
                  } catch (err) {
                    _iterator2.e(err);
                  } finally {
                    _iterator2.f();
                  }

                  var n = z(a, "featureset", null);

                  if (n) {
                    var _e6 = {};

                    var _iterator3 = _createForOfIteratorHelper(s.layerDefinition.fields),
                        _step3;

                    try {
                      for (_iterator3.s(); !(_step3 = _iterator3.n()).done;) {
                        var _t8 = _step3.value;
                        _e6[_t8.name.toLowerCase()] = _t8.name;
                      }
                    } catch (err) {
                      _iterator3.e(err);
                    } finally {
                      _iterator3.f();
                    }

                    var _iterator4 = _createForOfIteratorHelper(z(n, "features", [])),
                        _step4;

                    try {
                      for (_iterator4.s(); !(_step4 = _iterator4.n()).done;) {
                        var _t9 = _step4.value;

                        var _n5 = {},
                            _r2 = z(_t9, "attributes", {});

                        for (var _t10 in _r2) {
                          _n5[_e6[_t10.toLowerCase()]] = _r2[_t10];
                        }

                        s.featureSet.features.push({
                          attributes: _n5,
                          geometry: W(z(_t9, "geometry", null))
                        });
                      }
                    } catch (err) {
                      _iterator4.e(err);
                    } finally {
                      _iterator4.f();
                    }
                  }
                } else {
                  s.layerDefinition.geometryType = z(a, "geometrytype", ""), s.featureSet.geometryType = s.layerDefinition.geometryType, s.layerDefinition.objectIdField = z(a, "objectidfieldname", ""), s.layerDefinition.typeIdField = z(a, "typeidfieldname", "");

                  var _e8 = z(a, "spatialreference", null);

                  _e8 && (s.layerDefinition.spatialReference = U(_e8));

                  var _iterator5 = _createForOfIteratorHelper(z(a, "fields", [])),
                      _step5;

                  try {
                    for (_iterator5.s(); !(_step5 = _iterator5.n()).done;) {
                      var _e9 = _step5.value;
                      var _t13 = {
                        name: z(_e9, "name", ""),
                        alias: z(_e9, "alias", ""),
                        type: z(_e9, "type", ""),
                        nullable: z(_e9, "nullable", !0),
                        editable: z(_e9, "editable", !0),
                        length: z(_e9, "length", null),
                        domain: H(z(_e9, "domain"))
                      };
                      s.layerDefinition.fields.push(_t13);
                    }
                  } catch (err) {
                    _iterator5.e(err);
                  } finally {
                    _iterator5.f();
                  }

                  var _t12 = {};

                  var _iterator6 = _createForOfIteratorHelper(s.layerDefinition.fields),
                      _step6;

                  try {
                    for (_iterator6.s(); !(_step6 = _iterator6.n()).done;) {
                      var _e10 = _step6.value;
                      _t12[_e10.name.toLowerCase()] = _e10.name;
                    }
                  } catch (err) {
                    _iterator6.e(err);
                  } finally {
                    _iterator6.f();
                  }

                  var _iterator7 = _createForOfIteratorHelper(z(a, "features", [])),
                      _step7;

                  try {
                    for (_iterator7.s(); !(_step7 = _iterator7.n()).done;) {
                      var _e11 = _step7.value;

                      var _n6 = {},
                          _r3 = z(_e11, "attributes", {});

                      for (var _e12 in _r3) {
                        _n6[_t12[_e12.toLowerCase()]] = _r3[_e12];
                      }

                      s.featureSet.features.push({
                        attributes: _n6,
                        geometry: W(z(_e11, "geometry", null))
                      });
                    }
                  } catch (err) {
                    _iterator7.e(err);
                  } finally {
                    _iterator7.f();
                  }
                }
              }
            }
            if (!1 == (!!(f = s).layerDefinition && !!f.featureSet && !1 !== function (e, t) {
              var _iterator8 = _createForOfIteratorHelper(t),
                  _step8;

              try {
                for (_iterator8.s(); !(_step8 = _iterator8.n()).done;) {
                  var _n7 = _step8.value;
                  if (_n7 === e) return !0;
                }
              } catch (err) {
                _iterator8.e(err);
              } finally {
                _iterator8.f();
              }

              return !1;
            }(f.layerDefinition.geometryType, ["", "esriGeometryPoint", "esriGeometryPolyline", "esriGeometryPolygon", "esriGeometryMultipoint", "esriGeometryEnvelope"]) && null !== f.layerDefinition.objectIdField && "" !== f.layerDefinition.objectIdField && !1 !== Object(_chunks_languageUtils_js__WEBPACK_IMPORTED_MODULE_1__["h"])(f.layerDefinition.fields) && !1 !== Object(_chunks_languageUtils_js__WEBPACK_IMPORTED_MODULE_1__["h"])(f.featureSet.features))) throw new Error("Invalid Parameter");
            var f;
            return _featureset_sources_FeatureLayerMemory_js__WEBPACK_IMPORTED_MODULE_18__["default"].create(s, e.spatialReference);
          });
        }, _.signatures.push({
          name: "featureset",
          min: "1",
          max: "1"
        }), _.functions.filter = function (r, i) {
          return _.standardFunctionAsync(r, i, function (i, s, l) {
            return Object(_chunks_languageUtils_js__WEBPACK_IMPORTED_MODULE_1__["p"])(l, 2, 2), Object(_chunks_languageUtils_js__WEBPACK_IMPORTED_MODULE_1__["z"])(l[0]) ? l[0].load().then(function (n) {
              var i = _core_sql_WhereClause_js__WEBPACK_IMPORTED_MODULE_9__["WhereClause"].create(l[1], n.getFieldsIndex()),
                  a = i.getVariables();

              if (a.length > 0) {
                var t = [];

                for (var e = 0; e < a.length; e++) {
                  var _n8 = {
                    name: a[e]
                  };
                  t.push(_.evaluateIdentifier(r, _n8));
                }

                return Object(_core_promiseUtils_js__WEBPACK_IMPORTED_MODULE_0__["all"])(t).then(function (e) {
                  var t = {};

                  for (var _n9 = 0; _n9 < a.length; _n9++) {
                    t[a[_n9]] = e[_n9];
                  }

                  return i.parameters = t, new _featureset_actions_AttributeFilter_js__WEBPACK_IMPORTED_MODULE_11__["default"]({
                    parentfeatureset: l[0],
                    whereclause: i
                  });
                });
              }

              return Object(_core_promiseUtils_js__WEBPACK_IMPORTED_MODULE_0__["resolve"])(new _featureset_actions_AttributeFilter_js__WEBPACK_IMPORTED_MODULE_11__["default"]({
                parentfeatureset: l[0],
                whereclause: i
              }));
            }) : _.failDefferred("Filter cannot accept this parameter type");
          });
        }, _.signatures.push({
          name: "filter",
          min: "2",
          max: "2"
        }), _.functions.orderby = function (e, r) {
          return _.standardFunctionAsync(e, r, function (e, r, i) {
            if (Object(_chunks_languageUtils_js__WEBPACK_IMPORTED_MODULE_1__["p"])(i, 2, 2), Object(_chunks_languageUtils_js__WEBPACK_IMPORTED_MODULE_1__["z"])(i[0])) {
              var _e13 = new _featureset_support_OrderbyClause_js__WEBPACK_IMPORTED_MODULE_13__["default"](i[1]);

              return Object(_core_promiseUtils_js__WEBPACK_IMPORTED_MODULE_0__["resolve"])(new _featureset_actions_OrderBy_js__WEBPACK_IMPORTED_MODULE_14__["default"]({
                parentfeatureset: i[0],
                orderbyclause: _e13
              }));
            }

            return _.failDefferred("Order cannot accept this parameter type");
          });
        }, _.signatures.push({
          name: "orderby",
          min: "2",
          max: "2"
        }), _.functions.top = function (e, r) {
          return _.standardFunctionAsync(e, r, function (e, r, i) {
            return Object(_chunks_languageUtils_js__WEBPACK_IMPORTED_MODULE_1__["p"])(i, 2, 2), Object(_chunks_languageUtils_js__WEBPACK_IMPORTED_MODULE_1__["z"])(i[0]) ? Object(_core_promiseUtils_js__WEBPACK_IMPORTED_MODULE_0__["resolve"])(new _featureset_actions_Top_js__WEBPACK_IMPORTED_MODULE_16__["default"]({
              parentfeatureset: i[0],
              topnum: i[1]
            })) : Object(_chunks_languageUtils_js__WEBPACK_IMPORTED_MODULE_1__["h"])(i[0]) ? Object(_chunks_languageUtils_js__WEBPACK_IMPORTED_MODULE_1__["c"])(i[1]) >= i[0].length ? i[0].slice(0) : i[0].slice(0, Object(_chunks_languageUtils_js__WEBPACK_IMPORTED_MODULE_1__["c"])(i[1])) : Object(_chunks_languageUtils_js__WEBPACK_IMPORTED_MODULE_1__["o"])(i[0]) ? Object(_chunks_languageUtils_js__WEBPACK_IMPORTED_MODULE_1__["c"])(i[1]) >= i[0].length() ? i[0].slice(0) : i[0].slice(0, Object(_chunks_languageUtils_js__WEBPACK_IMPORTED_MODULE_1__["c"])(i[1])) : _.failDefferred("Top cannot accept this parameter type");
          });
        }, _.signatures.push({
          name: "top",
          min: "2",
          max: "2"
        }), _.functions.first = function (e, r) {
          return _.standardFunctionAsync(e, r, function (e, r, i) {
            return Object(_chunks_languageUtils_js__WEBPACK_IMPORTED_MODULE_1__["p"])(i, 1, 1), Object(_chunks_languageUtils_js__WEBPACK_IMPORTED_MODULE_1__["z"])(i[0]) ? i[0].first(e.abortSignal).then(function (e) {
              if (null !== e) {
                var t = _Feature_js__WEBPACK_IMPORTED_MODULE_6__["default"].createFromGraphicLikeObject(e.geometry, e.attributes, i[0]);

                t._underlyingGraphic = e, e = t;
              }

              return e;
            }) : Object(_chunks_languageUtils_js__WEBPACK_IMPORTED_MODULE_1__["h"])(i[0]) ? 0 === i[0].length ? Object(_core_promiseUtils_js__WEBPACK_IMPORTED_MODULE_0__["resolve"])(null) : Object(_core_promiseUtils_js__WEBPACK_IMPORTED_MODULE_0__["resolve"])(i[0][0]) : Object(_chunks_languageUtils_js__WEBPACK_IMPORTED_MODULE_1__["o"])(i[0]) ? 0 === i[0].length() ? Object(_core_promiseUtils_js__WEBPACK_IMPORTED_MODULE_0__["resolve"])(null) : Object(_core_promiseUtils_js__WEBPACK_IMPORTED_MODULE_0__["resolve"])(i[0].get(0)) : null;
          });
        }, _.signatures.push({
          name: "first",
          min: "1",
          max: "1"
        }), _.functions.attachments = function (e, t) {
          return _.standardFunctionAsync(e, t, function (t, r, i) {
            Object(_chunks_languageUtils_js__WEBPACK_IMPORTED_MODULE_1__["p"])(i, 1, 2);
            var s = {
              minsize: -1,
              maxsize: -1,
              types: null
            };
            if (i.length > 1) if (i[1] instanceof _Dictionary_js__WEBPACK_IMPORTED_MODULE_2__["default"]) {
              if (i[1].hasField("minsize") && (s.minsize = Object(_chunks_languageUtils_js__WEBPACK_IMPORTED_MODULE_1__["c"])(i[1].field("minsize"))), i[1].hasField("maxsize") && (s.maxsize = Object(_chunks_languageUtils_js__WEBPACK_IMPORTED_MODULE_1__["c"])(i[1].field("maxsize"))), i[1].hasField("types")) {
                var _e14 = Object(_chunks_languageUtils_js__WEBPACK_IMPORTED_MODULE_1__["T"])(i[1].field("types"), !1);

                _e14.length > 0 && (s.types = _e14);
              }
            } else if (null !== i[1]) throw new Error("Invalid Parameter");

            if (i[0] instanceof _Feature_js__WEBPACK_IMPORTED_MODULE_6__["default"]) {
              var _t14 = i[0]._layer;
              return _t14 instanceof _layers_FeatureLayer_js__WEBPACK_IMPORTED_MODULE_17__["default"] && (_t14 = Object(_featureSetUtils_js__WEBPACK_IMPORTED_MODULE_19__["constructFeatureSet"])(_t14, e.spatialReference, ["*"], !0, e.lrucache)), null === _t14 || !1 === Object(_chunks_languageUtils_js__WEBPACK_IMPORTED_MODULE_1__["z"])(_t14) ? [] : _t14.load().then(function () {
                return _t14.queryAttachments(i[0].field(_t14.objectIdField), s.minsize, s.maxsize, s.types);
              });
            }

            if (null === i[0]) return [];
            throw new Error("Invalid Parameter");
          });
        }, _.signatures.push({
          name: "attachments",
          min: "1",
          max: "2"
        }), _.functions.featuresetbyrelationshipname = function (e, t) {
          return _.standardFunctionAsync(e, t, function (t, o, f) {
            Object(_chunks_languageUtils_js__WEBPACK_IMPORTED_MODULE_1__["p"])(f, 2, 4);
            var u = f[0],
                c = Object(_chunks_languageUtils_js__WEBPACK_IMPORTED_MODULE_1__["e"])(f[1]);
            var d = Object(_chunks_languageUtils_js__WEBPACK_IMPORTED_MODULE_1__["C"])(f[2], null);
            var m = Object(_chunks_languageUtils_js__WEBPACK_IMPORTED_MODULE_1__["d"])(Object(_chunks_languageUtils_js__WEBPACK_IMPORTED_MODULE_1__["C"])(f[3], !0));
            if (null === d && (d = ["*"]), !1 === Object(_chunks_languageUtils_js__WEBPACK_IMPORTED_MODULE_1__["h"])(d)) throw new Error("Invalid Parameter");
            if (null === f[0]) return null;
            if (!(f[0] instanceof _Feature_js__WEBPACK_IMPORTED_MODULE_6__["default"])) throw new Error("Invalid Parameter");
            var p = u._layer;
            return p instanceof _layers_FeatureLayer_js__WEBPACK_IMPORTED_MODULE_17__["default"] && (p = Object(_featureSetUtils_js__WEBPACK_IMPORTED_MODULE_19__["constructFeatureSet"])(p, e.spatialReference, ["*"], !0, e.lrucache)), null === p || !1 === Object(_chunks_languageUtils_js__WEBPACK_IMPORTED_MODULE_1__["z"])(p) ? null : p.load().then(function (t) {
              var n = t.relationshipMetaData().filter(function (e) {
                return e.name === c;
              });
              if (0 === n.length) return null;
              if (void 0 !== n[0].relationshipTableId && null !== n[0].relationshipTableId && n[0].relationshipTableId > -1) return Object(_featureSetUtils_js__WEBPACK_IMPORTED_MODULE_19__["constructFeatureSetFromRelationship"])(t, n[0], u.field(t.objectIdField), t.spatialReference, d, m, e.lrucache);
              var r = t.serviceUrl();
              return r ? (r = "/" === r.charAt(r.length - 1) ? r + n[0].relatedTableId.toString() : r + "/" + n[0].relatedTableId.toString(), Object(_featureSetUtils_js__WEBPACK_IMPORTED_MODULE_19__["constructFeatureSetFromUrl"])(r, t.spatialReference, d, m, e.lrucache).then(function (e) {
                return e.load().then(function () {
                  return e.relationshipMetaData();
                }).then(function (r) {
                  if (r = r.filter(function (e) {
                    return e.id === n[0].id;
                  }), !1 === u.hasField(n[0].keyField) || null === u.field(n[0].keyField)) return t.getFeatureByObjectId(u.field(t.objectIdField), [n[0].keyField]).then(function (t) {
                    if (t) {
                      var _i4 = _core_sql_WhereClause_js__WEBPACK_IMPORTED_MODULE_9__["WhereClause"].create(r[0].keyField + "= @id", e.getFieldsIndex());

                      return _i4.parameters = {
                        id: t.attributes[n[0].keyField]
                      }, e.filter(_i4);
                    }

                    return new _featureset_sources_Empty_js__WEBPACK_IMPORTED_MODULE_15__["default"]({
                      parentfeatureset: e
                    });
                  });

                  var i = _core_sql_WhereClause_js__WEBPACK_IMPORTED_MODULE_9__["WhereClause"].create(r[0].keyField + "= @id", e.getFieldsIndex());

                  return i.parameters = {
                    id: u.field(n[0].keyField)
                  }, e.filter(i);
                });
              })) : null;
            });
          });
        }, _.signatures.push({
          name: "featuresetbyrelationshipname",
          min: "2",
          max: "4"
        }), _.functions.featuresetbyassociation = function (e, t) {
          return _.standardFunctionAsync(e, t, function (t, s, l) {
            Object(_chunks_languageUtils_js__WEBPACK_IMPORTED_MODULE_1__["p"])(l, 2, 3);
            var f = l[0],
                u = Object(_chunks_languageUtils_js__WEBPACK_IMPORTED_MODULE_1__["e"])(Object(_chunks_languageUtils_js__WEBPACK_IMPORTED_MODULE_1__["C"])(l[1], "")).toLowerCase(),
                c = Object(_chunks_languageUtils_js__WEBPACK_IMPORTED_MODULE_1__["b"])(l[2]) ? Object(_chunks_languageUtils_js__WEBPACK_IMPORTED_MODULE_1__["e"])(l[2]) : null;
            if (null === l[0]) return null;
            if (!(l[0] instanceof _Feature_js__WEBPACK_IMPORTED_MODULE_6__["default"])) throw new Error("Invalid Parameter");
            var m = f._layer;
            return m instanceof _layers_FeatureLayer_js__WEBPACK_IMPORTED_MODULE_17__["default"] && (m = Object(_featureSetUtils_js__WEBPACK_IMPORTED_MODULE_19__["constructFeatureSet"])(m, e.spatialReference, ["*"], !0, e.lrucache)), null === m || !1 === Object(_chunks_languageUtils_js__WEBPACK_IMPORTED_MODULE_1__["z"])(m) ? null : m.load().then(function () {
              var t = m.serviceUrl();
              return Object(_featureSetUtils_js__WEBPACK_IMPORTED_MODULE_19__["constructAssociationMetaDataFeatureSetFromUrl"])(t, e.spatialReference);
            }).then(function (e) {
              var t = null,
                  n = null,
                  r = !1;

              if (null !== c && "" !== c && void 0 !== c) {
                var _iterator9 = _createForOfIteratorHelper(e.terminals),
                    _step9;

                try {
                  for (_iterator9.s(); !(_step9 = _iterator9.n()).done;) {
                    var _t15 = _step9.value;
                    _t15.terminalName === c && (n = _t15.terminalId);
                  }
                } catch (err) {
                  _iterator9.e(err);
                } finally {
                  _iterator9.f();
                }

                null === n && (r = !0);
              }

              var i = e.associations.getFieldsIndex(),
                  a = i.get("TOGLOBALID").name,
                  s = i.get("FROMGLOBALID").name,
                  l = i.get("TOTERMINALID").name,
                  o = i.get("FROMTERMINALID").name,
                  p = i.get("FROMNETWORKSOURCEID").name,
                  h = i.get("TONETWORKSOURCEID").name,
                  F = i.get("ASSOCIATIONTYPE").name,
                  I = i.get("ISCONTENTVISIBLE").name,
                  D = i.get("OBJECTID").name;

              var _iterator10 = _createForOfIteratorHelper(m.fields),
                  _step10;

              try {
                for (_iterator10.s(); !(_step10 = _iterator10.n()).done;) {
                  var _e15 = _step10.value;

                  if ("global-id" === _e15.type) {
                    t = f.field(_e15.name);
                    break;
                  }
                }
              } catch (err) {
                _iterator10.e(err);
              } finally {
                _iterator10.f();
              }

              var w = null,
                  $ = new _featureset_actions_Adapted_js__WEBPACK_IMPORTED_MODULE_12__["SqlExpressionAdapted"](new _layers_support_Field_js__WEBPACK_IMPORTED_MODULE_4__["default"]({
                name: "percentalong",
                alias: "percentalong",
                type: "double"
              }), _core_sql_WhereClause_js__WEBPACK_IMPORTED_MODULE_9__["WhereClause"].create("0", e.associations.getFieldsIndex())),
                  T = new _featureset_actions_Adapted_js__WEBPACK_IMPORTED_MODULE_12__["SqlExpressionAdapted"](new _layers_support_Field_js__WEBPACK_IMPORTED_MODULE_4__["default"]({
                name: "side",
                alias: "side",
                type: "string"
              }), _core_sql_WhereClause_js__WEBPACK_IMPORTED_MODULE_9__["WhereClause"].create("''", e.associations.getFieldsIndex()));
              var L = "globalid",
                  v = "globalId",
                  j = {};

              for (var _t16 in e.lkp) {
                j[_t16] = e.lkp[_t16].sourceId;
              }

              var O = new _featureset_actions_Adapted_js__WEBPACK_IMPORTED_MODULE_12__["StringToCodeAdapted"](new _layers_support_Field_js__WEBPACK_IMPORTED_MODULE_4__["default"]({
                name: "classname",
                alias: "classname",
                type: "string"
              }), null, j);
              var R = "";

              switch (u) {
                case "midspan":
                  {
                    R = "((".concat(a, "='").concat(t, "') OR ( ").concat(s, "='").concat(t, "')) AND (").concat(F, " IN (5))"), O.codefield = _core_sql_WhereClause_js__WEBPACK_IMPORTED_MODULE_9__["WhereClause"].create("CASE WHEN (".concat(a, "='").concat(t, "') THEN ").concat(p, " ELSE ").concat(h, " END"), e.associations.getFieldsIndex());

                    var _n10 = Object(_featureset_support_shared_js__WEBPACK_IMPORTED_MODULE_5__["cloneField"])(_featureset_actions_Adapted_js__WEBPACK_IMPORTED_MODULE_12__["AdaptedFeatureSet"].findField(e.associations.fields, s));

                    _n10.name = L, _n10.alias = L, w = new _featureset_actions_Adapted_js__WEBPACK_IMPORTED_MODULE_12__["SqlExpressionAdapted"](_n10, _core_sql_WhereClause_js__WEBPACK_IMPORTED_MODULE_9__["WhereClause"].create("CASE WHEN (".concat(s, "='").concat(t, "') THEN ").concat(a, " ELSE ").concat(s, " END"), e.associations.getFieldsIndex())), $ = e.unVersion >= 4 ? new _featureset_actions_Adapted_js__WEBPACK_IMPORTED_MODULE_12__["OriginalField"](_featureset_actions_Adapted_js__WEBPACK_IMPORTED_MODULE_12__["AdaptedFeatureSet"].findField(e.associations.fields, i.get("PERCENTALONG").name)) : new _featureset_actions_Adapted_js__WEBPACK_IMPORTED_MODULE_12__["SqlExpressionAdapted"](new _layers_support_Field_js__WEBPACK_IMPORTED_MODULE_4__["default"]({
                      name: "percentalong",
                      alias: "percentalong",
                      type: "double"
                    }), _core_sql_WhereClause_js__WEBPACK_IMPORTED_MODULE_9__["WhereClause"].create("0", e.associations.getFieldsIndex()));
                    break;
                  }

                case "junctionedge":
                  {
                    R = "((".concat(a, "='").concat(t, "') OR ( ").concat(s, "='").concat(t, "')) AND (").concat(F, " IN (4,6))"), O.codefield = _core_sql_WhereClause_js__WEBPACK_IMPORTED_MODULE_9__["WhereClause"].create("CASE WHEN (".concat(a, "='").concat(t, "') THEN ").concat(p, " ELSE ").concat(h, " END"), e.associations.getFieldsIndex());

                    var _n11 = Object(_featureset_support_shared_js__WEBPACK_IMPORTED_MODULE_5__["cloneField"])(_featureset_actions_Adapted_js__WEBPACK_IMPORTED_MODULE_12__["AdaptedFeatureSet"].findField(e.associations.fields, s));

                    _n11.name = L, _n11.alias = L, w = new _featureset_actions_Adapted_js__WEBPACK_IMPORTED_MODULE_12__["SqlExpressionAdapted"](_n11, _core_sql_WhereClause_js__WEBPACK_IMPORTED_MODULE_9__["WhereClause"].create("CASE WHEN (".concat(s, "='").concat(t, "') THEN ").concat(a, " ELSE ").concat(s, " END"), e.associations.getFieldsIndex())), T = new _featureset_actions_Adapted_js__WEBPACK_IMPORTED_MODULE_12__["SqlExpressionAdapted"](new _layers_support_Field_js__WEBPACK_IMPORTED_MODULE_4__["default"]({
                      name: "side",
                      alias: "side",
                      type: "string"
                    }), _core_sql_WhereClause_js__WEBPACK_IMPORTED_MODULE_9__["WhereClause"].create("CASE WHEN (".concat(F, "=4) THEN 'from' ELSE 'to' END"), e.associations.getFieldsIndex()));
                    break;
                  }

                case "connected":
                  {
                    var _r4 = "".concat(a, "='@T'"),
                        _i5 = "".concat(s, "='@T'");

                    null !== n && (_r4 += " AND ".concat(l, "=@A"), _i5 += " AND ".concat(o, "=@A")), R = "((" + _r4 + ") OR (" + _i5 + "))", R = Object(_chunks_languageUtils_js__WEBPACK_IMPORTED_MODULE_1__["G"])(R, "@T", t), _r4 = Object(_chunks_languageUtils_js__WEBPACK_IMPORTED_MODULE_1__["G"])(_r4, "@T", t), null !== n && (_r4 = Object(_chunks_languageUtils_js__WEBPACK_IMPORTED_MODULE_1__["G"])(_r4, "@A", n.toString()), R = Object(_chunks_languageUtils_js__WEBPACK_IMPORTED_MODULE_1__["G"])(R, "@A", n.toString())), O.codefield = _core_sql_WhereClause_js__WEBPACK_IMPORTED_MODULE_9__["WhereClause"].create("CASE WHEN " + _r4 + " THEN ".concat(p, " ELSE ").concat(h, " END"), e.associations.getFieldsIndex());

                    var _f = Object(_featureset_support_shared_js__WEBPACK_IMPORTED_MODULE_5__["cloneField"])(_featureset_actions_Adapted_js__WEBPACK_IMPORTED_MODULE_12__["AdaptedFeatureSet"].findField(e.associations.fields, s));

                    _f.name = L, _f.alias = L, w = new _featureset_actions_Adapted_js__WEBPACK_IMPORTED_MODULE_12__["SqlExpressionAdapted"](_f, _core_sql_WhereClause_js__WEBPACK_IMPORTED_MODULE_9__["WhereClause"].create("CASE WHEN " + _r4 + " THEN ".concat(s, " ELSE ").concat(a, " END"), e.associations.getFieldsIndex()));
                    break;
                  }

                case "container":
                  R = "".concat(a, "='").concat(t, "' AND ").concat(F, " = 2"), null !== n && (R += " AND ".concat(l, " = ") + n.toString()), O.codefield = p, R = "( " + R + " )", w = new _featureset_actions_Adapted_js__WEBPACK_IMPORTED_MODULE_12__["FieldRename"](_featureset_actions_Adapted_js__WEBPACK_IMPORTED_MODULE_12__["AdaptedFeatureSet"].findField(e.associations.fields, s), L, L);

                case "content":
                  R = "(".concat(s, "='").concat(t, "' AND ").concat(F, " = 2)"), null !== n && (R += " AND ".concat(o, " = ") + n.toString()), O.codefield = h, R = "( " + R + " )", w = new _featureset_actions_Adapted_js__WEBPACK_IMPORTED_MODULE_12__["FieldRename"](_featureset_actions_Adapted_js__WEBPACK_IMPORTED_MODULE_12__["AdaptedFeatureSet"].findField(e.associations.fields, a), L, L);
                  break;

                case "structure":
                  R = "(".concat(a, "='").concat(t, "' AND ").concat(F, " = 3)"), null !== n && (R += " AND ".concat(l, " = ") + n.toString()), O.codefield = p, R = "( " + R + " )", w = new _featureset_actions_Adapted_js__WEBPACK_IMPORTED_MODULE_12__["FieldRename"](_featureset_actions_Adapted_js__WEBPACK_IMPORTED_MODULE_12__["AdaptedFeatureSet"].findField(e.associations.fields, s), L, v);
                  break;

                case "attached":
                  R = "(".concat(s, "='").concat(t, "' AND ").concat(F, " = 3)"), null !== n && (R += " AND ".concat(o, " = ") + n.toString()), O.codefield = h, R = "( " + R + " )", w = new _featureset_actions_Adapted_js__WEBPACK_IMPORTED_MODULE_12__["FieldRename"](_featureset_actions_Adapted_js__WEBPACK_IMPORTED_MODULE_12__["AdaptedFeatureSet"].findField(e.associations.fields, a), L, v);
                  break;

                default:
                  throw new Error("Invalid Parameter");
              }

              r && (R = "1 <> 1");
              return new _featureset_actions_Adapted_js__WEBPACK_IMPORTED_MODULE_12__["AdaptedFeatureSet"]({
                parentfeatureset: e.associations,
                adaptedFields: [new _featureset_actions_Adapted_js__WEBPACK_IMPORTED_MODULE_12__["OriginalField"](_featureset_actions_Adapted_js__WEBPACK_IMPORTED_MODULE_12__["AdaptedFeatureSet"].findField(e.associations.fields, D)), new _featureset_actions_Adapted_js__WEBPACK_IMPORTED_MODULE_12__["OriginalField"](_featureset_actions_Adapted_js__WEBPACK_IMPORTED_MODULE_12__["AdaptedFeatureSet"].findField(e.associations.fields, I)), w, T, O, $],
                extraFilter: R ? _core_sql_WhereClause_js__WEBPACK_IMPORTED_MODULE_9__["WhereClause"].create(R, e.associations.getFieldsIndex()) : null
              });
            });
          });
        }, _.signatures.push({
          name: "featuresetbyassociation",
          min: "2",
          max: "6"
        }), _.functions.groupby = function (r, s) {
          return _.standardFunctionAsync(r, s, function (s, f, c) {
            return Object(_chunks_languageUtils_js__WEBPACK_IMPORTED_MODULE_1__["p"])(c, 3, 3), Object(_chunks_languageUtils_js__WEBPACK_IMPORTED_MODULE_1__["z"])(c[0]) ? c[0].load().then(function (n) {
              var a = [],
                  s = [];
              var f = !1,
                  d = [];
              if (Object(_chunks_languageUtils_js__WEBPACK_IMPORTED_MODULE_1__["b"])(c[1])) d.push(c[1]);else if (c[1] instanceof _Dictionary_js__WEBPACK_IMPORTED_MODULE_2__["default"]) d.push(c[1]);else if (Object(_chunks_languageUtils_js__WEBPACK_IMPORTED_MODULE_1__["h"])(c[1])) d = c[1];else {
                if (!Object(_chunks_languageUtils_js__WEBPACK_IMPORTED_MODULE_1__["o"])(c[1])) return _.failDefferred("Illegal Value: GroupBy");
                d = c[1].toArray();
              }

              var _iterator11 = _createForOfIteratorHelper(d),
                  _step11;

              try {
                for (_iterator11.s(); !(_step11 = _iterator11.n()).done;) {
                  var _e18 = _step11.value;

                  if (Object(_chunks_languageUtils_js__WEBPACK_IMPORTED_MODULE_1__["b"])(_e18)) {
                    var _t20 = _core_sql_WhereClause_js__WEBPACK_IMPORTED_MODULE_9__["WhereClause"].create(Object(_chunks_languageUtils_js__WEBPACK_IMPORTED_MODULE_1__["e"])(_e18), n.getFieldsIndex()),
                        _r5 = !0 === Object(_featureset_support_sqlUtils_js__WEBPACK_IMPORTED_MODULE_10__["isSingleField"])(_t20) ? Object(_chunks_languageUtils_js__WEBPACK_IMPORTED_MODULE_1__["e"])(_e18) : "%%%%FIELDNAME";

                    a.push({
                      name: _r5,
                      expression: _t20
                    }), "%%%%FIELDNAME" === _r5 && (f = !0);
                  } else {
                    if (!(_e18 instanceof _Dictionary_js__WEBPACK_IMPORTED_MODULE_2__["default"])) return _.failDefferred("Illegal Value: GroupBy");
                    {
                      var _t21 = _e18.hasField("name") ? _e18.field("name") : "%%%%FIELDNAME",
                          _r6 = _e18.hasField("expression") ? _e18.field("expression") : "";

                      if ("%%%%FIELDNAME" === _t21 && (f = !0), !_t21) return _.failDefferred("Illegal Value: GroupBy");
                      a.push({
                        name: _t21,
                        expression: _core_sql_WhereClause_js__WEBPACK_IMPORTED_MODULE_9__["WhereClause"].create(_r6 || _t21, n.getFieldsIndex())
                      });
                    }
                  }
                }
              } catch (err) {
                _iterator11.e(err);
              } finally {
                _iterator11.f();
              }

              if (d = [], Object(_chunks_languageUtils_js__WEBPACK_IMPORTED_MODULE_1__["b"])(c[2])) d.push(c[2]);else if (Object(_chunks_languageUtils_js__WEBPACK_IMPORTED_MODULE_1__["h"])(c[2])) d = c[2];else if (Object(_chunks_languageUtils_js__WEBPACK_IMPORTED_MODULE_1__["o"])(c[2])) d = c[2].toArray();else {
                if (!(c[2] instanceof _Dictionary_js__WEBPACK_IMPORTED_MODULE_2__["default"])) return _.failDefferred("Illegal Value: GroupBy");
                d.push(c[2]);
              }

              var _iterator12 = _createForOfIteratorHelper(d),
                  _step12;

              try {
                for (_iterator12.s(); !(_step12 = _iterator12.n()).done;) {
                  var _e19 = _step12.value;
                  if (!(_e19 instanceof _Dictionary_js__WEBPACK_IMPORTED_MODULE_2__["default"])) return _.failDefferred("Illegal Value: GroupBy");
                  {
                    var _t22 = _e19.hasField("name") ? _e19.field("name") : "",
                        _r7 = _e19.hasField("statistic") ? _e19.field("statistic") : "",
                        i = _e19.hasField("expression") ? _e19.field("expression") : "";

                    if (!_t22 || !_r7 || !i) return _.failDefferred("Illegal Value: GroupBy");
                    s.push({
                      name: _t22,
                      statistic: _r7.toLowerCase(),
                      expression: _core_sql_WhereClause_js__WEBPACK_IMPORTED_MODULE_9__["WhereClause"].create(i, n.getFieldsIndex())
                    });
                  }
                }
              } catch (err) {
                _iterator12.e(err);
              } finally {
                _iterator12.f();
              }

              if (f) {
                var e = {};

                var _iterator13 = _createForOfIteratorHelper(n.fields),
                    _step13;

                try {
                  for (_iterator13.s(); !(_step13 = _iterator13.n()).done;) {
                    var _t17 = _step13.value;
                    e[_t17.name.toLowerCase()] = 1;
                  }
                } catch (err) {
                  _iterator13.e(err);
                } finally {
                  _iterator13.f();
                }

                var _iterator14 = _createForOfIteratorHelper(a),
                    _step14;

                try {
                  for (_iterator14.s(); !(_step14 = _iterator14.n()).done;) {
                    var _t18 = _step14.value;
                    "%%%%FIELDNAME" !== _t18.name && (e[_t18.name.toLowerCase()] = 1);
                  }
                } catch (err) {
                  _iterator14.e(err);
                } finally {
                  _iterator14.f();
                }

                var _iterator15 = _createForOfIteratorHelper(s),
                    _step15;

                try {
                  for (_iterator15.s(); !(_step15 = _iterator15.n()).done;) {
                    var _t19 = _step15.value;
                    "%%%%FIELDNAME" !== _t19.name && (e[_t19.name.toLowerCase()] = 1);
                  }
                } catch (err) {
                  _iterator15.e(err);
                } finally {
                  _iterator15.f();
                }

                var t = 0;

                var _iterator16 = _createForOfIteratorHelper(a),
                    _step16;

                try {
                  for (_iterator16.s(); !(_step16 = _iterator16.n()).done;) {
                    var _n12 = _step16.value;

                    if ("%%%%FIELDNAME" === _n12.name) {
                      for (; 1 === e["field_" + t.toString()];) {
                        t++;
                      }

                      e["field_" + t.toString()] = 1, _n12.name = "FIELD_" + t.toString();
                    }
                  }
                } catch (err) {
                  _iterator16.e(err);
                } finally {
                  _iterator16.f();
                }
              }

              var p = [];

              for (var _i6 = 0, _a2 = a; _i6 < _a2.length; _i6++) {
                var _e16 = _a2[_i6];
                p.push(V(_e16.expression, _, r));
              }

              for (var _i7 = 0, _s = s; _i7 < _s.length; _i7++) {
                var _e17 = _s[_i7];
                p.push(V(_e17.expression, _, r));
              }

              return p.length > 0 ? Object(_core_promiseUtils_js__WEBPACK_IMPORTED_MODULE_0__["all"])(p).then(function () {
                return Object(_core_promiseUtils_js__WEBPACK_IMPORTED_MODULE_0__["resolve"])(c[0].groupby(a, s));
              }) : Object(_core_promiseUtils_js__WEBPACK_IMPORTED_MODULE_0__["resolve"])(c[0].groupby(a, s));
            }) : _.failDefferred("Illegal Value: GroupBy");
          });
        }, _.signatures.push({
          name: "groupby",
          min: "3",
          max: "3"
        }), _.functions.distinct = function (r, s) {
          return _.standardFunctionAsync(r, s, function (s, f, c) {
            return Object(_chunks_languageUtils_js__WEBPACK_IMPORTED_MODULE_1__["z"])(c[0]) ? (Object(_chunks_languageUtils_js__WEBPACK_IMPORTED_MODULE_1__["p"])(c, 2, 2), c[0].load().then(function (n) {
              var a = [];
              var s = [];
              if (Object(_chunks_languageUtils_js__WEBPACK_IMPORTED_MODULE_1__["b"])(c[1])) s.push(c[1]);else if (c[1] instanceof _Dictionary_js__WEBPACK_IMPORTED_MODULE_2__["default"]) s.push(c[1]);else if (Object(_chunks_languageUtils_js__WEBPACK_IMPORTED_MODULE_1__["h"])(c[1])) s = c[1];else {
                if (!Object(_chunks_languageUtils_js__WEBPACK_IMPORTED_MODULE_1__["o"])(c[1])) return _.failDefferred("Illegal Value: GroupBy");
                s = c[1].toArray();
              }
              var f = !1;

              var _iterator17 = _createForOfIteratorHelper(s),
                  _step17;

              try {
                for (_iterator17.s(); !(_step17 = _iterator17.n()).done;) {
                  var _e21 = _step17.value;

                  if (Object(_chunks_languageUtils_js__WEBPACK_IMPORTED_MODULE_1__["b"])(_e21)) {
                    var _t25 = _core_sql_WhereClause_js__WEBPACK_IMPORTED_MODULE_9__["WhereClause"].create(Object(_chunks_languageUtils_js__WEBPACK_IMPORTED_MODULE_1__["e"])(_e21), n.getFieldsIndex()),
                        _r8 = !0 === Object(_featureset_support_sqlUtils_js__WEBPACK_IMPORTED_MODULE_10__["isSingleField"])(_t25) ? Object(_chunks_languageUtils_js__WEBPACK_IMPORTED_MODULE_1__["e"])(_e21) : "%%%%FIELDNAME";

                    a.push({
                      name: _r8,
                      expression: _t25
                    }), "%%%%FIELDNAME" === _r8 && (f = !0);
                  } else {
                    if (!(_e21 instanceof _Dictionary_js__WEBPACK_IMPORTED_MODULE_2__["default"])) return _.failDefferred("Illegal Value: GroupBy");
                    {
                      var _t26 = _e21.hasField("name") ? _e21.field("name") : "%%%%FIELDNAME",
                          _r9 = _e21.hasField("expression") ? _e21.field("expression") : "";

                      if ("%%%%FIELDNAME" === _t26 && (f = !0), !_t26) return _.failDefferred("Illegal Value: GroupBy");
                      a.push({
                        name: _t26,
                        expression: _core_sql_WhereClause_js__WEBPACK_IMPORTED_MODULE_9__["WhereClause"].create(_r9 || _t26, n.getFieldsIndex())
                      });
                    }
                  }
                }
              } catch (err) {
                _iterator17.e(err);
              } finally {
                _iterator17.f();
              }

              if (f) {
                var e = {};

                var _iterator18 = _createForOfIteratorHelper(n.fields),
                    _step18;

                try {
                  for (_iterator18.s(); !(_step18 = _iterator18.n()).done;) {
                    var _t23 = _step18.value;
                    e[_t23.name.toLowerCase()] = 1;
                  }
                } catch (err) {
                  _iterator18.e(err);
                } finally {
                  _iterator18.f();
                }

                var _iterator19 = _createForOfIteratorHelper(a),
                    _step19;

                try {
                  for (_iterator19.s(); !(_step19 = _iterator19.n()).done;) {
                    var _t24 = _step19.value;
                    "%%%%FIELDNAME" !== _t24.name && (e[_t24.name.toLowerCase()] = 1);
                  }
                } catch (err) {
                  _iterator19.e(err);
                } finally {
                  _iterator19.f();
                }

                var t = 0;

                var _iterator20 = _createForOfIteratorHelper(a),
                    _step20;

                try {
                  for (_iterator20.s(); !(_step20 = _iterator20.n()).done;) {
                    var _n13 = _step20.value;

                    if ("%%%%FIELDNAME" === _n13.name) {
                      for (; 1 === e["field_" + t.toString()];) {
                        t++;
                      }

                      e["field_" + t.toString()] = 1, _n13.name = "FIELD_" + t.toString();
                    }
                  }
                } catch (err) {
                  _iterator20.e(err);
                } finally {
                  _iterator20.f();
                }
              }

              var d = [];

              for (var _i8 = 0, _a3 = a; _i8 < _a3.length; _i8++) {
                var _e20 = _a3[_i8];
                d.push(V(_e20.expression, _, r));
              }

              return d.length > 0 ? Object(_core_promiseUtils_js__WEBPACK_IMPORTED_MODULE_0__["all"])(d).then(function () {
                return Object(_core_promiseUtils_js__WEBPACK_IMPORTED_MODULE_0__["resolve"])(c[0].groupby(a, []));
              }) : Object(_core_promiseUtils_js__WEBPACK_IMPORTED_MODULE_0__["resolve"])(c[0].groupby(a, []));
            })) : function (e, t, n, r) {
              if (1 === r.length) {
                if (Object(_chunks_languageUtils_js__WEBPACK_IMPORTED_MODULE_1__["h"])(r[0])) return Object(_fieldStats_js__WEBPACK_IMPORTED_MODULE_7__["calculateStat"])(e, r[0], -1);
                if (Object(_chunks_languageUtils_js__WEBPACK_IMPORTED_MODULE_1__["o"])(r[0])) return Object(_fieldStats_js__WEBPACK_IMPORTED_MODULE_7__["calculateStat"])(e, r[0].toArray(), -1);
              }

              return Object(_fieldStats_js__WEBPACK_IMPORTED_MODULE_7__["calculateStat"])(e, r, -1);
            }("distinct", 0, 0, c);
          });
        });
      }
      /***/

    }
  }]);
})();
//# sourceMappingURL=arcade-functions-featuresetbase-js-es5.js.map