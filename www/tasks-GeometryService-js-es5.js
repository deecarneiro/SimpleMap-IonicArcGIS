(function () {
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

  function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

  function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

  function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

  function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

  function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["tasks-GeometryService-js"], {
    /***/
    "+L3b":
    /*!**********************************************************************!*\
      !*** ./node_modules/@arcgis/core/rest/geometryService/trimExtend.js ***!
      \**********************************************************************/

    /*! exports provided: trimExtend */

    /***/
    function L3b(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "trimExtend", function () {
        return i;
      });
      /* harmony import */


      var _geometry_Polyline_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ../../geometry/Polyline.js */
      "UhwK");
      /* harmony import */


      var _geometry_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ../../geometry.js */
      "4GrV");
      /* harmony import */


      var _request_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ../../request.js */
      "Lqtk");
      /* harmony import */


      var _utils_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ../utils.js */
      "u3Ia");
      /* harmony import */


      var _tasks_operations_trimExtend_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ../../tasks/operations/trimExtend.js */
      "GeAh");
      /* harmony import */


      var _tasks_support_TrimExtendParameters_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ../../tasks/support/TrimExtendParameters.js */
      "5SEJ");
      /*
      All material copyright ESRI, All Rights Reserved, unless otherwise specified.
      See https://js.arcgis.com/4.18/esri/copyright.txt for details.
      */


      function i(_x, _x2, _x3) {
        return _i.apply(this, arguments);
      }
      /***/


      function _i() {
        _i = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(i, p, a) {
          var n, f, j, u, y;
          return regeneratorRuntime.wrap(function _callee$(_context) {
            while (1) {
              switch (_context.prev = _context.next) {
                case 0:
                  p = _tasks_support_TrimExtendParameters_js__WEBPACK_IMPORTED_MODULE_5__["default"].from(p);
                  n = Object(_tasks_operations_trimExtend_js__WEBPACK_IMPORTED_MODULE_4__["trimExtendToRESTParameters"])(p), f = Object(_utils_js__WEBPACK_IMPORTED_MODULE_3__["parseUrl"])(i), j = _objectSpread(_objectSpread({}, f.query), {}, {
                    f: "json"
                  }, n), u = p.sr, y = Object(_utils_js__WEBPACK_IMPORTED_MODULE_3__["asValidOptions"])(j, a);
                  return _context.abrupt("return", Object(_request_js__WEBPACK_IMPORTED_MODULE_2__["default"])(f.path + "/trimExtend", y).then(function (_ref) {
                    var r = _ref.data;
                    return (r.geometries || []).map(function (_ref2) {
                      var r = _ref2.paths;
                      return new _geometry_Polyline_js__WEBPACK_IMPORTED_MODULE_0__["default"]({
                        spatialReference: u,
                        paths: r
                      });
                    });
                  }));

                case 3:
                case "end":
                  return _context.stop();
              }
            }
          }, _callee);
        }));
        return _i.apply(this, arguments);
      }
    },

    /***/
    "0aJI":
    /*!*****************************************************************!*\
      !*** ./node_modules/@arcgis/core/rest/geometryService/union.js ***!
      \*****************************************************************/

    /*! exports provided: union */

    /***/
    function aJI(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "union", function () {
        return i;
      });
      /* harmony import */


      var _geometry_support_jsonUtils_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ../../geometry/support/jsonUtils.js */
      "qatw");
      /* harmony import */


      var _request_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ../../request.js */
      "Lqtk");
      /* harmony import */


      var _utils_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ../utils.js */
      "u3Ia");
      /* harmony import */


      var _utils_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./utils.js */
      "pXG8");
      /*
      All material copyright ESRI, All Rights Reserved, unless otherwise specified.
      See https://js.arcgis.com/4.18/esri/copyright.txt for details.
      */


      function i(_x4, _x5, _x6) {
        return _i2.apply(this, arguments);
      }
      /***/


      function _i2() {
        _i2 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee2(i, n, m) {
          var f, p, a, u;
          return regeneratorRuntime.wrap(function _callee2$(_context2) {
            while (1) {
              switch (_context2.prev = _context2.next) {
                case 0:
                  f = n[0].spatialReference, p = Object(_utils_js__WEBPACK_IMPORTED_MODULE_2__["parseUrl"])(i), a = _objectSpread(_objectSpread({}, p.query), {}, {
                    f: "json",
                    sr: JSON.stringify(f.toJSON()),
                    geometries: JSON.stringify(Object(_utils_js__WEBPACK_IMPORTED_MODULE_3__["encodeGeometries"])(n))
                  }), u = Object(_utils_js__WEBPACK_IMPORTED_MODULE_2__["asValidOptions"])(a, m);
                  return _context2.abrupt("return", Object(_request_js__WEBPACK_IMPORTED_MODULE_1__["default"])(p.path + "/union", u).then(function (_ref3) {
                    var e = _ref3.data;
                    return Object(_geometry_support_jsonUtils_js__WEBPACK_IMPORTED_MODULE_0__["fromJSON"])(e.geometry).set({
                      spatialReference: f
                    });
                  }));

                case 2:
                case "end":
                  return _context2.stop();
              }
            }
          }, _callee2);
        }));
        return _i2.apply(this, arguments);
      }
    },

    /***/
    "1E6V":
    /*!************************************************************!*\
      !*** ./node_modules/@arcgis/core/tasks/GeometryService.js ***!
      \************************************************************/

    /*! exports provided: default */

    /***/
    function E6V(module, __webpack_exports__, __webpack_require__) {
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


      var _Task_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! ./Task.js */
      "kglp");
      /* harmony import */


      var _rest_geometryService_areasAndLengths_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
      /*! ../rest/geometryService/areasAndLengths.js */
      "T9St");
      /* harmony import */


      var _rest_geometryService_autoComplete_js__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
      /*! ../rest/geometryService/autoComplete.js */
      "Cexc");
      /* harmony import */


      var _rest_geometryService_buffer_js__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
      /*! ../rest/geometryService/buffer.js */
      "vBrX");
      /* harmony import */


      var _rest_geometryService_convexHull_js__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
      /*! ../rest/geometryService/convexHull.js */
      "Giuk");
      /* harmony import */


      var _rest_geometryService_cut_js__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(
      /*! ../rest/geometryService/cut.js */
      "JhN6");
      /* harmony import */


      var _rest_geometryService_densify_js__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(
      /*! ../rest/geometryService/densify.js */
      "xC5X");
      /* harmony import */


      var _rest_geometryService_difference_js__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(
      /*! ../rest/geometryService/difference.js */
      "EhxB");
      /* harmony import */


      var _rest_geometryService_distance_js__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(
      /*! ../rest/geometryService/distance.js */
      "5USS");
      /* harmony import */


      var _rest_geometryService_units_js__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(
      /*! ../rest/geometryService/units.js */
      "vaBp");
      /* harmony import */


      var _rest_geometryService_fromGeoCoordinateString_js__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(
      /*! ../rest/geometryService/fromGeoCoordinateString.js */
      "bMVx");
      /* harmony import */


      var _rest_geometryService_generalize_js__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(
      /*! ../rest/geometryService/generalize.js */
      "NdSu");
      /* harmony import */


      var _rest_geometryService_intersect_js__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(
      /*! ../rest/geometryService/intersect.js */
      "vB4c");
      /* harmony import */


      var _rest_geometryService_labelPoints_js__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(
      /*! ../rest/geometryService/labelPoints.js */
      "q/vV");
      /* harmony import */


      var _rest_geometryService_lengths_js__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(
      /*! ../rest/geometryService/lengths.js */
      "whjZ");
      /* harmony import */


      var _rest_geometryService_offset_js__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(
      /*! ../rest/geometryService/offset.js */
      "EPdg");
      /* harmony import */


      var _rest_geometryService_project_js__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(
      /*! ../rest/geometryService/project.js */
      "rJHQ");
      /* harmony import */


      var _rest_geometryService_relation_js__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(
      /*! ../rest/geometryService/relation.js */
      "nkC/");
      /* harmony import */


      var _rest_geometryService_reshape_js__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(
      /*! ../rest/geometryService/reshape.js */
      "5Q/F");
      /* harmony import */


      var _rest_geometryService_simplify_js__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(
      /*! ../rest/geometryService/simplify.js */
      "1STP");
      /* harmony import */


      var _rest_geometryService_toGeoCoordinateString_js__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(
      /*! ../rest/geometryService/toGeoCoordinateString.js */
      "MSw1");
      /* harmony import */


      var _rest_geometryService_trimExtend_js__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(
      /*! ../rest/geometryService/trimExtend.js */
      "+L3b");
      /* harmony import */


      var _rest_geometryService_union_js__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(
      /*! ../rest/geometryService/union.js */
      "0aJI");
      /*
      All material copyright ESRI, All Rights Reserved, unless otherwise specified.
      See https://js.arcgis.com/4.18/esri/copyright.txt for details.
      */


      var C = /*#__PURE__*/function (_Task_js__WEBPACK_IMP) {
        _inherits(C, _Task_js__WEBPACK_IMP);

        var _super = _createSuper(C);

        function C(r) {
          var _this;

          _classCallCheck(this, C);

          _this = _super.call(this, r), _this.url = null;
          return _this;
        }

        _createClass(C, [{
          key: "areasAndLengths",
          value: function areasAndLengths(r, e) {
            return Object(_rest_geometryService_areasAndLengths_js__WEBPACK_IMPORTED_MODULE_10__["areasAndLengths"])(this.url, r, e);
          }
        }, {
          key: "autoComplete",
          value: function autoComplete(r, e, t) {
            return Object(_rest_geometryService_autoComplete_js__WEBPACK_IMPORTED_MODULE_11__["autoComplete"])(this.url, r, e, t);
          }
        }, {
          key: "buffer",
          value: function buffer(r, e) {
            return Object(_rest_geometryService_buffer_js__WEBPACK_IMPORTED_MODULE_12__["buffer"])(this.url, r, e);
          }
        }, {
          key: "convexHull",
          value: function convexHull(r, e) {
            return Object(_rest_geometryService_convexHull_js__WEBPACK_IMPORTED_MODULE_13__["convexHull"])(this.url, r, e);
          }
        }, {
          key: "cut",
          value: function cut(r, e, t) {
            return Object(_rest_geometryService_cut_js__WEBPACK_IMPORTED_MODULE_14__["cut"])(this.url, r, e, t);
          }
        }, {
          key: "densify",
          value: function densify(r, e) {
            return Object(_rest_geometryService_densify_js__WEBPACK_IMPORTED_MODULE_15__["densify"])(this.url, r, e);
          }
        }, {
          key: "difference",
          value: function difference(r, e, t) {
            return Object(_rest_geometryService_difference_js__WEBPACK_IMPORTED_MODULE_16__["difference"])(this.url, r, e, t);
          }
        }, {
          key: "distance",
          value: function distance(r, e) {
            return Object(_rest_geometryService_distance_js__WEBPACK_IMPORTED_MODULE_17__["distance"])(this.url, r, e);
          }
        }, {
          key: "fromGeoCoordinateString",
          value: function fromGeoCoordinateString(r, e) {
            return Object(_rest_geometryService_fromGeoCoordinateString_js__WEBPACK_IMPORTED_MODULE_19__["fromGeoCoordinateString"])(this.url, r, e);
          }
        }, {
          key: "generalize",
          value: function generalize(r, e) {
            return Object(_rest_geometryService_generalize_js__WEBPACK_IMPORTED_MODULE_20__["generalize"])(this.url, r, e);
          }
        }, {
          key: "intersect",
          value: function intersect(r, e, t) {
            return Object(_rest_geometryService_intersect_js__WEBPACK_IMPORTED_MODULE_21__["intersect"])(this.url, r, e, t);
          }
        }, {
          key: "labelPoints",
          value: function labelPoints(r, e) {
            return Object(_rest_geometryService_labelPoints_js__WEBPACK_IMPORTED_MODULE_22__["labelPoints"])(this.url, r, e);
          }
        }, {
          key: "lengths",
          value: function lengths(r, e) {
            return Object(_rest_geometryService_lengths_js__WEBPACK_IMPORTED_MODULE_23__["lengths"])(this.url, r, e);
          }
        }, {
          key: "offset",
          value: function offset(r, e) {
            return Object(_rest_geometryService_offset_js__WEBPACK_IMPORTED_MODULE_24__["offset"])(this.url, r, e);
          }
        }, {
          key: "project",
          value: function project(r, e) {
            return Object(_rest_geometryService_project_js__WEBPACK_IMPORTED_MODULE_25__["project"])(this.url, r, e);
          }
        }, {
          key: "relation",
          value: function relation(r, e) {
            return Object(_rest_geometryService_relation_js__WEBPACK_IMPORTED_MODULE_26__["relation"])(this.url, r, e);
          }
        }, {
          key: "reshape",
          value: function reshape(r, e, t) {
            return Object(_rest_geometryService_reshape_js__WEBPACK_IMPORTED_MODULE_27__["reshape"])(this.url, r, e, t);
          }
        }, {
          key: "simplify",
          value: function simplify(r, e) {
            return Object(_rest_geometryService_simplify_js__WEBPACK_IMPORTED_MODULE_28__["simplify"])(this.url, r, e);
          }
        }, {
          key: "toGeoCoordinateString",
          value: function toGeoCoordinateString(r, e) {
            return Object(_rest_geometryService_toGeoCoordinateString_js__WEBPACK_IMPORTED_MODULE_29__["toGeoCoordinateString"])(this.url, r, e);
          }
        }, {
          key: "trimExtend",
          value: function trimExtend(r, e) {
            return Object(_rest_geometryService_trimExtend_js__WEBPACK_IMPORTED_MODULE_30__["trimExtend"])(this.url, r, e);
          }
        }, {
          key: "union",
          value: function union(r, e) {
            return Object(_rest_geometryService_union_js__WEBPACK_IMPORTED_MODULE_31__["union"])(this.url, r, e);
          }
        }]);

        return C;
      }(_Task_js__WEBPACK_IMPORTED_MODULE_9__["default"]);

      C.UNIT_METER = 9001, C.UNIT_GERMAN_METER = 9031, C.UNIT_FOOT = 9002, C.UNIT_SURVEY_FOOT = 9003, C.UNIT_CLARKE_FOOT = 9005, C.UNIT_FATHOM = 9014, C.UNIT_NAUTICAL_MILE = 9030, C.UNIT_SURVEY_CHAIN = 9033, C.UNIT_SURVEY_LINK = 9034, C.UNIT_SURVEY_MILE = 9035, C.UNIT_KILOMETER = 9036, C.UNIT_CLARKE_YARD = 9037, C.UNIT_CLARKE_CHAIN = 9038, C.UNIT_CLARKE_LINK = 9039, C.UNIT_SEARS_YARD = 9040, C.UNIT_SEARS_FOOT = 9041, C.UNIT_SEARS_CHAIN = 9042, C.UNIT_SEARS_LINK = 9043, C.UNIT_BENOIT_1895A_YARD = 9050, C.UNIT_BENOIT_1895A_FOOT = 9051, C.UNIT_BENOIT_1895A_CHAIN = 9052, C.UNIT_BENOIT_1895A_LINK = 9053, C.UNIT_BENOIT_1895B_YARD = 9060, C.UNIT_BENOIT_1895B_FOOT = 9061, C.UNIT_BENOIT_1895B_CHAIN = 9062, C.UNIT_BENOIT_1895B_LINK = 9063, C.UNIT_INDIAN_FOOT = 9080, C.UNIT_INDIAN_1937_FOOT = 9081, C.UNIT_INDIAN_1962_FOOT = 9082, C.UNIT_INDIAN_1975_FOOT = 9083, C.UNIT_INDIAN_YARD = 9084, C.UNIT_INDIAN_1937_YARD = 9085, C.UNIT_INDIAN_1962_YARD = 9086, C.UNIT_INDIAN_1975_YARD = 9087, C.UNIT_FOOT_1865 = 9070, C.UNIT_RADIAN = 9101, C.UNIT_DEGREE = 9102, C.UNIT_ARCMINUTE = 9103, C.UNIT_ARCSECOND = 9104, C.UNIT_GRAD = 9105, C.UNIT_GON = 9106, C.UNIT_MICRORADIAN = 9109, C.UNIT_ARCMINUTE_CENTESIMAL = 9112, C.UNIT_ARCSECOND_CENTESIMAL = 9113, C.UNIT_MIL6400 = 9114, C.UNIT_BRITISH_1936_FOOT = 9095, C.UNIT_GOLDCOAST_FOOT = 9094, C.UNIT_INTERNATIONAL_CHAIN = 109003, C.UNIT_INTERNATIONAL_LINK = 109004, C.UNIT_INTERNATIONAL_YARD = 109001, C.UNIT_STATUTE_MILE = 9093, C.UNIT_SURVEY_YARD = 109002, C.UNIT_50KILOMETER_LENGTH = 109030, C.UNIT_150KILOMETER_LENGTH = 109031, C.UNIT_DECIMETER = 109005, C.UNIT_CENTIMETER = 109006, C.UNIT_MILLIMETER = 109007, C.UNIT_INTERNATIONAL_INCH = 109008, C.UNIT_US_SURVEY_INCH = 109009, C.UNIT_INTERNATIONAL_ROD = 109010, C.UNIT_US_SURVEY_ROD = 109011, C.UNIT_US_NAUTICAL_MILE = 109012, C.UNIT_UK_NAUTICAL_MILE = 109013, C.UNIT_SQUARE_INCHES = "esriSquareInches", C.UNIT_SQUARE_FEET = "esriSquareFeet", C.UNIT_SQUARE_YARDS = "esriSquareYards", C.UNIT_ACRES = "esriAcres", C.UNIT_SQUARE_MILES = "esriSquareMiles", C.UNIT_SQUARE_MILLIMETERS = "esriSquareMillimeters", C.UNIT_SQUARE_CENTIMETERS = "esriSquareCentimeters", C.UNIT_SQUARE_DECIMETERS = "esriSquareDecimeters", C.UNIT_SQUARE_METERS = "esriSquareMeters", C.UNIT_ARES = "esriAres", C.UNIT_HECTARES = "esriHectares", C.UNIT_SQUARE_KILOMETERS = "esriSquareKilometers", Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_4__["property"])()], C.prototype, "url", void 0), C = Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_subclass_js__WEBPACK_IMPORTED_MODULE_5__["subclass"])("esri.tasks.GeometryService")], C);
      var g = C;
      /* harmony default export */

      __webpack_exports__["default"] = g;
      /***/
    },

    /***/
    "1STP":
    /*!********************************************************************!*\
      !*** ./node_modules/@arcgis/core/rest/geometryService/simplify.js ***!
      \********************************************************************/

    /*! exports provided: simplify */

    /***/
    function STP(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "simplify", function () {
        return o;
      });
      /* harmony import */


      var _core_urlUtils_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ../../core/urlUtils.js */
      "4EHJ");
      /* harmony import */


      var _geometry_support_jsonUtils_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ../../geometry/support/jsonUtils.js */
      "qatw");
      /* harmony import */


      var _request_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ../../request.js */
      "Lqtk");
      /* harmony import */


      var _utils_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./utils.js */
      "pXG8");
      /*
      All material copyright ESRI, All Rights Reserved, unless otherwise specified.
      See https://js.arcgis.com/4.18/esri/copyright.txt for details.
      */


      function o(_x7, _x8, _x9) {
        return _o.apply(this, arguments);
      }
      /***/


      function _o() {
        _o = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee3(o, m, f) {
          var n, p, a, u, _yield$Object, y;

          return regeneratorRuntime.wrap(function _callee3$(_context3) {
            while (1) {
              switch (_context3.prev = _context3.next) {
                case 0:
                  n = "string" == typeof o ? Object(_core_urlUtils_js__WEBPACK_IMPORTED_MODULE_0__["urlToObject"])(o) : o;
                  p = m[0].spatialReference;
                  a = Object(_geometry_support_jsonUtils_js__WEBPACK_IMPORTED_MODULE_1__["getJsonType"])(m[0]);
                  u = _objectSpread(_objectSpread({}, f), {}, {
                    query: _objectSpread(_objectSpread({}, n.query), {}, {
                      f: "json",
                      sr: p.wkid ? p.wkid : JSON.stringify(p),
                      geometries: JSON.stringify(Object(_utils_js__WEBPACK_IMPORTED_MODULE_3__["encodeGeometries"])(m))
                    })
                  });
                  _context3.next = 6;
                  return Object(_request_js__WEBPACK_IMPORTED_MODULE_2__["default"])(n.path + "/simplify", u);

                case 6:
                  _yield$Object = _context3.sent;
                  y = _yield$Object.data;
                  return _context3.abrupt("return", Object(_utils_js__WEBPACK_IMPORTED_MODULE_3__["decodeGeometries"])(y.geometries, a, p));

                case 9:
                case "end":
                  return _context3.stop();
              }
            }
          }, _callee3);
        }));
        return _o.apply(this, arguments);
      }
    },

    /***/
    "1lHr":
    /*!**********************************************************************!*\
      !*** ./node_modules/@arcgis/core/tasks/support/LengthsParameters.js ***!
      \**********************************************************************/

    /*! exports provided: default */

    /***/
    function lHr(module, __webpack_exports__, __webpack_require__) {
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


      var _geometry_Polyline_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
      /*! ../../geometry/Polyline.js */
      "UhwK");
      /* harmony import */


      var _geometry_support_jsonUtils_js__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
      /*! ../../geometry/support/jsonUtils.js */
      "qatw");
      /* harmony import */


      var _geometry_js__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
      /*! ../../geometry.js */
      "4GrV");
      /*
      All material copyright ESRI, All Rights Reserved, unless otherwise specified.
      See https://js.arcgis.com/4.18/esri/copyright.txt for details.
      */


      var l = /*#__PURE__*/function (_core_JSONSupport_js_) {
        _inherits(l, _core_JSONSupport_js_);

        var _super2 = _createSuper(l);

        function l(o) {
          var _this2;

          _classCallCheck(this, l);

          _this2 = _super2.call(this, o), _this2.calculationType = null, _this2.geodesic = null, _this2.lengthUnit = null, _this2.polylines = null;
          return _this2;
        }

        return l;
      }(_core_JSONSupport_js__WEBPACK_IMPORTED_MODULE_9__["JSONSupport"]);

      Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_4__["property"])({
        type: String,
        json: {
          write: !0
        }
      })], l.prototype, "calculationType", void 0), Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_4__["property"])({
        type: Boolean,
        json: {
          write: !0
        }
      })], l.prototype, "geodesic", void 0), Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_4__["property"])({
        json: {
          write: !0
        }
      })], l.prototype, "lengthUnit", void 0), Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_4__["property"])({
        type: [_geometry_Polyline_js__WEBPACK_IMPORTED_MODULE_10__["default"]],
        json: {
          read: {
            reader: function reader(o) {
              return o ? o.map(function (o) {
                return Object(_geometry_support_jsonUtils_js__WEBPACK_IMPORTED_MODULE_11__["fromJSON"])(o);
              }) : null;
            }
          },
          write: {
            writer: function writer(o, r) {
              r.polylines = o.map(function (o) {
                return o.toJSON();
              });
            }
          }
        }
      })], l.prototype, "polylines", void 0), l = Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_subclass_js__WEBPACK_IMPORTED_MODULE_5__["subclass"])("esri.tasks.support.LengthsParameters")], l), l.from = Object(_core_accessorSupport_ensureType_js__WEBPACK_IMPORTED_MODULE_3__["ensureType"])(l);
      var n = l;
      /* harmony default export */

      __webpack_exports__["default"] = n;
      /***/
    },

    /***/
    "2jrz":
    /*!***************************************************************!*\
      !*** ./node_modules/@arcgis/core/tasks/operations/lengths.js ***!
      \***************************************************************/

    /*! exports provided: lengthsToRESTParameters */

    /***/
    function jrz(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "lengthsToRESTParameters", function () {
        return o;
      });
      /* harmony import */


      var _core_jsonMap_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ../../core/jsonMap.js */
      "+opI");
      /*
      All material copyright ESRI, All Rights Reserved, unless otherwise specified.
      See https://js.arcgis.com/4.18/esri/copyright.txt for details.
      */


      var n = new _core_jsonMap_js__WEBPACK_IMPORTED_MODULE_0__["JSONMap"]({
        preserveShape: "preserve-shape"
      });

      function o(e) {
        var _e$toJSON = e.toJSON(),
            o = _e$toJSON.polylines,
            t = _e$toJSON.lengthUnit,
            i = _e$toJSON.geodesic,
            s = _e$toJSON.calculationType,
            r = {};

        r.polylines = JSON.stringify(o);
        var l = e.polylines[0].spatialReference;
        return r.sr = l.wkid ? l.wkid : JSON.stringify(l.toJSON()), t && (r.lengthUnit = t), i && (r.geodesic = i), s && (r.calculationType = n.toJSON(s)), r;
      }
      /***/

    },

    /***/
    "5Q/F":
    /*!*******************************************************************!*\
      !*** ./node_modules/@arcgis/core/rest/geometryService/reshape.js ***!
      \*******************************************************************/

    /*! exports provided: reshape */

    /***/
    function QF(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "reshape", function () {
        return i;
      });
      /* harmony import */


      var _geometry_support_jsonUtils_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ../../geometry/support/jsonUtils.js */
      "qatw");
      /* harmony import */


      var _request_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ../../request.js */
      "Lqtk");
      /* harmony import */


      var _utils_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ../utils.js */
      "u3Ia");
      /*
      All material copyright ESRI, All Rights Reserved, unless otherwise specified.
      See https://js.arcgis.com/4.18/esri/copyright.txt for details.
      */


      function i(_x10, _x11, _x12, _x13) {
        return _i3.apply(this, arguments);
      }
      /***/


      function _i3() {
        _i3 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee4(i, n, p, a) {
          var f, m, y, g;
          return regeneratorRuntime.wrap(function _callee4$(_context4) {
            while (1) {
              switch (_context4.prev = _context4.next) {
                case 0:
                  f = n.spatialReference, m = Object(_utils_js__WEBPACK_IMPORTED_MODULE_2__["parseUrl"])(i), y = _objectSpread(_objectSpread({}, m.query), {}, {
                    f: "json",
                    sr: JSON.stringify(f.toJSON()),
                    target: JSON.stringify({
                      geometryType: Object(_geometry_support_jsonUtils_js__WEBPACK_IMPORTED_MODULE_0__["getJsonType"])(n),
                      geometry: n.toJSON()
                    }),
                    reshaper: JSON.stringify(p.toJSON())
                  }), g = Object(_utils_js__WEBPACK_IMPORTED_MODULE_2__["asValidOptions"])(y, a);
                  return _context4.abrupt("return", Object(_request_js__WEBPACK_IMPORTED_MODULE_1__["default"])(m.path + "/reshape", g).then(function (_ref4) {
                    var e = _ref4.data;
                    return Object(_geometry_support_jsonUtils_js__WEBPACK_IMPORTED_MODULE_0__["fromJSON"])(e.geometry).set({
                      spatialReference: f
                    });
                  }));

                case 2:
                case "end":
                  return _context4.stop();
              }
            }
          }, _callee4);
        }));
        return _i3.apply(this, arguments);
      }
    },

    /***/
    "5SEJ":
    /*!*************************************************************************!*\
      !*** ./node_modules/@arcgis/core/tasks/support/TrimExtendParameters.js ***!
      \*************************************************************************/

    /*! exports provided: default */

    /***/
    function SEJ(module, __webpack_exports__, __webpack_require__) {
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


      var _geometry_Polyline_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
      /*! ../../geometry/Polyline.js */
      "UhwK");
      /* harmony import */


      var _geometry_support_jsonUtils_js__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
      /*! ../../geometry/support/jsonUtils.js */
      "qatw");
      /* harmony import */


      var _geometry_js__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
      /*! ../../geometry.js */
      "4GrV");
      /*
      All material copyright ESRI, All Rights Reserved, unless otherwise specified.
      See https://js.arcgis.com/4.18/esri/copyright.txt for details.
      */


      var m = /*#__PURE__*/function (_core_JSONSupport_js_2) {
        _inherits(m, _core_JSONSupport_js_2);

        var _super3 = _createSuper(m);

        function m(r) {
          var _this3;

          _classCallCheck(this, m);

          _this3 = _super3.call(this, r), _this3.extendHow = "default-curve-extension", _this3.polylines = null, _this3.trimExtendTo = null;
          return _this3;
        }

        return m;
      }(_core_JSONSupport_js__WEBPACK_IMPORTED_MODULE_9__["JSONSupport"]);

      Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_4__["property"])({
        type: String,
        json: {
          write: !0
        }
      })], m.prototype, "extendHow", void 0), Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_4__["property"])({
        type: [_geometry_Polyline_js__WEBPACK_IMPORTED_MODULE_10__["default"]],
        json: {
          read: {
            reader: function reader(r) {
              return r ? r.map(function (r) {
                return Object(_geometry_support_jsonUtils_js__WEBPACK_IMPORTED_MODULE_11__["fromJSON"])(r);
              }) : null;
            }
          },
          write: {
            writer: function writer(r, o) {
              o.polylines = r.map(function (r) {
                return r.toJSON();
              });
            }
          }
        }
      })], m.prototype, "polylines", void 0), Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_4__["property"])({
        json: {
          read: {
            reader: function reader(r) {
              return r ? Object(_geometry_support_jsonUtils_js__WEBPACK_IMPORTED_MODULE_11__["fromJSON"])(r) : null;
            }
          },
          write: {
            writer: function writer(r, o) {
              o.trimExtendTo = r.toJSON();
            }
          }
        }
      })], m.prototype, "trimExtendTo", void 0), m = Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_subclass_js__WEBPACK_IMPORTED_MODULE_5__["subclass"])("esri.tasks.support.TrimExtendParameters")], m), m.from = Object(_core_accessorSupport_ensureType_js__WEBPACK_IMPORTED_MODULE_3__["ensureType"])(m);
      var n = m;
      /* harmony default export */

      __webpack_exports__["default"] = n;
      /***/
    },

    /***/
    "5USS":
    /*!********************************************************************!*\
      !*** ./node_modules/@arcgis/core/rest/geometryService/distance.js ***!
      \********************************************************************/

    /*! exports provided: distance */

    /***/
    function USS(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "distance", function () {
        return r;
      });
      /* harmony import */


      var _request_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ../../request.js */
      "Lqtk");
      /* harmony import */


      var _utils_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ../utils.js */
      "u3Ia");
      /*
      All material copyright ESRI, All Rights Reserved, unless otherwise specified.
      See https://js.arcgis.com/4.18/esri/copyright.txt for details.
      */


      function r(_x14, _x15, _x16) {
        return _r.apply(this, arguments);
      }
      /***/


      function _r() {
        _r = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee5(r, s, e) {
          var a, i, c;
          return regeneratorRuntime.wrap(function _callee5$(_context5) {
            while (1) {
              switch (_context5.prev = _context5.next) {
                case 0:
                  a = Object(_utils_js__WEBPACK_IMPORTED_MODULE_1__["parseUrl"])(r), i = _objectSpread(_objectSpread({}, a.query), {}, {
                    f: "json"
                  }, s.toJSON()), c = Object(_utils_js__WEBPACK_IMPORTED_MODULE_1__["asValidOptions"])(i, e);
                  return _context5.abrupt("return", Object(_request_js__WEBPACK_IMPORTED_MODULE_0__["default"])(a.path + "/distance", c).then(function (_ref5) {
                    var t = _ref5.data;
                    return t && t.distance;
                  }));

                case 2:
                case "end":
                  return _context5.stop();
              }
            }
          }, _callee5);
        }));
        return _r.apply(this, arguments);
      }
    },

    /***/
    "Cexc":
    /*!************************************************************************!*\
      !*** ./node_modules/@arcgis/core/rest/geometryService/autoComplete.js ***!
      \************************************************************************/

    /*! exports provided: autoComplete */

    /***/
    function Cexc(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "autoComplete", function () {
        return i;
      });
      /* harmony import */


      var _geometry_Polygon_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ../../geometry/Polygon.js */
      "Ehki");
      /* harmony import */


      var _geometry_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ../../geometry.js */
      "4GrV");
      /* harmony import */


      var _request_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ../../request.js */
      "Lqtk");
      /* harmony import */


      var _utils_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ../utils.js */
      "u3Ia");
      /* harmony import */


      var _utils_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ./utils.js */
      "pXG8");
      /*
      All material copyright ESRI, All Rights Reserved, unless otherwise specified.
      See https://js.arcgis.com/4.18/esri/copyright.txt for details.
      */


      function i(_x17, _x18, _x19, _x20) {
        return _i4.apply(this, arguments);
      }
      /***/


      function _i4() {
        _i4 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee6(i, n, m, p) {
          var g, f, a, y;
          return regeneratorRuntime.wrap(function _callee6$(_context6) {
            while (1) {
              switch (_context6.prev = _context6.next) {
                case 0:
                  g = n[0].spatialReference, f = Object(_utils_js__WEBPACK_IMPORTED_MODULE_3__["parseUrl"])(i), a = _objectSpread(_objectSpread({}, f.query), {}, {
                    f: "json",
                    sr: JSON.stringify(g.toJSON()),
                    polygons: JSON.stringify(Object(_utils_js__WEBPACK_IMPORTED_MODULE_4__["encodeGeometries"])(n).geometries),
                    polylines: JSON.stringify(Object(_utils_js__WEBPACK_IMPORTED_MODULE_4__["encodeGeometries"])(m).geometries)
                  }), y = Object(_utils_js__WEBPACK_IMPORTED_MODULE_3__["asValidOptions"])(a, p);
                  return _context6.abrupt("return", Object(_request_js__WEBPACK_IMPORTED_MODULE_2__["default"])(f.path + "/autoComplete", y).then(function (_ref6) {
                    var t = _ref6.data;
                    return (t.geometries || []).map(function (_ref7) {
                      var t = _ref7.rings;
                      return new _geometry_Polygon_js__WEBPACK_IMPORTED_MODULE_0__["default"]({
                        spatialReference: g,
                        rings: t
                      });
                    });
                  }));

                case 2:
                case "end":
                  return _context6.stop();
              }
            }
          }, _callee6);
        }));
        return _i4.apply(this, arguments);
      }
    },

    /***/
    "EPdg":
    /*!******************************************************************!*\
      !*** ./node_modules/@arcgis/core/rest/geometryService/offset.js ***!
      \******************************************************************/

    /*! exports provided: offset */

    /***/
    function EPdg(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "offset", function () {
        return m;
      });
      /* harmony import */


      var _geometry_support_jsonUtils_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ../../geometry/support/jsonUtils.js */
      "qatw");
      /* harmony import */


      var _request_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ../../request.js */
      "Lqtk");
      /* harmony import */


      var _utils_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ../utils.js */
      "u3Ia");
      /* harmony import */


      var _tasks_operations_offset_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ../../tasks/operations/offset.js */
      "xazm");
      /* harmony import */


      var _tasks_support_OffsetParameters_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ../../tasks/support/OffsetParameters.js */
      "jksI");
      /*
      All material copyright ESRI, All Rights Reserved, unless otherwise specified.
      See https://js.arcgis.com/4.18/esri/copyright.txt for details.
      */


      function m(_x21, _x22, _x23) {
        return _m.apply(this, arguments);
      }
      /***/


      function _m() {
        _m = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee7(m, p, a) {
          var i, n, j, u, c;
          return regeneratorRuntime.wrap(function _callee7$(_context7) {
            while (1) {
              switch (_context7.prev = _context7.next) {
                case 0:
                  p = _tasks_support_OffsetParameters_js__WEBPACK_IMPORTED_MODULE_4__["default"].from(p);
                  i = Object(_tasks_operations_offset_js__WEBPACK_IMPORTED_MODULE_3__["offsetToRESTParameters"])(p), n = Object(_utils_js__WEBPACK_IMPORTED_MODULE_2__["parseUrl"])(m), j = _objectSpread(_objectSpread({}, n.query), {}, {
                    f: "json"
                  }, i), u = p.geometries[0].spatialReference, c = Object(_utils_js__WEBPACK_IMPORTED_MODULE_2__["asValidOptions"])(j, a);
                  return _context7.abrupt("return", Object(_request_js__WEBPACK_IMPORTED_MODULE_1__["default"])(n.path + "/offset", c).then(function (_ref8) {
                    var e = _ref8.data;
                    return (e.geometries || []).map(function (e) {
                      return Object(_geometry_support_jsonUtils_js__WEBPACK_IMPORTED_MODULE_0__["fromJSON"])(e).set({
                        spatialReference: u
                      });
                    });
                  }));

                case 3:
                case "end":
                  return _context7.stop();
              }
            }
          }, _callee7);
        }));
        return _m.apply(this, arguments);
      }
    },

    /***/
    "EhxB":
    /*!**********************************************************************!*\
      !*** ./node_modules/@arcgis/core/rest/geometryService/difference.js ***!
      \**********************************************************************/

    /*! exports provided: difference */

    /***/
    function EhxB(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "difference", function () {
        return i;
      });
      /* harmony import */


      var _geometry_support_jsonUtils_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ../../geometry/support/jsonUtils.js */
      "qatw");
      /* harmony import */


      var _request_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ../../request.js */
      "Lqtk");
      /* harmony import */


      var _utils_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ../utils.js */
      "u3Ia");
      /* harmony import */


      var _utils_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./utils.js */
      "pXG8");
      /*
      All material copyright ESRI, All Rights Reserved, unless otherwise specified.
      See https://js.arcgis.com/4.18/esri/copyright.txt for details.
      */


      function i(_x24, _x25, _x26, _x27) {
        return _i5.apply(this, arguments);
      }
      /***/


      function _i5() {
        _i5 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee8(i, m, n, f) {
          var p, y, a;
          return regeneratorRuntime.wrap(function _callee8$(_context8) {
            while (1) {
              switch (_context8.prev = _context8.next) {
                case 0:
                  p = m[0].spatialReference, y = Object(_utils_js__WEBPACK_IMPORTED_MODULE_2__["parseUrl"])(i);
                  a = {
                    query: _objectSpread(_objectSpread({}, y.query), {}, {
                      f: "json",
                      sr: JSON.stringify(p.toJSON()),
                      geometries: JSON.stringify(Object(_utils_js__WEBPACK_IMPORTED_MODULE_3__["encodeGeometries"])(m)),
                      geometry: JSON.stringify({
                        geometryType: Object(_geometry_support_jsonUtils_js__WEBPACK_IMPORTED_MODULE_0__["getJsonType"])(n),
                        geometry: n.toJSON()
                      })
                    })
                  };
                  return _context8.abrupt("return", (f && (a = _objectSpread(_objectSpread({}, f), a)), Object(_request_js__WEBPACK_IMPORTED_MODULE_1__["default"])(y.path + "/difference", a).then(function (_ref9) {
                    var e = _ref9.data;
                    return (e.geometries || []).map(function (e) {
                      return Object(_geometry_support_jsonUtils_js__WEBPACK_IMPORTED_MODULE_0__["fromJSON"])(e).set({
                        spatialReference: p
                      });
                    });
                  })));

                case 3:
                case "end":
                  return _context8.stop();
              }
            }
          }, _callee8);
        }));
        return _i5.apply(this, arguments);
      }
    },

    /***/
    "Fpx9":
    /*!******************************************************************!*\
      !*** ./node_modules/@arcgis/core/tasks/operations/generalize.js ***!
      \******************************************************************/

    /*! exports provided: generalizeToRESTParameters */

    /***/
    function Fpx9(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "generalizeToRESTParameters", function () {
        return r;
      });
      /* harmony import */


      var _core_jsonMap_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ../../core/jsonMap.js */
      "+opI");
      /* harmony import */


      var _geometry_support_jsonUtils_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ../../geometry/support/jsonUtils.js */
      "qatw");
      /*
      All material copyright ESRI, All Rights Reserved, unless otherwise specified.
      See https://js.arcgis.com/4.18/esri/copyright.txt for details.
      */


      var i = new _core_jsonMap_js__WEBPACK_IMPORTED_MODULE_0__["JSONMap"]({
        109006: "centimeters",
        9102: "decimal-degrees",
        109005: "decimeters",
        9002: "feet",
        109009: "inches",
        9036: "kilometers",
        9001: "meters",
        9035: "miles",
        109007: "millimeters",
        109012: "nautical-miles",
        9096: "yards"
      });

      function r(e) {
        var _e$toJSON2 = e.toJSON(),
            r = _e$toJSON2.geometries,
            s = _e$toJSON2.deviationUnit,
            o = _e$toJSON2.maxDeviation,
            n = {
          maxDeviation: o
        };

        return r && r.length && (n.geometries = JSON.stringify({
          geometryType: Object(_geometry_support_jsonUtils_js__WEBPACK_IMPORTED_MODULE_1__["getJsonType"])(r[0]),
          geometries: r
        }), n.sr = JSON.stringify(r[0].spatialReference)), i.write(s, n, "deviationUnit"), n;
      }
      /***/

    },

    /***/
    "GeAh":
    /*!******************************************************************!*\
      !*** ./node_modules/@arcgis/core/tasks/operations/trimExtend.js ***!
      \******************************************************************/

    /*! exports provided: trimExtendToRESTParameters */

    /***/
    function GeAh(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "trimExtendToRESTParameters", function () {
        return n;
      });
      /* harmony import */


      var _core_jsonMap_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ../../core/jsonMap.js */
      "+opI");
      /*
      All material copyright ESRI, All Rights Reserved, unless otherwise specified.
      See https://js.arcgis.com/4.18/esri/copyright.txt for details.
      */


      var t = new _core_jsonMap_js__WEBPACK_IMPORTED_MODULE_0__["JSONMap"]({
        0: "default-curve-extension",
        1: "relocate-ends",
        2: "keep-end-attributes",
        4: "no-end-attributes",
        8: "no-extend-at-from",
        16: "no-extend-at-to"
      });

      function n(e) {
        var _e$toJSON3 = e.toJSON(),
            n = _e$toJSON3.extendHow,
            o = _e$toJSON3.polylines,
            r = _e$toJSON3.trimExtendTo,
            i = {};

        return i.extendHow = t.toJSON(n), o && o.length && (i.polylines = JSON.stringify(o), i.sr = JSON.stringify(o[0].spatialReference)), r && (i.trimExtendTo = JSON.stringify(r)), i;
      }
      /***/

    },

    /***/
    "Giuk":
    /*!**********************************************************************!*\
      !*** ./node_modules/@arcgis/core/rest/geometryService/convexHull.js ***!
      \**********************************************************************/

    /*! exports provided: convexHull */

    /***/
    function Giuk(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "convexHull", function () {
        return i;
      });
      /* harmony import */


      var _geometry_support_jsonUtils_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ../../geometry/support/jsonUtils.js */
      "qatw");
      /* harmony import */


      var _request_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ../../request.js */
      "Lqtk");
      /* harmony import */


      var _utils_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ../utils.js */
      "u3Ia");
      /* harmony import */


      var _utils_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./utils.js */
      "pXG8");
      /*
      All material copyright ESRI, All Rights Reserved, unless otherwise specified.
      See https://js.arcgis.com/4.18/esri/copyright.txt for details.
      */


      function i(_x28, _x29, _x30) {
        return _i6.apply(this, arguments);
      }
      /***/


      function _i6() {
        _i6 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee9(i, n, m) {
          var f, p, a, u;
          return regeneratorRuntime.wrap(function _callee9$(_context9) {
            while (1) {
              switch (_context9.prev = _context9.next) {
                case 0:
                  f = n[0].spatialReference, p = Object(_utils_js__WEBPACK_IMPORTED_MODULE_2__["parseUrl"])(i), a = _objectSpread(_objectSpread({}, p.query), {}, {
                    f: "json",
                    sr: JSON.stringify(f.toJSON()),
                    geometries: JSON.stringify(Object(_utils_js__WEBPACK_IMPORTED_MODULE_3__["encodeGeometries"])(n))
                  }), u = Object(_utils_js__WEBPACK_IMPORTED_MODULE_2__["asValidOptions"])(a, m);
                  return _context9.abrupt("return", Object(_request_js__WEBPACK_IMPORTED_MODULE_1__["default"])(p.path + "/convexHull", u).then(function (_ref10) {
                    var e = _ref10.data;
                    return Object(_geometry_support_jsonUtils_js__WEBPACK_IMPORTED_MODULE_0__["fromJSON"])(e.geometry).set({
                      spatialReference: f
                    });
                  }));

                case 2:
                case "end":
                  return _context9.stop();
              }
            }
          }, _callee9);
        }));
        return _i6.apply(this, arguments);
      }
    },

    /***/
    "JhN6":
    /*!***************************************************************!*\
      !*** ./node_modules/@arcgis/core/rest/geometryService/cut.js ***!
      \***************************************************************/

    /*! exports provided: cut */

    /***/
    function JhN6(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "cut", function () {
        return o;
      });
      /* harmony import */


      var _geometry_support_jsonUtils_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ../../geometry/support/jsonUtils.js */
      "qatw");
      /* harmony import */


      var _geometry_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ../../geometry.js */
      "4GrV");
      /* harmony import */


      var _request_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ../../request.js */
      "Lqtk");
      /* harmony import */


      var _utils_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ../utils.js */
      "u3Ia");
      /*
      All material copyright ESRI, All Rights Reserved, unless otherwise specified.
      See https://js.arcgis.com/4.18/esri/copyright.txt for details.
      */


      function o(_x31, _x32, _x33, _x34) {
        return _o2.apply(this, arguments);
      }
      /***/


      function _o2() {
        _o2 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee10(o, i, n, m) {
          var a, p, u, c, _c$data, f, _c$data$geometries, g;

          return regeneratorRuntime.wrap(function _callee10$(_context10) {
            while (1) {
              switch (_context10.prev = _context10.next) {
                case 0:
                  a = Object(_utils_js__WEBPACK_IMPORTED_MODULE_3__["parseUrl"])(o);
                  p = i[0].spatialReference;
                  u = _objectSpread(_objectSpread({}, m), {}, {
                    query: _objectSpread(_objectSpread({}, a.query), {}, {
                      f: "json",
                      sr: JSON.stringify(p),
                      target: JSON.stringify({
                        geometryType: Object(_geometry_support_jsonUtils_js__WEBPACK_IMPORTED_MODULE_0__["getJsonType"])(i[0]),
                        geometries: i
                      }),
                      cutter: JSON.stringify(n)
                    })
                  });
                  _context10.next = 5;
                  return Object(_request_js__WEBPACK_IMPORTED_MODULE_2__["default"])(a.path + "/cut", u);

                case 5:
                  c = _context10.sent;
                  _c$data = c.data;
                  f = _c$data.cutIndexes;
                  _c$data$geometries = _c$data.geometries;
                  g = _c$data$geometries === void 0 ? [] : _c$data$geometries;
                  return _context10.abrupt("return", {
                    cutIndexes: f,
                    geometries: g.map(function (e) {
                      var r = Object(_geometry_support_jsonUtils_js__WEBPACK_IMPORTED_MODULE_0__["fromJSON"])(e);
                      return r.spatialReference = p, r;
                    })
                  });

                case 11:
                case "end":
                  return _context10.stop();
              }
            }
          }, _callee10);
        }));
        return _o2.apply(this, arguments);
      }
    },

    /***/
    "MSw1":
    /*!*********************************************************************************!*\
      !*** ./node_modules/@arcgis/core/rest/geometryService/toGeoCoordinateString.js ***!
      \*********************************************************************************/

    /*! exports provided: toGeoCoordinateString */

    /***/
    function MSw1(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "toGeoCoordinateString", function () {
        return t;
      });
      /* harmony import */


      var _request_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ../../request.js */
      "Lqtk");
      /* harmony import */


      var _utils_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ../utils.js */
      "u3Ia");
      /* harmony import */


      var _units_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./units.js */
      "vaBp");
      /*
      All material copyright ESRI, All Rights Reserved, unless otherwise specified.
      See https://js.arcgis.com/4.18/esri/copyright.txt for details.
      */


      function t(_x35, _x36, _x37) {
        return _t.apply(this, arguments);
      }
      /***/


      function _t() {
        _t = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee11(t, i, e) {
          var c, d, a, u, f;
          return regeneratorRuntime.wrap(function _callee11$(_context11) {
            while (1) {
              switch (_context11.prev = _context11.next) {
                case 0:
                  c = {};
                  null != i.sr && "object" == typeof i.sr ? c.sr = i.sr.wkid || JSON.stringify(i.sr) : c.sr = i.sr, c.coordinates = JSON.stringify(i.coordinates);
                  d = i.conversionType || "mgrs";
                  c.conversionType = _units_js__WEBPACK_IMPORTED_MODULE_2__["conversionTypeKebabDict"].toJSON(d), c.conversionMode = i.conversionMode, c.numOfDigits = i.numOfDigits, c.rounding = i.rounding, c.addSpaces = i.addSpaces;
                  a = Object(_utils_js__WEBPACK_IMPORTED_MODULE_1__["parseUrl"])(t), u = _objectSpread(_objectSpread({}, a.query), {}, {
                    f: "json"
                  }, c), f = Object(_utils_js__WEBPACK_IMPORTED_MODULE_1__["asValidOptions"])(u, e);
                  return _context11.abrupt("return", Object(_request_js__WEBPACK_IMPORTED_MODULE_0__["default"])(a.path + "/toGeoCoordinateString", f).then(function (_ref11) {
                    var o = _ref11.data;
                    return o.strings;
                  }));

                case 6:
                case "end":
                  return _context11.stop();
              }
            }
          }, _callee11);
        }));
        return _t.apply(this, arguments);
      }
    },

    /***/
    "NdSu":
    /*!**********************************************************************!*\
      !*** ./node_modules/@arcgis/core/rest/geometryService/generalize.js ***!
      \**********************************************************************/

    /*! exports provided: generalize */

    /***/
    function NdSu(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "generalize", function () {
        return i;
      });
      /* harmony import */


      var _geometry_support_jsonUtils_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ../../geometry/support/jsonUtils.js */
      "qatw");
      /* harmony import */


      var _request_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ../../request.js */
      "Lqtk");
      /* harmony import */


      var _utils_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ../utils.js */
      "u3Ia");
      /* harmony import */


      var _tasks_operations_generalize_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ../../tasks/operations/generalize.js */
      "Fpx9");
      /* harmony import */


      var _tasks_support_GeneralizeParameters_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ../../tasks/support/GeneralizeParameters.js */
      "UH+o");
      /*
      All material copyright ESRI, All Rights Reserved, unless otherwise specified.
      See https://js.arcgis.com/4.18/esri/copyright.txt for details.
      */


      function i(_x38, _x39, _x40) {
        return _i7.apply(this, arguments);
      }
      /***/


      function _i7() {
        _i7 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee12(i, m, p) {
          var n, f, j, l, u, c;
          return regeneratorRuntime.wrap(function _callee12$(_context12) {
            while (1) {
              switch (_context12.prev = _context12.next) {
                case 0:
                  n = (m = _tasks_support_GeneralizeParameters_js__WEBPACK_IMPORTED_MODULE_4__["default"].from(m)).toJSON(), f = Object(_tasks_operations_generalize_js__WEBPACK_IMPORTED_MODULE_3__["generalizeToRESTParameters"])(m), j = Object(_utils_js__WEBPACK_IMPORTED_MODULE_2__["parseUrl"])(i), l = _objectSpread(_objectSpread({}, j.query), {}, {
                    f: "json"
                  }, f), u = n.geometries[0].spatialReference, c = Object(_utils_js__WEBPACK_IMPORTED_MODULE_2__["asValidOptions"])(l, p);
                  return _context12.abrupt("return", Object(_request_js__WEBPACK_IMPORTED_MODULE_1__["default"])(j.path + "/generalize", c).then(function (_ref12) {
                    var r = _ref12.data;
                    return (r.geometries || []).map(function (r) {
                      return Object(_geometry_support_jsonUtils_js__WEBPACK_IMPORTED_MODULE_0__["fromJSON"])(r).set({
                        spatialReference: u
                      });
                    });
                  }));

                case 2:
                case "end":
                  return _context12.stop();
              }
            }
          }, _callee12);
        }));
        return _i7.apply(this, arguments);
      }
    },

    /***/
    "Nvf0":
    /*!***********************************************************************!*\
      !*** ./node_modules/@arcgis/core/tasks/support/RelationParameters.js ***!
      \***********************************************************************/

    /*! exports provided: default */

    /***/
    function Nvf0(module, __webpack_exports__, __webpack_require__) {
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


      var _geometry_support_jsonUtils_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
      /*! ../../geometry/support/jsonUtils.js */
      "qatw");
      /*
      All material copyright ESRI, All Rights Reserved, unless otherwise specified.
      See https://js.arcgis.com/4.18/esri/copyright.txt for details.
      */


      var i = /*#__PURE__*/function (_core_JSONSupport_js_3) {
        _inherits(i, _core_JSONSupport_js_3);

        var _super4 = _createSuper(i);

        function i(r) {
          var _this4;

          _classCallCheck(this, i);

          _this4 = _super4.call(this, r), _this4.geometries1 = null, _this4.geometries2 = null, _this4.relation = null, _this4.relationParameter = null;
          return _this4;
        }

        return i;
      }(_core_JSONSupport_js__WEBPACK_IMPORTED_MODULE_9__["JSONSupport"]);

      Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_4__["property"])({
        json: {
          read: {
            reader: function reader(r) {
              return r ? r.map(function (r) {
                return Object(_geometry_support_jsonUtils_js__WEBPACK_IMPORTED_MODULE_10__["fromJSON"])(r);
              }) : null;
            }
          },
          write: {
            writer: function writer(r, o) {
              o.geometries1 = r.map(function (r) {
                return r.toJSON();
              });
            }
          }
        }
      })], i.prototype, "geometries1", void 0), Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_4__["property"])({
        json: {
          read: {
            reader: function reader(r) {
              return r ? r.map(function (r) {
                return Object(_geometry_support_jsonUtils_js__WEBPACK_IMPORTED_MODULE_10__["fromJSON"])(r);
              }) : null;
            }
          },
          write: {
            writer: function writer(r, o) {
              o.geometries2 = r.map(function (r) {
                return r.toJSON();
              });
            }
          }
        }
      })], i.prototype, "geometries2", void 0), Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_4__["property"])({
        type: String,
        json: {
          write: !0
        }
      })], i.prototype, "relation", void 0), Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_4__["property"])({
        type: String,
        json: {
          write: !0
        }
      })], i.prototype, "relationParameter", void 0), i = Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_subclass_js__WEBPACK_IMPORTED_MODULE_5__["subclass"])("esri.tasks.support.RelationParameters")], i), i.from = Object(_core_accessorSupport_ensureType_js__WEBPACK_IMPORTED_MODULE_3__["ensureType"])(i);
      var a = i;
      /* harmony default export */

      __webpack_exports__["default"] = a;
      /***/
    },

    /***/
    "T9St":
    /*!***************************************************************************!*\
      !*** ./node_modules/@arcgis/core/rest/geometryService/areasAndLengths.js ***!
      \***************************************************************************/

    /*! exports provided: areasAndLengths */

    /***/
    function T9St(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "areasAndLengths", function () {
        return o;
      });
      /* harmony import */


      var _request_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ../../request.js */
      "Lqtk");
      /* harmony import */


      var _utils_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ../utils.js */
      "u3Ia");
      /*
      All material copyright ESRI, All Rights Reserved, unless otherwise specified.
      See https://js.arcgis.com/4.18/esri/copyright.txt for details.
      */


      function o(_x41, _x42, _x43) {
        return _o3.apply(this, arguments);
      }
      /***/


      function _o3() {
        _o3 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee13(o, s, e) {
          var a, u, f;
          return regeneratorRuntime.wrap(function _callee13$(_context13) {
            while (1) {
              switch (_context13.prev = _context13.next) {
                case 0:
                  a = Object(_utils_js__WEBPACK_IMPORTED_MODULE_1__["parseUrl"])(o), u = _objectSpread(_objectSpread({}, a.query), {}, {
                    f: "json"
                  }, s.toJSON()), f = Object(_utils_js__WEBPACK_IMPORTED_MODULE_1__["asValidOptions"])(u, e);
                  return _context13.abrupt("return", Object(_request_js__WEBPACK_IMPORTED_MODULE_0__["default"])(a.path + "/areasAndLengths", f).then(function (t) {
                    return t.data;
                  }));

                case 2:
                case "end":
                  return _context13.stop();
              }
            }
          }, _callee13);
        }));
        return _o3.apply(this, arguments);
      }
    },

    /***/
    "UH+o":
    /*!*************************************************************************!*\
      !*** ./node_modules/@arcgis/core/tasks/support/GeneralizeParameters.js ***!
      \*************************************************************************/

    /*! exports provided: default */

    /***/
    function UHO(module, __webpack_exports__, __webpack_require__) {
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


      var _geometry_support_jsonUtils_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
      /*! ../../geometry/support/jsonUtils.js */
      "qatw");
      /*
      All material copyright ESRI, All Rights Reserved, unless otherwise specified.
      See https://js.arcgis.com/4.18/esri/copyright.txt for details.
      */


      var p = /*#__PURE__*/function (_core_JSONSupport_js_4) {
        _inherits(p, _core_JSONSupport_js_4);

        var _super5 = _createSuper(p);

        function p(r) {
          var _this5;

          _classCallCheck(this, p);

          _this5 = _super5.call(this, r), _this5.deviationUnit = null, _this5.geometries = null, _this5.maxDeviation = null;
          return _this5;
        }

        return p;
      }(_core_JSONSupport_js__WEBPACK_IMPORTED_MODULE_9__["JSONSupport"]);

      Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_4__["property"])({
        type: String,
        json: {
          write: !0
        }
      })], p.prototype, "deviationUnit", void 0), Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_4__["property"])({
        json: {
          read: {
            reader: function reader(r) {
              return r ? r.map(function (r) {
                return Object(_geometry_support_jsonUtils_js__WEBPACK_IMPORTED_MODULE_10__["fromJSON"])(r);
              }) : null;
            }
          },
          write: {
            writer: function writer(r, o) {
              o.geometries = r.map(function (r) {
                return r.toJSON();
              });
            }
          }
        }
      })], p.prototype, "geometries", void 0), Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_4__["property"])({
        type: Number,
        json: {
          write: !0
        }
      })], p.prototype, "maxDeviation", void 0), p = Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_subclass_js__WEBPACK_IMPORTED_MODULE_5__["subclass"])("esri.tasks.support.GeneralizeParameters")], p), p.from = Object(_core_accessorSupport_ensureType_js__WEBPACK_IMPORTED_MODULE_3__["ensureType"])(p);
      var m = p;
      /* harmony default export */

      __webpack_exports__["default"] = m;
      /***/
    },

    /***/
    "bMVx":
    /*!***********************************************************************************!*\
      !*** ./node_modules/@arcgis/core/rest/geometryService/fromGeoCoordinateString.js ***!
      \***********************************************************************************/

    /*! exports provided: fromGeoCoordinateString */

    /***/
    function bMVx(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "fromGeoCoordinateString", function () {
        return t;
      });
      /* harmony import */


      var _request_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ../../request.js */
      "Lqtk");
      /* harmony import */


      var _utils_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ../utils.js */
      "u3Ia");
      /* harmony import */


      var _units_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./units.js */
      "vaBp");
      /*
      All material copyright ESRI, All Rights Reserved, unless otherwise specified.
      See https://js.arcgis.com/4.18/esri/copyright.txt for details.
      */


      function t(_x44, _x45, _x46) {
        return _t2.apply(this, arguments);
      }
      /***/


      function _t2() {
        _t2 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee14(t, i, e) {
          var c, f, m, p, u;
          return regeneratorRuntime.wrap(function _callee14$(_context14) {
            while (1) {
              switch (_context14.prev = _context14.next) {
                case 0:
                  c = {};
                  null != i.sr && "object" == typeof i.sr ? c.sr = i.sr.wkid || JSON.stringify(i.sr) : c.sr = i.sr, c.strings = JSON.stringify(i.strings);
                  f = i.conversionType || "mgrs";
                  c.conversionType = _units_js__WEBPACK_IMPORTED_MODULE_2__["conversionTypeKebabDict"].toJSON(f), c.conversionMode = i.conversionMode;
                  m = Object(_utils_js__WEBPACK_IMPORTED_MODULE_1__["parseUrl"])(t), p = _objectSpread(_objectSpread({}, m.query), {}, {
                    f: "json"
                  }, c), u = Object(_utils_js__WEBPACK_IMPORTED_MODULE_1__["asValidOptions"])(p, e);
                  return _context14.abrupt("return", Object(_request_js__WEBPACK_IMPORTED_MODULE_0__["default"])(m.path + "/fromGeoCoordinateString", u).then(function (_ref13) {
                    var o = _ref13.data;
                    return o.coordinates;
                  }));

                case 6:
                case "end":
                  return _context14.stop();
              }
            }
          }, _callee14);
        }));
        return _t2.apply(this, arguments);
      }
    },

    /***/
    "fQPN":
    /*!****************************************************************!*\
      !*** ./node_modules/@arcgis/core/tasks/operations/relation.js ***!
      \****************************************************************/

    /*! exports provided: relationToRESTParameters */

    /***/
    function fQPN(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "relationToRESTParameters", function () {
        return o;
      });
      /* harmony import */


      var _core_jsonMap_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ../../core/jsonMap.js */
      "+opI");
      /* harmony import */


      var _geometry_support_jsonUtils_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ../../geometry/support/jsonUtils.js */
      "qatw");
      /*
      All material copyright ESRI, All Rights Reserved, unless otherwise specified.
      See https://js.arcgis.com/4.18/esri/copyright.txt for details.
      */


      var t = new _core_jsonMap_js__WEBPACK_IMPORTED_MODULE_0__["JSONMap"]({
        esriGeometryRelationCross: "cross",
        esriGeometryRelationDisjoint: "disjoint",
        esriGeometryRelationIn: "in",
        esriGeometryRelationInteriorIntersection: "interior-intersection",
        esriGeometryRelationIntersection: "intersection",
        esriGeometryRelationLineCoincidence: "line-coincidence",
        esriGeometryRelationLineTouch: "line-touch",
        esriGeometryRelationOverlap: "overlap",
        esriGeometryRelationPointTouch: "point-touch",
        esriGeometryRelationTouch: "touch",
        esriGeometryRelationWithin: "within",
        esriGeometryRelationRelation: "relation"
      });

      function o(e) {
        var _e$toJSON4 = e.toJSON(),
            o = _e$toJSON4.geometries1,
            r = _e$toJSON4.geometries2,
            n = _e$toJSON4.relation,
            s = _e$toJSON4.relationParameter,
            a = {};

        if (o && o.length) {
          a.geometries1 = JSON.stringify({
            geometryType: Object(_geometry_support_jsonUtils_js__WEBPACK_IMPORTED_MODULE_1__["getJsonType"])(o[0]),
            geometries: o
          });
          var _e = o[0].spatialReference;
          a.sr = _e.wkid ? _e.wkid : JSON.stringify(_e);
        }

        return r && r.length > 0 && (a.geometries2 = JSON.stringify({
          geometryType: Object(_geometry_support_jsonUtils_js__WEBPACK_IMPORTED_MODULE_1__["getJsonType"])(r[0]),
          geometries: r
        })), n && (a.relation = t.toJSON(n)), s && (a.relationParam = s), a;
      }
      /***/

    },

    /***/
    "jksI":
    /*!*********************************************************************!*\
      !*** ./node_modules/@arcgis/core/tasks/support/OffsetParameters.js ***!
      \*********************************************************************/

    /*! exports provided: default */

    /***/
    function jksI(module, __webpack_exports__, __webpack_require__) {
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


      var _geometry_support_jsonUtils_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
      /*! ../../geometry/support/jsonUtils.js */
      "qatw");
      /*
      All material copyright ESRI, All Rights Reserved, unless otherwise specified.
      See https://js.arcgis.com/4.18/esri/copyright.txt for details.
      */


      var i = /*#__PURE__*/function (_core_JSONSupport_js_5) {
        _inherits(i, _core_JSONSupport_js_5);

        var _super6 = _createSuper(i);

        function i(o) {
          var _this6;

          _classCallCheck(this, i);

          _this6 = _super6.call(this, o), _this6.bevelRatio = null, _this6.geometries = null, _this6.offsetDistance = null, _this6.offsetHow = null, _this6.offsetUnit = null;
          return _this6;
        }

        return i;
      }(_core_JSONSupport_js__WEBPACK_IMPORTED_MODULE_9__["JSONSupport"]);

      Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_4__["property"])({
        type: Number,
        json: {
          write: !0
        }
      })], i.prototype, "bevelRatio", void 0), Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_4__["property"])({
        json: {
          read: {
            reader: function reader(o) {
              return o ? o.map(function (o) {
                return Object(_geometry_support_jsonUtils_js__WEBPACK_IMPORTED_MODULE_10__["fromJSON"])(o);
              }) : null;
            }
          },
          write: {
            writer: function writer(o, r) {
              r.geometries = o.map(function (o) {
                return o.toJSON();
              });
            }
          }
        }
      })], i.prototype, "geometries", void 0), Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_4__["property"])({
        type: Number,
        json: {
          write: !0
        }
      })], i.prototype, "offsetDistance", void 0), Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_4__["property"])({
        type: String,
        json: {
          write: !0
        }
      })], i.prototype, "offsetHow", void 0), Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_4__["property"])({
        type: String,
        json: {
          write: !0
        }
      })], i.prototype, "offsetUnit", void 0), i = Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_subclass_js__WEBPACK_IMPORTED_MODULE_5__["subclass"])("esri.tasks.support.OffsetParameters")], i), i.from = Object(_core_accessorSupport_ensureType_js__WEBPACK_IMPORTED_MODULE_3__["ensureType"])(i);
      var m = i;
      /* harmony default export */

      __webpack_exports__["default"] = m;
      /***/
    },

    /***/
    "nkC/":
    /*!********************************************************************!*\
      !*** ./node_modules/@arcgis/core/rest/geometryService/relation.js ***!
      \********************************************************************/

    /*! exports provided: relation */

    /***/
    function nkC(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "relation", function () {
        return e;
      });
      /* harmony import */


      var _request_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ../../request.js */
      "Lqtk");
      /* harmony import */


      var _utils_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ../utils.js */
      "u3Ia");
      /* harmony import */


      var _tasks_operations_relation_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ../../tasks/operations/relation.js */
      "fQPN");
      /* harmony import */


      var _tasks_support_RelationParameters_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ../../tasks/support/RelationParameters.js */
      "Nvf0");
      /*
      All material copyright ESRI, All Rights Reserved, unless otherwise specified.
      See https://js.arcgis.com/4.18/esri/copyright.txt for details.
      */


      function e(_x47, _x48, _x49) {
        return _e2.apply(this, arguments);
      }
      /***/


      function _e2() {
        _e2 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee15(e, n, i) {
          var m, p, f, u;
          return regeneratorRuntime.wrap(function _callee15$(_context15) {
            while (1) {
              switch (_context15.prev = _context15.next) {
                case 0:
                  n = _tasks_support_RelationParameters_js__WEBPACK_IMPORTED_MODULE_3__["default"].from(n);
                  m = Object(_tasks_operations_relation_js__WEBPACK_IMPORTED_MODULE_2__["relationToRESTParameters"])(n), p = Object(_utils_js__WEBPACK_IMPORTED_MODULE_1__["parseUrl"])(e), f = _objectSpread(_objectSpread({}, p.query), {}, {
                    f: "json"
                  }, m), u = Object(_utils_js__WEBPACK_IMPORTED_MODULE_1__["asValidOptions"])(f, i);
                  return _context15.abrupt("return", Object(_request_js__WEBPACK_IMPORTED_MODULE_0__["default"])(p.path + "/relation", u).then(function (_ref14) {
                    var t = _ref14.data;
                    return t.relations;
                  }));

                case 3:
                case "end":
                  return _context15.stop();
              }
            }
          }, _callee15);
        }));
        return _e2.apply(this, arguments);
      }
    },

    /***/
    "pXG8":
    /*!*****************************************************************!*\
      !*** ./node_modules/@arcgis/core/rest/geometryService/utils.js ***!
      \*****************************************************************/

    /*! exports provided: decodeGeometries, encodeGeometries */

    /***/
    function pXG8(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "decodeGeometries", function () {
        return o;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "encodeGeometries", function () {
        return r;
      });
      /* harmony import */


      var _geometry_support_jsonUtils_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ../../geometry/support/jsonUtils.js */
      "qatw");
      /*
      All material copyright ESRI, All Rights Reserved, unless otherwise specified.
      See https://js.arcgis.com/4.18/esri/copyright.txt for details.
      */


      function r(t) {
        return {
          geometryType: Object(_geometry_support_jsonUtils_js__WEBPACK_IMPORTED_MODULE_0__["getJsonType"])(t[0]),
          geometries: t.map(function (e) {
            return e.toJSON();
          })
        };
      }

      function o(e, r, o) {
        var n = Object(_geometry_support_jsonUtils_js__WEBPACK_IMPORTED_MODULE_0__["getGeometryType"])(r);
        return e.map(function (e) {
          var t = n.fromJSON(e);
          return t.spatialReference = o, t;
        });
      }
      /***/

    },

    /***/
    "q/vV":
    /*!***********************************************************************!*\
      !*** ./node_modules/@arcgis/core/rest/geometryService/labelPoints.js ***!
      \***********************************************************************/

    /*! exports provided: labelPoints */

    /***/
    function qVV(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "labelPoints", function () {
        return r;
      });
      /* harmony import */


      var _geometry_support_jsonUtils_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ../../geometry/support/jsonUtils.js */
      "qatw");
      /* harmony import */


      var _request_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ../../request.js */
      "Lqtk");
      /* harmony import */


      var _utils_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ../utils.js */
      "u3Ia");
      /*
      All material copyright ESRI, All Rights Reserved, unless otherwise specified.
      See https://js.arcgis.com/4.18/esri/copyright.txt for details.
      */


      function r(r, i, n) {
        var p = i.map(function (t) {
          return t.toJSON();
        }),
            a = i[0].spatialReference,
            f = Object(_utils_js__WEBPACK_IMPORTED_MODULE_2__["parseUrl"])(r),
            l = _objectSpread(_objectSpread({}, f.query), {}, {
          f: "json",
          sr: a.wkid ? a.wkid : JSON.stringify(a.toJSON()),
          polygons: JSON.stringify(p)
        }),
            m = Object(_utils_js__WEBPACK_IMPORTED_MODULE_2__["asValidOptions"])(l, n);

        return Object(_request_js__WEBPACK_IMPORTED_MODULE_1__["default"])(f.path + "/labelPoints", m).then(function (_ref15) {
          var e = _ref15.data;
          return (e.labelPoints || []).map(function (e) {
            return Object(_geometry_support_jsonUtils_js__WEBPACK_IMPORTED_MODULE_0__["fromJSON"])(e).set({
              spatialReference: a
            });
          });
        });
      }
      /***/

    },

    /***/
    "rJHQ":
    /*!*******************************************************************!*\
      !*** ./node_modules/@arcgis/core/rest/geometryService/project.js ***!
      \*******************************************************************/

    /*! exports provided: project */

    /***/
    function rJHQ(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "project", function () {
        return n;
      });
      /* harmony import */


      var _core_accessorSupport_ensureType_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ../../core/accessorSupport/ensureType.js */
      "zqDF");
      /* harmony import */


      var _geometry_support_jsonUtils_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ../../geometry/support/jsonUtils.js */
      "qatw");
      /* harmony import */


      var _request_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ../../request.js */
      "Lqtk");
      /* harmony import */


      var _tasks_support_ProjectParameters_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ../../tasks/support/ProjectParameters.js */
      "ACSY");
      /* harmony import */


      var _utils_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ../utils.js */
      "u3Ia");
      /* harmony import */


      var _utils_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ./utils.js */
      "pXG8");
      /*
      All material copyright ESRI, All Rights Reserved, unless otherwise specified.
      See https://js.arcgis.com/4.18/esri/copyright.txt for details.
      */


      var i = Object(_core_accessorSupport_ensureType_js__WEBPACK_IMPORTED_MODULE_0__["ensureType"])(_tasks_support_ProjectParameters_js__WEBPACK_IMPORTED_MODULE_3__["default"]);

      function n(_x50, _x51, _x52) {
        return _n.apply(this, arguments);
      }
      /***/


      function _n() {
        _n = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee16(r, e, n) {
          var u, a, c, j, f;
          return regeneratorRuntime.wrap(function _callee16$(_context16) {
            while (1) {
              switch (_context16.prev = _context16.next) {
                case 0:
                  e = i(e);
                  u = Object(_utils_js__WEBPACK_IMPORTED_MODULE_4__["parseUrl"])(r), a = _objectSpread(_objectSpread({}, u.query), {}, {
                    f: "json"
                  }, e.toJSON()), c = e.outSpatialReference, j = Object(_geometry_support_jsonUtils_js__WEBPACK_IMPORTED_MODULE_1__["getJsonType"])(e.geometries[0]), f = Object(_utils_js__WEBPACK_IMPORTED_MODULE_4__["asValidOptions"])(a, n);
                  return _context16.abrupt("return", Object(_request_js__WEBPACK_IMPORTED_MODULE_2__["default"])(u.path + "/project", f).then(function (_ref16) {
                    var r = _ref16.data.geometries;
                    return Object(_utils_js__WEBPACK_IMPORTED_MODULE_5__["decodeGeometries"])(r, j, c);
                  }));

                case 3:
                case "end":
                  return _context16.stop();
              }
            }
          }, _callee16);
        }));
        return _n.apply(this, arguments);
      }
    },

    /***/
    "vB4c":
    /*!*********************************************************************!*\
      !*** ./node_modules/@arcgis/core/rest/geometryService/intersect.js ***!
      \*********************************************************************/

    /*! exports provided: intersect */

    /***/
    function vB4c(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "intersect", function () {
        return m;
      });
      /* harmony import */


      var _geometry_support_jsonUtils_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ../../geometry/support/jsonUtils.js */
      "qatw");
      /* harmony import */


      var _request_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ../../request.js */
      "Lqtk");
      /* harmony import */


      var _utils_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ../utils.js */
      "u3Ia");
      /* harmony import */


      var _utils_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./utils.js */
      "pXG8");
      /*
      All material copyright ESRI, All Rights Reserved, unless otherwise specified.
      See https://js.arcgis.com/4.18/esri/copyright.txt for details.
      */


      function m(_x53, _x54, _x55, _x56) {
        return _m2.apply(this, arguments);
      }
      /***/


      function _m2() {
        _m2 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee17(m, n, p, f) {
          var y, a, g, u;
          return regeneratorRuntime.wrap(function _callee17$(_context17) {
            while (1) {
              switch (_context17.prev = _context17.next) {
                case 0:
                  y = n[0].spatialReference, a = Object(_utils_js__WEBPACK_IMPORTED_MODULE_2__["parseUrl"])(m), g = _objectSpread(_objectSpread({}, a.query), {}, {
                    f: "json",
                    sr: JSON.stringify(y.toJSON()),
                    geometries: JSON.stringify(Object(_utils_js__WEBPACK_IMPORTED_MODULE_3__["encodeGeometries"])(n)),
                    geometry: JSON.stringify({
                      geometryType: Object(_geometry_support_jsonUtils_js__WEBPACK_IMPORTED_MODULE_0__["getJsonType"])(p),
                      geometry: p.toJSON()
                    })
                  }), u = Object(_utils_js__WEBPACK_IMPORTED_MODULE_2__["asValidOptions"])(g, f);
                  return _context17.abrupt("return", Object(_request_js__WEBPACK_IMPORTED_MODULE_1__["default"])(a.path + "/intersect", u).then(function (_ref17) {
                    var e = _ref17.data;
                    return (e.geometries || []).map(function (e) {
                      return Object(_geometry_support_jsonUtils_js__WEBPACK_IMPORTED_MODULE_0__["fromJSON"])(e).set({
                        spatialReference: y
                      });
                    });
                  }));

                case 2:
                case "end":
                  return _context17.stop();
              }
            }
          }, _callee17);
        }));
        return _m2.apply(this, arguments);
      }
    },

    /***/
    "vBrX":
    /*!******************************************************************!*\
      !*** ./node_modules/@arcgis/core/rest/geometryService/buffer.js ***!
      \******************************************************************/

    /*! exports provided: buffer */

    /***/
    function vBrX(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "buffer", function () {
        return s;
      });
      /* harmony import */


      var _geometry_Polygon_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ../../geometry/Polygon.js */
      "Ehki");
      /* harmony import */


      var _geometry_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ../../geometry.js */
      "4GrV");
      /* harmony import */


      var _request_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ../../request.js */
      "Lqtk");
      /* harmony import */


      var _utils_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ../utils.js */
      "u3Ia");
      /*
      All material copyright ESRI, All Rights Reserved, unless otherwise specified.
      See https://js.arcgis.com/4.18/esri/copyright.txt for details.
      */


      function s(_x57, _x58, _x59) {
        return _s.apply(this, arguments);
      }
      /***/


      function _s() {
        _s = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee18(s, n, i) {
          var m, a, f, p;
          return regeneratorRuntime.wrap(function _callee18$(_context18) {
            while (1) {
              switch (_context18.prev = _context18.next) {
                case 0:
                  m = Object(_utils_js__WEBPACK_IMPORTED_MODULE_3__["parseUrl"])(s), a = _objectSpread(_objectSpread({}, m.query), {}, {
                    f: "json"
                  }, n.toJSON()), f = n.outSpatialReference || n.geometries[0].spatialReference, p = Object(_utils_js__WEBPACK_IMPORTED_MODULE_3__["asValidOptions"])(a, i);
                  return _context18.abrupt("return", Object(_request_js__WEBPACK_IMPORTED_MODULE_2__["default"])(m.path + "/buffer", p).then(function (r) {
                    return (r.data.geometries || []).map(function (_ref18) {
                      var r = _ref18.rings;
                      return new _geometry_Polygon_js__WEBPACK_IMPORTED_MODULE_0__["default"]({
                        spatialReference: f,
                        rings: r
                      });
                    });
                  }));

                case 2:
                case "end":
                  return _context18.stop();
              }
            }
          }, _callee18);
        }));
        return _s.apply(this, arguments);
      }
    },

    /***/
    "vaBp":
    /*!*****************************************************************!*\
      !*** ./node_modules/@arcgis/core/rest/geometryService/units.js ***!
      \*****************************************************************/

    /*! exports provided: conversionTypeKebabDict, units */

    /***/
    function vaBp(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "conversionTypeKebabDict", function () {
        return _;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "units", function () {
        return N;
      });
      /* harmony import */


      var _core_jsonMap_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ../../core/jsonMap.js */
      "+opI");
      /*
      All material copyright ESRI, All Rights Reserved, unless otherwise specified.
      See https://js.arcgis.com/4.18/esri/copyright.txt for details.
      */


      var _ = new _core_jsonMap_js__WEBPACK_IMPORTED_MODULE_0__["JSONMap"]({
        MGRS: "mgrs",
        USNG: "usng",
        UTM: "utm",
        GeoRef: "geo-ref",
        GARS: "gars",
        DMS: "dms",
        DDM: "ddm",
        DD: "dd"
      }),
          N = {
        UNIT_METER: 9001,
        UNIT_GERMAN_METER: 9031,
        UNIT_FOOT: 9002,
        UNIT_SURVEY_FOOT: 9003,
        UNIT_CLARKE_FOOT: 9005,
        UNIT_FATHOM: 9014,
        UNIT_NAUTICAL_MILE: 9030,
        UNIT_SURVEY_CHAIN: 9033,
        UNIT_SURVEY_LINK: 9034,
        UNIT_SURVEY_MILE: 9035,
        UNIT_KILOMETER: 9036,
        UNIT_CLARKE_YARD: 9037,
        UNIT_CLARKE_CHAIN: 9038,
        UNIT_CLARKE_LINK: 9039,
        UNIT_SEARS_YARD: 9040,
        UNIT_SEARS_FOOT: 9041,
        UNIT_SEARS_CHAIN: 9042,
        UNIT_SEARS_LINK: 9043,
        UNIT_BENOIT_1895A_YARD: 9050,
        UNIT_BENOIT_1895A_FOOT: 9051,
        UNIT_BENOIT_1895A_CHAIN: 9052,
        UNIT_BENOIT_1895A_LINK: 9053,
        UNIT_BENOIT_1895B_YARD: 9060,
        UNIT_BENOIT_1895B_FOOT: 9061,
        UNIT_BENOIT_1895B_CHAIN: 9062,
        UNIT_BENOIT_1895B_LINK: 9063,
        UNIT_INDIAN_FOOT: 9080,
        UNIT_INDIAN_1937_FOOT: 9081,
        UNIT_INDIAN_1962_FOOT: 9082,
        UNIT_INDIAN_1975_FOOT: 9083,
        UNIT_INDIAN_YARD: 9084,
        UNIT_INDIAN_1937_YARD: 9085,
        UNIT_INDIAN_1962_YARD: 9086,
        UNIT_INDIAN_1975_YARD: 9087,
        UNIT_FOOT_1865: 9070,
        UNIT_RADIAN: 9101,
        UNIT_DEGREE: 9102,
        UNIT_ARCMINUTE: 9103,
        UNIT_ARCSECOND: 9104,
        UNIT_GRAD: 9105,
        UNIT_GON: 9106,
        UNIT_MICRORADIAN: 9109,
        UNIT_ARCMINUTE_CENTESIMAL: 9112,
        UNIT_ARCSECOND_CENTESIMAL: 9113,
        UNIT_MIL6400: 9114,
        UNIT_BRITISH_1936_FOOT: 9095,
        UNIT_GOLDCOAST_FOOT: 9094,
        UNIT_INTERNATIONAL_CHAIN: 109003,
        UNIT_INTERNATIONAL_LINK: 109004,
        UNIT_INTERNATIONAL_YARD: 109001,
        UNIT_STATUTE_MILE: 9093,
        UNIT_SURVEY_YARD: 109002,
        UNIT_50KILOMETER_LENGTH: 109030,
        UNIT_150KILOMETER_LENGTH: 109031,
        UNIT_DECIMETER: 109005,
        UNIT_CENTIMETER: 109006,
        UNIT_MILLIMETER: 109007,
        UNIT_INTERNATIONAL_INCH: 109008,
        UNIT_US_SURVEY_INCH: 109009,
        UNIT_INTERNATIONAL_ROD: 109010,
        UNIT_US_SURVEY_ROD: 109011,
        UNIT_US_NAUTICAL_MILE: 109012,
        UNIT_UK_NAUTICAL_MILE: 109013,
        UNIT_SQUARE_INCHES: "esriSquareInches",
        UNIT_SQUARE_FEET: "esriSquareFeet",
        UNIT_SQUARE_YARDS: "esriSquareYards",
        UNIT_ACRES: "esriAcres",
        UNIT_SQUARE_MILES: "esriSquareMiles",
        UNIT_SQUARE_MILLIMETERS: "esriSquareMillimeters",
        UNIT_SQUARE_CENTIMETERS: "esriSquareCentimeters",
        UNIT_SQUARE_DECIMETERS: "esriSquareDecimeters",
        UNIT_SQUARE_METERS: "esriSquareMeters",
        UNIT_ARES: "esriAres",
        UNIT_HECTARES: "esriHectares",
        UNIT_SQUARE_KILOMETERS: "esriSquareKilometers"
      };
      /***/

    },

    /***/
    "whjZ":
    /*!*******************************************************************!*\
      !*** ./node_modules/@arcgis/core/rest/geometryService/lengths.js ***!
      \*******************************************************************/

    /*! exports provided: lengths */

    /***/
    function whjZ(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "lengths", function () {
        return n;
      });
      /* harmony import */


      var _request_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ../../request.js */
      "Lqtk");
      /* harmony import */


      var _utils_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ../utils.js */
      "u3Ia");
      /* harmony import */


      var _tasks_operations_lengths_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ../../tasks/operations/lengths.js */
      "2jrz");
      /* harmony import */


      var _tasks_support_LengthsParameters_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ../../tasks/support/LengthsParameters.js */
      "1lHr");
      /*
      All material copyright ESRI, All Rights Reserved, unless otherwise specified.
      See https://js.arcgis.com/4.18/esri/copyright.txt for details.
      */


      function n(_x60, _x61, _x62) {
        return _n2.apply(this, arguments);
      }
      /***/


      function _n2() {
        _n2 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee19(n, m, a) {
          var p, f, i, u;
          return regeneratorRuntime.wrap(function _callee19$(_context19) {
            while (1) {
              switch (_context19.prev = _context19.next) {
                case 0:
                  m = _tasks_support_LengthsParameters_js__WEBPACK_IMPORTED_MODULE_3__["default"].from(m);
                  p = Object(_tasks_operations_lengths_js__WEBPACK_IMPORTED_MODULE_2__["lengthsToRESTParameters"])(m), f = Object(_utils_js__WEBPACK_IMPORTED_MODULE_1__["parseUrl"])(n), i = _objectSpread(_objectSpread({}, f.query), {}, {
                    f: "json"
                  }, p), u = Object(_utils_js__WEBPACK_IMPORTED_MODULE_1__["asValidOptions"])(i, a);
                  return _context19.abrupt("return", Object(_request_js__WEBPACK_IMPORTED_MODULE_0__["default"])(f.path + "/lengths", u).then(function (_ref19) {
                    var t = _ref19.data;
                    return t;
                  }));

                case 3:
                case "end":
                  return _context19.stop();
              }
            }
          }, _callee19);
        }));
        return _n2.apply(this, arguments);
      }
    },

    /***/
    "xC5X":
    /*!*******************************************************************!*\
      !*** ./node_modules/@arcgis/core/rest/geometryService/densify.js ***!
      \*******************************************************************/

    /*! exports provided: densify */

    /***/
    function xC5X(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "densify", function () {
        return o;
      });
      /* harmony import */


      var _geometry_support_jsonUtils_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ../../geometry/support/jsonUtils.js */
      "qatw");
      /* harmony import */


      var _request_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ../../request.js */
      "Lqtk");
      /* harmony import */


      var _utils_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ../utils.js */
      "u3Ia");
      /*
      All material copyright ESRI, All Rights Reserved, unless otherwise specified.
      See https://js.arcgis.com/4.18/esri/copyright.txt for details.
      */


      function o(_x63, _x64, _x65) {
        return _o4.apply(this, arguments);
      }
      /***/


      function _o4() {
        _o4 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee20(o, i, n) {
          var m, p, a, f;
          return regeneratorRuntime.wrap(function _callee20$(_context20) {
            while (1) {
              switch (_context20.prev = _context20.next) {
                case 0:
                  m = i.geometries[0].spatialReference, p = Object(_utils_js__WEBPACK_IMPORTED_MODULE_2__["parseUrl"])(o), a = _objectSpread(_objectSpread({}, p.query), {}, {
                    f: "json"
                  }, i.toJSON()), f = Object(_utils_js__WEBPACK_IMPORTED_MODULE_2__["asValidOptions"])(a, n);
                  return _context20.abrupt("return", Object(_request_js__WEBPACK_IMPORTED_MODULE_1__["default"])(p.path + "/densify", f).then(function (_ref20) {
                    var t = _ref20.data;
                    return (t.geometries || []).map(function (t) {
                      return Object(_geometry_support_jsonUtils_js__WEBPACK_IMPORTED_MODULE_0__["fromJSON"])(t).set({
                        spatialReference: m
                      });
                    });
                  }));

                case 2:
                case "end":
                  return _context20.stop();
              }
            }
          }, _callee20);
        }));
        return _o4.apply(this, arguments);
      }
    },

    /***/
    "xazm":
    /*!**************************************************************!*\
      !*** ./node_modules/@arcgis/core/tasks/operations/offset.js ***!
      \**************************************************************/

    /*! exports provided: offsetToRESTParameters */

    /***/
    function xazm(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "offsetToRESTParameters", function () {
        return r;
      });
      /* harmony import */


      var _core_jsonMap_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ../../core/jsonMap.js */
      "+opI");
      /* harmony import */


      var _geometry_support_jsonUtils_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ../../geometry/support/jsonUtils.js */
      "qatw");
      /*
      All material copyright ESRI, All Rights Reserved, unless otherwise specified.
      See https://js.arcgis.com/4.18/esri/copyright.txt for details.
      */


      var o = new _core_jsonMap_js__WEBPACK_IMPORTED_MODULE_0__["JSONMap"]({
        esriGeometryOffsetBevelled: "bevelled",
        esriGeometryOffsetMitered: "mitered",
        esriGeometryOffsetRounded: "rounded"
      }),
          s = new _core_jsonMap_js__WEBPACK_IMPORTED_MODULE_0__["JSONMap"]({
        9001: "meters",
        9002: "feet",
        9036: "kilometers",
        9093: "miles",
        109012: "nautical-miles",
        109001: "yards"
      });

      function r(e) {
        var _e$toJSON5 = e.toJSON(),
            r = _e$toJSON5.geometries,
            i = _e$toJSON5.bevelRatio,
            f = _e$toJSON5.offsetDistance,
            n = _e$toJSON5.offsetHow,
            m = _e$toJSON5.offsetUnit,
            l = {
          bevelRatio: i,
          offsetDistance: f
        };

        return r && r.length && (l.geometries = JSON.stringify({
          geometryType: Object(_geometry_support_jsonUtils_js__WEBPACK_IMPORTED_MODULE_1__["getJsonType"])(r[0]),
          geometries: r
        }), l.sr = JSON.stringify(r[0].spatialReference)), n && (l.offsetHow = o.toJSON(n)), m && (l.offsetUnit = s.toJSON(m)), l;
      }
      /***/

    }
  }]);
})();
//# sourceMappingURL=tasks-GeometryService-js-es5.js.map