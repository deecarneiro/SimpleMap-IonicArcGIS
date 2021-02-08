(function () {
  function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

  function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

  function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

  function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

  function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

  function _possibleConstructorReturn(self, call) { if (call && (typeof call === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

  function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

  function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

  function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["tasks-RouteTask-js"], {
    /***/
    "2dR5":
    /*!****************************************************************!*\
      !*** ./node_modules/@arcgis/core/tasks/support/RouteResult.js ***!
      \****************************************************************/

    /*! exports provided: default */

    /***/
    function dR5(module, __webpack_exports__, __webpack_require__) {
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


      var _core_Logger_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ../../core/Logger.js */
      "6S2I");
      /* harmony import */


      var _core_accessorSupport_ensureType_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ../../core/accessorSupport/ensureType.js */
      "zqDF");
      /* harmony import */


      var _core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ../../core/accessorSupport/decorators/property.js */
      "WbKI");
      /* harmony import */


      var _core_accessorSupport_decorators_subclass_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ../../core/accessorSupport/decorators/subclass.js */
      "04ZG");
      /* harmony import */


      var _core_urlUtils_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ../../core/urlUtils.js */
      "4EHJ");
      /* harmony import */


      var _core_uuid_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! ../../core/uuid.js */
      "ju1D");
      /* harmony import */


      var _portal_support_resourceExtension_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! ../../portal/support/resourceExtension.js */
      "9AIY");
      /* harmony import */


      var _core_JSONSupport_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! ../../core/JSONSupport.js */
      "ag7Y");
      /* harmony import */


      var _Graphic_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
      /*! ../../Graphic.js */
      "jWBI");
      /* harmony import */


      var _DirectionsFeatureSet_js__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
      /*! ./DirectionsFeatureSet.js */
      "eKLr");
      /*
      All material copyright ESRI, All Rights Reserved, unless otherwise specified.
      See https://js.arcgis.com/4.18/esri/copyright.txt for details.
      */


      var i = /*#__PURE__*/function (_core_JSONSupport_js_) {
        _inherits(i, _core_JSONSupport_js_);

        var _super = _createSuper(i);

        function i(o) {
          var _this;

          _classCallCheck(this, i);

          _this = _super.call(this, o), _this.directions = null, _this.route = null, _this.routeName = null, _this.stops = null;
          return _this;
        }

        return i;
      }(_core_JSONSupport_js__WEBPACK_IMPORTED_MODULE_9__["JSONSupport"]);

      Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_4__["property"])({
        type: _DirectionsFeatureSet_js__WEBPACK_IMPORTED_MODULE_11__["default"],
        json: {
          write: !0
        }
      })], i.prototype, "directions", void 0), Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_4__["property"])({
        type: _Graphic_js__WEBPACK_IMPORTED_MODULE_10__["default"],
        json: {
          write: !0
        }
      })], i.prototype, "route", void 0), Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_4__["property"])({
        type: String,
        json: {
          write: !0
        }
      })], i.prototype, "routeName", void 0), Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_4__["property"])({
        type: [_Graphic_js__WEBPACK_IMPORTED_MODULE_10__["default"]],
        json: {
          write: !0
        }
      })], i.prototype, "stops", void 0), i = Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_subclass_js__WEBPACK_IMPORTED_MODULE_5__["subclass"])("esri.tasks.support.RouteResult")], i);
      var u = i;
      /* harmony default export */

      __webpack_exports__["default"] = u;
      /***/
    },

    /***/
    "XAf0":
    /*!**************************************************************************!*\
      !*** ./node_modules/@arcgis/core/tasks/support/RouteResultsContainer.js ***!
      \**************************************************************************/

    /*! exports provided: default */

    /***/
    function XAf0(module, __webpack_exports__, __webpack_require__) {
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


      var _core_Logger_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ../../core/Logger.js */
      "6S2I");
      /* harmony import */


      var _core_accessorSupport_ensureType_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ../../core/accessorSupport/ensureType.js */
      "zqDF");
      /* harmony import */


      var _core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ../../core/accessorSupport/decorators/property.js */
      "WbKI");
      /* harmony import */


      var _core_accessorSupport_decorators_reader_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ../../core/accessorSupport/decorators/reader.js */
      "r88o");
      /* harmony import */


      var _core_accessorSupport_decorators_subclass_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ../../core/accessorSupport/decorators/subclass.js */
      "04ZG");
      /* harmony import */


      var _core_urlUtils_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! ../../core/urlUtils.js */
      "4EHJ");
      /* harmony import */


      var _core_uuid_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! ../../core/uuid.js */
      "ju1D");
      /* harmony import */


      var _portal_support_resourceExtension_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! ../../portal/support/resourceExtension.js */
      "9AIY");
      /* harmony import */


      var _core_JSONSupport_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
      /*! ../../core/JSONSupport.js */
      "ag7Y");
      /* harmony import */


      var _Graphic_js__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
      /*! ../../Graphic.js */
      "jWBI");
      /* harmony import */


      var _FeatureSet_js__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
      /*! ./FeatureSet.js */
      "8prj");
      /* harmony import */


      var _NAMessage_js__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
      /*! ./NAMessage.js */
      "54nt");
      /* harmony import */


      var _RouteResult_js__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(
      /*! ./RouteResult.js */
      "2dR5");
      /*
      All material copyright ESRI, All Rights Reserved, unless otherwise specified.
      See https://js.arcgis.com/4.18/esri/copyright.txt for details.
      */


      function n(r) {
        return r && _FeatureSet_js__WEBPACK_IMPORTED_MODULE_12__["default"].fromJSON(r).features.map(function (r) {
          return r;
        });
      }

      var u = /*#__PURE__*/function (_core_JSONSupport_js_2) {
        _inherits(u, _core_JSONSupport_js_2);

        var _super2 = _createSuper(u);

        function u(r) {
          var _this2;

          _classCallCheck(this, u);

          _this2 = _super2.call(this, r), _this2.barriers = null, _this2.messages = null, _this2.pointBarriers = null, _this2.polylineBarriers = null, _this2.polygonBarriers = null, _this2.routeResults = null;
          return _this2;
        }

        _createClass(u, [{
          key: "readPointBarriers",
          value: function readPointBarriers(r, o) {
            return n(o.barriers || o.pointBarriers);
          }
        }, {
          key: "readPolylineBarriers",
          value: function readPolylineBarriers(r) {
            return n(r);
          }
        }, {
          key: "readPolygonBarriers",
          value: function readPolygonBarriers(r) {
            return n(r);
          }
        }]);

        return u;
      }(_core_JSONSupport_js__WEBPACK_IMPORTED_MODULE_10__["JSONSupport"]);

      Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_4__["property"])({
        aliasOf: "pointBarriers"
      })], u.prototype, "barriers", void 0), Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_4__["property"])({
        type: [_NAMessage_js__WEBPACK_IMPORTED_MODULE_13__["default"]]
      })], u.prototype, "messages", void 0), Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_4__["property"])({
        type: [_Graphic_js__WEBPACK_IMPORTED_MODULE_11__["default"]]
      })], u.prototype, "pointBarriers", void 0), Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_reader_js__WEBPACK_IMPORTED_MODULE_5__["reader"])("pointBarriers", ["barriers", "pointBarriers"])], u.prototype, "readPointBarriers", null), Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_4__["property"])({
        type: [_Graphic_js__WEBPACK_IMPORTED_MODULE_11__["default"]]
      })], u.prototype, "polylineBarriers", void 0), Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_reader_js__WEBPACK_IMPORTED_MODULE_5__["reader"])("polylineBarriers")], u.prototype, "readPolylineBarriers", null), Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_4__["property"])({
        type: [_Graphic_js__WEBPACK_IMPORTED_MODULE_11__["default"]]
      })], u.prototype, "polygonBarriers", void 0), Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_reader_js__WEBPACK_IMPORTED_MODULE_5__["reader"])("polygonBarriers")], u.prototype, "readPolygonBarriers", null), Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_4__["property"])({
        type: [_RouteResult_js__WEBPACK_IMPORTED_MODULE_14__["default"]]
      })], u.prototype, "routeResults", void 0), u = Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_subclass_js__WEBPACK_IMPORTED_MODULE_6__["subclass"])("esri.tasks.support.RouteResultsContainer")], u);
      var c = u;
      /* harmony default export */

      __webpack_exports__["default"] = c;
      /***/
    },

    /***/
    "mL23":
    /*!******************************************************!*\
      !*** ./node_modules/@arcgis/core/tasks/RouteTask.js ***!
      \******************************************************/

    /*! exports provided: default */

    /***/
    function mL23(module, __webpack_exports__, __webpack_require__) {
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


      var _support_RouteResultsContainer_js__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(
      /*! ./support/RouteResultsContainer.js */
      "XAf0");
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
        stops: !0,
        travelMode: !0
      });

      var u = /*#__PURE__*/function (_Object) {
        _inherits(u, _Object);

        var _super3 = _createSuper(u);

        function u(e) {
          _classCallCheck(this, u);

          return _super3.call(this, e);
        }

        _createClass(u, [{
          key: "solve",
          value: function solve(e, r) {
            var _this3 = this;

            var i = [],
                a = [],
                n = {},
                p = {};
            return e.stops && e.stops.features && this._collectGeometries(e.stops.features, a, "stops.features", n), e.pointBarriers && e.pointBarriers.features && this._collectGeometries(e.pointBarriers.features, a, "pointBarriers.features", n), e.polylineBarriers && e.polylineBarriers.features && this._collectGeometries(e.polylineBarriers.features, a, "polylineBarriers.features", n), e.polygonBarriers && e.polygonBarriers.features && this._collectGeometries(e.polygonBarriers.features, a, "polygonBarriers.features", n), Object(_geometry_support_normalizeUtils_js__WEBPACK_IMPORTED_MODULE_11__["normalizeCentralMeridian"])(a).then(function (e) {
              for (var _r in n) {
                var t = n[_r];
                i.push(_r), p[_r] = e.slice(t[0], t[1]);
              }

              return _this3._isInputGeometryZAware(p, i) ? _this3.getServiceDescription() : Object(_core_promiseUtils_js__WEBPACK_IMPORTED_MODULE_9__["resolve"])({
                dontCheck: !0
              });
            }).then(function (t) {
              ("dontCheck" in t ? t.dontCheck : t.hasZ) || _this3._dropZValuesOffInputGeometry(p, i);

              var _loop = function _loop(_r2) {
                p[_r2].forEach(function (t, s) {
                  e.get(_r2)[s].geometry = t;
                });
              };

              for (var _r2 in p) {
                _loop(_r2);
              }

              var o = {
                query: _objectSpread(_objectSpread({}, _this3.parsedUrl.query), {}, {
                  f: "json"
                }, l.toQueryParams(e))
              };
              (_this3.requestOptions || r) && (o = _objectSpread(_objectSpread(_objectSpread({}, _this3.requestOptions), r), o));

              var a = _this3.parsedUrl.path,
                  n = "/solve",
                  _u = a.endsWith(n) ? a : a + n;

              return Object(_request_js__WEBPACK_IMPORTED_MODULE_10__["default"])(_u, o);
            }).then(function (e) {
              return _this3._handleSolveResponse(e);
            });
          }
        }, {
          key: "_collectGeometries",
          value: function _collectGeometries(e, r, t, s) {
            s[t] = [r.length, r.length + e.length], e.forEach(function (e) {
              r.push(e.geometry);
            });
          }
        }, {
          key: "_handleSolveResponse",
          value: function _handleSolveResponse(e) {
            var r = [],
                t = [],
                _e$data = e.data,
                _e$data$directions = _e$data.directions,
                s = _e$data$directions === void 0 ? [] : _e$data$directions,
                _e$data$routes = _e$data.routes;
            _e$data$routes = _e$data$routes === void 0 ? {} : _e$data$routes;
            var _e$data$routes$featur = _e$data$routes.features,
                o = _e$data$routes$featur === void 0 ? [] : _e$data$routes$featur,
                _e$data$routes$spatia = _e$data$routes.spatialReference,
                i = _e$data$routes$spatia === void 0 ? null : _e$data$routes$spatia,
                _e$data$stops = _e$data.stops;
            _e$data$stops = _e$data$stops === void 0 ? {} : _e$data$stops;
            var _e$data$stops$feature = _e$data$stops.features,
                a = _e$data$stops$feature === void 0 ? [] : _e$data$stops$feature,
                _e$data$stops$spatial = _e$data$stops.spatialReference,
                n = _e$data$stops$spatial === void 0 ? null : _e$data$stops$spatial,
                l = _e$data.barriers,
                _u2 = _e$data.polygonBarriers,
                c = _e$data.polylineBarriers,
                m = _e$data.messages,
                f = "esri.tasks.RouteTask.NULL_ROUTE_NAME";
            var h,
                y,
                d = !0;
            var g = o && i || a && n || l && l.spatialReference || _u2 && _u2.spatialReference || c && c.spatialReference;
            s.forEach(function (e) {
              r.push(h = e.routeName), t[h] = {
                directions: e
              };
            }), o.forEach(function (e) {
              -1 === r.indexOf(h = e.attributes.Name) && (r.push(h), t[h] = {}), e.geometry && (e.geometry.spatialReference = g), t[h].route = e;
            }), a.forEach(function (e) {
              y = e.attributes, -1 === r.indexOf(h = y.RouteName || f) && (r.push(h), t[h] = {}), h !== f && (d = !1), e.geometry && (e.geometry.spatialReference = g), null == t[h].stops && (t[h].stops = []), t[h].stops.push(e);
            }), a.length > 0 && !0 === d && (t[r[0]].stops = t[f].stops, delete t[f], r.splice(r.indexOf(f), 1));
            var B = r.map(function (e) {
              return t[e].routeName = e === f ? null : e, t[e];
            });
            return _support_RouteResultsContainer_js__WEBPACK_IMPORTED_MODULE_15__["default"].fromJSON({
              routeResults: B,
              pointBarriers: l,
              polygonBarriers: _u2,
              polylineBarriers: c,
              messages: m
            });
          }
        }]);

        return u;
      }(Object(_mixins_NAServiceDescription_js__WEBPACK_IMPORTED_MODULE_14__["NAServiceDescriptionMixin"])(_Task_js__WEBPACK_IMPORTED_MODULE_12__["default"]));

      u = Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_subclass_js__WEBPACK_IMPORTED_MODULE_5__["subclass"])("esri.tasks.RouteTask")], u);
      var c = u;
      /* harmony default export */

      __webpack_exports__["default"] = c;
      /***/
    }
  }]);
})();
//# sourceMappingURL=tasks-RouteTask-js-es5.js.map