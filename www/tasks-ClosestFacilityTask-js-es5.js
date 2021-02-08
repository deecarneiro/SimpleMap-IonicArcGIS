(function () {
  function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

  function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

  function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

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

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["tasks-ClosestFacilityTask-js"], {
    /***/
    "IuEW":
    /*!*******************************************************************************!*\
      !*** ./node_modules/@arcgis/core/tasks/support/ClosestFacilitySolveResult.js ***!
      \*******************************************************************************/

    /*! exports provided: default */

    /***/
    function IuEW(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony import */


      var _chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ../../chunks/tslib.es6.js */
      "pO5D");
      /* harmony import */


      var _core_has_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ../../core/has.js */
      "wSAH");
      /* harmony import */


      var _core_maybe_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ../../core/maybe.js */
      "srIe");
      /* harmony import */


      var _core_Logger_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ../../core/Logger.js */
      "6S2I");
      /* harmony import */


      var _core_accessorSupport_ensureType_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ../../core/accessorSupport/ensureType.js */
      "zqDF");
      /* harmony import */


      var _core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ../../core/accessorSupport/decorators/property.js */
      "WbKI");
      /* harmony import */


      var _core_accessorSupport_decorators_reader_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ../../core/accessorSupport/decorators/reader.js */
      "r88o");
      /* harmony import */


      var _core_accessorSupport_decorators_subclass_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! ../../core/accessorSupport/decorators/subclass.js */
      "04ZG");
      /* harmony import */


      var _core_urlUtils_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! ../../core/urlUtils.js */
      "4EHJ");
      /* harmony import */


      var _core_uuid_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! ../../core/uuid.js */
      "ju1D");
      /* harmony import */


      var _portal_support_resourceExtension_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
      /*! ../../portal/support/resourceExtension.js */
      "9AIY");
      /* harmony import */


      var _core_JSONSupport_js__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
      /*! ../../core/JSONSupport.js */
      "ag7Y");
      /* harmony import */


      var _geometry_SpatialReference_js__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
      /*! ../../geometry/SpatialReference.js */
      "WZb1");
      /* harmony import */


      var _geometry_Point_js__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
      /*! ../../geometry/Point.js */
      "SuVq");
      /* harmony import */


      var _geometry_Polygon_js__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(
      /*! ../../geometry/Polygon.js */
      "Ehki");
      /* harmony import */


      var _geometry_Polyline_js__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(
      /*! ../../geometry/Polyline.js */
      "UhwK");
      /* harmony import */


      var _geometry_js__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(
      /*! ../../geometry.js */
      "4GrV");
      /* harmony import */


      var _Graphic_js__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(
      /*! ../../Graphic.js */
      "jWBI");
      /* harmony import */


      var _FeatureSet_js__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(
      /*! ./FeatureSet.js */
      "8prj");
      /* harmony import */


      var _DirectionsFeatureSet_js__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(
      /*! ./DirectionsFeatureSet.js */
      "eKLr");
      /* harmony import */


      var _NAMessage_js__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(
      /*! ./NAMessage.js */
      "54nt");
      /*
      All material copyright ESRI, All Rights Reserved, unless otherwise specified.
      See https://js.arcgis.com/4.18/esri/copyright.txt for details.
      */


      function d(r) {
        return _FeatureSet_js__WEBPACK_IMPORTED_MODULE_18__["default"].fromJSON(r).features.map(function (r) {
          return r.geometry;
        });
      }

      var f = /*#__PURE__*/function (_core_JSONSupport_js_) {
        _inherits(f, _core_JSONSupport_js_);

        var _super = _createSuper(f);

        function f(r) {
          var _this;

          _classCallCheck(this, f);

          _this = _super.call(this, r), _this.directions = null, _this.facilities = null, _this.incidents = null, _this.messages = null, _this.pointBarriers = null, _this.polylineBarriers = null, _this.polygonBarriers = null, _this.routes = null;
          return _this;
        }

        _createClass(f, [{
          key: "readFacilities",
          value: function readFacilities(r) {
            return d(r);
          }
        }, {
          key: "readIncidents",
          value: function readIncidents(r) {
            return d(r);
          }
        }, {
          key: "readPointBarriers",
          value: function readPointBarriers(r, e) {
            return d(e.barriers);
          }
        }, {
          key: "readPolylineBarriers",
          value: function readPolylineBarriers(r) {
            return d(r);
          }
        }, {
          key: "readPolygonBarriers",
          value: function readPolygonBarriers(r) {
            return d(r);
          }
        }, {
          key: "readRoutes",
          value: function readRoutes(r) {
            return function (r) {
              return r.features.map(function (o) {
                var t = _geometry_SpatialReference_js__WEBPACK_IMPORTED_MODULE_12__["default"].fromJSON(r.spatialReference),
                    s = _Graphic_js__WEBPACK_IMPORTED_MODULE_17__["default"].fromJSON(o);

                return Object(_core_maybe_js__WEBPACK_IMPORTED_MODULE_2__["isSome"])(s.geometry) && (s.geometry.spatialReference = t), s;
              });
            }(r);
          }
        }]);

        return f;
      }(_core_JSONSupport_js__WEBPACK_IMPORTED_MODULE_11__["JSONSupport"]);

      Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_5__["property"])({
        type: [_DirectionsFeatureSet_js__WEBPACK_IMPORTED_MODULE_19__["default"]]
      })], f.prototype, "directions", void 0), Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_5__["property"])({
        type: [_geometry_Point_js__WEBPACK_IMPORTED_MODULE_13__["default"]]
      })], f.prototype, "facilities", void 0), Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_reader_js__WEBPACK_IMPORTED_MODULE_6__["reader"])("facilities")], f.prototype, "readFacilities", null), Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_5__["property"])({
        type: [_geometry_Point_js__WEBPACK_IMPORTED_MODULE_13__["default"]]
      })], f.prototype, "incidents", void 0), Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_reader_js__WEBPACK_IMPORTED_MODULE_6__["reader"])("incidents")], f.prototype, "readIncidents", null), Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_5__["property"])({
        type: [_NAMessage_js__WEBPACK_IMPORTED_MODULE_20__["default"]]
      })], f.prototype, "messages", void 0), Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_5__["property"])({
        type: [_geometry_Point_js__WEBPACK_IMPORTED_MODULE_13__["default"]]
      })], f.prototype, "pointBarriers", void 0), Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_reader_js__WEBPACK_IMPORTED_MODULE_6__["reader"])("pointBarriers", ["barriers"])], f.prototype, "readPointBarriers", null), Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_5__["property"])({
        type: [_geometry_Polyline_js__WEBPACK_IMPORTED_MODULE_15__["default"]]
      })], f.prototype, "polylineBarriers", void 0), Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_reader_js__WEBPACK_IMPORTED_MODULE_6__["reader"])("polylineBarriers")], f.prototype, "readPolylineBarriers", null), Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_5__["property"])({
        type: [_geometry_Polygon_js__WEBPACK_IMPORTED_MODULE_14__["default"]]
      })], f.prototype, "polygonBarriers", void 0), Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_reader_js__WEBPACK_IMPORTED_MODULE_6__["reader"])("polygonBarriers")], f.prototype, "readPolygonBarriers", null), Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_5__["property"])({
        type: [_Graphic_js__WEBPACK_IMPORTED_MODULE_17__["default"]]
      })], f.prototype, "routes", void 0), Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_reader_js__WEBPACK_IMPORTED_MODULE_6__["reader"])("routes")], f.prototype, "readRoutes", null), f = Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_subclass_js__WEBPACK_IMPORTED_MODULE_7__["subclass"])("esri.tasks.support.ClosestFacilitySolveResult")], f);
      var j = f;
      /* harmony default export */

      __webpack_exports__["default"] = j;
      /***/
    },

    /***/
    "t0D6":
    /*!****************************************************************!*\
      !*** ./node_modules/@arcgis/core/tasks/ClosestFacilityTask.js ***!
      \****************************************************************/

    /*! exports provided: default */

    /***/
    function t0D6(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony import */


      var _chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ../chunks/tslib.es6.js */
      "pO5D");
      /* harmony import */


      var _core_has_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ../core/has.js */
      "wSAH");
      /* harmony import */


      var _core_Logger_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ../core/Logger.js */
      "6S2I");
      /* harmony import */


      var _core_accessorSupport_ensureType_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ../core/accessorSupport/ensureType.js */
      "zqDF");
      /* harmony import */


      var _core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ../core/accessorSupport/decorators/property.js */
      "WbKI");
      /* harmony import */


      var _core_accessorSupport_decorators_subclass_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ../core/accessorSupport/decorators/subclass.js */
      "04ZG");
      /* harmony import */


      var _core_urlUtils_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ../core/urlUtils.js */
      "4EHJ");
      /* harmony import */


      var _core_uuid_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! ../core/uuid.js */
      "ju1D");
      /* harmony import */


      var _portal_support_resourceExtension_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! ../portal/support/resourceExtension.js */
      "9AIY");
      /* harmony import */


      var _core_promiseUtils_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! ../core/promiseUtils.js */
      "9MzC");
      /* harmony import */


      var _request_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
      /*! ../request.js */
      "Lqtk");
      /* harmony import */


      var _geometry_support_normalizeUtils_js__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
      /*! ../geometry/support/normalizeUtils.js */
      "qNUd");
      /* harmony import */


      var _Task_js__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
      /*! ./Task.js */
      "kglp");
      /* harmony import */


      var _core_queryUtils_js__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
      /*! ../core/queryUtils.js */
      "o6Le");
      /* harmony import */


      var _mixins_NAServiceDescription_js__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(
      /*! ./mixins/NAServiceDescription.js */
      "OvWd");
      /* harmony import */


      var _support_ClosestFacilitySolveResult_js__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(
      /*! ./support/ClosestFacilitySolveResult.js */
      "IuEW");
      /*
      All material copyright ESRI, All Rights Reserved, unless otherwise specified.
      See https://js.arcgis.com/4.18/esri/copyright.txt for details.
      */


      var l = Object(_core_queryUtils_js__WEBPACK_IMPORTED_MODULE_13__["createQueryParamsHelper"])({
        accumulateAttributes: {
          name: "accumulateAttributeNames"
        },
        attributeParameterValues: !0,
        directionsTimeAttribute: {
          name: "directionsTimeAttributeName"
        },
        impedanceAttribute: {
          name: "impedanceAttributeName"
        },
        facilities: !0,
        incidents: !0,
        outSpatialReference: {
          name: "outSR",
          getter: function getter(e) {
            return e.outSpatialReference.wkid;
          }
        },
        pointBarriers: {
          name: "barriers"
        },
        polylineBarriers: !0,
        polygonBarriers: !0,
        restrictionAttributes: {
          name: "restrictionAttributeNames"
        },
        returnPointBarriers: {
          name: "returnBarriers"
        },
        returnRoutes: {
          name: "returnCFRoutes"
        },
        travelMode: !0
      });

      var p = /*#__PURE__*/function (_Object) {
        _inherits(p, _Object);

        var _super2 = _createSuper(p);

        function p(e) {
          var _this2;

          _classCallCheck(this, p);

          _this2 = _super2.call(this, e), _this2.url = null;
          return _this2;
        }

        _createClass(p, [{
          key: "solve",
          value: function solve(e, r) {
            var _this3 = this;

            var t = [],
                a = [],
                n = {},
                c = {};
            return e.incidents && e.incidents.features && this._collectGeometries(e.incidents.features, a, "incidents.features", n), e.facilities && e.facilities.features && this._collectGeometries(e.facilities.features, a, "facilities.features", n), e.pointBarriers && e.pointBarriers.features && this._collectGeometries(e.pointBarriers.features, a, "pointBarriers.features", n), e.polylineBarriers && e.polylineBarriers.features && this._collectGeometries(e.polylineBarriers.features, a, "polylineBarriers.features", n), e.polygonBarriers && e.polygonBarriers.features && this._collectGeometries(e.polygonBarriers.features, a, "polygonBarriers.features", n), Object(_geometry_support_normalizeUtils_js__WEBPACK_IMPORTED_MODULE_11__["normalizeCentralMeridian"])(a).then(function (e) {
              for (var _r in n) {
                var s = n[_r];
                t.push(_r), c[_r] = e.slice(s[0], s[1]);
              }

              return _this3._isInputGeometryZAware(c, t) ? _this3.getServiceDescription() : Object(_core_promiseUtils_js__WEBPACK_IMPORTED_MODULE_9__["resolve"])({
                dontCheck: !0
              });
            }).then(function (s) {
              ("dontCheck" in s ? s.dontCheck : s.hasZ) || _this3._dropZValuesOffInputGeometry(c, t);

              var _loop = function _loop(_r2) {
                c[_r2].forEach(function (t, s) {
                  e.get(_r2)[s].geometry = t;
                });
              };

              for (var _r2 in c) {
                _loop(_r2);
              }

              var o = {
                query: _objectSpread(_objectSpread({}, _this3.parsedUrl.query), {}, {
                  f: "json"
                }, l.toQueryParams(e))
              };
              return (_this3.requestOptions || r) && (o = _objectSpread(_objectSpread(_objectSpread({}, _this3.requestOptions), r), o)), Object(_request_js__WEBPACK_IMPORTED_MODULE_10__["default"])("".concat(_this3.parsedUrl.path, "/solveClosestFacility"), o);
            }).then(function (e) {
              return _support_ClosestFacilitySolveResult_js__WEBPACK_IMPORTED_MODULE_15__["default"].fromJSON(e.data);
            });
          }
        }, {
          key: "_collectGeometries",
          value: function _collectGeometries(e, r, t, s) {
            s[t] = [r.length, r.length + e.length], e.forEach(function (e) {
              r.push(e.geometry);
            });
          }
        }]);

        return p;
      }(Object(_mixins_NAServiceDescription_js__WEBPACK_IMPORTED_MODULE_14__["NAServiceDescriptionMixin"])(_Task_js__WEBPACK_IMPORTED_MODULE_12__["default"]));

      Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_4__["property"])()], p.prototype, "url", void 0), p = Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_subclass_js__WEBPACK_IMPORTED_MODULE_5__["subclass"])("esri.tasks.ClosestFacilityTask")], p);
      var m = p;
      /* harmony default export */

      __webpack_exports__["default"] = m;
      /***/
    }
  }]);
})();
//# sourceMappingURL=tasks-ClosestFacilityTask-js-es5.js.map