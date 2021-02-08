(function () {
  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["default~layers-GeoRSSLayerView2D-js~layers-GraphicsLayerView2D-js~layers-ImageryLayerView2D-js~layer~b07a11e1"], {
    /***/
    "6NBT":
    /*!****************************************************************************!*\
      !*** ./node_modules/@arcgis/core/views/2d/engine/webgl/mesh/Tesselator.js ***!
      \****************************************************************************/

    /*! exports provided: default */

    /***/
    function NBT(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony import */


      var _core_Logger_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ../../../../../core/Logger.js */
      "6S2I");
      /* harmony import */


      var _chunks_commonjsHelpers_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ../../../../../chunks/_commonjsHelpers.js */
      "X2wA");
      /*
      All material copyright ESRI, All Rights Reserved, unless otherwise specified.
      See https://js.arcgis.com/4.18/esri/copyright.txt for details.
      */


      var s = Object(_chunks_commonjsHelpers_js__WEBPACK_IMPORTED_MODULE_1__["c"])(function (e) {
        var t;
        void 0 !== (t = function () {
          var e = {
            DEBUG: !1,
            assert: function assert(t, s) {
              if (e.DEBUG && !t) throw new Error("Assertion failed" + (s ? ": " + s : ""));
            },
            GLU_TESS_MAX_COORD: 1e150,
            TRUE_PROJECT: !1,
            GLU_TESS_DEFAULT_TOLERANCE: 0,
            windingRule: {
              GLU_TESS_WINDING_ODD: 100130,
              GLU_TESS_WINDING_NONZERO: 100131,
              GLU_TESS_WINDING_POSITIVE: 100132,
              GLU_TESS_WINDING_NEGATIVE: 100133,
              GLU_TESS_WINDING_ABS_GEQ_TWO: 100134
            },
            primitiveType: {
              GL_LINE_LOOP: 2,
              GL_TRIANGLES: 4,
              GL_TRIANGLE_STRIP: 5,
              GL_TRIANGLE_FAN: 6
            },
            errorType: {
              GLU_TESS_MISSING_BEGIN_POLYGON: 100151,
              GLU_TESS_MISSING_END_POLYGON: 100153,
              GLU_TESS_MISSING_BEGIN_CONTOUR: 100152,
              GLU_TESS_MISSING_END_CONTOUR: 100154,
              GLU_TESS_COORD_TOO_LARGE: 100155,
              GLU_TESS_NEED_COMBINE_CALLBACK: 100156
            },
            gluEnum: {
              GLU_TESS_BEGIN: 100100,
              GLU_TESS_VERTEX: 100101,
              GLU_TESS_END: 100102,
              GLU_TESS_ERROR: 100103,
              GLU_TESS_EDGE_FLAG: 100104,
              GLU_TESS_COMBINE: 100105,
              GLU_TESS_BEGIN_DATA: 100106,
              GLU_TESS_VERTEX_DATA: 100107,
              GLU_TESS_END_DATA: 100108,
              GLU_TESS_ERROR_DATA: 100109,
              GLU_TESS_EDGE_FLAG_DATA: 100110,
              GLU_TESS_COMBINE_DATA: 100111,
              GLU_TESS_MESH: 100112,
              GLU_TESS_TOLERANCE: 100142,
              GLU_TESS_WINDING_RULE: 100140,
              GLU_TESS_BOUNDARY_ONLY: 100141,
              GLU_INVALID_ENUM: 100900,
              GLU_INVALID_VALUE: 100901
            },
            geom: {}
          };
          return e.geom.vertEq = function (e, t) {
            return e.s === t.s && e.t === t.t;
          }, e.geom.vertLeq = function (e, t) {
            return e.s < t.s || e.s === t.s && e.t <= t.t;
          }, e.geom.edgeEval = function (t, s, r) {
            e.assert(e.geom.vertLeq(t, s) && e.geom.vertLeq(s, r));
            var i = s.s - t.s,
                n = r.s - s.s;
            return i + n > 0 ? i < n ? s.t - t.t + (t.t - r.t) * (i / (i + n)) : s.t - r.t + (r.t - t.t) * (n / (i + n)) : 0;
          }, e.geom.edgeSign = function (t, s, r) {
            e.assert(e.geom.vertLeq(t, s) && e.geom.vertLeq(s, r));
            var i = s.s - t.s,
                n = r.s - s.s;
            return i + n > 0 ? (s.t - r.t) * i + (s.t - t.t) * n : 0;
          }, e.geom.transLeq = function (e, t) {
            return e.t < t.t || e.t === t.t && e.s <= t.s;
          }, e.geom.transEval = function (t, s, r) {
            e.assert(e.geom.transLeq(t, s) && e.geom.transLeq(s, r));
            var i = s.t - t.t,
                n = r.t - s.t;
            return i + n > 0 ? i < n ? s.s - t.s + (t.s - r.s) * (i / (i + n)) : s.s - r.s + (r.s - t.s) * (n / (i + n)) : 0;
          }, e.geom.transSign = function (t, s, r) {
            e.assert(e.geom.transLeq(t, s) && e.geom.transLeq(s, r));
            var i = s.t - t.t,
                n = r.t - s.t;
            return i + n > 0 ? (s.s - r.s) * i + (s.s - t.s) * n : 0;
          }, e.geom.edgeGoesLeft = function (t) {
            return e.geom.vertLeq(t.dst(), t.org);
          }, e.geom.edgeGoesRight = function (t) {
            return e.geom.vertLeq(t.org, t.dst());
          }, e.geom.vertL1dist = function (e, t) {
            return Math.abs(e.s - t.s) + Math.abs(e.t - t.t);
          }, e.geom.vertCCW = function (e, t, s) {
            return e.s * (t.t - s.t) + t.s * (s.t - e.t) + s.s * (e.t - t.t) >= 0;
          }, e.geom.interpolate_ = function (e, t, s, r) {
            return (e = e < 0 ? 0 : e) <= (s = s < 0 ? 0 : s) ? 0 === s ? (t + r) / 2 : t + e / (e + s) * (r - t) : r + s / (e + s) * (t - r);
          }, e.geom.edgeIntersect = function (t, s, r, i, n) {
            var o, l, a;
            e.geom.vertLeq(t, s) || (a = t, t = s, s = a), e.geom.vertLeq(r, i) || (a = r, r = i, i = a), e.geom.vertLeq(t, r) || (a = t, t = r, r = a, a = s, s = i, i = a), e.geom.vertLeq(r, s) ? e.geom.vertLeq(s, i) ? ((o = e.geom.edgeEval(t, r, s)) + (l = e.geom.edgeEval(r, s, i)) < 0 && (o = -o, l = -l), n.s = e.geom.interpolate_(o, r.s, l, s.s)) : ((o = e.geom.edgeSign(t, r, s)) + (l = -e.geom.edgeSign(t, i, s)) < 0 && (o = -o, l = -l), n.s = e.geom.interpolate_(o, r.s, l, i.s)) : n.s = (r.s + s.s) / 2, e.geom.transLeq(t, s) || (a = t, t = s, s = a), e.geom.transLeq(r, i) || (a = r, r = i, i = a), e.geom.transLeq(t, r) || (a = t, t = r, r = a, a = s, s = i, i = a), e.geom.transLeq(r, s) ? e.geom.transLeq(s, i) ? ((o = e.geom.transEval(t, r, s)) + (l = e.geom.transEval(r, s, i)) < 0 && (o = -o, l = -l), n.t = e.geom.interpolate_(o, r.t, l, s.t)) : ((o = e.geom.transSign(t, r, s)) + (l = -e.geom.transSign(t, i, s)) < 0 && (o = -o, l = -l), n.t = e.geom.interpolate_(o, r.t, l, i.t)) : n.t = (r.t + s.t) / 2;
          }, e.mesh = {}, e.mesh.makeEdge = function (t) {
            var s = e.mesh.makeEdgePair_(t.eHead);
            return e.mesh.makeVertex_(s, t.vHead), e.mesh.makeVertex_(s.sym, t.vHead), e.mesh.makeFace_(s, t.fHead), s;
          }, e.mesh.meshSplice = function (t, s) {
            var r = !1,
                i = !1;
            t !== s && (s.org !== t.org && (i = !0, e.mesh.killVertex_(s.org, t.org)), s.lFace !== t.lFace && (r = !0, e.mesh.killFace_(s.lFace, t.lFace)), e.mesh.splice_(s, t), i || (e.mesh.makeVertex_(s, t.org), t.org.anEdge = t), r || (e.mesh.makeFace_(s, t.lFace), t.lFace.anEdge = t));
          }, e.mesh.deleteEdge = function (t) {
            var s = t.sym,
                r = !1;
            t.lFace !== t.rFace() && (r = !0, e.mesh.killFace_(t.lFace, t.rFace())), t.oNext === t ? e.mesh.killVertex_(t.org, null) : (t.rFace().anEdge = t.oPrev(), t.org.anEdge = t.oNext, e.mesh.splice_(t, t.oPrev()), r || e.mesh.makeFace_(t, t.lFace)), s.oNext === s ? (e.mesh.killVertex_(s.org, null), e.mesh.killFace_(s.lFace, null)) : (t.lFace.anEdge = s.oPrev(), s.org.anEdge = s.oNext, e.mesh.splice_(s, s.oPrev())), e.mesh.killEdge_(t);
          }, e.mesh.addEdgeVertex = function (t) {
            var s = e.mesh.makeEdgePair_(t),
                r = s.sym;
            return e.mesh.splice_(s, t.lNext), s.org = t.dst(), e.mesh.makeVertex_(r, s.org), s.lFace = r.lFace = t.lFace, s;
          }, e.mesh.splitEdge = function (t) {
            var s = e.mesh.addEdgeVertex(t).sym;
            return e.mesh.splice_(t.sym, t.sym.oPrev()), e.mesh.splice_(t.sym, s), t.sym.org = s.org, s.dst().anEdge = s.sym, s.sym.lFace = t.rFace(), s.winding = t.winding, s.sym.winding = t.sym.winding, s;
          }, e.mesh.connect = function (t, s) {
            var r = !1,
                i = e.mesh.makeEdgePair_(t),
                n = i.sym;
            return s.lFace !== t.lFace && (r = !0, e.mesh.killFace_(s.lFace, t.lFace)), e.mesh.splice_(i, t.lNext), e.mesh.splice_(n, s), i.org = t.dst(), n.org = s.org, i.lFace = n.lFace = t.lFace, t.lFace.anEdge = n, r || e.mesh.makeFace_(i, t.lFace), i;
          }, e.mesh.zapFace = function (t) {
            var s,
                r = t.anEdge,
                i = r.lNext;

            do {
              if (i = (s = i).lNext, s.lFace = null, null === s.rFace()) {
                s.oNext === s ? e.mesh.killVertex_(s.org, null) : (s.org.anEdge = s.oNext, e.mesh.splice_(s, s.oPrev()));
                var n = s.sym;
                n.oNext === n ? e.mesh.killVertex_(n.org, null) : (n.org.anEdge = n.oNext, e.mesh.splice_(n, n.oPrev())), e.mesh.killEdge_(s);
              }
            } while (s !== r);

            var o = t.prev,
                l = t.next;
            l.prev = o, o.next = l;
          }, e.mesh.meshUnion = function (e, t) {
            var s = e.fHead,
                r = e.vHead,
                i = e.eHead,
                n = t.fHead,
                o = t.vHead,
                l = t.eHead;
            return n.next !== n && (s.prev.next = n.next, n.next.prev = s.prev, n.prev.next = s, s.prev = n.prev), o.next !== o && (r.prev.next = o.next, o.next.prev = r.prev, o.prev.next = r, r.prev = o.prev), l.next !== l && (i.sym.next.sym.next = l.next, l.next.sym.next = i.sym.next, l.sym.next.sym.next = i, i.sym.next = l.sym.next), e;
          }, e.mesh.deleteMesh = function (e) {}, e.mesh.makeEdgePair_ = function (t) {
            var s = new e.GluHalfEdge(),
                r = new e.GluHalfEdge(),
                i = t.sym.next;
            return r.next = i, i.sym.next = s, s.next = t, t.sym.next = r, s.sym = r, s.oNext = s, s.lNext = r, r.sym = s, r.oNext = r, r.lNext = s, s;
          }, e.mesh.splice_ = function (e, t) {
            var s = e.oNext,
                r = t.oNext;
            s.sym.lNext = t, r.sym.lNext = e, e.oNext = r, t.oNext = s;
          }, e.mesh.makeVertex_ = function (t, s) {
            var r = s.prev,
                i = new e.GluVertex(s, r);
            r.next = i, s.prev = i, i.anEdge = t;
            var n = t;

            do {
              n.org = i, n = n.oNext;
            } while (n !== t);
          }, e.mesh.makeFace_ = function (t, s) {
            var r = s.prev,
                i = new e.GluFace(s, r);
            r.next = i, s.prev = i, i.anEdge = t, i.inside = s.inside;
            var n = t;

            do {
              n.lFace = i, n = n.lNext;
            } while (n !== t);
          }, e.mesh.killEdge_ = function (e) {
            var t = e.next,
                s = e.sym.next;
            t.sym.next = s, s.sym.next = t;
          }, e.mesh.killVertex_ = function (e, t) {
            var s = e.anEdge,
                r = s;

            do {
              r.org = t, r = r.oNext;
            } while (r !== s);

            var i = e.prev,
                n = e.next;
            n.prev = i, i.next = n;
          }, e.mesh.killFace_ = function (e, t) {
            var s = e.anEdge,
                r = s;

            do {
              r.lFace = t, r = r.lNext;
            } while (r !== s);

            var i = e.prev,
                n = e.next;
            n.prev = i, i.next = n;
          }, e.normal = {}, e.normal.S_UNIT_X_ = 1, e.normal.S_UNIT_Y_ = 0, e.normal.projectPolygon = function (t, s, r, i) {
            var n = !1,
                o = [s, r, i];
            0 === s && 0 === r && 0 === i && (e.normal.computeNormal_(t, o), n = !0);
            var l,
                a = e.normal.longAxis_(o),
                _ = t.mesh.vHead;

            if (e.TRUE_PROJECT) {
              e.normal.normalize_(o);
              var g = [0, 0, 0],
                  d = [0, 0, 0];
              g[a] = 0, g[(a + 1) % 3] = e.normal.S_UNIT_X_, g[(a + 2) % 3] = e.normal.S_UNIT_Y_;
              var h = e.normal.dot_(g, o);

              for (g[0] -= h * o[0], g[1] -= h * o[1], g[2] -= h * o[2], e.normal.normalize_(g), d[0] = o[1] * g[2] - o[2] * g[1], d[1] = o[2] * g[0] - o[0] * g[2], d[2] = o[0] * g[1] - o[1] * g[0], e.normal.normalize_(d), l = _.next; l !== _; l = l.next) {
                l.s = e.normal.dot_(l.coords, g), l.t = e.normal.dot_(l.coords, d);
              }
            } else {
              var c = (a + 1) % 3,
                  u = (a + 2) % 3,
                  m = o[a] > 0 ? 1 : -1;

              for (l = _.next; l !== _; l = l.next) {
                l.s = l.coords[c], l.t = m * l.coords[u];
              }
            }

            n && e.normal.checkOrientation_(t);
          }, e.normal.dot_ = function (e, t) {
            return e[0] * t[0] + e[1] * t[1] + e[2] * t[2];
          }, e.normal.normalize_ = function (t) {
            var s = t[0] * t[0] + t[1] * t[1] + t[2] * t[2];
            e.assert(s > 0), s = Math.sqrt(s), t[0] /= s, t[1] /= s, t[2] /= s;
          }, e.normal.longAxis_ = function (e) {
            var t = 0;
            return Math.abs(e[1]) > Math.abs(e[0]) && (t = 1), Math.abs(e[2]) > Math.abs(e[t]) && (t = 2), t;
          }, e.normal.computeNormal_ = function (t, s) {
            var r,
                i = [-2 * e.GLU_TESS_MAX_COORD, -2 * e.GLU_TESS_MAX_COORD, -2 * e.GLU_TESS_MAX_COORD],
                n = [2 * e.GLU_TESS_MAX_COORD, 2 * e.GLU_TESS_MAX_COORD, 2 * e.GLU_TESS_MAX_COORD],
                o = [],
                l = [],
                a = t.mesh.vHead;

            for (r = a.next; r !== a; r = r.next) {
              for (var _ = 0; _ < 3; ++_) {
                var g = r.coords[_];
                g < n[_] && (n[_] = g, l[_] = r), g > i[_] && (i[_] = g, o[_] = r);
              }
            }

            var d = 0;
            if (i[1] - n[1] > i[0] - n[0] && (d = 1), i[2] - n[2] > i[d] - n[d] && (d = 2), n[d] >= i[d]) return s[0] = 0, s[1] = 0, void (s[2] = 1);
            var h = 0,
                c = l[d],
                u = o[d],
                m = [0, 0, 0],
                p = [c.coords[0] - u.coords[0], c.coords[1] - u.coords[1], c.coords[2] - u.coords[2]],
                E = [0, 0, 0];

            for (r = a.next; r !== a; r = r.next) {
              E[0] = r.coords[0] - u.coords[0], E[1] = r.coords[1] - u.coords[1], E[2] = r.coords[2] - u.coords[2], m[0] = p[1] * E[2] - p[2] * E[1], m[1] = p[2] * E[0] - p[0] * E[2], m[2] = p[0] * E[1] - p[1] * E[0];
              var v = m[0] * m[0] + m[1] * m[1] + m[2] * m[2];
              v > h && (h = v, s[0] = m[0], s[1] = m[1], s[2] = m[2]);
            }

            h <= 0 && (s[0] = s[1] = s[2] = 0, s[e.normal.longAxis_(p)] = 1);
          }, e.normal.checkOrientation_ = function (e) {
            for (var t = 0, s = e.mesh.fHead, r = s.next; r !== s; r = r.next) {
              var i = r.anEdge;
              if (!(i.winding <= 0)) do {
                t += (i.org.s - i.dst().s) * (i.org.t + i.dst().t), i = i.lNext;
              } while (i !== r.anEdge);
            }

            if (t < 0) for (var n = e.mesh.vHead, o = n.next; o !== n; o = o.next) {
              o.t = -o.t;
            }
          }, e.render = {}, e.render.renderMesh = function (t, s, r) {
            for (var i = !1, n = -1, o = s.fHead.prev; o !== s.fHead; o = o.prev) {
              if (o.inside) {
                i || (t.callBeginCallback(e.primitiveType.GL_TRIANGLES), i = !0);
                var l = o.anEdge;
                e.assert(l.lNext.lNext.lNext === l, "renderMesh called with non-triangulated mesh");

                do {
                  if (r) {
                    var a = l.rFace().inside ? 0 : 1;
                    n !== a && (n = a, t.callEdgeFlagCallback(!!n));
                  }

                  t.callVertexCallback(l.org.data), l = l.lNext;
                } while (l !== o.anEdge);
              }
            }

            i && t.callEndCallback();
          }, e.render.renderBoundary = function (t, s) {
            for (var r = s.fHead.next; r !== s.fHead; r = r.next) {
              if (r.inside) {
                t.callBeginCallback(e.primitiveType.GL_LINE_LOOP);
                var i = r.anEdge;

                do {
                  t.callVertexCallback(i.org.data), i = i.lNext;
                } while (i !== r.anEdge);

                t.callEndCallback();
              }
            }
          }, e.sweep = {}, e.sweep.SENTINEL_COORD_ = 4 * e.GLU_TESS_MAX_COORD, e.sweep.TOLERANCE_NONZERO_ = !1, e.sweep.computeInterior = function (t) {
            var s;

            for (t.fatalError = !1, e.sweep.removeDegenerateEdges_(t), e.sweep.initPriorityQ_(t), e.sweep.initEdgeDict_(t); null !== (s = t.pq.extractMin());) {
              for (;;) {
                var r = t.pq.minimum();
                if (null === r || !e.geom.vertEq(r, s)) break;
                r = t.pq.extractMin(), e.sweep.spliceMergeVertices_(t, s.anEdge, r.anEdge);
              }

              e.sweep.sweepEvent_(t, s);
            }

            var i = t.dict.getMin().getKey();
            t.event = i.eUp.org, e.sweep.doneEdgeDict_(t), e.sweep.donePriorityQ_(t), e.sweep.removeDegenerateFaces_(t.mesh), t.mesh.checkMesh();
          }, e.sweep.addWinding_ = function (e, t) {
            e.winding += t.winding, e.sym.winding += t.sym.winding;
          }, e.sweep.edgeLeq_ = function (t, s, r) {
            var i = t.event,
                n = s.eUp,
                o = r.eUp;
            return n.dst() === i ? o.dst() === i ? e.geom.vertLeq(n.org, o.org) ? e.geom.edgeSign(o.dst(), n.org, o.org) <= 0 : e.geom.edgeSign(n.dst(), o.org, n.org) >= 0 : e.geom.edgeSign(o.dst(), i, o.org) <= 0 : o.dst() === i ? e.geom.edgeSign(n.dst(), i, n.org) >= 0 : e.geom.edgeEval(n.dst(), i, n.org) >= e.geom.edgeEval(o.dst(), i, o.org);
          }, e.sweep.deleteRegion_ = function (t, s) {
            s.fixUpperEdge && e.assert(0 === s.eUp.winding), s.eUp.activeRegion = null, t.dict.deleteNode(s.nodeUp), s.nodeUp = null;
          }, e.sweep.fixUpperEdge_ = function (t, s) {
            e.assert(t.fixUpperEdge), e.mesh.deleteEdge(t.eUp), t.fixUpperEdge = !1, t.eUp = s, s.activeRegion = t;
          }, e.sweep.topLeftRegion_ = function (t) {
            var s = t.eUp.org;

            do {
              t = t.regionAbove();
            } while (t.eUp.org === s);

            if (t.fixUpperEdge) {
              var r = e.mesh.connect(t.regionBelow().eUp.sym, t.eUp.lNext);
              e.sweep.fixUpperEdge_(t, r), t = t.regionAbove();
            }

            return t;
          }, e.sweep.topRightRegion_ = function (e) {
            var t = e.eUp.dst();

            do {
              e = e.regionAbove();
            } while (e.eUp.dst() === t);

            return e;
          }, e.sweep.addRegionBelow_ = function (t, s, r) {
            var i = new e.ActiveRegion();
            return i.eUp = r, i.nodeUp = t.dict.insertBefore(s.nodeUp, i), r.activeRegion = i, i;
          }, e.sweep.isWindingInside_ = function (t, s) {
            switch (t.windingRule) {
              case e.windingRule.GLU_TESS_WINDING_ODD:
                return 0 != (1 & s);

              case e.windingRule.GLU_TESS_WINDING_NONZERO:
                return 0 !== s;

              case e.windingRule.GLU_TESS_WINDING_POSITIVE:
                return s > 0;

              case e.windingRule.GLU_TESS_WINDING_NEGATIVE:
                return s < 0;

              case e.windingRule.GLU_TESS_WINDING_ABS_GEQ_TWO:
                return s >= 2 || s <= -2;
            }

            return e.assert(!1), !1;
          }, e.sweep.computeWinding_ = function (t, s) {
            s.windingNumber = s.regionAbove().windingNumber + s.eUp.winding, s.inside = e.sweep.isWindingInside_(t, s.windingNumber);
          }, e.sweep.finishRegion_ = function (t, s) {
            var r = s.eUp,
                i = r.lFace;
            i.inside = s.inside, i.anEdge = r, e.sweep.deleteRegion_(t, s);
          }, e.sweep.finishLeftRegions_ = function (t, s, r) {
            for (var i = s, n = s.eUp; i !== r;) {
              i.fixUpperEdge = !1;
              var o = i.regionBelow(),
                  l = o.eUp;

              if (l.org !== n.org) {
                if (!o.fixUpperEdge) {
                  e.sweep.finishRegion_(t, i);
                  break;
                }

                l = e.mesh.connect(n.lPrev(), l.sym), e.sweep.fixUpperEdge_(o, l);
              }

              n.oNext !== l && (e.mesh.meshSplice(l.oPrev(), l), e.mesh.meshSplice(n, l)), e.sweep.finishRegion_(t, i), n = o.eUp, i = o;
            }

            return n;
          }, e.sweep.addRightEdges_ = function (t, s, r, i, n, o) {
            var l = !0,
                a = r;

            do {
              e.assert(e.geom.vertLeq(a.org, a.dst())), e.sweep.addRegionBelow_(t, s, a.sym), a = a.oNext;
            } while (a !== i);

            null === n && (n = s.regionBelow().eUp.rPrev());

            for (var _, g = s, d = n; (a = (_ = g.regionBelow()).eUp.sym).org === d.org;) {
              a.oNext !== d && (e.mesh.meshSplice(a.oPrev(), a), e.mesh.meshSplice(d.oPrev(), a)), _.windingNumber = g.windingNumber - a.winding, _.inside = e.sweep.isWindingInside_(t, _.windingNumber), g.dirty = !0, !l && e.sweep.checkForRightSplice_(t, g) && (e.sweep.addWinding_(a, d), e.sweep.deleteRegion_(t, g), e.mesh.deleteEdge(d)), l = !1, g = _, d = a;
            }

            g.dirty = !0, e.assert(g.windingNumber - a.winding === _.windingNumber), o && e.sweep.walkDirtyRegions_(t, g);
          }, e.sweep.callCombine_ = function (t, s, r, i, n) {
            var o = [s.coords[0], s.coords[1], s.coords[2]];
            s.data = null, s.data = t.callCombineCallback(o, r, i), null === s.data && (n ? t.fatalError || (t.callErrorCallback(e.errorType.GLU_TESS_NEED_COMBINE_CALLBACK), t.fatalError = !0) : s.data = r[0]);
          }, e.sweep.spliceMergeVertices_ = function (t, s, r) {
            var i = [null, null, null, null],
                n = [.5, .5, 0, 0];
            i[0] = s.org.data, i[1] = r.org.data, e.sweep.callCombine_(t, s.org, i, n, !1), e.mesh.meshSplice(s, r);
          }, e.sweep.vertexWeights_ = function (t, s, r, i, n) {
            var o = e.geom.vertL1dist(s, t),
                l = e.geom.vertL1dist(r, t),
                a = n,
                _ = n + 1;

            i[a] = .5 * l / (o + l), i[_] = .5 * o / (o + l), t.coords[0] += i[a] * s.coords[0] + i[_] * r.coords[0], t.coords[1] += i[a] * s.coords[1] + i[_] * r.coords[1], t.coords[2] += i[a] * s.coords[2] + i[_] * r.coords[2];
          }, e.sweep.getIntersectData_ = function (t, s, r, i, n, o) {
            var l = [0, 0, 0, 0],
                a = [r.data, i.data, n.data, o.data];
            s.coords[0] = s.coords[1] = s.coords[2] = 0, e.sweep.vertexWeights_(s, r, i, l, 0), e.sweep.vertexWeights_(s, n, o, l, 2), e.sweep.callCombine_(t, s, a, l, !0);
          }, e.sweep.checkForRightSplice_ = function (t, s) {
            var r = s.regionBelow(),
                i = s.eUp,
                n = r.eUp;

            if (e.geom.vertLeq(i.org, n.org)) {
              if (e.geom.edgeSign(n.dst(), i.org, n.org) > 0) return !1;
              e.geom.vertEq(i.org, n.org) ? i.org !== n.org && (t.pq.remove(i.org.pqHandle), e.sweep.spliceMergeVertices_(t, n.oPrev(), i)) : (e.mesh.splitEdge(n.sym), e.mesh.meshSplice(i, n.oPrev()), s.dirty = r.dirty = !0);
            } else {
              if (e.geom.edgeSign(i.dst(), n.org, i.org) < 0) return !1;
              s.regionAbove().dirty = s.dirty = !0, e.mesh.splitEdge(i.sym), e.mesh.meshSplice(n.oPrev(), i);
            }

            return !0;
          }, e.sweep.checkForLeftSplice_ = function (t, s) {
            var r,
                i = s.regionBelow(),
                n = s.eUp,
                o = i.eUp;

            if (e.assert(!e.geom.vertEq(n.dst(), o.dst())), e.geom.vertLeq(n.dst(), o.dst())) {
              if (e.geom.edgeSign(n.dst(), o.dst(), n.org) < 0) return !1;
              s.regionAbove().dirty = s.dirty = !0, r = e.mesh.splitEdge(n), e.mesh.meshSplice(o.sym, r), r.lFace.inside = s.inside;
            } else {
              if (e.geom.edgeSign(o.dst(), n.dst(), o.org) > 0) return !1;
              s.dirty = i.dirty = !0, r = e.mesh.splitEdge(o), e.mesh.meshSplice(n.lNext, o.sym), r.rFace().inside = s.inside;
            }

            return !0;
          }, e.sweep.checkForIntersect_ = function (t, s) {
            var r = s.regionBelow(),
                i = s.eUp,
                n = r.eUp,
                o = i.org,
                l = n.org,
                a = i.dst(),
                _ = n.dst(),
                g = new e.GluVertex();

            if (e.assert(!e.geom.vertEq(_, a)), e.assert(e.geom.edgeSign(a, t.event, o) <= 0), e.assert(e.geom.edgeSign(_, t.event, l) >= 0), e.assert(o !== t.event && l !== t.event), e.assert(!s.fixUpperEdge && !r.fixUpperEdge), o === l) return !1;
            if (Math.min(o.t, a.t) > Math.max(l.t, _.t)) return !1;

            if (e.geom.vertLeq(o, l)) {
              if (e.geom.edgeSign(_, o, l) > 0) return !1;
            } else if (e.geom.edgeSign(a, l, o) < 0) return !1;

            e.geom.edgeIntersect(a, o, _, l, g), e.assert(Math.min(o.t, a.t) <= g.t), e.assert(g.t <= Math.max(l.t, _.t)), e.assert(Math.min(_.s, a.s) <= g.s), e.assert(g.s <= Math.max(l.s, o.s)), e.geom.vertLeq(g, t.event) && (g.s = t.event.s, g.t = t.event.t);
            var d = e.geom.vertLeq(o, l) ? o : l;
            if (e.geom.vertLeq(d, g) && (g.s = d.s, g.t = d.t), e.geom.vertEq(g, o) || e.geom.vertEq(g, l)) return e.sweep.checkForRightSplice_(t, s), !1;

            if (!e.geom.vertEq(a, t.event) && e.geom.edgeSign(a, t.event, g) >= 0 || !e.geom.vertEq(_, t.event) && e.geom.edgeSign(_, t.event, g) <= 0) {
              if (_ === t.event) return e.mesh.splitEdge(i.sym), e.mesh.meshSplice(n.sym, i), i = (s = e.sweep.topLeftRegion_(s)).regionBelow().eUp, e.sweep.finishLeftRegions_(t, s.regionBelow(), r), e.sweep.addRightEdges_(t, s, i.oPrev(), i, i, !0), !0;

              if (a === t.event) {
                e.mesh.splitEdge(n.sym), e.mesh.meshSplice(i.lNext, n.oPrev()), r = s;
                var h = (s = e.sweep.topRightRegion_(s)).regionBelow().eUp.rPrev();
                return r.eUp = n.oPrev(), n = e.sweep.finishLeftRegions_(t, r, null), e.sweep.addRightEdges_(t, s, n.oNext, i.rPrev(), h, !0), !0;
              }

              return e.geom.edgeSign(a, t.event, g) >= 0 && (s.regionAbove().dirty = s.dirty = !0, e.mesh.splitEdge(i.sym), i.org.s = t.event.s, i.org.t = t.event.t), e.geom.edgeSign(_, t.event, g) <= 0 && (s.dirty = r.dirty = !0, e.mesh.splitEdge(n.sym), n.org.s = t.event.s, n.org.t = t.event.t), !1;
            }

            return e.mesh.splitEdge(i.sym), e.mesh.splitEdge(n.sym), e.mesh.meshSplice(n.oPrev(), i), i.org.s = g.s, i.org.t = g.t, i.org.pqHandle = t.pq.insert(i.org), e.sweep.getIntersectData_(t, i.org, o, a, l, _), s.regionAbove().dirty = s.dirty = r.dirty = !0, !1;
          }, e.sweep.walkDirtyRegions_ = function (t, s) {
            for (var r = s.regionBelow();;) {
              for (; r.dirty;) {
                s = r, r = r.regionBelow();
              }

              if (!s.dirty && (r = s, null === (s = s.regionAbove()) || !s.dirty)) return;
              s.dirty = !1;
              var i = s.eUp,
                  n = r.eUp;
              if (i.dst() !== n.dst() && e.sweep.checkForLeftSplice_(t, s) && (r.fixUpperEdge ? (e.sweep.deleteRegion_(t, r), e.mesh.deleteEdge(n), n = (r = s.regionBelow()).eUp) : s.fixUpperEdge && (e.sweep.deleteRegion_(t, s), e.mesh.deleteEdge(i), i = (s = r.regionAbove()).eUp)), i.org !== n.org) if (i.dst() === n.dst() || s.fixUpperEdge || r.fixUpperEdge || i.dst() !== t.event && n.dst() !== t.event) e.sweep.checkForRightSplice_(t, s);else if (e.sweep.checkForIntersect_(t, s)) return;
              i.org === n.org && i.dst() === n.dst() && (e.sweep.addWinding_(n, i), e.sweep.deleteRegion_(t, s), e.mesh.deleteEdge(i), s = r.regionAbove());
            }
          }, e.sweep.connectRightVertex_ = function (t, s, r) {
            var i,
                n = r.oNext,
                o = s.regionBelow(),
                l = s.eUp,
                a = o.eUp,
                _ = !1;

            l.dst() !== a.dst() && e.sweep.checkForIntersect_(t, s), e.geom.vertEq(l.org, t.event) && (e.mesh.meshSplice(n.oPrev(), l), n = (s = e.sweep.topLeftRegion_(s)).regionBelow().eUp, e.sweep.finishLeftRegions_(t, s.regionBelow(), o), _ = !0), e.geom.vertEq(a.org, t.event) && (e.mesh.meshSplice(r, a.oPrev()), r = e.sweep.finishLeftRegions_(t, o, null), _ = !0), _ ? e.sweep.addRightEdges_(t, s, r.oNext, n, n, !0) : (i = e.geom.vertLeq(a.org, l.org) ? a.oPrev() : l, i = e.mesh.connect(r.lPrev(), i), e.sweep.addRightEdges_(t, s, i, i.oNext, i.oNext, !1), i.sym.activeRegion.fixUpperEdge = !0, e.sweep.walkDirtyRegions_(t, s));
          }, e.sweep.connectLeftDegenerate_ = function (t, s, r) {
            var i = s.eUp;
            if (e.geom.vertEq(i.org, r)) return e.assert(e.sweep.TOLERANCE_NONZERO_), void (e.sweep.TOLERANCE_NONZERO_ && e.sweep.spliceMergeVertices_(t, i, r.anEdge));
            if (!e.geom.vertEq(i.dst(), r)) return e.mesh.splitEdge(i.sym), s.fixUpperEdge && (e.mesh.deleteEdge(i.oNext), s.fixUpperEdge = !1), e.mesh.meshSplice(r.anEdge, i), void e.sweep.sweepEvent_(t, r);

            if (e.assert(e.sweep.TOLERANCE_NONZERO_), e.sweep.TOLERANCE_NONZERO_) {
              var n = (s = e.sweep.topRightRegion_(s)).regionBelow(),
                  o = n.eUp.sym,
                  l = o.oNext,
                  a = l;
              n.fixUpperEdge && (e.assert(l !== o), e.sweep.deleteRegion_(t, n), e.mesh.deleteEdge(o), o = l.oPrev()), e.mesh.meshSplice(r.anEdge, o), e.geom.edgeGoesLeft(l) || (l = null), e.sweep.addRightEdges_(t, s, o.oNext, a, l, !0);
            }
          }, e.sweep.connectLeftVertex_ = function (t, s) {
            var r = new e.ActiveRegion();
            r.eUp = s.anEdge.sym;
            var i = t.dict.search(r).getKey(),
                n = i.regionBelow(),
                o = i.eUp,
                l = n.eUp;

            if (0 !== e.geom.edgeSign(o.dst(), s, o.org)) {
              var a,
                  _ = e.geom.vertLeq(l.dst(), o.dst()) ? i : n;

              i.inside || _.fixUpperEdge ? (a = _ === i ? e.mesh.connect(s.anEdge.sym, o.lNext) : e.mesh.connect(l.dNext(), s.anEdge).sym, _.fixUpperEdge ? e.sweep.fixUpperEdge_(_, a) : e.sweep.computeWinding_(t, e.sweep.addRegionBelow_(t, i, a)), e.sweep.sweepEvent_(t, s)) : e.sweep.addRightEdges_(t, i, s.anEdge, s.anEdge, null, !0);
            } else e.sweep.connectLeftDegenerate_(t, i, s);
          }, e.sweep.sweepEvent_ = function (t, s) {
            t.event = s;

            for (var r = s.anEdge; null === r.activeRegion;) {
              if ((r = r.oNext) === s.anEdge) return void e.sweep.connectLeftVertex_(t, s);
            }

            var i = e.sweep.topLeftRegion_(r.activeRegion),
                n = i.regionBelow(),
                o = n.eUp,
                l = e.sweep.finishLeftRegions_(t, n, null);
            l.oNext === o ? e.sweep.connectRightVertex_(t, i, l) : e.sweep.addRightEdges_(t, i, l.oNext, o, o, !0);
          }, e.sweep.addSentinel_ = function (t, s) {
            var r = new e.ActiveRegion(),
                i = e.mesh.makeEdge(t.mesh);
            i.org.s = e.sweep.SENTINEL_COORD_, i.org.t = s, i.dst().s = -e.sweep.SENTINEL_COORD_, i.dst().t = s, t.event = i.dst(), r.eUp = i, r.windingNumber = 0, r.inside = !1, r.fixUpperEdge = !1, r.sentinel = !0, r.dirty = !1, r.nodeUp = t.dict.insert(r);
          }, e.sweep.initEdgeDict_ = function (t) {
            t.dict = new e.Dict(t, e.sweep.edgeLeq_), e.sweep.addSentinel_(t, -e.sweep.SENTINEL_COORD_), e.sweep.addSentinel_(t, e.sweep.SENTINEL_COORD_);
          }, e.sweep.doneEdgeDict_ = function (t) {
            for (var s, r = 0; null !== (s = t.dict.getMin().getKey());) {
              s.sentinel || (e.assert(s.fixUpperEdge), e.assert(1 == ++r)), e.assert(0 === s.windingNumber), e.sweep.deleteRegion_(t, s);
            }

            t.dict = null;
          }, e.sweep.removeDegenerateEdges_ = function (t) {
            for (var s, r = t.mesh.eHead, i = r.next; i !== r; i = s) {
              s = i.next;
              var n = i.lNext;
              e.geom.vertEq(i.org, i.dst()) && i.lNext.lNext !== i && (e.sweep.spliceMergeVertices_(t, n, i), e.mesh.deleteEdge(i), n = (i = n).lNext), n.lNext === i && (n !== i && (n !== s && n !== s.sym || (s = s.next), e.mesh.deleteEdge(n)), i !== s && i !== s.sym || (s = s.next), e.mesh.deleteEdge(i));
            }
          }, e.sweep.initPriorityQ_ = function (t) {
            var s = new e.PriorityQ();
            t.pq = s;
            var r,
                i = t.mesh.vHead;

            for (r = i.next; r !== i; r = r.next) {
              r.pqHandle = s.insert(r);
            }

            s.init();
          }, e.sweep.donePriorityQ_ = function (e) {
            e.pq.deleteQ(), e.pq = null;
          }, e.sweep.removeDegenerateFaces_ = function (t) {
            for (var s, r = t.fHead.next; r !== t.fHead; r = s) {
              s = r.next;
              var i = r.anEdge;
              e.assert(i.lNext !== i), i.lNext.lNext === i && (e.sweep.addWinding_(i.oNext, i), e.mesh.deleteEdge(i));
            }
          }, e.tessmono = {}, e.tessmono.tessellateMonoRegion_ = function (t) {
            var s = t.anEdge;

            for (e.assert(s.lNext !== s && s.lNext.lNext !== s); e.geom.vertLeq(s.dst(), s.org); s = s.lPrev()) {
              ;
            }

            for (; e.geom.vertLeq(s.org, s.dst()); s = s.lNext) {
              ;
            }

            for (var r, i = s.lPrev(); s.lNext !== i;) {
              if (e.geom.vertLeq(s.dst(), i.org)) {
                for (; i.lNext !== s && (e.geom.edgeGoesLeft(i.lNext) || e.geom.edgeSign(i.org, i.dst(), i.lNext.dst()) <= 0);) {
                  i = (r = e.mesh.connect(i.lNext, i)).sym;
                }

                i = i.lPrev();
              } else {
                for (; i.lNext !== s && (e.geom.edgeGoesRight(s.lPrev()) || e.geom.edgeSign(s.dst(), s.org, s.lPrev().org) >= 0);) {
                  r = e.mesh.connect(s, s.lPrev()), s = r.sym;
                }

                s = s.lNext;
              }
            }

            for (e.assert(i.lNext !== s); i.lNext.lNext !== s;) {
              i = (r = e.mesh.connect(i.lNext, i)).sym;
            }
          }, e.tessmono.tessellateInterior = function (t) {
            for (var s, r = t.fHead.next; r !== t.fHead; r = s) {
              s = r.next, r.inside && e.tessmono.tessellateMonoRegion_(r);
            }
          }, e.tessmono.discardExterior = function (t) {
            for (var s, r = t.fHead.next; r !== t.fHead; r = s) {
              s = r.next, r.inside || e.mesh.zapFace(r);
            }
          }, e.tessmono.setWindingNumber = function (t, s, r) {
            for (var i, n = t.eHead.next; n !== t.eHead; n = i) {
              i = n.next, n.rFace().inside !== n.lFace.inside ? n.winding = n.lFace.inside ? s : -s : r ? e.mesh.deleteEdge(n) : n.winding = 0;
            }
          }, e.Dict = function (t, s) {
            this.head_ = new e.DictNode(), this.frame_ = t, this.leq_ = s;
          }, e.Dict.prototype.deleteDict_ = function () {}, e.Dict.prototype.insertBefore = function (t, s) {
            do {
              t = t.prev;
            } while (null !== t.key && !this.leq_(this.frame_, t.key, s));

            var r = new e.DictNode(s, t.next, t);
            return t.next.prev = r, t.next = r, r;
          }, e.Dict.prototype.insert = function (e) {
            return this.insertBefore(this.head_, e);
          }, e.Dict.prototype.deleteNode = function (e) {
            e.next.prev = e.prev, e.prev.next = e.next;
          }, e.Dict.prototype.search = function (e) {
            var t = this.head_;

            do {
              t = t.next;
            } while (null !== t.key && !this.leq_(this.frame_, e, t.key));

            return t;
          }, e.Dict.prototype.getMin = function () {
            return this.head_.next;
          }, e.Dict.prototype.getMax = function () {
            return this.head_.prev;
          }, e.DictNode = function (e, t, s) {
            this.key = e || null, this.next = t || this, this.prev = s || this;
          }, e.DictNode.prototype.getKey = function () {
            return this.key;
          }, e.DictNode.prototype.getSuccessor = function () {
            return this.next;
          }, e.DictNode.prototype.getPredecessor = function () {
            return this.prev;
          }, e.GluTesselator = function () {
            this.state_ = e.GluTesselator.tessState_.T_DORMANT, this.lastEdge_ = null, this.mesh = null, this.errorCallback_ = null, this.normal_ = [0, 0, 0], this.windingRule = e.windingRule.GLU_TESS_WINDING_ODD, this.fatalError = !1, this.dict = null, this.pq = null, this.event = null, this.combineCallback_ = null, this.boundaryOnly_ = !1, this.beginCallback_ = null, this.edgeFlagCallback_ = null, this.vertexCallback_ = null, this.endCallback_ = null, this.meshCallback_ = null, this.polygonData_ = null;
          }, e.GluTesselator.tessState_ = {
            T_DORMANT: 0,
            T_IN_POLYGON: 1,
            T_IN_CONTOUR: 2
          }, e.GluTesselator.prototype.gluDeleteTess = function () {
            this.requireState_(e.GluTesselator.tessState_.T_DORMANT);
          }, e.GluTesselator.prototype.gluTessProperty = function (t, s) {
            switch (t) {
              case e.gluEnum.GLU_TESS_TOLERANCE:
                return;

              case e.gluEnum.GLU_TESS_WINDING_RULE:
                var r = s;

                switch (r) {
                  case e.windingRule.GLU_TESS_WINDING_ODD:
                  case e.windingRule.GLU_TESS_WINDING_NONZERO:
                  case e.windingRule.GLU_TESS_WINDING_POSITIVE:
                  case e.windingRule.GLU_TESS_WINDING_NEGATIVE:
                  case e.windingRule.GLU_TESS_WINDING_ABS_GEQ_TWO:
                    return void (this.windingRule = r);
                }

                break;

              case e.gluEnum.GLU_TESS_BOUNDARY_ONLY:
                return void (this.boundaryOnly_ = !!s);

              default:
                return void this.callErrorCallback(e.gluEnum.GLU_INVALID_ENUM);
            }

            this.callErrorCallback(e.gluEnum.GLU_INVALID_VALUE);
          }, e.GluTesselator.prototype.gluGetTessProperty = function (t) {
            switch (t) {
              case e.gluEnum.GLU_TESS_TOLERANCE:
                return 0;

              case e.gluEnum.GLU_TESS_WINDING_RULE:
                var s = this.windingRule;
                return e.assert(s === e.windingRule.GLU_TESS_WINDING_ODD || s === e.windingRule.GLU_TESS_WINDING_NONZERO || s === e.windingRule.GLU_TESS_WINDING_POSITIVE || s === e.windingRule.GLU_TESS_WINDING_NEGATIVE || s === e.windingRule.GLU_TESS_WINDING_ABS_GEQ_TWO), s;

              case e.gluEnum.GLU_TESS_BOUNDARY_ONLY:
                return e.assert(!0 === this.boundaryOnly_ || !1 === this.boundaryOnly_), this.boundaryOnly_;

              default:
                this.callErrorCallback(e.gluEnum.GLU_INVALID_ENUM);
            }

            return !1;
          }, e.GluTesselator.prototype.gluTessNormal = function (e, t, s) {
            this.normal_[0] = e, this.normal_[1] = t, this.normal_[2] = s;
          }, e.GluTesselator.prototype.gluTessCallback = function (t, s) {
            var r = s || null;

            switch (t) {
              case e.gluEnum.GLU_TESS_BEGIN:
              case e.gluEnum.GLU_TESS_BEGIN_DATA:
                return void (this.beginCallback_ = r);

              case e.gluEnum.GLU_TESS_EDGE_FLAG:
              case e.gluEnum.GLU_TESS_EDGE_FLAG_DATA:
                return void (this.edgeFlagCallback_ = r);

              case e.gluEnum.GLU_TESS_VERTEX:
              case e.gluEnum.GLU_TESS_VERTEX_DATA:
                return void (this.vertexCallback_ = r);

              case e.gluEnum.GLU_TESS_END:
              case e.gluEnum.GLU_TESS_END_DATA:
                return void (this.endCallback_ = r);

              case e.gluEnum.GLU_TESS_ERROR:
              case e.gluEnum.GLU_TESS_ERROR_DATA:
                return void (this.errorCallback_ = r);

              case e.gluEnum.GLU_TESS_COMBINE:
              case e.gluEnum.GLU_TESS_COMBINE_DATA:
                return void (this.combineCallback_ = r);

              case e.gluEnum.GLU_TESS_MESH:
                return void (this.meshCallback_ = r);

              default:
                return void this.callErrorCallback(e.gluEnum.GLU_INVALID_ENUM);
            }
          }, e.GluTesselator.prototype.gluTessVertex = function (t, s) {
            var r = !1,
                i = [0, 0, 0];
            this.requireState_(e.GluTesselator.tessState_.T_IN_CONTOUR);

            for (var n = 0; n < 3; ++n) {
              var o = t[n];
              o < -e.GLU_TESS_MAX_COORD && (o = -e.GLU_TESS_MAX_COORD, r = !0), o > e.GLU_TESS_MAX_COORD && (o = e.GLU_TESS_MAX_COORD, r = !0), i[n] = o;
            }

            r && this.callErrorCallback(e.errorType.GLU_TESS_COORD_TOO_LARGE), this.addVertex_(i, s);
          }, e.GluTesselator.prototype.gluTessBeginPolygon = function (t) {
            this.requireState_(e.GluTesselator.tessState_.T_DORMANT), this.state_ = e.GluTesselator.tessState_.T_IN_POLYGON, this.mesh = new e.GluMesh(), this.polygonData_ = t;
          }, e.GluTesselator.prototype.gluTessBeginContour = function () {
            this.requireState_(e.GluTesselator.tessState_.T_IN_POLYGON), this.state_ = e.GluTesselator.tessState_.T_IN_CONTOUR, this.lastEdge_ = null;
          }, e.GluTesselator.prototype.gluTessEndContour = function () {
            this.requireState_(e.GluTesselator.tessState_.T_IN_CONTOUR), this.state_ = e.GluTesselator.tessState_.T_IN_POLYGON;
          }, e.GluTesselator.prototype.gluTessEndPolygon = function () {
            if (this.requireState_(e.GluTesselator.tessState_.T_IN_POLYGON), this.state_ = e.GluTesselator.tessState_.T_DORMANT, e.normal.projectPolygon(this, this.normal_[0], this.normal_[1], this.normal_[2]), e.sweep.computeInterior(this), !this.fatalError) {
              var t = this.mesh;
              if (this.boundaryOnly_ ? e.tessmono.setWindingNumber(t, 1, !0) : e.tessmono.tessellateInterior(t), this.mesh.checkMesh(), this.beginCallback_ || this.endCallback_ || this.vertexCallback_ || this.edgeFlagCallback_) if (this.boundaryOnly_) e.render.renderBoundary(this, this.mesh);else {
                var s = !!this.edgeFlagCallback_;
                e.render.renderMesh(this, this.mesh, s);
              }
              if (this.meshCallback_) return e.tessmono.discardExterior(this.mesh), this.meshCallback_(this.mesh), this.mesh = null, void (this.polygonData_ = null);
            }

            e.mesh.deleteMesh(this.mesh), this.polygonData_ = null, this.mesh = null;
          }, e.GluTesselator.prototype.requireState_ = function (e) {
            this.state_ !== e && this.gotoState_(e);
          }, e.GluTesselator.prototype.gotoState_ = function (t) {
            for (; this.state_ !== t;) {
              if (this.state_ < t) switch (this.state_) {
                case e.GluTesselator.tessState_.T_DORMANT:
                  this.callErrorCallback(e.errorType.GLU_TESS_MISSING_BEGIN_POLYGON), this.gluTessBeginPolygon(null);
                  break;

                case e.GluTesselator.tessState_.T_IN_POLYGON:
                  this.callErrorCallback(e.errorType.GLU_TESS_MISSING_BEGIN_CONTOUR), this.gluTessBeginContour();
              } else switch (this.state_) {
                case e.GluTesselator.tessState_.T_IN_CONTOUR:
                  this.callErrorCallback(e.errorType.GLU_TESS_MISSING_END_CONTOUR), this.gluTessEndContour();
                  break;

                case e.GluTesselator.tessState_.T_IN_POLYGON:
                  this.callErrorCallback(e.errorType.GLU_TESS_MISSING_END_POLYGON), this.gluTessEndPolygon();
              }
            }
          }, e.GluTesselator.prototype.addVertex_ = function (t, s) {
            var r = this.lastEdge_;
            null === r ? (r = e.mesh.makeEdge(this.mesh), e.mesh.meshSplice(r, r.sym)) : (e.mesh.splitEdge(r), r = r.lNext), r.org.data = s, r.org.coords[0] = t[0], r.org.coords[1] = t[1], r.org.coords[2] = t[2], r.winding = 1, r.sym.winding = -1, this.lastEdge_ = r;
          }, e.GluTesselator.prototype.callBeginCallback = function (e) {
            this.beginCallback_ && this.beginCallback_(e, this.polygonData_);
          }, e.GluTesselator.prototype.callVertexCallback = function (e) {
            this.vertexCallback_ && this.vertexCallback_(e, this.polygonData_);
          }, e.GluTesselator.prototype.callEdgeFlagCallback = function (e) {
            this.edgeFlagCallback_ && this.edgeFlagCallback_(e, this.polygonData_);
          }, e.GluTesselator.prototype.callEndCallback = function () {
            this.endCallback_ && this.endCallback_(this.polygonData_);
          }, e.GluTesselator.prototype.callCombineCallback = function (e, t, s) {
            return this.combineCallback_ && this.combineCallback_(e, t, s, this.polygonData_) || null;
          }, e.GluTesselator.prototype.callErrorCallback = function (e) {
            this.errorCallback_ && this.errorCallback_(e, this.polygonData_);
          }, e.GluFace = function (e, t) {
            this.next = e || this, this.prev = t || this, this.anEdge = null, this.inside = !1;
          }, e.GluHalfEdge = function (e) {
            this.next = e || this, this.sym = null, this.oNext = null, this.lNext = null, this.org = null, this.lFace = null, this.activeRegion = null, this.winding = 0;
          }, e.GluHalfEdge.prototype.rFace = function () {
            return this.sym.lFace;
          }, e.GluHalfEdge.prototype.dst = function () {
            return this.sym.org;
          }, e.GluHalfEdge.prototype.oPrev = function () {
            return this.sym.lNext;
          }, e.GluHalfEdge.prototype.lPrev = function () {
            return this.oNext.sym;
          }, e.GluHalfEdge.prototype.dPrev = function () {
            return this.lNext.sym;
          }, e.GluHalfEdge.prototype.rPrev = function () {
            return this.sym.oNext;
          }, e.GluHalfEdge.prototype.dNext = function () {
            return this.rPrev().sym;
          }, e.GluHalfEdge.prototype.rNext = function () {
            return this.oPrev().sym;
          }, e.GluMesh = function () {
            this.vHead = new e.GluVertex(), this.fHead = new e.GluFace(), this.eHead = new e.GluHalfEdge(), this.eHeadSym = new e.GluHalfEdge(), this.eHead.sym = this.eHeadSym, this.eHeadSym.sym = this.eHead;
          }, e.GluMesh.prototype.checkMesh = function () {
            if (e.DEBUG) {
              var t,
                  s,
                  r,
                  i = this.fHead,
                  n = this.vHead,
                  o = this.eHead,
                  l = i;

              for (l = i; (s = l.next) !== i; l = s) {
                e.assert(s.prev === l), t = s.anEdge;

                do {
                  e.assert(t.sym !== t), e.assert(t.sym.sym === t), e.assert(t.lNext.oNext.sym === t), e.assert(t.oNext.sym.lNext === t), e.assert(t.lFace === s), t = t.lNext;
                } while (t !== s.anEdge);
              }

              e.assert(s.prev === l && null === s.anEdge);
              var a = n;

              for (a = n; (r = a.next) !== n; a = r) {
                e.assert(r.prev === a), t = r.anEdge;

                do {
                  e.assert(t.sym !== t), e.assert(t.sym.sym === t), e.assert(t.lNext.oNext.sym === t), e.assert(t.oNext.sym.lNext === t), e.assert(t.org === r), t = t.oNext;
                } while (t !== r.anEdge);
              }

              e.assert(r.prev === a && null === r.anEdge && null === r.data);
              var _ = o;

              for (_ = o; (t = _.next) !== o; _ = t) {
                e.assert(t.sym.next === _.sym), e.assert(t.sym !== t), e.assert(t.sym.sym === t), e.assert(null !== t.org), e.assert(null !== t.dst()), e.assert(t.lNext.oNext.sym === t), e.assert(t.oNext.sym.lNext === t);
              }

              e.assert(t.sym.next === _.sym && t.sym === this.eHeadSym && t.sym.sym === t && null === t.org && null === t.dst() && null === t.lFace && null === t.rFace());
            }
          }, e.GluVertex = function (e, t) {
            this.next = e || this, this.prev = t || this, this.anEdge = null, this.data = null, this.coords = [0, 0, 0], this.s = 0, this.t = 0, this.pqHandle = 0;
          }, e.PriorityQ = function () {
            this.verts_ = [], this.order_ = null, this.size_ = 0, this.initialized_ = !1, this.heap_ = new e.PriorityQHeap();
          }, e.PriorityQ.prototype.deleteQ = function () {
            this.heap_ = null, this.order_ = null, this.verts_ = null;
          }, e.PriorityQ.prototype.init = function () {
            this.order_ = [];

            for (var t = 0; t < this.size_; t++) {
              this.order_[t] = t;
            }

            var s,
                r = (s = this.verts_, function (t, r) {
              return e.geom.vertLeq(s[t], s[r]) ? 1 : -1;
            });

            if (this.order_.sort(r), this.initialized_ = !0, this.heap_.init(), e.DEBUG) {
              var i = 0,
                  n = i + this.size_ - 1;

              for (t = i; t < n; ++t) {
                e.assert(e.geom.vertLeq(this.verts_[this.order_[t + 1]], this.verts_[this.order_[t]]));
              }
            }
          }, e.PriorityQ.prototype.insert = function (e) {
            if (this.initialized_) return this.heap_.insert(e);
            var t = this.size_++;
            return this.verts_[t] = e, -(t + 1);
          }, e.PriorityQ.prototype.extractMin = function () {
            if (0 === this.size_) return this.heap_.extractMin();
            var t = this.verts_[this.order_[this.size_ - 1]];

            if (!this.heap_.isEmpty()) {
              var s = this.heap_.minimum();
              if (e.geom.vertLeq(s, t)) return this.heap_.extractMin();
            }

            do {
              --this.size_;
            } while (this.size_ > 0 && null === this.verts_[this.order_[this.size_ - 1]]);

            return t;
          }, e.PriorityQ.prototype.minimum = function () {
            if (0 === this.size_) return this.heap_.minimum();
            var t = this.verts_[this.order_[this.size_ - 1]];

            if (!this.heap_.isEmpty()) {
              var s = this.heap_.minimum();
              if (e.geom.vertLeq(s, t)) return s;
            }

            return t;
          }, e.PriorityQ.prototype.remove = function (t) {
            if (t >= 0) this.heap_.remove(t);else for (t = -(t + 1), e.assert(t < this.verts_.length && null !== this.verts_[t]), this.verts_[t] = null; this.size_ > 0 && null === this.verts_[this.order_[this.size_ - 1]];) {
              --this.size_;
            }
          }, e.PriorityQHeap = function () {
            this.heap_ = e.PriorityQHeap.reallocNumeric_([0], e.PriorityQHeap.INIT_SIZE_ + 1), this.verts_ = [null, null], this.handles_ = [0, 0], this.size_ = 0, this.max_ = e.PriorityQHeap.INIT_SIZE_, this.freeList_ = 0, this.initialized_ = !1, this.heap_[1] = 1;
          }, e.PriorityQHeap.INIT_SIZE_ = 32, e.PriorityQHeap.reallocNumeric_ = function (e, t) {
            for (var s = new Array(t), r = 0; r < e.length; r++) {
              s[r] = e[r];
            }

            for (; r < t; r++) {
              s[r] = 0;
            }

            return s;
          }, e.PriorityQHeap.prototype.init = function () {
            for (var e = this.size_; e >= 1; --e) {
              this.floatDown_(e);
            }

            this.initialized_ = !0;
          }, e.PriorityQHeap.prototype.insert = function (t) {
            var s,
                r = ++this.size_;
            return 2 * r > this.max_ && (this.max_ *= 2, this.handles_ = e.PriorityQHeap.reallocNumeric_(this.handles_, this.max_ + 1)), 0 === this.freeList_ ? s = r : (s = this.freeList_, this.freeList_ = this.handles_[this.freeList_]), this.verts_[s] = t, this.handles_[s] = r, this.heap_[r] = s, this.initialized_ && this.floatUp_(r), s;
          }, e.PriorityQHeap.prototype.isEmpty = function () {
            return 0 === this.size_;
          }, e.PriorityQHeap.prototype.minimum = function () {
            return this.verts_[this.heap_[1]];
          }, e.PriorityQHeap.prototype.extractMin = function () {
            var e = this.heap_,
                t = this.verts_,
                s = this.handles_,
                r = e[1],
                i = t[r];
            return this.size_ > 0 && (e[1] = e[this.size_], s[e[1]] = 1, t[r] = null, s[r] = this.freeList_, this.freeList_ = r, --this.size_ > 0 && this.floatDown_(1)), i;
          }, e.PriorityQHeap.prototype.remove = function (t) {
            var s = this.heap_,
                r = this.verts_,
                i = this.handles_;
            e.assert(t >= 1 && t <= this.max_ && null !== r[t]);
            var n = i[t];
            if (s[n] = s[this.size_], i[s[n]] = n, n <= --this.size_) if (n <= 1) this.floatDown_(n);else {
              var o = r[s[n]],
                  l = r[s[n >> 1]];
              e.geom.vertLeq(l, o) ? this.floatDown_(n) : this.floatUp_(n);
            }
            r[t] = null, i[t] = this.freeList_, this.freeList_ = t;
          }, e.PriorityQHeap.prototype.floatDown_ = function (t) {
            for (var s = this.heap_, r = this.verts_, i = this.handles_, n = t, o = s[n];;) {
              var l = n << 1;
              l < this.size_ && e.geom.vertLeq(r[s[l + 1]], r[s[l]]) && (l += 1), e.assert(l <= this.max_);
              var a = s[l];
              if (l > this.size_ || e.geom.vertLeq(r[o], r[a])) return s[n] = o, void (i[o] = n);
              s[n] = a, i[a] = n, n = l;
            }
          }, e.PriorityQHeap.prototype.floatUp_ = function (t) {
            for (var s = this.heap_, r = this.verts_, i = this.handles_, n = t, o = s[n];;) {
              var l = n >> 1,
                  a = s[l];
              if (0 === l || e.geom.vertLeq(r[a], r[o])) return s[n] = o, void (i[o] = n);
              s[n] = a, i[a] = n, n = l;
            }
          }, e.ActiveRegion = function () {
            this.eUp = null, this.nodeUp = null, this.windingNumber = 0, this.inside = !1, this.sentinel = !1, this.dirty = !1, this.fixUpperEdge = !1;
          }, e.ActiveRegion.prototype.regionBelow = function () {
            return this.nodeUp.getPredecessor().getKey();
          }, e.ActiveRegion.prototype.regionAbove = function () {
            return this.nodeUp.getSuccessor().getKey();
          }, e;
        }()) && (e.exports = t);
      });

      var r = _core_Logger_js__WEBPACK_IMPORTED_MODULE_0__["default"].getLogger("esri.views.2d.engine.webgl.mesh.templates.Tesselator");
      /* harmony default export */


      __webpack_exports__["default"] = /*#__PURE__*/function () {
        function _class() {
          _classCallCheck(this, _class);

          this._currentVertexIndex = 0, this._indexCounter = 0, this._triangleIndices = [-1, -1, -1], this.glu = new s.GluTesselator(), this.glu.gluTessCallback(s.gluEnum.GLU_TESS_BEGIN, this._begincallback.bind(this)), this.glu.gluTessCallback(s.gluEnum.GLU_TESS_VERTEX_DATA, this._vertexCallback.bind(this)), this.glu.gluTessCallback(s.gluEnum.GLU_TESS_END, this._endcallback.bind(this)), this.glu.gluTessCallback(s.gluEnum.GLU_TESS_COMBINE, this._combinecallback.bind(this)), this.glu.gluTessCallback(s.gluEnum.GLU_TESS_ERROR, this._errorcallback.bind(this)), this.glu.gluTessCallback(s.gluEnum.GLU_TESS_EDGE_FLAG, this._edgeCallback.bind(this)), this.glu.gluTessProperty(s.gluEnum.GLU_TESS_WINDING_RULE, s.windingRule.GLU_TESS_WINDING_ODD);
        }

        _createClass(_class, [{
          key: "beginPolygon",
          value: function beginPolygon(e, t) {
            this._triangleIndices[0] = -1, this._triangleIndices[1] = -1, this._triangleIndices[2] = -1, this._currentVertexIndex = 0, this._indexCounter = 0, this.glu.gluTessBeginPolygon(e), this._indices = t;
          }
        }, {
          key: "endPolygon",
          value: function endPolygon() {
            this.glu.gluTessEndPolygon();
          }
        }, {
          key: "beginContour",
          value: function beginContour() {
            this.glu.gluTessBeginContour();
          }
        }, {
          key: "endContour",
          value: function endContour() {
            this.glu.gluTessEndContour();
          }
        }, {
          key: "addVertex",
          value: function addVertex(e, t) {
            this.glu.gluTessVertex(e, t);
          }
        }, {
          key: "_vertexCallback",
          value: function _vertexCallback(e, t) {
            if (t[t.length] = e[0], t[t.length] = e[1], this._triangleIndices[this._currentVertexIndex] = -1, this._currentVertexIndex >= 2) {
              for (var _e = 0; _e < 3; _e++) {
                -1 === this._triangleIndices[_e] && (this._triangleIndices[_e] = this._indexCounter++), this._indices[this._indices.length] = this._triangleIndices[_e];
              }

              this._currentVertexIndex = 0;
            } else this._currentVertexIndex++;
          }
        }, {
          key: "_begincallback",
          value: function _begincallback() {
            this._triangleIndices[0] = -1, this._triangleIndices[1] = -1, this._triangleIndices[2] = -1, this._currentVertexIndex = 0;
          }
        }, {
          key: "_endcallback",
          value: function _endcallback() {
            this._currentVertexIndex = 0;
          }
        }, {
          key: "_errorcallback",
          value: function _errorcallback(e) {
            r.error("Encountered error during tesselation: ".concat(e));
          }
        }, {
          key: "_combinecallback",
          value: function _combinecallback(e) {
            return [e[0], e[1], e[2]];
          }
        }, {
          key: "_edgeCallback",
          value: function _edgeCallback() {}
        }]);

        return _class;
      }();
      /***/

    },

    /***/
    "Jimw":
    /*!**********************************************************************!*\
      !*** ./node_modules/@arcgis/core/views/2d/engine/webgl/TurboLine.js ***!
      \**********************************************************************/

    /*! exports provided: StandardTessellationCallbacks, TessellationState, ThinTessellationCallbacks, cleanup, splitVertex, tessellate */

    /***/
    function Jimw(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "StandardTessellationCallbacks", function () {
        return E;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "TessellationState", function () {
        return e;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ThinTessellationCallbacks", function () {
        return m;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "cleanup", function () {
        return i;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "splitVertex", function () {
        return n;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "tessellate", function () {
        return r;
      });
      /* harmony import */


      var _mesh_templates_util_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ./mesh/templates/util.js */
      "aixI");
      /*
      All material copyright ESRI, All Rights Reserved, unless otherwise specified.
      See https://js.arcgis.com/4.18/esri/copyright.txt for details.
      */


      var e = function e() {
        _classCallCheck(this, e);

        this.closed = void 0, this.isFirstVertex = void 0, this.isLastVertex = void 0, this.isCap = void 0, this.currentVertex = {
          x: void 0,
          y: void 0
        }, this.inbound = {
          x: void 0,
          y: void 0
        }, this.outbound = {
          x: void 0,
          y: void 0
        }, this.prevNormal = {
          x: void 0,
          y: void 0
        }, this.nextNormal = {
          x: void 0,
          y: void 0
        }, this.bisector = {
          x: void 0,
          y: void 0
        }, this.leftInner = {
          x: void 0,
          y: void 0
        }, this.rightInner = {
          x: void 0,
          y: void 0
        }, this.leftOuter = {
          x: void 0,
          y: void 0
        }, this.rightOuter = {
          x: void 0,
          y: void 0
        };
      };

      function r(t, e, r) {
        o.trackDistance = null != e.trackDistance && e.trackDistance, o.wrapDistance = null != e.wrapDistance ? e.wrapDistance : 65535, o.thin = null != e.thin && e.thin, o.initialDistance = null != e.initialDistance ? e.initialDistance : 0, o.enableOuterBisectorSplit = null != e.enableOuterBisectorSplit && e.enableOuterBisectorSplit, o.outerBisectorAutoSplitThreshold = null != e.outerBisectorAutoSplitThreshold ? e.outerBisectorAutoSplitThreshold : 0, o.enableInnerBisectorSplit = null != e.enableOuterBisectorSplit && e.enableOuterBisectorSplit, o.innerBisectorAutoSplitThreshold = null != e.innerBisectorAutoSplitThreshold ? e.innerBisectorAutoSplitThreshold : 0, x = t, s = r, u = 0, l = 0, c = 0, y = !1, a = null, h = null, d.currentVertex.x = null, d.currentVertex.y = null, d.distance = o.initialDistance;
        var i = x[0],
            n = x[x.length - 1];
        d.canSplit = !1, d.closed = i.x === n.x && i.y === n.y, x.length < 2 || 2 === x.length && d.closed || (o.thin ? o.trackDistance ? function () {
          b(), V(), f(1);

          for (; l - c > o.wrapDistance || u < x.length;) {
            b(), V(), f(2), s.bridge(d), d.leftExit0 = d.rightExit0, d.leftExit2 = d.rightExit2;
          }
        }() : function () {
          for (; u < x.length;) {
            if (u > 0 && (d.inbound.x = d.outbound.x, d.inbound.y = d.outbound.y), u < x.length - 1) {
              d.outbound.x = x[u + 1].x - x[u].x, d.outbound.y = x[u + 1].y - x[u].y;

              var _t = Math.sqrt(d.outbound.x * d.outbound.x + d.outbound.y * d.outbound.y);

              d.distance += _t, d.outbound.x /= _t, d.outbound.y /= _t;
            } else d.outbound.x = d.inbound.x, d.outbound.y = d.inbound.y;

            0 === u && (d.inbound.x = d.outbound.x, d.inbound.y = d.outbound.y), d.currentVertex.x = x[u].x, d.currentVertex.y = x[u].y, d.prevNormal.x = -d.inbound.y, d.prevNormal.y = d.inbound.x, d.nextNormal.x = -d.outbound.y, d.nextNormal.y = d.outbound.x, 0 === u ? (s.vertex(d), d.leftEntry0 = d.entry0, d.leftEntry2 = d.entry2, d.leftExit0 = d.exit0, d.leftExit2 = d.exit2) : (s.vertex(d), d.rightEntry0 = d.entry0, d.rightEntry2 = d.entry2, d.rightExit0 = d.exit0, d.rightExit2 = d.exit2, s.bridge(d), d.leftExit0 = d.rightExit0, d.leftExit2 = d.rightExit2), ++u;
          }
        }() : o.enableOuterBisectorSplit || o.outerBisectorAutoSplitThreshold > 0 || o.enableInnerBisectorSplit || o.innerBisectorAutoSplitThreshold > 0 ? (d.canSplit = !0, function () {
          b(), g(), d.splitInner = d.gapInner = d.splitOuter = d.gapOuter = !1, p(1), d.closure0 = d.leftEntry0, d.closure1 = d.leftEntry1, d.closure2 = d.leftEntry2;

          for (; l - c > o.wrapDistance || u < x.length - 1 || u < x.length && (!d.closed || o.trackDistance);) {
            b(), g(), d.splitInner = d.gapInner = d.splitOuter = d.gapOuter = !1, p(2), s.bridge(d), d.leftExit0 = d.rightExit0, d.leftExit1 = d.rightExit1, d.leftExit2 = d.rightExit2;
          }

          d.closed && !o.trackDistance && (d.rightEntry0 = d.closure0, d.rightEntry1 = d.closure1, d.rightEntry2 = d.closure2, s.bridge(d), d.leftExit0 = d.rightExit0, d.leftExit1 = d.rightExit1, d.leftExit2 = d.rightExit2);
        }()) : function () {
          b(), g(), p(1), d.closure0 = d.leftEntry0, d.closure1 = d.leftEntry1, d.closure2 = d.leftEntry2;

          for (; l - c > o.wrapDistance || u < x.length - 1 || u < x.length && (!d.closed || o.trackDistance);) {
            b(), g(), p(2), s.bridge(d), d.leftExit0 = d.rightExit0, d.leftExit1 = d.rightExit1, d.leftExit2 = d.rightExit2;
          }

          d.closed && !o.trackDistance && (d.rightEntry0 = d.closure0, d.rightEntry1 = d.closure1, d.rightEntry2 = d.closure2, s.bridge(d), d.leftExit0 = d.rightExit0, d.leftExit1 = d.rightExit1, d.leftExit2 = d.rightExit2);
        }());
      }

      function i() {
        x = null, s = null;
      }

      function n() {
        if (d.cosine < o.innerBisectorAutoSplitThreshold) {
          d.splitInner = !0, d.gapInner = !0;

          var t = Math.max(o.innerBisectorAutoSplitThreshold, d.cosine),
              _e2 = Math.sqrt(1 - t * t) / t;

          d.leftInner.x = d.nextNormal.x + d.sign * _e2 * d.outbound.x, d.leftInner.y = d.nextNormal.y + d.sign * _e2 * d.outbound.y, d.rightInner.x = d.prevNormal.x - d.sign * _e2 * d.inbound.x, d.rightInner.y = d.prevNormal.y - d.sign * _e2 * d.inbound.y;
        } else o.enableInnerBisectorSplit && (d.splitInner = !0, d.gapInner = !1, d.leftInner.x = d.rightInner.x = d.bisector.x / d.cosine, d.leftInner.y = d.rightInner.y = d.bisector.y / d.cosine);

        if (d.cosine < o.outerBisectorAutoSplitThreshold) {
          d.splitOuter = !0, d.gapOuter = !0;

          var _t2 = Math.max(o.outerBisectorAutoSplitThreshold, d.cosine),
              _e3 = Math.sqrt(1 - _t2 * _t2) / _t2;

          d.leftOuter.x = d.prevNormal.x - d.sign * _e3 * d.inbound.x, d.leftOuter.y = d.prevNormal.y - d.sign * _e3 * d.inbound.y, d.rightOuter.x = d.nextNormal.x + d.sign * _e3 * d.outbound.x, d.rightOuter.y = d.nextNormal.y + d.sign * _e3 * d.outbound.y;
        } else o.enableOuterBisectorSplit && (d.splitOuter = !0, d.gapOuter = !1, d.leftOuter.x = d.rightOuter.x = d.bisector.x / d.cosine, d.leftOuter.y = d.rightOuter.y = d.bisector.y / d.cosine);
      }

      var x;
      var o = {};
      var s, u, l, c, y, a, h;
      var d = new e();

      function b() {
        if (y) return d.distance = 0, d.isCap = d.isFirstVertex = d.isLastVertex = !1, void (y = !1);
        if (0 === l) if (d.isFirstVertex = 0 === u, h = x[u], 0 === u) {
          if (l = 0, d.closed) {
            d.inbound.x = h.x - x[x.length - 2].x, d.inbound.y = h.y - x[x.length - 2].y;

            var _t3 = Math.sqrt(d.inbound.x * d.inbound.x + d.inbound.y * d.inbound.y);

            d.inbound.x /= _t3, d.inbound.y /= _t3;
          }
        } else d.inbound.x = h.x - a.x, d.inbound.y = h.y - a.y, l = Math.sqrt(d.inbound.x * d.inbound.x + d.inbound.y * d.inbound.y), d.inbound.x /= l, d.inbound.y /= l;

        if (d.distance + l - c <= o.wrapDistance) {
          if (u < x.length - 1) {
            d.outbound.x = x[u + 1].x - h.x, d.outbound.y = x[u + 1].y - h.y;

            var _t4 = Math.sqrt(d.outbound.x * d.outbound.x + d.outbound.y * d.outbound.y);

            d.outbound.x /= _t4, d.outbound.y /= _t4;
          } else if (d.closed) {
            d.outbound.x = x[1].x - h.x, d.outbound.y = x[1].y - h.y;

            var _t5 = Math.sqrt(d.outbound.x * d.outbound.x + d.outbound.y * d.outbound.y);

            d.outbound.x /= _t5, d.outbound.y /= _t5;
          } else d.outbound.x = d.inbound.x, d.outbound.y = d.inbound.y;

          return 0 !== u || d.closed || (d.inbound.x = d.outbound.x, d.inbound.y = d.outbound.y), ++u, d.isLastVertex = u === x.length, d.isCap = !d.closed && (d.isFirstVertex || d.isLastVertex), d.distance += l - c, l = 0, c = 0, y = d.distance + l - c === o.wrapDistance, d.currentVertex.x = h.x, d.currentVertex.y = h.y, a = h, void (h = null);
        }

        d.outbound.x = d.inbound.x, d.outbound.y = d.inbound.y, c += o.wrapDistance - d.distance, d.distance = o.wrapDistance, y = !0;
        var t = c / l;
        d.currentVertex.x = (1 - t) * a.x + t * h.x, d.currentVertex.y = (1 - t) * a.y + t * h.y;
      }

      function V() {
        d.prevNormal.x = -d.inbound.y, d.prevNormal.y = d.inbound.x, d.nextNormal.x = -d.outbound.y, d.nextNormal.y = d.outbound.x;
      }

      function g() {
        V(), d.bisector.x = d.prevNormal.x + d.nextNormal.x, d.bisector.y = d.prevNormal.y + d.nextNormal.y;
        var t = Math.sqrt(d.bisector.x * d.bisector.x + d.bisector.y * d.bisector.y);
        if (t < .001) return d.bisector.x = void 0, d.bisector.y = void 0, d.cosine = 0, void (d.sign = void 0);
        d.bisector.x /= t, d.bisector.y /= t, d.cosine = d.bisector.x * d.nextNormal.x + d.bisector.y * d.nextNormal.y, d.sign = d.prevNormal.x * d.nextNormal.y - d.prevNormal.y * d.nextNormal.x >= 0 ? 1 : -1;
      }

      function p(t) {
        s.vertex(d), 1 === t ? (d.leftEntry0 = d.entry0, d.leftEntry1 = d.entry1, d.leftEntry2 = d.entry2, d.leftExit0 = d.exit0, d.leftExit1 = d.exit1, d.leftExit2 = d.exit2) : 2 === t && (d.rightEntry0 = d.entry0, d.rightEntry1 = d.entry1, d.rightEntry2 = d.entry2, d.rightExit0 = d.exit0, d.rightExit1 = d.exit1, d.rightExit2 = d.exit2);
      }

      function f(t) {
        s.vertex(d), 1 === t ? (d.leftEntry0 = d.entry0, d.leftEntry2 = d.entry2, d.leftExit0 = d.exit0, d.leftExit2 = d.exit2) : 2 === t && (d.rightEntry0 = d.entry0, d.rightEntry2 = d.entry2, d.rightExit0 = d.exit0, d.rightExit2 = d.exit2);
      }

      var E = /*#__PURE__*/function () {
        function E(e, r) {
          _classCallCheck(this, E);

          this.writeVertex = e, this.writeTriangle = r, this.capType = 0, this.joinType = 2, this.miterLimitCosine = Object(_mesh_templates_util_js__WEBPACK_IMPORTED_MODULE_0__["getLimitCosine"])(2), this.roundLimitCosine = Math.cos(23 * Math.PI / 180), this.almostParallelCosine = .97, this.radsPerSlice = .8, this.textured = !1, this.joinOnUTurn = !1;
        }

        _createClass(E, [{
          key: "vertex",
          value: function vertex(t) {
            var e = 2 === this.joinType ? this.miterLimitCosine : this.roundLimitCosine,
                r = t.isCap && 0 !== this.capType;
            var i = !1;
            t.cosine > this.almostParallelCosine ? (t.exit0 = t.entry0 = this.writeVertex(t.currentVertex.x, t.currentVertex.y, 0, 0, t.bisector.x / t.cosine, t.bisector.y / t.cosine, 0, -1, t.distance), t.exit2 = t.entry2 = this.writeVertex(t.currentVertex.x, t.currentVertex.y, 0, 0, -t.bisector.x / t.cosine, -t.bisector.y / t.cosine, 0, 1, t.distance)) : t.cosine < 1 - this.almostParallelCosine ? (i = !t.isCap && this.joinOnUTurn, t.entry0 = this.writeVertex(t.currentVertex.x, t.currentVertex.y, 0, 0, t.prevNormal.x, t.prevNormal.y, 0, -1, t.distance), t.entry2 = this.writeVertex(t.currentVertex.x, t.currentVertex.y, 0, 0, -t.prevNormal.x, -t.prevNormal.y, 0, 1, t.distance), t.exit0 = this.writeVertex(t.currentVertex.x, t.currentVertex.y, 0, 0, t.nextNormal.x, t.nextNormal.y, 0, -1, t.distance), t.exit2 = this.writeVertex(t.currentVertex.x, t.currentVertex.y, 0, 0, -t.nextNormal.x, -t.nextNormal.y, 0, 1, t.distance)) : t.canSplit ? (n(), t.sign > 0 ? (t.splitInner ? (t.exit0 = this.writeVertex(t.currentVertex.x, t.currentVertex.y, t.outbound.x, t.outbound.y, t.leftInner.x, t.leftInner.y, 0, -1, t.distance), t.entry0 = this.writeVertex(t.currentVertex.x, t.currentVertex.y, t.inbound.x, t.inbound.y, t.rightInner.x, t.rightInner.y, 0, -1, t.distance)) : t.exit0 = t.entry0 = this.writeVertex(t.currentVertex.x, t.currentVertex.y, t.inbound.x, t.inbound.y, t.bisector.x / t.cosine, t.bisector.y / t.cosine, 0, -1, t.distance), t.cosine < e ? (i = !t.isCap, t.entry2 = this.writeVertex(t.currentVertex.x, t.currentVertex.y, 0, 0, -t.prevNormal.x, -t.prevNormal.y, 0, 1, t.distance), t.exit2 = this.writeVertex(t.currentVertex.x, t.currentVertex.y, 0, 0, -t.nextNormal.x, -t.nextNormal.y, 0, 1, t.distance)) : t.splitOuter ? (i = i || t.gapOuter, t.entry2 = this.writeVertex(t.currentVertex.x, t.currentVertex.y, t.inbound.x, t.inbound.y, -t.leftOuter.x, -t.leftOuter.y, 0, 1, t.distance), t.exit2 = this.writeVertex(t.currentVertex.x, t.currentVertex.y, t.outbound.x, t.outbound.y, -t.rightOuter.x, -t.rightOuter.y, 0, 1, t.distance)) : t.entry2 = t.exit2 = this.writeVertex(t.currentVertex.x, t.currentVertex.y, 0, 0, -t.bisector.x / t.cosine, -t.bisector.y / t.cosine, 0, 1, t.distance)) : (t.splitInner ? (t.exit2 = this.writeVertex(t.currentVertex.x, t.currentVertex.y, t.outbound.x, t.outbound.y, -t.leftInner.x, -t.leftInner.y, 0, 1, t.distance), t.entry2 = this.writeVertex(t.currentVertex.x, t.currentVertex.y, t.inbound.x, t.inbound.y, -t.rightInner.x, -t.rightInner.y, 0, 1, t.distance)) : t.exit2 = t.entry2 = this.writeVertex(t.currentVertex.x, t.currentVertex.y, 0, 0, -t.bisector.x / t.cosine, -t.bisector.y / t.cosine, 0, 1, t.distance), t.cosine < e ? (i = !t.isCap, t.entry0 = this.writeVertex(t.currentVertex.x, t.currentVertex.y, 0, 0, t.prevNormal.x, t.prevNormal.y, 0, -1, t.distance), t.exit0 = this.writeVertex(t.currentVertex.x, t.currentVertex.y, 0, 0, t.nextNormal.x, t.nextNormal.y, 0, -1, t.distance)) : t.splitOuter ? (i = i || t.gapOuter, t.entry0 = this.writeVertex(t.currentVertex.x, t.currentVertex.y, t.inbound.x, t.inbound.y, t.leftOuter.x, t.leftOuter.y, 0, -1, t.distance), t.exit0 = this.writeVertex(t.currentVertex.x, t.currentVertex.y, t.outbound.x, t.outbound.y, t.rightOuter.x, t.rightOuter.y, 0, -1, t.distance)) : t.exit0 = t.entry0 = this.writeVertex(t.currentVertex.x, t.currentVertex.y, 0, 0, t.bisector.x / t.cosine, t.bisector.y / t.cosine, 0, -1, t.distance))) : t.sign > 0 ? (t.exit0 = t.entry0 = this.writeVertex(t.currentVertex.x, t.currentVertex.y, t.inbound.x, t.inbound.y, t.bisector.x / t.cosine, t.bisector.y / t.cosine, 0, -1, t.distance), t.cosine < e ? (i = !t.isCap, t.entry2 = this.writeVertex(t.currentVertex.x, t.currentVertex.y, 0, 0, -t.prevNormal.x, -t.prevNormal.y, 0, 1, t.distance), t.exit2 = this.writeVertex(t.currentVertex.x, t.currentVertex.y, 0, 0, -t.nextNormal.x, -t.nextNormal.y, 0, 1, t.distance)) : t.entry2 = t.exit2 = this.writeVertex(t.currentVertex.x, t.currentVertex.y, 0, 0, -t.bisector.x / t.cosine, -t.bisector.y / t.cosine, 0, 1, t.distance)) : (t.exit2 = t.entry2 = this.writeVertex(t.currentVertex.x, t.currentVertex.y, 0, 0, -t.bisector.x / t.cosine, -t.bisector.y / t.cosine, 0, 1, t.distance), t.cosine < e ? (i = !t.isCap, t.entry0 = this.writeVertex(t.currentVertex.x, t.currentVertex.y, 0, 0, t.prevNormal.x, t.prevNormal.y, 0, -1, t.distance), t.exit0 = this.writeVertex(t.currentVertex.x, t.currentVertex.y, 0, 0, t.nextNormal.x, t.nextNormal.y, 0, -1, t.distance)) : t.exit0 = t.entry0 = this.writeVertex(t.currentVertex.x, t.currentVertex.y, 0, 0, t.bisector.x / t.cosine, t.bisector.y / t.cosine, 0, -1, t.distance));
            var x = t.canSplit && (t.splitInner || t.splitOuter);
            var o;
            if (o = t.entry1 = t.exit1 = x || i || r ? this.writeVertex(t.currentVertex.x, t.currentVertex.y, 0, 0, 0, 0, 0, 0, t.distance) : null, i && 1 !== this.joinType) this.writeTriangle(o, t.sign > 0 ? t.exit2 : t.entry0, t.sign > 0 ? t.entry2 : t.exit0);else if (r && 1 === this.capType || i && 1 === this.joinType) {
              var _e4, _r, _i, _n, _x, _s;

              if (t.isCap) {
                var _o = Math.PI;
                _x = Math.ceil(_o / this.radsPerSlice), _s = _o / _x, t.isFirstVertex ? (_e4 = t.prevNormal.x, _r = t.prevNormal.y, _i = t.entry0, _n = t.entry2) : t.isLastVertex && (_e4 = -t.nextNormal.x, _r = -t.nextNormal.y, _i = t.exit2, _n = t.exit0);
              } else {
                var _o2 = 2 * Math.acos(t.cosine);

                _x = Math.ceil(_o2 / this.radsPerSlice), _s = _o2 / _x, _e4 = t.sign > 0 ? -t.prevNormal.x : t.nextNormal.x, _r = t.sign > 0 ? -t.prevNormal.y : t.nextNormal.y, _i = t.sign > 0 ? t.entry2 : t.exit0, _n = t.sign > 0 ? t.exit2 : t.entry0;
              }

              var _u = Math.cos(_s),
                  _l = Math.sin(_s),
                  _c = _l * _e4 + _u * _r;

              var _y, _a;

              _e4 = _u * _e4 - _l * _r, _r = _c;

              for (var _s2 = 0; _s2 < _x; ++_s2) {
                if (_y = _a, _s2 < _x - 1) if (t.isCap) {
                  var _i2 = t.isFirstVertex ? -1 : 1;

                  _a = this.writeVertex(t.currentVertex.x, t.currentVertex.y, 0, 0, _e4, _r, _i2, 0, t.distance);
                } else _a = this.writeVertex(t.currentVertex.x, t.currentVertex.y, 0, 0, _e4, _r, 0, t.sign, t.distance);
                this.writeTriangle(0 === _s2 ? _i : _y, o, _s2 === _x - 1 ? _n : _a);

                var _c2 = _l * _e4 + _u * _r;

                _e4 = _u * _e4 - _l * _r, _r = _c2;
              }
            } else if (r && 2 === this.capType) {
              var _e5 = t.isFirstVertex ? 1 : -1;

              var _r2, _i3;

              this.textured ? (_r2 = this.writeVertex(t.currentVertex.x, t.currentVertex.y, 0, 0, t.prevNormal.x - _e5 * t.inbound.x, t.prevNormal.y - _e5 * t.inbound.y, -_e5, -1, t.distance), _i3 = this.writeVertex(t.currentVertex.x, t.currentVertex.y, 0, 0, -t.prevNormal.x - _e5 * t.inbound.x, -t.prevNormal.y - _e5 * t.inbound.y, -_e5, 1, t.distance)) : (_r2 = this.writeVertex(t.currentVertex.x, t.currentVertex.y, 0, 0, t.prevNormal.x - _e5 * t.inbound.x, t.prevNormal.y - _e5 * t.inbound.y, 0, -1, t.distance), _i3 = this.writeVertex(t.currentVertex.x, t.currentVertex.y, 0, 0, -t.prevNormal.x - _e5 * t.inbound.x, -t.prevNormal.y - _e5 * t.inbound.y, 0, 1, t.distance)), _e5 > 0 ? (this.writeTriangle(o, t.entry2, _i3), this.writeTriangle(o, _i3, _r2), this.writeTriangle(o, _r2, t.entry0)) : (this.writeTriangle(o, _i3, t.exit2), this.writeTriangle(o, _r2, _i3), this.writeTriangle(o, t.exit0, _r2));
            }
          }
        }, {
          key: "bridge",
          value: function bridge(t) {
            this.writeTriangle(t.leftExit0, t.rightEntry0, null != t.leftExit1 ? t.leftExit1 : t.leftExit2), this.writeTriangle(t.rightEntry0, null != t.rightEntry1 ? t.rightEntry1 : t.rightEntry2, null != t.leftExit1 ? t.leftExit1 : t.leftExit2), null != t.leftExit1 && null != t.rightEntry1 ? (this.writeTriangle(t.leftExit1, t.rightEntry1, t.leftExit2), this.writeTriangle(t.rightEntry1, t.rightEntry2, t.leftExit2)) : null != t.leftExit1 ? this.writeTriangle(t.leftExit1, t.rightEntry2, t.leftExit2) : null != t.rightEntry1 && this.writeTriangle(t.rightEntry1, t.rightEntry2, t.leftExit2);
          }
        }]);

        return E;
      }();

      var m = /*#__PURE__*/function () {
        function m(t, e) {
          _classCallCheck(this, m);

          this.writeVertex = t, this.writeTriangle = e;
        }

        _createClass(m, [{
          key: "vertex",
          value: function vertex(t) {
            t.entry0 = this.writeVertex(t.currentVertex.x, t.currentVertex.y, 0, 0, t.prevNormal.x, t.prevNormal.y, 0, -1, t.distance), t.entry2 = this.writeVertex(t.currentVertex.x, t.currentVertex.y, 0, 0, -t.prevNormal.x, -t.prevNormal.y, 0, 1, t.distance), t.exit0 = this.writeVertex(t.currentVertex.x, t.currentVertex.y, 0, 0, t.nextNormal.x, t.nextNormal.y, 0, -1, t.distance), t.exit2 = this.writeVertex(t.currentVertex.x, t.currentVertex.y, 0, 0, -t.nextNormal.x, -t.nextNormal.y, 0, 1, t.distance);
          }
        }, {
          key: "bridge",
          value: function bridge(t) {
            this.writeTriangle(t.leftExit0, t.rightEntry0, t.leftExit2), this.writeTriangle(t.rightEntry0, t.rightEntry2, t.leftExit2);
          }
        }]);

        return m;
      }();
      /***/

    },

    /***/
    "LaVW":
    /*!************************************************************************!*\
      !*** ./node_modules/@arcgis/core/views/2d/engine/webgl/TileClipper.js ***!
      \************************************************************************/

    /*! exports provided: SimpleBuilder, TileClipper */

    /***/
    function LaVW(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "SimpleBuilder", function () {
        return e;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "TileClipper", function () {
        return n;
      });
      /* harmony import */


      var _definitions_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ./definitions.js */
      "jIHu");
      /* harmony import */


      var _GeometryUtils_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./GeometryUtils.js */
      "HQFP");
      /* harmony import */


      var _Geometry_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./Geometry.js */
      "OXZQ");
      /*
      All material copyright ESRI, All Rights Reserved, unless otherwise specified.
      See https://js.arcgis.com/4.18/esri/copyright.txt for details.
      */


      var h = function h(i, t, s) {
        _classCallCheck(this, h);

        this.ratio = i, this.x = t, this.y = s;
      };

      var n = /*#__PURE__*/function () {
        function n(t, s, h) {
          var _n2 = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : 8;

          var e = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : 8;

          _classCallCheck(this, n);

          this.lines = [], this.starts = [], this.validateTessellation = !0, this.pixelRatio = _n2, this.pixelMargin = e, this.tileSize = _definitions_js__WEBPACK_IMPORTED_MODULE_0__["TILE_SIZE"] * _n2, this.dz = t, this.yPos = s, this.xPos = h;
        }

        _createClass(n, [{
          key: "setExtent",
          value: function setExtent(i) {
            this.finalRatio = this.tileSize / i * (1 << this.dz);
            var t = this.pixelRatio * this.pixelMargin;
            t /= this.finalRatio;
            var s = i >> this.dz;
            t > s && (t = s), this.margin = t, this.xmin = s * this.xPos - t, this.ymin = s * this.yPos - t, this.xmax = this.xmin + s + 2 * t, this.ymax = this.ymin + s + 2 * t;
          }
        }, {
          key: "reset",
          value: function reset(i) {
            this.type = i, this.lines = [], this.starts = [], this.line = null, this.start = 0;
          }
        }, {
          key: "moveTo",
          value: function moveTo(i, t) {
            this._pushLine(), this._prevIsIn = this._isIn(i, t), this._moveTo(i, t, this._prevIsIn), this._prevPt = new _Geometry_js__WEBPACK_IMPORTED_MODULE_2__["Point"](i, t), this._firstPt = new _Geometry_js__WEBPACK_IMPORTED_MODULE_2__["Point"](i, t), this._dist = 0;
          }
        }, {
          key: "lineTo",
          value: function lineTo(i, t) {
            var _n3 = this._isIn(i, t),
                e = new _Geometry_js__WEBPACK_IMPORTED_MODULE_2__["Point"](i, t),
                l = _Geometry_js__WEBPACK_IMPORTED_MODULE_2__["Point"].distance(this._prevPt, e);

            var x, a, y, r, o, m, u, p;
            if (_n3) this._prevIsIn ? this._lineTo(i, t, !0) : (x = this._prevPt, a = e, y = this._intersect(a, x), this.start = this._dist + l * (1 - this._r), this._lineTo(y.x, y.y, !0), this._lineTo(a.x, a.y, !0));else if (this._prevIsIn) a = this._prevPt, x = e, y = this._intersect(a, x), this._lineTo(y.x, y.y, !0), this._lineTo(x.x, x.y, !1);else {
              var _i4 = this._prevPt,
                  _t6 = e;
              if (_i4.x <= this.xmin && _t6.x <= this.xmin || _i4.x >= this.xmax && _t6.x >= this.xmax || _i4.y <= this.ymin && _t6.y <= this.ymin || _i4.y >= this.ymax && _t6.y >= this.ymax) this._lineTo(_t6.x, _t6.y, !1);else {
                var s = [];
                if ((_i4.x < this.xmin && _t6.x > this.xmin || _i4.x > this.xmin && _t6.x < this.xmin) && (r = (this.xmin - _i4.x) / (_t6.x - _i4.x), p = _i4.y + r * (_t6.y - _i4.y), p <= this.ymin ? m = !1 : p >= this.ymax ? m = !0 : s.push(new h(r, this.xmin, p))), (_i4.x < this.xmax && _t6.x > this.xmax || _i4.x > this.xmax && _t6.x < this.xmax) && (r = (this.xmax - _i4.x) / (_t6.x - _i4.x), p = _i4.y + r * (_t6.y - _i4.y), p <= this.ymin ? m = !1 : p >= this.ymax ? m = !0 : s.push(new h(r, this.xmax, p))), (_i4.y < this.ymin && _t6.y > this.ymin || _i4.y > this.ymin && _t6.y < this.ymin) && (r = (this.ymin - _i4.y) / (_t6.y - _i4.y), u = _i4.x + r * (_t6.x - _i4.x), u <= this.xmin ? o = !1 : u >= this.xmax ? o = !0 : s.push(new h(r, u, this.ymin))), (_i4.y < this.ymax && _t6.y > this.ymax || _i4.y > this.ymax && _t6.y < this.ymax) && (r = (this.ymax - _i4.y) / (_t6.y - _i4.y), u = _i4.x + r * (_t6.x - _i4.x), u <= this.xmin ? o = !1 : u >= this.xmax ? o = !0 : s.push(new h(r, u, this.ymax))), 0 === s.length) o ? m ? this._lineTo(this.xmax, this.ymax, !0) : this._lineTo(this.xmax, this.ymin, !0) : m ? this._lineTo(this.xmin, this.ymax, !0) : this._lineTo(this.xmin, this.ymin, !0);else if (s.length > 1 && s[0].ratio > s[1].ratio) this.start = this._dist + l * s[1].ratio, this._lineTo(s[1].x, s[1].y, !0), this._lineTo(s[0].x, s[0].y, !0);else {
                  this.start = this._dist + l * s[0].ratio;

                  for (var _i5 = 0; _i5 < s.length; _i5++) {
                    this._lineTo(s[_i5].x, s[_i5].y, !0);
                  }
                }

                this._lineTo(_t6.x, _t6.y, !1);
              }
            }
            this._dist += l, this._prevIsIn = _n3, this._prevPt = e;
          }
        }, {
          key: "close",
          value: function close() {
            if (this.line.length > 2) {
              var i = this._firstPt,
                  t = this._prevPt;
              i.x === t.x && i.y === t.y || this.lineTo(i.x, i.y);
              var s = this.line;
              var _h = s.length;

              for (; _h >= 4 && (s[0].x === s[1].x && s[0].x === s[_h - 2].x || s[0].y === s[1].y && s[0].y === s[_h - 2].y);) {
                s.pop(), s[0].x = s[_h - 2].x, s[0].y = s[_h - 2].y, --_h;
              }
            }
          }
        }, {
          key: "result",
          value: function result() {
            var i = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : !0;
            return this._pushLine(), 0 === this.lines.length ? null : (3 === this.type && i && l.simplify(this.tileSize, this.margin * this.finalRatio, this.lines), this.lines);
          }
        }, {
          key: "resultWithStarts",
          value: function resultWithStarts() {
            if (2 !== this.type) throw new Error("Only valid for lines");

            this._pushLine();

            var i = this.lines,
                t = i.length;
            if (0 === t) return null;
            var s = [];

            for (var _h2 = 0; _h2 < t; _h2++) {
              s.push({
                line: i[_h2],
                start: this.starts[_h2] || 0
              });
            }

            return s;
          }
        }, {
          key: "_isIn",
          value: function _isIn(i, t) {
            return i >= this.xmin && i <= this.xmax && t >= this.ymin && t <= this.ymax;
          }
        }, {
          key: "_intersect",
          value: function _intersect(i, t) {
            var h, _n4, e;

            if (t.x >= this.xmin && t.x <= this.xmax) _n4 = t.y <= this.ymin ? this.ymin : this.ymax, e = (_n4 - i.y) / (t.y - i.y), h = i.x + e * (t.x - i.x);else if (t.y >= this.ymin && t.y <= this.ymax) h = t.x <= this.xmin ? this.xmin : this.xmax, e = (h - i.x) / (t.x - i.x), _n4 = i.y + e * (t.y - i.y);else {
              _n4 = t.y <= this.ymin ? this.ymin : this.ymax, h = t.x <= this.xmin ? this.xmin : this.xmax;

              var s = (h - i.x) / (t.x - i.x),
                  _l2 = (_n4 - i.y) / (t.y - i.y);

              s < _l2 ? (e = s, _n4 = i.y + s * (t.y - i.y)) : (e = _l2, h = i.x + _l2 * (t.x - i.x));
            }
            return this._r = e, new _Geometry_js__WEBPACK_IMPORTED_MODULE_2__["Point"](h, _n4);
          }
        }, {
          key: "_pushLine",
          value: function _pushLine() {
            this.line && (1 === this.type ? this.line.length > 0 && (this.lines.push(this.line), this.starts.push(this.start)) : 2 === this.type ? this.line.length > 1 && (this.lines.push(this.line), this.starts.push(this.start)) : 3 === this.type && this.line.length > 3 && (this.lines.push(this.line), this.starts.push(this.start))), this.line = [], this.start = 0;
          }
        }, {
          key: "_moveTo",
          value: function _moveTo(i, t, h) {
            3 !== this.type ? h && (i = Math.round((i - (this.xmin + this.margin)) * this.finalRatio), t = Math.round((t - (this.ymin + this.margin)) * this.finalRatio), this.line.push(new _Geometry_js__WEBPACK_IMPORTED_MODULE_2__["Point"](i, t))) : (h || (i < this.xmin && (i = this.xmin), i > this.xmax && (i = this.xmax), t < this.ymin && (t = this.ymin), t > this.ymax && (t = this.ymax)), i = Math.round((i - (this.xmin + this.margin)) * this.finalRatio), t = Math.round((t - (this.ymin + this.margin)) * this.finalRatio), this.line.push(new _Geometry_js__WEBPACK_IMPORTED_MODULE_2__["Point"](i, t)), this._is_h = !1, this._is_v = !1);
          }
        }, {
          key: "_lineTo",
          value: function _lineTo(i, t, h) {
            var _n5, e;

            if (3 !== this.type) {
              if (h) {
                if (i = Math.round((i - (this.xmin + this.margin)) * this.finalRatio), t = Math.round((t - (this.ymin + this.margin)) * this.finalRatio), this.line.length > 0 && (_n5 = this.line[this.line.length - 1], _n5.equals(i, t))) return;
                this.line.push(new _Geometry_js__WEBPACK_IMPORTED_MODULE_2__["Point"](i, t));
              } else this.line && this.line.length > 0 && this._pushLine();
            } else if (h || (i < this.xmin && (i = this.xmin), i > this.xmax && (i = this.xmax), t < this.ymin && (t = this.ymin), t > this.ymax && (t = this.ymax)), i = Math.round((i - (this.xmin + this.margin)) * this.finalRatio), t = Math.round((t - (this.ymin + this.margin)) * this.finalRatio), this.line && this.line.length > 0) {
              _n5 = this.line[this.line.length - 1];

              var _h3 = _n5.x === i,
                  _l3 = _n5.y === t;

              if (_h3 && _l3) return;
              this._is_h && _h3 || this._is_v && _l3 ? (_n5.x = i, _n5.y = t, e = this.line[this.line.length - 2], e.x === i && e.y === t ? (this.line.pop(), this.line.length <= 1 ? (this._is_h = !1, this._is_v = !1) : (e = this.line[this.line.length - 2], this._is_h = e.x === i, this._is_v = e.y === t)) : (this._is_h = e.x === i, this._is_v = e.y === t)) : (this.line.push(new _Geometry_js__WEBPACK_IMPORTED_MODULE_2__["Point"](i, t)), this._is_h = _h3, this._is_v = _l3);
            } else this.line.push(new _Geometry_js__WEBPACK_IMPORTED_MODULE_2__["Point"](i, t));
          }
        }]);

        return n;
      }();

      var e = /*#__PURE__*/function () {
        function e() {
          _classCallCheck(this, e);
        }

        _createClass(e, [{
          key: "setExtent",
          value: function setExtent(i) {
            this._ratio = 4096 === i ? 1 : 4096 / i;
          }
        }, {
          key: "validateTessellation",
          get: function get() {
            return this._ratio < 1;
          }
        }, {
          key: "reset",
          value: function reset(i) {
            this.lines = [], this.line = null;
          }
        }, {
          key: "moveTo",
          value: function moveTo(i, t) {
            this.line && this.lines.push(this.line), this.line = [];
            var h = this._ratio;
            this.line.push(new _Geometry_js__WEBPACK_IMPORTED_MODULE_2__["Point"](i * h, t * h));
          }
        }, {
          key: "lineTo",
          value: function lineTo(i, t) {
            var h = this._ratio;
            this.line.push(new _Geometry_js__WEBPACK_IMPORTED_MODULE_2__["Point"](i * h, t * h));
          }
        }, {
          key: "close",
          value: function close() {
            var i = this.line;
            i && !i[0].isEqual(i[i.length - 1]) && i.push(i[0]);
          }
        }, {
          key: "result",
          value: function result() {
            return this.line && this.lines.push(this.line), 0 === this.lines.length ? null : this.lines;
          }
        }]);

        return e;
      }();

      var l = /*#__PURE__*/function () {
        function l() {
          _classCallCheck(this, l);
        }

        _createClass(l, null, [{
          key: "simplify",
          value: function simplify(i, t, s) {
            if (!s) return;
            var h = -t,
                n = i + t,
                e = -t,
                x = i + t,
                a = [],
                y = [],
                r = s.length;

            for (var _i6 = 0; _i6 < r; ++_i6) {
              var _t7 = s[_i6];
              if (!_t7 || _t7.length < 2) continue;

              var _l8 = void 0,
                  _r3 = _t7[0];

              var _o3 = _t7.length;

              for (var _s3 = 1; _s3 < _o3; ++_s3) {
                _l8 = _t7[_s3], _r3.x === _l8.x && (_r3.x <= h && (_r3.y > _l8.y ? (a.push(_i6), a.push(_s3), a.push(0), a.push(-1)) : (y.push(_i6), y.push(_s3), y.push(0), y.push(-1))), _r3.x >= n && (_r3.y < _l8.y ? (a.push(_i6), a.push(_s3), a.push(1), a.push(-1)) : (y.push(_i6), y.push(_s3), y.push(1), y.push(-1)))), _r3.y === _l8.y && (_r3.y <= e && (_r3.x < _l8.x ? (a.push(_i6), a.push(_s3), a.push(2), a.push(-1)) : (y.push(_i6), y.push(_s3), y.push(2), y.push(-1))), _r3.y >= x && (_r3.x > _l8.x ? (a.push(_i6), a.push(_s3), a.push(3), a.push(-1)) : (y.push(_i6), y.push(_s3), y.push(3), y.push(-1)))), _r3 = _l8;
              }
            }

            if (0 === a.length || 0 === y.length) return;
            l.fillParent(s, y, a), l.fillParent(s, a, y);
            var o = [];
            l.calcDeltas(o, y, a), l.calcDeltas(o, a, y), l.addDeltas(o, s);
          }
        }, {
          key: "fillParent",
          value: function fillParent(i, s, h) {
            var n = h.length,
                e = s.length;

            for (var _l9 = 0; _l9 < e; _l9 += 4) {
              var _e6 = s[_l9],
                  x = s[_l9 + 1],
                  a = s[_l9 + 2],
                  y = i[_e6][x - 1],
                  r = i[_e6][x];
              var o = 8092,
                  m = -1;

              for (var _s4 = 0; _s4 < n; _s4 += 4) {
                if (h[_s4 + 2] !== a) continue;
                var _n6 = h[_s4],
                    _e7 = h[_s4 + 1],
                    _l10 = i[_n6][_e7 - 1],
                    _x2 = i[_n6][_e7];

                switch (a) {
                  case 0:
                  case 1:
                    if (Object(_GeometryUtils_js__WEBPACK_IMPORTED_MODULE_1__["between"])(y.y, _l10.y, _x2.y) && Object(_GeometryUtils_js__WEBPACK_IMPORTED_MODULE_1__["between"])(r.y, _l10.y, _x2.y)) {
                      var _i7 = Math.abs(_x2.y - _l10.y);

                      _i7 < o && (o = _i7, m = _s4);
                    }

                    break;

                  case 2:
                  case 3:
                    if (Object(_GeometryUtils_js__WEBPACK_IMPORTED_MODULE_1__["between"])(y.x, _l10.x, _x2.x) && Object(_GeometryUtils_js__WEBPACK_IMPORTED_MODULE_1__["between"])(r.x, _l10.x, _x2.x)) {
                      var _i8 = Math.abs(_x2.x - _l10.x);

                      _i8 < o && (o = _i8, m = _s4);
                    }

                }
              }

              s[_l9 + 3] = m;
            }
          }
        }, {
          key: "calcDeltas",
          value: function calcDeltas(i, t, s) {
            var h = t.length;

            for (var _n7 = 0; _n7 < h; _n7 += 4) {
              var _h4 = [],
                  _e8 = l.calcDelta(_n7, t, s, _h4);

              i.push(t[_n7]), i.push(t[_n7 + 1]), i.push(t[_n7 + 2]), i.push(_e8);
            }
          }
        }, {
          key: "calcDelta",
          value: function calcDelta(i, t, s, h) {
            var n = t[i + 3];
            if (-1 === n) return 0;
            var e = h.length;
            return e > 1 && h[e - 2] === n ? 0 : (h.push(n), l.calcDelta(n, s, t, h) + 1);
          }
        }, {
          key: "addDeltas",
          value: function addDeltas(i, t) {
            var s = i.length;
            var h = 0;

            for (var _t8 = 0; _t8 < s; _t8 += 4) {
              var _s5 = i[_t8 + 3];
              _s5 > h && (h = _s5);
            }

            for (var _n8 = 0; _n8 < s; _n8 += 4) {
              var _s6 = t[i[_n8]],
                  _e9 = i[_n8 + 1],
                  _l11 = h - i[_n8 + 3];

              switch (i[_n8 + 2]) {
                case 0:
                  _s6[_e9 - 1].x -= _l11, _s6[_e9].x -= _l11, 1 === _e9 && (_s6[_s6.length - 1].x -= _l11), _e9 === _s6.length - 1 && (_s6[0].x -= _l11);
                  break;

                case 1:
                  _s6[_e9 - 1].x += _l11, _s6[_e9].x += _l11, 1 === _e9 && (_s6[_s6.length - 1].x += _l11), _e9 === _s6.length - 1 && (_s6[0].x += _l11);
                  break;

                case 2:
                  _s6[_e9 - 1].y -= _l11, _s6[_e9].y -= _l11, 1 === _e9 && (_s6[_s6.length - 1].y -= _l11), _e9 === _s6.length - 1 && (_s6[0].y -= _l11);
                  break;

                case 3:
                  _s6[_e9 - 1].y += _l11, _s6[_e9].y += _l11, 1 === _e9 && (_s6[_s6.length - 1].y += _l11), _e9 === _s6.length - 1 && (_s6[0].y += _l11);
              }
            }
          }
        }]);

        return l;
      }();
      /***/

    },

    /***/
    "OXZQ":
    /*!*********************************************************************!*\
      !*** ./node_modules/@arcgis/core/views/2d/engine/webgl/Geometry.js ***!
      \*********************************************************************/

    /*! exports provided: Point */

    /***/
    function OXZQ(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "Point", function () {
        return t;
      });
      /*
      All material copyright ESRI, All Rights Reserved, unless otherwise specified.
      See https://js.arcgis.com/4.18/esri/copyright.txt for details.
      */


      var t = /*#__PURE__*/function () {
        function t(_t9, s) {
          _classCallCheck(this, t);

          this.x = _t9, this.y = s;
        }

        _createClass(t, [{
          key: "clone",
          value: function clone() {
            return new t(this.x, this.y);
          }
        }, {
          key: "equals",
          value: function equals(_t10, s) {
            return _t10 === this.x && s === this.y;
          }
        }, {
          key: "isEqual",
          value: function isEqual(_t11) {
            return _t11.x === this.x && _t11.y === this.y;
          }
        }, {
          key: "setCoords",
          value: function setCoords(_t12, s) {
            this.x = _t12, this.y = s;
          }
        }, {
          key: "normalize",
          value: function normalize() {
            var _t13 = this.x,
                s = this.y,
                i = Math.sqrt(_t13 * _t13 + s * s);
            this.x /= i, this.y /= i;
          }
        }, {
          key: "rightPerpendicular",
          value: function rightPerpendicular() {
            var _t14 = this.x;
            this.x = this.y, this.y = -_t14;
          }
        }, {
          key: "move",
          value: function move(_t15, s) {
            this.x += _t15, this.y += s;
          }
        }, {
          key: "assign",
          value: function assign(_t16) {
            this.x = _t16.x, this.y = _t16.y;
          }
        }, {
          key: "assignAdd",
          value: function assignAdd(_t17, s) {
            this.x = _t17.x + s.x, this.y = _t17.y + s.y;
          }
        }, {
          key: "assignSub",
          value: function assignSub(_t18, s) {
            this.x = _t18.x - s.x, this.y = _t18.y - s.y;
          }
        }, {
          key: "rotate",
          value: function rotate(_t19, s) {
            var i = this.x,
                h = this.y;
            this.x = i * _t19 - h * s, this.y = i * s + h * _t19;
          }
        }, {
          key: "scale",
          value: function scale(_t20) {
            this.x *= _t20, this.y *= _t20;
          }
        }, {
          key: "length",
          value: function length() {
            var _t21 = this.x,
                s = this.y;
            return Math.sqrt(_t21 * _t21 + s * s);
          }
        }], [{
          key: "distance",
          value: function distance(_t22, s) {
            var i = s.x - _t22.x,
                h = s.y - _t22.y;
            return Math.sqrt(i * i + h * h);
          }
        }, {
          key: "add",
          value: function add(s, i) {
            return new t(s.x + i.x, s.y + i.y);
          }
        }, {
          key: "sub",
          value: function sub(s, i) {
            return new t(s.x - i.x, s.y - i.y);
          }
        }]);

        return t;
      }();
      /***/

    },

    /***/
    "aixI":
    /*!********************************************************************************!*\
      !*** ./node_modules/@arcgis/core/views/2d/engine/webgl/mesh/templates/util.js ***!
      \********************************************************************************/

    /*! exports provided: dist, getLimitCosine, isExtent, isFunction, isMultipoint, isPoint, isPolygon, isPolyline, len, normalize, sub */

    /***/
    function aixI(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "dist", function () {
        return o;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "getLimitCosine", function () {
        return u;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "isExtent", function () {
        return c;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "isFunction", function () {
        return r;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "isMultipoint", function () {
        return f;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "isPoint", function () {
        return e;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "isPolygon", function () {
        return v;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "isPolyline", function () {
        return d;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "len", function () {
        return t;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "normalize", function () {
        return i;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "sub", function () {
        return n;
      });
      /*
      All material copyright ESRI, All Rights Reserved, unless otherwise specified.
      See https://js.arcgis.com/4.18/esri/copyright.txt for details.
      */


      function n(n, t, i) {
        return n[0] = t[0] - i[0], n[1] = t[1] - i[1], n;
      }

      function t(n, t) {
        return Math.sqrt(n * n + t * t);
      }

      function i(n) {
        var i = t(n[0], n[1]);
        n[0] /= i, n[1] /= i;
      }

      function o(n, i) {
        return t(n[0] - i[0], n[1] - i[1]);
      }

      function r(n) {
        return "function" == typeof n;
      }

      function u(n) {
        return 1 / Math.max(n, 1);
      }

      function c(n) {
        return void 0 !== n.xmin && void 0 !== n.ymin && void 0 !== n.xmax && void 0 !== n.ymax;
      }

      function f(n) {
        return void 0 !== n.points;
      }

      function e(n) {
        return void 0 !== n.x && void 0 !== n.y;
      }

      function d(n) {
        return void 0 !== n.paths;
      }

      function v(n) {
        return void 0 !== n.rings;
      }
      /***/

    }
  }]);
})();
//# sourceMappingURL=default~layers-GeoRSSLayerView2D-js~layers-GraphicsLayerView2D-js~layers-ImageryLayerView2D-js~layer~b07a11e1-es5.js.map