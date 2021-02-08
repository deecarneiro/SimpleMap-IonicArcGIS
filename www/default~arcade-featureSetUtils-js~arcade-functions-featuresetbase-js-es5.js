(function () {
  function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

  function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

  function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

  function _createForOfIteratorHelper(o, allowArrayLike) { var it; if (typeof Symbol === "undefined" || o[Symbol.iterator] == null) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e64) { throw _e64; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = o[Symbol.iterator](); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e65) { didErr = true; err = _e65; }, f: function f() { try { if (!normalCompletion && it["return"] != null) it["return"](); } finally { if (didErr) throw err; } } }; }

  function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

  function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

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

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["default~arcade-featureSetUtils-js~arcade-functions-featuresetbase-js"], {
    /***/
    "/AM1":
    /*!************************************************************************************!*\
      !*** ./node_modules/@arcgis/core/arcade/featureset/sources/FeatureLayerRelated.js ***!
      \************************************************************************************/

    /*! exports provided: default */

    /***/
    function AM1(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony import */


      var _core_promiseUtils_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ../../../core/promiseUtils.js */
      "9MzC");
      /* harmony import */


      var _Graphic_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ../../../Graphic.js */
      "jWBI");
      /* harmony import */


      var _support_shared_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ../support/shared.js */
      "hTzF");
      /* harmony import */


      var _support_IdSet_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ../support/IdSet.js */
      "ZPxV");
      /* harmony import */


      var _support_FeatureSet_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ../support/FeatureSet.js */
      "T3Nt");
      /* harmony import */


      var _tasks_support_RelationshipQuery_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ../../../tasks/support/RelationshipQuery.js */
      "n6Nx");
      /*
      All material copyright ESRI, All Rights Reserved, unless otherwise specified.
      See https://js.arcgis.com/4.18/esri/copyright.txt for details.
      */

      /* harmony default export */


      __webpack_exports__["default"] = /*#__PURE__*/function (_support_FeatureSet_j) {
        _inherits(_class, _support_FeatureSet_j);

        var _super = _createSuper(_class);

        function _class(e) {
          var _this;

          _classCallCheck(this, _class);

          _this = _super.call(this, e), _this.declaredClass = "esri.arcade.featureset.sources.FeatureLayerRelated", _this._findObjectId = -1, _this._requestStandardised = !1, _this._removeGeometry = !1, _this._overrideFields = null, _this.featureObjectId = null, _this.relatedLayer = null, _this.relationship = null, e.spatialReference && (_this.spatialReference = e.spatialReference), _this._transparent = !0, _this._maxProcessing = 1e3, _this._layer = e.layer, _this._wset = null, _this._findObjectId = e.objectId, _this.featureObjectId = e.objectId, _this.relationship = e.relationship, _this.relatedLayer = e.relatedLayer, void 0 !== e.outFields && (_this._overrideFields = e.outFields), void 0 !== e.includeGeometry && (_this._removeGeometry = !1 === e.includeGeometry);
          return _this;
        }

        _createClass(_class, [{
          key: "_maxQueryRate",
          value: function _maxQueryRate() {
            return _support_shared_js__WEBPACK_IMPORTED_MODULE_2__["defaultMaxRecords"];
          }
        }, {
          key: "end",
          value: function end() {
            return this._layer;
          }
        }, {
          key: "optimisePagingFeatureQueries",
          value: function optimisePagingFeatureQueries() {}
        }, {
          key: "load",
          value: function load() {
            var _this2 = this;

            return null === this._loadPromise && (this._loadPromise = Object(_core_promiseUtils_js__WEBPACK_IMPORTED_MODULE_0__["create"])(function (e, i) {
              Object(_core_promiseUtils_js__WEBPACK_IMPORTED_MODULE_0__["all"])([_this2._layer.load(), _this2.relatedLayer.load()]).then(function () {
                _this2._initialiseFeatureSet(), e(_this2);
              }, i);
            })), this._loadPromise;
          }
        }, {
          key: "nativeCapabilities",
          value: function nativeCapabilities() {
            return this.relatedLayer.nativeCapabilities();
          }
        }, {
          key: "_initialiseFeatureSet",
          value: function _initialiseFeatureSet() {
            if (null == this.spatialReference && (this.spatialReference = this._layer.spatialReference), this.geometryType = this.relatedLayer.geometryType, this.fields = this.relatedLayer.fields.slice(0), null !== this._overrideFields) if (1 === this._overrideFields.length && "*" === this._overrideFields[0]) this._overrideFields = null;else {
              var _e = [],
                  t = [];

              var _iterator = _createForOfIteratorHelper(this.fields),
                  _step;

              try {
                for (_iterator.s(); !(_step = _iterator.n()).done;) {
                  var i = _step.value;
                  if ("oid" === i.type) _e.push(i), t.push(i.name);else {
                    var _iterator2 = _createForOfIteratorHelper(this._overrideFields),
                        _step2;

                    try {
                      for (_iterator2.s(); !(_step2 = _iterator2.n()).done;) {
                        var r = _step2.value;

                        if (r.toLowerCase() === i.name.toLowerCase()) {
                          _e.push(i), t.push(i.name);
                          break;
                        }
                      }
                    } catch (err) {
                      _iterator2.e(err);
                    } finally {
                      _iterator2.f();
                    }
                  }
                }
              } catch (err) {
                _iterator.e(err);
              } finally {
                _iterator.f();
              }

              this.fields = _e, this._overrideFields = t;
            }

            var e = this._layer.nativeCapabilities();

            e && (this._databaseType = e.databaseType, this._requestStandardised = e.requestStandardised), this.objectIdField = this.relatedLayer.objectIdField, this.globalIdField = this.relatedLayer.globalIdField, this.hasM = this.relatedLayer.supportsM, this.hasZ = this.relatedLayer.supportsZ, this.typeIdField = this.relatedLayer.typeIdField, this.types = this.relatedLayer.types;
          }
        }, {
          key: "databaseType",
          value: function databaseType() {
            var _this3 = this;

            return this.relatedLayer.databaseType().then(function () {
              return _this3._databaseType = _this3.relatedLayer._databaseType, _this3._databaseType;
            });
          }
        }, {
          key: "isTable",
          value: function isTable() {
            return this.relatedLayer.isTable();
          }
        }, {
          key: "_isInFeatureSet",
          value: function _isInFeatureSet() {
            return _support_shared_js__WEBPACK_IMPORTED_MODULE_2__["IdState"].InFeatureSet;
          }
        }, {
          key: "_candidateIdTransform",
          value: function _candidateIdTransform(e) {
            return e;
          }
        }, {
          key: "_getSet",
          value: function _getSet(e) {
            var _this4 = this;

            return null === this._wset ? this._ensureLoaded().then(function () {
              return _this4._getFilteredSet("", null, null, null, e);
            }).then(function (e) {
              return _this4._wset = e, e;
            }) : Object(_core_promiseUtils_js__WEBPACK_IMPORTED_MODULE_0__["resolve"])(this._wset);
          }
        }, {
          key: "_changeFeature",
          value: function _changeFeature(e) {
            var t = {};

            var _iterator3 = _createForOfIteratorHelper(this.fields),
                _step3;

            try {
              for (_iterator3.s(); !(_step3 = _iterator3.n()).done;) {
                var i = _step3.value;
                t[i.name] = e.attributes[i.name];
              }
            } catch (err) {
              _iterator3.e(err);
            } finally {
              _iterator3.f();
            }

            return new _Graphic_js__WEBPACK_IMPORTED_MODULE_1__["default"]({
              geometry: !0 === this._removeGeometry ? null : e.geometry,
              attributes: t
            });
          }
        }, {
          key: "_getFilteredSet",
          value: function _getFilteredSet(e, t, i, r, s) {
            var _this5 = this;

            return this.databaseType().then(function () {
              if (_this5.isTable() && t && null !== e && "" !== e) {
                return new _support_IdSet_js__WEBPACK_IMPORTED_MODULE_3__["default"]([], [], !0, null);
              }

              var a = _this5._layer.nativeCapabilities();

              if (!1 === a.canQueryRelated) {
                return new _support_IdSet_js__WEBPACK_IMPORTED_MODULE_3__["default"]([], [], !0, null);
              }

              if (a.capabilities.queryRelated && a.capabilities.queryRelated.supportsPagination) return _this5._getFilteredSetUsingPaging(e, t, i, r, s);
              var n = "",
                  d = !1;
              null !== r && a.capabilities && a.capabilities.queryRelated && !0 === a.capabilities.queryRelated.supportsOrderBy && (n = r.constructClause(), d = !0);
              var u = new _tasks_support_RelationshipQuery_js__WEBPACK_IMPORTED_MODULE_5__["default"]();
              u.objectIds = [_this5._findObjectId];
              var h = null !== _this5._overrideFields ? _this5._overrideFields : _this5._fieldsIncludingObjectId(_this5.relatedLayer.fields ? _this5.relatedLayer.fields.map(function (e) {
                return e.name;
              }) : ["*"]);
              u.outFields = h, u.relationshipId = _this5.relationship.id, u.where = "1=1";
              var c = !0;
              return !0 === _this5._removeGeometry && (c = !1), u.returnGeometry = c, _this5._requestStandardised && (u.sqlFormat = "standard"), u.outSpatialReference = _this5.spatialReference, u.orderByFields = "" !== n ? n.split(",") : null, a.source.queryRelatedFeatures(u).then(function (r) {
                _this5._checkCancelled(s);

                var a = r[_this5._findObjectId] ? r[_this5._findObjectId].features : [],
                    n = [];

                for (var _e2 = 0; _e2 < a.length; _e2++) {
                  _this5._featureCache[a[_e2].attributes[_this5._layer.objectIdField]] = a[_e2], n.push(a[_e2].attributes[_this5._layer.objectIdField]);
                }

                var o = t && null !== e && "" !== e,
                    u = null != i;
                return new _support_IdSet_js__WEBPACK_IMPORTED_MODULE_3__["default"](o || u ? n : [], o || u ? [] : n, d, null);
              });
            });
          }
        }, {
          key: "_fieldsIncludingObjectId",
          value: function _fieldsIncludingObjectId(e) {
            if (null === e) return [this.objectIdField];
            var t = e.slice(0);
            if (t.indexOf("*") > -1) return t;
            var i = !1;

            var _iterator4 = _createForOfIteratorHelper(t),
                _step4;

            try {
              for (_iterator4.s(); !(_step4 = _iterator4.n()).done;) {
                var _e3 = _step4.value;

                if (_e3.toUpperCase() === this.objectIdField.toUpperCase()) {
                  i = !0;
                  break;
                }
              }
            } catch (err) {
              _iterator4.e(err);
            } finally {
              _iterator4.f();
            }

            return !1 === i && t.push(this.objectIdField), t;
          }
        }, {
          key: "_getFilteredSetUsingPaging",
          value: function _getFilteredSetUsingPaging(e, t, i, s, a) {
            var _this6 = this;

            try {
              var r = "",
                  n = !1;

              var d = this._layer.nativeCapabilities();

              return null !== s && d && d.capabilities.queryRelated && !0 === d.capabilities.queryRelated.supportsOrderBy && (r = s.constructClause(), n = !0), this.databaseType().then(function () {
                var s = _this6._maxQueryRate();

                var o = d.capabilities.query.maxRecordCount;
                void 0 !== o && o < s && (s = o);
                var u = t && null !== e && "" !== e,
                    h = null != i;
                var c = null,
                    p = !0;
                !0 === _this6._removeGeometry && (p = !1);
                var y = null !== _this6._overrideFields ? _this6._overrideFields : _this6._fieldsIncludingObjectId(_this6.relatedLayer.fields ? _this6.relatedLayer.fields.map(function (e) {
                  return e.name;
                }) : ["*"]);
                return c = new _support_IdSet_js__WEBPACK_IMPORTED_MODULE_3__["default"](u || h ? ["GETPAGES"] : [], u || h ? [] : ["GETPAGES"], n, {
                  outFields: y.join(","),
                  resultRecordCount: s,
                  resultOffset: 0,
                  objectIds: [_this6._findObjectId],
                  where: "1=1",
                  orderByFields: r,
                  returnGeometry: p,
                  returnIdsOnly: "false",
                  internal: {
                    set: [],
                    lastRetrieved: 0,
                    lastPage: 0,
                    fullyResolved: !1
                  }
                }), _this6._expandPagedSet(c, s, 0, 0, a).then(function () {
                  return c;
                });
              });
            } catch (e) {
              return Object(_core_promiseUtils_js__WEBPACK_IMPORTED_MODULE_0__["reject"])(e);
            }
          }
        }, {
          key: "_expandPagedSet",
          value: function _expandPagedSet(e, t, i, r, s) {
            return this._expandPagedSetFeatureSet(e, t, i, r, s);
          }
        }, {
          key: "_clonePageDefinition",
          value: function _clonePageDefinition(e) {
            return null === e ? null : !0 !== e.groupbypage ? {
              groupbypage: !1,
              outFields: e.outFields,
              resultRecordCount: e.resultRecordCount,
              resultOffset: e.resultOffset,
              where: e.where,
              objectIds: e.objectIds,
              orderByFields: e.orderByFields,
              returnGeometry: e.returnGeometry,
              returnIdsOnly: e.returnIdsOnly,
              internal: e.internal
            } : {
              groupbypage: !0,
              outFields: e.outFields,
              resultRecordCount: e.resultRecordCount,
              useOIDpagination: e.useOIDpagination,
              generatedOid: e.generatedOid,
              groupByFieldsForStatistics: e.groupByFieldsForStatistics,
              resultOffset: e.resultOffset,
              outStatistics: e.outStatistics,
              geometry: e.geometry,
              where: e.where,
              objectIds: e.objectIds,
              orderByFields: e.orderByFields,
              returnGeometry: e.returnGeometry,
              returnIdsOnly: e.returnIdsOnly,
              internal: e.internal
            };
          }
        }, {
          key: "_getPhysicalPage",
          value: function _getPhysicalPage(e, t, i) {
            var _this7 = this;

            try {
              var _t = e.pagesDefinition.internal.lastRetrieved,
                  r = _t,
                  s = e.pagesDefinition.internal.lastPage,
                  a = this._layer.nativeCapabilities(),
                  n = new _tasks_support_RelationshipQuery_js__WEBPACK_IMPORTED_MODULE_5__["default"]();

              return !0 === this._requestStandardised && (n.sqlFormat = "standard"), n.relationshipId = this.relationship.id, n.objectIds = e.pagesDefinition.objectIds, n.resultOffset = e.pagesDefinition.internal.lastPage, n.resultRecordCount = e.pagesDefinition.resultRecordCount, n.outFields = e.pagesDefinition.outFields.split(","), n.where = e.pagesDefinition.where, n.orderByFields = "" !== e.pagesDefinition.orderByFields ? e.pagesDefinition.orderByFields.split(",") : null, n.returnGeometry = e.pagesDefinition.returnGeometry, n.outSpatialReference = this.spatialReference, a.source.queryRelatedFeatures(n).then(function (a) {
                if (_this7._checkCancelled(i), e.pagesDefinition.internal.lastPage !== s) return 0;
                var n = a[_this7._findObjectId] ? a[_this7._findObjectId].features : [];

                for (var _t2 = 0; _t2 < n.length; _t2++) {
                  e.pagesDefinition.internal.set[r + _t2] = n[_t2].attributes[_this7._layer.objectIdField];
                }

                for (var _e4 = 0; _e4 < n.length; _e4++) {
                  _this7._featureCache[n[_e4].attributes[_this7._layer.objectIdField]] = n[_e4];
                }

                var l = !a[_this7._findObjectId] || !1 === a[_this7._findObjectId].exceededTransferLimit;
                return n.length !== e.pagesDefinition.resultRecordCount && l && (e.pagesDefinition.internal.fullyResolved = !0), e.pagesDefinition.internal.lastRetrieved = _t + n.length, e.pagesDefinition.internal.lastPage += e.pagesDefinition.resultRecordCount, n.length;
              });
            } catch (e) {
              return Object(_core_promiseUtils_js__WEBPACK_IMPORTED_MODULE_0__["reject"])(e);
            }
          }
        }, {
          key: "_getFeatures",
          value: function _getFeatures(e, t, s, a) {
            var _this8 = this;

            var n = [];
            -1 !== t && void 0 === this._featureCache[t] && n.push(t);

            var l = this._maxQueryRate();

            if (!0 === this._checkIfNeedToExpandKnownPage(e, l)) return this._expandPagedSet(e, l, 0, 0, a).then(function () {
              return _this8._getFeatures(e, t, s, a);
            });
            var d = 0;

            for (var i = e._lastFetchedIndex; i < e._known.length && (d++, d <= s && (e._lastFetchedIndex += 1), !("GETPAGES" !== e._known[i] && void 0 === this._featureCache[e._known[i]] && (e._known[i] !== t && n.push(e._known[i]), n.length > s))) && !(d >= s && 0 === n.length); i++) {
              ;
            }

            return 0 === n.length ? Object(_core_promiseUtils_js__WEBPACK_IMPORTED_MODULE_0__["resolve"])("success") : Object(_core_promiseUtils_js__WEBPACK_IMPORTED_MODULE_0__["reject"])(new Error("Unaccounted for Features. Not in Feature Collection"));
          }
        }, {
          key: "_refineSetBlock",
          value: function _refineSetBlock(e, t, r) {
            return Object(_core_promiseUtils_js__WEBPACK_IMPORTED_MODULE_0__["resolve"])(e);
          }
        }, {
          key: "_stat",
          value: function _stat(e, t, r, s, a, n, l) {
            return Object(_core_promiseUtils_js__WEBPACK_IMPORTED_MODULE_0__["resolve"])({
              calculated: !1
            });
          }
        }, {
          key: "gdbVersion",
          get: function get() {
            return this.relatedLayer.gdbVersion;
          }
        }, {
          key: "_canDoAggregates",
          value: function _canDoAggregates(e, t, r, s, a) {
            return Object(_core_promiseUtils_js__WEBPACK_IMPORTED_MODULE_0__["resolve"])(!1);
          }
        }, {
          key: "relationshipMetaData",
          value: function relationshipMetaData() {
            return this.relatedLayer.relationshipMetaData();
          }
        }, {
          key: "serviceUrl",
          value: function serviceUrl() {
            return this.relatedLayer.serviceUrl();
          }
        }, {
          key: "queryAttachments",
          value: function queryAttachments(e, t, i, r) {
            return this.relatedLayer.queryAttachments(e, t, i, r);
          }
        }, {
          key: "getFeatureByObjectId",
          value: function getFeatureByObjectId(e, t) {
            return this.relatedLayer.getFeatureByObjectId(e, t);
          }
        }, {
          key: "getOwningSystemUrl",
          value: function getOwningSystemUrl() {
            return this.relatedLayer.getOwningSystemUrl();
          }
        }, {
          key: "getIdentityUser",
          value: function getIdentityUser() {
            return this.relatedLayer.getIdentityUser();
          }
        }]);

        return _class;
      }(_support_FeatureSet_js__WEBPACK_IMPORTED_MODULE_4__["default"]);
      /***/

    },

    /***/
    "4zW0":
    /*!*************************************************************!*\
      !*** ./node_modules/@arcgis/core/arcade/featureSetUtils.js ***!
      \*************************************************************/

    /*! exports provided: constructAssociationMetaDataFeatureSetFromUrl, constructFeatureSet, constructFeatureSetFromPortalItem, constructFeatureSetFromRelationship, constructFeatureSetFromUrl, createFeatureSetCollectionFromMap, createFeatureSetCollectionFromService, getPortal, initialiseMetaDataCache, lookupUser */

    /***/
    function zW0(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "constructAssociationMetaDataFeatureSetFromUrl", function () {
        return F;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "constructFeatureSet", function () {
        return A;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "constructFeatureSetFromPortalItem", function () {
        return b;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "constructFeatureSetFromRelationship", function () {
        return g;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "constructFeatureSetFromUrl", function () {
        return T;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "createFeatureSetCollectionFromMap", function () {
        return O;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "createFeatureSetCollectionFromService", function () {
        return w;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "getPortal", function () {
        return v;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "initialiseMetaDataCache", function () {
        return S;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "lookupUser", function () {
        return E;
      });
      /* harmony import */


      var _core_promiseUtils_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ../core/promiseUtils.js */
      "9MzC");
      /* harmony import */


      var _kernel_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ../kernel.js */
      "975N");
      /* harmony import */


      var _request_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ../request.js */
      "Lqtk");
      /* harmony import */


      var _portal_Portal_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ../portal/Portal.js */
      "AiS/");
      /* harmony import */


      var _portal_PortalItem_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ../portal/PortalItem.js */
      "p+Gi");
      /* harmony import */


      var _featureset_support_shared_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ./featureset/support/shared.js */
      "hTzF");
      /* harmony import */


      var _featureSetCollection_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ./featureSetCollection.js */
      "lNzE");
      /* harmony import */


      var _featureset_support_cache_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! ./featureset/support/cache.js */
      "H72m");
      /* harmony import */


      var _core_sql_WhereClause_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! ../core/sql/WhereClause.js */
      "ZqIb");
      /* harmony import */


      var _featureset_actions_AttributeFilter_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! ./featureset/actions/AttributeFilter.js */
      "nC36");
      /* harmony import */


      var _featureset_actions_OrderBy_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
      /*! ./featureset/actions/OrderBy.js */
      "Xbkg");
      /* harmony import */


      var _featureset_actions_GroupBy_js__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
      /*! ./featureset/actions/GroupBy.js */
      "uOiI");
      /* harmony import */


      var _featureset_actions_SpatialFilter_js__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
      /*! ./featureset/actions/SpatialFilter.js */
      "gBat");
      /* harmony import */


      var _featureset_actions_Top_js__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
      /*! ./featureset/actions/Top.js */
      "YP08");
      /* harmony import */


      var _layers_FeatureLayer_js__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(
      /*! ../layers/FeatureLayer.js */
      "W9Wu");
      /* harmony import */


      var _featureset_sources_FeatureLayerDynamic_js__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(
      /*! ./featureset/sources/FeatureLayerDynamic.js */
      "oO7B");
      /* harmony import */


      var _featureset_sources_FeatureLayerMemory_js__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(
      /*! ./featureset/sources/FeatureLayerMemory.js */
      "OAJp");
      /* harmony import */


      var _featureset_sources_FeatureLayerRelated_js__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(
      /*! ./featureset/sources/FeatureLayerRelated.js */
      "/AM1");
      /*
      All material copyright ESRI, All Rights Reserved, unless otherwise specified.
      See https://js.arcgis.com/4.18/esri/copyright.txt for details.
      */


      function S() {
        null === _featureset_support_cache_js__WEBPACK_IMPORTED_MODULE_7__["default"].applicationCache && (_featureset_support_cache_js__WEBPACK_IMPORTED_MODULE_7__["default"].applicationCache = new _featureset_support_cache_js__WEBPACK_IMPORTED_MODULE_7__["default"]());
      }

      function N(t, a) {
        if (_featureset_support_cache_js__WEBPACK_IMPORTED_MODULE_7__["default"].applicationCache) {
          var n = _featureset_support_cache_js__WEBPACK_IMPORTED_MODULE_7__["default"].applicationCache.getLayerInfo(t);

          if (n) return n.then(function (r) {
            return Object(_core_promiseUtils_js__WEBPACK_IMPORTED_MODULE_0__["resolve"])(new _layers_FeatureLayer_js__WEBPACK_IMPORTED_MODULE_14__["default"]({
              url: t,
              outFields: a,
              sourceJSON: r
            }));
          });
          var s = new _layers_FeatureLayer_js__WEBPACK_IMPORTED_MODULE_14__["default"]({
            url: t,
            outFields: a
          });
          var i = Object(_core_promiseUtils_js__WEBPACK_IMPORTED_MODULE_0__["create"])(function (e, t) {
            s.load().then(function () {
              e(s.sourceJSON);
            }, function (e) {
              t(e);
            });
          });
          return _featureset_support_cache_js__WEBPACK_IMPORTED_MODULE_7__["default"].applicationCache && (_featureset_support_cache_js__WEBPACK_IMPORTED_MODULE_7__["default"].applicationCache.setLayerInfo(t, i), i = i["catch"](function (e) {
            throw _featureset_support_cache_js__WEBPACK_IMPORTED_MODULE_7__["default"].applicationCache.clearLayerInfo(t), e;
          })), i.then(function () {
            return Object(_core_promiseUtils_js__WEBPACK_IMPORTED_MODULE_0__["resolve"])(s);
          });
        }

        return Object(_core_promiseUtils_js__WEBPACK_IMPORTED_MODULE_0__["resolve"])(new _layers_FeatureLayer_js__WEBPACK_IMPORTED_MODULE_14__["default"]({
          url: t,
          outFields: a
        }));
      }

      function T(t, r, a, n, s) {
        return N(t, ["*"]).then(function (t) {
          return Object(_core_promiseUtils_js__WEBPACK_IMPORTED_MODULE_0__["resolve"])(A(t, r, a, n, s));
        });
      }

      function A(e) {
        var t = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : null;
        var r = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : null;
        var a = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : !0;
        var n = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : null;
        return !0 === e._hasMemorySource() ? new _featureset_sources_FeatureLayerMemory_js__WEBPACK_IMPORTED_MODULE_16__["default"]({
          layer: e,
          spatialReference: t,
          outFields: r,
          includeGeometry: a,
          lrucache: n
        }) : new _featureset_sources_FeatureLayerDynamic_js__WEBPACK_IMPORTED_MODULE_15__["default"]({
          layer: e,
          spatialReference: t,
          outFields: r,
          includeGeometry: a,
          lrucache: n
        });
      }

      function C(t) {
        if (null !== _featureset_support_cache_js__WEBPACK_IMPORTED_MODULE_7__["default"].applicationCache) {
          var e = _featureset_support_cache_js__WEBPACK_IMPORTED_MODULE_7__["default"].applicationCache.getLayerInfo(t);

          if (null !== e) return e;
        }

        var r = Object(_request_js__WEBPACK_IMPORTED_MODULE_2__["default"])(t, {
          responseType: "json",
          query: {
            f: "json"
          }
        }).then(function (t) {
          if (t.data) {
            var _r = t.data;
            return _r.layers || (_r.layers = []), _r.tables || (_r.tables = []), Object(_core_promiseUtils_js__WEBPACK_IMPORTED_MODULE_0__["resolve"])(_r);
          }

          return Object(_core_promiseUtils_js__WEBPACK_IMPORTED_MODULE_0__["resolve"])({
            layers: [],
            tables: []
          });
        });
        return null !== _featureset_support_cache_js__WEBPACK_IMPORTED_MODULE_7__["default"].applicationCache && (_featureset_support_cache_js__WEBPACK_IMPORTED_MODULE_7__["default"].applicationCache.setLayerInfo(t, r), r = r["catch"](function (e) {
          throw _featureset_support_cache_js__WEBPACK_IMPORTED_MODULE_7__["default"].applicationCache.clearLayerInfo(t), e;
        })), r;
      }

      function F(t, r) {
        var a = {
          metadata: null,
          networkId: -1,
          unVersion: 3,
          terminals: [],
          queryelem: null,
          layerNameLkp: {},
          lkp: null
        };
        return C(t).then(function (s) {
          if (a.metadata = s, s.controllerDatasetLayers && void 0 !== s.controllerDatasetLayers.utilityNetworkLayerId && null !== s.controllerDatasetLayers.utilityNetworkLayerId) {
            if (s.layers) {
              var _iterator5 = _createForOfIteratorHelper(s.layers),
                  _step5;

              try {
                for (_iterator5.s(); !(_step5 = _iterator5.n()).done;) {
                  var e = _step5.value;
                  a.layerNameLkp[e.id] = e.name;
                }
              } catch (err) {
                _iterator5.e(err);
              } finally {
                _iterator5.f();
              }
            }

            if (s.tables) {
              var _iterator6 = _createForOfIteratorHelper(s.tables),
                  _step6;

              try {
                for (_iterator6.s(); !(_step6 = _iterator6.n()).done;) {
                  var _e5 = _step6.value;
                  a.layerNameLkp[_e5.id] = _e5.name;
                }
              } catch (err) {
                _iterator6.e(err);
              } finally {
                _iterator6.f();
              }
            }

            var i = s.controllerDatasetLayers.utilityNetworkLayerId;
            return a.networkId = i, function (e, t) {
              var r = "QUERYDATAELEMTS:" + t.toString() + ":" + e;

              if (null !== _featureset_support_cache_js__WEBPACK_IMPORTED_MODULE_7__["default"].applicationCache) {
                var _e6 = _featureset_support_cache_js__WEBPACK_IMPORTED_MODULE_7__["default"].applicationCache.getLayerInfo(r);

                if (null !== _e6) return _e6;
              }

              var a = Object(_request_js__WEBPACK_IMPORTED_MODULE_2__["default"])(e + "/queryDataElements", {
                method: "post",
                responseType: "json",
                query: {
                  layers: JSON.stringify([t.toString()]),
                  f: "json"
                }
              }).then(function (e) {
                if (e.data) {
                  var _t3 = e.data;
                  if (_t3.layerDataElements && _t3.layerDataElements[0]) return _t3.layerDataElements[0];
                }

                throw new Error("Not Found");
              });
              return null !== _featureset_support_cache_js__WEBPACK_IMPORTED_MODULE_7__["default"].applicationCache && (_featureset_support_cache_js__WEBPACK_IMPORTED_MODULE_7__["default"].applicationCache.setLayerInfo(r, a), a = a["catch"](function (e) {
                throw _featureset_support_cache_js__WEBPACK_IMPORTED_MODULE_7__["default"].applicationCache.clearLayerInfo(r), e;
              })), a;
            }(t, i).then(function (s) {
              if (s) {
                a.queryelem = s, a.queryelem && a.queryelem.dataElement && void 0 !== a.queryelem.dataElement.schemaGeneration && (a.unVersion = a.queryelem.dataElement.schemaGeneration), a.lkp = {}, a.queryelem.dataElement.domainNetworks || (a.queryelem.dataElement.domainNetworks = []);

                var _iterator7 = _createForOfIteratorHelper(a.queryelem.dataElement.domainNetworks),
                    _step7;

                try {
                  for (_iterator7.s(); !(_step7 = _iterator7.n()).done;) {
                    var _e9 = _step7.value;

                    var _iterator10 = _createForOfIteratorHelper(_e9.edgeSources ? _e9.edgeSources : []),
                        _step10;

                    try {
                      for (_iterator10.s(); !(_step10 = _iterator10.n()).done;) {
                        var _t5 = _step10.value;
                        var _e10 = {
                          layerId: _t5.layerId,
                          sourceId: _t5.sourceId,
                          className: a.layerNameLkp[_t5.layerId] ? a.layerNameLkp[_t5.layerId] : null
                        };
                        _e10.className && (a.lkp[_e10.className] = _e10);
                      }
                    } catch (err) {
                      _iterator10.e(err);
                    } finally {
                      _iterator10.f();
                    }

                    var _iterator11 = _createForOfIteratorHelper(_e9.junctionSources ? _e9.junctionSources : []),
                        _step11;

                    try {
                      for (_iterator11.s(); !(_step11 = _iterator11.n()).done;) {
                        var _t6 = _step11.value;
                        var _e11 = {
                          layerId: _t6.layerId,
                          sourceId: _t6.sourceId,
                          className: a.layerNameLkp[_t6.layerId] ? a.layerNameLkp[_t6.layerId] : null
                        };
                        _e11.className && (a.lkp[_e11.className] = _e11);
                      }
                    } catch (err) {
                      _iterator11.e(err);
                    } finally {
                      _iterator11.f();
                    }
                  }
                } catch (err) {
                  _iterator7.e(err);
                } finally {
                  _iterator7.f();
                }

                if (a.queryelem.dataElement.terminalConfigurations) {
                  var _iterator8 = _createForOfIteratorHelper(a.queryelem.dataElement.terminalConfigurations),
                      _step8;

                  try {
                    for (_iterator8.s(); !(_step8 = _iterator8.n()).done;) {
                      var _e7 = _step8.value;

                      var _iterator9 = _createForOfIteratorHelper(_e7.terminals),
                          _step9;

                      try {
                        for (_iterator9.s(); !(_step9 = _iterator9.n()).done;) {
                          var _t4 = _step9.value;
                          a.terminals.push({
                            terminalId: _t4.terminalId,
                            terminalName: _t4.terminalName
                          });
                        }
                      } catch (err) {
                        _iterator9.e(err);
                      } finally {
                        _iterator9.f();
                      }
                    }
                  } catch (err) {
                    _iterator8.e(err);
                  } finally {
                    _iterator8.f();
                  }
                }

                return function (t) {
                  if (null !== _featureset_support_cache_js__WEBPACK_IMPORTED_MODULE_7__["default"].applicationCache) {
                    var _e8 = _featureset_support_cache_js__WEBPACK_IMPORTED_MODULE_7__["default"].applicationCache.getLayerInfo(t);

                    if (null !== _e8) return _e8;
                  }

                  var r = Object(_request_js__WEBPACK_IMPORTED_MODULE_2__["default"])(t, {
                    responseType: "json",
                    query: {
                      f: "json"
                    }
                  }).then(function (t) {
                    if (t.data) {
                      var _r2 = t.data;
                      return Object(_core_promiseUtils_js__WEBPACK_IMPORTED_MODULE_0__["resolve"])(_r2);
                    }

                    return Object(_core_promiseUtils_js__WEBPACK_IMPORTED_MODULE_0__["resolve"])(null);
                  });
                  return null !== _featureset_support_cache_js__WEBPACK_IMPORTED_MODULE_7__["default"].applicationCache && (_featureset_support_cache_js__WEBPACK_IMPORTED_MODULE_7__["default"].applicationCache.setLayerInfo(t, r), r = r["catch"](function (e) {
                    throw _featureset_support_cache_js__WEBPACK_IMPORTED_MODULE_7__["default"].applicationCache.clearLayerInfo(t), e;
                  })), r;
                }(t + "/" + i).then(function (e) {
                  if (e.systemLayers && void 0 !== e.systemLayers.associationsTableId && null !== e.systemLayers.associationsTableId) {
                    var n = [];
                    return a.unVersion >= 4 && (n.push("STATUS"), n.push("PERCENTALONG")), T(t + "/" + e.systemLayers.associationsTableId.toString(), r, ["OBJECTID", "FROMNETWORKSOURCEID", "TONETWORKSOURCEID", "FROMGLOBALID", "TOGLOBALID", "TOTERMINALID", "FROMTERMINALID", "ASSOCIATIONTYPE", "ISCONTENTVISIBLE", "GLOBALID"].concat(n), !1, null).then(function (e) {
                      return e.load();
                    }).then(function (e) {
                      return a.unVersion >= 4 ? (e = e.filter(_core_sql_WhereClause_js__WEBPACK_IMPORTED_MODULE_8__["WhereClause"].create("STATUS NOT IN (1, 2, 3, 4, 5, 6, 7, 9, 10, 11, 12, 13, 14, 15, 17, 18, 19, 20, 21, 22, 23, 25, 26, 27, 28, 29, 30, 31, 33, 34, 35, 36, 37, 38, 39, 41, 42, 43, 44, 45, 46, 47, 49, 50, 51, 52, 53, 54, 55, 57, 58, 59, 60, 61, 62,63)", e.getFieldsIndex()))).load() : e;
                    }).then(function (e) {
                      return {
                        lkp: a.lkp,
                        associations: e,
                        unVersion: a.unVersion,
                        terminals: a.terminals
                      };
                    });
                  }

                  return {
                    associations: null,
                    unVersion: a.unVersion,
                    lkp: null,
                    terminals: []
                  };
                });
              }

              return {
                associations: null,
                unVersion: a.unVersion,
                lkp: null,
                terminals: []
              };
            });
          }

          return {
            associations: null,
            unVersion: a.unVersion,
            lkp: null,
            terminals: []
          };
        });
      }

      function g(e, t, r) {
        var a = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : null;
        var n = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : null;
        var s = arguments.length > 5 && arguments[5] !== undefined ? arguments[5] : !0;
        var i = arguments.length > 6 && arguments[6] !== undefined ? arguments[6] : null;
        var l = e.serviceUrl();
        return l ? (l = "/" === l.charAt(l.length - 1) ? l + t.relatedTableId.toString() : l + "/" + t.relatedTableId.toString(), T(l, a, n, s, i).then(function (l) {
          return new _featureset_sources_FeatureLayerRelated_js__WEBPACK_IMPORTED_MODULE_17__["default"]({
            layer: e,
            relatedLayer: l,
            relationship: t,
            objectId: r,
            spatialReference: a,
            outFields: n,
            includeGeometry: s,
            lrucache: i
          });
        })) : null;
      }

      _featureset_actions_AttributeFilter_js__WEBPACK_IMPORTED_MODULE_9__["default"].registerAction(), _featureset_actions_GroupBy_js__WEBPACK_IMPORTED_MODULE_11__["default"].registerAction(), _featureset_actions_OrderBy_js__WEBPACK_IMPORTED_MODULE_10__["default"].registerAction(), _featureset_actions_SpatialFilter_js__WEBPACK_IMPORTED_MODULE_12__["default"].registerAction(), _featureset_actions_Top_js__WEBPACK_IMPORTED_MODULE_13__["default"].registerAction();

      var k = /*#__PURE__*/function (_featureSetCollection) {
        _inherits(k, _featureSetCollection);

        var _super2 = _createSuper(k);

        function k(e) {
          var _this9;

          var t = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : null;
          var r = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : null;

          _classCallCheck(this, k);

          _this9 = _super2.call(this), _this9._map = e, _this9._overridespref = t, _this9.lrucache = r, _this9._instantLayers = [];
          return _this9;
        }

        _createClass(k, [{
          key: "makeAndAddFeatureSet",
          value: function makeAndAddFeatureSet(e) {
            var t = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : !0;
            var r = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : null;
            var a = A(e, this._overridespref, null === r ? ["*"] : r, t, this.lrucache);
            return this._instantLayers.push({
              featureset: a,
              opitem: e,
              includeGeometry: t,
              outFields: JSON.stringify(r)
            }), a;
          }
        }, {
          key: "featureSetByName",
          value: function featureSetByName(e) {
            var _this10 = this;

            var r = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : !0;
            var a = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : null;
            if (void 0 !== this._map.loaded && void 0 !== this._map.load && !1 === this._map.loaded) return this._map.load().then(function () {
              try {
                return _this10.featureSetByName(e, r, a);
              } catch (e) {
                return Object(_core_promiseUtils_js__WEBPACK_IMPORTED_MODULE_0__["reject"])(e);
              }
            });
            null === a && (a = ["*"]), a = (a = a.slice(0)).sort();
            var n = JSON.stringify(a);

            for (var t = 0; t < this._instantLayers.length; t++) {
              var _a = this._instantLayers[t];
              if (_a.opitem.title === e && _a.includeGeometry === r && _a.outFields === n) return this.resolvePromise(this._instantLayers[t].featureset);
            }

            var s = this._map.layers.find(function (t) {
              return t instanceof _layers_FeatureLayer_js__WEBPACK_IMPORTED_MODULE_14__["default"] && t.title === e;
            });

            if (s) return this.resolvePromise(this.makeAndAddFeatureSet(s, r, a));

            if (this._map.tables) {
              var _t7 = this._map.tables.find(function (t) {
                return !!(t.title && t.title === e || t.title && t.title === e);
              });

              if (_t7) {
                if (_t7 instanceof _layers_FeatureLayer_js__WEBPACK_IMPORTED_MODULE_14__["default"]) return this.resolvePromise(this.makeAndAddFeatureSet(_t7, r, a));
                if (_t7._materializedTable) ;else {
                  var _e12 = _t7.outFields ? _t7 : _objectSpread(_objectSpread({}, _t7), {}, {
                    outFields: ["*"]
                  });

                  _t7._materializedTable = new _layers_FeatureLayer_js__WEBPACK_IMPORTED_MODULE_14__["default"](_e12);
                }
                return _t7._materializedTable.load().then(function () {
                  return _this10.resolvePromise(_this10.makeAndAddFeatureSet(_t7._materializedTable, r, a));
                });
              }
            }

            return this.resolvePromise(null);
          }
        }, {
          key: "featureSetById",
          value: function featureSetById(e) {
            var _this11 = this;

            var r = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : !0;
            var a = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : ["*"];
            if (void 0 !== this._map.loaded && void 0 !== this._map.load && !1 === this._map.loaded) return this._map.load().then(function () {
              try {
                return _this11.featureSetById(e, r, a);
              } catch (e) {
                return Object(_core_promiseUtils_js__WEBPACK_IMPORTED_MODULE_0__["reject"])(e);
              }
            });
            null === a && (a = ["*"]), a = (a = a.slice(0)).sort();
            var n = JSON.stringify(a);

            for (var t = 0; t < this._instantLayers.length; t++) {
              var _a2 = this._instantLayers[t];
              if (_a2.opitem.id === e && _a2.includeGeometry === r && _a2.outFields === n) return this.resolvePromise(this._instantLayers[t].featureset);
            }

            var s = this._map.layers.find(function (t) {
              return t instanceof _layers_FeatureLayer_js__WEBPACK_IMPORTED_MODULE_14__["default"] && t.id === e;
            });

            if (s) return this.resolvePromise(this.makeAndAddFeatureSet(s, r, a));

            if (this._map.tables) {
              var _t8 = this._map.tables.find(function (t) {
                return t.id === e;
              });

              if (_t8) {
                if (_t8 instanceof _layers_FeatureLayer_js__WEBPACK_IMPORTED_MODULE_14__["default"]) return this.resolvePromise(this.makeAndAddFeatureSet(_t8, r, a));
                if (_t8._materializedTable) ;else {
                  var _e13 = _objectSpread(_objectSpread({}, _t8), {}, {
                    outFields: ["*"]
                  });

                  _t8._materializedTable = new _layers_FeatureLayer_js__WEBPACK_IMPORTED_MODULE_14__["default"](_e13);
                }
                return _t8._materializedTable.load().then(function () {
                  return _this11.resolvePromise(_this11.makeAndAddFeatureSet(_t8._materializedTable, r, a));
                });
              }
            }

            return this.resolvePromise(null);
          }
        }]);

        return k;
      }(_featureSetCollection_js__WEBPACK_IMPORTED_MODULE_6__["default"]);

      var j = /*#__PURE__*/function (_featureSetCollection2) {
        _inherits(j, _featureSetCollection2);

        var _super3 = _createSuper(j);

        function j(e) {
          var _this12;

          var t = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : null;
          var r = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : null;

          _classCallCheck(this, j);

          _this12 = _super3.call(this), _this12._url = e, _this12._overridespref = t, _this12.lrucache = r, _this12.metadata = null, _this12._instantLayers = [];
          return _this12;
        }

        _createClass(j, [{
          key: "url",
          get: function get() {
            return this._url;
          }
        }, {
          key: "makeAndAddFeatureSet",
          value: function makeAndAddFeatureSet(e) {
            var t = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : !0;
            var r = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : null;
            var a = A(e, this._overridespref, null === r ? ["*"] : r, t, this.lrucache);
            return this._instantLayers.push({
              featureset: a,
              opitem: e,
              includeGeometry: t,
              outFields: JSON.stringify(r)
            }), a;
          }
        }, {
          key: "_loadMetaData",
          value: function _loadMetaData() {
            var _this13 = this;

            return C(this._url).then(function (e) {
              return _this13.metadata = e, e;
            });
          }
        }, {
          key: "load",
          value: function load() {
            return this._loadMetaData();
          }
        }, {
          key: "clone",
          value: function clone() {
            return new j(this._url, this._overridespref, this.lrucache);
          }
        }, {
          key: "featureSetByName",
          value: function featureSetByName(e) {
            var _this14 = this;

            var t = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : !0;
            var r = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : null;
            null === r && (r = ["*"]), r = (r = r.slice(0)).sort();
            var a = JSON.stringify(r);

            for (var _r3 = 0; _r3 < this._instantLayers.length; _r3++) {
              var n = this._instantLayers[_r3];
              if (n.opitem.title === e && n.includeGeometry === t && n.outFields === a) return this.resolvePromise(this._instantLayers[_r3].featureset);
            }

            return this._loadMetaData().then(function (a) {
              var n = null;

              var _iterator12 = _createForOfIteratorHelper(a.layers ? a.layers : []),
                  _step12;

              try {
                for (_iterator12.s(); !(_step12 = _iterator12.n()).done;) {
                  var _t10 = _step12.value;
                  _t10.name === e && (n = _t10);
                }
              } catch (err) {
                _iterator12.e(err);
              } finally {
                _iterator12.f();
              }

              if (!n) {
                var _iterator13 = _createForOfIteratorHelper(a.tables ? a.tables : []),
                    _step13;

                try {
                  for (_iterator13.s(); !(_step13 = _iterator13.n()).done;) {
                    var _t9 = _step13.value;
                    _t9.name === e && (n = _t9);
                  }
                } catch (err) {
                  _iterator13.e(err);
                } finally {
                  _iterator13.f();
                }
              }

              return n ? N(_this14._url + "/" + n.id, ["*"]).then(function (e) {
                return _this14.makeAndAddFeatureSet(e, t, r);
              }) : _this14.resolvePromise(null);
            });
          }
        }, {
          key: "featureSetById",
          value: function featureSetById(e) {
            var _this15 = this;

            var t = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : !0;
            var r = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : ["*"];
            null === r && (r = ["*"]), r = (r = r.slice(0)).sort();
            var a = JSON.stringify(r);
            e = null != e ? e.toString() : "";

            for (var _r4 = 0; _r4 < this._instantLayers.length; _r4++) {
              var n = this._instantLayers[_r4];
              if (n.opitem.id === e && n.includeGeometry === t && n.outFields === a) return this.resolvePromise(this._instantLayers[_r4].featureset);
            }

            return this._loadMetaData().then(function (a) {
              var n = null;

              var _iterator14 = _createForOfIteratorHelper(a.layers ? a.layers : []),
                  _step14;

              try {
                for (_iterator14.s(); !(_step14 = _iterator14.n()).done;) {
                  var _t12 = _step14.value;
                  null !== _t12.id && void 0 !== _t12.id && _t12.id.toString() === e && (n = _t12);
                }
              } catch (err) {
                _iterator14.e(err);
              } finally {
                _iterator14.f();
              }

              if (!n) {
                var _iterator15 = _createForOfIteratorHelper(a.tables ? a.tables : []),
                    _step15;

                try {
                  for (_iterator15.s(); !(_step15 = _iterator15.n()).done;) {
                    var _t11 = _step15.value;
                    null !== _t11.id && void 0 !== _t11.id && _t11.id.toString() === e && (n = _t11);
                  }
                } catch (err) {
                  _iterator15.e(err);
                } finally {
                  _iterator15.f();
                }
              }

              return n ? N(_this15._url + "/" + n.id, ["*"]).then(function (e) {
                return _this15.makeAndAddFeatureSet(e, t, r);
              }) : _this15.resolvePromise(null);
            });
          }
        }]);

        return j;
      }(_featureSetCollection_js__WEBPACK_IMPORTED_MODULE_6__["default"]);

      function O(e, t) {
        var r = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : null;
        return new k(e, t, r);
      }

      function w(e, t) {
        var r = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : null;
        return new j(e, t, r);
      }

      function v(e, t) {
        if (null === e) return t;
        return new _portal_Portal_js__WEBPACK_IMPORTED_MODULE_3__["default"]({
          url: e.field("url")
        });
      }

      function E(t, r, s) {
        return _kernel_js__WEBPACK_IMPORTED_MODULE_1__["id"].findCredential(t.restUrl) ? "loaded" === t.loadStatus && "" === r && t.user && t.user.sourceJSON && !1 === s ? Object(_core_promiseUtils_js__WEBPACK_IMPORTED_MODULE_0__["resolve"])(t.user.sourceJSON) : "" === r ? Object(_request_js__WEBPACK_IMPORTED_MODULE_2__["default"])(t.restUrl + "/community/self", {
          responseType: "json",
          query: _objectSpread({
            f: "json"
          }, !1 === s ? {} : {
            returnUserLicenseTypeExtensions: !0
          })
        }).then(function (t) {
          if (t.data) {
            var _r5 = t.data;
            if (_r5 && _r5.username) return Object(_core_promiseUtils_js__WEBPACK_IMPORTED_MODULE_0__["resolve"])(_r5);
          }

          return Object(_core_promiseUtils_js__WEBPACK_IMPORTED_MODULE_0__["resolve"])(null);
        }) : Object(_request_js__WEBPACK_IMPORTED_MODULE_2__["default"])(t.restUrl + "/community/users/" + r, {
          responseType: "json",
          query: {
            f: "json"
          }
        }).then(function (t) {
          if (t.data) {
            var _r6 = t.data;
            return _r6.error ? null : Object(_core_promiseUtils_js__WEBPACK_IMPORTED_MODULE_0__["resolve"])(_r6);
          }

          return Object(_core_promiseUtils_js__WEBPACK_IMPORTED_MODULE_0__["resolve"])(null);
        }) : Object(_core_promiseUtils_js__WEBPACK_IMPORTED_MODULE_0__["resolve"])(null);
      }

      function b(a, n, s, o, c, d, m) {
        if (_featureset_support_cache_js__WEBPACK_IMPORTED_MODULE_7__["default"].applicationCache) {
          var r = _featureset_support_cache_js__WEBPACK_IMPORTED_MODULE_7__["default"].applicationCache.getLayerInfo(a + ":" + d.url);

          if (r) return r.then(function (r) {
            try {
              var t = new _layers_FeatureLayer_js__WEBPACK_IMPORTED_MODULE_14__["default"]({
                url: Object(_featureset_support_shared_js__WEBPACK_IMPORTED_MODULE_5__["extractServiceUrl"])(r.url) + "/" + n,
                outFields: ["*"]
              });
              return Object(_core_promiseUtils_js__WEBPACK_IMPORTED_MODULE_0__["resolve"])(A(t, s, o, c, m));
            } catch (e) {
              return Object(_core_promiseUtils_js__WEBPACK_IMPORTED_MODULE_0__["reject"])(e);
            }
          }, function (e) {
            return Object(_core_promiseUtils_js__WEBPACK_IMPORTED_MODULE_0__["reject"])(e);
          });
        }

        return Object(_core_promiseUtils_js__WEBPACK_IMPORTED_MODULE_0__["create"])(function (e, t) {
          var r = new _portal_PortalItem_js__WEBPACK_IMPORTED_MODULE_4__["default"]({
            id: a,
            portal: d
          }).load();
          _featureset_support_cache_js__WEBPACK_IMPORTED_MODULE_7__["default"].applicationCache && _featureset_support_cache_js__WEBPACK_IMPORTED_MODULE_7__["default"].applicationCache.setLayerInfo(a + ":" + d.url, r), r.then(function (r) {
            try {
              var _t13 = new _layers_FeatureLayer_js__WEBPACK_IMPORTED_MODULE_14__["default"]({
                url: Object(_featureset_support_shared_js__WEBPACK_IMPORTED_MODULE_5__["extractServiceUrl"])(r.url) + "/" + n,
                outFields: ["*"]
              });

              e(A(_t13, s, o, c, m));
            } catch (e) {
              t(e);
            }
          }, function (e) {
            _featureset_support_cache_js__WEBPACK_IMPORTED_MODULE_7__["default"].applicationCache && _featureset_support_cache_js__WEBPACK_IMPORTED_MODULE_7__["default"].applicationCache.clearLayerInfo(a + ":" + d.url), t(e);
          });
        });
      }
      /***/

    },

    /***/
    "LK1Z":
    /*!************************************************************************!*\
      !*** ./node_modules/@arcgis/core/arcade/featureset/actions/Adapted.js ***!
      \************************************************************************/

    /*! exports provided: AdaptedFeatureSet, AdaptedField, FieldRename, OriginalField, SqlExpressionAdapted, StringToCodeAdapted */

    /***/
    function LK1Z(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "AdaptedFeatureSet", function () {
        return E;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "AdaptedField", function () {
        return m;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "FieldRename", function () {
        return v;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "OriginalField", function () {
        return w;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "SqlExpressionAdapted", function () {
        return T;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "StringToCodeAdapted", function () {
        return C;
      });
      /* harmony import */


      var _core_promiseUtils_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ../../../core/promiseUtils.js */
      "9MzC");
      /* harmony import */


      var _geometry_SpatialReference_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ../../../geometry/SpatialReference.js */
      "WZb1");
      /* harmony import */


      var _Graphic_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ../../../Graphic.js */
      "jWBI");
      /* harmony import */


      var _support_shared_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ../support/shared.js */
      "hTzF");
      /* harmony import */


      var _kernel_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ../../kernel.js */
      "hUmP");
      /* harmony import */


      var _support_IdSet_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ../support/IdSet.js */
      "ZPxV");
      /* harmony import */


      var _core_sql_WhereClause_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ../../../core/sql/WhereClause.js */
      "ZqIb");
      /* harmony import */


      var _support_sqlUtils_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! ../support/sqlUtils.js */
      "B8fU");
      /* harmony import */


      var _support_FeatureSet_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! ../support/FeatureSet.js */
      "T3Nt");
      /*
      All material copyright ESRI, All Rights Reserved, unless otherwise specified.
      See https://js.arcgis.com/4.18/esri/copyright.txt for details.
      */


      var m = /*#__PURE__*/function () {
        function m() {
          _classCallCheck(this, m);

          this.sqlRewritable = !1;
        }

        _createClass(m, [{
          key: "postInitialization",
          value: function postInitialization(e, t) {}
        }]);

        return m;
      }();

      var w = /*#__PURE__*/function (_m) {
        _inherits(w, _m);

        var _super4 = _createSuper(w);

        function w(e) {
          var _this16;

          _classCallCheck(this, w);

          _this16 = _super4.call(this), _this16.field = e, _this16.sqlRewritable = !0;
          return _this16;
        }

        _createClass(w, [{
          key: "extractValue",
          value: function extractValue(e) {
            return e.attributes[this.field.name];
          }
        }, {
          key: "rewriteSql",
          value: function rewriteSql(e) {
            return {
              rewritten: this.sqlRewritable,
              where: e
            };
          }
        }]);

        return w;
      }(m);

      var v = /*#__PURE__*/function (_m2) {
        _inherits(v, _m2);

        var _super5 = _createSuper(v);

        function v(e, t, r) {
          var _this17;

          _classCallCheck(this, v);

          _this17 = _super5.call(this), _this17.originalField = e, _this17.sqlRewritable = !0, _this17.field = Object(_support_shared_js__WEBPACK_IMPORTED_MODULE_3__["cloneField"])(e), _this17.field.name = t, _this17.field.alias = r;
          return _this17;
        }

        _createClass(v, [{
          key: "rewriteSql",
          value: function rewriteSql(e, t) {
            return {
              rewritten: this.sqlRewritable,
              where: Object(_support_sqlUtils_js__WEBPACK_IMPORTED_MODULE_7__["reformulateWithoutField"])(e, this.field.name, this.originalField.name, t.getFieldsIndex())
            };
          }
        }, {
          key: "extractValue",
          value: function extractValue(e) {
            return e.attributes[this.originalField.name];
          }
        }]);

        return v;
      }(m);

      var C = /*#__PURE__*/function (_m3) {
        _inherits(C, _m3);

        var _super6 = _createSuper(C);

        function C(e, t, r) {
          var _this18;

          _classCallCheck(this, C);

          _this18 = _super6.call(this), _this18.field = e, _this18.codefield = t, _this18.lkp = r, _this18.reverseLkp = {};

          for (var _e14 in r) {
            _this18.reverseLkp[r[_e14]] = _e14;
          }

          _this18.sqlRewritable = !0;
          return _this18;
        }

        _createClass(C, [{
          key: "rewriteSql",
          value: function rewriteSql(e, t) {
            var r = this.evaluateNodeToWhereClause(e.parseTree, _support_shared_js__WEBPACK_IMPORTED_MODULE_3__["FeatureServiceDatabaseType"].Standardised, this.field.name, this.codefield instanceof _core_sql_WhereClause_js__WEBPACK_IMPORTED_MODULE_6__["WhereClause"] ? Object(_support_sqlUtils_js__WEBPACK_IMPORTED_MODULE_7__["toWhereClause"])(this.codefield, _support_shared_js__WEBPACK_IMPORTED_MODULE_3__["FeatureServiceDatabaseType"].Standardised) : this.codefield, e.parameters);
            return r.indexOf(C.BADNESS) >= 0 ? {
              rewritten: !1,
              where: e
            } : {
              rewritten: this.sqlRewritable,
              where: _core_sql_WhereClause_js__WEBPACK_IMPORTED_MODULE_6__["WhereClause"].create(r, t._parent.getFieldsIndex())
            };
          }
        }, {
          key: "evaluateNodeToWhereClause",
          value: function evaluateNodeToWhereClause(e, t) {
            var r = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : null;
            var s = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : null;
            var i = arguments.length > 4 ? arguments[4] : undefined;
            var a, l, n, o;

            switch (e.type) {
              case "interval":
                return Object(_support_sqlUtils_js__WEBPACK_IMPORTED_MODULE_7__["convertIntervalToSql"])(this.evaluateNodeToWhereClause(e.value, t, r, s, i), e.qualifier, e.op);

              case "case_expression":
                {
                  var _s = " CASE ";
                  "simple" === e.format && (_s += this.evaluateNodeToWhereClause(e.operand, t, r, C.BADNESS, i));

                  for (var _a3 = 0; _a3 < e.clauses.length; _a3++) {
                    _s += " WHEN " + this.evaluateNodeToWhereClause(e.clauses[_a3].operand, t, r, C.BADNESS, i) + " THEN " + this.evaluateNodeToWhereClause(e.clauses[_a3].value, t, r, C.BADNESS, i);
                  }

                  return null !== e["else"] && (_s += " ELSE " + this.evaluateNodeToWhereClause(e["else"], t, r, C.BADNESS, i)), _s += " END ", _s;
                }

              case "param":
                {
                  var _r7 = i[e.value.toLowerCase()];

                  if ("string" == typeof _r7) {
                    return "'" + i[e.value.toLowerCase()].toString().replace(/'/g, "''") + "'";
                  }

                  if (_r7 instanceof Date) return Object(_support_sqlUtils_js__WEBPACK_IMPORTED_MODULE_7__["makeDateString"])(_r7, t);

                  if (_r7 instanceof Array) {
                    var _e15 = [];

                    for (var _s2 = 0; _s2 < _r7.length; _s2++) {
                      "string" == typeof _r7[_s2] ? _e15.push("'" + _r7[_s2].toString().replace(/'/g, "''") + "'") : _r7[_s2] instanceof Date ? _e15.push(Object(_support_sqlUtils_js__WEBPACK_IMPORTED_MODULE_7__["makeDateString"])(_r7[_s2], t)) : _e15.push(_r7[_s2].toString());
                    }

                    return _e15;
                  }

                  return _r7.toString();
                }

              case "expr_list":
                l = [];

                var _iterator16 = _createForOfIteratorHelper(e.value),
                    _step16;

                try {
                  for (_iterator16.s(); !(_step16 = _iterator16.n()).done;) {
                    var _a4 = _step16.value;
                    l.push(this.evaluateNodeToWhereClause(_a4, t, r, s, i));
                  }
                } catch (err) {
                  _iterator16.e(err);
                } finally {
                  _iterator16.f();
                }

                return l;

              case "unary_expr":
                return " ( NOT " + this.evaluateNodeToWhereClause(e.expr, t, r, C.BADNESS, i) + " ) ";

              case "binary_expr":
                switch (e.operator) {
                  case "AND":
                    return " (" + this.evaluateNodeToWhereClause(e.left, t, r, s, i) + " AND " + this.evaluateNodeToWhereClause(e.right, t, r, s, i) + ") ";

                  case "OR":
                    return " (" + this.evaluateNodeToWhereClause(e.left, t, r, s, i) + " OR " + this.evaluateNodeToWhereClause(e.right, t, r, s, i) + ") ";

                  case "IS":
                    if ("null" !== e.right.type) throw new Error("Unsupported RHS for IS");
                    return " (" + this.evaluateNodeToWhereClause(e.left, t, r, s, i) + " IS NULL )";

                  case "ISNOT":
                    if ("null" !== e.right.type) throw new Error("Unsupported RHS for IS");
                    return " (" + this.evaluateNodeToWhereClause(e.left, t, r, s, i) + " IS NOT NULL )";

                  case "IN":
                    if (a = [], "expr_list" === e.right.type) {
                      if ("column_ref" === e.left.type && e.left.column.toUpperCase() === this.field.name.toUpperCase()) {
                        var _a5 = [];

                        var _l = !0;

                        var _iterator17 = _createForOfIteratorHelper(e.right.value),
                            _step17;

                        try {
                          for (_iterator17.s(); !(_step17 = _iterator17.n()).done;) {
                            var _t14 = _step17.value;

                            if ("string" !== _t14.type) {
                              _l = !1;
                              break;
                            }

                            if (void 0 === this.lkp[_t14.value]) {
                              _l = !1;
                              break;
                            }

                            _a5.push(this.lkp[_t14.value].toString());
                          }
                        } catch (err) {
                          _iterator17.e(err);
                        } finally {
                          _iterator17.f();
                        }

                        if (_l) return " (" + this.evaluateNodeToWhereClause(e.left, t, r, s, i) + " IN (" + _a5.join(",") + ")) ";
                      }

                      return a = this.evaluateNodeToWhereClause(e.right, t, r, s, i), " (" + this.evaluateNodeToWhereClause(e.left, t, r, s, i) + " IN (" + a.join(",") + ")) ";
                    }

                    return o = this.evaluateNodeToWhereClause(e.right, t, r, s, i), o instanceof Array ? " (" + this.evaluateNodeToWhereClause(e.left, t, r, s, i) + " IN (" + o.join(",") + ")) " : " (" + this.evaluateNodeToWhereClause(e.left, t, r, s, i) + " IN (" + o + ")) ";

                  case "NOT IN":
                    if (a = [], "expr_list" === e.right.type) {
                      if ("column_ref" === e.left.type && e.left.column.toUpperCase() === this.field.name.toUpperCase()) {
                        var _a6 = [];

                        var _l2 = !0;

                        var _iterator18 = _createForOfIteratorHelper(e.right.value),
                            _step18;

                        try {
                          for (_iterator18.s(); !(_step18 = _iterator18.n()).done;) {
                            var _t15 = _step18.value;

                            if ("string" !== _t15.type) {
                              _l2 = !1;
                              break;
                            }

                            if (void 0 === this.lkp[_t15.value]) {
                              _l2 = !1;
                              break;
                            }

                            _a6.push(this.lkp[_t15.value].toString());
                          }
                        } catch (err) {
                          _iterator18.e(err);
                        } finally {
                          _iterator18.f();
                        }

                        if (_l2) return " (" + this.evaluateNodeToWhereClause(e.left, t, r, s, i) + " NOT IN (" + _a6.join(",") + ")) ";
                      }

                      return a = this.evaluateNodeToWhereClause(e.right, t, r, s, i), " (" + this.evaluateNodeToWhereClause(e.left, t, r, s, i) + " NOT IN (" + a.join(",") + ")) ";
                    }

                    return o = this.evaluateNodeToWhereClause(e.right, t, r, s, i), o instanceof Array ? " (" + this.evaluateNodeToWhereClause(e.left, t, r, s, i) + " NOT IN (" + o.join(",") + ")) " : " (" + this.evaluateNodeToWhereClause(e.left, t, r, s, i) + " NOT IN (" + o + ")) ";

                  case "BETWEEN":
                    return n = this.evaluateNodeToWhereClause(e.right, t, r, C.BADNESS, i), " (" + this.evaluateNodeToWhereClause(e.left, t, r, C.BADNESS, i) + " BETWEEN " + n[0] + " AND " + n[1] + " ) ";

                  case "NOTBETWEEN":
                    return n = this.evaluateNodeToWhereClause(e.right, t, r, C.BADNESS, i), " (" + this.evaluateNodeToWhereClause(e.left, t, r, C.BADNESS, i) + " NOT BETWEEN " + n[0] + " AND " + n[1] + " ) ";

                  case "LIKE":
                    return "" !== e.escape ? " (" + this.evaluateNodeToWhereClause(e.left, t, r, C.BADNESS, i) + " LIKE " + this.evaluateNodeToWhereClause(e.right, t, r, C.BADNESS, i) + " ESCAPE '" + e.escape + "') " : " (" + this.evaluateNodeToWhereClause(e.left, t, r, C.BADNESS, i) + " LIKE " + this.evaluateNodeToWhereClause(e.right, t, r, C.BADNESS, i) + ") ";

                  case "NOT LIKE":
                    return "" !== e.escape ? " (" + this.evaluateNodeToWhereClause(e.left, t, r, C.BADNESS, i) + " NOT LIKE " + this.evaluateNodeToWhereClause(e.right, t, r, C.BADNESS, i) + " ESCAPE '" + e.escape + "') " : " (" + this.evaluateNodeToWhereClause(e.left, t, r, C.BADNESS, i) + " NOT LIKE " + this.evaluateNodeToWhereClause(e.right, t, r, C.BADNESS, i) + ") ";

                  case "<>":
                  case "=":
                    if ("column_ref" === e.left.type && "string" === e.right.type) {
                      if (e.left.column.toUpperCase() === this.field.name.toUpperCase() && void 0 !== this.lkp[e.right.value.toString()]) return " (" + s + " " + e.operator + " " + this.lkp[e.right.value.toString()].toString() + ") ";
                    } else if ("column_ref" === e.right.type && "string" === e.left.type && e.right.column.toUpperCase() === this.field.name.toUpperCase()) return " (" + this.lkp[e.right.value.toString()].toString() + " " + e.operator + " " + s + ") ";

                    return " (" + this.evaluateNodeToWhereClause(e.left, t, r, C.BADNESS, i) + " " + e.operator + " " + this.evaluateNodeToWhereClause(e.right, t, r, C.BADNESS, i) + ") ";

                  case "<":
                  case ">":
                  case ">=":
                  case "<=":
                  case "*":
                  case "-":
                  case "+":
                  case "/":
                    return " (" + this.evaluateNodeToWhereClause(e.left, t, r, C.BADNESS, i) + " " + e.operator + " " + this.evaluateNodeToWhereClause(e.right, t, r, C.BADNESS, i) + ") ";
                }

                throw new Error("Not Supported Operator " + e.operator);

              case "null":
                return "null";

              case "bool":
                return !0 === e.value ? "1" : "0";

              case "string":
                return "'" + e.value.toString().replace(/'/g, "''") + "'";

              case "timestamp":
              case "date":
                return Object(_support_sqlUtils_js__WEBPACK_IMPORTED_MODULE_7__["makeDateString"])(e.value, t);

              case "number":
                return e.value.toString();

              case "current_time":
                return Object(_support_sqlUtils_js__WEBPACK_IMPORTED_MODULE_7__["makeToday"])("date" === e.mode, t);

              case "column_ref":
                return r && r.toLowerCase() === e.column.toLowerCase() ? "(" + s + ")" : e.column;

              case "function":
                {
                  var _s3 = this.evaluateNodeToWhereClause(e.args, t, r, C.BADNESS, i);

                  return Object(_support_sqlUtils_js__WEBPACK_IMPORTED_MODULE_7__["translateFunctionToDatabaseSpecific"])(e.name, _s3, t);
                }
            }

            throw new Error("Unsupported sql syntax " + e.type);
          }
        }, {
          key: "extractValue",
          value: function extractValue(e) {
            return this.codefield instanceof _core_sql_WhereClause_js__WEBPACK_IMPORTED_MODULE_6__["WhereClause"] ? this.reverseLkp[this.codefield.calculateValueCompiled(e)] : this.reverseLkp[e.attributes[this.codefield]];
          }
        }]);

        return C;
      }(m);

      C.BADNESS = "_!!!_BAD_LKP_!!!!";

      var T = /*#__PURE__*/function (_m4) {
        _inherits(T, _m4);

        var _super7 = _createSuper(T);

        function T(e, t) {
          var _this19;

          _classCallCheck(this, T);

          _this19 = _super7.call(this), _this19.field = e, _this19.sql = t;
          return _this19;
        }

        _createClass(T, [{
          key: "rewriteSql",
          value: function rewriteSql(e, t) {
            return {
              rewritten: !0,
              where: Object(_support_sqlUtils_js__WEBPACK_IMPORTED_MODULE_7__["reformulateWithoutField"])(e, this.field.name, Object(_support_sqlUtils_js__WEBPACK_IMPORTED_MODULE_7__["toWhereClause"])(this.sql, _support_shared_js__WEBPACK_IMPORTED_MODULE_3__["FeatureServiceDatabaseType"].Standardised), t.getFieldsIndex())
            };
          }
        }, {
          key: "extractValue",
          value: function extractValue(e) {
            return this.sql.calculateValueCompiled(e);
          }
        }]);

        return T;
      }(m);

      var E = /*#__PURE__*/function (_support_FeatureSet_j2) {
        _inherits(E, _support_FeatureSet_j2);

        var _super8 = _createSuper(E);

        function E(e) {
          var _this20;

          _classCallCheck(this, E);

          _this20 = _super8.call(this, e), _this20._calcFunc = null, _this20.declaredClass = "esri.arcade.featureset.actions.Adapted", _this20.adaptedFields = null, _this20._extraFilter = null, _this20._extraFilter = e.extraFilter, _this20._parent = e.parentfeatureset, _this20._maxProcessing = 30, _this20.adaptedFields = e.adaptedFields;
          return _this20;
        }

        _createClass(E, [{
          key: "_initialiseFeatureSet",
          value: function _initialiseFeatureSet() {
            null !== this._parent ? (this.geometryType = this._parent.geometryType, this.objectIdField = this._parent.objectIdField, this.globalIdField = this._parent.globalIdField, this.spatialReference = this._parent.spatialReference, this.hasM = this._parent.hasM, this.hasZ = this._parent.hasZ, this.typeIdField = this._parent.typeIdField, this.types = this._parent.types) : (this.spatialReference = new _geometry_SpatialReference_js__WEBPACK_IMPORTED_MODULE_1__["default"]({
              wkid: 4326
            }), this.objectIdField = "", this.globalIdField = "", this.geometryType = _support_shared_js__WEBPACK_IMPORTED_MODULE_3__["layerGeometryEsriConstants"].point, this.typeIdField = "", this.types = null), this.fields = [];

            var _iterator19 = _createForOfIteratorHelper(this.adaptedFields),
                _step19;

            try {
              for (_iterator19.s(); !(_step19 = _iterator19.n()).done;) {
                var e = _step19.value;
                e.postInitialization(this, this._parent), this.fields.push(e.field);
              }
            } catch (err) {
              _iterator19.e(err);
            } finally {
              _iterator19.f();
            }
          }
        }, {
          key: "_getSet",
          value: function _getSet(t) {
            var _this21 = this;

            return null === this._wset ? this._ensureLoaded().then(function () {
              return _this21._extraFilter ? _this21._getFilteredSet("", null, null, null, t) : _this21._parent._getSet(t);
            }).then(function (e) {
              return _this21._checkCancelled(t), _this21._wset = new _support_IdSet_js__WEBPACK_IMPORTED_MODULE_5__["default"](e._candidates.slice(0), e._known.slice(0), e._ordered, _this21._clonePageDefinition(e.pagesDefinition)), _this21._wset;
            }) : Object(_core_promiseUtils_js__WEBPACK_IMPORTED_MODULE_0__["resolve"])(this._wset);
          }
        }, {
          key: "_isInFeatureSet",
          value: function _isInFeatureSet(e) {
            return this._parent._isInFeatureSet(e);
          }
        }, {
          key: "_getFeatures",
          value: function _getFeatures(t, r, i, a) {
            var _this22 = this;

            var l = [];
            -1 !== r && void 0 === this._featureCache[r] && l.push(r);

            var h = this._maxQueryRate();

            if (!0 === this._checkIfNeedToExpandKnownPage(t, h)) return this._expandPagedSet(t, h, 0, 0, a).then(function () {
              return _this22._getFeatures(t, r, i, a);
            });
            var u = 0;

            for (var e = t._lastFetchedIndex; e < t._known.length && (u++, u <= i && (t._lastFetchedIndex += 1), !(void 0 === this._featureCache[t._known[e]] && (t._known[e] !== r && l.push(t._known[e]), l.length >= h - 1))); e++) {
              ;
            }

            if (0 === l.length) return Object(_core_promiseUtils_js__WEBPACK_IMPORTED_MODULE_0__["resolve"])("success");
            t = new _support_IdSet_js__WEBPACK_IMPORTED_MODULE_5__["default"]([], l, t._ordered, null);
            var d = Math.min(l.length, i);
            return this._parent._getFeatures(t, -1, d, a).then(function () {
              _this22._checkCancelled(a);

              var e = [];

              for (var _t16 = 0; _t16 < d; _t16++) {
                var _r8 = _this22._parent._featureFromCache(l[_t16]);

                void 0 !== _r8 && e.push({
                  geometry: _r8.geometry,
                  attributes: _r8.attributes,
                  id: l[_t16]
                });
              }

              for (var _i = 0, _e16 = e; _i < _e16.length; _i++) {
                var _t17 = _e16[_i];
                var _e17 = [];

                var _iterator20 = _createForOfIteratorHelper(_this22.adaptedFields),
                    _step20;

                try {
                  for (_iterator20.s(); !(_step20 = _iterator20.n()).done;) {
                    var _r9 = _step20.value;
                    _e17[_r9.field.name] = _r9.extractValue(_t17);
                  }
                } catch (err) {
                  _iterator20.e(err);
                } finally {
                  _iterator20.f();
                }

                _this22._featureCache[_t17.id] = new _Graphic_js__WEBPACK_IMPORTED_MODULE_2__["default"]({
                  attributes: _e17,
                  geometry: Object(_kernel_js__WEBPACK_IMPORTED_MODULE_4__["cloneGeometry"])(_t17.geometry)
                });
              }

              return "success";
            });
          }
        }, {
          key: "_fetchAndRefineFeatures",
          value: function _fetchAndRefineFeatures() {
            return Object(_core_promiseUtils_js__WEBPACK_IMPORTED_MODULE_0__["reject"])(new Error("Fetch and Refine should not be called in this featureset"));
          }
        }, {
          key: "_getFilteredSet",
          value: function _getFilteredSet(e, t, r, s, i) {
            var _this23 = this;

            var a = !1;
            var l = this.reformulateWithoutAdaptions(r);
            a = l.cannot, r = l.where;
            var n = !1;

            if (null !== s) {
              n = !0;
              var _e18 = [];

              var _iterator21 = _createForOfIteratorHelper(this.adaptedFields),
                  _step21;

              try {
                for (_iterator21.s(); !(_step21 = _iterator21.n()).done;) {
                  var _t18 = _step21.value;

                  if (!(_t18 instanceof w) && !0 === s.scanForField(_t18.field.name)) {
                    if (!(_t18 instanceof v)) {
                      s = null, n = !1;
                      break;
                    }

                    _e18.push({
                      field: _t18.field.name,
                      newfield: _t18.originalField.name
                    });
                  }
                }
              } catch (err) {
                _iterator21.e(err);
              } finally {
                _iterator21.f();
              }

              s && _e18.length > 0 && (s = s.replaceFields(_e18));
            }

            return null !== r ? null !== this._extraFilter && (r = Object(_support_sqlUtils_js__WEBPACK_IMPORTED_MODULE_7__["combine"])(this._extraFilter, r)) : r = this._extraFilter, this._ensureLoaded().then(function () {
              return _this23._parent._getFilteredSet(e, t, r, s, i);
            }).then(function (e) {
              var t;
              return _this23._checkCancelled(i), t = !0 === a ? new _support_IdSet_js__WEBPACK_IMPORTED_MODULE_5__["default"](e._candidates.slice(0).concat(e._known.slice(0)), [], !0 === n && e._ordered, _this23._clonePageDefinition(e.pagesDefinition)) : new _support_IdSet_js__WEBPACK_IMPORTED_MODULE_5__["default"](e._candidates.slice(0), e._known.slice(0), !0 === n && e._ordered, _this23._clonePageDefinition(e.pagesDefinition)), t;
            });
          }
        }, {
          key: "reformulateWithoutAdaptions",
          value: function reformulateWithoutAdaptions(e) {
            var t = {
              cannot: !1,
              where: e
            };

            if (null !== e) {
              var _iterator22 = _createForOfIteratorHelper(this.adaptedFields),
                  _step22;

              try {
                for (_iterator22.s(); !(_step22 = _iterator22.n()).done;) {
                  var r = _step22.value;

                  if (!0 === Object(_support_sqlUtils_js__WEBPACK_IMPORTED_MODULE_7__["scanForField"])(e, r.field.name)) {
                    var s = r.rewriteSql(e, this);

                    if (!0 !== s.rewritten) {
                      t.cannot = !0, t.where = null;
                      break;
                    }

                    t.where = s.where;
                  }
                }
              } catch (err) {
                _iterator22.e(err);
              } finally {
                _iterator22.f();
              }
            }

            return t;
          }
        }, {
          key: "_stat",
          value: function _stat(t, r, s, i, a, l, n) {
            var _this24 = this;

            var o = !1,
                h = this.reformulateWithoutAdaptions(r);
            return o = h.cannot, r = h.where, h = this.reformulateWithoutAdaptions(a), o = o || h.cannot, null !== (a = h.where) ? null !== this._extraFilter && (a = Object(_support_sqlUtils_js__WEBPACK_IMPORTED_MODULE_7__["combine"])(this._extraFilter, a)) : a = this._extraFilter, !0 === o ? null === a && "" === s && null === i ? this._manualStat(t, r, l, n) : Object(_core_promiseUtils_js__WEBPACK_IMPORTED_MODULE_0__["resolve"])({
              calculated: !1
            }) : this._parent._stat(t, r, s, i, a, l, n).then(function (e) {
              return !1 === e.calculated ? null === a && "" === s && null === i ? _this24._manualStat(t, r, l, n) : {
                calculated: !1
              } : e;
            });
          }
        }, {
          key: "_canDoAggregates",
          value: function _canDoAggregates(t, r, s, i, a) {
            if (null === this._parent) return Object(_core_promiseUtils_js__WEBPACK_IMPORTED_MODULE_0__["resolve"])(!1);

            for (var _r10 = 0; _r10 < t.length; _r10++) {
              var _iterator23 = _createForOfIteratorHelper(this.adaptedFields),
                  _step23;

              try {
                for (_iterator23.s(); !(_step23 = _iterator23.n()).done;) {
                  var _s4 = _step23.value;
                  if (t[_r10].toLowerCase() === _s4.field.name.toLowerCase() && !(_s4 instanceof w)) return Object(_core_promiseUtils_js__WEBPACK_IMPORTED_MODULE_0__["resolve"])(!1);
                }
              } catch (err) {
                _iterator23.e(err);
              } finally {
                _iterator23.f();
              }
            }

            var l = [];

            for (var _t19 = 0; _t19 < r.length; _t19++) {
              var _s5 = r[_t19];

              if (null !== _s5.workingexpr) {
                var _t20 = this.reformulateWithoutAdaptions(_s5.workingexpr);

                if (_t20.cannot) return Object(_core_promiseUtils_js__WEBPACK_IMPORTED_MODULE_0__["resolve"])(!1);

                var _r11 = _s5.clone();

                _r11.workingexpr = _t20.where, l.push(_r11);
              } else l.push(_s5);
            }

            var n = this.reformulateWithoutAdaptions(a);
            return n.cannot ? Object(_core_promiseUtils_js__WEBPACK_IMPORTED_MODULE_0__["resolve"])(!1) : (null !== (a = n.where) ? null !== this._extraFilter && (a = Object(_support_sqlUtils_js__WEBPACK_IMPORTED_MODULE_7__["combine"])(this._extraFilter, a)) : a = this._extraFilter, this._parent._canDoAggregates(t, l, s, i, a));
          }
        }, {
          key: "_getAggregatePagesDataSourceDefinition",
          value: function _getAggregatePagesDataSourceDefinition(e, r, s, i, a, l, n) {
            if (null === this._parent) return Object(_core_promiseUtils_js__WEBPACK_IMPORTED_MODULE_0__["reject"])(new Error("Should never be called"));
            var o = [];

            for (var _e19 = 0; _e19 < r.length; _e19++) {
              var _s6 = r[_e19];

              if (null !== _s6.workingexpr) {
                var _e20 = this.reformulateWithoutAdaptions(_s6.workingexpr);

                if (_e20.cannot) return Object(_core_promiseUtils_js__WEBPACK_IMPORTED_MODULE_0__["reject"])(new Error("Should never be called"));

                var _r12 = _s6.clone();

                _r12.workingexpr = _e20.where, o.push(_r12);
              } else o.push(_s6);
            }

            var h = this.reformulateWithoutAdaptions(a);
            return h.cannot ? Object(_core_promiseUtils_js__WEBPACK_IMPORTED_MODULE_0__["reject"])(new Error("Should never be called")) : (null !== (a = h.where) ? null !== this._extraFilter && (a = Object(_support_sqlUtils_js__WEBPACK_IMPORTED_MODULE_7__["combine"])(this._extraFilter, a)) : a = this._extraFilter, this._parent._getAggregatePagesDataSourceDefinition(e, o, s, i, a, l, n));
          }
        }], [{
          key: "findField",
          value: function findField(e, t) {
            var _iterator24 = _createForOfIteratorHelper(e),
                _step24;

            try {
              for (_iterator24.s(); !(_step24 = _iterator24.n()).done;) {
                var r = _step24.value;
                if (r.name.toLowerCase() === t.toString().toLowerCase()) return r;
              }
            } catch (err) {
              _iterator24.e(err);
            } finally {
              _iterator24.f();
            }

            return null;
          }
        }]);

        return E;
      }(_support_FeatureSet_js__WEBPACK_IMPORTED_MODULE_8__["default"]);
      /***/

    },

    /***/
    "OAJp":
    /*!***********************************************************************************!*\
      !*** ./node_modules/@arcgis/core/arcade/featureset/sources/FeatureLayerMemory.js ***!
      \***********************************************************************************/

    /*! exports provided: default */

    /***/
    function OAJp(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony import */


      var _core_promiseUtils_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ../../../core/promiseUtils.js */
      "9MzC");
      /* harmony import */


      var _geometry_Geometry_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ../../../geometry/Geometry.js */
      "N2DF");
      /* harmony import */


      var _Graphic_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ../../../Graphic.js */
      "jWBI");
      /* harmony import */


      var _layers_support_Field_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ../../../layers/support/Field.js */
      "ofM5");
      /* harmony import */


      var _support_shared_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ../support/shared.js */
      "hTzF");
      /* harmony import */


      var _support_IdSet_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ../support/IdSet.js */
      "ZPxV");
      /* harmony import */


      var _support_sqlUtils_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ../support/sqlUtils.js */
      "B8fU");
      /* harmony import */


      var _support_FeatureSet_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! ../support/FeatureSet.js */
      "T3Nt");
      /* harmony import */


      var _layers_support_FeatureType_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! ../../../layers/support/FeatureType.js */
      "orEy");
      /* harmony import */


      var _tasks_support_Query_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! ../../../tasks/support/Query.js */
      "xk++");
      /* harmony import */


      var _layers_FeatureLayer_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
      /*! ../../../layers/FeatureLayer.js */
      "W9Wu");
      /*
      All material copyright ESRI, All Rights Reserved, unless otherwise specified.
      See https://js.arcgis.com/4.18/esri/copyright.txt for details.
      */


      var y = /*#__PURE__*/function (_support_FeatureSet_j3) {
        _inherits(y, _support_FeatureSet_j3);

        var _super9 = _createSuper(y);

        function y(e) {
          var _this25;

          _classCallCheck(this, y);

          _this25 = _super9.call(this, e), _this25.declaredClass = "esri.arcade.featureset.sources.FeatureLayerMemory", _this25._removeGeometry = !1, _this25._overrideFields = null, _this25._forceIsTable = !1, e.spatialReference && (_this25.spatialReference = e.spatialReference), _this25._transparent = !0, _this25._maxProcessing = 1e3, _this25._layer = e.layer, _this25._wset = null, !0 === e.isTable && (_this25._forceIsTable = !0), void 0 !== e.outFields && (_this25._overrideFields = e.outFields), void 0 !== e.includeGeometry && (_this25._removeGeometry = !1 === e.includeGeometry);
          return _this25;
        }

        _createClass(y, [{
          key: "_maxQueryRate",
          value: function _maxQueryRate() {
            return _support_shared_js__WEBPACK_IMPORTED_MODULE_4__["defaultMaxRecords"];
          }
        }, {
          key: "end",
          value: function end() {
            return this._layer;
          }
        }, {
          key: "optimisePagingFeatureQueries",
          value: function optimisePagingFeatureQueries() {}
        }, {
          key: "load",
          value: function load() {
            var _this26 = this;

            return null === this._loadPromise && (this._loadPromise = Object(_core_promiseUtils_js__WEBPACK_IMPORTED_MODULE_0__["create"])(function (e, t) {
              if (!0 === _this26._layer.loaded) return _this26._initialiseFeatureSet(), void e(_this26);
              _this26._layer.when().then(function () {
                try {
                  _this26._initialiseFeatureSet(), e(_this26);
                } catch (e) {
                  t(e);
                }
              }, t), _this26._layer.load();
            })), this._loadPromise;
          }
        }, {
          key: "gdbVersion",
          get: function get() {
            return "";
          }
        }, {
          key: "_initialiseFeatureSet",
          value: function _initialiseFeatureSet() {
            if (null == this.spatialReference && (this.spatialReference = this._layer.spatialReference), this.geometryType = this._layer.geometryType, this.fields = this._layer.fields.slice(0), this._layer.outFields) {
              if (1 === this._layer.outFields.length && "*" === this._layer.outFields[0]) ;else {
                var e = [];

                var _iterator25 = _createForOfIteratorHelper(this.fields),
                    _step25;

                try {
                  for (_iterator25.s(); !(_step25 = _iterator25.n()).done;) {
                    var t = _step25.value;
                    if ("oid" === t.type) e.push(t);else {
                      var _iterator26 = _createForOfIteratorHelper(this._layer.outFields),
                          _step26;

                      try {
                        for (_iterator26.s(); !(_step26 = _iterator26.n()).done;) {
                          var r = _step26.value;

                          if (r.toLowerCase() === t.name.toLowerCase()) {
                            e.push(t);
                            break;
                          }
                        }
                      } catch (err) {
                        _iterator26.e(err);
                      } finally {
                        _iterator26.f();
                      }
                    }
                  }
                } catch (err) {
                  _iterator25.e(err);
                } finally {
                  _iterator25.f();
                }

                this.fields = e;
              }
            } else ;
            if (null !== this._overrideFields) if (1 === this._overrideFields.length && "*" === this._overrideFields[0]) this._overrideFields = null;else {
              var _e21 = [],
                  _t21 = [];

              var _iterator27 = _createForOfIteratorHelper(this.fields),
                  _step27;

              try {
                for (_iterator27.s(); !(_step27 = _iterator27.n()).done;) {
                  var _r13 = _step27.value;
                  if ("oid" === _r13.type) _e21.push(_r13), _t21.push(_r13.name);else {
                    var _iterator28 = _createForOfIteratorHelper(this._overrideFields),
                        _step28;

                    try {
                      for (_iterator28.s(); !(_step28 = _iterator28.n()).done;) {
                        var s = _step28.value;

                        if (s.toLowerCase() === _r13.name.toLowerCase()) {
                          _e21.push(_r13), _t21.push(_r13.name);
                          break;
                        }
                      }
                    } catch (err) {
                      _iterator28.e(err);
                    } finally {
                      _iterator28.f();
                    }
                  }
                }
              } catch (err) {
                _iterator27.e(err);
              } finally {
                _iterator27.f();
              }

              this.fields = _e21, this._overrideFields = _t21;
            }
            this.objectIdField = this._layer.objectIdField;

            var _iterator29 = _createForOfIteratorHelper(this.fields),
                _step29;

            try {
              for (_iterator29.s(); !(_step29 = _iterator29.n()).done;) {
                var _e22 = _step29.value;
                "global-id" === _e22.type && (this.globalIdField = _e22.name);
              }
            } catch (err) {
              _iterator29.e(err);
            } finally {
              _iterator29.f();
            }

            this.hasM = this._layer.supportsM, this.hasZ = this._layer.supportsZ, this._databaseType = _support_shared_js__WEBPACK_IMPORTED_MODULE_4__["FeatureServiceDatabaseType"].Standardised, this.typeIdField = this._layer.typeIdField, this.types = this._layer.types;
          }
        }, {
          key: "isTable",
          value: function isTable() {
            return this._forceIsTable || this._layer.isTable || "table" === this._layer.type || !this._layer.geometryType;
          }
        }, {
          key: "_isInFeatureSet",
          value: function _isInFeatureSet() {
            return _support_shared_js__WEBPACK_IMPORTED_MODULE_4__["IdState"].InFeatureSet;
          }
        }, {
          key: "_candidateIdTransform",
          value: function _candidateIdTransform(e) {
            return e;
          }
        }, {
          key: "_getSet",
          value: function _getSet(e) {
            var _this27 = this;

            return null === this._wset ? this._ensureLoaded().then(function () {
              return _this27._getFilteredSet("", null, null, null, e);
            }).then(function (e) {
              return _this27._wset = e, e;
            }) : Object(_core_promiseUtils_js__WEBPACK_IMPORTED_MODULE_0__["resolve"])(this._wset);
          }
        }, {
          key: "_changeFeature",
          value: function _changeFeature(e) {
            var t = {};

            var _iterator30 = _createForOfIteratorHelper(this.fields),
                _step30;

            try {
              for (_iterator30.s(); !(_step30 = _iterator30.n()).done;) {
                var r = _step30.value;
                t[r.name] = e.attributes[r.name];
              }
            } catch (err) {
              _iterator30.e(err);
            } finally {
              _iterator30.f();
            }

            return new _Graphic_js__WEBPACK_IMPORTED_MODULE_2__["default"]({
              geometry: !0 === this._removeGeometry ? null : e.geometry,
              attributes: t
            });
          }
        }, {
          key: "_getFilteredSet",
          value: function _getFilteredSet(e, r, s, i, a) {
            var _this28 = this;

            var l = "",
                o = !1;

            if (null !== i && (l = i.constructClause(), o = !0), this.isTable() && r && null !== e && "" !== e) {
              var _e23 = new _support_IdSet_js__WEBPACK_IMPORTED_MODULE_5__["default"]([], [], !0, null);

              return Object(_core_promiseUtils_js__WEBPACK_IMPORTED_MODULE_0__["resolve"])(_e23);
            }

            var c = new _tasks_support_Query_js__WEBPACK_IMPORTED_MODULE_9__["default"]();
            return c.where = null === s ? null === r ? "1=1" : "" : Object(_support_sqlUtils_js__WEBPACK_IMPORTED_MODULE_6__["toWhereClause"])(s, _support_shared_js__WEBPACK_IMPORTED_MODULE_4__["FeatureServiceDatabaseType"].Standardised), c.spatialRelationship = this._makeRelationshipEnum(e), c.outSpatialReference = this.spatialReference, c.orderByFields = "" !== l ? l.split(",") : null, c.geometry = null === r ? null : r, c.returnGeometry = !0, c.relationParameter = this._makeRelationshipParam(e), this._layer.queryFeatures(c).then(function (e) {
              if (null === e) return new _support_IdSet_js__WEBPACK_IMPORTED_MODULE_5__["default"]([], [], o, null);

              _this28._checkCancelled(a);

              var t = [];
              e.features.forEach(function (e) {
                var r = e.attributes[_this28._layer.objectIdField];
                t.push(r), _this28._featureCache[r] = _this28._changeFeature(e);
              });
              return new _support_IdSet_js__WEBPACK_IMPORTED_MODULE_5__["default"]([], t, o, null);
            });
          }
        }, {
          key: "_makeRelationshipEnum",
          value: function _makeRelationshipEnum(e) {
            if (e.indexOf("esriSpatialRelRelation") >= 0) return "relation";

            switch (e) {
              case "esriSpatialRelRelation":
                return "relation";

              case "esriSpatialRelIntersects":
                return "intersects";

              case "esriSpatialRelContains":
                return "contains";

              case "esriSpatialRelOverlaps":
                return "overlaps";

              case "esriSpatialRelWithin":
                return "within";

              case "esriSpatialRelTouches":
                return "touches";

              case "esriSpatialRelCrosses":
                return "crosses";

              case "esriSpatialRelEnvelopeIntersects":
                return "envelope-intersects";
            }

            return e;
          }
        }, {
          key: "_makeRelationshipParam",
          value: function _makeRelationshipParam(e) {
            return e.indexOf("esriSpatialRelRelation") >= 0 ? e.split(":")[1] : "";
          }
        }, {
          key: "_queryAllFeatures",
          value: function _queryAllFeatures() {
            var _this29 = this;

            if (this._wset) return Object(_core_promiseUtils_js__WEBPACK_IMPORTED_MODULE_0__["resolve"])(this._wset);
            var e = new _tasks_support_Query_js__WEBPACK_IMPORTED_MODULE_9__["default"]();
            return e.where = "1=1", this._ensureLoaded().then(function () {
              if (_this29._layer.source && _this29._layer.source.items) {
                var _e24 = [];
                return _this29._layer.source.items.forEach(function (t) {
                  var r = t.attributes[_this29._layer.objectIdField];
                  _e24.push(r), _this29._featureCache[r] = _this29._changeFeature(t);
                }), _this29._wset = new _support_IdSet_js__WEBPACK_IMPORTED_MODULE_5__["default"]([], _e24, !1, null), _this29._wset;
              }

              return _this29._layer.queryFeatures(e).then(function (e) {
                var t = [];
                return e.features.forEach(function (e) {
                  var r = e.attributes[_this29._layer.objectIdField];
                  t.push(r), _this29._featureCache[r] = _this29._changeFeature(e);
                }), _this29._wset = new _support_IdSet_js__WEBPACK_IMPORTED_MODULE_5__["default"]([], t, !1, null), _this29._wset;
              });
            });
          }
        }, {
          key: "_getFeatures",
          value: function _getFeatures(e, s, i) {
            var a = [];
            -1 !== s && void 0 === this._featureCache[s] && a.push(s);

            for (var t = e._lastFetchedIndex; t < e._known.length && (e._lastFetchedIndex += 1, !(void 0 === this._featureCache[e._known[t]] && (e._known[t] !== s && a.push(e._known[t]), a.length > i))); t++) {
              ;
            }

            return 0 === a.length ? Object(_core_promiseUtils_js__WEBPACK_IMPORTED_MODULE_0__["resolve"])("success") : Object(_core_promiseUtils_js__WEBPACK_IMPORTED_MODULE_0__["reject"])(new Error("Unaccounted for Features. Not in Feature Collection"));
          }
        }, {
          key: "_refineSetBlock",
          value: function _refineSetBlock(e) {
            return Object(_core_promiseUtils_js__WEBPACK_IMPORTED_MODULE_0__["resolve"])(e);
          }
        }, {
          key: "_stat",
          value: function _stat() {
            return Object(_core_promiseUtils_js__WEBPACK_IMPORTED_MODULE_0__["resolve"])({
              calculated: !1
            });
          }
        }, {
          key: "_canDoAggregates",
          value: function _canDoAggregates() {
            return Object(_core_promiseUtils_js__WEBPACK_IMPORTED_MODULE_0__["resolve"])(!1);
          }
        }, {
          key: "relationshipMetaData",
          value: function relationshipMetaData() {
            return [];
          }
        }, {
          key: "nativeCapabilities",
          value: function nativeCapabilities() {
            return {
              title: this._layer.title,
              canQueryRelated: !1,
              source: this,
              capabilities: this._layer.capabilities,
              databaseType: this._databaseType,
              requestStandardised: !0
            };
          }
        }, {
          key: "queryAttachments",
          value: function queryAttachments() {
            return Object(_core_promiseUtils_js__WEBPACK_IMPORTED_MODULE_0__["resolve"])([]);
          }
        }, {
          key: "getFeatureByObjectId",
          value: function getFeatureByObjectId(e) {
            var t = new _tasks_support_Query_js__WEBPACK_IMPORTED_MODULE_9__["default"]();
            return t.where = this.objectIdField + "=" + e.toString(), this._layer.queryFeatures(t).then(function (e) {
              return 1 === e.features.length ? e.features[0] : null;
            });
          }
        }, {
          key: "getOwningSystemUrl",
          value: function getOwningSystemUrl() {
            return Object(_core_promiseUtils_js__WEBPACK_IMPORTED_MODULE_0__["resolve"])("");
          }
        }, {
          key: "getIdentityUser",
          value: function getIdentityUser() {
            return Object(_core_promiseUtils_js__WEBPACK_IMPORTED_MODULE_0__["resolve"])("");
          }
        }], [{
          key: "_cloneAttr",
          value: function _cloneAttr(e) {
            var t = {};

            for (var r in e) {
              t[r] = e[r];
            }

            return t;
          }
        }, {
          key: "create",
          value: function create(e, t) {
            var r = e.layerDefinition.objectIdField;
            var i = e.layerDefinition.typeIdField ? e.layerDefinition.typeIdField : "",
                l = [];

            if (e.layerDefinition.types) {
              var _iterator31 = _createForOfIteratorHelper(e.layerDefinition.types),
                  _step31;

              try {
                for (_iterator31.s(); !(_step31 = _iterator31.n()).done;) {
                  var _t22 = _step31.value;
                  l.push(_layers_support_FeatureType_js__WEBPACK_IMPORTED_MODULE_8__["default"].fromJSON(_t22));
                }
              } catch (err) {
                _iterator31.e(err);
              } finally {
                _iterator31.f();
              }
            }

            var n = e.layerDefinition.geometryType;
            void 0 === n && (n = e.featureSet.geometryType || "");
            var o = e.featureSet.features;
            var u = t.toJSON();

            if ("" === r || void 0 === r) {
              var _t23 = !1;

              var _iterator32 = _createForOfIteratorHelper(e.layerDefinition.fields),
                  _step32;

              try {
                for (_iterator32.s(); !(_step32 = _iterator32.n()).done;) {
                  var _s8 = _step32.value;

                  if ("oid" === _s8.type || "esriFieldTypeOID" === _s8.type) {
                    r = _s8.name, _t23 = !0;
                    break;
                  }
                }
              } catch (err) {
                _iterator32.e(err);
              } finally {
                _iterator32.f();
              }

              if (!1 === _t23) {
                var _t24 = "FID",
                    s = !0,
                    _i2 = 0;

                for (; s;) {
                  var _r14 = !0;

                  var _iterator33 = _createForOfIteratorHelper(e.layerDefinition.fields),
                      _step33;

                  try {
                    for (_iterator33.s(); !(_step33 = _iterator33.n()).done;) {
                      var _s7 = _step33.value;

                      if (_s7.name === _t24) {
                        _r14 = !1;
                        break;
                      }
                    }
                  } catch (err) {
                    _iterator33.e(err);
                  } finally {
                    _iterator33.f();
                  }

                  !0 === _r14 ? s = !1 : (_i2++, _t24 = "FID" + _i2.toString());
                }

                e.layerDefinition.fields.push({
                  type: "esriFieldTypeOID",
                  name: _t24,
                  alias: _t24
                });
                var a = [];

                for (var _r15 = 0; _r15 < o.length; _r15++) {
                  a.push({
                    geometry: e.featureSet.features[_r15].geometry,
                    attributes: e.featureSet.features[_r15].attributes ? this._cloneAttr(e.featureSet.features[_r15].attributes) : {}
                  }), a[_r15].attributes[_t24] = _r15;
                }

                o = a, r = _t24;
              }
            }

            var h = [];

            var _iterator34 = _createForOfIteratorHelper(e.layerDefinition.fields),
                _step34;

            try {
              for (_iterator34.s(); !(_step34 = _iterator34.n()).done;) {
                var _t25 = _step34.value;
                _t25 instanceof _layers_support_Field_js__WEBPACK_IMPORTED_MODULE_3__["default"] ? h.push(_t25) : h.push(_layers_support_Field_js__WEBPACK_IMPORTED_MODULE_3__["default"].fromJSON(_t25));
              }
            } catch (err) {
              _iterator34.e(err);
            } finally {
              _iterator34.f();
            }

            var c = n;

            switch (c) {
              case "esriGeometryPoint":
                c = "point";
                break;

              case "esriGeometryPolyline":
                c = "polyline";
                break;

              case "esriGeometryPolygon":
                c = "polygon";
                break;

              case "esriGeometryExtent":
                c = "extent";
                break;

              case "esriGeometryMultipoint":
                c = "multipoint";
            }

            var _iterator35 = _createForOfIteratorHelper(o),
                _step35;

            try {
              for (_iterator35.s(); !(_step35 = _iterator35.n()).done;) {
                var _e25 = _step35.value;
                _e25.geometry && _e25.geometry instanceof _geometry_Geometry_js__WEBPACK_IMPORTED_MODULE_1__["default"] == !1 && (_e25.geometry.type = c, void 0 === _e25.geometry.spatialReference && (_e25.geometry.spatialReference = u));
              }
            } catch (err) {
              _iterator35.e(err);
            } finally {
              _iterator35.f();
            }

            var f = {
              outFields: ["*"],
              source: o,
              fields: h,
              types: l,
              typeIdField: i,
              objectIdField: r,
              spatialReference: t
            };
            f.geometryType = c || "point";

            var _ = new _layers_FeatureLayer_js__WEBPACK_IMPORTED_MODULE_10__["default"](f);

            return new y({
              layer: _,
              spatialReference: t,
              isTable: null === c || "" === c
            });
          }
        }]);

        return y;
      }(_support_FeatureSet_js__WEBPACK_IMPORTED_MODULE_7__["default"]);
      /* harmony default export */


      __webpack_exports__["default"] = y;
      /***/
    },

    /***/
    "Xbkg":
    /*!************************************************************************!*\
      !*** ./node_modules/@arcgis/core/arcade/featureset/actions/OrderBy.js ***!
      \************************************************************************/

    /*! exports provided: default */

    /***/
    function Xbkg(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony import */


      var _core_promiseUtils_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ../../../core/promiseUtils.js */
      "9MzC");
      /* harmony import */


      var _chunks_languageUtils_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ../../../chunks/languageUtils.js */
      "idrm");
      /* harmony import */


      var _support_IdSet_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ../support/IdSet.js */
      "ZPxV");
      /* harmony import */


      var _support_FeatureSet_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ../support/FeatureSet.js */
      "T3Nt");
      /* harmony import */


      var _support_OrderbyClause_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ../support/OrderbyClause.js */
      "lq8Q");
      /*
      All material copyright ESRI, All Rights Reserved, unless otherwise specified.
      See https://js.arcgis.com/4.18/esri/copyright.txt for details.
      */


      var a = /*#__PURE__*/function (_support_FeatureSet_j4) {
        _inherits(a, _support_FeatureSet_j4);

        var _super10 = _createSuper(a);

        function a(e) {
          var _this30;

          _classCallCheck(this, a);

          _this30 = _super10.call(this, e), _this30._orderbyclause = null, _this30.declaredClass = "esri.arcade.featureset.actions.OrderBy", _this30._maxProcessing = 100, _this30._orderbyclause = e.orderbyclause, _this30._parent = e.parentfeatureset;
          return _this30;
        }

        _createClass(a, [{
          key: "_getSet",
          value: function _getSet(t) {
            var _this31 = this;

            return null === this._wset ? this._ensureLoaded().then(function () {
              return _this31._getFilteredSet("", null, null, _this31._orderbyclause, t);
            }).then(function (e) {
              return _this31._checkCancelled(t), _this31._wset = e, _this31._wset;
            }) : Object(_core_promiseUtils_js__WEBPACK_IMPORTED_MODULE_0__["resolve"])(this._wset);
          }
        }, {
          key: "manualOrderSet",
          value: function manualOrderSet(e, t) {
            var _this32 = this;

            return this.getIdColumnDictionary(e, [], -1, t).then(function (e) {
              _this32._orderbyclause.order(e);

              var t = new _support_IdSet_js__WEBPACK_IMPORTED_MODULE_2__["default"]([], [], !0, null);

              for (var r = 0; r < e.length; r++) {
                t._known.push(e[r].id);
              }

              return t;
            });
          }
        }, {
          key: "getIdColumnDictionary",
          value: function getIdColumnDictionary(t, n, s, i) {
            var _this33 = this;

            if (s < t._known.length - 1) {
              var e = this._maxQueryRate();

              if ("GETPAGES" === t._known[s + 1]) return Object(_chunks_languageUtils_js__WEBPACK_IMPORTED_MODULE_1__["Q"])(this._parent._expandPagedSet(t, e, 0, 0, i)).then(function () {
                return _this33.getIdColumnDictionary(t, n, s, i);
              });

              var _a9 = s + 1;

              var o = [];

              for (; _a9 < t._known.length && "GETPAGES" !== t._known[_a9];) {
                o.push(t._known[_a9]), _a9++;
              }

              return s += o.length, Object(_chunks_languageUtils_js__WEBPACK_IMPORTED_MODULE_1__["Q"])(this._parent._getFeatureBatch(o, i)).then(function (e) {
                _this33._checkCancelled(i);

                var _iterator36 = _createForOfIteratorHelper(e),
                    _step36;

                try {
                  for (_iterator36.s(); !(_step36 = _iterator36.n()).done;) {
                    var _t26 = _step36.value;
                    n.push({
                      id: _t26.attributes[_this33.objectIdField],
                      feature: _t26
                    });
                  }
                } catch (err) {
                  _iterator36.e(err);
                } finally {
                  _iterator36.f();
                }

                return _this33.getIdColumnDictionary(t, n, s, i);
              });
            }

            return t._candidates.length > 0 ? Object(_chunks_languageUtils_js__WEBPACK_IMPORTED_MODULE_1__["Q"])(this._refineSetBlock(t, this._maxProcessingRate(), i)).then(function () {
              return _this33._checkCancelled(i), _this33.getIdColumnDictionary(t, n, s, i);
            }) : Object(_core_promiseUtils_js__WEBPACK_IMPORTED_MODULE_0__["resolve"])(n);
          }
        }, {
          key: "_isInFeatureSet",
          value: function _isInFeatureSet(e) {
            return this._parent._isInFeatureSet(e);
          }
        }, {
          key: "_getFeatures",
          value: function _getFeatures(e, t, r, n) {
            return this._parent._getFeatures(e, t, r, n);
          }
        }, {
          key: "_featureFromCache",
          value: function _featureFromCache(e) {
            if (void 0 === this._featureCache[e]) {
              var t = this._parent._featureFromCache(e);

              if (void 0 === t) return;
              return null === t ? null : (this._featureCache[e] = t, t);
            }

            return this._featureCache[e];
          }
        }, {
          key: "_fetchAndRefineFeatures",
          value: function _fetchAndRefineFeatures() {
            return Object(_core_promiseUtils_js__WEBPACK_IMPORTED_MODULE_0__["reject"])(new Error("Fetch and Refine should not be called in this featureset"));
          }
        }, {
          key: "_getFilteredSet",
          value: function _getFilteredSet(e, t, r, s, i) {
            var _this34 = this;

            return this._ensureLoaded().then(function () {
              return _this34._parent._getFilteredSet(e, t, r, null === s ? _this34._orderbyclause : s, i);
            }).then(function (e) {
              var s;
              _this34._checkCancelled(i), s = new _support_IdSet_js__WEBPACK_IMPORTED_MODULE_2__["default"](e._candidates.slice(0), e._known.slice(0), e._ordered, _this34._clonePageDefinition(e.pagesDefinition));

              var _a8 = !0;

              return e._candidates.length > 0 && (_a8 = !1), !1 === s._ordered ? _this34.manualOrderSet(s, i).then(function (e) {
                return !1 === _a8 && (null === t && null === r || (e = new _support_IdSet_js__WEBPACK_IMPORTED_MODULE_2__["default"](e._candidates.slice(0).concat(e._known.slice(0)), [], e._ordered, _this34._clonePageDefinition(e.pagesDefinition)))), e;
              }) : s;
            });
          }
        }], [{
          key: "registerAction",
          value: function registerAction() {
            _support_FeatureSet_js__WEBPACK_IMPORTED_MODULE_3__["default"]._featuresetFunctions.orderBy = function (e) {
              return "" === e ? this : new a({
                parentfeatureset: this,
                orderbyclause: new _support_OrderbyClause_js__WEBPACK_IMPORTED_MODULE_4__["default"](e)
              });
            };
          }
        }]);

        return a;
      }(_support_FeatureSet_js__WEBPACK_IMPORTED_MODULE_3__["default"]);
      /* harmony default export */


      __webpack_exports__["default"] = a;
      /***/
    },

    /***/
    "YP08":
    /*!********************************************************************!*\
      !*** ./node_modules/@arcgis/core/arcade/featureset/actions/Top.js ***!
      \********************************************************************/

    /*! exports provided: default */

    /***/
    function YP08(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony import */


      var _core_promiseUtils_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ../../../core/promiseUtils.js */
      "9MzC");
      /* harmony import */


      var _support_shared_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ../support/shared.js */
      "hTzF");
      /* harmony import */


      var _support_IdSet_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ../support/IdSet.js */
      "ZPxV");
      /* harmony import */


      var _support_FeatureSet_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ../support/FeatureSet.js */
      "T3Nt");
      /*
      All material copyright ESRI, All Rights Reserved, unless otherwise specified.
      See https://js.arcgis.com/4.18/esri/copyright.txt for details.
      */


      var a = /*#__PURE__*/function (_support_FeatureSet_j5) {
        _inherits(a, _support_FeatureSet_j5);

        var _super11 = _createSuper(a);

        function a(t) {
          var _this35;

          _classCallCheck(this, a);

          _this35 = _super11.call(this, t), _this35._topnum = 0, _this35.declaredClass = "esri.arcade.featureset.actions.Top", _this35._countedin = 0, _this35._maxProcessing = 100, _this35._topnum = t.topnum, _this35._parent = t.parentfeatureset;
          return _this35;
        }

        _createClass(a, [{
          key: "_getSet",
          value: function _getSet(e) {
            var _this36 = this;

            return null === this._wset ? this._ensureLoaded().then(function () {
              return _this36._parent._getSet(e);
            }).then(function (t) {
              return _this36._wset = new _support_IdSet_js__WEBPACK_IMPORTED_MODULE_2__["default"](t._candidates.slice(0), t._known.slice(0), !1, _this36._clonePageDefinition(t.pagesDefinition)), _this36._setKnownLength(_this36._wset) > _this36._topnum && (_this36._wset._known = _this36._wset._known.slice(0, _this36._topnum)), _this36._setKnownLength(_this36._wset) >= _this36._topnum && (_this36._wset._candidates = []), _this36._wset;
            }) : Object(_core_promiseUtils_js__WEBPACK_IMPORTED_MODULE_0__["resolve"])(this._wset);
          }
        }, {
          key: "_setKnownLength",
          value: function _setKnownLength(t) {
            return t._known.length > 0 && "GETPAGES" === t._known[t._known.length - 1] ? t._known.length - 1 : t._known.length;
          }
        }, {
          key: "_isInFeatureSet",
          value: function _isInFeatureSet(t) {
            var e = this._parent._isInFeatureSet(t);

            if (e === _support_shared_js__WEBPACK_IMPORTED_MODULE_1__["IdState"].NotInFeatureSet) return e;
            var s = this._idstates[t];
            return s === _support_shared_js__WEBPACK_IMPORTED_MODULE_1__["IdState"].InFeatureSet || s === _support_shared_js__WEBPACK_IMPORTED_MODULE_1__["IdState"].NotInFeatureSet ? s : e === _support_shared_js__WEBPACK_IMPORTED_MODULE_1__["IdState"].InFeatureSet && void 0 === s ? this._countedin < this._topnum ? (this._idstates[t] = _support_shared_js__WEBPACK_IMPORTED_MODULE_1__["IdState"].InFeatureSet, this._countedin++, _support_shared_js__WEBPACK_IMPORTED_MODULE_1__["IdState"].InFeatureSet) : (this._idstates[t] = _support_shared_js__WEBPACK_IMPORTED_MODULE_1__["IdState"].NotInFeatureSet, _support_shared_js__WEBPACK_IMPORTED_MODULE_1__["IdState"].NotInFeatureSet) : _support_shared_js__WEBPACK_IMPORTED_MODULE_1__["IdState"].Unknown;
          }
        }, {
          key: "_expandPagedSet",
          value: function _expandPagedSet(n, s, i, _a10, r) {
            var _this37 = this;

            if (null === this._parent) return Object(_core_promiseUtils_js__WEBPACK_IMPORTED_MODULE_0__["reject"])(new Error("Parent Paging not implemented"));

            if (s > this._topnum && (s = this._topnum), this._countedin >= this._topnum && n.pagesDefinition.internal.set.length <= n.pagesDefinition.resultOffset) {
              var e = n._known.length;
              return e > 0 && "GETPAGES" === n._known[e - 1] && (n._known.length = e - 1), e = n._candidates.length, e > 0 && "GETPAGES" === n._candidates[e - 1] && (n._candidates.length = e - 1), Object(_core_promiseUtils_js__WEBPACK_IMPORTED_MODULE_0__["resolve"])("success");
            }

            return this._parent._expandPagedSet(n, s, i, _a10, r).then(function (t) {
              return _this37._setKnownLength(n) > _this37._topnum && (n._known.length = _this37._topnum), _this37._setKnownLength(n) >= _this37._topnum && (n._candidates.length = 0), t;
            });
          }
        }, {
          key: "_getFeatures",
          value: function _getFeatures(e, n, i, _a11) {
            var _this38 = this;

            var r = [],
                o = this._maxQueryRate();

            if (!0 === this._checkIfNeedToExpandKnownPage(e, o)) return this._expandPagedSet(e, o, 0, 0, _a11).then(function () {
              return _this38._getFeatures(e, n, i, _a11);
            });
            -1 !== n && void 0 === this._featureCache[n] && r.push(n);
            var _ = 0;

            for (var t = e._lastFetchedIndex; t < e._known.length && (_++, _ <= i && (e._lastFetchedIndex += 1), !(void 0 === this._featureCache[e._known[t]] && (e._known[t] !== n && r.push(e._known[t]), r.length > o - 1))); t++) {
              ;
            }

            if (0 === r.length) return Object(_core_promiseUtils_js__WEBPACK_IMPORTED_MODULE_0__["resolve"])("success");
            var h = new _support_IdSet_js__WEBPACK_IMPORTED_MODULE_2__["default"]([], r, !1, null),
                u = Math.min(r.length, i);
            return this._parent._getFeatures(h, -1, u, _a11).then(function () {
              for (var _t27 = 0; _t27 < u; _t27++) {
                var _e26 = _this38._parent._featureFromCache(r[_t27]);

                void 0 !== _e26 && (_this38._featureCache[r[_t27]] = _e26);
              }

              return "success";
            });
          }
        }, {
          key: "_getFilteredSet",
          value: function _getFilteredSet(t, e, n, i, _a12) {
            var _this39 = this;

            return this._ensureLoaded().then(function () {
              return _this39._getSet(_a12);
            }).then(function (t) {
              return new _support_IdSet_js__WEBPACK_IMPORTED_MODULE_2__["default"](t._candidates.slice(0).concat(t._known.slice(0)), [], !1, _this39._clonePageDefinition(t.pagesDefinition));
            });
          }
        }, {
          key: "_refineKnowns",
          value: function _refineKnowns(t, e) {
            var s = 0,
                i = null;
            var _a13 = [];

            for (var r = 0; r < t._candidates.length; r++) {
              var o = this._isInFeatureSet(t._candidates[r]);

              if (o === _support_shared_js__WEBPACK_IMPORTED_MODULE_1__["IdState"].InFeatureSet) {
                if (t._known.push(t._candidates[r]), s += 1, null === i ? i = {
                  start: r,
                  end: r
                } : i.end === r - 1 ? i.end = r : (_a13.push(i), i = {
                  start: r,
                  end: r
                }), t._known.length >= this._topnum) break;
              } else if (o === _support_shared_js__WEBPACK_IMPORTED_MODULE_1__["IdState"].NotInFeatureSet) null === i ? i = {
                start: r,
                end: r
              } : i.end === r - 1 ? i.end = r : (_a13.push(i), i = {
                start: r,
                end: r
              }), s += 1;else if (o === _support_shared_js__WEBPACK_IMPORTED_MODULE_1__["IdState"].Unknown) break;

              if (s >= e) break;
            }

            null !== i && _a13.push(i);

            for (var _e27 = _a13.length - 1; _e27 >= 0; _e27--) {
              t._candidates.splice(_a13[_e27].start, _a13[_e27].end - _a13[_e27].start + 1);
            }

            this._setKnownLength(t) > this._topnum && (t._known = t._known.slice(0, this._topnum)), this._setKnownLength(t) >= this._topnum && (t._candidates = []);
          }
        }, {
          key: "_stat",
          value: function _stat() {
            return Object(_core_promiseUtils_js__WEBPACK_IMPORTED_MODULE_0__["resolve"])({
              calculated: !1
            });
          }
        }, {
          key: "_canDoAggregates",
          value: function _canDoAggregates() {
            return Object(_core_promiseUtils_js__WEBPACK_IMPORTED_MODULE_0__["resolve"])(!1);
          }
        }], [{
          key: "registerAction",
          value: function registerAction() {
            _support_FeatureSet_js__WEBPACK_IMPORTED_MODULE_3__["default"]._featuresetFunctions.top = function (t) {
              return new a({
                parentfeatureset: this,
                topnum: t
              });
            };
          }
        }]);

        return a;
      }(_support_FeatureSet_js__WEBPACK_IMPORTED_MODULE_3__["default"]);
      /* harmony default export */


      __webpack_exports__["default"] = a;
      /***/
    },

    /***/
    "jLsz":
    /*!***************************************************************************!*\
      !*** ./node_modules/@arcgis/core/arcade/featureset/support/StatsField.js ***!
      \***************************************************************************/

    /*! exports provided: default */

    /***/
    function jLsz(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony import */


      var _shared_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ./shared.js */
      "hTzF");
      /* harmony import */


      var _core_sql_WhereClause_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ../../../core/sql/WhereClause.js */
      "ZqIb");
      /* harmony import */


      var _sqlUtils_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./sqlUtils.js */
      "B8fU");
      /*
      All material copyright ESRI, All Rights Reserved, unless otherwise specified.
      See https://js.arcgis.com/4.18/esri/copyright.txt for details.
      */


      var n = /*#__PURE__*/function () {
        function n() {
          _classCallCheck(this, n);
        }

        _createClass(n, [{
          key: "clone",
          value: function clone() {
            var e = new n();
            return e.field = this.field, e.tofieldname = this.tofieldname, e.typeofstat = this.typeofstat, e.workingexpr = this.workingexpr, e;
          }
        }, {
          key: "toStatisticsName",
          value: function toStatisticsName() {
            switch (this.typeofstat.toUpperCase()) {
              case "MIN":
                return "min";

              case "MAX":
                return "max";

              case "SUM":
                return "sum";

              case "COUNT":
                return "count";

              case "VAR":
                return "var";

              case "STDDEV":
                return "stddev";

              case "AVG":
                return "avg";

              default:
                return "count";
            }
          }
        }], [{
          key: "parseStatField",
          value: function parseStatField(a, i, s) {
            var o = new n();
            o.field = a;

            var l = _core_sql_WhereClause_js__WEBPACK_IMPORTED_MODULE_1__["WhereClause"].create(i, s),
                p = function (n) {
              if ("function" === n.parseTree.type) {
                if (0 === n.parseTree.args.value.length) return {
                  name: n.parseTree.name,
                  expr: null
                };
                if (n.parseTree.args.value.length > 1) throw new Error("Statistic does not have 1 or 0 Parameters");

                var _a14 = _core_sql_WhereClause_js__WEBPACK_IMPORTED_MODULE_1__["WhereClause"].create(Object(_sqlUtils_js__WEBPACK_IMPORTED_MODULE_2__["toWhereClauseFromTree"])(n.parseTree.args.value[0], _shared_js__WEBPACK_IMPORTED_MODULE_0__["FeatureServiceDatabaseType"].Standardised, n.parameters), n.fieldsIndex);

                return {
                  name: n.parseTree.name,
                  expr: _a14
                };
              }

              return null;
            }(l);

            if (null === p) throw new Error("Invalid Statistic Function");
            var c = p.name.toUpperCase().trim();

            if ("MIN" === c) {
              if (o.typeofstat = "MIN", o.workingexpr = p.expr, null === l) throw new Error("Invalid Statistic Function Parameters");
            } else if ("MAX" === c) {
              if (o.typeofstat = "MAX", o.workingexpr = p.expr, null === l) throw new Error("Invalid Statistic Function Parameters");
            } else if ("COUNT" === c) o.typeofstat = "COUNT", o.workingexpr = p.expr;else if ("STDEV" === c) {
              if (o.typeofstat = "STDDEV", o.workingexpr = p.expr, null === l) throw new Error("Invalid Statistic Function Parameters");
            } else if ("SUM" === c) {
              if (o.typeofstat = "SUM", o.workingexpr = p.expr, null === l) throw new Error("Invalid Statistic Function Parameters");
            } else if ("MEAN" === c) {
              if (o.typeofstat = "AVG", o.workingexpr = p.expr, null === l) throw new Error("Invalid Statistic Function Parameters");
            } else if ("AVG" === c) {
              if (o.typeofstat = "AVG", o.workingexpr = p.expr, null === l) throw new Error("Invalid Statistic Function Parameters");
            } else {
              if ("VAR" !== c) throw new Error("Invalid Statistic Function");
              if (o.typeofstat = "VAR", o.workingexpr = p.expr, null === l) throw new Error("Invalid Statistic Function Parameters");
            }

            return o;
          }
        }]);

        return n;
      }();
      /* harmony default export */


      __webpack_exports__["default"] = n;
      /***/
    },

    /***/
    "lNzE":
    /*!******************************************************************!*\
      !*** ./node_modules/@arcgis/core/arcade/featureSetCollection.js ***!
      \******************************************************************/

    /*! exports provided: default */

    /***/
    function lNzE(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony import */


      var _core_promiseUtils_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ../core/promiseUtils.js */
      "9MzC");
      /*
      All material copyright ESRI, All Rights Reserved, unless otherwise specified.
      See https://js.arcgis.com/4.18/esri/copyright.txt for details.
      */

      /* harmony default export */


      __webpack_exports__["default"] = /*#__PURE__*/function () {
        function _class2() {
          _classCallCheck(this, _class2);

          this.declaredRootClass = "esri.arcade.featureSetCollection", this._layerById = {}, this._layerByName = {};
        }

        _createClass(_class2, [{
          key: "add",
          value: function add(e, r, t) {
            this._layerById[r] = t, this._layerByName[e] = t;
          }
        }, {
          key: "featureSetByName",
          value: function featureSetByName(e) {
            var r = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : !0;
            var t = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : ["*"];
            return void 0 === this._layerByName[e] ? this.resolvePromise(null) : this.resolvePromise(this._layerByName[e]);
          }
        }, {
          key: "featureSetById",
          value: function featureSetById(e) {
            var r = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : !0;
            var t = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : ["*"];
            return void 0 === this._layerById[e] ? this.resolvePromise(null) : this.resolvePromise(this._layerById[e]);
          }
        }, {
          key: "castToText",
          value: function castToText() {
            return "object, FeatureSetCollection";
          }
        }, {
          key: "resolvePromise",
          value: function resolvePromise(r) {
            return Object(_core_promiseUtils_js__WEBPACK_IMPORTED_MODULE_0__["resolve"])(r);
          }
        }]);

        return _class2;
      }();
      /***/

    },

    /***/
    "lq8Q":
    /*!******************************************************************************!*\
      !*** ./node_modules/@arcgis/core/arcade/featureset/support/OrderbyClause.js ***!
      \******************************************************************************/

    /*! exports provided: default */

    /***/
    function lq8Q(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /*
      All material copyright ESRI, All Rights Reserved, unless otherwise specified.
      See https://js.arcgis.com/4.18/esri/copyright.txt for details.
      */


      function t(t, e) {
        return t === e ? 0 : null === t ? -1 : null === e ? 1 : t < e ? -1 : 1;
      }

      var e = /*#__PURE__*/function () {
        function e(t) {
          _classCallCheck(this, e);

          var _e28 = t.split(",");

          this._fields = [], this._directions = [];

          for (var _t28 = 0; _t28 < _e28.length; _t28++) {
            var s = _e28[_t28].match(/\S+/g);

            this._fields.push(s[0]), 2 === s.length ? "asc" === s[1].toLowerCase() ? this._directions.push(1) : this._directions.push(0) : this._directions.push(1);
          }
        }

        _createClass(e, [{
          key: "constructClause",
          value: function constructClause() {
            var t = "";

            for (var _e36 = 0; _e36 < this._fields.length; _e36++) {
              0 !== _e36 && (t += ","), t += this._fields[_e36], 1 === this._directions[_e36] ? t += " ASC" : t += " DESC";
            }

            return t;
          }
        }, {
          key: "order",
          value: function order(_e30) {
            var _this40 = this;

            _e30.sort(function (_e31, s) {
              for (var i = 0; i < _this40._fields.length; i++) {
                var r = _this40.featureValue(_e31.feature, _this40._fields[i], i),
                    l = _this40.featureValue(s.feature, _this40._fields[i], i);

                var o = 0;
                if (o = 1 === _this40._directions[i] ? t(r, l) : -1 * t(r, l), 0 !== o) return o;
              }

              return 0;
            });
          }
        }, {
          key: "scanForField",
          value: function scanForField(t) {
            for (var _e37 = 0; _e37 < this._fields.length; _e37++) {
              if (this._fields[_e37].toLowerCase().trim() === t.toLowerCase().trim()) return !0;
            }

            return !1;
          }
        }, {
          key: "replaceFields",
          value: function replaceFields(t) {
            var s = "";

            for (var _e38 = 0; _e38 < this._fields.length; _e38++) {
              0 !== _e38 && (s += ",");
              var i = this._fields[_e38];

              var _iterator37 = _createForOfIteratorHelper(t),
                  _step37;

              try {
                for (_iterator37.s(); !(_step37 = _iterator37.n()).done;) {
                  var _e39 = _step37.value;

                  if (i.toLowerCase() === _e39.field.toLowerCase()) {
                    i = _e39.newfield;
                    break;
                  }
                }
              } catch (err) {
                _iterator37.e(err);
              } finally {
                _iterator37.f();
              }

              s += i, 1 === this._directions[_e38] ? s += " ASC" : s += " DESC";
            }

            return new e(s);
          }
        }, {
          key: "featureValue",
          value: function featureValue(t, _e35, s) {
            var i = t.attributes[_e35];
            if (void 0 !== i) return i;

            for (var _i3 in t.attributes) {
              if (_e35.toLowerCase() === _i3.toLowerCase()) return this._fields[s] = _i3, t.attributes[_i3];
            }

            return null;
          }
        }]);

        return e;
      }();
      /* harmony default export */


      __webpack_exports__["default"] = e;
      /***/
    },

    /***/
    "nC36":
    /*!********************************************************************************!*\
      !*** ./node_modules/@arcgis/core/arcade/featureset/actions/AttributeFilter.js ***!
      \********************************************************************************/

    /*! exports provided: default */

    /***/
    function nC36(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony import */


      var _core_promiseUtils_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ../../../core/promiseUtils.js */
      "9MzC");
      /* harmony import */


      var _geometry_SpatialReference_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ../../../geometry/SpatialReference.js */
      "WZb1");
      /* harmony import */


      var _support_shared_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ../support/shared.js */
      "hTzF");
      /* harmony import */


      var _support_IdSet_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ../support/IdSet.js */
      "ZPxV");
      /* harmony import */


      var _core_sql_WhereClause_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ../../../core/sql/WhereClause.js */
      "ZqIb");
      /* harmony import */


      var _support_sqlUtils_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ../support/sqlUtils.js */
      "B8fU");
      /* harmony import */


      var _support_FeatureSet_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ../support/FeatureSet.js */
      "T3Nt");
      /*
      All material copyright ESRI, All Rights Reserved, unless otherwise specified.
      See https://js.arcgis.com/4.18/esri/copyright.txt for details.
      */


      var _ = /*#__PURE__*/function (_support_FeatureSet_j6) {
        _inherits(_, _support_FeatureSet_j6);

        var _super12 = _createSuper(_);

        function _(e) {
          var _this41;

          _classCallCheck(this, _);

          _this41 = _super12.call(this, e), _this41.declaredClass = "esri.arcade.featureset.actions.AttributeFilter", _this41._maxProcessing = 1e3, _this41._parent = e.parentfeatureset, e.whereclause instanceof _core_sql_WhereClause_js__WEBPACK_IMPORTED_MODULE_4__["WhereClause"] ? (_this41._whereclause = e.whereclause, _this41._whereClauseFunction = null) : (_this41._whereClauseFunction = e.whereclause, _this41._whereclause = null);
          return _this41;
        }

        _createClass(_, [{
          key: "_initialiseFeatureSet",
          value: function _initialiseFeatureSet() {
            null !== this._parent ? (this.fields = this._parent.fields.slice(0), this.geometryType = this._parent.geometryType, this.objectIdField = this._parent.objectIdField, this.globalIdField = this._parent.globalIdField, this.spatialReference = this._parent.spatialReference, this.hasM = this._parent.hasM, this.hasZ = this._parent.hasZ, this.typeIdField = this._parent.typeIdField, this.types = this._parent.types) : (this.fields = [], this.typeIdField = "", this.objectIdField = "", this.globalIdField = "", this.spatialReference = new _geometry_SpatialReference_js__WEBPACK_IMPORTED_MODULE_1__["default"]({
              wkid: 4326
            }), this.geometryType = _support_shared_js__WEBPACK_IMPORTED_MODULE_2__["layerGeometryEsriConstants"].point);
          }
        }, {
          key: "_getSet",
          value: function _getSet(t) {
            var _this42 = this;

            return null === this._wset ? this._ensureLoaded().then(function () {
              return _this42._parent._getFilteredSet("", null, _this42._whereclause, null, t);
            }).then(function (e) {
              return _this42._checkCancelled(t), null !== _this42._whereClauseFunction ? _this42._wset = new _support_IdSet_js__WEBPACK_IMPORTED_MODULE_3__["default"](e._candidates.slice(0).concat(e._known.slice(0)), [], e._ordered, _this42._clonePageDefinition(e.pagesDefinition)) : _this42._wset = new _support_IdSet_js__WEBPACK_IMPORTED_MODULE_3__["default"](e._candidates.slice(0), e._known.slice(0), e._ordered, _this42._clonePageDefinition(e.pagesDefinition)), _this42._wset;
            }) : Object(_core_promiseUtils_js__WEBPACK_IMPORTED_MODULE_0__["resolve"])(this._wset);
          }
        }, {
          key: "_isInFeatureSet",
          value: function _isInFeatureSet(e) {
            var t = this._parent._isInFeatureSet(e);

            return t === _support_shared_js__WEBPACK_IMPORTED_MODULE_2__["IdState"].NotInFeatureSet ? t : (t = this._idstates[e], void 0 === t ? _support_shared_js__WEBPACK_IMPORTED_MODULE_2__["IdState"].Unknown : t);
          }
        }, {
          key: "_getFeature",
          value: function _getFeature(e, t, s) {
            return this._parent._getFeature(e, t, s);
          }
        }, {
          key: "_getFeatures",
          value: function _getFeatures(e, t, s, i) {
            return this._parent._getFeatures(e, t, s, i);
          }
        }, {
          key: "_featureFromCache",
          value: function _featureFromCache(e) {
            return this._parent._featureFromCache(e);
          }
        }, {
          key: "executeWhereClause",
          value: function executeWhereClause(e) {
            return this._whereclause.testFeature(e);
          }
        }, {
          key: "executeWhereClauseDeferred",
          value: function executeWhereClauseDeferred(i) {
            if (null !== this._whereClauseFunction) try {
              var s = this._whereClauseFunction(i);

              return Object(_core_promiseUtils_js__WEBPACK_IMPORTED_MODULE_0__["isPromiseLike"])(s) ? s : Object(_core_promiseUtils_js__WEBPACK_IMPORTED_MODULE_0__["resolve"])(s);
            } catch (e) {
              return Object(_core_promiseUtils_js__WEBPACK_IMPORTED_MODULE_0__["reject"])(e);
            }
            return Object(_core_promiseUtils_js__WEBPACK_IMPORTED_MODULE_0__["resolve"])(this.executeWhereClause(i));
          }
        }, {
          key: "_fetchAndRefineFeatures",
          value: function _fetchAndRefineFeatures(e, t, s) {
            var _this43 = this;

            var r = new _support_IdSet_js__WEBPACK_IMPORTED_MODULE_3__["default"]([], e, !1, null),
                n = Math.min(t, e.length);
            return this._parent._getFeatures(r, -1, n, s).then(function () {
              if (_this43._checkCancelled(s), null == _this43._whereClauseFunction) {
                for (var _t29 = 0; _t29 < n; _t29++) {
                  var _s9 = _this43._parent._featureFromCache(e[_t29]);

                  !0 === _this43.executeWhereClause(_s9) ? _this43._idstates[e[_t29]] = _support_shared_js__WEBPACK_IMPORTED_MODULE_2__["IdState"].InFeatureSet : _this43._idstates[e[_t29]] = _support_shared_js__WEBPACK_IMPORTED_MODULE_2__["IdState"].NotInFeatureSet;
                }

                return "success";
              }

              var r = [];

              for (var _t30 = 0; _t30 < n; _t30++) {
                var _s10 = _this43._parent._featureFromCache(e[_t30]);

                r.push(_this43.executeWhereClauseDeferred(_s10));
              }

              return Object(_core_promiseUtils_js__WEBPACK_IMPORTED_MODULE_0__["all"])(r).then(function (s) {
                for (var i = 0; i < t; i++) {
                  !0 === s[i] ? _this43._idstates[e[i]] = _support_shared_js__WEBPACK_IMPORTED_MODULE_2__["IdState"].InFeatureSet : _this43._idstates[e[i]] = _support_shared_js__WEBPACK_IMPORTED_MODULE_2__["IdState"].NotInFeatureSet;
                }

                return "success";
              });
            });
          }
        }, {
          key: "_getFilteredSet",
          value: function _getFilteredSet(e, t, s, i, r) {
            var _this44 = this;

            return null !== this._whereClauseFunction || (null !== s ? null !== this._whereclause && (s = Object(_support_sqlUtils_js__WEBPACK_IMPORTED_MODULE_5__["combine"])(this._whereclause, s)) : s = this._whereclause), this._ensureLoaded().then(function () {
              return _this44._parent._getFilteredSet(e, t, s, i, r);
            }).then(function (e) {
              var t;
              return _this44._checkCancelled(r), t = null !== _this44._whereClauseFunction ? new _support_IdSet_js__WEBPACK_IMPORTED_MODULE_3__["default"](e._candidates.slice(0).concat(e._known.slice(0)), [], e._ordered, _this44._clonePageDefinition(e.pagesDefinition)) : new _support_IdSet_js__WEBPACK_IMPORTED_MODULE_3__["default"](e._candidates.slice(0), e._known.slice(0), e._ordered, _this44._clonePageDefinition(e.pagesDefinition)), t;
            });
          }
        }, {
          key: "_stat",
          value: function _stat(t, s, i, r, n, a, l) {
            var _this45 = this;

            if (null !== this._whereClauseFunction) return null === n && "" === i && null === r ? this._manualStat(t, s, a, l) : Object(_core_promiseUtils_js__WEBPACK_IMPORTED_MODULE_0__["resolve"])({
              calculated: !1
            });
            var h = this._whereclause;
            return null !== n && null !== this._whereclause && (h = Object(_support_sqlUtils_js__WEBPACK_IMPORTED_MODULE_5__["combine"])(this._whereclause, n)), this._parent._stat(t, s, i, r, h, a, l).then(function (e) {
              return !1 === e.calculated ? null === n && "" === i && null === r ? _this45._manualStat(t, s, a, l) : {
                calculated: !1
              } : e;
            });
          }
        }, {
          key: "_canDoAggregates",
          value: function _canDoAggregates(t, s, i, r, n) {
            return null !== this._whereClauseFunction ? Object(_core_promiseUtils_js__WEBPACK_IMPORTED_MODULE_0__["resolve"])(!1) : (null !== n ? null !== this._whereclause && (n = Object(_support_sqlUtils_js__WEBPACK_IMPORTED_MODULE_5__["combine"])(this._whereclause, n)) : n = this._whereclause, null === this._parent ? Object(_core_promiseUtils_js__WEBPACK_IMPORTED_MODULE_0__["resolve"])(!1) : this._parent._canDoAggregates(t, s, i, r, n));
          }
        }, {
          key: "_getAggregatePagesDataSourceDefinition",
          value: function _getAggregatePagesDataSourceDefinition(e, t, i, r, n, a, l) {
            return null === this._parent ? Object(_core_promiseUtils_js__WEBPACK_IMPORTED_MODULE_0__["reject"])(new Error("Should never be called")) : (null !== n ? null !== this._whereclause && (n = Object(_support_sqlUtils_js__WEBPACK_IMPORTED_MODULE_5__["combine"])(this._whereclause, n)) : n = this._whereclause, this._parent._getAggregatePagesDataSourceDefinition(e, t, i, r, n, a, l));
          }
        }], [{
          key: "registerAction",
          value: function registerAction() {
            _support_FeatureSet_js__WEBPACK_IMPORTED_MODULE_6__["default"]._featuresetFunctions.filter = function (e) {
              if ("function" == typeof e) return new _({
                parentfeatureset: this,
                whereclause: e
              });
              var t = null;
              return e instanceof _core_sql_WhereClause_js__WEBPACK_IMPORTED_MODULE_4__["WhereClause"] && (t = e), new _({
                parentfeatureset: this,
                whereclause: t
              });
            };
          }
        }]);

        return _;
      }(_support_FeatureSet_js__WEBPACK_IMPORTED_MODULE_6__["default"]);
      /* harmony default export */


      __webpack_exports__["default"] = _;
      /***/
    },

    /***/
    "oO7B":
    /*!************************************************************************************!*\
      !*** ./node_modules/@arcgis/core/arcade/featureset/sources/FeatureLayerDynamic.js ***!
      \************************************************************************************/

    /*! exports provided: default */

    /***/
    function oO7B(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony import */


      var _core_promiseUtils_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ../../../core/promiseUtils.js */
      "9MzC");
      /* harmony import */


      var _geometry_support_jsonUtils_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ../../../geometry/support/jsonUtils.js */
      "qatw");
      /* harmony import */


      var _kernel_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ../../../kernel.js */
      "975N");
      /* harmony import */


      var _request_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ../../../request.js */
      "Lqtk");
      /* harmony import */


      var _Graphic_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ../../../Graphic.js */
      "jWBI");
      /* harmony import */


      var _Attachment_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ../../Attachment.js */
      "db86");
      /* harmony import */


      var _support_shared_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ../support/shared.js */
      "hTzF");
      /* harmony import */


      var _layers_graphics_featureConversionUtils_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! ../../../layers/graphics/featureConversionUtils.js */
      "ZlUD");
      /* harmony import */


      var _support_IdSet_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! ../support/IdSet.js */
      "ZPxV");
      /* harmony import */


      var _support_sqlUtils_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! ../support/sqlUtils.js */
      "B8fU");
      /* harmony import */


      var _support_stats_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
      /*! ../support/stats.js */
      "sdy9");
      /* harmony import */


      var _support_FeatureSet_js__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
      /*! ../support/FeatureSet.js */
      "T3Nt");
      /* harmony import */


      var _core_MD5_js__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
      /*! ../../../core/MD5.js */
      "fvq6");
      /* harmony import */


      var _tasks_support_FeatureSet_js__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
      /*! ../../../tasks/support/FeatureSet.js */
      "8prj");
      /* harmony import */


      var _tasks_support_StatisticDefinition_js__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(
      /*! ../../../tasks/support/StatisticDefinition.js */
      "875+");
      /* harmony import */


      var _tasks_support_Query_js__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(
      /*! ../../../tasks/support/Query.js */
      "xk++");
      /* harmony import */


      var _layers_FeatureLayer_js__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(
      /*! ../../../layers/FeatureLayer.js */
      "W9Wu");
      /* harmony import */


      var _tasks_operations_pbfOptimizedFeatureSet_js__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(
      /*! ../../../tasks/operations/pbfOptimizedFeatureSet.js */
      "3Vw2");
      /* harmony import */


      var _tasks_operations_query_js__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(
      /*! ../../../tasks/operations/query.js */
      "M0H4");
      /* harmony import */


      var _tasks_QueryTask_js__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(
      /*! ../../../tasks/QueryTask.js */
      "/uz8");
      /*
      All material copyright ESRI, All Rights Reserved, unless otherwise specified.
      See https://js.arcgis.com/4.18/esri/copyright.txt for details.
      */


      var q = /*#__PURE__*/function (_support_FeatureSet_j7) {
        _inherits(q, _support_FeatureSet_j7);

        var _super13 = _createSuper(q);

        function q(e) {
          var _this46;

          _classCallCheck(this, q);

          _this46 = _super13.call(this, e), _this46.declaredClass = "esri.arcade.featureset.sources.FeatureLayerDynamic", _this46._removeGeometry = !1, _this46._overrideFields = null, _this46.formulaCredential = null, _this46._pageJustIds = !1, _this46._requestStandardised = !1, e.spatialReference && (_this46.spatialReference = e.spatialReference), _this46._transparent = !0, _this46._maxProcessing = 1e3, _this46._layer = e.layer, _this46._wset = null, void 0 !== e.outFields && (_this46._overrideFields = e.outFields), void 0 !== e.includeGeometry && (_this46._removeGeometry = !1 === e.includeGeometry);
          return _this46;
        }

        _createClass(q, [{
          key: "_maxQueryRate",
          value: function _maxQueryRate() {
            return _support_shared_js__WEBPACK_IMPORTED_MODULE_6__["defaultMaxRecords"];
          }
        }, {
          key: "end",
          value: function end() {
            return this._layer;
          }
        }, {
          key: "optimisePagingFeatureQueries",
          value: function optimisePagingFeatureQueries(e) {
            this._pageJustIds = e;
          }
        }, {
          key: "convertQueryToLruCacheKey",
          value: function convertQueryToLruCacheKey(e) {
            var t = Object(_support_shared_js__WEBPACK_IMPORTED_MODULE_6__["stableStringify"])(e.toJSON());
            return Object(_core_MD5_js__WEBPACK_IMPORTED_MODULE_12__["createMD5Hash"])(t, _core_MD5_js__WEBPACK_IMPORTED_MODULE_12__["outputTypes"].String);
          }
        }, {
          key: "load",
          value: function load() {
            var _this47 = this;

            return null === this._loadPromise && (this._loadPromise = Object(_core_promiseUtils_js__WEBPACK_IMPORTED_MODULE_0__["create"])(function (e, t) {
              try {
                if (!0 === _this47._layer.loaded) return _this47._initialiseFeatureSet(), void e(_this47);
                _this47._layer.when().then(function () {
                  try {
                    _this47._initialiseFeatureSet(), e(_this47);
                  } catch (e) {
                    t(e);
                  }
                }, t), _this47._layer.load();
              } catch (e) {
                t(e);
              }
            })), this._loadPromise;
          }
        }, {
          key: "_initialiseFeatureSet",
          value: function _initialiseFeatureSet() {
            if (null == this.spatialReference && (this.spatialReference = this._layer.spatialReference), this.geometryType = this._layer.geometryType, this.fields = this._layer.fields.slice(0), this._layer.outFields) {
              if (1 === this._layer.outFields.length && "*" === this._layer.outFields[0]) ;else {
                var e = [];

                var _iterator38 = _createForOfIteratorHelper(this.fields),
                    _step38;

                try {
                  for (_iterator38.s(); !(_step38 = _iterator38.n()).done;) {
                    var t = _step38.value;
                    if ("oid" === t.type) e.push(t);else {
                      var _iterator39 = _createForOfIteratorHelper(this._layer.outFields),
                          _step39;

                      try {
                        for (_iterator39.s(); !(_step39 = _iterator39.n()).done;) {
                          var i = _step39.value;

                          if (i.toLowerCase() === t.name.toLowerCase()) {
                            e.push(t);
                            break;
                          }
                        }
                      } catch (err) {
                        _iterator39.e(err);
                      } finally {
                        _iterator39.f();
                      }
                    }
                  }
                } catch (err) {
                  _iterator38.e(err);
                } finally {
                  _iterator38.f();
                }

                this.fields = e;
              }
            } else ;
            if (null !== this._overrideFields) if (1 === this._overrideFields.length && "*" === this._overrideFields[0]) this._overrideFields = null;else {
              var _e40 = [],
                  _t31 = [];

              var _iterator40 = _createForOfIteratorHelper(this.fields),
                  _step40;

              try {
                for (_iterator40.s(); !(_step40 = _iterator40.n()).done;) {
                  var _i4 = _step40.value;
                  if ("oid" === _i4.type) _e40.push(_i4), _t31.push(_i4.name);else {
                    var _iterator41 = _createForOfIteratorHelper(this._overrideFields),
                        _step41;

                    try {
                      for (_iterator41.s(); !(_step41 = _iterator41.n()).done;) {
                        var r = _step41.value;

                        if (r.toLowerCase() === _i4.name.toLowerCase()) {
                          _e40.push(_i4), _t31.push(_i4.name);
                          break;
                        }
                      }
                    } catch (err) {
                      _iterator41.e(err);
                    } finally {
                      _iterator41.f();
                    }
                  }
                }
              } catch (err) {
                _iterator40.e(err);
              } finally {
                _iterator40.f();
              }

              this.fields = _e40, this._overrideFields = _t31;
            }

            if (this._layer.source && this._layer.source.sourceJSON) {
              var _e41 = this._layer.source.sourceJSON.currentVersion;
              !0 === this._layer.source.sourceJSON.useStandardizedQueries ? (this._databaseType = _support_shared_js__WEBPACK_IMPORTED_MODULE_6__["FeatureServiceDatabaseType"].StandardisedNoInterval, null != _e41 && _e41 >= 10.61 && (this._databaseType = _support_shared_js__WEBPACK_IMPORTED_MODULE_6__["FeatureServiceDatabaseType"].Standardised)) : null != _e41 && (_e41 >= 10.5 && (this._databaseType = _support_shared_js__WEBPACK_IMPORTED_MODULE_6__["FeatureServiceDatabaseType"].StandardisedNoInterval, this._requestStandardised = !0), _e41 >= 10.61 && (this._databaseType = _support_shared_js__WEBPACK_IMPORTED_MODULE_6__["FeatureServiceDatabaseType"].Standardised));
            }

            this.objectIdField = this._layer.objectIdField;

            var _iterator42 = _createForOfIteratorHelper(this.fields),
                _step42;

            try {
              for (_iterator42.s(); !(_step42 = _iterator42.n()).done;) {
                var _e42 = _step42.value;
                "global-id" === _e42.type && (this.globalIdField = _e42.name);
              }
            } catch (err) {
              _iterator42.e(err);
            } finally {
              _iterator42.f();
            }

            this.hasM = this._layer.supportsM, this.hasZ = this._layer.supportsZ, this.typeIdField = this._layer.typeIdField, this.types = this._layer.types;
          }
        }, {
          key: "_isInFeatureSet",
          value: function _isInFeatureSet() {
            return _support_shared_js__WEBPACK_IMPORTED_MODULE_6__["IdState"].InFeatureSet;
          }
        }, {
          key: "_refineSetBlock",
          value: function _refineSetBlock(e) {
            return Object(_core_promiseUtils_js__WEBPACK_IMPORTED_MODULE_0__["resolve"])(e);
          }
        }, {
          key: "_candidateIdTransform",
          value: function _candidateIdTransform(e) {
            return e;
          }
        }, {
          key: "_getSet",
          value: function _getSet(e) {
            var _this48 = this;

            return null === this._wset ? this._ensureLoaded().then(function () {
              return _this48._getFilteredSet("", null, null, null, e);
            }).then(function (e) {
              return _this48._wset = e, e;
            }) : Object(_core_promiseUtils_js__WEBPACK_IMPORTED_MODULE_0__["resolve"])(this._wset);
          }
        }, {
          key: "_runDatabaseProbe",
          value: function _runDatabaseProbe(t) {
            var _this49 = this;

            return Object(_core_promiseUtils_js__WEBPACK_IMPORTED_MODULE_0__["create"])(function (e, i) {
              try {
                _this49._ensureLoaded().then(function () {
                  try {
                    var r = new _tasks_support_Query_js__WEBPACK_IMPORTED_MODULE_15__["default"]();
                    r.where = t.replace("OBJECTID", _this49._layer.objectIdField), _this49._layer.queryObjectIds(r).then(function () {
                      e(!0);
                    }, function () {
                      try {
                        e(!1);
                      } catch (e) {
                        i(e);
                      }
                    });
                  } catch (e) {
                    i(e);
                  }
                });
              } catch (e) {
                i(e);
              }
            });
          }
        }, {
          key: "_canUsePagination",
          value: function _canUsePagination() {
            return !(!this._layer.capabilities || !this._layer.capabilities.query || !0 !== this._layer.capabilities.query.supportsPagination);
          }
        }, {
          key: "_cacheableFeatureSetSourceKey",
          value: function _cacheableFeatureSetSourceKey() {
            return this._layer.url;
          }
        }, {
          key: "pbfSupportedForQuery",
          value: function pbfSupportedForQuery(e) {
            return !e.outStatistics && this._layer && this._layer.capabilities && this._layer.capabilities.query && !0 === this._layer.capabilities.query.supportsFormatPBF && !0 === this._layer.capabilities.query.supportsQuantizationEditMode;
          }
        }, {
          key: "queryPBF",
          value: function queryPBF(e) {
            return e.quantizationParameters = {
              mode: "edit"
            }, Object(_tasks_operations_query_js__WEBPACK_IMPORTED_MODULE_18__["executeQueryPBF"])(this._layer.parsedUrl, e, new _tasks_operations_pbfOptimizedFeatureSet_js__WEBPACK_IMPORTED_MODULE_17__["OptimizedFeatureSetParserContext"]({})).then(function (e) {
              return _tasks_support_FeatureSet_js__WEBPACK_IMPORTED_MODULE_13__["default"].fromJSON(Object(_layers_graphics_featureConversionUtils_js__WEBPACK_IMPORTED_MODULE_7__["convertToFeatureSet"])(e.data)).unquantize();
            });
          }
        }, {
          key: "gdbVersion",
          get: function get() {
            return this._layer && this._layer.capabilities && this._layer.capabilities.data && this._layer.capabilities.data.isVersioned ? this._layer.gdbVersion ? this._layer.gdbVersion : "SDE.DEFAULT" : "";
          }
        }, {
          key: "nativeCapabilities",
          value: function nativeCapabilities() {
            return {
              title: this._layer.title,
              source: this,
              canQueryRelated: !0,
              capabilities: this._layer.capabilities,
              databaseType: this._databaseType,
              requestStandardised: this._requestStandardised
            };
          }
        }, {
          key: "executeQuery",
          value: function executeQuery(e, t) {
            var _this50 = this;

            var i = new _tasks_QueryTask_js__WEBPACK_IMPORTED_MODULE_19__["default"]({
              url: this._layer.parsedUrl.path
            }),
                r = "execute" === t && this.pbfSupportedForQuery(e);
            var s = null;

            if (this.recentlyUsedQueries) {
              var a = this.convertQueryToLruCacheKey(e);
              s = this.recentlyUsedQueries.getFromCache(a), null === s && (s = !0 !== r ? i[t](e) : this.queryPBF(e), this.recentlyUsedQueries.addToCache(a, s), s = s["catch"](function (e) {
                throw _this50.recentlyUsedQueries.removeFromCache(a), e;
              }));
            }

            return null === s && (s = !0 !== r ? i[t](e) : this.queryPBF(e)), s;
          }
        }, {
          key: "_getFilteredSet",
          value: function _getFilteredSet(e, t, i, r, s) {
            var _this51 = this;

            return this.databaseType().then(function (a) {
              if (_this51.isTable() && t && null !== e && "" !== e) {
                return new _support_IdSet_js__WEBPACK_IMPORTED_MODULE_8__["default"]([], [], !0, null);
              }

              if (_this51._canUsePagination()) return _this51._getFilteredSetUsingPaging(e, t, i, r, s);
              var n = "",
                  l = !1;
              null !== r && _this51._layer.capabilities && _this51._layer.capabilities.query && !0 === _this51._layer.capabilities.query.supportsOrderBy && (n = r.constructClause(), l = !0);
              var o = new _tasks_support_Query_js__WEBPACK_IMPORTED_MODULE_15__["default"]();
              return o.where = null === i ? null === t ? "1=1" : "" : Object(_support_sqlUtils_js__WEBPACK_IMPORTED_MODULE_9__["toWhereClause"])(i, a), _this51._requestStandardised && (o.sqlFormat = "standard"), o.spatialRelationship = _this51._makeRelationshipEnum(e), o.outSpatialReference = _this51.spatialReference, o.orderByFields = "" !== n ? n.split(",") : null, o.geometry = null === t ? null : t, o.relationParameter = _this51._makeRelationshipParam(e), _this51.executeQuery(o, "executeForIds").then(function (e) {
                null === e && (e = []), _this51._checkCancelled(s);
                return new _support_IdSet_js__WEBPACK_IMPORTED_MODULE_8__["default"]([], e, l, null);
              });
            });
          }
        }, {
          key: "_expandPagedSet",
          value: function _expandPagedSet(e, t, i, r, s) {
            return this._expandPagedSetFeatureSet(e, t, i, r, s);
          }
        }, {
          key: "_getFilteredSetUsingPaging",
          value: function _getFilteredSetUsingPaging(e, t, r, s, a) {
            var _this52 = this;

            try {
              var i = "",
                  n = !1;
              return null !== s && this._layer.capabilities && this._layer.capabilities.query && !0 === this._layer.capabilities.query.supportsOrderBy && (i = s.constructClause(), n = !0), this.databaseType().then(function (s) {
                var l = null === r ? null === t ? "1=1" : "" : Object(_support_sqlUtils_js__WEBPACK_IMPORTED_MODULE_9__["toWhereClause"])(r, s);
                _this52._layer.definitionExpression && (l = "" !== l ? "((" + _this52._layer.definitionExpression + ") AND (" + l + "))" : _this52._layer.definitionExpression);

                var o = _this52._maxQueryRate();

                var u = _this52._layer.capabilities.query.maxRecordCount;
                void 0 !== u && u < o && (o = u);
                var d = null;
                if (!0 === _this52._pageJustIds) d = new _support_IdSet_js__WEBPACK_IMPORTED_MODULE_8__["default"]([], ["GETPAGES"], n, {
                  spatialRel: _this52._makeRelationshipEnum(e),
                  relationParam: _this52._makeRelationshipParam(e),
                  outFields: _this52._layer.objectIdField,
                  resultRecordCount: o,
                  resultOffset: 0,
                  geometry: null === t ? null : t,
                  where: l,
                  orderByFields: i,
                  returnGeometry: !1,
                  returnIdsOnly: "false",
                  internal: {
                    set: [],
                    lastRetrieved: 0,
                    lastPage: 0,
                    fullyResolved: !1
                  }
                });else {
                  var _r16 = !0;

                  !0 === _this52._removeGeometry && (_r16 = !1);

                  var _s11 = null !== _this52._overrideFields ? _this52._overrideFields : _this52._fieldsIncludingObjectId(_this52._layer.outFields ? _this52._layer.outFields : ["*"]);

                  d = new _support_IdSet_js__WEBPACK_IMPORTED_MODULE_8__["default"]([], ["GETPAGES"], n, {
                    spatialRel: _this52._makeRelationshipEnum(e),
                    relationParam: _this52._makeRelationshipParam(e),
                    outFields: _s11.join(","),
                    resultRecordCount: o,
                    resultOffset: 0,
                    geometry: null === t ? null : t,
                    where: l,
                    orderByFields: i,
                    returnGeometry: _r16,
                    returnIdsOnly: "false",
                    internal: {
                      set: [],
                      lastRetrieved: 0,
                      lastPage: 0,
                      fullyResolved: !1
                    }
                  });
                }
                return _this52._expandPagedSet(d, o, 0, 1, a).then(function () {
                  return d;
                });
              });
            } catch (e) {
              return Object(_core_promiseUtils_js__WEBPACK_IMPORTED_MODULE_0__["reject"])(e);
            }
          }
        }, {
          key: "_clonePageDefinition",
          value: function _clonePageDefinition(e) {
            return null === e ? null : !0 !== e.groupbypage ? {
              groupbypage: !1,
              spatialRel: e.spatialRel,
              relationParam: e.relationParam,
              outFields: e.outFields,
              resultRecordCount: e.resultRecordCount,
              resultOffset: e.resultOffset,
              geometry: e.geometry,
              where: e.where,
              orderByFields: e.orderByFields,
              returnGeometry: e.returnGeometry,
              returnIdsOnly: e.returnIdsOnly,
              internal: e.internal
            } : {
              groupbypage: !0,
              spatialRel: e.spatialRel,
              relationParam: e.relationParam,
              outFields: e.outFields,
              resultRecordCount: e.resultRecordCount,
              useOIDpagination: e.useOIDpagination,
              generatedOid: e.generatedOid,
              groupByFieldsForStatistics: e.groupByFieldsForStatistics,
              resultOffset: e.resultOffset,
              outStatistics: e.outStatistics,
              geometry: e.geometry,
              where: e.where,
              orderByFields: e.orderByFields,
              returnGeometry: e.returnGeometry,
              returnIdsOnly: e.returnIdsOnly,
              internal: e.internal
            };
          }
        }, {
          key: "_getPhysicalPage",
          value: function _getPhysicalPage(e, t, r) {
            var _this53 = this;

            try {
              var _t32 = e.pagesDefinition.internal.lastRetrieved,
                  i = _t32,
                  s = e.pagesDefinition.internal.lastPage,
                  a = new _tasks_support_Query_js__WEBPACK_IMPORTED_MODULE_15__["default"]();
              return this._requestStandardised && (a.sqlFormat = "standard"), a.spatialRelationship = e.pagesDefinition.spatialRel, a.relationParameter = e.pagesDefinition.relationParam, a.outFields = e.pagesDefinition.outFields.split(","), a.num = e.pagesDefinition.resultRecordCount, a.start = e.pagesDefinition.internal.lastPage, a.geometry = e.pagesDefinition.geometry, a.where = e.pagesDefinition.where, a.orderByFields = "" !== e.pagesDefinition.orderByFields ? e.pagesDefinition.orderByFields.split(",") : null, a.returnGeometry = e.pagesDefinition.returnGeometry, a.outSpatialReference = this.spatialReference, this.executeQuery(a, "execute").then(function (a) {
                if (_this53._checkCancelled(r), e.pagesDefinition.internal.lastPage !== s) return "done";

                for (var _t33 = 0; _t33 < a.features.length; _t33++) {
                  e.pagesDefinition.internal.set[i + _t33] = a.features[_t33].attributes[_this53._layer.objectIdField];
                }

                if (!1 === _this53._pageJustIds) for (var _e43 = 0; _e43 < a.features.length; _e43++) {
                  _this53._featureCache[a.features[_e43].attributes[_this53._layer.objectIdField]] = a.features[_e43];
                }
                return (void 0 === a.exceededTransferLimit && a.features.length !== e.pagesDefinition.resultRecordCount || !1 === a.exceededTransferLimit) && (e.pagesDefinition.internal.fullyResolved = !0), e.pagesDefinition.internal.lastRetrieved = _t32 + a.features.length, e.pagesDefinition.internal.lastPage += e.pagesDefinition.resultRecordCount, "done";
              });
            } catch (e) {
              return Object(_core_promiseUtils_js__WEBPACK_IMPORTED_MODULE_0__["reject"])(e);
            }
          }
        }, {
          key: "_fieldsIncludingObjectId",
          value: function _fieldsIncludingObjectId(e) {
            if (null === e) return [this.objectIdField];
            var t = e.slice(0);
            if (t.indexOf("*") > -1) return t;
            var i = !1;

            var _iterator43 = _createForOfIteratorHelper(t),
                _step43;

            try {
              for (_iterator43.s(); !(_step43 = _iterator43.n()).done;) {
                var _e44 = _step43.value;

                if (_e44.toUpperCase() === this.objectIdField.toUpperCase()) {
                  i = !0;
                  break;
                }
              }
            } catch (err) {
              _iterator43.e(err);
            } finally {
              _iterator43.f();
            }

            return !1 === i && t.push(this.objectIdField), t;
          }
        }, {
          key: "_getFeatures",
          value: function _getFeatures(e, r, s, a) {
            var _this54 = this;

            var n = [];

            try {
              if (-1 !== r && void 0 === this._featureCache[r] && n.push(r), !0 === this._checkIfNeedToExpandKnownPage(e, this._maxProcessingRate())) return this._expandPagedSet(e, this._maxProcessingRate(), 0, 0, a).then(function () {
                return _this54._getFeatures(e, r, s, a);
              });
              var l = 0;

              for (var t = e._lastFetchedIndex; t < e._known.length; t++) {
                if (e._lastFetchedIndex += 1, l++, void 0 === this._featureCache[e._known[t]]) {
                  var i = !1;

                  if (null !== this._layer._mode && void 0 !== this._layer._mode) {
                    var _r17 = this._layer._mode;

                    if (void 0 !== _r17._featureMap[e._known[t]]) {
                      var _s12 = _r17._featureMap[e._known[t]];
                      null !== _s12 && (i = !0, this._featureCache[e._known[t]] = _s12);
                    }
                  }

                  if (!1 === i && (e._known[t] !== r && n.push(e._known[t]), n.length >= this._maxProcessingRate() - 1)) break;
                }

                if (l >= s && 0 === n.length) break;
              }

              if (0 === n.length) return Object(_core_promiseUtils_js__WEBPACK_IMPORTED_MODULE_0__["resolve"])("success");

              try {
                var _e45 = new _tasks_support_Query_js__WEBPACK_IMPORTED_MODULE_15__["default"]();

                return this._requestStandardised && (_e45.sqlFormat = "standard"), _e45.objectIds = n, _e45.outFields = null !== this._overrideFields ? this._overrideFields : this._fieldsIncludingObjectId(this._layer.outFields ? this._layer.outFields : ["*"]), _e45.returnGeometry = !0, !0 === this._removeGeometry && (_e45.returnGeometry = !1), _e45.outSpatialReference = this.spatialReference, this.executeQuery(_e45, "execute").then(function (e) {
                  if (_this54._checkCancelled(a), void 0 !== e.error) return Object(_core_promiseUtils_js__WEBPACK_IMPORTED_MODULE_0__["reject"])(new Error(e.error));

                  for (var _t34 = 0; _t34 < e.features.length; _t34++) {
                    _this54._featureCache[e.features[_t34].attributes[_this54._layer.objectIdField]] = e.features[_t34];
                  }

                  return "success";
                });
              } catch (e) {
                return Object(_core_promiseUtils_js__WEBPACK_IMPORTED_MODULE_0__["reject"])(e);
              }
            } catch (e) {
              return Object(_core_promiseUtils_js__WEBPACK_IMPORTED_MODULE_0__["reject"])(e);
            }
          }
        }, {
          key: "_getDistinctPages",
          value: function _getDistinctPages(e, t, r, s, a, n, l, o, u) {
            var _this55 = this;

            return this._ensureLoaded().then(function () {
              return _this55.databaseType();
            }).then(function (d) {
              var h = r.parseTree.column;

              for (var _e46 = 0; _e46 < _this55._layer.fields.length; _e46++) {
                if (_this55._layer.fields[_e46].name.toLowerCase() === h.toLowerCase()) {
                  h = _this55._layer.fields[_e46].name;
                  break;
                }
              }

              var c = new _tasks_support_Query_js__WEBPACK_IMPORTED_MODULE_15__["default"]();
              _this55._requestStandardised && (c.sqlFormat = "standard");
              var p = null === n ? null === a ? "1=1" : "" : Object(_support_sqlUtils_js__WEBPACK_IMPORTED_MODULE_9__["toWhereClause"])(n, d);
              return _this55._layer.definitionExpression && (p = "" !== p ? "((" + _this55._layer.definitionExpression + ") AND (" + p + "))" : _this55._layer.definitionExpression), c.where = p, c.spatialRelationship = _this55._makeRelationshipEnum(s), c.relationParameter = _this55._makeRelationshipParam(s), c.geometry = null === a ? null : a, c.returnDistinctValues = !0, c.returnGeometry = !1, c.outFields = [h], _this55.executeQuery(c, "execute").then(function (d) {
                if (_this55._checkCancelled(u), !d.hasOwnProperty("features")) return Object(_core_promiseUtils_js__WEBPACK_IMPORTED_MODULE_0__["reject"])(new Error("Unnexected Result querying statistics from layer"));
                var c = !1;

                for (var _e47 = 0; _e47 < _this55._layer.fields.length; _e47++) {
                  if (_this55._layer.fields[_e47].name === h) {
                    "date" === _this55._layer.fields[_e47].type && (c = !0);
                    break;
                  }
                }

                for (var _e48 = 0; _e48 < d.features.length; _e48++) {
                  if (c) {
                    var _t35 = d.features[_e48].attributes[h];
                    null !== _t35 ? o.push(new Date(_t35)) : o.push(_t35);
                  } else o.push(d.features[_e48].attributes[h]);

                  if (o.length >= l) break;
                }

                return 0 === d.features.length ? o : d.features.length === _this55._layer.capabilities.query.maxRecordCount && o.length < l ? _this55._getDistinctPages(e + d.features.length, t, r, s, a, n, l, o, u).then(function (e) {
                  return {
                    calculated: !0,
                    result: e
                  };
                }) : o;
              });
            });
          }
        }, {
          key: "_distinctStat",
          value: function _distinctStat(e, t, i, r, s, a, n) {
            return this._getDistinctPages(0, e, t, i, r, s, a, [], n).then(function (e) {
              return {
                calculated: !0,
                result: e
              };
            });
          }
        }, {
          key: "isTable",
          value: function isTable() {
            return this._layer.isTable || null === this._layer.geometryType || "table" === this._layer.type || "" === this._layer.geometryType;
          }
        }, {
          key: "_countstat",
          value: function _countstat(e, t, i, r) {
            var _this56 = this;

            return this.databaseType().then(function (e) {
              var s = new _tasks_support_Query_js__WEBPACK_IMPORTED_MODULE_15__["default"]();
              if (_this56._requestStandardised && (s.sqlFormat = "standard"), _this56.isTable() && i && null !== t && "" !== t) return {
                calculated: !0,
                result: 0
              };
              var a = null === r ? null === i ? "1=1" : "" : Object(_support_sqlUtils_js__WEBPACK_IMPORTED_MODULE_9__["toWhereClause"])(r, e);
              return _this56._layer.definitionExpression && (a = "" !== a ? "((" + _this56._layer.definitionExpression + ") AND (" + a + "))" : _this56._layer.definitionExpression), s.where = a, s.where = a, s.spatialRelationship = _this56._makeRelationshipEnum(t), s.relationParameter = _this56._makeRelationshipParam(t), s.geometry = null === i ? null : i, s.returnGeometry = !1, _this56.executeQuery(s, "executeForCount").then(function (e) {
                return {
                  calculated: !0,
                  result: e
                };
              });
            });
          }
        }, {
          key: "_stats",
          value: function _stats(e, t, r, s, a, n, l) {
            var _this57 = this;

            return this._ensureLoaded().then(function () {
              var o = _this57._layer.capabilities && _this57._layer.capabilities.query && !0 === _this57._layer.capabilities.query.supportsSqlExpression,
                  u = _this57._layer.capabilities && _this57._layer.capabilities.query && !0 === _this57._layer.capabilities.query.supportsStatistics,
                  d = _this57._layer.capabilities && _this57._layer.capabilities.query && !0 === _this57._layer.capabilities.query.supportsDistinct;
              return "count" === e ? d ? _this57._countstat(e, r, s, a) : {
                calculated: !1
              } : !1 === u || !1 === Object(_support_sqlUtils_js__WEBPACK_IMPORTED_MODULE_9__["isSingleField"])(t) && !1 === o || !1 === t.isStandardized ? "" !== r || null !== a ? {
                calculated: !1
              } : _this57._manualStat(e, t, n, l) : "distinct" === e ? !1 === d ? "" !== r || null !== a ? {
                calculated: !1
              } : _this57._manualStat(e, t, n, l) : _this57._distinctStat(e, t, r, s, a, n, l) : _this57.databaseType().then(function (n) {
                if (_this57.isTable() && s && null !== r && "" !== r) return {
                  calculated: !0,
                  result: null
                };
                var l = new _tasks_support_Query_js__WEBPACK_IMPORTED_MODULE_15__["default"]();
                _this57._requestStandardised && (l.sqlFormat = "standard");
                var o = null === a ? null === s ? "1=1" : "" : Object(_support_sqlUtils_js__WEBPACK_IMPORTED_MODULE_9__["toWhereClause"])(a, n);
                _this57._layer.definitionExpression && (o = "" !== o ? "((" + _this57._layer.definitionExpression + ") AND (" + o + "))" : _this57._layer.definitionExpression), l.where = o, l.spatialRelationship = _this57._makeRelationshipEnum(r), l.relationParameter = _this57._makeRelationshipParam(r), l.geometry = null === s ? null : s;
                var u = new _tasks_support_StatisticDefinition_js__WEBPACK_IMPORTED_MODULE_14__["default"]();
                u.statisticType = Object(_support_stats_js__WEBPACK_IMPORTED_MODULE_10__["decodeStatType"])(e), u.onStatisticField = Object(_support_sqlUtils_js__WEBPACK_IMPORTED_MODULE_9__["toWhereClause"])(t, n), u.outStatisticFieldName = "ARCADE_STAT_RESULT", l.returnGeometry = !1;
                var d = "ARCADE_STAT_RESULT";
                return l.outStatistics = [u], _this57.executeQuery(l, "execute").then(function (e) {
                  if (!e.hasOwnProperty("features") || 0 === e.features.length) return Object(_core_promiseUtils_js__WEBPACK_IMPORTED_MODULE_0__["reject"])(new Error("Unnexected Result querying statistics from layer"));
                  var t = !1;

                  for (var i = 0; i < e.fields.length; i++) {
                    if ("ARCADE_STAT_RESULT" === e.fields[i].name.toUpperCase()) {
                      d = e.fields[i].name, "date" === e.fields[i].type && (t = !0);
                      break;
                    }
                  }

                  if (t) {
                    var _t36 = e.features[0].attributes[d];
                    return null !== _t36 && (_t36 = new Date(e.features[0].attributes[d])), {
                      calculated: !0,
                      result: _t36
                    };
                  }

                  return {
                    calculated: !0,
                    result: e.features[0].attributes[d]
                  };
                });
              });
            });
          }
        }, {
          key: "_stat",
          value: function _stat(e, t, i, r, s, a, n) {
            return this._stats(e, t, i, r, s, a, n);
          }
        }, {
          key: "_canDoAggregates",
          value: function _canDoAggregates(e, t) {
            var _this58 = this;

            return this._ensureLoaded().then(function () {
              var e = !1;
              var i = _this58._layer.capabilities && _this58._layer.capabilities.query && !0 === _this58._layer.capabilities.query.supportsSqlExpression;
              if (void 0 !== _this58._layer.capabilities && null !== _this58._layer.capabilities.query && !0 === _this58._layer.capabilities.query.supportsStatistics && !0 === _this58._layer.capabilities.query.supportsOrderBy && (e = !0), e) for (var r = 0; r < t.length - 1; r++) {
                null !== t[r].workingexpr && (!1 === t[r].workingexpr.isStandardized || !1 === Object(_support_sqlUtils_js__WEBPACK_IMPORTED_MODULE_9__["isSingleField"])(t[r].workingexpr) && !1 === i) && (e = !1);
              }
              return !1 !== e;
            });
          }
        }, {
          key: "_makeRelationshipEnum",
          value: function _makeRelationshipEnum(e) {
            if (e.indexOf("esriSpatialRelRelation") >= 0) return "relation";

            switch (e) {
              case "esriSpatialRelRelation":
                return "relation";

              case "esriSpatialRelIntersects":
                return "intersects";

              case "esriSpatialRelContains":
                return "contains";

              case "esriSpatialRelOverlaps":
                return "overlaps";

              case "esriSpatialRelWithin":
                return "within";

              case "esriSpatialRelTouches":
                return "touches";

              case "esriSpatialRelCrosses":
                return "crosses";

              case "esriSpatialRelEnvelopeIntersects":
                return "envelope-intersects";
            }

            return e;
          }
        }, {
          key: "_makeRelationshipParam",
          value: function _makeRelationshipParam(e) {
            return e.indexOf("esriSpatialRelRelation") >= 0 ? e.split(":")[1] : "";
          }
        }, {
          key: "_getAggregatePagesDataSourceDefinition",
          value: function _getAggregatePagesDataSourceDefinition(e, t, i, r, s, a, n) {
            var _this59 = this;

            return this._ensureLoaded().then(function () {
              return _this59.databaseType();
            }).then(function (l) {
              var o = "",
                  u = !1,
                  d = !1;
              null !== a && _this59._layer.capabilities && _this59._layer.capabilities.query && !0 === _this59._layer.capabilities.query.supportsOrderBy && (o = a.constructClause(), d = !0), _this59._layer.capabilities && _this59._layer.capabilities.query && !1 === _this59._layer.capabilities.query.supportsPagination && (d = !1, u = !0, o = _this59._layer.objectIdField);
              var h = [];

              for (var _e49 = 0; _e49 < t.length; _e49++) {
                var _i5 = new _tasks_support_StatisticDefinition_js__WEBPACK_IMPORTED_MODULE_14__["default"]();

                _i5.onStatisticField = null !== t[_e49].workingexpr ? Object(_support_sqlUtils_js__WEBPACK_IMPORTED_MODULE_9__["toWhereClause"])(t[_e49].workingexpr, l) : "", _i5.outStatisticFieldName = t[_e49].field, _i5.statisticType = t[_e49].toStatisticsName(), h.push(_i5);
              }

              "" === o && (o = e.join(","));

              var c = _this59._maxQueryRate();

              var p = _this59._layer.capabilities.query.maxRecordCount;
              void 0 !== p && p < c && (c = p);

              var _ = null === s ? null === r ? "1=1" : "" : Object(_support_sqlUtils_js__WEBPACK_IMPORTED_MODULE_9__["toWhereClause"])(s, l);

              _this59._layer.definitionExpression && (_ = "" !== _ ? "((" + _this59._layer.definitionExpression + ") AND (" + _ + "))" : _this59._layer.definitionExpression);
              return new _support_IdSet_js__WEBPACK_IMPORTED_MODULE_8__["default"]([], ["GETPAGES"], d, {
                groupbypage: !0,
                spatialRel: _this59._makeRelationshipEnum(i),
                relationParam: _this59._makeRelationshipParam(i),
                outFields: ["*"],
                useOIDpagination: u,
                generatedOid: n,
                resultRecordCount: c,
                resultOffset: 0,
                groupByFieldsForStatistics: e,
                outStatistics: h,
                geometry: null === r ? null : r,
                where: _,
                orderByFields: o,
                returnGeometry: !1,
                returnIdsOnly: !1,
                internal: {
                  lastMaxId: -1,
                  set: [],
                  lastRetrieved: 0,
                  lastPage: 0,
                  fullyResolved: !1
                }
              });
            });
          }
        }, {
          key: "_getAgregagtePhysicalPage",
          value: function _getAgregagtePhysicalPage(e, r, s) {
            var _this60 = this;

            try {
              var _r18 = e.pagesDefinition.where;
              !0 === e.pagesDefinition.useOIDpagination && (_r18 = "" !== _r18 ? "(" + _r18 + ") AND (" + e.pagesDefinition.generatedOid + ">" + e.pagesDefinition.internal.lastMaxId.toString() + ")" : e.pagesDefinition.generatedOid + ">" + e.pagesDefinition.internal.lastMaxId.toString());
              var a = e.pagesDefinition.internal.lastRetrieved,
                  l = a,
                  o = e.pagesDefinition.internal.lastPage,
                  u = new _tasks_support_Query_js__WEBPACK_IMPORTED_MODULE_15__["default"]();
              return this._requestStandardised && (u.sqlFormat = "standard"), u.where = _r18, u.spatialRelationship = e.pagesDefinition.spatialRel, u.relationParameter = e.pagesDefinition.relationParam, u.outFields = e.pagesDefinition.outFields, u.outStatistics = e.pagesDefinition.outStatistics, u.geometry = e.pagesDefinition.geometry, u.groupByFieldsForStatistics = e.pagesDefinition.groupByFieldsForStatistics, u.num = e.pagesDefinition.resultRecordCount, u.start = e.pagesDefinition.internal.lastPage, u.returnGeometry = e.pagesDefinition.returnGeometry, u.orderByFields = "" !== e.pagesDefinition.orderByFields ? e.pagesDefinition.orderByFields.split(",") : null, this.isTable() && u.geometry && u.spatialRelationship ? Object(_core_promiseUtils_js__WEBPACK_IMPORTED_MODULE_0__["resolve"])([]) : this.executeQuery(u, "execute").then(function (t) {
                if (_this60._checkCancelled(s), !t.hasOwnProperty("features")) return Object(_core_promiseUtils_js__WEBPACK_IMPORTED_MODULE_0__["reject"])(new Error("Unnexected Result querying aggregates from layer"));
                var r = [];
                if (e.pagesDefinition.internal.lastPage !== o) return [];

                for (var i = 0; i < t.features.length; i++) {
                  e.pagesDefinition.internal.set[l + i] = t.features[i].attributes[e.pagesDefinition.generatedOid];
                }

                for (var _e50 = 0; _e50 < t.features.length; _e50++) {
                  r.push(new _Graphic_js__WEBPACK_IMPORTED_MODULE_4__["default"]({
                    attributes: t.features[_e50].attributes,
                    geometry: null
                  }));
                }

                return !0 === e.pagesDefinition.useOIDpagination ? 0 === t.features.length ? e.pagesDefinition.internal.fullyResolved = !0 : e.pagesDefinition.internal.lastMaxId = t.features[t.features.length - 1].attributes[e.pagesDefinition.generatedOid] : (void 0 === t.exceededTransferLimit && t.features.length !== e.pagesDefinition.resultRecordCount || !1 === t.exceededTransferLimit) && (e.pagesDefinition.internal.fullyResolved = !0), e.pagesDefinition.internal.lastRetrieved = a + t.features.length, e.pagesDefinition.internal.lastPage += e.pagesDefinition.resultRecordCount, r;
              });
            } catch (e) {
              return Object(_core_promiseUtils_js__WEBPACK_IMPORTED_MODULE_0__["reject"])(e);
            }
          }
        }, {
          key: "relationshipMetaData",
          value: function relationshipMetaData() {
            return this._layer && this._layer.source && this._layer.source.sourceJSON && this._layer.source.sourceJSON.relationships ? this._layer.source.sourceJSON.relationships : [];
          }
        }, {
          key: "serviceUrl",
          value: function serviceUrl() {
            return Object(_support_shared_js__WEBPACK_IMPORTED_MODULE_6__["extractServiceUrl"])(this._layer.parsedUrl.path);
          }
        }, {
          key: "queryAttachments",
          value: function queryAttachments(e, i, r, s) {
            var _this61 = this;

            if (this._layer.capabilities.data.supportsAttachment && this._layer.capabilities.operations.supportsQueryAttachments) {
              var t = {
                objectIds: [e]
              };
              return (i && i > 0 || r && r > 0) && (t.size = [i && i > 0 ? i : 0, r && r > 0 ? r : i + 1]), s && s.length > 0 && (t.attachmentTypes = s), this._layer.queryAttachments(t).then(function (t) {
                var i = [];
                return t && t[e] && t[e].forEach(function (t) {
                  var r = _this61._layer.parsedUrl.path + "/" + e.toString() + "/attachments/" + t.id.toString();
                  i.push(new _Attachment_js__WEBPACK_IMPORTED_MODULE_5__["default"](t.id, t.name, t.contentType, t.size, r));
                }), i;
              });
            }

            return Object(_core_promiseUtils_js__WEBPACK_IMPORTED_MODULE_0__["resolve"])([]);
          }
        }, {
          key: "queryRelatedFeatures",
          value: function queryRelatedFeatures(e) {
            var t = {
              f: "json",
              relationshipId: e.relationshipId.toString(),
              definitionExpression: e.where,
              outFields: e.outFields.join(","),
              returnGeometry: e.returnGeometry.toString()
            };
            return void 0 !== e.resultOffset && null !== e.resultOffset && (t.resultOffset = e.resultOffset.toString()), void 0 !== e.resultRecordCount && null !== e.resultRecordCount && (t.resultRecordCount = e.resultRecordCount.toString()), e.orderByFields && (t.orderByFields = e.orderByFields.join(",")), e.objectIds.length > 0 && (t.objectIds = e.objectIds.join(",")), e.outSpatialReference && (t.outSR = JSON.stringify(e.outSpatialReference.toJSON())), Object(_request_js__WEBPACK_IMPORTED_MODULE_3__["default"])(this._layer.parsedUrl.path + "/queryRelatedRecords", {
              responseType: "json",
              query: t
            }).then(function (e) {
              if (e.data) {
                var _t37 = {},
                    i = e.data;

                if (i && i.relatedRecordGroups) {
                  var _e51 = i.spatialReference;

                  var _iterator44 = _createForOfIteratorHelper(i.relatedRecordGroups),
                      _step44;

                  try {
                    for (_iterator44.s(); !(_step44 = _iterator44.n()).done;) {
                      var s = _step44.value;
                      var a = s.objectId,
                          l = [];

                      var _iterator45 = _createForOfIteratorHelper(s.relatedRecords),
                          _step45;

                      try {
                        for (_iterator45.s(); !(_step45 = _iterator45.n()).done;) {
                          var _t38 = _step45.value;
                          _t38.geometry && (_t38.geometry.spatialReference = _e51);

                          var _i6 = new _Graphic_js__WEBPACK_IMPORTED_MODULE_4__["default"]({
                            geometry: _t38.geometry ? Object(_geometry_support_jsonUtils_js__WEBPACK_IMPORTED_MODULE_1__["fromJSON"])(_t38.geometry) : null,
                            attributes: _t38.attributes
                          });

                          l.push(_i6);
                        }
                      } catch (err) {
                        _iterator45.e(err);
                      } finally {
                        _iterator45.f();
                      }

                      _t37[a] = {
                        features: l,
                        exceededTransferLimit: !0 === i.exceededTransferLimit
                      };
                    }
                  } catch (err) {
                    _iterator44.e(err);
                  } finally {
                    _iterator44.f();
                  }
                }

                return _t37;
              }

              return Object(_core_promiseUtils_js__WEBPACK_IMPORTED_MODULE_0__["reject"])("Invalid Request");
            });
          }
        }, {
          key: "getFeatureByObjectId",
          value: function getFeatureByObjectId(e, t) {
            var i = new _tasks_QueryTask_js__WEBPACK_IMPORTED_MODULE_19__["default"]({
              url: this._layer.parsedUrl.path
            }),
                r = new _tasks_support_Query_js__WEBPACK_IMPORTED_MODULE_15__["default"]();
            return r.outFields = t, r.returnGeometry = !1, r.outSpatialReference = this.spatialReference, r.where = this.objectIdField + "=" + e.toString(), i.execute(r).then(function (e) {
              return 1 === e.features.length ? e.features[0] : null;
            });
          }
        }, {
          key: "getIdentityUser",
          value: function getIdentityUser() {
            var _this62 = this;

            return this.load().then(function () {
              var e;
              var t = null == (e = _kernel_js__WEBPACK_IMPORTED_MODULE_2__["id"]) ? void 0 : e.findCredential(_this62._layer.url);
              return t ? t.userId : null;
            });
          }
        }, {
          key: "getOwningSystemUrl",
          value: function getOwningSystemUrl() {
            var _this63 = this;

            return this.load().then(function () {
              var i;
              var r = null == (i = _kernel_js__WEBPACK_IMPORTED_MODULE_2__["id"]) ? void 0 : i.findServerInfo(_this63._layer.url);
              if (r) return Object(_core_promiseUtils_js__WEBPACK_IMPORTED_MODULE_0__["resolve"])(r.owningSystemUrl);
              var n = _this63._layer.url;
              var l = n.toLowerCase().indexOf("/rest/services");
              return n = l > -1 ? n.substring(0, l) : n, n ? (n += "/rest/info", Object(_core_promiseUtils_js__WEBPACK_IMPORTED_MODULE_0__["create"])(function (e, t) {
                Object(_request_js__WEBPACK_IMPORTED_MODULE_3__["default"])(n, {
                  query: {
                    f: "json"
                  }
                }).then(function (t) {
                  var i = "";
                  t.data && t.data.owningSystemUrl && (i = t.data.owningSystemUrl), e(i);
                }, function (t) {
                  e("");
                });
              })) : Object(_core_promiseUtils_js__WEBPACK_IMPORTED_MODULE_0__["resolve"])("");
            });
          }
        }], [{
          key: "create",
          value: function create(e, t, i, r) {
            var s = new _layers_FeatureLayer_js__WEBPACK_IMPORTED_MODULE_16__["default"]({
              url: e,
              outFields: null === t ? ["*"] : t
            });
            return new q({
              layer: s,
              spatialReference: i,
              lrucache: r
            });
          }
        }]);

        return q;
      }(_support_FeatureSet_js__WEBPACK_IMPORTED_MODULE_11__["default"]);
      /* harmony default export */


      __webpack_exports__["default"] = q;
      /***/
    },

    /***/
    "uOiI":
    /*!************************************************************************!*\
      !*** ./node_modules/@arcgis/core/arcade/featureset/actions/GroupBy.js ***!
      \************************************************************************/

    /*! exports provided: default */

    /***/
    function uOiI(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony import */


      var _core_promiseUtils_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ../../../core/promiseUtils.js */
      "9MzC");
      /* harmony import */


      var _geometry_SpatialReference_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ../../../geometry/SpatialReference.js */
      "WZb1");
      /* harmony import */


      var _Graphic_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ../../../Graphic.js */
      "jWBI");
      /* harmony import */


      var _chunks_languageUtils_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ../../../chunks/languageUtils.js */
      "idrm");
      /* harmony import */


      var _layers_support_Field_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ../../../layers/support/Field.js */
      "ofM5");
      /* harmony import */


      var _support_shared_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ../support/shared.js */
      "hTzF");
      /* harmony import */


      var _support_IdSet_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ../support/IdSet.js */
      "ZPxV");
      /* harmony import */


      var _core_sql_WhereClause_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! ../../../core/sql/WhereClause.js */
      "ZqIb");
      /* harmony import */


      var _support_sqlUtils_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! ../support/sqlUtils.js */
      "B8fU");
      /* harmony import */


      var _support_stats_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! ../support/stats.js */
      "sdy9");
      /* harmony import */


      var _layers_support_FieldsIndex_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
      /*! ../../../layers/support/FieldsIndex.js */
      "gLc9");
      /* harmony import */


      var _support_FeatureSet_js__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
      /*! ../support/FeatureSet.js */
      "T3Nt");
      /* harmony import */


      var _AttributeFilter_js__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
      /*! ./AttributeFilter.js */
      "nC36");
      /* harmony import */


      var _Adapted_js__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
      /*! ./Adapted.js */
      "LK1Z");
      /* harmony import */


      var _support_OrderbyClause_js__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(
      /*! ../support/OrderbyClause.js */
      "lq8Q");
      /* harmony import */


      var _OrderBy_js__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(
      /*! ./OrderBy.js */
      "Xbkg");
      /* harmony import */


      var _support_StatsField_js__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(
      /*! ../support/StatsField.js */
      "jLsz");
      /* harmony import */


      var _core_MD5_js__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(
      /*! ../../../core/MD5.js */
      "fvq6");
      /*
      All material copyright ESRI, All Rights Reserved, unless otherwise specified.
      See https://js.arcgis.com/4.18/esri/copyright.txt for details.
      */


      function C(e) {
        if (!e) return "COUNT";

        switch (e.toLowerCase()) {
          case "max":
            return "MAX";

          case "var":
          case "variance":
            return "VAR";

          case "avg":
          case "average":
          case "mean":
            return "AVG";

          case "min":
            return "MIN";

          case "sum":
            return "SUM";

          case "stdev":
          case "stddev":
            return "STDDEV";

          case "count":
            return "COUNT";
        }

        return "COUNT";
      }

      var G = /*#__PURE__*/function (_support_FeatureSet_j8) {
        _inherits(G, _support_FeatureSet_j8);

        var _super14 = _createSuper(G);

        function G(e) {
          var _this64;

          _classCallCheck(this, G);

          _this64 = _super14.call(this, e), _this64._decodedStatsfield = [], _this64._decodedGroupbyfield = [], _this64._candosimplegroupby = !0, _this64.phsyicalgroupbyfields = [], _this64.objectIdField = "ROW__ID", _this64._internalObjectIdField = "ROW__ID", _this64._adaptedFields = [], _this64.declaredClass = "esri.arcade.featureset.actions.Aggregate", _this64._uniqueIds = 1, _this64._maxQuery = 10, _this64._maxProcessing = 10, _this64._parent = e.parentfeatureset, _this64._config = e;
          return _this64;
        }

        _createClass(G, [{
          key: "isTable",
          value: function isTable() {
            return !0;
          }
        }, {
          key: "_getSet",
          value: function _getSet(t) {
            var _this65 = this;

            return null === this._wset ? this._getFilteredSet("", null, null, null, t).then(function (e) {
              return _this65._wset = e, _this65._wset;
            }) : Object(_core_promiseUtils_js__WEBPACK_IMPORTED_MODULE_0__["resolve"])(this._wset);
          }
        }, {
          key: "_isInFeatureSet",
          value: function _isInFeatureSet() {
            return _support_shared_js__WEBPACK_IMPORTED_MODULE_5__["IdState"].InFeatureSet;
          }
        }, {
          key: "nextUniqueName",
          value: function nextUniqueName(e) {
            for (; 1 === e["T" + this._uniqueIds.toString()];) {
              this._uniqueIds++;
            }

            var t = "T" + this._uniqueIds.toString();

            return e[t] = 1, t;
          }
        }, {
          key: "convertToEsriFieldType",
          value: function convertToEsriFieldType(e) {
            return e;
          }
        }, {
          key: "_initialiseFeatureSet",
          value: function _initialiseFeatureSet() {
            var e = {};
            var t = !1,
                i = 1;
            var n = this._parent ? this._parent.getFieldsIndex() : new _layers_support_FieldsIndex_js__WEBPACK_IMPORTED_MODULE_10__["default"]([]);

            for (this.objectIdField = "ROW__ID", this.globalIdField = ""; !1 === t;) {
              var _e52 = !1;

              for (var _t39 = 0; _t39 < this._config.groupbyfields.length; _t39++) {
                if (this._config.groupbyfields[_t39].name.toLowerCase() === this.objectIdField.toLowerCase()) {
                  _e52 = !0;
                  break;
                }
              }

              if (!1 === _e52) for (var _t40 = 0; _t40 < this._config.statsfields.length; _t40++) {
                if (this._config.statsfields[_t40].name.toLowerCase() === this.objectIdField.toLowerCase()) {
                  _e52 = !0;
                  break;
                }
              }
              !1 === _e52 ? t = !0 : (this.objectIdField = "ROW__ID" + i.toString(), i++);
            }

            var _iterator46 = _createForOfIteratorHelper(this._config.statsfields),
                _step46;

            try {
              for (_iterator46.s(); !(_step46 = _iterator46.n()).done;) {
                var _e54 = _step46.value;

                var _t43 = new _support_StatsField_js__WEBPACK_IMPORTED_MODULE_16__["default"]();

                _t43.field = _e54.name, _t43.tofieldname = _e54.name, _t43.workingexpr = _e54.expression instanceof _core_sql_WhereClause_js__WEBPACK_IMPORTED_MODULE_7__["WhereClause"] ? _e54.expression : _core_sql_WhereClause_js__WEBPACK_IMPORTED_MODULE_7__["WhereClause"].create(_e54.expression, n), _t43.typeofstat = C(_e54.statistic), this._decodedStatsfield.push(_t43);
              }
            } catch (err) {
              _iterator46.e(err);
            } finally {
              _iterator46.f();
            }

            this._decodedGroupbyfield = [];

            var _iterator47 = _createForOfIteratorHelper(this._config.groupbyfields),
                _step47;

            try {
              for (_iterator47.s(); !(_step47 = _iterator47.n()).done;) {
                var _e55 = _step47.value;
                var _t44 = {
                  name: _e55.name,
                  singlefield: null,
                  tofieldname: _e55.name,
                  expression: _e55.expression instanceof _core_sql_WhereClause_js__WEBPACK_IMPORTED_MODULE_7__["WhereClause"] ? _e55.expression : _core_sql_WhereClause_js__WEBPACK_IMPORTED_MODULE_7__["WhereClause"].create(_e55.expression, n)
                };

                this._decodedGroupbyfield.push(_t44);
              }
            } catch (err) {
              _iterator47.e(err);
            } finally {
              _iterator47.f();
            }

            if (null !== this._parent) {
              this.geometryType = this._parent.geometryType, this.spatialReference = this._parent.spatialReference, this.hasM = this._parent.hasM, this.hasZ = this._parent.hasZ, this.typeIdField = "";

              var _iterator48 = _createForOfIteratorHelper(this._parent.fields),
                  _step48;

              try {
                for (_iterator48.s(); !(_step48 = _iterator48.n()).done;) {
                  var _t41 = _step48.value;
                  e[_t41.name.toUpperCase()] = 1;
                }
              } catch (err) {
                _iterator48.e(err);
              } finally {
                _iterator48.f();
              }

              this.types = null;
            } else this.geometryType = _support_shared_js__WEBPACK_IMPORTED_MODULE_5__["layerGeometryEsriConstants"].point, this.typeIdField = "", this.types = null, this.spatialReference = new _geometry_SpatialReference_js__WEBPACK_IMPORTED_MODULE_1__["default"]({
              wkid: 4326
            });

            this.fields = [];
            var r = new _support_StatsField_js__WEBPACK_IMPORTED_MODULE_16__["default"]();
            r.field = this.nextUniqueName(e), r.tofieldname = this.objectIdField, r.workingexpr = _core_sql_WhereClause_js__WEBPACK_IMPORTED_MODULE_7__["WhereClause"].create(this._parent.objectIdField, this._parent.getFieldsIndex()), r.typeofstat = "MIN", this._decodedStatsfield.push(r);

            var _iterator49 = _createForOfIteratorHelper(this._decodedGroupbyfield),
                _step49;

            try {
              for (_iterator49.s(); !(_step49 = _iterator49.n()).done;) {
                var _t45 = _step49.value;

                var _i8 = new _layers_support_Field_js__WEBPACK_IMPORTED_MODULE_4__["default"]();

                if (_t45.name = this.nextUniqueName(e), _i8.name = _t45.tofieldname, _i8.alias = _i8.name, Object(_support_sqlUtils_js__WEBPACK_IMPORTED_MODULE_8__["isSingleField"])(_t45.expression)) {
                  var _e56 = this._parent.getField(Object(_support_sqlUtils_js__WEBPACK_IMPORTED_MODULE_8__["toWhereClause"])(_t45.expression, _support_shared_js__WEBPACK_IMPORTED_MODULE_5__["FeatureServiceDatabaseType"].Standardised));

                  if (!_e56) throw new Error("Field is not present for Aggregation");
                  _t45.name = _e56.name, _t45.singlefield = _e56.name, this.phsyicalgroupbyfields.push(_e56.name), _i8.type = _e56.type;
                } else {
                  _i8.type = this.convertToEsriFieldType(Object(_support_sqlUtils_js__WEBPACK_IMPORTED_MODULE_8__["predictType"])(_t45.expression, this._parent.fields));

                  var _e57 = new _layers_support_Field_js__WEBPACK_IMPORTED_MODULE_4__["default"]();

                  _e57.name = _t45.name, _e57.alias = _e57.name, this.phsyicalgroupbyfields.push(_t45.name), this._adaptedFields.push(new _Adapted_js__WEBPACK_IMPORTED_MODULE_13__["SqlExpressionAdapted"](_e57, _t45.expression)), this._candosimplegroupby = !1;
                }

                this.fields.push(_i8);
              }
            } catch (err) {
              _iterator49.e(err);
            } finally {
              _iterator49.f();
            }

            if (this._adaptedFields.length > 0) {
              var _iterator50 = _createForOfIteratorHelper(this._parent.fields),
                  _step50;

              try {
                for (_iterator50.s(); !(_step50 = _iterator50.n()).done;) {
                  var _e53 = _step50.value;

                  this._adaptedFields.push(new _Adapted_js__WEBPACK_IMPORTED_MODULE_13__["OriginalField"](_e53));
                }
              } catch (err) {
                _iterator50.e(err);
              } finally {
                _iterator50.f();
              }
            }

            for (var _t42 = 0; _t42 < this._decodedStatsfield.length; _t42++) {
              var _i7 = new _layers_support_Field_js__WEBPACK_IMPORTED_MODULE_4__["default"]();

              var s = null;
              var _n = this._decodedStatsfield[_t42];
              _n.field = this.nextUniqueName(e), _n.tofieldname === this.objectIdField && (this._internalObjectIdField = _n.field), _i7.name = _n.tofieldname, _i7.alias = _i7.name;

              var _r19 = null !== _n.workingexpr && Object(_support_sqlUtils_js__WEBPACK_IMPORTED_MODULE_8__["isSingleField"])(_n.workingexpr) ? Object(_support_sqlUtils_js__WEBPACK_IMPORTED_MODULE_8__["toWhereClause"])(_n.workingexpr, _support_shared_js__WEBPACK_IMPORTED_MODULE_5__["FeatureServiceDatabaseType"].Standardised) : "";

              switch (this._decodedStatsfield[_t42].typeofstat) {
                case "SUM":
                  if ("" !== _r19) {
                    if (s = this._parent.getField(_r19), !s) throw new Error("Field is not present for Aggregation");
                    _i7.type = s.type;
                  } else _i7.type = "double";

                  break;

                case "MIN":
                case "MAX":
                  if ("" !== _r19) {
                    if (s = this._parent.getField(_r19), !s) throw new Error("Field is not present for Aggregation");
                    _i7.type = s.type;
                  } else _i7.type = "double";

                  break;

                case "COUNT":
                  _i7.type = "integer";
                  break;

                case "STDDEV":
                case "VAR":
                case "AVG":
                  if ("" !== _r19 && (s = this._parent.getField(_r19), !s)) throw new Error("Field is not present for Aggregation");
                  _i7.type = "double";
              }

              this.fields.push(_i7);
            }
          }
        }, {
          key: "_canDoAggregates",
          value: function _canDoAggregates() {
            return Object(_core_promiseUtils_js__WEBPACK_IMPORTED_MODULE_0__["resolve"])(!1);
          }
        }, {
          key: "_getFeatures",
          value: function _getFeatures(t, i, s, n) {
            var _this66 = this;

            -1 !== i && this._featureCache[i];
            var r = this._maxQuery;
            return !0 === this._checkIfNeedToExpandKnownPage(t, r) ? this._expandPagedSet(t, r, 0, 0, n).then(function () {
              return _this66._getFeatures(t, i, s, n);
            }) : Object(_core_promiseUtils_js__WEBPACK_IMPORTED_MODULE_0__["resolve"])("success");
          }
        }, {
          key: "_getFilteredSet",
          value: function _getFilteredSet(t, i, s, n, r) {
            var _this67 = this;

            if ("" !== t) return Object(_core_promiseUtils_js__WEBPACK_IMPORTED_MODULE_0__["resolve"])(new _support_IdSet_js__WEBPACK_IMPORTED_MODULE_6__["default"]([], [], !0, null));
            var a = null;
            var l = {
              ordered: !1,
              nowhereclause: !1
            };
            return this._ensureLoaded().then(function () {
              if (null !== s) for (var e = 0; e < _this67._decodedStatsfield.length; e++) {
                if (!0 === Object(_support_sqlUtils_js__WEBPACK_IMPORTED_MODULE_8__["scanForField"])(s, _this67._decodedStatsfield[e].tofieldname)) {
                  l.nowhereclause = !0, s = null;
                  break;
                }
              }

              if (null !== n) {
                l.ordered = !0;

                for (var _e58 = 0; _e58 < _this67._decodedStatsfield.length; _e58++) {
                  if (!0 === n.scanForField(_this67._decodedStatsfield[_e58].tofieldname)) {
                    n = null, l.ordered = !1;
                    break;
                  }
                }

                if (null !== n) {
                  var _iterator51 = _createForOfIteratorHelper(_this67._decodedGroupbyfield),
                      _step51;

                  try {
                    for (_iterator51.s(); !(_step51 = _iterator51.n()).done;) {
                      var _e59 = _step51.value;

                      if (null === _e59.singlefield && !0 === n.scanForField(_e59.tofieldname)) {
                        n = null, l.ordered = !1;
                        break;
                      }
                    }
                  } catch (err) {
                    _iterator51.e(err);
                  } finally {
                    _iterator51.f();
                  }
                }
              }

              return !1 === _this67._candosimplegroupby ? Object(_core_promiseUtils_js__WEBPACK_IMPORTED_MODULE_0__["resolve"])(!1) : _this67._parent._canDoAggregates(_this67.phsyicalgroupbyfields, _this67._decodedStatsfield, "", null, null);
            }).then(function (e) {
              if (e) {
                var _e60 = null;
                s && (_e60 = _this67._reformulateWhereClauseWithoutGroupByFields(s));
                var _t46 = null;
                return n && (_t46 = _this67._reformulateOrderClauseWithoutGroupByFields(n)), _this67._parent._getAggregatePagesDataSourceDefinition(_this67.phsyicalgroupbyfields, _this67._decodedStatsfield, "", null, _e60, _t46, _this67._internalObjectIdField).then(function (e) {
                  return _this67._checkCancelled(r), a = !0 === l.nowhereclause ? new _support_IdSet_js__WEBPACK_IMPORTED_MODULE_6__["default"](e._candidates.slice(0).concat(e._known.slice(0)), [], !0 === l.ordered && e._ordered, _this67._clonePageDefinition(e.pagesDefinition)) : new _support_IdSet_js__WEBPACK_IMPORTED_MODULE_6__["default"](e._candidates.slice(0), e._known.slice(0), !0 === l.ordered && e._ordered, _this67._clonePageDefinition(e.pagesDefinition)), a;
                });
              }

              var t = _this67._parent;
              if (_this67._adaptedFields.length > 0 && (t = new _Adapted_js__WEBPACK_IMPORTED_MODULE_13__["AdaptedFeatureSet"]({
                parentfeatureset: _this67._parent,
                adaptedFields: _this67._adaptedFields,
                extraFilter: null
              })), !0 === l.nowhereclause) a = new _support_IdSet_js__WEBPACK_IMPORTED_MODULE_6__["default"](["GETPAGES"], [], !1, {
                aggregatefeaturesetpagedefinition: !0,
                resultOffset: 0,
                resultRecordCount: _this67._maxQuery,
                internal: {
                  fullyResolved: !1,
                  workingItem: null,
                  type: "manual",
                  iterator: null,
                  set: [],
                  subfeatureset: new _OrderBy_js__WEBPACK_IMPORTED_MODULE_15__["default"]({
                    parentfeatureset: t,
                    orderbyclause: new _support_OrderbyClause_js__WEBPACK_IMPORTED_MODULE_14__["default"](_this67.phsyicalgroupbyfields.join(",") + "," + _this67._parent.objectIdField + " ASC")
                  })
                }
              });else {
                var _e61 = t;

                if (null !== s) {
                  var _t47 = null;
                  s && (_t47 = _this67._reformulateWhereClauseWithoutGroupByFields(s)), _e61 = new _AttributeFilter_js__WEBPACK_IMPORTED_MODULE_12__["default"]({
                    parentfeatureset: _e61,
                    whereclause: _t47
                  });
                }

                a = new _support_IdSet_js__WEBPACK_IMPORTED_MODULE_6__["default"](["GETPAGES"], [], !1, {
                  aggregatefeaturesetpagedefinition: !0,
                  resultOffset: 0,
                  resultRecordCount: _this67._maxQuery,
                  internal: {
                    fullyResolved: !1,
                    workingItem: null,
                    type: "manual",
                    iterator: null,
                    set: [],
                    subfeatureset: new _OrderBy_js__WEBPACK_IMPORTED_MODULE_15__["default"]({
                      parentfeatureset: _e61,
                      orderbyclause: new _support_OrderbyClause_js__WEBPACK_IMPORTED_MODULE_14__["default"](_this67.phsyicalgroupbyfields.join(",") + "," + _this67._parent.objectIdField + " ASC")
                    })
                  }
                });
              }
              return a;
            });
          }
        }, {
          key: "_reformulateWhereClauseWithoutStatsFields",
          value: function _reformulateWhereClauseWithoutStatsFields(e) {
            var _iterator52 = _createForOfIteratorHelper(this._decodedStatsfield),
                _step52;

            try {
              for (_iterator52.s(); !(_step52 = _iterator52.n()).done;) {
                var t = _step52.value;
                e = Object(_support_sqlUtils_js__WEBPACK_IMPORTED_MODULE_8__["reformulateWithoutField"])(e, t.tofieldname, Object(_support_sqlUtils_js__WEBPACK_IMPORTED_MODULE_8__["toWhereClause"])(t.workingexpr, _support_shared_js__WEBPACK_IMPORTED_MODULE_5__["FeatureServiceDatabaseType"].Standardised), this._parent.getFieldsIndex());
              }
            } catch (err) {
              _iterator52.e(err);
            } finally {
              _iterator52.f();
            }

            return e;
          }
        }, {
          key: "_reformulateWhereClauseWithoutGroupByFields",
          value: function _reformulateWhereClauseWithoutGroupByFields(e) {
            var _iterator53 = _createForOfIteratorHelper(this._decodedGroupbyfield),
                _step53;

            try {
              for (_iterator53.s(); !(_step53 = _iterator53.n()).done;) {
                var t = _step53.value;
                t.tofieldname !== t.name && (e = Object(_support_sqlUtils_js__WEBPACK_IMPORTED_MODULE_8__["reformulateWithoutField"])(e, t.tofieldname, Object(_support_sqlUtils_js__WEBPACK_IMPORTED_MODULE_8__["toWhereClause"])(t.expression, _support_shared_js__WEBPACK_IMPORTED_MODULE_5__["FeatureServiceDatabaseType"].Standardised), this._parent.getFieldsIndex()));
              }
            } catch (err) {
              _iterator53.e(err);
            } finally {
              _iterator53.f();
            }

            return e;
          }
        }, {
          key: "_reformulateOrderClauseWithoutGroupByFields",
          value: function _reformulateOrderClauseWithoutGroupByFields(e) {
            var t = [];

            var _iterator54 = _createForOfIteratorHelper(this._decodedGroupbyfield),
                _step54;

            try {
              for (_iterator54.s(); !(_step54 = _iterator54.n()).done;) {
                var _e62 = _step54.value;
                _e62.tofieldname !== _e62.name && t.push({
                  field: _e62.tofieldname,
                  newfield: _e62.name
                });
              }
            } catch (err) {
              _iterator54.e(err);
            } finally {
              _iterator54.f();
            }

            return t.length > 0 ? e.replaceFields(t) : e;
          }
        }, {
          key: "_clonePageDefinition",
          value: function _clonePageDefinition(e) {
            return null === e ? null : !0 === e.aggregatefeaturesetpagedefinition ? {
              aggregatefeaturesetpagedefinition: !0,
              resultRecordCount: e.resultRecordCount,
              resultOffset: e.resultOffset,
              internal: e.internal
            } : this._parent._clonePageDefinition(e);
          }
        }, {
          key: "_refineSetBlock",
          value: function _refineSetBlock(i, s, n) {
            var _this68 = this;

            try {
              if (!0 === this._checkIfNeedToExpandCandidatePage(i, this._maxQuery)) return this._expandPagedSet(i, this._maxQuery, 0, 0, n).then(function () {
                return _this68._refineSetBlock(i, s, n);
              });

              this._checkCancelled(n);

              var t = i._candidates.length;

              this._refineKnowns(i, s);

              i._candidates.length;
              return i._candidates.length, Object(_core_promiseUtils_js__WEBPACK_IMPORTED_MODULE_0__["resolve"])(i);
            } catch (e) {
              return Object(_core_promiseUtils_js__WEBPACK_IMPORTED_MODULE_0__["reject"])(e);
            }
          }
        }, {
          key: "_expandPagedSet",
          value: function _expandPagedSet(e, t, i, s, n) {
            return this._expandPagedSetFeatureSet(e, t, i, s, n);
          }
        }, {
          key: "_getPhysicalPage",
          value: function _getPhysicalPage(e, t, s) {
            var _this69 = this;

            return !0 === e.pagesDefinition.aggregatefeaturesetpagedefinition ? Object(_core_promiseUtils_js__WEBPACK_IMPORTED_MODULE_0__["create"])(function (t, i) {
              _this69._sequentialGetPhysicalItem(e, e.pagesDefinition.resultRecordCount, s, []).then(function (e) {
                t(e);
              }, i);
            }) : this._getAgregagtePhysicalPage(e, t, s).then(function (e) {
              var _iterator55 = _createForOfIteratorHelper(e),
                  _step55;

              try {
                for (_iterator55.s(); !(_step55 = _iterator55.n()).done;) {
                  var _t48 = _step55.value;
                  var _e63 = {
                    geometry: _t48.geometry,
                    attributes: {}
                  };

                  var _iterator56 = _createForOfIteratorHelper(_this69._decodedGroupbyfield),
                      _step56;

                  try {
                    for (_iterator56.s(); !(_step56 = _iterator56.n()).done;) {
                      var i = _step56.value;
                      _e63.attributes[i.tofieldname] = _t48.attributes[i.name];
                    }
                  } catch (err) {
                    _iterator56.e(err);
                  } finally {
                    _iterator56.f();
                  }

                  var _iterator57 = _createForOfIteratorHelper(_this69._decodedStatsfield),
                      _step57;

                  try {
                    for (_iterator57.s(); !(_step57 = _iterator57.n()).done;) {
                      var _i9 = _step57.value;
                      _e63.attributes[_i9.tofieldname] = _t48.attributes[_i9.field];
                    }
                  } catch (err) {
                    _iterator57.e(err);
                  } finally {
                    _iterator57.f();
                  }

                  _this69._featureCache[_e63.attributes[_this69.objectIdField]] = new _Graphic_js__WEBPACK_IMPORTED_MODULE_2__["default"](_e63);
                }
              } catch (err) {
                _iterator55.e(err);
              } finally {
                _iterator55.f();
              }

              return e.length;
            });
          }
        }, {
          key: "_sequentialGetPhysicalItem",
          value: function _sequentialGetPhysicalItem(e, t, s, n) {
            var _this70 = this;

            return Object(_core_promiseUtils_js__WEBPACK_IMPORTED_MODULE_0__["create"])(function (i, r) {
              null === e.pagesDefinition.internal.iterator && (e.pagesDefinition.internal.iterator = e.pagesDefinition.internal.subfeatureset.iterator(s)), !0 === e.pagesDefinition.internal.fullyResolved || 0 === t ? i(n.length) : _this70._nextAggregateItem(e, t, s, n, function (r) {
                null === r ? i(n.length) : (t -= 1, i(_this70._sequentialGetPhysicalItem(e, t, s, n)));
              }, r);
            });
          }
        }, {
          key: "_nextAggregateItem",
          value: function _nextAggregateItem(e, t, i, s, n, a) {
            var _this71 = this;

            try {
              Object(_chunks_languageUtils_js__WEBPACK_IMPORTED_MODULE_3__["Q"])(e.pagesDefinition.internal.iterator.next()).then(function (r) {
                if (null === r) {
                  if (null !== e.pagesDefinition.internal.workingItem) {
                    var _t49 = _this71._calculateAndAppendAggregateItem(e.pagesDefinition.internal.workingItem);

                    s.push(_t49), e.pagesDefinition.internal.workingItem = null, e.pagesDefinition.internal.set.push(_t49.attributes[_this71.objectIdField]), e.pagesDefinition.internal.fullyResolved = !0, n(null);
                  } else e.pagesDefinition.internal.fullyResolved = !0, n(null);
                } else {
                  var l = _this71._generateAggregateHash(r);

                  if (null === e.pagesDefinition.internal.workingItem) e.pagesDefinition.internal.workingItem = {
                    features: [r],
                    id: l
                  };else {
                    if (l !== e.pagesDefinition.internal.workingItem.id) {
                      var _i10 = _this71._calculateAndAppendAggregateItem(e.pagesDefinition.internal.workingItem);

                      return s.push(_i10), e.pagesDefinition.internal.workingItem = null, e.pagesDefinition.internal.set.push(_i10.attributes[_this71.objectIdField]), t -= 1, e.pagesDefinition.internal.workingItem = {
                        features: [r],
                        id: l
                      }, void n(_i10);
                    }

                    e.pagesDefinition.internal.workingItem.features.push(r);
                  }

                  _this71._nextAggregateItem(e, t, i, s, n, a);
                }
              }, a);
            } catch (e) {
              a(e);
            }
          }
        }, {
          key: "_calculateFieldStat",
          value: function _calculateFieldStat(e, t, i) {
            var s = [];

            for (var _i11 = 0; _i11 < e.features.length; _i11++) {
              if (null !== t.workingexpr) {
                var n = t.workingexpr.calculateValue(e.features[_i11]);
                null !== n && s.push(n);
              } else s.push(null);
            }

            switch (t.typeofstat) {
              case "MIN":
                i.attributes[t.tofieldname] = Object(_support_stats_js__WEBPACK_IMPORTED_MODULE_9__["calculateStat"])("min", s, -1);
                break;

              case "MAX":
                i.attributes[t.tofieldname] = Object(_support_stats_js__WEBPACK_IMPORTED_MODULE_9__["calculateStat"])("max", s, -1);
                break;

              case "SUM":
                i.attributes[t.tofieldname] = Object(_support_stats_js__WEBPACK_IMPORTED_MODULE_9__["calculateStat"])("sum", s, -1);
                break;

              case "COUNT":
                i.attributes[t.tofieldname] = s.length;
                break;

              case "VAR":
                i.attributes[t.tofieldname] = Object(_support_stats_js__WEBPACK_IMPORTED_MODULE_9__["calculateStat"])("var", s, -1);
                break;

              case "STDDEV":
                i.attributes[t.tofieldname] = Object(_support_stats_js__WEBPACK_IMPORTED_MODULE_9__["calculateStat"])("stddev", s, -1);
                break;

              case "AVG":
                i.attributes[t.tofieldname] = Object(_support_stats_js__WEBPACK_IMPORTED_MODULE_9__["calculateStat"])("avg", s, -1);
            }

            return !0;
          }
        }, {
          key: "_calculateAndAppendAggregateItem",
          value: function _calculateAndAppendAggregateItem(e) {
            var t = {
              attributes: {},
              geometry: null
            };

            var _iterator58 = _createForOfIteratorHelper(this._decodedGroupbyfield),
                _step58;

            try {
              for (_iterator58.s(); !(_step58 = _iterator58.n()).done;) {
                var _i12 = _step58.value;

                var _s13 = _i12.singlefield ? e.features[0].attributes[_i12.singlefield] : _i12.expression.calculateValue(e.features[0]);

                t.attributes[_i12.tofieldname] = _s13;
              }
            } catch (err) {
              _iterator58.e(err);
            } finally {
              _iterator58.f();
            }

            var _iterator59 = _createForOfIteratorHelper(this._decodedStatsfield),
                _step59;

            try {
              for (_iterator59.s(); !(_step59 = _iterator59.n()).done;) {
                var _i13 = _step59.value;

                this._calculateFieldStat(e, _i13, t);
              }
            } catch (err) {
              _iterator59.e(err);
            } finally {
              _iterator59.f();
            }

            var i = [];

            for (var s = 0; s < this._decodedStatsfield.length; s++) {
              i.push(this._calculateFieldStat(e, this._decodedStatsfield[s], t));
            }

            return this._featureCache[t.attributes[this.objectIdField]] = new _Graphic_js__WEBPACK_IMPORTED_MODULE_2__["default"]({
              attributes: t.attributes,
              geometry: t.geometry
            }), t;
          }
        }, {
          key: "_generateAggregateHash",
          value: function _generateAggregateHash(e) {
            var t = "";

            var _iterator60 = _createForOfIteratorHelper(this._decodedGroupbyfield),
                _step60;

            try {
              for (_iterator60.s(); !(_step60 = _iterator60.n()).done;) {
                var i = _step60.value;
                var s = i.singlefield ? e.attributes[i.singlefield] : i.expression.calculateValue(e);
                t += null == s ? ":" : ":" + s.toString();
              }
            } catch (err) {
              _iterator60.e(err);
            } finally {
              _iterator60.f();
            }

            return Object(_core_MD5_js__WEBPACK_IMPORTED_MODULE_17__["createMD5Hash"])(t, _core_MD5_js__WEBPACK_IMPORTED_MODULE_17__["outputTypes"].String);
          }
        }, {
          key: "_stat",
          value: function _stat() {
            return Object(_core_promiseUtils_js__WEBPACK_IMPORTED_MODULE_0__["resolve"])({
              calculated: !1
            });
          }
        }, {
          key: "getFeatureByObjectId",
          value: function getFeatureByObjectId() {
            return Object(_core_promiseUtils_js__WEBPACK_IMPORTED_MODULE_0__["resolve"])(null);
          }
        }], [{
          key: "registerAction",
          value: function registerAction() {
            _support_FeatureSet_js__WEBPACK_IMPORTED_MODULE_11__["default"]._featuresetFunctions.groupby = function (e, t) {
              return new G({
                parentfeatureset: this,
                groupbyfields: e,
                statsfields: t
              });
            };
          }
        }]);

        return G;
      }(_support_FeatureSet_js__WEBPACK_IMPORTED_MODULE_11__["default"]);
      /* harmony default export */


      __webpack_exports__["default"] = G;
      /***/
    }
  }]);
})();
//# sourceMappingURL=default~arcade-featureSetUtils-js~arcade-functions-featuresetbase-js-es5.js.map