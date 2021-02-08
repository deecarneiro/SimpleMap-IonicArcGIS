(function () {
  function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }

  function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

  function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && Symbol.iterator in Object(iter)) return Array.from(iter); }

  function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }

  function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

  function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

  function _get(target, property, receiver) { if (typeof Reflect !== "undefined" && Reflect.get) { _get = Reflect.get; } else { _get = function _get(target, property, receiver) { var base = _superPropBase(target, property); if (!base) return; var desc = Object.getOwnPropertyDescriptor(base, property); if (desc.get) { return desc.get.call(receiver); } return desc.value; }; } return _get(target, property, receiver || target); }

  function _superPropBase(object, property) { while (!Object.prototype.hasOwnProperty.call(object, property)) { object = _getPrototypeOf(object); if (object === null) break; } return object; }

  function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

  function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

  function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

  function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

  function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

  function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

  function _possibleConstructorReturn(self, call) { if (call && (typeof call === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

  function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

  function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

  function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

  function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

  function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

  function _iterableToArrayLimit(arr, i) { if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr))) return; var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

  function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

  function _createForOfIteratorHelper(o, allowArrayLike) { var it; if (typeof Symbol === "undefined" || o[Symbol.iterator] == null) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function (_e95) { function e(_x25) { return _e95.apply(this, arguments); } e.toString = function () { return _e95.toString(); }; return e; }(function (e) { throw e; }), f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = o[Symbol.iterator](); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function (_e96) { function e(_x26) { return _e96.apply(this, arguments); } e.toString = function () { return _e96.toString(); }; return e; }(function (e) { didErr = true; err = e; }), f: function f() { try { if (!normalCompletion && it["return"] != null) it["return"](); } finally { if (didErr) throw err; } } }; }

  function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

  function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["layers-VectorTileLayerView2D-js"], {
    /***/
    "1/KW":
    /*!*****************************************************!*\
      !*** ./node_modules/@arcgis/core/core/ItemCache.js ***!
      \*****************************************************/

    /*! exports provided: default */

    /***/
    function KW(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony import */


      var _MemCache_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ./MemCache.js */
      "rvq7");
      /*
      All material copyright ESRI, All Rights Reserved, unless otherwise specified.
      See https://js.arcgis.com/4.18/esri/copyright.txt for details.
      */

      /* harmony default export */


      __webpack_exports__["default"] = /*#__PURE__*/function () {
        function _class(e, r) {
          _classCallCheck(this, _class);

          this._storage = new _MemCache_js__WEBPACK_IMPORTED_MODULE_0__["MemCacheStorage"](), this._storage.maxSize = e, r && this._storage.registerRemoveFunc("", r);
        }

        _createClass(_class, [{
          key: "put",
          value: function put(t, e) {
            this._storage.put(t, e, 1, 1);
          }
        }, {
          key: "pop",
          value: function pop(t) {
            return this._storage.pop(t);
          }
        }, {
          key: "get",
          value: function get(t) {
            return this._storage.get(t);
          }
        }, {
          key: "clear",
          value: function clear() {
            this._storage.clearAll();
          }
        }, {
          key: "destroy",
          value: function destroy() {
            this._storage.clearAll();
          }
        }]);

        return _class;
      }();
      /***/

    },

    /***/
    "1eRR":
    /*!************************************************************************************************!*\
      !*** ./node_modules/@arcgis/core/views/2d/engine/vectorTiles/decluttering/SymbolRepository.js ***!
      \************************************************************************************************/

    /*! exports provided: SymbolRepository */

    /***/
    function eRR(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "SymbolRepository", function () {
        return l;
      });
      /* harmony import */


      var _core_maybe_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ../../../../../core/maybe.js */
      "srIe");
      /* harmony import */


      var _util_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./util.js */
      "vAXJ");
      /*
      All material copyright ESRI, All Rights Reserved, unless otherwise specified.
      See https://js.arcgis.com/4.18/esri/copyright.txt for details.
      */


      var l = /*#__PURE__*/function () {
        function l(e, s, o) {
          _classCallCheck(this, l);

          this.tileCoordRange = e, this._visibleTiles = s, this._createUnique = o, this._tiles = new Map(), this._uniqueSymbolsReferences = new Map();
        }

        _createClass(l, [{
          key: "uniqueSymbols",
          get: function get() {
            return Object(_core_maybe_js__WEBPACK_IMPORTED_MODULE_0__["isNone"])(this._uniqueSymbolLayerArray) && (this._uniqueSymbolLayerArray = this._createUniqueSymbolLayerArray()), this._uniqueSymbolLayerArray;
          }
        }, {
          key: "add",
          value: function add(e, s) {
            this._uniqueSymbolLayerArray = null;

            var t = this._tiles.get(e.id);

            t || (t = {
              symbols: new Map()
            }, this._tiles.set(e.id, t));

            var _l = new Map();

            if (s) {
              var _iterator = _createForOfIteratorHelper(s),
                  _step;

              try {
                for (_iterator.s(); !(_step = _iterator.n()).done;) {
                  var _e = _step.value;
                  t.symbols.has(_e) && (_l.set(_e, t.symbols.get(_e)), t.symbols["delete"](_e));
                }
              } catch (err) {
                _iterator.e(err);
              } finally {
                _iterator.f();
              }
            } else {
              var _iterator2 = _createForOfIteratorHelper(e.layerData),
                  _step2;

              try {
                for (_iterator2.s(); !(_step2 = _iterator2.n()).done;) {
                  var _step2$value = _slicedToArray(_step2.value, 2),
                      _s = _step2$value[0],
                      o = _step2$value[1];

                  t.symbols.has(_s) && (_l.set(_s, t.symbols.get(_s)), t.symbols["delete"](_s));
                }
              } catch (err) {
                _iterator2.e(err);
              } finally {
                _iterator2.f();
              }
            }

            this._removeSymbols(_l);

            var i = e.symbols,
                n = new Map();

            var _iterator3 = _createForOfIteratorHelper(i),
                _step3;

            try {
              for (_iterator3.s(); !(_step3 = _iterator3.n()).done;) {
                var _step3$value = _slicedToArray(_step3.value, 2),
                    _e2 = _step3$value[0],
                    _s2 = _step3$value[1];

                var _l9 = _s2.length;

                if (_l9 >= 32) {
                  var _i2 = this.tileCoordRange;

                  do {
                    _i2 /= 2, _l9 /= 4;
                  } while (_l9 > 8 && _i2 > 64);

                  var r = new _util_js__WEBPACK_IMPORTED_MODULE_1__["GridIndex"](this.tileCoordRange, this.tileCoordRange, _i2);
                  n.set(_e2, {
                    flat: _s2,
                    index: r
                  }), t.symbols.set(_e2, {
                    flat: _s2,
                    index: r
                  });

                  var _iterator4 = _createForOfIteratorHelper(_s2),
                      _step4;

                  try {
                    for (_iterator4.s(); !(_step4 = _iterator4.n()).done;) {
                      var _e3 = _step4.value;
                      r.getCell(_e3.xTile, _e3.yTile).push(_e3);
                    }
                  } catch (err) {
                    _iterator4.e(err);
                  } finally {
                    _iterator4.f();
                  }
                } else n.set(_e2, {
                  flat: _s2
                }), t.symbols.set(_e2, {
                  flat: _s2
                });
              }
            } catch (err) {
              _iterator3.e(err);
            } finally {
              _iterator3.f();
            }

            this._addSymbols(e.key, i);
          }
        }, {
          key: "deleteStyleLayers",
          value: function deleteStyleLayers(e) {
            this._uniqueSymbolLayerArray = null;

            var _iterator5 = _createForOfIteratorHelper(this._tiles),
                _step5;

            try {
              for (_iterator5.s(); !(_step5 = _iterator5.n()).done;) {
                var _step5$value = _slicedToArray(_step5.value, 2),
                    s = _step5$value[0],
                    o = _step5$value[1];

                var t = new Map();

                var _iterator6 = _createForOfIteratorHelper(e),
                    _step6;

                try {
                  for (_iterator6.s(); !(_step6 = _iterator6.n()).done;) {
                    var _s3 = _step6.value;
                    o.symbols.has(_s3) && (t.set(_s3, o.symbols.get(_s3)), o.symbols["delete"](_s3));
                  }
                } catch (err) {
                  _iterator6.e(err);
                } finally {
                  _iterator6.f();
                }

                this._removeSymbols(t), 0 === o.symbols.size && this._tiles["delete"](s);
              }
            } catch (err) {
              _iterator5.e(err);
            } finally {
              _iterator5.f();
            }
          }
        }, {
          key: "removeTile",
          value: function removeTile(e) {
            this._uniqueSymbolLayerArray = null;

            var s = this._tiles.get(e.id);

            if (!s) return;
            var o = new Map();

            var _iterator7 = _createForOfIteratorHelper(e.symbols),
                _step7;

            try {
              for (_iterator7.s(); !(_step7 = _iterator7.n()).done;) {
                var _step7$value = _slicedToArray(_step7.value, 2),
                    t = _step7$value[0],
                    _l10 = _step7$value[1];

                s.symbols.has(t) && (o.set(t, s.symbols.get(t)), s.symbols["delete"](t));
              }
            } catch (err) {
              _iterator7.e(err);
            } finally {
              _iterator7.f();
            }

            this._removeSymbols(o), 0 === s.symbols.size && this._tiles["delete"](e.id);
          }
        }, {
          key: "_removeSymbols",
          value: function _removeSymbols(e) {
            var _iterator8 = _createForOfIteratorHelper(e),
                _step8;

            try {
              for (_iterator8.s(); !(_step8 = _iterator8.n()).done;) {
                var _step8$value = _slicedToArray(_step8.value, 2),
                    s = _step8$value[0],
                    o = _step8$value[1].flat;

                var _iterator9 = _createForOfIteratorHelper(o),
                    _step9;

                try {
                  for (_iterator9.s(); !(_step9 = _iterator9.n()).done;) {
                    var _e4 = _step9.value;

                    var _o = _e4.unique,
                        t = _o.tileSymbols,
                        _l11 = t.length - 1;

                    for (var _s4 = 0; _s4 < _l11; _s4++) {
                      if (t[_s4] === _e4) {
                        t[_s4] = t[_l11];
                        break;
                      }
                    }

                    if (t.length = _l11, 0 === _l11) {
                      var _e5 = this._uniqueSymbolsReferences.get(s);

                      _e5["delete"](_o), 0 === _e5.size && this._uniqueSymbolsReferences["delete"](s);
                    }

                    _e4.unique = null;
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
        }, {
          key: "_addSymbols",
          value: function _addSymbols(s, o) {
            if (0 === o.size) return;
            var t = this._visibleTiles;

            var _iterator10 = _createForOfIteratorHelper(t),
                _step10;

            try {
              for (_iterator10.s(); !(_step10 = _iterator10.n()).done;) {
                var e = _step10.value;
                e.parentTile || e.key.world !== s.world || e.key.level === s.level && !e.key.equals(s) || this._matchSymbols(e, s, o);
              }
            } catch (err) {
              _iterator10.e(err);
            } finally {
              _iterator10.f();
            }

            var _iterator11 = _createForOfIteratorHelper(o),
                _step11;

            try {
              for (_iterator11.s(); !(_step11 = _iterator11.n()).done;) {
                var _step11$value = _slicedToArray(_step11.value, 2),
                    _s5 = _step11$value[0],
                    _t = _step11$value[1];

                var _iterator12 = _createForOfIteratorHelper(_t),
                    _step12;

                try {
                  for (_iterator12.s(); !(_step12 = _iterator12.n()).done;) {
                    var _o2 = _step12.value;

                    if (Object(_core_maybe_js__WEBPACK_IMPORTED_MODULE_0__["isNone"])(_o2.unique)) {
                      var _e6 = this._createUnique();

                      _o2.unique = _e6, _e6.tileSymbols.push(_o2);

                      var _t2 = this._uniqueSymbolsReferences.get(_s5);

                      _t2 || (_t2 = new Set(), this._uniqueSymbolsReferences.set(_s5, _t2)), _t2.add(_e6);
                    }
                  }
                } catch (err) {
                  _iterator12.e(err);
                } finally {
                  _iterator12.f();
                }
              }
            } catch (err) {
              _iterator11.e(err);
            } finally {
              _iterator11.f();
            }
          }
        }, {
          key: "_matchSymbols",
          value: function _matchSymbols(e, o, _l5) {
            if (e.key.level > o.level) {
              var s = e.key.level - o.level;
              if (e.key.row >> s !== o.row || e.key.col >> s !== o.col) return;
            }

            if (o.level > e.key.level) {
              var _s6 = o.level - e.key.level;

              if (o.row >> _s6 !== e.key.row || o.col >> _s6 !== e.key.col) return;
            }

            if (o.equals(e.key)) {
              var _iterator13 = _createForOfIteratorHelper(e.childrenTiles),
                  _step13;

              try {
                for (_iterator13.s(); !(_step13 = _iterator13.n()).done;) {
                  var _s7 = _step13.value;

                  this._matchSymbols(_s7, o, _l5);
                }
              } catch (err) {
                _iterator13.e(err);
              } finally {
                _iterator13.f();
              }

              return;
            }

            var i = new Map();

            var _iterator14 = _createForOfIteratorHelper(_l5),
                _step14;

            try {
              for (_iterator14.s(); !(_step14 = _iterator14.n()).done;) {
                var _step14$value = _slicedToArray(_step14.value, 2),
                    n = _step14$value[0],
                    r = _step14$value[1];

                var _l12 = [];

                var _iterator16 = _createForOfIteratorHelper(r),
                    _step16;

                try {
                  for (_iterator16.s(); !(_step16 = _iterator16.n()).done;) {
                    var _s9 = _step16.value;

                    var _i4 = Object(_util_js__WEBPACK_IMPORTED_MODULE_1__["tileCoordChange"])(this.tileCoordRange, _s9.xTile, o.level, o.col, e.key.level, e.key.col),
                        _n3 = Object(_util_js__WEBPACK_IMPORTED_MODULE_1__["tileCoordChange"])(this.tileCoordRange, _s9.yTile, o.level, o.row, e.key.level, e.key.row);

                    _i4 >= 0 && _i4 < this.tileCoordRange && _n3 >= 0 && _n3 < this.tileCoordRange && _l12.push({
                      symbol: _s9,
                      xTransformed: _i4,
                      yTransformed: _n3
                    });
                  }
                } catch (err) {
                  _iterator16.e(err);
                } finally {
                  _iterator16.f();
                }

                var y = [],
                    a = e.key.level < o.level ? 1 : 1 << e.key.level - o.level,
                    f = this._tiles.get(e.id).symbols.get(n);

                if (f) {
                  var _e7 = f.flat;

                  var _iterator17 = _createForOfIteratorHelper(_l12),
                      _step17;

                  try {
                    for (_iterator17.s(); !(_step17 = _iterator17.n()).done;) {
                      var _o3 = _step17.value;

                      var t = void 0,
                          _l13 = !1;

                      var _i3 = _o3.xTransformed,
                          _n2 = _o3.yTransformed;
                      t = Object(_core_maybe_js__WEBPACK_IMPORTED_MODULE_0__["isSome"])(f.index) ? f.index.getCell(_i3, _n2) : _e7;
                      var _r = _o3.symbol,
                          m = _r.hash;

                      var _iterator18 = _createForOfIteratorHelper(t),
                          _step18;

                      try {
                        for (_iterator18.s(); !(_step18 = _iterator18.n()).done;) {
                          var _e8 = _step18.value;

                          if (m === _e8.hash && Math.abs(_i3 - _e8.xTile) <= a && Math.abs(_n2 - _e8.yTile) <= a) {
                            var _s8 = _e8.unique;
                            _r.unique = _s8, _s8.tileSymbols.push(_r), _l13 = !0;
                            break;
                          }
                        }
                      } catch (err) {
                        _iterator18.e(err);
                      } finally {
                        _iterator18.f();
                      }

                      _l13 || y.push(_r);
                    }
                  } catch (err) {
                    _iterator17.e(err);
                  } finally {
                    _iterator17.f();
                  }
                }

                y.length > 0 && i.set(n, y);
              }
            } catch (err) {
              _iterator14.e(err);
            } finally {
              _iterator14.f();
            }

            var _iterator15 = _createForOfIteratorHelper(e.childrenTiles),
                _step15;

            try {
              for (_iterator15.s(); !(_step15 = _iterator15.n()).done;) {
                var _s10 = _step15.value;

                this._matchSymbols(_s10, o, i);
              }
            } catch (err) {
              _iterator15.e(err);
            } finally {
              _iterator15.f();
            }
          }
        }, {
          key: "_createUniqueSymbolLayerArray",
          value: function _createUniqueSymbolLayerArray() {
            var e = this._uniqueSymbolsReferences,
                s = new Array(e.size);
            var o,
                t = 0;

            var _iterator19 = _createForOfIteratorHelper(e),
                _step19;

            try {
              for (_iterator19.s(); !(_step19 = _iterator19.n()).done;) {
                var _step19$value = _slicedToArray(_step19.value, 2),
                    _l14 = _step19$value[0],
                    i = _step19$value[1];

                var _e9 = new Array(i.size);

                o = 0;

                var _iterator20 = _createForOfIteratorHelper(i),
                    _step20;

                try {
                  for (_iterator20.s(); !(_step20 = _iterator20.n()).done;) {
                    var _s11 = _step20.value;
                    _e9[o++] = _s11;
                  }
                } catch (err) {
                  _iterator20.e(err);
                } finally {
                  _iterator20.f();
                }

                s[t] = {
                  styleLayerUID: _l14,
                  uniqueSymbols: _e9
                }, t++;
              }
            } catch (err) {
              _iterator19.e(err);
            } finally {
              _iterator19.f();
            }

            return s;
          }
        }]);

        return l;
      }();
      /***/

    },

    /***/
    "5LEI":
    /*!*******************************************************************************!*\
      !*** ./node_modules/@arcgis/core/views/2d/engine/webgl/TiledDisplayObject.js ***!
      \*******************************************************************************/

    /*! exports provided: TiledDisplayObject */

    /***/
    function LEI(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "TiledDisplayObject", function () {
        return r;
      });
      /* harmony import */


      var _core_has_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ../../../../core/has.js */
      "wSAH");
      /* harmony import */


      var _chunks_mat3_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ../../../../chunks/mat3.js */
      "HJJS");
      /* harmony import */


      var _tiling_TileKey_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ../../tiling/TileKey.js */
      "rlSK");
      /* harmony import */


      var _chunks_mat3f32_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ../../../../chunks/mat3f32.js */
      "jHF5");
      /* harmony import */


      var _DisplayObject_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ../DisplayObject.js */
      "fEsP");
      /*
      All material copyright ESRI, All Rights Reserved, unless otherwise specified.
      See https://js.arcgis.com/4.18/esri/copyright.txt for details.
      */


      var r = /*#__PURE__*/function (_DisplayObject_js__WE) {
        _inherits(r, _DisplayObject_js__WE);

        var _super = _createSuper(r);

        function r(s, t, e) {
          var _this;

          var _r2 = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : e;

          _classCallCheck(this, r);

          _this = _super.call(this), _this.triangleCountReportedInDebug = 0, _this.transforms = {
            dvs: Object(_chunks_mat3f32_js__WEBPACK_IMPORTED_MODULE_3__["c"])(),
            tileMat3: Object(_chunks_mat3f32_js__WEBPACK_IMPORTED_MODULE_3__["c"])()
          }, _this.triangleCount = 0, _this.key = new _tiling_TileKey_js__WEBPACK_IMPORTED_MODULE_2__["default"](s), _this.bounds = t, _this.size = e, _this.coordRange = _r2;
          return _this;
        }

        _createClass(r, [{
          key: "destroy",
          value: function destroy() {
            this.texture && (this.texture.dispose(), this.texture = null);
          }
        }, {
          key: "coords",
          get: function get() {
            return this._coords;
          }
        }, {
          key: "bounds",
          get: function get() {
            return this._bounds;
          },
          set: function set(s) {
            this._coords = [s[0], s[3]], this._bounds = s;
          }
        }, {
          key: "setTransform",
          value: function setTransform(o, i) {
            var e = i / (o.resolution * o.pixelRatio),
                _r3 = this.transforms.tileMat3,
                _o$toScreenNoRotation = o.toScreenNoRotation([0, 0], this.coords),
                _o$toScreenNoRotation2 = _slicedToArray(_o$toScreenNoRotation, 2),
                n = _o$toScreenNoRotation2[0],
                h = _o$toScreenNoRotation2[1],
                a = this.size[0] / this.coordRange[0] * e,
                d = this.size[1] / this.coordRange[1] * e;

            Object(_chunks_mat3_js__WEBPACK_IMPORTED_MODULE_1__["s"])(_r3, a, 0, 0, 0, d, 0, n, h, 1), Object(_chunks_mat3_js__WEBPACK_IMPORTED_MODULE_1__["m"])(this.transforms.dvs, o.displayViewMat3, _r3);
          }
        }]);

        return r;
      }(_DisplayObject_js__WEBPACK_IMPORTED_MODULE_4__["DisplayObject"]);
      /***/

    },

    /***/
    "89j9":
    /*!******************************************************************************!*\
      !*** ./node_modules/@arcgis/core/views/2d/engine/vectorTiles/GlyphMosaic.js ***!
      \******************************************************************************/

    /*! exports provided: default */

    /***/
    function j9(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony import */


      var _core_has_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ../../../../core/has.js */
      "wSAH");
      /* harmony import */


      var _core_promiseUtils_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ../../../../core/promiseUtils.js */
      "9MzC");
      /* harmony import */


      var _chunks_builtins_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ../../../../chunks/builtins.js */
      "n4uK");
      /* harmony import */


      var _webgl_Texture_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ../../../webgl/Texture.js */
      "of9L");
      /* harmony import */


      var _webgl_FramebufferObject_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ../../../webgl/FramebufferObject.js */
      "0meK");
      /* harmony import */


      var _webgl_RenderingContext_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ../../../webgl/RenderingContext.js */
      "bfJE");
      /* harmony import */


      var _webgl_Rect_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ../webgl/Rect.js */
      "qcDN");
      /* harmony import */


      var _RectangleBinPack_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! ./RectangleBinPack.js */
      "PDbr");
      /*
      All material copyright ESRI, All Rights Reserved, unless otherwise specified.
      See https://js.arcgis.com/4.18/esri/copyright.txt for details.
      */

      /* harmony default export */


      __webpack_exports__["default"] = /*#__PURE__*/function () {
        function _class2(t, e, i) {
          _classCallCheck(this, _class2);

          this.width = 0, this.height = 0, this._dirties = [], this._glyphData = [], this._currentPage = 0, this._glyphIndex = {}, this._textures = [], this._rangePromises = new Map(), this.width = t, this.height = e, this._glyphSource = i, this._binPack = new _RectangleBinPack_js__WEBPACK_IMPORTED_MODULE_7__["default"](t - 4, e - 4), this._glyphData.push(new Uint8Array(t * e)), this._dirties.push(!0), this._textures.push(void 0);
        }

        _createClass(_class2, [{
          key: "getGlyphItems",
          value: function getGlyphItems(e, h) {
            var _this2 = this;

            var r = [],
                n = this._glyphSource,
                o = new Set();

            var _iterator21 = _createForOfIteratorHelper(h),
                _step21;

            try {
              for (_iterator21.s(); !(_step21 = _iterator21.n()).done;) {
                var t = _step21.value;

                var _e11 = Math.floor(.00390625 * t);

                o.add(_e11);
              }
            } catch (err) {
              _iterator21.e(err);
            } finally {
              _iterator21.f();
            }

            var a = [];
            return o.forEach(function (t) {
              if (t <= 256) {
                var i = e + t;
                if (_this2._rangePromises.has(i)) a.push(_this2._rangePromises.get(i));else {
                  var s = n.getRange(e, t).then(function () {
                    _this2._rangePromises["delete"](i);
                  }, function () {
                    _this2._rangePromises["delete"](i);
                  });
                  _this2._rangePromises.set(i, s), a.push(s);
                }
              }
            }), Object(_core_promiseUtils_js__WEBPACK_IMPORTED_MODULE_1__["all"])(a).then(function () {
              var t,
                  o = _this2._glyphIndex[e];
              o || (o = {}, _this2._glyphIndex[e] = o), t = h;

              var _iterator22 = _createForOfIteratorHelper(t),
                  _step22;

              try {
                for (_iterator22.s(); !(_step22 = _iterator22.n()).done;) {
                  var _h = _step22.value;
                  var _t3 = o[_h];

                  if (_t3) {
                    r[_h] = {
                      sdf: !0,
                      rect: _t3.rect,
                      metrics: _t3.metrics,
                      page: _t3.page,
                      code: _h
                    };
                    continue;
                  }

                  var _a = n.getGlyph(e, _h);

                  if (!_a || !_a.metrics) continue;
                  var c = _a.metrics;
                  var l = void 0;
                  if (0 === c.width) l = new _webgl_Rect_js__WEBPACK_IMPORTED_MODULE_6__["default"](0, 0, 0, 0);else {
                    var _t4 = 3,
                        _e10 = c.width + 2 * _t4,
                        i = c.height + 2 * _t4;

                    var _h2 = _e10 % 4 ? 4 - _e10 % 4 : 4,
                        _r4 = i % 4 ? 4 - i % 4 : 4;

                    1 === _h2 && (_h2 = 5), 1 === _r4 && (_r4 = 5), l = _this2._binPack.allocate(_e10 + _h2, i + _r4), l.isEmpty && (_this2._dirties[_this2._currentPage] || (_this2._glyphData[_this2._currentPage] = null), _this2._currentPage = _this2._glyphData.length, _this2._glyphData.push(new Uint8Array(_this2.width * _this2.height)), _this2._dirties.push(!0), _this2._textures.push(void 0), _this2._binPack = new _RectangleBinPack_js__WEBPACK_IMPORTED_MODULE_7__["default"](_this2.width - 4, _this2.height - 4), l = _this2._binPack.allocate(_e10 + _h2, i + _r4));
                    var _n4 = _this2._glyphData[_this2._currentPage],
                        _o4 = _a.bitmap;
                    var g = void 0,
                        p = void 0;
                    if (_o4) for (var _t5 = 0; _t5 < i; _t5++) {
                      g = _e10 * _t5, p = _this2.width * (l.y + _t5 + 1) + l.x;

                      for (var _t6 = 0; _t6 < _e10; _t6++) {
                        _n4[p + _t6 + 1] = _o4[g + _t6];
                      }
                    }
                  }
                  o[_h] = {
                    rect: l,
                    metrics: c,
                    tileIDs: null,
                    page: _this2._currentPage
                  }, r[_h] = {
                    sdf: !0,
                    rect: l,
                    metrics: c,
                    page: _this2._currentPage,
                    code: _h
                  }, _this2._dirties[_this2._currentPage] = !0;
                }
              } catch (err) {
                _iterator22.e(err);
              } finally {
                _iterator22.f();
              }

              return r;
            });
          }
        }, {
          key: "removeGlyphs",
          value: function removeGlyphs(t) {
            for (var _e12 in this._glyphIndex) {
              var i = this._glyphIndex[_e12];
              if (!i) continue;
              var s = void 0;

              for (var _e13 in i) {
                if (s = i[_e13], s.tileIDs["delete"](t), 0 === s.tileIDs.size) {
                  var _t7 = this._glyphData[s.page],
                      h = s.rect;
                  var r = void 0,
                      n = void 0;

                  for (var _e14 = 0; _e14 < h.height; _e14++) {
                    for (r = this.width * (h.y + _e14) + h.x, n = 0; n < h.width; n++) {
                      _t7[r + n] = 0;
                    }
                  }

                  delete i[_e13], this._dirties[s.page] = !0;
                }
              }
            }
          }
        }, {
          key: "bind",
          value: function bind(t, i, s) {
            var h = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : 0;
            this._textures[s] || (this._textures[s] = new _webgl_Texture_js__WEBPACK_IMPORTED_MODULE_3__["default"](t, {
              pixelFormat: 6406,
              dataType: 5121,
              width: this.width,
              height: this.height
            }, new Uint8Array(this.width * this.height)));
            var r = this._textures[s];
            r.setSamplingMode(i), this._dirties[s] && r.setData(this._glyphData[s]), t.bindTexture(r, h), this._dirties[s] = !1;
          }
        }, {
          key: "dispose",
          value: function dispose() {
            this._binPack = null;

            var _iterator23 = _createForOfIteratorHelper(this._textures),
                _step23;

            try {
              for (_iterator23.s(); !(_step23 = _iterator23.n()).done;) {
                var t = _step23.value;
                t && t.dispose();
              }
            } catch (err) {
              _iterator23.e(err);
            } finally {
              _iterator23.f();
            }

            this._textures.length = 0;
          }
        }]);

        return _class2;
      }();
      /***/

    },

    /***/
    "DxxZ":
    /*!*********************************************************************!*\
      !*** ./node_modules/@arcgis/core/core/accessorSupport/diffUtils.js ***!
      \*********************************************************************/

    /*! exports provided: diff, hasDiff, hasDiffAny, isEmpty */

    /***/
    function DxxZ(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "diff", function () {
        return y;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "hasDiff", function () {
        return p;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "hasDiffAny", function () {
        return a;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "isEmpty", function () {
        return m;
      });
      /* harmony import */


      var _maybe_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ../maybe.js */
      "srIe");
      /* harmony import */


      var _utils_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./utils.js */
      "TDcG");
      /* harmony import */


      var _Accessor_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ../Accessor.js */
      "/CmD");
      /* harmony import */


      var _Collection_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ../Collection.js */
      "LE9a");
      /*
      All material copyright ESRI, All Rights Reserved, unless otherwise specified.
      See https://js.arcgis.com/4.18/esri/copyright.txt for details.
      */


      var f = ["esri.Color", "esri.portal.Portal", "esri.symbols.support.Symbol3DAnchorPosition2D", "esri.symbols.support.Symbol3DAnchorPosition3D"];

      function i(t) {
        return t instanceof _Accessor_js__WEBPACK_IMPORTED_MODULE_2__["default"];
      }

      function c(t) {
        return t instanceof _Collection_js__WEBPACK_IMPORTED_MODULE_3__["default"] ? Object.keys(t.items) : i(t) ? Object(_utils_js__WEBPACK_IMPORTED_MODULE_1__["getProperties"])(t).keys() : t ? Object.keys(t) : [];
      }

      function u(t, e) {
        return t instanceof _Collection_js__WEBPACK_IMPORTED_MODULE_3__["default"] ? t.items[e] : t[e];
      }

      function l(t) {
        return t ? t.declaredClass : null;
      }

      function s(t, n) {
        var o = t.diff;
        if (o && "function" == typeof o) return o(t, n);
        var r = c(t),
            p = c(n);
        if (0 === r.length && 0 === p.length) return;
        if (!r.length || !p.length || function (t, e) {
          return !(!Array.isArray(t) || !Array.isArray(e)) && t.length !== e.length;
        }(t, n)) return {
          type: "complete",
          oldValue: t,
          newValue: n
        };
        var a = p.filter(function (t) {
          return -1 === r.indexOf(t);
        }),
            y = r.filter(function (t) {
          return -1 === p.indexOf(t);
        }),
            m = r.filter(function (e) {
          return p.indexOf(e) > -1 && u(t, e) !== u(n, e);
        }).concat(a, y).sort(),
            d = l(t);
        if (d && f.indexOf(d) > -1 && m.length) return {
          type: "complete",
          oldValue: t,
          newValue: n
        };
        var b;
        var h = i(t) && i(n);

        var _iterator24 = _createForOfIteratorHelper(m),
            _step24;

        try {
          for (_iterator24.s(); !(_step24 = _iterator24.n()).done;) {
            var _r5 = _step24.value;

            var _f = u(t, _r5),
                _i5 = u(n, _r5);

            var _c = void 0;

            (h || "function" != typeof _f && "function" != typeof _i5) && _f !== _i5 && (null == _f && null == _i5 || (_c = o && o[_r5] && "function" == typeof o[_r5] ? o[_r5](_f, _i5) : "object" == typeof _f && "object" == typeof _i5 && l(_f) === l(_i5) ? s(_f, _i5) : {
              type: "complete",
              oldValue: _f,
              newValue: _i5
            }, Object(_maybe_js__WEBPACK_IMPORTED_MODULE_0__["isSome"])(_c) && (Object(_maybe_js__WEBPACK_IMPORTED_MODULE_0__["isSome"])(b) ? b.diff[_r5] = _c : b = {
              type: "partial",
              diff: _defineProperty({}, _r5, _c)
            })));
          }
        } catch (err) {
          _iterator24.e(err);
        } finally {
          _iterator24.f();
        }

        return b;
      }

      function p(e, n) {
        if (Object(_maybe_js__WEBPACK_IMPORTED_MODULE_0__["isNone"])(e)) return !1;
        var o = n.split(".");
        var r = e;

        var _iterator25 = _createForOfIteratorHelper(o),
            _step25;

        try {
          for (_iterator25.s(); !(_step25 = _iterator25.n()).done;) {
            var t = _step25.value;
            if ("complete" === r.type) return !0;
            if ("partial" !== r.type) return !1;
            {
              var _e15 = r.diff[t];
              if (!_e15) return !1;
              r = _e15;
            }
          }
        } catch (err) {
          _iterator25.e(err);
        } finally {
          _iterator25.f();
        }

        return !0;
      }

      function a(t, e) {
        var _iterator26 = _createForOfIteratorHelper(e),
            _step26;

        try {
          for (_iterator26.s(); !(_step26 = _iterator26.n()).done;) {
            var n = _step26.value;
            if (p(t, n)) return !0;
          }
        } catch (err) {
          _iterator26.e(err);
        } finally {
          _iterator26.f();
        }

        return !1;
      }

      function y(t, e) {
        if ("function" != typeof t && "function" != typeof e && (t || e)) return !t || !e || "object" == typeof t && "object" == typeof e && l(t) !== l(e) ? {
          type: "complete",
          oldValue: t,
          newValue: e
        } : s(t, e);
      }

      function m(e) {
        if (Object(_maybe_js__WEBPACK_IMPORTED_MODULE_0__["isNone"])(e)) return !0;

        switch (e.type) {
          case "complete":
            return !1;

          case "collection":
            {
              var t = e;

              var _iterator27 = _createForOfIteratorHelper(t.added),
                  _step27;

              try {
                for (_iterator27.s(); !(_step27 = _iterator27.n()).done;) {
                  var _e16 = _step27.value;
                  if (!m(_e16)) return !1;
                }
              } catch (err) {
                _iterator27.e(err);
              } finally {
                _iterator27.f();
              }

              var _iterator28 = _createForOfIteratorHelper(t.removed),
                  _step28;

              try {
                for (_iterator28.s(); !(_step28 = _iterator28.n()).done;) {
                  var _e17 = _step28.value;
                  if (!m(_e17)) return !1;
                }
              } catch (err) {
                _iterator28.e(err);
              } finally {
                _iterator28.f();
              }

              var _iterator29 = _createForOfIteratorHelper(t.changed),
                  _step29;

              try {
                for (_iterator29.s(); !(_step29 = _iterator29.n()).done;) {
                  var _e18 = _step29.value;
                  if (!m(_e18)) return !1;
                }
              } catch (err) {
                _iterator29.e(err);
              } finally {
                _iterator29.f();
              }

              return !0;
            }

          case "partial":
            for (var _t8 in e.diff) {
              if (!m(e.diff[_t8])) return !1;
            }

            return !0;
        }
      }
      /***/

    },

    /***/
    "E6Oc":
    /*!*******************************************************************************!*\
      !*** ./node_modules/@arcgis/core/views/2d/engine/vectorTiles/SpriteMosaic.js ***!
      \*******************************************************************************/

    /*! exports provided: default */

    /***/
    function E6Oc(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony import */


      var _core_has_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ../../../../core/has.js */
      "wSAH");
      /* harmony import */


      var _chunks_builtins_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ../../../../chunks/builtins.js */
      "n4uK");
      /* harmony import */


      var _webgl_Texture_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ../../../webgl/Texture.js */
      "of9L");
      /* harmony import */


      var _webgl_FramebufferObject_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ../../../webgl/FramebufferObject.js */
      "0meK");
      /* harmony import */


      var _webgl_RenderingContext_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ../../../webgl/RenderingContext.js */
      "bfJE");
      /* harmony import */


      var _webgl_Rect_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ../webgl/Rect.js */
      "qcDN");
      /* harmony import */


      var _RectangleBinPack_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ./RectangleBinPack.js */
      "PDbr");
      /*
      All material copyright ESRI, All Rights Reserved, unless otherwise specified.
      See https://js.arcgis.com/4.18/esri/copyright.txt for details.
      */


      var s = /*#__PURE__*/function () {
        function s(t, i) {
          var _s12 = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 0;

          _classCallCheck(this, s);

          this._size = [], this._mosaicsData = [], this._textures = [], this._dirties = [], this._maxItemSize = 0, this._currentPage = 0, this._pageWidth = 0, this._pageHeight = 0, this._mosaicRects = {}, this.pixelRatio = 1, (t <= 0 || i <= 0) && console.error("Sprites mosaic defaultWidth and defaultHeight must be greater than zero!"), this._pageWidth = t, this._pageHeight = i, _s12 > 0 && (this._maxItemSize = _s12), this._binPack = new _RectangleBinPack_js__WEBPACK_IMPORTED_MODULE_6__["default"](t - 4, i - 4);
        }

        _createClass(s, [{
          key: "getWidth",
          value: function getWidth(t) {
            return t >= this._size.length ? -1 : this._size[t][0];
          }
        }, {
          key: "getHeight",
          value: function getHeight(t) {
            return t >= this._size.length ? -1 : this._size[t][1];
          }
        }, {
          key: "setSpriteSource",
          value: function setSpriteSource(t) {
            if (this.dispose(), this.pixelRatio = t.devicePixelRatio, 0 === this._mosaicsData.length) {
              this._binPack = new _RectangleBinPack_js__WEBPACK_IMPORTED_MODULE_6__["default"](this._pageWidth - 4, this._pageHeight - 4);

              var _t9 = Math.floor(this._pageWidth),
                  i = Math.floor(this._pageHeight),
                  _s19 = new Uint32Array(_t9 * i);

              this._mosaicsData[0] = _s19, this._dirties.push(!0), this._size.push([this._pageWidth, this._pageHeight]), this._textures.push(void 0);
            }

            this._sprites = t;
          }
        }, {
          key: "getSpriteItem",
          value: function getSpriteItem(t) {
            var i = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : !1;
            var e = this._mosaicRects[t];
            if (e) return e;
            if (!this._sprites || "loaded" !== this._sprites.loadStatus) return null;

            var _s14 = this._sprites.getSpriteInfo(t);

            if (!_s14 || !_s14.width || !_s14.height || _s14.width < 0 || _s14.height < 0) return null;

            var h = _s14.width,
                a = _s14.height,
                _this$_allocateImage = this._allocateImage(h, a),
                _this$_allocateImage2 = _slicedToArray(_this$_allocateImage, 3),
                r = _this$_allocateImage2[0],
                o = _this$_allocateImage2[1],
                _ = _this$_allocateImage2[2];

            return r.width <= 0 ? null : (this._copy(r, _s14, o, _, i), e = {
              rect: r,
              width: h,
              height: a,
              sdf: _s14.sdf,
              simplePattern: !1,
              pixelRatio: _s14.pixelRatio,
              page: o
            }, this._mosaicRects[t] = e, e);
          }
        }, {
          key: "preloadSpriteItems",
          value: function preloadSpriteItems() {
            var _iterator30 = _createForOfIteratorHelper(this._sprites.spriteNames),
                _step30;

            try {
              for (_iterator30.s(); !(_step30 = _iterator30.n()).done;) {
                var t = _step30.value;
                this.getSpriteItem(t, !0);
              }
            } catch (err) {
              _iterator30.e(err);
            } finally {
              _iterator30.f();
            }
          }
        }, {
          key: "getSpriteItems",
          value: function getSpriteItems(t) {
            var i = {};

            var _iterator31 = _createForOfIteratorHelper(t),
                _step31;

            try {
              for (_iterator31.s(); !(_step31 = _iterator31.n()).done;) {
                var _e19 = _step31.value;
                i[_e19] = this.getSpriteItem(_e19);
              }
            } catch (err) {
              _iterator31.e(err);
            } finally {
              _iterator31.f();
            }

            return i;
          }
        }, {
          key: "getMosaicItemPosition",
          value: function getMosaicItemPosition(t, i) {
            var e = this.getSpriteItem(t, i),
                _s15 = e && e.rect;

            if (!_s15) return null;
            _s15.width = e.width, _s15.height = e.height;
            var h = e.width,
                a = e.height,
                r = this._size[e.page];
            return {
              size: [e.width, e.height],
              tl: [(_s15.x + 2) / r[0], (_s15.y + 2) / r[1]],
              br: [(_s15.x + 2 + h) / r[0], (_s15.y + 2 + a) / r[1]],
              page: e.page
            };
          }
        }, {
          key: "bind",
          value: function bind(i, e) {
            var _s16 = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 0;

            var h = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : 0;
            this._textures[_s16] || (this._textures[_s16] = new _webgl_Texture_js__WEBPACK_IMPORTED_MODULE_2__["default"](i, {
              pixelFormat: 6408,
              dataType: 5121,
              wrapMode: 33071,
              width: this._size[_s16][0],
              height: this._size[_s16][1]
            }, new Uint8Array(this._mosaicsData[_s16].buffer)));
            var a = this._textures[_s16];
            a.setSamplingMode(e), this._dirties[_s16] && a.setData(new Uint8Array(this._mosaicsData[_s16].buffer)), i.bindTexture(a, h), this._dirties[_s16] = !1;
          }
        }, {
          key: "_copy",
          value: function _copy(t, i, e, h, a, r) {
            if (!this._sprites || "loaded" !== this._sprites.loadStatus || e >= this._mosaicsData.length) return;
            var o = new Uint32Array(r ? r.buffer : this._sprites.image.buffer),
                _ = this._mosaicsData[e];
            _ && o || console.error("Source or target images are uninitialized!");
            var n = r ? i.width : this._sprites.width;
            s._copyBits(o, n, i.x, i.y, _, h[0], t.x + 2, t.y + 2, i.width, i.height, a), this._dirties[e] = !0;
          }
        }, {
          key: "_allocateImage",
          value: function _allocateImage(t, _s18) {
            t += 2, _s18 += 2;
            var h = Math.max(t, _s18);

            if (this._maxItemSize && this._maxItemSize < h) {
              var _e20 = new _webgl_Rect_js__WEBPACK_IMPORTED_MODULE_5__["default"](0, 0, t, _s18);

              return this._mosaicsData.push(new Uint32Array(t * _s18)), this._dirties.push(!0), this._size.push([t, _s18]), this._textures.push(void 0), [_e20, this._mosaicsData.length - 1, [t, _s18]];
            }

            var a = t % 4 ? 4 - t % 4 : 4,
                r = _s18 % 4 ? 4 - _s18 % 4 : 4;
            1 === a && (a = 5), 1 === r && (r = 5);

            var o = this._binPack.allocate(t + a, _s18 + r);

            return o.width <= 0 ? (this._dirties[this._currentPage] || (this._mosaicsData[this._currentPage] = null), this._currentPage = this._mosaicsData.length, this._mosaicsData.push(new Uint32Array(this._pageWidth * this._pageHeight)), this._dirties.push(!0), this._size.push([this._pageWidth, this._pageHeight]), this._textures.push(void 0), this._binPack = new _RectangleBinPack_js__WEBPACK_IMPORTED_MODULE_6__["default"](this._pageWidth - 4, this._pageHeight - 4), this._allocateImage(t, _s18)) : [o, this._currentPage, [this._pageWidth, this._pageHeight]];
          }
        }, {
          key: "dispose",
          value: function dispose() {
            this._binPack = null, this._mosaicRects = {};

            var _iterator32 = _createForOfIteratorHelper(this._textures),
                _step32;

            try {
              for (_iterator32.s(); !(_step32 = _iterator32.n()).done;) {
                var t = _step32.value;
                t && t.dispose();
              }
            } catch (err) {
              _iterator32.e(err);
            } finally {
              _iterator32.f();
            }

            this._textures.length = 0;
          }
        }], [{
          key: "_copyBits",
          value: function _copyBits(t, i, e, _s17, h, a, r, o, _, n, g) {
            var p = _s17 * i + e,
                c = o * a + r;

            if (g) {
              c -= a;

              for (var _r6 = -1; _r6 <= n; _r6++, p = ((_r6 + n) % n + _s17) * i + e, c += a) {
                for (var _i6 = -1; _i6 <= _; _i6++) {
                  h[c + _i6] = t[p + (_i6 + _) % _];
                }
              }
            } else for (var _e21 = 0; _e21 < n; _e21++) {
              for (var _i7 = 0; _i7 < _; _i7++) {
                h[c + _i7] = t[p + _i7];
              }

              p += i, c += a;
            }
          }
        }]);

        return s;
      }();
      /* harmony default export */


      __webpack_exports__["default"] = s;
      /***/
    },

    /***/
    "HSpW":
    /*!*************************************************************!*\
      !*** ./node_modules/@arcgis/core/layers/support/Tilemap.js ***!
      \*************************************************************/

    /*! exports provided: default, Tilemap, tilemapDefinitionId, tilemapDefinitionUrl */

    /***/
    function HSpW(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "Tilemap", function () {
        return l;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "tilemapDefinitionId", function () {
        return o;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "tilemapDefinitionUrl", function () {
        return n;
      });
      /* harmony import */


      var _core_lang_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ../../core/lang.js */
      "f/qv");
      /* harmony import */


      var _core_Error_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ../../core/Error.js */
      "zlDU");
      /* harmony import */


      var _core_arrayUtils_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ../../core/arrayUtils.js */
      "tQ+6");
      /* harmony import */


      var _request_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ../../request.js */
      "Lqtk");
      /*
      All material copyright ESRI, All Rights Reserved, unless otherwise specified.
      See https://js.arcgis.com/4.18/esri/copyright.txt for details.
      */


      var l = /*#__PURE__*/function () {
        function l() {
          _classCallCheck(this, l);

          this.location = {
            left: 0,
            top: 0,
            width: 0,
            height: 0
          }, this._allAvailability = "unknown", this.byteSize = 40;
        }

        _createClass(l, [{
          key: "getAvailability",
          value: function getAvailability(t, i) {
            if ("unknown" !== this._allAvailability) return this._allAvailability;

            var e = (t - this.location.top) * this.location.width + (i - this.location.left),
                a = e % 8,
                _l15 = e >> 3,
                o = this._tileAvailabilityBitSet;

            return _l15 < 0 || _l15 > o.length ? "unknown" : o[_l15] & 1 << a ? "available" : "unavailable";
          }
        }, {
          key: "_updateFromData",
          value: function _updateFromData(t) {
            var i = this.location.width,
                e = this.location.height;

            var a = !0,
                _l16 = !0;

            var o = Math.ceil(i * e / 8),
                n = new Uint8Array(o);
            var r = 0;

            for (var _i8 = 0; _i8 < t.length; _i8++) {
              var _e22 = _i8 % 8;

              t[_i8] ? (_l16 = !1, n[r] |= 1 << _e22) : a = !1, 7 === _e22 && ++r;
            }

            _l16 ? this._allAvailability = "unavailable" : a ? this._allAvailability = "available" : (this._allAvailability = "unknown", this._tileAvailabilityBitSet = n, this.byteSize += n.length);
          }
        }], [{
          key: "fromDefinition",
          value: function fromDefinition(t, o) {
            var r = t.service.request || _request_js__WEBPACK_IMPORTED_MODULE_3__["default"],
                s = t.row,
                h = t.col,
                c = t.width,
                m = t.height,
                d = {
              query: {
                f: "json"
              }
            };
            return o = o ? _objectSpread(_objectSpread({}, d), o) : d, r(n(t), o).then(function (t) {
              return t.data;
            })["catch"](function (t) {
              if (t && t.details && 422 === t.details.httpStatus) return {
                location: {
                  top: s,
                  left: h,
                  width: c,
                  height: m
                },
                valid: !0,
                data: Object(_core_arrayUtils_js__WEBPACK_IMPORTED_MODULE_2__["constant"])(c * m, 0)
              };
              throw t;
            }).then(function (t) {
              if (t.location && (t.location.top !== s || t.location.left !== h || t.location.width !== c || t.location.height !== m)) throw new _core_Error_js__WEBPACK_IMPORTED_MODULE_1__["default"]("tilemap:location-mismatch", "Tilemap response for different location than requested", {
                response: t,
                definition: {
                  top: s,
                  left: h,
                  width: c,
                  height: m
                }
              });
              return l.fromJSON(t);
            });
          }
        }, {
          key: "fromJSON",
          value: function fromJSON(i) {
            l.validateJSON(i);
            var e = new l();
            return e.location = Object.freeze(Object(_core_lang_js__WEBPACK_IMPORTED_MODULE_0__["clone"])(i.location)), e._updateFromData(i.data), Object.freeze(e);
          }
        }, {
          key: "validateJSON",
          value: function validateJSON(t) {
            if (!t || !t.location) throw new _core_Error_js__WEBPACK_IMPORTED_MODULE_1__["default"]("tilemap:missing-location", "Location missing from tilemap response");
            if (!1 === t.valid) throw new _core_Error_js__WEBPACK_IMPORTED_MODULE_1__["default"]("tilemap:invalid", "Tilemap response was marked as invalid");
            if (!t.data) throw new _core_Error_js__WEBPACK_IMPORTED_MODULE_1__["default"]("tilemap:missing-data", "Data missing from tilemap response");
            if (!Array.isArray(t.data)) throw new _core_Error_js__WEBPACK_IMPORTED_MODULE_1__["default"]("tilemap:data-mismatch", "Data must be an array of numbers");
            if (t.data.length !== t.location.width * t.location.height) throw new _core_Error_js__WEBPACK_IMPORTED_MODULE_1__["default"]("tilemap:data-mismatch", "Number of data items does not match width/height of tilemap");
          }
        }]);

        return l;
      }();

      function o(t) {
        return "".concat(t.level, "/").concat(t.row, "/").concat(t.col, "/").concat(t.width, "/").concat(t.height);
      }

      function n(t) {
        var i;
        if ("vector-tile" === t.service.type) i = "".concat(t.service.url, "/tilemap/").concat(t.level, "/").concat(t.row, "/").concat(t.col, "/").concat(t.width, "/").concat(t.height);else {
          var _e23 = t.service.tileServers;
          i = "".concat(_e23 && _e23.length ? _e23[t.row % _e23.length] : t.service.url, "/tilemap/").concat(t.level, "/").concat(t.row, "/").concat(t.col, "/").concat(t.width, "/").concat(t.height);
        }
        var e = t.service.query;
        return e && (i = "".concat(i, "?").concat(e)), i;
      }
      /* harmony default export */


      __webpack_exports__["default"] = l;
      /***/
    },

    /***/
    "Ki9T":
    /*!*******************************************************************************************!*\
      !*** ./node_modules/@arcgis/core/views/2d/engine/vectorTiles/decluttering/SymbolFader.js ***!
      \*******************************************************************************************/

    /*! exports provided: SymbolFader */

    /***/
    function Ki9T(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "SymbolFader", function () {
        return c;
      });
      /* harmony import */


      var _core_maybe_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ../../../../../core/maybe.js */
      "srIe");
      /* harmony import */


      var _core_Evented_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ../../../../../core/Evented.js */
      "zm0L");
      /* harmony import */


      var _config_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./config.js */
      "2yHJ");
      /* harmony import */


      var _core_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./core.js */
      "y6Hv");
      /* harmony import */


      var _util_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ./util.js */
      "vAXJ");
      /* harmony import */


      var _jobs_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ./jobs.js */
      "UbKN");
      /* harmony import */


      var _SymbolDeclutterer_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ./SymbolDeclutterer.js */
      "rEH/");
      /* harmony import */


      var _SymbolRepository_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! ./SymbolRepository.js */
      "1eRR");
      /*
      All material copyright ESRI, All Rights Reserved, unless otherwise specified.
      See https://js.arcgis.com/4.18/esri/copyright.txt for details.
      */


      var c = /*#__PURE__*/function (_core_Evented_js__WEB) {
        _inherits(c, _core_Evented_js__WEB);

        var _super2 = _createSuper(c);

        function c(t, e) {
          var _this3;

          _classCallCheck(this, c);

          _this3 = _super2.call(this), _this3.styleRepository = t, _this3._tileToHandle = new Map(), _this3._viewState = {
            scale: 0,
            rotation: 0,
            center: [0, 0],
            size: [0, 0]
          }, _this3._declutterViewState = {
            scale: 0,
            rotation: 0,
            center: [0, 0],
            size: [0, 0]
          }, _this3._completed = !1, _this3._symbolRepository = new _SymbolRepository_js__WEBPACK_IMPORTED_MODULE_7__["SymbolRepository"](4096, e, function () {
            return new _core_js__WEBPACK_IMPORTED_MODULE_3__["VTLUniqueSymbol"]();
          }), _this3._symbolDeclutterer = new _SymbolDeclutterer_js__WEBPACK_IMPORTED_MODULE_6__["SymbolDeclutterer"](e, _this3._symbolRepository, function (t, e, i) {
            return new _jobs_js__WEBPACK_IMPORTED_MODULE_5__["CollisionJob"](t, e, i, _this3.styleRepository, _this3._zoom, _this3._viewState.rotation);
          }, function (t, e) {
            t.allSymbolsFadingOut = !0, t.lastOpacityUpdate = e, Object(_util_js__WEBPACK_IMPORTED_MODULE_4__["writeOpacityToBuffers"])(t, e, !0), t.decluttered = !0, t.requestRender();
          }, function (t, e) {
            return _this3.styleRepository.getStyleLayerByUID(t.styleLayerUID).z - _this3.styleRepository.getStyleLayerByUID(e.styleLayerUID).z;
          }, function (t) {
            var e = _this3.styleRepository.getStyleLayerByUID(t).getLayoutProperty("visibility");

            return !e || "none" !== e.getValue();
          });
          return _this3;
        }

        _createClass(c, [{
          key: "addTile",
          value: function addTile(t) {
            var _this4 = this;

            t.decluttered = !1, this._tileToHandle.set(t, t.on("symbols-changed", function () {
              _this4._symbolRepository.add(t), _this4.restartDeclutter();
            })), this._symbolRepository.add(t), this.restartDeclutter();
          }
        }, {
          key: "removeTile",
          value: function removeTile(t) {
            var e = this._tileToHandle.get(t);

            e && (this._symbolRepository.removeTile(t), this.restartDeclutter(), e.remove(), this._tileToHandle["delete"](t));
          }
        }, {
          key: "update",
          value: function update(t, e) {
            return this._zoom = t, this._viewState = {
              scale: e.scale,
              rotation: e.rotation,
              center: [e.center[0], e.center[1]],
              size: [e.size[0], e.size[1]]
            }, this._continueDeclutter(), this._completed;
          }
        }, {
          key: "restartDeclutter",
          value: function restartDeclutter() {
            this._completed = !1, this._symbolDeclutterer.restart(), this._notifyUnstable();
          }
        }, {
          key: "clear",
          value: function clear() {
            this._completed = !1, this._symbolRepository = null, this._symbolDeclutterer.restart(), this._tileToHandle.forEach(function (t) {
              return t.remove();
            }), this._tileToHandle.clear();
          }
        }, {
          key: "stale",
          get: function get() {
            return this._zoom !== this._declutterZoom || this._viewState.size[0] !== this._declutterViewState.size[0] || this._viewState.size[1] !== this._declutterViewState.size[1] || this._viewState.scale !== this._declutterViewState.scale || this._viewState.rotation !== this._declutterViewState.rotation;
          }
        }, {
          key: "deleteStyleLayers",
          value: function deleteStyleLayers(t) {
            this._symbolRepository.deleteStyleLayers(t);
          }
        }, {
          key: "_continueDeclutter",
          value: function _continueDeclutter() {
            this._completed && !this.stale || (this._symbolDeclutterer.running || (this._declutterZoom = this._zoom, this._declutterViewState.center[0] = this._viewState.center[0], this._declutterViewState.center[1] = this._viewState.center[1], this._declutterViewState.rotation = this._viewState.rotation, this._declutterViewState.scale = this._viewState.scale, this._declutterViewState.size[0] = this._viewState.size[0], this._declutterViewState.size[1] = this._viewState.size[1], this._symbolDeclutterer.restart()), this._symbolDeclutterer.setScreenSize(this._viewState.size[0], this._viewState.size[1]), this._completed = this._symbolDeclutterer["continue"](_config_js__WEBPACK_IMPORTED_MODULE_2__["DECLUTTER_BUDGET"]), this._completed && this._scheduleNotifyStable());
          }
        }, {
          key: "_scheduleNotifyStable",
          value: function _scheduleNotifyStable() {
            var _this5 = this;

            Object(_core_maybe_js__WEBPACK_IMPORTED_MODULE_0__["isSome"])(this._stableNotificationHandle) && clearTimeout(this._stableNotificationHandle), this._stableNotificationHandle = setTimeout(function () {
              _this5._stableNotificationHandle = null, _this5.emit("fade-complete");
            }, 1.5 * _config_js__WEBPACK_IMPORTED_MODULE_2__["FADE_DURATION"]);
          }
        }, {
          key: "_notifyUnstable",
          value: function _notifyUnstable() {
            Object(_core_maybe_js__WEBPACK_IMPORTED_MODULE_0__["isSome"])(this._stableNotificationHandle) && (clearTimeout(this._stableNotificationHandle), this._stableNotificationHandle = null), this.emit("fade-start");
          }
        }]);

        return c;
      }(_core_Evented_js__WEBPACK_IMPORTED_MODULE_1__["default"]);
      /***/

    },

    /***/
    "Lp6Q":
    /*!**********************************************************************!*\
      !*** ./node_modules/@arcgis/core/views/2d/tiling/TileInfoViewPOT.js ***!
      \**********************************************************************/

    /*! exports provided: default */

    /***/
    function Lp6Q(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony import */


      var _layers_support_TileInfo_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ../../../layers/support/TileInfo.js */
      "3/ME");
      /* harmony import */


      var _TileKey_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./TileKey.js */
      "rlSK");
      /* harmony import */


      var _TileInfoView_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./TileInfoView.js */
      "AY31");
      /*
      All material copyright ESRI, All Rights Reserved, unless otherwise specified.
      See https://js.arcgis.com/4.18/esri/copyright.txt for details.
      */

      /* harmony default export */


      __webpack_exports__["default"] = /*#__PURE__*/function (_TileInfoView_js__WEB) {
        _inherits(_class3, _TileInfoView_js__WEB);

        var _super3 = _createSuper(_class3);

        function _class3() {
          var _this6;

          _classCallCheck(this, _class3);

          _this6 = _super3.apply(this, arguments), _this6._fullCacheLodInfos = null, _this6._levelByScale = {};
          return _this6;
        }

        _createClass(_class3, [{
          key: "getTileParentId",
          value: function getTileParentId(e) {
            var s = _TileKey_js__WEBPACK_IMPORTED_MODULE_1__["default"].pool.acquire(e),
                t = 0 === s.level ? null : _TileKey_js__WEBPACK_IMPORTED_MODULE_1__["default"].getId(s.level - 1, s.row >> 1, s.col >> 1, s.world);

            return _TileKey_js__WEBPACK_IMPORTED_MODULE_1__["default"].pool.release(s), t;
          }
        }, {
          key: "getTileCoverage",
          value: function getTileCoverage(e, l, s) {
            var t = _get(_getPrototypeOf(_class3.prototype), "getTileCoverage", this).call(this, e, l, s);

            if (!t) return t;
            var o = 1 << t.lodInfo.level;
            return t.spans = t.spans.filter(function (e) {
              return e.row >= 0 && e.row < o;
            }), t;
          }
        }, {
          key: "scaleToLevel",
          value: function scaleToLevel(e) {
            if (this._fullCacheLodInfos || this._initializeFullCacheLODs(this._lodInfos), this._levelByScale[e]) return this._levelByScale[e];
            {
              var l = this._fullCacheLodInfos;
              if (e > l[0].scale) return l[0].level;
              var s, t;

              for (var o = 0; o < l.length - 1; o++) {
                if (t = l[o + 1], e > t.scale) return s = l[o], s.level + (s.scale - e) / (s.scale - t.scale);
              }

              return l[l.length - 1].level;
            }
          }
        }, {
          key: "_initializeFullCacheLODs",
          value: function _initializeFullCacheLODs(l) {
            var s;
            if (0 === l[0].level) s = l.map(function (e) {
              return {
                level: e.level,
                resolution: e.resolution,
                scale: e.scale
              };
            });else {
              var _l17 = this.tileInfo.size[0],
                  t = this.tileInfo.spatialReference;
              s = _layers_support_TileInfo_js__WEBPACK_IMPORTED_MODULE_0__["default"].create({
                size: _l17,
                spatialReference: t
              }).lods.map(function (e) {
                return {
                  level: e.level,
                  resolution: e.resolution,
                  scale: e.scale
                };
              });
            }

            for (var _e24 = 0; _e24 < s.length; _e24++) {
              this._levelByScale[s[_e24].scale] = s[_e24].level;
            }

            this._fullCacheLodInfos = s;
          }
        }]);

        return _class3;
      }(_TileInfoView_js__WEBPACK_IMPORTED_MODULE_2__["default"]);
      /***/

    },

    /***/
    "PDbr":
    /*!***********************************************************************************!*\
      !*** ./node_modules/@arcgis/core/views/2d/engine/vectorTiles/RectangleBinPack.js ***!
      \***********************************************************************************/

    /*! exports provided: default */

    /***/
    function PDbr(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony import */


      var _webgl_Rect_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ../webgl/Rect.js */
      "qcDN");
      /*
      All material copyright ESRI, All Rights Reserved, unless otherwise specified.
      See https://js.arcgis.com/4.18/esri/copyright.txt for details.
      */

      /* harmony default export */


      __webpack_exports__["default"] = /*#__PURE__*/function () {
        function _class4(e, t) {
          _classCallCheck(this, _class4);

          this._width = 0, this._height = 0, this._free = [], this._width = e, this._height = t, this._free.push(new _webgl_Rect_js__WEBPACK_IMPORTED_MODULE_0__["default"](0, 0, e, t));
        }

        _createClass(_class4, [{
          key: "width",
          get: function get() {
            return this._width;
          }
        }, {
          key: "height",
          get: function get() {
            return this._height;
          }
        }, {
          key: "allocate",
          value: function allocate(e, t) {
            if (e > this._width || t > this._height) return new _webgl_Rect_js__WEBPACK_IMPORTED_MODULE_0__["default"]();
            var i = null,
                s = -1;

            for (var h = 0; h < this._free.length; ++h) {
              var w = this._free[h];
              e <= w.width && t <= w.height && (null === i || w.y <= i.y && w.x <= i.x) && (i = w, s = h);
            }

            return null === i ? new _webgl_Rect_js__WEBPACK_IMPORTED_MODULE_0__["default"]() : (this._free.splice(s, 1), i.width < i.height ? (i.width > e && this._free.push(new _webgl_Rect_js__WEBPACK_IMPORTED_MODULE_0__["default"](i.x + e, i.y, i.width - e, t)), i.height > t && this._free.push(new _webgl_Rect_js__WEBPACK_IMPORTED_MODULE_0__["default"](i.x, i.y + t, i.width, i.height - t))) : (i.width > e && this._free.push(new _webgl_Rect_js__WEBPACK_IMPORTED_MODULE_0__["default"](i.x + e, i.y, i.width - e, i.height)), i.height > t && this._free.push(new _webgl_Rect_js__WEBPACK_IMPORTED_MODULE_0__["default"](i.x, i.y + t, e, i.height - t))), new _webgl_Rect_js__WEBPACK_IMPORTED_MODULE_0__["default"](i.x, i.y, e, t));
          }
        }, {
          key: "release",
          value: function release(h) {
            for (var _e25 = 0; _e25 < this._free.length; ++_e25) {
              var t = this._free[_e25];
              if (t.y === h.y && t.height === h.height && t.x + t.width === h.x) t.width += h.width;else if (t.x === h.x && t.width === h.width && t.y + t.height === h.y) t.height += h.height;else if (h.y === t.y && h.height === t.height && h.x + h.width === t.x) t.x = h.x, t.width += h.width;else {
                if (h.x !== t.x || h.width !== t.width || h.y + h.height !== t.y) continue;
                t.y = h.y, t.height += h.height;
              }
              this._free.splice(_e25, 1), this.release(h);
            }

            this._free.push(h);
          }
        }]);

        return _class4;
      }();
      /***/

    },

    /***/
    "Pl/d":
    /*!**************************************************************************************!*\
      !*** ./node_modules/@arcgis/core/views/2d/engine/vectorTiles/VectorTileContainer.js ***!
      \**************************************************************************************/

    /*! exports provided: VectorTileContainer */

    /***/
    function PlD(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "VectorTileContainer", function () {
        return p;
      });
      /* harmony import */


      var _core_maybe_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ../../../../core/maybe.js */
      "srIe");
      /* harmony import */


      var _core_promiseUtils_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ../../../../core/promiseUtils.js */
      "9MzC");
      /* harmony import */


      var _geometry_support_aaBoundingRect_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ../../../../geometry/support/aaBoundingRect.js */
      "kYAx");
      /* harmony import */


      var _tiling_TileKey_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ../../tiling/TileKey.js */
      "rlSK");
      /* harmony import */


      var _tiling_TileCoverage_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ../../tiling/TileCoverage.js */
      "umoc");
      /* harmony import */


      var _webgl_TiledDisplayObject_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ../webgl/TiledDisplayObject.js */
      "5LEI");
      /* harmony import */


      var _webgl_enums_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ../webgl/enums.js */
      "yE7X");
      /* harmony import */


      var _webgl_TileContainer_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! ../webgl/TileContainer.js */
      "ZyIX");
      /* harmony import */


      var _decluttering_debugging_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! ./decluttering/debugging.js */
      "v3/X");
      /* harmony import */


      var _decluttering_SymbolFader_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! ./decluttering/SymbolFader.js */
      "Ki9T");
      /*
      All material copyright ESRI, All Rights Reserved, unless otherwise specified.
      See https://js.arcgis.com/4.18/esri/copyright.txt for details.
      */


      function u(e, t) {
        if (e) {
          var s = e.getLayoutProperty("visibility");
          if (!s || "none" !== s.getValue() && (void 0 === e.minzoom || e.minzoom < t + 1e-6) && (void 0 === e.maxzoom || e.maxzoom >= t - 1e-6)) return !0;
        }

        return !1;
      }

      var p = /*#__PURE__*/function (_webgl_TileContainer_) {
        _inherits(p, _webgl_TileContainer_);

        var _super4 = _createSuper(p);

        function p(e) {
          var _this7;

          _classCallCheck(this, p);

          _this7 = _super4.call(this, e), _this7._backgroundTiles = [], _this7._pointToCallbacks = new Map(), _this7._fading = !1;
          return _this7;
        }

        _createClass(p, [{
          key: "destroy",
          value: function destroy() {
            this.children.forEach(function (e) {
              return e.destroy();
            }), this.removeAllChildren(), this._spriteMosaic && (this._spriteMosaic.dispose(), this._spriteMosaic = null), this._glyphMosaic && (this._glyphMosaic.dispose(), this._glyphMosaic = null), Object(_core_maybe_js__WEBPACK_IMPORTED_MODULE_0__["isSome"])(this._symbolFader) && (this._symbolFader.clear(), this._symbolFader = null), this._styleRepository = null, this._backgroundTiles = [], this._pointToCallbacks.clear();
          }
        }, {
          key: "setStyleResources",
          value: function setStyleResources(e, r, i) {
            var _this8 = this;

            if (this._spriteMosaic = e, this._glyphMosaic = r, this._styleRepository = i, Object(_core_maybe_js__WEBPACK_IMPORTED_MODULE_0__["isNone"])(this._symbolFader)) {
              var _e26 = new _decluttering_SymbolFader_js__WEBPACK_IMPORTED_MODULE_9__["SymbolFader"](this._styleRepository, this.children);

              _e26.on("fade-start", function () {
                _this8.emit("fade-start"), _this8._fading = !0, _this8.requestRender();
              }), _e26.on("fade-complete", function () {
                _this8.emit("fade-complete"), _this8._fading = !1, _this8.requestRender();
              }), this._symbolFader = _e26;
            }

            Object(_core_maybe_js__WEBPACK_IMPORTED_MODULE_0__["unwrap"])(this._symbolFader).styleRepository = i;
          }
        }, {
          key: "deleteStyleLayers",
          value: function deleteStyleLayers(t) {
            Object(_core_maybe_js__WEBPACK_IMPORTED_MODULE_0__["isSome"])(this._symbolFader) && this._symbolFader.deleteStyleLayers(t);
          }
        }, {
          key: "hitTest",
          value: function () {
            var _hitTest = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(e, t) {
              var s, i;
              return regeneratorRuntime.wrap(function _callee$(_context) {
                while (1) {
                  switch (_context.prev = _context.next) {
                    case 0:
                      s = [e, t], i = Object(_core_promiseUtils_js__WEBPACK_IMPORTED_MODULE_1__["createResolver"])();
                      return _context.abrupt("return", (this._pointToCallbacks.set(s, i), this.requestRender(), i.promise));

                    case 2:
                    case "end":
                      return _context.stop();
                  }
                }
              }, _callee, this);
            }));

            function hitTest(_x, _x2) {
              return _hitTest.apply(this, arguments);
            }

            return hitTest;
          }()
        }, {
          key: "enterTileInvalidation",
          value: function enterTileInvalidation() {
            var _iterator33 = _createForOfIteratorHelper(this.children),
                _step33;

            try {
              for (_iterator33.s(); !(_step33 = _iterator33.n()).done;) {
                var _e27 = _step33.value;
                _e27.invalidating = !0;
              }
            } catch (err) {
              _iterator33.e(err);
            } finally {
              _iterator33.f();
            }
          }
        }, {
          key: "createRenderParams",
          value: function createRenderParams(e) {
            return _objectSpread(_objectSpread({}, _get(_getPrototypeOf(p.prototype), "createRenderParams", this).call(this, e)), {}, {
              renderPass: null,
              styleLayer: null,
              styleLayerUID: -1,
              glyphMosaic: this._glyphMosaic,
              spriteMosaic: this._spriteMosaic,
              hasClipping: !!this._clippingInfos
            });
          }
        }, {
          key: "doRender",
          value: function doRender(e) {
            !this.visible || e.drawPhase !== _webgl_enums_js__WEBPACK_IMPORTED_MODULE_6__["WGLDrawPhase"].MAP && e.drawPhase !== _webgl_enums_js__WEBPACK_IMPORTED_MODULE_6__["WGLDrawPhase"].DEBUG || void 0 === this._spriteMosaic || _get(_getPrototypeOf(p.prototype), "doRender", this).call(this, e);
          }
        }, {
          key: "addChild",
          value: function addChild(t) {
            return _get(_getPrototypeOf(p.prototype), "addChild", this).call(this, t), Object(_core_maybe_js__WEBPACK_IMPORTED_MODULE_0__["isSome"])(this._symbolFader) ? this._symbolFader.addTile(t) : t.decluttered = !0, this.requestRender(), t;
          }
        }, {
          key: "removeChild",
          value: function removeChild(t) {
            return Object(_core_maybe_js__WEBPACK_IMPORTED_MODULE_0__["isSome"])(this._symbolFader) && this._symbolFader.removeTile(t), this.requestRender(), _get(_getPrototypeOf(p.prototype), "removeChild", this).call(this, t);
          }
        }, {
          key: "renderChildren",
          value: function renderChildren(e) {
            if (e.drawPhase !== _webgl_enums_js__WEBPACK_IMPORTED_MODULE_6__["WGLDrawPhase"].DEBUG) {
              if (this._doRender(e), this._pointToCallbacks.size > 0) {
                var t = e.context,
                    s = t.getBoundFramebufferObject();
                e.drawPhase = _webgl_enums_js__WEBPACK_IMPORTED_MODULE_6__["WGLDrawPhase"].HITTEST;
                var r = e.painter.effects.hittest;
                r.bind(e), this._doRender(e), r.draw(e, this._pointToCallbacks), t.bindFramebuffer(s);
              }
            } else _get(_getPrototypeOf(p.prototype), "renderChildren", this).call(this, e);
          }
        }, {
          key: "removeAllChildren",
          value: function removeAllChildren() {
            for (var t = 0; t < this.children.length; t++) {
              var s = this.children[t];
              Object(_core_maybe_js__WEBPACK_IMPORTED_MODULE_0__["isSome"])(this._symbolFader) && this._symbolFader.removeTile(s), s.dispose();
            }

            _get(_getPrototypeOf(p.prototype), "removeAllChildren", this).call(this);
          }
        }, {
          key: "getStencilTarget",
          value: function getStencilTarget() {
            return this.children.filter(function (e) {
              return e.neededForCoverage && e.hasData();
            });
          }
        }, {
          key: "restartDeclutter",
          value: function restartDeclutter() {
            Object(_core_maybe_js__WEBPACK_IMPORTED_MODULE_0__["isSome"])(this._symbolFader) && this._symbolFader.restartDeclutter();
          }
        }, {
          key: "_doRender",
          value: function _doRender(t) {
            var _this9 = this;

            var s = t.context,
                r = this._styleRepository;
            if (!r) return;
            var i = r.layers;
            var o = !0;
            t.drawPhase === _webgl_enums_js__WEBPACK_IMPORTED_MODULE_6__["WGLDrawPhase"].HITTEST && (o = !1), r.backgroundBucketIds.length > 0 && (t.renderPass = "background", this._renderBackgroundLayers(t, r.backgroundBucketIds)), _get(_getPrototypeOf(p.prototype), "renderChildren", this).call(this, t);
            var l = this.children.filter(function (e) {
              return e.visible && e.hasData();
            });

            if (l && 0 !== l.length) {
              var _iterator34 = _createForOfIteratorHelper(l),
                  _step34;

              try {
                for (_iterator34.s(); !(_step34 = _iterator34.n()).done;) {
                  var _e33 = _step34.value;
                  _e33.triangleCount = 0;
                }
              } catch (err) {
                _iterator34.e(err);
              } finally {
                _iterator34.f();
              }

              s.setStencilWriteMask(0), s.setColorMask(!0, !0, !0, !0), s.setStencilOp(7680, 7680, 7681), s.setStencilTestEnabled(!0), s.setBlendingEnabled(!1), s.setDepthTestEnabled(!0), s.setDepthWriteEnabled(!0), s.setDepthFunction(515), s.setClearDepth(1), s.clear(s.gl.DEPTH_BUFFER_BIT), t.renderPass = "opaque";

              for (var _e28 = i.length - 1; _e28 >= 0; _e28--) {
                this._renderStyleLayer(i[_e28], t, l);
              }

              s.setDepthWriteEnabled(!1), s.setBlendingEnabled(o), s.setBlendFunctionSeparate(1, 771, 1, 771), t.renderPass = "translucent";

              for (var _e29 = 0; _e29 < i.length; _e29++) {
                this._renderStyleLayer(i[_e29], t, l);
              }

              s.setDepthTestEnabled(!1), t.renderPass = "symbol";

              for (var _e30 = 0; _e30 < i.length; _e30++) {
                this._renderStyleLayer(i[_e30], t, l);
              }

              if (s.bindVAO(), s.setStencilTestEnabled(!0), s.setBlendingEnabled(!0), t.drawPhase === _webgl_enums_js__WEBPACK_IMPORTED_MODULE_6__["WGLDrawPhase"].MAP) {
                this._fade(t.displayLevel, t.state);

                var _s20 = window.COLLISION_DEBUG_CTX;

                if (_s20 && Object(_core_maybe_js__WEBPACK_IMPORTED_MODULE_0__["isSome"])(this._symbolFader) && (_s20.clearRect(0, 0, _s20.canvas.width, _s20.canvas.height), !this._fading || window.COLLISION_XRAY)) {
                  var _iterator35 = _createForOfIteratorHelper(this.children),
                      _step35;

                  try {
                    for (_iterator35.s(); !(_step35 = _iterator35.n()).done;) {
                      var _e31 = _step35.value;

                      if (_e31.symbols) {
                        var n, d, y;

                        (function () {
                          var t = [];

                          if (_e31.symbols.forEach(function (e) {
                            t.push.apply(t, _toConsumableArray(e));
                          }), window.COLLISION_SHOW_GRID) {
                            var _e32 = null == (n = _this9._symbolFader) || null == (d = n._symbolDeclutterer) || null == (y = d._collisionJob) ? void 0 : y._gridIndex;

                            _e32 && Object(_decluttering_debugging_js__WEBPACK_IMPORTED_MODULE_8__["drawGridIndex"])(_s20, _e32);
                          }

                          Object(_decluttering_debugging_js__WEBPACK_IMPORTED_MODULE_8__["drawColliders"])(_s20, t);
                        })();
                      }
                    }
                  } catch (err) {
                    _iterator35.e(err);
                  } finally {
                    _iterator35.f();
                  }
                }
              }
            }
          }
        }, {
          key: "_fade",
          value: function _fade(t, s) {
            Object(_core_maybe_js__WEBPACK_IMPORTED_MODULE_0__["isSome"])(this._symbolFader) && (this._symbolFader.update(t, s) || this.requestRender());
          }
        }, {
          key: "_renderStyleLayer",
          value: function _renderStyleLayer(e, t, s) {
            var r = t.painter,
                i = t.renderPass;
            if (void 0 === e) return;
            var o = e.getLayoutProperty("visibility");
            if (o && "none" === o.getValue()) return;
            var l;

            switch (e.type) {
              case 0:
                return;

              case 1:
                if ("opaque" !== i && "translucent" !== t.renderPass) return;
                l = "vtlFill";
                break;

              case 2:
                if ("translucent" !== i) return;
                l = "vtlLine";
                break;

              case 4:
                if ("symbol" !== i) return;
                l = "vtlCircle";
                break;

              case 3:
                if ("symbol" !== i) return;
                l = "vtlSymbol";
            }

            if (s = 3 === e.type ? s.filter(function (e) {
              return e.decluttered;
            }) : s.filter(function (e) {
              return e.neededForCoverage;
            }), "vtlSymbol" !== l) {
              var _r7 = t.displayLevel;
              if (0 === s.length || void 0 !== e.minzoom && e.minzoom >= _r7 + 1e-6 || void 0 !== e.maxzoom && e.maxzoom < _r7 - 1e-6) return;
            }

            var n = e.uid;
            t.styleLayerUID = n, t.styleLayer = e;

            var _iterator36 = _createForOfIteratorHelper(s),
                _step36;

            try {
              for (_iterator36.s(); !(_step36 = _iterator36.n()).done;) {
                var _e34 = _step36.value;

                if (_e34.layerData.has(n)) {
                  r.renderObjects(t, s, l);
                  break;
                }
              }
            } catch (err) {
              _iterator36.e(err);
            } finally {
              _iterator36.f();
            }
          }
        }, {
          key: "_renderBackgroundLayers",
          value: function _renderBackgroundLayers(t, s) {
            var r = t.context,
                d = t.displayLevel,
                h = t.painter,
                c = t.state,
                y = this._styleRepository;

            var _p = !1;

            var _iterator37 = _createForOfIteratorHelper(s),
                _step37;

            try {
              for (_iterator37.s(); !(_step37 = _iterator37.n()).done;) {
                var _e35 = _step37.value;

                if (u(y.getLayerById(_e35), d)) {
                  _p = !0;
                  break;
                }
              }
            } catch (err) {
              _iterator37.e(err);
            } finally {
              _iterator37.f();
            }

            if (!_p) return;

            var m = this._tileInfoView.getTileCoverage(t.state, 0, "smallest"),
                f = m.spans,
                _ = m.lodInfo,
                b = _.level,
                g = Object(_geometry_support_aaBoundingRect_js__WEBPACK_IMPORTED_MODULE_2__["create"])(),
                T = [];

            if (this._renderPasses) {
              var _s21 = this._renderPasses[0];
              Object(_core_maybe_js__WEBPACK_IMPORTED_MODULE_0__["isSome"])(this._clippingInfos) && (_s21.brushes[0].prepareState(t, this._clippingInfos[0]), _s21.brushes[0].drawMany(t, this._clippingInfos));
            }

            var v = this._backgroundTiles;
            var C,
                F = 0;

            var _iterator38 = _createForOfIteratorHelper(f),
                _step38;

            try {
              for (_iterator38.s(); !(_step38 = _iterator38.n()).done;) {
                var _step38$value = _step38.value,
                    _e36 = _step38$value.row,
                    _t10 = _step38$value.colFrom,
                    _s22 = _step38$value.colTo;

                for (var _r8 = _t10; _r8 <= _s22; _r8++) {
                  if (F < v.length) C = v[F], C.key.set(b, _e36, _.normalizeCol(_r8), _.getWorldForColumn(_r8)), this._tileInfoView.getTileBounds(g, C.key, !1), C.bounds = g, C.coords[0] = g[0], C.coords[1] = g[3];else {
                    var _t11 = new _tiling_TileKey_js__WEBPACK_IMPORTED_MODULE_3__["default"](b, _e36, _.normalizeCol(_r8), _.getWorldForColumn(_r8));

                    C = new _webgl_TiledDisplayObject_js__WEBPACK_IMPORTED_MODULE_5__["TiledDisplayObject"](_t11, this._tileInfoView.getTileBounds(Object(_geometry_support_aaBoundingRect_js__WEBPACK_IMPORTED_MODULE_2__["create"])(), _t11), [512, 512], [4096, 4096]), v.push(C);
                  }
                  C.setTransform(c, this._tileInfoView.getTileResolution(C.key)), T.push(C), F++;
                }
              }
            } catch (err) {
              _iterator38.e(err);
            } finally {
              _iterator38.f();
            }

            r.setStencilWriteMask(0), r.setColorMask(!0, !0, !0, !0), r.setStencilOp(7680, 7680, 7681), r.setStencilFunction(514, 0, 255);
            var w = !0;
            t.drawPhase === _webgl_enums_js__WEBPACK_IMPORTED_MODULE_6__["WGLDrawPhase"].HITTEST && (w = !1), r.setStencilTestEnabled(w);

            var _iterator39 = _createForOfIteratorHelper(s),
                _step39;

            try {
              for (_iterator39.s(); !(_step39 = _iterator39.n()).done;) {
                var _e37 = _step39.value;

                var _s23 = y.getLayerById(_e37);

                u(_s23, d) && (t.styleLayerUID = _s23.uid, t.styleLayer = _s23, h.renderObjects(t, T, "vtlBackground"));
              }
            } catch (err) {
              _iterator39.e(err);
            } finally {
              _iterator39.f();
            }

            _tiling_TileCoverage_js__WEBPACK_IMPORTED_MODULE_4__["default"].pool.release(m);
          }
        }]);

        return p;
      }(_webgl_TileContainer_js__WEBPACK_IMPORTED_MODULE_7__["default"]);
      /***/

    },

    /***/
    "Rr/1":
    /*!****************************************************************************!*\
      !*** ./node_modules/@arcgis/core/views/2d/layers/VectorTileLayerView2D.js ***!
      \****************************************************************************/

    /*! exports provided: default */

    /***/
    function Rr1(module, __webpack_exports__, __webpack_require__) {
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


      var _core_maybe_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ../../../core/maybe.js */
      "srIe");
      /* harmony import */


      var _core_Logger_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ../../../core/Logger.js */
      "6S2I");
      /* harmony import */


      var _core_accessorSupport_ensureType_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ../../../core/accessorSupport/ensureType.js */
      "zqDF");
      /* harmony import */


      var _core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ../../../core/accessorSupport/decorators/property.js */
      "WbKI");
      /* harmony import */


      var _core_accessorSupport_decorators_subclass_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ../../../core/accessorSupport/decorators/subclass.js */
      "04ZG");
      /* harmony import */


      var _core_Error_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! ../../../core/Error.js */
      "zlDU");
      /* harmony import */


      var _core_urlUtils_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! ../../../core/urlUtils.js */
      "4EHJ");
      /* harmony import */


      var _core_uuid_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! ../../../core/uuid.js */
      "ju1D");
      /* harmony import */


      var _portal_support_resourceExtension_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
      /*! ../../../portal/support/resourceExtension.js */
      "9AIY");
      /* harmony import */


      var _core_promiseUtils_js__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
      /*! ../../../core/promiseUtils.js */
      "9MzC");
      /* harmony import */


      var _Graphic_js__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
      /*! ../../../Graphic.js */
      "jWBI");
      /* harmony import */


      var _core_Handles_js__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
      /*! ../../../core/Handles.js */
      "r0DZ");
      /* harmony import */


      var _geometry_support_aaBoundingRect_js__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(
      /*! ../../../geometry/support/aaBoundingRect.js */
      "kYAx");
      /* harmony import */


      var _core_accessorSupport_diffUtils_js__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(
      /*! ../../../core/accessorSupport/diffUtils.js */
      "DxxZ");
      /* harmony import */


      var _engine_vectorTiles_style_StyleRepository_js__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(
      /*! ../engine/vectorTiles/style/StyleRepository.js */
      "kB7V");
      /* harmony import */


      var _tiling_TileQueue_js__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(
      /*! ../tiling/TileQueue.js */
      "B81a");
      /* harmony import */


      var _engine_vectorTiles_VectorTile_js__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(
      /*! ../engine/vectorTiles/VectorTile.js */
      "Zrl8");
      /* harmony import */


      var _layers_LayerView_js__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(
      /*! ../../layers/LayerView.js */
      "NloG");
      /* harmony import */


      var _LayerView2D_js__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(
      /*! ./LayerView2D.js */
      "Vm2Q");
      /* harmony import */


      var _engine_vectorTiles_TileHandler_js__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(
      /*! ../engine/vectorTiles/TileHandler.js */
      "ga/j");
      /* harmony import */


      var _engine_vectorTiles_TileManager_js__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(
      /*! ../engine/vectorTiles/TileManager.js */
      "RtzU");
      /* harmony import */


      var _engine_vectorTiles_VectorTileContainer_js__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(
      /*! ../engine/vectorTiles/VectorTileContainer.js */
      "Pl/d");
      /* harmony import */


      var _tiling_TileInfoViewPOT_js__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(
      /*! ../tiling/TileInfoViewPOT.js */
      "Lp6Q");
      /*
      All material copyright ESRI, All Rights Reserved, unless otherwise specified.
      See https://js.arcgis.com/4.18/esri/copyright.txt for details.
      */


      var H = _core_Logger_js__WEBPACK_IMPORTED_MODULE_3__["default"].getLogger("esri.views.2d.layers.VectorTileLayerView2D");

      var R = /*#__PURE__*/function (_Object) {
        _inherits(R, _Object);

        var _super5 = _createSuper(R);

        function R() {
          var _this10;

          _classCallCheck(this, R);

          _this10 = _super5.apply(this, arguments), _this10._styleChanges = [], _this10._handles = new _core_Handles_js__WEBPACK_IMPORTED_MODULE_13__["default"](), _this10._fetchQueue = null, _this10._parseQueue = null, _this10._isTileHandlerReady = !1, _this10.fading = !1;
          return _this10;
        }

        _createClass(R, [{
          key: "initialize",
          value: function initialize() {
            var _this11 = this;

            var e = this.layer.tileInfo;
            if (!(e && e.spatialReference).equals(this.view.spatialReference)) return void this.addResolvingPromise(Object(_core_promiseUtils_js__WEBPACK_IMPORTED_MODULE_11__["reject"])(new _core_Error_js__WEBPACK_IMPORTED_MODULE_7__["default"]("layerview:spatial-reference-incompatible", "The spatial reference of this layer does not meet the requirements of the view", {
              layer: this.layer
            })));
            var _this$layer$currentSt = this.layer.currentStyleInfo,
                t = _this$layer$currentSt.style,
                i = _this$layer$currentSt.spriteUrl,
                s = _this$layer$currentSt.glyphsUrl;
            this._styleRepository = new _engine_vectorTiles_style_StyleRepository_js__WEBPACK_IMPORTED_MODULE_16__["default"](t, {
              spriteUrl: i,
              glyphsUrl: s
            }), this._tileInfoView = new _tiling_TileInfoViewPOT_js__WEBPACK_IMPORTED_MODULE_24__["default"](this.layer.tileInfo, this.layer.fullExtent), this._vectorTileContainer = new _engine_vectorTiles_VectorTileContainer_js__WEBPACK_IMPORTED_MODULE_23__["VectorTileContainer"](this._tileInfoView), this._tileHandler = new _engine_vectorTiles_TileHandler_js__WEBPACK_IMPORTED_MODULE_21__["TileHandler"](this.layer, this._styleRepository, window.devicePixelRatio || 1, null), this.container.addChild(this._vectorTileContainer), this.handles.add([this._vectorTileContainer.on("fade-start", function () {
              _this11.fading = !0;
            }), this._vectorTileContainer.on("fade-complete", function () {
              _this11.fading = !1, _this11.requestUpdate();
            })]);
          }
        }, {
          key: "destroy",
          value: function destroy() {
            var e;
            this._stop(), this.container.removeAllChildren(), this._vectorTileContainer && (this._vectorTileContainer.destroy(), this._vectorTileContainer = null), null == (e = this._tileHandler) || e.destroy(), this._tileHandler = null;
          }
        }, {
          key: "hitTest",
          value: function () {
            var _hitTest2 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee2(e, t) {
              var i, s, r, a, l, n;
              return regeneratorRuntime.wrap(function _callee2$(_context2) {
                while (1) {
                  switch (_context2.prev = _context2.next) {
                    case 0:
                      if (!(this.suspended || !this._tileHandlerPromise)) {
                        _context2.next = 2;
                        break;
                      }

                      return _context2.abrupt("return", null);

                    case 2:
                      _context2.next = 4;
                      return this._tileHandlerPromise;

                    case 4:
                      _context2.next = 6;
                      return this._vectorTileContainer.hitTest(e, t);

                    case 6:
                      i = _context2.sent;

                      if (!(!i || 0 === i.length)) {
                        _context2.next = 9;
                        break;
                      }

                      return _context2.abrupt("return", null);

                    case 9:
                      s = i[0] - 1, r = this._styleRepository, a = r.getStyleLayerByUID(s);

                      if (a) {
                        _context2.next = 12;
                        break;
                      }

                      return _context2.abrupt("return", null);

                    case 12:
                      l = r.getStyleLayerIndex(a.id), n = new _Graphic_js__WEBPACK_IMPORTED_MODULE_12__["default"]({
                        attributes: {
                          layerId: l,
                          layerName: a.id,
                          layerUID: s
                        }
                      });
                      return _context2.abrupt("return", (n.layer = this.layer, n.sourceLayer = this.layer, n));

                    case 14:
                    case "end":
                      return _context2.stop();
                  }
                }
              }, _callee2, this);
            }));

            function hitTest(_x3, _x4) {
              return _hitTest2.apply(this, arguments);
            }

            return hitTest;
          }()
        }, {
          key: "update",
          value: function update(e) {
            if (this._tileHandlerPromise && this._isTileHandlerReady) return e.pixelRatio !== this._tileHandler.devicePixelRatio ? (this._start(), void (this._tileHandler.devicePixelRatio = e.pixelRatio)) : void (this._styleChanges.length > 0 ? this._tileHandlerPromise = this._applyStyleChanges() : (this._fetchQueue.pause(), this._parseQueue.pause(), this._fetchQueue.state = e.state, this._parseQueue.state = e.state, this._tileManager.update(e) || this.requestUpdate(), this._parseQueue.resume(), this._fetchQueue.resume()));
          }
        }, {
          key: "attach",
          value: function attach() {
            var _this12 = this;

            this._start(), this._handles.add([this.layer.on("paint-change", function (e) {
              if (e.isDataDriven) _this12._styleChanges.push({
                type: 0,
                data: e
              }), _this12.notifyChange("updating"), _this12.requestUpdate();else {
                var t = _this12._styleRepository,
                    i = t.getLayerById(e.layerName);
                if (!i) return;
                var s = 3 === i.type;
                t.setPaintProperties(e.layerName, e.paint), s && _this12._vectorTileContainer.restartDeclutter(), _this12._vectorTileContainer.requestRender();
              }
            }), this.layer.on("layout-change", function (e) {
              var i = _this12._styleRepository,
                  s = i.getLayerById(e.layer);
              if (!s) return;
              var r = Object(_core_accessorSupport_diffUtils_js__WEBPACK_IMPORTED_MODULE_15__["diff"])(s.layout, e.layout);

              if (!Object(_core_maybe_js__WEBPACK_IMPORTED_MODULE_2__["isNone"])(r)) {
                if (Object(_core_accessorSupport_diffUtils_js__WEBPACK_IMPORTED_MODULE_15__["hasDiff"])(r, "visibility") && 1 === function (e) {
                  if (Object(_core_maybe_js__WEBPACK_IMPORTED_MODULE_2__["isNone"])(e)) return 0;

                  switch (e.type) {
                    case "partial":
                      return Object.keys(e.diff).length;

                    case "complete":
                      return Math.max(Object.keys(e.oldValue).length, Object.keys(e.newValue).length);

                    case "collection":
                      return Object.keys(e.added).length + Object.keys(e.changed).length + Object.keys(e.removed).length;
                  }
                }(r)) return i.setLayoutProperties(e.layer, e.layout), 3 === s.type && _this12._vectorTileContainer.restartDeclutter(), void _this12._vectorTileContainer.requestRender();
                _this12._styleChanges.push({
                  type: 1,
                  data: e
                }), _this12.notifyChange("updating"), _this12.requestUpdate();
              }
            }), this.layer.on("style-layer-visibility-change", function (e) {
              var t = _this12._styleRepository,
                  i = t.getLayerById(e.layer);
              i && (t.setStyleLayerVisibility(e.layer, e.visibility), 3 === i.type && _this12._vectorTileContainer.restartDeclutter(), _this12._vectorTileContainer.requestRender());
            }), this.layer.on("style-layer-change", function (e) {
              _this12._styleChanges.push({
                type: 2,
                data: e
              }), _this12.notifyChange("updating"), _this12.requestUpdate();
            }), this.layer.on("delete-style-layer", function (e) {
              _this12._styleChanges.push({
                type: 3,
                data: e
              }), _this12.notifyChange("updating"), _this12.requestUpdate();
            }), this.layer.on("load-style", function () {
              return _this12._loadStyle();
            })]);
          }
        }, {
          key: "detach",
          value: function detach() {
            this._stop(), this._handles.removeAll();
          }
        }, {
          key: "moveStart",
          value: function moveStart() {
            this.requestUpdate();
          }
        }, {
          key: "viewChange",
          value: function viewChange() {
            this.requestUpdate();
          }
        }, {
          key: "moveEnd",
          value: function moveEnd() {
            this.requestUpdate();
          }
        }, {
          key: "canResume",
          value: function canResume() {
            var e = _get(_getPrototypeOf(R.prototype), "canResume", this).call(this);

            var t = this.layer;

            if (e && t.currentStyleInfo) {
              var i = this.view.scale,
                  s = t.currentStyleInfo;

              if (s && s.layerDefinition) {
                var _t12 = s.layerDefinition;
                _t12.minScale && _t12.minScale < i && (e = !1), _t12.maxScale && _t12.maxScale > i && (e = !1);
              }
            }

            return e;
          }
        }, {
          key: "isUpdating",
          value: function isUpdating() {
            var e = this._vectorTileContainer.children;
            return !this._isTileHandlerReady || !this._fetchQueue || !this._parseQueue || this._fetchQueue.updating || this._parseQueue.updating || e.length > 0 && e.filter(function (e) {
              return e.invalidating;
            }).length > 0 || this.fading;
          }
        }, {
          key: "acquireTile",
          value: function acquireTile(e) {
            var _this13 = this;

            var t = this._createVectorTile(e);

            return this._tileHandlerPromise.then(function () {
              _this13._fetchQueue.push(t.key).then(function (e) {
                return _this13._parseQueue.push({
                  key: t.key,
                  data: e
                });
              }).then(function (e) {
                t.once("attach", function () {
                  return _this13.requestUpdate();
                }), e && (t.setData(e.tileData), _this13.requestUpdate(), _this13.notifyChange("updating"));
              })["catch"](function (e) {
                _this13.notifyChange("updating"), Object(_core_promiseUtils_js__WEBPACK_IMPORTED_MODULE_11__["isAbortError"])(e) || H.error(e);
              });
            }), t;
          }
        }, {
          key: "releaseTile",
          value: function releaseTile(e) {
            var t = e.key.id;
            this._fetchQueue.abort(t), this._parseQueue.abort(t), this.requestUpdate();
          }
        }, {
          key: "_start",
          value: function _start() {
            var _this14 = this;

            if (this._stop(), this._tileManager = new _engine_vectorTiles_TileManager_js__WEBPACK_IMPORTED_MODULE_22__["TileManager"]({
              acquireTile: function acquireTile(e) {
                return _this14.acquireTile(e);
              },
              releaseTile: function releaseTile(e) {
                return _this14.releaseTile(e);
              },
              tileInfoView: this._tileInfoView
            }, this._vectorTileContainer), !this.layer.currentStyleInfo) return;

            var e = new AbortController(),
                t = this._tileHandler.start({
              signal: e.signal
            }).then(function () {
              _this14._fetchQueue = new _tiling_TileQueue_js__WEBPACK_IMPORTED_MODULE_17__["default"]({
                tileInfoView: _this14._tileInfoView,
                process: function process(e, t) {
                  return _this14._getTileData(e, t);
                },
                concurrency: 15
              }), _this14._parseQueue = new _tiling_TileQueue_js__WEBPACK_IMPORTED_MODULE_17__["default"]({
                tileInfoView: _this14._tileInfoView,
                process: function process(e, t) {
                  return _this14._parseTileData(e, t);
                },
                concurrency: 8
              }), _this14.requestUpdate(), _this14._isTileHandlerReady = !0;
            });

            this._tileHandler.spriteMosaic.then(function (e) {
              _this14._vectorTileContainer.setStyleResources(e, _this14._tileHandler.glyphMosaic, _this14._styleRepository), _this14.requestUpdate();
            }), this._tileHandlerAbortController = e, this._tileHandlerPromise = t;
          }
        }, {
          key: "_stop",
          value: function _stop() {
            if (!this._tileHandlerAbortController || !this._vectorTileContainer) return;
            var e = this._tileHandlerAbortController;
            e && e.abort(), this._tileHandlerPromise = null, this._isTileHandlerReady = !1, this._fetchQueue && (this._fetchQueue.destroy(), this._fetchQueue = null), this._parseQueue && (this._parseQueue.destroy(), this._parseQueue = null), this._tileManager && (this._tileManager.destroy(), this._tileManager = null), this._vectorTileContainer.removeAllChildren();
          }
        }, {
          key: "_getTileData",
          value: function () {
            var _getTileData2 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee3(e, t) {
              var i;
              return regeneratorRuntime.wrap(function _callee3$(_context3) {
                while (1) {
                  switch (_context3.prev = _context3.next) {
                    case 0:
                      _context3.next = 2;
                      return this._tileHandler.fetchTileData(e, t);

                    case 2:
                      i = _context3.sent;
                      return _context3.abrupt("return", (this.notifyChange("updating"), i));

                    case 4:
                    case "end":
                      return _context3.stop();
                  }
                }
              }, _callee3, this);
            }));

            function _getTileData(_x5, _x6) {
              return _getTileData2.apply(this, arguments);
            }

            return _getTileData;
          }()
        }, {
          key: "_parseTileData",
          value: function () {
            var _parseTileData2 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee4(e, t) {
              return regeneratorRuntime.wrap(function _callee4$(_context4) {
                while (1) {
                  switch (_context4.prev = _context4.next) {
                    case 0:
                      return _context4.abrupt("return", this._tileHandler.parseTileData(e, t));

                    case 1:
                    case "end":
                      return _context4.stop();
                  }
                }
              }, _callee4, this);
            }));

            function _parseTileData(_x7, _x8) {
              return _parseTileData2.apply(this, arguments);
            }

            return _parseTileData;
          }()
        }, {
          key: "_applyStyleChanges",
          value: function () {
            var _applyStyleChanges2 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee5() {
              var _this15 = this;

              var e, t, i, s, r, a, _iterator40, _step40, _e38, _e39, _iterator41, _step41, _loop;

              return regeneratorRuntime.wrap(function _callee5$(_context5) {
                while (1) {
                  switch (_context5.prev = _context5.next) {
                    case 0:
                      this._isTileHandlerReady = !1, this._fetchQueue.pause(), this._parseQueue.pause(), this._fetchQueue.clear(), this._parseQueue.clear(), this._tileManager.clearCache();
                      e = this._styleChanges;
                      _context5.prev = 2;
                      _context5.next = 5;
                      return this._tileHandler.updateStyle(e);

                    case 5:
                      _context5.next = 10;
                      break;

                    case 7:
                      _context5.prev = 7;
                      _context5.t0 = _context5["catch"](2);
                      H.error("error applying vector-tiles style update", _context5.t0.message), this._fetchQueue.resume(), this._parseQueue.resume(), this._isTileHandlerReady = !0;

                    case 10:
                      t = this._styleRepository, i = [];
                      e.forEach(function (e) {
                        if (3 !== e.type) return;
                        var s = e.data,
                            r = t.getLayerById(s.layerName);
                        r && i.push(r.uid);
                      });
                      s = [];
                      e.forEach(function (e) {
                        var i = e.type,
                            a = e.data;

                        switch (i) {
                          case 0:
                            t.setPaintProperties(a.layer, a.paint), r = a.layer;
                            break;

                          case 1:
                            t.setLayoutProperties(a.layer, a.layout), r = a.layer;
                            break;

                          case 3:
                            return void t.deleteStyleLayer(a.layerName);

                          case 2:
                            t.setStyleLayer(a.layer, a.index), r = a.layer.id;
                        }

                        var l = t.getLayerById(r);
                        l && s.push(l.uid);
                      });
                      a = this._vectorTileContainer.children;

                      if (i.length > 0) {
                        this._vectorTileContainer.deleteStyleLayers(i);

                        _iterator40 = _createForOfIteratorHelper(a);

                        try {
                          for (_iterator40.s(); !(_step40 = _iterator40.n()).done;) {
                            _e38 = _step40.value;

                            _e38.deleteLayerData(i);
                          }
                        } catch (err) {
                          _iterator40.e(err);
                        } finally {
                          _iterator40.f();
                        }
                      }

                      if (!(this._fetchQueue.resume(), this._parseQueue.resume(), s.length > 0)) {
                        _context5.next = 22;
                        break;
                      }

                      _e39 = [];
                      _iterator41 = _createForOfIteratorHelper(a);

                      try {
                        _loop = function _loop() {
                          var t = _step41.value;

                          var i = _this15._fetchQueue.push(t.key).then(function (e) {
                            return _this15._parseQueue.push({
                              key: t.key,
                              data: e,
                              styleLayerUIDs: s
                            });
                          }).then(function (e) {
                            return t.setData(e.tileData);
                          });

                          _e39.push(i);
                        };

                        for (_iterator41.s(); !(_step41 = _iterator41.n()).done;) {
                          _loop();
                        }
                      } catch (err) {
                        _iterator41.e(err);
                      } finally {
                        _iterator41.f();
                      }

                      _context5.next = 22;
                      return Object(_core_promiseUtils_js__WEBPACK_IMPORTED_MODULE_11__["all"])(_e39);

                    case 22:
                      this._styleChanges = [], this._isTileHandlerReady = !0, this.notifyChange("updating"), this.requestUpdate();

                    case 23:
                    case "end":
                      return _context5.stop();
                  }
                }
              }, _callee5, this, [[2, 7]]);
            }));

            function _applyStyleChanges() {
              return _applyStyleChanges2.apply(this, arguments);
            }

            return _applyStyleChanges;
          }()
        }, {
          key: "_loadStyle",
          value: function () {
            var _loadStyle2 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee6() {
              var _this$layer$currentSt2, e, t, i, s, r;

              return regeneratorRuntime.wrap(function _callee6$(_context6) {
                while (1) {
                  switch (_context6.prev = _context6.next) {
                    case 0:
                      _this$layer$currentSt2 = this.layer.currentStyleInfo, e = _this$layer$currentSt2.style, t = _this$layer$currentSt2.spriteUrl, i = _this$layer$currentSt2.glyphsUrl;
                      this._isTileHandlerReady = !1, this._fetchQueue.pause(), this._parseQueue.pause(), this._fetchQueue.clear(), this._parseQueue.clear(), this.notifyChange("updating"), this._styleRepository = new _engine_vectorTiles_style_StyleRepository_js__WEBPACK_IMPORTED_MODULE_16__["default"](e, {
                        spriteUrl: t,
                        glyphsUrl: i
                      }), this._vectorTileContainer.destroy(), this._tileManager.clear(), this._tileHandlerAbortController.abort(), this._tileHandlerAbortController = Object(_core_promiseUtils_js__WEBPACK_IMPORTED_MODULE_11__["createAbortController"])();
                      s = this._tileHandlerAbortController.signal;
                      this._tileHandlerPromise = this._tileHandler.setStyle(this._styleRepository, e);
                      _context6.next = 6;
                      return this._tileHandlerPromise;

                    case 6:
                      if (!s.aborted) {
                        _context6.next = 8;
                        break;
                      }

                      return _context6.abrupt("return", (this._fetchQueue.resume(), this._parseQueue.resume(), this._isTileHandlerReady = !0, this.notifyChange("updating"), void this.requestUpdate()));

                    case 8:
                      _context6.next = 10;
                      return this._tileHandler.spriteMosaic;

                    case 10:
                      r = _context6.sent;
                      this._vectorTileContainer.setStyleResources(r, this._tileHandler.glyphMosaic, this._styleRepository), this._fetchQueue.resume(), this._parseQueue.resume(), this._isTileHandlerReady = !0, this.notifyChange("updating"), this.requestUpdate();

                    case 12:
                    case "end":
                      return _context6.stop();
                  }
                }
              }, _callee6, this);
            }));

            function _loadStyle() {
              return _loadStyle2.apply(this, arguments);
            }

            return _loadStyle;
          }()
        }, {
          key: "_createVectorTile",
          value: function _createVectorTile(e) {
            var t = this._tileInfoView.getTileBounds(Object(_geometry_support_aaBoundingRect_js__WEBPACK_IMPORTED_MODULE_14__["create"])(), e);

            return new _engine_vectorTiles_VectorTile_js__WEBPACK_IMPORTED_MODULE_18__["VectorTile"](e, this._styleRepository, t, [512, 512]);
          }
        }]);

        return R;
      }(Object(_LayerView2D_js__WEBPACK_IMPORTED_MODULE_20__["LayerView2DMixin"])(_layers_LayerView_js__WEBPACK_IMPORTED_MODULE_19__["default"]));

      Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_5__["property"])()], R.prototype, "_fetchQueue", void 0), Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_5__["property"])()], R.prototype, "_parseQueue", void 0), Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_5__["property"])()], R.prototype, "_isTileHandlerReady", void 0), Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_5__["property"])({
        dependsOn: ["view.scale", "layer.currentStyleInfo"]
      })], R.prototype, "suspended", void 0), Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_5__["property"])()], R.prototype, "fading", void 0), Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_5__["property"])({
        dependsOn: ["_isTileHandlerPromiseFulfilled", "_parseQueue.updating", "_parseQueue.updating", "fading"]
      })], R.prototype, "updating", void 0), R = Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_subclass_js__WEBPACK_IMPORTED_MODULE_6__["subclass"])("esri.views.2d.layers.VectorTileLayerView2D")], R);
      var U = R;
      /* harmony default export */

      __webpack_exports__["default"] = U;
      /***/
    },

    /***/
    "RtzU":
    /*!******************************************************************************!*\
      !*** ./node_modules/@arcgis/core/views/2d/engine/vectorTiles/TileManager.js ***!
      \******************************************************************************/

    /*! exports provided: TileManager */

    /***/
    function RtzU(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "TileManager", function () {
        return o;
      });
      /* harmony import */


      var _core_maybe_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ../../../../core/maybe.js */
      "srIe");
      /* harmony import */


      var _core_LRUCache_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ../../../../core/LRUCache.js */
      "wk6I");
      /* harmony import */


      var _tiling_TileKey_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ../../tiling/TileKey.js */
      "rlSK");
      /* harmony import */


      var _tiling_TileCoverage_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ../../tiling/TileCoverage.js */
      "umoc");
      /*
      All material copyright ESRI, All Rights Reserved, unless otherwise specified.
      See https://js.arcgis.com/4.18/esri/copyright.txt for details.
      */


      var r = function r(e, i) {
        return e + 1 / (1 << 2 * i);
      };

      var o = /*#__PURE__*/function () {
        function o(e, i) {
          _classCallCheck(this, o);

          this._tiles = new Map(), this._tileCache = new _core_LRUCache_js__WEBPACK_IMPORTED_MODULE_1__["default"](40, function (e) {
            return e.dispose();
          }), this._viewSize = [0, 0], this._visibleTiles = new Map(), this.acquireTile = e.acquireTile, this.releaseTile = e.releaseTile, this.tileInfoView = e.tileInfoView, this._container = i;
        }

        _createClass(o, [{
          key: "destroy",
          value: function destroy() {
            this._tiles.clear(), this._tiles = null, this._tileCache.clear(), this._tileCache = null;
          }
        }, {
          key: "update",
          value: function update(e) {
            this._updateCacheSize(e);

            var i = this.tileInfoView,
                t = i.getTileCoverage(e.state, 0, "smallest"),
                r = t.spans,
                _o5 = t.lodInfo,
                n = _o5.level,
                a = new Set(),
                h = new Set();

            var _iterator42 = _createForOfIteratorHelper(r),
                _step42;

            try {
              for (_iterator42.s(); !(_step42 = _iterator42.n()).done;) {
                var _step42$value = _step42.value,
                    _e40 = _step42$value.row,
                    _i9 = _step42$value.colFrom,
                    _t13 = _step42$value.colTo;

                for (var _s24 = _i9; _s24 <= _t13; _s24++) {
                  var _i10 = _tiling_TileKey_js__WEBPACK_IMPORTED_MODULE_2__["default"].getId(n, _e40, _o5.normalizeCol(_s24), _o5.getWorldForColumn(_s24)),
                      _t14 = this._getOrAcquireTile(_i10);

                  a.add(_i10), _t14.processed() ? this._addToContainer(_t14) : h.add(new _tiling_TileKey_js__WEBPACK_IMPORTED_MODULE_2__["default"](_i10));
                }
              }
            } catch (err) {
              _iterator42.e(err);
            } finally {
              _iterator42.f();
            }

            var _iterator43 = _createForOfIteratorHelper(this._tiles),
                _step43;

            try {
              for (_iterator43.s(); !(_step43 = _iterator43.n()).done;) {
                var _step43$value = _slicedToArray(_step43.value, 2),
                    _e41 = _step43$value[0],
                    _i11 = _step43$value[1];

                _i11.isCoverage = a.has(_e41);
              }
            } catch (err) {
              _iterator43.e(err);
            } finally {
              _iterator43.f();
            }

            var _iterator44 = _createForOfIteratorHelper(h),
                _step44;

            try {
              for (_iterator44.s(); !(_step44 = _iterator44.n()).done;) {
                var _e42 = _step44.value;

                this._findPlaceholdersForMissingTiles(_e42, a);
              }
            } catch (err) {
              _iterator44.e(err);
            } finally {
              _iterator44.f();
            }

            var c = !1;

            var _iterator45 = _createForOfIteratorHelper(this._tiles),
                _step45;

            try {
              for (_iterator45.s(); !(_step45 = _iterator45.n()).done;) {
                var _step45$value = _slicedToArray(_step45.value, 2),
                    _e43 = _step45$value[0],
                    l = _step45$value[1];

                l.neededForCoverage = a.has(_e43), l.neededForCoverage || l.isHoldingForFade && i.intersects(t, l.key) && a.add(_e43), l.isFading && (c = !0);
              }
            } catch (err) {
              _iterator45.e(err);
            } finally {
              _iterator45.f();
            }

            var _iterator46 = _createForOfIteratorHelper(this._tiles),
                _step46;

            try {
              for (_iterator46.s(); !(_step46 = _iterator46.n()).done;) {
                var _step46$value = _slicedToArray(_step46.value, 2),
                    _e44 = _step46$value[0],
                    _i12 = _step46$value[1];

                a.has(_e44) || this._releaseTile(_e44);
              }
            } catch (err) {
              _iterator46.e(err);
            } finally {
              _iterator46.f();
            }

            return _tiling_TileCoverage_js__WEBPACK_IMPORTED_MODULE_3__["default"].pool.release(t), !c;
          }
        }, {
          key: "clear",
          value: function clear() {
            this._tiles.clear(), this._tileCache.clear(), this._visibleTiles.clear();
          }
        }, {
          key: "clearCache",
          value: function clearCache() {
            this._tileCache.clear();
          }
        }, {
          key: "_findPlaceholdersForMissingTiles",
          value: function _findPlaceholdersForMissingTiles(e, i) {
            var t = [];

            var _iterator47 = _createForOfIteratorHelper(this._tiles),
                _step47;

            try {
              for (_iterator47.s(); !(_step47 = _iterator47.n()).done;) {
                var _step47$value = _slicedToArray(_step47.value, 2),
                    _l18 = _step47$value[0],
                    _s25 = _step47$value[1];

                this._addPlaceholderChild(t, _s25, e, i);
              }
            } catch (err) {
              _iterator47.e(err);
            } finally {
              _iterator47.f();
            }

            var l = t.reduce(r, 0);
            Math.abs(1 - l) < 1e-6 || this._addPlaceholderParent(e.id, i);
          }
        }, {
          key: "_addPlaceholderChild",
          value: function _addPlaceholderChild(e, i, t, l) {
            i.key.level <= t.level || !i.hasData() || function (e, i) {
              var t = i.level - e.level;
              return e.row === i.row >> t && e.col === i.col >> t && e.world === i.world;
            }(t, i.key) && (this._addToContainer(i), l.add(i.id), e.push(i.key.level - t.level));
          }
        }, {
          key: "_addPlaceholderParent",
          value: function _addPlaceholderParent(e, i) {
            var t = e;

            for (;;) {
              if (t = n(t), !t || i.has(t)) return;

              var _e45 = this._getTile(t);

              if (_e45 && _e45.hasData()) return this._addToContainer(_e45), void i.add(_e45.id);
            }
          }
        }, {
          key: "_getOrAcquireTile",
          value: function _getOrAcquireTile(e) {
            var i = this._tiles.get(e);

            return i || (i = this._tileCache.pop(e), i || (i = this.acquireTile(new _tiling_TileKey_js__WEBPACK_IMPORTED_MODULE_2__["default"](e))), this._tiles.set(e, i), i);
          }
        }, {
          key: "_getTile",
          value: function _getTile(e) {
            var i = this._tiles.get(e);

            return i || (i = this._tileCache.pop(e), i && this._tiles.set(e, i), i);
          }
        }, {
          key: "_releaseTile",
          value: function _releaseTile(e) {
            var i = this._tiles.get(e);

            this.releaseTile(i), this._removeFromContainer(i), this._tiles["delete"](e), i.hasData() ? this._tileCache.put(e, i, 1) : i.dispose();
          }
        }, {
          key: "_addToContainer",
          value: function _addToContainer(t) {
            var l;
            var s = [],
                r = this._container;
            if (r.contains(t)) return;
            var _o6 = this._visibleTiles;

            var _iterator48 = _createForOfIteratorHelper(_o6),
                _step48;

            try {
              for (_iterator48.s(); !(_step48 = _iterator48.n()).done;) {
                var _step48$value = _slicedToArray(_step48.value, 2),
                    i = _step48$value[0],
                    _r9 = _step48$value[1];

                this._canConnectDirectly(t, _r9) && s.push(_r9), Object(_core_maybe_js__WEBPACK_IMPORTED_MODULE_0__["isNone"])(l) && this._canConnectDirectly(_r9, t) && (l = _r9);
              }
            } catch (err) {
              _iterator48.e(err);
            } finally {
              _iterator48.f();
            }

            if (Object(_core_maybe_js__WEBPACK_IMPORTED_MODULE_0__["isSome"])(l)) {
              var _iterator49 = _createForOfIteratorHelper(s),
                  _step49;

              try {
                for (_iterator49.s(); !(_step49 = _iterator49.n()).done;) {
                  var _e46 = _step49.value;
                  l.childrenTiles["delete"](_e46), t.childrenTiles.add(_e46), _e46.parentTile = t;
                }
              } catch (err) {
                _iterator49.e(err);
              } finally {
                _iterator49.f();
              }

              l.childrenTiles.add(t), t.parentTile = l;
            } else {
              var _iterator50 = _createForOfIteratorHelper(s),
                  _step50;

              try {
                for (_iterator50.s(); !(_step50 = _iterator50.n()).done;) {
                  var _e47 = _step50.value;
                  t.childrenTiles.add(_e47), _e47.parentTile = t;
                }
              } catch (err) {
                _iterator50.e(err);
              } finally {
                _iterator50.f();
              }
            }

            _o6.set(t.id, t), r.addChild(t);
          }
        }, {
          key: "_removeFromContainer",
          value: function _removeFromContainer(e) {
            if (this._visibleTiles["delete"](e.id), this._container.removeChild(e), Object(_core_maybe_js__WEBPACK_IMPORTED_MODULE_0__["isSome"])(e.parentTile)) {
              e.parentTile.childrenTiles["delete"](e);

              var _iterator51 = _createForOfIteratorHelper(e.childrenTiles),
                  _step51;

              try {
                for (_iterator51.s(); !(_step51 = _iterator51.n()).done;) {
                  var t = _step51.value;
                  Object(_core_maybe_js__WEBPACK_IMPORTED_MODULE_0__["isSome"])(e.parentTile) && e.parentTile.childrenTiles.add(t);
                }
              } catch (err) {
                _iterator51.e(err);
              } finally {
                _iterator51.f();
              }
            }

            var _iterator52 = _createForOfIteratorHelper(e.childrenTiles),
                _step52;

            try {
              for (_iterator52.s(); !(_step52 = _iterator52.n()).done;) {
                var i = _step52.value;
                i.parentTile = e.parentTile;
              }
            } catch (err) {
              _iterator52.e(err);
            } finally {
              _iterator52.f();
            }

            e.parentTile = null, e.childrenTiles.clear();
          }
        }, {
          key: "_canConnectDirectly",
          value: function _canConnectDirectly(e, i) {
            var t = e.key;
            var _i$key = i.key,
                l = _i$key.level,
                s = _i$key.row,
                r = _i$key.col,
                _o7 = _i$key.world;
            var n = this._visibleTiles;

            for (; l > 0;) {
              if (l--, s >>= 1, r >>= 1, t.level === l && t.row === s && t.col === r && t.world === _o7) return !0;
              if (n.has("".concat(l, "/").concat(s, "/").concat(r, "/").concat(_o7))) return !1;
            }

            return !1;
          }
        }, {
          key: "_updateCacheSize",
          value: function _updateCacheSize(e) {
            var i = e.state.size;
            if (i[0] === this._viewSize[0] && i[1] === this._viewSize[1]) return;
            var t = Math.ceil(i[0] / 512) + 1,
                l = Math.ceil(i[1] / 512) + 1;
            this._viewSize[0] = i[0], this._viewSize[1] = i[1], this._tileCache.maxSize = 5 * t * l;
          }
        }]);

        return o;
      }();

      function n(e) {
        var _e$split = e.split("/"),
            _e$split2 = _slicedToArray(_e$split, 4),
            i = _e$split2[0],
            t = _e$split2[1],
            l = _e$split2[2],
            s = _e$split2[3],
            r = parseInt(i, 10);

        return 0 === r ? null : "".concat(r - 1, "/").concat(parseInt(t, 10) >> 1, "/").concat(parseInt(l, 10) >> 1, "/").concat(parseInt(s, 10));
      }
      /***/

    },

    /***/
    "UbKN":
    /*!************************************************************************************!*\
      !*** ./node_modules/@arcgis/core/views/2d/engine/vectorTiles/decluttering/jobs.js ***!
      \************************************************************************************/

    /*! exports provided: CollisionJob */

    /***/
    function UbKN(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "CollisionJob", function () {
        return r;
      });
      /* harmony import */


      var _chunks_mat3f32_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ../../../../../chunks/mat3f32.js */
      "jHF5");
      /* harmony import */


      var _config_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./config.js */
      "2yHJ");
      /* harmony import */


      var _util_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./util.js */
      "vAXJ");
      /*
      All material copyright ESRI, All Rights Reserved, unless otherwise specified.
      See https://js.arcgis.com/4.18/esri/copyright.txt for details.
      */


      function o(e, t, n, o, r, s) {
        var i = o.iconRotationAlignment,
            l = o.textRotationAlignment,
            a = o.iconTranslate,
            c = o.iconTranslateAnchor,
            h = o.textTranslate,
            u = o.textTranslateAnchor;
        var d = 0;

        var _iterator53 = _createForOfIteratorHelper(e.colliders),
            _step53;

        try {
          for (_iterator53.s(); !(_step53 = _iterator53.n()).done;) {
            var _o8 = _step53.value;

            var _ref = 0 === _o8.partIndex ? a : h,
                _ref2 = _slicedToArray(_ref, 2),
                _e48 = _ref2[0],
                y = _ref2[1],
                x = 0 === _o8.partIndex ? c : u,
                g = _o8.minLod <= s && s <= _o8.maxLod;

            d += g ? 0 : 1, _o8.enabled = g, _o8.xScreen = _o8.xTile * r[0] + _o8.yTile * r[3] + r[6], _o8.yScreen = _o8.xTile * r[1] + _o8.yTile * r[4] + r[7], 0 === x ? (_o8.xScreen += n * _e48 - t * y, _o8.yScreen += t * _e48 + n * y) : (_o8.xScreen += _e48, _o8.yScreen += y), 1 === (0 === _o8.partIndex ? i : l) ? (_o8.dxScreen = _o8.dxPixels, _o8.dyScreen = _o8.dyPixels) : (_o8.dxScreen = n * (_o8.dxPixels + _o8.width / 2) - t * (_o8.dyPixels + _o8.height / 2) - _o8.width / 2, _o8.dyScreen = t * (_o8.dxPixels + _o8.width / 2) + n * (_o8.dyPixels + _o8.height / 2) - _o8.height / 2);
          }
        } catch (err) {
          _iterator53.e(err);
        } finally {
          _iterator53.f();
        }

        e.colliders.length > 0 && d === e.colliders.length && (e.unique.show = !1);
      }

      var r = /*#__PURE__*/function () {
        function r(o, _r10, s, i, l, a) {
          _classCallCheck(this, r);

          this._symbols = o, this._styleRepository = i, this._zoom = l, this._currentLayerCursor = 0, this._currentSymbolCursor = 0, this._styleProps = new Map(), this._allNeededMatrices = new Map(), this._gridIndex = new _util_js__WEBPACK_IMPORTED_MODULE_2__["GridIndex"](_r10, s, _config_js__WEBPACK_IMPORTED_MODULE_1__["COLLISION_GRID_CELL_SIZE"]), this._si = Math.sin(Math.PI * a / 180), this._co = Math.cos(Math.PI * a / 180);

          var _iterator54 = _createForOfIteratorHelper(o),
              _step54;

          try {
            for (_iterator54.s(); !(_step54 = _iterator54.n()).done;) {
              var t = _step54.value;

              var _iterator55 = _createForOfIteratorHelper(t.symbols),
                  _step55;

              try {
                for (_iterator55.s(); !(_step55 = _iterator55.n()).done;) {
                  var n = _step55.value;
                  this._allNeededMatrices.has(n.tile) || this._allNeededMatrices.set(n.tile, Object(_chunks_mat3f32_js__WEBPACK_IMPORTED_MODULE_0__["a"])(n.tile.transforms.tileUnitsToPixels));
                }
              } catch (err) {
                _iterator55.e(err);
              } finally {
                _iterator55.f();
              }
            }
          } catch (err) {
            _iterator54.e(err);
          } finally {
            _iterator54.f();
          }
        }

        _createClass(r, [{
          key: "work",
          value: function work(e) {
            var t = this._gridIndex;

            function n(e) {
              var n = e.xScreen + e.dxScreen,
                  o = e.yScreen + e.dyScreen,
                  r = n + e.width,
                  s = o + e.height,
                  _t$getCellSpan = t.getCellSpan(n, o, r, s),
                  _t$getCellSpan2 = _slicedToArray(_t$getCellSpan, 4),
                  i = _t$getCellSpan2[0],
                  l = _t$getCellSpan2[1],
                  a = _t$getCellSpan2[2],
                  c = _t$getCellSpan2[3];

              for (var _e49 = l; _e49 <= c; _e49++) {
                for (var _l19 = i; _l19 <= a; _l19++) {
                  var _i13 = t.cells[_e49][_l19];

                  var _iterator56 = _createForOfIteratorHelper(_i13),
                      _step56;

                  try {
                    for (_iterator56.s(); !(_step56 = _iterator56.n()).done;) {
                      var _e50 = _step56.value;

                      var _t15 = _e50.xScreen + _e50.dxScreen,
                          _i14 = _e50.yScreen + _e50.dyScreen,
                          _l20 = _t15 + _e50.width,
                          _a2 = _i14 + _e50.height;

                      if (!(r < _t15 || n > _l20 || s < _i14 || o > _a2)) return !0;
                    }
                  } catch (err) {
                    _iterator56.e(err);
                  } finally {
                    _iterator56.f();
                  }
                }
              }

              return !1;
            }

            var _r11 = performance.now();

            for (; this._currentLayerCursor < this._symbols.length; this._currentLayerCursor++, this._currentSymbolCursor = 0) {
              var _t16 = this._symbols[this._currentLayerCursor],
                  _s26 = this._getProperties(_t16.styleLayerUID);

              for (; this._currentSymbolCursor < _t16.symbols.length; this._currentSymbolCursor++) {
                if (this._currentSymbolCursor % 100 == 99 && performance.now() - _r11 > e) return !1;
                var i = _t16.symbols[this._currentSymbolCursor];
                if (!i.unique.show) continue;
                o(i, this._si, this._co, _s26, this._allNeededMatrices.get(i.tile), this._zoom);
                var l = i.unique;
                if (!l.show) continue;
                var a = _s26.iconAllowOverlap,
                    c = _s26.iconIgnorePlacement,
                    h = _s26.textAllowOverlap,
                    u = _s26.textIgnorePlacement;

                var _iterator57 = _createForOfIteratorHelper(i.colliders),
                    _step57;

                try {
                  for (_iterator57.s(); !(_step57 = _iterator57.n()).done;) {
                    var _e52 = _step57.value;
                    if (!_e52.enabled) continue;
                    var _t19 = l.parts[_e52.partIndex];
                    if (!_t19.show) continue;
                    !(_e52.partIndex ? h : a) && n(_e52) && (_e52.hard ? l.show = !1 : _t19.show = !1);
                  }
                } catch (err) {
                  _iterator57.e(err);
                } finally {
                  _iterator57.f();
                }

                if (l.show) {
                  var _iterator58 = _createForOfIteratorHelper(i.colliders),
                      _step58;

                  try {
                    for (_iterator58.s(); !(_step58 = _iterator58.n()).done;) {
                      var _e51 = _step58.value;
                      if (!_e51.enabled) continue;
                      if (_e51.partIndex ? u : c) continue;
                      if (!l.parts[_e51.partIndex].show) continue;

                      var _t17 = _e51.xScreen + _e51.dxScreen,
                          _n5 = _e51.yScreen + _e51.dyScreen,
                          _o9 = _t17 + _e51.width,
                          _r14 = _n5 + _e51.height,
                          _this$_gridIndex$getC = this._gridIndex.getCellSpan(_t17, _n5, _o9, _r14),
                          _this$_gridIndex$getC2 = _slicedToArray(_this$_gridIndex$getC, 4),
                          _s27 = _this$_gridIndex$getC2[0],
                          _i15 = _this$_gridIndex$getC2[1],
                          _a3 = _this$_gridIndex$getC2[2],
                          _h3 = _this$_gridIndex$getC2[3];

                      for (var _t18 = _i15; _t18 <= _h3; _t18++) {
                        for (var _n6 = _s27; _n6 <= _a3; _n6++) {
                          this._gridIndex.cells[_t18][_n6].push(_e51);
                        }
                      }
                    }
                  } catch (err) {
                    _iterator58.e(err);
                  } finally {
                    _iterator58.f();
                  }
                }
              }
            }

            return !0;
          }
        }, {
          key: "_getProperties",
          value: function _getProperties(e) {
            var t = this._styleProps.get(e);

            if (t) return t;

            var n = this._zoom,
                o = this._styleRepository.getStyleLayerByUID(e),
                _r13 = 0 !== o.getLayoutValue("symbol-placement", n);

            var s = o.getLayoutValue("icon-rotation-alignment", n);
            2 === s && (s = _r13 ? 0 : 1);
            var i = o.getLayoutValue("text-rotation-alignment", n);
            2 === i && (i = _r13 ? 0 : 1);
            var l = o.getPaintValue("icon-translate", n),
                a = o.getPaintValue("icon-translate-anchor", n),
                c = o.getPaintValue("text-translate", n),
                h = o.getPaintValue("text-translate-anchor", n),
                u = {
              iconAllowOverlap: o.getLayoutValue("icon-allow-overlap", n),
              iconIgnorePlacement: o.getLayoutValue("icon-ignore-placement", n),
              textAllowOverlap: o.getLayoutValue("text-allow-overlap", n),
              textIgnorePlacement: o.getLayoutValue("text-ignore-placement", n),
              iconRotationAlignment: s,
              textRotationAlignment: i,
              iconTranslateAnchor: a,
              iconTranslate: l,
              textTranslateAnchor: h,
              textTranslate: c
            };
            return this._styleProps.set(e, u), u;
          }
        }]);

        return r;
      }();
      /***/

    },

    /***/
    "WDSG":
    /*!*******************************************************************************!*\
      !*** ./node_modules/@arcgis/core/views/2d/engine/vectorTiles/RenderBucket.js ***!
      \*******************************************************************************/

    /*! exports provided: CircleRenderBucket, FillRenderBucket, LineRenderBucket, RenderBucketBase, SymbolRenderBucket */

    /***/
    function WDSG(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "CircleRenderBucket", function () {
        return u;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "FillRenderBucket", function () {
        return a;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "LineRenderBucket", function () {
        return f;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "RenderBucketBase", function () {
        return o;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "SymbolRenderBucket", function () {
        return l;
      });
      /* harmony import */


      var _core_has_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ../../../../core/has.js */
      "wSAH");
      /* harmony import */


      var _core_maybe_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ../../../../core/maybe.js */
      "srIe");
      /* harmony import */


      var _core_mathUtils_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ../../../../core/mathUtils.js */
      "OKTS");
      /* harmony import */


      var _chunks_builtins_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ../../../../chunks/builtins.js */
      "n4uK");
      /* harmony import */


      var _webgl_BufferObject_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ../../../webgl/BufferObject.js */
      "fOQB");
      /* harmony import */


      var _webgl_VertexArrayObject_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ../../../webgl/VertexArrayObject.js */
      "D6bk");
      /* harmony import */


      var _webgl_FramebufferObject_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ../../../webgl/FramebufferObject.js */
      "0meK");
      /* harmony import */


      var _webgl_RenderingContext_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! ../../../webgl/RenderingContext.js */
      "bfJE");
      /* harmony import */


      var _decluttering_util_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! ./decluttering/util.js */
      "vAXJ");
      /*
      All material copyright ESRI, All Rights Reserved, unless otherwise specified.
      See https://js.arcgis.com/4.18/esri/copyright.txt for details.
      */


      var o = /*#__PURE__*/function () {
        function o(e) {
          _classCallCheck(this, o);

          this.layerUIDs = [], this.isDestroyed = !1, this.data = e, this.memoryUsed = e.byteLength;
          var t = 1;
          var r = new Uint32Array(e);
          this.layerUIDs = [];
          var i = r[t++];

          for (var _e53 = 0; _e53 < i; _e53++) {
            this.layerUIDs[_e53] = r[t++];
          }

          this.bufferDataOffset = t;
        }

        _createClass(o, [{
          key: "isPreparedForRendering",
          get: function get() {
            return Object(_core_maybe_js__WEBPACK_IMPORTED_MODULE_1__["isNone"])(this.data);
          }
        }, {
          key: "offset",
          get: function get() {
            return this.bufferDataOffset;
          }
        }, {
          key: "destroy",
          value: function destroy() {
            this.isDestroyed || (this.doDestroy(), this.isDestroyed = !0);
          }
        }, {
          key: "prepareForRendering",
          value: function prepareForRendering(t, r) {
            Object(_core_maybe_js__WEBPACK_IMPORTED_MODULE_1__["isNone"])(this.data) || (this.doPrepareForRendering(t, r, this.data, this.bufferDataOffset), this.data = null);
          }
        }]);

        return o;
      }();

      var f = /*#__PURE__*/function (_o10) {
        _inherits(f, _o10);

        var _super6 = _createSuper(f);

        function f(e) {
          var _this16;

          _classCallCheck(this, f);

          _this16 = _super6.call(this, e), _this16.type = 2, _this16.lineIndexStart = 0, _this16.lineIndexCount = 0;
          var t = _this16.bufferDataOffset;
          var r = new Uint32Array(e);
          _this16.lineIndexStart = r[t++], _this16.lineIndexCount = r[t++], _this16.isLineDataDriven = !!r[t++], _this16.bufferDataOffset = t;
          return _this16;
        }

        _createClass(f, [{
          key: "hasData",
          value: function hasData() {
            return this.lineIndexCount > 0;
          }
        }, {
          key: "triangleCount",
          value: function triangleCount() {
            return this.lineIndexCount / 3;
          }
        }, {
          key: "doDestroy",
          value: function doDestroy() {
            Object(_core_maybe_js__WEBPACK_IMPORTED_MODULE_1__["isSome"])(this.lineVertexArrayObject) && this.lineVertexArrayObject.dispose(), Object(_core_maybe_js__WEBPACK_IMPORTED_MODULE_1__["isSome"])(this.lineVertexBuffer) && this.lineVertexBuffer.dispose(), Object(_core_maybe_js__WEBPACK_IMPORTED_MODULE_1__["isSome"])(this.lineIndexBuffer) && this.lineIndexBuffer.dispose(), this.lineVertexArrayObject = null, this.lineVertexBuffer = null, this.lineIndexBuffer = null, this.memoryUsed = 0;
          }
        }, {
          key: "doPrepareForRendering",
          value: function doPrepareForRendering(e, t, r, n) {
            var o = new Uint32Array(r),
                a = new Int32Array(o.buffer),
                l = o[n++];
            this.lineVertexBuffer = _webgl_BufferObject_js__WEBPACK_IMPORTED_MODULE_4__["default"].createVertex(e, 35044, new Int32Array(a.buffer, 4 * n, l)), n += l;
            var u = o[n++];
            this.lineIndexBuffer = _webgl_BufferObject_js__WEBPACK_IMPORTED_MODULE_4__["default"].createIndex(e, 35044, new Uint32Array(o.buffer, 4 * n, u)), n += u, this.lineVertexArrayObject = new _webgl_VertexArrayObject_js__WEBPACK_IMPORTED_MODULE_5__["default"](e, t.getProgramAttributes(3), this.isLineDataDriven ? f.lineVertexAttributesDD : f.lineVertexAttributes, {
              geometry: this.lineVertexBuffer
            }, this.lineIndexBuffer);
          }
        }]);

        return f;
      }(o);

      f.lineVertexAttributes = {
        geometry: [{
          name: "a_pos",
          count: 2,
          type: 5122,
          offset: 0,
          stride: 12,
          normalized: !1,
          divisor: 0
        }, {
          name: "a_offsetAndNormal",
          count: 4,
          type: 5120,
          offset: 4,
          stride: 12,
          normalized: !1,
          divisor: 0
        }, {
          name: "a_accumulatedDistance",
          count: 2,
          type: 5123,
          offset: 8,
          stride: 12,
          normalized: !1,
          divisor: 0
        }]
      }, f.lineVertexAttributesDD = {
        geometry: [{
          name: "a_pos",
          count: 2,
          type: 5122,
          offset: 0,
          stride: 20,
          normalized: !1,
          divisor: 0
        }, {
          name: "a_offsetAndNormal",
          count: 4,
          type: 5120,
          offset: 4,
          stride: 20,
          normalized: !1,
          divisor: 0
        }, {
          name: "a_accumulatedDistance",
          count: 2,
          type: 5122,
          offset: 8,
          stride: 20,
          normalized: !1,
          divisor: 0
        }, {
          name: "a_color",
          count: 4,
          type: 5121,
          offset: 12,
          stride: 20,
          normalized: !0,
          divisor: 0
        }, {
          name: "a_width",
          count: 1,
          type: 5126,
          offset: 16,
          stride: 20,
          normalized: !1,
          divisor: 0
        }]
      };

      var a = /*#__PURE__*/function (_o11) {
        _inherits(a, _o11);

        var _super7 = _createSuper(a);

        function a(e) {
          var _this17;

          _classCallCheck(this, a);

          _this17 = _super7.call(this, e), _this17.type = 1, _this17.fillIndexStart = 0, _this17.fillIndexCount = 0, _this17.outlineIndexStart = 0, _this17.outlineIndexCount = 0;
          var t = _this17.bufferDataOffset;
          var r = new Uint32Array(e);
          _this17.fillIndexStart = r[t++], _this17.fillIndexCount = r[t++], _this17.outlineIndexStart = r[t++], _this17.outlineIndexCount = r[t++], _this17.isFillDataDriven = !!r[t++], _this17.isOutlineDataDriven = !!r[t++], _this17.bufferDataOffset = t;
          return _this17;
        }

        _createClass(a, [{
          key: "hasData",
          value: function hasData() {
            return this.fillIndexCount > 0 || this.outlineIndexCount > 0;
          }
        }, {
          key: "triangleCount",
          value: function triangleCount() {
            return (this.fillIndexCount + this.outlineIndexCount) / 3;
          }
        }, {
          key: "doDestroy",
          value: function doDestroy() {
            Object(_core_maybe_js__WEBPACK_IMPORTED_MODULE_1__["isSome"])(this.fillVertexArrayObject) && this.fillVertexArrayObject.dispose(), Object(_core_maybe_js__WEBPACK_IMPORTED_MODULE_1__["isSome"])(this.fillVertexBuffer) && this.fillVertexBuffer.dispose(), Object(_core_maybe_js__WEBPACK_IMPORTED_MODULE_1__["isSome"])(this.fillIndexBuffer) && this.fillIndexBuffer.dispose(), this.fillVertexArrayObject = null, this.fillVertexBuffer = null, this.fillIndexBuffer = null, Object(_core_maybe_js__WEBPACK_IMPORTED_MODULE_1__["isSome"])(this.outlineVertexArrayObject) && this.outlineVertexArrayObject.dispose(), Object(_core_maybe_js__WEBPACK_IMPORTED_MODULE_1__["isSome"])(this.outlineVertexBuffer) && this.outlineVertexBuffer.dispose(), Object(_core_maybe_js__WEBPACK_IMPORTED_MODULE_1__["isSome"])(this.outlineIndexBuffer) && this.outlineIndexBuffer.dispose(), this.outlineVertexArrayObject = null, this.outlineVertexBuffer = null, this.outlineIndexBuffer = null, this.memoryUsed = 0;
          }
        }, {
          key: "doPrepareForRendering",
          value: function doPrepareForRendering(e, t, r, n) {
            var o = new Uint32Array(r),
                f = new Int32Array(o.buffer),
                l = o[n++];
            this.fillVertexBuffer = _webgl_BufferObject_js__WEBPACK_IMPORTED_MODULE_4__["default"].createVertex(e, 35044, new Int32Array(f.buffer, 4 * n, l)), n += l;
            var u = o[n++];
            this.fillIndexBuffer = _webgl_BufferObject_js__WEBPACK_IMPORTED_MODULE_4__["default"].createIndex(e, 35044, new Uint32Array(o.buffer, 4 * n, u)), n += u;
            var c = o[n++];
            this.outlineVertexBuffer = _webgl_BufferObject_js__WEBPACK_IMPORTED_MODULE_4__["default"].createVertex(e, 35044, new Int32Array(f.buffer, 4 * n, c)), n += c;
            var d = o[n++];
            this.outlineIndexBuffer = _webgl_BufferObject_js__WEBPACK_IMPORTED_MODULE_4__["default"].createIndex(e, 35044, new Uint32Array(o.buffer, 4 * n, d)), n += d, this.fillVertexArrayObject = new _webgl_VertexArrayObject_js__WEBPACK_IMPORTED_MODULE_5__["default"](e, t.getProgramAttributes(1), this.isFillDataDriven ? a.fillVertexAttributesDD : a.fillVertexAttributes, {
              geometry: this.fillVertexBuffer
            }, this.fillIndexBuffer), this.outlineVertexArrayObject = new _webgl_VertexArrayObject_js__WEBPACK_IMPORTED_MODULE_5__["default"](e, t.getProgramAttributes(2), this.isOutlineDataDriven ? a.outlineVertexAttributesDD : a.outlineVertexAttributes, {
              geometry: this.outlineVertexBuffer
            }, this.outlineIndexBuffer);
          }
        }]);

        return a;
      }(o);

      a.fillVertexAttributes = {
        geometry: [{
          name: "a_pos",
          count: 2,
          type: 5122,
          offset: 0,
          stride: 4,
          normalized: !1,
          divisor: 0
        }]
      }, a.fillVertexAttributesDD = {
        geometry: [{
          name: "a_pos",
          count: 2,
          type: 5122,
          offset: 0,
          stride: 8,
          normalized: !1,
          divisor: 0
        }, {
          name: "a_color",
          count: 4,
          type: 5121,
          offset: 4,
          stride: 8,
          normalized: !0,
          divisor: 0
        }]
      }, a.outlineVertexAttributes = {
        geometry: [{
          name: "a_pos",
          count: 2,
          type: 5122,
          offset: 0,
          stride: 8,
          normalized: !1,
          divisor: 0
        }, {
          name: "a_offset",
          count: 2,
          type: 5120,
          offset: 4,
          stride: 8,
          normalized: !1,
          divisor: 0
        }, {
          name: "a_xnormal",
          count: 2,
          type: 5120,
          offset: 6,
          stride: 8,
          normalized: !1,
          divisor: 0
        }]
      }, a.outlineVertexAttributesDD = {
        geometry: [{
          name: "a_pos",
          count: 2,
          type: 5122,
          offset: 0,
          stride: 12,
          normalized: !1,
          divisor: 0
        }, {
          name: "a_offset",
          count: 2,
          type: 5120,
          offset: 4,
          stride: 12,
          normalized: !1,
          divisor: 0
        }, {
          name: "a_xnormal",
          count: 2,
          type: 5120,
          offset: 6,
          stride: 12,
          normalized: !1,
          divisor: 0
        }, {
          name: "a_color",
          count: 4,
          type: 5121,
          offset: 8,
          stride: 12,
          normalized: !0,
          divisor: 0
        }]
      };

      var l = /*#__PURE__*/function (_o12) {
        _inherits(l, _o12);

        var _super8 = _createSuper(l);

        function l(e, t) {
          var _this18;

          _classCallCheck(this, l);

          _this18 = _super8.call(this, e), _this18.type = 3, _this18.iconPerPageElementsMap = new Map(), _this18.glyphPerPageElementsMap = new Map(), _this18.symbolInstances = [], _this18.isIconSDF = !1, _this18.opacityChanged = !1, _this18.lastOpacityUpdate = 0, _this18.symbols = [];
          var r = _this18.bufferDataOffset;
          var i = new Uint32Array(e),
              s = new Int32Array(e),
              o = new Float32Array(e);
          _this18.isIconSDF = !!i[r++], _this18.isIconDataDriven = !!i[r++], _this18.isTextDataDriven = !!i[r++];
          var f = i[r++];

          for (var _e54 = 0; _e54 < f; _e54++) {
            var _e55 = i[r++],
                _t20 = i[r++],
                _s28 = i[r++];

            _this18.iconPerPageElementsMap.set(_e55, [_t20, _s28]);
          }

          var a = i[r++];

          for (var _e56 = 0; _e56 < a; _e56++) {
            var _e57 = i[r++],
                _t21 = i[r++],
                _s29 = i[r++];

            _this18.glyphPerPageElementsMap.set(_e57, [_t21, _s29]);
          }

          var _l21 = i[r++],
              u = i[r++];
          _this18.iconOpacity = new Int32Array(_l21), _this18.textOpacity = new Int32Array(u), r = Object(_decluttering_util_js__WEBPACK_IMPORTED_MODULE_8__["deserializeSymbols"])(i, s, o, r, _this18.symbols, t), _this18.bufferDataOffset = r;
          return _this18;
        }

        _createClass(l, [{
          key: "hasData",
          value: function hasData() {
            return this.iconPerPageElementsMap.size > 0 || this.glyphPerPageElementsMap.size > 0;
          }
        }, {
          key: "triangleCount",
          value: function triangleCount() {
            var e = 0;
            return this.iconPerPageElementsMap.forEach(function (t) {
              e += t[1];
            }), this.glyphPerPageElementsMap.forEach(function (t) {
              e += t[1];
            }), e / 3;
          }
        }, {
          key: "doDestroy",
          value: function doDestroy() {
            Object(_core_maybe_js__WEBPACK_IMPORTED_MODULE_1__["isSome"])(this.iconVertexArrayObject) && this.iconVertexArrayObject.dispose(), Object(_core_maybe_js__WEBPACK_IMPORTED_MODULE_1__["isSome"])(this.iconVertexBuffer) && this.iconVertexBuffer.dispose(), Object(_core_maybe_js__WEBPACK_IMPORTED_MODULE_1__["isSome"])(this.iconOpacityBuffer) && this.iconOpacityBuffer.dispose(), Object(_core_maybe_js__WEBPACK_IMPORTED_MODULE_1__["isSome"])(this.iconIndexBuffer) && this.iconIndexBuffer.dispose(), this.iconVertexArrayObject = null, this.iconVertexBuffer = null, this.iconOpacityBuffer = null, this.iconIndexBuffer = null, Object(_core_maybe_js__WEBPACK_IMPORTED_MODULE_1__["isSome"])(this.textVertexArrayObject) && this.textVertexArrayObject.dispose(), Object(_core_maybe_js__WEBPACK_IMPORTED_MODULE_1__["isSome"])(this.textVertexBuffer) && this.textVertexBuffer.dispose(), Object(_core_maybe_js__WEBPACK_IMPORTED_MODULE_1__["isSome"])(this.textOpacityBuffer) && this.textOpacityBuffer.dispose(), Object(_core_maybe_js__WEBPACK_IMPORTED_MODULE_1__["isSome"])(this.textIndexBuffer) && this.textIndexBuffer.dispose(), this.textVertexArrayObject = null, this.textVertexBuffer = null, this.textOpacityBuffer = null, this.textIndexBuffer = null, this.memoryUsed = 0;
          }
        }, {
          key: "updateOpacityInfo",
          value: function updateOpacityInfo() {
            if (!this.opacityChanged) return;
            this.opacityChanged = !1;
            var e = Object(_core_maybe_js__WEBPACK_IMPORTED_MODULE_1__["unwrap"])(this.iconOpacity),
                t = Object(_core_maybe_js__WEBPACK_IMPORTED_MODULE_1__["unwrap"])(this.iconOpacityBuffer);
            e.length > 0 && e.byteLength === t.size && t.setSubData(e);
            var i = Object(_core_maybe_js__WEBPACK_IMPORTED_MODULE_1__["unwrap"])(this.textOpacity),
                s = Object(_core_maybe_js__WEBPACK_IMPORTED_MODULE_1__["unwrap"])(this.textOpacityBuffer);
            i.length > 0 && i.byteLength === s.size && s.setSubData(i);
          }
        }, {
          key: "doPrepareForRendering",
          value: function doPrepareForRendering(e, t, n, o) {
            var f = new Uint32Array(n),
                a = new Int32Array(f.buffer),
                u = f[o++];
            this.iconVertexBuffer = _webgl_BufferObject_js__WEBPACK_IMPORTED_MODULE_4__["default"].createVertex(e, 35044, new Int32Array(a.buffer, 4 * o, u)), o += u;
            var c = f[o++];
            this.iconIndexBuffer = _webgl_BufferObject_js__WEBPACK_IMPORTED_MODULE_4__["default"].createIndex(e, 35044, new Uint32Array(f.buffer, 4 * o, c)), o += c;
            var d = f[o++];
            this.textVertexBuffer = _webgl_BufferObject_js__WEBPACK_IMPORTED_MODULE_4__["default"].createVertex(e, 35044, new Int32Array(a.buffer, 4 * o, d)), o += d;
            var h = f[o++];
            this.textIndexBuffer = _webgl_BufferObject_js__WEBPACK_IMPORTED_MODULE_4__["default"].createIndex(e, 35044, new Uint32Array(f.buffer, 4 * o, h)), o += h, this.iconOpacityBuffer = _webgl_BufferObject_js__WEBPACK_IMPORTED_MODULE_4__["default"].createVertex(e, 35044, Object(_core_maybe_js__WEBPACK_IMPORTED_MODULE_1__["unwrap"])(this.iconOpacity).buffer), this.textOpacityBuffer = _webgl_BufferObject_js__WEBPACK_IMPORTED_MODULE_4__["default"].createVertex(e, 35044, Object(_core_maybe_js__WEBPACK_IMPORTED_MODULE_1__["unwrap"])(this.textOpacity).buffer), this.iconVertexArrayObject = new _webgl_VertexArrayObject_js__WEBPACK_IMPORTED_MODULE_5__["default"](e, t.getProgramAttributes(4), this.isIconDataDriven ? l.vertexAttributesDD : l.vertexAttributes, {
              geometry: this.iconVertexBuffer,
              opacity: this.iconOpacityBuffer
            }, this.iconIndexBuffer), this.textVertexArrayObject = new _webgl_VertexArrayObject_js__WEBPACK_IMPORTED_MODULE_5__["default"](e, t.getProgramAttributes(6), this.isTextDataDriven ? l.vertexAttributesDD : l.vertexAttributes, {
              geometry: this.textVertexBuffer,
              opacity: this.textOpacityBuffer
            }, this.textIndexBuffer);
          }
        }]);

        return l;
      }(o);

      l.vertexAttributes = {
        geometry: [{
          name: "a_pos",
          count: 2,
          type: 5122,
          offset: 0,
          stride: 16,
          normalized: !1,
          divisor: 0
        }, {
          name: "a_vertexOffset",
          count: 2,
          type: 5122,
          offset: 4,
          stride: 16,
          normalized: !1,
          divisor: 0
        }, {
          name: "a_texAngleRange",
          count: 4,
          type: 5121,
          offset: 8,
          stride: 16,
          normalized: !1,
          divisor: 0
        }, {
          name: "a_levelInfo",
          count: 4,
          type: 5121,
          offset: 12,
          stride: 16,
          normalized: !1,
          divisor: 0
        }],
        opacity: [{
          name: "a_opacityInfo",
          count: 1,
          type: 5121,
          offset: 0,
          stride: 1,
          normalized: !1,
          divisor: 0
        }]
      }, l.vertexAttributesDD = {
        geometry: [{
          name: "a_pos",
          count: 2,
          type: 5122,
          offset: 0,
          stride: 24,
          normalized: !1,
          divisor: 0
        }, {
          name: "a_vertexOffset",
          count: 2,
          type: 5122,
          offset: 4,
          stride: 24,
          normalized: !1,
          divisor: 0
        }, {
          name: "a_texAngleRange",
          count: 4,
          type: 5121,
          offset: 8,
          stride: 24,
          normalized: !1,
          divisor: 0
        }, {
          name: "a_levelInfo",
          count: 4,
          type: 5121,
          offset: 12,
          stride: 24,
          normalized: !1,
          divisor: 0
        }, {
          name: "a_color",
          count: 4,
          type: 5121,
          offset: 16,
          stride: 24,
          normalized: !0,
          divisor: 0
        }, {
          name: "a_size",
          count: 1,
          type: 5126,
          offset: 20,
          stride: 24,
          normalized: !1,
          divisor: 0
        }],
        opacity: [{
          name: "a_opacityInfo",
          count: 1,
          type: 5121,
          offset: 0,
          stride: 1,
          normalized: !1,
          divisor: 0
        }]
      };

      var u = /*#__PURE__*/function (_o13) {
        _inherits(u, _o13);

        var _super9 = _createSuper(u);

        function u(e) {
          var _this19;

          _classCallCheck(this, u);

          _this19 = _super9.call(this, e), _this19.type = 4, _this19.circleIndexStart = 0, _this19.circleIndexCount = 0;
          var t = _this19.bufferDataOffset;
          var r = new Uint32Array(e);
          _this19.circleIndexStart = r[t++], _this19.circleIndexCount = r[t++], _this19.bufferDataOffset = t;
          return _this19;
        }

        _createClass(u, [{
          key: "hasData",
          value: function hasData() {
            return this.circleIndexCount > 0;
          }
        }, {
          key: "triangleCount",
          value: function triangleCount() {
            return this.circleIndexCount / 3;
          }
        }, {
          key: "doDestroy",
          value: function doDestroy() {
            Object(_core_maybe_js__WEBPACK_IMPORTED_MODULE_1__["isSome"])(this.circleVertexArrayObject) && this.circleVertexArrayObject.dispose(), Object(_core_maybe_js__WEBPACK_IMPORTED_MODULE_1__["isSome"])(this.circleVertexBuffer) && this.circleVertexBuffer.dispose(), Object(_core_maybe_js__WEBPACK_IMPORTED_MODULE_1__["isSome"])(this.circleIndexBuffer) && this.circleIndexBuffer.dispose(), this.circleVertexArrayObject = null, this.circleVertexBuffer = null, this.circleIndexBuffer = null, this.memoryUsed = 0;
          }
        }, {
          key: "doPrepareForRendering",
          value: function doPrepareForRendering(e, t, r, n) {
            var o = new Uint32Array(r),
                f = new Int32Array(o.buffer),
                a = o[n++];
            this.circleVertexBuffer = _webgl_BufferObject_js__WEBPACK_IMPORTED_MODULE_4__["default"].createVertex(e, 35044, new Int32Array(f.buffer, 4 * n, a)), n += a;
            var l = o[n++];
            this.circleIndexBuffer = _webgl_BufferObject_js__WEBPACK_IMPORTED_MODULE_4__["default"].createIndex(e, 35044, new Uint32Array(o.buffer, 4 * n, l)), n += l, this.circleVertexArrayObject = new _webgl_VertexArrayObject_js__WEBPACK_IMPORTED_MODULE_5__["default"](e, t.getProgramAttributes(5), u.circleVertexAttributes, {
              geometry: this.circleVertexBuffer
            }, this.circleIndexBuffer);
          }
        }]);

        return u;
      }(o);

      u.circleVertexAttributes = {
        geometry: [{
          name: "a_pos",
          count: 2,
          type: 5122,
          offset: 0,
          stride: 16,
          normalized: !1,
          divisor: 0
        }, {
          name: "a_color",
          count: 4,
          type: 5121,
          offset: 4,
          stride: 16,
          normalized: !0,
          divisor: 0
        }, {
          name: "a_stroke_color",
          count: 4,
          type: 5121,
          offset: 8,
          stride: 16,
          normalized: !0,
          divisor: 0
        }, {
          name: "a_data",
          count: 4,
          type: 5121,
          offset: 12,
          stride: 16,
          normalized: !1,
          divisor: 0
        }]
      };
      /***/
    },

    /***/
    "Zrl8":
    /*!*****************************************************************************!*\
      !*** ./node_modules/@arcgis/core/views/2d/engine/vectorTiles/VectorTile.js ***!
      \*****************************************************************************/

    /*! exports provided: VectorTile */

    /***/
    function Zrl8(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "VectorTile", function () {
        return y;
      });
      /* harmony import */


      var _chunks_mat3_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ../../../../chunks/mat3.js */
      "HJJS");
      /* harmony import */


      var _chunks_mat3f32_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ../../../../chunks/mat3f32.js */
      "jHF5");
      /* harmony import */


      var _decluttering_config_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./decluttering/config.js */
      "2yHJ");
      /* harmony import */


      var _RenderBucket_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./RenderBucket.js */
      "WDSG");
      /* harmony import */


      var _webgl_TiledDisplayObject_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ../webgl/TiledDisplayObject.js */
      "5LEI");
      /*
      All material copyright ESRI, All Rights Reserved, unless otherwise specified.
      See https://js.arcgis.com/4.18/esri/copyright.txt for details.
      */


      var y = /*#__PURE__*/function (_webgl_TiledDisplayOb) {
        _inherits(y, _webgl_TiledDisplayOb);

        var _super10 = _createSuper(y);

        function y(e, t, s, a) {
          var _this20;

          _classCallCheck(this, y);

          _this20 = _super10.call(this, e, s, a, [4096, 4096]), _this20._referenced = 0, _this20._hasSymbolBuckets = !1, _this20._memoryUsedByLayerData = 0, _this20.layerData = new Map(), _this20.layerCount = 0, _this20.status = "loading", _this20.allSymbolsFadingOut = !1, _this20.lastOpacityUpdate = 0, _this20.symbols = new Map(), _this20.isCoverage = !1, _this20.neededForCoverage = !1, _this20.decluttered = !1, _this20.invalidating = !1, _this20.parentTile = null, _this20.childrenTiles = new Set(), _this20._processed = !1, _this20._referenced = 1, _this20.styleRepository = t, _this20.id = e.id, _this20.transforms.tileUnitsToPixels = Object(_chunks_mat3f32_js__WEBPACK_IMPORTED_MODULE_1__["c"])();
          return _this20;
        }

        _createClass(y, [{
          key: "hasSymbolBuckets",
          get: function get() {
            return this._hasSymbolBuckets;
          }
        }, {
          key: "isFading",
          get: function get() {
            return this._hasSymbolBuckets && performance.now() - this.lastOpacityUpdate < _decluttering_config_js__WEBPACK_IMPORTED_MODULE_2__["FADE_DURATION"];
          }
        }, {
          key: "isHoldingForFade",
          get: function get() {
            return this._hasSymbolBuckets && (!this.allSymbolsFadingOut || performance.now() - this.lastOpacityUpdate < _decluttering_config_js__WEBPACK_IMPORTED_MODULE_2__["FADE_DURATION"]);
          }
        }, {
          key: "wasRequested",
          get: function get() {
            return "errored" === this.status || "loaded" === this.status || "reloading" === this.status;
          }
        }, {
          key: "setData",
          value: function setData(e) {
            this.changeDataImpl(e), this.requestRender(), this.ready(), this.invalidating = !1, this._processed = !0;
          }
        }, {
          key: "deleteLayerData",
          value: function deleteLayerData(e) {
            var t = !1;

            var _iterator59 = _createForOfIteratorHelper(e),
                _step59;

            try {
              for (_iterator59.s(); !(_step59 = _iterator59.n()).done;) {
                var _s30 = _step59.value;

                if (this.layerData.has(_s30)) {
                  var _e58 = this.layerData.get(_s30);

                  this._memoryUsedByLayerData -= _e58.memoryUsed, 3 === _e58.type && this.symbols.has(_s30) && (this.symbols["delete"](_s30), t = !0), _e58.destroy(), this.layerData["delete"](_s30), this.layerCount--;
                }
              }
            } catch (err) {
              _iterator59.e(err);
            } finally {
              _iterator59.f();
            }

            t && this.emit("symbols-changed"), this.requestRender();
          }
        }, {
          key: "processed",
          value: function processed() {
            return this._processed;
          }
        }, {
          key: "hasData",
          value: function hasData() {
            return this.layerCount > 0;
          }
        }, {
          key: "dispose",
          value: function dispose() {
            y._destroyRenderBuckets(this.layerData), this.layerData = null, this.layerCount = 0, this._memoryUsedByLayerData = 0, this.destroy();
          }
        }, {
          key: "release",
          value: function release() {
            return 0 == --this._referenced && (this.dispose(), this.stage = null, !0);
          }
        }, {
          key: "reference",
          value: function reference() {
            ++this._referenced;
          }
        }, {
          key: "referenced",
          get: function get() {
            return this._referenced;
          }
        }, {
          key: "getMemoryUsage",
          value: function getMemoryUsage() {
            return this._memoryUsedByLayerData / (this._referenced || 1);
          }
        }, {
          key: "changeDataImpl",
          value: function changeDataImpl(e) {
            var t = !1;

            if (e) {
              var _s31 = this._createRenderBuckets(e);

              var _iterator60 = _createForOfIteratorHelper(_s31),
                  _step60;

              try {
                for (_iterator60.s(); !(_step60 = _iterator60.n()).done;) {
                  var _step60$value = _slicedToArray(_step60.value, 2),
                      _e59 = _step60$value[0],
                      a = _step60$value[1];

                  if (this.layerData.has(_e59)) {
                    var _t22 = this.layerData.get(_e59);

                    this._memoryUsedByLayerData -= a.memoryUsed, _t22.destroy(), this.layerData["delete"](_e59), this.layerCount--;
                  }

                  3 === a.type && (this.symbols.set(_e59, a.symbols), t = !0), this._memoryUsedByLayerData += a.memoryUsed, this.layerData.set(_e59, a), this.layerCount++;
                }
              } catch (err) {
                _iterator60.e(err);
              } finally {
                _iterator60.f();
              }
            }

            this._hasSymbolBuckets = !1;

            var _iterator61 = _createForOfIteratorHelper(this.layerData),
                _step61;

            try {
              for (_iterator61.s(); !(_step61 = _iterator61.n()).done;) {
                var _step61$value = _slicedToArray(_step61.value, 2),
                    _e60 = _step61$value[0],
                    _t23 = _step61$value[1];

                3 === _t23.type && (this._hasSymbolBuckets = !0);
              }
            } catch (err) {
              _iterator61.e(err);
            } finally {
              _iterator61.f();
            }

            t && this.emit("symbols-changed");
          }
        }, {
          key: "attachWithContext",
          value: function attachWithContext(e) {
            this.stage = {
              context: e,
              trashDisplayObject: function trashDisplayObject(e) {
                e.processDetach();
              },
              untrashDisplayObject: function untrashDisplayObject() {
                return !1;
              }
            };
          }
        }, {
          key: "setTransform",
          value: function setTransform(r, i) {
            _get(_getPrototypeOf(y.prototype), "setTransform", this).call(this, r, i);

            var o = i / (r.resolution * r.pixelRatio),
                h = this.size[0] / this.coordRange[0] * o,
                n = this.size[1] / this.coordRange[1] * o,
                l = [0, 0];
            r.toScreen(l, this.coords);
            var c = this.transforms.tileUnitsToPixels;
            Object(_chunks_mat3_js__WEBPACK_IMPORTED_MODULE_0__["i"])(c), Object(_chunks_mat3_js__WEBPACK_IMPORTED_MODULE_0__["a"])(c, c, l), Object(_chunks_mat3_js__WEBPACK_IMPORTED_MODULE_0__["r"])(c, c, Math.PI * r.rotation / 180), Object(_chunks_mat3_js__WEBPACK_IMPORTED_MODULE_0__["c"])(c, c, [h, n, 1]);
          }
        }, {
          key: "_createRenderBuckets",
          value: function _createRenderBuckets(e) {
            var t = new Map(),
                s = new Map();

            var _iterator62 = _createForOfIteratorHelper(e),
                _step62;

            try {
              for (_iterator62.s(); !(_step62 = _iterator62.n()).done;) {
                var a = _step62.value;

                var _e61 = this._deserializeBucket(a, s);

                var _iterator63 = _createForOfIteratorHelper(_e61.layerUIDs),
                    _step63;

                try {
                  for (_iterator63.s(); !(_step63 = _iterator63.n()).done;) {
                    var _s32 = _step63.value;
                    t.set(_s32, _e61);
                  }
                } catch (err) {
                  _iterator63.e(err);
                } finally {
                  _iterator63.f();
                }
              }
            } catch (err) {
              _iterator62.e(err);
            } finally {
              _iterator62.f();
            }

            return t;
          }
        }, {
          key: "_deserializeBucket",
          value: function _deserializeBucket(e, t) {
            var s = t.get(e);
            if (s) return s;

            switch (new Uint32Array(e)[0]) {
              case 1:
                s = new _RenderBucket_js__WEBPACK_IMPORTED_MODULE_3__["FillRenderBucket"](e);
                break;

              case 2:
                s = new _RenderBucket_js__WEBPACK_IMPORTED_MODULE_3__["LineRenderBucket"](e);
                break;

              case 3:
                s = new _RenderBucket_js__WEBPACK_IMPORTED_MODULE_3__["SymbolRenderBucket"](e, this);
                break;

              case 4:
                s = new _RenderBucket_js__WEBPACK_IMPORTED_MODULE_3__["CircleRenderBucket"](e);
            }

            return t.set(e, s), s;
          }
        }], [{
          key: "_destroyRenderBuckets",
          value: function _destroyRenderBuckets(e) {
            var t = new Set();
            e.forEach(function (e) {
              t.has(e) || (e.destroy(), t.add(e));
            }), e.clear();
          }
        }]);

        return y;
      }(_webgl_TiledDisplayObject_js__WEBPACK_IMPORTED_MODULE_4__["TiledDisplayObject"]);
      /***/

    },

    /***/
    "ZyIX":
    /*!**************************************************************************!*\
      !*** ./node_modules/@arcgis/core/views/2d/engine/webgl/TileContainer.js ***!
      \**************************************************************************/

    /*! exports provided: default, sortByLevel */

    /***/
    function ZyIX(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "sortByLevel", function () {
        return n;
      });
      /* harmony import */


      var _enums_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ./enums.js */
      "yE7X");
      /* harmony import */


      var _brushes_WGLBrushInfo_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./brushes/WGLBrushInfo.js */
      "b3VY");
      /* harmony import */


      var _brushes_WGLBrushStencil_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./brushes/WGLBrushStencil.js */
      "7F7D");
      /* harmony import */


      var _WGLContainer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./WGLContainer.js */
      "mgI5");
      /*
      All material copyright ESRI, All Rights Reserved, unless otherwise specified.
      See https://js.arcgis.com/4.18/esri/copyright.txt for details.
      */


      var n = function n(e, r) {
        return e.key.level - r.key.level != 0 ? e.key.level - r.key.level : e.key.row - r.key.row != 0 ? e.key.row - r.key.row : e.key.col - r.key.col;
      };
      /* harmony default export */


      __webpack_exports__["default"] = /*#__PURE__*/function (_WGLContainer_js__WEB) {
        _inherits(_class5, _WGLContainer_js__WEB);

        var _super11 = _createSuper(_class5);

        function _class5(e) {
          var _this21;

          _classCallCheck(this, _class5);

          _this21 = _super11.call(this), _this21._tileInfoView = e;
          return _this21;
        }

        _createClass(_class5, [{
          key: "renderChildren",
          value: function renderChildren(e) {
            this.sortChildren(n), this.setStencilReference(), _get(_getPrototypeOf(_class5.prototype), "renderChildren", this).call(this, e);
          }
        }, {
          key: "createRenderParams",
          value: function createRenderParams(e) {
            var r = e.state;
            return _objectSpread(_objectSpread({}, _get(_getPrototypeOf(_class5.prototype), "createRenderParams", this).call(this, e)), {}, {
              requiredLevel: this._tileInfoView.getClosestInfoForScale(r.scale).level,
              displayLevel: this._tileInfoView.tileInfo.scaleToZoom(r.scale)
            });
          }
        }, {
          key: "prepareRenderPasses",
          value: function prepareRenderPasses(t) {
            var _this22 = this;

            var n = t.registerRenderPass({
              name: "stencil",
              brushes: [_brushes_WGLBrushStencil_js__WEBPACK_IMPORTED_MODULE_2__["default"]],
              drawPhase: _enums_js__WEBPACK_IMPORTED_MODULE_0__["WGLDrawPhase"].DEBUG | _enums_js__WEBPACK_IMPORTED_MODULE_0__["WGLDrawPhase"].MAP | _enums_js__WEBPACK_IMPORTED_MODULE_0__["WGLDrawPhase"].HIGHLIGHT,
              target: function target() {
                return _this22.getStencilTarget();
              }
            }),
                i = t.registerRenderPass({
              name: "tileInfo",
              brushes: [_brushes_WGLBrushInfo_js__WEBPACK_IMPORTED_MODULE_1__["default"]],
              drawPhase: _enums_js__WEBPACK_IMPORTED_MODULE_0__["WGLDrawPhase"].DEBUG,
              target: function target() {
                return _this22.children;
              },
              has: "esri-tiles-debug"
            });
            return [].concat(_toConsumableArray(_get(_getPrototypeOf(_class5.prototype), "prepareRenderPasses", this).call(this, t)), [n, i]);
          }
        }, {
          key: "getStencilTarget",
          value: function getStencilTarget() {
            return this.children;
          }
        }, {
          key: "updateTransforms",
          value: function updateTransforms(e) {
            var _iterator64 = _createForOfIteratorHelper(this.children),
                _step64;

            try {
              for (_iterator64.s(); !(_step64 = _iterator64.n()).done;) {
                var _r15 = _step64.value;

                var _s33 = this._tileInfoView.getTileResolution(_r15.key);

                _r15.setTransform(e, _s33);
              }
            } catch (err) {
              _iterator64.e(err);
            } finally {
              _iterator64.f();
            }
          }
        }, {
          key: "setStencilReference",
          value: function setStencilReference() {
            var e = 1;

            var _iterator65 = _createForOfIteratorHelper(this.children),
                _step65;

            try {
              for (_iterator65.s(); !(_step65 = _iterator65.n()).done;) {
                var _r16 = _step65.value;
                _r16.stencilRef = e++;
              }
            } catch (err) {
              _iterator65.e(err);
            } finally {
              _iterator65.f();
            }
          }
        }]);

        return _class5;
      }(_WGLContainer_js__WEBPACK_IMPORTED_MODULE_3__["default"]);
      /***/

    },

    /***/
    "dcV5":
    /*!******************************************************************************!*\
      !*** ./node_modules/@arcgis/core/views/2d/engine/vectorTiles/GlyphSource.js ***!
      \******************************************************************************/

    /*! exports provided: default */

    /***/
    function dcV5(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony import */


      var _core_has_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ../../../../core/has.js */
      "wSAH");
      /* harmony import */


      var _core_promiseUtils_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ../../../../core/promiseUtils.js */
      "9MzC");
      /* harmony import */


      var _request_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ../../../../request.js */
      "Lqtk");
      /* harmony import */


      var _core_pbf_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ../../../../core/pbf.js */
      "ATu9");
      /*
      All material copyright ESRI, All Rights Reserved, unless otherwise specified.
      See https://js.arcgis.com/4.18/esri/copyright.txt for details.
      */


      var a = /*#__PURE__*/function () {
        function a(t) {
          _classCallCheck(this, a);

          if (this._metrics = [], this._bitmaps = [], t) for (; t.next();) {
            switch (t.tag()) {
              case 1:
                {
                  var _e62 = t.getMessage();

                  for (; _e62.next();) {
                    switch (_e62.tag()) {
                      case 3:
                        {
                          var _t24 = _e62.getMessage();

                          var _s34 = void 0,
                              _a5 = void 0,
                              _r17 = void 0,
                              n = void 0,
                              _i16 = void 0,
                              c = void 0,
                              g = void 0;

                          for (; _t24.next();) {
                            switch (_t24.tag()) {
                              case 1:
                                _s34 = _t24.getUInt32();
                                break;

                              case 2:
                                _a5 = _t24.getBytes();
                                break;

                              case 3:
                                _r17 = _t24.getUInt32();
                                break;

                              case 4:
                                n = _t24.getUInt32();
                                break;

                              case 5:
                                _i16 = _t24.getSInt32();
                                break;

                              case 6:
                                c = _t24.getSInt32();
                                break;

                              case 7:
                                g = _t24.getUInt32();
                                break;

                              default:
                                _t24.skip();

                            }
                          }

                          _t24.release(), _s34 && (this._metrics[_s34] = {
                            width: _r17,
                            height: n,
                            left: _i16,
                            top: c,
                            advance: g
                          }, this._bitmaps[_s34] = _a5);
                          break;
                        }

                      default:
                        _e62.skip();

                    }
                  }

                  _e62.release();

                  break;
                }

              default:
                t.skip();
            }
          }
        }

        _createClass(a, [{
          key: "getMetrics",
          value: function getMetrics(t) {
            return this._metrics[t];
          }
        }, {
          key: "getBitmap",
          value: function getBitmap(t) {
            return this._bitmaps[t];
          }
        }]);

        return a;
      }();

      var r = /*#__PURE__*/function () {
        function r() {
          _classCallCheck(this, r);

          this._ranges = [];
        }

        _createClass(r, [{
          key: "getRange",
          value: function getRange(t) {
            return this._ranges[t];
          }
        }, {
          key: "addRange",
          value: function addRange(t, e) {
            this._ranges[t] = e;
          }
        }]);

        return r;
      }();
      /* harmony default export */


      __webpack_exports__["default"] = /*#__PURE__*/function () {
        function _class6(t) {
          _classCallCheck(this, _class6);

          this._glyphInfo = {}, this._baseURL = t;
        }

        _createClass(_class6, [{
          key: "getRange",
          value: function getRange(r, n) {
            var i = this._getFontStack(r);

            if (i.getRange(n)) return Object(_core_promiseUtils_js__WEBPACK_IMPORTED_MODULE_1__["resolve"])();

            var c = 256 * n,
                g = c + 255,
                o = this._baseURL.replace("{fontstack}", r).replace("{range}", c + "-" + g);

            return Object(_request_js__WEBPACK_IMPORTED_MODULE_2__["default"])(o, {
              responseType: "array-buffer"
            }).then(function (t) {
              i.addRange(n, new a(new _core_pbf_js__WEBPACK_IMPORTED_MODULE_3__["default"](new Uint8Array(t.data), new DataView(t.data))));
            })["catch"](function () {
              i.addRange(n, new a());
            });
          }
        }, {
          key: "getGlyph",
          value: function getGlyph(t, e) {
            var s = this._getFontStack(t);

            if (!s) return;
            var a = Math.floor(e / 256);
            if (a > 256) return;
            var r = s.getRange(a);
            return r ? {
              metrics: r.getMetrics(e),
              bitmap: r.getBitmap(e)
            } : void 0;
          }
        }, {
          key: "_getFontStack",
          value: function _getFontStack(t) {
            var e = this._glyphInfo[t];
            return e || (e = this._glyphInfo[t] = new r()), e;
          }
        }]);

        return _class6;
      }();
      /***/

    },

    /***/
    "ga/j":
    /*!******************************************************************************!*\
      !*** ./node_modules/@arcgis/core/views/2d/engine/vectorTiles/TileHandler.js ***!
      \******************************************************************************/

    /*! exports provided: TileHandler */

    /***/
    function gaJ(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "TileHandler", function () {
        return S;
      });
      /* harmony import */


      var _core_has_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ../../../../core/has.js */
      "wSAH");
      /* harmony import */


      var _core_maybe_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ../../../../core/maybe.js */
      "srIe");
      /* harmony import */


      var _core_promiseUtils_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ../../../../core/promiseUtils.js */
      "9MzC");
      /* harmony import */


      var _request_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ../../../../request.js */
      "Lqtk");
      /* harmony import */


      var _geometry_support_aaBoundingRect_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ../../../../geometry/support/aaBoundingRect.js */
      "kYAx");
      /* harmony import */


      var _core_MemCache_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ../../../../core/MemCache.js */
      "rvq7");
      /* harmony import */


      var _core_ItemCache_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ../../../../core/ItemCache.js */
      "1/KW");
      /* harmony import */


      var _core_workers_workers_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! ../../../../core/workers/workers.js */
      "36Co");
      /* harmony import */


      var _tiling_TileKey_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! ../../tiling/TileKey.js */
      "rlSK");
      /* harmony import */


      var _TileIndex_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! ./TileIndex.js */
      "JYLa");
      /* harmony import */


      var _VectorTile_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
      /*! ./VectorTile.js */
      "Zrl8");
      /* harmony import */


      var _GlyphMosaic_js__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
      /*! ./GlyphMosaic.js */
      "89j9");
      /* harmony import */


      var _GlyphSource_js__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
      /*! ./GlyphSource.js */
      "dcV5");
      /* harmony import */


      var _SpriteMosaic_js__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
      /*! ./SpriteMosaic.js */
      "E6Oc");
      /* harmony import */


      var _decluttering_debugging_js__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(
      /*! ./decluttering/debugging.js */
      "v3/X");
      /*
      All material copyright ESRI, All Rights Reserved, unless otherwise specified.
      See https://js.arcgis.com/4.18/esri/copyright.txt for details.
      */


      var R = new _core_ItemCache_js__WEBPACK_IMPORTED_MODULE_6__["default"](10),
          v = new Map();

      var S = /*#__PURE__*/function () {
        function S(e, t, s, i) {
          _classCallCheck(this, S);

          this._vectorTileLayer = e, this._styleRepository = t, this.devicePixelRatio = s, this._memCache = i, this._spriteMosaic = null, this._glyphMosaic = null, this._connection = null, this._ongoingTileRequests = new Map(), this._ongoingRequestToController = new Map();
        }

        _createClass(S, [{
          key: "destroy",
          value: function destroy() {
            this._ongoingTileRequests && this.abortAll(), this._connection && (this._connection.close(), this._connection = null), this._styleRepository = null, this._vectorTileLayer = null, this._spriteMosaic && (this._spriteMosaic = null), this._glyphMosaic && (this._glyphMosaic = null);
          }
        }, {
          key: "spriteMosaic",
          get: function get() {
            var _this23 = this;

            return this._spriteSourcePromise.then(function () {
              return _this23._spriteMosaic;
            });
          }
        }, {
          key: "glyphMosaic",
          get: function get() {
            return this._glyphMosaic;
          }
        }, {
          key: "start",
          value: function () {
            var _start2 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee7(t) {
              var _this24 = this;

              var s, r, o, _e63, a, n;

              return regeneratorRuntime.wrap(function _callee7$(_context7) {
                while (1) {
                  switch (_context7.prev = _context7.next) {
                    case 0:
                      s = this._vectorTileLayer, r = s.sourceNameToSource, o = [];

                      for (_e63 in r) {
                        o.push(this._fetchTileMap(r[_e63], t));
                      }

                      this._spriteSourcePromise = this._vectorTileLayer.loadSpriteSource(this.devicePixelRatio, t), this._spriteSourcePromise.then(function (e) {
                        _this24._spriteMosaic = new _SpriteMosaic_js__WEBPACK_IMPORTED_MODULE_13__["default"](1024, 1024, 250), _this24._spriteMosaic.setSpriteSource(e);
                      });
                      a = this._styleRepository, n = new _GlyphSource_js__WEBPACK_IMPORTED_MODULE_12__["default"](a.glyphs);
                      return _context7.abrupt("return", (this._glyphMosaic = new _GlyphMosaic_js__WEBPACK_IMPORTED_MODULE_11__["default"](1024, 1024, n), this._broadcastPromise = Object(_core_workers_workers_js__WEBPACK_IMPORTED_MODULE_7__["open"])("WorkerTileHandler", {
                        client: this,
                        scheduler: t.scheduler,
                        signal: t.signal
                      }).then(function (r) {
                        return _this24._connection = r, Object(_core_promiseUtils_js__WEBPACK_IMPORTED_MODULE_2__["all"])(_this24._connection.broadcast("setStyle", {
                          style: s.currentStyleInfo.style,
                          vectorTileLayerMaxBuffers: Object(_core_has_js__WEBPACK_IMPORTED_MODULE_0__["default"])("vectortilelayer-max-buffers")
                        }, t));
                      }), Object(_core_promiseUtils_js__WEBPACK_IMPORTED_MODULE_2__["all"])(o)));

                    case 5:
                    case "end":
                      return _context7.stop();
                  }
                }
              }, _callee7, this);
            }));

            function start(_x9) {
              return _start2.apply(this, arguments);
            }

            return start;
          }()
        }, {
          key: "updateStyle",
          value: function () {
            var _updateStyle = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee8(e) {
              var _this25 = this;

              return regeneratorRuntime.wrap(function _callee8$(_context8) {
                while (1) {
                  switch (_context8.prev = _context8.next) {
                    case 0:
                      _context8.next = 2;
                      return this._broadcastPromise;

                    case 2:
                      this._broadcastPromise = Object(_core_promiseUtils_js__WEBPACK_IMPORTED_MODULE_2__["create"])(function (t, s) {
                        Object(_core_promiseUtils_js__WEBPACK_IMPORTED_MODULE_2__["all"])(_this25._connection.broadcast("updateStyle", e)).then(t, s);
                      });
                      return _context8.abrupt("return", this._broadcastPromise);

                    case 4:
                    case "end":
                      return _context8.stop();
                  }
                }
              }, _callee8, this);
            }));

            function updateStyle(_x10) {
              return _updateStyle.apply(this, arguments);
            }

            return updateStyle;
          }()
        }, {
          key: "setStyle",
          value: function () {
            var _setStyle = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee9(t, s) {
              var _this26 = this;

              var o, a, _e64, n;

              return regeneratorRuntime.wrap(function _callee9$(_context9) {
                while (1) {
                  switch (_context9.prev = _context9.next) {
                    case 0:
                      _context9.next = 2;
                      return this._broadcastPromise;

                    case 2:
                      this._styleRepository = t;
                      o = this._vectorTileLayer.sourceNameToSource, a = [];

                      for (_e64 in o) {
                        a.push(this._fetchTileMap(o[_e64], null));
                      }

                      this._spriteSourcePromise = this._vectorTileLayer.loadSpriteSource(this.devicePixelRatio, null), this._spriteSourcePromise.then(function (e) {
                        _this26._spriteMosaic = new _SpriteMosaic_js__WEBPACK_IMPORTED_MODULE_13__["default"](1024, 1024, 250), _this26._spriteMosaic.setSpriteSource(e);
                      });
                      n = new _GlyphSource_js__WEBPACK_IMPORTED_MODULE_12__["default"](t.glyphs);
                      return _context9.abrupt("return", (this._glyphMosaic = new _GlyphMosaic_js__WEBPACK_IMPORTED_MODULE_11__["default"](1024, 1024, n), this._broadcastPromise = Object(_core_promiseUtils_js__WEBPACK_IMPORTED_MODULE_2__["create"])(function (t, r) {
                        Object(_core_promiseUtils_js__WEBPACK_IMPORTED_MODULE_2__["all"])(_this26._connection.broadcast("setStyle", {
                          style: s,
                          vectorTileLayerMaxBuffers: Object(_core_has_js__WEBPACK_IMPORTED_MODULE_0__["default"])("vectortilelayer-max-buffers")
                        })).then(t, r);
                      }), a.push(this._broadcastPromise), Object(_core_promiseUtils_js__WEBPACK_IMPORTED_MODULE_2__["all"])(a)));

                    case 8:
                    case "end":
                      return _context9.stop();
                  }
                }
              }, _callee9, this);
            }));

            function setStyle(_x11, _x12) {
              return _setStyle.apply(this, arguments);
            }

            return setStyle;
          }()
        }, {
          key: "getVectorTile",
          value: function getVectorTile(e, s, i, r) {
            var _this27 = this;

            var n = new _tiling_TileKey_js__WEBPACK_IMPORTED_MODULE_8__["default"](e, s, i, 0);

            if (Object(_core_maybe_js__WEBPACK_IMPORTED_MODULE_1__["isSome"])(this._memCache)) {
              var _e65 = this._memCache.get(n.id);

              if (Object(_core_maybe_js__WEBPACK_IMPORTED_MODULE_1__["isSome"])(_e65)) return _e65.reference(), Object(_core_promiseUtils_js__WEBPACK_IMPORTED_MODULE_2__["resolve"])(_e65);
            }

            return this._getVectorTileData(n).then(function (e) {
              if (Object(_core_promiseUtils_js__WEBPACK_IMPORTED_MODULE_2__["throwIfAborted"])(r), Object(_core_maybe_js__WEBPACK_IMPORTED_MODULE_1__["isSome"])(_this27._memCache)) {
                var _e66 = _this27._memCache.get(n.id);

                if (Object(_core_maybe_js__WEBPACK_IMPORTED_MODULE_1__["isSome"])(_e66)) return _e66.reference(), _e66;
              }

              if (!_this27._vectorTileLayer) return null;

              var s = _this27._vectorTileLayer.tileInfo.getTileBounds(Object(_geometry_support_aaBoundingRect_js__WEBPACK_IMPORTED_MODULE_4__["create"])(), n),
                  i = new _VectorTile_js__WEBPACK_IMPORTED_MODULE_10__["VectorTile"](n, _this27._styleRepository, s, [512, 512]);

              if (e && e.tileData) {
                if (i.setData(e.tileData), Object(_core_maybe_js__WEBPACK_IMPORTED_MODULE_1__["isSome"])(_this27._memCache)) {
                  i.reference();

                  var _e67 = i.getMemoryUsage();

                  _e67 > 0 && _this27._memCache.put(i.key.id, i, _e67 * i.referenced, _core_MemCache_js__WEBPACK_IMPORTED_MODULE_5__["MIN_PRIORITY"]);
                }
              } else i.setData(null);

              return i;
            });
          }
        }, {
          key: "releaseVectorTile",
          value: function releaseVectorTile(e) {
            Object(_core_maybe_js__WEBPACK_IMPORTED_MODULE_1__["isNone"])(this._memCache) || e.release() || this._memCache.updateSize(e.key.id, e, e.getMemoryUsage() * e.referenced);
          }
        }, {
          key: "fetchTileData",
          value: function fetchTileData(e, t) {
            var _this28 = this;

            return this._getRefKeys(e, t).then(function (e) {
              var s = _this28._vectorTileLayer.sourceNameToSource,
                  i = [];

              for (var _e68 in s) {
                i.push(_e68);
              }

              return _this28._getSourcesData(i, e, t);
            });
          }
        }, {
          key: "parseTileData",
          value: function parseTileData(t, s) {
            var _this29 = this;

            var i = t && t.data;
            if (!i) return Object(_core_promiseUtils_js__WEBPACK_IMPORTED_MODULE_2__["resolve"])(null);
            var r = i.sourceName2DataAndRefKey,
                a = i.transferList;
            return 0 === Object.keys(r).length ? Object(_core_promiseUtils_js__WEBPACK_IMPORTED_MODULE_2__["resolve"])(null) : this._broadcastPromise.then(function () {
              return _this29._connection.getAvailableClient().then(function (i) {
                return i.invoke("createTileAndParse", {
                  key: t.key.id,
                  sourceName2DataAndRefKey: r,
                  styleLayerUIDs: t.styleLayerUIDs
                }, _objectSpread(_objectSpread({}, s), {}, {
                  transferList: a
                })).then(function (t) {
                  if (Object(_core_has_js__WEBPACK_IMPORTED_MODULE_0__["default"])("esri-vector-tiles-debug")) {
                    var _e69 = {};

                    for (var _t25 in r) {
                      _e69[_t25] = r[_t25].refKey;
                    }

                    return {
                      tileData: t,
                      refKeys: _e69
                    };
                  }

                  return {
                    tileData: t
                  };
                });
              });
            });
          }
        }, {
          key: "updating",
          get: function get() {
            return this._ongoingTileRequests.size > 0;
          }
        }, {
          key: "abortAll",
          value: function abortAll() {
            this._ongoingRequestToController.forEach(function (e) {
              return e.abort();
            }), this._ongoingRequestToController.clear(), this._ongoingTileRequests.clear();
          }
        }, {
          key: "getSprites",
          value: function () {
            var _getSprites = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee10(e) {
              return regeneratorRuntime.wrap(function _callee10$(_context10) {
                while (1) {
                  switch (_context10.prev = _context10.next) {
                    case 0:
                      _context10.next = 2;
                      return this._spriteSourcePromise;

                    case 2:
                      return _context10.abrupt("return", this._spriteMosaic.getSpriteItems(e));

                    case 3:
                    case "end":
                      return _context10.stop();
                  }
                }
              }, _callee10, this);
            }));

            function getSprites(_x13) {
              return _getSprites.apply(this, arguments);
            }

            return getSprites;
          }()
        }, {
          key: "getGlyphs",
          value: function getGlyphs(e) {
            return this._glyphMosaic.getGlyphItems(e.font, e.codePoints);
          }
        }, {
          key: "perfReport",
          value: function perfReport(_ref3) {
            var e = _ref3.key,
                t = _ref3.milliseconds;
            Object(_decluttering_debugging_js__WEBPACK_IMPORTED_MODULE_14__["perfAdd"])(e, t, "ms");
          }
        }, {
          key: "_getTilePayload",
          value: function () {
            var _getTilePayload2 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee11(e, t, s) {
              var i, r;
              return regeneratorRuntime.wrap(function _callee11$(_context11) {
                while (1) {
                  switch (_context11.prev = _context11.next) {
                    case 0:
                      i = _tiling_TileKey_js__WEBPACK_IMPORTED_MODULE_8__["default"].pool.acquire(e.id), r = this._vectorTileLayer.sourceNameToSource[t].getSourceTileUrl(i.level, i.row, i.col);

                      _tiling_TileKey_js__WEBPACK_IMPORTED_MODULE_8__["default"].pool.release(i);

                      _context11.prev = 2;
                      _context11.next = 5;
                      return Object(_request_js__WEBPACK_IMPORTED_MODULE_3__["default"])(r, _objectSpread({
                        responseType: "array-buffer"
                      }, s));

                    case 5:
                      _context11.t0 = _context11.sent.data;
                      _context11.t1 = t;
                      return _context11.abrupt("return", {
                        protobuff: _context11.t0,
                        sourceName: _context11.t1
                      });

                    case 10:
                      _context11.prev = 10;
                      _context11.t2 = _context11["catch"](2);

                      if (!Object(_core_promiseUtils_js__WEBPACK_IMPORTED_MODULE_2__["isAbortError"])(_context11.t2)) {
                        _context11.next = 14;
                        break;
                      }

                      throw _context11.t2;

                    case 14:
                      return _context11.abrupt("return", {
                        protobuff: null,
                        sourceName: t
                      });

                    case 15:
                    case "end":
                      return _context11.stop();
                  }
                }
              }, _callee11, this, [[2, 10]]);
            }));

            function _getTilePayload(_x14, _x15, _x16) {
              return _getTilePayload2.apply(this, arguments);
            }

            return _getTilePayload;
          }()
        }, {
          key: "_fetchTileMap",
          value: function () {
            var _fetchTileMap2 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee12(e, t) {
              var s, i, r;
              return regeneratorRuntime.wrap(function _callee12$(_context12) {
                while (1) {
                  switch (_context12.prev = _context12.next) {
                    case 0:
                      if (!(e.capabilities.operations.supportsTileMap && e.tileIndex)) {
                        _context12.next = 2;
                        break;
                      }

                      return _context12.abrupt("return", Object(_core_promiseUtils_js__WEBPACK_IMPORTED_MODULE_2__["resolve"])());

                    case 2:
                      if (e.tileMapURL) {
                        _context12.next = 4;
                        break;
                      }

                      return _context12.abrupt("return");

                    case 4:
                      s = R.get(e.tileMapURL);

                      if (!s) {
                        _context12.next = 7;
                        break;
                      }

                      return _context12.abrupt("return", void (e.tileIndex = s));

                    case 7:
                      if (!v.has(e.tileMapURL)) {
                        _context12.next = 20;
                        break;
                      }

                      _context12.prev = 8;
                      _context12.next = 11;
                      return v.get(e.tileMapURL);

                    case 11:
                      i = _context12.sent;
                      e.tileIndex = new _TileIndex_js__WEBPACK_IMPORTED_MODULE_9__["default"](i.data);
                      _context12.next = 19;
                      break;

                    case 15:
                      _context12.prev = 15;
                      _context12.t0 = _context12["catch"](8);

                      if (!Object(_core_promiseUtils_js__WEBPACK_IMPORTED_MODULE_2__["isAbortError"])(_context12.t0)) {
                        _context12.next = 19;
                        break;
                      }

                      throw _context12.t0;

                    case 19:
                      return _context12.abrupt("return");

                    case 20:
                      r = Object(_request_js__WEBPACK_IMPORTED_MODULE_3__["default"])(e.tileMapURL, t);
                      v.set(e.tileMapURL, r);
                      _context12.prev = 22;
                      _context12.next = 25;
                      return r;

                    case 25:
                      i = _context12.sent;
                      v["delete"](e.tileMapURL);
                      R.put(e.tileMapURL, e.tileIndex);
                      e.tileIndex = new _TileIndex_js__WEBPACK_IMPORTED_MODULE_9__["default"](i.data);
                      _context12.next = 35;
                      break;

                    case 31:
                      _context12.prev = 31;
                      _context12.t1 = _context12["catch"](22);

                      if (!(v["delete"](e.tileMapURL), Object(_core_promiseUtils_js__WEBPACK_IMPORTED_MODULE_2__["isAbortError"])(_context12.t1))) {
                        _context12.next = 35;
                        break;
                      }

                      throw _context12.t1;

                    case 35:
                    case "end":
                      return _context12.stop();
                  }
                }
              }, _callee12, null, [[8, 15], [22, 31]]);
            }));

            function _fetchTileMap(_x17, _x18) {
              return _fetchTileMap2.apply(this, arguments);
            }

            return _fetchTileMap;
          }()
        }, {
          key: "_getRefKeys",
          value: function _getRefKeys(e, t) {
            var s = this._vectorTileLayer.sourceNameToSource,
                i = new Array();

            for (var _r18 in s) {
              var o = s[_r18].getRefKey(e, t);

              i.push(o);
            }

            return Object(_core_promiseUtils_js__WEBPACK_IMPORTED_MODULE_2__["eachAlways"])(i);
          }
        }, {
          key: "_getSourcesData",
          value: function _getSourcesData(e, t, s) {
            var i = [];

            for (var _r19 = 0; _r19 < t.length; _r19++) {
              if (null == t[_r19].value || null == e[_r19]) i.push(null);else {
                var o = this._getTilePayload(t[_r19].value, e[_r19], s);

                i.push(o);
              }
            }

            return Object(_core_promiseUtils_js__WEBPACK_IMPORTED_MODULE_2__["eachAlways"])(i).then(function (e) {
              var s = {},
                  i = [];

              for (var _r20 = 0; _r20 < e.length; _r20++) {
                if (e[_r20].value && e[_r20].value && e[_r20].value.protobuff && e[_r20].value.protobuff.byteLength > 0) {
                  var _o14 = t[_r20].value.id;
                  s[e[_r20].value.sourceName] = {
                    refKey: _o14,
                    protobuff: e[_r20].value.protobuff
                  }, i.push(e[_r20].value.protobuff);
                }
              }

              return {
                sourceName2DataAndRefKey: s,
                transferList: i
              };
            });
          }
        }, {
          key: "_getVectorTileData",
          value: function _getVectorTileData(e) {
            var _this30 = this;

            var t = e.id;
            if (this._ongoingTileRequests.has(t)) return this._ongoingTileRequests.get(t);

            var s = new AbortController(),
                i = {
              signal: s.signal
            },
                r = this._getParsedVectorTileData(e, i).then(function (e) {
              return _this30._ongoingTileRequests["delete"](t), _this30._ongoingRequestToController["delete"](t), e;
            })["catch"](function () {
              return _this30._ongoingTileRequests["delete"](t), _this30._ongoingRequestToController["delete"](t), null;
            });

            return this._ongoingTileRequests.set(t, r), this._ongoingRequestToController.set(t, s), r;
          }
        }, {
          key: "_getParsedVectorTileData",
          value: function _getParsedVectorTileData(e, t) {
            var _this31 = this;

            return this.fetchTileData(e, t).then(function (s) {
              return _this31.parseTileData({
                key: e,
                data: s
              }, t);
            });
          }
        }]);

        return S;
      }();
      /***/

    },

    /***/
    "llFo":
    /*!******************************************************************!*\
      !*** ./node_modules/@arcgis/core/layers/support/TilemapCache.js ***!
      \******************************************************************/

    /*! exports provided: TilemapCache */

    /***/
    function llFo(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "TilemapCache", function () {
        return L;
      });
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


      var _core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ../../core/accessorSupport/decorators/property.js */
      "WbKI");
      /* harmony import */


      var _core_accessorSupport_decorators_cast_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ../../core/accessorSupport/decorators/cast.js */
      "Gj5k");
      /* harmony import */


      var _core_accessorSupport_decorators_subclass_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ../../core/accessorSupport/decorators/subclass.js */
      "04ZG");
      /* harmony import */


      var _core_Error_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ../../core/Error.js */
      "zlDU");
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


      var _core_PooledArray_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
      /*! ../../core/PooledArray.js */
      "ikTR");
      /* harmony import */


      var _core_promiseUtils_js__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
      /*! ../../core/promiseUtils.js */
      "9MzC");
      /* harmony import */


      var _core_scheduling_js__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
      /*! ../../core/scheduling.js */
      "WBXD");
      /* harmony import */


      var _core_Accessor_js__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
      /*! ../../core/Accessor.js */
      "/CmD");
      /* harmony import */


      var _request_js__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(
      /*! ../../request.js */
      "Lqtk");
      /* harmony import */


      var _core_Handles_js__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(
      /*! ../../core/Handles.js */
      "r0DZ");
      /* harmony import */


      var _core_watchUtils_js__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(
      /*! ../../core/watchUtils.js */
      "N5XI");
      /* harmony import */


      var _core_LRUCache_js__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(
      /*! ../../core/LRUCache.js */
      "wk6I");
      /* harmony import */


      var _Tilemap_js__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(
      /*! ./Tilemap.js */
      "HSpW");
      /*
      All material copyright ESRI, All Rights Reserved, unless otherwise specified.
      See https://js.arcgis.com/4.18/esri/copyright.txt for details.
      */


      var _z;

      var A = _core_Logger_js__WEBPACK_IMPORTED_MODULE_2__["default"].getLogger("esri.layers.support.TilemapCache");

      var L = _z = /*#__PURE__*/function (_core_Accessor_js__WE) {
        _inherits(z, _core_Accessor_js__WE);

        var _super12 = _createSuper(z);

        function z(e) {
          var _this32;

          _classCallCheck(this, z);

          _this32 = _super12.call(this, e), _this32._handles = new _core_Handles_js__WEBPACK_IMPORTED_MODULE_15__["default"](), _this32._pendingTilemapRequests = {}, _this32._availableLevels = {}, _this32.levels = 5, _this32.cacheByteSize = 2097152, _this32.request = _request_js__WEBPACK_IMPORTED_MODULE_14__["default"], _this32._prefetchingEnabled = !0;
          return _this32;
        }

        _createClass(z, [{
          key: "initialize",
          value: function initialize() {
            var _this33 = this;

            this._tilemapCache = new _core_LRUCache_js__WEBPACK_IMPORTED_MODULE_17__["default"](this.cacheByteSize), this._handles.add([this.watch(["layer.parsedUrl", "layer.tileServers?"], function () {
              return _this33._initializeTilemapDefinition();
            }), Object(_core_watchUtils_js__WEBPACK_IMPORTED_MODULE_16__["init"])(this, "layer.tileInfo.lods", function (e) {
              return _this33._initializeAvailableLevels(e);
            }, !0)]), this._initializeTilemapDefinition();
          }
        }, {
          key: "destroy",
          value: function destroy() {
            this._handles && (this._handles.destroy(), this._handles = null);
          }
        }, {
          key: "castLevels",
          value: function castLevels(e) {
            return e <= 2 ? (A.error("Minimum levels for Tilemap is 3, but got ", e), 3) : e;
          }
        }, {
          key: "size",
          get: function get() {
            return 1 << this.levels;
          }
        }, {
          key: "fetchTilemap",
          value: function fetchTilemap(e, t, i, l) {
            var _this34 = this;

            if (!this._availableLevels[e]) return Object(_core_promiseUtils_js__WEBPACK_IMPORTED_MODULE_11__["reject"])(new _core_Error_js__WEBPACK_IMPORTED_MODULE_6__["default"]("tilemap-cache:level-unavailable", "Level ".concat(e, " is unavailable in the service")));

            var r = this._tmpTilemapDefinition,
                a = this._tilemapFromCache(e, t, i, r);

            if (a) return Object(_core_promiseUtils_js__WEBPACK_IMPORTED_MODULE_11__["resolve"])(a);
            var o = l && l.signal;
            return l = _objectSpread(_objectSpread({}, l), {}, {
              signal: null
            }), Object(_core_promiseUtils_js__WEBPACK_IMPORTED_MODULE_11__["create"])(function (e, t) {
              Object(_core_promiseUtils_js__WEBPACK_IMPORTED_MODULE_11__["onAbort"])(o, function () {
                return t(Object(_core_promiseUtils_js__WEBPACK_IMPORTED_MODULE_11__["createAbortError"])());
              });
              var i = Object(_Tilemap_js__WEBPACK_IMPORTED_MODULE_18__["tilemapDefinitionId"])(r);
              var s = _this34._pendingTilemapRequests[i];

              if (!s) {
                s = _Tilemap_js__WEBPACK_IMPORTED_MODULE_18__["Tilemap"].fromDefinition(r, l).then(function (e) {
                  return _this34._tilemapCache.put(i, e, e.byteSize), e;
                });

                var _e70 = function _e70() {
                  return delete _this34._pendingTilemapRequests[i];
                };

                _this34._pendingTilemapRequests[i] = s, s.then(_e70, _e70);
              }

              s.then(e, t);
            });
          }
        }, {
          key: "getAvailability",
          value: function getAvailability(e, t, i) {
            if (!this._availableLevels[e]) return "unavailable";

            var l = this._tilemapFromCache(e, t, i, this._tmpTilemapDefinition);

            return l ? l.getAvailability(t, i) : "unknown";
          }
        }, {
          key: "getAvailabilityUpsample",
          value: function getAvailabilityUpsample(e, t, i, l) {
            l.level = e, l.row = t, l.col = i;
            var r = this.layer.tileInfo;

            for (r.updateTileInfo(l);;) {
              var _e71 = this.getAvailability(l.level, l.row, l.col);

              if ("unavailable" !== _e71) return _e71;
              if (!r.upsampleTile(l)) return "unavailable";
            }
          }
        }, {
          key: "fetchAvailability",
          value: function fetchAvailability(e, t, i, l) {
            return this._availableLevels[e] ? this.fetchTilemap(e, t, i, l)["catch"](function (e) {
              return e;
            }).then(function (l) {
              if (l instanceof _Tilemap_js__WEBPACK_IMPORTED_MODULE_18__["Tilemap"]) {
                var _r21 = l.getAvailability(t, i);

                return "unavailable" === _r21 ? Object(_core_promiseUtils_js__WEBPACK_IMPORTED_MODULE_11__["reject"])(new _core_Error_js__WEBPACK_IMPORTED_MODULE_6__["default"]("tile-map:tile-unavailable", "Tile is not available", {
                  level: e,
                  row: t,
                  col: i
                })) : _r21;
              }

              if (Object(_core_promiseUtils_js__WEBPACK_IMPORTED_MODULE_11__["isAbortError"])(l)) throw l;
              return "unknown";
            }) : Object(_core_promiseUtils_js__WEBPACK_IMPORTED_MODULE_11__["reject"])(new _core_Error_js__WEBPACK_IMPORTED_MODULE_6__["default"]("tilemap-cache:level-unavailable", "Level ".concat(e, " is unavailable in the service")));
          }
        }, {
          key: "fetchAvailabilityUpsample",
          value: function fetchAvailabilityUpsample(e, t, i, l, r) {
            var _this35 = this;

            l.level = e, l.row = t, l.col = i;
            var s = this.layer.tileInfo;
            s.updateTileInfo(l);
            var a = this.fetchAvailability(e, t, i, r)["catch"](function (e) {
              if (Object(_core_promiseUtils_js__WEBPACK_IMPORTED_MODULE_11__["isAbortError"])(e)) throw e;
              if (s.upsampleTile(l)) return _this35.fetchAvailabilityUpsample(l.level, l.row, l.col, l);
              throw e;
            });
            return this._fetchAvailabilityUpsamplePrefetch(l.id, e, t, i, r, a), a;
          }
        }, {
          key: "_fetchAvailabilityUpsamplePrefetch",
          value: function () {
            var _fetchAvailabilityUpsamplePrefetch2 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee13(e, t, i, l, r, s) {
              var _this36 = this;

              var a, o, n, h, c, p, m, _loop2, _e72;

              return regeneratorRuntime.wrap(function _callee13$(_context13) {
                while (1) {
                  switch (_context13.prev = _context13.next) {
                    case 0:
                      if (this._prefetchingEnabled) {
                        _context13.next = 2;
                        break;
                      }

                      return _context13.abrupt("return");

                    case 2:
                      a = "prefetch-".concat(e);

                      if (!this._handles.has(a)) {
                        _context13.next = 5;
                        break;
                      }

                      return _context13.abrupt("return");

                    case 5:
                      o = Object(_core_promiseUtils_js__WEBPACK_IMPORTED_MODULE_11__["createAbortController"])();
                      s.then(function () {
                        return o.abort();
                      }, function () {
                        return o.abort();
                      });
                      n = !1;
                      h = {
                        remove: function remove() {
                          n || (n = !0, o.abort());
                        }
                      };

                      this._handles.add(h, a);

                      _context13.next = 12;
                      return Object(_core_scheduling_js__WEBPACK_IMPORTED_MODULE_12__["waitTicks"])(10, o.signal)["catch"](function () {});

                    case 12:
                      n || (n = !0, this._handles.remove(a));

                      if (!Object(_core_promiseUtils_js__WEBPACK_IMPORTED_MODULE_11__["isAborted"])(o)) {
                        _context13.next = 15;
                        break;
                      }

                      return _context13.abrupt("return");

                    case 15:
                      c = {
                        id: e,
                        level: t,
                        row: i,
                        col: l
                      }, p = _objectSpread(_objectSpread({}, r), {}, {
                        signal: o.signal
                      }), m = this.layer.tileInfo;

                      _loop2 = function _loop2(_e72) {
                        var e = _this36.fetchAvailability(c.level, c.row, c.col, p);

                        _z._prefetches.push(e);

                        var t = function t() {
                          _z._prefetches.removeUnordered(e);
                        };

                        e.then(t, t);
                      };

                      for (_e72 = 0; _z._prefetches.length < _z._maxPrefetch && m.upsampleTile(c); ++_e72) {
                        _loop2(_e72);
                      }

                    case 18:
                    case "end":
                      return _context13.stop();
                  }
                }
              }, _callee13, this);
            }));

            function _fetchAvailabilityUpsamplePrefetch(_x19, _x20, _x21, _x22, _x23, _x24) {
              return _fetchAvailabilityUpsamplePrefetch2.apply(this, arguments);
            }

            return _fetchAvailabilityUpsamplePrefetch;
          }()
        }, {
          key: "_initializeTilemapDefinition",
          value: function _initializeTilemapDefinition() {
            if (!this.layer.parsedUrl) return;
            var e = this.layer.parsedUrl,
                t = e.query;
            this._tilemapCache.clear(), this._tmpTilemapDefinition = {
              service: {
                url: e.path,
                query: t ? Object(_core_urlUtils_js__WEBPACK_IMPORTED_MODULE_7__["objectToQuery"])(t) : null,
                tileServers: this.layer.tileServers,
                request: this.request,
                type: this.layer.type
              },
              width: this.size,
              height: this.size,
              level: 0,
              row: 0,
              col: 0
            };
          }
        }, {
          key: "_tilemapFromCache",
          value: function _tilemapFromCache(e, t, i, l) {
            l.level = e, l.row = t - t % this.size, l.col = i - i % this.size;
            var r = Object(_Tilemap_js__WEBPACK_IMPORTED_MODULE_18__["tilemapDefinitionId"])(l);
            return this._tilemapCache.get(r);
          }
        }, {
          key: "_initializeAvailableLevels",
          value: function _initializeAvailableLevels(e) {
            var _this37 = this;

            this._availableLevels = {}, e && e.forEach(function (e) {
              return _this37._availableLevels[e.level] = !0;
            });
          }
        }, {
          key: "test",
          get: function get() {
            var e = this;
            return {
              get prefetchingEnabled() {
                return e._prefetchingEnabled;
              },

              set prefetchingEnabled(t) {
                e._prefetchingEnabled = t;
              },

              hasTilemap: function hasTilemap(t, i, l) {
                return !!e._tilemapFromCache(t, i, l, e._tmpTilemapDefinition);
              }
            };
          }
        }]);

        return z;
      }(_core_Accessor_js__WEBPACK_IMPORTED_MODULE_13__["default"]);

      L._maxPrefetch = 4, L._prefetches = new _core_PooledArray_js__WEBPACK_IMPORTED_MODULE_10__["default"]({
        initialSize: _z._maxPrefetch
      }), Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_3__["property"])({
        constructOnly: !0,
        type: Number
      })], L.prototype, "levels", void 0), Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_cast_js__WEBPACK_IMPORTED_MODULE_4__["cast"])("levels")], L.prototype, "castLevels", null), Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_3__["property"])({
        readOnly: !0,
        dependsOn: ["levels"],
        type: Number
      })], L.prototype, "size", null), Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_3__["property"])({
        constructOnly: !0,
        type: Number
      })], L.prototype, "cacheByteSize", void 0), Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_3__["property"])({
        constructOnly: !0
      })], L.prototype, "layer", void 0), Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_3__["property"])({
        constructOnly: !0
      })], L.prototype, "request", void 0), L = _z = Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_subclass_js__WEBPACK_IMPORTED_MODULE_5__["subclass"])("esri.layers.support.TilemapCache")], L);
      /***/
    },

    /***/
    "qcDN":
    /*!*****************************************************************!*\
      !*** ./node_modules/@arcgis/core/views/2d/engine/webgl/Rect.js ***!
      \*****************************************************************/

    /*! exports provided: default */

    /***/
    function qcDN(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /*
      All material copyright ESRI, All Rights Reserved, unless otherwise specified.
      See https://js.arcgis.com/4.18/esri/copyright.txt for details.
      */

      /* harmony default export */


      __webpack_exports__["default"] = /*#__PURE__*/function () {
        function _class7() {
          var t = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 0;
          var h = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;
          var i = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 0;
          var s = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : 0;

          _classCallCheck(this, _class7);

          this.x = t, this.y = h, this.width = i, this.height = s;
        }

        _createClass(_class7, [{
          key: "isEmpty",
          get: function get() {
            return this.width <= 0 || this.height <= 0;
          }
        }, {
          key: "union",
          value: function union(t) {
            this.x = Math.min(this.x, t.x), this.y = Math.min(this.y, t.y), this.width = Math.max(this.width, t.width), this.height = Math.max(this.height, t.height);
          }
        }]);

        return _class7;
      }();
      /***/

    },

    /***/
    "rEH/":
    /*!*************************************************************************************************!*\
      !*** ./node_modules/@arcgis/core/views/2d/engine/vectorTiles/decluttering/SymbolDeclutterer.js ***!
      \*************************************************************************************************/

    /*! exports provided: SymbolDeclutterer */

    /***/
    function rEH(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "SymbolDeclutterer", function () {
        return t;
      });
      /* harmony import */


      var _config_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ./config.js */
      "2yHJ");
      /*
      All material copyright ESRI, All Rights Reserved, unless otherwise specified.
      See https://js.arcgis.com/4.18/esri/copyright.txt for details.
      */


      function e(o, e) {
        if (o.priority - e.priority) return o.priority - e.priority;
        var t = o.tile.key,
            i = e.tile.key;
        return t.world - i.world ? t.world - i.world : t.level - i.level ? t.level - i.level : t.row - i.row ? t.row - i.row : t.col - i.col ? t.col - i.col : o.xTile - e.xTile ? o.xTile - e.xTile : o.yTile - e.yTile;
      }

      var t = /*#__PURE__*/function () {
        function t(o, e, _t26, i, s, r) {
          _classCallCheck(this, t);

          this._visibleTiles = o, this._symbolRepository = e, this._createCollisionJob = _t26, this._assignTileSymbolsOpacity = i, this._symbolLayerSorter = s, this._isLayerVisible = r, this._selectionJob = null, this._selectionJobCompleted = !1, this._collisionJob = null, this._collisionJobCompleted = !1, this._opacityJob = null, this._opacityJobCompleted = !1, this._running = !0;
        }

        _createClass(t, [{
          key: "running",
          get: function get() {
            return this._running;
          }
        }, {
          key: "setScreenSize",
          value: function setScreenSize(o, e) {
            this._screenWidth === o && this._screenHeight === e || this.restart(), this._screenWidth = o, this._screenHeight = e;
          }
        }, {
          key: "restart",
          value: function restart() {
            this._selectionJob = null, this._selectionJobCompleted = !1, this._collisionJob = null, this._collisionJobCompleted = !1, this._opacityJob = null, this._opacityJobCompleted = !1, this._running = !0;
          }
        }, {
          key: "continue",
          value: function _continue(o) {
            if (this._selectionJob || (this._selectionJob = this._createSelectionJob()), !this._selectionJobCompleted) {
              var _e73 = performance.now();

              if (!this._selectionJob.work(o)) return !1;
              if (this._selectionJobCompleted = !0, 0 === (o = Math.max(0, o - (performance.now() - _e73)))) return !1;
            }

            if (this._collisionJob || (this._collisionJob = this._createCollisionJob(this._selectionJob.sortedSymbols, this._screenWidth, this._screenHeight)), !this._collisionJobCompleted) {
              var _e74 = performance.now();

              if (!this._collisionJob.work(o)) return !1;
              if (this._collisionJobCompleted = !0, 0 === (o = Math.max(0, o - (performance.now() - _e74)))) return !1;
            }

            if (this._opacityJob || (this._opacityJob = this._createOpacityJob()), !this._opacityJobCompleted) {
              var _e75 = performance.now();

              if (!this._opacityJob.work(o)) return !1;
              if (this._opacityJobCompleted = !0, 0 === (o = Math.max(0, o - (performance.now() - _e75)))) return !1;
            }

            return this._running = !1, !0;
          }
        }, {
          key: "_createSelectionJob",
          value: function _createSelectionJob() {
            var o = this._symbolRepository.uniqueSymbols,
                _t27 = [];
            var i = 0,
                s = 0;
            var r = this._isLayerVisible;
            var n = this._symbolLayerSorter;
            return {
              work: function work(n) {
                var l;
                var c = performance.now();

                for (; s < o.length; s++, i = 0) {
                  var _e76 = o[s],
                      h = _e76.styleLayerUID;

                  if (!r(h)) {
                    _t27[s] || (_t27[s] = {
                      styleLayerUID: h,
                      symbols: []
                    });
                    continue;
                  }

                  _t27[s] = _t27[s] || {
                    styleLayerUID: h,
                    symbols: []
                  };
                  var a = _t27[s];

                  for (; i < _e76.uniqueSymbols.length; i++) {
                    if (l = _e76.uniqueSymbols[i], i % 100 == 99 && performance.now() - c > n) return !1;

                    var _o15 = null,
                        _t29 = !1,
                        _s35 = !1;

                    var _iterator66 = _createForOfIteratorHelper(l.tileSymbols),
                        _step66;

                    try {
                      for (_iterator66.s(); !(_step66 = _iterator66.n()).done;) {
                        var _e77 = _step66.value;

                        if (_e77.selectedForRendering = !1, !_s35 || !_t29) {
                          var _i17 = _e77.tile;
                          (!_o15 || _i17.isCoverage || _i17.neededForCoverage && !_t29) && (_o15 = _e77, (_i17.neededForCoverage || _i17.isCoverage) && (_s35 = !0), _i17.isCoverage && (_t29 = !0));
                        }
                      }
                    } catch (err) {
                      _iterator66.e(err);
                    } finally {
                      _iterator66.f();
                    }

                    if (_o15.selectedForRendering = !0, _s35) {
                      a.symbols.push(_o15), l.show = !0;

                      var _iterator67 = _createForOfIteratorHelper(l.parts),
                          _step67;

                      try {
                        for (_iterator67.s(); !(_step67 = _iterator67.n()).done;) {
                          var _o16 = _step67.value;
                          _o16.show = !0;
                        }
                      } catch (err) {
                        _iterator67.e(err);
                      } finally {
                        _iterator67.f();
                      }
                    } else l.show = !1;
                  }
                }

                var _iterator68 = _createForOfIteratorHelper(_t27),
                    _step68;

                try {
                  for (_iterator68.s(); !(_step68 = _iterator68.n()).done;) {
                    var _o17 = _step68.value;

                    _o17.symbols.sort(e);
                  }
                } catch (err) {
                  _iterator68.e(err);
                } finally {
                  _iterator68.f();
                }

                return !0;
              },

              get sortedSymbols() {
                return _t27.sort(n);
              }

            };
          }
        }, {
          key: "_createOpacityJob",
          value: function _createOpacityJob() {
            var o = this._assignTileSymbolsOpacity,
                e = this._visibleTiles;
            var _t28 = 0;

            function s(e, t) {
              var r = e.symbols;

              var _iterator69 = _createForOfIteratorHelper(r),
                  _step69;

              try {
                for (_iterator69.s(); !(_step69 = _iterator69.n()).done;) {
                  var _step69$value = _slicedToArray(_step69.value, 2),
                      _o18 = _step69$value[0],
                      _e78 = _step69$value[1];

                  i(_e78, t);
                }
              } catch (err) {
                _iterator69.e(err);
              } finally {
                _iterator69.f();
              }

              o(e, t);

              var _iterator70 = _createForOfIteratorHelper(e.childrenTiles),
                  _step70;

              try {
                for (_iterator70.s(); !(_step70 = _iterator70.n()).done;) {
                  var _o19 = _step70.value;
                  s(_o19, t);
                }
              } catch (err) {
                _iterator70.e(err);
              } finally {
                _iterator70.f();
              }
            }

            return {
              work: function work(o) {
                var i = performance.now();

                for (; _t28 < e.length; _t28++) {
                  if (performance.now() - i > o) return !1;
                  var _r22 = e[_t28];
                  if (_r22.parentTile) continue;
                  s(_r22, performance.now());
                }

                return !0;
              }
            };
          }
        }]);

        return t;
      }();

      function i(e, t) {
        var _iterator71 = _createForOfIteratorHelper(e),
            _step71;

        try {
          for (_iterator71.s(); !(_step71 = _iterator71.n()).done;) {
            var _i18 = _step71.value;
            var _e79 = _i18.unique;

            var _iterator72 = _createForOfIteratorHelper(_e79.parts),
                _step72;

            try {
              for (_iterator72.s(); !(_step72 = _iterator72.n()).done;) {
                var _i19 = _step72.value;

                var _s36 = _i19.targetOpacity > .5 ? 1 : -1;

                _i19.startOpacity += _s36 * ((t - _i19.startTime) / _config_js__WEBPACK_IMPORTED_MODULE_0__["FADE_DURATION"]), _i19.startOpacity = Math.min(Math.max(_i19.startOpacity, 0), 1), _i19.startTime = t, _i19.targetOpacity = _e79.show && _i19.show ? 1 : 0;
              }
            } catch (err) {
              _iterator72.e(err);
            } finally {
              _iterator72.f();
            }
          }
        } catch (err) {
          _iterator71.e(err);
        } finally {
          _iterator71.f();
        }
      }
      /***/

    },

    /***/
    "rvq7":
    /*!****************************************************!*\
      !*** ./node_modules/@arcgis/core/core/MemCache.js ***!
      \****************************************************/

    /*! exports provided: MIN_PRIORITY, MemCache, MemCacheStorage */

    /***/
    function rvq7(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "MIN_PRIORITY", function () {
        return e;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "MemCache", function () {
        return s;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "MemCacheStorage", function () {
        return i;
      });
      /* harmony import */


      var _PooledArray_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ./PooledArray.js */
      "ikTR");
      /*
      All material copyright ESRI, All Rights Reserved, unless otherwise specified.
      See https://js.arcgis.com/4.18/esri/copyright.txt for details.
      */


      var e = -3;

      var s = /*#__PURE__*/function () {
        function s(t, e, _s37) {
          _classCallCheck(this, s);

          this._namespace = t, this._storage = e, this._removeFunc = !1, this._hit = 0, this._miss = 0, this._storage.register(this), this._namespace += ":", _s37 && (this._storage.registerRemoveFunc(this._namespace, _s37), this._removeFunc = !0);
        }

        _createClass(s, [{
          key: "namespace",
          get: function get() {
            return this._namespace.slice(0, -1);
          }
        }, {
          key: "hitRate",
          get: function get() {
            return this._hit / (this._hit + this._miss);
          }
        }, {
          key: "size",
          get: function get() {
            return this._storage.size;
          }
        }, {
          key: "maxSize",
          get: function get() {
            return this._storage.maxSize;
          }
        }, {
          key: "resetHitRate",
          value: function resetHitRate() {
            this._hit = this._miss = 0;
          }
        }, {
          key: "destroy",
          value: function destroy() {
            this._storage.clear(this._namespace), this._removeFunc && this._storage.deregisterRemoveFunc(this._namespace), this._storage.deregister(this);
          }
        }, {
          key: "put",
          value: function put(t, e, _s38) {
            var i = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : 0;

            this._storage.put(this._namespace + t, e, _s38, i);
          }
        }, {
          key: "get",
          value: function get(t) {
            var e = this._storage.get(this._namespace + t);

            return void 0 === e ? ++this._miss : ++this._hit, e;
          }
        }, {
          key: "pop",
          value: function pop(t) {
            var e = this._storage.pop(this._namespace + t);

            return void 0 === e ? ++this._miss : ++this._hit, e;
          }
        }, {
          key: "updateSize",
          value: function updateSize(t, e, _s39) {
            this._storage.updateSize(this._namespace + t, e, _s39);
          }
        }, {
          key: "clear",
          value: function clear() {
            this._storage.clear(this._namespace);
          }
        }, {
          key: "clearAll",
          value: function clearAll() {
            this._storage.clearAll();
          }
        }, {
          key: "getStats",
          value: function getStats() {
            return this._storage.getStats();
          }
        }, {
          key: "resetStats",
          value: function resetStats() {
            this._storage.resetStats();
          }
        }]);

        return s;
      }();

      var i = /*#__PURE__*/function () {
        function i() {
          var e = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 10485760;

          _classCallCheck(this, i);

          this._maxSize = e, this._db = new Map(), this._size = 0, this._hit = 0, this._miss = 0, this._removeFuncs = [], this._users = new _PooledArray_js__WEBPACK_IMPORTED_MODULE_0__["default"]();
        }

        _createClass(i, [{
          key: "register",
          value: function register(t) {
            this._users.push(t);
          }
        }, {
          key: "deregister",
          value: function deregister(t) {
            this._users.removeUnordered(t);
          }
        }, {
          key: "registerRemoveFunc",
          value: function registerRemoveFunc(t, e) {
            this._removeFuncs.push([t, e]);
          }
        }, {
          key: "deregisterRemoveFunc",
          value: function deregisterRemoveFunc(t) {
            this._removeFuncs = this._removeFuncs.filter(function (e) {
              return e[0] !== t;
            });
          }
        }, {
          key: "size",
          get: function get() {
            return this._size;
          }
        }, {
          key: "maxSize",
          get: function get() {
            return this._maxSize;
          },
          set: function set(t) {
            this._maxSize = Math.max(t, 0), this._checkSizeLimit();
          }
        }, {
          key: "put",
          value: function put(t, e, s, _i20) {
            var h = this._db.get(t);

            if (h && (this._size -= h.size, this._db["delete"](t), h.entry !== e && this._notifyRemoved(t, h.entry)), s > this._maxSize) return void this._notifyRemoved(t, e);
            if (void 0 === e) return void console.warn("Refusing to cache undefined entry ");
            if (!s || s < 0) return void console.warn("Refusing to cache entry with invalid size " + s);
            var r = 1 + Math.max(_i20, -3) - -3;
            this._db.set(t, {
              entry: e,
              size: s,
              lifetime: r,
              lives: r
            }), this._size += s, this._checkSizeLimit();
          }
        }, {
          key: "updateSize",
          value: function updateSize(t, e, s) {
            var _i21 = this._db.get(t);

            _i21 && _i21.entry === e && (this._size -= _i21.size, s > this._maxSize ? this._notifyRemoved(t, e) : (_i21.size = s, this._size += s, this._checkSizeLimit()));
          }
        }, {
          key: "pop",
          value: function pop(t) {
            var e = this._db.get(t);

            if (e) return this._size -= e.size, this._db["delete"](t), ++this._hit, e.entry;
            ++this._miss;
          }
        }, {
          key: "get",
          value: function get(t) {
            var e = this._db.get(t);

            if (void 0 !== e) return this._db["delete"](t), e.lives = e.lifetime, this._db.set(t, e), ++this._hit, e.entry;
            ++this._miss;
          }
        }, {
          key: "getStats",
          value: function getStats() {
            var _this38 = this;

            var t = {
              Size: Math.round(this._size / 1048576) + "/" + Math.round(this._maxSize / 1048576) + "MB",
              "Hit rate": Math.round(100 * this._getHitRate()) + "%",
              Entries: this._db.size.toString()
            },
                e = {},
                s = new Array();

            this._db.forEach(function (t, _i23) {
              var h = t.lifetime;
              s[h] = (s[h] || 0) + t.size, _this38._users.forAll(function (s) {
                var h = s.namespace;

                if (_i23.startsWith(h)) {
                  var _s40 = e[h] || 0;

                  e[h] = _s40 + t.size;
                }
              });
            });

            var _i22 = {};

            this._users.forAll(function (t) {
              var s = t.namespace;

              if (!isNaN(t.hitRate) && t.hitRate > 0) {
                var _h4 = e[s] || 0;

                e[s] = _h4, _i22[s] = Math.round(100 * t.hitRate) + "%";
              } else _i22[s] = "0%";
            });

            var h = Object.keys(e);
            h.forEach(function (t) {
              return e[t] = e[t] / _this38._size * 100;
            }), h.sort(function (t, s) {
              return e[s] - e[t];
            }), h.forEach(function (s) {
              return t[s] = Math.round(e[s]) + "% / " + _i22[s];
            });

            for (var _e80 = s.length - 1; _e80 >= 0; --_e80) {
              var _i25 = s[_e80];
              _i25 && (t["Priority " + (_e80 + -3 - 1)] = Math.round(_i25 / this.size * 100) + "%");
            }

            return t;
          }
        }, {
          key: "resetStats",
          value: function resetStats() {
            this._hit = this._miss = 0, this._users.forAll(function (t) {
              return t.resetHitRate();
            });
          }
        }, {
          key: "clear",
          value: function clear(t) {
            var _this39 = this;

            this._db.forEach(function (e, s) {
              s.startsWith(t) && (_this39._size -= e.size, _this39._db["delete"](s), _this39._notifyRemoved(s, e.entry));
            });
          }
        }, {
          key: "clearAll",
          value: function clearAll() {
            var _this40 = this;

            this._db.forEach(function (t, e) {
              return _this40._notifyRemoved(e, t.entry);
            }), this._size = 0, this._db.clear();
          }
        }, {
          key: "_getHitRate",
          value: function _getHitRate() {
            return this._hit / (this._hit + this._miss);
          }
        }, {
          key: "_notifyRemoved",
          value: function _notifyRemoved(t, e) {
            this._removeFuncs.forEach(function (s) {
              t.startsWith(s[0]) && s[1](e);
            });
          }
        }, {
          key: "_checkSizeLimit",
          value: function _checkSizeLimit() {
            if (!(this._size <= this._maxSize)) {
              var _iterator73 = _createForOfIteratorHelper(this._db),
                  _step73;

              try {
                for (_iterator73.s(); !(_step73 = _iterator73.n()).done;) {
                  var _step73$value = _slicedToArray(_step73.value, 2),
                      _t30 = _step73$value[0],
                      _e81 = _step73$value[1];

                  if (this._db["delete"](_t30), _e81.lives <= 1 ? (this._size -= _e81.size, this._notifyRemoved(_t30, _e81.entry)) : (--_e81.lives, this._db.set(_t30, _e81)), this._size <= .9 * this.maxSize) return;
                }
              } catch (err) {
                _iterator73.e(err);
              } finally {
                _iterator73.f();
              }
            }
          }
        }]);

        return i;
      }();
      /***/

    },

    /***/
    "v3/X":
    /*!*****************************************************************************************!*\
      !*** ./node_modules/@arcgis/core/views/2d/engine/vectorTiles/decluttering/debugging.js ***!
      \*****************************************************************************************/

    /*! exports provided: drawColliders, drawGridIndex, perfAdd, perfClear, perfElement */

    /***/
    function v3X(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "drawColliders", function () {
        return o;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "drawGridIndex", function () {
        return n;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "perfAdd", function () {
        return l;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "perfClear", function () {
        return i;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "perfElement", function () {
        return s;
      });
      /*
      All material copyright ESRI, All Rights Reserved, unless otherwise specified.
      See https://js.arcgis.com/4.18/esri/copyright.txt for details.
      */


      function t(t, e, n, o, l, i) {
        t.fillStyle = e, t.fillRect(n, o, l, i);
      }

      function e(t, e, n, o, l, i) {
        t.strokeStyle = e, t.strokeRect(n, o, l, i);
      }

      function n(t, e) {
        t.strokeStyle = "black";
        var n = e.cellSize,
            o = e.rows,
            l = e.columns;

        for (var _i26 = 0; _i26 < o; _i26++) {
          var _o20 = e.cells[_i26],
              _r23 = _i26 * n,
              _s41 = (_i26 + 1) * n;

          for (var _e82 = 0; _e82 < l; _e82++) {
            var _l22 = _o20[_e82],
                _i27 = _e82 * n,
                d = (_e82 + 1) * n;

            t.strokeRect(_i27, _r23, d - _i27, _s41 - _r23), t.fillText("cells:".concat(_l22.length), _i27 + 4, _r23 + 12);
          }
        }
      }

      function o(n, o) {
        var l = window.COLLISION_XRAY;

        for (var _i28 = 0; _i28 < o.length; ++_i28) {
          var _r24 = !o[_i28].unique.show;

          if (l || !_r24) {
            var _iterator74 = _createForOfIteratorHelper(o[_i28].colliders),
                _step74;

            try {
              for (_iterator74.s(); !(_step74 = _iterator74.n()).done;) {
                var _s42 = _step74.value;
                if (!_s42.enabled) continue;
                var d = !o[_i28].unique.parts[_s42.partIndex].show;
                if (!l && d) continue;
                var a = _s42.xScreen,
                    _c2 = _s42.yScreen,
                    m = _s42.dxScreen,
                    h = _s42.dyScreen;
                n.globalAlpha = _r24 || d ? .2 : 1, t(n, "green", a - 1, _c2 - 1, 3, 3), e(n, "red", a + m, _c2 + h, _s42.width, _s42.height), t(n, "blue", a + m - 1, _c2 + h - 1, 3, 3), n.globalAlpha = 1;
              }
            } catch (err) {
              _iterator74.e(err);
            } finally {
              _iterator74.f();
            }
          }
        }
      }

      function l(t, e, n) {
        if (!window.PERFORMANCE_RECORDING_STORAGE) return;
        var o = window.PERFORMANCE_RECORDING_STORAGE;
        o.perf = o.perf || {};
        var l = o.perf;
        l[t] = l[t] || {
          start: null,
          time: 0,
          min: void 0,
          max: void 0,
          samples: [],
          unit: n
        }, l[t].time += e, l[t].samples.push(e), (null == l[t].min || e < l[t].min) && (l[t].min = e), (null == l[t].max || e > l[t].max) && (l[t].max = e);
      }

      function i() {
        if (!window.PERFORMANCE_RECORDING_STORAGE) return;
        window.PERFORMANCE_RECORDING_STORAGE.perf = {};
      }

      function r(t, e) {
        return "".concat(Math.round(10 * t) / 10).concat(e);
      }

      function s(t) {
        if (!window.PERFORMANCE_RECORDING_STORAGE) {
          var _t31 = document.createElement("div");

          return _t31.innerHTML = "No recorded data is present because performance recording is disabled.", _t31;
        }

        var e = document.createElement("div");
        var n = "";
        var o = window.PERFORMANCE_RECORDING_STORAGE.perf;
        n += '<table style="border-collapse: collapse;">', n += "<tr style=\"text-weight: bold; border-bottom: 1px solid \"".concat(t, "\";\"><td>Name</td><td>Total</td><td>Runs</td><td>Average</td><td>Min</td><td>Distribution</td><td>Max</td><td>Histogram (50 bins)</td></tr>");
        var l = [];

        for (var _t32 in o) {
          l.push({
            name: _t32,
            value: o[_t32].time / o[_t32].samples.length,
            sortkey: o[_t32].max
          });
        }

        l.sort(function (t, e) {
          return -(t.sortkey - e.sortkey);
        });
        var i = l.map(function (t) {
          return t.name;
        });

        var _iterator75 = _createForOfIteratorHelper(i),
            _step75;

        try {
          for (_iterator75.s(); !(_step75 = _iterator75.n()).done;) {
            var _t39 = _step75.value;
            n += "<tr>", n += "<td>".concat(_t39, "</td>"), n += "<td>".concat(r(o[_t39].time, o[_t39].unit), "</td>"), n += "<td>".concat(o[_t39].samples.length, "</td>"), n += "<td>".concat(r(o[_t39].time / o[_t39].samples.length, o[_t39].unit), "</td>"), n += "<td style=\"text-align: right;\">".concat(r(o[_t39].min, o[_t39].unit), "</td>"), n += "<td data-distribution='1'></td>", n += "<td>".concat(r(o[_t39].max, o[_t39].unit), "</td>"), n += "<td data-histogram='1'></td>", n += "</tr>";
          }
        } catch (err) {
          _iterator75.e(err);
        } finally {
          _iterator75.f();
        }

        n += "<table>", e.innerHTML = n;
        var s = e.querySelectorAll("td[data-distribution='1']"),
            d = e.querySelectorAll("td[data-histogram='1']");

        for (var _e83 = 0; _e83 < s.length; _e83++) {
          var _n7 = s[_e83];
          {
            var _r25 = document.createElement("canvas");

            _r25.height = 10, _r25.width = 100;

            var _s43 = _r25.getContext("2d");

            if (_s43.strokeStyle = t, _s43.beginPath(), _s43.moveTo(0, 5), _s43.lineTo(100, 5), o[i[_e83]].max > o[i[_e83]].min + .001) {
              var _iterator76 = _createForOfIteratorHelper(o[i[_e83]].samples),
                  _step76;

              try {
                for (_iterator76.s(); !(_step76 = _iterator76.n()).done;) {
                  var _t33 = _step76.value;

                  var _n8 = (_t33 - o[i[_e83]].min) / (o[i[_e83]].max - o[i[_e83]].min);

                  _s43.moveTo(100 * _n8, 3), _s43.lineTo(100 * _n8, 7);
                }
              } catch (err) {
                _iterator76.e(err);
              } finally {
                _iterator76.f();
              }
            }

            _s43.stroke(), _s43.strokeRect((l[_e83].value - o[i[_e83]].min) / (o[i[_e83]].max - o[i[_e83]].min) * 100 - 2, 0, 4, 9), _n7.appendChild(_r25);
          }
          _n7 = d[_e83];
          {
            var _l23 = new Array(50);

            for (var _t34 = 0; _t34 < _l23.length; _t34++) {
              _l23[_t34] = 0;
            }

            var _iterator77 = _createForOfIteratorHelper(o[i[_e83]].samples),
                _step77;

            try {
              for (_iterator77.s(); !(_step77 = _iterator77.n()).done;) {
                var _t37 = _step77.value;

                var _n9 = (_t37 - o[i[_e83]].min) / (o[i[_e83]].max - o[i[_e83]].min);

                _l23[1 === _n9 ? _l23.length - 1 : Math.floor(_n9 * _l23.length)]++;
              }
            } catch (err) {
              _iterator77.e(err);
            } finally {
              _iterator77.f();
            }

            var _r26 = document.createElement("canvas");

            _r26.height = 30, _r26.width = 120;

            var _s44 = _r26.getContext("2d");

            _s44.strokeStyle = t, _s44.fillStyle = t;
            var _d2 = 0;

            for (var _t35 = 0; _t35 < _l23.length; _t35++) {
              var _e84 = _l23[_t35];
              _d2 = Math.max(_d2, _e84);
            }

            for (var _t36 = 0; _t36 < _l23.length; _t36++) {
              var _e85 = _l23[_t36];

              _s44.fillRect(_t36 * _r26.width / _l23.length, _r26.height * (1 - _e85 / _d2), _r26.width / _l23.length, _r26.height * (_e85 / _d2));
            }

            _s44.beginPath(), _s44.moveTo(0, _r26.height), _s44.lineTo(_r26.width, _r26.height), _s44.stroke(), _n7.appendChild(_r26);
          }
        }

        var a = e.querySelectorAll("td");

        for (var _t38 = 0; _t38 < a.length; _t38++) {
          a[_t38].style.padding = "5px";
        }

        return e;
      }
      /***/

    },

    /***/
    "vAXJ":
    /*!************************************************************************************!*\
      !*** ./node_modules/@arcgis/core/views/2d/engine/vectorTiles/decluttering/util.js ***!
      \************************************************************************************/

    /*! exports provided: GridIndex, TileForest, TileGraph, TileNode, deserializeSymbols, tileCoordChange, writeOpacityToBuffers */

    /***/
    function vAXJ(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "GridIndex", function () {
        return o;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "TileForest", function () {
        return i;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "TileGraph", function () {
        return s;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "TileNode", function () {
        return r;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "deserializeSymbols", function () {
        return n;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "tileCoordChange", function () {
        return l;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "writeOpacityToBuffers", function () {
        return h;
      });
      /* harmony import */


      var _core_maybe_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ../../../../../core/maybe.js */
      "srIe");
      /* harmony import */


      var _core_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./core.js */
      "y6Hv");
      /*
      All material copyright ESRI, All Rights Reserved, unless otherwise specified.
      See https://js.arcgis.com/4.18/esri/copyright.txt for details.
      */


      var r = function r(t) {
        _classCallCheck(this, r);

        this.tile = t, this.parent = null, this.children = new Set();
      };

      var s = /*#__PURE__*/function () {
        function s() {
          _classCallCheck(this, s);

          this.nodes = new Map(), this.roots = new Set();
        }

        _createClass(s, [{
          key: "create",
          value: function create(t) {
            var _this41 = this;

            var e = new r(t);

            var _s45;

            var i = [];

            if (this.nodes.forEach(function (t) {
              _this41._canConnectDirectly(e, t) && i.push(t), !_s45 && _this41._canConnectDirectly(t, e) && (_s45 = t);
            }), _s45) {
              var _iterator78 = _createForOfIteratorHelper(i),
                  _step78;

              try {
                for (_iterator78.s(); !(_step78 = _iterator78.n()).done;) {
                  var _t40 = _step78.value;
                  _s45.children["delete"](_t40), e.children.add(_t40), _t40.parent = e;
                }
              } catch (err) {
                _iterator78.e(err);
              } finally {
                _iterator78.f();
              }

              _s45.children.add(e), e.parent = _s45;
            } else {
              this.roots.add(e);

              var _iterator79 = _createForOfIteratorHelper(i),
                  _step79;

              try {
                for (_iterator79.s(); !(_step79 = _iterator79.n()).done;) {
                  var _t41 = _step79.value;
                  e.children.add(_t41), _t41.parent = e, this.roots["delete"](_t41);
                }
              } catch (err) {
                _iterator79.e(err);
              } finally {
                _iterator79.f();
              }
            }

            return this.nodes.set(t.key.id, e), e;
          }
        }, {
          key: "destroy",
          value: function destroy(e) {
            var _this42 = this;

            Object(_core_maybe_js__WEBPACK_IMPORTED_MODULE_0__["isSome"])(e.parent) ? (e.parent.children["delete"](e), e.children.forEach(function (r) {
              Object(_core_maybe_js__WEBPACK_IMPORTED_MODULE_0__["isSome"])(e.parent) && e.parent.children.add(r);
            })) : this.roots["delete"](e), e.children.forEach(function (t) {
              t.parent = e.parent, e.parent || _this42.roots.add(t);
            }), this.nodes["delete"](e.tile.key.id);
          }
        }, {
          key: "clear",
          value: function clear() {
            this.roots.clear(), this.nodes.clear();
          }
        }, {
          key: "_canConnectDirectly",
          value: function _canConnectDirectly(t, e) {
            var _e$tile$key = e.tile.key,
                r = _e$tile$key.level,
                _s46 = _e$tile$key.row,
                i = _e$tile$key.col;
            var l = e.tile.key.world;

            for (; r > 0;) {
              if (r--, _s46 >>= 1, i >>= 1, t.tile.key.level === r && t.tile.key.row === _s46 && t.tile.key.col === i && t.tile.key.world === l) return !0;
              if (this.nodes.has("".concat(r, "/").concat(_s46, "/").concat(i, "/").concat(l))) return !1;
            }

            return !1;
          }
        }]);

        return s;
      }();

      var i = /*#__PURE__*/function () {
        function i() {
          _classCallCheck(this, i);

          this._tileGraph = new s(), this._tileArray = null;
        }

        _createClass(i, [{
          key: "has",
          value: function has(t) {
            return "string" == typeof t ? this._tileGraph.nodes.has(t) : this._tileGraph.nodes.has(t.key.id);
          }
        }, {
          key: "getAll",
          value: function getAll() {
            var _this43 = this;

            return this._tileArray || (this._tileArray = [], this._tileGraph.nodes.forEach(function (t) {
              _this43._tileArray.push(t.tile);
            })), this._tileArray;
          }
        }, {
          key: "getRoots",
          value: function getRoots() {
            var t = [];
            return this._tileGraph.roots.forEach(function (e) {
              t.push(e.tile);
            }), t;
          }
        }, {
          key: "getParent",
          value: function getParent(e) {
            var r = this._tileGraph.nodes.get("string" == typeof e ? e : e.key.id);

            return Object(_core_maybe_js__WEBPACK_IMPORTED_MODULE_0__["isSome"])(r.parent) && r.parent.tile;
          }
        }, {
          key: "getChildren",
          value: function getChildren(t) {
            var e = [];
            return this._tileGraph.nodes.get("string" == typeof t ? t : t.key.id).children.forEach(function (t) {
              e.push(t.tile);
            }), e;
          }
        }, {
          key: "get",
          value: function get(t) {
            return this._tileGraph.nodes.get(t).tile;
          }
        }, {
          key: "removeKey",
          value: function removeKey(t) {
            var e = this._tileGraph.nodes.get(t);

            this._tileGraph.destroy(e), this._tileArray = null;
          }
        }, {
          key: "forEach",
          value: function forEach(t) {
            this._tileGraph.nodes.forEach(function (e, r) {
              return t(e.tile, r);
            });
          }
        }, {
          key: "add",
          value: function add(t) {
            this._tileGraph.create(t), this._tileArray = null;
          }
        }, {
          key: "remove",
          value: function remove(t) {
            var e = this._tileGraph.nodes.get(t.key.id);

            this._tileGraph.destroy(e), this._tileArray = null;
          }
        }, {
          key: "clear",
          value: function clear() {
            this._tileGraph.clear(), this._tileArray = [];
          }
        }]);

        return i;
      }();

      function l(t, e, r, s, i, l) {
        var o = r - i;
        if (o >= 0) return (e >> o) + (s - (l << o)) * (t >> o);
        var n = -o;
        return e - (l - (s << n)) * (t >> n) << n;
      }

      var o = /*#__PURE__*/function () {
        function o(t, e, r) {
          _classCallCheck(this, o);

          this._rows = Math.ceil(e / r), this._columns = Math.ceil(t / r), this._cellSize = r, this.cells = new Array(this._rows);

          for (var _t42 = 0; _t42 < this._rows; _t42++) {
            this.cells[_t42] = new Array(this._columns);

            for (var _e86 = 0; _e86 < this._columns; _e86++) {
              this.cells[_t42][_e86] = [];
            }
          }
        }

        _createClass(o, [{
          key: "getCell",
          value: function getCell(t, e) {
            var r = Math.min(Math.max(Math.floor(e / this._cellSize), 0), this._rows - 1),
                s = Math.min(Math.max(Math.floor(t / this._cellSize), 0), this._columns - 1);
            return this.cells[r] && this.cells[r][s] || null;
          }
        }, {
          key: "getCellSpan",
          value: function getCellSpan(t, e, r, s) {
            return [Math.min(Math.max(Math.floor(t / this._cellSize), 0), this.columns - 1), Math.min(Math.max(Math.floor(e / this._cellSize), 0), this.rows - 1), Math.min(Math.max(Math.floor(r / this._cellSize), 0), this.columns - 1), Math.min(Math.max(Math.floor(s / this._cellSize), 0), this.rows - 1)];
          }
        }, {
          key: "cellSize",
          get: function get() {
            return this._cellSize;
          }
        }, {
          key: "columns",
          get: function get() {
            return this._columns;
          }
        }, {
          key: "rows",
          get: function get() {
            return this._rows;
          }
        }]);

        return o;
      }();

      function n(t, r, s, i, l, o) {
        var n = r[i++];

        for (var _h5 = 0; _h5 < n; _h5++) {
          var _n10 = new _core_js__WEBPACK_IMPORTED_MODULE_1__["VTLSymbol"](o);

          _n10.xTile = r[i++], _n10.yTile = r[i++], _n10.hash = r[i++], _n10.priority = r[i++];
          var _h6 = r[i++];

          for (var _t43 = 0; _t43 < _h6; _t43++) {
            var _t44 = r[i++],
                _e87 = r[i++],
                _l24 = r[i++],
                _o21 = r[i++],
                _h7 = !!r[i++],
                _a7 = r[i++],
                _c4 = s[i++],
                d = s[i++],
                _p2 = r[i++],
                u = r[i++];

            _n10.colliders.push({
              xTile: _t44,
              yTile: _e87,
              dxPixels: _l24,
              dyPixels: _o21,
              hard: _h7,
              partIndex: _a7,
              width: _p2,
              height: u,
              minLod: _c4,
              maxLod: d
            });
          }

          var _a6 = t[i++];

          for (var _e88 = 0; _e88 < _a6; _e88++) {
            _n10.textVertexRanges.push([t[i++], t[i++]]);
          }

          var _c3 = t[i++];

          for (var _e89 = 0; _e89 < _c3; _e89++) {
            _n10.iconVertexRanges.push([t[i++], t[i++]]);
          }

          l.push(_n10);
        }

        return i;
      }

      function h(t, e, r) {
        var _iterator80 = _createForOfIteratorHelper(t.symbols),
            _step80;

        try {
          for (_iterator80.s(); !(_step80 = _iterator80.n()).done;) {
            var _step80$value = _slicedToArray(_step80.value, 2),
                _s47 = _step80$value[0],
                _i29 = _step80$value[1];

            a(t, e, r, _i29, _s47);
          }
        } catch (err) {
          _iterator80.e(err);
        } finally {
          _iterator80.f();
        }
      }

      function a(t, e, r, s, i) {
        var l = t.layerData.get(i);

        if (3 === l.type) {
          var _iterator81 = _createForOfIteratorHelper(s),
              _step81;

          try {
            for (_iterator81.s(); !(_step81 = _iterator81.n()).done;) {
              var _e90 = _step81.value;
              var _s48 = _e90.unique;

              var _i30 = void 0;

              if (_e90.selectedForRendering) {
                var _e91 = _s48.parts[0],
                    _l25 = _e91.startOpacity,
                    _o22 = _e91.targetOpacity;
                t.allSymbolsFadingOut = t.allSymbolsFadingOut && 0 === _o22;

                var _n11 = r ? Math.floor(127 * _l25) | _o22 << 7 : _o22 ? 255 : 0;

                _i30 = _n11 << 24 | _n11 << 16 | _n11 << 8 | _n11;
              } else _i30 = 0;

              var _iterator82 = _createForOfIteratorHelper(_e90.iconVertexRanges),
                  _step82;

              try {
                for (_iterator82.s(); !(_step82 = _iterator82.n()).done;) {
                  var _step82$value = _slicedToArray(_step82.value, 2),
                      _t45 = _step82$value[0],
                      _r27 = _step82$value[1];

                  for (var _e93 = _t45; _e93 < _t45 + _r27; _e93 += 4) {
                    l.iconOpacity[_e93 / 4] = _i30;
                  }
                }
              } catch (err) {
                _iterator82.e(err);
              } finally {
                _iterator82.f();
              }

              if (_e90.selectedForRendering) {
                var _e92 = _s48.parts[1],
                    _l26 = _e92.startOpacity,
                    _o23 = _e92.targetOpacity;
                t.allSymbolsFadingOut = t.allSymbolsFadingOut && 0 === _o23;

                var _n12 = r ? Math.floor(127 * _l26) | _o23 << 7 : _o23 ? 255 : 0;

                _i30 = _n12 << 24 | _n12 << 16 | _n12 << 8 | _n12;
              } else _i30 = 0;

              var _iterator83 = _createForOfIteratorHelper(_e90.textVertexRanges),
                  _step83;

              try {
                for (_iterator83.s(); !(_step83 = _iterator83.n()).done;) {
                  var _step83$value = _slicedToArray(_step83.value, 2),
                      _t46 = _step83$value[0],
                      _r28 = _step83$value[1];

                  for (var _e94 = _t46; _e94 < _t46 + _r28; _e94 += 4) {
                    l.textOpacity[_e94 / 4] = _i30;
                  }
                }
              } catch (err) {
                _iterator83.e(err);
              } finally {
                _iterator83.f();
              }
            }
          } catch (err) {
            _iterator81.e(err);
          } finally {
            _iterator81.f();
          }

          l.lastOpacityUpdate = e, l.opacityChanged = !0;
        }
      }
      /***/

    },

    /***/
    "wk6I":
    /*!****************************************************!*\
      !*** ./node_modules/@arcgis/core/core/LRUCache.js ***!
      \****************************************************/

    /*! exports provided: default */

    /***/
    function wk6I(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony import */


      var _MemCache_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ./MemCache.js */
      "rvq7");
      /*
      All material copyright ESRI, All Rights Reserved, unless otherwise specified.
      See https://js.arcgis.com/4.18/esri/copyright.txt for details.
      */

      /* harmony default export */


      __webpack_exports__["default"] = /*#__PURE__*/function () {
        function _class8(e, r) {
          _classCallCheck(this, _class8);

          this._storage = new _MemCache_js__WEBPACK_IMPORTED_MODULE_0__["MemCacheStorage"](), this._storage.maxSize = e, r && this._storage.registerRemoveFunc("", r);
        }

        _createClass(_class8, [{
          key: "put",
          value: function put(t, e, r) {
            this._storage.put(t, e, r, 1);
          }
        }, {
          key: "pop",
          value: function pop(t) {
            return this._storage.pop(t);
          }
        }, {
          key: "get",
          value: function get(t) {
            return this._storage.get(t);
          }
        }, {
          key: "clear",
          value: function clear() {
            this._storage.clearAll();
          }
        }, {
          key: "destroy",
          value: function destroy() {
            this._storage.clearAll();
          }
        }, {
          key: "maxSize",
          get: function get() {
            return this._storage.maxSize;
          },
          set: function set(t) {
            this._storage.maxSize = t;
          }
        }]);

        return _class8;
      }();
      /***/

    },

    /***/
    "y6Hv":
    /*!************************************************************************************!*\
      !*** ./node_modules/@arcgis/core/views/2d/engine/vectorTiles/decluttering/core.js ***!
      \************************************************************************************/

    /*! exports provided: VTLSymbol, VTLUniqueSymbol */

    /***/
    function y6Hv(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "VTLSymbol", function () {
        return t;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "VTLUniqueSymbol", function () {
        return s;
      });
      /*
      All material copyright ESRI, All Rights Reserved, unless otherwise specified.
      See https://js.arcgis.com/4.18/esri/copyright.txt for details.
      */


      var t = function t(_t47) {
        _classCallCheck(this, t);

        this.xTile = 0, this.yTile = 0, this.hash = 0, this.priority = 1, this.colliders = [], this.textVertexRanges = [], this.iconVertexRanges = [], this.tile = _t47;
      };

      var s = function s() {
        _classCallCheck(this, s);

        this.tileSymbols = [], this.parts = [{
          startTime: 0,
          startOpacity: 0,
          targetOpacity: 0,
          show: !1
        }, {
          startTime: 0,
          startOpacity: 0,
          targetOpacity: 0,
          show: !1
        }], this.show = !1;
      };
      /***/

    }
  }]);
})();
//# sourceMappingURL=layers-VectorTileLayerView2D-js-es5.js.map