(function () {
  function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }

  function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

  function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && Symbol.iterator in Object(iter)) return Array.from(iter); }

  function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }

  function _createForOfIteratorHelper(o, allowArrayLike) { var it; if (typeof Symbol === "undefined" || o[Symbol.iterator] == null) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e3) { throw _e3; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = o[Symbol.iterator](); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e4) { didErr = true; err = _e4; }, f: function f() { try { if (!normalCompletion && it["return"] != null) it["return"](); } finally { if (didErr) throw err; } } }; }

  function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

  function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["default~layers-GeoRSSLayerView2D-js~layers-GraphicsLayerView2D-js~layers-ImageryLayerView2D-js~layer~795eafd7"], {
    /***/
    "2vGY":
    /*!******************************************************************************!*\
      !*** ./node_modules/@arcgis/core/views/2d/engine/webgl/mesh/VertexBuffer.js ***!
      \******************************************************************************/

    /*! exports provided: default, VertexBuffers */

    /***/
    function vGY(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "VertexBuffers", function () {
        return r;
      });
      /* harmony import */


      var _Utils_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ../Utils.js */
      "yN2G");
      /*
      All material copyright ESRI, All Rights Reserved, unless otherwise specified.
      See https://js.arcgis.com/4.18/esri/copyright.txt for details.
      */


      var t = /*#__PURE__*/function () {
        function t(e, _t, r) {
          _classCallCheck(this, t);

          this.data = e, this.stride = _t, this.vertexCount = r;
        }

        _createClass(t, null, [{
          key: "decode",
          value: function decode(r) {
            var s = Object(_Utils_js__WEBPACK_IMPORTED_MODULE_0__["allocateTypedArrayBufferwithData"])(r.data, r.stride),
                o = r.stride,
                n = r.vertexCount;
            return new t(s, o, n);
          }
        }, {
          key: "fromVertexVector",
          value: function fromVertexVector(r) {
            var s = Object(_Utils_js__WEBPACK_IMPORTED_MODULE_0__["allocateTypedArrayBufferwithData"])(r.data.buffer(), r.stride),
                o = r.stride,
                n = r.vertexCount;
            return new t(s, o, n);
          }
        }]);

        return t;
      }();

      var r = /*#__PURE__*/function () {
        function r(e, t, _r) {
          _classCallCheck(this, r);

          this.geometryType = e, this.indexBuffer = new Uint32Array(t), this.namedBuffers = _r;
        }

        _createClass(r, null, [{
          key: "decode",
          value: function decode(e) {
            var s = e.geometryType,
                o = e.indexBuffer,
                n = {};

            for (var _r4 in e.namedBuffers) {
              n[_r4] = t.decode(e.namedBuffers[_r4]);
            }

            return new r(s, o, n);
          }
        }, {
          key: "fromVertexVectors",
          value: function fromVertexVectors(e) {
            var s = e.geometryType,
                o = e.indexVector.buffer(),
                n = {};

            for (var _r5 in e.namedVectors) {
              n[_r5] = t.fromVertexVector(e.namedVectors[_r5]);
            }

            return new r(s, o, n);
          }
        }]);

        return r;
      }();
      /* harmony default export */


      __webpack_exports__["default"] = t;
      /***/
    },

    /***/
    "NMeD":
    /*!******************************************************************************!*\
      !*** ./node_modules/@arcgis/core/views/2d/engine/webgl/collisions/Metric.js ***!
      \******************************************************************************/

    /*! exports provided: default */

    /***/
    function NMeD(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony import */


      var _core_Logger_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ../../../../../core/Logger.js */
      "6S2I");
      /* harmony import */


      var _definitions_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ../definitions.js */
      "jIHu");
      /* harmony import */


      var _chunks_vec2f32_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ../../../../../chunks/vec2f32.js */
      "c46T");
      /* harmony import */


      var _BoundingBox_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./BoundingBox.js */
      "e+Fw");
      /* harmony import */


      var _util_serializationUtils_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ../util/serializationUtils.js */
      "wnVl");
      /*
      All material copyright ESRI, All Rights Reserved, unless otherwise specified.
      See https://js.arcgis.com/4.18/esri/copyright.txt for details.
      */


      var a = _core_Logger_js__WEBPACK_IMPORTED_MODULE_0__["default"].getLogger("esri/views/2d/engine/webgl/collisions/Metric");

      var d = /*#__PURE__*/function () {
        function d(t, s, i, e, h) {
          _classCallCheck(this, d);

          this.id = t, this.range = s, this.boxes = null, this.minZoom = -1, this.size = 0, this.directionX = 0, this.directionY = 0, this.offsetX = 0, this.offsetY = 0, this.placementPadding = 0, this.anchor = Object(_chunks_vec2f32_js__WEBPACK_IMPORTED_MODULE_2__["f"])(i, e), this.baseZoom = h;
        }

        _createClass(d, [{
          key: "add",
          value: function add(t, s, i) {
            t.x = t.x + s, t.y = t.y + i, this.bounds ? this.boxes ? (this.boxes.push(t), this.bounds.extend(t)) : (this.boxes = [this.bounds, t], this.bounds = this.bounds.clone(), this.bounds.extend(t)) : this.bounds = t;
          }
        }, {
          key: "computeIndex",
          value: function computeIndex() {
            var t = this.anchor[0],
                i = this.anchor[1],
                o = Math.floor(t / _definitions_js__WEBPACK_IMPORTED_MODULE_1__["COLLISION_BUCKET_SIZE"]),
                h = Math.floor(i / _definitions_js__WEBPACK_IMPORTED_MODULE_1__["COLLISION_BUCKET_SIZE"]);
            this.xBucket = o, this.yBucket = h;
            var n = _definitions_js__WEBPACK_IMPORTED_MODULE_1__["TILE_SIZE"] / _definitions_js__WEBPACK_IMPORTED_MODULE_1__["COLLISION_BUCKET_SIZE"];
            if (this.hasVV) return this.xOverflow = n, void (this.yOverflow = n);
            this.xOverflow = Math.min(n, Math.ceil(2 * this.bounds.width / _definitions_js__WEBPACK_IMPORTED_MODULE_1__["COLLISION_BUCKET_SIZE"])), this.yOverflow = Math.min(n, Math.ceil(2 * this.bounds.height / _definitions_js__WEBPACK_IMPORTED_MODULE_1__["COLLISION_BUCKET_SIZE"]));
          }
        }, {
          key: "findCollisionDelta",
          value: function findCollisionDelta(t) {
            var s = this.bounds.findCollisionDelta(t.bounds),
                e = this.boxes && this.boxes.length,
                o = t.boxes && t.boxes.length;
            return Math.abs(s) > _definitions_js__WEBPACK_IMPORTED_MODULE_1__["COLLISION_MAX_ZOOM_DELTA"] || !e && !o ? s : e && o ? this._boxesToBoxes(t) : e ? this._boxesToBox(t) : this._boxToBoxes(t);
          }
        }, {
          key: "computeVVOffset",
          value: function computeVVOffset(t, s) {
            s || a.error("mapview-labeling", "Unable to compute label offset. Expected an evaluator function but found ".concat(s));
            var i = this.size;

            if (this.hasVV) {
              var e = s(t);
              i = isNaN(e) || null == e || e === 1 / 0 ? this.size : e;
            }

            this._computeOffset(i);
          }
        }, {
          key: "setPlacementOffset",
          value: function setPlacementOffset(t, s, i, e, o) {
            this.hasVV = t, this.size = s, this.placementPadding = Math.round(i), this.directionX = e, this.directionY = o;
          }
        }, {
          key: "clone",
          value: function clone() {
            var t = new d(this.id, this.range, this.anchor[0], this.anchor[1], this.baseZoom);
            return t.minZoom = this.minZoom, this.bounds && (t.bounds = this.bounds.clone()), this.boxes && (t.boxes = this.boxes.map(function (t) {
              return t.clone();
            })), t.xBucket = this.xBucket, t.yBucket = this.yBucket, t.xOverflow = this.xOverflow, t.yOverflow = this.yOverflow, t.hasVV = this.hasVV, t.size = this.size, t.directionX = this.directionX, t.directionY = this.directionY, t.offsetX = this.offsetX, t.offsetY = this.offsetY, t;
          }
        }, {
          key: "_boxToBoxes",
          value: function _boxToBoxes(t) {
            var s = -1 / 0;

            var _iterator = _createForOfIteratorHelper(t.boxes),
                _step;

            try {
              for (_iterator.s(); !(_step = _iterator.n()).done;) {
                var i = _step.value;

                var _t2 = this.bounds.findCollisionDelta(i);

                s = Math.max(_t2, s);
              }
            } catch (err) {
              _iterator.e(err);
            } finally {
              _iterator.f();
            }

            return s;
          }
        }, {
          key: "_boxesToBox",
          value: function _boxesToBox(t) {
            var s = this.boxes[0].findCollisionDelta(t.bounds);

            for (var i = 1; i < this.boxes.length; i++) {
              var e = this.boxes[i].findCollisionDelta(t.bounds);
              s = Math.max(e, s);
            }

            return s;
          }
        }, {
          key: "_boxesToBoxes",
          value: function _boxesToBoxes(t) {
            var s = -1 / 0;

            for (var i = 0; i < this.boxes.length; i++) {
              var e = this.boxes[i];

              var _iterator2 = _createForOfIteratorHelper(t.boxes),
                  _step2;

              try {
                for (_iterator2.s(); !(_step2 = _iterator2.n()).done;) {
                  var _i = _step2.value;

                  var _t3 = e.findCollisionDelta(_i);

                  s = Math.max(_t3, s);
                }
              } catch (err) {
                _iterator2.e(err);
              } finally {
                _iterator2.f();
              }
            }

            return s;
          }
        }, {
          key: "_computeOffset",
          value: function _computeOffset(t) {
            this.offsetX = this.directionX * (t / 2 + this.placementPadding), this.offsetY = this.directionY * (t / 2 + this.placementPadding);
          }
        }, {
          key: "serialize",
          value: function serialize(t) {
            return t.push(this.id), this.bounds.serialize(t), t.push(this.range.from), t.push(this.range.count), t.push(this.anchor[0]), t.push(this.anchor[1]), t.push(this.baseZoom), t.push(this.hasVV ? 1 : 0), t.push(this.size), t.writeF32(this.directionX), t.writeF32(this.directionY), t.push(this.offsetX), t.push(this.offsetY), t.push(this.placementPadding), Object(_util_serializationUtils_js__WEBPACK_IMPORTED_MODULE_4__["serializeList"])(t, this.boxes), t;
          }
        }], [{
          key: "deserialize",
          value: function deserialize(t) {
            var s = t.readInt32(),
                i = _BoundingBox_js__WEBPACK_IMPORTED_MODULE_3__["default"].deserialize(t),
                e = {
              from: t.readInt32(),
              count: t.readInt32()
            },
                o = t.readInt32(),
                n = t.readInt32(),
                a = t.readInt32(),
                f = t.readInt32(),
                l = t.readInt32(),
                c = t.readF32(),
                u = t.readF32(),
                b = t.readInt32(),
                x = t.readInt32(),
                m = t.readInt32(),
                p = Object(_util_serializationUtils_js__WEBPACK_IMPORTED_MODULE_4__["deserializeList"])(t, _BoundingBox_js__WEBPACK_IMPORTED_MODULE_3__["default"]),
                g = new d(s, e, o, n, a);

            return g.bounds = i, g.boxes = p, g.setPlacementOffset(!!f, l, m, c, u), g.offsetX = b, g.offsetY = x, g.computeIndex(), f || g._computeOffset(l), g;
          }
        }]);

        return d;
      }();
      /* harmony default export */


      __webpack_exports__["default"] = d;
      /***/
    },

    /***/
    "PeSW":
    /*!************************************************************************!*\
      !*** ./node_modules/@arcgis/core/views/2d/engine/webgl/util/Writer.js ***!
      \************************************************************************/

    /*! exports provided: default */

    /***/
    function PeSW(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /*
      All material copyright ESRI, All Rights Reserved, unless otherwise specified.
      See https://js.arcgis.com/4.18/esri/copyright.txt for details.
      */

      /* harmony default export */


      __webpack_exports__["default"] = /*#__PURE__*/function () {
        function _class(t, s) {
          _classCallCheck(this, _class);

          this._pos = 0;
          var r = s ? this._roundToNearest(s, t.BYTES_PER_ELEMENT) : 40;
          this._array = new ArrayBuffer(r), this._buffer = new t(this._array), this._ctor = t;
        }

        _createClass(_class, [{
          key: "length",
          get: function get() {
            return this._pos;
          }
        }, {
          key: "_roundToNearest",
          value: function _roundToNearest(t, s) {
            var r = Math.round(t);
            return r + (s - r % s);
          }
        }, {
          key: "_ensureSize",
          value: function _ensureSize(t) {
            if (this._pos + t >= this._buffer.length) {
              var s = this._roundToNearest(1.5 * (this._array.byteLength + t * this._buffer.BYTES_PER_ELEMENT), this._buffer.BYTES_PER_ELEMENT),
                  r = new ArrayBuffer(s),
                  e = new this._ctor(r);

              e.set(this._buffer, 0), this._array = r, this._buffer = e;
            }
          }
        }, {
          key: "writeF32",
          value: function writeF32(t) {
            this._ensureSize(1);

            var s = this._pos;
            return new Float32Array(this._array, 4 * this._pos, 1)[0] = t, this._pos++, s;
          }
        }, {
          key: "push",
          value: function push(t) {
            this._ensureSize(1);

            var s = this._pos;
            return this._buffer[this._pos++] = t, s;
          }
        }, {
          key: "writeFixed",
          value: function writeFixed(t) {
            this._buffer[this._pos++] = t;
          }
        }, {
          key: "setValue",
          value: function setValue(t, s) {
            this._buffer[t] = s;
          }
        }, {
          key: "getValue",
          value: function getValue(t) {
            return this._buffer[t];
          }
        }, {
          key: "incr",
          value: function incr(t) {
            this._buffer[t]++;
          }
        }, {
          key: "decr",
          value: function decr(t) {
            this._buffer[t]--;
          }
        }, {
          key: "writeRegion",
          value: function writeRegion(t) {
            this._ensureSize(t.length);

            var s = this._pos;
            return this._buffer.set(t, this._pos), this._pos += t.length, s;
          }
        }, {
          key: "buffer",
          value: function buffer() {
            var t = this._array.slice(0, 4 * this._pos);

            return this.destroy(), t;
          }
        }, {
          key: "toArray",
          value: function toArray() {
            var t = this._array,
                s = [];

            for (var r = 0; r < t.byteLength / 4; r++) {
              s.push(t[r]);
            }

            return s;
          }
        }, {
          key: "seek",
          value: function seek(t) {
            this._pos = t;
          }
        }, {
          key: "destroy",
          value: function destroy() {
            this._array = null, this._buffer = null;
          }
        }]);

        return _class;
      }();
      /***/

    },

    /***/
    "VPKi":
    /*!*********************************************************************!*\
      !*** ./node_modules/@arcgis/core/views/2d/engine/webgl/MeshData.js ***!
      \*********************************************************************/

    /*! exports provided: default */

    /***/
    function VPKi(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /*
      All material copyright ESRI, All Rights Reserved, unless otherwise specified.
      See https://js.arcgis.com/4.18/esri/copyright.txt for details.
      */

      /* harmony default export */


      __webpack_exports__["default"] = /*#__PURE__*/function () {
        function _class2() {
          _classCallCheck(this, _class2);

          this.vertexData = new Map(), this.vertexCount = 0, this.indexData = [];
        }

        _createClass(_class2, [{
          key: "clear",
          value: function clear() {
            this.vertexData.clear(), this.vertexCount = 0, this.indexData = [];
          }
        }, {
          key: "update",
          value: function update(t, e, a) {
            for (var _e in t) {
              this.vertexData.set(_e, t[_e]);
            }

            for (var _e2 in this.vertexData) {
              null === t[_e2] && this.vertexData["delete"](_e2);
            }

            this.vertexCount = e, this.indexData = a;
          }
        }]);

        return _class2;
      }();
      /***/

    },

    /***/
    "ZByl":
    /*!*****************************************************************************!*\
      !*** ./node_modules/@arcgis/core/views/2d/engine/webgl/WGLDisplayObject.js ***!
      \*****************************************************************************/

    /*! exports provided: default */

    /***/
    function ZByl(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony import */


      var _WGLDisplayRecord_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ./WGLDisplayRecord.js */
      "opKs");
      /* harmony import */


      var _util_serializationUtils_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./util/serializationUtils.js */
      "wnVl");
      /* harmony import */


      var _collisions_Metric_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./collisions/Metric.js */
      "NMeD");
      /*
      All material copyright ESRI, All Rights Reserved, unless otherwise specified.
      See https://js.arcgis.com/4.18/esri/copyright.txt for details.
      */


      var r = /*#__PURE__*/function () {
        function r(s) {
          _classCallCheck(this, r);

          this.insertAfter = null, this.id = s, this.displayRecords = [], this.metrics = [];
        }

        _createClass(r, [{
          key: "copy",
          value: function copy() {
            var s = new r(this.id);
            return s.set(this), s;
          }
        }, {
          key: "clone",
          value: function clone() {
            var s = new r(this.id);
            return s.displayRecords = this.displayRecords.map(function (s) {
              return s.clone();
            }), s.metrics = this.metrics.map(function (s) {
              return s.clone();
            }), s.insertAfter = this.insertAfter, s;
          }
        }, {
          key: "set",
          value: function set(s) {
            this.id = s.id, this.displayRecords = s.displayRecords, this.metrics = s.metrics, this.insertAfter = s.insertAfter;
          }
        }, {
          key: "serialize",
          value: function serialize(s) {
            return s.push(this.id), Object(_util_serializationUtils_js__WEBPACK_IMPORTED_MODULE_1__["serializeList"])(s, this.metrics), Object(_util_serializationUtils_js__WEBPACK_IMPORTED_MODULE_1__["serializeList"])(s, this.displayRecords), s;
          }
        }], [{
          key: "deserialize",
          value: function deserialize(i) {
            var c = i.readInt32(),
                o = new r(c),
                d = {
              id: c
            },
                n = Object(_util_serializationUtils_js__WEBPACK_IMPORTED_MODULE_1__["deserializeList"])(i, _collisions_Metric_js__WEBPACK_IMPORTED_MODULE_2__["default"]);
            return n.length && (o.metrics = n), o.displayRecords = Object(_util_serializationUtils_js__WEBPACK_IMPORTED_MODULE_1__["deserializeList"])(i, _WGLDisplayRecord_js__WEBPACK_IMPORTED_MODULE_0__["default"], d), o;
          }
        }]);

        return r;
      }();
      /* harmony default export */


      __webpack_exports__["default"] = r;
      /***/
    },

    /***/
    "acOm":
    /*!**************************************************************************!*\
      !*** ./node_modules/@arcgis/core/views/2d/engine/webgl/mesh/MeshData.js ***!
      \**************************************************************************/

    /*! exports provided: MeshData */

    /***/
    function acOm(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "MeshData", function () {
        return f;
      });
      /* harmony import */


      var _WGLDisplayRecord_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ../WGLDisplayRecord.js */
      "opKs");
      /* harmony import */


      var _util_serializationUtils_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ../util/serializationUtils.js */
      "wnVl");
      /* harmony import */


      var _collisions_Metric_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ../collisions/Metric.js */
      "NMeD");
      /* harmony import */


      var _WGLDisplayObject_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ../WGLDisplayObject.js */
      "ZByl");
      /* harmony import */


      var _util_Reader_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ../util/Reader.js */
      "r7dU");
      /* harmony import */


      var _util_Writer_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ../util/Writer.js */
      "PeSW");
      /*
      All material copyright ESRI, All Rights Reserved, unless otherwise specified.
      See https://js.arcgis.com/4.18/esri/copyright.txt for details.
      */


      var f = /*#__PURE__*/function () {
        function f(s, t) {
          _classCallCheck(this, f);

          this.vertexVectorsMap = s, this._currentIndex = -1, this._currentRecordOffset = 0, this._currentMetricOffset = 0, this._currentMetrics = [];
          var e = 4 * (4 * t.features + 1),
              r = 4 * (8 * t.records + 1),
              i = 4 * (20 * t.metrics + 1);
          this._bufDisplayObjects = new _util_Writer_js__WEBPACK_IMPORTED_MODULE_5__["default"](Uint32Array, e + 4), this._bufDisplayRecords = new _util_Writer_js__WEBPACK_IMPORTED_MODULE_5__["default"](Uint32Array, r + 4), this._bufMetrics = new _util_Writer_js__WEBPACK_IMPORTED_MODULE_5__["default"](Uint32Array, i + 4), this._bufDisplayObjects.push(0), this._bufDisplayRecords.push(0), this._bufMetrics.push(0);
        }

        _createClass(f, [{
          key: "vertexBuffersMap",
          get: function get() {
            if (!this._vertexBuffersMap) {
              this._vertexBuffersMap = {};

              for (var s = 0; s < this.vertexVectorsMap.length; s++) {
                this._vertexBuffersMap[s] = this.vertexVectorsMap[s].intoBuffers();
              }

              this.vertexVectorsMap = null;
            }

            return this._vertexBuffersMap;
          }
        }, {
          key: "get",
          value: function get(s) {
            return this.vertexVectorsMap[s];
          }
        }, {
          key: "currentDisplayRecordCount",
          value: function currentDisplayRecordCount() {
            return this._bufDisplayRecords[this._currentRecordOffset];
          }
        }, {
          key: "writeDisplayObject",
          value: function writeDisplayObject(s, t) {
            this._bufDisplayObjects.incr(0), this._currentIndex = this._bufDisplayObjects.push(s), this._bufDisplayObjects.push(t), this._bufDisplayObjects.push(0), this._bufDisplayObjects.push(0), this._currentRecordOffset = 0, this._currentMetricOffset = 0, this._currentMetrics = [];
          }
        }, {
          key: "hasDisplayRecords",
          value: function hasDisplayRecords() {
            return !(0 === this._currentRecordOffset);
          }
        }, {
          key: "endDisplayObject",
          value: function endDisplayObject() {
            this.hasDisplayRecords() ? this._currentMetrics && (0 === this._currentMetricOffset && (this._bufDisplayObjects.setValue(this._currentIndex + 3, this._bufMetrics.length), this._currentMetricOffset = this._bufMetrics.length), Object(_util_serializationUtils_js__WEBPACK_IMPORTED_MODULE_1__["serializeList"])(this._bufMetrics, this._currentMetrics)) : this._rollbackDisplayObject();
          }
        }, {
          key: "writeDisplayRecord",
          value: function writeDisplayRecord(s, t, e, r, i, c) {
            var u = arguments.length > 6 && arguments[6] !== undefined ? arguments[6] : 0;

            var _f = arguments.length > 7 && arguments[7] !== undefined ? arguments[7] : 0;

            0 === this._currentRecordOffset && (this._currentRecordOffset = this._bufDisplayRecords.push(0), this._bufDisplayObjects.setValue(this._currentIndex + 2, this._currentRecordOffset)), this._bufDisplayRecords.incr(this._currentRecordOffset), this._bufDisplayRecords.push(s), this._bufDisplayRecords.push(t), this._bufDisplayRecords.push(e), this._bufDisplayRecords.push(r), this._bufDisplayRecords.push(i), this._bufDisplayRecords.push(c), this._bufDisplayRecords.push(u), this._bufDisplayRecords.push(_f);
          }
        }, {
          key: "writeMetrics",
          value: function writeMetrics(s) {
            var _this$_currentMetrics;

            s && (_this$_currentMetrics = this._currentMetrics).push.apply(_this$_currentMetrics, _toConsumableArray(s));
          }
        }, {
          key: "encode",
          value: function encode(s, t) {
            var e = {};

            for (var _s = 0; _s < this.vertexVectorsMap.length; _s++) {
              var r = this.vertexVectorsMap[_s];
              e[_s] = {}, r.transfer(e[_s], t);
            }

            s.bufDisplayObjects = this._bufDisplayObjects.buffer(), s.bufRecords = this._bufDisplayRecords.buffer(), s.bufMetrics = this._bufMetrics.buffer(), t.push(s.bufDisplayObjects), t.push(s.bufMetrics), t.push(s.bufRecords), s.vertexBuffersMap = e, this.destroy();
          }
        }, {
          key: "destroy",
          value: function destroy() {
            this.vertexVectorsMap = null, this._bufDisplayObjects = null, this._bufDisplayRecords = null, this._bufMetrics = null;
          }
        }, {
          key: "_rollbackDisplayObject",
          value: function _rollbackDisplayObject() {
            this._bufDisplayObjects.decr(0), this._bufDisplayObjects.seek(this._bufDisplayObjects.length - 4), this._currentIndex = this._bufDisplayObjects.length;
          }
        }], [{
          key: "deserializeDisplayObjects",
          value: function deserializeDisplayObjects(t) {
            var u = t.bufDisplayObjects,
                _f2 = t.bufMetrics,
                h = t.bufRecords,
                p = new _util_Reader_js__WEBPACK_IMPORTED_MODULE_4__["default"](u),
                a = new _util_Reader_js__WEBPACK_IMPORTED_MODULE_4__["default"](h),
                l = new _util_Reader_js__WEBPACK_IMPORTED_MODULE_4__["default"](_f2),
                n = [];
            var b = p.readInt32();

            for (a.readInt32(), l.readInt32(); b--;) {
              var _t4 = p.readInt32(),
                  c = p.readInt32(),
                  _u = p.readInt32(),
                  _f4 = p.readInt32(),
                  _h = new _WGLDisplayObject_js__WEBPACK_IMPORTED_MODULE_3__["default"](_t4);

              0 !== c && (_h.insertAfter = c), 0 !== _u && (_h.displayRecords = Object(_util_serializationUtils_js__WEBPACK_IMPORTED_MODULE_1__["deserializeList"])(a, _WGLDisplayRecord_js__WEBPACK_IMPORTED_MODULE_0__["default"], {
                id: _t4
              })), 0 !== _f4 && (_h.metrics = Object(_util_serializationUtils_js__WEBPACK_IMPORTED_MODULE_1__["deserializeList"])(l, _collisions_Metric_js__WEBPACK_IMPORTED_MODULE_2__["default"])), n.push(_h);
            }

            return n;
          }
        }]);

        return f;
      }();
      /***/

    },

    /***/
    "opKs":
    /*!*****************************************************************************!*\
      !*** ./node_modules/@arcgis/core/views/2d/engine/webgl/WGLDisplayRecord.js ***!
      \*****************************************************************************/

    /*! exports provided: default */

    /***/
    function opKs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony import */


      var _Utils_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ./Utils.js */
      "yN2G");
      /* harmony import */


      var _MeshData_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./MeshData.js */
      "VPKi");
      /*
      All material copyright ESRI, All Rights Reserved, unless otherwise specified.
      See https://js.arcgis.com/4.18/esri/copyright.txt for details.
      */


      var s = /*#__PURE__*/function () {
        function s(t, e, _s2) {
          var r = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : 0;
          var i = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : 0;

          _classCallCheck(this, s);

          this.id = t, this.geometryType = e, this.materialKey = _s2, this.minZoom = r, this.maxZoom = i, this.meshData = null, this.symbolLevel = 0, this.zOrder = 0, this.vertexFrom = 0, this.vertexCount = 0, this.indexFrom = 0, this.indexCount = 0;
        }

        _createClass(s, [{
          key: "sortKey",
          get: function get() {
            return void 0 === this._sortKey && this._computeSortKey(), this._sortKey;
          }
        }, {
          key: "clone",
          value: function clone() {
            return this.copy();
          }
        }, {
          key: "copy",
          value: function copy() {
            var t = new s(this.id, this.geometryType, this.materialKey);
            return t.vertexFrom = this.vertexFrom, t.vertexCount = this.vertexCount, t.indexFrom = this.indexFrom, t.indexCount = this.indexCount, t.zOrder = this.zOrder, t.symbolLevel = this.symbolLevel, t.meshData = this.meshData, t.minZoom = this.minZoom, t.maxZoom = this.maxZoom, t;
          }
        }, {
          key: "setMeshDataFromBuffers",
          value: function setMeshDataFromBuffers(_s3, r, i) {
            var o = new _MeshData_js__WEBPACK_IMPORTED_MODULE_1__["default"]();

            for (var e in r) {
              var _i2 = r[e].stride,
                  a = r[e].data,
                  h = [],
                  n = Object(_Utils_js__WEBPACK_IMPORTED_MODULE_0__["strideToPackingFactor"])(_i2);

              for (var t = 0; t < _i2 * _s3.vertexCount / n; ++t) {
                h[t] = a[t + _i2 * _s3.vertexFrom / n];
              }

              o.vertexData.set(e, h);
            }

            o.indexData.length = 0;

            for (var _t5 = 0; _t5 < _s3.indexCount; ++_t5) {
              o.indexData[_t5] = i[_t5 + _s3.indexFrom] - _s3.vertexFrom;
            }

            o.vertexCount = _s3.vertexCount, this.meshData = o;
          }
        }, {
          key: "readMeshDataFromBuffers",
          value: function readMeshDataFromBuffers(_s4, r) {
            this.meshData ? this.meshData.clear() : this.meshData = new _MeshData_js__WEBPACK_IMPORTED_MODULE_1__["default"]();

            for (var e in _s4) {
              var _r6 = _s4[e].stride,
                  i = _s4[e].data,
                  o = [],
                  a = Object(_Utils_js__WEBPACK_IMPORTED_MODULE_0__["strideToPackingFactor"])(_r6);

              for (var t = 0; t < _r6 * this.vertexCount / a; ++t) {
                o[t] = i[t + _r6 * this.vertexFrom / a];
              }

              this.meshData.vertexData.set(e, o);
            }

            this.meshData.indexData.length = 0;

            for (var _t6 = 0; _t6 < this.indexCount; ++_t6) {
              this.meshData.indexData[_t6] = r[_t6 + this.indexFrom] - this.vertexFrom;
            }

            this.meshData.vertexCount = this.vertexCount;
          }
        }, {
          key: "writeMeshDataToBuffers",
          value: function writeMeshDataToBuffers(e, _s5, r, i) {
            for (var _r7 in _s5) {
              var _i3 = _s5[_r7].stride,
                  o = this.meshData.vertexData.get(_r7),
                  a = _s5[_r7].data,
                  h = Object(_Utils_js__WEBPACK_IMPORTED_MODULE_0__["strideToPackingFactor"])(_i3);

              for (var t = 0; t < _i3 * this.meshData.vertexCount / h; ++t) {
                a[t + _i3 * e / h] = o[t];
              }
            }

            for (var _t7 = 0; _t7 < this.meshData.indexData.length; ++_t7) {
              i[_t7 + r] = this.meshData.indexData[_t7] + e;
            }

            this.vertexFrom = e, this.vertexCount = this.meshData.vertexCount, this.indexFrom = r, this.indexCount = this.meshData.indexData.length;
          }
        }, {
          key: "_computeSortKey",
          value: function _computeSortKey() {
            this._sortKey = (31 & this.symbolLevel) << 12 | (127 & this.zOrder) << 4 | 7 & this.geometryType;
          }
        }, {
          key: "serialize",
          value: function serialize(t) {
            return t.push(this.geometryType), t.push(this.materialKey), t.push(this.vertexFrom), t.push(this.vertexCount), t.push(this.indexFrom), t.push(this.indexCount), t.push(this.minZoom), t.push(this.maxZoom), t;
          }
        }], [{
          key: "writeAllMeshDataToBuffers",
          value: function writeAllMeshDataToBuffers(t, e, _s6) {
            var r = 0,
                i = 0;

            var _iterator3 = _createForOfIteratorHelper(t),
                _step3;

            try {
              for (_iterator3.s(); !(_step3 = _iterator3.n()).done;) {
                var o = _step3.value;
                o.writeMeshDataToBuffers(r, e, i, _s6), r += o.vertexCount, i += o.indexCount;
              }
            } catch (err) {
              _iterator3.e(err);
            } finally {
              _iterator3.f();
            }
          }
        }, {
          key: "deserialize",
          value: function deserialize(t, e) {
            var r = t.readInt32(),
                i = t.readInt32(),
                o = new s(e.id, r, i);
            return o.vertexFrom = t.readInt32(), o.vertexCount = t.readInt32(), o.indexFrom = t.readInt32(), o.indexCount = t.readInt32(), o.minZoom = t.readInt32(), o.maxZoom = t.readInt32(), o;
          }
        }]);

        return s;
      }();
      /* harmony default export */


      __webpack_exports__["default"] = s;
      /***/
    },

    /***/
    "r7dU":
    /*!************************************************************************!*\
      !*** ./node_modules/@arcgis/core/views/2d/engine/webgl/util/Reader.js ***!
      \************************************************************************/

    /*! exports provided: default */

    /***/
    function r7dU(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /*
      All material copyright ESRI, All Rights Reserved, unless otherwise specified.
      See https://js.arcgis.com/4.18/esri/copyright.txt for details.
      */

      /* harmony default export */


      __webpack_exports__["default"] = /*#__PURE__*/function () {
        function _class3(t) {
          _classCallCheck(this, _class3);

          this._pos = 0, this._buffer = t, this._i32View = new Int32Array(this._buffer), this._f32View = new Float32Array(this._buffer);
        }

        _createClass(_class3, [{
          key: "readInt32",
          value: function readInt32() {
            return this._i32View[this._pos++];
          }
        }, {
          key: "readF32",
          value: function readF32() {
            return this._f32View[this._pos++];
          }
        }]);

        return _class3;
      }();
      /***/

    },

    /***/
    "wnVl":
    /*!************************************************************************************!*\
      !*** ./node_modules/@arcgis/core/views/2d/engine/webgl/util/serializationUtils.js ***!
      \************************************************************************************/

    /*! exports provided: deserializeList, serializeList */

    /***/
    function wnVl(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "deserializeList", function () {
        return n;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "serializeList", function () {
        return e;
      });
      /*
      All material copyright ESRI, All Rights Reserved, unless otherwise specified.
      See https://js.arcgis.com/4.18/esri/copyright.txt for details.
      */


      function e(e, n) {
        if (null !== n) {
          e.push(n.length);

          var _iterator4 = _createForOfIteratorHelper(n),
              _step4;

          try {
            for (_iterator4.s(); !(_step4 = _iterator4.n()).done;) {
              var r = _step4.value;
              r.serialize(e);
            }
          } catch (err) {
            _iterator4.e(err);
          } finally {
            _iterator4.f();
          }

          return e;
        }

        e.push(0);
      }

      function n(e, n, r) {
        var t = e.readInt32(),
            o = new Array(t);

        for (var _t8 = 0; _t8 < o.length; _t8++) {
          o[_t8] = n.deserialize(e, r);
        }

        return o;
      }
      /***/

    }
  }]);
})();
//# sourceMappingURL=default~layers-GeoRSSLayerView2D-js~layers-GraphicsLayerView2D-js~layers-ImageryLayerView2D-js~layer~795eafd7-es5.js.map